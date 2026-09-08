# AI Open Source Trends 2026-09-09

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-08 22:15 UTC

---

# AI Open Source Trends Report — 2026-09-09

---

## 1. Today's Highlights

Today's trending list is dominated by **agent "skills" catalogs and harness frameworks for Claude Code / Codex-style coding agents** — at least 7 of the 16 trending repos (openai/skills, affaan-m/ECC, obra/superpowers, coreyhaines31/marketingskills, multica-ai/andrej-karpathy-skills, cathrynlavery/diagram-design, ayghri/i-have-adhd) sit squarely in this niche, signaling that the community has moved past "build an agent" into **composable agent capability packs**. **OpenAI publishing openai/skills** alongside a refresh of **openai/plugins**, plus **heygen-com/hyperframes** (+2,628 stars) bridging HTML→video for agents, and **mksglu/context-mode** (+652) attacking the context-window cost problem, marks an unmistakable shift toward production-grade, modular agent infrastructure for the post-prompt-engineering era.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure
- **[openai/skills](https://github.com/openai/skills)** — ⭐0 (+490 today). Official Skills Catalog for Codex; a watershed moment where OpenAI blesses the "skills" abstraction as core to their agent stack.
- **[openai/plugins](https://github.com/openai/plugins)** — ⭐0 (+176 today). Refreshed OpenAI Plugins repo returns as the connective tissue between agents and external tools.
- **[mksglu/context-mode](https://github.com/mksglu/context-mode)** — ⭐0 (+652 today). Context-window optimization layer claiming 98% tool-output reduction with MCP + hooks across 17 agent CLIs.
- **[ollama/ollama](https://github.com/ollama/ollama)** — ⭐180,476. Local inference runtime now shipping Kimi-K2.6, GLM-5.2, MiniMax, DeepSeek, gpt-oss and Qwen — the de-facto local-model substrate.
- **[huggingface/transformers](https://github.com/huggingface/transformers)** — ⭐165,006. Still the canonical training/inference framework across text, vision, audio and multimodal.
- **[0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig)** — ⭐8,561. Modular, type-safe LLM applications in Rust — first major serious Rust-agent stack gaining traction.
- **[Mirrowel/LLM-API-Key-Proxy](https://github.com/Mirrowel/LLM-API-Key-Proxy)** — ⭐548. Universal multi-provider gateway with OpenAI/Anthropic-compatible endpoints and load-balancing.

### 🤖 AI Agents / Workflows
- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** — ⭐254,221 (+1,426 today). The runaway trending agent harness — skills, instincts, memory and security packaged for Claude Code/Codex/Cursor/Opencode.
- **[obra/superpowers](https://github.com/obra/superpowers)** — ⭐0 (+446 today). Agentic skills framework + software dev methodology — competing canonical "agent OS".
- **[heygen-com/hyperframes](https://github.com/heygen-com/hyperframes)** — ⭐0 (+2,628 today). Highest star velocity of the day — programmatic video rendering from HTML, built for agent pipelines.
- **[browser-use/browser-use](https://github.com/browser-use/browser-use)** — ⭐113,429 (+320 today). The standard "let your agent drive a browser" library — now joined by a stealth sibling.
- **[jo-inc/camofox-browser](https://github.com/jo-inc/camofox-browser)** — ⭐0 (+872 today). Stealth headless browser that bypasses Cloudflare/bot detection — drop-in for the browser-use ecosystem.
- **[coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills)** — ⭐0 (+666 today). Vertical CRO/SEO/copy skills pack — agent skills moving into business domains, not just coding.
- **[multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills)** — ⭐0 (+533 today). A single CLAUDE.md distilled from Karpathy's LLM-coding pitfalls — personality/system-prompt tuning as a first-class distribution format.
- **[HKUDS/nanobot](https://github.com/HKUDS/nanobot)** — ⭐47,899. Ultra-lightweight self-hosted Python agent with WebUI/MCP/memory — open-source alternative to OpenClaw-class frameworks.
- **[LangChain](https://github.com/langchain-ai/langchain) / [LangGraph](https://github.com/langchain-ai/langgraph)** — ⭐145,960 / 41,273. The incumbent agent platforms; LangGraph continues to own "resilient" multi-step agent graphs.

### 📦 AI Applications
- **[open-webui/open-webui](https://github.com/open-webui/open-webui)** — ⭐151,372. The leading self-hosted ChatGPT-style interface, native Ollama + OpenAI API support.
- **[The-Swarm-Corporation/AutoHedge](https://github.com/The-Swarm-Corporation/AutoHedge)** — ⭐0 (+494 today). Swarm-intelligence trading agent: turnkey autonomous hedge fund in minutes.
- **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** — ⭐53,074. AI that emits real native PowerPoint (.pptx) decks — native shapes, transitions, audio narration from speaker notes.
- **[cherry-studio](https://github.com/CherryHQ/cherry-studio)** — ⭐51,576. Multi-LLM productivity studio with 300+ assistants and autonomous agents.
- **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)** — ⭐64,801. LLM-driven multi-market stock analysis with zero-cost scheduled runs.
- **[Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps)** — ⭐136,689. The canonical 100+ AI-agent and RAG-app gallery — best "what's been built" index.
- **[Career-Ops](https://github.com/career-ops-hq/career-ops)** — ⭐70,622. Job-search CLI agent that scans portals, scores listings and tailors CVs locally.

### 🧠 LLMs / Training
- **[pytorch/pytorch](https://github.com/pytorch/pytorch)** — ⭐102,863. Still the dominant training framework.
- **[tensorflow/tensorflow](https://github.com/tensorflow/tensorflow)** — ⭐199,329. Production ML framework incumbent.
- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** — ⭐59,874. Train a 64M-parameter LLM from scratch in 2h — the canonical education-to-training pipeline.
- **[open-compass/opencompass](https://github.com/open-compass/opencompass)** — ⭐7,402. Standard LLM eval harness across 100+ datasets including Llama3, Mistral, Qwen, GLM, Claude.
- **[skyzh/tiny-llm](https://github.com/skyzh/tiny-llm)** — ⭐4,553. Build a tiny vLLM + Qwen on Apple Silicon — systems-engineering pedagogy for inference internals.
- **[ridgerchu/matmulfreellm](https://github.com/ridgerchu/matmulfreellm)** — ⭐3,090. MatMul-free LM implementation — efficiency research frontier.
- **[AkaliKong/MiniOneRec](https://github.com/AkaliKong/MiniOneRec)** — ⭐1,797. Minimal reproduction of OneRec — recommender-systems LLMs trending.
- **[LiberCoders/FeatureBench](https://github.com/LiberCoders/FeatureBench)** — ⭐91. ICLR 2026 — first agentic-coding benchmark for complex feature development.

### 🔍 RAG / Knowledge
- **[ragflow](https://github.com/infiniflow/ragflow)** — ⭐90,311. Leading open-source RAG engine fused with agent capabilities — context layer for production LLMs.
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** — ⭐64,927. The memory layer for agents — drop-in persistent context infrastructure.
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** — ⭐116,050. Code→queryable knowledge graph via local AST parsing (no vector store). A direct shot at the vector-RAG orthodoxy.
- **[milvus](https://github.com/milvus-io/milvus)** — ⭐46,026. Cloud-native high-performance vector DB — still scaling for the agent era.
- **[VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)** — ⭐35,583. Vectorless, reasoning-based RAG over long documents — a top contender to chunk+embed.
- **[StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN)** — ⭐12,920. MLsys2026 Best Paper — 97% storage savings for fully-local RAG.
- **[topoteretes/cognee](https://github.com/topoteretes/cognee)** — ⭐30,598. Self-hosted knowledge-graph memory engine for agents — long-term persistent context.
- **[qdrant](https://github.com/qdrant/qdrant) / [weaviate](https://github.com/weaviate/weaviate) / [lancedb](https://github.com/lancedb/lancedb) / [alibaba/zvec](https://github.com/alibaba/zvec)** — battle-tested vector DB quartet, zvec notable as a lightweight in-process C++ option.

---

## 3. Trend Signal Analysis

The most explosive signal is the **"Skill" abstraction entering the platform layer** — OpenAI's official openai/skills repo, the Karpathy-prompt-as-`CLAUDE.md` pattern, and a whole sub-ecosystem (ECC, superpowers, marketingskills, diagram-design, i-have-adhd) indicate that the community has agreed on a unit of distribution larger than a prompt and smaller than a fine-tune: a **packaged capability with tool permissions, instincts and test outcomes**. This is functionally what Anthropic, OpenAI, and IDE vendors are now standardizing around.

A second unmistakable signal is the **context-economy arms race**. mksglu/context-mode (98% output reduction), headroomlabs-ai/headroom (20–95% token compression), JuliusBrussee/caveman ("cut 65% of tokens by talking like caveman"), and DietrichGebert/ponytail ("the best code is the code you never wrote") all launched with the same thesis: context windows are saturated and the next 10x productivity gain comes from *less*, not *more*. Combined with stealth browsers (camofox-browser) and HTML→video rendering (hyperframes), the stack now increasingly optimizes around **token-in / token-out conservation** as the dominant bottleneck.

A new direction appearing for the first time at scale: **Rust-native agent infrastructure** (0xPlaygrounds/rig, Hmbown/Codewhale), and **vectorless / graph-based RAG** (PageIndex, graphify, LEANN) actively rejecting the chunk-and-embed orthodoxy in favor of AST parsing and reasoning over document structure.

---

## 4. Community Hot Spots — Where Developers Should Focus

- 🔥 **[affaan-m/ECC](https://github.com/affaan-m/ECC)** (+1,426 today) — the consolidating "harness OS" for agent skills; likely to become the agent-frameworks equivalent of `n8n` for workflows.
- 🔥 **[heygen-com/hyperframes](https://github.com/heygen-com/hyperframes)** (+2,628 today) — programmatic HTML→video turns every existing web stack into a video-generation surface; huge implications for content agents.
- 🔥 **[mksglu/context-mode](https://github.com/mksglu/context-mode)** (+652 today) — context compression is the single highest-leverage intervention for production agents shipping now.
- 🔥 **[VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)** & **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** — vectorless/graph RAG is the strongest emerging alternative to dense retrieval; expect research and startups to converge here.
- 🔥 **[openai/skills](https://github.com/openai/skills)** + **[openai/plugins](https://github.com/openai/plugins)** — the official institutionalization of "skills" elevates the pattern from hackathon to production contract; builders should publish agents via this channel now.

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*