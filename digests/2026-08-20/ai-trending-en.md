# AI Open Source Trends 2026-08-20

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-19 22:15 UTC

---

**AI Open‑Source Trends Report – 2026‑08‑20**  

---

### 1. Today's Highlights  
The hottest GitHub activity today centers on **agent‑skill ecosystems** and **LLM‑powered creative tools**.  Three projects exploded in new stars:  

* **MoneyPrinterTurbo** (+2 221★) – a one‑click short‑video generator that chains LLMs with automated editing workflows.  
* **mattpocock/skills** (+1 214★) and **obra/superpowers** (+514★) – lightweight, shell‑based “skill” collections that let agents acquire new capabilities on the fly.  
* **OpenViking** (+803★) – a self‑evolving context database that unifies agent memory, RAG and skill storage.  

Together they signal a shift from monolithic agent frameworks to **modular, plug‑and‑play skill libraries** backed by persistent, evolving knowledge stores.  At the same time, **Apple‑Silicon‑optimized LLM serving** (omlx) and **AI‑driven job‑search automation** (career‑ops) are gaining traction, showing that developers are chasing both performance‑native inference and vertical AI applications.

---

### 2. Top Projects by Category  

| Category | Project (link) | Stars (total + today’s new) | Why it matters today |
|----------|----------------|----------------------------|----------------------|
| **🔧 AI Infrastructure** (frameworks, SDKs, inference engines, dev tools, CLI) | [vllm-project/vllm](https://github.com/vllm-project/vllm) | 89 468★ | High‑throughput, memory‑efficient LLM inference engine; now the de‑facto serving layer for many open‑source LLMs. |
| | [ollama/ollama](https://github.com/ollama/ollama) | 178 979★ | Simple CLI to run Llama, Qwen, DeepSeek, etc., locally; fuels the “run‑anywhere LLM” movement. |
| | [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 144 576★ | The go‑to agent‑engineering platform; recent releases added native MCP tool‑calling and improved tracing. |
| | [huggingface/transformers](https://github.com/huggingface/transformers) | 164 269★ | Unified library for state‑of‑the‑art models; continues to add support for new architectures (e.g., Mamba, RetNet). |
| | [open-webui/open-webui](https://github.com/open-webui/open-webui) | 149 266★ | User‑friendly chat UI that works with Ollama, OpenAI, Anthropic; lowers barrier for non‑technical users to try LLMs. |
| | [browser-use/browser-use](https://github.com/browser-use/browser-use) | 109 775★ | Enables LLMs to interact with the web via DOM‑level automation; crucial for agent‑based research assistants. |
| | [jundot/omlx](https://github.com/jundot/omlx) | +467★ today (total ≈ 5 k★) | macOS‑native LLM inference server with continuous batching & SSD caching; shows growing interest in Apple‑Silicon‑optimized serving. |
| **🤖 AI Agents / Workflows** (agent frameworks, automation, multi‑agent systems) | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 233 030★ | Personal AI assistant that evolves with user interactions; demonstrates long‑term memory + skill‑learning loop. |
| | [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 74 676★ | Minimal “agent harness” built from scratch; ideal for developers wanting to understand the core loop of Claude‑Code‑style agents. |
| | [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 47 181★ | Ultra‑lightweight, self‑hosted agent framework with WebUI, MCP, and multi‑agent workflows. |
| | [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 46 574★ | Extensible assistant harness supporting multiple models, channels, and self‑evolution via memory. |
| | [mattpocock/skills](https://github.com/mattpocock/skills) | +1 214★ today (total ≈ 2 k★) | Curated collection of reusable agent skills (shell scripts, prompts) that can be dropped into any harness. |
| | [obra/superpowers](https://github.com/obra/superpowers) | +514★ today (total ≈ 1 k★) | Agentic skills framework paired with a software‑development methodology; encourages “skill‑first” engineering. |
| | [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | +767★ today (total ≈ 1 k★) | 817 structured cybersecurity skills mapped to MITRE, NIST, ATLAS etc.; shows domain‑specific skill sharing is taking off. |
| **📦 AI Applications** (specific apps, vertical solutions) | [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 110 485★ + 2 221★ today | Turns a topic/keyword into HD short videos using LLMs + automated editing; exemplifies AI‑generated media pipelines. |
| | [santifer/career-ops](https://github.com/santifer/career-ops) | 65 720★ + 193★ today | Scrapes job portals, scores listings with an A‑F rubric, tailors CVs, and tracks applications—all run locally via Claude‑Code/Codex. |
| | [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | 133 252★ | Curated list of 100+ open‑source AI agents, agent skills, and RAG apps; a discovery hub for builders. |
| | [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55 382★ | Drag‑and‑drop UI to build agentic workflows and RAG pipelines; lowers code barrier for enterprise prototyping. |
| | [JeecgBoot/JeecgBoot](https://github.com/jeecgboot/JeecgBoot) | 47 415★ | Low‑code platform that auto‑generates front‑end, back‑end, and AI‑skill modules (chat, knowledge base, MCP). |
| | [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 88 836★ | Leading open‑source RAG engine fused with agent capabilities; provides a production‑ready context layer for LLMs. |
| | [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 50 787★ | AI productivity studio with smart chat, autonomous agents, and 300+ assistants; unified access to frontier LLMs. |
| | [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 48 009★ | Converts documents or topics into native PowerPoint decks with animations, charts, and narration—pure LLM‑driven slide generation. |
| **🧠 LLMs / Training** (model weights, training frameworks, fine‑tuning tools) | [pytorch/pytorch](https://github.com/pytorch/pytorch) | 102 486★ | Core deep‑learning framework; recent 2.4 release adds better sparsity and distributed inference for LLMs. |
| | [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | 197 068★ | Continues to support large‑scale model training; new XLA‑CPU backend improves cost‑efficiency. |
| | [huggingface/transformers](https://github.com/huggingface/transformers) | 164 269★ | See Infrastructure; also the primary hub for sharing and fine‑tuning community models. |
| | [vllm-project/vllm](https://github.com/vllm-project/vllm) | 89 468★ | Inference engine that enables efficient serving of fine‑tuned LoRA/QLoRA adapters. |
| | [open-compass/opencompass](https://github.com/open-compass/opencompass) | 7 317★ | LLM evaluation benchmarks; now includes new suites for reasoning, tool use, and long‑context understanding. |
| | [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | 4 508★ | Minimal vLLM‑style inference system on Apple Silicon for systems‑engineer education; highlights edge‑LLM interest. |
| | [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | 60 771★ | State‑of‑the‑art YOLO models; recent YOLO‑v11 adds real‑time pose estimation for robotics agents. |
| **🔍 RAG / Knowledge** (vector DBs, retrieval‑augmented generation, knowledge management) | [mem0ai/mem0](https://github.com/mem0ai/mem0) | 63 615★ | Universal memory layer for AI agents; stores facts, conversations, and preferences across

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*