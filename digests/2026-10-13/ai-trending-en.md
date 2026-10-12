# AI Open Source Trends 2026-10-13

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-10-12 22:15 UTC

---

# AI Open Source Trends Report — 2026-10-13

**Filtering note:** Non-AI trending repos such as `gods-eye-view` (geospatial visualization), `artcraft` (crafting engine), and general non-AI lists/projects like `cs-video-courses`, `Julia`, and `Front-End-Checklist` were excluded. The report focuses on AI/ML infrastructure, agents, applications, LLM tooling, and RAG/knowledge systems.

---

## 1. Today's Highlights

Agent tooling is dominating today’s open-source attention: `morluto/rea` exploded with **+45,495 stars today**, while `mksglu/context-mode`, `Alishahryar1/free-claude-code`, and `cathrynlavery/diagram-design` show intense demand for coding-agent harnesses, context optimization, and agent-accessible tooling. Efficient inference is also back in focus: `lyogavin/airllm` (+886) and `microsoft/BitNet` (+134) push 70B models onto single 4GB GPUs and 1-bit LLM inference, respectively. The topic search reveals a mature agent ecosystem, led by `affaan-m/ECC` (277k stars), `NousResearch/hermes-agent` (253k), `firecrawl/firecrawl` (190k), `AutoGPT` (187k), and `ollama` (182k). Meanwhile, RAG is evolving beyond vector databases toward memory layers, context compression, knowledge graphs, and persistent session state. The overall signal: the community is optimizing the layer *around* models — orchestration, memory, context, retrieval, and cost — rather than only model training.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure
Frameworks, SDKs, inference engines, dev tools, CLI.

