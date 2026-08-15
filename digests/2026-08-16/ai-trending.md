# AI 开源趋势日报 2026-08-16

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-15 22:15 UTC

---

用户现在需要我根据给的GitHub数据生成AI开源趋势日报，首先得按照步骤来，先过滤，再分类，再输出报告。首先第一步过滤，先看Trending的13个，哪些是AI相关的，哪些要排除。首先Trending里的：cordis是时空组合的元框架？等下看描述，哦是时空组合性的元框架？等下再看，cathrynlavery的diagram-design是给Claude Code的图表工具，属于AI相关的开发工具？然后cursor/plugins是Cursor的插件，AI IDE的插件，相关。cactus-compute/needle是14MB的小模型，端侧大模型，相关。unsloth是训练微调LLM和扩散模型的，相关。public-apis是通用API列表？这个是不是AI无关？对，是通用免费API集合，排除。MakazhanAlpys的Soup是微调LLM的，相关。github/spec-kit是规格驱动的开发工具？哦是Spec-Driven Development的工具包，算AI基础工具？因为是给AI编码用的？等下再看，megadose/holehe是邮箱泄露检测工具？这个和AI没关系吧？对，是社工相关的？排除。altic-dev/FluidVoice是端侧语音识别的，有AI增强模型，相关。ToolJet是AI应用生成平台，相关。HKUDS/CLI-Anything是让软件原生支持Agent的，属于Agent相关，相关。citrolabs/ego-lite是给AI Agent用的浏览器自动化，相关。哦对Trending里排除public-apis和holehe，剩下的11个？等下再确认：cordis是不是AI相关的？哦它的描述是Spatiotemporal Composability Meta-Framework，时空组合元框架？等下会不会是别的？哦再看，哦可能是和AI时空数据相关的？或者会不会我看错了？等下再看其他，cathrynlavery的diagram-design是给Claude Code的，属于AI开发工具，对。cursor/plugins是AI IDE插件，对。needle是端侧小模型，对。unsloth是训练微调框架，对。Soup是微调工具，对。spec-kit是规格驱动开发，属于AI辅助开发的基础工具？对。FluidVoice是端侧语音AI应用，对。ToolJet是AI应用生成平台，对。CLI-Anything是Agent工具，对。ego-lite是Agent浏览器工具，对。哦cordis的话，等下它的描述是Meta-Framework of Spatiotemporal Composability，时空组合元框架，是不是和AI时空模型相关？或者会不会是别的？哦先记下来，后面分类的时候再判断。然后主题搜索的那79个，已经按topic分了，都是AI相关的，因为topic是ai-agent、rag、vector-db、ml、llm-model、llm，所以都是相关的，不用过滤。

然后第二步分类，分五个维度：🔧 AI基础工具、🤖 AI智能体/工作流、📦 AI应用、🧠大模型/训练、🔍 RAG/知识库。现在把筛选后的项目归进去：

