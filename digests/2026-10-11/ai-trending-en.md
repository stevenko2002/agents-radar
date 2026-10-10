# AI Open Source Trends 2026-10-11

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-10-10 22:15 UTC

---

# AI Open Source Trends Report — 2026-10-11

**Filtering note:** Kept projects clearly tied to AI/ML, agents, RAG, vector search, model tooling, or AI applications. Excluded non-AI/general repos such as [flutter/flutter](https://github.com/flutter/flutter), [boykopovar/AnyPS5](https://github.com/boykopovar/AnyPS5), [storytold/artcraft](https://github.com/storytold/artcraft), [Developer-Y/cs-video-courses](https://github.com/Developer-Y/cs-video-courses), [JuliaLang/julia](https://github.com/JuliaLang/julia), [apache/airflow](https://github.com/apache/airflow), and [thedaviddias/Front-End-Checklist](https://github.com/thedaviddias/Front-End-Checklist). Trending total stars are shown as listed; today’s gains are from the trending source.

---

## 1. Today's Highlights

- **Agent tooling is the dominant signal today.** [morluto/rea](https://github.com/morluto/rea) leads with +25,784 stars today for agent-driven reverse engineering, while [mattpocock/skills](https://github.com/mattpocock/skills), [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills), and [mksglu/context-mode](https://github.com/mksglu/context-mode) show intense interest in portable skills, CLAUDE.md patterns, and context-window control.
- **Context, memory, and token compression are becoming first-class infrastructure.** [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem), [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom), [mem0ai/mem0](https://github.com/mem0ai/mem0), and [topoteretes/cognee](https://github.com/topoteretes/cognee) all target persistent memory or reduced token usage for agents.
- **Local and private AI remains strong.** [ollama/ollama](https://github.com/ollama/ollama), [Picovoice/picollm](https://github.com/Picovoice/picollm), and [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) push on-device or local-first inference and RAG.
- **Classic ML frameworks are still active but no longer the fastest-moving layer.** [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow), [pytorch/pytorch](https://github.com/pytorch/pytorch), and [huggingface/transformers](https://github.com/huggingface/transformers) remain foundational, with modest daily gains.
- **Vertical AI applications are maturing quickly.** [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master), [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops), [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis), and [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) show AI moving into concrete workflows.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

- [ollama/ollama](https://github.com/ollama/ollama) — ⭐182,655 — Local model runtime supporting Kimi, GLM, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma, and more; a key self-hosted inference layer.
- [affaan-m/ECC](https://github.com/affaan-m/ECC) — ⭐276,471 — Agent harness performance optimization system for Claude Code, Codex, OpenCode, Cursor, and beyond.
- [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) — ⭐110,923 — Coding-agent skill/proxy that cuts token usage by ~65% through compressed “caveman” communication.
- [mksglu/context-mode](https://github.com/mksglu/context-mode) — ⭐0 (+178 today) — Context-window optimizer for AI coding agents; sandboxes tool output, persists memory, and routes across 17 platforms via MCP + hooks.
- [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills) — ⭐0 (+279 today) — A single CLAUDE.md file designed to improve Claude Code behavior using Karpathy’s LLM coding observations.
- [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) — ⭐0 (+1,189 today) — Editorial diagram generation for Claude Code, Codex, Copilot, Cursor, and other coding agents; 44 self-contained HTML + SVG diagram types.
- [Picovoice/picollm](https://github.com/Picovoice/picollm) — ⭐318 — On-device LLM inference powered by X-Bit quantization.
- [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) — ⭐13,219 — Idiomatic Java library for LLM apps, tool calling, MCP, agents, and RAG on the JVM.

### 🤖 AI Agents / Workflows

- [morluto/rea](https://github.com/morluto/rea) — ⭐0 (+25,784 today) — Agent-powered reverse engineering from app behavior down to native binaries; today’s breakout trending repo.
- [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) — ⭐187,517 — Long-standing accessible AI agent platform for building and using autonomous tools.
- [langchain-ai/langchain](https://github.com/langchain-ai/langchain) — ⭐147,561 — The agent engineering platform; still a central framework for tool-using LLM workflows.
- [langgenius/dify](https://github.com/langgenius/dify) — ⭐158,096 — Builds agentic workflows and RAG pipelines with rich model/tool support in one workspace.
- [browser-use/browser-use](https://github.com/browser-use/browser-use) — ⭐117,564 — Agents that use the browser, a fast-growing category for web automation.
- [HKUDS/nanobot](https://github.com/HKUDS/nanobot) — ⭐48,931 — Ultra-lightweight, self-hosted personal AI agent framework with WebUI, tools, memory, MCP, and multi-agent workflows.
- [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) — ⭐47,326 — Open-source personal AI assistant and agent harness with planning, memory, multi-agent, and multi-channel support.
- [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) — ⭐95,463 — Gives AI agents the ability to read and search Twitter, Reddit, YouTube, GitHub, Bilibili, and Xiaohongshu via one CLI.

### 📦 AI Applications

- [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) — ⭐59,367 (+515 today) — Turns documents or topics into native PowerPoint decks with charts, narration, transitions, and custom templates.
- [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) — ⭐52,527 — AI productivity studio with smart chat, autonomous agents, and 300+ assistants.
- [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) — ⭐129,472 — Generates HD short videos from a topic or keyword using AI models and automated workflows.
- [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) — ⭐73,976 — Open-source AI job search agent that scans boards, scores jobs, tailors resumes, and prepares interviews.
- [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) — ⭐66,148 — LLM-powered multi-market stock analysis system with news, dashboards, and automated notifications.
- [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor) — ⭐41,097 — Lifelong personalized AI tutoring application.
- [acon96/home-llm](https://github.com/acon96/home-llm) — ⭐1,455 — Home Assistant integration and model for controlling smart homes with a local LLM.
- [tesseract-ocr/tesseract](https://github.com/tesseract-ocr/tesseract) — ⭐76,895 — Long-standing open-source OCR engine, still relevant for document AI pipelines.

### 🧠 LLMs / Training

- [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) — ⭐200,709 (+24 today) — Foundational open-source ML framework for training and deployment.
- [huggingface/transformers](https://github.com/huggingface/transformers) — ⭐167,210 (+94 today) — Model-definition framework for state-of-the-art text, vision, audio, and multimodal models.
- [pytorch/pytorch](https://github.com/pytorch/pytorch) — ⭐104,126 (+81 today) — Tensors and dynamic neural networks with strong GPU acceleration.
- [scikit-learn/scikit-learn](https://github.com/scikit-learn/scikit-learn) — ⭐67,522 — Classic Python machine learning library, still central for tabular and classical ML.
- [keras-team/keras](https://github.com/keras-team/keras) — ⭐64,363 — Deep learning API for humans, tightly integrated with TensorFlow/JAX/PyTorch backends.
- [open-compass/opencompass](https://github.com/open-compass/opencompass) — ⭐7,508 — LLM evaluation platform covering OpenAI, Anthropic, Gemini, Qwen, GLM, DeepSeek, and 100+ datasets.
- [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) — ⭐8,845 — Build modular and scalable LLM applications in Rust.
- [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) — ⭐62,364 — YOLO models for object detection, segmentation, classification, pose, and tracking.

### 🔍 RAG / Knowledge

- [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) — ⭐125,295 — Turns codebases, docs, SQL schemas, configs, and PDFs into a queryable knowledge graph without a vector store.
- [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) — ⭐99,211 — Persistent context across sessions for Claude Code, OpenClaw, Codex, Gemini, Hermes, Copilot, and OpenCode.
- [infiniflow/ragflow](https://github.com/infiniflow/ragflow) — ⭐91,967 — Leading open-source RAG engine fusing retrieval with agent capabilities.
- [mem0ai/mem0](https://github.com/mem0ai/mem0) — ⭐66,954 — Drop-in memory infrastructure for AI agents and apps.
- [run-llama/llama_index](https://github.com/run-llama/llama_index) — ⭐52,460 — Document processing and retrieval platform for AI applications.
- [milvus-io/milvus](https://github.com/milvus-io/milvus) — ⭐46,349 — High-performance, cloud-native vector database for scalable ANN search.
- [qdrant/qdrant](https://github.com/qdrant/qdrant) — ⭐35,013 — Massive-scale vector database and vector search engine for next-generation AI.
- [topoteretes/cognee](https://github.com/topoteretes/cognee) — ⭐31,970 — Open-source AI memory platform giving agents persistent long-term memory with small models.

---

## 3. Trend Signal Analysis

Today’s community attention is concentrating less on raw model training and more on the operating layer around agents. The strongest single signal is [morluto/rea](https://github.com/morluto/rea) (+25,784 today), a reverse-engineering agent, followed by agent skills and harness repos such as [mattpocock/skills](https://github.com/mattpocock/skills) (+1,737), [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills) (+279), and [mksglu/context-mode](https://github.com/mksglu/context-mode) (+178). These tools target context windows, tool-output sandboxing, persistent memory, and multi-platform MCP routing, suggesting developers are optimizing agent reliability and token cost rather than only model capability.

A second signal is token/context compression: [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom), [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem), [mem0ai/mem0](https://github.com/mem0ai/mem0), [topoteretes/cognee](https://github.com/topoteretes/cognee), and [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) all promise fewer tokens or persistent memory. New stack directions include reasoning-based/vectorless RAG ([VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)), graph-native codebase knowledge ([Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)), in-process vector DBs ([alibaba/zvec](https://github.com/alibaba/zvec)), and on-device inference ([Picovoice/picollm](https://github.com/Picovoice/picollm), [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN)).

This aligns with recent multi-model releases: [ollama/ollama](https://github.com/ollama/ollama) now advertises Kimi, GLM, MiniMax, DeepSeek, gpt-oss, Qwen, and Gemma, while agent projects like [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent), [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix), and [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) reflect provider-agnostic, self-hosted assistants. RAG and memory remain production-critical: [infiniflow/ragflow](https://github.com/infiniflow/ragflow), [run-llama/llama_index](https://github.com/run-llama/llama_index), [milvus-io/milvus](https://github.com/milvus-io/milvus), and [qdrant/qdrant](https://github.com/qdrant/qdrant) stay high-star. Meanwhile, classic frameworks ([tensorflow/tensorflow](https://github.com/tensorflow/tensorflow), [pytorch/pytorch](https://github.com/pytorch/pytorch), [huggingface/transformers](https://github.com/huggingface/transformers)) show steady but lower daily stars, confirming the center of gravity has shifted to agent infrastructure and applications.

---

## 4. Community Hot Spots

- **Agent context and memory optimization** — [mksglu/context-mode](https://github.com/mksglu/context-mode), [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem), [mem0ai/mem0](https://github.com/mem0ai/mem0), [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom), [topoteretes/cognee](https://github.com/topoteretes/cognee). Directly reduces token cost and improves long-running agent reliability.
- **Coding-agent skills and harnesses** — [mattpocock/skills](https://github.com/mattpocock/skills), [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills), [affaan-m/ECC](https://github.com/affaan-m/ECC), [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman), [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail). Portable `.agents`/CLAUDE.md patterns are becoming a distribution channel.
- **MCP and multi-platform agent plumbing** — [mksglu/context-mode](https://github.com/mksglu/context-mode), [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j), [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit), [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design). Cross-IDE/CLI integration is a key differentiator.
- **Reasoning-based, vectorless, and graph RAG** — [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex), [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify), [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN), [lancedb/lancedb](https://github.com/lancedb/lancedb), [oramasearch/orama](https://github.com/oramasearch/orama). Alternatives to classic vector-store pipelines are gaining mindshare.
- **Vertical AI agents** — [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master), [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops), [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis), [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor), [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo). These show agent frameworks turning into finished, domain-specific products.

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*