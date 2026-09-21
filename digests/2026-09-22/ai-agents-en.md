# OpenClaw Ecosystem Digest 2026-09-22

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-09-21 22:15 UTC

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



# OpenClaw Project Digest — 2026-09-22

## 1. Today's Overview
OpenClaw remains in a highly active development phase, with significant volume across issues and pull requests. The project is focused heavily on reliability, crash-loop prevention, and session-state consistency, as evidenced by the concentration of high-severity P0/P1 issues. A new gateway-only `extended-stable` release (v2026.7.35) has been published, signaling a continued commitment to LTS-grade stability alongside rapid feature iteration.

## 2. Releases
### v2026.7.35 (Extended-Stable / LTS equivalent)
- **Type:** Gateway-only `extended-stable` release.
- **Scope:** Contains OpenClaw from the end of July 2026, plus critical security updates, reliability/performance fixes, and new model support.
- **Migration Notes:** No major breaking changes noted; positioned as a stable baseline for operators requiring LTS.

## 3. Project Progress
A substantial number of PRs were updated or closed today, with a strong focus on bug fixes and platform stability:
- **Core Fixes:** Addressed CLI update stalls ([#152727](https://github.com/openclaw/openclaw/pull/152727)), update failure report truncation ([#154920](https://github.com/openclaw/openclaw/pull/154920)), and plugin Doctor failure handling ([#154543](https://github.com/openclaw/openclaw/pull/154543)).
- **Platform-Specific Fixes:** Resolved Android voice note blocking ([#155036](https://github.com/openclaw/openclaw/pull/155036)), video playback restoration ([#155037](https://github.com/openclaw/openclaw/pull/155037)), WebUI avatar picker Safari issues ([#154921](https://github.com/openclaw/openclaw/pull/154921)), and LINE quote handling ([#134220](https://github.com/openclaw/openclaw/pull/134220)).
- **Gateway/Security:** Fixed a critical gateway crash loop caused by non-ASCII attachment filenames ([#155121](https://github.com/openclaw/openclaw/pull/155121)) and implemented role-based model picker restrictions ([#154839](https://github.com/openclaw/openclaw/pull/154839)).
- **Architectural/Feature Work:** Introduced Code Mode execution on Node or isolated QuickJS ([#154522](https://github.com/openclaw/openclaw/pull/154522)) and advanced multi-phase swarm diagnostics ([#153629](https://github.com/openclaw/openclaw/pull/153629)).

## 4. Community Hot Topics
The community discussion is heavily centered on reliability, data integrity, and resource management:
- **Silent Subagent Loss ([#44925](https://github.com/openclaw/openclaw/issues/44925)):** 29 comments. Users report critical orchestration failures where subagent results are silently lost without retry or notification.
- **Codex CPU Stall ([#91009](https://github.com/openclaw/openclaw/issues/91009)):** 25 comments. High CPU usage and gateway RPC stalls triggered by native Codex hook relays.
- **Per-Agent Cost Budgets ([#42475](https://github.com/openclaw/openclaw/issues/42475)):** 23 comments. Strong demand for gateway-level financial guardrails to prevent runaway LLM spend.
- **Session Transcript Livelock ([#115908](https://github.com/openclaw/openclaw/issues/115908)):** 22 comments. Main thread blocking under sustained write loads, stalling all channel transports.

## 5. Bugs & Stability
The following bugs represent the most severe threats to instance stability and user trust:

| Severity | Issue | Description | Fix Status |
| :--- | :--- | :--- | :--- |
| **P0** | [#91009](https://github.com/openclaw/openclaw/issues/91009) | Codex hook relay spawns CPU-bound processes, stalling gateway RPC. | Open |
| **P0** | [#146637](https://github.com/openclaw/openclaw/issues/146637) | npm update fails during global install swap on Linux Mint. | Open |
| **P0** | [#154114](https://github.com/openclaw/openclaw/issues/154114) | `openclaw update` fails candidate rehearsal due to inference route misalignment. | Open |
| **P1** | [#44925](https://github.com/openclaw/openclaw/issues/44925) | Subagent completion silently lost (no retry, notification, or auto-restart). | Open |
| **P1** | [#115908](https://github.com/openclaw/openclaw/issues/115908) | Session transcript projection can livelock under sustained writes. | Open |
| **P1** | [#48003](https://github.com/openclaw/openclaw/issues/48003) | Steer mode fails to inject messages mid-turn for main sessions. | Open |
| **P1** | [#97616](https://github.com/openclaw/openclaw/issues/97616) | Unreaped hook/tool child processes accumulate as zombies. | Open |
| **P1** | [#72015](https://github.com/openclaw/openclaw/issues/72015) | active-memory blocks replies and overloads multi-agent gateways. | Open |
| **P1** | [#148707](https://github.com/openclaw/openclaw/issues/148707) | Reply lost on session displacement (2026.9.4 regression). | Open |

*Note: While several P1/P0 issues are critical, many are tagged with `clawsweeper:no-new-fix-pr` or `needs-maintainer-review`, indicating they are awaiting triage or active investigation.*

## 6. Feature Requests & Roadmap Signals
Several high-vote feature requests suggest clear directions for future development:
- **Cost Control:** Per-agent daily/monthly budget caps enforced at the gateway ([#42475](https://github.com/openclaw/openclaw/issues/42475)) is a top priority for enterprise operators.
- **Context Optimization:** Tiered bootstrap file loading ([#22438](https://github.com/openclaw/openclaw/issues/22438)) and tool schema token reduction ([#14785](https://github.com/openclaw/openclaw/issues/14785)) are heavily requested to combat context bloat.
- **Platform Expansion:** Built-in headless browser support ([#53763](https://github.com/openclaw/openclaw/issues/53763)) and multi-Azure/Teams bot instances ([#71058](https://github.com/openclaw/openclaw/issues/71058)) signal enterprise readiness.
- **Memory Architecture:** Multi-slot memory architecture ([#60572](https://github.com/openclaw/openclaw/issues/60572)) and per-agent dreaming configuration ([#67413](https://github.com/openclaw/openclaw/issues/67413)) point to a modular memory future.

## 7. User Feedback Summary
- **Pain Points:** Users are highly sensitive to silent failures (lost messages, dropped subagent results) and resource leaks (zombie processes, disk space exhaustion from plugin build directories). Update mechanisms are also a friction point, particularly on FreeBSD and Linux Mint.
- **Use Cases:** Power users are pushing multi-agent orchestration, swarm-based task solving, and complex channel integrations (Telegram, WhatsApp, Feishu). Enterprise users are demanding finer-grained cost controls and role-based model access.
- **Sentiment:** Generally appreciative of the project's pace (e.g., [#73537](https://github.com/openclaw/openclaw/issues/73537)), but frustration is mounting regarding stability regressions in recent versions (2026.9.x).

## 8. Backlog Watch
- **[#69208](https://github.com/openclaw/openclaw/issues/69208) (Umbrella: Duplicate transcripts/replay):** A broad, systemic issue affecting multiple channels. Needs a coordinated architectural fix rather than individual patches.
- **[#43367](https://github.com/openclaw/openclaw/issues/43367) (Multi-agent orchestration instability):** Highlights unsafe concurrent CLI operations and session-lock failures. Requires a core state-management overhaul.
- **[#74704](https://github.com/openclaw/openclaw/issues/74704) (SDK stabilization):** Critical for external app integration; the "happy path" remains unvalidated for production use.
- **[#77700](https://github.com/openclaw/openclaw/issues/77700) (Runtime resolution migration):** A tracking issue for a major performance refactoring. Needs maintainer bandwidth to drive the staged migration.

---

## Cross-Ecosystem Comparison



# Cross-Project Comparison Report — Personal AI Assistant / Agent Open-Source Ecosystem
**Date:** 2026-09-22 | **Scope:** 13 active projects in the personal-AI-agent open-source landscape

---

## 1. Ecosystem Overview

The personal AI assistant / agent open-source ecosystem is undergoing a period of rapid maturation, characterized by a shift from feature-expansion to **reliability hardening, context management, and security consolidation**. The core reference project (OpenClaw) has entered an extended-stable release lane (v2026.7.35), signaling that the ecosystem is simultaneously pushing LTS-grade stability while iterating rapidly on multi-agent orchestration, swarm diagnostics, and platform-specific channel integrations. Across the landscape, the dominant technical concerns are: silent failures in subagent handoffs, context-compaction deadlocks under long sessions, gateway-level cost controls, and security hardening against prompt injection. Community engagement is robust but increasingly polarized around trust issues — users reward responsiveness to stability regressions but show little tolerance for silent data loss or resource leaks.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Assessment |
|---|---|---|---|---|
| **OpenClaw** (core) | ~9 P0/P1 active; 4 hot topics (29–22 comments) | Substantial volume; focus on bug fixes & platform stability | ✅ v2026.7.35 (Extended-Stable / LTS) | **High** — active development with LTS baseline; P0/P1 backlog needs triage |
| **NanoBot** | 3 updated | 28 updated; 4 merged/closed | ❌ None today | **High** — rapid WebUI feature explosion; critical deadlock fix in flight |
| **Hermes Agent** | 50 updated | 50 updated; 7 merged/closed | ✅ v0.21.4 (patch, ~1,800 PRs rolled up) | **High** — strong maintainer momentum; 2 P0 bugs (Windows crash, Desktop prompt invisibility) unpatched |
| **PicoClaw** | Moderate (13 comments on #3281) | Several active (OAuth fix, IRCv3 multiline) | ❌ None (on 0.3.1 / nightly) | **Moderate** — community-driven; web UI input lag is primary bottleneck |
| **NanoClaw** | 1 updated | 7 updated; 1 closed, 6 open | ❌ None | **Moderate** — active bug-fix throughput; older PRs await maintainer review |
| **IronClaw** | 1 new (benchmark taxonomy) | 2 closed | ⚠️ 1.4.1-rc.1 prep merged | **Stable** — developer-driven; benchmark-driven QA focus |
| **LobsterAI** | 2 open | 15 merged/closed | ❌ None | **High** — rapid maintenance; OpenClaw gateway stabilization focus |
| **Moltis** | 2 (1 closed) | 2 open | ❌ None | **Steady** — community contributions active; local TTS and tool-preset fixes in flight |
| **CoPaw** | 17 touched; 9 closed | 32 touched; 16 merged/closed | ❌ None (2.2.x cycle) | **High** — strongest same-day bug→fix coupling; security issue #7859 needs escalation |
| **ZeroClaw** | 50 updated | 50 updated | ❌ None | **High** — security hardening (OIDC, RPC principals); WhatsApp Web expansion |
| **NullClaw** | — | — | — | **Dormant** |
| **TinyClaw** | — | — | — | **Dormant** |
| **ZeptoClaw** | — | — | — | **Dormant** |

---

## 3. OpenClaw's Position

### Advantages vs. Peers
- **Reference Architecture:** OpenClaw serves as the de facto architectural baseline; projects like LobsterAI explicitly integrate with its gateway, and others share similar concerns (session-state consistency, gateway RPC, multi-agent orchestration).
- **Release Discipline:** It is the only project with a published extended-stable / LTS-equivalent release (v2026.7.35), giving it an edge in enterprise and operator trust.
- **Scope Breadth:** Covers the widest range of channel integrations (Telegram, WhatsApp, Feishu, LINE, IRC, QQ, Signal, Matrix) and platform-specific fixes (Android, iOS, WebUI, macOS, Windows, Linux distributions).
- **Security Posture:** Role-based model picker restrictions (#154839) and gateway crash-loop fixes demonstrate proactive security governance.

### Technical Approach Differences
- **Gateway-Centric:** OpenClaw organizes all operations around a gateway abstraction with RPC, making it naturally suited for multi-agent orchestration and enterprise deployment patterns.
- **Code Mode + QuickJS:** Unique among peers in offering isolated Code Mode execution on Node or QuickJS, enabling safe, sandboxed scripting within agent workflows.
- **Swarm Diagnostics:** The multi-phase swarm diagnostics PR (#153629) reflects a deliberate investment in observable, debuggable multi-agent systems — a gap most smaller projects have not yet addressed.

### Community Size Comparison
- OpenClaw's issue threads attract the highest engagement (29 comments on #44925, 25 on #91009), indicating a larger and more vocal user base than peers like NanoClaw or Moltis, where comment counts are near-zero.
- However, this larger community also surfaces more P0/P1 regressions simultaneously, creating a higher-volume triage burden.

---

## 4. Shared Technical Focus Areas

The following requirements are emerging consistently across multiple projects, indicating ecosystem-wide architectural convergence:

| Focus Area | Projects Involved | Specific Need |
|---|---|---|
| **Context Compaction / Management** | OpenClaw (#115908), NanoBot (#5849), Hermes Agent (#118568, #118378, #99858), CoPaw (#7628) | Safe automatic context summarization with token-budget guards; native checkpoint handling; false-alarm elimination on overflow warnings |
| **Subagent / Multi-Agent Orchestration** | OpenClaw (#44925, #43367), Hermes Agent (#118320, #108045), ZeroClaw (#11027, #10970) | Reliable subagent result delivery (no silent loss); profile isolation; host-scoped resource bounds; agent-to-agent session messaging |
| **Gateway / RPC Stability** | OpenClaw (#91009, #155121), ZeroClaw (#10259), Hermes Agent (#118487) | Prevention of CPU-bound hook relays stalling RPC; zombie process reaping; WebSocket liveness watchdogs; authenticated RPC principals |
| **Cost Control / Budgeting** | OpenClaw (#42475), Hermes Agent (#118337 — cache TTL) | Per-agent financial guardrails at gateway level; tiered caching to reduce LLM spend for human-paced sessions |
| **Channel / Platform Reliability** | OpenClaw (#155036, #155037, #134220), NanoClaw (#3837, #3859), PicoClaw (#3378), ZeroClaw (#10980–#10988) | Consistent DM routing, attachment staging, platform ID consistency, and rich-message parity across Telegram, WhatsApp, Signal, QQ, IRC, and Matrix |
| **Security Hardening** | OpenClaw (#154839), ZeroClaw (#10255, #11029), CoPaw (#7859), Hermes Agent (#118026) | Role-based access control, OIDC token verification, prompt-injection defense, and Windows/macOS process isolation |

---

## 5. Differentiation Analysis

| Project | Feature Focus | Target Users | Technical Architecture |
|---|---|---|---|
| **OpenClaw** | Full-stack agent OS: gateway, channels, swarm, code execution | Operators, enterprise deployers, power users | Gateway-centric RPC; Node/QuickJS sandbox; multi-phase swarm diagnostics |
| **NanoBot** | WebUI dashboard excellence; BUILD-stage observability | Web-heavy users; developers wanting rich UI | WebUI-first; structured timing diagnostics for BUILD substages |
| **Hermes Agent** | Compaction/caching sophistication; desktop + cloud deployment | Long-session users; Docker/Hermes Cloud consumers | Native checkpoint compaction; auto-tiered cache TTL; desktop SSH rollout control plane |
| **PicoClaw** | Lightweight channel integration; ARM/hardware diversity | Hobbyists, Orange Pi/ARM deployers | Lightweight channel adapters; IRCv3 protocol modernization |
| **NanoClaw** | Signal/WhatsApp channel reliability; setup portability | Multi-channel operators on diverse Linux distros | Consolidated adapter patches; cross-distro install scripts |
| **IronClaw** | Benchmark-driven QA; enterprise admin configuration | Enterprise teams; NearAI model ecosystem | Web UI admin configuration; officeqa benchmark taxonomy |
| **LobsterAI** | OpenClaw gateway integration; legacy data migration | Chinese enterprise users (NetEase/Youdao) | Deep OpenClaw gateway hardening; macOS/Windows pathing fixes |
| **Moltis** | Local TTS (VoxCPM); policy-based tool presets | Offline-first users; privacy-conscious deployments | vLLM-Omni local speech synthesis; per-preset tool allow/deny policies |
| **CoPaw** | Model/provider layer consolidation; doom-loop prevention | Enterprise multi-model users; Qwen ecosystem | Unified model discovery/pricing; DoomLoopGate with evidence-based escalation |
| **ZeroClaw** | Security hardening (OIDC, RPC); WhatsApp Web feature parity | Security-conscious operators; Matrix/WhatsApp users | JWKS validation; RFC 9068 typed tokens; per-agent resource bounds |

---

## 6. Community Momentum & Maturity

### Activity Tiers

**Tier 1 — Rapid Iteration (highest velocity):**
- **Hermes Agent** (50 issues + 50 PRs/day; v0.21.4 with ~1,800 PRs rolled up)
- **ZeroClaw** (50 issues + 50 PRs/day; security roadmap stages advancing)
- **CoPaw** (17 issues + 32 PRs/day; 50% merge/close rate; same-day bug→fix coupling)

**Tier 2 — Active Development (steady velocity):**
- **OpenClaw** (substantial PR volume; LTS release published; P0/P1 backlog being triaged)
- **NanoBot** (28 PRs; WebUI feature explosion; critical deadlock fix in flight)
- **LobsterAI** (15 merged/closed PRs; gateway stabilization focus)

**Tier 3 — Moderate/Steady (community-driven):**
- **PicoClaw** (community contributions; web UI performance bottleneck)
- **NanoClaw** (bug-fix throughput; older PRs awaiting review)
- **Moltis** (steady contributions; local TTS and tool-preset fixes)
- **IronClaw** (developer-driven; benchmark QA focus)

**Tier 4 — Dormant:**
- **NullClaw**, **TinyClaw**, **ZeptoClaw** — no activity in 24h

### Stabilization vs. Growth Signals
- **Stabilizing:** OpenClaw (LTS lane), Hermes Agent (patch release consolidating 1,800 PRs), CoPaw (test coverage sprint +3.28pp, CI hardening)
- **Growth/Expansion:** NanoBot (WebUI feature explosion), ZeroClaw (WhatsApp Web suite, security roadmap), Moltis (local TTS), PicoClaw (IRCv3, OpenAI-compatible provider)

---

## 7. Trend Signals

### Industry Trends Extracted from Community Feedback

1. **From Feature Expansion to Reliability Hardening**
   The ecosystem is collectively pivoting from "can it do X?" to "will it survive X?" — context-compaction deadlocks, silent subagent loss, zombie processes, and session livelocks are the dominant community concerns across projects. Users are no longer impressed by feature checklists; they reward stability and penalize silent failures.

2. **Gateway-Centric Architecture as De Facto Standard**
   OpenClaw's gateway abstraction is being implicitly adopted or mirrored by peers: ZeroClaw's RPC principal enforcement, Hermes Agent's adapter watchdogs, and LobsterAI's OpenClaw gateway integration all point to a shared architectural pattern where a central gateway mediates all agent operations, channels, and model access.

3. **Security is Becoming a Differentiator**
   ZeroClaw's OIDC/JWKS validation (Stage 5

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



Based on the recent GitHub activity for **NanoBot (github.com/HKUDS/nanobot)** as of September 22, 2026, here is the structured project digest.

---

### 1. Today's Overview
NanoBot is experiencing a period of highly active development, particularly focused on major WebUI enhancements and critical backend stability fixes. With 28 pull requests and 3 issues updated in the last 24 hours, the project shows strong, rapid maintenance responsiveness. Key focus areas include a massive feature cluster for the WebUI interface, observability tracing for agent latency, and a critical memory deadlock fix that is already being actively addressed by the community.

---

### 2. Releases
*   **New Releases:** None published today. 

---

### 3. Project Progress
The project has advanced significantly across UI/UX and core agent reliability, with 4 PRs merged/closed and multiple high-value features in the pipeline:
*   **Log Reliability Standardized:** PR #5840 was closed, standardizing CLI logs with unambiguous timestamps, request/turn/session correlation, and preserving critical exception tracebacks.
*   **WebUI Feature Explosion:** A massive wave of PRs (primarily by contributor `Re-bin`, #5847 through #5856) is pushing major UI improvements, including session command inspection, subtask tracking, typed image delivery, link previews, usage statistics calendars, and safe Mermaid diagram rendering.
*   **Core Agent Diagnostics:** PR #5846 is underway to add structured timing diagnostics for the BUILD lifecycle substages, targeting long-session latency issues.
*   **Provider Expansion:** PR #5845 adds Opper as a built-in gateway provider, expanding the model accessibility options for users.

---

### 4. Community Hot Topics
*   **The Auto-compaction Deadlock (#5849):** The most critical community concern. Users reported that automatic context-compaction sends entire history dumps without token-budgeting, causing unrecoverable deadlocks once the history exceeds the input limit. 
    *   *Underlying Need:* Safe, automatic context management that gracefully handles long sessions without hitting hard LLM limits.
    *   *Link:* [Issue #5849](https://github.com/HKUDS/nanobot/issues/5849)
*   **WebUI Feature Suite (#5850 - #5856):** High engagement on the rich WebUI feature set. Users are pushing for the web interface to be a fully standalone, highly visual dashboard with built-in command controls, subtask tracking, and file/link previews.
    *   *Link:* [PR #5856](https://github.com/HKUDS/nanobot/pull/5856) | [PR #5855](https://github.com/HKUDS/nanobot/pull/5855) | [PR #5854](https://github.com/HKUDS/nanobot/pull/5854)
*   **BUILD Stage Latency (#5843):** Users reporting that long sessions suffer from massive delays (10s to tens of seconds) inside the BUILD stage before the LLM call is initiated.
    *   *Underlying Need:* Clear visibility into internal processing stages and performance optimization for long-running conversational threads.
    *   *Link:* [Issue #5843](https://github.com/HKUDS/nanobot/issues/5843)

---

### 5. Bugs & Stability
*   **CRITICAL: Auto-compaction Deadlock (#5849)**
    *   *Status:* Active bug where automatic transcript summarization lacks a token-budget guard, causing system failure on long histories.
    *   *Fix PR:* **#5857** (`fix(memory): bound automatic transcript summarization`) is open and actively targeting the issue.
    *   *Link:* [Issue #5849](https://github.com/HKUDS/nanobot/issues/5849) | [Fix PR #5857](https://github.com/HKUDS/nanobot/pull/5857)
*   **HIGH: Long Session Latency (#58

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>



# Hermes Agent Project Digest — 2026-09-22

---

## 1. Today's Overview

Hermes Agent remains highly active, with 50 issues and 50 pull requests updated in the last 24 hours. The project shipped **v0.21.4 (tag v2026.9.21)**, a patch release consolidating roughly 1,800 merged PRs since v0.21.3 — signaling strong maintainer momentum and a stable downstream baseline for Docker, Hermes Cloud, and hosted deployments. Activity is balanced between bug fixes (especially in desktop, compaction, and gateway adapters) and a surge of community plugin-catalog submissions. Overall health is good, though a handful of P0/P1 regressions demand immediate attention.

---

## 2. Releases

### v2026.9.21 — Hermes Agent v0.21.4

| Field | Detail |
|---|---|
| **Release date** | September 21, 2026 |
| **Type** | Patch release |
| **Scope** | Rolls up ~1,800 PRs merged since v0.21.3 |
| **Purpose** | Stable tagged release for downstream consumers (Docker images, Hermes Cloud, hosted deployments) |

**Key notes:**
- Full curated changelog is deferred — this tag is primarily a stability checkpoint, not a feature milestone.
- No breaking changes are documented in the release notes available for this window.
- **Migration:** None expected for users already on v0.21.x; direct upgrade path is `v0.21.3 → v0.21.4`.

---

## 3. Project Progress

### Merged / Closed PRs Today (7 total, showing 4 of top 20)

| PR | Title | Author | Summary |
|---|---|---|---|
| [#118568](https://github.com/NousResearch/hermes-agent/pull/118568) | fix(compaction): native checkpoint no longer trips blocked-overflow warning | teknium1 | Salvage of #118378; cherry-picked onto `origin/main`. Native Responses compaction checkpoints no longer falsely trigger `compression is currently blocked` warnings. |
| [#118378](https://github.com/NousResearch/hermes-agent/pull/118378) | fix(compaction): invalidate pre-checkpoint usage anchors | simpolism | Invalidates stale usage anchors when capturing/restoring native compaction checkpoints; prevents post-tool overflow false alarms. |
| [#99858](https://github.com/NousResearch/hermes-agent/pull/99858) | fix(compaction): re-estimate post-tool pressure after native checkpoints | supplefrog | Re-estimates context pressure from checkpoint-pruned Responses wire when native compaction is eligible. |
| [#118337](https://github.com/NousResearch/hermes-agent/pull/118337) | feat(caching): cache_ttl: auto | teknium1 | New `prompt_caching.cache_ttl: auto` — interactive sessions get 1h Anthropic cache tier; machine-paced sessions (subagent, cron, oneshot, kanban, api) stay on 5m. |

**Themes advanced:**
- **Compaction / context management:** Three merged PRs tighten native checkpoint handling, eliminating false overflow warnings and stale usage anchors — critical for long-running sessions.
- **Caching:** A new auto-tiered cache TTL feature reduces cost for human-paced sessions.
- **Infrastructure hygiene:** Scratch-dir pruning now triggers at 24h idle (was 72h), judged by whole-subtree activity ([#118575](https://github.com/NousResearch/hermes-agent/pull/118575)).

---

## 4. Community Hot Topics

### 🔥 #88584 — Automated Nous integration blocked (127 comments)
- **Link:** [NousResearch/hermes-agent#88584](https://github.com/NousResearch/hermes-agent/issues/88584)
- **Status:** OPEN · invalid · P3
- **Created:** 2026-08-17 · **Updated:** 2026-09-21
- **Summary:** The scheduled Nous→Enterkey merge has conflicts in `cron/jobs.py`. No release branch was changed; the dashboard updater remains on the last tested Enterkey release. A CI workflow run is referenced.
- **Underlying need:** Automated dependency/merge tooling is failing silently. The community wants reliable, automated integration between Nous and Enterkey forks — this is a process/infra issue, not a code bug, but it's blocking downstream automation.

### 🔥 #77111 — RealtimeVoiceProvider ABC RFC (27 comments)
- **Link:** [NousResearch/hermes-agent#77111](https://github.com/NousResearch/hermes-agent/issues/77111)
- **Status:** OPEN · type/feature · innovation · P3 · needs-decision
- **Created:** 2026-08-02 · **Updated:** 2026-09-21
- **Summary:** Four competing duplex-voice PRs need a unified interface. The author invokes the AGENTS.md Footprint Ladder rule: when 3+ open PRs integrate the same category (voice providers), design an ABC + orchestrator, wrap the existing built-in as the first provider, and sequence the rest.
- **Underlying need:** Prevents merge chaos and duplicated effort in the voice-provider space. The community is self-organizing around interface standardization.

### 🔥 #118029 — Desktop SSH rollout control plane (9 comments)
- **Link:** [NousResearch/hermes-agent#118029](https://github.com/NousResearch/hermes-agent/issues/118029)
- **Status:** OPEN · type/feature · P3 · needs-decision
- **Created:** 2026-09-21
- **Summary:** Proposes a pinned, verified rollout control plane for managed SSH installations, with a required security interlock referencing enterprise security assurance (#92618).
- **Underlying need:** Enterprise users want auditable, gated SSH deployment — security eligibility and evidence belong in deployment review, admission, promotion, and recovery.

---

## 5. Bugs & Stability

Bugs reported or updated today, ranked by severity:

### P0 — Critical

| Issue | Title | Link | Notes |
|---|---|---|---|
| #118026 | [Windows] `hermes_state_lockguard.py` crashes on startup — `fcntl.F_RDLCK` missing | [link](https://github.com/NousResearch/hermes-agent/issues/118026) | Windows 11, v0.21.3. Backend process crashes before port binding. Root cause: `fcntl` module doesn't exist on Windows. **No fix PR yet.** |
| #71733 | Desktop chat shows only assistant replies — user prompt bubbles invisible mid-session | [link](https://github.com/NousResearch/hermes-agent/issues/71733) | P0/urgent. User prompts not rendered in transcript even though agent receives and answers them. **No fix PR yet.** |

### P1 — High

| Issue | Title | Link | Notes |
|---|---|---|---|
| #118487 | Discord liveness watchdog dies after first socket_closed strike — adapter zombie, no reconnect | [link](https://github.com/NousResearch/hermes-agent/issues/118487) | WebSocket probe goes permanently silent after 1/2 strike. Bot stays alive but dead socket. **No fix PR yet.** |
| #118505 | `kanban gc` accepts negative/zero retention days, deletes all event history and worker logs | [link](https://github.com/NousResearch/hermes-agent/issues/118505) | Argparse passes raw values; `_cmd_gc` multiplies them into `older_than`. Data loss risk. **No fix PR yet.** |

### P2 — Moderate

| Issue | Title | Link | Fix PR? |
|---|---|---|---|
| #96355 | `delegate_task` can return `completed` when `output_schema` validation fails | [link](https://github.com/NousResearch/hermes-agent/issues/96355) | No |
| #70108 | Desktop intermittently renders duplicate assistant replies (state.db has one) | [link](https://github.com/NousResearch/hermes-agent/issues/70108) | No |
| #66429 | Empty assistant messages cause runaway loop with Kimi provider | [link](https://github.com/NousResearch/hermes-agent/issues/66429) | No |
| #63200 | Empty-content assistant messages with `tool_calls` break DeepSeek API (HTTP 400) | [link](https://github.com/NousResearch/hermes-agent/issues/63200) | No |
| #118484 | `truncate_message` emits chunks over platform limit when fence has no newline | [link](https://github.com/NousResearch/hermes-agent/issues/118484) | No |
| #115011 | Discord adapter: two auth gates disagree on channel-only grants | [link](https://github.com/NousResearch/hermes-agent/issues/115011) | No |
| #117915 | `compression.threshold_tokens` default silently overrides `compression.model_thresholds` ratio on 1M-window models | [link](https://github.com/NousResearch/hermes-agent/issues/117915) | No |
| #108045 | Concurrent turns crosstalk — single unscoped-stream pin slot reattributes background session stream deltas | [link](https://github.com/NousResearch/hermes-agent/issues/108045) | No |
| #117750 | Pruning carried-forward tool payloads duplicates and reorders display history | [link](https://github.com/NousResearch/hermes-agent/issues/117750) | No |
| #118538 | OMH `pre_tool_call` vetoes ALL tools on multiplex gateway (missing profile scope) | [link](https://github.com/NousResearch/hermes-agent/issues/118538) | No |
| #118535 | cron manual run with `extra_prompt` is a no-op when gate script is quiet | [link](https://github.com/NousResearch/hermes-agent/issues/118535) | No |
| #118493 | File-name search lists merged-stderr diagnostics as files | [link](https://github.com/NousResearch/hermes-agent/issues/118493) | No |
| #118481 | Desktop paints "Result unavailable" for sealed tool rows although `state.db` holds the result | [link](https://github.com/NousResearch/hermes-agent/issues/118481) | No |
| #113222 | Async `delegate_task` batch never reports when finished child's heartbeat is retired as stale | [link](https://github.com/NousResearch/hermes-agent/issues/113222) | No |
| #107141 | MCP schema sanitize chain prunes required inside oneOf/not branches — mutex constraints always-false | [link](https://github.com/NousResearch/hermes-agent/issues/107141) | No |
| #97751 | ollama-cloud deepseek models misclassified as DeepSeek echo-back endpoint | [link](https://github.com/NousResearch/hermes-agent/issues/97751) | No |
| #118499 | `max_in_progress_per_profile` enforced per board, so a profile can exceed its cap across boards | [link](https://github.com/NousResearch/hermes-agent/issues/118499) | No |

### P3 — Low

| Issue | Title | Link |
|---|---|---|
| #82052 | xAI 403 unauthenticated classified non-retryable — long-lived workers never refresh expired OAuth token | [link](https://github.com/NousResearch/hermes-agent/issues/82052) |
| #60848 | Telegram empty-message guard misses zero-width/invisible characters | [link](https://github.com/NousResearch/hermes-agent/issues/60848) |
| #118333 | Truncation copy says "raise max_tokens" — setting was removed and does nothing | [link](https://github.com/NousResearch/hermes-agent/issues/118333) |
| #106960 | systemd dashboard inventoried as manual serve after hermes update | [link](https://github.com/NousResearch/hermes-agent/issues/106960) |
| #118354 | `no_agent` cron script failure erased by next successful run — relapse invisible | [link](https://github.com/NousResearch/hermes-agent/issues/118354) |

**Key observation:** The two P0 bugs (Windows crash, Desktop prompt invisibility) have no associated fix PRs yet — these are the highest-priority items for the maintainers.

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Title | Link | Signal |
|---|---|---|---|
| #77111 | [RFC] RealtimeVoiceProvider ABC | [link](https://github.com/NousResearch/hermes-agent/issues/77111) | Standardizing voice-provider interface; likely to land in a near-term minor release. |
| #118320 | [Feature] Remove multiplexing | [link](https://github.com/NousResearch/hermes-agent/issues/118320) | Users demand profile isolation; multiplexing is "multiplex or nothing." Maintainers may expose a disable flag or revert partially. |
| #118029 | Desktop SSH rollout control plane | [link](https://github.com/NousResearch/hermes-agent/issues/118029) | Enterprise-grade SSH deployment gating; tied to security assurance #92618. |
| #118567 | `hermes moa configure` non-interactive via `--slots`/`--slots-file` | [link](https://github.com/NousResearch/hermes-agent/pull/118567) | Scriptable MoA preset configuration; closes #102265. |
| #118337 | `cache_ttl: auto` (merged) | [link](https://github.com

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



Based on the GitHub activity for **PicoClaw (github.com/sipeed/picoclaw)** up to September 22, 2026, here is the structured project digest.

---

### 1. Today's Overview
PicoClaw shows moderate, community-driven development activity. The project is currently stabilizing its channel integrations and auth configurations, as evidenced by a critical OAuth scope fix and an IRCv3 multiline feature contribution. However, the project's health is tempered by a prominent, highly-discussed UI performance bug regarding the web chat input lag. Overall, the repository maintains a healthy mix of bug fixes, community feature requests, and active external contributions.

### 2. Releases
*   **No new releases** were published in the last 24 hours. The current version remains on `0.3.1` / nightly builds, as referenced in the active issues.

### 3. Project Progress
*   **Closed/Housekeeping Activities:** 
    *   **PR #3384** was closed as a misplaced submission (filed on the wrong repository by an AI agent), helping maintain repository hygiene.
    *   **Issue #3365** (QQ channel 401 authorization error) was closed/stale, indicating either upstream dependency drift or maintainer resolution.
*   **Active Feature & Bug Fixes (PRs):**
    *   **OAuth Scope Fix (PR #3378):** A critical bug fix ensuring that provider-specific scopes are correctly passed during access token refresh, rather than falling back to hardcoded defaults (`openid profile email`).
    *   **IRCv3 Multiline Support (PR #3354):** A community contribution adding `draft/multiline` receive support to the IRC channel, allowing long or multi-line messages to be cohesively assembled.

### 4. Community Hot Topics
*   **Web UI Performance Bottleneck (Issue #3281):** 
    *   *Link:* [sipeed/picoclaw#3281](https://github.com/sipeed/picoclaw/issues/3281)
    *   *Analysis:* This is the most active topic with 13 comments and 2 👍. Users report severe input lag in the PicoClaw Web UI as chat histories grow. This represents a critical usability bottleneck for web-based users.
*   **OpenAI Compatible Provider Integration (Issue #3366):**
    *   *Link:* [sipeed/picoclaw#3366](https://github.com/sipeed/picoclaw/issues/3366)
    *   *Analysis:* 4 comments discuss the need for a generic "OpenAI Compatible" provider. This highlights a strong user need to route traffic through custom, self-hosted LLM routers (such as 9Router).

### 5. Bugs & Stability
*   **High Severity — Web UI Input Lag (Issue #3281):** Render performance failure triggered by medium-to-long chat histories. No direct pull request is currently linked to resolve this, making it the primary stability hurdle for the web interface.
*   **Medium Severity — QQ Channel Auth 401 (Issue #3365):** Dependency mismatch between `botgo v0.2.1` and `resty >= v2.17` caused authorization failures on QQ channels. The issue is now closed/stale, but historically impacted multi-channel users on Orange Pi hardware.
*   **Resolved — Hardcoded OAuth Scopes (PR #3378):** Actively addresses a functional bug in the authentication flow where custom scopes were ignored during token refresh.

### 6. Feature Requests & Roadmap Signals
*   **LLM Provider Flexibility (Issue #3366):** The push for an "OpenAI Compatible" provider indicates that the project roadmap needs a fallback mechanism for generic API interfaces. This is highly likely to be prioritized in the next minor release to support self-hosted models.
*   **Legacy Protocol Modernization (PR #3354):** The assembly of IRCv3 multiline messages indicates the roadmap is slowly modernizing legacy messaging channels to handle rich text formatting better.

### 7. User Feedback Summary
*   **Pain Points:** Users are frustrated with the performance limitations of the Web UI (specifically input rendering lag) and platform-specific dependency conflicts (specifically QQ channel integrations on ARM devices).
*   **Use Cases:** Users are deploying PicoClaw on diverse hardware (e.g., Orange Pi 3B) and seeking multi-platform compatibility (IRC, QQ, Web) paired with flexible LLM routing (custom OpenAI-compatible routers).
*   **Engagement:** The community is actively supportive, showing engagement through comments on edge-case bugs and submitting value-add features like the IRC multiline protocol support.

### 8. Backlog Watch
*   **Issue #3281 (Web UI Chat Lag):** Open since July 21, 2026. It has accumulated significant discussion (13 comments) but lacks a maintainer-assigned performance fix PR. It requires urgent triage to prevent web channel churn.
*   **Pull Request #3354 (IRCv3 multiline):** Open since August 31, 2026. It has no comments or review status shown but represents a clean, feature-specific contribution waiting for maintainer integration.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest — 2026-09-22**

### 1. Today's Overview
NanoClaw shows moderate maintenance activity in the last 24 hours: 1 updated issue, 7 updated PRs, and no new releases. The issue is open and uncommented, while PR activity is dominated by bug-fix work, with 6 PRs open and 1 PR closed. No comments or reactions were recorded on the updated items, so visible community engagement is low despite contributor activity. Several older PRs were refreshed, indicating continued work on setup portability, Signal/WhatsApp channel reliability, and macOS statusbar fixes. Overall project health: active bug-fix throughput, but a visible backlog of older open PRs awaiting maintainer review or merge.

### 2. Releases
No new releases in the last 24 hours. No release notes, breaking changes, or migration guidance to summarize.

### 3. Project Progress
- **Closed PR #2689** — [fix(signal): DM platform ID consistency, isMention, and ask_question/approval delivery](https://github.com/nanocoai/nanoclaw/pull/2689). This closed PR targeted Signal DM handling: setting `isMention: true` for DMs so the router auto-creates `messaging_groups` rows, and adding a `signal:` prefix for DM platform IDs. It addressed dropped first messages and unregistered Signal DM groups.
- **Open PR #3837** — [fix(signal): consolidate attachment, DM-routing, and outbound-queue fixes](https://github.com/nanocoai/nanoclaw/pull/3837). Consolidates earlier Signal adapter fixes into a current patch against `channels`, covering images, voice, general files, DM routing, and outbound queues.
- **Open PR #3286** — [Skip image rebuild in restart when no packages configured](https://github.com/nanocoai/nanoclaw/pull/3286). Avoids unnecessary `buildAgentGroupImage` calls when no `packages_apt`/`packages_npm` are configured.
- **Open PR #3273** — [fix(setup): detect package manager in install-node.sh](https://github.com/nanocoai/nanoclaw/pull/3273). Moves Linux Node installation beyond Debian-only NodeSource assumptions.
- **Open PR #3311** — [fix(agent-runner): route scheduled-task errors to the operator](https://github.com/nanocoai/nanoclaw/pull/3311). Fixes scheduled-task errors being written as chat messages without routing fields, which could prevent operator delivery.
- **Open PR #3859** — [fix(whatsapp): implement resolveChannelName](https://github.com/nanocoai/nanoclaw/pull/3859). Lets WhatsApp unknown-channel registration cards name a group instead of showing a generic channel label.
- **Open PR #3420** — [fix(add-macos-statusbar): make Swift code and plist labels slug-aware](https://github.com/nanocoai/nanoclaw/pull/3420). Updates macOS statusbar integration to use `com.nanoclaw-v2-<installSlug>` labels rather than retired `com.nanoclaw` labels.

### 4. Community Hot Topics
There are **no hot topics by comments or reactions** in the supplied data: Issue #3860 has 0 comments and 0 👍, and the PRs show `comments: undefined` with 0 👍. Activity is therefore measured by update recency and issue/PR clustering, not engagement.

- **Signal adapter cluster** — [PR #2689](https://github.com/nanocoai/nanoclaw/pull/2689) (closed) and [PR #3837](https://github.com/nanocoai/nanoclaw/pull/3837) (open). Underlying need: consistent Signal DM routing, attachment staging, and outbound queue behavior across chat adapters.
- **WhatsApp channel naming** — [PR #3859](https://github.com/nanocoai/nanoclaw/pull/3859). Underlying need: clearer registration/approval cards so operators can identify WhatsApp groups.
- **Restart timestamp bug** — [Issue #3860](https://github.com/nanocoai/nanoclaw/issues/3860). Underlying need: reliable restart-time parsing in setup scripts, especially under pnpm’s `FORCE_COLOR=1`.

### 5. Bugs & Stability
Ranked by likely impact, based on supplied summaries. Only **Issue #3860** and **PR #3859** were created/updated on 2026-09-21; the other bug-fix PRs are older but were updated in the last 24h.

1. **High — non-Debian Linux install failure** — [PR #3273](https://github.com/nanocoai/nanoclaw/pull/3273). `setup/install-node.sh` unconditionally runs Debian-only NodeSource setup and `apt-get`, failing on Fedora, RHEL, CentOS, openSUSE, Arch, and Alpine. Fix PR exists.
2. **High — Signal attachments/DM/outbound delivery** — [PR #3837](https://github.com/nanocoai/nanoclaw/pull/3837). Signal attachment types were not uniformly staged/forwarded; DM routing and outbound queue fixes are consolidated here. Fix PR exists.
3. **High/Medium — scheduled-task errors misrouted** — [PR #3311](https://github.com/nanocoai/nanoclaw/pull/3311). Errors from scheduled-task turns were written as chat messages copying batch routing fields, which task batches do not carry by design. Fix PR exists.
4. **Medium — macOS statusbar watches retired service** — [PR #3420](https://github.com/nanocoai/nanoclaw/pull/3420). Hardcoded `com.nanoclaw` labels no longer match `com.nanoclaw-v2-<installSlug>`, so the statusbar can watch a service that does not exist. Fix PR exists.
5. **Medium — restart timestamp unparseable** — [Issue #3860](https://github.com/nanocoai/nanoclaw/issues/3860). `restart.sh` uses `console.log(Date.now())`; pnpm exports `FORCE_COLOR=1`, and Node colorizes the number, producing an invalid restart time. No fix PR referenced in the data.
6. **Medium — WhatsApp registration card cannot name group** — [PR #3859](https://github.com/nanocoai/nanoclaw/pull/3859). Missing `resolveChannelName` causes generic “a whatsapp channel” labels. Fix PR exists.
7. **Low/Medium — unnecessary image rebuild** — [PR #3286](https://github.com/nanocoai/nanoclaw/pull/3286). `ncl groups restart --rebuild` rebuilds even when no packages are configured. Fix PR exists.

### 6. Feature Requests & Roadmap Signals
The supplied data contains mostly bug fixes rather than explicit feature requests. Roadmap signals inferred from PR titles/summaries:

- **Cross-platform setup portability** — [PR #3273](https://github.com/nanocoai/nanoclaw/pull/3273) suggests growing demand for non-Debian Linux support.
- **Better channel identity/registration UX** — [PR #3859](https://github.com/nanocoai/nanoclaw/pull/3859) points toward richer WhatsApp channel naming and registration cards.
- **Signal adapter consolidation** — [PR #3837](https://github.com/nanocoai/nanoclaw/pull/3837) signals a push to stabilize Signal as a first-class channel.
- **Operational error visibility** — [PR #3311](https://github.com/nanocoai/nanoclaw/pull/3311) indicates demand for scheduled-task failures to reach the operator.
- **macOS install/statusbar correctness** — [PR #3420](https://github.com/nanocoai/nanoclaw/pull/3420) points to slug-aware installation support.
- **Efficiency in agent-group restarts** — [PR #3286](https://github.com/nanocoai/nanoclaw/pull/3286) suggests avoiding unnecessary rebuild work.

Likely next-version candidates, if reviewed and merged: Signal adapter consolidation, WhatsApp channel naming, install/setup portability fixes, scheduled-task error routing, and macOS statusbar slug fixes. No release data exists to confirm version scope.

### 7. User Feedback Summary
Real user pain points visible in the data:

- Signal DMs were silently dropped or unregistered because `isMention` was not set, and DM platform IDs lacked a `signal:` prefix.
- Signal attachments — images, voice, and general files — were not consistently staged and forwarded through the mounted-inbox mechanism.
- `restart.sh` produced an unparseable restart timestamp under pnpm’s `FORCE_COLOR=1`.
- Non-Debian Linux users hit installation failures due to Debian-only NodeSource and `apt-get` assumptions.
- Scheduled-task errors were not routed to the operator, reducing operational visibility.
- WhatsApp unknown-channel registration cards could not name a group, making approval cards less useful.
- macOS statusbar integration watched a retired `com.nanoclaw` service instead of the current slug-based service.
- `ncl groups restart --rebuild` performed unnecessary image rebuilds when no packages were configured.

Satisfaction/dissatisfaction is difficult to gauge because the data shows no comments or reactions. The volume of targeted bug-fix PRs suggests an engaged contributor base, while the nature of the reports indicates dissatisfaction with setup reliability, channel delivery, and operational error visibility.

### 8. Backlog Watch
These older open PRs were updated on 2026-09-21 but show no comments in the supplied data, so they may need maintainer review, merge, or close decisions:

- [PR #3273](https://github.com/nanocoai/nanoclaw/pull/3273) — created 2026-08-16; non-Debian Linux install fix.
- [PR #3286](https://github.com/nanocoai/nanoclaw/pull/3286) — created 2026-08-17; skip unnecessary image rebuild.
- [PR #3311](https://github.com/nanocoai/nanoclaw/pull/3311) — created 2026-08-18; route scheduled-task errors to operator.
- [PR #3420](https://github.com/nanocoai/nanoclaw/pull/3420) — created 2026-08-20; macOS statusbar slug-awareness. Stacked on #3408 and marked `[core-team]`.
- [PR #3837](https://github.com/nanocoai/nanoclaw/pull/3837) — created 2026-09-16; consolidates stale Signal adapter fixes, making it a likely review priority.
- [Issue #3860](https://github.com/nanocoai/nanoclaw/issues/3860) — open, 0 comments, no referenced fix PR; small but concrete setup-script bug.

**Maintainer attention signal:** the Signal adapter work is split between a recently closed PR (#2689) and a consolidating open PR (#3837); resolving that cluster, plus the long-open setup/agent-runner/macOS PRs, would likely improve project health fastest.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



# IronClaw Project Digest — 2026-09-22

## 1. Today's Overview
IronClaw exhibits focused, developer-driven activity today, prioritizing critical deployment fixes and release preparation over community-wide discussions. The main milestones include resolving a key extension blocker for Google integrations and setting up the pipeline for the upcoming `1.4.1-rc.1` release candidate. Additionally, systematic tracking of AI benchmark failures ensures that model quality regressions are carefully monitored. Overall, the project health is stable and moving forward with structured QA and hardening of administrative configurations.

## 2. Releases
No official production releases were published today. However, the development team successfully merged the versioning chore ([PR #8105](https://github.com/nearai/ironclaw/pulls/8105)) to ship the package at `1.4.1-rc.1`. This release candidate prep is a critical step allowing the automated "Cut Ironclaw Release" workflow to tag the correct merge commit, refusing mismatched manifests to ensure tag integrity.

## 3. Project Progress
*   **Fixed Google Extension Activation Blocker ([PR #8102](https://github.com/nearai/ironclaw/pulls/8102) - Closed):** Resolved a critical bug where Gmail and Google Calendar extensions failed to activate on deployments using Web UI administrator configuration for the Google OAuth client instead of environment variables. The fix ensures provider-instance readiness is resolved dynamically post-OAuth flow.
*   **Release Candidate Version Bump ([PR #8105](https://github.com/nearai/ironclaw/pulls/8105) - Closed):** Bumped the shipping package manifest to `1.4.1-rc.1`, advancing the release pipeline readiness.

## 4. Community Hot Topics
The primary diagnostic topic today is the daily failure taxonomy tracking:
*   **Daily ironclaw failure taxonomy — 2026-09-21 ([Issue #8106](https://github.com/nearai/ironclaw/issues/8106)):** Opened by pranavraja99, this issue details the benchmark results for the `officeqa` suite, highlighting 47 non-passing tasks. 
    *   *Underlying Need:* The community and developers require granular, benchmark-driven feedback loops to separate genuine AI model-quality limitations (e.g., navigation errors by DeepSeek-V4-Flash) from framework execution bugs. This structured taxonomy helps prioritize engineering efforts on agent framework improvements versus model fine-tuning.

## 5. Bugs & Stability
*   **Active Bug Tracking:** **Issue #8106** tracks a high volume of benchmark failures (47 non-passing tasks in the `officeqa` suite). These are currently classified as genuine model-quality errors rather than framework crashes, but represent a stability/quality concern for end-user task success rates.
*   **Resolved Bugs Today:** **PR #8102** successfully resolved a high-severity deployment blocker where enterprise-grade Google OAuth configurations via the Web UI silently failed during the final activation step. 

## 6. Feature Requests & Roadmap Signals
While no formal user feature requests were opened today, the project signals clear roadmap directions:
*   **Administrative Web UI Configuration:** The fix in **PR #8102** signals ongoing development to make deployment configurations (like Google OAuth) fully reliable when managed via the Web UI, moving towards more enterprise-friendly, env-var-free setups.
*   **Benchmark-Driven Development:** The continuous tracking of failure taxonomies (**Issue #8106**) indicates that model evaluation and benchmark optimization are standard, recurring roadmap items, guiding upcoming iterations on model integration quality.

## 7. User Feedback Summary
Direct user feedback is minimal in the tracked channels today (0 comments/reactions across items). However, the existing data points to key user pain points:
*   Users deploying IronClaw in enterprise environments faced blockers when configuring Google integrations via the UI rather than env vars (now resolved in **PR #8102**).
*   Performance expectations on complex agent tasks (like office Q&A benchmarks) remain a point of friction, highlighted by the detailed failure tracking in **Issue #8106**.

## 8. Backlog Watch
*   **Daily ironclaw failure taxonomy — 2026-09-21 ([Issue #8106](https://github.com/nearai/ironclaw/issues/8106)):** This open issue requires maintainer review of the 47 non-passing `officeqa` tasks. Developers need to classify these failures to determine if actionable framework fixes can convert some of these model errors into passes, or if they must be escalated to the underlying model provider (NearAI/DeepSeek).

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



Based on the GitHub activity data for **LobsterAI** (`netease-youdao/LobsterAI`) up to **2026-09-22**, here is the structured project digest.

---

### 1. Today's Overview
LobsterAI is experiencing a highly active development cycle, characterized by intense stability hardening, particularly around the OpenClaw gateway integration, legacy data migrations, and platform-specific fixes. In the last 24 hours, the project saw **15 merged/closed Pull Requests (PRs)** and **2 open issues/PRs**, demonstrating a rapid, responsive maintenance workflow. The focus is heavily on eliminating startup failures, resolving macOS/Windows pathing and process handling quirks, and refining background task scheduling. While developer velocity is high, user-facing feature requests regarding local performance bottlenecks (like gateway restart delays) remain key community focal points.

---

### 2. Releases
*   **No new releases** were published today. The project is currently in a stabilization and bug-fixing phase following recent major integrations.

---

### 3. Project Progress
The past 24 hours saw significant progress in stabilizing the application core, particularly the OpenClaw gateway, updater, and security layers. Key advancements include:

*   **Gateway & Migration Robustness:** Multiple fixes were merged to handle upgrades from older builds. PR [#2719](https://github.com/netease-youdao/LobsterAI/pull/2719) (and

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>



Based on the GitHub activity from the last 24 hours leading up to **2026-09-22**, here is the structured project digest for **Moltis** (`moltis-org/moltis`).

---

### 1. Today's Overview
Moltis is experiencing steady, focused development, primarily driven by community contributions targeting voice capabilities and core tool configuration robustness. Activity over the last 24 hours has been moderate, characterized by 2 open Pull Requests (PRs) and 2 issues (1 closed, 1 open). The project health is stable, showing healthy maintainer-consumer interaction where feature requests are quickly translated into concrete implementation PRs.

### 2. Releases
* **New Releases:** None. No new versions or tags were released in the last 24 hours.

### 3. Project Progress
* **Closed Issues:** Issue **#1281** (`[Feature]: VoxCPM as a local TTS provider`) was closed today, likely resolved or marked as a duplicate of the open issue **#1282**.
* **Active PRs (No merges today):**
  * **PR #1283** (`feat(voice): add VoxCPM as a local TTS provider`): Submitted by Caldalis, this PR implements local TTS support using the OpenBMB/VoxCPM model (Apache-2.0, 2B parameters, 30 languages, 48 kHz) served via vLLM-Omni’s OpenAI-compatible speech API. It aims to close the feature gap requested in the issues.
  * **PR #1280** (`fix(tools): preserve preset tools for empty active_tools`): Submitted by mikemikimike, this PR addresses a configuration bug (Issue #1277) where explicitly setting an empty `active_tools` array incorrectly overrides the preset's tool controls.

### 4. Community Hot Topics
* **Local TTS Provider Integration (Issues #1281, #1282 & PR #1283):**
  * **Underlying Need:** Users are heavily demanding local implementation for voice personas, highlighting a desire for offline functionality, data privacy, and lower latency. The current documentation (`docs/src/voice.md`) lacks local provider options. The proposed solution leverages the high-performance **VoxCPM** model integrated with **vLLM-Omni**, standardizing local speech synthesis under an OpenAI-compatible interface.
* **Tool Configuration Edge Case (PR #1280 / Issue #1277):**
  * **Underlying Need:** Developers require predictable behavior when dynamically managing agent capabilities. The current bug causes an explicitly empty `active_tools` array to wipe out preset allow/deny tool configurations, leading to unexpected capability drops during agent execution.

### 5. Bugs & Stability
* **Tool Control Override Bug (Issue #1277):**
  * **Severity:** Medium. This is a functional bug affecting the tool-binding capabilities of agents when presets are used.
  * **Fix Status:** A fix is actively being worked on in **PR #1280**, which scopes per-turn tool lists by preset policies and treats empty arrays as "no override." The PR is currently open and awaiting merge.

### 6. Feature Requests & Roadmap Signals
* **Local-First Voice Synthesis:** The push for integrating VoxCPM via vLLM-Omni signals that local TTS is a high-priority roadmap item. If merged, Moltis will support high-quality, multi-language (30 languages), offline voice synthesis out of the box.
* **Policy-Based Tool Presets:** The changes outlined in PR #1280 signal a roadmap shift towards more complex, policy-based tool gating (allow/deny lists per preset), allowing developers finer-grained control over agent capabilities.

### 7. User Feedback Summary
* **Pain Points:** Users have reported a lack of local voice synthesis providers, restricting the offline utility of voice personas. Additionally, silent tool override bugs when using empty tool lists have caused configuration drift in active agent workflows.
* **Sentiment:** Positive and constructive. Community members are actively submitting both feature requests and high-quality pull requests (such as PR #1280 and #1283) to solve identified pain points.

### 8. Backlog Watch
* **Issue #1282 (VoxCPM Feature Request):** Needs triage to confirm the closure of duplicate #1281 and coordinate the merging of PR #1283.
* **Issue #1277 (Preset Tool Override Bug):** Needs maintainer review and approval of the fix in **PR #1280** to ensure the patch does not introduce regressions in existing tool-binding logic.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) — Project Digest
**Date: 2026-09-22** · Repository: `github.com/agentscope-ai/CoPaw`

---

## 1. Today's Overview

Project activity is **high and healthy**, with 49 total items touched in the last 24 hours (17 issues, 32 PRs). The issue mix skews toward *stability work*: 9 of 17 issues were closed, and the majority of those closures are backed by same-day fix PRs (e.g., #7905 → #7906/#7919, #7907 → #7915). On the PR side, the merge/close rate is exactly 50% (16 of 32), and the closed set spans product features, dependency bumps, CI hardening, and a large test-coverage sprint (+3.28pp). Two notable themes emerge: **model/provider layer consolidation** (#7899, #6167, #5992) and **loop/runtime hardening** (DoomLoopGate, context compaction, Windows console isolation). The only concerning signal is a **security-flavored open issue (#7859, persistent prompt injection)** with the highest comment count of the day, which has no fix PR yet. No new releases were published.

**Activity assessment: HIGH.** Velocity is strong, but a security-class issue and several crash-level bugs remain open and warrant attention.

---

## 2. Releases

**No new releases in the last 24 hours.** The `Latest Releases` set is empty.

Note: versioning signals from issues/PRs indicate the project is in a `2.2.x` cycle (`2.2.1`, `2.2.2b1`, `2.2.2b3` appear in reports), and PR [#7913](https://github.com/agentscope-ai/QwenPaw/pull/7913) bumps AgentScope to `2.0.8` — a likely precursor to the next tagged build.

---

## 3. Project Progress

### Merged / Closed PRs (16)

**Runtime & correctness fixes**
- [#7919](https://github.com/agentscope-ai/QwenPaw/pull/7919) — `fix: require new tool-call evidence for doom loop escalation` (resolves #7905).
- [#7906](https://github.com/agentscope-ai/QwenPaw/pull/7906) — `fix(loop): prevent stale doom-loop escalation`; resets repetition state on text-only rounds.
- [#7915](https://github.com/agentscope-ai/QwenPaw/pull/7915) — `fix(responses): default function tools to non-strict mode` after schema sanitization (resolves #7907), with regression tests.

**Model / provider layer**
- [#7899](https://github.com/agentscope-ai/QwenPaw/pull/7899) — `feat(providers): unify model discovery, pricing, selection and thinking controls` — a substantial architectural consolidation.

**Console / UX**
- [#7846](https://github.com/agentscope-ai/QwenPaw/pull/7846) — session list detail & grouping improvements (frontend truncation, indicator consolidation).
- [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) — reranker UI config panel in `ReMeLightMemoryCard`.

**Engineering hygiene / CI / quality**
- [#7911](https://github.com/agentscope-ai/QwenPaw/pull/7911) — coverage sprint batch 3: **47 files, 2,720 cases**, `src/qwenpaw` coverage 70.51% → **73.79%**.
- [#7326](https://github.com/agentscope-ai/QwenPaw/pull/7326) — nightly E2E split into p0/p1/p2 shards + fail-closed summary.
- [#7803](https://github.com/agentscope-ai/QwenPaw/pull/7803) — enable `pytest-timeout`, raise per-shard timeout to 60 min.
- [#7918](https://github.com/agentscope-ai/QwenPaw/pull/7918) — remove 9 accidentally committed internal design docs (877 lines).
- [#7913](https://github.com/agentscope-ai/QwenPaw/pull/7913) — dependency bump: AgentScope → `2.0.8`.

**Interpretation:** The team is actively closing the loop between reported bugs and fixes at high speed. The dominance of *test/CI* work alongside *runtime fixes* suggests a stabilization phase ahead of a `2.2.x` release.

---

## 4. Community Hot Topics

Ranked by comment activity (reactions remain near-zero across the board, indicating a *workflow-driven* rather than *enthusiasm-driven* community).

| Rank | Item | Comments | Link |
|---|---|---|---|
| 1 | #7859 — Persistent prompt injection in tool-result system-reminders | **5** | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7859) |
| 2 | #7628 — Context compaction exceeds provider request budget | **4** | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7628) |
| 3 | #7905 — DoomLoopGate false TERMINATE *(closed)* | 3 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7905) |
| 4 | #3419 — JD Cloud Coding Plan session interruption | 3 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/3419) |
| 5 | #7431 — Codex backend empty responses *(closed)* | 3 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7431) |
| 6 | #4974 — Per-agent avatars *(closed, 👍2)* | 2 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/4974) |

**Underlying needs analysis:**
- The top two threads (#7859, #7628) both concern **agent-context integrity** — what the model *actually sees* and whether it fits in budget. Users are pushing on the deepest, least-visible layer of the stack.
- #7905/#7431 reflect **trust in agent control loops**: users want the runtime to not kill legitimate work and not silently produce empty turns.
- #4974 (avatars) is the lone *cosmetic/UX* ask — lower urgency but shows demand for multi-agent manageability.

---

## 5. Bugs & Stability

Ranked by severity. *Fix PR exists* is flagged where applicable.

### 🔴 Critical

**#7859 — Persistent prompt injection instructing agent to delete all skills** · [OPEN](https://github.com/agentscope-ai/QwenPaw/issues/7859) · 5 comments
> Injected instruction persists 20+ turns across sessions, appended to system-reminder/agent-skills blocks accompanying tool results. Source not found on local disk.
- **Why critical:** This is a **security/safety** class issue — the runtime is injecting (or failing to strip) attacker-controlled instructions, and the payload targets destructive action (delete all skills). No fix PR identified. **Needs maintainer escalation.**

**#7908 — Windows: child Console Ctrl event from `execute_shell_command` can terminate the host** · [OPEN](https://github.com/agentscope-ai/QwenPaw/issues/7908) · 1 comment
> A child process can emit a Console Ctrl event that propagates to the QwenPaw/Uvicorn server, killing the whole host rather than failing one tool call.
- **Fix PR exists:** [#7910](https://github.com/agentscope-ai/QwenPaw/pull/7910) — adds `CREATE_NO_WINDOW` to Windows flags.

### 🟠 High

**#7628 — Context compaction can still exceed the provider request budget** · [OPEN](https://github.com/agentscope-ai/QwenPaw/issues/7628) · 4 comments
> Compaction trigger/budget computed on *visible* context only, not the *complete* request, causing active turns to fail.

**#7905 — DoomLoopGate escalates to TERMINATE on a text-only round** · [CLOSED](https://github.com/agentscope-ai/QwenPaw/issues/7905) · 3 comments
> Terminates valid sessions without new tool-call evidence.
- **Fixed by** [#7906](https://github.com/agentscope-ai/QwenPaw/pull/7906) and [#7919](https://github.com/agentscope-ai/QwenPaw/pull/7919).

### 🟡 Medium

**#7841 — Desktop 2.2.1: Console UI loads before backend is ready** · [OPEN](https://github.com/agentscope-ai/QwenPaw/issues/7841) · 2 comments
> Model list and plugin panels stay blank until manual refresh on Windows 11 / WebView2.

**#3419 — JD Cloud Coding Plan: session interrupted mid-execution** · [OPEN](https://github.com/agentscope-ai/QwenPaw/issues/3419) · 3 comments · *open since 2026-04-15*
> Tool Guard approval appears, but `/approve` still interrupts the session; `Thinking → execute_shell_command` loop is cut.

**#7921 — `omp-roles` SKILL.md missing YAML frontmatter → skill silently unusable** · [OPEN](https://github.com/agentscope-ai/QwenPaw/issues/7921)
> Runtime registry skips the skill while the listing still displays it (silent inconsistency).
- **Fix PR exists:** [#7922](https://github.com/agentscope-ai/QwenPaw/pull/7922).

**#7916 — AgentScope Platform validator missing new `memory` plugin type** · [OPEN](https://github.com/agentscope-ai/QwenPaw/issues/7916)
> Validator not yet aware of QwenPaw `2.2.1b1` plugin type.

### 🟢 Resolved Today

- **#7907** — Responses API schema sanitization removed `nullable`, making `recall_history` optional dates un-omittable → fixed by [#7915](https://github.com/agentscope-ai/QwenPaw/pull/7915). [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7907)
- **#7431** — Codex harness empty responses / zero usage with non-streaming gateways → [CLOSED](https://github.com/agentscope-ai/QwenPaw/issues/7431).
- **#7882** — OpenCode "free" models fail with 403 FreeTierError while UI labels them free → [CLOSED](https://github.com/agentscope-ai/QwenPaw/issues/7882).
- **#7531** — OpenCode now requires `x-opencode-session` header → [CLOSED](https://github.com/agentscope-ai/QwenPaw/issues/7531).
- **#7866** — File-area tab shows stale pre-edit content after agent rewrites a file → [CLOSED](https://github.com/agentscope-ai/QwenPaw/issues/7866).

**Stability verdict:** Fix latency is excellent (several same-day resolutions), but the **open security issue #7859** and the **five-month-old #3419** are the two weakest points in the health picture.

---

## 6. Feature Requests & Roadmap Signals

| Item | Type | Status | Signal |
|---|---|---|---|
| [#6167](https://github.com/agentscope-ai/QwenPaw/issues/6167) — Model Provider Layer Optimization (umbrella, 7 improvements) | Enhancement | CLOSED | **Strongly aligned with merged [#7899](https://github.com/agentscope-ai/QwenPaw/pull/7899)** — dynamic context, model sync, multi-model fallback. Likely continuing into next version. |
| [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) — Per-session model overrides | Feature PR | OPEN (first-time contributor) | Directly complements #7899; strong candidate for next release if reviewed. |
| [#4974](https://github.com/agentscope-ai/QwenPaw/issues/4974) — Per-agent avatars | Enhancement | CLOSED | Console UX polish; may surface in an upcoming Console iteration. |
| [#5921](https://github.com/agentscope-ai/QwenPaw/issues/5921) — KaTeX math rendering in Console | Design proposal | CLOSED | Design confirmed before PR; expect a rendering PR soon. |
| [#7912](https://github.com/agentscope-ai/QwenPaw/issues/7912) — Optional authenticated MCP web-research example (Baizhi Agent Toolkit) | Docs | OPEN | Documentation expansion for MCP; contributor-driven. |
| [#7874](https://github.com/agentscope-ai/QwenPaw/pull/7874) — Redesign PawApp SDK & app control plane | Feature PR | OPEN | Largest architectural PR of the day (capability boundary, idempotent dispatch, recovery). |
| [#7923](https://github.com/agentscope-ai/QwenPaw/pull/7923) — Age out `tool_result` blocks via `blocks_retention_days` | Feature PR | OPEN | Directly addresses storage growth (~75% of bytes) — pairs conceptually with #7628. |
| [#7713](https://github.com/agentscope-ai/QwenPaw/pull/7713) — Telegram Rich Messages for Markdown tables | Feature PR | OPEN | Channel-parity work. |

**Prediction for the next version:** consolidation of the **model/provider layer** (#7899 + #5992 + #7920), **context/history lifecycle management** (#7923 + #7628), and **Console UX polish** (#7914, #7917, #7846). The PawApp control-plane redesign (#7874) is more likely a following-cycle item given its scope.

---

## 7. User Feedback Summary

**Pain points (by frequency):**
1. **Context/request budget failures** (#7628) — users hit hard failures mid-turn when the full provider request exceeds budget; compaction isn't accounting for the real payload.
2. **Control-loop distrust** (#7905, #7431) — the runtime either kills legitimate work or returns silent empty responses; users cannot distinguish "working" from "broken."
3. **Environment-specific session interruptions** (#3419, #7841) — cloud coding-plan gateways and desktop startup ordering produce broken or half-rendered sessions.
4. **Provider metadata drift** (#7882, #7531) — UI labels (e.g., "free" models) and API contracts (required headers) go stale, producing confusing 403s.
5. **Skill/plugin silent failures** (#7921) — a skill is *listed* but *not registered*, an especially frustrating class of bug because nothing errors.

**Use cases observed:** enterprise/cloud coding plans (JD Cloud, 火山方舟/agentplan gateways), desktop (Windows 11/WebView2), third-party agent backends (Codex, OpenCode), and multi-agent management (avatars, per-session models).

**Satisfaction signal:** Moderate-to-positive on responsiveness — multiple issues were fixed within a day, and contributors are actively submitting fix PRs (#7910, #7922, #7915). Dissatisfaction concentrates on **silent failures** and **environment-specific breakage**, which erode trust more than loud errors.

---

## 8. Backlog Watch

Items needing maintainer attention — long-lived or unaddressed despite importance:

| Item | Age | Concern | Link |
|---|---|---|---|
| **#3419** — JD Cloud session interruption | **Open since 2026-04-15 (~5 months)**, no linked PR | Long-standing environment bug; repeatedly updated but unresolved. | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/3419) |
| **#7859** — Persistent prompt injection | Open, highest-comment item, **no fix PR** | Security/safety class; requires owner assignment. | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7859) |
| **#7628** — Context compaction budget | Open since 2026-09-08, 4 comments | Blocks active turns; no linked PR. | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7628) |
| **#5992** — Per-session model overrides | Open since 2026-07-12, first-time contributor, "Under Review" | High-value feature PR at risk of stalling; aligns with #7899. | [PR](https://github.com/agentscope-ai/QwenPaw/pull/5992) |
| **#7713** — Telegram Rich Messages | Open since 2026-09-11 | Channel-parity feature awaiting review. | [PR](https://github.com/agentscope-ai/QwenPaw/pull/7713) |
| **#7841** — Desktop Console race at startup | Open since 2026-09-17 | Reproducible on a mainstream platform (Windows 11); no PR yet. | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7841) |

---

### Health Snapshot

| Metric | Value | Assessment |
|---|---|---|
| Issues closed / total touched | 9 / 17 | ✅ Strong |
| PRs merged or closed / total | 16 / 32 | ✅ Healthy |
| Same-day bug→fix coupling | ≥4 pairs | ✅ Excellent |
| Open security-class issues | 1 (#7859) | ⚠️ Needs escalation |
| Longest-open active bug | #3419 (~5 months) | ⚠️ Risk |
| New releases | 0 | ➖ Neutral |
| Test coverage delta | +3.28pp | ✅ Improving |

**Bottom line:** CoPaw is in a *stabilization-and-consolidation* phase with strong maintainer responsiveness and active community contribution. The two items to watch are the unresolved prompt-injection report (#7859) and the aging #3419, both of which sit outside the current fix pipeline.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



Based on the provided GitHub data for `zeroclaw-labs/zeroclaw` up to September 22, 2026, here is the structured project digest.

---

### 1. Today's Overview
ZeroClaw is experiencing high development activity, with 50 issues and 50 pull requests (PRs) updated in the last 24 hours. While no new releases were published today, the project is undergoing a significant push to harden security, expand WhatsApp Web capabilities, and fix critical runtime stability issues. The community is actively discussing architectural RFCs, particularly around multi-agent coordination and host-level resource management.

### 2. Releases
*   **No new releases** were published in the last 24 hours.

### 3. Project Progress
*   **Closed/Merged PRs (Recent Advances):**
    *   **OIDC Integration Merged:** PR #10255 (`feat(security): oidc.<alias> token-verification provider`) has been closed/merged, marking Stage 5 of the security hardening roadmap (#8289). This adds robust JWKS validation and RFC 9068 typed token support.
    *   **Matrix Voice Replies:** Issue #10925 was closed, implementing input-driven mirror voice replies on Matrix.
    *   **Provider Fallback Fix:** Issue #9812 was closed, resolving a bug where the fallback provider carried the primary's model ID, preventing it from ever firing.
    *   **ZeroCode Multi-Agent Sidebar:** Epic issue #9727 was closed, laying down design specs for monitoring multiple agents side-by-side.
*   **Active Feature PRs:**
    *   **WhatsApp Web Upgrade Suite:** A massive effort is underway to align WhatsApp Web with other channels. Active PRs include implementing native polls (#10984, #10988), `create_room`/`invite_user` (#10979), PDF previews (#10980), and image previews (#10982).
    *   **Security Hardening:** PR #10259 is actively advancing Stage 3 of RPC principal enforcement, enforcing authenticated principals on RPC calls.
    *   **Immediate Bug Fixes:** PRs are currently open to fix Qdrant vector search time-bounds (#11035), HTTP chunk decoding (#11031), and Git option scanning security (#11029).

### 4. Community Hot Topics
*   **Governance & Decision Tracking:** Issue #8692 (*Maintainer decision queue for RFCs and design issues*) is the most active thread with 15 comments. It represents the community's central hub for project governance and design approvals.
*   **Security Advisory Waivers:** Issue #9899 (*remove the matrix-sdk -> imbl advisory waivers*) has 6 comments and is a hot topic, prompting immediate chore PRs like #11038 to ignore specific double-free RUSTSEC advisories while upstream fixes are resolved.
*   **The RFC Wave on Architecture:** Several high-impact RFCs are gathering community focus:
    *   **Host-scoped admission control & per-agent resource bounds** (#10970): Discusses how to prevent machines running many agents from degrading in stability.
    *   **Durable human-in-the-loop primitives** (#10930): Standardizing how agents ask humans questions and wait for responses.
    *   **Delivery receipts for outbound messages** (#10929): Solving the issue of verifying if an outbound message actually arrived.
    *   **Agent-to-agent session messaging** (#11027): Establishing boundaries for direct agent-to-agent communication.

### 5. Bugs & Stability
Bugs are ranked by severity based on the issue tracker. Notably, several have active fix PRs in flight:
*   **S

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*