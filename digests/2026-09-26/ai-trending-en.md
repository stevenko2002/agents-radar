# AI Open Source Trends 2026-09-26

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-25 22:15 UTC

---



# AI Open Source Trends Report — 2026-09-26

---

## 1. Today's Highlights

The dominant narrative today is the **"agent harness" stack** — the layer between LLMs and real-world work. Google's open-source agentic runtime `ax`, `paperclip` (agent management UI), and `hindsight` (agent memory that learns) all landed on the trending list with explosive single-day star gains (1,300–1,850 stars), signaling that the developer community is racing to build the "operating system" for AI agents. Anthropic's dual release of `claude-plugins-official` and `skills` reinforces this: the industry is standardizing around **skills, plugins, and memory** as the three-legged stool of agent extensibility. Meanwhile, `univer` brings a bold vision — an office-suite runtime (spreadsheet, docs, slides, PDF) purpose-built for AI agents to manipulate — and NVIDIA's `Model-Optimizer` provides the complementary infrastructure layer for compressing and deploying models at the edge. The through-line: **the frontier has shifted from "bigger models" to "smarter, more capable agent scaffolding."**

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Stars | Why It Matters |
|---|---|---|
| [NVIDIA/Model-Optimizer](https://github.com/NVIDIA/Model-Optimizer) | ⭐360 today | Unified library for quantization, distillation, pruning, and speculative decoding — compress models for TensorRT-LLM, vLLM, and beyond. |
| [google/ax](https://github.com/google/ax) | ⭐1,386 today | Google's open agentic orchestration runtime — the infrastructure blueprint for running, scaling, and wiring together autonomous agents. |
| [pbakaus/impeccable](https://github.com/pbkaws/impeccable) | ⭐326 today | A design language that makes AI-generated UI and agent harnesses look professional — surprisingly critical as agent UI becomes a battleground. |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | ⭐7,473 | LLM evaluation platform covering 100+ datasets across knowledge, reasoning, coding, safety — the de facto standard for benchmarking. |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | ⭐4,726 | Learn LLM inference systems on Apple Silicon by building a tiny vLLM + Qwen — the best on-ramp for systems engineers. |

### 🤖 AI Agents / Workflows

| Project | Stars | Why It Matters |
|---|---|---|
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | ⭐1,853 today | The open-source app for managing agents at work — think "Figma for AI agent orchestration." Blazing hot launch. |
| [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) | ⭐1,652 today | Agent memory that learns — converts session transcripts into structured, queryable long-term memory. |
| [obra/superpowers](https://github.com/obra/superpowers) | ⭐465 today | Agentic skills framework and software development methodology — practical, opinionated, and immediately usable. |
| [anthropics/skills](https://github.com/anthropics/skills) | ⭐231 today | Official repository for Agent Skills from Anthropic — the canonical reference for the emerging skills protocol. |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | ⭐62 today | Anthropic-managed directory of high-quality Claude Code plugins — the ecosystem gateway for Claude extensibility. |
| [dream-num/univer](https://github.com/dream-num/univer) | ⭐1,048 today | Office harness for AI agents — spreadsheets, docs, slides, canvas, relational tables, and PDF in one runtime. |
| [androoAGI/starnet](https://github.com/androoAGI/starnet) | ⭐118 today | Local-first desktop agent harness with a pixel-art crew interface — BYO key, watch agents actually run. |
| [mattpocock/skills](https://github.com/mattpocock/skills) | ⭐588 today | Real-engineer-focused skills straight from a practitioner's `.agents` directory — pragmatic, battle-tested. |

### 📦 AI Applications

| Project | Stars | Why It Matters |
|---|---|---|
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | ⭐1,181 today / 57,413 total | The definitive open-source guide to building AI engineering systems from first principles — also trending in topic search. |
| [shy3130/tick-stock-panel](https://github.com/shy3130/tick-stock-panel) | ⭐31 today | Self-hosted, zero-ops A-share quant workspace with LLM-driven strategy customization and backtesting. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | ⭐65,646 | LLM-powered multi-market stock analysis with news, dashboard, and automated notifications. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | ⭐125,831 | Generate HD short videos from a topic using AI large models and automated workflows. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐56,383 | AI turns documents or topics into native PowerPoint decks with shapes, transitions, charts, and audio narration. |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐52,152 | AI productivity studio with smart chat, autonomous agents, and 300+ assistants — unified LLM access. |

### 🧠 LLMs / Training

| Project | Stars | Why It Matters |
|---|---|---|
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | ⭐105,573 | Step-by-step implementation of a ChatGPT-like LLM in PyTorch — the most-starred educational LLM repo. |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | ⭐62,569 | Train a 64M-parameter LLM from scratch in just 2 hours — lowers the barrier to understanding LLM training. |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | ⭐8,729 | Build modular, scalable LLM applications in Rust — brings systems-programming rigor to the LLM stack. |
| [acon96/home-llm](https://github.com/acon96/home-llm) | ⭐1,442 | Home Assistant integration using a local LLM to control smart home devices — practical edge AI. |
| [Mirrowel/LLM-API-Key-Proxy](https://github.com/Mirrowel/LLM-API-Key-Proxy) | ⭐556 | Universal LLM gateway: one API for every provider with intelligent load-balancing and OpenAI/Anthropic-compatible endpoints. |

### 🔍 RAG / Knowledge

| Project | Stars | Why It Matters |
|---|---|---|
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | ⭐94,698 | Persistent context across sessions for every agent — captures, compresses, and injects relevant context. Works with Claude Code, Codex, Gemini, and more. |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | ⭐121,440 | Turn any codebase, docs, SQL schemas, configs, and PDFs into a queryable knowledge graph — deterministic AST parsing, no vector store. |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | ⭐73,812 | Compress tool outputs, logs, and RAG chunks before they reach the LLM — 20% fewer tokens for coding agents, 60–95% for JSON. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐66,010 | The memory layer for AI agents — drop-in memory infrastructure built for production. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐91,305 | Leading open-source RAG engine fusing retrieval-augmented generation with agent capabilities. |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | ⭐35,854 | Document index for vectorless, reasoning-based RAG — a fundamentally different approach to retrieval. |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | ⭐30,985 | Open-source AI memory platform for agents — persistent long-term memory across sessions via a self-hosted knowledge graph. |
| [lancedb/lancedb](https://github.com/lancedb/lancedb) | ⭐11,532 | Developer-friendly embedded retrieval library for multimodal AI — search more, manage less. |

---

## 3. Trend Signal Analysis

Today's trending list is overwhelmingly dominated by **agent infrastructure** — the layer that sits between a raw LLM and the ability to actually do something useful. The numbers tell the story: `paperclip` (+1,853), `hindsight` (+1,652), `google/ax` (+1,386), and `ai-engineering-from-scratch` (+1,181) all posted four-figure single-day star gains. This is not a coincidence; it reflects a community-wide realization that **the model is the easy part** — the hard part is giving agents memory, skills, tools, and a runtime that can orchestrate them reliably.

Two sub-trends are converging. First, **"skills" as a standard primitive** — Anthropic's official `skills` repo, `mattpocock/skills`, and `obra/superpowers` all appeared today, suggesting the community is coalescing around a skills-based extensibility model (think: modular, composable capabilities that any agent can load). Second, **memory is becoming a first-class concern** — `hindsight`, `claude-mem`, `mem0`, and `cognee` all address the same problem from different angles: how does an agent remember what happened yesterday? The fact that four distinct memory frameworks are trending simultaneously signals that this is an unsolved, high-value problem everyone is racing to solve.

Notably, `univer` represents a new direction: **domain-specific agent runtimes** — instead of a general-purpose agent, an office-suite-native agent that can read, write, and manipulate spreadsheets, documents, and PDFs as a first-class capability. This "vertical agent stack" pattern (also seen in `tick-stock-panel` for quant trading) may be where the next wave of applications lives.

---

## 4. Community Hot Spots

- **Agent Skills & Plugin Ecosystems** — Anthropic's `skills` + `claude-plugins-official`, plus `mattpocock/skills` and `obra/superpowers`, are defining the standard for agent extensibility. Developers should watch this space — it's the new "SDK layer" of the AI stack.
- **Agent Memory Infrastructure** — `hindsight`, `claude-mem`, `mem0`, and `cognee` are all tackling persistent agent memory from different angles (session compression, vector DB, knowledge graph). This is the #1 unsolved problem in agent engineering right now.
- **Google's `ax` Runtime** — Google just open-sourced its agentic orchestration runtime. If it gains traction, it could become the "Kubernetes of AI agents" — worth studying for architecture patterns even if you don't adopt it.
- **Office/Document Agent Harnesses** — `univer` (office suite) and `ppt-master` (PowerPoint) signal a shift toward domain-specific agent runtimes that manipulate real-world file formats, not just text.
- **Token Efficiency & Compression** — `headroom` (token compression), `caveman` (65% token reduction via "caveman language"), and `impeccable` (AI design language) all address the same economic pressure: making agent interactions cheaper and more efficient. This is a quiet but powerful undercurrent.

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*