# AI 开源趋势日报 2026-08-13

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-12 22:16 UTC

---

We need to produce a structured report following steps. First step: filter from given data. The initial data includes many Trending repos (17) many are not AI related; need to exclude non-AI projects. Then also process the AI theme search results (79 repos). Need to include AI-related projects.

We need to generate AI Open Source Trend Daily report with sections:

1. 今日速览 (3-5 sentences summarizing most noteworthy AI open source direction today)

2. 各维度热门项目 — each dimension list 3-8 representative projects, each with project name (link), stars (total + today new), one-sentence description.

Dimensions: AI 基础工具, AI 智能体/工作流, AI 应用, 大模型/训练, 知识库检索 (RAG/知识库). Provide projects accordingly.

3. 趋势信号分析 (200-300 Chinese characters) summarizing from today's hot list: which category getting attention, any new tech stacks or directions newly on list, relation to recent model releases or industry events.

4. 社区关注热点 — bullet list 3-5 specific projects/directions with short reasons.

Need to ensure each project includes GitHub link and stars numbers (total and today new if available). Must be Chinese, professional concise.

We must exclude non-AI projects. From Trending list, many are not AI: diagram-design, macro, agency-agents (maybe AI agent?), but we can include AI agent frameworks. Let's filter.

We need to produce a report. Probably we will list projects from both Trending (filtered) and topic search results that are AI related.

We need to be careful to include stars numbers from data: many Trending entries show stars 0 (+xxx today). That's today's new stars, not total. We can include both maybe using today new stars. Since total stars not provided for many, but some have numbers. For those with stars shown, like "⭐0 (+2951 today)" indicates 0 stars total? Actually maybe they have 0 stars but 2951 today? That seems odd. Probably they have 0 stars total but 2951 today? In any case we can present as "0 (+2951 today)" and note that today's new stars. For those with actual star counts like "⭐239,742", we can show total stars and today new maybe not given; we can just show that number.

We need to produce structured report.

Let's first filter AI related repos from Trending list (17). Identify which are AI/ML:

- [cathrynlavery/diagram-design] – HTML diagram types for Claude Code – AI related? It's about diagram design for AI code, but maybe not core AI. Could be considered AI tool? Might be borderline. The instruction: exclude general tools, front-end frameworks, games etc. Diagram design is specific for AI? Could be included in AI 基础工具? Maybe not.

- [macro-inc/macro] – unified workspace with AI memory – maybe AI related? It's a workspace with AI memory, but more of a productivity tool. Might be considered AI 智能体/工作流? Could be.

- [semantica-agi/semantica] – Graph-Native Infrastructure for Context and Accountable AI Systems – definitely AI.

- [stablyai/orca] – ADE for working with fleet of parallel agents – AI agent.

- [msitarzewski/agency-agents] – complete AI agency – definitely AI agent.

- [shiyu-coder/Kronos] – Foundation Model for Language of Financial Markets – AI model.

- [NanmiCoder/MediaCrawler] – various comment crawlers – not AI.

- [hugohe3/ppt-master] – AI turns docs into PowerPoint – AI application.

- [infiniflow/ragflow] – Retrieval-Augmented Generation (RAG) engine – AI.

- [paperclipai/paperclip] – open-source app to manage agents – AI agent management.

- [NVIDIA-NeMo/Switchyard] – Rust – maybe AI? Not sure.

- [ZuodaoTech/everyone-can-use-english] – TypeScript – not AI.

- [smicallef/spiderfoot] – OSINT tool – not AI.

- [localsend/localsend] – cross-platform alternative to AirDrop – not AI.

- [Lightricks/LTX-2] – inference and LoRA trainer for audio-video model – AI model/training.

- [embabel/embabel-agent] – Agent framework for JVM – AI agent.

- [cactus-compute/needle] – 14MB foundation model for tiny devices – AI model.

Thus many are AI related. We'll include those with AI focus.

But we also have a large set of AI theme search results (79). Many are AI related: AutoGPT, LangChain, Dify, OpenWebUI, etc. Need to include representative ones per dimension.

The report should include projects from both filtered Trending and topic search? It says "从以上数据中筛选出与 AI/ML 明确相关的项目（排除与 AI 无关的通用工具、前端框架、游戏等），对于 Trending 榜单中的非 AI 项目直接略去。" So we filter Trending list to only AI projects, then also incorporate from AI theme search results (which are already AI). Then we categorize.

