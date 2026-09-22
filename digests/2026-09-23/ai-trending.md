# AI 开源趋势日报 2026-09-23

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-09-22 22:15 UTC

---

The user wants me to act as an AI open-source ecosystem technical analyst and generate a structured "AI Open Source Trend Daily Report" based on the provided GitHub data from 2026-09-23.

Let me break down the tasks:

**Step 1: Filtering** - Filter out AI/ML-related projects from the data. Exclude non-AI general tools, frontend frameworks, games, etc. For the Trending list, skip non-AI projects.

Let me analyze the Trending list first:
- `anthropics/financial-services` - Python, +436 today. This is from Anthropic, about financial services. Likely AI-related (Anthropic is an AI company). But is it AI/ML? It's about financial services using AI. I'll include it as AI application.
- `agent-substrate/substrate` - Go, +301 today. "Agent Substrate: the core system" - clearly AI agent infrastructure. Include.
- `dream-num/univer` - TypeScript, +202 today. "The Office Harness for AI Agents" - clearly AI agent tool. Include.
- `davila7/claude-code-templates` - Python, +113 today. CLI tool for Claude Code. AI development tool. Include.
- `google/ax` - Go, +2324 today. "Google's open agentic orchestration runtime" - clearly AI agent. Include.
- `mvt-project/mvt` - Python, +441 today. Mobile Verification Toolkit for forensics. This is NOT AI-related. It's mobile security/forensics. Exclude.
- `superdesigndev/treg` - Python, +197 today. "OpenRouter for agent tools" - AI agent tool. Include.
- `browser-use/video-use` - Python, +155 today. "Edit videos with coding agents" - AI application. Include.

So from Trending, exclude `mvt-project/mvt`. The rest are AI-related.

Now the topic search results - these are already AI-related by topic search, but I should still verify they are genuinely AI/ML. Most are clearly AI-related. Let me check:
- All the RAG topic ones are AI-related
- All the ML topic ones are AI-related
- All the AI-agent topic ones are AI-related
- All the LLM topic ones are AI-related
- All the vector-db topic ones are AI-related
- All the llm-model topic ones are AI-related

So all 80 from topic search are AI-related.

**Step 2: Classification** - Classify into:
- 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）
- 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）
- 📦 AI 应用（具体应用产品、垂直场景解决方案）
- 🧠 大模型/训练（模型权重、训练框架、微调工具）
- 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

Let me classify the key projects:

**Trending projects classification:**
- `anthropics/financial-services` - 📦 AI 应用 (financial services AI solution)
- `agent-substrate/substrate` - 🤖 AI 智能体/工作流 (Agent core system)
- `dream-num/univer` - 🤖 AI 智能体/工作流 (Office harness for AI agents)
- `davila7/claude-code-templates` - 🔧 AI 基础工具 (CLI for Claude Code)
- `google/ax` - 🤖 AI 智能体/工作流 (agentic orchestration runtime)
- `superdesigndev/treg` - 🤖 AI 智能体/工作流 (OpenRouter for agent tools)
- `browser-use/video-use` - 📦 AI 应用 (video editing with coding agents)

**Topic search classification (key ones):**

RAG topic:
- `open-webui/open-webui` - 📦 AI 应用 (AI interface) or 🔍 RAG/知识库
- `langchain-ai/langchain` - 🔧 AI 基础工具 (agent engineering platform)
- `Shubhamsaboo/awesome-llm-apps` - 🔍 RAG/知识库 (curated list)
- `Graphify-Labs/graphify` - 🔍 RAG/知识库 (knowledge graph)
- `thedotmack/claude-mem` - 🔍 RAG/知识库 (persistent context)
- `infiniflow/ragflow` - 🔍 RAG/知识库 (RAG engine)
- `PaddlePaddle/PaddleOCR` - 📦 AI 应用 (OCR toolkit)
- `datawhalechina/hello-agents` - 🔍 RAG/知识库 or 🤖 AI 智能体/工作流 (tutorial)
- `headroomlabs-ai/headroom` - 🔧 AI 基础工具 (token compression)
- `Mintplex-Labs/anything-llm` - 📦 AI 应用 (local-first agent)
- `mem0ai/mem0` - 🔍 RAG/知识库 (memory layer)
- `run-llama/llama_index` - 🔧 AI 基础工具 (document processing)
- `bojieli/ai-agent-book` - 🔍 RAG/知识库 (book)
- `jeecgboot/JeecgBoot` - 📦 AI 应用 (low-code AI platform)
- `milvus-io/milvus` - 🔍 RAG/知识库 (vector database)

