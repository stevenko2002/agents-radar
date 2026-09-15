# AI Open Source Trends 2026-09-16

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-15 22:15 UTC

---

# AI Open Source Trends Report — 2026-09-16

## Step 1: Filtering

**Excluded from trending (non-AI):** [ever-co/ever-gauzy](https://github.com/ever-co/ever-gauzy) (ERP/CRM platform), [Homebrew/BrewUI](https://github.com/Homebrew/BrewUI) (macOS GUI), [NationalSecurityAgency/ghidra](https://github.com/ghidra) (RE framework), [tonhowtf/omniget](https://github.com/tonhowtf/omniget) (media downloader). Also excluded static lists with no AI engineering substance from topic search (cs-video-courses, generative-ai roadmap-style repos where borderline).

---

## Step 2 & 3: Structured Report

### 1. Today's Highlights

Today's trending list is dominated by **agent infrastructure and agent-native tooling**: Alibaba's open-code-review tool (+2,751 stars today) signals enterprise-grade LLM code review going mainstream, while three separate projects (atlas, pi, agent-skills) tackle the "managing multiple coding agents" problem — a genuinely new sub-category. On the local-inference side, colibri's disk-streaming MoE engine (+2,035) and VoiceStudio's fully-local voice stack (+2,081) show strong demand for running frontier-capable AI on consumer hardware. The agent theme extends into verticals: sales CRMs, research agents, and job-search automation all appear, suggesting agents are moving from frameworks into concrete workflow products.

### 2. Top Projects by Category

#### 🔧 AI Infrastructure

- **[alibaba/open-code-review](https://github.com/alibaba/open-code-review)** — 0⭐ (+2,751 today) — Alibaba's hybrid deterministic-pipeline + LLM-Agent code reviewer; battle-tested at scale, #1 trending today.
- **[JustVugg/colibri](https://github.com/JustVugg/colibri)** — 0⭐ (+2,035 today) — Pure-C, zero-dependency MoE inference engine streaming experts from disk; radical local-inference efficiency play.
- **[pacifio/atlas](https://github.com/pacifio/atlas)** — 0⭐ (+102 today) — "Source control for agents": track and query changes from multiple coding agents in one place.
- **[earendil-works/pi](https://github.com/earendil-works/pi)** — 0⭐ (+437 today) — Unified LLM API + agent loop + TUI + coding CLI toolkit in TypeScript.
- **[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)** — 0⭐ (+386 today) — Production-grade engineering skills for AI coding agents from a well-known Google engineer.
- **[ollama/ollama](https://github.com/ollama/ollama)** — 181,068⭐ — The de-facto local model runner, now surfacing Kimi/GLM/DeepSeek/gpt-oss.
- **[Mirrowel/LLM-API-Key-Proxy](https://github.com/Mirrowel/LLM-API-Key-Proxy)** — 550⭐ — Universal OpenAI/Anthropic-compatible gateway with multi-provider load balancing.
- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** — 72,329⭐ — Context/token compression layer claiming 20–95% token savings for coding agents.

#### 🤖 AI Agents / Workflows

- **[alphaXiv/OpenResearch](https://github.com/alphaXiv/OpenResearch)** — 0⭐ (+593 today) — Converts coding agents into research agents; notable new agent-vertical direction.
- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** — 245,850⭐ — Massive-community personal agent that "grows with you" via memory/skills.
- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** — 259,258⭐ — Agent harness performance optimization (skills, memory, instincts) across Claude Code/Codex/Cursor.
- **[langchain-ai/langchain](https://github.com/langchain-ai/langchain)** — 146,395⭐ — Now positioning itself as "the agent engineering platform."
- **[langchain-ai/langgraph](https://github.com/langchain-ai/langgraph)** — 41,710⭐ — Durable, resilient agent orchestration on top of LangChain.
- **[browser-use/browser-use](https://github.com/browser-use/browser-use)** — 114,736⭐ — The leading "agents that use the browser" library.
- **[Hmbown/Codewhale](https://github.com/Hmbown/Codewhale)** — 40,983⭐ — Community-driven open-source terminal coding agent in Rust.
- **[HKUDS/nanobot](https://github.com/HKUDS/nanobot)** — 48,193⭐ — Ultra-lightweight self-hosted agent framework with memory, MCP, multi-agent workflows.

#### 📦 AI Applications

- **[debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio)** — 0⭐ (+2,081 today) — Fully-local open-source ElevenLabs alternative across 646 languages; #2 hottest AI repo today.
- **[melgarafael/DeskcommCRM](https://github.com/melgarafael/DeskcommCRM)** — 0⭐ (+205 today) — Self-hosted "AI sales OS" CRM with native agents + WhatsApp; MCP-ready.
- **[career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops)** — 71,731⭐ — AI job-search pipeline running locally inside your coding CLI.
- **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** — 54,577⭐ — Documents/topics → native PowerPoint decks with animations and narration.
- **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** — 123,987⭐ — One-click AI short-video generation workflow.
- **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)** — 65,110⭐ — LLM-driven multi-market stock analysis with automated push notifications.
- **[siyuan-note/siyuan](https://github.com/siyuan-note/siyuan)** — 46,377⭐ — Privacy-first knowledge workspace where humans and AI agents collaborate.

#### 🧠 LLMs / Training

- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** — 61,208⭐ — Train a 64M-param LLM from scratch in ~2 hours; education hit.
- **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** — 105,028⭐ — Step-by-step PyTorch ChatGPT-style LLM implementation.
- **[huggingface/transformers](https://github.com/huggingface/transformers)** — 166,192⭐ — The model-definition framework spanning text/vision/audio/multimodal.
- **[skyzh/tiny-llm](https://github.com/skyzh/tiny-llm)** — 4,568⭐ — Build a tiny vLLM + Qwen on Apple Silicon; systems-level inference education.
- **[thinkwee/AgentsMeetRL](https://github.com/thinkwee/AgentsMeetRL)** — 1,842⭐ — Curated hub for Agentic RL, a fast-rising research direction.
- **[Picovoice/picollm](https://github.com/Picovoice/picollm)** — 318⭐ — On-device LLM inference via X-Bit quantization.

#### 🔍 RAG / Knowledge

- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** — 90,755⭐ — Leading RAG engine fusing retrieval with agent capabilities.
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** — 65,352⭐ — Drop-in persistent memory layer for production agents.
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** — 118,024⭐ — Codebase → queryable knowledge graph with deterministic AST parsing, no vector store.
- **[milvus-io/milvus](https://github.com/milvus-io/milvus)** — 46,123⭐ — Cloud-native high-performance vector database.
- **[VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)** — 35,655⭐ — "Vectorless" reasoning-based RAG document indexing — a notable counter-trend to embedding-first RAG.
- **[qdrant/qdrant](https://github.com/qdrant/qdrant)** — 34,582⭐ — Rust-native massive-scale vector search engine.
- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** — 93,971⭐ — Compressed persistent session context for every major coding agent.

### 3. Trend Signal Analysis

The dominant pattern today is the **professionalization of the coding-agent ecosystem**. Rather than new agent frameworks, the hottest new repos solve *management-layer* problems: atlas (version control for agent edits), agent-skills (curated production skills), open-code-review (LLM review of AI-written and human code), and ASC (decompilation front-ends "designed for Agents"). This indicates the community now assumes multiple concurrent coding agents as normal workflow and is building tooling around them — a sub-category that barely existed six months ago. A second signal is **local-first AI maturing**: colibri streams MoE experts from disk in pure C, and VoiceStudio delivers a full local ElevenLabs clone, both riding the efficiency techniques popularized by gpt-oss, Qwen, and DeepSeek's open releases. Third, **context engineering as a product** is consolidating — headroom, claude-mem, mem0, and graphify all monetize the token/context problem, with a visible counter-trend toward "vectorless," deterministic retrieval (PageIndex, graphify) challenging embedding orthodoxy. Vertical agent apps (DeskcommCRM, career-ops, OpenResearch) suggest agents are graduating from demos into revenue-generating workflows, likely catalyzed by MCP's emergence as the universal tool-connectivity standard — MCP appears in the descriptions of at least six projects across categories today.

### 4. Community Hot Spots

- **[alibaba/open-code-review](https://github.com/alibaba/open-code-review)** — +2,751 stars/day as a brand-new repo; enterprise AI code review is an immediate opportunity area, especially the hybrid deterministic+LLM architecture.
- **[JustVugg/colibri](https://github.com/JustVugg/colibri)** — Disk-streamed MoE inference in pure C is a novel efficiency direction; watch it closely if you build local inference tooling.
- **Agent-harness tooling** ([atlas](https://github.com/pacifio/atlas), [agent-skills](https://github.com/addyosmani/agent-skills), [ECC](https://github.com/affaan-m/ECC)) — The "meta-layer" above coding agents is the fastest-forming new niche; early contributors will shape conventions.
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** + [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) — The deterministic/graph-based "vectorless RAG" movement is gaining serious star momentum and could reshape retrieval defaults.
- **[debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio)** — Local voice AI across 646 languages fills a clear gap (no mature OSS ElevenLabs equivalent); strong candidate for rapid ecosystem growth.

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*