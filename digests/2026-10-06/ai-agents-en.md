# OpenClaw Ecosystem Digest 2026-10-06

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-10-05 22:15 UTC

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

# OpenClaw Project Digest — 2026-10-06

## 1. Today's Overview

OpenClaw shows heavy activity with 500 issues and 500 PRs updated in the last 24 hours. One new beta release (v2026.10.1-beta.1) shipped focusing on sessions, memory, and embedding cache migrations. The project is in active development with a strong throughput on refactor and perf PRs, but stability remains under pressure from multiple P0 crash-loop and update-failure issues, particularly around SQLite WAL growth, memory leaks, and Windows update handoff failures.

## 2. Releases

**v2026.10.1-beta.1** ([release notes](#))
- Preserved session usage across registry changes
- Delivered worker attachments from remote workspaces
- Fixed queued cancellations and transcript aliases stalling active turns
- Aligned continuation signatures; migrated embedding caches
- *No explicit breaking changes noted; beta channel*

## 3. Project Progress

**Key PRs merged/closed:**
- `#165825` — Retire experimental `openclaw fleet` command ([PR #165825](https://github.com/openclaw/openclaw/pull/165825))
- `#165804` — Deslop UI/package/plugin type contracts ([PR #165804](https://github.com/openclaw/openclaw/pull/165804))
- `#165785` — Move Goal management into agent executor ([PR #165785](https://github.com/openclaw/openclaw/pull/165785))
- `#165764` — Persist channel feedback through transcript workers ([PR #165764](https://github.com/openclaw/openclaw/pull/165764))
- `#165799` — Move board session admission to workers ([PR #165799](https://github.com/openclaw/openclaw/pull/165799))
- `#165164` — Fix later senders overtaking buffered messages ([PR #165164](https://github.com/openclaw/openclaw/pull/165164))
- `#159232` — Fix first-image-turn memory/latency spike ([PR #159232](https://github.com/openclaw/openclaw/pull/159232))
- `#158902` — Define worker-local inference contracts ([PR #158902](https://github.com/openclaw/openclaw/pull/158902))

**Major active work:**
- `#163645` — Native inference runtime (XL, security-sensitive, needs proof) ([PR #163645](https://github.com/openclaw/openclaw/pull/163645))
- `#165684` — Bulk registry work off Gateway thread ([PR #165684](https://github.com/openclaw/openclaw/pull/165684))

## 4. Community Hot Topics

| Issue | Comments | Severity | Topic |
|-------|----------|----------|-------|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | 108 | P0 | SQLite WAL grows to 2.8 GB, blocks gateway startup (Windows) |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | 23 | P1 | Gateway event loop blocked by synchronous persistence at scale |
| [#139710](https://github.com/openclaw/openclaw/issues/139710) | 21 | P1 | Plugin hot-reload kills system-agent turn + planner fallback |
| [#126360](https://github.com/openclaw/openclaw/issues/126360) | 20 | P1 | AgentSelectionRequiredError floods logs (multi-agent ownership) |
| [#150635](https://github.com/openclaw/openclaw/issues/150635) | 18 | P1 | Dreaming deep phase never promotes; recall eviction bug |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 17 | P1 | Zombie child process accumulation from hooks/tools |
| [#161976](https://github.com/openclaw/openclaw/issues/161976) | 17 | P1 | WhatsApp DM replies fail after registry handoff/restart |

**Analysis:** Users are primarily frustrated by data corruption/loss risks (WAL growth, WhatsApp delivery failures, memory leaks) and update reliability. The high comment counts on stability issues indicate these are blocking real workflows.

## 5. Bugs & Stability (Ranked by Severity)

**P0 — Release blockers:**
1. [#143524](https://github.com/openclaw/openclaw/issues/143524) — SQLite WAL unbounded growth (Windows), 108 comments, no fix PR yet
2. [#159662](https://github.com/openclaw/openclaw/issues/159662) — `prepared-model-catalog.worker.js` leaks 4–5 GB/h, 16 comments
3. [#164074](https://github.com/openclaw/openclaw/issues/164074) — Update recovery stuck at publication-complete, 10 comments
4. [#146860](https://github.com/openclaw/openclaw/issues/146860) — Windows Scheduled Task LogonType InteractiveToken handoff stall, 10 comments
5. [#146887](https://github.com/openclaw/openclaw/issues/146887) — 2026.9.3→9.4 update fails 4-stage cascade, 9 comments
6. [#164396](https://github.com/openclaw/openclaw/issues/164396) — 2026.9.8 refuses local gateway connection (Win+Node 22), 7 comments

**P1 — High impact:**
- [#119720](https://github.com/openclaw/openclaw/issues/119720) — Event loop blocking at scale (23 comments)
- [#139710](https://github.com/openclaw/openclaw/issues/139710) — Plugin supersede kills agent turn (21 comments)
- [#126360](https://github.com/openclaw/openclaw/issues/126360) — AgentSelectionRequiredError flood (20 comments)
- [#97616](https://github.com/openclaw/openclaw/issues/97616) — Zombie process leak (17 comments)
- [#157989](https://github.com/openclaw/openclaw/issues/157989) — Plugin capture rewrites 6.5 GB/Gateway start, SSD wear (12 comments)

*Fix PRs exist for some (e.g., #159232 image memory fix merged); most P0s still need maintainer action.*

## 6. Feature Requests & Roadmap Signals

- [#51441](https://github.com/openclaw/openclaw/issues/51441) — Expose resolved backend model in session_status (P2, 9 comments, old)
- [#165685](https://github.com/openclaw/openclaw/issues/165685) — Machine-readable reason on registry-settled collector (P3, created 2026-10-05, fresh)
- [#114146](https://github.com/openclaw/openclaw/issues/114146) — `talk.realtime.providers.<id>.baseUrl` for OpenAI-compatible endpoints (P3, 6 comments)
- [#70266](https://github.com/openclaw/openclaw/issues/70266) — Assistant avatar in macOS Talk Mode overlay (P3, 5 comments)
- [#46058](https://github.com/openclaw/openclaw/issues/46058) — Chat-first Android surface exploration (P3, 6 comments)

**Prediction:** Worker-native inference (#163645) and session/Goal refactors suggest next version will focus on performance and modularity; Android and realtime baseUrl are longer-tail.

## 7. User Feedback Summary

**Pain points:**
- Update/upgrade reliability is a recurring nightmare (multiple P0 update failures across platforms)
- Memory leaks and SQLite growth cause real data loss/stallage
- Multi-agent ownership and auth resolution are confusing and error-prone
- Plugin system causes SSD wear and gateway stalls
- Channel delivery (WhatsApp, Matrix bursts) loses messages or creates duplicate turns

**Positive signals:**
- Active perf and refactor PRs show maintainer responsiveness to architecture debt
- Worker-offload strategy (PRs #165684, #165799, #165785) addresses core event-loop concerns
- Community provides detailed reproduction steps and incident traces

## 8. Backlog Watch

**Long-unanswered, high-severity items needing maintainer attention:**

| Issue | Age | Comments | Why it matters |
|-------|-----|----------|----------------|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | 27 days | 108 | P0 crash-loop, Windows users blocked |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | 62 days | 23 | P1 event loop blocking at scale, partial fixes landed but incomplete |
| [#87561](https://github.com/openclaw/openclaw/issues/87561) | 131 days | 12 | P1 durable final fallback delivery semantics — foundational gap |
| [#51441](https://github.com/openclaw/openclaw/issues/51441) | 199 days | 9 | P2 backend model visibility — blocked by proxy/Router users |
| [#50677](https://github.com/openclaw/openclaw/issues/50677) | 201 days | 5 | P2 skills silently truncated — UX friction for power users |
| [#46058](https://github.com/openclaw/openclaw/issues/46058) | 206 days | 6 | P3 Android exploration — community investment, needs triage decision |

**Stale PRs awaiting author:**
- [#113824](https://github.com/openclaw/openclaw/pull/113824) — TaskFlow provenance fix (waiting on author, Jul 25)
- [#117360](https://github.com/openclaw/openclaw/pull/117360) — CLI TaskFlow options (waiting on author, Aug 1)
- [#117605](https://github.com/openclaw/openclaw/pull/117605) — Task cancellation fail-closed (waiting on author, Aug 1)

---

**Overall health:** Active development velocity with strong refactor momentum, but stability debt (P0 SQLite WAL, memory leaks, update failures) is accumulating faster than it's being resolved. The 108-comment WAL issue is the single biggest community concern.

---

## Cross-Ecosystem Comparison

The user wants a cross-project comparison report based on the provided digests for 8 projects: OpenClaw, NanoBot, Hermes Agent, PicoClaw, NanoClaw, NullClaw, IronClaw, LobsterAI, TinyClaw, Moltis, CoPaw (QwenPaw), ZeptoClaw, ZeroClaw. Wait, let me count: OpenClaw, NanoBot, Hermes Agent, PicoClaw, NanoClaw, NullClaw, IronClaw, LobsterAI, TinyClaw, Moltis, CoPaw, ZeptoClaw, ZeroClaw. That's 13 projects.

I need to extract data for each:
- OpenClaw: 500 issues, 500 PRs, beta release v2026.10.1-beta.1, heavy activity, stability issues P0 SQLite WAL, memory leaks. Health: active development, stability debt.
- NanoBot: 28 PRs updated (21 open, 7 merged/closed), 7 issues updated (6 open, 1 closed). No releases. High throughput but review load. Health: active.
- Hermes Agent: 50 issues, 50 PRs updated. No releases. High maintenance velocity, bug triage, 34 issues closed. Health: active stabilization.
- PicoClaw: 5 issues, 3 PRs updated, stale tags, no releases, community fork #3398, security hygiene unanswered. Health: low/maintenance mode.
- NanoClaw: v2026.10.0-rc.2 shipped, 12 closed/merged vs 11 open. Sharp uptick in merged PRs. Active release-prep. Health: strong.
- NullClaw: 15 issues, 30 PRs updated. No release. Rapid iteration/fix-up phase after broken Docker image. Health: active but quality gaps.
- IronClaw: 2 issues, 1 PR updated, no releases, low activity. Health: stable maintenance.
- LobsterAI: 4 issues/PRs? Actually high-activity security hardening day, 4 pre-release security reports, 2 skills PRs closed. No new releases. Stale user-facing bugs from March. Health: active on security, stagnation on consumer issues.
- TinyClaw: No activity last 24h. Health: dormant.
- Moltis: 2 issues, 2 PRs updated, all authored by same contributor, no releases. Health: stable but low contributor diversity.
- CoPaw (QwenPaw): 43 issue updates (41 open), 25 PR updates. No releases. High velocity, pre-release stabilization. Health: active.
- ZeptoClaw: No activity last 24h. Health: dormant.
- ZeroClaw: 16 issues, 50 PRs touched, zero PR merges, 3 issues closed, 13 open with S0/S1 severity. No releases. Health: bottleneck in review.

Need to create:
1. Ecosystem Overview: 3-5 sentences.
2. Activity Comparison: Table with Issues count, PR count, Release status, Health score. I need to be careful with "Issues count" - the digests mention issues updated in last 24h, not total open issues. For OpenClaw "500 issues and 500 PRs updated in the last 24 hours". For Hermes "50 issues and 50 PRs updated". For NanoBot "28 PRs updated... 7 issues updated". For NullClaw "15 issues and 30 PRs updated". For IronClaw "2 issues and 1 PR updated". For ZeroClaw "16 issues, 50 PRs touched". For CoPaw "43 issue updates... 25 PR updates". For Moltis "2 issues and 2 PRs updated". For PicoClaw "5 issues and 3 PRs updated". For NanoClaw not explicitly stated in overview but mentions 12 closed/merged vs 11 open PRs, and issues updated not explicitly given in the same format. Actually NanoClaw overview says "sharp uptick in merged PRs (12 closed/merged vs. 11 still open)". It doesn't give issue update count. I should infer or note "not specified". For LobsterAI: "high-activity security-hardening day" but no explicit counts? It says 4 pre-release security reports (issues), 2 skills PRs closed, P2P fix merged. So maybe ~4 issues, ~4 PRs? I'll approximate from text: 4 issues filed, 4 PRs (2785, 2799, 2800, 2798/2794). Actually PRs merged/closed: #2785, #2799, #2800, plus #2794 and #2798 open. So maybe 3 closed, 2 open? But the prompt asks for table comparing Issues count, PR count - likely from the "updated in last 24h" metric like others. For LobsterAI it's not explicitly stated as "X issues updated". I'll use "4 issues (security reports), ~4 PRs" or mark as "N/A". For TinyClaw and ZeptoClaw: 0 activity.

Health score: I need to assign a score (e.g., 1-10 or qualitative). I'll use qualitative or numeric. Let's use a 1-10 scale based on activity and stability.

OpenClaw: 7/10 (high activity but P0 stability issues).
NanoBot: 7/10 (active, but review load).
Hermes Agent: 8/10 (high velocity, stabilization).
PicoClaw: 2/10 (stale, fork emerging).
NanoClaw: 8/10 (active release prep, strong).
NullClaw: 5/10 (rapid iteration but quality gaps, Docker issues).
IronClaw: 3/10 (low activity).
LobsterAI: 5/10 (security hardening active, but consumer issues stale).
TinyClaw: 1/10 (no activity).
Moltis: 3/10 (low contributor diversity).
CoPaw: 7/10 (high velocity, pre-release stabilization).
ZeptoClaw: 1/10 (no activity).
ZeroClaw: 4/10 (high PR volume but zero merges, bottleneck).

3. OpenClaw's Position: Advantages vs peers, technical approach differences, community size comparison.
Advantages: massive throughput (500 issues/PRs), broad channel support (WhatsApp, Matrix, etc.), memory/embedding cache migrations, fleet command retirement. Technical approach: worker-native inference, SQLite-based persistence, plugin system, multi-agent. Community size: clearly the largest by activity volume (500 issues/PRs vs dozens for others). Peers: NanoClaw, NanoBot, Hermes are smaller but more focused. OpenClaw is the "heavyweight" with the largest community and broadest feature set, but stability debt is highest.

4. Shared Technical Focus Areas: Requirements emerging across multiple projects.
- MCP transport/security: NanoBot (MCP streamable HTTP timeout, credential leakage, DNS pinning), NanoClaw (OneCLI, MCP skill), CoPaw (MCP 422), ZeroClaw (tool attachments explicit), LobsterAI (skills).
- Token usage/cost observability: NanoBot (#5266 token logging), NanoClaw (cost complaints, lean tasks), CoPaw (finish-reason truncation, token params).
- Scheduled tasks/cron correctness: NanoBot (#6070 cron), NullClaw (#1033 cron timeout), NanoClaw (#3223 silent task failures).
- WhatsApp/Telegram/Discord channel reliability: OpenClaw (WhatsApp DM failures), NanoClaw (WhatsApp linking), ZeroClaw (WhatsApp Web maturity), Moltis (Discord DM classification).
- Memory/performance at scale: OpenClaw (memory leaks, event loop blocking), NanoBot (XLSX, memory), ZeroClaw (session stuck), CoPaw (zombie entries).
- Security hardening: LobsterAI (OAuth tokens, path traversal), NanoBot (DNS pinning, credential logs), ZeroClaw (sandbox), NullClaw (symlink-safe archive).

5. Differentiation Analysis:
- OpenClaw: Full-featured, multi-channel, large community, worker-offload architecture, heavy on SQLite persistence, targeting power users/enterprise.
- NanoBot: API-first, token observability, WebUI polish, MCP focus, likely smaller scale.
- Hermes Agent: Skill-centric, Nexus memory (Qdrant), plugin quarantine, TUI/desktop focus.
- NanoClaw: Release-candidate rigor, channels branch sync, OneCLI skill ecosystem, macOS update reliability.
- NullClaw: Docker/container-first, cron-focused, CLI ergonomics, solo maintainer rapid fixes.
- IronClaw: Self-hosted WebChat, benchmark-driven (OfficeQA), low activity.
- LobsterAI: Security-first, skills marketplace, P2P policy, Windows/macOS desktop parity.
- CoPaw (QwenPaw): Provider-agnostic, DingTalk/WeCom integration, desktop sandbox, Chinese ecosystem.
- ZeroClaw: Sandbox stability, config safety, multi-channel (Teams, WhatsApp), architectural refactor (runtime composition).
- Moltis: Discord/Telegram focus, small team.
- PicoClaw: IRC/OpenAI providers, effectively abandoned upstream.
- TinyClaw/ZeptoClaw: Dormant.

6. Community Momentum & Maturity:
- Rapidly iterating: OpenClaw, NanoBot, Hermes Agent, NanoClaw, CoPaw.
- Stabilizing: LobsterAI (security fixes), NullClaw (fix-up phase).
- Maintenance mode: IronClaw, PicoClaw, Moltis.
- Dormant: TinyClaw, ZeptoClaw.
- Bottlenecked: ZeroClaw.

7. Trend Signals:
- MCP security and transport hardening (DNS pinning, credential leakage, timeout alignment).
- Token cost observability and lean task execution.
- Scheduled task reliability and failure observability.
- Multi-channel messaging resilience (WhatsApp, Telegram, Discord, DingTalk, Teams).
- Sandbox and container security (bubblewrap, firejail, root-owned volumes).
- Memory and SQLite stability at scale.
- Provider abstraction and fallback transparency.
- Desktop platform parity (Windows vs macOS).

Need to ensure data-backed and concise. Avoid hallucinating numbers not in text. For table, use the "updated in last 24h" counts as provided.

Let me verify each project's numbers:
- OpenClaw: Issues 500, PRs 500, Release: v2026.10.1-beta.1 (beta). Health: 7/10.
- NanoBot: Issues 7, PRs 28, Release: None. Health: 7/10.
- Hermes Agent: Issues 50, PRs 50, Release: None. Health: 8/10.
- PicoClaw: Issues 5, PRs 3, Release: None. Health: 2/10.
- NanoClaw: Issues not explicitly stated in 24h? Overview says "sharp uptick in merged PRs (12 closed/merged vs. 11 still open)". Issues updated not given. I'll put "N/A (12 merged PRs)" or similar. Release: v2026.10.0-rc.2. Health: 8/10.
- NullClaw: Issues 15, PRs 30, Release: None. Health: 5/10.
- IronClaw: Issues 2, PRs 1, Release: None. Health: 3/10.
- LobsterAI: Issues 4 (security reports), PRs: 2785 closed, 2799/2800 closed, 2798/2794 open = net maybe 3 updated? I'll put "4 issues, ~4 PRs". Release: None (latest v0.2.4). Health: 5/10.
- TinyClaw: 0, 0, None. Health: 1/10.
- Moltis: Issues 2, PRs 2, None. Health: 3/10.
- CoPaw: Issues 43, PRs 25, None (v2.2.2.beta4 referenced). Health: 7/10.
- ZeptoClaw: 0, 0, None. Health: 1/10.
- ZeroClaw: Issues 16, PRs 50, None. Health: 4/10.

Need to be careful with ZeroClaw: "16 issues, 50 PRs touched". Health 4/10 due to zero merges.

Now write sections.

Section 1 Ecosystem Overview: personal AI assistant/agent open-source landscape is fragmenting into specialized nodes (channels, memory, sandbox) with shared infra pressures (MCP, token cost, SQLite). Most projects are active but few have release discipline; stability debt is systemic.

Section 2 Activity Comparison table:
Project | Issues (24h) | PRs (24h) | Release Status | Health
OpenClaw | 500 | 500 | Beta v2026.10.1 | 7/10
NanoBot | 7 | 28 | None | 7/10
Hermes Agent | 50 | 50 | None | 8/10
PicoClaw | 5 | 3 | None | 2/10
NanoClaw | N/A | 12 merged | RC v2026.10.0-rc.2 | 8/10
NullClaw | 15 | 30 | None | 5/10
IronClaw | 2 | 1 | None | 3/10
LobsterAI | 4 | ~4 | None (v0.2.4) | 5/10
TinyClaw | 0 | 0 | None | 1/10
Moltis | 2 | 2 | None | 3/10
CoPaw | 43 | 25 | None (beta) | 7/10
ZeptoClaw | 0 | 0 | None | 1/10
ZeroClaw | 16 | 50 | None | 4/10

Section 3 OpenClaw's Position:
Advantages: Scale (500/500 throughput), breadth (channels, fleet, memory), worker-offload architecture. Technical approach: SQLite persistence, worker-local inference contracts, embedding cache migration. Community size: clearly largest by activity volume; peers like NanoClaw/NanoBot are an order of magnitude smaller. But stability debt (P0 WAL, memory leaks) is the price of scale.

Section 4 Shared Technical Focus Areas:
- MCP transport/security: NanoBot (timeout, cred leakage, DNS pinning), NanoClaw (OneCLI/MCP skills), CoPaw (MCP 422), ZeroClaw (explicit tool attachments).
- Token/cost observability: NanoBot (#5266), NanoClaw (lean tasks), CoPaw (truncation visibility).
- Cron/scheduled task reliability: NanoBot (#6070), NullClaw (#1033), NanoClaw (#3223).
- Messaging channel resilience: OpenClaw (WhatsApp/Matrix), NanoClaw (WhatsApp), ZeroClaw (WhatsApp Web), Moltis (Discord), CoPaw (DingTalk).
- Memory/performance at scale: OpenClaw (leaks, WAL), ZeroClaw (sandbox), CoPaw (zombie TaskTracker).
- Security hardening: LobsterAI (OAuth, path traversal), NanoBot (DNS pinning), NullClaw (symlink-safe archive), ZeroClaw (sandbox detection).

Section 5 Differentiation Analysis:
- OpenClaw: Generalist multi-channel agent platform, worker architecture, large community.
- NanoBot: API/observability focus, token diagnostics, WebUI.
- Hermes Agent: Skill catalog, Qdrant memory, desktop/TUI.
- NanoClaw: Release discipline, OneCLI skill ecosystem, macOS robustness.
- NullClaw: Container-first, cron-driven automation.
- IronClaw: Self-hosted WebChat, benchmark QA.
- LobsterAI: Security-first skills marketplace, desktop parity.
- CoPaw: Chinese ecosystem integration (DingTalk, WeCom), provider-agnostic.
- ZeroClaw: Sandbox/workspace isolation, runtime composition.
- Moltis: Small-group chat (Discord/Telegram).
- PicoClaw: IRC/OpenAI, effectively abandoned.

Section 6 Community Momentum & Maturity:
- Rapidly iterating: OpenClaw, Hermes Agent, NanoClaw, CoPaw, NanoBot.
- Stabilizing: NullClaw (post-Docker fix), LobsterAI (security bundle).
- Maintenance mode: IronClaw, PicoClaw, Moltis.
- Dormant: TinyClaw, ZeptoClaw.
- Bottlenecked: ZeroClaw (review backlog).

Section 7 Trend Signals:
- MCP security is a shared priority (DNS pinning, credential logs, timeout alignment).
- Cost observability and lean inference are becoming table-stakes.
- Scheduled task failure transparency is a recurring gap.
- Multi-channel reliability (WhatsApp, Telegram, DingTalk, Teams) is a differentiator.
- Container/sandbox security is emerging (bubblewrap, firejail, root-owned volumes).
- SQLite/disk growth management is a systemic stability risk.
- Provider abstraction and fallback notification are requested across projects.

Need to ensure tone is concise, professional, data-backed. Avoid fluff. Check for any hallucination. The user asked for 8 sections? Actually 7 sections

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-10-06

## 1. Today's Overview
As of 2026-10-06, NanoBot shows high development throughput: 28 PRs were updated in the last 24h (21 open, 7 merged/closed), against 7 issues updated (6 open/active, 1 closed). No new releases were published. Activity is concentrated on MCP transport/security, token-usage observability, cron/session/memory correctness, and WebUI polish. Overall project health is active, but the 21 open PRs and the long-running token-cost issue [#5266](https://github.com/HKUDS/nanobot/issues/5266) indicate review load and cost observability remain pressure points.

## 2. Releases
No new releases. Latest Releases: None. No breaking changes or migration notes.

## 3. Project Progress
Merged/closed PRs in this window:
- [#6066](https://github.com/HKUDS/nanobot/pull/6066) — `fix(mcp): let streamable HTTP read timeout cover tool_timeout`; closes [#6065](https://github.com/HKUDS/nanobot/issues/6065). MCP reliability improved.
- [#5299](https://github.com/HKUDS/nanobot/pull/5299) — `feat(api): expose structured token usage records`; token diagnostics API advanced.
- [#6060](https://github.com/HKUDS/nanobot/pull/6060) — `fix(documents): read cells beyond declared XLSX dimensions`; fixes silent document data loss.
- [#6073](https://github.com/HKUDS/nanobot/pull/6073) — `fix(webui): restore CJK line height and refine text wrapping`.
- [#6075](https://github.com/HKUDS/nanobot/pull/6075) — `fix(webui): fit wide equations and refine math spacing`.
- [#6074](https://github.com/HKUDS/nanobot/pull/6074) — `feat(webui): unify icons and refine interaction feedback`.
- [#6076](https://github.com/HKUDS/nanobot/pull/6076) — `test: isolate Star invitation state and stabilize late-result waits`.

What advanced: MCP reliability, token-usage API, XLSX parsing, WebUI rendering/interaction, and test stability.

## 4. Community Hot Topics
- [#5266](https://github.com/HKUDS/nanobot/issues/5266) — `[OPEN][enhancement] Logs about token consumption (too many tokens are burned)`. 15 comments, 0 👍. Most active issue. Underlying need: cost control and per-call token observability; user reports millions of tokens burned in ~2 hours without noticeable activity.
- [#6065](https://github.com/HKUDS/nanobot/issues/6065) — `[CLOSED][bug] MCP streamable HTTP uses a fixed 30s read timeout despite tool_timeout`. 1 comment. Underlying need: reliable long-running MCP calls; fixed by [#6066](https://github.com/HKUDS/nanobot/pull/6066).
- [#6031](https://github.com/HKUDS/nanobot/issues/6031) — `[OPEN] Notify chat channels when a fallback model serves a turn (currently WebUI-only)`. 1 comment. Underlying need: failover transparency across QQ, Telegram, Discord, Slack.
- [#6008](https://github.com/HKUDS/nanobot/issues/6008) — `[OPEN][bug] WebUI sidebar state is wiped after an update when the initial sidebar-state fetch fails`. 1 comment. Underlying need: resilient WebUI state and visible error handling.
- Emerging roadmap topics: [#6079](https://github.com/HKUDS/nanobot/issues/6079) group-message observation without forced replies; [#6078](https://github.com/HKUDS/nanobot/issues/6078) separate model preset for heartbeat evaluator.

Note: PR comment counts were undefined in the supplied dataset, so this ranking is issue-comment-driven.

## 5. Bugs & Stability
Ranked by severity:
1. **P1 Security** — [#6069](https://github.com/HKUDS/nanobot/pull/6069) `fix(security): pin validated DNS for bytes hostnames`. Potential DNS-pinning bypass via bytes hostnames; fix PR is open.
2. **Security/High** — [#6067](https://github.com/HKUDS/nanobot/pull/6067) `fix(mcp): prevent credential leakage in discovery error logs`. Raw exceptions can leak URLs, userinfo, query signatures, or server secrets; fix PR open.
3. **Data integrity/High** — [#6064](https://github.com/HKUDS/nanobot/pull/6064) `fix(memory): serialize manual and scheduled Dream runs`. Overlapping runs can overwrite newer memory and move the processing cursor backward; fix PR open.
4. **Scheduling/High** — [#6070](https://github.com/HKUDS/nanobot/issues/6070) `Cron completion consumes schedules changed during execution`. One-shot/recurring replacements can be lost or postponed; fix PR [#6071](https://github.com/HKUDS/nanobot/pull/6071) open.
5. **MCP reliability/High** — [#6065](https://github.com/HKUDS/nanobot/issues/6065) fixed 30s read timeout despite `tool_timeout`; closed via [#6066](https://github.com/HKUDS/nanobot/pull/6066).
6. **WebUI state/Medium** — [#6008](https://github.com/HKUDS/nanobot/issues/6008) sidebar state wiped after failed initial fetch; no fix PR shown in this dataset.
7. **Document data loss/Medium** — [#6060](https://github.com/HKUDS/nanobot/pull/6060) XLSX cells beyond declared dimensions silently dropped; fixed.
8. **Session/runtime/Medium** — [#6033](https://github.com/HKUDS/nanobot/pull/6033) `fix(session): preserve runtime sidecars across metadata updates`; fix PR open.
9. **WebUI display/Low–Medium** — [#6073](https://github.com/HKUDS/nanobot/pull/6073), [#6075](https://github.com/HKUDS/nanobot/pull/6075), [#6074](https://github.com/HKUDS/nanobot/pull/6074) closed; [#6076](https://github.com/HKUDS/nanobot/pull/6076) test flakiness closed.

## 6. Feature Requests & Roadmap Signals
Requested features:
- Token consumption logging/diagnostics: [#5266](https://github.com/HKUDS/nanobot/issues/5266); related structured usage API PR [#5299](https://github.com/HKUDS/nanobot/pull/5299) closed.
- Fallback-model notification to chat channels: [#6031](https://github.com/HKUDS/nanobot/issues/6031).
- Group-message observation without always replying: [#6079](https://github.com/HKUDS/nanobot/issues/6079).
- Separate heartbeat notification evaluator model: [#6078](https://github.com/HKUDS/nanobot/issues/6078); related heartbeat PRs [#4549](https://github.com/HKUDS/nanobot/pull/4549) and [#4551](https://github.com/HKUDS/nanobot/pull/4551).
- Choose chat for scheduled tasks: [#6057](https://github.com/HKUDS/nanobot/pull/6057).
- Per-server MCP environment proxy opt-out: [#6072](https://github.com/HKUDS/nanobot/pull/6072).
- FXMacroData MCP preset: [#6068](https://github.com/HKUDS/nanobot/pull/6068).
- Local trusted WebUI extension surface: [#6032](https://github.com/HKUDS/nanobot/pull/6032).
- Show gateway commit in About settings: [#6080](https://github.com/HKUDS/nanobot/pull/6080).

Prediction: the next version is likely to focus on token-usage diagnostics, MCP transport/proxy/security hardening, cron/session/memory correctness, WebUI polish/configurability, and heartbeat model/session controls.

## 7. User Feedback Summary
Real user pain points:
- **Cost opacity** — [#5266](https://github.com/HKUDS/nanobot/issues/5266): enormous token consumption without noticeable activity; users want per-call logs.
- **Failover invisibility** — [#6031](https://github.com/HKUDS/nanobot/issues/6031): chat users cannot tell when a fallback model serves a turn.
- **Group chat UX** — [#6079](https://github.com/HKUDS/nanobot/issues/6079): agents should observe and judge relevance before replying.
- **Heartbeat cost** — [#6078](https://github.com/HKUDS/nanobot/issues/6078): evaluator uses the main model; users want a cheaper preset.
- **Scheduling correctness** — [#6070](https://github.com/HKUDS/nanobot/issues/6070): rescheduling during execution can lose the next occurrence.
- **WebUI reliability/display** — [#6008](https://github.com/HKUDS/nanobot/issues/6008) state wipe; [#6073](https://github.com/HKUDS/nanobot/pull/6073) CJK line height; [#6075](https://github.com/HKUDS/nanobot/pull/6075) wide equations.
- **MCP/security/proxy** — [#6065](https://github.com/HKUDS/nanobot/issues/6065) timeout, [#6072](https://github.com/HKUDS/nanobot/pull/6072) proxy opt-out, [#6067](https://github.com/HKUDS/nanobot/pull/6067) credential logs, [#6069](https://github.com/HKUDS/nanobot/pull/6069) DNS pinning.
- **Document parsing** — [#6060](https://github.com/HKUDS/nanobot/pull/6060) XLSX cells silently dropped.

Satisfaction/dissatisfaction: rapid closed fixes for MCP timeout, WebUI rendering, and XLSX parsing show responsive maintenance. Dissatisfaction centers on silent failures, data loss, cost opacity, and the long-running token issue.

## 8. Backlog Watch
- [#5266](https://github.com/HKUDS/nanobot/issues/5266) — token consumption logging; created 2026-08-06, 15 comments, still open. High visibility; needs resolution.
- [#4551](https://github.com/HKUDS/nanobot/pull/4551) — heartbeat `isolated_session`; created 2026-06-26, still open.
- [#4549](https://github.com/HKUDS/nanobot/pull/4549) — heartbeat `model_override`; created 2026-06-26, still open.
- [#5846](https://github.com/HKUDS/nanobot/pull/5846) — agent BUILD substage latency tracing; created 2026-09-21, still open.
- [#6032](https://github.com/HKUDS/nanobot/pull/6032) — local trusted extension surface; tagged security/conflict, created 2026-10-04.
- [#6008](https://github.com/HKUDS/nanobot/issues/6008) — WebUI sidebar state bug; created 2026-10-02, no fix PR shown.
- [#6033](https://github.com/HKUDS/nanobot/pull/6033) — session runtime sidecars; created 2026-10-04, fix PR open.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-10-06

## 1. Today's Overview
The project shows **high maintenance velocity** with 50 issues and 50 PRs updated in the last 24 hours. No new releases were published, indicating the team is in a stabilization/feature-finish phase ahead of a potential patch or minor bump. Activity is weighted toward bug triage (34 issues closed) and merge-ready PRs (30 merged/closed), suggesting a healthy release-candidate pipeline.

## 2. Releases
**None.** No new versions were tagged today.

## 3. Project Progress
**Merged/closed PRs:**
- `#133484` — Windows build fix: waits out antivirus scanner holds on fresh-tree renames (fixes `hermes update` / `pm install` EPERM errors)
- `#133264` — Registers exact interactive skill commands in canonical catalog (fixes TUI alias-redirect bug)
- `#132008` — Deduplicates project folders in sidebar across profiles
- `#132018` — Distinguishes backend connection from messaging-gateway health in status bar

**Features advanced:**
- `#132795` — Nexus Memory provider catalog entry (Qdrant-backed persistent memory)
- `#133409` — Plugin dependency quarantine enforcement (14-day wait + catalog install validation)

## 4. Community Hot Topics
- **[#119070](https://github.com/NousResearch/hermes-agent/issues/119070)** — Kanban card stuck in `blocker_auth` after rate-limited retry (11 comments, P3, needs-decision). Highest engagement; indicates a UX blocker in automation flows.
- **[#113222](https://github.com/NousResearch/hermes-agent/issues/113222)** — `delegate_task` batch hangs when child heartbeat retires stale (5 comments, P2).
- **[#90004](https://github.com/NousResearch/hermes-agent/issues/90004)** — Skill env vars not passed on first `execute_code` call (4 comments, P2).
- **PR #133271** — Terminal batch timeout fix (P1, 49 related issues/PRs), critical for session-state hygiene.

## 5. Bugs & Stability (ranked by severity)
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| P1 | Terminal batch timeouts misreported as user stop | Open | [#133271](https://github.com/NousResearch/hermes-agent/pull/133271) |
| P1 | Reasoning-only answer promotion gate | Open | [#112833](https://github.com/NousResearch/hermes-agent/pull/112833) |
| P2 | Kanban stuck blocker_auth forever | Open | — |
| P2 | Desktop skills not displayed (macOS) | Open | — |
| P2 | Gateway cleanup kills wrong home's process | Open | [#133542](https://github.com/NousResearch/hermes-agent/pull/133542) |
| P2 | Stall-guard reads past dotted tokens (llama.cpp) | Open | [#133540](https://github.com/NousResearch/hermes-agent/pull/133540) |
| P2 | Bot relay sender identity pins leak to child env | Open | [#133535](https://github.com/NousResearch/hermes-agent/pull/133535) |

## 6. Feature Requests & Roadmap Signals
- **Nexus Memory provider** ([#132795](https://github.com/NousResearch/hermes-agent/pull/132795)) — local Qdrant integration for long-term memory.
- **Plugin quarantine** ([#133409](https://github.com/NousResearch/hermes-agent/pull/133409)) — safety gate for catalog plugins.
- **MiniMax OAuth** ([#133534](https://github.com/NousResearch/hermes-agent/pull/133534)) — auxiliary resolver support.

*Prediction:* Expect a v0.22-pre or patch release within days; terminal guard, reasoning gate, and Windows build fixes are merge-ready.

## 7. User Feedback Summary
**Pain points:**
- Desktop SSH intermittently fails on Windows (multiple reports: #99022, #123444).
- Skills (project/local) invisible in macOS Desktop UI ([#133321](https://github.com/NousResearch/hermes-agent/issues/133321)).
- TUI exact skill commands redirected to aliases ([#133258](https://github.com/NousResearch/hermes-agent/issues/133258), now closed).
- Multi-profile gateway cleanup collisions ([#133542](https://github.com/NousResearch/hermes-agent/pull/133542)).

**Satisfaction signals:** Rapid closure of legacy bugs (34 issues closed) and proactive handling of macOS/Windows platform quirks.

## 8. Backlog Watch
Long-unanswered or high-risk items needing maintainer attention:
- **[#119070](https://github.com/NousResearch/hermes-agent/issues/119070)** — 11 comments, open since Sep 22; kanban dispatcher deadlock.
- **[#108410](https://github.com/NousResearch/hermes-agent/issues/108410)** — Kanban completions not replayed after disconnect (open since Sep 11).
- **[#119870](https://github.com/NousResearch/hermes-agent/issues/119870)** — macOS kanban memory guards inert (open since Sep 23).
- **[#133321](https://github.com/NousResearch/hermes-agent/issues/133321)** — Desktop skills missing from UI (opened today, already 2 comments).
- **[#72637](https://github.com/NousResearch/hermes-agent/pull/72637)** — Compression auxiliary failure attribution (open since Jul 27, no merge activity).
- **[#133540](https://github.com/NousResearch/hermes-agent/pull/133540)** — Stall-guard dotted token parsing (open, P2, affects local models).

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest — 2026-10-06**

**1. Today's Overview**
Activity remains minimal: 5 issues and 3 PRs were updated in the last 24h, but nearly every item carries the `[stale]` tag and dates from late August–September. Zero releases were published. The repository signals low maintainer engagement—a community fork (#3398) has emerged to continue development, and a security hygiene request (#3405) is unanswered—suggesting upstream may be in maintenance mode or effectively abandoned.

**2. Releases**
None.

**3. Project Progress**
- **#3366** [CLOSED] OpenAI-compatible provider support feature closed. [Link](https://github.com/sipeed/picoclaw/issues/3366)
- **#3354** [CLOSED] IRCv3 `draft/multiline` message assembly support closed (likely merged). [Link](https://github.com/sipeed/picoclaw/pull/3354)

Both closures are tagged stale, indicating they may not have undergone active maintainer review before closing.

**4. Community Hot Topics**
- **#3404** Reliability fixes with reproducers (wave 1): Reproducible bugs in agent loop, config, and updater on current `main`. [Link](https://github.com/sipeed/picoclaw/issues/3404)
- **#3405** Enable private vulnerability reporting: Critical security infrastructure request (1 👍). [Link](https://github.com/sipeed/picoclaw/issues/3405)
- **#3398** Active Fork notice: Community maintainer announces continued work due to upstream inactivity. [Link](https://github.com/sipeed/picoclaw/issues/3398)

**5. Bugs & Stability**
- **#3404** (High): Reproducible regressions in core agent loop, channels manager, config, and updater; no corresponding fix PR in dataset.
- **#3347** (Medium): Web UI lag with large chat histories; fix PR exists but is stale/unreviewed. [Link](https://github.com/sipeed/picoclaw/pull/3347)

**6. Feature Requests & Roadmap Signals**
- **#3397**: Add Tsubasa to OpenAI-compatible catalog (minor enhancement). [Link](https://github.com/sipeed/picoclaw/issues/3397)
- **#3366** (closed): OpenAI-compatible providers—possibly closed as superseded or out of scope.
- **#3370**: Keenable web search provider (awaiting merge). [Link](https://github.com/sipeed/picoclaw/pull/3370)

**7. User Feedback Summary**
Users report: (a) missing security contact / `SECURITY.md`, (b) unstable core loops, (c) UI performance degradation, (d) lack of modern provider integrations. Satisfaction is low due to perceived abandonment; the fork announcement (#3398) is a strong negative signal.

**8. Backlog Watch**
- **#3404** & **#3405**: Created Sept 28, still open—require immediate triage.
- **#3370**: Keenable search PR (Sept 7)—stuck. [Link](https://github.com/sipeed/picoclaw/pull/3370)
- **#3347**: UI lag fix (Aug 27)—needs review. [Link](https://github.com/sipeed/picoclaw/pull/3347)
- **#3398**: Fork notice—should be acknowledged or upstream should respond. [Link](https://github.com/sipeed/picoclaw/issues/3398)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-10-06

## 1. Today's Overview

NanoClaw is in an active release-prep window with the v2026.10.0-rc.2 candidate shipped and a sharp uptick in merged PRs (12 closed/merged vs. 11 still open). Project health looks strong: most open PRs target specific, well-scoped fixes and skill hardening, and the recent `channels` branch has been successfully synced with `main`. The community appears focused on three clusters — macOS update reliability, scheduled-task error handling, and skill/credential ergonomics (OneCLI, Resend, FXMacroData). Activity is dominated by core-team author `glifocat`, with secondary input from `barnuri` and external contributors like `billyshipp` and `roberttidball`. One high-priority bug (#3643, 30-minute container ceiling) and two long-standing task-delivery bugs remain unresolved and are the main open risk areas.

## 2. Releases

**v2026.10.0-rc.2** — second release candidate for the 2026.10.0 series. ([PR #4038](https://github.com/nanocoai/nanoclaw/pull/4038))

- **Versioning change:** first release using calendar-style version numbers (2026.10.0-rc.2).
- **Update-channel change:** `/update-nanoclaw` now installs from published releases rather than the tip of `main`. Installs on the `beta` channel pick up this RC; `stable` will get the GA later.
- **Changelog:** `## [Unreleased]` was refreshed with the 10 PRs merged since the previous RC.
- **Migration notes:** none indicated for this RC step itself; the move from `main`-tracking to release-tracking is the principal behavior change. Users should expect slightly delayed propagation of `main`-landed fixes to `beta`/`stable`.

## 3. Project Progress (Merged/Closed PRs)

A dozen PRs were closed or merged in the last 24h, advancing reliability, install hardening, and skill maturity:

- **macOS update race fixed** — [PR #4037](https://github.com/nanocoai/nanoclaw/pull/4037) makes `stopService` wait for the launchd host to exit before snapshotting, closing the I/O error 5 regression in issue [#4021](https://github.com/nanocoai/nanoclaw/issues/4021).
- **Channels branch sync to main** — [PR #4000](https://github.com/nanocoai/nanoclaw/pull/4000) merges 463 `main` commits into `channels` with a merge commit (rebase disabled in repo); [PR #3995](https://github.com/nanocoai/nanoclaw/pull/3995) subsequently makes the branch green again.
- **Setup restart-readiness tests stabilized** — [PR #4035](https://github.com/nanocoai/nanoclaw/pull/4035) reuses exec-checked stubs to stop macOS timing out in full-suite runs.
- **WhatsApp linking resilience** — [PR #4017](https://github.com/nanocoai/nanoclaw/pull/4017) refreshes the WhatsApp Web version before linking to avoid stale-version errors on rate-limited lookups.
- **OneCLI skill hardening (cluster of fixes)** —
  - [PR #4036](https://github.com/nanocoai/nanoclaw/pull/4036) pins OneCLI installs to gateway 1.42.0 (1.43 broke `onecli agents set-secrets`); `/add-dial-tool` no longer breaks on 1.42+.
  - [PR #4039](https://github.com/nanocoai/nanoclaw/pull/4039) refuses empty `ONECLI_VERSION` so Compose doesn't run `latest`.
  - [PR #4041](https://github.com/nanocoai/nanoclaw/pull/4041) corrects the rollback step label in the upgrade guide.
  - [PR #4034](https://github.com/nanocoai/nanoclaw/pull/4034) isolates payload tests from caller's `ONECLI_*` / `ANTHROPIC_BASE_URL` env.
- **Gateway credential UX** — [PR #4015](https://github.com/nanocoai/nanoclaw/pull/4015) skips approval cards for requests that carry no stored credential (keyless reads no longer spam cards behind Iron Proxy).
- **Supply-chain visibility** — [PR #4007](https://github.com/nanocoai/nanoclaw/pull/4007) surfaces skill-pinned npm versions to Dependabot/`pnpm audit`; [PR #4009](https://github.com/nanocoai/nanoclaw/pull/4009) drops the auto-approver on `versions.json` agent-image pin bumps (manual merge only).

## 4. Community Hot Topics

Top items by recent activity and area weight (core-team flagged, multi-area impact):

- **[PR #3918](https://github.com/nanocoai/nanoclaw/pull/3918)** — *core-team, agent-runner, core, tools.* Fixes lost/repeated replies around `send_message` for both streaming and end-of-turn providers. High relevance: touches the most common agent-loop path.
- **[PR #4000](https://github.com/nanocoai/nanoclaw/pull/4000)** — *core-team, every area tagged.* Channels branch sync; the most strategically significant merge because it reconciles divergent code lines and unblocks [PR #3995](https://github.com/nanocoai/nanoclaw/pull/3995).
- **[PR #3925](https://github.com/nanocoai/nanoclaw/pull/3925)** — *agent-runner, providers.* Provider-wrapper seam enabling per-query model selection and retryable failures — foundational for fallback and key-rotation use cases.
- **[PR #3932](https://github.com/nanocoai/nanoclaw/pull/3932)** — *skills, agent-runner, scheduled-tasks.* `/add-lean-tasks` for minimal-context scheduled runs on small/local models.
- **[Issue #3223](https://github.com/nanocoai/nanoclaw/issues/3223)** — long-standing community pain around silent failure of scheduled-task turns; analysts and operators are unable to detect task failures.

Underlying needs inferred: stronger provider resilience (fallback, retry), better observability of scheduled task failures, fewer manual approvals on safe operations, and reduction of context/cost for routine task fires.

## 5. Bugs & Stability

Ranked roughly by severity:

| Severity | Item | Status | Fix available? |
|---|---|---|---|
| **High** | [#3643](https://github.com/nanocoai/nanoclaw/issues/3643) — Hardcoded 30-min `ABSOLUTE_CEILING_MS` kills long local-model turns; no config seam. Affects local-model backends like OpenCode → OpenAI-compatible servers. | Open | Not yet |
| **Medium-High** | [#4033](https://github.com/nanocoai/nanoclaw/issues/4033) — Poll-loop drops a follow-up when folded into a live turn; reply timestamps become mis-attributed. | Open | Not yet |
| **Medium** | [#4021](https://github.com/nanocoai/nanoclaw/issues/4021) — macOS update race (host snapshot vs. shutdown) → I/O error 5. | **Closed** | [PR #4037](https://github.com/nanocoai/nanoclaw/pull/4037) merged |
| **Medium** | [#3223](https://github.com/nanocoai/nanoclaw/issues/3223) — Scheduled-task errors produce unroutable messages silently dropped; operator never learns the task failed. | Open | Not yet |
| **Medium** | [#3301](https://github.com/nanocoai/nanoclaw/issues/3301) — `kind='task'` rows in chat sessions (legacy from pre-2.1.48) flip the whole query into task mode → logs dropped, replies eaten, series unlisted. | Open | Not yet |
| **Low** | [#4029](https://github.com/nanocoai/nanoclaw/pull/4029) — Telegram adapter's GFM autolinker mangles URLs/underscores. | Open (PR) | Fix PR [#4029](https://github.com/nanocoai/nanoclaw/pull/4029) awaiting merge |

The single most user-impacting open bug remains #3643, because it makes the local-model story effectively unusable for non-trivial work without an undocumented workaround.

## 6. Feature Requests & Roadmap Signals

- **`/add-fxmacrodata-tool`** ([PR #4040](https://github.com/nanocoai/nanoclaw/pull/4040)) — new MCP-backed skill for FX/macro releases and central-bank data, keyless by default; mirrors the `/add-tavily-tool` pattern ([#3190](https://github.com/nanocoai/nanoclaw/issues/3190)). Likely a candidate for the next RC/GA drop given the recent skill-amplification trend.
- **`/add-lean-tasks`** ([PR #3932](https://github.com/nanocoai/nanoclaw/pull/3932)) — minimal-context scheduled task runs. Direct response to cost complaints when using large models for routine task fires.
- **Provider wrapper seam** ([PR #3925](https://github.com/nanocoai/nanoclaw/pull/3925)) + **OpenCode env unification** ([PR #3930](https://github.com/nanocoai/nanoclaw/pull/3930)) — a coordinated foundation for per-query model routing, fallback, and credential rotation. Expect incremental features here in subsequent releases.
- **Resend adapter bump** ([PR #4042](https://github.com/nanocoai/nanoclaw/pull/4042)) — pin to 0.3.0 to clear 4 moderate npm advisories; signals ongoing security hygiene.

Most likely v2026.10.0 GA inclusions: the channels branch parity ([PR #4000](https://github.com/nanocoai/nanoclaw/pull/4000)), macOS update robustness ([PR #4037](https://github.com/nanocoai/nanoclaw/pull/4037)), and the OneCLI UX fixes ([PRs #4036/#4039/#4041/#4034](https://github.com/nanocoai/nanoclaw/pulls)).

## 7. User Feedback Summary

Concrete pain points and use cases distilled from the issue/PR corpus:

- **Local-model viability (#3643).** Power users running local OpenAI-compatible servers cannot run long agent turns due to a hard 30-minute host sweep with no operator-tunable knob. This is the loudest dissatisfaction signal today.
- **Silent task failures (#3223).** Operators running scheduled agents report being unable to learn when a task throws; errors get routed into a `chat` row with no destination.
- **Legacy chat/task data conflation (#3301).** Since one-door delivery (#2988), pre-existing `kind='task'` rows in chat sessions trigger mode-flipping, with logging and reply loss. Long-tail migration pain.
- **Approval-card spam behind Iron Proxy (#4015 → merged).** Operator friction around over-eager approval prompts on keyless reads has now been addressed.
- **OneCLI upgrade friction (multiple PRs).** Users were being silently downgraded to empty-pin / `latest` containers; the upgrade guide rollback step was mislabelled. Four small PRs collectively resolve this.
- **WhatsApp linking reliability (#4017 → merged).** Rate-limited `web.whatsapp.com` responses produced stale built-in versions; fixed.
- **Tooling breadth demand (#4040).** A community contributor adding an FX/macro MCP skill indicates the user base is extending into financial-data workflows.

Overall satisfaction signal is moderate-to-positive: ship velocity is healthy, the high-impact macOS regression was turned around inside 24h, and supply-chain tooling (Dependabot visibility, agent-image manual merge) is being tightened.

## 8. Backlog Watch

Open items that have sat without resolution for a meaningful period or carry explicit priority:

- **[Issue #3223](https://github.com/nanocoai/nanoclaw/issues/3223) — 57 days open.** Scheduled-task error messages are silently dropped. Affects every operator relying on unattended agents. No linked fix PR.
- **[Issue #3301](https://github.com/nanocoai/nanoclaw/issues/3301) — 50 days open.** Pre-2.1.48 `kind='task'` rows in chat sessions break logs/replies/series listing. Migration-shaped bug; likely needs a one-time data rewrite or a backward-compat code path.
- **[Issue #3643](https://github.com/nanocoai/nanoclaw/issues/3643) — 39 days open, priority/high.** Hardcoded `ABSOLUTE_CEILING_MS` with no config seam. Local-model install experience is gated on this landing.
- **[Issue #4033](https://github.com/nanocoai/nanoclaw/issues/4033) — 2 days open.** Poll-loop queue desync on folded follow-ups; affects Claude and other streaming providers. Watch for an early fix PR.
- **[PR #3918](https://github.com/nanocoai/nanoclaw/pull/3918) — 11 days open, core-team.** Reply loss/repeat around `send_message` for both streaming and end-of-turn providers. Long-lived review window for a high-traffic code path.
- **[PR #3925](https://github.com/nanocoai/nanoclaw/pull/3925) — 10 days open.** Provider-wrapper seam — strategically important, still awaiting review feedback.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-10-06

**Repo:** nullclaw/nullclaw | **Generated:** 2026-10-06

---

## 1. Today's Overview

NullClaw shows intense development momentum with **15 issues and 30 PRs updated in the last 24h**. The bulk of activity centers on a cluster of same-day follow-up issues/PRs opened by maintainer `vernonstinebaker` — addressing Docker permissions, CLI ergonomics, scheduler robustness, and documentation debt. No new release was published. The project is in a rapid iteration/fix-up phase following what appears to be a problematic Docker image shipped in May (root-owned `/nullclaw-data`). Community health is active but quality-control gaps (no CI gate on Docker builds, environment-dependent tests) are surfacing.

---

## 2. Releases

**None today.** Last known release predates the May 29 Docker image (`ghcr.io/nullclaw/nullclaw:latest`) that shipped broken. The absence of a release pipeline gate (see #1036) means the `:latest` tag may be stale or inconsistent with `main`.

---

## 3. Project Progress

**Merged/Closed today (key PRs):**
- **#1023** fix(docker): restore UID/GID 65534 ownership on `/nullclaw-data` — unblocks the gateway (#1017 fix)
- **#1011** fix(agent): free parsed tool call on allocation failure — plugs a memory leak in `parseXmlToolCalls`
- **#983** fix(providers): pinned curl path for proxied requests — keeps credentials out of argv
- **#970** fix(cli): arrow-key handling in agent REPL (POSIX raw-mode line editor)
- **#959** fix(cron): secure scoped scheduler credential persistence
- **#775–#777, #774** — documentation structural cleanup, dedup, and stats refresh (by @telagod)

**Opened today (follow-ups):** #1042 (CI Docker gate), #1041 (terminal width refresh), #1038 (hermetic config dir), #1032 (doc `agent_timeout_secs`), #1031 (thinking capability table), #1029 (hermetic cron tests), #1028 (history separators), #1027 (model checks), #1026 (symlink-safe archive open), #1024 (bounded websocket connect), #1037 (Windows console), #1036 (CI gate), #1035 (pre-fix volume docs), #1034 (volume repair docs), #1039 (stale scale figures), #1040 (CLAUDE.md pointer), #1008 (docs index).

---

## 4. Community Hot Topics

| Item | Type | Comments | Link |
|---|---|---|---|
| #1033 | Issue (open) | 1 | [cron agent no default timeout → blocks scheduler](https://github.com/nullclaw/nullclaw/issues/1033) |
| #1017 | Issue (closed) | 1 | [Docker gateway AccessDenied](https://github.com/nullclaw/nullclaw/issues/1017) |
| #941 | Issue (closed) | 7 | [agent cron jobs never spawn subprocess — Telegram silent](https://github.com/nullclaw/nullclaw/issues/941) |
| #970 | PR (closed) | — | [arrow keys in REPL](https://github.com/nullclaw/nullclaw/pull/970) |
| #1042 | PR (open) | — | [CI gate Docker builds](https://github.com/nullclaw/nullclaw/pull/1042) |
| #1041 | PR (open) | — | [refresh terminal width + history separators](https://github.com/nullclaw/nullclaw/pull/1041) |

**Underlying needs:** Users are running NullClaw in containers (Docker), need reliable scheduled delivery (Telegram/agent cron), and expect CLI ergonomics parity with standard terminals. The volume of same-day follow-up issues signals that approval/review cycles are fast but that root-cause analysis is surfacing systemic gaps (serial scheduler, no CI gate on images, env-dependent tests).

---

## 5. Bugs & Stability (ranked by severity)

| Severity | Issue | Status | Fix PR |
|---|---|---|---|
| **Critical** | #1033 — agent cron jobs block scheduler indefinitely (timeout=0, serial dispatch) | OPEN | None yet |
| **High** | #1017 — Docker gateway exits `AccessDenied` (root-owned HOME) | CLOSED | #1023 ✅ |
| **High** | #941 — agent-type cron never spawns subprocess; Telegram never receives | CLOSED | no linked fix PR |
| **Medium** | #865 — arrow keys print CTRL chars in CLI | CLOSED | #970 ✅ |
| **Medium** | #839 — `bit` has no access to scheduler | CLOSED | unknown |
| **Low** | #1004 — provider error body lost on non-2xx | OPEN | #1004 (open) |

---

## 6. Feature Requests & Roadmap Signals

- **#1037** — native Windows console editing (raw-mode stub) — explicitly scoped out of #1028, now has its own issue → likely next minor milestone
- **#1024** — bound DNS/TCP for websocket channels → reliability hardening
- **#1031** — thinking capability table replacing hardcoded Claude model strings → maintainability refactor
- **#817** — WeChat QR login (open since Apr) → user demand from Chinese market
- **#767** — native Anthropic API keys (open since Apr) → long-standing demand

**Prediction:** Next version will likely ship the Docker CI gate (#1042), the cron timeout config (#1032 doc + code), and the Windows console stub (#1037), given they are all authored by the maintainer today.

---

## 7. User Feedback Summary

**Pain points:**
- Docker deployments broken out-of-the-box (#1017, #1034, #1035 — three separate follow-ups!)
- Cron scheduler is a single-threaded serial dispatcher with no timeout — one hung agent job blocks all
- CLI line-editing feels broken on real terminals (arrow keys, width changes)
- Telegram delivery silently fails for agent cron jobs
- Docs/outdated stats misrepresent the project scale

**Satisfaction signals:** Users are deploying to production (Docker, cron, Telegram, proxy chains) and engaging deeply with the codebase (detailed repro steps, security analysis of symlink races). The fact that multiple same-day PRs were authored by `vernonstinebaker` suggests a committed solo maintainer or small core team.

---

## 8. Backlog Watch

| Item | Age | Risk |
|---|---|---|
| #817 WeChat QR login | ~6 mo | User-facing feature gap, Chinese market |
| #767 Native Anthropic API keys | ~6 mo | Blocks a major provider segment |
| #865 CLI ctrl chars | ~6 mo | Fixed by #970 but may regress on Windows |
| #941 agent cron subprocess | ~4 mo | Closed but no visible fix PR — verify resolution |
| #1033 cron timeout | **1 day** | Critical — no fix PR yet |
| #1029 hermetic cron/session tests | 1 day | Test suite depends on real HOME |
| #1036 CI gate Docker | 1 day | Root cause of #1017 shipping |

**Action needed:** Merge #1023/#1042/#1032/#1038, then turn attention to #1033 (cron timeout) — the most severe open bug. Verify #941 actually ships a subprocess fix (closed but no linked PR). Prioritize #1029/#1036 to prevent recurrence of the Docker breakage.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw Project Digest — 2026-10-06**

**1. Today's Overview**
Activity remains low with 2 issues and 1 PR updated in the last 24 hours; no releases were published and no PRs were merged or closed. The project shows stable maintenance cadence but with open UX and quality-assurance items pending review. No critical crashes or security reports surfaced today.

**2. Releases**
*None.* No new versions published.

**3. Project Progress**
No PRs merged or closed today. [PR #8125](https://github.com/nearai/ironclaw/pull/8125) (`fix(webui): keep run state and notification inbox fresh in background tabs`) remains open; it implements a one-line frontend flag change (`refetchOnWindowFocus: true`) to address stale state but has not yet been reviewed or merged.

**4. Community Hot Topics**
- [Issue #8126](https://github.com/nearai/ironclaw/issues/8126) — Daily ironclaw failure taxonomy (OfficeQA benchmark analysis, 0 comments/👍)
- [Issue #8124](https://github.com/nearai/ironclaw/issues/8124) — WebChat stale action status in background tabs (0 comments/👍)
- [PR #8125](https://github.com/nearai/ironclaw/pull/8125) — Corresponding fix for #8124 items 1–2 (0 comments)

*Analysis:* Engagement metrics are zero across all items, suggesting either low community visibility or rapid resolution expectations. The underlying need is reliable state synchronization for self-hosted deployments and transparent benchmark failure reporting.

**5. Bugs & Stability**
| Severity | Item | Notes |
|---|---|---|
| Medium | [WebChat stale state #8124](https://github.com/nearai/ironclaw/issues/8124) | Action status freezes and missing completion notifications when tab is backgrounded on non-HTTPS deployments |
| Medium | [OfficeQA numeric errors #8126](https://github.com/nearai/ironclaw/issues/8126) | DeepSeek-V4-Flash navigation/model-quality failures in 37/officeqa non-pass cases |

*Fix PR exists:* #8125 targets the WebChat stale-state bug.

**6. Feature Requests & Roadmap Signals**
No explicit feature requests today. The daily taxonomy issue (#8126) implies demand for automated failure-classification dashboards or richer benchmark observability, which could surface in a future monitoring release.

**7. User Feedback Summary**
- *Pain points:* Self-hosted users on plain HTTP experience silent failures (no notifications, stale UI) when switching browser tabs; model-level numeric errors in OfficeQA erode trust in benchmark reliability.
- *Use cases:* Single-tenant LAN deployments, automated benchmark tracking.
- *Satisfaction:* Neutral to slightly negative due to invisible background-tab behavior and model accuracy drift.

**8. Backlog Watch**
No long-unanswered items detected (all opened 2026-10-05). However, the [#8124 ↔ #8125](https://github.com/nearai/ironclaw/pull/8125) pair should be prioritized to unblock self-hosted users; the PR has been open for one day without merge.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-10-06

## 1. Today's Overview

LobsterAI shows a high-activity security-hardening day rather than a feature-shipment day. Activity is dominated by a coordinated batch of four pre-release security reports (Issues #2793–#2797) filed by contributor `carfeii` against the `main` branch, all of which already have corresponding fix PRs in the queue or merged. Two skills-related reliability PRs from `fisherdaddy` (#2799, #2800) and the P2P direct-message policy fix (#2785) closed successfully. No new tagged releases were cut, and several long-standing user-facing bugs from March 2026 remain stale and unanswered. Overall project health: active development on security and skill-loading integrity, but stagnation on consumer-reported desktop and integration issues.

## 2. Releases

No new releases in the last 24 hours. The latest tagged version remains `v0.2.4` (with the preceding production tag `2026.9.23`). Note that the security findings reported today affect only `main`-branch commits and are not present in `v0.2.4`, so production users are not directly exposed to those four issues.

## 3. Project Progress

Three PRs merged/closed today, all in the security and skill-loading reliability space:

- **PR #2785** — `fix: P2P direct-message policy fails open instead of closed` ([link](https://github.com/netease-youdao/LobsterAI/pull/2785)): Closes Issue #2784. The NIM gateway's `handleIncomingMessage` filter only enforced `policy === 'allowlist'`, allowing `'disabled'`, unset, and empty-allowlist cases to fall through and accept any sender. The fix tightens default-deny behavior.
- **PR #2799** — `fix(skills): stop using temp extraction dir names as skill ids` ([link](https://github.com/netease-youdao/LobsterAI/pull/2799)): Skills whose `SKILL.md` sat at an archive root were registered under the random temp directory name (e.g. `lobsterai-skill-zip-XXXXXX`), causing duplicate re-imports and broken marketplace update checks. Remote zips and npm packages are now registered under stable identifiers (`remote-skill`, `package`).
- **PR #2800** — `fix(skills): align SKILL.md frontmatter parsing with OpenClaw` ([link](https://github.com/netease-youdao/LobsterAI/pull/2800)): LobsterAI's strict js-yaml parser disagreed with OpenClaw's runtime, which tolerates unquoted free-form descriptions. The skills list now matches what OpenClaw actually loads.

## 4. Community Hot Topics

Today's items are mostly low-engagement by comments and reactions (most have 0–4 comments and 0 👍), reflecting that activity is being driven by a small group of technical contributors rather than broad user feedback. The most-commented items in the snapshot are:

- **Issue #831** — "Latest version does not support custom-defined Gemini relay model" ([link](https://github.com/netease-youdao/LobsterAI/issues/831)): 4 comments. A long-standing user request for custom Gemini-compatible model endpoints. Underlying need: enterprise/power users running private LLM gateways want first-class support rather than workarounds.
- **Issue #2784** — NIM P2P fail-open policy ([link](https://github.com/netease-youdao/LobsterAI/issues/2784)): 2 comments. Security report with attached fix; resolved via PR #2785.
- **Issue #989** — "Tavily MCP unavailable, 401 unauthorized despite configured API key" ([link](https://github.com/netease-youdao/LobsterAI/issues/989)): 2 comments. Indicates friction integrating third-party MCP providers.

The day's narrative is therefore technical/security rather than community-driven discussion.

## 5. Bugs & Stability

A coherent batch of four `main`-branch security bugs were filed by the same author on 2026-10-05. None are present in `v0.2.4`, but all should be remediated before the next tag. Severity ranked by blast radius:

| Severity | Issue | Summary | Fix PR |
|---|---|---|---|
| High | **#2795** [link](https://github.com/netease-youdao/LobsterAI/issues/2795) | OAuth access/refresh tokens written to diagnostic logs via the `api:fetch` IPC bridge. | PR #2798 [link](https://github.com/netease-youdao/LobsterAI/pull/2798) (open) |
| High | **#2797** [link](https://github.com/netease-youdao/LobsterAI/issues/2797) | OpenClaw token proxy accepts unauthenticated requests and forwards them using the user's bearer token — token-confusion / impersonation risk. | PR #2798 (open) |
| High | **#2796** [link](https://github.com/netease-youdao/LobsterAI/issues/2796) | HTML preview server follows symlinks outside its permitted directory (path-containment via lexical check, not realpath). | PR #2798 (open) |
| High | **#2793** [link](https://github.com/netease-youdao/LobsterAI/issues/2793) | Skill-controlled `_meta.json` `openclawSourceDir` causes arbitrary directory deletion on uninstall. Supply-chain-style risk from installed skills. | PR #2794 [link](https://github.com/netease-youdao/LobsterAI/pull/2794) (open) |
| Medium | **#2784** [link](https://github.com/netease-youdao/LobsterAI/issues/2784) | NIM P2P direct-message policy fails open. | PR #2785 (merged) |

Pre-existing stale bugs still open:
- **Issue #829** — SQLite parameters not tuned for desktop usage ([link](https://github.com/netease-youdao/LobsterAI/issues/829))
- **Issue #834** — Windows vs. macOS "Value-Added Service" pages differ in URL, pricing, and login state ([link](https://github.com/netease-youdao/LobsterAI/issues/834))
- **Issue #831** — Custom Gemini relay model not supported ([link](https://github.com/netease-youdao/LobsterAI/issues/831))
- **Issue #989** — Tavily MCP returns 401 despite valid key ([link](https://github.com/netease-youdao/LobsterAI/issues/989))

## 6. Feature Requests & Roadmap Signals

The user-facing feature requests active today all date from March 2026 and remain stale:

- **Custom Gemini / OpenAI-compatible relay endpoints** (#831): Likely to land in a future build only if LobsterAI commits to broader "custom LLM gateway" support; this is a recurring ask that signals demand for enterprise/proxy model routing.
- **Tuned SQLite configuration for desktop workloads** (#829): A performance/stability ask rather than a new feature. Could plausibly ship with the next desktop-quality release.
- **Cross-platform parity for the "Value-Added Service" portal** (#834): Indicates that marketing/portal pages need cross-platform alignment and that login-state propagation between webviews is broken on Windows.

The merged skills PRs (#2799, #2800) signal an in-flight effort to make the skill marketplace reliable (de-duplication, update detection, correct metadata parsing). A near-term roadmap release will likely bundle these skill fixes plus the four security fixes from PR #2794 and #2798.

## 7. User Feedback Summary

User-visible feedback is sparse and stale. The clearest pain points are:

- **Third-party LLM integration friction**: Custom Gemini relay (#831) and Tavily MCP 401 (#989) both suggest users want richer BYO-model / BYO-MCP workflows but lack working configuration paths.
- **Desktop platform parity**: Windows users get a different "Value-Added Service" portal than macOS users, with wrong pricing and a broken login handoff (#834) — a cross-platform QA gap.
- **Local persistence performance**: Default SQLite parameters (#829) imply desktop performance complaints even though no quantitative data has been posted.

There is no quantitative satisfaction signal in today's data (zero 👍 reactions across all items), so direct user satisfaction is difficult to gauge. The pattern suggests a small but technically sophisticated user base that is quietly reporting structural issues, while end-users on the LobsterAI desktop app may be experiencing but not reporting issues like #834.

## 8. Backlog Watch

Items needing maintainer attention:

- **PR #1277** — `dependabot` electron group bump (43.5.0 → 44.4.5) ([link](https://github.com/netease-youdao/LobsterAI/pull/1277)): Open since 2026-04-02, ~6 months stale. Blocks staying current with Electron security patches.
- **Issue #831** — Custom Gemini relay model support ([link](https://github.com/netease-youdao/LobsterAI/issues/831)): Stale since March, highest-comment open issue. A maintainer response or triage label would clarify whether this is in scope.
- **Issue #829** — SQLite tuning for desktop ([link](https://github.com/netease-youdao/LobsterAI/issues/829)): Stale since March, needs a maintainer ack or assignment.
- **Issue #834** — Windows portal URL/login mismatch ([link](https://github.com/netease-youdao/LobsterAI/issues/834)): Cross-platform parity defect, stale since March, visible to paying desktop users.
- **Issue #989** — Tavily MCP 401 ([link](https://github.com/netease-youdao/LobsterAI/issues/989)): Stale since March; needs a maintainer comment on whether this is a key-format regression or a configuration documentation gap.
- **PR #2798** — Combined security fix bundle (#2795, #2796, #2797) ([link](https://github.com/netease-youdao/LobsterAI/pull/2798)): Should be prioritized and reviewed together as a pre-release security release.
- **PR #2794** — Skill `_meta.json` delete-path hardening ([link](https://github.com/netease-youdao/LobsterAI/pull/2794)): Same reviewer queue as #2798; relevant to the security hardening track.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-10-06

**Repository:** github.com/moltis-org/moltis

---

## 1. Today's Overview
Activity is light with 2 issues and 2 PRs updated in the last 24h — all authored by the same contributor (`tomachianura`), opened 2026-10-05. No releases were published and no PRs were merged/closed today. The project is in an active maintenance phase with fixes being drafted but not yet merged. Overall project health appears stable but with low contributor diversity.

## 2. Releases
No new releases today.

## 3. Project Progress
No PRs merged or closed today. Two open PRs advance core fixes:
- **#1295** — Discord DM classification fix (still open)
- **#1293** — SKILL.md frontmatter quoting fix (still open)

## 4. Community Hot Topics
No items have comments or reactions yet. All activity originates from a single author, indicating internal/owner-driven progress rather than community-driven momentum.
- [Issue #1294](https://github.com/moltis-org/moltis/issues/1294) — per-sender MCP credentials in shared chats
- [Issue #1292](https://github.com/moltis-org/moltis/issues/1292) — unquoted YAML frontmatter bug

## 5. Bugs & Stability
- **#1292** — `create_skill` writes unquoted YAML frontmatter → skill discovery fails to parse (medium severity; has a matching fix PR [#1293](https://github.com/moltis-org/moltis/pull/1293)).

## 6. Feature Requests & Roadmap Signals
- **#1294** — Per-sender MCP credentials in shared chats (group messages attributed to actual sender). Signals demand for multi-user shared-chat support; no PR filed yet — likely future milestone.

## 7. User Feedback Summary
Pain points cluster around two areas: (a) skill creation producing unparseable SKILL.md files, and (b) Discord DMs misclassified as shared/group chats, breaking 1:1 bot interactions. Both suggest tight integration with Discord/Telegram/Slack group messaging environments.

## 8. Backlog Watch
No long-unanswered items detected (all ≤1 day old). Watch for: merge status of #1293/#1295 and any new contributors engaging with #1294.

---

*Digest generated from GitHub data as of 2026-10-06.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw / QwenPaw Project Digest — 2026-10-06**

**1. Today's Overview**
The project shows high development velocity with 43 issue updates (41 open) and 25 PR updates across the last 24h. No new releases were published, indicating active pre-release stabilization. Community engagement is robust with contributors submitting fixes for provider compatibility, desktop stability, and security issues simultaneously. The bug influx centers on multi-turn context pollution, provider-specific schema/token mismatches, and Windows sandbox edge cases.

**2. Releases**
*None.* The latest visible version referenced is `v2.2.2.beta4` (Issue #8073) and `2.2.2b3` (Issue #8013). Users are on bleeding-edge builds; no production cut noted.

**3. Project Progress**
- **Merged/Closed:** #8113 (DingTalk channel plugin pilot), #8109 (stream error session loss fix)
- **Features advanced:** Finish-reason truncation visibility (#8096), GPT-6 token parameter recognition (#8090), DST-aware timezone resolution (#8050), browser default-arg exclusions (#8029, #7987), Whisper model configurability (#8052), skill pool async offload (#8055)
- **Infrastructure:** Embedding batch resilience (#8062), grep binary filtering (#7988), Langfuse output recording (#7964), media payload recovery (#8010)

**4. Community Hot Topics**
Most-commented issues (4 comments):
- [#8022](https://github.com/agentscope-ai/QwenPaw/issues/8022) — `send_file_to_user` context pollution causing persistent 400s
- [#7991](https://github.com/agentscope-ai/QwenPaw/issues/7991) — TaskTracker zombie entries inflating running counts
- [#7948](https://github.com/agentscope-ai/QwenPaw/issues/7948) — Console UI breaks user input

Top PRs by activity: #8113 (DingTalk), #8051 (MCP 422), #8096 (truncation), #8090 (GPT tokens), #8050 (timezone), #8029 (browser args)

*Underlying need:* Users demand provider-agnostic reliability and transparent failure modes; contributors want clear migration paths (e.g., DingTalk plugin).

**5. Bugs & Stability**
| Severity | Issue | Status |
|----------|-------|--------|
| **Critical** | [#8022](https://github.com/agentscope-ai/QwenPaw/issues/8022) File/image block + empty assistant pollutes context → permanent 400 | No fix PR |
| **Critical** | [#8064](https://github.com/agentscope-ai/QwenPaw/issues/8064) DeepSeek PDF breaks session permanently | No fix PR |
| **Critical** | [#8042](https://github.com/agentscope-ai/QwenPaw/issues/8042) Tool output auto-fed back, format unsupported | Related PR #8010 |
| **High** | [#8094](https://github.com/agentscope-ai/QwenPaw/issues/8094) Boot splash no retry; WebView2 cache permanent block | No fix PR |
| **High** | [#8093](https://github.com/agentscope-ai/QwenPaw/issues/8093) Runtime blocks image despite `supports_multimodal=true` | No fix PR |
| **High** | [#8074](https://github.com/agentscope-ai/QwenPaw/issues/8074) OpenAI GPT-6 connection 400 | PR #8090 |
| **High** | [#8040](https://github.com/agentscope-ai/QwenPaw/issues/8040) Embedding reindex drops CJK chunks | PR #8062 |
| **High** | [#8105](https://github.com/agentscope-ai/QwenPaw/issues/8105) Tool approval buttons both reject | No fix PR |
| **Medium** | [#8077](https://github.com/agentscope-ai/QwenPaw/issues/8077) Qoder custom models invisible | No fix PR |
| **Medium** | [#8088](https://github.com/agentscope-ai/QwenPaw/issues/8088) Image routing PIL loop, silent cancel | No fix PR |

**6. Feature Requests & Roadmap Signals**
- [#7731](https://github.com/agentscope-ai/QwenPaw/issues/7731) — Dot-file toggle in Files panel (24 days open)
- [#8103](https://github.com/agentscope-ai/QwenPaw/issues/8103) — Notify user on daemon model fallback (PR #8103 exists)
- [#8085](https://github.com/agentscope-ai/QwenPaw/issues/8085) — Surface `finish_reason="length"` (PR #8096 exists)
- [#8082](https://github.com/agentscope-ai/QwenPaw/issues/8082) — Document heartbeat semantics (PR #8082 exists)

*Predicted next release:* DingTalk plugin stabilization, truncation visibility, GPT-6 token support, transcription model picker.

**7. User Feedback Summary**
- **Pain points:** Session data loss after stream errors (#8109), silent model fallback (#8103), deep link broken across agents (#8101), Windows COM automation security risk (#8002), CLI/plugin install failures in containers (#8106)
- **Use cases:** Multi-agent delegation (Qoder, DeepSeek), long-context file processing, desktop-first workflows with WeCom/dingtalk integration
- **Satisfaction:** Contributors actively triaging; first-time contributors welcomed (#7987, #7988, #8012). Frustration with "silent" failures (no fallback notification, truncated output indistinguishable from complete).

**8. Backlog Watch**
Needs maintainer attention (open >5 days, no PR or stalled):
- [#7948](https://github.com/agentscope-ai/QwenPaw/issues/7948) Console UI design (13 days)
- [#7731](https://github.com/agentscope-ai/QwenPaw/issues/7731) Dot-file toggle (24 days)
- [#8073](https://github.com/agentscope-ai/QwenPaw/issues/7973) Conversation page inaccessible (5 days)
- [#8101](https://github.com/agentscope-ai/QwenPaw/issues/8101) Cross-agent deep links (2 days)
- [#8077](https://github.com/agentscope-ai/QwenPaw/issues/8077) Qoder model visibility (4 days)
- [#8035](https://github.com/agentscope-ai/QwenPaw/issues/8035) Transcription provider switch silent breakage (7 days, PR #8052 exists but may need merge)
- [#8093](https://github.com/agentscope-ai/QwenPaw/issues/8093) Multimodal capability mismatch (3 days)

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-10-06

**Repository:** [github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## 1. Today's Overview

ZeroClaw shows high update volume (16 issues, 50 PRs touched) but **zero PR merges in the last 24 hours**, signaling a bottleneck in review/approval throughput. Three issues were closed (two bugs, one flaky-test fix), yet 13 remain open with several carrying **S0/S1 severity** labels (data-loss, workflow-blocked). No new releases were published. The project is in an active maintenance phase with many features in-flight, but merge velocity needs attention.

## 2. Releases

**None.** No new version cut. The roadmap references v0.8.6 in several issues (#10993, #11519, #11335) but no release notes were published today.

## 3. Project Progress

- **0 PRs merged** — all 50 updated PRs remain open. This is the single most important signal in today's digest.
- Largest open PRs by scope:
  - **#10935** — `StreamTextGuard` fix preventing tool-result objects from being mistaken for protocol content (runtime, security, XL)
  - **#10938** — tool attachments declared explicitly instead of scanned from text (provider layer rewrite, XL)
  - **#11194** — Microsoft Teams (Bot Framework) channel addition (XL)
  - **#10391** — bounded delegate workspace/tool-ceiling policy (XL)
- WhatsApp Web channel maturing: #10979 (create_room/invite_user), #10988 (poll votes)
- Provider layer hardening: Anthropic extra_headers (#11541), stream idle bound (#11544), OpenAI-compatible native tool-calling default (#10687)

## 4. Community Hot Topics

| Item | Type | Comments | Risk | Link |
|---|---|---|---|---|
| #10495 — Config::save() overwrites config.toml | Bug | 6 | **S0 data loss** | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/10495) |
| #5287 — local_small runtime profile | Feature | 10 | p2, in-progress | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) |
| #10935 — stream guard prose/object fix | PR | many | XL, high | [link](https://github.com/zeroclaw-labs/zeroclaw/pull/10935) |
| #10938 — tool attachments explicit | PR | many | XL, high | [link](https://github.com/zeroclaw-labs/zeroclaw/pull/10938) |
| #11194 — Microsoft Teams channel | PR | many | XL | [link](https://github.com/zeroclaw-labs/zeroclaw/pull/11194) |

Underlying need: users want **sandbox stability** (3 sandbox bugs filed today), **config safety** (save corruption), and **multi-channel maturity** (Teams, WhatsApp). The local_small profile request signals demand for resource-constrained local deployments.

## 5. Bugs & Stability (ranked by severity)

| Sev | Issue | Summary | Fix PR? |
|---|---|---|---|
| **S0** | [#10495](https://github.com/zeroclaw-labs/zeroclaw/issues/10495) | Config::save() replaces 109 KB config with 702-byte empty file | Open — **#11527** may be related (refuse unproven full saves) |
| **S0** | [#11540](https://github.com/zeroclaw-labs/zeroclaw/issues/11540) | bubblewrap sandbox not detected, falls back to application-layer | None |
| **S1** | [#11525](https://github.com/zeroclaw-labs/zeroclaw/issues/11525) | quickstart fails on Android/Termux | None |
| **S1** | [#11539](https://github.com/zeroclaw-labs/zeroclaw/issues/11539) | Firejail `--nowheel` invalid option | None |
| **S1** | [#11538](https://github.com/zeroclaw-labs/zeroclaw/issues/11538) | Firejail invalid private directory | None |
| **S1** | [#11432](https://github.com/zeroclaw-labs/zeroclaw/issues/11432) | daemon killed mid-turn → session stuck "running" | None |
| **S1** | [#11519](https://github.com/zeroclaw-labs/zeroclaw/issues/11519) | resumed workspace split hides installed plugins | None |
| **S1** | [#8539](https://github.com/zeroclaw-labs/zeroclaw/issues/8539) | AgentEnd missing cost_usd; channel path never emits AgentEnd | None |
| **S2** | [#11418](https://github.com/zeroclaw-labs/zeroclaw/issues/11418) | Copy button in TUI does nothing | None |

Sandbox bugs (#11538, #11539, #11540) all filed same day by same author — likely a common root cause in sandbox detection/initialization logic.

## 6. Feature Requests & Roadmap Signals

- **#5287 local_small runtime profile** (p2, accepted, in-progress) — strong signal for lightweight/edge deployments
- **#7891 Signal media attachments** (accepted, parking-lot) — channel completeness
- **#10993 public runtime composition boundary** (accepted, v0.8.6) — architectural refactor enabling embedded use
- **#11194 Microsoft Teams** — enterprise channel expansion
- **#11104 Cheaper Inference provider** — cost-sensitive operator demand

**Prediction:** v0.8.6 likely to include runtime composition boundary, workspace-split plugin recovery (#11519), and at least one new channel (Teams or WhatsApp improvements).

## 7. User Feedback Summary

**Pain points:**
- Config corruption on save (#10495) — existential fear for operators with 25-agent setups
- Sandbox tooling broken on Linux (bubblewrap, firejail) — security-conscious users blocked
- Android/Termux quickstart failure — mobile/terminal users excluded
- Chat responses delayed behind log notifications (#11482, now closed) — UX jank in TUI
- AgentEnd cost tracking missing — observability gap for billing

**Satisfaction signals:** Multiple high-effort community PRs (Teams, WhatsApp, providers, memory) show healthy contributor engagement despite merge backlog.

## 8. Backlog Watch

These items need maintainer attention soon:

- **#10495** (S0 config save) — open 35 days, no fix PR
- **#11540 / #11539 / #11538** (sandbox) — open 0–1 days, triage needed
- **#8539** (AgentEnd cost) — open 98 days, p1
- **#7891** (Signal media) — open 111 days, accepted but parked
- **#10993** (runtime composition) — open 16 days, accepted, blocks v0.8.6
- PRs awaiting merge (0 merged today): #10935, #10938, #11194, #10391, #11527, #11541, #11543, #11544 — many tagged `needs-maintainer-review`

---

*Generated from GitHub activity snapshot for zeroclaw-labs/zeroclaw on 2026-10-06.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*