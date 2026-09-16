# AI Open Source Trends 2026-09-17

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-16 22:15 UTC

---

I'll parse through the data and filter for AI-related repos (both Trending and Topic Search). Then categorize according to the categories.

Let's start with the "GitHub Today's Trending (21 repositories)" list. I'll pick those clearly AI/ML related.

From trending list:
- alibaba/open-code-review: Hybrid architecture code review tool, deterministic pipelines + LLM Agent. AI relevance: code review tool with LLM Agent. Include.
- cloudflare/security-audit-skill: A coding-agent skill for multi-phase security audits. AI relevance: security audit tool likely uses LLM. Include.
- JustVugg/colibri: Run frontier MoE models on hardware you own — pure C, zero deps, experts streamed from disk. AI relevance: inference engine for MoE models. Include.
- jamiepine/voicebox: The open-source AI voice studio. Clone, dictate, create. AI relevance: voice AI. Include.
- Lakr233/vphone-cli: unknown? Not AI likely. Skip.
- anthropics/knowledge-work-plugins: Open source repository of plugins for knowledge workers to use in Claude Cowork. AI relevance: AI plugin ecosystem. Include.
- ever-co/ever-gauzy: Open Business Management Platform (ERP/CRM/HRM/ATS/PM). Not AI, skip.
- ankitects/anki: flashcard program, maybe uses AI? It's a spaced repetition, but not necessarily AI/ML. Probably skip.
- NationalSecurityAgency/ghidra: reverse engineering framework, not AI. skip.
- anthropics/claude-code: Claude Code is an agentic coding tool that lives in your terminal, understands codebase, helps code faster, using LLM. AI relevance: coding agent. Include.
- roboflow/supervision: reusable computer vision tools. AI relevance: CV. Include.
- alphaXiv/OpenResearch: Turn your coding agents into research agents. AI relevance: AI research tools. Include.
- supabase/supabase: Postgres development platform with AI apps? It mentions AI but it's DB platform. Probably not AI core, skip.
- rlaope/oh-my-hermes: plugin for Hermes Agent, coding intelligence, long-term memory. AI relevance: agent. Include.
- Tencent/WeKnora: Open-source LLM knowledge platform: turn raw documents into queryable RAG, autonomous reasoning agent. AI relevance: LLM knowledge platform, RAG. Include.
- SnailSploit/Claude-Red: curated library of offensive security skills designed for Claude skills system. AI relevance: security agent for LLM. Include.
- multimodal-art-projection/YuE: frontier music generation with symbolic planning, zero-shot covers, agentic music editing. AI relevance: music generation. Include.
- addyosmani/agent-skills: Production-grade engineering skills for AI coding agents. AI relevance: AI coding agent skills. Include.
- cline/cline: Autonomous coding agent as an SDK, IDE extension, or CLI assistant. AI relevance: coding agent. Include.
- affaan-m/ECC: agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor etc. AI relevance: agent harness. Include.

Also from trending list: note the star counts are "⭐0" but trending today show stars added? The trending list shows something like [Go] ⭐0 (+3215 today). That means total stars unknown (maybe 0 currently but trending due to new stars). For the AI topic search results, they show total stars (like ⭐260,189). For trending, the stars are zero but the +value is the daily new stars. We need to record total stars (if zero) and today's new stars (the plus). For AI topic search results, they have total stars, but no daily trend. We need to present for top projects in each category both total and today's new if available. For trending, we have total star count (0) and today's new (like +3215). For non-AI trending repos that we exclude, we ignore.

Now from AI Topic Search Results (81 repositories). Many are clearly AI. Let's filter.

We need to select projects clearly related to AI/ML, exclude non-AI tools. Let's go through them:

