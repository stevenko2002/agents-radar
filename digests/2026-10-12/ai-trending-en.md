# AI Open Source Trends 2026-10-12

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-10-11 22:15 UTC

---

# AI Open-Source Trends Report — 2026-10-12

**Filtering note:** I excluded clearly non-AI trending repos such as AnyPS5, ArtCraft, God’s Eye View, and Apollo-11. I also excluded general dev/education repos where AI is only incidental. AI-adjacent dev tools such as coding-agent diagram packs are included. Where star totals differ between the trending list and topic search, I note both.

---

## 1. Today’s Highlights

Today’s AI open-source attention is concentrated in agentic tooling rather than raw model releases. The fastest-rising trending repo is [morluto/rea](https://github.com/morluto/rea) (+25,585 today), an agent-driven reverse-engineering tool, while [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) (+1,083 today) shows coding-agent skills are becoming a product category. Large established projects like [affaan-m/ECC](https://github.com/affaan-m/ECC), [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent), [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl), [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT), and [ollama/ollama](https://github.com/ollama/ollama) confirm that agent harnesses, web data, and local LLM infrastructure remain the center of gravity. Memory/context and token-efficiency tools—[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem), [mem0ai/mem0](https://github.com/mem0ai/mem0), [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom), [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman), and [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail)—are also prominent, suggesting the community is optimizing agent cost and continuity. RAG is evolving from simple vector search toward graph, memory, compression, and reasoning-based retrieval.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

- [pytorch/pytorch](https://github.com/pytorch/pytorch) — ⭐104,444 total (topic search); +314 today. Core tensor and GPU-accelerated neural-network framework, still the default foundation for much AI research and production.
- [huggingface/transformers](https://github.com/huggingface/transformers) — ⭐167,521. The model-definition framework for state-of-the-art text, vision, audio, and multimodal models.
- [ollama/ollama](https://github.com/ollama/ollama) — ⭐182,778. Local LLM runner supporting Kimi, GLM, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma, and more.
- [lyogavin/airllm](https://github.com/lyogavin/airllm) — ⭐0 listed total; +541 today. Runs 70B inference on a single 4GB GPU, making local large-model inference more accessible.
- [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) — ⭐0 listed total; +1,083 today. Self-contained HTML/SVG diagram skills for Claude Code, Codex, Copilot, Cursor, Factory Droid, and Pi.
- [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) — ⭐190,509. Web data infrastructure for AI agents, turning websites into LLM-ready content.
- [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) — ⭐52,539. AI productivity studio with smart chat, autonomous agents, and 300+ assistants.
- [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) — ⭐8,853. Modular Rust framework for building scalable LLM applications.

### 🤖 AI Agents / Workflows

- [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) — ⭐252,787. “The agent that grows with you,” a high-profile personal agent project.
- [affaan-m/ECC](https://github.com/affaan-m/ECC) — ⭐277,171. Agent harness performance optimization system covering skills, instincts, memory, security, and research-first development.
- [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) — ⭐95,976. Gives agents internet-wide read/search access across Twitter, Reddit, YouTube, GitHub, Bilibili, and XiaoHongShu via one CLI.
- [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) — ⭐74,062. Open-source AI job-search agent that scans boards, scores jobs against a CV, and tailors applications.
- [HKUDS/nanobot](https://github.com/HKUDS/nanobot) — ⭐48,961. Ultra-lightweight, self-hosted personal AI agent framework with WebUI, tools, memory, MCP, and multi-agent workflows.
- [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) — ⭐47,346. Personal AI assistant and agent harness with planning, tools, skills, memory, multi-agent, and multi-channel support.
- [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale) — ⭐41,078. Open-source Rust agent engine and terminal client with provider choice, tools, approvals, and receipts.
- [morluto/rea](https://github.com/morluto/rea) — ⭐0 listed total; +25,585 today. Reverse-engineer anything with agents, from app behavior down to native binaries.

### 📦 AI Applications

- [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) — ⭐129,719. Generates HD short videos from a topic or keyword using AI workflows.
- [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) — ⭐66,182. LLM-powered multi-market stock analysis system with news, dashboards, and automated notifications.
- [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) — ⭐60,338. AI turns documents or topics into native PowerPoint decks with shapes, transitions, charts, and audio narration.
- [siyuan-note/siyuan](https://github.com/siyuan-note/siyuan) — ⭐46,720. Privacy-first, self-hosted knowledge workspace where humans and AI agents collaborate.
- [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor) — ⭐41,146. Lifelong personalized tutoring application powered by AI.
- [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) — ⭐35,604. Personal AI assistant deployable locally or on cloud, with multi-chat-app support and extensible capabilities.
- [zi-yue-1129/DATAGEN](https://github.com/zi-yue-1129/DATAGEN) — ⭐1,807. Multi-agent research assistant automating hypothesis generation, data analysis, and report writing.
- [acon96/home-llm](https://github.com/acon96/home-llm) — ⭐1,457. Home Assistant integration and model to control smart homes using a local LLM.

### 🧠 LLMs / Training

- [open-compass/opencompass](https://github.com/open-compass/opencompass) — ⭐7,505. LLM evaluation platform covering OpenAI, Anthropic, Gemini, Qwen, GLM, DeepSeek, and 100+ datasets.
- [Picovoice/picollm](https://github.com/Picovoice/picollm) — ⭐318. On-device LLM inference powered by X-Bit quantization.
- [thinkwee/AgentsMeetRL](https://github.com/thinkwee/AgentsMeetRL) — ⭐1,863. Curated awesome list for agentic reinforcement learning.
- [chrisliu298/awesome-llm-unlearning](https://github.com/chrisliu298/awesome-llm-unlearning) — ⭐630. Resource repository for machine unlearning in large language models.
- [yingpengma/Awesome-Story-Generation](https://github.com/yingpengma/Awesome-Story-Generation) — ⭐663. Curated papers on story generation and storytelling in the LLM era.
- [zchoi/Awesome-Embodied-Robotics-and-Agent](https://github.com/zchoi/Awesome-Embodied-Robotics-and-Agent) — ⭐1,899. Curated list of embodied AI and robotics research with LLMs.
- [genieincodebottle/generative-ai](https://github.com/genieincodebottle/generative-ai) — ⭐2,645. Comprehensive Generative AI roadmap, projects, use cases, and interview preparation.
- [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) — ⭐67,462. Learn AI engineering by building and shipping real projects.

### 🔍 RAG / Knowledge

- [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) — ⭐125,538. Turns codebases, docs, SQL schemas, configs, and PDFs into a queryable knowledge graph without a vector store.
- [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) — ⭐99,704. Persistent context across sessions for Claude Code, OpenClaw, Codex, Gemini, Hermes, Copilot, OpenCode, and more.
- [infiniflow/ragflow](https://github.com/infiniflow/ragflow) — ⭐92,001. Open-source RAG engine fusing cutting-edge RAG with agent capabilities.
- [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) — ⭐85,254. Open-source crawler and scraper that turns any website into clean, LLM-ready Markdown.
- [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) — ⭐75,066. Compresses tool outputs, logs, files, and RAG chunks before they reach the LLM.
- [mem0ai/mem0](https://github.com/mem0ai/mem0) — ⭐66,991. Memory layer for AI agents with persistent context built for production.
- [milvus-io/milvus](https://github.com/milvus-io/milvus) — ⭐46,353. High-performance, cloud-native vector database for scalable ANN search.
- [qdrant/qdrant](https://github.com/qdrant/qdrant) — ⭐35,039. High-performance vector database and search engine for next-generation AI.

---

## 3. Trend Signal Analysis

The dominant signal today is that AI open source is shifting from model access to agent performance. The most explosive attention is on agent harnesses, skills, memory, and context compression: [affaan-m/ECC](https://github.com/affaan-m/ECC), [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent), [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail), [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman), [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem), [mem0ai/mem0](https://github.com/mem0ai/mem0), and [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) all target how agents plan, remember, and spend tokens. This is a maturation signal: developers are treating agents as production systems that need observability, security, receipts, and cost control, not just demos.

New stacks are appearing. Rust is gaining traction for agent engines and LLM app frameworks ([codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale), [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig)); Go appears in coding agents ([esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix)); C++ shows in in-process vector search ([alibaba/zvec](https://github.com/alibaba/zvec)); and on-device inference is being pushed by [Picovoice/picollm](https://github.com/Picovoice/picollm) and [lyogavin/airllm](https://github.com/lyogavin/airllm).

RAG is also changing: [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) proposes vectorless, reasoning-based retrieval; [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) turns codebases into queryable knowledge graphs; [infiniflow/ragflow](https://github.com/infiniflow/ragflow) fuses RAG with agents; and [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) compresses retrieved context before it reaches the LLM. These directions connect to recent model releases: [ollama/ollama](https://github.com/ollama/ollama) lists Kimi, GLM, MiniMax, DeepSeek, gpt-oss, Qwen, and Gemma, while coding agents integrate Claude Code, Codex, Copilot, Cursor, Gemini CLI, and OpenCode. The community is voting for multi-model, local-first, low-cost agent infrastructure that works across existing developer tools.

---

## 4. Community Hot Spots

- **Agent memory and context layers** — [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem), [mem0ai/mem0](https://github.com/mem0ai/mem0), [topoteretes/cognee](https://github.com/topoteretes/cognee), and [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) are attacking the hardest production problem: keeping agents coherent across sessions without exploding token costs.
- **Agent harness and skill optimization** — [affaan-m/ECC](https://github.com/affaan-m/ECC), [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail), [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman), and [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) show that “agent skills” and token discipline are becoming a new product layer.
- **Reverse-engineering and browser agents** — [morluto/rea](https://github.com/morluto/rea), [browser-use/browser-use](https://github.com/browser-use/browser-use), and [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) point to agents that can inspect, navigate, and extract from real systems.
- **Vectorless and graph-based RAG** — [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex), [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify), and [infiniflow/ragflow](https://github.com/infiniflow/ragflow) suggest retrieval is moving beyond naive vector similarity toward reasoning, graphs, and agentic context construction.
- **Local and on-device inference** — [lyogavin/airllm](https://github.com/lyogavin/airllm), [Picovoice/picollm](https://github.com/Picovoice/picollm), [ollama/ollama](https://github.com/ollama/ollama), and [acon96/home-llm](https://github.com/acon96/home-llm) reflect continued demand for private, low-cost, locally controlled AI.

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*