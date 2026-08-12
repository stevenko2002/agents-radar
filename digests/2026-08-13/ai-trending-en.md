# AI Open Source Trends 2026-08-13

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-12 22:16 UTC

---

Got it, let's tackle this step by step. First, I need to do Step 1: Filter out all the non-AI related repos from the given data. Let's go through both the trending list and the topic search results first.

First, let's list all non-AI repos to exclude:
From the trending 17:
- [cathrynlavery/diagram-design] is HTML/SVG diagrams, not AI? Wait wait, wait the description says "29 editorial diagram types for Claude Code"—wait no, wait is it AI related? Wait no, let's check others: [macro-inc/macro] is a unified workspace with AI memory, that's AI. [semantica-agi/semantica] is graph-native for AI systems, yes. [stablyai/orca] is ADE for parallel agents, yes. [msitarzewski/agency-agents] is AI agency agents, yes. [shiyu-coder/Kronos] is financial foundation model, yes. [NanmiCoder/MediaCrawler] is crawlers for social media, no AI? Wait description is just crawlers, no AI mention, exclude. [hugohe3/ppt-master] is AI turning docs into PPT, yes. [infiniflow/ragflow] is RAG engine, yes. [paperclipai/paperclip] is agent management, yes. [NVIDIA-NeMo/Switchyard] wait, wait the trending entry for Switchyard has no description? Wait no, wait the trending list entry for NVIDIA-NeMo/Switchyard is just the repo name, Rust, no description. Wait wait, let's check again: the trending list entries:
Wait let's go one by one for trending 17:
1. cathrynlavery/diagram-design: Description says "for Claude Code" but it's a diagram tool, is it AI? Wait no, the core is diagram templates, maybe not core AI. Wait but let's confirm later. Wait no, let's do the non-AI first:
- [cathrynlavery/diagram-design]: Wait no, maybe? Wait no, let's see others:
- [macro-inc/macro]: has AI memory, yes, AI related.
- [semantica-agi/semantica]: AI systems infrastructure, yes.
- [stablyai/orca]: agent fleet management, yes.
- [msitarzewski/agency-agents]: AI agents, yes.
- [shiyu-coder/Kronos]: financial LLM, yes.
- NanmiCoder/MediaCrawler: social media crawlers, no AI mentioned, exclude.
- hugohe3/ppt-master: AI generated PPT, yes.
- infiniflow/ragflow: RAG engine, yes.
- paperclipai/paperclip: agent management, yes.
- NVIDIA-NeMo/Switchyard: Wait the trending entry has no description? Wait no, wait the user's data says for NVIDIA-NeMo/Switchyard: [Rust] ⭐0 (+370 today), no description. Wait but it's NVIDIA NeMo, which is AI? Wait no, wait maybe I need to check if it's AI related. Wait NeMo is NVIDIA's AI framework, so Switchyard is probably related? Wait no, wait let's see the other trending entries:
- ZuodaoTech/everyone-can-use-english: English learning, no AI? Wait description is just "人人都能用英语", no AI mention, exclude.
- smicallef/spiderfoot: OSINT tool, no AI? Wait description says threat intelligence, is it AI? No, it's automated OSINT, not core AI, exclude.
- localsend/localsend: AirDrop alternative, no AI, exclude.
- Lightricks/LTX-2: audio-video generative model, yes, AI.
- embabel/embabel-agent: JVM agent framework, yes.
- cactus-compute/needle: 14MB tiny foundation model, yes.

Wait wait, also the diagram-design one: description says "for Claude Code" but it's just diagram templates, no AI functionality, right? So exclude that? Wait let's confirm: the description is "29 editorial diagram types for Claude Code. Self-contained HTML + SVG. No shadows, no Mermaid-slop." So it's just diagram assets for Claude Code users, not an AI tool itself, so exclude.

Then from the topic search results, all are tagged with AI topics: llm, ai-agent, rag, llm-model, vector-db, ml, so all those are AI related, no need to exclude.

