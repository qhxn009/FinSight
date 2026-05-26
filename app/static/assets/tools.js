const modelTypes = {skill: '技能', mcp: 'MCP',models: '模型', Datasets: '数据集'};
const skillSubTypes = {stock: '股票', futures: '期货', news: '资讯', risk: '风控', fund: '基金',office: '办公', fintech: '金融科技', frontend: '开发'};
const modelData = [
{name: "a-share-automl-strategy", type: "skill", sub: "stock", logo: "/static/assets/images/aifinlab.jpeg", modalities: ["A股AutoML策略/自动化量化建模", "上海财经大学"], url:"https://github.com/aifinlab/FinClaw/tree/main/skills/a-share-automl-strategy"},
{name:"Fin MCP Server",type:"mcp",logo:"/static/assets/images/zxjt.jpg",modalities:["金融研究","因子计算","图表生成","数据库接口"], url:"https://www.24krmb.com/thread-4344-1-1.html"},

{name: "股票分析与涨跌预测分析", type: "skill", sub: "stock", logo: "/static/assets/images/z.png", modalities: ["需要多模态主模型支持", "智谱官方"], url: "https://www.24krmb.com/thread-4562-1-2.html"},
{name:"广发证券MCP",type:"mcp",logo:"/static/assets/images/gfzq.png",modalities:["财务分析","龙虎榜分析","热门ETF","指数估值"], url:"https://www.24krmb.com/thread-4337-1-1.html"},

{name: "东方财富金融数据查询", type: "skill", sub: "stock", logo: "/static/assets/images/dfcf.png", modalities: ["需要KEY", "限每日50次调用"], url: "https://www.24krmb.com/thread-4589-1-1.html"},
{name: "analyzing-commodity-markets", type: "skill", sub: "futures", logo: "/static/assets/images/CaseMark.png", modalities: ["构建大宗商品市场分析，包括供需平衡、库存动态和价格驱动因素归因"], url:"https://github.com/casemark/skills/tree/main/skills/skill/analyzing-commodity-markets"},
{name: "金融数据集 MCP", type: "mcp", logo: "/static/assets/images/mhdt.jpg", modalities: ["收入报表","资产负债表","现金流量表","历史股价"], url:"https://www.24krmb.com/thread-3852-1-1.html"},
{name: "glmv-doc-based-writing", type: "skill", sub: "office", logo: "/static/assets/images/z.png", modalities: ["使用智谱 GLM-V 多模态模型撰写文本内容"], url: "https://github.com/zai-org/GLM-skills/tree/main/skills/glmv-doc-based-writing"},
{name: "期货品种深度分析报告", type: "skill", sub: "futures", logo: "/static/assets/images/dwane.png", modalities: ["无需KEY", "可生成HTML到电脑桌面"], url: "https://www.24krmb.com/thread-4599-1-1.html"},
{name: "沪深实时行情MCP源码", type: "mcp", logo: "/static/assets/images/dwane.png", modalities: ["行业信息","历史报告期","PB/PE走势图","聚合查询"], url:"https://www.24krmb.com/thread-3846-1-1.html"},
{name: "东方财富智能选股工具", type: "skill", sub: "stock", logo: "/static/assets/images/dfcf.png", modalities: ["需要KEY", "限每日50次调用"], url: "https://www.24krmb.com/thread-4591-1-1.html"},
{name: "stock-question-refiner", type: "skill", sub: "stock", logo: "/static/assets/images/liangdabiao.jpeg", modalities: ["股票投资调研问题细化技能"], url: "https://github.com/liangdabiao/Claude-Code-Stock-Deep-Research-Agent/blob/main/1.claude/skills/stock-question-refiner/examples.md"},
{name: "financial-statement-analyzer", type: "skill", sub: "stock", logo: "/static/assets/images/Geeksfino.png", modalities: ["对单个A股上市公司的财务报表进行深度分析"], url:"https://github.com/geeksfino/finskills/tree/main/China-market/financial-statement-analyzer"},
{name: "market-screener", type: "skill", sub: "stock", logo: "/static/assets/images/CoWork-OS.jpeg", modalities: ["对股票、ETF 和债券进行筛选"], url:"https://github.com/cowork-os/cowork-os/tree/main/resources/skills/market-screener"},
{name: "glm-image-gen", type: "skill", sub: "office", logo: "/static/assets/images/z.png", modalities: ["使用智谱GLM-Image API从文本提示生成高质量图像"], url: "https://github.com/zai-org/GLM-skills/tree/main/skills/glm-image-gen"},
{name: "期货每日深度分析总结", type: "skill", sub: "futures", logo: "/static/assets/images/dwane.png", modalities: ["无需KEY", "可生成HTML到电脑桌面"], url: "https://www.24krmb.com/thread-4597-1-1.html"},
{name: "沪深股票数据 MCP ", type: "mcp", logo: "/static/assets/images/jyj.jpg", modalities: ["基本信息","行情数据","财务数据","技术指标"], url:"https://www.24krmb.com/thread-3838-1-1.html"},
{name: "股票筛选器", type: "skill", sub: "stock", logo: "/static/assets/images/majiayu000.png", modalities: ["根据可自定义的量化标准筛选并选择股票"], url:"https://github.com/majiayu000/claude-skill-registry/tree/main/skills/data/stock-picker"},
{name: "迅投(xtquant)量化交易平台MCP", type: "mcp", logo: "/static/assets/images/dfkai.jpeg", modalities: ["基础数据查询","行情数据","图表和可视化"], url:"https://www.24krmb.com/thread-3856-1-1.html"},
{name: "minervini-swing-trading", type: "skill", sub: "stock", logo: "/static/assets/images/copyleftdev.png", modalities: ["以 Mark Minervini 的风格进行波段交易"], url:"https://github.com/copyleftdev/sk1llz/tree/main/domains/trading/swing-trading"},
{name: "stock-analysis", type: "skill", sub: "stock", logo: "/static/assets/images/liusai0820.jpeg", modalities: ["股票智能分析技能"], url:"https://github.com/liusai0820/stock-analysis-skill"},
{name: "skill-catchall", type: "skill", sub:"stock",logo: "/static/assets/images/Chipagosfinest.jpg", modalities: ["将财务请求路由至正确的专家"], url:"https://github.com/chipagosfinest/enterprise-team/tree/main/enterprise-team/skills/skill-catchall"},
{name: "金融圈最好的新闻skill", type: "skill", sub: "news", logo: "/static/assets/images/dwane.png", modalities: ["无需KEY", "央行", "交易所", "经济数据"], url: "https://www.24krmb.com/thread-4581-1-2.html"},
{name: "东方财富资讯搜索工具", type: "skill", sub: "news", logo: "/static/assets/images/dfcf.png", modalities: ["需要KEY", "限每日50次调用"], url: "https://www.24krmb.com/thread-4590-1-1.html"},
{name: "analyzing-financial-conditions", type: "skill", sub: "news", logo: "/static/assets/images/CaseMark.png", modalities: ["构建金融状况指数分析", "CM 官方"], url:"https://github.com/casemark/skills/tree/main/skills/skill/analyzing-financial-conditions"},
{name: "risk-analyzer", type: "skill", sub: "risk", logo: "/static/assets/images/CoWork-OS.jpeg", modalities: ["投资组合风险分析"], url:"https://github.com/cowork-os/cowork-os/tree/main/resources/skills/risk-analyzer"},
{name: "credit-risk-explanation", type: "skill", sub: "risk", logo: "/static/assets/images/404kidwiz.jpg", modalities: ["解释信贷风险驱动因素、评分方法及贷款组合的损失估算"], url:"https://github.com/goldenzero/skills/tree/main/skills/credit-risk-explanation"},
{name: "MCP 服务器开发组件", type: "mcp", logo: "/static/assets/images/88_avatar.jpg", modalities: ["提示","工具","资源","采样"], url:"https://www.24krmb.com/thread-3841-1-1.html"},
{name: "preparing-fund-valuation-reports", type: "skill", sub: "fund", logo: "/static/assets/images/CaseMark.png", modalities: ["构建基金净资产值报告", "CM 官方"], url:"https://github.com/casemark/skills/tree/main/skills/capital/preparing-fund-valuation-reports"},
{name: "money", type: "skill", sub:"bank",logo: "/static/assets/images/ChatAndBuild.jpeg", modalities: ["个人理财指导，包含储蓄、投资及避免常见陷阱的实用规则"], url:"https://github.com/chatandbuild/chatchat-skills/tree/main/skills/Lifestyle/money"},
{name: "知识点图谱", type: "skill", sub: "office", logo: "/static/assets/images/NanjingHJLP.png", modalities: ["将用户提供的知识体系转化为可视化知识地图"], url:"https://github.com/NanjingHJLP/hjlp-skills/tree/main/skills/knowledge-map"},
{name: "minimax-docx", type: "skill", sub: "office", logo: "/static/assets/images/minimax.jpeg", modalities: ["进行专业的DOCX文档创建、编辑和格式化"], url: "https://github.com/MiniMax-AI/skills/tree/main/skills/minimax-docx"},
{name: "党政机关公文生成", type: "skill", sub: "office", logo: "/static/assets/images/NanjingHJLP.png", modalities: ["将用户输入的文本或上传的 文件转换为规范格式的公文 PDF"], url:"https://github.com/NanjingHJLP/hjlp-skills/tree/main/skills/party-government-document-generator"},
{name: "pptx-generator", type: "skill", sub: "office", logo: "/static/assets/images/minimax.jpeg", modalities: ["生成、编辑和阅读PowerPoint演示文稿"], url: "https://github.com/MiniMax-AI/skills/tree/main/skills/pptx-generator"},
{name: "minimax-xlsx", type: "skill", sub: "office", logo: "/static/assets/images/minimax.jpeg", modalities: ["打开、创建、读取、分析、编辑或验证Excel表格文件"], url: "https://github.com/MiniMax-AI/skills/tree/main/skills/minimax-xlsx"},
{name: "深度研究", type: "skill", sub: "office", logo: "/static/assets/images/NanjingHJLP.png", modalities: ["需要对任何话题进行系统调研时激活"], url:"https://github.com/NanjingHJLP/hjlp-skills/tree/main/skills/deep-research"},
{name: "minimax-pdf", type: "skill", sub: "office", logo: "/static/assets/images/minimax.jpeg", modalities: ["当PDF的视觉质量和设计身份很重要时，请使用此技能"], url: "https://github.com/MiniMax-AI/skills/tree/main/skills/minimax-pdf"},
{name: "公务员考试", type: "skill", sub: "office", logo: "/static/assets/images/NanjingHJLP.png", modalities: ["国考和省考备考指导Skill"], url:"https://github.com/NanjingHJLP/hjlp-skills/tree/main/skills/civil-service-exam"},
{name: "雅思备考", type: "skill", sub: "office", logo: "/static/assets/images/NanjingHJLP.png", modalities: ["雅思学术类或培训类备考助手"], url:"https://github.com/NanjingHJLP/hjlp-skills/tree/main/skills/ielts-exam"},
{name: "假新闻检测", type: "skill", sub: "office", logo: "/static/assets/images/NanjingHJLP.png", modalities: ["假新闻/谣言辨真"], url:"https://github.com/NanjingHJLP/hjlp-skills/tree/main/skills/fake-news-detector"},
{name: "简历助手", type: "skill", sub: "office", logo: "/static/assets/images/NanjingHJLP.png", modalities: ["润色、定制、导出、评分中文/英文简历"], url:"https://github.com/NanjingHJLP/hjlp-skills/tree/main/skills/resume-assistant"},
{name: "people-catchall", type: "skill", sub: "office", logo: "/static/assets/images/Chipagosfinest.jpg", modalities: ["将人员/人力资源请求路由至正确的专家"], url:"https://github.com/chipagosfinest/enterprise-team/tree/main/enterprise-team/skills/people-catchall"},
{name: "yike-storyboard", type: "skill", sub: "office", logo: "/static/assets/images/aly.png", modalities: ["实现从小说/剧本到分镜的完整 AI 视频创作工作流"], url:"https://github.com/aliyun/alibabacloud-aiops-skills/tree/master/skills/mediaservices/yike/alibabacloud-yike-storyboard"},
{name: "video-editing-skills", type: "skill", sub: "office", logo: "/static/assets/images/liangali.jpeg", modalities: ["提供 vlog 剪辑工作流"], url:"https://github.com/liangali/video-editing-skills"},
{name: "故事齿轮", type: "skill", sub: "office", logo: "/static/assets/images/ChatAndBuild.jpeg", modalities: ["通过引导式创意协作，开发故事、世界观、角色和叙事结构。"], url:"https://github.com/chatandbuild/chatchat-skills/tree/main/skills/Lifestyle/story-cog"},
{name: "video-editor", type: "skill", sub: "office", logo: "/static/assets/images/aly.png", modalities: ["无需安装 ffmpeg 的视频编辑工具"], url:"https://github.com/aliyun/alibabacloud-aiops-skills/tree/master/skills/mediaservices/ice/alibabacloud-video-editor"},
{name: "local-image-generation", type: "skill", sub: "office", logo: "/static/assets/images/intel.png", modalities: ["生成一张图片，创建一幅画，绘制一些东西"], url:"https://clawhub.ai/juan-oy/local-image-gen-aipc"},
{name: "cli-guidance", type: "skill", sub: "office", logo: "/static/assets/images/aly.png", modalities: ["指导用户使用阿里云 CLI 命令行工具管理阿里云资源"], url:"https://github.com/aliyun/alibabacloud-aiops-skills/tree/master/skills/developertools/solutions/alibabacloud-cli-guidance"},
{name: "ram-permission-diagnose", type: "skill", sub: "office", logo: "/static/assets/images/aly.png", modalities: ["阿里云 RAM 权限诊断与修复助手"], url:"https://github.com/aliyun/alibabacloud-aiops-skills/tree/master/skills/developertools/solutions/alibabacloud-ram-permission-diagnose"},
{name: "dataworks-workspace-manage", type: "skill", sub: "office", logo: "/static/assets/images/aly.png", modalities: ["DataWorks 工作空间生命周期管理技能"], url:"https://github.com/aliyun/alibabacloud-aiops-skills/tree/master/skills/analyticscomputing/dide/alibabacloud-dataworks-workspace-manage"},
{name: "fintech-engineer", type: "skill", sub: "fintech", logo: "/static/assets/images/404kidwiz.jpg", modalities: ["精通金融科技系统、复式记账账本设计、高精度数学运算和监管合规"], url:"https://github.com/404kidwiz/claude-supercode-skills/tree/main/fintech-engineer-skill"},
{name: "agent-fintech-engineer", type: "skill", sub: "fintech", logo: "/static/assets/images/diegosouzapw.jpeg", modalities: ["金融系统、监管合规和安全交易处理的金融科技专家工程师"], url:"https://github.com/diegosouzapw/awesome-omni-skill/tree/main/skills/data-ai/agent-fintech-engineer"},
{name: "dataworks-datastudio-develop", type: "skill", sub: "frontend", logo: "/static/assets/images/aly.png", modalities: ["DataWorks 数据开发技能"], url:"https://github.com/aliyun/alibabacloud-aiops-skills/tree/master/skills/analyticscomputing/dide/alibabacloud-dataworks-datastudio-develop"},
{name: "alipay-payment-integration", type: "skill", sub: "frontend", logo: "/static/assets/images/alipay.png", modalities: ["支付宝开放平台支付产品接入最佳实践"], url:"https://open.alipay.com/"},
{name: "find-skills", type: "skill", sub: "frontend", logo: "/static/assets/images/Nodejs.svg", modalities: ["无需KEY", "帮助用户查找技能"], url: "https://github.com/vercel-labs/skills"},
{name: "Create Skill", type: "skill", sub: "frontend", logo: "/static/assets/images/VsCode.svg", modalities: ["无需KEY", "创建技能的分步指导"], url: "https://github.com/chatandbuild/chatchat-skills/tree/main/skills/documentation/createskill"},
{name: "find-skills", type: "skill", sub: "frontend", logo: "/static/assets/images/aly.png", modalities: ["查找阿里云代理技能时使用此技能"], url:"https://github.com/aliyun/alibabacloud-aiops-skills/tree/master/skills/developertools/solutions/alibabacloud-find-skills"},
{name: "emas-apm-query", type: "skill", sub: "frontend", logo: "/static/assets/images/aly.png", modalities: ["阿里云 EMAS APM问题排查技能"], url:"https://github.com/aliyun/alibabacloud-aiops-skills/tree/master/skills/entcmc/emas/alibabacloud-emas-apm-query"},
{name: "全栈开发工程师", type: "skill", sub: "frontend", logo: "/static/assets/images/ChatAndBuild.jpeg", modalities: ["规划并实现全栈功能，并进行端到端的质量检查。"], url:"https://github.com/chatandbuild/chatchat-skills/tree/main/skills/Development/fullstack-developer"},
{name: "web-design-reviewer", type: "skill", sub: "frontend", logo: "/static/assets/images/ChatAndBuild.jpeg", modalities: ["编写并改进 Web 设计评审文档"], url:"https://github.com/chatandbuild/chatchat-skills/tree/main/skills/documentation/web-design-reviewer"},
  

{name: "TendencyGPT", type: "models", sub: "fin", sub: "stock", logo: "/static/assets/images/tdx.png", modalities: ["A股", "非开源"]},
{name: "FinBERT", type: "models", sub: "fin", logo: "/static/assets/images/alphaengine.png", modalities: ["MIT","金融情感分析"], url:"https://www.24krmb.com/thread-4623-1-1.html"},
{name: "llm-open-finance", type: "models", sub: "fin", logo: "/static/assets/images/#", modalities: ["财务报告分析","风险评估","监管合规","英/法"], url:"https://huggingface.co/collections/DragonLLM/llm-open-finance"},
{name: "一招（YiZhao)", type: "models", sub: "fin", logo: "/static/assets/images/zsyh.png", modalities: ["Apache-2.0","银行"], url:"https://www.24krmb.com/thread-4610-1-1.html"},
{name: "BloombergGPT", type: "models", sub: "fin", sub: "stock", logo: "/static/assets/images/bloomberg.svg", modalities: ["美股", "BLLOOM","彭博"], url:"https://arxiv.org/abs/2303.17564"},
{name: "Fin-R1", type: "models", sub: "fin", logo: "/static/assets/images/aifinlab.jpeg", modalities: ["Apache-2.0","复杂推理"], url:"https://www.24krmb.com/misc.php?mod=tag&id=700"},
{name: "KeyBART", type: "models", sub: "fin", sub: "stock", logo: "/static/assets/images/bloomberg.svg", modalities: ["彭博", "Apache-2.0"], url:"https://huggingface.co/bloomberg/KeyBART"},
{name: "financial-llm-advisor", type: "models", sub: "fin", logo: "/static/assets/images/selmantayyar.jpeg", modalities: ["财报分析","投资逻辑推理"], url:"https://github.com/selmantayyar/financial-llm-advisor"},
{name: "financial-llm-advisor", type: "models", sub: "fin", logo: "/static/assets/images/selmantayyar.jpeg", modalities: ["财报分析","投资逻辑推理"], url:"https://huggingface.co/selmantayyar/financial-llm-advisor"},
{name: "Kronos", type: "models", sub: "fin", logo: "/static/assets/images/#", modalities: ["K 线图分析","彭博"], url:"https://www.24krmb.com/thread-4608-1-1.html"},
{name: "kbir_keybart", type: "models", sub: "fin", logo: "/static/assets/images/bloomberg.svg", modalities: ["Apache-2.0","彭博"], url:"https://github.com/bloomberg/kbir_keybart"},
{name: "FinGPT", type: "models", sub: "fin", logo: "/static/assets/images/AI4Finance.jpeg", modalities: ["MIT","AI4Finance"], url:"https://github.com/AI4Finance-Foundation/FinGPT"},
{name: "FinGPT", type: "models", sub: "fin", logo: "/static/assets/images/AI4Finance.jpeg", modalities: ["MIT","AI4Finance"], url:"https://huggingface.co/FinGPT"},


{name: "FinChat-XS", type: "models", sub: "math",logo: "/static/assets/images/#", modalities: ["金融对话", "金融教育", "轻量"], url:"https://huggingface.co/oopere/FinChat-XS"},
{name: "qwen-math", type: "models", sub: "math",logo: "/static/assets/images/qwen.png", modalities: ["MTI", "文本"], url:"https://help.aliyun.com/zh/model-studio/math-language-model"},
{name: "Qwen2.5-Math", type: "models", sub: "math",logo: "/static/assets/images/qwen.png", modalities: ["apache-2.0", "Safetensors", "英语"], url:"https://github.com/QwenLM/Qwen2.5-Math"},

{name: "Lingshu-32B", type: "models", sub: "medicine", logo: "/static/assets/images/Lingshu.svg", modalities: ["医疗VQA任务","报告生成"], url:"https://huggingface.co/lingshu-medical-mllm/Lingshu-32B"},
{name: "MedGemma 27B", type: "models", sub: "medicine", logo: "/static/assets/images/google.svg", modalities: ["医学文本","HAI-DEF"], url:"https://developers.google.com/health-ai-developer-foundations/medgemma"},
{name: "MedGemma 4B", type: "models", sub: "medicine", logo: "/static/assets/images/google.svg", modalities: ["医学图像","HAI-DEF"], url:"https://developers.google.com/health-ai-developer-foundations/medgemma"},
{name: "TxGemma", type: "models", sub: "medicine", logo: "/static/assets/images/google.svg", modalities: ["治疗药物开发​","HAI-DEF"], url:"https://huggingface.co/collections/google/txgemma-release-67dd92e931c857d15e4d1e87"},
{name: "TxGemma", type: "models", sub: "medicine", logo: "/static/assets/images/google.svg", modalities: ["治疗药物开发​","HAI-DEF"], url:"https://github.com/google-gemini/gemma-cookbook/tree/main/TxGemma"},
];

