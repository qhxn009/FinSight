import json
import logging
import re
import requests
import time
from zai import ZhipuAiClient
from app.core.config import settings
logger = logging.getLogger(__name__)
SYSTEM_PROMPT_FINANCE_WITH_TOOLS = "你叫FinSight(智见),以智析数,洞见先机。是一位专业的金融分析师。请根据用户问题，选择合适的工具获取数据并给出专业分析."
SYSTEM_PROMPT_FINANCE_NO_TOOLS = "你叫FinSight(智见),以智析数,洞见先机。是一位专业的金融分析师。请根据用户问题，给与专业详细的回答。"
SYSTEM_PROMPT_FINANCE_WEB_SEARCH = "你叫FinSight(智见),以智析数,洞见先机。是一位专业的金融分析师。请根据用户问题，选择合适的工具获取数据并且联网搜索给出专业分析。"
SYSTEM_PROMPT_VISION = "你叫FinSight(智见)。你可以将用户上传的图像进行识别、问答和推理，请根据用户问题，给与专业详细的回答；"
SYSTEM_PROMPT_VISION_WEB_SEARCH = "你叫FinSight(智见)。你可以将用户上传的图像进行识别、问答和推理。还可以根据用户问题，选择联网工具获取数据与内容并给出专业分析。"
MCP_SERVERS = [
    {
        "server_label": "gf_lhb",
        "server_url": "https://mcp-api.gf.com.cn/server/mcp/lhb/mcp",
    },
    {
        "server_label": "gf_quant",
        "server_url": "https://mcp-api.gf.com.cn/server/mcp/quant/mcp",
    },
    {
        "server_label": "gf_etfrank",
        "server_url": "https://mcp-api.gf.com.cn/server/mcp/etf_rank/mcp",
    },
    {
        "server_label": "gf_windmill",
        "server_url": "https://mcp-api.gf.com.cn/server/mcp/windmill/mcp",
    },
]

def _is_valid_token(token: str) -> bool:
    if not token or token.startswith("your_") or token == "" or token.lower() in ("none", "null", "undefined", "placeholder", "here"):
        return False
    return len(token) > 10

def _build_mcp_tools() -> list:
    tools = []
    if _is_valid_token(settings.GFZQ_TOKEN):
        for server in MCP_SERVERS:
            tools.append(
                {
                    "type": "mcp",
                    "mcp": {
                        "server_label": server["server_label"],
                        "server_url": server["server_url"],
                        "transport_type": "streamable-http",
                        "headers": {
                            "Authorization": f"Bearer {settings.GFZQ_TOKEN}"
                        },
                    },
                }
            )
    else:
        logger.warning("GFZQ_TOKEN appears to be a placeholder, broker MCP tools will be disabled")
    return tools

def _build_tavily_tool() -> list:
    if not _is_valid_token(settings.TAVILY_API_KEY):
        logger.warning("TAVILY_API_KEY appears to be a placeholder, Tavily search will be disabled")
        return []
    return [
        {
            "type": "mcp",
            "mcp": {
                "server_label": "tavily_search",
                "server_url": f"https://mcp.tavily.com/mcp/?tavilyApiKey={settings.TAVILY_API_KEY}",
                "transport_type": "streamable-http",
            },
        }
    ]

client = ZhipuAiClient(api_key=settings.GLM_API_KEY, timeout=60, max_retries=2)
mcp_tools = _build_mcp_tools()
tavily_tool = _build_tavily_tool()
has_mcp_tools = bool(mcp_tools)
has_tavily_tool = bool(tavily_tool)
logger.info(f"FinSight initialized: MCP tools {'enabled' if has_mcp_tools else 'disabled'} (GFZQ_TOKEN valid: {_is_valid_token(settings.GFZQ_TOKEN)}), Tavily search {'enabled' if has_tavily_tool else 'disabled'} (TAVILY_API_KEY valid: {_is_valid_token(settings.TAVILY_API_KEY)})")

def _sse_event(data: dict) -> str:
    return f"data: {json.dumps(data, ensure_ascii=False)}\n\n"

def _sse_done() -> str:
    return "data: [DONE]\n\n"

