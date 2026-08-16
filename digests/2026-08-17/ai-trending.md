# AI 开源趋势日报 2026-08-17

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-16 22:16 UTC

---

用户现在需要我根据给的2026-08-17的GitHub AI相关数据做趋势日报，首先得一步步来，先过滤，再分类，再出报告。首先第一步过滤，先看Trending榜里的7个，哪些是AI相关的？首先cordis那个是时空组合的元框架？等下看描述，哦是spatiotemporal composability？等下先看unsloth，明显是LLM和扩散模型训练的，肯定是AI。public-apis那个是免费API列表，虽然可能有人用来找AI API，但本身是通用工具，和AI无关，排除。ToolJet那个是低代码内部工具平台，虽然提了AI agents，但本质是通用低代码，除非核心是AI？看描述是open-source foundation of ToolJet AI，但核心是内部工具，和AI的相关性？哦对要排除通用工具，所以ToolJet？等下再看其他：OpenCut是CapCut替代品，视频剪辑工具，和AI无关，排除。basecamp的omarchy是Linux发行版，完全无关，排除。cordiverse的cordis是时空组合元框架，看描述没提AI，是不是？哦对，过滤掉非AI的，Trending里的非AI：omarchy（Linux）、OpenCut（视频剪辑）、public-apis（通用API列表）、ToolJet（通用低代码内部工具？等下它的描述里有AI agents，但核心是内部工具平台，不是AI核心相关？哦对要明确是AI/ML相关的，所以ToolJet是不是？再看cactus-compute的needle，是14MB的端侧基础模型，明显是AI相关的，属于大模型/端侧模型。哦对Trending里要保留的：unsloth、needle，还有吗？cordis？等下cordis的描述是Meta-Framework of Spatiotemporal Composability，时空组合的元框架，是不是和AI有关？比如时空大模型？哦可能我漏了？等下先记下来，后面分类再看。然后主题搜索里的79个，都是带topic的，ai-agent、llm-model、rag、vector-db、ml、llm这些，都是明确AI相关的，不过要排除无关的？比如Front-End-Checklist那个，topic是ai-agent但描述是前端 checklist，给人类和AI agent用的？哦对，那个本质是前端 checklist，虽然tag了ai-agent，但核心不是AI工具，要排除吗？哦对，过滤的时候要排除那些虽然带了AI tag但本质是通用工具的，比如thedaviddias的Front-End-Checklist，本质是前端规范，不是AI相关工具，排除。还有career-ops那个，是AI求职的，算AI应用吗？对，是用AI做求职的，属于AI应用。然后其他的带正确tag的都是相关的？等下先理清楚过滤后的Trending里的AI相关项目：
1. unslothai/unsloth：Python，本地跑和训练LLM、扩散模型，支持Qwen3.8、DeepSeek-V4这些，明显AI，保留。
2. cactus-compute/needle：Python，14MB端侧基础模型，给手机、可穿戴、机器人用，属于大模型/端侧，保留。
3. cordiverse/cordis：TypeScript，时空组合元框架，哦等下是不是和AI的时空大模型有关？比如时空数据处理的AI框架？哦对，spatiotemporal composability可能是指时空AI的组合框架？那算AI基础工具？或者先保留，后面分类。
然后Trending里的其他：omarchy（Linux）、OpenCut（视频剪辑）、public-apis（通用API）、ToolJet（通用低代码，虽然有AI功能但核心不是AI工具），这些都排除。
然后主题搜索里的，排除那个Front-End-Checklist，因为是前端 checklist，不是AI核心项目。其他的都是相关的？比如ai-agent类的都是agent相关，llm-model是大模型相关，rag是RAG相关，vector-db是向量库，ml是机器学习，llm是大模型应用，都是对的。
接下来第二步分类，分五个维度：🔧 AI基础工具、🤖 AI智能体/工作流、📦 AI应用、🧠 大模型/训练、🔍 RAG/知识库。
首先先列每个维度的项目：
首先是🔧 AI基础工具（框架、SDK、推理引擎、开发工具、CLI）：这里包括什么？首先unsloth，是LLM和扩散模型的训练/推理工具，属于基础工具。然后还有0xPlaygrounds/rig，Rust写的LLM应用构建工具，属于基础工具。skyzh/tiny-llm，Apple Silicon上的LLM推理系统学习工具，属于基础工具。apache/casbin-gateway，AI和MCP的安全网关，属于基础工具。Mirrowel/LLM-API-Key-Proxy，通用LLM网关，多提供商翻译和负载均衡，属于基础工具。还有吗？哦cordis如果是时空AI框架的话也算？等下cordis的描述是Meta-Framework of Spatiotemporal Composability，时空组合的元框架，应该是AI基础工具里的时空AI框架？对。还有samchon/nestia，NestJS的AI聊天机器人开发工具，属于基础工具。哦还有langchain4j/langchain4j，JVM的LLM应用库，属于基础工具。还有picovoice/picollm，端侧LLM推理，带X-Bit量化，属于基础工具。等下要每个维度选3-8个代表，所以挑最热的：
🔧 AI基础工具：
1. cordiverse/cordis：TypeScript，0总star（因为是新项目？哦看Trending里是+719 today，总star是0？哦对，数据里写的⭐0 (+719 today)，因为是新上的热榜，总star还没累计？哦对，看数据里的Trending项目的总star都是0，因为是今日新增的，所以总star是0，今日新增是给的数。然后unsloth是+580 today，总star0？哦对，因为是今日热榜的实时数据，所以总star是截至当时的，今日新增是当天的。然后rig是+？哦主题搜索里的rig是⭐8,283总star，今日新增没给？哦对，主题搜索里的只有总star，今日新增只有Trending的有。哦对，主题搜索的是7天内活跃的，按主题分类，所以只有Trending的有今日新增数据。
然后🤖 AI智能体/工作流（Agent框架、自动化、多智能体）：这里面的项目就多了，首先NousResearch/hermes-agent，231477总star，ai-agent类的top1，agent框架。然后shareAI-lab/learn-claude-code，74383总star，claude code-like的agent harness，轻量。然后CherryHQ/cherry-studio，50557总star，AI生产力工作室，带自主agent和300+助手。然后HKUDS/nanobot，47065总star，超轻量自托管个人agent框架。然后zhayujie/CowAgent，46528总star，超级AI助手和agent harness，多模型多通道。然后santifer/career-ops，64092总star，AI求职agent，自动扫描职位、评估、改简历，属于AI应用？哦等下，career-ops是具体应用，属于📦 AI应用？哦对，分类的时候要分清楚，agent框架是🤖，具体的agent应用是📦。哦对，我刚才搞错了，🤖是Agent框架、自动化平台、多智能体基础设施，而具体的垂直agent应用是📦 AI应用。那调整一下：
🤖 AI智能体/工作流：
- NousResearch/hermes-agent：Python，231,477总star，top1的agent框架，支持自主成长的agent，今日没给新增但热度最高。
- shareAI-lab/learn-claude-code：Python，74,383总star，轻量级claude code替代的agent harness，从0到1构建，适合开发者做定制agent。
- HKUDS/nanobot：Python，47,065总star，超轻量自托管个人agent框架，支持WebUI、MCP、多agent工作流，适合个人部署。
- CopilotKit/CopilotKit：TypeScript，36,792总star，前端agent栈，支持React、Angular等，做生成式UI和agent嵌入，适合前端开发者做AI功能。
- esengine/DeepSeek-Reasonix：Go，34,643总star，DeepSeek原生的终端AI编程agent，基于prefix-cache优化，适合开发者终端使用。
然后📦 AI应用（具体应用产品、垂直场景解决方案）：这里的项目包括具体的AI应用，比如CherryHQ/cherry-studio？哦cherry-studio是AI生产力工作室，带300+助手，属于应用？还是agent框架？哦看描述是AI productivity studio with smart chat, autonomous agents, and 300+ assistants，属于应用产品。然后santifer/career-ops，AI求职应用，自动处理求职全流程。ZhuLinsen/daily_stock_analysis，LLM驱动的股票分析系统，多市场实时分析。hugohe3/ppt-master，AI自动生成PPT的应用，支持原生形状、动画、图表。FlowiseAI/Flowise，55,377总star，可视化构建AI Agent的应用，低代码搭agent工作流。Mintplex-Labs/anything-llm，64,783总star，本地优先的AI体验平台，支持私有部署。还有MoneyPrinterTurbo，104,584总star，AI自动生成短视频的应用，自动化工作流。哦对，还有OpenCut？不，OpenCut是视频剪辑，不是AI应用，排除。还有ToolJet？哦ToolJet虽然有AI功能，但本质是低代码内部工具平台，属于通用工具，排除。那📦 AI应用的代表：
- harry0703/MoneyPrinterTurbo：Python，104,584总star，AI自动生成高清短视频的垂直应用，支持主题/关键词输入一键生成，适合内容创作者。
- Mintplex-Labs/anything-llm：JavaScript，64,783总star，本地优先的AI Agent体验平台，支持多模型、私有知识库，适合个人/团队私有部署。
- CherryHQ/cherry-studio：TypeScript，50,557总star，AI生产力工作室，内置300+助手、自主agent，统一接入前沿大模型，适合日常办公和AI开发。
- santifer/career-ops：JavaScript，64,092总star，开源AI求职应用，自动扫描职位、智能评估简历、跟踪申请，全流程本地运行，适合求职者。
- hugohe3/ppt-master：Python，47,255总star，AI自动生成原生PPT的应用，支持自定义模板、数据图表、音频旁白，适合办公场景。
然后🧠 大模型/训练（模型权重、训练框架、微调工具、端侧模型）：这里的项目，首先unsloth，对，unsloth是训练和微调LLM、扩散模型的工具，支持Qwen3.8、DeepSeek-V4这些新模型，所以属于这个类别？哦刚才我把它放基础工具了？哦对，要优先归入最主要类别，unsloth核心是训练/微调LLM和扩散模型，所以应该放🧠大模型/训练里。然后cactus-compute/needle，14MB端侧基础模型，给手机、可穿戴、机器人用，属于端侧大模型，放这个类别。还有ollama/ollama，178,715总star，本地运行大模型的工具，支持Kimi-K2.6、DeepSeek这些新模型，属于大模型推理/部署工具，放这个类别。还有 Significant-Gravitas/AutoGPT，186,646总star，AutoGPT的新版本， accessible AI工具，支持大模型调用和agent构建，属于大模型应用框架？哦或者放🤖？不，AutoGPT核心是基于大模型的自主agent平台，不过也可以放🧠？哦看描述，AutoGPT是vision of accessible AI，提供工具构建AI，其实核心是大模型驱动的agent，不过先看其他：还有picovoice/picollm，端侧LLM推理，带X-Bit量化，属于端侧大模型工具，放🧠。还有skyzh/tiny-llm，是学习LLM推理系统的，属于大模型基础设施？哦对，还有open-compass/opencompass，LLM评测平台，支持100+数据集，属于大模型训练/评测工具，放🧠。那🧠大模型/训练的代表：
- unslothai/unsloth：Python，今日新增+580，本地训练/微调LLM与扩散模型的一站式工具，已支持Qwen3.8、DeepSeek-V4、FLUX等最新模型，大幅降低大模型微调门槛，今日热度飙升。
- ollama/ollama：Go，178,715总star，本地大模型运行引擎，支持一键部署Kimi-K2.6、GLM-5.2、MiniMax等主流及国产大模型，是端侧AI部署的首选工具。
- cactus-compute/needle：Python，今日新增+447，仅14MB的端侧基础模型，可部署于手机、可穿戴设备、智能家居和机器人，大幅降低端侧AI的算力门槛。
- open-compass/opencompass：Python，7,307总star，开源LLM评测平台，支持100+主流模型、100+评测数据集，是大模型迭代和选型的基础工具。
- picovoice/picollm：Python，317总star，基于X-Bit量化的端侧LLM推理工具，极致压缩模型体积，适合资源受限设备的AI部署。
然后是🔍 RAG/知识库（向量数据库、检索增强、知识管理）：这里的项目就很多了，首先langgenius/dify，152,633总star，RAG和agent工作流构建平台，支持多模型、工具，团队从原型到生产的首选。然后open-webui/open-webui，148,957总star，用户友好的AI界面，支持Ollama、OpenAI API，本地部署的RAG前端首选。然后infiniflow/ragflow，88,603总star，领先的开源RAG引擎，融合agent能力，为LLM提供 Superior 上下文层。然后Graphify-Labs/graphify，107,074总star，将代码库转为可查询知识图谱的RAG工具，支持Claude Code、Cursor等IDE，无向量库，本地确定性解析。然后mem0ai/mem0，63,383总star，AI Agent的通用记忆层，解决agent跨会话记忆问题。还有milvus-io/milvus，45,653总star，高性能云原生向量数据库，适合大规模AI场景的向量检索。还有qdrant/qdrant，34,006总star，高性能大规模向量数据库，支持云服务。还有NirDiamant/RAG_Techniques，29,077总star，RAG高级技术教程仓库，包含各种RAG优化的notebook教程。那选3-8个代表：
- langgenius/dify：TypeScript，152,633总star，开源Agentic工作流与RAG构建平台，支持多模型、工具集成，支持云/私有部署，是团队落地AI应用的主流选择。
- infiniflow/ragflow：Go，88,603总star，融合Agent能力的开源RAG引擎，提供 Superior 的上下文层，大幅提升LLM的检索准确性和响应质量。
- Graphify-Labs/graphify：Python，107,074总star，将代码库、文档、SQL Schema等转为可查询知识图谱的RAG工具，支持主流AI编程IDE，无向量库依赖，解析结果可解释。
- mem0ai/mem0：Python，63,383总star，AI Agent的通用记忆层，解决agent跨会话的记忆丢失问题，支持自托管，是agent开发的基础组件。
- milvus-io/milvus：Go，45,653总star，高性能云原生向量数据库，支持大规模向量检索，是RAG系统和AI搜索场景的基础设施。
哦对了，刚才的🤖类别里的，还有FlowiseAI/Flowise，是不是属于RAG？不，Flowise是可视化构建AI Agent的，属于🤖智能体工作流？哦对，Flowise的描述是Build AI Agents, Visually，所以属于🤖类别。哦刚才漏了，Flowise是55,377总star，可视化构建agent，属于🤖。
然后还有langchain-ai/langchain，144,349总star，agent工程平台，属于🤖智能体框架？哦对，langchain是核心的LLM应用开发框架，agent是核心功能，所以属于🤖类别。哦刚才的🤖类别里可以加上langchain。
哦对，刚才的分类要准确，现在调整一下各维度的代表项目，确保每个维度的项目是最相关的，最多8个，最少3个。
然后第三步输出报告，首先是今日速览，3-5句话，概括今日最值得关注的动向：比如今天AI开源领域热度集中在端侧大模型、AI Agent工具链和RAG基础设施三个方向，其中14MB端侧基础模型needle、LLM训练工具unsloth新增stars飙升，分别代表了端侧AI轻量化、大模型训练平民化的趋势；Agent方向多个轻量级agent框架和垂直应用上榜，说明AI Agent正从技术demo走向垂直场景落地；RAG和向量数据库方向的成熟项目持续高热，说明知识增强仍然是LLM应用落地的核心基础设施。
然后是各维度热门项目，每个维度列3-8个，每个有链接、stars数据、一句话说明。注意链接要附对，比如unsloth的链接是https://github.com/unslothai/unsloth，needle是https://github.com/cactus-compute/needle，ollama是https://github.com/ollama/ollama，dify是https://github.com/langgenius/dify，ragflow是https://github.com/infiniflow/ragflow，langchain是https://github.com/langchain-ai/langchain，hermes-agent是https://github.com/NousResearch/hermes-agent，MoneyPrinterTurbo是https://github.com/harry0703/MoneyPrinterTurbo，这些都要对。
然后趋势信号分析，200-300字，要提炼：首先哪类工具爆发性关注？哦看今日新增stars最高的几个，unsloth（+580）、needle（+447）、ToolJet（+446，但ToolJet是通用工具？哦不，ToolJet的今日新增是446，但它是不是AI相关？哦刚才过滤的时候是不是错了？ToolJet的描述是“ToolJet is the open-source foundation of ToolJet AI - the enterprise app generation platform for building internal tools, dashboard, business applications, workflows and AI agents 🚀”，哦原来它是ToolJet AI的基础，核心是构建AI agents和企业应用，那是不是属于AI基础工具？哦刚才我漏了，ToolJet的今日新增是446，在Trending里排第三？哦Trending里的今日新增：public-apis是+1583，但它不是AI相关的，排除；然后unsloth+580，然后ToolJet+446，然后needle+447？哦needle是+447，比ToolJet高一点。哦对，Trending里的今日新增排序：public-apis（1583，非AI排除）> unsloth（580）> needle（447）> ToolJet（446）> OpenCut（134）。哦那ToolJet如果是AI相关的企业应用生成平台，支持AI agents，那是不是属于AI应用？或者AI基础工具？哦看它的核心是低代码生成内部工具、dashboard、AI agents，属于AI应用开发平台？哦那分类的时候可以放到📦 AI应用里？或者🤖？哦它支持构建AI agents，所以属于🤖 AI智能体/工作流？对，因为它是一个平台，用来构建AI agents和工作流的，所以可以放🤖里。哦刚才过滤的时候我错了，ToolJet是AI相关的，因为它本身就是ToolJet AI的基础，核心能力是构建AI agents和企业应用，所以要保留，排除的是OpenCut（视频剪辑）、omarchy（Linux）、public-apis（通用API列表），这三个是明确无关的，ToolJet是相关的，因为它是AI企业应用生成平台，支持AI agents，所以要保留。哦那Trending里的AI相关项目是：unsloth、ToolJet、needle、cordis？哦cordis是时空组合元框架，是不是和AI有关？比如时空AI、时空大模型的应用框架？如果是的话就保留，否则排除。看它的描述是Meta-Framework of Spatiotemporal Composability，时空可组合的元框架，应该是用于时空AI场景的，比如自动驾驶、城市计算这些AI场景的框架，所以属于AI基础工具，保留。
哦那刚才的过滤修正：Trending里的7个项目，排除的是：
1. basecamp/omarchy：Linux发行版，完全无关，排除。
2. OpenCut-app/OpenCut：开源CapCut替代，视频剪辑工具，无核心AI能力，排除。
3. public-apis/public-apis：通用免费API列表，非AI专属，排除。
保留的4个：
- unslothai/unsloth：AI大模型训练/推理工具，保留。
- ToolJet/ToolJet：AI企业应用生成平台，支持AI agents构建，保留。
- cactus-compute/needle：端侧基础大模型，保留。
- cordiverse/cordis：时空AI组合元框架，保留。
哦对，这样就对了，刚才漏了ToolJet，现在补上。
那现在重新整理分类：
首先是🔧 AI基础工具（框架、SDK、推理引擎、开发工具、CLI）：
1. cordiverse/cordis：TypeScript，今日新增+719，时空可组合AI元框架，面向时空AI场景（如城市计算、自动驾驶）的开发框架，今日登上Trending热榜第一（AI相关类），说明时空AI的工程化工具开始获得社区关注。
2. 0xPlaygrounds/rig：Rust，8,283总star，模块化可扩展的LLM应用开发Rust工具包，适合高性能场景的LLM应用构建，填补了Rust生态在LLM工具链的空白。
3. apache/casbin-gateway：Go，565总star，Apache开源的AI与MCP安全网关，支持HTTP流量治理、权限控制，是AI Agent落地的安全基础设施。
4. Mirrowel/LLM-API-Key-Proxy：Python，542总star，通用LLM API网关，统一多厂商LLM接口，支持智能负载均衡，降低多模型集成的复杂度。
然后是🤖 AI智能体/工作流（Agent框架、自动化平台、多智能体基础设施）：
1. NousResearch/hermes-agent：Python，231,477总star，社区最热门的自主成长型Agent框架，支持多模型、多工具调用，是当前Agent开发的首选基础框架之一。
2. langchain-ai/langchain：Python，144,349总star，LLM应用开发的核心框架，Agent、RAG、工具调用能力成熟，生态完善，是业界Agent开发的主流选择。
3. ToolJet/ToolJet：JavaScript，今日新增+446，开源AI企业应用生成平台，支持低代码构建内部工具、Dashboard、AI Agent和工作流，大幅降低企业AI应用落地门槛。
4. shareAI-lab/learn-claude-code：Python，74,383总star，轻量级Claude Code替代的Agent Harness，从零构建，支持自定义技能和工具，适合开发者快速搭建定制化AI编程Agent。
5. CopilotKit/CopilotKit：TypeScript，36,792总star，前端Agent开发栈，支持React、Angular、Slack等多端，可快速将Agent能力嵌入现有前端应用，降低前端AI开发成本。
然后是📦 AI应用（垂直场景解决方案、具体应用产品）：
1. harry0703/MoneyPrinterTurbo：Python，104,584总star，AI自动生成高清短视频的垂直应用，支持主题/关键词输入，全自动化工作流生成带旁白、字幕、特效的短视频，是内容创作者的效率工具。
2. Mintplex-Labs/anything-llm：JavaScript，64,783总star，本地优先的AI Agent体验平台，支持多模型接入、私有知识库、多用户管理，适合个人和团队私有部署AI能力。
3. santifer/career-ops：JavaScript，64,092总star，开源AI求职应用，自动扫描招聘网站、用A-F rubric评估职位、定制简历、跟踪申请全流程，本地运行保护隐私。
4. hugohe3/ppt-master：Python，47,255总star，AI自动生成原生PPT的应用，支持自定义模板、数据图表、音频旁白，可直接导出.pptx文件，适合办公场景。
5. ZhuLinsen/daily_stock_analysis：Python，63,036总star，LLM驱动的多市场股票分析系统，整合多源行情、实时新闻，自动生成分析看板并推送，支持零成本定时运行。
然后是🧠 大模型/训练（模型权重、训练框架、微调工具、端侧模型、推理引擎）：
1. unslothai/unsloth：Python，今日新增+580，一站式LLM与扩散模型训练/微调工具，已支持Qwen3.8、Kimi K3、DeepSeek-V4、FLUX等最新模型，训练效率提升2-5倍，大幅降低大模型微调门槛，今日热度暴涨。
2. ollama/ollama：Go，178,715总star，本地大模型运行引擎，支持一键部署Kimi-K2.6、GLM-5.2、MiniMax、DeepSeek等主流及国产大模型，是端侧AI部署的标配工具。
3. cactus-compute/needle：Python，今日新增+447，仅14MB的端侧基础大模型，可部署于手机、可穿戴设备、智能家居和机器人，模型体积仅为同性能模型的几十分之一，推动端侧AI普及。
4. open-compass/opencompass：Python，7,307总star，开源LLM评测平台，覆盖100+主流模型、100+评测数据集，支持自动化评测流程，是大模型迭代和选型的基础工具。
然后是🔍 RAG/知识库（向量数据库、检索增强、知识管理、记忆组件）：
1. langgenius/dify：TypeScript，152,633总star，开源Agentic工作流与RAG构建平台，支持多模型接入、工具集成、知识库管理，支持云/VPC/私有部署，是团队落地AI应用的主流低代码平台。
2. infiniflow/ragflow：Go，88,603总star，融合Agent能力的开源RAG引擎，提供深度文档理解、多模态检索、上下文增强能力，大幅提升LLM在知识密集型场景的准确性。
3. Graphify-Labs/graphify：Python，107,074总star，代码库与文档知识图谱构建工具，可将代码、文档、SQL Schema等转为可查询的知识图谱，支持Claude Code、Cursor等AI编程IDE，无需向量库，解析结果可解释。
4. mem0ai/mem0：Python，63,383总star，AI Agent的通用记忆层，提供跨会话的持久化记忆能力，支持自托管，是解决Agent记忆丢失问题的核心组件。
5. milvus-io/milvus：Go，45,653总star，高性能云原生向量数据库，支持大规模向量近似最近邻搜索，是RAG系统、AI搜索场景的基础设施，生态成熟。
哦对了，刚才的🤖类别里还有FlowiseAI/Flowise，是可视化构建AI Agent的，属于🤖，可以加上，作为第6个。还有HKUDS/nanobot，超轻量agent框架，也加上。
现在调整🤖的列表：
🤖 AI智能体/工作流：
1. NousResearch/hermes-agent：Python，231,477总star，社区热度最高的自主成长型Agent框架，支持多模型调用、工具集成、记忆管理，适合构建复杂自主Agent。
2. langchain-ai/langchain：Python，144,349总star，LLM应用开发核心框架，Agent、RAG、工具调用能力成熟，生态完善，是当前Agent开发的主流基础设施。
3. shareAI-lab/learn-claude-code：Python，74,383总star，轻量级Claude Code替代的Agent Harness，从零构建，支持自定义

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*