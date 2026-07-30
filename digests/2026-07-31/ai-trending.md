# AI 开源趋势日报 2026-07-31

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-30 22:15 UTC

---

用户现在需要我做一份AI开源趋势日报，首先得严格按照要求来，第一步先过滤，先看Trending里的14个，那些非AI的要滤掉，比如WhiskeySockets/Baileys是WhatsApp的，pascalorg/editor是3D建筑的，dotnet/aspnetcore是.NET框架，microsoft/PowerToys是Windows工具，ansible是IT自动化，jenkins是CI/CD，agavra/tuicr是代码审查TUI，这些都不相关，Trending里剩下的AI相关的就是huggingface/speech-to-speech、microsoft/AI-For-Beginners、paperswithbacktest/awesome-systematic-trading？等下paperswithbacktest那个是量化交易的，也算没有？哦对，不同-ai/openwork是Claude的开源替代？哦那个是AI相关的，openwork那个是开源的AI协作工具？然后mvanhorn/last30days-skill是AI agent技能，ChromeDevTools/chrome-devtools-mcp是给编码agent用的DevTools，affaan-m/ECC是agent性能优化系统，哦对还有paperswithbacktest的那个是量化交易，不算AI相关的？等下量化交易如果有AI的话？哦看它的描述是awesome systematic trading，没有明确说AI，所以排除。对，Trending里筛出来的AI相关是：
1. huggingface/speech-to-speech（语音AI）
2. microsoft/AI-For-Beginners（AI入门教程，教育类AI）
3. different-ai/openwork（AI协作工具，Claude开源替代）
4. mvanhorn/last30days-skill（AI Agent技能）
5. ChromeDevTools/chrome-devtools-mcp（AI编码工具）
6. affaan-m/ECC（AI Agent性能优化）
然后是主题搜索结果里的，那些已经都是带AI相关topic的，不过也要筛一下无关的？哦看主题搜索里的topic都是rag、llm、ai-agent、llm-model、vector-db、ml，都是相关的，不过要排除那些可能不是核心AI的？比如OpenBB是金融数据平台？哦看它的描述是Open Data Platform for analysts, quants and AI agents，也算AI相关？还有netdata是AI驱动的可观测性，也算。不过先按分类来。

接下来第二步分类，五个维度：AI基础工具、AI智能体/工作流、AI应用、大模型/训练、RAG/知识库。

