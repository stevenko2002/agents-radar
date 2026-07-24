# AI 开源趋势日报 2026-07-24

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-24 03:16 UTC

---

用户现在需要我做2026年7月24日的GitHub AI开源趋势日报，首先得严格按照三个步骤来：先过滤，再分类，最后输出报告。首先第一步过滤，先看Trending的15个，哪些和AI无关？首先block/buzz是蜂巢思维通讯平台？等下看描述是hive mind communication platform？哦等下先看，哦还有Pumpkin是Minecraft服务器，Apollo-11是阿波罗11号代码，jellyfin是媒体系统，Automattic/harper是离线语法检查器？哦对，这几个Trending里的要排除。然后AI主题搜索的都是和AI相关的吧？哦对，主题搜索的topic都是llm、rag、ai-agent、ml、vector-db，所以那些都是相关的，先过滤完剩下的Trending里AI相关的有：koala73/worldmonitor（AI驱动的全球情报仪表盘）、shiyu-coder/Kronos（金融大模型）、citrolabs/ego-lite（AI agents用的浏览器）、diegosouzapw/OmniRoute（AI网关）、ComposioHQ/awesome-claude-skills（Claude技能列表）、earthtojake/text-to-cad（CAD的agent技能）、agegr/pi-web（pi coding agent的UI）、alibaba/open-code-review（带LLM的代码审查）、ruvnet/RuView（WiFi转空间智能，无视频的监测）、likec4/likec4？哦等下likec4是软件架构可视化，有没有AI？哦看描述是“always actual and live diagrams from your code”，哦有没有AI相关？哦等下原描述是“Visualize, collaborate, and evolve the software architecture with always actual and live diagrams from your code”，哦好像没提AI？哦对，那这个也要排除？哦等下还有没有其他的？哦Trending里的：worldmonitor（AI聚合新闻）、Kronos（金融基础模型）、ego-lite（AI agent浏览器）、OmniRoute（AI网关，290+提供商）、awesome-claude-skills（Claude AI工作流）、text-to-cad（AI agent的CAD技能）、pi-web（coding agent的UI）、open-code-review（LLM Agent代码审查）、ruvnet/RuView（WiFi signals转空间智能，属于AI感知？对，是AI相关的，因为是用AI处理WiFi信号做监测，没有视频，所以是AI感知类。然后likec4那个，原描述没提AI，是纯架构图工具，所以排除。还有harper是离线语法检查，有没有AI？哦描述是“Offline, privacy-first grammar checker. Fast, open-source, Rust-powered”，没提AI，是传统的语法检查？所以也排除。对，Trending里过滤后剩下的AI相关是：worldmonitor、Kronos、ego-lite、OmniRoute、awesome-claude-skills、text-to-cad、pi-web、alibaba/open-code-review、RuView，这几个。

然后第二步分类，要分五个维度：🔧 AI基础工具、🤖 AI智能体/工作流、📦 AI应用、🧠大模型/训练、🔍 RAG/知识库。现在先把所有AI相关的项目（Trending过滤后的+主题搜索的所有，因为主题搜索都是topic标了AI相关的）都列出来，然后分类。

首先先理每个类别的项目：

首先🔧 AI基础工具（框架、SDK、推理引擎、开发工具、CLI）：哦对，比如vllm-project/vllm（推理引擎）、huggingface/transformers（模型框架）、pytorch/pytorch（ML框架）、tensorflow/tensorflow（ML框架）、ollama/ollama（本地模型运行工具）、firecrawl/firecrawl（AI网页抓取工具）、meilisearch/meilisearch（AI混合搜索引擎）、0xPlaygrounds/rig（Rust构建LLM应用的框架）、skyzh/tiny-llm（LLM推理 Serving 课程/工具）、Picovoice/picollm（端侧LLM推理）、alibaba/zvec（轻量向量数据库？哦等下向量数据库是不是放RAG？哦对，RAG/知识库类包括向量数据库、RAG工具、知识管理。哦对，还有langchain-ai/langchain（Agent框架？哦等下Agent框架是放🤖还是基础工具？哦分类说明里🤖是Agent框架、自动化、多智能体，🔧是基础工具包括框架？哦等下看分类定义：
🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）：对，比如SDK、推理引擎、开发工具、CLI，还有通用的ML框架？
🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）：哦langchain是Agent工程平台，应该放这个？哦对，分类里🤖包含Agent框架。那vllm是推理引擎，放🔧。ollama是模型运行工具，放🔧。transformers是模型框架，放🔧。pytorch、tensorflow是ML基础框架，放🔧？哦对，还有open-compass/opencompass是LLM评测平台，属于基础工具？还有alibaba/open-code-review（带LLM的代码审查工具，属于开发工具，放🔧？还有diegosouzapw/OmniRoute是AI网关，属于基础工具？还有citrolabs/ego-lite是AI agent用的浏览器，属于开发工具？还有agegr/pi-web是coding agent的UI，属于开发工具？还有googleworkspace/cli是带AI agent技能的CLI，放🔧？

