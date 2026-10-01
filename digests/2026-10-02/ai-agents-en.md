# OpenClaw Ecosystem Digest 2026-10-02

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-10-01 22:15 UTC

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



# OpenClaw Project Digest — 2026-10-02

---

## 1. Today's Overview

OpenClaw remains in a high-activity state with **500 issues and 500 pull requests updated in the last 24 hours** (260 open issues, 240 closed; 285 open PRs, 215 merged/closed). No new releases were published in this window, but the commit stream on `main` is dense — multiple foundational PRs landed on 2026-10-01 targeting session lifecycle, state migration, and agent run finalization. The project is simultaneously triaging a wave of serious stability regressions from the 2026.9.x line (SQLite WAL growth, event-loop starvation, Windows path leaks) while advancing structural cleanup (dropping pre-July-2026 state migrations, decoupling session keys from API auth, and adding experimental "Claws" controls in the Web UI). Maintainer bandwidth appears stretched: many high-severity issues carry `clawsweeper:no-new-fix-pr` and `clawsweeper:needs-maintainer-review` labels, indicating automated triage is active but human sign-off is the bottleneck.

---

## 2. Releases

**No new releases in the last 24 hours.** The most recent published version referenced in the data is `2026.9.7`, which is already the subject of multiple regression reports (see Bugs & Stability). A Bun workaround PR (#163034) suggests packaging or runtime issues continue to affect non-standard runtimes.

---

## 3. Project Progress

The following PRs were created or advanced today (2026-10-01), grouped by area:

### Core Infrastructure & State
- **[#163036](https://github.com/openclaw/openclaw/pull/163036)** — `refactor(state): drop pre-July-2026 state migrations` (steipete, XL). Retires migration code for session `provider`/`lastProvider`/`room` fields and single-column agent DB registry predating the July 2026 upgrade window. Reduces long-term maintenance surface.
- **[#163030](https://github.com/openclaw/openclaw/pull/163030)** — `fix(sessions): preserve details after background writes` (steipete, XL). Replaces #157854. Prevents session rows from losing owner/participant details, missing committed updates, or remaining unsettled when lifecycle callbacks throw.
- **[#163031](https://github.com/openclaw/openclaw/pull/163031)** — `perf(sessions): yield between cold list page slices` (steipete, S). Prevents event-loop starvation during cold session-list materialization.
- **[#163037](https://github.com/openclaw/openclaw/pull/163037)** — `fix(agents): wait for owned resources before finishing a run` (vincentkoc, L). Foundational fix ensuring run finalization doesn't release admitted authority before async cleanup completes. Related to #156269.

### Agents & Sessions
- **[#162948](https://github.com/openclaw/openclaw/pull/162948)** — `fix(agentsapi): decouple session keys and report access errors` (sjf-oa, M). Allows API key rotation without breaking existing conversations — the key authenticates the request but is not the conversation identity.
- **[#161228](https://github.com/openclaw/openclaw/pull/161228)** — `fix(agents): restore CLI sessions after finished orchestrator runs` (SunnyShu0925, M). Fixes Claude CLI sessions getting stuck on fallback models after Talk/fallback/handoff leaves a stale writer claim. Fixes #159661.
- **[#118806](https://github.com/openclaw/openclaw/pull/118806)** — `fix(agents): remove yield from leaf subagents` (clawsweeper[bot], S). Denies `sessions_yield` for default leaf subagents while preserving it for spawning-capable subagents and operator overrides. Fixes #118776.

### Auth, Config & Tooling
- **[#162958](https://github.com/openclaw/openclaw/pull/162958)** / **[#162685](https://github.com/openclaw/openclaw/pull/162685)** — `fix(auth): normalize legacy credentials through Doctor` (steipete, XL). Removes credential-field aliases from SQLite after profile IDs already use current provider names, preventing stranded credentials during updates. #162958 supersedes #162685.
- **[#162974](https://github.com/openclaw/openclaw/pull/162974)** — `fix(config): preserve shorthand model primaries in path writes` (steipete, S). Prevents `config set` from silently dropping the primary model when adding fallbacks to string-shorthand models. Closes #162421. Supersedes #162478.
- **[#162887](https://github.com/openclaw/openclaw/pull/162887)** — `fix(update): clarify runtime failures and recorded health` (vincentkoc, M). Reworks update failure reports to lead with plain-language explanations and next steps.
- **[#160958](https://github.com/openclaw/openclaw/pull/160958)** — `fix(ci): make PR runner capacity independent of author` (etzelm, M). Prevents first-attempt contributor PRs from receiving smaller runner routes based on author association.

### Channels & Mobile
- **[#162247](https://github.com/openclaw/openclaw/pull/162247)** — `fix(android): connect through HTTPS proxies requiring Basic login` (DonnieFi, XL). Enables native Android setup and login when a Gateway is behind an HTTPS reverse proxy with HTTP Basic auth. Related to #162240.
- **[#162314](https://github.com/openclaw/openclaw/pull/162314)** — `feat(claws): add experimental controls under Plugins` (giodl73-repo, XL). Adds Claw inventory, release review, and lifecycle controls alongside the existing Plugins UI, using Gateway operations. Related to #142974, #112808, #112828.

### Memory & Skills
- **[#119447](https://github.com/openclaw/openclaw/pull/119447)** — `fix(compaction): stop a large input reserve from inflating summary output cost` (MoerAI, S). Prevents safeguard-mode staged summaries from becoming disproportionately large model-output requests. Fixes #119404.
- **[#119461](https://github.com/openclaw/openclaw/pull/119461)** — `Improve short-term memory promotion quality gate` (can2049, S). Adds filtering so high-signal but non-durable short-term snippets (transient diagnostics, raw logs, temp paths, credential-bearing text) don't pollute `MEMORY.md`. Directly relevant to the dreaming-ranker issues in #121232 and #150635.
- **[#161440](https://github.com/openclaw/openclaw/pull/161440)** — `fix(skills): preserve source host provenance` (RomneyDa, XL). Prevents managed worktree sessions from reading skills from the wrong machine when both Gateway-owned and node-hosted agent workspaces exist.

---

## 4. Community Hot Topics

The most-discussed issues in the last 24h (by comment count):

| Rank | Issue | Comments | Reactions | Core Theme |
|------|-------|----------|-----------|------------|
| 1 | **[#143524](https://github.com/openclaw/openclaw/issues/143524)** — Agent SQLite WAL grows to 1.4–2.8 GB in days despite `wal_autocheckpoint=1000` | 103 | 0 | Windows WAL never checkpoints; blocks gateway startup |
| 2 | **[#153257](https://github.com/openclaw/openclaw/issues/153257)** — OpenClaw 2026.9.5 turned a stable environment into an 8-hour failure recovery session | 40 | 1 | Regression from 9.5 upgrade; user regret |
| 3 | **[#149538](https://github.com/openclaw/openclaw/issues/149538)** — Gateway reaches ready but never serves; `/health` times out while event loop is starved (632-agent fleet) | 23 | 0 | Event-loop starvation at scale |
| 4 | **[#157067](https://github.com/openclaw/openclaw/issues/157067)** — Windows isolated cron setup passes uncloneable env Proxy to session history worker | 21 | 0 | Windows env-proxy cloning |
| 5 | **[#126360](https://github.com/openclaw/openclaw/issues/126360)** — `AgentSelectionRequiredError` floods logs under explicit multi-agent ownership | 19 | 0 | Missing `agentId` targeting in multi-agent setups |

### Analysis of Underlying Needs

The top issue (#143524, 103 comments) is the clearest signal: **SQLite WAL management on Windows is fundamentally broken**. The fact that `wal_autocheckpoint=1000` is ineffective and manual `wal_checkpoint(TRUNCATE)` is required to recover suggests either the checkpoint pragma is being overridden, the WAL file is being held open by another connection, or the Windows file system semantics prevent truncation. This is a P0 crash-loop blocker with UX-release-blocker severity, yet it has no fix PR and is marked `clawsweeper:no-new-fix-pr` — meaning the automated triage bot has determined the issue shape is correct but no human has picked it up.

Issue #149538 (event-loop starvation with 632 agents) and #159662 (prepared-model-catalog.worker.js leaking 4–5 GB/h) together paint a picture of **memory and scheduling pressure at fleet scale**. The gateway reaches "ready" but cannot serve because the event loop is saturated — this is a architectural scalability concern, not a simple bug.

The Windows-specific cluster (#157067, #161953, #161828, #162047) all point to **`process.env` Proxy objects being forwarded into worker threads and SQLite paths**, causing `DataCloneError` and path-leak failures. These are concentrated in the 2026.9.x line and suggest the `cloneEnvWithPlatformSemantics` utility is creating non-cloneable proxies that break worker IPC. The fact that #161654's fix for `readExactEntries` didn't fully resolve the problem (#161828) indicates the proxy contamination is broader than a single call site.

---

## 5. Bugs & Stability

### P0 — Critical (crash-loop, release-blocker, data-loss)

| Issue | Title | Fix PR? | Notes |
|-------|-------|---------|-------|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | SQLite WAL unbounded growth on Windows | ❌ None | 103 comments; 2.8 GB WAL; blocks gateway startup. `clawsweeper:no-new-fix-pr` |
| [#149538](https://github.com/openclaw/openclaw/issues/149538) | Event-loop starvation; gateway ready but never serves (632-agent fleet) | ❌ None | RSS climbs until OOM. Related to #148529 boot duration |
| [#159662](https://github.com/openclaw/openclaw/issues/159662) | `prepared-model-catalog.worker.js` unbounded memory leak (~4–5 GB/h) | ❌ None | Provider-agnostic; reproduces on cold reboot |
| [#160521](https://github.com/openclaw/openclaw/issues/160521) | State DB read-admission seal → "Worker environment inventory has closed" → unhandled rejection | ❌ None | 2026.9.6; large session stores trigger crash |
| [#155859](https://github.com/openclaw/openclaw/issues/155859) | Gateway startup wall-time scales with plugin count (120s publication budget) | ❌ None | Discord, codex, openclaw-weixin dominate startup |
| [#160386](https://github.com/openclaw/openclaw/issues/160386) | 2026.9.6 on large session stores: severe SQLite I/O pressure, WebUI RPC timeouts | ❌ None | `STATE_DATABASE_READ_ADMISSION_INVALIDATED` |
| [#158239](https://github.com/openclaw/openclaw/issues/158239) | Gateway fails to start: "Session membership store changed before publication" on kernel < 5.6 | ❌ None | JS fs-safe fallback path; `openat2` absence |
| [#161953](https://github.com/openclaw/openclaw/issues/161953) | Windows: `sessions.create` always fails with "publication owner is no longer current" | ❌ None | `\\?\` SQLite path leaks into creation-publication guard |
| [#115642](https://github.com/openclaw/openclaw/issues/115642) | Billing cooldown outlives outage on subscription auth; no probe-based recovery | ❌ None | 5-hour fixed `disabledUntil`; needs manual reset |
| [#153417](https://github.com/openclaw/openclaw/issues/153417) | Subagent completion announce retries indefinitely when requester yields no visible reply | ❌ None | 2026.9.5; `NO_REPLY`/`ANNOUNCE_SKIP` scored as failed |

### P1 — High Severity

| Issue | Title | Fix PR? |
|-------|-------|---------|
| [#157067](https://github.com/openclaw/openclaw/issues/157067) | Windows cron passes uncloneable env Proxy to session history worker | ❌ None |
| [#126360](https://github.com/openclaw/openclaw/issues/126360) | `AgentSelectionRequiredError` floods logs under explicit multi-agent ownership | ❌ None |
| [#148707](https://github.com/openclaw/openclaw/issues/148707) | Reply lost: "Reply operation has no active tool authority snapshot" (2026.9.4 regression) | ❌ None |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | Unreaped hook/tool child processes → zombie accumulation | ❌ None |
| [#85030](https://github.com/openclaw/openclaw/issues/85030) | MCP tools not injected into `sessions_spawn` subagent sessions | ❌ None |
| [#114612](https://github.com/openclaw/openclaw/issues/114612) | `memory_index_chunks` + `memory_embedding_cache` tables have no retention policy | ❌ None |
| [#84037](https://github.com/openclaw/openclaw/issues/84037) | Codex app-server steady-state CPU and helper process overhead | ❌ None |
| [#65374](https://github.com/openclaw/openclaw/issues/65374) | Built-in dreaming contaminates agent identity in multi-agent setups | ❌ None |
| [#118185](https://github.com/openclaw/openclaw/issues/118185) | One claude-cli turn written to transcript twice by two writers | ❌ None |
| [#150635](https://github.com/openclaw/openclaw/issues/150635) | Short-term recall retention evicts entries nightly, dreaming deep phase never promotes | ❌ None |
| [#115546](https://github.com/openclaw/openclaw/issues/115546) | CLI-budget compaction: timeout fires far below deadline, 100% failure on large sessions | ❌ None |
| [#157126](https://github.com/openclaw/openclaw/issues/157126) | claude-cli MCP bridge inherits request scope; owner turns lose `operator.admin` | ❌ None |
| [#118839](https://github.com/openclaw/openclaw/issues/118839) | "restart recovery claim changed before agent adoption" reappears on 2026.7.

---

## Cross-Ecosystem Comparison



# Cross-Project Ecosystem Comparison Report
## Personal AI Assistant & Agent Open-Source Landscape — 2026-10-02

---

### 1. Ecosystem Overview

The open-source personal AI assistant ecosystem is in a period of rapid structural maturation: projects are simultaneously hardening core infrastructure (session lifecycle, state migration, memory management) and expanding into adjacent domains (desktop clients, channel integrations, multi-agent orchestration). Activity is high across the board — every tracked project shows active PR or issue movement — but throughput is uneven. Several projects are bottlenecked by maintainer review capacity (OpenClaw, ZeroClaw), while others are shipping fixes at high velocity (NanoClaw, LobsterAI). The dominant technical tensions are consistent: SQLite/state management at scale, event-loop and memory pressure, Windows-specific runtime correctness, and principal isolation in multi-agent setups. No project has fully solved the "fleet-scale" agent fleet problem, and security hardening (credential normalization, path sanitization, principal containment) is the single most concentrated development theme today.

---

### 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed PRs | Release Status | Health Assessment |
|---|---|---|---|---|---|
| **OpenClaw** | ~500 (260 open, 240 closed) | ~500 (285 open, 215 merged/closed) | 215 | None (latest: 2026.9.7) | ⚠️ High activity, stretched maintainer bandwidth; 10+ P0 bugs unfixed, automated triage active but human sign-off bottleneck |
| **ZeroClaw** | 43 updated (42 open, 1 closed) | 50 updated (all open) | 0 | None | ⚠️ High coordination, zero merge throughput; critical S0 principal-scope memory bugs unfixed; release latency is key risk |
| **NanoClaw** | 2 open | 24 updated | 15 | None | ✅ High velocity, well-functioning pipeline; 62.5% merge rate; focused contribution burst from single maintainer |
| **Hermes Agent** | ~50 updated | ~50 updated | Multiple (desktop, provider, security) | None | ✅ Active and broad; desktop client stabilization, provider hardening, security hygiene all advancing |
| **PicoClaw** | 2 open, 0 closed | 15 updated | 3 | None | ⚠️ Active maintenance but stale backlog; critical TLS outage (#3377) unresolved since Sep 10 |
| **LobsterAI** | 7 open (several critical) | Multiple | 7 | None | ⚠️ Structurally sound (major code cleanup landed) but critical crash/SSE bugs unresolved |
| **CoPaw** | Multiple open (incl. critical) | Multiple | 2 | None | ⚠️ Stable development velocity; first-time contributors landing fixes; LAN access blocker and DeepSeek PDF crash open |
| **NanoBot** | 0 new | 17 updated | 3 | None | ✅ Excellent health; focused on stability, security, architectural upgrades |
| **IronClaw** | 2 open | 2 open | 0 | None | ✅ Steady, continuous development; security and test-suite stability focus |
| **Moltis** | 0 | 2 open | 0 | None | ✅ Stable; WebSocket/TLS and MCP resilience PRs in review |
| **TinyClaw** | 0 | 3 closed | 3 | None | ⚠️ Low-to-moderate activity; Telegram hardening only; 7.5-month PR gap suggests review backlog |
| **ZeptoClaw** | 0 | 0 | 0 | None | ❌ No activity in window |

---

### 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Largest community footprint:** ~500 issues+PRs in 24h dwarfs all competitors; comment/reaction counts (103 on a single WAL issue) indicate a substantial, engaged user base that generates dense feedback loops.
- **Most mature issue taxonomy:** Labels like `clawsweeper:no-new-fix-pr`, `clawsweeper:needs-maintainer-review`, and severity tagging (P0/P1/S0/S1) suggest an institutionalized triage process that other projects (ZeroClaw's S0 tagging is the closest parallel) would benefit from replicating.
- **Broadest platform coverage:** Android HTTPS proxy fixes, Windows path-leak cluster, Bun runtime work, WebUI "Claws" controls — OpenClaw is the only project actively addressing cross-platform runtime fragmentation at this scale.
- **Deep integration surface:** PRs spanning session lifecycle, state migration, auth normalization, config preservation, and channel-specific fixes indicate a system with many moving parts that other projects haven't yet needed to build.

**Technical Approach Differences:**
- OpenClaw is the only project in the set actively *decoupling* architectural concerns mid-flight: session keys from API auth (#162948), state migrations from current runtime (#163036), and run finalization from async cleanup (#163037). This is structural refactoring at a scale most peers haven't reached.
- Its use of an automated triage bot (`clawsweeper`) as a gatekeeper for fix-PR intake is unique; other projects rely on manual issue triage or have no visible triage automation.
- The density of P0 regressions attributed to the 2026.9.x line (SQLite WAL, event-loop starvation, Windows env-proxy cloning) suggests OpenClaw is willing to ship major version bumps that break stability — a trade-off other projects (Moltis, IronClaw) appear to avoid by moving more cautiously.

**Community Size Comparison:**
OpenClaw's issue engagement (103 comments on #143524, 40 on #153257) is an order of magnitude above any peer. The next closest is ZeroClaw (16 comments on #9600) and NanoClaw (6 comments on #3456). This translates directly into more signal for maintainers but also more surface area for regressions and support burden.

---

### 4. Shared Technical Focus Areas

Several requirements are emerging independently across multiple projects:

| Technical Need | Projects Involved | Specific Evidence |
|---|---|---|
| **SQLite / state management at scale** | OpenClaw, ZeroClaw, PicoClaw | OpenClaw: WAL growth to 2.8 GB on Windows (#143524); ZeroClaw: state DB read-admission seal crashes (#160521 in OpenClaw's feed, but ZeroClaw has analogous state-separation PRs); PicoClaw: API key and config persistence (#3400) |
| **Event-loop / memory pressure** | OpenClaw, ZeroClaw | OpenClaw: event-loop starvation with 632 agents (#149538), `prepared-model-catalog.worker.js` leaking 4–5 GB/h (#159662); ZeroClaw: daemon CPU spin (#9799) |
| **Principal isolation / security containment** | ZeroClaw, OpenClaw, CoPaw | ZeroClaw: delegated memory tools losing principal scope (#11198, #11239), owned sessions reaching shared memory plane; OpenClaw: decoupling session keys from API auth (#162948); CoPaw: path traversal sanitization in skill staging (#8065) |
| **Channel reliability & media handling** | ZeroClaw, NanoClaw, TinyClaw, LobsterAI | ZeroClaw: WhatsApp inbound images not downloaded (#10975), captions dropped (#11257); NanoClaw: Discord approval cards broken (#3456), Telegram MarkdownV2 drops (#3570); TinyClaw: Telegram pending message persistence (#48); LobsterAI: SSE streaming data loss (#922) |
| **Windows-specific runtime correctness** | OpenClaw, LobsterAI | OpenClaw: env Proxy cloning into worker threads (#157067, #161953), SQLite path leaks; LobsterAI: Windows private SQLite staging directory fallback (#2709) |
| **Multi-agent / subagent orchestration** | OpenClaw, PicoClaw, ZeroClaw, CoPaw | OpenClaw: leaf subagent yield denial (#118806), run finalization ordering (#163037); PicoClaw: multi-agent collaboration framework (#423, closed WIP), async tool results to originating session (#3403); ZeroClaw: per-sender RBAC (#5982); CoPaw: advisor mode (#7569), background task wakeup (#8063) |
| **Credential & config normalization** | OpenClaw, PicoClaw, ZeroClaw | OpenClaw: legacy credential cleanup via Doctor (#162958), shorthand model primaries preserved (#162974); PicoClaw: multi-key model config persistence (#3400); ZeroClaw: atomic live config revisions (#10911), URL credential masking (#11388) |

**Key takeaway:** The shared technical concerns are not coincidental — they reflect the natural growing pains of agent frameworks that started simple and are now supporting fleet-scale, multi-tenant, multi-channel deployments. The fact that 4–5 projects independently have principal isolation bugs (ZeroClaw's S0s, OpenClaw's auth decoupling, CoPaw's path sanitization) suggests this is a *field-wide* architectural challenge, not a single-project defect.

---

### 5. Differentiation Analysis

| Dimension | OpenClaw | ZeroClaw | NanoClaw | Hermes Agent | PicoClaw |
|---|---|---|---|---|---|
| **Feature Focus** | Core infrastructure, session lifecycle, cross-platform runtime | Gateway/runtime separation, principal isolation, plugin/WASM readiness | Update tooling, supply-chain security, channel SDK integration | Desktop client, provider integrations (Mistral/Qwen/Codex), plugin catalog | Channel reliability, multi-agent collaboration, provider expansion |
| **Target Users** | Power users running multi-agent fleets; developers building on top of Gateway API | Enterprise/organizational deployments needing RBAC and isolation; plugin ecosystem builders | Teams already in the Anthropic/Iron ecosystem needing reliable update and CI pipelines | Desktop app users (Electron-based); practitioners integrating with specific LLM providers | Mobile-first and channel-first users (DeltaChat, Matrix, LINE, Pico TUI) |
| **Technical Architecture** | Node.js, SQLite, Gateway-centric, session-key decoupled from auth | Rust/WASM core, gateway/runtime separation, plugin IPC | TypeScript, Bun, chat-sdk-bridge, claude -p CLI backend | Electron desktop, multi-provider abstraction, plugin catalog | Go, multi-channel, multi-provider, in-process reload |
| **Release Cadence** | Version bumps with known regression risk (2026.9.x line) | Targeted releases (v0.8.6, v0.9.0) with explicit phase tracking | Pre-release approval workflow in development (#3987) | None in window; focused on stabilization | None in window; TLS outage suggests operational maturity gaps |
| **Unique Strength** | Largest community feedback surface; most mature triage process | Most explicit security/isolation architecture (S0/S1/P0 taxonomy) | Highest merge velocity and supply-chain hygiene | Broadest provider compatibility (Mistral, Qwen, Codex, OpenAI) | Only project with native DeltaChat, Matrix, LINE channel support |

---

### 6. Community Momentum & Maturity

**Tier 1 — Rapidly Iterating (high merge throughput, active contribution):**
- **NanoClaw:** 15 merged/closed PRs in 24h from a focused contribution burst. Pipeline is fast, supply-chain security is a differentiator, and update tooling is being deliberately hardened.
- **LobsterAI:** 7 PRs merged in a single day — build optimization, dead code cleanup, auth fixes, UI polish. The engineering team is executing cleanly even though the user-facing bug backlog remains heavy.

**Tier 2 — High Activity, Bottlenecked (lots of work in flight, merge/release latency):**
- **OpenClaw:** ~215 PRs merged/closed but 10+ P0 bugs with no fix PRs. The automated triage bot is active, but human review is the bottleneck. The project is simultaneously advancing structural cleanup and fighting a stability regression wave.
- **

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



Based on the provided GitHub data for the **NanoBot** project (github.com/HKUDS/nanobot) up to October 2, 2026, here is the structured project digest.

---

### 1. Today's Overview
The NanoBot project remains highly active, demonstrating a strong development velocity with **17 pull requests updated** in the last 24 hours. While no new issues or releases were published today, the engineering focus is heavily concentrated on critical stability improvements, security hardening, and major architectural upgrades—such as migrating session persistence to SQLite and introducing atomic file-writing tools. Overall, the project health is excellent, driven by multiple active contributors addressing both feature enhancements and deep bug fixes.

---

### 2. Releases
* **New Releases:** None. No new versions were released in the last 24 hours.

---

### 3. Project Progress
Three pull requests were closed/merged today, advancing multimodal capabilities, subagent configuration, and codebase cleanup:
* **#2095 [CLOSED] feat: add read_image tool:** Introduces a `ReadImageTool` to allow multimodal models to inspect image files directly from disk. [View PR](https://github.com/HKUDS/nanobot/pull/2095)
* **#2094 [CLOSED] feat: add explicit subagent model config:** Adds explicit configuration for subagent models (`agents.defaults.subagent_model`) and introduces an application-level in-process reload path. [View PR](https://github.com/HKUDS/nanobot/pull/2094)
* **#5999 [CLOSED] refactor: remove unused runtime and WebUI helpers:** Cleans up obsolete helper functions, duplicated settings routes, and unused test parameters left

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>



# Hermes Agent Project Digest: 2026-10-02

## 1. Today's Overview
Hermes Agent is experiencing high development activity, with 50 issues and 50 pull requests updated in the last 24 hours. While no new software releases were published today, the repository shows a strong focus on stabilizing the desktop client, optimizing resource consumption, and fixing critical edge cases in agent provider integrations (specifically targeting Mistral, Qwen, and Codex). The project health is generally active, with maintainers and community contributors actively triaging bugs and pushing targeted performance fixes.

## 2. Releases
*No new releases have been published today.*

## 3. Project Progress
Significant progress was made across the codebase, particularly in performance, desktop stability, and the plugin catalog:
*   **Build & Performance Optimization:** PR #130729 eliminates a massive bottleneck in the desktop update pipeline by replacing ~1,920 individual Node.js syntax-check processes with a single-process chunk guard, cutting build times from ~87 seconds down to ~22 seconds on Linux.
*   **Provider & Agent Fixes:** PR #130964 strips trajectory-only `reasoning_details` from assistant messages to prevent HTTP 422 errors on strict providers like Mistral. PR #130965 ensures explicit reasoning picks are properly forwarded to OpenAI/Codex app-server turns.
*   **Desktop Media & UI Fixes:** PR #130975 resolves the persistent "Error 153" on YouTube embeds in the packaged desktop app by routing embeds through a loopback player host. PR #130967 prevents compaction TODO carriers from appearing as human messages in transcripts, and PR #130969 fixes a blank-page rendering bug on the web dashboard.
*   **Security Hygiene:** PR #130971 bumps committed dependency pins to clear npm audit findings in shipped workspaces, while PR #127614 fixes a bug where `hermes security audit` matched every agent advisory due to a `0.0.0` version placeholder.
*   **Plugin Catalog Expansion:** PR #129287 added the Gmail Desktop plugin to the catalog, and PR #130725 integrated the `crew` plugin, turning single messages into verified kanban tasks.

## 4. Community Hot Topics

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-10-02

## 1. Today’s Overview
As of 2026-10-02, PicoClaw shows moderate-to-high PR activity but no new releases. In the last 24h, 2 issues and 15 PRs were updated; 12 PRs remain open and 3 are merged/closed, while no issues were closed. The most serious operational issue is still open and stale: the expired TLS certificate for `picoclaw.io` ([#3377](https://github.com/sipeed/picoclaw/issues/3377)), which keeps the project homepage down for all visitors. The PR queue is dominated by a batch of `x1F916` fixes and five stale Dependabot dependency bumps, plus one new feature PR for turn time budgeting ([#3414](https://github.com/sipeed/picoclaw/pull/3414)). Overall project health is active on maintenance, but critical operations and a small stale backlog need maintainer attention.

## 2. Releases
No new releases in the reporting window. Latest releases: none.

## 3. Project Progress
**Merged/closed PRs in the reporting window (3):**
- [#3376](https://github.com/sipeed/picoclaw/pull/3376) — `fix(deltachat)`: initialize as custom channel to solve config validation error. Closed; addresses DeltaChat channel startup failure.
- [#423](https://github.com/sipeed/picoclaw/pull/423) — `WIP: feat: base multi-agent collaboration framework & shared context`. Closed after long-running work; roadmap-relevant but was still marked WIP.
- [#3313](https://github.com/sipeed/picoclaw/pull/3313) — Fix agent unable to execute shell commands added to `customAllowPatterns`. Closed; fixes default deny patterns overriding user allowlists.

**Open PRs advancing important fixes/features:**
- [#3403](https://github.com/sipeed/picoclaw/pull/3403) — deliver async tool results to the originating session.
- [#3402](https://github.com/sipeed/picoclaw/pull/3402) — resolve owning agent in context managers.
- [#3401](https://github.com/sipeed/picoclaw/pull/3401) — make channel `Reload` synchronous and nil-safe.
- [#3400](https://github.com/sipeed/picoclaw/pull/3400) — persist all API keys and `Enabled` flag for multi-key models.
- [#3399](https://github.com/sipeed/picoclaw/pull/3399) — select matching 32-bit ARM release asset in updater.
- [#3414](https://github.com/sipeed/picoclaw/pull/3414) — add optional wall-clock turn time budget.
- [#3371](https://github.com/sipeed/picoclaw/pull/3371) — add `opencode-go` provider with session header support.

## 4. Community Hot Topics
- [#3377](https://github.com/sipeed/picoclaw/issues/3377) — **TLS certificate for `picoclaw.io` expired on 2026-09-10; site is down for every browser.** 3 comments, 2 👍, open/stale/critical. This is the highest-engagement item in the window and reflects an urgent operational need: the public project homepage is unreachable.
- [#3391](https://github.com/sipeed/picoclaw/issues/3391) — **Pico channel splits multi-line input into multiple messages.** 1 comment, 0 👍, open/stale/bug. The underlying need is correct multi-line paste handling in the mobile TUI, especially for poetry and code blocks.

PR comment/reaction metadata was not reported for the PR set, so issue engagement is the clearest community signal today.

## 5. Bugs & Stability
Ranked by severity based on reported impact:

1. **Critical — [#3377](https://github.com/sipeed/picoclaw/issues/3377): expired TLS certificate for `picoclaw.io`.** Site is down for every browser and TLS client. Open, stale, 3 comments, 2 👍. No fix PR listed in the data.
2. **High — [#3403](https://github.com/sipeed/picoclaw/pull/3403): async tool results delivered to wrong/default session.** Results from different chats/users can accumulate incorrectly. Fix PR is open.
3. **High — [#3401](https://github.com/sipeed/picoclaw/pull/3401): channel `Reload` nil-safety and panic risk.** An enabled channel with no instance can cause `Stop`/`Start` on nil and gateway exit. Fix PR is open.
4. **High — [#3402](https://github.com/sipeed/picoclaw/pull/3402): routed/non-default agent resolution in context managers.** Legacy context manager uses default agent, which can misroute sessions. Fix PR is open.
5. **Medium — [#3400](https://github.com/sipeed/picoclaw/pull/3400): multi-key model config persistence.** Saves can lose all but the first key and drop `Enabled`. Fix PR is open.
6. **Medium — [#3399](https://github.com/sipeed/picoclaw/pull/3399): updater installs arm64 on 32-bit ARM.** Asset matching uses substring aliases, so `arm` matches `arm64`. Fix PR is open.
7. **Medium — [#3391](https://github.com/sipeed/picoclaw/issues/3391): multi-line input split into separate messages.** Open, stale, no fix PR listed.
8. **Fixed/closed — [#3376](https://github.com/sipeed/picoclaw/pull/3376): DeltaChat config validation error.** Closed fix.
9. **Fixed/closed — [#3313](https://github.com/sipeed/picoclaw/pull/3313): `customAllowPatterns` not working for shell commands.** Closed fix.

## 6. Feature Requests & Roadmap Signals
- [#3414](https://github.com/sipeed/picoclaw/pull/3414) — optional wall-clock turn time budget. This is a new feature PR and a strong candidate for the next version, since it targets runaway agent loops.
- [#3371](https://github.com/sipeed/picoclaw/pull/3371) — `opencode-go` provider with session header support. Signals continued provider expansion and multi-provider flexibility.
- [#423](https://github.com/sipeed/picoclaw/pull/423) — base multi-agent collaboration framework with shared context, handoff, and discovery tools. Although closed as WIP, it indicates roadmap interest in multi-agent orchestration.
- Dependency bumps: [#3389](https://github.com/sipeed/picoclaw/pull/3389) `golang.org/x/crypto`, [#3388](https://github.com/sipeed/picoclaw/pull/3388) MCP Go SDK 1.6.1→1.8.0, [#3387](https://github.com/sipeed/picoclaw/pull/3387) Anthropic SDK, [#3386](https://github.com/sipeed/picoclaw/pull/3386) Matrix SDK, [#3385](https://github.com/sipeed/picoclaw/pull/3385) LINE SDK. These suggest the next release will include stability fixes, provider/channel updates, and dependency refreshes.

Likely next-version themes: agent reliability fixes, channel safety, provider additions, turn budgeting, and dependency upgrades.

## 7. User Feedback Summary
Real user pain points visible in this window:
- **Operational outage:** The expired `picoclaw.io` TLS certificate is blocking the homepage and has been stale since 2026-09-10, with user reactions indicating frustration.
- **Mobile TUI input handling:** Multi-line paste in the Pico client is broken, making poetry/code-block use cases unreliable ([#3391](https://github.com/sipeed/picoclaw/issues/3391)).
- **Channel setup friction:** DeltaChat users hit config validation errors until the custom-channel fix ([#3376](https://github.com/sipeed/picoclaw/pull/3376)).
- **Security/allowlist controls:** Users could not run commands like `git push` despite adding them to `customAllowPatterns` ([#3313](https://github.com/sipeed/picoclaw/pull/3313)).
- **Agent correctness:** Async tool results, agent ownership, and channel reload behavior all show user-facing stability gaps.
- **Use cases represented:** mobile TUI, DeltaChat, OpenCode Go, shell command execution, multi-agent collaboration, MCP, Matrix, and LINE.

Satisfaction signal: maintainers and contributors are actively submitting targeted fixes. Dissatisfaction signal: the critical TLS issue and stale multi-line input bug remain unresolved without linked fix PRs.

## 8. Backlog Watch
Items needing maintainer attention:
- [#3377](https://github.com/sipeed/picoclaw/issues/3377) — **Critical TLS outage**, open since 2026-09-12, updated 2026-10-01, stale, 3 comments, 2 👍. No fix PR listed. This should be top priority.
- [#3391](https://github.com/sipeed/picoclaw/issues/3391) — Multi-line input bug, open since 2026-09-24, updated 2026-10-01, stale, 1 comment. No fix PR listed.
- [#3371](https://github.com/sipeed/picoclaw/pull/3371) — OpenCode Go provider PR, open since 2026-09-08, stale. Provider feature awaiting review.
- [#3385](https://github.com/sipeed/picoclaw/pull/3385), [#3386](https://github.com/sipeed/picoclaw/pull/3386), [#3387](https://github.com/sipeed/picoclaw/pull/3387), [#3388](https://github.com/sipeed/picoclaw/pull/3388), [#3389](https://github.com/sipeed/picoclaw/pull/3389) — Dependabot PRs open since 2026-09-24, stale. Low risk but need merge/review to avoid dependency drift.
- [#3403](https://github.com/sipeed/picoclaw/pull/3403), [#3402](https://github.com/sipeed/picoclaw/pull/3402), [#3401](https://github.com/sipeed/picoclaw/pull/3401), [#3400](https://github.com/sipeed/picoclaw/pull/3400), [#3399](https://github.com/sipeed/picoclaw/pull/3399) — `x1F916` fix batch open since 2026-09-28, awaiting review. These address several high/medium stability issues.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



# NanoClaw Project Digest — 2026-10-02

---

## 1. Today's Overview

NanoClaw is experiencing **high engineering velocity**, with 24 pull requests updated in the last 24 hours — 15 merged or closed and 9 still open. No new releases were cut today, but the merge rate (62.5%) indicates a fast-moving, well-functioning pipeline. The day's work clusters around four themes: **update/release tooling hardening**, **dependency and supply-chain security**, **setup and onboarding fixes**, and **agent-runner reliability**. Two open issues remain, one of them high-severity and user-facing.

---

## 2. Releases

*No new releases were published in the last 24 hours.*

---

## 3. Project Progress

### Merged / Closed Today (11 PRs)

| Area | PR | Summary |
|---|---|---|
| **CI / Release** | [#3208](https://github.com/nanocoai/nanoclaw/pull/3208) | Publish agent image to Docker Hub with CVE gates — manual-dispatch workflow, multi-arch builds, and a CVE gate on hardened-pin verification. |
| **CI / Release** | [#3968](https://github.com/nanocoai/nanoclaw/pull/3968) | Pin all GitHub Actions and cosign to exact versions; eliminates 7 floating tags that could drift CI behavior. |
| **CI / Release** | [#3987](https://github.com/nanocoai/nanoclaw/pull/3987) *(open)* | Self-approved `x.y.z-rc.N` pre-releases via a new `prerelease` environment; stable releases retain a second approver. |
| **Update Tooling** | [#3986](https://github.com/nanocoai/nanoclaw/pull/3986) *(open)* | `/update-nanoclaw` now defaults to the newest release tag (`stable` channel) instead of `main` tip; configurable via `NANOCLAW_UPDATE_CHANNEL`. |
| **Update Tooling** | [#3988](https://github.com/nanocoai/nanoclaw/pull/3988) *(open)* | Gateway refresh now triggers when only that gateway's skill payload changed, not just when `src/gateway-providers` or `setup/gateways` change. |
| **Dependencies** | [#3982](https://github.com/nanocoai/nanoclaw/pull/3982) | Pin Iron Proxy to v0.52.0 (from a pre-v0.50.0 commit), clearing 30 known dependency advisories. |
| **Dependencies** | [#3981](https://github.com/nanocoai/nanoclaw/pull/3981) | Bump grpc in the Iron front proxy to 1.83.2, clearing 6 advisories ahead of Dependabot enablement. |
| **Dependencies** | [#3977](https://github.com/nanocoai/nanoclaw/pull/3977) | Bump `tsx` to 4.23 to silence a Node 26 `module.register()` deprecation warning on every `ncl` run. |
| **Setup / Onboarding** | [#3901](https://github.com/nanocoai/nanoclaw/pull/3901) | Host systemd service can now reach the internet through an HTTPS proxy. |
| **Setup / Onboarding** | [#3985](https://github.com/nanocoai/nanoclaw/pull/3985) *(open)* | Proxy credentials (user:password) are no longer written into world-readable service files. |
| **Setup / Onboarding** | [#3980](https://github.com/nanocoai/nanoclaw/pull/3980) *(open)* | First-chat ping no longer counts the agent's "run failed" notice as a working assistant; bad API keys are now correctly detected. |
| **Agent Runner** | [#3918](https://github.com/nanocoai/nanoclaw/pull/3918) *(open)* | Fixes reply loss/duplication around `send_message` for both streaming and end-of-turn providers. |
| **Channels** | [#3570](https://github.com/nanocoai/nanoclaw/pull/3570) *(open)* | Bumps chat core + adapters to 4.38.1; fixes Telegram permanently dropping messages with an odd count of unescaped MarkdownV2 markers (e.g., OneCLI connect links). |
| **Logging** | [#3983](https://github.com/nanocoai/nanoclaw/pull/3983) *(open)* | `safeStringify` now preserves nested `toJSON()` redaction when a value holds a BigInt or contains a cycle. |
| **Skills** | [#1343](https://github.com/nanocoai/nanoclaw/pull/1343) | New `/add-cli-backend` skill — replaces the Anthropic Agent SDK with the sanctioned `claude -p` CLI, addressing TOS concerns with subscription OAuth tokens. |
| **Skills / Iron** | [#3966](https://github.com/nanocoai/nanoclaw/pull/3966) | Keyless models on the same machine now work over plain `http://host.docker.internal:<port>/v1` under Iron. |
| **Skills / Iron** | [#3965](https://github.com/nanocoai/nanoclaw/pull/3965) | OpenCode setup now validates a local model URL against the selected gateway at the prompt instead of failing later. |
| **Tests** | [#3963](https://github.com/nanocoai/nanoclaw/pull/3963) | Update e2e suite passes on Node 24 < 24.13.1 by using `unlinkSync` instead of `rmSync` for data symlinks. |
| **Tests** | [#3979](https://github.com/nanocoai/nanoclaw/pull/3979) | OneCLI unsafe-directory permissions test is now umask-independent (no longer fails under umask 077). |
| **CI Hygiene** | [#3978](https://github.com/nanocoai/nanoclaw/pull/3978) *(open)* | Adds Dependabot for GitHub Actions; removes the long-inert Renovate config. |

**Assessment:** The project is advancing on multiple fronts simultaneously — release engineering, supply-chain security, and user-facing reliability. The volume of merged PRs from a single maintainer (`glifocat`, 10 of 15) suggests a highly focused contribution burst, possibly in preparation for a release.

---

## 4. Community Hot Topics

### 🔴 Issue #3456 — Discord approval cards broken (6 comments, 0 👍)
**[nanocoai/nanoclaw Issue #3456](https://github.com/nanocoai/nanoclaw/issues/3456)**  
*Author: DawoudIO | Open since 2026-08-23 | Updated today*

> **Severity: high** — `createChatSdkBridge`'s `ask_question` card builder sets **both** `id` and `value` on each option button. On Discord, this corrupts the `custom_id`, causing every click to resolve to the wrong option, a silent reject, and a duplicate resend. Approval/ask_question cards are **completely unusable** on Discord.

**Underlying need:** Users on Discord cannot interact with any approval or question card. This is a critical blocker for any workflow that requires user confirmation via Discord. The fix is well-scoped (remove the redundant `value` param in `src/channels/chat-sdk-bridge.ts`), but no fix PR has been linked yet.

### 🔵 Issue #3984 — PreCompact hook fails (0 comments, 0 👍)
**[nanocoai/nanoclaw Issue #3984](https://github.com/nanocoai/nanoclaw/issues/3984)**  
*Author: worthogdotorg | Open since today*

> On every compaction, `bun /app/src/compact-instructions.ts` exits with:  
> `error: No agent mailbox registered`  
> Stack: `getAgentMailbox` → `getAllDestinations` → `compact-instructions.ts:77`

**Underlying need:** Context compaction is silently broken because the PreCompact hook runs before a mailbox is registered. This affects every user who relies on context compaction. The fix likely requires deferring the hook or registering a mailbox earlier in the lifecycle.

---

## 5. Bugs & Stability

| Rank | Issue / PR | Severity | Status | Fix Available? |
|---|---|---|---|---|
| **1** | [Issue #3456](https://github.com/nanocoai/nanoclaw/issues/3456) — Discord approval cards silently reject | **High** | Open, 6 comments | ❌ No fix PR yet |
| **2** | [Issue #3984](https://github.com/nanocoai/nanoclaw/issues/3984) — PreCompact hook crashes on every compaction | **High** | Open, 0 comments | ❌ No fix PR yet |
| **3** | [PR #3918](https://github.com/nanocoai/nanoclaw/pull/3918) — Reply loss/duplication around `send_message` | Medium | Open PR | ✅ Fix in progress |
| **4** | [PR #3570](https://github.com/nanocoai/nanoclaw/pull/3570) — Telegram drops messages with odd MarkdownV2 marker counts | Medium | Open PR | ✅ Fix in progress (bump to 4.38.1) |
| **5** | [PR #3980](https://github.com/nanocoai/nanoclaw/pull/3980) — First-chat ping misclassifies agent failure as success | Medium | Open PR | ✅ Fix in progress |
| **6** | [PR #3983](https://github.com/nanocoai/nanoclaw/pull/3983) — Log redaction loses nested BigInt/cycle handling | Low | Open PR | ✅ Fix in progress |

**Key observation:** The two highest-severity issues (Discord approval cards and compaction crash) both lack linked fix PRs. They represent the most significant stability risk to users today.

---

## 6. Feature Requests & Roadmap Signals

| Signal | PR / Issue | Likely in Next Version? |
|---|---|---|
| **Update-to-tag by default** | [PR #3986](https://github.com/nanocoai/nanoclaw/pull/3986) | ✅ Very likely — simplifies the update experience and prevents accidental `main` drift |
| **Pre-release approval workflow** | [PR #3987](https://github.com/nanocoai/nanoclaw/pull/3987) | ✅ Likely — enables faster iteration on rc releases |
| **Claude CLI backend skill** | [PR #1343](https://github.com/nanocoai/nanoclaw/pull/1343) | ✅ Merged — already available; addresses a real TOS concern for subscription users |
| **Iron keyless HTTP model access** | [PR #3966](https://github.com/nanocoai/nanoclaw/pull/3966) | ✅ Merged — enables local model usage without auth |
| **Docker Hub publishing with CVE gates** | [PR #3208](https://github.com/nanocoai/nanoclaw/pull/3208) | ✅ Merged — adds a manual-dispatch publish workflow |
| **Dependabot for GitHub Actions** | [PR #3978](https://github.com/nanocoai/nanoclaw/pull/3978) | ⚠️ Draft — awaiting discussion |

---

## 7. User Feedback Summary

**Pain points observed today:**

- **Discord users** are completely blocked from approval/ask_question workflows due to the `custom_id` corruption bug (#3456). This is a functional regression that has been open for ~5 weeks.
- **Compaction-dependent users** hit a hard error on every context compaction (#3984), rendering a key memory-management feature unusable.
- **Telegram users** cannot receive OneCLI connect links because the MarkdownV2 underscore count is odd (#3570 → fixed in PR #3570).
- **Setup wizard users** with bad API keys were told their assistant was working when it was actually failing (#3980 → fixed in PR #39

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



Based on the GitHub activity for **IronClaw** (`nearai/ironclaw`) up to October 2, 2026, here is the structured project digest.

---

### 1. Today's Overview
IronClaw is experiencing steady, continuous development with a focus on security, architectural integrations, and test suite stability. Over the last 24 hours, the project recorded 2 open issues and 2 open pull requests, with no releases or merges finalized today. The activity highlights a strong push towards secure browser state persistence and host-mediated identity integrations, showing healthy maintainer and community engagement.

### 2. Releases
* **New Releases:** None. No new versions were released today.

### 3. Project Progress
* **Merged/Closed PRs Today:** 0 (2 open PRs updated).
* **Key Developments in Review:**
  * **Codebase Knowledge Graph Refresh (PR #7988):** An automated update refreshing the committed codebase-memory bootstrap snapshot to align with the current branch state.
  * **IdentyClaw Passport Integration (PR #7499):** A large-scale feature PR adding a host seam (`builtin.idcp`) to allow processless agents to securely call IdentyClaw Passport. 

### 4. Community Hot Topics
* **Secure Browser Session Persistence ([Issue #2358](https://github.com/nearai/ironclaw/issues/2358)):** This highly technical enhancement discusses implementing a `BrowserProfileStore` trait with encrypted tarball persistence. The underlying need is clear: users want browser sessions (cookies, local storage, service workers) to survive across agent runs without forcing repetitive logins, while securely handling sensitive bearer tokens (~50-200MB Chromium user-data-dir).
* **Daily Failure Taxonomy ([Issue #8121](https://github.com/nearai/ironclaw/issues/8121)):** A daily tracking issue analyzing test suite failures (such as clawbench). It highlights a recurring, benchmark-side "broken-workspace-seeding defect" causing 128 non-passes, indicating a need for workspace isolation and test harness stabilization.
* **Host-Mediated Passport for Practitioners ([PR #7499](https://github.com/nearai/ironclaw/pull/7499)):** This feature is gaining traction as a secure way to bridge IronClaw agents with external identity passports without requiring shell access or installable extensions, catering to enterprise/practitioner use cases.

### 5. Bugs & Stability
* **Benchmark Workspace Seeding Defect ([Issue #8121](https://github.com/nearai/ironclaw/issues/8121)):** Ranked as a high-priority stability concern for the project's CI/CD pipeline. The defect affects workspace seeding during benchmark runs, causing a high volume of false-negative test failures. 
* *Fix PRs:* No direct fix PRs are currently open for this specific workspace-seeding defect, but the daily tracking issue serves as the central repository to monitor and resolve these recurring environment issues.

### 6. Feature Requests & Roadmap Signals
* **Encrypted Browser Profile Stores ([Issue #2358](https://github.com/nearai/ironclaw/issues/2358)):** This is a major roadmap signal pointing towards a secure, stateful agent future. It is highly likely to be prioritized in upcoming releases as web-gateway features become more central to agent workflows.
* **Decentralized/Host-Mediated Identity (PR #7499):** The push for host-mediated Passport integration indicates the project roadmap is actively expanding into secure, privacy-preserving identity verification for autonomous agents operating in professional environments.

### 7. User Feedback Summary
* **Pain Points:** Users face friction from session timeouts requiring repetitive logins when agents restart, alongside local environment seeding errors during automated benchmark testing.
* **Use Cases:** Web automation agents requiring robust session continuity, and practitioners looking for secure, zero-install identity verification mechanisms. Overall satisfaction is supported by active community contributions addressing these structural challenges.

### 8. Backlog Watch
* **PR #7499 (`feat(identyclaw): host-mediated Passport for practitioners`):** Created in August 2026 and updated recently, this is an XL-sized PR from a new contributor (`discernible-io`). It requires careful maintainer review to merge the core host seam and the `deploy/identyclaw/` Node CLI kit.
* **Issue #2358 (`feat(browser): add BrowserProfileStore trait...`):** Open since April 2026, this critical architectural issue remains open, awaiting design decisions and implementation to resolve how browser secrets are safely stored and retrieved across runs.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



Based on the GitHub activity for **LobsterAI (netease-youdao/LobsterAI)** leading up to October 2, 2026, here is the structured project digest.

---

### 1. Today's Overview
LobsterAI shows high developmental activity focused on internal optimization, build performance, and dead code cleanup, paired with steady bug fixes. Seven pull requests were successfully merged today, addressing build minification, authentication flows, and UI layout bugs. However, the user-facing issue backlog remains heavy with seven open issues, several of which represent critical stability and data integrity bugs that still require developer attention. Overall, the project health is structurally sound due to major refactoring efforts, but user retention relies on resolving outstanding crash and streaming issues.

### 2. Releases
*   **No new releases** were published in the last 24 hours.

### 3. Project Progress
Today saw 7 merged/closed pull requests, demonstrating active maintenance and codebase improvement:
*   **Build Optimization (PR #920):** Enabled esbuild minification for production builds across the renderer, main process, and preload scripts, significantly reducing bundle size and improving runtime performance.
*   **Major Code Cleanup (PR #941):** Deleted the long-dead `yd_cowork` engine and Claude Agent SDK-related code (`coworkRunner.ts`, `claudeSdk.ts`, `claudeRuntimeAdapter.ts`), narrowing the `CoworkAgentEngine` type strictly to `'openclaw'` to reduce maintenance overhead and branch confusion.
*   **Ecosystem Enhancement (PR #921):** Added support for installing local OpenClaw plugins outside of the standard public repository and source directory layout, improving developer workflow flexibility.
*   **Bug Fixes & UI Polish:**
    *   **Auth Fix (PR #2788):** Fixed a bug where the model selector remained empty on signed-out paths by reloading the public pricing catalog and prompting users to log in when no models are present.
    *   **UI/Layout Fixes (PR #915):** Restored smooth transition animations for sidebar collapsing/expanding and fixed text occlusion in the macOS engine status banner.
    *   **Config Sync (PR #917):** Fixed `getConfig()` in `coworkStore.ts` to read the actual sandbox execution mode from the database instead of hardcoding `'local'`.
    *   **Windows Compatibility (PR #2709):** Implemented a fallback mechanism for Windows private SQLite staging directories when security software blocks PowerShell compilation or constrained language modes.

### 4. Community Hot Topics
While no issues saw a massive surge in comments today, the overall backlog highlights critical developer and user pain points:
*   **The Crash Bug (#926):** Highly discussed technical issue detailing a crash during gateway reconnections due to a missing optional chain on `accumulator.reject`. This is a high-priority target for community stability.
*   **Model Fallback Demand (#943):** Users are requesting a robust priority/fallback system to automatically switch models when one is unavailable, highlighting a critical gap in current high-availability workflows.

### 5. Bugs & Stability
The current open issues highlight several significant stability risks, ranked by severity:
*   **CRITICAL - Application Crash (Issue #926):** A TypeError is triggered in `src/main/im/imCoworkHandler.ts:973` when calling `accumulator.reject()` on a background accumulator that lacks a `reject` function. This leads to immediate application exits and IM handler reconstruction loops during gateway reconnections. *No merged PR fix is yet visible for this issue.*
*   **HIGH - Data Loss in SSE Streaming (Issue #922):** The Anthropic SSE parsing path in the renderer lacks line buffering (`chunk.split('\n')` is used directly instead of utilizing an `sseBuffer`). Under high throughput or poor network conditions, if a SSE line spans multiple chunks, JSON parsing fails silently, resulting in lost streaming text fragments. *No merged PR fix is yet visible.*
*   **MEDIUM - Login Component Crash (Issue #928):** A reproducible bug where users clicking "NetEase Employee" login on the portal page (`c.youdao.com/.../lobsterai-portal.html`) are met with a completely broken login component.
*   **LOW/MEDIUM - Channel Auto-Configuration (Issue #918):** `openclaw doctor` automatically adds a `weixin` channel configuration with an unknown channel ID due to a plugin version mismatch, affecting users upgrading to version 3.25.

### 6. Feature Requests & Roadmap Signals
*   **Adaptive Model Selection (Issue #943):** Users are requesting a drag-and-drop priority ordering in the model configuration page, allowing the system to automatically failover to secondary models when primary models experience failures (based on error rates or timeouts). This is a highly requested feature for production/enterprise reliability.
*   **Keyboard Navigation (Issue #927):** Request for arrow-key navigation support in the model/vendor selection menus and IM bot lists to improve accessibility and keyboard-centric workflows.
*   **Local Plugin Installation (PR #921):** The merge of local plugin support indicates the roadmap is actively moving towards a more modular, decentralized plugin architecture for developers.

### 7. User Feedback Summary
User feedback centers heavily on reliability and flow interruptions:
*   **Frustration over crashes:** Users report application exits during critical gateway reconnections, interrupting active IM workflows (Issue #926).
*   **Silent failures:** The lack of feedback when streaming data is lost due to SSE parsing errors is a major pain point for heavy users of the chat interface (Issue #922).
*   **Broken onboarding:** The specific login flow for NetEase employees is currently broken, blocking a key user segment (Issue #928).
*   **Desire for resilience:** Users want system-level failover mechanisms rather than having to manually select working models when a provider experiences downtime (Issue #943).

### 8. Backlog Watch
Several key issues remain stale but are too critical to ignore, requiring maintainer intervention:
*   **Issue #926 (Crash on `reject`):** A simple optional-chaining fix (`accumulator.reject?.()`) that has been open since March 2026 but remains unresolved, causing repeated app crashes.
*   **Issue #922 (SSE Line Buffering):** A classic stream-processing bug that silently degrades AI response quality under real-world network conditions.
*   **Issue #925 (Security Reporting Channel):** A standard security hygiene request asking for a dedicated channel to report vulnerabilities. Given the project's integration capabilities, establishing this is crucial for enterprise trust.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyClaw Project Digest — 2026-10-02
Data source: provided GitHub snapshot for `TinyAGI/tinyagi`.

## 1. Today’s Overview
TinyClaw had a quiet, maintenance-focused 24-hour window: 0 issues updated, 0 new releases, and 3 PRs updated/closed. All three closed PRs are Telegram-related and authored by `salemsayed`, covering message persistence, interactive inline-keyboard questions, and live streaming previews. The aggregate reports 3 PRs as merged/closed, though the per-item labels are `[CLOSED]`, so merge-vs-close status cannot be fully distinguished from this snapshot. Community engagement signals are minimal: no issue activity, 0 reactions on the PRs, and comment counts are unavailable. Overall activity is low-to-moderate and focused on hardening the Telegram bridge rather than broad platform expansion.

## 2. Releases
No new releases were reported. No release notes, breaking changes, or migration guidance are available for this window.

## 3. Project Progress
Three PRs were updated and closed in the reporting window:

- [PR #48 — fix: persist Telegram pending messages to disk](https://github.com/TinyAGI/tinyagi/pull/48) — Author: `salemsayed`; created 2026-02-13; updated 2026-10-01. Summary: `pendingMessages` in `telegram-client.ts` was in-memory only, so restarts (409 polling conflict, `tinyclaw restart`, crash) wiped it. The queue processor wrote responses to `queue/outgoing/`, but Telegram could not match them to a chat and silently deleted them. This PR addresses message-loss durability.
- [PR #67 — feat: interactive questions via Telegram inline keyboards](https://github.com/TinyAGI/tinyagi/pull/67) — Author: `salemsayed`; created 2026-02-14; updated 2026-10-01. Summary: Implements a question bridge forwarding Claude’s clarifying questions to Telegram as inline keyboard buttons, enabling bidirectional interaction in non-interactive (`-p`) mode via structured `[QUESTION]` tags.
- [PR #106 — Add Telegram live streaming previews for Claude responses](https://github.com/TinyAGI/tinyagi/pull/106) — Author: `salemsayed`; created 2026-02-16; updated 2026-10-01. Summary: Streams Claude output as partial deltas using `claude --output-format stream-json --include-partial-messages`; emits throttled `partial_*` queue messages for Telegram; updates Telegram with a single live preview message edited in place and finalized.

If these were merged, they would materially improve Telegram reliability, interactivity, and perceived responsiveness. If they were closed without merge, the project has cleared review backlog but may not have captured the changes.

## 4. Community Hot Topics
No Issues were updated, and no PRs show reactions (👍: 0). Comment counts are `undefined` in the provided data, so no PR can be ranked by discussion volume. The closest items to “hot topics” are the three Telegram PRs above, but they lack measurable community engagement. Underlying needs visible in the PR content: continuity across restarts, a way to answer Claude’s clarifying questions from Telegram, and live feedback during long generations. Links:
- [PR #48](https://github.com/TinyAGI/tinyagi/pull/48)
- [PR #67](https://github.com/TinyAGI/tinyagi/pull/67)
- [PR #106](https://github.com/TinyAGI/tinyagi/pull/106)

## 5. Bugs & Stability
No new bugs, crashes, or regressions were reported via Issues today. However, PR #48 documents a high-impact stability bug: Telegram pending messages were stored only in memory, and restarts or polling conflicts wiped them; the Telegram client could then fail to match queued outgoing responses and silently delete them. Severity: high (message loss / silent data loss). A fix PR exists and is closed: [PR #48](https://github.com/TinyAGI/tinyagi/pull/48). No other stability fixes are present in this window.

## 6. Feature Requests & Roadmap Signals
No open Issues contain feature requests in this snapshot. Roadmap signals come from closed PR titles/summaries:
- Interactive Telegram questions via inline keyboards — [PR #67](https://github.com/TinyAGI/tinyagi/pull/67)
- Live streaming previews for Claude responses in Telegram — [PR #106](https://github.com/TinyAGI/tinyagi/pull/106)
- Durable Telegram pending-message handling — [PR #48](https://github.com/TinyAGI/tinyagi/pull/48)

Prediction: if these PRs were merged, the next release would likely center on Telegram UX and reliability, especially non-interactive mode support and streaming feedback. If they were closed unmerged, roadmap direction is unclear from this data alone.

## 7. User Feedback Summary
No direct user feedback is available: 0 Issues updated, no comments visible, and 0 reactions on the PRs. Inferred pain points from PR #48: users can lose Telegram responses after `tinyclaw restart`, crashes, or 409 polling conflicts, and responses may be silently deleted when chat matching fails. Inferred use cases from PRs #67 and #106: using Telegram as a two-way Claude interface, answering clarifying questions without leaving chat, and receiving live streaming previews during generation. Satisfaction/dissatisfaction cannot be measured from this snapshot.

## 8. Backlog Watch
There are no open Issues and no open PRs in the provided data, so there is no conventional backlog requiring maintainer attention. One watch item: PRs #48, #67, and #106 were created in February 2026 but only updated/closed on 2026-10-01, a roughly 7.5-month gap. If they were merged, the backlog is cleared; if they were closed without merge, maintainers may want to revisit or reopen the Telegram durability/interactivity work. Links:
- [PR #48](https://github.com/TinyAGI/tinyagi/pull/48)
- [PR #67](https://github.com/TinyAGI/tinyagi/pull/67)
- [PR #106](https://github.com/TinyAGI/tinyagi/pull/106)

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>



Based on the GitHub activity for the Moltis project (`moltis-org/moltis`) as of October 2, 2026, here is the structured project digest.

---

### 1. Today's Overview
The Moltis project is experiencing a quiet day in terms of community issue resolution, with zero new issues opened, closed, or updated in the last 24 hours, and no new releases published. However, development activity remains steady, highlighted by two critical stability-focused pull requests submitted by contributor Harbor404. The project is currently prioritizing backend robustness, specifically targeting WebSocket compatibility under TLS and Model Context Protocol (MCP) session lifecycle management. Overall, the project health is stable, with active hardening of core protocols underway.

### 2. Releases
* **No new releases were published today.**

### 3. Project Progress
While no pull requests were merged or closed today, there are two active open PRs representing key development progress:
* **WebSocket/TLS Compatibility Fix (PR #1291):** Aims to restrict TLS ALPN to `http/1.1` to resolve WebSocket upgrade failures.
* **MCP Server Resilience Update (PR #1290):** Introduces tracking for failed MCP server startups and automated retry logic with exponential backoff.
* *Status:* Both PRs are currently open and awaiting review.

### 4. Community Hot Topics
The primary focus of current development lies on the following pull requests:
* **PR #1291: `[OPEN] fix(tls): restrict ALPN to HTTP/1.1`** ([Link](https://github.com/moltis-org/moltis/pull/1291))
  * *Underlying Needs:* This PR addresses a critical protocol mismatch. Modern browsers prioritize the `h2` (HTTP/2) protocol during TLS ALPN negotiation. However, because Moltis does not yet implement RFC 8441 extended CONNECT, WebSocket upgrades fail with a `405 Method Not Allowed` error. The community's underlying need is reliable WebSocket connectivity in standard TLS environments; restricting ALPN to HTTP/1.1 serves as a vital compatibility patch.
* **PR #1290: `[OPEN] fix(mcp): recover failed startups and expired sessions`** ([Link](https://github.com/moltis-org/moltis/pull/1290))
  * *Underlying Needs:* This PR targets users integrating external MCP servers. The underlying need is operational automation—specifically, the ability to automatically recover crashed servers and gracefully handle expired streamable HTTP sessions (`404` responses carrying `Mcp-Session-Id`) without manual developer intervention.

### 5. Bugs & Stability
No new user-reported bugs or crashes were filed today (0 issues updated). However, the open PRs directly address existing stability bottlenecks:
* **High Severity: WebSocket Upgrade Failure (405 Error)**
  * *Description:* TLS listeners advertise `h2` before `http/1.1`, breaking WebSocket connections in browsers.
  * *Fix Status:* Draft fix available in **[PR #1291](https://github.com/moltis-org/moltis/pull/1291)** (restricts ALPN to HTTP/1.1).
* **Medium/High Severity: MCP Server Crash/Session Drift**
  * *Description:* Enabled MCP servers that fail during startup remain stuck in a non-retryable state, and expired streamable HTTP sessions are not properly recycled.
  * *Fix Status:* Draft fix available in **[PR #1290](https://github.com/moltis-org/moltis/pull/1290)** (implements dead server tracking, a 5-attempt retry cap, and session ID handling).

### 6. Feature Requests & Roadmap Signals
There are no formal user-submitted feature requests today (0 issues). However, the active PRs provide strong signals for the near-term roadmap:
* **Protocol Fallback Mechanisms:** The work in PR #1291 indicates a roadmap need for temporary protocol downgrade support (HTTP/1.1) until full RFC 8441 extended CONNECT support is natively implemented.
* **Self-Healing Infrastructure:** PR #1290 signals a roadmap progression toward highly automated, self-healing external service integrations, moving away from manual server monitoring to built-in exponential backoff retries.

### 7. User Feedback Summary
No direct user feedback, comments, or reactions were recorded in the last 24 hours. The implicit pain points addressed by the current PRs highlight user dissatisfaction with:
* Operational friction when WebSocket connections drop or fail during standard TLS handshakes.
* The lack of automated recovery tools for crashed MCP server instances in production environments.

### 8. Backlog Watch
* **Total Open Issues:** 0
* Currently, there are no long-standing, unanswered issues in the tracked backlog. Maintainer attention is currently requested to review and merge the two critical stability PRs (**[#1290](https://github.com/moltis-org/moltis/pull/1290)** and **[#1291](https://github.com/moltis-org/moltis/pull/1291)**) to release these essential quality-of-life and compatibility fixes to the user base.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>



Based on the GitHub activity for **CoPaw (QwenPaw)** up to October 2, 2026, here is the structured project digest.

---

### 1. Today's Overview
CoPaw (QwenPaw) is experiencing high development velocity and community engagement, characterized by a strong focus on hardening the core agent framework and fixing critical provider-specific bugs. While no new releases were cut in the last 24 hours, the repository shows healthy developer activity, with multiple first-time contributors submitting crucial fixes—particularly around security path traversal, media formatting, and background task orchestration. Overall project health is stable, though some high-severity user-reported bugs (such as LAN access and session-breaking provider bugs) remain open and require maintainer triage.

---

### 2. Releases
*   **No new releases** were published in the last 24 hours.

---

### 3. Project Progress
The past 24 hours saw 2 closed/merged Pull Requests, representing significant stability and localization improvements:
*   **CJK Markdown Rendering Fix ([PR #8068 - CLOSED](https://github.com/agentscope-ai/QwenPaw/pull/8068))**: Repaired the CommonMark emphasis "flanking" rules bug where CJK sentence punctuation was incorrectly trapped inside bold/italic delimiters in the console chat interface.
*   **DeepSeek Formatter Restriction ([PR #8069 - CLOSED](https://github.com/agentscope-ai/QwenPaw/pull/8069))**: Restricted the DeepSeek formatter input types to image-only media, preventing the serialization of unsupported PDF and audio blocks into the Chat Completions API.

**Key Open PRs in Progress:**
*   **Advisor Mode ([PR #7569 - OPEN](https://github.com/agentscope-ai/QwenPaw/pull/7569))**: A massive (XXXL) feature addition introducing a collaborative loop mode pairing a strong "advisor" model with a cheaper "worker" agent to optimize cost and quality.
*   **Background Task Wakeup ([PR #8063 - OPEN](https://github.com/agentscope-ai/QwenPaw/pull/8063))**: Adds a notification mechanism to wake parent agent sessions when background subagent tasks finish.
*   **Security & Validation Fixes**: PRs #8065 (path traversal sanitization in skill staging) and #8066 (dropping empty base64 media blocks before formatting) are actively open for review.

---

### 4. Community Hot Topics
*   **Human-in-the-Loop Integration ([Issue #6274](https://github.com/agentscope-ai/QwenPaw/issues/6274))**: This is the most active discussion thread (3 comments, 1 👍). Users are requesting an official `ask_user_question` tool to pause execution and request structured human feedback, highlighting a strong community demand for safer, human-in-the-loop workflows.
*   **DeepSeek PDF Session Crash ([Issue #8064](https://github.com/agentscope-ai/QwenPaw/issues/8064))**: Drawing significant attention (2 comments), this bug details how sending a PDF via `send_file_to_user` permanently corrupts the session state, forcing users to restart.
*   **Advisor Mode Orchestration ([PR #7569](https://github.com/agentscope-ai/QwenPaw/pull/7569))**: This large-scale feature PR is highly watched, signaling strong interest from the community in advanced multi-model orchestration and cost-saving workflows.

---

### 5. Bugs & Stability
Bugs reported or addressed today, ranked by severity:

1.  **CRITICAL: Conversation Page LAN Access Blocker ([Issue #8073](https://github.com/agentscope-ai/QwenPaw/issues/8073))**
    *   *Symptom*: In version V2.2.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-10-02

Data window: last 24h as of 2026-10-01. Source: `github.com/zeroclaw-labs/zeroclaw`.

## 1. Today's Overview

ZeroClaw showed very high inbound activity but zero merge throughput in this window: **43 issues updated** (42 open, 1 closed) and **50 PRs updated** (50 open, 0 merged/closed), with **no new releases**. The project is therefore in a heavy coordination and review phase rather than a shipping phase. The dominant workstreams are **principal isolation/security**, **gateway/runtime separation**, **plugin/WASM readiness**, and **channel reliability**. Critical open S0 bugs around delegated memory scope ([#11198](https://github.com/zeroclaw-labs/zeroclaw/issues/11198), [#11239](https://github.com/zeroclaw-labs/zeroclaw/issues/11239)) and several P1 stability/observability defects remain the main health risks. Activity assessment: **high community and maintainer attention, but merge/release latency is the key bottleneck**.

## 2. Releases

No new releases in this window. No release notes, breaking changes, or migration notes to report.

## 3. Project Progress

- **Merged/closed PRs today: 0.** All 50 updated PRs remain open.
- **Closed issue today: 1** — [#10975](https://github.com/zeroclaw-labs/zeroclaw/issues/10975) `WhatsApp Web (channel): inbound images not downloaded`, previously rated S2 major feature broken.
- **Features/fixes advanced in open PRs, not yet landed:**
  - Gateway separation: [#11412](https://github.com/zeroclaw-labs/zeroclaw/pull/11412) dashboard chat socket through core, [#11391](https://github.com/zeroclaw-labs/zeroclaw/pull/11391) core-version refusal, [#11381](https://github.com/zeroclaw-labs/zeroclaw/pull/11381) session message/state/delete routes, [#11376](https://github.com/zeroclaw-labs/zeroclaw/pull/11376) cron and memory routes.
  - Security/principal containment: [#11410](https://github.com/zeroclaw-labs/zeroclaw/pull/11410) cron and peer execution, [#11408](https://github.com/zeroclaw-labs/zeroclaw/pull/11408) SOP entry points, [#11409](https://github.com/zeroclaw-labs/zeroclaw/pull/11409) owned background result paths.
  - Config/auth hardening: [#10911](https://github.com/zeroclaw-labs/zeroclaw/pull/10911) atomic live revisions, [#11264](https://github.com/zeroclaw-labs/zeroclaw/pull/11264) roster password auth provider, [#11388](https://github.com/zeroclaw-labs/zeroclaw/pull/11388) URL credential masking, [#11405](https://github.com/zeroclaw-labs/zeroclaw/pull/11405)/[#11406](https://github.com/zeroclaw-labs/zeroclaw/pull/11406) broad-root refusal.
  - Runtime/providers/channels: [#11292](https://github.com/zeroclaw-labs/zeroclaw/pull/11292) background delegate progress, [#11403](https://github.com/zeroclaw-labs/zeroclaw/pull/11403) Codex prompt-cache affinity, [#10988](https://github.com/zeroclaw-labs/zeroclaw/pull/10988) WhatsApp poll votes, [#10986](https://github.com/zeroclaw-labs/zeroclaw/pull/10986) channel-addressed tools.
  - Test stability: [#11411](https://github.com/zeroclaw-labs/zeroclaw/pull/11411) replaces a timing-based configure-refusal test.

## 4. Community Hot Topics

Most active issues by comment count:

1. **[#9600](https://github.com/zeroclaw-labs/zeroclaw/issues/9600) — 16 comments**  
   `[Tracker]: Session-persistence contract ownership and layer ordering`  
   Underlying need: four independent workstreams are changing the same persistence contract without a designated owner. This is a coordination and architecture-governance hotspot.

2. **[#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) — 11 comments**  
   `[Feature]: Per-sender RBAC for multi-tenant agent deployments`  
   Underlying need: secure multi-tenant agent deployments with sender roles, narrowed to the existing agent/risk-profile model. Targeted at `release:v0.9.0`.

3. **[#9799](https://github.com/zeroclaw-labs/zeroclaw/issues/9799) — 5 comments**  
   `bug(daemon): long-lived ephemeral daemon can enter sustained multi-core CPU spin`  
   Underlying need: runtime reliability and resource safety for long-lived daemons.

4. **[#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) — 5 comments**  
   `[Tracker]: Runtime and gateway delivery - v0.8.6 and v0.9.0`  
   Underlying need: release sequencing and a single source of truth for Phase 2 runtime work and Phase 3 gateway separation.

5. **[#10975](https://github.com/zeroclaw-labs/zeroclaw/issues/10975) — 5 comments — CLOSED**  
   `WhatsApp Web: inbound images not downloaded`  
   Underlying need: media/vision parity across channels. Closing is positive, though no release yet confirms shipping.

Other active items: [#7539](https://github.com/zeroclaw-labs/zeroclaw/issues/7539) llama.cpp model router (4 comments), [#11198](https://github.com/zeroclaw-labs/zeroclaw/issues/11198) delegated memory principal scope (4 comments), [#11387](https://github.com/zeroclaw-labs/zeroclaw/issues/11387) zerocode cwd regression (3 comments), [#10781](https://github.com/zeroclaw-labs/zeroclaw/issues/10781) inert config keys (3 comments), [#8907](https://github.com/zeroclaw-labs/zeroclaw/issues/8907) zerocode plugin catalog (3 comments).

## 5. Bugs & Stability

Ranked by severity/risk as tagged in the data:

### Critical — S0 / P0
- **[#11198](https://github.com/zeroclaw-labs/zeroclaw/issues/11198) — Delegated memory tools lose principal scope**  
  S0 data loss/security risk. A principal-owned RPC session routes direct memory tools to the owner’s private plane, but an agentic delegate constructs replacement memory tools without that principal scope.  
  Related containment PRs are in review: [#11409](https://github.com/zeroclaw-labs/zeroclaw/pull/11409), [#11410](https://github.com/zeroclaw-labs/zeroclaw/pull/11410), [#11408](https://github.com/zeroclaw-labs/zeroclaw/pull/11408). No merge yet.

- **[#11239](https://github.com/zeroclaw-labs/zeroclaw/issues/11239) — Owned sessions reach shared memory plane through `spawn_subagent` and `execute_pipeline`**  
  S0 data loss/security risk, `release:v0.9.0`. Principal-bound sessions still build/hold unscoped memory handles.  
  Related PR: [#11409](https://github.com/zeroclaw-labs/zeroclaw/pull/11409) refuses owned background result paths.

### High — S1/P1
- **[#11294](https://github.com/zeroclaw-labs/zeroclaw/issues/11294) — Flaky configure-refusal test races 150 ms sleep**  
  S1 workflow blocked, low risk. Fix PR exists: [#11411](https://github.com/zeroclaw-labs/zeroclaw/pull/11411).

- **[#9799](https://github.com/zeroclaw-labs/zeroclaw/issues/9799) — Long-lived ephemeral daemon sustained multi-core CPU spin**  
  P1, high risk, `r:needs-repro`. Debug daemon consumed 140–177% CPU for ~17h with closed Telegram socket and repeated behavior.

- **[#11204](https://github.com/zeroclaw-labs/zeroclaw/issues/11204) — OpenRouter spend shows `$0.00` and all tokens “free tok”**  
  P1, high risk, S2 degraded behavior. `usage.cost` never ingested after ~90 requests / ~2.1M tokens.

- **[#11257](https://github.com/zeroclaw-labs/zeroclaw/issues/11257) — WhatsApp Web drops captions of inbound images, videos, documents**  
  P1, medium risk, S2. Agent receives placeholders only.

- **[#9394](https://github.com/zeroclaw-labs/zeroclaw/issues/9394) — `gateway.pairing_dashboard` accepted but unread; pairing codes never expire**  
  P1, high risk, security/pairing.

- **[#10876](https://github.com/zeroclaw-labs/zeroclaw/issues/10876) — Gateway config auth writes reported saved but not reaching RPC authority until daemon reload**  
  P1, high risk. Partially delivered; follow-ups [#11324](https://github.com/zeroclaw-labs/zeroclaw/issues/11324) and [#11325](https://github.com/zeroclaw-labs/zeroclaw/issues/11325) opened.

- **[#9624](https://github.com/zeroclaw-labs/zeroclaw/issues/9624) — Registry WIT pin diverges from master and breaks published components**  
  P1, high risk, `release:v0.8.6`.

### Medium — S2
- **[#11387](https://github.com/zeroclaw-labs/zeroclaw/issues/11387) — zerocode ignores launch directory again, forces agent workspace as cwd**  
  S2 regression of [#10609](https://github.com/zeroclaw-labs/zeroclaw/issues/10609), `release:v0.8.6`.
- **[#11333](https://github.com/zeroclaw-labs/zeroclaw/issues/11333) — Skill review tools can’t see skills assigned through `skill_bundles`**  
  S2 degraded behavior.
- **[#11332](https://github.com/zeroclaw-labs/zeroclaw/issues/11332) — Skill review and creation never run for channel, webhook, or gateway turns**  
  S2 degraded behavior.
- **[#10975](https://github.com/zeroclaw-labs/zeroclaw/issues/10975) — WhatsApp inbound images not downloaded — CLOSED**  
  S2 major feature broken.

### Low — S3
- **[#11296](https://github.com/zeroclaw-labs/zeroclaw/issues/11296) — llama.cpp and custom provider use wrong URL/URI for models**  
  S3 minor.
- **[#10781](https://github.com/zeroclaw-labs/zeroclaw/issues/10781) — Inert context/history config keys**  
  S3 minor; accepted but unimplemented.

## 6. Feature Requests & Roadmap Signals

Strong signals for the next releases:

**Likely for `v0.8.6`:**
- Runtime/gateway Phase 2 delivery tracker [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432).
- Plugin update with failure rollback [#10995](https://github.com/zeroclaw-labs/zeroclaw/issues/10995).
- Minimal core tool set and binary-size evidence [#10998](https://github.com/zeroclaw-labs/zeroclaw/issues/10998).
- Public runtime composition boundary [#10993](https://github.com/zeroclaw-labs/zeroclaw/issues/10993).
- Discord plugin installation proof [#10999](https://github.com/zeroclaw-labs/zeroclaw/issues/10999).
- Plugin webhook registration/dispatch across IPC [#11003](https://github.com/zeroclaw-labs/zeroclaw/issues/11003).
- Plugin install seed retry [#10162](https://github.com/zeroclaw-labs/zeroclaw/issues/10162).
- WIT/host compatibility contract [#9624](https://github.com/zeroclaw-labs/zeroclaw/issues/9624).

**Likely for `v0.9.0`:**
- Per-sender RBAC for multi-tenant deployments [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982).
- Gateway separation Phase 3 under [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432).
- Principal-scoped memory fixes [#11198](https://github.com/zeroclaw-labs/zeroclaw/issues/11198), [#11239](https://github.com/zeroclaw-labs/zeroclaw/issues/11239).
- Local username/password AuthProvider [#8076](https://github.com/zeroclaw-labs/zeroclaw/issues/8076).

**Backlog/icebox:**
- llama.cpp model router [#7539](https://github.com/zeroclaw-labs/zeroclaw/issues/7539).
- zerocode unified plugin/capability catalog pane [#8907](https://github.com/zeroclaw-labs/zeroclaw/issues/8907).

## 7. User Feedback Summary

Real user pain points visible in this window:

- **Channel media/vision is unreliable.** [#10975](https://github.com/zeroclaw-labs/zeroclaw/issues/10975) reports inbound WhatsApp images arrive as literal `[Image]`, making vision unusable; [#11257](https://github.com/zeroclaw-labs/zeroclaw/issues/11257) reports captions are dropped.
- **Cost observability is broken.** [#11204](https://github.com/zeroclaw-labs/zeroclaw/issues/11204) shows OpenRouter spend `$0.00` and all tokens classified as free, undermining trust in dashboards.
- **Local-model users hit configuration friction.** [#7539](https://github.com/zeroclaw-labs/zeroclaw/issues/7539) says the app is “very useful for working on smaller tasks with small local models,” but llama.cpp uses default settings; [#11296](https://github.com/zeroclaw-labs/zeroclaw/issues/11296) reports wrong URI handling for llama.cpp/custom providers.
- **Config keys are misleading.** [#10781](https://github.com/zeroclaw-labs/zeroclaw/issues/10781) users set context/history keys expecting token savings, but they are inert.
- **Learning/skill workflows have gaps.** [#11333](https://github.com/zeroclaw-labs/zeroclaw/issues/11333) and [#11332](https://github.com/zeroclaw-labs/zeroclaw/issues/11332) show skill review/creation not seeing bundles or not running for channel/webhook/gateway turns.
- **TUI/daemon reliability concerns.** [#11387](https://github.com/zeroclaw-labs/zeroclaw/issues/11387) zerocode cwd regression; [#9799](https://github.com/zeroclaw-labs/zeroclaw/issues/9799) sustained CPU spin.

Overall satisfaction signals are mixed: users clearly find value in local/small-model workflows and plugin architecture, but are blocked by security isolation, channel media handling, cost visibility, and configuration correctness.

## 8. Backlog Watch

Important long-running or high-impact items needing maintainer attention:

- **[#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982)** — Per-sender RBAC. Created 2026-04-22, 11 comments, accepted, targeted at v0.9.0.
- **[#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)** — Runtime/gateway delivery tracker. Created 2026-06-09; central to v0.8.6 and v0.9.0 sequencing.
- **[#7539](https://github.com/zeroclaw-labs/zeroclaw/issues/7539)** — llama.cpp model router. Created 2026-06-12, status icebox.
- **[#8076](https://github.com/zeroclaw-labs/zeroclaw/issues/8076)** — Local username/password AuthProvider. Created 2026-06-20; child of #7141.
- **[#8907](https://github.com/zeroclaw-labs/zeroclaw/issues/8907)** — zerocode unified plugin/capability catalog pane. Created 2026-07-09, status blocked.
- **[#9394](https://github.com/zeroclaw-labs/zeroclaw/issues/9394)** — Pairing dashboard unread and non-expiring codes. Created 2026-07-26, P1 security.
- **[#9624](https://github.com/zeroclaw-labs/zeroclaw/issues/9624)** — Registry WIT pin divergence. Created 2026-08-01, `release:v0.8.6`.
- **[#9799](https://github.com/zeroclaw-labs/zeroclaw/issues/9799)** — Daemon CPU spin. Created 2026-08-07, still `r:needs-repro`.
- **[#10162](https://github.com/zeroclaw-labs/zeroclaw/issues/10162)** — Plugin install seed retry. Created 2026-08-20.
- **[PR #10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391)** — Delegate workspace/tool ceiling/command policy. Created 2026-08-26, `needs-author-action`, size XL.
- **[PR #9894](https://github.com/zeroclaw-labs/zeroclaw/pull/9894)** — WhatsApp reactions. Created 2026-08-10, `stale-candidate`, `needs-author-action`.
- **[PR #10911](https://github.com/zeroclaw-labs/zeroclaw/pull/10911)** — Atomic live config revisions. Created 2026-09-16, size XL, broad impact across config/runtime/gateway.

**Health takeaway:** ZeroClaw is highly active, with substantial security and gateway/runtime work in flight. The main risks are the lack of merges in this window, the critical open principal-scope memory bugs, and several P1 channel/observability defects. The project would benefit from merge/review throughput and a clear release path for the v0.8.6/v0.9.0 trackers.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*