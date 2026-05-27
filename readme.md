<h1 align="center">FinSight · 智见</h1>
<h2 align="center"><strong>以智析数，洞见先机</strong></h2>
<p align="center">
  <img src="https://img.shields.io/badge/Python-3.10+-green.svg" alt="Python">
  <img src="https://img.shields.io/badge/FastAPI-0.115+-009688.svg" alt="FastAPI">
  <img src="https://img.shields.io/badge/GLM-智谱AI-7571f9.svg" alt="GLM">
  <img src="https://img.shields.io/badge/Z.ai SDK-智谱AI-7571f9.svg" alt="Z.ai SDK">
  <img src="https://img.shields.io/badge/MCP-广发证券-FF6B35.svg" alt="券商MCP">
  <img src="https://img.shields.io/badge/SSE-Streaming-brightgreen.svg" alt="SSE">
  <a href="https://github.com/qhxn009/FinSight/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License"></a>
</p>

<p align="center">
  FinSight 提供股市数据智能分析、图表识别分析、图片生成、视频生成，4大核心能力<br>
  <strong style="color:red;font-size:1.1em">0费用</strong>使用满血版大模型+A股数据，让用户通过自然语言即可获取专业金融数据分析与图像理解服务。
</p>

## 项目特色

- **金融对话** — 基于智谱大模型 + 券商 MCP 实时行情工具，支持龙虎榜分析、财务分析、热门 ETF 榜单、指数估值等多维度金融数据查询与专业解读。
- **图表分析** — 上传 K 线图、财报截图等金融图片，AI 通过 GLM 视觉模型智能识别并给出专业分析
- **图片生成** — 基于智谱免费图像生成模型，实现"文生图"模式，用户输入文字描述即可生成图片。能够显著提升 PPT 制作的效率。
- **视频生成** — 基于智谱免费视频生成模型，实现"文生视频"、"图生视频"、"首尾帧视频生成"，3种模式。
- **0费用成本** — 使用免费的 GLM 模型 + 免费的广发证券 token，用户无需付费。
- **对话管理** — 多会话管理，历史记录自动保存至浏览器本地，而非像模型官方对话网页储存在它们的服务器。
- **轻量** — 新手都可以完成二次开发，毕竟项目没有太多代码，更没有复杂的东西；
- **开箱即用** — 纯前端无框架依赖，响应式设计，桌面与移动端均可流畅使用。
- **MCP 自动检测** — 自动检测 Token 无效时，智能启用/禁用，优雅降级，不会报错。
- **文档完善** — help.html、models.html、doc/ 目录提供了从使用到二次开发的完整指南；不藏着掖着，完全公开。
- **SSE 流式体验** — 思考过程可折叠查看，token 用量实时显示。
- **流式响应** — 基于 SSE 的流式传输，实时展示思考过程与回答内容。
- **深度思考** — 支持开启深度思考模式，模型在回答前进行多步推理与逻辑分析，思考过程可折叠查看。
- **暗色模式** — 明暗双主题切换，支持 View Transitions API 动画过渡。
- **社区支持** — 在我们的官方社区可以进行学习，交流，提问。

## 功能介绍

1 功能大类介绍

| 核心能力 | data-mode | 功能说明 | 快捷方式 |
|---------|------|---------|---------|
| 金融分析 | finance | 基于券商实时行情，支持当前和历史的龙虎榜分析、当前和历史的深度财务分析、热门 ETF 榜单、指数估值与ETF联动等多维度查询与专业解读 | 支持自定义 |
| 图表识别分析 | vision | 上传 K 线图、财报截图、经济数据走势等金融图片，AI 智能识别并给出专业分析建议 | / |
| 图片生成 | image | 输入文字描述即可生成图片，支持 7 种尺寸选择，能够显著提升 PPT 制作效率 | 支持自定义 |
| 视频生成 | video | "文生视频"、"图生视频"、"首尾帧视频生成"，3种模式，可调节分辨率（8种，最高支持4K）、帧率（30/60 FPS）、AI 音效开关 | 支持自定义|

2 金融分析功能介绍

| 工具 | 功能 |
|------|------|
| 财务分析 | 单个分析、对比分析。覆盖：上市日期、估值、盈利、现金流量表、利润表、资产负债表、资本结构、行业信息、行业均值、行业龙头、行业内市值相近的股票、行业内PE相近的股票、行业前二、申万行业名称等 |
| 龙虎榜 | 沪深两市龙虎榜数据，包括上榜统计、营业部排名、资金流向等;可以查询当日和历史数据 |
| 热门 ETF | 涨跌榜、搜索榜、关注榜、换手榜、主力资金榜、净申购榜、溢价率榜、特色榜等多维度统计 |
| 指数估值 | 宽基/行业/主题指数 PE/PB 百分位估值，ETF 联动分析 |

## 技术架构

项目采用经典的 **三层架构**，代码量极其精简，适合二次开发+量化选股集成：

