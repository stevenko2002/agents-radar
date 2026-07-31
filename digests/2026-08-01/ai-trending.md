# AI 开源趋势日报 2026-08-01

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-31 22:16 UTC

---

# AI 开源趋势日报

> 报告日期：2026-08-01 | 数据来源：GitHub Trending + AI 主题搜索

---

## 一、今日速览

今日 AI 开源生态呈现"Agent 工具链爆发"与"开源替代闭源"两条主线共振。**Reverse-Skill**（+612）、**OpenWork**（+796）、**last30days-skill**（+660）三款 AI 编码/研究 Agent 工具同时涌入热榜，反映社区对 AI 编程助手的自定义与扩展需求持续升温。**微软 AI-For-Beginners** 单日新增 1,592 stars，凸显 AI 入门教育仍是最大流量入口。与此同时，**Ollama**、**OpenWebUI** 等推理与交互层基础设施稳居高位，**向量数据库**与**RAG**赛道趋于成熟，竞争焦点从"有没有"转向"好不好用"。Deepfakes/faceswap 持续活跃，提示 AI 生成内容的伦理与治理仍是社区关注议题。

---

## 二、各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

| 项目 | Stars | 今日新增 | 说明 |
|------|-------|----------|------|
| [github/copilot-sdk](https://github.com/github/copilot-sdk) | ⭐7 | +7 | GitHub 官方多平台 SDK，将 Copilot Agent 集成到第三方应用和服务中，是扩展 Copilot 生态的关键入口 |
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐177,451 | — | 本地 LLM 推理引擎，支持 Kimi-K2.6、GLM-5.2、DeepSeek、Gemma 等模型一键运行，是本地 AI 的核心基础设施 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | ⭐147,479 | — | 兼容 Ollama/OpenAI 的用户友好 AI 界面，自托管聊天与 Agent 交互前端 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | ⭐143,110 | — | Agent 工程平台，提供 LLM 编排、工具调用、链式推理等核心能力 |
| [microsoft/AI-For-Beginners](https://github.com/microsoft/AI-For-Beginners) | — | +1,592 | 微软出品 12 周 AI 入门教程，24 节课覆盖 AI 基础概念，今日热度爆发反映教育需求旺盛 |
| [The-Pocket/PocketFlow](https://github.com/The-Pocket/PocketFlow) | ⭐11,077 | — | 100 行代码即可搭建 LLM 应用与 Agent 的极简框架，适合快速原型 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | ⭐8,113 | — | Rust 编写的模块化 LLM 应用框架，面向系统级开发者 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | ⭐7,251 | — | 支持 100+ 数据集的 LLM 综合评估平台，覆盖 Llama3、GPT-4、Qwen、Claude 等主流模型 |

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | Stars | 今日新增 | 说明 |
|------|-------|----------|------|
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐223,384 | — | "The agent that grows with you"，持续进化的自托管 AI Agent，今日热榜外仍居高位 |
| [different-ai/openwork](https://github.com/different-ai/openwork) | ⭐0 | +796 | Claude Cowork 的开源替代，基于 OpenCode 构建，今日登榜热度最高 |
| [zhaoxuya520/reverse-skill](https://github.com/zhaoxuya520/reverse-skill) | ⭐0 | +612 | 逆向/渗透/安全领域的 AI 技能路由器，支持 Claude Code/Kiro/Cursor/Cline，自动进化经验库 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | ⭐0 | +660 | AI Agent 研究技能，跨 Reddit/X/YouTube/HN/Polymarket 合成主题摘要 |
| [Affaan-m/ECC](https://github.com/affaan-m/ECC) | ⭐236,621 | — | Agent Harness 性能优化系统，为 Claude Code/Codex/OpenCode/Cursor 提供技能、记忆、安全等增强 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | ⭐72,861 | — | 从零构建的 Claude Code 类 Agent Harness，极简但完整 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | ⭐46,480 | — | 超轻量自托管个人 AI Agent 框架，含 WebUI、工具、记忆、MCP、多智能体工作流 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | ⭐28,975 | — | 个人交易 Agent，将 AI 引入量化投资场景 |

### 📦 AI 应用（具体应用产品、垂直场景解决方案）

| 项目 | Stars | 今日新增 | 说明 |
|------|-------|----------|------|
| [deepfakes/faceswap](https://github.com/deepfakes/faceswap) | ⭐0 | +157 | 面向所有人的 Deepfakes 软件，持续活跃于 AI 生成内容领域 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | ⭐158,698 | — | Web 搜索、抓取与交互的规模化 API，是 AI Agent 接入互联网的关键桥梁 |
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐150,928 | — | 一体化 Agentic 工作流与 RAG 构建平台，支持多模型与多云部署 |
| [mintplex-labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | ⭐64,165 | — | 本地优先的完整 Agent 体验，内置向量存储与多模型支持 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | ⭐99,708 | — | 将代码库转为可查询知识图谱的 /graphify skill，无需向量存储 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐42,191 | — | AI 将文档/主题一键生成为原生 PowerPoint，含动画、图表与配音 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | ⭐94,901 | — | Claude Code 专用 skill，通过简化语言削减 65% tokens |

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

| 项目 | Stars | 今日新增 | 说明 |
|------|-------|----------|------|
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | ⭐196,634 | — | 经典开源 ML 框架，持续更新仍是行业标配 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | ⭐102,090 | — | 动态神经网络与 GPU 加速训练框架，LLM 时代仍是首选训练后端 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*