Thus we need to output a report that includes selected projects across categories, likely selecting top ones.

We need to produce 3-8 projects per dimension. So we need to pick representative projects for each dimension.

Let's compile a list of AI related projects from both sources:

From Trending (filtered):

1. semantiка-agi/semantica – Python – Graph-Native Infrastructure for Context and Accountable AI Systems – stars 0 (+834 today) – likely no total stars.

2. stablyai/orca – TypeScript – Orca is the ADE for working with a fleet of parallel agents – stars 0 (+1215 today)

3. msitarzewski/agency-agents – Shell – AI agency – stars 0 (+1969 today)

4. shiyu-coder/Kronos – Python – Foundation Model for Language of Financial Markets – stars 0 (+277 today)

5. hugohe3/ppt-master – Python – AI turns documents into PowerPoint – stars 0 (+364 today)

6. infiniflow/ragflow – Go – RAGFlow engine – stars 0 (+182 today)

7. paperclipai/paperclip – TypeScript – open-source app to manage agents – stars 0 (+573 today)

8. NVIDIA-NeMo/Switchyard – Rust – maybe AI infra – stars 0 (+370 today) – not clear AI but likely.

9. LTX-2 – Lightricks/LTX-2 – Python – inference and LoRA trainer for LTX-2 audio–video model – stars 0 (+40 today)

10. embabel/embabel-agent – Kotlin – Agent framework for JVM – stars 0 (+29 today)

11. cactus-compute/needle – Python – 14MB foundation model for tiny devices – stars 0 (+346 today)

Potentially also macro-inc/macro – Rust – unified workspace with AI memory – maybe AI related but more productivity.

But we can include a few.

Now from AI theme search results (79). We need to pick representative projects per dimension.

List of notable AI projects from that list:

- affaan-m/ECC – JavaScript – agent harness performance optimization – stars 239,742 (+?) – topic:llm – could be AI 基础工具? Or AI 智能体/工作流? Probably AI 基础工具.

- NousResearch/hermes-agent – Python – The agent that grows with you – stars 229,543 – AI 智能体/工作流.

- Significant-Gravitas/AutoGPT – Python – AutoGPT – stars 186,562 – AI 智能体/工作流.

- ollama/ollama – Go – Get up and running with many models – stars 178,367 – AI 基础工具 (model serving).

- f/prompts.chat – HTML – Share prompts – stars 167,060 – AI 应用? Maybe not.

- firecrawl/firecrawl – TypeScript – context API to search web – stars 166,417 – AI 应用? Could be RAG/knowledge retrieval.

- huggingface/transformers – Python – stars 164,013 – AI 基础工具 (framework).

- langgenius/dify – TypeScript – Build Agentic workflows, RAG pipelines – stars 152,241 – AI 智能体/工作流.

- open-webui/open-webui – Python – User-friendly AI Interface – stars 148,611 – AI 应用? Could be UI tool.

- langchain-ai/langchain – Python – The agent engineering platform – stars 144,095 – AI 智能体/工作流.

- browser-use/browser-use – Python – Make websites accessible for AI agents – stars 108,958 – AI 智能体/工作流.

- Graphify-Labs/graphify – Python – Turn codebases into knowledge graph – stars 105,658 – AI 基础工具? Could be RAG/知识库.

- harry0703/MoneyPrinterTurbo – Python – Generate videos from topic – maybe AI application.

- rasbt/LLMs-from-scratch – Jupyter – Implement ChatGPT-like LLM – stars 102,527 – 大模型/训练.

- DietrichGebert/ponytail – JavaScript – Makes AI agent think like lazy senior dev – stars 101,494 – AI 智能体/工作流.

- shareAI-lab/learn-claude-code – Python – Bash nano claude code-like agent harness – stars 74,001 – AI 智能体/工作流.

- thedaviddias/Front-End-Checklist – MDX – essential checklist for web dev – not AI.

- Panniantong/Agent-Reach – Python – Give AI agent eyes to see internet – stars 71,124 – AI 智能体/工作流.

- santifer/career-ops – JavaScript – AI job search – stars 63,632 – AI 应用? maybe not.

- ZhuLinsen/daily_stock_analysis – Python – LLM-driven stock analysis – stars 62,567 – AI 应用? maybe.

