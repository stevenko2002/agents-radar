# AI 开源趋势日报 2026-08-20

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-19 22:15 UTC

---

**AI 开源趋势日报（2026‑08‑20）**  

---

### 今日速览  
今日 GitHub Trending 榜单中，AI 智能体相关项目呈爆发式增长 —— 本地多智能体 harness、Agent 技能框架以及针对 AI Agent 的网络安全技能库均获得数千至上千星的单日涨幅。与此同时，基于 Apple Silicon 的 LLM 推理服务（omlx）和端到端的 AI 视频生成工作流（MoneyPrinterTurbo）也成为热点，显示社区正把大模型能力向“端侧实时交互”和“垂直内容创作”两端延伸。RAG 与知识库领域依旧保持活跃，向量数据库与记忆层项目获得持续关注。整体来看，**智能体编排与本地推理**是今日最受瞩目的两条主线。

---

## 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

| 项目 | 链接 | 星数（总量 / 今日新增） | 一句话说明 |
|------|------|------------------------|------------|
| **ollama/ollama** | <https://github.com/ollama/ollama> | 178,979 / – | 一键获取并运行本地大模型（支持 Kimi‑K2.6、Qwen 等），已成开发者本地 LLMs 的事实标准。 |
| **vllm-project/vllm** | <https://github.com/vllm-project/vllm> | 89,468 / – | 高吞吐、高效内存的 LLM 推理与服务引擎，支持连续批处理与张量并行。 |
| **huggingface/transformers** | <https://github.com/huggingface/transformers> | 164,269 / – | 提供 SOTA 文本、视觉、音频及多模态模型的统一定义库，兼容训练与推理。 |
| **langchain-ai/langchain** | <https://github.com/langchain-ai/langchain> | 144,576 / – | Agent 工程平台，封装 LLM 调用、工具链、记忆与链式编程，快速构建复杂工作流。 |
| **browser-use/browser-use** | <https://github.com/browser-use/browser-use> | 109,775 / – | 让 AI Agent 能够自动化浏览器操作，支持页面交互、数据抓取与自动填表。 |
| **open-webui/open-webui** | <https://github.com/open-webui/open-webui> | 149,266 / – | 用户友好的 AI 聊天界面，兼容 Ollama、OpenAI API 等多种后端，便于本地演示与二次开发。 |
| **jundot/omlx** *(今日趋势)* | <https://github.com/jundot/omlx> | – / +467 今日 | 针对 Apple Silicon 的 LLM 推理服务，内置连续批处理与 SSD 缓存，可从菜单栏直接管理。 |

---

## 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | 链接 | 星数（总量 / 今日新增） | 一句话说明 |
|------|------|------------------------|------------|
| **NousResearch/hermes-agent** | <https://github.com/NousResearch/hermes-agent> | 233,030 / – | 自成长的 AI Agent 框架，强调记忆演进与任务自适应。 |
| **shareAI-lab/learn-claude-code** | <https://github.com/shareAI-lab/learn-claude-code> | 74,676 / – | 零代码起手的「Claude Code」式 Agent Harness，演示如何从零构建可扩展的智能体。 |
| **Hmbown/CodeWhale** | <https://github.com/Hmbown/CodeWhale> | 40,830 / – | 社区驱动的 Agent Harness，提供工具调用、记忆与多智能体协作的基础设施。 |
| **agentscope-ai/QwenPaw** | <https://github.com/agentscope-ai/QwenPaw> | 34,097 / – | 个人 AI 助手，支持本地部署、多聊天平台接入以及易于扩展的技能插件。 |
| **affaan-m/ECC** | <https://github.com/affaan-m/ECC> | 241,168 / – | Agent Harness 性能优化体系，聚焦技能、本能、记忆、安全及研发流程，兼容 Claude Code、Codex 等。 |
| **mattpocock/skills** *(今日趋势)* | <https://github.com/mattpocock/skills> | – / +1,214 今日 | 从个人 .agents 目录提炼出的通用 Agent 技能库，便于快速在各平台复用。 |
| **obra/superpowers** *(今日趋势)* | <https://github.com/obra/superpowers> | – / +514 今日 | Agentic Skills 框架与软件开发方法论，强调通过技能组合实现自主研发。 |
| **chaitanyagiri/munder-difflin** *(今日趋势)* | <https://github.com/chaitanyagiri/munder-difflin> | – / +797 今日 | 本地多智能体 harness，支持任务划分、工具调用与状态同步，适合轻量级协作场景。 |

