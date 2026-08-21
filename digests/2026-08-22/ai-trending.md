# AI 开源趋势日报 2026-08-22

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-21 22:15 UTC

---

**AI 开源趋势日报（2026‑08‑22）**

---

### 今日速览
今日 GitHub AI 热度呈现两大鲜明特征：**本地化、可自托管的 AI Agent 工作空间**（如 Maka、Ruflo、Superpowers）获得爆炸性星标增长；与此同时，**多模态内容生成与智能工作流**（视频生成、PPT 自动化、网页爬虫）仍是社区关注热点。RAG/向量数据库生态持续巩固，Dify、LangChain 等框架星级保持高位，而模块化 AI 编译平台（Modular/Mojo）首次登榜，暗示底层推理加速器正成为新兴赛道。整体来看，开发者更倾向于“一站式、可插拔、低依赖”的 AI 基础设施，以便快速构建垂直应用。

---

## 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）
| 项目 | 链接 | Stars（总量 / 今日新增） | 一句话说明 |
|------|------|--------------------------|------------|
| vllm-project/vllm | https://github.com/vllm-project/vllm | 89 652 / – | 高吞吐、低显存的 LLM 推理与服务引擎，支持连续批处理与张量并行。 |
| ollama/ollama | https://github.com/ollama/ollama | 179 126 / – | 一键本地运行 Llama、Mistral、Qwen 等主流大模型的轻量化容器工具。 |
| huggingface/transformers | https://github.com/huggingface/transformers | 164 316 / – | 业界标准的模型定义库，覆盖文本、视觉、音频及多模态的预训练与微调。 |
| langchain-ai/langchain | https://github.com/langchain-ai/langchain | 144 734 / – | 构建 LLM 应用的编排框架，提供 Agent、工具链、记忆等抽象层。 |
| modular/modular | https://github.com/modular/modular | – / +905 today | 基于 Mojo 语言的模块化 AI 平台（含 MAX 编译器），致力于统一硬件后端的高性能推理。 |
| microsoft/onnxruntime | https://github.com/microsoft/onnxruntime | – / +5 today | 跨平台高性能推理引擎，支持 ONNX 格式的模型部署与训练加速。 |
| open-webui/open-webui | https://github.com/open-webui/open-webui | 149 513 / – | 支持 Ollama、OpenAI 等后端的用户友好型 AI 聊天界面，内置插件系统与工作流编排。 |

---

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）
| 项目 | 链接 | Stars（总量 / 今日新增） | 一句话说明 |
|------|------|--------------------------|------------|
| NousResearch/hermes-agent | https://github.com/NousResearch/hermes-agent | 233 970 / – | 自成长的个人 AI 助手框架，具备记忆、技能插件及多模型调度能力。 |
| shareAI-lab/learn-claude-code | https://github.com/shareAI-lab/learn-claude-code | 74 901 / – | 零依赖的 Bash 实现的「Claude Code」代理 harness，便于快速定制终端 Agent。 |
| santifer/career-ops | https://github.com/santifer/career-ops | 67 404 / +918 today | 本地 AI 职场助手：自动抓取岗位、用 A‑F 评价模型打分、优化简历并追踪申请进度。 |
| CherryHQ/cherry-studio | https://github.com/CherryHQ/cherry-studio | 50 885 / – | 集成智能聊天、自治 Agent 与 300+ 预置助手的 AI 生产力工作空间。 |
| affaan-m/ECC | https://github.com/affaan-m/ECC | 241 757 / +348 today | Agent 性能优化系统，提供技能、本能、记忆、安全及研究优先的开发范式（适用于 Claude Code、Cursor 等）。 |
| ruvnet/ruflo | https://github.com/ruvnet/ruflo | – / +140 today | 原始 Agent 元哈ーネス，支持多玩家智能体蜂群、自学习记忆及 RAG 集成。 |
| apache/maka | https://github.com/apache/maka | – / +141 today | 本地优先的 AI Agent 工作空间，以追加日志形式记录消息、工具调用与权限决策。 |
| obra/superpowers | https://github.com/obra/superpowers | – / +789 today | 具代理技能框架的软件开发方法论，强调可组合、可扩展的 Agent 能力。 |

---

### 📦 AI 应用（具体应用产品、垂直场景解决方案）
| 项目 | 链接 | Stars（总量 / 今日新增） | 一句话说明 |
|------|------|--------------------------|------------|
| harry0703/MoneyPrinterTurbo | https://github.com/harry0703/MoneyPrinterTurbo | 113 832 / +1 187 today | 利用大模型 + 自动化工作流，从主题或关键词一键生成高清短视频。 |
| PostHog/posthog | https://github.com/PostHog/posthog | – / +334 today | 面向自驱产品的全栈平台，包含 AI 可观测性、会话回放、特性标签与实验等开发者工具。 |
| browser-use/browser-use | https://github.com/browser-use/browser-use | 110 014 / – | 让 AI 能够安全自动化网页交互的库，支持任务规划、元素定位与结果验证。 |
| firecrawl/firecrawl | https://github.com/firecrawl/firecrawl | 170 528 / – | 面向 LLM 的可伸缩网页抓取、结构化与交互 API，提供爬取、清洗与上下文注入一站式服务。 |
| ScrapeGraphAI/Scrapegraph-ai | https://github.com/ScrapeGraphAI/Scrapegraph-ai | 29 797 / – | 基于 LLM 的智能网页爬虫，能够根据自然语言指令提取结构化数据。 |
| JuliusBrussee/caveman | https://github.com/JuliusBrussee/caveman | 100 140 / – | Claude Code 技能：用类原始人的极简表达减少 65% token 消耗，提升推理效率。 |
| f/prompts.chat | https://github.com/f/prompts.chat | 167 712 / – | 社区驱动的 ChatGPT / LLM Prom

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*