- CherryHQ/cherry-studio – TypeScript – AI productivity studio – stars 50,350 – AI 应用.

- HKUDS/nanobot – Python – Ultra-lightweight personal AI agent framework – stars 46,900 – AI 智能体/工作流.

- zhayujie/CowAgent – Python – Open-source super AI assistant – stars 46,471 – AI 智能体/工作流.

- siyuan-note/siyuan – TypeScript – knowledge workspace where humans and AI agents collaborate – stars 45,772 – AI 智能体/工作流? Could be AI 应用.

- hugohe3/ppt-master – duplicate.

- CopilotKit/CopilotKit – TypeScript – Frontend stack for agents – stars 36,723 – AI 基础工具? maybe AI 智能体/工作流.

- bojieli/ai-agent-book – Python – book about AI agents – stars 36,591 – AI 智能体/工作流.

- esengine/DeepSeek-Reasonix – Go – DeepSeek-native AI coding agent – stars 34,188 – AI 智能体/工作流.

- agentscope-ai/QwenPaw – Python – Personal AI Assistant – stars 33,750 – AI 智能体/工作流.

- jingyaogong/minimind – Python – Train 64M-parameter LLM in 2h – stars 54,618 – 大模型/训练.

- 0xPlaygrounds/rig – Rust – Build modular LLM applications – stars 8,251 – 大模型/训练? maybe AI 基础工具.

- open-compass/opencompass – Python – LLM evaluation platform – stars 7,297 – 大模型/训练? evaluation.

- Eigenwise/atomic-agents – Python – Building AI agents atomically – stars 6,165 – AI 智能体/工作流.

- skyzh/tiny-llm – Python – learn LLM inference on Apple Silicon – stars 4,477 – 大模型/训练.

- samchon/AgentsMeetRL – HTML – Awesome list for Agentic RL – not needed.

- llm-jp/awesome-japanese-llm – TypeScript – overview of Japanese LLMs – stars 1,424 – 大模型/训练.

- chrisliu298/awesome-llm-unlearning – Python – resource for unlearning – stars 619 – 大模型/训练? maybe.

- apache/casbin-gateway – Go – AI security gateway – stars 563 – maybe AI 基础工具.

- SeekingDream/Static-to-Dynamic-LLMEval – GitHub – paper evaluation – not needed.

- Picovoice/picollm – Python – On-device LLM inference – stars 316 – 大模型/训练.

- AIDASLab/Awesome-Diffusion-LLM – TypeScript – list of diffusion LLM papers – stars 97 – maybe not.

- AarambhDevHub/aarambh-studio – Rust – Decoder-only LLM from scratch – stars 75 – 大模型/训练.

- paulusburgess1357/nvim-mcp – Python – MCP server for Neovim – stars 60 – AI 基础工具.

- Shubhamsaboo/awesome-llm-apps – Python – 100+ AI agents, agent skills and RAG apps – stars 132,321 – AI 应用? maybe.

- thedotmack/claude-mem – JavaScript – Persistent context across sessions – stars 90,547 – RAG/知识库.

- infiniflow/ragflow – duplicate.

- datawhalechina/hello-agents – Python – tutorial for building agents – stars 72,572 – AI 智能体/工作流.

- headroomlabs-ai/headroom – Python – compress tool outputs – stars 66,084 – AI 智能体/工作流? maybe RAG.

- Mintplex-Labs/anything-llm – JavaScript – local-first agent experience – stars 64,661 – AI 应用.

- mem0ai/mem0 – Python – Universal memory layer for AI Agents – stars 63,131 – RAG/知识库.

- FlowiseAI/Flowise – TypeScript – Build AI Agents visually – stars 55,357 – AI 智能体/工作流.

- run-llama/llama_index – Python – leading document agent and OCR platform – stars 51,599 – RAG/知识库.

- jeecgboot/JeecgBoot – Java – low-code platform – stars 47,379 – AI 应用? maybe.

- milvus-io/milvus – Go – vector database – stars 45,615 – 向量数据库 (RAG/知识库)

- meilisearch/meilisearch – Rust – search engine API – stars 58,950 – 向量数据库? maybe hybrid search.

- VectifyAI/PageIndex – Python – Document index for vectorless RAG – stars 35,156 – RAG/知识库.

