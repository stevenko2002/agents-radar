# OpenClaw Ecosystem Digest 2026-09-30

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-09-29 22:16 UTC

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



# OpenClaw Project Digest — 2026-09-30

---

## 1. Today's Overview

OpenClaw remains highly active, with 500 issues and 500 pull requests updated in the last 24 hours. The project is in a rapid-release cycle, with the latest `extended-stable` gateway-only release (v2026.8.33) carrying critical security updates, reliability fixes, and new model support. The current development focus is on stabilizing the 2026.9.x line, with a heavy concentration of P0/P1 crash-loop, memory-leak, and session-state bugs dominating the issue tracker. Activity is healthy: 130 PRs were merged or closed today, indicating a responsive maintenance cadence despite the volume of open issues (433 active).

---

## 2. Releases

**v2026.8.33** — `extended-stable` (gateway-only, equivalent to LTS)

- This release is OpenClaw as of end-of-August 2026, plus critical security updates, reliability/performance fixes, and new model support.
- **No breaking changes** are documented for this patch; it is a gateway-only stable release.
- The current latest version of OpenClaw is **2026.9.6**, indicating that v2026.8.33 is a backport/extended-stable branch, not the bleeding edge.
- Migration notes: None explicitly stated — this is a patch-level release on the extended-stable line.

---

## 3. Project Progress

**Merged/Closed PRs today (130 total):** Highlights include:

- **#161411** — `fix(update): older updaters reject unchanged database backups`. Prevents rollback loops when an older updater invokes the new backup worker, enabling smoother upgrades without manual bootstrap.
- **#158447** — `fix(updater): identify the config-read child by env, not by import query`. Closes a Bun-gateway-specific bug where config-read subprocesses spawned unbounded chains (8,462 descendants measured), exhausting the 300s verification budget.
- **#161238** — `fix(update): keep native service identities during discovery`. Ensures shared-install checks correctly identify a running systemd Gateway even after its unit file disappears, preventing confusion between native service selectors and profile names.
- **#161239** — `fix(update): refuse runtime repair while shared outputs are in use`. Prevents runtime repair from replacing generated files while another managed Gateway is using them through shared/symlinked paths.
- **#161410** — `fix(auto-reply): preserve completed source reply across fallback`. Prevents contradictory errors when a completed same-source reply is followed by a provider fallback that then fails authentication.
- **#161400** — `feat(openai): support GPT-6.1 Sol`. Adds routing, reasoning, and pricing for OpenAI's GPT-6.1 Sol model.
- **#160864** — `fix(cron): prevent stream jobs from exceeding exec authority`. Security-sensitive fix ensuring agent-authored stream automations cannot persist or restart a Gateway-host process beyond the creating turn's effective `exec` authority.
- **#159847** — `refactor: delete unreferenced production code`. Large-scale cleanup removing dead code across 30+ plugins and channels (auto-merge off; unmerged but verified mergeable).

**Notable refactoring efforts advancing toward merge:**

- **#161364** — Config deslop (sixth pass), removing duplicated channel validation and sync/async I/O.
- **#161336** — Sharing session creation orchestration between native and worker execution.
- **#161385** — Persisting update execution phases in the worker, moving SQLite writes off the CLI thread.
- **#161243** — Sharing retained worker reader lifecycle for single-entry and batch session reads.

---

## 4. Community Hot Topics

### 🔴 Top Issues by Comment Activity

| Issue | Comments | Title | Link |
|-------|----------|-------|------|
| #143524 | 94 | Agent SQLite WAL grows to 1.4–2.8 GB in days despite `wal_autocheckpoint=1000` | [Open](https://github.com/openclaw/openclaw/issues/143524) |
| #149538 | 21 | Gateway reaches ready but never serves; event loop starved (632-agent fleet) | [Open](https://github.com/openclaw/openclaw/issues/149538) |
| #102175 | 20 | Embedded prompt cache breaks across room-event, policy, and Responses boundaries | [Open](https://github.com/openclaw/openclaw/issues/102175) |
| #157067 | 19 | Windows isolated cron setup passes uncloneable environment Proxy to session history worker | [Closed](https://github.com/openclaw/openclaw/issues/157067) |
| #111897 | 19 | Two concurrent runs for same session lane both complete, delivering duplicate replies | [Open](https://github.com/openclaw/openclaw/issues/111897) |

### 🔴 Top PRs by Activity

| PR | Title | Link |
|----|-------|------|
| #145133 | fix(discord,mattermost): release ingress lane on defer so debouncer can merge same-lane bursts | [Open](https://github.com/openclaw/openclaw/pull/145133) |
| #161342 | refactor(infra): compose final snapshot lease cleanup | [Open](https://github.com/openclaw/openclaw/pull/161342) |
| #161364 | refactor(config): deslop config sixth pass | [Open](https://github.com/openclaw/openclaw/pull/161364) |

### Analysis of Underlying Needs