ML topic:
- `tensorflow/tensorflow` - 🧠 大模型/训练 (ML framework)
- `huggingface/transformers` - 🧠 大模型/训练 (model framework)
- `rasbt/LLMs-from-scratch` - 🧠 大模型/训练 (tutorial)
- `pytorch/pytorch` - 🧠 大模型/训练 (ML framework)
- `Developer-Y/cs-video-courses` - Not really AI-specific, more general CS. But tagged ml. I'll skip or put in AI 基础工具.
- `netdata/netdata` - 🔧 AI 基础工具 (observability)
- `OpenBB-finance/OpenBB` - 📦 AI 应用 (financial data platform)
- `microsoft/AI-For-Beginners` - 🔧 AI 基础工具 (course)
- `scikit-learn/scikit-learn` - 🧠 大模型/训练 (ML library)
- `keras-team/keras` - 🧠 大模型/训练 (deep learning)
- `ultralytics/ultralytics` - 📦 AI 应用 (object detection)
- `roboflow/supervision` - 🔧 AI 基础工具 (CV tools)
- `JuliaLang/julia` - 🔧 AI 基础工具 (programming language)
- `microsoft/qlib` - 📦 AI 应用 (quant investment)
- `apache/airflow` - 🔧 AI 基础工具 (workflow)

AI-agent topic:
- `NousResearch/hermes-agent` - 🤖 AI 智能体/工作流
- `career-ops-hq/career-ops` - 📦 AI 应用 (job search)
- `ZhuLinsen/daily_stock_analysis` - 📦 AI 应用 (stock analysis)
- `hugohe3/ppt-master` - 📦 AI 应用 (PPT generation)
- `CherryHQ/cherry-studio` - 📦 AI 应用 (AI productivity studio)
- `HKUDS/nanobot` - 🤖 AI 智能体/工作流 (agent framework)
- `zhayujie/CowAgent` - 🤖 AI 智能体/工作流 (agent harness)
- `siyuan-note/siyuan` - 📦 AI 应用 (knowledge workspace)
- `Hmbown/Codewhale` - 🤖 AI 智能体/工作流 (coding agent)
- `CopilotKit/CopilotKit` - 🔧 AI 基础工具 (frontend stack for agents)
- `esengine/DeepSeek-Reasonix` - 🤖 AI 智能体/工作流 (AI coding agent)
- `agentscope-ai/QwenPaw` - 🤖 AI 智能体/工作流 (personal AI assistant)
- `HKUDS/Vibe-Trading` - 📦 AI 应用 (trading agent)
- `Gitlawb/openclaude` - 🤖 AI 智能体/工作流

LLM topic:
- `affaan-m/ECC` - 🤖 AI 智能体/工作流 (agent harness)
- `Significant-Gravitas/AutoGPT` - 🤖 AI 智能体/工作流
- `firecrawl/firecrawl` - 🔧 AI 基础工具 (web data API)
- `ollama/ollama` - 🔧 AI 基础工具 (LLM runner)
- `langgenius/dify` - 📦 AI 应用 (LLM workspace)
- `harry0703/MoneyPrinterTurbo` - 📦 AI 应用 (video generation)
- `browser-use/browser-use` - 🤖 AI 智能体/工作流 (browser agents)
- `TauricResearch/TradingAgents` - 🤖 AI 智能体/工作流 (trading framework)
- `JuliusBrussee/caveman` - 🔧 AI 基础工具 (token compression)

Vector-db topic:
- `meilisearch/meilisearch` - 🔍 RAG/知识库 (search engine)
- `VectifyAI/PageIndex` - 🔍 RAG/知识库 (document index)
- `qdrant/qdrant` - 🔍 RAG/知识库 (vector database)
- `topoteretes/cognee` - 🔍 RAG/知识库 (AI memory platform)
- `NirDiamant/RAG_Techniques` - 🔍 RAG/知识库 (techniques)
- `weaviate/weaviate` - 🔍 RAG/知识库 (vector database)
- `alibaba/zvec` - 🔍 RAG/知识库 (vector database)
- `langchain4j/langchain4j` - 🔧 AI 基础工具 (Java LLM library)
- `neuml/txtai` - 🔧 AI 基础工具 (AI framework)
- `StarTrail-org/LEANN` - 🔍 RAG/知识库 (RAG application)
- `lancedb/lancedb` - 🔍 RAG/知识库 (retrieval library)
- `oceanbase/oceanbase` - 🔍 RAG/知识库 (database)

