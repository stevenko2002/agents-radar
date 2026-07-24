# AI 开源趋势日报 2026-07-25

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-24 22:15 UTC

---

用户要求我作为专注于AI开源生态的技术分析师，对给定的GitHub AI相关热门仓库数据进行 AI 相关性筛选、分类和趋势分析，生成一份结构清晰的《AI 开源趋势日报》。

让我先仔细分析数据：

**Trending 榜单分析（16个仓库）：**
1. [block/buzz](https://github.com/block/buzz) - 蜂巢思维通信平台，Rust，⭐0 (+3274 today) - **非AI相关，通用工具**，需排除
2. [koala73/worldmonitor](https://github.com/koala73/worldmonitor) - 实时全球情报仪表盘，AI驱动新闻聚合，TypeScript，⭐0 (+2194 today) - **AI相关**，属于AI应用/情报分析
3. [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) - Claude技能列表，Python，⭐0 (+662 today) - **AI相关**，属于AI基础工具/智能体工作流
4. [Pumpkin-MC/Pumpkin](https://github.com/Pumpkin-MC/Pumpkin) - Minecraft服务器，Rust，⭐0 (+472 today) - **非AI相关**，需排除
5. [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) - 金融语言基础模型，Python，⭐0 (+506 today) - **AI相关**，属于大模型/训练
6. [Automattic/harper](https://github.com/Automattic/harper) - 离线语法检查器，Rust，⭐0 (+877 today) - **非AI相关**（虽然是ML/NLP工具，但主要是语法检查，不属于核心AI领域），需排除
7. [likec4/likec4](https://github.com/likec4/likec4) - 软件架构可视化，TypeScript，⭐0 (+339 today) - **非AI相关**，需排除
8. [citrolabs/ego-lite](https://github.com/citrolabs/ego-lite) - AI Agent浏览器，JavaScript，⭐0 (+884 today) - **AI相关**，属于AI智能体/工具
9. [yorukot/superfile](https://github.com/yorukot/superfile) - 终端文件管理器，Go，⭐0 (+312 today) - **非AI相关**，需排除
10. [ruvnet/RuView](https://github.com/ruvnet/RuView) - WiFi信号转空间智能/生命体征监测，Rust，⭐0 (+1021 today) - **非AI相关**（虽然用AI处理信号，但更偏向硬件/信号处理），严格来说可以算作AI应用，但更像是IoT/硬件项目。我需要判断。从描述看"turns commodity WiFi signals into real-time spatial intelligence, vital sign monitoring" - 这属于AI感知/物联网应用。可以归为AI应用。
11. [CoreBunch/Instatic](https://github.com/CoreBunch/Instatic) - 静态网站CMS，TypeScript，⭐0 (+250 today) - **非AI相关**，需排除
12. [chrislgarry/Apollo-11](https://github.com/chrislgarry/Apollo-11) - 阿波罗11号源码，Assembly，⭐0 (+409 today) - **非AI相关**，需排除
13. [mattpocock/skills](https://github.com/mattpocock/skills) - 工程师技能，Shell，⭐0 (+2224 today) - **非AI相关**（虽然可能用于AI Agent，但本身只是配置/脚本集合），需排除
14. [Lordog/dive-into-llms](https://github.com/Lordog/dive-into-llms) - 动手学大模型教程，Jupyter Notebook，⭐0 (+654 today) - **AI相关**，属于大模型/训练（教育/教程）
15. [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) - AI网关/路由，TypeScript，⭐0 (+1843 today) - **AI相关**，属于AI基础工具/网关
16. [OtterMind/Chat2DB](https://github.com/OtterMind/Chat2DB) - AI数据库工具，Java，⭐0 (+129 today) - **AI相关**，属于AI应用/数据库工具

**AI主题搜索结果分析（80个仓库，已去重）：**
这些都是明确标记了topic标签的AI相关项目，需要根据主要类别进行分类。

让我对筛选后的项目进行分类：

**Trending 中筛选出的 AI 项目（8个）：**
1. worldmonitor - AI应用（情报仪表盘）
2. awesome-claude-skills - AI基础工具（Agent Skills）
3. Kronos - 大模型/训练（金融基础模型）
4. ego-lite - AI智能体/工作流（Agent浏览器）
5. RuView - AI应用（WiFi感知/智能监测）
6. dive-into-llms - 大模型/训练（教程）
7. OmniRoute - AI基础工具（AI网关）
8. Chat2DB - AI应用（AI数据库客户端）

**主题搜索中的项目分类：**

**🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）：**
- ollama/ollama - Go, ⭐176,801 [topic:llm] - LLM推理引擎，本地运行模型
- firecrawl/firecrawl - TypeScript, ⭐155,557 [topic:llm] - Web爬取/搜索API
- vllm-project/vllm - Python, ⭐87,087 [topic:llm] - LLM推理引擎
- netdata/netdata - Go, ⭐79,832 [topic:ml] - AI可观测性（含AI功能）
- langchain4j/langchain4j - Java, ⭐12,685 [topic:vector-db] - Java LLM框架（归这里更合适，因为是框架）
- 0xPlaygrounds/rig - Rust, ⭐8,033 [topic:llm-model] - Rust LLM应用框架
- headroomlabs-ai/headroom - Python, ⭐62,184 [topic:rag] - RAG上下文压缩工具（开发工具）

**🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）：**
- affaan-m/ECC - JavaScript, ⭐232,890 [topic:llm] - Agent性能优化系统，Skills/记忆/安全
- NousResearch/hermes-agent - Python, ⭐219,986 [topic:llm] - 成长型Agent
- Significant-Gravitas/AutoGPT - Python, ⭐185,676 [topic:llm] - AutoGPT（虽然热度下降，但仍是标志性项目）
- langgenius/dify - TypeScript, ⭐150,138 [topic:llm] - Agent工作流/RAG平台
- open-webui/open-webui - Python, ⭐146,620 [topic:llm] - AI界面（支持Ollama等，可归为Agent平台）
- langchain-ai/langchain - Python, ⭐142,531 [topic:llm] - Agent工程平台
- browser-use/browser-use - Python, ⭐106,612 [topic:llm] - 网站自动化Agent
- Graphify-Labs/graphify - Python, ⭐95,209 [topic:llm] - 代码库知识图谱（Agent技能）
- thedotmack/claude-mem - JavaScript, ⭐88,473 [topic:rag] - Agent持久化内存
- CherryHQ/cherry-studio - TypeScript, ⭐48,951 [topic:ai-agent] - AI生产力工作室/Agent
- HKUDS/nanobot - Python, ⭐46,196 [topic:ai-agent] - 轻量级AI Agent
- zhayujie/CowAgent - Python, ⭐46,112 [topic:ai-agent] - AI助手/Agent
- hugohe3/ppt-master - Python, ⭐40,957 [topic:ai-agent] - AI生成PPT（应用型Agent）
- CopilotKit/CopilotKit - TypeScript, ⭐36,256 [topic:ai-agent] - Agent前端栈
- iOfficeAI/AionUi - TypeScript, ⭐30,806 [topic:ai-agent] - AI协作应用
- Gitlawb/openclaude - TypeScript, ⭐30,329 [topic:ai-agent] - Claude Agent封装
- googleworkspace/cli - Rust, ⭐29,984 [topic:ai-agent] - Google Workspace CLI含Agent技能
- esengine/DeepSeek-Reasonix - Go, ⭐27,725 [topic:ai-agent] - DeepSeek Agent
- HKUDS/Vibe-Trading - Python, ⭐27,292 [topic:ai-agent] - 交易Agent
- santifer/career-ops - JavaScript, ⭐61,373 [topic:ai-agent] - AI求职Agent
- Panniantong/Agent-Reach - Python, ⭐60,599 [topic:ai-agent] - 互联网浏览Agent
- ZhuLinsen/daily_stock_analysis - Python, ⭐58,651 [topic:ai-agent] - 股票分析Agent

**📦 AI 应用（具体应用产品、垂直场景解决方案）：**
- harry0703/MoneyPrinterTurbo - Python, ⭐99,123 [topic:llm] - AI短视频生成
- siyuan-note/siyuan - TypeScript, ⭐45,392 [topic:ai-agent] - 本地知识管理（含AI功能）
- OpenBB-finance/OpenBB - Python, ⭐70,979 [topic:ml] - 金融数据平台（AI驱动）
- huggingface/transformers - Python, ⭐162,946 [topic:llm] - 模型库（可算基础工具/应用）
- f/prompts.chat - HTML, ⭐166,304 [topic:llm] - 提示词库（应用/资源）
- mintplex-labs/anything-llm - JavaScript, ⭐63,795 [topic:rag] - 本地LLM应用（应用层）
- roboflow/supervision - Python, ⭐48,357 [topic:ml] - 计算机视觉应用框架
- microsoft/qlib - Python, ⭐46,608 [topic:ml] - 量化投资平台（AI应用）
- tesseract-ocr/tesseract - C++, ⭐75,536 [topic:ml] - OCR引擎（应用/工具）

**🧠 大模型/训练（模型权重、训练框架、微调工具）：**
- jingyaogong/minimind - Python, ⭐53,818 [topic:llm-model] - 从零训练小模型（教程/训练框架）
- ScrapeGraphAI/Scrapegraph-ai - Python, ⭐28,615 [topic:llm-model] - AI爬虫（依赖大模型）
- open-compass/opencompass - Python, ⭐7,235 [topic:llm-model] - LLM评估平台
- Eigenwise/atomic-agents - Python, ⭐6,074 [topic:llm-model] - Agent构建框架（可归这里或Agent类）
- skyzh/tiny-llm - Python, ⭐4,405 [topic:llm-model] - LLM推理教程
- samchon/nestia - TypeScript, ⭐2,172 [topic:llm-model] - NestJS AI助手开发
- thinkwee/AgentsMeetRL - HTML, ⭐1,720 [topic:llm-model] - Agentic RL资源
- thinkwee/AwesomeOPD - ⭐763 [opic:llm-model] - On-Policy Distillation
- chrisliu298/awesome-llm-unlearning - ⭐617 [topic:llm-model] - LLM遗忘
- Picovoice/picollm - Python, ⭐315 [topic:llm-model] - 端侧LLM推理
- Event-AHU/Medical_Image_Analysis - Python, ⭐237 [topic:llm-model] - 医学影像基础模型
- kennethleungty/Finance-LLMs - ⭐130 [opic:llm-model] - 金融LLM用例
- testtimescaling/testtimescaling.github.io - HTML, ⭐110 [topic:llm-model] - 测试时扩展综述

**🔍 RAG/知识库（向量数据库、检索增强、知识管理）：**
- Shubhamsaboo/awesome-llm-apps - Python, ⭐127,330 [topic:rag] - 100+ AI应用（RAG/Agent）
- infiniflow/ragflow - Go, ⭐85,915 [opic:rag] - RAG引擎
- Mintplex-Labs/anything-llm - JavaScript, ⭐63,795 [topic:rag] - 也可以归这里（RAG应用）
- run-llama/llama_index - Python, ⭐51,072 [opic:rag] - 文档Agent/OCR平台
- milvus-io/milvus - Go, ⭐45,370 [opic:rag] - 向量数据库（也可以归基础工具）
- HKUDS/LightRAG - Python, ⭐38,093 [opic:rag] - 轻量级RAG框架
- meilisearch/meilisearch - Rust, ⭐58,721 [opic:vector-db] - 混合搜索引擎
- qdrant/qdrant - Rust, ⭐33,564 [opic:vector-db] - 向量数据库
- VectifyAI/PageIndex - Python, ⭐34,423 [opic:vector-db] - 文档索引（无向量RAG）
- topoteretes/cognee - Python, ⭐29,267 [opic:vector-db] - Agent记忆平台
- NirDiamant/RAG_Techniques - Jupyter, ⭐28,798 [opic:vector-db] - RAG技术教程
- alibaba/zvec - C++, ⭐15,258 [opic:vector-db] - 轻量级向量数据库
- weaviate/weaviate - Go, ⭐16,647 [opic:vector-db] - 向量数据库
- neuml/txtai - Python, ⭐12,750 [opic:vector-db] - 语义搜索/LLM编排
- StarTrail-org/LEANN - Python, ⭐12,727 [opic:vector-db] - 轻量级本地RAG
- lancedb/lancedb - HTML, ⭐10,986 [opic:vector-db] - 嵌入式向量数据库
- oramasearch/orama - TypeScript, ⭐10,502 [opic:vector-db] - 浏览器/边缘RAG/搜索

**重新整理分类逻辑：**

有些项目可以跨多个类别，我需要判断最主要类别：
- **llm** topic 的项目：通常属于基础工具、Agent、或应用
- **rag** topic 的项目：主要归 RAG/知识库
- **vector-db** topic 的项目：主要归 RAG/知识库（基础组件）
- **ai-agent** topic 的项目：主要归 AI 智能体/工作流
- **llm-model** topic 的项目：主要归 大模型/训练
- **ml** topic 的项目：需要判断，可能是基础工具或应用

让我重新整理每个分类的代表项目：

**🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）：**
1. ollama/ollama (Stars: 176,801) - 本地LLM运行工具，今日Stars未显示（主题搜索）
2. firecrawl/firecrawl (Stars: 155,557) - Web数据采集API
3. vllm-project/vllm (Stars: 87,087) - 高性能LLM推理引擎
4. langchain4j/langchain4j (Stars: 12,685) - Java LLM框架
5. diegosouzapw/OmniRoute (Trending +1843, Stars: 0) - AI网关，统一多模型入口
6. 0xPlaygrounds/rig (Stars: 8,033) - Rust LLM应用框架
7. headroomlabs-ai/headroom (Stars: 62,184) - RAG上下文压缩（开发工具）

**🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）：**
1. affaan-m/ECC (Stars: 232,890) - Agent性能优化系统（今日Trending未列出，但主题搜索Stars最高）
2. NousResearch/hermes-agent (Stars: 219,986) - 成长型Agent
3. Significant-Gravitas/AutoGPT (Stars: 185,676) - 经典Agent框架
4. ComposioHQ/awesome-claude-skills (Trending +662) - Claude Agent技能集合
5. citrolabs/ego-lite (Trending +884) - AI Agent浏览器自动化
6. langgenius/dify (Stars: 150,138) - Agent工作流/RAG平台
7. langchain-ai/langchain (Stars: 142,531) - Agent工程平台
8. browser-use/browser-use (Stars: 106,612) - 网络自动化Agent
9. Graphify-Labs/graphify (Stars: 95,209) - 代码库知识图谱（Agent技能）
10. thedotmack/claude-mem (Stars: 88,473) - Agent记忆持久化

**📦 AI 应用（具体应用产品、垂直场景解决方案）：**
1. koala73/worldmonitor (Trending +2194) - 全球情报仪表盘
2. shiyu-coder/Kronos (Trending +506) - 金融市场基础模型/应用
3. harry0703/MoneyPrinterTurbo (Stars: 99,123) - AI短视频生成
4. ruvnet/RuView (Trending +1021) - WiFi感知智能监测
5. OpenBB-finance/OpenBB (Stars: 70,979) - 金融AI平台
6. hugohe3/ppt-master (Stars: 40,957) - AI生成PPT
7. OtterMind/Chat2DB (Trending +129) - AI数据库客户端
8. ScrapeGraphAI/Scrapegraph-ai (Stars: 28,615) - AI爬虫应用
9. CherryHQ/cherry-studio (Stars: 48,951) - AI生产力工作室

**🧠 大模型/训练（模型权重、训练框架、微调工具）：**
1. Lordog/dive-into-llms (Trending +654) - 大模型教程/训练实践
2. jingyaogong/minimind (Stars: 53,818) - 从零训练64M LLM
3. open-compass/opencompass (Stars: 7,235) - LLM评估平台
4. skyzh/tiny-llm (Stars: 4,405) - Apple Silicon LLM推理训练
5. Event-AHU/Medical_Image_Analysis (Stars: 237) - 医学影像基础模型

**🔍 RAG/知识库（向量数据库、检索增强、知识管理）：**
1. Shubhamsaboo/awesome-llm-apps (Stars: 127,330) - RAG应用集合（含RAG类）
2. infiniflow/ragflow (Stars: 85,915) - RAG引擎
3. mem0ai/mem0 (Stars: 61,628) - Agent通用记忆层
4. meilisearch/meilisearch (Stars: 58,721) - AI混合搜索
5. qdrant/qdrant (Stars: 33,564) - 向量数据库
6. VectifyAI/PageIndex (Stars: 34,423) - 无向量RAG索引
7. HKUDS/LightRAG (Stars: 38,093) - 轻量级RAG框架
8. FlowiseAI/Flowise (Stars: 54,897) - 可视化AI Agent构建（含RAG）
9. run-llama/llama_index (Stars: 51,072) - 文档Agent/RAG平台
10. milvus-io/milvus (Stars: 45,370) - 向量数据库
11. NirDiamant/RAG_Techniques (Stars: 28,798) - RAG技术教程
12. cogs (Stars: 29,267) - Agent知识图谱记忆
13. StarTrail-org/LEANN (Stars: 12,727) - 本地RAG（97%存储节省）

**需要注意的Trending项目今日数据：**
- block/buzz: +3274 - 排除（非AI）
- worldmonitor: +2194 - AI应用
- awesome-claude-skills: +662 - Agent工具
- Pumpkin: +472 - 排除
- Kronos: +506 - 大模型训练
- harper: +877 - 排除（非AI核心）
- likec4: +339 - 排除
- ego-lite: +884 - Agent工具
- superfile: +312 - 排除
- RuView: +1021 - AI应用（IoT/感知）
- Instatic: +250 - 排除
- Apollo-11: +409 - 排除
- skills: +2224 - 排除（非AI核心）
- dive-into-llms: +654 - 大模型教程
- OmniRoute: +1843 - AI网关/基础工具
- Chat2DB: +129 - AI应用

现在开始构建报告：

**第一步：今日速览**
今日GitHub AI开源生态呈现"Agent生态爆发"与"垂直应用落地"双主线。Trending榜单中AI相关项目（8个）显示开发者对**Claude/Codex等编码Agent的技能定制**（awesome-claude-skills）、**AI Agent浏览器自动化**（ego-lite）、以及**统一AI网关**（OmniRoute）的需求激增。主题搜索中，**金融AI**（Kronos金融基础模型、OpenBB）、**RAG优化**（RAGFlow、LightRAG）和**AI电商/内容生成**（MoneyPrinterTurbo）持续高星。**WiFi感知AI**（RuView）作为新兴IoT-AI交叉方向首次闯入Trending，标志AI从数字世界向物理感知的延伸。

**第二步：各维度热门项目**

我需要从筛选后的项目中选择每个维度3-8个最值得关注的项目。

🔧 AI 基础工具：
1. **ollama/ollama**（Stars: 176,801）- 本地LLM运行时，堪称AI时代的"Docker"，让开发者一键运行Kimi-K2.6、DeepSeek等模型，是边缘AI部署的事实标准。
2. **OmniRoute**（Trending +1,843，Stars: 0）- 统一AI网关平台，支持290+提供商、500+模型，支持MCP/A2A协议，今日爆发式增长反映开发者对"模型无关"架构的渴求。
3. **vllm-project/vllm**（Stars: 87,087）- 高性能LLM推理引擎，PagedAttention技术大幅提升吞吐量，是生产环境LLM服务化的首选。
4. **firecrawl/firecrawl**（Stars: 155,557）- AI驱动的大规模Web数据采集API，为AI Agent提供实时、结构化的互联网知识源。

🤖 AI 智能体/工作流：
1. **affaan-m/ECC**（Stars: 232,890）- Agent性能优化系统，专注Claude Code/Codex等编码Agent的Skills、记忆与安全架构，今日虽未进Trending但总Stars极高，代表AI开发效率新范式。
2. **ComposioHQ/awesome-claude-skills**（Trending +662）- Claude Skills精选列表，反映Claude生态的技能市场化和标准化趋势。
3. **citrolabs/ego-lite**（Trending +884）- 专为AI Agent设计的浏览器环境，支持共享登录态，降低Agent自动化部署门槛。
4. **langgenius/dify**（Stars: 150,138）- 低代码Agent/RAG工作流平台，支持云/私有部署，是AI应用开发的"WordPress"级基础设施。
5. **Graphify-Labs/graphify**（Stars: 95,209）- 将代码库转化为可查询知识图谱，为AI Agent提供确定性上下文（AST解析），替代向量检索。

📦 AI 应用：
1. **koala73/worldmonitor**（Trending +2,194）- AI驱动的全球情报仪表盘，整合新闻、地缘政治与基础设施监控，今日Trending增速第一，反映"AI+态势感知"在决策支持领域的落地。
2. **Harry0703/MoneyPrinterTurbo**（Stars: 99,123）- AI短视频自动化生成系统，输入关键词即可生成高清视频，代表AIGC在内容电商的成熟应用。
3. **ruvnet/RuView**（Trending +1,021）- 利用WiFi信号实现无摄像头人体监测与生命体征检测，是AIoT/智慧健康的新兴方向。
4. **OtterMind/Chat2DB**（Trending +129）- AI驱动的数据库客户端，自然语言转SQL，降低数据分析门槛。
5. **OpenBB-finance/OpenBB**（Stars: 70,979）- 开源金融数据平台，集成AI Agent能力，服务量化分析师。

🧠 大模型/训练：
1. **shiyu-coder/Kronos**（Trending +506）- 金融语言基础模型（Financial Foundation Model），解释金融时序与文本，今日上榜显示行业大模型的垂直深化。
2. **Lordog/dive-into-llms**（Trending +654）- 《动手学大模型》系列教程，Jupyter Notebook形式，反映社区对LLM系统化学习资源的高需求。
3. **jingyaogong/minimind**（Stars: 53,818）- 2小时从零训练64M参数LLM的极简教程，降低大模型训练教育资源门槛。

🔍 RAG/知识库：
1. **infiniflow/ragflow**（Stars: 85,915）- 深度RAG引擎，融合Agent能力，提供超级上下文层，是RAG技术栈的核心基础设施。
2. **Shubhamsaboo/awesome-llm-apps**（Stars: 127,330）- 100+开源AI Agent与RAG应用集合，是开发者寻找参考实现的宝库。
3. **mintplex-labs/anything-llm**（Stars: 63,795）- 本地优先的多功能LLM应用平台，支持插件与RAG，代表"数据主权"理念的兴起。
4. **HKUDS/LightRAG**（Stars: 38,093）- 简单快速的RAG框架（EMNLP 2025），97%存储节省（LEANN）趋势的延伸，关注轻量部署。

**第三步：趋势信号分析（200-300字）：**
今日GitHub AI趋势呈现三大信号：

第一，**"Agent基础设施"成为绝对热点**。ego-lite（Agent浏览器）、awesome-claude-skills（Agent技能市场）、ECC（Agent优化系统）以及OmniRoute（Agent统一网关）的爆发，表明社区正从"构建单个Agent"转向"构建Agent生态与工具链"。Agent不再是单点模型，而是需要操作系统级的环境、技能市场和网络协议支持。

第二，**金融AI与垂直领域大模型加速落地**。Kronos（金融基础模型）首次

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*