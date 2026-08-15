# AI Open Source Trends 2026-08-16

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-15 22:15 UTC

---

Got it, let's tackle this step by step. First, I need to follow the user's steps: filter, categorize, then make the report.

First, Step 1: Filter out non-AI projects from both the trending list and topic search. Let's go through each repo first.

First the 13 trending repos:
- cordiverse/cordis: TypeScript, spatiotemporal composability? Wait no, wait the description says Meta-Framework of Spatiotemporal Composability? Wait no wait, wait is that AI? Wait wait no, wait let's check the others first. Wait no, let's check each:
Wait cathrynlavery/diagram-design: for Claude Code, diagram types, that's AI related because it's for AI coding tools, right? Yes, it's for Claude Code, so AI adjacent.
cursor/plugins: Cursor's plugins, Cursor is an AI code editor, so AI related.
cactus-compute/needle: 14MB foundation model for tiny devices, that's LLM/tiny model, definitely AI.
unslothai/unsloth: run/train LLMs and diffusion models, 100% AI.
public-apis/public-apis: Wait, that's a general list of free APIs, not AI specific? Wait wait the description says "collective list of free APIs" no AI mention. Wait but wait, let's confirm: is it AI related? No, it's general, so we can exclude? Wait wait no, wait let's check the topic search: no, public-apis is not in the AI topic search results. Wait but wait, let's hold that thought.
MakazhanAlpamys/Soup: Fine-tune LLMs from YAML, that's LLM training, AI.
github/spec-kit: Spec-Driven Development, wait is that AI related? Wait the description says toolkit for Spec-Driven Development, no mention of AI? Wait wait no, wait let's check: wait the trending list, is spec-kit AI? Wait maybe not? Wait wait no, let's see the topic search: no, spec-kit isn't in the AI topics. Wait wait, let's check megadose/holehe: check if email is used on sites, that's a general security tool, not AI? Wait wait no, let's see: holehe is for checking account usage, no AI mentioned, so exclude?
altic-dev/FluidVoice: on-device STT with custom trained AI model, that's AI, speech, so yes.
ToolJet/ToolJet: enterprise app generation with AI agents, so AI related, yes.
HKUDS/CLI-Anything: making software agent-native, CLI for agents, AI agent related, yes.
citrolabs/ego-lite: browser for AI agents, automation, AI agent related, yes.

Wait wait let's list the trending ones that are AI related first, exclude non-AI: public-apis (general API list, no AI focus), megadose/holehe (general account check tool, no AI), github/spec-kit? Wait wait wait, wait spec-kit: let me check, no, the description is Spec-Driven Development toolkit, no AI mention. Wait wait cordiverse/cordis: Meta-Framework of Spatiotemporal Composability, no AI mention? Wait wait that's a maybe? Wait no, let's check if it's in the AI topic search: no, the topic search has ai-agent, rag, vector-db, ml, llm, llm-model. So cordis is not in those, so maybe it's not AI? Wait wait the user said filter for AI relevance, exclude unrelated general tools. So let's confirm each trending repo:
1. cordiverse/cordis: No AI mention, spatiotemporal composability, likely not AI, exclude.
2. cathrynlavery/diagram-design: For Claude Code (AI coding tool), generates diagrams for AI workflows, AI related, include.
3. cursor/plugins: Cursor is AI code editor, plugins for it, AI related, include.
4. cactus-compute/needle: Tiny foundation model for edge devices, AI/LLM, include.
5. unslothai/unsloth: LLM/diffusion model training and inference UI, AI, include.
6. public-apis/public-apis: General API list, no AI focus, exclude.
7. MakazhanAlpamys/Soup: LLM fine-tuning tool, AI, include.
8. github/spec-kit: Spec-Driven Development, no AI focus, exclude.
9. megadose/holehe: General account lookup tool, no AI, exclude.
10. altic-dev/FluidVoice: On-device AI STT app, AI, include.
11. ToolJet/ToolJet: AI agent-powered enterprise app platform, AI, include.
12. HKUDS/CLI-Anything: Agent-native CLI toolkit, AI agent, include.
13. citrolabs/ego-lite: AI agent browser automation tool, AI, include.