LLM-model topic:
- `jingyaogong/minimind` - 🧠 大模型/训练 (train LLM from scratch)
- `0xPlaygrounds/rig` - 🔧 AI 基础工具 (LLM app in Rust)
- `open-compass/opencompass` - 🧠 大模型/训练 (LLM evaluation)
- `skyzh/tiny-llm` - 🧠 大模型/训练 (inference system)
- `samchon/nestia` - 🔧 AI 基础工具 (NestJS helper)
- `zchoi/Awesome-Embodied-Robotics-and-Agent` - 🤖 AI 智能体/工作流 (curated list)
- `zi-yue-1129/DATAGEN` - 🤖 AI 智能体/工作流 (research assistant)
- `acon96/home-llm` - 📦 AI 应用 (smart home)
- `thinkwee/AwesomeOPD` - 🧠 大模型/训练 (distillation)
- `apache/casbin-gateway` - 🔧 AI 基础工具 (security gateway)
- `Mirrowel/LLM-API-Key-Proxy` - 🔧 AI 基础工具 (LLM gateway)
- `Event-AHU/Medical_Image_Analysis` - 📦 AI 应用 (medical image analysis)
- `asukaminato0721/telegram-summary-bot` - 📦 AI 应用 (telegram bot)
- `testtimescaling/testtimescaling.github.io` - 🧠 大模型/训练 (survey)
- `LancerLab/croqtile` - 🔧 AI 基础工具 (kernel DSL)

Now let me organize the report.

**今日速览**: 
- Google's `ax` agentic orchestration runtime tops the trending chart with +2324 stars today, signaling massive developer interest in agent infrastructure.
- Multiple agent-related projects dominate the trending list, including `agent-substrate/substrate`, `dream-num/univer`, and `superdesigndev/treg`, showing that the "agent" paradigm is the hottest area.
- The RAG/knowledge graph ecosystem remains robust with projects like `Graphify` and `claude-mem` gaining sustained attention.
- Video editing with AI agents (`browser-use/video-use`) and financial AI solutions (`anthropics/financial-services`) represent emerging niche applications gaining traction.

**趋势信号分析**:
- Agent infrastructure is clearly the dominant trend today, with Google's `ax` leading at +2324 stars, followed by multiple agent substrate/tool projects. This aligns with the broader industry shift from "chat" to "agentic" AI.
- The emergence of "Office Harness for AI Agents" (`univer`) and "video editing with coding agents" (`video-use`) indicates agents are expanding beyond code into creative and productivity domains.
- The presence of `anthropics/financial-services` suggests AI companies are increasingly open-sourcing domain-specific solutions to drive adoption.
- RAG and memory layers continue to be foundational, with projects like `claude-mem` (persistent context) and `mem0` (memory infrastructure) showing that "giving agents memory" is a critical unsolved problem attracting heavy investment.

**社区关注热点**:
- `google/ax` - Google's open agentic orchestration runtime, +2324 stars today. A major signal that Google is betting big on agent infrastructure.
- `browser-use/video-use` - Edit videos with coding agents. Novel intersection of AI agents and creative tools.
- `Graphify-Labs/graphify` - Turn any codebase into a queryable knowledge graph. Hits the pain point of code understanding.
- `anthropics/financial-services` - Anthropic's first open-source repo focused on financial services AI.
- `dream-num/univer` - Office harness for AI agents, potentially a game-changer for enterprise productivity.

Let me now write the full report in Chinese, following the required structure.

I need to be careful about the stars data. For trending projects, they show ⭐0 (+X today) which means total stars are 0 but today's stars are shown. For topic search, total stars are shown.

Let me structure the report now.

For the classification section, I'll list 3-8 representative projects per category, focusing on the most notable ones.

Let me draft:

---

# AI 开源趋势日报
**日期**: 2026-09-23

## 今日速览

今日 GitHub AI 生态最显著的信号是 **Agent 基础设施的爆发式增长**——Google 开源的智能体编排运行时 `ax` 以单日 +2324 stars 登顶热榜，远超其他项目，显示出社区对"可编排、可运行的 Agent 系统"的极度渴望。与此同时，Agent 工具链生态快速分化：从办公套件集成（`univer`）、视频编辑（`video-use`）到金融垂直场景（`anthropics/financial-services`），Agent 正从"能聊天"向"能干活"全面演进。RAG 与记忆层持续深耕，`Graphify`、`claude-mem` 等项目持续获得关注，表明"让智能体拥有长期记忆和知识检索能力"仍是行业核心命题。

## 各维度热门项目