ERROR_CODE_MAP = {
    "1000": "身份验证失败，请检查 API Key 是否正确配置",
    "1001": "请求缺少身份验证参数，请检查 API Key 配置",
    "1002": "API Key 非法，请在 .env 文件中填入有效的 GLM_API_KEY",
    "1003": "API Key 已过期，请重新获取",
    "1004": "API Key 验证失败，请检查配置",
    "1110": "账户处于非活动状态，请检查账户信息",
    "1111": "账户不存在，请确认账户信息",
    "1112": "账户已被锁定，请联系智谱客服解锁",
    "1113": "账户已欠费，请充值后重试",
    "1120": "暂时无法访问账户，请稍后重试",
    "1121": "账户存在违规行为已被锁定，请联系客服",
    "1210": "API 调用参数有误，请检查输入参数",
    "1211": "模型不存在，请检查模型配置",
    "1212": "当前模型不支持此调用方式",
    "1213": "请求缺少必要参数，请检查输入",
    "1214": "请求参数非法，请检查输入",
    "1215": "请求参数冲突，请检查输入",
    "1220": "无权访问该 API，请检查权限",
    "1221": "该 API 已下线",
    "1222": "该 API 不存在",
    "1230": "API 调用流程出错，请稍后重试",
    "1231": "存在重复请求，请稍后重试",
    "1234": "网络错误，请联系智谱客服",
    "1261": "输入内容过长，请精简后重试",
    "1300": "API 调用被策略阻止",
    "1301": "输入或生成内容可能包含不安全或敏感内容，请调整提问方式",
    "1302": "请求频率过高，请稍后再试",
    "1304": "今日调用次数已达上限，请明天再试或联系客服扩容",
    "1305": "模型当前访问量过大，请稍后再试",
    "1308": "已达到使用上限，请等待配额重置后重试",
    "1309": "套餐已到期，请前往智谱官网续订",
    "1310": "已达到周/月使用上限，请等待配额重置",
    "1311": "当前套餐暂无该模型权限，请到智谱官方升级套餐",
    "1312": "模型访问量过大，请稍后重试或切换其他模型",
    "1313": "请求频率受公平使用策略限制，请降低频率后重试",
}

HTTP_STATUS_MAP = {
    "400": "请求参数错误，请检查输入",
    "401": "身份验证失败，请检查 API Key 配置",
    "429": "请求过于频繁或账户余额不足，请稍后重试",
    "500": "服务器内部错误，请稍后重试",
}

_BUSINESS_CODE_RE = re.compile(r'"code"\s*:\s*"(\d{3,4})"')
_HTTP_STATUS_RE = re.compile(r"\bHTTP[/_\s]*(\d{3})\b", re.IGNORECASE)

def _friendly_error(err_str: str) -> str:
    m = _BUSINESS_CODE_RE.search(err_str)
    if m:
        code = m.group(1)
        if code in ERROR_CODE_MAP:
            return ERROR_CODE_MAP[code]

    m = _HTTP_STATUS_RE.search(err_str)
    if not m:
        m = re.search(r"\b(4[0-9]{2}|5[0-9]{2})\b", err_str)
    if m:
        status = m.group(1)
        if status in HTTP_STATUS_MAP:
            return HTTP_STATUS_MAP[status]

    for code, msg in ERROR_CODE_MAP.items():
        if code in err_str:
            return msg

    return "服务暂时不可用，请稍后重试"

def stream_finance_chat(messages: list, thinking_enabled: bool = False, web_search: bool = False):
    tools = []
    if has_mcp_tools:
        tools.extend(mcp_tools)
    if web_search and has_tavily_tool:
        tools.extend(tavily_tool)

    if web_search and has_tavily_tool:
        system_prompt = SYSTEM_PROMPT_FINANCE_WEB_SEARCH
    elif has_mcp_tools:
        system_prompt = SYSTEM_PROMPT_FINANCE_WITH_TOOLS
    else:
        system_prompt = SYSTEM_PROMPT_FINANCE_NO_TOOLS

    full_messages = [{"role": "system", "content": system_prompt}] + messages

    try:
        kwargs = dict(
            model="glm-4.7-flash",
            messages=full_messages,
            stream=True,
            max_tokens=128000,
        )
        if thinking_enabled:
            kwargs["thinking"] = {"type": "enabled"}
        else:
            kwargs["thinking"] = {"type": "disabled"}
        if tools:
            kwargs["tools"] = tools

        logger.info(f"Calling GLM API: model={kwargs['model']}, tools={'yes' if tools else 'no'}, web_search={web_search}, thinking={'enabled' if thinking_enabled else 'disabled'}, messages_count={len(full_messages)}")

        response = client.chat.completions.create(**kwargs)
        for chunk in response:
            if hasattr(chunk, "usage") and chunk.usage:
                yield _sse_event({"type": "usage", "usage": {"prompt_tokens": chunk.usage.prompt_tokens, "completion_tokens": chunk.usage.completion_tokens, "total_tokens": chunk.usage.total_tokens}})
            if not chunk.choices:
                continue
            delta = chunk.choices[0].delta
            if hasattr(delta, "reasoning_content") and delta.reasoning_content:
                yield _sse_event({"type": "thinking", "content": delta.reasoning_content})
            if hasattr(delta, "content") and delta.content:
                yield _sse_event({"type": "content", "content": delta.content})
    except Exception as e:
        err_str = str(e)
        if any(kw in err_str.lower() for kw in ("connection", "aborted", "closed", "reset", "broken", "eof", "cancel")):
            logger.warning(f"Stream connection closed: {e}")
        else:
            logger.error(f"Finance chat error: {e}")
            yield _sse_event({"type": "error", "content": _friendly_error(err_str)})
    yield _sse_done()


