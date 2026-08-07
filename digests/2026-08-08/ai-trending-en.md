# AI Open Source Trends 2026-08-08

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-07 22:15 UTC

---

Got it, let's tackle this report step by step. First, I need to do Step 1: Filter AI-related projects from both the trending list and the topic search, exclude non-AI ones. Let's go through each repo first.

First, the Trending List (17 repos):
Let's check each:
1. PrimeIntellect-ai/prime-agent: AI agent, yes, relevant.
2. addyosmani/agent-skills: AI coding agent skills, yes.
3. cloudflare/computer: Agent computer use tool, yes.
4. mattpocock/skills: AI agent skills, yes.
5. obra/superpowers: Agentic skills framework, yes.
6. goauthentik/authentik: Auth tool, no, non-AI, exclude.
7. semantica-agi/semantica: Context/accountable AI systems, yes.
8. 666ghj/MiroFish: Swarm intelligence engine, AI related, yes.
9. chenyme/grok2api: Grok API gateway, yes, AI API tool.
10. jdx/mise: Dev tool, non-AI? Wait, no, wait, is it AI related? No, it's a general dev tool, env runner, exclude.
11. Significant-Gravitas/AutoGPT: Classic AI agent, yes.
12. google/guava: Java general lib, non-AI, exclude.
13. unclebob/swarm-forge: Multi-agent coordination, yes.
14. denoland/celld: Durable objects, non-AI? Wait, no, unless it's for AI? The description is self-hosted distributed Durable Objects, no mention of AI, exclude.
15. K2SOsint/Legendary_OSINT: OSINT tools, not core AI, exclude.
16. pranshuparmar/witr: Process tracing CLI, non-AI, exclude.
17. google/skills: Agent skills for Google products, yes.

Now the AI Topic Search results, all are tagged AI related, so all are relevant, right? Let's confirm, they are all AI/ML, agents, RAG, LLMs, vector DBs, etc. So filter out non-AI first, then categorize.

Next Step 2: Categorize into the 5 categories. Let's list each category and assign projects:

First, 🔧 AI Infrastructure (frameworks, SDKs, inference engines, dev tools, CLI):
Let's see:
- 0xPlaygrounds/rig: Rust LLM app framework, yes.
- open-compass/opencompass: LLM eval platform, yes.
- skyzh/tiny-llm: LLM inference serving course/tool for Apple Silicon, yes.
- Picovoice/picollm: On-device LLM inference, yes.
- AarambhDevHub/aarambh-studio: Pure Rust LLM built from scratch, yes.
- paulburgess1357/nvim-mcp: MCP server for Neovim, dev tool for agents, yes.
- jingyaogong/minimind: LLM training from scratch, wait no, wait LLM training is under LLMs/Training? Wait no, let's check the categories again:
Wait the categories are:
1. 🔧 AI Infrastructure: frameworks, SDKs, inference engines, dev tools, CLI
2. 🤖 AI Agents / Workflows: agent frameworks, automation, multi-agent systems
3. 📦 AI Applications: specific apps, vertical solutions
4. 🧠 LLMs / Training: model weights, training frameworks, fine-tuning tools
5. 🔍 RAG / Knowledge: vector databases, RAG, knowledge management

Okay, so let's assign correctly:

