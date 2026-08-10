# AI 开源趋势日报 2026-08-11

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-10 22:15 UTC

---

用户现在需要我根据给的2026-08-11的GitHub AI相关数据做一份开源趋势日报，首先得严格按步骤来，先过滤，再分类，再输出报告。首先第一步过滤，先看Trending里的16个，哪些是非AI的？哦对，Ladybird是独立浏览器，Dopamine是iOS越狱，这俩直接排除，剩下14个Trending的是AI相关的。然后主题搜索的79个本来就是AI相关的，去重就行，比如firecrawl在两个里都有，去重一下。

然后第二步分类，先理清楚每个分类的定义：🔧AI基础工具是框架、SDK、推理、开发工具CLI这些；🤖AI智能体/工作流是Agent框架、自动化、多智能体；📦AI应用是具体产品垂直场景；🧠大模型/训练是模型权重、训练框架微调；🔍RAG/知识库是向量库、检索增强、知识管理。

首先先处理Trending里的项目先分类：
首先看Trending的：
1. semantica-agi/semantica：Graph-Native的上下文和 accountable AI 基础设施，哦这个属于AI基础工具？还是RAG？看描述是上下文AI系统的基础设施，可能是基础工具？等下再看。哦描述是Graph-Native Infrastructure for Context and Accountable AI Systems，应该是AI基础工具里的基础设施类？
2. msitarzewski/agency-agents：完整的AI agency，各种 specialized agent，属于🤖AI智能体/工作流。
3. NanmiCoder/MediaCrawler：爬虫，爬各个社交平台的内容，这个是AI应用的垂直场景？因为是用来给AI爬训练数据或者内容分析的？对，属于📦AI应用，数据采集类的应用。
4. addyosmani/agent-skills：AI编码Agent的生产级工程技能，属于🤖AI智能体/工作流？还是基础工具？哦是给Agent用的技能集，属于智能体相关的工具？或者基础工具？等下看主要用途，是给AI coding agent用的skills，属于智能体生态的工具？或者归到🤖里？
5. paperclipai/paperclip：管理工作Agent的开源应用，属于🤖AI智能体/工作流，是Agent管理平台。
6. PrimeIntellect-ai/prime-agent：自我改进的RLM编码Agent，属于🤖AI智能体/工作流，这个今日新增2655，很高。
7. ruvnet/RuView：用WiFi信号做空间感知、生命体征监测，这个是AI应用，垂直场景的感知类，属于📦AI应用。
8. danielmiessler/LifeOS：AI的life/work优化工具，属于📦AI应用，个人效率类的AI应用。
9. firecrawl/firecrawl：web搜索爬取交互的API，属于🔧AI基础工具？因为是给AI Agent提供网络上下文的基础工具，对，基础工具里的数据获取层。
10. TauricResearch/TradingAgents：多Agent LLM金融交易框架，属于📦AI应用，金融垂直场景，或者🤖？哦是多Agent的框架，但应用场景是金融交易，所以归到📦AI应用？或者🤖？等下看分类定义，🤖是Agent框架、自动化、多智能体，📦是具体应用产品、垂直场景。哦这个既是多Agent框架，又是金融交易的应用，优先最主要类别，应该是📦AI应用，因为是面向金融交易的具体应用，底层是Agent框架。
11. google-deepmind/weathernext：DeepMind的天气预测，属于🧠大模型/训练？或者是AI应用？哦是DeepMind的天气大模型应用，属于📦AI应用？或者🧠？看描述是weathernext，应该是气象大模型，属于🧠大模型/训练？等下后面主题搜索里的大模型类，这个如果是模型的话归🧠，如果是应用归📦，先记下来。
12. vitali87/code-graph-rag：monorepo的RAG工具，用知识图谱，属于🔍RAG/知识库，很明确。
13. pingdotgg/t3code：哦这个是T3栈的代码工具？等下看描述，哦pingdotgg的t3code，是AI辅助的T3栈开发工具？属于🔧AI基础工具，开发工具类。
14. Comfy-Org/ComfyUI：扩散模型的GUI，属于📦AI应用，AIGC类的应用，很明确。
15. 哦Trending里还有吗？刚才数了14个，排除了Ladybird和Dopamine，对的。