然后🤖 AI智能体/工作流：哦affaan-m/ECC（Agent harness性能优化系统）、NousResearch/hermes-agent（Agent）、Significant-Gravitas/AutoGPT（Agent）、browser-use/browser-use（AI agent网页自动化）、santifer/career-ops（AI求职Agent）、ZhuLinsen/daily_stock_analysis（股票分析Agent）、CherryHQ/cherry-studio（AI生产力工作室，带自主Agent）、HKUDS/nanobot（轻量AI Agent）、zhayujie/CowAgent（AI助手Agent Harness）、hugohe3/ppt-master（AI生成PPT的Agent工作流）、CopilotKit/CopilotKit（前端Agent堆栈）、iOfficeAI/AionUi（AI cowork app，对接多个CLI Agent）、Gitlawb/openclaude（跨平台的AI Agent）、esengine/DeepSeek-Reasonix（DeepSeek终端AI coding Agent）、jackwener/OpenCLI（AI agent把网站转CLI）、HKUDS/Vibe-Trading（交易Agent）、ComposioHQ/awesome-claude-skills（Claude Agent技能列表）、Eigenwise/atomic-agents（构建AI Agent的框架）、earthtojake/text-to-cad（CAD/机器人/硬件的Agent技能）、thinkwee/AgentsMeetRL（Agent RL资源列表）？哦对还有Graphify-Labs/graphify？哦graphify是把代码库转知识图谱给Agent用的，属于Agent工具？哦还有thedotmack/claude-mem是给Agent做持久化内存的，属于Agent工作流？对，还有mem0ai/mem0是Agent的通用内存层，也是🤖类？

然后📦 AI应用（具体应用产品、垂直场景解决方案）：哦koala73/worldmonitor（AI全球情报仪表盘，垂直场景：地缘政治/基础设施监测）、shiyu-coder/Kronos（金融大模型应用？哦Kronos是金融基础模型？哦等下Kronos的描述是“Foundation Model for the Language of Financial Markets”，哦那是大模型？哦对，那放🧠？哦等下Kronos是金融领域的基础模型，属于大模型/训练类？哦对。然后还有harry0703/MoneyPrinterTurbo（AI生成短视频，垂直应用）、TauricResearch/TradingAgents（金融交易Agent应用，哦这个是不是应用？对，是具体的金融交易应用）、OpenBB-finance/OpenBB（金融数据分析平台，AI Agents用的）、roboflow/supervision（计算机视觉工具，应用层？哦或者放基础工具？哦看分类，📦是具体应用产品、垂直场景，比如MoneyPrinterTurbo是短视频生成应用，TradingAgents是交易应用，worldmonitor是情报仪表盘应用，ppt-master是PPT生成应用，PaddleOCR是OCR应用？哦对，PaddleOCR是把PDF/图片转结构化数据给LLM用的，属于应用？还有siyuan-note/siyuan是带AI的知识管理软件，属于应用？哦对，还有hugohe3/ppt-master是AI生成PPT的应用，harry0703/MoneyPrinterTurbo是AI短视频应用，koala73/worldmonitor是全球情报应用，TauricResearch/TradingAgents是金融交易应用，OpenBB-finance/OpenBB是金融数据平台应用，PaddlePaddle/PaddleOCR是OCR应用，siyuan-note/siyuan是知识管理应用，还有microsoft/AI-For-Beginners是AI入门教程？哦那个是教育类应用？

