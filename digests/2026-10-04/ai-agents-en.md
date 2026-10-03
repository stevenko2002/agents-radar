# OpenClaw Ecosystem Digest 2026-10-04

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-10-03 22:16 UTC

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



# OpenClaw Project Digest — 2026-10-04

---

## 1. Today's Overview

OpenClaw is experiencing **exceptionally high development velocity**, with 500 issues and 500 pull requests updated in the last 24 hours. The project shipped **v2026.9.8** (58 commits, 43 PRs, 21 contributors) as its latest release. A large wave of refactoring PRs — primarily "deslop" infrastructure work by `steipete` — landed alongside targeted bug fixes from `RomneyDa` addressing update/reliability issues. The issue backlog remains heavy: 348 open issues, many rated P0/P1 with active community discussion, indicating sustained user engagement and a substantial technical debt and stability backlog.

---

## 2. Releases

### v2026.9.8 — Published 2026-10-03

**58 commits · 43 pull requests · 21 contributors**

This is a **stability and reliability-focused release**. The release notes and changelog are identical, covering a broad set of fixes. The most notable changes address:

- **Update/recovery reliability**: Fixes for activation Doctor falsely reporting "offline maintenance" (the root cause of #164066), and Gateway recovery after failed activation.
- **Database maintenance**: Doctor now drains agent databases before maintenance operations.
- **Approval flow fixes**: Approvals spawned from child sessions now correctly reach the originating chat.
- **Auth profile rotation**: Long rate-limit waits no longer block agents when alternative credentials exist.
- **Infrastructure cleanup**: Multiple "deslop" refactors reducing duplicated code across runtime, channels, schema, and gateway subsystems.

**Migration notes**: No breaking changes explicitly documented. The release appears to be a drop-in patch on the 2026.9.x line. However, users on 2026.9.6 and earlier should be aware of several P0 regressions fixed in this version (see Bugs & Stability).

**Release page**: https://docs.openclaw.ai/releases/2026.9

---

## 3. Project Progress

### Merged/Closed PRs Today (183 total, notable highlights below)

| PR | Author | Summary |
|---|---|---|
| [#164554](https://github.com/openclaw/openclaw/pull/164554) | RomneyDa | **fix(update): activation Doctor falsely reports offline maintenance** — addresses #164066 |
| [#164503](https://github.com/openclaw/openclaw/pull/164503) | RomneyDa | **fix(doctor): drain agent databases before maintenance release** |
| [#164497](https://github.com/openclaw/openclaw/pull/164497) | RomneyDa | **fix(update): recover Gateway after failed activation** — stacked on #164554 |
| [#164570](https://github.com/openclaw/openclaw/pull/164570) | alexandermariduena | **fix(approvals): approvals from spawned session reach the chat that delegated it** |
| [#162398](https://github.com/openclaw/openclaw/pull/162398) | alkor2000 | **fix: rotate auth profiles before long rate-limit waits** — closes #161981 |
| [#164549](https://github.com/openclaw/openclaw/pull/164549) | steipete | **fix(telegram): later same-sender messages stall and replay** — related to #163926 |
| [#164575](https://github.com/openclaw/openclaw/pull/164575) | miguelbranco80 | **fix(browser): host guidance conflicts with configured node routing** — closes #164568 |
| [#164537](https://github.com/openclaw/openclaw/pull/164537) | steipete | **fix: queued workers miss cooperative checkpoints under shared pressure** — closes #164536 |
| [#164265](https://github.com/openclaw/openclaw/pull/164265) | steipete | **refactor(automations): retire heartbeat into ordinary jobs** — supersedes draft #135933, adopts design from #134994 |
| [#164401](https://github.com/openclaw/openclaw/pull/164401) | steipete | **feat: use bundled Bun in the Linux companion** |
| [#164576](https://github.com/openclaw/openclaw/pull/164576) | steipete | **feat: play YouTube videos inline in Control UI chats** |
| [#164496](https://github.com/openclaw/openclaw/pull/164496) | steipete | **feat(mcp): allow an App's tool calls while its view stays open** — related to #164277 |
| [#164532](https://github.com/openclaw/openclaw/pull/164532) | steipete | **fix(ui): agent startup shows a panel error instead of loading automatically** |
| [#164573](https://github.com/openclaw/openclaw/pull/164573) | steipete | **perf(sessions): compact shared lists and apply row deltas** |
| [#164567](https://github.com/openclaw/openclaw/pull/164567) | steipete | **fix: reclaim idle worker heap and enable Bun UI retention tests** |

### Major Refactoring Wave

A large batch of "deslop" PRs from `steipete` is cleaning up infrastructure across the codebase:

| PR | Scope |
|---|---|
| [#164544](https://github.com/openclaw/openclaw/pull/164544) | refactor(infra): deslop infrastructure |
| [#164520](https://github.com/openclaw/openclaw/pull/164520) | refactor(runtime): deslop runtime caches |
| [#164565](https://github.com/openclaw/openclaw/pull/164565) | refactor(gateway): deslop gateway subdirectories |
| [#164566](https://github.com/openclaw/openclaw/pull/164566) | refactor(agents): deslop agents |
| [#164286](https://github.com/openclaw/openclaw/pull/164286) | refactor(schema): deslop duplicated schema types |
| [#164476](https://github.com/openclaw/openclaw/pull/164476) | refactor(channels): read pairing allowlists through shared-state reader |
| [#164424](https://github.com/openclaw/openclaw/pull/164424) | refactor(media): track generated-HTML provenance through shared-state worker |
| [#164552](https://github.com/openclaw/openclaw/pull/164552) | refactor(media): keep native media opener out of channel plugins |

These refactors move SQLite work off the Gateway main thread, eliminate forwarding layers, and consolidate duplicated types — all described as having **no user-visible behavior change** but improving long-term maintainability and performance.

---

## 4. Community Hot Topics

### Most Commented Issues

| Issue | Comments | Title | Link |
|---|---|---|---|
| #143524 | **105** | Agent SQLite WAL grows to 1.4–2.8 GB in days despite wal_autocheckpoint=1000 | [🔗](https://github.com/openclaw/openclaw/issues/143524) |
| #119720 | 22 | Synchronous agent persistence and transcript maintenance block the Gateway event loop at scale | [🔗](https://github.com/openclaw/openclaw/issues/119720) |
| #137332 | 21 | Mixed terminal requester-settle batches retry forever after ownership check (CLOSED) | [🔗](https://github.com/openclaw/openclaw/issues/137332) |
| #139710 | 20 | Mid-turn plugin-generation supersede kills system-agent turn and its planner fallback | [🔗](https://github.com/openclaw/openclaw/issues/139710) |
| #97616 | 17 | OpenClaw leaks unreaped hook/tool child processes, causing zombie accumulation | [🔗](https://github.com/openclaw/openclaw/issues/97616) |
| #159612 | 14 | Subagent completion settlement retries forever: "owner changed before settlement" re-injects result every turn | [🔗](https://github.com/openclaw/openclaw/issues/159612) |
| #150635 | 14 | Short-term recall retention evicts recalled entries nightly, so dreaming deep phase never promotes | [🔗](https://github.com/openclaw/openclaw/issues/150635) |
| #110190 | 13 | Runtime context carrier positioned AFTER user message causes severe model confusion | [🔗](https://github.com/openclaw/openclaw/issues/110190) |

### Analysis of Underlying Needs

1. **SQLite WAL management** (#143524, 105 comments) is the single hottest topic. Users on Windows are hitting multi-GB WAL files that block gateway startup. This points to a **platform-specific checkpointing bug** that needs urgent attention — the issue is tagged P0 and impact:ux-release-blocker.

2. **Event loop blocking** (#119720) reveals a fundamental architectural concern: synchronous persistence on the Gateway thread doesn't scale. Users running multiple agents are experiencing noticeable latency.

3. **Subagent lifecycle management** is a recurring theme across #137332, #159612, #121187, and #139710 — the settlement/retry/ownership logic for spawned agents is fragile and produces confusing user-facing errors.

4. **Process hygiene** (#97616) shows accumulated zombie processes degrading runtime performance over time — a classic Unix resource leak that worsens with longer gateway uptimes.

5. **Context ordering** (#110190) is a subtle but high-impact UX bug: the runtime context carrier being placed *after* the user message causes models to "see" metadata before the actual query, wasting reasoning tokens and producing confused responses.

---

## 5. Bugs & Stability

### P0 / Release-Blocker Issues (ranked by severity)

| Issue | Title | Fix PR? | Link |
|---|---|---|---|
| #143524 | SQLite WAL grows to 1.4–2.8 GB, blocks gateway startup (Windows) | ❌ None | [🔗](https://github.com/openclaw/openclaw/issues/143524) |
| #159612 | Subagent completion settlement retries forever, re-injects result every turn | ❌ None | [🔗](https://github.com/openclaw/openclaw/issues/159612) |
| #145252 | 2026.9.3 / 2026.9.4 update, upgrade and recovery reliability (tracking) | ✅ #164554, #164497 | [🔗](https://github.com/openclaw/openclaw/issues/145252) |
| #154812 | Runaway RSS outside V8 heap causes OOM and shutdown timeout | ❌ None | [🔗](https://github.com/openclaw/openclaw/issues/154812) |
| #158126 | Gateway shutdown step gateway-server-close fails: "Worker environment inventory has closed" | ❌ None | [🔗](https://github.com/openclaw/openclaw/issues/158126) |
| #160386 | 2026.9.6 on large session stores causes severe SQLite I/O pressure, WebUI RPC timeouts | ❌ None | [🔗](https://github.com/openclaw/openclaw/issues/160386) |
| #121617 | Post-compaction "Already compacted" guard misclassifies "nothing new to compact" as terminal failure | ❌ None | [🔗](https://github.com/openclaw/openclaw/issues/121617) |
| #148307 | Error: database is locked on agent DB when session reclamation exceeds 5s busy timeout | ❌ None | [🔗](https://github.com/openclaw/openclaw/issues/148307) |
| #164066 | 2026.9.8 managed update still rolls back: activation Doctor refuses with "undergoing offline maintenance" | ✅ #164554 | [🔗](https://github.com/openclaw/openclaw/issues/164066) |
| #162031 | 2026.9.7 gateway crash-loops with 'Unhandled promise rejection: undefined' during runtime tool assembly (CLOSED) | ❌ None visible | [🔗](https://github.com/openclaw/openclaw/issues/162031) |

### P1 Issues

| Issue | Title | Fix PR? | Link |
|---|---|---|---|
| #119720 | Synchronous agent persistence blocks Gateway event loop at scale | ❌ None | [🔗](https://github.com/openclaw/openclaw/issues/119720) |
| #139710 | Mid-turn plugin-generation supersede kills system-agent turn and planner fallback | ❌ None | [🔗](https://github.com/openclaw/openclaw/issues/139710) |
| #97616 | Unreaped hook/tool child processes cause zombie accumulation | ❌ None | [🔗](https://github.com/openclaw/openclaw/issues/97616) |
| #144291 | Config hot-reload aborts every in-flight agent turn | ❌ None | [🔗](https://github.com/openclaw/openclaw/issues/144291) |
| #161379 | Gateway pins a CPU core forever: prepared model catalog refresh loop | ❌ None | [🔗](https://github.com/openclaw/openclaw/issues/161379) |
| #121953 | Cron agent turns stall on DeepSeek — the `[cron:<jobId> <name>]` prefix is deprioritized | ❌ None | [🔗](https://github.com/openclaw/openclaw/issues/121953) |
| #118885 | Large SQLite databases run redundant full integrity checks during startup | ❌ None | [🔗](https://github.com/openclaw/openclaw/issues/118885) |
| #157575 | Managed Gateway heap flag overrides per-worker old-space limits | ❌ None | [🔗](https://github.com/openclaw/openclaw/issues/157575) |
| #157126 | claude-cli MCP bridge inherits request scope, owner turns lose operator.admin | ❌ None | [🔗](https://github.com/openclaw/openclaw/issues/157126) |
| #161976 | WhatsApp DM replies repeatedly fail at durable registry handoff after restart | ❌ None | [🔗](https://github.com/openclaw/openclaw/issues/161976) |
| #162119 | Codex intermittently returns 403 owner-verification error after in-place model switch | ❌ None | [🔗](https://github.com/openclaw/openclaw/issues/162119) |
| #142922 | System-agent delegation loses active run authority | ❌ None | [🔗](https://github.com/openclaw/openclaw/issues/142922) |
| #156883 | Plugin lifecycle pass leaves stale plugin tool handles in live sessions | ❌ None | [🔗](https://github.com/openclaw/openclaw/issues/156883) |

### Key Observations

- **Only 2 of 10 P0 issues have visible fix PRs** (#164066 → #164554, #145252 → #164554/#164497). The remaining P0s — particularly the SQLite WAL explosion (#143524) and the subagent settlement retry loop (#159612) — are outstanding and represent significant user-facing risk.
- The **update/reliability cluster** (issues #145252, #164066, #153521, #162031, #158126) appears to be the most actively addressed area, with multiple stacked PRs from RomneyDa targeting the activation Doctor and

---

## Cross-Ecosystem Comparison



# Cross-Project Comparison Report: Open-Source Personal AI Assistant Ecosystem
**Date:** 2026-10-04 | **Scope:** 13 projects across the personal AI agent / assistant landscape

---

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem is bifurcating into two distinct tiers. **Tier 1** projects (OpenClaw, ZeroClaw, Hermes Agent) exhibit high development velocity with 50+ PRs and issues updated daily, active contributor bases, and regular release cycles — but they also carry substantial technical debt and stability backlogs. **Tier 2** projects (NanoBot, NanoClaw, NullClaw, CoPaw) maintain moderate activity focused on targeted reliability improvements, while **Tier 3/4** projects (PicoClaw, IronClaw, LobsterAI, TinyClaw, Moltis, ZeptoClaw) are largely dormant or stalled. Across all active projects, three technical challenges dominate: **SQLite WAL management** (the single hottest community topic ecosystem-wide), **update/rollback crash-safety**, and **subagent lifecycle orchestration**. The ecosystem is converging on shared architectural patterns — SQLite-backed persistence, gateway-worker process models, MCP tool integration — while differentiating on channel support, TUI/WebUI UX, and cross-agent collaboration capabilities.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Latest Release | Open Issues | Open PRs | Health Assessment |
|---|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | v2026.9.8 (58 commits, 43 PRs, 21 contributors) | 348 | ~500 | **High velocity** — active release cadence, large contributor base, heavy backlog |
| **ZeroClaw** | 50 | 50 | None | 43 | 48 | **High activity, low throughput** — many open PRs, only 2 merged; S0/S1 bugs outstanding |
| **Hermes Agent** | 50 | 50 | None | 39 | 47 | **Active maintenance** — no release yet; update crash-safety and cron work in flight |
| **NanoBot** | 1 | 46 | None | 1 | 29 | **PR-review-heavy** — 17 merged/closed, strong TUI/WebUI/MCP pipeline |
| **NanoClaw** | 2 | 22 | None | ~5 | 20 | **Maintenance-oriented** — update/rollback safety, channel fixes, security hardening |
| **NullClaw** | 0 | 20 | None | 0 | 20 | **Integration-constrained** — single-author queue, 20 open PRs, zero merges today |
| **CoPaw** | ~10 | 10 | None | ~8 | 10 | **Active stabilization** — critical boot/multimodal/provider bugs, community-engaged |
| **PicoClaw** | 0 | 0 | None | 1 | 0 | **Dormant** — single stale QQ channel issue |
| **IronClaw** | 1 | 0 | None | 1 | 0 | **Quiet** — single macOS local-dev credential bug |
| **LobsterAI** | 6 | 1 | None | 6 | 1 | **Stalled** — all issues stale (March 2026), zero engagement |
| **TinyClaw** | 0 | 0 | None | 0 | 0 | **No activity** |
| **Moltis** | 0 | 0 | None | 0 | 0 | **No activity** |
| **ZeptoClaw** | 0 | 0 | None | 0 | 0 | **No activity** |

---

## 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Release velocity is unmatched.** OpenClaw shipped v2026.9.8 with 58 commits and 43 PRs in a single release — the only project in the ecosystem with a recent, substantial release. Every other active project is accumulating changes in open PRs with no corresponding version cut.
- **Contributor breadth.** 21 contributors on the latest release vs. single-author dominance in NullClaw (all 20 PRs by `vernonstinebaker`) or the core-team-driven model in NanoClaw and ZeroClaw.
- **Community engagement depth.** OpenClaw's issue #143524 (SQLite WAL growth) has 105 comments — an order of magnitude more than any other project's top issue. This indicates a large, vocal user base that generates actionable feedback at scale.
- **Active refactoring investment.** The "deslop" infrastructure wave (8+ refactoring PRs by `steipete`) shows deliberate technical debt reduction, not just feature work.

**Technical Approach Differences:**
- OpenClaw is the only project explicitly investing in **bundled runtime** (bundled Bun in Linux companion, PR #164401), **inline media playback** (YouTube in Control UI, PR #164576), and **auth profile rotation** (PR #162398) as first-class features.
- Its architecture explicitly separates Gateway, runtime, channels, schema, and agents subsystems — the refactoring wave is consolidating these into cleaner boundaries, a maturity signal most peers haven't reached.
- The **heartbeat → ordinary jobs** retirement (PR #164265) reflects a deeper architectural rethink of agent scheduling that other projects are still grappling with in issue form (e.g., ZeroClaw #6105 "agent lacks cron-job context").

**Community Size Comparison:**
OpenClaw's issue engagement (105 comments on a single SQLite issue) dwarfs all peers. The next closest are Hermes Agent (#97681 cross-gateway Bot collaboration, 35 comments) and ZeroClaw (#9965 test fixtures, 13 comments). This translates to a feedback loop advantage: OpenClaw's users report reproducible issues at a volume that drives prioritization, while smaller projects rely on maintainer intuition or sparse reports.

---

## 4. Shared Technical Focus Areas

These requirements emerge across **3+ projects** with specific evidence:

| Technical Focus | Projects | Specific Needs & Evidence |
|---|---|---|
| **SQLite WAL / Database Management** | OpenClaw, ZeroClaw, Hermes Agent, LobsterAI | OpenClaw #143524 (1.4–2.8 GB WAL on Windows, 105 comments); ZeroClaw #11420 (SQLite rewrites `created_at` every turn); Hermes #132401 (scratch prune destroys data); LobsterAI #879 (`ON DELETE CASCADE` not enforced) |
| **Update / Rollback Crash-Safety** | OpenClaw, Hermes Agent, NanoClaw, ZeroClaw | Hermes stack of 4 PRs (#132361, #132338, #132428, #132346) for single crash-safe commit point; NanoClaw #4012 (rename-based snapshot restore); OpenClaw #164554/#164497 (Gateway recovery after failed activation) |
| **Subagent Lifecycle Orchestration** | OpenClaw, Hermes Agent, NanoBot, ZeroClaw | OpenClaw #159612 (settlement retries forever), #139710 (mid-turn plugin supersede kills turn); NanoBot #5985 (session-owned subagent messaging/cancellation); ZeroClaw #11239 (owned sessions reach shared memory plane) |
| **Context Ordering / Prompt Construction** | OpenClaw, ZeroClaw, Hermes Agent | OpenClaw #110190 (runtime context carrier after user message causes model confusion); ZeroClaw #6105 (cron agents lack context of own scheduled messages); Hermes #130909 (compaction summary cache preservation) |
| **Mobile / WebUI UX** | NanoBot, CoPaw, Hermes Agent | NanoBot #5640 (mobile keyboard input and streaming send); CoPaw #6281 (mobile console adaptation); Hermes #132329 (desktop "reply was cut off" during compaction) |
| **MCP Interoperability** | NanoBot, OpenClaw, ZeroClaw | NanoBot #6018/#6019 (MCP resource/prompt pagination, servers without tool capabilities); OpenClaw #164496 (App tool calls while view stays open); ZeroClaw #10225 (ZeroCode RPC cannot reach channel-backed tools) |
| **Cron / Scheduling Reliability** | Hermes Agent, NanoBot, ZeroClaw, OpenClaw | Hermes #122222 (cron external worker import failures); NanoBot #5922 (DST-aware cron); ZeroClaw #6105 (cron agents lack context); OpenClaw #164265 (retire heartbeat into ordinary jobs) |
| **Process / Memory Hygiene** | OpenClaw, ZeroClaw, NullClaw, Hermes Agent | OpenClaw #97616 (zombie process accumulation); ZeroClaw #9799 (daemon CPU spin); NullClaw #1011 (parsed tool-call allocation leak); Hermes #132401 (scratch prune data loss) |

---

## 5. Differentiation Analysis

| Project | Feature Focus | Target Users | Technical Architecture |
|---|---|---|---|
| **OpenClaw** | Full-stack agent platform: channels, gateway, runtime, UI, MCP, updates | Power users running always-on gateway agents | Multi-subsystem (gateway + runtime + channels + schema + agents), Bun-based companion, SQLite-backed |
| **Hermes Agent** | Cross-gateway Bot collaboration, update crash-safety, cron reliability | Self-managed install users running scheduled agents | Gateway-centric, plugin runtime ownership, external cron worker, A2A plugin foundation |
| **ZeroClaw** | Runtime/daemon reliability, ZeroCode config UX, effort-based routing | Developers/operators running daemonized agents | Rust-based, daemon + RPC dispatcher, ZeroCode dashboard, Schema V4 config system |
| **NanoBot** | TUI ergonomics, WebUI mobile support, MCP discovery, provider resilience | Desktop TUI users + mobile WebUI access | TUI-first, WebUI second, MCP client, multi-provider with fallback |
| **CoPaw** | Provider compatibility (OpenAI/GPT-6), console UI/UX, session persistence | Qwen ecosystem users, multi-modal workflow operators | AgentScope-based, Qoder integration, console web app |
| **NullClaw** | A2A security, channel stability, memory recall control, CLI ergonomics | Multi-tenant / cross-owner deployments | Zig-based, A2A security scoping, configurable memory auto-recall, channel gateway |
| **NanoClaw** | Update/rollback safety, channel integration, webhook security | Container/Docker deployments, update-conscious operators | Node-based, Docker container support, channels branch, iMessage/Discord adapters |
| **PicoClaw / IronClaw / LobsterAI / TinyClaw / Moltis / ZeptoClaw** | Various (QQ channel, macOS local-dev, slash commands, ad-banner UI) | Niche or stalled | Insufficient activity for meaningful differentiation |

**Key Architectural Insight:** The active projects are converging on a **gateway-worker-persistence** model: a central gateway process manages sessions, spawns worker agents, and persists state to SQLite. Where they differ is in runtime choice (Bun/JS for OpenClaw, Rust for ZeroClaw, Zig for NullClaw, Node for NanoClaw) and channel strategy (OpenClaw and Hermes have the broadest channel support; CoPaw is Qwen-centric; PicoClaw has QQ).

---

## 6. Community Momentum & Maturity

### Activity T

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-10-04

## Today's Overview
On 2026-10-04, NanoBot showed high development throughput: 46 PRs were updated in the last 24h (29 open, 17 merged/closed), while only 1 issue was active and no new releases were published. The issue queue is quiet, with a single new bug report about Obsidian CLI integration under nanobot. PR activity is concentrated in TUI reliability, WebUI mobile/touch behavior, MCP discovery, provider resilience, and channel fixes. No release was cut, so changes are accumulating in open PRs. Overall project health is active but PR-review-heavy, with several P2 and conflict-marked items needing maintainer attention.

## Project Progress
- **Merged/closed PRs today: 17 total**, but only one closed PR appears in the provided top-20 sample:
  - [HKUDS/nanobot#5763](https://github.com/HKUDS/nanobot/pull/5763) [CLOSED] `fix(api): return 400 for invalid multimodal field types` — classifies malformed multimodal JSON field types as client request errors, preserves 413 for oversized uploads, and covers invalid text, image object, and image URL field types.
- **Open PRs advancing features/fixes today** include:
  - TUI reliability: [HKUDS/nanobot#6026](https://github.com/HKUDS/nanobot/pull/6026) P0 queued prompts after send failure, [HKUDS/nanobot#6027](https://github.com/HKUDS/nanobot/pull/6027) chronological saved file-edit merging, [HKUDS/nanobot#6025](https://github.com/HKUDS/nanobot/pull/6025) Kitty keypad Enter submission.
  - WebUI/mobile: [HKUDS/nanobot#6023](https://github.com/HKUDS/nanobot/pull/6023), [HKUDS/nanobot#6022](https://github.com/HKUDS/nanobot/pull/6022), [HKUDS/nanobot#6021](https://github.com/HKUDS/nanobot/pull/6021), [HKUDS/nanobot#5640](https://github.com/HKUDS/nanobot/pull/5640).
  - MCP: [HKUDS/nanobot#6018](https://github.com/HKUDS/nanobot/pull/6018), [HKUDS/nanobot#6019](https://github.com/HKUDS/nanobot/pull/6019).
  - Providers/correctness: [HKUDS/nanobot#5764](https://github.com/HKUDS/nanobot/pull/5764), [HKUDS/nanobot#6011](https://github.com/HKUDS/nanobot/pull/6011), [HKUDS/nanobot#6020](https://github.com/HKUDS/nanobot/pull/6020), [HKUDS/nanobot#6013](https://github.com/HKUDS/nanobot/pull/6013), [HKUDS/nanobot#5922](https://github.com/HKUDS/nanobot/pull/5922).
  - Subagent/commands/channels: [HKUDS/nanobot#5985](https://github.com/HKUDS/nanobot/pull/5985), [HKUDS/nanobot#5974](https://github.com/HKUDS/nanobot/pull/5974), [HKUDS/nanobot#5605](https://github.com/HKUDS/nanobot/pull/5605).

## Community Hot Topics
> Data caveat: PR comment counts are `undefined` in the provided dataset, and issue [#6024](https://github.com/HKUDS/nanobot/issues/6024) has 0 comments and 0 👍. The ranking below is therefore based on priority labels, recency, and cross-cutting scope rather than engagement metrics.

- [HKUDS/nanobot#6024](https://github.com/HKUDS/nanobot/issues/6024) — Obsidian CLI under nanobot reports “unable to find Obsidian,” while terminal works; likely XDG_RUNTIME_DIR not reaching the CLI. Underlying need: reliable desktop integration and environment propagation for CLI-launched assistants.
- [HKUDS/nanobot#6026](https://github.com/HKUDS/nanobot/pull/6026) — P0 TUI fix: retain queued prompts after send failure. Underlying need: no data loss in interactive sessions.
- [HKUDS/nanobot#6027](https://github.com/HKUDS/nanobot/pull/6027) — TUI saved file-edit events merged in reverse chronological order. Underlying need: correct diff/history rendering.
- [HKUDS/nanobot#6025](https://github.com/HKUDS/nanobot/pull/6025) — Kitty keypad Enter not submitting prompts. Underlying need: terminal compatibility.
- [HKUDS/nanobot#5985](https://github.com/HKUDS/nanobot/pull/5985) — Session-owned subagent task messaging and cancellation. Underlying need: safer multi-agent orchestration.
- [HKUDS/nanobot#5640](https://github.com/HKUDS/nanobot/pull/5640) — Mobile keyboard input and streaming send. Underlying need: usable WebUI on phones/tablets.
- [HKUDS/nanobot#6018](https://github.com/HKUDS/nanobot/pull/6018) / [HKUDS/nanobot#6019](https://github.com/HKUDS/nanobot/pull/6019) — MCP resource/prompt pagination and servers without tool capabilities. Underlying need: complete MCP interoperability.
- [HKUDS/nanobot#5764](https://github.com/HKUDS/nanobot/pull/5764) — Serialize half-open fallback probes. Underlying need: provider failover correctness under concurrency.

## Bugs & Stability
Ranked by severity as labeled in the provided data:

| Severity | Item | Status / Notes |
|---|---|---|
| P0 | [HKUDS/nanobot#6026](https://github.com/HKUDS/nanobot/pull/6026) — TUI queued send removes queue head before transport accepts, losing text/attachments on failure | Fix PR open; validation includes send-failure regressions for text and media |
| P1 | [HKUDS/nanobot#5922](https://github.com/HKUDS/nanobot/pull/5922) — Cron next-run calculation ignores DST when `CronSchedule.tz` unset | Fix PR open; proposes `tzlocal.get_localzone()` |
| P2 | [HKUDS/nanobot#6027](https://github.com/HKUDS/nanobot/pull/6027) — TUI saved file edits merged in reverse chronological order | Fix PR open; TUI suite 257 passed |
| P2 | [HKUDS/nanobot#6025](https://github.com/HKUDS/nanobot/pull/6025) — Kitty keypad Enter decoded as `kpenter`, not bound to submit | Fix PR open; relates to #5987 |
| P2 | [HKUDS/nanobot#5914](https://github.com/HKUDS/nanobot/pull/5914) — Napcat image with non-numeric `file_size` rejected upfront | Fix PR open |
| P2 | [HKUDS/nanobot#6009](https://github.com/HKUDS/nanobot/pull/6009) — WebUI sidebar state treated as empty after failed initial fetch | Fix PR open; fixes #6008 |
| P2 | [HKUDS/nanobot#5764](https://github.com/HKUDS/nanobot/pull/5764) — Provider fallback allows multiple concurrent half-open probes | Fix PR open |
| P2 | [HKUDS/nanobot#6011](https://github.com/HKUDS/nanobot/pull/6011) — Codex image generation SSE buffered via `AsyncClient.post()` | Fix PR open |
| P2 | [HKUDS/nanobot#6019](https://github.com/HKUDS/nanobot/pull/6019) — MCP connection aborts if server lacks tool capabilities | Fix PR open |
| P2 | [HKUDS/nanobot#6020](https://github.com/HKUDS/nanobot/pull/6020) — Responses API tool-call serialization missing `by_alias=True` for OpenAI SDK 3.8.0 | Fix PR open |
| P2 | [HKUDS/nanobot#5605](https://github.com/HKUDS/nanobot/pull/5605) — Email marked `\Seen` before actual delivery | Fix PR open; conflict label |
| Unlabeled | [HKUDS/nanobot#6024](https://github.com/HKUDS/nanobot/issues/6024) — Obsidian CLI cannot find Obsidian under nanobot; possible XDG_RUNTIME_DIR issue | Open issue; no fix PR referenced |
| Closed | [HKUDS/nanobot#5763](https://github.com/HKUDS/nanobot/pull/5763) — Invalid multimodal field types returned wrong status | Closed today; 400 for client errors, 413 preserved for oversized uploads |

## Feature Requests & Roadmap Signals
- [HKUDS/nanobot#5985](https://github.com/HKUDS/nanobot/pull/5985) — Subagent session-owned creation, messaging, inspection, and targeted cancellation; WebUI separates active work from durable results. Depends on #5976.
- [HKUDS/nanobot#5640](https://github.com/HKUDS/nanobot/pull/5640) — Mobile WebUI keyboard behavior and streaming send; Enter inserts newline on coarse-pointer devices.
- [HKUDS/nanobot#5974](https://github.com/HKUDS/nanobot/pull/5974) — `/group` command to manage reply policy from chat. Depends on #5973; conflict label.
- [HKUDS/nanobot#6023](https://github.com/HKUDS/nanobot/pull/6023), [HKUDS/nanobot#6022](https://github.com/HKUDS/nanobot/pull/6022), [HKUDS/nanobot#6021](https://github.com/HKUDS/nanobot/pull/6021) — Touch-device WebUI improvements: larger preview controls, keyboard-aware navigation, hidden unavailable preview actions.
- [HKUDS/nanobot#6018](https://github.com/HKUDS/nanobot/pull/6018), [HKUDS/nanobot#6019](https://github.com/HKUDS/nanobot/pull/6019) — MCP pagination for resources/prompts and connections to servers without tool capabilities.
- [HKUDS/nanobot#6013](https://github.com/HKUDS/nanobot/pull/6013) — JSON equality for enum validation, distinguishing booleans from numbers.
- [HKUDS/nanobot#5922](https://github.com/HKUDS/nanobot/pull/5922) — Local timezone rules for cron, including DST.
- [HKUDS/nanobot#5764](https://github.com/HKUDS/nanobot/pull/5764) — Serialized provider fallback probes.

**Prediction:** No release data is available, but the highest-probability next-version candidates are the P0/P1/P2 TUI and correctness fixes ([#6026](https://github.com/HKUDS/nanobot/pull/6026), [#6027](https://github.com/HKUDS/nanobot/pull/6027), [#6025](https://github.com/HKUDS/nanobot/pull/6025), [#5922](https://github.com/HKUDS/nanobot/pull/5922)) and the WebUI mobile/touch set ([#5640](https://github.com/HKUDS/nanobot/pull/5640), [#6022](https://github.com/HKUDS/nanobot/pull/6022), [#6023](https://github.com/HKUDS/nanobot/pull/6023)). MCP discovery fixes ([#6018](https://github.com/HKUDS/nanobot/pull/6018), [#6019](https://github.com/HKUDS/nanobot/pull/6019)) are also likely. Subagent and `/group` features may slip until their dependencies (#5976, #5973) land.

## User Feedback Summary
- **Real user pain points:** Obsidian CLI integration fails under nanobot but works in terminal ([#6024](https://github.com/HKUDS/nanobot/issues/6024)); TUI send failures can lose queued prompts/attachments ([#6026](https://github.com/HKUDS/nanobot/pull/6026)); cron schedules drift by an hour after DST changes ([#5922](https://github.com/HKUDS/nanobot/pull/5922)); mobile WebUI keyboard/navigation is awkward ([#5640](https://github.com/HKUDS/nanobot/pull/5640), [#6022](https://github.com/HKUDS/nanobot/pull/6022)); MCP servers exposing only resources/prompts can fail to connect ([#6019](https://github.com/HKUDS/nanobot/pull/6019)); email messages are marked seen before delivery ([#5605](https://github.com/HKUDS/nanobot/pull/5605)); Napcat image metadata edge cases break downloads ([#5914](https://github.com/HKUDS/nanobot/pull/5914)).
- **Use cases:** desktop TUI workflows, Obsidian CLI automation, mobile WebUI access, MCP resource/prompt integration, subagent task orchestration, and channel reliability.
- **Satisfaction/dissatisfaction:** High contributor throughput suggests strong engagement, but the volume of P2 reliability fixes, mobile UX issues, and conflict-marked PRs indicates dissatisfaction around edge cases and platform integration. No release today means users are waiting on accumulated fixes.

## Backlog Watch
Long-unanswered or high-importance items needing maintainer attention:

- [HKUDS/nanobot#5605](https://github.com/HKUDS/nanobot/pull/5605) — Email `\Seen` only on delivered messages. Created 2026-08-30 (~35 days old), updated 2026-10-03, conflict label.
- [HKUDS/nanobot#5640](https://github.com/HKUDS/nanobot/pull/5640) — WebUI mobile keyboard input and streaming send. Created 2026-09-03 (~31 days old), updated 2026-10-03.
- [HKUDS/nanobot#5764](https://github.com/HKUDS/nanobot/pull/5764) — Provider half-open fallback probe serialization. Created 2026-09-14 (~20 days old), updated 2026-10-03.
- [HKUDS/nanobot#5974](https://github.com/HKUDS/nanobot/pull/5974) — `/group` reply policy command. Created 2026-09-29, conflict label, depends on #5973; may need rebase or dependency merge.
- [HKUDS/nanobot#5985](https://github.com/HKUDS/nanobot/pull/5985) — Session-owned subagent messaging/cancellation. Created 2026-09-30, depends on #5976.
- [HKUDS/nanobot#6024](https://github.com/HKUDS/nanobot/issues/6024) — Obsidian CLI bug. Created 2026-10-03, 0 comments/0 👍; needs triage and likely reproduction details.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent — Project Digest  
**Date:** 2026-10-04  
**Source:** Supplied GitHub snapshot for `NousResearch/hermes-agent`

> Data note: PR comment counts are `undefined` in the snapshot, so PR “hotness” below is inferred from open/updated status, labels, and topic rather than comment volume.

---

## 1. Today’s Overview

On 2026-10-04, Hermes Agent shows **high maintenance activity but no release output**: 50 issues and 50 PRs were updated in the last 24h, with 39 active issues and 47 open PRs versus 11 closed issues and 3 merged/closed PRs. The active queue is concentrated in **P0/P1/P2 reliability work** around updates, cron, gateway/session state, desktop UX, and local-model compatibility. Community attention remains on cross-gateway Bot collaboration ([#97681](https://github.com/NousResearch/hermes-agent/issues/97681), 35 comments) and cron/install reliability ([#122222](https://github.com/NousResearch/hermes-agent/issues/122222), 33 comments). Overall project health is **active and responsive**, but the open-to-closed ratio indicates a substantial review/triage backlog, and the lack of releases means users are waiting on fixes rather than new versions.

---

## 2. Releases

**None.** No new releases, release notes, breaking changes, or migration guidance were published in this snapshot.

---

## 3. Project Progress

The snapshot reports **3 merged/closed PRs** today, but does not identify them in the top-20 PR list. Closed issues show where fixes and decisions landed:

- **Cron / install reliability**
  - [#122222](https://github.com/NousResearch/hermes-agent/issues/122222) — cron external worker cannot import dependencies on self-managed installs. **Closed.**
  - [#131764](https://github.com/NousResearch/hermes-agent/issues/131764) — cron external worker never registers `config.yaml` shell hooks under systemd. **Closed.**
  - [#131585](https://github.com/NousResearch/hermes-agent/issues/131585) — cron dispatch-failure notice not delivered on multi-profile gateways. **Closed.**
  - [#132223](https://github.com/NousResearch/hermes-agent/issues/132223) — stale in-flight sweep releases healthy direct cron runs. **Closed.**
- **Update / install**
  - [#122277](https://github.com/NousResearch/hermes-agent/issues/122277) — app updates are slow and painful. **Closed.**
  - [#117324](https://github.com/NousResearch/hermes-agent/issues/117324) — Windows Service support for Hermes Gateway. **Closed as duplicate.**
- **Agent / skills / gateway**
  - [#64392](https://github.com/NousResearch/hermes-agent/issues/64392) — duplicate skill names disagree across `list`, prompt, and `skill_view`. **Closed.**
  - [#125910](https://github.com/NousResearch/hermes-agent/issues/125910) — cloud gateway instance unresponsive. **Closed.**
  - [#406](https://github.com/NousResearch/hermes-agent/issues/406) — independent code verification and quality gates. **Closed.**
  - [#75367](https://github.com/NousResearch/hermes-agent/issues/75367) — `key_env` support for built-in providers. **Closed.**

Open PRs advancing major workstreams include:

- **Update crash-safety:** [#132361](https://github.com/NousResearch/hermes-agent/pull/132361) (single crash-safe commit point), [#132338](https://github.com/NousResearch/hermes-agent/pull/132338) (Windows killed updater no longer strands paused gateways), [#132428](https://github.com/NousResearch/hermes-agent/pull/132428) (blobless clones for treeless installs), [#132346](https://github.com/NousResearch/hermes-agent/pull/132346) (real-update E2E CI).
- **Gateway/compaction:** [#130909](https://github.com/NousResearch/hermes-agent/pull/130909) — preserve compaction summary cache prefix.
- **Refactors:** [#131395](https://github.com/NousResearch/hermes-agent/pull/131395) — shared commands/tool capability policy; [#128791](https://github.com/NousResearch/hermes-agent/pull/128791) — plugin runtime ownership.
- **Security/platform:** [#105488](https://github.com/NousResearch/hermes-agent/pull/105488) — WhatsApp `qs` bump; [#125843](https://github.com/NousResearch/hermes-agent/pull/125843) — approval gates for container/VM destruction verbs; [#125264](https://github.com/NousResearch/hermes-agent/pull/125264) — gateway media delivery hardening.
- **Runtime fixes:** [#127371](https://github.com/NousResearch/hermes-agent/pull/127371) — Docker `$HOME` creation; [#126350](https://github.com/NousResearch/hermes-agent/pull/126350) — Telegram PTB retry-loop disarm; [#128291](https://github.com/NousResearch/hermes-agent/pull/128291) — kanban workspace-busy claim guard.

---

## 4. Community Hot Topics

| Rank | Item | Activity | Underlying need |
|---|---|---|---|
| 1 | [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) — Let Bots collaborate across gateways | 35 comments, 4 👍, OPEN | Cross-machine and cross-owner personal-agent collaboration without giving up control. Strategic A2A foundation. |
| 2 | [#122222](https://github.com/NousResearch/hermes-agent/issues/122222) — cron external worker cannot import dependencies | 33 comments, 3 👍, CLOSED | Reliable scheduled jobs on self-managed installs; compatibility and dependency isolation. |
| 3 | [#125727](https://github.com/NousResearch/hermes-agent/issues/125727) — Automated Nous integration is blocked | 20 comments, OPEN | Merge-conflict automation and integration reliability across large agent code paths. |
| 4 | [#132401](https://github.com/NousResearch/hermes-agent/issues/132401) — scratch prune silently destroys multi-day agent work | 11 comments, OPEN, P0 | Safe retention, quarantine, and keep-markers for agent scratch data. |
| 5 | [#99773](https://github.com/NousResearch/hermes-agent/issues/99773) — TUI attention budget + first-paint cleanup | 10 comments, OPEN | UI that minimizes attention cost without hiding consequential state. |
| 6 | [#64392](https://github.com/NousResearch/hermes-agent/issues/64392) — duplicate skill names disagree | 8 comments, CLOSED, P1 | Canonical skill identity across listing, prompting, and viewing. |

**PR-side hot topics** (comments unavailable): the update crash-safety stack ([#132361](https://github.com/NousResearch/hermes-agent/pull/132361), [#132338](https://github.com/NousResearch/hermes-agent/pull/132338), [#132428](https://github.com/NousResearch/hermes-agent/pull/132428), [#132346](https://github.com/NousResearch/hermes-agent/pull/132346)), compaction cache preservation ([#130909](https://github.com/NousResearch/hermes-agent/pull/130909)), and large refactors ([#131395](https://github.com/NousResearch/hermes-agent/pull/131395), [#128791](https://github.com/NousResearch/hermes-agent/pull/128791)).

---

## 5. Bugs & Stability

### Critical / P0

- [#132401](https://github.com/NousResearch/hermes-agent/issues/132401) — **scratch prune 24h idle delete silently destroys multi-day agent work.** No log, no quarantine, no keep-marker. OPEN. **No linked fix PR in snapshot.** This is the highest-risk data-loss item today.

### High / P1

- [#122222](https://github.com/NousResearch/hermes-agent/issues/122222) — **cron external worker cannot import dependencies on self-managed installs; every scheduled job fails before ownership ack.** CLOSED. Fix appears to have landed.
- [#132329](https://github.com/NousResearch/hermes-agent/issues/132329) — **Desktop shows “reply was cut off” during context compaction; backend reports session idle, no WebSocket drop.** OPEN. Possible related open PR: [#130909](https://github.com/NousResearch/hermes-agent/pull/130909) (P0, preserve compaction summary cache).
- [#64392](https://github.com/NousResearch/hermes-agent/issues/64392) — **duplicate skill names disagree across `list`, prompt, and `skill_view`.** CLOSED.

### Medium / P2

- [#132431](https://github.com/NousResearch/hermes-agent/issues/132431) — interrupted source update leaves stale `.js` artifacts shadowing TypeScript sources on Windows. OPEN. Adjacent update PRs exist: [#132338](https://github.com/NousResearch/hermes-agent/pull/132338), [#132361](https://github.com/NousResearch/hermes-agent/pull/132361), [#132428](https://github.com/NousResearch/hermes-agent/pull/132428).
- [#105379](https://github.com/NousResearch/hermes-agent/issues/105379) — local-server fingerprinting hits API-key-protected servers without key, causing 401 spray. OPEN.
- [#130132](https://github.com/NousResearch/hermes-agent/issues/130132) — MoA native providers fail at Relay and synchronous streaming boundaries. OPEN.
- [#131278](https://github.com/NousResearch/hermes-agent/issues/131278) — `clarify` tool schema `maxLength: 8000` breaks every request on llama.cpp servers. OPEN.
- [#132422](https://github.com/NousResearch/hermes-agent/issues/132422) — `session.usage` omits `account_lines` in multi-profile hosting. OPEN.
- [#132223](https://github.com/NousResearch/hermes-agent/issues/132223) — stale in-flight sweep releases healthy direct cron runs. CLOSED.
- [#131585](https://github.com/NousResearch/hermes-agent/issues/131585) — cron dispatch-failure notice not delivered on multi-profile gateways. CLOSED.
- [#125910](https://github.com/NousResearch/hermes-agent/issues/125910) — cloud gateway unresponsive (TLS accepts, HTTP hangs). CLOSED.
- [#122277](https://github.com/NousResearch/hermes-agent/issues/122277) — app updates slow/“braindead.” CLOSED.
- [#53072](https://github.com/NousResearch/hermes-agent/issues/53072) — agent may claim GitHub repo creation/push succeeded after tool failures. OPEN, needs-repro.
- [#132444](https://github.com/NousResearch/hermes-agent/issues/132444) — hardline blocklist blocks shell function definitions and backticked prose as “shutdown/reboot.” OPEN.

### Lower / P3

- [#100031](https://github.com/NousResearch/hermes-agent/issues/100031) — Photon `_MIRROR_FILES` omits sidecar modules its own `index.mjs` imports; read-only installs crash-loop. OPEN.
- [#77162](https://github.com/NousResearch/hermes-agent/issues/77162) — exact-value applied-secret redaction missing on tool-result → provider egress path. OPEN.
- [#132334](https://github.com/NousResearch/hermes-agent/issues/132334) — developer guides document a user-plugin import pattern that cannot resolve. OPEN.
- [#132417](https://github.com/NousResearch/hermes-agent/issues/132417) — `lifecycle_guard` budget-exhaustion refusal logged without the refused text. OPEN.

---

## 6. Feature Requests & Roadmap Signals

### Strong roadmap signals

- [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) — **Let Bots collaborate across gateways.** 35 comments, 4 👍. Foundation for cross-machine and cross-owner personal-agent collaboration. Likely strategic, but large.
- [#132248](https://github.com/NousResearch/hermes-agent/issues/132248) — **Trusted Agent Contacts: cross-owner A2A conversations as a standalone plugin.** RFC, P3, needs-decision.
- [#99773](https://github.com/NousResearch/hermes-agent/issues/99773) — **TUI attention budget + first-paint cleanup.** UX investment to reduce attention cost without hiding state.
- [#104102](https://github.com/NousResearch/hermes-agent/issues/104102) — **Durable approval-decision audit log for all tools/paths.** Governance and operator accountability.
- [#75458](https://github.com/NousResearch/hermes-agent/issues/75458) — **Standardize Hermes logging format** to be consistent, machine-parseable, production-ready.

### Likely near-term candidates

- **Update reliability/crash-safety** — PR stack [#132361](https://github.com/NousResearch/hermes-agent/pull/132361), [#132338](https://github.com/NousResearch/hermes-agent/pull/132338), [#132428](https://github.com/NousResearch/hermes-agent/pull/132428), [#132346](https://github.com/NousResearch/hermes-agent/pull/132346). High probability for next version.
- **Gateway/compaction stability** — [#130909](https://github.com/NousResearch/hermes-agent/pull/130909) addresses compaction replay/cache behavior tied to desktop session complaints.
- **Plugin/CLI ownership refactors** — [#131395](https://github.com/NousResearch/hermes-agent/pull/131395), [#128791](https://github.com/NousResearch/hermes-agent/pull/128791). Architectural, likely staged.
- **Security hardening** — [#105488](https://github.com/NousResearch/hermes-agent/pull/105488) WhatsApp `qs`, [#125843](https://github.com/NousResearch/hermes-agent/pull/125843) approval gates, [#125264](https://github.com/NousResearch/hermes-agent/pull/125264) media delivery.
- **Skills ecosystem** — [#132485](https://github.com/NousResearch/hermes-agent/pull/132485) DE-Ahnenforschung skill set; [#101773](https://github.com/NousResearch/hermes-agent/pull/101773) skills picker install identities; [#63791](https://github.com/NousResearch/hermes-agent/pull/63791) Nexusyn memory provider docs.

### Closed feature signals

- [#75367](https://github.com/NousResearch/hermes-agent/issues/75367) — `key_env` for built-in providers. CLOSED.
- [#117324](https://github.com/NousResearch/hermes-agent/issues/117324) — Windows Service support. CLOSED as duplicate.
- [#406](https://github.com/NousResearch/hermes-agent/issues/406) — Independent code verification and quality gates. CLOSED.

---

## 7. User Feedback Summary

**Main pain points:**

- **Updater UX and reliability:** users report slow updates, “braindead” update flow, interrupted updates leaving stale artifacts, killed Windows updaters stranding paused gateways. See [#122277](https://github.com/NousResearch/hermes-agent/issues/122277), [#132431](https://github.com/NousResearch/hermes-agent/issues/132431), [#132338](https://github.com/NousResearch/hermes-agent/pull/132338), [#132361](https://github.com/NousResearch/hermes-agent/pull/132361).
- **Cron reliability:** scheduled jobs failing before running, shell hooks silently dead, dispatch-failure notices not delivered, healthy runs force-released. See [#122222](https://github.com/NousResearch/hermes-agent/issues/122222), [#131764](https://github.com/NousResearch/hermes-agent/issues/131764), [#131585](https://github.com/NousResearch/hermes-agent/issues/131585), [#132223](https://github.com/NousResearch/hermes-agent/issues/132223).
- **Desktop/session state:** wrong session reopened from bot click, no path back to Bot Chat, “reply cut off” during compaction. See [#130980](https://github.com/NousResearch/hermes-agent/issues/130980), [#132329](https://github.com/NousResearch/hermes-agent/issues/132329).
- **Local-model compatibility:** llama.cpp grammar failures from `maxLength`, API-key-protected local servers sprayed with 401s. See [#131278](https://github.com/NousResearch/hermes-agent/issues/131278), [#105379](https://github.com/NousResearch/hermes-agent/issues/105379).
- **Security/governance:** missing durable approval audit, missing secret redaction on egress, false-positive blocklist hits, media delivery hardening. See [#104102](https://github.com/NousResearch/hermes-agent/issues/104102), [#77162](https://github.com/NousResearch/hermes-agent/issues/77162), [#132444](https://github.com/NousResearch/hermes-agent/issues/132444), [#125264](https://github.com/NousResearch/hermes-agent/pull/125264).
- **Multi-profile scoping:** `session.usage` missing `account_lines`, cron notices failing in multi-profile gateways. See [#132422](https://github.com/NousResearch/hermes-agent/issues/132422), [#131585](https://github.com/NousResearch/hermes-agent/issues/131585).
- **Skill identity:** duplicate names behave inconsistently, picker can post ambiguous bare names. See [#64392](https://github.com/NousResearch/hermes-agent/issues/64392), [#101773](https://github.com/NousResearch/hermes-agent/pull/101773).
- **Data loss:** scratch prune deleting multi-day work is the most severe user-impact report today. See [#132401](https://github.com/NousResearch/hermes-agent/issues/132401).

**Satisfaction/dissatisfaction balance:** engagement is high and reports are detailed, which is a positive health signal. Dissatisfaction is concentrated around **reliability of unattended operation** — updates, cron, gateway/session continuity, and data retention. Positive interest is visible in collaboration features: [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) has 4 👍 and [#122222](https://github.com/NousResearch/hermes-agent/issues/122222) has 3 👍.

---

## 8. Backlog Watch

Important or long-lived items that still need maintainer attention:

- [#53072](https://github.com/NousResearch/hermes-agent/issues/53072) — **Agent may claim GitHub repo creation/push succeeded after tool failures.** Created 2026-06-26, only 1 comment, P2, needs-repro. Long-standing trust/verification gap.
- [#75458](https://github.com/NousResearch/hermes-agent/issues/75458) — **Standardize Hermes logging format.** Created 2026-07-31, 1 comment, P3, needs-decision.
- [#77162](https://github.com/NousResearch/hermes-agent/issues/77162) — **Exact-value applied-secret redaction missing on tool-result → provider egress.** Created 2026-08-03, 5 comments, P3 security.
- [#72637](https://github.com/NousResearch/hermes-agent/pull/72637) — **Attribute auxiliary compression failures to the actual wire route.** Created 2026-07-27, open, P2.
- [#63791](https://github.com/NousResearch/hermes-agent/pull/63791) — **Document Nexusyn standalone memory provider plugin.** Created 2026-07-13, open.
- [#100031](https://github.com/NousResearch/hermes-agent/issues/100031) — **Photon `_MIRROR_FILES` omits sidecar modules; read-only installs crash-loop.** Created 2026-09-01, 3 comments, P3.
- [#104102](https://github.com/NousResearch/hermes-agent/issues/104102) — **Durable approval-decision audit log.** Created 2026-09-06, 4 comments, P3, needs-decision.
- [#105379](https://github.com/NousResearch/hermes-agent/issues/105379) — **Local-server API-key probes cause 401 spray.** Created 2026-09-07, 4 comments, P2.
- [#101773](https://github.com/NousResearch/hermes-agent/pull/101773) — **Preserve skills picker install identities.** Created 2026-09-03, open, P2.
- [#105488](https://github.com/NousResearch/hermes-agent/pull/105488) — **WhatsApp `qs` security bump for DoS advisories.** Created 2026-09-08, open, P3 security.
- [#125843](https://github.com/NousResearch/hermes-agent/pull/125843) — **Approval gates for container/VM and dataset destruction verbs.** Created 2026-09-27, open, P3 security.
- [#125264](https://github.com/NousResearch/hermes-agent/pull/125264) — **Gateway media delivery hardening.** Created 2026-09-27, open, P3 security.
- [#127371](https://github.com/NousResearch/hermes-agent/pull/127371) — **Docker image user `$HOME` creation.** Created 2026-09-29, open, P2.
- [#126350](https://github.com/NousResearch/hermes-agent/pull/126350) — **Telegram PTB retry-loop disarm.** Created 2026-09-28, open, P2.
- [#128791](https://github.com/NousResearch/hermes-agent/pull/128791) — **CLI Ownership Refactor Phase 4: plugin runtime ownership.** Created 2026-09-30, open, P3.

**Backlog assessment:** the most urgent backlog item is [#132401](https://github.com/NousResearch/hermes-agent/issues/132401) because it is P0 and can destroy agent work. The most strategically important long-running item is [#97681](https://github.com/NousResearch/hermes-agent/issues/97681), which has the highest community engagement and could shape Hermes’ multi-agent/cross-owner roadmap.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



Based on the GitHub data for **PicoClaw** (`github.com/sipeed/picoclaw`) as of **2026-10-04**, here is the structured project digest:

---

### 1. Today's Overview
Activity on the PicoClaw repository has been very quiet over the last 24 hours, with zero new pull requests, zero merged code changes, and no new releases published. The only notable activity is the ongoing discussion on a stale bug report regarding QQ channel integration. Overall project velocity appears low today, with community attention focused on resolving an API synchronization mismatch for QQ users.

### 2. Releases
* **No new releases** were published in the last 24 hours.

### 3. Project Progress
* **Pull Requests:** None opened, merged, or closed today.
* **Codebase Changes:** No new features were advanced, and no bug fixes were merged into the codebase during this 24-hour window.

### 4. Community Hot Topics
* **Issue #3394: QQ Chat Channel API Mismatch** ([Link](https://github.com/sipeed/picoclaw/issues/3394))
  * **Activity:** 2 comments, 0 reactions, updated on 2026-10-03.
  * **Underlying Needs:** The user `qinglt` reports that the underlying QQ robot API has been updated, but PicoClaw's QQ chat channel interface has not been updated to align with these changes. The community demand centers on maintaining seamless multi-platform messaging integration. Users need the channel adapter to be updated to restore full QQ messaging functionality.

### 5. Bugs & Stability
* **[STALE] QQ Channel Interface Out of Sync (Issue #3394)** ([Link](https://github.com/sipeed/picoclaw/issues/3394))
  * **Severity:** Medium to High (for users relying on QQ channel integration). 
  * **Description:** Upstream API changes from QQ have broken the chat channel wrapper in PicoClaw, likely causing connection or messaging failures for QQ users.
  * **Fix Status:** The issue is currently open and marked as `[stale]`. There are no active pull requests or official fixes provided by the maintainers yet.

### 6. Feature Requests & Roadmap Signals
* While no new feature requests were submitted today, **Issue #3394** serves as a critical roadmap signal. It highlights the operational overhead of relying on external messaging APIs (like QQ). 
* **Prediction:** The next maintenance patch or hotfix is highly likely to focus on updating the channel adapters, starting with a synchronization update for the QQ chat channel interface to restore broken user workflows.

### 7. User Feedback Summary
* **Pain Points:** Users attempting to use PicoClaw via QQ are experiencing integration breakages due to upstream API updates. 
* **Dissatisfaction:** Users are expressing frustration over the lack of synchronization between the core QQ robot updates and the channel wrapper, leading to a non-functional chat channel until a patch is released. 

### 8. Backlog Watch
* **Issue #3394** (opened 2026-09-26, last updated 2026-10-03) is marked as `[stale]`. 
* **Action Needed:** Maintainer attention is required here. The maintainers should review the upstream QQ API changes, update the corresponding Go/TypeScript channel adapters in PicoClaw, and push a hotfix to unblock QQ users. Leaving this issue unaddressed will result in continued degradation of the QQ user experience.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-10-04

## 1. Today's Overview
NanoClaw had no new releases in the last 24h, but PR activity remained high: 22 PRs were updated, with 20 still open and 2 merged/closed. Issue activity was low: only 2 issues were updated, including one open compaction-hook bug and one closed rollback/data-loss bug. The work is heavily core-team driven, focused on bug fixes, update/rollback safety, channel integration, release automation, and security hardening. Overall project health looks active and maintenance-oriented, but the large open PR queue and sparse public reactions/comments suggest a possible review bottleneck and limited external community engagement in this dataset.

## 2. Releases
No new releases. Latest releases: none. No breaking changes, migration notes, or version-specific changes to report.

## 3. Project Progress
Closed/merged PRs and issues in the updated set:
- [#4012 [CLOSED] fix(update): restore snapshot by rename so a rollback never half-deletes data/](https://github.com/nanocoai/nanoclaw/pull/4012) — directly addresses the critical rollback data-loss bug.
- [#4003 [CLOSED] update rollback can delete half of data/ and leave the host down](https://github.com/nanocoai/nanoclaw/issues/4003) — critical stability issue closed.
- One additional merged/closed PR was counted in the data but not shown in the top 20, so no details are available.

Open work advancing:
- Update/release workflow: [#3986 update channels](https://github.com/nanocoai/nanoclaw/pull/3986), [#3987 rc pre-releases](https://github.com/nanocoai/nanoclaw/pull/3987), [#3988 gateway refresh](https://github.com/nanocoai/nanoclaw/pull/3988), [#3997 setup skill-file commits](https://github.com/nanocoai/nanoclaw/pull/3997), [#4010 agent-image repin automation](https://github.com/nanocoai/nanoclaw/pull/4010).
- Channel reliability/security: [#4000 main→channels merge](https://github.com/nanocoai/nanoclaw/pull/4000), [#3995 load every adapter](https://github.com/nanocoai/nanoclaw/pull/3995), [#4013 webhook authentication](https://github.com/nanocoai/nanoclaw/pull/4013), [#4008 iMessage chat.db fix](https://github.com/nanocoai/nanoclaw/pull/4008), [#2752 Discord attachment staging](https://github.com/nanocoai/nanoclaw/pull/2752).
- Core correctness/security: [#3918 send_message reply loss/repeat](https://github.com/nanocoai/nanoclaw/pull/3918), [#3983 log redaction with BigInt/cycle](https://github.com/nanocoai/nanoclaw/pull/3983), [#3999 container env pass-through](https://github.com/nanocoai/nanoclaw/pull/3999), [#3985 proxy credential permissions](https://github.com/nanocoai/nanoclaw/pull/3985), [#3980 setup first-chat scoring](https://github.com/nanocoai/nanoclaw/pull/3980), [#4001 nested-pnpm test fix](https://github.com/nanocoai/nanoclaw/pull/4001).
- Repo maintenance/docs: [#3978 Dependabot/Renovate](https://github.com/nanocoai/nanoclaw/pull/3978), [#4007 Dependabot skill pins](https://github.com/nanocoai/nanoclaw/pull/4007), [#4011 core-or-fork docs](https://github.com/nanocoai/nanoclaw/pull/4011).

## 4. Community Hot Topics
Engagement data is sparse: all listed issues and PRs show 👍 0, and PR comment counts are undefined, so “top by comment count” cannot be meaningfully ranked. The most notable items are:
- [#3984 [OPEN] PreCompact hook fails: compact-instructions.ts calls getAllDestinations() without a registered mailbox](https://github.com/nanocoai/nanoclaw/issues/3984) — 1 comment. Underlying need: reliable compaction without hook crashes.
- [#4003 [CLOSED] update rollback can delete half of data/ and leave the host down](https://github.com/nanocoai/nanoclaw/issues/4003) — high-impact update-safety issue.
- [#2752 [OPEN] stage inbound attachments that expose only a URL (Discord)](https://github.com/nanocoai/nanoclaw/pull/2752) — open since 2026-06-12; channel attachment parity.
- [#3918 [OPEN] never lose or repeat a reply around send_message](https://github.com/nanocoai/nanoclaw/pull/3918) — open since 2026-09-25; message delivery correctness.
- [#4000 chore(channels): merge main into channels](https://github.com/nanocoai/nanoclaw/pull/4000) and [#3995 fix(channels): load every adapter](https://github.com/nanocoai/nanoclaw/pull/3995) — stacked channel-sync work.

Analysis: the “hot topics” are less about new user-facing features and more about update safety, compaction reliability, channel integration, and message correctness. External engagement appears low in this dataset; most activity is core-team/maintainer driven.

## 5. Bugs & Stability
Ranked by severity:
1. **Critical** — [#4003 update rollback can delete half of data/ and leave the host down](https://github.com/nanocoai/nanoclaw/issues/4003) — CLOSED. Fix PR [#4012](https://github.com/nanocoai/nanoclaw/pull/4012) is CLOSED.
2. **High** — [#3984 PreCompact hook fails on every compaction](https://github.com/nanocoai/nanoclaw/issues/3984) — OPEN, 1 comment. No fix PR listed in the provided data.
3. **High / security** — [#4013 loopback Gateway webhook accepts any local POST](https://github.com/nanocoai/nanoclaw/pull/4013) — OPEN; fix adds authentication.
4. **Medium** — [#3918 agent-runner can lose or repeat replies around send_message](https://github.com/nanocoai/nanoclaw/pull/3918) — OPEN.
5. **Medium** — [#4008 iMessage chat.db cannot open under Node due to better-sqlite3 prebuild](https://github.com/nanocoai/nanoclaw/pull/4008) — OPEN.
6. **Medium / security** — [#3985 proxy credentials written into readable service files](https://github.com/nanocoai/nanoclaw/pull/3985) — OPEN.
7. **Medium** — [#3999 CLAUDE_CODE_AUTO_COMPACT_WINDOW not passed into the container](https://github.com/nanocoai/nanoclaw/pull/3999) — OPEN.
8. **Medium** — [#3983 log redaction skipped when value holds BigInt or cycle](https://github.com/nanocoai/nanoclaw/pull/3983) — OPEN.
9. **Medium** — [#3995 channels branch may not load every adapter](https://github.com/nanocoai/nanoclaw/pull/3995) — OPEN, stacked on #4000.
10. **Low/medium** — [#3980 setup scores failure notice as ok first chat](https://github.com/nanocoai/nanoclaw/pull/3980), [#3988 update misses gateway-only skill change](https://github.com/nanocoai/nanoclaw/pull/3988), [#4001 nested-pnpm test fails on some installs](https://github.com/nanocoai/nanoclaw/pull/4001), [#2752 Discord attachment staging](https://github.com/nanocoai/nanoclaw/pull/2752).

Stability assessment: many fixes are already in PR form, which indicates active remediation. However, only #4012 is closed, so most fixes remain unmerged/unreleased.

## 6. Feature Requests & Roadmap Signals
No direct user feature requests appear in today's issue data. Roadmap signals come mainly from open PRs:
- **Update/release channels**: [#3986 follow release tags by default via update channels](https://github.com/nanocoai/nanoclaw/pull/3986) and [#3987 self-approved rc pre-releases](https://github.com/nanocoai/nanoclaw/pull/3987). These are likely near-term if approved.
- **Dependency/CI automation**: [#3978 Dependabot for Actions and skill pins](https://github.com/nanocoai/nanoclaw/pull/3978), [#4007 Dependabot visibility for skill-pinned npm versions](https://github.com/nanocoai/nanoclaw/pull/4007), and [#4010 agent-image repin PR automation](https://github.com/nanocoai/nanoclaw/pull/4010).
- **Channel parity and security**: [#4000/#3995 channels sync](https://github.com/nanocoai/nanoclaw/pull/4000), [#4013 webhook auth](https://github.com/nanocoai/nanoclaw/pull/4013), [#4008 iMessage](https://github.com/nanocoai/nanoclaw/pull/4008), [#2752 Discord attachments](https://github.com/nanocoai/nanoclaw/pull/2752).
- **Governance/docs**: [#4011 core-or-fork rule](https://github.com/nanocoai/nanoclaw/pull/4011).

Prediction: the next version, if cut, is likely to emphasize update-channel/release automation, channel reliability/security, and dependency hygiene rather than major new user-facing features.

## 7. User Feedback Summary
Pain points visible in the data:
- Update/rollback can cause data loss, permission errors, and host downtime ([#4003](https://github.com/nanocoai/nanoclaw/issues/4003)).
- Compaction hook failure disrupts agent operation ([#3984](https://github.com/nanocoai/nanoclaw/issues/3984)).
- Setup/update workflows can produce false success or miss skill-only changes ([#3980](https://github.com/nanocoai/nanoclaw/pull/3980), [#3988](https://github.com/nanocoai/nanoclaw/pull/3988)).
- Security/privacy concerns: proxy credentials readable in service files ([#3985](https://github.com/nanocoai/nanoclaw/pull/3985)); unauthenticated local webhook ([#4013](https://github.com/nanocoai/nanoclaw/pull/4013)).
- Channel gaps: Discord URL-only attachments ([#2752](https://github.com/nanocoai/nanoclaw/pull/2752)); iMessage chat.db native module issue ([#4008](https://github.com/nanocoai/nanoclaw/pull/4008)); adapter loading in the channels branch ([#3995](https://github.com/nanocoai/nanoclaw/pull/3995)).
- Messaging correctness: replies lost or repeated around `send_message` ([#3918](https://github.com/nanocoai/nanoclaw/pull/3918)).

Satisfaction/dissatisfaction: the critical #4003 issue was closed with a fix PR (#4012), showing responsiveness. But many fixes remain open, and long-lived PRs such as #2752 (since June) and #3918 (since September) may indicate unresolved user pain or review bottlenecks. Low reactions/comments suggest either a small active community or limited public engagement in this dataset.

## 8. Backlog Watch
- [#2752 OPEN since 2026-06-12] Discord attachments exposing only a URL — updated 2026-10-03. Needs maintainer review.
- [#3918 OPEN since 2026-09-25] send_message reply loss/repeat — core messaging correctness. Needs review/merge.
- [#4000 OPEN] chore(channels): merge main into channels — requires a merge commit and extra approval; blocks #3995.
- [#3995 OPEN] fix(channels): load every adapter — stacked on #4000.
- [#3978 OPEN, draft] Dependabot/Renovate cleanup — marked draft for discussion, not merge yet.
- [#3984 OPEN] PreCompact hook failure — only open issue with comment activity; no linked fix in the provided data.
- [#3986](https://github.com/nanocoai/nanoclaw/pull/3986) and [#3987](https://github.com/nanocoai/nanoclaw/pull/3987) — update-channel and rc prerelease automation; roadmap-impacting and awaiting approval.

Maintainer attention is recommended for #2752, #3918, #4000/#3995, and #3984.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-10-04

**Data caveat:** Based on the provided GitHub snapshot. All 20 PRs show `Comments: undefined` and `👍: 0`, and there are 0 issues in the dataset. Engagement rankings below are therefore based on update recency and inferred impact, not reactions or comment volume.

## 1. Today's Overview
NullClaw shows high PR-refresh activity — 20 pull requests updated in the last 24 hours — but zero merge/close throughput, with all 20 remaining open. There were no new releases and no issue activity, with the provided dataset showing 0 open/active and 0 closed issues. All listed PRs are authored by `vernonstinebaker`, indicating a concentrated contribution pattern and possible bus-factor/review bottleneck. The in-flight work is heavily weighted toward stability and hardening across channels, memory, CLI, providers, A2A security, and documentation. Overall project health is active but integration-constrained: maintenance work is queuing faster than it is being merged, and there is no release signal in this window.

## 2. Releases
No new releases. Nothing to detail on changes, breaking changes, or migration notes.

## 3. Project Progress
No PRs were merged or closed today, so no features or fixes were integrated into the mainline according to this data. The open PR queue does show active in-flight work in several areas:
- **Channel/gateway stability:** [#953](https://github.com/nullclaw/nullclaw/pull/953), [#954](https://github.com/nullclaw/nullclaw/pull/954), [#1002](https://github.com/nullclaw/nullclaw/pull/1002), [#1010](https://github.com/nullclaw/nullclaw/pull/1010)
- **Agent/memory correctness:** [#1001](https://github.com/nullclaw/nullclaw/pull/1001), [#1005](https://github.com/nullclaw/nullclaw/pull/1005), [#1011](https://github.com/nullclaw/nullclaw/pull/1011)
- **A2A security/scoping:** [#1012](https://github.com/nullclaw/nullclaw/pull/1012)
- **CLI/UX:** [#970](https://github.com/nullclaw/nullclaw/pull/970), [#1006](https://github.com/nullclaw/nullclaw/pull/1006)
- **Docs/provider setup:** [#962](https://github.com/nullclaw/nullclaw/pull/962), [#963](https://github.com/nullclaw/nullclaw/pull/963), [#1007](https://github.com/nullclaw/nullclaw/pull/1007), [#1008](https://github.com/nullclaw/nullclaw/pull/1008)

## 4. Community Hot Topics
There are no measurable hot topics by comments or reactions: every listed PR has `Comments: undefined` and `👍: 0`. The most notable updated PRs by potential impact are:
- [#1012 — fix(a2a): scope tasks and context sessions by bearer principal](https://github.com/nullclaw/nullclaw/pull/1012) — tenant isolation and authenticated task access.
- [#1002 — fix(channels): run HTTPS typing workers on the heavy runtime stack](https://github.com/nullclaw/nullclaw/pull/1002) — gateway crash prevention.
- [#1010 — fix(discord): ignore messages the bot itself posted](https://github.com/nullclaw/nullclaw/pull/1010) — prevents self-triggering loops.
- [#1001 — feat(memory): add configurable auto-recall, recall_limit, max_context_bytes](https://github.com/nullclaw/nullclaw/pull/1001) — user-facing memory control.
- [#971 — feat(streaming): native tool calls during SSE streaming](https://github.com/nullclaw/nullclaw/pull/971) — provider/tooling capability.

**Underlying needs:** reliable gateway operation, secure multi-tenant A2A behavior, predictable memory recall, better documentation, and less surprising CLI/Discord behavior. The lack of comments/reactions suggests either a small active contributor base or that discussion is happening outside the PR tracker.

## 5. Bugs & Stability
No new bugs or regressions were reported as issues today. However, several updated PRs describe stability or security fixes. Ranked by inferred severity:

**High**
- [#1002](https://github.com/nullclaw/nullclaw/pull/1002) — HTTPS typing workers can overflow a 512 KiB stack during Zig TLS initialization and terminate the gateway.
- [#953](https://github.com/nullclaw/nullclaw/pull/953) — stalled Discord gateway connections; recovery via safe socket shutdown and bounded pre-HELLO health.
- [#1010](https://github.com/nullclaw/nullclaw/pull/1010) — Discord bot can feed its own replies back into the agent, creating an infinite turn loop.
- [#1012](https://github.com/nullclaw/nullclaw/pull/1012) — A2A tasks and context sessions not scoped by bearer principal; potential cross-caller access.

**Medium**
- [#1005](https://github.com/nullclaw/nullclaw/pull/1005) — archived conversation shards recalled into live turns, confusing current-session context.
- [#1011](https://github.com/nullclaw/nullclaw/pull/1011) — parsed tool-call allocations leak when a later allocation fails.
- [#954](https://github.com/nullclaw/nullclaw/pull/954) — outbound delivery ownership/retry behavior on allocation failures.
- [#1006](https://github.com/nullclaw/nullclaw/pull/1006) — streamed CLI stdout written at offset 0, corrupting the first line on macOS.
- [#966](https://github.com/nullclaw/nullclaw/pull/966) — Android/Termux DNS failures in Zig stdlib HTTP; buffered curl fallback hardening.
- [#1004](https://github.com/nullclaw/nullclaw/pull/1004) — non-2xx provider errors hide server reason without packet capture.

**Lower severity / hardening**
- [#962](https://github.com/nullclaw/nullclaw/pull/962) — Anthropic provider setup consistency.
- [#963](https://github.com/nullclaw/nullclaw/pull/963) — Weixin iLink QR auth documentation and hardening.
- [#970](https://github.com/nullclaw/nullclaw/pull/970) — arrow-key handling in agent REPL.
- [#1003](https://github.com/nullclaw/nullclaw/pull/1003) — symlinked skill directory handling.
- [#1007](https://github.com/nullclaw/nullclaw/pull/1007), [#1008](https://github.com/nullclaw/nullclaw/pull/1008) — docs fixes.

All fixes remain open; none are merged in this dataset.

## 6. Feature Requests & Roadmap Signals
With no issues in the dataset, roadmap signals come from open PRs:
- [#971](https://github.com/nullclaw/nullclaw/pull/971) — native tool calls during SSE streaming.
- [#987](https://github.com/nullclaw/nullclaw/pull/987) — loop hygiene for long local tool-heavy runs: stable prompt prefix, tool-output compression, identical-call detection.
- [#1001](https://github.com/nullclaw/nullclaw/pull/1001) — configurable memory auto-recall, `recall_limit`, and `max_context_bytes`.
- [#1003](https://github.com/nullclaw/nullclaw/pull/1003) — follow symlinked skill directories.
- [#970](https://github.com/nullclaw/nullclaw/pull/970) — allocation-free interactive REPL line editor.

**Prediction:** If maintainers begin merging, the next version could plausibly focus on memory recall controls, streaming native tool support, agent loop hygiene, skills ergonomics, and a broad channel-stability hardening pass. No release cadence can be inferred from this snapshot.

## 7. User Feedback Summary
There is no direct user feedback in this dataset: zero issues, zero comments, and zero reactions. Inferred pain points from PR summaries include:
- Gateway and channel instability: Discord stalls, HTTPS worker crashes, self-reply loops.
- Platform-specific networking: Android/Termux DNS resolution.
- CLI usability: arrow keys, corrupted streamed stdout.
- Memory correctness: archive shards leaking into live turns.
- Observability: provider error bodies hidden on non-2xx responses.
- Documentation gaps: diagnostics flags, index rendering, subsystem guides, provider/channel setup.

Satisfaction/dissatisfaction cannot be measured from the provided data.

## 8. Backlog Watch
The oldest open PRs, all updated 2026-10-03 but still unmerged, deserve maintainer attention:
- [#953](https://github.com/nullclaw/nullclaw/pull/953) — created 2026-06-12 (~114 days open) — Discord gateway socket recovery.
- [#954](https://github.com/nullclaw/nullclaw/pull/954) — created 2026-06-13 (~113 days open) — outbound ownership on allocation failures.
- [#959](https://github.com/nullclaw/nullclaw/pull/959) — created 2026-06-16 (~110 days open) — scoped scheduler credential persistence.
- [#962](https://github.com/nullclaw/nullclaw/pull/962) — created 2026-06-18 (~108 days open) — Anthropic provider setup hardening.
- [#963](https://github.com/nullclaw/nullclaw/pull/963) — created 2026-06-18 (~108 days open) — Weixin iLink QR auth.
- [#966](https://github.com/nullclaw/nullclaw/pull/966) — created 2026-06-19 (~107 days open) — Android curl fallback.
- [#970](https://github.com/nullclaw/nullclaw/pull/970) and [#971](https://github.com/nullclaw/nullclaw/pull/971) — created 2026-06-29 (~97 days open) — REPL arrow keys and native streaming tools.

The main risk signal is a review/merge bottleneck: 20 open PRs, many months old, no merges today, no comments/reactions, and a single author across the queue.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

## 1. Today's Overview

The IronClaw repository shows very low activity for 2026-10-04: one issue was updated in the last 24 hours, with no pull request activity and no new releases. The only active item is open issue [#8122](https://github.com/nearai/ironclaw/issues/8122), a macOS `local-dev` failure where `ironclaw serve` cannot read credentials for the `web-app` extension and returns `BackendUnavailable`. Because there are no merged or closed PRs, no feature work or fixes advanced today. The issue reports that `ironclaw doctor` passes 8/8, suggesting a gap between health checks and runtime credential backend readiness. Overall project health is quiet but blocked on a potentially high-impact local-development bug awaiting triage.

## 3. Project Progress

No merged or closed PRs today. PR activity for the last 24 hours is 0 open, 0 merged/closed, and 0 updated. No features advanced and no fixes landed.

## 4. Community Hot Topics

Only one item is active: [#8122](https://github.com/nearai/ironclaw/issues/8122) — “ironclaw serve fails with credential read failed: BackendUnavailable for extension web-app on macOS (local-dev profile).” It has 0 comments and 0 reactions, so it is not a hot discussion by engagement metrics, but it is the sole community item in the reporting window. Underlying need: reliable credential backend behavior for local development on macOS, plus clearer diagnostics when a required extension backend is unavailable.

## 5. Bugs & Stability

**High severity — [#8122](https://github.com/nearai/ironclaw/issues/8122):** `ironclaw serve` fails on macOS Apple Silicon with `credential read failed: BackendUnavailable` for the `web-app` extension under the `local-dev` profile. The reporter used IronClaw 1.4.1 from the official installer and reproduced the same error on 1.4.0 built via `cargo install --path`. Notably, `ironclaw doctor` passes 8/8, indicating the failure is not caught by current health checks. No fix PR exists in the provided data.

## 6. Feature Requests & Roadmap Signals

No explicit feature requests were submitted in the reporting window. The main roadmap signal comes from [#8122](https://github.com/nearai/ironclaw/issues/8122): improved macOS local-dev credential backend support, better fallback behavior for `BackendUnavailable`, and expanded `doctor` coverage for extension credential backends. This is most likely a patch-level fix for the next 1.4.x release rather than a feature release.

## 7. User Feedback Summary

The real user pain point is a blocked local development workflow: `ironclaw serve` is unusable on macOS despite a clean `doctor` result. The user appears to have made reasonable attempts to isolate the issue, including testing both the official 1.4.1 release and a 1.4.0 cargo build. Dissatisfaction is implied by the failure and the discrepancy between passing health checks and runtime failure. No positive feedback or satisfaction data is present in the reporting window.

## 8. Backlog Watch

[#8122](https://github.com/nearai/ironclaw/issues/8122) is new, created 2026-10-03, so it is not yet long-unanswered. However, it has 0 comments and no maintainer response in the provided data, and it blocks local-dev usage on macOS. It warrants maintainer triage because the `doctor` pass/fail mismatch may affect other users and obscure the root cause.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-10-04

## 1. Today's Overview
As of 2026-10-04, LobsterAI shows low activity: 6 open issues and 1 open PR were updated in the last 24 hours, with 0 issues closed, 0 PRs merged/closed, and 0 new releases. All six issues carry the `[stale]` label and were originally created in March 2026, so the recent updates likely reflect stale-bot activity rather than fresh community discussion. Engagement is minimal: no issue has more than 2 comments, and every issue/PR shows 0 reactions. The only open PR (#2374) is a UI customization change and has not shipped. Overall project health in this window is best described as stalled/backlog-heavy, with unresolved bugs and user support questions awaiting maintainer action.

## 2. Releases
None in the reporting window.

## 3. Project Progress
- Merged/closed PRs today: **0**.
- Open PR updated: [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374) — `feat: add permanent setting to hide sidebar ad banner` by bunnysayzz. It adds a **Settings → General** toggle to permanently hide the sidebar ad banner and references issue [#2342](https://github.com/netease-youdao/LobsterAI/issues/2342). Status: open, not merged; no user-facing feature shipped today.
- No issue closures today, so no bug fixes or feature completions were recorded.

## 4. Community Hot Topics
Most active items by comments:

| Item | Type | Comments | Reactions | Updated | Link |
|---|---|---:|---:|---|---|
| #884 | Issue | 2 | 0 | 2026-10-03 | [Account login & paid booster pack questions](https://github.com/netease-youdao/LobsterAI/issues/884) |
| #885 | Issue | 2 | 0 | 2026-10-03 | [WeChat link unavailable](https://github.com/netease-youdao/LobsterAI/issues/885) |
| #867 | Issue | 1 | 0 | 2026-10-03 | [Transaction inconsistency in `autoDeleteNonPersonalMemories()`](https://github.com/netease-youdao/LobsterAI/issues/867) |
| #873 | Issue | 1 | 0 | 2026-10-03 | [EARS PRD conversion + `git worktree` skill](https://github.com/netease-youdao/LobsterAI/issues/873) |
| #879 | Issue | 1 | 0 | 2026-10-03 | [SQLite foreign key/cascade bug](https://github.com/netease-youdao/LobsterAI/issues/879) |
| #883 | Issue | 1 | 0 | 2026-10-03 | [Windows slash commands broken](https://github.com/netease-youdao/LobsterAI/issues/883) |
| #2374 | PR | n/a | 0 | 2026-10-03 | [Hide sidebar ad banner setting](https://github.com/netease-youdao/LobsterAI/pull/2374) |

**Underlying needs:**
- **#884** reveals onboarding/billing confusion: users do not understand logged-in vs logged-out differences, booster-pack credit usage, or how paid credits interact with self-configured models.
- **#885** indicates a broken WeChat link, a distribution/access pain point.
- **#2374** reflects demand for persistent UI controls and less intrusive ads.
- Overall, hot-topic volume is very low; no item has strong community traction.

## 5. Bugs & Stability
Ranked by severity:

1. **High — [#879](https://github.com/netease-youdao/LobsterAI/issues/879):** `sql.js`/SQLite foreign keys are not enabled; `ON DELETE CASCADE` is declared but not enforced, so deleting a session does not delete related `messages`, causing database growth. **No fix PR exists.**
2. **High — [#883](https://github.com/netease-youdao/LobsterAI/issues/883):** Windows desktop client all slash commands (`/status`, `/reasoning`, `/help`, `/commands`, `/whoami`, `/think`, etc.) are completely non-functional. **No fix PR exists.**
3. **Medium-High — [#867](https://github.com/netease-youdao/LobsterAI/issues/867):** Transaction inconsistency in `autoDeleteNonPersonalMemories()`. **No fix PR exists.**
4. **Medium — [#885](https://github.com/netease-youdao/LobsterAI/issues/885):** WeChat link unavailable. **No fix PR exists.**
5. **Low-Medium — [#884](https://github.com/netease-youdao/LobsterAI/issues/884):** Account login and paid booster pack questions; not a crash, but indicates a UX/docs gap.

No fix PRs exist for these bugs; the only open PR (#2374) is unrelated UI ad-banner work.

## 6. Feature Requests & Roadmap Signals
- [#873](https://github.com/netease-youdao/LobsterAI/issues/873): Convert product PRDs using EARS principles for AI spec input, and add a `git worktree` skill for R&D workflows. This is the clearest roadmap-style request.
- [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374): Permanent setting to hide sidebar ad banner; likely candidate for a settings/UI polish release.
- [#884](https://github.com/netease-youdao/LobsterAI/issues/884): Requests/clarifications around paid booster packs, account modes, and model configuration could signal need for billing/docs UX.

**Prediction:** If maintainers prioritize, low-risk UI settings (#2374) and workflow/skill additions (#873) are the most likely near-term candidates. However, no release or milestone data confirms scheduling.

## 7. User Feedback Summary
- **Pain points:** unclear login/guest feature differences; uncertainty about paid booster-pack credits and their relationship to self-configured models; broken WeChat link; Windows slash commands completely unusable; database bloat after session deletion; transaction consistency in memory cleanup.
- **Use cases:** desktop chat commands, session/message lifecycle management, product-spec generation, developer workflows (`git worktree`), and UI ad-banner control.
- **Satisfaction/dissatisfaction:** No positive feedback appears in the dataset. Multiple reports describe broken core functionality or blocking access. Low comment/reaction counts suggest either a small active user base or low engagement with stale issues.

## 8. Backlog Watch
Long-unanswered or stale items needing maintainer attention:

- [#879](https://github.com/netease-youdao/LobsterAI/issues/879): open since 2026-03-25, updated 2026-10-03, 1 comment, stale. High-severity DB integrity/storage issue.
- [#883](https://github.com/netease-youdao/LobsterAI/issues/883): open since 2026-03-25, updated 2026-10-03, 1 comment, stale. High-severity Windows slash-command failure.
- [#867](https://github.com/netease-youdao/LobsterAI/issues/867): open since 2026-03-25, updated 2026-10-03, 1 comment, stale. Transaction consistency bug.
- [#885](https://github.com/netease-youdao/LobsterAI/issues/885): open since 2026-03-26, updated 2026-10-03, 2 comments, stale. Broken WeChat link.
- [#884](https://github.com/netease-youdao/LobsterAI/issues/884): open since 2026-03-25, updated 2026-10-03, 2 comments, stale. Account/payment confusion.
- [#873](https://github.com/netease-youdao/LobsterAI/issues/873): open since 2026-03-25, updated 2026-10-03, 1 comment, stale. Feature request.
- [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374): PR open since 2026-07-21, updated 2026-10-03, comments not provided. Needs review/merge decision.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>



Here is the structured project digest for **CoPaw (QwenPaw)** as of **2026-10-04**, based on the GitHub activity up to October 3, 2026.

---

### 1. Today's Overview
The project exhibits high development and community activity, characterized by a significant influx of critical bug reports alongside a robust batch of 10 active pull requests. While no new releases were published in the last 24 hours, the repository is focusing heavily on stabilizing core features—specifically multi-modal input handling, provider integrations (OpenAI/GPT-6), and console UI/UX fixes. Community sentiment highlights strong demand for better session history persistence and mobile console compatibility, indicating that the upcoming release cycle will likely prioritize stability patches and mobile responsiveness.

---

### 2. Releases
*   **New Releases (Last 24h):** None. 
*   *Note:* The project remains on the previous stable version, but a dense queue of open PRs targeting critical provider and console fixes suggests an imminent patch release once they pass review.

---

### 3. Project Progress
No PRs were merged in the last 24 hours, but the 10 open PRs show active, focused development across several key areas:
*   **Provider Compatibility:** PR #8090 targets GPT token limit parameters for newer models, and PR #8096 addresses truncated response metadata (`finish_reason="length"`).
*   **Agent & Session Logic:** PR #8098 improves foreground chat timeout handling, PR #8095 fixes user attribution for cross-session messages, and PR #7004 (first-time contributor) aims to persist parent-child agent linkage in chat metadata.
*   **Console UI/UX:** PR #8091 fixes sidebar session tracking, PR #8089 secures terminal identity over LAN HTTP, and PR #8086 (first-time contributor) refactors settings navigation into a mobile-friendly drawer.
*   **Qoder Integration:** PR #8099 enables custom providers and context usage settings for Qoder agents.

---

### 4. Community Hot Topics
The most active issues center on session continuity, platform compatibility, and UI responsiveness:
*   **[Issue #7884] History Compression & Loading (8 comments):** Users report that after frontend refresh, historical chat logs cannot be fully loaded due to backend compression limits. This represents a critical pain point for long-running sessions.
    *   *Link:* [agentscope-ai/QwenPaw Issue #7884](https://github.com/agentscope-ai/QwenPaw/issues/7884)
*   **[Issue #6281] Mobile Console Adaptation (6 comments):** Users are requesting a mobile-optimized layout for the web console to facilitate agent management on the go.
    *   *Link:* [agentscope-ai/QwenPaw Issue #6281](https://github.com/agentscope-ai/QwenPaw/issues/6281)
*   **[Issue #7661] New Session Creation Bug (5 comments):** Users report a state desync where clicking "New Task" duplicates sidebar sessions instead of continuing the active thread.
    *   *Link:* [agentscope-ai/QwenPaw Issue #7661](https://github.com/agentscope-ai/QwenPaw/issues/7661)

---

### 5. Bugs & Stability
Several critical bugs were reported today, ranked by severity and user impact:
1.  **CRITICAL: Console Boot Block (Issue #8094):** The boot splash screen has no retry mechanism or error surface; a stale WebView2 cache after an update can permanently block the application from starting.
    *   *Link:* [Issue #8094](https://github.com/agentscope-ai/QwenPaw/issues/8094)
2.  **HIGH: Multimodal Input Blocked (Issue #8093):** The runtime explicitly blocks image inputs for models identified as multimodal by the catalog/prober (e.g., `mimo-v2.6-flash`, `glm-5.3-flash`), breaking visual workflows.
    *   *Link:* [Issue #8093](https://github.com/agentscope-ai/QwenPaw/issues/8093)
3.  **HIGH: OpenAI Provider 400 Errors (Issue #8074):** Connection tests fail with HTTP 400 for GPT-6 family models because the `_uses_max_completion_tokens` whitelist only matches `gpt-5*` / `o<digit>*`. (Mitigation is being drafted in PR #8090).
    *   *Link:* [Issue #8074](https://github.com/agentscope-ai/QwenPaw/issues/8074)
4.  **MEDIUM: Image Processing Infinite Loop (Issue #8088):** When an image is routed to `chat_with_image`, the sub-agent falls into a brute-force Bash + PIL cropping loop, hanging the terminal and silently cancelling the task.
    *   *Link:* [Issue #8088](https://github.com/agentscope-ai/QwenPaw/issues/8088)
5.  **MEDIUM: Content Inspection False Positives (Issue #8092):** Benign Telegram DevOps conversations are flagged as `data_inspection_failed` by Ali-style gateways, killing the turn with no retry or fallback.
    *   *Link:* [Issue #8092](https://github.com/agentscope-ai/QwenPaw/issues/8092)

---

### 6. Feature Requests

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-10-04

## 1. Today's Overview
ZeroClaw shows high activity for 2026-10-04: **50 issues** and **50 PRs** were updated in the last 24 hours, with **43 issues still open/active** and **48 PRs open**. However, only **7 issues closed** and **2 PRs merged/closed**, and there were **0 new releases**, so update volume significantly outpaced merge/close throughput. The activity is concentrated in runtime reliability, security, CI, provider transport, and ZeroCode/config UX. Several high-severity bugs remain open, including an S0 memory-isolation issue and multiple S1 workflow blockers. At the same time, many fix PRs are in flight, suggesting maintainers are actively working stability rather than shipping a release.

## 2. Releases
No new releases in the last 24 hours. No breaking changes, migration notes, or release artifacts to report.

## 3. Project Progress
**Closed issues today (visible in top-30 sample):**
- [#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108) — CI cached Rust builds and critical path improvement.
- [#10734](https://github.com/zeroclaw-labs/zeroclaw/issues/10734) — RPC dispatcher stack-guard/Windows nextest overflow.
- [#11387](https://github.com/zeroclaw-labs/zeroclaw/issues/11387) — ZeroCode launch-directory/cwd regression.
- [#10701](https://github.com/zeroclaw-labs/zeroclaw/issues/10701) — image attachment history-cache prefix invalidation.
- [#10662](https://github.com/zeroclaw-labs/zeroclaw/issues/10662) — Anthropic OAuth system-prefix cache marker.
- [#10293](https://github.com/zeroclaw-labs/zeroclaw/issues/10293) — `sessions_send` lifecycle semantics.

These closures indicate progress in CI performance, runtime stack safety, ZeroCode cwd behavior, provider caching, and session lifecycle cleanup.

**PRs advanced today (open):**
- [#11516](https://github.com/zeroclaw-labs/zeroclaw/pull/11516) — effort-aware local/cloud routing.
- [#11514](https://github.com/zeroclaw-labs/zeroclaw/pull/11514) — Slack working status in channel threads.
- [#11513](https://github.com/zeroclaw-labs/zeroclaw/pull/11513) — ZeroCode focused runtime context.
- [#11512](https://github.com/zeroclaw-labs/zeroclaw/pull/11512) — bounded skill HTTP calls with one deadline.
- [#11508](https://github.com/zeroclaw-labs/zeroclaw/pull/11508), [#11511](https://github.com/zeroclaw-labs/zeroclaw/pull/11511), [#11510](https://github.com/zeroclaw-labs/zeroclaw/pull/11510), [#11506](https://github.com/zeroclaw-labs/zeroclaw/pull/11506), [#11505](https://github.com/zeroclaw-labs/zeroclaw/pull/11505), [#11504](https://github.com/zeroclaw-labs/zeroclaw/pull/11504) — ZeroCode Config UX/status improvements.
- [#11463](https://github.com/zeroclaw-labs/zeroclaw/pull/11463) — pre-write metadata reporting.
- [#11507](https://github.com/zeroclaw-labs/zeroclaw/pull/11507) — bounded repeated tool failures.

**Merged/closed PRs:** 2 total, but neither appears in the top-20 PR sample, so specific details are unavailable.

## 4. Community Hot Topics
The most active items are issue-driven; PR comment counts are not provided in the dataset.

| Item | Comments | Why it matters |
|---|---:|---|
| [#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965) — harden runtime-written executable test fixtures | 13 | Test-infra reliability under the parallel runtime gate. |
| [#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108) — improve cached Rust builds/CI | 9 | CI is still a major developer pain point. |
| [#10734](https://github.com/zeroclaw-labs/zeroclaw/issues/10734) — RPC dispatcher near stack guard | 8 | Runtime stack safety and Windows CI stability. |
| [#9799](https://github.com/zeroclaw-labs/zeroclaw/issues/9799) — daemon sustained multi-core CPU spin | 7 | Long-lived daemon reliability and observability. |
| [#6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105) — agent lacks cron-job context | 6 | User-facing agent memory/context correctness. |
| [#11387](https://github.com/zeroclaw-labs/zeroclaw/issues/11387) — ZeroCode ignores launch directory | 5 | Repeated regression in core CLI/TUI UX. |
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) — runtime/gateway delivery tracker | 5 | Tracks v0.8.6 and v0.9.0 architecture work. |

**Underlying needs:** maintainers are prioritizing runtime/test reliability, CI speed, and daemon observability; users are pushing on agent context correctness, ZeroCode workspace behavior, and predictable release quality.

## 5. Bugs & Stability
Ranked by severity from the provided data:

- **S0 — [#11239](https://github.com/zeroclaw-labs/zeroclaw/issues/11239)** — owned sessions can reach the shared memory plane through `spawn_subagent` and `execute_pipeline`. Data-loss/security risk. No fix PR listed.
- **S1 — [#10536](https://github.com/zeroclaw-labs/zeroclaw/issues/10536)** — macOS Seatbelt ignores configured `allowed_roots` for shell commands. No fix PR listed.
- **S1 — [#10225](https://github.com/zeroclaw-labs/zeroclaw/issues/10225)** — ZeroCode RPC sessions cannot reach configured channels through channel-backed tools. No fix PR listed.
- **S1 — [#10673](https://github.com/zeroclaw-labs/zeroclaw/issues/10673)** — failed ACP turns are not persisted on the daemon RPC path. No fix PR listed.
- **P1 — [#11478](https://github.com/zeroclaw-labs/zeroclaw/issues/11478)** — images >64KB are silently truncated mid-file in provider requests. No fix PR listed.
- **P1 — [#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420)** — SQLite session backend rewrites `created_at` for every message each turn. No fix PR listed.
- **P1 — [#9799](https://github.com/zeroclaw-labs/zeroclaw/issues/9799)** — long-lived ephemeral daemon can enter sustained multi-core CPU spin. No fix PR listed.
- **P1 — [#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965)** — runtime-written executable test fixtures under parallel runtime gate. In progress.
- **P2 — [#11416](https://github.com/zeroclaw-labs/zeroclaw/issues/11416)** — Slack “is thinking…” status missing in channel threads since v0.8.5. Fix PR: [#11514](https://github.com/zeroclaw-labs/zeroclaw/pull/11514).
- **Closed today:** [#10734](https://github.com/zeroclaw-labs/zeroclaw/issues/10734) Windows stack overflow, [#11387](https://github.com/zeroclaw-labs/zeroclaw/issues/11387) ZeroCode cwd regression, [#10701](https://github.com/zeroclaw-labs/zeroclaw/issues/10701) image cache invalidation, [#10662](https://github.com/zeroclaw-labs/zeroclaw/issues/10662) Anthropic cache marker.

**Assessment:** stability remains the dominant theme. The most serious open items lack visible fix PRs, while several P2/provider/ZeroCode issues already have targeted PRs.

## 6. Feature Requests & Roadmap Signals
- [#7951](https://github.com/zeroclaw-labs/zeroclaw/issues/7951) — effort-based local/cloud model routing; implemented by open PR [#11516](https://github.com/zeroclaw-labs/zeroclaw/pull/11516). Likely v0.9.0+.
- [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) — runtime/gateway delivery tracker for v0.8.6 and v0.9.0.
- [#11002](https://github.com/zeroclaw-labs/zeroclaw/issues/11002) — ship `zeroclaw-gw` as a standalone IPC client; blocked, targeted at v0.9.0.
- [#8310](https://github.com/zeroclaw-labs/zeroclaw/issues/8310) — Schema V4 breaking cut to remove dead/inert config surface.
- [#10892](https://github.com/zeroclaw-labs/zeroclaw/issues/10892) — canonical config generations and per-target apply results.
- [#8766](https://github.com/zeroclaw-labs/zeroclaw/issues/8766) — user-behavior E2E coverage for first-run setup.
- [#8763](https://github.com/zeroclaw-labs/zeroclaw/issues/8763) — ZeroCode subagent activity and expandable tool results.
- [#8383](https://github.com/zeroclaw-labs/zeroclaw/issues/8383) — active runtime context in ZeroCode Dashboard.
- [#10550](https://github.com/zeroclaw-labs/zeroclaw/issues/10550) — bound skill HTTP DNS resolution; PR [#11512](https://github.com/zeroclaw-labs/zeroclaw/pull/11512).
- [#10766](https://github.com/zeroclaw-labs/zeroclaw/issues/10766) and [#10767](https://github.com/zeroclaw-labs/zeroclaw/issues/10767) — ZeroRelay authenticated principal and frontdoor hardening.

**Prediction:** v0.8.6 is likely to focus on Slack status restoration, ZeroCode config/context UX, ACP turn persistence, and config apply visibility. v0.9.0 remains the target for gateway separation, ZeroRelay auth hardening, effort-based routing, and possibly Schema V4.

## 7. User Feedback Summary
Real user pain points are concentrated in correctness, regressions, and silent data/UX failures:
- Cron agents lack context of their own scheduled messages ([#6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105)).
- ZeroCode again ignores its launch directory ([#11387](https://github.com/zeroclaw-labs/zeroclaw/issues/11387)).
- Slack channel threads lost “is thinking…” status since v0.8.5 ([#11416](https://github.com/zeroclaw-labs/zeroclaw/issues/11416)).
- Large images are silently truncated before reaching the model ([#11478](https://github.com/zeroclaw-labs/zeroclaw/issues/11478)).
- SQLite session history loses per-message timestamps ([#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420)).
- macOS sandbox policy does not apply to shell commands ([#10536](https://github.com/zeroclaw-labs/zeroclaw/issues/10536)).
- Daemon CPU spin and cost attribution gaps reduce operational trust ([#9799](https://github.com/zeroclaw-labs/zeroclaw/issues/9799), [#10700](https://github.com/zeroclaw-labs/zeroclaw/issues/10700)).

Satisfaction signals are mixed: users are filing reproducible, actionable reports, and maintainers are accepting/in-progressing many of them, but repeated regressions and unresolved S0/S1 bugs are likely eroding confidence.

## 8. Backlog Watch
Important long-running or high-severity items needing maintainer attention:
- [#11239](https://github.com/zeroclaw-labs/zeroclaw/issues/11239) — S0 memory-plane isolation issue; only 1 comment despite severe impact.
- [#10536](https://github.com/zeroclaw-labs/zeroclaw/issues/10536) — S1 macOS Seatbelt `allowed_roots` bypass.
- [#10225](https://github.com/zeroclaw-labs/zeroclaw/issues/10225) — S1 ZeroCode RPC channel-tool blocker.
- [#10673](https://github.com/zeroclaw-labs/zeroclaw/issues/10673) — S1 ACP failed-turn persistence gap.
- [#6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105) — open since April, still in progress, user-visible cron context bug.
- [#7951](https://github.com/zeroclaw-labs/zeroclaw/issues/7951) — parked effort-routing feature; now has PR momentum.
- [#8310](https://github.com/zeroclaw-labs/zeroclaw/issues/8310) — Schema V4 breaking cut; needs coordinated migration planning.
- [#11002](https://github.com/zeroclaw-labs/zeroclaw/issues/11002) — blocked gateway-separation work targeted at v0.9.0.
- [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) — long-running v0.8.6/v0.9.0 runtime/gateway tracker.
- [#11425](https://github.com/zeroclaw-labs/zeroclaw/issues/11425) — Windows file-replacement/path-handling batch tracker; new but groups 10 open PRs.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*