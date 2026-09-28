# AI 开源趋势日报 2026-09-29

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-09-28 22:15 UTC

---

# AI 开源趋势日报（2026-09-29）

> 筛选说明：Trending 榜单 8 项中保留 5 个 AI 相关项目；PLFM_RADAR（相控阵雷达）、coursebook（系统编程教材）、byoungd/up（人生进阶指南）与 AI 无关，已略去。主题搜索侧按 AI/ML 相关性精选，排除通用课程、通用编程语言等。Trending 项目总 stars 显示为 0 时，今日新增 stars 更具参考价值。

## 1. 今日速览

今日 AI 开源热榜几乎被“Agent 基础设施”包场：paperclip 管理 agents、hindsight 做 Agent Memory、openrig 做多 Agent Harness、univer 做办公场景 Agent Harness，社区焦点从“造 Agent”转向“管 Agent、记 Agent、协同 Agent”。VoiceStudio 以 +3274 今日 stars 登顶，本地化 ElevenLabs 替代方案说明语音克隆、转写、配音仍是高频落地场景。主题搜索侧，记忆层、上下文压缩与 RAG 2.0（vectorless/知识图谱）成为新增长点，mem0、cognee、PageIndex、graphify、headroom 等值得关注。向量数据库依旧活跃但格局成熟，Milvus、Qdrant、Weaviate、LanceDB 等继续占据基础设施层。大模型侧，小模型从零训练、LLM 推理系统与评测平台仍是学习与工程化重点。

## 2. 各维度热门项目

### 🔧 AI 基础工具

