# AI Open Source Trends 2026-09-29

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-28 22:15 UTC

---

# AI Open Source Trends Report — 2026-09-29

**Filtering note:** Non-AI trending repos were excluded: [NawfalMotii79/PLFM_RADAR](https://github.com/NawfalMotii79/PLFM_RADAR) (radar hardware), [cs341-illinois/coursebook](https://github.com/cs341-illinois/coursebook) (systems programming textbook), and [byoungd/up](https://github.com/byoungd/up) (general life/AI-learning guide, not an AI project). General CS/ML lists and languages with only an `ml` topic tag were also excluded unless they are core AI/ML infrastructure.

---

## 1. Today’s Highlights

Agent memory is today’s breakout category: [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) leads the trending list with **+4,413 today**, while [mem0ai/mem0](https://github.com/mem0ai/mem0), [topoteretes/cognee](https://github.com/topoteretes/cognee), and [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) reinforce persistent context as a first-class agent layer. Multi-agent orchestration is accelerating in parallel: [paperclipai/paperclip](https://github.com/paperclipai/paperclip) (+3,185) manages agents at work, and [mvschwarz/openrig](https://github.com/mvschwarz/openrig) (+781) runs Claude Code and Codex together as one system. Local AI applications remain strong, led by [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) (+3,274), a fully local ElevenLabs alternative for voice cloning, dubbing, transcription, and audiobook creation in 646 languages. The RAG stack is diversifying beyond pure vector search, with [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) (vectorless reasoning-based RAG), [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) (queryable knowledge graphs), and [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) (97% storage savings, private on-device RAG). Finally, token/context economics is now a visible theme via [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) and [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman), reflecting cost pressure around coding agents.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

- [ollama/ollama](https://github.com/ollama/ollama) — ⭐181,867 — Local model runner for Kimi, GLM, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and more; a critical inference on-ramp as open-weight releases multiply.
- [huggingface/transformers](https://github.com/huggingface/transformers) — ⭐166,764 — Model-definition framework for state-of-the-art text, vision, audio and multimodal models; remains the broadest reference implementation layer.
- [langchain-ai/langchain](https://github.com/langchain-ai/langchain) — ⭐147,210 — Agent engineering platform; central to the tool/MCP/agent application stack.
- [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) — ⭐13,171 — Idiomatic Java LLM library with unified APIs, tool calling, MCP and RAG; important for enterprise JVM adoption.
- [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) — ⭐8,752 — Rust framework for modular, scalable LLM applications; signals Rust’s growing role in AI infrastructure.
- [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) — ⭐4,732 — Build a tiny vLLM + Qwen inference system on Apple Silicon; strong systems-engineering learning project.
- [Mirrowel/LLM-API-Key-Proxy](https://github.com/Mirrowel/LLM-API-Key-Proxy) — ⭐557 — Universal LLM gateway with OpenAI/Anthropic-compatible endpoints and load balancing; simplifies multi-provider routing.
- [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) — ⭐74,026 — Compresses tool outputs, logs, files and RAG chunks before they reach the LLM; directly targets agent token cost.

### 🤖 AI Agents / Workflows

- [paperclipai/paperclip](https://github.com/paperclipai/paperclip) — ⭐0 (+3,185 today) — Open-source app to manage agents at work; hot because agent fleets need operational control planes.
- [mvschwarz/openrig](https://github.com/mvschwarz/openrig) — ⭐0 (+781 today) — Multi-agent harness that runs Claude Code and Codex together as one system; notable for cross-vendor coding-agent orchestration.
- [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) — ⭐0 (+4,413 today) — Agent memory that learns; today’s top trending AI repo and a strong signal for persistent, adaptive agent memory.
- [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) — ⭐249,781 — “The agent that grows with you”; high-star agent framework with broad community mindshare.
- [affaan-m/ECC](https://github.com/affaan-m/ECC) — ⭐268,942 — Agent harness performance optimization system covering skills, instincts, memory, security and research-first development for Claude Code, Codex, Cursor and beyond.
- [browser-use/browser-use](https://github.com/browser-use/browser-use) — ⭐116,624 — Agents that use the browser; web automation remains a killer agent use case.
- [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) — ⭐109,090 — Multi-agent LLM financial trading framework; shows vertical multi-agent workflows maturing.
- [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) — ⭐47,153 — Open-source super AI assistant and agent harness with planning, tools, skills, memory and multi-channel support.

### 📦 AI Applications

- [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) — ⭐0 (+3,274 today) — Fully local ElevenLabs alternative for voice cloning, voice design, video dubbing, dictation, transcription and audiobook creation in 646 languages; privacy-first audio AI is surging.
- [dream-num/univer](https://github.com/dream-num/univer) — ⭐0 (+1,105 today) — Office Harness for AI Agents spanning spreadsheets, docs, slides, canvas, relational tables and PDF; positions office documents as an agent-native runtime.
- [open-webui/open-webui](https://github.com/open-webui/open-webui) — ⭐153,453 — User-friendly AI interface supporting Ollama, OpenAI API and more; the default self-hosted LLM front end for many teams.
- [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) — ⭐126,665 — Generates HD short videos from a topic or keyword via AI workflows; short-video automation remains a high-volume consumer AI use case.
- [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) — ⭐56,836 — Turns documents or topics into native PowerPoint decks with shapes, transitions, charts, narration and templates; agentic document generation is going native-format.
- [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) — ⭐52,217 — AI productivity studio with smart chat, autonomous agents and 300+ assistants; consolidates frontier LLM access into a desktop workflow.
- [acon96/home-llm](https://github.com/acon96/home-llm) — ⭐1,444 — Home Assistant integration and model to control smart home via local LLM; local AI + IoT is a practical edge deployment.
- [Event-AHU/Medical_Image_Analysis](https://github.com/Event-AHU/Medical_Image_Analysis) — ⭐242 — Foundation-model-based medical image analysis; vertical AI in healthcare continues to attract specialist builders.

### 🧠 LLMs / Training

- [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) — ⭐200,592 — Open source ML framework; still foundational for production ML and model deployment.
- [pytorch/pytorch](https://github.com/pytorch/pytorch) — ⭐103,464 — Tensors and dynamic neural networks with strong GPU acceleration; the default research/training framework for most LLM work.
- [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) — ⭐105,722 — Implement a ChatGPT-like LLM in PyTorch step by step; top educational resource for LLM internals.
- [jingyaogong/minimind](https://github.com/jingyaogong/minimind) — ⭐62,832 — Train a 64M-parameter LLM from scratch in about 2 hours; lowers the barrier to hands-on pretraining.
- [open-compass/opencompass](https://github.com/open-compass/opencompass) — ⭐7,480 — LLM evaluation platform across 100+ datasets and major model families; evaluation is becoming mandatory infrastructure.
- [galilai-group/stable-pretraining](https://github.com/galilai-group/stable-pretraining) — ⭐320 — Reliable, minimal and scalable library for pretraining foundation and world models; early but relevant to reproducible training.
- [SeekingDream/Static-to-Dynamic-LLMEval](https://github.com/SeekingDream/Static-to-Dynamic-LLMEval) — ⭐500 — Repository for research on LLM benchmarks against data contamination, from static to dynamic evaluation.
- [scikit-learn/scikit-learn](https://github.com/scikit-learn/scikit-learn) — ⭐67,413 — Classic machine learning in Python; remains the baseline toolkit for tabular ML and evaluation.

### 🔍 RAG / Knowledge

- [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) — ⭐122,136 — Turns codebases, docs, SQL schemas, configs and PDFs into a queryable knowledge graph with no vector store; part of the “vectorless” RAG wave.
- [infiniflow/ragflow](https://github.com/infiniflow/ragflow) — ⭐91,442 — Leading open-source RAG engine fusing RAG with agent capabilities; context-layer competition is intensifying.
- [mem0ai/mem0](https://github.com/mem0ai/mem0) — ⭐66,237 — Memory layer for AI agents with drop-in persistent context; production-oriented memory infrastructure.
- [topoteretes/cognee](https://github.com/topoteretes/cognee) — ⭐31,143 — Open-source AI memory platform for agents using small models; persistent long-term memory is a clear category.
- [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) — ⭐36,212 — Document index for vectorless, reasoning-based RAG; challenges default vector-first retrieval assumptions.
- [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) — ⭐12,966 — RAG on everything with 97% storage savings and 100% private on-device operation; MLSys2026 paper-backed efficiency play.
- [qdrant/qdrant](https://github.com/qdrant/qdrant) — ⭐34,867 — High-performance, massive-scale vector database and search engine; still core infrastructure for production RAG.
- [milvus-io/milvus](https://github.com/milvus-io/milvus) — ⭐46,275 — Cloud-native vector database for scalable ANN search; enterprise vector search remains a large market.

---

## 3. Trend Signal Analysis

Today’s hot list shows the agent stack moving from “can we build an agent?” to “how do we run, remember, supervise and afford agents?” The breakout project is [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) (+4,413 today), an agent-memory system, and it sits alongside [mem0ai/mem0](https://github.com/mem0ai/mem0), [topoteretes/cognee](https://github.com/topoteretes/cognee), [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem), [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) and [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) in a broader memory/retrieval wave. The community is rewarding persistent context, knowledge graphs and reasoning-based retrieval over naive vector search alone. Multi-agent orchestration is the second clear signal: [paperclipai/paperclip](https://github.com/paperclipai/paperclip) (+3,185) for managing agents at work, [mvschwarz/openrig](https://github.com/mvschwarz/openrig) (+781) for running Claude Code and Codex together, and [affaan-m/ECC](https://github.com/affaan-m/ECC) for harness optimization all point to an emerging control plane for heterogeneous agents. Third, local and private AI applications are not fading: [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) (+3,274) offers local voice cloning/dubbing/transcription, while [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) and [acon96/home-llm](https://github.com/acon96/home-llm) push private RAG and local smart-home control. Fourth, token economics is now a first-class concern: [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) compresses tool outputs and RAG chunks, [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) cuts coding-agent tokens by “talking like a caveman,” and context/memory tools reduce repeated prompts. The tech-stack signal is Rust/Go in agent CLIs and vector databases, TypeScript in agent frontends/workspaces, and Python still dominant in training, RAG and evaluation. The connection to recent model releases is direct: [ollama/ollama](https://github.com/ollama/ollama) advertises Kimi, GLM, MiniMax, DeepSeek, gpt-oss, Qwen and Gemma, and many trending tools target Claude Code, Codex, Cursor, Gemini CLI and MCP. The market is standardizing around model-agnostic harnesses, memory layers and cost-aware retrieval.

---

## 4. Community Hot Spots

- **Agent memory and persistent context:** [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight), [mem0ai/mem0](https://github.com/mem0ai/mem0), [topoteretes/cognee](https://github.com/topoteretes/cognee), [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem). Memory is becoming the differentiator for long-running agents, and today’s top trending repo is exactly this.
- **Multi-agent / coding-agent orchestration:** [mvschwarz/openrig](https://github.com/mvschwarz/openrig), [paperclipai/paperclip](https://github.com/paperclipai/paperclip), [affaan-m/ECC](https://github.com/affaan-m/ECC), [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code), [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix). Teams want to combine Claude Code, Codex, Cursor and other agents and manage them as one system.
- **Local/private voice and multimodal apps:** [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio). A fully local ElevenLabs alternative in 646 languages hits privacy, cost and creator demand at once.
- **Token/context compression and cost control:** [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom), [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman). Coding agents burn tokens; compression gives immediate ROI and is spreading as a proxy/skill pattern.
- **Vectorless / knowledge-graph RAG:** [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex), [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify), [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN). RAG is diversifying beyond vector databases toward reasoning, graphs and on-device storage savings.
- **Agent-native office/productivity:** [dream-num/univer](https://github.com/dream-num/univer), [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master), [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio). Documents, slides and spreadsheets are becoming agent runtimes rather than passive files.

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*