# OpenClaw Ecosystem Digest 2026-10-13

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-10-12 22:15 UTC

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



# OpenClaw Project Digest — 2026-10-13

---

## 1. Today's Overview

OpenClaw remains highly active, with 500 issues and 500 PRs updated in the last 24 hours — 332 issues and 287 PRs still open, signaling sustained velocity. Two new releases shipped (v2026.10.5-beta.2 and v2026.10.2), both focused on hardening the update mechanism and resolving update-path regressions. The project's issue triage system (clawsweeper) is heavily engaged, with many issues tagged for maintainer review, product decision, or live reproduction. Overall health is **cautiously positive**: update reliability is improving, but several P0 memory leaks, Windows update stalls, and plugin hot-reload bugs remain unresolved.

---

## 2. Releases

### v2026.10.5-beta.2
- **Focus:** Update recovery and resilience.
- **Key changes:** `openclaw update` now settles stale handoff leases, completed receipts, and legacy 2026.9.8 recovery records instead of stopping on `update-recovery-pending`. Service heap limits and webhook listeners are preserved through updates. Windows short-path handling is improved.
- **Breaking changes:** None noted.
- **Migration:** Beta channel; not recommended for production.

### v2026.10.2
- **Focus:** Clean in-place upgrades from 2026.10.1.
- **Key changes:** Upgrades from stable 2026.10.1 now complete without errors. Windows, cloned-filesystem, and private-Node update paths no longer stall or roll back. References #168849, #169031.
- **Breaking changes:** None noted.
- **Migration:** Straightforward upgrade from 2026.10.1.

---

## 3. Project Progress

### Merged/Closed PRs Today (selected highlights):

