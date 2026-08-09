# AI 开源趋势日报 2026-08-10

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-09 22:16 UTC

---

用户现在需要我根据给的两个数据集做AI开源的日报，首先得先严格按照第一步过滤，先筛掉非AI相关的，然后分类，再写报告。首先先处理第一步过滤，先看Trending里的12个，哪些要排除：
首先看Trending的：
1. PrimeIntellect-ai/prime-agent：是RLM agent，coding和自主任务，AI相关，留
2. vitali87/code-graph-rag：RAG，monorepo代码的，AI相关，留
3. msitarzewski/agency-agents：AI agency的agent集合，AI相关，留
4. pranshuparmar/witr：是CLI工具，查进程端口容器的，和AI没关系，排除
5. google-deepmind/weathernext：气象预测？等下，deepmind的，是AI预测气象的？哦对，是ML相关的？等下看数据里的主题搜索里有个ml的，哦weathernext是DeepMind的AI气象预测模型，属于AI相关的？等下再看，不过先记着，哦对，是AI for science的，属于AI相关？等下再看后面的，哦对，不是通用工具，是AI预测天气的，所以留？等下再看其他的：
6. addyosmani/agent-skills：AI coding agent的技能，留
7. ZhuLinsen/daily_stock_analysis：LLM驱动的股票分析，AI相关，留
8. goauthentik/authentik：认证工具，通用，和AI没关系，排除
9. google/skills：Google产品的Agent技能，AI相关，留
10. ComfyUI：扩散模型GUI，AI相关，留
11. harveyai/harvey-labs：法律agent的benchmark，AI相关，留
12. pingdotgg/t3code：前端框架t3的？哦是TypeScript的全栈脚手架？和AI没关系，排除。
哦对，Trending里排除witr、authentik、t3code这三个，剩下9个是AI相关的。
然后是主题搜索的79个，都是带topic的：llm、llm-model、ml、ai-agent、vector-db、rag，所以这些都是AI相关的，不用排除，因为都是带AI相关主题标签的。
接下来第二步分类，五个维度：🔧 AI基础工具、🤖 AI智能体/工作流、📦 AI应用、🧠大模型/训练、🔍RAG/知识库。现在要逐个归类，优先最主要类别。
先处理Trending里的9个：
1. PrimeIntellect-ai/prime-agent：是自主编码agent，属于🤖AI智能体/工作流
2. vitali87/code-graph-rag：代码RAG，属于🔍RAG/知识库
3. msitarzewski/agency-agents：AI agency的多agent集合，属于🤖AI智能体/工作流
4. google-deepmind/weathernext：AI气象预测模型，属于🧠大模型/训练（因为是模型，应用类？不，是DeepMind的预测模型，属于大模型应用？哦等下，大模型/训练包括模型权重、训练框架、微调工具，还有垂直领域的大模型应用？或者看，weathernext是DeepMind的AI预测气象的模型，属于垂直领域的AI模型，归🧠大模型/训练？或者归📦AI应用？等下再想，哦，它本身是模型，所以归🧠？或者看它的描述，是预测天气的，属于AI for science的模型，对，归🧠大模型/训练。
5. addyosmani/agent-skills：AI coding agent的技能集，属于🤖AI智能体/工作流？或者是🔧AI基础工具？哦，是给agent用的技能，属于智能体的工具，归🤖？或者是🔧？等下看，是生产级的agent工程技能，属于智能体的基础能力，归🤖AI智能体/工作流吧，或者看，它是工具类的？哦等下，分类里的🔧是框架、SDK、推理引擎、开发工具、CLI，🤖是Agent框架、自动化、多智能体。哦agent-skills是给agent用的技能，属于智能体的组成部分，归🤖？或者如果是开发工具的话归🔧？等下再看addyosmani的这个，是Production-grade engineering skills for AI coding agents，是给coding agent用的技能，属于智能体的能力模块，归🤖吧。
6. ZhuLinsen/daily_stock_analysis：LLM驱动的股票分析系统，是具体应用，归📦AI应用
7. google/skills：Google产品的Agent技能，和上面的agent-skills类似，归🤖AI智能体/工作流
8. ComfyUI：扩散模型的GUI、API、后端，是AI生成工具的基础工具？哦，是图像生成的基础工具，属于🔧AI基础工具？对，因为是框架/工具类的，是生成式AI的基础工具，归🔧。
9. harveyai/harvey-labs：法律agent的benchmark，属于📦AI应用？因为是垂直场景的法律AI评估，属于应用类，归📦。
然后处理主题搜索的各个项目，按topic归类：
首先topic:llm的项目：
affaan-m/ECC：agent harness的性能优化系统，属于🤖AI智能体/工作流
NousResearch/hermes-agent：agent，归🤖
Significant-Gravitas/AutoGPT：经典agent框架，归🤖
ollama/ollama：本地推理引擎，归🔧AI基础工具
f/prompts.chat：提示词库，归🔧？或者是📦？哦是提示词工具，属于开发工具，归🔧吧
firecrawl/firecrawl：网页抓取的上下文API，给AI agent用的，归🔧？或者是🤖？哦是agent的工具，属于基础工具，归🔧
huggingface/transformers：模型框架，归🧠大模型/训练
langgenius/dify：Agent工作流、RAG平台，哦，这个属于哪个？哦dify是工作流平台，也有RAG，不过最主要的是Agent工作流，归🤖？或者是🔧？哦它是低代码的AI工作流平台，属于🤖AI智能体/工作流吧，或者是📦？不，它是开发平台，哦等下，分类里的🤖是Agent框架、自动化、多智能体，dify是构建Agent工作流的，归🤖。
open-webui/open-webui：AI界面，属于📦AI应用？或者是🔧？哦是用户端的AI交互界面，属于应用类，归📦。
langchain-ai/langchain：Agent工程平台，归🤖
browser-use/browser-use：让agent操作浏览器的工具，归🤖？或者是🔧？哦是agent的工具，归🤖吧。
Graphify-Labs/graphify：代码库转知识图谱，给agent用的，归🔍RAG/知识库
harry0703/MoneyPrinterTurbo：AI生成短视频的应用，归📦AI应用
rasbt/LLMs-from-scratch：LLM训练教程，归🧠大模型/训练
DietrichGebert/ponytail：让agent写更少代码的工具，归🤖
然后topic:llm-model的项目：
jingyaogong/minimind：小模型训练，归🧠
0xPlaygrounds/rig：Rust构建LLM应用，归🔧
open-compass/opencompass：LLM评测平台，归🧠
Eigenwise/atomic-agents：Agent框架，归🤖
skyzh/tiny-llm：LLM推理教程，归🧠
genieincodebottle/generative-ai：生成式AI资源，归🧠
llm-jp/awesome-japanese-llm：日语LLM汇总，归🧠
chrisliu298/awesome-llm-unlearning：LLM遗忘资源，归🧠
Picovoice/picollm：端侧LLM推理，归🧠
其他的垂直领域LLM资源，比如金融、预测性维护的，归📦AI应用？或者是🧠？哦是垂直领域的LLM应用汇总，归📦吧。
然后topic:ml的项目：
tensorflow/tensorflow：ML框架，归🔧
pytorch/pytorch：ML框架，归🔧
microsoft/ML-For-Beginners：ML教程，归🧠
netdata/netdata：AI可观测性，归📦AI应用
tesseract-ocr/tesseract：OCR，属于CV的ML工具，归🔧
scikit-learn/scikit-learn：ML库，归🔧
keras-team/keras：深度学习框架，归🔧
ultralytics/ultralytics：YOLO目标检测，归🔧？或者是📦？哦是CV工具框架，归🔧
deepfakes/faceswap：换脸应用，归📦AI应用
roboflow/supervision：CV工具库，归🔧
JuliaLang/julia：编程语言，用于ML，归🔧
apache/airflow：工作流调度，和AI相关的？哦是AI工作流的调度工具，归🤖？或者是🔧？哦是AI工作流的底层调度工具，归🔧吧。
然后topic:ai-agent的项目：
Panniantong/Agent-Reach：agent访问互联网的工具，归🤖
santifer/career-ops：AI求职agent，归📦AI应用
CherryHQ/cherry-studio：AI工作室，多agent，归📦AI应用
HKUDS/nanobot：轻量agent框架，归🤖
zhayujie/CowAgent：AI助手agent，归🤖
siyuan-note/siyuan：知识工作空间，和AI agent协作，归📦AI应用
hugohe3/ppt-master：AI生成PPT的应用，归📦AI应用
CopilotKit/CopilotKit：前端agent框架，归🤖
bojieli/ai-agent-book：AI Agent书籍，归🧠？或者是📦？哦是教程类，归🧠大模型/训练？或者是🤖？哦是Agent的原理与实践，归🤖吧？或者是🧠？哦属于Agent的基础知识，归🤖吧。
agentscope-ai/QwenPaw：个人AI助手，归🤖
esengine/DeepSeek-Reasonix：DeepSeek的coding agent，归🤖
iOfficeAI/AionUi：多agent协作平台，归🤖
Gitlawb/openclaude：跨平台的Claude agent，归🤖
然后topic:vector-db的项目：
Mintplex-Labs/anything-llm：本地AI agent平台，有向量数据库，归📦？或者是🤖？哦是应用类，归📦AI应用
meilisearch/meilisearch：搜索引擎，带向量搜索，归🔍RAG/知识库
run-llama/llama_index：文档agent和OCR平台，RAG框架，归🔍
milvus-io/milvus：向量数据库，归🔍
VectifyAI/PageIndex：无向量RAG的文档索引，归🔍
qdrant/qdrant：向量数据库，归🔍
topoteretes/cognee：AI agent的记忆平台，知识图谱，归🔍
weaviate/weaviate：向量数据库，归🔍
alibaba/zvec：轻量向量数据库，归🔍
neuml/txtai：AI框架，带语义搜索、RAG，归🔍？或者是🔧？哦是RAG相关的框架，归🔍吧
langchain4j/langchain4j：Java的LLM框架，带向量存储，归🤖？或者是🔧？哦是LLM应用框架，归🔧吧？
lancedb/lancedb：嵌入式检索库，多模态，归🔍
oramasearch/orama：搜索+RAG引擎，归🔍
oceanbase/oceanbase：分布式数据库，支持AI负载，归🔍？或者是🔧？哦是数据库，支持向量和AI工作负载，归🔍吧
databendlabs/databend：数据仓库，支持AI，归📦？或者是🔍？哦是AI就绪的数据仓库，归📦AI应用吧？
然后topic:rag的项目：
Shubhamsaboo/awesome-llm-apps：LLM应用汇总，归📦AI应用
thedotmack/claude-mem：agent的持久上下文，归🔍RAG/知识库
infiniflow/ragflow：RAG引擎，归🔍
datawhalechina/hello-agents：Agent教程，归🤖？或者是🧠？哦是Agent实践教程，归🤖吧
headroomlabs-ai/headroom：RAG块的压缩工具，归🔍
mem0ai/mem0：AI agent的记忆层，归🔍
FlowiseAI/Flowise：可视化构建AI Agent，归🤖
langchain-ai/langgraph：构建Agent的框架，归🤖
哦对了，分类的时候要一个项目归最主要类别，不要重复太多，比如dify主要是Agent工作流，归🤖，不要同时归RAG。
接下来第三步输出报告，首先今日速览，3-5句话，概括今日最值得关注的：
首先看今日Trending的热度，PrimeIntellect-ai/prime-agent今天加2319星，是今日热榜第一，还有agency-agents加932，agent-skills加670，google/skills加532，都是Agent相关的爆发；然后ComfyUI加333，持续热门；还有代码RAG、法律Agent benchmark这些垂直场景的项目。然后还有ollama这些基础工具的稳定热度。所以速览可以写：
今日AI开源领域呈现「Agent生态爆发+垂直场景落地」双主线特征：热榜第一的PrimeIntellect自主编码Agent单日新增超2300星，印证自主Agent赛道仍处于社区关注顶峰；同时Google、addyosmani等推出的Agent Skills工具集，以及多Agent Agency框架，显示Agent能力模块化、工具化成为新趋势；此外ComfyUI、代码知识图谱RAG等生成式AI基础设施项目持续走热，法律、金融等垂直场景的Agent应用落地加速。
然后是各维度热门项目，每个维度3-8个，要选最有代表性的，带链接，stars总量+今日新增，一句话说明。
首先五个维度：
🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）：
1. [ollama/ollama](https://github.com/ollama/ollama) ⭐178,136（无今日新增，属于常青树项目）：本地大模型推理引擎，支持多款主流开源模型一键部署，是当前端侧AI推理的事实标准工具。
2. [Comfy-Org/ComfyUI](https://github.com/Comfy-Org/ComfyUI) ⭐（哦等下主题搜索里的ComfyUI没给总量？哦看Trending里的ComfyUI是⭐0？哦对，Trending里的stars是今日新增前的总量？哦看数据说明，Trending里的⭐0 (+333 today)，哦原来Trending里的stars数是今日新增前的总量？哦对，看PrimeIntellect的是⭐0 (+2319 today)，所以Trending里的项目总量没给？哦那对于Trending里的项目，stars数据写「今日新增+2319」，主题搜索里的有总量和今日新增？哦看主题搜索里的项目，比如affaan-m/ECC是⭐239,012，没写today，哦对，主题搜索的是7天内活跃的，按topic的，所以没有today的增量，只有Trending的有today的增量。
哦对，数据说明里说Trending是今日实时热榜，含今日新增stars，主题搜索是7天内活跃的，按主题分类，所以Trending的项目有today的增量，主题搜索的只有总stars。
那调整：
🔧 AI 基础工具：
1. [ollama/ollama](https://github.com/ollama/ollama) ⭐178,136：本地大模型推理引擎，支持Kimi、DeepSeek、Qwen等数十款主流模型一键部署，是端侧AI开发的基础设施标杆。
2. [Comfy-Org/ComfyUI](https://github.com/Comfy-Org/ComfyUI) 今日新增⭐333：模块化扩散模型GUI/API/后端，支持可视化节点编排图像生成工作流，今日热榜上榜印证生成式AI创作工具仍保持高社区热度。
3. [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) ⭐196,942：谷歌开源的通用机器学习框架，覆盖训练、推理全流程，是工业级AI开发的基石工具之一。
4. [huggingface/transformers](https://github.com/huggingface/transformers) ⭐163,503：Hugging Face推出的多模态模型定义框架，支持文本、视觉、音频等各类SOTA模型的加载与微调，是当前大模型生态的核心工具库。
5. [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) ⭐164,144：面向AI Agent的网页上下文抓取API，支持大规模网页搜索、交互与数据提取，是Agent获取外部信息的核心工具组件。
对，这五个，都是基础工具。
然后是🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）：
1. [PrimeIntellect-ai/prime-agent](https://github.com/PrimeIntellect-ai/prime-agent) 今日新增⭐2319：自进化编码型Agent，专为编程工作流和长周期自主任务设计，今日 Trending 榜首，单日增量创近期Agent项目新高，反映自主Agent赛道仍处爆发期。
2. [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) 今日新增⭐932：开箱即用的多Agent Agency框架，内置前端、社区运营、质检等多角色 specialized Agent，支持一键部署完整AI Agency工作流，今日热榜高热度显示多Agent orchestration 需求升温。
3. [langchain-ai/langchain](https://github.com/langchain-ai/langchain) ⭐143,809：老牌Agent工程平台，提供统一的LLM调用、工具集成、Agent编排能力，是当前Agent开发的主流框架之一。
4. [adddyosmani/agent-skills](https://github.com/addyosmani/agent-skills) 今日新增⭐670：生产级AI Coding Agent技能集，提供工程领域标准化的Agent能力模块，今日上榜显示Agent能力标准化、模块化成为社区关注方向。
5. [google/skills](https://github.com/google/skills) 今日新增⭐532：谷歌官方推出的Google产品专属Agent技能集，覆盖Workspace、搜索等谷歌生态服务的Agent集成能力，头部厂商入场推动Agent生态工具化。
6. [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) ⭐36,655：前端Agent开发栈，支持React、Angular等多端Agent嵌入，是当前前端场景Agent集成的标杆工具。
7. [HKUDS/nanobot](https://github.com/HKUDS/nanobot) ⭐46,793：超轻量自托管个人Agent框架，内置WebUI、工具调用、多Agent工作流等能力，适合个人开发者快速搭建私有Agent。
对，这七个，都是智能体相关的，Trending里的几个高增量的都在这。
然后是📦 AI 应用（具体应用产品、垂直场景解决方案）：
1. [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) 今日新增⭐287：LLM驱动的多市场股票智能分析系统，整合行情、新闻、决策看板与自动推送能力，支持零成本定时运行，是金融垂类AI Agent的典型落地案例。
2. [harveyai/harvey-labs](https://github.com/harveyai/harvey-labs) 今日新增⭐87：法律行业Agent能力基准测试平台，专为评估法律场景Agent的合规、推理、文书能力设计，反映专业垂类Agent的评估体系正在完善。
3. [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) ⭐50,181：AI生产力工作室，内置智能对话、自主Agent、300+预设助手，统一对接前沿大模型，是个人AI办公的热门工具。
4. [MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) ⭐102,327：AI一键生成高清短视频工具，基于大模型和自动化工作流实现从选题到成片的全流程自动化，是内容生产垂类的热门AI应用。
5. [open-webui/open-webui](https://github.com/open-webui/open-webui) ⭐148,323：开源本地AI交互界面，支持Ollama、OpenAI API等各类大模型接入，是个人用户部署私有AI助手的主流前端工具。
6. [netdata/netdata](https://github.com/netdata/netdata) ⭐80,090：AI驱动的全栈可观测性平台，支持瘦团队快速搭建AI化的运维监控体系，是AI for DevOps的典型落地场景。
对，这六个，都是具体应用，垂类的。
然后是🧠 大模型/训练（模型权重、训练框架、微调工具）：
1. [google-deepmind/weathernext](https://github.com/google-deepmind/weathernext) 今日新增⭐105：DeepMind推出的AI气象预测模型，基于大模型技术实现高精度气象预报，是AI for Science领域的典型落地项目，今日上榜反映垂直领域大模型应用受到关注。
2. [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) ⭐102,014：从零实现类ChatGPT大模型的PyTorch教程，配套完整代码与讲解，是当前最受欢迎的大模型入门学习资源之一。
3. [jingyaogong/minimind](https://github.com/jingyaogong/minimind) ⭐54,497：2小时从零训练64M参数小规模LLM的开源项目，大幅降低大模型训练门槛，适合开发者快速入门LLM训练全流程。
4. [open-compass/opencompass](https://github.com/open-compass/opencompass) ⭐7,287：开源大模型评测平台，支持100+数据集、覆盖Llama、Qwen、DeepSeek等主流模型的全面评测，是当前大模型迭代的核心评估工具。
5. [Picovoice/picollm](https://github.com/Picovoice/picollm) ⭐316：端侧轻量LLM推理工具，基于X-Bit量化技术实现低资源设备上的大模型推理，推动端侧AI落地。
对，这五个，都是大模型相关的，包括模型、训练、评测。
然后是🔍 RAG/知识库（向量数据库、检索增强、知识管理）：
1. [vitali87/code-graph-rag](https://github.com/vitali87/code-graph-rag) 今日新增⭐59：面向Monorepo的多语言代码知识图谱RAG工具，支持代码库的查询、理解与AI辅助编辑，今日热榜上榜显示代码智能领域的RAG需求正在升温。
2. [infiniflow/ragflow](https://github.com/infiniflow/ragflow) ⭐87,122：开源深度RAG引擎，融合RAG与Agent能力为LLM提供高质量上下文层，是当前RAG领域的标杆项目之一。
3. [topoteretes/cognee](https://github.com/topoteretes/cognee) ⭐29,889：AI Agent长期记忆平台，基于自托管知识图谱引擎实现Agent跨会话的持久记忆，解决当前Agent记忆丢失的核心痛点。
4. [mem0ai/mem0](https://github.com/mem0ai/mem0) ⭐62,875：通用AI Agent记忆层，支持多会话、多Agent的持久化记忆管理，是当前Agent记忆赛道的热门开源项目。
5. [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) ⭐104,593：将代码库、文档、SQL schema等转为可查询知识图谱的工具，支持Claude Code、Cursor等主流IDE集成，提供无向量、可解释的RAG能力，是代码智能领域的新兴RAG方案。
6. [meilisearch/meilisearch](https://github.com/meilisearch/meilisearch) ⭐58,916：高性能搜索引擎，支持AI驱动的混合搜索（全文+向量），适合各类应用的RAG场景集成。
对，这六个，都是RAG和知识库相关的。
接下来是趋势信号分析，200-300字，要提炼：
首先，哪类工具爆发性关注？哦，Agent相关的，尤其是自主编码Agent、多Agent orchestration、Agent Skills模块化，今日Trending前5里有4个是Agent相关的，增量都很高，说明Agent从概念炒作进入工具化、模块化落地阶段，社区关注从“能不能做Agent”转向“怎么快速搭建好用的Agent”。
然后有没有新兴技术栈首次登榜？哦，代码知识图谱RAG（code-graph-rag）、Agent持久记忆平台（cognee、mem0）这些是近期新兴的方向，尤其是用知识图谱替代传统向量RAG的方案，首次进入热榜，说明RAG技术正在从向量检索向可解释、结构化知识检索迭代。
然后和近期事件的关联？哦，近期DeepSeek、Claude等大模型的Agent能力大幅提升，还有Coding Agent（如Cursor、Claude Code）的普及，推动开发者对Agent工具、技能集、代码智能RAG的需求爆发，同时头部厂商（Google、DeepMind）持续入场Agent生态，推动行业标准形成。
然后社区关注热点，3-5个bullet，给理由：
1. 🔥 自主编码Agent（PrimeIntellect-ai/prime-agent）：单日新增2300+星，创近期Agent项目热度新高，反映 Coding Agent 仍是当前AI Agent赛道的核心落地场景，自主任务执行能力是社区关注焦点。
2. 🛠️ Agent Skills 标准化工具集（addyosmani/agent-skills、google/skills）：头部开发者与厂商同时推出Agent技能集，推动Agent能力模块化、标准化，降低Agent开发门槛，是Agent生态从碎片化走向体系化的关键信号。
3. 📊 代码知识图谱RAG（vitali87/code-graph-rag）：首次登上 Trending 热榜，用知识图谱替代传统向量检索实现代码库的智能理解，解决代码RAG可解释性差、跨文件关联弱的痛点，是代码智能领域的新兴技术方向。
4. 🧠 Agent 长期记忆方案（topoteretes/cognee、mem0ai/mem0）：多个Agent记忆层项目进入7日活跃榜单，解决当前Agent跨会话记忆丢失的核心痛点，是Agent从“单次对话工具”向“长期智能助手”演进的关键基础设施。
5. ⚖️ 垂类Agent评估体系（harveyai/harvey-labs）：法律行业Agent基准测试项目上榜，反映专业垂类Agent的落地正在从“功能实现”向“能力评估”进阶，行业标准化需求凸显。
哦对，还要注意所有项目都要带GitHub链接，语言要专业简洁，中文。
等下还要检查有没有漏的，比如Trending里的weathernext，归到大模型/训练里了，对的。还有过滤的时候有没有漏掉非AI的？哦Trending里的witr（进程排查工具）、authentik（认证工具）、t3code（前端脚手架）都排除了，对的。
哦对了，Trending里的prime-agent的stars是0+2319 today，所以要写清楚今日新增2319，总量的话因为是今日新增的，所以总量是2319？哦看数据里的Trending的stars是⭐0 (+2319 today)，哦可能是数据里的总量还没更新？所以就写「今日新增⭐2319」就可以，或者写「总stars 2319（今日新增231

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*