def stream_vision_chat(messages: list, image_url: str = None, web_search: bool = False):
    system_prompt = SYSTEM_PROMPT_VISION_WEB_SEARCH if (web_search and has_tavily_tool) else SYSTEM_PROMPT_VISION
    full_messages = [{"role": "system", "content": system_prompt}]
    for msg in messages:
        full_messages.append(msg)

    if image_url:
        last_user_idx = None
        for i in range(len(full_messages) - 1, -1, -1):
            if full_messages[i]["role"] == "user":
                last_user_idx = i
                break
        if last_user_idx is not None:
            original_text = ""
            if isinstance(full_messages[last_user_idx]["content"], str):
                original_text = full_messages[last_user_idx]["content"]
            full_messages[last_user_idx]["content"] = [
                {"type": "image_url", "image_url": {"url": image_url}},
                {"type": "text", "text": original_text},
            ]

    try:
        kwargs = dict(
            model="glm-4v-flash",
            messages=full_messages,
            stream=True,
            max_tokens=1024,
        )
        if web_search and has_tavily_tool:
            kwargs["tools"] = tavily_tool
        logger.info(f"Calling GLM Vision API: model=glm-4v-flash, web_search={web_search}, has_tavily={has_tavily_tool}")
        response = client.chat.completions.create(**kwargs)
        for chunk in response:
            if hasattr(chunk, "usage") and chunk.usage:
                yield _sse_event({"type": "usage", "usage": {"prompt_tokens": chunk.usage.prompt_tokens, "completion_tokens": chunk.usage.completion_tokens, "total_tokens": chunk.usage.total_tokens}})
            if not chunk.choices:
                continue
            delta = chunk.choices[0].delta
            if hasattr(delta, "content") and delta.content:
                yield _sse_event({"type": "content", "content": delta.content})
    except Exception as e:
        err_str = str(e)
        if any(kw in err_str.lower() for kw in ("connection", "aborted", "closed", "reset", "broken", "eof", "cancel")):
            logger.warning(f"Vision stream connection closed: {e}")
        else:
            logger.error(f"Vision chat error: {e}")
            yield _sse_event({"type": "error", "content": _friendly_error(err_str)})
    yield _sse_done()

def generate_image(prompt: str, size: str = "1024x1024") -> dict:
    try:
        response = requests.post(
            "https://open.bigmodel.cn/api/paas/v4/images/generations",
            headers={
                "Authorization": f"Bearer {settings.GLM_API_KEY}",
            },
            json={"model": "cogview-3-flash", "prompt": prompt, "size": size},
            timeout=120,
        )
        if response.status_code != 200:
            err_body = response.text
            logger.error(f"Image generation API error: status={response.status_code}, body={err_body}")
            return {"error": _friendly_error(err_body)}
        data = response.json()["data"]
        return {"url": data[0]["url"]}
    except Exception as e:
        logger.error(f"Image generation error: {e}")
        return {"error": _friendly_error(str(e))}

def _poll_async_result(task_id: str, max_wait: int = 600, interval: int = 5) -> dict:
    url = f"https://open.bigmodel.cn/api/paas/v4/async-result/{task_id}"
    headers = {"Authorization": f"Bearer {settings.GLM_API_KEY}"}
    start = time.time()
    while time.time() - start < max_wait:
        time.sleep(interval)
        try:
            resp = requests.get(url, headers=headers, timeout=(10, 60))
            if resp.status_code != 200:
                logger.warning(f"Poll async result status: {resp.status_code}")
                continue
            data = resp.json()
            status = data.get("task_status", "")
            if status == "SUCCESS":
                return data
            if status == "FAIL":
                return {"error": "视频生成失败，请修改描述后重试"}
        except requests.exceptions.ReadTimeout:
            logger.warning(f"Poll async result read timeout, retrying... ({int(time.time() - start)}s elapsed)")
            continue
        except Exception as e:
            logger.warning(f"Poll async result error: {e}")
            continue
    return {"error": "视频生成超时，请稍后重试"}

def generate_video(prompt: str, quality: str = "speed", with_audio: bool = False, size: str = "1920x1080", fps: int = 30, image_url: str = None) -> dict:
    try:
        payload = {
            "model": "cogvideox-flash",
            "prompt": prompt,
            "quality": quality,
            "with_audio": with_audio,
            "size": size,
            "fps": fps,
        }
        if image_url:
            payload["image_url"] = image_url
        response = requests.post(
            "https://open.bigmodel.cn/api/paas/v4/videos/generations",
            headers={
                "Authorization": f"Bearer {settings.GLM_API_KEY}",
                "Content-Type": "application/json",
            },
            json=payload,
            timeout=60,
        )
        if response.status_code != 200:
            err_body = response.text
            logger.error(f"Video generation API error: status={response.status_code}, body={err_body}")
            return {"error": _friendly_error(err_body)}
        resp_data = response.json()
        task_id = resp_data.get("id")
        if not task_id:
            return {"error": "未获取到任务ID，请稍后重试"}
        result = _poll_async_result(task_id)
        if "error" in result:
            return result
        video_result = result.get("video_result", [])
        if not video_result:
            return {"error": "视频生成结果为空，请稍后重试"}
        video = video_result[0]
        return {"url": video.get("url", ""), "cover_url": video.get("cover_image_url", "")}
    except Exception as e:
        logger.error(f"Video generation error: {e}")
        return {"error": _friendly_error(str(e))}
