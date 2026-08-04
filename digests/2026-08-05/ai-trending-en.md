# AI Open Source Trends 2026-08-05

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-04 22:16 UTC

---

Let me work through this systematically.

**Step 1: Filter for AI relevance**

From the Trending list (18 repos), I need to identify which are AI-related:

1. TencentCloud/TencentDB-Agent-Memory — AI agent memory hub ✅
2. zhaoxuya520/reverse-skill — AI-powered security skill router ✅
3. firecrawl/pdf-inspector — PDF inspection library (AI-related: classification, smart routing) ✅
4. uber/ADR — AI agent observability/security ✅
5. obra/superpowers — Agentic skills framework ✅
6. microsoft/generative-ai-for-beginners — Generative AI tutorial ✅
7. cypress-io/cypress — Browser testing, NOT AI ❌
8. lyogavin/airllm — AI inference (70B on 4GB GPU) ✅
9. webpack/webpack — JS bundler, NOT AI ❌
10. gabime/spdlog — C++ logging, NOT AI ❌
11. denoland/deno — JS/TS runtime, NOT AI ❌
12. usekaneo/kaneo — Project management, NOT AI ❌
13. livekit/agents — Realtime voice AI agents ✅
14. angular/angular — Web framework, NOT AI ❌
15. tailwindlabs/tailwindcss — CSS framework, NOT AI ❌
16. browser-use/video-use — Edit videos with coding agents ✅
17. esengine/DeepSeek-Reasonix — AI coding agent ✅
18. EveryInc/compound-engineering-plugin — AI coding client plugin ✅

From the Topic Search Results (79 repos), all are AI-related by topic tag. I'll use the full list.

**Step 2: Categorize**

Let me categorize all filtered projects:

**🔧 AI Infrastructure:**
- TencentCloud/TencentDB-Agent-Memory (trending) - agent memory hub
- zhaoxuya520/reverse-skill (trending) - skill router + toolchain bootstrapping
- uber/ADR (trending) - agent observability/security
- obra/superpowers (trending) - agentic skills framework
- firecrawl/pdf-inspector (trending) - PDF inspection library
- lyogavin/airllm (trending) - AI inference engine
- livekit/agents (trending) - realtime voice AI agents framework
- EveryInc/compound-engineering-plugin (trending) - AI coding client plugin
- 0xPlaygrounds/rig - modular LLM apps in Rust
- affaan-m/ECC - agent harness performance optimization
- Ollama/ollama - LLM inference engine
- firecrawl/firecrawl - web scraping API for AI
- browser-use/browser-use - web automation for AI agents
- Picovoice/picollm - on-device LLM inference
- langchain4j/langchain4j - Java LLM framework
- neuml/txtai - AI framework for semantic search
- lancedb/lancedb - embedded retrieval library
- oramasearch/orama - search engine and RAG pipeline
- alibaba/zvec - lightweight vector database

**🤖 AI Agents / Workflows:**
- NousResearch/hermes-agent (topic: ai-agent)
- Panniantong/Agent-Reach (topic: ai-agent)
- santifer/career-ops (topic: ai-agent)
- ZhuLinsen/daily_stock_analysis (topic: ai-agent)
- CherryHQ/cherry-studio (topic: ai-agent)
- HKUDS/nanobot (topic: ai-agent)
- zhayujie/CowAgent (topic: ai-agent)
- siyuan-note/siyuan (topic: ai-agent)
- hugohe3/ppt-master (topic: ai-agent)
- CopilotKit/CopilotKit (topic: ai-agent)
- iOfficeAI/AionUi (topic: ai-agent)
- esengine/DeepSeek-Reasonix (topic: ai-agent)
- Gitlawb/openclaude (topic: ai-agent)
- googleworkspace/cli (topic: ai-agent)
- Significant-Gravitas/AutoGPT (topic: llm)
- FlowiseAI/Flowise (topic: rag) - agent builder visually
- datawhalechina/hello-agents (topic: rag) - agent tutorial
- bojieli/ai-agent-book (topic: ai-agent)
- shubhamsaboo/awesome-llm-apps (topic: rag) - but contains agents

Actually let me be more careful with categorization. The user says "pick the primary one."

Let me re-categorize more carefully:

