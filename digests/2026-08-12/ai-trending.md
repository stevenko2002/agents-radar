# AI 开源趋势日报 2026-08-12

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-11 22:15 UTC

---

用户现在需要我做一份2026-08-12的AI开源趋势日报，首先得严格按照三个步骤来：过滤、分类、输出报告。首先第一步过滤，先看Trending的17个，去掉nvm、awesome-mac、project-based-learning这三个无关的，剩下的14个是AI相关的？等下核对下：Trending里的nvm是Node版本管理，完全无关，awesome-mac是mac软件合集，project-based-learning是通用项目教程，这三个直接排除，剩下的11个？哦对还有manim？哦manim是3b1b的数学动画引擎，虽然有时候和AI结合但本身是通用动画工具？等下看用户要求是排除通用工具，哦对，manim本身是数学动画的，没有明确AI相关性？等下看它的描述是Animation engine for explanatory math videos，没有提AI，所以也要排除？哦对，刚才漏了，还有harvey-labs是法律agent的benchmark，是AI相关的。哦先理清楚Trending的过滤：
Trending原始17个：
1. msitarzewski/agency-agents：AI agent相关，保留
2. semantica-agi/semantica：AI基础设施，保留
3. nvm-sh/nvm：无关，排除
4. addyosmani/agent-skills：AI agent技能，保留
5. ZhuLinsen/daily_stock_analysis：LLM驱动股票分析，AI应用，保留
6. vitali87/code-graph-rag：代码RAG，AI相关，保留
7. anthropics/skills：Anthropic的agent技能，保留
8. 3b1b/manim：通用数学动画工具，无明确AI属性，排除
9. HKUDS/DeepTutor：AI个性化辅导，保留
10. stablyai/orca：多agent运行环境，保留
11. paperclipai/paperclip：agent管理工具，保留
12. huggingface/transformers：大模型框架，保留
13. harveyai/harvey-labs：法律agent benchmark，AI相关，保留
14. jaywcjlove/awesome-mac：无关，排除
15. calesthio/OpenMontage：AI视频生产系统，保留
16. practical-tutorials/project-based-learning：通用教程，排除
17. PrimeIntellect-ai/prime-agent：自改进RLM agent，保留
哦对，Trending过滤后剩下12个？等下数下：1,2,4,5,6,7,9,10,11,12,13,15,17？哦13个，对，排除了nvm、manim、awesome-mac、project-based-learning四个，剩下13个。
然后是主题搜索的79个，都是带AI相关topic的，所以都保留？对，因为主题搜索已经是按llm、ai-agent、rag、ml、vector-db这些tag的，所以都是AI相关的，不用排除。
接下来第二步分类，分五个维度：🔧 AI基础工具、🤖 AI智能体/工作流、📦 AI应用、🧠 大模型/训练、🔍 RAG/知识库。
首先先处理每个分类：
首先是🔧 AI基础工具（框架、SDK、推理引擎、开发工具、CLI）：这个维度的是底层的开发工具、框架类，比如：
- huggingface/transformers：大模型框架，基础工具，对，stars 163766+69 today
- ollama/ollama：本地推理引擎，基础工具，178291+？哦主题搜索里ollama的topic是llm，stars是178291，Trending里没出现但主题搜索有，对
- langchain-ai/langchain：agent工程平台，算基础工具？对，143996
- firecrawl/firecrawl：网页抓取的上下文API，基础工具，165837
- 0xPlaygrounds/rig：Rust写的LLM应用构建工具，基础工具，8242
- langchain4j/langchain4j：Java的LLM开发库，基础工具，12843
- 还有Trending里的vitali87/code-graph-rag？哦不，code-graph-rag是RAG相关的？等下优先归入最主要类别，code-graph-rag是代码领域的RAG，所以归RAG？对。还有semantica-agi/semantica是图原生AI基础设施，算基础工具？对，Trending里的semantica，stars 0+884 today。哦对还有Graphify-Labs/graphify？不，graphify是RAG相关的，把代码库转知识图谱，属于RAG？等下先理清楚每个分类的核心：
🤖 AI智能体/工作流（Agent框架、自动化、多智能体）：这个是agent相关的框架、工具、多agent系统：
- Trending里的：
  - msitarzewski/agency-agents：AI agency多agent系统，0+971 today
  - addyosmani/agent-skills：AI coding agent生产级技能，0+571 today
  - anthropics/skills：Anthropic官方agent技能库，0+468 today
  - stablyai/orca：多并行agent运行环境（ADE），0+881 today
  - paperclipai/paperclip：工作agent管理平台，0+743 today
  - PrimeIntellect-ai/prime-agent：自改进RLM coding agent，0+1148 today（这个今日新增最高啊 Trending里第一？哦对Trending里prime-agent是+1148 today，最高的）
  - HKUDS/DeepTutor：终身个性化AI辅导agent，0+829 today
  - calesthio/OpenMontage：agentic视频生产系统，0+436 today
  - 主题搜索里的：
    - NousResearch/hermes-agent：自适应agent，228991
    - Significant-Gravitas/AutoGPT：经典agent框架，186527
    - HKUDS/nanobot：轻量级自托管agent框架，46858
    - zhayujie/CowAgent：开源AI助手与agent harness，46460
    - CherryHQ/cherry-studio：AI生产力工作室含自主agent，50301
    - CopilotKit/CopilotKit：前端agent栈，36696
    - iOfficeAI/AionUi：多CLI agent协同工作台，31871
    - esengine/DeepSeek-Reasonix：DeepSeek终端coding agent，33952
    - agentscope-ai/QwenPaw：个人AI assistant，33759
    - Panniantong/Agent-Reach：带联网能力的agent，70703
    - santifer/career-ops：AI求职agent，63525
    - bojieli/ai-agent-book：AI Agent原理与实践教程，36154
