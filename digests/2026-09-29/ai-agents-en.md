# OpenClaw Ecosystem Digest 2026-09-29

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-09-28 22:15 UTC

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



# OpenClaw Project Digest — 2026-09-29

## 1. Today's Overview
OpenClaw is experiencing exceptionally high development activity, with **500 issues and 500 pull requests updated in the last 24 hours**. No new releases were published today, but the project is clearly in an intensive stabilization and bug-fix phase following recent releases (2026.9.5, 2026.9.6, and the upcoming 2026.9.7). The focus is heavily on resolving critical P0 regressions related to gateway stability, SQLite state management, and resource leaks, alongside feature work in diagnostics, TTS, and UI polish.

## 2. Releases
*None today.*

## 3. Project Progress
The project saw significant movement across multiple areas, with several PRs closing or advancing:

*   **Channel & Integration Fixes:** A closed PR fixed Slack Socket Mode connection failures when `HTTPS_PROXY` is set ([#155841](https://github.com/openclaw/openclaw/pull/155841)). Active PRs address Slack progress card routing ([#160088](https://github.com/openclaw/openclaw/pull/160088)), Slack bot mention handling ([#160752](https://github.com/openclaw/openclaw/pull/160752)), and LINE carousel test fixture sharing ([#160754](https://github.com/openclaw/openclaw/pull/160754)).
*   **Gateway & Update Stability:** A closed PR addressed data loss during Git rollback updates ([#160170](https://github.com/openclaw/openclaw/pull/160170)). Active work targets updater subprocess tracking in Bun ([#158447](https://github.com/openclaw/openclaw/pull/158447)) and preserving the live plugin index during Doctor checks ([#160400](https://github.com/openclaw/openclaw/pull/160400)).
*   **Features & Enhancements:** New feature PRs include Gemini 3.8 Flash TTS support ([#157331](https://github.com/openclaw/openclaw/pull/157331)), exporting turn data to OTEL diagnostics spans ([#156603](https://github.com/openclaw/openclaw/pull/156603)), and showing plugin credential status in the UI ([#160092](https://github.com/openclaw/openclaw/pull/160092)).
*   **UI/UX & Chore:** Improvements include side chat staging ([#160747](https://github.com/openclaw/openclaw/pull/160747)), compact activity rows ([#160140](https://github.com/openclaw/openclaw/pull/160140)), and locale refreshes ([#160753](https://github.com/openclaw/openclaw/pull/160753)).

## 4. Community Hot Topics
The most discussed issues center on severe stability and data integrity problems in recent builds:

*   **SQLite WAL Unbounded Growth ([#143524](https://github.com/openclaw/openclaw/issues/143524))** — 85 comments. Users report the Write-Ahead Log growing to 1.4–2.8 GB in days, blocking gateway startup on Windows. This is a critical data-path issue.
*   **Gateway Event Loop Starvation ([#149538](https://github.com/openclaw/openclaw/issues/149538))** — 22 comments. A fleet of 632 agents causes the gateway to report "ready" but never serve requests, eventually running out of memory.
*   **Write Tool Data Loss ([#40001](https://github.com/openclaw/openclaw/issues/40001))** — 16 comments. Long-standing P0 issue where isolated cron sessions overwrite shared files because the `write` tool lacks an append mode.
*   **2026.9.7 Fixes Tracker ([#157531](https://github.com/openclaw/openclaw/issues/157531))** — 15 comments. The community is actively tracking release blockers to ensure they are addressed before the next version.
*   **Update Swap Failures ([#156112](https://github.com/openclaw/openclaw/issues/156112))** — 13 comments. Users cannot update via `openclaw update` on npm global installs, though direct `npm install -g` works.

## 5. Bugs & Stability
The project is tracking a high volume of critical bugs, many marked as regressions from the 2026.9.x series:

*   **P0 (Critical)**
    *   **SQLite WAL leak** preventing gateway startup ([#143524](https://github.com/openclaw/openclaw/issues/143524)). *No fix PR yet.*
    *   **Gateway unresponsive** under high agent load, event loop starved ([#149538](https://github.com/openclaw/openclaw/issues/149538)). *No fix PR yet.*
    *   **Write tool lacks append mode**, causing silent data loss in cron sessions ([#40001](https://github.com/openclaw/openclaw/issues/40001)). *No fix PR yet.*
    *   **Model-catalog worker leaks tmp captures** (1-3 GB/min), filling disks ([#156571](https://github.com/openclaw/openclaw/issues/156571)). *No fix PR yet.*
    *   **`openclaw update` fails** at global install swap on npm ([#156112](https://github.com/openclaw/openclaw/issues/156112)). *Related PR [#158447](https://github.com/openclaw/openclaw/pull/158447) addresses a similar Bun update issue.*
    *   **State-lifecycle lease blocks startup** for 31 minutes if a client hangs ([#156917](https://github.com/openclaw/openclaw/issues/156917)). *No fix PR yet.*
    *   **macOS readiness watchdog SIGTERMs** slow-starting gateways, causing restart loops ([#158936](https://github.com/openclaw/openclaw/issues/158936)). *No fix PR yet.*
*   **P1 (High)**
    *   **Windows cron passes uncloneable env Proxy** to session workers ([#157067](https://github.com/openclaw/openclaw/issues/157067)).
    *   **

---

## Cross-Ecosystem Comparison



# Cross-Project Comparison Report — Personal AI Assistant / Agent Open-Source Ecosystem
**Date:** 2026-09-29 | **Analyst:** Senior Ecosystem Analyst

---

## 1. Ecosystem Overview

The personal AI assistant open-source landscape is in a period of intense stabilization and consolidation. The reference project (OpenClaw) is burning through hundreds of issues and PRs per day to fix critical P0 regressions in its 2026.9.x release series — SQLite WAL leaks, gateway event loop starvation, and write-tool data loss dominate its attention. Across the ecosystem, a shared technical theme has emerged: **runtime/dependency isolation failures** (Hermes, NanoClaw), **context/media lifecycle management** (CoPaw, ZeptoClaw, ZeroClaw), and **provider registry expansion** (NanoBot, NullClaw, IronClaw, Moltis, LobsterAI). Community sentiment is bifurcated — projects with visible maintainer throughput (NanoBot, NanoClaw, NullClaw) show strong engagement, while projects exhibiting maintainer inactivity (PicoClaw, IronClaw) are seeing active forks and community exodus. The ecosystem is clearly preparing for a wave of patch releases focused on reliability rather than net-new features.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merges/Closes | Release Status | Health Assessment |
|---|---|---|---|---|---|
| **OpenClaw** (core) | 500 | 500 | Not specified | None (2026.9.7 pending) | 🔴 High activity, stabilization phase; critical P0 regressions unresolved |
| **NanoBot** | 8 | 19 | 10 merged/closed | None | 🟢 Active & responsive; strong maintainer throughput; P0 file-write fix pending review |
| **Hermes Agent** | 50 | 50 | 8 merged/closed | None | 🟡 High activity but 42:8 open-to-merged ratio indicates review bottleneck; runtime isolation debt |
| **PicoClaw** | 7 | 10 | 0 merged | None (v0.3.1 latest) | 🔴 Stale PRs, active fork announced; contributor wave (x1F916) unmerged; maintainer inactivity signal |
| **NanoClaw** | 5 | 33 | 19 merged/closed | None (v2.4.0 latest) | 🟢 High velocity bug-sprint; strong daily PR throughput; 2 high-severity Linux edge cases open |
| **NullClaw** | 17 | 7 | Multiple merged | v20260929 prep | 🟢 Major features merged (adaptive pipeline, email, DingTalk); systematic bug cleanup |
| **IronClaw** | 2 | 3 | 1 closed | None | 🔴 Low-to-moderate; automated PRs only; flat community engagement (0 comments) |
| **LobsterAI** | 4 | 14 | 11 merged/closed | None | 🟡 Strong merge rate; gateway stabilization; open bugs (Qwen loop, output quality) |
| **Moltis** | 0 | 1 | 0 | None | 🔴 Quiet/low-velocity; single unmerged PR; no issue traffic |
| **CoPaw** | 6 | 16 | 4 merged/closed | None | 🟡 High throughput but skewed to bug fixes; context/media lifecycle is focal point |
| **ZeptoClaw** | 2 | 1 | 0 | None | 🔴 Low activity; tool-output spill PR unreviewed; goal-mode question unanswered |
| **ZeroClaw** | 50 | 50 | 6 merged/closed | None (v0.8.6/v0.9.0 pending) | 🟡 High activity, low merge rate; S0 security bugs (privilege escalation, data loss) open |
| **TinyClaw** | 0 | 0 | 0 | None | ⚪ No activity in 24h |

---

## 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Scale of community engagement:** The SQLite WAL issue (#143524) alone has 85 comments — an order of magnitude more discussion than most peers' top threads. This indicates a large, vocal user base that provides rich bug-reporting signal.
- **Reference architecture:** OpenClaw's gateway/plugin/channel architecture is being actively forked and integrated by projects like LobsterAI (which merged 11 PRs today specifically for OpenClaw gateway stabilization). It is the de facto technical reference point.
- **Diagnostic maturity:** Active work on OTEL diagnostics spans (#156603) and plugin credential status UI (#160092) suggests investment in operational observability that smaller projects lack.

**Technical Approach Differences:**
- OpenClaw is the only project in the set explicitly tackling **multi-agent fleet management** at scale (632 agents causing gateway event loop starvation, #149538). This positions it as infrastructure-grade rather than single-user-grade.
- Its **SQLite state management** is a known pain point (WAL unbounded growth), but no peer has solved this either — it's an industry-wide problem with agent state persistence.
- The **write tool append mode** gap (#40001) is a uniquely OpenClaw problem (cron sessions overwriting shared files), reflecting its heavier emphasis on scheduled/automated workflows.

**Community Size Comparison:**
OpenClaw's issue/PR volume (500+ each) is 3–10× higher than any other project. However, quality of engagement matters: PicoClaw and ZeroClaw show similar raw issue counts but far lower maintainer responsiveness, resulting in community fragmentation (PicoClaw's active fork).

---

## 4. Shared Technical Focus Areas

Multiple projects are converging on the same technical requirements, signaling ecosystem-wide needs:

| Requirement | Projects | Specific Needs |
|---|---|---|
| **Runtime/Dependency Isolation** | Hermes Agent, NanoClaw, OpenClaw | Cron/worker subprocesses spawn with wrong Python environment; `ModuleNotFoundError: ruamel` deaths; Bun subprocess tracking; PM/git-checkout install breakage |
| **Context/Media Lifecycle** | CoPaw, ZeptoClaw, ZeroClaw, OpenClaw | Tool output truncation causing unrecoverable data loss; base64/image payload accumulation blowing model context; oversized media making sessions permanently unusable; spillover archive retention |
| **Provider Registry Expansion** | NanoBot, NullClaw, IronClaw, Moltis, LobsterAI, PicoClaw | Tsubasa provider entries (4+ projects); OpenAI-compatible generic provider (PicoClaw #3366); GPT-6/Copilot parity (NanoBot #5898); Eden AI gateway (NullClaw) |
| **Channel/IM Reliability** | OpenClaw, NullClaw, LobsterAI, ZeroClaw, CoPaw | Slack Socket Mode proxy failures; Feishu notification leakage; QQ markdown stripping; DingTalk Bot API recall; Discord embed-only message invisibility; IRCv3 multiline assembly |
| **File/Workspace Concurrency** | OpenClaw, NanoBot, ZeroClaw | Concurrent `file_write`/`file_edit` to same path silently dropping edits (ZeroClaw S0); workspace file corruption under multi-session concurrency (NanoBot P0); write tool lacks append mode (OpenClaw) |
| **Security Credential Handling** | Hermes Agent, OpenClaw, LobsterAI | `auth.json` world-readable before `chmod`; OAuth scope hardcoding; URL protocol validation in IPC handlers; branch pin validation before URL interpolation |
| **Update/Installer Robustness** | OpenClaw, Hermes, NanoClaw, LobsterAI | npm global install swap failures; macOS paths with spaces; Windows apostrophes in usernames; systemd user bus unreachable; rollback data loss |

---

## 5. Differentiation Analysis

| Project | Feature Focus | Target Users | Technical Architecture |
|---|---|---|---|
| **OpenClaw** | Multi-agent fleet management, gateway stability, diagnostics | Infrastructure operators, power users running many agents | Gateway-centric; SQLite state; plugin/channel extensibility |
| **NanoBot** | Provider compatibility, tokenizer performance, exec reliability | Developers needing broad model access; TUI users | Lightweight; strong TUI; background tokenizer warming |
| **Hermes Agent** | Desktop app, taste learning, plugin browser-login | Desktop-first users; personalization seekers | Desktop bundle; self-managed installs; context engines |
| **PicoClaw** | IRC/DeltaChat channels, minimal footprint | Lightweight/edge deployments | Minimal; channel-focused; community-driven but maintainer-constrained |
| **NanoClaw** | Container lifecycle, update flow, Iron proxy | Containerized/on-prem deployments; enterprise | Container-native; Iron proxy; systemd integration |
| **NullClaw** | Adaptive intelligence pipeline, email, DingTalk | Enterprise/IM-heavy workflows; Zig-compiled | Zig; post-turn quality loop; IM-first channels |
| **IronClaw** | Benchmark-driven quality, codebase memory graph | Evaluation-focused; enterprise knowledge | Codebase-memory bootstrap; evaluation tooling |
| **LobsterAI** | Office document editing, Cowork mode, IM gateway | Desktop office workers; Chinese market (QQ/Feishu/DingTalk) | Electron desktop; OpenClaw gateway integration; Cowork UI |
| **CoPaw** | Context/media lifecycle, multi-tab terminal, transcript history | Long-running chat users; media-heavy workflows | Durable SQLite transcript; paginated history; terminal tabs |
| **ZeroClaw** | Per-sender RBAC, plugin architecture, .well-known skills | Multi-tenant/enterprise; standards-compliance | Runtime plugins replacing feature flags; OIDC; plugin-owned Kanban |
| **ZeptoClaw** | Minimal tooling, spill-to-file, goal mode | Lightweight/edge; autonomous task runners | Minimal; output spill; goal-directed execution |

---

## 6. Community Momentum & Maturity

**Rapidly Iterating (High Velocity, Responsive Maintainers):**
- **NanoBot:** 10 PRs merged in 24h; P0 file-write fix PR open; active triage of sudo-loop and Feishu bugs.
- **NanoClaw:** 19 PRs merged in a single day; update flow hardening; CI unblocked from Bun hang.
- **NullClaw:** Major features merged (adaptive pipeline, email, DingTalk); systematic bug cleanup; v20260929 prep underway.

**Stabilizing (High Activity, Focused on Bug Fixes):**
- **OpenClaw:** 500+ issues/PRs; intensive P0 regression tracking; no release yet — clearly in stabilization.
- **Hermes Agent:** 50 issues/PRs; many duplicates closed; security hardening active; but 42:8 open-to-merged ratio suggests review bottleneck.
- **CoPaw:** 16 PRs; context/media lifecycle fixes; first-time contributors visible.
- **ZeroClaw:** 50 issues/PRs; S0 security bugs open; architectural migration (runtime plugins) in progress.

**At Risk (Maintainer Inactivity Signals):**
- **PicoClaw:** 0 PRs merged; 6/10 PRs and 2/7 issues marked `[stale]`; active fork announced (#3398); x1F916's 5 critical reliability PRs unmerged.
- **IronClaw:** Only automated PRs (docs, codebase graph); 0 comments on all items; no user-facing features merged.
- **Moltis:** 1 open PR, 0 issues, 0 merges; effectively no signal.
- **ZeptoClaw:** 1 open PR, 2 issues; 0 merges; goal-mode question unanswered.

---

## 7. Trend Signals

**For AI Agent Developers:**

1. **Runtime isolation is the #1 ecosystem-wide reliability problem.** Cron workers, DM delivery bots, Kanban workers, and subagent executors all fail when spawned with the wrong Python environment. The pattern is consistent across Hermes, NanoClaw, and OpenClaw. Developers should prioritize explicit venv/dependency pinning in worker subprocess spawning.

2. **Context and media lifecycle management is emerging as a critical capability.** Multiple projects (CoPaw, ZeptoClaw, ZeroClaw, OpenClaw) are hitting the same wall: tool outputs and base64 media accumulate unbounded, blowing model context windows and permanently breaking sessions. Spill-to-file architectures (ZeptoClaw #708) and media-aware pruning (CoPaw #7965) are the leading solutions.

3. **Provider registry standardization is accelerating.** Tsubasa is being added to at least 4 projects (NullClaw, IronClaw, Moltis, PicoClaw). The demand for OpenAI-compatible generic providers (PicoClaw #3366) suggests users want to route through intermediaries (9Router, self-hosted routers) without custom code.

4. **Security and multi-tenancy are maturing from afterthoughts to first-class concerns.** ZeroClaw's per-sender RBAC (#5982, 10 comments), OIDC canonical principals (#8289), and privilege-escalation-on-resume (#11197, S0) reflect an enterprise readiness push. Hermes' `auth.json` permission hardening and LobsterAI's URL protocol validation show the same trend.

5. **Channel/IM fragmentation is a real integration burden.** Feishu/Lark users see internal messages across 2 projects; QQ requires markdown stripping; Ding

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-09-29

Data window: GitHub activity updated in the last 24h, through 2026-09-28. Repo: [HKUDS/nanobot](https://github.com/HKUDS/nanobot).

## 1. Today's Overview

NanoBot remains highly active: **8 issues** and **19 PRs** were updated in the last 24h, with **10 PRs merged/closed** and **2 issues closed**. There were **no new releases**. Activity is concentrated in maintenance, provider/model compatibility, and reliability fixes rather than a release cycle. Maintainer throughput is strong, but several stability items remain open, including a **p1 sudo-loop bug** ([#5924](https://github.com/HKUDS/nanobot/issues/5924)) and a **p0 file-write corruption fix PR** ([#5953](https://github.com/HKUDS/nanobot/pull/5953)). Overall project health is active and responsive, with visible stability debt around exec/sudo handling, Feishu notifications, and concurrent file writes.

## 2. Releases

No new releases in the last 24h.

## 3. Project Progress

Merged/closed PRs today advanced provider compatibility, tokenizer performance, tool reliability, and UI fixes:

- [#5861](https://github.com/HKUDS/nanobot/pull/5861) — `fix(tokens): warm fallback tokenizer in background` (p1, closed). Likely addresses long-session BUILD latency reported in [#5843](https://github.com/HKUDS/nanobot/issues/5843).
- [#5940](https://github.com/HKUDS/nanobot/pull/5940) — `fix(providers): expose GPT-6 Sol and Luna in Codex model discovery` (closed). Fixes [#5939](https://github.com/HKUDS/nanobot/issues/5939).
- [#5952](https://github.com/HKUDS/nanobot/pull/5952) — `fix(webui): restore Codex title generation and diagnose API failures` (closed).
- [#5949](https://github.com/HKUDS/nanobot/pull/5949) — `fix(web): propagate web_fetch failures as structured tool errors` (closed).
- [#5948](https://github.com/HKUDS/nanobot/pull/5948) — `feat(tools): use installed ripgrep for native file search` (closed).
- [#5950](https://github.com/HKUDS/nanobot/pull/5950) — `fix(tui): restore saved session history from canonical events` (closed).
- [#5951](https://github.com/HKUDS/nanobot/pull/5951) — `docs: refresh contributors and preserve historical credits` (closed).
- [#1355](https://github.com/HKUDS/nanobot/pull/1355), [#1443](https://github.com/HKUDS/nanobot/pull/1443), [#1502](https://github.com/HKUDS/nanobot/pull/1502) — closed as `conflict`; these are old backlog items closed rather than merged. If still desired, they likely need rebasing/rework.

## 4. Community Hot Topics

The most active items are issue-side; PR comment/reaction data was not provided. All listed items show `👍: 0`, so engagement is comment-driven rather than reaction-driven.

- [#5924](https://github.com/HKUDS/nanobot/issues/5924) — **5 comments** — `[OPEN] [bug, question, priority: p1] Agent gets stuck in sudo loop - becomes unusable`. Underlying need: robust sudo/auth session handling and recovery when max iterations are hit.
- [#5903](https://github.com/HKUDS/nanobot/issues/5903) — **4 comments** — `[OPEN] [bug] Feishu: hidden session-checkpoint marker delivered to user after idle compaction`. Underlying need: channel-aware suppression of internal control messages.
- [#5908](https://github.com/HKUDS/nanobot/issues/5908) — **4 comments** — `[OPEN] [webui, priority: p2] feat(webui): show live tokens/sec while streaming a reply`. Underlying need: observability into model generation speed and stalls.
- [#5898](https://github.com/HKUDS/nanobot/issues/5898) — **3 comments** — `[OPEN] [bug] gpt-6 model series through Github Copilot`. Underlying need: provider compatibility parity for newer OpenAI models.
- [#5956](https://github.com/HKUDS/nanobot/issues/5956) — **2 comments** — `[OPEN] [bug] Feishu 无 in-place edit 能力，compaction notice 应可关闭（同类 #5784）`. Underlying need: configurable notification behavior on channels without in-place edit support.
- [#4798](https://github.com/HKUDS/nanobot/issues/4798) — **2 comments** — `[OPEN] Bug: Concurrent file writes from different sessions not serialized — workspace file corruption`. Underlying need: safe multi-session workspace concurrency.

## 5. Bugs & Stability

Ranked by severity:

- **P0 / critical — workspace corruption risk**: [#4798](https://github.com/HKUDS/nanobot/issues/4798) — concurrent file writes from different sessions are not serialized. A fix PR exists but is still open: [#5953](https://github.com/HKUDS/nanobot/pull/5953) `fix(tools): atomic writes for file tools to prevent torn content and crash-window loss` (p0). Needs maintainer review/merge.
- **P1 — agent becomes unusable**: [#5924](https://github.com/HKUDS/nanobot/issues/5924) — sudo authorization expires before the command executes, causing a loop and obsessive retry behavior. No direct fix PR identified; [#5957](https://github.com/HKUDS/nanobot/pull/5957) `fix(exec): enforce session hard timeouts without polling` may partially help with stuck exec sessions but is not a sudo-loop fix.
- **P2 — Feishu notification leakage/noise**: [#5903](https://github.com/HKUDS/nanobot/issues/5903) — hidden session-checkpoint marker delivered to users; [#5956](https://github.com/HKUDS/nanobot/issues/5956) — compaction notice should be closable on Feishu. Related design work likely needed.
- **P2 — provider compatibility**: [#5898](https://github.com/HKUDS/nanobot/issues/5898) — GPT-6 series via GitHub Copilot fails. [#5940](https://github.com/HKUDS/nanobot/pull/5940) fixed Codex model discovery, but the Copilot path appears unresolved.
- **P2 — Unicode truncation**: [#5920](https://github.com/HKUDS/nanobot/pull/5920) — open fix to preserve complete Unicode characters when truncating by tokens.
- **Resolved/closed today**: [#5843](https://github.com/HKUDS/nanobot/issues/5843) BUILD-stage latency closed, likely via [#5861](https://github.com/HKUDS/nanobot/pull/5861); [#5939](https://github.com/HKUDS/nanobot/issues/5939) Codex GPT-6 Sol/Luna discovery closed via [#5940](https://github.com/HKUDS/nanobot/pull/5940).

## 6. Feature Requests & Roadmap Signals

User-requested and contributor-proposed features in flight:

- [#5908](https://github.com/HKUDS/nanobot/issues/5908) — WebUI live tokens/sec while streaming. Small but visible UX improvement; plausible next-version candidate.
- [#5955](https://github.com/HKUDS/nanobot/pull/5955) — add Claude on Vertex AI provider.
- [#5954](https://github.com/HKUDS/nanobot/pull/5954) — aggregate concurrent subagent results into one notification.
- [#5947](https://github.com/HKUDS/nanobot/pull/5947) — add Tsubasa provider metadata.
- [#5945](https://github.com/HKUDS/nanobot/pull/5945) — add optional Unbrowse reader backend for `web_fetch`.
- [#5946](https://github.com/HKUDS/nanobot/pull/5946) — persist completed tool results at execution-batch boundaries for crash recovery.
- [#5956](https://github.com/HKUDS/nanobot/issues/5956) — make Feishu compaction notices configurable/closable.
- [#1502](https://github.com/HKUDS/nanobot/pull/1502) — MCP enable/disable tools was closed as `conflict`; if still wanted, it may need a fresh PR.

Prediction: the next release is likely to include provider-registry expansion (Vertex AI, Tsubasa, possibly Unbrowse), subagent notification aggregation, recovery durability improvements, and WebUI observability. Stability items such as atomic file writes and exec timeout enforcement may also land if prioritized.

## 7. User Feedback Summary

Real user pain points in this window:

- **Sudo/auth loop makes the agent unusable** ([#5924](https://github.com/HKUDS/nanobot/issues/5924)) — highest-friction user report.
- **Feishu/Lark users see internal messages** ([#5903](https://github.com/HKUDS/nanobot/issues/5903), [#5956](https://github.com/HKUDS/nanobot/issues/5956)) — notification delivery is not sufficiently channel-aware.
- **No streaming speed indicator** ([#5908](https://github.com/HKUDS/nanobot/issues/5908)) — users want to distinguish normal generation from stalls.
- **Provider gaps for GPT-6** ([#5898](https://github.com/HKUDS/nanobot/issues/5898)) — Copilot users cannot use newer models.
- **Workspace file corruption under concurrency** ([#4798](https://github.com/HKUDS/nanobot/issues/4798)) — long-standing reliability concern for multi-session workflows.
- **Long-session latency** ([#5843](https://github.com/HKUDS/nanobot/issues/5843)) — now closed, suggesting responsiveness to performance complaints.

Satisfaction signals: maintainers merged/closed 10 PRs in a day, including p1 tokenizer work and provider fixes. Dissatisfaction signals: p1 sudo bug remains open with active discussion, Feishu notification bugs persist, and the July file-corruption issue is still unresolved despite an open p0 fix PR.

## 8. Backlog Watch

Important items needing maintainer attention:

- [#4798](https://github.com/HKUDS/nanobot/issues/4798) — open since 2026-07-06, concurrent file-write corruption. Fix PR [#5953](https://github.com/HKUDS/nanobot/pull/5953) is open and p0; should be reviewed/merged promptly.
- [#5811](https://github.com/HKUDS/nanobot/pull/5811) — open since 2026-09-18, `refactor(agent): persist subagent sessions through shared execution`; no comments provided. Needs review.
- [#5924](https://github.com/HKUDS/nanobot/issues/5924) — p1 sudo loop, 5 comments, no direct fix. High user impact.
- [#5903](https://github.com/HKUDS/nanobot/issues/5903) and [#5956](https://github.com/HKUDS/nanobot/issues/5956) — Feishu notification design issues; may need a unified fix.
- [#5898](https://github.com/HKUDS/nanobot/issues/5898) — GPT-6 via GitHub Copilot; no direct fix identified.
- [#5920](https://github.com/HKUDS/nanobot/pull/5920) — open Unicode truncation fix; small but user-visible.
- [#5946](https://github.com/HKUDS/nanobot/pull/5946), [#5947](https://github.com/HKUDS/nanobot/pull/5947), [#5945](https://github.com/HKUDS/nanobot/pull/5945), [#5957](https://github.com/HKUDS/nanobot/pull/5957) — open PRs awaiting review.
- [#1355](https://github.com/HKUDS/nanobot/pull/1355), [#1443](https://github.com/HKUDS/nanobot/pull/1443), [#1502](https://github.com/HKUDS/nanobot/pull/1502) — long-open PRs closed as `conflict` today; if the features are still desired, they need rebasing or replacement PRs.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-09-29

## 1. Today's Overview
For the 24-hour window ending 2026-09-29, Hermes Agent shows high maintenance activity but no release: 50 issues were updated (30 open/active, 20 closed) and 50 PRs were updated (42 open, 8 merged/closed), with 0 new releases. The issue split indicates active triage, while the 42:8 open-to-merged PR ratio suggests review/merge throughput is the current bottleneck. The dominant workstreams are dependency/runtime isolation failures on self-managed, PM, and git-checkout installs; cross-platform installer/update breakage; Desktop/gateway/session-state reliability; and security hardening for `auth.json`. Overall project health is active and responsive, but the absence of a release and recurring cron/worker dependency failures point to a stabilization phase rather than feature delivery.

## 2. Releases
No new releases were published in this window. No breaking changes, migration notes, or release artifacts to summarize.

## 3. Project Progress
- **8 PRs were merged/closed** in the window. The most visible closed PR is [#40923 fix(install): quote managed tool paths so install works under `$HOME` with spaces](https://github.com/NousResearch/hermes-agent/pull/40923), which fixes [#40820](https://github.com/NousResearch/hermes-agent/issues/40820).
- **20 issues were closed**, heavily concentrated in duplicate cron/`ruamel` failures ([#122222](https://github.com/NousResearch/hermes-agent/issues/122222), [#125269](https://github.com/NousResearch/hermes-agent/issues/125269), [#123400](https://github.com/NousResearch/hermes-agent/issues/123400)) and Desktop/session regressions ([#122513](https://github.com/NousResearch/hermes-agent/issues/122513), [#76531](https://github.com/NousResearch/hermes-agent/issues/76531), [#69638](https://github.com/NousResearch/hermes-agent/issues/69638), [#106012](https://github.com/NousResearch/hermes-agent/issues/106012), [#124731](https://github.com/NousResearch/hermes-agent/issues/124731), [#77375](https://github.com/NousResearch/hermes-agent/issues/77375), [#92570](https://github.com/NousResearch/hermes-agent/issues/92570), [#83729](https://github.com/NousResearch/hermes-agent/issues/83729), [#90169](https://github.com/NousResearch/hermes-agent/issues/90169), [#93140](https://github.com/NousResearch/hermes-agent/issues/93140), [#93138](https://github.com/NousResearch/hermes-agent/issues/93138)).
- **Feature work advanced mainly via open PRs**: [#126687 stable per-message identity for context engines](https://github.com/NousResearch/hermes-agent/pull/126687), [#126940 taste learning](https://github.com/NousResearch/hermes-agent/pull/126940), [#119863 native browser-login backends for plugins](https://github.com/NousResearch/hermes-agent/pull/119863), and [#126964 Claude Sonnet 5.5 native/Bedrock support](https://github.com/NousResearch/hermes-agent/pull/126964).
- **Security hardening PRs opened**: [#126967](https://github.com/NousResearch/hermes-agent/pull/126967) and [#126957](https://github.com/NousResearch/hermes-agent/pull/126957) seed `auth.json` owner-only from the first instant; [#126955](https://github.com/NousResearch/hermes-agent/pull/126955) validates branch pins before URL interpolation.

## 4. Community Hot Topics
Issue comment counts were available; PR comment counts were `undefined` in the supplied dataset, so the ranking below is issue-driven.

1. [#122222 [CLOSED, P1] cron external worker cannot import dependencies on self-managed installs](https://github.com/NousResearch/hermes-agent/issues/122222) — **31 comments, 3 👍**. Underlying need: reliable dependency isolation for scheduled jobs across all install methods.
2. [#122490 [OPEN, P2] bot-to-bot DM delivery runner inherits store python with no third-party deps (`ruamel` death)](https://github.com/NousResearch/hermes-agent/issues/122490) — **13 comments**. Same runtime-boundary problem, now affecting message delivery.
3. [#126324 [OPEN, P3] config check false `unknown toolset` + self-referential `did you mean` for dynamic-plugin platforms](https://github.com/NousResearch/hermes-agent/issues/126324) — **5 comments**. Need: config validation must understand plugin-synthesized toolsets.
4. [#125243 [OPEN, P2] Desktop bundle-skew probes survive app restart and cause CPU spikes on `tree:0` clones](https://github.com/NousResearch/hermes-agent/issues/125243) — **5 comments**. Need: desktop background Git probes must be cancellable and bounded.
5. [#122513 [CLOSED, P2] `prepare_launch()` compares `Path.absolute()` instead of `Path.resolve()`, causing self-relaunch loop](https://github.com/NousResearch/hermes-agent/issues/122513) — **5 comments**. Need: robust venv/store interpreter relaunch detection.

Other notable hot items: [#40820](https://github.com/NousResearch/hermes-agent/issues/40820), [#74092](https://github.com/NousResearch/hermes-agent/issues/74092), [#67936](https://github.com/NousResearch/hermes-agent/issues/67936), [#76531](https://github.com/NousResearch/hermes-agent/issues/76531), [#103010](https://github.com/NousResearch/hermes-agent/issues/103010), [#125269](https://github.com/NousResearch/hermes-agent/issues/125269), [#73014](https://github.com/NousResearch/hermes-agent/issues/73014), [#69638](https://github.com/NousResearch/hermes-agent/issues/69638), [#106012](https://github.com/NousResearch/hermes-agent/issues/106012), [#45188](https://github.com/NousResearch/hermes-agent/issues/45188). Notable open PRs include [#126365 P0 spillover retention](https://github.com/NousResearch/hermes-agent/pull/126365), [#126968 WSL `cmd.exe` metacharacter fix](https://github.com/NousResearch/hermes-agent/pull/126968), [#126966 macOS `ps` unescape](https://github.com/NousResearch/hermes-agent/pull/126966), [#126953 retired node layout](https://github.com/NousResearch/hermes-agent/pull/126953), [#126956 TUI resume](https://github.com/NousResearch/hermes-agent/pull/126956), [#126960 TUI Stop](https://github.com/NousResearch/hermes-agent/pull/126960), [#126965 kanban branch fallback](https://github.com/NousResearch/hermes-agent/pull/126965), and [#126964 Anthropic Sonnet 5.5](https://github.com/NousResearch/hermes-agent/pull/126964).

**Analysis:** The hottest topics cluster around install/runtime isolation, Desktop process lifecycle, and session correctness. The 31-comment cron issue shows high user impact because every scheduled job fails before its ownership ack.

## 5. Bugs & Stability
Ranked by severity. Many were updated in this window, not necessarily first reported today.

**P0 / Critical**
- [#124731 [CLOSED, P0] Persist override overwrites merged user row, dropping earlier unanswered message from live list](https://github.com/NousResearch/hermes-agent/issues/124731) — session-state data loss. Closed.
- [#126365 [OPEN, P0] fix(tools): keep spillover archives for the session retention window](https://github.com/NousResearch/hermes-agent/pull/126365) — prevents broken persisted-output pointers. Needs review/merge.

**P1 / High**
- [#122222 [CLOSED, P1] cron external worker cannot import dependencies on self-managed installs](https://github.com/NousResearch/hermes-agent/issues/122222) — every scheduled job fails. 31 comments.
- [#125269 [CLOSED, P1, duplicate] External cron worker spawns on bare store Python, dies on `ruamel`](https://github.com/NousResearch/hermes-agent/issues/125269).
- [#123400 [CLOSED, P1, duplicate] PM runtime: restart-safe cron external worker dies with `ModuleNotFoundError: ruamel`](https://github.com/NousResearch/hermes-agent/issues/123400).
- [#73014 [OPEN, P1] Desktop stuck on first-run setup choice — `findOnPath()` misses `~/.local/bin` for `hermes` CLI](https://github.com/NousResearch/hermes-agent/issues/73014). No fix PR shown.

**P2 / Medium**
- [#122490 [OPEN, P2] bot-to-bot DM delivery fails on `ruamel`](https://github.com/NousResearch/hermes-agent/issues/122490). No fix PR shown.
- [#125243 [OPEN, P2] Desktop bundle-skew probes survive restart, CPU spikes](https://github.com/NousResearch/hermes-agent/issues/125243).
- [#40820 [OPEN, P2] macOS installer fails when home path contains spaces](https://github.com/NousResearch/hermes-agent/issues/40820). Fix PR [#40923](https://github.com/NousResearch/hermes-agent/pull/40923) is closed, but issue remains open.
- [#67936 [CLOSED, P2] `GET /api/config` can block event loop behind `_SKILLS_PROFILE_LOCK`](https://github.com/NousResearch/hermes-agent/issues/67936).
- [#76531 [CLOSED, P2] Desktop async Git enrichment can overwrite newer session cwd](https://github.com/NousResearch/hermes-agent/issues/76531).
- [#103010 [CLOSED, P2] Windows desktop rebuild fails when username contains apostrophe](https://github.com/NousResearch/hermes-agent/issues/103010).
- [#123347 [OPEN, P2] Group Chat hosted-room worker startup `_DeadlockError` via import chain](https://github.com/NousResearch/hermes-agent/issues/123347).
- [#124542 [OPEN, P2] Kanban worker spawn crashes with `ModuleNotFoundError: hermes_cli.main` on git-checkout installs](https://github.com/NousResearch/hermes-agent/issues/124542).
- [#126072 [OPEN, P2] Desktop Skills Discover "Installed" filter matches by name](https://github.com/NousResearch/hermes-agent/issues/126072).
- [#126098 [OPEN, P2] Termux pinned/native deps can't build; venv bootstrap loops](https://github.com/NousResearch/hermes-agent/issues/126098).
- Closed P2 items: [#69638](https://github.com/NousResearch/hermes-agent/issues/69638), [#106012](https://github.com/NousResearch/hermes-agent/issues/106012), [#110121](https://github.com/NousResearch/hermes-agent/issues/110121), [#77375](https://github.com/NousResearch/hermes-agent/issues/77375), [#83729](https://github.com/NousResearch/hermes-agent/issues/83729), [#92570](https://github.com/NousResearch/hermes-agent/issues/92570).

**P3 / Low**
- [#126324 [OPEN, P3] config check false warnings for dynamic-plugin toolsets](https://github.com/NousResearch/hermes-agent/issues/126324).
- [#45188 [OPEN, P3] Discord embed-only messages, thread starters, and forwards invisible to inbound context](https://github.com/NousResearch/hermes-agent/issues/45188).
- [#126950 [OPEN, P3, security] `auth.json` created world-readable before `chmod`](https://github.com/NousResearch/hermes-agent/issues/126950). Fix PRs [#126967](https://github.com/NousResearch/hermes-agent/pull/126967) and [#126957](https://github.com/NousResearch/hermes-agent/pull/126957) are open.
- [#126925 [OPEN, P3] `tests-js`: prepared npm discovers `lib/npm` fails on macOS realpath mismatch](https://github.com/NousResearch/hermes-agent/issues/126925).
- Closed P3 items: [#90169](https://github.com/NousResearch/hermes-agent/issues/90169), [#93140](https://github.com/NousResearch/hermes-agent/issues/93140), [#93138](https://github.com/NousResearch/hermes-agent/issues/93138), [#74092](https://github.com/NousResearch/hermes-agent/issues/74092).

**Fix PRs exist for:** [#126950 → #126967, #126957](https://github.com/NousResearch/hermes-agent/issues/126950); [#40820 → #40923](https://github.com/NousResearch/hermes-agent/pull/40923); [#126945 → #126954](https://github.com/NousResearch/hermes-agent/pull/126954); [#126948 → #126959](https://github.com/NousResearch/hermes-agent/pull/126959); [#126887 → #126966](https://github.com/NousResearch/hermes-agent/pull/126966); [#126951 → #126955](https://github.com/NousResearch/hermes-agent/pull/126955); [#126934 → #126953](https://github.com/NousResearch/hermes-agent/pull/126953).

**Stability assessment:** The most severe user-facing pattern is runtime/dependency isolation on non-standard installs. Cron, Kanban, and DM workers repeatedly spawn with the wrong Python environment. Desktop and session-state bugs are numerous, but many were closed in this window. Security credential seeding has an open fix path.

## 6. Feature Requests & Roadmap Signals
Open feature PRs:
- [#126687 feat(sessions): stable per-message identity for context engines (salvage #126307)](https://github.com/NousResearch/hermes-agent/pull/126687) — would improve compaction/rewrite robustness for plugins and context engines.
- [#126940 feat(taste): taste learning with decay, conflict escalation, and review-passover integration](https://github.com/NousResearch/hermes-agent/pull/126940) — personalization/preference learning. Label includes `wontfix`, so it may not land as-is.
- [#119863 feat(plugins): support native browser-login backends](https://github.com/NousResearch/hermes-agent/pull/119863) — third-party password managers can register login backends. Needs decision/security-boundary review.
- [#126964 fix(anthropic): Claude Sonnet 5.5 thinking-off and native/Bedrock pickers](https://github.com/NousResearch/hermes-agent/pull/126964) — model support expansion.

**Roadmap prediction:** The next version is likely to be a stabilization release rather than feature-heavy. Expect fixes for dependency isolation (cron/DM/Kanban workers), install/update path handling, `auth.json` permissions, session retention/spillover, TUI resume/Stop behavior, and model picker updates. Feature items [#126687](https://github.com/NousResearch/hermes-agent/pull/126687) and [#119863](https://github.com/NousResearch/hermes-agent/pull/119863) are candidates if maintainers clear decisions; [#126940](https://github.com/NousResearch/hermes-agent/pull/126940) may be deferred.

## 7. User Feedback Summary
**Pain points:**
- Install/update reliability across environments is the top frustration: self-managed/PM/git-checkout installs break cron/Kanban; macOS paths with spaces, Windows apostrophes/cross-env, and Termux native builds fail.
- Desktop app reliability: stuck first-run setup, hidden profiles, blank/amber sessions, reconnect loops from large images, CPU spikes from Git probes, and skills filter confusion.
- Session integrity: dropped unanswered messages, branch resume including parent turns, compress preview mutating context, and `AGENTS.md` not injected.
- Security: `auth.json` world-readable window.
- Platform integrations: Discord embed-only/thread/forward messages invisible.

**Positive signals:** High maintainer responsiveness — many duplicates closed, P0/P1 issues triaged, targeted fix PRs opened same day. Dissatisfaction centers on recurring packaging/runtime-boundary bugs rather than core agent capability.

## 8. Backlog Watch
Long-unanswered or important open items:
- [#40820 [OPEN since 2026-06-06, P2] macOS installer fails when home path contains spaces](https://github.com/NousResearch/hermes-agent/issues/40820). Fix PR [#40923](https://github.com/NousResearch/hermes-agent/pull/40923) is closed, but the issue remains open — verify and close if resolved.
- [#45188 [OPEN since 2026-06-12, P3] Discord embed-only messages/thread starters/forwards invisible to inbound context](https://github.com/NousResearch/hermes-agent/issues/45188). Long-lived integration gap.
- [#73014 [OPEN since 2026-07-28, P1] Desktop stuck on first-run setup choice; `findOnPath()` misses `~/.local/bin`](https://github.com/NousResearch/hermes-agent/issues/73014). High severity for desktop onboarding.
- [#122490 [OPEN since 2026-09-25, P2, 13 comments] bot-to-bot DM delivery fails on `ruamel`](https://github.com/NousResearch/hermes-agent/issues/122490). High community attention, no fix PR shown.
- [#123347 [OPEN since 2026-09-26, P2] Group Chat worker startup `DeadlockError`](https://github.com/NousResearch/hermes-agent/issues/123347).
- [#124542 [OPEN since 2026-09-26, P2] Kanban worker spawn crashes with `ModuleNotFoundError: hermes_cli.main`](https://github.com/NousResearch/hermes-agent/issues/124542).
- [#119863 [OPEN since 2026-09-23, needs-decision] feat(plugins): native browser-login backends](https://github.com/NousResearch/hermes-agent/pull/119863) — security-boundary decision needed.
- [#126365 [OPEN, P0] fix(tools): spillover archive retention](https://github.com/NousResearch/hermes-agent/pull/126365) — P0 fix should get review priority.
- Open fix PRs needing review/merge: [#126953](https://github.com/NousResearch/hermes-agent/pull/126953), [#126956](https://github.com/NousResearch/hermes-agent/pull/126956), [#126960](https://github.com/NousResearch/hermes-agent/pull/126960), [#126965](https://github.com/NousResearch/hermes-agent/pull/126965), [#126966](https://github.com/NousResearch/hermes-agent/pull/126966), [#126967](https://github.com/NousResearch/hermes-agent/pull/126967), [#126957](https://github.com/NousResearch/hermes-agent/pull/126957).

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



# PicoClaw Project Digest — 2026-09-29

---

## 1. Today's Overview

PicoClaw shows moderate but uneven activity: 7 issues and 10 PRs updated in the last 24 hours, yet **no releases** and **zero PRs merged**. The standout development is a concentrated wave of five reliability-focused PRs from contributor **x1F916**, targeting core subsystems (agent loop, channels, config, updater). However, the broader picture is concerning — six of the ten PRs and two of the seven issues are marked `[stale]`, and a community member has announced an **active fork** (`afjcjsbx/picoclaw`), citing perceived maintainer inactivity. Engagement is real but fragmented: users are vocal about UI performance and provider flexibility, while security consciousness is rising.

---

## 2. Releases

**No new releases today.** The latest published version remains v0.3.1. Several fix PRs landing today (see §3) are strong candidates for a near-term patch release, particularly the nil-safety panic fix in `channels.Reload` (#3401) and the ARM release asset selection bug (#3399).

---

## 3. Project Progress

**No PRs were merged or closed today.** All 10 PRs remain open. Below is the active work:

| PR | Title | Author | Focus |
|---|---|---|---|
| [#3403](https://github.com/sipeed/picoclaw/pull/3403) | fix(agent): deliver async tool results to the originating session | x1F916 | Agent loop correctness |
| [#3402](https://github.com/sipeed/picoclaw/pull/3402) | fix(agent): resolve the owning agent in context managers | x1F916 | Agent routing |
| [#3401](https://github.com/sipeed/picoclaw/pull/3401) | fix(channels): make Reload synchronous and nil-safe | x1F916 | Crash prevention |
| [#3400](https://github.com/sipeed/picoclaw/pull/3400) | fix(config): persist all api_keys and enabled flag of multi-key models | x1F916 | Config integrity |
| [#3399](https://github.com/sipeed/picoclaw/pull/3399) | fix(updater): select the matching 32-bit ARM release asset | x1F916 | Update correctness |
| [#3347](https://github.com/sipeed/picoclaw/pull/3347) | fix laggy interface | iMilnb | Web UI performance |
| [#3354](https://github.com/sipeed/picoclaw/pull/3354) | feat(irc): assemble IRCv3 multiline messages | linhongyu510 | IRC channel feature |
| [#3378](https://github.com/sipeed/picoclaw/pull/3378) | fix(auth): use configured scopes instead of hardcoded default | sarff | OAuth scope fix |
| [#3370](https://github.com/sipeed/picoclaw/pull/3370) | feat(tools): add Keenable web search provider | ilya-bogin-keenable | Tools feature |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | refactor(deltachat): cleanup implementation, documentation -200LOC | trufae | Code cleanup |

The x1F916 wave is particularly notable — these are not trivial fixes. PR #3401 addresses a **gateway-exiting panic** (nil channel dereference), #3403 fixes async tool result routing to the correct session/agent, and #3400 repairs config persistence that silently dropped multi-key model settings. If merged, this batch would meaningfully improve stability.

---

## 4. Community Hot Topics

### 🔥 #3281 — Web UI chat input is very laggy when history has a little bit long
- **Author:** xpader | **14 comments**, 2 👍 | [Link](https://github.com/sipeed/picoclaw/issues/3281)
- **Analysis:** The most-engaged issue. Users report severe input lag in the Web UI as chat history grows. This is a real pain point for daily drivers. A fix PR exists (#3347 by iMilnb), but it has not been merged, and the issue remains `[stale]`. The underlying need is clear: a performant, responsive web UI that scales with conversation length.

### 🔥 #3366 — Add support for OpenAI compatible providers
- **Author:** ItachiSan | **5 comments**, 0 👍 | [Link](https://github.com/sipeed/picoclaw/issues/3366)
- **Analysis:** Users want a generic "OpenAI Compatible" provider option to route through self-hosted routers (e.g., 9Router). This reflects a broader demand for provider flexibility beyond the built-in catalog. A related, narrower request (#3397) asks for Tsubasa to be added to the existing catalog. The underlying need is multi-vendor LLM routing without hacks.

### 🔥 #258 — Security Audit (2026-02-16) [CLOSED]
- **Author:** lesichkovm | **5 comments**, 1 👍 | [Link](https://github.com/sipeed/picoclaw/issues/258)
- **Analysis:** A closed but critical security audit identifying vulnerabilities in the tool implementation. It was closed without visible remediation in the data, raising questions about whether findings were addressed. Its continued visibility in the active feed suggests unresolved community concern.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|---|---|---|---|
| 🔴 **Critical** | [#3404](https://github.com/sipeed/picoclaw/issues/3404) — Reliability fixes with reproducers (wave 1) | Multiple reproducible bugs in agent loop, channels manager, config, and updater on current `main` and v0.3.1. Some were previously fixed but PRs were closed by the stale bot before merge. | Fix PRs submitted: #3403, #3402, #3401, #3400, #3399 (all open) |
| 🔴 **Critical** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) — Web UI input lag with long history | Severe UI lag when chat history grows. Reproducible on v0.3.1. | Fix attempted: PR #3347 (open, not yet reviewed/merged) |
| 🟠 **High** | [#258](https://github.com/sipeed/picoclaw/issues/258) — Security Audit (2026-02-16) | Critical vulnerabilities in tool implementation. Status of remediation unclear. | Closed; no visible fix PR |
| 🟡 **Medium** | [#3405](https://github.com/sipeed/picoclaw/issues/3405) — Please enable private vulnerability reporting | Repository lacks `SECURITY.md` and private vulnerability reporting is disabled. A security researcher wants to report issues privately. | No action yet; directly related to #258 |
| 🟡 **Medium** | [#3378](https://github.com/sipeed/picoclaw/pull/3378) — Hardcoded OAuth scopes in `RefreshAccessToken` | Auth token refresh always sends `"openid profile email"`, ignoring provider config. Could cause auth failures with scoped providers. | PR open, `[stale]` |

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood of Next Release |
|---|---|---|
| **OpenAI compatible provider support** — generic provider for self-hosted routers | [#3366](https://github.com/sipeed/picoclaw/issues/3366) | **High** — directly addresses a common user need; implementation path is straightforward (copy OpenAI provider) |
| **Tsubasa provider catalog entry** — add endpoint and model aliases to the provider picker | [#3397](https://github.com/sipeed/picoclaw/issues/3397) | **Medium** — narrow scope, low risk |
| **IRCv3 multiline message support** — assemble long/multi-line IRC messages into one inbound message | [#3354](https://github.com/sipeed/picoclaw/pull/3354) | **Medium-High** — PR is ready, feature-complete, and addresses a real protocol gap |
| **Keenable web search provider** — no-API-key search tool | [#3370](https://github.com/sipeed/picoclaw/pull/3370) | **Medium** — functional PR, but depends on maintainer prioritization of third-party integrations |

---

## 7. User Feedback Summary

**Pain Points:**
- **Web UI performance:** Users consistently report severe input lag with long chat histories (#3281, 14 comments). This is the dominant complaint and directly impacts the primary user interface.
- **Provider flexibility:** Multiple users want OpenAI-compatible routing (#3366, #3397), indicating the built-in catalog is too restrictive for real-world deployments.
- **Maintenance anxiety:** The active fork announcement (#3398) and the volume of `[stale]` issues/PRs have created uncertainty about the project's future. Users are worried about abandonment.

**Use Cases:**
- Self-hosted LLM routing through intermediaries like 9Router.
- Long-running chat sessions in the Web UI without performance degradation.
- Private vulnerability reporting for security researchers.

**Sentiment:** Mixed. Engagement is genuine and constructive (detailed bug reports, reproducers, ready-to-merge PRs), but frustration is mounting over slow maintainer response and the perception of abandonment.

---

## 8. Backlog Watch

These items are `[stale]`, have gone unanswered for weeks/months, and warrant maintainer attention:

| Item | Age | Why It Matters |
|---|---|---|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) — Web UI lag | ~2 months (since July) | Top user complaint; fix PR exists but is unmerged |
| [#3366](https://github.com/sipeed/picoclaw/issues/3366) — OpenAI compatible providers | ~3 weeks (since Sept 4) | High-demand feature; straightforward to implement |
| [#3378](https://github.com/sipeed/picoclaw/pull/3378) — OAuth scope fix | ~2 weeks (since Sept 12) | Simple, correct fix; stale despite being low-risk |
| [#3354](https://github.com/sipeed/picoclaw/pull/3354) — IRCv3 multiline | ~1 month (since Aug 31) | Complete feature PR; addresses a real protocol gap |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) — DeltaChat cleanup | ~3 months (since July 3) | Large refactor; may be too broad for current maintainer bandwidth |
| [#3370](https://github.com/sipeed/picoclaw/pull/3370) — Keenable search provider | ~3 weeks (since Sept 7) | Functional integration; waiting on review |

**⚠️ Critical signal:** The active fork announcement ([#3398](https://github.com/sipeed/picoclaw/issues/3398)) by `afjcjsbx` is the strongest indicator of maintainer inactivity. If the original project cannot absorb the x1F916 reliability PRs or address the stale backlog, community momentum will likely continue shifting to the fork.

---

*Digest generated from GitHub API data for `sipeed/picoclaw` as of 2026-09-29.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



# NanoClaw Project Digest — 2026-09-29

---

## 1. Today's Overview

NanoClaw saw high engineering velocity on 2026-09-29, with **33 PRs updated** (14 open, 19 merged/closed) and **5 issues updated** (2 open, 3 closed). No new releases were cut today, but the volume of merged fixes — particularly around `/update-nanoclaw`, container lifecycle, credential adapters, and CI stability — suggests the team is hardening v2.4.0 (c313d061 / 143db6c9) against a cluster of regressions and edge-case failures. Activity is heavily concentrated in the `core-team` and `setup-installation` areas, signaling an intense bug-sprint rather than feature exploration.

---

## 2. Releases

**No new releases today.** The most recent tagged version remains v2.4.0 (commit c313d061). Several merged PRs today address bugs present in that release, so a patch release (v2.4.1 or v2.4.2) may be imminent.

---

## 3. Project Progress

19 PRs were merged or closed today. Key areas of advancement:

| Area | PRs | Summary |
|---|---|---|
| **Update flow** | #3962, #3956, #3948, #3946, #3963 | Hardened `/update-nanoclaw` cutover, rollback, and gateway container preservation; improved error messaging in skill-apply |
| **Credentials & Gateways** | #3883, #3950, #3919, #3954, #3955, #3960 | Iron CA trust for private model hosts, OneCLI credential naming, gateway skill docs reorganization |
| **Container runtime** | #3654, #3947, #3953, #3957 | NO_PROXY for local hops, container sweep on session deletion, arm64 early-exit, process-group kill on timeout |
| **CI & testing** | #3959, #3963 | Fixed Bun 1.4.0 `spawnSync` hang in agent-runner tests; Node 24 compatibility in update e2e suite |
| **Logging & robustness** | #3958 | Non-JSON-serializable log values no longer crash the host |
| **Mattermost** | #3949 | Callback secret derivation in runtime verification |
| **HTTPS proxy** | #3901 | Host service can reach the internet through an HTTPS proxy |

Notable merged PRs with detailed impact:

- **#3948** — `fix(update): keep gateway-owned containers through cutover and residue reaping`: The Iron Proxy's container was being removed during update, breaking all agent spawns afterward. Gateway is now an official container role.
- **#3956** — `fix(update): rollback stops the live nohup host and drains agent containers`: Rollback now correctly stops the actually-running host (not just the one tracked in `nanoclaw.pid`) and drains agent containers before replacing `data/`.
- **#3962** — `fix(update): refuse cutover when the service liveness probe itself fails`: Prevents `/update-nanoclaw` from reporting `phase: complete` when the old host is still serving.
- **#3950** — `feat(iron): trust an operator's name-constrained local CA for private model hosts`: Iron can now trust custom CAs, enabling private model server names like `https://models.home.arpa/v1`.
- **#3959** — `test(agent-runner): spawn bun children asynchronously so CI stops hanging in spawnSync`: Unblocks main CI after 5 of 8 runs went red on 2026-09-28 due to Bun 1.4.0's `spawnSync` bug (oven-sh/bun#34069).

---

## 4. Community Hot Topics

While comment counts are low across the board (most items have 0 comments), the most impactful threads cluster around two themes:

### The `/update-nanoclaw` flow is fragile
- **#3961** (OPEN, bug): Reports `phase: complete` without restarting the host when `systemctl --user` cannot reach the bus.
- **#3906** (CLOSED): Controller archive misses `setup/` since #3816, and stage-rooted commands run before deps exist.
- **#3907** (CLOSED): Gateway detection fails when a nested pnpm prints a workspace warning to stdout.

These three issues — all from user `glifocat`, all in the update flow — reveal that the update mechanism has multiple failure modes around service detection, dependency ordering, and stdout parsing. The closed ones appear addressed by today's merged PRs (#3962, #3963, #3948, #3956), but #3961 remains open, suggesting the `systemctl --user` bus edge case is not yet fixed.

### Task deletion leaves orphaned state on Linux
- **#3951** (OPEN, bug): `ncl tasks delete` half-fails on Linux when Docker-created root-owned mount points block `rmSync` on the session directory. This causes an indefinite `collectTasks: inbound.db unreadable … SqliteError: unable to open database file` log spam every minute. The root cause is in `buildMounts` (`src/container-ru…`), and no fix PR is linked yet.

**Underlying needs**: Users running NanoClaw on Linux with rootful Docker, systemd user sessions, or proxy-only network access need the update and task-management flows to be fully robust — not just happy-path functional.

---

## 5. Bugs & Stability

Bugs reported or updated today, ranked by severity:

| Severity | Issue/PR | Status | Fix Available? |
|---|---|---|---|
| **High** | [#3951](https://github.com/nanocoai/nanoclaw/issues/3951) — Task deletion half-fails on Linux, orphaned sessions + indefinite DB error log spam | OPEN | No |
| **High** | [#3961](https://github.com/nanocoai/nanoclaw/issues/3961) — `/update-nanoclaw` reports complete without restarting host when `systemctl --user` bus unreachable | OPEN | No |
| **Medium** | [#3906](https://github.com/nanocoai/nanoclaw/issues/3906) — Controller archive misses `setup/` since #3816; stage-rooted commands run before deps | CLOSED | Yes (via #3948/#3962/#3963) |
| **Medium** | [#3907](https://github.com/nanocoai/nanoclaw/issues/3907) — Gateway detection fails on nested pnpm workspace warning to stdout | CLOSED | Yes |
| **Medium** | [#3839](https://github.com/nanocoai/nanoclaw/issues/3839) — `registry-skills: add-opencode` reapply pass hangs in bun test until 6-hour cancel | CLOSED (needs repro) | Unresolved |
| **Low** | [#3958](https://github.com/nanocoai/nanoclaw/pull/3958) — Log crash on non-JSON-serializable values | CLOSED (merged) | Fixed |

**Key observation**: Two high-severity bugs remain open with no linked fix PRs. Both are Linux-specific edge cases that affect core operational flows (task management and updates). The team has been actively merging fixes for the medium-severity update-flow bugs today, which is a positive signal, but #3951 and #3961 need attention.

---

## 6. Feature Requests & Roadmap Signals

No explicit feature requests were filed today. However, several merged PRs represent capability expansions that could be considered feature-adjacent:

- **#3950** — Trusting an operator's name-constrained local CA for private model hosts behind Iron. This unblocks enterprise/home-lab deployments with private model servers (e.g., `https://models.home.arpa/v1`).
- **#3901** — Allowing the host service to reach the internet through an HTTPS proxy (setting `NODE_USE_ENV_PROXY`). This opens NanoClaw to environments where all outbound traffic must go through a corporate proxy.

These suggest the roadmap is quietly expanding support for **on-prem/private-network deployments** — a logical next step for an agent platform that's being pushed into more controlled environments.

---

## 7. User Feedback Summary

User-reported pain points (all from issue bodies, no comments on most items):

- **Update flow is the top friction point**: Users report the update mechanism reporting success when it hasn't actually completed (cutover failures, service not restarting, gateway detection breaking on benign stdout noise).
- **Docker + Linux + rootful mounts**: User `businesslifers` hit a real-world blocker where task deletion leaves orphaned sessions and corrupts the inbound database state. This is a data-loss-adjacent bug.
- **CI reliability**: The team itself was blocked by Bun 1.4.0's `spawnSync` hang (5 of 8 CI runs red on one day), which is a development-experience pain point that's now resolved.
- **OpenCode/Iron ecosystem integration**: Multiple PRs today touch credential adapters, gateway skills, and model URL validation for OpenCode and Iron — indicating active integration work with the broader agent ecosystem.

Overall satisfaction is mixed: the project is clearly in a hardening phase with many targeted fixes landing, but the update mechanism remains a source of user frustration, and at least one open bug (#3951) has data-integrity implications.

---

## 8. Backlog Watch

Items needing maintainer attention that have not seen movement:

| Item | Age | Why It Matters |
|---|---|---|
| **[#3951](https://github.com/nanocoai/nanoclaw/issues/3951)** — Task deletion half-fails on Linux | 1 day old | Orphaned sessions + indefinite DB error log spam; root cause in `buildMounts`. No fix PR linked. |
| **[#3961](https://github.com/nanocoai/nanoclaw/issues/3961)** — Update reports complete without restarting host | 1 day old | Users may believe an update succeeded when the old host is still serving. No fix PR linked. |
| **[#3839](https://github.com/nanocoai/nanoclaw/issues/3839)** — `add-opencode` reapply pass hangs in bun test | 13 days old | Tagged `triage/needs-repro`; the hang is unchanged on current `main`. Blocks CI for the providers registry branch. |

---

**Bottom line**: NanoClaw is in an active bug-sprint with strong daily PR throughput (19 merged/closed today). The update flow is the focal point of both user-reported bugs and merged fixes. Two high-severity Linux edge cases (#3951, #3961) remain open without linked fixes and should be triaged promptly — especially #3951, which has data-integrity implications. The project health is good overall, with CI unblocked and several structural improvements (gateway container roles, CA trust, proxy support) landing in the same cycle.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>



# NullClaw Project Digest — 2026-09-29

## 1. Today's Overview
Over the last 24 hours, NullClaw experienced high development velocity, with **17 issues and 7 pull requests** updated. The project is undergoing a major consolidation phase: nearly all historical issues (16 out of 17) were closed, and significant architectural features—such as the adaptive intelligence pipeline, bidirectional email integration, and official DingTalk Bot API support—were merged. Overall project health is highly positive, marked by systematic bug cleanup, expanded LLM provider support, and improved documentation.

## 2. Releases
* **Latest Version:** No official release tag was published directly yet, but release preparation is underway. PR [#1014](https://github.com/nullclaw/nullclaw/pull/1014) ("v20260929") has been closed, indicating the version bump to **v20260929** is in progress.
* **Key Changes in v20260929 Prep:**
  * **Web Search Pinning:** Web search is now pinned strictly to the configured provider, stopping Exa from rejecting duplicate `Content-Type` headers.
  * **QQ Markdown Stripping:** Markdown markers are now stripped before sending messages via official QQ replies to ensure clean formatting.

## 3. Project Progress
The project saw major feature advancements merged today:
* **Adaptive Intelligence Pipeline ([PR #527](https://github.com/nullclaw/nullclaw/pull/527)):** Merged a complete post-turn quality loop featuring a *Turn Scorer* (weighted signal scoring from -1.0 to +1.0) and a deterministic *Skill Router* to learn from interactions without extra API calls.
* **Bidirectional Email Channel ([PR #667](https://github.com/nullclaw/nullclaw/pull/667)):** Upgraded the email channel from send-only to full bidirectional polling, implementing IMAP IDLE mode for instant push notifications and automatic fallback for servers lacking IDLE support.
* **DingTalk Bot API Integration ([PR #319](https://github.com/nullclaw/nullclaw/pull/319)):** Replaced webhook-only messaging with the official DingTalk Bot API, enabling full message recall support and robust OAuth2 access token management.
* **Tool Customization System ([PR #411](https://github.com/nullclaw/nullclaw/pull/411)):** Implemented trigger-based prioritization and parameter management, allowing users to configure tools with custom trigger keywords and pre-configured arguments.
* **New LLM Providers:** 
  * **Eden AI ([PR #990](https://github.com/nullclaw/nullclaw/pull/990)):** Added as an OpenAI-compatible gateway routing to multiple upstream vendors from an EU-based endpoint.
  * **Tsubasa Provider ([PR #1013](https://github.com/nullclaw/nullclaw/pull/1013) - *OPEN*):** Currently awaiting review/merge; adds Tsubasa chat-completions with a 32k token context window.

## 4. Community Hot Topics
* **Agent Skills Standard Integration ([#764](https://github.com/nullclaw/nullclaw/issues/764) - OPEN):** 5 comments. The community is actively requesting that NullClaw be listed as an official client on the new [agentskills.io](https://agentskills.io/) website. This is the only open issue in the current batch and represents a key standard compliance need.
* **Configuration Documentation ([#613](https://github.com/nullclaw/nullclaw/issues/613)):** 3 comments, 4 👍. High user demand for clearer, more practical descriptions of `config.json` options and default values to lower the barrier to entry for newcomers.
* **Web UI Headless Setup ([#861](https://github.com/nullclaw/nullclaw/issues/861)):** 5 comments. Users sought non-jargon, human-readable instructions for tunneling the Web UI on headless VPS servers.

## 5. Bugs & Stability
The maintainers performed a significant bug triage cycle today, closing several critical historical issues:
* **Core Tool Parsing Bug ([#408](https://github.com/nullclaw/nullclaw/issues/408)):** High severity. The agent incorrectly parsed the tool name as a colon (`:`) instead of the actual tool name (e.g., `memory_recall`) when reading valid JSON tool calls from LLMs like those served via LM Studio. (Closed).
* **Homebrew Daemon Crash ([#354](https://github.com/nullclaw/nullclaw/issues/354)):** High severity. Upgrading via Homebrew silently broke the daemon service because the LaunchAgent plist hardcoded versioned Cellar binary paths. (Closed).
* **Runtime NoResponseContent Error ([#665](https://github.com/nullclaw/nullclaw/issues/665)):** Runtime crash/error when running specific local model assemblies. (Closed).
* **Feishu WebSocket Disconnects ([#477](https://github.com/nullclaw/nullclaw/issues/477)):** Gateway stability issues where the Feishu WebSocket connection would drop unexpectedly. (Closed).
* **Documentation Build Failures ([#932](https://github.com/nullclaw/nullclaw/issues/932)):** Fixed invalid Zig version requirements in the getting-started docs (needed Zig 0.16.0+ instead of the documented 0.15.2). (Closed).

## 6. Feature Requests & Roadmap Signals
Based on closed and open issues, the following roadmap signals are emerging:
* **Multimodal / Vision Pipeline ([#624](https://github.com/nullclaw/nullclaw/issues/624)):** Strong user demand to send images and files directly to multimodal LLMs via base64 encoding.
* **Metasearch Web Search ([#623](https://github.com/nullclaw/nullclaw/issues/623)):** Request to integrate the `ddgs` metasearch library to aggregate web search results from diverse engines.
* **HTTP Agent Monitoring Endpoint ([#631](https://github.com/nullclaw/nullclaw/issues/631)):** Request for a standard `GET /status` HTTP endpoint on the gateway

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-09-29

## 1. Today's Overview
IronClaw shows **low-to-moderate maintenance activity** in the last 24 hours: **2 open issues** and **3 pull requests** were updated, with **1 PR closed** and **no new releases**. Community engagement signals are flat — the listed issues have **0 comments and 0 👍**, and PR comment counts are not available in the snapshot. The open issues focus on **benchmark failure triage** and **Tsubasa provider configuration**, while the open PRs are primarily **automation-driven documentation and codebase-graph refreshes**. Overall project health appears **stable but quiet**, with maintainer review/merge of automated PRs likely being the main bottleneck.

## 2. Releases
No new releases in this window.

## 3. Project Progress
- **[CLOSED] PR #5132 — `fix(webui-v2): redirect invalid chat thread routes`**  
  https://github.com/nearai/ironclaw/pull/5132  
  Closed after being created on 2026-06-22. The change redirects reserved or invalid `/chat/:threadId` routes back to `/chat`, waits for the thread list to settle before deciding a deep-linked thread is missing, keeps locally created/selected threads active during refetch, and adds ChatPage regression coverage. Merge status is not explicitly stated in the snapshot; it is listed as closed.

- **[OPEN] PR #6698 — `docs: update OpenWiki wiki`**  
  https://github.com/nearai/ironclaw/pull/6698  
  Automated OpenWiki narrative-docs refresh. Not auto-merged; requires human approval per change-management policy.

- **[OPEN] PR #7988 — `chore(agents): refresh codebase knowledge graph`**  
  https://github.com/nearai/ironclaw/pull/7988  
  Nightly refresh of the committed codebase-memory bootstrap snapshot. Also awaiting normal review/merge.

No user-facing feature PRs were merged in this window.

## 4. Community Hot Topics
There are **no hot topics by comments or reactions** in this snapshot: issues show **0 comments / 0 👍**, and PR comment counts are undefined. The most recently updated items are:

- **Issue #8116 — Daily ironclaw failure taxonomy — 2026-09-28**  
  https://github.com/nearai/ironclaw/issues/8116  
  Underlying need: systematic triage of benchmark non-pass tasks. The officeqa run had 31 non-pass tasks, described as mostly genuine model-quality errors, with DeepSeek-V4-Flash navigation issues mentioned.

- **Issue #8115 — Add a Tsubasa registry entry with an explicit 32K context-budget path**  
  https://github.com/nearai/ironclaw/issues/8115  
  Underlying need: simpler provider setup. Users currently must manually enter the Tsubasa endpoint and model; a named provider could clarify credential setup and model selection.

- **PR #6698 / PR #7988 — automation maintenance**  
  https://github.com/nearai/ironclaw/pull/6698  
  https://github.com/nearai/ironclaw/pull/7988  
  Underlying need: keep documentation and codebase-memory artifacts current with low manual overhead.

## 5. Bugs & Stability
Ranked by severity based on available data:

1. **Medium — Benchmark/model-quality failures (#8116)**  
   https://github.com/nearai/ironclaw/issues/8116  
   The officeqa benchmark reported 31 non-pass tasks, mostly attributed to genuine model-quality errors, with DeepSeek-V4-Flash navigation mentioned. This is an evaluation/quality stability signal rather than a crash report. No fix PR is referenced.

2. **Low — WebUI invalid chat thread routes (#5132)**  
   https://github.com/nearai/ironclaw/pull/5132  
   A webui-v2 routing bug affecting invalid or reserved `/chat/:threadId` deep links. The PR was closed and includes regression coverage. No crash or data-loss indication.

No new crashes, regressions, or outage reports appear in the provided data.

## 6. Feature Requests & Roadmap Signals
- **Tsubasa provider registry entry with 32K context-budget path (#8115)**  
  https://github.com/nearai/ironclaw/issues/8115  
  This is the clearest user-requested feature. It suggests near-term roadmap interest in **named provider presets, credential setup, model selection, and explicit context-budget controls**. It may be a candidate for the next version if maintainers prioritize provider configuration.

- **Failure taxonomy / benchmark triage (#8116)**  
  https://github.com/nearai/ironclaw/issues/8116  
  Signals continued investment in **evaluation tooling and model-quality analysis**, though it is not a direct product feature.

- **Automation PRs (#6698, #7988)**  
  https://github.com/nearai/ironclaw/pull/6698  
  https://github.com/nearai/ironclaw/pull/7988  
  Indicate ongoing roadmap hygiene around **documentation freshness and codebase-memory graph maintenance**.

No release notes are available, so next-version contents cannot be confirmed.

## 7. User Feedback Summary
Real user pain points visible in this snapshot:
- **Manual Tsubasa configuration**: users must enter endpoint and model manually; credential setup and model selection could be clearer.
- **Benchmark failures**: officeqa non-pass tasks and DeepSeek-V4-Flash navigation issues point to model-quality and evaluation concerns.
- **WebUI deep-link routing**: invalid chat thread routes could lead to poor navigation UX, now addressed by a closed PR.

Satisfaction/dissatisfaction cannot be measured reliably because there are **no comments or reactions** on the listed items. The feedback is constructive and issue-driven, but community engagement is low.

## 8. Backlog Watch
- **PR #6698 — OpenWiki docs refresh**  
  https://github.com/nearai/ironclaw/pull/6698  
  Open since **2026-07-27**, updated 2026-09-28. Automated docs PR requiring human approval. Longest-open PR in this snapshot and a candidate for maintainer attention.

- **PR #7988 — Codebase knowledge graph refresh**  
  https://github.com/nearai/ironclaw/pull/7988  
  Open since **2026-08-29**, updated 2026-09-28. Automated chore PR awaiting review/merge.

- **PR #5132 — WebUI chat thread route fix**  
  https://github.com/nearai/ironclaw/pull/5132  
  Created **2026-06-22** and closed **2026-09-28** after roughly three months. Its long lifetime suggests earlier backlog pressure, though it is now resolved.

- **Issues #8115 and #8116**  
  https://github.com/nearai/ironclaw/issues/8115  
  https://github.com/nearai/ironclaw/issues/8116  
  Newly created on 2026-09-28 with no comments yet; monitor for maintainer triage and prioritization.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



Based on the provided GitHub data for **LobsterAI** (`netease-youdao/LobsterAI`) updated up to September 28, 2026, here is the structured project digest for **2026-09-29**.

---

### 1. Today's Overview
LobsterAI is experiencing a high level of development activity, characterized by substantial progress in backend stability, particularly around the OpenClaw gateway integration and Cowork UI features. Out of 14 updated Pull Requests (PRs), 11 were successfully merged or closed, indicating a strong push toward stabilizing recent feature releases. Meanwhile, the issue tracker shows 4 active/open issues, mostly marked as stale, indicating a need for active maintainer triage or user follow-up on older bug reports.

### 2. Releases
*   **No new releases** were published in the last 24 hours.

### 3. Project Progress
The development team has merged significant updates focusing on gateway reliability, UI rendering, and office document capabilities:
*   **OpenClaw Gateway Stabilization:** A series of critical fixes were merged to improve app launch behavior and repair flows. This includes starting the gateway only once on app launch (#2775), reclaiming gateway locks whose recorded PIDs were reused on Windows (#2771), skipping orphan non-ASCII agent directories during legacy session migration (#2772), and improving repair timeout handling and diagnostics (#2774).
*   **Cowork Mode UX Enhancements:** Two major UI improvements were merged to handle intensive agent workflows better. PR #2778 introduces native OpenClaw progress cards above the composer to make plans visible, while PR #2777 limits long-running turns to the latest five steps to prevent UI flooding during lengthy tool executions.
*   **Office Document Editing:** PR #2776 merged support for editing PPT, Word, and Excel documents, significantly expanding the agent's productivity toolset.
*   **Security Hardening:** Closed critical security gaps, including rejecting protocol-relative URLs in markdown link transforms (#974) and validating URL protocols in the `shell:openExternal` IPC handler to prevent arbitrary protocol execution (#1034).
*   **Platform & IM Fixes:** Resolved a message deduplication bug in NimGateway that caused silent message loss after reconnections (#1035), fixed the unrecoverable state of the Xiaomifeng gateway after being kicked offline (#975), and resolved Windows WSL/Git Bash node lookup failures (#1037).

### 4. Community Hot Topics
*   **Qwen Model Integration Issues (#972):** Users report a critical UI lock-up where the app gets stuck in an infinite "AI engine starting gateway" loop after closing and reopening a saved Qwen model session. This represents a major usability blocker.
*   **Agent Output Quality (#971):** Users have highlighted issues with disorganized and irrelevant content generation, such as when asking for a novel cover, the model outputs massive amounts of unrelated text.
*   **Tool Execution Accuracy (#968):** A user reported that the browser tool used by a custom agent displayed incorrect weather data (not Hangzhou) when querying weather forecasts, raising concerns about tool-use reliability.
*   **macOS UX Compliance (#973):** Feedback regarding keyboard shortcuts displaying `Ctrl` instead of the standard macOS `Cmd` modifier key in the settings panel.
*   **Dependency Updates (#1277):** A major automated dependency bump updating the Electron group from v43 to v44, drawing developer attention due to potential platform API changes.

### 5. Bugs & Stability
Bugs are ranked below by severity, noting whether a fix has been deployed:
*   **Critical / High Severity (Fixed):**
    *   **Silent Message Loss (#1035):** NimGateway global dedup cache was not cleared upon network reconnection, leading to silent message drops. *(Status: Closed/Fixed)*
    *   **Arbitrary Protocol Execution (#1034):** The `shell:openExternal` IPC lacked URL protocol validation. *(Status: Closed/Fixed)*
    *   **Gateway Crash on Kick-Offline (#975):** Xiaomifeng gateway became unrecoverable after being kicked offline by another client. *(Status: Closed/Fixed)*
*   **Medium Severity (Open / Stale):**
    *   **Gateway Loop Crash (#972):** App gets stuck in a gateway startup loop when reopening Qwen model configurations. *(Status: Open, needs investigation)*
    *   **Disorganized Content Generation (#971):** Model outputs irrelevant, massive amounts of text instead of requested assets (e.g., novel covers). *(Status: Open, needs evaluation)*
    *   **Browser Tool Inaccuracy (#968):** Browser tool displays incorrect geographical data during agent automated tasks. *(Status: Open, needs reproduction)*
*   **Low Severity (Open / Stale):**
    *   **macOS Shortcut Key Display (#973):** Settings panel displays `Ctrl` instead of `Cmd` for keyboard shortcuts on macOS. *(Status: Open)*

### 6. Feature Requests & Roadmap Signals
The merged and active PRs suggest a roadmap heavily focused on **stabilizing the desktop host environment** and **enhancing agent workspace collaboration (Cowork)**:
*   The massive document editing expansion (#2776) indicates a push to make LobsterAI a fully functional office assistant.
*   The UI changes in Cowork (#2777, #2778) signal a transition toward highly autonomous, long-running agent workflows, requiring robust progress tracking and UI optimization.
*   The Electron group upgrade (#1277) indicates preparation for upcoming major desktop platform updates.

### 7. User Feedback Summary
Users are experiencing core functional friction when utilizing specific LLM integrations (like Qwen) and agent-based tool chains (browser weather queries). While security and IM gateway stability fixes are highly valued, the open bugs regarding output formatting and model-specific gateway loops represent significant pain points. Platform-specific UI details, such as macOS shortcut key conventions, remain minor but persistent sources of dissatisfaction.

### 8. Backlog Watch
The following items require maintainer attention as they remain open and stale, yet represent active user complaints:
*   **Issue #972 (Qwen Gateway Loop):** A critical usability bug that needs a formal repro and code fix.
*   **Issue #971 (Disorganized Output):** Points to potential prompt parsing or model output control issues.
*   **PR #1277 (Electron Bump):** Although opened in April 2026, the massive Electron version bump requires thorough regression testing to ensure the major desktop host stability fixes don't break the newly added document editing features.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-09-29

**Repository:** [github.com/moltis-org/moltis](https://github.com/moltis-org/moltis)

---

## 1. Today's Overview

Moltis recorded a low-activity day, with no issues updated, no new releases, and a single open pull request in the last 24 hours. The lone activity is PR [#1288](https://github.com/moltis-org/moltis/pull/1288), which adds a new Tsubasa provider to the setup flow and the OpenAI-compatible model registry. With zero issue traffic and zero merges, the project's day-over-day signal is essentially flat: work is in flight but not yet integrated. Overall activity can be assessed as **quiet / low-velocity**, driven by a single in-progress contribution rather than coordinated maintainer or community engagement. No stability or regression signals were reported.

---

## 2. Releases

No new releases were published in this window (latest releases: none reported). No version, breaking-change, or migration information is available for this digest.

---

## 3. Project Progress

No pull requests were merged or closed in the last 24 hours, so no features were formally landed or bugs fixed today.

**In flight:**
- [PR #1288](https://github.com/moltis-org/moltis/pull/1288) — *feat: add Tsubasa provider to setup and model registry* (author: **cenab**, opened 2026-09-28, still OPEN). This PR would extend the provider surface by registering Tsubasa alongside existing providers, which is a meaningful capability addition for users who want OpenAI-compatible endpoints. It remains unmerged, so the progress is prospective rather than realized.

---

## 4. Community Hot Topics

There is effectively no community discussion volume to rank today.

- **Most active item:** [PR #1288](https://github.com/moltis-org/moltis/pull/1288) — but with **0 reactions** and **no comment count recorded** (`Comments: undefined`), there is no measurable engagement.
- **Issues:** none updated in the last 24 hours, so no hot issue threads exist.

**Underlying need analysis (inferred from the PR):** The Tsubasa contribution suggests demand for *broader provider coverage* and *cheap/easy onboarding of OpenAI-compatible backends*. The PR explicitly wires up `TSUBASA_API_KEY`, defaults to `https://api.tsubasa.sh/v1`, and registers `tsubasa-fast` and `tsubasa-pro` with 32,768-token context windows. This points to a user segment that wants turnkey model-provider integrations rather than manual/custom configuration. The absence of comments and reactions, however, means there is no corroborating community signal yet — the need is asserted by one contributor, not validated by a crowd.

---

## 5. Bugs & Stability

**No bugs, crashes, or regressions were reported in the last 24 hours** (0 issues updated; 0 open/active issues). There are consequently no severity rankings and no fix PRs to track. Stability status today: **no adverse signals, but also no confirmation of stability from issue traffic** — the sample is simply empty.

---

## 6. Feature Requests & Roadmap Signals

No formal feature requests (Issues) were filed today. The only roadmap-relevant signal is the content of PR #1288, which implies the following candidate capabilities are near-term:

- **New provider integration: Tsubasa** — OpenAI-compatible, keyed via `TSUBASA_API_KEY`, base URL `https://api.tsubasa.sh/v1`.
- **Two new model entries:** `tsubasa-fast` and `tsubasa-pro`, both with 32,768-token context windows.
- **Supporting plumbing:** config-name validation, generated template updates, and README documentation (the provided summary is truncated at "the READM…", so the full documentation scope is unverified).

**Prediction:** If #1288 is reviewed and merged, Tsubasa support is the most likely item to appear in the next release. Given there is only one open PR and no competing roadmap input, it is effectively the sole candidate for the next version's feature delta.

---

## 7. User Feedback Summary

There is no direct user feedback in this window: no issues, no comments, and no reactions. The only implicit feedback is the contribution itself — a community author (**cenab**) investing effort to add a provider, which is a mild positive signal of ecosystem interest and of the provider-registry extension points being usable by outside contributors. No pain points, use cases, satisfaction, or dissatisfaction can be reported with confidence, and any claim to the contrary would be unsupported by the data.

---

## 8. Backlog Watch

No long-unanswered Issues or PRs can be identified from this dataset:

- **Issues:** 0 total, so there is no backlog of unanswered reports.
- **PRs:** #1288 is the only open PR and is **1 day old** (created 2026-09-28, updated 2026-09-28), which does not qualify as backlog. It does, however, warrant **maintainer review attention**, since it is the project's only open change and currently has no recorded review activity.

**Watch item:** [PR #1288](https://github.com/moltis-org/moltis/pull/1288) — needs maintainer triage/review to avoid stalling; unresolved for more than a few days, it would become the project's de facto bottleneck given the absence of other activity.

---

### Health Snapshot

| Metric | Value | Assessment |
|---|---|---|
| Issues updated (24h) | 0 | No inbound community signal |
| PRs updated (24h) | 1 (open) | Minimal, single-thread activity |
| Merges/closes | 0 | No shipped progress today |
| New releases | 0 | No distribution change |
| Open bugs | 0 | No stability risk reported |

**Bottom line:** Moltis is in a quiet state with one unmerged feature PR and no issue or release activity. Project health cannot be judged strongly in either direction from a single day of near-zero data; the actionable item is maintainer review of PR #1288.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-09-29

## 1. Today's Overview

CoPaw showed high development throughput on 2026-09-29: 16 PRs were updated, including 12 open and 4 merged/closed, while 6 issues were updated (5 active, 1 closed) and no release shipped. The dominant theme is context/media lifecycle reliability, with the closed [#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853) and open [#8009](https://github.com/agentscope-ai/QwenPaw/issues/8009) both involving image/base64 payloads that can exhaust or permanently break sessions. Four PRs closed, including a context-media reclamation fix and a multi-tab chat terminal. Activity is high but skewed toward bug fixes, infrastructure, and console polish rather than new releases. Community reaction remains low per item (0 👍), though first-time contributors are visible across several open PRs.

## 2. Releases

No new releases in the last 24 hours. Latest releases: None.

## 3. Project Progress

### Merged/Closed PRs Today (4)

- [#7965](https://github.com/agentscope-ai/QwenPaw/pull/7965) `fix(context): reclaim historical media in Scroll and align thinking omission with token counting` — addresses the media/context accumulation problem related to [#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853).
- [#7956](https://github.com/agentscope-ai/QwenPaw/pull/7956) `feat(console): unify settings UX and smooth conversation transitions` — console settings UX and workspace-picker fixes.
- [#7953](https://github.com/agentscope-ai/QwenPaw/pull/7953) `fix(portability): preserve actionable per-asset import failures` — improves import error reporting.
- [#7861](https://github.com/agentscope-ai/QwenPaw/pull/7861) `feat(console): add authenticated multi-tab chat terminal` — adds lazy-loaded terminal tabs with conversation-scoped working directories.

### Open PRs Advanced Today (12)

- [#7871](https://github.com/agentscope-ai/QwenPaw/pull/7871) `fix(tools): prevent literal markers from bypassing output truncation`
- [#8010](https://github.com/agentscope-ai/QwenPaw/pull/8010) `fix(agents): recover from media payload rejections instead of failing` — fixes [#8009](https://github.com/agentscope-ai/QwenPaw/issues/8009)
- [#8007](https://github.com/agentscope-ai/QwenPaw/pull/8007) `fix(task_tracker): register run only after the producer task exists`
- [#8006](https://github.com/agentscope-ai/QwenPaw/pull/8006) `fix(qq): drop replayed gateway events by id and sequence`
- [#7931](https://github.com/agentscope-ai/QwenPaw/pull/7931) `feat(chat): add durable paginated transcript history`
- [#8008](https://github.com/agentscope-ai/QwenPaw/pull/8008) `chore(deps): bumping version of agentscope to 2.0.9`
- [#8005](https://github.com/agentscope-ai/QwenPaw/pull/8005) `feat(console): unify interface font scaling`
- [#7987](https://github.com/agentscope-ai/QwenPaw/pull/7987) `fix(browser): support Playwright default argument exclusions`
- [#7988](https://github.com/agentscope-ai/QwenPaw/pull/7988) `fix(tools): skip binary and internal files in grep search`
- [#7989](https://github.com/agentscope-ai/QwenPaw/pull/7989) `fix(console): keep Markdown table scrolling reachable`
- [#8004](https://github.com/agentscope-ai/QwenPaw/pull/8004) `perf(cli): lazy-import init_cmd in app_cmd startup path`
- [#8003](https://github.com/agentscope-ai/QwenPaw/pull/8003) `fix(ci): resolve cross-platform path handling and test failures`

## 4. Community Hot Topics

- [#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853) — **8 comments**, CLOSED. `ToolResultPruner` skips media blocks (`type="data"`), allowing `view_image` base64 payloads to accumulate unbounded and blow the model context. This was the most-discussed item and the clearest signal that context pruning must cover non-text blocks.
- [#7991](https://github.com/agentscope-ai/QwenPaw/issues/7991) — **2 comments**, OPEN. `TaskTracker` zombie entries inflate `running_task_count`, causing dashboard/API disagreement. Underlying need: consistent task state and observability.
- [#4525](https://github.com/agentscope-ai/QwenPaw/issues/4525) — **2 comments**, OPEN. Requests agent self-managed context lifecycle with auto checkpoint/reset for cron tasks. Underlying need: long-running automation reliability as context grows.
- [#8009](https://github.com/agentscope-ai/QwenPaw/issues/8009) — **1 comment**, OPEN. Oversized image makes a session permanently unusable. Underlying need: recoverable media rejection handling.
- [#7990](https://github.com/agentscope-ai/QwenPaw/issues/7990) — **1 comment**, OPEN. Model catalog lacks `thinking_param_style` for Aliyun Token Plan models, hiding Console thinking controls. Underlying need: complete model capability metadata.
- [#8002](https://github.com/agentscope-ai/QwenPaw/issues/8002) — **1 comment**, OPEN. Windows `auto` mode with sandbox off allows inline Office COM `Quit()` to close the user’s PowerPoint. Underlying need: safer default execution boundaries.

## 5. Bugs & Stability

Ranked by severity:

| Severity | Item | Status | Fix PR |
|---|---|---|---|
| Critical | [#8009](https://github.com/agentscope-ai/QwenPaw/issues/8009) Oversized image stored in context makes a session permanently unusable | OPEN | [#8010](https://github.com/agentscope-ai/QwenPaw/pull/8010) OPEN |
| High | [#8002](https://github.com/agentscope-ai/QwenPaw/issues/8002) Windows auto mode with sandbox off allows inline Office COM `Quit()` to close PowerPoint | OPEN | None listed |
| High | [#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853) `ToolResultPruner` skips media blocks, causing base64 accumulation and context blowout | CLOSED | [#7965](https://github.com/agentscope-ai/QwenPaw/pull/7965) CLOSED |
| Medium | [#7991](https://github.com/agentscope-ai/QwenPaw/issues/7991) `TaskTracker` zombie entries inflate `running_task_count`, disagree with `/api/chats` | OPEN | [#8007](https://github.com/agentscope-ai/QwenPaw/pull/8007) OPEN |
| Medium | [#7990](https://github.com/agentscope-ai/QwenPaw/issues/7990) Missing `thinking_param_style` hides thinking controls for Aliyun Token Plan models | OPEN | None listed |

The most serious unresolved stability risk is [#8009](https://github.com/agentscope-ai/QwenPaw/issues/8009), because it can permanently break a conversation. [#8002](https://github.com/agentscope-ai/QwenPaw/issues/8002) is a high-severity safety/security concern on Windows when sandboxing is disabled.

## 6. Feature Requests & Roadmap Signals

- [#4525](https://github.com/agentscope-ai/QwenPaw/issues/4525) — Agent self-managed context lifecycle: auto checkpoint and reset for cron tasks. Strong roadmap signal for long-running automation.
- [#7990](https://github.com/agentscope-ai/QwenPaw/issues/7990) — Model catalog should declare `thinking_param_style` for Aliyun Token Plan models. Likely a targeted catalog/config update.
- [#7931](https://github.com/agentscope-ai/QwenPaw/pull/7931) — Durable paginated transcript history with SQLite storage and stable cursors. Could materially improve chat reliability and refresh behavior.
- [#8006](https://github.com/agentscope-ai/QwenPaw/pull/8006) — QQ gateway event deduplication by ID and sequence. Prevents double execution and duplicate approvals.
- [#8007](https://github.com/agentscope-ai/QwenPaw/pull/8007) — TaskTracker bookkeeping fix. Directly relevant to [#7991](https://github.com/agentscope-ai/QwenPaw/issues/7991).
- [#8010](https://github.com/agentscope-ai/QwenPaw/pull/8010) — Media payload rejection recovery. Directly relevant to [#8009](https://github.com/agentscope-ai/QwenPaw/issues/8009).
- [#7987](https://github.com/agentscope-ai/QwenPaw/pull/7987), [#7988](https://github.com/agentscope-ai/QwenPaw/pull/7988), [#7989](https://github.com/agentscope-ai/QwenPaw/pull/7989), [#8005](https://github.com/agentscope-ai/QwenPaw/pull/8005), [#8004](https://github.com/agentscope-ai/QwenPaw/pull/8004), [#8003](https://github.com/agentscope-ai/QwenPaw/pull/8003) — Smaller but important tooling, console, CLI, and CI improvements.

Predicted next-version candidates: context lifecycle management, media rejection recovery, durable transcript history, model catalog completeness, Windows sandbox hardening, and QQ event deduplication.

## 7. User Feedback Summary

Real user pain points are concentrated in three areas:

- **Context and memory reliability:** Users report image/base64 accumulation, oversized image rejection, and cron-task quality degradation as context grows ([#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853), [#8009](https://github.com/agentscope-ai/QwenPaw/issues/8009), [#4525](https://github.com/agentscope-ai/QwenPaw/issues/4525)).
- **Safety and trust:** On Windows, `auto` approval with sandbox off can execute Office COM commands that close the user’s PowerPoint ([#8002](https://github.com/agentscope-ai/QwenPaw/issues/8002)).
- **Observability and configuration gaps:** Dashboard counters disagree with chat APIs ([#7991](https://github.com/agentscope-ai/QwenPaw/issues/7991)), and Aliyun Token Plan models lack thinking-control metadata ([#7990](https://github.com/agentscope-ai/QwenPaw/issues/7990)).

Use cases mentioned include report generation with image sending, long multi-step cron pipelines, Windows Office automation, and Aliyun Token Plan model usage. Satisfaction signals are muted: all listed issues and PRs have 0 👍, and comment counts are low. However, the volume of first-time contributor PRs suggests active community engagement and willingness to fix reported problems.

## 8. Backlog Watch

- [#4525](https://github.com/agentscope-ai/QwenPaw/issues/4525) — Open since 2026-05-19, only 2 comments, no fix PR. A long-standing feature request for agent-managed context lifecycle; needs maintainer prioritization.
- [#7871](https://github.com/agentscope-ai/QwenPaw/pull/7871) — Open since 2026-09-18, no comments. Fixes a tool-output truncation bypass; should be reviewed for merge.
- [#7931](https://github.com/agentscope-ai/QwenPaw/pull/7931) — Open since 2026-09-22, no comments. Significant durable transcript-history feature; needs review or design feedback.
- [#7987](https://github.com/agentscope-ai/QwenPaw/pull/7987), [#7988](https://github.com/agentscope-ai/QwenPaw/pull/7988), [#7989](https://github.com/agentscope-ai/QwenPaw/pull/7989) — Open since 2026-09-25, no comments, first-time contributors. Small but useful fixes; maintainer review would reduce contributor friction.
- [#7990](https://github.com/agentscope-ai/QwenPaw/issues/7990) — Open since 2026-09-25, 1 comment. Model catalog completeness request; likely low effort, high user-visible impact.
- [#7991](https://github.com/agentscope-ai/QwenPaw/issues/7991) — Open since 2026-09-26, 2 comments, with related fix PR [#8007](https://github.com/agentscope-ai/QwenPaw/pull/8007) open. Needs validation and merge decision.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-09-29

## 1. Today’s Overview
ZeptoClaw shows **low activity** for the 2026-09-29 digest: 2 open issues and 1 open PR were updated in the last 24h, with **0 closed issues, 0 merged/closed PRs, and 0 new releases**. The active items were all created/updated on 2026-09-28, so the current window mostly reflects carryover rather than new 2026-09-29 activity. Community engagement is minimal: the issues have 0 comments and 0 reactions, and the PR has no comment count provided. The main technical thread is oversized tool-output handling, with Issue #707 and PR #708 proposing a spill-to-file fix. A separate user question asks for a persistent “goal mode,” indicating interest in more autonomous agent behavior.

## 2. Releases
No new releases in this period.

## 3. Project Progress
No PRs were merged or closed today, and no features shipped in this window. The only open PR is:
- **[PR #708](https://github.com/qhkm/zeptoclaw/pull/708)** — `feat(tools): spill oversized tool output instead of discarding it` — open, updated 2026-09-28. It proposes writing oversized tool output to `~/.zeptoclaw/sessions/<key>/spill/<seq>-<tool>.txt` with restrictive permissions and replacing it in context with a preview plus path.

Related tracking issue:
- **[Issue #707](https://github.com/qhkm/zeptoclaw/issues/707)** — same feature request, labeled `feat`, `area:tools`, `P2-high`.

## 4. Community Hot Topics
No item has meaningful engagement yet: all listed issues have **0 comments and 0 reactions**, and the PR has no comment count. By update activity, the tied top items are:
- **[Issue #709](https://github.com/qhkm/zeptoclaw/issues/709)** — “is there a goal mode?” — 0 comments, 0 👍.
- **[Issue #707](https://github.com/qhkm/zeptoclaw/issues/707)** — oversized tool output spill — 0 comments, 0 👍.
- **[PR #708](https://github.com/qhkm/zeptoclaw/pull/708)** — implementation for #707 — open, 0 👍, comments undefined.

**Underlying needs:** #709 reflects a desire for long-running, condition-driven agent execution similar to other personal AI assistants. #707/#708 reflect a reliability/context-management need: tool outputs that exceed limits should remain recoverable rather than being silently discarded.

## 5. Bugs & Stability
- **[Issue #707](https://github.com/qhkm/zeptoclaw/issues/707)** — `P2-high` — Tool output larger than 2,000 lines / 50KB is truncated and discarded, making the omitted bytes unreachable by the model. This affects `src/tools/output.rs::truncate_tool_output` and tools including `shell`, `grep`, `filesystem`, and `find`. Severity is moderate-to-high because it causes unrecoverable data loss in agent context.
  - **Fix PR exists:** **[PR #708](https://github.com/qhkm/zeptoclaw/pull/708)** is open but not merged.
- No crashes, regressions, or additional bugs were reported in the provided data.

## 6. Feature Requests & Roadmap Signals
- **[Issue #709](https://github.com/qhkm/zeptoclaw/issues/709)** — User `abda11ah` asks whether ZeptoClaw has a `/goal` mode like ohmypi (omp), where the agent continues working until a condition is met. This is a clear autonomy/workflow feature request.
- **[Issue #707](https://github.com/qhkm/zeptoclaw/issues/707)** / **[PR #708](https://github.com/qhkm/zeptoclaw/pull/708)** — Tool-output spill feature. Because a PR already exists and the issue is labeled `P2-high`, this is the more likely near-term roadmap item.
- **Prediction:** If the next version includes tooling reliability work, #708 is a strong candidate. Goal mode (#709) may require design discussion and broader product direction, so it is less likely to land immediately unless maintainers prioritize it.

## 7. User Feedback Summary
- **Pain point 1:** Users want more autonomous, goal-directed agent behavior. The `/goal` request in [#709](https://github.com/qhkm/zeptoclaw/issues/709) suggests current behavior may stop before a user-defined condition is satisfied.
- **Pain point 2:** Oversized tool output is lost, forcing the model to work with incomplete context. This is documented in [#707](https://github.com/qhkm/zeptoclaw/issues/707).
- **Satisfaction/dissatisfaction signal:** Very limited. There are no comments or reactions, so the data does not show broad community sentiment. The #709 question implies a missing capability; #707 being self-filed by `qhkm` suggests maintainer-recognized technical debt.

## 8. Backlog Watch
No long-unanswered important issues or PRs appear in the provided data. All active items were created/updated on 2026-09-28, within one day of this digest.
- Watch **[Issue #709](https://github.com/qhkm/zeptoclaw/issues/709)** — a user question with 0 maintainer comments so far; it may need a response to clarify roadmap.
- Watch **[PR #708](https://github.com/qhkm/zeptoclaw/pull/708)** — open and unreviewed/merged; it is the direct implementation for `P2-high` Issue #707 and likely needs maintainer review.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-09-29

---

## 1. Today's Overview

ZeroClaw is in a high-activity phase between releases, with 50 issues and 50 PRs updated in the past 24 hours, but no new releases shipped. The merge rate is low (6 of 50 PRs closed/merged), suggesting most work is still in review or in-progress. Security and identity-access topics dominate both the issue and PR backlogs, with three S0-severity bugs drawing attention—two involving data loss and one a privilege-escalation-on-resume flaw. The plugin runtime architecture and OIDC/gateway authentication tracks continue to advance through tracker issues, while community contributors are pushing substantial new features like a Microsoft Teams channel and SOP conditional steps.

---

## 2. Releases

No new releases were published today. The project's last tracked release efforts are referenced in tracker [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) (v0.8.6 and v0.9.0 runtime/gateway delivery) and [#10814](https://github.com/zeroclaw-labs/zeroclaw/issues/10814) (release efficiency improvements following v0.8.5), indicating the next release is being prepared but has not yet been cut.

---

## 3. Project Progress

**Merged/Closed PRs (6):**

| PR | Description | Significance |
|---|---|---|
| [#11147](https://github.com/zeroclaw-labs/zeroclaw/pull/11147) | fix(web-search): redact query URLs from transport errors | Security fix—prevents model-visible tool results from leaking query-bearing URLs in DuckDuckGo/Brave/SearXNG error paths. Closes [#10280](https://github.com/zeroclaw-labs/zeroclaw/issues/10280). |
| [#11153](https://github.com/zeroclaw-labs/zeroclaw/pull/11153) | test(web-search): cover transport error redaction | Regression tests for the above. |
| [#11159](https://github.com/zeroclaw-labs/zeroclaw/pull/11159) | test(config): pin stall watchdog opt-in default | Prevents configuration regression on `stall_timeout_secs`. |
| [#11137](https://github.com/zeroclaw-labs/zeroclaw/pull/11137) | fix(agents): avoid Windows panic during bundle export | Fixes Windows-specific panic using `DirEntryExt::full_metadata()`. |
| [#11190](https://github.com/zeroclaw-labs/zeroclaw/pull/11190) | docs(security): restore the private memory plane section lost in #11082 merge | Documentation recovery for session isolation content. |
| [#11092](https://github.com/zeroclaw-labs/zeroclaw/pull/11092) | chore(runtime): propose a holding-crate exception for the composition contract | Core-team-approved exception table entry; governance/process. |

**Notable in-progress open PRs advancing features:**
- [#11194](https://github.com/zeroclaw-labs/zeroclaw/pull/11194) — New Microsoft Teams (Bot Framework) channel (size: XL)
- [#11134](https://github.com/zeroclaw-labs/zeroclaw/pull/11134) — SOP conditional steps via decision model
- [#11175](https://github.com/zeroclaw-labs/zeroclaw/pull/11175) — ZeroCode composer undo/redo and standard editing
- [#10935](https://github.com/zeroclaw-labs/zeroclaw/pull/10935) — Streaming protocol guard false-positive suppression (XL, security-adjacent)
- [#9746](https://github.com/zeroclaw-labs/zeroclaw/pull/9746) — Per-agent ownership scoping for session tools and Discord search (identity-access)

---

## 4. Community Hot Topics

| Item | Comments | Theme | Analysis |
|---|---|---|---|
| [#10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549) — RFC: Simplify RFC voting | 12 | Governance | The highest-comment issue. The community and core team are actively debating removal of mandatory discussion windows and making REVISE stop the current snapshot, signaling frustration with process friction even within the RFC system itself. |
| [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) — Per-sender RBAC for multi-tenant deployments | 10 | Security / Identity | Long-running (since April) feature request for sender-scoped role-based access control in multi-tenant agent setups. The narrowed scope has been agreed upon; draft PR [#11068](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) is referenced. High demand for tenant isolation. |
| [#8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832) — Plugin-owned Kanban board for agent work | 9 | Plugins / UX | Community interest in giving plugins their own durable visual state for task tracking. Per-instance durable state is now delivered via [#11081](https://github.com/zeroclaw-labs/zeroclaw/issues/8832); remaining work is the Kanban plugin itself. |
| [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) — Install skills from `.well-known` agent-skills discovery indexes | 8 | Skills / Standards | Strong community pull toward standard skill discovery. Cloudflare and Vercel are already using the `.well-known` URI internally, creating external momentum. |
| [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) — Move optional channels & tools from compile-time feature flags to runtime plugins | 6 | Architecture | Core architectural migration. Multiple foundational PRs have landed (#11081, #11098, #8908/#8909, #11178); the next phase is constructing and routing channels from plugin manifests. |

---

## 5. Bugs & Stability

**Ranked by severity:**

| Severity | Issue | Description | Fix Status |
|---|---|---|---|
| **S0 / P0** | [#11197](https://github.com/zeroclaw-labs/zeroclaw/issues/11197) | Session resume restores forwarded environment after admin revocation — privilege escalation | Open, accepted, follow-up; no fix PR yet |
| **S0** | [#11136](https://github.com/zeroclaw-labs/zeroclaw/issues/11136) | Concurrent `file_edit`/`file_write` calls to the same path silently drop one edit under `parallel_tools` — data loss | Closed (likely addressed in agent-loop fixes) |
| **S0** | [#10121](https://github.com/zeroclaw-labs/zeroclaw/issues/10121) | Partial Code/ACP turns disappear if process exits before completion — data loss | Closed |
| **P1** | [#9816](https://github.com/zeroclaw-labs/zeroclaw/issues/98116) | Anthropic provider reports $0.00 spend, so budget caps never fire | Open, in-progress |
| **P1** | [#10778](https://github.com/zeroclaw-labs/zeroclaw/issues/10778) | Multimodal image cap eviction rewrites earlier history, invalidates cache prefix — cost/performance | Closed |
| **P1** | [#10164](https://github.com/zeroclaw-labs/zeroclaw/issues/10164) | `block_high_risk_commands = false` not honored; allowlisted commands still blocked | Closed |
| **P1** | [#10785](https://github.com/zeroclaw-labs/zeroclaw/issues/10785) | ZeroCode notification lag cancels every running turn | Closed |
| **P1** | [#10645](https://github.com/zeroclaw-labs/zeroclaw/issues/10645) | Cost-tracking context not threaded into delegated sub-loops | Closed |
| **P1** | [#10644](https://github.com/zeroclaw-labs/zeroclaw/issues/10644) | Background delegate results not bound to owner principal | Closed |
| **P2** | [#10887](https://github.com/zeroclaw-labs/zeroclaw/issues/10887) | Non-vision capability gate fails turn on prose referencing image markers without loadable image | Closed |
| **P2** | [#10186](https://github.com/zeroclaw-labs/zeroclaw/issues/10186) | Terminal fallback text bypasses live delivery seams | Open |
| **P2** | [#9708](https://github.com/zeroclaw-labs/zeroclaw/issues/9708) | Unbounded daemon launcher stdout/stderr logs | Closed |

**Key concern:** The P0 security bug [#11197](https://github.com/zeroclaw-labs/zeroclaw/issues/11197) (admin-revoked environment restored on session resume) has no fix PR yet and represents a live privilege-escalation risk. The Anthropic cost-reporting bug [#9816](https://github.com/zeroclaw-labs/zeroclaw/issues/9816) also remains open with no PR, meaning budget caps are effectively non-functional for that provider.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue | Signal Strength | Next Version Likelihood |
|---|---|---|---|
| Per-sender RBAC | [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) | High — scope agreed, draft PR exists | Likely in v0.8.6 or v0.9.0 |
| Plugin-owned Kanban board | [#8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832) | Medium — durable state delivered, plugin pending | Possible v0.9.0 |
| `.well-known` skill discovery | [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) | High — external ecosystem adoption | Likely next release |
| Runtime plugins replacing feature flags | [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) | High — foundational PRs merged | Likely v0.9.0 |
| Browser enrollment frontdoor (ZeroRelay) | [#10315](https://github.com/zeroclaw-labs/zeroclaw/issues/10315) | Medium — enrollment delivered, dashboard pending | Partial in next release |
| OIDC canonical principals | [#8289](https://github.com/zeroclaw-labs/zeroclaw/issues/8289) | High — core stack merged, close-out tracker | Likely v0.8.6 |
| Gateway pairing tokens bound to roster users | [#10573](https://github.com/zeroclaw-labs/zeroclaw/issues/10573) | Medium — accepted, foundation deps landed | Possible v0.9.0 |
| Anthropic extended-thinking passthrough for compatible providers | [#10530](https://github.com/zeroclaw-labs/zeroclaw/issues/10530) | Medium — closed, accepted | Likely next release |
| Microsoft Teams channel | [#11194](https://github.com/zeroclaw-labs/zeroclaw/pull/11194) | Medium — large new PR, early review | Uncertain |
| SOP conditional steps | [#11134](https://github.com/zeroclaw-labs/zeroclaw/pull/11134) | Medium — active PR | Uncertain |

---

## 7. User Feedback Summary

**Pain points identified from issue narratives:**

- **Budget/cost tracking is unreliable:** The Anthropic provider reporting $0.00 spend ([#9816](https://github.com/zeroclaw-labs/zeroclaw/issues/9816)) means users relying on daily/monthly budget caps get no protection — a direct financial risk for production deployments.
- **Data loss under concurrency:** Users running `parallel_tools` experience silent dropped file edits ([#11136](https://github.com/zeroclaw-labs/zeroclaw/issues/11136)), eroding trust in agent reliability for code-editing workflows.
- **Session persistence gaps:** Partial turns lost on process exit ([#10121](https://github.com/zeroclaw-labs/zeroclaw/issues/10121)) and admin revocation not taking effect on resume ([#11197](https://github.com/zeroclaw-labs/zeroclaw/issues/11197)) create both data-loss and security anxieties.
- **RFC process friction:** Even core contributors find the mandatory discussion windows unproductive ([#10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549)), suggesting governance overhead is slowing contribution velocity.
- **Security policy confusion:** Users discovering that `block_high_risk_commands = false` is silently ignored ([#10164](https://github.com/zeroclaw-labs/zeroclaw/issues/10164)) report degraded trust in the sandbox model.
- **Multi-tenant isolation demand:** The sustained 10-comment thread on RBAC ([#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982)) reflects production users needing tenant-scoped access control.

**Positive signals:**
- The `.well-known` skills standard ([#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853)) has external ecosystem buy-in (Cloudflare, Vercel), validating ZeroClaw's skill architecture.
- Plugin-owned durable state ([#8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832)) landed via #11081, enabling richer plugin UX.
- OIDC/authentication foundation is solidly merged ([#8289](https://github.com/zeroclaw-labs/zeroclaw/issues/8289)), unblocking enterprise deployments.

---

## 8. Backlog Watch

| Item | Age | Status | Concern |
|---|---|---|---|
| [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) — Per-sender RBAC | ~5 months | Open, accepted, draft PR | Critical for multi-tenant; long lead time despite high demand |
| [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) — Runtime plugins migration | ~3 months | Open, in-progress | Architectural blocker for many downstream features |
| [#8965](https://github.com/zeroclaw-labs/zeroclaw/pull/8965) — Declarative skill auto-activation | ~2.5 months | Open, needs-author-action, stale-candidate | Large XL PR with no recent author engagement; at risk of staleness |
| [#10872](https://github.com/zeroclaw-labs/zeroclaw/pull/10872) — Bump hmac 0.12→0.13 | ~2 weeks | Open | Security-relevant dependency; may need expedited review |
| [#9816](https://github.com/zeroclaw-labs/zeroclaw/issues/9816) — Anthropic $0.00 cost bug | ~7 weeks | Open, in-progress, no fix PR | P1 financial-impact bug with no visible PR; needs prioritization |
| [#11197](https://github.com/zeroclaw-labs/zeroclaw/issues/11197) — Admin revocation not effective on resume | 2 days | Open, accepted, P0 | Highest severity open bug; needs immediate fix PR |
| [#10186](https://github.com/zeroclaw-labs/zeroclaw/issues/10186) — Terminal fallback bypasses live delivery | ~5 weeks | Open, P2 | Degrades streaming UX; no PR linked |
| [#10162](https://github.com/zeroclaw-labs/zeroclaw/issues/10162) — Plugin install seed phase cannot retry | ~5 weeks | Open, in-progress | Install reliability gap for the plugin system |
| [#10171](https://github.com/zeroclaw-labs/zeroclaw/issues/10171) — Preserve provider profile semantics | ~5 weeks | Closed but parked | "Parking-lot" status suggests deferred; affects provider identity consistency |

**Immediate attention needed:** P0 [#11197](https://github.com/zeroclaw-labs/zeroclaw/issues/11197) and P1 [#9816](https://github.com/zeroclaw-labs/zeroclaw/issues/9816) have no associated fix PRs and represent the highest-impact open gaps. The stale-candidate status on [#8965](https://github.com/zeroclaw-labs/zeroclaw/pull/8965) suggests a risk of losing a substantial community contribution.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*