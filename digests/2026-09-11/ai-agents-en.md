# OpenClaw Ecosystem Digest 2026-09-11

> Issues: 426 | PRs: 500 | Projects covered: 13 | Generated: 2026-09-10 22:15 UTC

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

### OpenClaw Project Digest (2026-09-11)

#### 1. Today's Overview
OpenClaw shows exceptionally high activity with 426 issues and 500 PRs updated in the last 24 hours (242 open issues, 256 open PRs). One new release (v2026.6.35) was published, marking the final June 2026 Extended Stable (LTS) release focused on security hardening. The project maintains active development cycles with frequent beta releases (evidenced by ongoing v2026.8.x feedback) while addressing critical stability concerns in core subsystems like process management, SQLite handling, and Windows integration.

#### 2. Releases
- **v2026.6.35** (Published 2026-09-10):  
  Final June 2026 Extended Stable (LTS) release.  
  **Key Changes**: Enhanced security boundaries for providers and channel adapters—now bounding untrusted response bodies, rejecting oversized inputs pre-processing, and preserving safe recovery during transient failures.  
  **Migration Notes**: No breaking changes mentioned; positioned as drop-in update for June 2026 LTS users.  
  [Release Notes](https://github.com/openclaw/openclaw/releases/tag/v2026.6.35)

#### 3. Project Progress
- **244 PRs merged/closed** in the last 24 hours indicate robust development velocity.  
- **Notable advancements**:  
  - Windows gateway stability improvements (PR #140162-related work on process handling)  
  - iMessage bridge recovery fixes (PR #142626) restoring typing indicators/read receipts  
  - Prometheus metrics enhancement (PR #141276) exposing provider usage windows  
  - Credential management refinements (PRs #143781, #144329) addressing API-key persistence  
  - UI/UX polish: chat integration description limits (PR #144442), Side chat typography alignment (PR #144435)  
  [Merged PRs Overview](https://github.com/openclaw/openclaw/pulls?q=is%3Apr+is%3Amerged+updated%3A2026-09-10)

#### 4. Community Hot Topics
- **#125626** (24 comments, 👍0): [Closed] OpenClaw 2026.8.1 beta feedback – Main discussion thread for beta testing v2026.8.1, covering diverse user experiences pre-stable release.  
  [Link](https://github.com/openclaw/openclaw/issues/125626)
- **#91009** (22 comments, 👍2): [Open, P0] Codex PreToolUse hook relay spamming CPU-bound processes – Critical performance issue where Codex integration spawns runaway `openclaw-hooks` processes during tool calls, causing gateway RPC stalls.  
  [Link](https://github.com/openclaw/openclaw/issues/91009)
- **#97616** (15 comments, 👍1): [Open, P1] Unreaped hook/tool child process leaks – Persistent zombie accumulation degrading runtime over time, affecting `openclaw-hooks`, `bash`, and `codex` subprocesses.  
  [Link](https://github.com/openclaw/openclaw/issues/97616)
- **#114612** (13 comments, 👍0): [Open, P2] SQLite unbounded growth – Core memory tables (`memory_index_chunks`, `memory_embedding_cache`) lacking retention policies, risking disk exhaustion.  
  [Link](https://github.com/openclaw/openclaw/issues/114612)

*Underlying Needs*: Community prioritizes **stability** (process leaks, CPU spikes), **long-term operability** (database growth), and **beta quality** (feedback loops for upcoming releases).

#### 5. Bugs & Stability (Ranked by Severity)
**Critical (P0/Crash-Loop)**:  
- **#91009** (P0, crash-loop): Codex hook relay CPU runaway – *No fix PR visible; requires process lifecycle review*.  
- **#142585** (P0, session-state): Doctor blocking legacy workspace migration – *Impacts upgrades; needs backward-compatibility fix*.  
- **#140162** (P0, ux-release-blocker): Windows gateway restart killing slow-booting instances – *Fix likely in progress (Windows-focused PRs observed)*.  
- **#117262** (P1→P0-equivalent, crash-loop): SQLite contention causing 33s event-loop stalls – *High-impact concurrency bug; no linked fix PR*.  

**High (P1)**:  
- **#97616** (P1, crash-loop/message-loss): Zombie process leak – *Ongoing issue; needs reaper mechanism enhancement*.  
- **#136183** (P1, regression): SSH command executor hang – *Regression since 2026.8.1; requires timeout/banner-handling fix*.  
- **#143640** (P1, session-state): Memory index publish blocking DB writes – *Single transaction exceeding 5s busy_timeout; needs chunking*.  

*Fix Status*: Most critical bugs lack obvious linked fix PRs in today’s data, indicating triage/gap in resolution velocity for top-tier issues.  
[All Open P0/P1 Bugs](https://github.com/openclaw/openclaw/issues?q=is%3Aopen+is%3Aissue+label%3AP0+label%3AP1)

#### 6. Feature Requests & Roadmap Signals
- **#1285

---

## Cross-Ecosystem Comparison

# Strategic Analysis: AI Agent & Personal Assistant Ecosystem
**Report Date:** 2026-09-11

## 1. Ecosystem Overview
The open-source AI agent and personal assistant ecosystem is currently transitioning from "experimental prototyping" to a "production-grade infrastructure phase." While early projects focused on basic LLM wrappers, the current wave is aggressively prioritizing **multi-channel integration** (Telegram, Discord, WhatsApp), **local-first persistence**, and **robust security boundaries**. The landscape is characterized by a split between core reference frameworks that handle complex process lifecycle management and specialized implementations focusing on UI/UX and cross-platform stability (particularly Windows/macOS parity).

## 2. Activity Comparison Matrix

| Project | Active Issues (24h) | PRs Updated (24h) | Latest Release | Health Score* | Primary Focus |
| :--- | :---: | :---: | :--- | :---: | :--- |
| **OpenClaw** | 426 | 500 | v2026.6.35 (LTS) | 9/10 | Security hardening & Core stability |
| **NanoBot** | 3 | 23 | N/A | 7/10 | UI/UX & Channel integrations |
| **Hermes Agent** | 50 | 50 | v0.21.1 | 6/10 | Multi-profile architecture & Windows fixes |
| **PicoClaw** | 0 | 6 | N/A | 5/10 | Gateway logic & Dependency updates |
| **NanoClaw** | 0 | 6 | N/A | 7/10 | Setup hardening & Runner optimization |
| **IronClaw** | 1 | 8 | N/A | 6/10 | MCP isolation & Dependency hygiene |
| **CoPaw** | 28 | 36 | v2.2.1-beta.2 | 7/10 | Mobile UX & Session management |
| **ZeptoClaw** | 0 | 19 | N/A | 8/10 | Security audit & CI/CD hardening |
| **ZeroClaw** | 50 | 50 | N/A | 5/10 | Identity/Auth & Security stack |

*\*Health Score based on activity velocity, bug resolution speed, and stability.*

## 3. OpenClaw's Position
OpenClaw remains the **dominant core reference framework** in the ecosystem, exhibiting significantly higher development velocity (500 PRs updated in 24h). Unlike competitors focused on niche UI, OpenClaw is tackling the "hard problems" of agent orchestration: managing CPU-bound process hooks, SQLite contention, and security boundaries.
*   **Advantage:** Its move toward a formal LTS release (v2026.6.35) signals a maturity level that other "beta-heavy" projects lack.
*   **Bottleneck:** Despite high activity, the project is facing "P0" critical issues related to process leaks and SQLite stalls, suggesting the architecture is reaching its limits in current lifecycle management.

## 4. Shared Technical Focus Areas
Across the entire ecosystem, several critical requirements are emerging as industry-standard:
*   **Process Lifecycle & Stability:** Multiple projects (OpenClaw, Hermes, ZeroClaw) are struggling with "zombie" processes, unreaped hooks, and thread hangs.
*   **Multi-Tenancy/Isolation:** IronClaw, NanoBot, and CoPaw are all actively working to ensure that tool catalogs and memory are isolated per user/profile.
*   **Windows Parity:** A recurring pain point across Hermes, PicoClaw, and ZeroClaw is path mangling (backslashes) and process hangs.
*   **Security Hardening:** A clear shift away from simple API keys toward robust OIDC-based identity and secure memory boundaries (ZeptoClaw, OpenClaw).

## 5. Differentiation Analysis
*   **Orchestration vs. Interface:** **OpenClaw** and **Hermes** are deeply invested in the backend orchestration logic, whereas **NanoBot** and **CoPaw** are prioritizing the end-user experience (Mobile PWAs, Telegram UI polish).
*   **Deployment Strategy:** **NanoClaw** and **PicoClaw** are optimizing for headless/server deployments (systemd focus), while **Hermes** is heavily weighted toward desktop-first multi-profile usage.
*   **Identity Focus:** **ZeroClaw** and **OpenClaw** are differentiating themselves by building complex identity/auth stacks (RFC #8289), while others treat authentication as a secondary concern.

## 6. Community Momentum & Maturity
*   **High Momentum (Rapid Iteration):** **OpenClaw**, **Hermes**, and **CoPaw** are in a high-churn development cycle, responding to community feedback daily.
*   **Stabilizing Phase:** **ZeptoClaw** and **NanoClaw** are focusing on security audits and CI/CD reliability rather than new features.
*   **Maintenance/Lag:** **PicoClaw** and **ZeroClaw** show lower human velocity, primarily relying on automated dependency-driven updates or facing stalled backlogs.

## 7. Trend Signals
1.  **The "Silent Failure" Problem:** Users are increasingly frustrated by background tasks failing without logs. There is a massive market demand for better **agent observability**.
2.  **Cost-Aware Agents:** The emergence of "opt-in" memory flushing and skill reviews (PicoClaw, CoPaw) indicates users are becoming highly sensitive to LLM token costs.
3.  **The Rise of Multi-Channel:** The ecosystem is moving away from "bots in a terminal" toward "agents that live in your chat (Telegram/Discord)," requiring more sophisticated state synchronization across platforms.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-09-11
*Repository: [HKUDS/nanobot](https://github.com/HKUDS/nanobot)*

## 1. Today's Overview

NanoBot saw brisk development activity in the 24 hours leading to 2026-09-11: **23 pull requests** were updated (11 merged or closed, 12 still open) and **3 issues** were active (1 closed, 2 remaining open). No new releases were published. The closed work is heavily weighted toward UI/UX polish and channel integrations, while the open backlog contains several reliability and agent-memory guardrails that still need maintainer review. Overall project health appears active, but a small set of recurring themes—headless onboarding, silent background-task failures, and Dream memory growth—are drawing community attention.

## 2. Releases

No new releases today.

## 3. Project Progress

The following PRs were merged or closed in the last day, advancing both fixes and features:

- **WebUI layout & navigation**
  - [#5723](https://github.com/HKUDS/nanobot/pull/5723) — Aligned standalone page widths (Apps, Skills, Automations, Channels) with conversation views.
  - [#5725](https://github.com/HKUDS/nanobot/pull/5725) — Aligned chat footer icons with the conversation edge and fixed prompt-rail grouping.
  - [#5722](https://github.com/HKUDS/nanobot/pull/5722) — Refined sidebar hierarchy and selection feedback using rounded backgrounds and disclosure arrows.
  - [#5710](https://github.com/HKUDS/nanobot/pull/5710) — Reorganized projects and simplified sidebar navigation by giving projects a dedicated directory.

- **Channel integrations**
  - [#5711](https://github.com/HKUDS/nanobot/pull/5711) — Telegram channel now adapts command spellings (underscores vs. hyphens) locally.
  - [#5707](https://github.com/HKUDS/nanobot/pull/5707) — Telegram `/compact` and `/evaluator-prompt` commands are now routed correctly.
  - [#5573](https://github.com/HKUDS/nanobot/pull/5573) — MCP provider now refreshes expired OAuth tokens automatically across gateway restarts.

- **Core execution & TUI**
  - [#5708](https://github.com/HKUDS/nanobot/pull/5708) — Preserved UTF-8 characters across streaming `exec` output chunks.
  - [#5469](https://github.com/HKUDS/nanobot/pull/5469) — TUI now shows measured request context in the footer.

- **Issue resolution**
  - [#5647](https://github.com/HKUDS/nanobot/issues/5647) — Closed: fixed WebUI session-title generation when the frontend envelope lacked the webui flag.

## 4. Community Hot Topics

Because most PRs show zero comments/reactions, the hottest discussions are in open issues:

- **[#5726](https://github.com/HKUDS/nanobot/issues/5726) — "[bug] Startuo initial password?"**  
  A headless-server user cannot determine the WebUI password after installation. Pain point: onboarding friction for server deployments and unclear documentation around the bootstrap secret. A documentation fix PR [#5727](https://github.com/HKUDS/nanobot/pull/5727) was opened the same day.

- **[#5429](https://github.com/HKUDS/nanobot/issues/5429) — "AgentLoop does not retrieve exceptions from background tasks"**  
  Background tasks are discarded without retrieving results, so failures are silently swallowed. This is a reliability issue affecting post-turn consolidation, archival, title generation, and background commands. Fix PR [#5724](https://github.com/HKUDS/nanobot/pull/5724) is open.

- **[#5647](https://github.com/HKUDS/nanobot/issues/5647) — "fix(webui): session title not generated..."**  
  Already closed, but it had the most comments (2) and highlights subtle regression territory around `unifiedSession` mode and frontend envelope flags.

Underlying needs: better headless-setup guidance, stronger agent observability, and tighter regression coverage around session-title and unified-session behavior.

## 5. Bugs & Stability

| Severity | Item | Status | Fix PR |
|---|---|---|---|
| **High** | [#5726](https://github.com/HKUDS/nanobot/issues/5726) Headless WebUI login password is unclear / undocumented | Open | [#5727](https://github.com/HKUDS/nanobot/pull/5727) |
| **High** | [#5429](https://github.com/HKUDS/nanobot/issues/5429) Silent background-task exceptions in `AgentLoop` | Open | [#5724](https://github.com/HKUDS/nanobot/pull/5724) |
| **Medium** | [#5630](https://github.com/HKUDS/nanobot/pull/5630) Dream memory files/requests can grow unbounded after PR #5622 removed size cap | Open | Under review |
| **Medium** | [#5720](https://github.com/HKUDS/nanobot/pull/5720) Discord compaction sends duplicate messages even when progress is disabled | Open | Under review |
| **Medium** | [#5698](https://github.com/HKUDS/nanobot/pull/5698) OpenAI web-search toggle loses previously selected API type | Open | Under review |
| **Low–Medium** | [#5641](https://github.com/HKUDS/nanobot/pull/5641) iOS PWA tap and status-bar issues | Open | Under review |

Notable closed fixes today: [#5708](https://github.com/HKUDS/nanobot/pull/5708) (UTF-8 exec streaming), [#5707](https://github.com/HKUDS/nanobot/pull/5707) (Telegram command routing), [#5573](https://github.com/HKUDS/nanobot/pull/5573) (MCP OAuth refresh).

## 6. Feature Requests & Roadmap Signals

Open feature/enhancement PRs suggest the next release may include:

- **WebUI quality-of-life**
  - [#5602](https://github.com/HKUDS/nanobot/pull/5602) — Opt-in completion notification sound.
  - [#5641](https://github.com/HKUDS/nanobot/pull/5641) — iOS PWA fixes.
  - [#5710](https://github.com/HKUDS/nanobot/pull/5710) / [#5722](https://github.com/HKUDS/nanobot/pull/5722) — Sidebar and project navigation redesigns.

- **Channel & provider management**
  - [#5356](https://github.com/HKUDS/nanobot/pull/5356) — Improved channel setup flows, grouped catalog, localized copy, serialized installs.
  - [#5352](https://github.com/HKUDS/nanobot/pull/5352) — Model provider removal controls with dependency checks.

- **Automation & memory**
  - [#5620](https://github.com/HKUDS/nanobot/pull/5620) — Cron result delivery targets and batch archive lifecycle.
  - [#5702](https://github.com/HKUDS/nanobot/pull/5702) — Workspace-local override for the Archive consolidation prompt.

Likely near-term candidates: the WebUI sidebar/navigation refactor, iOS PWA fixes, and channel-setup redesign are all close to merge-ready given their dedicated PRs and recent activity.

## 7. User Feedback Summary

Real pain points reflected in today's data:

- **Headless deployment confusion**: Users installing on servers do not know how to authenticate the WebUI. The missing link is documentation for `channels.websocket.tokenIssueSecret`.
- **Silent failures**: Background tasks failing without logs is a classic observability gap that erodes trust in long-running agents.
- **Mobile UX**: iOS PWA-specific tap behavior and status-bar issues indicate users are running NanoBot as an installed mobile app.
- **Channel polish**: Discord and Telegram users notice command routing and message duplication issues, showing that multi-channel stability is still being tuned.
- **Memory safety**: Concern that Dream-managed memory files can grow unbounded signals operational anxiety for long-lived sessions.

Satisfaction appears mixed-to-positive: issues are being opened, but several have same-day fix PRs, suggesting responsive maintenance.

## 8. Backlog Watch

Items needing maintainer attention due to age or importance:

- **[#5429](https://github.com/HKUDS/nanobot/issues/5429)** — Open since 2026-08-18 (~24 days). A reliability issue with a ready fix in [#5724](https://github.com/HKUDS/nanobot/pull/5724); should be prioritized for review.
- **[#5356](https://github.com/HKUDS/nanobot/pull/5356)** — Open since 2026-08-12 (~30 days). Major WebUI channel-setup redesign; conflicts may need resolution.
- **[#5352](https://github.com/HKUDS/nanobot/pull/5352)** — Open since 2026-08-12 (~30 days). Provider removal controls; currently marked with conflicts.
- **[#5630](https://github.com/HKUDS/nanobot/pull/5630)** — Dream memory size guardrails; related to a recent regression from PR #5622 and worth merging before further memory incidents.

---

*Digest generated from 24h GitHub activity for HKUDS/nanobot as of 2026-09-11.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-09-11

## 1. Today's Overview
Hermes Agent shows **very high maintenance activity** with 50 issues and 50 PRs updated in the last 24 hours. The project is in active bug-fix mode: no new releases, but a heavy stream of patches targeting desktop stability (Windows hangs, plugin load failures), gateway reliability (session flush recovery, voice transcription stalls), cron/job scheduler correctness, and multi-profile session isolation. Three PRs were merged/closed today, all fixing concrete regressions. The backlog contains several P1/P2 bugs affecting core user flows (new session creation, plugin loading, Windows self-update), indicating a stabilization push rather than feature development.

## 2. Releases
**No new releases** published today. The latest version remains v0.21.1 (2026-09-07, commit `b1f003e18633`).

## 3. Project Progress — Merged/Closed PRs Today
| PR | Title | Area | Status |
|----|-------|------|--------|
| [#79839](https://github.com/NousResearch/hermes-agent/pull/79839) | `fix(guardrails): loop-detect read-only shell commands in terminal` | agent/guardrails | **Closed** |
| [#107729](https://github.com/NousResearch/hermes-agent/pull/107729) | `fix(dashboard): eager session-store reconcile opens read-only to avoid concurrent FTS rebuilds` | dashboard/sessions | **Closed** (fixes #107688) |
| [#107594](https://github.com/NousResearch/hermes-agent/pull/107594) | `Experiment: Fullscreen flashcard takeover for SRS review` | desktop/SRS | **Closed** (experiment) |

**Key advances:**  
- Dashboard no longer triggers concurrent FTS-rebuild corruption at startup (read-only acquire).  
- Terminal tool now detects and breaks runaway read-only command loops (517 iterations observed in wild).  
- SRS flashcard fullscreen experiment closed — may reappear as opt-in feature.

## 4. Community Hot Topics (Most Commented Issues/PRs)
| Item | Comments | Type | Core Need |
|------|----------|------|-----------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) Skills index stale/degraded (192) | 192 | Bug (automation) | **CI/CD health**: Skills Hub index rebuild cron (6/18 UTC) falling behind; blocks documentation freshness. |
| [#88584](https://github.com/NousResearch/hermes-agent/issues/88584) Nous integration blocked (85) | 85 | Integration | **Upstream merge conflict** in `cron/jobs.py` halts scheduled Nous→Enterkey sync; dashboard pinned to last known-good release. |
| [#84361](https://github.com/NousResearch/hermes-agent/issues/84361) Desktop MEDIA file links dead (8) | 8 | Bug (desktop) | **File:// URL construction broken** — tag regex eats trailing markdown; path never logged, silent failure. |
| [#102792](https://github.com/NousResearch/hermes-agent/issues/102792) New session from project sidebar loses owner metadata (8) | 8 | Bug (desktop, P1) | **Multi-profile regression**: “+” button creates backend session but drops profile route → immediate “Couldn’t open this session”. |
| [#107288](https://github.com/NousResearch/hermes-agent/issues/107288) Module cycle breaks all runtime plugins (7) | 7 | Bug (desktop, P1) | **Post-refactor regression** (#107212): `sdk/index.ts` cycle causes `Cannot convert undefined or null to object` on every disk plugin load. |

**Underlying themes:**  
- **Desktop multi-profile architecture** is fragile (session routing, plugin loading, cron scoping).  
- **Automated maintenance pipelines** (skills index, Nous sync) need observability/alerting.  
- **Windows-specific pathologies** (process hangs, path mangling, self-update false failures) consume disproportionate debugging time.

## 5. Bugs & Stability — Today’s Reports (Ranked by Severity)
| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **P1** | [#102792](https://github.com/NousResearch/hermes-agent/issues/102792) | New session via project sidebar “+” loses all owner metadata on multi-profile installs | No |
| **P1** | [#107288](https://github.com/NousResearch/hermes-agent/issues/107288) | Module cycle after #107212 breaks **every** runtime (disk) plugin on desktop | No |
| **P1** | [#103786](https://github.com/NousResearch/hermes-agent/issues/103786) | Windows: gateway-retry loop blocks Electron main thread → AppHangB1 → dead WS with 900 KB unread | No |
| **P1** | [#107688](https://github.com/NousResearch/hermes-agent/issues/107688) | Dashboard unconditional writable `SessionDB` open at startup exposes concurrent FTS-rebuild corruption | **Yes** ([#107729](https://github.com/NousResearch/hermes-agent/pull/107729) merged) |
| **P2** | [#84361](https://github.com/NousResearch/hermes-agent/issues/84361) | Desktop `MEDIA:` file links dead — regex absorbs trailing markdown, `file://` built by string concat | No |
| **P2** | [#32047](https://github.com/NousResearch/hermes-agent/issues/32047) | Agent-browser leaves 200+ orphaned Chrome processes on Windows | No |
| **P2** | [#65094](https://github.com/NousResearch/hermes-agent/issues/65094) | Custom Codex-compatible `/v1` providers omit Hermes session headers | No |
| **P2** | [#100855](https://github.com/NousResearch/hermes-agent/issues/100855) | Browser daemons from `browser_exec`/`real-profile` lanes lack `AGENT_BROWSER_SOCKET_DIR` → invisible to reaper | No |
| **P2** | [#107559](https://github.com/NousResearch/hermes-agent/issues/107559) | Cron `run` re-fire permanently blocked by stale in-memory firing lock after manual run | No |
| **P2** | [#107666](https://github.com/NousResearch/hermes-agent/issues/107666) | Desktop cron lists jobs cross-profile (`profile=all`) but saves with active profile → 404 “Job not found” | No |
| **P2** | [#107606](https://github.com/NousResearch/hermes-agent/issues/107606) | `model.context_length` pin dropped on gateway paths when provider URL lives in `providers.<name>` block | No |
| **P2** | [#107656](https://github.com/NousResearch/hermes-agent/issues/107656) | Nous FAL gateway returns HTTP 409 idempotency conflict for GPT Image 2.5 Flare | No |
| **P3** | [#37632](https://github.com/NousResearch/hermes-agent/issues/37632) | `hermes -z` one-shot crashes with SIGABRT (exit 134) on exit: Honcho memory daemon threads blocked in httpx I/O | No |
| **P3** | [#43073](https://github.com/NousResearch/hermes-agent/issues/43073) | `.sh` cron scripts fail on Windows — bash receives mangled backslash paths | No |
| **P3** | [#107685](https://github.com/NousResearch/hermes-agent/issues/107685) | Windows self-update reports healthy install as FAILED (exit 8) on the run that carries its own verify fix | No |
| **P3** | [#107664](https://github.com/NousResearch/hermes-agent/issues/107664) | Context engine selector offers “default”/“custom” — no engine implements them, silent fallback + bogus warning | No |

**Notable open fix PRs (not yet merged):**
- [#105323](https://github.com/NousResearch/hermes-agent/pull/105323) — Bot Chat session lookup scoped to target profile home  
- [#106112](https://github.com/NousResearch/hermes-agent/pull/106112) — Gateway shutdown-flush recovery resolves `session_key` → `session_id`  
- [#107738](https://github.com/NousResearch/hermes-agent/pull/107738) — Gateway surfaces/log voice auto-transcription failures instead of stalling  
- [#107735](https://github.com/NousResearch/hermes-agent/pull/107735) — Stop routing loopback/LAN endpoints through proxy (fixes Ollama connect errors)  
- [#107731](https://github.com/NousResearch/hermes-agent/pull/107731) — Perf: project stale tool results out of request instead of re-sending  
- [#107747](https://github.com/NousResearch/hermes-agent/pull/107747) — WhatsApp: map html/txt/csv media to real MIME types  
- [#76882](https://github.com/NousResearch/hermes-agent/pull/76882) — Scope Camofox caches by profile (security/isolation)  

## 6. Feature Requests & Roadmap Signals
| Issue | Signal | Likelihood for Next Version |
|-------|--------|-----------------------------|
| [#107544](https://github.com/NousResearch/hermes-agent/issues/107544) | Desktop composer model picker: add “Use profile default / unpin” action (pinned model stored in localStorage, no UI to clear) | **High** — small UX fix, clear user pain |
| [#107700](https://github.com/NousResearch/hermes-agent/issues/107700) | Secrets: `source-apply` should hydrate process env for tool credentials, wrap for HTTP inject (disentangle two secret systems) | **Medium** — architectural cleanup, needs design consensus |
| [#107647](https://github.com/NousResearch/hermes-agent/issues/107647) | `create_swarm` / `SwarmWorkerSpec` should pass `goal_mode` / `goal_max_turns` to worker cards (kanban goal loop already supports it) | **High** — completes existing feature, low risk |
| [#107681](https://github.com/NousResearch/hermes-agent/issues/107681) | Desktop project switcher: dropdown of existing profiles (typo spawns live agent) + fleet view | **Medium** — prevents accidental profile sprawl, UI work |
| [#16106](https://github.com/NousResearch/hermes-agent/issues/16106) | Gateway: first-visible-commitment SLO + provider timing trace for turns | **Low** — observability investment, not urgent |
| [#103259](https://github.com/NousResearch/hermes-agent/issues/103259) | Desktop: allow remote server (currently requires local instance) | **Medium** — frequent request, architectural change (closed today but may reopen) |

## 7. User Feedback Summary — Real Pain Points
| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Multi-profile desktop is broken** | #102792 (new session loses metadata), #107666 (cron cross-profile 404), #107681 (typo spawns profile) | Users cannot reliably switch/manage profiles; new sessions fail silently |
| **Plugin ecosystem unstable on desktop** | #107288, #107721 (all runtime plugins fail after update) | Third-party / disk plugins unusable; only bundled plugins work |
| **Windows experience degraded** | #103786 (main thread hang), #32047 (orphan Chrome), #43073 (bash path mangling), #107685 (false update failure) | Windows users hit hard hangs, process leaks, update anxiety |
| **Gateway reliability gaps** | #78972 (Signal typing indicator missing), #106112 (flush recovery), #107738 (voice transcription stall) | Message delivery appears frozen; no visibility into provider latency |
| **Documentation/build automation drift** | #66616 (skills index 29.8h stale), #88584 (Nous merge blocked) | Contributors/docs consumers see stale data; integration pipeline fragile |
| **Secret management confusion** | #107698, #107700 (two systems taught as one) | Users misconfigure credentials; security boundary unclear |

## 8. Backlog Watch — Long-Unanswered Important Items
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#32047](https://github.com/NousResearch/hermes-agent/issues/32047) Orphaned Chrome processes on Windows | Since 2026-05-25 (109 days) | Resource leak affects all Windows browser-tool users; no fix PR |
| [#37632](https://github.com/NousResearch/hermes-agent/issues/37632) `hermes -z` SIGABRT on exit (Honcho threads) | Since 2026-06-02 (101 days) | One-shot CLI mode crashes every run; blocks automation/CI use |
| [#43073](https://github.com/NousResearch/hermes-agent/issues/43073) `.sh` cron scripts fail on Windows (backslash mangling) | Since 2026-06-09 (94 days) | Blocks cron on Windows; marked duplicate but root cause unaddressed |
| [#16106](https://github.com/NousResearch/hermes-agent/issues/16106) Gateway first-visible-commitment SLO | Since 2026-04-26 (138 days) | UX gap: users stare at blank typing indicator during provider latency spikes |
| [#65094](https://github.com/NousResearch/hermes-agent/issues/65094) Custom Codex providers omit session headers | Since 2026-07-15 (58 days) | Breaks session continuity for Codex Pooler / compatible providers |
| [#76882](https://github.com/NousResearch/hermes-agent/pull/76882) Scope Camofox caches by profile (PR open since 2026-08-02) | 40 days open | Security/isolation fix for multi-profile browser sessions; narrowed per maintainer request but not merged |
| [#80022](https://github.com/NousResearch/hermes-agent/pull/80022) Lazy-install must not disable importable SDK (PR open since 2026-08-06) | 36 days open | Web plugin SDK availability contract inverted; causes flaky tests |
| [#97518](https://github.com/NousResearch/hermes-agent/pull/97518) Restore `sys.modules`/`sys.path` after test mutations (15 order-dependent failures) | Since 2026-08-28 (14 days) | Test suite reliability; blocks kanban test CI |

---

**Overall Health Assessment:**  
🟡 **Stabilization Phase** — High velocity on bug fixes, but critical P1 regressions in desktop multi-profile and plugin loading remain open. Windows platform debt is accumulating. No feature work merging; roadmap signals point to UX polish (unpin model, profile dropdown) and swarm/kanban completeness. Recommended: prioritize merging the three P1 desktop fixes (#102792, #107288, #103786) and the Windows self-update false-failure (#107685) before next release cut.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest – 2026‑09‑11**  

---

### 1. Today's Overview  
The repository showed modest activity in the last 24 hours: two issues were touched (one closed as stale, one still open) and six pull‑requests received updates, all of which remain open. No new releases were published. Overall, the project is in a maintenance‑oriented state with dependency bumps awaiting review and a couple of lingering bugs needing investigation.

### 2. Releases  
*No new releases were recorded today.*

### 3. Project Progress  
- **Merged/Closed PRs:** None of the six PRs updated today have been merged or closed; they are all still open.  
- **What’s advancing:** The dependabot‑initiated dependency bumps (AWS SDK, IRC library, Go term, protobuf, Larksuite OAPI) are progressing toward readiness but await maintainer review.  
- **Bug‑fix work:** PR #3376 directly addresses the deltachat config‑validation error highlighted in closed issue #3265, proposing to register deltachat as a custom channel to bypass the unknown‑type error.

### 4. Community Hot Topics  
| Item | Comments | Reactions | Link | Why it’s hot |
|------|----------|-----------|------|--------------|
| **Issue #3265** – *Gateway startup fails with ‘channel deltachat has unknown type deltachat’* (closed, stale) | 6 | 👍 1 | [#3265](https://github.com/sipeed/picoclaw/issues/3265) | Users hit a misleading validation error even when deltachat is not configured; the discussion revealed a config‑loading bug that many encountered. |
| **Issue #3349** – *QQ频道无法正常使用* (QQ channel fails with 401 auth error) | 4 | 👍 0 | [#3349](https://github.com/sipeed/picoclaw/issues/3349) | Reports of authentication failure across Docker and Linux builds indicate a broader integration issue with the QQ channel. |
| PR #3376 – *fix(deltachat): initialize as custom channel* | 0 (comment count not shown) | 👍 0 | [#3376](https://github.com/sipeed/picoclaw/pull/3376) | Directly ties to the top‑voted issue; the fix is simple and likely to be merged quickly once reviewed. |

*Underlying need:* Users expect channels to be optional and not cause startup failures when absent, and they need reliable authentication flows for popular platforms like QQ.

### 5. Bugs & Stability  
| Severity | Description | Linked Item | Fix PR? |
|----------|-------------|-------------|---------|
| **High** | QQ channel returns `code:401` – Authorization header format error, preventing the gateway from working. | Issue #3349 | No PR yet; needs investigation of token handling/header construction. |
| **Medium** | Config validator rejects a non‑existent deltachat channel, emitting “unknown type deltachat”. | Issue #3265 (closed) | PR #3376 offers a fix; awaiting review/merge. |
| **Low** | Stale label on older issues indicates low triage priority; no immediate crash risk. | — | — |

### 6. Feature Requests & Roadmap Signals  
No explicit feature requests appeared in the latest activity. The ongoing dependency updates suggest the project is keeping its toolchain current, which often precedes new feature work (e.g., adding support for newer APIs). Expect the next version to incorporate the bumped libraries once the dependabot PRs are merged.

### 7. User Feedback Summary  
- **Pain points:**  
  - Misleading error messages when a channel is not configured (deltachat).  
  - Authentication failures with the QQ channel, affecting both Docker and native Linux deployments.  
- **Use cases:** Users run PicoClaw as a gateway for multiple chat platforms; they rely on predictable startup behavior and stable third‑party integrations.  
- **Satisfaction:** The quick community response to the deltachat issue (PR submitted within a day) shows responsiveness; the unresolved QQ issue creates frustration for those needing that channel.  
- **Dissatisfaction:** Lack of maintainer feedback on the open QQ bug and the backlog of dependabot PRs may signal slower triage for non‑critical updates.

### 8. Backlog Watch  
- **Issue #3349** (QQ channel 401 error) – open, stale, no maintainer comment; high impact for users needing QQ integration.  
- **Dependabot PRs** (#3360‑#3366) – all open, awaiting review; merging them will keep the project secure and up‑to‑date.  
- **PR #3376** – fix for deltachat validation; low effort, high readiness; should be prioritized to close the related issue.  

*Actionable insight:* Maintainers should triage the QQ channel bug (perhaps requesting logs or a minimal reproducer) and progress the dependabot updates to reduce dependency debt, while quickly merging PR #3376 to resolve the deltachat startup confusion.  

---  

*All links point to the specific GitHub items referenced above.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest: 2026-09-11

## 1. Today's Overview
NanoClaw shows high technical activity over the last 24 hours, focusing primarily on hardening the installation process and optimizing core agent-runner performance. The team successfully resolved a critical edge case related to host verification in non-standard systemd environments (nohup-started hosts). While no new releases were tagged today, the merging of three high-impact architectural and bug fixes indicates a healthy development cycle aimed at improving stability and refining the operator experience during the setup phase.

## 2. Releases
*No new releases reported in the last 24 hours.*

## 3. Project Progress
The project processed 6 Pull Requests today, with a significant focus on the core runner and setup logic:

*   **Setup Verification Fix (#3760):** Resolved an issue where the `verify` command failed to recognize hosts started via `nohup` wrappers when `systemd` user instances were unreachable. [PR #3760](https://github.com/nanocoai/nanoclaw/PR/3760)
*   **Agent Runner Optimization (#3708):** Swapped SQLite PRAGMA ordering. By setting `busy_timeout` before `journal_mode`, the system avoids deadlocks when the journal mode attempts an exclusive file lock. [PR #3708](https://github.com/nanocoai/nanoclaw/PR/3708)
*   **Admission Gate Feature (#3707):** Introduced a `registerAdmissionGate` poll-loop in the agent-runner. This allows the system to evaluate admission criteria earlier in the message polling cycle, improving efficiency. [PR #3707](https://github.com/nanocoai/nanoclaw/PR/3707)

## 4. Community Hot Topics
Activity today was centered on refining the "Operator" experience and ensuring file system integrity:

*   **Setup UX Refinement (#3758):** There is active work to prevent "portal reminders" from repeating questions that the operator has already answered (e.g., sandbox image sources). This highlights a need for smarter onboarding flows. [PR #3758](https://github.com/nanocoai/nanoclaw/PR/3758)
*   **Symlink Snapshotting (#3689):** An ongoing effort to ensure that symlinked mutable roots snapshot the target content rather than just the link, which is vital for data consistency in snapshots. [PR #3689](https://github.com/nanocoai/nanoclaw/PR/3689)

## 5. Bugs & Stability
*   **[CLOSED] Verification Failure (#3759):** A bug where `verify` reports reported `SERVICE: not_found` on hosts running under `nohup`. This was addressed by PR #3760. [Issue #3759](https://github.com/nanocoai/nanoclaw/issue/3759)
*   **[OPEN] Environment Variable Leak (#3757):** A fix to prevent environment variables from "inventing" channels during tests if they aren't actually configured. Currently under review. [PR #3757](https://github.com/nanocoai/nanoclaw/PR/3757)

## 6. Feature Requests & Roadmap Signals
*   **Admission Control:** The addition of `registerAdmissionGate` suggests a roadmap moving toward more granular control over which messages/tasks are processed by the agent runner.
*   **Improved Onboarding:** The focus on "portal reminders" indicates the project is prioritizing a more polished, less repetitive setup experience for end-users.

## 7. User Feedback Summary
*   **Onboarding Friction:** Feedback (reflected in PR #3758) suggests operators find the current setup repetitive if the system asks for information already provided in previous steps.
*   **Environment Diversity:** The issue with `nohup`-started hosts indicates that users are deploying NanoClaw in diverse environments where standard systemd user instances might not be available, signaling a need for more robust environment detection.

## 8. Backlog Watch
*   **PR #3689 (Snapshot symlinked mutable roots):** Needs review to ensure internal symlinks aren't broken while the root is snapshotted.
*   **PR #3757 (Credential env vars):** Important fix to ensure test suite reliability and prevent false positives in CI/CD.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-09-11

## 1. Today’s Overview
IronClaw showed low-to-moderate maintenance activity in the 2026-09-11 reporting window: 8 PRs were updated (6 open, 2 closed/merged), 1 open issue was active, and there were no new releases. Most PR traffic was dependency automation — 5 of 8 PRs were bot-driven dependency bumps — while 2 functional bug-fix PRs targeted WebUI IME handling and hosted-MCP multi-caller isolation. One Telegram feature PR moved to closed, suggesting a small UX improvement landed or was resolved. There were no high-comment or high-reaction threads in the snapshot, so community engagement is not measurable from this data. Overall project health looks active on maintenance and dependency hygiene, but human feature velocity in this window was limited.

## 2. Releases
No new releases in the reporting window. Latest releases: none.

## 3. Project Progress
Closed PRs updated today (exact merge state not specified by the snapshot):

- [#8072 feat(telegram): register the Bot API command menu at activation](https://github.com/nearai/ironclaw/pull/8072) — closed after being updated on 2026-09-10. This PR registers Telegram’s chat menu commands — `/model`, `/status`, `/new`, `/stop`, `/interrupt` — via the Bot API `setMyCommands` at extension activation, and clears them best-effort via `deleteMyCommands` at deactivation. This advances Telegram channel discoverability and command UX.
- [#8080 chore(deps): bump the everything-else group across 1 directory with 21 updates](https://github.com/nearai/ironclaw/pull/8080) — closed after being updated on 2026-09-10. It appears to be superseded by the newer [#8097](https://github.com/nearai/ironclaw/pull/8097), which carries 24 updates.

Open work advancing the project:

- [#8090 fix(mcp): key discovered hosted-MCP catalogs per caller, not per extension](https://github.com/nearai/ironclaw/pull/8090) — open, high-impact fix for per-caller MCP catalog isolation.
- [#8092 fix(webui): preserve IME composition in the chat composer](https://github.com/nearai/ironclaw/pull/8092) — open, WebUI input correctness fix.
- [#8097 chore(deps): bump the everything-else group with 24 updates](https://github.com/nearai/ironclaw/pull/8097) — open Rust dependency group update.

## 4. Community Hot Topics
No Issues or PRs in the snapshot had recorded comments or reactions; PR comment counts were listed as `undefined`, and the single issue had 0 comments and 0 👍. Therefore, there are no true “hot topics” by engagement metrics.

Most active items by update recency and impact:

- [#8093 Daily ironclaw failure taxonomy — 2026-09-10](https://github.com/nearai/ironclaw/issues/8093) — open issue, 0 comments, 0 reactions. Analyzes an officeqa run with 42 non-pass tasks, described as overwhelmingly genuine model errors from DeepSeek-V4-Flash navigation.
- [#8090 fix(mcp): key discovered hosted-MCP catalogs per caller, not per extension](https://github.com/nearai/ironclaw/pull/8090) — high-impact multi-tenant correctness fix.
- [#8092 fix(webui): preserve IME composition in the chat composer](https://github.com/nearai/ironclaw/pull/8092) — user-facing input compatibility fix.
- [#8072 feat(telegram): register the Bot API command menu at activation](https://github.com/nearai/ironclaw/pull/8072) — closed Telegram UX feature.

Underlying needs: benchmark observability and failure classification, multi-tenant isolation for hosted MCP tools, robust IME support for non-Latin input, Telegram command discoverability, and ongoing dependency currency.

## 5. Bugs & Stability
Ranked by severity based on available data:

1. **High — hosted-MCP catalog overwrite across callers**  
   [#8090 fix(mcp): key discovered hosted-MCP catalogs per caller, not per extension](https://github.com/nearai/ironclaw/pull/8090)  
   On a hosted-MCP server whose tool list depends on credentials, users can overwrite each other’s tools because the discovered catalog is published per extension ID in one shared slot. This is a multi-tenant correctness and potential security/isolation issue. A fix PR is open.

2. **Moderate — WebUI IME composition regression**  
   [#8092 fix(webui): preserve IME composition in the chat composer](https://github.com/nearai/ironclaw/pull/8092)  
   Native IME composition keys are not consistently left to the browser before command-menu handling and Enter-to-send. The PR also handles Safari’s `keyCode 229` behavior when `isComposing` is false. A fix PR is open.

3. **Informational — benchmark/model failure taxonomy**  
   [#8093 Daily ironclaw failure taxonomy — 2026-09-10](https://github.com/nearai/ironclaw/issues/8093)  
   Reports 42 non-pass officeqa tasks, described as mostly genuine model errors from DeepSeek-V4-Flash navigation. This is a quality/observability signal rather than a crash or product regression.

4. **Dependency risk / maintenance**  
   [#8097](https://github.com/nearai/ironclaw/pull/8097), [#8096](https://github.com/nearai/ironclaw/pull/8096), [#8094](https://github.com/nearai/ironclaw/pull/8094), [#8095](https://github.com/nearai/ironclaw/pull/8095)  
   Open dependency bumps for Rust, Vitest, js-yaml, and baseline-browser-mapping. No explicit regressions reported, but they require CI and review.

No crashes or new production regressions were reported in this snapshot beyond the MCP and IME issues.

## 6. Feature Requests & Roadmap Signals
No direct user-requested features are present in the data. The strongest roadmap signal is the closed Telegram feature:

- [#8072 feat(telegram): register the Bot API command menu at activation](https://github.com/nearai/ironclaw/pull/8072) — adds Telegram command menu registration and cleanup at activation/deactivation.

Likely next-version or next-patch candidates based on open work:

- Hosted-MCP per-caller catalog isolation via [#8090](https://github.com/nearai/ironclaw/pull/8090).
- WebUI IME composition fix via [#8092](https://github.com/nearai/ironclaw/pull/8092).
- Rust dependency group update via [#8097](https://github.com/nearai/ironclaw/pull/8097).
- Telegram command menu behavior if not already fully released.
- Continued benchmark failure taxonomy reporting via [#8093](https://github.com/nearai/ironclaw/issues/8093).

## 7. User Feedback Summary
There were no direct user comments or reactions in the snapshot, so satisfaction/dissatisfaction cannot be measured quantitatively.

Inferred user pain points from PR and issue descriptions:

- **IME users**: Chat composer handling can interfere with native IME composition, especially around Enter-to-send and Safari behavior. This affects users typing with input methods.
- **Hosted-MCP users**: When tool lists depend on credentials, users may see each other’s tools overwritten, indicating a multi-tenant isolation pain point.
- **Telegram users**: Command discoverability was limited before the command menu registration work in [#8072](https://github.com/nearai/ironclaw/pull/8072).
- **Benchmark/model quality**: [#8093](https://github.com/nearai/ironclaw/issues/8093) reports genuine model errors in officeqa, suggesting ongoing evaluation of model navigation reliability rather than a direct user complaint.

Overall sentiment is not assessable from this data due to missing comment/reaction signals.

## 8. Backlog Watch
No very long-stale items appear in this 24-hour window, but several open items need maintainer attention:

- [#8090 fix(mcp): key discovered hosted-MCP catalogs per caller, not per extension](https://github.com/nearai/ironclaw/pull/8090) — open since 2026-09-08, highest-impact open PR, no recorded comments. This is the strongest backlog-watch candidate because it addresses cross-user tool overwrites.
- [#8092 fix(webui): preserve IME composition in the chat composer](https://github.com/nearai/ironclaw/pull/8092) — open since 2026-09-10, user-facing input fix awaiting review.
- [#8097 chore(deps): bump the everything-else group with 24 updates](https://github.com/nearai/ironclaw/pull/8097) — open dependency group PR; likely supersedes closed [#8080](https://github.com/nearai/ironclaw/pull/8080).
- [#8093 Daily ironclaw failure taxonomy — 2026-09-10](https://github.com/nearai/ironclaw/issues/8093) — open issue with 0 comments; may need maintainer triage if benchmark failures require action.
- [#8096](https://github.com/nearai/ironclaw/pull/8096), [#8094](https://github.com/nearai/ironclaw/pull/8094), [#8095](https://github.com/nearai/ironclaw/pull/8095) — smaller dependency PRs awaiting routine review.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest
**Date:** September 11, 2026

## 1. Today's Overview
LobsterAI saw high development activity in the last 24 hours, characterized by **13 Pull Requests processed** (10 merged/closed). The focus was heavily centered on stabilizing the **OpenClaw** gateway, specifically addressing critical migration bugs encountered after an upgrade to v2026.8.1. There is also significant progress toward optimizing token costs by moving high-consumption AI features to an "opt-in" model. The project remains active with a clear focus on refining configuration synchronization and UI responsiveness.

## 2. Releases
*No new releases were published in the last 24 hours.*

## 3. Project Progress
The team successfully merged 10 PRs today, focusing on gateway stability and configuration efficiency:

*   **Gateway & Migration Stability:**
    *   [PR #2649]: Fixed gateway startup state migrations to prevent the gateway from exiting after successful session/workspace migrations- �
    *   [PR #2642]: Unblocked legacy session migration where duplicate headers in SQLite were causing archival processes to fail.
    *   [PR #2647]: Implemented "quarantine" logic for corrupt (NUL-byte) workspace attestations that were blocking startup on Windows.
*   **Configuration & Performance:**
    *   [PR #2648]: Deduplicated redundant gateway restarts during IM (Instant Messaging) updates and switched MCP config to native OpenClaw hot-reloading.
    *   [PR #2644]: Eliminated "false restart" screens during config sync by properly waiting for actual readiness probes.
*   **UI/UX Enhancements:**
    *   [PR #2646]: Moved date filtering for scheduled task history to the local renderer to avoid unsupported parameter errors in the gateway API.
    *   [PR #2645]: Fixed a Windows-specific UI bug where an overlapping status pill blocked clicks on engine-startup failure dialog buttons.
*   **Feature & Cost Management:**
    *   [PR #2643]: **New Feature:** Added "Enable Memory Flush" toggle. This is disabled by default to prevent unexpectedly high token consumption during long conversations.
    *   [PR #2641]: Moved "Automatic Skill Review" to an opt-in setting to give users more control over background processing.

## 4. Community Hot Topics
While no new issues were opened in the last 24 hours, the PR activity reveals a recurring internal focus on **OpenClaw integration**. 
*   **The Migration Friction:** A series of PRs (#2649, #2642, #2647) indicates the project is currently navigating edge cases following the OpenClaw v2026.8.1 upgrade, particularly regarding legacy data formats and header validation.
*   **Cost Optimization:** The shift toward opt-in features for memory flushing and skill reviews (#2643, #2641) suggests a response to user feedback regarding LLM API costs.

## 5. Bugs & Stability
*   **Critical (Resolved):** Corrupt workspace attestations (NUL bytes) were preventing startup on Windows. [[PR #2647](https://github.com/netease-youdao/LobsterAI/pull/2647)]
*   **High (Resolved):** Duplicate session headers were blocking the archival process. [[PR #2642](https://github.com/netease-youdao/LobsterAI/pull/2642)]
*   **Medium (Resolved):** Redundant gateway restarts when editing IM or MCP configurations. [[PR #2648](https://github.com/netease-youdao/LobsterAI/pull/2648)]
*   **Low (Resolved):** UI click-blocking on Windows-specific failure dialogs. [[PR #2645](https://github.com/netease-youdao/LobsterAI/pull/2645)]

## 6. Feature Requests & Roadmap Signals
*   **Opt-in Architecture:** The project is moving toward an "opt-in" philosophy for resource-heavy background tasks (Memory flushing, Skill reviews) to respect user token budgets.
*   **Granular Configuration Scoping:** The work on `modelSelectionScope` (#2640) shows a roadmap moving toward more sophisticated session-specific vs. global defaults.

## 7. User Feedback Summary
*   **Pain Points:** QA feedback highlighted frustration with the gateway restarting multiple times when toggling settings, which has been addressed in today's deduplication logic.
*   **Cost Concerns:** Users are sensitive to high token consumption in long dialogues, leading to the implementation of the `openClawMemoryFlushEnabled` toggle.

## 8. Backlog Watch
There are **3 stale dependency PRs** currently open, generated by Dependabot: own*   [PR #2464](https://github.com/netease-youdao/LobsterAI/pull/2464): Bump `react-dom` from 18.3.1 to 19.2.8.
*   [PR #2461](https://github.com/netease-youdao/LobsterAI/pull/2461): Bump `eslint-plugin-react-hooks` from 5.2.0 to 7.1.1.
*   [PR #2459](https://github.com/netease-youdao/LobsterAI/pull/2459): Bump `@nodesure/js-x-ray` from 14.3.0 to 16.0.0.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest
**Date:** September 11, 2026

## 1. Today's Overview
Moltis is experiencing high-velocity development, particularly focusing on stabilizing deployment environments and expanding agent reasoning capabilities. In the last 24 hours, the project successfully resolved critical infrastructure bugs related to Docker deployments and shell execution. While no new official releases were tagged today, the pipeline is active with significant feature additions, including direct AGY streaming and more granular reasoning effort levels. The project appears healthy, with a clear focus on improving the developer experience and automated dependency maintenance.

## 2. Releases
*No new releases were issued in the last 24 hours.*

## 3. Project Progress
The project saw 7 Pull Requests updated today, with 3 successfully merged or closed:
*   **[PR #1252] docs(docker): document the bind-mount permission fix](https://github.com/moltis-org/moltis/PR/1252)** (CLOSED): Resolved #293 by providing documentation for fixing SQLite permission errors during fresh Docker deployments.
*   **[PR #1260] fix(exec): report missing shell accurately](https://github.com/moltis-org/moltis/PR/1260)** (CLOSED): Fixed #279 where the exec tool incorrectly reported a missing directory when `sh` was missing from the PATH.
*   **[PR #1256] chore(deps-dev): bump browserslist](https://github.com/moltis-org/moltis/PR/1256)** (CLOSED): Routine maintenance update for the web UI dependencies.

## 4. Community Hot Topics
While there are no high-volume contentious threads today, the following open PRs represent the current direction of development:
*   **[PR #1258] feat(external-agents): add direct AGY streaming](https://github.com/moltis-org/moltis/PR/1258):** A significant feature proposal to add first-class streaming transport for the `agy` CLI, allowing users to leverage Google OAuth sessions instead of manual API keys.
*   **[PR #1253] feat(reasoning): add max effort level](https://github.com/moltis-org/moltis/PR/1253):** Enhancing the reasoning engine by introducing a `max` effort level, providing more control over model performance and cost.

## 5. Bugs & Stability
Two major stability issues were identified and closed today, significantly improving the installation reliability:
*   **[Issue #293] No db file on fresh Docker Compose deployment](https://github.com/moltis-org/moltis/issues/293)** (CLOSED): A critical bug where the application would panic on fresh installs due to SQLite database permission errors.
*   **[Issue #279] exec tool reports "working directory does not exist" when sh is not in PATH](https://github.com/moltis-org/moltis/issues/279)** (CLOSED): A misleading error message that masked a missing shell binary, complicating troubleshooting.

## 6. Feature Requests & Roadmap Signals
*   **Cron Logic:** [#PR #1262] fix(cron): treat active_hours end="24:00" as end-of-day](https://github.com/moltis-org/moltis/PR/1262) suggests a focus on refining the scheduling and automation capabilities of agents.
*   **External Agent Integration:** The push for `AGY streaming` (#1258) indicates that Moltis is moving toward becoming a more integrated hub for various CLI-based AI tools and agents.
*   **Dependency Hygiene:** Frequent activity from Dependabot (#1263) shows a project commitment to keeping the web UI and documentation (Astro, Babel) up to date.

## 7. User Feedback Summary
*   **Deployment Friction:** The closure of #293 highlights that users were struggling with "out-of-the-box" Docker experiences; the documentation fix is a positive step toward user accessibility.
*   **Granular Control:** The request for "max effort" in reasoning (#1253) suggests power users want more precision over the balance between speed/cost and output quality.

## 8. Backlog Watch
*   **[PR #1263] chore(deps): bump npm_and_yarn group](https://github.com/moltis-org/moltis/PR/1263):** Pending updates for Babel/core, Astro, and js-yaml. This should be merged to ensure security and compatibility in the UI and docs.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest: 2026-09-11

## 1. Today's Overview
CoPaw is currently experiencing high activity, characterized by 36 PR updates and 28 issue updates in the last 24 hours. The project released a new beta version (**v2.2.1-beta.2**), focusing on refining the mobile experience and fixing CSS selectors. While the project is transitioning from a personal AI assistant to a multi-tenant platform (via the upcoming "QwenPaw Hub"), the community is currently grappling with technical debt regarding session management bugs, browser-specific rendering issues (Chrome vs. Safari), and security sandbox concerns related to the "Computer Use" feature on macOS.

## 2. Releases
*   **v2.2.1-beta.2**
    *   **Feature:** Improved the mobile agent selector in the console.
    *   **Fix:** Aligned QwenPaw CSS selectors to ensure UI consistency.
    *   **Chore:** Version bump to 2.2.1b2.

## 3. Project Progress
The team and community have successfully merged or closed **13 Pull Requests** today. Key highlights include:
*   **Session Management:** Added `/sessions` and `/session` slash commands (#6978) to allow IM-channel users (Telegram, Matrix, etc.) to manage conversations effectively.
*   **UI Refinement:** Restricted the file upload button to the "Workspace" tab (#7667) to reduce UI clutter elsewhere.
*   **Stability Fixes:** Resolved an issue where Base64 data URLs in outbound media caused "File name too long" errors (#7647).
*   **Memory Resilience:** Implemented a fallback to the built-in ReMeLight backend if a configured memory plugin is unavailable (#7663).
*   **Testing Surge:** A major coverage push is underway, with #7325 adding 382 unit tests and increasing console statement coverage by 5.49% (#7653 is currently pending).

## 4. Community Hot Topics
*   **QwenPaw Hub & Multi-tenancy (#7318):** Discussion on the future of the multi-tenant edition coming in 2.2.0. The community is actively pushing for admin-managed skills and better team-based access (24 comments).
*   **PawPort Integration (#6960):** A significant proposal to create a subsystem for importing instructions, settings, and projects from other agent harnesses (like Codex or Qoder) into CoPaw.
*   **Mobile Experience (#7378):** High interest in a native Expo-based mobile app for iOS/Android, though currently marked as "DO NOT MERGE" for drafting purposes.

## 5. Bugs & Stability
*   **Security/Sandbox (#7672):** A critical report alleging that the Windows security sandbox can be bypassed via the "Computer Use" feature.
*   **Session Mix-up (#7231):** A recurring bug where switching between sessions while one is still "thinking" causes messages to be delivered to the wrong session.
*   **Rendering Disparity (#7642/7507):** Users report that the Chrome console fails to render streaming text until the turn completes, whereas Safari works correctly.
*   **Feishu (WeCom) Hang (#7534):** A bug where the queue consumer gets stuck after hours of use, making the session silently unresponsive to new messages.
*   **Session Creation Logic (#7661):** A bug where clicking "New Task" repeatedly creates a new sidebar entry instead of continuing the existing chat session.

## 6. Feature Requests & Roadmap Signals
*   **Custom Memory Models (#7664):** A highly requested feature to use a separate lightweight LLM for `RemeLight` (summarization/dreaming) to save token costs when using flagship models for the main chat.
*   **Ntfy Integration (#7657):** Request for a built-in `ntfy` channel to allow agents to push results to phones and receive commands back.
*   **MCP Security (#4175):** Feature request for `tls_verify` and `ca_file` support in MCP configurations to support private CA/self-signed certificates.
*   **Syntax Highlighting (#7670):** Users want Monaco-style syntax highlighting in the Files panel preview mode instead of a plain text block.

## 7. User Feedback Summary own*   **Mobile Friction:** Users find the current web-based console difficult to navigate on mobile, specifically noting the "Stop" button placement is too close to operational triggers (#7177).
*   **Efficiency:** There is frustration regarding 150ms throttling in the WeCom channel, which feels sluggish compared to the WeChat channel.
*   **Context Loss:** Reports of instances where the model "cannot see what it just said" in subsequent requests despite persistence (#7579). 

## 8. Backlog Watch
*   **#7672:** The investigation into the Windows sandbox bypass requires urgent security audit.
*   **#3113:** A long-standing bug where the "team collaboration" instruction is ignored on the first request unless the user interrupts the output.
*   **#7445:** QwenPaw Hub failing to connect to local/LAN model API services despite cloud APIs working.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest: 2026-09-11

## 1. Today's Overview
ZeptoClaw is undergoing an intensive period of **security hardening** and **dependency maintenance**. The last 24 hours saw a rapid resolution of several critical security vulnerabilities related to token leakage in logs and non-constant time comparisons. While the project shows high activity (19 PRs processed), the bulk of this work is automated dependency updates via Dependabot. The maintainer is currently addressing a CI/CD pipeline permission issue to ensure security audit results are correctly reported. 

## 2. Releases
*No new releases have been issued in the last 24 hours.*

## 3. Project Progress
The project was highly active in terms of merging, with **18 PRs merged or closed** today.
*   **Dependency Updates:** Dependabot successfully updated numerous core libraries across the stack, including:
    *   **Rust Ecosystem:** `tokio` (1.52.1 → 1.52.3), `serde_json` (1.0.149 → 1.0.150), `scraper` (0.26.0 → 0.27.0), `tower-http` (0.6.10 → 0.6.11), and `rpassword` (7.4.0 → 7.5.4).
    *   **Frontend/Panel:** `react` (19.2.4 → 19.2.6), `tailwindcss` (4.2.2 → 4.3.0), and `astro` (6.3.1 → 6.3.7).
    *   **CI/CD:** `docker/build-push-action` (7.1.0 → 7.2.0), `docker/metadata-action` (6.0.0 → 6.1.0), and `codecov-action` (v6.0 → v1).

## 4. Community Hot Topics
The community focus is currently centered on security and CI reliability:
*   **[CI Security Audit Failure (#676)](https://github.com/qhkm/zeptoclaw/issues/676):** A high-priority issue where the `rustsec audit` job fails to report results because the GitHub token lacks `checks:write` permissions. The maintainer is actively working on a fix.
*   **[CI Fix (#677)](https://github.com/qhkm/zeptoclaw/pr/677):** The corresponding PR to resolve the permission issue by properly scoping access for the audit job.

## 5. Bugs & Stability
Four critical security-related bugs were closed today, significantly improving the project's security posture:
*   **Token Leak in Stdout (#656)](https://github.com/qhkm/zeptoclaw/issues/656):** The panel was printing the full API token to stdout, exposing it in terminal scrollback, CI logs, and screenshots. 
*   **Insecure Token Comparison (#655)](https://github.com/qhkm/zeptoclaw/issues/655):** Bearer tokens were compared using non-constant-time string comparison (`==`), leaving them vulnerable to timing attacks.
*   **WebSocket Auth Leakage (#653)](https://github.com/qhkm/zeptoclaw/issues/653):** WebSocket authentication was using query parameters (`?auth=`), which caused tokens to be logged in reverse-proxy logs and browser history.

## 6. Feature Requests & Roadmap Signals
No new major feature requests were reported in the last 24 hours. The current focus is strictly on infrastructure stability and security compliance.

## 7. User Feedback Summary
While no new user feedback comments were recorded today, the resolution of the security issues suggests a transition toward more enterprise-grade credential handling. The project's move away from query-parameter authentication indicates a shift toward more "production-ready" personal AI assistant standards.

## 8. Backlog Watch
*   **[Issue #676: Grant rustsec audit job write permission](https://github.com/qhkm/zeptoclaw/issues/676):** (Open/P2-High) This is blocking the visibility of security audit results in the CI pipeline. Needs immediate merge of PR #677.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-09-11

**Repository:** [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)  
**Coverage window:** activity through 2026-09-10

---

## 1. Today’s Overview

ZeroClaw saw heavy triage and development activity in the last 24 hours: **50 issues and 50 pull requests were updated**, but **no issues or PRs were closed/merged and no new release was published**. This indicates a project in an active stabilization and review phase, with a large volume of in-flight work across security, CI, channels, providers, and the web dashboard. The backlog is being kept alive, but closure velocity is currently low, which may reflect the complexity of the stacked security RFC (#8289) work and the broad Windows/platform quality push.

---

## 2. Releases

No new releases were published in the last 24 hours. The project remains on the `v0.8.x` line; the latest known referenced version in the data is `v0.8.5`.

---

## 3. Project Progress

- **Merged/closed PRs today:** 0.
- **No completed feature shipments or fixes** in the last 24 hours.
- **Active development continues** in several large, still-open PRs, especially the stacked **RFC #8289 identity/security** series (e.g., [#10248](https://github.com/zeroclaw-labs/zeroclaw/pull/10248), [#10255](https://github.com/zeroclaw-labs/zeroclaw/pull/10255), [#10259](https://github.com/zeroclaw-labs/zeroclaw/pull/10259), [#10263](https://github.com/zeroclaw-labs/zeroclaw/pull/10263), [#10265](https://github.com/zeroclaw-labs/zeroclaw/pull/10265), [#10268](https://github.com/zeroclaw-labs/zeroclaw/pull/10268), [#10270](https://github.com/zeroclaw-labs/zeroclaw/pull/10270), [#10274](https://github.com/zeroclaw-labs/zeroclaw/pull/10274), [#10275](https://github.com/zeroclaw-labs/zeroclaw/pull/10275), [#10321](https://github.com/zeroclaw-labs/zeroclaw/pull/10321)), and targeted fixes such as ACP persistence ([#10197](https://github.com/zeroclaw-labs/zeroclaw/pull/10197)) and dashboard disconnect handling ([#9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002)).

---

## 4. Community Hot Topics

The most-discussed items reflect three strong community needs: **Windows/CI quality**, **release/security hardening**, and **channel UX polish**.

| Item | Type | Comments | Why it’s hot |
|------|------|----------|--------------|
| [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | Issue | 19 | **Windows test suite broken** — 74 failures due to Unix-only commands, path semantics, and console encoding. Blocks credible Windows support. |
| [#9101](https://github.com/zeroclaw-labs/zeroclaw/issues/9101) | Issue | 9 | **Release signing sprawl** — three overlapping attestation mechanisms (cosign, GitHub attestations, SLSA) shipping `v0.8.3`; community wants one consolidated story. |
| [#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) | Issue | 8 | **Telegram multimodal UX** — each image in a media group becomes a separate LLM turn; users expect one batched multimodal turn. |
| [#6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) | Issue | 8 | **Nextcloud Talk bot API** — wrong API endpoint + secret handling; currently `status:blocked`. |
| [#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108) | Issue | 7 | **CI critical path / Rust caching** — PR CI takes 15–20 min; community wants faster feedback. |
| [#9486](https://github.com/zeroclaw-labs/zeroclaw/issues/9486) | Issue | 7 | **High-entropy redaction overreach** — Solana wallet addresses redacted in Telegram, and `high_entropy_tokens=false` ignored on channel path. |

PR discussion counts were not surfaced in the provided data, but large open PRs drawing attention include the RFC #8289 security stack, [#10197](https://github.com/zeroclaw-labs/zeroclaw/pull/10197) (ACP persistence), [#9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002) (dashboard disconnect), and [#10337](https://github.com/zeroclaw-labs/zeroclaw/pull/10337) (git allowed-roots).

---

## 5. Bugs & Stability

### S0 — Data loss / security risk
- [#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) — `delegate` tool bypasses the parent’s tool allowlist, letting sub-agents invoke blocked tools.
- [#9247](https://github.com/zeroclaw-labs/zeroclaw/issues/9247) — Shell tool workspace boundary bypass via symlinks; can read/write outside the workspace.

### S1 — Workflow blocked
- [#8559](https://github.com/zeroclaw-labs/zeroclaw/issues/8559) — Exiting the web chat window interrupts the agent loop.
- [#8794](https://github.com/zeroclaw-labs/zeroclaw/issues/8794) — Stopping an agent mid-work in the dashboard erases tool calls and reasoning from context.
- [#9207](https://github.com/zeroclaw-labs/zeroclaw/issues/9207) — `web_fetch` returns garbage for gzip/brotli/deflate responses.
- [#9333](https://github.com/zeroclaw-labs/zeroclaw/issues/9333) — Failed ACP turns disappear after switching sessions.
- [#9421](https://github.com/zeroclaw-labs/zeroclaw/issues/9421) — Incomplete terminal responses can be reported as successful.
- [#9191](https://github.com/zeroclaw-labs/zeroclaw/issues/9191) — Cron agent jobs have no wall-clock timeout; locks only clear at process start.
- [#8800](https://github.com/zeroclaw-labs/zeroclaw/issues/8800) — On Windows, killing the process leaves a bound port (zombie `LISTENING/CLOSE_WAIT`), blocking daemon restart.
- [#9390](https://github.com/zeroclaw-labs/zeroclaw/issues/9390) — Emergency stop is CLI-only; no runtime path reads the state file.
- [#9393](https://github.com/zeroclaw-labs/zeroclaw/issues/9393) — Bluesky and Reddit lack sender authorization.
- [#9391](https://github.com/zeroclaw-labs/zeroclaw/issues/9391) — Command audit logging defaults to enabled but writes nothing.
- [#9284](https://github.com/zeroclaw-labs/zeroclaw/issues/9284) — Config flush can overwrite concurrent writes.
- [#9592](https://github.com/zeroclaw-labs/zeroclaw/issues/9592) — Model-routing probe uses stale pre-update config.
- [#8519](https://github.com/zeroclaw-labs/zeroclaw/issues/8519) — `cargo-audit` ignores and `wasmtime-wasi` CVEs need reconciliation.

### S2 — Degraded behavior / major workflow degradation
- [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) — 74 test failures on Windows.
- [#7899](https://github.com/zeroclaw-labs/zeroclaw/issues/7899) — OpenAI STT provider ignores environment-based credentials.
- [#9089](https://github.com/zeroclaw-labs/zeroclaw/issues/9089) — Tool output supports `[IMAGE:]` but not `[AUDIO:]` markers.
- [#9177](https://github.com/zeroclaw-labs/zeroclaw/issues/9177) — JIT loading fails for Qwen3.6-35B-A3B.
- [#9332](https://github.com/zeroclaw-labs/zeroclaw/issues/9332) — Multimodal context meter severely undercounts image-heavy requests.
- [#9363](https://github.com/zeroclaw-labs/zeroclaw/issues/9363) — Config metadata stays English in localized ZeroCode/web surfaces.
- [#9562](https://github.com/zeroclaw-labs/zeroclaw/issues/9562) — WebChat auto-scroll overrides manual scrolling during streaming.
- [#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108) — Slow CI critical path / caching.

### S3 — Minor issue
- [#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) — Telegram media groups not batched.
- [#6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) — Nextcloud Talk bot API mismatch.
- [#9198](https://github.com/zeroclaw-labs/zeroclaw/issues/9198) — Discord typing indicator stuck after dashboard daemon reload.

**Fix PRs already open for some of the above:**
- Telegram batching: [#8955](https://github.com/zeroclaw-labs/zeroclaw/pull/8955)
- Dashboard disconnect stopping agent: [#9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002)
- ACP interrupted turn persistence: [#10197](https://github.com/zeroclaw-labs/zeroclaw/pull/10197)
- Terminal fallback delivery: [#10417](https://github.com/zeroclaw-labs/zeroclaw/pull/10417)
- Git allowed-roots: [#10337](https://github.com/zeroclaw-labs/zeroclaw/pull/10337)

---

## 6. Feature Requests & Roadmap Signals

Active enhancements and large PRs point to the following likely near-term roadmap themes:

- **Identity, auth, and security (RFC #8289)** — canonical principals, OIDC token verification, browser/device OIDC enrollment, principal-owned sessions, private principal memory, route-layer auth. Delivered via the stacked PR series starting at [#10248](https://github.com/zeroclaw-labs/zeroclaw/pull/10248).
- **CI/platform expansion** — run tests on Windows and macOS ([#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461)), improve Rust build caching ([#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108)).
- **Release hardening** — consolidate attestation/signing into one story and reduce 53 release assets to ~20 ([#9101](https://github.com/zeroclaw-labs/zeroclaw/issues/9101)).
- **Provider/model support** — native Hailo-Ollama provider ([#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109)), live provider identity on usage events ([#8966](https://github.com/zeroclaw-labs/zeroclaw/pull/8966)).
- **Observability** — entry-count log rotation and multi-segment log queries ([#10214](https://github.com/zeroclaw-labs/zeroclaw/pull/10214)).

The next version (`v0.8.6` or `v0.9.0`) will likely be dominated by the RFC #8289 security/auth work and CI/platform quality improvements, assuming the stacked PRs land.

---

## 7. User Feedback Summary

**Top pain points:**
1. **Windows is effectively a second-class platform** — 74 failing tests, zombie ports, path/encoding issues, and no CI coverage.
2. **Web dashboard state handling** — users lose agent progress when closing the chat, stopping the agent, or switching sessions.
3. **Channel integration rough edges** — Telegram media groups split into multiple turns, Nextcloud API mismatch, Discord typing stuck.
4. **Security/policy gaps** — delegate allowlist bypass, shell workspace boundary bypass, missing sender auth for Bluesky/Reddit, emergency stop not wired into runtime, audit logging broken.
5. **Provider/tool correctness** — compressed `web_fetch`, missing audio markers, JIT Qwen failures, context-meter undercounting, model-routing alias staleness.
6. **CI/release friction** — slow PR feedback, release asset/signing sprawl.

**Use cases surfacing:** cross-platform development, secure multi-tenant/enterprise deployment, long-running cron agents, multi-channel personal assistants, and Solana/crypto-tooling integrations.

---

## 8. Backlog Watch

Several important items have been open for months and remain unresolved or blocked:

- [#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) — Telegram media groups (created 2026-04-08, 5+ months old).
- [#6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) — Nextcloud Talk API; marked `status:blocked`.
- [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) / [#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461) — Windows CI/test failures (created 2026-06-10).
- [#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108) — CI caching/critical path (created 2026-06-02).
- [#7899](https://github.com/zeroclaw-labs/zeroclaw/issues/7899) — OpenAI STT env credentials (created 2026-06-17).
- [#8519](https://github.com/zeroclaw-labs/zeroclaw/issues/8519) — `cargo-audit` / `wasmtime-wasi` CVE drift (created 2026-06-30).

**PRs needing maintainer/author attention:**
- `needs-author-action`: [#10337](https://github.com/zeroclaw-labs/zeroclaw/pull/10337), [#10417](https://github.com/zeroclaw-labs/zeroclaw/pull/10417), [#10255](https://github.com/zeroclaw-labs/zeroclaw/pull/10255), [#10248](https://github.com/zeroclaw-labs/zeroclaw/pull/10248), [#8966](https://github.com/zeroclaw-labs/zeroclaw/pull/8966), [#10214](https://github.com/zeroclaw-labs/zeroclaw/pull/10214), [#8955](https://github.com/zeroclaw-labs/zeroclaw/pull/8955), [#9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002).
- `needs-maintainer-review`: [#10197](https://github.com/zeroclaw-labs/zeroclaw/pull/10197) (ACP persistence).
- `do-not-merge`: [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) (Hailo-Ollama).

Overall, ZeroClaw is highly active but bottlenecked on review and closure throughput, especially for the large security stack and platform-quality work.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*