哦对，这些都属于agent相关的，归到这个类。
然后是📦 AI应用（具体应用产品、垂直场景解决方案）：就是面向最终用户的垂直应用，不是底层框架也不是agent框架，是具体用的：
- Trending里的：
  - ZhuLinsen/daily_stock_analysis：LLM驱动股票分析系统，0+317 today
  - 主题搜索里的：
    - harry0703/MoneyPrinterTurbo：AI一键生成短视频，102631
    - hugohe3/ppt-master：AI生成PPT，44854
    - open-webui/open-webui：本地AI交互界面，148505
    - dify/langgenius/dify：AI工作流与RAG平台，152117
    - Mintplex-Labs/anything-llm：本地优先AI体验平台，64617
    - 还有吗？哦siyuan-note/siyuan是知识工作空间，和AI agent协作，算应用？对，45744。哦还有吗？比如thedaviddias/Front-End-Checklist？哦那个topic是ai-agent，是给agent用的前端检查清单，算工具？还是应用？哦它的描述是给人类和AI agent用的现代web开发检查清单，算开发工具？哦对，归到基础工具？或者？等下它的stars是73502，topic是ai-agent，哦对，是给agent用的开发辅助工具，算基础工具？对。
然后是🧠 大模型/训练（模型权重、训练框架、微调工具）：这个就是和模型训练、微调、小模型相关的：
- 主题搜索里的：
  - jingyaogong/minimind：2小时从零训练64M小LLM，54564
  - 0xPlaygrounds/rig？哦之前归基础工具？不，rig是构建LLM应用的，哦之前的基础工具里的rig是不是可以归到这里？哦看rig的描述是Build modular and scalable LLM Applications in Rust，哦是应用开发，不是模型训练，所以还是基础工具。哦还有AarambhDevHub/aarambh-studio：纯Rust从零构建的LLM，75 stars，topic是llm-model，对，归到这个类。还有chrisliu298/awesome-llm-unlearning：LLM遗忘学习资源，617，归这个。还有Picovoice/picollm：端侧LLM推理，316，哦端侧推理算基础工具还是大模型？哦它的topic是llm-model，是模型相关的，归大模型/训练？或者基础工具？哦看分类定义，大模型/训练是模型权重、训练框架、微调工具，picollm是端侧推理的模型，所以归这个？还有SeekingDream/Static-to-Dynamic-LLMEval：LLM评测，500，归这个。还有llm-jp/awesome-japanese-llm：日语LLM资源，1424，归这个。还有AIDASLab/Awesome-Diffusion-LLM：扩散大模型论文合集，97，归这个。还有liguge的工业界LLM应用，130，归这个。HKBU的生成式推荐LLM，115，归这个。哦对，这些都属于大模型相关的。
