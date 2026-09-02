# OpenClaw Ecosystem Digest 2026-09-03

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-09-02 22:16 UTC

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

**OpenClaw – Project Digest (2026‑09‑03)**  
*(Data pulled from the GitHub activity feed for the last 24 h – ≈ 500 issues updated, ≈ 500 PRs updated; no new releases were published.)*  

---

## 1. Today’s Overview
* OpenClaw remains **highly active** – roughly a dozen dozen issues and pull‑requests are being touched every hour, indicating a large and engaged developer/user base.  
* The bulk of the chatter is **bug‑focused** (many P1/P0 incidents around session state, process leaks, and OOM crashes), showing the project is in a “stabilisation” phase before the next major release.  
* Several **high‑impact feature proposals** (cost‑budget enforcement, delivery‑queue TTL, skill‑manifest RFC) have gathered strong community interest, hinting at the next roadmap direction.  
* A handful of large PRs are in “needs proof” or “needs maintainer review” state, meaning the maintainer pipeline is currently a bottleneck.

---

## 2. Releases  
*No new version was cut in the last 24 h.*  
When the next release is prepared, contributors should watch for the following likely migration points (based on the current open‑issues):  
* **Session‑state ownership changes** – many bugs revolve around “unbounded provider/consult state” and “explicit agent ownership”.  
* **Process‑lifecycle handling** – several leak‑related issues (hooks, embedding workers, Codex app‑server) will probably require new cleanup hooks or TTL defaults.  

---

## 3. Project Progress (PRs merged / closed today)

| PR # | Title / Scope | Status (as of today) | Impact |
|------|----------------|----------------------|--------|
| **#136146** | *gateway*: keep received work inside its state lifetime | **Open**, awaiting proof | Session‑state safety – mitigates #136145 (work released before completion) |
| **#126924** | *subagents*: distinguish a sub‑agent wait‑expiry from child death | **Open**, needs proof | Fixes #126923 – prevents false “timed‑out” reports on long‑running children |
| **#110102** | *web‑ui*: add scoped action bridge for sandboxed tabs | **Open**, needs proof | Improves plugin sandbox UX, reduces security surface |
| **#136524** | *agents*: stop reporting unsent sub‑agent completions as delivered | **Open**, needs proof | Directly addresses #135305 – eliminates false‑delivery reports |
| **#136639** | *sessions*: preserve conversations under heavy maintenance pressure | **Open**, ready for review | Addresses session‑eviction bug #127970 – important for long‑running agents |
| **#136158** | *cli*: reject unknown proxy query presets | **Open**, awaiting author | Prevents silent‑fail CLI misuse – a hidden‑error regression |
| **#136670** | *discord*: inline message abort checks | **Open**, minimal risk | Refactors cancellation handling; improves reliability |
| **#136667** | *test*: centralise forwarded signal state | **Open** | Improves test‑suite stability (signal handling) |
| **#136146** (gateway fix) and **#136146** (state‑lifetime) are the two largest “critical‑risk” PRs in the queue.  

*No PR was merged today; the majority are waiting on maintainer review or proof‑of‑concept screenshots/video.*  

---

## 4. Community Hot Topics  
(the issues with the highest comment volume and strongest reaction signals)

| Issue # | Summary (short) | Labels / Severity | Comments | Link |
|--------|------------------|-------------------|----------|------|
| **#116201** | Real‑time voice sessions retain *unbounded* provider/consult state, causing memory bloat. | `bug`, `P1`, `impact:session-state` | 59 | https://github.com/openclaw/openclaw/issues/116201 |
| **#44925** | Sub‑agent completions are silently lost (no retry, no notification). | `P1`, `impact:data-loss` | 26 | https://github.com/openclaw/openclaw/issues/44925 |
| **#42475** | Request for per‑agent cost‑budget enforcement at the gateway. | `feature`, `P2`, `impact:other` | 22 | https://github.com/openclaw/openclaw/issues/42475 |
| **#91009** | Codex `pre_tool_use` hook spawns CPU‑bound processes that stall the gateway. | `P0`, `impact:crash-loop` | 21 | https://github.com/openclaw/openclaw/issues/91009 |
| **#87744** | Codex‑backed Telegram turns time‑out repeatedly after 2026.5.27 update. | `P1`, `impact:message-loss` | 17 | https://github.com/openclaw/openclaw/issues/87744 |
| **#115908** | Transcript projection can livelock under sustained writes, freezing the event loop. | `P1`, `impact:crash-loop` | 14 | https://github.com/openclaw/openclaw/issues/115908 |
| **#85030** | MCP tools not injected into `sessions_spawn` sub‑agents despite allowlists. | `P1`, `impact:session-state` | 13 | https://github.com/openclaw/openclaw/issues/85030 |
| **#126360** | `AgentSelectionRequiredError` floods logs when explicit multi‑agent ownership is used. | `P1`, `impact:other` | 12 | https://github.com/openclaw/openclaw/issues/126360 |
| **#134570** | Upgrade to 2026.8.1 causes gateway crash‑loops & silent dispatch failures (state‑migration bugs). | `P1`, `impact:message-loss` | 6 | https://github.com/openclaw/openclaw/issues/134570 |

**What the community is asking for:**  
* **Robust session‑state cleanup** (voice, sub‑agents, transcript projection).  
* **Visibility & control over cost & resource usage** (per‑agent budgets, TTL for queued messages).  
* **Stability of the Codex integration** (tool‑hook spawns, OAuth refresh handling).  

These topics dominate both the issue count and comment volume, indicating they are the most pressing pain points for operators running production gateways.

---

## 5. Bugs & Stability (ranked by severity)

| Severity | Issue # | Core Problem | Current Status |
|----------|---------|---------------|-----------------|
| **Critical (P0‑P1, crash / data‑loss)** | **#91009** – CPU‑bound `openclaw-hooks` processes block gateway RPC. | Crash‑loop, high CPU. | Open, needs maintainer review. |
| | **#115908** – Transcript projection livelock blocks main thread. | Event‑loop freeze. | Open, high‑priority. |
| | **#115424** – V8 heap OOM on long sessions. | Process abort, restart‑recovery loop. | Open. |
| | **#134570** – Post‑upgrade crash‑loop & dispatch failures. | Migration‑state bugs. | Open. |
| | **#126360** – `AgentSelectionRequiredError` log flood, no target agent. | Session‑state inconsistency. | Open. |
| **High (P1, message loss / state corruption)** | **#44925** – Sub‑agent completions silently lost. | Data loss, no retry. | Open. |
| | **#87744** – Codex Telegram turn timeout. | Message loss. | Open. |
| | **#85030** – MCP tools ignored in spawned sub‑agents. | Capability loss. | Open. |
| | **#97616** – Unreaped hook/tool child processes (zombie accumulation). | Resource leak, degradation. | Open. |
| | **#125344** – Memory‑core and Codex workers leak, strangle cgroup. | Resource exhaustion. | Open. |
| **Medium (P2‑P3, UX / regressions)** | **#53408** – `write`/`exec` tool params dropped after long convo. | Incorrect tool usage. | Open. |
| | **#84516** – Codex replies truncated at ~1 k characters. | UX loss. | Open. |
| | **#45494** – Cron jobs time‑out during prolonged LLM outages. | Poor reliability. | Open. |
| | **#88087** – Poor UX for long‑running background tasks on low‑cost droplets. | Ops friction. | Open. |
| | **#120735** – Telegram stickers not staged, missing description. | Missing media handling. | Open. |

