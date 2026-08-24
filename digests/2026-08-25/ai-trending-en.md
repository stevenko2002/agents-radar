# AI Open Source Trends 2026-08-25

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-24 22:15 UTC

---

# AI Open Source Trends Report — 2026-08-25

## 1. Today's Highlights

Today's GitHub trending is dominated by the **agent harness / personal coding agent** wave: OpenAI's `codex` terminal agent (+1,990 today) and `NousResearch/hermes-agent` (+899) lead a cluster of self-hosted, terminal-first agents including `openclaw` and `tinyhumansai/openhuman`. A parallel **"agent skills" economy** is exploding — Karpathy-derived prompt configs (`andrej-karpathy-skills`, +491), Anthropic's community plugin marketplace (`claude-plugins-community`, +490), and a 1,000+ skill collection (`VoltAgent/awesome-agent-skills`, +600) suggest the community is standardizing reusable capabilities. The biggest single gainer, `awesome-gpt-image-2` (+2,442), shows **"Prompt as Code"** industrial prompt engineering is a new hot direction. Cost and access friction are also being attacked head-on via free-token gateways (`free-claude-code`, +889) and free LLM aggregators (`freellmapi`). The overall signal: token-efficient, local-first, easily composable agent tooling is where attention is concentrating.

## 2. Top Projects by Category

