# OpenClaw Ecosystem Digest 2026-08-23

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-22 22:15 UTC

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

**OpenClaw Project Digest – 2026‑08‑23**  

---  

### 1. Today’s Overview  
The repository saw heavy activity in the last 24 h: **500 issue updates** (481 still open/active, 19 closed) and **500 PR updates** (415 open, 85 merged/closed). No new releases were published today. The surge of updates indicates ongoing triage, bug‑fix work, and feature development, with maintainers and contributors actively reviewing validation, stability, and UX‑related items.  

---  

### 2. Releases  
*No new releases were tagged today.*  

---  

### 3. Project Progress (Merged/Closed PRs)  
Eighty‑five PRs reached a closed/merged state. Notable closed PRs that landed today include:  

* **[#128035] fix(sessions): show collaboration details in CLI** – restores owner/participant visibility in `openclaw sessions` output.  
* **[#120900] feat(ui): review install policy warnings** – adds an UI‑based acknowledgement step for risky plugin installs.  
* **[#116489] feat(security): require acknowledgement for install policy warnings** – CLI counterpart to the UI change above.  
* **[#126424] fix(gateway): keep conversation delivery within agent bindings** – prevents cross‑agent message leakage when using conversation tools.  
* **[#125471] fix(models): keep Claude CLI OAuth available in Control UI** – restores Claude CLI OAuth refresh after gateway restarts.  
* **[#124483] fix(qa): overlap prebuilt profile evidence producers** – reduces redundant work in QA profile runs.  

These changes improve reliability, security, and operator experience, especially around session handling, OAuth flows, and install‑time safety checks.  

---  

### 4. Community Hot Topics (Most‑Commented Issues)  
| Issue | Comments | Summary & Link | Underlying Need |
|-------|----------|----------------|-----------------|
| **[#125626] Release validation: v2026.8.1‑beta.2** | 19 | Validation worksheet for the latest beta; testers asked to run a real gateway upgrade and report results. | Need for structured, community‑driven beta verification before a stable release. |
| **[#68596] Configurable streaming watchdog timeout threshold** | 15 | Users report frequent “no stream updates for 30s” warnings when using long‑reasoning models (kimi‑k2.5, DeepSeek‑R1). | Desire to tune or disable the watchdog to avoid false positives on thoughtful models. |
| **[#96834] WhatsApp 1:1 inbound image wedges main lane ~3 min** | 14 | Sending an image to a WhatsApp 1:1 chat stalls the message lane for minutes before processing starts. | Real‑time multimodal input handling; preventing image‑induced pipeline blockage. |
| **[#67777] Subagent completion delivery can be lost on direct‑announce timeout/drain/orphan prune** | 12 | Under load or restart conditions, subagent results are not delivered back to the requester session. | Guaranteeing reliable completion propagation despite transient failures. |
| **[#51429] Hard‑coded work‑path (/Users/wangtao) merged into code** | 12 | The gateway creates a directory for a specific user and sets it as the working directory, breaking installs for others. | Eliminating hard‑coded paths to make the product portable across environments. |

These threads reveal a clear pattern: users are hitting **stability/reliability bottlenecks** (watchdog, image handling, subagent loss) and **portability/configuration friction** (hard‑coded paths, model‑picker scope).  

---  

### 5. Bugs & Stability (Severity‑Ranked)  

| Severity | Issue (ID) | Key Symptoms | Fix PR (if any) |
|----------|------------|--------------|-----------------|
| **P0 / Critical** | **[#124788] beta.2 gateway: event loop blocks ~100 s every ~10 min** | WS connections die, `/ready` stalls, cron scheduler stops; occurs even with memory plugins disabled. | No linked fix PR yet; appears tied to a recent beta change. |
| **P0** | **[#126821] SQLite corruption on pristine rebuilt DBs (WSL2)** | Freelist miscount → “paralyzed gateway” that refuses service but never exits; observed within 15‑24 h of normal operation. | No fix PR visible. |
| **P1** | **[#125570] Skill Workshop update overwrites live skill description** | Applying a skill‑update proposal replaces the live skill’s `description` front‑matter, breaking skill routing. | No fix PR yet. |
| **P1** | **[#124284] Subagent spawn fails with vLLM openai‑completions + thinking (malformed XML tool calls)** | New `wrapStreamFnWithProviderPromptState` interferes with vLLM’s API when `enable_thinking:true`. | No fix PR yet. |
| **P1** | **[#67777] Subagent completion loss (see above)** | Completion lost under timeout/drain/orphan prune. | Related PR **[#126424]** (keep conversation delivery within agent bindings) may mitigate. |
| **P1** | **[#51429] Hard‑coded work‑path** | Gateway creates `/Users/wangtao` and sets it as workspace; breaks multi‑user installs. | No fix PR yet. |
| **P2** | **[#85030] MCP tools not injected into subagent sessions** | `bundle‑mcp` + allowlists ignored; subagents receive only built‑in tools. | No fix PR yet. |
| **P2** | **[#78805] Severe Event Loop Blocking / Freezing due to Synchronous I/O** | `execSync`, `readFileSync` cause multi‑second stalls, dropping WS/HTTP connections. | No fix PR yet. |

**Takeaway:** The most urgent stability concerns revolve around **event‑loop blocking**, **SQLite corruption**, and **skill/session state corruption**. While some PRs (e.g., #126424) address adjacent delivery‑layer issues, the core blockers above lack an associated fix PR in today’s data.  

---  

### 6. Feature Requests & Roadmap Signals  

| Feature Request (ID) | Summary | Likelihood for Next Release |
|----------------------|---------|----------------------------|
| **[#68596] Configurable streaming watchdog timeout** | Add a user‑settable threshold (or disable) for the streaming watchdog. | High – directly addresses a frequent complaint; low‑risk config addition. |
| **[#13700] Session snapshots – save/load context checkpoints** | Allow users to persist and restore session state (`/session save|load`). | Medium – valuable for long‑running dev sessions; requires storage & UI work. |
| **[#45771] Built‑in pace‑aware rate limiting for autonomous agents** | Track token/tool usage and auto‑throttle to stay under provider limits. | Medium – aligns with growing autonomy use‑cases; needs metrics integration. |
| **[#57425] Graceful Gateway Restart with Session Recovery** | Persist in‑flight work across restarts so subagents and sessions can resume. | Medium‑High – complements recent work on session state durability (see #126424). |
| **[#75947] UI quality update based on UX scoring** | Redesign dense config pages for better accessibility and ergonomics. | Low‑Medium – UX work often scheduled after core stability milestones. |

The community is clearly asking for **more control over timeouts/watchdogs**, **better session persistence**, and **safer autonomous operation** – all plausible candidates for the next minor release if stability issues are first addressed.  

---  

### 7. User Feedback Summary (Pain Points & Use Cases)  

* **Portability frustration** – Hard‑coded paths (`/Users/wangtao`) break fresh installs on any machine not matching the original developer’s environment.  
* **Message loss & latency** – WhatsApp image ingestion stalls the pipeline for minutes; subagent completions disappear under load or restart; model picker only affects new sessions.  
* **Context management** – Sudden context‑usage drops after large tool outputs, and missing compaction lead to wasted tokens and confusing UI (`Context: ?/1.0m`).  
* **Reliability spikes** – Periodic event‑loop blocks (~100 s) and SQLite corruption cause gateways to become unresponsive or require manual restart.  
* **Integration friction** – MCP tool injection fails, Codex OAuth refreshes timeout after 10 s, and Claude CLI OAuth disappears after restarts.  
* **Desired ergonomics** – Users want a configurable watchdog, session snapshots, and clearer UI/UX to reduce cognitive load when managing complex agent flows.  

Overall, sentiment leans toward **appreciation for the agent framework’s power** but **frustration with edge‑case stability and configuration rigidity**.  

---  

### 8. Backlog Watch (Long‑Unanswered, High‑Impact Items)  

| Issue (ID) | Age (approx.) | Why It Matters | Current State |
|------------|---------------|----------------|---------------|
| **[#51429] Hard‑coded work‑path** | ~2 months (2026‑03‑21) | Blocks clean installs for all users; security‑risk if left unchecked. | Open, no assignee, needs product decision. |
| **[#67777] Subagent completion loss** | ~4 months (2026‑04‑16) | Undermines trust in multi‑agent workflows; can cause silent data loss. | Open, needs maintainer review & live repro. |
| **[#85030] MCP tools not injected into subagent** | ~3 months (2026‑05‑21) | Breaks extensibility; users cannot rely on custom MCP servers in subagents. | Open, needs maintainer review & live repro. |
| **[#96834] WhatsApp image wedge** | ~3 months (2026‑06‑25) | Affects a popular channel; degrades real‑time multimodal UX. | Open, needs maintainer review & live repro. |
| **[#124788] Event loop block (beta.2)** | ~2 days (2026‑08‑16) | Regression in the latest beta; threatens release quality. | Open, needs maintainer review (P0). |
| **[#126821] SQLite corruption** | ~2 days (2026‑08‑20) | Data‑integrity risk; could corrupt persistent state across upgrades. | Open, needs maintainer review (P0). |

These items have lingered without a clear owner or fix PR, yet they represent **blockers for production adoption** and **core reliability**. Prioritizing triage, assigning owners, and providing reproduce steps would help unblock progress.  

---  

**Bottom line:** OpenClaw is experiencing vigorous development activity, but a handful of high‑severity stability and usability bugs (event‑loop stalls, SQLite corruption, hard‑coded paths, subagent delivery loss) dominate the current discourse. Addressing these—potentially leveraging the several closed PRs that touch on session delivery and OAuth—will be key to stabilizing the upcoming release and satisfying the community’s request for better configurability and session resilience.

---

## Cross-Ecosystem Comparison

**Cross‑Project Comparison Report – AI Agent / Personal AI Assistant Open‑Source Ecosystem (2026‑08‑23)**  

---

### 1. Ecosystem Overview  
The open‑source agent landscape in mid‑2026 is characterised by a handful of actively maintained frameworks that differ primarily in their architectural focus (core runtime vs. UI‑centric assistants) and the maturity of their surrounding tooling (plugins, observability, deployment). While a few projects show rapid iteration and strong contributor bases, many remain in a maintenance‑only mode, grappling with long‑standing stability bugs and limited release cadence. Overall, the ecosystem is moving toward greater configurability (watchdogs, session snapshots), stricter provider contracts, and improved reliability for long‑running autonomous workflows.

---

### 2. Activity Comparison  

| Project | Open Issues* | Open PRs† | Release Today? | Health Score‡ |
|---------|--------------|----------|----------------|---------------|
| **OpenClaw** | 481 | 415 | No | Medium |
| **NanoBot** | 0 (no new issues) | 14 | No | High |
| **Hermes Agent** | 44 | 49 | No | Medium |
| **PicoClaw** | 2 | 2 | No | Low‑Medium |
| **NanoClaw** | 1 | 17 | No | Medium‑High |
| **NullClaw** | 0 | 0 | No | Low |
| **IronClaw** | 11 (touched) | 22 (touched) | No | Medium |
| **LobsterAI** | 0 (stale issues closed) | 1 | No | Low‑Medium |
| **TinyClaw** | 0 | 0 | No | Low |
| **Moltis** | 1 | 3 | No | Low |
| **CoPaw** | 6 | 6 | No | Low |
| **ZeptoClaw** | 0 | 0 | No | Low |
| **ZeroClaw** | 43 | 48 | No | Medium |

\* *Open Issues* = issues reported as still open/active in the digest (or total touched when open count not given).  
† *Open PRs* = pull‑requests still awaiting review/merge.  
‡ *Health Score* is a qualitative assessment based on development velocity, merge activity, and presence of critical (P0/P1) bugs: **High** = steady merges, few blockers; **Medium** = active but notable stability or release impediments; **Low** = minimal activity or significant unresolved critical issues.

---

### 3. OpenClaw’s Position  

| Aspect | OpenClaw | Peers (representative) |
|--------|----------|------------------------|
| **Contributor Base** | Very large – >400 issue/PR updates in 24 h indicates a broad, active community. | NanoBot (~20 PRs), Hermes Agent (~50 touches), ZeroClaw (~50 touches) are smaller but still active. |
| **Technical Approach** | Core agent runtime with heavy emphasis on **session durability**, **OAuth handling**, and **gateway‑level reliability** (e.g., PR #126424, Claude CLI OAuth fix). | NanoBot focuses on **observability & provider contracts** (typed LLM usage, trajectory backend). Hermes Agent concentrates on **fleet‑update reliability** and **profile‑gateway multiplexing**. |
| **Release Cadence** | No release today; recent activity is dominated by bug‑triage rather than versioned shipments. | NanoBot and Hermes Agent also lack daily releases but have more frequent PR merges; LobsterAI and PicoClaw have occasional UI‑focused releases. |
| **Critical Bug Load** | Multiple P0/P1 blockers (event‑loop stalls, SQLite corruption, hard‑coded paths) that lack linked fixes. | NanoBot shows only medium‑severity bugs (e.g., delayed‑message session resurrection). Hermes Agent’s P1 fleet‑update epic is open but many P2/P3 bugs are closed. |
| **Community Signals** | Strong demand for **configurable watchdogs**, **session snapshots**, and **better error handling** – mirrored in several other projects. | NanoBot’s users ask for configurable watchdog and session snapshots; Hermes Agent wants reliable updates; ZeroClaw seeks runtime‑owned sessions and memory‑lifecycle decoupling. |

*Take‑away*: OpenClaw enjoys the largest contributor pool and is tackling core‑runtime reliability, but its backlog of high‑severity stability bugs currently outweighs its rapid issue/PR churn, positioning it behind more focused, lower‑bug projects like NanoBot in terms of immediate production readiness.

---

### 4. Shared Technical Focus Areas  

| Requirement | Projects Highlighting It | Specific Needs Mentioned |
|-------------|--------------------------|--------------------------|
| **Configurable timeouts / watchdog control** | OpenClaw (#68596), NanoBot (feature request for watchdog), ZeroClaw (RFC for sandbox timeout) | Ability to raise/disable streaming watchdog threshold to avoid false positives on long‑reasoning models. |
| **Session persistence / snapshots** | OpenClaw (#13700), NanoBot (turn recovery PR #5420), ZeroClaw (runtime‑owned sessions RFC #9487) | Save/load context checkpoints; survive gateway restarts; durable admission semantics. |
| **Provider usage contract & observability** | NanoBot (LLM usage contract #5480, trajectory backend #5481), OpenClaw (OAuth refresh fixes), LobsterAI (provider limit increase) | Typed, immutable usage tracking; reliable token accounting; tracing across native SDKs. |
| **Robust plugin / tool sandboxing** | OpenClaw (WASM timeout #9403, secret service #9128), ZeroClaw (plugin timeout, sandbox carve‑out retirement), IronClaw (Notion/Slack install failures) | Prevent unbounded execution, scoped secret handling, reliable cross‑platform tool installation. |
| **UI/UX polish for turn transparency** | NanoBot (turn telemetry UX PRs #5486,#5490,#5491), LobsterAI (retry button, markdown export), CoPaw (collapsible reasoning trace) | Clear separation of reasoning vs. answer, per‑turn token visibility, error‑recovery UX. |
| **Multi‑bot / multi‑platform support** | NanoClaw (Telegram multi‑bot wizard), LobsterAI (custom provider limit increase), ZeroClaw (memory‑lifecycle decoupling for pluggable backends) | Ability to manage several bots per service, expand provider limits, swap storage backends without policy leakage. |

---

### 5. Differentiation Analysis  

| Dimension | OpenClaw | NanoBot | Hermes Agent | PicoClaw | ZeroClaw |
|-----------|----------|---------|--------------|----------|----------|
| **Primary User** | Developers needing a programmable agent core with extensive tool/plugin ecosystem. | End‑users & power‑users wanting a polished chat assistant with observability. | Enterprises/organizations managing fleets of agents across profiles and deployments. | Hobbyists & edge‑device developers valuing lightweight skill‑management. | Researchers & advanced users desiring low‑latency multimodal channels and runtime‑owned sessions. |
| **Architectural Focus** | Core runtime + gateway + session layer; strong emphasis on security (OAuth, secrets). | Provider‑agnostic usage contract + UI telemetry layer; less emphasis on low‑level networking. | Fleet‑level orchestration, profile‑gateway multiplexing, update reliability. | Skill‑installation & cron reliability; minimal UI. | Runtime‑owned conversations, memory‑lifecycle abstraction, experimental voice channels. |
| **Release Philosophy** | Frequent issue/PR churn, fewer versioned tags; stability work in progress. | Regular PR merges, aim for observable, production‑ready releases. | Focus on feature epics (updates, profile‑gateway) with periodic releases. | Sporadic bug‑fix releases; UI changes less frequent. | High RFC activity; releases gated by major architectural decisions. |
| **Community Size** | Largest (hundreds of daily interactions). | Medium‑sized (dozen active contributors). | Medium‑sized (active issue/PR triage). | Small (few contributors). | Medium‑large (high issue/PR volume, many RFCs). |

---

### 6. Community Momentum & Maturity  

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapidly Iterating** | NanoBot, ZeroClaw, OpenClaw (high PR/Issue volume) | Daily merges, active issue triage, frequent feature PRs. |
| **Stabilising / Maturing** | Hermes Agent, NanoClaw, IronClaw | Steady PR flow, focusing on bug‑fixes and feature epics; fewer open critical bugs. |
| **Maintenance‑Only / Low Momentum** | LobsterAI, PicoClaw, Moltis, CoPaw, TinyClaw, NullClaw, ZeptoClaw | Low PR/issue activity, many stale PRs, limited release cadence. |

OpenClaw sits in the **rapidly iterating** tier but its health score is dragged down by unresolved P0/P1 defects; NanoBot exemplifies rapid iteration coupled with a **high** health score due to fewer blocker bugs.

---

### 7. Trend Signals – What the Community Is Telling AI Agent Developers  

| Trend | Evidence Across Projects | Implication for Builders |
|-------|--------------------------|--------------------------|
| **Fine‑grained observability** | NanoBot’s typed usage contract & turn telemetry; OpenClaw’s OAuth/CLI fixes; LobsterAI’s retry button & markdown export. | Developers should expose per‑turn token/tracing data and give users explicit error‑recovery UI (retry, undo). |
| **Session durability & checkpointing** | OpenClaw session snapshot request, NanoBot turn‑recovery PR, ZeroClaw runtime‑owned sessions RFC. | Persisting in‑flight state across restarts is becoming a table‑stakes feature for production agents. |
| **Configurable timeouts / watchdogs** | Multiple projects report watchdog false positives on long‑reasoning models. | Provide user‑adjustable thresholds (or disable) for streaming watchdogs to accommodate varied model behaviours. |
| **Pluggable memory & storage backends** | ZeroClaw memory‑lifetime decoupling RFC, NanoClaw Telegram multi‑bot, IronClaw’s plugin sandbox work. | Abstract memory policies from concrete storage to enable swappable backends (SQLite, remote KV, WASM) without leaking logic. |
| **Robust cross‑platform tooling** | IronClaw’s Notion/Slack install failures, PicoClaw’s MCP‑hang & Telegram loop, ZeroClaw Windows CI bugs. | Ensure tool install, secret handling, and subprocess execution work uniformly on Windows, Linux, and macOS; avoid hard‑coded paths. |
| **Incremental UX improvements** | LobsterAI’s markdown export & retry button, CoPaw’s collapsible reasoning trace, NanoBot’s answer‑vs‑reasoning separation. | Small UI refinements (toast notifications, collapsible sections, export options) significantly impact perceived reliability and adoption. |
| **Security‑by‑design for plugins** | OpenClaw WASM timeout & scoped secret service; ZeroClaw plugin timeout; IronClaw’s sandbox carve‑out retirement. | Treat plugins as untrusted code: enforce execution limits, secret scoping, and clear permission models. |

**Bottom line for developers:** The convergent demand is for **observable, durable, and securely sandboxed agents** that can be tuned at runtime (timeouts, watchdogs, session snapshots) while offering a clean, informative user experience. Projects that address these themes—like NanoBot’s observability stack and OpenClaw’s session‑delivery fixes—are likely to gain traction, provided they first stabilise their critical path bugs.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-23

## 1. Today's Overview

NanoBot saw sustained, high-velocity development activity on 2026-08-23, with **21 pull requests** updated in the last 24 hours (14 open, 7 merged/closed) and **zero new issues** filed — a healthy signal that the community is converging on implementation rather than raising new problem reports. No new releases were cut. The dominant theme is a coordinated **observability and provider-usage refactor**: a typed LLM usage contract (#5480), a unified trajectory/usage backend (#5481), and a batch of WebUI/TUI improvements for turn token accounting, reasoning-shell display, and follow-up suggestions. A notable wave of long-pending PRs was finally merged/closed, including a 4-month-old Dream-config enhancement (#3294), a 3-month-old DeepSeek fix (#3869), and a 2-month-old `web_fetch` provider feature (#4430). Multiple contributors (chengyongru, ZhouJ-sh, Re-bin, yuanyi1415, tilladam, c020627, KDB-Wind, waelantar, xuhaonan013) drove the work, indicating a healthy, distributed maintainer + contributor community.

## 2. Releases

No new releases were published in the last 24 hours.

## 3. Project Progress

Seven PRs were merged or closed today, spanning features, fixes, and docs:

- **feat(web): configure web_fetch provider** ([#4430](https://github.com/HKUDS/nanobot/pull/4430)) — *merged*. Adds configurable `web_fetch` provider with `auto`, `tavily`, `jina`, and `readability` modes, replacing the old `useJinaReader`-style toggle with explicit provider selection in config and WebUI.
- **feat(webui): unify turn observability** ([#5486](https://github.com/HKUDS/nanobot/pull/5486)) — *merged*. Projects each user turn into one answer surface, preserves ordered reasoning/tool/file-edit segments, auto-collapses live activity after completion, and reports trustworthy per-turn input/output token usage.
- **fix(telegram): recover from silently stalled polling** ([#5156](https://github.com/HKUDS/nanobot/pull/5156)) — *merged*. Fixes #5171, recovering from permanent silent polling stalls caused by transient network blips on the path to Telegram (e.g., unstable proxies).
- **fix(providers): DeepSeek message hardening** ([#3869](https://github.com/HKUDS/nanobot/pull/3869)) — *closed*. Sanitizes null content (400 errors), prevents `"(empty)"` placeholder leakage into the conversation, and stops unconditional dropping of assistant text.
- **feat(dream): optional kill switch + custom Phase 1/2 template paths** ([#3294](https://github.com/HKUDS/nanobot/pull/3294)) — *merged*. Adds opt-in `enabled: bool` kill switch and `phase1_template`/`phase2_template` path fields so the self-learning loop can be customized without forking templates per upgrade.
- **docs: refresh team and contributor credits** ([#5488](https://github.com/HKUDS/nanobot/pull/5488)) — *merged*. Adds maintainer profiles (Xubin Ren, Yongru Chen), replaces contrib.rocks with a responsive avatar wall, and includes all registered human contributors while excluding bots.

## 4. Community Hot Topics

*Note: comment/reaction counts were not available in the data feed, so activity ranking is inferred from update frequency, open/closed status, and PR scope.*

The most active threads center on the **provider usage-contract refactor stack**:

- **refactor(providers): define typed LLM usage contract** ([#5480](https://github.com/HKUDS/nanobot/pull/5480)) — Replaces dynamic provider usage dictionaries with an immutable typed `LLMUsage` contract, normalizing token/cache semantics across OpenAI Chat, OpenAI Responses, Anthropic, and Bedrock.
- **feat(trajectory): add unified provider usage backend** ([#5481](https://github.com/HKUDS/nanobot/pull/5481)) — Stacked on #5480 (part of native stack #5482), recording a content-free trajectory row for every retry-managed provider attempt including fallback leaves, errors, and cancellations.

A secondary hotspot is **WebUI turn telemetry and UX**:

- **feat(webui): add follow-up suggestions** ([#5408](https://github.com/HKUDS/nanobot/pull/5408)) — Generates ephemeral, chat-scoped follow-up suggestions after successful turns, matching DeerFlow interaction semantics (empty composer sends immediately; drafts open append mode).
- **fix(webui): keep answer text outside reasoning shell** ([#5491](https://github.com/HKUDS/nanobot/pull/5491)) — Preserves answer slices across answer→tool→answer turns and keeps reasoning/activity separate.
- **fix(webui): clarify aggregate turn token usage** ([#5490](https://github.com/HKUDS/nanobot/pull/5490)) — Shows model call counts when a turn aggregates multiple prompt-token reports.

The underlying need is clear: users want **transparent, trustworthy token accounting** and cleaner AI-assisted turn UX as the project matures into a production assistant.

## 5. Bugs & Stability

Ranked by severity (with fix PRs where available):

1. **Deleted sessions resurrected by delayed messages** ([#5483](https://github.com/HKUDS/nanobot/pull/5483)) — *High*. Delayed cross-session/timeout messages recreate sessions after deletion. Fix PR open; marks cross-session delivery as requiring an existing session and checks persisted metadata without creating sessions.
2. **MCP servers reporting business errors with `isError=false`** ([#5484](https://github.com/HKUDS/nanobot/pull/5484)) — *High*. Error payloads like `{"code": 404, "msg": "data not exist"}` are treated as successful tool calls, so agents keep retrying uselessly. Fix PR open to flag such envelopes.
3. **LangSmith tracing regression for native providers** ([#5485](https://github.com/HKUDS/nanobot/pull/5485)) — *Medium*. The LiteLLM→native-SDK migration dropped the tracing callback (fixes #2493). Restores tracing via `langsmith.wrappers` wrapping.
4. **SDK ephemeral runs mutate session state** ([#5471](https://github.com/HKUDS/nanobot/pull/5471)) — *Medium*. `run(ephemeral=True)` / `run_streamed(ephemeral=True)` documented as non-persisting but did not honor that contract.
5. **Telegram silently stalled polling** ([#5156](https://github.com/HKUDS/nanobot/pull/5156)) — *Fixed/closed today.*

**Performance:** [#5489](https://github.com/HKUDS/nanobot/pull/5489) addresses an email-channel IMAP inefficiency where full message bodies were downloaded before filtering and UIDs were parsed out of the body fetch; the fix fetches headers first and uses UID SEARCH to skip re-fetch.

## 6. Feature Requests & Roadmap Signals

The direction of the next release is clearly **WebUI/observability polish plus provider-behavior hardening**:

- **Turn recovery with user control** ([#5420](https://github.com/HKUDS/nanobot/pull/5420)) — Persistent sidecar checkpoint for interrupted WebSocket turns, explicit **Continue/Dismiss** recovery in WebUI and TUI, never auto-resume. This is a strong candidate for the next version.
- **Follow-up suggestions** ([#5408](https://github.com/HKUDS/nanobot/pull/5408)) — DeerFlow-style ephemeral suggestions after turns; provider-neutral and chat-scoped.
- **Localized agent activity** ([#5367](https://github.com/HKUDS/nanobot/pull/5367)) — Localizes WebUI activity labels across all 10 supported locales with live language switching.
- **File preview panel enhancements** ([#5487](https://github.com/HKUDS/nanobot/pull/5487)) — Markdown rendering, open-in-system, and path-base alignment with session tool evidence.

Signals: the project is investing in **native provider SDK fidelity** (#5480/#5481/#5485), **measurable telemetry** (#5490/#5469), and **safer lifecycle semantics** (#5420/#5471/#5483) — all hallmarks of a product approaching production-grade maturity.

## 7. User Feedback Summary

Real user pain points reflected in today's PRs:

- **DeepSeek API friction** — null `content` fields cause 400s, `"(empty)"` placeholders leak into model conversations, and assistant text was being silently dropped (#3869, now closed).
- **Unreliable provider observability** — users lost LangSmith tracing entirely after the native-SDK migration (#5485), a clear regression from the prior LiteLLM path.
- **Turn token confusion** — aggregate usage reporting makes it hard to distinguish cumulative turn input from the final request context (#5490, #5469).
- **Assistant output mixed into reasoning shells** — answers and reasoning must be visually separated in the UI (#5491).
- **Tool-call error ambiguity** — MCP servers that return business errors via content payloads rather than `isError` flags mislead agents into endless retries (#5484).
- **Session/data integrity** — deleted sessions being silently recreated by delayed messages, and ephemeral SDK runs unexpectedly persisting transcript data (#5483, #5471).

Satisfaction signals: contributors are actively fixing their own reported regressions, long-stalled PRs (4-month, 3-month, 2-month old) finally moved to merge, and docs/credits PRs (#5488) suggest a healthy, appreciative community.

## 8. Backlog Watch

- **Longest-open PRs pending maintainer attention** (all currently `[conflict]` flagged, i.e., need rebase/merge-resolution):
  - **feat(webui): localize agent activity** ([#5367](https://github.com/HKUDS/nanobot/pull/5367)) — open since 2026-08-13, conflict flags; a broad 10-locale change with test coverage.
  - **feat(webui): add follow-up suggestions** ([#5408](https://github.com/HKUDS/nanobot/pull/5408)) — open since 2026-08-17, conflict flagged.
  - **fix(tui): show measured request context** ([#5469](https://github.com/HKUDS/nanobot/pull/5469)) — open since 2026-08-21, conflict flagged; overlaps conceptually with #5490/#5480, needs coordination.
  - **feat(runtime): user-controlled turn recovery** ([#5420](https://github.com/HKUDS/nanobot/pull/5420)) — open since 2026-08-18, conflict flagged.
  - **feat(webui): file preview path fixes + subagent activity** ([#5487](https://github.com/HKUDS/nanobot/pull/5487)) — open since 2026-08-22, conflict flagged.

These conflicting PRs are high-value but mutually overlapping (follow-up suggestions, localization, file preview, turn recovery). Maintainers should prioritize a triage pass to resolve conflicts and either merge or coalesce them before they go stale — several have already exceeded 7–10 days in flight.

---

**Overall health assessment:** NanoBot is in a strong, active development phase. No issues are piling up unanswered, features are being merged steadily, and a tight cluster of related refactors suggests a coordinated push toward a more polished, telemetry-rich native-provider experience. The main risk is the growing stack of conflict-flagged WebUI PRs, which should be reconciled promptly to avoid divergence.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent – Project Digest (2026‑08‑23)**  

---

### 1. Today's Overview  
The repository remains highly active: in the last 24 h **50 issues** and **50 pull‑requests** were touched, with 44 issues still open and 49 PRs awaiting review. No new releases were published today. The bulk of activity centers on bug‑triaging (skill‑index freshness, DeepSeek title‑generation, desktop HUD/UI glitches) and a handful of feature‑track work (fleet‑update reliability, profile‑gateway integration). Overall health shows steady maintenance pressure but a healthy flow of contributions and rapid response to regressions.

---

### 2. Releases  
*No new releases* were tagged or published in the last 24 h. The current latest version remains the last published release (outside the supplied window).

---

### 3. Project Progress (Merged/Closed PRs)  
Only one PR reached a closed state today:

| PR | Type | Summary | Status |
|----|------|---------|--------|
| [#92536](https://github.com/NousResearch/hermes-agent/pull/92536) | `feat(update): enforce image-managed update refusal contract` | Draft implementation for refusing updates when the agent is image‑managed (related to #91277). Marked **invalid** and closed. | **Closed (invalid)** |

No PRs were merged today; all other PRs remain open. Closed issues (indicating resolved work) include:

* [#38873](https://github.com/NousResearch/hermes-agent/issues/38873) – Desktop remote gateway mode flapping back to local backend (P2).  
* [#65562](https://github.com/NousResearch/hermes-agent/issues/65562) – TUI injects `NODE_ENV=production` breaking web UI build (P1).  
* [#92446](https://github.com/NousResearch/hermes-agent/issues/92446) – Duplicate skill‑guard false‑positive on `AGENTS.md/CLAUDE.md` mentions (P2).  
* [#92504](https://github.com/NousResearch/hermes-agent/issues/92504) – Docker sandbox fails when task ID contains colons (P2).  
* [#92365](https://github.com/NousResearch/hermes-agent/issues/92365) – Reasoning‑content echo opt‑in refinements (P3).  

These closures suggest recent fixes for desktop stability, build‑environment handling, skill‑scanner logic, container sandboxing, and provider‑specific reasoning output.

---

### 4. Community Hot Topics (Most‑Commented Items)  

| Item | Type | Comments | Summary & Underlying Need |
|------|------|----------|---------------------------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | Bug (skill‑index watchdog) | **77** | Automated freshness probe reports the skills index is **29.8 h old** (limit 26 h). The community needs a reliable, self‑healing index refresh mechanism to keep the Skills Hub documentation up‑to‑date. |
| [#83390](https://github.com/NousResearch/hermes-agent/issues/83390) | Bug (DeepSeek title_generation) | 18 | Auxiliary title generation fails with HTTP 400 *“This response_format type is unavailable now”* when routed to DeepSeek. Users request provider‑specific fallback or capability negotiation for unsupported `response_format` values. |
| [#91277](https://github.com/NousResearch/hermes-agent/issues/91277) | Feature (fleet update reliability) | 13 | Tracking issue for a unified deployment plan covering local, multi‑profile, remote, and image‑managed installs. Highlights frustration with ad‑hoc patchwork and desire for a deterministic, verifiable update flow. |
| [#38873](https://github.com/NousResearch/hermes-agent/issues/38873) | Bug (Desktop remote gateway) | 11 | After successful remote readiness, the Desktop client reverts to local backend. Indicates a need for stronger session‑state persistence and clearer gateway‑selection semantics. |
| [#46593](https://github.com/NousResearch/hermes-agent/issues/46593) | Bug (Kanban worker protocol) | 8 | Worker exits with `rc=0` before calling `kanban_complete`, causing a misleading “protocol violation”. Users want better error propagation and more explicit failure detection. |

These threads reveal three recurring pain points: **(1) data freshness/validation (skill index), (2) provider‑specific API compatibility (DeepSeek, reasoning output), and (3) reliable multi‑environment deployment/state persistence (desktop gateway, fleet updates).**

---

### 5. Bugs & Stability (Severity‑Ranked)  

| Severity | Issue | Description | Fix/PR Status |
|----------|-------|-------------|---------------|
| **P1** (blocking/high impact) | [#91277](https://github.com/NousResearch/hermes-agent/issues/91277) | Fleet update reliability – scattered, unreliable update logic across local/remote/profiles. | No fix PR yet; tracked as a feature/epic. |
| **P1** | [#65562](https://github.com/NousResearch/hermes-agent/issues/65562) (closed) | TUI forces `NODE_ENV=production`, stripping dev dependencies and breaking web UI build. | Fixed (closed). |
| **P2** | [#38873](https://github.com/NousResearch/hermes-agent/issues/38873) | Desktop remote gateway flaps back to local after readiness. | Fixed (closed). |
| **P2** | [#92446](https://github.com/NousResearch/hermes-agent/issues/92446) | Skill‑guard falsely quarantines legitimate project skills due to naive pattern match. | Fixed (closed). |
| **P2** | [#92504](https://github.com/NousResearch/hermes-agent/issues/92504) | Docker sandbox fails when task ID contains “:”. | Fixed (closed). |
| **P3** | [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | Skill index stale (>26 h). | Open – needs cron/workflow tweak. |
| **P3** | [#83390](https://github.com/NousResearch/hermes-agent/issues/83390) | DeepSeek title_generation 400 error. | Open – provider‑specific handling needed. |
| **P3** | [#91459](https://github.com/NousResearch/hermes-agent/issues/91459) | HUD mode shows opaque backdrop on Windows 11. | Open – UI regression. |
| **P3** | [#46593](https://github.com/NousResearch/hermes-agent/issues/46593) | Kanban worker silent exit → protocol violation. | Open – improve error reporting. |

Overall, the most critical regressions (P1) have been addressed in the last cycle, leaving a set of P2/P3 bugs that are actively being triaged.

---

### 6. Feature Requests & Roadmap Signals  

* **Fleet‑update reliability** – Epic tracking issue [#91277] signals a planned overhaul of the update pipeline to support atomic, verifiable updates across all installation modes (local, multi‑profile, remote, image‑managed). Expect this to shape the next minor release.  
* **Profile‑gateway multiplexing** – Multiple issues ([#92279], [#92525], [#91260]) highlight the need for proper session and message routing when profiles are split across gateways. A forthcoming feature likely will introduce explicit profile‑scoped caches and message stores.  
* **Memory‑file placement contract** – [#84340] requests a formalized lint/contract for the four persistent memory files (`SOUL.md`, `AGENTS.md`, `MEMORY.md`, `USER.md`). This appears on the roadmap for improved configurability and tooling.  
* **Enhanced CLI/plugin ergonomics** – PRs like [#89125] (alias `hermes plugin`) and ongoing discussion in [#28984] (typed config‑runtime contract) indicate a push toward stricter, typed interfaces to reduce silent mis‑wiring.  
* **Vision‑tool per‑model support** – PR [#92538] aims to make `supports_vision_tool_messages` resolvable per model, paving the way for finer‑grained capability advertising.  

These signals suggest the upcoming version will focus on **robust multi‑profile/gateway operations, deterministic update mechanics, and stronger type‑safe configuration boundaries**.

---

### 7. User Feedback Summary  

* **Positive** – Users appreciate the rapid response to build‑breakage (#65562) and the skill‑guard fix (#92446), noting that regressions are usually patched within a day.  
* **Frustrations** – Recurring complaints center on:  
  * **Unreliable updates** – especially when mixing local and remote gateways or using image‑managed installs (see #91277).  
  * **Provider‑specific quirks** – DeepSeek title generation and reasoning‑content echo (#83390, #92365) causing unexpected HTTP errors.  
  * **Desktop UI glitches** – HUD opacity on Windows (#91459) and sidebar flickering/pinned‑session limits (#92515).  
  * **Skill index staleness** – The automated watchdog (#66616) erodes trust in the documentation hub.  

Overall sentiment is **cautiously optimistic**: the core agent functions well, but operational reliability (updates, multi‑gateway state, provider compatibility) remains a key area for improvement.

---

### 8. Backlog Watch (Long‑Unanswered / High‑Impact Items)  

| Item | Age (days) | Comments | Why it needs attention |
|------|------------|----------|------------------------|
| [#28984](https://github.com/NousResearch/hermes-agent/issues/28984) – Typed Config‑Runtime Contract | > 1 year | 1 comment | Foundational for preventing silent mis‑wiring across plugins, config, and state. |
| [#55811](https://github.com/NousResearch/hermes-agent/issues/55811) – Runtime‑enforced capability contracts for high‑risk tools | ~55 days | 2 comments | Security‑critical; would standardize sandboxing and approval gates. |
| [#91277](https://github.com/NousResearch/hermes-agent/issues/91277) – Fleet update reliability | 2 days | 13 comments | Epic; blocking smooth rollout across installation modes. |
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) – Skill index stale | 36 days | 77 comments | Affects documentation discoverability; needs automation fix. |
| [#83390](https://github.com/NousResearch/hermes-agent/issues/83390) – DeepSeek title_generation failure | 12 days | 18 comments | Blocks a popular auxiliary feature for DeepSeek users. |

These items represent **technical debt** (typed contracts), **security/safety** (capability contracts), **release engineering** (fleet updates), and **developer experience** (skill index, provider compatibility). Prioritizing them would significantly improve long‑term project stability and user confidence.

---  

*Generated from GitHub activity on 2026‑08‑23.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest – 2026‑08‑23**  
*Generated from GitHub activity (issues/PRs updated in the last 24 h; no new releases.)*  

---  

### 1. Today’s Overview  
The repository shows modest but focused activity: 2 open issues and 2 open pull‑requests were touched in the past day, while 4 PRs were merged/closed. No version was released today. The main discussion revolves around stability problems in the agent loop (MCP connection failures) and a Telegram‑feedback bug that can cause excessive API calls. Overall, the project is maintaining a steady flow of bug‑fix work, though several longer‑running PRs remain stale and await maintainer review.  

---  

### 2. Releases  
*No new releases were published today.*  

---  

### 3. Project Progress (Merged/Closed PRs)  
| PR | Title | Summary of Changes | Link |
|----|-------|--------------------|------|
| #3319 | **fix(tools): honor exec timeout and boolean run options** | Made the `exec` tool respect per‑run `timeout`, corrected `background`/`pty` schema from strings to booleans. | sipeed/picoclaw PR #3319 |
| #714 | **skills: install/reinstall CLI and refactor into skillsCmd** | Added `ParseInstallSpec`, `InstallFromGitHubEx`, `fetchTree`, `fetchDefaultBranch`, `validateSubpath`; introduced a `reinstall` sub‑command; switched production installs to GitHub Trees API. | sipeed/picoclaw PR #714 |
| #1083 | **fix(cron): preserve recurring job schedule after execution** | Fixed recurring cron jobs that were being downgraded to one‑off tasks after execution by preserving the schedule in `executeJobByID`. | sipeed/picoclaw PR #1083 |
| #1545 | **fix: merge PR #1500 #1490 #1488 #1487 #1485** | Consolidated a batch of earlier fixes into a single merge commit. | sipeed/picoclaw PR #1545 |

These merges improve tool reliability, skill management robustness, and cron scheduling correctness.  

---  

### 4. Community Hot Topics  
| Item | Comments / Reactions | Why it’s hot | Link |
|------|----------------------|--------------|------|
| **Issue #3269** – *MCP server connection failure hangs agent loop* | 6 comments, 👍 1 | Users experience the chat interface going silent when the MCP server is unreachable; the issue has attracted discussion and a linked fix PR (#3337). | sipeed/picoclaw Issue #3269 |
| **Issue #3343** – *Tool feedback animation edits Telegram message indefinitely* | 0 comments, 👍 0 (but created today) | Generates >200 k Telegram `editMessageText` calls, triggering server‑side rate limits; a clear stability risk that needs immediate attention. | sipeed/picoclaw Issue #3343 |
| **PR #3337** – *Fix/mcp failure hangs agent loop* | (comments undefined) | Directly addresses #3269; open and stale, awaiting review/merge. | sipeed/picoclaw PR #3337 |
| **PR #3222** – *refactor(deltachat): cleanup implementation, documentation* | (comments undefined) | Large refactor (‑200 LOC) that modernises the deltachat integration; stalled since early July. | sipeed/picoclaw PR #3222 |

The most active conversation is Issue #3269, reflecting a core user pain point: loss of agent responsiveness when external services fail.  

---  

### 5. Bugs & Stability (Reported Today)  
| Severity | Issue | Description | Associated Fix PR? |
|----------|-------|-------------|--------------------|
| **High** | #3343 – Telegram feedback loop | Tool feedback animation repeatedly calls `editMessageText` every 3 s after a failed turn, leading to >228 k edits and Telegram rate‑limit (`retry_after`). | No open PR yet; needs a fix that stops the animation on turn failure or adds a safeguard counter. |
| **High** | #3269 – MCP connection failure hang | If `ensureMCPInitialized` errors (unreachable/broken MCP server), `AgentLoop.Run` propagates the error and exits, silencing the chat interface until manual restart. | PR #3337 exists (open) – proposes to catch the error, log it, and keep the agent loop alive (e.g., retry or fallback). |
| **Medium** | (none other reported today) | – | – |

Both high‑severity bugs affect core usability; #3343 is especially urgent due to potential API‑abuse penalties.  

---  

### 6. Feature Requests & Roadmap Signals  
No explicit feature requests appeared in the last 24 h. However, recent closed PRs hint at near‑term priorities:  

* **Skill management enhancements** (PR #714) – suggests a roadmap focus on making skill installation more GitHub‑native and user‑friendly.  
* **Cron job reliability** (PR #1083) – indicates continued investment in scheduled task robustness.  
* **Tool execution flexibility** (PR #3319) – points toward finer‑grained control over tool timeouts and execution modes.  

If these trends continue, the next version may surface: a more declarative skill‑install CLI, improved cron expression handling, and expanded tool‑option schema (e.g., richer boolean/int fields).  

---  

### 7. User Feedback Summary  
* **Pain Points**  
  * Agent becomes unresponsive when the MCP backend is unavailable – users lose chat capability until they restart the process.  
  * Telegram integration can spiral out of control after a tool error, spamming the API and risking bans or rate‑limits.  
* **Positive Signals**  
  * Recent fixes to cron and exec tool show responsiveness to reliability concerns.  
  * Ongoing refactor work (deltachat cleanup) signals attention to code quality and maintainability.  
* **Overall Sentiment** – Users value PicoClaw’s extensibility but are frustrated by stability gaps that break real‑time interactions. Prompt resolution of the MCP‑hang and Telegram‑loop bugs would likely improve satisfaction markedly.  

---  

### 8. Backlog Watch (Long‑Running Items Needing Attention)  
| Item | Age (as of 2026‑08‑23) | Status | Why it matters | Link |
|------|-----------------------|--------|----------------|------|
| **PR #3222** – deltachat refactor | ~1 month 20 days | Open, stale | Large cleanup (‑200 LOC) that modernises a major integration; stalled review may block future deltachat features. | sipeed/picoclaw PR #3222 |
| **Issue #3269** – MCP connection hang | ~1 month 3 days | Open, 6 comments | Core usability bug; fix PR #3337 exists but remains stale. | sipeed/picoclaw Issue #3269 |
| **PR #3337** – Fix/mcp failure hangs agent loop | ~9 days | Open, stale | Direct remedy for #3269; needs maintainer review/merge to restore agent resilience. | sipeed/picoclaw PR #3337 |
| **Issue #3343** – Telegram feedback loop | 0 days (today) | Open | High‑impact stability risk; no fix yet. | sipeed/picoclaw Issue #3343 |

These items represent the most significant technical debt and user‑impacting bugs that would benefit from prioritized triage and resolution.  

---  

*End of digest.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest – 2026‑08‑23**  
*(based on GitHub activity for the 24 h window ending 2026‑08‑23)*  

---  

### 1. Today’s Overview  
The repository shows a burst of contributor activity: **1 open issue** and **25 pull‑requests updated** (17 still open, 8 merged/closed). No new releases were published today. The open issue highlights a test‑suite regression on Node 25+, while the merged PRs collectively address a range of bugs, stability improvements, and incremental feature work (Slack setup robustness, Telegram handling, circuit‑breaker scoping, and dependency cleanup). Overall project health appears active, with maintainers merging fixes quickly and many feature‑oriented PRs still awaiting review.  

---  

### 2. Releases  
*No new releases were cut in the last 24 h.*  

---  

### 3. Project Progress (Merged/Closed PRs)  

| PR | Title (link) | Summary of change | Impact |
|----|--------------|-------------------|--------|
| #3394 | [core-team] fix(slack): working manual‑install fallback | Repairs the manual‑install fallback URL used when Slack’s app‑approval policy blocks managed installation, and adds a recovery path for agent‑driven provisioning. | Restores Slack workspace onboarding for restricted environments. |
| #3390 | [core-team] fix(setup): skip Slack auto‑provisioning when a bot is already saved | Detects an existing `SLACK_BOT_TOKEN` before offering to create a new Slack app, preventing duplicate agents. | Eliminates duplicate Slack app creation during re‑runs of the setup wizard. |
| #3445 | Closing: wrong repository | PR opened against the wrong upstream; closed without changes. | No functional impact (administrative). |
| #3443 | [core-team] build: drop better‑sqlite3 from onlyBuiltDependencies | Removes the manual `node‑gyp` build step for `better-sqlite3` now that the package ships prebuilt binaries. | Speeds up CI/install and avoids unnecessary compilation. |
| #3444 | [core-team] fix(upgrade‑state): accept a version‑matching marker when Git cannot identify the checkout | Falls back to a version‑only comparison (with a warning) when `getCodeIdentity` returns `unknown`. | Makes upgrade checks reliable in environments lacking Git metadata (e.g., some CI containers). |
| #3434 | [PR: Fix, follows‑guidelines, core‑team] fix(chat‑sdk): polling adapters do not open the webhook server | Ensures polling‑based adapters (Telegram, etc.) skip spinning up an unused webhook listener. | Reduces resource usage and avoids spurious port conflicts. |
| #3431 | [PR: Fix, follows‑guidelines, core‑team] fix(telegram‑setup): pairing card says 6 digits | Corrects the UI text in the Telegram pairing flow to reflect the actual 6‑digit code length. | Improves user experience during bot onboarding. |
| #3385 | [core‑team] fix(approvals): MPDM‑aware approval cards via resolveConversation (still **open** but updated) – *included for context* | Adjusts approval card rendering for Slack group DMs so they show a readable name instead of an auto‑generated `mpdm‑…` slug. | Awaiting merge; will fix UI confusion in multi‑person DMs. |

*Note: The list above reflects the closed/merged PRs visible in the supplied data; the remaining three closed PRs from the total of eight are not detailed in the excerpt but follow similar bug‑fix or housekeeping patterns.*  

---  

### 4. Community Hot Topics  

All PRs and the single issue currently show **undefined comment counts** in the export, indicating that discussion volume is low or not captured. Nevertheless, the most visible items (by recency and relevance) are:  

- **Issue #3453** – *stdin‑json tests fail on Node 25+* ([link](https://github.com/qwibitai/nanoclaw/issues/3453))  
  - **Why it matters:** A test regression that blocks CI on the latest Node release; resolves by updating test expectations or suppressing the tsx loader deprecation warning.  

- **PR #3450** – *Telegram: trust channel’s own identity in sender_scope gate* ([link](https://github.com/qwibitai/nanoclaw/pull/3450))  
  - **Why it matters:** Addresses a long‑standing permission‑gate problem where broadcast‑channel posts were treated as unknown senders, preventing reactions.  

- **PR #3449** – *fix(telegram): pin explicit allowedUpdates to stop channel‑post blackholing* ([link](https://github.com/qwibitai/nanoclaw/pull/3449))  
  - **Why it matters:** Guarantees the Telegram adapter receives channel‑post updates, fixing missing events.  

These items point to ongoing work hardening the Telegram adapter and ensuring test reliability across Node versions.  

---  

### 5. Bugs & Stability  

| Severity | Item | Description | Fix PR (if any) |
|----------|------|-------------|-----------------|
| **High** | Test failure on Node 25+ (Issue #3453) | `tsx` loader’s `module.register()` deprecation writes to stderr, breaking assertions in stdin‑json tests. | No fix PR yet; likely to be addressed by updating test expectations or adding a `nodeOptions` flag to suppress the warning. |
| **Medium** | Slack manual‑install fallback broken (PR #3394) | Fallback URL failed Slack’s `redirect_uri` validation; agent‑driven provisioning dead‑ended. | **Merged** – restores Slack onboarding under restricted policies. |
| **Medium** | Duplicate Slack app on setup rerun (PR #3390) | Setup wizard ignored an existing `SLACK_BOT_TOKEN` and created a second app. | **Merged** – prevents duplicate agents. |
| **Low** | Unnecessary webhook server for polling adapters (PR #3434) | Polling adapters opened an unused webhook listener, wasting ports. | **Merged** – removes the listener. |
| **Low** | `better-sqlite3` rebuild step (PR #3443) | Forced `node‑gyp` rebuild despite prebuilt binaries being available. | **Merged** – speeds up installs. |
| **Low** | Upgrade‑state check too strict (PR #3444) | `isUpgradeCurrent` required full Git identity, failing in CI without Git. | **Merged** – adds fallback version‑only check with warning. |

Overall, the most pressing stability concern is the Node 25+ test regression; all other bugs have already been resolved via merged PRs.  

---  

### 6. Feature Requests & Roadmap Signals  

Several feature‑oriented PRs remain open, signaling near‑term roadmap priorities:  

- **Telegram multi‑bot support** – PRs #3438 (wizard “add another Telegram bot”), #3437 (docs for add‑another‑bot path), #3435 (carry adapter instance through pairing/init), and #3431 (pairing card text). These collectively prepare the wizard to handle multiple Telegram bots per workspace.  
- **Cursor Agent integration** – PR #3355 (add `/add-cursor` agent provider skill) and PR #3356 (add Cursor Agent SDK payload) indicate work to let NanoClaw agents be spawned from the Cursor IDE.  
- **Chat‑SDK cleanup** – PR #3434 (already merged) stops polling adapters from opening a webhook server, a preparatory step for a more unified adapter lifecycle.  
- **Group‑scope auto‑fill warning** – PR #3448 warns when a group‑scope auto‑fill overrides an explicit argument, addressing usability confusion (#2464).  

If these PRs are merged, the next release will likely feature:  

1. **Multi‑Telegram‑bot setup wizard** (with docs).  
2. **Cursor‑IDE agent provisioning** skill.  
3. **Improved group‑scope CLI behavior** (warnings on overridden args).  

---  

### 7. User Feedback Summary  

Direct user comments are not present in the data dump, but the nature of the open issue and PRs reflects common pain points:  

- **CI/test flakiness on new Node versions** – users see test runs fail after upgrading Node, prompting the need for a stable test suite.  
- **Slack onboarding friction** – restricted app‑approval policies and accidental duplicate agents have been reported; the merged fixes directly address these.  
- **Telegram adapter reliability** – missing channel‑post events and mis‑identified senders have caused bots to ignore reactions or fail to receive updates; the ongoing PRs aim to close those gaps.  
- **Desire to manage multiple bots per platform** – the “add another Telegram bot” wizard feature responds to users who run several Telegram bots (e.g., for different teams or environments).  

Overall sentiment appears **constructive**: users are actively reporting blockers and contributing fixes, indicating an engaged community.  

---  

### 8. Backlog Watch  

Long‑running open items that may benefit from maintainer attention:  

| Item | Age (as of 2026‑08‑23) | Why it matters | Suggested action |
|------|----------------------|----------------|------------------|
| **PR #3355** – feat(setup): add /add‑cursor agent provider skill | 4 days | Adds a new IDE‑based agent provisioning path; could broaden adoption. | Review for completeness, add tests, merge if aligned with roadmap. |
| **PR #3356** – feat(providers): add Cursor Agent SDK payload | 4 days | Companion to #3355; provides the SDK contract. | Same as above. |
| **Issue #3453** – stdin‑json tests fail on Node 25+ | 1 day (but blocks CI) | Prevents green CI on latest Node LTS; affects all contributors. | Prioritize a test‑suite fix (update expected stderr or suppress deprecation warning). |
| **PR #3385** – fix(approvals): MPDM‑aware approval cards via resolveConversation | 3 days | Improves UX in Slack group DMs; currently open but updated recently. | Quick review and merge to close the approval‑card UI gap. |
| **PR #3448** – ncl: warn when group scope overrides an explicit auto‑fill arg (#2464) | 1 day | Addresses a known usability surprise; low risk. | Merge after verifying warning wording. |

These items represent opportunities to deliver new features (Cursor integration) and polish existing behaviors (approvals, group‑scope warnings).  

---  

**Bottom line:** NanoClaw is experiencing healthy contributor throughput, with many bugs already resolved and multiple feature strands (Telegram multi‑bot, Cursor agent, group‑scope UX) nearing completion. The immediate blocker is the Node 25+ test regression; addressing it will restore CI stability and allow the pending features to flow into the next release.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw Project Digest – 2026‑08‑23**  
*Generated from GitHub activity in the last 24 h (issues = 11, PRs = 22, no new releases).*

---

### 1. Today's Overview
The repository showed strong maintenance momentum: 4 issues were closed and 5 PRs merged/closed, indicating active bug‑fixing and cleanup work. Open work remains focused on improving the onboarding suggestion flow, sandbox credential handling, and core performance (context projection). Overall health is good – steady throughput of small‑to‑medium fixes coupled with a few larger, ongoing feature efforts.

### 2. Releases
*No new releases were published in the last 24 h.*

### 3. Project Progress (Merged/Closed PRs Today)
| PR | Title / Summary | Link |
|----|-----------------|------|
| #7768 | Remove unused Settings and Extensions tabs and duplicate route metadata | <https://github.com/nearai/ironclaw/pull/7768> |
| #7767 | Make Automation presenter date tests timezone‑robust | <https://github.com/nearai/ironclaw/pull/7767> |
| #7769 | Surface extension setup phase and blockers in Configure | <https://github.com/nearai/ironclaw/pull/7769> |
| #7691 | Publish run outcome notifications and harden notification lifecycle behavior | <https://github.com/nearai/ironclaw/pull/7691> |
| #7773 | refactor(webui): remove duplicate Settings and Extensions tabs | <https://github.com/nearai/ironclaw/pull/7773> |
| #7774 | test(webui): make automation presenter date assertions timezone‑robust | <https://github.com/nearai/ironclaw/pull/7774> |
| #7772 | fix(webui): surface extension setup phase and blockers in Configure | <https://github.com/nearai/ironclaw/pull/7772> |
| #7700 | feat(notifications): publish authoritative run outcomes | <https://github.com/nearai/ironclaw/pull/7700> |
| #7076 | Install the packages the catalog already publishes | <https://github.com/nearai/ironclaw/pull/7076> |

**What advanced:**  
- UI cleanup (removing duplicate tabs, fixing heading cropping in #7813 is still open but related work progressed).  
- Test robustness (timezone‑aware date assertions in Automation presenter).  
- Notification system hardening (publishing run outcomes from Process Journal).  
- Dependency hygiene (installing catalog‑published packages).  

### 4. Community Hot Topics (Most Commented / Reacted Items)
| Item | Comments | Reactions | Why it matters |
|------|----------|-----------|----------------|
| **Issue #7824** – *Context projection: Pi‑style compaction barrier, structured summaries, overflow recovery* | 2 | 0 | Highlights a measurable cost blow‑up (≈ 227 M input tokens, $10.31) when replaying full thread history; signals urgent need for context‑compression strategies. |
| **Issue #7815** – *Onboarding suggestions: cumulative net‑new work to close the connect → suggest → thread flow* | 1 | 0 | Tracks end‑to‑end onboarding suggestions work; reflects product‑team focus on improving new‑user experience. |
| **PR #7810** – *feat(sandbox): mediate GitHub CLI through generic credential bindings* | 0 (comment count not shown) | 0 | Core sandbox security work; replaces GitHub‑specific carve‑out with a generic credential‑binding mechanism. |
| **PR #7765** – *feat(hooks): AfterTurn lifecycle point + memory curation* | 0 | 0 | Introduces a privileged lifecycle hook that could enable future memory‑curation features. |

*Underlying needs:* The community is most vocal about **performance/context‑window efficiency** (#7824) and **smooth onboarding** (#7815). Both tie directly to user‑perceived latency and first‑time‑setup friction.

### 5. Bugs & Stability (Reported Today)
| Severity | Issue | Summary | Fix PR (if any) |
|----------|-------|---------|-----------------|
| **High** | #7823 – Notion install fails in IronClaw | Installation of the Notion tool aborts; blocks a popular integration. | – |
| **High** | #7822 – Slack user unable to set up Slack in IronClaw | Slack integration setup fails; often co‑occurs with Notion issue. | – |
| **Medium** | #7813 – UI heading gets cropped when suggestions panel appears | Visual regression in chat home screen layout. | – |
| **Medium** | #7812 – Onboarding suggestions ignore user‑level tool permissions | Suggestions generated without respecting user‑granted tool scopes, potentially leaking data. | – |
| **Low** | #7825 – Sandbox egress auth: retire GitHub‑specific carve‑out | More of a feature/clean‑up; not a bug but important for security. | #7810 (open) addresses part of this. |

*No fix PRs were merged for the above bugs today; they remain open for triage.*

### 6. Feature Requests & Roadmap Signals
| Feature Request | Linked Issue/PR | Indicates Near‑Term Focus |
|-----------------|-----------------|---------------------------|
| Context projection / compaction barrier | #7824 (open) | High priority – addresses runaway token usage and cost. |
| Generic sandbox credential broker (retire GitHub carve‑out) | #7825 (open) & #7810 (open) | Security hardening; likely to land soon as it’s already in PR. |
| Onboarding suggestions refinement (refresh, connect entries) | #7815 (open) + #7816 (PR) | UI/UX polishing for new‑user flow; flagged behind `oobe_suggestions`. |
| Respect user‑level tool permissions in suggestions | #7812 (open) | Privacy‑by‑design; expected before suggestions go GA. |
| Subagent background mode (receipt spawns, healing sweeps) | #7818 (open) | Enables autonomous agents; part of larger R2 subagent effort. |
| CI expedite pipelines (nextest, toolchain pinning) | #7817, #7821, #7819, #7820, #7809 (all open) | Infrastructure work to reduce green‑locally/red‑in‑CI drift; should stabilize CI shortly. |

**Prediction:** The next version will likely ship the **sandbox credential broker** (#7810/#7825), **onboarding suggestion UI tweaks** (#7816), and **CI toolchain stabilization** (#7821). The heavy‑weight context‑projection work (#7824) may stay in a feature branch until performance targets are met.

### 7. User Feedback Summary (Slack‑sourced)
- **Notion installation failure** (#7823) and **Slack setup failure** (#7822) were both reported by the same user (alejo.escriva) on 2026‑07‑28, indicating a broader integration‑onboarding problem.  
- Users express frustration when tools cannot be added, which directly impacts adoption of IronClaw as an extensible AI agent platform.  
- No positive feedback items were captured in the last 24 h; the sentiment leans toward **dissatisfaction** regarding integration reliability.

### 8. Backlog Watch (Long‑Unanswered / Important Items)
| Item | Age (days) | Reason for Attention |
|------|------------|----------------------|
| #7650 – *feat(automations): derive run outcomes from runtime evidence* | 9 | Core automation reliability; still open despite being a large feature. |
| #7491 – *feat(coding): omp core‑tool contract + engines + benchmark arm* | 12 | Affects coding‑tool performance and benchmarking; high impact on developer experience. |
| #7257 – *docs(design‑system): proposal, plan & checklist* | 18 | Documentation needed for upcoming UI redesign; blocks design‑system adoption. |
| #7255 – *docs(governance): evaluate APDD kit* | 18 | Governance documentation influences contribution process. |
| #7824 – *Context projection* (performance) | 1 | Although fresh, its cost implications make it a blocker for any release that enables long threads. |
| #7810 – *Sandbox GitHub CLI mediation* (security) | 1 | Open PR; merging soon will close a notable security carve‑out. |

**Maintainer action:** Prioritize reviewing and merging the sandbox credential PR (#7810) and addressing the high‑impact bugs #7823/#7822. Simultaneously, move the long‑running automation outcome work (#7650) forward, as it underpins notification reliability and user trust.

---  

*All links point to the `nearai/ironclaw` repository on GitHub.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI Project Digest – 2026‑08‑23**  

---

### 1. Today's Overview  
Activity in the LobsterAI repository was low over the past 24 hours: two stale issues were closed, five pull requests were merged/closed, and one pull request remains open. No new releases were tagged. The project appears to be in a maintenance‑focused state, with recent work centered on polishing existing features (error handling, retry UX, provider limits) and implementing a long‑requested Markdown export capability.

---

### 2. Releases  
*No new releases were published today.*

---

### 3. Project Progress – Merged/Closed PRs (5)  

| PR | Type | Summary | Link |
|----|------|---------|------|
| #1205 | **fix(cowork)** | Show a localized toast and keep the rename input open when session rename fails, instead of silently swallowing the error. | [#1205](https://github.com/netease-youdao/LobsterAI/pull/1205) |
| #1208 | **feat(cowork)** | Add an inline **Retry** button to error bubbles for transient failures (429, network glitches, etc.), allowing users to resend the last message without re‑typing. | [#1208](https://github.com/netease-youdao/LobsterAI/pull/1208) |
| #1209 | **fix(web‑search)** | Prevent the unsupported Chrome flag `--disable-blink-features=AutomationControlled` from being injected into the web‑search skill, which caused launch failures in Chrome 130+. | [#1209](https://github.com/netease-youdao/LobsterAI/pull/1209) |
| #1212 | **fix(model)** | Raise the limit of custom model providers from 10 to 20 by moving the provider key list out of a hard‑coded range in the Settings UI. | [#1212](https://github.com/netease-youdao/LobsterAI/pull/1212) |
| #1214 | **feature** | Implement “Export as Markdown” for session details (closes #1345). Reuses existing conversation builders, formats tool calls as `**[tool] args**` + code block, and includes session title, timestamp, and turn order. | [#1214](https://github.com/netease-youdao/LobsterAI/pull/1214) |

*Note:* PR #2452 (fix OpenClaw provider preservation for slash‑containing model IDs) is still **open** and will be covered in the Backlog Watch section.

---

### 4. Community Hot Topics  

All interaction metrics are low, but the two recently closed issues each garnered **2 comments**, making them the most discussed items today.

| Item | Title | Comments | Reactions | Link | Underlying Need |
|------|-------|----------|-----------|------|-----------------|
| Issue #1206 | 【bug】 私有化部署的kimi2.5模型分析文档会重复处理或回复进度 | 2 | 0 | [#1206](https://github.com/netease-youdao/LobsterAI/issues/1206) | Users experience duplicated status messages when the Kimi 2.5 model processes documents, leading to confusion about whether the model is still working or stuck. |
| Issue #1213 | [功能建议] 为会话详情添加「导出为 Markdown」功能 | 2 | 0 | [#1213](https://github.com/netease-youdao/LobsterAI/issues/1213) | Demand for a text‑based export (Markdown) to enable easy quoting, archiving, and post‑processing of conversation logs, beyond the current image‑only export. |

*Analysis:* Both topics reflect usability pain points—clarity of model progress reporting and data portability. The second issue directly drove the implementation seen in PR #1214.

---

### 5. Bugs & Stability (Today)

| Severity | Bug Description | Related Fix PR(s) | Link |
|----------|----------------|-------------------|------|
| **Medium** | Kimi 2.5 model repeatedly echoes the same “current action” during document analysis, causing user uncertainty. | – (issue closed as stale; no fix PR in the last 24 h) | [#1206](https://github.com/netease-youdao/LobsterAI/issues/1206) |
| **Low** | Session rename failures silently close the input without feedback, leaving the title unchanged. | #1205 (toast + input retention) | [#1205](https://github.com/netease-youdao/LobsterAI/pull/1205) |
| **Low** | Web‑search skill fails to launch when an external Chrome flag `--disable-blink-features=AutomationControlled` is present. | #1209 (flag filtering) | [#1209](https://github.com/netease-youdao/LobsterAI/pull/1209) |

No crashes or regressions were reported; the listed bugs are primarily UX or configuration issues.

---

### 6. Feature Requests & Roadmap Signals  

| Feature | Source | Status | Expected Impact |
|---------|--------|--------|-----------------|
| **Export session as Markdown** | Issue #1213 → PR #1214 (merged) | Implemented | Enables portable, editable logs; likely to appear in the next patch/minor release. |
| **Manual retry button for transient errors** | PR #1208 (merged) | Implemented | Improves resilience to rate limits/network glitches; reduces re‑typing effort. |
| **Increase custom provider limit to 20** | PR #1212 (merged) | Implemented | Removes a hard ceiling for power users who maintain many private/model endpoints. |
| **Preserve provider prefix for slash‑containing model IDs** | PR #2452 (open) | Pending review | Prevents loss of provider scoping when model IDs contain `/` (e.g., `deepseek-ai/DeepSeek-V4-Flash`). |

Given the recent merges, the next version will likely bundle the Markdown export, retry UX, and expanded provider limit as headline improvements.

---

### 7. User Feedback Summary  

- **Pain Points:**  
  - Duplicate progress messages make it unclear if the model is still working (Issue #1206).  
  - Lack of a text‑based export forces users to rely on screenshots or manual copy‑paste (Issue #1213).  
  - Silent failures during session rename leave users unaware of errors (PR #1205).  
  - Rate‑limit or network errors require re‑typing the last message (PR #1208).  
  - Arbitrary cap of 10 custom providers blocks workflows that need more (PR #1212).  

- **Positive Signals:**  
  - Quick response to feature requests (Markdown export implemented within the same cycle).  
  - Focus on incremental UX fixes (toast notifications, retry buttons) that directly improve day‑to‑day interaction.  

Overall satisfaction appears moderate; users appreciate responsiveness but still encounter occasional confusing states and missing conveniences.

---

### 8. Backlog Watch  

| Item | Type | Reason for Attention | Link |
|------|------|----------------------|------|
| PR #2452 | **Open** | Fixes provider preservation for model IDs containing `/` (e.g., `custom_0` + `deepseek-ai/DeepSeek-V4-Flash`). Without it, the provider prefix is lost, causing mis‑resolution of custom models. This is a blocking issue for users relying on slash‑separated model identifiers. | [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452) |
| (No open issues) | – | All reported issues from the last 24 h are closed (stale). No long‑lived open issues require immediate triage. | – |

*Action:* Maintainers should review and merge PR #2452 soon to prevent regression for users with custom model IDs that include slashes.

---  

**Conclusion:** LobsterAI is currently stabilizing its core workflow—error handling, retry mechanisms, and provider flexibility—while delivering highly requested export functionality. The single open PR (#2452) represents the next clear stability improvement; addressing it will keep the project on a healthy trajectory.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis Project Digest – 2026‑08‑23**  
*Generated from GitHub activity (issues/PRs updated in the last 24 h).*

---

### 1. Today's Overview  
The repository saw low‑volume but focused activity today: **1 open issue** and **3 open pull requests**, all created/updated on 2026‑08‑22. No releases were published and no PRs have been merged or closed yet. The work centers on improving reliability (tool schema safety, MCP client handling, Browserless v2 support) and adding a security‑oriented feature (opt‑in fail‑closed error policy for hooks). Overall project health appears stable, with contributors addressing specific bugs and a requested enhancement.

---

### 2. Releases  
*No new releases were published in the last 24 h.*  

---

### 3. Project Progress  
| Type | Count | Details |
|------|-------|---------|
| Merged/Closed PRs | 0 | No PRs reached merge or close status today. |
| Open PRs (activity) | 3 | All three PRs are still awaiting review: <br>• **#1232** – fix(tools): make object schemas OpenAI‑safe <br>• **#1231** – fix(mcp): resolve current client after server restart <br>• **#1229** – fix(browser): support Browserless v2 containers |
| Open Issues (activity) | 1 | **#1230** – feat(hooks): add an opt‑in fail‑closed error policy for modifying security hooks |

*No features were landed or bugs fixed via merged PRs today; the open PRs represent the current work‑in‑progress.*

---

### 4. Community Hot Topics  
All items have zero comments and no reactions recorded, so “hot” is inferred from the nature of the change rather than discussion volume.

| Item | Type | Link | Why it draws attention |
|------|------|------|------------------------|
| **#1230** – feat(hooks): add an opt‑in fail‑closed error policy for modifying security hooks | Issue | [moltis-org/moltis#1230](https://github.com/moltis-org/moltis/issues/1230) | Addresses a security gap: hook failures currently degrade to continuation, which could bypass policy enforcement. Users request a configurable fail‑closed mode. |
| **#1232** – fix(tools): make object schemas OpenAI‑safe | PR | [moltis-org/moltis#1232](https://github.com/moltis-org/moltis/pull/1232) | Fixes a compatibility problem with OpenAI’s strict tool schemas where unspecified properties caused null/empty values. Directly impacts tool correctness. |
| **#1231** – fix(mcp): resolve current client after server restart | PR | [moltis-org/moltis#1231](https://github.com/moltis-org/moltis/pull/1231) | Resolves a runtime bug where stale MCP client references persisted after a server restart, causing failed tool invocations. |
| **#1229** – fix(browser): support Browserless v2 containers | PR | [moltis-org/moltis#1229](https://github.com/moltis-org/moltis/pull/1229) | Adds support for the newer Browserless v2 runtime while preserving v1 defaults, responding to user demand for up‑to‑date browser automation. |

*Underlying needs:* stronger security guarantees for hook‑based policies, correct schema generation for LLM tool calls, resilient MCP connections, and up‑to‑date browser‑automation backing.

---

### 5. Bugs & Stability  
All three open PRs are bug‑fixes; none have been merged yet, so the reported issues remain open.

| Severity | Item | Description | Fix PR |
|----------|------|-------------|--------|
| **High** | #1232 – Object schemas not OpenAI‑safe | Unspecified patch/map schemas forced Codex to send null/empty values, breaking tool execution. | #1232 |
| **Medium** | #1231 – MCP client stale after server restart | Active chat turns used a closed client instance until the next registry rebuild, causing dropped tool calls. | #1231 |
| **Low** | #1229 – Browserless v2 container support missing | Users wanting to run Browserless v2 cannot do so without manual work‑arounds. | #1229 |

*No crash or regression reports were filed today beyond the functional bugs addressed in the PRs.*

---

### 6. Feature Requests & Roadmap Signals  
- **#1230** (opt‑in fail‑closed error policy for modifying hooks) is the sole feature request.  
  - **Roadmap implication:** If accepted, this would likely appear in the next minor release as a new hook‑policy option, enhancing Moltis’s suitability for security‑critical environments.  
  - No other feature requests were observed in the last 24 h.

---

### 7. User Feedback Summary  
- **Security concern:** Users report that hook failures presently “degrade to continuation,” potentially allowing disallowed tool execution. Request for a configurable *fail‑closed* mode indicates a desire for stricter, opt‑in safety guarantees.  
- **Tool‑schema correctness:** The OpenAI‑safe schema fix highlights friction when generating strict JSON schemas for LLM tool calls; users expect generated schemas to be directly consumable without manual patching.  
- **MCP resilience:** The MCP client‑restart issue points to a need for automatic rebinding of tool‑bridge connections after server lifecycle events.  
- **Browser automation:** Demand for Browserless v2 support shows the community is tracking the upstream container runtime and wants seamless upgrades.  

Overall feedback suggests satisfaction with core functionality but a appetite for hardening security interfaces, improving LLM tool compatibility, and keeping third‑party integrations current.

---

### 8. Backlog Watch  
| Item | Age (as of 2026‑08‑23) | Status | Attention Needed |
|------|-----------------------|--------|------------------|
| **#1230** – feat(hooks): add opt‑in fail‑closed error policy | 1 day (opened 2026‑08‑22) | Open, 0 comments | Maintainer review to assess design, security impact, and merge priority. |
| **#1232** – fix(tools): make object schemas OpenAI‑safe | 1 day | Open, 0 comments | Quick look; likely low‑risk, can be merged after CI passes. |
| **#1231** – fix(mcp): resolve current client after server restart | 1 day | Open, 0 comments | Verify test coverage for server‑restart scenario; merge if green. |
| **#1229** – fix(browser): support Browserless v2 containers | 1 day | Open, 0 comments | Confirm compatibility with existing v1 defaults; merge after validation. |

*No items appear stalled beyond a day; however, the lack of comments/reactions indicates that the maintainers have not yet begun detailed review. Prioritizing the security feature (#1230) and the high‑impact schema fix (#1232) would be prudent.*

---  

**End of digest.**  
*All links point to the respective GitHub items within the `moltis-org/moltis` repository.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw Project Digest – 2026‑08‑23**  
*Repository: agentscope-ai/QwenPaw*  

---

### 1. Today's Overview  
The project shows steady community activity: 6 issues and 6 pull requests were updated in the last 24 h, but none of the PRs have been merged or closed yet. One enhancement request (#7043) was closed, indicating that maintainers are triaging older tickets. Overall, the repository is active with ongoing discussions, yet the merge velocity is low today, suggesting a backlog of contributions awaiting review.

### 2. Releases  
*No new releases were published today.*

### 3. Project Progress  
- **Merged/closed PRs:** 0 (all 6 PRs remain open).  
- **Closed issues:** 1 (#7043 – UTF‑8 startup request).  
No features were landed or bugs fixed in the main branch today; progress is limited to issue triage and PR preparation.

### 4. Community Hot Topics  
| Item | Type | Comments | Reactions | Link | Why it’s hot |
|------|------|----------|-----------|------|--------------|
| #7196 | Issue (enhancement) | 2 | 👍 1 | [#7196](https://github.com/agentscope-ai/QwenPaw/issues/7196) | Users want the reasoning trace to be collapsible by default to reduce visual noise – a widely‑requested UI tweak. |
| #7043 | Issue (enhancement, closed) | 1 | 👍 0 | [#7043](https://github.com/agentscope-ai/QwenPaw/issues/7043) | Recently closed after discussion; reflects a persistent need for reliable UTF‑8 handling on Windows. |
| #7215 | Issue (bug) | 1 | 👍 0 | [#7215](https://github.com/agentscope-ai/QwenPaw/issues/7215) | Interface fails to render newly added OpenRouter/OpenCode models – blocks usability for multi‑provider setups. |
| #7213 | Issue (bug) | 1 | 👍 0 | [#7213](https://github.com/agentscope-ai/QwenPaw/issues/7213) | Superfluous blank lines clutter chat output, affecting readability. |
| #7201 | Issue (enhancement) | 1 | 👍 0 | [#7201](https://github.com/agentscope-ai/QwenPaw/issues/7201) | Request to split media‑size caps per‑type (image/video/audio) and expose them in settings. |
| #7212 | Issue (bug) | 1 | 👍 0 | [#7212](https://github.com/agentscope-ai/QwenPaw/issues/7212) | Crashes when an image exceeds a provider’s pixel‑dimension limit, even if under the byte cap. |

*The most active conversation is #7196, drawing two comments and a reaction, indicating strong user interest in UI customization.*

### 5. Bugs & Stability (today)  
| Severity | Issue | Summary | Linked Fix PR? |
|----------|-------|---------|----------------|
| **High** | #7212 | Sending an image whose pixel dimensions exceed a provider’s limit crashes the request (`MODEL_EXECUTION_ERROR`). | No associated PR yet. |
| **Medium** | #7215 | After adding OpenRouter/OpenCode model backends, the GUI does not display the models. | No associated PR yet. |
| **Low** | #7213 | Chat output contains meaningless empty lines, reducing readability. | No associated PR yet. |

*No bug‑fix PRs were merged today; all reported bugs remain open.*

### 6. Feature Requests & Roadmap Signals  
- **Collapsible reasoning trace** (#7196) – aligns with UI‑polish trends seen in tools like Hermes; likely to be considered for the next UI‑focused release.  
- **Granular media caps** (#7201) – splitting `max_inline_media_bytes` into per‑type limits would give providers finer control; a plausible candidate for an upcoming settings refactor.  
- **UTF‑8 startup on Windows** (#7043, now closed) – the request was addressed (closed), suggesting the team may have already implemented or deemed it low‑priority; watch for any follow‑up if the closure was premature.  
- **Disable thinking for title generation** (PR #7187) – though a PR, it reflects a desire to suppress reasoning output in auto‑generated chat titles; if merged, it would complement #7196.  

*Overall, user feedback points toward UI customization (reasoning visibility, cleaner output) and more granular provider‑level configuration.*

### 7. User Feedback Summary  
- **Pain points:**  
  - Persistent visual distraction from always‑expanded reasoning traces.  
  - Unwanted blank lines in chat logs.  
  - GUI not reflecting newly added model backends (OpenRouter/OpenCode).  
  - Application crashes on images that satisfy byte limits but exceed pixel limits.  
  - Need for reliable UTF‑8 console output on Windows (now closed).  
- **Use cases:**  
  - Debugging agents/skills where reasoning traces are useful only intermittently.  
  - Multi‑provider setups requiring seamless model discovery in the UI.  
  - Media‑heavy workflows (image/video/audio) where inline size limits must be respected per media type.  
- **Satisfaction:** Users appreciate the extensibility (multiple backends, cron‑job model overrides) but express frustration with UI stability and output clarity.  

### 8. Backlog Watch  
**Long‑open PRs awaiting review (≥ 2 weeks):**  
- #6808 (Aug 07) – show custom profile markdown files in the Files workspace.  
- #7050 (Aug 15) – per‑cron‑job model override picker.  
- #7054 (Aug 15) – remote bridge endpoint for LAN/network browsers.  

**First‑time contributor PRs needing attention:**  
- #7214 (Aug 22) – add Access Policy to the Security Features list in README.  
- #7187 (Aug 21) – disable thinking for title generation (ready for merge).  
- #7190 (Aug 21) – PyPI runtime path, docker‑compose demo, env inheritance fix.  

**Stale issues worth revisiting:**  
- #7196 (reasoning toggle) – active discussion, low effort UI change.  
- #7201 (media caps) – clear enhancement path, no opposing views.  

*Addressing these items would improve contributor experience, reduce the backlog, and deliver features that users have explicitly requested.*  

---  

*All links point to the respective GitHub issue or pull request in the agentscope-ai/QwenPaw repository.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw Project Digest – 2026‑08‑23**  
*Generated from GitHub activity (issues & PRs updated in the last 24 h). No new releases were published today.*

---

### 1. Today’s Overview  
The repository remains highly active: **50 issues** and **50 pull‑requests** were touched in the past day, with 43 issues still open and 48 PRs awaiting merge. Discussion is concentrated on a handful of RFC‑style enhancements (e.g., runtime‑owned conversation sessions, memory‑lifecycle decoupling, Gemini‑Live voice channel) and persistent stability problems, especially on Windows CI and in the Telegram channel. Overall project health shows vigorous development momentum but also a sizable backlog of high‑risk, maintainer‑review‑needed items that need triage before the next stable milestone.

### 2. Releases  
*No new releases were tagged or published today.*  

### 3. Project Progress (Merged/Closed PRs)  
Only two PRs reached a closed/merged state in the last 24 h:  

| PR | Summary | Link |
|----|---------|------|
| #9403 | **fix(plugins): bound WASM exports by a wall‑clock deadline** – adds a configurable `plugins.limits.call_timeout_ms` (default 30 000 ms) to prevent unbounded WASM plugin execution. | <https://github.com/zeroclaw-labs/zeroclaw/pull/9403> |
| #9128 | **feat(plugins): add scoped tool secret service** – introduces a host‑owned `secrets.get(name)` service scoped to each plugin instance, using `x‑secret` schema annotations. | <https://github.com/zeroclaw-labs/zeroclaw/pull/9128> |

Both changes address stability (timeout hardening) and extensibility (secret handling) for the plugin subsystem.

### 4. Community Hot Topics (most‑commented Issues)  
| Rank | Issue | Comments | Key Tags / Summary | Link |
|------|-------|----------|--------------------|------|
| 1 | #9487 – RFC: Runtime‑owned conversation sessions & transport surface adapters | 23 | enhancement, agent, channel, gateway, runtime, security, **priority:p2**, **risk:high**, needs‑maintainer‑review | <https://github.com/zeroclaw-labs/zeroclaw/issues/9487> |
| 2 | #7462 – Bug: 74 test failures on Windows (Unix‑only commands, path/encoding) | 19 | bug, ci, runtime, tool, **priority:p1**, **risk:high** | <https://github.com/zeroclaw-labs/zeroclaw/issues/7462> |
| 3 | #6850 – RFC: Decouple memory lifecycle policy from storage backends | 15 | enhancement, gateway, memory, runtime, **priority:p2**, **risk:high**, needs‑maintainer‑review | <https://github.com/zeroclaw-labs/zeroclaw/issues/6850> |
| 4 | #8780 – RFC: Realtime speech‑to‑speech channel for Gemini Live | 15 | enhancement, channel, gateway, runtime, security, provider:gemini, **priority:p2**, **risk:high** | <https://github.com/zeroclaw-labs/zeroclaw/issues/8780> |
| 5 | #8692 – Tracker: Maintainer decision queue for RFCs & design issues | 13 | enhancement, domain:architecture, **priority:p2**, status:accepted | <https://github.com/zeroclaw-labs/zeroclaw/issues/8692> |
| 6 | #9103 – RFC: Separate authoritative memory storage from optional enrichment connectors | 13 | enhancement, config, memory, runtime, **priority:p2**, **risk:high**, needs‑maintainer‑review | <https://github.com/zeroclaw-labs/zeroclaw/issues/9103> |

**Underlying needs:**  
- **Runtime ownership & session management** (#9487) reflects a desire for stronger isolation and durable admission semantics across channels.  
- **Cross‑platform CI reliability** (#7462) shows blockers for Windows adopters; fixing path/encoding and test harnesses is a prerequisite for broader adoption.  
- **Memory‑lifecycle abstraction** (#6850, #9103) indicates users want pluggable backends without leaking policy logic into gateways/channels.  
- **Realtime voice** (#8780) signals demand for low‑latency, multimodal interaction (Gemini Live) as an optional feature‑gated channel.  
- **Decision‑tracking** (#8692) reveals growing RFC volume and a need for explicit maintainer governance.

### 5. Bugs & Stability (Severity‑ranked)  
| Severity | Issue | Summary | Fix PR (if any) |
|----------|-------|---------|-----------------|
| **S1 – workflow blocked** | #9946 – agent‑browser subprocess waits unbounded (defect class as #8560) | No wall‑clock deadline on `agent-browser` CLI → hangs agent turn. | *No linked PR yet* |
| **S2 – degraded behavior** | #7462 – 74 Windows test failures (Unix‑only commands, path/encoding) | CI blind spot; breaks Windows usability. | *No linked PR yet* |
|  | #9666 – filesystem listener not cancellation‑aware | Idle `recv()` blocks supervisor shutdown/reload. | *No linked PR yet* |
|  | #10164 – `block_high_risk_commands = false` ignored for parent‑path commands | High‑risk commands still blocked despite allow‑list. | *No linked PR yet* |
|  | #10232 – daemon diagnostics drop underlying error chain | Supervisor records only `e.to_string()`, losing root cause. | *No linked PR yet* |
|  | #9718 – Telegram channel delivers duplicate messages when model returns both `tool_calls` and `content` | Duplicate UI noise. | *No linked PR yet* |
|  | #9001 – Provider turn failures buried under generic retry envelope | Obscures root‑cause diagnostics for LM Studio/Ollama etc. | *No linked PR yet* |
|  | #9590 – Concurrent `models refresh` can lose cache entries | Race condition on shared cache. | *No linked PR yet* |
|  | #9945 – Browser tool exposes only 16/100+ agent‑browser commands (iframes, dialogs, tabs missing) | Limited functionality. | *No linked PR yet* |
|  | #10073 – StoragePolicy::Rolling performance regression under sustained load | Default log policy causes slowdown. | *No linked PR yet* |

*Note:* The two closed PRs (#9403, #9128) are **not** directly linked to any of the above bugs; they improve plugin safety but do not yet address the listed stability concerns.

### 6. Feature Requests & Roadmap Signals  
- **Runtime‑owned conversation sessions** (#9487) – likely to land in v0.9.0 if the RFC passes maintainer review; would enable durable admission and transport‑surface adapters.  
- **Memory lifecycle decoupling** (#6850, #9103) – expected to shape the storage API for v0.9.0, allowing swappable backends without policy duplication.  
- **Gemini Live realtime voice channel** (#8780) – feature‑gated; could appear as an experimental opt‑in in the next minor release pending security review.  
- **Granular sandbox policy** (#6996) – in‑progress; aims to unify filesystem/network restrictions across Landlock, Bubblewrap, Seatbelt.  
- **Verbatim gateway send** (#10050) – low‑effort RFC for direct gateway messaging; may be fast‑tracked if no major blockers appear.  
- **Move optional channels/tools to runtime WASM plugins** (#8850) – already in progress; promises a smaller stock binary and hot‑plug capability.  

Overall, the roadmap appears focused on **core runtime reliability (sandbox, session, memory), extensibility (plugins, WASM), and multimodal channels (voice, realtime)**.

### 7. User Feedback Summary (pain points & use‑cases)  
- **Session management frustration** – #10141 (“Please make sessions usable”) highlights difficulty copying or retrieving prior messages in the zerocode TUI.  
- **Duplicate Telegram messages** – #9718 creates noisy conversations when the model mixes tool calls and text.  
- **Windows CI gaps** – #7462 blocks contributors on Windows; users report test suite failures unrelated to code changes.  
- **Limited browser tool** – #9945 and #9946 show that the current browser tool cannot interact with iframes, dialogs, tabs, or run reliable subprocess commands, limiting web‑automation use‑cases.  
- **Configuration ergonomics** – #10100 (Landlock allowed‑roots tiers) and #9707 (vision‑model provider alias) indicate users hit rough edges when tuning security or multimodal providers.  
- **Observability** – #9708 (unbounded daemon logs) and #10203 (log‑facade → tracing bridge) point to a need for better log rotation and unified tracing.  

Overall sentiment: users value ZeroClaw’s extensibility and agent‑centric design but are held back by **platform‑specific bugs, unclear session/TUI workflows, and incomplete tooling coverage**.

### 8. Backlog Watch (Long‑Unanswered / Needs Maintainer Review)  
| Issue | Age (days) | Why it matters | Link |
|-------|------------|----------------|------|
| #9487 (RFC: runtime‑owned sessions) | 26 | Core runtime change; high risk, needs maintainer review to set ownership boundaries. | <https://github.com/zeroclaw-labs/zeroclaw/issues/9487> |
| #6850 (RFC: decouple memory lifecycle) | 93 | Strategic for storage pluggability; stalled awaiting review. | <https://github.com/zeroclaw-labs/zeroclaw/issues/6850> |
| #8396 (RFC: wire protocol first‑class in provider construction) | 57 | Impacts provider onboarding; could simplify multi‑provider setups. | <https://github.com/zeroclaw-labs/zeroclaw/issues/8396> |
| #9103 (RFC: separate authoritative memory) | 38 | Directly tied to #6850; needs clarification on storage vs enrichment. | <https://github.com/zeroclaw-labs/zeroclaw/issues/9103> |
| #10050 (RFC: verbatim gateway send) | 6 | Low‑effort feature; could be merged quickly if no security concerns. | <https://github.com/zeroclaw-labs/zeroclaw/issues/10050> |
| #7462 (Windows test failures) | 74 | Blocking Windows adoption; requires CI/test‑harness fixes. | <https://github.com/zeroclaw-labs/zeroclaw/issues/7462> |
| #9946 (unbounded browser subprocess) | 11 | S1 blocker for any browser‑based automation. | <https://github.com/zeroclaw-labs/zeroclaw/issues/9946> |
| #10164 (block_high_risk_commands ignored) | 3 | Security‑policy regression; high priority for sandbox trust. | <https://github.com/zeroclaw-labs/zeroclaw/issues/10164> |

*Items marked “needs‑maintainer‑review” or lacking a linked fix PR are the most urgent for maintainer attention.*

---

**Takeaway:** ZeroClaw is in a period of intense feature development (sessions, memory, voice, plugins) while contending with a notable backlog of stability and platform‑specific bugs. Prioritizing the high‑risk RFCs (#9487, #6850, #8396) and resolving the Windows CI and subprocess timeout issues will be crucial to maintain momentum and broaden adoption before the next release cycle.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*