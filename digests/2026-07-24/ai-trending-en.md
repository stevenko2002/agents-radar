# AI Open Source Trends 2026-07-24

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-07-24 03:16 UTC

---

Got it, let's tackle this step by step. First, Step 1 is filtering out non-AI projects. Let's go through the trending list first:
First, the trending 15: block/buzz is a hive mind comms platform? Wait no, wait wait, wait no—wait wait, no, wait let's check each:
Wait first, trending list repos:
1. block/buzz: Wait the description says "hive mind communication platform"—wait, is that AI? Wait no, wait wait no, wait let's check others. Wait koala73/worldmonitor: real-time global intel dashboard, AI-powered news aggregation, geopolitical monitoring—yes, that's AI. shiyu-coder/Kronos: foundation model for financial markets, that's LLM. Pumpkin-MC/Pumpkin: Minecraft server, no, exclude. citrolabs/ego-lite: browser for you and AI agents work in parallel, yes, AI adjacent, agent related. chrislgarry/Apollo-11: Apollo 11 code, no, exclude. diegosouzapw/OmniRoute: free AI gateway, 290+ providers, yes, AI infra. ComposioHQ/awesome-claude-skills: curated Claude Skills, yes, agent related. earthtojake/text-to-cad: agent skills for CAD, robotics, hardware design, yes, AI agent app. agegr/pi-web: web UI for pi coding agent, yes, agent tool. alibaba/open-code-review: hybrid code review tool, deterministic + LLM agent, yes, AI dev tool. ruvnet/RuView: WiFi to spatial intelligence, vital sign monitoring, no cameras, that's AI perception, yes. likec4/likec4: software architecture diagrams from code, wait is that AI? Wait description says "always actual and live diagrams from your code"—wait no, wait let's check the topic? Wait no, the trending list description doesn't mention AI, wait wait wait no, wait let's see: Automattic/harper: offline grammar checker, wait is that AI? Wait original description says privacy-first grammar checker, Rust-powered—wait but is it AI? Wait wait, no, let's check: wait the user said exclude non-AI, general tools, frontend, games. Wait Harper: is it AI-powered? Let me think—some grammar checkers are rule-based, but wait let's see, wait the trending list: wait jellyfin is media server, no, exclude. Wait wait also the topic search results are all AI related, right? The topic search is already AI-related, so those are all in, but we need to filter the trending list first for AI relevance.
Wait let's recheck trending list AI relevant:
- koala73/worldmonitor: yes, AI-powered news, geopolitical monitoring, situational awareness—AI app/infra? Wait let's categorize later.
- shiyu-coder/Kronos: financial foundation model, LLM/training.
- citrolabs/ego-lite: browser for parallel human + AI agent work, AI agent tool.
- diegosouzapw/OmniRoute: AI gateway, infra.
- ComposioHQ/awesome-claude-skills: Claude skills, agent workflows.
- earthtojake/text-to-cad: CAD/robotics agent skills, AI application.
- agegr/pi-web: Pi coding agent UI, agent tool.
- alibaba/open-code-review: LLM + deterministic code review, AI dev tool/infra.
- ruvnet/RuView: WiFi-based spatial intelligence, vital sign monitoring—AI perception app, no video, that's a new direction.
Wait wait what about likec4/likec4? Wait description says "visualize, collaborate, evolve software architecture with always actual live diagrams from your code"—wait does it use AI? The description doesn't mention AI, so maybe exclude? Wait Harper: Automattic/harper, description says offline privacy-first grammar checker, Rust-powered—wait is it AI? Let me check, no, Harper is a rule-based grammar checker, right? So no AI, so exclude. Oh right, so we can exclude that. The rest of the trending non-AI: Pumpkin (Minecraft), Apollo 11 (space code), jellyfin (media server) are out.
Wait also block/buzz: "hive mind communication platform"—wait is that AI? The description doesn't mention AI, so maybe exclude? Wait wait let's confirm: the user said filter for AI relevance, so only projects that are explicitly or implicitly AI/ML related. So buzz: no mention of AI, so exclude.
Okay, so filtered trending AI repos: worldmonitor, Kronos, ego-lite, OmniRoute, awesome-claude-skills, text-to-cad, pi-web, open-code-review, RuView. Then all the topic search results are already AI related, right? Because they're from topic search for AI topics, so those are all included.
Now Step 2: Categorize into the 5 categories. Let's define each category first to make sure:
1. 🔧 AI Infrastructure: frameworks, SDKs, inference engines, dev tools, CLI, gateways, vector DBs? Wait no, wait vector DBs are RAG/Knowledge? Wait no, let's check the category definitions again:
Wait the user's categories:
- 🔧 AI Infrastructure (frameworks, SDKs, inference engines, dev tools, CLI): so things like inference engines, gateways, dev tools for building AI, model serving, etc.
- 🤖 AI Agents / Workflows (agent frameworks, automation, multi-agent systems): agent runtimes, agent tools, agent skills, multi-agent frameworks, coding agents, etc.
- 📦 AI Applications (specific apps, vertical solutions): end-user or vertical industry AI apps, not general tools.
- 🧠 LLMs / Training (model weights, training frameworks, fine-tuning tools): LLM training, model development, fine-tuning, evaluation of models themselves, model weights repos.
- 🔍 RAG / Knowledge (vector databases, retrieval-augmented generation, knowledge management): vector DBs, RAG engines, knowledge graphs, memory for agents, OCR for RAG, etc.
Okay, let's categorize each project:
First, let's list all filtered AI projects first (trending + topic search):
First Trending Filtered (9):
1. koala73/worldmonitor: TypeScript, AI-powered global intel dashboard, geopolitical, news, infra tracking. That's a vertical AI app, so 📦 AI Applications.
2. shiyu-coder/Kronos: Python, foundation model for financial markets. That's 🧠 LLMs / Training.
3. citrolabs/ego-lite: JavaScript, browser for human + AI agent parallel work. That's 🤖 AI Agents / Workflows (agent tool).
4. diegosouzapw/OmniRoute: TypeScript, free AI gateway, 290+ providers, 500+ models, quota fallback, etc. That's 🔧 AI Infrastructure.
5. ComposioHQ/awesome-claude-skills: Python, curated Claude Skills for workflows. That's 🤖 AI Agents / Workflows (agent skills/resources).
6. earthtojake/text-to-cad: JavaScript, agent skills for CAD, robotics, hardware design. That's 📦 AI Applications (vertical: design/manufacturing) or 🤖? Wait no, it's a collection of agent skills for a vertical, so maybe 📦, or wait no—wait it's agent skills, so maybe both? But primary? Wait let's see: it's specific to CAD/robotics, so 📦 AI Applications, but also has agent component. Wait but primary category: let's pick the most relevant. Alternatively, if it's agent skills for a vertical, maybe 📦.
7. agegr/pi-web: TypeScript, web UI for Pi coding agent. That's 🤖 AI Agents / Workflows (agent UI tool).
8. alibaba/open-code-review: Go, code review tool with LLM agent + deterministic pipelines. That's 🔧 AI Infrastructure (dev tool for AI-assisted development).
9. ruvnet/RuView: Rust, WiFi to spatial intelligence, vital sign monitoring, no cameras. That's 📦 AI Applications (vertical: smart home/healthcare/perception) or 🧠? No, it's an application of AI perception, so 📦.
Now the Topic Search repos (80, deduplicated, all AI related):
Let's go through each topic:
First topic: llm-model (these are LLM training, models, related tools):
1. jingyaogong/minimind: Python, train 64M LLM from scratch in 2h. 🧠 LLMs / Training.
2. ScrapeGraphAI/Scrapegraph-ai: Python, AI-based scraper. 📦 AI Applications (data scraping) or 🔧? Wait it's a scraper using AI, so end user app, 📦.
3. 0xPlaygrounds/rig: Rust, build modular scalable LLM apps in Rust. 🔧 AI Infrastructure (LLM app framework).
4. open-compass/opencompass: Python, LLM evaluation platform. 🧠 LLMs / Training (model evaluation is part of model development) or 🔧? Wait evaluation is for LLMs, so 🧠.
5. Eigenwise/atomic-agents: Python, build AI agents atomically. 🤖 AI Agents / Workflows.
6. skyzh/tiny-llm: Python, course for building tiny vLLM on Apple Silicon. 🧠 LLMs / Training (inference serving, part of LLM infra but focused on LLM serving, so maybe 🔧? Wait no, it's for learning LLM inference, which is part of LLM infrastructure. Wait let's see: vLLM is an inference engine, so tiny-llm is teaching how to build that, so 🔧 AI Infrastructure? Or 🧠? Wait let's check the category: LLMs / Training is model weights, training frameworks, fine-tuning. Inference engines are infra. So yes, 🔧.
7. samchon/nestia: TypeScript, NestJS helper + AI chatbot development. 🤖 AI Agents / Workflows (chatbot dev tool) or 🔧? Wait it's a helper for building AI chatbots, so 🤖.
8. thinkwee/AgentsMeetRL: HTML, awesome list for Agentic RL. 🤖 AI Agents / Workflows (resource for agent RL) or 🧠? No, agent RL is for agents, so 🤖.
9. thinkwee/AwesomeOPD: Awesome list for On-Policy Distillation. 🧠 LLMs / Training (distillation is a model training technique).
10. chrisliu298/awesome-llm-unlearning: Awesome list for LLM unlearning. 🧠 LLMs / Training (unlearning is model post-training technique).
11. Picovoice/picollm: Python, on-device LLM inference with X-bit quantization. 🔧 AI Infrastructure (on-device LLM inference engine).
12. kennethleungty/Finance-LLMs: Awesome list of LLM use cases in finance. 📦 AI Applications (vertical finance use cases) or 🧠? No, it's use cases, so 📦.
13. testtimescaling/testtimescaling.github.io: Survey on test-time scaling in LLMs. 🧠 LLMs / Training (research on LLM capabilities, part of model development).
14. chenshuang-zhang/imagenet_d: CVPR 2024, ImageNet-D. Wait wait, topic is llm-model? Wait no, ImageNet is computer vision, but the topic tag is llm-model? Wait maybe it's for multimodal LLMs? Anyway, the topic is llm-model, so 🧠 LLMs / Training.
15. Hai-chao-Zhang/ThinkJEPA: ThinkJEPA, latent world models with vision-language reasoning. 🧠 LLMs / Training (multimodal model development).
Next topic: rag (RAG related):
16. langgenius/dify: TypeScript, build RAG pipelines, agentic workflows, collaborative workspace. 🤖 AI Agents / Workflows? Or 🔍 RAG / Knowledge? Wait it does both RAG and agents, primary? Let's see, description says "Build Agentic workflows, RAG pipelines"—so maybe both, but let's pick 🤖? Wait no, wait the RAG category is for RAG-specific tools. Wait no, dify is a low-code platform for both agents and RAG, so maybe primary 🤖, but also can be in RAG? Wait no, let's assign primary: let's see, if a project is primarily for building agents with RAG support, then 🤖, if it's primarily a RAG engine, then 🔍. So dify: 🤖 AI Agents / Workflows (low-code agent/RAG platform).
17. open-webui/open-webui: Python, user-friendly AI interface, supports Ollama, OpenAI. 🔧 AI Infrastructure (AI UI/access layer) or 🤖? Wait it's a UI for interacting with LLMs, so 🔧 infra.
18. langchain-ai/langchain: Python, agent engineering platform. 🤖 AI Agents / Workflows (leading agent framework).
19. Shubhamsaboo/awesome-llm-apps: Awesome list of 100+ AI agents, RAG apps. 🤖 AI Agents / Workflows (resource) or 🔍? No, it's a list of apps and agents, so 🤖.
20. Graphify-Labs/graphify: Python, turn codebase into queryable knowledge graph for RAG, no vector store. 🔍 RAG / Knowledge (knowledge graph for RAG, agent memory).
21. thedotmack/claude-mem: JavaScript, persistent context for AI agents across sessions. 🔍 RAG / Knowledge (agent memory layer, part of RAG for agent context) or 🤖? It's memory, which is part of agent knowledge, so 🔍.
22. PaddlePaddle/PaddleOCR: Python, OCR toolkit for PDFs/images to structured data for LLMs. 🔍 RAG / Knowledge (document processing for RAG pipelines).
23. infiniflow/ragflow: Go, leading open-source RAG engine with agent capabilities. 🔍 RAG / Knowledge (core RAG engine).
24. Mintplex-Labs/anything-llm: JavaScript, local-first agent experience, knowledge management. 🤖 AI Agents / Workflows (local agent platform with RAG) or 🔍? Let's pick 🤖, but wait no—wait it's for RAG and agents, but let's see: primary? Maybe 🤖, but also fits RAG. Wait but let's assign primary.
25. headroomlabs-ai/headroom: Python, compress tool outputs, RAG chunks before LLM, 20-95% token savings. 🔧 AI Infrastructure (LLM optimization tool) or 🔍? It's for RAG chunks, so maybe 🔍 RAG / Knowledge, but also infra. Wait let's see: it's a tool to optimize RAG and agent token usage, so maybe 🔧 AI Infrastructure? Or 🔍? Wait no, let's check: the category RAG/Knowledge is for vector DBs, RAG engines, knowledge management. Headroom is a tool that works with RAG chunks, so maybe 🔍, but also infra. Wait let's decide: primary 🔧 AI Infrastructure? No, wait let's read the description: "Compress tool outputs, logs, files, and RAG chunks before they reach the LLM." So it's a middleware for LLM apps, especially RAG and agents, so 🔧 AI Infrastructure.
26. mem0ai/mem0: TypeScript, universal memory layer for AI agents. 🔍 RAG / Knowledge (agent long-term memory, knowledge layer).
27. FlowiseAI/Flowise: TypeScript, build AI agents visually. 🤖 AI Agents / Workflows (low-code agent builder).
28. run-llama/llama_index: Python, document agent and OCR platform. 🤖 AI Agents / Workflows? Or 🔍 RAG / Knowledge? Wait LlamaIndex is primarily for building RAG and document agents, so primary 🤖 AI Agents / Workflows, but also fits RAG.
29. milvus-io/milvus: Go, vector database for AI. 🔍 RAG / Knowledge (core vector DB for RAG).
30. HKUDS/LightRAG: Python, simple and fast RAG framework, EMNLP2025. 🔍 RAG / Knowledge (RAG framework).
31. affaan-m/ECC: JavaScript, agent harness performance optimization system, skills, memory, security for coding agents. 🤖 AI Agents / Workflows (coding agent harness).
32. NousResearch/hermes-agent: Python, agent that grows with you. 🤖 AI Agents / Workflows (general agent framework).
33. Significant-Gravitas/AutoGPT: Python, accessible AI for everyone, agent tools. 🤖 AI Agents / Workflows (pioneering agent framework).
34. ollama/ollama: Go, run LLMs locally, 290+ models. 🔧 AI Infrastructure (local LLM serving engine).
35. f/prompts.chat: HTML, Awesome ChatGPT Prompts, self-host prompt library. 🤖 AI Agents / Workflows (prompt resource for LLM use) or 📦? No, it's a resource for building LLM apps/agents, so 🤖.
36. huggingface/transformers: Python, model-definition framework for SOTA ML models, training and inference. 🧠 LLMs / Training? Or 🔧? Wait Transformers is a model hub and framework for training and deploying models, so primary 🧠 LLMs / Training, but also infra. Wait the category LLMs/Training is model weights, training frameworks, fine-tuning tools. Yes, Transformers fits that.
37. firecrawl/firecrawl: TypeScript, API to search, scrape, interact with web at scale. 📦 AI Applications (web data tool for AI agents) or 🔧? It's a tool used by AI agents to scrape web, so 📦 AI Applications (vertical: web data for AI).
38. browser-use/browser-use: Python, make websites accessible for AI agents, automate online tasks. 🤖 AI Agents / Workflows (agent web automation tool).
39. harry0703/MoneyPrinterTurbo: Python, AI workflow to generate short videos from topic/keyword. 📦 AI Applications (vertical: content creation).
40. TauricResearch/TradingAgents: Python, multi-agent LLM financial trading framework. 📦 AI Applications (vertical: finance) or 🤖? It's a multi-agent system for trading, so primary 📦 AI Applications (vertical finance), but also 🤖.
41. vllm-project/vllm: Python, high-throughput LLM inference and serving engine. 🔧 AI Infrastructure (LLM inference engine).
42. santifer/career-ops: JavaScript, open-source AI job search tool, scan portals, score listings, tailor CV. 📦 AI Applications (vertical: career/job search).
43. ZhuLinsen/daily_stock_analysis: Python, LLM-powered multi-market stock analysis system. 📦 AI Applications (vertical: finance).
44. CherryHQ/cherry-studio: TypeScript, AI productivity studio, chat, autonomous agents, 300+ assistants. 🤖 AI Agents / Workflows (all-in-one agent productivity platform).
45. HKUDS/nanobot: Python, lightweight open-source AI agent for tools, chats, workflows. 🤖 AI Agents / Workflows (lightweight agent runtime).
46. zhayujie/CowAgent: Python, open-source super AI assistant, agent harness, memory, knowledge. 🤖 AI Agents / Workflows (general open-source agent).
47. siyuan-note/siyuan: TypeScript, privacy-first self-hosted personal knowledge management. Wait wait, is this AI related? Wait the topic tag is ai-agent? Oh right, the topic search result has topic:ai-agent for siyuan? Wait let's check: yes, the topic search result for siyuan has [topic:ai-agent]. Oh right, so it's a PKM tool with AI agent support? Wait description says "privacy-first, self-hosted, fully open source personal knowledge management software"—wait but the topic is ai-agent, so maybe it has AI agent features? So 🤖 AI Agents / Workflows (PKM with agent support) or 📦? Let's put in 🤖, but wait or is it 📦? No, since the topic is ai-agent, so primary 🤖.
48. hugohe3/ppt-master: Python, AI turns documents/topics into PowerPoint decks. 📦 AI Applications (vertical: office/productivity).
49. CopilotKit/CopilotKit: TypeScript, frontend stack for agents & generative UI. 🤖 AI Agents / Workflows (agent frontend framework).
50. iOfficeAI/AionUi: TypeScript, 24/7 cowork app for AI coding CLI agents. 🤖 AI Agents / Workflows (agent desktop/UI tool).
51. Gitlawb/openclaude: TypeScript, runs anywhere, uses anything. 🤖 AI Agents / Workflows (open-source Claude alternative agent runtime).
52. googleworkspace/cli: Rust, Google Workspace CLI with AI agent skills. 🤖 AI Agents / Workflows (agent tool for Google Workspace).
53. esengine/DeepSeek-Reasonix: Go, DeepSeek-native AI coding agent for terminal. 🤖 AI Agents / Workflows (coding agent).
54. jackwener/OpenCLI: JavaScript, make any website into CLI for AI agents. 🤖 AI Agents / Workflows (agent web automation CLI tool).
55. HKUDS/Vibe-Trading: Python, personal AI trading agent. 📦 AI Applications (vertical: finance trading).
Next topic: ml (machine learning, general):
56. tensorflow/tensorflow: C++, open source ML framework. 🧠 LLMs / Training? Or 🔧? Wait TensorFlow is a general ML framework, but the category LLMs/Training is for LLM-related, but wait the user's category says 🧠 LLMs / Training (model weights, training frameworks, fine-tuning tools). Wait but TensorFlow is general ML, but also used for LLMs. Wait but let's see: the other ML repos are general ML, but let's assign: wait tensorflow is a general ML framework, but does it fit any category? Wait wait the user's categories are the 5 given. Wait let's check: tensorflow is a training framework, so 🧠 LLMs / Training? Even though it's general ML, but it's used for LLM training too. Alternatively, wait is there a better category? No, the 5 categories are the ones given. Wait pytorch same: 🧠 LLMs / Training, since it's the leading framework for LLM training.
57. pytorch/pytorch: Python, tensor library with GPU acceleration, used for LLM training. 🧠 LLMs / Training.
58. netdata/netdata: Go, AI-powered full stack observability. 📦 AI Applications (vertical: observability) or 🔧? It's an observability tool with AI features, so 📦 AI Applications.
59. tesseract-ocr/tesseract: C++, open source OCR engine. 🔍 RAG / Knowledge (OCR for RAG pipelines, document processing) or 📦? It's a tool used for RAG, so 🔍.
60. OpenBB-finance/OpenBB: Python, open data platform for analysts, quants, AI agents. 📦 AI Applications (vertical: finance).
61. scikit-learn/scikit-learn: Python, ML library for Python. 🧠 LLMs / Training? It's general ML, but used for LLM-related tasks too, so 🧠.
62. keras-team/keras: Python, deep learning framework. 🧠 LLMs / Training.
63. ultralytics/ultralytics: Python, YOLO object detection, segmentation, etc. 🧠 LLMs / Training? Wait YOLO is computer vision, but it's ML model training, so 🧠.
64. microsoft/AI-For-Beginners: Jupyter Notebook, 12 week AI course for beginners. 🧠 LLMs / Training (educational resource for AI/ML).
65. JuliaLang/julia: Julia programming language, used for ML. Wait is this AI related? The topic is ml, so yes, but is it relevant? Wait Julia is a language for high-performance computing, used in ML, so 🔧 AI Infrastructure? Wait wait the category AI Infrastructure is frameworks, SDKs, inference engines, dev tools, CLI. Oh right! Julia is a programming language used for AI/ML development, so it's a dev tool, so 🔧 AI Infrastructure.
66. roboflow/supervision: Python, reusable computer vision tools. 🧠 LLMs / Training? Or 📦? It's CV tools, so 🧠 LLMs / Training (since CV is part of ML, and used for multimodal LLMs).
67. microsoft/qlib: Python, AI-oriented quant investment platform. 📦 AI Applications (vertical: finance quant).
68. apache/airflow: Python, workflow orchestration platform, used for ML/AI pipelines. 🔧 AI Infrastructure (AI/ML workflow orchestration tool).
Next topic: vector-db (vector databases, RAG related):
69. meilisearch/meilisearch: Rust, AI-powered hybrid search engine. 🔍 RAG / Knowledge (search engine for RAG, vector search).
70. VectifyAI/PageIndex: Python, document index for vectorless reasoning-based RAG. 🔍 RAG / Knowledge (RAG engine, no vector DB).
71. qdrant/qdrant: Rust, high-performance vector database. 🔍 RAG / Knowledge (core vector DB).
72. topoteretes/cognee: Python, open-source AI memory platform, knowledge graph for agents. 🔍 RAG / Knowledge (agent memory, knowledge graph for RAG).
73. NirDiamant/RAG_Techniques: Jupyter Notebook, advanced RAG techniques tutorials. 🔍 RAG / Knowledge (RAG educational resource).
74. weaviate/weaviate: Go, open-source vector database, object + vector storage. 🔍 RAG / Knowledge (vector DB).
75. alibaba/zvec: C++, lightweight in-process vector database. 🔍 RAG / Knowledge (embedded vector DB).
76. neuml/txtai: Python, all-in-one AI framework for semantic search, LLM orchestration. 🔍 RAG / Knowledge (RAG and semantic search framework) or 🔧? It's for RAG, so 🔍.
77. StarTrail-org/LEANN: Python, RAG on everything, 97% storage savings, private RAG on personal devices. 🔍 RAG / Knowledge (efficient RAG framework).
78. langchain4j/langchain4j: Java, idiomatic Java library for LLM-powered apps, vector stores, agents, RAG. 🤖 AI Agents / Workflows? Or 🔍? It's a Java LLM app framework with RAG and agent support, so primary 🤖 AI Agents / Workflows, or 🔧? Wait no, it's for building LLM apps, agents, RAG, so 🤖.
79. lancedb/lancedb: HTML, embedded retrieval library for multimodal AI. 🔍 RAG / Knowledge (embedded vector DB/retrieval library).
80. oramasearch/orama: TypeScript, complete search engine and RAG pipeline in <2kb, for browser/edge. 🔍 RAG / Knowledge (lightweight RAG and search library).
Wait wait, also the topic search has topic:ai-agent, right? Let's check the ones we have: yes, the ones like career-ops, daily_stock_analysis, etc. are topic:ai-agent, which we already categorized.
Okay, now Step 2 is done, we have all projects categorized. Now Step 3: Output the report.
First, section 1: Today's Highlights. 3-5 sentences. Let's think about the most noteworthy things from today's data:
First, the trending list has a lot of agent-related tools: coding agents, agent UIs, agent skills, AI gateways, code review tools with LLM agents. Also, the topic search shows that RAG and agent memory are huge, plus vertical AI applications in finance, design, content creation are booming. Also, new infrastructure like AI gateways (OmniRoute) that aggregate 290

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*