| PR | Summary |
|---|---|
| [#170296](https://github.com/openclaw/openclaw/pull/170296) | Test: prepare profile fixtures and preserve restart drain |
| [#170293](https://github.com/openclaw/openclaw/pull/170293) | Test: order admission fixture clock advances |
| [#170292](https://github.com/openclaw/openclaw/pull/170292) | Test: inject recorded checkpoint failure in integrity fixture |
| [#170286](https://github.com/openclaw/openclaw/pull/170286) | Test: synchronize streamed-block recovery fixtures |
| [#170285](https://github.com/openclaw/openclaw/pull/170285) | Test: bound concurrent session durability fixture |
| [#170288](https://github.com/openclaw/openclaw/pull/170288) | Test: prepare profile catalog for cron run fixtures |
| [#170284](https://github.com/openclaw/openclaw/pull/170284) | Test: isolate configured-store projection fixtures |
| [#170290](https://github.com/openclaw/openclaw/pull/170290) | Test: wait for MLX transport ownership before shutdown |
| [#170123](https://github.com/openclaw/openclaw/pull/170123) | Fix: web fetch silently changes JSON numbers (rounds IDs, high-precision decimals) |
| [#170314](https://github.com/openclaw/openclaw/pull/170314) | Refactor: use shared tabs in Meetings reader (Web Awesome removal) |

### Key Features Advanced:
- **Solid.js migration of Control UI** (#168612): Ports the app shell, sidebar, and retained routes from Lit to Solid — a major UI modernization.
- **Session reads moved off synchronous SQLite** (#169622): Bundled session reads now go through workers or prepared facts, reducing event-loop blockage across 14+ channels and extensions.
- **Incognito session memory backend** (#169363): Activates the session actor's memory backend for all incognito flows, removing a native SQLite owner on the Gateway thread.

---

## 4. Community Hot Topics

### Most Commented Issues (last 24h):

| Issue | Comments | Topic |
|---|---|---|
| [#159356](https://github.com/openclaw/openclaw/issues/159356) | 26 | llama.cpp manager reports ready while embedding child exits; HTTP 500 on embedding requests |
| [#159662](https://github.com/openclaw/openclaw/issues/159662) | 22 | `prepared-model-catalog.worker.js` unbounded memory leak (~4-5 GB/h, provider-agnostic) |
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | 20 | Gateway blocks for minutes capturing large external plugins (2026.9.6 regression) |
| [#50093](https://github.com/openclaw/openclaw/issues/50093) | 20 | WhatsApp: backfill missed messages after reconnection |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 18 | OpenClaw leaks unreaped hook/tool child processes → zombie accumulation |
| [#78308](https://github.com/openclaw/openclaw/issues/78308) | 18 | Channel-mediated approval for MCP tool calls (consent envelope) |

### Analysis:
- **Memory leaks** are the dominant community concern: #159662 (4-5 GB/h leak in model catalog worker) and #99659 (OOM after companion app connects) point to a systemic memory-management problem.
- **WhatsApp reliability** (#50093) and **Discord voice duplication** (#125826) are persistent channel-specific pain points.
- **MCP security** (#78308, #76493) is an emerging theme — users want the same approval pipeline for MCP tools that exists for shell-exec calls, and SecretRef support in MCP env schemas.

---

## 5. Bugs & Stability

### P0 / Critical (ranked by severity):

| Issue | Severity | Summary | Fix PR? |
|---|---|---|---|
| [#159662](https://github.com/openclaw/openclaw/issues/159662) | P0 | Unbounded memory leak in `prepared-model-catalog.worker.js`, ~4-5 GB/h, reproduced on cold reboot | No |
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | P0 | Gateway blocks for minutes at startup capturing large external plugins (2026.9.6 regression) | No |
| [#158390](https://github.com/openclaw/openclaw/issues/158390) | P0 | `plugin-captures` tmp dirs never GC'd — disk fills indefinitely | No |
| [#126821](https://github.com/openclaw/openclaw/issues/126821) | P0 | SQLite corruption recurs on pristine rebuilt DBs within 15-24h (WSL2) | No |
| [#146860](https://github.com/openclaw/openclaw/issues/146860) | P0 | Windows managed update handoff stalls when Gateway Scheduled Task uses InteractiveToken | No |
| [#153426](https://github.com/openclaw/openclaw/issues/153426) | P0 | `MEMORY.md`/`USER.md` silently and permanently excluded from bootstrap by provenance ratchet | No |

### High (P1) Issues:

| Issue | Summary |
|---|---|
| [#156112](https://github.com/openclaw/openclaw/issues/156112) | `openclaw update` fails at "global install swap" on npm global installs (2026.9.4 → 2026.9.5) |
| [#168955](https://github.com/openclaw/openclaw/issues/168955) | Startup regression in 2026.10.1: ready time ~1030s vs ~410s on 2026.9.9 (Windows); `sidecars.control-ui-assets` blocks 477s |
| [#167652](https://github.com/openclaw/openclaw/issues/167652) | Windows Gateway hangs after 2026.9.9 upgrade despite Doctor reporting verified restart |
| [#164799](https://github.com/openclaw/openclaw/issues/164799) | After version change, agents admit one by one for minutes; unconfigured system-agent DB refused (readyz 503) |
| [#168750](https://github.com/openclaw/openclaw/issues/168750) | Update activation Doctor fails after ~24 min with "Database maintenance authority check cannot admit a nested effect" (CLOSED) |
| [#154891](https://github.com/openclaw/openclaw/issues/154891) | Failed/rolled-back config hot-reload bricks unrelated plugins with PluginInstanceUnavailableError until full restart |

### Notable Regression:
The 2026.10.1 release introduced a **startup regression on Windows** (#168955, #167652) — ready times roughly doubled, and some Gateways hang outright. The 2026.10.2 release addressed some update-path issues but these startup regressions appear unresolved.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Signal Strength |
|---|---|---|
| [#78308](https://github.com/openclaw/openclaw/issues/78308) | Channel-mediated approval for MCP tool calls (consent envelope) | High — mirrors existing shell-exec approval flow |
| [#76493](https://github.com/openclaw/openclaw/issues/76493) | Allow SecretRef objects in `mcp.servers[].env` schema | High — security best practice; 4 👍 |
| [#16670](https://github.com/openclaw/openclaw/issues/16670) | Onboarding Wizard should include Memory/Embedding setup as mandatory step | Medium — 2 👍, but critical for first-run experience |
| [#111143](https://github.com/openclaw/openclaw/issues/111143) | Allow pinning plugin tabs in the Control UI sidebar | Low — UX polish |
| [#50093](https://github.com/openclaw/openclaw/issues/50093) | WhatsApp: backfill missed messages after reconnection | High — message-loss critical for production use |

### Predicted Next Version:
- **MCP consent envelope** (#78308) is a natural follow-up to the existing shell-exec approval system and may land in the next stable.
- **SecretRef in MCP env** (#76493) is a schema-level change that could be bundled with the MCP consent work.
- **Onboarding memory/embedding setup** (#16670) is a UX gap that the team may address to reduce first-run configuration errors.

---

## 7. User Feedback Summary

### Recurring Pain Points:
1. **Update reliability on Windows:** Multiple users report update failures, stalls, and hangs — especially with npm global installs and Scheduled Task configurations (#156112, #146860, #167652, #138560). The 2026.10.2 release improved some paths, but Windows remains the most fragile platform.
2. **Memory leaks and OOM:** Users on resource-constrained hosts (4 GB RAM) report crashes and instability (#159356, #159662, #99659). The prepared-model-catalog worker leak in particular is reproducible on idle-to-light traffic.
3. **Plugin hot-reload fragility:** A failed config hot-reload can permanently brick unrelated plugins until a full restart (#154891).
4. **Channel message loss:** WhatsApp reconnection silently drops messages (#50093); Discord voice replies are double-spoken (#125826).
5. **Transcript jitter in WebChat:** Sustained micro-tremble when scrolling into chat history (#164394) — a visible UI regression.
6. **Claude CLI model availability false negatives:** After a Gateway restart, `claude-cli/*` models report `available: false`, hiding the Effort picker (#158922).

### Positive Signals:
- The 2026.10.2 release was praised for making in-place updates from 2026.10.1 "complete cleanly" — a direct response to user frustration.
- The Solid.js UI migration (#168612) is a significant investment in the Control UI experience.
- Several PRs address lost replies for Claude CLI background tasks (#170322, #166511, #160209), showing sustained attention to that backend.

---

## 8. Backlog Watch

### Long-Unanswered Issues Needing Maintainer Attention:

| Issue | Age | Summary | Why It Matters |
|---|---|---|---|
| [#50093](https://github.com/openclaw/openclaw/issues/50093) | ~7 months | WhatsApp backfill missed messages after reconnection | Silent message loss is unacceptable for production deployments |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | ~4 months | Unreaped hook/tool child processes → zombie accumulation | Long-term runtime degradation; resource leak |
| [#78308](https://github.com/openclaw/openclaw/issues/78308) | ~6 months | Channel-mediated approval for MCP tool calls | Security gap; MCP adoption is growing |
| [#76493](https://github.com/openclaw/openclaw/issues/76493) | ~6 months | SecretRef objects in `mcp.servers[].env` schema | Blocks secure MCP configuration patterns |
| [#113149](https://github.com/openclaw/openclaw/issues/113149) | ~3 months | CLI-backend empty_response fallback restart kills unrelated concurrent Agent-tool sessions | Session isolation regression |
| [#164294](https://github.com/openclaw/openclaw/issues/164294) | ~10 days | Gateway state DB WAL auto-checkpoint never completes (pinned by in-process reader) | Database health risk; could lead to corruption |
| [#168413](https://github.com/openclaw/openclaw/issues/168413) | ~3 days | `memory.search.extraPaths

---

## Cross-Ecosystem Comparison



# Cross-Project Comparison Report — Personal AI Assistant / Agent Open-Source Ecosystem
**Data window:** 2026-10-12 to 2026-10-13 | **Projects analyzed:** 13

---

## 1. Ecosystem Overview

The personal AI assistant open-source landscape in late 2026 is defined by three converging pressures: **multi-agent orchestration** is moving from experimental to production, **channel integration** is the primary battleground for user adoption, and **operational reliability** (updates, memory management, session state) is the dominant trust deficit across every project. Activity is high but uneven — the top projects (OpenClaw, CoPaw, ZeroClaw) are processing hundreds of issues and PRs per week, while several smaller projects are quiet or in stabilization. The ecosystem is fragmenting along architectural axes: some projects are building toward plugin-based extensibility (CoPaw, NanoBot), others toward native desktop/managed experiences (Hermes, OpenClaw), and a third group toward security-first multi-agent orchestration (Moltis, ZeroClaw). Community sentiment is cautiously optimistic about core agent capabilities but frustrated by update fragility, silent failures, and channel-adapter drift.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed (24h) | Latest Release | Health Signal |
|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | ~50 (selected) | v2026.10.5-beta.2, v2026.10.2 | Cautiously positive — high velocity, P0 memory leaks & Windows stalls unresolved |
| **ZeroClaw** | 21 | 50 | 2 | None (v0.8.6 staged) | Active but congested — high inflow, weak merge throughput, maintainer decision queue bottleneck |
| **CoPaw** | 15 | 22 | 6 | None (beta cycle) | High velocity, pre-release stabilization — beta regression load on Desktop/Windows |
| **Hermes Agent** | 50 | 50 | 1 | v0.21.7 (Oct 11) | Post-release consolidation — heavy open-PR backlog, update-path fragility |
| **NanoBot** | — | 33 | 18 | None | Rapid iteration — Docker onboarding broken, WebUI modularization advancing |
| **LobsterAI** | — | 7 | 6 | None | Active — bug mitigation & platform compatibility focus |
| **NanoClaw** | 0 | 5 | 2 | None | Stable — integration robustness fixes, no regressions |
| **PicoClaw** | 4 | 7 | 6 | None | Steady maintenance — channel compatibility issues unresolved |
| **Moltis** | 1 | 2 | 0 | None | Focused — critical security bypass vulnerability open, no releases |
| **IronClaw** | 1 | 0 | 0 | None | Quiet — benchmark monitoring only, no community engagement |
| **TinyClaw** | 0 | 0 | 0 | None | Inactive |
| **ZeptoClaw** | 0 | 0 | 0 | None | Inactive |

*Note: "Issues (24h)" and "PRs (24h)" reflect items updated, not opened. Dashes indicate data not reported in digest. Health signal is a qualitative assessment based on the digest's own analysis.*

---

## 3. OpenClaw's Position

**Advantages vs. peers:**
- **Scale of engagement:** OpenClaw's 500/500 issue-PR update volume dwarfs all competitors, indicating either the largest user base or the most active maintainer triage (or both). Its `clawsweeper` triage system is the most structured in the ecosystem.
- **Channel breadth:** 14+ channels and extensions with session reads moved off synchronous SQLite — a depth of integration that smaller projects cannot match.
- **UI modernization investment:** The Solid.js migration of the Control UI (#168612) is a significant, forward-looking bet that most peers haven't attempted.
- **Security pipeline maturity:** The existing shell-exec approval flow is the reference implementation that MCP consent (#78308) and other projects are trying to replicate.

**Technical approach differences:**
- OpenClaw is the only project in the set explicitly migrating a major UI component library (Lit → Solid.js), signaling a performance-first orientation for the Control UI.
- Its session-read architecture (workers/prepared facts) is a deliberate decoupling from synchronous SQLite — a pattern not seen elsewhere in the ecosystem.
- The project treats update reliability as the #1 product risk, with dedicated beta channels and recovery-record cleanup logic. This operational focus is more pronounced than in peers that are still stabilizing core features.

**Community size comparison:** By raw GitHub activity, OpenClaw is the clear leader. ZeroClaw and CoPaw show comparable engagement density but on smaller absolute bases. Hermes Agent has a large contributor cohort (notably the Xipong contributor with ~51 open PRs) but is constrained by maintainer bandwidth.

---

## 4. Shared Technical Focus Areas

Six requirements emerge across multiple projects:

| Focus Area | Projects | Specific Needs |
|---|---|---|
| **Memory management & OOM prevention** | OpenClaw, Hermes, CoPaw | Unbounded leaks in workers/catalog processes (4-5 GB/h reported); systemic need for bounded memory in always-on deployments |
| **Channel adapter resilience** | OpenClaw, Hermes, PicoClaw, NanoClaw | Upstream API changes (Telegram, QQ, Slack SDK) outpacing adapter updates; message loss on reconnection; invisible dispatcher stalls |
| **Update/install pipeline reliability** | OpenClaw, Hermes, PicoClaw, NanoClaw | Windows update stalls, npm global install failures, staged venv dependency stripping, macOS desktop handoff failures |
| **Security boundaries & access policy** | Moltis, ZeroClaw, OpenClaw, Hermes | Non-gateway turns bypassing chat access policies; MCP tool approval parity; pairing tokens bound to roster users; SecretRef in MCP env schemas |
| **Session state & persistence correctness** | ZeroClaw, OpenClaw, Hermes, CoPaw | SQLite `created_at` clobbering, WAL checkpoint deadlocks, frozen mixed-revision dispatchers after checkout, zombie `running` entries blocking recovery |
| **Configuration & observability** | Hermes, ZeroClaw, CoPaw, NanoClaw | Silent failures (swallowed exceptions, debug-logged errors, false cron success); need for liveness observability beyond connection status; hot-reloadable config |

---

## 5. Differentiation Analysis

| Project | Feature Focus | Target Users | Technical Architecture |
|---|---|---|---|
| **OpenClaw** | Broadest ecosystem, channel coverage, UI modernization | Multi-channel power users, production deployments | Solid.js + Lit migration, SQLite→worker session reads, plugin hot-reload |
| **NanoBot** | WebUI extensibility, component gallery, Docker-first onboarding | Developers building on Nanobot as a platform | Web component-based UI, modular channel plugins, managed install pipeline |
| **Hermes Agent** | Desktop/managed installs, named profiles, multi-channel gateways | VPS/remote deployments, always-on personal agents | Staged Python venvs, desktop app (macOS/Windows), plugin catalog |
| **PicoClaw** | Lightweight, channel-specific fixes (QQ, Telegram, Feishu) | Mobile/Termux users, Chinese-platform integrations | Minimal overhead, opt-in channel features |
| **NanoClaw** | Enterprise integrations (OneCLI, Feishu, Teams, approvals) | Multi-user, multi-channel production deployments | Gateway-pinned integrations, approval workflows, container-based coding CLIs |
| **Moltis** | Multi-agent orchestration, security guardrails | Coordinator-worker architectures, team deployments | Sub-agent spawning with allowlists, channel-bound session policies |
| **CoPaw** | Provider/tool extensibility, plugin architecture, console UX | Multi-agent Docker deployments, GPU-constrained environments | Plugin-based channels with subprocess isolation, hot-reload, provider marketplace |
| **ZeroClaw** | Security-first, RFC-driven architecture, multi-agent interoperability | technically sophisticated users, security-conscious deployments | Rust-based, A2A protocol crate, swarm TUI, strict access policies |

---

## 6. Community Momentum & Maturity

**Tier 1 — Rapidly iterating (high activity, high quality signals):**
- **OpenClaw:** Sustained 500/500 weekly velocity, structured triage, two releases in window. Maturity signal: beta channel for update hardening.
- **CoPaw:** 22 PRs/day, fast triage (3 issues closed, 5 fix PRs opened in-window), first-time contributors arriving. Maturity signal: plugin architecture refactor (XXXL) and provider extensibility are long-term bets.

**Tier 2 — Active but constrained (high activity, bottlenecked on merge/decision throughput):**
- **ZeroClaw:** 50 PRs updated but only 2 merged; maintainer decision queue (#8692) is the explicit bottleneck. Maturity signal: RFC process is mature but adjudication is slow.
- **Hermes Agent:** Post-v0.21.7 consolidation with ~204 PRs rolled into one release; large contributor base but open-PR backlog is heavy. Maturity signal: desktop app and managed install pipeline are production-grade.

**Tier 3 — Steady maintenance (focused, lower volume):**
- **NanoBot:** 18 merged PRs, strong WebUI work, but Docker onboarding is a critical blocker. Maturity signal: modular UI and extension surface are advancing faster than onboarding polish.
- **LobsterAI, NanoClaw, PicoClaw:** Consistent merge rates, bug-fix dominated, no releases in window. Maturity signal: integration robustness is the primary concern, suggesting production usage.

**Tier 4 — Quiet or stabilizing:**
- **Moltis:** 2 open PRs, 1 critical security issue. Focused development but exposed risk.
- **IronClaw:** Benchmark monitoring only, no community engagement.
- **TinyClaw, ZeptoClaw:** No activity.

---

## 7. Trend Signals

**For AI agent developers and technical decision-makers:**

1. **Update reliability is the #1 trust deficit.** Across OpenClaw, Hermes, PicoClaw, and NanoClaw, the self-update path is the most complained-about experience. Projects that invest in staged rollouts, recovery-record cleanup, and platform-specific update paths (OpenClaw's beta channel, Hermes' staged venvs) are earning goodwill. *Implication: treat update mechanism as a first-class feature, not maintenance overhead.*

2. **Memory management is systemic, not incidental.** The prepared-model-catalog worker leak (4-5 GB/h) in OpenClaw, OOM after companion app connects, and unbounded catalog memory in Hermes point to a shared architectural pattern: long-lived workers and caches without hard bounds. *Implication: adopt process-level memory budgets and watchdogs by design.*

3. **Channel adapters cannot keep up with upstream API changes.** Telegram, QQ, Slack SDK, and Feishu are all evolving faster than the adapters wrapping them. Projects with the most channel complaints (Hermes, PicoClaw) are those with the thinnest adapter maintenance bandwidth. *Implication: consider channel-as-plugin architectures (CoPaw #8187, ZeroClaw #11662) to isolate upstream drift.*

4. **Security boundaries are emerging as the next competitive frontier.** Moltis' channel-bound access policy bypass, ZeroClaw's pairing-token scoping, OpenClaw's MCP consent envelope, and Hermes' git global-flag bypass all point to the same need: as agents gain more autonomy (tool calls, sub-agent spawning, cron jobs), the access policy layer must be explicit, auditable, and enforced at every entry point. *Implication: invest in policy enforcement before users report bypasses.*

5. **Users want production-grade observability.** The recurring complaint across Hermes (#71239 invisible Telegram stall, #110374 debug-logged Slack errors), CoPaw (#8175 silent cron failure, #8173 zombie state), and ZeroClaw (#11668 bare `length limit exceeded` error) is that failures are silent or under-instrumented. *Implication: liveness metrics, structured error codes, and failure attribution are becoming table stakes for always-on deployments.*

6. **Multi-agent interoperability is the next architectural battleground.** ZeroClaw's A2A protocol crate, Moltis' coordinator-worker parity, OpenClaw's sub-agent memory backend, and Hermes' subagent_lifecycle v1.1 all converge on the same problem: making agent-to-agent communication durable, attributable, and routable. *Implication: standardize on agent-to-agent protocols now; the ecosystem is one major RFC away from a tipping point.*

7. **Beta quality is reaching production users, eroding trust.** CoPaw's beta builds breaking core flows (approval buttons, conversation page), OpenClaw's beta channel being the only path for update fixes, and Hermes' v0.21.7 stripping plugin dependencies all illustrate the cost of shipping unstable releases to production audiences. *Implication: adopt canary/default-off beta channels with clear version pins for production deployments.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



Based on the GitHub activity for the **NanoBot (HKUDS/nanobot)** repository over the last 24 hours (centered on October 12–13, 2026), here is the structured project digest.

---

### 1. Today's Overview
NanoBot is experiencing a period of highly active, rapid development, marked by significant progress in architectural refactoring, WebUI modularization, and channel integrations. A total of 33 pull requests were updated, with a high closure rate (18 merged/closed), indicating focused, progressing engineering cycles. However, community-facing onboarding remains a friction point, highlighted by a single but critical open bug report regarding the out-of-the-box Docker experience. No new releases were published, suggesting the project is mid-cycle in integrating major feature expansions.

### 2. Releases
*   **New Releases**: None. No new versions were published in the last 24 hours. 

### 3. Project Progress
Significant progress was made across multiple subsystems, with 18 pull requests successfully merged or closed:

*   **WebUI & Settings Optimization**:
    *   **Web Component Gallery (#6179)**: Refactored shared components and introduced an internal gallery to help developers locate and reuse UI controls.
    *   **Settings UX Fixes (#6162, #6161)**: Fixed a bug where settings-initiated restarts leaked into chat history and reorganized web proxy settings under a cleaner Web Access capabilities hierarchy.
    *   **Bundled Documentation Skill (#6176)**: Implemented a `nanobot-document` skill to help users self-diagnose configuration and connection issues using local documentation.
*   **Image Generation & Provider Improvements**:
    *   **Codex Images API Fix (#6177)**: Resolved image generation failures by routing Codex requests through the standalone `/codex/images/generations` endpoint instead of text-model endpoints.
    *   **Runtime Image Tool Refactoring (#6172)**: Decoupled image generation tools from the core `AgentLoop`, enabling applications to compose image tools dynamically.
    *   **Connection Reuse (#6160)**: Updated image settings to support selection of image providers via saved connection IDs rather than hardcoded lists.
*   **Channel & Communications Enhancements**:
    *   **Feishu Pairing Recovery (#6157)**: Restored the assistant creation flow and improved QR pairing failure recovery for the Feishu channel.

### 4. Community Hot Topics
*   **Docker Onboarding Friction (#6165)**: The single most critical community discussion today centers around the default Docker deployment. Users report that `docker compose up` fails to yield a working application, which severely impacts the "Just Works" value proposition for new adopters.
*   **The WebUI Extensions Ecosystem (#6032, #6179)**: High developer interest is directed toward the new configurable local trusted extension surface and the internal component gallery, signaling strong community desire for a customizable, plugin-ready UI.
*   **Managed Installs & Updater Pipeline (#6168)**: A massive coordinating PR aimed at managed installations, recovery flows, and in-app updates is drawing significant structural attention.

### 5. Bugs & Stability
Bugs are ranked by severity, with details on active or resolved fixes:

| Severity | Bug Report / PR | Status | Fix Details |
| :--- | :--- | :--- | :--- |
| **Critical** | **[Issue #6165](https://github.com/HKUDS/nanobot/issues/6165)**: Default Docker image broken / poor onboarding docs. | **OPEN** | No immediate fix PR is currently visible. This is a critical blocker for low-friction onboarding. |
| **Medium** | **[PR #6011](https://github.com/HKUDS/nanobot/pull/6011)**: Codex image generation responses stream buffered, risking image loss on disconnect. | **OPEN (Fix Branch)** | Proposes switching to streaming client methods to prevent premature body discard. |
| **Low/Medium** | **[PR #6157](https://github.com/HKUDS/nanobot/pull/6157)**: Feishu assistant creation and pairing recovery failures. | **CLOSED (Fixed)** | Restored creation flows and separated reply delivery tracking from sender approval. |
| **Low** | **[PR #6162](https://github.com/HKUDS/nanobot/pull/6162)**: Silent restart commands leaking into chat history. | **CLOSED (Fixed)** | Treated settings requests as transient control messages to keep chat histories clean. |

### 6. Feature Requests & Roadmap Signals
Based on active pull requests, the near-term roadmap is shaping up around:
*   **Desktop/Managed Updates (#6168)**: The integration of managed installs and exact-version in-app updates suggests Nanobot is moving toward self-updating server instances.
*   **Granular Model Preset Overrides (#6159)**: The addition of per-preset headers and parameters indicates a push to support complex multi-provider routing out of the box.
*   **Enterprise

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-10-13

## 1. Today's Overview
Hermes Agent shows sustained high activity: 50 issues and 50 PRs updated in the last 24h, with 42 issues open/active and 49 PRs still open. Only one PR was merged/closed in the window and a single new release shipped (v0.21.7 on Oct 11), suggesting the project is in a post-release consolidation phase — a large volume of churn (~204 PRs since v0.21.6) has just been rolled into a stable tag. Thematic hotspots today are **message-delivery/session-state reliability across Telegram/Slack gateways**, **install/update pipeline fragility** (staged venvs, macOS desktop handoff, NixOS), and **plugin lifecycle hooks**. A notable fraction of active issues carry `sweeper:risk-*` labels (session-state, message-delivery, compatibility, security-boundary), indicating an organized internal triage/risk-classification process — a positive project-health signal. Overall health: active, engaged, but carrying a heavy open-PR backlog and recurring reliability debt around update paths.

## 2. Releases
**v0.21.7 — Hermes Agent v0.21.7** (Oct 11, 2026)
- Patch/rollup release collecting **~204 PRs** since v0.21.6.
- Targets: desktop app (macOS Apple silicon, Windows), Microsoft Store/MSIX, installer, Docker, and Hermes Cloud.
- No explicit breaking changes or migration notes surfaced in the curated notes excerpt; users on staged runtimes should still note [#134469](https://github.com/NousResearch/hermes-agent/issues/134469) — `hermes update` rebuilds the Python 3.14 venv without plugin dependencies, which can silently break provider plugins post-update.

## 3. Project Progress
- **Merged/closed today: 1 PR.** [PR #133485](https://github.com/NousResearch/hermes-agent/pull/133485) — existing named-profile chats now find their own workspace (TUI gateway + desktop fix), closing a session/workspace misattribution bug reported via Discord.
- **Issue closures:** [#68528](https://github.com/NousResearch/hermes-agent/issues/68528) (desktop GUI hardcodes memory provider list — fixed on main) and [#129712](https://github.com/NousResearch/hermes-agent/issues/129712) (updater/blobs workflow bloating `.git` to 39 GiB) were closed; [#131753](https://github.com/NousResearch/hermes-agent/issues/131753) (Windows `doctor` false "no alias") also closed.
- **Active PR fronts:** a coordinated approvals/security hardening series by yoyodine-industries ([#136527](https://github.com/NousResearch/hermes-agent/pull/136527) git global-flag bypass, [#136404](https://github.com/NousResearch/hermes-agent/pull/136404) `--force-with-lease` gating, [#136952](https://github.com/NousResearch/hermes-agent/pull/136952) pattern-key approvals), gateway reliability fixes ([#135550](https://github.com/NousResearch/hermes-agent/pull/135550), [#136343](https://github.com/NousResearch/hermes-agent/pull/136343), [#135553](https://github.com/NousResearch/hermes-agent/pull/135553)), and new Plugin Catalog community tools ([#136369](https://github.com/NousResearch/hermes-agent/pull/136369) index-search, [#136370](https://github.com/NousResearch/hermes-agent/pull/136370) event-read). A connector onboarding UX feature ([#137426](https://github.com/NousResearch/hermes-agent/pull/137426)) advances in-chat app connection flows.

## 4. Community Hot Topics
- [#136567](https://github.com/NousResearch/hermes-agent/issues/136567) (16 comments, 👍3) — Telegram DM forum topics: thread-less opening message gets misrouted by lobby recovery. Reflects heavy reliance on Telegram as a primary agent channel; upstream Telegram API behavior changes are outpacing the adapter.
- [#38519](https://github.com/NousResearch/hermes-agent/issues/38519) (12 comments, **👍21**) — frontend-only desktop install. The highest-endorsed long-running feature request: users want the desktop UI to connect to a remote agent without co-installing. Strong signal for installer modularization.
- [#71239](https://github.com/NousResearch/hermes-agent/issues/71239) (8 comments) — Telegram dispatcher can stall invisibly while appearing connected. Users need observability into gateway liveness, not just connection status.
- [#134469](https://github.com/NousResearch/hermes-agent/issues/134469) (6 comments) — `hermes update` strips plugin dependencies. Directly undermines trust in the self-update path post-v0.21.7.
- [#110374](https://github.com/NousResearch/hermes-agent/issues/110374) (6 comments, 👍9) — Slack status indicator broken with slack-sdk ≥3.44. Silent, debug-logged failures erode perceived polish.
- **PR #99419** (Telegram native album batching) remains open since Aug 31 with sustained attention — a quality-of-life fix users clearly want.

**Underlying need analysis:** the community is building Hermes into long-running, always-on personal infrastructure (VPS/remote deployments, named profiles, multi-channel gateways) and expects production-grade update safety, liveness observability, and channel adapter resilience.

## 5. Bugs & Stability (ranked by severity)
**P1 — High:**
- [#135550 / PR #135550](https://github.com/NousResearch/hermes-agent/pull/135550) — post-unclean-exit `state.db` integrity scan runs synchronously on startup (2.5–25 min on 3.7 GB stores); all platforms dead during scan. **Fix PR open.**
- [#136343 / PR #136343](https://github.com/NousResearch/hermes-agent/pull/136343) — gateway dispatcher can serve a frozen mixed revision after checkout rewrite under a long-lived service. **Fix PR open.**
- [#71239](https://github.com/NousResearch/hermes-agent/issues/71239) — Telegram invisible dispatcher stall (message loss risk). No linked fix.

**P2 — Medium:**
- [#134469](https://github.com/NousResearch/hermes-agent/issues/134469) — update path drops plugin dependencies (silent provider failures). No fix PR yet.
- [#137327](https://github.com/NousResearch/hermes-agent/issues/137327) — macOS desktop update handoff always "Failed to update", no logs. No fix PR.
- [#137428](https://github.com/NousResearch/hermes-agent/issues/137428) — patch tool edits wrong line after escape-drift correction (regression from #137288). No fix PR.
- [#137373](https://github.com/NousResearch/hermes-agent/issues/137373) — `chat -c --create-if-missing` drops `--source`.
- [#135315](https://github.com/NousResearch/hermes-agent/issues/135315) — plugin/skills catalog iframes block their own links (partial prior fix, security-adjacent UX).
- [#135953 / PR #135953](https://github.com/NousResearch/hermes-agent/pull/135953), [#135616 / PR #135616](https://github.com/NousResearch/hermes-agent/pull/135616), [#135553 / PR #135553](https://github.com/NousResearch/hermes-agent/pull/135553) — profile/model caching and gateway status staleness, all with open fix PRs.
- [#134249](https://github.com/NousResearch/hermes-agent/issues/134249) — NixOS: tool closure unsatisfiable, warnings on every start.
- [#136308 / PR #136308](https://github.com/NousResearch/hermes-agent/pull/136308) — posix_spawn handle violates process-registry contract. **Fix PR open.**

**P3 — Lower:**
- [#109771](https://github.com/NousResearch/hermes-agent/issues/109771) — SIGILL crash on older x86_64 Linux CPUs (NumPy/CTranslate2).
- [#133435](https://github.com/NousResearch/hermes-agent/issues/133435) — 18 high npm vulnerabilities pinned in committed lockfile (security hygiene).
- [#83662](https://github.com/NousResearch/hermes-agent/issues/83662) — Slack Socket Mode reconnect leaks a retry loop.
- [#135435](https://github.com/NousResearch/hermes-agent/issues/135435) — background Chrome tabs throttled/discarded in shared headed CDP sessions.
- [#135713](https://github.com/NousResearch/hermes-agent/issues/135713) — computer_use capture sends duplicate element lists (~3,300 wasted tokens/capture).

## 6. Feature Requests & Roadmap Signals
- [#38519](https://github.com/NousResearch/hermes-agent/issues/38519) — frontend-only install (👍21). High demand; likely the strongest candidate for a near-term installer change.
- [#133212](https://github.com/NousResearch/hermes-agent/issues/133212) — subagent_lifecycle v1.1 (steering, host-isolation transport, effort/route/follow-up). Aligns with the plugin-orchestration direction; plausible for a minor release.
- [#137258](https://github.com/NousResearch/hermes-agent/issues/137258) — skills governance: upstream-owned bundled skills vs. user-controlled learning. A policy decision issue with roadmap weight.
- [#31514](https://github.com/NousResearch/hermes-agent/issues/31514) — language auto-correction per user standard (i18n quality).
- [#107960](https://github.com/NousResearch/hermes-agent/issues/107960) — multi-GPU llama.cpp tensor-split support (local-models users).
- **PR-backed near-term candidates:** connector display cards ([#137426](https://github.com/NousResearch/hermes-agent/pull/137426)), Plugin Catalog additions index-search/event-read, cron occurrence-identity export ([#136273](https://github.com/NousResearch/hermes-agent/pull/136273)) — these are closest to landing.

## 7. User Feedback Summary
- **Use cases skew toward always-on personal agents**: VPS/Docker deployments with named profiles, remote backends over SSH, multi-channel gateways (Telegram, Slack, WhatsApp), Bot Mode messaging between profiles, and Curator-managed skill learning.
- **Top pain points:** the self-update experience is the biggest trust deficit (broken plugin deps #134469, macOS handoff failure #137327, git bloat #129712, NixOS warnings #134249). Users dislike **silent failures** — invisible Telegram stalls (#71239), debug-logged Slack status errors (#110374), unreachable memory providers with no indication (#137329).
- **Power users are invested but strained by governance friction**: the Xipong contributor maintains ~51 open PRs tracked in [#116038](https://github.com/NousResearch/hermes-agent/issues/116038) — a maintainer-bandwidth signal. Skills ownership debate (#137258) shows users want autonomy without permission queues.
- **Satisfaction signals:** thumbs-up concentration on quality-of-life items (frontend install, albums, status polish) rather than core capability gaps suggests the agent's core is valued; dissatisfaction centers on operational reliability.

## 8. Backlog Watch
- [#38519](https://github.com/NousResearch/hermes-agent/issues/38519) — open since **June 2026**, 21 👍, needs-decision. Deserves a maintainer verdict on frontend-only packaging.
- [#31514](https://github.com/NousResearch/hermes-agent/issues/31514) — open since May 2026; i18n correctness request, low-cost, high goodwill.
- [#49390](https://github.com/NousResearch/hermes-agent/issues/49390) — open since June 2026; trivial CLI hint fix (`msg=interrupt` vs `busy_input_mode`).
- [#71239](https://github.com/NousResearch/hermes-agent/issues/71239) — P1-adjacent since July 2026 with no fix PR; silent Telegram dispatcher stall warrants prioritization.
- [PR #99419](https://github.com/NousResearch/hermes-agent/pull/99419) — open since **Aug 31**, Telegram album batching; popular, scoped, ready for review.
- [#116038](https://github.com/NousResearch/hermes-agent/issues/116038) — the 51-PR Xipong review map needs structured maintainer triage to avoid contributor burnout.
- [#107960](https://github.com/NousResearch/hermes-agent/issues/107960) — multi-GPU probe/tensor-split, sitting since September; growing local-models audience.
- [#133435](https://github.com/NousResearch/hermes-agent/issues/133435) — npm lockfile vulnerability refresh; security hygiene that requires only an upstream lockfile bump but has been pending since Oct 5.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

---

# PicoClaw Project Digest - 2026-10-13  

## 1. **Today's Overview**  
PicoClaw exhibited moderate activity over the last 24 hours, with 4 issues (3 open, 1 closed) and 7 PRs (1 open, 6 merged/closed). The open issues highlight persistent bugs in QQ bot integration, Telegram MarkdownV2 formatting, and CLA assistant functionality. Simultaneously, 6 merged PRs advanced features like configurable OneBot reactions, OpenAI API updates, and Android certificate fixes. The project maintains steady maintenance momentum but faces unresolved compatibility challenges.  

---

## 2. **Releases**  
No new releases were published in the last 24 hours.  

---

## 3. **Project Progress**  
**Merged PRs (Closed in Last 24h):**  
- **PR #3396** ([3396](https://github.com/sipeed/picoclaw/pull/3396)): Implemented opt-in `reaction_enabled` setting for OneBot channel, addressing auto-reaction control (closed).  
- **PR #1500** ([1500](https://github.com/sipeed/picoclaw/pull/1500)): Added configurable logger time format in `config.json`.  
- **PR #1397** ([1397](https://github.com/sipeed/picoclaw/pull/1397)): Fixed TLS certificate loading for Termux on Android, resolving SSL errors.  
- **PR #1509** ([1509](https://github.com/sipeed/picoclaw/pull/1509)): Stripped unsupported `extra_content` from Gemini tool responses for non-Google providers.  
- **PR #1676** ([1676](https://github.com/sipeed/picoclaw/pull/1676)): Enhanced Feishu channel with thread isolation and reply-in-thread support.  
- **PR #1651** ([1651](https://github.com/sipeed/picoclaw/pull/1651)): Improved Telegram HTML chunking to preserve formatting and word boundaries.  

**Open PRs:**  
- **PR #3381** ([3381](https://github.com/sipeed/picoclaw/pull/3381)): Still-open PR to switch OpenAI provider to the newer "responses API" (no comments yet).  

---

## 4. **Community Hot Topics**  
### Most Active Issues:  
- **Issue #3394** ([3394](https://github.com/sipeed/picoclaw/issues/3394)): **QQ Bot Interface Update Breakage**  
  - Author: qinglt (2026-09-26)  
  - **Underlying Need**: The QQ chat API endpoint for bots is outdated, blocking integration with newer QQ servers.  
- **Issue #3392** ([3392](https://github.com/sipeed/picoclaw/issues/3392)): **CLAassistant Signature Detection Failure**  
  - Author: XenonR (2026-09-25)  
  - **Underlying Need**: Contributions may be blocked due to failed CLA verification, indicating tooling/process gaps.  

### Most Relevant PRs:  
- **PR #3381** ([3381](https://github.com/sipeed/picoclaw/pull/3381)): **OpenAI API v1.1 Migration**  
  - Focuses on adopting OpenAI’s newer "responses API" for enhanced tool usage.  

---

## 5. **Bugs & Stability**  
### Critical:  
- **Issue #3426** ([3426](https://github.com/sipeed/picoclaw/issues/3426)): **Telegram MarkdownV2 Escaping Failure**  
  - **Severity**: High – Unescaped special characters in reply links/blockquotes cause fallback to unformatted text.  
  - **Status**: Unresolved; PR #1651 aims to improve chunking but does not fully address escaping.  

### Moderate:  
- **Issue #3394** ([3394](https://github.com/sipeed/picoclaw/issues/3394)): QQ API interface mismatch. No fix PR attached yet.  
- **Issue #3392** ([3392](https://github.com/sipeed/picoclaw/issues/3392)): CLA assistant fails to detect signatures, causing contribution issues.  

### Resolved:  
- **Issue #3395** ([3395](https://github.com/sipeed/picoclaw/issues/3395)): OneBot auto-reaction made configurable via `reaction_enabled` (closed and fixed via PR #3396).  

---

## 6. **Feature Requests & Roadmap Signals**  
- **Configurable OneBot Reactions**: Now implemented via PR #3396 (closed).  
- **OpenAI API v1.1 Adoption**: PR #3381 (open) indicates intent to modernize provider support, aligning with OpenAI’s roadmap.  
- **Termux/Android Compatibility**: PR #1397 (closed) reflects ongoing focus on mobile/Termux stability.  
- **Telegram MarkdownV2 Improvements**: Likely future iterations of PR #1651 or new escaping fixes may follow.  

---

## 7. **User Feedback Summary**  
- **Key Pain Points**:  
  - QQ channel maintainers require updates to align with evolving QQ bot protocols.  
  - Telegram users experience unintended fallback to plain text due to unescaped MarkdownV2 syntax.  
  - CLA assistant tooling may block valid contributions if signature enforcement fails.  
- **Satisfaction Drivers**:  
  - Recent improvements in Android/TLS support and Feishu thread handling address critical gaps.  

---

## 8. **Backlog Watch**  
- **Issue #3394** ([3394](https://github.com/sipeed/picoclaw/issues/3394)): Still open QQ channel API compatibility issue.  
- **PR #3381** ([3381](https://github.com/sipeed/picoclaw/pull/3381)): Promising OpenAI API switch PR requires merging/testing.  
- **Issue #3392** ([3392](https://github.com/sipeed/picoclaw/issues/3392)): CLA assistant signature detection flaw remains unresolved.  

--- 

**Note**: Data extracted from GitHub activity as of 2026-10-13 00:00 UTC. Project health indicators include active PRs and unresolved compatibility issues.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-10-13

## 1. Today's Overview
NanoClaw showed moderate but healthy development activity over the past 24 hours: 5 PRs were updated (3 open, 2 merged/closed), while issue traffic was flat at zero. All PR activity originated from a single day (2026-10-12), suggesting an active contributor cohort pushing fixes rather than a broad community discussion day. The work is concentrated on integration robustness (OneCLI, Feishu, Teams) and workflow correctness (approvals, skill testing). No new releases were published, so changes are landing on the mainline ahead of an unnamed next version. Overall project health appears stable: bug fixes dominate, no regressions were reported, and contribution guidelines (`follows-guidelines` labels) are being followed.

## 2. Releases
No new releases in the last 24 hours. No migration notes to report. (Note: PR #4082 references a gateway pin bump to 1.45.0, which may precede a tagged release.)

## 3. Project Progress
Two PRs were merged/closed today:

- **[#4079 — fix(feishu)](https://github.com/qwibitai/nanoclaw/pull/4079)** (merged): Fixed progress cards in Feishu being erroneously recalled after tool execution (`cleanupProgressCard` now uses `allSteps` instead of `steps` to detect visible process), plus `VOICE_SUMMARY_MODEL` now read from `.env` at call time. Includes a regression test with defect-injection validation. Notable breadth: touches agent-runner, channels, configuration, containers, core, and skills areas.
- **[#4080 — fix(approvals)](https://github.com/qwibitai/nanoclaw/pull/4080)** (closed): Approval cards now join the requester's thread in their own chat, fixing a case where approvers waiting inside a thread (e.g., `ncl destinations-add` held for admin approval) saw nothing because the card was posted at the DM top level.

Ongoing open work: [#4082](https://github.com/qwibitai/nanoclaw/pull/4082) (OneCLI agent grants + gateway pin 1.45.0), [#4081](https://github.com/qwibitai/nanoclaw/pull/4081) (test env isolation), and long-running [#3674](https://github.com/qwibitai/nanoclaw/pull/3674) (MIME type on outbound files for Teams).

## 4. Community Hot Topics
With zero issues and no comment/reaction data (👍: 0 across all items), today's "hot" items are best identified by activity recency and scope:

- **[#3674 — fix(delivery): carry a MIME type on outbound files so Teams accepts them](https://github.com/qwibitai/nanoclaw/pull/3674)** — created 2026-08-30, updated 2026-10-12. A ~6-week-old PR that just received activity, spanning channels/core/sessions. Its longevity suggests either reviewer bandwidth constraints or a tricky cross-cutting change; it is the clear candidate for maintainer attention (see Backlog Watch).
- **[#4082 — OneCLI gateway pin + agent grants](https://github.com/qwibitai/nanoclaw/pull/4082)** — directly addresses a breaking upstream change (OneCLI 1.43+ returns `410 Gone` on legacy secret APIs), making it high-urgency for any OneCLI-based installation.

Underlying need: users depend on NanoClaw's integrations staying compatible with fast-moving external platforms (OneCLI, Feishu, Teams), and the community's energy is going into keeping those seams working.

## 5. Bugs & Stability
Ranked by severity:

| Severity | Bug | Status |
|---|---|---|
| High | OneCLI 1.43+ returns `410 Gone` on `agents set-secrets` / `agents secrets` / `agents set-secret-mode`, breaking skill secret management | Fix open: [#4082](https://github.com/qwibitai/nanoclaw/pull/4082) |
| High | Feishu progress cards falsely recalled after tool runs ("大狗撤回了一条消息"), hiding agent activity from group users | **Fixed & merged**: [#4079](https://github.com/qwibitai/nanoclaw/pull/4079) |
| Medium | Approval cards posted at DM top-level instead of the requester's thread — approvers waiting in-thread saw nothing (approval workflow stall risk) | **Fixed & closed**: [#4080](https://github.com/qwibitai/nanoclaw/pull/4080) |
| Low | `resolveRegistryRemote` inherits caller's `NANOCLAW_REGISTRY_REMOTE`/`NANOCLAW_CHANNELS_REMOTE` overrides, breaking `update-skills.test.ts` in certain environments | Fix open: [#4081](https://github.com/qwibitai/nanoclaw/pull/4081) |
| Low | Teams rejects outbound files lacking a MIME type | Fix open: [#3674](https://github.com/qwibitai/nanoclaw/pull/3674) |

No new crashes or regressions were reported today. Positive signal: #4079 shipped with a regression test and defect-injection verification — good QA hygiene.

## 6. Feature Requests & Roadmap Signals
No explicit user feature requests today; all activity is fixes. Implicit roadmap signals:

- **Gateway 1.45.0 alignment** ([#4082](https://github.com/qwibitai/nanoclaw/pull/4082)): moving off the 1.42.0 "stopgap" pin suggests a version compatibility matrix / supported-platform policy may be formalized next.
- **Cross-channel delivery parity** ([#3674](https://github.com/qwibitai/nanoclaw/pull/3674), [#4079](https://github.com/qwibitai/nanoclaw/pull/4079)): MIME handling and card lifecycle are channel-specific; a unified outbound-delivery abstraction could be on the horizon.
- **Configuration flexibility** ([#4079](https://github.com/qwibitai/nanoclaw/pull/4079)): runtime `.env` re-reading for model selection hints at demand for hot-reloadable configuration.

Prediction: the next release likely bundles the OneCLI 1.45.0 gateway pin, Teams MIME fix, and Feishu/approval fixes as a stability patch.

## 7. User Feedback Summary
Direct user feedback is absent today (0 issues, no reactions), so pain points must be inferred from the bugs being fixed:

- **Feishu group users** were annoyed by agents silently deleting their own progress cards ("大狗撤回了一条消息" recurring in group 4) — a visible UX glitch that eroded trust in agent transparency. Fixed.
- **Admins/approvers** missed approval requests because cards appeared outside the thread they were watching — a workflow-blocking friction point. Fixed.
- **OneCLI-based operators** face broken secret management on newer OneCLI versions, forcing a 1.42.0 stopgap. Fix in review.
- **Teams users** can't receive outbound files reliably. Fix pending.

The pattern: users are running NanoClaw in real multi-user, multi-channel deployments (Chinese-language Feishu groups, Teams orgs), and the project is responsive to production friction — a positive satisfaction indicator despite the rough edges.

## 8. Backlog Watch
- **[PR #3674](https://github.com/qwibitai/nanoclaw/pull/3674)** — open since **2026-08-30** (~6 weeks), last updated today. It touches channels, core, and sessions — broad blast radius likely explains slow review. Needs maintainer triage: either prioritize review or scope it down to unblock.
- **[PR #4082](https://github.com/qwibitai/nanoclaw/pull/4082)** — only 1 day old but addresses an upstream breaking change (`410 Gone`); should not linger given affected users are pinned to a stopgap version.
- No long-unanswered issues exist (issue count: 0), so the PR review pipeline — not issue triage — is the current maintainer bottleneck.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-10-13

## 1. Today's Overview
IronClaw shows very low activity in the last 24 hours: 1 issue updated, 0 pull requests updated, and 0 new releases. The only active item is open issue **#8135**, “Daily ironclaw failure taxonomy — 2026-10-12,” created and updated on 2026-10-12 with no comments or reactions. No code integration, review, or release work is visible in the provided data. Overall, this is a quiet maintenance window with continued benchmark-monitoring activity but no maintainer or community engagement yet.

## 2. Releases
No new releases were published in the reporting window.

## 3. Project Progress
- **Merged/closed PRs today:** 0
- **Open PRs updated today:** 0
- **Features advanced or fixed:** None visible in the provided data.

There is no PR activity to indicate progress on features, fixes, or refactors.

## 4. Community Hot Topics
Only one item was updated in the last 24 hours, and it has no comments or reactions, so it is not yet a “hot” discussion.

- **Issue #8135 — Daily ironclaw failure taxonomy — 2026-10-12**  
  Author: pranavraja99 | Status: OPEN | Comments: 0 | 👍: 0  
  Link: https://github.com/nearai/ironclaw/issues/8135  
  Summary: The issue analyzes benchmark suites and reports that the `officeqa` run had 52 non-pass tasks, described in the excerpt as “genuine model-quality errors” involving `DeepSeek-V4-Flas...` [truncated].  
  Benchmark link: https://nearai.github.io/benchmarks/#/runs/ironclaw/officeqa/c0bf84d6-1954-42ef-8378-20f32b394f1e

**Underlying need:** The issue points to a need for automated failure classification and benchmark observability — specifically, distinguishing model-quality failures from infrastructure or agent-behavior failures.

## 5. Bugs & Stability
No crashes, regressions, or platform bugs were explicitly reported in the provided data. The only stability-related signal is the benchmark failure taxonomy in **#8135**.

| Severity | Item | Status | Fix PR? |
|---|---|---|---|
| Informational / quality signal | Issue #8135 — 52 non-pass tasks in `officeqa`, described as genuine model-quality errors | OPEN | No |

Because the excerpt attributes the failures to model quality rather than IronClaw runtime defects, this is best treated as a benchmark-quality signal, not a confirmed platform bug. No fix PR exists.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests were submitted today. The main implicit roadmap signal comes from **#8135**:

- Automated daily failure taxonomy for IronClaw benchmark runs.
- Better attribution of non-pass tasks to model quality, infrastructure, or agent behavior.
- Possible integration with benchmark dashboards and historical failure tracking.

If these daily taxonomy issues continue, maintainers may consider investing in failure-classification tooling or benchmark reliability workflows. No version-specific prediction can be made from this single data point.

## 7. User Feedback Summary
The only user-generated content today is issue **#8135**. The reported pain point is the need to systematically track and explain IronClaw benchmark failures, particularly the 52 non-pass `officeqa` tasks. The author frames these as model-quality errors, suggesting demand for clearer failure attribution and benchmark transparency. There is no sentiment data, comments, or reactions, so satisfaction/dissatisfaction cannot be assessed from this snapshot.

## 8. Backlog Watch
There are no long-unanswered issues or PRs in the provided data. Issue **#8135** is new/updated as of 2026-10-12 and has 0 comments, so it may need maintainer triage if it remains unanswered, but it does not yet qualify as a backlog item.

- Issue #8135: https://github.com/nearai/ironclaw/issues/8135

**Data caveat:** The issue summary is truncated after “DeepSeek-V4-Flas...”, and the dataset contains only 1 issue, 0 PRs, and 0 releases for the reporting window.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



# LobsterAI Project Digest — 2026-10-13

## 1. Today's Overview
LobsterAI development activity remains highly active, characterized by a strong focus on bug mitigation, platform compatibility expansion, and UI/UX refinement. Today saw 7 pull requests updated (6 merged/closed, 1 open), highlighting a

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>



# Moltis Project Digest — 2026-10-13

An objective, data-driven summary of the recent activity, technical developments, security considerations, and roadmap indicators for the **Moltis** project (`github.com/moltis-org/moltis`) over the last 24 hours.

---

### 1. Today's Overview
Over the last 24 hours, Moltis recorded moderate, highly focused development activity with no new releases and no merged pull requests. The project currently balances the introduction of powerful multi-agent orchestration improvements against a critical security and access-policy bypass vulnerability. Two architectural pull requests regarding sub-agent parity and target allowlisting are open for review, while a single, high-severity issue highlights a context-leak vulnerability that requires immediate maintainer triage. Overall, the project is actively refining its multi-agent guardrails but is currently exposed to a notable security loophole.

---

### 2. Releases
*   **No new releases** were published in the last 24 hours.

---

### 3. Project Progress
No pull requests were merged or closed during this reporting period. However, two major feature PRs were opened/updated, laying the groundwork for safer and more consistent agent orchestration:
*   **Chat ↔ Sub-agent Parity (PR #1301):** Aims to resolve inconsistencies where configuration fields (like persona, `system_prompt_suffix`, and preset models) only affected `spawn_agent` sub-runs but not direct chat paths. [View PR #1301](https://github.com/moltis-org/moltis/pull/1301)
*   **Preset Spawn Allowlist (PR #1302):** Introduces an optional `agents.presets.<id>.spawn.allow` configuration, enforcing strict allowlists for sub-agent spawning targets directly in `resolve_preset`. [View PR #1302](https://github.com/moltis-org/moltis/pull/1302)

---

### 4. Community Hot Topics
Developer focus is split between security boundary enforcement and architectural consistency:
*   **The Channel-Bound Access Policy Bypass (Issue #1303):** Although currently displaying zero comments or reactions, this issue outlines a severe design loophole where non-gateway turns bypass user access policies and leak replies silently into channel chats. [View Issue #1303](https://github.com/moltis-org/moltis/issues/1303)
*   **The Coordinator-Worker Parity Demand (PR #1301):** Developers are pushing for unified behavior across direct chat and sub-agent spawning, highlighting an underlying need for predictable, consistent agent behaviors regardless of invocation pathways. [View PR #1301](https://github.com/moltis-org/moltis/pull/1301)

---

### 5. Bugs & Stability
*   **[HIGH SEVERITY] Issue #1303: Web turns bypassing chat access policies on channel-bound sessions.**
    *   *The Bug:* When a non-gateway turn (web UI, cron, webhook, or `sessions_send`) executes on a channel-bound session, Moltis downgrades the execution context and delivers the reply directly to the channel chat. This bypasses the account’s chat access policy and lacks any visual warning in the web UI.
    *   *Status:* Open. No active fix PR is currently linked, making this the most critical stability and security threat identified today.

---

### 6. Feature Requests & Roadmap Signals
*   **Security Guardrails for Web UI & Spawning:** PR #1302 signals a roadmap shift toward stricter multi-tenant isolation, allowing callers to restrict where `spawn_agent` can run. This is likely to merge into the next minor release as a critical security enhancement.
*   **Configuration Unification:** PR #1301 indicates that the upcoming version will likely unify direct-chat and sub-agent configurations, removing the maintenance burden of configuring agent personas and prompts twice.
*   **UI Warning Prompts:** The security audit highlighted in Issue #1303 suggests the roadmap will need to accommodate explicit UI warning systems in the web interface before non-gateway turns execute on channel-bound sessions.

---

### 7. User Feedback Summary
*   **Pain Point (Privacy/Security Leaks):** Users face a high risk of accidental data exposure where private context runs (like web UI turns) are silently broadcast to active chat channels, violating organizational access policies.
*   **Pain Point (Configuration Drift):** Developers report friction when managing coordinator-worker setups because direct agent interactions do not respect the same persona and system constraints as sub-agent spawns.
*   **Sentiment:** While the project's orchestration capabilities are highly powerful, user satisfaction is currently tempered by the lack of built-in safety nets and UI guardrails against accidental channel leakage.

---

### 8. Backlog Watch
*   **Issue #1303 (Security Bypass):** Although freshly created, this issue represents a severe vulnerability and must be prioritized by maintainers for immediate triage and patch development.
*   **PR #1301 & PR #1302 (Dependency Alignment):** Both PRs are in open states and depend on clean integration paths. Maintainers should review these contributions to ensure they do not introduce regressions in the core `resolve_preset` and prompt-building pipelines.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) — Project Digest, 2026-10-13

*Source: github.com/agentscope-ai/CoPaw · Window: last 24h*

---

## 1. Today's Overview

CoPaw is in a **high-velocity, pre-release stabilization phase**: 15 issues and 22 PRs were touched in the last 24h, with no new release cut. The issue mix is dominated by defects against beta builds (v2.1.1b2, 2.2.2.beta4, 2.2.1), and 12 of 15 issues remain open — a healthy but backlog-building inflow. The PR pipeline is unusually active for a single day, with 16 open PRs spanning console UX, provider plumbing, approval state, context management, and a XXXL plugin-architecture refactor. Notably, maintainers/contributors closed the loop on two significant bugs within the window (approval-button failure and a beta conversation-page regression), indicating responsive triage. Overall health: **strong contributor engagement, elevated regression pressure on Desktop/Windows paths**.

---

## 2. Releases

**No new releases in the reporting window** (0 releases; no release notes to summarize). The absence is notable given the volume of beta-version bug reports (#7311 v2.1.1b2, #8073/#8105 2.2.2b4, #8173 2.2.1) — a patch/beta cut would likely relieve several open threads.

---

## 3. Project Progress

**Closed/merged today: 6 PRs total** (4 visible in the top-20 sample):

| PR | Title | Impact |
|---|---|---|
| [#8188](https://github.com/agentscope-ai/CoPaw/pull/8188) | `fix(approval): preserve decisions and handle timeout races` | **Fixes #8105** — resolves a race where an approval completed before the tool began waiting was discarded, causing approval to be treated as rejection. |
| [#4707](https://github.com/agentscope-ai/CoPaw/pull/4707) | `fix(tools): handle ToolResponse text blocks robustly` | Long-lived PR (since 2026-05-26) finally closed — fixes crashes when content blocks are accessed as attributes instead of dicts in `_analyze_screen_activity` and `edit_file`. |
| [#5732](https://github.com/agentscope-ai/CoPaw/pull/5732) | `feat: add 'none' memory backend to disable memory system` | Users can now fully disable ReMeLight from the Console without manual config edits. |
| [#5661](https://github.com/agentscope-ai/CoPaw/pull/5661) | `feat: filter plugin market and CDN catalog by QwenPaw version compatibility` | Server-side filtering of official plugins by `min_version`/`max_version` — reduces incompatible plugin installs. |

**Features advancing (open, updated today):**
- [#8182](https://github.com/agentscope-ai/CoPaw/pull/8182) — persist per-chat tool-approval level server-side (currently browser-localStorage only).
- [#8156](https://github.com/agentscope-ai/CoPaw/pull/8156) — coding-CLI management endpoints for worker containers.
- [#7565](https://github.com/agentscope-ai/CoPaw/pull/7565) — clean plugin unload + rollback-safe hot reload (XXXL).
- [#8187](https://github.com/agentscope-ai/CoPaw/pull/8187) — extract channels into plugins with subprocess isolation (XXXL).
- [#8200](https://github.com/agentscope-ai/CoPaw/pull/8200) — Firecrawl as a third `web_search` provider (first-time contributor).

---

## 4. Community Hot Topics

Ranked by comment volume:

1. **[#7311](https://github.com/agentscope-ai/CoPaw/issues/7311) — [CLOSED] `ModuleNotFoundError: _qwenpaw_remote_backend`, all tools broken** · 5 comments
   Windows 10 / Desktop v2.1.1b2; module missing from `_internal`, survives reinstall. Highest-engagement thread; now closed.
   *Underlying need:* packaging/release-verification for the Windows Desktop bundle.

2. **[#8174](https://github.com/agentscope-ai/CoPaw/issues/8174) — tavily `web_search` has no API-key config surface** · 4 comments
   Built-in Tavily provider is hardcoded to keyless anonymous mode (`X-Tavily-Access-Mode: keyless`); paid subscribers cannot use their own quota.
   *Underlying need:* first-class, per-provider credential management in the Console.

3. **[#7016](https://github.com/agentscope-ai/CoPaw/issues/7016) — tool-call offload returns 404 in streaming sessions** · 4 comments · **open since 2026-08-14**
   Page repeatedly POSTs `/{session_id}/{tool_call_id}/offload` → `404 {"detail":"Tool call not found"}`.
   *Underlying need:* session/tool-call lifecycle consistency under streaming.

4. **[#8073](https://github.com/agentscope-ai/CoPaw/issues/8073) — [CLOSED] v2.2.2.beta4 conversation page unreachable** · 3 comments
   Regression from V2.2.1 → V2.2.2.beta4, reproducible **only when other LAN devices access the local service**.
   *Underlying need:* reverse-proxy / non-localhost origin handling in the Console.

5. **[#8194](https://github.com/agentscope-ai/CoPaw/issues/8194) — creator startup hook aborts on stale PID** · 2 comments
   `os.kill(pid, 0)` raises `SystemError` (not caught by `except OSError`) on Windows; Desktop fails to start.

**Observation:** the community is heavily self-diagnosing with precise root causes (e.g., #8185 log rotation, #8175 silent `except Exception: pass`). This signals an experienced, technically deep user base — and a maintenance burden of silent-failure patterns in the codebase.

---

## 5. Bugs & Stability

Ranked by severity (all reported/updated in-window):

| Severity | Issue | Symptom | Fix PR? |
|---|---|---|---|
| 🔴 Critical | [#7311](https://github.com/agentscope-ai/CoPaw/issues/7311) | **All tools broken** on Desktop v2.1.1b2 — missing `_qwenpaw_remote_backend` module; reinstall does not help | Closed (no PR linked) |
| 🔴 Critical | [#8105](https://github.com/agentscope-ai/CoPaw/issues/8105) | Tool approval buttons non-functional — **both Approve and Reject execute Reject**; envelope icon unclickable; approval bypassed via timeout | ✅ [#8188](https://github.com/agentscope-ai/CoPaw/pull/8188) (race on decision before tool waits) |
| 🟠 High | [#8073](https://github.com/agentscope-ai/CoPaw/issues/8073) | v2.2.2.beta4 conversation page fails to open **when accessed from another LAN device** | Closed |
| 🟠 High | [#8173](https://github.com/agentscope-ai/CoPaw/issues/8173) | Codex backend: connection silently breaks after restart; inbound messages queue but no turn starts; **permanent zombie `running` entry blocks all recovery** (only chat/stop works) | None yet |
| 🟠 High | [#8175](https://github.com/agentscope-ai/CoPaw/issues/8175) | `ProviderManager.active_model` not loaded at startup + silent `except Exception: pass` → **service cron (dream) fails every night**; Docker, multi-agent (6 workspaces) | None yet |
| 🟡 Medium | [#8184](https://github.com/agentscope-ai/CoPaw/issues/8184) | Doom-loop gate kills **legitimate task-authorized polling**; cron records **false success** after termination | ✅ [#8192](https://github.com/agentscope-ai/CoPaw/pull/8192) — spaced calls treated as polling |
| 🟡 Medium | [#8194](https://github.com/agentscope-ai/CoPaw/issues/8194) | Creator startup hook aborts on stale PID (Windows `SystemError`) | ✅ [#8196](https://github.com/agentscope-ai/CoPaw/pull/8196) |
| 🟡 Medium | [#7016](https://github.com/agentscope-ai/CoPaw/issues/7016) | Streaming session loops on `offload` endpoint returning 404 | None yet — open 2 months |
| 🟢 Low | [#8185](https://github.com/agentscope-ai/CoPaw/issues/8185) | `desktop.log` never rotates on Windows — sidecar tee handle defeats `_SafeRotatingFileHandler`; unbounded log growth | None yet |
| 🟢 Low | [#8186](https://github.com/agentscope-ai/CoPaw/issues/8186) | Console anchor-scroll override: transcript snaps back for ~1.6s, defeating manual wheel scrolling | ✅ [#8201](https://github.com/agentscope-ai/CoPaw/pull/8201) |

**Pattern:** 3 of the top defects are Windows/Desktop-specific, and 3 involve *silent* failure modes (swallowed exceptions, zombie state, false cron success) that degrade trust more than they crash. Fix PRs exist for 5 of 10.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Related PR | Likelihood in next release |
|---|---|---|---|
| Firecrawl as third `web_search` provider (author offers to build & maintain) | [#8199](https://github.com/agentscope-ai/CoPaw/issues/8199) | ✅ [#8200](https://github.com/agentscope-ai/CoPaw/pull/8200) | **High** — implementation already open, low-risk additive |
| Configurable Tavily API key (paid quota unusable) | [#8174](https://github.com/agentscope-ai/CoPaw/issues/8174) | None | **Medium-High** — natural pair with provider-credential work |
| Official "reduced effects" console tier for GPU/iGPU load | [#8135](https://github.com/agentscope-ai/CoPaw/issues/8135) | ✅ [#8137](https://github.com/agentscope-ai/CoPaw/pull/8137) | **Medium-High** — PR under review, `Fixes #8135` |
| Delete/remove action in model pool (only enable/disable today) | [#8195](https://github.com/agentscope-ai/CoPaw/issues/8195) | None | Medium |
| ESP32 hardware integration, Meta-Muse style | [#8189](https://github.com/agentscope-ai/CoPaw/issues/8189) | None | Low (long-horizon / ecosystem play) |
| Atlas Cloud as built-in provider | — | ✅ [#6499](https://github.com/agentscope-ai/CoPaw/pull/6499) | Medium (open since 2026-07-27) |

**Roadmap read:** the near-term theme is **provider/tool extensibility** (Firecrawl, Tavily keys, Atlas Cloud) plus **console performance and configurability** (reduced effects, basename for reverse proxies). The longer arc is architectural: plugin-based channels ([#8187](https://github.com/agentscope-ai/CoPaw/pull/8187)) and hot-reload ([#7565](https://github.com/agentscope-ai/CoPaw/pull/7565)).

---

## 7. User Feedback Summary

**Pain points (dissatisfaction):**
- **Beta churn is costing users real time.** Multiple reporters describe reinstall-attempts (#7311), version-rollback regressions (#8073), and broken core flows (approval in #8105) on 2.2.2b4 / v2.1.1b2. Beta builds appear to be reaching production users.
- **Configuration gaps block paid usage.** #8174 is explicit: a paying Tavily subscriber *cannot spend their own quota*. Similarly #8195: deprecated models can't be purged, only disabled.
- **Silent failures erode trust.** #8175 (nightly cron failing unnoticed), #8184 (cron recording *false success*), #8173 (zombie `running` blocking recovery), #8185 (unbounded log growth). Users are doing maintainer-grade root-cause analysis to surface what the software doesn't report.
- **Performance sensitivity on modest hardware.** #8135 reports sustained GPU load just from an idle open console, worse during streaming — a real constraint for laptop/iGPU and always-on deployments.

**Use cases observed:** multi-agent Docker deployments with 6 workspaces and scheduled "dream" cron jobs (#8175); LAN-shared Desktop instances (#8073); reverse-proxied deployments under a path prefix (#8197); worker containers running third-party coding CLIs (#8156); hardware/IoT ambitions (#8189).

**Satisfaction signals:** contributors are investing in large structural improvements (#7565, #8187, #8182) and first-time contributors are showing up (#8200, #6499) — a positive indicator of ecosystem pull. Triage responsiveness is good: 3 issues closed and 5 fix PRs opened within the window.

---

## 8. Backlog Watch

Items needing maintainer attention:

1. **[#7016](https://github.com/agentscope-ai/CoPaw/issues/7016) — tool-call `offload` 404 loop** · open **60 days** (since 2026-08-14), 4 comments, no linked PR. Streaming-session breakage; longest-open active bug in this set.
2. **[PR #6499](https://github.com/agentscope-ai/CoPaw/pull/6499) — Atlas Cloud provider** · open **78 days** (since 2026-07-27), first-time contributor, small/simple scope, no provider-specific transport logic. Stalled contributor PRs deter repeat contribution.
3. **[PR #7565](https://github.com/agentscope-ai/CoPaw/pull/7565) — plugin clean unload + rollback-safe hot reload** · open **39 days**, size/XXXL. High-value but high-risk; needs a review plan or explicit deferral to avoid bit-rot.
4. **[#8135](https://github.com/agentscope-ai/CoPaw/issues/8135) / [PR #8137](https://github.com/agentscope-ai/CoPaw/pull/8137) — reduced-effects tier** · open 5 days, marked *Under Review*. Maintainer review would unblock a user-visible perf win.
5. **[#8173](https://github.com/agentscope-ai/CoPaw/issues/8173) — Codex backend zombie `running` entry** · no fix PR; recovery requires manual `chat/stop`. Highest-severity open bug without an assigned remedy.
6. **[#8175](https://github.com/agentscope-ai/CoPaw/issues/8175) — nightly cron failure via silent exception swallow** · no fix PR; the `except Exception: pass` pattern likely recurs elsewhere and warrants a broader lint/audit pass.
7. **[PR #8187](https://github.com/agentscope-ai/CoPaw/pull/8187) — channels as plugins with subprocess isolation** · size/XXXL, description still contains unfilled template placeholders — likely needs design discussion before review.

---

**Health verdict:** CoPaw shows strong contributor momentum and fast triage, but is absorbing a beta-quality regression load on Desktop/Windows and accumulating *silent* failure modes. The highest-leverage near-term actions are a stabilizing release cut and a systematic audit of swallowed exceptions and zombie/stale-state handling.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-10-13

*(Data window: items updated 2026-10-12. Source: github.com/zeroclaw-labs/zeroclaw)*

---

## 1. Today's Overview

ZeroClaw is in a high-throughput, high-backlog state: 21 issues and 50 PRs were touched in the last 24 hours, but **zero issues closed** and only **2 PRs merged/closed**, producing a net accumulation of open work (48 open PRs, 21 open issues). No releases shipped, and the most recent release data is empty, so the project is mid-cycle on implementation rather than at a shipping boundary. Activity is concentrated in three areas: **security/identity (pairing tokens, filesystem channel path hardening)**, **memory/session correctness (SQLite `created_at` clobbering, Core-memory conflict resolution)**, and **architecture governance (RFC trackers, exception-placement docs)**. The comment-weighted discussion is dominated by long-running RFCs and trackers rather than by today's new work, indicating a design-heavy phase. Overall health reads as *active but congested*: strong contributor energy, weak merge throughput, and a maintainer-decision queue (#8692) explicitly flagged as the bottleneck.

---

## 2. Releases

**None.** No new releases were published, and the release list is empty. There are no version changes, breaking changes, or migration notes to report for 2026-10-13.

*Signal worth watching:* PR #11302 is tagged `release:v0.8.6`, suggesting the next release target is being staged but is not yet cut. Several PRs carry `release-gate` labels (#11301, #11302), meaning they are gating the next version.

---

## 3. Project Progress

Merged/closed today: **2 of 50 updated PRs** — low relative to activity.

**Confirmed closed:**
- [#11682](https://github.com/zeroclaw-labs/zeroclaw/pull/11682) — `fix(deps): bump quinn-proto to 0.11.19 to clear five RustSec advisories` (CLOSED, size:XS). Clears RUSTSEC-2026-0338 through -0342 against `quinn-proto` 0.11.15 in `Cargo.lock`, including two remote-triggerable panics and a stream-reassembly memory-guard bypass.

> Note: the data shows 2 merged/closed PRs but only #11682 is identified in the visible top-20 slice; the second is not resolvable from the provided data.

**Advanced (open, not yet merged):**
- **Security pairing foundation:** [#11286](https://github.com/zeroclaw-labs/zeroclaw/pull/11286) (`feat(security): bind gateway pairing tokens to roster users`, XL) is the implementation for issue #10573. Supporting exception docs landed as PRs [#11685](https://github.com/zeroclaw-labs/zeroclaw/pull/11685) / [#11684](https://github.com/zeroclaw-labs/zeroclaw/pull/11684).
- **Filesystem channel hardening:** a stacked series (#11394 Windows → [#11406](https://github.com/zeroclaw-labs/zeroclaw/pull/11406) macOS → [#11405](https://github.com/zeroclaw-labs/zeroclaw/pull/11405) Linux → [#11413](https://github.com/zeroclaw-labs/zeroclaw/pull/11413)) to refuse broad/relative roots. Blocked and `do-not-merge` pending stack completion.
- **Plugin/TLS and Wasm hardening:** [#11402](https://github.com/zeroclaw-labs/zeroclaw/pull/11402) (discard plugin instance after failed call), [#11228](https://github.com/zeroclaw-labs/zeroclaw/pull/11228) (harden named TLS profile materialization).
- **Tooling:** [#11473](https://github.com/zeroclaw-labs/zeroclaw/pull/11473) (defer built-in schemas via `tool_search`), [#11680](https://github.com/zeroclaw-labs/zeroclaw/pull/11680) (Firecrawl web search provider, XL).

**Observation:** a large share of today's PR traffic is *small test/doc/exception* work (e.g. [#11687](https://github.com/zeroclaw-labs/zeroclaw/pull/11687), [#11683](https://github.com/zeroclaw-labs/zeroclaw/pull/11683), [#11681](https://github.com/zeroclaw-labs/zeroclaw/pull/11681), [#11686](https://github.com/zeroclaw-labs/zeroclaw/pull/11686)), while the XL feature PRs remain unmerged.

---

## 4. Community Hot Topics

Ranked by comment count in the window:

| Item | Comments | Nature |
|---|---|---|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) Maintainer decision queue for RFCs | 15 | Tracker / governance |
| [#11254](https://github.com/zeroclaw-labs/zeroclaw/issues/11254) RFC: A2A protocol crate (`zeroclaw-a2a`) | 9 | RFC, risk:high |
| [#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) SQLite session backend rewrites `created_at` every turn | 7 | Bug, priority:p1 |
| [#11235](https://github.com/zeroclaw-labs/zeroclaw/issues/11235) RFC: Knowledge corpus / RAG for the agent | 6 | RFC, risk:high |
| [#11074](https://github.com/zeroclaw-labs/zeroclaw/issues/11074) `search_routes` hint-based provider routing | 5 | Feature, accepted |
| [#10573](https://github.com/zeroclaw-labs/zeroclaw/issues/10573) Bind pairing tokens to roster users | 4 | Feature, accepted |
| [#10025](https://github.com/zeroclaw-labs/zeroclaw/issues/10025) RFC: `zeroclaw swarm` ephemeral agent swarms + TUI | 4 | RFC, needs-author-action |
| [#11655](https://github.com/zeroclaw-labs/zeroclaw/issues/11655) Core conflict supersede hides unrelated memories | 3 | Bug, S2 |

**Underlying needs analysis:**
- **Decision throughput, not ideation, is the constraint.** The top-commented item is a *decision queue tracker*, and the top RFCs (#11254, #11235, #10025) are all `risk:high` architecture changes awaiting maintainer/code-owner resolution. Contributors are producing designs faster than they are being adjudicated.
- **Multi-agent interoperability is the dominant architectural theme.** #11254 (A2A crate), #11074 (search routing), #9597 (durable peer-agent turns), #10290 (live config for detached peer/subagent turns), and #10025 (swarms) all circle the same problem: agent-to-agent communication is currently ad-hoc and non-durable.
- **Operator control surfaces matter to users.** #11074, #11662, #11668, and #11679 are all requests to make routing, channel composition, body limits, and auth explicit and configurable — a push away from hard-coded defaults.

---

## 5. Bugs & Stability

Ranked by stated severity:

**S1 — Workflow blocked**
- [#11648](https://github.com/zeroclaw-labs/zeroclaw/issues/11648) — Web dashboard pairing input still limited to 6 digits after `PairingCodePolicy` default became 32 alphanumeric. Backend issues a 32-char code; the UI cannot accept it. **No fix PR identified.**

**S2 — Degraded behavior**
- [#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) — `priority:p1`, `risk:medium`. SQLite session backend replaces the whole transcript each turn, stamping **every** row with the same `created_at`, destroying per-message timestamps (`GET /api/...` affected). This is a data-fidelity regression with downstream implications for audit and ordering. **No fix PR identified.**
- [#11655](https://github.com/zeroclaw-labs/zeroclaw/issues/11655) — With the default `embedding_provider = "none"`, `conflict::check_and_resolve_conflicts` marks every recalled Core memory as superseded, soft-hiding unrelated memories during `consolidate_turn`. Silent data loss for default-configured users. **No fix PR identified.**

**S3 — Minor**
- [#11658](https://github.com/zeroclaw-labs/zeroclaw/issues/11658) — Web chat input does not regain focus after a reply finishes.
- [#11675](https://github.com/zeroclaw-labs/zeroclaw/issues/11675) — ACP session store re-stamps `created_at` on every `acp_messages` and `acp_tool_calls` row when a trimmed transcript is replaced. Same *class* of bug as #11420; author notes stored values are already wrong and a draft PR would surface them. **No fix PR linked yet.**

**Notable pattern:** #11420 and #11675 are the same defect shape (replace-whole-transcript → timestamp clobbering) in two different backends (session store, ACP store). This suggests a systemic persistence-layer issue rather than two isolated bugs — worth a single coordinated fix.

**Dependency security (resolved):** five RustSec advisories against `quinn-proto` 0.11.15 were addressed by two competing PRs — [#11682](https://github.com/zeroclaw-labs/zeroclaw/pull/11682) (closed) and [#11678](https://github.com/zeroclaw-labs/zeroclaw/pull/11678) (open). Duplicate-effort signal.

---

## 6. Feature Requests & Roadmap Signals

**Likely near-term (accepted, with implementation in flight):**
- **Roster-bound pairing tokens** — [#10573](https://github.com/zeroclaw-labs/zeroclaw/issues/10573) (accepted, dependencies #10248/#10259 merged) with implementation PR [#11286](https://github.com/zeroclaw-labs/zeroclaw/pull/11286). Strongest candidate for the next release.
- **`search_routes` provider routing** — [#11074](https://github.com/zeroclaw-labs/zeroclaw/issues/11074) (accepted, risk:high). Mirrors existing `[[model_routes]]`; low conceptual risk.
- **Firecrawl web search provider** — [#11680](https://github.com/zeroclaw-labs/zeroclaw/pull/11680), a direct provider addition.
- **Deferred built-in tool schemas** — [#11473](https://github.com/zeroclaw-labs/zeroclaw/pull/11473), context-window relief via `tool_search`.

**Medium-term (accepted RFCs / high-risk):**
- **RAG / knowledge corpus** — [#11235](https://github.com/zeroclaw-labs/zeroclaw/issues/11235) (`needs-author-action`). Repeatedly requested capability; the `needs-author-action` label is the blocker.
- **A2A protocol crate** — [#11254](https://github.com/zeroclaw-labs/zeroclaw/issues/11254), building on the wire model from #9106 and inbound discovery from #7763/#8274.

**Early / exploratory (unlabeled, no maintainer commitment):**
- **Level 5 "Dark Factory" workflow** — [#11664](https://github.com/zeroclaw-labs/zeroclaw/issues/11664): structured, orchestrated agent teams with lifecycle management. Overlaps heavily with #10025 (swarm).
- **Separate channels from Core** — [#11662](https://github.com/zeroclaw-labs/zeroclaw/issues/11662): reduce deadweight and security surface from unused channels; add IPC/MQTT. Aligns with the channel-plugin binding work in [#11302](https://github.com/zeroclaw-labs/zeroclaw/pull/11302).
- **`zerocode` self-provisioning bearer over mTLS** — [#11679](https://github.com/zeroclaw-labs/zeroclaw/issues/11679), explicitly framed as auth parity with the gateway.
- **Configurable `MAX_BODY_SIZE`** with a proper error code + reported size — [#11668](https://github.com/zeroclaw-labs/zeroclaw/issues/11668).
- **Configurable consolidation target category** — [#11657](https://github.com/zeroclaw-labs/zeroclaw/issues/11657) (directly related to the #11655 bug).

**Prediction:** the next release (v0.8.6 signal) most plausibly ships pairing-token scoping, the filesystem-channel path refusals, and the dependency security bump. RAG, A2A crate, and swarm are all `risk:high` and gated on maintainer decisions, so they are unlikely to land this cycle.

---

## 7. User Feedback Summary

**Real pain points voiced:**
- **Multi-agent context relaying breaks at the gateway.** [#11668](https://github.com/zeroclaw-labs/zeroclaw/issues/11668) describes a production multi-agent setup where long-context prompts relayed over A2A `message/send` are rejected in under a second with a bare `length limit exceeded` string — no code, no size, no configurability. This is the most concrete operational complaint in the dataset.
- **Remote setup is friction-heavy.** [#11679](https://github.com/zeroclaw-labs/zeroclaw/issues/11679) contrasts the current flow (operator runs `curl` against the gateway on the daemon host) with the desired one-liner (`zerocode --connect`). A clear onboarding/ergonomics grievance.
- **Security surface from unused channels.** [#11662](https://github.com/zeroclaw-labs/zeroclaw/issues/11662) frames unused channels as "deadweight" and an active "security risk" — a maintainer-relevant deployment concern.
- **Web dashboard feels unfinished.** Two separate UI complaints: a blocked pairing flow ([#11648](https://github.com/zeroclaw-labs/zeroclaw/issues/11648)) and a lost-focus chat input ([#11658](https://github.com/zeroclaw-labs/zeroclaw/issues/11658)).
- **Silent correctness failures erode trust.** Both [#11655](https://github.com/zeroclaw-labs/zeroclaw/issues/11655) (memories hidden) and [#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) (timestamps destroyed) fail quietly under default configuration — the highest-risk category of user feedback, because users discover them late.

**Satisfaction signals:** contributors are actively investing in test coverage (#11687, #11683, #11681), documentation accuracy (#11686), and security hardening — consistent with a project users care about enough to improve. The volume of well-formed RFCs also indicates a technically sophisticated user base.

**Dissatisfaction signals:** repeated UI defects, unclear rejection errors, and manual remote-setup steps point to a product surface that has outpaced its polish.

---

## 8. Backlog Watch

Items needing maintainer attention, ordered by staleness:

- [#7692](https://github.com/zeroclaw-labs/zeroclaw/issues/7692) — *created 2026-06-15*, accepted, `risk:high`, only 2 comments in ~4 months. Gateway router body-limit and cron-run timeout tests. **Oldest item in this window.** Also directly relevant to the active complaint in #11668.
- [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) — *created 2026-07-04*, the **maintainer decision queue** itself, 15 comments. Its continued existence and comment count indicate a standing adjudication backlog. This is the root cause of the congestion seen across today's data.
- [#9597](https://github.com/zeroclaw-labs/zeroclaw/issues/9597) — *created 2026-07-31*, `status:in-progress`, accepted, `follow-up`, `topic:agent-loop`. Durable/attributable peer-agent turns; 2 comments. Long-running with no linked PR.
- [#10025](https://github.com/zeroclaw-labs/zeroclaw/issues/10025) — *created 2026-08-16*, RFC, `needs-author-action`, `status:no-stale`. Swarm TUI. Blocked on author response.
- [#10290](https://github.com/zeroclaw-labs/zeroclaw/issues/10290) — *created 2026-08-24*, `follow-up`, `risk:high`. Live config handle through `agent::run` for detached peer/subagent turns; 1 comment. Follow-up from #10075.
- [#10330](https://github.com/zeroclaw-labs/zeroclaw/issues/10330) — *created 2026-08-25*, tracker, `status:no-stale`. Accepted-RFC implementation-home index; only 1 comment. A pointer index that is not visibly driving work.
- [#11235](https://github.com/zeroclaw-labs/zeroclaw/issues/11235) — *created 2026-09-29*, `needs-author-action`. The RAG RFC — high user demand but stalled on the author.

**PR-side backlog risk:**
- [#11301](https://github.com/zeroclaw-labs/zeroclaw/pull/11301), [#11302](https://github.com/zeroclaw-labs/zeroclaw/pull/11302), [#11228](https://github.com/zeroclaw-labs/zeroclaw/pull/11228) — all `size:XL`, `needs-author-action`/`needs-maintainer-review`, opened 2026-09-29 to 10-01, still unmerged after ~2 weeks. #11302 is `release:v0.8.6`-tagged, making it a potential release blocker.
- The #11394/#11406/#11405/#11413 stack is `status:blocked` and `do-not-merge` — a serialized dependency chain where one stalled link halts four PRs.

**Recommendation for maintainers:** prioritize (1) adjudicating the #11394→#11413 stack, (2) resolving `needs-author-action` on #11235 and #10025, and (3) treating the #11420 / #11675 timestamp-clobbering pair as a single coordinated persistence-layer fix, since it currently has no owner.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*