# AI Open Source Trends 2026-07-29

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-07-28 22:16 UTC

---

Got it, let's tackle this step by step. First, I need to do Step 1: Filter out non-AI projects from both the trending list and the topic search results.
First, let's go through the 12 trending repos first:
1. pascalorg/editor: 3D architectural, no, not AI. Exclude.
2. jenkinsci/jenkins: CI/CD, general, no AI mention. Exclude.
3. moeru-ai/airi: Waifu companion, voice chat, Minecraft playing, has AI features (Neuro-sama reference, realtime voice, autonomous play). Keep, AI related.
4. andrewyng/aisuite: Unified interface for GenAI providers, definitely AI. Keep.
5. affaan-m/ECC: Agent harness for Claude Code etc., performance optimization for AI agents. Keep, AI.
6. huggingface/speech-to-speech: Local voice agents, open source models. Keep, AI.
7. virgiliojr94/book-to-skill: Turns PDFs into Claude Code skills, uses AI. Keep.
8. opengeos/GeoLibre: GIS platform, wait, does it have AI features? Wait the description says geospatial data analysis, but wait no, wait let's check. Wait no, wait the description is "lightweight, cloud-native GIS platform for visualizing, exploring, and analyzing geospatial data" — wait but is it AI related? Wait wait no, wait wait let's see. Wait no, wait maybe? Wait no, wait the topic search has AI topics, but the trending list's GeoLibre: wait wait no, wait let's check again. Wait no, maybe I misread. Wait no, let's hold that thought, go to others.
9. paperswithbacktest/awesome-systematic-trading: Curated list for systematic trading, wait but is it AI? The description says systematic trading, but no mention of AI/ML. Wait wait, but the topic search is AI related, but the trending repo itself is just a curated list of trading stuff, not necessarily AI. Wait wait, let's confirm: the description says "curated list of awesome libraries, packages, strategies, books, blogs, tutorials for systematic trading" — no AI mention, so exclude? Wait but wait, maybe? No, better to exclude unless it explicitly is AI related.
10. microsoft/agent-governance-toolkit: AI Agent Governance, specifically for autonomous AI agents, OWASP Agentic Top 10. Definitely AI, keep.
11. yorukot/superfile: Terminal file manager, general tool, no AI. Exclude.
12. bradautomates/claude-video: Gives Claude ability to watch videos, downloads, extracts frames, transcribes, sends to Claude. Definitely AI, keep.
Now the topic search results, all are tagged with AI topics (rag, ai-agent, llm, ml, vector-db, llm-model) so all are relevant, right? Wait let's confirm: yes, all the topic search repos are tagged with AI-related topics, so they are all filtered in.
Wait wait, the GeoLibre one: wait let's check again. The trending repo is opengeos/GeoLibre, TypeScript, +743 today. Wait is it AI related? The description says GIS for geospatial data analysis, but no mention of AI/ML. Wait but maybe it has AI features? Wait no, the given description doesn't say, so we should exclude it, right? Because the filter is clearly related to AI/ML. Same with the systematic trading one: if it's just systematic trading without AI mention, exclude. Wait wait, but let's check the systematic trading repo: the name is awesome-systematic-trading, the description is for systematic trading, no AI. So exclude.
Okay, now Step 2: Categorize into the 5 categories:
First, let's list the categories and assign projects:
1. 🔧 AI Infrastructure: These are frameworks, SDKs, inference, dev tools, CLI.
Let's see:
- andrewyng/aisuite: Unified GenAI provider interface, SDK. Yes.
- affaan-m/ECC: Agent harness performance optimization, dev tool for AI coding agents. Yes.
- huggingface/speech-to-speech: Voice agent SDK, local inference? Wait no, wait speech-to-speech is for building voice agents, maybe under Agents? Wait no, let's see:
Wait wait let's list all candidates first:
Trending kept repos:
- moeru-ai/airi: AI companion app, so 📦 AI Applications?
- andrewyng/aisuite: 🔧 AI Infrastructure (unified SDK for GenAI providers)
- affaan-m/ECC: 🔧 AI Infrastructure? Or 🤖 AI Agents? Wait it's an agent harness optimization system for coding agents, so maybe 🤖 AI Agents? Wait let's see: ECC is "agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond." So it's a tool for AI agents, so maybe 🤖 AI Agents, or 🔧? Wait let's define the categories clearly:
- 🔧 AI Infrastructure: Core tooling, SDKs, inference engines, dev tools that underpin other AI projects. E.g., aisuite is a unified SDK for GenAI, so that's infrastructure. ECC is a dev tool for agent harnesses, so also infrastructure? Wait or maybe agents:
Wait 🤖 AI Agents / Workflows: Agent frameworks, automation tools, multi-agent systems, agent harnesses, agent governance? Wait microsoft/agent-governance-toolkit is for AI agent governance, so that's AI Agents.
- huggingface/speech-to-speech: Let's see, it's "Build local voice agents with open-source models" — so it's a tool to build voice agents, so either 🤖 AI Agents or 🧠 LLMs? No, it's an application layer for voice agents, wait no: it's a toolkit to build voice agents, so maybe 🤖 AI Agents?
- virgiliojr94/book-to-skill: Turns PDFs into Claude Code skills, so it's a tool for AI agents, so 🤖 AI Agents?
- microsoft/agent-governance-toolkit: AI Agent Governance, so 🤖 AI Agents / Workflows, since it's for governing autonomous AI agents, which are part of agent workflows.
- bradautomates/claude-video: Gives Claude (an AI agent) ability to process videos, so it's a tool for AI agents, so 🤖 AI Agents?
Wait the topic search repos:
First, 🔧 AI Infrastructure:
- andrewyng/aisuite (already in trending)
- ollama/ollama: Inference engine for running LLMs locally, definitely infrastructure.
- huggingface/transformers: Model framework for training/inference, core infrastructure.
- tensorflow/pytorch: Core ML frameworks, infrastructure.
- scikit-learn/keras: Core ML frameworks, infrastructure.
- ultralytics/ultralytics: YOLO framework for computer vision, infrastructure.
- roboflow/supervision: CV tools, infrastructure.
- open-compass/opencompass: LLM evaluation platform, infrastructure.
- 0xPlaygrounds/rig: LLM app framework in Rust, infrastructure.
- The-Pocket/PocketFlow: 100-line LLM framework, infrastructure.
- meilisearch: Search engine with AI hybrid search, infrastructure? Wait meilisearch is a search engine, but it has AI-powered hybrid search, so maybe under RAG? Wait no, the topic tag for meilisearch is vector-db, right? Wait yes, the topic search says meilisearch is topic:vector-db. Oh right! The topic tags are given, so let's use those to help categorize.
Wait the topic search results have topic tags: rag, ai-agent, llm, ml, vector-db, llm-model. So that's a big hint.
Okay let's use the topic tags to help:
First, 🤖 AI Agents / Workflow (topic: ai-agent):
Trending repos that fit:
- moeru-ai/airi: Self-hosted Grok companion, autonomous agent that plays games, voice chat. Wait what's its topic? Not given, but it's an AI agent app. Wait but let's see the topic search ai-agent repos:
Topic search ai-agent repos:
- NousResearch/hermes-agent
- shareAI-lab/learn-claude-code
- santifer/career-ops
- Panniantong/Agent-Reach
- ZhuLinsen/daily_stock_analysis
- CherryHQ/cherry-studio
- HKUDS/nanobot
- zhayujie/CowAgent
- siyuan-note/siyuan (wait, siyuan is a note app, but it has AI agent features? The topic tag says ai-agent, so yes, it's included in ai-agent category.)
- hugohe3/ppt-master: AI turns docs into PowerPoint, that's an AI application? Wait no, topic tag is ai-agent. Wait ppt-master uses AI agents to generate PPTs, so yes, ai-agent?
- CopilotKit/CopilotKit: Frontend stack for agents, topic ai-agent.
- iOfficeAI/AionUi: Cowork app for AI coding agents, topic ai-agent.
- Gitlawb/openclaude: Agent that runs anywhere, topic ai-agent.
- googleworkspace/cli: CLI with AI agent skills, topic ai-agent.
- HKUDS/Vibe-Trading: Personal trading agent, topic ai-agent.
- affaan-m/ECC: Agent harness optimization, topic is llm? Wait no, the topic search says ECC is topic:llm, but also in trending it's agent harness. Wait maybe it's both? But primary category: let's see, ECC's main focus is optimizing agent harnesses, so primary is 🤖 AI Agents.
Wait also trending repos for AI Agents:
- moeru-ai/airi: Autonomous AI companion, voice, game interaction. Primary: 📦 AI Applications? Wait no, it's an AI agent product. Wait let's clarify the categories again as per the user's definition:
User's category definitions:
- 🔧 AI Infrastructure: frameworks, SDKs, inference engines, dev tools, CLI
- 🤖 AI Agents / Workflows: agent frameworks, automation, multi-agent systems
- 📦 AI Applications: specific apps, vertical solutions
- 🧠 LLMs / Training: model weights, training frameworks, fine-tuning tools
- 🔍 RAG / Knowledge: vector databases, retrieval-augmented generation, knowledge management
Okay, that's clear. So:
📦 AI Applications are specific end-user apps, vertical solutions. So moeru-ai/airi is a specific AI companion app, so that's 📦. Similarly, bradautomates/claude-video? Wait no, claude-video is a tool that adds video processing capability to Claude, so it's a dev tool for AI agents? Wait no, let's see: claude-video's description is "Give Claude the ability to watch any video. /watch downloads, extracts frames, transcribes, hands it all to Claude." So it's a tool that extends an AI agent's capability, so it's a dev tool? Or an application? Wait no, let's see:
Wait virgiliojr94/book-to-skill: Turns technical books into Claude Code skills. That's a tool for AI agents, so 🤖 AI Agents? Or 📦? No, it's a utility tool for building agent skills, so 🤖.
Wait let's categorize each relevant project properly, first filtering out all non-AI:
First, filtered out non-AI from trending:
Excluded: pascalorg/editor, jenkinsci/jenkins, opengeos/GeoLibre, paperswithbacktest/awesome-systematic-trading, yorukot/superfile. All others from trending are AI-related.
All 79 topic search repos are AI-related, as they are tagged with AI topics.
Now categorize each:
1. 🔧 AI Infrastructure (frameworks, SDKs, inference engines, dev tools, CLI):
- [andrewyng/aisuite](https://github.com/andrewyng/aisuite): Unified SDK for multiple GenAI providers, simplifies integrating different LLM APIs. Total stars 0? Wait no wait the trending list says ⭐0 (+415 today). Oh right, the trending list shows total stars as 0? Wait no wait, wait the user's data: the trending list has "⭐0 (+415 today)" — wait maybe that's a typo? No, no, wait looking back: the user's trending list entries are like "⭐0 (+415 today)" — oh, maybe the total stars are not listed, only today's new stars? Wait wait no, wait the topic search has total stars, e.g., dify has 150,578 total. Oh right! The trending list only gives today's new stars, total stars are not listed there (marked as 0 probably because the trending page shows recent, but the user's data has ⭐0 for total). Wait wait let's check the user's data again:
Yes, the 12 trending repos all have "⭐0 (+X today)" — so total stars are not provided for the trending list, only today's new stars. The topic search repos have total stars listed, e.g., 150,578 for dify.
Okay, so for trending repos, we have total stars as 0 (not provided), only today's stars. For topic search, we have both.
So back to 🔧 AI Infrastructure:
- [andrewyng/aisuite](https://github.com/andrewyng/aisuite) [Python]: Trending, +415 today. Unified interface to multiple GenAI providers, eliminates vendor lock-in for LLM integrations, worth attention for simplifying multi-model AI app development.
- [ollama/ollama](https://github.com/ollama/ollama) [Go]: Topic:llm, 177,127 total stars. Leading open-source local LLM inference engine, supports 100+ frontier models, critical for on-prem AI deployment and privacy-focused use cases.
- [huggingface/transformers](https://github.com/huggingface/transformers) [Python]: Topic:ml, 163,071 total stars. De facto standard open-source framework for training, fine-tuning, and deploying state-of-the-art ML/LLM models across text, vision, audio, and multimodal modalities.
- [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) [C++]: Topic:ml, 196,573 total stars. Industry-standard open-source ML framework with extensive production-grade tooling for large-scale model training and deployment.
- [pytorch/pytorch](https://github.com/pytorch/pytorch) [Python]: Topic:ml, 102,040 total stars. most widely used dynamic deep learning framework, preferred for research and production of LLMs and computer vision models due to its flexibility and GPU acceleration.
- [affaan-m/ECC](https://github.com/affaan-m/ECC) [JavaScript]: Trending, +692 today. Agent harness performance optimization toolkit for AI coding agents (Claude Code, Cursor, etc.), reduces token usage and improves agent reliability, addresses a key pain point for daily AI developer workflows.
Wait wait, is ECC infrastructure or agents? Let's see: it's a dev tool for optimizing agent harnesses, so it's infrastructure? Or agent tool? Wait the user's AI Infrastructure category includes dev tools, so yes, it's infrastructure. Wait but let's confirm: ECC's description says "agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond." So it's a dev tool for building/optimizing AI agents, so primary category is 🔧 AI Infrastructure, secondary maybe 🤖 AI Agents, but we pick primary.
Okay, next category: 🤖 AI Agents / Workflows (agent frameworks, automation, multi-agent systems, agent governance, agent tools):
- [moeru-ai/airi](https://github.com/moeru-ai/airi) [TypeScript]: Trending, +796 today. Self-hosted open-source AI companion agent capable of realtime voice chat, autonomous gameplay (Minecraft, Factorio), and cross-platform support (web/macOS/Windows), targets the growing demand for personalized, autonomous AI agents for consumer use.
- [microsoft/agent-governance-toolkit](https://github.com/microsoft/agent-governance-toolkit) [Python]: Trending, +17 today. Open-source toolkit for enforcing policy, zero-trust identity, and sandboxing for autonomous AI agents, covers the full OWASP Agentic Top 10 security risks, critical for enterprise adoption of agentic AI.
- [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) [Python]: Topic:ai-agent, 221,877 total stars. Open-source general-purpose AI agent framework designed to grow with user needs, supports tool use, memory, and multi-agent workflows, one of the most popular agent platforms in the ecosystem.
- [HKUDS/nanobot](https://github.com/HKUDS/nanobot) [Python]: Topic:ai-agent, 46,336 total stars. Ultra-lightweight self-hosted personal AI agent framework with built-in WebUI, tool support, memory, MCP integration, and multi-agent workflows, lowers the barrier for individuals to deploy custom AI agents.
- [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) [Python]: Topic:ai-agent, 46,176 total stars. Open-source lightweight AI assistant and agent harness with task planning, tool execution, self-evolution via memory, and multi-model support, popular for personal and small team AI automation.
- [bradautomates/claude-video](https://github.com/bradautomates/claude-video) [Python]: Trending, +989 today. Open-source tool that extends Claude's capabilities to process video content (download, frame extraction, transcription), addresses the growing need for multimodal AI agent capabilities for video understanding.
- [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) [Python]: Trending, +366 today. Open-source tool that converts technical book PDFs into reusable Claude Code skills, streamlines building custom AI agent capabilities for developer workflows.
Wait wait, claude-video: is it an agent or a tool? It's a tool that extends an agent's ability, so primary category is 🤖 AI Agents, yes, because it's for agent functionality.
Next category: 📦 AI Applications (specific apps, vertical solutions, end-user tools):
- [moeru-ai/airi](https://github.com/moeru-ai/airi) [TypeScript]: Wait no, airi is an AI companion app, so yes, 📦. Wait but earlier I put it in agents? Wait no, let's adjust: airi is a specific end-user application (AI companion) that uses agent technology, so primary category is 📦 AI Applications. Oh right! That's the difference: agent frameworks are for building agents, applications are end-user products built with AI/agents.
Okay, correct that:
📦 AI Applications:
- [moeru-ai/airi](https://github.com/moeru-ai/airi) [TypeScript]: Trending, +796 today. Self-hosted open-source AI companion application with realtime voice chat, autonomous gameplay (Minecraft, Factorio), and cross-platform support, caters to consumer demand for personalized, embodied AI companions.
- [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) [TypeScript]: Topic:ai-agent, 49,091 total stars. AI productivity desktop application with smart chat, autonomous agents, and 300+ pre-built assistants, unified access to all major frontier LLMs, popular for personal and team AI productivity.
- [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) [Python]: Topic:ai-agent, 41,623 total stars. AI-powered application that automatically generates native PowerPoint decks from documents or topics, with support for custom templates, audio narration, and data-backed charts, addresses a high-demand vertical for professional content creation.
- [santifer/career-ops](https://github.com/santifer/career-ops) [JavaScript]: Topic:ai-agent, 62,023 total stars. Open-source AI job search application that runs locally in AI coding CLIs, automates scanning job portals, scoring listings, tailoring CVs, and tracking applications, solves a common pain point for job seekers with AI automation.
- [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) [Python]: Topic:ai-agent, 59,414 total stars. LLM-powered multi-market stock analysis application with real-time data, news aggregation, decision dashboards, and automated notifications, supports zero-cost scheduled runs for individual investors.
Wait wait, are these applications? Yes, they are end-user tools built with AI, not frameworks or infrastructure. Correct.
Next category: 🧠 LLMs / Training (model weights, training frameworks, fine-tuning tools, LLM-related resources):
- [jingyaogong/minimind](https://github.com/jingyaogong/minimind) [Python]: Topic:llm-model, 53,946 total stars. Open-source educational project that trains a 64M-parameter LLM from scratch in 2 hours, demystifies LLM training for beginners, extremely popular for LLM learning and research.
- [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) [Jupyter Notebook]: Topic:llm, 100,055 total stars. Step-by-step guide to implementing a ChatGPT-like LLM in PyTorch from scratch, the gold standard educational resource for LLM engineering and research.
- [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) [Python]: Topic:llm-model, 4,421 total stars. Educational course for building a tiny LLM inference serving system optimized for Apple Silicon, addresses the growing demand for on-device LLM deployment for consumer hardware.
- [picovoice/picollm](https://github.com/Picovoice/picollm) [Python]: Topic:llm-model, 315 total stars. On-device LLM inference engine powered by X-Bit quantization, enables low-resource, privacy-preserving LLM deployment on edge devices, a key emerging direction for edge AI.
- [llm-jp/awesome-japanese-llm](https://github.com/llm-jp/awesome-japanese-llm) [TypeScript]: Topic:llm-model, 1,422 total stars. Curated resource for Japanese LLM development, addresses the growing need for multilingual and region-specific LLM ecosystems.
Wait also, the topic search has llm topic repos: Significant-Gravitas/AutoGPT, f/prompts.chat, browser-use/browser-use, harry0703/MoneyPrinterTurbo, JuliusBrussee/caveman. Wait let's see:
- Significant-Gravitas/AutoGPT: Topic:llm, 185,741 total stars. Pioneering open-source autonomous AI agent framework, one of the earliest and most widely used platforms for building agentic AI workflows.
- f/prompts.chat: Topic:llm, 166,484 total stars. Community-curated library of ChatGPT prompts, the largest open-source prompt engineering resource, widely used for improving LLM output quality.
- browser-use/browser-use: Topic:llm, 107,126 total stars. Open-source Python library that makes websites accessible for AI agents, enables automated web task completion for agentic workflows, critical for building web-connected AI agents.
Wait where to put these? Let's see:
AutoGPT is an agent framework, so 🤖 AI Agents. Prompts.chat is a resource for LLMs, so 🧠 LLMs / Training? Or is it a tool? Wait it's a prompt library, so maybe 🧠. Browser-use is a tool for AI agents to interact with the web, so 🤖 AI Agents? Or 🔧 Infrastructure? Wait let's adjust:
🧠 LLMs / Training:
- [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) [Jupyter Notebook]: 100,055 total stars, topic:llm. Step-by-step educational guide to building a ChatGPT-like LLM from scratch in PyTorch, the most popular resource for learning LLM fundamentals for developers and researchers.
- [jingyaogong/minimind](https://github.com/jingyaogong/minimind) [Python]: 53,946 total stars, topic:llm-model. Open-source project that trains a 64M-parameter LLM from scratch in 2 hours, demystifies LLM training workflows for beginners with hands-on, accessible code.
- [f/prompts.chat](https://github.com/f/prompts.chat) [HTML]: 166,484 total stars, topic:llm. The largest open-source community-curated prompt library for LLMs, widely used to improve LLM output quality and reduce prompt engineering overhead for developers.
- [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) [Python]: 99,738 total stars, topic:llm. Open-source automated workflow that uses LLMs to generate HD short videos from keywords or topics, a popular example of vertical LLM application for content creation.
Wait wait MoneyPrinterTurbo is an application? Or LLM tool? It's a workflow that uses LLMs to generate videos, so it's an application? Wait let's see: the category 📦 AI Applications is specific apps, vertical solutions. MoneyPrinterTurbo is a specific app for short video generation, so maybe 📦. Let's adjust:
📦 AI Applications add:
- [harry0703/MoneyPrinterTurbo](https://github.com/harror0703/MoneyPrinterTurbo) [Python]: 99,738 total stars, topic:llm. Open-source automated AI workflow that generates HD short videos from keywords or topics using LLMs, popular for social media content creators and demonstrates vertical LLM application potential.
Okay, that's better.
Next category: 🔍 RAG / Knowledge (vector databases, RAG, knowledge management):
First, topic:rag repos:
- [langgenius/dify](https://github.com/langgenius/dify) [TypeScript]: 150,578 total stars, topic:rag. Leading open-source platform for building agentic workflows and RAG pipelines, supports rich LLM integrations and tooling, enables teams to move from prototype to production without rebuilding AI stacks.
- [open-webui/open-webui](https://github.com/open-webui/open-webui) [Python]: 147,108 total stars, topic:rag. User-friendly open-source AI interface that supports Ollama, OpenAI API, and other LLM providers, popular for self-hosted local AI chat and RAG use cases.
- [langchain-ai/langchain](https://github.com/langchain-ai/langchain) [Python]: 142,818 total stars, topic:rag. The most widely used open-source agent engineering and RAG framework, provides extensive tools for building LLM-powered applications with retrieval and tool integration.
- [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) [Python]: 97,725 total stars, topic:rag. Open-source tool that turns codebases and documents into queryable knowledge graphs, offers a Claude Code skill for AST-parsed code analysis without vector stores, a novel alternative to traditional vector-based RAG.
- [infiniflow/ragflow](https://github.com/infiniflow/ragflow) [Go]: 86,263 total stars, topic:rag. Leading open-source RAG engine that combines advanced retrieval with agent capabilities, optimized for creating high-quality context layers for LLMs, widely used for production RAG deployments.
- [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) [Python]: 69,200 total stars, topic:rag. Open-source Chinese-language tutorial and practice repository for building AI agents from scratch, covers RAG and agent workflow fundamentals, popular for Chinese-speaking AI developers.
- [Mintplex-Labs/anything-llm

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*