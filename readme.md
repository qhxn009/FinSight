<h1 align="center">FinSight · 智见</h1>
<h2 align="center"><strong>以智析数，洞见先机</strong></h2>
<p align="center">
  <a href="https://github.com/qhxn009/FinSight/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License"></a>
  <img src="https://img.shields.io/badge/Python-3.10+-green.svg" alt="Python">
  <img src="https://img.shields.io/badge/FastAPI-0.115+-009688.svg" alt="FastAPI">
  <img src="https://img.shields.io/badge/GLM--4.7--Flash-智谱AI-7571f9.svg" alt="GLM">
  <img src="https://img.shields.io/badge/MCP-券商-FF6B35.svg" alt="券商MCP">
  <img src="https://img.shields.io/badge/SSE-Streaming-brightgreen.svg" alt="SSE">
</p>

<p align="center">
  FinSight 基于券商 MCP 和智谱 GLM 大模型的 AI 对话分析助手，提供金融数据智能分析和图像识别两大核心能力<br>
  <strong style="color:red;font-size:1.1em">0费用</strong>使用满血版大模型+A股数据，让用户通过自然语言即可获取专业金融数据分析与图像理解服务。
</p>

## 特色

- **0费用** — 使用满血版大模型+A股数据
- **开箱即用** — 纯前端无框架依赖，响应式设计，桌面与移动端均可流畅使用
- **资料完善** — 从使用帮助，二次开发，都有详细的介绍页面和文档；不藏着掖着，完全公开
- **轻量** — **新手都可以完成二次开发**，毕竟项目没有太多代码，更没有复杂的东西，项目代码占比：HTML(76.6%)、CSS(13.4%)、Python(8.5%)、JavaScript(1.5%)

## 功能特性

- **金融对话** — 基于智谱大模型 + 券商 MCP 实时行情工具，支持龙虎榜分析、财务分析、热门 ETF 榜单、指数估值等多维度金融数据查询与专业解读
- **图表分析** — 上传 K 线图、财报截图等金融图片，AI 通过 GLM 视觉模型智能识别并给出专业分析
- **深度思考** — 支持开启深度思考模式，模型在回答前进行多步推理与逻辑分析，思考过程可折叠查看
- **MCP 工具** — 自动检测券商 Token 有效性，智能启用/禁用四类金融数据工具
- **流式响应** — 基于 SSE 的流式传输，实时展示思考过程与回答内容
- **暗色模式** — 明暗双主题切换，支持 View Transitions API 动画过渡
- **对话管理** — 多会话管理，历史记录自动保存至浏览器本地，而非像模型官方对话网页储存在它们的服务器；

## 券商 MCP 数据工具

| 工具 | 标签 | 功能 |
|------|------|------|
| 财务分析 | `gf_quant` | 单个分析、对比分析。覆盖：上市日期、估值、盈利、现金流量表、利润表、资产负债表、资本结构、行业信息、行业均值、行业龙头、行业内市值相近的股票、行业内PE相近的股票、行业前二、申万行业名称等 |
| 龙虎榜 | `gf_lhb` | 沪深两市龙虎榜数据，包括上榜统计、营业部排名、资金流向等;可以查询当日和历史数据 |
| 热门 ETF | `gf_etfrank` | 涨跌榜、搜索榜、关注榜、换手榜、主力资金榜、净申购榜、溢价率榜、特色榜等多维度统计 |
| 指数估值 | `gf_windmill` | 宽基/行业/主题指数 PE/PB 百分位估值，ETF 联动分析 |

## 架构

```
FinSight/
├── app/
│   ├── main.py              # FastAPI 入口，挂载路由与静态文件
│   ├── core/
│   │   ├── config.py        # 环境变量配置管理（GLM_API_KEY, GFZQ_TOKEN）
│   │   └── glm_client.py    # GLM 客户端封装（金融对话 + 图像识别 + MCP集成 + 深度思考）
│   ├── api/
│   │   └── chat.py          # SSE 流式 API 端点 /api/chat/stream
│   └── static/
│       ├── index.html       # 主前端页面
│       ├── help.html        # 帮助文档页面
│       ├── models.html      # 智谱模型介绍页面
│       ├── assets/
│       │   ├── style.css    # 全局样式（明暗主题、响应式）
│       │   ├── models.css   # models.html 专用样式
│       │   ├── theme.js     # 主题切换（三个页面共用）
│       │   ├── scroll-nav.js# 文档页面导航滚动自动检测
│       │   ├── marked.min.js# Markdown 解析渲染
│       │   ├── purify.min.js# XSS 防护
│       │   └── unicorn.svg  # Logo 图标
├── doc/                     # 开发参考文档
│   ├── thinking.md          # 深度思考功能说明
│   ├── thinking-mode.md     # GLM 思考模式详解
│   ├── model-overview.md    # 智谱全系模型概览
│   ├── api-code.md          # API 错误码参考
│   ├── zai-sdk.md           # zai-sdk 使用手册
│   └── tavilyMCP.md         # Tavily MCP 配置指南
├── .env                     # 环境变量（不提交到 git）
├── .env.example             # 环境变量模板
├── requirements.txt         # Python 依赖
└── readme.md                # 本文档
```