```
app/main.py          → 入口层：FastAPI 应用、路由挂载、静态文件
app/core/config.py   → 配置层：环境变量管理
app/core/glm_client.py → 核心层：LLM 调用 + 工具 + 错误处理（最关键模块）
app/api/chat.py      → API 层：参数校验与分发（薄层）
app/static/          → 前端层：纯原生实现
```
**数据流**：

```
用户输入 → chat.py (校验) → glm_client.py (构建请求)
  → Zhipu SDK → 智谱 API → MCP 工具调用
  → 流式 chunk → yield SSE 事件 → StreamingResponse → 前端渲染
```

## 项目目录

```
FinSight/
├── requirements.txt         # Python 依赖
├── .env.example             # 环境变量模板
├── .env                     # 环境变量（不提交到 git）
├── app/
│   ├── main.py              # FastAPI 入口，挂载路由与静态文件
│   ├── core/
│   │   ├── config.py        # 环境变量配置管理
│   │   └── glm_client.py    # GLM 客户端封装
│   ├── api/
│   │   └── chat.py          # SSE 流式 API 端点
│   └── static/
│       ├── index.html       # 主前端页面
│       ├── help.html        # 帮助文档页面
│       ├── tools.html       # skill,mcp,models,Datasets,tools,agent
│       ├── models.html      # 智谱模型介绍页面
│       ├── assets/
│       │   ├── style.css    # 全局样式
│       │   ├── theme.js     # 主题切换
│       │   ├── scroll-nav.js# 文档页面导航滚动自动检测
│       │   ├── marked.min.js# Markdown 解析渲染
│       │   ├── purify.min.js# XSS 防护
│       │   └── unicorn.svg  # Logo 图标（可替换）
├── doc/                     # 开发参考文档
│   ├── thinking.md          # 深度思考功能说明
│   ├── thinking-mode.md     # GLM 思考模式详解
│   ├── model-overview.md    # 智谱全系模型概览
│   ├── api-code.md          # API 错误码参考
│   ├── zai-sdk.md           # zai-sdk 使用手册
│   └── tavilyMCP.md         # Tavily MCP 配置指南
└── readme.md                # 本文档
```

## 快速开始

### 前置条件

1.必要条件

- Python 3.10+