- affaan-m/ECC (topic: llm) -> AI.
- NousResearch/hermes-agent (topic:llm) -> AI.
- Significant-Gravitas/AutoGPT (topic:llm) -> AI.
- firecrawl/firecrawl (topic:llm) -> web data API, relevant to AI (scraping data). Might be considered AI infrastructure. Include.
- ollama/ollama (topic:llm) -> LLM inference, include.
- huggingface/transformers (topic:llm) -> model definition, include.
- langgenius/dify (topic:llm) -> agentic workflows, RAG pipelines. Include.
- open-webui/open-webui (topic:llm) -> AI UI. Include.
- langchain-ai/langchain (topic:llm) -> agent engineering platform. Include.
- DietrichGebert/ponytail (topic:llm) -> lazy senior dev AI agent. Include.
- harry0703/MoneyPrinterTurbo (topic:llm) -> generate HD short videos using AI. Include.
- Graphify-Labs/graphify (topic:llm) -> turn codebase into knowledge graph for RAG. Include.
- browser-use/browser-use (topic:llm) -> browser automation agents. Include.
- TauricResearch/TradingAgents (topic:llm) -> Multi-Agents LLM Financial Trading Framework. Include.
- JuliusBrussee/caveman (topic:llm) -> skill for coding agents. Include.
- jingyaogong/minimind (topic:llm-model) -> train a 64M LLM from scratch. Include.
- 0xPlaygrounds/rig (topic:llm-model) -> build modular LLM Applications in Rust. Include.
- open-compass/opencompass (topic:llm-model) -> LLM evaluation platform. Include.
- skyzh/tiny-llm (topic:llm-model) -> LLM inference system on Apple Silicon. Include.
- genieincodebottle/generative-ai (topic:llm-model) -> resources on Generative AI. Possibly include, but it's documentation. Still AI relevance.
- samchon/nestia (topic:llm-model) -> NestJS Helper + AI Chatbot Development. Include.
- zchoi/Awesome-Embodied-Robotics-and-Agent (topic:llm-model) -> curated list of embodied AI with LLMs. Might be useful but it's a list. Probably include as a reference.
- thinkwee/AgentsMeetRL (topic:llm-model) -> Awesome List for Agentic RL. Likely list, but AI relevant. Might skip if it's just a curated list. But include?
- zi-yue-1129/DATAGEN (topic:llm-model) -> AI-driven multi-agent research assistant. Include.
- thinkwee/AwesomeOPD (topic:llm-model) -> Awesome List for On-Policy Distillation. List, maybe skip.
- apache/casbin-gateway (topic:llm-model) -> Casbin AI & MCP security gateway. Include.
- Mirrowel/LLM-API-Key-Proxy (topic:llm-model) -> Universal LLM Gateway. Include.
- Picovoice/picollm (topic:llm-model) -> on-device LLM inference. Include.
- Event-AHU/Medical_Image_Analysis (topic:llm-model) -> foundation models based medical image analysis. Include.
- asukaminato0721/telegram-summary-bot (topic:llm-model) -> Summarize group chat with AI. Include.
- Panniantong/Agent-Reach (topic:ai-agent) -> Give your AI agent eyes to see internet. Include.
- career-ops-hq/career-ops (topic:ai-agent) -> Open-source AI job search. Include.
- ZhuLinsen/daily_stock_analysis (topic:ai-agent) -> LLM-driven multi-market stock analysis. Include.
- hugohe3/ppt-master (topic:ai-agent) -> AI turns documents or topics into PowerPoint decks. Include.
- CherryHQ/cherry-studio (topic:ai-agent) -> AI productivity studio with autonomous agents. Include.
- HKUDS/nanobot (topic:ai-agent) -> Ultra-lightweight, open-source, self-hosted personal AI agent framework. Include.
- bojieli/ai-agent-book (topic:ai-agent) -> Book repository. Probably include as resource.
- zhayujie/CowAgent (topic:ai-agent) -> Open-source super AI assistant & Agent Harness. Include.
- siyuan-note/siyuan (topic:ai-agent) -> open-source knowledge workspace for humans and AI agents. Include.
- Hmbown/Codewhale (topic:ai-agent) -> Open-source coding agent for terminal, Rust. Include.
- CopilotKit/CopilotKit (topic:ai-agent) -> Frontend Stack for Agents & Generative UI. Include.
- esengine/DeepSeek-Reasonix (topic:ai-agent) -> DeepSeek-native AI coding agent. Include.
- agentscope-ai/QwenPaw (topic:ai-agent) -> Personal AI Assistant. Include.
- HKUDS/Vibe-Trading (topic:ai-agent) -> Personal Trading Agent. Include.