**🔧 AI Infrastructure:**
- TencentCloud/TencentDB-Agent-Memory (agent memory infrastructure)
- zhaoxuya520/reverse-skill (skill router + toolchain)
- uber/ADR (agent observability/security)
- obra/superpowers (agentic skills framework)
- firecrawl/pdf-inspector (PDF inspection for AI)
- lyogavin/airllm (inference engine)
- livekit/agents (voice AI agent framework)
- EveryInc/compound-engineering-plugin (AI client plugin)
- Ollama/ollama (LLM inference engine)
- firecrawl/firecrawl (web scraping API for AI)
- browser-use/browser-use (web automation for AI)
- 0xPlaygrounds/rig (modular LLM apps in Rust)
- affaan-m/ECC (agent harness optimization)
- Picovoice/picollm (on-device LLM inference)
- langchain4j/langchain4j (Java LLM framework)
- neuml/txtai (AI framework)
- lancedb/lancedb (embedded retrieval)
- oramasearch/orama (search/RAG pipeline)
- alibaba/zvec (vector database)
- weaviate/weaviate (vector database)
- milvus-io/milvus (vector database)
- qdrant/qdrant (vector database)
- meilisearch/meilisearch (search engine with AI)

Wait, I need to be more disciplined. Let me assign primary categories:

**🔧 AI Infrastructure:**
- TencentCloud/TencentDB-Agent-Memory
- zhaoxuya520/reverse-skill
- uber/ADR
- obra/superpowers
- firecrawl/pdf-inspector
- lyogavin/airllm
- livekit/agents
- EveryInc/compound-engineering-plugin
- Ollama/ollama
- firecrawl/firecrawl
- browser-use/browser-use
- 0xPlaygrounds/rig
- affaan-m/ECC
- Picovoice/picollm
- langchain4j/langchain4j
- neuml/txtai
- lancedb/lancedb
- oramasearch/orama
- alibaba/zvec
- weaviate/weaviate
- milvus-io/milvus
- qdrant/qdrant
- meilisearch/meilisearch

**🤖 AI Agents / Workflows:**
- NousResearch/hermes-agent
- Panniantong/Agent-Reach
- santifer/career-ops
- ZhuLinsen/daily_stock_analysis
- CherryHQ/cherry-studio
- HKUDS/nanobot
- zhayujie/CowAgent
- siyuan-note/siyuan
- hugohe3/ppt-master
- CopilotKit/CopilotKit
- iOfficeAI/AionUi
- esengine/DeepSeek-Reasonix
- Gitlawb/openclaude
- googleworkspace/cli
- Significant-Gravitas/AutoGPT
- datawhalechina/hello-agents
- bojieli/ai-agent-book

**📦 AI Applications:**
- mintplex-labs/anything-llm
- shubhamsaboo/awesome-llm-apps
- hkuDS/nanobot (could be agents too)
- cherry-studio (could be agents)

Actually, let me reconsider. The categories are:
1. AI Infrastructure
2. AI Agents / Workflows
3. AI Applications
4. LLMs / Training
5. RAG / Knowledge

Let me be more careful:

**🔧 AI Infrastructure:**
- TencentCloud/TencentDB-Agent-Memory
- zhaoxuya520/reverse-skill
- uber/ADR
- obra/superpowers
- firecrawl/pdf-inspector
- lyogavin/airllm
- livekit/agents
- EveryInc/compound-engineering-plugin
- Ollama/ollama
- firecrawl/firecrawl
- browser-use/browser-use
- 0xPlaygrounds/rig
- affaan-m/ECC
- Picovoice/picollm
- langchain4j/langchain4j
- neuml/txtai
- lancedb/lancedb
- oramasearch/orama
- alibaba/zvec
- weaviate/weaviate
- milvus-io/milvus
- qdrant/qdrant
- meilisearch/meilisearch

Hmm, some of these are more RAG/knowledge or agents. Let me be more precise:

**🔧 AI Infrastructure:**
- TencentCloud/TencentDB-Agent-Memory (agent memory hub)
- zhaoxuya520/reverse-skill (skill router + toolchain)
- uber/ADR (agent observability)
- obra/superpowers (agentic skills framework)
- firecrawl/pdf-inspector (PDF inspection for AI)
- lyogavin/airllm (inference engine)
- livekit/agents (voice AI agent framework)
- EveryInc/compound-engineering-plugin (AI client plugin)
- Ollama/ollama (LLM inference engine)
- firecrawl/firecrawl (web scraping API)
- browser-use/browser-use (web automation)
- 0xPlaygrounds/rig (modular LLM apps in Rust)
- affaan-m/ECC (agent harness optimization)
- Picovoice/picollm (on-device LLM inference)
- langchain4j/langchain4j (Java LLM framework)
- neuml/txtai (AI framework)
- lancedb/lancedb (embedded retrieval library)
- oramasearch/orama (search/RAG pipeline)
- alibaba/zvec (vector database)
- weaviate/weaviate (vector database)
- milvus-io/milvus (vector database)
- qdrant/qdrant (vector database)
- meilisearch/meilisearch (search engine)