首先先理每个类别的：
首先🔧 AI基础工具（框架、SDK、推理引擎、开发工具、CLI）：这个类别是底层的开发工具、CLI、框架，不是直接做应用也不是Agent也不是大模型训练？等下看分类定义：框架、SDK、推理引擎、开发工具、CLI。那首先Trending里的：cathrynlavery/diagram-design（给Claude Code的图表工具，开发工具）、cursor/plugins（Cursor插件，AI IDE的基础插件工具）、github/spec-kit（Spec-Driven Development工具包，AI辅助开发工具）、ToolJet/ToolJet（哦等下ToolJet是AI应用生成平台？哦对它的描述是enterprise app generation platform，属于应用？哦对，📦是具体应用产品。然后HKUDS/CLI-Anything（让软件原生支持Agent的CLI工具，属于基础工具？对，CLI工具）、citrolabs/ego-lite（给Agent用的浏览器自动化工具，属于基础工具？哦或者是Agent相关？等下看🤖的类别是Agent框架、自动化、多智能体。哦ego-lite是给Agent用的浏览器工具，属于Agent的基础工具？或者归到🤖？等下再看分类的优先级，优先最主要类别。哦还有主题搜索里的：比如thedaviddias/Front-End-Checklist（给AI Agent用的前端检查清单，属于AI开发工具？）、HKUDS/nanobot（个人AI Agent框架？哦归到🤖）、zhayujie/CowAgent（AI Agent框架，🤖）、CopilotKit/CopilotKit（Agent的前端栈，🤖？或者是基础工具？哦它是Frontend Stack for Agents，属于Agent开发的基础工具？哦等下分类定义🤖是Agent框架、自动化、多智能体，那CopilotKit是Agent的前端框架，归到🤖？然后还有基础的CLI、SDK之类的：比如Eigenwise/atomic-agents（Agent框架？🤖）、samchon/nestia（NestJS的AI Chatbot开发助手，基础工具？）、apache/casbin-gateway（AI&MCP安全网关，基础工具）、Mirrowel/LLM-API-Key-Proxy（LLM网关，基础工具）、skyzh/tiny-llm（LLM推理系统学习工具，基础工具？哦或者是大模型训练？不，是推理引擎，属于基础工具）、Picovoice/picollm（端侧LLM推理，基础工具）。哦对还有Trending里的cordis？等下它的描述是时空组合元框架，会不会是AI相关的？哦先放着，后面再看。哦还有unsloth？不，unsloth是训练微调LLM的，归到🧠大模型/训练。needle是端侧小模型，归到🧠。MakazhanAlpys的Soup是微调LLM的，归到🧠。

然后🤖 AI智能体/工作流（Agent框架、自动化、多智能体）：这个类别的项目，首先Trending里的：HKUDS/CLI-Anything（让软件原生支持Agent，Agent工具）、citrolabs/ego-lite（给AI Agent用的浏览器自动化，属于Agent工具）。然后主题搜索里的：NousResearch/hermes-agent（Agent框架）、shareAI-lab/learn-claude-code（Agent Harness）、Panniantong/Agent-Reach（AI Agent工具，给Agent眼睛）、santifer/career-ops（AI求职Agent）、CherryHQ/cherry-studio（有自主Agent的工作台）、hugohe3/ppt-master（AI生成PPT的应用？哦不，等下hugohe3/ppt-master是AI把文档变成PPT，属于应用？哦对📦。然后HKUDS/nanobot（个人AI Agent框架）、zhayujie/CowAgent（AI Agent框架）、CopilotKit/CopilotKit（Agent前端框架）、esengine/DeepSeek-Reasonix（AI编码Agent）、agentscope-ai/QwenPaw（个人AI助手）、bojieli/ai-agent-book（Agent书籍，属于资源？哦要不要算？或者算？哦还有datawhalechina/hello-agents（Agent教程，资源？）、Eigenwise/atomic-agents（Agent框架）、zchoi/Awesome-Embodied-Robotics-and-Agent（具身智能Agent资源）、thinkwee/AgentsMeetRL（Agent强化学习资源）。哦对还有ToolJet是应用，归到📦。

然后📦 AI应用（具体应用产品、垂直场景解决方案）：Trending里的：cactus-compute/needle？不，needle是模型，归🧠。altic-dev/FluidVoice（macOS端侧语音听写应用，AI应用）、ToolJet/ToolJet（企业AI应用生成平台）、cathrynlavery/diagram-design（给Claude Code生成图表的工具？哦是AI开发工具？哦等下它是29种编辑器图表，给Claude Code用的，属于AI辅助开发的应用？或者是基础工具？哦先放着。然后主题搜索里的：ZhuLinsen/daily_stock_analysis（股票分析AI应用）、hugohe3/ppt-master（AI生成PPT应用）、Mintplex-Labs/anything-llm（本地AI助手应用）、FlowiseAI/Flowise（可视化构建AI Agent的应用）、jeecgboot/JeecgBoot（AI低代码平台）、harry0703/MoneyPrinterTurbo（AI生成短视频应用）、browser-use/browser-use（给AI Agent用的浏览器自动化应用？哦或者是Agent工具？哦它的描述是Make websites accessible for AI agents，属于Agent工具？哦归到🤖？哦还有public-apis是排除的，holehe排除。哦还有cathrynlavery的diagram-design，是给Claude Code用的图表生成工具，属于AI开发应用？或者是基础工具？哦先归到基础工具？或者应用？等下看分类，📦是具体应用产品、垂直场景，比如股票分析、PPT生成、语音听写这些是应用，diagram-design是开发工具，归基础工具。