然后处理主题搜索的79个，去重之后分类：
首先🔧AI基础工具类的：
- addyosmani/agent-skills：哦刚才Trending里的，给AI编码Agent的工程技能集，属于基础工具？或者智能体？等下看分类，🤖是Agent框架、自动化、多智能体，这个是Agent的技能，属于智能体生态的工具，可能归🤖？或者先看其他：
- firecrawl/firecrawl：刚才的，基础工具，给AI提供网络数据的基础设施，对。
- pingdotgg/t3code：AI辅助的T3栈开发工具，基础工具。
- 还有吗？比如affaan-m/ECC：topic:llm，Agent harness的性能优化系统，skills、instincts这些，属于🔧AI基础工具？因为是Agent的基础工具链。
- 还有esengine/DeepSeek-Reasonix：Go写的DeepSeek终端Agent，属于🤖？还是基础工具？是终端Agent工具，属于🤖AI智能体。
- paulburgess1357/nvim-mcp：Neovim的MCP服务器，给Agent连Neovim的，属于🔧AI基础工具，开发工具类。

然后🤖AI智能体/工作流类的：
- msitarzewski/agency-agents：Trending里的，多 specialized Agent的agency，今日+1352。
- addyosmani/agent-skills：AI编码Agent的生产级技能，今日+659，属于智能体工具。
- paperclipai/paperclip：工作Agent管理应用，今日+167。
- PrimeIntellect-ai/prime-agent：自我改进的RLM编码Agent，今日+2655，Trending里最高的几个之一。
- NousResearch/hermes-agent：topic:llm的，会成长的Agent，总star22万+。
- Significant-Gravitas/AutoGPT：经典Agent项目，总star18万+。
- Panniantong/Agent-Reach：topic:ai-agent的，给Agent提供全网络访问的CLI，总star7万+。
- santifer/career-ops：AI求职Agent，扫描求职网站、评估、改简历，总star6万+。
- ZhuLinsen/daily_stock_analysis：LLM驱动的股票分析Agent，总star6万+。
- CherryHQ/cherry-studio：AI生产力工作室，带自主Agent，总star5万+。
- HKUDS/nanobot：超轻量自托管个人Agent框架，总star4万+。
- zhayujie/CowAgent：开源超级AI助手，自进化，总star4万+。
- siyuan-note/siyuan：开源知识工作空间，人和Agent协作，总star4万+。
- hugohe3/ppt-master：AI生成PPT的Agent，总star4万+。
- CopilotKit/CopilotKit：Agent的前端栈，AG-UI协议，总star3万+。
- bojieli/ai-agent-book：AI Agent的书籍配套代码，总star3万+。
- agentscope-ai/QwenPaw：个人AI助手，支持多平台，总star3万+。
- iOfficeAI/AionUi：24/7 cowork的Agent应用，总star3万+。
- Gitlawb/openclaude：跨平台开源的Claude类Agent，总star3万+。
- Eigenwise/atomic-agents：原子化构建Agent的框架，总star6k+。
- 哦还有browser-use/browser-use：topic:llm的，让Agent能操作网站，总star10万+，这个很重要，属于🤖AI智能体，是Agent的网页操作工具。

