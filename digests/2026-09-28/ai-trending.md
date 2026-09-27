# AI 开源趋势日报 2026-09-28

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-09-27 22:15 UTC

---

# AI 开源趋势日报（2026-09-28）

## 一、筛选说明
Trending 榜单 9 个仓库中，6 个与 AI/ML 明确相关；PipePipe（YouTube 客户端）、scriptc（TypeScript 原生编译器）、Madeira（iOS 运行 Windows 游戏）属于通用工具/游戏方向，已略去。AI 主题搜索结果均带 `rag/ml/ai-agent/vector-db/llm/llm-model` 标签，以下按维度精选代表项目。

## 二、今日速览
今日 AI 开源热度集中在“智能体基础设施”：Agent 记忆、多智能体 harness、办公 Agent runtime 同时登榜，`hindsight` 以 +4463 今日新增领跑。本地化 AI 应用继续爆发，`VoiceStudio` 以全本地 ElevenLabs 替代方案获得 +3060 今日新增。RAG/知识库方向持续演进，GraphRAG、向量less RAG、Agent 记忆层成为高频关键词。编码 Agent 生态围绕 Claude Code、Codex、DeepSeek 展开，token 压缩、持久上下文、多 Agent 协作是共同主题。

## 三、各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）
- [ollama/ollama](https://github.com/ollama/ollama) — ⭐181,813 — 本地运行 Kimi、GLM、MiniMax、DeepSeek、Qwen 等模型的入口级推理工具。
- [huggingface/transformers](https://github.com/huggingface/transformers) — ⭐166,731 — 模型定义框架，覆盖文本、视觉、音频、多模态的推理与训练。
- [pytorch/pytorch](https://github.com/pytorch/pytorch) — ⭐103,416 — 深度学习框架，GPU 加速训练与推理的社区基石。
- [keras-team/keras](https://github.com/keras-team/keras) — ⭐64,346 — 高层深度学习 API，适合快速构建和实验模型。
- [scikit-learn/scikit-learn](https://github.com/scikit-learn/scikit-learn) — ⭐67,404 — 经典机器学习库，数据科学与特征工程基础工具。
- [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) — ⭐13,163 — Java 生态 LLM 应用库，统一 API 并支持工具调用、MCP、RAG。
- [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) — ⭐8,745 — Rust 模块化 LLM 应用框架，适合构建高性能 AI 后端。
- [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) — ⭐59,198（+848 today）— 从零学习并构建 AI 工程，今日登榜的学习型开发工具。

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）
- [paperclipai/paperclip](https://github.com/paperclipai/paperclip) — ⭐0（+2527 today）— 开源管理工作场景 agents 的应用，今日 Trending 高新增项目。
- [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) — ⭐0（+4463 today）— Agent Memory That Learns，今日新增最高，记忆正成为智能体核心层。
- [mvschwarz/openrig](https://github.com/mvschwarz/openrig) — ⭐0（+114 today）— 将 Claude Code 与 Codex 作为统一系统运行的多智能体 harness。
- [dream-num/univer](https://github.com/dream-num/univer) — ⭐0（+920 today）— Office Harness for AI Agents，统一表格、文档、幻灯片、PDF 的 Agent runtime。
- [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) — ⭐249,480 — “随你成长”的 Agent，代表通用个人智能体方向。
- [affaan-m/ECC](https://github.com/affaan-m/ECC) — ⭐268,367 — Agent harness 性能优化系统，覆盖技能、本能、记忆、安全与研究流程。
- [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) — ⭐187,589 — 自主智能体先驱，持续提供可构建的 Agent 工具集。
- [langchain-ai/langchain](https://github.com/langchain-ai/langchain) — ⭐147,159 — Agent 工程平台，LLM 应用与智能体开发的主流框架。

### 📦 AI 应用（具体应用产品、垂直场景解决方案）
- [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) — ⭐0（+3060 today）— 全本地 ElevenLabs 替代，支持语音克隆、设计、视频配音、听写、转录、有声书，覆盖 646 种语言。
- [open-webui/open-webui](https://github.com/open-webui/open-webui) — ⭐153,367 — 用户友好的 AI 界面，支持 Ollama、OpenAI API 等后端。
- [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) — ⭐66,531 — 本地优先的 Agent 体验，强调“拥有自己的智能”。
- [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) — ⭐52,189 — AI 生产力工作室，整合智能聊天、自主 agents 与 300+ 助手。
- [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) — ⭐126,302 — 用 AI 大模型和自动化工作流，从主题或关键词一键生成高清短视频。
- [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) — ⭐73,539 — 面向分析师、量化与 AI agents 的开放数据平台。
- [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) — ⭐65,723 — LLM 驱动的多市场股票智能分析系统，支持实时新闻与自动推送。
- [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) — ⭐56,648 — 将文档或主题转为原生 PowerPoint，支持图表、动画与音频旁白。

### 🧠 大模型/训练（模型权重、训练框架、微调工具）
- [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) — ⭐105,663 — 用 PyTorch 从零实现 ChatGPT-like LLM 的经典教程仓库。
- [jingyaogong/minimind](https://github.com/jingyaogong/minimind) — ⭐62,756 — 2 小时从零训练 64M 参数 LLM，适合入门与实验。
- [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) — ⭐62,048 — YOLO 系列视觉模型，覆盖检测、分割、分类、姿态与跟踪。
- [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) — ⭐4,732 — 在 Apple Silicon 上学习 LLM 推理系统，构建 tiny vLLM + Qwen。
- [galilai-group/stable-pretraining](https://github.com/galilai-group/stable-pretraining) — ⭐320 — 可靠、极简、可扩展的基础模型与世界模型预训练库。
- [Event-AHU/Medical_Image_Analysis](https://github.com/Event-AHU/Medical_Image_Analysis) — ⭐242 — 基于基础模型的医学图像分析，垂直领域训练与应用参考。

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）
- [infiniflow/ragflow](https://github.com/infiniflow/ragflow) — ⭐91,368 — 领先开源 RAG 引擎，融合 RAG 与 Agent 能力构建 LLM 上下文层。
- [run-llama/llama_index](https://github.com/run-llama/llama_index) — ⭐52,331 — 面向 AI 的文档处理平台，RAG 应用开发主流选择。
- [milvus-io/milvus](https://github.com/milvus-io/milvus) — ⭐46,262 — 高性能云原生向量数据库，面向可扩展向量 ANN 搜索。
- [mem0ai/mem0](https://github.com/mem0ai/mem0) — ⭐66,090 — AI Agents 记忆层，提供生产级持久上下文基础设施。
- [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) — ⭐121,858 — 将代码库、文档、SQL、PDF 转为可查询知识图谱，强调无向量库与可解释边。
- [qdrant/qdrant](https://github.com/qdrant/qdrant) — ⭐34,852 — 高性能、大规模向量数据库与向量搜索引擎。
- [topoteretes/cognee](https://github.com/topoteretes/cognee) — ⭐31,054 — 开源 AI 记忆平台，为 agents 提供免费长期记忆。
- [NirDiamant/RAG_Techniques](https://github.com/NirDiamant/RAG_Techniques) — ⭐29,606 — 高级 RAG 技术 notebook 教程，适合系统学习检索增强。

## 四、趋势信号分析
今日最强烈的信号是“Agent 基础设施”全面升温：`hindsight`、`paperclip`、`openrig`、`univer` 同时登榜，分别覆盖 Agent 记忆、Agent 管理、多智能体编排与办公 runtime。这说明社区关注点正从“做一个 Agent”转向“让 Agent 可靠协作、持久记忆、嵌入工作流”。RAG 方向也在分化：`Graphify` 代表知识图谱式、无向量库的检索路径，`PageIndex` 代表向量less、推理式 RAG，`mem0`/`cognee` 则把记忆层产品化。本地化与隐私优先继续走强，`VoiceStudio` 以全本地语音克隆登榜，`Ollama` 生态保持高热度。与近期 Claude Code、Codex、DeepSeek、Qwen 等模型/编码 Agent 生态活跃相呼应，token 压缩、持久上下文、多 Agent 协作成为开发者最关心的工程问题。

## 五、社区关注热点
- **Agent Memory 层**：`hindsight`、`mem0`、`cognee`、`claude-mem` 集中爆发，记忆正从附属功能变成智能体核心基础设施。
- **多智能体/编码 Agent harness**：`paperclip`、`openrig`、`CowAgent`、`Codewhale`、`DeepSeek-Reasonix` 围绕 Claude Code、Codex、DeepSeek 构建统一编排层。
- **本地语音与多模态应用**：`VoiceStudio` 以全本地 ElevenLabs 替代方案登榜，隐私优先的语音克隆、配音、转录需求强劲。
- **GraphRAG / 向量less RAG**：`Graphify`、`PageIndex`、`LEANN` 代表降低向量库依赖、提升可解释性与存储效率的新路线。
- **AI 办公与垂直工作流**：`univer`、`ppt-master`、`career-ops`、`daily_stock_analysis` 显示 Agent 正快速进入表格、演示、求职、金融等具体场景。

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*