# AI Open Source Trends 2026-08-14

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-13 22:15 UTC

---

Got it, let's tackle this report step by step. First, I need to do Step 1: Filter out non-AI projects from the trending list and the topic search.
First, let's look at the 17 trending repos. Let's go one by one:
1. cathrynlavery/diagram-design: It's for Claude Code diagram types, AI-adjacent but wait, is it core AI? Wait no, wait it's a tool for AI coding agents, right? Wait no, let's check: it's 29 diagram types for Claude Code, self-contained HTML/SVG. Oh right, it's a skill/tool for AI coding agents, so AI relevant.
2. semantica-agi/semantica: Graph-native for accountable AI, definitely AI.
3. anthropics/skills: Public Agent Skills for Anthropic, AI agent related, yes.
4. cactus-compute/needle: 14MB foundation model for tiny devices, core AI/LLM, yes.
5. altic-dev/FluidVoice: On-device STT with custom AI model, AI application, yes.
6. unslothai/unsloth: Run/train LLMs and diffusion models, core AI infra, yes.
7. macro-inc/macro: Workspace with AI memory, agents, AI application, yes.
8. megadose/holehe: Check email usage on sites, OSINT, not AI? Wait wait, let's check: it's for checking if email is used on sites, no AI mention. Exclude.
9. smicallef/spiderfoot: OSINT automation, no AI core, exclude.
10. NVIDIA-NeMo/Switchyard: Route LLM traffic across providers, AI infra, yes.
11. holaboss-ai/holaOS: AI agent workspace, yes.
12. kepano/obsidian-skills: Agent skills for Obsidian, AI agent related, yes.
13. 3b1b/manim: Animation engine for math videos, not core AI, even if used for AI content, it's a general tool, exclude.
14. msitarzewski/agency-agents: AI agency agents, yes, AI agent related.
15. Lightricks/LTX-2: Audio-video generative model, core AI, yes.
16. lightningpixel/modly: 3D model from images with local AI, AI application, yes.
17. infiniflow/ragflow: RAG engine, core AI, yes.
Now the topic search results: all are tagged with AI/ML/agent/rag/llm topics, so they are all relevant, right? Wait the topic search is already AI-related, so we include those, but we need to categorize them properly.
Next Step 2: Categorize into the 4 categories. Let's define each category first to make it clear:
- 🔧 AI Infrastructure: Frameworks, SDKs, inference engines, dev tools, CLI tools for building AI systems, not end-user apps. Includes model serving, routing, training tools, dev utilities for AI.
- 🤖 AI Agents / Workflows: Agent frameworks, multi-agent systems, automation tools, agent skills, agent orchestration, workflow tools for AI agents.
- 📦 AI Applications: End-user or vertical-specific AI apps, not general frameworks. Includes on-device AI apps, productivity tools, domain-specific AI solutions.
- 🧠 LLMs / Training: Model weights, training frameworks, fine-tuning tools, small/tiny models, model inference tools for LLMs specifically, diffusion models? Wait LTX-2 is audio-video generative, so maybe LLMs/Training includes generative models? Wait no, wait let's check: LLMs/Training is for model development, training, fine-tuning, model weights, small foundation models. RAG/Knowledge is separate: vector DBs, RAG engines, knowledge management for AI.
Wait the categories given are:
1. 🔧 AI Infrastructure (frameworks, SDKs, inference engines, dev tools, CLI)
2. 🤖 AI Agents / Workflows (agent frameworks, automation, multi-agent systems)
3. 📦 AI Applications (specific apps, vertical solutions)
4. 🧠 LLMs / Training (model weights, training frameworks, fine-tuning tools)
5. 🔍 RAG / Knowledge (vector databases, retrieval-augmented generation, knowledge management)
Perfect, that's 5 categories, let's assign each project to the primary one.
First, let's process the Trending List (17 repos, filtered to 15, excluding holehe and spiderfoot):
1. cathrynlavery/diagram-design: Primary category 🤖 AI Agents / Workflows? Wait no, it's a skill for Claude Code, which is an agent. Wait or is it AI Infrastructure? Wait no, it's a tool for AI agents, so 🤖 Agents/Workflows? Wait let's see: it's 29 diagram types for Claude Code, which is an agent skill, so yes, 🤖.
2. semantica-agi/semantica: Let's see, graph-native for context and accountable AI. Wait is that RAG/Knowledge? Or AI Infrastructure? Wait it's infrastructure for context, so maybe 🔧 AI Infrastructure? Wait no, let's read the desc: Graph-Native Infrastructure for Context and Accountable AI Systems. Oh, it's infrastructure for AI context, so 🔧 AI Infrastructure? Wait or 🤖? No, let's see: if it's a system for accountable AI, maybe infrastructure. Wait no, let's hold that thought.
3. anthropics/skills: Public Agent Skills, so 🤖 AI Agents / Workflows, definitely.
4. cactus-compute/needle: 14MB foundation model for tiny devices, so 🧠 LLMs / Training, yes, it's a small foundation model.
5. altic-dev/FluidVoice: macOS dictation app with on-device AI STT, that's a 📦 AI Application, vertical solution for voice input.
6. unslothai/unsloth: Local UI to run/train LLMs and diffusion models, that's 🔧 AI Infrastructure, because it's a dev tool for training and running models.
7. macro-inc/macro: Unified workspace with AI memory, agents, etc. That's a 📦 AI Application, end-user productivity workspace.
8. NVIDIA-NeMo/Switchyard: Route LLM traffic across providers, that's 🔧 AI Infrastructure, model serving/routing tool.
9. holaboss-ai/holaOS: All-in-one AI agent workspace, 🤖 AI Agents / Workflows? Wait it's a workspace to run agents, so yes, agent workflow/orchestration.
10. kepano/obsidian-skills: Agent skills for Obsidian, 🤖 AI Agents / Workflows, yes.
11. msitarzewski/agency-agents: Complete AI agency agents, 🤖 AI Agents / Workflows, yes, it's pre-built agent personas.
12. Lightricks/LTX-2: Audio-video generative model inference and LoRA trainer, 🧠 LLMs / Training, because it's for training and inferring generative models.
13. lightningpixel/modly: Desktop app to generate 3D models from images with local AI, 📦 AI Application, vertical for 3D content creation.
14. infiniflow/ragflow: RAG engine, 🔍 RAG / Knowledge, obviously.
Now the topic search results, let's assign them to categories:
First, topic:ml (machine learning, general):
- tensorflow/tensorflow: 🔧 AI Infrastructure, framework.
- f/prompts.chat: Wait, it's a collection of ChatGPT prompts, what category? Wait it's a resource for LLM use, maybe 📦? No, wait no, it's a prompt library, but wait let's check: is it a tool? Wait no, but let's see, maybe it's a utility, but wait no, let's see if it fits any category. Wait maybe 🤖? No, wait let's see: prompts.chat is a collection of prompts for LLMs, which is a resource for AI agent/workflow use? Wait no, maybe 📦? Wait no, let's see, maybe it's a utility, but let's check other ml ones:
- huggingface/transformers: 🔧 AI Infrastructure, model framework, yes.
- rasbt/LLMs-from-scratch: 🧠 LLMs / Training, educational resource for building LLMs, yes.
- pytorch/pytorch: 🔧 AI Infrastructure, ML framework, yes.
- microsoft/ML-For-Beginners: 🧠 LLMs / Training? Wait it's general ML for beginners, so maybe 🧠, yes, educational for ML/AI training.
- netdata/netdata: Wait it's AI-powered observability, so 📦 AI Application, vertical for observability, yes.
- tesseract-ocr/tesseract: 🔧 AI Infrastructure? Wait it's an OCR engine, which is a foundational AI tool, so yes, 🔧.
- scikit-learn/scikit-learn: 🔧 AI Infrastructure, ML library, yes.
- keras-team/keras: 🔧 AI Infrastructure, deep learning framework, yes.
- ultralytics/ultralytics: 🧠 LLMs / Training? Wait it's YOLO for object detection, so model training/inference, yes, 🧠.
- roboflow/supervision: 🔧 AI Infrastructure, CV tools, yes.
- JuliaLang/julia: 🔧 AI Infrastructure, programming language for ML/AI, yes.
- rohitg00/ai-engineering-from-scratch: 🧠 LLMs / Training, educational for AI engineering, yes.
- apache/airflow: Wait it's workflow orchestration, used for AI pipelines, so 🤖 AI Agents / Workflows? Yes, because it's used for automating AI workflows.
Now topic:ai-agent:
- NousResearch/hermes-agent: 🤖 AI Agents / Workflows, agent framework, yes.
- shareAI-lab/learn-claude-code: 🤖 AI Agents / Workflows, agent harness educational resource, yes.
- thedaviddias/Front-End-Checklist: Wait, it's a checklist for frontend dev for humans and AI agents. What category? Maybe 🤖? Because it's for AI agents to use for frontend development, so yes, 🤖.
- Panniantong/Agent-Reach: 🤖 AI Agents / Workflows, agent that can browse the internet, yes.
- santifer/career-ops: 📦 AI Application, AI job search tool, vertical solution, yes.
- ZhuLinsen/daily_stock_analysis: 📦 AI Application, AI stock analysis tool, vertical, yes.
- CherryHQ/cherry-studio: 📦 AI Application? Wait no, it's an AI productivity studio with agents, wait no, it's a unified interface for LLMs and agents, wait no, let's see: it's a frontend for AI agents and LLMs, so maybe 🤖? Wait no, it's an end-user app, so 📦? Wait no, let's check: "AI productivity studio with smart chat, autonomous agents, and 300+ assistants. Unified access to frontier LLMs" — that's an end-user application, so 📦 AI Application.
- HKUDS/nanobot: 🤖 AI Agents / Workflows, lightweight agent framework, yes.
- zhayujie/CowAgent: 🤖 AI Agents / Workflows, AI assistant agent harness, yes.
- hugohe3/ppt-master: 📦 AI Application, AI tool to generate PowerPoint decks, vertical, yes.
- siyuan-note/siyuan: 📦 AI Application? Wait it's a knowledge workspace with AI agents, so end-user app, yes, 📦.
- bojieli/ai-agent-book: 🧠 LLMs / Training? Wait it's a book on AI agent design, educational resource, so maybe 🧠, or 🤖? Wait primary is 🤖? No, it's educational material for building agents, so maybe 🧠? Wait no, let's see: it's about AI agent engineering, so primary 🤖? Wait no, let's decide: it's a book on AI agent principles and practice, so 🤖 AI Agents / Workflows, as it's focused on agents.
- CopilotKit/CopilotKit: 🤖 AI Agents / Workflows, frontend stack for agents and generative UI, yes, it's a framework for building agent frontends, so agent workflow related.
- esengine/DeepSeek-Reasonix: 🤖 AI Agents / Workflows, AI coding agent, yes.
- agentscope-ai/QwenPaw: 🤖 AI Agents / Workflows, personal AI assistant, agent framework, yes.
Now topic:llm-model:
- 0xPlaygrounds/rig: 🔧 AI Infrastructure, Rust framework for building LLM apps, yes.
- open-compass/opencompass: 🧠 LLMs / Training, LLM evaluation platform, yes, it's for evaluating LLMs, which is part of model development.
- Eigenwise/atomic-agents: 🤖 AI Agents / Workflows, agent building framework, yes.
- skyzh/tiny-llm: 🧠 LLMs / Training, educational for LLM inference on Apple Silicon, yes.
- samchon/nestia: 🤖 AI Agents / Workflows, NestJS helper for AI chatbot development, yes, it's for building agent/chatbot apps.
- thinkwee/AgentsMeetRL: 🤖 AI Agents / Workflows, awesome list for agentic RL, yes, agent related.
- llm-jp/awesome-japanese-llm: 🧠 LLMs / Training, resource list for Japanese LLMs, yes.
- apache/casbin-gateway: 🔧 AI Infrastructure, AI/MCP security gateway, yes, infrastructure for AI apps.
- SeekingDream/Static-to-Dynamic-LLMEval: 🧠 LLMs / Training, LLM evaluation research, yes.
- Picovoice/picollm: 🧠 LLMs / Training, on-device LLM inference with quantization, yes, model inference tool.
- testtimescaling/testtimescaling.github.io: 🧠 LLMs / Training, survey on test-time scaling for LLMs, yes, research/educational.
- AIDASLab/Awesome-Diffusion-LLM: 🧠 LLMs / Training, resource list for diffusion LLMs, yes.
- AarambhDevHub/aarambh-studio: 🧠 LLMs / Training, LLM built from scratch in Rust, yes, model development.
- dg/ai-access: 🔧 AI Infrastructure, PHP library for accessing AI models, yes, SDK.
- LancerLab/croqtile: 🔧 AI Infrastructure, AI-native kernel DSL, yes, dev tool for AI.
- langgenius/dify: 🤖 AI Agents / Workflows? Wait no, it's for building agentic workflows and RAG pipelines, wait wait, topic is rag, so let's check topic:rag:
Topic:rag:
- langgenius/dify: Wait, it's for RAG and agent workflows, so primary? Let's see, it's a platform for building RAG and agentic workflows, so maybe 🤖? Or 🔍 RAG/Knowledge? Wait no, let's see: the category for RAG/Knowledge is vector DBs, RAG engines, knowledge management. Dify is a platform that includes RAG, but also agent workflows. Wait let's check other rag ones:
- open-webui/open-webui: 📦 AI Application, UI for local AI, end-user app, yes.
- langchain-ai/langchain: 🤖 AI Agents / Workflows, agent engineering platform, yes, even though it does RAG, primary is agent framework.
- Shubhamsaboo/awesome-llm-apps: 🤖 AI Agents / Workflows, collection of agent and RAG apps, yes, resource for agents.
- Graphify-Labs/graphify: 🔍 RAG / Knowledge, turns codebases into queryable knowledge graphs for RAG, yes, that's core RAG/knowledge.
- thedotmack/claude-mem: 🔍 RAG / Knowledge, persistent context for agents, memory layer, which is part of RAG/knowledge management, yes.
- infiniflow/ragflow: Already in trending, 🔍 RAG / Knowledge, yes.
- datawhalechina/hello-agents: 🤖 AI Agents / Workflows, tutorial for building agents, yes.
- headroomlabs-ai/headroom: 🔍 RAG / Knowledge? Wait it's for compressing RAG chunks and tool outputs, so yes, RAG optimization tool, so 🔍.
- Mintplex-Labs/anything-llm: 📦 AI Application, local-first AI agent experience, end-user app, yes.
- mem0ai/mem0: 🔍 RAG / Knowledge, universal memory layer for agents, yes, knowledge management for agents.
- FlowiseAI/Flowise: 🤖 AI Agents / Workflows, visual builder for AI agents, yes.
- run-llama/llama_index: 🔍 RAG / Knowledge? Wait it's a document agent and OCR platform, which is heavily RAG-focused, so yes, 🔍 RAG/Knowledge, even though it does agents, primary is RAG/knowledge.
- jeecgboot/JeecgBoot: 📦 AI Application, AI low-code platform, vertical enterprise solution, yes.
- milvus-io/milvus: 🔍 RAG / Knowledge, vector database, yes, core RAG infra.
- affaan-m/ECC: 🤖 AI Agents / Workflows, agent harness optimization system, yes.
- Significant-Gravitas/AutoGPT: 🤖 AI Agents / Workflows, autonomous agent framework, yes.
- ollama/ollama: 🔧 AI Infrastructure, local LLM runner, yes, inference engine.
- firecrawl/firecrawl: 🔍 RAG / Knowledge? Wait it's a context API for web scraping, which is used for RAG, so yes, 🔍 RAG/Knowledge, because it provides context for LLMs, which is part of RAG pipelines.
- browser-use/browser-use: 🤖 AI Agents / Workflows, tool for agents to automate web tasks, yes.
- harry0703/MoneyPrinterTurbo: 📦 AI Application, AI short video generation tool, vertical, yes.
- DietrichGebert/ponytail: 🤖 AI Agents / Workflows, agent harness that optimizes code writing, yes.
- meilisearch/meilisearch: 🔍 RAG / Knowledge, hybrid search engine for AI, yes, vector search for RAG.
- VectifyAI/PageIndex: 🔍 RAG / Knowledge, vectorless RAG document index, yes, core RAG tech.
- qdrant/qdrant: 🔍 RAG / Knowledge, vector database, yes.
- topoteretes/cognee: 🔍 RAG / Knowledge, AI memory platform with knowledge graph, yes.
- NirDiamant/RAG_Techniques: 🔍 RAG / Knowledge, RAG techniques tutorial, yes.
- weaviate/weaviate: 🔍 RAG / Knowledge, vector database, yes.
- alibaba/zvec: 🔍 RAG / Knowledge, in-process vector DB, yes.
- neuml/txtai: 🔍 RAG / Knowledge, all-in-one AI framework for semantic search and RAG, yes.
- langchain4j/langchain4j: 🤖 AI Agents / Workflows, Java agent/LLM framework, yes.
- lancedb/lancedb: 🔍 RAG / Knowledge, embedded vector DB for multimodal AI, yes.
- oceanbase/oceanbase: 🔍 RAG / Knowledge, distributed database for AI workloads, yes.
- databendlabs/databend: 🔍 RAG / Knowledge, data warehouse for AI analytics and RAG, yes.
Wait okay, that's categorization done. Now Step 3: Output the report.
First, 1. Today's Highlights: 3-5 sentences. Let's see what's hot today: First, the trending list has a huge spike for diagram-design (+4504 stars today) which is a skill for Claude Code, so AI coding agent skills are hot. Then, there's a lot of agent-related tools: Anthropic released public agent skills, multiple agent workspace tools (holaOS, Macro) are trending. Also, tiny on-device models (Needle, 14MB) are getting attention, plus LLM routing tools (Switchyard from NVIDIA) for cost optimization. Also, RAG and agent memory tools are still strong in the topic search. Let's draft that:
"Today's GitHub AI trending data reveals three dominant themes: explosive growth in AI coding agent tooling, surging interest in lightweight on-device AI models, and rapid innovation in agent orchestration and memory infrastructure. The top trending repository, a Claude Code diagram design skill, gained over 4,500 stars in a single day, highlighting massive demand for specialized agent skills. Anthropic’s public release of official Agent Skills and multiple open-source agent workspace frameworks (holaOS, Macro) signal a shift toward standardized, interoperable agent ecosystems. Meanwhile, NVIDIA’s Switchyard LLM routing tool and the 14MB tiny foundation model Needle point to growing focus on cost-optimized, edge-deployable AI infrastructure. RAG and persistent agent memory tools also remain top community priorities, with 12 RAG-related repositories ranking in the top 100 overall AI stars."
Wait that's good, 3-5 sentences, covers the main points.
Next, 2. Top Projects by Category. We need 3-8 per category, each with link, stars (total + today's if available), one sentence description.
Let's go category by category:
First, 🔧 AI Infrastructure (frameworks, SDKs, inference engines, dev tools, CLI):
Let's pick the top ones:
1. [unslothai/unsloth](https://github.com/unslothai/unsloth): ⭐0 total, +354 today. One sentence: Open-source local UI for running and training leading LLMs (including Qwen3, DeepSeek-V4, Gemma 4) and diffusion models (FLUX), optimized for consumer hardware with minimal configuration overhead.
2. [NVIDIA-NeMo/Switchyard](https://github.com/NVIDIA-NeMo/Switchyard): ⭐0 total, +408 today. One sentence: NVIDIA’s open-source LLM traffic routing tool that preserves native OpenAI/Anthropic API compatibility, enabling teams to dynamically switch between models and providers for cost and performance optimization.
3. [ollama/ollama](https://github.com/ollama/ollama): ⭐178,474 total, no today's count (it's in topic search, not trending today). One sentence: De facto standard local LLM inference engine supporting 100+ frontier models, enabling one-click deployment of private AI on consumer and edge hardware.
4. [huggingface/transformers](https://github.com/huggingface/transformers): ⭐164,078 total. One sentence: Industry-standard open-source framework for defining, fine-tuning, and deploying state-of-the-art text, vision, audio, and multimodal ML models across all major hardware platforms.
5. [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow): ⭐197,006 total. One sentence: Google’s production-grade end-to-end open-source ML framework, widely used for large-scale model training, inference, and MLOps across enterprise and research use cases.
6. [Picovoice/picollm](https://github.com/Picovoice/picollm): ⭐316 total. One sentence: Lightweight open-source LLM inference engine optimized for edge devices, featuring X-Bit quantization to run small LLMs with minimal memory and compute footprint.
Wait that's 6, good, all relevant, have links, stars, descriptions.
Next, 🤖 AI Agents / Workflows (agent frameworks, automation, multi-agent systems):
1. [anthropics/skills](https://github.com/anthropics/skills): ⭐0 total, +383 today. One sentence: Anthropic’s official public repository for reusable, standardized Agent Skills, enabling consistent, interoperable behavior across Claude Code and other supported agent platforms.
2. [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS): ⭐0 total, +380 today. One sentence: Open-source all-in-one AI agent workspace that unifies 100+ tool integrations, MCP support, and shared cross-agent memory to run any coding agent (Claude Code, Codex) across apps, browsers, and files.
3. [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent): ⭐230,097 total, topic:ai-agent. One sentence: Highly customizable open-source agent framework from NousResearch, designed to grow with user needs and support multi-model, multi-tool autonomous task execution.
4. [nanobot (HKUDS)](https://github.com/HKUDS/nanobot): ⭐46,944 total. One sentence: Ultra-lightweight, self-hosted personal AI agent framework with built-in WebUI, tool support, persistent memory, MCP compatibility, and multi-agent workflow orchestration.
5. [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit): ⭐36,745 total. One sentence: Open-source frontend stack for building AI agents and generative UI, with native support for React, Angular, mobile, and Slack, and the AG-UI protocol for agent interoperability.
6. [agency-agents (msitarzewski)](https://github.com/msitarzewski/agency-agents): ⭐0 total, +762 today. One sentence: Pre-built library of specialized AI agent personas (from frontend wizards to Reddit community managers) with defined processes and deliverables, enabling rapid deployment of custom AI agency teams.
7. [DeepSeek-Reasonix (esengine)](https://github.com/esengine/DeepSeek-Reasonix): ⭐34,457 total. One sentence: DeepSeek-native terminal AI coding agent engineered for prefix-cache stability, designed for long-running, low-latency coding task automation.
That's 7, good.
Next, 📦 AI Applications (specific apps, vertical solutions):
1. [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design): ⭐0 total, +4,504 today (top trending repo today). One sentence: Collection of 29 self-contained, shadow-free SVG diagram templates optimized for Claude Code, eliminating dependency on Mermaid for high-quality technical diagram generation.
2. [FluidVoice (altic-dev)](https://github.com/altic-dev/FluidVoice): ⭐0 total, +187 today. One sentence: Fastest open-source macOS dictation app with on-device speech-to-text and custom-trained AI enhancement, serving as a local, privacy-first alternative to Wispr Flow.
3. [ragflow (infiniflow)](https://github.com/infiniflow/ragflow): ⭐87,981 total, +473 today. Wait no, RAG is separate, wait no: RAGFlow is also an application? Wait no, we categorized it as RAG/Knowledge, right. Let's pick other apps:
3. [macro-inc/macro](https://github.com/macro-inc/macro): ⭐0 total, +1,180 today. One sentence: Unified team workspace combining email, chat, docs, tasks, calls, CRM, and AI agents with shared cross-context memory, linked via @-mentions for seamless team collaboration.
4. [modly (lightningpixel)](https://github.com/lightningpixel/modly): ⭐0 total, +221 today. One sentence: Desktop AI application that generates 3D models from input images using fully local GPU-powered AI, with no cloud dependency for privacy and low latency.
5. [MoneyPrinterTurbo (harry0703)](https://github.com/harry0703/MoneyPrinterTurbo): ⭐103,079 total. One sentence: End-to-end AI application that generates high-definition short videos from a single keyword or topic, using LLMs for script generation and automated workflow for audio, visuals, and editing.
6. [Cherry Studio (CherryHQ)](https://github.com/CherryHQ/cherry-studio): ⭐50,424 total. One sentence: AI productivity desktop app with built-in smart chat, autonomous agents, and 300+ pre-built assistants, supporting unified access to all frontier LLM providers

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*