然后🧠 大模型/训练（模型权重、训练框架、微调工具）：Trending里的：unslothai/unsloth（LLM和扩散模型训练微调工具）、cactus-compute/needle（14MB端侧基础模型）、MakazhanAlpys/Soup（LLM微调工具）。然后主题搜索里的：tensorflow/tensorflow（ML框架，属于大模型训练的基础？哦对，ML框架，归🧠）、huggingface/transformers（模型定义框架，归🧠）、pytorch/pytorch（深度学习框架，归🧠）、rasbt/LLMs-from-scratch（LLM从零实现教程，属于学习资源？哦算不算？或者是训练相关的资源）、microsoft/ML-For-Beginners（ML入门教程，资源）、ultralytics/ultralytics（YOLO模型，视觉大模型？归🧠）、roboflow/supervision（CV工具，属于模型应用？哦或者是基础工具？哦roboflow/supervision是CV reusable tools，属于基础工具？哦对，是CV开发工具，归🔧？然后tesseract-ocr/tesseract（OCR引擎，属于基础工具？归🔧）、scikit-learn/scikit-learn（ML库，归🧠）、keras-team/keras（深度学习框架，归🧠）、apache/airflow（工作流调度，属于MLOps工具，归🔧？哦对，ML的基础工具，调度工作流的。然后还有open-compass/opencompass（LLM评测平台，属于大模型训练相关的工具，归🧠？或者是基础工具？哦是评测平台，属于大模型训练的工具链，归🧠吧）。哦还有picollm是端侧LLM推理，属于基础工具？归🔧。skyzh/tiny-llm是LLM推理系统学习，属于基础工具？归🔧。

然后🔍 RAG/知识库（向量数据库、检索增强、知识管理）：这个类别的都是主题搜索里的，因为Trending里好像没有直接的RAG项目？哦等下Trending里有没有？哦没有，都是Agent、工具、模型、应用。然后主题搜索里的：langgenius/dify（RAG和Agent工作流平台）、open-webui/open-webui（AI界面，支持RAG）、langchain-ai/langchain（Agent和RAG平台）、Shubhamsaboo/awesome-llm-apps（RAG和Agent应用合集）、Graphify-Labs/graphify（代码库转知识图谱，RAG相关）、thedotmack/claude-mem（Agent持久化上下文，RAG相关）、infiniflow/ragflow（RAG引擎）、datawhalechina/hello-agents（哦这个是Agent教程，归🤖？哦它的topic是rag，但内容是Agent教程，哦看topic是rag，那归到🔍？哦或者看主要内容，hello-agents是《从零开始构建智能体》，属于Agent教程，归🤖吧。然后headroomlabs-ai/headroom（压缩RAG块的工具，归🔍）、Mintplex-Labs/anything-llm（哦这个是应用，但是也有RAG功能，归📦？哦它的topic是rag，但是是应用，所以归📦）、mem0ai/mem0（AI Agent的通用记忆层，属于RAG/知识库，归🔍）、FlowiseAI/Flowise（可视化构建Agent，topic是rag，归📦？哦对是应用）、run-llama/llama_index（文档Agent和OCR平台，RAG相关，归🔍）、jeecgboot/JeecgBoot（topic是rag，是AI低代码平台，归📦）、milvus-io/milvus（向量数据库，归🔍）、meilisearch/meilisearch（向量搜索，topic是vector-db，归🔍）、VectifyAI/PageIndex（无向量RAG的文档索引，归🔍）、qdrant/qdrant（向量数据库，归🔍）、topoteretes/cognee（AI Agent记忆平台，知识图谱，归🔍）、NirDiamant/RAG_Techniques（RAG技术教程，归🔍）、weaviate/weaviate（向量数据库，归🔍）、alibaba/zvec（轻量向量数据库，归🔍）、neuml/txtai（AI框架，语义搜索RAG，归🔍）、langchain4j/langchain4j（Java的LLM库，支持RAG，归🔍？或者是基础工具？哦topic是vector-db，所以归🔍）、lancedb/lancedb（嵌入式向量数据库，归🔍）、oceanbase/oceanbase（分布式数据库，支持AI负载，topic是vector-db，归🔍）、databendlabs/databend（数据仓库，支持AI，topic是vector-db，归🔍）。