First, 🤖 AI Agents / Workflows:
From trending list:
- PrimeIntellect-ai/prime-agent: Self-improving RLM agent for coding/long tasks, yes.
- addyosmani/agent-skills: Production engineering skills for AI coding agents, yes.
- cloudflare/computer: Agent computer use tool, yes.
- mattpocock/skills: Agent skills for engineers, yes.
- obra/superpowers: Agentic skills framework, yes.
- Significant-Gravitas/AutoGPT: Accessible AI agent platform, yes.
- unclebob/swarm-forge: Multi-agent coordination tool, yes.
- google/skills: Agent skills for Google products, yes.
- semantica-agi/semantica: Graph-native AI context/accountable systems, yes.
- 666ghj/MiroFish: Swarm intelligence engine, yes.
From topic search:
- NousResearch/hermes-agent: Agent that grows with you, yes.
- Panniantong/Agent-Reach: AI agent with internet access, yes.
- santifer/career-ops: AI job search agent, yes.
- ZhuLinsen/daily_stock_analysis: LLM-powered stock analysis agent, yes.
- CherryHQ/cherry-studio: AI productivity studio with agents, yes.
- HKUDS/nanobot: Lightweight self-hosted personal agent framework, yes.
- zhayujie/CowAgent: Super AI assistant agent, yes.
- hugohe3/ppt-master: AI agent that turns docs to PowerPoint, yes.
- CopilotKit/CopilotKit: Frontend stack for agents, yes.
- bojieli/ai-agent-book: (Wait, that's a book, but it's about AI agent design, but maybe? Wait no, wait the category is agents/workflows, but maybe it's more educational? Wait no, let's check: bojieli/ai-agent-book is a book with code, but maybe it's under? Wait no, let's see other agents: agentscope-ai/QwenPaw: Personal AI assistant, yes. esengine/DeepSeek-Reasonix: AI coding agent, yes. iOfficeAI/AionUi: Cowork app for CLI agents, yes. Gitlawb/openclaude: Runs anywhere agent, yes. Eigenwise/atomic-agents: Building AI agents atomically, yes. affaan-m/ECC: Agent harness performance optimization, yes. Okay, that's the agents category.

Next, 🔍 RAG / Knowledge:
From topic search:
- langgenius/dify: Agentic workflows/RAG platform, yes.
- open-webui/open-webui: AI interface for local/cloud models, RAG support, yes.
- langchain-ai/langchain: Agent engineering platform with RAG, yes.
- Shubhamsaboo/awesome-llm-apps: Collection of RAG/agent apps, yes.
- Graphify-Labs/graphify: Codebase to knowledge graph for RAG, yes.
- thedotmack/claude-mem: Persistent context for agents (RAG memory), yes.
- infiniflow/ragflow: RAG engine with agent capabilities, yes.
- datawhalechina/hello-agents: Agent tutorial with RAG, yes.
- headroomlabs-ai/headroom: Token compression for RAG/agent inputs, yes.
- Mintplex-Labs/anything-llm: Local-first agent/RAG experience, yes.
- mem0ai/mem0: Universal memory layer for agents (RAG knowledge), yes.
- FlowiseAI/Flowise: Visual AI agent/RAG builder, yes.
- run-llama/llama_index: Document agent/OCR platform with RAG, yes.
- langchain-ai/langgraph: Resilient agent builder with RAG, yes.
- meilisearch/meilisearch: AI-powered hybrid search (RAG retrieval), yes.
- VectifyAI/PageIndex: Vectorless RAG document index, yes.
- qdrant/qdrant: Vector database for RAG, yes.
- topoteretes/cognee: AI memory platform with knowledge graph for RAG, yes.
- weaviate/weaviate: Vector database for RAG, yes.
- alibaba/zvec: Lightweight vector DB for RAG, yes.
- langchain4j/langchain4j: Java LLM library with RAG support, yes.
- neuml/txtai: All-in-one AI framework with RAG, yes.
- lancedb/lancedb: Embedded retrieval library for multimodal RAG, yes.
- oramasearch/orama: Search engine/RAG pipeline, yes.
- oceanbase/oceanbase: Distributed DB for AI/RAG workloads, yes.
- databendlabs/databend: Data warehouse for AI/RAG, yes.
Wait, also, are there any from the trending list? Let's see: semantica-agi/semantica is about context for AI, maybe that's RAG? Wait no, earlier I put it in agents, but maybe it's RAG? Wait no, let's check its description: Graph-Native Infrastructure for Context and Accountable AI Systems. Oh right, that's knowledge/context, so maybe RAG/Knowledge. Wait but let's make sure primary category. Let's adjust later.

Next, 🧠 LLMs / Training:
From topic search:
- jingyaogong/minimind: Train 64M LLM from scratch in 2h, yes.
- 0xPlaygrounds/rig: Wait no, rig is infrastructure? Wait no, rig is "Build modular and scalable LLM Applications in Rust" – wait, is that LLM training or infrastructure? Wait no, let's check: the category is LLMs/Training: model weights, training frameworks, fine-tuning tools. So minimind is training a LLM from scratch, yes. open-compass/opencompass is LLM evaluation, wait, is evaluation under LLMs/Training? Or infrastructure? Wait maybe LLMs/Training includes eval? Wait no, let's see: open-compass is LLM evaluation platform, so maybe LLMs/Training. Then:
- llm-jp/awesome-japanese-llm: Overview of Japanese LLMs, yes.
- chrisliu298/awesome-llm-unlearning: LLM unlearning resources, yes.
- Picovoice/picollm: On-device LLM inference, wait no, that's infrastructure? Wait no, picollm is on-device LLM, so maybe LLMs/Training? Or infrastructure? Wait let's see: the category LLMs/Training is model weights, training frameworks, fine-tuning. Picovoice is on-device inference, maybe infrastructure? Wait no, let's check AarambhDevHub/aarambh-studio: Decoder-only LLM built from scratch in Rust, that's LLM model, so yes, LLMs/Training. Then:
- genieincodebottle/generative-ai: Generative AI resources, including LLM stuff, but maybe it's more educational? Wait no, let's see: kennethleungty/Finance-LLMs: LLM use cases in finance, no, that's application? Wait wait, let's correct:
Wait LLMs/Training category is for projects that are about LLM models, training, fine-tuning, evaluation, unlearning, etc. So:
- jingyaogong/minimind: Train LLM from scratch, yes.
- open-compass/opencompass: LLM evaluation platform, yes.
- chrisliu298/awesome-llm-unlearning: LLM unlearning resources, yes.
- llm-jp/awesome-japanese-llm: Japanese LLM overview, yes.
- AarambhDevHub/aarambh-studio: Pure Rust LLM built from scratch, yes.
- kennethleungty/Finance-LLMs: Wait no, that's LLM applications in finance, so that's AI Applications. Oh right! I messed up. So Finance-LLMs is a vertical application, so under AI Applications.
- liguge/Awesome-large-language-model-for-Prognostics-and-health-management: LLM for predictive maintenance, that's AI Application, vertical.
- HKBU-LAGAS/Awesome-Item-ID-Gen-RecSys: LLM for recommender systems, that's AI Application.
- AIDASLab/Awesome-Diffusion-LLM: Diffusion LLM papers, that's LLM research, so LLMs/Training? Or maybe educational, but it's about LLM models, so yes.
- paulburgess1357/nvim-mcp: That's a dev tool for agents, so AI Infrastructure, right? Because it's a CLI/dev tool for AI agents.

Okay, now 🔧 AI Infrastructure:
Let's list:
- 0xPlaygrounds/rig: Rust framework for scalable LLM apps, yes.
- skyzh/tiny-llm: LLM inference serving course/tool for Apple Silicon, yes.
- Picovoice/picollm: On-device LLM inference with X-Bit Quantization, yes.
- paulburgess1357/nvim-mcp: MCP server for Neovim to connect AI agents, yes.
- chenyme/grok2api: Multi-account Grok API gateway, yes, AI API infrastructure.
- meilisearch/meilisearch: Wait no, meilisearch is RAG/Knowledge, right? Because it's search for RAG. Wait no, let's confirm: AI Infrastructure is frameworks, SDKs, inference engines, dev tools, CLI. So:
- jdx/mise? No, we excluded it earlier, it's non-AI. Wait, what about google/skills? No, that's agent skills, so agents. Wait, what about ollama/ollama? Oh right! Ollama is in the topic search, topic:llm, it's the LLM inference engine, that's AI Infrastructure! Oh right, I missed that. Ollama is definitely infrastructure. Then:
- ollama/ollama: Get up and running with various LLMs, inference engine, yes.
- firecrawl/firecrawl: Context API for web scraping for AI agents, that's infrastructure? Or application? Wait firecrawl is a tool for AI agents to scrape web, so it's infrastructure for AI apps, yes.
- browser-use/browser-use: Make websites accessible for AI agents, that's infrastructure too? Or application? Wait no, it's a library for agents to use browsers, so infrastructure. Wait but let's check: the category is AI Infrastructure: frameworks, SDKs, inference engines, dev tools, CLI. So yes, browser-use is an SDK for agents. Then:
- langchain4j/langchain4j: Java LLM library, that's infrastructure, right? Because it's a framework/SDK for building LLM apps.
- neuml/txtai: All-in-one AI framework for semantic search/LLM orchestration, that's infrastructure.
- lancedb/lancedb: Embedded retrieval library for multimodal AI, that's infrastructure? Or RAG? Wait lancedb is a vector DB? No, wait lancedb is an embedded retrieval library, wait no, earlier it's tagged topic:vector-db. Oh right, so vector DBs are under RAG/Knowledge. Okay, so adjust:
Wait RAG/Knowledge includes vector databases, retrieval tools, knowledge management, memory for agents. So:
- meilisearch/meilisearch: AI-powered hybrid search engine for RAG, yes.
- VectifyAI/PageIndex: Vectorless RAG document index, yes.
- qdrant/qdrant: Vector database for RAG, yes.
- topoteretes/cognee: AI memory platform with knowledge graph for RAG, yes.
- weaviate/weaviate: Vector database for RAG, yes.
- alibaba/zvec: Lightweight vector DB for RAG, yes.
- lancedb/lancedb: Embedded retrieval library for multimodal RAG, yes.
- oramasearch/orama: Search engine/RAG pipeline, yes.
- oceanbase/oceanbase: Distributed DB for AI/RAG workloads, yes.
- databendlabs/databend: Data warehouse for AI/RAG, yes.
- thedotmack/claude-mem: Persistent context for agents (RAG memory), yes.
- mem0ai/mem0: Universal memory layer for agents (RAG knowledge), yes.
- Graphify-Labs/graphify: Codebase to knowledge graph for RAG, yes.
- headroomlabs-ai/headroom: Token compression for RAG/agent inputs, yes.
- langchain-ai/langchain: Wait no, langchain is agent framework? Wait no, langchain is a framework for building LLM apps, including agents and RAG. Wait what's its primary category? Let's see: the topic tags are rag, so primary is RAG/Knowledge? Or agent? Wait no, let's check: langchain is both, but let's see the description: "The agent engineering platform." Oh, so primary is AI Agents / Workflows? Wait but it's also RAG. Hmm, maybe we can put it in both? But the user said a project can belong to multiple, pick primary. Let's see: langchain's main use case is building agents and RAG pipelines, so maybe primary is AI Agents / Workflows? Or RAG? Wait no, let's check the topic tags: langchain has topic:rag, so maybe primary RAG? Wait no, let's see the other one: langgraph is under rag topic, description is "Build resilient agents." So maybe langchain is primary agents, langgraph is also agents? Wait no, let's just assign primary correctly.

Then 📦 AI Applications: specific apps, vertical solutions. So these are end-user or vertical use cases, not frameworks or infrastructure. Let's list:
- santifer/career-ops: AI job search app, yes.
- ZhuLinsen/daily_stock_analysis: LLM-powered stock analysis app, yes.
- CherryHQ/cherry-studio: AI productivity studio with 300+ assistants, yes.
- hugohe3/ppt-master: AI app that turns docs to PowerPoint, yes.
- iOfficeAI/AionUi: 24/7 Cowork app for AI CLI agents, yes.
- harry0703/MoneyPrinterTurbo: AI app that generates short videos from topics, yes.
- kennethleungty/Finance-LLMs: LLM use cases in financial services, yes.
- liguge/Awesome-large-language-model-for-Prognostics-and-health-management: LLM for predictive maintenance, vertical app, yes.
- HKBU-LAGAS/Awesome-Item-ID-Gen-RecSys: LLM for recommender systems, vertical, yes.
- siyuan-note/siyuan: Wait no, siyuan is a personal knowledge management software, but it's tagged topic:ai-agent, so is it an application? Yes, it's an end-user app with AI agent features, so yes, AI Application.
- f/prompts.chat: Awesome ChatGPT prompts, that's an app? Or a resource? Wait it's a collection of prompts, but it's a self-hostable app, so maybe AI Application? Or is it infrastructure? No, it's an end-user app for using LLMs.
- deepfakes/faceswap: Deepfake app, that's AI Application, yes.
- roboflow/supervision: Computer vision tools, that's a library for CV apps, so maybe infrastructure? Or application? Wait it's a toolkit for building CV apps, so maybe infrastructure? Wait no, let's see: the category AI Applications is specific apps, vertical solutions. So supervision is a toolkit, so maybe infrastructure? Wait no, let's check: ultralytics/ultralytics is YOLO, which is a model and toolkit for CV, so that's LLMs/Training? No, YOLO is a CV model, so maybe LLMs/Training? Wait no, the LLMs/Training category is for LLMs specifically? Wait the user wrote "🧠 LLMs / Training (model weights, training frameworks, fine-tuning tools)" – so LLMs, but also other models? Wait the data has topic:ml, which is general ML. Wait, maybe the LLMs/Training category includes LLMs and other foundation models? Let's see: tensorflow/pytorch are ML frameworks, so they are AI Infrastructure? Wait wait, let's go back to the topic tags: the topic search has topics: ai-agent, rag, vector-db, llm-model, llm, ml. Oh right! The ml topic is general machine learning, not just LLMs. Oh, I missed that. So let's adjust the categories to include that? Wait no, the user's categories are fixed: the 5 categories listed. So ML projects that are not LLMs: where do they go? Let's see: tensorflow, pytorch, scikit-learn, keras, ultralytics, tesseract, netdata, roboflow/supervision, deepfakes/faceswap, apache/airflow, rohitg00/ai-engineering-from-scratch, microsoft/ML-For-Beginners, julia, etc. These are general ML frameworks, tools, apps. So where to put them? Wait the user's categories: let's see, 🔧 AI Infrastructure can include general ML frameworks? Because the user wrote "frameworks, SDKs, inference engines, dev tools, CLI" – yes, PyTorch, TensorFlow are ML frameworks, so they go to AI Infrastructure. Then ultralytics is a CV model framework, so AI Infrastructure? Or LLMs/Training? No, YOLO is not LLM, so AI Infrastructure. Then the AI Applications category includes vertical ML apps: deepfakes/faceswap is a deepfake app, so AI Application. netdata is AI-powered observability, so AI Application. apache/airflow is workflow tool for ML, so AI Infrastructure? Wait airflows is a general workflow tool, but it's used for ML, so maybe AI Infrastructure. rohitg00/ai-engineering-from-scratch is a tutorial for AI engineering, so maybe it's a resource, but it's tagged topic:ml, so maybe AI Infrastructure? Or is it educational? Wait the user said filter AI related, so yes, include. microsoft/ML-For-Beginners is ML tutorial, so maybe AI Infrastructure? Or is it a resource? Wait maybe we can put it under AI Infrastructure as a learning resource? Or wait, let's make sure we don't miss relevant ones.

Wait let's go back to Step 1: filter AI related, exclude non-AI. So the non-AI ones we excluded earlier are: goauthentik/authentik, jdx/mise, google/guava, denoland/celld, K2SOsint/Legendary_OSINT, pranshuparmar/witr. Correct, those are non-AI.

Now Step 2: Categorize properly, primary category:

First, 🔧 AI Infrastructure (frameworks, SDKs, inference engines, dev tools, CLI, general ML frameworks):
1. ollama/ollama (Go, 178k total stars, topic:llm): Open-source LLM inference engine for running local LLMs, worth attention because it's the de facto standard for local LLM deployment, supporting hundreds of models including latest releases like Kimi-K2.6 and DeepSeek.
2. langchain4j/langchain4j (Java, 12.8k total, topic:vector-db): Idiomatic Java SDK for building LLM-powered applications, supports tool calling, agents, RAG, integrates with enterprise Java frameworks, worth attention for bringing LLM capabilities to enterprise JVM stacks.
3. neuml/txtai (Python, 12.8k total, topic:vector-db): All-in-one AI framework for semantic search, LLM orchestration, and language workflows, worth attention for its unified API for RAG and LLM serving.
4. 0xPlaygrounds/rig (Rust, 8.2k total, topic:llm-model): Modular, scalable LLM application framework in Rust, worth attention for high-performance, memory-safe LLM app development.
5. skyzh/tiny-llm (Python, 4.4k total, topic:llm-model): Hands-on course and tool for building LLM inference serving on Apple Silicon, worth attention for lowering the barrier to on-device LLM deployment for Apple ecosystem developers.
6. Picovoice/picollm (Python, 316 total, topic:llm-model): On-device LLM inference powered by X-Bit Quantization, worth attention for enabling low-resource, private LLM deployment on edge devices.
7. tensorflow/tensorflow (C++, 196.9k total, topic:ml): Open-source end-to-end ML framework, worth attention as a core foundational tool for ML research and production deployment.
8. pytorch/pytorch (Python, 102.2k total, topic:ml): Dynamic neural network framework with GPU acceleration, worth attention as the dominant framework for LLM and CV research and development.
9. ultralytics/ultralytics (Python, 60.3k total, topic:ml): YOLO object detection/segmentation framework, worth attention for its industry-standard computer vision tools for edge and cloud deployment.
10. chenyme/grok2api (Go, 62 total, trending +62 today): Multi-account API gateway for Grok's AI services, worth attention for simplifying access to Grok's LLM APIs for developers.
11. paulburgress1357/nvim-mcp (Python, 60 total, topic:llm-model): MCP server connecting AI agents to Neovim, worth attention for enabling seamless AI-assisted coding in Neovim without plugins.
Wait but maybe we don't need all, just 3-8 per category, representative.

Next, 🤖 AI Agents / Workflows (agent frameworks, automation, multi-agent systems, agent skills):
1. PrimeIntellect-ai/prime-agent (TypeScript, 0 total, trending +2271 today): Self-improving RLM agent for coding workflows and long-running autonomous tasks, worth attention for its focus on long-horizon autonomous task execution, a key unmet need in agent development.
2. NousResearch/hermes-agent (Python, 227k total, topic:ai-agent): Open-source agent that grows with user needs, worth attention as a mature, widely adopted agent framework with strong community support.
3. CopilotKit/CopilotKit (TypeScript, 36.6k total, topic:ai-agent): Frontend stack for building agents and generative UI, worth attention for enabling seamless integration of AI agents into web, mobile, and Slack applications via the AG-UI Protocol.
4. HKUDS/nanobot (Python, 46.7k total, topic:ai-agent): Ultra-lightweight, self-hosted personal agent framework with WebUI, MCP support, and multi-agent workflows, worth attention for its low barrier to entry for personal and small-team agent deployment.
5. obra/superpowers (Shell, 0 total, trending +794 today): Agentic skills framework and software development methodology, worth attention for its focus on standardizing agent skill development for engineering workflows.
6. addyosmani/agent-skills (JavaScript, 0 total, trending +1131 today): Production-grade engineering skills for AI coding agents, worth attention for providing battle-tested, reusable skills to improve AI coding agent performance and reliability.
7. Significant-Gravitas/AutoGPT (Python, 186k total, topic:llm): Flagship open-source accessible AI agent platform, worth attention for its continued innovation in making agent development accessible to non-experts.
8. unclebob/swarm-forge (Clojure, 0 total, trending +85 today): Simple tool for coordinating multiple AI agents, worth attention for its lightweight approach to multi-agent orchestration, a critical component for complex agent workflows.

Then 📦 AI Applications (specific end-user apps, vertical solutions):
1. CherryHQ/cherry-studio (TypeScript, 50k total, topic:ai-agent): AI productivity studio with 300+ assistants, unified access to frontier LLMs, worth attention for its all-in-one approach to personal and team AI productivity, eliminating the need for multiple disparate AI tools.
2. hugohe3/ppt-master (Python, 43.7k total, topic:ai-agent): AI app that converts documents or topics into native PowerPoint decks with animations, charts, and audio narration, worth attention for automating a ubiquitous, time-consuming knowledge work task.
3. harry0703/MoneyPrinterTurbo (Python, 102k total, topic:llm): AI app that generates HD short videos from topics/keywords via automated workflows, worth attention for its turnkey solution for AI-powered content creation, a fast-growing vertical.
4. siyuan-note/s

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*