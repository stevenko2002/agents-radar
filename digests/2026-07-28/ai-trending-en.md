# AI Open Source Trends 2026-07-28

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-07-27 22:16 UTC

---

Got it, let's tackle this step by step. First, I need to do Step 1: Filter out non-AI related repos from both the trending list and the topic search.
First, let's go through the 15 trending repos first:
1. bitchat (bluetooth mesh chat) → no, unrelated AI, skip.
2. amnezia-vpn → no, VPN tool, skip.
3. moeru-ai/airi → yes! It's a self-hosted AI companion, does realtime voice, can play games, mentions Neuro-sama, that's AI agent/application.
4. opengeos/GeoLibre → wait, it mentions runs in Jupyter notebooks, but wait, is it AI related? Wait no, wait the description says GIS platform for geospatial data. Wait wait, no, let's check later, wait no, wait the topic search has other stuff, but first trending: superfile (terminal file manager) → no, skip. MediaCrawler (social media crawler) → no, unless it's used for AI data, but description doesn't say AI related, skip. pbakaus/impeccable → wait description says "design language that makes your AI harness better at design" → oh right! That's AI related, it's for AI harnesses, so that's AI infrastructure maybe? Wait let's confirm: yes, it's a design language for AI tools, so AI infra. Then shiyu-coder/Kronos → "Foundation Model for the Language of Financial Markets" → that's LLM/training, definitely AI. alibaba/open-code-review → "Hybrid architecture code review tool: deterministic pipelines + LLM Agent" → yes, AI agent/infra, uses LLM. jenkins → no, just automation server, no AI mention, skip. bradautomates/claude-video → "Give Claude the ability to watch any video" → that's AI agent tool, RAG related? Wait it's a tool for AI agents to process video, so AI application/infra? vudovn/ag-kit → wait the description is blank? Wait the link is there but no description, so maybe skip? Wait no, wait the topic search has ag-kit? Wait no, the trending list's vudovn/ag-kit has no description, so maybe exclude? Wait apache cassandra → no, database, not AI specific, skip. mvanhorn/last30days-skill → "AI agent skill that researches any topic across Reddit, X, YouTube..." → yes, AI agent skill, definitely AI. ocornut/imgui → GUI library, no AI, skip.
Okay so from trending list, the AI related ones are: moeru-ai/airi, pbakaus/impeccable, shiyu-coder/Kronos, alibaba/open-code-review, bradautomates/claude-video, mvanhorn/last30days-skill.
Now the topic search results, all of these are tagged with AI topics (llm, ai-agent, rag, ml, llm-model, vector-db) so all of those are AI related, right? Wait but we need to make sure, but the topic search is already filtered by AI-related tags, so those are all valid.
Now Step 2: Categorize them into the 4 categories. Let's list the categories again:
🔧 AI Infrastructure (frameworks, SDKs, inference engines, dev tools, CLI)
🤖 AI Agents / Workflows (agent frameworks, automation, multi-agent systems)
📦 AI Applications (specific apps, vertical solutions)
🧠 LLMs / Training (model weights, training frameworks, fine-tuning tools)
🔍 RAG / Knowledge (vector databases, retrieval-augmented generation, knowledge management)
Let's go through each relevant project and assign primary category:
First, trending AI projects:
1. moeru-ai/airi: It's a self-hosted AI companion, does voice chat, game automation, has multiple platform clients. That's an AI Application (vertical: personal AI companion/waifu agent) → 📦
2. pbakaus/impeccable: Design language for AI harnesses, so it's a dev tool for AI applications/agents → 🔧 AI Infrastructure
3. shiyu-coder/Kronos: Foundation model for financial market language → that's a LLM, so 🧠 LLMs / Training
4. alibaba/open-code-review: Code review tool with LLM agent, so it's an AI application for dev, wait or infra? Wait no, it's a specific app for code review, uses LLM and agent, so 📦 AI Application? Wait no, wait it's a dev tool, but it's an application. Wait let's see: it's a code review tool, so vertical solution for dev, so 📦? Or wait, no, let's check: the category says AI Applications are specific apps, vertical solutions. Yes, code review is a vertical dev app. Wait but alternatively, if it's a tool for building AI, it's infra, but no, this is an end-user app for code review that uses AI. Wait no, wait let's read the description again: "Hybrid architecture code review tool: deterministic pipelines + LLM Agent" → yes, it's an application that uses AI, so 📦.
5. bradautomates/claude-video: Tool that lets Claude process videos, extracts frames, transcribes, feeds to Claude. That's a dev tool/AI infrastructure for building video-capable agents? Or application? Wait it's a tool for extending AI agent capabilities, so maybe 🔧? Or 📦? Wait no, it's a utility for AI systems, so 🔧 AI Infrastructure. Wait or is it an agent tool? Let's see: it's a component for AI agents to process video input, so infra.
6. mvanhorn/last30days-skill: AI agent skill for research, so that's a component for AI agents, so 🤖 AI Agents / Workflows? Wait yes, it's an agent skill, so part of agent workflows.
Now the topic search projects, let's categorize each:
First, llm topic:
- affaan-m/ECC: Agent harness performance optimization system, for Claude Code, Cursor etc. → that's AI Infrastructure (dev tool for agent harnesses) → 🔧
- NousResearch/hermes-agent: Agent that grows with you → 🤖 AI Agents
- Significant-Gravitas/AutoGPT: AutoGPT, accessible AI tools, agent framework → 🤖
- ollama/ollama: Run LLMs locally, inference engine → 🔧 AI Infrastructure (inference engine)
- f/prompts.chat: Awesome ChatGPT prompts, prompt library → wait, what category? Maybe 📦? Or 🔧? Wait it's a resource for using LLMs, so maybe 📦 AI Application? Or wait, no, it's a prompt collection, but let's see: alternatively, maybe it's a utility for LLM users, so 📦.
- huggingface/transformers: Model definition framework for ML models, training and inference → 🧠 LLMs / Training (it's a core framework for LLMs)
- firecrawl/firecrawl: API to scrape web for LLMs → that's for RAG, right? Wait it's web scraping for AI data, so 🔍 RAG / Knowledge? Or 🔧 Infra? Wait it's a tool that feeds data to RAG systems, so maybe 🔧? Or RAG? Wait let's see: RAG category is vector DBs, retrieval, knowledge management. Firecrawl is for web data ingestion for RAG, so maybe 🔧? Or wait, let's check the other RAG ones: infininflow/ragflow is RAG engine, so that's 🔍. Firecrawl is a data ingestion tool for AI, so 🔧 Infra.
- langgenius/dify: Build RAG pipelines, agentic workflows → 🤖 AI Agents / Workflows? Or 🔍 RAG? Wait it's a platform for building agent workflows and RAG, so primary is 🤖 Agents, but also RAG. Let's assign primary 🤖.
- open-webui/open-webui: User-friendly AI interface for LLMs → 📦 AI Application (it's an end-user app for interacting with LLMs)
- langchain-ai/langchain: Agent engineering platform → 🤖 AI Agents / Workflows
- browser-use/browser-use: Make websites accessible for AI agents, automate online tasks → 🤖 AI Agents (it's a tool for agents to browse web)
- rasbt/LLMs-from-scratch: Implement LLM from scratch in PyTorch → 🧠 LLMs / Training (educational, but it's about LLM training)
- harry0703/MoneyPrinterTurbo: Generate short videos with AI → 📦 AI Application (vertical: AI video generation)
- Graphify-Labs/graphify: Turn codebase into queryable knowledge graph, for RAG → 🔍 RAG / Knowledge (it's a knowledge graph for RAG, no vector store)
- JuliusBrussee/caveman: Claude Code skill that cuts token usage → 🤖 AI Agents (it's an agent skill)
- jingyaogong/minimind: Train 64M LLM from scratch → 🧠 LLMs / Training
- The-Pocket/PocketFlow: 100-line LLM framework for agents → 🤖 AI Agents (agent framework)
- 0xPlaygrounds/rig: Build LLM apps in Rust → 🔧 AI Infrastructure (framework for LLM apps)
- open-compass/opencompass: LLM evaluation platform → 🔧 AI Infrastructure (dev tool for LLM testing)
- Eigenwise/atomic-agents: Build AI agents atomically → 🤖 AI Agents
- skyzh/tiny-llm: Course for LLM inference serving on Apple Silicon → 🧠 LLMs / Training? Or 🔧 Infra? It's about inference serving, so 🔧 AI Infrastructure.
- genieincodebottle/generative-ai: Generative AI resources, roadmap → 📦? Wait no, it's a resource repo, maybe 📦 AI Application? Or wait, maybe it's a learning resource, but let's see, alternatively, maybe it's under 📦 as a resource for AI practitioners.
- samchon/nestia: NestJS helper + AI chatbot development → 🔧 AI Infrastructure (framework for building AI chatbots in NestJS)
- thinkwee/AgentsMeetRL: Awesome list for Agentic RL → 🧠? Wait no, RL for agents, so 🤖 AI Agents? Or 🧠? Wait it's a resource list, maybe 🤖.
- llm-jp/awesome-japanese-llm: Overview of Japanese LLMs → 🧠 LLMs (resource list)
- thinkwee/AwesomeOPD: Awesome list for On-Policy Distillation → 🧠 LLMs / Training (distillation is a training technique)
- chrisliu298/awesome-llm-unlearning: LLM unlearning resources → 🧠 LLMs / Training
- RiccardoBiosas/awesome-MLSecOps: MLSecOps tools → 🔧 AI Infrastructure (security for AI/ML systems)
- Picovoice/picollm: On-device LLM inference with X-Bit Quantization → 🔧 AI Infrastructure (inference engine)
- Event-AHU/Medical_Image_Analysis: Foundation models for medical image analysis → 📦 AI Application (vertical: medical AI)
Now vector-db topic:
- Mintplex-Labs/anything-llm: Local-first agent experience, uses LLMs → 📦 AI Application? Wait no, it's a platform for running local LLM agents, so 🤖? Or 📦? Wait it's an end-user app, so 📦.
- meilisearch/meilisearch: Search engine with AI-powered hybrid search → 🔍 RAG / Knowledge (it's a search tool for RAG)
- run-llama/llama_index: Document agent and OCR platform, for RAG → 🔍 RAG / Knowledge
- milvus-io/milvus: Vector database → 🔍 RAG / Knowledge (core vector DB)
- VectifyAI/PageIndex: Vectorless RAG document index → 🔍 RAG / Knowledge
- qdrant/qdrant: Vector database → 🔍 RAG / Knowledge
- topoteretes/cognee: AI memory platform with knowledge graph → 🔍 RAG / Knowledge (memory/knowledge for agents)
- NirDiamant/RAG_Techniques: Advanced RAG techniques tutorials → 🔍 RAG / Knowledge (educational resource)
- weaviate/weaviate: Vector database with vector + structured search → 🔍 RAG / Knowledge
- alibaba/zvec: Lightweight in-process vector DB → 🔍 RAG / Knowledge
- neuml/txtai: All-in-one AI framework for semantic search, LLM orchestration → 🔧? Or 🔍? It has RAG capabilities, but also LLM orchestration, so maybe 🔧 AI Infrastructure? Wait no, let's see: it's for semantic search and RAG, so primary 🔍?
- StarTrail-org/LEANN: RAG on personal devices, 97% storage savings → 🔍 RAG / Knowledge (efficient RAG for edge)
- langchain4j/langchain4j: Java library for LLM apps, includes vector stores, RAG, agents → 🔧 AI Infrastructure (Java SDK for LLM apps)
- lancedb/lancedb: Embedded retrieval library for multimodal AI → 🔍 RAG / Knowledge (retrieval for multimodal RAG)
- oramasearch/orama: Search engine for RAG in browser/edge → 🔍 RAG / Knowledge
ai-agent topic:
- santifer/career-ops: AI job search agent → 📦 AI Application (vertical: job search AI agent)
- Panniantong/Agent-Reach: AI agent that browses the entire internet, no API fees → 🤖 AI Agents / Workflows (browsing agent tool)
- ZhuLinsen/daily_stock_analysis: LLM-powered stock analysis system → 📦 AI Application (vertical: fintech AI)
- CherryHQ/cherry-studio: AI productivity studio with agents, 300+ assistants → 📦 AI Application (productivity AI app)
- HKUDS/nanobot: Lightweight self-hosted personal AI agent framework → 🤖 AI Agents / Workflows
- zhayujie/CowAgent: Open-source super AI assistant, agent harness → 🤖 AI Agents / Workflows
- siyuan-note/siyuan: Personal knowledge management software with AI → 📦 AI Application (PKM AI app)
- hugohe3/ppt-master: AI generates PowerPoint decks → 📦 AI Application (vertical: office AI)
- CopilotKit/CopilotKit: Frontend stack for agents, generative UI → 🔧 AI Infrastructure (dev tool for building agent frontends)
- iOfficeAI/AionUi: Cowork app for AI coding CLIs → 📦 AI Application (productivity for AI devs)
- Gitlawb/openclaude: Runs Claude anywhere, uses any model → 🤖 AI Agents / Workflows (agent runtime)
- googleworkspace/cli: Google Workspace CLI with AI agent skills → 🤖 AI Agents / Workflows (agent tool for Google Workspace)
- HKUDS/Vibe-Trading: Personal trading agent → 📦 AI Application (vertical: fintech trading AI)
- esengine/DeepSeek-Reasonix: DeepSeek-native AI coding agent for terminal → 🤖 AI Agents / Workflows (coding agent)
ml topic:
- tensorflow/tensorflow: ML framework → 🧠 LLMs / Training (core ML framework)
- pytorch/pytorch: ML framework → 🧠 LLMs / Training
- microsoft/ML-For-Beginners: ML beginner course → 🧠 LLMs / Training (educational)
- netdata/netdata: AI-powered observability → 📦 AI Application (vertical: devops AI)
- tesseract-ocr/tesseract: OCR engine → 📦 AI Application? Or 🔧? Wait it's an OCR tool used for AI data ingestion, so 📦 AI Application (vertical: OCR AI tool)
- OpenBB-finance/OpenBB: Open data platform for analysts, quants, AI agents → 📦 AI Application (vertical: fintech data platform)
- scikit-learn/scikit-learn: ML library → 🧠 LLMs / Training (core ML framework)
- keras-team/keras: Deep learning framework → 🧠 LLMs / Training
- ultralytics/ultralytics: YOLO object detection etc → 🧠 LLMs / Training (CV model framework)
- microsoft/AI-For-Beginners: AI beginner course → 🧠 LLMs / Training (educational)
- JuliaLang/julia: Programming language for ML/AI → 🔧 AI Infrastructure (language for AI/ML development)
- roboflow/supervision: CV tools for object detection etc → 🧠 LLMs / Training (CV model tools)
Wait but now, for Step 3, the Top Projects by Category: we need 3-8 per category, representative, so pick the most notable ones, with stars total and today's new (if available, from trending list, else total stars from topic search).
First, let's list each category with top projects:
First, 🔧 AI Infrastructure:
Let's pick:
1. ollama/ollama: Total 177,024 stars, trending? Wait no, it's in topic search, total stars. Wait wait, the trending list has today's new stars, the topic search has total stars. So for projects in both? No, the trending list's 15 are separate from the 79 topic search, except maybe some overlap? Let's check: no, the 15 trending are separate from the 79 topic search, right? The problem says "15 repositories" in trending, 79 in topic search, deduplicated.
So for each project, if it's in the trending list, we have today's new stars, else just total.
So 🔧 AI Infrastructure:
- ollama/ollama (https://github.com/ollama/ollama): 177,024 total stars. What it is: Leading open-source local LLM inference engine, supports Kimi-K2.6, GLM-5.2, DeepSeek, Qwen and dozens of mainstream open/closed-source models, enables one-click local deployment of LLMs without GPU configuration for most use cases.
Wait also, alibaba/open-code-review? No, that's an app. Wait pbakaus/impeccable: 0 total, +849 today. Oh right, it's in trending, so total 0, today +849. Description: Design language system built explicitly for AI agent harnesses and coding tools, reduces hallucination in AI-generated UI/UX and standardizes cross-tool design consistency for AI products.
Then bradautomates/claude-video: 0 total, +412 today. Description: Open-source utility that extends Claude (and other LLM) capabilities to process video input, automatically downloads videos, extracts frames, generates transcripts and feeds structured multimodal data to LLM agents for video understanding tasks.
Then langchain4j/langchain4j (https://github.com/langchain4j/langchain4j): 12,707 total stars. Description: Idiomatic Java SDK for building LLM-powered applications, provides unified API for mainstream LLM providers, vector stores, and supports MCP, tool calling, RAG and multi-agent development for JVM enterprise stacks.
Then Picovoice/picollm (https://github.com/Picovoice/picollm): 315 total stars. Description: Open-source on-device LLM inference engine powered by X-Bit quantization, enables low-latency, privacy-first LLM deployment on edge devices without cloud dependencies.
That's 5 for 🔧, good.
Next, 🤖 AI Agents / Workflows:
Let's pick:
- NousResearch/hermes-agent (https://github.com/NousResearch/hermes-agent): 221,392 total stars. Description: General-purpose open-source AI agent framework from NousResearch, designed for adaptive learning and extended tool use, supports seamless integration with mainstream LLMs and custom skill extensions for complex task automation.
- langchain-ai/langchain (https://github.com/langchain-ai/langchain): 142,711 total stars. Description: Industry-leading agent engineering platform, provides modular components for building stateful, multi-step AI agents, supports RAG, tool calling, memory management and multi-agent orchestration for production use cases.
- HKUDS/nanobot (https://github.com/HKUDS/nanobot): 46,300 total stars. Description: Ultra-lightweight open-source self-hosted personal AI agent framework, supports MCP protocol, multi-agent workflows, persistent memory and cross-platform WebUI, ideal for local private agent deployment.
- mvanhorn/last30days-skill (https://github.com/mvanhorn/last30days-skill): 0 total, +221 today. Description: Ready-to-use AI agent skill that aggregates and synthesizes cross-platform content (Reddit, X, YouTube, Hacker News, Polymarket, web) into grounded summaries, no API fees required for core functionality.
- CopilotKit/CopilotKit (https://github.com/CopilotKit/CopilotKit): 36,320 total stars. Description: Frontend development stack for AI agents and generative UI, provides React/Angular/Mobile components for embedding AI copilots into applications, and is the maintainer of the open AG-UI protocol for agent interoperability.
- esengine/DeepSeek-Reasonix (https://github.com/esengine/DeepSeek-Reasonix): 27,901 total stars. Description: Native DeepSeek-optimized AI coding agent for terminal use, built with prefix-cache stability for long-running development sessions, integrates directly with DeepSeek model ecosystems for code generation, refactoring and debugging.
That's 6, good.
Next, 📦 AI Applications:
- open-webui/open-webui (https://github.com/open-webui/open-webui): 146,966 total stars. Description: User-friendly open-source web interface for interacting with local and cloud LLMs, supports Ollama, OpenAI API and dozens of model providers, enables private, self-hosted access to LLM capabilities for individuals and teams.
- CherryHQ/cherry-studio (https://github.com/CherryHQ/cherry-studio): 49,047 total stars. Description: All-in-one AI productivity studio with built-in smart chat, autonomous agents and 300+ pre-built assistants, provides unified access to frontier LLMs from OpenAI, Anthropic, Google and open-source model providers.
- harry0703/MoneyPrinterTurbo (https://github.com/harry0703/MoneyPrinterTurbo): 99,552 total stars. Description: Open-source AI short video generation tool, automates the full workflow from topic/keyword input to script generation,素材 collection, video editing and narration, supports custom model integration for personalized content production.
- moeru-ai/airi (https://github.com/moeru-ai/airi): 0 total, +2344 today. Description: Self-hosted open-source AI companion platform, supports real-time voice chat, cross-platform (Web/macOS/Windows) deployment, and can be integrated with Minecraft, Factorio and other games for interactive virtual character experiences, inspired by Neuro-sama's interactive AI persona.
- alibaba/open-code-review (https://github.com/alibaba/open-code-review): 0 total, +980 today. Description: Battle-tested open-source code review tool from Alibaba, combines deterministic rule-based pipelines with LLM agents to generate line-level code comments, includes built-in fine-tuned rules for common code issues (NPE, thread safety, XSS, SQL injection) and supports OpenAI/Anthropic compatible models.
- siyuan-note/siyuan (https://github.com/siyuan-note/siyuan): 45,457 total stars. Description: Privacy-first self-hosted personal knowledge management software with integrated AI capabilities, supports bidirectional linking, local data storage and AI-powered content search and summarization for personal and team knowledge organization.
That's 6, good.
Next, 🧠 LLMs / Training:
- Significant-Gravitas/AutoGPT (https://github.com/Significant-Gravitas/AutoGPT): 185,719 total stars. Description: Pioneer open-source autonomous agent framework focused on making AI accessible to all users, provides no-code tools for building and deploying AI agents, with support for custom model integration, tool extensions and workflow automation.
Wait no, wait AutoGPT is an agent framework? Wait wait no, let's check: the topic tag is llm, but AutoGPT is an agent. Wait wait no, let's correct: shiyu-coder/Kronos is 0 total, +442 today. Description: Open-source foundation model fine-tuned explicitly for the language of financial markets, supports tasks including market sentiment analysis, signal prediction and financial text understanding for quantitative and fintech use cases.
- jingyaogong/minimind (https://github.com/jingyaogong/minimind): 53,906 total stars. Description: Educational open-source project that trains a 64-parameter LLM from scratch in just 2 hours using PyTorch, provides full source code and tutorials for learning core LLM training concepts including pre-training, fine-tuning and alignment.
- tensorflow/tensorflow (https://github.com/tensorflow/tensorflow): 196,576 total stars. Description: Industry-standard open-source end-to-end machine learning framework, supports training and inference for LLMs, computer vision, NLP and other AI tasks, with extensive ecosystem support for production deployment.
- pytorch/pytorch (https://github.com/pytorch/pytorch): 102,024 total stars. Description: Popular open-source machine learning framework with dynamic computational graphs, provides strong GPU acceleration and is the de facto standard for LLM research, training and custom model development.
- ultralytics/ultralytics (https://github.com/ultralytics/ultralytics): 59,952 total stars. Description: State-of-the-art open-source computer vision framework, supports YOLO series models for object detection, instance segmentation, pose estimation and tracking, widely used for edge and cloud CV applications.
- microsoft/AI-For-Beginners (https://github.com/microsoft/AI-For-Beginners): 52,986 total stars. Description: Free 12-week AI beginner course from Microsoft, covers core AI concepts, LLMs, computer vision, NLP and practical hands-on projects for learners with no prior AI experience.
Wait wait, but earlier I thought AutoGPT is agent, but its topic tag is llm? Wait no, let's check the topic search: AutoGPT is under topic:llm? Wait the data says [topic:llm] for AutoGPT. Oh right, the user provided data says that. So maybe it's under LLMs? Wait no, AutoGPT is an agent framework built on LLMs. Wait maybe I misassigned. Wait no, let's check the data again: the topic search results list AutoGPT under [topic:llm], yes. So maybe its primary category is 🤖, but let's adjust. Wait no, let's make sure: for 🧠 LLMs / Training, the projects should be about models, training, frameworks for LLMs. So Kronos is a foundation model, minimind is training LLMs, TensorFlow, PyTorch are core ML/LLM frameworks, ultralytics is CV models, Microsoft AI for Beginners is educational for LLMs/AI. That's 6, good.
Next, 🔍 RAG / Knowledge:
- infininflow/ragflow (https://github.com/infiniflow/ragflow): 86,159 total stars. Description: Leading open-source RAG engine that combines advanced retrieval capabilities with agent functionality, provides a superior context layer for LLMs, supports multi-modal document parsing, deep query understanding and accurate citation for production RAG systems.
- mem0ai/mem0 (https://github.com/mem0ai/mem0): 61,858 total stars. Description: Universal open-source memory layer for AI agents, provides persistent long-term memory storage across agent sessions, supports knowledge graph integration and vector retrieval for context-aware agent interactions.
- LlamaIndex (run-llama/llama_index: https://github.com/run-llama/llama_index): 51,147 total stars. Description: Leading open-source document agent and OCR platform, provides tools for ingesting, indexing and querying unstructured data for RAG systems, supports multi-modal data and integration with mainstream LLMs and vector databases.

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*