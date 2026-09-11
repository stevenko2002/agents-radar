# AI Open Source Trends 2026-09-12

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-11 22:15 UTC

---

**AI Open‑Source Trends Report – 2026‑09‑12**  

---

### 1. Today’s Highlights  
The hottest GitHub activity today revolves around **local‑first AI agent desktops and agent‑centric productivity tools** – projects like *PI‑Desktop* (+545★) and *DeskcommCRM* (+126★) show developers gravitating toward self‑hosted, MCP‑ready agents that can operate inside familiar UI shells. Simultaneously, **special‑purpose agents** are exploding: a trading bot (*CloddsBot* +627★), an ADHD‑friendly coding‑assistant skill (*i‑have‑adhd* +3,440★), and a persistent‑wiki LLM app (*llm_wiki* +640★) all illustrate a surge in domain‑specific, LLM‑driven automation. The community is also sharpening its focus on **knowledge‑centric RAG** – *llm_wiki* and the ever‑growing *open‑webui*/*langchain* ecosystems underline a shift from pure model training to persistent, retrieval‑augmented workflows.

---

### 2. Top Projects by Category  

#### 🔧 AI Infrastructure (frameworks, SDKs, inference engines, dev tools, CLI)  
| Project | Stars (total / today) | Why it matters today |
|---|---|---|
| [huggingface/transformers](https://github.com/huggingface/transformers) | 165,131 / – | The de‑facto model hub for LLMs, vision & audio; continues to dominate model sharing and inference pipelines. |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | 102,931 / – | Core deep‑learning library; still the backbone for most new LLM training and fine‑tuning repos. |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | 199,718 / – | Enterprise‑grade ML platform; recent releases emphasize large‑scale LLM serving and XLA optimizations. |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | 7,420 / – | Unified LLM evaluation suite; essential for rapid benchmarking of the flood of new models (e.g., Kimi‑K2, GLM‑5). |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | 8,599 / – | Rust‑native toolkit for building modular LLM applications; gaining traction for performance‑critical agents. |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 146,137 / – | Agent‑engineering platform that now includes built‑in MCP tooling, making it a go‑to infra layer for agentic apps. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 90,530 / – | RAG engine fused with agent capabilities; provides a production‑ready context layer for LLMs. |

#### 🤖 AI Agents / Workflows (agent frameworks, automation, multi‑agent systems)  
| Project | Stars (total / today) | Why it matters today |
|---|---|---|
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 244,585 / – | Evolving personal assistant that learns from user interactions; exemplifies the “agent that grows with you” meme. |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 71,287 / – | AI‑driven job‑search agent that scrapes, scores and tailors applications; shows agents moving into career‑tech. |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 48,033 / – | Ultra‑lightweight, self‑hosted Python agent framework with WebUI, memory and MCP support; ideal for rapid prototyping. |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 46,908 / – | Super‑assistant with multi‑model, multi‑channel capabilities; demonstrates convergence of memory, planning and tool use. |
| [siyuan-note/siyuan](https://github.com/siyuan-note/siyuan) | 46,308 / – | Privacy‑first knowledge workspace where humans and AI agents co‑edit; a concrete example of mixed‑initiative work. |
| [ayghri/i-have-adhd](https://github.com/ayghri/i-have-adhd) | – / +3,440 | ADHD‑friendly skill that prevents coding agents from burying answers; highlights demand for UX‑focused agent enhancements. |
| [vastsa/PI-Desktop](https://github.com/vastsa/PI-Desktop) | – / +545 | Local‑first AI coding agent desktop (Electron + Rust + pi Agent Harness); signals a shift toward offline, plug‑in‑based agent environments. |
| [alsk1992/CloddsBot](https://github.com/alsk1992/CloddsBot) | – / +627 | Autonomous trading agent operating across >1,000 markets; exemplifies high‑stakes, revenue‑generating agent use‑cases. |
| [obra/superpowers](https://github.com/obra/superpowers) | – / +731 | Agentic skills framework for software development; indicates growing interest in composable agent abilities. |

#### 📦 AI Applications (specific apps, vertical solutions)  
| Project | Stars (total / today) | Why it matters today |
|---|---|---|
| [jeecgboot/JeecgBoot](https://github.com/jeecgboot/JeecgBoot) | 47,744 / – | Low‑code AI platform that auto‑generates front‑end/back‑end code and includes built‑in AI skills (chat, knowledge base, MCP). |
| [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | 72,889 / – | Open data platform for analysts, quants and AI agents; increasingly used as a data layer for financial LLMs. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 64,942 / – | LLM‑powered multi‑market stock analysis system with real‑time news, dashboards and automated alerts. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 53,726 / – | AI‑generated native PowerPoint decks from documents/topics; shows LLMs moving into office‑automation. |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 51,689 / – | AI productivity studio with smart chat, autonomous agents and 300+ assistants; a one‑stop UI for agentic workflows. |
| [langgenius/dify](https://github.com/langgenius/dify) | 155,456 / – | Platform to build agentic workflows, RAG pipelines and tool‑augmented LLMs; bridges low‑code and pro‑code agent development. |
| [ScrapeGraphAI/Scrapegraph-ai](https://github.com/ScrapeGraphAI/Scrapegraph-ai) | 30,834 / – | AI‑driven web scraper that turns natural‑language instructions into extraction pipelines; exemplifies LLM‑enabled data acquisition. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 122,498 / – | One‑click HD short‑video generator from topics/keywords using LLMs; highlights creative‑media agent apps. |

#### 🧠 LLMs / Training (model weights, training frameworks, fine‑tuning tools)  
| Project | Stars (total / today) | Why it matters today |
|---|---|---|
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 60,715 / – | Train a 64M‑parameter LLM from scratch in ~2 h; a go‑to starter for rapid experimentation with new architectures. |
| [ScrapeGraphAI/Scrapegraph-ai](https://github.com/ScrapeGraphAI/Scrapegraph-ai) | 30,834 / – | While also an application, its core is an LLM‑based scraper that demonstrates lightweight fine‑tuning for extraction tasks. |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | 8,599 / – | Rust library for building LLM applications; includes utilities for quantized inference and efficient KV‑cache handling. |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | 7,420 / – | Evaluation hub that now supports the latest open models (Kimi‑K2, GLM‑5, Qwen 2.5) – essential for measuring training progress. |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | 4,55

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*