- 智谱 AI API Key（[免费申请](https://www.bigmodel.cn/invite?icode=%2F7GW43rLVlqOKpBa8XiSvGczbXFgPRGIalpycrEwJ28%3D)）默认为免费模型，均不会产生任何费用；如果你需要付费模型，对话功能推荐使用 **GLM-5.1** 是智谱最新旗舰模型，**代码能力目前国内最强**(截至2026年5月)，完成从规划、执行到迭代优化的完整闭环，交付工程级成果。图表解析功能推荐 **GLM-5V-Turbo** 是智谱首个多模态 Coding 基座模型。深度适配 Agent 工作流，能够与Agent 深度协同，完成"看懂环境→规划动作→执行任务"的完整闭环。

2.建议可选条件

- 券商 MCP Token（[免费申请](https://www.gf.com.cn/)）

- Tavily API Key（[可选，用于联网搜索](https://www.tavily.com/)）Tavily 是一个专为 AI Agent 和 LLM 优化的搜索引擎 API。Tavily 是一个专为 AI 智能体（AI Agents）和大型语言模型（LLM）优化的实时搜索 API，旨在提供准确、最新且无幻觉的高质量搜索结果。直接把最相关的结构化内容喂给你的模型。

### 下载项目

```bash
git clone https://github.com/qhxn009/FinSight.git
cd FinSight
```

### 安装依赖

```bash
pip install -r requirements.txt
```

### 配置环境变量

```bash
cp .env.example .env
```

编辑 `.env` 文件，填入你的 API Key：

```env
GLM_API_KEY=your-glm-api-key-here
GFZQ_TOKEN=your-gfzq-token-here
TAVILY_API_KEY=your-tavily-api-key-here
```

> **说明**： 自动检测 `GFZQ_TOKEN` 和 `TAVILY_API_KEY` Token 未设置或为占位值时，智能启用/禁用，优雅降级，不会报错

### 启动服务

```bash
python -m uvicorn app.main:app --host 0.0.0.0 --port 8000
```

或使用 `python3` 命令，如果均无效或报错，检查自己的 python 环境

### 访问服务

打开浏览器访问 `http://localhost:8000`

> **⚠️**： 如果端口 `8000` 已经被占用，则可以修改源码，更改为其他端口

## API

### POST /api/chat/stream

SSE 流式对话接口。

**请求体：**

```json
{
  "messages": [
    {"role": "user", "content": "分析今日龙虎榜数据"}
  ],
  "mode": "finance",
  "image_url": null,
  "thinking": false
}
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `messages` | `array` | — | 对话消息列表 |
| `mode` | `string` | `"finance"` | `"finance"` 金融对话 / `"vision"` 图表分析 |
| `image_url` | `string` | `null` | 图片 base64 或 URL（vision 模式） |
| `thinking` | `boolean` | `false` | 是否启用深度思考 |

**SSE 事件格式：**

```
data: {"type": "thinking", "content": "思考过程..."}
data: {"type": "content", "content": "回答内容..."}
data: {"type": "error", "content": "错误信息"}
data: [DONE]
```

## 🔑 核心模块详解

### 1. `/app/core/glm_client.py` — 项目心脏

这是整个项目最核心的文件，承担了以下职责：

- **MCP 工具管理**：自动检测 `GFZQ_TOKEN` 有效性，智能启用/禁用 4 类金融数据工具（龙虎榜 `gf_lhb`、财务分析 `gf_quant`、ETF 榜单 `gf_etfrank`、指数估值 `gf_windmill`）
- **Tavily 联网搜索**：可选的联网搜索工具，同样自动检测 Token 有效性
- **双模式对话**：`stream_finance_chat()` 金融对话 + `stream_vision_chat()` 图表分析
- **图片生成**：`generate_image(prompt, size)` 调用 CogView-3-Flash 模型生成图片，支持 7 种尺寸，复用 `GLM_API_KEY`
- **深度思考**：通过 `thinking` 参数启用 GLM 的多步推理模式
- **错误处理**：完整的 `ERROR_CODE_MAP`（30+ 业务错误码）+ `HTTP_STATUS_MAP`，将技术错误码转为用户友好的中文提示
- **SSE 格式化**：统一的事件格式（`thinking`/`content`/`error`/`usage`/`[DONE]`）

### 2. `app/api/chat.py`— API 路由

两个端点：

**`POST /api/chat/stream`** — SSE 流式对话，支持 5 个参数：

- `messages`：对话消息列表
- `mode`：`finance`（金融对话）或 `vision`（图表分析）
- `image_url`：图片 base64 或 URL
- `thinking`：是否启用深度思考
- `web_search`：是否启用联网搜索

**`POST /api/chat/image/generate`** — 图片生成（同步 JSON 响应），支持 2 个参数：

- `prompt`：图片描述文本（必填）
- `size`：图片尺寸，默认 `1024x1024`

### 3. `app/static/index.html` — 前端单页应用

纯原生实现，约 590 行，包含：

- **左侧边栏**：Logo、4 种模式切换（金融对话/图表分析/图片生成/视频生成）、对话列表管理
- **中间对话区**：消息流、SSE 流式渲染、Markdown 渲染（marked + DOMPurify）
- **右侧边栏**：功能介绍卡片 + 快捷操作按钮
- **对话持久化**：localStorage 存储，最多 50 个会话
- **主题切换**：明暗双主题，支持 View Transitions API 动画

## 开发参考

项目 `doc/` 目录收录了以下参考资料：

- [深度思考](doc/thinking.md) — GLM 深度思考功能与代码示例
- [思考模式](doc/thinking-mode.md) — 交错式思考、保留式思考、轮级思考
- [模型概览](doc/model-overview.md) — 智谱全系模型规格一览
- [API 错误码](doc/api-code.md) — HTTP 状态码与业务错误码全集
- [zai-sdk](doc/zai-sdk.md) — 智谱 Python SDK 安装与使用
- [Tavily MCP](doc/tavilyMCP.md) — Tavily 联网搜索 MCP 配置

常见的错误提示：

| 场景 | 提示 |
|------|------|
| API Key 无效 | 身份验证失败，请检查 API Key 是否正确配置 |
| MCP Token 无效 | MCP 服务配置无效（GFZQ_TOKEN 未设置或为占位值） |
| 账户欠费 | 账户已欠费，请充值后重试 |
| 频率限制 | 请求频率过高，请稍后再试 |
| 内容安全 | 输入或生成内容可能包含不安全或敏感内容 |

完整错误码列表见 [`doc/api-code.md`](doc/api-code.md)。

## 帮助文档

- 项目自带的 `help.html` 文件，可在线查看帮助文档,覆盖：功能说明、操作指南、常见问题。
- 项目自带的 `models.html` 文件— 智谱全系模型概览（文本/视觉/图像/视频/音视频/向量）
- [部署 FinSight 到云服务器](https://www.24krmb.com/thread-4618-1-1.html) — 如果你，学习云端部署，可以参考本教材
- [通过宝塔面板部署 FinSight 到云服务器](https://www.24krmb.com/thread-4622-1-1.html) — 本教程将指导你通过宝塔面板将 FinSight 部署到云服务器上，实现公网访问。
- [上传 FinSight 到 GitHub](https://www.24krmb.com/thread-4617-1-1.html) — 如果你，学习Git与Github，可以参考本教材
- [Git版本控制介绍](https://www.24krmb.com/thread-4619-1-1.html) — 如果你，学习Git与Github，可以参考本教材

## 致谢

- [智谱 AI](https://www.bigmodel.cn/invite?icode=%2F7GW43rLVlqOKpBa8XiSvGczbXFgPRGIalpycrEwJ28%3D) — GLM 大模型与 zai-sdk
- [广发证券](https://www.gf.com.cn/) — MCP 金融数据服务
- [npmmirror](https://registry.npmmirror.com/) — npm 包加速镜像源
- [24KRMB.COM](https://www.24krmb.com/) — 技术支持与社区

## 许可证

[MIT](LICENSE)