- [huggingface/transformers](https://github.com/huggingface/transformers) ⭐166,764 — 模型定义框架，覆盖文本、视觉、音频与多模态，是 AI 工程的基础设施。
- [ollama/ollama](https://github.com/ollama/ollama) ⭐181,867 — 本地运行 Kimi、GLM、MiniMax、DeepSeek、gpt-oss、Qwen、Gemma 等模型，本地 LLM 入口级工具。
- [pytorch/pytorch](https://github.com/pytorch/pytorch) ⭐103,464 — 主流深度学习框架，GPU 加速张量与动态神经网络。
- [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) ⭐200,592 — 端到端机器学习框架，工业部署生态成熟。
- [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) ⭐13,171 — Java 生态 LLM 应用库，统一 API、MCP、Agent 与 RAG，适合企业 Java 集成。
- [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) ⭐8,752 — Rust 模块化 LLM 应用框架，适合构建高性能可扩展 LLM 应用。
- [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) ⭐4,732 — 在 Apple Silicon 上从零学习 LLM 推理系统，构建 tiny vLLM + Qwen。

### 🤖 AI 智能体/工作流

- [paperclipai/paperclip](https://github.com/paperclipai/paperclip) ⭐0（+3185 今日） — 开源管理工作 Agent 的应用，今日 Trending 高增，反映“Agent 管理”需求。
- [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) ⭐0（+4413 今日） — Agent Memory That Learns，今日新增 stars 最高，主打会学习的 Agent 记忆。
- [mvschwarz/openrig](https://github.com/mvschwarz/openrig) ⭐0（+781 今日） — 将 Claude Code 与 Codex 作为同一系统运行的多 Agent Harness。
- [dream-num/univer](https://github.com/dream-num/univer) ⭐0（+1105 今日） — 面向 AI Agents 的 Office Harness，统一表格、文档、幻灯片、画布、关系表与 PDF。
- [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) ⭐249,781 — “与你一起成长”的 Agent，主题搜索中星标最高的 Agent 项目之一。
- [browser-use/browser-use](https://github.com/browser-use/browser-use) ⭐116,624 — 让 Agents 使用浏览器，网页自动化与操作层代表项目。
- [HKUDS/nanobot](https://github.com/HKUDS/nanobot) ⭐48,647 — 超轻量自托管个人 AI Agent 框架，含 WebUI、工具、记忆、MCP、多 Agent 工作流。
- [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) ⭐47,153 — 开源超级 AI 助手与 Agent Harness，支持多 Agent、多模型、多通道与自进化。

### 📦 AI 应用

- [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) ⭐0（+3274 今日） — 完全本地的 ElevenLabs 替代方案，支持 646 种语言的语音克隆、设计、视频配音、听写、转写与有声书。
- [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) ⭐126,665 — 用 AI 大模型与自动化工作流一键生成高清短视频。
- [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) ⭐109,090 — 多 Agent LLM 金融交易框架，垂直金融场景代表。
- [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) ⭐72,998 — 开源 AI 求职：扫描职位、评估、定制 CV、跟踪申请，本地运行于 AI 编码 CLI。
- [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) ⭐65,761 — LLM 驱动的多市场股票智能分析系统，含行情、新闻、决策看板与推送。
- [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) ⭐56,836 — AI 将文档或主题转为原生 PowerPoint，支持图表、动画与音频旁白。
- [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) ⭐52,217 — AI 生产力工作室，智能聊天、自主 Agent 与 300+ 助手统一接入前沿 LLM。
- [microsoft/qlib](https://github.com/microsoft/qlib) ⭐49,013 — AI 量化投资平台，支持监督学习、市场动态建模与 RL，并接入 RD-Agent 自动化研发。

### 🧠 大模型/训练

- [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) ⭐105,722 — 用 PyTorch 从零实现 ChatGPT 类 LLM，逐步教学。
- [jingyaogong/minimind](https://github.com/jingyaogong/minimind) ⭐62,832 — 2 小时从零训练 64M 参数 LLM，轻量训练实践代表。
- [open-compass/opencompass](https://github.com/open-compass/opencompass) ⭐7,480 — LLM 评测平台，覆盖 OpenAI、Anthropic、Gemini、Qwen、GLM、DeepSeek 等与 100+ 数据集。
- [galilai-group/stable-pretraining](https://github.com/galilai-group/stable-pretraining) ⭐320 — 可靠、最小、可扩展的基础模型与世界模型预训练库。
- [acon96/home-llm](https://github.com/acon96/home-llm) ⭐1,444 — Home Assistant 集成与本地 LLM 模型，用本地大模型控制智能家居。
- [Event-AHU/Medical_Image_Analysis](https://github.com/Event-AHU/Medical_Image_Analysis) ⭐242 — 基于基础模型的医学图像分析。
- [llm-jp/awesome-japanese-llm](https://github.com/llm-jp/awesome-japanese-llm) ⭐1,433 — 日本 LLM 总览，观察区域模型生态。
- [SeekingDream/Static-to-Dynamic-LLMEval](https://github.com/SeekingDream/Static-to-Dynamic-LLMEval) ⭐500 — 数据污染背景下静态到动态 LLM 评测论文官方仓库。

### 🔍 RAG/知识库

- [open-webui/open-webui](https://github.com/open-webui/open-webui) ⭐153,453 — 用户友好的 AI 界面，支持 Ollama、OpenAI API 等，RAG 入口级项目。
- [infiniflow/ragflow](https://github.com/infiniflow/ragflow) ⭐91,442 — 领先开源 RAG 引擎，融合 RAG 与 Agent 能力，为 LLM 提供上下文层。
- [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) ⭐122,136 — 将代码库、文档、SQL schema、配置与 PDF 转为可查询知识图谱，无需向量库。
- [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) ⭐66,560 — 本地优先 Agent 体验，强调“拥有自己的智能”，含 RAG 与向量库能力。
- [mem0ai/mem0](https://github.com/mem0ai/mem0) ⭐66,237 — AI Agent 记忆层，即插即用，生产级持久上下文。
- [run-llama/llama_index](https://github.com/run-llama/llama_index) ⭐52,338 — AI 文档处理平台，RAG 与知识库构建核心框架。
- [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) ⭐36,212 — Vectorless、基于推理的 RAG 文档索引，代表 RAG 2.0 方向。
- [topoteretes/cognee](https://github.com/topoteretes/cognee) ⭐31,143 — 开源 AI 记忆平台，为 Agent 提供长期记忆，支持小模型免费运行。

> 向量数据库与检索基础设施同样活跃：[milvus-io/milvus](https://github.com/milvus-io/milvus) ⭐46,275、[qdrant/qdrant](https://github.com/qdrant/qdrant) ⭐34,867、[weaviate/weaviate](https://github.com/weaviate/weaviate) ⭐16,857、[lancedb/lancedb](https://github.com/lancedb/lancedb) ⭐11,551、[alibaba/zvec](https://github.com/alibaba/zvec) ⭐16,023。跨会话记忆与上下文优化可关注 [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) ⭐94,845、[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) ⭐74,026、[StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) ⭐12,966。

## 3. 趋势信号分析

今日热榜最显著信号是“Agent 基础设施化”。Trending 前五中，paperclip、hindsight、openrig、univer 分别对应 Agent 管理、记忆、多 Agent 协同、办公 Harness，说明社区不再只关注单个 Agent 能否跑通，而是解决 Agent 规模化后的管理、记忆与工具接入问题。第二个信号是“上下文工程”爆发：mem0、cognee、claude-mem 做记忆层，headroom、caveman 做 token 压缩，PageIndex、graphify 探索 vectorless RAG 与知识图谱，目标都是让 LLM 在有限上下文里更准、更省。第三，本地/私有 AI 继续升温，VoiceStudio 以 +3274 今日 stars 登顶，ollama、LEANN、anything-llm 强调本地运行与数据自主。第四，语音、办公、金融、求职等垂直应用快速成熟，AI 正从聊天框进入具体工作流。最后，Kimi、GLM、MiniMax、DeepSeek、Qwen 等模型被 ollama 等工具频繁列为本地底座，模型供给多样化正在反哺 Agent 与 RAG 生态。

## 4. 社区关注热点

- **Agent Memory / Context Layer**：[hindsight](https://github.com/vectorize-io/hindsight)（+4413 今日）、[mem0](https://github.com/mem0ai/mem0)、[cognee](https://github.com/topoteretes/cognee)、[claude-mem](https://github.com/thedotmack/claude-mem)。理由：Agent 从 demo 到生产，记忆与跨会话上下文是刚需。
- **多 Agent Harness / 编排**：[openrig](https://github.com/mvschwarz/openrig)（+781 今日）、[paperclip](https://github.com/paperclipai/paperclip)（+3185 今日）、[univer](https://github.com/dream-num/univer)（+1105 今日）、[CowAgent](https://github.com/zhayujie/CowAgent)、[nanobot](https://github.com/HKUDS/nanobot)。理由：Claude Code、Codex 等编码 Agent 被组合成系统，管理和协同层出现平台机会。
- **本地语音与私有 AI**：[VoiceStudio](https://github.com/debpalash/VoiceStudio)（+3274 今日）、[ollama](https://github.com/ollama/ollama)、[anything-llm](https://github.com/Mintplex-Labs/anything-llm)、[LEANN](https://github.com/StarTrail-org/LEANN)。理由：数据隐私与成本驱动，本地化替代云服务成为明确需求。
- **Token / 上下文优化**：[headroom](https://github.com/headroomlabs-ai/headroom) ⭐74,026、[caveman](https://github.com/JuliusBrussee/caveman) ⭐108,202、[ECC](https://github.com/affaan-m/ECC) ⭐268,942。理由：Agent 成本与延迟瓶颈在上下文，压缩与优化工具直接提升 ROI。
- **RAG 2.0 / Vectorless 与知识图谱**：[PageIndex](https://github.com/VectifyAI/PageIndex) ⭐36,212、[graphify](https://github.com/Graphify-Labs/graphify) ⭐122,136、[LEANN](https://github.com/StarTrail-org/LEANN) ⭐12,966。理由：传统向量 RAG 在复杂推理与代码库场景有局限，推理式与图谱式检索成为新方向。

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*