# OpenClaw Ecosystem Digest 2026-09-28

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-09-27 22:15 UTC

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



# OpenClaw Project Digest — 2026-09-28

## 1. Today's Overview
OpenClaw remains highly active, with 500 issues and 500 PRs updated in the last 24 hours. No new releases were published today, but the project is in a rapid stabilization phase following the 2026.9.6 release — update infrastructure, state-lifecycle management, and memory performance dominate the current focus. Maintainer engagement is strong, with multiple PRs from `steipete`, `roboclaw-bot`, and others carrying `ready for maintainer look` tags. The overall signal is a project under heavy bug-fix pressure, with several P0 issues actively being worked.

## 2. Releases
**None today.** The most recent stable release is 2026.9.6, and the next target (2026.9.7) is tracked via issue #157531.

## 3. Project Progress

**Notable PRs merged/closed today:**

| PR | Title | Area |
|---|---|---|
| #159922 | chore(ui): refresh control ui locales | Web UI |
| #159810 | fix(cli): explain how to reconnect when openclaw connect has no target | CLI |
| #151822 | fix: keep Logs filtering responsive with a full buffer | Web UI |

**Active PRs advancing features or fixes:**

- **#159882** — `chore(deps): update fs-safe to 0.21.1` (steipete) — dependency bump with Doctor migration fallback preserved.
- **#159694** — `fix(slack): let verified linked admins assign sessions from Slack` — security-boundary fix for Slack operator principal resolution.
- **#159923** — `feat(desktop): let agents resume after manual control` — desktop control handoff improvement.
- **#159889** — `feat(users): merge duplicate user profiles` — addresses duplicate Gateway profiles from Cloudflare Access logins.
- **#159767** — `feat(android): control the agent browser inside chat` — Android browser-in-chat feature.
- **#159873** — `fix(cron): prevent duplicate one-shot delivery after restart` — restart recovery dedup for cron/webhook deliveries.
- **#159835** — `fix(state): prevent migration lease loss after database relocation` — migration lease fix.
- **#159898** — `perf(sessions): shorten guarded transcript write holds` — SQLite transaction optimization.
- **#159398** — `refactor(tool-search): retire tool_search_code in favor of structured search and Code Mode` — tooling simplification.
- **#159478** — `feat: let agents participate selectively in group conversations` — selective group participation.
- **#158901** — `feat(workers): run native inference on paired workers` — first of a 3-part stack for paired worker inference.

## 4. Community Hot Topics

**Most commented issues (last 24h):**

1. **#159356** — *llama.cpp manager reports ready while embedding child exits; embedding requests return HTTP 500* (25 comments) — Affects OpenClaw 2026.9.6. The reporter performed an operational recovery by increasing host RAM from ~4 GB to 8 GB, suggesting memory pressure as a contributing factor, though the root cause remains unconfirmed. [Link](https://github.com/openclaw/openclaw/issues/159356)

2. **#97616** — *OpenClaw leaks unreaped hook/tool child processes, causing zombie accumulation and runtime degradation* (16 comments) — Long-standing P1 bug; zombies accumulate under the main `openclaw` process. [Link](https://github.com/openclaw/openclaw/issues/97616)

3. **#157531** — *2026.9.7 Fixes Tracker* (15 comments) — RomneyDa's tracking issue for fixes between 2026.9.6 and 2026.9.7; currently holds 18/21 established P1 candidates. [Link](https://github.com/openclaw/openclaw/issues/157531)

4. **#157067** — *Windows isolated cron setup passes an uncloneable environment Proxy to session history worker* (15 comments) — Windows-specific environment cloning bug. [Link](https://github.com/openclaw/openclaw/issues/157067)

5. **#156112** — *openclaw update fails at "global install swap" while a direct npm install -g succeeds* (13 comments) — Deterministic update failure on npm global installs. [Link](https://github.com/openclaw/openclaw/issues/156112)