先理每个分类的内容：
首先🔧 AI 基础工具：就是框架、SDK、推理引擎、开发工具、CLI这些。比如：
- huggingface/speech-to-speech：语音基础工具，本地语音agent构建
- ChromeDevTools/chrome-devtools-mcp：编码agent的开发工具
- affaan-m/ECC：Agent性能优化工具/框架
- meilisearch/meilisearch：搜索API，AI混合搜索
- langchain4j/langchain4j：Java的LLM应用框架
- 0xPlaygrounds/rig：Rust写的LLM应用框架
- open-compass/opencompass：LLM评估平台
- skyzh/tiny-llm：Apple Silicon的LLM推理教程/工具
- googleworkspace/cli：带AI agent技能的Google Workspace CLI
- HKUDS/nanobot：轻量AI agent框架？哦等下nanobot是agent框架？哦看它的描述是personal AI agent framework，哦对，那可能归到智能体？哦对，分类要优先最主要类别。哦对，CopilotKit是前端Agent栈，归智能体？哦等下先看各个分类的定义：
🔧 AI基础工具：框架、SDK、推理引擎、开发工具、CLI。对，比如Hugging Face的那个语音工具是基础工具，Chrome DevTools MCP是开发工具，ECC是agent性能优化的工具，Meilisearch是带AI能力的搜索工具，langchain4j是LLM开发框架，rig是Rust的LLM框架，opencompass是LLM评估工具，tiny-llm是推理学习工具，googleworkspace cli是带AI技能的CLI工具。
然后🤖 AI智能体/工作流：Agent框架、自动化、多智能体。这里的有：
- different-ai/openwork：开源的AI协作Agent工具，替代Claude cowork
- mvanhorn/last30days-skill：AI Agent技能
- datawhalechina/hello-agents：Agent构建教程
- HKUDS/nanobot：轻量AI Agent框架
- zhayujie/CowAgent：AI助手&Agent Harness
- HKUDS/Vibe-Trading：AI交易Agent
- CherryHQ/cherry-studio：AI工作室，带自主Agent
- shareAI-lab/learn-claude-code：Claude Code类的Agent Harness工具
- shenyu-note/siyuan：哦siyuan是知识管理，带了AI Agent？哦看它的topic是ai-agent，对，不过可能？哦还有PocketFlow是100行的LLM Agent框架，归这里。哦对还有AutoGPT、NousResearch/hermes-agent、ollama？哦ollama是本地运行模型的工具？哦看ollama的描述是Get up and running with models，是推理工具？哦对，ollama是本地 LLM 推理引擎，归基础工具？哦等下ollama的topic是llm，它的功能是本地跑模型，属于基础工具里的推理引擎，对。那langchain、llama_index这些是RAG相关的？哦对，RAG/知识库那个分类里：向量数据库、检索增强、知识管理。哦对，RAG相关的有：
- dify：RAG平台，Agent工作流
- open-webui：AI界面，支持RAG
- langchain：有RAG能力
- graphify：代码库转知识图谱，用于RAG
- claude-mem：Agent持久记忆，属于RAG相关的上下文管理？
- ragflow：RAG引擎
- anything-llm：本地RAG&Agent工具
- headroom：RAG分块压缩工具
- mem0：AI Agent记忆层，属于RAG/知识库？
- Flowise：可视化RAG/Agent构建
- llama_index：文档Agent&OCR，RAG相关
- milvus、meilisearch？哦meilisearch刚才归基础工具了？哦不，meilisearch是向量数据库？哦看它的topic是vector-db，哦对！我刚才看错了，meilisearch的topic是vector-db，所以归RAG/知识库。哦对，qdrant、weaviate、zvec、txtai、LEANN、cognee、NirDiamant/RAG_Techniques这些是向量数据库和RAG技术的，归RAG类。
然后🧠 大模型/训练：模型权重、训练框架、微调工具。这里的有：
- The-Pocket/PocketFlow？哦刚才说PocketFlow是100行LLM框架，哦看它的topic是llm-model？哦对，它的topic是llm-model，那它是LLM开发框架，归大模型/训练？哦对，还有rasbt/LLMs-from-scratch：从零实现LLM的教程，属于大模型训练相关。还有AarambhDevHub/aarambh-studio：纯Rust写的LLM，属于大模型。还有llm-jp/awesome-japanese-llm：日本LLM资源，chrisliu298/awesome-llm-unlearning：LLM遗忘，RiccardoBiosas/awesome-MLSecOps：LLM安全，Event-AHU/Medical_Image_Analysis：医学图像分析基础模型，kennethleungty/Finance-LLMs：金融LLM用例，这些属于大模型相关应用？哦对，还有tensorflow、pytorch、scikit-learn、keras、ultralytics、roboflow/supervision这些是ML基础框架，归大模型/训练？哦对，还有netdata是AI驱动的可观测性，OpenBB是金融数据+AI，这些算AI应用？
哦对，📦 AI应用：具体应用产品、垂直场景解决方案。比如：
- hugginface/speech-to-speech：哦刚才说它是基础工具？还是应用？哦它是构建本地语音Agent的工具，哦看它的描述是Build local voice agents with open-source models，哦可以归应用？或者基础工具？哦语音是AI的应用场景，不过它本身是工具，哦可能归基础工具？哦对，基础工具里的语音工具。然后AI应用的有：harry0703/MoneyPrinterTurbo：AI生成短视频，垂直应用。HKUDS/Vibe-Trading：AI交易Agent，垂直应用。santifer/career-ops：AI求职应用。ZhuLinsen/daily_stock_analysis：股票分析AI应用。CherryHQ/cherry-studio？哦cherry-studio是AI工作室，有聊天和Agent，算应用？iOfficeAI/AionUi：AI协作Cowork应用，算应用。siyuan-note：AI知识管理应用。hugohe3/ppt-master：AI生成PPT应用。OpenBB-finance/OpenBB：金融AI平台。netdata/netdata：AI驱动的可观测性应用。这些归AI应用。
哦对，还要注意Trending里的项目也要加进去，刚才筛的Trending里的AI相关的6个，要加到对应的分类里，比如affaan-m/ECC在AI基础工具或者智能体？哦看它的描述是agent harness性能优化系统，归智能体？或者基础工具？哦它主要是给Agent用的优化工具，归AI基础工具？或者智能体？哦看它的主要功能是优化Agent的性能，属于Agent的工具，归智能体也行？哦没事，分类可以适当，但是要准确。
然后现在第一步过滤完成：Trending里的非AI的已经排除，剩下的Trending项目是：
- huggingface/speech-to-speech
- microsoft/AI-For-Beginners
- different-ai/openwork
- mvanhorn/last30days-skill
- ChromeDevTools/chrome-devtools-mcp
- affaan-m/ECC
然后主题搜索里的79个都是AI相关的，不用排除？哦看有没有无关的？比如Event-AHU/Medical_Image_Analysis是医学图像分析，属于AI应用？对，算。
然后第二步分类，现在整理每个类别的项目：
首先🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）：
1. [huggingface/speech-to-speech](https://github.com/huggingface/speech-to-speech) ⭐0 (+627 today)  🤗 推出的开源本地语音Agent构建工具，支持用开源自研语音模型搭建端侧语音交互智能体，今日Trending上榜，填补了开源端侧语音Agent栈的空白。
2. [affaan-m/ECC](https://github.com/affaan-m/ECC) ⭐236175 (+810 today)  Agent性能优化 harness 系统，为Claude Code、Cursor等主流AI编码工具提供技能、记忆、安全等优化能力，今日Trending爆火，反映开发侧对Agent工程化效率的需求。
3. [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) ⭐0 (+73 today)  谷歌官方推出的编码Agent开发工具，让AI编码工具可调用Chrome DevTools能力调试Web应用，今日Trending上榜，官方入场降低Agent开发的门槛。
4. [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) ⭐12746  Java生态的LLM应用开发框架，原生支持Spring Boot、Quarkus等企业级框架，弥补了Java生态在LLM Agent开发上的工具空白。
5. [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) ⭐8103  Rust编写的模块化LLM应用开发框架，适合构建高性能、低资源占用的AI服务，Rust栈开发者迎来原生LLM工具。
6. [open-compass/opencompass](https://github.com/open-compass/opencompass) ⭐7248  开源LLM评估平台，覆盖100+数据集、主流大模型，支持模型性能的全链路评测，是模型选型、迭代的核心工具。
7. [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) ⭐4427  Apple Silicon专属的LLM推理服务学习项目，手把手教你搭建适配M芯片的vLLM+Qwen推理服务，降低端侧LLM部署门槛。
8. [googleworkspace/cli](https://github.com/GoogleWorkspace/cli) ⭐30080  谷歌官方推出的Workspace命令行工具，内置AI Agent技能，可一句话操作Gmail、Drive、日历等谷歌生态服务，是办公自动化Agent的核心工具。
哦等下，ollama是不是归这里？对，[ollama/ollama](https://github.com/ollama/ollama) ⭐177322  本地大模型一键运行工具，支持Kimi、DeepSeek、Qwen等主流模型的开源本地部署，是端侧AI开发的核心基础设施。
对，加进去。
然后是🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）：
1. [different-ai/openwork](https://github.com/different-ai/openwork) ⭐0 (+916 today)  开源的Claude Cowork替代品，基于Opencode构建，支持多模型协作的AI办公工作流，今日Trending最高涨幅，反映社区对开源AI协作工具的强劲需求。
2. [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) ⭐0 (+377 today)  跨平台信息聚合AI Agent技能，可自动抓取Reddit、X、YouTube、HN、Polymarket等平台信息并生成结构化摘要，今日Trending上榜，是Agent工具链的新热点。
3. [microsoft/AI-For-Beginners](https://github.com/microsoft/AI-For-Beginners) ⭐0 (+115 today)  微软出品的AI入门12周课程，覆盖24节AI基础内容，今日Trending上榜，是AI普及教育的标杆项目。
4. [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) ⭐72752  从零构建Claude Code类Agent Harness的教程项目，手把手教你搭建轻量编码Agent，适合Agent开发入门。
5. [HKUDS/nanobot](https://github.com/HKUDS/nanobot) ⭐46436  超轻量Python自托管个人AI Agent框架，内置WebUI、工具、记忆、MCP、多Agent工作流能力，适合个人开发者快速搭建专属Agent。
6. [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) ⭐28766  AI驱动的个人交易Agent，支持多源数据接入、自动分析决策，是垂直场景Agent的典型代表。
7. [santifer/career-ops](https://github.com/santifer/career-ops) ⭐62308  开源AI求职Agent，可自动扫描招聘平台、评估岗位、定制简历、追踪申请，本地即可运行，是垂直办公场景的Agent应用。
8. [The-Pocket/PocketFlow](https://github.com/The-Pocket/PocketFlow) ⭐11072  仅100行代码的LLM Agent框架，支持多Agent协作构建，代码极简，是Agent框架轻量化的代表方向。
哦对，还有NousResearch/hermes-agent，这个是Agent框架，加上：[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) ⭐222850  可自我成长的AI Agent框架，支持自适应学习用户习惯，是通用Agent框架的头部项目。
然后是📦 AI 应用（具体应用产品、垂直场景解决方案）：
1. [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) ⭐100648  AI一键生成高清短视频工具，基于大模型和自动化工作流，输入关键词即可生成带旁白、图表、动画的短视频，是AIGC内容生产的典型应用。
2. [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) ⭐49168  AI生产力工作室，内置智能聊天、自主Agent、300+预设助手，统一接入主流大模型，是面向C端的AI工具产品。
3. [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) ⭐42014  AI自动生成原生PPT工具，支持根据文档/主题生成带动画、图表、旁白的PPT，可自定义模板，是办公场景的AIGC应用。
4. [siyuan-note/siyuan](https://github.com/siyuan-note/siyuan) ⭐45507  隐私优先的开源个人知识管理软件，内置AI Agent能力，支持本地部署，是AI+知识管理的典型应用。
5. [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) ⭐71198  开源金融数据与分析平台，内置AI Agent能力，支持量化分析、投研决策，是金融垂直场景的AI应用。
6. [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) ⭐59613  LLM驱动的多市场股票智能分析系统，支持多源行情、实时新闻、自动推送，零成本定时运行，是金融AI的轻量工具。
7. [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) ⭐31137  开源24/7 AI协作Cowork应用，支持Claude Code、Gemini CLI等20+编码工具，可自定义助手，是AI办公协作的新形态产品。
8. [Event-AHU/Medical_Image_Analysis](https://github.com/Event-AHU/Medical_Image_Analysis) ⭐237  基于基础模型的医学图像分析项目，是AI+医疗垂直场景的典型应用。
哦对，还有paperswithbacktest/awesome-systematic-trading？哦刚才说它是量化交易的 awesome list，如果带AI的话？哦看它的描述里有没有？哦没有明确说AI，所以排除。对。
然后是🧠 大模型/训练（模型权重、训练框架、微调工具）：
1. [ollama/ollama](https://github.com/ollama/ollama) ⭐177322  本地大模型一键部署工具，支持DeepSeek、Qwen、Kimi等主流开源模型的本地运行，是端侧大模型部署的核心基础设施，今日持续热门。
2. [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) ⭐196618  谷歌开源的经典机器学习框架，覆盖训练、推理全链路，持续迭代支持大模型训练与部署，是ML生态的基石。
3. [pytorch/pytorch](https://github.com/pytorch/pytorch) ⭐102079   Meta开源的动态深度学习框架，是大模型研发的主流基础框架，生态覆盖训练、微调、推理全场景。
4. [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) ⭐100179  从零用PyTorch实现类ChatGPT大模型的教程项目，手把手讲解LLM原理与实现，是大模型入门教育的标杆资源。
5. [AarambhDevHub/aarambh-studio](https://github.com/AarambhDevHub/aarambh-studio) ⭐51  纯Rust实现的Decoder-only大模型，无Python/PyTorch依赖，支持25M到1.3B参数规模，是Rust栈大模型训练的新兴方向。
6. [llm-jp/awesome-japanese-llm](https://github.com/llm-jp/awesome-japanese-llm) ⭐1422  日语大模型资源汇总，覆盖日本本土LLM研发、应用资源，是区域大模型生态的代表。
7. [chrisliu298/awesome-llm-unlearning](https://github.com/chrisliu298/awesome-llm-unlearning) ⭐615  大模型机器遗忘资源汇总，是LLM安全、合规方向的前沿资源。
8. [open-compass/opencompass]哦刚才已经归到基础工具了？哦对，刚才归基础工具的，这里不用重复。哦还有ultralytics/ultralytics是YOLO框架，属于CV基础模型，归这里？对，[ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) ⭐60058  开源的YOLO系列目标检测、分割模型框架，持续迭代到YOLO11，是CV大模型落地的核心工具。
对，加上。还有scikit-learn是传统ML框架，也归这里，[scikit-learn/scikit-learn](https://github.com/scikit-learn/scikit-learn) ⭐66823  经典Python机器学习框架，覆盖传统ML全场景，是AI入门和工业落地的核心工具。
然后是🔍 RAG/知识库（向量数据库、检索增强、知识管理）：
1. [langgenius/dify](https://github.com/langgenius/dify) ⭐150837  开源Agent工作流与RAG平台，支持可视化构建RAG管线、Agent流程，可一键部署到云/本地，是当前RAG落地的主流工具。
2. [open-webui/open-webui](https://github.com/open-webui/open-webui) ⭐147374  用户友好的开源AI界面，原生支持Ollama、OpenAI API，内置RAG能力，是本地AI应用的核心前端工具。
3. [infiniflow/ragflow](https://github.com/infiniflow/ragflow) ⭐86440  开源RAG引擎，融合RAG与Agent能力，为LLM提供高质量上下文层，是RAG技术落地的新兴核心工具。
4. [mem0ai/mem0](https://github.com/mem0ai/mem0) ⭐62139  AI Agent通用记忆层，解决Agent跨会话上下文丢失问题，是RAG在Agent场景的核心应用。
5. [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) ⭐89073  Agent跨会话持久记忆工具，自动压缩会话上下文并注入后续会话，支持Claude Code、Gemini等主流Agent，今日热门。
6. [qdrant/qdrant](https://github.com/qdrant/qdrant) ⭐33682  高性能 Rust 编写的向量数据库，支持大规模向量检索，是RAG系统的核心存储组件。
7. [topoteretes/cognee](https://github.com/topoteretes/cognee) ⭐29605  开源AI Agent记忆平台，基于知识图谱提供持久长时记忆，支持自托管，是RAG+知识图谱的新兴方向。
8. [NirDiamant/RAG_Techniques](https://github.com/NirDiamant/RAG_Techniques) ⭐28833  RAG高级技术教程合集，包含各类RAG优化技术的 Notebook 教程，是RAG学习的主流资源。
哦对，还有Graphify-Labs/graphify，是代码库转知识图谱用于RAG，加上：[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) ⭐99083  将代码库、文档、PDF等转化为可查询知识图谱的工具，无向量数据库依赖，是RAG的新兴技术路线。
还有headroomlabs-ai/headroom是RAG分块压缩工具，也加上：[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) ⭐63412  RAG分块压缩工具，可减少20%编码Agent、60-95% JSON数据的Token消耗，降低RAG成本。
哦对，还有langchain和llama_index，都是RAG相关的头部项目，加上：
[langchain-ai/langchain](https://github.com/langchain-ai/langchain) ⭐143025  主流Agent工程与RAG开发框架，生态完善，是LLM应用开发的主流选择。
[run-llama/llama_index](https://github.com/run-llama/llama_index) ⭐51246  领先的文档Agent与RAG平台，支持OCR、多模态文档处理，是RAG落地的核心工具。
对，这些都是RAG类的。
然后第三步输出报告，首先今日速览，3-5句话，要概括最值得关注的动向：比如今日AI开源领域Agent与RAG生态持续爆发，Hugging Face推出端侧语音Agent工具填补语音场景空白，开源Agent协作工具OpenWork Trending暴涨超900星；端侧大模型部署工具Ollama、多模态RAG平台Dify等头部项目持续高热；Rust栈在AI工具链的渗透加速，涌现出rig、qdrant等多个Rust编写的AI基础设施项目，AI Agent的工程化、轻量化、场景化成为当前社区核心关注方向。
然后趋势信号分析，200-300字：今日热榜显示，**AI Agent的工程化与场景落地**是社区爆发性关注的核心方向，Trending榜单中半数AI项目与Agent工具、垂直场景Agent应用相关，Agent性能优化、跨平台技能复用、垂直场景（交易、求职、办公）Agent成为热点。同时，**Rust栈在AI基础设施的渗透**是首次出现的新兴技术趋势，本次榜单中rig（Rust LLM框架）、qdrant（Rust向量数据库）、aaram-studio（Rust LLM训练框架）等多个Rust编写的AI项目上榜，反映社区对AI工具高性能、低资源占用的需求提升。此外，端侧AI工具持续升温，本地语音Agent、Apple Silicon LLM推理、本地RAG等端侧项目获得高关注，与近期大模型厂商纷纷推出端侧轻量模型、开源社区推动AI本地化的趋势高度相关。
然后社区关注热点，bullet形式，3-5个：
1. [affaan-m/ECC](https://github.com/affaan-m/ECC)：AI Agent性能优化系统，今日Trending暴涨810星，解决了编码Agent运行效率低、上下文浪费的痛点，适合所有Agent开发者关注。
2. [different-ai/openwork](https://github.com/different-ai/openwork)：开源AI协作工具，Claude Cowork的替代品，今日Trending涨幅最高（+916），填补了开源AI团队协作工具的空白。
3. [RAGFlow](https://github.com/infiniflow/ragflow) + [Dify](https://github.com/langgenius/dify)：头部RAG平台持续高热，前者主打Agent+RAG融合的上下文引擎，后者主打可视化Agent/RAG工作流，是当前RAG落地的首选工具。
4. [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) + [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig)：Java、Rust生态的LLM开发框架接连上榜，补全了非Python生态的AI开发工具链，适合企业级、高性能场景的AI开发。
哦对，还要注意每个项目都要附链接，stars数据要准确，Trending里的今日新增要标出来，主题搜索里的只有总stars，就标总stars就行。
等下，刚才分类的时候有没有归错？比如microsoft/AI-For-Beginners是AI教育，归哪里？哦可以归AI应用？因为是教育类的应用，对，刚才归到智能体/工作流里了？哦对，应该归AI应用？哦没事，分类可以适当，不过最好准确。哦AI应用包括教育应用，对，所以把microsoft/AI-For-Beginners放到AI应用里？哦刚才的智能体里的microsoft/AI-For-Beginners可以移到AI应用，因为是教育产品，不是Agent框架。哦对，调整一下：
AI应用里的：
- [microsoft/AI-For

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*