## 快速开始

### 前置条件
1.必要条件
- Python 3.10+
- 智谱 AI API Key（[免费申请](https://www.bigmodel.cn/invite?icode=%2F7GW43rLVlqOKpBa8XiSvGczbXFgPRGIalpycrEwJ28%3D)）默认为免费模型，均不会产生任何费用；如果你需要付费模型，对话功能推荐使用 **GLM-5.1** 是智谱最新旗舰模型，代码能力目前国内最强(截至2026年5月)，长程任务显著提升，能够在单次任务中持续、自主地工作长达 8 小时，完成从规划、执行到迭代优化的完整闭环，交付工程级成果。图标解析功能推荐 **GLM-5V-Turbo** 是智谱首个多模态 Coding 基座模型，面向视觉编程任务打造。深度适配 Agent 工作流，能够与Agent 深度协同，完成”看懂环境→规划动作→执行任务”的完整闭环。

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

> **说明**：`GFZQ_TOKEN` 未设置或为占位值时，MCP 数据工具将自动禁用，模型将基于自身知识回答。

### 启动服务

```bash
python -m uvicorn app.main:app --host 0.0.0.0 --port 8000
```

### 访问服务

打开浏览器访问 `http://localhost:8000`

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

## 错误码

常见的错误提示：

| 场景 | 提示 |
|------|------|
| API Key 无效 | 身份验证失败，请检查 API Key 是否正确配置 |
| MCP Token 无效 | MCP 服务配置无效（GFZQ_TOKEN 未设置或为占位值） |
| 账户欠费 | 账户已欠费，请充值后重试 |
| 频率限制 | 请求频率过高，请稍后再试 |
| 内容安全 | 输入或生成内容可能包含不安全或敏感内容 |

完整错误码列表见 [`doc/api-code.md`](doc/api-code.md)。

## 开发参考

项目 `doc/` 目录收录了以下参考资料：

- [深度思考](doc/thinking.md) — GLM 深度思考功能与代码示例
- [思考模式](doc/thinking-mode.md) — 交错式思考、保留式思考、轮级思考
- [模型概览](doc/model-overview.md) — 智谱全系模型规格一览
- [API 错误码](doc/api-code.md) — HTTP 状态码与业务错误码全集
- [zai-sdk](doc/zai-sdk.md) — 智谱 Python SDK 安装与使用
- [Tavily MCP](doc/tavilyMCP.md) — Tavily 联网搜索 MCP 配置

## 帮助文档


- 项目自带的 `help.html` 文件，可在线查看帮助文档,覆盖：功能说明、操作指南、常见问题。
- 项目自带的 `models.html` 文件— 智谱全系模型概览（文本/视觉/图像/视频/音视频/向量）
- [部署 FinSight 到云服务器](https://www.24krmb.com/thread-4618-1-1.html) — 如果你，学习云端部署，可以参考本教材
- [上传 FinSight 到 GitHub](https://www.24krmb.com/thread-4617-1-1.html) — 如果你，学习Git与Github，可以参考本教材
- [Git版本控制介绍](https://www.24krmb.com/thread-4619-1-1.html) — 如果你，学习Git与Github，可以参考本教材

## 致谢

- [智谱 AI](https://www.bigmodel.cn/invite?icode=%2F7GW43rLVlqOKpBa8XiSvGczbXFgPRGIalpycrEwJ28%3D) — GLM 大模型与 zai-sdk
- [券商](https://www.gf.com.cn/) — MCP 金融数据服务
- [24KRMB.COM](https://www.24krmb.com/) — 技术支持与社区

## 许可证

[MIT](LICENSE)