Okay, that's the trending list filtered. Now the topic search results: all of these are tagged with AI-related topics (ai-agent, rag, vector-db, ml, llm, llm-model), so all of those are AI related, right? Wait let's confirm: the topic search is for AI-related projects active in last 7 days, grouped by topic, so all 79 are AI related, but we can pick the representative ones for each category.

Now Step 2: Categorize. Let's make the categories as given:
🔧 AI Infrastructure (frameworks, SDKs, inference engines, dev tools, CLI)
🤖 AI Agents / Workflows (agent frameworks, automation, multi-agent systems)
📦 AI Applications (specific apps, vertical solutions)
🧠 LLMs / Training (model weights, training frameworks, fine-tuning tools)
🔍 RAG / Knowledge (vector databases, retrieval-augmented generation, knowledge management)

Let's assign each project to the right category, primary first.

First, let's list all the filtered projects (trending + topic search) and categorize:

First 🔧 AI Infrastructure:
Let's see:
- unslothai/unsloth: It's a local UI to run and train LLMs/diffusion models, that's inference/training dev tool, so AI Infrastructure.
- cactus-compute/needle: 14MB foundation model for tiny devices, wait no, wait it's a model? Wait no, description says 14MB foundation model for tiny devices, so maybe LLMs/Training? Wait wait no, wait let's check: needle is a model, but also, wait ToolJet/ToolJet: it's a low-code platform for building AI agents and internal tools, that's AI Applications? Wait no, wait ToolJet is the open-source foundation for an enterprise app generation platform with AI agents, so maybe AI Applications? Wait no, let's think again.
Wait AI Infrastructure: things that are tools, frameworks, SDKs, inference engines, dev tools, CLI for building AI systems.
So:
- cursor/plugins: Plugin specification and official plugins for Cursor (AI IDE), that's dev tool for AI coding, so AI Infrastructure.
- HKUDS/CLI-Anything: CLI toolkit to make software agent-native, dev tool for AI agents, AI Infrastructure.
- 0xPlaygrounds/rig: Rust LLM application framework, that's AI Infrastructure.
- open-compass/opencompass: LLM evaluation platform, dev tool, AI Infrastructure.
- Picovoice/picollm: On-device LLM inference tool, inference engine, AI Infrastructure.
- skyzh/tiny-llm: Tiny LLM inference system for Apple Silicon, dev tool/inference, AI Infrastructure.
Wait also, citrolabs/ego-lite? No, that's an AI agent tool, browser for agents, so AI Agents.
Wait let's get back.

🤖 AI Agents / Workflows:
These are agent frameworks, automation, multi-agent systems, agent tools.
Let's list:
- NousResearch/hermes-agent: Agent framework, topic ai-agent, yes.
- shareAI-lab/learn-claude-code: Claude Code-like agent harness, yes.
- Panniantong/Agent-Reach: AI agent that can browse the internet, read social media, yes.
- santifer/career-ops: AI job search agent, runs in CLI, yes.
- HKUDS/nanobot: Lightweight personal AI agent framework, yes.
- zhayujie/CowAgent: AI assistant & agent harness, yes.
- CopilotKit/CopilotKit: Frontend stack for agents & generative UI, yes.
- esengine/DeepSeek-Reasonix: DeepSeek AI coding agent for terminal, yes.
- agentscope-ai/QwenPaw: Personal AI assistant with agent capabilities, yes.
- Cathrynlavery/diagram-design: Wait no, that's a diagram tool for Claude Code, so it's an AI application? Wait no, it's a tool that generates diagrams for AI coding workflows, so maybe AI Applications? Wait let's see: diagram-design is a tool that provides diagram types for Claude Code, so it's an application that supports AI workflows, so maybe AI Applications? Or AI Agents? Wait no, let's see the category: AI Applications are specific apps, vertical solutions. So diagram-design is a specific app for generating diagrams for AI coding, so AI Applications.
- ToolJet/ToolJet: Enterprise app generation platform with AI agents, so AI Applications? Or AI Agents? Wait ToolJet's core is building internal tools, with AI agent support, so maybe AI Applications.
- citrolabs/ego-lite: Browser for AI agents to run automation, so AI Agents / Workflows, yes, because it's a tool for agent browser automation.
- HKUDS/CLI-Anything: Wait earlier I thought AI Infrastructure, but it's making software agent-native, so it's a tool for AI agents, so maybe AI Agents? Wait let's check the category definition: AI Infrastructure is frameworks, SDKs, inference engines, dev tools, CLI. Oh right, CLI is under AI Infrastructure, so CLI-Anything is a CLI tool for AI agents, so AI Infrastructure.
- affaan-m/ECC: Agent harness performance optimization system, for Claude Code, Codex etc, that's AI Agents, yes.
- Significant-Gravitas/AutoGPT: Classic AI agent framework, yes.
- browser-use/browser-use: Make websites accessible for AI agents, automation, AI Agents, yes.

