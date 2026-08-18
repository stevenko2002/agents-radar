# AI 开源趋势日报 2026-08-19

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-18 22:16 UTC

---

用户现在需要我根据给的2026-08-19的GitHub AI相关数据做《AI开源趋势日报》，首先得严格按照三个步骤来：先过滤，再分类，最后输出报告。
首先第一步过滤，先看Trending榜里的13个，要排除和AI无关的。Trending里的basecamp/omarchy是Linux系统，agalwood/Motrix是下载工具，NawfalMotii79/PLFM_RADAR是雷达系统，这三个直接排除。剩下的都是AI相关的。然后AI主题搜索里的80个，都是带AI相关topic的，不过要确认有没有跑题的？哦比如那个thedaviddias/Front-End-Checklist是给前端和AI agent用的清单？算不算AI相关？哦对，是给AI agent用的，不过可能属于基础工具？不过先记着，后面分类。
然后第二步分类，分五个维度：🔧AI基础工具、🤖AI智能体/工作流、📦AI应用、🧠大模型/训练、🔍RAG/知识库。每个项目归最主要的类，可多类但优先主要。
首先先处理Trending里的有效项目：
1. harry0703/MoneyPrinterTurbo：Python，今日+2306，总108430，这个是AI生成短视频的应用，归📦AI应用。
2. chaitanyagiri/munder-difflin：TypeScript，+256，local multi-agent harness，多智能体框架，归🤖AI智能体/工作流。
3. akitaonrails/ai-memory：Rust，+730，agent长期记忆，跨厂商handoff，属于🤖？还是🔧？哦是给agent做记忆的工具，可能归🤖？或者看，哦还有volcengine/OpenViking，是agent的记忆、RAG、技能统一，也是🤖？然后mukul975/Anthropic-Cybersecurity-Skills：Python，+726，817个网络安全技能给AI agent，跨平台，这个属于🤖的智能体技能？或者📦应用？哦是垂直场景的agent技能，算📦？或者🤖？再看jundot/omlx：Python，+366，Apple Silicon的LLM推理服务器，这个是🔧AI基础工具里的推理引擎。bojieli/ai-agent-book：Python，+556，AI Agent的教程+代码，属于🔧基础工具？或者教育类？哦归🔧吧，是Agent开发的指导工具。genlayerlabs/genlayer-project-boilerplate：TypeScript，+543，genlayer的项目模板，genlayer是AI agent的平台？哦对，是智能体开发的模板，归🤖？然后OpenCut-app/OpenCut：TypeScript，+288，开源剪映替代，用AI的？哦对，是AI视频编辑应用，归📦AI应用。哦对，Trending里的public-apis/public-apis是API列表，算不算AI相关？哦里面有AI相关的API，但本身是通用API列表？哦用户说要排除通用工具，这个public-apis是通用的，所以Trending里排除？对，因为它是通用API列表，不是专门AI的，所以过滤掉。
然后是AI主题搜索里的项目，按topic分类：
首先topic:ai-agent的项目：
- NousResearch/hermes-agent：Python，总232515，没有今日新增？哦看数据里没写today的，哦对，Trending是今日新增，主题搜索的是7天活跃的，所以total stars有，today的如果没有就不写？哦看数据里的主题搜索的stars都是总量，没有today的，因为主题搜索是7天活跃的，不是今日热榜的。
然后shareAI-lab/learn-claude-code：Python，74583，nano claude code的agent harness，归🤖。
thedaviddias/Front-End-Checklist：MDX，73562，给人类和AI agent用的前端清单，归🔧基础工具？因为是开发辅助的。
Panniantong/Agent-Reach：Python，72797，给agent加互联网读取能力的CLI，归🤖。
santifer/career-ops：JavaScript，65326，AI求职的agent，归📦AI应用（垂直场景）。
ZhuLinsen/daily_stock_analysis：Python，63293，LLM驱动的股票分析，归📦AI应用。
CherryHQ/cherry-studio：TypeScript，50731，AI生产力工作室，带智能体，归🤖？或者📦？哦是智能体平台，归🤖吧。
hugohe3/ppt-master：Python，47758，AI生成PPT的应用，归📦AI应用。
HKUDS/nanobot：Python，47147，轻量自托管AI agent框架，归🤖。
zhayujie/CowAgent：Python，46549，开源AI助手+agent harness，归🤖。
siyuan-note/siyuan：TypeScript，45877，自托管知识工作空间，人机协作，归🔍RAG/知识库？因为是知识管理，带AI agent。
Hmbown/CodeWhale：Rust，40831，开源agent harness，归🤖。
bojieli/ai-agent-book：刚才Trending里有，这里也有，归🔧基础工具（Agent开发教程）。
CopilotKit/CopilotKit：TypeScript，36829，Agent的前端栈，归🔧基础工具？因为是开发框架。
esengine/DeepSeek-Reasonix：Go，34778，DeepSeek的终端AI编码agent，归🤖。
然后topic:llm的项目：
affaan-m/ECC：JavaScript，240947，agent harness性能优化系统，归🤖。
Significant-Gravitas/AutoGPT：Python，186672，AutoGPT平台，归🤖。
ollama/ollama：Go，178900，本地运行大模型工具，归🔧基础工具（推理引擎）。
firecrawl/firecrawl：TypeScript，169110，网页抓取给AI用的上下文API，归🔍RAG/知识库？因为是给RAG提供网页数据的。
f/prompts.chat：HTML，167453，ChatGPT提示词库，归🔧基础工具（开发辅助）。
huggingface/transformers：Python，164225，模型框架，归🧠大模型/训练。
langgenius/dify：TypeScript，152838，Agent工作流+RAG平台，归🤖？或者🔍？哦主要是工作流和RAG，归🤖吧，或者可以归两个？优先🤖，因为是Agent工作流平台。
open-webui/open-webui：Python，149152，本地AI界面，归🔧基础工具（开发工具）。
langchain-ai/langchain：Python，144496，Agent工程平台，归🤖。
browser-use/browser-use：Python，109647，让AI agent操作网页的工具，归🤖。
Graphify-Labs/graphify：Python，107906，代码库转知识图谱给agent用，归🔍RAG/知识库。
JuliusBrussee/caveman：Go，98981，减少agent token消耗的技能，归🤖。
vllm-project/vllm：Python，89375，LLM推理引擎，归🔧基础工具。
然后topic:ml的项目：
tensorflow/tensorflow：C++，197045，ML框架，归🧠大模型/训练。
pytorch/pytorch：Python，102468，ML框架，归🧠。
microsoft/ML-For-Beginners：Jupyter，89491，ML入门教程，归🔧基础工具（教育类）。
netdata/netdata：Go，80220，AI可观测性工具，归🔧基础工具（MLOps类）。
tesseract-ocr/tesseract：C++，75984，OCR引擎，归🧠？或者📦应用？哦是基础模型工具，归🧠吧，或者🔧？哦是OCR的基础工具，归🔧？或者看，tesseract是传统的OCR，也算ML相关的，归🧠大模型/训练？或者归🔧？可能归🔧更合适？因为是基础工具。然后scikit-learn/scikit-learn：Python，66971，ML库，归🧠。keras-team/keras：Python，64239，深度学习框架，归🧠。ultralytics/ultralytics：Python，60737，YOLO目标检测，归🧠（CV模型）。roboflow/supervision：Python，49506，CV工具库，归🔧基础工具。JuliaLang/julia：Python？不，是Julia，49010，科学计算语言，用于ML，归🔧基础工具。apache/airflow：Python，46522，工作流调度，ML用的话归🔧基础工具（MLOps）。streamlit/streamlit：Python，45565，数据应用开发工具，归🔧基础工具。paperless-ngx/paperless-ngx：Python，44379，文档管理，带AI索引，归🔍RAG/知识库。
然后topic:rag的项目：
Shubhamsaboo/awesome-llm-apps：Python，133123，LLM应用合集，归🔧基础工具（资源类）。
thedotmack/claude-mem：JavaScript，91150，agent持久记忆，归🔍RAG/知识库。
infiniflow/ragflow：Go，88767，RAG引擎，归🔍RAG/知识库。
datawhalechina/hello-agents：Python，73603，Agent教程，归🔧基础工具。
headroomlabs-ai/headroom：Python，66785，压缩agent输入token的工具，归🔧基础工具。
Mintplex-Labs/anything-llm：JavaScript，64889，本地AI agent体验平台，归🤖？或者🔍？哦是RAG+agent的平台，归🔍吧？因为是本地RAG知识库。
mem0ai/mem0：Python，63541，AI agent通用记忆层，归🔍RAG/知识库。
FlowiseAI/Flowise：TypeScript，55378，可视化构建AI Agent，归🤖。
run-llama/llama_index：Python，51732，文档Agent和OCR平台，归🔍RAG/知识库。
jeecgboot/JeecgBoot：Java，47416，AI低代码平台，带RAG和知识库，归📦AI应用（企业级低代码）。
milvus-io/milvus：Go，45679，向量数据库，归🔍RAG/知识库。
然后topic:vector-db的项目：
meilisearch/meilisearch：Rust，59007，混合搜索引擎，带AI能力，归🔍RAG/知识库。
VectifyAI/PageIndex：Python，35237，无向量RAG的文档索引，归🔍RAG/知识库。
qdrant/qdrant：Rust，34049，向量数据库，归🔍。
topoteretes/cognee：Python，30105，AI agent记忆平台，知识图谱引擎，归🔍。
NirDiamant/RAG_Techniques：Jupyter，29099，RAG技术教程，归🔧基础工具。
weaviate/weaviate：Go，16741，向量数据库，归🔍。
alibaba/zvec：C++，15461，轻量向量数据库，归🔍。
langchain4j/langchain4j：Java，12898，JVM的LLM开发库，归🔧基础工具。
neuml/txtai：Python，12892，语义搜索+LLM编排框架，归🔍RAG/知识库。
lancedb/lancedb：Rust，11184，嵌入式多模态检索库，归🔍。
oceanbase/oceanbase：C++，10244，分布式数据库，支持AI负载，归🔍。
databendlabs/databend：Rust，9414，数据仓库，支持AI，归🔍。
然后topic:llm-model的项目：
0xPlaygrounds/rig：Rust，8313，Rust构建LLM应用的框架，归🔧基础工具。
open-compass/opencompass：Python，7314，LLM评测平台，归🧠大模型/训练（评测属于训练/模型迭代的一部分）。
Eigenwise/atomic-agents：Python，6185，原子化AI agent构建框架，归🤖。
skyzh/tiny-llm：Python，4501，Apple Silicon的LLM推理学习项目，归🔧基础工具（推理引擎学习）。
samchon/nestia：TypeScript，2171，NestJS的AI聊天机器人开发工具，归🔧基础工具。
zchoi/Awesome-Embodied-Robotics-and-Agent：⭐1853，具身智能+LLM资源列表，归🔧基础工具（资源）。
zi-yue-1129/DATAGEN：Python，1790，多智能体科研助手，归📦AI应用（科研场景）。
apache/casbin-gateway：Go，566，AI&MCP安全网关，归🔧基础工具（安全类）。
Mirrowel/LLM-API-Key-Proxy：Python，542，LLM统一网关，归🔧基础工具。
RiccardoBiosas/awesome-MLSecOps：Astro，452，ML安全资源列表，归🔧基础工具。
kennethleungty/Finance-LLMs：⭐137，金融LLM用例合集，归📦AI应用（金融场景）。
testtimescaling/testtimescaling.github.io：HTML，113，测试时 scaling 综述，归🧠大模型/训练（研究方向）。
AarambhDevHub/aarambh-studio：Rust，78，纯Rust构建的LLM，归🧠大模型/训练。
Baizhige/EEGUnity：Python，76，EEG数据集处理工具，归🔧基础工具（科研工具）。
dg/ai-access：PHP，59，PHP的AI模型访问库，归🔧基础工具。
哦对了，过滤的时候，Trending里的非AI的已经排除了：basecamp/omarchy（Linux）、agalwood/Motrix（下载工具）、NawfalMotii79/PLFM_RADAR（雷达系统）、public-apis/public-apis（通用API列表），这四个去掉，剩下Trending的9个是AI相关的。
接下来第三步输出报告，首先第一部分今日速览，3-5句话，概括今天的动向：比如今天AI开源领域Agent生态爆发式增长，多款Agent框架、记忆工具、垂直场景应用登榜，同时视频生成、RAG基础设施、端侧推理工具也备受关注，另外还有国内团队推出的AI Agent中文教程、网络安全Agent技能集等本土化项目获得高星，整体趋势是Agent从概念验证走向工程化落地，配套的记忆、RAG、安全工具链逐步完善。
然后第二部分各维度热门项目，每个维度列3-8个，要包含项目名（带链接）、stars数据（总量+今日新增，主题搜索的没有今日新增的就只写总量）、一句话说明。
首先🔧AI基础工具（框架、SDK、推理引擎、开发工具、CLI）：
1. [ollama/ollama](https://github.com/ollama/ollama) ⭐178,900（总量）：本地大模型一键部署工具，支持Kimi、DeepSeek、Qwen等主流模型，是端侧AI开发的首选基础设施，今日虽未登 Trending 但长期稳居LLM工具类头部。
2. [vllm-project/vllm](https://github.com/vllm-project/vllm) ⭐89,375（总量）：高吞吐量LLM推理引擎，支持连续批处理和内存优化，是当前大模型生产部署的主流选择，今日无 Trending 新增但社区活跃度极高。
3. [jundot/omlx](https://github.com/jundot/omlx) ⭐0（今日新增+366）：专为Apple Silicon优化的LLM推理服务器，支持连续批处理和SSD缓存，可通过macOS菜单栏管理，填补了苹果生态端侧推理工具的空白，今日登 Trending 榜单。
4. [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) ⭐39,068（总量，今日 Trending +556）：李博杰开源的《深入理解AI Agent》配套仓库，包含全书正文、PDF和按章代码，是国内少有的系统化Agent工程实践教程，今日登 Trending 榜单。
5. [f/prompts.chat](https://github.com/f/prompts.chat) ⭐167,453（总量）：全球最大的开源ChatGPT提示词合集，支持自托管，是LLM应用开发的基础资源库，长期占据提示词类项目头部。
6. [open-webui/open-webui](https://github.com/open-webui/open-webui) ⭐149,152（总量）：开源自托管AI交互界面，兼容Ollama、OpenAI API等所有主流大模型，是本地AI开发的标准前端工具，今日无 Trending 新增但社区热度极高。
哦对，这个维度可以列6个，够的。
然后是🤖AI智能体/工作流（Agent框架、自动化、多智能体）：
1. [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) ⭐232,515（总量）：NousResearch推出的可成长AI Agent，支持自主学习和能力扩展，是当前Star量最高的Agent框架项目，7日活跃度居AI Agent类榜首。
2. [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) ⭐74,583（总量）：从零构建的类Claude Code轻量Agent Harness，仅用Bash实现核心功能，是学习Agent原理的入门级项目，7日活跃度极高。
3. [akitaonrails/ai-memory](https://github.com/akitaonrails/ai-memory) ⭐0（今日新增+730）：专为Agent编码CLI设计的长期记忆解决方案，支持不同Agent厂商之间的上下文传递，解决了Agent跨会话记忆的痛点，今日登 Trending 榜单。
4. [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) ⭐0（今日新增+726）：包含817个结构化网络安全技能的Agent技能集，映射MITRE ATT&CK等6大安全框架，兼容Claude Code、Copilot等20+平台，今日登 Trending 榜单。
5. [chaitanyagiri/munder-difflin](https://github.com/chaitanyagiri/munder-difflin) ⭐0（今日新增+256）：本地多Agent测试框架，支持Agent能力测试和流程编排，今日登 Trending 榜单。
6. [HKUDS/nanobot](https://github.com/HKUDS/nanobot) ⭐47,147（总量）：超轻量自托管个人AI Agent框架，内置WebUI、工具、记忆、MCP和多智能体工作流，支持一键安装，7日活跃度极高。
7. [langchain-ai/langchain](https://github.com/langchain-ai/langchain) ⭐144,496（总量）：Agent工程平台标杆，提供从Agent构建、工具调用到工作流编排的全链路能力，长期占据Agent框架类头部。
哦这个维度列7个，够的。
然后是📦AI应用（具体应用产品、垂直场景解决方案）：
1. [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) ⭐108,430（总量，今日新增+2306）：AI一键生成高清短视频工具，支持根据主题/关键词自动完成脚本、配音、剪辑全流程，是当前最热门的AI视频生成开源项目，今日登 Trending 榜单且新增Star数居首。
2. [OpenCut-app/OpenCut](https://github.com/OpenCut-app/OpenCut) ⭐0（今日新增+288）：开源剪映替代品，集成AI剪辑能力，支持跨平台使用，填补了开源AI视频编辑工具的空白，今日登 Trending 榜单。
3. [santifer/career-ops](https://github.com/santifer/career-ops) ⭐65,326（总量）：开源AI求职Agent，可自动扫描招聘网站、评估职位、定制简历、跟踪申请，完全本地运行，是AI垂直场景落地的典型代表，7日活跃度极高。
4. [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) ⭐63,293（总量）：LLM驱动的多市场股票分析系统，支持多源行情整合、实时新闻分析和自动推送，是AI金融场景的热门应用，7日活跃度极高。
5. [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) ⭐47,758（总量）：AI自动生成原生PPT工具，支持根据主题生成带动画、图表的演示文稿，可自定义模板，是AI办公场景的热门应用，7日活跃度极高。
6. [kennethleungty/Finance-LLMs](https://github.com/kennethleungty/Finance-LLMs) ⭐137（总量）：金融领域LLM与AI Agent用例合集，整理了真实落地案例，是AI金融场景的参考资源库。
哦这个维度列6个，够的。
然后是🧠大模型/训练（模型权重、训练框架、微调工具、评测）：
1. [huggingface/transformers](https://github.com/huggingface/transformers) ⭐164,225（总量）：Hugging Face推出的多模态模型定义框架，支持文本、视觉、音频等各类SOTA模型的训练和推理，是当前最主流的开源大模型开发框架，长期居ML类项目头部。
2. [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) ⭐197,045（总量）：Google推出的开源机器学习框架，支持从研究到生产的全流程ML开发，是工业级ML训练的基础工具，长期居ML类项目头部。
3. [pytorch/pytorch](https://github.com/pytorch/pytorch) ⭐102,468（总量）：Meta推出的动态神经网络框架，支持GPU加速，是学术界ML训练的主流选择，长期居ML类项目头部。
4. [vllm-project/vllm](https://github.com/vllm-project/vllm) 哦刚才归到基础工具了？哦vllm是推理引擎，也可以归到这里？或者不用，这里可以加open-compass/opencompass：https://github.com/open-compass/opencompass ⭐7,314（总量）：开源LLM评测平台，支持100+数据集和主流大模型评测，是模型迭代的核心工具，7日活跃度较高。
5. [AarambhDevHub/aarambh-studio](https://github.com/AarambhDevHub/aarambh-studio) ⭐78（总量）：纯Rust从零构建的Decoder-only LLM，支持DeltaNet、MoE和工具调用，是轻量级大模型训练的新兴探索项目，7日活跃。
哦这个维度列5个，够的。
然后是🔍RAG/知识库（向量数据库、检索增强、知识管理）：
1. [infiniflow/ragflow](https://github.com/infiniflow/ragflow) ⭐88,767（总量）：领先的开源RAG引擎，融合了RAG与Agent能力，为LLM提供superior的上下文层，是当前RAG基础设施的热门选择，7日活跃度极高。
2. [milvus-io/milvus](https://github.com/milvus-io/milvus) ⭐45,679（总量）：云原生高性能向量数据库，支持大规模向量检索，是AI知识库的核心存储组件，长期居向量数据库类头部。
3. [volcengine/OpenViking](https://github.com/volcengine/OpenViking) ⭐0（今日新增+298）：字节跳动开源的自我进化上下文数据库，统一了Agent记忆、知识RAG和技能管理，今日登 Trending 榜单。
4. [mem0ai/mem0](https://github.com/mem0ai/mem0) ⭐63,541（总量）：AI Agent通用记忆层，支持跨会话的持久化记忆，是Agent记忆方案的热门选择，7日活跃度极高。
5. [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) ⭐91,150（总量）：支持所有主流Agent的跨会话持久记忆工具，可压缩历史上下文并注入未来会话，今日虽未登 Trending 但7日活跃度极高。
6. [qdrant/qdrant](https://github.com/qdrant/qdrant) ⭐34,049（总量）：高性能大规模向量搜索引擎，支持云原生部署，是向量数据库赛道的热门项目，7日活跃度较高。
7. [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) ⭐64,889（总量）：本地优先的AI Agent体验平台，内置RAG能力，支持私有知识库管理，是个人用户搭建AI知识库的热门选择，7日活跃度极高。
哦这个维度列7个，够的。
然后第三部分趋势信号分析，200-300字：今日热榜显示AI Agent生态正迎来爆发式增长，13个Trending AI项目中7个与Agent直接相关，涵盖Agent框架、记忆、技能、工作流全链路，说明行业正从“大模型能力竞赛”转向“Agent工程化落地”阶段。同时，端侧AI工具（如Apple Silicon专属推理服务器omlx）、垂直场景应用（AI视频生成、AI求职、AI金融分析）的关注度显著提升，反映出AI开 parenthesis 正从通用工具向场景化、轻量化方向发展。此外，国内团队推出的Agent中文教程、垂直场景应用、本土化工具链（如OpenViking、ai-agent-book）首次集中登榜，说明国内AI开源生态的贡献度正在快速提升，与近期国产大模型（如DeepSeek、Kimi）能力提升、行业落地加速的趋势高度关联。
然后第四部分社区关注热点，bullet形式3-5个：
1. 🔥 [MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)：今日新增Star数最高的AI项目，AI视频生成全链路工具，适合内容创作者快速落地AI视频生产，代表了AI生成内容（AIGC）从工具向生产级产品转化的趋势。
2. 🔥 [ai-memory](https://github.com/akitaonrails/ai-memory) + [OpenViking](https://github.com/volcengine/OpenViking)：两款Agent记忆/上下文工具同日登榜，解决了Agent跨会话、跨厂商的上下文传递痛点，是Agent落地的核心基础设施，值得开发者重点关注。
3. 🔥 [Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills)：首个大规模垂直领域Agent技能集，兼容20+Agent平台，说明Agent生态正从通用能力向垂直领域细分渗透，安全、金融等专业领域的Agent落地正在加速。
4. 🔥 [omlx](https://github.com/jundot/omlx)：专为Apple Silicon优化的LLM推理工具，填补了苹果生态端侧AI推理的空白，随着M系列芯片的普及，端侧AI开发的工具链需求正在爆发。
哦对，还要注意所有的项目都要带链接，数据要准确，比如Trending里的今日新增要对应上，比如MoneyPrinterTurbo是+2306，对的，ai-memory是+730，对的，OpenViking是+298，对的，Anthropic那个是+726，对的，omlx是+366，对的，ai-agent-book是+556，对的，OpenCut是+288，对的，munder-difflin是+256，对的。
还要注意过滤的部分，Trending里排除的那四个要说明吗？哦在第一步过滤的时候可以在报告里提一句

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*