哦对了，过滤的时候Trending里的public-apis是通用API列表，和AI无关，排除；megadose/holehe是邮箱泄露检测工具，和AI无关，排除。剩下的11个Trending项目是AI相关的。然后主题搜索的79个都是AI相关的，因为topic都是ai-agent、rag、vector-db、ml、llm-model、llm，所以都保留。

接下来第三步输出报告，首先今日速览，3-5句话，概括今天的动向。首先看今日新增stars高的Trending项目：cathrynlavery的diagram-design今日+1619，public-apis排除，然后unsloth+435，needle+551，ego-lite+546，ToolJet+553，Soup+303，spec-kit+901，CLI-Anything+100，FluidVoice+165，cursor/plugins+152，cordis+616。然后主题搜索里的都是高星项目，比如Affaan-m的ECC是Agent性能优化系统，240k星，AutoGPT186k，ollama178k，firecrawl167k，huggingface transformers164k，dify152k，open-webui148k，langchain144k这些。然后看趋势：端侧AI（小模型、端侧推理）有热度，needle是14MB端侧模型，FluidVoice是端侧语音，picollm是端侧LLM推理；然后Agent相关的特别火，不管是Agent框架、Agent工具、Agent应用，还有Spec-Driven Development（spec-kit今日+901）是新的方向？还有AI辅助开发工具，比如diagram-design给Claude Code用，cursor插件，CLI-Anything让软件支持Agent，都是AI编码和Agent工具的热度。还有RAG相关的向量数据库、知识库工具还是核心基础设施，热度很高。

然后各维度热门项目，每个维度3-8个，每个要项目名、链接、stars数据（总量+今日新增，Trending的有今日新增，主题搜索的只有总量）、一句话说明。

首先先整理每个维度的项目：

