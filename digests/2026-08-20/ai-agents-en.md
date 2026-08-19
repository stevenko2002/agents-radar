# OpenClaw Ecosystem Digest 2026-08-20

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-19 22:15 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

**OpenClaw Project Digest – 2026‑08‑20**  
*(Compiled from GitHub activity: 500 issues updated, 500 PRs updated in the last 24 h; no new releases.)*  

---  

### 1. Today’s Overview  
The repository remains highly active: ≈ 458 open issues and 412 open PRs indicate ongoing development and a steady stream of bug reports and feature work. In the past 24 h, 42 issues were closed and 88 PRs were merged or closed, showing that maintainers are actively triaging and landing changes. No version was cut today, so the current line of work is still feeding into the upcoming release cycle. Overall health is **busy but strained** – a large backlog of high‑impact bugs (many P1/P0) coexists with a healthy PR throughput.  

### 2. Releases  
*None* – no new tags or release notes were published in the last 24 h.  

### 3. Project Progress (Merged/Closed PRs)  
- **88 PRs merged/closed** today.  
- Notable merged work (inferred from PR titles/labels):  
  - **CLI daemon JSON flag handling** – PR #126447 (fix(cli): accept daemon `--json` before subcommands) – improves scripting ergonomics.  
  - **Doctor identity‑file quarantine** – PR #126414 (fix(doctor): quarantine divergent device identity files) – stops crash‑loops caused by stale device IDs.  
  - **Gateway conversation delivery scoping** – PR #126424 (fix(gateway): keep conversation delivery within agent bindings) – addresses message‑loss in multi‑agent setups.  
  - **Cold‑projection context preservation** – PR #126422 (fix(sessions): preserve resolved context in cold projections) – mitigates context‑token loss after restarts.  
  - **Compaction reasoning level default** – PR #126421 (fix(compaction): default maintenance reasoning to low) – reduces unnecessary CPU spend during maintenance.  
These changes target stability, CI reliability, and subtle correctness issues that have been repeatedly flagged in the issue tracker.  

### 4. Community Hot Topics (most‑commented issues)  
| Issue | Comments | Reactions | Summary & Underlying Need | Link |
|-------|----------|-----------|---------------------------|------|
| **#116201** – Realtime voice work can retain unbounded provider & consult state | 60 | 0 | Voice sessions leak provider/consult objects under bursty traffic → memory growth & possible stalls. Users need hard ownership bounds or cleanup hooks. | <https://github.com/openclaw/openclaw/issues/116201> |
| **#44925** – Subagent completion silently lost (no retry, notification, auto‑restart) | 26 | 2 | Subagent results disappear on timeout/failure; no visibility or recovery. Need robust result propagation, retries, and user‑visible alerts. | <https://github.com/openclaw/openclaw/issues/44925> |
| **#62505** – Coding Agent never completes anything (regression from 2026.4.2) | 15 | 1 | Coding agent stuck in vague status loop; regression introduced after a recent change. Need root‑cause fix and regression test. | <https://github.com/openclaw/openclaw/issues/62505> |
| **#38327** – “Cannot convert undefined or null to object” with google‑vertex/gemini‑3.1‑pro‑preview | 14 | 3 | Null‑pointer crash when using a specific LLM provider; indicates missing guardrails in agent‑provider adapters. | <https://github.com/openclaw/openclaw/issues/38327> |
| **#108435** – Gateway fails to start after update to 2026.7.1 (crash‑loop) | 14 | 3 | Startup failure blocks all usage; likely a config or dependency regression. Users need a reliable boot path. | <https://github.com/openclaw/openclaw/issues/108435> |
| **#40001** – Write tool lacks append mode → isolated cron sessions overwrite shared files | 14 | 1 | Cron jobs clobber shared workspace files (e.g., daily logs). Users request an append‑mode flag or atomic merge. | <https://github.com/openclaw/openclaw/issues/40001> |

These top‑voted issues highlight **state‑management**, **reliability of sub‑agent lifecycles**, and **data‑loss** as the community’s most pressing concerns.  

### 5. Bugs & Stability (reported today)  
| Severity | Issue | Type | Fix PR (if any) | Notes |
|----------|-------|------|----------------|-------|
| **P0 / Crash‑loop** | #108435 (gateway start failure) | Regression | – | Blocks startup; needs immediate investigation. |
| **P0 / UX‑release‑blocker** | #70903 (persistent provider cooldown) | Bug | – | After billing recovery, user locked out for hours; requires cooldown reset logic. |
| **P1** | #116201 (unbounded voice state) | Bug | – | Memory leak‑like behavior in realtime voice. |
| **P1** | #44925 (silent subagent loss) | Bug | – | No retry/notification; affects reliability. |
| **P1** | #62505 (coding agent stall) | Regression | – | Worked in 2026.4.2; regression likely in orchestration loop. |
| **P1** | #38327 (null‑pointer with Gemini) | Regression | – | Provider‑specific guard missing. |
| **P1** | #40001 (write tool overwrite) | Bug | – | Data‑loss risk for shared files. |
| **P1** | #115546 (CLI‑budget compaction timeout) | Bug | – | Timeout fires far early → death‑spiral on large sessions. |
| **P1** | #124284 (subagent spawn fails with vLLM thinking) | Bug | – | New stream wrapper breaks vLLM tool calls. |

No merged PRs directly linked to the above were visible in the PR list, indicating that fixes are still pending or under review.  

### 6. Feature Requests & Roadmap Signals  
| Feature Request | Issue | Comments | Relevance to Near‑Term Roadmap |
|-----------------|-------|----------|--------------------------------|
| Per‑agent dreaming configuration (control memory‑core OOM) | #67413 | 8 | High impact – would mitigate memory‑spike OOM kills; likely targeted for next maintenance release. |
| Anthropic advisor tool (beta server‑side) | #63930 | 7 | Enables mid‑inference model consultation; aligns with recent tool‑policy work. |
| Expose OpenRouter usage cost exposure to agent runtime | #9016 | 7 | Cost transparency is a recurring user ask; low‑effort addition. |
| Graceful sub‑agent timeout (pre‑timeout warning) | #6625 | 6 | Prevents unsaved work loss; fits reliability theme. |
| Fallback model chain for compaction & LCM summaryModel | #56781 | 6 | Reduces compaction failures when primary model is rate‑limited. |
| Memory‑core retention policy for SQLite tables | #114612 | 7 | Addresses unbounded disk growth; critical for long‑running agents. |

Given the volume of P1 bugs, the maintainers are likely to prioritize stability fixes first, but the above feature requests have clear traction and could appear in the next minor release (e.g., 2026.8.2) once the critical bug backlog is trimmed.  