- [microsoft/BitNet](https://github.com/microsoft/BitNet) — ⭐0 total listed; **+134 today** — Official inference framework for 1-bit LLMs; pushes extreme quantization and efficient CPU/edge inference.
- [lyogavin/airllm](https://github.com/lyogavin/airllm) — ⭐0 total listed; **+886 today** — AirLLM enables 70B inference on a single 4GB GPU, a strong signal for memory-constrained local AI.
- [mksglu/context-mode](https://github.com/mksglu/context-mode) — ⭐0 total listed; **+394 today** — Context-window optimization for AI coding agents, with 98% tool-output reduction, session memory, and MCP + hooks routing across 17 platforms.
- [Alishahryar1/free-claude-code](https://github.com/Alishahryar1/free-claude-code) — ⭐0 total listed; **+705 today** — Multi-harness, multi-model free access to Claude Code, Codex, VSCode, OpenCode, and more; reflects demand for cost-reduced agent workflows.
- [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) — ⭐0 total listed; **+2,100 today** — Editorial diagram design for Claude Code, Codex, Copilot, Cursor, and others; a new class of agent-native creative/dev tooling.
- [ollama/ollama](https://github.com/ollama/ollama) — ⭐182,893 — Local model runner supporting Kimi, GLM, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma, and more.
- [huggingface/transformers](https://github.com/huggingface/transformers) — ⭐167,599 — The model-definition framework for state-of-the-art text, vision, audio, and multimodal models.
- [pytorch/pytorch](https://github.com/pytorch/pytorch) — ⭐104,736 — Core deep learning framework with strong GPU acceleration.

### 🤖 AI Agents / Workflows
Agent frameworks, automation, multi-agent systems.

- [morluto/rea](https://github.com/morluto/rea) — ⭐153,166; **+45,495 today** — Reverse engineer anything with agents, from app behavior down to native binaries; today’s breakout agent project.
- [affaan-m/ECC](https://github.com/affaan-m/ECC) — ⭐277,854 — Agent-harness performance optimization system covering skills, instincts, memory, security, and research-first development.
- [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) — ⭐253,108 — “The agent that grows with you”; one of the largest agent projects in the topic search.
- [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) — ⭐187,538 — The long-running vision of accessible autonomous agents.
- [langchain-ai/langchain](https://github.com/langchain-ai/langchain) — ⭐147,707 — The agent engineering platform; still a central dependency for LLM app builders.
- [browser-use/browser-use](https://github.com/browser-use/browser-use) — ⭐117,749 — Agents that use the browser; a key bridge between LLMs and real web tasks.
- [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) — ⭐43,150 — Build resilient agents with graph-based orchestration.
- [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) — ⭐37,968 — Frontend stack for agents and generative UI across React, Angular, Mobile, Slack, and the AG-UI Protocol.

### 📦 AI Applications
Specific apps, vertical solutions.

- [open-webui/open-webui](https://github.com/open-webui/open-webui) — ⭐154,891; **+142 today** — User-friendly AI interface supporting Ollama, OpenAI API, and more.
- [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) — ⭐130,251 — Generate HD short videos from a topic or keyword using AI workflows.
- [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) — ⭐74,181 — Open-source AI job search agent that scans boards, scores jobs against a CV, and tailors applications.
- [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) — ⭐66,242 — LLM-powered multi-market stock analysis system with real-time news and automated notifications.
- [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) — ⭐66,985 — Local-first agent experience; “stop renting your intelligence.”
- [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) — ⭐61,066 — AI turns documents or topics into native PowerPoint decks with charts, narration, and templates.
- [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) — ⭐52,575 — AI productivity studio with smart chat, autonomous agents, and 300+ assistants.
- [microsoft/qlib](https://github.com/microsoft/qlib) — ⭐49,313 — AI-oriented quant investment platform supporting supervised learning, market dynamics, and RL.

### 🧠 LLMs / Training
Model weights, training frameworks, fine-tuning tools, evaluation, and research resources.

- [open-compass/opencompass](https://github.com/open-compass/opencompass) — ⭐7,507 — LLM evaluation platform covering OpenAI, Anthropic, Gemini, Qwen, GLM, DeepSeek, and 100+ datasets.
- [genieincodebottle/generative-ai](https://github.com/genieincodebottle/generative-ai) — ⭐2,645 — Comprehensive generative AI roadmap, projects, use cases, and interview prep.
- [thinkwee/AgentsMeetRL](https://github.com/thinkwee/AgentsMeetRL) — ⭐1,864 — Awesome list for agentic RL; a fast-growing research direction.
- [zchoi/Awesome-Embodied-Robotics-and-Agent](https://github.com/zchoi/Awesome-Embodied-Robotics-and-Agent) — ⭐1,900 — Curated list of embodied AI and robotics with large language models.
- [thinkwee/AwesomeOPD](https://github.com/thinkwee/AwesomeOPD) — ⭐875 — Awesome list for on-policy distillation; relevant to efficient model improvement.
- [yingpengma/Awesome-Story-Generation](https://github.com/yingpengma/Awesome-Story-Generation) — ⭐665 — Papers on story generation and storytelling in the LLM era.
- [chrisliu298/awesome-llm-unlearning](https://github.com/chrisliu298/awesome-llm-unlearning) — ⭐630 — Resources for machine unlearning in large language models.

### 🔍 RAG / Knowledge
Vector databases, retrieval-augmented generation, knowledge management.

- [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) — ⭐190,843 — Web data infrastructure for AI agents; “building the library for superintelligence.”
- [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) — ⭐125,865 — Turns codebases, docs, SQL schemas, configs, and PDFs into a queryable knowledge graph with no vector store.
- [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) — ⭐100,063 — Persistent context across sessions for every agent; captures, compresses, and re-injects relevant context.
- [infiniflow/ragflow](https://github.com/infiniflow/ragflow) — ⭐92,074 — Leading open-source RAG engine fusing retrieval with agent capabilities.
- [mem0ai/mem0](https://github.com/mem0ai/mem0) — ⭐67,056 — Memory layer for AI agents; drop-in persistent context infrastructure.
- [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) — ⭐75,138 — Compresses tool outputs, logs, files, and RAG chunks before they reach the LLM; 60–95% fewer tokens for JSON.
- [qdrant/qdrant](https://github.com/qdrant/qdrant) — ⭐35,050 — High-performance, massive-scale vector database and vector search engine.
- [run-llama/llama_index](https://github.com/run-llama/llama_index) — ⭐52,468 — Document processing platform for AI and a foundational RAG framework.

---

## 3. Trend Signal Analysis

The most explosive attention today is not on model training but on the **agent harness layer**. `morluto/rea` gained +45,495 stars in a day, and `mksglu/context-mode`, `Alishahryar1/free-claude-code`, and `cathrynlavery/diagram-design` all target coding agents, context windows, tool routing, and agent-accessible design. This suggests the community is treating frontier models as increasingly commoditized and competing instead on orchestration, memory, cost control, and integration.

New technical directions are visible. First, **context engineering** is becoming a first-class discipline: `context-mode` sandboxes tool output for a 98% reduction, while `headroom` compresses RAG chunks and logs. Second, **memory is separating from RAG**: `mem0`, `claude-mem`, and `cognee` offer persistent agent memory rather than one-shot retrieval. Third, **vectorless and graph-based knowledge** is emerging: `Graphify` turns codebases into queryable knowledge graphs without a vector store, and `PageIndex` explores reasoning-based, vectorless RAG. Fourth, **efficient inference** remains urgent: `AirLLM`, `BitNet`, and `Picollm` push 4GB-GPU 70B inference, 1-bit LLMs, and on-device X-bit quantization.

The stack is also diversifying beyond Python. Rust agent engines (`rig`, `Codewhale`), TypeScript agent frontends (`CopilotKit`, `QwenPaw`), and Java LLM tooling (`langchain4j`) all appear in the topic search. Connections to recent model releases are clear: `ollama` advertises Kimi, GLM, MiniMax, DeepSeek, gpt-oss, Qwen, and Gemma, while multi-model and multi-harness tools dominate the hot list. The market is optimizing around many models, not one.

---

## 4. Community Hot Spots

- **Agent harness optimization** — [affaan-m/ECC](https://github.com/affaan-m/ECC), [mksglu/context-mode](https://github.com/mksglu/context-mode), and [Alishahryar1/free-claude-code](https://github.com/Alishahryar1/free-claude-code) are converging on skills, memory, security, context compression, and multi-harness routing. This is where developer pain is highest today.
- **Agent-native reverse engineering** — [morluto/rea](https://github.com/morluto/rea) with +45,495 stars today is a clear breakout; agents that inspect app behavior and native binaries could become a major security/dev-tooling category.
- **Persistent memory and context compression** — [mem0ai/mem0](https://github.com/mem0ai/mem0), [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem), and [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) address the core bottleneck of long-running agents: context is expensive, and memory must persist.
- **Vectorless / graph-based RAG** — [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) and [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) challenge the default vector-DB assumption, favoring deterministic AST parsing, knowledge graphs, and reasoning-based retrieval.
- **Efficient local inference** — [lyogavin/airllm](https://github.com/lyogavin/airllm), [microsoft/BitNet](https://github.com/microsoft/BitNet), and [Picovoice/picollm](https://github.com/Picovoice/picollm) signal strong demand for running larger models on smaller, cheaper, and more private hardware.

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*