Okay, 🤖 AI Agents / Workflows category will have those.

Now 📦 AI Applications: specific apps, vertical solutions, end-user or vertical use case tools.
Let's list:
- cathrynlavery/diagram-design: Diagram generation tool for AI coding workflows (Claude Code), vertical solution for technical documentation in AI workflows, yes.
- altic-dev/FluidVoice: macOS dictation app with on-device AI STT, vertical speech AI app, yes.
- ToolJet/ToolJet: Enterprise internal tool/AI agent app generation platform, vertical enterprise solution, yes.
- hugohe3/ppt-master: AI tool that turns documents/topics into PowerPoint decks, vertical productivity app, yes.
- santifer/career-ops: AI job search and application tracking agent app, vertical HR/career app, yes.
- ZhuLinsen/daily_stock_analysis: LLM-powered stock analysis system, vertical fintech app, yes.
- CherryHQ/cherry-studio: AI productivity studio with chat, agents, assistants, vertical productivity app, yes.
- JuliusBrussee/caveman: Claude Code skill that cuts token usage, vertical dev tool for AI coding, wait no, that's a dev tool, maybe AI Infrastructure? Wait no, caveman is a skill for Claude Code, which is an AI coding tool, so it's an application that optimizes AI coding workflows, so AI Applications? Or maybe AI Infrastructure? Wait let's see, let's move on, we can adjust later.

Now 🧠 LLMs / Training: model weights, training frameworks, fine-tuning tools, model-related.
Let's list:
- cactus-compute/needle: 14MB foundation model for tiny edge devices, model weights, yes.
- unslothai/unsloth: Wait earlier I thought AI Infrastructure, but it's for training and running LLMs/diffusion models, so it's both? Wait primary: it's a UI for training and running, so maybe LLMs/Training? Wait no, let's check: unsloth is a tool for fine-tuning and inference of LLMs, so it's a training/fine-tuning tool, so 🧠 LLMs / Training.
- MakazhanAlpamys/Soup: Fine-tune LLMs from one YAML, layer streaming for 8B models on 4GB GPU, fine-tuning tool, yes.
- ollama/ollama: Run local LLMs (Kimi, DeepSeek, Qwen etc), inference and model distribution, so LLMs/Training? Or AI Infrastructure? Wait ollama is a tool for running LLMs, so it's both, but primary: it's for LLM deployment and model access, so maybe LLMs/Training? Wait no, let's see: the category is LLMs / Training, which includes model weights, training frameworks, fine-tuning tools. Ollama is a runtime for LLMs, so maybe AI Infrastructure? Wait no, let's check the topic tags: ollama is tagged with topic:llm, so yes, LLMs related. Let's put it here? Wait no, let's think: inference engines are AI Infrastructure, right? Oh right! The AI Infrastructure category includes inference engines. So unsloth and ollama are inference engines, so AI Infrastructure. Oh right! I messed up earlier. So 🧠 LLMs / Training is for training frameworks, fine-tuning tools, model weights. So:
- cactus-compute/needle: Tiny foundation model (model weights), yes.
- MakazhanAlpamys/Soup: LLM fine-tuning tool, yes.
- open-compass/opencompass: Wait no, that's evaluation, so AI Infrastructure.
- skyzh/tiny-llm: LLM inference system, so AI Infrastructure.
- Picovoice/picollm: On-device LLM inference, AI Infrastructure.
- rig (0xPlaygrounds/rig): Rust LLM app framework, AI Infrastructure.
Wait what about the LLM models? Wait are there any model weights in the list? Needle is a model, yes. Any others? Let's see: no, the rest are tools. Wait wait, the topic search has llm-model tag, but the repos there are mostly tools, except maybe? Let's check: no, the llm-model tag repos are mostly frameworks, tools, except maybe none are model weights here. Wait okay, so 🧠 LLMs / Training will have needle, Soup, maybe any others? Wait wait, no, let's check: is there any other? Let's see: no, the rest are tools for LLMs, which are infrastructure or agents.