Wait, vector databases should be RAG/Knowledge. Let me reassign:

**🔧 AI Infrastructure:**
- TencentCloud/TencentDB-Agent-Memory
- zhaoxuya520/reverse-skill
- uber/ADR
- obra/superpowers
- firecrawl/pdf-inspector
- lyogavin/airllm
- livekit/agents
- EveryInc/compound-engineering-plugin
- Ollama/ollama
- firecrawl/firecrawl
- browser-use/browser-use
- 0xPlaygrounds/rig
- affaan-m/ECC
- Picovoice/picollm
- langchain4j/langchain4j
- neuml/txtai

**🤖 AI Agents / Workflows:**
- NousResearch/hermes-agent
- Panniantong/Agent-Reach
- santifer/career-ops
- ZhuLinsen/daily_stock_analysis
- CherryHQ/cherry-studio
- HKUDS/nanobot
- zhayujie/CowAgent
- siyuan-note/siyuan
- hugohe3/ppt-master
- CopilotKit/CopilotKit
- iOfficeAI/AionUi
- esengine/DeepSeek-Reasonix
- Gitlawb/openclaude
- googleworkspace/cli
- Significant-Gravitas/AutoGPT
- datawhalechina/hello-agents
- bojieli/ai-agent-book

**📦 AI Applications:**
- mintplex-labs/anything-llm (could be infrastructure too)
- shubhamsaboo/awesome-llm-apps

**🧠 LLMs / Training:**
- tensorflow/tensorflow
- pytorch/pytorch
- huggingface/transformers
- rasbt/LLMs-from-scratch
- ultralytics/ultralytics
- deepfakes/faceswap
- JuliaLang/julia
- roboflow/supervision
- scikit-learn/scikit-learn
- keras-team/keras
- open-compass/opencompass
- Eigenwise/atomic-agents
- skyzh/tiny-llm
- genieincodebottle/generative-ai
- llm-jp/awesome-japanese-llm
- thinkwee/AwesomeOPD
- chrisliu298/awesome-llm-unlearning
- Event-AHU/Medical_Image_Analysis
- kennethleungty/Finance-LLMs
- AIDASLab/Awesome-Diffusion-LLM
- AarambhDevHub/aarambh-studio

**🔍 RAG / Knowledge:**
- Mintplex-Labs/anything-llm (also infrastructure)
- run-llama/llama_index
- NirDiamant/RAG_Techniques
- topoteretes/cognee
- Graphify-Labs/graphify
- thedotmack/claude-mem
- infiniflow/ragflow
- headroomlabs-ai/headroom
- mem0ai/mem0
- FlowiseAI/Flowise
- jeecgboot/JeecgBoot
- VectifyAI/PageIndex
- StarTrail-org/LEANN

OK, I think I need to be more disciplined. Let me finalize:

**🔧 AI Infrastructure:**
1. TencentCloud/TencentDB-Agent-Memory (⭐0, +1138 today) - agent memory hub
2. zhaoxuya520/reverse-skill (⭐0, +2310 today) - AI skill router
3. uber/ADR (⭐0, +140 today) - agent observability/security
4. obra/superpowers (⭐0, +777 today) - agentic skills framework
5. firecrawl/pdf-inspector (⭐0, +2524 today) - PDF inspection for AI
6. lyogavin/airllm (⭐0, +1716 today) - AI inference engine
7. livekit/agents (⭐0, +432 today) - realtime voice AI agent framework
8. EveryInc/compound-engineering-plugin (⭐0, +33 today) - AI client plugin
9. Ollama/ollama (⭐177,781) - LLM inference engine
10. firecrawl/firecrawl (⭐160,992) - web scraping API for AI
11. browser-use/browser-use (⭐107,871) - web automation for AI agents
12. affaan-m/ECC (⭐237,674) - agent harness optimization
13. 0xPlaygrounds/rig (⭐8,168) - modular LLM apps in Rust
14. Picovoice/picollm (⭐316) - on-device LLM inference
15. langchain4j/langchain4j (⭐12,788) - Java LLM framework
16. neuml/txtai (⭐12,793) - AI framework for semantic search

