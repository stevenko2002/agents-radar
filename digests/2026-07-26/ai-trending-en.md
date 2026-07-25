# AI Open Source Trends 2026-07-26

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-07-25 22:16 UTC

---

Got it, let's tackle this step by step. First, I need to go through all the given repos, filter out non-AI ones, categorize them correctly, then build the report as per the requirements.

First, Step 1: Filter out non-AI related projects. Let's go through the trending list first:
- block/buzz: Hive mind communication platform? Wait, no, wait, wait, let's check each trending repo first:
  - alibaba/open-code-review: Has LLM Agent, code review, AI related. Keep.
  - citrolabs/ego-lite: Browser for AI agents, web automation for agents. Keep.
  - ComposioHQ/awesome-claude-skills: Claude skills, AI related. Keep.
  - anthropics/claude-cookbooks: Claude use cases, AI. Keep.
  - Automattic/harper: Grammar checker, offline, wait is that AI? Wait no, wait the description says offline privacy-first grammar checker, Rust powered. Wait, but no mention of AI? Wait wait no, wait let's check the topic search first, no, wait first filter: exclude unrelated. Wait Pumpkin-MC/Pumpkin is Minecraft server, that's a game, exclude. permissionlesstech/bitchat is bluetooth chat, no AI, exclude. obra/superpowers: agentic skills framework, wait description says agentic skills framework & software dev methodology, wait is that AI? Wait no, wait let's check: no, wait maybe? Wait no, let's see: mattpocock/skills is "Skills for Real Engineers. Straight from my .agents directory." Oh right, that's for AI agents, so keep. palmier-io/palmier-pro: macOS video editor built for AI, keep. CoreBunch/Instatic: Agentic self-hosted visual CMS, has agentic, so AI related, keep. Lordog/dive-into-llms: Dive into LLMs tutorial, definitely AI, keep. RyanCodrai/turbovec: Vector index for AI? Wait description says vector index built on TurboQuant, yes, RAG related, keep. OtterMind/Chat2DB: AI-driven database tool, keep. andrewyng/aisuite: Unified interface for GenAI providers, keep. affaan-m/ECC: Agent harness for Claude Code etc, AI agent related, keep.
  Now the non-AI trending repos to exclude: block/buzz (hive mind comms, no AI mention), Automattic/harper (offline grammar checker, no AI, just rule-based?), wait wait wait, let's confirm: harper's description is "Offline, privacy-first grammar checker. Fast, open-source, Rust-powered" – no AI, so exclude. Pumpkin-MC/Pumpkin: Minecraft server, exclude. permissionlesstech/bitchat: bluetooth mesh chat, no AI, exclude. Okay, so filtered trending AI repos are: alibaba/open-code-review, citrolabs/ego-lite, ComposioHQ/awesome-claude-skills, anthropics/claude-cookbooks, mattpocock/skills, palmier-io/palmier-pro, CoreBunch/Instatic, Lordog/dive-into-llms, RyanCodrai/turbovec, OtterMind/Chat2DB, andrewyng/aisuite, affaan-m/ECC. Wait also shiyu-coder/Kronos: Foundation Model for Financial Markets, that's LLM, right? Oh right! I missed that. Kronos is a foundation model for financial markets, so AI, keep. Oh right, that's in the trending list. Okay, add that.

Now the topic search repos: all of these are tagged with AI related topics (rag, ai-agent, llm, ml, vector-db, llm-model) so all are AI relevant, no need to exclude any there, right? Wait let's check: yes, all the topic search ones are explicitly tagged with AI/ML topics, so they are all relevant.

Now Step 2: Categorize into the 4 categories: AI Infrastructure, AI Agents/Workflows, AI Applications, LLMs/Training, RAG/Knowledge.

Let's list each repo and assign primary category:

First, Trending Filtered Repos:
1. alibaba/open-code-review: It's a code review tool with LLM Agent, deterministic pipelines. Wait, is it infrastructure or application? Wait, it's a dev tool for code review, uses LLM. Wait, let's see: it's a tool that integrates LLM into code review, so maybe AI Infrastructure? No, wait, or AI Application? Wait no, let's think: AI Infrastructure is frameworks, SDKs, inference engines, dev tools, CLI. Oh right, it's a code review dev tool with LLM integration, so maybe AI Infrastructure? Wait no, wait let's check the categories again:
- 🔧 AI Infrastructure: frameworks, SDKs, inference engines, dev tools, CLI
- 🤖 AI Agents / Workflows: agent frameworks, automation, multi-agent systems
- 📦 AI Applications: specific apps, vertical solutions
- 🧠 LLMs / Training: model weights, training frameworks, fine-tuning tools
- 🔍 RAG / Knowledge: vector databases, retrieval-augmented generation, knowledge management

