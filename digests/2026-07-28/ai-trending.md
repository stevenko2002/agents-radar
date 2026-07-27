# AI 开源趋势日报 2026-07-28

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-27 22:16 UTC

---

用户现在需要我根据给的两部分GitHub数据（Trending榜15个还有AI主题搜索79个）做筛选、分类，然后输出AI开源趋势日报。首先得一步步来，先做第一步过滤，把非AI的去掉。
首先先看Trending榜的15个：首先第一个bitchat是蓝牙聊天，无关，去掉；amnezia-vpn是VPN客户端，无关，去掉；然后moeru-ai/airi是自托管的AI虚拟伴侣，能实时语音、玩MC和Factorio，属于AI应用，要留；opengeos/GeoLibre是GIS平台，虽然有web、Jupyter，但本身是地理信息工具？等下看，有没有AI相关？哦描述里没说和AI直接相关？等下再看，哦对，它的描述是可视化分析地理空间数据，跑在浏览器桌面Jupyter，没提AI能力，所以是非AI，去掉？然后yorukot/superfile是终端文件管理器，通用工具，无关，去掉；NanmiCoder/MediaCrawler是爬虫，爬国内各平台，没有明确AI相关，比如没说用于AI训练或者和AI结合的直接功能，所以去掉？然后pbakaus/impeccable，描述是“让AI harness更好的设计语言”？哦对，是给AI工具做设计的，属于AI基础工具？等下再看：“The design language that makes your AI harness better at design.” 哦是AI相关的开发设计工具？对，算。然后shiyu-coder/Kronos是金融市场的基座模型，属于大模型/训练，留。然后alibaba/open-code-review，是代码审查工具，有LLM Agent和确定性管线，属于AI应用（代码相关的），留。然后jenkins是CI/CD工具，通用，无关，去掉。然后bradautomates/claude-video，是给Claude加视频理解能力，把视频转帧转写交给Claude，属于AI智能体/工作流？或者是AI基础工具？对，和Claude集成的工具，算AI智能体相关的？然后vudovn/ag-kit，stars只有5，而且描述没给？哦看链接里的描述？哦用户给的数据里vudovn/ag-kit的描述是空的？只有[TypeScript] ⭐0 (+5 today)，那这个信息不足，是不是要排除？对，因为没有明确AI相关说明的话，这个可以去掉。然后apache/cassandra是数据库，通用，无关，去掉。然后mvanhorn/last30days-skill，是AI agent skill，爬Reddit、X、YT等做总结，属于AI智能体，留。然后ocornut/imgui是C++ GUI库，通用，无关，去掉。哦对了，Trending里的要过滤，非AI的去掉，剩下的是：moeru-ai/airi、pbakaus/impeccable、shiyu-coder/Kronos、alibaba/open-code-review、bradautomates/claude-video、mvanhorn/last30days-skill。对，这六个是Trending里AI相关的。
然后是AI主题搜索的那79个，去重之后，都是带topic标签的，llm、ml、rag、vector-db、ai-agent、llm-model这些，都是明确AI相关的，不过要分类，还要注意不要和Trending的重了？不过没关系，分类的时候归进去就行。
接下来第二步分类，分五个维度：
第一个是🔧 AI基础工具（框架、SDK、推理引擎、开发工具、CLI）：这里面Trending里的pbakaus/impeccable是AI harness的设计语言，算开发工具？然后还有主题里的affaan-m/ECC（agent harness性能优化系统，给Claude Code这些用的）、ollama/ollama（本地运行大模型的推理引擎，这个是基础工具里的核心）、firecrawl/firecrawl（给AI爬网页的API，属于AI数据工具？或者基础工具？哦对，是AI应用开发的基础工具）、langchain-ai/langchain（LLM应用框架，基础工具）、run-llama/llama_index（文档agent平台，基础框架）、browser-use/browser-use（让AI操作浏览器的工具，基础工具）、meilisearch/meilisearch（带AI混合搜索的搜索引擎，基础工具）、mvanhorn/last30days-skill？哦不，last30days是agent skill，属于智能体？等下每个项目归最主要类别。哦对，分类的时候优先最主要：
哦重新理五个分类的定义：
🔧 AI基础工具：是开发AI应用、部署模型、做AI集成的底层工具、框架、SDK、推理引擎、CLI这些，不直接是应用或者智能体本身，是拿来用的工具。
🤖 AI智能体/工作流：是Agent框架、自动化工具、多智能体系统、agent skill这些，核心是“自主行动、完成任务”。
📦 AI应用：是面向最终用户的具体产品，垂直场景的解决方案，比如虚拟伴侣、代码审查工具、股票分析、PPT生成这些，直接给用户用的。
🧠 大模型/训练：是模型本身、训练框架、微调工具、模型相关的开源项目，核心是和大模型训练、推理、模型本身相关的。
🔍 RAG/知识库：是向量数据库、RAG相关工具、知识管理、记忆层这些，核心是做知识检索、增强、存储的。
好，现在逐个归：
首先Trending里的AI相关项目：
1. moeru-ai/airi：自托管的AI虚拟伴侣，有实时语音、游戏交互，是面向用户的AI应用，归📦 AI应用。
2. pbakaus/impeccable：给AI harness（比如Claude Code这些）做设计优化的工具，是开发AI应用的基础工具，归🔧 AI基础工具。
3. shiyu-coder/Kronos：金融市场的基座大模型，归🧠 大模型/训练。
4. alibaba/open-code-review：有LLM Agent的代码审查工具，是面向开发者的具体AI应用，归📦 AI应用。
5. bradautomates/claude-video：给Claude加视频理解能力的工具，是AI智能体的技能工具？或者是基础工具？哦它是把视频处理之后喂给Claude，属于让智能体具备新能力的工具，归🤖 AI智能体/工作流？或者看最主要，它是扩展Claude能力的工具，属于AI基础工具？等下看描述：“Give Claude the ability to watch any video. /watch downloads, extracts frames, transcribes, hands it all to Claude.” 是Claude的一个skill，属于智能体的扩展工具，归🤖吧？或者也可以归基础工具？没事，优先最主要，它核心是让AI Agent（Claude）具备视频处理能力，所以归🤖 AI智能体/工作流。
6. mvanhorn/last30days-skill：是AI Agent的skill，用来调研各平台内容生成总结，属于🤖 AI智能体/工作流。
然后是主题搜索里的项目，分类：
🔧 AI基础工具：
- affaan-m/ECC：agent harness性能优化系统，给Claude Code、Cursor这些AI编码工具做性能优化的，是基础工具，对，stars 234119，topic:llm
- ollama/ollama：本地大模型推理引擎，stars 177024，topic:llm，这个是基础工具里的核心，大家都知道ollama是本地跑模型的必备。
- firecrawl/firecrawl：AI web数据抓取API，给RAG和AI应用提供网页数据的，stars 156985，topic:llm
- langchain-ai/langchain：LLM应用开发框架，stars 142711，topic:llm
- run-llma/llama_index（哦是run-llama/llama_index）：文档处理和RAG框架，stars 51147，topic:vector-db？哦它的topic是vector-db，但本身是框架，归基础工具。
- browser-use/browser-use：AI浏览器自动化工具，让AI操作网页，stars 107021，topic:llm
- meilisearch/meilisearch：带AI混合搜索的搜索引擎，stars 58754，topic:vector-db，是搜索基础工具。
- langchain4j/langchain4j：Java生态的LangChain，给JVM做LLM应用开发的，stars 12707，topic:vector-db，基础工具。
- 还有pbakaus/impeccable刚才Trending的，归到这里。
哦对，还有吗？比如pytorch？哦pytorch是大模型训练的框架？哦等下pytorch是训练和推理的框架，归🧠还是🔧？哦定义里🧠是大模型/训练，包括模型权重、训练框架、微调工具，pytorch是训练框架，归🧠。对，tensorflow也是归🧠。
然后🤖 AI智能体/工作流：
首先是Trending里的bradautomates/claude-video、mvanhorn/last30days-skill，然后主题里的：
- NousResearch/hermes-agent：AI Agent框架，stars 221392，topic:llm
- Significant-Gravitas/AutoGPT：老牌Agent框架，stars 185719，topic:llm
- santifer/career-ops：AI求职Agent，本地跑的，stars 61848，topic:ai-agent
- Panniantong/Agent-Reach：AI网络调研Agent，零API费，stars 61251，topic:ai-agent
- CherryHQ/cherry-studio：AI生产力工作室，带自主Agent，stars 49047，topic:ai-agent
- HKUDS/nanobot：超轻量自托管AI Agent框架，stars 46300，topic:ai-agent
- zhayujie/CowAgent：开源AI助手和Agent Harness，stars 46159，topic:ai-agent
- CopilotKit/CopilotKit：前端Agent和生成式UI框架，stars 36320，topic:ai-agent
- HKUDS/Vibe-Trading：个人交易Agent，stars 28078，topic:ai-agent
- esengine/DeepSeek-Reasonix：DeepSeek终端AI编码Agent，stars 27901，topic:ai-agent
- Graphify-Labs/graphify：代码库转知识图谱的Agent Skill，stars 97117，topic:llm，哦这个是Agent skill，归这里。
- 还有吗？比如hugohe3/ppt-master？哦ppt-master是AI生成PPT的应用，归📦。对。
然后📦 AI应用：是面向最终用户的具体产品，垂直场景：
- moeru-ai/airi：AI虚拟伴侣，Trending里 today +554，stars 0？哦用户给的数据里Trending的仓库都是⭐0？哦对，看Trending的描述里都是⭐0 (+xxx today)，哦可能是新上榜的？或者是数据给的total stars是0，today加了多少。哦对，用户给的Trending里的每个都是⭐0 (+xxx today)，所以写的时候要注意，total stars是0，今日新增是多少。
- alibaba/open-code-review：AI代码审查工具，Trending today +980，归这里。
- santifer/career-ops？哦刚才归智能体了？哦等下career-ops是AI求职应用，面向用户找工作的，是具体应用？哦对哦，我刚才归错类了？等下重新看：AI应用是“具体应用产品、垂直场景解决方案”，career-ops是解决求职场景的，是应用；而Agent框架是给开发者做Agent的工具，比如AutoGPT是框架，nanobot是框架。哦刚才的分类有点混，得调整：
哦重新理分类的边界：
🔧 AI基础工具：面向AI开发者的底层工具，用来开发、部署、集成AI能力的，比如框架、SDK、推理引擎、CLI、数据工具、搜索工具等，开发者用的，不是最终用户用的。
🤖 AI智能体/工作流：面向Agent开发者的Agent框架、多智能体系统、Agent Skill、自动化工作流工具，是给开发者用来构建智能体的工具，核心是“构建Agent的能力”。
📦 AI应用：面向最终用户的具体产品，解决特定垂直场景的需求，比如AI求职、AI虚拟伴侣、AI股票分析、AI生成PPT、AI代码审查（哦open-code-review是给开发者用的代码审查工具，算不算应用？哦它是具体产品，有明确的使用场景：代码审查，所以属于AI应用。而AutoGPT是给开发者用来做Agent的框架，属于🤖。哦对，这样区分：
比如：
- ollama：基础工具（开发者用来部署模型的）
- langchain：基础工具（开发者用来写LLM应用的）
- AutoGPT：智能体框架（开发者用来做Agent的）
- career-ops：AI应用（终端用户用来找工作的）
- airi：AI应用（终端用户用来和AI虚拟伴侣互动的）
- open-code-review：AI应用（开发者用来做代码审查的，是具体产品）
哦对，这样边界就清了。那刚才的Graphify是Agent Skill，是给开发者用来给Agent加能力的，属于🤖 AI智能体/工作流。
然后🧠 大模型/训练：包括所有大模型本身、训练框架、微调工具、模型推理相关的项目，比如：
- shiyu-coder/Kronos：金融基座大模型，Trending today +442
- tensorflow/tensorflow：ML框架，stars 196576，topic:ml
- pytorch/pytorch：ML框架，stars 102024，topic:ml
- huggingface/transformers：模型框架，stars 163046，topic:llm
- jingyaogong/minimind：小参数LLM训练教程+代码，stars 53906，topic:llm-model
- The-Pocket/PocketFlow：100行LLM框架，stars 11049，topic:llm-model
- 0xPlaygrounds/rig：Rust写的LLM应用构建工具？哦它的topic是llm-model，描述是“Build modular and scalable LLM Applications in Rust”，哦这个是构建LLM应用的，归🔧还是🧠？哦它是用Rust做LLM应用，属于基础工具？哦topic是llm-model，看描述，是构建LLM应用的，所以归🔧 AI基础工具？或者看核心，它支持模型推理和应用构建，归🧠？没事，看最主要，它是LLM应用开发框架，归🔧也可以，或者归🧠？哦没事，分类的时候优先核心，它的核心是构建LLM应用，属于基础工具。
- open-compass/opencompass：LLM评测平台，stars 7240，topic:llm-model，这个是评测模型的，属于🧠大模型相关的？
- 还有rasbt/LLMs-from-scratch：从零实现LLM的教程，属于大模型训练相关的，归🧠。
- mintplex-labs/anything-llm？哦anything-llm是本地AI agent应用，归📦？哦对，anything-llm是面向用户的自托管AI应用，归📦。
然后🔍 RAG/知识库：包括向量数据库、RAG工具、知识管理、记忆层、知识图谱工具这些：
- Mintplex-Labs/anything-llm？哦不，anything-llm是应用，哦看topic:vector-db的项目：
- meilisearch/meilisearch：刚才归基础工具？哦它的核心是搜索，带AI混合搜索，属于RAG相关的？哦看它的topic是vector-db，核心是向量搜索，属于RAG/知识库的基础设施？哦刚才的分类可以调整，meilisearch有向量搜索能力，属于🔍 RAG/知识库的基础组件？哦对，刚才我归到基础工具错了，应该归到RAG/知识库，因为它核心是搜索，支持向量搜索，是RAG的基础。
然后其他vector-db的：
- milvus-io/milvus：向量数据库，stars 45391，topic:vector-db，归🔍
- qdrant/qdrant：向量数据库，stars 33613，topic:vector-db，归🔍
- weaviate/weaviate：向量数据库，stars 16655，topic:vector-db，归🔍
- alibaba/zvec：轻量级向量数据库，stars 15286，topic:vector-db，归🔍
- neuml/txtai：全栈AI框架，带语义搜索和RAG，stars 12760，topic:vector-db，归🔍
- StarTrail-org/LEANN：RAG引擎，97%存储压缩，stars 12736，topic:vector-db，归🔍
- langchain4j/langchain4j：哦它的topic是vector-db，但它是Java的LLM框架，归🔧基础工具。
- oramasearch/orama：浏览器/服务器的向量搜索+RAG引擎，stars 10504，topic:vector-db，归🔍
- topoteretes/cognee：AI agent记忆平台，知识图谱引擎，stars 29462，topic:vector-db，归🔍
- NirDiamant/RAG_Techniques：RAG技术教程合集，stars 28840，topic:vector-db，归🔍
- VectifyAI/PageIndex：无向量RAG引擎，stars 34803，topic:vector-db，归🔍
- mem0ai/mem0：AI Agent通用记忆层，stars 61858，topic:rag，归🔍
- thedotmack/claude-mem：Claude的持久上下文记忆工具，stars 88745，topic:rag，归🔍
- infiniflow/ragflow：RAG引擎，融合Agent能力，stars 86159，topic:rag，归🔍
- headroomlabs-ai/headroom：RAG token压缩工具，stars 62780，topic:rag，归🔍
- FlowiseAI/Flowise：可视化构建AI Agent和RAG的工具，stars 54970，topic:rag，归🔍？哦Flowise是可视化构建Agent和RAG的，属于AI应用工具？或者归🤖？哦它是用来构建RAG和Agent的可视化工具，属于基础工具？或者归RAG/知识库？看topic是rag，核心是RAG，所以归🔍也可以，或者归🤖？没事，归到🔍 RAG/知识库吧，因为核心是RAG相关。
- langchain-ai/langgraph：构建Agent的工具，属于🤖 AI智能体/工作流，因为它核心是构建 resilient agents，归🤖。
- Shubhamsaboo/awesome-llm-apps：100+ AI Agent和RAG应用合集，归📦？或者是资源合集？哦它是一堆应用的项目，属于AI应用相关的资源，归📦吧？
- PaddlePaddle/PaddleOCR：OCR工具，给AI用的，属于🔧 AI基础工具？因为它是将图像转为结构化数据给LLM用的，属于基础工具。
哦对，刚才漏了PaddleOCR，topic是rag，它是OCR工具，属于AI基础工具，用来把非结构化文档转成LLM能用的结构化数据，是RAG和AI应用的基础工具。
现在整理一下，先做第一步过滤，说明哪些被排除了：
首先排除的非AI项目（来自Trending榜）：
1. permissionlesstech/bitchat：蓝牙Mesh聊天工具，无AI相关能力，排除
2. amnezia-vpn/amnezia-client：VPN客户端，通用网络工具，无AI能力，排除
3. opengeos/GeoLibre：轻量级GIS平台，核心功能为地理空间数据可视化分析，无明确AI集成或能力，排除
4. yorukot/superfile：终端文件管理器，通用开发工具，无AI相关功能，排除
5. NanmiCoder/MediaCrawler：多平台内容爬虫，无直接AI相关能力（未适配AI训练/推理场景），排除
6. vudovn/ag-kit：项目描述缺失，无明确AI相关说明，排除
7. jenkinsci/jenkins：CI/CD自动化服务器，通用DevOps工具，无AI核心能力，排除
8. apache/cassandra：分布式关系型数据库，通用存储工具，无AI专属能力，排除
9. ocornut/imgui：C++轻量GUI库，通用开发工具，无AI相关功能，排除
剩下6个Trending项目为AI相关，加上79个主题搜索的去重后AI相关项目，共85个（哦用户说79个去重，所以总共是6+79=85？不过不用管总数，直接分类就行。
然后第二步分类，每个分类下的项目，选3-8个最热的，每个附链接、stars数据（总量+今日新增，Trending里的today新增要写上，主题里的没有today的话就写总量，因为主题搜索是7天活跃的，没有今日新增数据，所以只写总量）。
然后第三步输出报告：
1. 今日速览：3-5句话，概括今天的动向。比如今天Trending里AI相关的项目有AI伴侣、代码审查、视频理解Agent skill、金融大模型，主题搜索里Agent框架、RAG工具、向量数据库、本地推理工具热度最高，还有不少Agent skill和性能优化工具爆火，说明社区现在聚焦在Agent落地、RAG效率优化、本地化部署三个方向，还有针对主流AI编码工具的配套生态（比如ECC、claude-video、last30days-skill）在快速丰富。
2. 各维度热门项目，每个维度列3-8个，每个有项目名、链接、stars数据、一句话说明。
3. 趋势信号分析：200-300字，提炼哪类工具爆发，有没有新兴技术栈，和行业事件的关联。比如：今日AI开源社区呈现“Agent落地 acceleration、RAG效率升级、本地化工具普及”三大主线。首先，AI Agent相关项目包揽了今日热度榜的半壁江山，从通用Agent框架（AutoGPT、Hermes Agent）到垂直场景Agent（求职、交易、代码审查）再到Agent Skill（视频理解、跨平台调研、记忆优化）全面爆发，说明行业已经从“做Agent”转向“做可落地的Agent生态”；其次，RAG/知识库赛道涌现大量轻量、高压缩率的工具（如LEANN、headroom、cognee），核心解决RAG的存储成本和token消耗痛点，和近期大模型上下文窗口扩容但成本仍高的情况直接相关；最后，本地化推理工具（Ollama、Rig）和跨平台AI编码工具配套生态（ECC、impeccable）热度走高，反映出开发者对数据隐私、低代码/无代码AI开发的强烈需求。另外，首次出现针对金融场景的基座大模型（Kronos）和针对Claude生态的设计优化工具（impeccable），属于细分赛道的破圈信号。
4. 社区关注热点：3-5个bullet，每个给理由。比如：
- 🤖 Agent Skill生态爆发：今日多款针对Claude Code、OpenCode等主流AI编码工具的Skill（claude-video、last30days-skill、impeccable）登榜，说明Agent的“能力扩展”成为新的生态增长点，开发者开始围绕主流Agent平台构建细分能力，降低Agent落地门槛。
- 📦 垂直场景AI应用落地加速：从AI虚拟伴侣（airi）、AI代码审查（open-code-review）到AI股票分析、AI求职工具，垂直场景的AI应用不再停留在Demo阶段，开始出现可自托管、功能完善的生产级工具，面向C端和B端的落地速度明显加快。
- 🔍 RAG效率工具迭代：LEANN（97%存储压缩）、headroom（60-95% token压缩）等工具今日热度走高，直接针对RAG落地的高成本痛点，有望推动RAG在中小团队和端侧设备的普及。
- 🧠 轻量大模型训练工具受捧：minimind（2小时训练64M LLM）、PocketFlow（100行LLM框架）等轻量化大模型项目持续热门，降低了开发者入门大模型训练的门槛，适合教学和端侧场景落地。
哦对，还要注意每个项目必须附GitHub链接，没错，用户给的都有链接。
现在整理成正式的报告，结构清晰，符合要求。
等下还要注意，Trending里的项目的stars是⭐0，因为用户给的数据里Trending的每个都是⭐0 (+xxx today)，所以要如实写，比如moeru-ai/airi是⭐0 (+554 today)，说明是今日新上榜的黑马，热度高。
还有，分类的时候要准确，比如：
🔧 AI基础工具里的项目：
- affaan-m/ECC：[链接] ⭐234,119 [topic:llm] Agent性能优化系统，为Claude Code、Cursor等AI编码工具提供性能、安全、记忆优化能力，今日无新增（因为是主题搜索的，没有today数据，哦对，主题搜索的是7天活跃的，没有今日新增数据，所以只有总量，而Trending里的有today新增。
哦对，stars数据的格式：Trending里的写“总stars + 今日新增”，主题搜索的因为没有今日新增数据，所以只写总stars。
然后每个分类下的项目，选最热的，比如🔧 AI基础工具选：
1. ollama/ollama：[链接] ⭐177,024 本地大模型一键部署推理引擎，支持Kimi、DeepSeek、Qwen等主流模型，是当前最流行的本地AI开发必备工具
2. langchain-ai/langchain：[链接] ⭐142,711 业界主流的LLM应用开发框架，提供统一的模型接入、工具调用、Agent构建能力，生态最为完善
3. firecrawl/firecrawl：[链接] ⭐156,985 AI专属网页数据抓取API，可批量爬取、清洗网页数据为LLM可用的结构化格式，是RAG和AI应用的数据基础工具
4. affaan-m/ECC：[链接] ⭐234,119 Agent Harness性能优化系统，为Claude Code、Cursor等AI编码工具提供技能、记忆、安全优化，今日trending登榜（哦ECC是不是在trending里？哦看用户给的trending里没有ECC，ECC是主题搜索里的，哦对，trending里的项目是15个，其中6个AI相关，其他是主题搜索的。
哦对，trending里的AI相关项目的today新增要写上，比如alibaba/open-code-review是⭐0 (+980 today)，说明是今日trending榜的第二高增的AI项目？
然后🤖 AI智能体/工作流分类：
选最热的：
1. NousResearch/hermes-agent：[链接] ⭐221,392 自适应成长的AI Agent框架，支持多模型、多工具调用，可自主完成复杂任务，是当前Agent赛道的主流框架之一
2. Significant-Gravitas/AutoGPT：[链接] ⭐185,719 老牌开源AI Agent框架，愿景是让所有人都能使用和构建AI，提供完整的Agent开发能力
3. bradautomates/claude-video：[链接] ⭐0 (+412 today) Claude视频理解能力扩展工具，可自动下载、抽帧、转录任意视频并喂给Claude，今日trending登榜，补齐了Claude的多模态能力短板
4. mvanhorn/last30days-skill：[链接] ⭐0 (+221 today) AI Agent跨平台调研Skill，可自动抓取Reddit、X、YouTube等平台内容并生成结构化总结，今日trending登榜，适合舆情分析和趋势研究
5. HKUDS/nanobot：[链接] ⭐46,300 超轻量自托管AI Agent框架，支持WebUI、多Agent工作流、MCP协议，开箱即用，适合个人和小团队快速搭建Agent应用
然后📦 AI应用分类：
1. moeru-ai/airi：[链接] ⭐0 (+554 today) 自托管AI虚拟伴侣应用，支持实时语音聊天、Minecraft/Factorio游戏交互，可跨Web/macOS/Windows运行，今日trending登榜，二次元AI应用赛道的新热门
2. alibaba/open-code-review：[链接] ⭐0 (+980 today) 阿里开源的AI代码审查工具

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*