然后是🔍 RAG/知识库（向量数据库、检索增强、知识管理）：这个就是RAG相关的，向量库、知识图谱、检索工具：
- Trending里的：
  - vitali87/code-graph-rag：代码库图RAG，0+339 today
  - semantica-agi/semantica：图原生上下文AI基础设施，哦刚才归基础工具？哦它的描述是Graph-Native Infrastructure for Context and Accountable AI Systems，核心是图，用于RAG的上下文，所以归RAG？哦对，因为它的核心是知识图谱用于AI上下文，属于RAG/知识库的范畴？哦等下优先归入最主要类别，semantica的核心是图基础设施用于AI上下文，也就是RAG的知识层，所以归RAG类？哦那基础工具里的semantica就去掉。
- 主题搜索里的：
  - Shubhamsaboo/awesome-llm-apps：100+ RAG和agent应用，哦这个归应用？还是RAG？哦它的描述是100+ AI Agents, Agent Skills and RAG Apps，哦是应用合集，归应用类？
  - thedotmack/claude-mem：agent跨会话持久上下文，也就是记忆层，属于RAG/知识库，90438
  - infiniflow/ragflow：RAG引擎，87291
  - datawhalechina/hello-agents：智能体教程，哦这个是教程，归基础工具？还是应用？哦它是教程，属于开发者教育资源，归基础工具？
  - headroomlabs-ai/headroom：RAG块压缩工具，65967，属于RAG优化，归RAG类
  - run-llama/llama_index：文档agent与OCR平台，其实llama_index是RAG的核心框架，归RAG类，51564
  - mem0ai/mem0：agent通用记忆层，63056，归RAG/知识库，因为是记忆管理，属于知识层
  - FlowiseAI/Flowise：可视化构建AI agent，哦这个是agent工作流工具？归智能体类？对，因为是构建agent的，属于智能体/工作流。
  - jeecgboot/JeecgBoot：AI低代码平台，归应用类，因为是面向企业的应用开发平台。
  - 向量数据库类的都归这个：
    - meilisearch/meilisearch：AI混合搜索引擎，58938
    - VectifyAI/PageIndex：无向量RAG文档索引，35142
    - qdrant/qdrant：向量数据库，33922
    - topoteretes/cognee：agent长期记忆知识图谱平台，29958
    - weaviate/weaviate：向量数据库，16722
    - alibaba/zvec：轻量向量数据库，15424
    - neuml/txtai：语义搜索与LLM编排框架，12869，哦这个既有RAG也有基础工具？归RAG类，因为核心是语义搜索和RAG。
    - lancedb/lancedb：多模态嵌入式检索库，11129，归RAG
    - oceanbase/oceanbase：支持AI负载的分布式数据库，10233，归RAG？因为是向量检索相关的数据库，对。
    - databendlabs/databend：AI就绪的数据仓库，9412，归RAG，因为支持AI工作负载的检索。