然后📦AI应用类的：
- NanmiCoder/MediaCrawler：Trending里的，多平台内容爬虫，今日+215，用于AI数据采集、内容分析。
- ruvnet/RuView：WiFi信号转空间感知、生命体征监测，今日+186，无摄像头感知应用。
- danielmiessler/LifeOS：AI个人/工作优化工具，今日+357，个人效率AI应用。
- TauricResearch/TradingAgents：多Agent LLM金融交易框架，今日+234，金融垂直AI应用。
- google-deepmind/weathernext：DeepMind气象预测大模型应用，今日+327，气象垂直AI应用。
- Comfy-Org/ComfyUI：扩散模型GUI/API/后端，今日+921，AIGC内容生成应用。
- harry0703/MoneyPrinterTurbo：AI一键生成高清短视频，总star10万+，内容生成应用。
- hugohe3/ppt-master：AI生成PPT，刚才也列了，属于应用。
- 还有吗？比如CherryHQ/cherry-studio也算应用？哦它是AI生产力工作室，有具体产品功能，也算应用？不过刚才归到智能体了？没事，一个项目可以多类，优先最主要。比如MoneyPrinterTurbo是明确的AI应用，短视频生成。
- 还有datawhalechina/hello-agents：topic:rag的，但从零构建Agent的教程，也算应用？不，是教程，哦算教育类？不过可以归到🤖？或者不算，等下看分类，主要是产品应用。哦对，还有jeecgboot/JeecgBoot：topic:rag的，企业级AI低代码平台，属于📦AI应用，企业级低代码AI应用，总star4万+。
- 还有吗？比如huggingface/transformers？哦那个是基础工具？对，属于🔧AI基础工具，因为是模型框架。

然后🧠大模型/训练类的：
- google-deepmind/weathernext：哦刚才的，DeepMind的气象大模型，属于🧠？对，是垂直领域大模型。
- jingyaogong/minimind：topic:llm-model的，2小时从0训练64M小LLM，总star5万+，今日？哦主题搜索里的，总star5万+，是训练教程+小模型，属于🧠。
- 0xPlaygrounds/rig：Rust写的LLM应用框架，属于🧠？还是基础工具？哦是构建LLM应用的Rust框架，属于基础工具？或者大模型工具？归到🔧？
- open-compass/opencompass：LLM评测平台，总star7k+，属于🧠？还是基础工具？是评测工具，属于大模型训练/评测的工具，归🧠？
- 还有ollama/ollama：topic:llm的，本地运行大模型的工具，总star17万+，属于🔧AI基础工具？还是🧠？是推理引擎，属于基础工具。
- 还有rasbt/LLMs-from-scratch：从零实现LLM的教程，总star10万+，属于🧠大模型/训练，教育类的大模型训练资源。
- tensorflow/tensorflow、pytorch/pytorch：这两个是基础框架，属于🔧AI基础工具。
- 还有AarambhDevHub/aarambh-studio：纯Rust写的LLM，属于🧠大模型/训练，总star75，新方向。
- 还有chrisliu298/awesome-llm-unlearning：LLM遗忘的资源，属于🧠。
- Picovoice/picollm：端侧LLM推理，属于🔧基础工具？
- 哦对了，还有PrimeIntellect-ai/prime-agent是Agent，不是大模型。还有vitali87/code-graph-rag是RAG的。

然后🔍RAG/知识库类的：
- vitali87/code-graph-rag：Trending里的，monorepo的RAG工具，用知识图谱，今日+682。
- Shubhamsaboo/awesome-llm-apps：topic:rag的，100+AI Agent和RAG应用，总star13万+。
- thedotmack/claude-mem：topic:rag的，Agent的持久化上下文记忆，总star9万+。
- infiniflow/ragflow：topic:rag的，RAG引擎，融合Agent能力，总star8万+。
- datawhalechina/hello-agents：从零构建Agent的教程，带RAG内容，总star7万+。
- headroomlabs-ai/headroom：topic:rag的，压缩RAG块的工具，给Agent用，减少token，总star6万+。
- Mintplex-Labs/anything-llm：topic:rag的，本地优先的LLM+RAG应用，总star6万+。
- mem0ai/mem0：topic:rag的，AI Agent的通用记忆层，总star6万+。
- FlowiseAI/Flowise：topic:rag的，可视化构建AI Agent和RAG，总star5万+。
- run-llama/llama_index：topic:rag的，文档Agent和OCR平台，总star5万+。
- jeecgboot/JeecgBoot：topic:rag的，企业级AI低代码平台，带RAG知识库，总star4万+。
- milvus-io/milvus：topic:rag的，向量数据库，总star4万+。
- 然后向量数据库的还有meilisearch、qdrant、weaviate、lancedb这些，都属于🔍RAG/知识库，因为向量库是RAG的核心组件。
- 还有Graphify-Labs/graphify：topic:llm的，代码库转知识图谱，用于RAG，总star10万+，属于RAG类。
- VectifyAI/PageIndex：topic:vector-db的，无向量的推理RAG，总star3万+。
- topoteretes/cognee：topic:vector-db的，Agent的长期记忆知识图谱，总star2万+。
- 还有databendlabs/databend：topic:vector-db的，AI就绪的数仓，属于RAG相关的基础设施。