Okay, let's categorize each:

First, Trending Repos (filtered):
- alibaba/open-code-review: Dev tool for code review with LLM Agent, built-in rules. It's a dev tool that integrates AI, so primary category: 🔧 AI Infrastructure? Wait no, wait it's an application for code review, but uses AI. Wait no, let's see: if it's a tool that developers use to integrate AI into their workflow, maybe infrastructure? Wait no, let's look at the topic search ones to get consistency.
- citrolabs/ego-lite: Browser for AI agents to run web automation, so it's a tool for agents, so 🤖 AI Agents / Workflows? Or infrastructure? Wait it's a tool that enables agent web automation, so maybe AI Infrastructure? Wait no, let's see: agent frameworks and tools go to Agents. Wait no, let's check: ego-lite is a browser built for AI agents to do web automation, share logged in state. So it's an infrastructure component for agents? Or agent tool? Let's assign 🤖 AI Agents / Workflows for now, or wait, no, let's see:
Wait let's go one by one:

Filtered Trending Repos:
1. alibaba/open-code-review [Go]: Code review tool with LLM Agent, deterministic pipelines, built-in rules, supports OpenAI/Anthropic. Primary category: 🔧 AI Infrastructure (it's a dev tool that integrates LLM capabilities into software development workflows, fits the dev tools part of infrastructure)
2. citrolabs/ego-lite [JavaScript]: Browser for AI agents, web automation, shares logged-in browser state with agents (Codex, Claude Code) no config. Primary: 🤖 AI Agents / Workflows (it's a tool specifically built to enable agent web automation, core to agent operation)
3. ComposioHQ/awesome-claude-skills [Python]: Curated list of Claude Skills, resources for customizing Claude workflows. Primary: 🤖 AI Agents / Workflows (it's resources for building agent skills, which is core to agent development)
4. anthropics/claude-cookbooks [Jupyter Notebook]: Collection of notebooks for using Claude effectively. Primary: 🔧 AI Infrastructure (it's official resources for using a core LLM platform, part of the LLM ecosystem tooling)
5. mattpocock/skills [Shell]: Skills for real engineers, for .agents directory, works with Claude Code etc. Primary: 🤖 AI Agents / Workflows (directly provides agent skills for coding agents)
6. palmier-io/palmier-pro [Swift]: macOS video editor built for AI. Primary: 📦 AI Applications (vertical application for video editing with AI capabilities)
7. CoreBunch/Instatic [TypeScript]: Agentic self-hosted visual CMS, outputs static pages, agentic. Primary: 📦 AI Applications (it's a content management application with built-in agentic capabilities)
8. Lordog/dive-into-llms [Jupyter Notebook]: Chinese tutorial series for building LLMs from scratch. Primary: 🧠 LLMs / Training (educational resource for LLM training and development)
9. RyanCodrai/turbovec [Python/Rust]: Vector index built on TurboQuant, for RAG use cases. Primary: 🔍 RAG / Knowledge (it's a vector index tool for RAG pipelines)
10. OtterMind/Chat2DB [Java]: AI-driven database tool and SQL client, supports multiple databases, AI features. Primary: 📦 AI Applications (vertical application for database management with AI integration)
11. andrewyng/aisuite [Python]: Unified interface to multiple GenAI providers. Primary: 🔧 AI Infrastructure (unified SDK for GenAI providers, fits SDK category)
12. affaan-m/ECC [JavaScript]: Agent harness performance optimization system for coding agents (Claude Code, Codex etc), with skills, memory, security. Primary: 🤖 AI Agents / Workflows (core tool for optimizing and managing coding agent performance)
13. shiyu-coder/Kronos [Python]: Foundation model for financial market language. Primary: 🧠 LLMs / Training (it's a domain-specific foundation model, so LLM category)

Now the Topic Search Repos, let's categorize each:

First, topic:rag (all these are RAG related, but let's assign primary category correctly, most are RAG/Knowledge, but some might be agents or infra):
1. langgenius/dify [TypeScript, 150236 total stars]: Agentic workflows, RAG pipelines, collaborative workspace. Primary: 🤖 AI Agents / Workflows (it's a platform for building agentic workflows and RAG, core use case is agentic automation)
Wait wait, dify is for building agentic workflows, RAG pipelines, so primary could be Agents/Workflows, or RAG? Wait no, let's see: its core is agentic workflows, so Agents. Wait but it does RAG. Wait let's check: the category says a project can be in multiple, pick primary. So dify: primary 🤖 AI Agents / Workflows, secondary 🔍 RAG / Knowledge.
2. open-webui/open-webui [Python, 146716]: User-friendly AI interface for Ollama, OpenAI etc. Primary: 🔧 AI Infrastructure (it's a UI layer for LLM inference, part of the LLM serving infrastructure)
3. langchain-ai/langchain [Python, 142584]: Agent engineering platform. Primary: 🤖 AI Agents / Workflows (core framework for building agents and LLM applications)
4. Shubhamsaboo/awesome-llm-apps [Python, 127641]: Curated list of 100+ AI agents, skills, RAG apps. Primary: 🤖 AI Agents / Workflows (resource for agent and RAG app development)
5. Graphify-Labs/graphify [Python, 95795]: Turns codebases into queryable knowledge graphs for agents, no vector store. Primary: 🔍 RAG / Knowledge (it's a knowledge graph RAG tool, core is RAG/knowledge management)
6. thedotmack/claude-mem [JavaScript, 88553]: Persistent context for AI agents across sessions, works with multiple coding agents. Primary: 🤖 AI Agents / Workflows (core agent memory tool, part of agent infrastructure)
7. PaddlePaddle/PaddleOCR [Python, 86246]: OCR toolkit to turn PDFs/images into structured data for LLMs. Primary: 📦 AI Applications? Wait no, it's a tool for processing inputs for AI, wait no: it's a toolkit for OCR, which is used in AI pipelines. Wait primary: 🔧 AI Infrastructure? Or RAG? Wait PaddleOCR is used to extract data from documents for RAG, so primary 🔍 RAG / Knowledge? Or wait, it's a foundational ML tool for OCR, which is a computer vision task. Wait no, let's see: its use case is bridging PDFs/images and LLMs, so primary 🔍 RAG / Knowledge, secondary 🧠 LLMs / Training? No, wait no, let's think: it's an application of ML (OCR) for AI pipelines. Wait maybe 📦 AI Applications? No, wait no, let's check the categories again. Wait OCR is a foundational ML model/toolkit, so maybe 🧠 LLMs / Training? No, no, it's a pre-trained model toolkit for OCR. Wait maybe 🔧 AI Infrastructure? Because it's a toolkit that's used as a component in AI applications. Wait let's assign primary: 🔍 RAG / Knowledge, because its main use case in the context of these repos is for RAG pipelines (processing documents for LLMs).
8. infiniflow/ragflow [Go, 85988]: RAG engine with Agent capabilities. Primary: 🔍 RAG / Knowledge (core RAG engine, that's its primary function)
9. Mintplex-Labs/anything-llm [JavaScript, 63837]: Local-first agent experience platform. Primary: 🤖 AI Agents / Workflows (core use case is running local AI agents)
10. headroomlabs-ai/headroom [Python, 62398]: Compresses tool outputs, RAG chunks for LLMs to reduce tokens. Primary: 🔍 RAG / Knowledge (it's a RAG optimization tool, reduces token usage for RAG and agent outputs)
11. mem0ai/mem0 [TypeScript, 61676]: Universal memory layer for AI agents. Primary: 🤖 AI Agents / Workflows (core agent memory component)
12. FlowiseAI/Flowise [TypeScript, 54923]: Visual builder for AI agents. Primary: 🤖 AI Agents / Workflows (visual agent development platform)
13. run-llama/llama_index [Python, 51091]: Document agent and OCR platform. Primary: 🔍 RAG / Knowledge (core RAG and document agent framework)
14. milvus-io/milvus [Go, 45381]: High-performance vector database. Primary: 🔍 RAG / Knowledge (core vector DB for RAG pipelines)
15. langchain-ai/langgraph [Python, 38129]: Framework for building resilient agents. Primary: 🤖 AI Agents / Workflows (agent workflow framework)
16. NousResearch/hermes-agent [Python, 220419]: Agent that grows with you, coding agent? Wait description says "The agent that grows with you" – primary 🤖 AI Agents / Workflows
17. santifer/career-ops [JavaScript, 61533]: AI job search agent, runs in coding CLI. Primary: 📦 AI Applications (vertical application for job search, AI-powered)
18. Panniantong/Agent-Reach [Python, 60822]: AI agent that can read/search social media, GitHub etc, CLI tool. Primary: 🤖 AI Agents / Workflows (agent tool for information retrieval)
19. ZhuLinsen/daily_stock_analysis [Python, 58793]: LLM-powered stock analysis system. Primary: 📦 AI Applications (vertical fintech application)
20. CherryHQ/cherry-studio [TypeScript, 48983]: AI productivity studio with chat, autonomous agents, 300+ assistants. Primary: 📦 AI Applications (productivity application with AI agents)
21. HKUDS/nanobot [Python, 46230]: Lightweight open-source AI agent for tools, chats, workflows. Primary: 🤖 AI Agents / Workflows (lightweight agent framework)
22. zhayujie/CowAgent [Python, 46121]: Open-source super AI assistant & agent harness, self-evolves with memory. Primary: 🤖 AI Agents / Workflows (agent harness framework)
23. siyuan-note/siyuan [TypeScript, 45414]: Privacy-first self-hosted personal knowledge management, AI integrated? Wait description says personal knowledge management, but is it AI? Wait the topic tag is ai-agent, so yes, it has AI agent capabilities. Primary: 📦 AI Applications? Or 🔍 RAG / Knowledge? Wait it's a knowledge management app with AI, so primary 📦 AI Applications, secondary 🔍 RAG / Knowledge.
24. hugohe3/ppt-master [Python, 41075]: AI tool to turn documents/topics into PowerPoint decks. Primary: 📦 AI Applications (vertical office productivity application)
25. CopilotKit/CopilotKit [TypeScript, 36276]: Frontend stack for agents & generative UI. Primary: 🔧 AI Infrastructure (frontend SDK for building AI agent interfaces, fits SDK category)
26. iOfficeAI/AionUi [TypeScript, 30854]: 24/7 cowork app for multiple AI coding CLI agents. Primary: 🤖 AI Agents / Workflows (agent orchestration platform for coding agents)
27. Gitlawb/openclaude [TypeScript, 30344]: Runs anywhere, uses anything, AI agent related? Topic tag ai-agent, so primary 🤖 AI Agents / Workflows (portable agent runtime)
28. googleworkspace/cli [Rust, 30003]: Google Workspace CLI with AI agent skills. Primary: 🔧 AI Infrastructure (CLI tool with AI agent integrations, dev tool)
29. esengine/DeepSeek-Reasonix [Go, 27775]: DeepSeek-native AI coding agent for terminal. Primary: 🤖 AI Agents / Workflows (coding agent framework)
30. HKUDS/Vibe-Trading [Python, 27547]: Personal trading agent. Primary: 📦 AI Applications (vertical fintech application)
31. affaan-m/ECC [JavaScript, 233270]: Wait we already have this in trending, right? Yes, topic tag llm, so primary 🤖 AI Agents / Workflows (same as before, agent harness)
32. Significant-Gravitas/AutoGPT [Python, 185684]: Open-source AI agent platform. Primary: 🤖 AI Agents / Workflows (pioneer agent framework)
33. ollama/ollama [Go, 176877]: Tool to run LLMs locally (Kimi, DeepSeek, Qwen etc). Primary: 🔧 AI Infrastructure (LLM inference engine, fits inference engine category)
34. f/prompts.chat [HTML, 166358]: Curated ChatGPT prompts, self-hostable. Primary: 🔧 AI Infrastructure? Wait no, it's a prompt resource, but topic tag llm. Wait primary: 🧠 LLMs / Training? No, wait it's a prompt library, but maybe 📦 AI Applications? No, wait let's see: it's a resource for using LLMs, so maybe 🔧 AI Infrastructure (tooling for LLM usage)
35. huggingface/transformers [Python, 162974]: Framework for state-of-the-art ML models (text, vision, audio, multimodal). Primary: 🧠 LLMs / Training (core model framework for training and inference of LLMs and other ML models)
Wait wait, transformers is for both training and inference, but it's a foundational model framework, so primary 🧠 LLMs / Training.
36. firecrawl/firecrawl [TypeScript, 155965]: API to search, scrape, interact with web at scale for AI agents. Primary: 🔧 AI Infrastructure (web data tooling for AI agents and RAG pipelines)
37. browser-use/browser-use [Python, 106760]: Make websites accessible for AI agents, automate online tasks. Primary: 🤖 AI Agents / Workflows (agent web automation tool)
38. harry0703/MoneyPrinterTurbo [Python, 99276]: AI workflow to generate HD short videos from keywords. Primary: 📦 AI Applications (vertical content creation application)
39. vllm-project/vllm [Python, 87146]: High-throughput memory-efficient LLM inference and serving engine. Primary: 🔧 AI Infrastructure (core LLM inference engine)
40. OpenHands/OpenHands [Python, 82071]: AI-driven development platform (coding agent). Primary: 🤖 AI Agents / Workflows (AI coding agent platform)
41. tensorflow/tensorflow [C++, 196532]: Open source ML framework. Primary: 🧠 LLMs / Training (foundational ML framework for training and inference)
42. pytorch/pytorch [Python, 101952]: Dynamic neural network framework with GPU acceleration. Primary: 🧠 LLMs / Training (foundational ML framework, core for LLM development)
43. microsoft/ML-For-Beginners [Jupyter Notebook, 88580]: Beginner ML course. Primary: 🧠 LLMs / Training (educational resource for ML/LLM development)
44. netdata/netdata [Go, 79844]: AI-powered full stack observability tool. Primary: 📦 AI Applications (vertical monitoring application with AI)
45. tesseract-ocr/tesseract [C++, 75551]: Open source OCR engine. Primary: 🔍 RAG / Knowledge (OCR tool for processing documents for RAG/LLM pipelines)
46. OpenBB-finance/OpenBB [Python, 71005]: Open data platform for analysts, quants, AI agents. Primary: 📦 AI Applications (vertical fintech data platform for AI)
47. scikit-learn/scikit-learn [Python, 66784]: ML library for Python. Primary: 🧠 LLMs / Training (foundational ML framework)
48. keras-team/keras [Python, 64180]: Deep learning framework. Primary: 🧠 LLMs / Training (deep learning framework for LLM development)
49. ultralytics/ultralytics [Python, 59871]: YOLO object detection, segmentation, pose estimation etc. Primary: 🧠 LLMs / Training (computer vision model framework, part of multimodal LLM tooling)
50. microsoft/AI-For-Beginners [Jupyter Notebook, 52868]: Beginner AI course. Primary: 🧠 LLMs / Training (educational resource for AI/LLM development)
51. JuliaLang/julia [Julia, 48933]: Julia programming language, used for ML/scientific computing. Primary: 🧠 LLMs / Training (programming language for ML/LLM development)
52. roboflow/supervision [Python, 48371]: Reusable computer vision tools. Primary: 🧠 LLMs / Training (computer vision toolkit for multimodal LLM development)
53. microsoft/qlib [Python, 46645]: AI-oriented quant investment platform, supports ML, RL. Primary: 📦 AI Applications (vertical fintech AI platform)
54. meilisearch/meilisearch [Rust, 58729]: Lightning-fast search engine with AI-powered hybrid search. Primary: 🔍 RAG / Knowledge (search engine with RAG capabilities)
55. VectifyAI/PageIndex [Python, 34552]: Document index for vectorless, reasoning-based RAG. Primary: 🔍 RAG / Knowledge (RAG knowledge retrieval tool)
56. qdrant/qdrant [Rust, 33584]: High-performance vector database. Primary: 🔍 RAG / Knowledge (core vector DB for RAG)
57. topoteretes/cognee [Python, 29316]: Open-source AI memory platform for agents, knowledge graph engine. Primary: 🔍 RAG / Knowledge (agent memory and knowledge graph tool for RAG)
58. NirDiamant/RAG_Techniques [Jupyter Notebook, 28817]: Tutorials for advanced RAG techniques. Primary: 🔍 RAG / Knowledge (educational resource for RAG development)
59. weaviate/weaviate [Go, 16648]: Open-source vector database with structured filtering. Primary: 🔍 RAG / Knowledge (vector DB for RAG)
60. alibaba/zvec [C++, 15268]: Lightweight in-process vector database. Primary: 🔍 RAG / Knowledge (lightweight vector DB for RAG)
61. neuml/txtai [Python, 12751]: All-in-one AI framework for semantic search, LLM orchestration. Primary: 🔍 RAG / Knowledge (all-in-one RAG and LLM orchestration framework)
62. StarTrail-org/LEANN [Python, 12728]: RAG application framework with 97% storage savings, runs on personal devices. Primary: 🔍 RAG / Knowledge (lightweight RAG framework for edge/personal use)
63. langchain4j/langchain4j [Java, 12690]: Java library for building LLM-powered applications, supports RAG, agents. Primary: 🤖 AI Agents / Workflows (Java agent/RAG framework)
64. lancedb/lancedb [HTML, 10989]: Embedded retrieval library for multimodal AI. Primary: 🔍 RAG / Knowledge (embedded vector DB for multimodal RAG)
65. oramasearch/orama [TypeScript, 10502]: Complete search engine and RAG pipeline in browser/server/edge. Primary: 🔍 RAG / Knowledge (lightweight edge RAG tool)
66. jingyaogong/minimind [Python, 53841]: Train 64M parameter LLM from scratch in 2 hours. Primary: 🧠 LLMs / Training (LLM training tutorial/toolkit)
67. ScrapeGraphAI/Scrapegraph-ai [Python, 28630]: AI-powered Python scraper. Primary: 📦 AI Applications? Or 🔧 AI Infrastructure? Wait it's a tool for scraping data for AI pipelines, so primary 🔧 AI Infrastructure (data ingestion tool for AI)
68. 0xPlaygrounds/rig [Rust, 8049]: Build modular scalable LLM applications in Rust. Primary: 🔧 AI Infrastructure (LLM application framework in Rust)
69. open-compass/opencompass [Python, 7236]: LLM evaluation platform, supports 100+ datasets and models. Primary: 🔧 AI Infrastructure (LLM evaluation dev tool)
70. Eigenwise/atomic-agents [Python, 6086]: Build AI agents atomically. Primary: 🤖 AI Agents / Workflows (modular agent framework)
71. skyzh/tiny-llm [Python, 4407]: Course to build tiny LLM inference serving on Apple Silicon. Primary: 🧠 LLMs / Training (LLM inference serving tutorial)
72. genieincodebottle/generative-ai [Jupyter Notebook, 2568]: Generative AI roadmap, projects, interview prep. Primary: 🧠 LLMs / Training (educational resource for GenAI)
73. samchon/nestia [TypeScript, 2172]: NestJS helper + AI chatbot development. Primary: 🤖 AI Agents / Workflows (framework for building AI chatbots/agents in NestJS)
74. thinkwee/AgentsMeetRL [HTML, 1723]: Awesome list for agentic RL. Primary: 🤖 AI Agents / Workflows (resource for agent reinforcement learning)
75. llm-jp/awesome-japanese-llm [TypeScript, 1421]: Overview of Japanese LLMs. Primary: 🧠 LLMs / Training (resource for LLM development, regional LLMs)
76. thinkwee/AwesomeOPD [HTML, 763]: Awesome list for on-policy distillation. Primary: 🧠 LLMs / Training (resource for LLM distillation training)
77. chrisliu298/awesome-llm-unlearning [HTML, 617]: Resource for LLM unlearning. Primary: 🧠 LLMs / Training (resource for LLM training/alignment)
78. RiccardoBiosas/awesome-MLSecOps [Astro, 441]: Curated list for MLSecOps, AI security. Primary: 🔧 AI Infrastructure (AI security and MLOps tooling resource)
79. Picovoice/picollm [Python, 315]: On-device LLM inference with X-Bit quantization. Primary: 🔧 AI Infrastructure (on-device LLM inference tool)
80. Event-AHU/Medical_Image_Analysis [Python, 237]: Foundation models for medical image analysis. Primary: 🧠 LLMs / Training (domain-specific multimodal LLM training resource)

Okay, now that we have all categorized, let's move to Step 3: Output the report.

First, 1. Today's Highlights: 3-5 sentences on the most noteworthy developments. Let's see: today's trending has a lot of focus on AI coding agents, right? Like the ECC agent harness, open-code-review with LLM agents, ego-lite for agent web automation. Also, there's a surge in R

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*