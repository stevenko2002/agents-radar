# AI Open Source Trends 2026-09-27

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-26 22:15 UTC

---

# AI Open Source Trends Report — 2026-09-27

## 1. Today's Highlights

Agent infrastructure is dominating today's momentum: **paperclipai/paperclip** (+2,589 stars) and **vectorize-io/hindsight** (+2,152 stars) are the two runaway leaders, signaling that "managing agents at work" and **persistent agent memory** are the current pain points the community is rushing to solve. A second clear signal is the **"agent harness" / agent-native workspace** theme — **dream-num/univer** repositions the office suite as a runtime for AI agents, while skill-routing packs like **reverse-skill** and memory layers like **claude-mem** and **headroom** extend what coding agents can retain and do. On the infrastructure side, **NVIDIA/Model-Optimizer** (+354) highlights sustained demand for quantization/distillation tooling tied to deployment frameworks (TensorRT-LLM, vLLM). Meanwhile, **MCP (Model Context Protocol)** keeps expanding its reach into new domains — **mobile-next/mobile-mcp** brings mobile automation (iOS/Android) into the protocol ecosystem. Across the topic search, the field is maturing from "build an agent" toward **memory, context compression, and token efficiency** as the differentiating layer.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure (frameworks, SDKs, inference engines, dev tools, CLI)