Now 🔍 RAG / Knowledge: vector databases, RAG pipelines, knowledge management, memory for agents.
Let's list these, they are all tagged with rag or vector-db:
- langgenius/dify: RAG pipeline and agentic workflow platform, yes.
- open-webui/open-webui: AI interface with RAG support, yes.
- langchain-ai/langchain: Agent engineering platform with RAG capabilities, yes.
- Shubhamsaboo/awesome-llm-apps: Collection of RAG apps and agent skills, yes.
- Graphify-Labs/graphify: Codebase to knowledge graph tool for RAG, yes.
- thedotmack/claude-mem: Persistent context/memory for AI agents (RAG-adjacent, memory layer), yes.
- infiniflow/ragflow: RAG engine with agent capabilities, yes.
- datawhalechina/hello-agents: Agent tutorial with RAG content, yes.
- headroomlabs-ai/headroom: Tool to compress RAG chunks/tool outputs for LLMs, yes.
- Mintplex-Labs/anything-llm: Local-first AI agent experience with RAG, yes.
- mem0ai/mem0: Universal memory layer for AI agents (RAG/knowledge), yes.
- FlowiseAI/Flowise: Visual AI agent/RAG builder, yes.
- run-llama/llama_index: Document agent and OCR platform with RAG, yes.
- jeecgboot/JeecgBoot: Enterprise low-code platform with AI knowledge base, RAG, yes.
- milvus-io/milvus: Vector database for RAG, yes.
- meilisearch/meilisearch: Hybrid search engine for AI-powered RAG, yes.
- VectifyAI/PageIndex: Vectorless reasoning-based RAG document index, yes.
- qdrant/qdrant: Vector database for RAG, yes.
- topoteretes/cognee: AI agent memory/knowledge graph platform, yes.
- NirDiamant/RAG_Techniques: Advanced RAG techniques tutorial, yes.
- weaviate/weaviate: Vector database for RAG, yes.
- alibaba/zvec: Lightweight vector database for RAG, yes.
- neuml/txtai: All-in-one AI framework with semantic search/RAG, yes.
- langchain4j/langchain4j: Java LLM library with RAG support, yes.
- lancedb/lancedb: Embedded retrieval library for multimodal RAG, yes.
- oceanbase/oceanbase: Distributed database for AI workloads including RAG, yes.
- databendlabs/databend: Data warehouse for AI/RAG workloads, yes.

Okay, that's the RAG category.

Wait wait, what about the AI Agents category, let's make sure we have the right ones. Let's confirm the AI Infrastructure category again:
🔧 AI Infrastructure: Frameworks, SDKs, inference engines, dev tools, CLI for building AI systems.
So:
- cursor/plugins: Plugin ecosystem for Cursor (leading AI IDE), dev tool for AI development, yes.
- HKUDS/CLI-Anything: Open-source CLI toolkit to make all software agent-native, dev tool for AI agent integration, yes.
- 0xPlaygrounds/rig: Modular, scalable LLM application framework in Rust, infrastructure for LLM apps, yes.
- open-compass/opencompass: Comprehensive LLM evaluation platform for testing model performance, dev tool for AI development, yes.
- Picovoice/picollm: On-device LLM inference tool with X-Bit quantization, inference engine for edge AI, yes.
- skyzh/tiny-llm: Educational and practical tiny LLM inference system for Apple Silicon, inference dev tool, yes.
- ollama/ollama: Local LLM runtime supporting 20+ frontier models, inference engine for local AI development, yes.
- unslothai/unsloth: No-code/low-code UI for running and fine-tuning LLMs/diffusion models, dev tool for AI training and inference, wait but earlier we thought LLMs/Training, but it's also infrastructure. Wait let's assign it to AI Infrastructure as primary, since it's a UI tool for running and training, which is a dev tool.
Wait wait the 🧠 LLMs / Training category: let's see, what's left? Oh right, MakazhanAlpys/Soup: Fine-tune LLMs from one YAML, layer streaming for 8B models on consumer GPUs, that's a fine-tuning tool, so that's 🧠 LLMs / Training. And cactus-compute/needle: 14MB foundation model optimized for tiny edge devices (phones, wearables, robots), that's a model weight, so 🧠 LLMs / Training. Any others? Let's see: no, the rest are tools, which are infrastructure.

