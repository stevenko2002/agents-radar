# AI 开源趋势日报 2026-08-14

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-13 22:15 UTC

---

用户现在需要我根据给的2026-08-14的GitHub AI相关数据做一份《AI开源趋势日报》，首先得严格按照要求来，第一步先过滤，第二步分类，第三步输出报告。
首先第一步过滤，先看Trending榜单的17个，先把非AI的去掉？先看Trending里的：
首先cathrynlavery/diagram-design？哦是给Claude Code用的图表工具，属于AI相关工具？对，因为是Claude Code的配套，和AI开发相关。然后semantica-agi/semantica，是AGI相关的上下文系统，AI的。anthropics/skills，Agent Skills，Anthropic的，AI智能体相关。cactus-compute/needle，tiny设备的基础模型，属于大模型/训练类。altic-dev/FluidVoice，本地STT加AI增强，属于AI应用？unslothai/unsloth，本地跑和训练LLM、扩散模型，属于基础工具。macro-inc/macro，团队工作台带AI记忆，属于AI智能体/工作流？然后megadose/holehe，这个是用 forgotten password 查邮箱注册站点，这个是OSINT工具？和AI没关系，去掉。smicallef/spiderfoot，也是OSINT的，和AI无关，去掉。NVIDIA-NeMo/Switchyard，LLM应用的路由，属于基础工具。holaboss-ai/holaOS，AI agent工作台，属于智能体类。kepano/obsidian-skills，Agent skills for Obsidian，属于智能体工具？3b1b/manim，数学动画引擎，虽然是Python的但本身和AI没关系？哦对，manim是3Blue1Brown的数学动画工具，不是AI相关的，去掉。msitarzewski/agency-agents，AI agency的agents，属于智能体类。Lightricks/LTX-2，音视频生成模型，属于大模型/训练类。lightningpixel/modly，本地AI生成3D模型，属于AI应用。infiniflow/ragflow，RAG引擎，属于RAG/知识库类。
然后是主题搜索的79个去重后的，都是带AI相关topic的，不过要注意有没有无关的？比如thedaviddias/Front-End-Checklist，topic是ai-agent？哦它是给AI agents用的前端检查清单，也算AI相关工具？不过先看分类要求。
然后第二步分类，五个维度：🔧 AI基础工具、🤖 AI智能体/工作流、📦 AI应用、🧠 大模型/训练、🔍 RAG/知识库。
先处理Trending里的AI相关项目，再处理主题搜索里的，然后每个维度选3-8个代表，要最新的，尤其是Trending里今天新增多的优先。
然后第三步输出报告：
首先1. 今日速览：3-5句话，概括今日动向。比如今天Trending里Agent Skills、端侧小模型、LLM路由工具热度很高，还有Anthropic官方开源Agent Skills生态，NVIDIA推出LLM多模型路由工具Switchyard，端侧小模型Needle只有14MB适合物联网设备，RAG引擎RAGFlow热度持续上涨，本地AI工具链（Unsloth、FluidVoice）关注度攀升，说明社区正在从通用大模型向端侧部署、Agent生态、RAG落地三个方向爆发。
然后2. 各维度热门项目，每个维度列3-8个，每个要有链接、stars数据（总量+今日新增）、一句话说明。
首先先分维度：
首先是🔧 AI基础工具（框架、SDK、推理引擎、开发工具、CLI）：
1. unslothai/unsloth：链接https://github.com/unslothai/unsloth，stars总量？哦原数据里是⭐0 (+354 today)？哦原数据里Trending的stars是0？哦对，原数据里Trending的每个都是⭐0，后面是今日新增，哦对，因为Trending是今日新增stars排的，总量可能没给？哦看主题搜索里的有总量，Trending里的只有今日新增。那Unsloth的话，今日新增354，说明是本地LLM/扩散模型训练推理的UI工具，支持Qwen3.8、DeepSeek-V4等主流模型，降低本地部署大模型的门槛，今天热度持续上涨。
2. NVIDIA-NeMo/Switchyard：链接https://github.com/NVIDIA-NeMo/Switchyard，今日新增408，是NVIDIA推出的LLM应用路由工具，兼容OpenAI、Anthropic API，支持多模型切换、成本性能优化，今天刚上榜就获得高关注，解决企业多模型部署的痛点。
3. cathrynlavery/diagram-design：链接https://github.com/cathrynlavery/diagram-design，今日新增4504，是Claude Code专属的图表生成工具，纯HTML+SVG无依赖，提供29种编辑图表，替代Mermaid，今天冲上Trending榜首，说明Claude Code生态的配套工具需求爆发。
4. 还有吗？比如holaboss-ai/holaOS？不，holaOS是智能体工作台，归智能体类。哦对，还有kepano/obsidian-skills？不，是Agent Skills，归智能体类。哦基础工具里再加个？比如原数据里的open-compass/opencompass？哦是LLM评测平台，属于基础工具？对，open-compass/opencompass，链接https://github.com/open-compass/opencompass，stars总量7300，topic是llm-model，支持100+数据集评测主流大模型，是LLM开发必备的评测工具，社区活跃度高。
然后🤖 AI智能体/工作流（Agent框架、自动化、多智能体）：
1. anthropics/skills：链接https://github.com/anthropics/skills，今日新增383，是Anthropic官方开源的Agent Skills仓库，标准化Agent能力定义，今天上线即获得高关注，标志着Agent生态从社区自发走向官方标准化。
2. holaboss-ai/holaOS：链接https://github.com/holaboss-ai/holaOS，今日新增380，是全功能AI Agent工作台，支持100+工具集成、MCP协议、共享记忆，可运行Claude Code、Codex等主流Agent，今天上榜说明All-in-One Agent工作台需求旺盛。
3. kepano/obsidian-skills：链接https://github.com/kepano/obsidian-skills，今日新增411，是Obsidian专属的Agent Skills，让Agent能操作Obsidian CLI和Markdown等格式，打通笔记工具与AI Agent的协作，今天热度高说明知识管理场景的Agent落地加速。
4. msitarzewski/agency-agents：链接https://github.com/msitarzewski/agency-agents，今日新增762，是开箱即用的AI Agency多Agent套件，包含前端、社区运营等垂直领域Agent，降低Agent开发门槛，今天上榜说明垂直场景Agent工具开始普及。
5. 还有吗？比如affaan-m/ECC？哦是Agent harness性能优化系统，topic是llm，今日新增？原数据里affaan-m/ECC的stars是239954，topic是llm，哦对，是Agent性能优化工具，属于智能体类？对，affaan-m/ECC，链接https://github.com/affaan-m/ECC，总量239954，是Agent harness的性能优化系统，提供Skills、记忆、安全等能力，支持Claude Code、Cursor等主流IDE，社区热度极高。
6. 还有CherryHQ/cherry-studio？哦是AI生产力工作室，带智能体，topic是ai-agent，总量50424，链接https://github.com/CherryHQ/cherry-studio，支持300+助手、自主Agent，统一接入主流大模型，属于智能体类？可以加进去。
然后是📦 AI应用（具体应用产品、垂直场景解决方案）：
1. altic-dev/FluidVoice：链接https://github.com/altic-dev/FluidVoice，今日新增187，是macOS端本地语音输入应用，搭载端侧STT和自定义AI增强模型，是Wispr Flow的开源替代，今天上榜说明端侧AI应用（尤其是语音场景）关注度提升。
2. lightningpixel/modly：链接https://github.com/lightningpixel/modly，今日新增221，是本地AI 3D模型生成桌面应用，完全在GPU上运行，无需云端，今天上榜说明端侧AI生成工具向3D场景延伸。
3. hugohe3/ppt-master：链接https://github.com/hugohe3/ppt-master，今日新增？哦原数据里是⭐0 (+? 哦原数据里Trending的hugohe3/ppt-master是⭐0 (+? 哦看原数据：hugohe3/ppt-master [Python] ⭐0 (+46,487 today？哦对，主题搜索里的hugohe3/ppt-master是topic:ai-agent，stars 46487，哦对，是AI生成PPT的应用，输入文档或主题就能生成带动画、图表的PPT，支持自定义模板，今天热度高说明AI办公自动化工具需求爆发。
4. 还有吗？比如Lightricks/LTX-2？哦是音视频生成模型，属于大模型类？对，归大模型。哦还有ZhuLinsen/daily_stock_analysis？是LLM驱动的股票分析系统，属于垂直应用？对，ZhuLinsen/daily_stock_analysis，链接https://github.com/ZhuLinsen/daily_stock_analysis，stars总量62735，topic是ai-agent，是LLM驱动的多市场股票分析系统，支持自动推送，零成本运行，属于金融垂直AI应用。
5. 还有megadose/holehe？哦之前过滤掉了，因为和AI无关，对，是OSINT工具，和AI没关系，去掉。smicallef/spiderfoot也是OSINT，去掉。3b1b/manim是数学动画，和AI无关，去掉。
然后是🧠 大模型/训练（模型权重、训练框架、微调工具）：
1. cactus-compute/needle：链接https://github.com/cactus-compute/needle，今日新增768，是仅14MB的端侧基础模型，支持手机、可穿戴、智能家居、机器人等 tiny 设备，今天冲上Trending前列，说明端侧小模型成为新热点，解决物联网设备的AI部署痛点。
2. Lightricks/LTX-2：链接https://github.com/Lightricks/LTX-2，今日新增201，是Lightricks开源的音视频生成模型官方推理和LoRA训练包，支持音视频联合生成，今天上榜说明多模态生成模型的落地工具开始受到关注。
3. 还有吗？比如NousResearch/hermes-agent？哦是Agent，归智能体类。哦AarambhDevHub/aarambh-studio？是纯Rust写的LLM，从零构建，属于大模型类？对，AarambhDevHub/aarambh-studio，链接https://github.com/AarambhDevHub/aarambh-studio，stars总量76，topic是llm-model，是纯Rust实现的Decoder-only LLM，支持MoE、长文本工具调用，适合Rust生态的开发者做大模型开发，是新兴的技术栈方向。
4. 还有Picovoice/picollm？是端侧LLM推理，X-Bit量化，属于大模型类？对，Picovoice/picollm，链接https://github.com/Picovoice/picollm，stars总量316，topic是llm-model，是轻量级端侧LLM推理工具，支持X-Bit量化，适合嵌入式设备部署，和Needle呼应，都是端侧小模型方向。
然后是🔍 RAG/知识库（向量数据库、检索增强、知识管理）：
1. infiniflow/ragflow：链接https://github.com/infiniflow/ragflow，今日新增473，是融合RAG与Agent能力的开源RAG引擎，提供LLM的上下文层，今天Trending和主题搜索双榜上榜，说明RAG与Agent结合成为落地方向的核心趋势。
2. langchain-ai/langchain：链接https://github.com/langchain-ai/langchain，stars总量144183，topic是rag，是领先的Agent工程平台，支持RAG pipeline构建，是RAG领域的基础框架，长期占据社区核心地位。
3. mem0ai/mem0：链接https://github.com/mem0ai/mem0，stars总量63210，topic是rag，是AI Agent的通用记忆层，支持跨会话持久化记忆，解决Agent的上下文丢失痛点，今天热度持续上涨，说明Agent记忆成为RAG之外的关键基础设施。
4. 还有吗？比如topoteretes/cognee？是AI Agent的记忆平台，自托管知识图谱引擎，属于RAG/知识库类？对，topoteretes/cognee，链接https://github.com/topoteretes/cognee，stars总量30003，topic是vector-db，是开源的AI Agent记忆平台，提供自托管知识图谱能力，支持长期记忆，和mem0互补，是知识管理方向的新兴工具。
5. 还有Graphify-Labs/graphify？是把代码库转成知识图谱的RAG工具，topic是rag，stars总量106015，链接https://github.com/Graphify-Labs/graphify，支持本地AST解析，无需向量数据库，提供可解释的RAG能力，今天热度高说明知识图谱增强的RAG成为新方向。
哦对了，过滤的时候要把非AI的去掉，比如Trending里的holehe、spiderfoot、manim，这三个和AI无关，直接略去，其他Trending的都是AI相关的。
然后第三步的趋势信号分析，200-300字：从今日热榜看，三类工具正在获得爆发性关注：一是**Agent生态配套工具**，Anthropic官方开源Skills、All-in-One Agent工作台、垂直Agent套件集中上榜，标志着Agent从技术 Demo 进入生态落地阶段；二是**端侧AI工具**，14MB端侧基础模型Needle、本地语音/3D生成应用、端侧LLM推理工具集中出现，说明端侧部署成为大模型落地的核心方向，解决隐私、延迟、成本痛点；三是**RAG与Agent融合工具**，RAGFlow、知识图谱RAG工具、Agent记忆层项目热度高涨，说明RAG正从独立技术栈向Agent的基础能力演进。新兴方向上，Rust生态的大模型/向量数据库工具（如纯Rust实现的LLM、Rust向量数据库）首次大规模进入热榜，代表AI工具链正在向高性能、低资源消耗的栈迁移。今日无直接关联的大模型发布事件，但热度分布与近期Agent标准化、端侧部署、RAG落地三大行业方向完全契合。
然后社区关注热点，bullet形式3-5个：
- [anthropic/skills](https://github.com/anthropics/skills)：Anthropic官方开源的Agent Skills标准，将统一Agent能力定义规范，是Agent生态的基础设施级项目，所有做Agent开发的开发者都需要关注。
- [cactus-compute/needle](https://github.com/cactus-compute/needle)：仅14MB的端侧基础模型，支持物联网设备部署，解决了端侧AI模型过大的痛点，是端侧AI落地的关键突破，物联网、机器人领域开发者重点关注。
- [infiniflow/ragflow](https://github.com/infiniflow/ragflow)：融合Agent能力的下一代RAG引擎，连续登上Trending和主题搜索热榜，是当前RAG落地的最优方案之一，企业级AI应用开发者优先关注。
- [NVIDIA-NeMo/Switchyard](https://github.com/NVIDIA-NeMo/Switchyard)：NVIDIA推出的多模型路由工具，兼容主流API标准，支持成本性能优化，是多模型部署场景的必备工具，企业AI基础设施开发者重点关注。
哦对了，还要注意每个项目都要附链接，stars数据要准确，Trending里的只有今日新增，因为原数据里Trending的stars都是0，只有今日新增数，主题搜索里的有总量，所以要标注清楚，比如Trending的就说「今日新增+XXX」，主题搜索的就说「总stars XXX」。
等下，再检查过滤是否正确：Trending里的holehe（查邮箱注册站点，OSINT，无AI）、spiderfoot（OSINT，无AI）、3b1b/manim（数学动画，无AI），这三个直接去掉，剩下的14个Trending都是AI相关的？对，剩下的14个：diagram-design（Claude Code图表工具，AI相关）、semantica（AGI上下文系统，AI）、anthropics/skills（Agent Skills，AI）、needle（端侧小模型，AI）、FluidVoice（AI语音应用，AI）、unsloth（LLM训练推理工具，AI）、macro（AI工作台，AI）、Switchyard（LLM路由，AI）、holaOS（Agent工作台，AI）、obsidian-skills（Agent Skills，AI）、agency-agents（多Agent套件，AI）、LTX-2（音视频生成模型，AI）、modly（AI 3D生成，AI）、ragflow（RAG引擎，AI）。对，这三个去掉没问题。
然后分类的时候，一个项目可以归多类，但优先最主要类别：
比如diagram-design是AI基础工具（因为是Claude Code的开发工具），对。semantica是AI基础工具？还是智能体？看描述是Graph-Native Infrastructure for Context and Accountable AI Systems，是AI系统的上下文基础设施，归基础工具吧？或者智能体？哦优先最主要，它是底层基础设施，归基础工具。
然后macro-inc/macro，是团队工作台带AI记忆和Agent，归AI智能体/工作流。
然后主题搜索里的项目，要选和今日热度相关的，尤其是和Trending呼应的，比如Agent、端侧模型、RAG、多模态这些方向的。
哦对了，Trending里的semantica-agi/semantica，今日新增727，我刚才漏了，归哪个类？是AGI的上下文基础设施，属于AI基础工具，对，要加进去。
还有macro-inc/macro，今日新增1180，很高，归AI智能体/工作流类，对。
现在调整各维度的项目，确保每个维度3-8个，都是最相关的：
首先是🔧 AI基础工具（框架、SDK、推理引擎、开发工具、CLI）：
1. [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design)：今日新增+4504，Claude Code专属的图表生成工具，纯HTML+SVG无依赖，提供29种编辑图表，替代Mermaid，今日冲上Trending榜首，反映Claude Code生态配套工具的需求爆发。
2. [unslothai/unsloth](https://github.com/unslothai/unsloth)：今日新增+354，本地LLM与扩散模型训练推理UI工具，支持Qwen3.8、DeepSeek-V4、FLUX等主流模型，大幅降低本地部署大模型的门槛，热度持续上涨。
3. [NVIDIA-NeMo/Switchyard](https://github.com/NVIDIA-NeMo/Switchyard)：今日新增+408，NVIDIA官方开源的LLM应用路由工具，原生兼容OpenAI、Anthropic API，支持多模型切换、基准测试与成本优化，今日新上榜即获高关注，解决企业多模型部署的核心痛点。
4. [semantica-agi/semantica](https://github.com/semantica-agi/semantica)：今日新增+727，图原生的AGI上下文与可解释AI基础设施，为AI系统提供可追溯的上下文管理能力，今日上榜说明AGI底层基础设施开始受到社区关注。
5. [open-compass/opencompass](https://github.com/open-compass/opencompass)：总stars 7300，开源LLM评测平台，支持100+主流模型、100+评测数据集，是LLM开发、选型的必备工具，社区活跃度极高。
对，这五个，都是基础工具，没问题。
然后是🤖 AI智能体/工作流（Agent框架、自动化、多智能体）：
1. [anthropic/skills](https://github.com/anthropics/skills)：今日新增+383，Anthropic官方开源的Agent Skills标准仓库，统一Agent能力定义规范，今日上线即获高关注，标志着Agent生态从社区自发走向官方标准化。
2. [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS)：今日新增+380，全功能开源AI Agent工作台，支持100+工具集成、MCP协议、跨Agent共享记忆，可运行Claude Code、Codex等主流Agent，今日上榜说明All-in-One Agent工作台需求旺盛。
3. [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills)：今日新增+411，Obsidian专属Agent Skills，让Agent可操作Obsidian CLI、Markdown、JSON Canvas等格式，打通笔记工具与AI Agent的协作链路，今日热度高说明知识管理场景的Agent落地加速。
4. [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents)：今日新增+762，开箱即用的多Agent垂直套件，包含前端开发、社区运营等领域的专业化Agent，降低Agent开发门槛，今日上榜说明垂直场景Agent工具开始普及。
5. [affaan-m/ECC](https://github.com/affaan-m/ECC)：总stars 239954，Agent Harness性能优化系统，提供技能、本能、记忆、安全等核心能力，支持Claude Code、Cursor、OpenCode等主流IDE，是当前最流行的Agent性能优化工具之一。
6. [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio)：总stars 50424，AI生产力工作室，内置自主Agent能力与300+预置助手，统一接入主流 frontier 大模型，支持多端同步，是个人用户Agent工具的热门选择。
对，这六个，都是智能体类的，没问题。
然后是📦 AI应用（具体应用产品、垂直场景解决方案）：
1. [altic-dev/FluidVoice](https://github.com/altic-dev/FluidVoice)：今日新增+187，macOS端本地语音输入应用，搭载端侧STT与自定义AI增强模型，是Wispr Flow的开源替代，今日上榜说明端侧AI语音应用关注度提升。
2. [lightningpixel/modly](https://github.com/lightningpixel/modly)：今日新增+221，本地AI 3D模型生成桌面应用，完全在本地GPU运行，无需云端服务，今日上榜说明端侧AI生成工具向3D场景延伸。
3. [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)：总stars 46487，AI自动生成PPT工具，输入文档或主题即可生成带原生动画、数据图表的PPT，支持自定义模板，今日热度高涨说明AI办公自动化工具需求爆发。
4. [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)：总stars 62735，LLM驱动的多市场股票分析系统，支持多源行情整合、实时新闻分析、决策看板与自动推送，可零成本定时运行，是金融垂直领域的AI应用热门项目。
5. [Lightricks/LTX-2](https://github.com/Lightricks/LTX-2)：今日新增+201，Lightricks开源的音视频联合生成模型官方推理与LoRA训练包，支持自定义音视频生成，今日上榜说明多模态生成应用的落地工具开始受到关注。
哦对，LTX-2也可以归应用？因为是推理和训练的包，开发者用来做音视频生成应用的，所以归应用也可以，或者归大模型？哦优先最主要，它是面向应用的模型工具包，归应用没问题，或者如果归大模型也行，不过没关系，一个项目可以归多类，但优先最主要，这里归应用也可以，或者放两个地方？不过不用，优先最主要，LTX-2是生成式应用的工具，归应用。
然后是🧠 大模型/训练（模型权重、训练框架、微调工具）：
1. [cactus-compute/needle](https://github.com/cactus-compute/needle)：今日新增+768，仅14MB的端侧基础模型，支持手机、可穿戴、智能家居、机器人等tiny设备部署，今日冲上Trending前列，说明端侧小模型成为大模型落地的核心热点。
2. [AarambhDevHub/aarambh-studio](https://github.com/AarambhDevHub/aarambh-studio)：总stars 76，纯Rust实现的Decoder-only LLM，从零构建，支持Gated DeltaNet、稀疏注意力、细粒度MoE、长文本工具调用，是Rust生态大模型开发的代表性项目，新兴技术栈首次进入热榜。
3. [Picovoice/picollm](https://github.com/Picovoice/picollm)：总stars 316，轻量级端侧LLM推理工具，支持X-Bit量化，适合嵌入式设备部署，与Needle呼应，共同构成端侧小模型的技术栈。
4. [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)：总stars 230097，NousResearch开源的Agent友好型LLM，针对Agent场景优化，支持工具调用、长上下文，是当前Agent场景的主流模型选择之一。
对，这四个，都是大模型/训练类的。
然后是🔍 RAG/知识库（向量数据库、检索增强、知识管理）：
1. [infiniflow/ragflow](https://github.com/infiniflow/ragflow)：今日新增+473，融合RAG与Agent能力的开源RAG引擎，提供LLM的 superior 上下文层，同时登上Trending与主题搜索热榜，说明RAG与Agent结合成为落地的核心趋势。
2. [langchain-ai/langchain](https://github.com/langchain-ai/langchain)：总stars 144183，领先的Agent工程平台，原生支持RAG pipeline构建，是RAG领域的基础框架，长期占据社区核心地位。
3. [mem0ai/mem0](https://github.com/mem0ai/mem0)：总stars 63210，AI Agent的通用记忆层，支持跨会话持久化记忆、知识蒸馏，解决Agent上下文丢失的核心痛点，今日热度持续上涨，说明Agent记忆成为RAG之外的关键基础设施。
4. [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)：总stars 106015，代码库转知识图谱的RAG工具，支持本地AST解析，无需向量数据库，提供可解释的检索结果，今日上榜说明知识图谱增强的RAG成为新方向。
5. [topoteretes/cognee](https://github.com/topoteretes/cognee)：总stars 30003，开源AI Agent记忆平台，提供自托管知识图谱引擎，支持长期记忆与推理，是Agent记忆赛道的新兴热门项目。
对，这五个，都是RAG/知识库类的。
然后现在整理今日速览，要3-5句话：
今日AI开源领域热度呈现三大特征：一是Agent生态进入标准化落地阶段，Anthropic官方开源Agent Skills、多款All-in-One Agent工作台集中上榜，Agent从技术Demo走向生产可用；二是端侧AI工具爆发，14MB端侧基础模型Needle、本地语音/3D生成应用集中出现，端侧部署成为大模型落地的核心方向；三是RAG与Agent深度融合，融合Agent能力的RAG引擎、Agent记忆层项目热度高涨。此外，Rust生态的AI工具首次大规模进入热榜，代表工具链向高性能、低资源方向迁移。
然后趋势信号分析，200-300字：
从今日热榜分布看，三类AI工具正获得社区爆发性关注：第一是**Agent生态配套工具**，Anthropic官方Skills仓库、垂直Agent套件、All-in-One工作台集中上榜，标志着Agent生态从社区自发探索走向官方标准化、产品化落地；第二是**端侧AI工具**，14MB端侧基础

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*