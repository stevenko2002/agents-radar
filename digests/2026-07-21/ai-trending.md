# AI 开源趋势日报 2026-07-21

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-21 12:47 UTC

---

**AI 开源趋势日报**  
*（基于 2026‑07‑21 GitHub Trending 与主题搜索数据筛选、分类、趋势分析）*  

---

## 1️⃣ 今日速览  
- 社区对 **AI Agent 框架** 与 **统一调用入口（Gateway）** 的需求爆发，单日新增 stars 超 4 000。〝OmniRoute〟

   - 过去 24 h，以 **结构化输出**、**持久记忆** 与 **本地搜索** 为核心的工具链快速崛起，形成从 **研发‑Agent‑落地方案** 到 **垂直 SaaS‑in‑a‑box** 的完整闭环。  
- 大模型推理与 **多模态检索**（RAG、向量 DB）继续保持高热度，原生 **GPU‑友好** 的实现（Rust/Go）获得 developers 👍。  
- 首次登上 Trending‑榜单的 **轻量化代码情境图**（code‑review‑graph）与 **本地‑search‑proxy**（wigolo）显示出 **“本地‑first、零‑API‑Key”** 的开发者偏好正在形成。  

---

## 2️⃣ 各维度热门项目  

### 🔧 AI 基础工具  
| 项目 | Stars（总/今日） | 简述 |
|------|----------------|------|
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | ⭐142,246 | 业界最全的 LLM Agent 编程框架，提供链式调用、工具调用与 Agent Memory。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐162,799 | 支持 1000+ 预训练模型的统一 API，覆盖文本、视觉、音频和多模态任务。 |
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐176,564 | 一键本地运行 100+ 大模型（如 DeepSeek、GLM‑5），提供统一的命令行 & HTTP 接口。 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | ⭐0 (+247) | 通过一行命令快速匹配本机可运行的模型/硬件配置。 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | ⭐8,001 | 用 Rust 构建可组合、可扩展的 LLM 应用框架，天然支持并发与流式输出。 |

### 🤖 AI 智能体/工作流  
| 项目 | Stars（总/今日） | 简述 |
|------|----------------|------|
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | ⭐185,636 | 完全自治的多步骤Agent，能够规划、调用工具并迭代自我改进。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐218,149 | “会成长的 Agent”，支持插件、记忆与跨平台协作，已成社区最活跃的 Agent 框架。 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | ⭐60,812 | 基于 AI 的全链路求职系统：扫描职位、打分、改写简历并自动跟进。 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | ⭐59,000 | 为 Agent 提供Internet 全景检索能力，支持Twitter、Reddit、Bilibili 等社交平台的实时搜索。 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | ⭐46,071 | 轻量化的万能 AI 助理，支持任务拆解、工具调用、知识库持久化。 |
| [dottxt-ai/outlines](https://github.com/dottxt-ai/outlines) | ⭐0 (+49) | 结构化输出（Structured Outputs）库，帮助 Agent 生成符合 schema 的 JSON/表格。 |

### 📦 AI 应用  
| 项目 | Stars（总/今日） | 简述 |
|------|----------------|------|
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐48,833 | 交互式 AI 工作台，集成聊天、自主 Agent、300+ 预置助手，支持多模态输出。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐40,314 | 输入文档/主题即生成完整的 PPT（段落、动画、图表、配音），适用于企业汇报。 |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | ⭐63,636 | 本地首个面向文档的全栈 AI 应用，提供向量检索、聊天 UI、插件系统。 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | ⭐146,181 | 用户友好的本地 AI 前端，支持 Ollama、OpenAI API、Azure、Claude 等后端。 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | ⭐30,579 | 24/7 本地协同工作站，可挂载 Claude‑Code、Hermes‑Agent、Gemini CLI 等多种 AI 助手。 |
| [tradesdontlie/tradingview-mcp](https://github.com/tradesdontlie/tradingview-mcp) | ⭐0 (+28) | 将 TradingView 图表与 LLM‑CLI 结合，实现自动化技术分析与策略生成。 |

### 🧠 大模型/训练  
| 项目 | Stars（总/今日） | 简述 |
|------|----------------|------|
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | ⭐196,433 | 业界最流行的端到端深度学习框架，支持部署、Serving 与分布式训练。 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | ⭐101,842 | 以动态计算图著称的 ML 框架，生态丰富，是研究与工业的首选。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐162,799 | 大模型查询、微调与推理的统一门户，兼容 1000+ 预训练模型。 |
| [JuliaLang/julia](https://github.com/JuliaLang/julia) | ⭐48,916 | 高性能科学计算语言，因其生态在数值建模、机器学习领域被广泛采用。

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*