Okay Step 1 done, filtered list is all except:
- cathrynlavery/diagram-design
- NanmiCoder/MediaCrawler
- ZuodaoTech/everyone-can-use-english
- smicallef/spiderfoot
- localsend/localsend

Wait wait, wait the topic search has hugohe3/ppt-master again, right? Because it's tagged with ai-agent, so that's included.

Now Step 2: Categorize into the 5 categories. Let's define each category first to make sure:

1. 🔧 AI Infrastructure: Frameworks, SDKs, inference engines, dev tools, CLI, foundational tooling for building AI systems.
2. 🤖 AI Agents / Workflows: Agent frameworks, automation tools, multi-agent systems, agent management, workflow orchestration for agents.
3. 📦 AI Applications: Vertical, user-facing AI applications, specific use case tools (not foundational frameworks).
4. 🧠 LLMs / Training: Model weights, training frameworks, fine-tuning tools, model inference packages, LLM core research.
5. 🔍 RAG / Knowledge: Vector databases, RAG engines, knowledge management, retrieval systems, context layers for LLMs.

Now let's categorize each filtered project:

First, Trending List (filtered):
- macro-inc/macro: It's a unified workspace with AI memory, team tools, agents. Wait primary category? Let's see: it has agents, workflow, so 🤖 AI Agents / Workflows? Wait no, wait it's a workspace with agents, but also AI memory. Wait no, let's see: it's a productivity workspace with integrated AI agents and shared memory, so primary is 🤖 AI Agents / Workflows? Or wait, no, let's check:
Wait macro: "unified workspace for teams: email, chat, docs, tasks, agents, calls, and CRM — @-linked together with shared AI memory." So core is agentic workflow for teams, so 🤖.
- semantica-agi/semantica: "Graph-Native Infrastructure for Context and Accountable AI Systems" — that's foundational infrastructure for AI systems, so 🔧 AI Infrastructure.
- stablyai/orca: "ADE for working with a fleet of parallel agents" — agent development environment, so 🤖 AI Agents / Workflows.
- msitarzewski/agency-agents: "A complete AI agency at your fingertips" — pre-built specialized agents, so 🤖 AI Agents / Workflows? Wait or is it an application? Wait no, it's a set of configurable agents for users to use, wait no, description says "each agent is a specialized expert with personality, processes, and proven deliverables" — it's an agent framework/package, so 🤖.
- shiyu-coder/Kronos: "Foundation Model for the Language of Financial Markets" — that's an LLM, so 🧠 LLMs / Training.
- hugohe3/ppt-master: "AI turns documents or topics into real, native PowerPoint decks" — specific user-facing application, so 📦 AI Applications.
- infiniflow/ragflow: "RAG engine that fuses RAG with Agent capabilities" — RAG engine, so 🔍 RAG / Knowledge.
- paperclipai/paperclip: "open-source app everyone uses to manage agents at work" — agent management app, so 🤖 AI Agents / Workflows? Wait it's an app for managing agents, so maybe 🤖, or is it application? Wait no, it's a tool for agent operations, so 🤖.
- NVIDIA-NeMo/Switchyard: Wait, NeMo is NVIDIA's AI framework, Switchyard—wait let me recall, Switchyard is a tool for managing and deploying AI models, right? Wait no, wait the user's data has no description, but since it's under NVIDIA NeMo, which is AI infrastructure, so 🔧 AI Infrastructure? Wait wait, no, let me check: actually Switchyard is a Rust-based tool for serving LLMs, right? So yes, 🔧 AI Infrastructure.
- Lightricks/LTX-2: "Official Python inference and LoRA trainer package for the LTX-2 audio–video generative model" — that's model training/inference tool, so 🧠 LLMs / Training.
- embabel/embabel-agent: "Agent framework for the JVM" — agent framework, so 🤖 AI Agents / Workflows.
- cactus-compute/needle: "14MB foundation model for tiny devices" — tiny LLM, so 🧠 LLMs / Training.

Now the Topic Search Results, categorized:

🔧 AI Infrastructure:
- affaan-m/ECC: "agent harness performance optimization system" — dev tool for agent harnesses, so 🔧.
- ollama/ollama: "Get up and running with [models]" — local LLM inference engine, so 🔧.
- firecrawl/firecrawl: "context API to search, scrape, interact with web" — web data tool for AI, infrastructure, so 🔧.
- huggingface/transformers: "model-definition framework for state-of-the-art ML models" — core ML framework, 🔧.
- langgenius/dify: "Build Agentic workflows, RAG pipelines" — wait no, wait dify is a low-code platform for building AI apps? Wait no, wait let's check: dify is a platform to build AI workflows, agents, RAG. Wait primary category? Wait let's see: it's a platform for building AI applications, but also has infrastructure? Wait no, let's see the categories: wait no, let's recheck:
Wait no, let's go back to the topic search entries:
Wait affaan-m/ECC: agent harness tool, so 🔧.
ollama/ollama: inference engine, 🔧.
firecrawl/firecrawl: web scraping API for AI context, 🔧.
huggingface/transformers: core ML framework, 🔧.
langchain-ai/langchain: "agent engineering platform" — wait langchain is a framework for building agents, workflows, so 🤖? Wait no, wait langchain is both an agent framework and infrastructure? Wait no, let's see: the category for AI Infrastructure is frameworks, SDKs, dev tools, CLI. Langchain is a framework for building LLM apps, agents, so maybe 🤖? Wait no, wait let's check the other ones:
Wait open-webui/open-webui: "User-friendly AI Interface" — that's a UI for LLMs, so 📦 AI Application? Or is it infrastructure? No, it's a user-facing app, so 📦.
langchain-ai/langchain: agent engineering platform, so 🤖 AI Agents / Workflows.
browser-use/browser-use: "Make websites accessible for AI agents" — tool for agents, so 🤖? Or infrastructure? Wait it's a tool that agents use, so maybe 🤖, or is it application? No, it's a library for building agent tools, so 🤖.
Graphify-Labs/graphify: "Turn any codebase into queryable knowledge graph" — knowledge management for AI, so 🔍 RAG / Knowledge.
datawhalechina/hello-agents: "从零开始构建智能体" tutorial, wait no, it's a tutorial repo? Wait no, the description is a tutorial, but is it a tool? Wait no, wait the stars are 72k, but it's a learning resource? Wait no, wait let's check: the topic is rag, but description is a tutorial for building agents. Wait maybe categorize as 🤖? Or wait, no, let's see: if it's a tutorial, but no, wait maybe it's a practical guide with code? Wait no, let's move on, maybe categorize it as 🤖 since it's about agent building.
headroomlabs-ai/headroom: "Compress tool outputs, logs, files, and RAG chunks before they reach the LLM" — tool for RAG/LLM context optimization, so 🔍 RAG / Knowledge? Or 🔧? Wait it's a library/proxy for optimizing context for LLMs, so maybe 🔧? Wait no, it's specifically for RAG and agent context, so 🔍.
Mintplex-Labs/anything-llm: "local-first agent experience" — AI app for local LLM use, so 📦 AI Application.
mem0ai/mem0: "Universal memory layer for AI Agents" — agent memory tool, so 🤖 AI Agents / Workflows? Or 🔍? Wait it's memory for agents, so 🤖.
FlowiseAI/Flowise: "Build AI Agents, Visually" — low-code agent builder app, so 📦 AI Application.
run-llama/llama_index: "leading document agent and OCR platform" — RAG/agent framework, so 🔍 RAG / Knowledge? Wait llama index is a framework for building RAG apps, so 🔍.
jeecgboot/JeecgBoot: "enterprise-level AI low-code platform" — AI application platform, so 📦 AI Application.
milvus-io/milvus: vector database, so 🔍 RAG / Knowledge.
meilisearch/meilisearch: search engine with AI hybrid search, so 🔍 RAG / Knowledge.
VectifyAI/PageIndex: "Document Index for Vectorless, Reasoning-based RAG" — RAG tool, so 🔍.
qdrant/qdrant: vector database, 🔍.
topoteretes/cognee: "open-source AI memory platform for agents" — agent memory/knowledge, so 🔍 RAG / Knowledge.
NirDiamant/RAG_Techniques: RAG techniques tutorial, but it's a resource repo, wait but is it a tool? No, but it's tagged with vector-db, but it's a tutorial. Wait maybe skip? No, wait no, the user said filter AI related, so include, but categorize as 🔍? Or maybe it's a resource, but let's see.
weaviate/weaviate: vector database, 🔍.
alibaba/zvec: in-process vector database, 🔍.
neuml/txtai: "All-in-one AI framework for semantic search, LLM orchestration" — RAG/LLM framework, so 🔍? Or 🔧? Wait it's for semantic search and RAG, so 🔍.
langchain4j/langchain4j: Java library for LLM apps, agents, RAG, so 🤖? Or 🔧? Wait it's a framework for JVM, so 🔧 AI Infrastructure? Wait no, let's see: it's a library for building LLM-powered apps, including agents and RAG, so maybe 🤖? Or wait, let's check the ML category first.