- qdrant/qdrant – Rust – vector database – stars 33,939 – 向量数据库.

- topoteretes/cognee – Python – AI memory platform – stars 29,977 – RAG/知识库.

- NirDiamant/RAG_Techniques – Jupyter – advanced RAG techniques – stars 29,040 – RAG/知识库.

- weaviate/weaviate – Go – vector database – stars 16,724 – 向量数据库.

- alibaba/zvec – C++ – lightweight vector DB – stars 15,432 – 向量数据库.

- neuroml/txtai – Python – semantic search, LLM orchestration – stars 12,882 – RAG/知识库.

- langchain4j/langchain4j – Java – Java library for LLM apps – stars 12,852 – RAG/知识库.

- lancedb/lancedb – Rust – retrieval library – stars 11,138 – 向量数据库.

- oceanbase/oceanbase – C++ – distributed DB for AI workloads – stars 10,235 – maybe not.

- databendlabs/databend – Rust – warehouse for AI – stars 9,412 – maybe.

- tensor? Not needed.

Thus we need to pick representative projects per dimension.

Dimensions:

- 🔧 AI 基础工具 (框架、SDK、推理引擎、开发工具、CLI)

- 🤖 AI 智能体/工作流 (Agent 框架、自动化、多智能体)

- 📦 AI 应用 (具体应用产品、垂直场景解决方案)

- 🧠 大模型/训练 (模型权重、训练框架、微调工具)

- 🔍 RAG/知识库 (向量数据库、检索增强、知识管理)

Now we need to list 3-8 projects per dimension.

We should choose high-star projects that are prominent today.

Let's pick for each dimension:

AI 基础工具: huggingface/transformers, ollama/ollama, rig (0xPlaygrounds/rig) maybe, alpha? Also maybe embabel/embabel-agent? But that's more agent. Could include langchain-ai/langchain? That's more workflow. For base tools, we could include huggingface/transformers, ollama/ollama, rig, maybe llama.cpp? Not present. Could include vLLM? Not in list. Could include Nano-... but we have cactus-compute/needle (foundation model for tiny devices) – that's model, not tool. Maybe we can include "rig" as tool for building LLM apps. Also "switchyard" maybe.

Thus AI 基础工具 list: huggingface/transformers (Python, stars 164,013), ollama/ollama (Go, stars 178,367), 0xPlaygrounds/rig (Rust, stars 8,251) maybe also "langchain-ai/langchain" is more workflow but could be considered tool. But we need to keep within dimension.

AI 智能体/工作流: AutoGPT (Significant-Gravitas/AutoGPT), langgenius/dify, open-webui/open-webui, mem0ai/mem0, FlowiseAI/Flowise, CherryHQ/cherry-studio, HKUDS/nanobot, zhayujie/CowAgent, etc. Also "paperclipai/paperclip" (AI agent management). Also "infiniflow/ragflow"? That's more RAG. But we can include "hermes-agent". Also "macino"? Not.

AI 应用: hugohe3/ppt-master (AI PPT generator), CherryHQ/cherry-studio (AI productivity studio), maybe "MemoryPrinterTurbo" (MoneyPrinterTurbo) for video generation, "anything-llm" maybe, "JeecgBoot" low-code platform, "daily_stock_analysis"? but maybe not.

AI 大模型/训练: rasbt/LLMs-from-scratch, minimind (jingyaogong/minimind), tiny-llm, opencompass, maybe "aambo"? Also "aarambh-studio"? Not.

AI RAG/知识库: ragflow, vscode? Actually "infiniflow/ragflow" is RAG engine, "milvus-io/milvus", "qdrant/qdrant", "weaviate/weaviate", "vectifyai/pageindex", "cognee", "mem0ai/mem0", "langchain-ai/langchain"? That's more framework. Also "thedotmack/claude-mem" for persistent context.

Thus we can pick representative high-star projects for each dimension.

Now need to produce report sections.

First, 今日速览: 3-5 sentences summarizing today's AI open source hotspots.

Second, 各维度热门项目: list 3-8 per dimension with link, stars (total + today new). Provide one sentence description.

Third, 趋势信号分析: 200-300 Chinese characters.

Fourth, 社区关注热点: bullet list 3-5 items with short reason.

We must ensure each project includes GitHub link.