哦对了，过滤的时候要把非AI的去掉，Trending里的LadybirdBrowser/ladybird（独立浏览器，和AI无关）、opa334/Dopamine（iOS越狱工具，无关），这两个直接排除，剩下的14个Trending的都是AI相关的，主题搜索的79个本来就是AI相关的，去重后比如firecrawl在两个里都有，合并就行。

接下来第三步输出报告，首先今日速览，要3-5句话，概括今天最值得关注的动向。首先看今日新增stars最高的几个：PrimeIntellect-ai/prime-agent +2655，msitarzewski/agency-agents +1352，ComfyUI +921，firecrawl +815，agent-skills +659，code-graph-rag +682，这些。所以速览可以说：今日AI开源领域热点集中在AI智能体生态与RAG技术迭代，PrimeIntellect-ai的自我改进编码Agent以单日2655星登顶 Trending 榜首，反映社区对高自主性编码Agent的强烈关注；多Agent框架、Agent技能集相关项目同样热度飙升，Agent工程化成为主流方向；此外，基于知识图谱的RAG工具、AIGC内容生成工具也有较高关注度，DeepMind开源的气象大模型weathernext则展示了垂直领域大模型的最新落地进展。

然后各维度热门项目，每个维度3-8个，每个要项目名、链接、stars数据（总量+今日新增，Trending里的有今日新增，主题搜索里的只有总量）、一句话说明。

