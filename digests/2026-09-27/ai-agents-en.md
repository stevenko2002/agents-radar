# OpenClaw Ecosystem Digest 2026-09-27

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-09-26 22:15 UTC

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



# OpenClaw Project Digest — 2026-09-27

---

## 1. Today's Overview

OpenClaw remains a high-velocity project with significant activity across both issues and pull requests. The past 24 hours saw 500 issues and 500 PRs updated, though no new releases were published. The repository is contending with a cluster of P0/P1 stability issues — particularly around update failures, gateway crashes, and memory pressure — that are competing for maintainer attention alongside steady feature development. Despite the volume of open items, the PR pipeline shows healthy momentum with 86 PRs merged or closed today, and several maintainers (notably `steipete` and `roboclaw-bot`) are driving multiple concurrent improvements across channels, agents, and the gateway.

---

## 2. Releases

**No new releases in the last 24 hours.**

The most recent stable releases in circulation are 2026.9.5 and 2026.9.6, both of which are the subject of active bug reports detailed below. The 2026.9.7 fixes tracker ([#157531](https://github.com/openclaw/openclaw/issues/157531)) is tracking 18/21 established P1 candidates and remains the next release focal point.

---

## 3. Project Progress

### Merged/Closed PRs Today (86 total)

Notable PRs that advanced or were resolved:

| PR | Summary | Status |
|---|---|---|
| [#159182](https://github.com/openclaw/openclaw/pull/159182) | Reduce CPU spent broadcasting session activity | Open, ready for maintainer |
| [#159174](https://github.com/openclaw/openclaw/pull/159174) | Reduce CPU work for session updates (UI) | Open, ready for maintainer |
| [#159197](https://github.com/openclaw/openclaw/pull/159197) | Revalidate lane policy before claiming ingress | Open, ready for maintainer |
| [#159163](https://github.com/openclaw/openclaw/pull/159163) | Recover history reads across resets and rebuilds | Open, ready for maintainer |
| [#159105](https://github.com/openclaw/openclaw/pull/159105) | Stop compaction recovery when a run times out | Open, ready for maintainer |
| [#159132](https://github.com/openclaw/openclaw/pull/159132) | Restore system-agent approval reactions (iMessage, Signal, WhatsApp) | Open, ready for maintainer |
| [#159117](https://github.com/openclaw/openclaw/pull/159117) | Let agents query online people and device activity | Open, ready for maintainer |
| [#158161](https://github.com/openclaw/openclaw/pull/158161) | Recover non-reasoning and thinking-off proxy completions when output budget exhausted | Open, ready for maintainer |
| [#152875](https://github.com/openclaw/openclaw/pull/152875) | Refuse dist rebuild under a live managed Gateway | Open, needs proof |
| [#158901](https://github.com/openclaw/openclaw/pull/158901) | Run native inference on paired workers (1/3 stack) | Open, waiting on author |
| [#158582](https://github.com/openclaw/openclaw/pull/158582) | Complete Android Models settings and provider connections | Open, ready for maintainer |

**Themes:** Performance optimization (CPU reduction in session broadcasts and UI updates), channel reliability (lane policy revalidation, system-agent reactions), agent capabilities (presence tool, thread-binding fix, compaction timeout handling), and build safety (managed Gateway dist protection).

---

## 4. Community Hot Topics

### Most Commented Issues

| Issue | Title | Comments | 👍 | Link |
|---|---|---|---|---|
| [#153257](https://github.com/openclaw/openclaw/issues/153257) | OpenClaw 2026.9.5 Turned a Stable Environment Into an 8-Hour Failure Recovery Session | 40 | 1 | [🔗](https://github.com/openclaw/openclaw/issues/153257) |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | Per-agent cost budget enforcement at the gateway level | 23 | 1 | [🔗](https://github.com/openclaw/openclaw/issues/42475) |
| [#139847](https://github.com/openclaw/openclaw/issues/139847) | Message sent while a reply run is active is dropped (regression in 2026.9.2) | 20 | 0 | [🔗](https://github.com/openclaw/openclaw/issues/139847) |
| [#137332](https://github.com/openclaw/openclaw/issues/137332) | Mixed terminal requester-settle batches retry forever after ownership check | 19 | 0 | [🔗](https://github.com/openclaw/openclaw/issues/137332) |
| [#22438](https://github.com/openclaw/openclaw/issues/22438) | Tiered bootstrap file loading for progressive context control | 19 | 0 | [🔗](https://github.com/openclaw/openclaw/issues/22438) |

### Analysis

The top issue (#153257) reflects deep user frustration with the 2026.9.5 update — an 8-hour failure recovery session after a previously stable environment. This is a P0, crash-loop, UX-release-blocker tagged issue and represents the single loudest community signal. The per-agent cost budget feature (#42475) is the most-requested capability, with users wanting gateway-level spend controls without external monitoring. The tiered bootstrap loading proposal (#22438) addresses a real pain point for large-workspace users who waste context window on unnecessary files.

---

## 5. Bugs & Stability

### P0 (Critical) — Active Today

| Issue | Summary | Fix PR? | Link |
|---|---|---|---|
| [#153257](https://github.com/openclaw/openclaw/issues/153257) | 2026.9.5 turned stable env into 8-hour crash-loop recovery | No | [🔗](https://github.com/openclaw/openclaw/issues/153257) |
| [#157325](https://github.com/openclaw/openclaw/issues/157325) | Stuck agent-DB resource makes every agent's replies fail until gateway restart | No | [🔗](https://github.com/openclaw/openclaw/issues/157325) |
| [#157568](https://github.com/openclaw/openclaw/issues/157568) | WSL Gateway regrows 7.5 GB of live plugin captures in 4 minutes | No | [🔗](https://github.com/openclaw/openclaw/issues/157568) |
| [#156674](https://github.com/openclaw/openclaw/issues/156674) | macOS gateway resource pressure with long-lived Codex workers | No | [🔗](https://github.com/openclaw/openclaw/issues/156674) |
| [#157227](https://github.com/openclaw/openclaw/issues/157227) | git-to-stable 2026.9.6 update fails service revalidation, leaves Gateway stopped | No | [🔗](https://github.com/openclaw/openclaw/issues/157227) |
| [#158231](https://github.com/openclaw/openclaw/issues/158231) | Update failure: managed-service-preflight (2026.9.5) | No | [🔗](https://github.com/openclaw/openclaw/issues/158231) |
| [#157812](https://github.com/openclaw/openclaw/issues/157812) | Windows auto-update fails repeatedly — managed-service-preflight inside gateway tree | No | [🔗](https://github.com/openclaw/openclaw/issues/157812) |
| [#156112](https://github.com/openclaw/openclaw/issues/156112) | `openclaw update` fails at global install swap (npm global) | No | [🔗](https://github.com/openclaw/openclaw/issues/156112) |
| [#155720](https://github.com/openclaw/openclaw/issues/155720) | macOS: gateway exits in restart drain, LaunchAgent left uninstalled, silently down ~24h | No | [🔗](https://github.com/openclaw/openclaw/issues/155720) |
| [#103788](https://github.com/openclaw/openclaw/issues/103788) | Gateway memory pressure silently kills all tool responses before OOM | No | [🔗](https://github.com/openclaw/openclaw/issues/103788) |

### P1 (High) — Active Today

| Issue | Summary | Fix PR? | Link |
|---|---|---|---|
| [#139847](https://github.com/openclaw/openclaw/issues/139847) | Message dropped while reply run active — "no active tool authority snapshot" | Linked PR open | [🔗](https://github.com/openclaw/openclaw/issues/139847) |
| [#137332](https://github.com/openclaw/openclaw/issues/137332) | Requester-settle batches retry forever after ownership check | No | [🔗](https://github.com/openclaw/openclaw/issues/137332) |
| [#157067](https://github.com/openclaw/openclaw/issues/157067) | Windows isolated cron setup passes uncloneable Proxy to session history worker | No | [🔗](https://github.com/openclaw/openclaw/issues/157067) |
| [#104719](https://github.com/openclaw/openclaw/issues/104719) | Memory-wiki exhaustive fallback ignores tool deadline | No | [🔗](https://github.com/openclaw/openclaw/issues/104719) |
| [#121187](https://github.com/openclaw/openclaw/issues/121187) | Yielded requester completion retries intentional NO_REPLY instead of settling | No | [🔗](https://github.com/openclaw/openclaw/issues/121187) |
| [#99910](https://github.com/openclaw/openclaw/issues/99910) | Memory dreaming run pegs gateway event loop ~10 min until killed | No | [🔗](https://github.com/openclaw/openclaw/issues/99910) |
| [#101793](https://github.com/openclaw/openclaw/issues/101793) | Assistant text preceding tool call silently dropped on Signal | No | [🔗](https://github.com/openclaw/openclaw/issues/101793) |
| [#103804](https://github.com/openclaw/openclaw/issues/103804) | Service-env generator double-quotes values, breaking AWS_REGION hostname | No | [🔗](https://github.com/openclaw/openclaw/issues/103804) |

### Stability Assessment

The project is in a **regression-heavy phase**. Multiple P0s trace back to the 2026.9.4–2026.9.6 release window, with update infrastructure failures being the most pervasive theme (at least 5 distinct P0s). Memory pressure and resource leaks (plugin captures, Codex workers, memory dreaming) form a second cluster. Only one P1 (#139847) has a linked open PR; the remainder lack visible fix branches, which is a concern for the 2026.9.7 target tracked in [#157531](https://github.com/openclaw/openclaw/issues/157531).

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Signal Strength | Link |
|---|---|---|---|
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | Per-agent cost budget enforcement at gateway level | 23 comments, 👍1 | [🔗](https://github.com/openclaw/openclaw/issues/42475) |
| [#22438](https://github.com/openclaw/openclaw/issues/22438) | Tiered bootstrap file loading for progressive context control | 19 comments | [🔗](https://github.com/openclaw/openclaw/issues/22438) |
| [#77886](https://github.com/openclaw/openclaw/issues/77886) | Owner-approved flow for protected config changes | 10 comments, 👍2 | [🔗](https://github.com/openclaw/openclaw/issues/77886) |
| [#76247](https://github.com/openclaw/openclaw/issues/76247) | Native dispatch landing ACK / receiver-entry telemetry | 6 comments, 👍1 | [🔗](https://github.com/openclaw/openclaw/issues/76247) |
| [#28300](https://github.com/openclaw/openclaw/issues/28300) | Theme Customization System — Preset Themes + Custom Theme Studio | 6 comments, 👍5 | [🔗](https://github.com/openclaw/openclaw/issues/28300) |
| [#105494](https://github.com/openclaw/openclaw/issues/105494) | Interactive "memory therapy" session to resolve open questions | 6 comments | [🔗](https://github.com/openclaw/openclaw/issues/105494) |
| [#55792](https://github.com/openclaw/openclaw/issues/55792) | Catch up on missed inbound messages after gateway restart | 7 comments | [🔗](https://github.com/openclaw/openclaw/issues/55792) |
| [#71335](https://github.com/openclaw/openclaw/issues/71335) | `sync.watch` should default to false in gateway mode | 6 comments, 👍1 | [🔗](https://github.com/openclaw/openclaw/issues/71335) |

### Predicted Next-Version Candidates

- **Per-agent cost budgets** (#42475) — high community interest, clear problem statement, and existing `session-cost-usage.ts` infrastructure suggests this is a natural next feature.
- **Tiered bootstrap loading** (#22438) — addresses a real scaling pain point; the proposal is detailed and has maintainer interest.
- **Theme customization** (#28300) — strong 👍5 signal, UX-focused, and aligns with the broader UI polish seen in active PRs.
- **Missed message catch-up** (#55792) — directly addresses data loss on gateway restart, a reliability must-have for production deployments.

---

## 7. User Feedback Summary

### Pain Points

1. **Update instability is the dominant complaint.** Users report that `openclaw update` fails deterministically at the global install swap step on npm global installs, while a direct `npm install -g` succeeds. This is reproducible across multiple environments and versions (2026.9.4 → 2026.9.5, git-to-stable 2026.9.6).

2. **Memory pressure degrades silently.** Multiple users report tool responses silently returning empty before OOM kills the process. The gateway remains responsive to messages while all tool calls fail — a particularly dangerous degraded state because the agent appears functional but produces no results.

3. **Resource leaks on macOS and WSL.** Long-lived Codex workers and plugin captures cause sustained CPU/memory pressure. On WSL, 7.5 GB of live plugin captures can regrow in 4 minutes despite reclamation settings.

4. **Session state and message loss regressions.** Messages arriving during active reply runs are dropped (#139847), requester-settle batches retry forever (#137332), and `sessions_yield` on a subagent's first turn silently finalizes as OK with empty result (#106704).

5. **Channel-specific delivery bugs.** Signal drops assistant text preceding tool calls (#101793), Feishu streaming cards lose/duplicate final text (#77685), and Telegram detached subagents run silently without notification (#101656).

6. **Windows-specific failures.** Is

---

## Cross-Ecosystem Comparison



# Cross-Project Ecosystem Report — 2026-09-27

---

## 1. Ecosystem Overview

The personal AI assistant / agent open-source landscape is in a period of **intense feature velocity paired with acute stability debt**. Nearly every active project is contending with regressions traced to recent release windows, update-mechanism failures, and memory/resource leaks — while simultaneously pushing forward on channel expansion, multi-backend architecture, and agent self-management capabilities. No project shipped a release in the past 24 hours, suggesting a synchronized pre-stabilization pause across the ecosystem. The community is maturing technically: users file detailed, reproducible bug reports, and contributor bases are diversifying beyond core maintainers.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed | Release Status | Health Signal |
|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | 86 | None (2026.9.7 pending) | ⚠️ Regression-heavy; P0 cluster active |
| **ZeroClaw** | 50 | 50 | 7 | None | ⚠️ High throughput; review backlog risk |
| **Hermes Agent** | 50 | 50 | 13 | None (v0.21.6 predicted) | ⚠️ Backlog-heavy; session-state bugs |
| **NanoClaw** | ~5 | 26 | 2 | None | ⚠️ Feature wave + unfixed CVEs |
| **LobsterAI** | 6 | 11 | 10 | None | ✅ Stabilizing; race conditions fixed |
| **NanoBot** | 4 | 13 | 2 | None | ⚠️ Stabilization phase; review bottleneck |
| **CoPaw** | ~5 | ~5 | 0 | None | ✅ Steady; UX polish + backend fixes |
| **NullClaw** | 0 | 5 | 0 | None | ✅ Targeted stability fixes |
| **IronClaw** | 1 | 1 | 0 | None | ✅ Maintenance; clean baseline |
| **PicoClaw** | 1 | 3 | 2 | None | ⚠️ Low activity; API drift risk |
| **Moltis** | 0 | 1 | 0 | None | ⚪ Quiet; docs-only |
| **TinyClaw** | 0 | 0 | 0 | None | ⚪ No activity |
| **ZeptoClaw** | 0 | 0 | 0 | None | ⚪ No activity |

**Key observation:** The top three projects (OpenClaw, ZeroClaw, Hermes Agent) all show 50/50 issue/PR counts — likely a data artifact from GitHub's API returning capped counts, but the pattern confirms extreme activity. Only LobsterAI demonstrates a healthy merge rate (10 of 17 items closed), while the largest projects are accumulating open items faster than they resolve them.

---

## 3. OpenClaw's Position

**Advantages vs. peers:**

- **Largest community signal.** OpenClaw's issue #153257 (8-hour crash-loop recovery) has 40 comments — an order of magnitude more engagement than comparable issues in other projects. This signals a large, vocal user base that drives maintainer attention.
- **Most mature PR pipeline.** 86 PRs merged or closed in 24 hours is unmatched by any other project in this digest. Multiple maintainers (`steipete`, `roboclaw-bot`) are driving concurrent work across channels, agents, and gateway.
- **Established release tracking.** The 2026.9.7 fixes tracker (#157531) with 18/21 P1 candidates tracked demonstrates release discipline that other projects lack — no other project in this digest has a comparable fixes tracker.
- **Broadest channel coverage.** Active work spans iMessage, Signal, WhatsApp, Feishu, Telegram, and Android — channel parity is a deliberate strategy, not an afterthought.

**Technical approach differences:**

- OpenClaw is the only project in this set actively pursuing **native inference on paired workers** (PR #158901) and **managed Gateway dist protection** (PR #152875) — infrastructure-level concerns that suggest an enterprise or production-self-hosting orientation.
- Its **per-agent cost budget** feature request (#42475, 23 comments) is the most-upvoted feature in the entire ecosystem digest, indicating a unique user base concerned with operational economics at scale.
- The **tiered bootstrap file loading** proposal (#22438) addresses context-window scaling in a way no other project is tackling — this is a large-workspace optimization with no direct peer.

**Community size comparison:**

OpenClaw's issue engagement (40 comments on a single bug) and PR throughput (86 merged/closed) place it in a distinct **scale tier**. The next-closest, ZeroClaw and Hermes Agent, show comparable raw activity (50/50) but lower engagement depth and fewer concurrent maintainer threads. NanoBot and LobsterAI show healthy contributor diversification but at a fraction of OpenClaw's absolute volume.

---

## 4. Shared Technical Focus Areas

Four technical themes emerge across **five or more projects** simultaneously:

| Theme | Projects Involved | Specific Needs |
|---|---|---|
| **Update mechanism reliability** | OpenClaw, NanoClaw, Hermes Agent, ZeroClaw | Atomic install swaps, preflight validation, rollback on failure, lock-file integrity preservation |
| **Memory / resource leaks** | OpenClaw, Hermes Agent, NullClaw, NanoBot, ZeroClaw | Plugin capture reclamation, Codex worker lifecycle, tool-call allocation safety, gateway memory pressure handling |
| **Multi-backend / multi-profile state safety** | Hermes Agent, OpenClaw, ZeroClaw | Shared `HERMES_HOME` / state file concurrency, gateway identity matching, stale-transcript guard correctness, session ownership resolution |
| **Channel-specific delivery correctness** | OpenClaw, NanoBot, Hermes Agent, ZeroClaw, CoPaw, PicoClaw | WhatsApp voice/mention/TTS, Feishu checkpoint markers & bot-to-bot, WeCom markdown table parsing, Telegram detached subagents, Matrix peer routing, QQ API parity |

**Less-common but critical shared needs:**

- **Security / approval enforcement in unattended turns** (ZeroClaw #10968, Hermes Agent credential-pool refresh PR #116479): cron, heartbeat, and headless SOP turns running without approval management.
- **Context lifecycle separation** (NullClaw PR #1005, OpenClaw #22438, ZeroClaw #10780): hot session data vs. cold archive memory must not contaminate each other.
- **Provider transport hardening** (NanoClaw #2520, ZeroClaw #11036, Hermes Agent #124077): crypto key leakage to logs, free-tier 403s, compression-stall misclassification.

---

## 5. Differentiation Analysis

| Project | Feature Focus | Target Users | Architecture Signal |
|---|---|---|---|
| **OpenClaw** | Channel parity, gateway infrastructure, cost controls | Production self-hosters, multi-channel operators | Managed Gateway + paired workers; tiered context loading |
| **ZeroClaw** | Security hardening, RPC/gateway parity, provider expansion | Security-conscious operators, multi-provider deployments | Bounded delegation, OIDC enrollment, capability injection, in-process RPC seam |
| **Hermes Agent** | Multi-backend state safety, Desktop UX, skill discovery | Desktop + TUI + remote gateway users, plugin ecosystem | `hermes_cli → nous_cli` refactor suggests broader "Nous" product umbrella; credential-pool rotation |
| **NanoClaw** | Self-management skills, provider seams, voice replies | Operators wanting agent self-maintenance | "Seam-first" refactoring for fork customization; scheduled self-update, self-error-reporting |
| **LobsterAI** | Authentication stability, scheduled-task binding, gateway client | Enterprise/teams needing reliable auth and scheduling | OpenClaw gateway client integration; shared refresh slots for token concurrency |
| **CoPaw** | Cron automation, console UX, channel formatting | Developers wanting automation engine + AI in one tool | Direct shell/script cron tasks; model catalog sync with provider UI |
| **NanoBot** | Bug-fix velocity, Feishu channel, WebUI streaming UX | Community contributors, Feishu-heavy users | Diverse contributor base (8 PRs/day from one contributor); MCP pagination, DST correctness |
| **NullClaw** | Memory safety, Discord self-loop prevention, REPL UX | Discord operators, CLI power users | Allocation-free line editor; strict context isolation; XML tool-call parsing hygiene |
| **IronClaw** | NEAR DeFi MCP extensions, codebase knowledge graph | NEAR ecosystem participants, AI-assisted dev | Hosted MCP extension pattern; keyless token launchpad interaction |
| **PicoClaw** | QQ channel parity, web UI performance | QQ-heavy users in Chinese market | Lightweight; channel API tracking burden |
| **Moltis** | One-click cloud deployment | Quick-start users | Documentation-driven onboarding |

---

## 6. Community Momentum & Maturity

**Rapidly iterating (high velocity, active contributor base):**

- **OpenClaw** — 86 PRs merged/closed/day; multiple concurrent maintainer threads; P0 fixes tracker active.
- **ZeroClaw** — 50 issues/50 PRs updated; 7 merged/closed; security/auth stack advancing (OIDC PR #11082); review queue is the bottleneck, not contributor supply.
- **NanoClaw** — 26 PRs from a single contributor (`barnuri`) in a coordinated "seam-first" sprint; feature velocity is highest, but security debt (#2520, #3941) is accumulating.

**Stabilizing (transitioning from feature to fix):**

- **Hermes Agent** — 13 PRs merged/closed with targeted session-state and Desktop fixes; `OutThisLife` driving consolidation; next version predicted as v0.21.6 stability patch.
- **LobsterAI** — 10 PRs merged/closed; critical race conditions (S-07, S-08) resolved; authentication concurrency fixed; batching of stale-issue archival alongside active fixes signals healthy maintenance hygiene.
- **NanoBot** — 9 of 11 open PRs are bug fixes; contributor `2gg-bit` authored 8 fixes in one day with regression tests; review bottleneck is the only obstacle to a stability release.

**Quiet / maintenance:**

- **CoPaw** — Steady but unspectacular; UX unification and WeCom formatting fixes; no release pressure.
- **NullClaw** — 5 open PRs all targeting critical bugs (Discord loop, memory leak, context contamination); no merges yet, suggesting maintainer review is the gating factor.
- **IronClaw** — Single automated PR + one feature request; clean bug baseline; no urgency.
- **PicoClaw** — Light activity; QQ API drift is a time-sensitive risk that isn't being addressed.
- **Moltis** — Docs-only PR; effectively dormant.
- **TinyClaw / ZeptoClaw** — No activity; no signal.

---

## 7. Trend Signals

**For AI agent developers and technical decision-makers:**

1. **The update mechanism is the new battleground.** At least 5 distinct P0 update failures in OpenClaw alone, plus NanoClaw's `/update-nanoclaw` regressions (#3942, #3943) and Hermes Agent's `hermes update` issues (#110238), reveal that **update infrastructure is systematically under-invested** across the ecosystem. Teams building agent distribution should prioritize atomic, validated, rollback-safe update paths from day one.

2. **Security debt is accumulating faster than it's being addressed.** NanoClaw's crypto key leak (#2520, open since May) and persistent `baileys` CVE pin (#3941) sit unfixed while a 26-PR feature wave ships. ZeroClaw's unattended-turn approval gap (#10968) is an S0 security issue with no fix PR. The pattern is clear: **feature velocity is prioritized over security hardening**, and the ecosystem is accumulating risk.

3. **Multi-backend / multi-profile is the dominant architectural challenge.** Hermes Agent's shared `HERMES_HOME` concurrency bugs, OpenClaw's gateway identity checks, ZeroClaw's config flush race, and Hermes Desktop's session-attachment dead-ends all point to the same root problem: **concurrent access to shared state files without ownership or locking**. This will be the defining stability theme for the next release cycle across multiple projects.

4. **Channel maturity is uneven, and Feishu/WeCom/Telegram are the new frontiers.** Feishu bot-to-bot messaging (NanoBot PR #5930), checkpoint marker leaks (NanoBot #5903), WeCom markdown table parsing (CoPaw PR #7992), Telegram detached subagents (OpenClaw #101656), and QQ API drift (PicoClaw #3394) all signal that **Chinese-platform and Telegram channel integrations are active development zones** with real user demand but immature implementations.

5. **Self-managing agents are emerging as a product category.** NanoClaw's `/add-scheduled-update`, `/add-error-reports`, and `/contribute-upstream` skills, combined with Hermes Agent's credential-pool rotation and ZeroClaw's cron/heartbeat approval enforcement, indicate a trajectory toward **agents that maintain, monitor, and improve themselves without human intervention**. This is a fundamental shift from "agent as tool" to "agent as autonomous operator."

6. **Context lifecycle management is becoming first-class.** OpenClaw's tiered bootstrap loading, NullClaw's archive-vs-live context isolation, ZeroClaw's token-budget compaction, and Hermes Agent's usage anchor invalidation all address the same scaling problem: **how do agents handle arbitrarily large workspaces without losing their minds?** This is the infrastructure layer that will determine which agents can operate meaningfully over days vs. minutes.

---

*Report generated from 13 project digests as of 2026-09-27. Data sourced from GitHub activity across issues, pull requests, releases, and community engagement signals.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-09-27

---

## 1. Today's Overview

NanoBot is experiencing a high-activity day with 13 pull requests updated and 4 issues active in the past 24 hours, though no issues were closed and only 2 PRs were merged. The contributor base is notably diverse, with multiple community members (2gg-bit, KailBug, zxan000, Lesereingrape, Re-bin) driving simultaneous work across bug fixes, channel improvements, and feature additions. The volume of open bug-fix PRs (9 of 11 open) signals an active stabilization phase, while the complete absence of closed issues suggests maintainers may be bottlenecked on review. No new releases were shipped today.

---

## 2. Releases

No new releases were published today.

---

## 3. Project Progress

**Merged/Closed PRs:**

- **[#5916](https://github.com/HKUDS/nanobot/pull/5916) — `fix(mcp): load all pages of server tools before registration`** (CLOSED): Fixed incomplete MCP tool discovery where only the first page of paginated `tools/list` responses was registered. Tools on subsequent pages were invisible even when explicitly selected via `enabledTools`.

- **[#5919](https://github.com/HKUDS/nanobot/pull/5919) — `feat(linear): manage member access and simplify workspace connections`** (CLOSED): Added workspace-scoped member search, avatars, and access toggles in the WebUI so admins can control who uses the Linear agent without requiring per-user pairing codes.

**Notable Open PRs Advancing Features:**

- **[#5930](https://github.com/HKUDS/nanobot/pull/5930) — `feat(feishu): allow bot-to-bot messages in groups`**: Introduces an allowlist for bot senders and a hop limit, opening up multi-bot orchestration scenarios on Feishu groups.

---

## 4. Community Hot Topics

The most actively discussed items are:

- **[#5908](https://github.com/HKUDS/nanobot/issues/5908) — Live tokens/sec in WebUI** (4 comments, p2): Users want real-time generation speed feedback during streaming. The discussion volume indicates this is a commonly felt UX gap — users currently cannot distinguish between a slow model and a stalled connection.

- **[#5903](https://github.com/HKUDS/nanobot/issues/5903) — Feishu checkpoint marker leaked to user** (2 comments, bug): After idle auto-compaction, the internal "Continue the active task…" marker is delivered as a visible chat message. This breaks the illusion of a seamless conversation and exposes internal system prompts, which undermines trust.

Underlying need: Both issues reflect a demand for **transparency and polish in the user-facing streaming experience** — users want performance visibility but not internal plumbing exposed.

---

## 5. Bugs & Stability

Ranked by severity:

| Severity | Issue/PR | Description | Fix Status |
|---|---|---|---|
| **P1 / High** | [#5922](https://github.com/HKUDS/nanobot/pull/5922) — Cron timezone DST mismatch | Scheduled tasks execute at wrong local time across DST transitions (e.g., winter-computed summer cron runs 1 hour late) | Fix PR open |
| **P1 / High** | [#5924](https://github.com/HKUDS/nanobot/issues/5924) — Agent stuck in sudo loop | Sudo authorization expires before the agent can execute the command; agent loops indefinitely and remains fixated even after max iterations | No fix PR yet |
| **P2 / Medium** | [#5923](https://github.com/HKUDS/nanobot/pull/5923) — Image base64 non-ASCII ValueError | Non-ASCII chars in base64 input bypass `binascii.Error` catch, causing MCP to discard entire response | Fix PR open |
| **P2 / Medium** | [#5903](https://github.com/HKUDS/nanobot/issues/5903) — Feishu hidden checkpoint marker leaked | Internal compaction marker shown to end user | No fix PR yet |
| **P2 / Medium** | [#5927](https://github.com/HKUDS/nanobot/pull/5927) — Notification evaluator treats string `"false"` as truthy | Model returning `"false"` instead of `false` sends unwanted notifications | Fix PR open |
| **P2 / Medium** | [#5925](https://github.com/HKUDS/nanobot/pull/5925) — Windows duplicate CRLF on file creation | `write_file` / `edit_file` double-converts line endings, producing `\r\r\n` | Fix PR open |
| **P2 / Medium** | [#5918](https://github.com/HKUDS/nanobot/pull/5918) — JSON Schema union type coercion broken | `{"type": ["integer", "string"]}` causes overzealous coercion or rejection of valid inputs | Fix PR open |
| **P2 / Medium** | [#5920](https://github.com/HKUDS/nanobot/pull/5920) — Unicode truncation produces replacement chars | Token-boundary truncation splits multi-token characters, inserting `` | Fix PR open |
| **P2 / Medium** | [#5926](https://github.com/HKUDS/nanobot/pull/5926) — URL case-insensitive dedup in web scraping | Case-different URLs (`/API` vs `/api`) incorrectly treated as duplicates, blocking legitimate requests | Fix PR open |
| **P2 / Medium** | [#5921](https://github.com/HKUDS/nanobot/pull/5921) — Closed log stream reopens file | `RotatingTextOutput` allows writes after `close()`, violating `io.TextIOBase` contract | Fix PR open |
| **P2 / Medium** | [#5928](https://github.com/HKUDS/nanobot/pull/5928) — Unknown email charset crashes polling | `LookupError` on unrecognized charset escapes exception handling, interrupting email receive loop | Fix PR open |
| **P2 / Medium** | [#5914](https://github.com/HKUDS/nanobot/pull/5914) — Napcat non-numeric `file_size` drops images | Images with non-integer `file_size` field silently discarded | Fix PR open |

**Key concern:** Issue [#5924](https://github.com/HKUDS/nanobot/issues/5924) (sudo loop) has **no fix PR yet** and renders the agent completely unusable when it hits sudo-requiring tasks — this is the most urgent open gap.

---

## 6. Feature Requests & Roadmap Signals

| Feature Signal | Source | Likelihood |
|---|---|---|
| **Live tokens/sec indicator in WebUI** | [#5908](https://github.com/HKUDS/nanobot/issues/5908) (p2, 4 comments) | **High** — Clear user demand, well-scoped, PR likely soon |
| **Bot-to-bot messaging on Feishu groups** | [#5929](https://github.com/HKUDS/nanobot/issues/5929) + [PR #5930](https://github.com/HKUDS/nanobot/pull/5930) | **Very High** — PR already open with allowlist + hop limit |
| **Admin-managed Linear workspace access** | [PR #5919](https://github.com/HKUDS/nanobot/pull/5919) (merged) | **Done** — Already landed |
| **Better sudo/session persistence for agents** | [#5924](https://github.com/HKUDS/nanobot/issues/5924) | **Medium** — Critical bug but no design consensus yet |

The convergence of Feishu channel improvements (bot-to-bot, checkpoint leak fix) suggests a **near-term Feishu feature sprint** is underway. The stream of robustness fixes (timezone, unicode, base64, newline, URL dedup) signals preparation for a **stability-focused point release**.

---

## 7. User Feedback Summary

- **Pain point — sudo loop ([#5924](https://github.com/HKUDS/nanobot/issues/5924)):** Users report the agent becomes entirely unusable when sudo is required, looping infinitely and persisting fixation even across conversation continuations. This is a critical workflow blocker.

- **Pain point — internal markers visible ([#5903](https://github.com/HKUDS/nanobot/issues/5903)):** Users on Feishu see raw system-internal checkpoint messages, breaking immersion and exposing implementation details.

- **Pain point — no performance visibility ([#5908](https://github.com/HKUDS/nanobot/issues/5908)):** Users cannot tell if the model is working slowly or has stalled during streaming, leading to unnecessary interruption or confusion.

- **Satisfaction signal — contributor 2gg-bit** authored 8 bug-fix PRs in a single day with thorough regression tests, indicating strong community investment in platform stability.

---

## 8. Backlog Watch

- **[#5924](https://github.com/HKUDS/nanobot/issues/5924) — Agent stuck in sudo loop**: High-impact bug with **no fix PR** and zero maintainer comments yet. Needs urgent triage.

- **[#5903](https://github.com/HKUDS/nanobot/issues/5903) — Feishu checkpoint marker leak**: A user-facing bug with no associated fix PR after 2 days. While not as severe as the sudo loop, it degrades trust on the Feishu channel.

- **[PR #5922](https://github.com/HKUDS/nanobot/pull/5922) — Cron DST fix (p1)**: The only p1-labeled PR, yet still open. DST-incorrect scheduling is a subtle correctness bug that may already be silently affecting production deployments. Deserves priority review.

- **[PR #5918](https://github.com/HKUDS/nanobot/pull/5918) — JSON Schema union type fix**: Affects tool execution correctness broadly; any MCP tool with `oneOf`/`anyOf`-style schemas could be impacted. Should not linger.

---

*Digest generated from GitHub activity data for HKUDS/nanobot on 2026-09-27.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-09-27

---

## 1. Today's Overview

Hermes Agent is experiencing **high activity** with 50 issues and 50 pull requests updated in the last 24 hours, though no new releases shipped today. The open issue ratio (31/50) and open PR ratio (37/50) indicate a **backlog-heavy posture**, with more work entering the pipeline than being resolved. The dominant theme across both issues and PRs is **session-state integrity and multi-backend/multi-profile compatibility** — a cluster of bugs around shared `HERMES_HOME`, gateway identity matching, stale-transcript guards, and multiplex migration. The Desktop app (especially on Windows) is a recurring friction point, with multiple regressions reported after recent updates. Maintainer `OutThisLife` is the most active contributor, landing several targeted fixes today.

---

## 2. Releases

No new releases were published today. The latest referenced versions in issue reports are **v0.21.4** and **v0.21.5+2434**, suggesting the project is in a stabilization cycle between patch releases.

---

## 3. Project Progress

**Merged/Closed PRs (13 total):**

| PR | Summary | Impact |
|---|---|---|
| [#122257](https://github.com/NousResearch/hermes-agent/pull/122257) | **Fix usage anchor invalidation on prefix rewrites** — clamps context display so it can never exceed model window (fixes [#109760](https://github.com/NousResearch/hermes-agent/issues/109760)) | High — eliminates impossible context reports and bad compaction pressure |
| [#121443](https://github.com/NousResearch/hermes-agent/pull/121443) | **Fix `--ignore-existing` flag** — Desktop now skips discovered runtimes instead of always starting a local backend (fixes [#117682](https://github.com/NousResearch/hermes-agent/issues/117682)) | Medium — critical for remote-gateway-only Desktop clients |
| [#122369](https://github.com/NousResearch/hermes-agent/pull/122369) | **Add File Browser toggle to Appearance settings** (fixes [#65173](https://github.com/NousResearch/hermes-agent/issues/65173)) | Low-Medium — UX improvement for sidebar control |
| [#124506](https://github.com/NousResearch/hermes-agent/pull/124506) | **Scope `session.status` to session's own profile** on multiplexed hosts | Medium — prevents wrong `Path:` display in multi-profile setups |
| [#122898](https://github.com/NousResearch/hermes-agent/pull/122898) | **Fix named profile `terminal.cwd` being overridden** by Desktop's inherited workspace cwd | Medium — profile isolation correctness |
| [#121997](https://github.com/NousResearch/hermes-agent/pull/121997) | **Windows fix cluster**: cua-driver autostart opt-in, Intel-Mac installer docs, click-session poll (addresses [#97389](https://github.com/NousResearch/hermes-agent/issues/97389) and others) | Medium-High — resolves involuntary Windows Scheduled Task registration and installer issues |

**Notable Open PRs advancing features:**

- [#122491](https://github.com/NousResearch/hermes-agent/pull/122491) — Major refactor evacuating `hermes_cli` into `nous_cli` (290+ import sites); behavior-preserving but architectural.
- [#117727](https://github.com/NousResearch/hermes-agent/pull/117727) — Opt-in `skills.preferred_dirs` for skill discovery collision resolution.
- [#116479](https://github.com/NousResearch/hermes-agent/pull/116479) — Credential-pool policy refresh between turns (no gateway restart needed).
- [#123179](https://github.com/NousResearch/hermes-agent/pull/123179) — Fix terminal heartbeats wasting model turns; wakes agent only on new output.

---

## 4. Community Hot Topics

The most-discussed issues reveal **session-state safety under concurrent/multi-backend access** as the project's central pain point:

1. **[#94778](https://github.com/NousResearch/hermes-agent/issues/94778)** (9 comments) — *Auto-continue false positive when two backends share `HERMES_HOME`*. The interrupted-turn marker has no writer identity, causing duplicate turns and misleading "backend stopped" notices. **Underlying need:** Proper ownership/locking for shared state files.

2. **[#106217](https://github.com/NousResearch/hermes-agent/issues/106217)** (8 comments) — *Desktop dead-ends when resuming a session owned by a live TUI*. No path forward, entire window becomes an unrecoverable error. **Underlying need:** Graceful session-attachment conflict resolution instead of hard failure.

3. **[#124077](https://github.com/NousResearch/hermes-agent/issues/124077)** (4 comments, **P1**) — *Codex summary stall misclassified as network failure, so compression never falls back and gateway wipes the session*. **Underlying need:** Robust failure-classification in the compression pipeline; this is data-loss severity.

4. **[#122063](https://github.com/NousResearch/hermes-agent/issues/122063)** (4 comments) — *Desktop 0.21.4 shows the same chat for all bots after profile control channel stalls*. **Underlying need:** Profile-isolation resilience when the control channel drops.

5. **[#60456](https://github.com/NousResearch/hermes-agent/issues/60456)** (6 comments) — *`prefill_messages_file` ignored by Desktop App*. **Underlying need:** Feature parity between Desktop backend (`hermes_cli`) and legacy CLI/gateway.

---

## 5. Bugs & Stability

Ranked by severity:

| Severity | Issue | Description | Fix Status |
|---|---|---|---|
| **P1** | [#124077](https://github.com/NousResearch/hermes-agent/issues/124077) | Codex summary stall → misclassified as network failure → compression never falls back → **session wiped** | No fix PR yet |
| **P2** | [#122063](https://github.com/NousResearch/hermes-agent/issues/122063) | Desktop shows same chat for all bots (profile control stall regression on Windows) | No fix PR yet |
| **P2** | [#94778](https://github.com/NousResearch/hermes-agent/issues/94778) | Interrupted-turn marker shared across backends with no writer identity | No fix PR yet |
| **P2** | [#106217](https://github.com/NousResearch/hermes-agent/issues/106217) | Desktop dead-ends on "Turn failed" when resuming TUI-owned session | No fix PR yet |
| **P2** | [#123151](https://github.com/NousResearch/hermes-agent/issues/123151) | Multiplex migration never confirms — bootstrap gateway fails identity check | No fix PR yet |
| **P2** | [#124029](https://github.com/NousResearch/hermes-agent/issues/124029) | `live_gateway_pid_for_home()` can never verify a shim-launched gateway | No fix PR yet |
| **P2** | [#124413](https://github.com/NousResearch/hermes-agent/issues/124413) | Cron→Telegram deliveries lose all HTML formatting; Rich Messages never attempted | No fix PR yet |
| **P2** | [#124451](https://github.com/NousResearch/hermes-agent/issues/124451) | MCP results from Python-SDK servers reach the model **twice** (dual emit since #116693) | No fix PR yet |
| **P2** | [#124473](https://github.com/NousResearch/hermes-agent/issues/124473) | Windows Desktop update leaves multiplex gateway down when named profile is active | **Fix PR exists:** [#124482](https://github.com/NousResearch/hermes-agent/pull/124482) |
| **P2** | [#123033](https://github.com/NousResearch/hermes-agent/issues/123033) / [#123856](https://github.com/NousResearch/hermes-agent/issues/123856) | Stale-transcript guard permanently blocks sends in active sessions | Partially addressed by stale-guard logic; still reported as broken in [#123856] |
| **P2** | [#122395](https://github.com/NousResearch/hermes-agent/issues/122395) | `activate_dependencies` selects wrong interpreter generation → MCP servers and cron workers fail | No fix PR yet |
| **P2** | [#120991](https://github.com/NousResearch/hermes-agent/issues/120991) | False "STANDALONE" warning on already-multiplexing host (stale `gateway_state.json`) | No fix PR yet |
| **P2** | [#110238](https://github.com/NousResearch/hermes-agent/issues/110238) | `hermes update` leaves `fleet_restart_pending` + false "never touched" warning when systemd unit has hash suffix | No fix PR yet |
| **P3** | [#124471](https://github.com/NousResearch/hermes-agent/issues/124471) | Hindsight core→plugin migration traps source install in dependency prompt loop | Related fix PR: [#124494](https://github.com/NousResearch/hermes-agent/pull/124494) |

**Key pattern:** The **gateway identity / lifecycle** cluster (issues #123151, #124029, #110238, #120991) is systemic — the codebase has multiple independent "is this the right gateway?" checks that disagree with each other, especially when launched through the pm-runtime shim or with hashed systemd unit names.

---

## 6. Feature Requests & Roadmap Signals

While today's data is overwhelmingly bug-focused, several open PRs signal the roadmap direction:

- **[#122491](https://github.com/NousResearch/hermes-agent/pull/122491)** — The `hermes_cli → nous_cli` refactor is the largest architectural change in flight. It suggests the CLI surface is being prepared for a **broader "Nous" product umbrella**, potentially decoupling agent-agnostic CLI infrastructure from Hermes-specific logic.

- **[#117727](https://github.com/NousResearch/hermes-agent/pull/117727)** — `skills.preferred_dirs` indicates investment in **skill/plugin discovery and conflict resolution**, likely in preparation for a growing plugin ecosystem.

- **[#116479](https://github.com/NousResearch/hermes-agent/pull/116479)** — Credential-pool refresh between turns suggests **multi-provider credential rotation** is a roadmap item, important for enterprise/team deployments.

- **[#124503](https://github.com/NousResearch/hermes-agent/pull/124503)** — `--all-profiles` flag for `hermes mcp add` signals **multi-profile-first design** is being hardened.

- **[#124450](https://github.com/NousResearch/hermes-agent/pull/124450)** — GitHub comment webhook routing indicates **deeper Git-platform integration** via the webhook delivery system.

**Prediction for next version:** Given the density of P2 session-state and gateway-identity bugs, the next release will likely be a **stability-focused patch** (v0.21.6) addressing the stale-transcript guard, gateway identity matchers, and the Windows update regression before any feature work lands.

---

## 7. User Feedback Summary

**Pain points consistently expressed:**

1. **Multi-backend / multi-profile is fragile.** Users running Desktop + TUI, or Desktop + remote gateway, hit dead-ends, wrong sessions, or data loss regularly. The shared-file-state model (`interrupted_turns.json`, `gateway_state.json`, `state.db`) lacks concurrency safety.

2. **Desktop is the weakest surface.** Many bugs are Desktop-specific or Desktop-exacerbated: profile control stalls, file browser reopening, clear-chat not working, session dead-ends, Windows update failures. Users perceive Desktop as **less mature than the CLI/TUI**.

3. **Windows is underserved.** Multiple Windows-specific issues (gateway start guard, cua-driver autostart, installer compatibility) suggest the platform needs dedicated testing infrastructure.

4. **Stale-state guards backfire.** The stale-transcript guard and usage anchor system, designed to protect users, are instead **locking them out** of working sessions or reporting impossible values.

5. **MCP/plugin lifecycle friction.** Adding MCP servers doesn't propagate to new Desktop sessions; the Hindsight migration traps installs; dependency interpreter mismatches break tools silently.

**Satisfaction signals:** Users are engaged and filing detailed, well-categorized bug reports with reproduction steps. The 👍 counts are low but comment counts are healthy, indicating a **technically sophisticated user base** that diagnoses deeply rather than casually upvoting.

---

## 8. Backlog Watch

| Item | Why It Needs Attention | Days Open |
|---|---|---|
| [#94778](https://github.com/NousResearch/hermes-agent/issues/94778) | 9 comments, no maintainer response, no fix PR — shared-backend interrupted-turn marker is a fundamental concurrency flaw | ~33 |
| [#106217](https://github.com/NousResearch/hermes-agent/issues/106217) | 8 comments, no fix PR — Desktop dead-end with no recovery path is a critical UX failure | ~18 |
| [#60456](https://github.com/NousResearch/hermes-agent/issues/60456) | 6 comments, closed but **no linked fix PR** — `prefill_messages_file` still ignored by Desktop | ~83 |
| [#110238](https://github.com/NousResearch/hermes-agent/issues/110238) | Systemd unit hash suffix causes `hermes update` to leave gateway in `fleet_restart_pending` permanently; no fix PR | ~14 |
| [#124077](https://github.com/NousResearch/hermes-agent/issues/124077) | **P1 data-loss bug** — Codex compression stall wipes sessions; opened yesterday, no fix PR yet | 1 (but P1 urgency) |
| [#81564](https://github.com/NousResearch/hermes-agent/issues/81564) | `serve`-mode backends invisible to `--status` but killable by `--stop`; status/stop asymmetry; closed but no linked fix | ~50 |
| [#49645](https://github.com/NousResearch/hermes-agent/issues/49645) | Windows gateway connection failure; closed but no clear resolution documented | ~99 |

**Most urgent:** [#124077](https://github.com/NousResearch/hermes-agent/issues/124077) (P1, session data loss) and [#94778](https://github.com/NousResearch/hermes-agent/issues/94778) (long-open, fundamental multi-backend state safety) should be prioritized by maintainers.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-09-27

---

## 1. Today's Overview

PicoClaw saw light activity today, with one new bug report and movement on three pull requests (two closed, one still open). No new releases were published, indicating the project remains in a development/stabilization phase rather than a shipping cadence. The sole open issue highlights a compatibility gap with the QQ messaging platform's updated API, which could affect a significant user segment. On the positive side, two PRs were closed, including a long-standing QQ channel enhancement, suggesting some backlog triage is underway. Overall, activity is modest and maintainer engagement appears intermittent.

---

## 2. Releases

No new releases were published today. The project has no recent releases on record.

---

## 3. Project Progress

Two pull requests were closed today:

- **[#3310](https://github.com/sipeed/picoclaw/pull/3310) — Feat/auto PR** (Author: j-v, CLOSED): An automated PR submitted by the `picoclanker` bot. Its closure suggests it was either superseded, deemed unnecessary, or merged via a different path. No clear feature advancement from this item alone.

- **[#1349](https://github.com/sipeed/picoclaw/pull/1349) — feat(qq): support parsing and replying to more attachment types** (Author: aishannon, CLOSED): This was a substantial enhancement for the QQ channel, covering emoji parsing, voice/image/video/file message handling, local attachment replies, and Markdown message prioritization. **However, it was closed rather than merged**, which is notable — this may indicate the approach was rejected or reworked, or the feature was incorporated differently. This is a significant signal for QQ channel users expecting richer media support.

One PR remains open:

- **[#3347](https://github.com/sipeed/picoclaw/pull/3347) — fix laggy interface** (Author: iMilnb, OPEN, stale): A community-contributed fix for web UI lag with large chat histories. It has been open since late August with no clear path to merge, which may indicate maintainer bandwidth constraints or review hesitation on the TS/Node changes.

---

## 4. Community Hot Topics

Activity is low; no items have significant comments or reactions today.

- **[#3394](https://github.com/sipeed/picoclaw/issues/3394)** — The only new issue, reporting that QQ's bot API has been updated but PicoClaw's QQ chat channel interface has not kept pace. Zero comments and zero reactions so far, but this signals an active compatibility problem for QQ-dependent users. The underlying need is **platform API parity** — as upstream services evolve, PicoClaw must track changes or risk channel breakage.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| Medium | **[#3394](https://github.com/sipeed/picoclaw/issues/3394)** — QQ bot API updated but PicoClaw's QQ chat channel interface not updated, likely causing connectivity or functionality failures | OPEN | No known fix PR |

The QQ API mismatch bug is the only stability concern raised today. It is rated medium severity because it affects a specific channel integration rather than the core system, but for users relying on QQ, it could be a blocking issue. No fix PR has been submitted yet.

---

## 6. Feature Requests & Roadmap Signals

- **QQ channel media enhancement** (from closed PR [#1349](https://github.com/sipeed/picoclaw/pull/1349)): The demand for richer QQ attachment handling (voice, image, video, file, emoji) is clearly articulated, but this PR was closed without merging. This may indicate an alternative implementation is planned or the approach needs rework. **Likely to resurface** in a future PR or version if QQ remains a priority channel.

- **QQ API compatibility** (from issue [#3394](https://github.com/sipeed/picoclaw/issues/3394)): While framed as a bug, resolving this will require feature-level API updates to the QQ channel adapter. This is a strong candidate for the next patch or minor version.

- **Web UI performance** (from PR [#3347](https://github.com/sipeed/picoclaw/pull/3347)): Community demand for lag-free chat UI exists, but the stale PR suggests this is not currently prioritized by maintainers.

---

## 7. User Feedback Summary

- **Pain point — QQ channel drift:** Users depending on QQ are experiencing breakage as the upstream bot API has moved ahead of PicoClaw's implementation. This reflects a broader challenge for any multi-channel AI assistant: maintaining compatibility with rapidly evolving third-party APIs.

- **Pain point — Web UI lag:** The open (stale) PR for laggy interface fix indicates users encounter performance degradation with long chat histories. The contributor noted they are not a TS/Node developer, which may reduce confidence in the patch.

- **Use case signal:** QQ channel usage remains active enough for users to notice and report API incompatibilities, confirming QQ as a meaningful channel for the PicoClaw user base.

- **Satisfaction indicator:** Low engagement (0 comments, 0 reactions on most items) may suggest either a small active community or users who report issues but don't discuss them further.

---

## 8. Backlog Watch

| Item | Age | Concern |
|------|-----|---------|
| **[#3347](https://github.com/sipeed/picoclaw/pull/3347)** — fix laggy interface | ~1 month open, stale | A functional community fix for a real performance issue sitting without review or merge. Risks contributor discouragement and user frustration. Needs maintainer triage. |
| **[#3394](https://github.com/sipeed/picoclaw/issues/3394)** — QQ API update mismatch | 1 day old | Brand new and unanswered. Given the time-sensitive nature of API compatibility (breakage worsens over time), this warrants prompt attention to prevent QQ channel abandonment. |

---

*Digest generated from GitHub activity data as of 2026-09-27. Project: [sipeed/picoclaw](https://github.com/sipeed/picoclaw).*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



# NanoClaw Project Digest — 2026-09-27

*Repository: [nanocoai/nanoclaw](https://github.com/nanocoai/nanoclaw) | Data window: 2026-09-26 → 2026-09-27*

---

## 1. Today's Overview

NanoClaw is experiencing a burst of development activity, with **26 pull requests updated in the last 24 hours** — the vast majority from a single contributor (barnuri) pushing a coordinated wave of feature, refactor, and hardening PRs. At the same time, the project is contending with a cluster of **open issues around its update mechanism and WhatsApp dependency hygiene**, including a security-sensitive key-leak bug and a known message-spoofing vulnerability in a pinned transitive dependency. No new releases were cut today, so all of this work remains unshipped. Overall, the project health is **active but strained**: high feature velocity on one axis, and a small but critical backlog of regressions and security debt on the other.

---

## 2. Releases

**No new releases today.** The latest published version remains absent from the data window. With 24 open PRs queued behind no release tag, a cut is likely overdue given the volume of merged work accumulating on `main`.

---

## 3. Project Progress

The overview reports **2 PRs merged/closed in the last 24h** (out of 26 total), though the detailed list shows only open items — the closed PRs may have been merged silently or fall outside the displayed top-20. The dominant theme across all visible PRs is a **systematic expansion of the skill system and provider/delivery seams**, driven by a single contributor:

| Area | Key PRs |
|---|---|
| **Skills (new)** | `/add-turn-traces` (#3939), `/add-voice-replies` (#3938), `/add-repo-self-edit` (#3937), `/add-error-reports` (#3935), `/add-flows` (#3933), `/add-lean-tasks` (#3932), `/add-scheduled-update` (#3929), `/contribute-upstream` (#3928) |
| **Channels & UI** | Slack collapsible `send_card` sections (#3940), Telegram live progress messages (#3936), Discord env-proxy Gateway (#3923) |
| **Core/Provider Refactors** | Provider-wrapper seam with per-query model + retryable failures (#3925), `minimalContext` provider option (#3931), delivery adapter wrapping (#3924), OpenCode env unification (#3930) |
| **Hardening** | Per-session log sink for agent container stderr (#3922), `send_card` URL pattern fix for llama.cpp grammars (#3895) |

The sheer breadth of this batch — touching agent-runner, channels, core, skills, scheduled-tasks, ncl-cli, providers, containers, and security — suggests a deliberate **"seam-first" refactoring sprint**: rather than adding features monolithically, the author is exposing injection points (hooks, wrappers, seams) so that future features — including community ones — can be plugged in without editing upstream files.

---

## 4. Community Hot Topics

### 🔴 Issue #2520 — Signal Protocol Key Material Leaked to Logs
- **Author:** participo | **Updated:** 2026-09-26 | **Comments:** 1 | **👍:** 0
- **Link:** [nanocoai/nanoclaw#2520](https://github.com/nanocoai/nanoclaw/issues/2520)
- **Analysis:** This is the most security-sensitive open issue. `logs/nanoclaw.log` is capturing `privKey`, `rootKey`, and `chainKey` buffers from `libsignal-node`'s `SessionEntry` on every WhatsApp session close. The reporter correctly identifies that the fix should be at NanoClaw's host startup layer (filtering the log) rather than patching the transitive dependency. The single comment suggests the maintainer has acknowledged it but no fix PR is yet visible. This is a **high-severity privacy bug** for any deployment with shared logs.

### 🔴 Issue #3941 — Vulnerable `@whiskeysockets/baileys` Pin Persists Across Updates
- **Author:** bmultini | **Updated:** 2026-09-26 | **Comments:** 0 | **👍:** 0
- **Link:** [nanocoai/nanoclaw#3941](https://github.com/nanocoai/nanoclaw/issues/3941)
- **Analysis:** The `channels` branch still pins `@whiskeysockets/baileys@7.0.0-rc.9`, which is affected by **GHSA-qvv5-jq5g-4cgg** (message spoofing). Worse, every run of `/update-nanoclaw` re-pins this version, making it a persistent vulnerability rather than a one-time oversight. This intersects with the update-mechanism problems below.

### 🟡 Issues #3942 & #3943 — Update Mechanism Regressions
- **#3942:** Skill refresh during `/update-nanoclaw validate` rewrites `pnpm-lock.yaml` and drops `integrity` hashes for git-hosted deps → breaks reproducibility and could allow supply-chain drift.
- **#3943:** `prepare` crashes with `MODULE_NOT_FOUND` because the controller imports `setup/gateways/` and npm deps that the documented extraction doesn't provide — a **regression after #3750**.
- **Links:** [#3942](https://github.com/nanocoai/nanoclaw/issues/3942) | [#3943](https://github.com/nanocoai/nanoclaw/issues/3943)
- **Analysis:** Both are fresh (created today) and both attack the same pain point: the `/update-nanoclaw` skill path is broken in different ways. Together they suggest the update flow hasn't kept pace with the codebase's restructuring.

---

## 5. Bugs & Stability

| Rank | Issue | Severity | Fix PR? |
|---|---|---|---|
| **1** | **#2520** — Signal session keys written to logs on every WhatsApp close | **Critical** (crypto key leakage) | No |
| **2** | **#3941** — `baileys@7.0.0-rc.9` pinned despite GHSA-qvv5-jq5g-4cgg (message spoofing); re-pinned on every update | **High** (known CVE, persistent) | No |
| **3** | **#3943** — `/update-nanoclaw prepare` crashes with `MODULE_NOT_FOUND`; regression from #3750 | **High** (blocks updates) | No |
| **4** | **#3942** — `/update-nanoclaw validate` rewrites `pnpm-lock.yaml`, drops integrity hashes for git deps | **Medium** (reproducibility / supply-chain) | No |
| **5** | **#3895** (PR) — `send_card` URL pattern uses `\s`/`\S` escapes rejected by llama.cpp grammar converter; breaks all llama.cpp-served model requests | **Medium** (provider outage) | Fix PR #3895 open |

**Key observation:** The top four issues are all **unanswered and unfixed**, with no visible PRs addressing them. The security issues (#2520, #3941) in particular have been sitting open — #2520 since May — while a large feature wave ships around them. This is a **stability concern**: the project is moving fast on features but accumulating security and update-mechanism debt.

---

## 6. Feature Requests & Roadmap Signals

No explicit feature-request issues were opened today. However, the **PR wave from barnuri** effectively *is* the roadmap, and it signals several directions:

- **Operational self-management:** `/add-scheduled-update` (#3929), `/add-error-reports` (#3935), `/contribute-upstream` (#3928) — NanoClaw is becoming a system that can maintain, monitor, and even improve itself without human intervention.
- **Richer agent interactions:** `/add-voice-replies` (#3938), Telegram live progress (#3936), collapsible card sections (#3927, #3940) — moving beyond text-only interactions toward a more conversational UX.
- **Deterministic scheduled execution:** `/add-lean-tasks` (#3932) + `minimalContext` provider option (#3931) — enabling cheap, low-context runs on small/local models for cron-style tasks.
- **Fork-friendly architecture:** The "seam" pattern (provider wrappers, delivery hooks, postCard hooks) is explicitly designed to let forks customize without upstream edits. `/contribute-upstream` (#3928) formalizes the reverse path.

**Prediction:** If these PRs land in a single release, it would be the largest feature expansion in NanoClaw's history — likely tagged as a **minor or major version** (e.g., 2.5.0 or 3.0.0) given the breadth of new skills, refactored seams, and new provider options.

---

## 7. User Feedback Summary

The issues filed today come from two distinct user profiles:

- **bmultini** (reporting #3941, #3942, #3943): A power user running NanoClaw 2.4.0 with WhatsApp on Node v22 / pnpm 10. They are hitting real operational blockers — update crashes, lock-file corruption, and a pinned vulnerable dependency. Their tone is methodical and reproducible (exact commit hashes, pnpm versions, step-by-step repros), suggesting a **technical user who depends on NanoClaw for production or heavy personal use** and is frustrated that the update flow is broken.
- **participo** (reporting #2520): Focused on a **security/privacy concern** — key material in logs. The issue has been open since May with only one comment, which may indicate the maintainer is aware but prioritizing other work, or that the reporter has not received a clear response.

**Satisfaction signal:** Low. The update-path issues (#3942/#3943) are fresh and sharp — they block the very act of keeping NanoClaw current. The fact that #3941 (a known CVE) is still unfixed after being reported is the most concerning signal for users who care about security posture.

---

## 8. Backlog Watch

| Item | Age | Why It Matters |
|---|---|---|
| **#2520** (crypto key leak) | ~4 months (since May 17) | Critical security issue; no fix PR despite being the highest-severity bug in the open set. |
| **#3941** (baileys CVE pin) | <1 day (since Sep 26) | Fresh but tied to a known GHSA; if the maintainer treats it as a "follow-up to #3750" it could linger. |
| **#3943** (MODULE_NOT_FOUND regression) | <1 day | Blocks updates for anyone following the documented extraction path. |
| **#3942** (lock file integrity) | <1 day | Silent supply-chain risk if integrity hashes are dropped and not caught. |

**Maintainer attention needed on:**
1. **#2520** — needs an owner. Four months is too long for a crypto key leak.
2. **#3941** — the `baileys` pin should be bumped past the vulnerable version, and the update skill should stop re-pinning it.
3. **#3942 + #3943** — both are update-flow regressions from #3750; they should be triaged together since they share a root cause.

---

*Digest generated from GitHub API data for `nanocoai/nanoclaw` as of 2026-09-27. All links point to the canonical GitHub issues/PRs.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>



# NullClaw Project Digest — 2026-09-27

## 1. Today's Overview
Over the last 24 hours, NullClaw has maintained a steady development pace focused heavily on core stability, memory safety, and integration hardening. While no new releases or merged pull requests were recorded today, the repository shows high developer engagement with five active, open pull requests targeting critical functional bugs. The project health is stable, transitioning through a meticulous bug-fixing and optimization phase before the next deployment cycle.

## 2. Releases
* **No new releases** were published in the last 24 hours.

## 3. Project Progress
No pull requests were merged or closed today, but the development pipeline remains active with five open PRs, all authored by `vernonstinebaker`. These changes represent a significant push toward operational safety and UX refinement:
* **Memory and Context Hygiene:** Fixes are in progress to ensure archived conversation shards do not leak into live turns ([PR #1005](https://github.com/nullclaw/nullclaw/pull/1005)) and to prevent memory leaks during tool call parsing ([PR #1011](https://github.com/nullclaw/nullclaw/pull/1011)).
* **Integration & Platform Stability:** Critical fixes target infinite feedback loops in Discord deployments ([PR #1010](https://github.com/nullclaw/nullclaw/pull/1010)) and improve error observability for provider non-2xx responses ([PR #1004](https://github.com/nullclaw/nullclaw/pull/1004)).
* **Developer Experience:** A long-running PR aims to upgrade the interactive CLI REPL with a robust, allocation-free line editor supporting arrow keys ([PR #970](https://github.com/nullclaw/nullclaw/pull/970)).

## 4. Community Hot Topics
No new issues were opened or commented on today, and PRs currently show no public review comments or reactions. However, the technical focus of the current pull request queue highlights two major structural themes for the project:
* **Context Isolation:** The community and deployment needs demand strict separation between live conversational turns and long-term archived memory shards to prevent AI context confusion.
* **Bot Self-Loop Prevention:** As personal AI assistant deployments scale into multi-user chat platforms like Discord, preventing self-triggering feedback loops is a critical requirement for reliable operations.

## 5. Bugs & Stability
Several critical bugs are currently being addressed via open pull requests. They are ranked below by severity and impact:

1. **Discord Self-Reply Infinite Loop (High Severity):** 
   * *Issue:* When `allow_bots = true` and a reply triggered with the bot's own `@`-mention, the agent entered an infinite turn loop, feeding its own output back as input.
   * *Fix Status:* Addressed in open PR [#1010](https://github.com/nullclaw/nullclaw/pull/1010).
2. **Memory Leak in XML Tool Call Parsing (High Severity):**
   * *Issue:* `parseXmlToolCalls` leaked `name` and `arguments` allocations if a subsequent list append allocation failed, risking memory degradation during heavy tool use.
   * *Fix Status:* Addressed in open PR [#1011](https://github.com/nullclaw/nullclaw/pull/1011).
3. **Archived History Context Contamination (Medium-High Severity):**
   * *Issue:* Archived conversation shards were incorrectly recalled into active prompts and the `memory_recall` tool, causing the model to treat historical data as the current user message.
   * *Fix Status:* Addressed in open PR [#1005](https://github.com/nullclaw/nullclaw/pull/1005).
4. **Hidden Provider Error Details (Medium Severity):**
   * *Issue:* Non-2xx provider POSTs returned an `HttpStatusError` and immediately freed the response body, masking critical server-side reasons (e.g., tool support mismatch) without packet captures.
   * *Fix Status:* Addressed in open PR [#1004](https://github.com/nullclaw/nullclaw/pull/1004).
5. **Interactive REPL Input Limitations (Low-Medium Severity):**
   * *Issue:* The interactive `nullclaw agent` REPL printed control characters instead of handling terminal arrow keys, history navigation, and standard text editor inputs.
   * *Fix Status:* Addressed in open PR [#970](https://github.com/nullclaw/nullclaw/pull/970).

## 6. Feature Requests & Roadmap Signals
No formal feature requests were filed today, but the active pull requests signal clear roadmap directions:
* **Terminal Maturity:** The inclusion of raw-mode input handling in the CLI REPL ([PR #970](https://github.com/nullclaw/nullclaw/pull/970)) signals a roadmap push to make `nullclaw agent` a production-grade developer tool.
* **Data Lifecycle Separation:** The memory shard fix ([PR #1005](https://github.com/nullclaw/nullclaw/pull/1005)) indicates an architectural shift toward stricter, query-filtered separation between hot session data and cold archive data.

## 7. User Feedback Summary
No direct user feedback or comments were recorded in the issue tracker today. However, the urgency of the open PRs highlights implicit user pain points:
* Operators running Discord bots experienced severe loop instabilities.
* Developers debugging tool call execution suffered from memory leaks under allocation failure edge cases.
* Users of the interactive CLI struggled with basic terminal navigation shortcuts.

## 8. Backlog Watch
* **PR #970 (`fix(cli): handle arrow keys in agent REPL`):** This PR has been open since **2026-06-29** (nearly 3 months) but received a recent update on 2026-09-26. It requires maintainer review and prioritization to finalize the developer experience updates.
* **Overall Review Bottleneck:** With 5 open PRs actively updated but 0 merged in the last 24 hours, the project would benefit from maintainer review throughput to get these vital stability and UX improvements merged into the main branch.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



# IronClaw Project Digest — September 27, 2026

## 1. Today's Overview
As of September 27, 2026, IronClaw exhibits stable but quiet project activity, marked by zero merged pull requests and no new official releases in the last 24 hours. The project is currently in a maintenance phase, highlighted by a routine automated codebase knowledge graph refresh pull request awaiting review. Community engagement remains active, spearheaded by a newly opened, highly specific feature request for a NEARA hosted-MCP extension to enable keyless NEAR token launchpad interactions. Overall project health is solid, with no open bug reports, indicating a clean baseline for focused feature development and infrastructure housekeeping.

## 2. Releases
*No new releases were published today.*

## 3. Project Progress
No pull requests were merged or closed during the last 24 hours, meaning no core features or bug fixes transitioned to the main branch today. The only updated pull request remains:
* **PR #7988 [OPEN]**: `chore(agents): refresh codebase knowledge graph` by `ironclaw-ci[bot]`. This routine update is currently open and pending maintainer review to ensure the codebase memory bootstrap snapshot remains synchronized with the current default branch.

## 4. Community Hot Topics
The community focus is currently centered on ecosystem integration and developer tooling maintenance:
* **Issue #8112 [OPEN] - Feature: NEARA hosted-MCP extension (keyless NEAR token launchpad tools)**: Opened by `iwaterheater`, this issue details a request to equip IronClaw agents with the capability to interact with the NEARA launchpad on the NEAR mainnet. The underlying need is programmatic agent access to token listing, quoting, launching, and trading within a fixed-supply (1B) and locked concentrated-liquidity framework (Rhea DCL). This represents a push to make AI agents transactionally autonomous within the NEAR DeFi ecosystem.
  * Link: `https://github.com/nearai/ironclaw/issues/8112`
* **PR #7988 [OPEN] - chore(agents): refresh codebase knowledge graph**: This automated pull request highlights the community's need to keep AI-assisted development context layers perfectly aligned with the latest codebase changes.
  * Link: `https://github.com/nearai/ironclaw/pull/7988`

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported in the last 24 hours. The repository is entirely free of critical stability issues, and no urgent bug fix branches are currently in active development.

## 6. Feature Requests & Roadmap Signals
The primary roadmap signal today comes from **Issue #8112**, requesting a native NEARA MCP extension. The request for "keyless" token launchpad tools indicates a strong community desire to lower the barrier of entry for agents to interact with complex tokenomics on NEAR. It is highly likely that the project roadmap will prioritize high-value Model Context Protocol (MCP) extensions for major NEAR launchpad and DeFi protocols, bringing autonomous token launch and liquidity management capabilities directly to IronClaw agents in upcoming milestone versions.

## 7. User Feedback Summary
Direct user feedback is currently minimal, but the submission of Issue #8112 outlines a clear pain point: IronClaw agents currently lack the primitive tools needed to act on NEAR token launchpads. Users are requesting out-of-the-box tooling to bypass complex manual setups, seeking a "keyless" agent experience that can seamlessly list, quote, and trade new tokens. This highlights a high satisfaction rate with the agent framework itself, paired with a strong demand for vertical, ecosystem-specific DeFi integrations.

## 8. Backlog Watch
Maintainers should pay attention to the following items requiring alignment:
* **PR #7988 (Open since August 29, 2026)**: This automated codebase knowledge graph refresh has been sitting in the queue for nearly a month. It needs a quick review and merge to keep the AI-generated codebase memory snapshots fresh for contributors.
* **Issue #8112 (Opened September 26, 2026)**: While fresh, this complex feature request requires core maintainer triage to scope the implementation of a hosted MCP extension for NEARA launchpad tools. Early scoping is recommended to guide the feature into an official release cycle.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



Based on the GitHub activity for **LobsterAI** (`netease-youdao/LobsterAI`) up to **2026-09-27**, here is the structured project digest.

---

### 1. Today's Overview
LobsterAI shows high development activity and healthy maintenance hygiene, with 11 pull requests and 6 issues updated in the last 24 hours. The project is currently stabilizing its core agent engine, authentication, and scheduling features. While there are no new releases today, the repository underwent a batch update and archival of historical issues (marked as `[stale]` and `[CLOSED]`) alongside active code refactoring and critical bug fixes. The overall project health is stable, with maintainers successfully addressing high-severity race conditions and UI/UX blockers.

### 2. Releases
*   **No new releases** were published today.

### 3. Project Progress
A total of **10 pull requests were merged/closed** today, demonstrating significant movement on engineering tasks, particularly around system stability, developer tooling, and scheduled task workflows:
*   **Authentication & Gateway Stability:** Merged PR [#1049](https://github.com/netease-youdao/LobsterAI/pull/1049) resolved a critical concurrent 401 token refresh issue by introducing a shared `sharedRefreshOnce` slot, preventing users from being forcibly logged out. Merged PR [#1052](https://github.com/netease-youdao/LobsterAI/pull/1052) fixed two severe race conditions in the OpenClaw gateway client initialization (`S-07` and `S-08`) that previously locked AI sessions permanently.
*   **Core Feature Enhancement:** Merged PR [#1065](https://github.com/netease-youdao/LobsterAI/pull/1065) introduced a highly requested feature allowing users to bind scheduled tasks to existing cowork sessions rather than spawning isolated sessions.
*   **UI/UX & Visual Fixes:** Merged PR [#1054](https://github.com/netease-youdao/LobsterAI/pull/1054) resolved a modal UI blocker where the close button became unclickable when overlapping the window's draggable title bar by applying `-webkit-app-region: no-drag`.
*   **Code Quality & Refactoring:** Merged PR [#2767](https://github.com/netease-youdao/LobsterAI/pull/2767) successfully modularized the monolithic markdown live-editing engine into structure, commands, and widgets modules. Merged PR [#2768](https://github.com/netease-youdao/LobsterAI/pull/2768) extended the OpenClaw gateway startup timeout to prevent premature failure.
*   **Cleanup & Platform Fixes:** Merged PRs [#1056](https://github.com/netease-youdao/LobsterAI/pull/1056) (removed debug

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-09-27

## 1. Today's Overview
On 2026-09-27, Moltis shows low activity: 0 issues updated, 0 new releases, and 1 open PR in the last 24h. The only active item is PR #1285, a documentation change adding a RepoCloud one-click deploy button to `README.md`. No PRs were merged or closed, so no code features or fixes landed today. Project health appears stable but quiet, with minimal community engagement. The main actionable item is maintainer review of the pending documentation PR.

## 2. Releases
No new releases in the reporting window. Latest Releases: None.

## 3. Project Progress
- Merged/closed PRs today: **0**.
- Open PR: [#1285 docs: add RepoCloud one-click deploy button](https://github.com/moltis-org/moltis/pull/1285) by cosark — adds RepoCloud row to the Cloud Deployment table in `README.md`, matching the existing DigitalOcean button and linking to `https://repocloud.io/details/Moltis/`.
- No features advanced or bugs fixed today, as no PRs were merged or closed.

## 4. Community Hot Topics
- [#1285 docs: add RepoCloud one-click deploy button](https://github.com/moltis-org/moltis/pull/1285) is the only active item and therefore the default hot topic. Comments: undefined/not reported; 👍: 0.  
  **Underlying need:** Lower deployment friction and broader one-click cloud deployment options for new users. This is a small but user-facing onboarding improvement.

## 5. Bugs & Stability
- No bugs, crashes, or regressions were reported today.
- Severity ranking: **N/A**.
- Fix PRs: none.
- Stability appears stable from available data, though absence of reports does not prove absence of issues.

## 6. Feature Requests & Roadmap Signals
- PR #1285 is not a formal issue-based feature request, but it signals demand for easier deployment via managed cloud providers.
- Likely outcome: if merged, it will be a `README.md` documentation update rather than a version-bound feature.
- Possible roadmap signal: continued community interest in adding one-click deploy providers. Future contributions may target similar platforms if maintainers accept this pattern.

## 7. User Feedback Summary
- No issues or comments were available today, so direct user pain points and satisfaction levels cannot be measured.
- The RepoCloud PR implies at least one contributor use case: deploying Moltis quickly through a one-click cloud provider.
- Satisfaction/dissatisfaction: insufficient data.

## 8. Backlog Watch
- No long-unanswered important issues or PRs appear in the provided data.
- [#1285](https://github.com/moltis-org/moltis/pull/1285) was created and updated on 2026-09-26, so it is fresh rather than backlogged.
- Maintainer attention is still recommended to review or merge #1285 if the deployment option is acceptable.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>



Based on the GitHub activity data for CoPaw (QwenPaw) up to September 27, 2026, here is the structured project digest.

---

### 1. Today's Overview
CoPaw has maintained a steady pace of development over the last 24 hours, showing active community engagement and targeted bug fixes. The project health is overall stable, characterized by a mix of critical backend bug reports, feature requests, and active pull requests aimed at refining the user interface (UI) and channel integrations. While no new releases were published today, the ongoing pull requests target critical user experience (UX) consistency and third-party messaging formatting issues, indicating a strong focus on polish and reliability.

### 2. Releases
*No new releases were published in the last 24 hours.*

### 3. Project Progress
*   **Closed Issues:** Issue #7804 (`[enhancement] management`) was closed today. This broad enhancement touched upon core backend, console, channels, skills, CLI, and documentation, indicating a structural cleanup or management refinement.
*   **Active PRs (No merges today):**
    *   **PR #7992** (`fix(wecom): stop treating prose containing a pipe as a markdown table`): Targets a logic flaw in the WeCom channel utility where regular text containing the pipe character (`|`) was incorrectly formatted into a markdown table.
    *   **PR #7956** (`feat(console): unify settings UX and smooth conversation transitions`): Focuses on refining the console settings layout according to the project design language, fixing workspace-picker overflow, and eliminating welcome screen flashes during conversation switches.

### 4. Community Hot Topics
*   **Cron Automation & Script Execution (Issue #4963):** This issue has gathered significant attention with 4 comments. Users are requesting the ability to run scheduled tasks as direct shell/script commands without routing them through the AI agent. The underlying need is to use CoPaw as a lightweight, developer-friendly automation engine alongside its AI capabilities.
    *   *Link:* [agentscope-ai/QwenPaw Issue #4963](https://github.com/agentscope-ai/QwenPaw/issues/4963)
*   **Console UX Unification (PR #7956):** This pull request is highly active, focusing on standardizing UI components, labels, and interaction feedback. The community need is a cohesive, visually consistent settings panel that reduces cognitive load and eliminates layout glitches.
    *   *Link:* [agentscope-ai/QwenPaw PR #7956](https://github.com/agentscope-ai/QwenPaw/pull/7956)

### 5. Bugs & Stability
Bugs reported or targeted today are ranked by severity below:
1.  **High Severity — TaskTracker State Inconsistency (Issue #7991):** The dashboard aggregate counter (`task_tracker.get_global_status()`) reports "2 running tasks," whereas the chat list API returns only 1 chat with `status="running"`. This state mismatch is caused by zombie entries in `_runs` inflating the counts. No fix PR is currently open, making this a critical priority for backend stability.
    *   *Link:* [agentscope-ai/QwenPaw Issue #7991](https://github.com/agentscope-ai/QwenPaw/issues/7991)
2.  **Medium Severity — WeCom Markdown Parsing Error (PR #7992):** Ordinary prose containing a pipe `|` was incorrectly converted into a markdown table by `format_markdown_tables()`. A fix PR is open and ready for review, which will resolve rendering issues on the WeCom channel.
    *   *Link:* [agentscope-ai/QwenPaw PR #7992](https://github.com/agentscope-ai/QwenPaw/pull/7992)
3.  **Low Severity — Console UI Glitches (PR #7956):** Addresses visual bugs such as workspace-picker overflow and welcome-screen transition flashes. A fix PR is open.

### 6. Feature Requests & Roadmap Signals
*   **Direct Shell/Cron Execution (Issue #4963):** The addition of a `script` or `shell` task type for Cron jobs is a highly requested feature. It signals that the roadmap needs to accommodate non-AI automated pipelines. This feature is likely to appear in the next major feature update focusing on automation tools.
*   **Aliyun Token Plan Model Parameters (Issue #7990):** Users noted that the model catalog (`model_catalog.json`) lacks `thinking_param_style` declarations for Aliyun Token Plan models, hiding "Thinking level" controls in the console UI. This signals a roadmap need to continuously sync the local model catalog with upstream provider capabilities.
    *   *Link:* [agentscope-ai/QwenPaw Issue #7990](https://github.com/agentscope-ai/QwenPaw/issues/7990)

### 7. User Feedback Summary
Users are actively reporting high-quality issues that highlight gaps between expected features and actual implementation. Key pain points include:
*   **Dashboard Reliability:** Frustration over inaccurate real-time task metrics (Issue #7991), which breaks trust in the system's monitoring dashboard.
*   **Console Configuration Limits:** Frustration over missing advanced model configuration options (such as reasoning efforts) in the web UI (Issue #7990).
*   **Channel Formatting Issues:** Annoyance with automatic message formatting errors on third-party platforms like WeCom (PR #7992).
Overall, user feedback indicates a highly technical user base eager to customize both the agent behavior and the underlying system tasks.

### 8. Backlog Watch
*   **Issue #4963 (Cron: Support direct script/shell execution task type):** Opened on June 4, 2026, and updated recently (now at 4 comments). It has been lingering in the backlog for over three months. As a core feature request for automation, it requires immediate maintainer triage to define the scope and schedule it in the upcoming roadmap milestones.
    *   *Link:* [agentscope-ai/QwenPaw Issue #4963](https://github.com/agentscope-ai/QwenPaw/issues/4963)
*   **PR #7956 (Console UX unification):** Open since September 23, 2026. It requires prompt code reviews and maintainer attention to merge, as it addresses key visual bugs and standardizes the settings layout.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-09-27

## 1. Today’s Overview
ZeroClaw shows very high development activity in the last 24 hours: **50 issues updated** (41 open/active, 9 closed) and **50 PRs updated** (43 open, 7 merged/closed). No new releases were published, so this is a development- and review-heavy period rather than a shipping one. The workstreams are broad: security/approval enforcement, WhatsApp and Matrix channel behavior, RPC/gateway parity, provider expansion, context management, and daemon/runtime wiring. Overall project health is active and responsive, but the high number of open PRs, blocked issues, and `needs-author-action`/`needs-maintainer-review` labels suggest a growing review and decision backlog.

## 2. Releases
None in the last 24 hours.

## 3. Project Progress
Closed issues today show several fixes and follow-ups landing across channels, providers, CI, and security:
- [Issue #10922](https://github.com/zeroclaw-labs/zeroclaw/issues/10922) — WhatsApp Web `suppress_voice` TTS bug closed.
- [Issue #10793](https://github.com/zeroclaw-labs/zeroclaw/issues/10793) — Windows-only advisory test failures closed.
- [Issue #10643](https://github.com/zeroclaw-labs/zeroclaw/issues/10643) — fail-closed approval enforcement for bounded child loop tools closed.
- [Issue #10966](https://github.com/zeroclaw-labs/zeroclaw/issues/10966) — Git `--attr-source` approval-classification bypass closed.
- [Issue #10812](https://github.com/zeroclaw-labs/zeroclaw/issues/10812) — WhatsApp PDF thumbnail preview closed.
- [Issue #10787](https://github.com/zeroclaw-labs/zeroclaw/issues/10787) — single-candidate stream recovery/backoff closed.

Visible closed/merged PRs:
- [PR #11082](https://github.com/zeroclaw-labs/zeroclaw/pull/11082) — OIDC principals, enrollment, and gateway auth surface (#8289), large security/auth stack.
- [PR #11189](https://github.com/zeroclaw-labs/zeroclaw/pull/11189) — preserve browser and search tool semantics, closing the parser/alias issue.

Features advancing in open PRs include RPC config parity ([PR #11172](https://github.com/zeroclaw-labs/zeroclaw/pull/11172)), bounded replayable subscriptions ([PR #11167](https://github.com/zeroclaw-labs/zeroclaw/pull/11167)), capability-taking turn constructors ([PR #11174](https://github.com/zeroclaw-labs/zeroclaw/pull/11174)), application-layer `DefaultCapabilities` ([PR #11187](https://github.com/zeroclaw-labs/zeroclaw/pull/11187)), the in-process RPC client seam ([PR #11186](https://github.com/zeroclaw-labs/zeroclaw/pull/11186)), and core/gateway parity slices ([PR #11182](https://github.com/zeroclaw-labs/zeroclaw/pull/11182), [PR #11176](https://github.com/zeroclaw-labs/zeroclaw/pull/11176)).

## 4. Community Hot Topics
Most-commented issues in the provided data:
- [Issue #8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) — **[Tracker] Maintainer decision queue for RFCs and design issues** — 15 comments, open, `priority:p2`, `domain:architecture`. This is the clearest signal of a maintainer decision bottleneck: RFCs and design issues are queuing for acceptance, rejection, deferral, or split follow-up.
- [Issue #10977](https://github.com/zeroclaw-labs/zeroclaw/issues/10977) — **WhatsApp Web: implement `create_room` and `invite_user` for group creation** — 5 comments, `risk:high`. Underlying need: channel parity for group management and participant invites.
- [Issue #10922](https://github.com/zeroclaw-labs/zeroclaw/issues/10922) — **WhatsApp Web ignores `suppress_voice` when queueing automatic TTS** — 5 comments, closed. Need: correct voice/TTS routing.
- [Issue #9284](https://github.com/zeroclaw-labs/zeroclaw/issues/9284) — **Config flush can overwrite concurrent writes** — 5 comments, open, `priority:p1`, `risk:high`. Need: safe concurrent config persistence in the runtime/daemon.
- [Issue #10793](https://github.com/zeroclaw-labs/zeroclaw/issues/10793) — **Three Windows-only test failures on advisory job** — 4 comments, closed. Need: CI reliability and platform stability.
- [Issue #11036](https://github.com/zeroclaw-labs/zeroclaw/issues/11036) — **OpenCode big-pickle returns 403 FreeTierError** — 4 comments, `r:needs-repro`. Need: provider/free-tier compatibility.
- [Issue #11055](https://github.com/zeroclaw-labs/zeroclaw/issues/11055) — **Daemon never registers the channel-map factory** — 4 comments, `priority:p1`, `status:blocked`, `risk:high`. Need: channel-addressed tools working for webhook, cron, and SOP turns.
- [Issue #11103](https://github.com/zeroclaw-labs/zeroclaw/issues/11103) — **Add Cheaper Inference as a typed OpenAI-compatible provider** — 3 comments. Need: fast provider expansion.

PR-side hot topics are harder to rank because comment counts are unavailable in the provided data. The most visible high-risk PRs are [PR #10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391) (bounded delegate filesystem tools, `size:XL`, `needs-author-action`), [PR #10480](https://github.com/zeroclaw-labs/zeroclaw/pull/10480) (recover from rejected image requests, `needs-maintainer-review`, `size:XL`), and [PR #11133](https://github.com/zeroclaw-labs/zeroclaw/pull/11133) (revalidate forwarded environment on session reuse). No reactions are recorded in the provided data; all listed items show `👍: 0`.

## 5. Bugs & Stability
Ranked by severity from the provided labels and summaries:

**S0 / Security-critical**
- [Issue #10968](https://github.com/zeroclaw-labs/zeroclaw/issues/10968) — **Unattended agent turns run with no `ApprovalManager`**, so risk-profile tool approvals are silently inert for cron, heartbeat, headless SOP, and `spawn_subagent`. Open, `priority:p1`, `risk:high`, `domain:security`. No direct fix PR is visible; related enforcement work closed in [Issue #10643](https://github.com/zeroclaw-labs/zeroclaw/issues/10643).
- [Issue #10966](https://github.com/zeroclaw-labs/zeroclaw/issues/10966) — **Git `--attr-source` can hide a mutating subcommand from approval classification**. Closed.

**S2 / Degraded behavior, high-risk**
- [Issue #9284](https://github.com/zeroclaw-labs/zeroclaw/issues/9284) — config flush can overwrite concurrent writes; open, `p1`.
- [Issue #11055](https://github.com/zeroclaw-labs/zeroclaw/issues/11055) — daemon never registers channel-map factory; open, `p1`, blocked.
- [Issue #10780](https://github.com/zeroclaw-labs/zeroclaw/issues/10780) — proactive token-budget context compaction removed; `keep_recent`/`collapse_tool_results` inert; open, `p1`.
- [Issue #10778](https://github.com/zeroclaw-labs/zeroclaw/issues/10778) — multimodal image cap eviction rewrites earlier history and invalidates cache prefix; open, `p1`. [PR #10480](https://github.com/zeroclaw-labs/zeroclaw/pull/10480) may mitigate image-request recovery.
- [Issue #11036](https://github.com/zeroclaw-labs/zeroclaw/issues/11036) — OpenCode big-pickle 403 FreeTierError; `needs-repro`.
- [Issue #11059](https://github.com/zeroclaw-labs/zeroclaw/issues/11059) — WhatsApp Web ignores `force_voice`; open.
- [Issue #10926](https://github.com/zeroclaw-labs/zeroclaw/issues/10926) — Matrix `send_via` treats peer identities as room destinations; open.
- [Issue #11020](https://github.com/zeroclaw-labs/zeroclaw/issues/11020) — ACP TodoWrite plan persistence failures silently treated as empty/log-only; open.
- [Issue #10991](https://github.com/zeroclaw-labs/zeroclaw/issues/10991) — Windows scheduled task opens a console window at logon; open, `p1`.
- [Issue #11021](https://github.com/zeroclaw-labs/zeroclaw/issues/11021) — exactly-once `session_end` delivery after ACP hard cancellation; open.
- [Issue #11108](https://github.com/zeroclaw-labs/zeroclaw/issues/11108) — browser/search tool semantics rewritten to shell; open. Fix PR [PR #11189](https://github.com/zeroclaw-labs/zeroclaw/pull/11189) is closed.

**S3 / Lower severity**
- [Issue #10976](https://github.com/zeroclaw-labs/zeroclaw/issues/10976) — WhatsApp Web mentions broken both ways; open.

Closed stability fixes today: [Issue #10922](https://github.com/zeroclaw-labs/zeroclaw/issues/10922), [Issue #10793](https://github.com/zeroclaw-labs/zeroclaw/issues/10793), [Issue #10787](https://github.com/zeroclaw-labs/zeroclaw/issues/10787), [Issue #10812](https://github.com/zeroclaw-labs/zeroclaw/issues/10812).

## 6. Feature Requests & Roadmap Signals
Active feature requests and RFCs suggest the next version will likely focus on channel parity, provider expansion, security hardening, and runtime/gateway architecture:
- [Issue #10977](https://github.com/zeroclaw-labs/zeroclaw/issues/10977) — WhatsApp group creation and invites.
- [Issue #11103](https://github.com/zeroclaw-labs/zeroclaw/issues/11103) — Cheaper Inference typed provider.
- [Issue #10969](https://github.com/zeroclaw-labs/zeroclaw/issues/10969) — jitter window for cron and heartbeat dispatch.
- [Issue #10780](https://github.com/zeroclaw-labs/zeroclaw/issues/10780) — restore proactive token-budget context compaction.
- [Issue #11074](https://github.com/zeroclaw-labs/zeroclaw/issues/11074) — RFC: `search_routes` hint-based provider routing for `web_search_tool`.
- [Issue #11053](https://github.com/zeroclaw-labs/zeroclaw/issues/11053) — RFC: knowledge graph as first-class agent memory.
- [Issue #10909](https://github.com/zeroclaw-labs/zeroclaw/issues/10909) — standard text editing in the ZeroCode composer.
- [Issue #10963](https://github.com/zeroclaw-labs/zeroclaw/issues/10963) — forward session identity to delegate sub-agents.
- [Issue #10933](https://github.com/zeroclaw-labs/zeroclaw/issues/10933) — MiniMax TTS and STT provider families.
- [Issue #10900](https://github.com/zeroclaw-labs/zeroclaw/issues/10900) — transcription provider fallback cascade.
- [Issue #10893](https://github.com/zeroclaw-labs/zeroclaw/issues/10893) — steer in-flight turns when a message arrives mid-generation.

The strongest roadmap signal is the v0.9.0 gateway/core-parity lane visible in PRs: [PR #11182](https://github.com/zeroclaw-labs/zeroclaw/pull/11182), [PR #11176](https://github.com/zeroclaw-labs/zeroclaw/pull/11176), [PR #11172](https://github.com/zeroclaw-labs/zeroclaw/pull/11172), [PR #11167](https://github.com/zeroclaw-labs/zeroclaw/pull/11167), [PR #11174](https://github.com/zeroclaw-labs/zeroclaw/pull/11174), [PR #11187](https://github.com/zeroclaw-labs/zeroclaw/pull/11187), [PR #11186](https://github.com/zeroclaw-labs/zeroclaw/pull/11186), and [PR #11171](https://github.com/zeroclaw-labs/zeroclaw/pull/11171). Expect RPC parity, capability injection, security approval enforcement, provider expansion, and WhatsApp channel improvements to be prominent in the next release cycle.

## 7. User Feedback Summary
Real user pain points cluster around production-grade channel and automation behavior:
- **WhatsApp channel maturity:** voice suppression/force-voice bugs, broken mentions, missing group creation, and missing document previews show WhatsApp Web is a high-demand but still maturing channel.
- **Automation safety:** unattended cron/heartbeat/SOP turns lacking an `ApprovalManager` is a serious trust and security gap for users running ZeroClaw headlessly.
- **Provider reliability:** OpenCode free-tier 403s, Anthropic overload retry behavior, and image-request rejection recovery show provider transport still needs hardening.
- **Daemon/runtime wiring:** webhook, cron, and SOP turns lacking channels means channel-addressed tools are unusable outside limited entry points.
- **Context management:** loss of proactive token-budget compaction is a regression for long-running agent sessions.
- **Platform polish:** Windows logon console window, ZeroCode composer editing, and transcription fallback gaps are usability issues.
- **Satisfaction signals:** many issues are labeled `status:accepted`, `status:in-progress`, and `follow-up`, indicating maintainers are engaging. Dissatisfaction is visible in high-risk open bugs, `status:blocked` items, and multiple `needs-author-action`/`needs-repro` labels.

## 8. Backlog Watch
Important items needing maintainer or author attention:
- [Issue #8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) — Maintainer decision queue; open since 2026-07-04, 15 comments, still active. This is the central coordination bottleneck.
- [Issue #9284](https://github.com/zeroclaw-labs/zeroclaw/issues/9284) — Config flush concurrent-write bug; `p1`, open since 2026-07-23.
- [PR #10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391) — Delegate filesystem workspace fix; `size:XL`, `needs-author-action`, open since 2026-08-26.
- [PR #10480](https://github.com/zeroclaw-labs/zeroclaw/pull/10480) — Recover from rejected image requests; `needs-maintainer-review`, `size:XL`, open since 2026-08-30.
- [Issue #10780](https://github.com/zeroclaw-labs/zeroclaw/issues/10780) — Restore token-budget context compaction; `p1`, open since 2026-09-11.
- [Issue #10968](https://github.com/zeroclaw-labs/zeroclaw/issues/10968) — Unattended turns lack approval enforcement; S0, `p1`, open since 2026-09-19.
- [Issue #11036](https://github.com/zeroclaw-labs/zeroclaw/issues/11036) — OpenCode 403; `needs-repro`, `needs-author-action`, open since 2026-09-21.
- [Issue #11053](https://github.com/zeroclaw-labs/zeroclaw/issues/11053) — Knowledge graph as memory layer RFC; `needs-author-action`, open since 2026-09-22.
- [PR #10843](https://github.com/zeroclaw-labs/zeroclaw/pull/10843) — Telegram reactions fail-loudly fix; `needs-author-action`, open since 2026-09-13.
- [Issue #11055](https://github.com/zeroclaw-labs/zeroclaw/issues/11055) — Daemon channel-map factory; `p1`, `status:blocked`.
- [Issue #10893](https://github.com/zeroclaw-labs/zeroclaw/issues/10893) — Steering mid-generation; `status:blocked`, `risk:high`.

**Assessment:** ZeroClaw is highly active with strong maintainer and contributor engagement, especially around security, channel parity, and gateway/RPC architecture. The main health risk is not lack of activity but throughput: 43 open PRs, a long maintainer decision queue, and multiple blocked or high-risk bugs could slow delivery if review capacity does not keep pace.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*