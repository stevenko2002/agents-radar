# AI Open Source Trends 2026-07-22

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-07-21 22:16 UTC

---

**AI Open‑Source Trends Report – 22 July 2026**  

---

### 1. Today's Highlights  
- **AI‑agent momentum** – Autonomous agent frameworks (AutoGPT, hermes‑agent) are attracting record‑breaking daily star surges, signalling a shift from “LLM‑as‑API” to full‑stack autonomous workflows.  
- **Unified AI gateways** – Projects such as **OmniRoute** (≈ +1.9 k new stars today) are emerging to present a single, quota‑aware endpoint that aggregates dozens of LLM providers and automatically fall‑backs, dramatically simplifying multi‑model deployment.  
- **Hardware‑agnostic model selection** – Tools like **llmfit** now surface the optimal model‑hardware match with a single command, accelerating adoption of edge‑first AI pipelines.  
- **Structured‑output & memory layers** – Libraries such as **outlines** (structured JSON SDK) and **mem0** (universal long‑term memory) are gaining traction, enabling developers to build reliable, stateful agents with deterministic behaviours.  
- **MCP‑driven coding assistants** – Several repositories (e.g., **code‑review‑graph**, **wigolo**, **pi‑web**) are standardising how AI‑assisted IDEs retrieve, index and reason over codebases, heralding a new “local‑first” paradigm for developer tools.  

---

### 2. Top Projects by Category  

| Category | Project (Stars – Today Δ) | Link |
|----------|---------------------------|------|
| **🔧 AI Infrastructure** | **ollama/ollama** – ⭐ 176,596 (no today Δ) – Run 100+ LLMs locally with a single CLI; hardware‑agnostic plugin system.<br>**AlexsJones/llmfit** – ⭐ 0 (+ 194) – One‑command selector that matches a model to the fastest available hardware.<br>**dottxt-ai/outlines** – ⭐ 0 (+ 49) – SDK for structured LLM outputs (strict JSON, XML, etc.).<br>**googleworkspace/cli** – ⭐ 29,881 – Google Workspace CLI that embeds AI‑agent skills for Gmail, Drive, Calendar, etc. | https://github.com/ollama/ollama  <br> https://github.com/AlexsJones/llmfit  <br> https://github.com/dottxt-ai/outlines  <br> https://github.com/googleworkspace/cli |
| **🤖 AI Agents / Workflows** | **Significant-Gravitas/AutoGPT** – ⭐ 185,640 – Fully autonomous multi‑step agent that can plan, execute, and self‑refine tasks.<br>**NousResearch/hermes-agent** – ⭐ 218,363 – Self‑evolving agent harness that grows its skill set over time.<br>**AstrBotDevs/AstrBot** – ⭐ 0 (+ 416) – Multi‑platform AI assistant (IM, CLI, plugins) designed as an open‑source “OpenClaw” alternative.<br>**tirth8205/code-review-graph** – ⭐ 0 (+ 1,921) – Persistent code‑intelligence graph that lets AI‑coding tools read only relevant context.<br>**ayghri/i-have-adhd** – ⭐ 0 (+ 1,846) – ADHD‑friendly output generator that prevents runaway reasoning in agents.<br>**tradesdontlie/tradingview-mcp** – ⭐ 0 (+ 219) – Bridges TradingView chart data with Claude Code for automated analysis.<br>**Graphify-Labs/graphify** – ⭐ 93,080 – Turns any repository (code, docs, PDFs) into a queryable knowledge graph for agents. | https://github.com/Significant-Gravitas/AutoGPT <br> https://github.com/NousResearch/hermes-agent <br> https://github.com/AstrBotDevs/AstrBot <br> https://github.com/tirth8205/code-review-graph <br> https://github.com/ayghri/i-have-adhd <br> https://github.com/tradesdontlie/tradingview-mcp <br> https://github.com/Graphify-Labs/graphify |
| **📦 AI Applications** | **CherryHQ/cherry‑studio** – ⭐ 48,846 – All‑in‑one AI productivity studio with 300+ built‑in assistants and autonomous agents.<br>**hugohe3/ppt‑master** – ⭐ 40,345 – Generates native PowerPoint decks from documents, complete with charts, animations and speaker‑note narration.<br>**MoneyPrinterTurbo** – ⭐ 98,492 – End‑to‑end AI pipeline that creates high‑definition short videos from a keyword or topic.<br>**ZhuLinsen/daily_stock_analysis** – ⭐ 58,151 – AI‑driven multi‑market stock analysis dashboard with real‑time news integration.<br>**open‑webui/open‑webui** – ⭐ 146,242 – User‑friendly web UI that can run locally or against any LLM backend (Ollama, OpenAI, etc.). | https://github.com/CherryHQ/cherry-studio <br> https://github.com/hugohe3/ppt-master <br> https://github.com/harry0703/MoneyPrinterTurbo <br> https://github.com/ZhuLinsen/daily_stock_analysis <br> https://github.com/open-webui/open-webui |
| **🧠 LLMs / Training** | **huggingface/transformers** – ⭐ 162,804 – The de‑facto Python library for designing, training and inference on state‑of‑the‑art models across modalities.<br>**tensorflow/tensorflow** – ⭐ 196,433 – End‑to‑end open‑source ML framework for building and deploying scalable models.<br>**pytorch/pytorch** – ⭐ 101,841 – Dynamic graph library with strong GPU/TPU support, widely used for research and production.<br>**ollama/ollama** (also listed above) – ⭐ 176,596 – Provides easy local serving of dozens of frontier models. | https://github.com/huggingface/transformers <br> https://github.com/tensorflow/tensorflow <br> https://github.com/pytorch/pytorch |
| **🔍 RAG / Knowledge** | **mem0ai/mem0** – ⭐ 61,396 – Universal long‑term memory layer that compresses and re‑injects context into LLMs.<br>**vectifyai/pageindex** – ⭐ 34,154 – Vector‑less document index for reasoning‑first RAG pipelines.<br>**qdrant/qdrant** – ⭐ 33,477 – Scalable vector database with built‑in filtering and API‑first design.<br>**weaviate/weaviate** – ⭐ 16,630 – Open‑source vector DB that natively blends object storage with hybrid search. | https://github.com/mem0ai/mem0 <br> https://github.com/VectifyAI/PageIndex <br> https://github.com/qdrant/qdrant <br> https://github.com/weaviate/weaviate |

*Star counts are taken from the public GitHub counters; “+ X today” reflects the surge recorded on **22 July 2026**.*

---

### 3. Trend Signal Analysis  

The current star‑burst landscape reveals **three converging currents**.  

1. **Explosion of autonomous‑agent tooling** – AutoGPT, hermes‑agent and AstrBot together command hundreds of thousands of stars, while derivative projects (e.g., *tradingview‑mcp*, *code‑review‑graph*) show double

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*