Now AI vector-db (topic:vector-db):
- Mintplex-Labs/anything-llm (topic:vector-db) -> local-first agent experience.
- meilisearch/meilisearch (topic:vector-db) -> search engine.
- run-llama/llama_index (topic:vector-db) -> document processing platform.
- milvus-io/milvus (topic:vector-db) -> vector database.
- VectifyAI/PageIndex (topic:vector-db) -> document index for vectorless reasoning RAG.
- qdrant/qdrant (topic:vector-db) -> vector search engine.
- topoteretes/cognee (topic:vector-db) -> AI memory platform.
- NirDiamant/RAG_Techniques (topic:vector-db) -> advanced techniques for RAG.
- weaviate/weaviate (topic:vector-db) -> vector DB with filtering.
- alibaba/zvec (topic:vector-db) -> lightweight vector DB.
- langchain4j/langchain4j (topic:vector-db) -> Java LLM library.
- neuml/txtai (topic:vector-db) -> all-in-one AI framework.
- lancedb/lancedb (topic:vector-db) -> embedded retrieval library.
- oramasearch/orama (topic:vector-db) -> search engine.
- oceanbase/oceanbase (topic:vector-db) -> distributed DB for AI era.
- Also there are repositories under topic:rag:
    - Shubhamsaboo/awesome-llm-apps (topic:rag)
    - thedotmack/claude-mem (topic:rag)
    - infiniflow/ragflow (topic:rag)
    - PaddlePaddle/PaddleOCR (topic:rag)
    - headroomlabs-ai/headroom (topic:rag)
    - mem0ai/mem0 (topic:rag)
    - jeecgboot/JeecgBoot (topic:rag)
    - langchain-ai/langgraph (topic:rag)
- ML (topic:ml):
    - tensorflow/tensorflow
    - rasbt/LLMs-from-scratch
    - pytorch/pytorch
    - microsoft/ML-For-Beginners
    - Developer-Y/cs-video-courses
    - netdata/netdata
    - tesseract-ocr/tesseract
    - OpenBB-finance/OpenBB
    - microsoft/AI-For-Beginners
    - scikit-learn/scikit-learn
    - keras-team/keras
    - ultralytics/ultralytics
    - roboflow/supervision
    - JuliaLang/julia

All these are obviously ML/AI frameworks. We'll categorize them under appropriate categories: maybe LLM training, ML frameworks, etc. However categories are limited to 🔧 AI Infrastructure, 🤖 AI Agents/ Workflows, 📦 AI Applications, 🧠 LLMs / Training, 🔍 RAG / Knowledge. So ML frameworks like TensorFlow, PyTorch may fall under LLMs/Training? Or AI Infrastructure? Probably AI Infrastructure (foundational frameworks). But need to see: they may be considered AI Infrastructure (frameworks, SDKs, inference engines). For LLMs/Training we want model weights, training frameworks, fine-tuning tools. So we can include TensorFlow, PyTorch, scikit-learn, etc. But we need to be careful about not including too many that are generic ML. The instructions: "select projects clearly related to AI/ML (exclude unrelated general tools, frontend frameworks, games, etc.)". So ML frameworks are AI/ML related. They can be categorized under "AI Infrastructure" because they are frameworks, but also "LLMs / Training". Probably better to list some representative ones.

Given the large number of repos, we need to select top projects for each category. It's a structured report with sections:

1. Today's Highlights (3-5 sentences on most noteworthy AI open-source developments today)