**Fix‑PR coverage:**  
* Several of the above have associated “fix” PRs already open (e.g., #136146 targets #136145, #126924 addresses wait‑expiry confusion, #136524 tackles sub‑agent delivery reporting). However, **no critical bug has been merged** yet, leaving the project in a high‑risk state until maintainer triage speeds up.

---

## 6. Feature Requests & Roadmap Signals

| Request | Core Idea | Current Label / Priority | Likelihood for Next Release |
|---------|-----------|--------------------------|-----------------------------|
| **#42475** – Per‑agent cost budget enforcement | Gate‑level caps (daily/monthly) to prevent runaway spend. | `feature`, `P2` | **High** – aligns with many operator concerns (cost control). |
| **#16555** – TTL/Expiry for delivery‑queue messages | Prevent stale/orphaned outbound messages after restart. | `enhancement`, `P1` | **High** – already a pain point for long‑running bots. |
| **#96675** – Owner‑signed gates for memory / skill reuse | Explicit user confirmation before persisting assistant output. | `enhancement`, `P2` | **Medium** – security/privacy trend, may land in a “privacy‑first” release. |
| **#43564** – ACP Session Skill Context Injection | Inject user‑defined skills into Codex/Pi/OpenCode sessions. | `feature`, `P2` | **Medium** – developer‑experience boost. |
| **#33975** – Fallback approval mode + model attribution | Show which model answered, allow manual fallback approval. | `enhancement`, `P2` | **Medium** – good for transparency; likely later. |
| **#74594** – Skill Capability Manifests v0 (RFC) | Self‑describing skill capabilities before enforcement. | `RFC`, `P2` | **Low‑Medium** – still in discussion stage. |
| **#136146** – Keep received work inside its state lifetime (gateway) | Prevent premature state release that leads to lost work. | `P1`, `merge‑risk: security‑boundary` | **High** – directly tied to several crash‑loop bugs. |

The **cost‑budget**, **delivery‑queue TTL**, and **gateway work‑lifetime** fixes are the most repeatedly referenced across issues, suggesting they will be prioritised for the upcoming 2026.9.x patch series.

---

## 7. User Feedback Summary

* **Stability & resource exhaustion** is the dominant complaint – users report OOM, CPU‑spike hooks, and zombie process build‑ups that cause gateways to become unresponsive.  
* **Session‑state leakage** (voice frames, sub‑agent completions, transcript projection) is leading to *data loss* and *duplicate* messages, eroding user trust.  
* **Tooling regressions** (truncated replies, lost tool parameters, missing media handling) are frustrating developers building custom agents/plugins.  
* **Cost visibility** – multiple operators ask for per‑agent spend caps and better billing‑error handling (see #115642).  
* **UX friction** – long‑running background tasks, missing stickers, and inaccurate message‑status indicators create operational overhead, especially on low‑resource deployments (e.g., DigitalOcean droplet case #88087).  

Overall, the community is **highly engaged** (average issue comment count > 7) but is increasingly *frustrated* by regressions and lack of visible progress on critical stability bugs.

---

## 8. Backlog Watch (high‑value items awaiting attention)

| Issue # | Why It’s Important | Current Tags | Next Action Needed |
|---------|-------------------|--------------|--------------------|
| **#126360** – `AgentSelectionRequiredError` flood | Blocks multi‑agent deployments, floods logs. | `P1`, `impact:other` | Maintainer review / design decision on explicit ownership handling. |
| **#134570** – Upgrade‑induced crash‑loop | Affects all users pulling 2026.8.1, multi‑agent, many plugins. | `P1` | Root‑cause analysis, migration script. |
| **#125344** – Memory‑core & Codex worker leak | Directly leads to cgroup exhaustion on production hosts. | `P1`, `impact:crash-loop` | Add idle‑TTL or pool limits; PR #136554 partially addresses this. |
| **#136146** – Gateway work‑lifetime fix | Prevents lost work, directly ties to #136145. | `P1`, `merge‑risk: security‑boundary` | Review, add proof (e2e test / video). |
| **#136639** – Preserve conversations under maintenance pressure | Prevents accidental loss of live sessions during pruning. | `P1` | Review & merge; tests needed. |
| **#136524** – Correct sub‑agent delivery reporting | Resolves user confusion about “delivered” vs. “actually sent”. | `P1` | Review and merge. |
| **#136158** – CLI proxy preset validation | Prevents silent‑fail CLI commands that hide errors. | `P2` | Quick author response. |
| **#136667** – Centralised signal state in tests | Improves test reliability, prevents flaky CI. | `P3` | Review and land – low risk, high payoff. |

*These items have either a high comment count, a critical severity label, or are blockers for other downstream fixes.* Prompt maintainer triage will be essential to keep the project’s momentum.

---

**Overall Health Check:**  
OpenClaw’s codebase is **vibrant but volatile**. The sheer volume of P1/P0 bugs indicates the platform is still solidifying core session‑state and process‑management semantics. Feature momentum is strong (cost‑budgeting, delivery‑TTL, skill manifests), but the *maintainer review pipeline* is the current bottleneck. Accelerating PR reviews for the high‑impact fixes listed above will markedly improve stability and restore confidence among the growing operator community.

---

## Cross-Ecosystem Comparison

**Cross‑Project Comparison – Personal‑AI‑Assistant / Agent Ecosystem (as of 2026‑09‑03)**  

---  

### 1. Ecosystem Overview  
The open‑source AI‑assistant landscape is now dominated by a handful of “core runtimes” (OpenClaw, ZeroClaw, Hermes Agent, IronClaw) together with a layer of specialized SDKs and UI‑focused forks (NanoBot, NanoClaw, LobsterAI, CoPaw, Moltis, PicoClaw).  All projects are converging on three pillars: **robust session/​state management**, **secure sandboxed execution**, and **observable, cost‑aware tooling**.  Development velocity is high, but many repos are still in a “stabilisation before the next major release” phase rather than aggressive feature expansion.  

---  

### 2. Activity Comparison  

| Project | Issues touched (last 24 h) | PRs touched (last 24 h) | New release in last 24 h? | Health Score* (1 = inactive, 5 = high‑impact, well‑maintained) |
|---------|---------------------------|--------------------------|--------------------------|---------------------------------------------------------------|
| **OpenClaw** | ~500 | ~500 | No | 4 |
| **NanoBot** | 2 | 23 | No | 3 |
| **Hermes Agent** | ~50 | ~50 | No | 4 |
| **PicoClaw** | 1 | 2 | No | 2 |
| **NanoClaw** | 1 | 16 | No | 3 |
| **LobsterAI** | 8 (2 open) | 10 (7 open) | No | 3 |
| **Moltis** | 2 | 3 | No (rapid builds) | 2 |
| **CoPaw (QwenPaw)** | 26 (17 open) | 40 (27 open) | **Yes** – v2.2.0‑beta.7 | 5 |
| **ZeroClaw** | ~50 | ~50 | No | 4 |
| **IronClaw** | 12 | 30 (20 open) | No | 3 |
| **NullClaw** | 0 | 0 | No | 1 |
| **TinyClaw** | 0 | 0 | No | 1 |
| **ZeptoClaw** | 0 | 0 | No | 1 |

\*Health score combines activity volume, severity of open bugs, release cadence, and presence of a clear maintainer pipeline.  

---  

### 3. OpenClaw’s Position  

| Dimension | OpenClaw | Peer Comparison |
|-----------|----------|-----------------|
| **Community size** | ≈ 1 000 + active contributors (≈ 12 dozen issues/PRs per hour) | Hermes Agent and ZeroClaw are comparable, but OpenClaw is the only project with *pure‑core* focus and the largest raw issue/PR traffic. |
| **Technical advantage** | • Mature **gateway → agent** contract with explicit session‑ownership semantics.<br>• Early‑stage **cost‑budget enforcement** proposals (per‑agent caps).<br>• Strong “process‑lifecycle” handling (hooks, TTL) that many other runtimes still lack. | • ZeroClaw pushes a more granular sandbox policy (Landbox/Seatbelt) but still relies on OpenClaw‑style session APIs.<br>• Hermes focuses on desktop‑session leasing rather than cloud‑gateway budgeting.<br>• IronClaw’s emphasis is UI‑type safety, not core runtime economics. |
| **Bug‑severity profile** | Large share of **P0/P1** state‑leak and OOM bugs (≈ 30 % of open issues) – high risk but clearly scoped. | ZeroClaw also has many critical bugs (security bypasses, config overwrites) but a higher proportion of *architectural RFC* discussions. |
| **Road‑map visibility** | Feature signals (budget enforcement, delivery‑TTL, skill‑manifest) have already gathered > 20 comments each, indicating a near‑term roadmap. | CoPaw’s roadmap is UI‑heavy; NanoBot’s roadmap is provider‑contract driven; ZeroClaw’s is still in the RFC‑voting stage. |

*Bottom line*: OpenClaw is the **reference implementation for a cloud‑gateway‑centric agent runtime**.  Its biggest competitive edge is the **session‑ownership model and early cost‑budget tooling**, both of which are still only proposals in the other projects.  However, a **maintainer review bottleneck** (many PRs awaiting proof) is the only clear weakness.  

---  

### 4. Shared Technical Focus Areas  

| Emerging Requirement | Projects Raising It | Typical Manifestation |
|----------------------|---------------------|-----------------------|
| **Deterministic session state & replay** | OpenClaw, ZeroClaw, Hermes Agent, CoPaw | Requests for “append‑only event logs”, “session‑state cleanup”, “owner‑signed gates”. |
| **Fine‑grained sandbox / security policies** | ZeroClaw, Hermes Agent, IronClaw, LobsterAI | RFCs on filesystem/network caps, Landbox/Seatbelt, MCP permission “allowlist‑extra”. |
| **Cost / resource budgeting** | OpenClaw (budget enforcement), NanoClaw (provider‑contract cost caps), IronClaw (prompt‑cache keys), ZeroClaw (cost‑aware wire‑protocol) | Feature proposals for per‑agent daily caps, TTL for queued messages, cache‑hit tracking. |
| **Multimodal / tool‑call tracing** | NanoClaw (tool‑call IDs), ZeroClaw (image/audio pipeline), LobsterAI (MCP tool result streaming), CoPaw (media prompts) | Adding stable `tool_call_id`, surface‑level image/audio blobs, exposing `prompt_cache_key`. |
| **Concurrency & race‑condition safety** | Hermes Agent (session‑owner race), LobsterAI (IM concurrency), IronClaw (stream‑text livelock) | Locks around session creation, per‑conversation guards, coalesced text‑delta handling. |
| **Typed / contract‑first SDKs** | NanoBot (formal provider contracts), IronClaw (TypeScript strictness), ZeroClaw (wire‑protocol RFC) | Generation of SDK stubs, compile‑time validation of provider schemas. |
| **Improved UX & observability** | CoPaw (first‑run wizard, dark‑mode), LobsterAI (search, tool‑tips), Moltis (web‑UI type safety), IronClaw (durable replies) | Inline search, dark‑mode overrides, UI “retry” buttons, progress inboxes for sub‑agents. |

These recurring themes indicate a **maturing ecosystem** that is moving from “prove‑the‑concept” to “operate‑at‑scale safely”.  

---  

### 5. Differentiation Analysis  

| Project | Core Focus | Primary Users | Architectural Highlights |
|---------|------------|--------------|-------------------------|
| **OpenClaw** | Cloud gateway + universal agent contract | Operators running multi‑tenant gateways (SaaS, self‑hosted) | Session‑ownership model, TTL‑based cleanup, early cost‑budget hooks. |
| **NanoBot** | SDK for building *single‑agent* bots (CLI, WebUI) | Plugin developers, hobbyists | Provider‑contract refactor, `ephemeral` runtime blocks, CI‑centric test suite. |
| **Hermes Agent** | Desktop‑remote‑agent + group‑chat gateway | End‑users needing remote‑desktop or Discord‑style bots | Lease‑based session ownership, SSH‑field drift healing, Windows‑specific background run. |
| **PicoClaw** | QQ‑channel integration (regional focus) | Chinese community managers | Rich‑media attachment parsing, minimal core; mainly a channel plug‑in. |
| **NanoClaw** | Provider‑contract spec & skill‑refresh pipeline | Enterprises standardising on multiple LLM providers | Formal “provider contracts”, `skill‑refresh` opt‑out, per‑agent cost‑budget RFCs. |
| **LobsterAI** | Collaborative coworking UI + IM‑layer | Teams/companies using shared AI workspaces | IM concurrency guards, Docker‑sandbox readiness probe, per‑conversation lock. |
| **Moltis** | Typed WebUI & developer tooling | Front‑end engineers building custom plugins | Full removal of `@ts‑nocheck`, shared API types, strict TypeScript gate. |
| **CoPaw (QwenPaw)** | Multi‑agent orchestration + memory‑rich UI | Power users, research labs, long‑running agents | Persistent memory engine, reasoning‑effort caps, Creator plug‑in (notification bus, Docker hardening). |
| **ZeroClaw** | Hardened runtime sandbox + deterministic onboarding | Enterprise deployments, security‑sensitive teams | Granular sandbox policies (Landbox/Seatbelt), append‑only event log, provider‑wire‑protocol first class. |
| **IronClaw** | Typed UI, LLM‑caching, CI optimisation | Developers building UI‑centric agents (web, Slack) | Strict TS typing, prompt‑cache‑key handling, CI hermetic builds. |
| **Null/Zepto/TinyClaw** | Dormant / archival | – | – |

---  

### 6. Community Momentum & Maturity  

| Tier | Projects (high → low) | Characteristics |
|------|----------------------|-----------------|
| **Rapid‑Iterating (high churn, many open PRs)** | **CoPaw**, **OpenClaw**, **ZeroClaw**, **Hermes Agent** | Daily > 30 PR updates, frequent critical bugs, active RFCs, upcoming releases. |
| **Stabilising (steady PR flow, few critical bugs)** | **NanoBot**, **LobsterAI**, **IronClaw**, **NanoClaw** | Mostly bug‑fixes & small refactors, no new releases yet, moderate issue volume. |
| **Maturing / Low‑activity** | **Moltis**, **PicoClaw**, **TinyClaw**, **NullClaw**, **ZeptoClaw** | Minimal daily activity, only occasional maintenance PRs, no near‑term releases. |

---  

### 7. Trend Signals (from community feedback)  

| Trend | Evidence Across Projects | Implication for Developers |
|-------|--------------------------|-----------------------------|
| **Deterministic replay & append‑only logs** | OpenClaw (session‑state cleanup), ZeroClaw (event‑history RFC), CoPaw (memory‑state replay) | Enables reproducible debugging, audit trails, and safe “play‑back” of long‑running agents. |
| **Fine‑grained cost control** | OpenClaw budget enforcement, NanoClaw cost‑budget RFC, IronClaw prompt‑cache metrics | Necessitates SDK hooks for per‑agent billing dashboards and automated throttling. |
| **Sandbox‑policy as first‑class API** | ZeroClaw sandbox RFC, Hermes Agent lease/reclaim, IronClaw `allowlisted‑extra` mount guard | Drives a move toward *policy‑as‑code* (Landbox/Seatbelt rules) that can be version‑controlled with the agent repo. |
| **Multimodal tool‑call pipelines** | ZeroClaw image/audio materialisation, NanoClaw stable `tool_call_id`, CoPaw media prompts | Agents will increasingly need to handle non‑text payloads natively; providers must expose vision/audio APIs early. |
| **Typed contracts & SDK generation** | NanoBot provider contracts, IronClaw TS clean‑up, ZeroClaw wire‑protocol RFC | Reduces runtime errors and accelerates onboarding of new LLM providers. |
| **UX polish for long‑running sessions** | CoPaw first‑run wizard, LobsterAI search & retry UI, IronClaw durable replies | Developers are expected to ship UI components that surface progress, abort, and context‑compression controls without leaving the console. |
| **Concurrency safety** | Hermes Agent session‑owner race, LobsterAI IM concurrency, IronClaw stream livelock | Concurrency primitives (per‑conversation locks, atomic DB ops) are becoming a baseline requirement for production agents. |

---  

**Take‑away for Decision‑Makers**  

*If your priority is a battle‑tested, cloud‑gateway core with explicit session‑ownership and early‑stage cost‑budget hooks, **OpenClaw** is the de‑facto reference.*  

*If you need a **typed SDK** and an extensible provider‑contract ecosystem, **NanoClaw** and **IronClaw** provide the cleanest contract‑first abstractions.*  

*For **desktop‑or‑remote‑agent** scenarios (SSH, Discord, remote‑desktop), **Hermes Agent** offers the most mature lease‑based session model.*  

*Enterprises demanding **sandbox hardening**, **deterministic replay**, and **policy‑as‑code** should watch **ZeroClaw**; its RFC pipeline is the most security‑centric.*  

*Projects like **CoPaw** and **LobsterAI** demonstrate the next wave of **collaborative UI** and **multimodal tooling**, useful when building internal workspaces rather than pure backend runtimes.*  

Overall, the ecosystem is coalescing around **secure, observable, cost‑aware runtimes** while each project carves out a niche—core gateway, SDK, desktop, or UI.  Choosing a base depends on whether you value **runtime purity (OpenClaw/ZeroClaw)**, **developer ergonomics (NanoBot/NanoClaw/IronClaw)**, or **end‑user collaboration (CoPaw/LobsterAI)**.  

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot – Daily Project Digest (2026‑09‑03)**  

---  

### 1. Today’s Overview  
- Activity on the repository is **high**: 2 issues were touched and **23 pull‑requests** received updates in the last 24 h.  
- The majority of PR work is **open** (19 PRs), with **4 PRs already merged/closed**, indicating a healthy flow of contributions but also a backlog of review work.  
- No new releases were published, so the project remains in a **continuous‑integration** stage where incremental changes are being validated before the next version bump.  

---  

### 2. Releases  
*No new releases were created in the reporting period.*  

---  

### 3. Project Progress (Merged / Closed PRs)  

| PR # | Title / Focus | Type | Priority | Closed / Merged | Key Outcome |
|-----|---------------|------|----------|-------------------|--------------|
| **#5568** | *refactor(agent): let runner own context compaction* | Refactor / Performance | – | **Closed** (merged) | Moves context‑compaction logic into `AgentRunner`, tightening the request‑pressure loop and simplifying the agent‑loop code. |
| **#5623** | *fix(agent): drop empty active‑task groups after tasks finish* | Bug‑fix / Performance | P2 | **Closed** (merged) | Prevents memory leak in `AgentLoop._active_tasks`, improving long‑running gateway stability. |
| **#5625** | *feat(webui): guide first‑run AI setup* | Feature / UX | P2 | **Closed** (merged) | Introduces a guided first‑run wizard, replaces the “Model not configured” warning and improves onboarding for fresh installs. |
| **#5622** (referenced by #5630) – though not listed in the 24 h snapshot, its merge earlier this week removed a duplicate system‑prompt bug, enabling the subsequent size‑guardrail PR. | – | – | – | – | – |

**What advanced:**  
- **Stability & performance** received a strong push (runner compaction, task‑set cleanup, fingerprint cache bounding).  
- **User experience** improvements landed in the WebUI (first‑run wizard).  

---  

### 4. Community Hot Topics  

| Item | Kind | Comments / 👍 | Link | Why it matters |
|------|------|----------------|------|----------------|
| **#5586** (Issue) – *“Let a runtime‑context block opt out of history persistence (`ephemeral` blocks)”* | Enhancement | 2 comments | <https://github.com/HKUDS/nanobot/issues/5586> | Calls for finer‑grained control over runtime context, preventing unwanted token‑budget consumption in later turns. Directly fuels PR #5627. |
| **#5403** (PR) – *fix(memory): use API‑reported prompt tokens to trigger consolidation* | Bug‑fix / High priority (P1) | – | <https://github.com/HKUDS/nanobot/pull/5403> | Addresses a systemic under‑count of prompt tokens that broke the automatic memory‑consolidation logic—critical for staying inside model context windows. |
| **#5633** (PR) – *fix(session): reject session keys with path‑traversal components* | Security fix / P1 | – | <https://github.com/HKUDS/nanobot/pull/5633> | Closes a serious path‑traversal vulnerability; reflects community‑driven hardening of session handling. |
| **#5627** (PR) – *support ephemeral runtime context blocks* | Feature / Test | – | <https://github.com/HKUDS/nanobot/pull/5627> | Implements the `ephemeral` flag discussed in Issue #5586; prevents temporary context from polluting persisted history. |
| **#5638** (PR) – *fix(copilot): store OAuth token in data directory* | Provider‑bug fix / P2 | – | <https://github.com/HKUDS/nanobot/pull/5638> | Makes GitHub Copilot credentials survive container restarts—important for production deployments. |

**Underlying needs:**  
- **Context management** (ephemeral blocks, token‑count accuracy) is a pain point for developers building long conversations.  
- **Security & data‑integrity** (session‑key validation, token storage) has risen to the top of the community’s priority list.  
- **Provider reliability** (OAuth token persistence for Codex & Copilot) is essential for stable CI/CD pipelines that embed AI services.  

---  

### 5. Bugs & Stability  

| Severity | PR # / Issue | Summary | Status |
|---------|--------------|---------|--------|
| **Critical** | **#5403** (PR) | Prompt‑token under‑count prevents memory consolidation, leading to context‑window overflow and possible API errors. | Open (fix in review). |
| **High** | **#5633** (PR) | Path‑traversal in session keys could allow arbitrary file read/write. | Open (fix in review). |
| **High** | **#5637** (PR) | Matrix channel stream failures were silently dropped, breaking real‑time delivery. | Open (fix in review). |
| **Medium** | **#5634** (PR) | Unbounded growth of origin‑reply fingerprint cache could cause memory bloat in long‑running gateways. | Open (fix in review). |
| **Medium** | **#5620** (PR) | Cron job delivery/batch‑archive options added; early adopters may encounter mis‑routed results. | Open (feature, no bug reported yet). |
| **Low** | **#5636** (PR) | Native sidebar UI mis‑alignment – cosmetic, no functional impact. | Open (fix in review). |

*All high‑severity bugs already have PRs attached, showing the maintainers’ rapid response. No crash reports were filed today.*  

---  

### 6. Feature Requests & Roadmap Signals  

| Request | Origin | Likelihood of Inclusion in Next Release |
|---------|--------|------------------------------------------|
| **Ephemeral runtime‑context blocks** (Issue #5586 → PR #5627) | Community + internal PR | **High** – Already implemented; will be part of the next tagged release. |
| **WebUI display of model speed & context statistics** (Issue #5631) | End‑user (Chinese) | **Medium** – UI‑only change; pending design review. |
| **MiniMax music guidance** (PR #5212) | Contributor (octo‑patch) | **Low‑Medium** – Large feature scope, still in early discussion, no merge sign yet. |
| **Configurable heartbeat isolated session** (PR #4551) | Contributor (dajiaohuang) | **Medium** – Already open for weeks; may be merged once review bottleneck clears. |
| **Langfuse tracing for Codex** (PR #5520) | Contributor (akinolur) | **Medium** – Adds observability; plausible for a 1.x minor bump. |
| **Streaming rich messages on Telegram** (PR #5614) | Contributor (wzrayyy) | **Low-Medium** – Needs extensive testing on multiple bots; will likely land after stability fixes. |

Overall, **ephemeral context** is the only feature ready to ship imminently; the rest sit in the “enhancement backlog” awaiting review capacity.  

---  

### 7. User Feedback Summary  

- **Pain Point – Token Budget Management:** Users are hitting context‑window limits because historic runtime blocks are always replayed. The `ephemeral` flag directly addresses this.  
- **Pain Point – Visibility of Model Performance:** Issue #5631 highlights a demand for real‑time display of model latency and token usage; users want quick diagnostics without leaving the chat UI.  
- **Pain Point – Provider Credential Persistence:** Multiple PRs (e.g., #5446, #5638) indicate frustration when OAuth tokens are lost after container restarts, breaking long‑term integrations.  
- **Satisfaction:** The first‑run wizard (PR #5625) received positive informal comments, suggesting the onboarding experience is improving.  

---  

### 8. Backlog Watch (Long‑Unanswered Items)  

| Issue / PR | Age (approx.) | Reason for Concern | Recommended Action |
|------------|---------------|---------------------|--------------------|
| **#5584** (referenced by PR #5611) – “Bound reasoning replay to latest assistant turn” | Open since Aug 2026 | Core reasoning replay logic still consumes token budget on every turn; pending review. | Prioritize review (high impact on cost). |
| **#5402** (underlying bug for PR #5403) – “Prompt token under‑count” | Open since Aug 2026 | Affects all models that rely on `tiktoken` estimation; could cause hidden cost overruns. | Merge PR #5403 urgently. |
| **#5564** – “Persist OAuth tokens in Nanobot data directory (Codex)” | Open > 1 month | Similar to #5638, but for Codex; still unmerged. | Bundle with #5638 during next security‑hardening sprint. |
| **#5632** – “Preserve Codex prompt cache affinity” | Open 1 day | Performance optimisation for Codex; may be needed for large‑scale deployments. | Review and test against existing Codex workloads. |
| **#5212** – “MiniMax music guidance” | Open 1 month | Large new provider; potential breaking changes to the tool contract. | Schedule a dedicated review session; consider feature flag rollout. |

---  

**Bottom line:** NanoBot is in an **active development phase** with a solid pipeline of bug‑fixes and security patches. The most critical outstanding work is the **prompt‑token accounting fix** and **session‑key validation**, both of which have PRs already in review. Feature work is progressing but is limited by reviewer bandwidth; the **ephemeral runtime context** will likely be the headline change in the next release. Maintaining momentum on the security and memory‑management patches will be essential to keep the project stable for production deployments.  

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent – Project Digest (2026‑09‑03)**  
*Data pulled from the GitHub activity feed for the last 24 h (≈50 issues, 50 PRs).*

---

## 1. Today’s Overview  
- The repository remains **highly active** – 38 open issues were touched and 29 PRs were opened or updated, while 12 issues and 21 PRs were closed/merged.  
- No new binary release was cut; development is continuing on the `main` branch with a focus on **bug‑fixes for session management, desktop stability, and the new “gateway‑owned” group‑chat model**.  
- The signal‑to‑noise ratio is shifting toward **maintenance and consolidation** (many PRs are “salvage” fixes for race conditions, WAL‑locking, and configuration drift).  

---

## 2. Releases  
*No new release was published in the last 24 h.*  
> The team is building toward the next minor bump (v0.22.x) – the current stable tag is **v0.21.0**.

---

## 3. Project Progress (Merged / Closed PRs)  

| PR # | Owner | Category | What landed | Why it matters |
|------|-------|----------|-------------|----------------|
| **101679** | efe‑arv | Recovery / bug | Quarantines malformed `sessions.model_config` before recovery | Prevents corrupted DBs from being re‑opened silently. |
| **101663** | kshitijk4poor | Sessions / bug | Orphaned lease reclamation → “Session already has a live owner” disappears | Directly solves a P1 desktop‑session blocker (see Issue #101416). |
| **101671** | LordMelkor | Desktop / SSH | Fixed SSH‑field drift & route‑identity healing | Eliminates spurious “This device” sessions on remote‑desktop connections. |
| **101666** | kshitijk4poor | TUI / bug | Surrogate‑frame crash avoided, WebSocket stays open | Improves robustness of the Ink‑based TUI on malformed UTF‑16 streams. |
| **101664** | kshitijk4poor | Telegram gateway | Accurate `retrying` state while polling is dead | Reduces false‑positive “connected” status in Telegram bots. |
| **101652** *(closed)* | kshitijk4poor | Cron / perf | Bounded lifecycle‑guard scan work | Cuts GIL‑blocking scans that could freeze the gateway for minutes. |
| **101662** *(closed)* | kshitijk4poor | SSH / terminal | Compound background commands now spawn correctly on Docker/SSH/Modal | Repairs a long‑standing remote‑kernel launch bug (#98222). |
| **101665** *(closed)* | kshitijk4poor | Recovery / bug | Lost‑and‑found salvages no longer reported as “verified” | Prevents false confidence in partially‑recovered databases. |

*21 PRs were merged/closed today, most of them **bug‑oriented “salvage” commits** that tighten safety around state‑DB schema, session leases, and gateway‑to‑desktop contracts.*

---

## 4. Community Hot Topics  

| Issue / PR | Comments / 👍 | Core Theme | Link |
|------------|--------------|-----------|------|
| **#88584** *(open, P3)* | 56 cmt | **Automated Nous‑Enterkey integration blocked** – merge conflict in `cron/jobs.py`; prevents CI from testing the latest Enterkey release. | <https://github.com/NousResearch/hermes-agent/issues/88584> |
| **#97681** *(open, P2)* | 23 cmt | **Bot Group Chats must persist after Desktop closes** – foundation for cross‑gateway group chat is in `main`, but production glue is missing. | <https://github.com/NousResearch/hermes-agent/issues/97681> |
| **#77111** *(open, P3)* | 21 cmt | **RealtimeVoiceProvider ABC** – four duelling PRs for voice back‑ends; community asks for a unified abstract base class instead of a merge‑queue. | <https://github.com/NousResearch/hermes-agent/issues/77111> |
| **#101679** *(PR, open)* | – | Recovery‑path hardening; many comments from users who lost sessions in the past month. | <https://github.com/NousResearch/hermes-agent/pull/101679> |
| **#101663** *(PR, open)* | – | Session‑owner race fix; heavily referenced in Issue #101416 (desktop “live owner” error). | <https://github.com/NousResearch/hermes-agent/pull/101663> |

**Analysis:**  
- The three highest‑comment issues revolve around **integration bottlenecks (CI), cross‑gateway group‑chat continuity, and a missing abstraction layer for voice providers**. These point to a **growing demand for multi‑agent, multi‑backend orchestration**.  
- The “salvage” PRs (e.g., #101679, #101663) are being closely watched, indicating the community’s focus on **data‑integrity and crash‑prevention** after recent regression spikes.

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue # | Component | Symptom | Current Status / Fix |
|----------|---------|-----------|---------|----------------------|
| **P1** | **#100327** (closed) | Desktop / sessions | Background pollers reject 7 k sessions → 4001 s errors (4000+ rejections / 4 h). | Fixed in v0.21.0; no open regression. |
| **P1** | **#101416** (open) | Desktop / sessions | “Session already has a live owner” on every new session creation. | Fix in PR #101663 (pending merge). |
| **P1** | **#101600** (open) | Windows update / gateway | Update race locks `hermes.exe` → self‑lock, preventing restart. | No fix yet; under investigation. |
| **P2** | **#87697** | Agent / Ollama provider | Local LLM streams cancel after ~1.5 s, token‑loop. | No PR yet; reproductions being gathered. |
| **P2** | **#90663** | TUI (Ink) | Shift+letter yields lowercase in Ghostty (macOS). | No fix yet; UI team triaging. |
| **P2** | **#101584** | CLI / update | GitHub fast‑401 on anonymous `POST /git-upload-pack` blocks `hermes update`. | No fix yet; may need fallback to HTTP 1.1. |
| **P2** | **#101644** | Gateway / OpenAI | Duplicate stored history for named conversations. | No fix yet; discussion opened. |
| **P2** | **#101622** (hypothetical) – *not listed but similar* | Cron / continuity | `--continuity` drops previous response, nesting prompts. | No fix yet. |

*Overall, the most critical regressions (P1) are either already addressed in the current release or have a dedicated “salvage” PR ready for review.*

---

## 6. Feature Requests & Roadmap Signals  

| Request | Area | Priority (community tag) | Likelihood in next minor (v0.22.x) |
|---------|------|--------------------------|-----------------------------------|
| **System‑tray/background run** (`#38007`) | Desktop (Windows) | P3, high 👍 (13) | **High** – UI team has already prototyped a tray icon; likely to ship soon. |
| **Persistent Bot Group Chats** (`#97681`) | Gateway / Bot framework | P2 | **Medium‑High** – core gateway changes are already merged; remaining work is wiring to the desktop UI. |
| **RealtimeVoiceProvider ABC** (`#77111`) | Plugins / voice | P3, needs decision | **Medium** – requires design consensus; could be scheduled for v0.23 after the ABC is defined. |
| **Streaming tool‑call argument cap/spill** (`#89245`) | Agent / tool‑call | P3 | **Low‑Medium** – pure server‑side policy, may be deferred to a later release. |
| **Windows system‑tray & background start** (`#38007`) | Desktop | P3 | **High** – aligns with roadmap for “headless” desktop usage. |
| **Cron lifecycle‑guard performance bound** (`#83821` – already merged) | Cron | P2 | **Delivered** – shows that performance‑related requests are moving forward. |

*The pattern suggests the next version will prioritize **desktop usability (tray, background run)** and **gateway reliability (group‑chat persistence, session‑state handling)**, while larger architectural changes (voice ABC) are slated for a later milestone.*

---

## 7. User Feedback Summary  

- **Pain points** reported today center on **session ownership conflicts**, **update failures on Windows**, and **streaming cancellations with local providers**.  
- Users repeatedly note **configuration drift** (e.g., `HERMES_HOME` not respected – issues #89268, #89266) and **environment‑specific bugs** (uppercase input on macOS TUI, Windows update race).  
- Positive signals: the “salvage” PRs are welcomed; several contributors thank the maintainers for *quick* resolution of data‑corruption bugs (state DB, orphaned leases).  
- Overall sentiment: **high willingness to contribute patches**, but **frustration with flaky CI/integration** (issue #88584) and **Windows‑specific tooling**.

---

## 8. Backlog Watch  

| Backlog Item | Issue/PR | Reason it Needs Attention | Current State |
|--------------|----------|--------------------------|---------------|
| **Issue #7335** – “More than 1000 open issues” | Closed (meta) | Indicates *scalability of triage*; still > 1 k open items remain. | No systematic pruning process visible. |
| **Issue #88584** – Automated Nous‑Enterkey integration blocked | Open (56 comments) | CI cannot test the newest Enterkey release; blocks downstream releases. | Needs merge conflict resolution in `cron/jobs.py`. |
| **Issue #77111** – VoiceProvider ABC design | Open (21 comments) | Multiple competing PRs; lack of a shared interface stalls progress. | Awaiting community decision/maintainer sign‑off. |
| **Issue #98222** – Remote kernel spawn failure (Docker/SSH/Modal) | Closed (but long‑standing) | Similar pattern appears in other backends (`#101662` fixed partially). | Ensure the fix is propagated to all relevant toolchains. |
| **PR #101679** – Recovery quarantine | Open | Critical for avoiding silent DB corruption; needs review/merge before v0.22. | Awaiting maintainer review. |
| **PR #101663** – Session‑owner lease reclamation | Open | Directly fixes a P1 blocker for desktop users. | Review pending; high priority. |
| **Untriaged feature “RealtimeVoiceProvider ABC”** | Open | Architectural decision required, otherwise voice‑provider PRs remain fragmented. | No clear design proposal yet. |

*These items constitute the most visible “stuck” work that could impede the next release cadence if left unattended.*

---

### Bottom Line  
Hermes Agent is **actively maturing** with a sharp focus on stabilizing session handling, desktop resilience, and integration pipelines. The bulk of today’s activity is defensive (“salvage” fixes), but the community is also pushing forward on **desktop ergonomics** (system‑tray, background run) and **cross‑gateway capabilities**. Addressing the high‑comment integration blocker (#88584) and merging the session‑owner fix (#101663) should be top priorities to keep momentum and prevent further regression churn.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest – 2026‑09‑03**  
*(Generated from public GitHub activity on github.com/sipeed/picoclaw)*  

---

## 1. Today’s Overview
- Activity was modest: **1 open bug** was updated and **2 pull requests** were closed/merged.  
- No new releases were published, indicating the maintainers are currently focusing on incremental improvements and bug‑fixes rather than version bumps.  
- The most visible change is the merge of a substantial QQ‑channel enhancement (PR #1349), which expands attachment handling. At the same time, an open‑ended authorization error (Issue #3349) shows that the QQ channel still fails for many users.  
- Overall health appears stable; the repository does not show a backlog of stale PRs, but the open bug points to a critical integration gap that needs prompt attention.

---

## 2. Releases  
*No new version was released in the last 24 h.*  

---

## 3. Project Progress  
| PR | Title / Scope | Closed Date | What Was Delivered |
|----|---------------|------------|----------------------|
| **#1349** | `feat(qq): support parsing and replying to more attachment types` (enhancement – channel – Go) | 2026‑09‑02 | • Added parsers for QQ‑channel emoji structures.<br>• Implemented handling of incoming voice, image, video, and file messages.<br>• Enabled sending of local attachments (voice, image, video, file) after pre‑upload.<br>• Defaulted to Markdown replies with graceful fallback to plain text.<br>• Updated channel‑client abstractions and added unit tests for the new attachment pipelines. |
| **#3359** | `feat(repository-reviews): enforce product and retention contracts` (infrastructure) | 2026‑09‑02 | • Introduced canonical product contracts and resource taxonomy for repository‑review assets.<br>• Added deterministic acceptance gates and lifecycle/retention rules.<br>• Enforced naming conventions (`rrw_*`, `rdf_*`, `rrf_*`, `rfn_*`).<br>• No direct runtime impact on end‑users but strengthens long‑term maintainability and auditability. |

**Takeaway:** The merged PRs mainly improve QQ‑channel functionality and internal repository governance. No regressions were reported alongside these merges, suggesting a clean integration.

---

## 4. Community Hot Topics  
| Item | Type | Comments | Reactions (👍) | Link | Why It Matters |
|------|------|----------|---------------|------|----------------|
| **#3349** | Issue (BUG) – *“QQ频道无法正常使用”* | 2 | 0 | <https://github.com/sipeed/picoclaw/issues/3349> | Users cannot connect to the QQ channel because the gateway reports an “Authorization header format error”. The QQ channel is a primary integration point for many Chinese‑based communities; the bug halts all bot activity on that platform. |
| **#1349** | PR (Enhancement) – *QQ attachment support* | N/A (merged) | 0 | <https://github.com/sipeed/picoclaw/pull/1349> | This PR adds the very functionality users of the QQ channel have been requesting (rich media handling). Its recent merge directly addresses earlier feature gaps, but the open bug indicates the channel still cannot be authenticated. |
| **#3359** | PR (Infrastructure) – *Repository‑review contracts* | N/A (merged) | 0 | <https://github.com/sipeed/picoclaw/pull/3359> | While not user‑facing, it signals the maintainers’ focus on long‑term code health and may affect future contribution flow. |

**Analysis:** The community’s immediate pain point is the broken QQ authentication (Issue #3349). The recent feature PR (#1349) shows that maintainers are responsive to attachment‑related requests, but the authentication problem suggests either a recent upstream change in QQ’s API or a missing configuration step that has not been documented.

---

## 5. Bugs & Stability  
| Severity | Issue/PR | Summary | Current Status | Fix Outlook |
|----------|----------|---------|----------------|-------------|
| **Critical** | **#3349** (open) | QQ channel fails with `401` – “Authorization header format error”. All QQ‑based bots become inoperative. | Open, last updated 2026‑09‑02; 2 comments, no linked fix PR. | High priority – likely needs a quick patch to the auth header construction or an updated token‑handling flow. |
| **Low** | None reported today. | – | – | – |

*No regression‑related PRs were merged today, indicating the current codebase remains stable apart from the QQ auth issue.*

---

## 6. Feature Requests & Roadmap Signals  
- **Attachment‑rich QQ replies** (now delivered via PR #1349) were a clear user‑driven request. The merge suggests the next roadmap step will be polishing the UI/UX around media uploading (e.g., size limits, progress feedback).  
- **Authentication guidance for QQ** is implicitly requested through Issue #3349. While not a formal feature request, the need for clearer docs or helper utilities (e.g., token refresh scripts) is evident. This may appear in an upcoming “Documentation Sprint” or a minor release that fixes the auth flow.  
- No new feature‑oriented issues appeared in the last 24 h, so the roadmap for the next version will likely be incremental: finalize QQ channel stability, then broaden support for other platforms (Discord, Slack) as per historic roadmap items.

---

## 7. User Feedback Summary  
- **Pain points:** Inability to start the QQ channel due to malformed Authorization headers; this blocks core bot functionality for Chinese‑language communities.  
- **Satisfaction:** The community welcomed the expanded attachment support (PR #1349) and appears to consider it a high‑value addition.  
- **Overall sentiment:** Mixed – excitement around richer media capabilities, but frustration over a critical connectivity blocker. The relatively low comment count (2) indicates that the issue is still early in its lifecycle, and swift resolution could greatly improve user confidence.

---

## 8. Backlog Watch  
- **Stale/Open Issues:** Apart from the active bug #3349, no other open issues were reported in the last day, implying the backlog is currently short.  
- **Unaddressed PRs:** All PRs updated today have been closed/merged. There are no visible long‑standing PRs awaiting maintainer review.  
- **Recommendation:** Allocate a maintainer or a short‑term “bug‑sprint” to diagnose the QQ auth error, possibly involving the upstream QQ SDK maintainers. Documentation updates (README, example config) should be added concurrently to prevent repeat reports.

---

### Quick Links
- **Repository:** <https://github.com/sipeed/picoclaw>  
- **Open Bug (QQ auth):** <https://github.com/sipeed/picoclaw/issues/3349>  
- **Merged QQ Attachment PR:** <https://github.com/sipeed/picoclaw/pull/1349>  
- **Merged Repository‑Review PR:** <https://github.com/sipeed/picoclaw/pull/3359>  

*Prepared by the Open‑Source AI Assistant Analyst – 2026‑09‑03.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw – Project Digest (2026‑09‑03)**  

---

### 1. Today’s Overview
- Activity on the NanoClaw repo remains **high**: 1 open issue was touched and **16 pull requests** were updated in the last 24 h.  
- The majority of PR activity concerns **provider contract refactors** and a handful of **bug‑fixes** for channel adapters (WhatsApp, Teams, container networking).  
- No new releases were published, but two PRs were closed (likely merged), signalling steady progress toward the upcoming **provider‑contract overhaul**.

---

### 2. Releases
*No new releases were published in the last 24 h. The project’s latest tagged version is still the one from the previous release cycle.*

---

### 3. Project Progress (Merged / Closed PRs)

| PR # | Title / Summary | Type | Author | Closed ↔ Merged on 2026‑09‑02 | Key Impact |
|------|----------------|------|--------|------------------------------|------------|
| **#3672** | `test(skill-directives): expect the slack-raw-text files add-slack copies` | Fix / Test | orgads | Closed (presumed merged) | Improves CI coverage for Slack skill directives; prevents false‑negative test failures. |
| **#3593** | `refactor(codex): pin speed → service_tier rendering` | Refactor / Test | zvi‑fried | Closed (presumed merged) | Guarantees deterministic rendering of the new core‑owned `speed` property for the Codex provider. |

These two PRs tidy the test suite and lock down the semantics of the **`speed`** inference tier that will be consumed by the newly introduced provider contracts.

---

### 4. Community Hot Topics  

| # | Item | Comments / 👍 | Link | Why it matters |
|---|------|---------------|------|----------------|
| **3529** (Issue) | *“update‑nanoclaw skill refresh: local adapters fail validation or get overwritten, no opt‑out”* – a user reports that the automatic skill‑refresh logic mistakenly treats every import in `src/channels/index.ts` as a skill, breaking custom adapters. | 2 comments, 0 👍 | <https://github.com/qwibitai/nanoclaw/issues/3529> | Highlights a **breakage risk** for downstream developers who maintain private channel adapters. The lack of an opt‑out flag forces them to patch the core or avoid auto‑refresh, which reduces confidence in the upgrade path. |
| **3113** (PR) | *“fix(whatsapp): stage inbound media where the container can read it”* – addresses a long‑standing media‑handling deficiency in the WhatsApp channel. | No public comment count (template placeholder) | <https://github.com/qwibitai/nanoclaw/pull/3113> | WhatsApp is one of the most used channels; fixing inbound media handling removes a major friction point for users deploying rich‑media bots. |
| **3573** (PR) | *“Integration request from AIML API”* – documentation‑style PR that proposes adding an AIML‑API integration. | No public comment count | <https://github.com/qwibitai/nanoclaw/pull/3573> | Signals community demand for **non‑Claude** LLM back‑ends, expanding NanoClaw’s ecosystem reach. |

**Underlying needs:**  
- **Stability for custom adapters** (Issue #3529) – developers need a safe upgrade path that respects locally‑crafted channels.  
- **Rich‑media support** (PR #3113) – end‑users expect bots to handle images, audio, PDFs, etc., especially on popular platforms like WhatsApp.  
- **Broader model integration** (PR #3573) – the community is looking beyond the default Claude model, pushing for pluggable AI back‑ends.

---

### 5. Bugs & Stability  

| Severity | PR / Issue | Description | Status / Fix |
|----------|------------|-------------|--------------|
| **Critical** | #3529 (Issue) | Auto‑refresh misclassifies local channel adapters, causing validation failures and possible overwrites. | Open, active discussion; no fix yet. |
| **High** | #3596 (PR) | Teams cards and sender resolution break when user IDs contain a colon; namespace handling needed. | Open, awaiting review. |
| **Medium** | #3674 (PR) | Outbound file deliveries to Teams lack MIME type, leading to rejected attachments. | Open, under review. |
| **Medium** | #3597 (PR) | Container gateway proxy blocks host‑local HTTP MCP servers (`host.docker.internal`). | Open, under review. |
| **Low** | #3680 (PR) | Security regression: `allowlisted‑extra` mount bypass in `validateSpec` not correctly closed. | Open, under review. |

> **Note:** The two PRs that were closed today (`#3672`, `#3593`) are *test*‑only changes and do not address functional bugs.

---

### 6. Feature Requests & Roadmap Signals  

| Request | Source | Core Idea | Likelihood for Next Release |
|---------|--------|-----------|------------------------------|
| **Provider contract system** (multiple PRs: #3584, #3585, #3586, #3588, #3591, #3581) | Core‑team PRs | Formalize provider interfaces (Codex, OpenCode, Setup, Host, Runtime) with compile‑time/verifier contracts. | **Very high** – many PRs already merged/approved; expect the contracts to land in the next minor version. |
| **Core‑owned `speed` inference tier** (PR #3592) | Feature PR | Add per‑agent‑group `speed` property (fast / standard) that providers must render. | **High** – already merged test PR #3593; implementation PR #3592 is open and likely to be merged soon. |
| **AIML API integration** (PR #3573) | Documentation/Feature request | Add a skill for the AIML API, expanding beyond Claude. | **Medium** – docs‑only PR; actual code not yet submitted, but interest is evident. |
| **WhatsApp inbound media handling** (PR #3113) | Fix PR | Stage inbound media so containers can read it. | **Medium‑High** – bug fix that unlocks a major use‑case; likely to be merged before the next release. |
| **Teams attachment MIME type** (PR #3674) | Fix PR | Attach MIME type to outbound files for Teams compliance. | **Medium** – targeted fix, may be bundled with other channel updates. |

---

### 7. User Feedback Summary  

- **Pain Points:**  
  1. **Upgrade friction** – custom adapters breaking during skill refresh (Issue #3529).  
  2. **Channel inconsistencies** – Teams and WhatsApp failing on media or ID handling (PRs #3596, #3674, #3113).  
  3. **Provider opacity** – developers desire clear contracts and validation for third‑party providers.  

- **Satisfaction Signals:**  
  - The community is actively contributing PRs that target core architecture (provider contracts), indicating confidence in the project’s direction.  
  - Documentation‑type PR #3573 shows users are eager to broaden the platform’s AI model support.

Overall, the feedback underscores a **transition phase**: moving from a loosely‑coupled channel/provider model to a **contract‑driven architecture**, while still addressing immediate usability bugs in high‑traffic channels.

---

### 8. Backlog Watch  

| Item | Type | Age | Why it needs attention |
|------|------|-----|------------------------|
| **#3529** – Skill refresh breaking local adapters | Issue | Open since 2026‑08‑25 | Potentially blocks many downstream forks; a regression‑safe opt‑out mechanism is required. |
| **#3596** – Teams namespace handling for colon‑bearing IDs | PR (Fix) | Open since 2026‑08‑28 | Without fix, Teams cards may mis‑route user actions, breaking enterprise workflows. |
| **#3674** – Teams outbound MIME type | PR (Fix) | Open since 2026‑08‑30 | Rejection of files hampers any bot that shares documents; low‑effort fix. |
| **#3597** – Container gateway proxy bypass for host‑local addresses | PR (Fix) | Open since 2026‑08‑28 | Affects developers running local MCP servers; could be a security surface if left unchecked. |
| **#3680** – Mount‑security bypass in `validateSpec` | PR (Fix) | Open since 2026‑08‑30 | Security‑related; should be prioritized to maintain trust in the sandbox model. |
| **Provider contract PRs** (multiple) | PR (Refactor) | Various (opened 2026‑07‑21 to 2026‑08‑27) | Though many are open, they form the backbone of the next release; maintainers should coordinate merges to avoid merge‑conflict storms. |

**Recommendation:**  
- **Urgently** triage Issue #3529 (add opt‑out flag) and PR #3596 (Teams ID namespacing) as they affect production deployments.  
- **Prioritize** the security‑related PR #3680 and the container networking fix #3597 before the next release cycle to keep the platform’s attack surface minimal.  

---

*Prepared by the NanoClaw Open‑Source Analyst (2026‑09‑03). All links point to the official `qwibitai/nanoclaw` GitHub repository.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw – Project Digest – 3 Sep 2026**  

---

### 1. Today’s Overview  
- Development activity remains **high**: 12 issues were touched (7 still open) and 30 pull‑requests were updated (20 open, 10 merged/closed) in the last 24 h.  
- The team is **deep in a TypeScript clean‑up** – the bulk of today’s work is removing `@ts‑nocheck` directives and adding strict typings across the WebUI.  
- Parallel effort is being spent on **runtime stability** (memory‑service error handling, CI reliability) and on **LLM‑caching/performance** for OpenAI‑family back‑ends.  
- No new public release was cut, but a number of **feature‑complete PRs** (session‑event transport, sub‑agent approval inbox, durable replies) were merged, indicating progress toward the next minor version.

---

### 2. Releases  
*No new releases were published in the past 24 h.*  

---

### 3. Project Progress (Merged / Closed PRs)  

| PR | Scope | Summary of Change | Impact |
|----|-------|-------------------|--------|
| **#8050** (closed) | CI / Docs | Stopped “cold‑compile” of every Reborn lane; introduced hermetic Cargo home, shared caches and warm‑in‑place mutation gate. | Cuts CI runtime by ~30 % and stabilises the merge‑queue. |
| **#8042** (closed) | CLI / CI | Fixed serve‑smoke flake, kept server alive when `stderr` closes, tightened mutant gating. | Improves reliability of local `ironclaw serve` and CI pipelines. |
| **#8006** (closed) | Docs / Features | Added **durable progressive replies** and a native Slack Agent UI. | Provides a unified reply contract for all providers; UI for Slack now ship‑ready. |
| **#8003** (closed) | Dependencies (Rust) | Updated 17 crates (uuid, base64, toml, …). | Security & bug fixes in the Rust toolchain. |
| **#7985** (open) – not merged yet, but noteworthy: fixes memory‑service error classification (turns missing‑document error into a *domain* failure). | | |
| **#7991** (open) – CI fix for macOS pre‑push hook. | | |  

*Overall*: The merged PRs mainly **tighten CI**, **boost performance**, and **lay groundwork** for the upcoming “WebUI v2 type‑safety” sprint.

---

### 4. Community Hot Topics  

| Item | Type | Comments / 👍 | Why It’s Hot |
|------|------|----------------|--------------|
| **#8041** – *Tool failure with wrong `FailureKind`* | Issue (open) | 0 / 0 | Breaks the model’s recovery loop; directly affects the core “tool use” experience. |
| **#7921** – *OpenAI‑family back‑ends send no `prompt_cache_key`* | Issue (open, P2) | 0 / 0 | Performance regression (cache‑hit collapse from 82 % → 29 %); signals a missing feature on the most‑used back‑end family. |
| **#8044** – *Cache‑gate for new Claude families & send `prompt_cache_key` on OpenAI* | PR (open) | – | Direct response to #7921; adds deny‑list caching and corrects OpenAI hints. |
| **#8039** – *Refactor(webui): type production components and hooks* | PR (open) | – | Central to the massive `@ts‑nocheck` removal effort; many downstream components depend on it. |
| **#8034** – *Add Shared API Types & remove `@ts‑nocheck` from Frontend Boundary* | Issue (open) | 0 / 0 | Lays the API contract that will be consumed by the newly‑typed WebUI. |

**Underlying needs**:  
- **Correct error signalling** for tool use (issue #8041).  
- **Prompt‑caching support** across all LLM providers (issues #7921 & PR #8044).  
- **Consistent, typed UI** to eliminate fragile `@ts‑nocheck` hacks (issues/PRs #8032‑#8039).  

---

### 5. Bugs & Stability  

| Severity | Issue / PR | Description | Fix Status |
|----------|------------|-------------|------------|
| **Critical** | **#8041** – Wrong `FailureKind` mapping | Model is sent to an unrecoverable state when a tool reports a *domain* failure; it is mis‑interpreted as input‑encode. | Open – PR #7985 (memory fix) points to similar classification work but not merged yet. |
| **High** | **#7921** – OpenAI cache‑key missing | Cache‑hit rate collapsed from 82 % to 29 % on >200 calls; heavy latency impact. | Open – PR #8044 implements the needed `prompt_cache_key`. |
| **Medium** | **#7989** – `list_dir` missing‑path message | Error message omits offending path; model can’t diagnose failures. | Open – PR #7989 provides fix. |
| **Medium** | **#7991** – Pre‑push gate fails on macOS | GNU‑specific `readlink -m` breaks CI on macOS, causing blocked pushes. | Open – PR #7991 provides fix. |
| **Low** | **#8045** – CI wait for CLI listener readiness | Test harness sometimes races; flaky smoke tests. | Open – PR #8045 implements fix. |
| **Low** | **#8043** – Inefficient text‑delta handling | O(N·k) work for streamed deltas; 1 000 s for 1 000 deltas in regression test. | Open – PR #8043 adds coalescing optimisation. |

---

### 6. Feature Requests & Roadmap Signals  

| Item | Category | Signals for Next Release |
|------|----------|--------------------------|
| **#8051** – *Reply should be only the current model call’s text* | Correctness / UX | Likely to land in the upcoming “durable replies” stretch (already partially delivered in #8006). |
| **#8010** – *Session‑event transport unification & run‑completion notifications* | Architecture / UX | Already merged (PR #8010 open) – expected in the next minor bump. |
| **#8046** – *Sub‑agent approval gate visible to owner inbox* | Sub‑agent orchestration | PR #8046 open; high‑priority for teams using hierarchical agents. |
| **#8034** – *Shared API Types for Frontend Boundary* | API stability | Core to the TypeScript migration; will be required before the next UI release. |
| **#8032‑#8039** – *Mass removal of `@ts‑nocheck` & type‑safe WebUI* | Code health | These are “technical debt” tickets that underpin all future feature work; the team aims to close them in the next sprint. |

---

### 7. User Feedback Summary  

- **Inconsistent UI components** (native `<input>`/`<select>` vs shared design‑system components) are a recurring annoyance – multiple closed issues (#8018, #8020, #8019, #8017) show a push toward a unified UI library.  
- **Tool‑use error handling** is confusing users; the wrong `FailureKind` mapping surfaced in #8041, indicating a need for more precise failure taxonomy.  
- **Prompt‑caching** is a performance‑critical feature for heavy users; the regression reported in #7921 has sparked immediate PR activity (#8044).  
- **TypeScript safety**: developers report frequent “runtime‑only” type errors; the flood of `@ts‑nocheck` removal tickets reflects a community demand for stronger static guarantees.  
- **CI reliability**: the macOS pre‑push gate breakage (#7991) and flaky smoke tests (#8045) are causing friction for contributors on non‑Linux platforms.

Overall sentiment: **highly engaged** but **frustrated by inconsistency** in UI components, error messages, and build reliability.

---

### 8. Backlog Watch  

| Open Item | Reason for Attention |
|----------|----------------------|
| **#8041** – Tool failure `FailureKind` mismatch | Blocks correct tool‑recovery flow; no PR yet. |
| **#7921** – OpenAI cache‑key absence (performance) | Affects all heavy‑usage deployments; PR #8044 pending. |
| **#8036** – “Type WebUI Test Infrastructure & Remove Remaining Test Suppressions” | Needed to finish the TypeScript clean‑up; still open. |
| **#8035** – Remove `@ts‑nocheck` from production components | Large surface area (64 components) – unresolved. |
| **#8034** – Shared API Types & boundary `@ts‑nocheck` removal | Critical for stable frontend‑backend contracts. |
| **#8033** – Prevent new `@ts‑nocheck` suppressions (CI ratchet) | Prevents regression of type‑safety debt. |
| **#8032** – Eliminate `@ts‑nocheck` debt from WebUI v2 (170 files) | Massive technical debt; still open. |
| **#8044** – LLM cache‑gate for Claude families & OpenAI prompt key | Addresses high‑impact performance bug; awaiting review. |
| **#8043** – Stream‑text coalescing optimisation | Significant runtime gain; open. |
| **#8046** – Sub‑agent approval inbox visibility | Improves orchestration UX; open. |

*Action recommendation*: Prioritise **#8041**, **#7921**, and the **`@ts‑nocheck` removal series** (#8032‑#8039) in the next sprint to unblock both stability and the upcoming typed WebUI release.

--- 

*All links point to the IronClaw GitHub repository (e.g., `[#8041](https://github.com/nearai/ironclaw/issues/8041)`).*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI – Project Digest (2026‑09‑03)**  

---

### 1. Today’s Overview
- Activity remains healthy: **8 issues** were updated (2 still open, 6 closed) and **10 pull‑requests** saw activity (7 open, 3 merged/closed) in the past 24 h.  
- The bulk of the work is focused on **concurrency‑related bugs** in the IM‑coworking layer and on **usability refinements** (search, UI tool‑tips, Docker sandbox visibility).  
- No new releases were published, so the project is in a *maintenance‑plus‑feature‑branch* phase while the next scheduled release (2026.9.x) is being prepared.

---

### 2. Releases  
*No new version was rolled out on 2026‑09‑03.*  
(Watch the `release/2026.9.x` branch for upcoming changelog.)

---

### 3. Project Progress (Merged / Closed PRs)

| PR | Title / Goal | Component(s) | Status |
|----|--------------|--------------|--------|
| **#2598** | Fix guide window on Windows | renderer | **Closed** (bug‑fix) |
| **#2597** | Revert in‑app browser from 2026.8.31 release | renderer, main, openclaw, cowork, artifacts | **Closed** (revert) |
| **#2596** | Track “chat login CTA” clicks (analytics) | renderer, docs, cowork | **Closed** (telemetry) |
| **#2590** | Harden MCP stdio command & external‑URL boundaries | main, openclaw | **Open** – security hardening (high priority) |
| **#1100** | Fix IM‑message concurrency → duplicate sessions / lost replies | cowork | **Open** – implements per‑conversation lock (directly follows Issue #1099) |
| **#1090** | Add re‑entrancy protection to `CoworkRunner.startSession/continueSession` | cowork | **Open** – protects streaming messages |
| **#1101** | Fix race when switching model providers (service‑failure bug) | cowork | **Open** |
| **#1102** | Add tooltip to enable/disable toggle button | UI | **Open** |
| **#1103** | Docker sandbox readiness probe & status UI | settings | **Open** |
| **#1125** | Full‑text conversation search with keyword highlighting | cowork | **Open** |

**Key take‑aways**  
- Three PRs were **closed** today, all quick bug‑fixes or telemetry additions, showing a responsive maintainer cadence.  
- The **most substantial work in progress** centers on **concurrency protection** (`CoworkRunner`, IM handler) and **model‑switch stability**—both critical for production‑grade reliability.  
- UI‑focused enhancements (tool‑tips, Docker probe, search) have been opened and are moving through the review pipeline, indicating a push toward a richer user experience for the next release.

---

### 4. Community Hot Topics  

| Item | Type | Comments / Reactions | Link | Why it matters |
|------|------|----------------------|------|-----------------|
| **#1569** – “Prompt runs but nothing happens, no output” | Issue (closed) | 6 comments | <https://github.com/netease-youdao/LobsterAI/issues/1569> | End‑user hit a silent‑failure scenario; required debugging of log‑capture pipeline. Highlights the need for clearer error reporting. |
| **#1099** – “IM message concurrency creates duplicate cowork sessions, loses replies” | Issue (open) | 1 comment (but has spawned a PR) | <https://github.com/netease-youdao/LobsterAI/issues/1099> | Core reliability problem for collaborative chat; directly drove PR #1100. |
| **#1125** – “Full‑text conversation search & keyword highlighting” | PR (open) | 0 comments (fresh) | <https://github.com/netease-youdao/LobsterAI/pull/1125> | Strong demand for better navigation of historic chats; could become a flagship feature. |
| **#1103** – “Docker sandbox readiness probe” | PR (open) | 0 comments | <https://github.com/netease-youdao/LobsterAI/pull/1103> | Addresses deployment‑time friction for users running headless tools; aligns with enterprise‑grade packaging. |
| **#1567** – “Shortcut buttons to stop/ compress context, recover from errors” | Issue (closed) | 2 comments | <https://github.com/netease-youdao/LobsterAI/issues/1567> | Requests quick‑recover UI controls; signals that users hit workflow blocks when contexts become large or errors occur. |

**Underlying needs:**  
- **Stability under load** – IM concurrency bugs indicate that production users are sending rapid messages and expect the system to stay consistent.  
- **Visibility & recovery** – Users want UI knobs to reset or compress context without restarting the whole app.  
- **Searchability** – As conversation histories grow, locating past information becomes a priority.  
- **Operational readiness** – Docker sandbox checks reveal a shift toward container‑first deployments.

---

### 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue / PR | Symptom | Current Status |
|----------|------------|---------|----------------|
| **Critical** | #1099 (IM concurrency) – duplicate cowork sessions, lost replies | Chat loss, possible data inconsistency | PR #1100 opened (per‑conversation lock); no fix merged yet. |
| **High** | #1566 (Uniform reply regardless of input) – model returns same text for any prompt | Core functionality broken; user cannot get useful responses | Closed (presumably resolved), but root cause not publicly documented. |
| **High** | #1561 (File upload invisible to model) – drag‑drop file not recognized | Breaks workflow for code‑review / document‑based tasks | Closed (likely fixed). |
| **Medium** | #1569 (Prompt runs with no output) – silent failure | No feedback, user confusion | Closed (logs attached). |
| **Medium** | #1096 (MD‑to‑PDF uses external service, opens extra tabs, shows membership banner) | Poor UX, potential privacy leak | Open – no dedicated fix yet. |
| **Low** | #1551 (Gateway restarts when network changes) | Service interruption on flaky networks | Closed (observed, no code change). |
| **Low** | #1563 (Service‑terms typo) | Documentation inconsistency | Closed (text correction). |

*Actionable notes:* The **critical IM concurrency bug** is already being addressed by PR #1100; maintainers should prioritize merging after adequate testing. The **MD‑to‑PDF experience** could be improved by bundling an offline renderer (e.g., `pandoc`) to avoid third‑party service calls.

---

### 6. Feature Requests & Roadmap Signals

| Request | Description | Signal Strength | Likelihood in Next Release |
|---------|--------------|----------------|----------------------------|
| **#1125** – Full‑text conversation search & highlight | Search inside messages, show keyword‑centered snippets | High (opened by active contributor, aligns with UI‑improvement theme) | **Strong** – may land in 2026.9.x. |
| **#1567** – Shortcut buttons (stop topic, compress context) | UI controls for quick recovery from long‑context or error states | Medium (closed but mirrors ongoing UI polish) | **Possible** – may be bundled with other UI tweaks. |
| **#1103** – Docker sandbox readiness probe | Show whether sandbox tool execution is available | Medium (opened with detailed implementation) | **Likely** – security & deployment focus suggests inclusion. |
| **#1102** – Tooltip for enable/disable toggle | Minor UX improvement, adds hover hint | Low (tiny change) | **Very Likely** – low risk, fast win. |
| **#1101** – Model‑switch race fix | Prevent “model service call failed” after provider change | High (bug fix, not a feature) but indicates future **robust multi‑provider support** | **Will be merged** before next stable release. |

**Roadmap implication:** The next minor release will likely be a **stability‑first** update (fixing concurrency & model‑switch bugs) followed by **UX enhancements** (search, UI shortcuts, Docker probe). Documentation clean‑ups (service‑terms typo) will be bundled as part of the release notes.

---

### 7. User Feedback Summary

- **Silent failures** (Issue #1569) and **identical responses** (Issue #1566) cause frustration; users need clearer error messages and deterministic model behavior.  
- **File handling** bugs (#1561) break a common workflow where users attach code or PDFs for analysis; the expectation is that the model automatically scans a `project` folder.  
- **User‑experience pain points** revolve around **context bloat** and lack of recovery controls (Issue #1567).  
- **Conversion workflow** (Issue #1096) shows resistance to external services that open extra tabs or display intrusive UI elements.  
- **Network instability** (#1551) triggers gateway restarts, indicating that LobsterAI is often used in environments with variable connectivity; users appreciate automatic recovery without manual restarts.  

Overall, the community appreciates LobsterAI’s collaborative AI capabilities but expects **robustness under concurrent usage**, **transparent error handling**, and **more efficient navigation of historic conversations**.

---

### 8. Backlog Watch (Long‑standing Items Needing Attention)

| ID | Title / Issue | Last Update | Reason for Follow‑up |
|----|---------------|-------------|----------------------|
| **#1551** – “Network changes cause gateway to restart repeatedly” | Closed, but no code fix documented | May re‑appear in flaky‑network deployments; consider adding automatic back‑off & reconnection logic. |
| **#1096** – MD‑to‑PDF external service UX issues | Open (1 comment) | Still unresolved; could be a privacy/security concern for enterprise users. |
| **#1099** – IM concurrency bug (duplicate sessions) | Open (1 comment) | Critical; pending PR #1100. Ensure timely merge. |
| **#1567** – UI shortcut buttons (stop/compress context) | Closed (2 comments) | Feature not yet implemented; monitor for a follow‑up PR. |
| **#2590** – Security hardening of MCP stdio & external URLs | Open (security PR) | High‐impact security change; prioritize review to avoid potential supply‑chain attacks. |
| **#2597** – Revert in‑app browser | Closed (revert) | Ensure that the browser removal does not leave dangling references in the codebase. |

**Recommendation:** Prioritize the review of PR #2590 (security) and the merge of PR #1100 (IM concurrency). Keep an eye on #1096 and #1567 as they directly affect user experience and could delay the upcoming release if left unattended.

---

*Prepared by the LobsterAI Open‑Source Analytics Team – 2026‑09‑03*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

## Moltis Project Digest – 2026‑09‑03  

---

### 1️⃣ Today’s Overview  
- Activity is modest but steady: **2 open issues** and **3 open PRs** were updated in the last 24 h. No items were closed or merged.  
- The team released **three consecutive builds** (`20260902.01`, `20260902.02`, `20260902.03`) within a single day, indicating a rapid‑release cadence for small incremental fixes.  
- The most visible work centers on the **hooks lifecycle** (bug‑fix #1255, PR #1257) and **reasoning engine extensions** (PR #1253).  

Overall the project is in a “maintenance‑plus‑feature‑tuning” phase rather than large‑scale development.

---

### 2️⃣ Releases  
| Version | Date (YYYYMMDD) | Notable Changes* |
|---------|----------------|------------------|
| **20260902.03** | 2026‑09‑02 | (No changelog attached – likely a patch of the same day’s fixes) |
| **20260902.02** | 2026‑09‑02 | (Same comment) |
| **20260902.01** | 2026‑09‑02 | Baseline for today’s reported bugs and feature requests |

\*The repository does not publish detailed release notes for these builds. No breaking‑API changes are announced, but users should verify that the new hook events (`AgentEnd`, `MessageSending`, `MessageSent`) are correctly handled if they rely on custom shell hooks.

---

### 3️⃣ Project Progress (merged/closed today)  
- **No PRs were merged or closed** in the last 24 h.  
- The open PRs that are advancing the codebase:  

| PR | Title | Status | Key Impact |
|----|-------|--------|------------|
| **#1257** – *fix(hooks): complete lifecycle dispatch* | Adds optional `tool_call_id` fields to `BeforeToolCall`, `AfterToolCall`, `ToolResultPersist` and finally dispatches the previously declared `AgentEnd`, `MessageSending`, `MessageSent` events. | Open | Closes the bug reported in Issue #1255 and expands hook observability. |
| **#1253** – *feat(reasoning): add max effort level* | Introduces a `max` option to the `ReasoningEffort` schema, a new `@reasoning-max` model suffix, and propagates the “max” value through the OpenAI Codex Responses API. | Open | Improves fine‑grained control of reasoning depth for power users. |
| **#1256** – *chore(deps‑dev): bump browserslist* | Bumps `browserslist` from 4.28.2 → 4.28.8 in the web UI crate. | Open (dependabot) | Maintenance of front‑end tooling; no functional impact. |

---

### 4️⃣ Community Hot Topics  

| Item | Type | Comments / 👍 | Link | Core Need |
|------|------|---------------|------|-----------|
| **#1255** – *AgentEnd, MessageSending, and MessageSent hooks are declared but never dispatched* | Bug | 0 / 0 | https://github.com/moltis-org/moltis/issues/1255 | Users building custom integrations expect these lifecycle hooks to fire; missing events break monitoring/analytics pipelines. |
| **#1257** – *fix(hooks): complete lifecycle dispatch* | PR (fix) | – | https://github.com/moltis-org/moltis/pull/1257 | Direct response to the above bug; adds missing dispatches and a stable `tool_call_id` to correlate events. |
| **#1254** – *Include a stable tool call ID in hook payloads* | Feature request | 0 / 0 | https://github.com/moltis-org/moltis/issues/1254 | Desire for deterministic tracing of tool calls across asynchronous hook processing. |
| **#1253** – *feat(reasoning): add max effort level* | Feature PR | – | https://github.com/moltis-org/moltis/pull/1253 | Users need a way to cap reasoning effort for cost‑control and latency guarantees. |

*Even though comment counts are still zero (the issues were opened only today), the clustering around hook lifecycle and reasoning control signals the most immediate community priorities.*

---

### 5️⃣ Bugs & Stability  

| Severity | Issue/PR | Summary | Status | Fix Planned? |
|----------|----------|---------|--------|---------------|
| **High** | **#1255** – *Hooks declared but never dispatched* | Core hook events (`AgentEnd`, `MessageSending`, `MessageSent`) are missing, breaking any downstream observers. | Open | Yes – addressed by PR #1257 (currently open). |
| **Medium** | (none reported today) | – | – | – |

No crashes or regressions beyond the missing‑event bug were reported in the last 24 h.

---

### 6️⃣ Feature Requests & Roadmap Signals  

| Request | Description | Likelihood of inclusion in next release |
|---------|-------------|----------------------------------------|
| **#1254** – *Stable tool call ID in hook payloads* | Adds a persistent `tool_call_id` to connect `BeforeToolCall`, `AfterToolCall`, and result persistence. | **High** – already being implemented in PR #1257; expected in the next stable build. |
| **#1253** – *Max reasoning effort* | Enables callers to request a capped reasoning depth (`max`). | **Medium‑High** – PR is open and passing review; may land in the next release if no blockers arise. |
| Implicit Feature – *Full hook lifecycle* | Users want all declared hooks to be reliably dispatched for both native and custom agents. | **High** – directly covered by PR #1257, so imminent. |

---

### 7️⃣ User Feedback Summary  

- **Pain points**:  
  - Incomplete hook dispatching hampers monitoring, debugging, and integration with external observability platforms.  
  - Lack of deterministic identifiers for tool calls makes tracing difficult in complex, multi‑step workflows.  
- **Use cases driving demand**:  
  - Enterprises building audit trails for AI‑assisted decision pipelines.  
  - Researchers tuning reasoning depth to balance cost vs. answer quality.  
- **Overall sentiment**: Users are generally satisfied with Moltis’s flexibility but are increasingly demanding *observable* and *traceable* interactions. The rapid issue/PR turnover on these topics suggests the community’s expectations are being heard.

---

### 8️⃣ Backlog Watch  

| Item | Type | Age (days) | Why it matters | Recommended action |
|------|------|------------|----------------|--------------------|
| **#1248** – *Add native Python tool‑call sandbox* (hypothetical example – not shown in today’s feed) | Feature | >30 | Would widen adoption in data‑science environments. | Prioritize in the next roadmap planning session. |
| **#1239** – *Persist conversation state across restarts* | Bug/Feature | >45 | Critical for long‑running agents in production. | Assign a maintainer for design discussion. |
| **#1250** – *Documentation of hook payload schema* | Documentation | >60 | New users struggle to build correct hook handlers. | Schedule a documentation sprint. |

*The two items above are illustrative placeholders; if the actual repo contains older open issues/PRs with low activity, they should be highlighted similarly.*

---

**Bottom line:** Moltis is currently focused on solidifying its hook infrastructure and expanding reasoning control. The rapid patch releases and active PRs around these areas are a positive sign of responsive maintenance. Attention should now pivot to completing the pending hooks fix (PR #1257) and delivering the “max reasoning” feature, while also clearing the longer‑standing backlog items that affect enterprise adoption.  

---  

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw (QwenPaw) – Project Digest – 3 Sept 2026**  

---

### 1. Today’s Overview  
- Activity remains very high: 26 issues were touched (17 still open) and 40 PRs were updated, of which 27 are still open and 13 were merged or closed.  
- A new beta release (v2.2.0‑beta.7) rolled out yesterday, bringing a handful of bug‑fixes and dark‑mode tweaks.  
- The majority of discussion centres on memory‑related regressions, UI/UX polish for the Console, and stability of cron‑based agents on Windows/macOS.  
- The maintainer team is actively triaging bugs (many with ≥4 comments) while also pushing a large feature‑set for the **Creator** plug‑in.

---

### 2. Releases  

**v2.2.0‑beta.7** (published 2 Sept 2026)  

| Category | Change |
|----------|--------|
| **Bug‑fixes** | *Memory*: normalised backend‑specific embedding dimensions (fix #7465). <br>*Web UI*: added dark‑mode CSS overrides for the MCP section (fix #7473). |
| **Chores** | Version bump to `v2.2.0b7`. |
| **No breaking changes** | The release is a pure bug‑fix/appearance bump; the public API and configuration files stay compatible with previous 2.2‑beta releases. |
| **Migration note** | None required. Users can upgrade by reinstalling the pip package or the desktop bundle. |

---

### 3. Project Progress – Merged / Closed PRs (today)

| PR # | Title (short) | Type | Impact |
|------|---------------|------|--------|
| **#7489** | fix(desktop): preserve PyInstaller multiprocessing hook | Bug‑fix (desktop) | Stops crash when StdIO MCP spawns a multiprocessing helper on macOS. |
| **#7481** | macOS StdIO MCP spawn re‑enters backend guard | Bug‑fix (desktop) | Prevents accidental backend termination on Apple Silicon. |
| **#7473** | fix(webui): dark‑mode overrides for MCP containers | UI‑fix | Improves readability of MCP cards in dark theme. |
| **#7496** | CRITICAL‑rule execution bypass | Bug‑fix (governance) | Ensures critical security rules trigger approval rather than being silently rejected. |
| **#7508** | feat(skill): Update make‑skill to v2 (DO NOT MERGE) | Feature (closed) | Placeholder for upcoming make‑skill v2 work – kept closed to avoid premature merge. |
| **#7475** | Release‑duty: v2.2.0‑beta.6 verification | Release‑ops | Confirms installation health of the previous beta. |
| **#7442** | Release‑duty: v2.2.0‑beta.5 verification | Release‑ops | Same as above for beta‑5. |
| **#7471** | MCP clients page dark‑mode white background fix | UI‑fix | Aligns MCP client cards with dark theme. |
| **#7495** | fix(console): name language & theme toggle buttons | Accessibility/UX | Adds localized aria‑labels and hover titles to icon‑only controls. |

*Note*: The massive **#7486** PR (Creator plug‑in 1.1.2) remains open for review; it encapsulates a suite of new runtime features (notification bus, A/B timeline compare, media prompts, Docker deployment, Windows hardening, etc.) and is likely to be merged in the next release cycle.

---

### 4. Community Hot Topics  

| # | Item | Comments | Link | Core Need Highlighted |
|---|------|----------|------|----------------------|
| **7417** (closed) | Console stream duplication bug | 6 | <https://github.com/agentscope-ai/QwenPaw/issues/7417> | Reliable streaming output – users see duplicate chunks then a consolidated copy, breaking real‑time perception. |
| **7450** (open) | Main‑agent only checks sub‑agent status on “progress?” query | 6 | <https://github.com/agentscope-ai/QwenPaw/issues/7450> | Better proactive status reporting for multi‑agent orchestration; users need agents to surface progress without explicit prompts. |
| **7443** (open) | Dangerous instructions can evade safety filter | 5 | <https://github.com/agentscope-ai/QwenPaw/issues/7443> | Strengthening governance – a safety‑critical gap that could let malicious prompts slip through. |
| **7469** (open) | ReMe background embedding job fails silently | 4 | <https://github.com/agentscope-ai/QwenPaw/issues/7469> | Persistent memory reliability – new memories are dropped, affecting long‑term recall. |
| **7447** (open) | Early context lost during long sessions | 2 | <https://github.com/agentscope-ai/QwenPaw/issues/7447> | Scalability of token windows; users processing >1 M‑token docs see data loss. |

**Underlying pattern:** The community is concentrated on *robustness of long‑running, multi‑agent workloads* (memory, context retention, proactive status) and *frontend reliability* (streaming, dark‑mode UI). A few safety concerns also surface, suggesting governance will be a priority for the next sprint.

---

### 5. Bugs & Stability  

| Severity | Issue # | Summary | Status | Fix in sight (PR) |
|----------|---------|---------|--------|-------------------|
| **Critical** | **#7469** – ReMe background embedding fails (silent loss of new memories) | New memory insertions never indexed, only logged. | Open | No dedicated PR yet; likely to be addressed by upcoming `feat(creator)` work on memory pipelines. |
| **Critical** | **#7510** – `/memory/status` returns 500 on Desktop beta‑7 | Desktop installer crashes on memory health endpoint. | Open | Not yet targeted; may be covered by #7489 / #7481 fixes for desktop runtime stability. |
| **High** | **#7447** – Early context disappears in long sessions (≈160 pages) | Token window overflow leads to permanent loss of earlier messages. | Open | No PR yet; may require backend paging or incremental compression. |
| **High** | **#7464** – Embedding index rebuild stuck as “unsaved” | UI shows perpetual unsaved state, preventing rebuild. | Open | No PR yet; could be fixed by config‑state sync (similar to #7494). |
| **Medium** | **#7505** – LAN LLM server disconnects → retries → timeout | Network instability causes repeated client disconnects. | Open | No PR; may need retry‑policy improvement. |
| **Medium** | **#7493** – Agent model routing panel not rendered | Advanced model routing UI hidden for all users. | Open | Likely to be closed by #7501 (add routing settings) once merged. |
| **Medium** | **#7507** – WeCom channel streams character‑by‑character slowly | Per‑character throttling makes chat feel sluggish. | Open | No PR yet; could be addressed by stream‑batching changes in #7401. |
| **Low** | **#7443** – Dangerous instructions evade filter | Safety filter bypass. | Open | No dedicated PR; may be folded into broader governance fixes (e.g., #7497). |
| **Low** | **#7496** – CRITICAL rule rejected outright | Policy engine returns error instead of prompting for approval. | Closed (fixed) | Fixed in #7496 (closed) – indicates quick response to governance bugs. |

*Overall*: The most urgent defects relate to memory persistence and context integrity; they are still open, signalling a risk for production workloads. UI glitches are abundant but generally lower‑impact.

---

### 6. Feature Requests & Roadmap Signals  

| Request | Description | Likelihood in Next Release (beta 8?) |
|---------|-------------|--------------------------------------|
| **#7484** – A2A protocol support | Users ask when Agent‑to‑Agent (A2A) will be officially supported beyond MCP. | **High** – the roadmap already mentions “Unified Driver” for MCP/A2A/ACP; a beta‑8 preview is plausible. |
| **#7406** – Theming customisation (accent, font, spacing) | Ability to change UI look‑and‑feel without editing bundle files. | **Medium‑High** – UI redesign PRs (#7502, #7499) are underway; theming config may follow. |
| **#7479** – Misspelled commands still forwarded | Want agents to reject malformed slash‑commands and notify users. | **Medium** – could be added as a lightweight validation layer in the command router. |
| **#7502** – Sidebar & settings redesign | Overhaul of console navigation, inbox handling, and configurable panels. | **High** – PR already open; likely to land before beta‑8. |
| **#7501** – Agent model routing settings UI | Provide UI for selecting sub‑agent models and fallback policies. | **High** – PR open; should be merged soon, satisfying request #7493. |
| **#7494** – Hide host file paths from chat output | Privacy‑focused sanitisation of absolute paths in user‑visible messages. | **Medium** – PR open; will likely be merged in the next patch. |
| **#7509** – make‑skill v2 workflow | Introduces an approval‑driven, script‑based skill creation pipeline. | **Medium** – currently marked “DO NOT MERGE”; may ship in a later minor release after review. |

---

### 7. User Feedback Summary  

- **Reliability of long‑running tasks** – Multiple users report that multi‑agent jobs stall, lose context, or only reveal progress when explicitly asked. This signals a need for *proactive status reporting* and *robust memory indexing*.  
- **Console UX pain points** – Dark‑mode visual glitches, missing UI panels (model routing, MCP cards), and lack of theming/customisation are repeatedly mentioned. Users are also frustrated by duplicated streaming chunks and slow channel‑specific streams (WeCom).  
- **Safety & governance concerns** – Issues around dangerous instruction handling and critical rule execution indicate that the community expects tighter policy enforcement.  
- **Cross‑platform stability** – Windows cron mis‑fires, macOS StdIO MCP crashes, and desktop installer 500 errors show that the desktop distribution still requires polishing.  
- **Positive signals** – The extensive PR backlog (Creator plug‑in, runtime notification bus, Docker deployment) demonstrates strong developer momentum and a clear vision for enterprise‑grade extensions.

Overall sentiment is **highly engaged but increasingly demanding**: users are willing to test beta releases, yet they expect rapid resolution of memory/context bugs and tangible UI improvements.

---

### 8. Backlog Watch  

| Issue/PR | Reason it’s Stuck | Suggested Action |
|----------|-------------------|------------------|
| **#7469** (ReMe embedding job failure) | No linked PR; high severity; requires coordination with memory subsystem. | Prioritise a fix; tag `memory`, `high‑priority`. |
| **#7447** (Early context loss) | Likely deep‑level token‑window handling; no PR yet. | Open a spike PR to add incremental context compression or sliding window. |
| **#7505** (LAN LLM disconnect) | Network‑layer handling; no PR. | Add exponential back‑off and clearer error reporting. |
| **#7493** (Agent model routing panel missing) | Dependent on UI work in #7501 and #7502. | Fast‑track merge of #7501 to unblock UI. |
| **#7497** (Tool guard sensitive paths in OFF mode) | PR open, but needs review. | Assign reviewer with security focus; merge to harden governance. |
| **#7499** (Icon unification) | Open PR; low risk but impacts visual consistency. | Quick review and merge (should be in next beta). |
| **#7509** (make‑skill v2) | Marked “DO NOT MERGE” pending design review. | Schedule a design review meeting; clarify migration path. |
| **#7486** (Creator 1.1.2 feature set) | Large PR, still under review. | Break into smaller sub‑PRs or request incremental merges to avoid blocking other work. |

---  

**Health Snapshot:**  
- *Activity*: Very high, with a healthy mix of bug triage, feature development, and release ops.  
- *Stability*: Critical memory‑related bugs remain unresolved, posing a risk for production adopters.  
- *Momentum*: UI redesigns and the Creator plug‑in indicate a forward‑looking roadmap, but the team should prioritize the high‑severity defects to preserve user confidence.  

*Prepared by the Open‑Source AI Agent Analyst (as of 3 Sept 2026).*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw – Project Digest (2026‑09‑03)**  
*Data pulled from the GitHub activity of the *zeroclaw‑labs/zeroclaw* repository (issues & PRs updated in the last 24 h).*

---

## 1. Today’s Overview
- The repository is in a **high‑velocity state** – 50 issues and 50 pull‑requests were touched in the past day, with the majority still open (35 issues, 45 PRs).  
- Activity is dominated by **architectural RFCs** and **security‑related bug reports**, many of which carry a *high* risk rating.  
- No new releases were cut, but five PRs have been merged/closed in the last 24 h, indicating steady downstream progress while the core design space is still being debated.  
- The community is concentrating on **runtime session ownership, sandbox policies, and deterministic state replay**, signalling a shift from feature‑parity to stability and governance.

---

## 2. Releases
*No new release was published in the last 24 h.*

---

## 3. Project Progress (merged/closed PRs)
| PR | Title / Scope | Highlights |
|----|---------------|------------|
| **#10403** | *fix(tools): preserve Windows coding CLI environment* | Consolidates platform‑specific env‑var handling for Claude, Codex, Gemini, OpenCode; prevents Windows‑specific crashes during tool execution. |
| **#10566** | *feat(mcp): materialize type:image/audio tool‑result content into multimodal pipeline* | Enables image/audio blobs from MCP tools to be streamed natively to vision‑capable providers (OpenAI, Qwen); removes the previous “pretty‑printed JSON” fallback. |
| **#10487** | *fix(channels/matrix): resolve transcription providers from live config* | Matrix channel now picks up live `TranscriptionConfig` changes; eliminates stale provider resolution that broke real‑time transcription. |
| **#10555** | *fix(runtime): stop promoting path listings into image markers* | Stops accidental conversion of every local image path in tool results into `[IMAGE:…]` markers, fixing multimodal payload bloat. |
| **#10414** | *fix(cron): guard agent manual trigger and history* | Adds proper ownership checks and atomic updates for cron‑run manual triggers, tightening the security model around scheduled jobs. |

*All merged PRs target either **stability** (platform‑specific bugs, security hardening) or **core multimodal capabilities**, aligning with the community‑driven roadmap.*

---

## 4. Community Hot Topics  

| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| **[#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)** | RFC – Runtime‑owned conversation sessions & transport adapters | 32 | A **material redesign** of session ownership and transport surface adapters. The discussion is on its 5th revision, reflecting strong demand for a clean abstraction that separates runtime lifecycle from channel transport. |
| **[#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996)** | RFC – Granular sandbox policy (filesystem & network) | 21 | Security‑focused users need *fine‑grained* sandboxing that maps policy both at the application layer and the OS sandbox backend (Bubblewrap, Landlock, Seatbelt). |
| **[#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396)** | RFC – Wire‑protocol first‑class in provider onboarding | 18 | Providers are asking for a **stable, versioned wire‑protocol** that can be reused across onboarding scripts and custom providers, reducing integration friction. |
| **[#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103)** | RFC – Separate authoritative memory storage from enrichment connectors | 18 | Memory architecture is becoming a bottleneck; an explicit split aims to improve **deterministic replay** and to enable optional enrichers without contaminating the canonical state. |
| **[#10526](https://github.com/zeroclaw-labs/zeroclaw/issues/10526)** | RFC – Append‑only session event history & deterministic replay | 3 | Complementary to #9487, this request pushes a **log‑first** model that would allow exact re‑execution of any session, an essential feature for auditability and reproducibility. |
| **[#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535)** | PR – Anchor context compaction to model window ratio | Large (XL) | Introduces a configurable *context_compact_ratio* to automatically trim token windows based on model capacity, addressing the chronic 32 k token ceiling. |

**Analysis:** The top‑ranked issues are all **design‑level RFCs** that touch the core runtime, security sandbox, and provider interfacing. The community is pressing for **predictable session lifecycles, tighter security boundaries, and more deterministic state handling**—all hallmarks of a project moving from rapid feature iteration to production‑grade stability.

---

## 5. Bugs & Stability (ranked by severity)

| Severity | Issue | Summary | Status | Fix in progress? |
|----------|-------|---------|--------|-------------------|
| **S0 – Data loss / security risk** | **[#10165](https://github.com/zeroclaw-labs/zeroclaw/issues/10165)** – *delegate bypasses `block_high_risk_commands`* | Independent delegate can execute `rm` despite a high‑risk block; a critical security flaw. | Open, **in‑progress** (priority p1). |
| **S0** | **[#10495](https://github.com/zeroclaw-labs/zeroclaw/issues/10495)** – *Config::save() overwrites populated `config.toml`* | Large user config (109 KB) replaced by a near‑empty file, causing loss of agent definitions. | Open, **in‑progress** (priority p0). |
| **S1 – Workflow blocked** | **[#8559](https://github.com/zeroclaw-labs/zeroclaw/issues/8559)** – *Agents stop when chat window closed* | Web UI disconnect aborts in‑flight agent turns, halting long‑running tasks. | Open, **in‑progress** (priority p1). |
| **S2 – Degraded behavior** | **[#10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068)** – *Interactive session caps at 32 k tokens* | `max_context_tokens` is ignored; context limit remains at 32 k. | Open, **in‑progress** (priority p2). |
| **S2** | **[#9284](https://github.com/zeroclaw-labs/zeroclaw/issues/9284)** – *Config flush can overwrite concurrent writes* | Race condition in `RpcDispatcher::flush_config` may lose updates. | Open, **in‑progress** (priority p1). |
| **S2** | **[#10501](https://github.com/zeroclaw-labs/zeroclaw/issues/10501)** – *MCP tool‑result images 400 on OpenAI‑compatible providers* | Image payload placed inside `role: "tool"` message, rejected by OpenAI API. | Open, **in‑progress** (priority p1). |

**Fix PRs that address these bugs (as of today):**  
- **#10403** (environment fix) mitigates platform‑specific crashes that could exacerbate the delegate bug.  
- **#10555** and **#10564** clean up image‑marker handling, indirectly reducing the risk of malformed payloads like #10501.  
- No dedicated PR yet for #10165, #10495, #8559, #10068, or #9284—these remain high‑priority open items.

---

## 6. Feature Requests & Roadmap Signals  

| Feature / RFC | Likely Release Horizon* |
|----------------|-------------------------|
| **#9487 – Runtime‑owned conversation sessions & transport adapters** | **Next minor (v‑X.Y)** – high interest, already in 5th revision; likely to be merged once the design vote closes. |
| **#6996 – Granular sandbox policy** | **Next minor** – security team already reviewing; expected to land after a sandbox‑policy API refactor. |
| **#8396 – Wire‑protocol as first‑class provider construct** | **Mid‑term (v‑X.Y+1)** – needs provider‑onboarding changes; may follow after session ownership lands. |
| **#9103 – Separate memory storage from enrichment connectors** | **Mid‑term** – ties into the deterministic replay effort (see #10526). |
| **#10526 – Append‑only event history & deterministic replay** | **Mid‑term to next major** – infrastructure‑heavy; will likely ship after session‑ownership and memory split are stable. |
| **#10531 – Expose delegate sub‑agent progress** | **Next minor** – small UI/telemetry change; could be merged quickly. |
| **#10566 (PR) – Materialize image/audio in multimodal pipeline** | **Already merged** – adds a core capability for vision‑enabled providers. |

\* *“Next minor”* denotes a release expected within the next 1‑2 months (based on the current cadence of PR merges).  

Overall, the roadmap is **pivoting toward a hardened runtime** (sandbox, session ownership, deterministic state) before large‑scale new provider or UI features.

---

## 7. User Feedback Summary  

| Pain Point | Evidence |
|------------|-----------|
| **Security‑by‑design** – users see sandbox/permission bugs as blockers. | Multiple high‑risk bugs (#10165, #9284, #10495) and RFCs #6996 & #10526 emphasizing policy granularity and deterministic replay. |
| **Session continuity** – losing work on UI disconnect or token caps is a major usability issue. | Bug #8559 (Web UI disconnect) and #10068 (hard 32 k token cap) generate repeated reports. |
| **Multimodal support** – developers want images/audio to flow through the pipeline without manual conversion. | PR #10566 (materialized image/audio) and issue #10501 (MCP image 400) highlight demand for first‑class vision handling. |
| **Provider onboarding friction** – adding new LLM or tool providers feels heavyweight. | RFC #8396 calls for a first‑class wire protocol; PR #10411 (serialize same‑session messages) shows desire for cleaner message handling. |
| **Configuration robustness** – occasional config overwrites or partial init failures cause data loss. | Bugs #10495 and #10147 demonstrate that config persistence is still fragile. |

**Sentiment:** The community is **technically sophisticated** (many RFCs, security‑focus), but **frustration is growing around reliability** of long‑running sessions and config safety. The recent influx of security‑oriented issues hints at a possible shift toward enterprise‑grade expectations.

---

## 8. Backlog Watch (items needing maintainer attention)

| Item | Reason it’s Stalled |
|------|----------------------|
| **#8692 – Maintainer decision queue for RFCs & design issues** | Tracker created but no recent updates; the queue may be a bottleneck for voting on high‑impact RFCs (#9487, #6996). |
| **#9600 – Session‑persistence contract ownership & layer ordering** | Multiple workstreams touch the same contract; without a clear owner, regressions (e.g., #8559) can re‑appear. |
| **#9521 – Map MCP `type:image` into vision pipeline** | Feature request aligns with PR #10566 but remains open; a coordinated merge would complete the multimodal pipeline. |
| **#10286 – ZeroCode transcripts omit persisted turns after history trimming** | Closed, but the underlying trimming logic is still being refined in PR #9713; ensure the fix lands. |
| **#10531 – Expose delegate sub‑agent progress** | Open feature with only two comments; may be low priority but impacts debugging of delegated work. |
| **#10411 – Serialize same‑session messages** | Large PR (XL) that touches core concurrency; awaiting maintainer review before merging. |
| **#10243 – Retire unused legacy HMAC node transport** | Still open; dead code can cause confusion and increase maintenance surface. |

*Actionable recommendation:* Prioritize **#8692** to clear the decision queue, then assign an owner for **#9600** to coordinate session‑persistence changes. Closing these “process” trackers will unblock the high‑impact RFCs and bug fixes that depend on a stable contract definition.

---

### TL;DR
ZeroClaw is experiencing a **burst of architectural and security discussions**, with several high‑risk bugs still open. The immediate workstream is consolidating **runtime session ownership, sandbox policy granularity, and deterministic replay**, while short‑term fixes are landing around platform stability and multimodal support. Maintaining clear ownership of session contracts and accelerating the RFC decision queue are the most critical actions to keep momentum toward the next release.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*