🧠 LLMs / Training:
From topic search:
- tensorflow/tensorflow: ML framework, 🧠.
- pytorch/pytorch: ML framework, 🧠.
- microsoft/ML-For-Beginners: ML learning resource, 🧠.
- netdata/netdata: "AI-powered full stack observability" — wait is this ML? The description says AI-powered observability, so 🧠? Or is it infrastructure? Wait no, it uses ML for observability, so 🧠.
- tesseract-ocr/tesseract: OCR engine, which is ML/CV, so 🧠.
- scikit-learn/scikit-learn: ML library, 🧠.
- keras-team/keras: deep learning framework, 🧠.
- ultralytics/ultralytics: YOLO object detection, CV/ML, 🧠.
- roboflow/supervision: CV tools, 🧠.
- JuliaLang/julia: programming language for ML, 🧠.
- rohitg00/ai-engineering-from-scratch: AI engineering learning resource, 🧠.
- apache/airflow: workflow orchestration, but tagged with ml, so it's used for ML workflows, so 🧠? Wait no, Airflow is general workflow, but tagged with ml, so include in 🧠? Or wait, no, let's see: the topic is ml, so yes, it's used for ML pipelines, so 🧠.
Wait also from trending:
- shiyu-coder/Kronos: financial LLM, 🧠.
- Lightricks/LTX-2: audio-video generative model training/inference, 🧠.
- cactus-compute/needle: tiny foundation model, 🧠.
From topic search LLM model topic:
- jingyaogong/minimind: train 64M LLM from scratch, 🧠.
- 0xPlaygrounds/rig: build LLM apps in Rust, wait is that infrastructure? Wait description says "Build modular and scalable LLM Applications in Rust" — so that's 🔧 AI Infrastructure? Wait topic is llm-model, but it's a framework for building LLM apps, so 🔧.
- open-compass/opencompass: LLM evaluation platform, so 🧠? Or 🔧? It's a tool for evaluating LLMs, so 🧠.
- Eigenwise/atomic-agents: "Building AI agents, atomically" — agent framework, so 🤖.
- skyzh/tiny-llm: "learn LLM inference on Apple Silicon" — LLM inference tool, so 🔧 AI Infrastructure.
- samchon/nestia: "NestJS Helper + AI Chatbot Development" — AI dev tool for NestJS, so 🔧.
- thinkwee/AgentsMeetRL: Awesome list for Agentic RL, so 🧠 (RL is ML subfield).
- llm-jp/awesome-japanese-llm: Japanese LLM resource, 🧠.
- chrisliu298/awesome-llm-unlearning: LLM unlearning resource, 🧠.
- apache/casbin-gateway: "Casbin AI & MCP security gateway" — AI security infrastructure, so 🔧.
- SeekingDream/Static-to-Dynamic-LLMEval: LLM evaluation paper repo, 🧠.
- Picovoice/picollm: "On-device LLM Inference Powered by X-Bit Quantization" — LLM inference tool, 🔧.
- AIDASLab/Awesome-Diffusion-LLM: Diffusion LLM papers, 🧠.
- AarambhDevHub/aarambh-studio: "Decoder-only LLM built from scratch in pure Rust" — LLM training/framework, 🧠.
- paulburgess1357/nvim-mcp: MCP server for Neovim, AI dev tool, 🔧.

