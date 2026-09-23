# OpenClaw Ecosystem Digest 2026-09-24

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-09-23 22:15 UTC

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



# OpenClaw Project Digest — 2026-09-24

---

## 1. Today's Overview

OpenClaw shows **high maintenance activity** with 500 issues and 500 pull requests touched in the last 24 hours, but no new releases shipped. The update pipeline is clearly under strain: 41 issues closed and 76 PRs merged/closed, yet the backlog of open issues (459) remains large. The dominant theme is **Gateway stability** — multiple critical crash, hang, and memory issues are clustered around the recent 2026.9.x release line, suggesting an unstable release cycle. Activity is bug-fix heavy rather than feature-forward, indicating the team is in a stabilization phase.

---

## 2. Releases

**No new releases today.** The most recent stable version remains 2026.9.5 (ec9c1a1), which itself has been implicated in multiple regressions (model catalog loss, /tmp ENOSPC, startup hangs). The absence of a follow-up patch release despite a cluster of P0 bugs is a notable concern.

---

## 3. Project Progress

### Merged / Closed PRs Today (76 total)

| PR | Summary | Impact |
|---|---|---|
| [#145169](https://github.com/openclaw/openclaw/pull/145169) | Preserve newer data across failed update rollback | P0 — atomic-update split tracking; protects user data during failed upgrades |
| [#156781](https://github.com/openclaw/openclaw/pull/156781) | Prevent calendar-dependent Workshop test failures | Closed (superseded on main) — CI hygiene |
| [#156692](https://github.com/openclaw/openclaw/pull/156692) | Fix bot stops replying when Buzz relay rate-limits one room | P1 — cross-channel message delivery regression |
| [#156802](https://github.com/openclaw/openclaw/pull/156802) | Send delayed session replies through the original account | P1 — message routing correctness |
| [#156121](https://github.com/openclaw/openclaw/pull/156121) | Avoid Gateway stalls on cold session reads | P1 — event-loop saturation fix |
| [#145676](https://github.com/openclaw/openclaw/pull/145676) | Model catalog scan starves gateway event loop on large catalogs | P1 — event-loop starvation |
| [#145928](https://github.com/openclaw/openclaw/pull/145928) | Fix tmux session listing (corrupted names, detached status) | P2 — tmux skill fix |
| [#145915](https://github.com/openclaw/openclaw/pull/145915) | Validate Linux companion build on native aarch64 in CI | P3 — CI coverage for ARM |
| [#145916](https://github.com/openclaw/openclaw/pull/145916) | Emit real separators in tmux find-sessions.sh | P2 — tmux skill fix |
| [#143220](https://github.com/openclaw/openclaw/pull/143220) | Show why Talk could not start on Android | P2 — UX diagnostics |
| [#137754](https://github.com/openclaw/openclaw/pull/137754) | Restore Archive action for active sessions on iOS | P2 — iOS UX fix |
| [#132724](https://github.com/openclaw/openclaw/pull/132724) | Honor configured outbound message length for LINE | P2 — LINE channel fix |
| [#141301](https://github.com/openclaw/openclaw/pull/141301) | LINE channel access token/secret cannot be secret references | P2 — LINE config fix |
| [#135895](https://github.com/openclaw/openclaw/pull/135895) | Nextcloud Talk: support inbound attachments | P2 — new channel capability |
| [#149880](https://github.com/openclaw/openclaw/pull/149880) | Add google-interactions API backend for Gemini | P2 — new model backend |
| [#145864](https://github.com/openclaw/openclaw/pull/145864) | Browser profile status starts Chrome debugger while idle | P2 — browser extension fix |
| [#145386](https://github.com/openclaw/openclaw/pull/145386) | Tool output goes missing when a tool produces no output | P2 — agent tooling fix |
| [#138943](https://github.com/openclaw/openclaw/pull/138943) | Skip profile rotation for missing-model errors | P2 — failover logic fix |
| [#134425](https://github.com/openclaw/openclaw/pull/134425) | Reshape+restore non-canonical tool-call ids for HTTP continuation | P2 — provider compatibility |
| [#140423](https://github.com/openclaw/openclaw/pull/140423) | Disable iOS branch switching during active runs | P2 — iOS concurrency fix |
| [#156531](https://github.com/openclaw/openclaw/pull/156531) | Run native account models on first turn (Codex) | P2 — Codex backend improvement |
| [#156543](https://github.com/openclaw/openclaw/pull/156543) | Bind workspace recovery to its session source | P2 — worker reliability |
| [#156798](https://github.com/openclaw/openclaw/pull/156798) | Stop obsolete security review reads after new pushes | P2 — CI automation |
| [#156730](https://github.com/openclaw/openclaw/pull/156730) | Retain participant identity in WhatsApp audit inspection | P2 — WhatsApp channel fix |
| [#136365](https://github.com/openclaw/openclaw/pull/136365) | Route collection reviews through subscription auth | P2 — skills/auth fix |
| [#156784](https://github.com/openclaw/openclaw/pull/156784) | Share model auth status preparation across clients | P2 — gateway perf optimization |

**Key pattern:** Multiple PRs target event-loop saturation (#156121, #145676

---

## Cross-Ecosystem Comparison



# Cross-Project Comparison Report — 2026-09-24

## 1. Ecosystem Overview

The personal AI assistant / agent open-source landscape is experiencing a period of rapid maturation, with projects racing to stabilize core runtime behaviors (context compaction, event-loop management, memory lifecycle) while simultaneously expanding channel coverage (WhatsApp, Feishu, LINE, Mattermost, Telegram) and desktop presence. The majority of active projects are in a **stabilization sprint** — fixing P0/P1 regressions from recent releases rather than shipping net-new features — which signals a collectively pre adolescent phase: feature velocity is high, but operational reliability (update mechanics, container lifecycle, certificate management) is emerging as the primary differentiator. Community engagement is strong across the board, with vendors contributing providers directly and users publishing custom skills, indicating a healthy extension ecosystem.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Latest Release | Health Score |
|---|---|---|---|---|
| **OpenClaw** | 500 touched (459 open, 41 closed) | 500 touched (76 merged/closed) | 2026.9.5 (unstable) | 3.5 / 5 |
| **NanoBot** | 7 updated (3 open, 4 closed) | 35 touched (20 merged/closed) | v0.3.5 (regressions) | 4.0 / 5 |
| **Hermes Agent** | 50 updated | 50 updated (14 merged/closed) | None | 4.5 / 5 |
| **NanoClaw** | 4 updated | 29 updated (16 merged/closed) | **v2.4.0** (today) | 4.5 / 5 |
| **CoPaw (QwenPaw)** | 34 updated (17 open, 17 closed) | 24 updated (9 merged/closed) | None | 4.0 / 5 |
| **ZeroClaw** | 11 open | 50 updated (4 merged/closed) | None | 3.0 / 5 |
| **NullClaw** | 17 updated (all open) | 21 updated (8 merged/closed) | None | 3.0 / 5 |
| **LobsterAI** | 0 | 10 updated (8 merged/closed) | **2026.9.23** | 4.5 / 5 |
| **PicoClaw** | 1 critical | 2 (1 open, 1 closed) | None | 2.5 / 5 |
| **IronClaw** | 0 | 1 open (docs) | None | 2.0 / 5 |
| **Moltis** | 0 | 1 open (sandbox) | None | 3.0 / 5 |
| **TinyClaw** | 0 | 0 | — | N/A |
| **ZeptoClaw** | 0 | 0 | — | N/A |

**Key takeaway:** Activity volume alone is not health. ZeroClaw and OpenClaw show the highest raw activity but carry the heaviest critical backlogs. NanoClaw and LobsterAI are the only projects that shipped releases today, and both did so without introducing stated breaking changes.

## 3. OpenClaw's Position

**Advantages vs. peers:**
- **Largest raw activity footprint:** 500 issues + 500 PRs touched in 24h dwarfs all other projects, indicating either a much larger user base reporting issues or a very broad attack surface (multi-channel, multi-platform).
- **Deep event-loop expertise:** The cluster of PRs targeting event-loop saturation (#156121, #145676) reflects a level of systems-level debugging that most TypeScript/Node-based competitors have not yet reached.
- **Reference architecture:** As the "core reference" project, it serves as a downstream integration testbed — LobsterAI's OpenClaw plugin work (#2754, #2755) explicitly depends on OpenClaw's gateway stability.

**Weaknesses vs. peers:**
- **Release instability:** The 2026.9.x line is implicated in multiple regressions (model catalog loss, /tmp ENOSPC, startup hangs), and no follow-up patch exists. This is a credibility risk that NanoClaw and Hermes Agent are positioned to capture.
- **Bug-fix heavy, not feature-forward:** The PR mix is overwhelmingly bug fixes; unlike NanoClaw (v2.4.0 with credential gateways, Iron Proxy, Mattermost) or Hermes Agent (i18n, desktop rendering unification), OpenClaw is not shipping user-facing differentiation.

**Community size comparison:** OpenClaw's issue volume (459 open) suggests a user base an order of magnitude larger than NullClaw (17 open) or PicoClaw (1 critical), but engagement quality matters — PicoClaw's single expired-TLS issue took down the entire project homepage, showing that operational maturity, not just code activity, shapes community trust.

## 4. Shared Technical Focus Areas

Multiple projects are converging on the same technical problems, indicating industry-wide needs:

| Focus Area | Projects | Specific Need |
|---|---|---|
| **Context compaction** | OpenClaw, NanoBot, CoPaw, Hermes Agent | Token-budget guards, concurrent-append locks, oversized-delta recovery, preserving exact wording across idle compaction |
| **Event-loop / runtime saturation** | OpenClaw, NullClaw | Preventing gateway stalls on cold session reads, starved loops on large catalogs, MCP stdio hangs |
| **Channel reliability** | NullClaw, ZeroClaw, CoPaw, OpenClaw | Telegram idle death/reconnect, WhatsApp voice/modality controls, Feishu WebSocket auto-reconnect, Discord socket recovery |
| **Update / install mechanics** | NanoClaw, NullClaw, PicoClaw | Atomic update rollbacks, cutover drain correctness, certificate renewal automation, workspace validation backward compatibility |
| **Memory lifecycle** | NanoBot, NullClaw, ZeroClaw, CoPaw | Unbounded idle-summary cache (leaks), transcript rotation for long-lived containers, markdown memory backend concurrency, tool-result pruning for base64 media |
| **Scheduler / auth wiring** | NullClaw, ZeroClaw, NanoClaw | Scheduler token persistence, ownership checks using installation identity vs. group existence, approval-manager coverage for unattended turns |
| **Sandbox / isolation** | Moltis, ZeroClaw | Per-agent sandbox mounts, run_as UID/GID mapping, forced sandbox enforcement |

**Signal:** The fact that four+ independent projects are debugging the same class of compaction/event-loop bugs suggests that this is a fundamental architectural challenge in the agent runtime pattern, not just individual implementation errors. A shared best-practice document or reference implementation would be valuable to the entire ecosystem.

## 5. Differentiation Analysis

| Project | Feature Focus | Target Users | Technical Architecture |
|---|---|---|---|
| **OpenClaw** | Multi-channel gateway, broad platform coverage | Power users, self-hosters | TypeScript/Node, gateway-centric, event-driven |
| **NanoBot** | Context compaction, WebUI, lightweight | Developers wanting embedded agent | TypeScript, compact runtime, strong WebUI |
| **Hermes Agent** | Desktop GUI, i18n, process management | Desktop-first users, multi-locale teams | Desktop client + backend, transcript-render focus |
| **NanoClaw** | Credential gateways, channel expansion (Mattermost, Slack), model/speed controls | Multi-team, multi-channel deployments | Skill-based gateway architecture, containerized |
| **CoPaw (QwenPaw)** | Feishu/DingTalk deep integration, multi-tenant Hub, agent tooling | Chinese market, enterprise collaboration | Java/TypeScript, agent loop + console, strong CN channel integration |
| **ZeroClaw** | WhatsApp Web, security enrollment, MCP distribution | Mobile-first, security-conscious | Rust, runtime budgets, cross-surface enrollment API |
| **NullClaw** | Telegram reliability, scheduler, low-resource web_search | Edge/low-resource deployers | Zig, lightweight, MCP-focused |
| **LobsterAI** | Coworking interface, Jev decision model, OpenClaw plugin | Enterprise coworking, BYO-key decision models | Electron + dsh runtime, OpenClaw integration layer |
| **PicoClaw** | Mobile pairing (gbr/1), keyless web search | Mobile observability, zero-friction tooling | Lightweight, phone-spectating protocol |
| **Moltis** | Per-agent sandboxing, container isolation | Security-first, multi-tenant agent hosting | Sandbox-centric, per-agent mounts/run_as |
| **IronClaw** | Virtual skills, scoped skill roots | Enterprise multi-tenant skills management | Skills subsystem documentation focus |

**Key architectural divergence:** Projects are choosing fundamentally different runtime models — Rust (ZeroClaw), Zig (NullClaw), TypeScript (OpenClaw, NanoBot, Hermes), Java/TypeScript (CoPaw), Electron (LobsterAI) — which explains why the same class of bugs (event-loop starvation, memory leaks, concurrency races) manifests differently across projects. There is no clear "winning" runtime choice yet.

## 6. Community Momentum & Maturity

**Rapidly iterating (high velocity, high trust):**
- **Hermes Agent** — 50 issues + 50 PRs in 24h, massive render-sweep (53 issues closed in one PR), i18n suite landing. Exceptional maintainer responsiveness.
- **NanoClaw** — Shipped v2.4.0 today with credential gateway architecture, Iron Proxy, Mattermost. Strong feature throughput, update-reliability fixes included.
- **LobsterAI** — Released 2026.9.23 with Jev decision model, coworking rendering unification, OpenClaw integration hardening. Stable and feature-rich.

**Active but stabilizing:**
- **OpenClaw** — Highest activity volume, but bug-fix heavy. Gateway stability is the bottleneck; a clean 2026.9.x patch release is needed.
- **CoPaw** — 34 issues + 24 PRs, high bug-closure rate. Context compaction, tool result pruning, and Feishu channel bugs are being actively triaged.
- **NanoBot** — Fast same-day fixes on compaction bugs (#5879→#5880), but v0.3.5 workspace regression (#5881) has zero responses and blocks multi-instance users.

**High activity, high risk:**
- **ZeroClaw** — 50 PRs touched, but S0 data-loss/security issues (#10968, #10797) have no visible fix PRs. XL PRs are stacking without review. Strong contributor energy, maintainer review is the bottleneck.
- **NullClaw** — 17 open issues, 8 merged PRs, but critical bugs (Telegram SIGSEGV #976, WSL2 CPU spin #870, web_search #871) remain unfixed. Backlog-heavy.

**Quiet / focused:**
- **Moltis** — Single sandbox PR (#1272) advancing per-agent isolation. Steady, no community noise.
- **IronClaw** — Single docs PR. Effectively dormant in this window.
- **PicoClaw** — Community contribution active (Keenable search, phone pairing), but operational crisis (website TLS expiry since Sept 10) dominates attention.
- **TinyClaw / ZeptoClaw** — No activity.

## 7. Trend Signals

**For AI agent developers, the following signals are actionable:**

1. **Compaction is the universal P0.** Every active project is debugging context management. The pattern of "

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-09-24

## 1. Today's Overview
NanoBot showed **high activity** over the last 24 hours: 7 issues updated (3 open, 4 closed) and 35 PRs touched (15 open, 20 merged/closed), with no new releases. Development is clearly clustered around **context compaction and memory management**, which dominates both bug reports and fix PRs — suggesting the team is in a stabilization sprint for this subsystem. The WebUI also saw a burst of feature work (previews, usage dashboards, image delivery), mostly from contributor Re-bin. A vendor contribution (io.net's IO Intelligence provider) signals growing external ecosystem interest.

## 2. Releases
No new releases in the last 24 hours. However, Issue [#5881](https://github.com/HKUDS/nanobot/issues/5881) reports regressions in **v0.3.5**: a new validation rule requires `_nanobot` runtime data to live outside the workspace, breaking multi-instance setups. Users upgrading should note that `Config.runtime_data_dir` is now derived from the config file location and cannot sit inside a workspace directory. A documentation or config-migration note may be warranted.

## 3. Project Progress
**Closed/merged PRs today (20 total), highlights:**
- [#5871](https://github.com/HKUDS/nanobot/pull/5871) — Linear channel native agent UX: mentions, delegated issues, OAuth health checks, revocation, and setup tooling.
- [#5875](https://github.com/HKUDS/nanobot/pull/5875) — New **IO Intelligence (io.net) provider**, an official vendor contribution.
- [#5883](https://github.com/HKUDS/nanobot/pull/5883) — fix(agent): preserve provider state for Codex-native compaction instead of prematurely summarizing.
- [#5878](https://github.com/HKUDS/nanobot/pull/5878) — fix(agent): log mid-turn injected message content previews.
- [#5813](https://github.com/HKUDS/nanobot/pull/5813) — fix(webui): clear stale restart prompts after gateway reconnect.
- [#5851](https://github.com/HKUDS/nanobot/pull/5851) — feat(webui): usage ranges (7/30/365d), activity calendar, provider/model breakdowns.
- [#5882](https://github.com/HKUDS/nanobot/pull/5882) — docs: correct context-compaction behavior; document `/compact`.
- [#5854](https://github.com/HKUDS/nanobot/pull/5854) — Draft closed as deferred (prompt commands / task panels), kept for history.

Closed issues include [#5870](https://github.com/HKUDS/nanobot/issues/5870) (duplicate Telegram compaction notices), [#5290](https://github.com/HKUDS/nanobot/issues/5290) (dedupe atomic JSONL write idiom), and long-standing community contributions [#2152](https://github.com/HKUDS/nanobot/issues/2152) / [#2160](https://github.com/HKUDS/nanobot/issues/2160).

## 4. Community Hot Topics
- [#5881](https://github.com/HKUDS/nanobot/issues/5881) — v0.3.5 workspace validation breaking multi-instance users (Chinese-language report, no replies yet). Underlying need: clearer config migration and backward compatibility for runtime data placement.
- [#5880](https://github.com/HKUDS/nanobot/pull/5880) + [#5879](https://github.com/HKUDS/nanobot/issues/5879) — oversized `read_file` results aborting turns even after compaction. Fast fix turnaround (same day), reflecting active maintainer engagement.
- [#5780](https://github.com/HKUDS/nanobot/pull/5780) — "stop sending context compaction notifications": PR author pushes back on #5656 behavior, calling notices "quite annoying." Underlying need: user control over background-process noise (config toggle).
- [#5520](https://github.com/HKUDS/nanobot/pull/5520) — Langfuse tracing for Codex, open since Aug 24 with `conflict` label; observability remains a persistent community ask.

## 5. Bugs & Stability
Ranked by severity:
1. **P0/P1 — Compaction deadlock** [#5849](https://github.com/HKUDS/nanobot/issues/5849): automatic `summarize_transcript` has no token-budget guard; history over input budget can never recover. Related fix: [#5884](https://github.com/HKUDS/nanobot/pull/5884) prevents compaction from overwriting concurrent appends (P0).
2. **P1 — Turn abort on oversized tool results** [#5879](https://github.com/HKUDS/nanobot/issues/5879); fix PR [#5880](https://github.com/HKUDS/nanobot/pull/5880) open.
3. **P1 — Duplicate Telegram compaction notices** [#5870](https://github.com/HKUDS/nanobot/issues/5870) — closed; likely superseded by [#5780](https://github.com/HKUDS/nanobot/pull/5780).
4. **P1 — Cold-start tokenizer latency** — PR [#5861](https://github.com/HKUDS/nanobot/pull/5861) warms fallback tokenizer in background; has merge conflict.
5. **P2 — Oversized lines stall `read_file`** [#5824](https://github.com/HKUDS/nanobot/pull/5824) adds bounded reads and column continuation.
6. **P2 — Unbounded idle-summary cache** [#5664](https://github.com/HKUDS/nanobot/pull/5664) (memory leak; conflict, open since Sep 4).
7. **v0.3.5 regression** [#5881](https://github.com/HKUDS/nanobot/issues/5881) — startup rejection when `_nanobot` sits in workspace; no fix PR yet.

## 6. Feature Requests & Roadmap Signals
- **Memory quality** — PR [#5885](https://github.com/HKUDS/nanobot/pull/5885) gates idle transcript replacement on a token threshold to preserve short-session resume quality (P1). Likely near-term merge.
- **Skill safety** — [#5405](https://github.com/HKUDS/nanobot/pull/5405) supports `disable-model-invocation: true` for manual-only skills (deployment/publishing side effects). Good candidate for next minor release.
- **Native WhatsApp voice (STT+TTS)** — [#2152](https://github.com/HKUDS/nanobot/issues/2152), closed after community Fish Audio skill surfaced; suggests official voice support may enter the roadmap.
- **Observability** — Langfuse tracing for Codex [#5520](https://github.com/HKUDS/nanobot/pull/5520) pending conflict resolution.
- **Heartbeat shared sessions** — [#4551](https://github.com/HKUDS/nanobot/pull/4551) `isolated_session` config, open since June — candidate for a decision.
- **Predictions for next version:** compaction robustness fixes (budget guard, concurrent-append lock, oversized delta recovery), tokenizer warm-up, and the io.net provider integration.

## 7. User Feedback Summary
- **Pain point #1: compaction behavior.** Users are hit by repeated notifications (#5870), lost exact wording after idle compaction (docs PR #5882 acknowledges mismatch between docs and behavior), and turn aborts (#5879). The pattern shows compaction shipped faster than its observability and edge-case handling.
- **Pain point #2: upgrade friction.** v0.3.5's stricter workspace validation broke a multi-instance user (#5881), highlighting demand for migration docs and validation warnings rather than hard failures.
- **Positive signals:** community members build and publish their own skills (Fish Audio voice, boot notifications), and vendors contribute providers directly (io.net) — indicating strong engagement and a healthy extension ecosystem. Fast same-day fixes (#5879→#5880, #5870 closure) reflect responsive triage on high-priority bugs.

## 8. Backlog Watch
Items needing maintainer attention:
- [#5520](https://github.com/HKUDS/nanobot/pull/5520) — Langfuse Codex tracing: open since **Aug 24**, conflicted; either merge, request rebase, or close with rationale.
- [#4551](https://github.com/HKUDS/nanobot/pull/4551) — heartbeat `isolated_session`: open since **Jun 26** (~3 months); needs a design decision.
- [#5664](https://github.com/HKUDS/nanobot/pull/5664) — unbounded idle-summary cache: real memory leak, open since Sep 4, conflicted.
- [#5881](https://github.com/HKUDS/nanobot/issues/5881) — v0.3.5 workspace regression with **zero responses** so far; a quick triage reply is advisable given it blocks startup for affected users.

**Health assessment:** strong momentum and triage responsiveness on compaction bugs; main risks are v0.3.5 upgrade friction and a handful of stale, conflicted PRs awaiting maintainer decisions.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>



Here is the structured project digest for **Hermes Agent** on **2026-09-24**, compiled from the GitHub activity up to September 23, 2026.

---

### 1. Today's Overview
The project is experiencing very high activity, characterized by a massive cleanup sweep of desktop client rendering bugs alongside a major push toward desktop localization (i18n) and backend profile isolation. With 50 issues and 50 pull requests updated in the last 24 hours, developer responsiveness remains exceptionally high, closing 46 issues and 14 pull requests. The overall project health is strong, transitioning from critical bug triage to hardening the desktop GUI, multi-profile backend architecture, and delivery consistency.

---

### 2. Releases
* **No new releases** were published today. 

---

### 3. Project Progress
The development team merged and closed several key pull requests today, focusing heavily on UI rendering stability, localization, and process management:
* **Transcript-Render Sweep:** PR [#120692](https://github.com/NousResearch/hermes-agent/pull/120692) closed a massive cluster of 53 open render issues, fixing duplicate live bubbles, vanishing replies, and message ordering issues in the desktop client.
* **Localization (i18n) Suite:** A series of PRs by OutThisLife—[#120694](https://github.com/NousResearch/hermes-agent/pull/120694) (sidebar filter menu), [#120695](https://github.com/NousResearch/hermes-agent/pull/120695) (voice setting descriptions), [#120696](https://github.com/NousResearch/hermes-agent/pull/120696) (Kanban labels), and [#120700](https://github.com/NousResearch/hermes-agent/pull/120700) (macOS locale markers)—localized UI components across six supported locales, fixing Unicode stripping issues.
* **Auxiliary Model Fixes:** PR [#120451](https://github.com/NousResearch/hermes-agent/pull/120451) resolved session-title generation on reasoning-mandatory models, preventing HTTP 400 errors during auxiliary calls.
* **Process Tree Cleanup:** PR [#120306](https://github.com/NousResearch/hermes-agent/pull/120306) fixed orphaned foreground terminal command process trees when the TUI/Desktop gateway exits mid-tool.
* **Exactly-Once Delivery Verification:** PR [#120344](https://github.com/NousResearch/hermes-agent/pull/120344) added end-to-end testing suites proving exactly-once delivery for gateway replies, cron deliveries, and the boot outbox through crashes and DST transitions.

---

### 4. Community Hot Topics
The community discussion has been heavily dominated by desktop UI rendering anomalies, state synchronization, and configuration integrity:
* **The Desktop Duplication/Disappearance Cluster:** Issues like [#68927](https://github.com/NousResearch/hermes-agent/issues/68927) (14 comments), [#70108](https://github.com/NousResearch/hermes-agent/issues/70108) (13 comments), and [#118670](https://github.com/NousResearch/hermes-agent/issues/118670) (12 comments) highlight extreme user frustration with messages rendering twice or disappearing during long, tool-heavy turns. The underlying need is a robust offline/online state synchronization mechanism that prevents hydration races between the live stream and local database snapshots.
* **Config Serialization Integrity:**

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



Based on the GitHub activity for **PicoClaw (github.com/sipeed/picoclaw)** as of **2026-09-24**, here is the structured project digest.

---

### 1. Today's Overview
PicoClaw shows moderate development activity, characterized by one critical operational issue and mixed pull request activity (one open feature addition and one closed/merged integration). The project's overall health is impacted by a severe, time-sensitive outage of its primary website due to an expired TLS certificate, which requires immediate maintainer attention. Despite the operational setback, community contribution momentum remains active, with users submitting integrations for new search providers and mobile pairing protocols.

---

### 2. Releases
*No new releases have been published today.*

---

### 3. Project Progress
* **PR #3344 [CLOSED] - Add Build Remote Agent phone pairing (gbr/1)**: This feature has been successfully merged/closed. It introduces a pairing-device adapter that allows mobile phones to spectate the desktop agent. It utilizes the `gbr/1` protocol, supporting QR code and 8-character pairing codes via MIT-licensed `gbr-agent` (v0.6.0+), attaching to `http://127.0.0.1:8788` or stdio. This marks significant progress in cross-device remote observability and interaction.

---

### 4. Community Hot Topics
* **[CRITICAL] Issue #3377 — TLS certificate for picoclaw.io expired (2 comments, 1 👍)**: 
  * **Link**: [sipeed/picoclaw#3377](https://github.com/sipeed/picoclaw/issues/3377)
  * **Analysis**: This is the most active and urgent discussion. The underlying community need is the immediate restoration of the official project homepage. The complete outage of `picoclaw.io` since September 10, 2026, blocks users from accessing documentation, assets, and official updates, highlighting a critical gap in domain management and automated certificate renewal.
* **PR #3370 — feat(tools): add Keenable web search provider**: 
  * **Link**: [sipeed/picoclaw#3370](https://github.com/sipeed/picoclaw/pull/3370)
  * **Analysis**: This open PR represents a community demand for seamless, keyless web search capabilities. Integrating the Keenable public endpoint allows users to perform web searches out of the box without API keys, indicating a desire for low-friction tooling.

---

### 5. Bugs & Stability
* **[CRITICAL] Website Inaccessibility (Issue #3377)**: The TLS certificate for `picoclaw.io` expired on September 10, 2026, rendering the entire website unreachable across all browsers and standard TLS clients. This is a severe operational stability issue. No dedicated fix PR is currently visible in the data, meaning maintainers must manually intervene to renew the certificate and establish automated renewal monitoring to prevent recurrence.

---

### 6. Feature Requests & Roadmap Signals
* **Keyless Web Search Integration (PR #3370)**: The integration of the Keenable search provider signals a roadmap direction toward zero-dependency third-party API integrations. If merged, this feature is highly likely to be packaged in the next minor release to expand the `web_search` tool options.
* **Mobile Spectating & Remote Pairing (PR #3344)**: The closed PR indicates that mobile integration and remote desktop-to-phone observability are active roadmap themes. We can expect subsequent updates to the `gbr-agent` compatibility and official pairing documentation in upcoming versions.

---

### 7. User Feedback Summary
* **Pain Points**: Users are highly frustrated by the sudden and complete loss of access to the official project website (`picoclaw.io`) due to the expired TLS certificate. This impacts documentation access and overall trust in the project's operational reliability.
* **Positive Engagement**: High enthusiasm is shown for utility-focused integrations. Contributions like the Keenable search provider and the phone pairing protocol show that users are actively looking to expand PicoClaw’s remote utility and search capabilities without requiring complex setup.

---

### 8. Backlog Watch
* **Issue #3377 (Website TLS Expiry)**: Needs immediate, urgent maintainer action to restore the website and implement automated SSL certificate renewals.
* **PR #3370 (Keenable Web Search Provider)**: Open since September 7, 2026; requires maintainer review, security assessment of the endpoint headers, and potential merge into the core toolset.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-09-24

Data source: GitHub activity as provided for NanoClaw (`nanocoai/nanoclaw` in the dataset; upstream referenced as `qwibitai/nanoclaw`). All links below use the dataset URLs.

## 1. Today's Overview

NanoClaw had a high-activity day: 29 PRs were updated in the last 24h, with 16 merged/closed and 13 still open, alongside 4 updated issues and 1 new release. The project shipped **v2.4.0**, a significant release focused on credential-gateway architecture, channel expansion, and model/speed controls. The closed/merged PR set shows strong core-team throughput around gateway skills, update reliability, Teams/Slack naming behavior, and provider pins. At the same time, the open issue queue highlights recurring friction in self-update mechanics, container lifecycle cleanup, and gateway identity checks. Overall project health is **active and feature-velocity-positive**, but update/install reliability and long-lived container behavior remain the main stability risks.

## 2. Releases

### v2.4.0
- Link: [v2.4.0 release](https://github.com/nanocoai/nanoclaw/releases/tag/v2.4.0)
- Release PR: [nanocoai/nanoclaw#3877](https://github.com/nanocoai/nanoclaw/pull/3877)

**Key changes in v2.4.0:**
- Credential gateways are now installed through skills.
- **OneCLI remains the default gateway**; **Iron Proxy is new**.
- Community-portal setup for Echo’s hardened image and a managed Slack app.
- Install-wide and per-group **model and speed controls**.
- New **Mattermost** channel.
- Reworked **OpenCode provider**.

**Breaking changes / migration notes:**
- No explicit breaking changes are stated in the provided release notes.
- Migration consideration: gateway selection is now skill-based. Existing installations are reported to retain their selected gateway, and existing OneCLI configuration is detected and preserved via PRs [#3816](https://github.com/nanocoai/nanoclaw/pull/3816) and [#3818](https://github.com/nanocoai/nanoclaw/pull/3818).
- OpenCode now uses the shared credential-connection interface instead of calling OneCLI directly; Iron Proxy authentication supports API keys or native ChatGPT sign-in via Iron Control ([#3825](https://github.com/nanocoai/nanoclaw/pull/3825)).
- Users upgrading should ensure the update-controller fixes from [#3750](https://github.com/nanocoai/nanoclaw/pull/3750) / issue [#3869](https://github.com/nanocoai/nanoclaw/issues/3869) and cutover fix [#3873](https://github.com/nanocoai/nanoclaw/pull/3873) / issue [#3828](https://github.com/nanocoai/nanoclaw/issues/3828) are included; otherwise `prepare` or cutover can fail.

## 3. Project Progress

In the last 24h, **16 PRs were merged/closed**. The most notable closed/merged work:

- **Release engineering:** [nanocoai/nanoclaw#3877](https://github.com/nanocoai/nanoclaw/pull/3877) — `chore(release): v2.4.0`.
- **Gateway architecture:**
  - [#3815](https://github.com/nanocoai/nanoclaw/pull/3815) — centralize the credential gateway contract.
  - [#3816](https://github.com/nanocoai/nanoclaw/pull/3816) — extract OneCLI into an installable skill.
  - [#3817](https://github.com/nanocoai/nanoclaw/pull/3817) — add the Iron Proxy gateway skill.
  - [#3818](https://github.com/nanocoai/nanoclaw/pull/3818) — select gateway without changing provider login.
  - [#3825](https://github.com/nanocoai/nanoclaw/pull/3825) — OpenCode authentication through Iron Proxy.
- **Update/install reliability:**
  - [#3750](https://github.com/nanocoai/nanoclaw/pull/3750) — extract the whole `scripts/` tree for the update controller.
  - [#3873](https://github.com/nanocoai/nanoclaw/pull/3873) — stop this install’s containers at cutover instead of waiting for them.
- **Channels/configuration:**
  - [#3875](https://github.com/nanocoai/nanoclaw/pull/3875) — prompt name follows the bot’s display name when `assistant_name` is unset.
  - [#3876](https://github.com/nanocoai/nanoclaw/pull/3876) — Teams bridge receives the bot’s display name from inbound activities.
- **Provider/tooling fixes:**
  - [#3872](https://github.com/nanocoai/nanoclaw/pull/3872) — keep Codex working through Iron after a rejected WebSocket upgrade.
  - [#3868](https://github.com/nanocoai/nanoclaw/pull/3868) — bump Claude Code to 2.1.280 and Agent SDK to 0.3.280.
  - [#3867](https://github.com/nanocoai/nanoclaw/pull/3867) — pin `@openai/codex` 0.155.1.
  - [#3494](https://github.com/nanocoai/nanoclaw/pull/3494) — Build Remote Agent phone pairing (`gbr/1`).
  - [#12](https://github.com/nanocoai/nanoclaw/pull/12) — only update `lastAgentTimestamp` on agent success.

**What advanced:** the v2.4.0 gateway skill architecture landed, update/cutover reliability received direct fixes, channel naming behavior improved for Slack/Teams-style shared bots, and provider versions were refreshed. Open PRs continue work on TypeSafe tooling, Apple Container support, setup cleanup, sweep timer overrides, and OpenCode CI stability.

## 4. Community Hot Topics

Comment/reaction volume is low in the provided data: reactions are 0 across shown issues, and only two issues have 1 comment each. PR comment counts are largely undefined.

- [nanocoai/nanoclaw#3869](https://github.com/nanocoai/nanoclaw/issues/3869) — **CLOSED**, 1 comment. `update-nanoclaw` controller archive list missing transitive imports; `prepare` crashes with `MODULE_NOT_FOUND`.
- [nanocoai/nanoclaw#3732](https://github.com/nanocoai/nanoclaw/issues/3732) — **OPEN**, 1 comment. Transcript rotation never runs for tasks that keep their container alive.
- [nanocoai/nanoclaw#3828](https://github.com/nanocoai/nanoclaw/issues/3828) — **CLOSED**, 0 comments. Cutover drain can never succeed because the service stops before the containers it waits on.
- [nanocoai/nanoclaw#3874](https://github.com/nanocoai/nanoclaw/issues/3874) — **OPEN**, 0 comments. OneCLI gateway ownership check uses group existence, not installation identity.

**Underlying needs:** users and maintainers are focused on safe self-updating, predictable container lifecycle management, and gateway/credential identity correctness. The low comment/reaction counts suggest discussion is still concentrated in maintainer-driven PRs rather than broad community debate.

## 5. Bugs & Stability

Ranked by likely severity based on the provided summaries:

**High severity**
1. [#3869](https://github.com/nanocoai/nanoclaw/issues/3869) — CLOSED. `update-nanoclaw` prepare crashes with `MODULE_NOT_FOUND` due to a fixed `git archive` file list missing transitive imports. Fix PR exists: [#3750](https://github.com/nanocoai/nanoclaw/pull/3750).
2. [#3828](https://github.com/nanocoai/nanoclaw/issues/3828) — CLOSED. `/update-nanoclaw` cutover drain can never succeed; host service is stopped before the containers it waits on. Fix PR exists: [#3873](https://github.com/nanocoai/nanoclaw/pull/3873).

**Medium severity**
3. [#3874](https://github.com/nanocoai/nanoclaw/issues/3874) — OPEN. OneCLI gateway ownership check uses group existence rather than installation identity. Confirmed not an exploitable vulnerability, but flagged as a safety/security-hardening issue. No fix PR identified in the dataset.
4. [#3732](https://github.com/nanocoai/nanoclaw/issues/3732) — OPEN. `maybeRotateContinuation()` only runs from `runPollLoop()` once per container start; scheduled tasks with short recurrence can keep containers alive indefinitely, so transcript rotation never runs. No fix PR identified in the dataset.
5. [#3646](https://github.com/nanocoai/nanoclaw/pull/3646) — OPEN fix PR. Hard-coded `ABSOLUTE_CEILING_MS` and `CLAIM_STUCK_MS` can kill slow local-model backends mid-turn; PR adds global env overrides.
6. [#3841](https://github.com/nanocoai/nanoclaw/pull/3841) — OPEN fix PR. OpenCode memory hook uses synchronous spawn and can wedge `bun test` in CI for hours; fix uses async spawn.
7. [#3878](https://github.com/nanocoai/nanoclaw/pull/3878) — OPEN fix PR. Setup’s post-ping cleanup deletes the temporary ping agent’s folder while leaving its container running.

**Lower severity / already addressed**
- [#3872](https://github.com/nanocoai/nanoclaw/pull/3872) — CLOSED. Codex through Iron Proxy failed after a rejected WebSocket upgrade; fixed.
- [#12](https://github.com/nanocoai/nanoclaw/pull/12) — CLOSED. `lastAgentTimestamp` advanced on failure, causing messages to be skipped on retry; fixed.
- [#3868](https://github.com/nanocoai/nanoclaw/pull/3868) — CLOSED. Claude Code / Agent SDK bump with a resumed-agent compatibility guard.

## 6. Feature Requests & Roadmap Signals

**Open feature-oriented work**
- [#3848](https://github.com/nanocoai/nanoclaw/pull/3848) — `feat(skills): add /add-typesafe-tool`, adding TypeSafe Jev judgments as a container tool.
- [#3503](https://github.com/nanocoai/nanoclaw/pull/3503) — `feat(add-apple-container): run agent sessions on Apple container instead of Docker (macOS)`.

**Closed/released feature work**
- [#3817](https://github.com/nanocoai/nanoclaw/pull/3817) — Iron Proxy gateway.
- [#3818](https://github.com/nanocoai/nanoclaw/pull/3818) — gateway selection during setup.
- [#3825](https://github.com/nanocoai/nanoclaw/pull/3825) — OpenCode authentication through Iron Proxy.
- [#3494](https://github.com/nanocoai/nanoclaw/pull/3494) — Build Remote Agent phone pairing.
- v2.4.0 also added Mattermost, managed Slack app setup, and install-wide/per-group model and speed controls.

**Prediction for next version / near-term roadmap:** the next release is likely to focus on gateway/provider polish and follow-up fixes from v2.4.0, plus a small patch release for update/cutover reliability. Apple Container support ([#3503](https://github.com/nanocoai/nanoclaw/pull/3503)) and TypeSafe tooling ([#3848](https://github.com/nanocoai/nanoclaw/pull/3848)) are plausible candidates if maintainers prioritize platform expansion and agent tooling. Channel expansion and per-group controls may continue, given the Mattermost and Slack work in v2.4.0.

## 7. User Feedback Summary

The dataset does not include direct satisfaction ratings or user surveys; feedback is inferred from issue/PR summaries.

**Real pain points:**
- Self-update is fragile: `prepare` crashes ([#3869](https://github.com/nanocoai/nanoclaw/issues/3869)) and cutover drain cannot complete ([#3828](https://github.com/nanocoai/nanoclaw/issues/3828)).
- Container lifecycle management leaks resources or fails cleanup: transcript rotation never runs for long-lived containers ([#3732](https://github.com/nanocoai/nanoclaw/issues/3732)); setup leaves a ping-agent container running ([#3878](https://github.com/nanocoai/nanoclaw/pull/3878)).
- Gateway identity and credential safety need hardening: OneCLI ownership check uses group existence rather than installation identity ([#3874](https://github.com/nanocoai/nanoclaw/issues/3874)).
- Slow local-model backends can be killed by hard-coded sweep timers ([#3646](https://github.com/nanocoai/nanoclaw/pull/3646)).
- Provider/CI edge cases remain: OpenCode memory hook can wedge `bun test` ([#3841](https://github.com/nanocoai/nanoclaw/pull/3841)); Codex through Iron Proxy had auth/WebSocket issues ([#3872](https://github.com/nanocoai/nanoclaw/pull/3872)).

**Use cases visible in the data:** multi-channel personal AI assistant deployment, shared bot identities across Slack/Teams/Mattermost, self-hosted credential gateways, local model backends, macOS Apple Container sessions, and phone-based remote agent pairing/spectating.

**Sentiment:** feature velocity and maintainer responsiveness appear strong, especially around v2.4.0. Dissatisfaction is concentrated in upgrade reliability and container/session hygiene rather than core feature direction.

## 8. Backlog Watch

Important open items that may need maintainer attention, especially where comments are low or absent:

- [#3732](https://github.com/nanocoai/nanoclaw/issues/3732) — OPEN since 2026-09-07, 1 comment. Transcript rotation failure for long-lived containers; no fix PR identified.
- [#3646](https://github.com/nanocoai/nanoclaw/pull/3646) — OPEN since 2026-08-29. Fix PR for sweep timer env overrides; no comments shown.
- [#3503](https://github.com/nanocoai/nanoclaw/pull/3503) — OPEN since 2026-08-24. Apple Container support for macOS; feature skill, no comments shown.
- [#3841](https://github.com/nanocoai/nanoclaw/pull/3841) — OPEN since 2026-09-16. Fix PR for OpenCode memory hook CI wedge; no comments shown.
- [#3874](https://github.com/nanocoai/nanoclaw/issues/3874) — OPEN since 2026-09-23. OneCLI ownership check hardening; new but security-adjacent and currently uncommented.
- [#3878](https://github.com/nanocoai/nanoclaw/pull/3878) — OPEN since 2026-09-23. Setup ping-agent container cleanup fix; new and uncommented.

**Assessment:** the project is healthy in throughput and release cadence, with clear maintainer ownership of gateway and update work. The main watch items are not feature gaps but reliability and lifecycle correctness: update/cutover safety, container cleanup, transcript rotation, and gateway identity checks.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-09-24

*Data window: last 24h, based on the provided GitHub snapshot.*

## 1. Today's Overview
NullClaw showed high maintenance activity: **17 issues were updated, all still open**, and **21 PRs were updated — 13 open and 8 closed/merged**. No new releases were published. Activity is concentrated on bug fixes and long-standing integration requests, especially Telegram reliability, scheduler auth, low-resource `web_search`, CLI/REPL behavior, and MCP hangs. Overall project health is **active but backlog-heavy**: several high-severity bugs have fix PRs in flight, but critical items such as #976 (SIGSEGV) and #871 (`web_search`) still need landing and release.

## 2. Releases
None in this window. No new versions, breaking changes, or migration notes.

## 3. Project Progress
**Closed/merged PRs today:**
- [PR #965](https://github.com/nullclaw/nullclaw/pull/965) — structured streaming tool-call support for SSE parser.
- [PR #986](https://github.com/nullclaw/nullclaw/pull/986) — configurable SQLite memory database path.
- [PR #996](https://github.com/nullclaw/nullclaw/pull/996) — bounds stdio MCP response waits; fixes #991.
- [PR #978](https://github.com/nullclaw/nullclaw/pull/978) — Discord typing thread moved to heavy runtime stack.
- [PR #980](https://github.com/nullclaw/nullclaw/pull/980) — persists paired token to disk during `/pair`; fixes #839.
- [PR #981](https://github.com/nullclaw/nullclaw/pull/981) — adds `grok-cli` provider.
- [PR #979](https://github.com/nullclaw/nullclaw/pull/979) — configurable `auto_recall`, `recall_limit`, `max_context_bytes`; addresses #919.
- [PR #969](https://github.com/nullclaw/nullclaw/pull/969) — structured `approval_request` / `approval_response` flow.

**Open PR pipeline advancing fixes/features:**
- [PR #985](https://github.com/nullclaw/nullclaw/pull/985) — 16 MiB stack for agent turn path; closes #976.
- [PR #984](https://github.com/nullclaw/nullclaw/pull/984) — poll failures age out dead polling thread; closes #972.
- [PR #970](https://github.com/nullclaw/nullclaw/pull/970) — CLI arrow-key handling in agent REPL; addresses #865.
- [PR #971](https://github.com/nullclaw/nullclaw/pull/971) — native tool calls during SSE streaming.
- [PR #987](https://github.com/nullclaw/nullclaw/pull/987) — loop hygiene for long local tool-heavy runs.
- [PR #953](https://github.com/nullclaw/nullclaw/pull/953) — Discord closed-gateway socket recovery.
- [PR #954](https://github.com/nullclaw/nullclaw/pull/954) — cron one-shot use-after-free fix.
- [PR #959](https://github.com/nullclaw/nullclaw/pull/959) — paired token persistence for scheduler tool access.
- [PR #962](https://github.com/nullclaw/nullclaw/pull/962) — native Anthropic provider docs.
- [PR #963](https://github.com/nullclaw/nullclaw/pull/963) — Weixin iLink QR auth docs/hardening.
- [PR #966](https://github.com/nullclaw/nullclaw/pull/966) — secure buffered curl fallback on Android.
- [PR #777](https://github.com/nullclaw/nullclaw/pull/777) — docs structural cleanup.

## 4. Community Hot Topics
PR comment counts were undefined in the supplied data, so hot-topic ranking uses issue comments/reactions.

- [Issue #871](https://github.com/nullclaw/nullclaw/issues/871) — **8 comments** — `web_search` is impractical on low-resource devices without direct DuckDuckGo support. Underlying need: a cheap/offline-friendly search path; related request [Issue #623](https://github.com/nullclaw/nullclaw/issues/623) for `ddgs`.
- [Issue #972](https://github.com/nullclaw/nullclaw/issues/972) — **5 comments, 1 👍** — Telegram channel stops responding after idle periods. Underlying need: robust channel supervision and reconnect behavior.
- [Issue #915](https://github.com/nullclaw/nullclaw/issues/915) — **5 comments, 1 👍** — scheduler unauthorized in Ubuntu/Ollama setups. Underlying need: reliable scheduler token/auth persistence.
- [Issue #865](https://github.com/nullclaw/nullclaw/issues/865) — **4 comments** — CLI prints control characters for arrow keys. Underlying need: proper REPL line editing.
- [Issue #976](https://github.com/nullclaw/nullclaw/issues/976) — **4 comments** — SIGSEGV on every inbound Telegram message on aarch64. Underlying need: stack/runtime sizing fix for messaging workers.

## 5. Bugs & Stability
**Critical**
- [Issue #976](https://github.com/nullclaw/nullclaw/issues/976) — SIGSEGV on every inbound Telegram message; crash-loop on aarch64 Linux v2026.5.29. Fix PR: [PR #985](https://github.com/nullclaw/nullclaw/pull/985) open.
- [Issue #871](https://github.com/nullclaw/nullclaw/issues/871) — `web_search` impractical on weak devices; no direct DuckDuckGo support. Related feature PR/request: [Issue #623](https://github.com/nullclaw/nullclaw/issues/623) `ddgs`.

**High**
- [Issue #991](https://github.com/nullclaw/nullclaw/issues/991) — MCP stdio calls hang indefinitely behind Proxmox launcher lock. Fix PR: [PR #996](https://github.com/nullclaw/nullclaw/pull/996) closed.
- [Issue #972](https://github.com/nullclaw/nullclaw/issues/972) — Telegram channel dies after idle. Fix PR: [PR #984](https://github.com/nullclaw/nullclaw/pull/984) open.
- [Issue #915](https://github.com/nullclaw/nullclaw/issues/915) — scheduler unauthorized. Related fixes: [PR #980](https://github.com/nullclaw/nullclaw/pull/980) closed, [PR #959](https://github.com/nullclaw/nullclaw/pull/959) open.
- [Issue #839](https://github.com/nullclaw/nullclaw/issues/839) — bot has no scheduler access. Related fixes: [PR #980](https://github.com/nullclaw/nullclaw/pull/980) closed, [PR #959](https://github.com/nullclaw/nullclaw/pull/959) open.
- [Issue #870](https://github.com/nullclaw/nullclaw/issues/870) — gateway `accept4` busy loop at 100% CPU on WSL2. No fix PR listed.

**Medium**
- [Issue #865](https://github.com/nullclaw/nullclaw/issues/865) — CLI control-character garbage for arrow keys. Fix PR: [PR #970](https://github.com/nullclaw/nullclaw/pull/970) open.
- [Issue #932](https://github.com/nullclaw/nullclaw/issues/932) — docs list invalid Zig 0.15.2; build requires Zig 0.16.0 for `std.Io.Dir`. No PR listed.
- [Issue #919](https://github.com/nullclaw/nullclaw/issues/919) — automatic FTS5 memory recall on every message; no per-message disable. Fix PR: [PR #979](https://github.com/nullclaw/nullclaw/pull/979) closed.
- [PR #954](https://github.com/nullclaw/nullclaw/pull/954) — one-shot cron jobs silently fail due to use-after-free in `OutboundMessage.channel`; open.
- [PR #953](https://github.com/nullclaw/nullclaw/pull/953) — Discord closed gateway socket recovery; open.
- [PR #978](https://github.com/nullclaw/nullclaw/pull/978) — Discord typing thread stack overflow; closed.

## 6. Feature Requests & Roadmap Signals
- [Issue #190](https://github.com/nullclaw/nullclaw/issues/190) — subagent spawning/intercommunication with different providers.
- [Issue #817](https://github.com/nullclaw/nullclaw/issues/817) — WeChat QR code login; PR [PR #963](https://github.com/nullclaw/nullclaw/pull/963) open.
- [Issue #624](https://github.com/nullclaw/nullclaw/issues/624) — vision pipeline: images/files directly to agent with automatic base64 encoding.
- [Issue #495](https://github.com/nullclaw/nullclaw/issues/495) — local web channel via CloudFlare/nginx tunnels.
- [Issue #623](https://github.com/nullclaw/nullclaw/issues/623) — add `ddgs` option for `web_search`; ties directly to #871.
- [Issue #631](https://github.com/nullclaw/nullclaw/issues/631) — `GET /status` endpoint for agent monitoring.
- [Issue #919](https://github.com/nullclaw/nullclaw/issues/919) — disable automatic memory recall per message; PR [PR #979](https://github.com/nullclaw/nullclaw/pull/979) closed.
- [Issue #767](https://github.com/nullclaw/nullclaw/issues/767) — native Anthropic API keys; PR [PR #962](https://github.com/nullclaw/nullclaw/pull/962) open.

**Prediction:** the next release is likely to absorb closed PRs around memory configuration (#979), approval flow (#969), `grok-cli` (#981), configurable memory DB path (#986), and MCP timeouts (#996), plus high-priority open fixes if merged: #985, #984, #970, #962, #963, #966, #954, #959, #971, #987, #953. Longer-horizon requests like #624 vision, #631 `/status`, #495 tunnels, and #190 subagents may need more design/review.

## 7. User Feedback Summary
**Pain points:**
- Low-resource/edge deployments: `web_search` (#871), WSL2 CPU spin (#870), memory recall overhead (#919).
- Messaging reliability: Telegram idle death (#972), Telegram SIGSEGV (#976), Discord socket/typing issues (#953, #978).
- Scheduler/auth: unauthorized scheduler (#915), bot scheduler access (#839).
- CLI UX: broken arrow keys (#865).
- MCP integration: indefinite stdio hangs (#991).
- Provider/config gaps: native Anthropic API keys (#767).
- Build/docs friction: wrong Zig version (#932).
- Platform coverage: WeChat QR (#817), Android/Termux HTTP (#966).

**Satisfaction/dissatisfaction:** users are actively reporting and testing real deployments (Ollama, Proxmox, WSL2, Telegram, Discord, Android), and there is visible community PR throughput. Dissatisfaction is driven by long-lived critical bugs, a large open backlog, and no release in this window.

## 8. Backlog Watch
Long-unanswered or high-impact items needing maintainer attention:

**Issues**
- [Issue #190](https://github.com/nullclaw/nullclaw/issues/190) — subagent spawn, open since 2026-03-01.
- [Issue #495](https://github.com/nullclaw/nullclaw/issues/495) — local web channel tunnels, open since 2026-03-13.
- [Issue #623](https://github.com/nullclaw/nullclaw/issues/623) / [Issue #624](https://github.com/nullclaw/nullclaw/issues/624) / [Issue #631](https://github.com/nullclaw/nullclaw/issues/631) — `ddgs`, vision pipeline, `/status`, open since 2026-03-18.
- [Issue #767](https://github.com/nullclaw/nullclaw/issues/767) — native Anthropic, open since 2026-04-04; PR #962 open.
- [Issue #817](https://github.com/nullclaw/nullclaw/issues/817) — WeChat QR, open since 2026-04-14; PR #963 open.
- [Issue #839](https://github.com/nullclaw/nullclaw/issues/839) — scheduler access, open since 2026-04-18; PR #980 closed.
- [Issue #865](https://github.com/nullclaw/nullclaw/issues/865) — CLI arrow keys, open since 2026-04-23; PR #970 open.
- [Issue #870](https://github.com/nullclaw/nullclaw/issues/870) — WSL2 100% CPU, open since 2026-04-25; no fix PR.
- [Issue #871](https://github.com/nullclaw/nullclaw/issues/871) — `web_search` low-resource, open since 2026-04-25; no fix PR.
- [Issue #915](https://github.com/nullclaw/nullclaw/issues/915) — scheduler unauthorized, open since 2026-05-15.
- [Issue #919](https://github.com/nullclaw/nullclaw/issues/919) — memory recall control, open since 2026-05-18; PR #979 closed.
- [Issue #932](https://github.com/nullclaw/nullclaw/issues/932) — invalid Zig docs, open since 2026-05-25.
- [Issue #972](https://github.com/nullclaw/nullclaw/issues/972) — Telegram idle death, open since 2026-06-30; PR #984 open.
- [Issue #976](https://github.com/nullclaw/nullclaw/issues/976) — Telegram SIGSEGV, open since 2026-07-16; PR #985 open.
- [Issue #991](https://github.com/nullclaw/nullclaw/issues/991) — MCP stdio hang, open since 2026-08-23; PR #996 closed.

**PRs**
- [PR #777](https://github.com/nullclaw/nullclaw/pull/777) — docs cleanup, open since 2026-04-05.
- [PR #953](https://github.com/nullclaw/nullclaw/pull/953) — Discord sockets, open since 2026-06-12.
- [PR #954](https://github.com/nullclaw/nullclaw/pull/954) — cron UAF, open since 2026-06-13.
- [PR #959](https://github.com/nullclaw/nullclaw/pull/959) — paired token, open since 2026-06-16.
- [PR #962](https://github.com/nullclaw/nullclaw/pull/962) — Anthropic docs, open since 2026-06-18.
- [PR #963](https://github.com/nullclaw/nullclaw/pull/963) — Weixin QR, open since 2026-06-18.
- [PR #966](https://github.com/nullclaw/nullclaw/pull/966) — Android curl fallback, open since 2026-06-19.
- [PR #970](https://github.com/nullclaw/nullclaw/pull/970) — CLI arrow keys, open since 2026-06-29.
- [PR #971](https://github.com/nullclaw/nullclaw/pull/971) — streaming native tools, open since 2026-06-29.
- [PR #984](https://github.com/nullclaw/nullclaw/pull/984) — poll failures, open since 2026-08-05.
- [PR #985](https://github.com/nullclaw/nullclaw/pull/985) — runtime stack, open since 2026-08-05.
- [PR #987](https://github.com/nullclaw/nullclaw/pull/987) — loop hygiene, open since 2026-08-15.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-09-24

## 1. Today's Overview
IronClaw had a quiet 24-hour window: 0 issues updated, 0 new releases, and only 1 open pull request. The sole activity is PR #8109, a documentation-only change clarifying scoped virtual skill roots. No issues were opened, closed, or active, and no PRs were merged or closed. Overall activity is minimal and maintenance/documentation-oriented; there are no visible stability or community escalation signals in the supplied data. Because the PR has no available comment count and 0 reactions, engagement cannot be fully assessed.

## 2. Releases
None. No new releases were published in the last 24 hours.

## 3. Project Progress
No merged or closed PRs today, so no features were advanced and no fixes landed. The only in-flight work is:
- [#8109 [OPEN] docs(skills): clarify scoped virtual skill roots](https://github.com/nearai/ironclaw/pull/8109) — Author: mmemcormier — Created/Updated: 2026-09-23.

This PR updates documentation to replace obsolete host-directory discovery guidance with scoped virtual skill roots (`/skills`, `/system/skills`, and optional `/tenant-shared/skills`), distinguishes runtime discovery from standalone legacy disk imports, and clarifies trust assignment without changing runtime behavior. This is documentation hygiene rather than runtime progress.

## 4. Community Hot Topics
Only one item exists in the window:
- [#8109 [OPEN] docs(skills): clarify scoped virtual skill roots](https://github.com/nearai/ironclaw/pull/8109) — Author: mmemcormier — Comments: undefined — 👍: 0.

Underlying need: contributors/users appear to need accurate documentation for how skills are discovered and trusted in scoped virtual roots. The PR addresses potential confusion between runtime discovery and legacy disk imports. Since it is the only active item, there is no comparative “hot topic” or reaction-based discussion in the data.

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported in the last 24 hours. No issue reports exist in the supplied data, and no fix PRs are present. Severity ranking: none.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests were recorded today. The only roadmap-adjacent signal is PR #8109, which suggests documentation alignment around the skills subsystem, scoped virtual roots (`/skills`, `/system/skills`, `/tenant-shared/skills`), and trust assignment. If merged, it may indicate continued focus on skills infrastructure clarity, but it explicitly does not change runtime behavior. Prediction: no user-facing feature is signaled for the next version by this data alone.

## 7. User Feedback Summary
No user feedback, pain points, use cases, or satisfaction/dissatisfaction data are available because there are 0 issues and no visible comments/reactions. The only indirect signal is that PR #8109 corrects obsolete host-directory discovery guidance, implying that prior documentation may have caused confusion. No conclusions can be drawn about broader user sentiment from a single open docs PR.

## 8. Backlog Watch
No long-unanswered important issues or PRs appear in the supplied data. PR #8109 is recent (created/updated 2026-09-23), so it is not a backlog concern. Maintainers may still want to review it promptly since it is the only open item, but there is no evidence of aging or neglect.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



Here is the structured project digest for **LobsterAI** (`github.com/netease-youdao/LobsterAI`) covering the period leading up to **2026-09-24**.

---

### 1. Today's Overview
LobsterAI demonstrates high development velocity, marked by the successful release of version **2026.9.23** and the processing of 10 pull requests (8 merged/closed, 2 open). The development focus is heavily concentrated on major enhancements to the coworking interface, the integration of an experimental decision model service, and critical stability fixes for OpenClaw plugin and configuration management. Community-side issue activity is quiet, with zero new issues opened or closed in the last 24 hours, indicating a stable baseline for users.

---

### 2. Releases
#### **Release 2026.9.23** ([PR #2757](https://github.com/netease-youdao/LobsterAI/pull/2757))
*   **New Features:**
    *   **Experimental Jev Decision Model Tool ([PR #2753](https://github.com/netease-youdao/LobsterAI/pull/2753)):** Introduces a BYO-key decision model service including configuration, an MCP tool handler, an IPC bridge, and an OpenClaw lobster-decision extension, gated behind an experimental features UI section.
    *   **Cowork Turn Progress & Rendering Unification ([PR #2756](https://github.com/netease-youdao/LobsterAI/pull/2756), [PR #2750](https://github.com/netease-youdao/LobsterAI/pull/2750)):** Replaces row/detail activity variants with a single `ActivityStepLine` component. It supports step-by-step progress streaming, diff stats, and precise turn timing (including `leadingTurnStartTimestamp` for paged-in session windows).
    *   **Broadened Campaign Visibility ([PR #2751](https://github.com/netease-youdao/LobsterAI/pull/2751)):** Removes client-side display thresholds for the 1-cent trial experience, extending pop-ups to anonymous, subscribed, and team identity users.
*   **Stability & Fixes:** 
    *   Degraded OpenClaw startup to preserve basic sessions during plugin failures ([PR #2754](https://github.com/netease-youdao/LobsterAI/pull/2754)).
    *   Reconciled config application flow to prevent tasks from running on outdated configurations ([PR #2755](https://github.com/netease-youdao/LobsterAI/pull/2755)).
*   **Migration Notes:** The configuration application flow has transitioned from simple `config.set` success checks to a versioned, conditional `config.apply` mechanism. Integrators must ensure their clients wait for versioned confirmation before spinning up new task environments.

---

### 3. Project Progress
*   **Coworking & Rendering Polish:** The core rendering layer was refactored to unify activity steps, providing developers with a single, robust component to track agent commands, reads, edits, searches, and todo steps with accurate timestamps.
*   **OpenClaw Integration Hardening:** Two key PRs addressed OpenClaw integration reliability: one preventing gateway crashes due to failing plugins ([#2754](https://github.com/netease-youdao/LobsterAI/pull/2754)) and another ensuring configuration consistency ([#2755](https://github.com/netease-youdao/LobsterAI/pull/2755)).
*   **Runtime Updates:** The `dsh runtime` was bumped to `0.1.5 rc.3` ([PR #2752](https://github.com/netease-youdao/LobsterAI/pull/2752)) to support the latest tooling environment.
*   **Business Growth Mechanics:** Subscription trial visibility was broadened ([PR #2751](https://github.com/netease-youdao/LobsterAI/pull/2751)) to optimize marketing reach and conversion paths.

---

### 4. Community Hot Topics
While there are no active issues today, developer focus is revolving around:
*   **Dependency Management ([PR #2668](https://github.com/netease-youdao/LobsterAI/pull/2668)):** The automated dependency bump of `@sinclair/typebox` (from `0.34.49` to `0.34.52`) highlights community needs for schema validation robustness as the agent tooling interfaces expand.
*   **Configuration Hot-Reload Consistency ([PR #2755](https://github.com/netease-youdao/LobsterAI/pull/2755)):** This PR addresses a highly requested operational need: ensuring that runtime configuration updates are atomic and verifiably applied before agent tasks initiate, avoiding silent configuration drift.

---

### 5. Bugs & Stability
*   **OpenClaw Gateway Startup Refusal (High Severity):** *Issue:* Plugin validation or upgrade failures previously escalated to a full gateway crash, blocking all chat sessions even for healthy models. *Fix:* Implemented global plugin isolation strategies ([PR #2754](https://github.com/netease-youdao/LobsterAI/pull/2754)) to degrade gracefully.
*   **Configuration Drift on Task Startup (High Severity):** *Issue:* Tasks spawned immediately after a config save could silently run on old configuration parameters due to asynchronous disk-to-runtime application. *Fix:* Standardized delivery on versioned `config.apply` ([PR #2755](https://github.com/netease-youdao/LobsterAI/pull/2755)).
*   **macOS Shortcut Key Inconsistency (Medium Severity):** *Issue:* Incorrect modifier keys mapped on macOS. *Fix:* Legacy shortcuts were migrated to platform-aware defaults ([PR #980](https://github.com/netease-youdao/LobsterAI/pull/980), closed as stale but successfully resolved).

---

### 6. Feature Requests & Roadmap Signals
*   **Decision Model Abstraction:** The introduction of the Jev decision model tool indicates a roadmap shift toward multi-provider, pluggable decision-making layers. This allows users to bring their own keys and route agent logic dynamically.
*   **Transparency in Agent Execution:** The unification of the coworking activity step rendering suggests a strong product push toward giving users granular visibility into agent diffs, timings, and execution steps.
*   **Marketing & Subscription Mechanics:** Broadening campaign visibility signals an active effort to optimize the user onboarding funnel and trial-to-paid conversion rates.

---

### 7. User Feedback Summary
No direct user issues are logged in the tracker for this cycle. However, the resolution of the macOS shortcut bug and the trial

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>



Based on the GitHub data for **Moltis** as of **2026-09-24**, here is the structured project digest:

---

### 1. Today's Overview
Activity within the Moltis repository has been quiet over the last 24 hours, with no new issues filed, releases published, or pull requests merged. The only movement is an update to a single open pull request (#1272) focusing on advanced sandbox configurations. This indicates steady, focused development on the sandboxing architecture without active community disruptions or bug reports today.

### 2. Releases
* **No new releases** have been published today. 

### 3. Project Progress
* **Merged/Closed PRs:** No pull requests were merged or closed in the last 24 hours.
* **Development Focus:** Active development is currently focused on PR #1272, which refines per-agent sandboxing capabilities, allowing administrators to configure specific mounts, user/group executions, and sandbox enforcement per agent.

### 4. Community Hot Topics
* **PR #1272: [OPEN] feat(sandbox): per-agent mounts, run_as and a forced sandbox**
  * **Author:** Bergmann89 (Created: 2026-09-16, Updated: 2026-09-23)
  * **Link:** [moltis-org/moltis PR #1272](https://github.com/moltis-org/moltis/pull/1272)
  * **Underlying Needs:** This pull request addresses the need for granular, per-agent isolation and security controls. By introducing `sandbox.mounts`, `sandbox.run_as`, and `sandbox.force`, the project is responding to the demand for tighter security postures (ensuring agents only run in containerized sandboxes with correct user permissions and mount paths tailored to their specific tasks).

### 5. Bugs & Stability
* No new bugs, crashes, or regressions were reported in the last 24 hours. The project stability remains high with no active critical issues.

### 6. Feature Requests & Roadmap Signals
* **Per-Agent Sandbox Configuration (PR #1272):** The introduction of per-agent sandbox parameters signals a major milestone in the project's security roadmap. Once merged, these configurations will allow users to enforce strict containerized execution, custom bind mounts, and UID/GID mapping on an individual agent level. This is expected to be a major feature in the upcoming minor release.

### 7. User Feedback Summary
* No new user feedback, feature complaints, or support issues were registered in the last 24 hours, reflecting a stable user experience or a quiet period in community engagement.

### 8. Backlog Watch
* **PR #1272** is the primary item requiring maintainer attention. Originally opened on 2026-09-16 and updated recently on 2026-09-23, it represents a significant feature addition. Maintainers should prioritize reviewing and integrating this PR to keep the sandboxing enhancements on schedule.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

The user wants a structured English project digest for the CoPaw repository (which seems to be referred to as QwenPaw in the data, but the prompt says CoPaw github.com/agentscope-ai/CoPaw) based on the provided GitHub data for the date 2026-09-24. Let's analyze the data provided and synthesize each section carefully.

Let's look at the data overview:
- Issues updated in last 24h: 34 (open/active: 17, closed: 17)
- PRs updated in last 24h: 24 (open: 15, merged/closed: 9)
- New releases: 0 (Latest Releases: None)

Let's look at the sections required:
1. **Today's Overview** - 3-5 sentences summarizing project status, including activity assessment.
2. **Releases** - If new versions exist, detail changes, breaking changes, migration notes; omit if none. (Since there are 0 new releases, we should state that no new releases were made today).
3. **Project Progress** - Merged/closed PRs today, what features advanced or were fixed.
4. **Community Hot Topics** - Most active Issues/PRs with most comments/reactions (with links), analyze underlying needs.
5. **Bugs & Stability** - Bugs, crashes, regressions reported today, ranked by severity, note if fix PRs exist.
6. **Feature Requests & Roadmap Signals** - User-requested features, predict which might be in next version.
7. **User Feedback Summary** - Real user pain points, use cases, satisfaction/dissatisfaction.
8. **Backlog Watch** - Long-unanswered important Issues or PRs needing maintainer attention.

Let's extract the key data points from the input.

### Issues list analysis:
- #7318 [OPEN] [question] [Discussion] QwenPaw Hub, the multi-tenant edition, released in 2.2.0: what should we build next? / QwenPaw 多租户版 Hub 已于 2.2.0 推出：你希望我们接下来做什么？
  - Author: rayrayraykk | Created: 2026-08-26 | Updated: 2026-09-23 | Comments: 32 | 👍: 4
  - Summary: QwenPaw started as a personal AI assistant... QwenPaw Hub is our first response... related community requests: #2324...
- #7576 [CLOSED] [Bug] RetryChatModel hardcoded 32768 context_size fallback causes CONTEXT_UNFIT (>31130 tokens) for all models
  - Author: aimastertoast | Created: 2026-09-05 | Updated: 2026-09-23 | Comments: 8 | 👍: 0
- #7853 [OPEN] [Bug]: ToolResultPruner 跳过媒体块（type="data"），导致 view_image 的 base64 无界累积并撑爆模型上下文
  - Author: jcs130 | Created: 2026-09-18 | Updated: 2026-09-23 | Comments: 8 | 👍: 0
  - Summary: ToolResultPruner.prune_output only processes type=="text" blocks, skipping others. view_image stores base64 in type="data" which is never pruned, leading to unbounded accumulation in session context.
- #2710 [CLOSED] [bug] [Bug]: 定时任务完成之后 本地推送没显示 (Local push not showing after scheduled task completes)
  - Author: xianqiuyu | Created: 2026-04-01 | Updated: 2026-09-23 | Comments: 7 | 👍: 0
- #3037 [CLOSED] [Bug] Feishu channel: filter_thinking and filter_tool_messages config not working
  - Author: codeasier | Created: 2026-04-07 | Updated: 2026-09-23 | Comments: 6 | 👍: 0
- #7377 [OPEN] [question] [Question]: Agent Loop mode configuration not persisted across task runs in v2.1.0 console
  - Author: fzm1994 | Created: 2026-08-28 | Updated: 2026-09-23 | Comments: 6 | 👍: 0
- #7484 [OPEN] [enhancement] [Feature]: 基于qwenpaw 2.x的A2A何时支持 (When will A2A be supported based on qwenpaw 2.x)
  - Author: qixinbo | Created: 2026-09-02 | Updated: 2026-09-23 | Comments: 5 | 👍: 0
- #7534 [OPEN] [BUG] QwenPaw feishu session: queue consumer stays alive & stuck -> session silently unresponsive; new messages can't spawn a new consumer
  - Author: feng183043996 | Created: 2026-09-03 | Updated: 2026-09-23 | Comments: 5 | 👍: 0
- #7628 [OPEN] [enhancement] [Bug] Context compaction can still exceed the complete provider request budget and fail active turns
  - Author: elain0205 | Created: 2026-09-08 | Updated: 2026-09-23 | Comments: 5 | 👍: 0
- #7715 [OPEN] [bug] [Bug]:Daily Paper fails silently when arxiv.org is unreachable — no proxy/endpoint config, error message hides real cause
  - Author: PTW1981 | Created: 2026-09-12 | Updated: 2026-09-23 | Comments: 5 | 👍: 0
- #7733 [OPEN] [enhancement] [Feature]: Agent-autonomous context management — a smooth handover across context eviction
  - Author: MCQSJ | Created: 2026-09-13 | Updated: 2026-09-23 | Comments: 4 | 👍: 0
- #1010 [CLOSED] [enhancement, model configure] [Feature]: 希望支持可配置不同LLM进行调用，而非单一LLM执行所有任务 (Hope to support configurable different LLMs instead of a single LLM for all tasks)
  - Author: Dreamcatcher-wind | Created: 2026-03-09 | Updated: 2026-09-23 | Comments: 4 | 👍: 0
- #7856 [CLOSED] [bug] [Bug]: qwenpaw-pet 0.1.1 breaks QwenPaw 2.2.2b2 tool approvals by dropping the `actor` argument
  - Author: samluoabc | Created: 2026-09-18 | Updated: 2026-09-23 | Comments: 4 | 👍: 0
- #2869 [CLOSED] [question] [Question]: 是否可以增加主题和自定义颜色？ (Can themes and custom colors be added?)
  - Author: cbh5200 | Created: 2026-04-03 | Updated: 2026-09-23 | Comments: 4 | 👍: 0
- #7857 [OPEN] [Bug]: ACP shutdown fallback can silently skip session cleanup and leak its event loop
  - Author: mango8853 | Created: 2026-09-18 | Updated: 2026-09-23 | Comments: 3 | 👍: 0
- #7402 [CLOSED] [bug] [Bug]: Empty assistant output_text blocks persisted in session history poison every subsequent request — Ark Responses API returns 400 "MissingParameter: input.content.text"
  - Author: xiaoka76 | Created: 2026-08-29 | Updated: 2026-09-23 | Comments: 3 | 👍: 0
- #2841 [CLOSED] [question] [Question]: Concurrency issues with Feishu bot + Manager-Agents setup (serial execution & context cross-contamination)
  - Author: ewtwd | Created: 2026-04-02 | Updated: 2026-09-23 | Comments: 3 | 👍: 0
- #2414 [CLOSED] [bug] [Bug]: Dingtalk task timeout and DingTalk session collision
  - Author: bhzhu203 | Created: 2026-03-27 | Updated: 2026-09-23 | Comments: 3 | 👍: 0
- #2335 [CLOSED] [BUG][Feishu Channel] WebSocket connection drops without auto-reconnect
  - Author: x0james | Created: 2026-03-26 | Updated: 2026-09-23 | Comments: 3 | 👍: 0
- #7836 [OPEN] [Bug]: scroll eviction drops a user turn that sits inside a tool-heavy span — the live window loses the request while history.db keeps it
  - Author: chcsyf | Created: 2026-09-17 | Updated: 2026-09-23 | Comments: 3 | 👍: 1
- #7947 [CLOSED] [bug] [Bug]: send_file_to_user never renders its file card in the Console (artifact guard tests a JSON string, not a block array)
  - Author: makeryuan-MK | Created: 2026-09-23 | Updated: 2026-09-23 | Comments: 3 | 👍: 0
- #7767 [OPEN] Bug reports from a guardrail-plugin build: console attachment stale blob, one-shot cron misfire drop, console tail-drop, on_acting never fires
  - Author: BasilLei | Created: 2026-09-14 | Updated: 2026-09-23 | Comments: 3 | 👍: 0
- #7062 [CLOSED] [Feature]: Support per-agent / per-session reasoning_effort override for cloud models
  - Author: wwth8819 | Created: 2026-08-16 | Updated: 2026-09-23 | Comments: 3 | 👍: 0
- #3035 [CLOSED] [bug] [Bug]: processor not found, type: im.message.reaction.created_v1
  - Author: ethan-lee-club | Created: 2026-04-07 | Updated: 2026-09-23 | Comments: 2 | 👍: 0
- #3016 [CLOSED] [bug] [Bug]: 腾讯云国内linux服务器使用一键安装脚本 卡死无响应 (Tencent Cloud Linux server using one-click install script hangs and unresponsive)
  - Author: dylanbai8 | Created: 2026-04-07 | Updated: 2026-09-23 | Comments: 2 | 👍: 0
- #2948 [CLOSED] [enhancement] Hi. After generating the audio, there's no download button. I really need a download button.
  - Author: JobJobovich | Created: 2026-04-04 | Updated: 2026-09-23 | Comments: 2 | 👍: 0
- #2200 [CLOSED] [enhancement] 深色模式时聊天内容区的配色调整建议 (Color adjustment suggestions for chat content area in dark mode)
  - Author: alvenstar | Created: 2026-03-24 | Updated: 2026-09-23 | Comments: 2 | 👍: 0
- #1353 [CLOSED] [question] [Question]: key 能否通过配置决定放在 Authorization 还是 X-Api-Key 请求头里 (Can key be configured to be placed in Authorization or X-Api-Key header?)
  - Author: zebrafirst | Created: 2026-03-12 | Updated: 2026-09-23 | Comments: 2 | 👍: 0
- #7948 [OPEN] [bug] [Bug]: Poor web console design that breaks user input
  - Author: BorisPolonsky | Created: 2026-09-23 | Updated: 2026-09-23 | Comments: 2 | 👍: 0
- #7959 [OPEN] [bug] [Bug]: Moonshot (kimi-k3) rejects MCP tool schemas with untyped anyOf unions: "properties.freq: type is not defined"
  - Author: Moonlit-Pages | Created: 2026-09-23 | Updated: 2026-09-23 | Comments: 1 | 👍: 0

### PRs list analysis:
- #7930 [OPEN] fix(backup): snapshot SQLite databases without releasing live locks
  - Author: niceIrene | Created: 2026-09-22 | Updated: 2026-09-23 | Comments: undefined | 👍: 0
- #7871 [OPEN] fix(tools): prevent literal markers from bypassing output truncation (Aone)
  - Author: niceIrene | Created: 2026-09-18 | Updated: 2026-09-23 | Comments: undefined | 👍: 0
- #6854 [CLOSED] [first-time-contributor] add localized approval purpose descriptions
  - Author: huiyiyichen | Created: 2026-08-09 | Updated: 2026-09-23 | Comments: undefined | 👍: 0
- #7872 [OPEN] fix(scroll): preserve interrupted requests across follow-up compaction (#7836)
  - Author: niceIrene | Created: 2026-09-18 | Updated: 2026-09-23 | Comments: undefined | 👍: 0
- #7960 [OPEN] fix(providers): recover after stalled stream cleanup
  - Author: lorenzozanee | Created: 2026-09-23 | Updated: 2026-09-23 | Comments: undefined | 👍: 0
- #7874 [OPEN] feat(pawapp): redesign the SDK and app control plane
  - Author: cyruszhang | Created: 2026-09-19 | Updated: 2026-09-23 | Comments: undefined | 👍: 0
- #7873 [OPEN] fix(scroll): explain advanced recall sandbox limitations
  - Author: niceIrene | Created: 2026-09-18 | Updated: 2026-09-23 | Comments: undefined | 👍: 0
- #7613 [OPEN] [first-time-contributor, Under Review] feat(memory): add OpenViking memory plugin
  - Author: xypang33-sketch | Created: 2026-09-07 | Updated: 2026-09-23 | Comments: undefined | 👍: 0
- #7956 [OPEN] feat(console): optimize settings workflows and sidebar interactions
  - Author: rayrayraykk | Created: 2026-09-23 | Updated: 2026-09-23 | Comments: undefined | 👍: 0
- #7955 [CLOSED] docs(website): add download provenance and usage policy
  - Author: jinglinpeng | Created: 2026-09-23 | Updated: 2026-09-23 | Comments: undefined | 👍: 0
- #7952 [CLOSED] fix(hub): distinguish invitation redemption failure reasons
  - Author: zhijianma | Created: 2026-09-23 | Updated: 2026-09-23 | Comments: undefined | 👍: 0
- #7941 [CLOSED] test(unit): make the batch-3 lock and portability tests cross-platform
  - Author: yutai78786 | Created: 2026-09-22 | Updated: 2026-09-23 | Comments: undefined | 👍: 0
- #7409 [CLOSED] fix(agents): drop empty assistant text blocks
  - Author: wananing | Created: 2026-08-30 | Updated: 2026-09-23 | Comments: undefined | 👍: 0
- #7861 [OPEN] feat(console): add authenticated multi-tab chat terminal
  - Author: zhijianma | Created: 2026-09-18 | Updated: 2026-09-23 | Comments: undefined | 👍: 0
- #7

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-09-24

**Data snapshot:** Issues updated in last 24h: **11 open / 0 closed**. PRs updated in last 24h: **50 total — 46 open, 4 merged/closed**. New releases: **0**.  
All links point to `github.com/zeroclaw-labs/zeroclaw`.

---

## 1. Today's Overview

ZeroClaw shows **high development throughput with no release output** in this window: 11 open issues and 50 updated PRs, but zero new releases. The issue mix is dominated by **WhatsApp/channel behavior, runtime wiring, and high-severity security/memory bugs**, while the closed PRs focus on **release-efficiency and CI reliability**. The project remains highly active, with multiple XL PRs and security-oriented features advancing, but the open backlog contains **S0 data-loss/security issues without visible direct fix PRs**. Overall health is mixed: strong contributor activity, but maintainer review and release stabilization remain bottlenecks.

---

## 2. Releases

**No new releases in this window.** No version changes, breaking changes, or migration notes to report.

---

## 3. Project Progress

### Merged/Closed PRs today
The provided top-20 PR sample shows at least three closed PRs; the data reports four merged/closed total.

- **[CLOSED] #10818 — perf(docs): promote stable metadata without rebuilding**  
  https://github.com/zeroclaw-labs/zeroclaw/pull/10818  
  Avoids rebuilding all five docs locales when promoting a tagged docs build to stable.

- **[CLOSED] #10816 — fix(release): check Apple notarization before compilation**  
  https://github.com/zeroclaw-labs/zeroclaw/pull/10816  
  Detects rejected notarization credentials before macOS compilation, reducing wasted CI time.

- **[CLOSED] #10815 — fix(release): order versioned dev dependencies before publication**  
  https://github.com/zeroclaw-labs/zeroclaw/pull/10815  
  Prevents Cargo publish failures caused by dev-dependency ordering.

These closures directly support the **release-efficiency tracker #10814**:  
https://github.com/zeroclaw-labs/zeroclaw/issues/10814

### Open PRs updated today
Several large or security-relevant PRs remain active:

- **#10557** — `refactor(cron): extract cron into zeroclaw-cron and land the precondition gate there`  
  https://github.com/zeroclaw-labs/zeroclaw/pull/10557
- **#10931** — `fix(service): bound Windows task stdout and stderr logs`  
  https://github.com/zeroclaw-labs/zeroclaw/pull/10931
- **#10325** — `feat(runtime): pre-turn tool-elicitation hints behind default-off flag`  
  https://github.com/zeroclaw-labs/zeroclaw/pull/10325
- **#10351** — `feat(runtime): enforce execution-tree iteration budgets`  
  https://github.com/zeroclaw-labs/zeroclaw/pull/10351
- **#10321** — `feat(security): browser PKCE and the cross-surface enrollment API`  
  https://github.com/zeroclaw-labs/zeroclaw/pull/10321
- **#10621** — `feat(runtime): coordinate agent lifecycle mutations`  
  https://github.com/zeroclaw-labs/zeroclaw/pull/10621
- **#10591** — `feat(bootstrap): add MCP launcher and its per-platform distribution`  
  https://github.com/zeroclaw-labs/zeroclaw/pull/10591
- **#10592** — `feat(relay): self-serve enrollment via relay claim`  
  https://github.com/zeroclaw-labs/zeroclaw/pull/10592

---

## 4. Community Hot Topics

PR comment counts are not populated in the provided data, so this ranking uses issue comment counts.

| Item | Type | Comments | Link | Underlying need |
|---|---:|---:|---|---|
| #10922 | Bug | 5 | https://github.com/zeroclaw-labs/zeroclaw/issues/10922 | WhatsApp Web ignores `suppress_voice` during automatic TTS queueing — users need predictable voice-reply controls. |
| #11052 | Enhancement | 4 | https://github.com/zeroclaw-labs/zeroclaw/issues/11052 | Render thematic breaks and setext headings for WhatsApp — better Markdown fidelity for real model output. |
| #10968 | Bug | 3 | https://github.com/zeroclaw-labs/zeroclaw/issues/10968 | Unattended agent turns lack `ApprovalManager`, making risk-profile approvals inert — serious security/trust gap. |
| #10985 | Bug | 3 | https://github.com/zeroclaw-labs/zeroclaw/issues/10985 | Dashboard-started turns cannot reach session-bound channels — channel-backed tools fail outside normal entry points. |
| #11055 | Bug | 2 | https://github.com/zeroclaw-labs/zeroclaw/issues/11055 | Daemon never registers channel-map factory — webhook, cron, and SOP turns have no channels. |
| #10797 | Bug | 2 | https://github.com/zeroclaw-labs/zeroclaw/issues/10797 | Markdown memory backend loses entries on overlapping `store()` calls — data integrity concern. |
| #11050 | Enhancement | 1 | https://github.com/zeroclaw-labs/zeroclaw/issues/11050 | Pace native polls with other outbound channel messages. |
| #11059 | Bug | 1 | https://github.com/zeroclaw-labs/zeroclaw/issues/11059 | WhatsApp Web ignores `force_voice`, so `send_via` cannot route a turn to voice. |

**Analysis:** The hottest discussions cluster around **WhatsApp channel maturity** and **runtime/security correctness**. WhatsApp issues cover voice modality, Markdown rendering, and outbound pacing — signs of real production usage. Security/runtime issues (#10968, #10985, #11055) indicate that non-interactive and dashboard-driven paths need stronger lifecycle and channel wiring guarantees.

---

## 5. Bugs & Stability

Ranked by severity and risk labels:

### S0 — Data loss / security risk
- **#10968 — Unattended agent turns run with no `ApprovalManager`, so risk-profile tool approvals are silently inert**  
  Labels: `security`, `priority:p1`, `risk:high`, `domain:security`  
  https://github.com/zeroclaw-labs/zeroclaw/issues/10968  
  Affects cron, heartbeat, headless SOP, and `spawn_subagent`. No direct fix PR visible in the provided PR sample.

- **#10797 — Markdown memory backend silently loses stored entries when `store()` calls overlap**  
  Labels: `memory`, `priority:p1`, `risk:high`, `status:accepted`  
  https://github.com/zeroclaw-labs/zeroclaw/issues/10797  
  Concurrent writes rewrite from stale snapshots with no serialization or write verification. No direct fix PR visible.

### S2 — Degraded behavior
- **#10985 — Dashboard-started turns get freshly built channel instances, so channel-backed tools cannot reach a session-bound channel**  
  Labels: `priority:p1`, `status:in-progress`, `risk:high`  
  https://github.com/zeroclaw-labs/zeroclaw/issues/10985

- **#10922 — WhatsApp Web ignores `suppress_voice` when queueing automatic TTS**  
  Labels: `priority:p2`, `follow-up`, `risk:medium`  
  https://github.com/zeroclaw-labs/zeroclaw/issues/10922

- **#11059 — WhatsApp Web ignores `force_voice`, so `send_via` cannot route a turn to voice**  
  Labels: `priority` not shown, but severity S2  
  https://github.com/zeroclaw-labs/zeroclaw/issues/11059

### Medium
- **#11055 — The daemon never registers the channel-map factory, so webhook, cron and SOP turns have no channels**  
  https://github.com/zeroclaw-labs/zeroclaw/issues/11055

### Lower severity / follow-up
- **#11050 — Pace native polls with other outbound channel messages**  
  Labels: `priority:p3`, `follow-up`, `risk:medium`  
  https://github.com/zeroclaw-labs/zeroclaw/issues/11050

**Fix-PR status:** No direct fix PRs for the S0/S2 bugs appear in the provided top-20 PR sample. Adjacent open PRs such as **#10621** (agent lifecycle mutations), **#10557** (cron extraction/precondition gate), **#10351** (execution-tree budgets), **#10417** (terminal fallbacks), and **#10397** (MCP result formatting) may reduce related runtime risk, but none explicitly closes these issues.

---

## 6. Feature Requests & Roadmap Signals

### New/active feature requests
- **#11075 — Add `agy_cli` coding-CLI tool for Antigravity CLI**  
  Peer of `codex_cli` / `claude_code` / `gemini_cli`.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/11075

- **#11074 — RFC: `search_routes` — hint-based provider routing for `web_search_tool`**  
  Mirrors `[[model_routes]]` so one agent can route queries to different search providers.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/11074

- **#11052 — Render thematic breaks and setext headings for WhatsApp**  
  Improves CommonMark → WhatsApp outbound conversion.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/11052

- **#11050 — Pace native polls with other outbound channel messages**  
  Follow-up to native WhatsApp polls (#10984).  
  https://github.com/zeroclaw-labs/zeroclaw/issues/11050

### Roadmap signals from open PRs
Likely candidates for upcoming releases or milestones:

- Release efficiency: **#10814 tracker**, with #10815/#10816/#10818 already closed.
- MCP/bootstrap distribution: **#10591**.
- Relay enrollment: **#10592**.
- Security enrollment / browser PKCE: **#10321**.
- Runtime budgets and tool elicitation: **#10351**, **#10325**.
- Channel improvements: **#10401** (Telegram notice), **#10622** (Slack bot/workflow messages), **#10417** (terminal fallbacks).
- ZeroCode UX: **#10386**, **#10553**.
- Web UI: **#10698** guided cron editor, **#10583** any-file upload.

**Prediction:** The next meaningful release is more likely to include **release-pipeline hardening, WhatsApp/channel fixes, MCP/bootstrap support, and security enrollment** than a broad new feature wave. The WhatsApp voice/Markdown/poll cluster is likely to be addressed together.

---

## 7. User Feedback Summary

### Real pain points
- **WhatsApp Web modality controls are unreliable:** `suppress_voice` and `force_voice` are ignored, breaking expected TTS/voice routing (#10922, #11059).
- **WhatsApp Markdown fidelity is incomplete:** thematic breaks and setext headings still arrive as literal text (#11052).
- **Outbound pacing does not cover polls:** native polls bypass per-recipient pacing (#11050).
- **Dashboard/web turns cannot reach session-bound channels:** channel-backed tools fail from the dashboard (#10985).
- **Daemon channel wiring is incomplete:** webhook, cron, and SOP turns lack channels because the channel-map factory is never registered (#11055).
- **Unattended automation bypasses approvals:** cron, heartbeat, headless SOP, and subagents run without `ApprovalManager`, making risk-profile approvals inert (#10968).
- **Memory backend can lose data under concurrency:** overlapping `store()` calls silently drop entries (#10797).
- **Users want broader CLI/tool integration:** Antigravity CLI support (#11075) and search-provider routing (#11074).

### Satisfaction / dissatisfaction
- **Positive signal:** sustained contributor engagement, follow-up labels, and a steady stream of targeted fixes.
- **Negative signal:** multiple S0/P1 issues remain open without visible direct fix PRs; zero releases in this window; 46 open PRs indicate review/merge pressure.

---

## 8. Backlog Watch

Important items needing maintainer attention, based on age, severity, labels, and lack of closure:

- **#10814 — Release efficiency and repeatable publication tracker**  
  `priority:p1`, `risk:high`, 0 comments, updated 2026-09-23.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/10814

- **#10797 — Markdown memory backend data loss under concurrent `store()`**  
  `priority:p1`, `risk:high`, `status:accepted`, created 2026-09-12.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/10797

- **#10968 — Unattended turns have no `ApprovalManager`**  
  `priority:p1`, `risk:high`, `domain:security`, created 2026-09-19.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/10968

- **#10557 — refactor(cron): extract cron into zeroclaw-cron**  
  XL, `needs-maintainer-review`, `risk:high`, created 2026-09-02.  
  https://github.com/zeroclaw-labs/zeroclaw/pull/10557

- **#10325 — pre-turn tool-elicitation hints**  
  XL, `status:blocked`, created 2026-08-24.  
  https://github.com/zeroclaw-labs/zeroclaw/pull/10325

- **#10351 — execution-tree iteration budgets**  
  XL, `needs-maintainer-review`, created 2026-08-25.  
  https://github.com/zeroclaw-labs/zeroclaw/pull/10351

- **#10321 — browser PKCE and cross-surface enrollment API**  
  XL, stacked, `risk:high`, created 2026-08-24.  
  https://github.com/zeroclaw-labs/zeroclaw/pull/10321

- **#10621 — coordinate agent lifecycle mutations**  
  XL, `needs-maintainer-review`, `risk:high`, created 2026-09-04.  
  https://github.com/zeroclaw-labs/zeroclaw/pull/10621

- **#10622 — Slack bot/workflow messages**  
  `status:parking-lot`, `needs-author-action`, created 2026-09-04.  
  https://github.com/zeroclaw-labs/zeroclaw/pull/10622

- **#10698 — guided cron schedule editor**  
  `status:parking-lot`, created 2026-09-07.  
  https://github.com/zeroclaw-labs/zeroclaw/pull/10698

**Backlog assessment:** The most urgent maintainer attention should go to **#10968 and #10797** because they carry S0/P1 data-loss/security risk. The largest review bottleneck is the cluster of XL runtime/security PRs (#10557, #10325, #10351, #10321, #10621), several of which have been open since late August or early September.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*