- **[NVIDIA/Model-Optimizer](https://github.com/NVIDIA/Model-Optimizer)** — ⭐ n/a (+354 today) — A unified library of SOTA model optimization (quantization, distillation, pruning, NAS, speculative decoding) targeting TensorRT-LLM/vLLM deployment; worth attention as the canonical NVIDIA-aligned compression toolkit.
- **[huggingface/transformers](https://github.com/huggingface/transformers)** — ⭐166,697 — The model-definition framework for text/vision/audio/multimodal models; remains the default substrate for both inference and training.
- **[ollama/ollama](https://github.com/ollama/ollama)** — ⭐181,773 — Local model runner supporting Kimi, GLM, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma; the de facto on-device LLM entry point.
- **[tensorflow/tensorflow](https://github.com/tensorflow/tensorflow)** — ⭐200,431 (+31 today) — The long-standing open ML framework, still trending steadily.
- **[pytorch/pytorch](https://github.com/pytorch/pytorch)** — ⭐103,372 — Tensors and dynamic neural networks with strong GPU acceleration; the research/industry standard.
- **[anthropics/claude-code-action](https://github.com/anthropics/claude-code-action)** — ⭐ n/a (+15 today) — Anthropic's official GitHub Action for Claude Code, wiring AI coding directly into CI.
- **[mobile-next/mobile-mcp](https://github.com/mobile-next/mobile-mcp)** — ⭐ n/a (+143 today) — An MCP server for mobile automation and scraping across iOS/Android, emulators, simulators and real devices — MCP expanding into device control.
- **[open-compass/opencompass](https://github.com/open-compass/opencompass)** — ⭐7,475 — LLM evaluation platform spanning OpenAI, Anthropic, Gemini, Qwen, GLM, DeepSeek across 100+ datasets.

### 🤖 AI Agents / Workflows (agent frameworks, automation, multi-agent systems)

- **[paperclipai/paperclip](https://github.com/paperclipai/paperclip)** — ⭐ n/a (+2,589 today) — The open-source app for managing agents at work; today's #1 trending repo and a strong signal for enterprise agent management.
- **[vectorize-io/hindsight](https://github.com/vectorize-io/hindsight)** — ⭐ n/a (+2,152 today) — "Agent Memory That Learns"; today's #2 trending repo, squarely on the memory/learning gap in agents.
- **[dream-num/univer](https://github.com/dream-num/univer)** — ⭐ n/a (+845 today) — "The Office Harness for AI Agents" unifying spreadsheets, docs, slides, canvas and PDF in one runtime.
- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** — ⭐267,914 — Agent harness performance optimization: skills, instincts, memory, security for Claude Code, Codex, Cursor and beyond.
- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** — ⭐249,224 — "The agent that grows with you," from a well-known open-model lab.
- **[langchain-ai/langchain](https://github.com/langchain-ai/langchain)** — ⭐147,112 — The agent engineering platform, still the broadest ecosystem for agent construction.
- **[browser-use/browser-use](https://github.com/browser-use/browser-use)** — ⭐116,403 — Agents that use the browser; the leading web-automation agent layer.
- **[zhayujie/CowAgent](https://github.com/zhayujie/CowAgent)** — ⭐47,125 — Self-evolving super assistant with planning, tools, memory, multi-agent and multi-channel support.

### 📦 AI Applications (specific apps, vertical solutions)

- **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** — ⭐126,094 — One-click HD short-video generation from a topic/keyword via an automated AI workflow.
- **[career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops)** — ⭐72,873 — Open-source AI job search running locally inside your coding CLI (Claude Code, Codex, OpenCode).
- **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** — ⭐56,502 — Turns documents/topics into native PowerPoint decks with charts, narration and templates.
- **[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents)** — ⭐108,767 — Multi-agent LLM financial trading framework.
- **[HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading)** — ⭐34,077 — A personal trading agent from the HKU data-intelligence lab.
- **[OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB)** — ⭐73,486 — Open data platform for analysts, quants and AI agents.
- **[microsoft/qlib](https://github.com/microsoft/qlib)** — ⭐48,876 — AI-oriented quant investment platform paired with RD-Agent for automated R&D.
- **[jeecgboot/JeecgBoot](https://github.com/jeecgboot/JeecgBoot)** — ⭐47,974 — Enterprise AI low-code platform generating full systems from a single prompt, with AI chat, knowledge base and MCP plugins.

### 🧠 LLMs / Training (model weights, training frameworks, fine-tuning tools)

- **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** — ⭐105,618 — Implement a ChatGPT-like LLM in PyTorch step by step; the definitive hands-on training guide.
- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** — ⭐62,660 — Train a 64M-parameter LLM from scratch in just 2 hours; strong minimal-training reference.
- **[galilai-group/stable-pretraining](https://github.com/galilai-group/stable-pretraining)** — ⭐320 — Reliable, minimal, scalable library for pretraining foundation and world models.
- **[skyzh/tiny-llm](https://github.com/skyzh/tiny-llm)** — ⭐4,729 — Learn LLM inference systems on Apple Silicon by building a tiny vLLM + Qwen.
- **[zi-yue-1129/DATAGEN](https://github.com/zi-yue-1129/DATAGEN)** — ⭐1,807 — Multi-agent research assistant automating hypothesis generation, data analysis and reporting.
- **[llm-jp/awesome-japanese-llm](https://github.com/llm-jp/awesome-japanese-llm)** — ⭐1,432 — Curated overview of Japanese LLMs; useful for regional/sovereign model tracking.
- **[testtimescaling/testtimescaling.github.io](https://github.com/testtimescaling/testtimescaling.github.io)** — ⭐112 — Survey repository on test-time scaling in LLMs (what/how/where/how well).
- **[rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch)** — ⭐58,315 (+828 today) — "Learn it. Build it. Ship it." — an end-to-end AI engineering curriculum.

### 🔍 RAG / Knowledge (vector DBs, retrieval-augmented generation, knowledge management)

- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** — ⭐185,102 — Web data API to search, scrape and interact at scale; a core ingestion primitive for RAG.
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** — ⭐91,332 — Open-source RAG engine fusing retrieval with agent capabilities as a context layer.
- **[unclecode/crawl4ai](https://github.com/unclecode/crawl4ai)** — ⭐84,309 — Open-source crawler turning any website into LLM-ready Markdown.
- **[run-llama/llama_index](https://github.com/run-llama/llama_index)** — ⭐52,326 — The document processing platform for AI; a foundational RAG framework.
- **[milvus-io/milvus](https://github.com/milvus-io/milvus)** — ⭐46,256 — High-performance cloud-native vector database for scalable ANN search.
- **[qdrant/qdrant](https://github.com/qdrant/qdrant)** — ⭐34,839 — Massive-scale vector database and search engine; widely used production option.
- **[StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN)** — ⭐12,968 — MLSys 2026 Best Paper; RAG on everything with 97% storage savings, fully private and on-device.
- **[VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)** — ⭐35,863 — "Vectorless, reasoning-based RAG" document index — an emerging counter-trend to embedding-first pipelines.
- **[topoteretes/cognee](https://github.com/topoteretes/cognee)** — ⭐30,992 — Open-source AI memory platform giving agents persistent long-term memory via a self-hosted knowledge graph.
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** — ⭐66,031 — Drop-in memory infrastructure for AI agents and apps, built for production.

---

## 3. Trend Signal Analysis

**Agent memory and "harnesses" are the explosive category today.** The two fastest-moving repos — **paperclip** (+2,589) and **hindsight** (+2,152) — are not model releases or frameworks; they are *operational* layers for agents: management and memory. This mirrors a broader shift from "can the agent do it?" to "can the agent remember, be governed, and stay coherent over time?" Repos like **cognee**, **mem0**, **claude-mem**, **headroom**, and **hindsight** all attack the same context-persistence problem from different angles (knowledge graph, drop-in memory, session capture, token compression), suggesting the market sees context management as the bottleneck to production agents.

**New directions appearing:** First, **agent-native productivity runtimes** — **univer** reframes the office suite as an "agent harness," and **ppt-master**/**career-ops** ship vertical agents that live inside your coding CLI rather than a separate app. Second, **token-efficiency tooling** is a genuinely new sub-category: **caveman** (65% token cuts via "caveman speech"), **headroom** (60–95% fewer tokens on JSON), and **Codewhale**'s prefix-cache-stability design all optimize cost, not capability. Third, **vectorless / reasoning-based RAG** (**PageIndex**, **LEANN**) is emerging as an alternative to embedding-heavy pipelines, and **MCP** is expanding beyond code into devices (**mobile-mcp**) and enterprise plugins (**JeecgBoot**).

**Industry linkage:** The persistent emphasis on **agent memory, skills, and harness optimization** (ECC, hermes-agent, CowAgent) tracks the maturing Claude Code / Codex / Cursor ecosystem — agents are now good enough that reliability, memory and cost, not raw reasoning, define the competitive edge. Meanwhile, NVIDIA's **Model-Optimizer** trending alongside **ollama**'s support for Kimi/GLM/MiniMax/DeepSeek/Qwen reflects the ongoing open-weight race, where efficient local and compressed deployment matters as much as the models themselves.

---

## 4. Community Hot Spots

- **Agent memory layer (hindsight, cognee, mem0, claude-mem)** — The single most contested space today; persistence and learning are the clearest unmet need and the fastest way to differentiate an agent product.
- **Token/context compression (headroom, caveman, Codewhale)** — Direct cost savings for anyone running coding agents at scale; watch this become a standard middleware layer (library + proxy + MCP server).
- **Agent-native workspaces & harnesses (univer, paperclip, ECC)** — Tools that manage, schedule and give agents "a place to work" are trending hard; likely the next platform battle.
- **Vectorless / reasoning-based RAG (PageIndex, LEANN)** — A credible challenge to embedding-first pipelines, especially for private, on-device and storage-constrained deployments.
- **MCP expansion beyond code (mobile-mcp, JeecgBoot, langchain4j)** — MCP is becoming the universal tool protocol; mobile/device control and enterprise low-code integration are the newest frontiers worth building for.

*Note: star totals for trending-list repos were reported as ⭐0 (with only today's delta), and several topic-search star counts appear unusually high — figures are reproduced as provided and should be treated as indicative rather than verified.*

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*