然后🧠 大模型/训练（模型权重、训练框架、微调工具）：哦jingyaogong/minimind（从0训练64M LLM的训练教程/工具）、shiyu-coder/Kronos（金融基础大模型）、chrisliu298/awesome-llm-unlearning（LLM遗忘学习资源）、testtimescaling/testtimescaling.github.io（测试时扩展的大模型综述）、chenshuang-zhang/imagenet_d（CVPR2024的视觉数据集？哦那个是CV的，和LLM？哦看topic是llm-model？哦原数据的topic是llm-model，那可能也算？哦还有Hai-chao-Zhang/ThinkJEPA（视觉语言模型，结合JEPA和推理）、NousResearch/hermes-agent？哦不，hermes-agent是Agent，不是模型。哦还有ollama/ollama是运行模型的，不是训练，所以放基础工具。哦对，大模型类还有minimind（训练小LLM）、Kronos（金融基础模型）、awesome-llm-unlearning（LLM微调/训练相关技术）、testtimescaling的测试时扩展（大模型推理优化？哦或者放基础工具？哦看描述是test-time scaling的综述，属于大模型技术方向，放🧠？还有ThinkJEPA是视觉-语言大模型研究，放🧠。还有Finance-LLMs是金融LLM用例集合，属于大模型应用？哦或者放📦？

然后🔍 RAG/知识库（向量数据库、检索增强、知识管理）：哦langgenius/dify（RAG/Agent工作流平台）、open-webui/open-webui（AI界面，支持RAG？哦看topic是rag，对，原主题搜索的topic是rag）、run-llama/llama_index（RAG/文档Agent平台）、infiniflow/ragflow（RAG引擎）、Mintplex-Labs/anything-llm（本地RAG/Agent平台）、headroomlabs-ai/headroom（RAG上下文压缩工具）、mem0ai/mem0（Agent内存层，属于RAG相关的知识管理）、FlowiseAI/Flowise（可视化RAG/Agent构建）、milvus-io/milvus（向量数据库）、qdrant/qdrant（向量数据库）、VectifyAI/PageIndex（无向量RAG的文档索引）、HKUDS/LightRAG（轻量RAG框架）、NirDiamant/RAG_Techniques（RAG技术教程）、weaviate/weaviate（向量数据库）、alibaba/zvec（轻量向量数据库）、neuml/txtai（全栈AI框架，包含RAG）、StarTrail-org/LEANN（端侧RAG框架）、langchain4j/langchain4j（Java的LLM/RAG框架）、lancedb/lancedb（嵌入式检索库，用于多模态AI）、oramasearch/orama（浏览器/服务器的RAG搜索引擎）、thedotmack/claude-mem（Agent持久化上下文，属于RAG相关的知识管理）、Graphify-Labs/graphify（代码库转知识图谱，用于RAG/Agent）、PaddlePaddle/PaddleOCR（OCR，用于RAG的文档解析）？哦对，PaddleOCR是把非结构化文档转结构化给RAG用的，所以放RAG类。

哦等下现在要注意，一个项目可以归多类，但优先最主要类别。比如langchain是Agent框架，主要放🤖，不是RAG。比如dify是RAG/Agent工作流，主要放🔍RAG？或者看它的核心，dify是支持RAG和Agent工作流，不过topic是rag，所以放🔍。哦还有CopilotKit是前端的Agent框架，放🤖。

现在第一步过滤要明确，先说明过滤掉了哪些：Trending榜单中排除的非AI项目：Pumpkin-MC/Pumpkin（Minecraft服务器工具）、chrislgarry/Apollo-11（阿波罗11号源码归档）、likec4/likec4（纯软件架构可视化工具，无AI能力）、Automattic/harper（传统离线语法检查工具，无AI模块）、jellyfin/jellyfin（开源媒体系统），共5个非AI项目已过滤。其余Trending项目及全部80个主题搜索项目（均带AI/ML相关topic标签）纳入分析范围。

然后第二步分类，现在把每个项目归到最主要的类别，注意不要重复归类太多，每个项目优先最主要：

首先先列每个类别的项目：

🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）：
1. vllm-project/vllm：⭐87,005（总），Python，LLM高吞吐推理引擎，今日无 trending 新增但属于核心基础设施
2. huggingface/transformers：⭐162,896（总），Python，通用大模型定义与训练框架，生态核心
3. ollama/ollama：⭐176,746（总），Go，本地大模型一键运行工具，降低AI使用门槛
4. pytorch/pytorch：⭐101,897（总），Python，主流深度学习框架，ML基础设施核心
5. tensorflow/tensorflow：⭐196,485（总），C++，老牌ML框架，工业级部署基础
6. 0xPlaygrounds/rig：⭐8,026（总），Rust，Rust生态LLM应用开发框架，今日主题搜索热门
7. alibaba/open-code-review：⭐0（总，今日+180），Go，阿里开源的LLM增强代码审查工具，支持确定性规则+Agent评论
8. diegosouzapw/OmniRoute：⭐0（总，今日+1929），TypeScript，开源AI网关，统一接入290+模型提供商，今日Trending爆火
9. citrolabs/ego-lite：⭐0（总，今日+247），JavaScript，面向AI Agent的专用浏览器，支持人与Agent并行工作
10. agegr/pi-web：⭐0（总，今日+315），TypeScript，pi coding agent的Web UI，降低AI编程工具使用门槛
11. firecrawl/firecrawl：⭐155,170（总），TypeScript，AI级网页抓取与交互API，是AI Agent获取网络数据的核心工具
12. meilisearch/meilisearch：⭐58,708（总），Rust，AI混合搜索引擎，支持全文+向量搜索，降低RAG搭建成本
13. Picovoice/picollm：⭐314（总），Python，端侧LLM推理工具，支持X-Bit量化，适合边缘设备部署
14. open-compass/opencompass：⭐7,231（总），Python，LLM评测平台，支持100+数据集、主流大模型评测

🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）：
1. affaan-m/ECC：⭐232,604（总），JavaScript，Agent性能优化系统，支持Claude Code、Codex等主流coding agent的性能调优
2. NousResearch/hermes-agent：⭐219,565（总），Python，可成长的通用AI Agent，支持多任务自适应
3. Significant-Gravitas/AutoGPT：⭐185,663（总），Python，知名开源自主Agent框架，降低AI Agent开发门槛
4. browser-use/browser-use：⭐106,418（总），Python，AI Agent网页自动化工具，让Agent可操作网站完成任务
5. Eigenwise/atomic-agents：⭐6,062（总），Python，原子化AI Agent构建框架，支持模块化组装Agent
6. CopilotKit/CopilotKit：⭐36,240（总），TypeScript，前端Agent开发栈，支持React、Slack等多端Agent应用开发
7. esengine/DeepSeek-Reasonix：⭐27,665（总），Go，DeepSeek专属终端AI Coding Agent，支持prefix-cache稳定性优化
8. jackwener/OpenCLI：⭐27,140（总），JavaScript，AI Agent驱动的网站转CLI工具，支持登录态复用
9. ComposioHQ/awesome-claude-skills：⭐0（总，今日+636），Python，Claude Agent技能 curated 列表，助力Claude工作流定制
10. earthtojake/text-to-cad：⭐0（总，今日+230），JavaScript，面向CAD/机器人/硬件设计的Agent技能集
11. santifer/career-ops：⭐61,256（总），JavaScript，AI求职Agent，自动扫描职位、评估匹配度、定制简历
12. HKUDS/nanobot：⭐46,142（总），Python，轻量开源AI Agent，支持工具调用、多轮对话、知识库集成
13. zhayujie/CowAgent：⭐46,102（总），Python，开源超级AI助手Agent Harness，支持任务规划、工具调用、自我进化
14. HKUDS/Vibe-Trading：⭐26,981（总），Python，个人AI交易Agent，支持多市场数据分析与自动决策
15. thinkwee/AgentsMeetRL：⭐1,717（总），HTML，Agent强化学习资源合集，面向Agent训练方向