---

## 📦 AI 应用（具体应用产品、垂直场景解决方案）

| 项目 | 链接 | 星数（总量 / 今日新增） | 一句话说明 |
|------|------|------------------------|------------|
| **harry0703/MoneyPrinterTurbo** *(今日趋势)* | <https://github.com/harry0703/MoneyPrinterTurbo> | 110,485 / +2,221 今日 | 利用大模型与自动化工作流，根据主题或关键词一键生成高清短视频，展示内容创作的端到端 AI 化。 |
| **santifer/career-ops** *(今日趋势 & 主题)* | <https://github.com/santifer/career-ops> | 65,720 / +193 今日 | 开源 AI 求职助手：爬取招聘网站、用 A‑F 评价模型打分、自动定制简历并追踪申请进度。 |
| **CherryHQ/cherry-studio** | <https://github.com/CherryHQ/cherry-studio> | 50,787 / – | AI 生产力工作室，集成智能聊天、自主 Agent 与 300+ 助手，提供统一前端访问前沿 LLM。 |
| **hugohe3/ppt-master** | <https://github.com/hugohe3/ppt-master> | 48,009 / – | 将文档或主题转换为原生 PowerPoint 演示文稿，支持形状、过渡、动画、数据图表及音频旁白。 |
| **ZhuLinsen/daily_stock_analysis** | <https://github.com/ZhuLinsen/daily_stock_analysis> | 63,387 / – | LLM 驱动的多市场股票智能分析系统：融合多源行情、实时新闻、决策看板与自动推送。 |
| **FlowiseAI/Flowise** | <https://github.com/FlowiseAI/Flowise> | 55,382 / – | 可视化搭建 AI Agent 工作流，支持 RAG、工具调用与多模型编排，低代码快速原型。 |
| **JeecgBoot/JeecgBoot** | <https://github.com/jeecgboot/JeecgBoot> | 47,415 / – | 企业级 AI + 低代码平台，一句话即可生成前后端代码，内置 AI 聊天、知识库、流程编排等能力。 |

---

## 🧠 大模型/训练（模型权重、训练框架、微调工具）

| 项目 | 链接 | 星数（总量 / 今日新增） | 一句话说明 |
|------|------|------------------------|------------|
| **ollama/ollama** | <https://github.com/ollama/ollama> | 178,979 / – | 本地模型运行器，提供模型下载、版本管理与 CLI/API 调用，便于快速实验。 |
| **vllm-project/vllm** | <https://github.com/vllm-project/vllm> | 89,468 / – | 高效推理与服务引擎，适合大规模批量生成与在线服务场景。 |
| **huggingface/transformers** | <https://github.com/huggingface/transformers> | 164,269 / – | 预训练模型库，覆盖语言、视觉、音频及多模态，支持微调与推理。 |
| **pytorch/pytorch** | <https://github.com/pytorch/pytorch> | 102,486 / – | 主流动态图深度学习框架，提供张量计算、GPU 加速与丰富的生态。 |
| **tensorflow/tensorflow** | <https://github.com/tensorflow/tensorflow> | 197,068 / – | Google 出品的端到端 ML 平台，支持从模型定义到分布式训练与部署。 |
| **ultralytics/ultralytics** | <https://github.com/ultralytics/ultralytics> | 60,771 / – | YOLO 系列目标检测/分割库，提供预训练权重与易用的训练/推理 API。 |
| **opencompass/opencompass** | <https://github.com/open-compass/opencompass> | 7,317 / – | LLM 评测平台，支持 Llama、Mistral、Qwen 等百余模型在 100+ 数据集上的全面基准。 |

---

## 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

| 项目 |

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*