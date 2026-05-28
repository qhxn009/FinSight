const modelTypes = {skill:'技能',mcp:'MCP',models:'模型',Datasets:'数据集',tools:'工具',agent:'Agent'};
const skillSubTypes = {stock:'股票',futures:'期货',news:'资讯',risk:'风控',fund:'基金',office:'办公',fintech:'金融科技',frontend:'开发',fin:'金融',math:'数学',medicine:'医疗',
  bank:'银行',embedding:'向量',sound:'语音',video:'视频',image:'图像',visual:'视觉',char:'角色',text:'文本',code:'编程'};
const modelData = [
{name:"a-share-automl-strategy",type:"skill",sub:"stock",logo:"aifinlab.jpeg",modalities:["A股AutoML策略/自动化量化建模","上海财经大学"],url:"https://github.com/aifinlab/FinClaw/tree/main/skills/a-share-automl-strategy"},
{name:"Fin MCP Server",type:"mcp",logo:"zxjt.jpg",modalities:["金融研究","因子计算","图表生成","数据库接口"],url:"https://www.24krmb.com/thread-4344-1-1.html"},
{name:"TendencyGPT",type:"models",sub:"fin",logo:"tdx.png",modalities:["A股","非开源"]},
{name:"DianJin",type:"skill",sub:["fund","stock","bank"],logo:"qwen.svg",modalities:["银行","保险","证券/资管"],url:"https://github.com/aliyun/qwen-dianjin/tree/master/DianJin-SKILLS"},
{name:"大语言模型开源金融评测数据集",type:"Datasets",sub:"fin",logo:"OpenFinData.png",modalities:["知识","判别","计算","分析","解读","合规"],url:"https://www.24krmb.com/thread-3727-1-1.html"},
{name:"OpenClaw",type:"agent",logo:"OpenClaw.png",modalities:["全球首个真正会做事的 Claw"],url:"https://openclaws.io/"},
{name:"Git",type:"tools",logo:"Git.png",modalities:["版本控制","分布式","开源"],url:"https://git-scm.com/"},
{name:"股票分析与涨跌预测分析",type:"skill",sub:"stock",logo:"zhipu.svg",modalities:["需要多模态主模型支持","智谱官方"],url:"https://www.24krmb.com/thread-4562-1-2.html"},
{name:"广发证券MCP",type:"mcp",logo:"gfzq.svg",modalities:["财务分析","龙虎榜分析","热门ETF","指数估值"],url:"https://www.24krmb.com/thread-4337-1-1.html"},
{name:"FinBERT",type:"models",sub:"fin",logo:"alphaengine.png",modalities:["MIT","金融情感分析"],url:"https://www.24krmb.com/thread-4623-1-1.html"},
{name:"DianJin-R1-Data",type:"Datasets",sub:"fin",logo:"qwen.svg",modalities:["英文基准","8,281 个需要对财务报告进行数值推理"],url:"https://huggingface.co/DianJin/"},
{name:"航运行业专业知识评测集",type:"Datasets",logo:"mhdt.jpg",modalities:["知识","判别","计算","分析","解读","合规"],url:"https://www.24krmb.com/thread-3726-1-1.html"},
{name:"QwenPaw",type:"agent",logo:"QwenPaw.gif",modalities:["开源","阿里Qwen的智能龙虾","国内最强最好"],url:"https://qwenpaw.agentscope.io/"},
{name:"Python",type:"tools",logo:"Python.svg",modalities:["通用编程","AI/ML首选","开源"],url:"https://www.python.org/"},
{name:"东方财富金融数据查询",type:"skill",sub:"stock",logo:"dfcf.png",modalities:["需要KEY","限每日50次调用"],url:"https://www.24krmb.com/thread-4589-1-1.html"},
{name:"金融数据集 MCP",type:"mcp",logo:"mhdt.jpg",modalities:["收入报表","资产负债表","现金流量表","历史股价"],url:"https://www.24krmb.com/thread-3852-1-1.html"},
{name:"llm-open-finance",type:"models",sub:"fin",logo:"#",modalities:["财务报告分析","风险评估","监管合规","英/法"],url:"https://huggingface.co/collections/DragonLLM/llm-open-finance"},
{name:" 实时行情股市+智能理财投资助手",type:"agent",logo:"dwane.png",modalities:["通达信实时行情","推理型理财助手","免费开源"],url:"https://www.24krmb.com/thread-4178-1-1.html"},
{name:"pytorch",type:"tools",logo:"pytorch.svg",modalities:["深度学习框架","GPU加速","开源"],url:"https://pytorch.org/"},
{name:"analyzing-commodity-markets",type:"skill",sub:"futures",logo:"CaseMark.png",modalities:["构建大宗商品市场分析，包括供需平衡、库存动态和价格驱动因素归因"],url:"https://github.com/casemark/skills/tree/main/skills/skill/analyzing-commodity-markets"},
{name:"沪深实时行情MCP源码",type:"mcp",logo:"dwane.png",modalities:["行业信息","历史报告期","PB/PE走势图","聚合查询"],url:"https://www.24krmb.com/thread-3846-1-1.html"},
{name:"一招（YiZhao)",type:"models",sub:"fin",logo:"zsyh.png",modalities:["Apache-2.0","银行"],url:"https://www.24krmb.com/thread-4610-1-1.html"},
{name:" TradingAgents部署与应用",type:"agent",logo:"fzzq.jpg",modalities:["分析师","研究员","交易员"],url:"https://www.24krmb.com/thread-4104-1-1.html"},
{name:"React",type:"tools",logo:"React.svg",modalities:["前端框架","组件化","开源"],url:"https://react.dev/"},
{name:"Claude Opus 4.7",type:"models",sub:"code",logo:"Claude.svg",modalities:["编程模型","目前最强"],url:"https://www.anthropic.com/claude/opus"},
{name:"glmv-doc-based-writing",type:"skill",sub:"office",logo:"z.png",modalities:["使用智谱 GLM-V 多模态模型撰写文本内容"],url:"https://github.com/zai-org/GLM-skills/tree/main/skills/glmv-doc-based-writing"},
{name:"沪深股票数据 MCP ",type:"mcp",logo:"jyj.jpg",modalities:["基本信息","行情数据","财务数据","技术指标"],url:"https://www.24krmb.com/thread-3838-1-1.html"},
{name:"BloombergGPT",type:"models",sub:"fin",logo:"bloomberg.png",modalities:["美股","BLLOOM","彭博"],url:"https://arxiv.org/abs/2303.17564"},
{name:"WindClaw",type:"agent",logo:"wind.png",modalities:["零代码","免部署","需要积分"],url:"https://www.24krmb.com/thread-4525-1-1.html"},
{name:"Nodejs",type:"tools",logo:"Nodejs.svg",modalities:["服务端JS","事件驱动","开源"],url:"https://nodejs.org/"},
{name:"Z-Image",type:"models",sub:"image",logo:"LongCat.svg",modalities:["写实","八步生成","6B 参数"],url:"https://github.com/Tongyi-MAI/Z-Image"},
{name:"期货品种深度分析报告",type:"skill",sub:"futures",logo:"dwane.png",modalities:["无需KEY","可生成HTML到电脑桌面"],url:"https://www.24krmb.com/thread-4599-1-1.html"},
{name:"迅投(xtquant)量化交易平台MCP",type:"mcp",logo:"dfkai.jpeg",modalities:["基础数据查询","行情数据","图表和可视化"],url:"https://www.24krmb.com/thread-3856-1-1.html"},
{name:"Fin-R1",type:"models",sub:"fin",logo:"aifinlab.jpeg",modalities:["Apache-2.0","复杂推理"],url:"https://www.24krmb.com/misc.php?mod=tag&id=700"},
{name:" 投资分析师兼职业投资者智能体文件",type:"agent",logo:"dwane.png",modalities:["核心思维框架","角色定义","约束与边界"],url:"https://www.24krmb.com/thread-4576-1-1.html"},
{name:"Webpack",type:"tools",logo:"Webpack.svg",modalities:["模块打包","代码分割","开源"],url:"https://webpack.js.org/"},
{name:"东方财富智能选股工具",type:"skill",sub:"stock",logo:"dfcf.png",modalities:["需要KEY","限每日50次调用"],url:"https://www.24krmb.com/thread-4591-1-1.html"},
{name:"MCP 服务器开发组件",type:"mcp",logo:"88_avatar.jpg",modalities:["提示","工具","资源","采样"],url:"https://www.24krmb.com/thread-3841-1-1.html"},
{name:"KeyBART",type:"models",sub:"fin",logo:"bloomberg.png",modalities:["彭博","Apache-2.0"],url:"https://huggingface.co/bloomberg/KeyBART"},
{name:"AutoClaw",type:"agent",logo:"autoglm.png",modalities:["GLM出品"],url:"https://autoglm.zhipuai.cn/autoclaw/"},
{name:"VsCode",type:"tools",logo:"VsCode.svg",modalities:["代码编辑器","插件生态","免费"],url:"https://code.visualstudio.com/"},
{name:"stock-question-refiner",type:"skill",sub:"stock",logo:"liangdabiao.jpeg",modalities:["股票投资调研问题细化技能"],url:"https://github.com/liangdabiao/Claude-Code-Stock-Deep-Research-Agent/blob/main/1.claude/skills/stock-question-refiner/examples.md"},
{name:"DianJin-R1-32B",type:"models",sub:"fin",logo:"qwen.svg",modalities:["MIT","PyTorch","Safetensors","Transformers"],url:"https://huggingface.co/DianJin/"},
{name:"financial-llm-advisor",type:"models",sub:"fin",logo:"selmantayyar.jpeg",modalities:["财报分析","投资逻辑推理"],url:"https://github.com/selmantayyar/financial-llm-advisor"},
{name:"龙虾类个性化配置模板与场景示例",type:"agent",logo:"17.jpg",modalities:["教程","SOUL","IDENTITY","AGENTS"],url:"https://www.24krmb.com/thread-4611-1-1.html"},
{name:"JavaScript",type:"tools",logo:"JavaScript.svg",modalities:["前端语言","全栈开发","开源"],url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"},
{name:"financial-statement-analyzer",type:"skill",sub:"stock",logo:"Geeksfino.png",modalities:["对单个A股上市公司的财务报表进行深度分析"],url:"https://github.com/geeksfino/finskills/tree/main/China-market/financial-statement-analyzer"},
{name:"DianJin-OCR-R1",type:"models",sub:"fin",logo:"qwen.svg",modalities:["OCR","PyTorch","Safetensors","Transformers","MIT"],url:"https://huggingface.co/DianJin/"},
{name:"financial-llm-advisor",type:"models",sub:"fin",logo:"selmantayyar.jpeg",modalities:["财报分析","投资逻辑推理"],url:"https://huggingface.co/selmantayyar/financial-llm-advisor"},
{name:"kimiClaw",type:"agent",logo:"kimi.svg",modalities:["月之暗面官方出品"],url:"https://www.kimi.com/bot"},
{name:"C++",type:"tools",logo:"C++.svg",modalities:["系统编程","高性能","开源"],url:"https://isocpp.org/"},
{name:"market-screener",type:"skill",sub:"stock",logo:"CoWork-OS.jpeg",modalities:["对股票、ETF 和债券进行筛选"],url:"https://github.com/cowork-os/cowork-os/tree/main/resources/skills/market-screener"},
{name:"Kronos",type:"models",sub:"fin",logo:"#",modalities:["K 线图分析","彭博"],url:"https://www.24krmb.com/thread-4608-1-1.html"},
{name:"Agent A_Share_investment_Agent 教程",type:"agent",logo:"22.jpg",modalities:["教程","使用 AI 辅助投资决策"],url:"https://www.24krmb.com/thread-4592-1-1.html"},
{name:"TypeScript",type:"tools",logo:"TypeScript.svg",modalities:["类型安全","JS超集","开源"],url:"https://www.typescriptlang.org/"},
{name:"glm-image-gen",type:"skill",sub:"office",logo:"z.png",modalities:["使用智谱GLM-Image API从文本提示生成高质量图像"],url:"https://github.com/zai-org/GLM-skills/tree/main/skills/glm-image-gen"},
{name:"kbir_keybart",type:"models",sub:"fin",logo:"bloomberg.png",modalities:["Apache-2.0","彭博"],url:"https://github.com/bloomberg/kbir_keybart"},
{name:"QClaw",type:"agent",logo:"QClaw.png",modalities:["腾讯(电脑管家)出品"],url:"https://qclaw.qq.com/"},
{name:"MySQL",type:"tools",logo:"MySQL.svg",modalities:["关系数据库","SQL","开源"],url:"https://www.mysql.com/"},
{name:"期货每日深度分析总结",type:"skill",sub:"futures",logo:"dwane.png",modalities:["无需KEY","可生成HTML到电脑桌面"],url:"https://www.24krmb.com/thread-4597-1-1.html"},
{name:"FinGPT",type:"models",sub:"fin",logo:"FinGPT.png",modalities:["MIT","AI4Finance"],url:"https://github.com/AI4Finance-Foundation/FinGPT"},
{name:"FinGPT",type:"models",sub:"fin",logo:"FinGPT.png",modalities:["MIT","AI4Finance"],url:"https://huggingface.co/FinGPT"},
{name:"LLM 辅助编程指南- AKQuant策略",type:"agent",logo:"57.jpg",modalities:["教程","Prompt","进阶技巧与排错"],url:"https://www.24krmb.com/thread-4574-1-1.html"},
{name:"Github",type:"tools",logo:"Github.svg",modalities:["代码托管","协作开发","免费"],url:"https://github.com/"},
{name:"股票筛选器",type:"skill",sub:"stock",logo:"majiayu000.png",modalities:["根据可自定义的量化标准筛选并选择股票"],url:"https://github.com/majiayu000/claude-skill-registry/tree/main/skills/data/stock-picker"},
{name:"WorkBuddy",type:"agent",logo:"WorkBuddy.svg",modalities:["腾讯云出品的Claw"],url:"https://www.codebuddy.cn/work/"},
{name:"Laravel",type:"tools",logo:"Laravel.svg",modalities:["PHP框架","MVC","开源"],url:"https://laravel.com/"},
{name:"minervini-swing-trading",type:"skill",sub:"stock",logo:"copyleftdev.png",modalities:["以 Mark Minervini 的风格进行波段交易"],url:"https://github.com/copyleftdev/sk1llz/tree/main/domains/trading/swing-trading"},
{name:"FinChat-XS",type:"models",sub:"math",logo:"#",modalities:["金融对话","金融教育","轻量"],url:"https://huggingface.co/oopere/FinChat-XS"},
{name:"让QwenPaw真正成为你",type:"agent",logo:"dwane.png",modalities:["教程","Prompt","记忆系统"],url:"https://www.24krmb.com/thread-4571-1-1.html"},
{name:"C#",type:"tools",logo:"C5.svg",modalities:["面向对象",".NET生态","开源"],url:"https://learn.microsoft.com/en-us/dotnet/csharp/"},
{name:"stock-analysis",type:"skill",sub:"stock",logo:"liusai0820.jpeg",modalities:["股票智能分析技能"],url:"https://github.com/liusai0820/stock-analysis-skill"},
{name:"qwen-math",type:"models",sub:"math",logo:"qwen.svg",modalities:["MTI","文本"],url:"https://help.aliyun.com/zh/model-studio/math-language-model"},
{name:"CodeBuddy",type:"agent",logo:"WorkBuddy.svg",modalities:["腾讯云出品的IDE"],url:"https://www.codebuddy.cn/ide/"},
{name:"jQuery",type:"tools",logo:"jQuery.svg",modalities:["DOM操作","事件处理","开源"],url:"https://jquery.com/"},
{name:"skill-catchall",type:"skill",sub:"stock",logo:"Chipagosfinest.jpg",modalities:["将财务请求路由至正确的专家"],url:"https://github.com/chipagosfinest/enterprise-team/tree/main/enterprise-team/skills/skill-catchall"},
{name:"Qwen2.5-Math",type:"models",sub:"math",logo:"qwen.svg",modalities:["apache-2.0","Safetensors","英语"],url:"https://github.com/QwenLM/Qwen2.5-Math"},
{name:"ArkClaw",type:"agent",logo:"ArkClaw.avif",modalities:["火山引擎云端SaaS版"],url:"https://console.volcengine.com/ark"},
{name:"Tailwind",type:"tools",logo:"Tailwind.svg",modalities:["CSS框架","原子化","开源"],url:"https://tailwindcss.com/"},
{name:"金融圈最好的新闻skill",type:"skill",sub:"news",logo:"dwane.png",modalities:["无需KEY","央行","交易所","经济数据"],url:"https://www.24krmb.com/thread-4581-1-2.html"},
{name:"Lingshu-32B",type:"models",sub:"medicine",logo:"internlm.svg",modalities:["医疗VQA任务","报告生成"],url:"https://huggingface.co/lingshu-medical-mllm/Lingshu-32B"},
{name:"molili",type:"agent",logo:"molili.png",modalities:["当贝系","轻量本地 Agent"],url:"https://www.molili.com.cn/"},
{name:"HTML5",type:"tools",logo:"HTML5.svg",modalities:["标记语言","语义化","Web标准"],url:"https://developer.mozilla.org/en-US/docs/Web/HTML"},
{name:"东方财富资讯搜索工具",type:"skill",sub:"news",logo:"dfcf.png",modalities:["需要KEY","限每日50次调用"],url:"https://www.24krmb.com/thread-4590-1-1.html"},
{name:"MedGemma 27B",type:"models",sub:"medicine",logo:"google.svg",modalities:["医学文本","HAI-DEF"],url:"https://developers.google.com/health-ai-developer-foundations/medgemma"},
{name:"LobsterAI",type:"agent",logo:"Lobster.png",modalities:["网易有道","开源桌面端 AI"],url:"https://lobsterai.youdao.com/"},
{name:"CSS",type:"tools",logo:"CSS.svg",modalities:["样式语言","布局","Web标准"],url:"https://developer.mozilla.org/en-US/docs/Web/CSS"},
{name:"analyzing-financial-conditions",type:"skill",sub:"news",logo:"CaseMark.png",modalities:["构建金融状况指数分析","CM 官方"],url:"https://github.com/casemark/skills/tree/main/skills/skill/analyzing-financial-conditions"},
{name:"MedGemma 4B",type:"models",sub:"medicine",logo:"google.svg",modalities:["医学图像","HAI-DEF"],url:"https://developers.google.com/health-ai-developer-foundations/medgemma"},
{name:"EasyClaw",type:"agent",logo:"EasyClaw.png",modalities:["猎豹移动","OpenClaw 本地化封装"],url:"https://lobsterai.youdao.com/"},
{name:"Bootstrap",type:"tools",logo:"Bootstrap.png",modalities:["UI框架","响应式","开源"],url:"https://getbootstrap.com/"},
{name:"risk-analyzer",type:"skill",sub:"risk",logo:"CoWork-OS.jpeg",modalities:["投资组合风险分析"],url:"https://github.com/cowork-os/cowork-os/tree/main/resources/skills/risk-analyzer"},
{name:"TxGemma",type:"models",sub:"medicine",logo:"google.svg",modalities:["治疗药物开发​","HAI-DEF"],url:"https://huggingface.co/collections/google/txgemma-release-67dd92e931c857d15e4d1e87"},
{name:"JVS Claw",type:"agent",logo:"JVS.png",modalities:["阿里云","云端 ClawSpace"],url:"https://jvsclaw.aliyun.com/"},
{name:"PHP",type:"tools",logo:"PHP.svg",modalities:["服务端语言","Web开发","开源"],url:"https://www.php.net/"},
{name:"Transformers",type:"models",sub:"text",logo:"huggingface.svg",modalities:["推理与训练的先进预训练模型"],url:"https://github.com/huggingface/transformers"},
{name:"credit-risk-explanation",type:"skill",sub:"risk",logo:"404kidwiz.jpg",modalities:["解释信贷风险驱动因素、评分方法及贷款组合的损失估算"],url:"https://github.com/goldenzero/skills/tree/main/skills/credit-risk-explanation"},
{name:"TxGemma",type:"models",sub:"medicine",logo:"google.svg",modalities:["治疗药物开发​","HAI-DEF"],url:"https://github.com/google-gemini/gemma-cookbook/tree/main/TxGemma"},
{name:"RedClaw",type:"agent",logo:"RedClaw.png",modalities:["百度智能云"],url:"https://operator.gc.com.cn/"},
{name:"WordPress",type:"tools",logo:"WordPress.svg",modalities:["CMS","博客系统","开源"],url:"https://wordpress.org/"},
{name:"preparing-fund-valuation-reports",type:"skill",sub:"fund",logo:"CaseMark.png",modalities:["构建基金净资产值报告","CM 官方"],url:"https://github.com/casemark/skills/tree/main/skills/capital/preparing-fund-valuation-reports"},
{name:"MaxClaw",type:"agent",logo:"MiniMax.svg",modalities:["MiniMax","图文音视创作"],url:"https://agent.minimaxi.com/max-claw"},
{name:"Vue",type:"tools",logo:"Vue.svg",modalities:["前端框架","渐进式","开源"],url:"https://vuejs.org/"},
{name:"money",type:"skill",sub:"bank",logo:"ChatAndBuild.jpeg",modalities:["个人理财指导，包含储蓄、投资及避免常见陷阱的实用规则"],url:"https://github.com/chatandbuild/chatchat-skills/tree/main/skills/Lifestyle/money"},
{name:"MaxHermes",type:"agent",logo:"MiniMax.svg",modalities:["MiniMax","图文音视创作"],url:"https://agent.minimaxi.com/max-hermes"},
{name:"Sass",type:"tools",logo:"Sass.svg",modalities:["CSS预处理器","变量/嵌套","开源"],url:"https://sass-lang.com/"},
{name:"知识点图谱",type:"skill",sub:"office",logo:"NanjingHJLP.png",modalities:["将用户提供的知识体系转化为可视化知识地图"],url:"https://github.com/NanjingHJLP/hjlp-skills/tree/main/skills/knowledge-map"},
{name:"GraphQL",type:"tools",logo:"GraphQL.svg",modalities:["查询语言","API","开源"],url:"https://graphql.org/"},
{name:"minimax-docx",type:"skill",sub:"office",logo:"MiniMax.svg",modalities:["进行专业的DOCX文档创建、编辑和格式化"],url:"https://github.com/MiniMax-AI/skills/tree/main/skills/minimax-docx"},
{name:"PostgreSQL",type:"tools",logo:"PostgreSQL.svg",modalities:["关系数据库","ACID","开源"],url:"https://www.postgresql.org/"},
{name:"党政机关公文生成",type:"skill",sub:"office",logo:"NanjingHJLP.png",modalities:["将用户输入的文本或上传的 文件转换为规范格式的公文 PDF"],url:"https://github.com/NanjingHJLP/hjlp-skills/tree/main/skills/party-government-document-generator"},
{name:"MongoDB",type:"tools",logo:"MongoDB.svg",modalities:["文档数据库","NoSQL","开源"],url:"https://www.mongodb.com/"},
{name:"pptx-generator",type:"skill",sub:"office",logo:"MiniMax.svg",modalities:["生成、编辑和阅读PowerPoint演示文稿"],url:"https://github.com/MiniMax-AI/skills/tree/main/skills/pptx-generator"},
{name:"Django",type:"tools",logo:"Django.svg",modalities:["Python框架","全栈","开源"],url:"https://www.djangoproject.com/"},
{name:"minimax-xlsx",type:"skill",sub:"office",logo:"MiniMax.svg",modalities:["打开、创建、读取、分析、编辑或验证Excel表格文件"],url:"https://github.com/MiniMax-AI/skills/tree/main/skills/minimax-xlsx"},
{name:"AWS",type:"tools",logo:"AWS.svg",modalities:["云计算","IaaS/PaaS","付费"],url:"https://aws.amazon.com/"},
{name:"深度研究",type:"skill",sub:"office",logo:"NanjingHJLP.png",modalities:["需要对任何话题进行系统调研时激活"],url:"https://github.com/NanjingHJLP/hjlp-skills/tree/main/skills/deep-research"},
{name:"redis",type:"tools",logo:"redis.svg",modalities:["内存数据库","缓存","开源"],url:"https://redis.io/"},
{name:"minimax-pdf",type:"skill",sub:"office",logo:"MiniMax.svg",modalities:["当PDF的视觉质量和设计身份很重要时，请使用此技能"],url:"https://github.com/MiniMax-AI/skills/tree/main/skills/minimax-pdf"},
{name:"公务员考试",type:"skill",sub:"office",logo:"NanjingHJLP.png",modalities:["国考和省考备考指导Skill"],url:"https://github.com/NanjingHJLP/hjlp-skills/tree/main/skills/civil-service-exam"},
{name:"雅思备考",type:"skill",sub:"office",logo:"NanjingHJLP.png",modalities:["雅思学术类或培训类备考助手"],url:"https://github.com/NanjingHJLP/hjlp-skills/tree/main/skills/ielts-exam"},
{name:"假新闻检测",type:"skill",sub:"office",logo:"NanjingHJLP.png",modalities:["假新闻/谣言辨真"],url:"https://github.com/NanjingHJLP/hjlp-skills/tree/main/skills/fake-news-detector"},
{name:"简历助手",type:"skill",sub:"office",logo:"NanjingHJLP.png",modalities:["润色、定制、导出、评分中文/英文简历"],url:"https://github.com/NanjingHJLP/hjlp-skills/tree/main/skills/resume-assistant"},
{name:"people-catchall",type:"skill",sub:"office",logo:"Chipagosfinest.jpg",modalities:["将人员/人力资源请求路由至正确的专家"],url:"https://github.com/chipagosfinest/enterprise-team/tree/main/enterprise-team/skills/people-catchall"},
{name:"yike-storyboard",type:"skill",sub:"office",logo:"AlibabaCloud.svg",modalities:["实现从小说/剧本到分镜的完整 AI 视频创作工作流"],url:"https://github.com/aliyun/alibabacloud-aiops-skills/tree/master/skills/mediaservices/yike/alibabacloud-yike-storyboard"},
{name:"video-editing-skills",type:"skill",sub:"office",logo:"liangali.jpeg",modalities:["提供 vlog 剪辑工作流"],url:"https://github.com/liangali/video-editing-skills"},
{name:"故事齿轮",type:"skill",sub:"office",logo:"ChatAndBuild.jpeg",modalities:["通过引导式创意协作，开发故事、世界观、角色和叙事结构。"],url:"https://github.com/chatandbuild/chatchat-skills/tree/main/skills/Lifestyle/story-cog"},
{name:"clawhub-github",type:"skill",sub:"office",logo:"clawhub.jpeg",modalities:["OpenClaw 官方 SKILL 仓库","MIT"],url:"https://github.com/openclaw/clawhub"},
{name:"Claw Hub",type:"skill",sub:"office",logo:"clawd.png",modalities:["clawhub 官方网站"],url:"https://clawhub.ai/"},
{name:"video-editor",type:"skill",sub:"office",logo:"AlibabaCloud.svg",modalities:["无需安装 ffmpeg 的视频编辑工具"],url:"https://github.com/aliyun/alibabacloud-aiops-skills/tree/master/skills/mediaservices/ice/alibabacloud-video-editor"},
{name:"local-image-generation",type:"skill",sub:"office",logo:"intel.png",modalities:["生成一张图片，创建一幅画，绘制一些东西"],url:"https://clawhub.ai/juan-oy/local-image-gen-aipc"},
{name:"cli-guidance",type:"skill",sub:"office",logo:"AlibabaCloud.svg",modalities:["指导用户使用阿里云 CLI 命令行工具管理阿里云资源"],url:"https://github.com/aliyun/alibabacloud-aiops-skills/tree/master/skills/developertools/solutions/alibabacloud-cli-guidance"},
{name:"ram-permission-diagnose",type:"skill",sub:"office",logo:"AlibabaCloud.svg",modalities:["阿里云 RAM 权限诊断与修复助手"],url:"https://github.com/aliyun/alibabacloud-aiops-skills/tree/master/skills/developertools/solutions/alibabacloud-ram-permission-diagnose"},
{name:"dataworks-workspace-manage",type:"skill",sub:"office",logo:"AlibabaCloud.svg",modalities:["DataWorks 工作空间生命周期管理技能"],url:"https://github.com/aliyun/alibabacloud-aiops-skills/tree/master/skills/analyticscomputing/dide/alibabacloud-dataworks-workspace-manage"},
{name:"fintech-engineer",type:"skill",sub:"fintech",logo:"404kidwiz.jpg",modalities:["精通金融科技系统、复式记账账本设计、高精度数学运算和监管合规"],url:"https://github.com/404kidwiz/claude-supercode-skills/tree/main/fintech-engineer-skill"},
{name:"agent-fintech-engineer",type:"skill",sub:"fintech",logo:"diegosouzapw.jpeg",modalities:["金融系统、监管合规和安全交易处理的金融科技专家工程师"],url:"https://github.com/diegosouzapw/awesome-omni-skill/tree/main/skills/data-ai/agent-fintech-engineer"},
{name:"dataworks-datastudio-develop",type:"skill",sub:"frontend",logo:"AlibabaCloud.svg",modalities:["DataWorks 数据开发技能"],url:"https://github.com/aliyun/alibabacloud-aiops-skills/tree/master/skills/analyticscomputing/dide/alibabacloud-dataworks-datastudio-develop"},
{name:"alipay-payment-integration",type:"skill",sub:"frontend",logo:"alipay.png",modalities:["支付宝开放平台支付产品接入最佳实践"],url:"https://open.alipay.com/"},
{name:"find-skills",type:"skill",sub:"frontend",logo:"Nodejs.svg",modalities:["无需KEY","帮助用户查找技能"],url:"https://github.com/vercel-labs/skills"},
{name:"Create Skill",type:"skill",sub:"frontend",logo:"VsCode.svg",modalities:["无需KEY","创建技能的分步指导"],url:"https://github.com/chatandbuild/chatchat-skills/tree/main/skills/documentation/createskill"},
{name:"find-skills",type:"skill",sub:"frontend",logo:"AlibabaCloud.svg",modalities:["查找阿里云代理技能时使用此技能"],url:"https://github.com/aliyun/alibabacloud-aiops-skills/tree/master/skills/developertools/solutions/alibabacloud-find-skills"},
{name:"emas-apm-query",type:"skill",sub:"frontend",logo:"AlibabaCloud.svg",modalities:["阿里云 EMAS APM问题排查技能"],url:"https://github.com/aliyun/alibabacloud-aiops-skills/tree/master/skills/entcmc/emas/alibabacloud-emas-apm-query"},
{name:"全栈开发工程师",type:"skill",sub:"frontend",logo:"ChatAndBuild.jpeg",modalities:["规划并实现全栈功能，并进行端到端的质量检查。"],url:"https://github.com/chatandbuild/chatchat-skills/tree/main/skills/Development/fullstack-developer"},
{name:"web-design-reviewer",type:"skill",sub:"frontend",logo:"ChatAndBuild.jpeg",modalities:["编写并改进 Web 设计评审文档"],url:"https://github.com/chatandbuild/chatchat-skills/tree/main/skills/documentation/web-design-reviewer"},
{name:"DianJin-Fin-PRM",type:"models",sub:"fin",logo:"qwen.svg",modalities:["过程奖励模型","PyTorch","Safetensors","Transformers"],url:"https://huggingface.co/DianJin/"},
{name:"DianJin-R1-7B",type:"models",sub:"fin",logo:"qwen.svg",modalities:["MIT","PyTorch","Safetensors","Transformers"],url:"https://huggingface.co/DianJin/"},
{name:"Embedding-3",type:"models",sub:"embedding",logo:"zhipu.svg",modalities:["0.5元/百万Tokens","8K上下文","256-2048维度"],url:"/static/models/glm.html"},
{name:"Embedding-2",type:"models",sub:"embedding",logo:"zhipu.svg",modalities:["0.5元/百万Tokens","8K上下文","1024维度"],url:"/static/models/glm.html"},
{name:"Doubao-embedding-vision",type:"models",sub:"embedding",logo:"Doubao.svg",modalities:["0.7元/百万Tokens","在线推理"],url:"https://www.doubao.com/chat/"},
{name:"Glm-5.1",type:"models",sub:"code",logo:"zhipu.svg",modalities:["国内编程最强","编程模型"],url:"/static/models/glm.html"},
{name:"GLM-4-Voice",type:"models",sub:"sound",logo:"zhipu.svg",modalities:["端到端语音","上下文8K","最大输出4K"],url:"/static/models/glm.html"},
{name:"CogVideoX-3",type:"models",sub:"video",logo:"zhipu.svg",modalities:["时长:5s,10s","最高4K","图像、文本、首尾帧"],url:"/static/models/glm.html"},
{name:"Vidu Q1",type:"models",sub:"video",logo:"zhipu.svg",modalities:["时长:5s","最高1080P","图像、文本、首尾帧"],url:"/static/models/glm.html"},
{name:"Vidu 2",type:"models",sub:"video",logo:"zhipu.svg",modalities:["时长:4s","最高720P","图像、文本、首尾帧"],url:"/static/models/glm.html"},
{name:"GLM-Image",type:"models",sub:"image",logo:"zhipu.svg",modalities:["长宽范围：512px-2048px","文生图"],url:"/static/models/glm.html"},
{name:"GLM-TTS",type:"models",sub:"sound",logo:"zhipu.svg",modalities:["7种音色","文本生成音频"],url:"/static/models/glm.html"},
{name:"GLM-TTS-Clone",type:"models",sub:"sound",logo:"zhipu.svg",modalities:["音色克隆"],url:"/static/models/glm.html"},
{name:"GLM-ASR-2512",type:"models",sub:"sound",logo:"zhipu.svg",modalities:["语音识别"],url:"/static/models/glm.html"},
{name:"GLM-Realtime",type:"models",sub:"sound",logo:"zhipu.svg",modalities:["音视频通话"],url:"/static/models/glm.html"},
{name:"CogView-4",type:"models",sub:"image",logo:"zhipu.svg",modalities:["文生图"],url:"/static/models/glm.html"},
{name:"GLM-5V-Turbo",type:"models",sub:"visual",logo:"zhipu.svg",modalities:["视觉编程","Agent","上下文:200K","最大输出:128K"],url:"/static/models/glm.html"},
{name:"金融领域中文语言理解评测数据集",type:"Datasets",sub:"fin",logo:"qwen.svg",modalities:["中文金融语境中的理解和处理能力"],url:"https://huggingface.co/DianJin/"},
{name:"FinMCP-Bench",type:"Datasets",sub:"fin",logo:"qwen.svg",modalities:["评估LLM在金融场景中调用MCP工具的能力"],url:"https://huggingface.co/DianJin/"},
{name:"DianJin-CSC-Data",type:"Datasets",sub:"fin",logo:"qwen.svg",modalities:["客户服务对话（CSC）任务"],url:"https://huggingface.co/DianJin/"},
{name:"DianJin-Fin-PRM-Data",type:"Datasets",sub:"fin",logo:"qwen.svg",modalities:["中文金融领域的（PRM）训练数据集"],url:"https://huggingface.co/DianJin/"},
{name:"CharGLM-4",type:"models",sub:"char",logo:"zhipu.svg",modalities:["角色扮演","超长记忆","千人千面","情感表达"],url:"/static/models/glm.html"},
{name:"Emohaa",type:"models",sub:"char",logo:"zhipu.svg",modalities:["专业倾听","情感映射","共情能力","Hill 助人理论"],url:"/static/models/glm.html"},
{name:"Claude Code",type:"agent",sub:"ide",logo:"Claude.svg",modalities:["全代码库级理解","端到端自主执行","多环境无缝接入","精细权限控制"],url:"https://claude.com/product/claude-code"},
{name:"Codex",type:"agent",sub:"ide",logo:"Codex.svg",modalities:["多智能体并行工作","端到端自主执行","多环境无缝接入","精细权限控制"],url:"https://openai.com/zh-Hans-CN/codex/"},
{name:"Hermes Agent",type:"agent",logo:"hermesagent.svg",modalities:["经验驱动的技能进化","全平台无缝衔接","多智能体协同并行"],url:"https://hermes-agent.nousresearch.com/"},
{name:"Notion",type:"agent",logo:"Notion.svg",modalities:["团队协作","企业运营","个人效率提升","教育与学习"],url:"https://www.notion.com/zh-cn"},
{name:"万小智 AI 员工",type:"agent",logo:"AlibabaCloud.svg",modalities:["多角色协作","自带运营级后台与智能问答客服","全链路合规上线"],url:"https://wanxiaozhi.aliyun.com/"},
{name:"Lovart",type:"agent",logo:"Lovart.svg",modalities:["自主智能系统思维","精准点选与局部编辑","智能文字分层可控","教育与学习"],url:"https://www.lovart.ai/"},
{name:"aion-2.0",type:"models",sub:"char",logo:"aionlabs.svg",modalities:["沉浸式角色扮演","最大输出：32K","推理"],url:"https://www.aionlabs.ai/"},
{name:"Aion-1.0",type:"models",sub:"char",logo:"aionlabs.svg",modalities:["DeepSeek-R1的变体","最大输出：32K","角色扮演"],url:"https://www.aionlabs.ai/"},
{name:"Aion-1.0-mini",type:"models",sub:"char",logo:"aionlabs.svg",modalities:["沉浸式角色扮演","最大输出：32K","推理"],url:"https://www.aionlabs.ai/"},
{name:"aion-rp-llama-3.1-8b",type:"models",sub:"char",logo:"aionlabs.svg",modalities:["角色扮演","最大输出：32K","LLama3.1 8B 的变体"],url:"https://www.aionlabs.ai/"},
{name:"aion-1.0-mini",type:"models",sub:"math",logo:"aionlabs.svg",modalities:["DeepSeek-R1的精炼版","最大输出：32K","数学推理"],url:"https://www.aionlabs.ai/"},
{name:"YouMind",type:"agent",logo:"YouMind.svg",modalities:["多维素材全量捕捉","个性化 AI 逻辑学习","沉浸式动态创作流"],url:"https://youmind.com/"},
{name:"Atoms",type:"agent",logo:"Atoms.ico",modalities:["AI 多智能体团队协作","生产级全栈开发能力","竞速模式"],url:"https://atoms.dev/zh"},
{name:"腾讯 Marvis",type:"agent",logo:"marvis.avif",modalities:["腾讯推出的操作系统级 AI 助手"],url:"https://marvis.qq.com/"},
{name:"StoreClaw",type:"agent",logo:"StoreClaw.avif",modalities:["电商自主运营平台"],url:"https://www.storeclaw.ai/"},
{name:"Tycoon AI",type:"agent",logo:"Tycoon.svg",modalities:["单人公司（OPC）管理平台"],url:"https://tycoon.us/"},
{name:"Doubao-Seed-Character",type:"models",sub:"char",logo:"Doubao.svg",modalities:["角色扮演","故事叙事"],url:"https://www.doubao.com/chat/"},
{name:"doubao-seedance-2.0",type:"models",sub:"video",logo:"Doubao.svg",modalities:["多模态模型","深度思考","视觉理解"],url:"https://research.doubao.com/zh/seedance2_0"},
{name:"Doubao-Seedance-1.5-pro",type:"models",sub:"video",logo:"Doubao.svg",modalities:["多模态模型","深度思考","视觉理解"],url:"https://research.doubao.com/zh/seedance1_5_pro"},
{name:"Doubao-Seedance-1.0-pro-fast",type:"models",sub:"video",logo:"Doubao.svg",modalities:["视频生成","视觉理解"],url:"https://research.doubao.com/zh/seedance1_0_pro_fast"},
{name:"Doubao-Seedance-2.0-fast",type:"models",sub:"video",logo:"Doubao.svg",modalities:["视频生成","视觉理解"],url:"https://research.doubao.com/zh/seedance2_0_fast"},
{name:"Doubao-Seedream-5.0-lite",type:"models",sub:"image",logo:"Doubao.svg",modalities:["视觉模型","图片生成"],url:"https://seed.bytedance.com/zh/seedream5_0_lite"},
{name:"Doubao-Seedream-4.5",type:"models",sub:"image",logo:"Doubao.svg",modalities:["视觉模型","图片生成"],url:"https://seed.bytedance.com/zh/seedream4_5"},
{name:"Doubao-Seedream-4.0",type:"models",sub:"image",logo:"Doubao.svg",modalities:["视觉模型","图片生成"],url:"https://seed.bytedance.com/zh/seedream4_0"},
{name:"longcat-flash-thinking",type:"models",sub:"text",logo:"LongCat.svg",modalities:["异步弹性共卡","智能体推理","形式化推理"],url:"https://huggingface.co/meituan-longcat/LongCat-Flash-Thinking"},
{name:"longcat-flash-thinking",type:"models",sub:"text",logo:"LongCat.svg",modalities:["异步弹性共卡","智能体推理","形式化推理"],url:"https://github.com/meituan-longcat/LongCat-Flash-Thinking"},
{name:"LongCat-Video-Avatar 1.5",type:"models",sub:"video",logo:"LongCat.svg",modalities:["数字人视频","八步生成","音视频协调"],url:"https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5"},
{name:"LongCat-Video-Avatar 1.5",type:"models",sub:"video",logo:"LongCat.svg",modalities:["数字人视频","八步生成","音视频协调"],url:"https://github.com/meituan-longcat/LongCat-Video"},
{name:"General 365",type:"models",sub:"text",logo:"LongCat.svg",modalities:["复杂约束","时空推理","语义干扰"],url:"https://github.com/meituan-longcat/General365"},
{name:"Claude Opus 4.6",type:"models",sub:"code",logo:"Claude.svg",modalities:["编程模型"],url:"https://www.anthropic.com/news/claude-opus-4-6"},
{name:"Claude Sonnet 4.6",type:"models",sub:"code",logo:"Claude.svg",modalities:["编程模型"],url:"https://www.anthropic.com/claude/sonnet"},
{name:"Claude Sonnet 4.5",type:"models",sub:"code",logo:"Claude.svg",modalities:["编程模型"],url:"https://www.anthropic.com/news/claude-sonnet-4-5"},
{name:"Claude Haiku 4.5",type:"models",sub:"code",logo:"Claude.svg",modalities:["编程模型"],url:"https://www.anthropic.com/claude/haiku"},
{name:"DeepSeek-Prover-V2",type:"models",sub:["math","text"],logo:"deepseek.svg",modalities:["MIT","PyTorch","Safetensors"],url:"https://api-docs.deepseek.com/zh-cn/"},
{name:"DeepSeek V4 Pro",type:"models",sub:["code","text"],logo:"deepseek.svg",modalities:["MIT","编程模型","编程模型"],url:"https://api-docs.deepseek.com/zh-cn/"},
{name:"DeepSeek-V4-Flash",type:"models",sub:["text"],logo:"deepseek.svg",modalities:["MIT","PyTorch","Safetensors"],url:"https://api-docs.deepseek.com/zh-cn/"},
{name:"GPT-5.3-Codex",type:"models",sub:["text","code"],logo:"OpenAI.svg",modalities:["输入$1.75/百万token","输入$14/百万token","闭源"]},
{name:"GPT-5-Codex",type:"models",sub:["text","code"],logo:"OpenAI.svg",modalities:["输入$1.25/百万token","输入$10/百万token","闭源"]},
{name:"GPT-Image-2",type:"models",sub:["text","image"],logo:"OpenAI.svg",modalities:["输入$5/百万token","闭源"]},
{name:"GPT-Image-1.5",type:"models",sub:["text","image"],logo:"OpenAI.svg",modalities:["输入$5/百万token","输入$10/百万token","闭源"]},
{name:"GPT-5.5",type:"models",sub:["text"],logo:"OpenAI.svg",modalities:["输入$5-10/百万token","输入$30-45/百万token","闭源"]},
{name:"GPT-5.2-Codex",type:"models",sub:["text","code"],logo:"OpenAI.svg",modalities:["输入$1.75/百万token","输入$14/百万token","闭源"]},
{name:"GPT-5.2-Pro",type:"models",sub:["text","code"],logo:"OpenAI.svg",modalities:["输入$21/百万token","输入$168/百万token","闭源"]},
{name:"GPT-5.2-Chat",type:"models",sub:"text",logo:"OpenAI.svg",modalities:["输入$1.75/百万token","输入$14/百万token","闭源"]},
{name:"GPT-5.4",type:"models",sub:["text"],logo:"OpenAI.svg",modalities:["输入$2.5-5/百万token","输入$15-22.5/百万token","闭源"]},
{name:"Text Embedding 3 Large",type:"models",sub:"embedding",logo:"OpenAI.svg",modalities:["输入$0.13/百万token","上下文8.19K","闭源"]},
{name:"Text Embedding 3 Small",type:"models",sub:"embedding",logo:"OpenAI.svg",modalities:["输入$0.02/百万token","上下文8.19K","闭源"]},
];
let currentFilter = {type:'all',sub:null};
function filterSkills(type,btn,sub) {
  currentFilter.type = type;
  currentFilter.sub = sub || null;
  document.querySelectorAll('.skill-filter-btn').forEach(function(b) {
    b.classList.remove('active');
  });
  document.querySelectorAll('.skill-sub-btn').forEach(function(b) {
    b.classList.remove('active');
  });
  if (btn) btn.classList.add('active');
  var skillSubMenu = document.getElementById('skillSubMenu');
  if (skillSubMenu) {
    skillSubMenu.style.display = (type === 'skill') ? 'block' :'none';
  }
  var modelsSubMenu = document.getElementById('modelsSubMenu');
  if (modelsSubMenu) {
    modelsSubMenu.style.display = (type === 'models') ? 'block' :'none';
  }
  renderModels();
}
function filterSubSkills(sub,btn) {
  currentFilter.sub = sub;
  document.querySelectorAll('.skill-sub-btn').forEach(function(b) {
    b.classList.remove('active');
  });
  if (btn) btn.classList.add('active');
  renderModels();
}
function renderModels() {
  var container = document.getElementById('models-container');
  if (!container) return;
  container.innerHTML = '';
  var filteredModels = modelData.filter(function(model) {
    if (currentFilter.type === 'all') return true;
    if (model.type !== currentFilter.type) return false;
    if (currentFilter.sub) {
      if (Array.isArray(model.sub)) {
        if (model.sub.indexOf(currentFilter.sub) === -1) return false;
      } else if (model.sub !== currentFilter.sub) {
        return false;
      }
    }
    return true;
  });
  if (filteredModels.length === 0) {
    var noResults = document.createElement('div');
    noResults.className = 'no-results';
    noResults.textContent = '抱歉，暂时没有匹配的';
    container.appendChild(noResults);
    return;
  }
  filteredModels.forEach(function(model) {
    var card = document.createElement('div');
    card.className = 'skill-card';
    var modalityTags = model.modalities.map(function(mod) {
      return '<span class="skill-tag">' + mod + '</span>';
    }).join('');
    var modelTypeText = modelTypes[model.type] || model.type;
    var typeClass = model.type;
    var logoSrc = '';
    var logoFallback = '';
    if (model.logo) {
      if (model.logo.startsWith('http://') || model.logo.startsWith('https://')) {
        logoSrc = model.logo;
      } else {
        var slug = model.logo.replace(/\.(svg|png|jpg|jpeg|gif|webp)$/i,'');
        logoSrc = 'https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/' + slug + '.svg';
        logoFallback = '/static/assets/icons/' + model.logo;
      }
    }
    var logoHtml = model.logo
      ? '<img class="skill-logo" src="' + logoSrc + '"' + (logoFallback ? ' onerror="this.onerror=null;this.src=\'' + logoFallback + '\'"' :'') + ' alt="' + model.name + '">'
      :'';
    var sourceIcon = '';
    if (model.url && model.url.indexOf('github.com') !== -1) {
      sourceIcon = '<i class="fab fa-github skill-source-icon"></i>';
    } else if (model.url && model.url.indexOf('24krmb.com') !== -1) {
      sourceIcon = '<i class="fas fa-check-circle skill-source-icon"></i>';
    } else if (model.url && model.url.indexOf('huggingface.co') !== -1) {
      sourceIcon = '<img class="skill-source-icon skill-source-img" src="/static/assets/icons/huggingface.svg" alt="HuggingFace">';
    } else if (model.url && model.url.indexOf('arxiv.org') !== -1) {
      sourceIcon = '<img class="skill-source-icon skill-source-img" src="/static/assets/icons/arxiv.png" alt="arXiv">';
    } else if (model.url && model.url.indexOf('aliyun.com') !== -1) {
      sourceIcon = '<img class="skill-source-icon skill-source-img" src="/static/assets/icons/AlibabaCloud.svg" alt="阿里云">';
    }
    var subHtml = '';
    if (model.sub) {
      if (Array.isArray(model.sub)) {
        subHtml = model.sub.map(function(s) {
          return skillSubTypes[s] ? '<span class="skill-sub type-' + s + '">' + skillSubTypes[s] + '</span>' :'';
        }).join('');
      } else if (skillSubTypes[model.sub]) {
        subHtml = '<span class="skill-sub type-' + model.sub + '">' + skillSubTypes[model.sub] + '</span>';
      }
    }
    card.innerHTML =
      '<div class="skill-header">' +
        '<div class="skill-name-wrapper">' +
          logoHtml +
          '<h2 class="skill-name">' + model.name + '</h2>' +
        '</div>' +
        subHtml +
        '<span class="skill-type type-' + typeClass + '">' + modelTypeText + '</span>' +
      '</div>' +
      '<div class="skill-tags">' + modalityTags + sourceIcon + '</div>';
    if (model.url) {
      card.style.cursor = 'pointer';
      card.addEventListener('click',function() {
        window.open(model.url,'_blank');
      });
    }
    container.appendChild(card);
  });
}
document.addEventListener('DOMContentLoaded',function() {
  var params = new URLSearchParams(window.location.search);
  var type = params.get('type');
  var sub = params.get('sub');
  if (type && modelTypes[type]) {
    filterSkills(type,document.querySelector('.skill-filter-btn[data-filter="' + type + '"]'));
    if (sub && skillSubTypes[sub]) {
      filterSubSkills(sub,document.querySelector('.skill-sub-btn[data-sub="' + sub + '"]'));
    }
  } else {
    renderModels();
  }
});