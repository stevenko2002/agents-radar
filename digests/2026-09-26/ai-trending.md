# AI 开源趋势日报 2026-09-26

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-09-25 22:15 UTC

---



# AI 开源趋势日报 (2026-09-26)

---

## 今日速览

今日 GitHub 热榜呈现出 **AI Agent（智能体）基础设施爆发式增长** 的态势。以 `paperclip` 和 `hindsight` 为代表的智能体管理与记忆工具单日暴涨千余 stars，标志着社区焦点已从单纯的模型调用转向 Agent 工程化、记忆持久化和技能标准化。同时，大厂动作频繁：Google 开源智能体编排运行时 `ax`，NVIDIA 发布模型优化库 `Model-Optimizer`，表明行业正全力解决大模型在生产环境中的部署、压缩与多智能体协同瓶颈。此外，AI 与传统办公套件的深度融合（如 `univer`）也展现出巨大的应用潜力。

---

## 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

*   **Google 的开源智能体编排运行时 (`google/ax`)** ⭐0 (+1386 today)
    *   Google 推出的 open agentic orchestration runtime，为构建、运行和协调多智能体系统提供底层核心引擎，今日热度极高。
*   **NVIDIA 模型优化库 (`NVIDIA/Model-Optimizer`)** ⭐0 (+360 today)
    *   集成了量化（quantization）、蒸馏（distillation）、剪枝（pruning）等 SOTA 技术的统一库，旨在压缩模型以加速在 TensorRT-LLM、vLLM 等框架上的推理。
*   **Claude Code 官方插件目录 (`anthropics/claude-plugins-official`)** ⭐0 (+62 today)
    *   Anthropic 维护的高质量 Claude Code 插件目录，为开发者提供标准化的 AI 编程助手扩展接口。
*   **AI 设计语言规范 (`pbakaus/impeccable`)** ⭐0 (+326 today)
    *   旨在提升 AI 编程助手（Harness）生成代码和 UI 设计质量的设计规范与提示词库。
*   **PyTorch (`pytorch/pytorch`)** ⭐103,320 [topic:ml]
    *   最主流的深度学习框架，动态神经网络计算的基石。

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

*   **Paperclip (`paperclipai/paperclip`)** ⭐0 (+1853 today)
    *   开源的企业级智能体管理平台，允许用户在工作流中可视化管理和调度 AI Agent，今日 trending 榜单第二。
*   **Hindsight 记忆系统 (`vectorize-io/hindsight`)** ⭐0 (+1652 today)
    *   具备学习能力的 Agent 记忆解决方案，能够从历史交互中提取结构化知识，实现跨会话的长期记忆。
*   **Superpowers 技能框架 (`obra/superpowers`)** ⭐0 (+465 today)
    *   面向软件开发的 Agent 技能框架与方法论，提供开箱即用的自动化开发技能。
*   **Real Engineers 技能库 (`mattpocock/skills`)** ⭐0 (+588 today)
    *   针对真实工程场景优化的 Agent 技能配置，直接来源于开发者的 `.agents` 目录实战经验。
*   **Anthropic Agent Skills (`anthropics/skills`)** ⭐0 (+231 today)
    *   Anthropic 官方发布的 Agent Skills 公共仓库，推动 Agent 技能共享标准化。
*   **本地优先桌面 Agent 看板 (`androoAGI/starnet`)** ⭐0 (+118 today)
    *   一个像素风的本地桌面端 Agent 管理看板，支持用户自带 Key 运行 AI 雏形团队，强调本地隐私。
*   **LangChain (`langchain-ai/langchain`)** ⭐147,058 [topic:rag]
    *   经典的 LLM 应用开发与 Agent 编排框架，提供了丰富的工具链和链式调用抽象。

### 📦 AI 应用（具体应用产品、垂直场景解决方案）

*   **Univer (`dream-num/univer`)** ⭐0 (+1048 today)
    *   面向 AI Agent 的 Office 运行时套件，将电子表格、文档、幻灯片、PDF 等整合为统一的可编程数据环境。
*   **A 股量化选股工作台 (`shy3130/tick-stock-panel`)** ⭐0 (+31 today)
    *   基于 LLM 能力的自托管 A 股量化分析平台，支持策略定制、实时监控与回测。
*   **AI 工程从零到精通 (`rohitg00/ai-engineering-from-scratch`)** ⭐57,413 (+1181 today)
    *   系统的 AI 工程化学习教程与实践代码库，帮助开发者从零构建可落地的 AI 系统。
*   **Open-WebUI (`open-webui/open-webui`)** ⭐153,182 [topic:rag]
    *   友好的本地优先 AI 界面，支持 Ollama、OpenAI API 等多种后端，方便个人用户自托管 AI 助手。
*   **AI 短视频生成器 (`harry0703/MoneyPrinterTurbo`)** ⭐125,831 [topic:llm]
    *   利用大模型和自动化工作流，根据主题或关键词一键生成高清短视频的开源工具。

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

*   **NVIDIA 模型优化库 (`NVIDIA/Model-Optimizer`)** ⭐0 (+360 today)
    *   虽然属于基础工具，但其核心聚焦于大模型的剪枝、量化与蒸馏，是当前模型训练后优化的关键环节。
*   **Minimind (`jingyaogong/minimind`)** ⭐62,569 [topic:llm-model]
    *   极简的 LLM 训练项目，仅需 64M 参数即可在 2 小时内从零训练出一个类 ChatGPT 的模型，适合教学与快速验证。
*   **OpenCompass (`open-compass/opencompass`)** ⭐7,473 [topic:llm-model]
    *   主流的大模型评测平台，支持 OpenAI、Anthropic、Qwen、DeepSeek 等 100 多个模型在知识、推理、编码等维度的基准测试。

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

*   **Graphify (`Graphify-Labs/graphify`)** ⭐121,440 [topic:rag]
    *   将代码库、SQL Schema、PDF 等转化为可查询知识图谱的工具，支持为 Claude Code、Cursor 等提供确定性的图谱检索。
*   **Claude 记忆 (`thedotmack/claude-mem`)** ⭐94,698 [topic:rag

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*