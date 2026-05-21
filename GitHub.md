# 上传 FinSight 到 GitHub

## 无需上传的文件

以下文件/目录包含敏感信息、编译缓存或系统文件，**不应**上传到 GitHub：

| 文件/目录 | 原因 |
|-----------|------|
| `.env` | 包含 `GLM_API_KEY`、`GFZQ_TOKEN`、`TAVILY_API_KEY` 等敏感凭据，**严禁提交** |
| `app/core/__pycache__/` | Python 字节码缓存，自动生成 |
| `app/api/__pycache__/` | Python 字节码缓存，自动生成 |
| `app/__pycache__/` | Python 字节码缓存，自动生成 |
| `.DS_Store` | macOS 系统文件，自动生成 |

> **可选忽略**：`doc/` 目录下的文档（`thinking.md`、`thinking-mode.md`、`model-overview.md`、`api-code.md`、`zai-sdk.md`、`tavilyMCP.md`、`tavilyMCP.md`）为智谱官方/第三方的参考资料，属于外部文档。如果仓库希望保持简洁，可以不上传；但保留它们方便其他开发者查阅，上传也无妨。

## 第一步：创建 .gitignore

在项目根目录创建 `.gitignore` 文件，写入以下内容：

```gitignore
# 环境变量（含 API Key，禁止提交）
.env

# Python 字节码缓存
__pycache__/
*.pyc
*.pyo

# macOS 系统文件
.DS_Store

# IDE 配置（可选）
.idea/
.vscode/
*.swp
*.swo

# 其他
*.egg-info/
dist/
build/
```

## 第二步：初始化 Git 仓库

```bash
# 在项目根目录执行
git init
```

## 第三步：添加文件并本地提交

```bash
# 查看哪些文件会被跟踪（确认 .env 和 __pycache__ 不在列表中）
git status

# 添加所有文件到暂存区
git add .

# 本地提交（此操作在本地仓库完成，还未上传到 GitHub）
git commit -m "Initial commit: FinSight - AI 金融分析助手"
```

> `git commit` 是**本地**操作，记录的是本地仓库的版本快照，此时 GitHub 上还看不到任何内容。下一步的 `git push` 才会真正将代码上传到 GitHub 远程仓库。

## 第四步：在 GitHub 上创建仓库

1. 打开 [https://github.com/new](https://github.com/new)
2. 填写仓库名（如 `FinSight`）
3. 选择 **Public** 或 **Private**
4. 不要勾选 "Initialize this repository with a README"（项目已有 readme.md）
5. 点击 **Create repository**

## 第五步：推送到 GitHub

创建完成后，按页面提示执行：

```bash
# 添加远程仓库（替换 YOUR_USERNAME 和 YOUR_REPO）
git remote add origin https://github.com/YOUR_USERNAME/FinSight.git

# 推送到 main 分支
git branch -M main
git push -u origin main
```

## 日常更新

```bash
git add .
git commit -m "描述你的更改"
git push
```

## 安全提醒

- `.env.example` 可以上传（它不包含真实密钥），方便其他人参考格式
- 每次提交前运行 `git status` 确认没有意外包含 `.env`
- 如果误将 `.env` 提交了，**立即更换所有 API Key**，然后用 `git rm --cached .env` 移除跟踪并添加至 `.gitignore`