📦 AI 应用（具体应用产品、垂直场景解决方案）：
1. koala73/worldmonitor：⭐0（总，今日+3175），TypeScript，AI驱动的全球实时情报仪表盘，覆盖新闻聚合、地缘监测、基础设施追踪，今日Trending榜首
2. harry0703/MoneyPrinterTurbo：⭐98,931（总），Python，AI一键生成高清短视频应用，支持自动化工作流，今日主题搜索热门
3. TauricResearch/TradingAgents：⭐94,334（总），Python，多智能体LLM金融交易框架，面向量化交易场景
4. hugohe3/ppt-master：⭐40,815（总），Python，AI自动生成原生PPT应用，支持数据图表、动画、音频旁白
5. OpenBB-finance/OpenBB：⭐70,945（总），Python，面向分析师、量化和AI Agent的开源金融数据平台
6. PaddlePaddle/PaddleOCR：⭐86,134（总），Python，多语言OCR工具，支持PDF/图片转结构化数据，是AI文档处理的核心应用
7. siyuan-note/siyuan：⭐45,379（总），TypeScript，隐私优先的开源知识管理软件，集成AI能力支持知识整理
8. shiyu-coder/Kronos：哦等下Kronos是金融基础模型，刚才是不是放错了？哦对，Kronos是Foundation Model for the Language of Financial Markets，属于大模型，所以放🧠类。哦还有microsoft/AI-For-Beginners：⭐52,756（总），Jupyter Notebook，12周AI入门教程，面向开发者的AI教育应用

🧠 大模型/训练（模型权重、训练框架、微调工具）：
1. jingyaogong/minimind：⭐53,786（总），Python，2小时从0训练64M参数LLM的教程与工具，降低大模型训练门槛，今日主题搜索热门
2. shiyu-coder/Kronos：⭐0（总，今日+401），Python，金融领域基础大模型，针对金融市场文本语言优化，今日Trending上榜
3. chrisliu298/awesome-llm-unlearning：⭐617（总），LLM机器遗忘学习资源合集，面向大模型合规、隐私方向
4. testtimescaling/testtimescaling.github.io：⭐109（总），HTML，大模型测试时扩展（Test-Time Scaling）技术综述，梳理最新研究方向
5. Hai-chao-Zhang/ThinkJEPA：⭐46（总），Python，结合JEPA世界模型与大视觉语言推理模型的研究项目，面向多模态大模型方向
6. kennethleungty/Finance-LLMs：⭐130（总），金融领域LLM与AI Agent真实用例合集，垂直领域大模型应用资源

🔍 RAG/知识库（向量数据库、检索增强、知识管理）：
1. langgenius/dify：⭐150,020（总），TypeScript，开源RAG与Agent工作流平台，支持可视化搭建AI应用，今日主题搜索热门
2. open-webui/open-webui：⭐146,518（总），Python，用户友好的AI本地界面，支持Ollama、OpenAI API及RAG能力
3. run-llama/llama_index：⭐51,047（总），Python，领先的文档Agent与RAG平台，支持多源数据索引与检索
4. infiniflow/ragflow：⭐85,811（总），Go，开源RAG引擎，融合RAG与Agent能力，提供LLM上下文增强层
5. Mintplex-Labs/anything-llm：⭐63,755（总），JavaScript，本地优先的RAG与Agent平台，支持多模型、多数据源
6. HKUDS/LightRAG：⭐38,046（总），Python，轻量高效RAG框架，EMNLP2025收录，今日主题搜索热门
7. milvus-io/milvus：⭐45,355（总），Go，高性能云原生向量数据库，支撑大规模RAG应用部署
8. qdrant/qdrant：⭐33,543（总），Rust，高性能向量数据库，支持大规模向量检索，适合RAG场景
9. mem0ai/mem0：⭐61,566（总），TypeScript，AI Agent通用内存层，支持跨会话持久化知识，属于RAG知识管理方向
10. thedotmack/claude-mem：⭐88,387（总），JavaScript，Agent跨会话持久化上下文工具，通过AI压缩注入历史知识，属于RAG知识管理方向
11. Graphify-Labs/graphify：⭐94,706（总），Python，代码库转可查询知识图谱工具，为Agent/RAG提供结构化知识源
12. PaddlePaddle/PaddleOCR：哦刚才PaddleOCR放了应用，其实也可以放RAG？哦它的核心是把文档转结构化给RAG用，不过主要作用还是文档解析应用，所以放📦就可以。哦还有VectifyAI/PageIndex：⭐34,199（总），Python，无向量RAG的文档索引工具，基于推理的RAG方案，今日主题搜索热门
13. Cognee（topoteretes/cognee）：⭐29,233（总），Python，开源AI内存平台，为Agent提供跨会话长期知识存储，基于知识图谱的RAG方案
14. nir diamant的RAG techniques是教程，放RAG类？哦对，NirDiamant/RAG_Techniques：⭐28,789（总），Jupyter Notebook，高级RAG技术教程合集，包含多种RAG优化方案的实现