**Underlying community needs:** Users are demanding reliable update mechanics, stable multi-process lifecycle management, and better Windows/platform-specific behavior. The volume of update-related failures (#156112, #154114, #157812, #158231, #154924, #153230, #158373) signals that the update flow is the single biggest source of user friction right now.

## 5. Bugs & Stability

**P0 / Critical (ranked by severity):**

- **#156424** — *Shared-state audit_events index corruption paralyses gateway while process/port stay live* (2 incidents, 2026.9.4) — SQLite index corruption on `audit_events` table; gateway frozen. No fix PR yet. [Link](https://github.com/openclaw/openclaw/issues/156424)
- **#158936** — *macOS app readiness watchdog SIGTERMs a slow-starting gateway, causing a restart loop until the app is quit* — Cold-start >40–70s triggers watchdog kill → restart loop. [Link](https://github.com/openclaw/openclaw/issues/158936)
- **#156917** — *State-lifecycle lease has no holder heartbeat or forced takeover: one hung client blocks gateway startup for 31 minutes* — Lease mechanism lacks timeout/fallback. [Link](https://github.com/openclaw/openclaw/issues/156917)
- **#148307** — *Error: database is locked on agent DB when session reclamation exceeds the 5s busy timeout* — 464 MB DB, zero freelist pages, 9–47s reclamation times. [Link](https://github.com/openclaw/openclaw/issues/148307)
- **#158095** — *A gateway worker keeps state-lifecycle after acquireSqliteWorkerLifecycle; every later acquire fails until restart* — State lifecycle leak causing total agent turn stoppage. [Link](https://github.com/openclaw/openclaw/issues/158095)
- **#155859** — *Gateway startup wall-time scales with enabled plugin count on 2026.9.5* — Discord, codex, and openclaw-weixin dominate the 120s publication budget. [Link](https://github.com/openclaw/openclaw/issues/155859)

**P1 / High:**

- **#159356** — llama.cpp embedding child exits, HTTP 500 on embedding requests (memory pressure suspected).
- **#97616** — Hook/tool child process zombie leak.
- **#157067** — Windows cron environment proxy uncloneable.
- **#156112** — npm global update fails at install swap.
- **#127148** — Codex sessions.compact acquires second app-server, active-writer conflict.
- **#113306** — SQLite snapshot restore lacks end-to-end crash/identity guarantees.
- **#154572** — sessions_spawn to claude-cli-runtime fails with SessionTranscriptWriterClaimReboundError.
- **#157989** — Plugin source capture rewrites ~1.1–1.4 GB per CLI command; severe SSD wear.
- **#157605** — High sustained CPU (240–276%) after v2026.9.6 upgrade; stuck sessions.list materialization.
- **#159596** — Gateway memory sawtooth on 2026.9.6; prepared-model-catalog worker grows to heap ceiling; ~200 critical memory-pressure events/day.
- **#158271** — `openclaw agent` turns flip messageToolPolicyHash, invalidating claude-cli session on every switch.
- **#157939** — `database is locked` on reply path drops whole user turn with no retry.
- **#159094** — 2026.9.6 Gateway owns state-lifecycle lease but internal workers report another process owns it.
- **#126246** — Telegram durable outbound deliveries stuck in send_attempt_started, lost on restart.
- **#118793** — Claude CLI "session limit" error dies with surface_error instead of triggering model fallback.

**Fix PRs in flight:**

- **#158447** — `fix(updater): identify the config-read child by env, not by import query` (addresses #158339 — Bun Gateway spawning 8,462+ config-read descendants).
- **#159835** — `fix(state): prevent migration lease loss after database relocation`.
- **#159898** — `perf(sessions): shorten guarded transcript write holds`.
- **#159921** — `fix: memory sync stops after in-process Gateway restart when embeddings come from a managed local server`.

**Assessment:** The project is in a high-bug-density period following the 2026.9.5/9.6 releases. Update infrastructure, SQLite state lifecycle, and memory management are the three most unstable areas. Several P0 issues lack fix PRs and need maintainer attention.

## 6. Feature Requests & Roadmap Signals

- **#63990** — *Multi-index embedding memory with model-aware failover* (P3, 6 comments) — First-class multi-index embedding support for resilient provider/model failover without corrupting vector semantics. [Link](https://github.com/openclaw/openclaw/issues/63990)
- **#159478** — *Let agents participate selectively in group conversations* (active PR) — Selective group participation based on `agents.defaults.experimental.decision` gating.
- **#159767** — *Android: control the agent browser inside chat* (active PR) — Browser-in-chat for Android.
- **#159889** — *Merge duplicate user profiles* (active PR) — User profile deduplication.
- **#158901** — *Run native inference on paired workers* (active PR, 1/3 stack) — Paired worker inference capability.
- **#42591** — *install.sh modularization* (P3, 6 comments) — Refactor 79KB / 2,498-line install script into modules for testability. [Link](https://github.com/openclaw/openclaw/issues/42591)
- **#124911** — *Compaction reserveTokensFloor ignores model context window* — Context-window-aware helper exists but is only used in error messages. [Link](https://github.com/openclaw/openclaw/issues/124911)

**Prediction:** Multi-index embedding memory (#63990) and paired-worker inference (#158901) are the two most likely feature candidates for the next minor release. Selective group participation (#159478) and profile merging (#159889) are strong candidates for 2026.9.7 or a point release.

## 7. User Feedback Summary

**Recurring pain points:**

1. **Update failures are the #1 user complaint.** At least 7 distinct issues (#156112, #154114, #157812, #158231, #154924, #153230, #158373) report `openclaw update` failing at various stages — global install swap, candidate rehearsal, managed-service-preflight, media-persistence, runtime-verification. Users describe "every failure emits a user-visible notice" and "five failure records accumulated in ~2 days."

2. **State database fragility.** Multiple users report `database is locked` errors, index corruption (#156424), and state-lifecycle lease deadlocks (#156917, #159094, #158095) that paralyze the gateway or require restarts.

3. **Memory pressure on constrained hosts.** #159356 and #156191 document OOM-related failures; users on 4 GB hosts are particularly affected. The memory sawtooth (#159596) and plugin source capture SSD wear (#157989) are additional resource concerns.

4. **Platform-specific bugs.** Windows users report environment cloning failures (#157067), GBK encoding corruption (#113219), and managed-service-preflight failures (#157812). macOS users report watchdog restart loops (#158936).

5. **Agent reliability.** Users report infinite tool-call retry loops (#55694), lost Telegram messages (#126246), and wedged code-mode turns (#149270).

**Satisfaction signals:** Some users report successful operational recoveries (e.g., #159356 resolved by increasing RAM). The maintainers are actively triaging and confirming issues (multiple issues carry "This report was explicitly reviewed and confirmed in OpenClaw" tags).

## 8. Backlog Watch

**Long-unanswered / needing maintainer attention:**

- **#97616** — *Unreaped hook/tool child processes* (since 2026-06-29, 16 comments) — P1 zombie leak with no fix PR. High impact on long-running deployments.
- **#113306** — *SQLite snapshot restore lacks end-to-end crash and identity guarantees* (since 2026-07-24, 12 comments) — Data integrity concern with no fix.
- **#122019** — *`openclaw update status` omits configured-plugin availability and irreversible migration risk* (since 2026-08-11, 9 comments) — Upgrade-safety defect still open.
- **#126246** — *Telegram durable outbound deliveries stuck in send_attempt_started* (since 2026-08-19, 8 comments) — Message loss on restart.
- **#127148** — *Codex sessions.compact acquires a second app-server* (since 2026-08-21, 12 comments) — Active-writer conflict with no fix.
- **#84110** — *Codex app-server rewrites prompt on tool-call continuation turns, busting OpenAI prompt cache* (since 2026-05-19, 8 comments) — Cache ratio drops from 93% → 47%; long-standing performance regression.
- **#120449** — *tools.loopDetection WARNING-tier detections are silently logged server-side only* (since 2026-08-08, 7 comments) — Detection exists but is never surfaced to the model.
- **#120415** — *No repetition guard in the embedded-agent turn loop* (since 2026-08-08, 6 comments) — Companion to #120449; model repeating identical tool calls is never detected.
- **#156424** — *Shared-state audit_events index corruption paralyses gateway* (P0, 2 incidents, no fix PR) — Critical data integrity issue.
- **#156917** — *State-lifecycle lease has no holder heartbeat or forced takeover* (P0, 31-minute startup block, no fix PR) — Critical availability issue.
- **#159356** — *llama.cpp manager reports ready while embedding child exits* (P2, 25 comments, no fix PR) — Highest-comment issue; root cause still under investigation.

**Summary:** The project is in a bug-intensive phase, but maintainer responsiveness is high. The update flow, SQLite state lifecycle, and memory management are the three pillars needing sustained focus. Several long-standing issues (#97616, #113306, #84110) remain unfixed and represent technical debt that could resurface as regressions.

---

## Cross-Ecosystem Comparison



# Cross-Project Ecosystem Report — 2026-09-28

## 1. Ecosystem Overview

The personal AI assistant / agent open-source landscape is in a period of rapid consolidation and infrastructure hardening. After a wave of feature releases in late Q2 and early Q3 2026, nearly every project has pivoted to stabilizing a generation of unified package managers, SQLite-backed state stores, and multi-process gateway architectures. The dominant technical tension is between *developer velocity* and *operational reliability*: projects with the highest PR throughput (OpenClaw, NanoClaw, ZeroClaw) are simultaneously carrying the highest density of P0/S0 bugs. Community engagement is concentrated around a handful of themes — update mechanics, state-database integrity, memory pressure on constrained hosts, and provider compatibility with the newly emerging GPT-6 / DeepSeek-V4.1 model generation. No project shipped a release on 2026-09-28; the entire ecosystem is in a synchronized pre-release bug-squash cycle.

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | PRs Merged/Closed (24h) | Latest Release | Health Assessment |
|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | Multiple (not enumerated) | 2026.9.6 (2026-09-06) | **High activity, high bug density** — P0 issues unfixed; update flow is #1 user complaint |
| **ZeroClaw** | 44 | 50 | 3 PRs, 7 issues | v0.8.4 | **Very high activity** — S0 security regressions; strong contributor base (@Audacity88, @JordanTheJet) |
| **NanoClaw** | 0 | 40 | 11 PRs | None | **PR-heavy maintenance** — zero issues, high merge throughput; appears in hardening cycle |
| **Hermes Agent** | 50 | 50 | 0 merged | None | **High engagement, stalled merges** — 30-comment cross-gateway discussion; PM stability work |
| **NanoBot** | 5 | 17 | 6 PRs | None (v0.3.5 referenced) | **Active triage** — GPT-6 fixes in flight; sudo-loop blocker unresolved |
| **NullClaw** | 18 | 9 | 8 PRs | None | **Strong merge velocity** — security hardening + enterprise channels landing |
| **CoPaw** | 7 | 5 | 0 merged | None (v2.2.1 referenced) | **Moderate, review-backlogged** — desktop bugs + context compression; PRs stuck |
| **LobsterAI** | — | 8 PRs | 8 merged | None | **High merge velocity** — SSRF patch, doc editing, memory leak all landed today |
| **IronClaw** | 1 | 6 | 1 closed (Dependabot) | None | **Maintenance-heavy** — zero human feature PRs; dependency backlog 30–36 days |
| **Moltis** | 1 | 2 | 0 merged | None | **Low activity** — DeepSeek model-cap fix pending; no releases |
| **PicoClaw** | 3 | 2 | 0 merged | None (v0.3.1 referenced) | **Low activity, backlog management** — stale closures; DingTalk panic unresolved |
| **TinyClaw** | 0 | 0 | 0 | — | **No activity** |
| **ZeptoClaw** | 0 | 0 | 0 | — | **No activity** |

## 3. OpenClaw's Position

**Advantages vs. peers:**
- **Largest visible community.** 500 issues + 500 PRs in 24h dwarfs all competitors; the issue tracker is a live pulse of real user pain (update failures, SQLite corruption, memory pressure).
- **Strongest maintainer signal.** Multiple PRs carry `ready for maintainer look` tags from named maintainers (`steipete`, `roboclaw-bot`), suggesting active gatekeeping.
- **Deepest platform coverage.** Windows, macOS, Android, Slack, Discord, Telegram, WeChat — no other project has this breadth of channel + OS support under active maintenance.
- **Most comprehensive bug taxonomy.** The P0/P1 ranking, fix-tracking issue (#157531), and detailed incident reports (2 incidents on #156424) indicate a more mature triage process than peers.

**Technical approach differences:**
- OpenClaw uses a **unified gateway process** with SQLite-backed state lifecycle leases — a design that other projects (NanoClaw, ZeroClaw) are converging on but with less architectural documentation.
- It has the most aggressive **tooling simplification** agenda (`tool_search_code` retirement, Code Mode, structured search), positioning it as the "opinionated agent runtime" vs. ZeroClaw's "composable sandbox" approach.
- **Memory management** is a first-class concern (prepared-model-catalog worker, guarded transcript write holds, plugin source capture SSD wear) — few peers track this explicitly.

**Community size comparison:**
OpenClaw's issue/PR volume is 2–10× higher than the next-tier projects (ZeroClaw, Hermes Agent). However, raw volume is inflated by bug-report density; on *constructive* community engagement (feature requests, design discussions), ZeroClaw (#7943 voice channel, 4 comments) and Hermes Agent (#97681 cross-gateway collaboration, 30 comments) show deeper deliberative communities.

## 4. Shared Technical Focus Areas

Across the ecosystem, four requirement clusters are emerging simultaneously:

| Focus Area | Projects | Specific Needs |
|---|---|---|
| **Update / install reliability** | OpenClaw (#156112, #154114, #157812), NanoClaw (#3913, #3910, #3948), Hermes Agent | Deterministic update mechanics that don't break agent spawning, gateway detection, or controller loading; atomic install swaps; rollback on failure |
| **SQLite / state database integrity** | OpenClaw (#156424, #148307, #156917), NanoBot (#5933, #5580, #5943), Hermes Agent | Atomic store saves, migration lease ownership, crash/identity guarantees on snapshot restore, prevention of `database is locked` on reply paths |
| **Provider / model compatibility** | NanoBot (GPT-6 via Copilot #5898, Codex #5939), Moltis (DeepSeek-V4.1-Flash #1286), OpenClaw (llama.cpp #159356) | Dynamic model-capability detection instead of hard-coded heuristics; Responses API routing; reasoning-toggle parity; embedding child lifecycle management |
| **Multi-process / lifecycle management** | OpenClaw (#97616 zombie leak, #158936 watchdog loop, #158095 lifecycle leak), ZeroClaw (S0 parallel-write data loss), NullClaw (A2A principal scoping) | Process reaping, heartbeat/forced-takeover for leases, safe restart without session loss, principal-scoped task isolation |

**Notable cross-project signal:** Three projects independently hit the same class of bug — *state lifecycle lease ownership confusion* (OpenClaw #159094, Hermes Agent PM stability, NanoBot session persistence off event loop). This suggests a shared architectural hazard in the shift to SQLite-backed gateway state stores.

## 5. Differentiation Analysis

| Dimension | OpenClaw | ZeroClaw | NanoClaw | Hermes Agent | NullClaw |
|---|---|---|---|---|---|
| **Feature focus** | Broad platform + tooling integration | Sandbox security + channel breadth | Containerized agent runtime + Iron Proxy | Cross-gateway orchestration | Enterprise channels + approval flows |
| **Target users** | Power users, multi-platform deployments | Self-hosters, container-centric ops | Developers building agent harnesses | Multi-bot operators, research labs | Enterprise teams, MS Teams/Mattermost shops |
| **Technical architecture** | Unified gateway + SQLite leases | Container-per-session + sandbox policy | pnpm workspace + OpenCode runtime | Unified PM + desktop/Telegram fleet | A2A module + Eden AI gateway routing |
| **Philosophy** | Opinionated, "batteries-included" runtime | Composable, security-first sandbox | Pragmatic, update-resilient harness | Collaborative, multi-bot fabric | Enterprise-grade, approval-gated |
| **Release cadence** | ~2 weeks (2026.9.6 → 2026.9.7 target) | v0.8.4 → v0.8.6/v0.9.0 roadmap | No releases yet observed | No releases yet observed | No releases yet observed |
| **Maturity signal** | Highest bug density, strongest triage | Active contributor growth (@RustLangLatam) | PR throughput without issue noise | High community deliberation | Fast merge velocity on security |

## 6. Community Momentum & Maturity

**Tier 1 — Rapidly iterating (high activity, active merges):**
- **ZeroClaw** (44 issues, 50 PRs, 3 merged) — S0 security work alongside channel features; contributor base expanding.
- **NullClaw** (18 issues, 9 PRs, 8 merged) — security + enterprise channel merges landing fast; Eden AI gateway, approval flow, email IMAP all closed today.
- **LobsterAI** (8 PRs merged) — highest merge rate per PR; SSRF patch, doc editing, memory leak all resolved same-day.

**Tier 2 — High activity, stabilizing (bug-squash phase):**
- **OpenClaw** (500/500) — volume is enormous but quality is uneven; P0 issues without fix PRs are the risk.
- **Hermes Agent** (50/50) — high community engagement but zero PRs merged today; architectural refactoring (unified PM) may delay feature delivery.
- **NanoBot** (5/17) — focused triage on GPT-6 + cron durability; PR-to-issue ratio suggests engineering-led rather than community-driven.

**Tier 3 — Low activity / maintenance mode:**
- **NanoClaw** (0 issues, 40 PRs) — maintainer-driven hardening; no visible community discussion.
- **CoPaw** (7/5, 0 merged) — PR review backlog; desktop stability issues unresolved.
- **IronClaw** (1/6, Dependabot-only) — entirely automated; human feature work stalled.
- **Moltis** (1/2, 0 merged) — single-developer cadence; model-cap fix pending.

**Tier 4 — Dormant:**
- **PicoClaw**, **TinyClaw**, **ZeptoClaw** — no meaningful activity or stale items only.

## 7. Trend Signals

**For AI agent developers, the following signals are actionable:**

1. **The update flow is the new battleground.** Seven distinct OpenClaw issues, multiple NanoClaw PRs, and Hermes Agent PM stability work all point to *update reliability* as the #1 user friction point across the ecosystem. Developers should invest in atomic, rollback-safe update mechanics with pre-flight verification — this is now table stakes for any agent runtime.

2. **SQLite is the default state store — and it's fragile.** Four projects (OpenClaw, NanoBot, Hermes Agent, ZeroClaw) are converging on SQLite-backed session/cron/state storage, and all are hitting `database is locked`, index corruption, and lease deadlock bugs. Expect a wave of "SQLite hardening" libraries or wrappers (WAL mode tuning, busy-timeout increases, checkpoint automation) to emerge as dependencies.

3. **Model capability detection is broken across providers.** Hard-coded heuristics for GPT-6 (NanoBot), DeepSeek-V4.1-Flash (Moltis), and llama.cpp embeddings (OpenClaw) are failing. The ecosystem needs a *declarative model-capability registry* — likely a shared schema for reasoning support, context windows, tool calling, and streaming behavior that providers can opt into.

4. **Security is maturing from afterthought to architecture.** NullClaw's A2A principal scoping, LobsterAI's SSRF patch, ZeroClaw's sandbox policy schema, and IronClaw's CA trust proposal all indicate that *authorization boundaries* and *principal isolation* are becoming first-class design constraints, not post-hoc fixes.

5. **Container/sandbox abstraction is emerging.** ZeroClaw's `SandboxPolicyConfig` (XL PR, since June), NanoClaw's Iron Proxy, and OpenClaw's paired-worker inference all point toward a future where agent execution is *containerized* and *policy-driven* — but no project has yet produced a canonical, portable sandbox spec that others can adopt.

6. **Voice and richer channels are the next frontier.** ZeroClaw's realtime voice-host channel (#7943, 4 comments), NullClaw's email IMAP IDLE, and CoPaw's message retraction requests suggest users are moving beyond text chat into multi-modal, persistent communication channels — and the infrastructure is not yet ready.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-09-28  
Source: `HKUDS/nanobot` GitHub activity

## 1. Today’s Overview
NanoBot saw elevated activity in the last 24 hours: 5 issues and 17 PRs were updated, with 11 PRs still open and 6 PRs closed/merged. No new releases were published, so today’s work is entirely in-flight fixes, refactors, and WebUI/channel polish. The dominant themes are GPT-6 provider compatibility, session/cron durability, and channel-specific message-handling bugs. Maintainer/contributor responsiveness looks strong: several fresh bugs already have linked fix PRs, including cron data loss ([#5932](https://github.com/HKUDS/nanobot/issues/5932) → [#5933](https://github.com/HKUDS/nanobot/pull/5933)), Codex GPT-6 discovery ([#5939](https://github.com/HKUDS/nanobot/issues/5939) → [#5940](https://github.com/HKUDS/nanobot/pull/5940)), and Copilot GPT-6 routing ([#5898](https://github.com/HKUDS/nanobot/issues/5898) → [#5935](https://github.com/HKUDS/nanobot/pull/5935)). However, high-severity unresolved items remain, especially the sudo-loop agent blocker ([#5924](https://github.com/HKUDS/nanobot/issues/5924)) and hidden Feishu checkpoint leakage ([#5903](https://github.com/HKUDS/nanobot/issues/5903)). Overall project health: high throughput and active triage, but no release today and multiple p0/p1 items still in flight.

## 2. Releases
None. No new versions, breaking changes, or migration notes to report.

## 3. Project Progress
Six PRs were closed/merged in the last 24 hours:

- [#5944](https://github.com/HKUDS/nanobot/pull/5944) — `feat(webui): polish the GitHub star invitation`  
  WebUI polish: orange-tabby illustration, warmer copy across ten languages, responsive layout, hover animation.
- [#5934](https://github.com/HKUDS/nanobot/pull/5934) — `fix(webui): unblock earlier-history pagination and show retry states`  
  Fixes pagination reachability and adds loading/retry feedback for earlier history.
- [#5936](https://github.com/HKUDS/nanobot/pull/5936) — `fix(weixin): silence polling request logs`  
  Suppresses routine WeChat polling HTTP logs that obscured gateway output.
- [#5937](https://github.com/HKUDS/nanobot/pull/5937) — `fix(providers): stop Responses streams at terminal events`  
  Stops SSE/SDK parsing at `response.completed` / `response.incomplete` and closes SDK streams early.
- [#5938](https://github.com/HKUDS/nanobot/pull/5938) — `fix(providers): preserve optional tool parameters in Responses requests`  
  Preserves explicit `strict` settings and prevents optional MCP filters from being forced into strict mode.
- [#5865](https://github.com/HKUDS/nanobot/pull/5865) — `fix: preserve primary context window with smaller fallbacks`  
  Keeps the configured 256K primary context budget when a smaller fallback is configured.

Open PRs still advancing major workstreams:

- [#5580](https://github.com/HKUDS/nanobot/pull/5580) — `fix(session): move persistence off event loop` — p1
- [#5943](https://github.com/HKUDS/nanobot/pull/5943) — `refactor(session): centralize state ownership in SQLite` — p1
- [#5942](https://github.com/HKUDS/nanobot/pull/5942) — `fix(webui): provide iOS PWA top-edge color surface`
- [#5941](https://github.com/HKUDS/nanobot/pull/5941) — `feat(webui): connect to existing remote nanobot instances (NAN-157)`
- [#5940](https://github.com/HKUDS/nanobot/pull/5940) — `fix(providers): expose GPT-6 Sol and Luna in Codex model discovery` — p2
- [#5864](https://github.com/HKUDS/nanobot/pull/5864) — `fix(discord): cancel delayed reaction tasks on runtime reset` — p2
- [#5780](https://github.com/HKUDS/nanobot/pull/5780) — `fix: stop sending context compaction notifications` — p2, conflict
- [#5935](https://github.com/HKUDS/nanobot/pull/5935) — `fix(copilot): route GPT-6 through Responses` — p2
- [#5933](https://github.com/HKUDS/nanobot/pull/5933) — `fix(cron): preserve pending actions until store save succeeds` — p0
- [#5931](https://github.com/HKUDS/nanobot/pull/5931) — `fix: 保留 Telegram 命令的换行参数和邮箱内容` — p2
- [#5257](https://github.com/HKUDS/nanobot/pull/5257) — `fix(agent): bound sustained-goal continuation when the turn goes idle` — p2

## 4. Community Hot Topics
Most-commented issues:

- [#5903](https://github.com/HKUDS/nanobot/issues/5903) — `[bug] Feishu: hidden session-checkpoint marker ("Continue the active task...") is delivered to the user after idle compaction` — 3 comments  
  Underlying need: prevent internal agent/system messages from leaking into user-facing channels. This touches channel boundaries, compaction behavior, and hidden-message persistence.
- [#5898](https://github.com/HKUDS/nanobot/issues/5898) — `[bug] gpt-6 model series through Github Copilot` — 1 comment  
  Underlying need: first-class GPT-6 support via GitHub Copilot, including provider routing and API compatibility.
- [#5924](https://github.com/HKUDS/nanobot/issues/5924) — `[bug] Agent gets stuck in sudo loop - becomes unusable` — 1 comment  
  Underlying need: better privilege authorization lifetime, loop breaking, and recovery when max iterations are reached.
- [#5939](https://github.com/HKUDS/nanobot/issues/5939) — `[bug] OpenAI Codex model discovery omits GPT-6 Sol and Luna with pinned client_version` — 0 comments  
  Underlying need: model catalog parity with the official Codex client.
- [#5932](https://github.com/HKUDS/nanobot/issues/5932) — `cron: pending actions are lost if the merged store cannot be saved` — 0 comments  
  Underlying need: durability and atomicity for scheduled actions.

PR comment/reaction counts were not provided in the dataset, but priority labels indicate the hottest engineering areas: session persistence ([#5580](https://github.com/HKUDS/nanobot/pull/5580), [#5943](https://github.com/HKUDS/nanobot/pull/5943)), cron durability ([#5933](https://github.com/HKUDS/nanobot/pull/5933)), and provider stream correctness ([#5937](https://github.com/HKUDS/nanobot/pull/5937), [#5938](https://github.com/HKUDS/nanobot/pull/5938)).

## 5. Bugs & Stability
Ranked by severity based on reported impact:

1. **Critical — [#5924](https://github.com/HKUDS/nanobot/issues/5924) Agent stuck in sudo loop, becomes unusable**  
   Sudo authorization expires after one turn, causing the agent to loop and then obsess over the failed command after max iterations. No direct fix PR in today’s list; [#5257](https://github.com/HKUDS/nanobot/pull/5257) may reduce sustained-goal continuation looping but does not directly address sudo auth.
2. **High — [#5932](https://github.com/HKUDS/nanobot/issues/5932) cron pending actions lost if merged store cannot be saved**  
   Data-loss/durability bug: `action.jsonl` is cleared before store save succeeds. Fix PR [#5933](https://github.com/HKUDS/nanobot/pull/5933) is open at p0.
3. **High — [#5903](https://github.com/HKUDS/nanobot/issues/5903) Feishu hidden session-checkpoint marker delivered to user**  
   Internal message leakage after idle compaction. Related notification-suppression PR [#5780](https://github.com/HKUDS/nanobot/pull/5780) is open but marked conflict; direct linkage is not confirmed.
4. **High — [#5898](https://github.com/HKUDS/nanobot/issues/5898) GPT-6 model series through GitHub Copilot fails**  
   Provider compatibility failure on v0.3.5. Fix PR [#5935](https://github.com/HKUDS/nanobot/pull/5935) routes GPT-6 through Responses API.
5. **Medium — [#5939](https://github.com/HKUDS/nanobot/issues/5939) Codex model discovery omits GPT-6 Sol and Luna**  
   Pinned `client_version=0.153.4` omits models available with `0.158.0`. Fix PR [#5940](https://github.com/HKUDS/nanobot/pull/5940) updates the catalog client version.

Closed provider-stability fixes today also addressed stream termination and optional tool parameter handling ([#5937](https://github.com/HKUDS/nanobot/pull/5937), [#5938](https://github.com/HKUDS/nanobot/pull/5938)).

## 6. Feature Requests & Roadmap Signals
- **GPT-6 provider support is the strongest roadmap signal.** Multiple issues/PRs target Copilot and Codex GPT-6 compatibility: [#5898](https://github.com/HKUDS/nanobot/issues/5898), [#5939](https://github.com/HKUDS/nanobot/issues/5939), [#5940](https://github.com/HKUDS/nanobot/pull/5940), [#5935](https://github.com/HKUDS/nanobot/pull/5935). A near-term patch/version likely includes updated model discovery and Responses API routing.
- **Session state and persistence reliability.** [#5580](https://github.com/HKUDS/nanobot/pull/5580), [#5943](https://github.com/HKUDS/nanobot/pull/5943), [#5937](https://github.com/HKUDS/nanobot/pull/5937), [#5938](https://github.com/HKUDS/nanobot/pull/5938), and [#5865](https://github.com/HKUDS/nanobot/pull/5865) point toward SQLite-backed state ownership, off-event-loop persistence, and safer provider streaming.
- **Cron durability.** [#5932](https://github.com/HKUDS/nanobot/issues/5932) and p0 fix [#5933](https://github.com/HKUDS/nanobot/pull/5933) suggest an imminent atomicity fix for scheduled actions.
- **WebUI remote and mobile usability.** [#5941](https://github.com/HKUDS/nanobot/pull/5941) remote nanobot connection, [#5942](https://github.com/HKUDS/nanobot/pull/5942) iOS PWA surface, [#5934](https://github.com/HKUDS/nanobot/pull/5934) pagination, and [#5944](https://github.com/HKUDS/nanobot/pull/5944) star invitation indicate continued WebUI investment.
- **Channel-specific UX/regression fixes.** [#5931](https://github.com/HKUDS/nanobot/pull/5931) Telegram command parsing, [#5780](https://github.com/HKUDS/nanobot/pull/5780) compaction notifications, [#5864](https://github.com/HKUDS/nanobot/pull/5864) Discord reaction cleanup, and [#5903](https://github.com/HKUDS/nanobot/issues/5903) Feishu leakage all point to a channel-quality patch release.

## 7. User Feedback Summary
Real user pain points visible today:

- **Internal/system messages leaking to users:** Feishu checkpoint marker delivered after idle compaction ([#5903](https://github.com/HKUDS/nanobot/issues/5903)); background compaction notifications described as “quite annoying” ([#5780](https://github.com/HKUDS/nanobot/pull/5780)).
- **Model/provider compatibility gaps:** GPT-6 via GitHub Copilot fails on v0.3.5 ([#5898](https://github.com/HKUDS/nanobot/issues/5898)); Codex picker omits GPT-6 Sol and Luna ([#5939](https://github.com/HKUDS/nanobot/issues/5939)).
- **Agent autonomy/authorization problems:** sudo only lasts one turn, causing an unusable loop ([#5924](https://github.com/HKUDS/nanobot/issues/5924)); sustained-goal continuation can repeat replies until iteration budget is exhausted ([#5257](https://github.com/HKUDS/nanobot/pull/5257)).
- **Data durability:** cron pending actions can be lost if store save fails ([#5932](https://github.com/HKUDS/nanobot/issues/5932)).
- **Channel noise and parsing:** WeChat polling logs ([#5936](https://github.com/HKUDS/nanobot/pull/5936)), Telegram newline/email argument corruption ([#5931](https://github.com/HKUDS/nanobot/pull/5931)), Discord delayed reaction tasks ([#5864](https://github.com/HKUDS/nanobot/pull/5864)).

Satisfaction/dissatisfaction: users are reporting precise, reproducible bugs and contributors are responding with targeted PRs, which suggests an engaged and technically active community. Dissatisfaction is concentrated on provider compatibility, agent loop behavior, and user-facing message leakage. Low reaction counts and comment volumes indicate a focused user base rather than a broad consumer audience.

## 8. Backlog Watch
Important items needing maintainer attention:

- [#5580](https://github.com/HKUDS/nanobot/pull/5580) — `[OPEN since 2026-08-28, p1] fix(session): move persistence off event loop`  
  Long-running p1; updated 2026-09-27. Needs review/merge decision.
- [#5257](https://github.com/HKUDS/nanobot/pull/5257) — `[OPEN since 2026-08-05, p2] fix(agent): bound sustained-goal continuation when the turn goes idle`  
  Open for over seven weeks; updated 2026-09-27. Related to agent looping complaints.
- [#5780](https://github.com/HKUDS/nanobot/pull/5780) — `[OPEN since 2026-09-15, p2, conflict] fix: stop sending context compaction notifications`  
  Conflict label suggests rebase or design decision needed; directly relevant to [#5903](https://github.com/HKUDS/nanobot/issues/5903).
- [#5864](https://github.com/HKUDS/nanobot/pull/5864) — `[OPEN since 2026-09-22, p2] fix(discord): cancel delayed reaction tasks on runtime reset`  
  Fixes #5806; open for six days.
- [#5903](https://github.com/HKUDS/nanobot/issues/5903) — `[OPEN, 3 comments] Feishu hidden checkpoint marker delivered to user`  
  Most-discussed issue today; no directly linked fix PR. Needs maintainer confirmation on channel/compaction behavior.
- [#5924](https://github.com/HKUDS/nanobot/issues/5924) — `[OPEN, 1 comment] Agent stuck in sudo loop`  
  High-severity usability blocker with no direct fix PR in today’s data.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>



# Hermes Agent Project Digest — 2026-09-28

## 1. Today's Overview
Hermes Agent is experiencing high community engagement and active maintenance, with 50 issues and 50 pull requests (PRs) updated in the last 24 hours. While no PRs were merged or closed today, the repository is flooded with critical bug fixes and feature developments targeting package manager stability, Windows installation issues, and cron/kanban worker robustness. Overall project health is stable but in a transitional phase, as maintainers work to resolve architectural regressions introduced by recent unified package manager (PM) updates before pushing major feature milestones.

## 2. Releases
*   **No new releases were published today.**

## 3. Project Progress
Development efforts are heavily focused on stabilizing the codebase. While zero PRs were merged in the last 24 hours, several critical fixes are actively awaiting review. On the issue side, two bugs were closed:
*   **#87040 (Closed):** Fixed cold-boot restart issues on Windows by adding a queue-preserving external restart path for Telegram, preventing pending update drops.
*   **#8714 (Closed):** Added a feature allowing cron pre-scripts to use a configurable Python interpreter rather than strictly forcing the Hermes-managed environment.

Active PRs advancing key features include the **Delegation inject policy** (#104434) and a major 14-part series on **Desktop managed SSH fleet journeys** (#120719), both of which are currently open and undergoing community review.

## 4. Community Hot Topics
The community is actively discussing the following topics, ranked by engagement:

*   **Cross-Gateway Bot Collaboration** ([#97681](https://github.com/NousResearch/hermes-agent/issues/97681) - 30 comments, 3 👍): The most requested feature, allowing bots to collaborate across different gateways. It is currently deferred, waiting on the unified gateway runtime (#106742) and the settlement of Desktop continuity features.
*   **Cron Worker Failures on Self-Managed Installs** ([#122222](https://github.com/NousResearch/hermes-agent/issues/122222) - 20 comments, 2 👍): Users report that scheduled jobs fail immediately because the external worker cannot import core dependencies (like `ruamel`) on self-managed installs. This represents a critical blocker for self-hosters relying on scheduled automation.
*   **Kanban Dispatcher & Spawn Issues** ([#122299](https://github.com/NousResearch/hermes-agent/issues/122299) - 12 comments, 5 👍): High discussion around the kanban

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



# PicoClaw Project Digest — 2026-09-28

---

## 1. Today's Overview

PicoClaw shows light-to-moderate activity on 2026-09-28, with three issues and two pull requests updated in the trailing 24-hour window. No new releases were cut today. The repository is cycling through a mix of stale items (one issue closed, two PRs and one issue still open but flagged stale) alongside a freshly filed feature request and its corresponding PR. Overall health is stable; the cadence suggests a maintainer team managing backlog rather than reacting to hotfires, though one unresolved crash bug merits attention.

---

## 2. Releases

*No new releases today.* There are no latest releases to report.

---

## 3. Project Progress

**Merged/closed PRs today: 0.** No pull requests were merged or closed during this window.

**Closed items today: 1 issue.**
- **#3287** — "[Feature] Better support long messages in IRC" was closed as stale after 14 comments and ~2 months of discussion. The issue proposed treating IRCv3-splitted messages (>512 bytes) as a single cohesive unit. No linked PR was merged, indicating the feature was either deferred or deemed out of scope for now.

No features advanced to production today; the two open PRs (#3353, #3396) remain under review.

---

## 4. Community Hot Topics

### 🔥 #3287 — IRC Long Message Handling (14 comments, 0 👍)
**[CLOSED] [stale]** — The most-discussed item in this window.
- **Link:** [sipeed/picoclaw#3287](https://github.com/sipeed/picoclaw/issues/3287)
- **Underlying need:** Users running PicoClaw over IRC (which splits messages at 512 bytes) want the agent to reconstruct fragmented messages into a single coherent input. Currently, newlines in long messages are interpreted as separate messages, causing the agent to lose context or respond to fragments.
- **Status:** Closed as stale without a merged PR. This signals either the maintainers consider IRC a low-priority transport or the fix was deemed too channel-specific for core inclusion.

### 🔥 #3395 / PR #3396 — OneBot Auto-Ack Reactions (0 comments, 0 👍)
- **Issue:** [sipeed/picoclaw#3395](https://github.com/sipeed/picoclaw/issues/3395)
- **PR:** [sipeed/picoclaw#3396](https://github.com/sipeed/picoclaw/pull/3396)
- **Underlying need:** Users on the OneBot channel (QQ via NapCat) reported that *every* group message triggers an automatic emoji reaction (`set_msg_emoji_like`, emoji 289), hardcoded in `OneBotChannel.ReactToMessage`. This is noisy and unwanted in many contexts. The PR adds an opt-in `reaction_enabled` setting (default `false`) to gate this behavior.
- **Status:** Issue and matching PR filed the same day (2026-09-27). This is a clean, well-scoped feature request with an immediate implementation — a strong candidate for the next patch if the PR passes review.

---

## 5. Bugs & Stability

### 🔴 HIGH — #3382: DingTalk Gateway Panic on Stream SDK Reconnect
- **Link:** [sipeed/picoclaw#3382](https://github.com/sipeed/picoclaw/issues/3382)
- **Severity:** High — the issue describes a **panic** ("send on closed channel" at `client.go:161`) reproducible on v0.3.1 with `dingtalk-stream-sdk-go` v0.9.1.
- **Details:** This is a regression of issue #973, meaning the fix previously applied did not fully resolve the root cause. The panic occurs during Stream SDK reconnection events, which would crash the PicoClaw process and drop active sessions.
- **Fix PR exists?** No. The issue is flagged **stale** with only 1 comment, suggesting limited maintainer engagement or a need for a more detailed reproduction from the reporter.
- **Recommendation:** Users on DingTalk Stream Mode should monitor this closely; if the panic is reproducible, it's a blocking defect for production use on that channel.

### 🟡 LOW — #3353: Tool Feedback Animation Lifetime
- **Link:** [sipeed/picoclaw#3353](https://github.com/sipeed/picoclaw/pull/3353)
- **Not a crash, but a resource-leak risk.** The PR bounds tool feedback animations to 5 minutes (matching Telegram's typing feedback cap) and stops immediately on first edit error. Flagged stale but still open; if merged, it prevents indefinite message-edit loops on channels.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood of Next Version |
|---|---|---|
| **OneBot `reaction_enabled` toggle** | Issue #3353 + PR #3396 | **High** — PR is ready, issue/PR pair filed same day, directly addresses a user pain point with a minimal, backward-compatible change (default `false`). |
| **IRC long-message reconstruction** | Issue #3287 | **Low** — closed as stale, no PR. Likely deferred or requires a channel-specific abstraction that maintainers may not prioritize. |
| **Tool feedback animation bounds** | PR #3353 | **Medium** — a defensive fix; could land as part of a general channels hardening release even without a dedicated feature push. |

---

## 7. User Feedback Summary

**Pain points observed today:**

1. **Unwanted automated behavior** — OneBot users are frustrated by an unconditional emoji reaction on every message. The reaction is invisible to the agent but visible to human users on QQ, creating a "bot is typing/acknowledging" annoyance. The fix (opt-in toggle) is straightforward and has no breaking changes.

2. **Crash on DingTalk reconnect** — Users on v0.3.1 are hitting a panic during Stream SDK reconnection. This is a hard failure that takes the agent offline. The reporter linked it to a prior unresolved issue (#973), suggesting the maintainers may be aware but haven't yet shipped a fix.

3. **IRC context loss** — Long messages over IRC are being treated as multiple separate messages, degrading the agent's ability to understand complete inputs. This is a niche but real use case for IRC-heavy deployments.

**Satisfaction signals:** None strongly positive today. The stale closure of #3287 may frustrate IRC users, and the unresolved DingTalk panic is a reliability concern for that channel's user base.

---

## 8. Backlog Watch

| Item | Type | Age | Why It Needs Attention |
|---|---|---|---|
| **#3382** — DingTalk panic | Issue | 8 days open, stale | Blocking crash for DingTalk Stream users; linked to prior unresolved issue #973. Needs either a fix PR or a definitive "won't fix" with workaround guidance. |
| **#3353** — Tool feedback animation bound | PR | ~28 days open, stale | Low-risk defensive fix; sitting in review limbo. If maintainers are bandwidth-constrained, this could be auto-merged or closed in favor of a similar guard in a future channels refactor. |
| **#3287** — IRC long messages | Issue | ~2 months, closed stale | Was the most-active discussion (14 comments) but ended without resolution. If IRC support is a roadmap item, this needs a maintainer to either scope a channel-specific adapter or explicitly de-prioritize IRC. |

---

*Digest generated from GitHub API data for `sipeed/picoclaw` as of 2026-09-28. All items updated within the trailing 24-hour window unless otherwise noted.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-09-28

> Note: Links below use the PR URLs/paths from the supplied dataset. Comment counts were reported as `undefined` and all visible reactions were `0`, so engagement ranking is limited.

## 1. Today's Overview
NanoClaw shows **high pull-request throughput but no issue or release activity** in the last 24 hours: 40 PRs were updated, with 29 still open and 11 merged/closed. There were **0 issues updated** and **0 new releases**, so the project appears to be in a PR-heavy maintenance, hardening, and bug-fix cycle rather than a release or community-discussion phase. The visible PR queue is dominated by setup, update, provider, container-lifecycle, and skill-application fixes, many authored by `glifocat` and `barnuri`. Activity is therefore strong from a code-review/merge perspective, but weak in visible community engagement and release cadence.

## 2. Releases
**None.** No new releases, breaking changes, or migration notes were published in this window.

## 3. Project Progress
- **11 PRs were merged/closed today**, but the dataset does not enumerate which ones.
- The visible open PR set indicates active work in several reliability areas:
  - **Update/install resilience:** [#3913](https://github.com/nanocoai/nanoclaw/pull/3913), [#3910](https://github.com/nanocoai/nanoclaw/pull/3910), [#3887](https://github.com/nanocoai/nanoclaw/pull/3887), [#3948](https://github.com/nanocoai/nanoclaw/pull/3948)
  - **Provider and Iron Proxy support:** [#3950](https://github.com/nanocoai/nanoclaw/pull/3950), [#3919](https://github.com/nanocoai/nanoclaw/pull/3919), [#3930](https://github.com/nanocoai/nanoclaw/pull/3930), [#3925](https://github.com/nanocoai/nanoclaw/pull/3925)
  - **Container/session lifecycle:** [#3878](https://github.com/nanocoai/nanoclaw/pull/3878), [#3947](https://github.com/nanocoai/nanoclaw/pull/3947)
  - **Skill/agent-runner correctness:** [#3908](https://github.com/nanocoai/nanoclaw/pull/3908), [#3918](https://github.com/nanocoai/nanoclaw/pull/3918), [#3946](https://github.com/nanocoai/nanoclaw/pull/3946)

## 4. Community Hot Topics
**No measurable hot topics by comments/reactions.** All visible PRs show `Comments: undefined` and `👍: 0`, and there are no issues in the dataset. By recency and label signal, the most prominent updated PRs are:

- [#3950 — feat(iron): trust an operator's name-constrained local CA for private model hosts](https://github.com/nanocoai/nanoclaw/pull/3950)
- [#3949 — fix(add-mattermost): derive callback secret in verify-runtime when unset](https://github.com/nanocoai/nanoclaw/pull/3949)
- [#3948 — fix(update): keep the Iron proxy through cutover and residue reaping](https://github.com/nanocoai/nanoclaw/pull/3948)
- [#3947 — fix(host): stop containers whose session or agent group was deleted](https://github.com/nanocoai/nanoclaw/pull/3947)
- [#3946 — fix(skill-apply): show a failed step's own error instead of a generic bounce](https://github.com/nanocoai/nanoclaw/pull/3946)
- [#3932 — feat(skills): add /add-lean-tasks for minimal-context scheduled task runs](https://github.com/nanocoai/nanoclaw/pull/3932)

**Underlying needs:** reliable updates and installs, support for private/local model endpoints, better operator trust controls, clearer skill failure diagnostics, and cheaper scheduled task execution on small/local models.

## 5. Bugs & Stability
Ranked by likely severity based on PR summaries. All listed items have an open fix/hardening PR unless noted.

| Severity | PR | Issue / Risk | Fix status |
|---|---|---|---|
| High | [#3948](https://github.com/nanocoai/nanoclaw/pull/3948) | After `/update-nanoclaw`, every agent spawn fails because the Iron Proxy is stopped during cutover. | Fix PR open |
| High | [#3913](https://github.com/nanocoai/nanoclaw/pull/3913) | `/update-nanoclaw` fails to load its controller after gateway extraction; update stops before changing anything. | Fix PR open |
| High | [#3908](https://github.com/nanocoai/nanoclaw/pull/3908) | Failed agent-to-agent turns can answer a failure notice with another failure notice forever. | Fix PR open |
| Medium | [#3947](https://github.com/nanocoai/nanoclaw/pull/3947) | Containers whose session or agent group was deleted can keep running until host restart. | Fix PR open |
| Medium | [#3949](https://github.com/nanocoai/nanoclaw/pull/3949) | Mattermost runtime verification fails when `MATTERMOST_CALLBACK_SECRET` is unset. | Fix PR open |
| Medium | [#3878](https://github.com/nanocoai/nanoclaw/pull/3878) | Setup cleanup leaves the temporary ping agent’s container running after deleting its folder. | Fix PR open |
| Medium | [#3919](https://github.com/nanocoai/nanoclaw/pull/3919) | OpenCode setup accepts local model URLs Iron Proxy cannot serve, causing failed turns. | Fix PR open |
| Medium | [#3910](https://github.com/nanocoai/nanoclaw/pull/3910) | `/update-nanoclaw` falsely reports no installed gateway when pnpm prints a workspace warning. | Fix PR open |
| Medium | [#3883](https://github.com/nanocoai/nanoclaw/pull/3883) | Uninstall leaves an orphaned Iron Control database, so reinstall is not clean. | Fix PR open |
| Medium | [#3930](https://github.com/nanocoai/nanoclaw/pull/3930) | OpenCode config, runtime key, and server env can disagree. | Fix PR open |
| Medium | [#3887](https://github.com/nanocoai/nanoclaw/pull/3887) | Readiness probe timing/flake and host restart reports generic timeout instead of reason. | Hardening PR open |
| Medium | [#3918](https://github.com/nanocoai/nanoclaw/pull/3918) | Result-door providers may re-send a reply already sent via `send_message`. | Fix PR open |
| Low | [#3946](https://github.com/nanocoai/nanoclaw/pull/3946) | Failed skill step shows generic bounce instead of its own error. | Fix PR open |
| Low | [#3905](https://github.com/nanocoai/nanoclaw/pull/3905) | Setup does not clearly log whether OpenCode endpoint/ping was verified. | Fix PR open |
| Low | [#3945](https://github.com/nanocoai/nanoclaw/pull/3945) | Delivery-poll drain test times out on contended CI disk. | Test fix PR open |
| Hardening | [#3920](https://github.com/nanocoai/nanoclaw/pull/3920) | Setup failure-assist agents run with allow-all permissions on live installs. | Hardening PR open |

## 6. Feature Requests & Roadmap Signals
- **Private/local model host support:** [#3950](https://github.com/nanocoai/nanoclaw/pull/3950) adds operator-trusted CA support for private names like `https://models.home.arpa/v1`.
- **Lean scheduled tasks:** [#3932](https://github.com/nanocoai/nanoclaw/pull/3932) introduces `/add-lean-tasks` to run scheduled tasks cheaply on small/local models.
- **Provider abstraction:** [#3931](https://github.com/nanocoai/nanoclaw/pull/3931) adds a `minimalContext` provider option; [#3925](https://github.com/nanocoai/nanoclaw/pull/3925) adds a provider-wrapper seam with per-query model and retryable failures.
- **Safer setup:** [#3920](https://github.com/nanocoai/nanoclaw/pull/3920) restricts failure-assist agents on live installs.

**Prediction:** the next version is likely to include update/install reliability fixes, Iron Proxy/local-CA support, lean scheduled task execution, and provider-level extensibility/fallback. A patch release focused on update and container lifecycle bugs is also plausible.

## 7. User Feedback Summary
Visible pain points from PR summaries:
- Updates and reinstalls can break agent spawning, gateway detection, or controller loading.
- Setup leaves orphaned containers and lacks clear logging/verification.
- OpenCode + local/private model endpoints are fragile, especially behind Iron Proxy.
- Mattermost runtime verification can fail due to missing callback-secret handling.
- Skill failures are too generic, slowing debugging.
- CI flakiness affects delivery-poll and readiness tests.
- Users want cheaper, minimal-context scheduled runs on small/local models.

Satisfaction/dissatisfaction cannot be measured directly: there are no issues or comments in the dataset. The pattern suggests active maintainer-led hardening rather than broad user discussion.

## 8. Backlog Watch
No long-dormant issues are visible because there are **0 issues** in the dataset. Among PRs, the oldest visible items still open and needing maintainer attention are:

- [#3878](https://github.com/nanocoai/nanoclaw/pull/3878) — created 2026-09-23; setup ping-agent container cleanup.
- [#3883](https://github.com/nanocoai/nanoclaw/pull/3883) — created 2026-09-24; orphaned Iron Control DB on reinstall.
- [#3887](https://github.com/nanocoai/nanoclaw/pull/3887) — created 2026-09-24; readiness probe and CI timing.

Highest-priority review candidates: [#3948](https://github.com/nanocoai/nanoclaw/pull/3948), [#3913](https://github.com/nanocoai/nanoclaw/pull/3913), and [#3908](https://github.com/nanocoai/nanoclaw/pull/3908), because they affect update reliability and agent-runner stability.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>



Here is the structured project digest for the **NullClaw** repository as of **2026-09-28**.

---

### 1. Today's Overview
NullClaw is experiencing high development activity, with 18 issues and 9 pull requests updated in the last 24 hours. The maintenance team and contributors are actively triaging and closing legacy issues (mostly from March–July 2026) alongside merging major feature sets. Significant progress was made on security hardening—specifically addressing a cross-caller authorization vulnerability in the A2A module—and advancing tool execution workflows. While no new binary releases were published today, the codebase is undergoing rapid integration of key enterprise channels and provider gateways.

---

### 2. Releases
*No new releases were published today.*

---

### 3. Project Progress
Eight pull requests were merged or closed today, representing substantial movement across security, infrastructure, and features:

*   **Security & Execution Flow Fixes:**
    *   **`fix(a2a): scope tasks and context sessions by bearer principal`** ([PR #1012](https://github.com/nullclaw/nullclaw/pull/1012)): Addressed a critical security flaw where bare task IDs and caller-supplied `contextId` allowed cross-caller data access. The bearer principal is now properly scoped. *(Open PR, closes #974)*
    *   **`fix(exec): pause for /approve on medium/high-risk commands instead of failing`** ([PR #1009](https://github.com/nullclaw/nullclaw/pull/1009)): Resolved a bug where supervised execution failed outright instead of triggering an interactive approval prompt. *(Closed, closes #900)*
    *   **`fix(teams): accept lowercase serviceurl JWT claim and raise JWKS fetch cap`** ([PR #958](https://github.com/nullclaw/nullclaw/pull/958)): Fixed inbound MS Teams message validation failures (HTTP 403) caused by camelCase JWT claim mismatches. *(Closed)*
    *   **`fix(matrix): persist next_batch across restart + test env isolation`** ([PR #968](https://github.com/nullclaw/nullclaw/pull/968)): Prevented initial sync storms on Matrix channel restarts by persisting the `/sync` cursor. *(Closed)*
*   **Core Feature Merges:**
    *   **`feat(agent): structured approval_request / approval_response flow`** ([PR #969](https://github.com/nullclaw/nullclaw/pull/969)): Implemented a standardized two-turn gating mechanism for risky tool executions, emitting events via SSE channels. *(Closed)*
    *   **`feat(providers): add Eden AI as an OpenAI-compatible gateway`** ([PR #990](https://github.com/nullclaw/nullclaw/pull/990)): Expanded provider routing options to support multi-vendor routing through Eden AI. *(Closed)*
    *   **`feat: adaptive intelligence pipeline + email/WhatsApp Web channels`** ([PR #527](https://github.com/nullclaw/nullclaw/pull/527)): Introduced a post-turn quality loop, skill router, and new channel adapters. *(Closed)*
    *   **`feat(email): full bidirectional IMAP polling with IDLE and network resilience`** ([PR #667](https://github.com/nullclaw/nullclaw/pull/667)): Transitioned the email channel from send-only to bidirectional polling with persistent IMAP IDLE support

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-09-28

## 1. Today’s Overview
IronClaw showed **low-to-moderate activity** over the last 24 hours: 7 items were updated in total — 1 issue and 6 pull requests — with **no new releases**. The PR activity was almost entirely automated maintenance: 5 Dependabot dependency PRs and 1 CI bot PR, with **no human-authored feature PRs** updated. One dependency PR, [#8104](https://github.com/nearai/ironclaw/pull/8104), was closed, while 5 PRs remain open. The only human-authored item is a new feature proposal, [#8113](https://github.com/nearai/ironclaw/issues/8113), suggesting ongoing interest in smarter tool selection for agents. Overall project health appears **stable but maintenance-heavy**, with a growing backlog of open dependency PRs needing review.

## 2. Releases
No new releases in the last 24 hours. Latest releases: **None**.

## 3. Project Progress
- **Closed PR:** [#8104](https://github.com/nearai/ironclaw/pull/8104) — `chore(deps): bump the everything-else group across 1 directory with 29 updates`. It was closed on 2026-09-27. A newer, larger dependency bump, [#8114](https://github.com/nearai/ironclaw/pull/8114), was opened the same day with 31 updates, suggesting #8104 may have been superseded.
- **Open dependency maintenance PRs advancing if merged:**
  - [#8114](https://github.com/nearai/ironclaw/pull/8114) — 31 Rust dependency updates, size XL, risk low.
  - [#8103](https://github.com/nearai/ironclaw/pull/8103) — 8 GitHub Actions updates.
  - [#7834](https://github.com/nearai/ironclaw/pull/7834) — 4 WASM-related updates.
  - [#8078](https://github.com/nearai/ironclaw/pull/8078) — 2 tokio-ecosystem updates.
- **Open infrastructure PR:** [#7988](https://github.com/nearai/ironclaw/pull/7988) — refresh of the committed codebase knowledge graph.
- **Feature progress:** No feature implementation PRs were merged or closed today.

## 4. Community Hot Topics
No item had comments or reactions reported: issue [#8113](https://github.com/nearai/ironclaw/issues/8113) has 0 comments and 0 👍; PR comment counts are undefined in the provided data. Therefore, “hot” topics are ranked by recency and scope:

- [#8113](https://github.com/nearai/ironclaw/issues/8113) — **Proposal: opt-in turn-0 tool selection (BM25F + embeddings)**.  
  Underlying need: reduce tool-advertisement overhead at conversation start by predicting needed tools from the first user message, using hybrid keyword + embedding ranking, while keeping four discovery bridges (`tool_search`, `tool_describe`, `tool_call`, `result_read`) available as fallback.

- [#8114](https://github.com/nearai/ironclaw/pull/8114) — **Dependabot: bump everything-else group with 31 updates**.  
  Underlying need: keep Rust dependencies current, reduce security/compatibility drift, and avoid stale dependency branches.

- [#8104](https://github.com/nearai/ironclaw/pull/8104) — **Closed Dependabot PR with 29 updates**.  
  Underlying need: routine dependency hygiene; likely replaced by #8114.

Other updated PRs ([#8103](https://github.com/nearai/ironclaw/pull/8103), [#7834](https://github.com/nearai/ironclaw/pull/7834), [#8078](https://github.com/nearai/ironclaw/pull/8078), [#7988](https://github.com/nearai/ironclaw/pull/7988)) reflect ongoing CI, WASM, async-runtime, and codebase-memory maintenance.

## 5. Bugs & Stability
- **No bugs, crashes, or regressions were reported today.**
- Severity ranking: **N/A** — no defect reports in the provided data.
- **Fix PRs:** None specifically linked to bug fixes today.
- Dependency and infrastructure PRs may improve stability indirectly, but no explicit stability issue is documented.

## 6. Feature Requests & Roadmap Signals
- The only feature request today is [#8113](https://github.com/nearai/ironclaw/issues/8113): opt-in turn-0 tool selection using **BM25F + embeddings**.
- **Roadmap prediction:** If accepted, this is likely to land as an **opt-in or experimental capability** rather than a default behavior, because tool misprediction could degrade agent reliability. It may appear in a future minor release as a configurable turn-0 tool-selection mode.
- Other signals:
  - [#7988](https://github.com/nearai/ironclaw/pull/7988) suggests continued investment in codebase knowledge-graph memory for agents.
  - Repeated dependency PRs indicate active Rust, WASM, Tokio, and GitHub Actions modernization.

## 7. User Feedback Summary
- The only direct user feedback is [#8113](https://github.com/nearai/ironclaw/issues/8113), authored by **CjS77**.
- **Pain point:** At conversation start, tool advertisement may be broad or inefficient. The proposal seeks hybrid BM25F + embedding ranking to advertise only predicted tools, plus discovery bridges as fallback.
- **Use case:** Personal AI/agent tool discovery at turn 0, improving context efficiency and tool-selection accuracy.
- **Satisfaction/dissatisfaction:** No explicit satisfaction or dissatisfaction signals in the provided data. The issue is constructive and proposal-oriented.

## 8. Backlog Watch
Long-open or important PRs needing maintainer attention:

- [#7834](https://github.com/nearai/ironclaw/pull/7834) — opened 2026-08-23, updated 2026-09-27. **Oldest open PR**: WASM group with 4 updates.
- [#7988](https://github.com/nearai/ironclaw/pull/7988) — opened 2026-08-29, updated 2026-09-27. Codebase knowledge-graph refresh.
- [#8078](https://github.com/nearai/ironclaw/pull/8078) — opened 2026-09-06, updated 2026-09-27. Tokio-ecosystem updates.
- [#8103](https://github.com/nearai/ironclaw/pull/8103) — opened 2026-09-20, updated 2026-09-27. GitHub Actions group updates.
- [#8114](https://github.com/nearai/ironclaw/pull/8114) — opened 2026-09-27, updated 2026-09-27. New dependency bump; may supersede [#8104](https://github.com/nearai/ironclaw/pull/8104).
- [#8113](https://github.com/nearai/ironclaw/issues/8113) — new issue with 0 comments; needs maintainer response if the proposal is to progress.

**Risk note:** The oldest dependency PRs (#7834, #7988) have been open for roughly 30–36 days. If left unreviewed, they may accumulate conflicts or delay security/compatibility updates.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



Based on the GitHub activity for **LobsterAI** (`netease-youdao/LobsterAI`) up to September 27, 2026, here is the structured project digest.

---

### 1. Today's Overview
Over the last 24 hours, LobsterAI has demonstrated high development velocity, characterized by substantial progress on critical security patches, stability fixes, and feature rollouts. A total of 8 pull requests were closed/merged, including a major word document editing feature and a critical security fix addressing SSRF (Server-Side Request Forgery) and local file read vulnerabilities. While no new releases were published today, the project health is positively impacted by the resolution of long-standing stability bugs and developer tooling improvements, although some community-submitted features and security issues remain stale.

### 2. Releases
*   **New Releases:** None. No new versions were released in the last 24 hours.

### 3. Project Progress
The development team made significant strides by merging and closing 8 pull requests today:
*   **Word Document Editing Feature:** PR #2770 was merged, introducing robust word document editing capabilities across multiple areas including the renderer, build system, documentation, main process, OpenClaw, skills, and artifacts.
*   **Critical Security Hardening:** PR #1042 successfully closed the P0 security vulnerability Issue #1041. The patch implements strict URL validations for `api:fetch` and `api:stream` IPC handlers to prevent SSRF attacks (e.g., blocking local network and cloud metadata requests) and restricts `dialog:readFileAsDataUrl` to prevent arbitrary local file reads.
*   **Memory Leak Fix:** PR #1038 fixed a critical resource leak in the proxy stream handlers (`handleResponsesStreamResponse` and `handleChatCompletionsStreamResponse`). The `ReadableStream reader` is now correctly released on exceptions like network timeouts, interruptions, or upstream errors.
*   **Developer Tooling Fix:** PR #2769 resolved a Vite watch configuration issue where overly broad exclusion patterns were preventing hot-reloads for artifact-related renderer components during development.
*   **UX & Installer Improvements:** 
    *   PR #1045 added an unsaved changes warning prompt when switching agents in the settings panel to prevent accidental data loss.
    *   PR #1044 normalized Windows root drive installer paths (e.g., selecting `D:\`) to ensure correct directory appending during NSIS installation.
    *   PR #979 fixed visual spacing issues in the agent skill list options.

### 4. Community Hot Topics
*   **Deep Link Security Vulnerabilities (Issue #977):** This issue has sparked community concern regarding the lack of proper URL source validation in the `handleDeepLink` function. Malicious actors could theoretically construct spoofed callback links to interfere with authentication flows. It has 1 comment and is currently open and stale.
*   **Model Configuration & Context Window Limits (Issue #1046):** Users raised questions regarding why the context window is hardcoded to 200K instead of utilizing the full 1M token limit supported by models like Qwen3.5-Plus. There is a clear community demand for advanced parameter customization. 
*   **Session Folders Feature (PR #978):** A highly requested feature allowing users to organize chat sessions into custom folders (persisted in SQLite) is generating interest, though the pull request remains open and stale.

### 5. Bugs & Stability
*   **High Severity Security Bug (Open):** 
    *   **Issue #977 (Missing URL Security Checks in Deep Links):** Potential authentication hijacking and sensitive data leakage via spoofed deep links. *No fix PR is currently linked, representing a critical backlog item.*
*   **Medium Severity Stability / UX Bugs (Open/Stale):**
    *   **Issue #976 (Double Timeout Prompts Offline):** Poor user experience and redundant timeout warnings when the network drops during a query. 
    *   **Issue #1047 (Cleared Skills Persist):** State synchronization bug where cleared agent skills unexpectedly survive agent switching cycles.
*   **Resolved Stability Issues (Closed Today):**
    *   **Issue #1041 / PR #1042:** Critical SSRF and arbitrary file read vulnerabilities (P0 severity). Now patched.
    *   **PR #1038:** ReadableStream reader memory leak during stream interruptions. Fixed.

### 6. Feature Requests & Roadmap Signals
*   **Document Editing Expansion:** The successful merge of PR #2770 (Word document editing) signals a strong roadmap direction toward deep document integration and rich artifact rendering.
*   **Session Management UI Overhaul:** The ongoing development of PR #978 (Chat folders) suggests that session organization and folder-based grouping are key upcoming features for user productivity.
*   **Advanced Model Configuration:** The closed Issue #1046 indicates that users are pushing for advanced configuration UI elements (like manual context window tuning) to match backend model capabilities.

### 7. User Feedback Summary
*   **Frustration over Network Edge Cases:** Users report confusing behavior under degraded network conditions, specifically double timeout prompts (Issue #976).
*   **Data Loss Anxiety:** Users expressed frustration over lost configuration changes when switching agents, highlighting the need for the safety prompts added in PR #1045.
*   **Desire for Transparency and Customization:** Users want clearer documentation and configuration options regarding system-imposed model limits, such as the 200K context window ceiling (Issue #1046).
*   **Active Community Security Awareness:** The detailed security reports submitted by users (e.g., MaoQianTu, anPetrichor) highlight a technically mature user base actively helping to harden the application.

### 8. Backlog Watch
*   **Issue #977 (Deep Link URL Security Check):** *High priority.* A critical security vulnerability with no associated fix PR. It is currently stale and requires immediate maintainer triage to prevent potential authentication bypass.
*   **Issue #976 (Offline Double Timeout UX):** *Medium priority.* Stale and open; needs a UX redesign for network failure states.
*   **PR #978 (Feature/add chat folder):** *Medium priority.* A large feature implementation that has been open and stale for months; requires maintainer review to determine compatibility with the latest codebase updates.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-09-28

## 1. Today's Overview
Moltis showed low-to-moderate maintenance activity on 2026-09-28: 1 open issue and 2 open PRs were updated in the last 24 hours, with 0 merged/closed PRs and 0 new releases. The dominant theme is DeepSeek model-capability detection: issue [#1286](https://github.com/moltis-org/moltis/issues/1286) reports that DeepSeek-V4.1-Flash (`deepseek-flash`) is not recognized as a reasoning model, and PR [#1287](https://github.com/moltis-org/moltis/pull/1287) proposes a targeted fix. A separate open PR [#1280](https://github.com/moltis-org/moltis/pull/1280) addresses preset tool preservation for empty `active_tools`, but it has been open since 2026-09-21 and remains unmerged. No code was integrated today, so project health appears stable but integration throughput is currently limited; maintainer review of the two open PRs will be the key near-term signal.

## 2. Releases
No new releases during the reporting window. There are no release notes, breaking changes, or migration notes to report.

## 3. Project Progress
No PRs were merged or closed today. Two open PRs were updated:
- [#1280](https://github.com/moltis-org/moltis/pull/1280) `fix(tools): preserve preset tools for empty active_tools` — opened 2026-09-21, updated 2026-09-27. It references issue [#1277](https://github.com/moltis-org/moltis/issues/1277) and proposes treating an explicitly empty `active_tools` array as “no per-turn override,” preserving preset tool controls.
- [#1287](https://github.com/moltis-org/moltis/pull/1287) `fix(providers): recognise deepseek-flash as a DeepSeek thinking model` — opened and updated 2026-09-27. It targets the same underlying problem as issue [#1286](https://github.com/moltis-org/moltis/issues/1286): two hard-coded DeepSeek heuristics only recognize legacy `deepseek-v4*` names, causing reasoning support to be disabled for the current `deepseek-flash` model ID.

Net progress today: no features or fixes landed; both fixes remain pending review/merge.

## 4. Community Hot Topics
No issue or PR in the provided data has measurable engagement: issue #1286 has 0 comments and 0 reactions, and PR comment counts are listed as undefined with 0 reactions. The most notable topics by recency and relevance are:
- [#1286](https://github.com/moltis-org/moltis/issues/1286) — Bug report that the Reasoning Effort toggle is missing for DeepSeek-V4.1-Flash.
- [#1287](https://github.com/moltis-org/moltis/pull/1287) — Direct fix PR for #1286, submitted by the same author, `gyje`.
- [#1280](https://github.com/moltis-org/moltis/pull/1280) — Older open PR about preserving preset tools when `active_tools` is empty.

Underlying needs: users want model capability detection to work for current provider model IDs, not only legacy naming patterns, and they expect the web UI to expose reasoning controls when the underlying model supports them. PR #1280 points to a related need for predictable tool-preset behavior when per-turn tool overrides are empty.

## 5. Bugs & Stability
Ranked by severity based on available data:
1. **Medium — [#1286](https://github.com/moltis-org/moltis/issues/1286):** DeepSeek-V4.1-Flash (`deepseek-flash`) is not detected as a reasoning model, so the Reasoning Effort toggle is missing in the web UI. The cause is described as a hard-coded model-ID heuristic in `crates/providers/src/model_capabilities.rs`. A fix PR exists: [#1287](https://github.com/moltis-org/moltis/pull/1287).
2. **Unknown severity — [#1277](https://github.com/moltis-org/moltis/issues/1277) (referenced, not included in dataset):** PR [#1280](https://github.com/moltis-org/moltis/pull/1280) fixes an issue where an explicitly empty `active_tools` array may override preset tool controls. The issue details are not in the provided data, so impact and severity cannot be confirmed.

No crashes, regressions, or stability incidents beyond these were reported in the last 24 hours.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests were filed today. The strongest roadmap signals are implicit:
- **Broader/current DeepSeek reasoning support:** PR [#1287](https://github.com/moltis-org/moltis/pull/1287) suggests the project needs more robust model-capability detection beyond legacy `deepseek-v4*` IDs. If merged, it would likely appear in the next patch/minor release.
- **Model capability configurability:** Issue [#1286](https://github.com/moltis-org/moltis/issues/1286) highlights the risk of hard-coded heuristics. A future improvement could be a more dynamic or user-overridable capability registry, though no such issue or PR is present in the data.
- **Tool preset behavior:** PR [#1280](https://github.com/moltis-org/moltis/pull/1280) may land in a future release if maintainers prioritize it, improving predictability for preset-based tool controls.

Given no releases and no merged PRs, it is not possible to predict a version number or release date from this data.

## 7. User Feedback Summary
Real user pain points visible in the data:
- **Missing reasoning controls for a current flagship model:** The author of [#1286](https://github.com/moltis-org/moltis/issues/1286) reports that DeepSeek-V4.1-Flash users cannot access the Reasoning Effort toggle because Moltis only recognizes legacy model IDs. This is a functional/UI dissatisfaction tied to model detection.
- **Tool preset preservation:** PR [#1280](https://github.com/moltis-org/moltis/pull/1280) indicates that users or integrators care about empty `active_tools` not unintentionally overriding preset tool controls.

Satisfaction/dissatisfaction signal is limited: both relevant PRs have 0 reactions and no listed comments, so broader community sentiment cannot be measured. Positively, users are submitting fixes directly — #1287 for #1286 and #1280 for #1277 — which suggests an engaged contributor base even without high discussion volume.

## 8. Backlog Watch
- **[#1280](https://github.com/moltis-org/moltis/pull/1280) — open since 2026-09-21, updated 2026-09-27, no comments/reactions:** This is the clearest backlog item. It fixes #1277 and has been open for about 7 days without visible maintainer feedback. It likely needs review, triage, or a merge decision.
- **[#1277](https://github.com/moltis-org/moltis/issues/1277) — referenced but not included in the dataset:** Since PR #1280 explicitly fixes it, maintainers should confirm whether the issue remains open and whether the proposed behavior matches expectations.
- **[#1286](https://github.com/moltis-org/moltis/issues/1286) and [#1287](https://github.com/moltis-org/moltis/pull/1287):** New as of 2026-09-27, so they are not yet backlog risks, but they form a same-day bug/fix pair that would benefit from prompt review.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-09-28

> Note: source data labels item URLs under `agentscope-ai/QwenPaw` while the project is referenced as CoPaw. Links below preserve the repository path shown in the dataset.

## 1. Today's Overview

CoPaw shows moderate issue activity but low merge/release throughput in the 2026-09-28 reporting window. Seven issues were updated in the last 24h: 5 open/active and 2 closed, while all 5 updated PRs remain open and none were merged or closed. No new releases were published. The dominant themes are desktop stability, context-compression behavior, UI/accessibility settings, and file-panel freshness. Community engagement is present but shallow: the most-commented issue has 3 comments, all other listed issues have 1 comment, and every listed issue/PR has 0 reactions. Overall project health looks active on user feedback, but the review/merge pipeline appears backlogged.

## 2. Releases

No new releases were published in this window. There are no release notes, breaking changes, or migration notes to report.

## 3. Project Progress

- **Merged/closed PRs today:** None. All 5 updated PRs are still open, so no code was shipped via PR merge in this window.
- **Closed Issues:** 2 issues were closed, both marked `Close-and-review-later`:
  - [#7998 [CLOSED] Context compression trigger question](https://github.com/agentscope-ai/QwenPaw/issues/7998)
  - [#7994 [CLOSED] Context display status not updating and compression not triggering](https://github.com/agentscope-ai/QwenPaw/issues/7994)
- **PRs advancing fixes/features (not yet merged):**
  - [#7996 fix(console): refresh expanded folders in Files panel](https://github.com/agentscope-ai/QwenPaw/pull/7996) — directly fixes #7995.
  - [#8001 fix(runtime): keep timeout tool results recoverable](https://github.com/agentscope-ai/QwenPaw/pull/8001) — addresses #7981.
  - [#7993 fix(i18n): add two missing error strings used by unguarded call sites](https://github.com/agentscope-ai/QwenPaw/pull/7993) — fixes missing translation keys.
  - [#7956 feat(console): unify settings UX and smooth conversation transitions](https://github.com/agentscope-ai/QwenPaw/pull/7956) — settings UX unification.
  - [#6874 feat(mcp): add configurable tool call timeout](https://github.com/agentscope-ai/QwenPaw/pull/6874) — MCP timeout configurability, still under review.

## 4. Community Hot Topics

1. **[#7957 [OPEN] Recommendation: manually deactivate/disable pre-made models and channels](https://github.com/agentscope-ai/QwenPaw/issues/7957)** — 3 comments, highest in the dataset. User wants to disable unused optional models/channels, citing UI clutter and obsessive-compulsive preferences. Underlying need: stronger personalization and decluttering of built-in features.
2. **[#8000 [OPEN] Desktop double-launch opens a second window and terminates the first instance live backend](https://github.com/agentscope-ai/QwenPaw/issues/8000)** — 1 comment. Windows desktop single-instance guard issue. Underlying need: reliable desktop process lifecycle and data/backend safety.
3. **[#7999 [OPEN] Desktop UI font size adjustable](https://github.com/agentscope-ai/QwenPaw/issues/7999)** — 1 comment. Requests small/default/large/extra-large or continuous scaling. Underlying need: accessibility and high-DPI usability.
4. **[#7998 [CLOSED] When does context trigger compression?](https://github.com/agentscope-ai/QwenPaw/issues/7998)** — 1 comment. User asks why compression only triggers on manual submission rather than agent-driven requests. Underlying need: transparent, automatic context management.
5. **[#7997 [OPEN] Support message retraction/editing and workspace rollback in WebUI](https://github.com/agentscope-ai/QwenPaw/issues/7997)** — 1 comment. Requests editing/retracting messages with history truncation and optional workspace rollback. Underlying need: safer iterative agent workflows.
6. **[#7995 [OPEN] Files panel refresh leaves expanded folders stale](https://github.com/agentscope-ai/QwenPaw/issues/7995)** — 1 comment. New files appear only after full page reload. Underlying need: real-time file tree accuracy.

## 5. Bugs & Stability

Ranked by severity based on impact:

1. **High — [#8000 Windows desktop double-launch terminates first instance backend](https://github.com/agentscope-ai/QwenPaw/issues/8000)**  
   Relaunching `qwenpaw-desktop.exe` opens a second independent window and terminates the first instance’s live backend. No fix PR is listed yet. This is a core desktop stability/data-loss risk.
2. **High — [#7994 Context display not updating and compression not triggering](https://github.com/agentscope-ai/QwenPaw/issues/7994)**  
   Context circle does not refresh between conversations; compression does not trigger even when `91.7K / 131.1K` exceeds the configured 0.5 threshold. Closed as `Close-and-review-later`, but no linked fix PR. Related to #7998, suggesting a broader context-management concern.
3. **Medium — [#7995 Files panel refresh leaves expanded folders stale](https://github.com/agentscope-ai/QwenPaw/issues/7995)**  
   New files added to an expanded folder do not appear until full browser reload. Fix PR [#7996](https://github.com/agentscope-ai/QwenPaw/pull/7996) is open.
4. **Low — Missing i18n error strings**  
   Two error toast keys render raw keys instead of messages. Fix PR [#7993](https://github.com/agentscope-ai/QwenPaw/pull/7993) is open.
5. **Low/Informational — [#7998 Context compression trigger question](https://github.com/agentscope-ai/QwenPaw/issues/7998)**  
   Not a crash, but indicates confusing compression behavior. Closed; may need documentation or follow-up.

## 6. Feature Requests & Roadmap Signals

- **Likely near-term, already in PR form:**
  - Files panel refresh fix — [#7996](https://github.com/agentscope-ai/QwenPaw/pull/7996)
  - i18n missing strings — [#7993](https://github.com/agentscope-ai/QwenPaw/pull/7993)
  - Timeout tool-result recovery — [#8001](https://github.com/agentscope-ai/QwenPaw/pull/8001)
  - Console settings UX unification — [#7956](https://github.com/agentscope-ai/QwenPaw/pull/7956)
- **Under review, possible if prioritized:**
  - Configurable MCP tool-call timeout — [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874), open since 2026-08-10.
- **User-requested features needing product/design scoping:**
  - Disable/deactivate pre-made models and channels — [#7957](https://github.com/agentscope-ai/QwenPaw/issues/7957)
  - Adjustable desktop UI font size — [#7999](https://github.com/agentscope-ai/QwenPaw/issues/7999)
  - Message retraction/editing plus workspace rollback — [#7997](https://github.com/agentscope-ai/QwenPaw/issues/7997)
- **Prediction:** The next patch/minor release is most likely to include the already-open fixes for file-panel refresh, i18n, timeout tool results, and console settings UX. Larger desktop customization and message-rollback features may take longer due to design and state-management complexity.

## 7. User Feedback Summary

- **Desktop reliability:** Windows users report a serious single-instance bug where relaunching the desktop app kills the first instance’s backend. This is the strongest dissatisfaction signal in the dataset.
- **Context management:** Multiple users are confused or frustrated by context compression. They report stale context indicators and compression not triggering automatically despite exceeding thresholds. This affects trust in long agent sessions.
- **Accessibility/UI:** Users want adjustable font sizes for low-vision, older, high-DPI, and projection use cases. The current 2.2.1 desktop UI is not adjustable.
- **File workspace accuracy:** Users notice stale expanded folders after external/agent file additions, requiring full reloads.
- **Customization:** Users want to hide/disable unused pre-made models and channels to reduce clutter.
- **Workflow control:** Users want message editing/retraction and workspace rollback for cleaner context and safer iteration.
- **Overall sentiment:** Active, constructive feedback, especially from Chinese-speaking and Windows desktop users. However, zero 👍 reactions across listed items and low comment counts suggest limited community voting; maintainer response/merge speed is the main health risk.

## 8. Backlog Watch

- **[#6874 feat(mcp): add configurable tool call timeout](https://github.com/agentscope-ai/QwenPaw/pull/6874)** — Opened 2026-08-10, updated 2026-09-27, still open and under review. This is the longest-running important PR in the dataset and needs maintainer decision.
- **[#7957 Manually deactivate/disable pre-made models and channels](https://github.com/agentscope-ai/QwenPaw/issues/7957)** — Created 2026-09-23, 3 comments, still open. Highest-engagement issue but no linked PR; needs maintainer triage/product direction.
- **[#8000 Windows desktop double-launch backend termination](https://github.com/agentscope-ai/QwenPaw/issues/8000)** — Created/updated 2026-09-27, no fix PR. High-severity desktop bug that should be prioritized.
- **[#7994 Context display/compression bug](https://github.com/agentscope-ai/QwenPaw/issues/7994)** — Closed as `Close-and-review-later`, but no fix PR is visible. If the root cause remains, it may resurface.
- **[#7956 Console settings UX PR](https://github.com/agentscope-ai/QwenPaw/pull/7956)** — Opened 2026-09-23, updated 2026-09-27, still open. Broad UX change likely needs review bandwidth.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



# ZeroClaw Project Digest — 2026-09-28

---

## 1. Today's Overview

ZeroClaw is in a high-activity development phase with 44 issues and 50 pull requests updated in the last 24 hours (37 open issues, 47 open PRs; 7 issues and 3 PRs closed/merged). No new releases were cut today. The project is grappling with a cluster of **S0 security regressions** — two fresh identity-access bugs and one data-loss bug in parallel file writes — alongside steady feature work across channels, memory, tools, and the ZeroCode composer. Maintainer throughput remains healthy: several long-running contributor PRs (notably from @Audacity88, @JordanTheJet, and @RustLangLatam) are progressing through review, and the CI pipeline is being tuned for efficiency.

---

## 2. Releases

**No new releases today.** The most recent tagged version remains v0.8.4 (referenced in issue #11036). The v0.8.6 / v0.9.0 roadmap is tracked under #7432.

---

## 3. Project Progress

### Merged / Closed Today (3 PRs, 7 Issues)

| Item | Type | Summary |
|------|------|---------|
| **[#10070](https://github.com/zeroclaw-labs/zeroclaw/pull/10070)** (CLOSED) | Enhancement | `file_download` SSRF-hardening with private-host opt-in; incorporates NAT64 and live-config fixes from later closed PRs. Maintainer-repaired by @Audacity88. |
| **[#10523](https://github.com/zeroclaw-labs/zeroclaw/issues/10523)** (CLOSED) | Bug | Bootstrap file truncation at 6,000 chars under `compact_context` — the truncation was invisible to operators. |
| **[#11036](https://github.com/zeroclaw-labs/zeroclaw/issues/11036)** (CLOSED) | Bug | OpenCode free-tier model `big-pickle` returning 403 `FreeTierError` on v0.8.4. |
| **[#9323](https://github.com/zeroclaw-labs/zeroclaw/issues/9323)** (CLOSED) | Enhancement | Define execution-tree iteration budget ownership — `ToolLoop.shared_budget` currently receives `None` from every production root. |
| **[#10826](https://github.com/zeroclaw-labs/zeroclaw/issues/10826)** (CLOSED) | Enhancement | ZeroCode session root selection: explicit directory choice, preserved roots on resume. |

### Active PRs Advancing

- **[#7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821)** (XL, since June) — Canonical `SandboxPolicyConfig` schema with application-layer enforcement; a foundational security PR.
- **[#10480](https://github.com/zeroclaw-labs/zeroclaw/pull/10480)** — Recover from rejected image-bearing requests by retrying with novel images omitted.
- **[#10197](https://github.com/zeroclaw-labs/zeroclaw/pull/10197)** — Persist interrupted ACP turn progress with atomic checkpoint recovery.
- **[#11068](https://github.com/zeroclaw-labs/zeroclaw/pull/11068)** — Narrow channel turns by sender role with `peer_groups.<name>.risk_profile`.
- **[#11076](https://github.com/zeroclaw-labs/zeroclaw/pull/11076)** — Add `agy_cli` coding-CLI tool for Antigravity CLI (Gemini CLI replacement).
- **[#11099](https://github.com/zeroclaw-labs/zeroclaw/pull/11099)** — Enrollment: print relay frontdoor link + QR with pairing code.

---

## 4. Community Hot Topics

### Most Commented Issues

| Issue | Comments | Core Need |
|-------|----------|-----------|
| **[#10523](https://github.com/zeroclaw-labs/zeroclaw/issues/10523)** — Bootstrap truncation invisible to operator | 5 | Operators couldn't see that context was silently truncated at 6K chars. |
| **[#11036](https://github.com/zeroclaw-labs/zeroclaw/issues/11036)** — OpenCode big-pickle 403 FreeTierError | 5 | Free-tier model access broken; provider-transport gap. |
| **[#9323](https://github.com/zeroclaw-labs/zeroclaw/issues/9323)** — Execution-tree iteration budget ownership | 4 | No production root supplies `shared_budget`; delegation fan-out is unbounded. |
| **[#7943](https://github.com/zeroclaw-labs/zeroclaw/issues/7943)** — Realtime voice-host channel | 4 | Backend-agnostic WS voice client; CrispASR/Wyoming-aligned. High community interest. |
| **[#10919](https://github.com/zeroclaw-labs/zeroclaw/issues/10919)** — A2A/HTTP tool test lock inconsistency | 4 | Test flakiness from shared global proxy state. |

### Most-Active PRs

| PR | Summary |
|----|---------|
| **[#7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821)** | Canonical sandbox policy schema (XL, security-critical) |
| **[#10480](https://github.com/zeroclaw-labs/zeroclaw/pull/10480)** | Recover from rejected image requests (agent-loop resilience) |
| **[#10843](https://github.com/zeroclaw-labs/zeroclaw/pull/10843)** | Telegram `add_reaction`/`remove_reaction` implementation |
| **[#11068](https://github.com/zeroclaw-labs/zeroclaw/pull/11068)** | Channel turns narrowed by sender role |

**Underlying community needs:** operators want **visibility into silent data loss** (truncation, dropped edits), **predictable provider behavior** (free-tier, stream recovery, DSML parsing), ** richer channels** (voice, Discord roles, Signal note-to-self, WhatsApp formatting), and **stronger security boundaries** (sandbox policy, principal scope in delegation, SSRF).

---

## 5. Bugs & Stability

### 🔴 S0 — Data Loss / Security Risk (3 open)

| Issue | Description | Fix PR? |
|-------|-------------|---------|
| **[#11198](https://

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*