The most-commented issue (#143524, 94 comments) reflects a **critical production-blocking bug** where SQLite WAL files grow without bound on Windows, blocking gateway startup. This is a P0 crash-loop / UX-release-blocker with a `silver shellfish` rating. The high comment count suggests maintainers and affected users are actively debugging this together, but a fix PR has not yet been identified — the issue is tagged `clawsweeper:no-new-fix-pr`, meaning no new fix PR has been linked.

The second issue (#149538, 21 comments) reveals a **scalability wall**: at 632 agents, the gateway's event loop starves and `/health` probes time out. This signals a need for architectural improvements in concurrent session handling, not just a patch.

The duplicate-delivery bug (#111897) and the prompt-cache-breakage issue (#102175) both touch on **session consistency under load** — a recurring theme across multiple high-comment issues.

---

## 5. Bugs & Stability

### P0 / Critical (Ranked by Severity)

1. **#143524** — SQLite WAL unbounded growth (1.4–2.8 GB), blocks gateway startup on Windows. Tags: `crash-loop`, `ux-release-blocker`. **No fix PR linked.** [Open](https://github.com/openclaw/openclaw/issues/143524)

2. **#149538** — Gateway reaches ready but never serves; event loop starved on 632-agent fleet. Tags: `crash-loop`, P0. **No fix PR linked.** [Open](https://github.com/openclaw/openclaw/issues/149538)

3. **#157325** — Stuck agent-DB resource makes **every** agent's replies fail with generic failure copy until gateway restart. Tags: `ux-release-blocker`, P0. **No fix PR linked.** [Open](https://github.com/openclaw/openclaw/issues/157325)

4. **#159612** — Subagent completion settlement retries forever; result re-injected every turn. Tags: `ux-release-blocker`, P0. **No fix PR linked.** [Open](https://github.com/openclaw/openclaw/issues/159612)

5. **#157160** — Gateway crash-loops on plugin-doctor-post-session-state after schema migration 17→18. Tags: `crash-loop`, `ux-release-blocker`, P0. **No fix PR linked.** [Open](https://github.com/openclaw/openclaw/issues/157160)

6. **#158095** — Gateway worker keeps state-lifecycle after acquire; every later acquire fails until restart. Tags: `crash-loop`, `ux-release-blocker`, P0. **No fix PR linked.** [Open](https://github.com/openclaw/openclaw/issues/158095)

7. **#155859** — Gateway startup wall-time scales with enabled plugin count; discord, codex, and openclaw-weixin dominate the 120s publication budget. Tags: `ux-release-blocker`, P0. **No fix PR linked.** [Open](https://github.com/openclaw/openclaw/issues/155859)

8. **#158936** — macOS app readiness watchdog SIGTERMs slow-starting gateway, causing restart loop. Tags: `crash-loop`, `ux-release-blocker`, P0. **No fix PR linked.** [Open](https://github.com/openclaw/openclaw/issues/158936)

9. **#152965** — Hot-reloading a non-channel plugin disposes channel plugins without reconnecting; cuts active streams and drops inbound messages. Tags: `ux-release-blocker`, P0. **No fix PR linked.** [Open](https://github.com/openclaw/openclaw/issues/152965)

### P1 / High Severity

10. **#156571** — Model-catalog worker leaks `openclaw-plugin-build-*` source captures in tmp (1–3 GB/min, fills disk). Tags: `ux-release-blocker`. **No fix PR linked.** [Open](https://github.com/openclaw/openclaw/issues/156571)

11. **#159662** — `prepared-model-catalog.worker.js`: unbounded memory leak, ~4–5 GB/h, provider-agnostic. Tags: P0 severity but P1 in practice. **No fix PR linked.** [Open](https://github.com/openclaw/openclaw/issues/159662)

12. **#160548** — Prepared-model-catalog worker leaks ~1 GiB per 5 min; each memory reclamation supersedes runtime publication and kills waiting turns. **No fix PR linked.** [Open](https://github.com/openclaw/openclaw/issues/160548)

13. **#159596** — Gateway memory sawtooth on 2026.9.6; prepared-model-catalog worker grows to full heap ceiling; ~200 critical memory-pressure events/day. **No fix PR linked.** [Open](https://github.com/openclaw/openclaw/issues/159596)

14. **#154812** — Runaway RSS outside V8 heap causes OOM and shutdown timeout (reached 9.32 GiB on 15 GiB host). **No fix PR linked.** [Open](https://github.com/openclaw/openclaw/issues/154812)

15. **#157989** — Plugin source capture rewrites ~1.1–1.4 GB per CLI command and ~6.5 GB per Gateway start; severe SSD wear. **No fix PR linked.** [Open](https://github.com/openclaw/openclaw/issues/157989)

16. **#159094** — Gateway owns state-lifecycle lease but internal workers report another OpenClaw process owns state-lifecycle. **No fix PR linked.** [Open](https://github.com/openclaw/openclaw/issues/159094)

17. **#154572** — `sessions_spawn` to a claude-cli-runtime child always fails with `SessionTranscriptWriterClaimReboundError`. **No fix PR linked.** [Open](https://github.com/openclaw/openclaw/issues/154572)

18. **#137710** — Native Codex completion is recorded but does not wake a sessions_yield parent. **No fix PR linked.** [Open](https://github.com/openclaw/openclaw/issues/137710)

19. **#121661** — CLI-backed subagent announce-wake turns run tool-free; model fabricates tool calls and output. **No fix PR linked.** [Open](https://github.com/openclaw/openclaw/issues/121661)

20. **#125570** — Skill Workshop update apply overwrites live skill's description, silently breaking skill routing. **No fix PR linked.** [Open](https://github.com/openclaw/openclaw/issues/125570)

### Key Stability Concern

**No fix PRs are linked to any of the top 20 P0/P1 bugs.** This is the single most striking finding: the project has an enormous backlog of critical, production-blocking issues with no active remediation path. The `clawsweeper:no-new-fix-pr` tag appears on the majority of these, suggesting either a triage bottleneck or an intentional freeze on new fix PRs while the team focuses on the 2026.9.7 release tracker (#157531).

---

## 6. Feature Requests & Roadmap Signals

| Issue | Type | Summary | Link |
|-------|------|---------|------|
| #16670 | Feature | Onboarding Wizard should include Memory/Embedding setup as a mandatory step | [Open](https://github.com/openclaw/openclaw/issues/16670) |
| #156341 | RFC | Task-scoped decision models and inspectable evaluation | [Open](https://github.com/openclaw/openclaw/issues/156341) |
| #153340 | PR | feat: optionally omit tools on conversational turns | [Open](https://github.com/openclaw/openclaw/pull/153340) |
| #161400 | PR | feat(openai): support GPT-6.1 Sol | [Open](https://github.com/openclaw/openclaw/pull/161400) |
| #107378 | PR | feat(minimax): route /fast to MiniMax's faster paid lanes with correct pricing | [Open](https://github.com/openclaw/openclaw/pull/107378) |

**Predicted next-version features:**

- **GPT-6.1 Sol support** (#161400) is already in a ready-to-merge PR and will likely land in 2026.9.7 or a rapid follow-up.
- **Optional tool omission on conversational turns** (#153340) is a large, well-specified PR that could ship soon — it enables the Decision model to narrow tool definitions when no tools are needed, reducing token usage.
- **Onboarding wizard memory/embedding step** (#16670) is a long-standing feature request (since February 2026) that addresses a real user friction point: new users don't configure `memorySearch` during setup and lose persistence out of the box.
- **Task-scoped decision models** (#156341) is an RFC that could shape the next major architecture direction if adopted.

---

## 7. User Feedback Summary

### Recurring Pain Points

1. **Memory leaks and disk exhaustion** — Multiple independent reports (issues #156571, #159662, #160548, #157989, #154812) describe unbounded resource growth in the prepared-model-catalog worker, plugin source captures, and gateway RSS. Users report 4–5 GB/h leaks, 1–3 GB/min tmp file accumulation, and OOM kills on hosts with 15 GiB RAM. This is the single most-reported class of problem.

2. **Session state corruption and deadlock** — Issues #157325, #158095, #159094, #154572, #137710, and #138599 all describe failures where session state, database locks, or transcript writer claims become stuck, requiring gateway restarts to recover. Users report "every agent's replies fail" until restart.

3. **Startup and readiness failures** — #149538 (event loop starved at 632 agents), #155859 (startup time scales with plugin count), #158936 (macOS watchdog SIGTERMs slow starts), and #152839 (openat2 ENOSYS on Synology NAS) all prevent the gateway from reaching a serving state.

4. **Duplicate/redundant replies** — #111897 (concurrent same-lane runs deliver duplicate replies) and #158332 (message-less inter-session deliveries

---

## Cross-Ecosystem Comparison



# Cross-Project Ecosystem Comparison Report
## 2026-09-30 — Personal AI Assistant / Agent Open-Source Landscape

---

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem is in a phase of **rapid maturation and consolidation**. The dominant pattern across projects is a high volume of concurrent bug-fixing and architectural refactoring, with multiple projects simultaneously addressing critical production-blocking issues while laying groundwork for next-generation features. The landscape is bifurcated: a few projects (OpenClaw, ZeroClaw, CoPaw, Hermes Agent) show very high activity and large open-backlog counts, while others (TinyClaw, ZeptoClaw, Moltis) are quiet or stable. A recurring theme is **session-state integrity, memory-leak remediation, and provider-abstraction hardening** — projects are moving from "it works" to "it works at scale." Community engagement is generally healthy, but review capacity is emerging as a bottleneck in projects with high PR-to-maintainer ratios.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed PRs | Latest Release | Health Signal |
|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | 130 | v2026.8.33 (ext-stable) / 2026.9.6 latest | ⚠️ High activity, critical backlog unaddressed |
| **ZeroClaw** | 27 | 50 | 2 | None | ⚠️ High activity, security bugs open |
| **CoPaw** | 11 | 36 | 20 | None | ✅ High velocity, strong fix-yield |
| **Hermes Agent** | 50 | 50 | 4 | v2026.9.24 | ✅ Active bug-squash, desktop focus |
| **NanoBot** | 5 | 41 | 13 | None | ✅ Vigorous contributor base, review bottleneck |
| **NanoClaw** | 2 | 15 | 7 | None | ✅ Steady, contributor-driven |
| **IronClaw** | ~4 | ~4 | 1 (release promo) | **v1.4.1** (Sep 29) | ✅ Healthy, release-ready |
| **LobsterAI** | 10 | 13 | 13 | None | ⚠️ Good merge velocity, stale critical bugs |
| **PicoClaw** | 6 | 3 | 1 | None | ⚠️ UX-focused, architecture issues open |
| **NullClaw** | 1 | 1 | 1 | None | ⚡ Low activity, stable |
| **Moltis** | 1 | 0 | 0 | None | ⚡ Minimal activity |
| **TinyClaw** | 0 | 0 | 0 | None | ⚡ No activity |
| **ZeptoClaw** | 0 | 0 | 0 | None | ⚡ No activity |

---

## 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Largest community and issue volume** (500 issues/PRs in 24h) — indicates deep user base and extensive real-world testing.
- **Most mature release cadence** with an `extended-stable` (LTS-equivalent) branch alongside bleeding-edge 2026.9.x line — few peers offer this dual-track discipline.
- **Broadest plugin/channel ecosystem** — 30+ plugins and channels referenced in cleanup PRs, suggesting the widest integration surface.
- **Highest transparency** in issue reporting — issues are well-tracked with severity tags, comment activity, and explicit `clawsweeper:no-new-fix-pr` markers.

**Technical Approach Differences:**
- OpenClaw uses a **gateway-centric architecture** with explicit worker processes, SQLite-backed session state, and a plugin-hotload model. This is more similar to IronClaw and Hermes Agent than to NanoBot or PicoClaw, which favor lighter runtime footprints.
- The project has invested heavily in **update mechanics** (backup workers, native service discovery, runtime repair safeguards) — a level of operational maturity that most peers lack entirely.
- **Model routing and pricing** is treated as a first-class concern (GPT-6.1 Sol support, MiniMax fast-lane routing), suggesting an OpenAI/Azure-compatible provider abstraction layer deeper than most competitors.

**Community Size Comparison:**
OpenClaw's comment activity on top issues (94 comments on #143524) far exceeds any other project in this digest. The next closest is Hermes Agent (#89995 with 21 comments) and ZeroClaw (#8832 with 10 comments). This suggests OpenClaw has the largest and most engaged user base, but also the largest burden of production-critical bugs.

**Key Weakness:** The complete absence of fix PRs linked to the top 20 P0/P1 bugs is alarming. No other project in this digest shows such a stark gap between issue severity and remediation status. This may indicate a triage bottleneck, an intentional freeze, or resource constraints.

---

## 4. Shared Technical Focus Areas

Several requirements emerge consistently across multiple projects:

| Focus Area | Projects Involved | Specific Need |
|---|---|---|
| **Session-state integrity & concurrency** | OpenClaw (#111897, #158095), NanoClaw (#3918), ZeroClaw (#11197, #11239), Hermes Agent (#126091) | Prevent duplicate replies, stuck locks, transcript-writer claim errors, and session metadata resurrection after deletion |
| **Memory/resource leaks** | OpenClaw (#143524, #156571, #159662), PicoClaw (#440), Hermes Agent (#121095) | Unbounded SQLite WAL growth, worker memory leaks (4–5 GB/h), stale daemon processes, disk exhaustion |
| **Provider abstraction & fallback** | NanoBot (#5967, #5977), Hermes Agent (#128488, #69008), CoPaw (#8035), ZeroClaw (#11215) | Credit-exhaustion bypasses fallback, retired models in pickers, silent provider failures, tool-calling incompatibilities |
| **Multi-agent / subagent architecture** | NanoBot (#4616, #5811), OpenClaw (#159612, #154572), Hermes Agent (#122490), ZeroClaw (#11198, #11239) | Subagent result routing, cross-session snapshot isolation, principal-scoped memory, bot-to-bot delivery |
| **Desktop/TUI parity** | Hermes Agent (#81251, #89995), CoPaw (#6252, #7999), LobsterAI (#2390, #2396) | Desktop features lagging CLI, zoom shortcuts, font scaling, shell-wrapper portability |
| **Context-window management** | NanoBot (#5298, #1759), OpenClaw (#102175), PicoClaw (#440), ZeroClaw (#10068) | MCP tool schema bloat, prompt cache breakage, hard iteration limits, context-budget clamping |
| **Channel adapter reliability** | Hermes Agent (#101160, #30708), CoPaw (#7773, #7765, #7946), ZeroClaw (#11257, #7824) | Reconnect storms, duplicate event replay, notification spam, media handling gaps |

---

## 5. Differentiation Analysis

| Project | Feature Focus | Target Users | Architecture Signature |
|---|---|---|---|
| **OpenClaw** | Gateway orchestration, plugin ecosystem, update mechanics | Enterprise/self-hosted deployments | Gateway + worker processes, SQLite sessions, hot-swappable plugins |
| **NanoBot** | Provider handling, Telegram policy, session refactoring | Multi-provider power users, Telegram admins | Lightweight, rapid contributor-driven, session orchestration focus |
| **Hermes Agent** | Desktop stability, memory compaction, gateway auth | Desktop/TUI users, self-hosting enthusiasts | Desktop (Electron) + `hermes serve` backend, catalog/hybrid compaction |
| **NanoClaw** | Container lifecycle, Iron/OpenCode integration, CI security | Containerized deployments, edge/Iron proxy users | Container-runner architecture, provider-declared endpoints, CI-hardened |
| **IronClaw** | Google OAuth, Wasmtime sandbox, semantic tool selection, edge workers | Enterprise operators, multi-host deployments | WASM tool sandbox, embedding-based tool routing, remote edge worker RFC |
| **LobsterAI** | Cowork/OpenClaw UX, Windows installer, gateway stability | Windows users, Chinese-market channels (WeCom, QQ) | OpenClaw runtime fork with Cowork UI layer, Windows-specific packaging |
| **CoPaw** | Terminal portability, Telegram rendering, desktop shell, provider fallback | Cross-platform desktop users, Telegram operators | Tauri desktop, PTY/terminal focus, provider fallback cooldowns |
| **ZeroClaw** | Security/identity (OIDC), schema V4, plugin lifecycle, RPC parity | Security-conscious deployments, multi-provider | OIDC-first architecture, schema-versioned config, RPC/HTTP parity lane |
| **PicoClaw** | Web UI performance, agent loop limits, message queue UX | Web UI users, lightweight agent deployments | Browser-first interface, scheduling primitives, hard iteration limits |
| **NullClaw** | Memory engine extensibility, web search provider pinning | Users seeking swappable memory backends | Modular memory architecture, provider-pinned integrations |
| **Moltis** | Goal mode / ralph loop (proposed) | Autonomous agent enthusiasts | Minimal current activity, early-stage |

---

## 6. Community Momentum & Maturity

**Tier 1 — Rapid Iteration (High Activity, High Fix Yield):**
- **CoPaw**: 36 PRs, 20 merged/closed in 24h, multiple contributors, tight fix-to-issue mapping. Process friction visible (duplicate PRs for same fix) but velocity is exceptional.
- **IronClaw**: Just shipped v1.4.1 with Google OAuth and Wasmtime security; new contributors (`changeroa`, `CjS77`) joining; semantic tool selection and edge worker RFC signal strong roadmap vision.

**Tier 2 — High Activity, Stabilization Phase:**
- **OpenClaw**: Massive activity (500 issues/PRs), but critical bug remediation is stalled. The project is in a "stabilize 2026.9.x" phase with heavy refactoring (config deslop, worker lifecycle sharing) but no fix PRs for top P0 bugs.
- **ZeroClaw**: 27 issues, 50 PRs updated, but 48 PRs still open. Security work (OIDC closeout, principal-scoped memory) is advancing but S0 bugs remain. Schema V4 breaking cut is in progress.
- **Hermes Agent**: 50 issues/PRs touched, but only 4 merged. Active bug-squash on Desktop and gateway auth; memory-compaction architecture (#91118) is a significant upcoming feature.

**Tier 3 — Steady, Contributor-Driven:**
- **NanoBot**: 41 PRs, 13 merged, 28 open — review bottleneck evident. Subagent architecture maturing (#4616, #5811 landed). MCP tool context budget work (#1759) is stuck at ~6 months.
- **NanoClaw**: 15 PRs, 7 closed, 8 open — primarily `glifocat`-driven with one contribution from `barnuri`. Container lifecycle and Iron/OpenCode integration are the themes.

**Tier 4 — Quiet / Stable / Low Activity:**
- **PicoClaw**: 6 issues, 3 PRs — UX-focused but architecture issues (iteration limits, scheduling loops) remain open.
- **NullClaw**, **Moltis**, **TinyClaw**, **ZeptoClaw**: Minimal to no activity. NullClaw merged one PR; Moltis has one open enhancement; TinyClaw and ZeptoClaw are silent.

---

## 7. Trend Signals

**For AI Agent Developers:**

1. **Session-state concurrency is the new security boundary.** Duplicate replies, stuck locks, and transcript-writer claim errors are the top failure mode across OpenClaw, ZeroClaw, NanoClaw, and Hermes Agent. Developers should invest in idempotent session operations and explicit lease lifecycle management.

2. **Provider abstraction is breaking under real-world usage.** Credit-exhaustion bypasses, retired-model pickers, and silent provider failures are reported across NanoBot, Hermes Agent, CoPaw, and ZeroClaw. The next generation of agent frameworks will need provider-aware fallback chains with explicit health-checking and graceful degradation.

3. **Memory/resource leaks are the #1 production blocker.** OpenClaw's SQLite WAL growth (1.4–2.8 GB/day), NanoBot's MCP context bloat, and Hermes Agent's gateway RSS sawtooth all point to the same need: bounded-resource execution with explicit reclamation guarantees. Agents that cannot run for more than hours without

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-09-30

---

## 1. Today's Overview

NanoBot is experiencing a **high-activity day** with 41 pull requests updated (13 merged/closed, 28 still open) and 5 active issues, all filed or updated within the last 24 hours and none yet closed. The project clearly has a vigorous contributor base—multiple community members are simultaneously advancing features, bug fixes, and refactors, with a strong theme around **provider/model handling, Telegram group policy, and session architecture**. No new releases shipped today, but the volume of open PRs signals an upcoming consolidation. The ratio of open to merged PRs (28:13) suggests a review bottleneck or that many changes are stacked/in-progress, particularly from contributors `chengyongru`, `CarmeloCampos`, and `Fatih0234`.

---

## 2. Releases

No new releases were published today. The last release information is unavailable in the provided data.

---

## 3. Project Progress

**Merged/Closed PRs today (13 total; 5 visible in data):**

| PR | Title | Type | Author |
|----|-------|------|--------|
| [#5978](https://github.com/HKUDS/nanobot/pull/5978) | fix(webui): hide provider models past OpenAI shutdown_date | Bug fix | gianfrancodemarco |
| [#5976](https://github.com/HKUDS/nanobot/pull/5976) | fix(my): scope subagent snapshots to the current session | Security fix | chengyongru |
| [#5975](https://github.com/HKUDS/nanobot/pull/5975) | refactor(tui): organize source by feature boundaries | Refactor | chengyongru |
| [#4616](https://github.com/HKUDS/nanobot/pull/4616) | fix(agent): route direct subagent results in-turn | Bug fix | chengyongru |
| [#5811](https://github.com/HKUDS/nanobot/pull/5811) | refactor(agent): persist subagent sessions through shared execution | Refactor | chengyongru |

Key advances:
- **Subagent architecture maturation**: Both [#4616](https://github.com/HKUDS/nanobot/pull/4616) and [#5811](https://github.com/HKUDS/nanobot/pull/5811) landed, consolidating how delegated tasks are routed and persisted—a foundational improvement for multi-agent workflows.
- **Security hardening**: [#5976](https://github.com/HKUDS/nanobot/pull/5976) scopes subagent snapshot access to the current session, preventing cross-session data leakage.
- **OpenAI retired model filtering**: [#5978](https://github.com/HKUDS/nanobot/pull/5978) was closed (superseded by the nearly identical [#5979](https://github.com/HKUDS/nanobot/pull/5979) which is still open), addressing the model picker showing shut-down models.

---

## 4. Community Hot Topics

**Most active Issues/PRs by engagement:**

1. **[#5298](https://github.com/HKUDS/nanobot/issues/5298) — [enhancement] Proposal: budget model-visible MCP schemas for large tool sets** (2 comments, open since Aug 2026)
   - This is the longest-running open item updated today. The core concern is **context cost inflation** when `ToolRegistry.get_definitions()` injects all MCP tool schemas into the prompt. With large tool sets, this balloons token usage. The related PR [#1759](https://github.com/HKUDS/nanobot/pull/1759) (lazy loading + auto-demotion of MCP tools) has been open since March and is marked `[conflict]`, indicating unresolved merge difficulties. The underlying need: **production deployments with 50+ MCP tools need a way to keep prompt budgets manageable**.

2. **[#5900](https://github.com/HKUDS/nanobot/issues/5900) — Silent context compaction and reduce WeChat channel polling log verbosity** (1 comment)
   - Users find **autocompaction notification messages disruptive** in WeChat/WhatsApp channels, and polling logs are too noisy. The companion PR [#5780](https://github.com/HKUDS/nanobot/pull/5780) directly addresses the notification side and is still open.

3. **[#5972](https://github.com/HKUDS/nanobot/issues/5972) + [#5973](https://github.com/HKUDS/nanobot/pull/5973) + [#5974](https://github.com/HKUDS/nanobot/pull/5974) — Telegram per-chat/per-topic group policy** (stacked PRs, 0 comments each but same-day filing)
   - A well-structured proposal for **granular Telegram forum topic control**, with a clean separation: #5973 adds the policy override layer, #5974 adds the `/group` command. This reflects a real need for **multi-purpose supergroup deployments** where the bot should be active in some topics and silent in others.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **High** | [#5967](https://github.com/HKUDS/nanobot/issues/5967) | Fallback models silently skipped on "insufficient credits" HTTP 400 — agent appears dead even though fallbacks are configured | [#5968](https://github.com/HKUDS/nanobot/pull/5968) (open) |
| **Medium** | [#5977](https://github.com/HKUDS/nanobot/issues/5977) | Model picker lists retired OpenAI models (`gpt-5-chat-latest`, `gpt-5.3-chat-latest`), causing immediate turn failures | [#5979](https://github.com/HKUDS/nanobot/pull/5979) (open) |
| **Medium** | [#5900](https://github.com/HKUDS/nanobot/issues/5900) (partial bug) | Context compaction sends unwanted channel notifications; WeChat polling logs excessive verbosity | [#5780](https://github.com/HKUDS/nanobot/pull/5780) (open) |
| **Low** | [#5982](https://github.com/HKUDS/nanobot/pull/5982) | 20 misleading zh-TW locale strings in WebUI | Self-contained fix PR (open) |

**Notable**: The fallback-skipping bug (#5967) is the most impactful — it breaks the core resilience mechanism when credits are exhausted, which is a common scenario for users balancing multiple API keys. Fix PR [#5968](https://github.com/HKUDS/nanobot/pull/5968) is already filed same-day.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Signal Strength | Next-Version Likelihood |
|---------|--------|----------------|------------------------|
| **Per-chat/per-topic Telegram group policy + `/group` command** | [#5972](https://github.com/HKUDS/nanobot/issues/5972), [#5973](https://github.com/HKUDS/nanobot/pull/5973), [#5974](https://github.com/HKUDS/nanobot/pull/5974) | Strong (issue + 2 stacked PRs same day) | **High** — clean PR chain, just needs #5973 merged first |
| **Catalog-backed reasoning effort selection in WebUI** | [#5983](https://github.com/HKUDS/nanobot/pull/5983) | Moderate (PR only, no issue) | **High** — self-contained, improves UX significantly |
| **MCP tool lazy loading / context budgeting** | [#5298](https://github.com/HKUDS/nanobot/issues/5298), [#1759](https://github.com/HKUDS/nanobot/pull/1759) | Strong demand but blocked (`[conflict]` on PR) | **Low short-term** — needs conflict resolution |
| **Silent context compaction** | [#5900](https://github.com/HKUDS/nanobot/issues/5900), [#5780](https://github.com/HKUDS/nanobot/pull/5780) | Moderate (PR open since Sep 15) | **Medium** — straightforward change, awaiting review |
| **Session focus persistence via `my` tool** | [#5537](https://github.com/HKUDS/nanobot/pull/5537) | Moderate | **Medium** — addresses real continuity gap |
| **Concurrent subagent result aggregation** | [#5954](https://github.com/HKUDS/nanobot/pull/5954) | Moderate | **Medium** — enhances multi-agent workflows |
| **Binary HTTP attachment uploads** | [#5980](https://github.com/HKUDS/nanobot/pull/5980) | Moderate (fixes WebSocket 1009 frame limit) | **High** — resolves a hard failure path |

---

## 7. User Feedback Summary

**Pain Points:**
- **Provider reliability gaps**: Users report that retired OpenAI models still appear in the picker ([#5977](https://github.com/HKUDS/nanobot/issues/5977)), and credit-exhaustion errors bypass fallback logic ([#5967](https://github.com/HKUDS/nanobot/issues/5967)). Together these erode trust in the provider abstraction — users expect the system to gracefully handle model lifecycle and billing edge cases.
- **Notification spam**: Context compaction notifications flooding WeChat/WhatsApp channels are disruptive ([#5900](https://github.com/HKUDS/nanobot/issues/5900)). Users want background operations to be truly invisible.
- **MCP context cost**: Power users with large tool sets face token budget pressure ([#5298](https://github.com/HKUDS/nanobot/issues/5298)), indicating the project is being pushed toward more complex, tool-heavy deployments than its current architecture was designed for.
- **Telegram forum limitations**: Single group-wide policy is too coarse for supergroups with diverse topics ([#5972](https://github.com/HKUDS/nanobot/issues/5972)).

**Use Cases Emerging:**
- Multi-purpose Telegram supergroups with mixed-topic engagement patterns
- Budget-conscious deployments relying on provider fallback chains
- Large MCP tool registries (50+ tools) in production

**Satisfaction Signal**: The high PR volume from diverse contributors (8+ unique authors today) and the fact that issues receive same-day fix PRs suggest an **engaged, healthy community**. However, the accumulation of open PRs (28) relative to merged ones (13) may indicate review capacity is a limiting factor.

---

## 8. Backlog Watch

| Item | Age | Status | Concern |
|------|-----|--------|---------|
| **[#1759](https://github.com/HKUDS/nanobot/pull/1759)** — MCP tool lazy loading & auto-demotion | ~6 months (since Mar 2026) | Open, `[conflict]` | Directly addresses [#5298](https://github.com/HKUDS/nanobot/issues/5298) (MCP context budget), which has community demand. The conflict marker suggests merge difficulties with main. Maintainer attention needed to unblock this. |
| **[#5298](https://github.com/HKUDS/nanobot/issues/5298)** — MCP schema context budget proposal | ~7 weeks (since Aug 8) | Open, 2 comments | Long-lived enhancement with no clear resolution path. The linked PR (#1759) is stalled. |
| **[#5780](https://github.com/HKUDS/nanobot/pull/5780)** — Stop context compaction notifications | ~15 days | Open | Simple behavioral fix with clear demand (echoed by #5900). Awaiting review. |
| **[#5537](https://github.com/HKUDS/nanobot/pull/5537)** — Persist session focus across turns | ~5 weeks (since Aug 25) | Open, `[conflict]` | Conflict with main needs resolution; otherwise a well-scoped feature. |
| **[#5943](https://github.com/HKUDS/nanobot/pull/5943)** — Centralize session state in SQLite | ~3 days | Open, `priority: p1` | Marked high priority; a foundational architectural change that many other PRs likely depend on. Needs prompt, careful review. |

**Key takeaway**: The MCP tool context budget work (#1759 / #5298) is the longest-standing impactful item and appears stuck. The session architecture refactor (#5943) is flagged p1 and likely a merge prerequisite for several other PRs — its review velocity will bottleneck or unblock the broader pipeline.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>



# Hermes Agent Project Digest — 2026-09-30

---

## 1. Today's Overview

Hermes Agent saw heavy activity across both issues and PRs in the last 24 hours, with 50 issues updated (42 open, 8 closed) and 50 PRs touched (46 open, 4 merged/closed). No new releases were cut today, but the commit velocity remains high — particularly around Desktop stability, gateway/auth hardening, and memory-compaction architecture. The project is in an active bug-squash phase with a concentration of fixes targeting the Desktop app, the `hermes serve` backend, and plugin-loading reliability.

---

## 2. Releases

**No new releases today.** The most recent tagged version remains `v2026.9.24` (referenced in issue #124010 as the release that introduced the Photon sidecar zombie-stream regression). The next release will likely bundle the numerous Desktop/gateway fixes that landed this week.

---

## 3. Project Progress

Four PRs were merged or closed today, and a larger batch of open PRs are queued for review:

| PR | Title | Status |
|---|---|---|
| [#128336](https://github.com/NousResearch/hermes-agent/pull/128336) | `fix(cli): bounded graceful shutdown ends a SIGTERM-orphaned serve backend (#76244)` | **CLOSED** |
| [#128270](https://github.com/NousResearch/hermes-agent/pull/128270) | `test(desktop): pin dirty edit blur→Enter interleaving` | **CLOSED** |
| [#128532](https://github.com/NousResearch/hermes-agent/pull/128532) | `fix(desktop): keep staged clarify answers across remounts and salvage them on turn unwind` | **OPEN** |
| [#128535](https://github.com/NousResearch/hermes-agent/pull/128535) | `fix(agent): stage unmapped @file: refs into the sandbox bind mount` | **OPEN** |
| [#128534](https://github.com/NousResearch/hermes-agent/pull/128534) | `fix(desktop): passive bot-relay reads stop the self-sustaining local backend (#108088)` | **OPEN** |
| [#128533](https://github.com/NousResearch/hermes-agent/pull/128533) | `fix(docker): say why the configured cwd→/workspace bind was skipped` | **OPEN** |
| [#128521](https://github.com/NousResearch/hermes-agent/pull/128521) | `fix(auth): accept provider-verified session tokens in gated WebSocket auth` | **OPEN** |
| [#128531](https://github.com/NousResearch/hermes-agent/pull/128531) | `fix(tui_gateway): broadcast approval.cancelled when reap/teardown drop pending prompts` | **OPEN** |
| [#128526](https://github.com/NousResearch/hermes-agent/pull/128526) | `fix(desktop): surface a hung gateway in the interactive login window` | **OPEN** |
| [#128525](https://github.com/NousResearch/hermes-agent/pull/128525) | `fix(pm,desktop): name a wrong-Python venv and the ELECTRON_RUN_AS_NODE hazard (#85356)` | **OPEN** |
| [#128453](https://github.com/NousResearch/hermes-agent/pull/128453) | `fix(desktop,onboarding): survive the boot secret-hydration race; blame the pin, keep the skip` | **OPEN** |
| [#128339](https://github.com/NousResearch/hermes-agent/pull/128339) | `fix(serve): parent-death watchdog runs the graceful exit path instead of os._exit (#108601)` | **OPEN** |
| [#91118](https://github.com/NousResearch/hermes-agent/pull/91118) | `feat(memory): add catalog and hybrid compaction modes` | **OPEN** |
| [#53992](https://github.com/NousResearch/hermes-agent/pull/53992) | `fix(state): opt-in logical lineage for JSON/JSONL session export` | **OPEN** |

**Key advances:**
- **Gateway/auth robustness:** Multiple PRs from OutThisLife close gaps in gated WebSocket auth, approval lifecycle broadcast, hung-gateway detection in the login flow, and graceful shutdown of the `hermes serve` backend.
- **Desktop stability:** Fixes for clarify-card state across remounts, passive bot-relay backend leaks, onboarding credential races, wrong-Python venv detection, and image-lightbox zoom/pan.
- **Memory architecture:** PR #91118 adds Standard, Catalog, and Hybrid compaction modes — a significant architectural addition that keeps compacted sessions searchable through lineage.
- **Docker & sandbox:** Better diagnostics for skipped bind mounts and proper staging of `@file:` refs outside container mount roots.

---

## 4. Community Hot Topics

### 🔥 #89995 — Expose Bot Mode group chat rooms in web dashboard & gateway (21 comments, 👍 3)
**Author:** lazy-idler | [Link](https://github.com/NousResearch/hermes-agent/issues/89995)

The top-active issue by engagement. Bot Mode group chats (the Bots panel with member turn loops) are currently desktop-only. Users want them exposed in the web dashboard and gateway so group chat rooms can be opened outside the Electron app. This is a feature gap between desktop and web that has generated sustained discussion.

### 🔥 #122490 — bot-to-bot DM delivery runner inherits store python with no third-party deps (ruamel death) (14 comments)
**Author:** Prediction6767 | [Link](https://github.com/NousResearch/hermes-agent/issues/122490)

Bot-to-bot DM deliveries fail before the ownership ack with `Live admission outcome unknown: No module named 'ruamel'`. The delivery never reaches the target Bot Chat. This is a blocking bug for bot-to-bot workflows on a clean dependency environment.

### 🔥 #123926 — Plugins silently dropped at boot — `_evict_modules` iterates `sys.modules` live (dictionary changed size during iteration) (13 comments)
**Author:** xxbcy | [Link](https://github.com/NousResearch/hermes-agent/issues/123926)

On boot, a random subset of plugins silently fails to load with no user-visible error — only a WARNING in `logs/errors.log`. This is a race condition in module eviction that makes plugin availability non-deterministic.

### 🔥 #101160 — read-idle watchdog reconnects every 300s on healthy quiet relays (silence treated as death) (9 comments)
**Author:** KostaGorod | [Link](https://github.com/NousResearch/hermes-agent/issues/101160)

After commit `94d86fa4`, a healthy but quiet Buzz relay connection is torn down and reconnected every ~300s of application-frame silence, even though the WebSocket transport is fully alive. This is a regression from a recent change that treats silence as death.

### 🔥 #122402 — Ubuntu historical takeover fails building python-olm when managed Python requires missing clang++ (8 comments)
**Author:** mzkarami | [Link](https://github.com/NousResearch/hermes-agent/issues/122402)

A git-installed Hermes update on Ubuntu 24.04 failed while preparing the new isolated dependency environment. The `matrix` feature pulled `python-olm==3.2.16`, which attempted a source build requiring `clang++`, which was missing. This is a build-environment compatibility gap.

---

## 5. Bugs & Stability

Bugs reported or updated today, ranked by severity:

| Severity | Issue | Summary | Fix PR? |
|---|---|---|---|
| **P1** | [#127073](https://github.com/NousResearch/hermes-agent/issues/127073) | `/rollback` reports success but restores nothing inside a nested git repo (checkpoints store it as a gitlink) | ❌ |
| **P1** | [#126474](https://github.com/NousResearch/hermes-agent/issues/126474) | Gateway restart fallback: replacement spawned in caller's cgroup + 5s force-kill of busy gateway (nonstandard unit name) | ❌ |
| **P2** | [#122490](https://github.com/NousResearch/hermes-agent/issues/122490) | Bot-to-bot DM delivery runner inherits store python with no third-party deps (ruamel death) | ❌ |
| **P2** | [#122402](https://github.com/NousResearch/hermes-agent/issues/122402) | Ubuntu historical takeover fails building python-olm when managed Python requires missing clang++ | ❌ |
| **P2** | [#30708](https://github.com/NousResearch/hermes-agent/issues/30708) | BlueBubbles adapter lacks inbound dedup → duplicate processing + two parallel sessions per message | ❌ |
| **P2** | [#75724](https://github.com/NousResearch/hermes-agent/issues/75724) | Full pre-update backup aborts when HERMES_HOME contains a non-SQLite .db file | ❌ |
| **P2** | [#81251](https://github.com/NousResearch/hermes-agent/issues/81251) | `/context` reports "No active agent" when agent is idle (Desktop + TUI) | ❌ |
| **P2** | [#121095](https://github.com/NousResearch/hermes-agent/issues/121095) | `browser_exec` leaves stale `browser_harness.daemon` processes running after completion | ❌ |
| **P2** | [#102943](https://github.com/NousResearch/hermes-agent/issues/102943) | Nous Portal login defaults model picker to paid flagship — bare Enter silently switches default provider/model | ❌ |
| **P2** | [#69008](https://github.com/NousResearch/hermes-agent/issues/69008) | OpenRouter deepseek-v4-flash tool continuation fails: `content[].thinking` must be passed back | ❌ |
| **P2** | [#124767](https://github.com/NousResearch/hermes-agent/issues/124767) | `hermes update`: parked-branch guard verification can skip spuriously on partial (tree:0) clones | ❌ |
| **P2** | [#128497](https://github.com/NousResearch/hermes-agent/issues/128497) | "ignoring host record … owned by uid 10000 (expected 10000)" — parent-dir check fails but warning blames the file | ❌ |
| **P2** | [#128488](https://github.com/NousResearch/hermes-agent/issues/128488) | API turn that names model and provider still gets the profile fallback chain | ❌ |
| **P3** | [#123926](https://github.com/NousResearch/hermes-agent/issues/123926) | Plugins silently dropped at boot — `_evict_modules` iterates `sys.modules` live | ❌ |
| **P3** | [#105267](https://github.com/NousResearch/hermes-agent/issues/105267) | Per-job / per-platform policy for external memory providers in cron (off / tools / full) | ❌ |
| **P3** | [#72649](https://github.com/NousResearch/hermes-agent/issues/72649) | `custom` provider: unconditional top-level `reasoning_effort` is fatal on OpenAI-compatible proxies that reject unknown params | ❌ |
| **P3** | [#119457](https://github.com/NousResearch/hermes-agent/issues/119457) | Startup "Unknown toolsets" warning fires for plugin-provided (portable) MCP server names | ❌ |
| **P3** | [#124010](https://github.com/NousResearch/hermes-agent/issues/124010) | Photon sidecar: zombie-stream watchdog restarts a healthy but quiet dedicated line every 10 minutes | ❌ |

**Notable:** Several P2 issues have open fix PRs in flight (e.g., #128336/#76244, #128534/#108088, #128525/#85356), but many high-impact bugs — particularly around gateway restart semantics, rollback integrity, and bot-to-bot delivery — remain unaddressed.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likely Timeline |
|---|---|---|
| [#89995](https://github.com/NousResearch/hermes-agent/issues/89995) | Expose Bot Mode group chat rooms in web dashboard & gateway | Mid-term — requires gateway API extensions |
| [#105267](https://github.com/NousResearch/hermes-agent/issues/105267) | Per-job / per-platform policy for external memory providers in cron | Near-term — builds on recent cron memory enablement |
| [#91118](https://github.com/NousResearch/hermes-agent/pull/91118) | Catalog and Hybrid compaction modes (Standard/Catalog/Hybrid) | **In progress** — PR is open, likely next release |
| [#53992](https://github.com/NousResearch/hermes-agent/pull/53992) | Logical lineage for JSON/JSONL session export | **In progress** — PR is open |

---

## 7. User Feedback Summary

**Recurring pain points from issue reports:**

- **Desktop is catching up to CLI:** Multiple issues (#81251, #89995, #73899, #108784, #108694) highlight feature gaps or bugs unique to the Desktop/TUI experience. Users report that `/context`, Bot Mode, HTML report navigation, and git branch tracking all work differently or not at all in Desktop vs. CLI.
- **Silent failures are the worst:** Plugin loading (#123926), Nous Portal login (#102943, #68144), and model selection (#102943) all produce silent, confusing state changes with no user-visible confirmation. Users explicitly call out the "bare Enter silently switches default" behavior as a trust issue.
- **Build/environment fragility:** Ubuntu 24.04 users hit `clang++` gaps (#122402), Windows users hit wrong-Python venv issues (#128525), and Docker users hit silent bind-mount skips (#128533). These are environment-specific failures that are hard to diagnose.
- **Session state reconciliation bugs:** Desktop UI shows duplicate messages and position teleportation (#126091), compression segments are truncated (#79565), and rollback restores nothing in nested repos (#127073). These are high-friction bugs that users encounter directly in their workflows.

---

## 8. Backlog Watch

| Item | Age | Why It Matters |
|---|---|---|
| [#30708](https://github.com/NousResearch/hermes-agent/issues/30708) — BlueBubbles adapter lacks inbound dedup | ~4 months | Duplicate message processing + parallel sessions; affects a core platform adapter |
| [#75724](https://github.com/NousResearch/hermes-agent/issues/75724) — Full pre-update backup aborts on non-SQLite .db files | ~2 months | Windows-specific; backup is a safety-critical operation |
| [#101160](https://github.com/NousResearch/hermes-agent/issues/101160) — read-idle watchdog reconnects every 300s on healthy quiet relays | ~4 weeks | Regression from recent change; affects Buzz relay users |
| [#122490](https://github.com/NousResearch/hermes-agent/issues/122490) — bot-to-bot DM delivery runner inherits store python with no third-party deps | ~5 days | Blocking for bot-to-bot workflows; dependency isolation issue |
| [#126474](https://github.com/NousResearch/hermes-agent/issues/126474) — gateway restart fallback: replacement spawned in caller's cgroup + 5s force-kill | ~2 days | P1; affects non-standard systemd unit names; could orphan gateway processes |
| [#127073](https://github.com/NousResearch/hermes-agent/issues/127073) — /rollback reports success but restores nothing inside a nested git repo | **Today** | P1; rollback is a safety net — silently doing nothing is dangerous |

---

**Overall assessment:** Hermes Agent is in a high-activity, high-fix-yield phase. The Desktop/gateway/auth test-and-fix loop is producing tight, focused PRs (many from OutThisLife). The memory-compaction work (#91

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



Based on the GitHub activity for **sipeed/picoclaw** leading up to September 30, 2026, here is the structured project digest.

---

### 1. Today's Overview
PicoClaw shows high community engagement and rapid UX-focused development, particularly centered around the Web UI. Activity in the last 24 hours includes 6 open issues and 3 pull request updates (2 open, 1 closed/stale), with no new releases. The primary focus of the community is addressing usability bugs in the web interface, while core architectural issues—such as hard iteration limits and scheduling loops—remain open discussion points. Overall, the project is actively maintained, with key contributors stepping in to submit fixes (e.g., PR #3410) in response to user-reported bugs.

---

### 2. Releases
*   **No new releases** were published in the last 24 hours.

---

### 3. Project Progress
*   **Closed PRs:** 
    *   **PR #3337** `[CLOSED] [stale] Fix/mcp failure hangs agent loop` ([link](https://github.com/sipeed/picoclaw/pull/3337)): Addressed a critical stability bug where a failed MCP server connection caused the entire agent loop to exit, freezing the chat interface. *Note: This PR has been marked as stale/closed, requiring verification of its compatibility with the current branch.*
*   **Active PRs (In Progress):**
    *   **PR #3410** `[OPEN] fix(pico/web): surface steering queue state so queued/dropped messages are no longer invisible` ([link](https://github.com/sipeed/picoclaw/pull/3410)): Submitted by `racso2609`, this PR aims to solve the invisible message queue issue by exposing queue states to the frontend client.
    *   **PR #3378** `[OPEN] fix(auth): use configured scopes instead of hardcoded default in RefreshAccessToken` ([link](https://github.com/sipeed/picoclaw/pull/3378)): Submitted by `sarff`, this corrects an authentication bug where custom OAuth scopes were overridden by hardcoded defaults during token refreshes.

---

### 4. Community Hot Topics
*   **#3281: Web UI Chat Input Lag (16 comments, 2 👍)** ([link](https://github.com/sipeed/picoclaw/issues/3281)): The most active issue today. Users report severe input lag in the Web UI when chat histories grow moderately long. This represents a frontend rendering or state management bottleneck.
*   **#440: Replacing Hard Iteration Limits (7 comments)** ([link](https://github.com/sipeed/picoclaw/issues/440)): A deep architectural discussion regarding replacing the hardcoded `max_tool_iterations: 20` limit with dynamic context-window bounding and loop detection algorithms.
*   **Underlying Needs:** The community is heavily pushing for **Web UI production readiness**. The web interface is now the primary day-to-day interface, and users demand smoother performance (no lag), transparency (no ghost sessions or hidden queues), and robust agent execution (no arbitrary loop cutoffs).

---

### 5. Bugs & Stability
Bugs reported or updated today are ranked by severity and impact on the user workflow:

1.  **Critical: Ghost Sessions (#3407)** ([link](https://github.com/sipeed/picoclaw/issues/3407)): Users report that active sessions can silently disappear from the dropdown list while the model is still thinking, making the chat inaccessible. *No direct fix PR is yet visible.*
2.  **High: Silent Message Drops & Queue Invisibility (#3408)** ([link](https://github.com/sipeed/picoclaw/issues/3408)): Messages sent while the agent is busy are queued silently and dropped if the queue (`MaxQueueSize=10`) fills up, providing zero UI feedback. 
    *   *Fix Status:* A potential fix is drafted in **PR #3410**.
3.  **High: Unwanted Autonomous Loops (#3409)** ([link](https://github.com/sipeed/picoclaw/issues/3409)): Background subagent polling via scheduling primitives triggers unintended autonomous ticks, causing unexpected loop behaviors.
4.  **Moderate: Web UI Performance/Lag (#3281)** ([link](https://github.com/sipeed/picoclaw/issues/3281)): Persistent input lag with medium-to-long chat histories.
5.  **Moderate: Hardcoded Iteration Limits (#440)** ([link](https://github.com/s

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

The user wants me to generate a structured project digest for the NanoClaw repository based on the provided GitHub data for the date 2026-09-30. I need to follow the specific sections requested and maintain an objective, data-driven style, including GitHub links for each item.

Let's analyze the input data carefully.

Data Overview:
- Issues updated in last 24h: 2 (open/active: 0, closed: 2)
- PRs updated in last 24h: 15 (open: 8, merged/closed: 7)
- New releases: 0

Latest Releases: None

Latest Issues (Total: 2 items):
1. #3888 [CLOSED] Iron Proxy setup fails on arm64 hosts: Iron Control image is amd64-only (exec format error)
   - Author: glifocat | Created: 2026-09-24 | Updated: 2026-09-29 | Comments: 0 | 👍: 0
   - URL: nanocoai/nanoclaw Issue #3888
   - Summary: On an aarch64 host (NVIDIA DGX Spark, NanoClaw 2.4.0, OpenCode + Iron Proxy via Advanced setup) the Iron Control step fails: Docker starts the `web` service and the container dies with `exec format error`. Cause verified: `.claude/skills/add-iron-proxy/versi...`
2. #3909 [CLOSED] [kind/bug, area/containers] [bug] Host starts a session container for an agent group deleted mid-spawn
   - Author: glifocat | Created: 2026-09-25 | Updated: 2026-09-29 | Comments: 0 | 👍: 0
   - URL: nanocoai/nanoclaw Issue #3909
   - Summary: `spawnContainer` (`src/container-runner.ts`) reads the agent group once (`getAgentGroup`, ~L359) and then awaits several steps before the container starts: ...

Latest Pull Requests (Total: 15 items):
1. #3964 [OPEN] [kind/feature, delivery/skill, PR: Feature, PR: Skill, follows-guidelines, core-team, area/providers, area/skills] feat(gateway): let a provider declare exact host:port model endpoints
   - Author: glifocat | Created: 2026-09-29 | Updated: 2026-09-29 | Comments: undefined | 👍: 0
   - URL: nanocoai/nanoclaw PR #3964
   - Summary: A provider can now declare exact `host:port` model endpoints that core auto-approves like its model domains. A model on a non-default port stops raising an approval card on every call. Problem: `modelDomains` covers public HTTPS domains only...
2. #3958 [CLOSED] [kind/bug, PR: Fix, follows-guidelines, core-team, area/core] fix(log): never throw when a log value cannot be JSON-serialized
   - Author: glifocat | Created: 2026-09-28 | Updated: 2026-09-29 | Comments: undefined | 👍: 0
   - URL: nanocoai/nanoclaw PR #3958
   - Summary: Logging can no longer crash the host when a value is not JSON-serializable. Problem: `formatErr` and `formatData` in `src/log.ts` called `JSON.stringify` directly, which throws on a circular object or a BigInt. `emit` has no try/catch, so a `log.*(...` call could crash the host.
3. #3955 [CLOSED] [kind/documentation, delivery/skill, PR: Docs, PR: Skill, follows-guidelines, core-team, area/providers, area/skills] docs(opencode): keep gateway notes in the gateway skills
   - Author: glifocat | Created: 2026-09-28 | Updated: 2026-09-29 | Comments: undefined | 👍: 0
   - URL: nanocoai/nanoclaw PR #3955
   - Summary: The OpenCode skill's docs now name no gateway. Iron's and OneCLI's credential notes move into their own skills, and the OpenCode docs say once: "Your gateway's skill says whether a manual grant, a manual re-auth after expiry, or an https-only endpoint applies."
4. #3954 [CLOSED] [kind/documentation, delivery/skill, PR: Docs, PR: Skill, follows-guidelines, core-team, area/providers, area/skills] docs(gateways): correct what the credential reread refuses in two comments
   - Author: glifocat | Created: 2026-09-28 | Updated: 2026-09-29 | Comments: undefined | 👍: 0
   - URL: nanocoai/nanoclaw PR #3954
   - Summary: Corrects two comments that said the gateway refuses a save whenever the entry changed since the lookup. Problem: the adapters reread the entry before `keep()`/`save()` and refuse a changed ID or unexpected metadata. They do not detect a value-only change.
5. #3901 [OPEN] [kind/bug, PR: Fix, follows-guidelines, area/setup-installation, area/skills] fix(setup): let the host service reach the internet through an HTTPS proxy
   - Author: barnuri | Created: 2026-09-25 | Updated: 2026-09-29 | Comments: undefined | 👍: 0
   - URL: nanocoai/nanoclaw PR #3901
   - Summary: Lets the host service run on machines whose only route to the internet is an HTTPS proxy. Problem: Node ignores `HTTPS_PROXY` unless `NODE_USE_ENV_PROXY` (or `--use-env-proxy`) is set when the process boots. Setting it later from JS is too late.
6. #3968 [OPEN] [follows-guidelines, kind/hardening, core-team, area/containers, area/repository-maintenance, area/skills] ci: pin workflow actions and cosign, add Dependabot
   - Author: glifocat | Created: 2026-09-29 | Updated: 2026-09-29 | Comments: undefined | 👍: 0
   - URL: nanocoai/nanoclaw PR #3968
   - Summary: Pins every GitHub Action and the cosign binary to an exact version, so a moved tag upstream can't change what our CI runs, and adds Dependabot to keep those pins current. Problem: 7 actions used floating tags (`@v4`, `@v1`, ...), including in the j...
7. #3966 [OPEN] [kind/feature, delivery/skill, PR: Feature, PR: Skill, follows-guidelines, core-team, area/providers, area/skills] feat(iron): allow a keyless model on this machine over plain HTTP
   - Author: glifocat | Created: 2026-09-29 | Updated: 2026-09-29 | Comments: undefined | 👍: 0
   - URL: nanocoai/nanoclaw PR #3966
   - Summary: With Iron, a keyless model on the same machine now works at `http://host.docker.internal:<port>/v1`. Only the port the provider declares for its configured endpoint is reachable, and only the OpenAI inference routes. Why plain HTTP here: a keyless...
8. #3965 [OPEN] [kind/bug, delivery/skill, PR: Fix, PR: Skill, follows-guidelines, core-team, area/providers, area/skills] fix(opencode,iron): check the model URL against the selected gateway at the prompt
   - Author: glifocat | Created: 2026-09-29 | Updated: 2026-09-29 | Comments: undefined | 👍: 0
   - URL: nanocoai/nanoclaw PR #3965
   - Summary: OpenCode setup now checks a local model URL against the selected gateway at the prompt and asks again with the gateway's reason, instead of aborting later or saving a URL that fails every turn. Problem: under Iron, setup suggested `http://host.doc...`
9. #3919 [CLOSED] [kind/bug, delivery/skill, PR: Fix, PR: Skill, follows-guidelines, core-team, area/providers, area/setup-installation, area/skills] fix(opencode): check the model URL against the selected gateway at the prompt
   - Author: glifocat | Created: 2026-09-25 | Updated: 2026-09-29 | Comments: undefined | 👍: 0
   - URL: nanocoai/nanoclaw PR #3919
   - Summary: OpenCode setup now checks a local model URL against the selected gateway at the prompt. Under Iron, a keyless model on the same machine works over plain `http://host.docker.internal:<port>/v1`, pinned to that host and port. Problem: under Iron, se...
10. #3918 [OPEN] [kind/bug, PR: Fix, follows-guidelines, core-team, area/agent-runner, area/core] fix(agent-runner): do not nudge a result-door turn that already replied via a tool
    - Author: glifocat | Created: 2026-09-25 | Updated: 2026-09-29 | Comments: undefined | 👍: 0
    - URL: nanocoai/nanoclaw PR #3918
    - Summary: Held until the send_message ack flag lands (see follow-up). Stops result-door providers (e.g. OpenCode) re-sending a reply the agent already sent with `send_message`. Problem: without mid-turn delivery, the wrap-nudge only counted blocks th...
11. #3962 [OPEN] [kind/bug, PR: Fix, follows-guidelines, core-team, area/setup-installation] fix(update): refuse cutover when the service liveness probe itself fails
    - Author: glifocat | Created: 2026-09-28 | Updated: 2026-09-29 | Comments: undefined | 👍: 0
    - URL: nanocoai/nanoclaw PR #3962
    - Summary: Stops `/update-nanoclaw` from reporting `complete` while the old host is still running, when the service liveness probe itself fails. Problem: `detectService` in `scripts/update/service.ts` set `active` from `tryRun(...).ok`, which reads every non...
12. #3953 [CLOSED] [kind/bug, delivery/skill, PR: Fix, PR: Skill, follows-guidelines, core-team, area/skills] fix(iron-proxy): stop early on arm64 engines that cannot run amd64 images
    - Author: glifocat | Created: 2026-09-28 | Updated: 2026-09-29 | Comments: undefined | 👍: 0
    - URL: nanocoai/nanoclaw PR #3953
    - Summary: Stops the Iron Proxy install early, with the fix spelled out, on arm64 Docker engines that cannot run the amd64 Iron Control image, instead of failing with `exec format error` after a pull and a proxy build. Replaces #3891. Problem: `ironsh/iron-c...
13. #3956 [OPEN] [kind/bug, PR: Fix, follows-guidelines, core-team, area/setup-installation] fix(update): rollback stops the live nohup host and drains agent containers
    - Author: glifocat | Created: 2026-09-28 | Updated: 26-09-29 | Comments: undefined | 👍: 0
    - URL: nanocoai/nanoclaw PR #3956
    - Summary: Makes `update-nanoclaw.ts rollback` stop the host that is actually running and stop agent containers before it replaces `data/`. Problem 1 (nohup installs): cutover saves the service handle, with the pid from `nanoclaw.pid`, before it stops the ol...
14. #3878 [CLOSED] [kind/bug, PR: Fix, core-team, area/repository-maintenance, area/setup-installation] fix(setup): stop the ping agent's container before deleting its folder
    - Author: glifocat | Created: 2026-09-23 | Updated: 2026-09-29 | Comments: undefined | 👍: 0
    - URL: nanocoai/nanoclaw PR #3878
    - Summary: Setup's post-ping cleanup left the temporary ping agent's container running after deleting its folder. Problem: `cleanup-cli-agent` (via `scripts/delete-cli-agent.ts --folder ping_test`) removed the agent's rows, `groups/ping_test` and its session...
15. #3947 [CLOSED] [kind/bug, PR: Fix, follows-guidelines, core-team, area/containers, area/core, area/ncl-cli] fix(host): stop containers whose session or agent group was deleted
    - Author: glifocat | Created: 2026-09-27 | Updated: 2026-09-29 | Comments: undefined | 👍: 0
    - URL: nanocoai/nanoclaw PR #3947
    - Summary: The host sweep now stops containers whose session or agent group was deleted, so a delete no longer leaves a container running until the next host restart. Problem: the per-session reconcile only visits sessions that still have a row (`src/host-sw...

Let's organize the sections:

### 1. Today's Overview
Summarize project status and activity assessment.
- NanoClaw shows high activity and development velocity, primarily driven by the contributor `glifocat` (with one contribution from `barnuri`).
- The focus is heavily on container lifecycle management, gateway/provider integrations (specifically Iron and OpenCode), setup robustness, and CI security hardening.
- 15 PRs were updated in the last 24 hours, with 8 open and 7 closed/merged, indicating a rapid pace of development and review.
- 2 issues were closed, both addressing critical operational bugs (arm64 compatibility and mid-spawn container cleanup).
- No new releases were made today, but the volume of merged fixes suggests the codebase is actively stabilizing and preparing for upcoming delivery.

### 2. Releases
- Omit as there are no new releases today ("None").

### 3. Project Progress
Detail merged/closed PRs today, what features advanced or were fixed.
Let's list the closed/merged PRs:
- **#3958 [CLOSED] fix(log): never throw when a log value cannot be JSON-serialized**: Prevents host crashes from circular objects or BigInts in logs.
- **#3955 [CLOSED] docs(opencode): keep gateway notes in the gateway skills**: Refines OpenCode skill documentation, removing gateway specific details to align with modular gateway skills.
- **#3954 [CLOSED] docs(gateways): correct what the credential reread refuses in two comments**: Fixes misleading comments regarding credential reread behavior.
- **#3919 [CLOSED] fix(opencode): check the model URL against the selected gateway at the prompt**: Ensures OpenCode setup validates local model URLs against the selected gateway, preventing runtime failures.
- **#3953 [CLOSED] fix(iron-proxy): stop early on arm64 engines that cannot run amd64 images**: Prevents failed installations on arm64 hosts by stopping early with a clear explanation instead of encountering an `exec format error` after pulling an amd64 image.
- **#3878 [CLOSED] fix(setup): stop the ping agent's container before deleting its folder**: Fixes cleanup sequence to stop the temporary ping agent container before removing its directory.
- **#3947 [CLOSED] fix(host): stop containers whose session or agent group was deleted**: Ensures the host sweep cleans up orphaned containers when their corresponding sessions or agent groups are deleted, preventing resource leaks.

### 4. Community Hot Topics
Most active Issues/PRs with comments/reactions, analyze underlying needs.
- Looking at the data, most items have 0 comments and 0 reactions, indicating that these are maintained primarily by core developers (mainly `glifocat`) and reviewed internally or via automated guidelines (many are labeled `follows-guidelines` and `core-team`).
- The most prominent themes of active PRs (both open and closed) are:
  - **Iron Proxy & Gateway Integration**: PRs like #3964, #3966, #3965, and #3919 focus on streamlining how model endpoints (especially local ones over plain HTTP) are declared, auto-approved, and validated during setup.
  - **Container and Host Lifecycle Robustness**: PRs like #3918, #3962, #3956, and #3947 address ensuring containers are properly stopped, cleaned up, or prevented from starting when their context (agent group or session) is deleted, and ensuring update rollbacks/cutovers do not leave stale processes running.
  - **CI/CD and Supply Chain Security**: PR #3968 pins workflow actions and cosign, adding Dependabot to keep dependencies updated, reflecting a strong focus on security and reproducible builds.

### 5. Bugs & Stability
Bugs, crashes, regressions reported today, ranked by severity, note if fix PRs exist.
Let's look at the closed issues and bug PRs:
- **Issue #3888 [CLOSED] Iron Proxy setup fails on arm64 hosts**: High severity for users on arm64 architectures (like NVIDIA DGX Spark). The setup fails with `exec format error` because the Iron Control image is amd

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-09-30

---

### 1. **Today's Overview**  
The NullClaw project maintained minimal but steady development activity on 2026-09-30. Only one issue and one pull request were updated over the past 24 hours, indicating low but consistent engagement. No new releases were published during this period. The community appears to be exploring integrations, particularly around memory management enhancements, while recent code updates suggest ongoing maintenance and bug fixes. Overall, the project shows signs of stability with targeted improvements.

---

### 2. **Releases**  
No new releases were recorded for this reporting period. The latest known release remains untagged in the provided data.

---

### 3. **Project Progress**  
- **Pull Request #1014 ([CLOSED] v20260929)** by elwina was merged, introducing several incremental improvements:
  - Pinned web search to the configured provider to prevent Exa from rejecting duplicate `Content-Type` headers.
  - Stripped Markdown markers before generating official QQ replies.
  - Included a version bump to `v20260929`.
  
This PR represents routine maintenance focused on integration reliability and formatting consistency. It does not include breaking changes but improves internal handling of external API communication and output formatting. [View PR #1014](https://github.com/nullclaw/nullclaw/pull/1014)

---

### 4. **Community Hot Topics**  
There were no highly commented or reacted-upon issues or PRs reported today. However, the following item stands out due to strategic interest:

- **Issue #1015 [OPEN] Hosted MemCode Engine for NullClaw Memory Interface** – Submitted by Vivek Gupta (Founder & CEO of MemCode). This proposal suggests integrating a hosted memory engine into NullClaw’s existing swappable memory architecture. While it currently has zero comments or reactions, it represents an opportunity to enhance cross-device persistence without increasing local resource usage. [View Issue #1015](https://github.com/nullclaw/nullclaw/issues/1015)

This issue signals growing interest in scalable, cloud-backed memory systems within personal AI ecosystems.

---

### 5. **Bugs & Stability**  
No crash reports, regressions, or high-severity bugs were explicitly mentioned in today’s updates. The only notable change in behavior comes from PR #1014, which addresses header duplication errors when interfacing with Exa’s web search API. No known fix PRs are pending beyond what has already been merged.

---

### 6. **Feature Requests & Roadmap Signals**  
- **Hosted Memory Integration via MemCode:** Proposed in Issue #1015, this feature suggests adding support for remote memory engines as part of NullClaw's modular memory subsystem.
  
While not yet prioritized or discussed further by maintainers, such a feature aligns well with trends toward lightweight agents operating across multiple devices. If implemented, it would likely appear in a future milestone tied to improved memory scalability.

---

### 7. **User Feedback Summary**  
Today’s user feedback is limited, as most activity centered around backend refinements rather than end-user-facing interactions. That said, the submission of Issue #1015 by a third-party founder indicates potential enterprise or advanced user interest in leveraging NullClaw with externally hosted services for enhanced functionality.

No explicit complaints or dissatisfaction were noted in the available data.

---

### 8. **Backlog Watch**  
As of this digest, there are no stale issues or pull requests highlighted in the dataset provided. All current items have been addressed or are newly submitted and under review. Maintainers should monitor Issue #1015 for possible roadmap alignment regarding extensible memory backends.

--- 

*GitHub Links:*  
[NullClaw Repository](https://github.com/nullclaw/nullclaw) | [Issues](https://github.com/nullclaw/nullclaw/issues) | [Pull Requests](https://github.com/nullclaw/nullclaw/pulls)

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



# IronClaw Project Digest — 2026-09-30

## 1. Today's Overview
IronClaw is experiencing a highly active and healthy development cycle, marked by the successful transition of `v1.4.1-rc.2` to the stable release channel (`v1.4.1`) on September 29. The project shows strong momentum, attracting high-quality contributions from both core maintainers and new community developers (such as `changeroa` and `CjS77`). Overall project health is excellent, with a clear focus on closing critical operational loops (such as Google OAuth activation and CLI profile reporting) while laying the groundwork for advanced features like distributed edge computing and semantic tool selection.

## 2. Releases
*   **ironclaw-v1.4.1 (Released 2026-09-29):** This stable release promotes the tested candidate `1.4.1-rc.2` to production-ready status. 
    *   **Key Changes & Fixes:**
        *   **Google OAuth Web UI Activation:** Operators can now seamlessly activate Google extensions (Gmail, Google Calendar) directly through the Web UI when supplying their own OAuth client credentials, removing a major deployment blocker.
        *   **Wasmtime Security Update:** Bundled a critical security update for the Wasmtime runtime, ensuring sandboxed WASM tool execution remains hardened against upstream vulnerabilities.
    *   **Breaking Changes & Migration:** There are no reported breaking changes. Migration from `1.4.1-rc.2` is a standard lockfile and package version alignment to `1.4.1`. Changelogs have been updated accordingly.

## 3. Project Progress
The repository saw 1 merged release-promotion PR and 4 active feature/fix PRs updated today:
*   **Release Promotion (`#8120`):** Core contributor `henrypark133` successfully merged the promotion of the `1.4.1-rc.2` tip (`b28154f`) to stable, updating the root and public changelogs.
*   **WebUI UX Fix (`#8117`):** New contributor `changeroa` resolved a focus-loss bug where dismissing the command palette (Cmd/Ctrl+K) left focus on the `body` tag, preventing seamless typing back into input fields.
*   **CLI Diagnostic Improvement (`#8118`):** `changeroa` also submitted a fix ensuring commands like `ironclaw config path`, `ironclaw doctor`, and `ironclaw status` correctly resolve and report the effective boot profile when environment overrides are unset.
*   **Semantic Tool Selection (`#8119`):** New contributor `CjS77` advanced a large-scale feature implementation (marked XL, medium risk) to rank tools against user prompts using embeddings before the first model call, optimizing token usage and latency.
*   **Codebase Graph Refresh (`#7988`):** A low-risk automated bot PR to refresh the committed codebase-memory bootstrap snapshot.

## 4. Community Hot Topics
*   **Distributed Edge Worker Architecture (`#7889`):** This RFC has drawn developer interest, detailing a plan to extend the scheduler/orchestrator to support opt-in remote edge workers. The core need is to break the single-host bottleneck for parallel job scheduling, allowing operators to leverage multi-host, idle resource pools.
*   **Turn-0 Tool Selection & Embeddings (`#8113` / `#8119`):** This pairing represents the hottest development topic. The issue proposes ranking the authorized tool catalog against user messages before the first model call (using BM25F + embeddings) to bypass initial `tool_search` round trips. The underlying community need is efficiency: reducing first-token latency and context window waste.

## 5. Bugs & Stability
No new critical bug reports were opened in the last 24 hours, but today's PRs address several stability and usability issues:
*   **High Severity (Security & Access):** The **Wasmtime security update** and **Google OAuth activation fix** (resolved in `v1.4.1` via `#8120`) are the most critical stability updates, addressing potential sandbox vulnerabilities and extension onboarding failures.
*   **Medium/Low Severity (UX & Diagnostics):**
    *   **WebUI Focus Loss (`#8117`):** A minor UI bug where focus states broke after using the command palette. A fix PR is open and ready for review.
    *   **CLI Profile Resolution (`#8118`):** A diagnostic bug where CLI tools failed to display the correct active profile. The fix PR is open.

## 6. Feature Requests & Roadmap Signals
*   **Smart Tool Routing (`#8113`):** The push for embedding-based tool ranking indicates a roadmap shift toward context-aware tool retrieval. If the large PR (`#8119`) merges, we can expect smart tool selection to be a headline feature in the upcoming `v1.5.0` cycle.
*   **Edge Worker Scaling (`#7889`):** This remains a long-term architectural signal. It suggests the product roadmap includes multi-node orchestration and edge deployment capabilities, targeting enterprise and high-scale local environments.

## 7. User Feedback Summary
*   **Pain Points:** Users faced friction setting up Google integrations without manual config files (`fixed in 1.4.1`) and experienced CLI diagnostic confusion regarding profile precedence (`fixed in #8118`). WebUI keyboard navigation focus states also required cleanup (`#8117`).
*   **Use Cases:** Power users are demanding multi-host worker pools to distribute heavy parallel workloads (`#7889`), while enterprise users need smarter tool auto-discovery to manage massive tool catalogs without overhead (`#8113`).
*   **Satisfaction:** The influx of high-quality external pull requests (`#8117`, `#8118`, `#8119`) indicates high community satisfaction and a growing developer footprint, with contributors actively helping harden the codebase.

## 8. Backlog Watch
*   **RFC: Remote Edge Workers (`#7889`):** Opened on August 25, 2026, and updated recently on September 29. This is a major architectural RFC that needs active maintainer feedback, scoping, and approval to guide the core developers on the scheduler's next-phase design.
*   **Codebase Knowledge Graph Refresh (`#7988`):** Opened on August 29, 2026, by the automated `ironclaw-ci` bot. It has been sitting open for over a month and needs a core maintainer to review and merge it to keep the local AI codebase memory bootstrap snapshot up to date.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-09-30

## 1. Today's Overview

LobsterAI saw active code movement on 2026-09-29 with **13 pull requests closed/merged** and **zero open PRs**, indicating a healthy merge velocity. However, **no new release** was published, and **8 of the 10 recently updated issues remain open**, many tagged as stale. The day's work concentrated on Cowork/OpenClaw UX polish, Windows installer hardening, and gateway stability, while a growing backlog of Windows-specific runtime bugs and multi-agent edge cases is still waiting for fixes.

---

## 2. Releases

**No new releases** were published today.

---

## 3. Project Progress

All 13 PRs updated in the last 24 hours were closed/merged. Key advancements include:

- **Cowork / OpenClaw plan visibility**
  - [PR #2778](https://github.com/netease-youdao/LobsterAI/pull/2778) — Shows native OpenClaw `progress_card` plans above the composer.
  - [PR #2758](https://github.com/netease-youdao/LobsterAI/pull/2758) — Adds display and explicit refresh for persisted OpenClaw progress cards.
  - [PR #2777](https://github.com/netease-youdao/LobsterAI/pull/2777) — Collapses long-running turns to the latest five steps, reducing chat flooding from tool-heavy models.

- **Gateway reliability**
  - [PR #2707](https://github.com/netease-youdao/LobsterAI/pull/2707) & [PR #2783](https://github.com/netease-youdao/LobsterAI/pull/2783) — Fix gateway restart-budget logic so gateways that crash shortly after becoming healthy no longer restart forever.

- **Windows installer**
  - [PR #2782](https://github.com/netease-youdao/LobsterAI/pull/2782) — Localizes the dialog shown when a user-skill backup aborts an update and tells users how to move skills.
  - [PR #2706](https://github.com/netease-youdao/LobsterAI/pull/2706) — Builds Skills backup file records as `PSCustomObject`, fixing failures on Windows PowerShell 5.1.

- **Renderer / Artifacts / UX**
  - [PR #2781](https://github.com/netease-youdao/LobsterAI/pull/2781) — Keeps currency dollars (e.g., `$3/$15`) out of inline math rendering.
  - [PR #2780](https://github.com/netease-youdao/LobsterAI/pull/2780) — Opens markdown links inside matching artifact cards instead of external apps.
  - [PR #1682](https://github.com/netease-youdao/LobsterAI/pull/1682) — Adds a read-aloud button for AI replies in Cowork via Web Speech API.
  - [PR #1707](https://github.com/netease-youdao/LobsterAI/pull/1707) — Clears the home input box when switching agents.
  - [PR #1773](https://github.com/netease-youdao/LobsterAI/pull/1773) — Adds the missing `edit` i18n key for memory entries.
  - [PR #1683](https://github.com/netease-youdao/LobsterAI/pull/1683) — Validates `owner/repo` format before remote skill import.

---

## 4. Community Hot Topics

The most discussed items reveal strong interest in multi-agent isolation, installer reliability, and user control:

| Item | Comments | Topic | Underlying Need |
|------|----------|-------|-----------------|
| [Issue #2293](https://github.com/netease-youdao/LobsterAI/issues/2293) | 6 | USER.md overwritten across agents after restart | Independent per-agent memory/persona persistence |
| [Issue #2342](https://github.com/netease-youdao/LobsterAI/issues/2342) | 3 | Bottom-left ad cannot be permanently disabled | User control over promotional surfaces |
| [Issue #2395](https://github.com/netease-youdao/LobsterAI/issues/2395) | 2 | Update aborts because user skills cannot be backed up | Reliable Windows installer and skill migration |
| [Issue #2401](https://github.com/netease-youdao/LobsterAI/issues/2401) | 2 | Whether bundled PDF/DOCX/PPTX/XLSX skills are commercially usable | Clearer licensing for default/official skills |

Notably, #2293 was closed as stale despite 6 comments, suggesting the bug may have been triaged rather than fully resolved.

---

## 5. Bugs & Stability

Several serious issues were active today, with a cluster around the OpenClaw `exec` tool on Windows:

1. **🔴 Critical — Data corruption**
   - [Issue #2393](https://github.com/netease-youdao/LobsterAI/issues/2393): LobsterAI accelerator replaces the byte pair `\f` with a form-feed character, silently corrupting files containing tokens like `\firecrawl` or `\foo`. **No fix PR linked.**

2. **🔴 Critical — `exec` tool shell wrapper**
   - [Issue #2396](https://github.com/netease-youdao/LobsterAI/issues/2396): Default shell wrapper is Windows PowerShell 5.1, causing Linux commands and special-character inline scripts to fail.
   - [Issue #2390](https://github.com/netease-youdao/LobsterAI/issues/2390): Same area — hardcoded `powershell.exe` and encoding problems with Chinese usernames. **No fix PR linked.**

3. **🟠 High — Multi-agent feature regression**
   - [Issue #2779](https://github.com/netease-youdao/LobsterAI/issues/2779): Dream Diary panel stays empty under explicit multi-agent ownership; upstream OpenClaw runtime already fixed the `doctor.memory.*` ambient-owner fallback, but LobsterAI has not yet absorbed it.

4. **🟠 High — Installation blocked**
   - [Issue #2395](https://github.com/netease-youdao/LobsterAI/issues/2395): Update stops because user skills cannot be backed up. Partially addressed by installer PRs #2782 and #2706, but the underlying failure path still exists.

5. **🟡 Medium — Closed today**
   - [Issue #2293](https://github.com/netease-youdao/LobsterAI/issues/2293): Multi-agent USER.md overwrite bug closed as stale.

---

## 6. Feature Requests & Roadmap Signals

User-requested capabilities surfacing today:

- **Skill rename** — [Issue #2391](https://github.com/netease-youdao/LobsterAI/issues/2391)
- **Scheduled task agent/skill selection** — [Issue #2392](https://github.com/netease-youdao/LobsterAI/issues/2392)
- **Per-agent memory isolation** — implied by #2293 and #2779
- **Ad disable toggle** — implied by #2342
- **PowerShell 7 / configurable shell for `exec`** — implied by #2390 and #2396

**Likely near-term roadmap signals:** Given the heavy Cowork/OpenClaw polish merged today, the next release may continue improving plan visibility and long-turn UX. Skill-management improvements (rename, scheduled-task targeting) and multi-agent ownership fixes are strong candidates for upcoming sprints.

---

## 7. User Feedback Summary

**Real pain points:**

- **Windows experience is fragile:** install failures, PowerShell 5.1 defaults, Chinese-username path encoding issues, and data corruption all cluster on Windows.
- **Multi-agent mode is inconsistent:** user memory files are shared/overwritten and the Dream Diary feature breaks under explicit ownership.
- **Skill ecosystem lacks controls:** users cannot rename skills, schedule tasks cannot target specific skills/agents, and commercial licensing is unclear.
- **Promotional UX is intrusive:** users want a permanent way to disable bottom-left ads.
- **Runtime transparency:** users are debugging OpenClaw runtime versions themselves, indicating opaque release integration.

**Satisfaction signals:** The team is responsive on UX polish (TTS, progress cards, input clearing) and installer edge cases, but deep runtime/data-integrity issues remain open and stale.

---

## 8. Backlog Watch

Long-unanswered or high-impact items still needing maintainer attention:

- [Issue #2393](https://github.com/netease-youdao/LobsterAI/issues/2393) — Critical data-corruption bug in accelerator; no fix in sight.
- [Issue #2396](https://github.com/netease-youdao/LobsterAI/issues/2396) & [Issue #2390](https://github.com/netease-youdao/LobsterAI/issues/2390) — `exec` shell wrapper defaults breaking cross-platform commands and Chinese paths.
- [Issue #2395](https://github.com/netease-youdao/LobsterAI/issues/2395) — Windows installer still blocks updates for some users.
- [Issue #2779](https://github.com/netease-youdao/LobsterAI/issues/2779) — Upstream fix available; needs runtime bump/integration.
- [Issue #2391](https://github.com/netease-youdao/LobsterAI/issues/2391) & [Issue #2392](https://github.com/netease-youdao/LobsterAI/issues/2392) — Basic skill/agent management gaps.
- [Issue #2401](https://github.com/netease-youdao/LobsterAI/issues/2401) — Commercial licensing question for default skills unanswered.

**Project health takeaway:** Merge velocity and UI/UX iteration are strong, but the backlog of stale, Windows-specific, and data-integrity issues is becoming a liability. Addressing the critical `exec`/accelerator bugs and absorbing the upstream OpenClaw multi-agent fix would materially improve user trust.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-09-30

## 1. Today’s Overview
Moltis shows very low activity in the last 24 hours: **1 issue updated**, **0 pull requests updated**, and **0 new releases**. The only visible activity is open enhancement **Issue #1289: “[Feature]: Goal mode or ralph loop”** by `abda11ah`, with no comments or reactions. There were no merged/closed PRs, so no code integration or release progress occurred in this window. Overall project health appears **quiet and stable**, but with minimal development throughput; maintainer triage on the new enhancement would help clarify direction.

## 2. Releases
No new releases in the reporting window. No release changes, breaking changes, or migration notes to report.

## 3. Project Progress
- **Merged/closed PRs today:** None.
- **Features advanced or fixed:** None visible from PR data.
- **Open PRs:** None.
- **Net effect:** No code movement or merged changes were recorded for 2026-09-30.

## 4. Community Hot Topics
Only one item was updated, so it is the de facto hot topic despite low engagement:

- **Issue #1289 — [OPEN] [enhancement] [Feature]: Goal mode or ralph loop**
  - Author: `abda11ah`
  - Created/Updated: 2026-09-29
  - Comments: 0 | Reactions: 0
  - Link: https://github.com/moltis-org/moltis/issues/1289

**Underlying need:** The title suggests demand for either a persistent **goal mode** or a **“ralph loop”** style iterative agent behavior. This likely points to user interest in more autonomous, goal-directed execution where an agent repeatedly works toward an objective. The issue body is truncated in the provided data, so exact requirements remain unclear. Maintainer clarification would be needed to assess scope.

## 5. Bugs & Stability
- **Bugs/crashes/regressions reported today:** None.
- **Fix PRs:** None.
- **Severity ranking:** Not applicable — no stability issues were reported or updated in the last 24 hours.

## 6. Feature Requests & Roadmap Signals
- **New feature request:** Issue #1289 requests “Goal mode or ralph loop.”
- **Roadmap prediction:** With only one enhancement issue, no comments, no linked PRs, and no release activity, there is **insufficient signal** to predict inclusion in the next version. If maintainers accept the concept, it could become a roadmap item around agent autonomy, persistent goals, or iterative execution loops. Without maintainer triage or an implementation PR, it is unlikely to land immediately.

## 7. User Feedback Summary
- **Pain point / request:** At least one user wants goal-oriented or looping agent behavior.
- **Use case signal:** Users may need agents that can hold a goal across steps or run repeated autonomous iterations until completion.
- **Satisfaction/dissatisfaction:** No sentiment data beyond the enhancement request itself. Zero comments and zero reactions indicate low community engagement so far, not necessarily low interest.
- **Bug feedback:** None today.

## 8. Backlog Watch
- **Long-unanswered important issues/PRs:** None identified in the provided data.
- **New item needing attention:** **Issue #1289** is new, open, and has no maintainer response. It is not a backlog escalation yet, but it would benefit from initial triage, labeling, and clarification of the requested “goal mode” or “ralph loop” behavior.
  - Link: https://github.com/moltis-org/moltis/issues/1289

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-09-30

> Source: GitHub activity for `agentscope-ai/CoPaw` (issue/PR URLs reference the `agentscope-ai/QwenPaw` repository namespace as provided in the dataset).

---

## 1. Today's Overview

CoPaw shows **very high development velocity**: 36 pull requests were updated in the last 24 hours (16 still open, 20 merged or closed) against 11 issues updated (7 open, 4 closed). No new releases were published, so the project is in an active *stabilization + feature-integration* window rather than a shipping window. The day's work skews heavily toward **reliability hardening** — timeout handling, terminal portability, Tauri desktop lifecycle, Telegram rendering, and provider fallback logic — plus a notable cluster of **cross-platform and packaging fixes**. Community discussion is thinner than the code activity: the most-commented issue has only 3 comments, suggesting a maintainer/contributor-driven day with limited end-user debate. Overall health reads as **strong and contributor-heavy**, with a mild risk signal from several recurring subsystems (task tracking, Telegram channel, desktop shell) generating repeated bug reports.

---

## 2. Releases

**None.** No new releases in the last 24 hours; no changelog, breaking changes, or migration notes to report.

---

## 3. Project Progress

**Merged / closed PRs today (20 total; notable items):**

| PR | Scope | Impact |
|---|---|---|
| [#8026](https://github.com/agentscope-ai/QwenPaw/pull/8026) | Cross-platform paths, sandbox cleanup isolation, Windows terminal interrupts | Broad portability fix — Windows drive/UNC paths, per-metadata sandbox cleanup |
| [#8025](https://github.com/agentscope-ai/QwenPaw/pull/8025) | Desktop NSIS solid compression disabled | Installer/packaging reliability |
| [#8024](https://github.com/agentscope-ai/QwenPaw/pull/8024) | Reject whitespace-only Qoder timezones | Fixes Windows `PermissionError` from `ZoneInfo` |
| [#8023](https://github.com/agentscope-ai/QwenPaw/pull/8023) | Replace `select` with `poll` for PTY readiness | Fixes terminal failure above `FD_SETSIZE` (1024) |
| [#7773](https://github.com/agentscope-ai/QwenPaw/pull/7773) | Telegram `/start` platform handshake consumed | Enables bot-initiated private messages |
| [#7765](https://github.com/agentscope-ai/QwenPaw/pull/7765) | Telegram mention gate honors `@BotName` targeting | Fixes multi-bot group mis-triggering |
| [#7718](https://github.com/agentscope-ai/QwenPaw/pull/7718) | Telegram approval cards rendered via HTML `parse_mode` | Fixes raw `**`/backticks shown to users |

**Closed issues today:** [#7946](https://github.com/agentscope-ai/QwenPaw/issues/7946) (QQ bot duplicate event replay), [#6252](https://github.com/agentscope-ai/QwenPaw/issues/6252) (Linux desktop zoom shortcuts), [#7999](https://github.com/agentscope-ai/QwenPaw/issues/7999) (desktop font-size request), [#8030](https://github.com/agentscope-ai/QwenPaw/issues/8030) (invalid/spam).

**Observation:** PR [#8032](https://github.com/agentscope-ai/QwenPaw/pull/8032) (terminal high POSIX descriptors, open) is functionally the same fix as the just-closed [#8023](https://github.com/agentscope-ai/QwenPaw/pull/8023) — a **duplicate/resubmission pattern** worth watching for process friction.

---

## 4. Community Hot Topics

Ranked by comment count (PR comment counts were not provided in the dataset):

1. **[#7991](https://github.com/agentscope-ai/QwenPaw/issues/7991)** — *TaskTracker zombie entries inflate `running_task_count`* — 3 comments, open since 2026-09-26.
   → Underlying need: **observability correctness**. The dashboard and `/api/chats` disagree, eroding trust in the control plane. Related fix PR: [#8007](https://github.com/agentscope-ai/QwenPaw/pull/8007).

2. **[#2359](https://github.com/agentscope-ai/QwenPaw/issues/2359)** — *HEARTBEAT_OK / CRON_OK to control model message sending* — 3 comments, open since **2026-03-26** (≈6 months).
   → Underlying need: **proactive-agent noise control**. Users want heartbeat/cron runs to stay silent unless the model explicitly decides to speak, mirroring OpenClaw semantics.

3. **[#7946](https://github.com/agentscope-ai/QwenPaw/issues/7946)** — *QQ gateway replays events on session resume* — 2 comments, now closed.
   → Underlying need: **idempotency for channel reconnects** in long-connection (WebSocket) bot deployments.

4. **[#6252](https://github.com/agentscope-ai/QwenPaw/issues/6252)** — *Tauri Linux zoom shortcuts broken* — 2 comments, now closed.
   → Underlying need: **desktop accessibility / display scaling**, recurring theme.

---

## 5. Bugs & Stability

Ranked by severity (all reported/active today unless noted):

| Severity | Issue | Symptom | Fix PR? |
|---|---|---|---|
| **Critical** | [#8022](https://github.com/agentscope-ai/QwenPaw/issues/8022) | `send_file_to_user` file/image blocks + empty assistant messages poison session context → **persistent HTTP 400 across all models**; no content downgrade by model capability | No direct PR found |
| **High** | [#8035](https://github.com/agentscope-ai/QwenPaw/issues/8035) | Transcription settings page cannot set `transcription_model`; switching providers **silently breaks transcription** | No |
| **High** | [#8013](https://github.com/agentscope-ai/QwenPaw/issues/8013) | Large skill pool download (12,994 files / 80.1 MB) always fails at 30 s; frontend hard `AbortController` timeout + backend still copying | Yes — [#8027](https://github.com/agentscope-ai/QwenPaw/pull/8027) offloads to worker thread |
| **Medium** | [#7991](https://github.com/agentscope-ai/QwenPaw/issues/7991) | Zombie task entries inflate `running_task_count`; counters disagree with API | Yes — [#8007](https://github.com/agentscope-ai/QwenPaw/pull/8007) |
| **Medium** | [#8011](https://github.com/agentscope-ai/QwenPaw/issues/8011) | Telegram HTML formatter mishandles `c++`/`objective-c` info strings, `~~~` fences, nested fences | Yes — [#8012](https://github.com/agentscope-ai/QwenPaw/pull/8012) |
| **Medium** | [#7946](https://github.com/agentscope-ai/QwenPaw/issues/7946) *(closed)* | QQ bot replays events after reconnect → duplicate processing | Closed |
| **Low** | [#6252](https://github.com/agentscope-ai/QwenPaw/issues/6252) *(closed)* | Linux Tauri zoom shortcuts non-functional | Closed |

**Additional hardening PRs opened today (no linked issue):** [#8033](https://github.com/agentscope-ai/QwenPaw/pull/8033) (Windows second-instance kills live backend), [#8034](https://github.com/agentscope-ai/QwenPaw/pull/8034) (unbounded inline media per request), [#8028](https://github.com/agentscope-ai/QwenPaw/pull/8028) (Office COM automation not flagged by security guard), [#8032](https://github.com/agentscope-ai/QwenPaw/pull/8032) (terminal high FDs).

**Stability read:** Bug inflow is concentrated in **session/context integrity (#8022)**, **desktop shell lifecycle**, and **channel adapters (Telegram/QQ)**. Notably, #8022 was *filed by a CoPaw agent itself*, indicating the self-hosting/agentic deployment path is real and surfacing genuine production failures.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Signal strength |
|---|---|---|
| **Configurable / self-hosted Skill & Plugin marketplace sources** (intranet / air-gapped) | [#8015](https://github.com/agentscope-ai/QwenPaw/issues/8015) | **Strong** — enterprise deployment blocker; low implementation ambiguity |
| **HEARTBEAT_OK / CRON_OK silence control for heartbeat & cron** | [#2359](https://github.com/agentscope-ai/QwenPaw/issues/2359) | **Strong** — long-lived, references an existing competitor pattern |
| **Model fallback cooldown** | [#8020](https://github.com/agentscope-ai/QwenPaw/pull/8020) (PR already open) | Already in flight |
| **Durable paginated transcript history (per-session SQLite)** | [#7931](https://github.com/agentscope-ai/QwenPaw/pull/7931) | Large feature, under review since 2026-09-22 |
| **Embedded community feed + inbox integration** | [#7903](https://github.com/agentscope-ai/QwenPaw/pull/7903) (WIP) | Strategic, still WIP |
| Desktop UI font-size adjustment | [#7999](https://github.com/agentscope-ai/QwenPaw/issues/7999) | Closed — outcome unclear (implemented, dup, or deferred) |

**Prediction:** If any of these land in the next minor version, **#8015 (self-hosted marketplace)** and **#2359 (heartbeat/cron silence)** are the most likely candidates — both are low-risk, high-demand, and unblock enterprise and proactive-agent use cases respectively. **#7931 (durable transcripts)** is the largest architectural item and the most likely to slip.

---

## 7. User Feedback Summary

**Pain points expressed today:**
- **Context corruption is the top trust-killer** — #8022 users see every model reject requests after a `send_file_to_user` turn, with no graceful degradation path.
- **Silent configuration failures** — #8035: the settings UI appears to accept a provider change while transcription quietly stops working.
- **Enterprise / air-gapped deployment friction** — #8015 users must patch CoPaw to point at internal mirrors.
- **Large-asset workflows break** — #8013: real 80 MB / 13k-file skills are unusable through the UI.
- **Accessibility & display scaling** — #6252 and #7999 show sustained demand for adjustable UI scale on desktop (low-vision, high-DPI, projection).
- **Channel integration quality** — three separate Telegram fixes merged today (#7773, #7765, #7718) plus #8011/#8012 indicate the Telegram path was immature and is now being actively hardened.

**Satisfaction signal:** Users are deeply engaged — filing precise, log-backed reports (several in Chinese, one explicitly AI-authored and user-verified) and even submitting PRs for the bugs they hit. **Dissatisfaction is concentrated in silent failures and platform-specific breakage**, not in core capability.

---

## 8. Backlog Watch

Items needing maintainer attention:

| Item | Age | Why it matters |
|---|---|---|
| [#2359](https://github.com/agentscope-ai/QwenPaw/issues/2359) — HEARTBEAT_OK / CRON_OK | **~6 months** (2026-03-26), only 3 comments | Longest-standing open enhancement; directly shapes proactive-agent UX and likely requires a maintainer decision on protocol semantics |
| [#7903](https://github.com/agentscope-ai/QwenPaw/pull/7903) — Community & inbox integration | 10 days, still `[wip]` | Large surface area (feed, comments, PKCE auth, message sync); needs review bandwidth or scoping |
| [#7931](https://github.com/agentscope-ai/QwenPaw/pull/7931) — Durable paginated transcript history | 8 days | Architectural change to session storage; long review cycles risk rebase churn |
| [#7991](https://github.com/agentscope-ai/QwenPaw/issues/7991) — TaskTracker counter divergence | 4 days, fix PR #8007 marked `ready-for-human-review` | Needs a reviewer to unblock; correctness bug in the task control plane |
| [#8001](https://github.com/agentscope-ai/QwenPaw/pull/8001) — Recoverable timeout tool results | 3 days | Behavioral change to timeout semantics (now returned as *success*) — warrants explicit maintainer sign-off |
| [#8032](https://github.com/agentscope-ai/QwenPaw/pull/8032) vs closed [#8023](https://github.com/agentscope-ai/QwenPaw/pull/8023) | Same day | Duplicate PRs for the same terminal fix — process cleanup needed to avoid merge confusion |

---

**Bottom line:** CoPaw is in a high-throughput hardening phase with strong contributor engagement and no release pressure today. The main risks are **context-integrity bug #8022 (unfixed)** and a **long-tail of platform-specific desktop/channel bugs**; the main opportunity is converting the already-open PR queue (#8020, #8027, #7931, #8007, #8012) into a clean minor release.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-09-30

## 1. Today's Overview

ZeroClaw remains highly active but merge-light: 27 issues and 50 PRs were updated in the last 24h, with 23 issues still open/active and 48 PRs open, against 0 new releases. Four issues closed and two PRs were merged/closed, indicating triage and review activity is outpacing integration throughput. Security and identity-access work dominates the urgent queue: multiple S0/S1 bugs concern principal-scoped memory, revoked-admin ownership, and SOP tool authorization. Forward progress is visible in config/schema V4, provider/model transport, ZeroCode UX, OIDC closeout, and plugin lifecycle work. Overall health: strong maintainer engagement and accepted-workflow signals, but a large open PR backlog and several high-risk follow-ups need closure.

## 2. Releases

None. No new releases in the last 24h.

## 3. Project Progress

Closed issues updated today:
- [Issue #10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068) — Interactive agent session context cap at 32k despite `max_context_tokens = 131072`; closed. The visible closed PR [PR #11260](https://github.com/zeroclaw-labs/zeroclaw/pull/11260) directly addresses this by stopping explicit context budgets from being clamped to the 32k fallback stub.
- [Issue #11197](https://github.com/zeroclaw-labs/zeroclaw/issues/11197) — S0 security bug: session resume restores forwarded environment after admin revocation; closed.
- [Issue #10909](https://github.com/zeroclaw-labs/zeroclaw/issues/10909) — ZeroCode composer standard text editing; closed.
- [Issue #10051](https://github.com/zeroclaw-labs/zeroclaw/issues/10051) — Add selected transcript text to ZeroCode composer; closed.

Closed/merged PRs:
- [PR #11260](https://github.com/zeroclaw-labs/zeroclaw/pull/11260) — `fix(config): stop clamping explicit context budgets to the 32k fallback stub`. Two PRs were merged/closed in the last 24h; this is the only one visible in the provided top-20 sample.

Progress signals in updated items:
- [Issue #8289](https://github.com/zeroclaw-labs/zeroclaw/issues/8289) — OIDC milestone tracker reports the core OIDC stack is merged and this is now a close-out tracker; #11082 consolidated enrollment, gateway, private-memory, and migration slices.
- [Issue #8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832) — Plugin-owned Kanban board: #11081 has delivered generic per-instance durable state; remaining work is board projection and plugin behavior.
- [Issue #10761](https://github.com/zeroclaw-labs/zeroclaw/issues/10761) — Plugin TLS hardening: #11081 merged host-mediated sockets, WebSocket, and TLS transport prerequisites.
- [Issue #11126](https://github.com/zeroclaw-labs/zeroclaw/issues/11126) — Revoked-admin ownership bypass remains open; #10412 is a partial implementation only.
- [PR #11218](https://github.com/zeroclaw-labs/zeroclaw/pull/11218) — Migrate retired keys at schema V4 and warn on missing `schema_version`; builds on #8754.
- [PR #11176](https://github.com/zeroclaw-labs/zeroclaw/pull/11176) — RPC cron, memory, skills, personality, and quickstart parity with HTTP routes; P4 of the v0.9.0 core-parity lane.

## 4. Community Hot Topics

Issue comment ranking (PR comment/reaction counts were unavailable in the provided snapshot):

- [Issue #8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832) — 10 comments. Plugin-owned Kanban board for agent work. Underlying need: deeper plugin extensibility, durable per-instance state, and agent work visualization.
- [Issue #10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068) — 6 comments. Context capped at 32k despite larger configured budget. Underlying need: configuration must be honored across interactive sessions.
- [Issue #6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105) — 5 comments. Agent lacks context of the cron job it runs. Underlying need: scheduled actions should preserve conversation/context continuity.
- [Issue #11053](https://github.com/zeroclaw-labs/zeroclaw/issues/11053) — 4 comments. RFC: knowledge graph as first-class agent memory layer. Underlying need: memory should be automatic and agent-independent, not tool-gated.
- [Issue #8289](https://github.com/zeroclaw-labs/zeroclaw/issues/8289) — 4 comments. OIDC milestone tracker. Underlying need: canonical principals and inbound authentication closeout.
- [Issue #11197](https://github.com/zeroclaw-labs/zeroclaw/issues/11197), [Issue #11198](https://github.com/zeroclaw-labs/zeroclaw/issues/11198), [Issue #10909](https://github.com/zeroclaw-labs/zeroclaw/issues/10909), [Issue #7824](https://github.com/zeroclaw-labs/zeroclaw/issues/7824) — 3 comments each. Themes: security principal scoping, ZeroCode editing UX, and WeCom proactive messaging/media.

Notable updated PRs:
- [PR #8754](https://github.com/zeroclaw-labs/zeroclaw/pull/8754) — Schema V4 breaking cut of skills, inert tunables, and summary model cruft.
- [PR #9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) — Multiple models per provider profile.
- [PR #10687](https://github.com/zeroclaw-labs/zeroclaw/pull/10687) — Custom OpenAI-compatible endpoints default to native tool calling.
- [PR #9248](https://github.com/zeroclaw-labs/zeroclaw/pull/9248) — Eval append-only run-history receipts.
- [PR #11260](https://github.com/zeroclaw-labs/zeroclaw/pull/11260) — Closed context-budget clamp fix.

## 5. Bugs & Stability

Ranked by severity:

S0 — data loss / security risk:
- [Issue #11198](https://github.com/zeroclaw-labs/zeroclaw/issues/11198) — OPEN. Delegated memory tools lose principal scope; child sessions can reach the wrong memory plane. No direct fix PR visible.
- [Issue #11239](https://github.com/zeroclaw-labs/zeroclaw/issues/11239) — OPEN. Owned sessions reach the shared memory plane through `spawn_subagent` and `execute_pipeline`. No direct fix PR visible.
- [Issue #11197](https://github.com/zeroclaw-labs/zeroclaw/issues/11197) — CLOSED. Session resume restored forwarded environment after admin revocation.
- [Issue #11123](https://github.com/zeroclaw-labs/zeroclaw/issues/11123) — OPEN. SOP execution accepts wildcard tool selectors without `tools:execute`. No direct fix PR visible.

S1 — workflow blocked:
- [Issue #11237](https://github.com/zeroclaw-labs/zeroclaw/issues/11237) — OPEN. Config editor cannot write declarative cron schedule. No direct fix PR visible.
- [Issue #11126](https://github.com/zeroclaw-labs/zeroclaw/issues/11126) — OPEN. Queued session operations retain revoked administrator ownership bypass; #10412 is partial only.

S2 — degraded behavior:
- [Issue #11233](https://github.com/zeroclaw-labs/zeroclaw/issues/11233) — OPEN. Validation results are written to reports without running checks or with unmeasured computed values.
- [Issue #11215](https://github.com/zeroclaw-labs/zeroclaw/issues/11215) — OPEN. Tool calling fails on OpenCode Go because `role: "tool"` messages include an unsupported `name` field.
- [Issue #11257](https://github.com/zeroclaw-labs/zeroclaw/issues/11257) — OPEN. WhatsApp Web drops captions for inbound images, videos, and documents.
- [Issue #10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068) — CLOSED. Interactive session capped at 32k tokens; fix visible in [PR #11260](https://github.com/zeroclaw-labs/zeroclaw/pull/11260).
- [Issue #6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105) — OPEN, in progress. Agent does not have context of the cron job it runs.
- [Issue #11009](https://github.com/zeroclaw-labs/zeroclaw/issues/11009) — OPEN. Agent alias rename does not cascade permission-profile selectors.

S3 — minor:
- [Issue #11256](https://github.com/zeroclaw-labs/zeroclaw/issues/11256) — OPEN. `initial_prompt` is documented but never sent to Groq or OpenAI transcription.

Other stability concern:
- [Issue #11229](https://github.com/zeroclaw-labs/zeroclaw/issues/11229) — OPEN. Session ownership migration may recreate deleted session metadata.

## 6. Feature Requests & Roadmap Signals

Likely near-term roadmap items, based on accepted/in-progress status and active PRs:
- Schema V4 breaking cut: [Issue #8310](https://github.com/zeroclaw-labs/zeroclaw/issues/8310), [PR #8754](https://github.com/zeroclaw-labs/zeroclaw/pull/8754), [PR #11218](https://github.com/zeroclaw-labs/zeroclaw/pull/11218).
- Multi-model provider profiles: [PR #9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809).
- ZeroCode UX: agent deletion/bulk cleanup [Issue #10244](https://github.com/zeroclaw-labs/zeroclaw/issues/10244), effort/display controls [PR #10636](https://github.com/zeroclaw-labs/zeroclaw/pull/10636), closed composer improvements [Issue #10909](https://github.com/zeroclaw-labs/zeroclaw/issues/10909), [Issue #10051](https://github.com/zeroclaw-labs/zeroclaw/issues/10051).
- Provider transport modernization: [PR #10611](https://github.com/zeroclaw-labs/zeroclaw/pull/10611), [PR #10687](https://github.com/zeroclaw-labs/zeroclaw/pull/10687).
- RPC/HTTP parity: [PR #11176](https://github.com/zeroclaw-labs/zeroclaw/pull/11176).
- OIDC closeout: [Issue #8289](https://github.com/zeroclaw-labs/zeroclaw/issues/8289).
- Plugin lifecycle: verified update with rollback [Issue #10995](https://github.com/zeroclaw-labs/zeroclaw/issues/10995), plugin-owned Kanban [Issue #8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832), TLS hardening [Issue #10761](https://github.com/zeroclaw-labs/zeroclaw/issues/10761).

RFC-stage signals, likely later than next patch/minor:
- Knowledge graph as first-class memory: [Issue #11053](https://github.com/zeroclaw-labs/zeroclaw/issues/11053).
- Knowledge corpus / RAG: [Issue #11235](https://github.com/zeroclaw-labs/zeroclaw/issues/11235).
- A2A protocol crate: [Issue #11254](https://github.com/zeroclaw-labs/zeroclaw/issues/11254).

Channel feature requests:
- WeCom proactive messaging/media: [Issue #7824](https://github.com/zeroclaw-labs/zeroclaw/issues/7824).
- Save inbound WhatsApp Web images like Telegram: [Issue #11255](https://github.com/zeroclaw-labs/zeroclaw/issues/11255).

## 7. User Feedback Summary

Real user pain points:
- Context configuration is not respected: [Issue #10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068).
- Scheduled agent runs lack context of their own cron messages: [Issue #6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105).
- Security/principal-scope leaks in memory and delegated tools: [Issue #11198](https://github.com/zeroclaw-labs/zeroclaw/issues/11198), [Issue #11239](https://github.com/zeroclaw-labs/zeroclaw/issues/11239).
- Admin revocation and session ownership bypasses: [Issue #11197](https://github.com/zeroclaw-labs/zeroclaw/issues/11197), [Issue #11126](https://github.com/zeroclaw-labs/zeroclaw/issues/11126).
- Config authoring blockers: [Issue #11237](https://github.com/zeroclaw-labs/zeroclaw/issues/11237).
- Provider compatibility failures: [Issue #11215](https://github.com/zeroclaw-labs/zeroclaw/issues/11215).
- WhatsApp/WeCom channel gaps: [Issue #11257](https://github.com/zeroclaw-labs/zeroclaw/issues/11257), [Issue #7824](https://github.com/zeroclaw-labs/zeroclaw/issues/7824), [Issue #11255](https://github.com/zeroclaw-labs/zeroclaw/issues/11255).
- Transcription config not honored: [Issue #11256](https://github.com/zeroclaw-labs/zeroclaw/issues/11256).
- Missing plugin update/rollback contract: [Issue #10995](https://github.com/zeroclaw-labs/zeroclaw/issues/10995).

Satisfaction signals:
- Many issues are marked `status:accepted`, `status:no-stale`, or `in-progress`, indicating maintainers are engaging rather than ignoring.
- The context-cap bug was closed with a targeted fix PR.
- OIDC work is in close-out, suggesting a major security/auth investment is nearing completion.

Dissatisfaction signals:
- Multiple S0 security issues remain open or have only partial fixes.
- The cron-context bug has been open since April 2026.
- The context-cap bug was open since August 2026 before closing.
- PR backlog is large: 48 open PRs, with several marked `needs-author-action`, `blocked`, or `stale-candidate`.

## 8. Backlog Watch

Long-unanswered or high-importance items needing maintainer attention:
- [Issue #6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105) — Created 2026-04-25. Cron job context bug; open, in-progress, high risk.
- [Issue #7824](https://github.com/zeroclaw-labs/zeroclaw/issues/7824) — Created 2026-06-17. WeCom proactive messaging/media; icebox.
- [Issue #8289](https://github.com/zeroclaw-labs/zeroclaw/issues/8289) — Created 2026-06-24. OIDC milestone tracker; close-out needed.
- [Issue #8310](https://github.com/zeroclaw-labs/zeroclaw/issues/8310) — Created 2026-06-25. Schema V4 breaking cut; high risk.
- [PR #8754](https://github.com/zeroclaw-labs/zeroclaw/pull/8754) — Created 2026-07-06. Schema V4 cut; `needs-author-action`.
- [Issue #8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832) — Created 2026-07-08. Plugin-owned Kanban; high risk, accepted.
- [PR #9229](https://github.com/zeroclaw-labs/zeroclaw/pull/9229) — Created 2026-07-21. Interactive Ctrl+C state-aware handling; blocked.
- [PR #9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320) — Created 2026-07-23. Cron wall-clock timeout and lock release; stale-candidate, needs author action.
- [PR #9326](https://github.com/zeroclaw-labs/zeroclaw/pull/9326) — Created 2026-07-24. Signal Note to Self sync; blocked, parking-lot.
- [PR #9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) — Created 2026-08-07. Multiple models per provider profile; needs author action.
- [Issue #11126](https://github.com/zeroclaw-labs/zeroclaw/issues/11126) — Open p1 security bypass; only partial fix #10412.
- [Issue #11198](https://github.com/zeroclaw-labs/zeroclaw/issues/11198) and [Issue #11239](https://github.com/zeroclaw-labs/zeroclaw/issues/11239) — Open S0 principal-scope memory bugs; no visible fix PRs.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*