let currentFilter = {type: 'all', sub: null};
function filterSkills(type, btn, sub) {
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
    skillSubMenu.style.display = (type === 'skill') ? 'block' : 'none';
  }
  var modelsSubMenu = document.getElementById('modelsSubMenu');
  if (modelsSubMenu) {
    modelsSubMenu.style.display = (type === 'models') ? 'block' : 'none';
  }
  renderModels();
}
function filterSubSkills(sub, btn) {
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
    if (currentFilter.sub && model.sub !== currentFilter.sub) return false;
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
    var logoHtml = model.logo
      ? '<img class="skill-logo" src="' + model.logo + '" alt="' + model.name + '">'
      : '';
    var sourceIcon = '';
    if (model.url && model.url.indexOf('github.com') !== -1) {
      sourceIcon = '<i class="fab fa-github skill-source-icon"></i>';
    } else if (model.url && model.url.indexOf('24krmb.com') !== -1) {
      sourceIcon = '<i class="fas fa-check-circle skill-source-icon"></i>';
    }
    card.innerHTML =
      '<div class="skill-header">' +
        '<div class="skill-name-wrapper">' +
          logoHtml +
          '<h2 class="skill-name">' + model.name + '</h2>' +
        '</div>' +
        '<span class="skill-type type-' + typeClass + '">' + modelTypeText + '</span>' +
      '</div>' +
      '<div class="skill-tags">' + modalityTags + sourceIcon + '</div>';
    if (model.url) {
      card.style.cursor = 'pointer';
      card.addEventListener('click', function() {
        window.open(model.url, '_blank');
      });
    }
    container.appendChild(card);
  });
}
document.addEventListener('DOMContentLoaded', function() {
  var params = new URLSearchParams(window.location.search);
  var type = params.get('type');
  var sub = params.get('sub');
  if (type && modelTypes[type]) {
    filterSkills(type, document.querySelector('.skill-filter-btn[data-filter="' + type + '"]'));
    if (sub && skillSubTypes[sub]) {
      filterSubSkills(sub, document.querySelector('.skill-sub-btn[data-sub="' + sub + '"]'));
    }
  } else {
    renderModels();
  }
});