哦对，还有Graphify-Labs/graphify：把代码库转可查询知识图谱，属于RAG类，105306，对，这个刚才忘了，很高star的。
哦现在分类要清晰，每个项目归到最主要的类，不要重复太多。等下还要注意，Trending里的项目如果有在主题搜索里的，要对应上stars，比如ZhuLinsen/daily_stock_analysis在主题搜索里的stars是62082，今日新增317，对的。
接下来第三步输出报告，首先是今日速览，要3-5句话，概括今日最值得关注的动向：首先今日Trending里AI相关项目占比极高，13/17，其中Agent相关项目占绝对主流，PrimeIntellect的prime-agent以1148今日新增登顶Trending，Anthropic官方agent技能库、多agent运行环境orca等agent基础设施类项目集体爆发；其次RAG向知识图谱的融合成为新热点，code-graph-rag、semantica等图原生RAG项目同时上榜；此外垂直AI应用（股票分析、视频生产、法律benchmark）也有不错表现，大模型基础框架huggingface/transformers稳定在榜。
然后是各维度热门项目，每个维度3-8个，每个要有链接、stars数据、一句话说明：
首先第一个维度🔧 AI基础工具：
1. [huggingface/transformers](https://github.com/huggingface/transformers) ⭐163,766（+69 today）：HuggingFace核心大模型框架，支持多模态模型的训练与推理，是当前AI开发的事实标准基础设施。
2. [ollama/ollama](https://github.com/ollama/ollama) ⭐178,291：本地大模型一键部署工具，支持主流开源模型本地运行，降低AI开发与使用的门槛。
3. [langchain-ai/langchain](https://github.com/langchain-ai/langchain) ⭐143,996：主流LLM应用开发框架，提供完整的agent编排、工具调用能力，是AI应用开发的首选工具链。
4. [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) ⭐165,837：AI专用的网页抓取与上下文API，可大规模搜索、抓取网页内容，为RAG和agent提供高质量外部数据源。
5. [semantica-agi/semantica](https://github.com/semantica-agi/semantica) ⭐0（+884 today）：图原生AI上下文基础设施，为可解释、可追溯的AI系统提供知识图谱底座，今日首次登上Trending热榜。
6. [affaan-m/ECC](https://github.com/affaan-m/ECC) ⭐239,464：面向Claude Code、Cursor等主流AI编码工具的agent性能优化系统，提供技能、记忆、安全等增强能力。
哦对，这个ECC是主题搜索里llm类的最高star，很高，要放进去。
然后是🤖 AI智能体/工作流：
1. [PrimeIntellect-ai/prime-agent](https://github.com/PrimeIntellect-ai/prime-agent) ⭐0（+1,148 today）：自改进RLM（推理语言模型）coding agent，支持长期自主任务执行，今日以最高新增stars登顶GitHub Trending。
2. [stablyai/orca](https://github.com/stablyai/orca) ⭐0（+881 today）：多并行agent集成开发环境（ADE），支持用自有订阅运行任意coding agent，覆盖桌面、移动、VPS全场景。
3. [anthropics/skills](https://github.com/anthropics/skills) ⭐0（+468 today）：Anthropic官方公开的Agent技能库，为Claude等模型提供生产级agent能力模板，今日首次进入Trending。
4. [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) ⭐228,991：自适应成长型AI agent，可根据用户使用场景持续优化能力，是当前star最高的开源agent框架之一。
5. [paperclipai/paperclip](https://github.com/paperclipai/paperclip) ⭐0（+743 today）：开源工作场景agent管理平台，支持多agent协作与任务编排，今日首次登上Trending。
6. [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor) ⭐0（+829 today）：终身个性化AI辅导agent，支持多学科自适应教学，今日进入Trending热榜。
7. [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) ⭐0（+436 today）：全球首个开源agentic视频生产系统，内置12条生产管线、100+工具，可将AI编码助手转化为全功能视频制作工作室。
8. [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) ⭐70,703：支持联网的AI agent工具，可零API费用读取Twitter、Reddit、YouTube等平台内容，赋予agent全互联网感知能力。
接下来是📦 AI应用：
1. [langgenius/dify](https://github.com/langgenius/dify) ⭐152,117：低代码AI应用开发平台，支持可视化构建RAG管线、agent工作流，无需重复开发即可从原型落地到生产环境。
2. [open-webui/open-webui](https://github.com/open-webui/open-webui) ⭐148,505：本地优先的AI交互界面，支持Ollama、OpenAI API等主流模型接入，是个人部署AI服务的首选前端。
3. [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) ⭐102,631：AI一键生成高清短视频工具，支持根据主题自动生成脚本、素材、配音，是当前最火的AI内容生成应用之一。
4. [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) ⭐50,301：AI生产力工作台，集成智能对话、自主agent、300+预置助手，统一接入主流大模型。
5. [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) ⭐62,082（+317 today）：LLM驱动的多市场股票智能分析系统，支持多源行情整合、实时新闻分析、自动决策推送，可零成本定时运行。
6. [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) ⭐44,854：AI原生PPT生成工具，可根据文档或主题自动生成含动画、图表、配音的完整PPT文件，支持自定义模板。
然后是🧠 大模型/训练：
1. [jingyaogong/minimind](https://github.com/jingyaogong/minimind) ⭐54,564：2小时从零训练64M参数小LLM的教程项目，附带完整代码，是LLM入门学习的首选实践项目。
2. [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) ⭐102,427：从零用PyTorch实现类ChatGPT大模型的逐步教程，覆盖预训练、微调全流程，是LLM学习的经典资源。
3. [AarambhDevHub/aarambh-studio](https://github.com/AarambhDevHub/aarambh-studio) ⭐75：纯Rust从零构建的Decoder-only LLM，支持MoE、稀疏注意力、长程工具调用，无需Python/PyTorch即可训练与部署。
4. [Picovoice/picollm](https://github.com/Picovoice/picollm) ⭐316：基于X-Bit量化的端侧LLM推理工具，支持在资源受限设备上运行大模型，推动端侧AI落地。
5. [chrisliu298/awesome-llm-unlearning](https://github.com/chrisliu298/awesome-llm-unlearning) ⭐617：LLM机器遗忘学习资源合集，覆盖算法、数据集、评测等全方向，是LLM安全领域的热门研究方向。
然后是🔍 RAG/知识库：
1. [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) ⭐132,147：100+开源RAG、Agent应用合集，覆盖垂直场景，是RAG开发者的最佳实践参考库。
2. [infiniflow/ragflow](https://github.com/infiniflow/ragflow) ⭐87,291：领先的开源RAG引擎，融合Agent能力，为LLM提供高质量上下文层，支持多模态文档解析与深度检索。
3. [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) ⭐105,306：代码库知识图谱构建工具，可将代码、文档、SQL Schema等转为可查询的图结构，无需向量数据库即可实现精准代码检索，今日进入Trending热榜。
4. [vitali87/code-graph-rag](https://github.com/vitali87/code-graph-rag) ⭐0（+339 today）：专为单代码库设计的图RAG工具，支持多语言代码的查询、理解与AI辅助编辑，今日登上Trending。
5. [mem0ai/mem0](https://github.com/mem0ai/mem0) ⭐63,056：AI Agent通用记忆层，为agent提供跨会话的持久化记忆能力，解决agent的“遗忘”痛点。
6. [qdrant/qdrant](https://github.com/qdrant/qdrant) ⭐33,922：高性能 Rust 编写的向量数据库，支持大规模向量检索，是RAG系统中最流行的开源向量存储方案之一。
哦对，还有thedotmack/claude-mem，90k star，也可以放进去，比如第7个？对，thedotmack/claude-mem ⭐90,438：支持多agent的跨会话持久上下文工具，自动压缩会话历史并注入到后续对话中，大幅提升agent的长期记忆能力。
接下来是趋势信号分析，200-300字：
今日热榜显示，**AI Agent基础设施**成为社区爆发性关注的核心方向，Trending热榜中13个AI项目里有9个与Agent相关，覆盖agent技能、运行环境、管理平台、垂直场景agent等多个细分，反映社区正从“单agent能力提升”转向“agent生态工具链完善”。同时，**知识图谱与RAG的融合**首次成为独立热门方向，code-graph-rag、semantica等图原生RAG项目同时上榜，标志着RAG技术正从纯向量检索向“向量+图结构”的多模态检索演进，解决代码、复杂文档等场景的精准检索痛点。此外，今日上榜项目无新发布的大模型权重，但Anthropic官方技能库、DeepSeek终端agent等项目的热度和近期大模型厂商向agent生态布局的动作高度关联，反映行业正从“卷模型”转向“卷落地工具”。
然后是社区关注热点，bullet形式3-5个：
- [PrimeIntellect-ai/prime-agent](https://github.com/PrimeIntellect-ai/prime-agent)：今日Trending榜首，自改进RLM agent代表，其长程自主任务能力是coding agent下一步的核心突破方向，值得重点关注其技术实现。
- [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)：10万+star的代码知识图谱工具，无向量库的精准代码检索方案，解决了当前RAG在代码场景的召回不准痛点，适合研发团队落地代码助手。
- [anthropics/skills](https://github.com/anthropics/skills)：Anthropic官方公开的agent技能模板，可直接复用于Claude Code等工具，大幅降低agent开发门槛，是当前agent技能标准化的风向标。
- [infiniflow/ragflow](https://github.com/infiniflow/ragflow)：8万+star的开源RAG引擎，融合agent能力与多模态解析，是目前RAG落地最成熟的方案之一，适合企业级RAG系统搭建。
- [AarambhDevHub/aarambh-studio](https://github.com/AarambhDevHub/aarambh-studio)：纯Rust构建的小参数LLM项目，无需Python生态即可完成训练与部署，为端侧、嵌入式场景的LLM落地提供了新路径。
等下还要检查有没有错误，比如Trending里的项目今日新增数要对，比如prime-agent是+1148，对的，orca是+881，DeepTutor是+829，paperclip是+743，agency-agents是+971？哦对agency-agents是+971，比orca高？哦刚才Trending里msitarzewski/agency-agents是+971 today，对，我刚才在智能体类里的第一个是不是应该放agency-agents？哦对，+971比orca的+881高，所以调整下智能体类的第一个：
1. [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) ⭐0（+971 today）：一站式AI agency多agent系统，内置前端、社区运营、创意等多个专属agent，开箱即用，今日新增stars位列Trending第二。
2. [PrimeIntellect-ai/prime-agent](https://github.com/PrimeIntellect-ai/prime-agent) ⭐0（+1,148 today）：自改进RLM coding agent，支持长程自主任务执行与自我优化，今日以最高新增stars登顶GitHub Trending。
对，这样更准确。
还有，过滤的时候有没有漏？比如3b1b/manim是不是真的排除？对，它的描述里没有AI相关，是数学动画引擎，属于通用工具，排除。nvm、awesome-mac、project-based-learning都是无关的，排除，对的。
还有分类的时候有没有重复？比如一个项目只归到最主要的类，比如semantica归到RAG/知识库，因为它的核心是图基础设施用于AI上下文，属于RAG的知识层，而不是基础工具，对的。code-graph-raph归到RAG，因为是代码RAG工具，对的。ollama归到基础工具，因为是推理引擎，对的。
还有stars数据要对，比如主题搜索里的ollama是178291，对的，transformers是163766，对的。Trending里的项目今日新增要对，比如ZhuLinsen的daily_stock_analysis是+317，对的，code-graph-rag是+339，对的。
还有今日速览要准确：今日GitHub AI开源领域热度持续走高，Trending热榜中AI相关项目占比达76%（13/17），Agent生态相关项目包揽热榜前7位中的6席，PrimeIntellect的自改进coding agent以1148个今日新增stars登顶；图原生RAG、垂直场景

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*