# AI Open Source Trends 2026-09-18

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-17 22:16 UTC

---

We need to produce a structured AI open source trends report based on the data given. The user wants:

- Step1: Filter for AI relevance: From both trending repositories and AI topic search, select projects clearly related to AI/ML. Exclude unrelated general tools, frontend frameworks, games, etc. Skip non-AI trending repos.

- Step2: Categorize filtered projects into categories: AI Infrastructure, AI Agents / Workflows, AI Applications, LLMs / Training, RAG / Knowledge. A project can belong to multiple categories, but pick primary one.

- Step3: Output Report with sections:

1. Today's Highlights: 3-5 sentences on most noteworthy AI open-source developments today.

2. Top Projects by Category: For each category, list 3-8 representative projects, each with:
   - Project name (with link)
   - Stars data (total + today's new, if available)
   - One sentence: what it is and why it's worth attention today

3. Trend Signal Analysis: 200-300 words, distilling from today's hot list:
   - Which type of AI tool is getting explosive community attention?
   - Any new tech stacks or directions appearing for the first time?
   - Connection to recent LLM releases / industry events

4. Community Hot Spots: Bullet list of 3-5 specific projects or directions worth developer focus, with brief reasoning.

Style: English, professional and concise, must include GitHub links for every project.

We need to parse the data.

The trending list contains 20 repositories. Some are clearly AI-related:

From trending list:

- [alibaba/open-code-review] [Go] - deterministic pipelines + LLM Agent, code review tool - AI-related (agent, code review)
- [cloudflare/security-audit-skill] [JavaScript] - coding-agent skill for multi-phase security audits - AI-related (agent skill)
- [addyosmani/agent-skills] [JavaScript] - Production-grade engineering skills for AI coding agents - AI-related
- [Tencent/BrowserSkill] [TypeScript] - Let AI agents use your real logged-in browser - AI-related (agent)
- [alphaXiv/OpenResearch] [Rust] - Turn your coding agents into research agents - AI-related
- [anthropics/claude-code] [TypeScript] - agentic coding tool in terminal - AI-related
- [NationalSecurityAgency/ghidra] [Java] - reverse engineering framework - not AI-related (skip)
- [anthropics/knowledge-work-plugins] [Python] - open source repository of plugins for knowledge workers in Claude Cowork - AI-related (agentic? but more plugins)
- [Tencent/WeKnora] [Go] - Open-source LLM knowledge platform: turn raw documents into a queryable RAG, autonomous reasoning agent - AI-related (RAG, agent)
- [abue-ammar/tinycast] [Swift] - macOS launcher - not AI
- [cilium/cilium] [Go] - eBPF networking - not AI
- [jamiepine/voicebox] [TypeScript] - open-source AI voice studio - AI (application)
- [affaan-m/ECC] [JavaScript] - The agent harness performance optimization system for Claude Code, etc. - AI (agents)
- [roboflow/supervision] [Python] - reusable computer vision tools - AI/ML (maybe AI infrastructure)
- [JustVugg/colibri] [C] - Run frontier MoE models on hardware — ML inference engine - AI (LLM training/inference)
- [TencentCloud/Octop] [Python] - A smarter, self-hosted AI assistant — multi-user, multi-agent - AI agent
- [ever-co/ever-gauzy] [TypeScript] - Business Management Platform - not AI
- [cline/cline] [TypeScript] - Autonomous coding agent as SDK, IDE extension, CLI - AI agent
- [coder/coder] [Go] - Secure environments for developers and their agents - AI infrastructure? (environment for agents)
- [n8n-io/n8n] [TypeScript] - Fair-code workflow automation platform with native AI capabilities - AI workflow automation

The AI Topic Search results are a large list. We need to filter those for AI relevance.

Topic search includes many AI-related repositories:

- open-webui/open-webui - user-friendly AI interface - AI Application / UI
- langchain-ai/langchain - The agent engineering platform - AI Infrastructure / Agents
- Shubhamsaboo/awesome-llm-apps - AI Agents, Agent Skills and RAG Apps - AI
- Graphify-Labs/graphify - Turn any codebase into knowledge graph; skill for Claude Code - RAG / Infrastructure
- thedotmack/claude-mem - Persistent Context Across Sessions for Every Agent - AI Memory / RAG
- infiniflow/ragflow - RAG engine with Agent capabilities - RAG / Agents
- PaddlePaddle/PaddleOCR - OCR toolkit - AI Application / Infrastructure
- datawhalechina/hello-agents - building intelligent agents - AI Agents
- headroomlabs-ai/headroom - compress tool outputs, logs, files, RAG chunks - AI Infrastructure / Optimization
- Mintplex-Labs/anything-llm - local-first agent experience - AI App
- mem0ai/mem0 - Memory Layer for AI Agents - AI Memory / RAG
- run-llama/llama_index - document processing platform for AI - AI Infrastructure / RAG
- bojieli/ai-agent-book - AI Agent design & engineering book - AI knowledge
- jeecgboot/JeecgBoot - low-code enterprise AI platform - AI Application
- milvus-io/milvus - vector database - RAG / Infrastructure
- tensorflow/tensorflow - ML framework - AI Infrastructure
- huggingface/transformers - model definition framework - LLMs / Training
- rasbt/LLMs-from-scratch - implement LLM from scratch - LLMs / Training
- pytorch/pytorch - dynamic neural networks - AI Infrastructure
- microsoft/ML-For-Beginners - ML basics - educational
- Developer-Y/cs-video-courses - CS courses - not AI
- netdata/netdata - observability with AI - maybe not directly AI
- tesseract-ocr/tesseract - OCR - AI
- OpenBB-finance/OpenBB - data platform for AI agents - AI Infrastructure
- microsoft/AI-For-Beginners - AI basics - educational
- scikit-learn/scikit-learn - ML library - AI Infrastructure
- keras-team/keras - deep learning - AI Infrastructure
- ultralytics/ultralytics - YOLO object detection - AI Application
- roboflow/supervision - computer vision tools - AI Infrastructure
- JuliaLang/julia - language - not AI
- jingyaogong/minimind - train a 64M LLM from scratch - LLMs / Training
- 0xPlaygrounds/rig - build modular LLM applications in Rust - LLMs / Infrastructure
- open-compass/opencompass - LLM evaluation platform - LLMs / Training
- skyzh/tiny-llm - tiny LLM inference system - LLMs / Training
- generative-ai - comprehensive resources - educational
- samchon/nestia - NestJS helper + AI Chatbot Development - AI App
- etc.

We need to select projects that are clearly AI/ML related, and categorize them.

But also note that the user says "skip non-AI trending repos". So from trending list, we should exclude those not related to AI (like ghidra, tinycast, cilium, ever-gauzy). So trending list of AI projects includes: open-code-review, security-audit-skill, agent-skills, BrowserSkill, OpenResearch, claude-code, knowledge-work-plugins, WeKnora, voicebox, ECC, supervision, colibri, Octop, cline, coder, n8n (maybe AI features). Also perhaps others.

From topic search, many are AI/ML.

We need to produce a report with sections. Let's decide on categories:

- AI Infrastructure: frameworks, SDKs, inference engines, dev tools, CLI. Could include langchain, transformers, tensorflow, pytorch, supervision, colibri, coder, n8n (workflow automation), headroom, graphify, etc.
- AI Agents / Workflows: agent frameworks, automation, multi-agent systems. Could include open-webui (UI for agents), claude-code, cline, agent-skills, BrowserSkill, OpenResearch, ECC, Octop, dify? Actually dify is in LLM section? Actually dify is a collaborative workspace for building agentic workflows, so it's both agent and workflow. Also we can include langgenius/dify, but not present in trending. We'll include claude-code, cline, agent-skills, BrowserSkill, OpenResearch, ECC, Octop.
- AI Applications: specific apps, vertical solutions. Could include voicebox (AI voice studio), open-webui (interface), PaddleOCR (OCR), ultralytics YOLO (object detection), jamiepine/voicebox, Graphify (knowledge graph) maybe considered infrastructure. Also anything like anything-llm (application), mem0 (memory layer?), maybe considered infrastructure. We can include open-webui, anything-llm, voicebox, PaddleOCR, ultralytics.
- LLMs / Training: model weights, training frameworks, fine-tuning tools. Could include jingyaogong/minimind (train LLM), 0xPlaygrounds/rig (LLM apps), open-compass/opencompass (LLM evaluation), skyzh/tiny-llm, transformers, tensorflow, pytorch. But need to limit to 3-8 per category. Choose representative ones.

- RAG / Knowledge: vector databases, retrieval-augmented generation, knowledge management. Could include milvus, weaviate, qdrant, lancedb, orama, cognee, graphify, ragflow, open-webui? Not exactly. Also topoteretes/cognee, nir-diamant/RAG_Techniques, etc. Choose 3-8.

We also need to include both trending data and AI topic search.

Include links, stars. For trending repositories, they have "⭐0 (+3290 today)" etc. We need to include total stars if available (for trending they show 0 today). For some trending ones, they show no total stars, only +X. But in trending list they show "⭐0 (+3290 today)". So total stars = 0, new stars = +3290. For AI topic search, we have total stars (e.g., open-webui/open-webui ⭐152,399). For trending list with total star 0, we should show that.

We need to decide which projects to include in each category. Let's produce a concise report.

First, list all AI-relevant projects from trending and topic search, then categorize.

From trending list (AI-relevant):

1. alibaba/open-code-review (Go) - deterministic pipelines + LLM Agent code review tool, +3290 today.
2. cloudflare/security-audit-skill (JavaScript) - coding-agent skill for multi-phase security audits, +3606 today.
3. addyosmani/agent-skills (JavaScript) - production-grade engineering skills for AI coding agents, +680 today.
4. Tencent/BrowserSkill (TypeScript) - let AI agents use your real logged-in browser, CLI + extension, +1350 today.
5. alphaXiv/OpenResearch (Rust) - turn your coding agents into research agents, +940 today.
6. anthropics/claude-code (TypeScript) - agentic coding tool in terminal, +538 today.
7. anthropics/knowledge-work-plugins (Python) - open source repository of plugins for knowledge workers to use in Claude Cowork, +287 today.
8. Tencent/WeKnora (Go) - open-source LLM knowledge platform: turn raw documents into a queryable RAG, autonomous reasoning agent, +1123 today.
9. jamiepine/voicebox (TypeScript) - open-source AI voice studio. Clone, dictate, create, +665 today.
10. affaan-m/ECC (JavaScript) - The agent harness performance optimization system for Claude Code, Codex, etc., +1173 today.
11. roboflow/supervision (Python) - reusable computer vision tools, +327 today.
12. JustVugg/colibri (C) - Run frontier MoE models on hardware you already own — pure C, zero deps, +872 today.
13. TencentCloud/Octop (Python) - A smarter, self-hosted AI assistant — multi-user, multi-agent, +386 today.
14. cline/cline (TypeScript) - Autonomous coding agent as SDK, IDE extension, CLI assistant, +381 today.
15. coder/coder (Go) - Secure environments for developers and their agents, +204 today.
16. n8n-io/n8n (TypeScript) - Fair-code workflow automation platform with native AI capabilities, +319 today.

We may also include anthropics/knowledge-work-plugins.

From AI topic search (maybe we should include only those with significant stars > some threshold to keep report manageable). But we need to represent each category.

Let's compile a list of AI-related repos from topic search:

- open-webui/open-webui (Python) ⭐152,399 [topic:rag] - user-friendly AI Interface (Supports Ollama, OpenAI API, ...)
- langchain-ai/langchain (Python) ⭐146,540 [topic:rag] - The agent engineering platform.
- Shubhamsaboo/awesome-llm-apps (Python) ⭐138,664 [topic:rag] - 100+ AI Agents, Agent Skills and RAG Apps - Free and Open Source.
- Graphify-Labs/graphify (Python) ⭐119,034 [topic:rag] - Turn any codebase, with its docs, SQL schemas, configs, and PDFs, into a queryable knowledge graph. A /graphify skill for Claude Code, Cursor, Codex, and Gemini CLI...
- thedotmack/claude-mem (TypeScript) ⭐94,126 [topic:rag] - Persistent Context Across Sessions for Every Agent...
- infiniflow/ragflow (Go) ⭐90,892 [topic:rag] - RAGFlow is a leading open-source Retrieval-Augmented Generation (RAG) engine that fuses cutting-edge RAG with Agent capabilities...
- PaddlePaddle/PaddleOCR (Python) ⭐89,732 [topic:rag] - Turn any PDF or image document into structured data for your AI.
- datawhalechina/hello-agents (Python) ⭐79,608 [topic:rag] - building intelligent agents tutorial.
- headroomlabs-ai/headroom (Python) ⭐72,763 [topic:rag] - Compress tool outputs, logs, files, and RAG chunks before they reach the LLM...
- Mintplex-Labs/anything-llm (JavaScript) ⭐66,141 [topic:rag] - Stop renting your intelligence. Own it with AnythingLLM...
- mem0ai/mem0 (Python) ⭐65,510 [topic:rag] - The Memory Layer for AI Agents - Drop-in memory infrastructure...
- run-llama/llama_index (Python) ⭐52,203 [topic:rag] - LlamaIndex is the document processing platform for AI
- bojieli/ai-agent-book (Python) ⭐48,273 [topic:rag] - Book on AI Agent design & engineering
- jeecgboot/JeecgBoot (Java) ⭐47,865 [topic:rag] - low-code enterprise AI platform.
- milvus-io/milvus (Go) ⭐46,146 [topic:rag] - high-performance vector database
- tensorflow/tensorflow (C++) ⭐200,161 [topic:ml] - ML framework
- huggingface/transformers (Python) ⭐166,254 [topic:ml] - model-definition framework for state-of-the-art ML models
- rasbt/LLMs-from-scratch (Jupyter Notebook) ⭐105,154 [topic:ml] - implement a ChatGPT-like LLM in PyTorch
- pytorch/pytorch (Python) ⭐103,072 [topic:ml] - tensors and dynamic neural networks
- microsoft/ML-For-Beginners (Jupyter Notebook) ⭐90,608 [topic:ml] - classic ML for all
- tesseract-ocr/tesseract (C++) ⭐76,537 [topic:ml] - OCR engine
- OpenBB-finance/OpenBB (Python) ⭐73,153 [topic:ml] - open data platform for analysts, quants and AI agents
- microsoft/AI-For-Beginners (Jupyter Notebook) ⭐68,641 [topic:ml] - AI for All!
- scikit-learn/scikit-learn (Python) ⭐67,284 [topic:ml] - scikit-learn: machine learning in Python
- keras-team/keras (Python) ⭐64,320 [topic:ml] - Deep Learning for humans
- ultralytics/ultralytics (Python) ⭐61,728 [topic:ml] - Ultralytics YOLO27, YOLO26, YOLO11, YOLOv8 — object detection, instance segmentation...
- roboflow/supervision (Python) ⭐50,783 [topic:ml] - reusable computer vision tools
- jingyaogong/minimind (Python) ⭐61,479 [topic:llm-model] - train a 64M-parameter LLM from scratch
- 0xPlaygrounds/rig (Rust) ⭐8,655 [topic:llm-model] - build modular and scalable LLM Applications in Rust
- open-compass/opencompass (Python) ⭐7,450 [topic:llm-model] - LLM evaluation platform
- skyzh/tiny-llm (Python) ⭐4,576 [topic:llm-model] - LLM inference system on Apple Silicon
- anything-llm (already listed)
- others like dify, hermes-agent, AutoGPT, firecrawl, ollama, etc. Also include:
- Significant-Gravitas/AutoGPT (Python) ⭐187,411 [topic:llm] - accessible AI for everyone, to use and to build on.
- firecrawl/firecrawl (TypeScript) ⭐181,651 [topic:llm] - web data API to search, scrape, interact at scale.
- ollama/ollama (Go) ⭐181,164 [topic:llm] - get up and running with Kimi, GLM, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models.
- langgenius/dify (TypeScript) ⭐156,179 [topic:llm] - Build Agentic workflows, RAG pipelines, with rich AI model and tool support...
- DietrichGebert/ponytail (JavaScript) ⭐141,278 [topic:llm] - makes your AI agent think like the laziest senior dev.
- harry0703/MoneyPrinterTurbo (Python) ⭐124,442 [topic:llm] - generate HD short videos from a topic or keyword.
- browser-use/browser-use (Python) ⭐114,970 [topic:llm] - agents that use the browser.
- TauricResearch/TradingAgents (Python) ⭐107,299 [topic:llm] - Multi-Agents LLM Financial Trading Framework
- JuliusBrussee/caveman (Go) ⭐106,254 [topic:llm] - viral skill + proxy for coding agents that cuts 65% of tokens by talking like a caveman.
- AgentsMeetRL (HTML) not a code repo.
- DATAGEN (Python) ⭐1,803 [topic:llm-model] - AI-driven multi-agent research assistant.
- apache/casbin-gateway (Go) ⭐634 [topic:llm-model] - Casbin AI & MCP security gateway.
- Mirrowel/LLM-API-Key-Proxy (Python) ⭐553 [topic:llm-model] - Universal LLM Gateway.
- Picovoice/picollm (Python) ⭐318 [topic:llm-model] - On-device LLM Inference.
- Event-AHU/Medical_Image_Analysis (Python) ⭐239 [topic:llm-model] - foundation models based medical image analysis.
- asukaminato0721/telegram-summary-bot (TypeScript) ⭐200 [topic:llm-model] - Summarize group chat with AI.
- meilisearch/meilisearch (Rust) ⭐59,317 [topic:vector-db] - lightning-fast search engine API.
- VectifyAI/PageIndex (Python) ⭐35,683 [topic:vector-db] - Document Index for Vectorless, Reasoning-based RAG.
- qdrant/qdrant (Rust) ⭐34,639 [topic:vector-db] - High-performance, massive-scale Vector Database.
- topoteretes/cognee (Python) ⭐30,784 [topic:vector-db] - open-source AI memory platform for agents.
- NirDiamant/RAG_Techniques (Jupyter Notebook) ⭐29,520 [topic:vector-db] - advanced RAG techniques.
- weaviate/weaviate (Go) ⭐16,818 [topic:vector-db] - open-source vector database.
- alibaba/zvec (C++) ⭐15,962 [topic:vector-db] - lightweight in-process vector database.
- langchain4j/langchain4j (Java) ⭐13,116 [topic:vector-db] - Java library for LLM-powered apps.
- neuml/txtai (Python) ⭐12,956 [topic:vector-db] - all-in-one AI framework for semantic search, LLM orchestration.
- lancedb/lancedb (Rust) ⭐11,449 [topic:vector-db] - developer-friendly OSS embedded retrieval library.
- oramasearch/orama (TypeScript) ⭐10,555 [topic:vector-db] - search engine and RAG pipeline in browser, server, edge.
- oceanbase/oceanbase (C++) ⭐10,280 [topic:vector-db] - unified distributed database for AI era.
- affaan-m/ECC (JavaScript) ⭐261,082 [topic:llm] - the agent harness performance optimization system (already listed)
- NousResearch/hermes-agent (Python) ⭐246,522 [topic:llm] - the agent that grows with you.
- ... and more.

We need to pick representative projects for each category, ensuring we include some trending ones (with today's stars). For trending, many have zero total stars but high daily stars. For topics, many have high total stars.

We should include trending ones in categories as well, but maintain a manageable number.

The report requires "Top Projects by Category" with 3-8 representative projects per category. We'll need to list them with link, stars data (total + today's new if available). The star data for trending includes only today new stars (since total is 0). For topic search, total stars are provided.

We also need "Today's Highlights" - 3-5 sentences about most noteworthy AI open-source developments today.

We need "Trend Signal Analysis" - 200-300 words analyzing the hot list.

We need "Community Hot Spots" - bullet list of 3-5 specific projects or directions worth developer focus.

Make it professional and concise.

Now, let's decide on categories and choose projects.

### AI Infrastructure:

Key frameworks, SDKs, inference engines, dev tools, CLI.

Candidates:
- langchain-ai/langchain (Python) ⭐146,540 (topic:rag) - agent engineering platform.
- huggingface/transformers (Python) ⭐166,254 (topic:ml) - model definition.
- tensorflow/tensorflow (C++) ⭐200,161 (topic:ml).
- pytorch/pytorch (Python) ⭐103,072 (topic:ml).
- run-llama/llama_index (Python) ⭐52,203 (topic:rag) - document processing platform.
- headroomlabs-ai/headroom (Python) ⭐72,763 (topic:rag) - compress tool outputs, logs.
- coder/coder (Go) ⭐0 (+204 today) - secure environments for developers and their agents.
- n8n-io/n8n (TypeScript) ⭐0 (+319 today) - fair-code workflow automation with AI capabilities.
- justvugg/colibri (C) ⭐0 (+872 today) - run frontier MoE models on hardware, pure C.
- meilisearch/meilisearch (Rust) ⭐59,317 (topic:vector-db) - lightning-fast search engine API.
- qdrant/qdrant (Rust) ⭐34,639 (topic:vector-db) - high-performance vector DB.
- alibaba/zvec (C++) ⭐15,962 (topic:vector-db) - lightweight in-process vector DB.

We should pick 3-8 per category. Let's pick:

1. langchain-ai/langchain (Python) ⭐146,540
2. huggingface/transformers (Python) ⭐166,254
3. pytorch/pytorch (Python) ⭐103,072
4. coder/coder (Go) ⭐0 (+204 today) - secure dev environments.
5. n8n-io/n8n (TypeScript) ⭐0 (+319 today) - AI-powered workflow automation.
6. meilisearch/meilisearch (Rust) ⭐59,317 (topic:vector-db) - search engine.

### AI Agents / Workflows:

Key agent frameworks, automation, multi-agent.

Candidates:
- anthropics/claude-code (TypeScript) ⭐0 (+538) - agentic coding tool in terminal.
- cline/cline (TypeScript) ⭐0 (+381) - autonomous coding agent as SDK/IDE extension/CLI.
- addyosmani/agent-skills (JavaScript) ⭐0 (+680) - production-grade engineering skills for AI coding agents.
- Tencent/BrowserSkill (TypeScript) ⭐0 (+1350) - let AI agents use your real logged-in browser.
- alphaXiv/OpenResearch (Rust) ⭐0 (+940) - turn coding agents into research agents.
- affaan-m/ECC (JavaScript) ⭐261,082 (topic:llm) - agent harness performance optimization system.
- TencentCloud/Octop (Python) ⭐0 (+386) - smarter, self-hosted AI assistant with multi-agent.
- firecrawl/firecrawl (TypeScript) ⭐181,651 (topic:llm) - web data API to search, scrape, interact at scale.
- Significant-Gravitas/AutoGPT (Python) ⭐187,411 (topic:llm) - accessible AI for everyone, to use and to build on.
- browser-use/browser-use (Python) ⭐114,970 (topic:llm) - agents that use the browser.
- TauricResearch/TradingAgents (Python) ⭐107,299 (topic:llm) - multi-agent LLM financial trading framework.
- JuliusBrussee/caveman (Go) ⭐106,254 (topic:llm) - viral skill + proxy for coding agents that cuts token usage.

We need to select 3-8. Let's pick:

1. anthropics/claude-code (TypeScript) ⭐0 (+538 today) - agentic coding tool in terminal.
2. cline/cline (TypeScript) ⭐0 (+381 today) - autonomous coding agent SDK/IDE extension/CLI.
3. addyosmani/agent-skills (JavaScript) ⭐0 (+680 today) - production-grade engineering skills for AI coding agents.
4. firecrawl/firecrawl (TypeScript) ⭐181,651 (topic:llm) - web data API for search, scrape, interact at scale.
5. Significant-Gravitas/AutoGPT (Python) ⭐187,411 (topic:llm) - accessible AI for building autonomous agents.
6. browser-use/browser-use (Python) ⭐114,970 (topic:llm) - agents that can browse the web.

### AI Applications:

Specific apps, vertical solutions.

Candidates:
- jamiepine/voicebox (TypeScript) ⭐0 (+665 today) - open-source AI voice studio.
- PaddlePaddle/PaddleOCR (Python) ⭐89,732 (topic:rag) - OCR toolkit.
- ultralytics/ultralytics (Python) ⭐61,728 (topic:ml) - YOLO object detection, instance segmentation, etc.
- harry0703/MoneyPrinterTurbo (Python) ⭐124,442 (topic:llm) - generate HD short videos from topics/keywords.
- CherryHQ/cherry-studio (TypeScript) ⭐51,924 (topic:ai-agent) - AI productivity studio with smart chat, autonomous agents, 300+ assistants.
- siyuan-note/siyuan (TypeScript) ⭐46,410 (topic:ai-agent) - open-source privacy-first self-hosted knowledge workspace.
- hugohe3/ppt-master (Python) ⭐55,007 (topic:ai-agent) - AI turns documents or topics into real PowerPoint decks.

We need 3-8. Let's select:

1. jamiepine/voicebox (TypeScript) ⭐0 (+665 today) - open-source AI voice studio.
2. PaddlePaddle/PaddleOCR (Python) ⭐89,732 (topic:rag) - OCR toolkit for PDFs/images.
3. ultralytics/ultralytics (Python) ⭐61,728 (topic:ml) - YOLO object detection, instance segmentation.
4. harry0703/MoneyPrinterTurbo (Python) ⭐124,442 (topic:llm) - generate HD short videos via AI workflow.
5. CherryHQ/cherry-studio (TypeScript) ⭐51,924 (topic:ai-agent) - AI productivity studio with autonomous agents and 300+ assistants.

### LLMs / Training:

Model weights, training frameworks, fine-tuning tools.

Candidates:
- jingyaogong/minimind (Python) ⭐61,479 (topic:llm-model) - train a 64M-parameter LLM from scratch.
- 0xPlaygrounds/rig (Rust) ⭐8,655 (topic:llm-model) - build modular and scalable LLM applications in Rust.
- open-compass/opencompass (Python) ⭐7,450 (topic:llm-model) - LLM evaluation platform.
- skyzh/tiny-llm

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*