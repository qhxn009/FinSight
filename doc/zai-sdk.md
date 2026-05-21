#  Z.ai 开放平台 Python SDK

[智谱开放平台](https://docs.bigmodel.cn/cn/guide/develop/python/introduction)官方 Python SDK，帮助开发者快速集成智谱强大的人工智能能力到Python应用中。

[github](https://github.com/zai-org/z-ai-sdk-python)官方 Python SDK，帮助开发者快速集成智谱强大的人工智能能力到Python应用中。

## 📦 安装

### 环境要求
- Python 3.8 或更高版本
- pip 包管理器

### 使用 pip 安装

```sh
pip install zai-sdk
```
### 📋 **技术规格**

#### **Python 支持**
- **Python 版本**: 3.8, 3.9, 3.10, 3.11, 3.12
- **异步支持**: 完整的 async/await 兼容性
- **跨平台**: Windows、macOS、Linux 支持

#### **核心依赖**

本SDK使用以下核心依赖库：

| 依赖库 | 版本 | 用途 |
|--------|-----|------|
| `httpx` | `>=0.23.0` | HTTP客户端库 |
| `pydantic` | `>=1.9.0,<3.0.0` | 数据验证和序列化 |
| `typing-extensions` | `>=4.0.0` | 类型注解扩展 |
| `cachetools` | `>=4.2.2` | 缓存工具 |
| `pyjwt` | `>=2.8.0` | JSON Web Token 库 |

## 🚀 快速开始

### 创建 API Key

#### API BASE URL
- **中国大陆区域**: `https://open.bigmodel.cn/api/paas/v4/`
- **海外区域**: `https://api.z.ai/api/paas/v4/`

#### 使用步骤

1. **使用API密钥创建客户端**
2. **调用相应的API方法**

完整示例请参考开放平台[接口文档](https://docs.z.ai/api-reference/)以及[使用指南](https://docs.z.ai/guides/)，记得替换为您自己的API密钥。

### 基本用法
### Basic Usage

```python
from zai import ZaiClient, ZhipuAiClient

# 对于海外用户，使用ZaiClient
client = ZaiClient(api_key="your-api-key")

# 对于中国大陆用户，使用ZhipuAiClient
client = ZhipuAiClient(api_key="your-api-key")

# Create chat completion
response = client.chat.completions.create(
    model="glm-5.1",
    messages=[
        {"role": "user", "content": "Hello, Z.ai!"}
    ]
)
print(response.choices[0].message.content)
```

### 客户端配置

SDK支持多种方式配置API密钥：

**环境变量配置：**
```bash
export ZAI_API_KEY="your_api_key_here"
export ZAI_BASE_URL="https://api.z.ai/api/paas/v4/"  # 可选
```

**代码配置：**
```python
from zai import ZaiClient, ZhipuAiClient

client = ZaiClient(
    api_key="your_api_key_here",  # 填写您的 APIKey
    base_url="https://api.z.ai/api/paas/v4/"  # 可选
)

# 如果你想使用智谱的域名
zhipu_client = ZhipuAiClient(
    api_key="your_api_key_here",  # 填写您的 APIKey
    base_url="https://open.bigmodel.cn/api/paas/v4/"  # 可选
)
```

**高级配置：**

SDK提供了灵活的客户端配置选项：

```python
import httpx
from zai import ZaiClient

client = ZaiClient(
    api_key="your_api_key_here",
    timeout=httpx.Timeout(timeout=300.0, connect=8.0),  # 超时配置
    max_retries=3,  # 重试次数
    base_url="https://api.z.ai/api/paas/v4/"  # Custom API endpoint
)
```

**配置选项：**
- `timeout`: 控制接口连接和读取超时时间
- `max_retries`: 控制重试次数，默认为3次
- `base_url`: 自定义API基础URL


## 💡 使用示例

### 流式对话

```python
from zai import ZaiClient

# 初始化客户端
client = ZaiClient(api_key="your-api-key")

# 创建对话
response = client.chat.completions.create(
    model='glm-5.1',
    messages=[
        {'role': 'system', 'content': 'You are a helpful assistant.'},
        {'role': 'user', 'content': 'Tell me a story about AI.'},
    ],
    stream=True,
)

for chunk in response:
    if chunk.choices[0].delta.content:
        print(chunk.choices[0].delta.content, end='')
```

### 工具调用

```python
from zai import ZaiClient

# 初始化客户端
client = ZaiClient(api_key="your-api-key")

# 创建对话
response = client.chat.completions.create(
    model='glm-5.1',
    messages=[
        {'role': 'system', 'content': 'You are a helpful assistant.'},
        {'role': 'user', 'content': 'What is artificial intelligence?'},
    ],
    tools=[
        {
            'type': 'web_search',
            'web_search': {
                'search_query': 'What is artificial intelligence?',
                'search_result': True,
            },
        }
    ],
    temperature=0.5,
    max_tokens=2000,
)

print(response)
```

### 多模态对话

```python
from zai import ZaiClient
import base64

def encode_image(image_path):
    """将图片编码为base64格式"""
    with open(image_path, 'rb') as image_file:
        return base64.b64encode(image_file.read()).decode('utf-8')

client = ZaiClient(api_key="your-api-key")
base64_image = encode_image('examples/test_multi_modal.jpeg')

response = client.chat.completions.create(
    model='glm-5v-turbo',
    messages=[
        {
            'role': 'user',
            'content': [
                {'type': 'text', 'text': "请描述这张图片的内容"},
                {'type': 'image_url', 'image_url': {'url': f'data:image/jpeg;base64,{base64_image}'}},
            ],
        }
    ],
    temperature=0.5,
    max_tokens=2000,
)
print(response)
```

### 视频生成

```python
from zai import ZaiClient

client = ZaiClient()  # 请填写您自己的APIKey

# 提交生成任务
response = client.videos.generations(
    model="cogvideox-3",  # 使用的视频生成模型
    image_url=image_url,  # 提供的图片URL地址或者 Base64 编码
    prompt="让画面动起来",  
    quality="speed",  # 输出模式，"quality"为质量优先，"speed"为速度优先
    with_audio=True,
    size="1920x1080",  # 视频分辨率，支持最高4K（如: "3840x2160"）
    fps=30,  # 帧率，可选为30或60
)
print(response)

# 获取生成结果
result = client.videos.retrieve_videos_result(id=response.id)
print(result)
```

## 🚨 异常处理

SDK提供了完善的异常处理机制：

```python
from zai import ZaiClient
import zai

client = ZaiClient(api_key="your-api-key")  # 请填写您自己的APIKey

try:
    response = client.chat.completions.create(
        model="glm-5.1",
        messages=[
            {"role": "user", "content": "你好， Z.ai ！"}
        ]
    )
    print(response.choices[0].message.content)
    
except zai.core.APIStatusError as err:
    print(f"API状态错误: {err}")
except zai.core.APITimeoutError as err:
    print(f"请求超时: {err}")
except Exception as err:
    print(f"其他错误: {err}")
```

### 错误码说明

| 状态码 | 错误类型 | 说明 |
|--------|----------|------|
| 400 | `APIRequestFailedError` | 请求参数错误 |
| 401 | `APIAuthenticationError` | 身份验证失败 |
| 429 | `APIReachLimitError` | 请求频率超限 |
| 500 | `APIInternalError` | 服务器内部错误 |
| 503 | `APIServerFlowExceedError` | 服务器流量超限 |
| N/A | `APIStatusError` | 通用API错误 |