Wait wait, let's check the trending list's AI projects again to assign:
Trending AI projects:
1. cathrynlavery/diagram-design: 📦 AI Applications (diagram tool for AI coding workflows)
2. cursor/plugins: 🔧 AI Infrastructure (Cursor IDE plugin ecosystem)
3. cactus-compute/needle: 🧠 LLMs / Training (tiny edge foundation model)
4. unslothai/unsloth: 🔧 AI Infrastructure (LLM/diffusion training and inference UI)
5. MakazhanAlpamys/Soup: 🧠 LLMs / Training (one-YAML LLM fine-tuning tool)
6. altic-dev/FluidVoice: 📦 AI Applications (on-device AI dictation app for macOS)
7. ToolJet/ToolJet: 🤖 AI Agents / Workflows? Wait no, ToolJet is a platform to build internal tools, dashboards, AI agents, so it's an AI application platform, so 📦 AI Applications? Or 🤖 AI Agents? Wait the category definition for AI Agents is agent frameworks, automation, multi-agent systems. ToolJet is a platform that lets you build AI agents as part of internal tools, so primary is 📦 AI Applications, yes, because it's a vertical enterprise solution.
8. HKUDS/CLI-Anything: 🔧 AI Infrastructure (agent-native CLI toolkit)
9. citrolabs/ego-lite: 🤖 AI Agents / Workflows (browser automation tool for AI agents, shares logged-in state with agents)

Okay, that's the trending ones assigned. Now the topic search ones, assign to categories:

🤖 AI Agents / Workflows:
- NousResearch/hermes-agent (231k total, topic:ai-agent): Agent framework that grows with user needs, leading open-source agent platform.
- shareAI-lab/learn-claude-code (74k, topic:ai-agent): Lightweight nano Claude Code-like agent harness, built from scratch for low-resource use.
- Panniantong/Agent-Reach (72k, topic:ai-agent): AI agent with full internet access, reads/searchs social media, YouTube, GitHub etc, zero API fees.
- santifer/career-ops (63k, topic:ai-agent): Open-source AI job search agent that scans portals, evaluates listings, tailors CV, runs locally in CLI.
- HKUDS/nanobot (47k, topic:ai-agent): Ultra-lightweight self-hosted personal AI agent framework with WebUI, memory, MCP support.
- zhayujie/CowAgent (46k, topic:ai-agent): Open-source super AI assistant and agent harness with task planning, tool use, self-evolution.
- CopilotKit/CopilotKit (36k, topic:ai-agent): Frontend stack for building AI agents and generative UIs, supports React, Angular, Slack etc, makers of AG-UI Protocol.
- esengine/DeepSeek-Reasonix (34k, topic:ai-agent): DeepSeek-native AI coding agent for terminal, engineered for prefix-cache stability for long-running sessions.
- agentscope-ai/QwenPaw (33k, topic:ai-agent): Personal AI assistant with multi-model, multi-channel support, easy self-deployment.
- affaan-m/ECC (240k, topic:llm): Agent harness performance optimization system for Claude Code, Codex, Cursor, reduces token usage and improves agent speed.
- Significant-Gravitas/AutoGPT (186k, topic:llm): Pioneering open-source autonomous AI agent framework, mission to make accessible AI for everyone.
- browser-use/browser-use (109k, topic:llm): Tool to make websites accessible for AI agents, automates online tasks with ease.
- HKUDS/CLI-Anything (trending, +100 today): Wait no, we assigned that to AI Infrastructure, right? Yes, because it's a CLI toolkit.
Wait wait, citrolabs/ego-lite (trending, +546 today): Browser for AI agents to run automation, shares logged-in browser state with agents, zero config, so that's 🤖 AI Agents / Workflows, correct.