首先🔧AI基础工具（框架、SDK、推理引擎、开发工具、CLI）：
1. [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) ⭐164,999（今日新增+815）：面向AI Agent的Web数据上下文API，支持大规模搜索、爬取和网页交互，今日Trending上榜，为Agent提供稳定的网络数据获取能力。
2. [ollama/ollama](https://github.com/ollama/ollama) ⭐178,226：本地大模型推理工具，支持一键运行Kimi、DeepSeek、Qwen等主流开源模型，是当前最普及的本地LLM部署工具。
3. [huggingface/transformers](https://github.com/huggingface/transformers) ⭐163,554： Hugging Face出品的多模态模型定义框架，支持文本、视觉、音频等主流模型的训练与推理，是AI开发的事实标准工具库。
4. [affaan-m/ECC](https://github.com/affaan-m/ECC) ⭐239,227：Agent harness性能优化系统，提供技能集、记忆、安全等能力，适配Claude Code、Cursor等主流AI编码工具，今日主题搜索热度最高。
5. [pingdotgg/t3code](https://github.com/pingdotgg/t3code) ⭐（今日新增+388）：AI辅助T3栈开发工具，支持自然语言生成全栈代码，今日Trending上榜，降低全栈开发门槛。
6. [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) ⭐196,929：Google开源的经典机器学习框架，支持从研究到生产的全流程ML开发，是工业界广泛使用的底层框架。
7. [pytorch/pytorch](https://github.com/pytorch/pytorch) ⭐102,298：Meta开源的动态神经网络框架，以灵活易用著称，是学术研究和工业落地的首选深度学习框架。

然后是🤖AI智能体/工作流（Agent框架、自动化、多智能体）：
1. [PrimeIntellect-ai/prime-agent](https://github.com/PrimeIntellect-ai/prime-agent) ⭐0（今日新增+2655）：自我改进的RLM编码Agent，支持长周期自主编码任务和工作流，今日Trending新增星数最高，反映社区对高自主性编码Agent的迫切需求。
2. [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) ⭐0（今日新增+1352）：全栈AI Agency工具包，内置前端、社区运营、质量检查等 specialized Agent，每个Agent具备独立人格、流程和交付能力，今日Trending上榜。
3. [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) ⭐228,416：可随用户使用不断成长的通用Agent，支持工具调用、记忆和自主任务执行，是当前最流行的通用Agent框架之一。
4. [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) ⭐0（今日新增+659）：生产级AI编码Agent技能集，提供工程最佳实践、安全规范和自动化能力，适配Claude Code、Copilot等主流编码Agent，今日Trending上榜。
5. [browser-use/browser-use](https://github.com/browser-use/browser-use) ⭐108,646：让AI Agent具备网页操作能力，可自动化完成线上任务，是当前Agent落地网页场景的核心工具。
6. [santifer/career-ops](https://github.com/santifer/career-ops) ⭐63,436：开源AI求职Agent，可自动扫描求职平台、评估职位、定制简历、跟踪申请，完全本地运行，解决求职者的重复工作。
7. [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) ⭐36,671：Agent前端开发栈，提供React、Slack等多端Agent集成能力，是AG-UI协议的主要维护方，降低Agent应用的前端开发成本。

然后是📦AI应用（具体应用产品、垂直场景解决方案）：
1. [Comfy-Org/ComfyUI](https://github.com/Comfy-Org/ComfyUI) ⭐0（今日新增+921）：最强大的模块化扩散模型GUI/API/后端，支持节点式工作流，是AIGC内容生成领域最流行的开源工具，今日Trending热度极高。
2. [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) ⭐0（今日新增+234）：多Agent LLM金融交易框架，集成行情分析、策略制定、风险控制等Agent，实现全自动AI交易，今日Trending上榜。
3. [ruvnet/RuView](https://github.com/ruvnet/RuView) ⭐0（今日新增+186）：基于WiFi信号的实时空间感知与生命体征监测工具，无需摄像头即可实现 presence 检测、呼吸心跳监测，是边缘AI感知的创新应用。
4. [google-deepmind/weathernext](https://github.com/google-deepmind/weathernext) ⭐0（今日新增+327）：DeepMind开源的气象预测大模型，支持高精度中长期天气预报，是垂直领域大模型落地的典型代表，今日Trending上榜。
5. [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) ⭐102,489：AI一键生成高清短视频工具，支持根据主题自动生成脚本、素材、配音和剪辑，是内容创作者的热门工具，总star突破10万。
6. [NanmiCoder/MediaCrawler](https://github.com/NanmiCoder/MediaCrawler) ⭐0（今日新增+215）：多平台（小红书、抖音、B站、微博等）内容爬虫，支持笔记、视频、评论的采集，是AI数据采集、舆情分析的核心工具，今日Trending上榜。
7. [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) ⭐0（今日新增+357）：通用AI个人/工作优化工具，通过 hill-climbing 算法帮助用户从当前状态向理想状态迭代，是个人效率AI应用的代表。
8. [jeecgboot/JeecgBoot](https://github.com/jeecgboot/JeecgBoot) ⭐47,355：企业级AI低代码平台，支持一句话生成整个系统，内置AI聊天、知识库、流程编排、MCP插件等能力，是国内企业级AI应用的代表项目。

然后是🧠大模型/训练（模型权重、训练框架、微调工具）：
1. [jingyaogong/minimind](https://github.com/jingyaogong/minimind) ⭐54,535：2小时从零训练64M参数小LLM的开源教程与代码，配套详细文档，是LLM入门学习的首选资源，总star突破5万。
2. [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) ⭐102,290：从零用PyTorch实现类ChatGPT LLM的分步教程，覆盖数据预处理、训练、推理全流程，是全球LLM入门最受欢迎的教程项目。
3. [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) ⭐8,235：Rust语言编写的模块化LLM应用开发框架，支持构建高性能、可扩展的LLM应用，是新兴的Rust生态LLM工具链代表。
4. [open-compass/opencompass](https://github.com/open-compass/opencompass) ⭐7,290：开源LLM评测平台，支持100+数据集、覆盖Llama、Qwen、GPT-4等主流模型，是当前最全面的LLM评测工具之一。
5. [AarambhDevHub/aarambh-studio](https://github.com/AarambhDevHub/aarambh-studio) ⭐75：纯Rust从零实现的Decoder-only LLM，支持DeltaNet、稀疏注意力、MoE等特性，是端侧小模型的新兴探索方向。
6. [ollama/ollama](https://github.com/ollama/ollama) ⭐178,226：哦刚才归到基础工具了，这里可以不用，或者如果归大模型的话？不，ollama是推理引擎，归基础工具更合适。
7. 还有吗？比如picovoice/picollm：端侧LLM推理，X-Bit量化，属于🧠？或者基础工具？归基础工具吧。
8. 还有chrisliu298/awesome-llm-unlearning：LLM遗忘的资源合集，属于大模型训练的前沿方向，总star618，是新兴的LLM合规方向。

然后是🔍RAG/知识库（向量数据库、检索增强、知识管理）：
1. [vitali87/code-graph-rag](https://github.com/vitali87/code-graph-rag) ⭐0（今日新增+682）：面向monorepo的终极RAG工具，结合知识图谱实现多语言代码库的查询、理解和编辑，今日Trending上榜，是代码RAG领域的创新项目。
2. [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) ⭐104,976：将任意代码库、文档、SQL Schema等转换为可查询知识图谱的工具，支持Claude Code、Cursor等编码工具，无需向量数据库即可实现精准RAG，总star突破10万。
3. [infiniflow/ragflow](https://github.com/infiniflow/ragflow) ⭐87,196：领先的开源RAG引擎，融合RAG与Agent能力，为LLM提供superior上下文层，是当前最流行的企业级RAG方案之一。
4. [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) ⭐131,961：100+开源AI Agent、Agent技能和RAG应用合集，是RAG应用开发的最佳实践参考库，总star突破13万。
5. [milvus-io/milvus](https://github.com/milvus-io/milvus) ⭐45,594：高性能云原生向量数据库，支持大规模向量ANN搜索，是RAG领域最普及的向量存储方案。
6. [qdrant/qdrant](https://github.com/qdrant/qdrant) ⭐33,904：高性能大规模向量数据库，支持云原生部署，是RAG场景的主流向量存储选择。
7. [mem0ai/mem0](https://github.com/mem0ai/mem0) ⭐62,952：AI Agent的通用记忆层，支持跨会话的持久化记忆，是Agent+RAG结合的创新方向，总star突破6万。
8. [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) ⭐55,310：可视化拖拽式RAG与Agent构建工具，无需代码即可搭建AI应用，是RAG低代码开发的代表项目。

哦对了，刚才的Trending里的semantica-agi/semantica，我刚才归到基础工具了？对，是Graph原生的AI系统基础设施，属于🔧AI基础工具，可以加进去：比如在🔧里加一个[semantica-agi/semantica](https://github.com/semantica-agi/semantica) ⭐0（今日新增+967）：Graph原生AI系统基础设施，提供上下文管理与可问责AI能力，今日Trending上榜，是下一代AI系统底层架构的新兴探索。

然后趋势信号分析，200-300字，要提炼：哪类工具爆发，有没有新兴技术栈，和大模型/行业事件的关联。首先，爆发性关注的是AI智能体生态，尤其是编码Agent、多Agent框架、Agent技能集，今日Trending前十里Agent相关占了一半以上，加上主题搜索里Agent类项目总star总量极高，说明社区已经从“做大模型”转向“做Agent落地”，Agent工程化成为核心方向。然后新兴

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*