首先🔧 AI基础工具（框架、SDK、推理引擎、开发工具、CLI）：
1. [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) ⭐0 (+1619 today)：为Claude Code等AI编码工具提供的29种自包含图表生成工具，无需Mermaid等依赖，今日热榜新增stars暴涨，解决AI生成可视化图表的痛点。
2. [cursor/plugins](https://github.com/cursor/plugins) ⭐0 (+152 today)：Cursor AI IDE的官方插件规范与官方插件集合，拓展AI编码工具的能力边界。
3. [github/spec-kit](https://github.com/github/spec-kit) ⭐0 (+901 today)：GitHub推出的规格驱动开发（SDD）工具包，帮助开发者用结构化规格驱动AI辅助开发，今日热榜高热度，代表AI编码范式的新方向。
4. [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) ⭐0 (+100 today)：让所有软件原生支持AI Agent调用的CLI工具，降低Agent与现有软件的集成成本。
5. [citrolabs/ego-lite](https://github.com/citrolabs/ego-lite) ⭐0 (+546 today)：专为AI Agent设计的轻量浏览器自动化工具，支持共享登录态，无需配置即可让Agent操作浏览器，今日热榜高热度。
6. [thedaviddias/Front-End-Checklist](https://github.com/thedaviddias/Front-End-Checklist) ⭐73,539：面向人类和AI Agent的现代前端开发检查清单，是AI辅助前端开发的基础参考工具。
7. [samchon/nestia](https://github.com/samchon/nestia) ⭐2,173：NestJS生态的AI Chatbot开发辅助工具，降低Java/TS栈构建AI应用的成本。
8. [Mirrowel/LLM-API-Key-Proxy](https://github.com/Mirrowel/LLM-API-Key-Proxy) ⭐540：通用LLM API网关，统一多厂商LLM接口，支持负载均衡，是LLM集成的底层工具。
9. [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) ⭐4,488：面向Apple Silicon的轻量LLM推理系统学习项目，帮助开发者理解LLM推理原理，适合端侧AI开发学习。
10. [Picovoice/picollm](https://github.com/Picovoice/picollm) ⭐317：基于X-Bit量化的端侧LLM推理工具，支持在资源受限设备上运行LLM，是端侧AI的基础工具。

哦对，这个类别可以选7个左右的，选热度高的，Trending里有今日新增的优先。

然后🤖 AI智能体/工作流（Agent框架、自动化、多智能体）：
1. [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) ⭐231,054：NousResearch推出的可成长AI Agent框架，是当前Agent领域的头部项目，社区活跃度高。
2. [affaan-m/ECC](https://github.com/affaan-m/ECC) ⭐240,288：Agent性能优化系统，为Claude Code、Codex等主流AI编码Agent提供技能、记忆、安全等增强能力，总星位列AI项目前列。
3. [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) ⭐186,620：知名自主AI Agent框架，目标是让AI accessible for everyone，是Agent领域的启蒙级项目，长期保持高热度。
4. [HKUDS/nanobot](https://github.com/HKUDS/nanobot) ⭐47,038：超轻量自托管个人AI Agent框架，支持MCP、多Agent工作流、WebUI，适合个人开发者快速搭建私有Agent。
5. [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) ⭐46,515：开源超级AI助手与Agent Harness，支持多模型、多渠道、记忆与知识库，一键安装，适合快速落地个人AI助手。
6. [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) ⭐36,783：面向Agent的前端开发栈，支持React、Angular等多端，是构建AI Agent前端界面的主流工具。
7. [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) ⭐34,617：基于DeepSeek的终端AI编码Agent，优化了前缀缓存稳定性，适合长时间运行的编码场景。
8. [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) ⭐33,766：基于Qwen的个人AI助手，支持多平台部署与能力扩展，是国内主流的Agent落地项目。
9. [santifer/career-ops](https://github.com/santifer/career-ops) ⭐63,931：AI求职自动化Agent，自动扫描招聘平台、评估岗位、生成简历，是垂直场景Agent的代表。
10. [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) ⭐72,006：给AI Agent提供互联网访问能力的工具，支持多平台内容读取与搜索，零API费用，拓展Agent的能力边界。

这个类别选8个左右的，都是高星或者热榜的。

然后📦 AI应用（具体应用产品、垂直场景解决方案）：
1. [altic-dev/FluidVoice](https://github.com/altic-dev/FluidVoice) ⭐0 (+165 today)：macOS端侧语音听写应用，搭载自定义AI增强模型，是Wispr Flow的开源替代，今日热榜上榜，代表端侧AI应用的落地。
2. [ToolJet/ToolJet](https://github.com/ToolJet/ToolJet) ⭐0 (+553 today)：开源企业级AI应用生成平台，支持快速构建内部工具、Dashboard、AI Agent工作流，今日热榜高热度，是低代码AI应用的代表。
3. [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) ⭐47,062：AI驱动的PPT生成工具，支持从文档/主题生成原生PPT，含动画、图表、音频旁白，是垂直场景AI应用的明星项目。
4. [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) ⭐62,962：LLM驱动的多市场股票智能分析系统，支持多源数据整合、实时决策看板，是金融领域AI应用的代表。
5. [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) ⭐103,918：AI一键生成高清短视频工具，支持自动化工作流，是内容创作领域AI应用的热门项目。
6. [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) ⭐64,736：本地优先的AI助手应用，支持多模型接入、Agent能力、知识库，是个人AI应用的主流选择。
7. [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) ⭐50,519：AI生产力工作台，支持智能对话、自主Agent、300+助手，统一接入主流大模型，是办公AI应用的代表。
8. [jeecgboot/JeecgBoot](https://github.com/jeecgboot/JeecgBoot) ⭐47,402：企业级AI低代码平台，支持一句话生成系统、AI技能、知识库，是Java生态AI应用落地的代表。

这个类别选8个，都是垂直应用或者平台类应用。

然后🧠 大模型/训练（模型权重、训练框架、微调工具）：
1. [unslothai/unsloth](https://github.com/unslothai/unsloth) ⭐0 (+435 today)：本地LLM与扩散模型训练微调工具，支持Qwen3、DeepSeek-V4、FLUX等主流模型，今日热榜上榜，大幅降低大模型微调门槛。
2. [cactus-compute/needle](https://github.com/cactus-compute/needle) ⭐0 (+551 today)：仅14MB的端侧基础模型，支持手机、穿戴设备、智能家居、机器人等 tiny 设备运行，今日热榜高热度，代表端侧小模型的新方向。
3. [MakazhanAlpys/Soup](https://github.com/MakazhanAlpys/Soup) ⭐0 (+303 today)：极简LLM微调工具，通过YAML配置即可微调模型，支持在4GB笔记本GPU上训练8B模型，大幅降低微调门槛，今日热榜上榜。
4. [huggingface/transformers](https://github.com/huggingface/transformers) ⭐164,118：Hugging Face推出的模型定义框架，支持文本、视觉、音频、多模态模型的训练与推理，是当前大模型生态的核心基础设施。
5. [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) ⭐197,045：Google推出的开源机器学习框架，支持大规模模型训练与部署，是老牌ML框架的头部项目。
6. [pytorch/pytorch](https://github.com/pytorch/pytorch) ⭐102,392：Meta推出的动态神经网络框架，是当前大模型研究的主流训练框架，社区活跃度极高。
7. [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) ⭐60,646：YOLO系列目标检测、实例分割、姿态估计等CV模型框架，是视觉大模型落地的核心工具。
8. [open-compass/opencompass](https://github.com/open-compass/opencompass) ⭐7,307：开源LLM评测平台，支持100+数据集、100+模型的评测，是大模型训练与选型的重要工具。

这个类别选8个，都是核心的模型、训练框架、微调工具。

然后🔍 RAG/知识库（向量数据库、检索增强、知识管理）：
1. [langgenius/dify](https://github.com/langgenius/dify) ⭐152,538：开源Agentic工作流与RAG平台，支持可视化构建AI应用、知识库，是当前RAG与Agent结合的主流平台，总星位列AI项目前列。
2. [infiniflow/ragflow](https://github.com/infiniflow/ragflow) ⭐88,550：领先的开源RAG引擎，融合RAG与Agent能力，为LLM提供 Superior 上下文层，是RAG领域的明星项目。
3. [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) ⭐106,690：将代码库、文档、SQL schema等转化为可查询知识图谱的RAG工具，支持Claude Code、Cursor等AI编码工具，无需向量数据库，是RAG的新兴方向。
4. [mem0ai/mem0](https://github.com/mem0ai/mem0) ⭐63,328：AI Agent的通用记忆层，为Agent提供跨会话的持久化记忆能力，是Agent与RAG结合的核心基础设施。
5. [milvus-io/milvus](https://github.com/milvus-io/milvus) ⭐45,646：高性能云原生向量数据库，支持大规模向量检索，是RAG生态的核心存储组件。
6. [qdrant/qdrant](https://github.com/qdrant/qdrant) ⭐33,992：高性能大规模向量搜索引擎，支持向量检索与结构化过滤，是RAG场景的常用存储工具。
7. [topoteretes/cognee](https://github.com/topoteretes/cognee) ⭐30,048：开源的AI记忆平台，基于自托管知识图谱为Agent提供长期持久化记忆，是RAG与Agent结合的新兴项目

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*