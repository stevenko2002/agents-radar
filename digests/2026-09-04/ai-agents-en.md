# OpenClaw Ecosystem Digest 2026-09-04

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-09-03 22:15 UTC

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



# OpenClaw Project Digest — 2026-09-04

## 1. Today's Overview

OpenClaw is experiencing **very high development velocity**, with 500 issues and 500 PRs touched in the last 24 hours. The v2026.9.1 release shipped today with a major UX feature (Mermaid diagram rendering), while the issue tracker shows persistent pressure around SQLite reliability, compaction correctness, memory-core stability, and process lifecycle management. The project is in an active stabilization phase following the v2026.8.x series, with numerous regressions from that release still generating high-engagement bug reports.

## 2. Releases

### v2026.9.1 (shipped 2026-09-04)

**Highlight:** Mermaid diagram blocks now render as visual diagrams in the Control UI and native macOS/iOS/Android apps, with enlarge previews and mobile retry-on-failure behavior (#134913, #135746, #135470, #135342).

**Migration / breaking changes:** None reported for this patch release. Users on v2026.8.x should upgrade directly.

## 3. Project Progress

**Closed/Merged today (selected):**

- **#135970** — `codex` plugin missing `node_modules` in dist/extensions; resolved with install guidance (#135970, closed 2026-09-03)
- **#134307** — OAuth MCP servers absent from tool catalog on `claude-cli` runtime turns; fixed (#134307, closed 2026-09-03)
- **#134938** — `doctor --fix` deadlocked on legacy exec-approvals gate during 2026.8.1 upgrade; resolved (#134938, closed 2026-09-03)
- **#125344** — Memory-core embedding workers and Codex app-servers leaked with no idle TTL; resolved (#125344, closed 2026-09-03)
- **#124284** — Subagent spawn failure with vLLM + thinking mode causing malformed XML tool calls; resolved (#124284, closed 2026-09-03)

**Notable open PRs advancing today:**

- **#137381** — Fixes `sessions_yield` making long transcript history temporarily unavailable during SQLite replacement (#137381)
- **#137456** — Prevents hosted Gateway lifecycle crashes and self-waits (#137456)
- **#136533** — Addresses heartbeat sessions ignoring active transcript byte cap — fixes #136452 (#136533)
- **#137599** — Fixes periodic health refresh blocking the event loop on large agent rosters (632 entries stalling for 45–57s) (#137599)
- **#137543** — Bounds SQLite online backup so it cannot hang forever (#137543)
- **#137120** — Keeps OpenAI model discovery tied to the configured auth profile (#137120)

## 4. Community Hot Topics

| Issue | Comments | Severity | Summary |
|---|---|---|---|
| [#125626](https://github.com/openclaw/openclaw/issues/125626) — 2026.8.1 beta feedback | 24 | P2 | Broad beta feedback thread; most-commented open issue |
| [#126360](https://github.com/openclaw/openclaw/issues/126360) — AgentSelectionRequiredError floods logs | 12 | P1 | Multi-agent explicit ownership lacks `agentId` target across logbook, Control UI RPCs, and system-agent turns |
| [#132762](https://github.com/openclaw/openclaw/issues/132762) — Overflow retry ends success on tool result without final delivery | 12 | P1 / diamond lobster | Multi-stage document workflow bug: retry completes with `toolResult` but no assistant response follows |
| [#114612](https://github.com/openclaw/openclaw/issues/114612) — SQLite unbounded growth in memory tables | 11 | P2 | `memory_index_chunks` + `memory_embedding_cache` have no retention policy; fills disk over time |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) — Zombie child process accumulation | 10 | P1 (+1 👍) | Unreaped hook/tool child processes cause runtime degradation |
| [#110190](https://github.com/openclaw/openclaw/issues/110190) — Runtime context carrier causes model confusion | 8 | P1 / diamond lobster (+1 👍) | Context carrier positioned after user message wastes reasoning tokens and confuses models |

**Underlying needs:** The community is most concerned with **session-state correctness** (compact/transcript bugs), **resource leaks** (zombie processes, SQLite bloat, memory reindex locks), and **multi-agent orchestration reliability** under explicit ownership. These are production-impact issues affecting users running OpenClaw at scale.

## 5. Bugs & Stability

### P0 (critical)

| Issue | Status | Fix PR | Summary |
|---|---|---|---|
| [#136203](https://github.com/openclaw/openclaw/issues/136203) — Windows de-DE 2026.8.2 upgrade blocks Doctor | OPEN | — | Post-upgrade maintenance blocked; legacy workspace state remains |
| [#136452](https://github.com/openclaw/openclaw/issues/136452) — compaction.maxActiveTranscriptBytes unenforced for heartbeat sessions | OPEN | [#136533](https://github.com/openclaw/openclaw/pull/136533) open | Unbounded transcript growth → V8 OOM |
| [#123327](https://github.com/openclaw/openclaw/issues/123327) — WAL checkpoint copies index pages over SQLite page 1 | OPEN | — | Data corruption on ext4 (Raspberry Pi 5); header overwritten |
| [#126821](https://github.com/openclaw/openclaw/issues/126821) — SQLite corruption recurs within 15–24h on rebuilt DBs | OPEN | — | Freemalist miscount; "paralyzed gateway" mode that refuses all service |

### P1 (high)

| Issue | Status | Fix PR | Summary |
|---|---|---|---|
| [#136311](https://github.com/openclaw/openclaw/issues/136311) — memory reindex lock never released | OPEN | — | Gateway reacquires lock on every start; 19 GB orphaned temp DBs |
| [#136175](https://github.com/openclaw/openclaw/issues/136175) — Full local memory reindex saturates CPU | OPEN | — | llama.cpp embedding service pegs 2 cores / 2.4 GB RSS; blocks diagnostics |
| [#136183](https://github.com/openclaw/openclaw/issues/136183) — ssh command executor hangs (SIGTERM) | OPEN | — | Regression in 2026.8.1; banner exchange fails |
| [#136113](https://github.com/openclaw/openclaw/issues/136113) — claude-cli returns empty response >50 KB stdout | CLOSED | — | 11/25 turns lost; stdout truncation bug |
| [#135111](https://github.com/openclaw/openclaw/issues/135111) — Malformed JSON tool call args (intermittent) | OPEN | — | Regression since 2026.8.1; `claude-sonnet-5` |
| [#132762](https://github.com/openclaw/openclaw/issues/132762) — Overflow retry success without delivery | OPEN | — | Tool result written without follow-up assistant response |
| [#128637](https://github.com/openclaw/openclaw/issues/128637) — Multi-agent `AgentSelectionRequiredError` floods | OPEN | — | Ambient operations with no owner crash execution |
| [#125764](https://github.com/openclaw/openclaw/issues/125764) — Telegram dead-letter after single network failure | OPEN | — | No retry/reconcile; high-value messages silently lost |
| [#118185](https://github.com/openclaw/openclaw/issues/118185) — Single turn written to transcript twice | OPEN | — | Two writers assemble reply differently; duplicated but non-identical records |
| [#115642](https://github.com/openclaw/openclaw/issues/115642) — Billing cooldown outlives outage | OPEN | — | 5-hour `disabledUntil` persists after provider recovers |
| [#110190](https://github.com/openclaw/openclaw/issues/110190) — Context carrier after user message causes confusion | OPEN | — | ~15K char payload repositioned; reasoning token waste |

### Notable regressions from v2026.8.x

- **#136183** (ssh hang), **#136113** (claude-cli 50 KB limit), **#135111** (malformed JSON), **#134307** (OAuth MCP absence) — all appeared or worsened in 2026.8.1/8.2
- **#134938** was closed after `doctor --fix` deadlock was resolved
- **#124284** (vLLM + thinking malformed XML) closed as fixed in a later beta

## 6. Feature Requests & Roadmap Signals

| Issue | Comments | Summary |
|---|---|---|
| [#121729](https://github.com/openclaw/openclaw/issues/121729) — Daily spending allowances | 6 | Consumer-friendly shared/per-agent daily model-cost caps for unattended agents |
| [#72741](https://github.com/openclaw/openclaw/issues/72741) — Standard security/guardrail interface | 9 (+1 👍) | Consistent third-party integration point for agent action checks |
| [#39406](https://github.com/openclaw/openclaw/issues/39406) — Suppress transient tool error warnings | 9 (+1 👍) | Hide warnings for tools that retry and succeed |
| [#126781](https://github.com/openclaw/openclaw/issues/126781) — Durable Lobster workflows via /loop | 4 | Stable flow IDs and detached TaskFlow continuation for automation |
| [#120244](https://github.com/openclaw/openclaw/issues/120244) — Cron maintenance window with role isolation | 5 | Opt-in daily window deferring non-roster cron and heartbeat work |
| [#132781](https://github.com/openclaw/openclaw/issues/132781) — Use latest commentary as progress label | 5 | Dynamic progress draft label instead of static "Working" |

**Prediction:** Spending allowances (#121729) and the guardrail interface (#72741) are the most maturely-discussed features and could appear in a near-term minor release. The cron maintenance window (#120244) has RFC-level detail and is likely scoped for a dedicated feature release.

## 7. User Feedback Summary

**Pain points (frequently cited):**

1. **SQLite instability** — Multiple users report corruption, freelist miscounts, and WAL checkpoint overwrites, especially on Linux/ext4 and WSL2. This is the dominant reliability concern.
2. **Memory-core resource leaks** — Unbounded growth of `memory_index_chunks`, orphaned reindex temp files (`.tmp-<uuid>`, `.memory-reindex-*`), and reindex locks that prevent repair.
3. **Compaction bugs** — Heartbeat-driven sessions bypass transcript byte caps; repeat-compaction after recovery; "Already compacted" misclassification.
4. **Process lifecycle** — Zombie child processes from hooks/tools (#97616), codex app-server leaks (#125344), and Tailscale crash loops on launchd restart.
5. **Multi-agent orchestration** — `AgentSelectionRequiredError` flooding under explicit ownership; subagent spawn failures with vLLM/thinking models.
6. **Messaging reliability** — Telegram dead-letters after one network failure; iMessage echo-cache bypass on reflections (#135704); WhatsApp inbound crash on earlier betas.

**Satisfaction signals:** Users are actively engaging with beta feedback (#125626, 24 comments) and reporting detailed production reproductions. The project has strong adoption in multi-agent, scheduled, and cross-platform (Matrix, Telegram, iMessage, Slack) configurations.

## 8. Backlog Watch

| Issue | Age | Priority | Blocker |
|---|---|---|---|
| [#114612](https://github.com/openclaw/openclaw/issues/114612) — SQLite unbounded memory table growth | ~38 days | P2 | No retention policy; disk-fill in production |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) — Zombie child process accumulation | ~68 days | P1 (+1 👍) | Long-standing regression with no merged fix |
| [#86119](https://github.com/openclaw/openclaw/issues/86119) — Orphaned `node server.js` workers | ~94 days | P1 (+1 👍) | Subagent/cron embedded runs leak workers |
| [#112638](https://github.com/openclaw/openclaw/issues/112638) — session.maintenance enforce mode silently exceeded | ~44 days | P2 | Thread/channel entries exempt from all reclaim |
| [#115912](https://github.com/openclaw/openclaw/pull/115912) — Prevent repeat compaction after recovery | ~67 days | P1 | Open PR; needs maintainer proof decision |
| [#136311](https://github.com/openclaw/openclaw/issues/136311) — Reindex lock never released | 2 days | P1 / platinum | 19 GB orphaned temp DBs; index unrepairable |
| [#136284](https://github.com/openclaw/openclaw/issues/136284) — Legacy `.tmp-<uuid>` memory files leak | 2 days | P2 | Age-gated cleanup sweep misses old naming scheme |

**Maintainer attention needed:** The SQLite corruption family (#123327, #126821), the compaction transcript-cap enforcement gap (#136452 → #136533), and the memory-core lock/leak cluster (#136311, #136284, #119411) are the most critical open items. Several high-severity issues remain open without linked PRs, suggesting a backlog that could benefit from dedicated stability-sprint focus.

---

## Cross-Ecosystem Comparison



# Cross-Project Comparison Report — AI Agent & Personal AI Assistant Ecosystem
**Date:** 2026-09-04 | **Projects Analyzed:** 11

---

## 1. Ecosystem Overview

The open-source personal AI assistant landscape in September 2026 is characterized by intense stabilization sprints following major release cycles (OpenClaw v2026.8.x, Hermes v0.21.0, CoPaw v2.2.0). The dominant tension across all active projects is between feature velocity and production reliability — SQLite corruption, session-state leaks, and multi-agent orchestration bugs appear as recurring failure modes rather than isolated incidents. A secondary wave of activity is driven by multi-tenant deployment needs (CoPaw Hub, NanoClaw fork extensibility, ZeroClaw sandbox RFCs) and provider-agnostic architectural refactors (NanoClaw's provider contract standardization, IronClaw's TypeScript hardening). Two projects — NullClaw and TinyClaw — show zero activity, suggesting ecosystem consolidation or dormancy.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release | Open Issues | Open PRs | Health |
|---|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | ✅ v2026.9.1 shipped | High (stabilization pressure) | High | 🟡 Active but strained |
| **Hermes Agent** | 50 | 50 | ❌ None | 48 open active | 44 open | 🟡 High-triage mode |
| **ZeroClaw** | 50 | 50 | ❌ None | Moderate | Moderate | 🟢 Active & refining |
| **CoPaw** | 31 | 27 | ✅ v2.2.0 stable | 23 open | 18 open | 🟢 Active release cycle |
| **IronClaw** | 6 | 17 | ❌ None | 6 open | ~6 open | 🟢 Strong mid-sprint |
| **NanoClaw** | 6 | 25 | ❌ None | 5 open | ~15 open | 🟢 Active & healthy |
| **NanoBot** | 4 | 24 | ❌ None | ~4 open | ~11 open | 🟢 Strong daily throughput |
| **LobsterAI** | 6 | 14 | ❌ None (v2026.8.31 prev.) | 4 open/active | 5 open | 🟢 Steady |
| **PicoClaw** | 5 | 7 | ❌ None (v0.3.1) | 5 open | 6 open | 🟡 Maintenance-heavy |
| **Moltis** | 0 | 1 | ❌ None | 0 new | 1 open | 🟢 Quiet maintenance |
| **NullClaw** | 0 | 0 | ❌ None | — | — | 🔴 Dormant |
| **TinyClaw** | 0 | 0 | ❌ None | — | — | 🔴 Dormant |

---

## 3. OpenClaw's Position

**Advantages vs. peers:**
- **Unmatched development velocity** — 500 issues/PRs touched in 24h dwarfs all competitors, indicating the largest contributor base and most active issue pipeline in the ecosystem.
- **Multi-platform reach** — Native macOS/iOS/Android apps plus Control UI with Mermaid rendering; the broadest channel support (Matrix, Telegram, iMessage, Slack, WhatsApp).
- **Release cadence** — Only project shipping frequent patch releases (v2026.9.1) with backward-compatible UX improvements.

**Technical approach differences:**
- OpenClaw leans into **SQLite-as-state-store** with memory-core embeddings, making it uniquely vulnerable to the corruption/regression patterns dominating its bug tracker. Most peers use alternative persistence (Hermes uses `state.db` with similar WAL issues; NanoClaw uses SQLite with different PRAGMA ordering concerns).
- **Multi-agent explicit ownership** model is the most production-scoped, but generates the highest volume of `AgentSelectionRequiredError` and subagent-spawn failures — a trade-off not seen in lighter-weight projects like Moltis or PicoClaw.
- Unlike NanoClaw's **provider contract refactor** (Codex, OpenCode, Cursor standardization) or ZeroClaw's **WASM plugin lifecycle** RFC, OpenClaw's architecture is more monolithic in its provider integration layer.

**Community size:** OpenClaw's issue comment counts (e.g., #125626 with 24 comments) and 500-item daily touch volume suggest the largest and most engaged community. Hermes follows with high-noise tracker items (#66616 at 149 comments). Smaller projects (PicoClaw, Moltis) show niche but dedicated user bases.

---

## 4. Shared Technical Focus Areas

| Focus Area | Projects Involved | Specific Needs |
|---|---|---|
| **SQLite / persistence reliability** | OpenClaw, Hermes Agent, NanoClaw | WAL corruption, freelist miscounts, unbounded memory table growth, reindex lock leaks, PRAGMA ordering bugs |
| **Session-state correctness** | OpenClaw, Hermes Agent, CoPaw, ZeroClaw | Compaction transcript caps unenforced, session ownership locks, repeat-compaction after recovery, context-cap ignoring user config |
| **Process/resource lifecycle** | OpenClaw, Hermes Agent, NanoClaw | Zombie child processes, embedded worker leaks, cron dispatcher failures, OOM from unbounded processes |
| **Provider/contract portability** | NanoClaw, CoPaw, ZeroClaw, IronClaw | OpenCode header enforcement, multi-provider routing, prompt caching keys, per-provider fallback chains |
| **Multi-agent orchestration** | OpenClaw, Hermes Agent, CoPaw, ZeroClaw | Subagent spawn failures, delegation fallback ignored, main agent not polling children, explicit ownership errors |
| **Channel reliability** | NanoBot, OpenClaw, CoPaw, ZeroClaw | Telegram dead-letter after network failure, Feishu consumer stalls, transcription config ignored, WhatsApp media handling |
| **Security & sandboxing** | ZeroClaw, CoPaw, IronClaw | Sandbox breach reports, verifiable-intent credential chain gaps, dangerous instruction evasion, admission-gate seams |
| **Prompt context budgeting** | IronClaw, ZeroClaw, OpenClaw | Budget not accounting for non-transcript material, context cap hard-limited regardless of model window, overflow retry delivery gaps |
| **Observability & tracing** | NanoBot, ZeroClaw, Moltis, NanoClaw | Token/trace visibility, retry lifecycle events, per-tool-call `tool_call_id` correlation, context-reuse visualization |
| **Windows/WSL compatibility** | OpenClaw, Hermes Agent, LobsterAI | Upgrade blockers, venv file-lock deadlocks, DPI awareness, hidden console windows |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | Hermes Agent | NanoClaw | CoPaw | ZeroClaw | IronClaw | NanoBot | LobsterAI | PicoClaw | Moltis |
|---|---|---|---|---|---|---|---|---|---|---|
| **Primary focus** | General-purpose personal AI with multi-platform messaging | CLI/desktop-first agent with skills system | Multi-provider orchestration layer | Multi-tenant Hub + desktop app | Security-first agent platform with RFC governance | TypeScript WebUI v2 + LLM transport | Channel-layer resilience + WebUI | All-in-one desktop agent (Chinese market) | Edge/ARM deployment (Sipeed) | Framework/hook extensibility |
| **Target user** | Power users, multi-agent operators | Developers, CLI users | Multi-provider integrators, fork operators | Teams, multi-tenant deployments | Security-conscious orgs | WebUI-focused teams | Channel operators | Chinese-market desktop users | Edge device makers | Hook/plugin framework builders |
| **Architecture** | Monolithic core + plugin system, SQLite state | Modular with skills index + systemd integration | Provider contract abstraction + agent-runner | Multi-tenant Hub + portable channels | RFC-governed, WASM plugins, granular sandboxes | TypeScript WebUI v2 + React Query | Channel abstraction layer | Electron desktop app with Cowork runtime | Go-based edge deployment | Hook-based lifecycle framework |
| **Key differentiator** | Fastest velocity, broadest platform support | Skills Hub + TUI richness | Provider contract standardization wave | QwenPaw Hub multi-tenancy | Formal RFC governance + security depth | TypeScript type safety ratchet | Channel durability focus | Windows UX polish + in-app browser | ARM/edge form factor | Minimal hook lifecycle for observability |
| **Stance on security** | Defensive (guardrail RFC #72741) | Safety gate issues (#102442) | Admission-gate seams (#3707) | Critical — sandbox breaches reported | Primary design axis (RFC #6996) | Context-budget accuracy | Not prominent | Configuration warnings | Not prominent | Not prominent |

---

## 6. Community Momentum & Maturity

**Tier 1 — Rapid Iteration (50+ items/day):**
- **OpenClaw** — Largest community, highest velocity, but in stabilization mode post-v2026.8.x regression wave. The 500-touch volume reflects both productive development and reactive firefighting.
- **Hermes Agent** — High velocity but in high-triage mode; 48 open active issues vs. 6 merged today signals a project absorbing the consequences of a rushed v0.21.0 release.
- **ZeroClaw** — High velocity with balanced input/output; dense RFC discussion and advanced PRs suggest mature contributor base with strong governance.

**Tier 2 — Active Development (15-50 items/day):**
- **CoPaw** — Active release cycle around v2.2.0; security issues from external researchers indicate production adoption. 31 issues / 27 PRs with responsive maintainers.
- **NanoClaw** — Healthy throughput with focused thematic clusters (provider contracts, agent-runner fixes). Strong power-user engagement (fork extensibility demands).
- **IronClaw** — Focused sprint on TypeScript hardening and prompt budgeting; 11 merged PRs in one day shows efficient execution.

**Tier 3 — Steady Maintenance (5-15 items/day):**
- **NanoBot** — Strong merge rate (13 closed) with focused channel-reliability work; smaller community but high signal-to-noise.
- **LobsterAI** — Steady Windows/documentation work; long backlog of concurrency bugs (#1088, #1089) from March suggests resource constraints.
- **PicoClaw** — Maintenance-heavy phase; Dependabot-dominated PRs, one actionable bug fix (Slack media), one persistent UX pain point (Web UI lag).

**Tier 4 — Low/No Activity:**
- **Moltis** — Single PR in progress; small but dedicated contributor base focused on hook lifecycle completeness.
- **NullClaw / TinyClaw** — Zero activity; likely dormant or absorbed by adjacent projects.

---

## 7. Trend Signals

| Trend | Evidence Across Projects | Value for AI Agent Developers |
|---|---|---|
| **SQLite is a systemic risk** | Corruption in OpenClaw, Hermes, NanoClaw; PRAGMA ordering bugs across multiple projects | Evaluate SQLite for session-state at scale; consider WAL checkpoint testing, retention policies, and backup strategies as first-class concerns |
| **Provider-agnostic architecture is the new standard** | NanoClaw's contract refactor, CoPaw's OpenCode header fix, ZeroClaw's A2A client, IronClaw's cache-gate RFCs | Build abstraction layers early; per-provider header/auth requirements (e.g., `x-opencode-session`) are fragmenting the ecosystem |
| **Multi-agent orchestration reliability is unresolved** | `AgentSelectionRequiredError` floods (OpenClaw), delegation fallback ignored (Hermes), main agent not polling children (CoPaw), subagent spawn failures (OpenClaw/vLLM) | Explicit ownership models need better error recovery; subagent lifecycle management remains an open research problem |
| **Security auditing is moving external** | CoPaw sandbox breaches reported by Zhihu researcher, ZeroClaw verifiable-intent gaps, Hermes protected-instruction gate bypass | Projects with multi-tenant or sandboxed deployments will face external security scrutiny; invest in audit trails and defense-in-depth |
| **Context budgeting accuracy matters at scale** | IronClaw #8057 (non-transcript material exceeds window), ZeroClaw #10068 (32K cap ignoring 131K config), OpenClaw compaction bypasses | Prompt assembly must account for identity, skills, tool schemas, and channel context within a single budget envelope — not layered on top |
| **Session-state fragility is the #1 user pain point** | Ownership locks (Hermes), compaction bugs (OpenClaw), context caps (ZeroClaw), session switching blocked (CoPaw — now fixed) | Session lifecycle management is the hardest unsolved problem; projects that solve this (CoPaw's mid-generation switching) gain user loyalty |
| **Channel-layer reliability separates production from hobby** | Telegram dead-letter (OpenClaw), Feishu stalls (CoPaw), Discord transcription misconfig (ZeroClaw), WhatsApp media (NanoClaw) | Channel abstraction quality directly determines production viability; invest in retry, dead-letter, and backpressure handling per channel |
| **Observability is a differentiator** | NanoBot token/trace visualization, Moltis per-tool-call `tool_call_id`, ZeroClaw A2A tracing, NanoClaw delivery-mode recording | Users demand visibility into token usage, retry lifecycle, and context efficiency; projects shipping observability features will attract power users |
| **Windows is a consistent second-class citizen** | Upgrade blockers (OpenClaw), venv deadlocks (Hermes), DPI/console issues (LobsterAI), Smart App Control failures (Hermes) | Cross-platform parity requires deliberate investment; Windows-specific test coverage is universally lacking |
| **RFC-governed architecture correlates with maturity** | ZeroClaw's formal RFC process with maintainer decision tracker, CoPaw's multi-tenant roadmap discussion, NanoClaw's extension-seam requests | Projects with structured governance handle scale better; the absence of RFC processes in smaller projects correlates with积累 backlog (LobsterAI's 5-month stale bugs) |

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



# NanoBot Project Digest — 2026-09-04

## 1. Today's Overview
NanoBot shows strong daily throughput with **24 PR updates** (13 merged/closed, 11 open) and **4 issue updates** (3 open, 1 closed) in the past 24 hours. No new releases were published today. Activity is heavily concentrated around WebUI reliability, channel-layer resilience (Matrix, Signal, Telegram), and mobile/PWA parity. The high merge rate indicates an active triage cycle, though several open regressions and concurrency bugs still require maintainer attention before the next release.

## 2. Releases
No new releases were published today.

## 3. Project Progress
**Merged/Closed PRs today (13):**
- [#5514](https://github.com/HKUDS/nanobot/pull/5514) — Fixed stale WebUI streaming state after Gateway reconnect (closes [#5512](https://github.com/HKUDS/nanobot/issues/5512)).
- [#5334](https://github.com/HKUDS/nanobot/pull/5334) — Preserved indentation across newline-based message splits in channels.
- [#5637](https://github.com/HKUDS/nanobot/pull/5637) — Propagated Matrix stream delivery failures to the channel manager retry policy.
- [#5646](https://github.com/HKUDS/nanobot/pull/5646) — Displayed language picker labels exclusively in native form; removed unused English overrides.
- [#5385](https://github.com/HKUDS/nanobot/pull/5385) — Completed Element SAS verification flow for modern `m.key.verification.request` events.
- [#5413](https://github.com/HKUDS/nanobot/pull/5413) — Applied fallback policy to exceptions raised directly by LLM providers.
- [#5472](https://github.com/HKUDS/nanobot/pull/5472) — Honored wildcard (`*`) in Signal DM/group inbound allowlists.
- [#5515](https://github.com/HKUDS/nanobot/pull/5515) — Observed session reply timeout task failures instead of silently discarding them.
- [#5629](https://github.com/HKUDS/nanobot/pull/5629) — Enforced `max_length` truncation for plain (non-path/non-command) tool hints.
- [#5635](https://github.com/HKUDS/nanobot/pull/5635) — Preserved unread SDK stream events when the event queue was full.
- [#5632](https://github.com/HKUDS/nanobot/pull/5632) — Preserved Codex prompt cache affinity by routing stable SHA-256 session keys through both `session-id` and `prompt_cache_key`.
- [#5634](https://github.com/HKUDS/nanobot/pull/5634) — Bounded the outbound reply fingerprint cache to prevent unbounded memory growth on long-running gateways.

**Themes advanced:** Channel durability (Signal wildcards, Matrix failure propagation, fingerprint cache bounding), provider robustness (fallback policies, Codex cache), and WebUI/streaming cleanup (timeout observability, stale state clearing).

## 4. Community Hot Topics
*(Comment/reaction counts were not populated in the dataset; activity inferred from update recency and issue/PR clustering.)*

- **[Issue #5644](https://github.com/HKUDS/nanobot/issues/5644)** — Locale registry drops a translation set when two channels load concurrently at startup. Highlights a concurrency gap in the WebUI plugin initialization path.
- **[Issue #5647](https://github.com/HKUDS/nanobot/issues/5647) + [PR #5648](https://github.com/HKUDS/nanobot/pull/5648)** — Session titles fail to generate when the frontend envelope omits the `webui` flag. PR #5648 adds metadata validation to close the gap left by earlier `target_session_key` changes.
- **[Issue #5645](https://github.com/HKUDS/nanobot/issues/5645)** — `Current Time` runtime context is absent by default in `0.3.0`, breaking parity with `0.2.2`. No fix PR yet.
- **[PR #5649](https://github.com/HKUDS/nanobot/pull/5649)** — Visualizes per-request context reuse in the WebUI composer. Reflects growing demand for token/trace observability without cluttering chat streams.
- **[PR #5504](https://github.com/HKUDS/nanobot/pull/5504)** — Surfaces model retry lifecycle events (countdown/attempts) to WebSocket clients and TUI/WebUI. Signals a community need for transparent provider resilience.

**Underlying needs:** Operators want deterministic startup paths, clearer upgrade migration behavior, and UI-level telemetry for retries and context efficiency.

## 5. Bugs & Stability
**Open bugs (ranked by severity):**
1. **[Issue #5645](https://github.com/HKUDS/nanobot/issues/5645)** — *Regression.* `Current Time` runtime context no longer injected automatically in `0.3.0`. High impact for workflows depending on timezone-aware prompts.
2. **[Issue #5644](https://github.com/HKUDS/nanobot/issues/5644)** — *Concurrency bug.* Race condition in `loadChannelLocale()` drops locales during parallel startup. Medium-high impact for multi-channel deployments.
3. **[Issue #5647](https://github.com/HKUDS/nanobot/issues/5647)** — *WebUI defect.* Session titles miss projection when envelope lacks `webui` flag. Medium impact; fix pending in [#5648](https://github.com/HKUDS/nanobot/pull/5648).

**Closed/Fixed today:**
- [#5512](https://github.com/HKUDS/nanobot/issues/5512) — WebUI stuck in spinning state after Gateway restart → resolved by [#5514](https://github.com/HKUDS/nanobot/pull/5514).

## 6. Feature Requests & Roadmap Signals
- **[PR #5649](https://github.com/HKUDS/nanobot/pull/5649)** — Context-reuse visualization (popover + stacked bars). Suggests next release will prioritize token/trace transparency.
- **[PR #5504](https://github.com/HKUDS/nanobot/pull/5504)** — Retry status surfacing across TUI/WebUI. Aligns with ongoing reliability hardening.
- **[PR #5640](https://github.com/HKUDS/nanobot/pull/5640)** — Mobile keyboard input and streaming send behavior refinements.
- **[PR #5641](https://github.com/HKUDS/nanobot/pull/5641)** — iOS PWA tap and status-bar fixes.
- **[PR #5614](https

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent Project Digest — 2026-09-04**

---

### 1. Today's Overview
Hermes Agent recorded high development velocity in the last 24 hours with **50 issues and 50 pull requests updated**, though **no new release** was published today. The project is actively firefighting regressions introduced by the recent **v0.21.0** release (2026-08-31), with multiple P0–P2 bugs surfacing around session ownership locks, prompt caching, and systemd compatibility. At the same time, feature work continues on memory extensions, tool-search ranking, and multi-platform runtime support. With only **2 issues closed** and **6 PRs merged/closed** against **48 open active issues** and **44 open PRs**, the maintainers are operating in high-triage mode.

---

### 2. Releases
No new releases were published today (2026-09-04).

---

### 3. Project Progress
Per the 24-hour activity summary, **6 PRs were merged or closed**. The visible closed PR in today’s top activity is a fix for Docker container detection ([#102169](https://github.com/NousResearch/hermes-agent/pull/102169)). Significant open PRs advancing toward merge include:

- **Tool search quality**: Optional embedding reranker + name-coverage bonus ([#102506](https://github.com/NousResearch/hermes-agent/pull/102506)).
- **Memory architecture**: New `memory-extension` optional skill using an index + detail-files layout ([#84374](https://github.com/NousResearch/hermes-agent/pull/84374)).
- **Gateway / integrations**: Configurable Discord thread auto-archive duration ([#81172](https://github.com/NousResearch/hermes-agent/pull/81172)), disable link previews toggle ([#60975](https://github.com/NousResearch/hermes-agent/pull/60975)), and forwarding Hermes session identity to LiteLLM proxies ([#75008](https://github.com/NousResearch/hermes-agent/pull/75008)).
- **Local runtime**: WSL `nvidia-smi` discovery ([#102503](https://github.com/NousResearch/hermes-agent/pull/102503)) and Intel GPU SYCL support with `vulkaninfo` fallback ([#102505](https://github.com/NousResearch/hermes-agent/pull/102505)).
- **Agent capabilities**: Agent-facing `model_override` tool for in-session model switching without delegation ([#77993](https://github.com/NousResearch/hermes-agent/pull/77993)).
- **Stability fixes**: Gateway expiry reason preservation ([#102501](https://github.com/NousResearch/hermes-agent/pull/102501)), Azure first-message drop fix ([#99736](https://github.com/NousResearch/hermes-agent/pull/99736)), and TUI soft-refresh to reduce noisy re-renders ([#76869](https://github.com/NousResearch/hermes-agent/pull/76869)).

---

### 4. Community Hot Topics
Most active discussions by comment volume and underlying needs:

- **Skills index degradation** ([#66616](https://github.com/NousResearch/hermes-agent/issues/66616)) — **149 comments**, P3. An automated freshness probe reports the skills index is 29.8 hours old, breaking the 26-hour SLA. *Underlying need*: resilient CI/CD for documentation artifacts and a reliable Skills Hub.
- **Automated Nous integration blocked** ([#88584](https://github.com/NousResearch/hermes-agent/issues/88584)) — **60 comments**, P3. A scheduled merge from Nous to Enterkey conflicts in `cron/jobs.py`, stalling the dashboard updater. *Underlying need*: reliable upstream synchronization and branch automation.
- **TUI uppercase input destroyed on Ghostty** ([#90663](https://github.com/NousResearch/hermes-agent/issues/90663)) — **10 comments**, P1, 👍 1. Shift+letter inputs are lowercased in the Ink-based TUI on macOS Ghostty. *Underlying need*: robust terminal input handling across modern terminal emulators.
- **Delegation fallback configuration ignored** ([#65038](https://github.com/NousResearch/hermes-agent/issues/65038)) — **10 comments**, P1. Delegated workers inherit the parent fallback chain even when `delegation.fallback_providers` is explicitly set. *Underlying need*: predictable, configurable provider failover for sub-agents.

---

### 5. Bugs & Stability
Bugs reported or updated today, ranked by severity. Fix PRs are noted where visible.

**P0 — Critical**
- **Prompt cache miss on every new turn** ([#102194](https://github.com/NousResearch/hermes-agent/issues/102194)): The CLI path fails to persist `api_content` sidecars, causing `<memory-context>` / tool-result decorations to drop at turn boundaries. The first API call of every new turn misses the provider prompt cache, impacting latency and cost. *No fix PR linked yet.*

**P1 — High**
- **Cron worker dispatch fails closed on systemd 249** ([#102486](https://github.com/NousResearch/hermes-agent/issues/102486)): `OOMPolicy=kill` is rejected as an unknown assignment, causing every restart-safe cron worker dispatch to fail. **Fix PR:** [#102508](https://github.com/NousResearch/hermes-agent/pull/102508).
- **TUI destroys uppercase input** ([#90663](https://github.com/NousResearch/hermes-agent/issues/90663)): Ghostty on macOS lowercases Shift+letter in the prompt composer.
- **Delegation fallback_providers ignored** ([#65038](https://github.com/NousResearch/hermes-agent/issues/65038)): The config key is accepted but overridden by parent inheritance behavior.
- **state.db WAL structural corruption** ([#90806](https://github.com/NousResearch/hermes-agent/issues/90806)): **Closed today**. Recurring corruption when WAL sidecars are replaced under live holders during FTS-corruption handling.

**P2 — Medium / Regressions**
- **Profile switching regression in v0.21.0** ([#102163](https://github.com/NousResearch/hermes-agent/issues/102163)): Strict local backend slot limit of 3 is now enforced, plus a session ownership lock blocks switching workflows.
- **Desktop session ownership lock on creation** ([#101416](https://github.com/NousResearch/hermes-agent/issues/101416)): "Session already has a live owner" errors on every new desktop session.
- **Desktop spawn cap starves foreground opens** ([#102281](https://github.com/NousResearch/hermes-agent/issues/102281)): Large bot rosters cannot open bots for ~2–3 minutes after launch due to a spawn cap introduced by a recent merge.
- **vLLM output-cap rejection misparsed** ([#102494](https://github.com/NousResearch/hermes-agent/issues/102494)): `max_tokens > max_model_len` 400 errors are incorrectly treated as prompt-too-long, killing sessions. **Fix PR:** [#102502](https://github.com/NousResearch/hermes-agent/pull/102502).
- **`hermes update` deadlocks on Windows** ([#66933](https://github.com/NousResearch/hermes-agent/issues/66933)): External processes using the same venv interpreter block the updater permanently.
- **Desktop Kanban traps navigation** ([#101593](https://github.com/NousResearch/hermes-agent/issues/101593)): Users cannot close the Kanban tab or return to an open bot conversation.
- **CLI dispatcher drops integer exit statuses** ([#62810](https://github.com/NousResearch/hermes-agent/issues/62810)): Command handlers’ return codes are discarded, breaking `set -e`, CI, and schedulers.
- **Protected-instruction gate never fires for SOUL.md** ([#102442](https://github.com/NousResearch/hermes-agent/issues/102442)): **Closed as duplicate/security**. On default installs, the safety gate short-circuits before checking basenames inside `HERMES_HOME`.

---

### 6. Feature Requests & Roadmap Signals
User-requested capabilities and advancing PRs that signal near-term direction:

- **Explicit Project Workspaces & Cross-Channel Session Routing** ([#96683](https://github.com/NousResearch/hermes-agent/issues/96683)): A major architectural proposal to let long-running projects span multiple Telegram accounts, groups, and Discord channels. Signals a move toward team/enterprise workflows.
- **Inception Prompting** ([#375](https://github.com/NousResearch/hermes-agent/issues/375)): Hardened sub-agent prompts inspired by CAMEL-AI to reduce delegation failures.
- **Ollama `think: false` support** ([#6152](https://github.com/NousResearch/hermes-agent/issues/6152)): Stop forcing reasoning chains on non-reasoning Ollama models to improve CPU inference speed (3 upvotes).
- **Memory-extension skill** ([#84374](https://github.com/NousResearch/hermes-agent/pull/84374)) and **embedding reranker** ([#102506](https://github.com/NousResearch/hermes-agent/pull/102506)) suggest the next release cycle may focus heavily on RAG, memory scaling, and tool retrieval quality.
- **Agent model override tool** ([#77993](https://github.com/NousResearch/hermes-agent/pull/77993)) indicates runtime model flexibility is a near-term priority without requiring delegation.

**Prediction**: The immediate priority is a **v0.21.1 stability patch** addressing session-state regressions and systemd compatibility. Memory extensions and workspace routing are likely candidates for the following minor release.

---

### 7. User Feedback Summary
Real user pain points cluster around four themes:

1. **Session state fragility**: Users face ownership locks, source overwrites on `/resume`, profile switching regressions, and cron delivery failures when interactive sessions are active. The session-management layer is the single largest source of friction.
2. **Desktop UX papercuts**: Navigation traps (Kanban), unreachable UI elements (profile recolor after rail collapse past 13 profiles), and spawn starvation after launch indicate the desktop frontend is struggling with scale and state synchronization.
3. **Windows as a second-class citizen**: `hermes update` deadlocks due to venv file locks, and Smart App Control blocks produce opaque failures without actionable guidance ([#87789](https://github.com/NousResearch/hermes-agent/issues/87789)). Windows users lack first-class diagnostics.
4. **Configuration surprises**: `hermes config set` silently persists transient session model choices ([#97579](https://github.com/NousResearch/hermes-agent/issues/97579)), and delegation config is ignored, leading to bricked profiles and unexpected provider chains.

Overall sentiment: users are **dissatisfied with v0.21.0 stability** but continue to invest in the project via detailed bug reports and feature proposals.

---

### 8. Backlog Watch
Long-unanswered or high-noise items needing maintainer attention:

- **Skills index watchdog** ([#66616](https://github.com/NousResearch/hermes-agent/issues/66616)): Open since July 18 with **149 comments**. Despite being P3, it is the noisiest issue in the tracker and reflects chronic CI reliability problems that break the public Skills Hub.
- **Automated Nous merge blocked** ([#88584](https://github.com/NousResearch/hermes-agent/issues/88584)): Open since August 17 with **60 comments**. The blocked merge pipeline is a release-blocking risk for downstream Enterkey integration.
- **CLI exit status bug** ([#62810](https://github.com/NousResearch/hermes-agent/issues/62810)): Open since July 11; breaks automation and scripting contracts but remains unassigned.
- **Ollama reasoning toggle** ([#6152](https://github.com/NousResearch/hermes-agent/issues/6152)): Open since April 8 with strong user signal (👍 3) but no visible maintainer resolution; a low-hanging performance win.
- **Inception Prompting** ([#375](https://github.com/NousResearch/hermes-agent/issues/375)): Open since March 4. Strategic for agent reliability but at risk of being buried under higher-volume regressions.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



# PicoClaw Project Digest — 2026-09-04

---

## 1. Today's Overview

PicoClaw shows moderate but steady community activity with **5 open issues** and **7 pull requests** updated in the last 24 hours (1 merged/closed, 6 still open). No new releases were published this period. Activity is dominated by dependency bumps from Dependabot (4 PRs) and a pair of channel-specific bug fixes for Slack and LINE, suggesting the project is in a maintenance-heavy phase rather than a feature-release cycle. Issue #3281 on Web UI chat lag remains the most engaged open bug with 8 comments and 1 👍, indicating a persistent UX pain point.

---

## 2. Releases

**None.** No new versions were published in this reporting window. The latest referenced version across multiple issues remains **v0.3.1**.

---

## 3. Project Progress

### Merged / Closed PRs (1)
- **[PR #3329](https://github.com/sipeed/picoclaw/pull/3329)** — *fix(line): warn on inert webhook_host / webhook_port instead of seeding them* (closed). Author `ex-takashima` addressed [Issue #3328](https://github.com/sipeed/picoclaw/issues/3328), where LINE channel configuration fields were declared and defaulted but never actually consumed. The fix replaces silent seeding with an explicit warning, preventing misleading configs from going unnoticed. This improves observability for LINE channel users rather than adding new functionality.

### Open PRs Awaiting Review (6)
- **[PR #3340](https://github.com/sipeed/picoclaw/pull/3340)** — Fixes Slack media uploads by setting `FileSize` on upload params, directly addressing [Issue #3338](https://github.com/sipeed/picoclaw/issues/3338). Ready for maintainer merge.
- **[PR #3360–#3364](https://github.com/sipeed/picoclaw/pulls)** — Five Dependabot dependency bumps (AWS SDK v2, golang.org/x/term, irc-go, protobuf, Lark SDK). Routine but important for security and compatibility.

---

## 4. Community Hot Topics

| Issue / PR | Activity | Link |
|---|---|---|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) — Web UI chat lag with long history | 8 comments · 1 👍 | [Issue](https://github.com/sipeed/picoclaw/issues/3281) |
| [#3340](https://github.com/sipeed/picoclaw/pull/3340) — Slack media upload fix | Open, waiting | [PR](https://github.com/sipeed/picoclaw/pull/3340) |
| [#3339](https://github.com/sipeed/picoclaw/issues/3339) — Antigravity 429 errors | Closed (resolved) | [Issue](https://github.com/sipeed/picoclaw/issues/3339) |

**Analysis:** Issue #3281 is the clear community hotspot — users consistently report UI responsiveness degradation as chat history grows, a scaling concern that likely stems from client-side rendering or unnecessary re-renders of conversation history. The resolution of #3339 (Antigravity 429) via closure suggests the issue was environment/quota-related rather than a code bug. The Slack fix PR (#3340) has an open counterpart (#3338) and is the most actionable item for maintainers to review.

---

## 5. Bugs & Stability

| Severity | Issue | Summary | Fix PR? |
|---|---|---|---|
| **Medium** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI input lag with moderately long chat history | ❌ None yet |
| **Medium** | [#3338](https://github.com/sipeed/picoclaw/issues/3338) | Slack media uploads always fail (`file size cannot be 0`) | ✅ [PR #3340](https://github.com/sipeed/picoclaw/pull/3340) |
| **Low** | [#3346](https://github.com/sipeed/picoclaw/issues/3346) | RKLLM abnormal replies on ARM dev boards | ❌ None yet |
| **Low** | [#3349](https://github.com/sipeed/picoclaw/issues/3349) | QQ Channel gateway auth failure (401, incorrect header format) | ❌ None yet |

**Notes:**
- **#3339** (Antigravity 429) was closed — likely quota/permissions issue, not a code regression.
- No crash or data-loss bugs reported this period.
- The Slack fix is the only bug with a ready PR; the Web UI lag (#3281) is the most impactful outstanding issue with no proposed fix.

---

## 6. Feature Requests & Roadmap Signals

No explicit feature requests were filed this period. However, two implicit signals emerge:

1. **Web UI performance** — Issue #3281 reflects a growing user base hitting scaling limits with chat history. A roadmap item around virtualized message lists or pagination would address this proactively.
2. **Channel reliability** — QQ Channel (#3349) and RKLLM on ARM (#3346) both indicate users are testing PicoClaw in increasingly diverse environments. Investing in channel-specific test coverage and edge-device compatibility could prevent future regressions.

---

## 7. User Feedback Summary

| Theme | Sentiment | Details |
|---|---|---|
| Web UI responsiveness | ⚠️ Dissatisfied | Long chat histories cause noticeable input lag; users want snappy UX regardless of session length. |
| Slack media sharing | ⚠️ Frustrated | Image uploads broken by a one-line missing field; fix PR exists but is unmerged. |
| LINE config | ✅ Improved | Fix #3329 reduces confusion by surfacing inert config values as warnings. |
| Edge/ARM deployment | ⚠️ Mixed | RKLLM on ARM dev boards produces abnormal replies — users are experimenting but hitting model-specific issues. |
| QQ Channel integration | ⚠️ Blocked | Auth header format issue prevents channel from functioning; no fix yet. |

---

## 8. Backlog Watch

| Item | Days Open | Risk |
|---|---|---|
| [#3340](https://github.com/sipeed/picoclaw/pull/3340) — Slack media fix | ~18 days | Medium — fix is ready, simple review needed |
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) — Web UI lag | ~45 days | High — most engaged bug, no fix in sight |
| [#3349](https://github.com/sipeed/picoclaw/issues/3349) — QQ Channel 401 | ~35 days | Medium — blocks a channel for Chinese-language users |
| [#3346](https://github.com/sipeed/picoclaw/issues/3346) — RKLLM reply anomalies | ~38 days | Low — niche use case (ARM dev boards) |

**Recommendation:** Prioritize merging PR #3340 (low effort, high impact for Slack users) and triaging #3281 with a performance investigation. The QQ and RKLLM issues may need contributor expertise in those specific integrations.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



# NanoClaw Project Digest — 2026-09-04

## 1. Today's Overview

NanoClaw shows robust development momentum with 31 items touched in the last 24 hours (6 issues, 25 PRs), of which 3 PRs were merged/closed and 5 issues remain open. Activity is concentrated around three areas: provider contract standardization (a large refactor wave), agent-runner reliability fixes, and channel-level improvements. No new releases were published today, but the volume of closed PRs and active bug work suggests an upcoming release is being prepared. The project is healthy — high PR throughput with focused thematic clusters rather than scattered efforts.

## 2. Releases

No new releases published today.

## 3. Project Progress

**Merged/Closed today (3 PRs):**

- **[PR #3126](https://github.com/nanocoai/nanoclaw/pull/3126)** — *fix(agent-runner): never deliver silence, never deliver `<internal>` thinking* — Closed. A critical correctness fix ensuring the agent runner strips internal-only message types from outbound delivery, preventing stray thinking blocks and empty messages from reaching users.
- **[PR #3427](https://github.com/nanocoai/nanoclaw/pull/3427)** — *fix(agent-runner): tell the agent send_card drops callback actions* — Closed. Paired with issue #3426; the bridge was silently dropping callback actions without `url`, and agents were blaming the platform. This fix aligns the tool's documented behavior with actual bridge capabilities.
- **1 additional PR** closed today (outside top-20 comment count).

**Notable open PRs advancing features:**

- **[PR #3713](https://github.com/nanocoai/nanoclaw/pull/3713)** — Per-agent-group delivery mode recording (column + plumbing only; not yet read).
- **[PR #3462](https://github.com/nanocoai/nanoclaw/pull/3462)** — Guards `send_message` against double-delivery of content already handled by the mid-turn block door (relates to #2404).
- **[PR #3711](https://github.com/nanocoai/nanoclaw/pull/3711)** — Defers expensive inbound content resolution (network fetches, downloads) until an agent will actually consume it, avoiding wasted work for messages routed to inactive chats.
- **[PR #3712](https://github.com/nanocoai/nanoclaw/pull/3712)** — Fixes WhatsApp inbound: reads document captions and stops downloading unwanted media. Depends on #3711.
- **[PR #3708](https://github.com/nanocoai/nanoclaw/pull/3708)** — Fixes SQLite PRAGMA ordering (`busy_timeout` before `journal_mode`) to prevent exclusive-lock contention on outbound DB opens.
- **[PR #3707](https://github.com/nanocoai/nanoclaw/pull/3707)** — Adds `registerAdmissionGate` poll-loop seam for extensible admission control.
- **[PR #3581–#3591](https://github.com/nanocoai/nanoclaw/pulls?q=is%3Apr+base%3Amaster+is%3Aopen+author%3Azvi-fried)** — Large provider contract refactor wave (5 PRs): declaring runtime, host, setup, and canon-instruction contracts, plus implementations for Codex and OpenCode providers.

## 4. Community Hot Topics

**Most-discussed open issues:**

- **[Issue #3706](https://github.com/nanocoai/nanoclaw/issues/3706)** — `ncl groups config add-mount --container` silently produces a broken double-nested path when given an absolute path. Author: DawoudIO. Reflects a UX gap: the CLI help text promises "a container path" with no constraint, but absolute paths break internally. Users expect natural path semantics.
- **[Issue #3709](https://github.com/nanocoai/nanoclaw/issues/3709)** — Mailbox SQLite tests use a fixed `/tmp` fixture root, causing concurrent `vitest` runs to delete each other's databases. Author: davekim917. Signals growing multi-worktree / CI concurrency usage.
- **[Issue #3705](https://github.com/nanocoai/nanoclaw/issues/3705)** — `ncl tasks update --recurrence` doesn't recompute `process_after`; switching from weekly to daily leaves the old schedule. Author: DawoudIO. A functional bug affecting task reliability.
- **[Issue #3704](https://github.com/nanocoai/nanoclaw/issues/3704)** — Request for a protected session-assembly hook on `SqliteAgentMailbox` to enable fork-level subclassing. Author: davekim917. Shows power-user customization demand.
- **[Issue #3701](https://github.com/nanocoai/nanoclaw/issues/3701)** — Request for gateway-declared credential lanes in `validateSpec` for per-group credential injection. Author: davekim917. Driven by a 24-agent-group production deployment using OneCLI.

**Underlying need:** The community is pushing NanoClaw toward multi-tenant, multi-provider, forkable deployments. Issues #3704 and #3701 both come from the same maintainer running a large-scale forked deployment and seeking upstream seams rather than forking internals.

## 5. Bugs & Stability

| Severity | Item | Description | Fix PR? |
|----------|------|-------------|---------|
| **High** | [#3426](https://github.com/nanocoai/nanoclaw/issues/3426) / [#3427](https://github.com/nanocoai/nanoclaw/pull/3427) | `send_card` promises callback buttons the bridge silently drops; agents report platform incompatibility incorrectly. | ✅ Merged (#3427) |
| **High** | [#3705](https://github.com/nanocoai/nanoclaw/issues/3705) | `ncl tasks update --recurrence` fails to recompute next fire time — tasks stick to old schedule after cadence change. | ❌ None yet |
| **Medium** | [#3706](https://github.com/nanocoai/nanoclaw/issues/3706) | Absolute `--container` paths in `add-mount` produce broken double-nested paths. | ❌ None yet |
| **Medium** | [#3462](https://github.com/nanocoai/nanoclaw/pull/3462) | Double-delivery of `<message to="...">` content mid-turn (same class as #2404). | 🔄 Open PR #3462 |
| **Medium** | [#3708](https://github.com/nanocoai/nanoclaw/pull/3708) | SQLite `journal_mode` set before `busy_timeout` causes exclusive-lock contention on outbound DB. | 🔄 Open PR #3708 |
| **Low** | [#3709](https://github.com/nanocoai/nanoclaw/issues/3709) | Test fixture collision in concurrent vitest runs (fixed-path `/tmp`). | ❌ None yet |
| **Low** | [#3710](https://github.com/nanocoai/nanoclaw/pull/3710) | `pnpm test` leaves ~355 temp directories unreclaimed. | 🔄 Open PR #3710 |

**Notable closed bug:** The `send_card` / callback action mismatch (#3426 → #3427) is resolved. The `<internal>` thinking block leakage (#3126) is also resolved.

## 6. Feature Requests & Roadmap Signals

**Active feature PRs likely targeting the next release:**

- **[PR #3713](https://github.com/nanocoai/nanoclaw/pull/3713)** — Per-agent-group delivery mode (envelope vs. outbound tools). Plumbing only today; reads pending. Likely in next release if the read-side lands.
- **[PR #3592](https://github.com/nanocoai/nanoclaw/pull/3592)** — Core-owned `speed` inference property alongside `model` and `effort`. CLI + provider vocabulary. Strong signal for a "performance tier" feature.
- **[PR #3707](https://github.com/nanocoai/nanoclaw/pull/3707)** — `registerAdmissionGate` poll-loop seam. Extensibility feature for custom admission logic.
- **[PR #2003](https://github.com/nanocoai/nanoclaw/pull/2003)** — Voice transcription V2 (container-side, sovereign by default). Long-open but resubmitted; indicates ongoing voice input demand.
- **[PR #3356](https://github.com/nanocoai/nanoclaw/pull/3356)** + **[PR #3355](https://github.com/nanocoai/nanoclaw/pull/3355)** — Cursor Agent SDK provider. New provider integration.
- **[PR #3288](https://github.com/nanocoai/nanoclaw/pull/3288)** — `/add-clawmetry` operational skill for a local session dashboard. Community-contributed observability.

**Roadmap prediction:** The next release will likely include the provider contract refactor results (Codex, OpenCode, Cursor), the `speed` property, and the delivery-mode plumbing. The admission-gate seam and voice transcription V2 are plausible but may extend further out.

## 7. User Feedback Summary

- **Frustration with path handling:** Issue #3706 highlights that natural CLI usage (absolute container paths) silently corrupts state. Users expect path arguments to behave predictably.
- **Schedule reliability concerns:** Issue #3705 — changing task recurrence doesn't update the next fire time. Users deploying automated agent workflows need predictable scheduling.
- **Multi-provider ambition:** The large refactor wave (PRs #3581–#3591) plus new Cursor/Codex/OpenCode providers shows users and contributors want NanoClaw to be a universal agent orchestration layer, not Claude-specific.
- **Concurrency and test hygiene:** Issue #3709 and PR #3710 reveal that power users run concurrent test suites and multiple worktrees — the project needs to support CI-heavy and multi-environment workflows.
- **Fork extensibility demand:** Issues #3704 and #3701 from davekim917 reflect a user running 24 agent groups who needs clean extension points (protected hooks, credential lanes) rather than invasive forking.
- **WhatsApp quality of life:** PR #3712 addresses document caption reading and unnecessary media downloads — users want WhatsApp as a practical messaging channel, not just a proof-of-concept.

## 8. Backlog Watch

| Item | Age | Concern |
|------|-----|---------|
| **[PR #2003](https://github.com/nanocoai/nanoclaw/pull/2003)** — Voice transcription V2 | Open since 2026-04-25 (~4 months) | Resubmitted after prior closure; still awaiting maintainer merge review. |
| **[Issue #3701](https://github.com/nanocoai/nanoclaw/issues/3701)** — Gateway credential lanes | Open 2 days | Same author as #3704; both are extension-seam requests from a production fork maintainer. Worth upstreaming to reduce fork divergence. |
| **[Issue #3704](https://github.com/nanocoai/nanoclaw/issues/3704)** — Protected session-assembly hook | Open 2 days | See above. |
| **[Issue #3705](https://github.com/nanocoai/nanoclaw/issues/3705)** — Task recurrence recompute bug | Open 2 days | No fix PR yet; functional regression affecting scheduled agents. |
| **[Issue #3706](https://github.com/nanocoai/nanoclaw/issues/3706)** — Double-nested mount path | Open 2 days | No fix PR yet; CLI usability bug. |
| **[PR #3288](https://github.com/nanocoai/nanoclaw/pull/3288)** — `/add-clawmetry` skill | Open ~18 days | Community skill PR; needs review to assess maintenance burden vs. value. |
| **[PR #3713](https://github.com/nanocoai/nanoclaw/pull/3713)** — Delivery mode plumbing | Open <1 day | Column + plumbing only; needs read-side before usable. Monitor for follow-up. |

---

**Project Health Score: 🟢 Active & Healthy** — High PR throughput, clear thematic focus on provider contracts and agent-runner stability, responsive bug closure (2 critical bugs resolved today). Key risk: a cluster of open issues from a power-user fork maintainer (#3701, #3704) that, if unaddressed, could increase fork divergence.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



# IronClaw Project Digest — 2026-09-04

## 1. Today's Overview

IronClaw shows strong mid-sprint activity with **6 open issues** and **17 PRs** touched in the last 24 hours, 11 of which have been merged or closed. The dominant theme is **TypeScript hardening of the WebUI v2**—a trio of linked issues closed today systematically removed `@ts-nocheck` from production components, test infrastructure, and hooks, while introducing a CI ratchet to prevent regressions. A separate but equally active track is **prompt context budgeting and LLM transport correctness**, with new issues and open PRs targeting model-window-aware budget derivation and cache-gate fixes for emerging Claude families. No new releases were published today, suggesting the team is still stabilizing ahead of the next cut.

---

## 2. Releases

No new releases published in the last 24 hours.

---

## 3. Project Progress

### Merged / Closed PRs (11)

| PR | Summary |
|----|---------|
| [#8037](https://github.com/nearai/ironclaw/pull/8037) | Ratchet TypeScript suppressions—40 redundant `@ts-nocheck` directives removed from WebUI v2; baseline committed; CI now rejects new `@ts-nocheck`/`@ts-ignore`. |
| [#8038](https://github.com/nearai/ironclaw/pull/8038) | Type and validate frontend API boundaries—typed decoders for device-link, pairing, notifications, suggestions, projects, settings, workspace. |
| [#8039](https://github.com/nearai/ironclaw/pull/8039) | Type 64 production components/hooks/pages—React Query, outlet context, DOM, auth payload types added. |
| [#8040](https://github.com/nearai/ironclaw/pull/8040) | Type frontend test infrastructure—94 test-side `@ts-nocheck` removed; typed mocks, VM exports, synthetic JSX helpers centralized. |
| [#8043](https://github.com/nearai/ironclaw/pull/8043) | **Perf:** Coalesce streamed text updates instead of O(N·k) re-sanitization per delta; regression test included. |
| [#8044](https://github.com/nearai/ironclaw/pull/8046) | **Feat:** Subagent approval/auth gate now surfaces to the owner's inbox (R3 slice 3a). |
| [#8055](https://github.com/nearai/ironclaw/pull/8055) | Fix broken `main`: sidebar trace credits card asset test was panicking due to a stale import path. |
| [#8058](https://github.com/nearai/ironclaw/pull/8058) | Fix `api-boundary.test.ts` to use the live extension ID instead of the retired `"web-push"` spelling. |
| [#7984](https://github.com/nearai/ironclaw/pull/7984) | Size `tool_search` replies to the model's first-look envelope instead of an independent budget. |
| [#8051](https://github.com/nearai/ironclaw/pull/8051) | Fix progressive reply concatenation—the answer is now the **current** model call's text only; earlier calls are treated as narration. |
| [#8045](https://github.com/nearai/ironclaw/pull/8045) | Smoke-test reliability: CLI listener readiness now requires an actual TCP connection after the serve banner. |

### Key Advances
- **WebUI v2 type safety** is effectively complete for production and test code, with a preventative CI ratchet in place.
- **Streaming perf** gets a measurable win by avoiding full-text re-sanitization on every delta.
- **Slack/Telegram reply fidelity** is fixed: users will no longer see prior model calls appended as "narration."
- **Subagent observability** improves—blocked children now surface through the owner inbox.

---

## 4. Community Hot Topics

### Top Issues by Engagement

1. **[#8009](https://github.com/nearai/ironclaw/issues/8009)** — *MCP egress errors flatten to "response_error"* (1 comment)
   - Hosted-MCP discovery failures collapse to a single opaque token, making diagnostics impossible. Highlights a gap in error telemetry for the MCP transport layer.

2. **[#8057](https://github.com/nearai/ironclaw/issues/8057)** — *Prompt budget should account for non-transcript material* (0 comments, filed same day)
   - Identity, skills, tool schemas, and channel context are assembled **on top of** the transcript budget without reducing it, causing over-budget requests. Paired with open PR [#8053](https://github.com/nearai/ironclaw/pull/8053), which derives the budget from the model's advertised window.

3. **[#8052](https://github.com/nearai/ironclaw/issues/8052)** — *Daily failure taxonomy — 2026-09-03*
   - Automated benchmark analysis shows all 63 non-passes on `officeqa` are genuine model-quality errors from `deepseek-v4-flash` over OCR'd Treasury Bulletins—no infrastructure faults detected.

### Underlying Signals
- **Error visibility** is a recurring theme: both issue #8009 (MCP errors) and the open PR #8059 (cancel-response reason mismatch) point to friction in diagnosing runtime failures.
- **Budget accuracy** is being actively addressed (PR #8053 → Issue #8057), indicating the team is closing the loop on context-window awareness.
- **Benchmarks are healthy**—failures are model-quality, not system bugs.

---

## 5. Bugs & Stability

| Severity | Item | Link | Fix Status |
|----------|------|------|------------|
| **High** | Progressive reply concatenation—Slack/Telegram surfaces prior model calls as part of the answer | [#8051](https://github.com/nearai/ironclaw/pull/8051) | ✅ Merged |
| **Medium** | Cancel endpoint returns `400 invalid_request` in all states; run continues despite cancel request | [#8059](https://github.com/nearai/ironclaw/pull/8059) | 🔄 Open PR |
| **Medium** | Malformed embedded tool-result text can panic on JSON delimiter edge cases | [#8056](https://github.com/nearai/ironclaw/pull/8056) | 🔄 Open PR |
| **Medium** | MCP egress errors lose diagnostic detail (flattened to `"response_error"`) | [#8009](https://github.com/nearai/ironclaw/issues/8009) | 📋 No fix yet |
| **Low** | `tool_search` replies could exceed model envelope (16 KB → 857 B effective) | [#7984](https://github.com/nearai/ironclaw/pull/7984) | ✅ Merged |
| **Low** | Smoke tests flaked due to premature readiness detection | [#8045](https://github.com/nearai/ironclaw/pull/8045) | ✅ Merged |
| **Low** | Stale extension ID spelling broke `main` branch tests | [#8058](https://github.com/nearai/ironclaw/pull/8058) | ✅ Merged |

**Regression note:** PR #8055 unblocked every open PR by fixing a panic in the WebUI asset test introduced by commit `666ebcbf08`.

---

## 6. Feature Requests & Roadmap Signals

| Request | Link | Likelihood in Next Release |
|---------|------|---------------------------|
| Derive prompt context budget from model's advertised window (90% heuristic) | [#8053](https://github.com/nearai/ironclaw/pull/8053) | **High** — already in review; directly addresses #8057 |
| Subagent approval/auth gates visible to owner inbox | [#8046](https://github.com/nearai/ironclaw/pull/8046) | **High** — merged; part of R3 slice 3a |
| Cache-gate new Claude families by denylist; send `prompt_cache_key` on OpenAI Responses | [#8044](https://github.com/nearai/ironclaw/pull/8044) | **Medium** — open; covers `claude-fable-*`, `claude-mythos-*` families |
| Envelope-sized `tool_search` replies | [#7984](https://github.com/nearai/ironclaw/pull/7984) | **High** — merged; sets precedent for reply-size-aware tooling |

**Roadmap takeaway:** The team is clearly progressing through an R3 slice focused on **observability, budget accuracy, and multi-agent coordination**. Expect the next release to emphasize subagent lifecycle management and context-window-aware routing.

---

## 7. User Feedback Summary

- **Pain point — opaque MCP errors:** Users cannot diagnose why hosted MCP discovery fails because `mcp_http_error` collapses all `RuntimeHttpEgressError` variants into `"response_error"` with no byte counts or underlying reason. ([#8009](https://github.com/nearai/ironclaw/issues/8009))
- **Pain point — over-budget requests:** Identity, skills, tool schemas, and channel context are layered on top of the transcript budget rather than competing for it, leading to provider-side rejections. ([#8057](https://github.com/nearai/ironclaw/issues/8057))
- **Pain point — canceled runs not actually canceling:** The `POST /api/v1/responses/{id}/cancel` endpoint rejects every call with `400`, so runs persist despite explicit cancellation. ([#8059](https://github.com/nearai/ironclaw/pull/8059))
- **Satisfaction signal — reply quality improved:** The fix for progressive reply concatenation ([#8051](https://github.com/nearai/ironclaw/pull/8051)) directly addresses a user-facing quality issue where Slack/Telegram answers included irrelevant prior model narration.
- **Satisfaction signal — benchmark fidelity:** The daily taxonomy (#8052) confirms that current failures are model-quality, not infrastructure, which is positive for users relying on IronClaw for production automation.

---

## 8. Backlog Watch

| Item | Days Open | Risk |
|------|-----------|------|
| [#8009](https://github.com/nearai/ironclaw/issues/8009) — MCP egress error flattening | 4 days | High diagnostic impact; no fix PR yet |
| [#8044](https://github.com/nearai/ironclaw/pull/8044) — Cache-gate new Claude families | 3 days (open) | Medium; blocks prompt caching on newer Anthropic models |
| [#8056](https://github.com/nearai/ironclaw/pull/8056) — Malformed tool-result panic | 2 days (open) | Medium; edge-case crash in host API |
| [#8059](https://github.com/nearai/ironclaw/pull/8059) — Cancel endpoint 400 | 2 days (open) | Medium; user-visible broken cancel flow |
| [#8053](https://github.com/nearai/ironclaw/pull/8053) — Budget from advertised window | 2 days (open) | Low; already paired with an issue, likely to merge soon |
| [#8054](https://github.com/nearai/ironclaw/pull/8054) — Pairing check before command admission | 2 days (open) | Low; UX fix for unpaired Telegram users |

**Maintainer attention recommended:** Issue #8009 has no linked PR and blocks diagnosticability for MCP-based integrations—a growing surface area. PR #8044 and #8056 are open with low risk and would clear two stabilization items.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



# LobsterAI Project Digest — 2026‑09‑04

## 1. Today's Overview
LobsterAI shows steady daily activity with **6 issues updated** (4 open/active, 2 closed) and **14 pull requests updated** (5 open, 9 merged/closed) in the last 24 hours. No new releases were shipped today. The most active work focuses on Windows installer fixes, documentation updates, removal of the dsh MCP delegation, and restoration of the in‑app browser. Several long‑standing concurrency and prefetch bugs remain open, indicating ongoing stability challenges in the Cowork and OpenClaw runtime paths.

## 2. Releases
*No new releases published today.*

## 3. Project Progress
**Merged/Closed Pull Requests (today):**

| PR | Area | Summary |
|----|------|---------|
| [#2608](https://github.com/netease-youdao/LobsterAI/pull/2608) | docs, main | Removed dsh MCP delegation documentation. |
| [#2605](https://github.com/netease-youdao/LobsterAI/pull/2605) | windows | Fixed blurry icons on Windows by declaring DPI awareness. |
| [#2606](https://github.com/netease-youdao/LobsterAI/pull/2606) | docs, windows | Hidden console windows for helper processes on Windows. |
| [#2607](https://github.com/netease-youdao/LobsterAI/pull/2607) | build, openclaw | Stopped peer‑install from bloating the plugin bundle; removed dshCodeMcpServer and dshSessionClient. |
| [#2604](https://github.com/netease-youdao/LobsterAI/pull/2604) | renderer, cowork | Dimmed exhausted voice‑input button while keeping it clickable for quota prompts. |
| [#2603](https://github.com/netease-youdao/LobsterAI/pull/2603) | renderer | Refined Chinese voice‑quota exhausted copy to use free‑trial subscription wording. |
| [#2602](https://github.com/netease-youdao/LobsterAI/pull/2602) | renderer, main, openclaw, cowork, artifacts | Restored interactive in‑app Agent Browser, MCP bridge, persistent profile, and encrypted credential handling. |
| [#2600](https://github.com/netease-youdao/LobsterAI/pull/2600) | renderer, docs, main, cowork, im, windows, artifacts | Released version **2026.8.31** (first‑run experience, Library browsing improvements, video‑sharing support, login/quota messaging, Windows installer recovery). |
| [#2599](https://github.com/netease-youdao/LobsterAI/pull/2599) | renderer, im | Improved bot‑card layout: limited multi‑instance cards to two responsive columns, centered content vertically. |

**Key advances:**  
- Windows UX polish (DPI awareness, hidden console windows, installer recovery).  
- Removal of dsh MCP delegation and related bloat.  
- Restoration of the in‑app browser and its credential/MCP bridge.  
- Voice‑input quota UX refinements.  
- IM bot‑card layout adjustments.

## 4. Community Hot Topics
**Most discussed open issues (by comment count):**

| Issue | Comments | Topic |
|-------|----------|-------|
| [#1556](https://github.com/netease-youdao/LobsterAI/issues/1556) | 3 | IM configuration guide returns 404. |
| [#1552](https://github.com/netease-youdao/LobsterAI/issues/1552) | 2 | AI artifact Markdown preview & file‑card support (closed as feature request). |

**Underlying needs:**  
- **#1556:** Documentation maintenance is critical for IM bot adoption; a broken guide blocks onboarding.  
- **#1552:** Users want richer file‑handling feedback after Agent Write operations—direct in‑app preview and FileCards improve workflow continuity for writing, documentation, and code‑generation tasks.

**Notable open PRs awaiting review:**  
- [#1078](https://github.com/netease-youdao/LobsterAI/pull/1078) – Scheduled‑task failure alerts to IM.  
- [#1079](https://github.com/netease-youdao/LobsterAI/pull/1079) – Cowork “Current Process” side panel with tool logs and diff view.  
- [#1081](https://github.com/netease-youdao/LobsterAI/pull/1081) – MCP sync i18n completion and scroll‑bar rounding fix.  
- [#1087](https://github.com/netease-youdao/LobsterAI/pull/1087) – Fix duplicate error messages on `continueSession` failure.

## 5. Bugs & Stability
**Reported bugs (ranked by severity):**

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **High** | [#1089](https://github.com/netease-youdao/LobsterAI/issues/1089) | `CoworkRunner.startSession()/continueSession()` lack per‑session re‑entrancy protection; concurrent IPC calls corrupt stream and duplicate messages. | [#1087](https://github.com/netease-youdao/LobsterAI/pull/1087) addresses duplicate‑message symptom but not the root concurrency gap. |
| **Medium** | [#1088](https://github.com/netease-youdao/LobsterAI/issues/1088) | Prefetch async callback does not validate `turnToken`; old callbacks can overwrite newer turns, causing cross‑turn message pollution. | No fix PR yet. |
| **Low** | [#1556](https://github.com/netease-youdao/LobsterAI/issues/1556) | IM configuration guide URL returns 404. | Maintenance fix needed. |

**Regression risk:** The restored in‑app browser ([#2602](https://github.com/netease-youdao/LobsterAI/pull/2602)) may introduce credential‑handling edge cases; monitoring is advised.

## 6. Feature Requests & Roadmap Signals
**Open feature requests (by comment/activity):**

| Issue/PR | Request | Likelihood for Next Release |
|----------|---------|-----------------------------|
| [#2601](https://github.com/netease-youdao/LobsterAI/issues/2601) | Render MCP Apps / Prefab UI (interactive HTML via `ui://` resources) in desktop client. | Medium – depends on security and sandboxing evaluation. |
| [#1078](https://github.com/netease-youdao/LobsterAI/pull/1078) | Push IM notification when scheduled tasks fail. | High – directly addresses observable feedback gap; PR is ready for review. |
| [#1079](https://github.com/netease-youdao/LobsterAI/pull/1079) | “Current Process” right‑panel showing tool execution logs and diff views. | Medium – larger UI component, may be deferred to a dedicated design sprint. |
| [#1552](https://github.com/netease-youdao/LobsterAI/issues/1552) | FileCard + Markdown preview after Write operations (closed as accepted). | Already incorporated into product vision; next release may ship a polished implementation. |

## 7. User Feedback Summary
**Pain points expressed:**  
- **Documentation breakage** – IM setup guide 404 blocks users trying to connect bots.  
- **Version compatibility anxiety** – Issue [#1082](https://github.com/netease-youdao/LobsterAI/issues/1082) highlights concern that `openclaw.version v2026.3.2` may not satisfy national cybersecurity update requirements.  
- **Concurrency bugs** – Users experience corrupted streams and duplicate messages during rapid IM or chat input (issues #1088, #1089).  
- **Voice‑quota UX** – Existing quota‑exhaustion messaging was unclear; recent PRs (#2603, #2604) refine the copy and visual state.  
- **Workflow gaps** – Lack of immediate file‑preview after Agent writes and missing failure notifications for cron jobs reduce productivity.

**Satisfaction signals:**  
- Positive response to Windows installer improvements and clearer login/quota messaging in the 2026.8.31 release.  
- Community contributions (PRs #1078, #1079, #1081, #1087) show active engagement and willingness to fill feature gaps.

## 8. Backlog Watch
**Stale, important items requiring maintainer attention:**

| Item | Open Since | Last Activity | Reason for Attention |
|------|------------|---------------|----------------------|
| [#1082](https://github.com/netease-youdao/LobsterAI/issues/1082) | 2026‑03‑30 | 2026‑09‑03 | Version‑compatibility question with regulatory implications. |
| [#1088](https://github.com/netease-youdao/LobsterAI/issues/1088) | 2026‑03‑31 | 2026‑09‑03 | High‑severity prefetch race condition; no fix yet. |
| [#1089](https://github.com/netease-youdao/LobsterAI/issues/1089) | 2026‑03‑31 | 2026‑09‑03 | Concurrency bug causing stream corruption; only partial fix in #1087. |
| [#1078](https://github.com/netease-youdao/LobsterAI/pull/1078) | 2026‑03‑30 | 2026‑09‑03 | Ready‑for‑merge feature PR for scheduled‑task failure alerts. |
| [#1079](https://github.com/netease-youdao/LobsterAI/pull/1079) | 2026‑03‑30 | 2026‑09‑03 | Large UI PR (ProgressPanel) awaiting review/merge. |
| [#1081](https://github.com/netease-youdao/LobsterAI/pull/1081) | 2026‑03‑30 | 2026‑09‑03 | i18n and visual‑bug fix PR for MCP sync. |
| [#1087](https://github.com/netease-youdao/LobsterAI/pull/1087) | 2026‑03‑31 | 2026‑09‑03 | Fixes duplicate‑error symptom of #1089; needs follow‑up for root cause. |
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | 2026‑04‑02 | 2026‑09‑03 | Dependabot bump of Electron 40→44; may require migration testing. |

**Recommendation:** Prioritize closing the stale concurrency bugs (#1088, #1089) and merging the three feature/fix PRs (#1078, #1081, #1087) to reduce technical debt and improve stability for the next release cycle.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>



# Moltis Project Digest — 2026-09-04

## 1. Today's Overview

Moltis recorded low but steady activity on 2026-09-04, with one open pull request in progress and no new issues or releases filed within the past 24 hours. No closed issues or merged PRs were completed today, indicating a quiet maintenance cycle rather than a major release push. The project appears to be in a steady development phase, with ongoing work on hook lifecycle improvements led by contributor GTanger.

## 2. Releases

No new releases were published today. The project has no recent version updates to report.

## 3. Project Progress

- **PR #1257** ([OPEN](https://github.com/moltis-org/moltis/pull/1257)) — *fix(hooks): complete lifecycle dispatch* — This is the sole active development item. The PR extends Moltis's hook system by:
  - Adding an optional `tool_call_id` to `BeforeToolCall`, `AfterToolCall`, and `ToolResultPersist` events, enabling end-to-end correlation of individual tool invocations while preserving backward compatibility with the existing JSON payload shape.
  - Dispatching previously undeclared lifecycle events (`AgentEnd`, `MessageSending`, `MessageSent`) for native non-streaming message flows.

  This PR represents meaningful progress on observability and hook completeness — a core extensibility surface for the framework. No PRs were merged or closed today.

## 4. Community Hot Topics

- **PR #1257** ([link](https://github.com/moltis-org/moltis/pull/1257)) — Currently the most discussed open item, though it has not yet accumulated comments or reactions. The underlying community need it addresses is clear: developers building agents on Moltis require reliable, correlated hook events to trace tool call execution and message lifecycle for debugging, logging, and auditing purposes. The addition of `tool_call_id` specifically signals demand for per-invocation telemetry rather than aggregate event streams.

No open issues were filed or updated today to compete for attention.

## 5. Bugs & Stability

No new bugs, crashes, or regressions were reported today. The single active PR (#1257) is framed as a *fix* for incomplete lifecycle dispatch, suggesting the existing gap in `AgentEnd`, `MessageSending`, and `MessageSent` events was recognized as a deficiency — potentially affecting users who rely on those hooks for agent completion detection. No additional stability concerns were raised.

## 6. Feature Requests & Roadmap Signals

- The `tool_call_id` correlation feature in PR #1257 signals that **per-tool-call observability** is a prioritized capability. Future roadmap items likely to follow include:
  - Structured tracing/middleware support built on top of the enhanced hook IDs.
  - Potential stream-mode parity for the same lifecycle events (the current PR notes it covers *non-streaming* paths).
- No explicit feature request issues were opened today.

## 7. User Feedback Summary

No new user feedback (issues or comments) was recorded in the last 24 hours. Based on the scope of PR #1257, the active contributor base is focused on **framework reliability and observability** — a sign of maturing usage patterns where early adopters are building production agent workflows that depend on consistent hook delivery. The absence of complaint-laden issues suggests current satisfaction with core stability.

## 8. Backlog Watch

- **PR #1257** has been open since 2026-09-02 with the last update on 2026-09-03. It is awaiting review/merge and represents the most important pending item. Maintainers should prioritize reviewing this PR, as its changes touch foundational lifecycle behavior that downstream consumers will depend on.

No long-unanswered critical issues were identified in today's data snapshot.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>



# CoPaw Project Digest — 2026-09-04

## 1. Today's Overview

CoPaw is in an active release cycle around **v2.2.0**, which shipped as stable today. The project saw **31 issues** and **27 PRs** updated in the last 24 hours, with 23 open issues and 18 open PRs still in flight. Activity is high: the team is simultaneously stabilizing the new v2.2.0 release, shipping security fixes, and advancing multi-user and mobile capabilities. The velocity is strong and the maintainer team is responsive, with most issues receiving comments within hours of filing.

---

## 2. Releases

### v2.2.0 (Stable)
- **New: QwenPaw Hub** — Self-hosted multi-tenant deployment with local-process or Docker runtimes, workspace-level access controls, credential management, and reverse-proxy support ([#7112](https://github.com/agentscope-ai/QwenPaw/pull/7112)).
- Version bump to **2.2.1b1** was also prepared ([PR #7522](https://github.com/agentscope-ai/QwenPaw/pull/7522), closed).
- Migration: `ModelInfo.max_tokens` → `max_output_length` (note: broke custom providers; see [Issue #7474](https://github.com/agentscope-ai/QwenPaw/issues/7474)).

No explicit breaking-change migration guide was published alongside the release. Users upgrading from v2.1.x may encounter the `max_tokens` deprecation and should update their custom provider configs.

---

## 3. Project Progress

### Merged / Closed Today
| # | Type | Summary | Link |
|---|------|---------|------|
| #7515 | Release | v2.2.0 installation verification passed | [PR](https://github.com/agentscope-ai/QwenPaw/pull/7515) |
| #7522 | Chore | Bump version to 2.2.1b1 | [PR](https://github.com/agentscope-ai/QwenPaw/pull/7522) |
| #7441 | Feature | ReMe Auto Fin added; ReMe upgraded to 0.4.1.11 | [PR](https://github.com/agentscope-ai/QwenPaw/pull/7441) |
| #7523 | Fix | Sync resolved sessions during streaming; enables conversation switching mid-generation | [PR](https://github.com/agentscope-ai/QwenPaw/pull/7523) |
| #7267 | Fix | Portable channel contract checks for non-UTF-8 Windows locales | [PR](https://github.com/agentscope-ai/QwenPaw/pull/7267) |
| #7493 | Bug | Console model-routing panel unreachable — closed | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7493) |
| #7518 | Feature | Remote WebUI first-load speed improvement — closed | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7518) |
| #7528 | Bug | Deprecated (closed) | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7528) |
| #7467 | Bug | loop.rubric auto-fold hiding first response — closed | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7467) |
| #7512 | Bug | Session switching blocked during generation — closed | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7512) |

### Notable Open PRs
- [#7539](https://github.com/agentscope-ai/QwenPaw/pull/7539) — **Playwright Chromium lazy-load**: removes 60s startup block by deferring managed browser install until first `Browser.connect()` call.
- [#7538](https://github.com/agentscope-ai/QwenPaw/pull/7538) — **Unified runtime env management**: consolidates env-var handling via `EnvVarLoader`, with QwenPaw-managed values overriding inherited system/env values.
- [#7526](https://github.com/agentscope-ai/QwenPaw/pull/7526) — **Protected execution contract**: adds clarification and authorization gates ahead of workspace prompt files; moves skill/edit/tool-use guidance into dedicated prompt module.
- [#7536](https://github.com/agentscope-ai/QwenPaw/pull/7536) — **OpenCode API header fix**: adds required `x-opencode-session` header to resolve 2026-09-06 enforcement.
- [#7530](https://github.com/agentscope-ai/QwenPaw/pull/7530) — **Console test coverage**: +245 unit-test cases, +5.02pp statement coverage.
- [#7509](https://github.com/agentscope-ai/QwenPaw/pull/7509) — **Make-Skill v2**: approval-driven draft-then-publish workflow for reusable Skills.
- [#7378](https://github.com/agentscope-ai/QwenPaw/pull/7378) — **QwenPaw Mobile**: Expo/React Native app with native Chats, Agents, Community, and Workbench surfaces (draft).
- [#6960](https://github.com/agentscope-ai/QwenPaw/pull/6960) — **PwPort import flow**: import instructions, settings, skills, plugins, projects, and recent work from Codex and Qoder.
- [#7080](https://github.com/agentscope-ai/QwenPaw/pull/7080) — **PowerContext memory backend**: optional long-term memory provider registered via `BaseMemoryManager`.
- [#7401](https://github.com/agentscope-ai/QwenPaw/pull/7401) — **Windows ACP agent stall fix**: prevents event-loop freeze during synchronous `bootstrap_plugins()`.
- [#7486](https://github.com/agentscope-ai/QwenPaw/pull/7486) — **Creator 1.1.2**: runtime notification bus, async delegation, multi-timeline A/B compare, T2V/I2V/S2V scheduling.
- [#7525](https://github.com/agentscope-ai/QwenPaw/pull/7525) — **Governance hardening**: requires human approval for non-auto-denied CRITICAL findings.

---

## 4. Community Hot Topics

| # | Title | Comments | 👍 | Link |
|---|-------|----------|-----|------|
| #7318 | QwenPaw Hub multi-tenant roadmap: what should we build next? | 16 | 3 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7318) |
| #7511 | Security sandbox breach | 9 | 0 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7511) |
| #7450 | Main agent not proactively querying sub-agent status | 7 | 0 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7450) |
| #4036 | Adding a model requires too many steps | 6 | 0 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/4036) |
| #7443 | Dangerous instructions can evade sandbox | 6 | 0 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7443) |

**Analysis:** The community is heavily focused on **security and multi-user capabilities** (#7318, #7511, #7443). The #7318 discussion signals that the Hub launch has opened a broader conversation about collaborative features. The sandbox breach (#7511) and instruction-evasion issue (#7443) both come from the same author and reference Zhihu posts, suggesting external security researchers are actively auditing QwenPaw — a sign of growing production adoption. The long-standing UX pain point around model addition (#4036, open since May) remains unresolved.

---

## 5. Bugs & Stability

| Severity | # | Summary | Status | Fix PR | Link |
|----------|---|---------|--------|--------|------|
| 🔴 Critical | #7511 | Security sandbox breached | Open | — | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7511) |
| 🔴 Critical | #7443 | Dangerous instructions evade sandbox | Open | — | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7443) |
| 🟠 High | #7534 | Feishu session consumer stuck; session silently unresponsive | Open | — | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7534) |
| 🟠 High | #7476 | Cron tasks double-scheduled within `misfire_grace` window | Open | — | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7476) |
| 🟠 High | #7505 | LAN LLM server frequent client disconnects → timeouts | Open | — | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7505) |
| 🟡 Medium | #7510 | `/memory/status` returns 500 on v2.2.0-beta.7 Desktop | Open | — | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7510) |
| 🟡 Medium | #7431 | Codex harness returns empty responses via non-streaming backends | Open | — | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7431) |
| 🟡 Medium | #7513 | DeepSeek-v4-pro tool calls mixed into conversation | Open | — | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7513) |
| 🟡 Medium | #7529 | Langfuse tool output blank after enablement | Open | [PR #7532](https://github.com/agentscope-ai/QwenPaw/pull/7532) | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7529) |
| 🟡 Medium | #7474 | Custom providers fail to load after `max_tokens`→`max_output_length` migration | Closed (by design) | — | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7474) |
| 🟢 Low | #7531 | OpenCode API now requires `x-opencode-session` header | Open | [PR #7536](https://github.com/agentscope-ai/QwenPaw/pull/7536) | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7531) |
| 🟢 Low | #7516 | WeCom cannot send base64 data-URL images | Open | — | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7516) |
| 🟢 Low | #7507 | WeCom streams character-by-character (150ms throttle) | Open | — | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7507) |
| 🟢 Low | #7467 | loop.rubric forced confirmation + auto-fold hides first response | Closed | — | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7467) |
| 🟢 Low | #7541 | Architectural issue: sessions blocked by channel type | Open | — | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7541) |

**Key concern:** Two critical-security issues (#7511, #7443) remain open without visible fix PRs. These were reported by a researcher publishing on Zhihu and could indicate real exploitation paths. The cron double-scheduling bug (#7476) and Feishu consumer stall (#7534) are high-severity reliability issues affecting production workloads.

---

## 6. Feature Requests & Roadmap Signals

| # | Title | Link |
|---|-------|------|
| #7318 | Multi-tenant Hub post-launch roadmap | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7318) |
| #7519 | Mobile remote desktop connection to QwenPaw Desktop | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7519) |
| #1775 | Codex-style steer mode (supplement info during execution) | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/1775) |
| #7540 | Config toggle to opt out of hardcoded "About" identity line | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7540) |
| #7535 | Matrix channel: Element compatibility (OIDC/MSC2965) | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7535) |
| #7533 | Message buttons / interactive reply options | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7533) |
| #7527 | Preserve agent persona during context compaction | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7527) |
| #7514 | Remote WebUI faster first-load (duplicate of #7518) | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7514) |

**Prediction for next release (2.2.1+):**
- **PwPort import flow** ([#6960](https://github.com/agentscope-ai/QwenPaw/pull/6960)) — strong community demand, already in review.
- **Protected execution contract** ([#7526](https://github.com/agentscope-ai/QwenPaw/pull/7526)) — directly addresses security concerns raised today.
- **Make-Skill v2** ([#7509](https://github.com/agentscope-ai/QwenPaw/pull/7509)) — improves developer ergonomics for Skill authoring.
- **Mobile app** ([#7378](https://github.com/agentscope-ai/QwenPaw/pull/7378)) — still draft but actively worked on; likely preview in 2.2.1.
- **OpenCode header fix** ([#7536](https://github.com/agentscope-ai/QwenPaw/pull/7536)) — must ship before 2026-09-06 enforcement.

---

## 7. User Feedback Summary

**Pain points:**
- **Security trust is fragile.** Two sandbox-breach reports from the same researcher in one day signal that power users are pushing QwenPaw into environments where isolation guarantees matter. The community is watching closely.
- **Sub-agent visibility.** Users running multi-agent tasks report silence during execution — the main agent only queries children when asked (#7450). This suggests the default orchestration strategy is too passive for complex workflows.
- **Channel reliability.** Feishu consumer stalls (#7534), WeCom streaming throttling (#7507), and WeCom image-base64 failures (#7516) indicate channel layers need more robust error handling and backpressure management.
- **LAN LLM instability.** Local/deployed LLM servers under QwenPaw are experiencing frequent disconnects and retries (#7505), likely a WebSocket or keepalive configuration issue.
- **Onboarding friction.** Adding models still requires too many clicks (#4036), a 4-month-old complaint with no resolution.

**Positive signals:**
- Session-switching during generation is now fixed (#7523, #7512 closed).
- Remote WebUI load-speed improvement shipped (#7518 closed).
- The multi-tenant Hub roadmap discussion (#7318) shows an engaged community that wants to co-shape the product.
- Import flows from Codex/Qoder (#6960) reduce switching costs for new users.

---

## 8. Backlog Watch

| # | Age | Summary | Why It Needs Attention | Link |
|---|-----|---------|----------------------|------|
| #4036 | ~4 months | Adding a model requires too many steps | High-frequency UX friction; no progress in months | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/4036) |
| #7511 | 1 day | Security sandbox breached | Critical; no fix PR yet; external publication risk | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7511) |
| #7443 | 4 days | Dangerous instructions evade sandbox | Critical; same author as #7511; no fix PR yet | [Issue](https://

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



# ZeroClaw Project Digest — 2026-09-04

---

## 1. Today's Overview

ZeroClaw shows high developmental activity with **50 issues** and **50 PRs** updated in the last 24 hours, though no new releases were published. The project is in a dense refinement phase: multiple security-related RFCs and design discussions are actively debated, several high-severity bugs were closed or moved toward resolution, and a wave of feature implementations (multi-session UI, A2A client, VoiceHost bridge) are in advanced review. The maintainer team, led by Audacity88 and JordanTheJet, is actively managing the RFC decision queue and CI improvements. Overall project health is strong — active contributor engagement, clear security focus, and steady feature velocity.

---

## 2. Releases

**No new releases** were published in the last 24 hours.

---

## 3. Project Progress

**Closed/Merged today (notable):**

- **#7543** — Multi-session support in the gateway web chat UI (session sidebar: new/switch/rename/delete) — *closed*, likely merged after extended review. This enables agents to hold multiple independent conversations, a long-requested UX improvement.
- **#9654** — Fixed: genuine operator denial was reaching the model as unstructured text — *closed*, sibling of #9642 and covered by PR #9423's scope.
- **#9231** — Docker runtime commands nested inside a second Docker sandbox — *closed*, addressing S1 workflow-blocked severity.
- **#10238** — ZeroCode stale "Connected" state after daemon exit — *closed*.
- **#9905** — Discord audio transcription manager not bound to active agent provider — *closed*.
- **#8518** — Discord-assisted issue triage through SOP approval — *closed*.
- **#9899** — Tracker for removing unmaintained `bitmaps` advisory waiver (RUSTSEC-2026-0247) — *closed*, indicating security debt is being addressed.
- **#9510** — CI guard against PRs with no common ancestor (blame-collapse prevention) — *closed*.

**Active PRs advancing features:**
- **#10607** — CI waste reduction and Blacksmith fork-PR canary (JordanTheJet, opened today).
- **#10529** — Anthropic thinking.display progress updates support — *closed*, likely merged.
- **#9739** — Multi-session panes with agent sidebar and sidebar-launched quickstart in ZeroCode (IftekharUddin, XL size).
- **#9740** — VoiceHost WebSocket bridge for external FunASR/SenseVoice audio hosts (LauraGPT).
- **#9324** — A2A outbound client with shared wire-model and tools (Phase 1 of RFC #9106).
- **#9986** — Portable agent bundle export (`zeroclaw agents export`) — (SheaHawkins).

---

## 4. Community Hot Topics

| Issue/PR | Comments | Focus |
|---|---|---|
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) — RFC: Granular sandbox policy / filesystem restrictions | 23 | Security architecture; aligning application-layer paths with OS sandbox backends (Bubblewrap, Landlock, Seatbelt) |
| [#9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) — Bug: verifiable-intent evaluates constraints without verifying the credential chain | 14 | Security/cryptographic verification gap in `vi_verify` |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) — Tracker: Maintainer decision queue for RFCs | 14 | Governance; coordinating RFC intake, voting, and architecture decisions |
| [#10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050) — RFC: Verbatim channel send over gateway without agent turn | 13 | Gateway API completeness; direct message passthrough |
| [#9975](https://github.com/zeroclaw-labs/zeroclaw/issues/9975) — RFC: Web bundle/daemon compatibility for `web_dist_dir` | 12 | Web dashboard deployment contract |
| [#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822) — RFC: WASM plugin lifecycle observer subscriptions | 12 | Plugin architecture extension (Observer capability) |

**Analysis:** Security and sandboxing dominate the top discussions. The granular filesystem policy RFC (#6996) reflects community demand for tighter agent isolation — a natural progression as ZeroClaw matures into production deployments. The verifiable-intent bug (#9328) highlights ongoing trust-chain concerns. The maintainer decision tracker (#8692) shows a healthy governance mechanism is in place and actively used.

---

## 5. Bugs & Stability

**High-severity bugs still open:**

| Issue | Severity | Summary | Fix PR? |
|---|---|---|---|
| [#10603](https://github.com/zeroclaw-labs/zeroclaw/issues/10603) | S1 — workflow blocked | OpenCode providers never send `x-opencode-session` header, breaking Go models and risking account flags | None yet |
| [#9899](https://github.com/zeroclaw-labs/zeroclaw/issues/9899) | P1 — tracker | `bitmaps 3.2.1` triggers RUSTSEC-2026-0247; security CI failing | Closed (tracker resolved) |
| [#9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) | P2/high risk | Verifiable-intent constraint evaluation without credential chain verification | None yet |
| [#10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068) | S2 — degraded | Interactive agent session caps context at 32K tokens, ignoring `max_context_tokens = 131072` | None yet |
| [#10486](https://github.com/zeroclaw-labs/zeroclaw/issues/10486) | S2 — degraded | Matrix channel ignores `[providers.transcription.*]` config | In progress |
| [#10202](https://github.com/zeroclaw-labs/zeroclaw/issues/10202) | P2/high risk | Log-based dependency records never reach tracing subscriber (no `log` bridge installed) | In progress |
| [#9387](https://github.com/zeroclaw-labs/zeroclaw/issues/9387) | P1/high risk | Interactive approval responses accepted from any chat member on Telegram/Slack/Lark/Matrix | Closed (fix likely merged) |

**Key observation:** The S1 OpenCode header bug (#10603) was opened today and remains unaddressed. The context-cap bug (#10068) is a significant degradation for power users with large context windows configured.

---

## 6. Feature Requests & Roadmap Signals

| RFC/Feature | Status | Signal |
|---|---|---|
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) — Granular sandbox filesystem policy | RFC, in-progress | Strong roadmap signal: tighter OS-level isolation is a priority |
| [#10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050) — Verbatim channel send via gateway | RFC, accepted | Gateway API completeness; likely in next minor release |
| [#10222](https://github.com/zeroclaw-labs/zeroclaw/issues/10222) — Opt-in single-tool provider rounds | RFC, accepted | Fine-grained tool execution control for interactive agents |
| [#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822) — WASM plugin Observer capability | RFC Rev 2, accepted | Plugin ecosystem expansion; maintainer takeover indicates importance |
| [#10405](https://github.com/zeroclaw-labs/zeroclaw/issues/10405) — Session-scoped prompt attachments (#9998) | Tracker, accepted | Implementation batch started; coordinated across ACP, durable sessions, and prompt tools |
| [#10570](https://github.com/zeroclaw-labs/zeroclaw/issues/10570) — Memory continuity for Code-pane/ACP sessions | Tracker, just opened | Memory system maturation; staged implementation planned |
| [#10406](https://github.com/zeroclaw-labs/zeroclaw/issues/10406) — Gemini speech-to-speech broker channel (#8780) | Tracker, accepted | multimodal channel expansion |
| [#9740](https://github.com/zeroclaw-labs/zeroclaw/pull/9740) — VoiceHost WebSocket bridge | PR open, XL | External ASR integration — practical voice agent use case |
| [#9324](https://github.com/zeroclaw-labs/zeroclaw/pull/9324) — A2A outbound client | PR open, XL | Agent-to-agent interoperability (Phase 1) |

**Prediction:** The next release will likely include multi-session web UI (#7543/9739), A2A client tools (#9324), and the VoiceHost bridge (#9740), given their advanced PR status. Sandbox policy and session-scoped prompts are longer-horizon roadmap items.

---

## 7. User Feedback Summary

- **Context cap frustration (#10068):** Users with 131K-token profiles are hitting an unintended 32K ceiling in interactive sessions — a real pain point for long-running agent workflows.
- **OpenCode integration blocking (#10603):** Missing `x-opencode-session` header is a workflow-blocker for users relying on Go-based OpenCode models; risks account flags.
- **Transcription config ignored (#9905, #10486):** Both Discord and Matrix channels fail to respect per-agent transcription provider configuration, forcing users into legacy `[transcription]` config sections.
- **Channel authorization gaps (#9387):** Historical issue where any chat member could approve tool calls on Telegram/Slack/Matrix/Lark — users demanded stricter sender authorization, now addressed.
- **Multi-session demand (#7543, #9739):** Strong community signal for independent conversation management per agent; now implemented in both web UI and ZeroCode.
- **Cost transparency (#9939):** Users want clear visibility when pricing data is unavailable rather than silent $0 caps — addressed with warning output in `zeroclaw status`.
- **CI slowness (#7108, #10607):** Long PR build times (15-20 min) are a developer experience burden; measurement-driven CI optimization is underway.

---

## 8. Backlog Watch

| Issue | Age | Concern |
|---|---|---|
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) — Granular sandbox policy RFC | Open since 2026-05-28 (3+ months) | High-risk security RFC with 23 comments; needs maintainer closing decision |
| [#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108) — CI cached Rust builds improvement | Open since 2026-06-02 (3+ months) | Developer productivity blocker; partial work in #10607 |
| [#7685](https://github.com/zeroclaw-labs/zeroclaw/issues/7685) — Test coverage across 13 shards | Open since 2026-06-15 (3 months) | Repository-wide test health; stale/broken tests identified |
| [#10330](https://github.com/zeroclaw-labs/zeroclaw/issues/10330) — Accepted RFC implementation index | Open since 2026-08-25 | Coordination tracker for accepted RFCs; needs maintenance |
| [#8966](https://github.com/zeroclaw-labs/zeroclaw/pull/8966) — Live provider identity on usage events | Open since 2026-07-11 (2 months) | XL-sized PR; needs author action and maintainer review |
| [#9584](https://github.com/zeroclaw-labs/zeroclaw/pull/9584) — Egress grant ceremony for plugin install | Open since 2026-07-31 (2 months) | Security-critical UX; needs maintainer review |

**Recommendation:** The sandbox policy RFC (#6996) and the CI improvement (#7108) are the most impactful items awaiting maintainer closure. The test coverage tracker (#7685) represents accumulated technical debt that could undermine release confidence if left unaddressed.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*