哦对了，刚才的likec4是不是真的和AI无关？看描述是“Visualize, collaborate, and evolve the software architecture with always actual and live diagrams from your code”，没有提到AI，是纯静态代码转架构图，所以确实和AI无关，排除。harper是传统语法检查，没有AI能力，排除。对。

然后第三步输出报告，首先今日速览：3-5句话，概括今日最值得关注的动向。比如：今日AI开源领域热度集中在AI Agent生态完善与垂直场景落地，Trending榜中AI网关OmniRoute、全球情报仪表盘worldmonitor单日新增stars均突破2000，社区关注度极高；基础层RAG技术持续迭代，LightRAG、PageIndex等轻量/无向量RAG方案热度上升；金融AI方向同时涌现基础大模型Kronos、交易框架TradingAgents等多个项目，垂直领域AI落地加速。

然后各维度热门项目，每个维度列3-8个代表，每个要有链接、stars数据（总量+今日新增，没有今日新增的就写总stars）、一句话说明。

然后趋势信号分析：200-300字，提炼哪类工具爆发，有没有新兴技术栈，和大模型事件的关联。比如：今日AI Agent相关项目占据热榜近半壁江山，从Agent性能优化工具ECC、终端Coding Agent DeepSeek-Reasonix到垂直场景Agent（求职、交易、PPT生成），Agent生态正从通用框架向垂直场景落地快速迭代。新兴技术方向上，无向量RAG（PageIndex）、端侧RAG（LEANN）、WiFi感知AI（RuView）等轻量化、边缘化的AI方案首次进入大众视野，反映社区对低部署成本、高隐私性AI方案的关注度上升。此外，OmniRoute单日爆火与近期多家大模型厂商降价、免费额度扩容直接相关，开发者对统一模型接入、降本提效的工具需求迫切；金融领域同时出现基础大模型Kronos与交易Agent框架TradingAgents，也印证了大模型在垂直领域的落地正在从“通用能力复用”向“领域专属建模”升级。

然后社区关注热点，bullet形式3-5个，给理由。比如：
- 🔥 diegosouzapw/OmniRoute：单日新增1929 stars，Trending榜第二位，统一接入290+模型提供商，支持自动降本、token压缩，完美解决开发者多模型切换、成本高的痛点，适配Claude Code、Cursor等所有主流AI编程工具
- 🌐 koala73/worldmonitor：单日新增3175 stars，Trending榜首，AI驱动的全球情报聚合平台，覆盖地缘、基础设施等多维度监测，是AI在To B情报场景的典型落地产品
- 🧠 jingyaogong/minimind：总stars破5.3万，2小时从0训练64M参数LLM的教程项目，大幅降低大模型训练学习门槛，是开发者入门大模型训练的首选实践项目
- 🔍 HKUDS/LightRAG：EMNLP2025收录的轻量RAG框架，总stars破3.8万，实现简单高效的RAG能力，适合个人开发者快速搭建私有知识库
- 🤖 esengine/DeepSeek-Reasonix：DeepSeek官方推荐的终端Coding Agent，针对prefix-cache优化，支持长期稳定运行，是DeepSeek生态下的核心开发工具

哦对了，要确保每个项目都有链接，格式正确，语言专业简洁。还要注意刚才过滤的部分要明确说明，比如第一步过滤的时候，明确说Trending榜单中排除的5个非AI项目：Pumpkin-MC/Pumpkin（Minecraft服务器）、chrislgarry/Apollo-11（阿波罗11号源码归档）、likec4/likec4（纯软件架构可视化工具）、Automattic/harper（传统离线语法检查工具）、jellyfin/jellyfin（开源媒体系统），其余项目均纳入分析。

等下还有ruvnet/RuView，刚才是不是漏了分类？哦RuView是用WiFi信号做空间智能、生命体征监测，属于AI感知应用，应该放📦 AI应用类？哦对，刚才漏了，RuView是应用，所以加进去：📦类里加ruvnet/RuView：⭐0（总，今日

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*