### 🔧 AI Infrastructure (frameworks, CLI, dev tools, gateways)
- [openai/codex](https://github.com/openai/codex) — Rust · +1,990 today. Lightweight terminal coding agent from OpenAI; the single most-starred project today.
- [Alishahryar1/free-claude-code](https://github.com/Alishahryar1/free-claude-code) — Python · +889 today. Free access to Claude Code, Codex, Pi, and OpenCode via 1.3B+ pooled tokens; ToS-friendly and voice-capable.
- [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) — +600 today. Curated 1,000+ agent skills compatible across Claude Code, Codex, Gemini CLI, Cursor.
- [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills) — +491 today. A single CLAUDE.md encoding Karpathy's observations on LLM coding pitfalls.
- [anthropics/claude-plugins-community](https://github.com/anthropics/claude-plugins-community) — Python · +490 today. Community plugin marketplace for Claude Cowork / Claude Code.
- [tashfeenahmed/freellmapi](https://github.com/tashfeenahmed/freellmapi) — TypeScript · +153 today. 34 free LLM providers, 635 endpoints behind one `/v1` API with smart routing and failover.
- [ollama/ollama](https://github.com/ollama/ollama) — Go · ⭐179,344. Local model runtime now bundling Kimi, GLM, DeepSeek, Qwen and more; anchor of the local-first stack.

### 🤖 AI Agents / Workflows
- [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) — Python · ⭐235,744 (+899 today). "The agent that grows with you" — adaptive, evolving personal agent.
- [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) — Rust · +515 today. Local-first personal memory brain orchestrating agent fleets and deep research.
- [apache/maka](https://github.com/apache/maka) — TypeScript · +408 today. Apache-incubating local-first agent workspace with append-only logs of tool calls and permissions.
- [openclaw/openclaw](https://github.com/openclaw/openclaw) — TypeScript · +160 today. Cross-platform personal AI assistant ("the lobster way" 🦞).
- [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) — Python · ⭐186,851. The original accessible-autonomy agent, still a community pillar.
- [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) — Python · ⭐40,371. Resilient, stateful multi-agent workflows.

### 📦 AI Applications (vertical solutions)
- [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) — JavaScript · +2,442 today. "Prompt as Code": 530+ reverse-engineered cases and 20+ industrial prompt templates for GPT-Image2.
- [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search) — Python · +378 today. Claude Code-driven job-search automation: evaluates listings, tailors CVs, writes cover letters.
- [santifer/career-ops](https://github.com/santifer/career-ops) — JavaScript · ⭐68,141. Open-source AI job search with A-H scoring, runs locally in coding CLIs.
- [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) — Python · ⭐115,919. One-click AI short-video generation pipelines.
- [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) — TypeScript · ⭐51,007. Unified AI productivity studio with 300+ assistants.

### 🧠 LLMs / Training
- [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) — Jupyter · ⭐103,680. Step-by-step ChatGPT-like LLM in PyTorch; enduring education staple.
- [jingyaogong/minimind](https://github.com/jingyaogong/minimind) — Python · ⭐54,972. Train a 64M-parameter LLM from scratch in ~2 hours — democratizing model training.
- [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) — Python · ⭐4,515. Build a tiny vLLM + Qwen inference system on Apple Silicon.
- [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) — Rust · ⭐8,389. Modular, scalable LLM application framework in Rust.

### 🔍 RAG / Knowledge
- [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) — Python · +272 today. Self-organizing AI "second brain" on Obsidian + Claude Code using Karpathy's LLM Wiki pattern.
- [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) — Python · ⭐110,112. Turns codebases/docs/schemas into queryable knowledge graphs without vector stores.
- [infiniflow/ragflow](https://github.com/infiniflow/ragflow) — Go · ⭐89,162. Leading open-source RAG engine fused with agent capabilities.
- [mem0ai/mem0](https://github.com/mem0ai/mem0) — Python · ⭐63,963. Universal memory layer providing persistent long-term memory for agents.
- [qdrant/qdrant](https://github.com/qdrant/qdrant) — Rust · ⭐34,165. High-performance vector database core of the retrieval stack.
- [milvus-io/milvus](https://github.com/milvus-io/milvus) — Go · ⭐45,771. Cloud-native vector database for scalable ANN search.

## 3. Trend Signal Analysis

The explosive attention today is concentrated on **three interlocking layers of the agent stack**: (1) terminal-native coding agents and "agent harnesses" (`codex`, `hermes-agent`, `apache/maka`, `openhuman`); (2) a newly formalized **skill/plugin layer** that makes agents composable — `andrej-karpathy-skills`, `claude-plugins-community`, `awesome-agent-skills` all treat prompts and behaviors as versioned, shareable artifacts; and (3) **access/cost plumbing** (`free-claude-code`, `freellmapi`) that lowers the barrier to running frontier models. This is the first day where "skills-as-a-package" and "plugin marketplaces for agents" appear as first-class trending categories — a meaningful signal that the ecosystem is maturing from single agents toward an app-store model for agent capabilities.

Several new directions are emerging: **Prompt as Code / industrial prompt engineering** (`awesome-gpt-image-2`) is carving out a discipline of its own; **local-first, privacy-preserving memory** (`openhuman`, `claude-obsidian`, `apache/maka`) positions knowledge graphs and append-only logs as the backbone of personal agents; and **"free/cheap frontier access"** gateways are becoming their own product category. The codex surge likely rides OpenAI's agent push, while the Anthropic plugin marketplace and Karpathy-derived CLAUDE.md signal an industry-wide standardization push around Claude Code conventions. Verticals like AI job-search (`ai-job-search`, `career-ops`) show agents quickly colonizing practical life-adjacent workflows. Expect continued convergence: cheap access + composable skills + persistent memory as the winning formula.

## 4. Community Hot Spots

- **Coding agent harnesses** — `openai/codex` (+1,990) and `NousResearch/hermes-agent` (+899) define the reference implementations for terminal-based personal coding agents.
- **Agent skills economy** — `VoltAgent/awesome-agent-skills` (+600) and `anthropics/claude-plugins-community` (+490) mark the birth of an agent app-store; skills are becoming the new "plugins."
- **Free frontier access** — `free-claude-code` (+889) and `freellmapi` are solving the cost barrier, with pooled/encrypted gateways that could reshape how individuals consume frontier models.
- **Local-first personal memory** — `tinyhumansai/openhuman` (+515) and `AgriciDaniel/claude-obsidian` (+272) push "own your context" as the next competitive frontier.
- **AI applications for real life** — `MadsLorentzen/ai-job-search` (+378) and `freestylefly/awesome-gpt-image-2` (+2,442) show agents and prompt engineering moving into practical, high-frequency use cases (employment, content creation).

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*