Wait now RAG / Knowledge category:
From topic search rag topic:
- Shubhamsaboo/awesome-llm-apps: 100+ RAG/agent apps, 📦? Wait no, it's a collection of apps, but wait the topic is rag, but it's a list of apps. Wait no, let's see: the description is "100+ AI Agents, Agent Skills and RAG Apps" — so it's a resource, but maybe categorize as 📦? Or wait no, let's see:
Wait no, RAG / Knowledge category is for vector DBs, RAG engines, knowledge management. So:
- Shubhamsaboo/awesome-llm-apps: wait no, maybe it's a resource, but let's see: thedaviddias/Front-End-Checklist: topic ai-agent, it's a checklist for frontend dev for humans and AI agents, so 📦? Or 🤖? Wait no, it's a resource for building AI agent frontends, so maybe 🤖? Wait no, let's get back to RAG:
- thedotmack/claude-mem: "Persistent Context Across Sessions for Every Agent" — agent memory/knowledge, so 🔍 RAG / Knowledge? Because it's context management for agents, which is part of RAG/knowledge layer.
- infiniflow/ragflow: already in trending, RAG engine, 🔍.
- datawhalechina/hello-agents: tutorial for agents, but topic is rag? Wait no, the user's data says topic:rag for datawhalechina/hello-agents? Wait let's check: the user's data says "datawhalechina/hello-agents [Python] ⭐72,572 [topic:rag] 📚 《从零开始构建智能体》——从零开始的智能体原理与实践教程" — oh, maybe tagged with rag, but it's an agent tutorial. Wait maybe categorize as 🤖.
- headroomlabs-ai/headroom: compress RAG chunks, so 🔍 RAG / Knowledge.
- Mintplex-Labs/anything-llm: local AI app with knowledge base, so 📦 AI Application.
- mem0ai/mem0: universal memory for agents, so 🔍 RAG / Knowledge (since memory is part of knowledge layer for agents).
- FlowiseAI/Flowise: build RAG/agents visually, so 📦 AI Application.
- run-llma/llama_index: document agent/RAG platform, so 🔍 RAG / Knowledge.
- jeecgboot/JeecgBoot: low-code platform with knowledge base, RAG, so 📦 AI Application.
- milvus-io/milvus: vector DB, 🔍.
- VectifyAI/PageIndex: vectorless RAG document index, 🔍.
- qdrant/qdrant: vector DB, 🔍.
- topoteretes/cognee: agent memory/knowledge graph, 🔍.
- NirDiamant/RAG_Techniques: RAG techniques resource, 🔍.
- weaviate/weaviate: vector DB, 🔍.
- alibaba/zvec: vector DB, 🔍.
- neuml/txtai: semantic search/RAG framework, 🔍.
- langchain4j/langchain4j: has RAG support, so 🔍? Or 🤖? Wait it's a framework for building LLM apps with RAG and agents, so maybe 🤖, but also RAG. Wait let's pick primary: if it's a framework for agents and RAG, primary 🤖? Or wait, let's see the categories again.

Wait now AI Agents / Workflows category:
Let's list all:
- macro-inc/macro (trending)
- stablyai/orca (trending)
- msitarzewski/agency-agents (trending)
- paperclipai/paperclip (trending)
- embabel/embabel-agent (trending)
- NousResearch/hermes-agent (topic search)
- Significant-Gravitas/AutoGPT (topic)
- langchain-ai/langchain (topic)
- browser-use/browser-use (topic)
- datawhalechina/hello-agents (topic)
- mem0ai/mem0 (topic)
- CopilotKit/CopilotKit (topic)
- bojieli/ai-agent-book (topic)
- esengine/DeepSeek-Reasonix (topic)
- agentscope-ai/QwenPaw (topic)
- CowAgent (zhayujie/CowAgent, topic)
- siyuan-note/siyuan (topic)
- CherryHQ/cherry-studio (topic)
- HKUDS/nanobot (topic)
- Panniantong/Agent-Reach (topic)
- santifer/career-ops (topic)
- ZhuLinsen/daily_stock_analysis (topic)
- affaan-m/ECC (topic)
- Eigenwise/atomic-agents (topic)