We need to decide which projects to include. Let's select about 5 per dimension to stay within 3-8.

Dimension AI 基础工具: we can list 5:

- huggingface/transformers (Python, ⭐164,013) – state-of-the-art model library for text, vision, audio, multimodal.

- ollama/ollama (Go, ⭐178,367) – easy local server for running many LLMs including Kimi, DeepSeek, etc.

- 0xPlaygrounds/rig (Rust, ⭐8,251) – modular framework for building LLM applications in Rust.

- embabel/embabel-agent (Kotlin, ⭐29 today) – JVM agent framework, pronounced Em-BAY-bel.

- cactus-compute/needle (Python, ⭐0 (+346 today)) – 14MB foundation model for tiny devices.

But we need stars total for some; for needle it's 0 total but today 346. Might be okay.

But maybe better to choose "langchain-ai/langchain" as tool? But it's more workflow. Let's keep.

Dimension AI 智能体/工作流: 5 projects:

- Significant-Gravitas/AutoGPT (Python, ⭐186,562) – vision of accessible AI agents that can plan and execute tasks.

- langgenius/dify (TypeScript, ⭐152,241) – platform to build agentic workflows and RAG pipelines.

- open-webui/open-webui (Python, ⭐148,611) – user-friendly UI for interacting with LLMs and agents.

- paperclipai/paperclip (TypeScript, ⭐0 (+573 today)) – open-source app for managing agents at work.

- mem0ai/mem0 (Python, ⭐63,131) – universal memory layer enabling persistent agent memory.

Also maybe "HKUDS/nanobot" but we can stick with these.

Dimension AI 应用: 5 projects:

- hugohe3/ppt-master (Python, ⭐0 (+364 today)) – AI converts docs/topics into native PowerPoint decks.

- CherryHQ/cherry-studio (TypeScript, ⭐50,350) – AI productivity studio with smart chat and autonomous agents.

- Mintplex-Labs/anything-llm (JavaScript, ⭐64,661) – local-first agent experience, own your intelligence.

- harry0703/MoneyPrinterTurbo (Python, ⭐102,804) – generate HD short videos from topics using AI.

- zhayujie/CowAgent (Python, ⭐46,471) – super AI assistant & agent harness with multi-model support.

Dimension AI 大模型/训练: 5 projects:

- rasbt/LLMs-from-scratch (Jupyter, ⭐102,527) – implement ChatGPT-like LLM from scratch in PyTorch.

- jingyaogong/minimind (Python, ⭐54,618) – train a 64M-parameter LLM in just 2 hours.

- open-compass/opencompass (Python, ⭐7,297) – LLM evaluation platform with >100 datasets.

- 0xPlaygrounds/rig (already used but maybe also for training? Not needed) maybe "aarambh-studio" (Rust, ⭐75) – decoder-only LLM from scratch in Rust.

- skyzh/tiny-llm (Python, ⭐4,477) – learn LLM inference on Apple Silicon.

But we need only 3-8; we can list 4.

Dimension AI RAG/知识库: 5 projects:

- infiniflow/ragflow (Go, ⭐0 (+182 today)) – leading open-source RAG engine with agent capabilities.

- milvus-io/milvus (Go, ⭐45,615) – high-performance vector database for scalable ANN search.

- qdrant/qdrant (Rust, ⭐33,939) – massive-scale vector search engine for next-gen AI.

- vectifyai/pageindex (Python, ⭐35,156) – document index for vectorless reasoning-based RAG.

- mem0ai/mem0 (already used but also RAG) maybe "thedotmack/claude-mem" (JavaScript, ⭐90,547) – persistent context across sessions for agents.

But we need to avoid duplication; we can include "thedotmack/claude-mem" as RAG context management.

Now produce report.

We need to include stars numbers: total and today new if available. For many we have only total. For those with today new, we can show both.

Let's compile stars:

- huggingface/transformers: ⭐164,013 (no today new mentioned). So we can present as "⭐164,013 (无 today)".

- ollama/ollama: ⭐178,367 (no today new). Could show "⭐178,367 (无 today)".

- 0xPlaygrounds/rig: ⭐8,251 (no today new). Could show "⭐8,251 (无 today)".

- embabel/embabel-agent: ⭐0 (+29 today) – but maybe total is 0? We'll show "⭐0 (+29 today)".

- cactus-compute/needle:

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*