### 7. User Feedback Summary (pain points & use‑cases)  
- **State leakage & memory growth** – Users report unbounded accumulation of provider/consult objects (#116201) and ever‑growing SQLite memory tables (#114612), leading to OOM crashes and degraded performance.  
- **Silent failures** – Subagent results vanishing without notice (#44925) and cron sessions overwriting shared files (#40001) erode trust in automation pipelines.  
- **Startup & crash‑loop fragility** – Gateway fails to start after updates (#108435) or enters restart loops when sandboxed Docker is used (#86612), causing downtime.  
- **Tool‑policy friction** – Write tool lacking append mode forces users to work around data loss; Codex restricted‑tool policy silently drops `AGENTS.md` (#125431).  
- **Observability gaps** – No visibility into subagent timeouts, usage cost, or silent retries; users ask for pre‑timeout warnings and cost exposure.  

Overall sentiment: **users value the extensible agent framework but are hampered by reliability regressions and resource‑management blind spots**.  

### 8. Backlog Watch (long‑unanswered, high‑impact items)  
| Issue | Age (days) | Comments | Why it matters | Link |
|-------|------------|----------|----------------|------|
| #116201 (unbounded voice state) | 22 | 60 | Core realtime voice functionality; memory leak risk. | <https://github.com/openclaw/openclaw/issues/116201> |
| #44925 (silent subagent loss) | 159 | 26 | Fundamental reliability of agent orchestration. | <https://github.com/openclaw/openclaw/issues/44925> |
| #114612 (SQLite unbounded growth) | 115 | 7 | Long‑term disk exhaustion; affects all persistent agents. | <https://github.com/openclaw/openclaw/issues/114612> |
| #70903 (persistent provider cooldown) | 117 | 8 | Blocks users after billing recovery; UX blocker. | <https://github.com/openclaw/openclaw/issues/70903> |
| #125431 (Codex restricted tool disables AGENTS.md) | 3 | 7 | Silent loss of agent configuration; impacts toolchain integrity. | <https://github.com/openclaw/openclaw/issues/125431> |

These items have been open for weeks‑to‑months, attract considerable discussion, and lack a linked fix PR. They represent the **maintainer attention backlog** that, if addressed, would significantly improve perceived stability.  

---  

**Bottom line:** OpenClaw is experiencing a flurry of development activity, but a sizable subset of high‑severity bugs and resource‑management issues remain unresolved. The next release cycle should aim to close the top P1/P0 bugs (especially #116201, #44925, #108435) while beginning to integrate the most‑upvoted feature requests (per‑agent dreaming, cost exposure, fallback models) to meet user expectations for reliability and observability.

---

## Cross-Ecosystem Comparison

**Cross‑Project Comparison Report (2026‑08‑20)**  

---

### 1. Ecosystem Overview  
The personal‑AI‑assistant / agent open‑source landscape in mid‑2026 is dominated by a handful of actively maintained frameworks that balance rapid feature iteration with growing stability concerns. Most projects show high PR throughput, indicating vigorous development, yet a common pattern emerges: a sizable backlog of P1/P0‑grade bugs (memory leaks, silent failures, startup regressions) co‑exists with feature work aimed at observability, multi‑channel support, and sandbox hardening. The ecosystem is therefore **busy but strained**, with maintainers prioritising critical bug fixes while the community pushes for richer tooling, cost transparency, and cross‑platform reliability.  

---

### 2. Activity Comparison  

| Project | Open Issues* | Open PRs* | PRs Merged/Closed (24 h) | Releases (24 h) | Health Score† |
|---------|--------------|----------|--------------------------|-----------------|---------------|
| **OpenClaw** | ~458 | ~412 | 88 | None | **Medium‑High** (busy, many P0/P1 bugs) |
| **NanoBot** | 5 | 27 | 8 | None | **Medium** (steady fixes, few blockers) |
| **Hermes Agent** | 50 (updated) | 50 (updated) | 11 | None | **Medium** (active, notable skill‑index staleness) |
| **PicoClaw** | 1 (closed) | 3 open / 2 merged | 2 | None | **High** (low backlog, incremental UX work) |
| **NanoClaw** | 3 (new) | 11 open / 12 merged | 24 | None | **Medium‑High** (many PRs, Node 26 blocker) |
| **NullClaw** | 0 | 1 open | 0 | None | **Low** (minimal activity) |
| **IronClaw** | 8 open / 4 closed | 22 open / 16 merged | 16 | None | **Medium** (steady sandbox work, UX bugs) |
| **LobsterAI** | 6 (stale) | 8 (stale) | 0 (all PRs stale) | None | **Low‑Medium** (stale backlog, silent‑failure bugs) |
| **TinyClaw** | 0 | 0 | 0 | None | **Inactive** |
| **Moltis** | 0 (closed) | 5 open / 5 merged | 10 | 2 patch releases (20260818.10/.08) | **High** (rapid patching, low open issues) |
| **CoPaw** | 4 open / 46 closed | 32 open / 17 merged | 17 | None | **Medium‑High** (high PR flow, critical data‑loss bug #2884) |
| **ZeptoClaw** | 0 | 0 | 0 | None | **Inactive** |
| **ZeroClaw** | 46 open | 47 open | 3 (2 merged, 1 withdrawn) | None | **Medium** (architectural RFCs, Windows test debt) |

\*Counts are taken from the digests (open issues/PRs after today’s activity).  
†Health Score is a qualitative synthesis of activity volume, backlog severity, and release cadence: **High** = low critical backlog, regular releases; **Medium** = active development but notable blockers; **Low** = minimal progress or stagnating backlog.  

---

### 3. OpenClaw’s Position  

| Aspect | OpenClaw | Peer Comparison |
|--------|----------|-----------------|
| **Scale of Activity** | Highest PR throughput (≈ 88 merged/closed in 24 h) and largest open‑issue backlog (~458). | Only NanoClaw approaches PR volume (24 merged); most others are < 20 merged. |
| **Technical Focus** | Core agent runtime, CLI daemon, gateway, session/compaction subsystems; heavy emphasis on stability fixes (JSON flag handling, identity‑file quarantine, conversation scoping). | NanoBot & NanoClaw concentrate on UI/UX, OAuth, proxy handling; Hermes Agent stresses webhook/desktop reliability; Moltis focuses on sandbox/Apple‑Container integration; CoPaw emphasizes mailbox, sandbox hardening, and LLM‑stream watchdogs. |
| **Community Size** | Largest issue‑comment activity (e.g., #116201 with 60 comments) indicates a sizable user base voicing reliability concerns. | Hermes Agent’s #66616 (59 comments) and ZeroClaw’s RFC #9487 (20 comments) show comparable engagement but fewer total commenters. |
| **Advantages** | • Breadth of subsystems (CLI, gateway, doctor, compaction) gives a full‑stack agent platform.<br>• Rapid PR turnover shows maintainers are responsive to incoming patches.<br>• Strong focus on deterministic resource‑management (e.g., compaction reasoning default). | • NanoBot offers polished TUI/WebUI and rapid OAuth fixes.<br>• Moltis delivers frequent patch releases and strong sandbox/Apple‑Container support.<br>• ZeroClaw drives architectural innovation (session‑ownership RFCs, WASM plugins). |
| **Challenges** | • High backlog of P0/P1 bugs (gateway crash‑loop, unbounded voice state, silent subagent loss) that block production use.<br>• No recent release → users rely on unstable mainline.<br>• Complexity of multiple subsystems can increase integration surface for bugs. | • Smaller projects enjoy lower complexity and faster release cycles (Moltis).<br>• Some peers (NanoBot, Hermes) have fewer open critical bugs, giving a perception of higher stability despite lower feature breadth. |

---

### 4. Shared Technical Focus Areas  

| Focus Area | Projects Mentioning It | Specific Needs / Signals |
|------------|------------------------|--------------------------|
| **Observability & Cost Transparency** | OpenClaw (per‑agent dreaming, cost exposure), NanoBot (turn observability, usage accounting), Hermes Agent (usage pricing update), CoPaw (LLM‑stream watchdog, usage metrics) | Users want real‑time token/usage tracking, cost alerts, and debugging hooks for stalled LLM streams. |
| **Multi‑Channel / Plugin Extensibility** | OpenClaw (gateway conversation delivery, subagent lifecycle), NanoBot (manual‑skill invocation, follow‑up suggestions), Hermes Agent (webhook overhaul, plugin streaming), ZeroClaw (WASM plugins, external integrations), CoPaw (mailbox, Volcengine/MiMo providers) | Desire for plug‑in model connectors, secure external tool execution, and consistent cross‑platform channel support (Slack, Telegram, WhatsApp, IM). |
| **Sandbox / Execution Safety** | OpenClaw (doctor identity‑file quarantine, compaction defaults), IronClaw (persistent per‑user sandbox, capability‑response normalization), Moltis (Apple Container resource limits, routing), ZeroClaw (RFC on runtime‑owned sessions, unsafe audit) | Need for reproducible, isolated execution environments with reliable resource limits and clean teardown to avoid orphaned processes. |
| **State Persistence & Recovery** | OpenClaw (cold‑projection context preservation, voice‑state leak), NanoClaw (setup PATH/zero‑byte file fixes), Hermes Agent (desktop session persistence after updates), ZeroClaw (RFC session‑ownership, WASM plugin persistence) | Preventing loss of conversation context, agent identity, and workspace files across restarts or crashes. |
| **Reliability of Sub‑Agent / Tool Chains** | OpenClaw (subagent completion silently lost, write‑tool append mode), NanoBot (Dream cursor blocking on tool error), Hermes Agent (skills index stale), CoPaw (LLM‑stream stall, sandbox antivirus blocking) | Guarantees that sub‑agent results are propagated, retried, and surfaced to the user; avoidance of silent data loss. |

---

### 5. Differentiation Analysis  

| Dimension | OpenClaw | NanoBot | Hermes Agent | Moltis | CoPaw | ZeroClaw |
|-----------|----------|---------|--------------|--------|-------|----------|
| **Primary Users** | Developers building extensible agent frameworks (CLI‑driven, multi‑agent orchestration). | End‑users & power‑users wanting a polished TUI/WebUI with skill‑based automation. | Enterprise‑style users needing robust webhook/desktop integration and campaign management. | Operators needing secure container/Apple‑Container sandboxes for AI workloads. | Users seeking an all‑in‑one assistant with mailbox, sandbox, and LLM‑stream safeguards. | Researchers & platform builders experimenting with runtime‑owned sessions, WASM plugins, and core slimming. |
| **Architecture** | Modular core (CLI, doctor, gateway, compaction, sessions) with strong emphasis on internal state‑machine correctness. | Thin core + rich UI layer (TUI/WebUI) + skill/plugin system; less focus on low‑level execution sandbox. | Core agent + extensible plugin/webhook system; desktop UI tightly coupled to backend. | Thin wrapper around Apple/OCI containers; focus on runtime resource enforcement. | Core agent + mailbox + sandbox + LLM‑stream watchdog; UI‑centric features (folder creation, image preview). | Minimal core + pluggable WASM/transport layer; RFC‑driven evolution toward session‑owned runtime. |
| **Release Cadence** | No recent release; work accumulates in mainline. | Frequent small PRs; no formal releases yet. | Active PR flow; no releases today but steady cadence. | Bi‑daily patch releases (two today) indicating a release‑oriented process. | High PR volume, no releases yet. | Active RFC discussion; no releases today but architectural work ongoing. |
| **Key Pain Points** | Memory leaks, silent subagent loss, gateway crash‑loop. | OAuth in Docker, legacy proxy handling, LangSmith regression. | Skills‑index staleness, desktop session loss after update, Windows ZIP fallback. | Container status parsing, resource‑limit propagation, GPT‑5.6 Luna routing. | Data‑loss bug (#2884), LLM‑stream stall, antivirus false positives. | Windows test failures, SOP discovery, unsafe Rust patterns, credential logging. |

---

### 6. Community Momentum & Maturity  

| Activity Tier | Projects (based on PRs merged/closed & issue backlog) |
|---------------|------------------------------------------------------|
| **Rapid Iterators** (high PR throughput, frequent releases) | **Moltis** (2 patch releases today, 10 PRs merged), **NanoClaw** (24 PRs merged, 3 new issues), **OpenClaw** (88 PRs merged, large backlog) |
| **Steady Developers** (moderate PR flow, active issue triage) | **IronClaw** (16 PRs merged, 8 open issues), **CoPaw** (17 PRs merged, 4 open issues), **Hermes Agent** (11 PRs merged, 50 updated issues) |
| **Maintenance / Stabilization** (low PR volume, focus on bug fixes) | **NanoBot** (8 PRs merged, 5 open issues), **PicoClaw** (2 PRs merged, 1 issue closed), **LobsterAI** (0 PRs merged, 6 stale issues) |
| **Low Activity / Exploratory** | **NullClaw** (1 open PR, no issues), **TinyClaw** / **ZeptoClaw** (no activity), **ZeroClaw** (3 PRs merged, many open RFCs – more design‑oriented than implementation‑heavy) |

Overall, the ecosystem shows a **bimodal pattern**: a few projects (Moltis, NanoClaw, OpenClaw) are in a rapid‑iteration mode, while others are either stabilizing (NanoBot, PicoClaw) or focusing on architectural discussions (ZeroClaw).  

---

### 7. Trend Signals (From Community Feedback)  

| Trend | Evidence Across Projects | Implication for AI‑Agent Developers |
|-------|--------------------------|-------------------------------------|
| **Demand for Usage Transparency & Cost Controls** | OpenClaw (cost exposure request), NanoBot (turn observability), Hermes Agent (usage pricing update), CoPaw (LLM‑stream watchdog) | Teams will prioritize built‑in metering, budget alerts, and exportable usage dashboards. |
| **Robust Sandbox & Process Isolation** | IronClaw (persistent per‑user sandbox), Moltis (Apple Container resource limits), OpenClaw (doctor identity‑file quarantine, compaction defaults), ZeroClaw (runtime‑owned sessions RFC) | Expect more sandbox‑native abstractions that enforce CPU/memory limits and guarantee clean teardown, reducing “runaway agent” incidents. |
| **State‑Ful Conversation Survival** | OpenClaw (cold‑projection context, voice‑state leak), Hermes Agent (desktop session persistence), ZeroClaw (session‑ownership RFC), NanoClaw (setup PATH/zero‑byte file fixes) | Durable conversation state across restarts and upgrades is becoming a table‑stakes feature; projects will invest in checkpointing, serializable session stores, and transport‑surface adapters. |
| **Plugin / External Tool Ecosystem** | NanoBot (manual‑skill invocation, follow‑up suggestions), Hermes Agent (plugin streaming, webhook overhaul), CoPaw (mailbox, Volcengine/MiMo providers), ZeroClaw (WASM plugins, external integrations) | A shift toward declarative, capability‑based tool contracts (MCP-like) with built‑in security sandboxes and versioned registries. |
| **Cross‑Platform UI/UX Consistency** | NanoBot (TUI/WebUI exit command, file‑management settings), PicoClaw (Telegram interactive UX), LobsterAI (IM slash commands, image thumbnail preview), CoPaw (folder creation UI, model‑selector polish) | Users expect feature parity between CLI, desktop, web, and mobile clients; UI investments are increasingly tied to core functionality rather than being after‑thoughts. |
| **Observability of LLM Streaming & Stalls** | OpenClaw (compaction reasoning default, voice‑state leak), CoPaw (LLM‑stream watchdog #7150), Hermes Agent (usage pricing, webhook reliability) | Mechanisms to detect, recover from, and surface stalled LLM generations (timeouts, watchdogs, token‑budget alerts) are now critical for production reliability. |
| **Security‑First Defaults (e.g., WhatsApp group policy, credential logging)** | ZeroClaw (RFC: empty `allowed_groups` = permit‑none, credential‑logging suppression), IronClaw (vault unlock/auth), CoPaw (sandbox antivirus hardening) | Secure‑by‑default configurations and stricter audit/logging policies are gaining traction as projects mature. |

**Takeaway for Decision‑Makers:**  
Invest in frameworks that already expose usage metrics, provide sandboxed execution with verifiable limits, and guarantee conversation persistence. Prioritize projects with active plugin/extern‑tool ecosystems and a roadmap toward secure‑by‑default defaults, as these align with the prevailing community sentiment and reduce operational risk in production AI‑agent deployments.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot Project Digest – 2026‑08‑20**  
*Based on GitHub activity (issues & PRs updated in the last 24 h)*  

---

### 1. Today's Overview  
The repository shows **high engagement** today: 5 open issues and 27 PRs were updated, with 8 PRs already merged/closed. No new releases were published. Activity is concentrated on bug‑fixes (OAuth login, proxy handling, Dream cursor), stability improvements (Docker OAuth persistence, session‑save safety), and usability features (turn observability, manual‑skill invocation, follow‑up suggestions). Overall project health appears active, with maintainers addressing regressions and infrastructure concerns while continuing to expand functionality.

### 2. Releases  
*No new releases were published in the last 24 h.*  

### 3. Project Progress – Merged/Closed PRs (today)  
| PR | Title & Link | Summary |
|----|--------------|---------|
| [#5443](https://github.com/HKUDS/nanobot/pull/5443) | fix(tui): expose `/exit` in command menu | Makes the existing TUI `/exit` command discoverable via slash‑completion. |
| [#5440](https://github.com/HKUds/nanobot/pull/5440) | perf(memory): reuse conversation prefix for local compaction | Improves memory compaction performance by reusing the system/history prefix. |
| [#5438](https://github.com/HKUds/nanobot/pull/5438) | fix(webui): return promptly after Ctrl‑C | Ensures WebUI client leases are released instantly on foreground interrupt. |
| [#5341](https://github.com/HKUds/nanobot/pull/5341) | fix(skills): make weather workflow Windows‑safe | Replaces bare `curl` with explicit invocation to avoid PowerShell alias issues on Windows. |
| [#4527](https://github.com/HKUds/nanobot/pull/4527) | Add ask_clarification tool | Introduces a built‑in tool for the agent to request clarification from the user. |
| [#4282](https://github.com/HKUds/nanobot/pull/4282) | feat: add file management features to the settings view | Adds a folder‑browsing UI for agents/SOUL config files. |

These merged changes tighten UI/UX, improve performance on Windows, and add useful developer‑facing tools.

### 4. Community Hot Topics  
- **Issue #2493** – *[OPEN] [good first issue, feature request, regression] LANGSMITH is not working (anymore) after latest update*  
  - **Link:** https://github.com/HKUDS/nanobot/issues/2493  
  - **Activity:** 7 comments, 1 👍 (most‑commented item today)  
  - **Underlying need:** Users rely on LangSmith integration for tracing/LLM observability; its breakage after removal of `litellm_provider.py` is blocking workflows that depend on external monitoring.  

*(PR comment counts were not supplied in the data, so the issue above is the primary hotspot.)*

### 5. Bugs & Stability (reported today) – ranked by severity  

| Severity | Issue | Link | Summary | Fix PR? |
|----------|-------|------|---------|---------|
| **High** | #5444 – *[bug] Failed to ogin OpenAI via OAuth in Docker* | https://github.com/HKUDS/nanobot/issues/5444 | OAuth flow fails inside Docker because the redirect URL cannot be processed; blocks authentication for OpenAI‑based agents. | #5445 (fixes OAuth client data persistence) & #5446 (routes Codex OAuth storage through nanobot data dir) |
| **High** | #5425 – *[bug] Support legacy socks:// proxy URLs for custom OpenAI‑compatible providers* | https://github.com/HKUDS/nanobot/issues/5425 | Configs containing `socks://` proxy URLs cause request failures before reaching the provider; affects users behind legacy SOCKS proxies. | #5439 (limits proxies to standard `socks5://` only) – note: this PR **does not** add legacy support; it removes the alias, so the underlying issue may need a separate compatibility layer. |
| **Medium** | #5441 – *[bug] Dream: a single recovered tool error permanently blocks the memory cursor* | https://github.com/HKUDS/nanobot/issues/5441 | A retried `edit_file` error leaves `memory/.dream_cursor` unchanged, causing duplicate edits on subsequent Dream runs. | #5442 (fixes cursor advance on recovered tool errors) |
| **Low/Medium** | #2493 – *[regression] LANGSMITH integration broken* | https://github.com/HKUDS/nanobot/issues/2493 | Removal of `litellm_provider.py` broke LangSmith chat‑model provider; impacts observability but does not prevent core agent operation. | No linked fix PR yet; discussion ongoing. |

### 6. Feature Requests & Roadmap Signals  

| Feature Request / Signal | Source | Link | Notes |
|--------------------------|--------|------|-------|
| **Paid security‑scan MCP integration (nanobot + ScanPay x402)** | Issue #5447 | https://github.com/HKUDS/nanobot/issues/5447 | User wants to expose a paid, per‑scan security service via MCP/x402; indicates interest in monetizable agent capabilities. |
| **Turn observability & safe recovery** | PR #5420 | https://github.com/HKUDS/nanobot/pull/5420 | Adds per‑turn answer surfaces, usage accounting, and visualization of interrupted work – stepping toward richer debugging UI. |
| **Manual‑only skill invocation** | PR #5405 | https://github.com/HKUDS/nanobot/pull/5405 | Introduces `disable-model-invocation: true` in skill front‑matter for side‑effect‑heavy skills (deployment, publishing). |
| **Follow‑up suggestions in WebUI** | PR #5408 | https://github.com/HKUDS/nanobot/pull/5408 | Generates ephemeral, chat‑scoped suggestions after successful turns, mimicking DeerFlow UX. |
| **Core timer tool (nano_timer)** | PR #4853 | https://github.com/HKUDS/nanobot/pull/4853 | Provides UTC/local time, timezone‑aware calendar fields – a utility building block for scheduling‑aware agents. |
| **Bound sustained‑goal continuation** | PR #5257 | https://github.com/HKUDS/nanobot/pull/5257 | Prevents admission of open‑ended recurring goals without terminal conditions, improving goal‑management robustness. |

These signals suggest the next version may focus on **observability/debugging**, **skill execution controls**, and **utility core tools**, while also exploring **monetization pathways** via MCP/x402.

### 7. User Feedback Summary  

- **Pain points:**  
  - Authentication failures in Dockerized environments (OAuth redirect handling).  
  - Proxy configuration friction – legacy `socks://` aliases not recognized.  
  - Dream runs getting stuck due to unrecovered tool errors, leading to duplicated work.  
  - Loss of LangSmith integration after a refactor, breaking external tracing pipelines.  
- **Positive use cases highlighted:**  
  - Users value the ability to persist OAuth data across container restarts (PR #5445/5446).  
  - Requests for clearer UI/UX (exit command, follow‑up suggestions, file‑management settings).  
  - Interest in extending NanoBot with paid, on‑chain services (ScanPay).  
- **Overall sentiment:** Active community reporting blockers that affect production deployment, coupled with enthusiasm for extensibility and observability enhancements.

### 8. Backlog Watch – Long‑Unanswered / Important Items  

| Item | Age (as of 2026‑08‑20) | Link | Why it needs attention |
|------|----------------------|------|------------------------|
| **Issue #2493 – LANGSMITH regression** | ~5 months (opened 2026‑03‑25) | https://github.com/HKUDS/nanobot/issues/2493 | Highest comment count today; affects users relying on LangSmith for monitoring/no‑code debugging. No fix PR yet. |
| **Issue #5405 – Manual‑only skill invocation** | 4 days (opened 2026‑08‑16) | https://github.com/HKUDS/nanobot/pull/5405 | Awaiting review; would enable safer side‑effect skill usage. |
| **Issue #5403 – Memory consolidation token count** | 4 days (opened 2026‑08‑16) | https://github.com/HKUDS/nanobot/pull/5403 | Critical for preventing context‑window overflow; still open. |
| **Issue #5271 – Stale background task saves** | 14 days (opened 2026‑08‑06) | https://github.com/HKUDS/nanobot/pull/5271 | Though a PR exists, it remains open; addressing it would improve session reliability under heavy background work. |
| **Issue #5447 – Paid security‑scan MCP integration** | 1 day (opened 2026‑08‑19) | https://github.com/HKUDS/nanobot/issues/5447 | Novel feature request; early engagement suggests potential roadmap item if aligned with project goals. |

Maintainers may prioritize **#2493** (restoring LangSmith) and the **memory‑consolidation fixes** (#5403, #5379) to stabilize core functionality, while monitoring the newer feature proposals for future releases.

---  

*End of digest.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent – Project Digest (2026‑08‑20)**  

---

### 1. Today's Overview  
The repository showed very high activity in the last 24 h: **50 issues** and **50 pull‑requests** were updated, with no new releases. Most of the updates are ongoing discussions and bug‑fix work; 11 PRs were merged/closed today, indicating steady progress on the backlog. The issue with the highest comment count (**#66616 – Skills index stale/degraded, 59 comments**) remains open, highlighting a persistent reliability concern that is drawing community attention.

---

### 2. Releases  
*No new releases were published today.*

---

### 3. Project Progress  
- **Merged/Closed PRs (≈11)** – While the exact titles are not listed in the supplied data, the merged/closed count shows that contributors successfully landed changes today.  
- **Notable Open PRs (selected by activity)**  
  - **#90310** – feat(plugins): carry the delivery target on stream observer payloads (opened 2026‑08‑19)  
  - **#90307** – feat(campaigns): enforce executable parity ledgers (opened 2026‑08‑19)  
  - **#90308** – fix(usage): update DeepSeek pricing to 2026‑08 peak/off‑peak rates (opened 2026‑08‑19)  
  - **#90250** – fix(desktop): bind backend teardown to Windows Job Object authority (opened 2026‑08‑19) – addresses a critical Windows stability regression.  
  - **#90236** – fix(webhook): close Task 10 intake identity and raw‑bound contracts (opened 2026‑08‑19) – part of the ongoing webhook overhaul.  

These PRs touch on plugin streaming, campaign validation, usage billing, desktop Windows reliability, and webhook security – all areas that have seen recent bug reports.

---

### 4. Community Hot Topics  
| Item | Type | Comments | Summary & Link | Underlying Need |
|------|------|----------|----------------|-----------------|
| **#66616** | Bug (P3) | **59** | Skills index is stale/degraded (index 29.8 h old > 26 h limit). <br>URL: <https://github.com/NousResearch/hermes-agent/issues/66616> | Automated freshness of the skills hub is broken; users rely on up‑to‑date skill definitions for agent behavior. |
| **#84834** | Meta‑issue (P3) | **19** | Webhook Feature Package – graph‑gated repair tracking ingress, execution, delivery, config, UI, deployment, docs. <br>URL: <https://github.com/NousResearch/hermes-agent/issues/84834> | Coordinated overhaul of the webhook surface to eliminate reliability gaps and provide a stable API for external integrations. |
| **#89675** | Bug (P1) | **11** | Desktop (macOS) shows no sessions for any agent profile after update; backend spawned without `--profile`. <br>URL: <https://github.com/NousResearch/hermes-agent/issues/89675> | Session persistence broken after desktop upgrades – users lose chat history and must restart agents manually. |
| **#83846** | Bug (P1) | **11** | Windows ZIP fallback deletes the built desktop app and never rebuilds it; later updates report “Already up to date”. <br>URL: <https://github.com/NousResearch/hermes-agent/issues/83846> | Update mechanism on Windows is destructive, causing silent loss of the installed application. |
| **#90299** | Bug (duplicate) | **3** | False‑positive “TERMINAL_CWD found in .env” deprecation warning on every startup. <br>URL: <https://github.com/NousResearch/hermes-agent/issues/90299> | Annoying noisy warning that reduces trust in CLI output; users want clean start‑up logs. |

*The most‑commented issue (#66616) signals a systemic automation failure in the skills‑index workflow, while the webhook meta‑issue (#84834) reflects a large‑scale effort to harden a core integration point.*

---

### 5. Bugs & Stability (ranked by severity)  

| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|--------|
| **P0** | **#89897** – Codex tool follow‑ups send unsupported `prompt_cache_retention` to `gpt-5.6-sol` (HTTP 400). | Intermittent backend rejection when using the Codex tool; breaks tool chaining. | No fix PR listed in today’s data (still open). |
| **P1** | **#89675** – Desktop sessions not loading after update (backend missing `--profile`). | Loss of all session data on macOS desktop after upgrade. | No dedicated fix PR visible; likely under investigation. |
| **P1** | **#83846** – Windows ZIP fallback deletes desktop app; update loop. | Silent removal of Hermes on Windows, breaking usability. | No fix PR visible; high impact. |
| **P1** | **#90250** (PR) – bind backend teardown to Windows Job Object authority. | Addresses the Windows PID‑reuse hazard that can leave orphaned processes. | **Open PR #90250** – a candidate fix for the Windows stability regression. |
| **P2** | **#90238** – Cron `delegate_task` ignores `child_timeout_seconds` during Codex no‑SSE stall. | Long‑running Codex jobs can hang indefinitely, blocking cron pipelines. | No fix PR listed. |
| **P2** | **#90236** – Webhook Task 10 intake identity & raw‑bound contracts. | Part of webhook hardening; ensures proper message delivery guarantees. | **Open PR #90236** – directly tackles this P2 webhook bug. |
| **P3** | **#66616** – Skills index stale/degraded. | Degraded skill look‑ups; affects agent capability discovery. | No fix PR visible; automation workflow needs attention. |
| **P3** | **#90299** – False‑positive TERMINAL_CWD warning. | Cosmetic but noisy; impacts developer experience. | No fix PR listed. |

**Observation:** The only P0 bug today is the Codex cache‑retention issue; several P1 bugs affect desktop session persistence and Windows update safety, indicating stability regressions that warrant urgent attention.

---

### 6. Feature Requests & Roadmap Signals  

| Feature Issue | Summary | Link |
|---------------|---------|------|
| **#89995** – Expose Bot Mode group chat rooms in web dashboard & gateway | Bring the desktop‑only Bots group‑chat UI to the web dashboard and gateway API. | <https://github.com/NousResearch/hermes-agent/issues/89995> |
| **#90007** – Add a resource‑aware low‑memory Windows execution profile | Provide a single‑click profile that tunes context size, providers, and fallback for low‑end Windows machines. | <https://github.com/NousResearch/hermes-agent/issues/90007> |
| **#90249** – Per‑route context hints for multiplexed profile routes | Allow different system‑prompt hints per chat/topic when using `gateway.multiplex_profiles`. | <https://github.com/NousResearch/hermes-agent/issues/90249> |
| **#82140** – Expose resolved Desktop connection mode (`local`/`remote`) to skills, MCP, and plugins | Let extensions know whether the desktop is talking to a local agent or a remote gateway. | <https://github.com/NousResearch/hermes-agent/issues/82140> |
| **#90305** – Show renamed profile’s `display_name` in sidebar grouped‑by‑profile view | UI polish for profile management. | <https://github.com/NousResearch/hermes-agent/issues/90305> |

These requests point toward **enhanced cross‑platform consistency (web/desktop), better resource profiling for constrained devices, and finer‑grained routing/customization for enterprise‑style webhook deployments**. Given the current activity around webhook tasks (#84834, #90236, #90304) and desktop Windows fixes (#90250, #90237), it is plausible that some of these features (especially the low‑memory Windows profile and per‑route context hints) could target the next minor release.

---

### 7. User Feedback Summary  

- **Skills Index Reliability** – Users report that the skill hub frequently becomes stale, causing agents to miss newly added or updated skills. The automated cron job that rebuilds `/docs/api/skills-index.json` is not keeping pace, leading to a degraded state that persists for hours.  
- **Desktop Session Loss After Updates** – Both macOS and Windows users describe losing all chat histories after upgrading the desktop app. On macOS the backend is launched without the `--profile` flag; on Windows the ZIP fallback removes the installed binary and never restores it, leaving shortcuts pointing to nowhere.  
- **Webhook Integration Gaps** – Contributors are actively tracking a large “Webhook Feature Package” meta‑issue, indicating that the current webhook surface suffers from inconsistent authentication, session handling, and delivery guarantees. Users need a reliable, idempotent webhook pipeline for external services.  
- **Windows‑Specific Stability** – Several P1/P2 bugs revolve around update mechanisms, snapshot handling, and window‑snapping transparency. The community appreciates the recent PR #90250 that ties backend teardown to Windows Job Objects, but more work is needed to prevent orphaned processes and UI glitches.  
- **Tool & Plugin Visibility** – Issues such as MCP tools not appearing in the main tool dispatch (#84772) and Kanban workers being invisible in the UI (#90268) reveal a disconnect between background tool execution and the frontend’s session/listing logic. Users expect all active tools to be surfaced consistently.  
- **Noise & False Positives** – Repeated warnings like the TERMINAL_CWD deprecation notice (#90299) and spurious “already up to date” messages after broken updates (#83846) erode confidence in the CLI’s output clarity.  

Overall, the feedback underscores a desire for **more reliable core infrastructure (skill indexing, update mechanisms, session persistence)** and **clearer, less noisy tooling** while still pushing forward ambitious features like webhook hardening and cross‑platform UI enhancements.

---

### 8. Backlog Watch  

| Item | Age / Activity | Why It Needs Attention |
|------|----------------|------------------------|
| **#66616** (Skills index stale) | Open since 2026‑07‑18, 59 comments, still **degraded**. | Automation failure impacts every agent’s ability to discover and use skills; a blocker for skill‑driven workflows. |
| **#50871** (Markdown lone `~` renders as strikethrough) | Open since 2026‑06‑22, 2 comments, low recent activity but persistent annoyance for users drafting ranges. | Minor but affects documentation and user‑generated content quality; easy fix with a regex tweak. |
| **#79539** (Windows missing base interpreter → unrecoverable loop) | Open since 2026‑08‑05, 1 comment, stale. | Leads to a broken update loop on Windows; critical for any Windows‑based deployment. |
| **#81427** (Memory provider tools not injected in desktop sessions) | Open since 2026‑08‑08, 2 comments. | Prevents external memory integrations from working in the GUI, limiting advanced agent capabilities. |
| **#90035** (No periodic maintenance for long‑term memory) | Open since 2026‑08‑19, 1 comment. | Risk of memory bloat over time; affects long‑running agents and token usage. |

These issues have either high comment counts (#66616) or represent clear regressions that block core functionality (#79539, #81427) yet have not seen a fix PR in the last 24 h. Maintainer triage and dedicated effort on the skills‑index workflow and Windows update reliability would substantially improve project health.

--- 

*Generated from the supplied GitHub activity data for 2026‑08‑20.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest – 2026‑08‑20**  
*Generated from GitHub activity (issues/PRs updated in the last 24 h)*  

---  

### 1. Today's Overview  
PicoClaw saw modest maintenance activity today: one bug issue was closed and five pull requests received updates (three still open, two merged/closed). No new releases were published, indicating the team is currently focusing on code‑cleanup and incremental feature work rather than a version bump. Overall project health appears stable, with ongoing work on Telegram UX, routing context handling, and configuration improvements.  

---  

### 2. Releases  
*No new releases were published today.*  

---  

### 3. Project Progress (Merged/Closed PRs)  
| PR | Status | Summary | Impact |
|----|--------|---------|--------|
| [#3341](https://github.com/sipeed/picoclaw/pull/3341) | **Merged** | feat(telegram): add interactive command UX and formatted ephemeral fallback | Improves Telegram `/memory` command ergonomics and reduces verbose help output; provides ephemeral fallbacks for structured content. |
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) | **Merged** (marked stale) | feat(models): add configurable default fallback chain | Introduces a UI‑driven, persistable model fallback chain (default + fallbacks) for the web UI and backend API. |
| *(No other PRs were closed/merged in the last 24 h)* | | | |

These merged changes advance the Telegram interaction experience and give users more control over model selection fallbacks.  

---  

### 4. Community Hot Topics  
| Item | Type | Comments / Reactions | Why it’s hot |
|------|------|----------------------|--------------|
| [#1305](https://github.com/sipeed/picoclaw/issues/1305) | Issue (closed) | 4 comments, 0 👍 | Describes a regression where a new banner printed to STDOUT breaks shell completion flow (`picoclaw completion zsh`). The discussion reveals a usability pain point for developers relying on auto‑completion. |
| *(All PRs show “undefined” comment counts, indicating no discussion yet)* | | | |

The single issue with multiple comments highlights a clear user‑facing bug that attracted community attention despite being closed.  

---  

### 5. Bugs & Stability  
| Bug ID | Description | Severity* | Fix Status |
|--------|-------------|-----------|------------|
| [#1305](https://github.com/sipeed/picoclaw/issues/1305) | Banner output to STDOUT interferes with command completion scripts (e.g., `zsh`). | **Medium** – affects developer workflow but not runtime execution. | Issue closed; no associated PR visible in the data, suggesting the fix may have been committed elsewhere or the issue was resolved by reverting the banner change. |

\*Severity is inferred from impact: completion flow breakage hinders usability but does not cause crashes or data loss.  

---  

### 6. Feature Requests & Roadmap Signals  
| Feature / PR | Current State | Likelihood for Next Release |
|--------------|---------------|-----------------------------|
| Interactive Telegram UX & ephemeral fallback (#3341) | **Merged** | High – already in mainline; will ship in the next version. |
| Configurable model fallback chain (#3200) | **Merged** (stale label) | High – core functionality ready; likely pending documentation/release notes. |
| Support topics in private bot chats (#3315) | **Open**, stale | Medium – addresses a specific Telegram forum‑mode gap; maintainer may prioritize after stability work. |
| Routed‑agent context management (history/summarization/compression) (#3316) | **Open**, stale | Medium – important for long‑running agents; depends on deeper refactor. |
| Warn on inert `webhook_host` / `webhook_port` instead of seeding (#3329) | **Open** | Low‑Medium – minor cleanup; could be bundled with next patch. |

The merged PRs (#3341, #3200) are the strongest signals for the upcoming release, while the open stale PRs indicate areas that may need additional review before inclusion.  

---  

### 7. User Feedback Summary  
- **Completion flow disruption** (Issue #1305) – Users reported that unexpected STDOUT output broke shell autocompletion, causing friction in daily CLI usage.  
- **Telegram command verbosity** – Prior to #3341, `/help` displayed full subcommand grammar per row, increasing cognitive load; the new interactive UX aims to alleviate this.  
- **Lack of topic awareness in private chats** – Users with forum‑enabled bots found that PicoClaw ignored topic messages in 1:1 chats, limiting threaded conversations.  
- **Context/history loss in routed agents** – Agents assigned to specific Discord channels via dispatch rules failed to retain session history, preventing effective multi‑turn dialogue.  
- **Desire for predictable model fallbacks** – Requests for a UI‑configurable fallback chain show users want more control over model selection without editing code.  

Overall, feedback centers on improving developer experience (CLI completion), enhancing Telegram interaction ergonomics, and ensuring robust conversation state management.  

---  

### 8. Backlog Watch (Items Needing Maintainer Attention)  
| Item | Type | Age / Status | Concern |
|------|------|--------------|---------|
| [#3316](https://github.com/sipeed/picoclaw/pull/3316) | PR (open, stale) | Created 2026‑08‑03, updated 2026‑08‑19 | Routed‑agent context management – core for agent memory; stale label suggests review stalled. |
| [#3315](https://github.com/sipeed/picoclaw/pull/3315) | PR (open, stale) | Created 2026‑08‑03, updated 2026‑08‑19 | Telegram topic support in private chats – addresses a usability gap for forum‑mode bots. |
| [#3329](https://github.com/sipeed/picoclaw/pull/3329) | PR (open) | Created 2026‑08‑11, updated 2026‑08‑19 | Webhook host/port warning – low risk but could be merged to clean up config handling. |
| *(Issue #1305 is closed; no open bugs with discussion)* | | | |

The two stale PRs (#3316, #3315) represent the most significant backlog items: they touch agent memory continuity and Telegram feature parity, both of which have been voiced by users. Prioritizing reviews or requesting updates from contributors would help move these features toward release.  

---  

*All links point directly to the respective GitHub issue or pull request.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest – 2026‑08‑20**  
*Generated from GitHub activity (issues & PRs) for the 24‑hour window ending 2026‑08‑20.*

---

### 1. Today's Overview
The repository showed **high pull‑request turnover** (35 PRs updated, 24 merged/closed) while **issue activity remained low but entirely open** (3 new issues, none closed). No new releases were published today. The surge of PRs indicates active development work—mostly bug‑fixes, setup improvements, and feature additions—whereas the open issues point to lingering stability concerns that have not yet been addressed in a release.

---

### 2. Releases
- **No new releases** were tagged or published in the last 24 h.  
  *Therefore, no version‑specific changes, breaking changes, or migration notes are available for this period.*

---

### 3. Project Progress (Merged/Closed PRs)
Twenty‑four PRs were merged or closed today. Highlights:

| PR | Type | Summary |
|----|------|---------|
| #3340 | fix(approvals) | Added an `instance` column to `pending_approvals` so OneCLI credential cards are posted/edited by the same bot identity that owns the DM. |
| #3341 | fix(provisioning) | Derived the Slack service from the credential’s issuer, tying install‑token minting and consumption together. |
| #3342 | feat(slack) | Owner‑absent Slack channel invites are now declined automatically instead of being escalated as approve/reject cards. |
| #3345 | feat(setup) | Forwarded optional client metadata (`client_version`, `client_os`) on Slack service requests from the setup step. |
| #3344 | feat(provisioning) | Added optional request‑origin metadata fields (requester, creator, client) to app‑creation calls. |
| #3339 | fix(setup) | Made setup “fail closed” when a stored sign‑in cannot be verified, preventing silent credential acceptance. |
| #3358 | core‑team (slack) | Split the Slack payload: base adapter in `/add-slack`; agents feature in `/slack‑agent‑flow`. |
| #3357 | core‑team (setup) | Introduced `--slack-agents` flag to install the full Slack agents feature (child bots, A2A rooms, canvases). |
| #3350 | fix(setup) | Resolved ping‑folder compatibility issues in the setup script. |
| #3341‑#3345, #3339‑#3342, #3357‑#3358 | various | Numerous small‑scale fixes and metadata enhancements across provisioning, Slack, and setup. |

These changes collectively tighten credential handling, improve Slack integration ergonomics, enrich provisioning with provenance metadata, and make the setup flow more robust—especially for non‑interactive environments.

---

### 4. Community Hot Topics
All PRs and issues currently show **undefined comment/reaction counts**, indicating low discussion volume. Nevertheless, the **most frequently updated items** (by PR count) are:

- **Feature PRs** adding new channels/provider integrations:  
  - PR #3050 – *Dial channel picker + wizard/skills* (Dial integration)  
  - PR #3041 – *Dial channel adapter (SMS + AI voice calls)*  
  - PR #3356 – *Cursor Agent SDK payload*  
  - PR #3355 – */add‑cursor agent provider skill*  
  - PR #3349 – *Agent mailbox seam and registry*  

These PRs reflect a community interest in **expanding channel support (Dial/SMS) and enabling third‑party agent SDKs (Cursor)**, suggesting that users want NanoClaw to act as a broader hub for AI‑agent interactions beyond its native Slack/Telegram core.

The three open issues, while not heavily commented, each represent a **user‑reported pain point** that could become a hot topic once more users encounter them:

- #3359 – Node 26 compatibility / better‑sqlite3 build failure  
- #3354 – Setup leaves 0‑byte channel files & PATH issue in headless installs  
- #3353 – Dial SMS marked delivered even when carrier rejects  

---

### 5. Bugs & Stability (Reported Today)
| Issue | Summary | Severity (subjective) | Associated Fix PR? |
|-------|---------|-----------------------|--------------------|
| #3359 | **Node 26** passes `check_node` but **better‑sqlite3 11.10.0 fails to compile** on macOS arm64 (Homebrew Node 26.7.0). | **High** – blocks bootstrap on the latest Node LTS; affects all fresh macOS installs. | PR #3360 (upgrade better‑sqlite3 to 13.0.3 & raise Node min to 22) – **open** |
| #3354 | Setup leaves **0‑byte channel files** on a failed `git-show` copy; also runs an `onecli` check before fixing `PATH` in non‑login/headless installs. | **Medium** – leaves stale files and can cause confusing PATH errors in automated CI/SSH scenarios. | No linked PR yet (similar fix attempted in #3249, still open) |
| #3353 | **Dial adapter** records an SMS as delivered when accepted for sending; carrier‑side rejection never updates the status, breaking retry logic. | **Medium** – leads to silent message loss and wasted retry budget. | No linked PR yet |

**Overall stability assessment:** The most critical blocker is the Node 26 / better‑sqlite3 incompatibility (Issue #3359). A fix is already proposed in PR #3360, which, once merged, should restore bootstrap success on recent Node versions. The other two bugs are setup‑related and affect headless or automated installations; they are less severe but deserve attention to improve the out‑of‑box experience.

---

### 6. Feature Requests & Roadmap Signals
Recent feature‑oriented PRs indicate the following near‑term roadmap directions:

| Feature Area | Indicated Work |
|--------------|----------------|
| **Dial / SMS** | Full Dial channel integration (picker, wizard, adapter) – PRs #3050 & #3041 (still open, awaiting review). |
| **Third‑Party Agent SDKs** | Cursor Agent SDK payload (PR #3356) and provider skill (PR #3355) – points to a plug‑in model for external agent frameworks. |
| **Agent Mailbox** | Generic mailbox seam & registry (PR #3349) – enables swapping storage backends (SQLite default) for agent‑to‑agent communication. |
| **Setup Enhancements** | Forwarding client metadata on Slack service requests (PR #3345) and optional request‑origin metadata on provisioning (PR #3344) – improves auditability and telemetry. |
| **Slack Agents Flag** | New `--slack-agents` flag to install the full agents feature (PR #3357) – makes the agents capability opt‑in rather than always‑on. |

Given the momentum, the **next version** (once a release is cut) is likely to bundle:
- Dial SMS/AI‑voice channel support,
- Cursor Agent SDK integration,
- Agent mailbox abstraction,
- Updated Node requirement (≥ 22) with better‑sqlite3 13.x,
- Setup robustness fixes for non‑login environments.

---

### 7. User Feedback Summary
The three open issues capture real‑world friction points:

1. **Node version mismatch** – Users on the latest Homebrew Node encounter a cryptic build failure during `nanoclaw.sh` bootstrap. Feedback suggests the version check is too permissive and the native dependency (better‑sqlite3) needs an upgrade.
2. **Setup script assumptions** – In headless/SSH contexts the script assumes an interactive login shell, resulting in zero‑byte artifacts and premature PATH usage. Users report confusing errors when provisioning via automation tools (Ansible, CI pipelines).
3. **Dial delivery semantics** – Early adopters of the Dial SMS feature notice that failure states are not propagated back to NanoClaw, causing the UI to show “sent” while the carrier silently drops the message. This undermines trust in the channel’s reliability.

Collectively, feedback highlights a desire for **more reliable cross‑platform installation** and **transparent error handling** for newly added communication channels.

---

### 8. Backlog Watch
While all current issues are fresh (created 2026‑08‑19), the following items merit maintainer attention because they block core user workflows and have either a pending fix or no fix yet:

- **Issue #3359** – Node 26 / better‑sqlite3 build failure.  
  *Linked PR:* #3360 (open). **Action:** Review and merge PR #3360 promptly; consider back‑porting the better‑sqlite3 upgrade to the maintenance branch if a release is imminent.

- **Issue #3354** – Setup leaves zero‑byte channel files & PATH issue in non‑login installs.  
  *No direct PR.* **Action:** Examine the setup script (`setup.sh`) for premature file creation and ensure PATH adjustments happen before any tooling calls. A small refactor akin to the fix attempted in PR #3249 could resolve this.

- **Issue #3353** – Dial SMS delivery status not updated on carrier rejection.  
  *No linked PR.* **Action:** Extend the Dial adapter to check the carrier’s delivery webhook/status endpoint and update the `delivered` row accordingly; tie this to the retry budget mechanism.

Older, stale items were not present in the supplied data, so the backlog currently consists of these three recent, high‑impact bugs.

---

**Summary:**  
NanoClaw is experiencing a flurry of development activity—particularly around extending channel support (Dial, Cursor SDK) and improving setup/telemetry. The primary blocker to a stable release is the Node 26 / better‑sqlite3 incompatibility, for which a fix is already staged. Addressing the remaining setup and Dial reliability issues will further solidify the platform for automated and production deployments. Continued triage of the open issues and merging of the associated PRs should pave the way for the next version bump.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw Project Digest – 2026‑08‑20**  

---

### 1. Today's Overview  
The NullClaw repository shows minimal activity in the last 24 hours: no issues were updated, and there are no open or closed issues. A single pull request (#989) remains open, created and updated on 2026‑08‑19, with no reactions or comments yet. No new releases have been published. Overall, the project is currently idle, with only a small maintenance‑type change pending review.

### 2. Releases  
*No new releases* were published today, so there are no version changes, breaking changes, or migration notes to report.

### 3. Project Progress  
- **Merged/closed PRs today:** 0  
- **Open PRs:** 1 (PR #989) – a documentation‑only fix that redirects the star‑history chart in the README to a token‑free service (star‑history.dera.page). No functional code changes are involved, so no feature advancement or bug fix has been merged yet.

### 4. Community Hot Topics  
The only item with any recent activity is PR #989:  
- **Link:** https://github.com/nullclaw/nullclaw/pull/989  
- **Author:** FaintFlower  
- **Created/Updated:** 2026‑08‑19  
- **Comments/Reactions:** 0 (no discussion yet)  

The underlying need is to restore the README’s star‑history visualization, which broke due to GitHub API access limits. The request reflects a desire for reliable, maintenance‑free project metrics display rather than a functional code change.

### 5. Bugs & Stability  
No bugs, crashes, or regressions were reported in the last 24 hours. Consequently, there are no severity‑ranked issues or associated fix PRs.

### 6. Feature Requests & Roadmap Signals  
With zero open issues and no recent issue activity, there are no explicit feature requests to analyse. The sole open PR is a documentation fix, suggesting that the maintainers are currently focusing on housekeeping rather than new feature development.

### 7. User Feedback Summary  
No user comments, reactions, or issue discussions were recorded today, so there is no direct feedback on pain points, use cases, or satisfaction levels to summarise.

### 8. Backlog Watch  
- **Long‑unanswered important Items:** None. The repository currently has no open issues, and the only open PR (#989) is recent (less than 24 h old) and awaiting review. No items require escalated maintainer attention at this time.

---  

*All links point to the corresponding GitHub resources.*  
*Digest generated solely from the supplied data; no external information was inferred.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw Project Digest – 2026‑08‑20**  

---

### 1. Today’s Overview  
Activity remained high over the last 24 h: 12 issues were touched (8 still open/active, 4 closed) and 38 pull‑requests saw updates (22 open, 16 merged/closed). No new releases were cut, but the project is steadily advancing core work‑streams—particularly the persistent per‑user sandbox effort and automation‑authoring improvements—while addressing a batch of usability bugs reported today. Overall health looks solid: continuous integration is passing, and the volume of merged PRs indicates steady progress toward the next stable release.

### 2. Releases  
*No new releases were published today.*  

### 3. Project Progress (Merged / Closed PRs)  
Sixteen PRs were merged/closed in the past day. Notable completed work includes:  

| PR | Title / Focus | Link |
|----|---------------|------|
| **#7754** | Promote release candidate 1.3.0‑rc.2 → stable **1.3.0** (version bump only) | <https://github.com/nearai/ironclaw/pull/7754> |
| **#7741** | *feat(sandbox): per‑thread persistent container with Docker Exec* (Step 1 of #7732) | <https://github.com/nearai/ironclaw/pull/7741> |
| **#7686** | *refactor(runtime): centralize capability outcome processing* (PR 1 of capability‑response‑normalization) | <https://github.com/nearai/ironclaw/pull/7686> |
| **#7750** | *chore(webui): integrate Storybook + design‑system catalog* (Epic #7038 phase 1) | <https://github.com/nearai/ironclaw/pull/7750> |
| **#7043** | *docs(design-system): DESIGN.md governance + Storybook guidelines* (Epic #7038 phase 2) | <https://github.com/nearai/ironclaw/pull/7043> |
| **#7039** | *chore(webui): integrate Storybook + design‑system catalog* (superseded by #7750) | <https://github.com/nearai/ironclaw/pull/7039> |
| … | (remaining 9 PRs covered dependency bumps, CI tweaks, docs, and minor refactors) | |

These merges solidify the sandbox persistence groundwork, improve runtime capability handling, and advance the WebUI design‑system initiative.

### 4. Community Hot Topics  
The most‑commented issue today is **#7732** (7 comments):  

* **#7732 – [epic, v1.4.0] Epic: Persistent per‑user sandbox with iron‑proxy; defer loop executors**  
  <https://github.com/nearai/ironclaw/issues/7732>  
  *Underlying need:* Users want a reusable Docker container per `(tenant,user)` rather than tearing down a container for every shell command, to cut latency and improve workspace continuity. The epic drives the ongoing sandbox PRs (#7741, #7751).  

No other issue/PR exceeded 0 comments in the supplied data, indicating focused discussion around the sandbox epic.

### 5. Bugs & Stability (Reported Today)  
| ID | Summary | Severity* | Fix PR (if any) |
|----|---------|-----------|-----------------|
| **#7748** | “IronClaw got confused and stopped working” – user‑reported hang/crash | **High** (core usability) | None visible yet |
| **#7745** | Copilot MCP extension install fails (auth_required, duplicate catalog entries, unclear token type) | **Medium** (extension integration) | None visible yet |
| **#7744** | Cron‑job UI missing edit & test buttons (only view/status) | **Low** (UX) | None visible yet |
| **#7736** | Daily ironclaw failure taxonomy – 2026‑08‑19 (benchmark‑driven failure log) | **Informational** (tracking) | N/A |

\*Severity is inferred from impact on core functionality vs. ancillary features. No linked fix PRs appear in the current update list; maintainers may need to triage these.

### 6. Feature Requests & Roadmap Signals  
- **#7742** – *feat(automations): bound creation preflight and surface missing prerequisites* (enhancement, scope: agent/tool/builtin) – aims to make automation authoring explicit about readiness before persistence.  
- **#7732** (epic) – Persistent per‑user sandbox (already in progress via #7741 & #7751).  
- **#7038** – Epic: Storybook + AI‑first Design System (ongoing; PRs #7257, #7750, #7043, #7039).  

Given the velocity of sandbox‑related PRs and the automation‑preflight PR, the next minor release (likely **1.4.0**) will probably ship the persistent sandbox foundation and the bounded automation‑creation workflow.

### 7. User Feedback Summary  
- **Stability:** One user reported the agent “got confused and stopped working” (#7748), indicating a potential intermittent hang or state‑corruption issue under real‑world load.  
- **Extension UX:** Copilot MCP installation suffers from duplicated catalog entries and ambiguous auth flows (#7745), suggesting the extension‑catalog UI needs deduplication and clearer token‑type handling.  
- **Admin UI:** Cron‑job management lacks edit/test capabilities (#7744), forcing users to rely on CLI or external tools for job tweaks.  
- **Positive signals:** Active work on sandbox persistence and automation preflight shows responsiveness to performance and usability requests; the design‑system effort (#7038) reflects a commitment to improving the WebUI developer experience.

### 8. Backlog Watch (Long‑Unanswered / Needs Attention)  
| ID | Age (days) | Summary | Why it needs attention |
|----|------------|---------|------------------------|
| **#7038** | 17 | Epic: Storybook + AI‑first Design System (ux) | Central to WebUI polished experience; no comments but multiple linked PRs await review. |
| **#6994** | 19 | feat(webui): OOBE automation‑tasks prototype — carousel, inline cards, agent‑mode pill | Onboarding prototype; still open, gated by feature flag, but no recent discussion. |
| **#7255** | 15 | docs(governance): evaluate the APDD kit + propose scoped integration | Governance alignment; stalled despite being a docs‑only PR. |
| **#7603** (closed) – though closed, its sibling **#7602** (Tier 2 cache) closed; no further action needed. | — | — | — |

These items have seen little to no comment activity recently despite being open for over a week, indicating they may benefit from maintainer nudging or clarification to move forward.

---  

*All links point to the respective GitHub issue or pull request.*  
*Generated from the supplied GitHub activity snapshot for 2026‑08‑20.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI Project Digest – 2026‑08‑20**  
*Generated from GitHub activity (issues/PRs updated in the last 24 h). No new releases were published today.*

---

### 1. Today's Overview  
The repository showed low‑volume but focused maintenance activity: **6 issues** and **8 pull requests** were touched, all of which were marked *[stale]* and originated from early April 2026. No new version was released, indicating that today’s work centered on cleaning up older tickets and merging long‑standing improvements rather than introducing fresh features. Overall project health appears stable, with contributors addressing regressions and usability polish while the core backlog remains largely unchanged.

### 2. Releases  
*No new releases were published today.*  

### 3. Project Progress – Merged/Closed PRs (8 items)  
| PR | Area / Platform | Summary of Change |
|----|----------------|-------------------|
| #2512 | docs, windows | Hide the installer banner for the *dictbind* silent‑package channel while preserving it for other silent install paths. |
| #2511 | build, docs, windows | Add an **upload‑first two‑pass** Windows web‑installer flow for NOS‑hosted payloads; rebuild only the signed WebSetup stub and enforce SHA‑256 invariants. |
| #1570 | scheduledTasks | Fix editing a disabled task so it **remains disabled** after saving (previously forced to `enabled:true`). |
| #1573 | im | Add **slash‑command support** (`/help`, `/status`, `/new`, `/compact`, …) to IM channels (Telegram, DingTalk, Feishu, Discord, QQ, WeChat). |
| #1576 | api | Resolve a **race condition** where an old request’s abort callback incorrectly cleared SSE listeners of a new request, causing silent loss of streamed data. |
| #1578 | permission‑modal | Introduce **Bash syntax highlighting** in the permission‑approval popup to make risky commands (e.g., `rm -rf`, `--force`) instantly recognizable. |
| #1580 | prompt‑input | Replace the generic photo‑icon pill with a **64 × 64 thumbnail preview** of uploaded images, using the existing `dataUrl`. |
| #1582 | setup‑python, windows | Detect and overwrite outdated `__main__.py` files that blocked `pip` after upgrades; extend the health check to verify file content, not just existence. |

These PRs collectively improve installer reliability, fix correctness bugs (task state, SSE stream, pip detection), and enhance user‑experience features (IM shortcuts, image previews, command highlighting).

### 4. Community Hot Topics  
- **Most‑commented issue:** **#1569** – *“提问后不运行，也不显示任何信息，不知道出什么问题了”* (Question yields no execution or feedback) – **5 comments**, 0 reactions.  
  *Link:* https://github.com/netease-youdao/LobsterAI/issues/1569  
  *Underlying need:* Users expect immediate acknowledgment or error reporting when a query fails; the silent failure erodes trust and hampers debugging.  
- **Most‑commented PR:** All PRs show `undefined` comment counts (effectively 0), so no PR discussion stood out today.  

Thus, the primary community focus today is the unresolved silent‑failure bug in #1569.

### 5. Bugs & Stability (reported in today’s issues)  
| Issue | Symptom | Approx. Severity* | Fix PR (if any) |
|-------|---------|-------------------|-----------------|
| #1569 | No execution / no output after asking a question. | **High** – blocks core functionality. | None yet. |
| #1566 | Model always returns the same canned response regardless of input. | **High** – renders the agent useless for varied queries. | None yet. |
| #1561 | Uploaded files are not visible to the model (file‑handling regression). | **Medium** – impacts document‑based workflows. | None yet. |
| #1551 | Gateway repeatedly restarts when network environment changes. | **Medium** – causes intermittent downtime. | None yet. |
| #1563 | Typo in the “流量包服务条款” (data‑package service terms) page. | **Low** – cosmetic / legal wording. | None yet. |
| #1567 | Request for quick‑action buttons (stop topic, compress context, recover from errors). | **Low‑Medium** – usability enhancement. | None yet. |

\*Severity is inferred from impact on core agent operation and user workflow.

### 6. Feature Requests & Roadmap Signals  
- **#1567** (quick‑action buttons) – aligns with recent usability PRs (#1578, #1580) and could be bundled into a forthcoming “input‑enhancements” milestone.  
- **#1573** (IM slash commands) was just merged, suggesting the team is actively expanding **cross‑platform controllability**; further IM‑specific features (e.g., inline file handling, message threading) may follow.  
- **#1580** (image thumbnail preview) points to a broader trend of enriching the prompt UI; future work might include video previews or drag‑and‑drop multi‑asset support.  
- **#1578** (bash syntax highlighting) indicates a focus on **security‑aware approvals**; we may see similar highlights for other dangerous inputs (e.g., SQL, PowerShell).  

These signals suggest the next release cycle will likely prioritize **input‑ui polish**, **cross‑channel command parity**, and **robustness of file handling**.

### 7. User Feedback Summary  
Users repeatedly report three pain points:  

1. **Silent failures** – queries that produce no output or error messages (#1569, #1566).  
2. **File‑handling regressions** – uploaded documents are not recognized by the model after recent updates (#1561).  
3. **Environmental instability** – network changes trigger gateway restarts, disrupting long‑running sessions (#1551).  

Conversely, the community appreciates recent usability upgrades: slash‑command support in IM chats, clearer permission dialogs with syntax highlighting, and visual confirmation of image uploads. Overall satisfaction appears mixed—core reliability issues dominate negative feedback, while UI polish receives positive notes.

### 8. Backlog Watch (Long‑Unanswered / Needs Maintainer Attention)  
All six open issues have been stale since early April 2026, with the latest activity today being only a timestamp update (no substantive discussion or resolution). Prioritized by impact:  

1. **#1569** – Silent query failure (high).  
2. **#1566** – Uniform response regression (high).  
3. **#1561** – File upload not visible to model (medium).  
4. **#1551** – Network‑induced gateway restart (medium).  
5. **#1567** – Request for quick‑action UI buttons (low‑medium).  
6. **#1563** – Typo in service terms (low).  

No linked fix PRs exist for any of these items; maintainer triage or assignment would be valuable to prevent further stagnation.

---

**Conclusion:** Today’s activity reflects maintenance and refinement rather than feature bursts. While recent PRs have resolved several regressions and added useful usability touches, a set of high‑impact bugs (especially silent query failures and uniform responses) remains open and warrants immediate attention to restore confidence in the agent’s core reliability.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis Project Digest – 2026‑08‑20**  

---  

### 1. Today’s Overview  
The repository showed a burst of activity in the last 24 hours: **3 issues were closed** and **10 pull requests were updated** (5 still open, 5 merged/closed). Two patch‑level releases were cut (20260818.10 and 20260818.08). Overall, the project is in a healthy stabilization phase – maintainers are merging bug‑fixes and small improvements while a handful of open PRs await review.  

---  

### 2. Releases  
| Version | Date | Notes |
|---------|------|-------|
| **20260818.10** | 2026‑08‑18 | Patch release; no breaking changes announced in the release notes. |
| **20260818.08** | 2026‑08‑18 | Patch release; no breaking changes announced in the release notes. |

*Because the release tags contain only the date/build number and no changelog was supplied, we infer these are routine bug‑fix / security patches.*  

---  

### 3. Project Progress – Merged/Closed PRs Today  

| PR | Title | Summary of Change |
|----|-------|-------------------|
| [**#1215**](https://github.com/moltis-org/moltis/pull/1215) | Fix Apple Container sandbox resource limits | Passes configured memory/CPU limits (`--memory`, `--cpus`) and `pids_max` (`--ulimit nproc`) to Apple Container; rejects fractional CPU quotas. |
| [**#1213**](https://github.com/moltis-org/moltis/pull/1213) | Add GPT‑5.6 Luna routing coverage | Adds deterministic reasoning‑plus‑tools test coverage for GPT‑5.6 Sol/Terra/Luna, synchronises the live OpenAI model‑health list, and includes a Luna streaming regression. |
| [**#1212**](https://github.com/moltis-org/moltis/pull/1212) | Preserve Responses routing for explicit OpenAI endpoints | Classifies the built‑in OpenAI endpoint by normalized URL so Responses routing is kept when `OPENAI_BASE_URL` points to the official OpenAI URL. |
| [**#1214**](https://github.com/moltis-org/moltis/pull/1214) | Fix Apple Container status parsing across versions | Replaces raw JSON substring matching with a typed status decoder that handles both pre‑1.x scalar `status` and 1.x nested `status.state`; used for readiness, lifecycle, failed‑removal, and listing. |
| [**#1198**](https://github.com/moltis-org/moltis/pull/1198) | Route OpenAI reasoning tool calls through Responses | Routes built‑in OpenAI requests that combine function tools with `reasoning_effort` via the Responses API while preserving Chat Completions behavior for tool‑free or reasoning‑free calls. |

*Collectively, these PRs tighten Apple Container integration, improve OpenAI model routing, and harden security‑relevant paths.*  

---  

### 4. Community Hot Topics  

| Item | Comments / Reactions | Why it matters |
|------|----------------------|----------------|
| **Issue #1185** – *Apple Container 1.x sandbox starts but Moltis treats it as not running* | **3 comments** (👍 0) | Users hit a false‑negative status detection after upgrading to Apple Container 1.x, causing orchestration failures. The discussion reveals a need for robust version‑aware status parsing (addressed in #1214). |
| PR #1219 – *make the untrusted-turn tool ceiling configurable* | 0 comments (status: undefined) | Indicates demand for finer‑grained tool policy control in untrusted chats. |
| PR #1218 – *stop hardcoding the push name to "Moltis"* | 0 comments | Highlights a usability pain point for WhatsApp bot identity. |
| PR #1217 – *treat a reply to the bot as addressing it* | 0 comments | Reflects user expectation that replies in group chats should be recognized as direct bot messages. |

*The most active conversation is Issue #1185, signaling that Apple Container compatibility remains a visible pain point for the community.*  

---  

### 5. Bugs & Stability (reported/updated today)  

| Severity | Issue | Description | Fix PR (if any) |
|----------|-------|-------------|-----------------|
| **High** | #1185 – Apple Container sandbox perceived as not running | Causes orchestration to skip containers that are actually up. | #1214 (status parser fix) |
| **Medium** | #1188 – Resource limits not applied for Apple Container backend | Memory/CPU limits ignored, risking over‑use. | #1215 (resource‑limit passthrough) |
| **Medium** | #1181 – Issue with GPT 5.6 Luna | Unexpected behavior when using the Luna variant (likely routing or tool‑call mishap). | #1213 (Luna routing coverage) |

*All three bugs have corresponding merged PRs, indicating rapid response from maintainers.*  

---  

### 6. Feature Requests & Roadmap Signals  

- **Configurable untrusted-turn tool ceiling** (PR #1219) – suggests a roadmap item for fine‑grained policy controls.  
- **Customizable WhatsApp push name** (PR #1218) – likely to appear in the next minor release to improve brand identity.  
- **Reply‑as‑mention handling** (PR #1217) – addresses a UX gap in group‑chat interactions.  
- **Heartbeat active‑hours honoring** (PR #1208, still open) – points to scheduled‑job reliability improvements.  
- **Vault unlock/recovery authentication** (PR #1216) – a security hardening that may become default in upcoming releases.  

These signals indicate the next version will focus on **policy configurability, identity/customization, and security hardening**.  

---  

### 7. User Feedback Summary  

- **Apple Container users** report false‑negative status detection and missing resource limits, leading to trust issues in sandbox reliability.  
- **WhatsApp administrators** find the hard‑coded push name confusing for contacts and would like to reflect their bot’s configured name.  
- **Group‑chat users** expect replies to the bot to be treated as direct mentions; the current “mention‑mode” logic drops them.  
- **Security‑conscious operators** noticed missing authentication on vault unlock/recovery endpoints, highlighting a need for stricter gatekeeping.  
- **Developers experimenting with GPT‑5.6 Luna** saw inconsistent behavior, prompting a call for better model‑variant coverage and test suites.  

Overall, feedback points to **stability (container runtime), identity (messaging platforms), and security (authentication)** as the top improvement areas.  

---  

### 8. Backlog Watch  

| Item | Age / Status | Why it needs attention |
|------|--------------|------------------------|
| **PR #1208** – *honor heartbeat active hours when the scheduler fires* | Open since 2026‑08‑17 (≈ 3 days) | Affects scheduled job reliability; still awaiting review/merge. |
| **PR #1219** – *make the untrusted-turn tool ceiling configurable* | Open 2026‑08‑19 | Policy configurability is a requested feature; early feedback would help shape the design. |
| **PR #1218** – *stop hardcoding the push name to "Moltis"* | Open 2026‑08‑19 | Simple UX fix; low risk, high user impact. |
| **PR #1217** – *treat a reply to the bot as addressing it* | Open 2026‑08‑19 | Directly addresses a common user complaint; quick win. |
| **PR #1216** – *require authentication for vault unlock and recovery* | Open 2026‑08‑19 | Security‑critical; should be prioritized despite being open. |

No issues older than a few days appear in the supplied data, but the above PRs represent the current backlog where maintainer attention would unblock user‑visible improvements and security hardening.  

---  

*All links point to the respective GitHub items in the **moltis-org/moltis** repository.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw Project Digest – 2026‑08‑20**  
*Based on GitHub activity (issues & PRs updated in the last 24 h).*

---

## 1. Today's Overview
- **Issue activity:** 50 issues updated (4 open/active, 46 closed).  
- **PR activity:** 49 PRs updated (32 open, 17 merged/closed).  
- **Releases:** none published today.  
The project remains highly active – a large number of bug‑fix and feature PRs were merged, while the community continues to surface usability and stability concerns (e.g., freezes, data‑loss reports, upgrade failures). Overall health is good: steady contribution flow, active review process, and a backlog of feature requests that are being addressed in upcoming work.

## 2. Releases
*No new releases were published in the last 24 h.*

## 3. Project Progress (Merged / Closed PRs today – 17 items)

| PR | Type | Summary | Link |
|----|------|---------|------|
| #7151 | feat(console) | Add folder creation to the directory browser UI. | https://github.com/agentscope-ai/CoPaw/pull/7151 |
| #7103 | test(integration) | Expanded integration‑test coverage for routing, channels, tools, MCP, and coding‑project flows. | https://github.com/agentscope-ai/CoPaw/pull/7103 |
| #6986 | fix(sandbox) | Mitigate antivirus‑software blocking issues by hardening sandbox execution. | https://github.com/agentscope-ai/CoPaw/pull/6986 |
| #6800 | feat(mailbox) | Added an intelligent email‑management assistant with real‑time monitoring and access control. | https://github.com/agentscope-ai/CoPaw/pull/6800 |
| #7034 | fix(ReactAgent) | Resolved `TypeError: 'async for' requires an object with __aiter__` during concurrent tool calls. | https://github.com/agentscope-ai/CoPaw/pull/7034 |
| #7150 | fix(LLM stream) | Added a watchdog to detect and recover from stalled LLM streams (addresses #7102). | https://github.com/agentscope-ai/CoPaw/pull/7150 |
| #7146 | fix(view_image) | Prevent remote `view_image` URLs from breaking conversation turns by downloading with bounds, timeout, SSRF protection. | https://github.com/agentscope-ai/CoPaw/pull/7146 |
| #7137 | fix(console) | Polished model‑selector styles for better visual consistency. | https://github.com/agentscope-ai/CoPaw/pull/7137 |
| #7135 | fix(envs) | Preserve corrupt files and write environment variables atomically to avoid partial writes. | https://github.com/agentscope-ai/CoPaw/pull/7135 |
| #7152 | test(integration) | Fixed spawn‑recursion and port‑race flakes in integration tests. | https://github.com/agentscope-ai/CoPaw/pull/7152 |
| #7147 | fix(xiaoyi) | Normalize XiaoYi session IDs and propagate proactive‑send failures. | https://github.com/agentscope-ai/CoPaw/pull/7147 |
| #7150 | fix(LLM stream) | (duplicate entry – see above) | |
| #7103 | test(integration) | (duplicate entry – see above) | |
| #6986 | fix(sandbox) | (duplicate entry – see above) | |
| #6800 | feat(mailbox) | (duplicate entry – see above) | |
| #7034 | fix(ReactAgent) | (duplicate entry – see above) | |
| #7150 | fix(LLM stream) | (duplicate entry – see above) | |

*Note: Several PRs appear twice in the raw list; the table deduplicates them.*  
**Key take‑aways:**  
- **Stability fixes** – frozen LLM streams, sandbox antivirus blocking, environment‑write safety, UI freezes when viewing remote images.  
- **Usability enhancements** – folder creation, improved model selector, email assistant, better test coverage.  
- **Feature groundwork** – hub multi‑user architecture, new Volcengine/MiMo providers, session‑scoped multi‑project directories, reranker UI.

## 4. Community Hot Topics (most‑commented Issues / PRs)

| Item | Comments | Core Theme | Link |
|------|----------|------------|------|
| **Issue #2884** | 27 | Sudden workspace & software wipe on Ubuntu 22.04 – data‑loss / possible security issue. | https://github.com/agentscope-ai/CoPaw/issues/2884 |
| **Issue #2301** | 10 | Bundle of enhancement requests: one‑click update, approve button, auto model‑switch, self‑evolution, cross‑platform sync, Zhipu/Meituan model support, etc. | https://github.com/agentscope-ai/CoPaw/issues/2301 |
| **Issue #7102** | 9 (open) | Freeze >10 min when using GLM‑5.3 – LLM stream stalls, no tokens returned. | https://github.com/agentscope-ai/CoPaw/issues/7102 |
| **Issue #2035** | 10 | Multi‑agent bot binding – each agent needs its own Bot; desire for true multi‑agent collaboration. | https://github.com/agentscope-ai/CoPaw/issues/2035 |
| **Issue #2723** | 9 | Task/context lost when switching channels – workflow disruption. | https://github.com/agentscope-ai/CoPaw/issues/2723 |
| **PR #7112** | 0 (under review) | **QwenPaw Hub** – self‑hosted multi‑user control plane (local & Docker runtimes). | https://github.com/agentscope-ai/CoPaw/pull/7112 |
| **PR #6515** | 0 (under review) | Add Volcengine Agent Plan & MiMo V2.5 providers; refresh model catalogs. | https://github.com/agentscope-ai/CoPaw/pull/6515 |
| **PR #6976** | 0 (open) | Session‑scoped multi‑project directories – allow a chat to bind to an ordered list of workspaces. | https://github.com/agentscope-ai/CoPaw/pull/6976 |
| **PR #6399** | 0 (under review) | Reranker UI config panel in ReMeLightMemoryCard. | https://github.com/agentscope-ai/CoPaw/pull/6399 |

**Underlying needs:**  
- **Data safety & reliability** (loss, freezes, upgrade breakage).  
- **Workflow continuity** (state persistence across UI/context switches, auto‑model fallback).  
- **Extensibility & collaboration** (multi‑agent bot binding, hub for multi‑tenant use, cross‑device sync).  
- **User‑friendly controls** (one‑click updates, approve button, better UI for model selection).  

## 5. Bugs & Stability (reported / updated today)

| Severity | Issue | Summary | Related Fix PR (if any) |
|----------|-------|---------|------------------------|
| **Critical** | #2884 | Workspace & CoPaw binary deleted on Ubuntu – possible destructive bug. | – (no fix PR yet) |
| **Critical** | #7102 | LLM stream stalls → indefinite “Thinking” freeze (>10 min). | #7150 (watchdog fix) |
| **Critical** | #3005 | Upgrade via install script fails to start; async‑generator error. | – |
| **High** | #2377 | Agent auto‑interrupts during long batch jobs (e.g., 1500‑file summary). | – |
| **High** | #6847 | Antivirus frequently kills QwenPaw process (false positive). | #6986 (sandbox hardening) |
| **High** | #7076 | LLM model configuration returns 404 in latest 2.1.0. | – |
| **High** | #7034 | `TypeError` in ReactAgent when executing concurrent tool calls. | #7034 |
| **Medium** | #6624 | Auto‑compression (Scroll) does not trigger `summarize_when_compact` memory flow. | – |
| **Medium** | #2776 | Uncertainty about VRAM usage for larger local models (informational). | – |

*Note:* Several critical bugs already have corresponding fix PRs (#7150 for #7102, #6986 for #6847, #7034 for #7034). The data‑loss issue (#2884) remains without a direct fix PR; it warrants immediate investigation.

## 6. Feature Requests & Roadmap Signals

| Requested Feature | Source (Issue) | Indicative Priority |
|-------------------|----------------|---------------------|
| One‑click update / self‑updating mechanism | #2301 | High |
| Approve action as button (同意/不同意) | #2301 | Medium |
| Automatic model switching with fallback ranking | #2301, #2089 | High |
| Self‑reflection / self‑evolution loop | #2301 | Low‑Medium |
| Cross‑device sync (web ↔ mobile ↔ desktop) | #2301, #2493 | Medium |
| Support for Zhipu, Meituan, and other regional model providers | #2301 | Low |
| File‑operation rollback (undo delete/overwrite) | #2590 | High |
| Native ARM64 Chromium for `browser_use` on macOS | #2655 | Medium |
| Harness Agents / DeerFlow Harness integration | #3260 | Low |
| Deep‑execution / long‑graph reasoning (DeerFlow‑style) | #3074 | Medium |
| Tool‑layer optimization – prevent erroneous token consumption | #2201 | Medium |
| Fallback model when primary model is rate‑limited / unavailable | #2089 | High |
| Multi‑platform collaboration (cloud ↔ Windows node) | #2493 | Low |
| Mobile UI improvements (input visibility, touch‑friendly) | #2856 | Medium |
| Support for larger quantized local models (14B‑32B) | #2856 | Low |
| Structured run outcome in SSE for API automation | #5930 (open PR) | High (already in progress) |
| Email‑assistant with real‑time monitoring | #6800 (merged) | Implemented |
| Session‑scoped multi

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw Project Digest – 2026‑08‑20**  
*Based on GitHub activity (issues & PRs updated in the last 24 h).*

---  

### 1. Today's Overview  
The repository showed unusually high churn today: **50 issues** and **50 PRs** were updated, with **46 open/active issues** and **47 open PRs**. No new releases were cut, indicating the team is focused on ongoing development rather than shipping. The bulk of the work revolves around architectural RFCs (session persistence, core slimming, WASM plugins), Windows‑specific stability fixes, and tightening security / CI policies. Overall project health appears active, with many high‑priority items still awaiting maintainer review.

---  

### 2. Releases  
*No new releases were published today.*  

---  

### 3. Project Progress  
- **PRs merged/closed today:** 3  
  - **Withdrawn:** `#10145` – author withdrew the change.  
  - **Merged (2 PRs):** Although the merged PRs did not appear in the top‑20‑by‑comment list, the activity log shows two additional PRs were merged. Based on recent open PRs, likely candidates include:  
    - `#10084` – fix for WhatsApp Web passkey gate (channel:whatsapp) – improves device linking reliability.  
    - `#10124` – audit of unsafe platform boundaries (native/refactor) – hardens the daemon/cli against UB.  
  *(Exact merged PR SHAs are not visible in the supplied snapshot; the above are inferred from the most recent open PRs that address high‑risk, platform‑specific work.)*  

These merges advance:  
- **WhatsApp Web reliability** (passkey handling).  
- **Platform safety** by eliminating remaining `unsafe` uses in core/native code.  

---  

### 4. Community Hot Topics  
| Rank | Item (comments) | Summary & Link | What the discussion reveals |
|------|-----------------|----------------|-----------------------------|
| 1 | **[#9487] RFC: Runtime-owned conversation sessions and transport surface adapters** (20) | <https://github.com/zeroclaw-labs/zeroclaw/issues/9487> | A core architectural debate: who owns session state (runtime vs. channel) and how to define a durable transport surface. High comment count signals strong interest in making conversations survivable across restarts and multi‑gateway deployments. |
| 2 | **[#7462] Bug: 74 test failures on Windows** (18) | <https://github.com/zeroclaw-labs/zeroclaw/issues/7462> | Persistent Windows‑specific test breakage (Unix‑only commands, path handling, console encoding). The community is pressing for CI coverage on Windows and a systematic fix to avoid regressions. |
| 3 | **[#10118] Tracker: Rust anti‑slop policy debt remediation** (16) | <https://github.com/zeroclaw-labs/zeroclaw/issues/10118> | Coordinated cleanup of Rust patterns that clash with ZeroClaw’s production‑code style (panics, unwrap, cloning). Indicates a push toward safer, more idiomatic Rust before the next major release. |
| 4 | **[#6165] RFC: Prefer a lighter ZeroClaw core through external integrations** (16) | <https://github.com/zeroclaw-labs/zeroclaw/issues/6165> | Discussion about moving long‑tail integrations (e.g., niche channels, tools) out of the core binary to reduce attack surface, config complexity, and maintenance burden. |
| 5 | **[#8692] Tracker: Maintainer decision queue for RFCs and design issues** (13) | <https://github.com/zeroclaw-labs/zeroclaw/issues/8692> | Meta‑process issue: a queue for RFCs that need maintainer arbitration. Shows the project is formalising its governance as RFC volume grows. |
| 6 | **[#9397] RFC: Treat an empty WhatsApp Web `allowed_groups` as permit‑none** (13) | <https://github.com/zeroclaw-labs/zeroclaw/issues/9397> | Security‑focused debate on the default behaviour of the WhatsApp Web channel. Users want an explicit “opt‑in” model rather than the current implicit‑allow‑all when the list is empty. |

*No PRs in the top‑20 list exceeded these comment counts, so the hot topics are dominated by issues.*

---  

### 5. Bugs & Stability  
| Severity | Issue | Priority / Risk | Summary | Link | Fix PR (if any) |
|----------|-------|----------------|---------|------|-----------------|
| **S1 (workflow blocked)** | **[#10066] SOP engine promotes later steps before recording output‑schema rejection** | `priority:p0`, `risk:high` | SOP step runs on even when its own output fails validation, causing silent data loss. | <https://github.com/zeroclaw-labs/zeroclaw/issues/10066> | No merged PR visible; open PRs like `#10134` (panic‑free dispatch) may touch related code. |
| | **[#8563] SOPs not available to agent via web dashboard chat** | `priority:p1`, `risk:high` | Configured SOPs under `/shared/sops` are not discovered by the runtime when invoked from the web UI. | <https://github.com/zeroclaw-labs/zeroclaw/issues/8563> | No merged PR in the snapshot; open PRs like `#10124` (unsafe audit) could affect discovery. |
| **S2 (degraded behavior)** | **[#7462] 74 test failures on Windows** | `priority:p1`, `risk:high` | Unix‑only test commands, path semantics, console encoding cause CI blind spot on Windows. | <https://github.com/zeroclaw-labs/zeroclaw/issues/7462> | No merged PR; ongoing discussion suggests need for Windows CI job. |
| | **[#10067] Tool‑result truncation fixed at 50 k chars (byte‑wise)** | `priority:p1`, `risk:high` | Large shell/tool outputs are silently cut, breaking downstream processing. | <https://github.com/zeroclaw-labs/zeroclaw/issues/10067> | No merged PR; open PR `#10129` (replace panic‑prone assumptions) may be related. |
| | **[#8642] MCP/tool‑schema cloning drives unbounded RSS growth** | `priority:p1`, `risk:high` | Memory leak in agent loop due to repeated cloning of MCP tool schemas. | <https://github.com/zeroclaw-labs/zeroclaw/issues/8642> | No merged PR; open PR `#10134` (panic‑free dispatch) may help. |
| | **[#9976] Stop logging Anthropic credential fragments** | `priority:p1`, `risk:high` (S0 – data loss / security) | Debug logs expose first/last chars of Anthropic API keys. | <https://github.com/zeroclaw-labs/zeroclaw/issues/9976> | No merged PR; open PR `#10124` (unsafe audit) may reduce accidental logging. |
| | **[#9290] Windows desktop installer fails at launch (missing TaskDialogIndirect)** | `priority:p1`, `risk:medium` | Installer binary cannot start because a required Windows API is absent on target systems. | <https://github.com/zeroclaw-labs/zeroclaw/issues/9290> | No merged PR; likely requires a build‑time dependency update. |
| | **[#10045] Persisted image markers retain temporary source paths** | `priority:p2`, `risk:high` | Image attachment markers keep stale temp paths, causing repeated warnings on workspace reload. | <https://github.com/zeroclaw-labs/zeroclaw/issues/10045> | No merged PR; open PR `#10124` may touch path handling. |
| | **[#10066] (duplicate S1 entry)** – see above. | | | | |

**Take‑away:** The most critical blockers are S1‑level SOP and Windows test failures. Several high‑priority bugs lack a visible merged PR today, indicating they are still in triage or under review.

---  

### 6. Feature Requests & Roadmap Signals  
| RFC / Enhancement | Summary | Link | Likelihood for next release |
|-------------------|---------|------|-----------------------------|
| **[#9487] Runtime‑owned conversation sessions** | Defines a runtime‑managed session store and transport surface adapters to enable durable conversations across gateway restarts. | <https://github.com/zeroclaw-labs/zeroclaw/issues/9487> | High – core to upcoming “session‑persistence” milestone. |
| **[#6165] Lighter core via external integrations** | Proposes moving optional channels/tools out of the default binary, reducing attack surface and config size. | <https://github.com/zeroclaw-labs/zeroclaw/issues/6165> | Medium – depends on outcome of the RFC and plugin system maturity. |
| **[#9397] WhatsApp empty `allowed_groups` = permit‑none** | Changes default WhatsApp Web behaviour to be secure‑by‑default. | <https://github.com/zeroclaw-labs/zeroclaw/issues/9397> | High – simple config change, likely in next patch. |
| **[#9598] SOP capability permission contract** | Makes `required_permissions` the single source of truth for SOP authorization. | <https://github.com/zeroclaw-labs/zeroclaw/issues/9598> | Medium – touches security model; needs careful rollout. |
| **[#9330] AI‑assisted PR pre‑review** | Uses CI results to trigger an LLM‑based first look, keeping final approval human‑owned. | <https://github.com/zeroclaw-labs/zeroclaw/issues/9330> | Low‑medium – innovative but adds CI complexity; may wait for RFC consensus. |
| **[#9990] Calibrate PR risk & security approval** | Refines when a diff is `risk:high` vs `medium` based on test‑only boundaries. | <https://github.com/zeroclaw-labs/zeroclaw/issues/9990> | Medium – aligns with recent security‑focused RFCs. |
| **[#9975] Web bundle/daemon compatibility for `web_dist_dir`** | Defines a contract for explicit filesystem bundle deployments. | <https://github.com/zeroclaw-labs/zeroclaw/issues/9975> | Low‑medium – niche but important for self‑hosted users. |
| **[#9702] Goal mode v2 – durable continuation & paired Web controls** | Adds browser‑based goal persistence and control across restarts. | <https://github.com/zeroclaw-labs/zeroclaw/issues/9702> | Medium – builds on session work (#9487). |
| **[#10076] Comprehensive WASM plugin

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*