### 🔧 AI 基础工具
1. **google/ax** [Go] ⭐0 (+2324 today) — Google 开源的智能体编排运行时，提供统一的 Agent 生命周期管理、工具调用与多模型路由。今日热榜冠军，标志 Google 正式将 Agent 基础设施开放。
2. **ollama/ollama** [Go] ⭐181,491 — 轻量级本地 LLM 推理引擎，支持 Kimi、GLM、DeepSeek、Qwen 等主流模型一键运行。本地 AI 推理的事实标准。
3. **langchain-ai/langchain** [Python] ⭐146,886 — Agent 工程化平台，提供丰富的组件库和编排能力，是构建 LLM 应用的首选框架之一。
4. **davila7/claude-code-templates** [Python] ⭐0 (+113 today) — Claude Code 的 CLI 配置与监控工具，降低 Claude Code 使用门槛。
5. **headroomlabs-ai/headroom** [Python] ⭐73,529 — Token 压缩代理，可在 LLM 调用前压缩工具输出、日志和 RAG 片段，显著降低 token 消耗。
6. **firecrawl/firecrawl** [TypeScript] ⭐183,384 — 网页数据抓取与交互 API，为 Agent 提供大规模网页数据获取能力。
7. **affaan-m/ECC** [JavaScript] ⭐265,375 — Agent 性能优化系统，覆盖 Skills、记忆、安全等维度，支持多款主流编码 Agent。
8. **JuliusBrussee/caveman** [Go] ⭐107,373 — 面向编码 Agent 的 Token 压缩代理，通过"原始语言"风格减少 65% 的 Token 消耗。

### 🤖 AI 智能体/工作流
1. **agent-substrate/substrate** [Go] ⭐0 (+301 today) — Agent 核心系统，提供 Agent 运行时的基础抽象与编排能力。今日热榜亚军。
2. **dream-num/univer** [TypeScript] ⭐0 (+202 today) — 面向 AI Agent 的办公套件运行时，统一 Excel、Word、PPT、PDF 等格式，让 Agent 直接操作办公文档。
3. **superdesigndev/treg** [Python] ⭐0 (+197 today) — 面向 Agent 工具的 OpenRouter，统一多模型工具调用接口。
4. **NousResearch/hermes-agent** [Python] ⭐248,100 — 具备自我进化能力的 Agent，支持多模型、多工具、长期记忆。
5. **Significant-Gravitas/AutoGPT** [Python] ⭐187,501 — 自主 AI Agent 的先驱项目，推动"自主智能体"概念走向主流。
6. **browser-use/browser-use** [Python] ⭐115,944 — 让 Agent 操控浏览器完成复杂网页任务，开创"浏览器 Agent"品类。
7. **HKUDS/nanobot** [Python] ⭐48,492 — 超轻量自托管个人 Agent 框架，集成 WebUI、工具、记忆、MCP 与多 Agent 工作流。
8. **TauricResearch/TradingAgents** [Python] ⭐108,125 — 多 Agent 协作的 LLM 金融交易框架，展示 Agent 在专业领域的落地范式。

### 📦 AI 应用
1. **anthropics/financial-services** [Python] ⭐0 (+436 today) — Anthropic 首个开源项目，聚焦金融场景的 AI 解决方案。今日热榜第三。
2. **browser-use/video-use** [Python] ⭐0 (+155 today) — 用编码 Agent 编辑视频，将 Agent 能力延伸至视频创作领域。
3. **langgenius/dify** [TypeScript] ⭐156,877 — 低代码 LLM 应用开发平台，支持 Agent 工作流、RAG 管线与多模型接入，团队协作友好。
4. **harry0703/MoneyPrinterTurbo** [Python] ⭐125,140 — 基于 AI 大模型的短视频自动生成工具，输入主题即可产出高清短视频。
5. **CherryHQ/cherry-studio** [TypeScript] ⭐52,080 — AI 生产力工作室，集成智能聊天、自主 Agent 与 300+ 助手，统一接入前沿 LLM。
6. **OpenBB-finance/OpenBB** [Python] ⭐73,386 — 面向分析师、量化研究员和 AI Agent 的开源金融数据平台。
7. **PaddlePaddle/PaddleOCR** [Python] ⭐90,040 — 轻量级 OCR 工具包，将 PDF/图片转化为结构化数据供 LLM 使用，支持 100+ 语言。
8. **microsoft/qlib** [Python] ⭐48,761 — AI 驱动的量化投资平台，覆盖从研究到生产的全流程。