2. Top Projects by Category: For each category, list 3-8 representative projects, each with:
   - Project name (with link)
   - Stars data (total + today's new, if available)
   - One sentence: what it is and why it's worth attention today

3. Trend Signal Analysis (200-300 words, distill from today's hot list):
   - Which type of AI tool is getting explosive community attention?
   - Any new tech stacks or directions appearing for the first time?
   - Connection to recent LLM releases / industry events

4. Community Hot Spots (bullet list of 3-5 specific projects or directions worth developer focus, with brief reasoning)

We need to format the output accordingly.

First, from trending list we have some daily trending projects (with star increase). Let's identify which trending ones are AI relevant.

The trending list also includes many non-AI repos; we will only consider AI-relevant ones.

Let's parse trending list:

1. alibaba/open-code-review (Go) – +3215 today
2. cloudflare/security-audit-skill (JavaScript) – +1249
3. JustVugg/colibri (C) – +1532
4. jamiepine/voicebox (TypeScript) – +409
5. Lakr233/vphone-cli (Swift) – +444 (non-AI)
6. anthropics/knowledge-work-plugins (Python) – +96
7. ever-co/ever-gauzy (TypeScript) – +771 (non-AI)
8. ankitects/anki (Rust) – +50 (maybe non-AI)
9. NationalSecurityAgency/ghidra (Java) – +1059 (non-AI)
10. anthropics/claude-code (TypeScript) – +155
11. roboflow/supervision (Python) – +292
12. alphaXiv/OpenResearch (Rust) – +1036
13. supabase/supabase (TypeScript) – +118 (maybe not core AI)
14. rlaope/oh-my-hermes (Python) – +74
15. Tencent/WeKnora (Go) – +1201
16. SnailSploit/Claude-Red (Python) – +383
17. multimodal-art-projection/YuE (Python) – +370
18. addyosmani/agent-skills (JavaScript) – +656
19. cline/cline (TypeScript) – +102
20. affaan-m/ECC (JavaScript) – +1046

Also earlier trending list includes something like "cloudflare/security-audit-skill" – that is AI skill.

I think we need to include all trending AI-relevant repos.

Let's confirm each trending repo for AI relevance:

- alibaba/open-code-review: code review with LLM Agent -> AI.
- cloudflare/security-audit-skill: coding-agent skill for security audits -> AI.
- JustVugg/colibri: inference engine for MoE models -> AI infrastructure.
- jamiepine/voicebox: AI voice studio -> AI applications.
- Lakr233/vphone-cli: unknown; maybe not AI. skip.
- anthropics/knowledge-work-plugins: plugins for Claude Cowork -> AI agent plugins.
- ever-co/ever-gauzy: ERP/CRM etc, not AI (skip).
- ankitects/anki: flashcard program; could have AI integration but likely not. skip.
- NationalSecurityAgency/ghidra: reverse engineering; not AI. skip.
- anthropics/claude-code: coding agent -> AI.
- roboflow/supervision: computer vision tools -> AI infrastructure.
- alphaXiv/OpenResearch: research agents -> AI agents.
- supabase/supabase: DB platform; may have AI integration but not core. skip.
- rlaope/oh-my-hermes: plugin for Hermes agent; AI agent.
- Tencent/WeKnora: LLM knowledge platform; AI.
- SnailSploit/Claude-Red: security skills for Claude; AI agent.
- multimodal-art-projection/YuE: music generation; AI applications.
- addyosmani/agent-skills: production-grade engineering skills for AI coding agents; AI.
- cline/cline: autonomous coding agent; AI.
- affaan-m/ECC: agent harness for Claude Code etc; AI.

That makes many trending AI projects.

From trending list we also have some that may be borderline: "lark"? Not relevant.

Thus trending AI-relevant projects include:
- alibaba/open-code-review
- cloudflare/security-audit-skill
- JustVugg/colibri
- jamiepine/voicebox
- anthropics/knowledge-work-plugins
- anthropics/claude-code
- roboflow/supervision
- alphaXiv/OpenResearch
- rlaope/oh-my-hermes
- Tencent/WeKnora
- SnailSploit/Claude-Red
- multimodal-art-projection/YuE
- addyosmani/agent-skills
- cline/cline
- affaan-m/ECC

Also potentially "cloudflare/security-audit-skill" is a skill for Claude (or coding agents). That is relevant.

Now from topic search results we have many AI repos. Among those we need to select representative projects for categories.

The categories:

- 🔧 AI Infrastructure (frameworks, SDKs, inference engines, dev tools, CLI)
- 🤖 AI Agents / Workflows (agent frameworks, automation, multi-agent systems)
- 📦 AI Applications (specific apps, vertical solutions)
- 🧠 LLMs / Training (model weights, training frameworks, fine-tuning tools)
- 🔍 RAG / Knowledge (vector databases, retrieval-augmented generation, knowledge management)

We need to assign each selected project to the primary category (some may belong to multiple; choose primary). Provide 3-8 projects per category.

We need to include GitHub links for each project.

We also need to present stars data (total + today's new, if available). For trending repos we have total stars (0) and new stars (e.g., +3215). For non-trending we only have total stars (the star count from topic search). The trending list's star count is 0 but trending shows many new stars, representing daily growth. So we can format as "⭐0 (+3215 today)" etc. For topic search, we can just include total stars (e.g., ⭐260,189). However we could also include daily new? Not given. So maybe we just show total stars. The requirement says "Stars data (total + today's new, if available)". So for trending we can show both; for others just total.

Now we need to decide which projects to include.

First, "Today's Highlights" – The most noteworthy AI open-source developments today. This should reference trending repos (the ones with high daily star increase) and perhaps new releases. We'll likely mention e.g., alibaba/open-code-review (+3215), JustVugg/colibri (+1532), cloudflare/security-audit-skill (+1249). But we need to mention AI relevance.

Write 3-5 sentences.

Second, "Top Projects by Category". We'll produce list for each category. Let's pick for each category 3-8 representative repos.

We need to consider both trending and topic search.

Category: 🔧 AI Infrastructure.

Definition includes frameworks, SDKs, inference engines, dev tools, CLI. Include projects like:

- ollama/ollama (LLM inference, CLI) – total stars 181,186; AI infrastructure.
- huggingface/transformers (model definitions, inference) – total 166,258.
- roboflow/supervision (computer vision tools) – trending +292; also high stars? In trending list, but not in topic search list. It appears under trending, but also under topic search? It appears under trending list, but not in topic search (though supervision appears in topic search list as well? Actually the topic search includes "roboflow/supervision"? It includes "roboflow/supervision"? Wait the topic search list includes "roboflow/supervision"? It includes "roboflow/supervision"? Let me check the provided AI Topic Search Results list: It includes "roboflow/supervision"? I see "roboflow/supervision" appears in the trending list, but I need to check the AI Topic Search. The AI Topic Search includes: "roboflow/supervision"? Actually I see "roboflow/supervision" in the trending list; in the topic search list, we have "roboflow/supervision"? The AI Topic Search results list includes: "roboflow/supervision"? Let me scroll.

The AI Topic Search results list includes:

- [affaan-m/ECC]...
- [NousResearch/hermes-agent]...
- ...
- [roboflow/supervision] ??? I don't see "roboflow/supervision" in the AI Topic Search list. Actually the AI Topic Search list includes "roboflow/supervision"? Let's inspect. The AI Topic Search Results section includes "roboflow/supervision"? It says:

Scrolling: [just a moment], I see in the Topic Search list:

- [affaan-m/ECC]...
...
- [roboflow/supervision]??? I think not. The AI Topic Search list includes some other things but not roboflow/supervision. It includes "roboflow/supervision"? Wait the line after "alphaXiv/OpenResearch" is "supabase/supabase". There is no "roboflow/supervision" in AI Topic Search. Actually "roboflow/supervision" appears only in trending list. So we might need to include it from trending in the "AI Infrastructure" category.

Also other infrastructure:

- JustVugg/colibri (inference engine) – trending +1532; AI infrastructure.
- cloudflare/security-audit-skill (skill for coding agents) – trending +1249; maybe more in AI Agents/Workflows.

- addyosmani/agent-skills – trending +656; AI Agents? Probably agents.

- alphabih (?) Not.

- "open-webui/open-webui" – user-friendly AI interface; could be infrastructure.

- "langchain-ai/langchain" – agent engineering platform; maybe AI Agents? Could be infrastructure as well.

- "firecrawl/firecrawl" – web data API; AI infrastructure.

- "run-llama/llama_index" – document processing; AI infrastructure.

- "meilisearch/meilisearch" – search engine; maybe AI infrastructure.

- "milvus-io/milvus" – vector DB; AI Infrastructure (but also RAG).

- "qdrant/qdrant" – vector DB; same.

- "lancedb/lancedb" – embedded retrieval.

- "langchain4j/langchain4j" – Java LLM library; AI infrastructure.

- "CopilotKit/CopilotKit" – frontend for agents; AI Agents? Might be agents.

- "agentscope-ai/QwenPaw" – personal AI assistant; AI agents.

- "huggingface/transformers" – model definitions; AI Infrastructure or LLMs/Training.

- "ollama/ollama" – inference; AI Infrastructure.

- "cerebras (?) not present.

- "esengine/DeepSeek-Reasonix" – DeepSeek-native AI coding agent; AI Agents.

- "Codewhale" – coding agent; AI Agents.

- "AnythingLLM" – agent experience; AI Agents? Could be application.

- "opencompass" – LLM evaluation; LLMs/Training.

- "minimind" – training a tiny LLM; LLMs/Training.

- "Graphify-Labs/graphify" – knowledge graph; RAG.

- "topoteretes/cognee" – AI memory platform; RAG.

- "infiniflow/ragflow" – RAG engine; RAG.

- "mem0ai/mem0" – memory layer; RAG.

- "PaddlePaddle/PaddleOCR" – OCR for AI; maybe AI Application.

- "headroomlabs-ai/headroom" – tool outputs compression; AI Infrastructure perhaps.

- "jeki (?) Not needed.

- "openai (?) not in list.

- "langchain-ai/langgraph" – agent building; AI Agents.

- "Shubhamsaboo/awesome-llm-apps" – list of apps; maybe AI Applications.

- "thedotmack/claude-mem" – memory across sessions; RAG.

- "anything-llm" – local-first agent.

- "nanobot" – personal AI agent; AI Agents.

- "agentscope-ai/QwenPaw" – personal AI assistant.

- "Microsoft's ML frameworks" – generic, but could be included under AI Infrastructure.

- "tensorflow/tensorflow" – ML framework; AI Infrastructure.

- "pytorch/pytorch" – ML framework; AI Infrastructure.

- "ultralytics/ultralytics" – object detection; AI Application? Could be considered AI Application.

- "keras-team/keras" – deep learning framework; AI Infrastructure.

- "scikit-learn" – ML library; AI Infrastructure.

- "rasbt/LLMs-from-scratch" – LLM implementation; LLM Training.

- "run-llama/llama_index" – document processing; AI Infrastructure.

- "browser-use/browser-use" – browser automation; AI Agents.

- "AgentReach"? Actually Panniantong/Agent-Reach – gives AI agent eyes; AI Agents.

- "AlphaXiv/OpenResearch" – research agent; AI Agents.

- "AlphaCode"? Not.

- "Claude Code" – AI coding agent; AI Agents.

- "OpenResearch"? Already.

- "OpenWeChat"? Not.

So we need to decide for each category about 3-8 projects. We'll have to pick a subset that are most representative.

We need to include links.

We need to ensure we include trending ones where appropriate, but also include older high-star projects from topic search. There's an overlap between trending and topic search: affaan-m/ECC appears in both trending and topic search (topic:llm). So we can include it. Many trending repos are also in topic search (like anthropics/claude-code maybe not present in topic search list? It's not listed in topic search. The topic search results include many repos but not those trending ones.

Now the categories:

**🔧 AI Infrastructure**: Choose representative projects:

- ollama/ollama (Go) – ⭐181,186 (total). It's an inference engine for many models, CLI. Important for AI infra.

- huggingface/transformers (Python) – ⭐166,258. Core model definitions and inference.

- JustVugg/colibri (C) – trending +1532 (⭐0 (+1532 today)). It's a pure C inference engine for MoE models, zero deps. Great for low-resource.

- firecrawl/firecrawl (TypeScript) – ⭐181,282. Web data API for scraping and interacting with data; AI data pipeline.

- run-llama/llama_index (Python) – ⭐52,191. Document processing platform.

- meilisearch/meilisearch (Rust) – ⭐59,304. Search engine API.

- lancedb/lancedb (Rust) – ⭐11,438. Embedded retrieval library.

- langchain4j/langchain4j (Java) – ⭐13,109. Java LLM library.

- esengine/DeepSeek-Reasonix (Go) – ⭐35,580. DeepSeek-native AI coding agent (maybe considered AI Agents). Actually that's in AI Agents category, but it's also an inference engine for coding? We'll decide later.

- CopilotKit/CopilotKit (TypeScript) – ⭐37,383. Frontend stack for agents; could be considered AI Infrastructure as it enables building agent UIs.

- langgenius/dify (TypeScript) – ⭐155,991. Agentic workflows; could be AI Agents category.

- supabase/supabase (TypeScript) – maybe not.

Let's decide.

**🤖 AI Agents / Workflows**:

- affaan-m/ECC (JavaScript) – trending +1046, total ⭐260,189? Wait AI topic search shows affaan-m/ECC has 260,189 stars? Actually the AI topic search results show affaan-m/ECC with ⭐260,189 (topic:llm). This seems to be an older repo with many stars. So it's a top agent harness performance optimization system. We'll include both trending and total? We can use total stars as 260,189.

- anthropics/claude-code (TypeScript) – trending +155 (⭐0 (+155)). It's an agentic coding tool.

- alphaXiv/OpenResearch (Rust) – trending +1036, total stars? Not in topic search (maybe older). Actually it's not listed in AI topic search, but trending. So it's an agent turning coding agents into research agents. That's AI Agents.

- cline/cline (TypeScript) – trending +102. Autonomous coding agent.

- addyosmani/agent-skills (JavaScript) – trending +656. Production-grade engineering skills for AI coding agents.

- NousResearch/hermes

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*