Wait AI Applications category:
- hugohe3/ppt-master (trending)
- Mintplex-Labs/anything-llm (topic)
- FlowiseAI/Flowise (topic)
- jeecgboot/JeecgBoot (topic)
- Shubhamsaboo/awesome-llm-apps (topic) — wait it's a list of apps, but maybe it's a resource, but let's see: the description is 100+ AI apps, so maybe 📦.
- f/prompts.chat (topic) — prompt library, user-facing app, so 📦.
- harry0703/MoneyPrinterTurbo (topic) — AI short video generator, 📦.
- thedaviddias/Front-End-Checklist (topic) — checklist for building AI agent frontends, 📦? Or 🤖? Wait it's a resource for developers building AI agent UIs, so maybe 📦.

Wait LLMs / Training category:
- shiyu-coder/Kronos (trending)
- Lightricks/LTX-2 (trending)
- cactus-compute/needle (trending)
- tensorflow/tensorflow (topic)
- pytorch/pytorch (topic)
- microsoft/ML-For-Beginners (topic)
- netdata/netdata (topic)
- tesseract-ocr/tesseract (topic)
- scikit-learn/scikit-learn (topic)
- keras-team/keras (topic)
- ultralytics/ultralytics (topic)
- roboflow/supervision (topic)
- JuliaLang/julia (topic)
- rohitg00/ai-engineering-from-scratch (topic)
- apache/airflow (topic)
- jingyaogong/minimind (topic)
- open-compass/opencompass (topic)
- thinkwee/AgentsMeetRL (topic)
- llm-jp/awesome-japanese-llm (topic)
- chrisliu298/awesome-llm-unlearning (topic)
- SeekingDream/Static-to-Dynamic-LLMEval (topic)
- AIDASLab/Awesome-Diffusion-LLM (topic)
- AarambhDevHub/aarambh-studio (topic)
- 0xPlaygrounds/rig (topic) — wait earlier I thought 🔧, but it's for building LLM apps, wait no, description says "Build modular and scalable LLM Applications in Rust" — so it's a framework for LLM apps, so maybe 🤖? Or 🔧? Wait let's put it in 🔧 AI Infrastructure.

Wait AI Infrastructure category:
- semantica-agi/semantica (trending)
- NVIDIA-NeMo/Switchyard (trending)
- ollama/ollama (topic)
- firecrawl/firecrawl (topic)
- huggingface/transformers (topic)
- 0xPlaygrounds/rig (topic)
- skyzh/tiny-llm (topic)
- samchon/nestia (topic)
- apache/casbin-gateway (topic)
- Picovoice/picollm (topic)
- paulburgess1357/nvim-mcp (topic)

Wait wait, let's adjust some mis-categorized ones:
- langchain-ai/langchain: it's a framework for building agents, workflows, RAG apps, so primary 🤖 AI Agents / Workflows, right? Because its core is agent engineering.
- run-llama/llama_index: it's a framework for building RAG and document agents, so primary 🔍 RAG / Knowledge, correct.
- mem0ai/mem0: universal memory for agents, so primary 🤖 AI Agents / Workflows, because it's agent memory, part of agent tooling.
- headroomlabs-ai/headroom: compresses RAG chunks and agent outputs, so primary 🔍 RAG / Knowledge, since it's for RAG context optimization.
- Mintplex-Labs/anything-llm: local-first AI app with knowledge base, so 📦 AI Applications, correct.
- FlowiseAI/Flowise: visual builder for AI agents/RAG, so 📦 AI Application, user-facing tool.
- jeecgboot/JeecgBoot: enterprise low-code AI platform, so 📦 AI Application.
- f/prompts.chat: prompt library, user-facing, 📦.
- harry0703/MoneyPrinterTurbo: AI short video generator, 📦.
- thedaviddias/Front-End-Check

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*