### 🧠 大模型/训练
1. **tensorflow/tensorflow** [C++] ⭐200,253 — Google 开源的机器学习框架，仍是工业界最广泛使用的 ML 基础设施之一。
2. **huggingface/transformers** [Python] ⭐166,534 — HuggingFace 的模型定义框架，支持文本、视觉、音频及多模态模型的推理与训练。
3. **pytorch/pytorch** [Python] ⭐103,179 — Meta 开源的动态神经网络框架，学术界和研究领域的首选。
4. **rasbt/LLMs-from-scratch** [Jupyter Notebook] ⭐105,403 — 从零用 PyTorch 实现 ChatGPT 级别 LLM 的教程仓库，学习 LLM 原理的必读资源。
5. **jingyaogong/minimind** [Python] ⭐62,186 — 仅 64M 参数的微型 LLM，2 小时即可从零训练完成，是理解大模型训练流程的绝佳入门项目。
6. **open-compass/opencompass** [Python] ⭐7,468 — LLM 评测平台，支持 OpenAI、Anthropic、Gemini、Qwen、DeepSeek 等 100+ 模型与数据集。
7. **scikit-learn/scikit-learn** [Python] ⭐67,344 — Python 生态最经典的机器学习库，至今仍是 ML 入门与快速原型的首选。
8. **keras-team/keras** [Python] ⭐64,328 — 面向人类的深度学习 API，支持多后端（TensorFlow、JAX、PyTorch），降低深度学习门槛。

### 🔍 RAG/知识库
1. **open-webui/open-webui** [Python] ⭐152,845 — 用户友好的 AI 前端界面，支持 Ollama、OpenAI API 等，内置 RAG 能力。
2. **infiniflow/ragflow** [Go] ⭐91,172 — 开源 RAG 引擎，将先进检索增强生成与 Agent 能力融合，为 LLM 构建上下文层。
3. **Graphify-Labs/graphify** [Python] ⭐120,541 — 将代码库、文档、SQL Schema、PDF 转化为可查询知识图谱，支持 Claude Code、Cursor 等编码 Agent。
4. **thedotmack/claude-mem** [TypeScript] ⭐94,479 — 跨会话持久化上下文，捕获 Agent 会话中的所有操作并压缩为可检索记忆，支持多款主流 Agent。
5. **mem0ai/mem0** [Python] ⭐65,840 — 面向 AI Agent 的记忆层基础设施，提供持久化上下文，面向生产环境设计。
6. **milvus-io/milvus** [Go] ⭐46,219 — 高性能云原生向量数据库，支持可扩展的向量 ANN 检索，是 RAG 系统的核心基础设施。
7. **qdrant/qdrant** [Rust] ⭐34,756 — 高性能向量数据库与搜索引擎，支持大规模向量检索，提供云端版本。
8. **VectifyAI/PageIndex** [Python] ⭐35,807 — 面向无向量、基于推理的 RAG 文档索引方案，区别于传统向量检索路线。

## 趋势信号分析

今日热榜的核心叙事是 **"Agent 基础设施军备竞赛"**。Google 的 `ax` 以 +2324 stars 的压倒性优势登顶，表明科技巨头已将 Agent 运行时视为下一个战略制高点。紧随其后的 `substrate`、`univer`、`treg` 分别从核心系统、办公集成、工具路由三个切面切入，反映出 Agent 基础设施正在从"单一框架"向"专业化、可组合的子系统"演进。

另一个值得关注的信号是 **Agent 应用场景的横向扩张**：从编码（`claude-code-templates`）、办公（`univer`）、视频（`video-use`）到金融（`anthropics/financial-services`），Agent 正在摆脱"代码助手"的单一定位，渗透到创意、办公、金融等垂直领域。这与"通用 Agent"的行业愿景高度一致。

RAG 与记忆层方面，`Graphify` 和 `claude-mem` 的持续高热度表明，**"让 Agent 理解上下文"** 仍是核心瓶颈。知识图谱路线（Graphify）与会话记忆路线（claude-mem）代表了两种不同的技术路径，未来可能会进一步融合。

## 社区关注热点

- **google/ax** — Google 开源的 Agent 编排运行时，单日 +2324 stars。如果你在构建 Agent 系统，这是必须关注的基础设施，可能改变 Agent 开发的技术栈格局。
- **dream-num/univer** — "AI Agent 的办公套件运行时"，让 Agent 直接操作 Excel/Word/PPT。如果 Agent 要进入企业办公场景，这类"领域运行时"是关键缺失环节。
- **browser-use/video-use** — 用编码 Agent 编辑视频。Agent + 创意工具的交叉点，可能催生新一代 AI 视频创作范式。
- **Graphify-Labs/graphify** — 代码库即知识图谱，无向量存储、确定性 AST 解析。为"Agent 如何理解代码库"提供了不同于 RAG 的技术路线。
- **anthropics/financial-services** — Anthropic 的首个开源项目，聚焦金融场景。关注头部 AI 公司的开源策略转向，它们正在从"提供

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*