Okay, that's the AI Agents category.

Now 📦 AI Applications:
- cathrynlavery/diagram-design (trending, +1619 today): Self-contained HTML/SVG diagram tool with 29 editorial diagram types for Claude Code, no external dependencies, no Mermaid bloat, for AI coding workflows.
- altic-dev/FluidVoice (trending, +165 today): Fastest macOS dictation app with on-device STT and custom trained AI enhancement, local alternative to Wispr Flow.
- ToolJet/ToolJet (trending, +553 today): Open-source enterprise platform for building internal tools, dashboards, business apps and AI agents, no-code/low-code.
- hugohe3/ppt-master (47k, topic:ai-agent): AI tool that converts documents or topics into native PowerPoint decks with shapes, transitions, charts, audio narration, supports custom templates.
- santifer/career-ops (63k, topic:ai-agent): Wait no, we assigned that to AI Agents? Wait wait, let's recheck: career-ops is an AI job search agent, which is a specific vertical application, right? Oh, maybe it can be in both? But primary: if it's a specific app for job searching, then 📦 AI Applications. Wait but it's an agent that runs in CLI. Hmm, maybe we can note that, but let's pick primary. Wait let's see: the category AI Applications is specific apps, vertical solutions. So career-ops is a vertical HR/career solution, so 📦 AI Applications. Similarly, ZhuLinsen/daily_stock_analysis (62k, topic:ai-agent): LLM-powered multi-market stock analysis system with real-time news, decision dashboard, automated notifications, that's a vertical fintech app, so 📦 AI Applications. CherryHQ/cherry-studio (50k, topic:ai-agent): AI productivity studio with chat, autonomous agents, 300+ assistants, unified access to frontier LLMs, that's a productivity app, so 📦 AI Applications. JuliusBrussee/caveman (98k, topic:llm): Claude Code skill that reduces token usage by 65% by simplifying output, vertical dev tool for AI coding, so 📦 AI Applications? Or AI Infrastructure? It's a skill for an AI tool, so it's an application that optimizes AI workflows, so 📦 AI Applications.

Okay, that's AI Applications.

Now 🧠 LLMs / Training:
- cactus-compute/needle (trending, +551 today): 14MB open-source foundation model optimized for tiny edge devices (phones, wearables, smart home, robots), enables on-device AI without cloud dependency.
- MakazhanAlpamys/Soup (trending, +303 today): Fine-tuning tool that lets users train 8B LLMs from a single YAML config, uses layer streaming to run on 4GB consumer laptop GPUs, lowers fine-tuning barrier.
Wait are there any others? Let's see: any other training tools or models? Let's check the topic search: no, the rest are infrastructure or agents or RAG. Wait wait, is ollama in LLMs? No, ollama is inference, so AI Infrastructure. Unsloth is also inference and training UI, so AI Infrastructure. Okay, that's the LLMs/Training category.

Now 🔍 RAG / Knowledge:
These are all the vector DBs, RAG tools, knowledge management platforms. Let's pick the representative ones, 3-8 each? Wait no, the user says for each category, list 3-8 representative projects. So let's pick the top ones for each RAG category:
- langgenius/dify (152k total, topic:rag): Leading open-source platform for building agentic workflows and RAG pipelines, supports rich AI models and tools, deployable on cloud, VPC or self-hosted.
- open-webui/open-webui (148k total, topic:rag): User-friendly open-source AI interface supporting Ollama, OpenAI API and other providers, with built-in RAG capabilities for local-first AI use.
- langchain-ai/langchain (144k total, topic:rag): Industry-standard agent engineering platform with comprehensive RAG tools, document loading, and LLM orchestration capabilities.
- infiniflow/ragflow (88k total, topic:rag): Leading open-source RAG engine that combines advanced retrieval with agent capabilities, creates superior context layers for LLMs.
- milvus-io/milvus (45k total, topic:vector-db): High-performance cloud-native vector database built for scalable vector ANN search, widely used for production RAG systems.
- mem0ai/mem0 (63k total, topic:rag): Universal memory layer for AI agents, provides persistent long-term memory across sessions with self-hosted knowledge graph support.
- Graphify-L

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*