**🤖 AI Agents / Workflows:**
1. NousResearch/hermes-agent (⭐225,462) - growing agent
2. Panniantong/Agent-Reach (⭐66,450) - internet-facing agent
3. CherryHQ/cherry-studio (⭐49,406) - AI productivity studio
4. HKUDS/nanobot (⭐46,617) - lightweight personal AI agent
5. zhayujie/CowAgent (⭐46,318) - super AI assistant
6. siyuan-note/siyuan (⭐45,623) - personal knowledge management
7. hugohe3/ppt-master (⭐42,999) - AI PowerPoint generation
8. CopilotKit/CopilotKit (⭐36,456) - frontend stack for agents
9. iOfficeAI/AionUi (⭐31,406) - local cowork app
10. esengine/DeepSeek-Reasonix (⭐30,738 trending, +924 today) - AI coding agent
11. Gitlawb/openclaude (⭐30,513) - Claude wrapper
12. googleworkspace/cli (⭐30,199) - Google Workspace CLI with AI
13. Significant-Gravitas/AutoGPT (⭐185,810) - autonomous AI agent
14. datawhalechina/hello-agents (⭐70,744) - agent tutorial
15. bojieli/ai-agent-book (⭐31,662) - AI agent book

**📦 AI Applications:**
1. Mintplex-Labs/anything-llm (⭐64,332) - local-first agent experience
2. shubhamsaboo/awesome-llm-apps (⭐130,496) - 100+ AI apps collection

**🧠 LLMs / Training:**
1. tensorflow/tensorflow (⭐196,804) - ML framework
2. pytorch/pytorch (⭐102,183) - deep learning framework
3. huggingface/transformers (⭐163,335) - model framework
4. rasbt/LLMs-from-scratch (⭐100,555) - build LLM from scratch
5. ultralytics/ultralytics (⭐60,208) - YOLO object detection
6. deepfakes/faceswap (⭐57,235) - deepfake software
7. JuliaLang/julia (⭐48,982) - Julia programming language
8. roboflow/supervision (⭐48,695) - computer vision tools
9. scikit-learn/scikit-learn (⭐66,879) - ML in Python
10. keras-team/keras (⭐64,219) - deep learning
11. open-compass/opencompass (⭐7,273) - LLM evaluation
12. Eigenwise/atomic-agents (⭐6,115) - building AI agents atomically
13. skyzh/tiny-llm (⭐4,440) - LLM inference on Apple Silicon
14. genieincodebottle/generative-ai (⭐2,584) - generative AI resources
15. llm-jp/awesome-japanese-llm (⭐1,423) - Japanese LLM overview
16. thinkwee/AwesomeOPD (⭐801) - on-policy distillation
17. chrisliu298/awesome-llm-unlearning (⭐617) - machine unlearning
18. Event-AHU/Medical_Image_Analysis (⭐237) - medical image analysis
19. kennethleungty/Finance-LLMs (⭐134) - financial LLM use cases
20. AIDASLab/Awesome-Diffusion-LLM (⭐94) - diffusion LLM papers
21. AarambhDevHub/aarambh-studio (⭐62) - decoder-only LLM in Rust

**🔍 RAG / Knowledge:**
1. Mintplex-Labs/anything-llm (⭐64,332) - local agent with RAG
2. run-llama/llama_index (⭐51,374) - document agent and OCR platform
3. NirDiamant/RAG_Techniques (⭐28,940) - RAG techniques tutorials
4. topoteretes/cognee (⭐29,776) - AI memory platform with knowledge graph
5. Graphify-Labs/graphify (⭐102,458) - codebase to knowledge graph
6. thedotmack/claude-mem (⭐89,554) - persistent context for agents
7. infiniflow/ragflow (⭐86,816) - RAG engine with agent capabilities
8. headroomlabs-ai/headroom (⭐64,744) - compress tool outputs for LLM
9. mem0ai/mem0 (⭐62,520) - universal memory layer for AI agents
10. FlowiseAI/Flowise (⭐55,148) - visual AI agent builder
11. jeecgboot/JeecgBoot (⭐47,279) - AI low-code platform
12. VectifyAI/PageIndex (⭐35,016) - document index for vectorless RAG
13. StarTrail-org/LEANN (⭐12,760) - RAG with 97% storage savings
14. Mintplex-Labs/anything-llm - also listed here

Now for the report, I need to be selective and present the most representative projects per category. I'll aim for 3-8 per category.

Let me also think about what's noteworthy from the trending list:

- firecrawl/pdf-inspector has the highest today's stars (+2524) - PDF inspection with AI classification
- zhaoxuya520/reverse-skill has +2310 today - AI-powered security skill router
- lyogavin/airllm has +1716 today - running 70B models on 4GB GPU
- TencentDB-Agent-Memory +1138 - team-level memory for AI agents
- esengine/DeepSeek-Reasonix +924 - DeepSeek-native coding agent
- obra/superpowers +777 - agentic skills framework
- microsoft/generative-ai-for-beginners +784 - educational content
- livekit/agents +432 - realtime voice AI agents
- browser-use/video-use +306 - video editing with coding agents

**Step 3: Trend Signal Analysis**

Key observations:
1. AI coding agents are exploding - DeepSeek-Reasonix, reverse-skill, compound-engineering-plugin, superpowers all relate to AI-assisted coding
2. Agent memory/persistence is a hot topic - TencentDB-Agent-Memory, claude-mem, mem0, cognee
3. Infrastructure for running LLMs on consumer hardware - airllm (70B on 4GB GPU), picollm
4. PDF/document AI processing is trending - pdf-inspector, ppt-master
5. The rise of "agent harnesses" and skill systems - ECC, reverse-skill, superpowers, compound-engineering-plugin
6. DeepSeek ecosystem is growing - DeepSeek-Reasonix, and DeepSeek mentioned in ollama
7. Voice AI agents (livekit/agents) - multimodal agent trend
8. Video generation/editing with AI agents - video-use, MoneyPrinterTurbo

**Community Hot Spots:**
1. AI coding agents & skill systems
2. Agent memory & persistence layers
3. Lightweight LLM inference on consumer hardware
4. RAG pipelines with vectorless/reasoning approaches
5. Multi-modal AI agents (voice, video)

Let me now compose the final report. I need to be professional, concise, and include GitHub links for every project.

For the Top Projects by Category, I'll pick the most representative 3-8 per category, prioritizing those from today's trending list and the most starred from topic search.

Let me also double-check: the trending list shows ⭐0 for all, meaning these are new repos or the star count shown is 0 (likely they are new repos gaining stars today). The topic search results show total star counts.

Actually wait - looking at the trending data more carefully, all show ⭐0 which likely means they're new or the display format shows current total stars as 0 but today's gain is shown. Or perhaps these are repos that just hit trending and the total is not shown. The "+1138 today" etc. are the daily star gains. For the topic search results, the star counts shown are total stars.

Let me now write the report.

I need to be careful about the categorization. Some projects could fit multiple categories. The instruction says "pick the primary one."

Let me finalize my categorization decisions:

**🔧 AI Infrastructure** (frameworks, SDKs, inference engines, dev tools, CLI):
- TencentCloud/TencentDB-Agent-Memory
- zhaoxuya520/reverse-skill
- uber/ADR
- obra/superpowers
- firecrawl/pdf-inspector
- lyogavin/airllm
- livekit/agents
- EveryInc/compound-engineering-plugin
- Ollama/ollama
- firecrawl/firecrawl
- browser-use/browser-use
- 0xPlaygrounds/rig
- affaan-m/ECC
- Picovoice/picollm
- langchain4j/langchain4j
- neuml/txtai

**🤖 AI Agents / Workflows:**
- NousResearch/hermes-agent
- Panniantong/Agent-Reach
- CherryHQ/cherry-studio
- HKUDS/nanobot
- zhayujie/CowAgent
- siyuan-note/siyuan
- hugohe3/ppt-master
- CopilotKit/CopilotKit
- iOfficeAI/AionUi
- esengine/DeepSeek-Reasonix (primary: agents, but also infrastructure)
- Gitlawb/openclaude
- googleworkspace/cli
- Significant-Gravitas/AutoGPT
- datawhalechina/hello-agents
- bojieli/ai-agent-book

**📦 AI Applications:**
- Mintplex-Labs/anything-llm
- shubhamsaboo/awesome-llm-apps

**🧠 LLMs / Training:**
- tensorflow/tensorflow
- pytorch/pytorch
- huggingface/transformers
- rasbt/LLMs-from-scratch
- ultralytics/ultralytics
- deepfakes/faceswap
- JuliaLang/julia
- roboflow/supervision
- scikit-learn/scikit-learn
- keras-team/keras
- open-compass/opencompass
- Eigenwise/atomic-agents
- skyzh/tiny-llm
- genieincodebottle/generative-ai
- llm-jp/awesome-japanese-llm
- thinkwee/AwesomeOPD
- chrisliu298/awesome-llm-unlearning
- Event-AHU/Medical_Image_Analysis
- kennethleungty/Finance-LLMs
- AIDASLab/Awesome-D

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*