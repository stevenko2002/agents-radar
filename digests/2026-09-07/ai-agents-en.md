# OpenClaw Ecosystem Digest 2026-09-07

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-09-06 22:16 UTC

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

# OpenClaw Project Digest — 2026-09-07  
*Generated from GitHub activity on 2026-09-06*

---

## Today's Overview  

OpenClaw remains highly active with 500 issues and 500 PRs updated in the last 24 hours, indicating ongoing development velocity and community engagement. No new releases were cut during this period. The majority of issues continue to center around core infrastructure concerns such as session state management, crash loops, message loss, authentication provider integrations, and upgrade-related regressions. While many PRs are labeled as needing further review or proof, several recent merges suggest steady progress on subagent coordination, memory search improvements, and plugin extensibility. Overall health appears stable but under strain due to high-priority bugs and complex architectural challenges.

---

## Releases  

**No new releases** have been published within the past day. Last known release was v2026.9.1-beta.1 (`ad6fe23`) which is mentioned in multiple open issues regarding regressions and unexpected behavior post-upgrade.

---

## Project Progress  

Several PRs have advanced key areas:

- **Subagent Coordination Improvements**: [PR #140137](https://github.com/openclaw/openclaw/pull/140137) addresses nested requester yield-batch wake-up logic, resolving potential deadlocks in subagent communication trees.
- **Memory Search Enhancements**: [PR #136984](https://github.com/openclaw/openclaw/pull/136984) improves top-hit accuracy when requesting fewer memory search results, enhancing relevance for constrained queries.
- **Release Tooling Fixes**: [PR #136761](https://github.com/openclaw/openclaw/pull/136761) consolidates frozen target harness contracts to streamline cross-platform packaging workflows.
- **Cron Job Optimization**: [PR #140476](https://github.com/openclaw/openclaw/pull/140476) avoids redundant validation overhead when reloading large cron job stores, improving performance under heavy scheduling loads.
- **Audit Metadata Recording**: [PR #140431](https://github.com/openclaw/openclaw/pull/140431) adds runtime skill selection metadata tracking, enabling better observability into agent decision-making processes.

These changes reflect continued investment in reliability, scalability, and operational clarity across the platform.

---

## Community Hot Topics  

### Most Active Issues (Top by Comment Count):

#### 🔴 [Issue #135111](https://github.com/openclaw/openclaw/issues/135111) – Intermittent Malformed JSON Tool Call Errors  
- **Labels**: `P1`, `regression`, `clawsweeper:needs-live-repro`
- **Comments**: 14 | 👍: 0
- **Summary**: Since upgrading to v2026.8.1, agents intermittently fail with malformed JSON arguments from tool calls. This impacts Claude Sonnet 5 users particularly.
- **Underlying Need**: Stability assurance during upgrades; robust error recovery mechanisms.

#### 🟠 [Issue #97616](https://github.com/openclaw/openclaw/issues/97616) – Zombie Process Accumulation in Hooks/Tools  
- **Labels**: `P1`, `impact:crash-loop`
- **Comments**: 13 | 👍: 1
- **Summary**: Child processes spawned by hooks/tools aren’t being properly reaped, leading to zombie accumulation and degraded performance over time.
- **Underlying Need**: Better resource lifecycle control; process cleanup protocols.

#### 🟡 [Issue #119720](https://github.com/openclaw/openclaw/issues/119720) – Gateway Event Loop Blocking During Session Persistence  
- **Labels**: `P1`, `impact:session-state`
- **Comments**: 12 | 👍: 0
- **Summary**: Synchronous session persistence blocks the Gateway event loop at scale, causing latency spikes and unresponsiveness.
- **Underlying Need**: Asynchronous session handling; improved concurrency architecture.

Each reflects critical system resilience needs across distributed agent orchestration layers.

---

## Bugs & Stability  

### High Severity Regressions

- **Regression Alert** – [Issue #92241](https://github.com/openclaw/openclaw/issues/92241): Gateway holds stale module import paths after rollbacks, dropping messages silently via `ERR_MODULE_NOT_FOUND`.
- **Crash Risk** – [Issue #137729](https://github.com/openclaw/openclaw/issues/137729): Unguarded `.trim()` calls cause TypeErrors in transcript replays, masking upstream errors.

### Medium Severity Functional Defects

- **Data Loss Risk** – [Issue #124393](https://github.com/openclaw/openclaw/issues/124393): Transcript rewrites can delete concurrently committed rows without warning.
- **Upgrade Degradation** – [Issue #134896](https://github.com/openclaw/openclaw/issues/134896): Version bump triggers cascading gateway restarts and failed Doctor repair attempts.

### Notable Fixes in Progress

| Issue | Status | Linked PR |
|-------|--------|-----------|
| [Issue #135111](https://github.com/openclaw/openclaw/issues/135111) | 🔍 Needs reproduction | ❌ None yet |
| [Issue #92241](https://github.com/openclaw/openclaw/issues/92241) | ⏱ In triage | ❌ None yet |

Most high-severity issues lack immediate fixes, suggesting prioritization gaps or complexity barriers.

---

## Feature Requests & Roadmap Signals  

### Prioritized Enhancements Under Discussion

- **[Issue #71058](https://github.com/openclaw/openclaw/issues/71058)** – Support for multiple Azure/Teams bots per gateway instance. Aiming for enhanced multitenancy capabilities.
- **[Issue #99583](https://github.com/openclaw/openclaw/issues/99583)** – Intelligent Session Auto-Titling using topic-aware renaming strategies. Could land in next minor release if implemented soon.
- **[Issue #51572](https://github.com/openclaw/openclaw/issues/51572)** – Fire `session-memory` hook on session resets/prunes—not only compaction—to preserve continuity for ephemeral sessions.

### Likely Future Integrations

- New provider plugins like [AIgateway support (PR #140146)](https://github.com/openclaw/openclaw/pull/140146) indicate expanding ecosystem compatibility.
- Audit metadata logging ([PR #140431](https://github.com/openclaw/openclaw/pull/140431)) suggests growing emphasis on explainability and debugging tooling.

The roadmap leans toward deeper modularity, tenant flexibility, and transparency enhancements.

---

## User Feedback Summary  

User-reported experiences highlight both friction points and evolving expectations:

- **Pain Point**: Frequent upgrade instability causing service interruptions. Users expect smoother migration paths between versions.
- **Use Case Gap**: Lack of granular memory hooks outside compaction workflows hampers adaptive memory retention.
- **Positive Signal**: Interest in private/self-hosted integrations (e.g., Tavily internal hosts via [PR #139868](https://github.com/openclaw/openclaw/pull/139868)), showing growing enterprise adoption interest.
- **UX Concern**: Live docs occasionally outpace actual releases (see [Issue #48920](https://github.com/openclaw/openclaw/issues/48920)), creating confusion among early adopters.

Overall sentiment is cautiously optimistic but tempered by reliability concerns tied to production deployments.

---

## Backlog Watch  

Several longstanding issues require renewed attention:

- **[Issue #48920](https://github.com/openclaw/openclaw/issues/48920)** *(Opened Mar 2026)*: Documentation ahead of code — affects trust in official guides.
- **[Issue #41201](https://github.com/openclaw/openclaw/issues/41201)** *(Opened Mar 2026)*: Avatar upload/display broken in Control UI despite being marked P2.
- **[Issue #84242](https://github.com/openclaw/openclaw/issues/84242)** *(Opened May 2026)*: LanceDB memory store registered but not exposed as callable tools.

These represent significant UX gaps and underutilized features that deserve reprioritization given their maturity age and user impact.

--- 

Let me know if you'd like a Markdown-formatted version or weekly aggregation summary next!

---

## Cross-Ecosystem Comparison



# Cross-Project Comparison Report — Personal AI Assistant / Agent Open-Source Ecosystem
**Date:** 2026-09-07 | **Window:** 24-hour GitHub activity snapshot

---

## 1. Ecosystem Overview

The personal AI assistant open-source landscape in late 2026 is defined by a **two-tier structure**: a small set of high-velocity, community-driven projects (OpenClaw, Hermes Agent, ZeroClaw, CoPaw) with substantial issue/PR volume, and a longer tail of smaller, maintenance-phase or single-maintainer projects (PicoClaw, IronClaw, Moltis, NullClaw) where activity is sporadic but often focused on hardening. Across all projects, **no releases shipped in the 24-hour window**, suggesting a shared pre-release stabilization period. The dominant technical themes are **session/state reliability**, **provider-contract formalization**, **MCP ecosystem maturation**, and **security hardening** — particularly subprocess environment scrubbing and fail-closed defaults. Community sentiment is cautiously optimistic but tempered by recurring complaints about upgrade instability, context loss, and desktop/UI regressions.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed | Release Status | Health Assessment |
|---|---|---|---|---|---|
| **OpenClaw** | ~500 updated | ~500 updated | Several merged | None (last: v2026.9.1-beta.1) | Stable but strained — high-priority bugs unfixed |
| **ZeroClaw** | ~32 updated | ~50 updated | 6 merged/closed | None (stabilization line v0.8.5) | Architecturally active — review bottleneck (44 open PRs) |
| **Hermes Agent** | ~50 updated | ~50 updated | 2 merged, 11 issues closed | None | Healthy but noisy — desktop regression density |
| **CoPaw** | ~20 updated | ~8 updated | 1 merged, 3 issues closed | None | High engagement — context-loss cluster needs root-cause fix |
| **NanoBot** | 0 new | ~18 active | 3 merged/closed | None | Maturing — p1 session bugs dominate |
| **NanoClaw** | ~2 new | ~7 closed | 7 closed (refactor wave) | None (v2.3.0, 119 commits behind main) | Strong internal momentum — refactor landing |
| **IronClaw** | 0 new | ~9 updated | 3 closed (Dependabot) | None | Maintenance/hardening — human fixes pending review |
| **ZeptoClaw** | ~4 closed | ~3 merged | 3 merged (security fixes) | None | Security-focused — disciplined single-maintainer sprint |
| **PicoClaw** | ~4 updated | ~2 updated | 1 closed | None | Stable/slow — data-loss bug critical for embedded use case |
| **Moltis** | 0 new | ~2 updated | 0 merged | None | Quiet maintenance — 2 fix PRs awaiting review |
| **NullClaw** | 0 new | ~1 open | 0 merged | None | Stable — low velocity, strong test coverage (7,373 passing) |
| **LobsterAI** | ~1 updated | 0 | 0 | None | Low activity — maintenance lull |
| **TinyClaw** | 0 | 0 | 0 | None | Inactive |

---

## 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Scale of engagement**: With ~500 issues and ~500 PRs updated in 24 hours, OpenClaw operates at a volume tier that no other project in this cohort matches. This reflects both a larger user base and a more institutionalized contribution pipeline.
- **Architectural breadth**: OpenClaw's active PRs span subagent coordination, memory search, release tooling, cron optimization, and audit metadata — indicating investment across the full stack rather than narrow focus.
- **Ecosystem integration signals**: PRs for AIGateway support and Tavily internal hosts suggest OpenClaw is positioning as a platform rather than a standalone agent, with enterprise adoption interest.

**Technical Approach Differences:**
- OpenClaw maintains a **monolithic core with plugin extensibility**, whereas peers like ZeroClaw and NanoClaw are pursuing **explicit contract/ RFC-driven architectures** (provider contracts, session RFCs, WASM plugin runtimes). OpenClaw's approach prioritizes velocity and backward compatibility over formal seam definitions.
- Its issue tracker shows **higher density of P1 regressions without linked fix PRs** (#135111, #92241, #97616), suggesting either a larger surface area or triage capacity gaps compared to more disciplined projects like ZeptoClaw.

**Community Size Comparison:**
- OpenClaw's issue comment counts (14, 13, 12 on top issues) are meaningful but not overwhelming — the project is active without the explosive discussion volume seen in ZeroClaw's RFC threads (34 comments on #9487) or Hermes Agent's skills-index watchdog (168 comments on #66616). This suggests a **more institutional, less chatty community** — users file detailed reports but discussion may happen in other channels.

---

## 4. Shared Technical Focus Areas

Several requirements emerge across **four or more projects**, indicating ecosystem-wide convergence:

| Focus Area | Projects | Specific Need |
|---|---|---|
| **Session persistence off the event loop** | OpenClaw, NanoBot, Hermes, ZeroClaw | Synchronous session I/O blocks the gateway event loop at scale; all are moving toward async persistence |
| **Subprocess / environment scrubbing** | ZeptoClaw, OpenClaw, IronClaw, Hermes | Prevent API keys, tokens, and DB URLs from leaking into spawned plugin/MCP/runtime processes |
| **MCP integration hardening** | NanoBot, NullClaw, IronClaw, OpenClaw, PicoClaw | MCP is becoming a first-class surface: budget controls, metadata preservation, timeout handling, egress diagnostics |
| **Provider contract formalization** | NanoClaw, ZeroClaw, OpenClaw, Hermes | Moving from implicit/duck-typed provider behavior to declared, verifiable contracts |
| **Context-window / token accuracy** | Hermes, NanoBot, CoPaw, OpenClaw | Users are auditing token bills; estimator inflation, flat image pricing, and spurious compression are community-reported pain |
| **Desktop / UI state reliability** | Hermes, CoPaw, PicoClaw, OpenClaw | Repeated reports of messages/sessions vanishing after updates, chat switches, or renderer restarts — "data is safe but UI loses it" |

**Most acute shared need**: **Session state durability**. At least four projects have open p1 bugs around session persistence blocking the event loop or losing messages. This is the single most common reliability complaint across the ecosystem.

---

## 5. Differentiation Analysis

| Project | Feature Focus | Target Users | Architecture Signature |
|---|---|---|---|
| **OpenClaw** | Platform extensibility, subagent coordination, enterprise integrations | Power users, self-hosters, enterprise adopters | Monolithic core + plugin ecosystem; high velocity, moderate formalization |
| **Hermes Agent** | Desktop experience, group/bot chats, cost/usage transparency | Desktop-first users, cost-conscious operators, community auditors | Desktop + gateway; unusually engaged power-user base that audits token bills |
| **ZeroClaw** | RFC-governed architecture, sandbox policy, WASM plugins, session ownership | Architects, security-conscious operators, multi-platform deployers | Layered security (Bubblewrap/Landlock/Seatbelt); RFC lifecycle as coordination mechanism |
| **CoPaw** | Multi-agent orchestration, channel UX (Telegram/Feishu), plugin ecosystem | Orchestration-heavy users, Chinese-market channel operators | AgentScope lineage; strong first-time contributor pipeline; context/state reliability gaps |
| **NanoBot** | CI reliability, TUI clarity, MCP ecosystem maturation | Developers, TUI users, MCP integrators | Pragmatic, test-driven; p1 bugs prioritized; quiet but consistent merge velocity |
| **NanoClaw** | Provider-contract refactor, per-group inference properties | Multi-provider operators, team/agent-group deployments | "Declare the provider contract" refactor wave; architectural debt cleanup |
| **ZeptoClaw** | Security hardening, fail-closed defaults, audit chains | Security-focused self-hosters, Rust practitioners | Single-maintainer discipline; explicit backlog tracks (S/M/L); Hermes comparison review as benchmark |
| **PicoClaw** | Embedded/low-power deployment, QQ channel integration | Embedded Linux / RISC-V hobbyists, Chinese market users | Hardware-constrained target; data-loss bug threatens core value proposition |
| **IronClaw** | MCP egress safety, Slack channel UX, dependency hygiene | Rust operators, Slack-heavy teams | Dependabot-driven maintenance; human fixes are targeted and well-scoped |
| **Moltis** | TLS correctness, shell-spawn diagnostics | Operators who care about protocol correctness | Quiet, fix-driven; small surface area |
| **NullClaw** | MCP stdio reliability, test coverage | Zig practitioners, MCP early adopters | Zig implementation; strong test suite; low community activity |

---

## 6. Community Momentum & Maturity

**Activity Tiers:**

- **Tier 1 — Rapid Iteration**: OpenClaw, ZeroClaw, Hermes Agent, CoPaw. These projects have high issue/PR volume, active contributor pipelines, and visible community discussion. They are the ecosystem's innovation engines but also carry the highest bug burden.
- **Tier 2 — Steady Progress**: NanoBot, NanoClaw, ZeptoClaw. Lower volume but consistent, purposeful movement. NanoBot and NanoClaw are merging well-scoped work; ZeptoClaw is executing a disciplined security sprint.
- **Tier 3 — Stabilization/Maintenance**: IronClaw, PicoClaw, Moltis, NullClaw, LobsterAI. Activity is low but generally focused on correctness rather than feature expansion. These projects are stable but risk contributor attrition.

**Notable patterns:**
- **CoPaw** stands out for its **first-time contributor acceptance rate** — four new contributors with merged fix PRs in one day, targeting exactly the bugs users report most. This is a health signal that contrasts with its context-loss problems.
- **ZeroClaw** has the **worst review bottleneck**: 44 open PRs against 6 merged, with multiple XL PRs marked `do-not-merge`. Consensus is strong (RFC process is earnest) but review capacity is the binding constraint.
- **Hermes Agent** has the **most engaged community** (1,393-agent self-audit, detailed cost reports) but also the **noisiest backlog** (168-comment stale-skills watchdog, 72-comment invalid-tagged issue).

---

## 7. Trend Signals

**Industry trends extracted from community feedback:**

1. **"Data is safe but the UI loses it" is the dominant desktop reliability complaint.** Hermes (#68321, #97762, #90495), CoPaw (#7548, #7447), and OpenClaw all report variants: the database is intact, but the render path loses sessions/messages after updates, switches, or restarts. This points to a **fundamental architecture gap in UI-state synchronization** that no project has fully solved.

2. **Users are auditing token bills and expecting provider reality.** Hermes community spotted a +42% reasoning double-charge (#99398); image flat-pricing footguns (#70328); spurious compression fires (#103391). CoPaw users report context loss at ~70% of a 1M-token budget. This signals that **usage/cost correctness is becoming a competitive differentiator**, not a niche concern.

3. **MCP is the new integration battlefield.** At least five projects have active MCP PRs in this window: budget controls (NanoBot #5388), metadata preservation (#5386), timeout handling (NullClaw #996), egress diagnostics (IronClaw #8077), and schema budgeting. The protocol is maturing from "it works" to "it's safe, observable, and cost-controlled."

4. **Multi-agent orchestration is emerging as a user expectation, not a feature.** CoPaw (#7450, #7580), OpenClaw (subagent coordination PRs), and ZeroClaw (delegate observability #10531) all show users wanting proactive sub-agent status polling, blocking wait tools, and parent visibility into child progress. The "main agent + sub-agents" model is becoming a standard workload pattern.

5. **Security hardening is shifting from reactive to proactive.** ZeptoClaw's fail-closed `agent_mode` (#671), environment scrubbing across all spawn sites (#672), and IronClaw's MCP response-leak diagnostics (#8077) represent a move toward **security as a design constraint** rather than a post-hoc fix. This is particularly relevant for self-hosted deployments.

6. **Channel completeness is a 2026 roadmap pillar.** CoPaw (Telegram/Feishu rendering fixes), ZeroClaw (WeCom docs, Matrix transcription, Mattermost approvals), NanoClaw (Proton Mail, Cursor Agent), and PicoClaw (QQ attachments) all show active channel work. The "chat channel" is no longer a thin transport layer — it's a surface requiring per-channel UX polish, error handling, and state management.

**Value for AI agent developers:**
- **Session persistence

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-09-07

## 1. Today's Overview

NanoBot shows a **moderate, PR-driven development pace** over the past 24 hours. No new issues were filed or updated, and no releases were tagged, but 18 pull requests saw activity, of which 3 were closed or merged and 15 remain open. The active PRs span core infrastructure (session persistence, model failover, SSRF guards), UX (TUI context display, model retry status), and feature additions (Langfuse tracing, heartbeat configuration, MCP tooling). The work reflects a maturing codebase focused on reliability, observability, and developer experience rather than headline features.

## 2. Releases

No new releases were published in the last 24 hours.

## 3. Project Progress

Three PRs were closed/merged on 2026-09-06:

- **#5680 — [CI/CD] Parallelize tests and filter unrelated jobs** ([link](https://github.com/HKUDS/nanobot/pull/5680))
  - Author: chengyongru
  - Introduces `pytest-xdist` for Linux/Windows Python suites while keeping Rich terminal tests serial, isolates Windows process tests in a separate job, enables `uv` dependency caching, and prunes unrelated jobs from forks. Expected to meaningfully reduce CI wall-clock time.

- **#5679 — [bug fix] Show context window usage in TUI footer** ([link](https://github.com/HKUDS/nanobot/pull/5679))
  - Author: chengyongru
  - Replaces the misleading aggregate token-throughput display in the idle TUI footer with measured context-window occupancy (e.g. `11% context`). A small but high-signal UX improvement for long-running sessions.

- **#5309 — [bug fix] Allow marketplace skills to shadow builtins** ([link](https://github.com/HKUDS/nanobot/pull/5309))
  - Author: KDB-Wind
  - Resolves a long-standing WebUI marketplace bug where bundled skills (e.g. `github`) prevented users from installing a workspace-local override because the loader marked all retrieved skills as installed. Both install backends now correctly install the workspace copy.

Together these land a CI speedup, a TUI clarity fix, and a WebUI marketplace correctness fix — all delivered in one day.

## 4. Community Hot Topics

There is **no community conversation activity to report**: no PRs or issues received comments in the last 24 hours, and reactions (👍) are uniformly 0 across all 18 PRs in the snapshot. This indicates the project is currently in a quiet window between discussion rounds; review and merging appear to be moving without public back-and-forth.

The most recently active threads (by freshness and breadth of change) are:

- **#5676 — `feat(cli): add attach-only Desktop target selection`** ([link](https://github.com/HKUDS/nanobot/pull/5676)) — Recent CLI ergonomics for Desktop vs Python runtime selection.
- **#5678 — `test(security): cover redirect and pinned-DNS SSRF guard surfaces`** ([link](https://github.com/HKUDS/nanobot/pull/5678)) — Signals community/internally flagged concern about SSRF coverage.
- **#5580 — `fix(session): move persistence off event loop` (p1)** ([link](https://github.com/HKUDS/nanobot/pull/5580)) — The highest-priority item in the active set; addresses a runtime-stall class of bugs.

Underlying need: **runtime stability, deterministic execution, and test reliability** dominate the discussion floor.

## 5. Bugs & Stability

| Severity | Item | Status | Fix PR |
|---|---|---|---|
| **p1** | Session persistence stalls the event loop under slow I/O or file-lock contention, freezing unrelated conversations | Open | [#5580](https://github.com/HKUDS/nanobot/pull/5580) |
| **p1** | Session keys accept path traversal components (`../../etc/passwd`) leading to potential out-of-tree file writes | Open | [#5633](https://github.com/HKUDS/nanobot/pull/5633) |
| **p2** | Model failover is bypassed when the primary call exhausts the runner deadline; `FallbackProvider` never runs | Open | [#5675](https://github.com/HKUDS/nanobot/pull/5675) (fixes #5674) |
| **p2** | TUI footer misrepresents context window via aggregate throughput metrics | Closed | [#5679](https://github.com/HKUDS/nanobot/pull/5679) |
| **p2** | Marketplace skill shadowing broken for built-ins | Closed | [#5309](https://github.com/HKUDS/nanobot/pull/5309) |
| **p2** | `ChannelManager._dispatch_outbound` can stop on a single message-processing error, halting outbound delivery until restart | Open | [#5457](https://github.com/HKUDS/nanobot/pull/5457) |
| **p2** | `test_catalog_bounds_failure_only_keys` is flaky on Windows (3 failures / 5 runs) and other env-dependent tests need stabilization | Open | [#5677](https://github.com/HKUDS/nanobot/pull/5677) |
| **p2** | SSRF guard surfaces (`validate_resolved_url`, `PinnedDNSAsyncTransport`) lack direct test coverage | Open | [#5678](https://github.com/HKUDS/nanobot/pull/5678) |

**Two p1 bugs** remain open, both in session handling. They are the highest-priority items and likely candidates for the next merge wave.

## 6. Feature Requests & Roadmap Signals

Open feature PRs reveal a clear directional cluster:

- **MCP ecosystem maturation**
  - [#5388](https://github.com/HKUDS/nanobot/pull/5388) — Opt-in byte budget for model-visible MCP tool schemas.
  - [#5386](https://github.com/HKUDS/nanobot/pull/5386) — Preserve MCP Apps result metadata separately from model-facing text.
  Both indicate the project is actively hardening MCP as a first-class integration surface.

- **Heartbeat configurability** ([#4549](https://github.com/HKUDS/nanobot/pull/4549), [#4551](https://github.com/HKUDS/nanobot/pull/4551))
  - `modelOverride` for cheaper heartbeat models and `isolatedSession` toggling. These together suggest upcoming defaults around cost and shared-session context for background activity.

- **Observability for Codex provider** ([#5520](https://github.com/HKUDS/nanobot/pull/5520))
  - Native Langfuse SDK tracing for Codex, closing the parity gap with the OpenAI-compatible provider. This signals tracing is becoming a first-class requirement per provider.

- **Direct webhook delivery** ([#5652](https://github.com/HKUDS/nanobot/pull/5652))
  - Signed webhook routing to the outbound message bus, bypassing the agent loop. Targets CI/monitoring/billing integrations and points toward richer ops-side integrations.

- **CLI Desktop targeting** ([#5676](https://github.com/HKUDS/nanobot/pull/5676))
  - Explicit per-invocation target selection between Desktop and Python installs.

- **Per-spawn model presets** ([#5561](https://github.com/HKUDS/nanobot/pull/5561))
  - Allowlisted model presets for `spawn` operations; an alternative implementation resolving #4231.

**Prediction for next release**: A release window that bundles #5580 (off-loop session I/O) and #5633 (session key validation) is plausible — both are p1, both touch the session subsystem, and landing them together would let maintainers cut a stability-focused point release. Langfuse-for-Codex (#5520) and one of the MCP budget/metadata PRs are likely candidates for a subsequent feature release.

## 7. User Feedback Summary

There are **no issue-side user reports in the last 24 hours**, and PR discussion threads are empty. The data therefore offers limited direct signal on user pain points.

What can be inferred from PR content alone:

- **Long-session transparency**: Users running extended contexts have been misled by the old TUI footer — the fix in #5679 suggests real-world confusion about how much context remains.
- **Multi-target install friction**: PR #5676 explicitly notes users mixing Desktop and Python installs need clearer target selection on bare `nanobot` and `nanobot webui` invocations.
- **Skill customization blocked**: #5309 documents that users could not override bundled skills from the marketplace UI — a clear user-visible workflow break.
- **Operational visibility gap**: #5504 (retry status) and #5520 (Codex tracing) both reflect demand for better runtime and per-request observability.

Net assessment: a **feature-saturated, stability-tuning phase** rather than a complaint-driven one.

## 8. Backlog Watch

PRs that have been open the longest and were refreshed in the last 24 hours, indicating active but unresolved work:

- **#5386 — `feat(mcp): preserve MCP Apps result metadata`** — Opened 2026-08-13, updated 2026-09-06. ([link](https://github.com/HKUDS/nanobot/pull/5386))
- **#5388 — `feat(agent): budget model-visible MCP schemas`** — Opened 2026-08-13, updated 2026-09-06. ([link](https://github.com/HKUDS/nanobot/pull/5388))
- **#4549 — `feat(heartbeat): add model_override config`** — Opened 2026-06-26 (~2.5 months old), updated 2026-09-06. ([link](https://github.com/HKUDS/nanobot/pull/4549))
- **#4551 — `feat(heartbeat): add isolated_session config`** — Opened 2026-06-26, updated 2026-09-06. ([link](https://github.com/HKUDS/nanobot/pull/4551))

**#4549 and #4551 are the most aged items** still receiving updates. They are tagged `priority: p2` and have sat for over two months with multiple refreshes but no closure — a maintainer-attention signal worth highlighting. Their companion design (heartbeat cost control + shared session context) is logically coherent and likely blocked on review bandwidth rather than disagreement.

PRs marked **`conflict`** that need conflict resolution before they can land:

- [#5652](https://github.com/HKUDS/nanobot/pull/5652) — Signed direct delivery webhook
- [#5633](https://github.com/HKUDS/nanobot/pull/5633) — Session key path-traversal rejection (p1)
- [#5561](https://github.com/HKUDS/nanobot/pull/5561) — Per-spawn model presets
- [#5457](https://github.com/HKUDS/nanobot/pull/5457) — Channel dispatcher exception scoping

Resolving the conflicts on **#5633** in particular should be a near-term priority given its `p1` security classification.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-09-07

## 1. Today's Overview
High-velocity day with 50 Issues and 50 PRs updated in the last 24h (39 active issues / 48 open PRs), though a meaningful share of that traffic is churn on longer-lived bugs. 11 issues were closed, and 2 PRs landed/merged — modest forward progress relative to the volume of open work. The dominant theme is **Desktop and session-state reliability**: multiple P1 bugs around vanishing messages, empty sidebars after auto-update, and stale renders, alongside a strong secondary theme of **cost/usage correctness** (token over-counting, spurious compression triggers). No new releases were published today. Many open items carry multiple `sweeper:risk-*` tags, indicating active triage/automation. Distinct recurring clusters: desktop group-chat / bot-mode behavior (`dokterdok`, `JoaoMarcos44` contributors), OpenRouter service-tier work, and memory/compression integrity.

## 2. Releases
No new releases in the last 24 hours. Nothing to report.

## 3. Project Progress
Two PRs merged/closed over the period; the most notable visible close:

- **[PR #104588 — fix(gateway): return delegated results to OpenAI-compatible clients](https://github.com/NousResearch/hermes-agent/pull/104588)** *(merged/closed, P2)* — Delegated subagent results are now returned synchronously in the OpenAI-compatible response rather than via a background handle/poller stateless clients don't have.

Notable recently-fixed issues closed within the window (reflecting earlier fix work now validated):
- **[#99398 — preflight estimator double-charges `reasoning`](https://github.com/NousResearch/hermes-agent/issues/99398)** (closed) — wire-dead field inflated context ~42% and caused a compaction loop.
- **[#70328 — compression prices every image at a flat 1500 tokens](https://github.com/NousResearch/hermes-agent/issues/70328)** (closed) — vision-heavy sessions on 64K local models hit provider 400s before compaction.
- **[#90449 — Codex event-stale watchdog killing GPT-5.6 reasoning streams](https://github.com/NousResearch/hermes-agent/issues/90449)** (closed, P1).
- **[#97762 — Desktop sidebar renders headers but zero sessions after auto-update](https://github.com/NousResearch/hermes-agent/issues/97762)** (closed, P1).
- **[#100381 / #103391 / #99421 — assorted spurious-compression and usage-anchor bugs](https://github.com/NousResearch/hermes-agent/issues/100381)** (closed, P2). Note: at least one related PR is still open for an adjacent sub-case (see Bugs).

## 4. Community Hot Topics
- **[Issue #66616 — Skills index is stale/degraded (skills-index-watchdog)](https://github.com/NousResearch/hermes-agent/issues/66616)** — *168 comments* — Longest-running thread (open since Jul 18). An automated freshness probe reports the index is 29.8h old against a 26h limit. The high comment volume suggests repeated/ongoing watchdog hits rather than a single user incident; underlying need is **operational reliability of the Skills Hub/docs pipeline** rather than a feature gap.
- **[Issue #88584 — Automated Nous integration is blocked](https://github.com/NousResearch/hermes-agent/issues/88584)** — *72 comments, tagged `invalid`* — A scheduled merge conflicts in `cron/jobs.py`; dashboard remains on last tested release. Heavy noise/no-value traffic on an automation pipeline that appears to be mislabeled or unsupported — a candidate for closure/housekeeping.
- **[Issue #97681 — Bot Group Chats should keep working after Desktop closes](https://github.com/NousResearch/hermes-agent/issues/97681)** — *25 comments, P2 feature* — Strong user demand for persistent, device-independent group chats where each bot carries its own model/tools/live on different hosts. Actively worked (multiple bot-mode PRs by `dokterdok` today).
- **[Issue #68321 — Desktop: assistant messages vanish when switching chats](https://github.com/NousResearch/hermes-agent/issues/68321)** — *10 comments, P1* — Distressing high-severity UX bug; DB intact so data is safe, but render path is broken.
- **[Issue #73327 — customizable cron response wrapping template](https://github.com/NousResearch/hermes-agent/issues/73327)** — *6 comments, 3 👍* — Most-liked open request today; users want to control the hardcoded header/footer wrapper in `cron/scheduler.py`.

## 5. Bugs & Stability
Ranked by severity, with fix-PR status where applicable:

- **[P0] Surface switch re-prefills the whole request (#104414)](https://github.com/NousResearch/hermes-agent/pull/104494)** — Fixing PR **[#104494](https://github.com/NousResearch/hermes-agent/pull/104494)** treats `Platform` as runtime identity, so answering a live session from desktop → TUI (or after a `systemctl` restart) wrongly re-prefills the prompt. Fix is open.
- **[P1] #68321 — Desktop assistant messages vanish on chat switch](https://github.com/NousResearch/hermes-agent/issues/68321)** — 10 comments; active, no dedicated fix PR visible yet.
- **[P1] #90495 — `hermes update` ZIP fallback deletes Desktop app & web_dist, then forgets Desktop was installed](https://github.com/NousResearch/hermes-agent/issues/90495)** — Silent degradation across subsequent updates; no fix PR today (related fix [#88326](https://github.com/NousResearch/hermes-agent/pull/88326) is open for identity reporting).
- **[P1] #104442 — mid-turn /steer text never persists; replayed history diverges (75–85% prompt-cache miss); tagged `duplicate`](https://github.com/NousResearch/hermes-agent/issues/104442).
- **[P2] #104582 — Async delegation completion never delivered on `api-` sessions](https://github.com/NousResearch/hermes-agent/issues/104582)** — offshoot partially addressed by merged #104588.
- **[P2] #100302 — Desktop DOM normalizer removes active caret; typing stops](https://github.com/NousResearch/hermes-agent/issues/100302)** — macOS composer.
- **[P2] #100836 — `hermes doctor --fix` self-detects as a live writer (leaked connection)](https://github.com/NousResearch/hermes-agent/issues/100836).
- **[P2] #97505 — Desktop model submenu closes on diagonal pointer travel](https://github.com/NousResearch/hermes-agent/issues/97505).
- **[P2] #47815 — Self-hosted OIDC auth rejects tokens due to zero clock-skew leeway](https://github.com/NousResearch/hermes-agent/issues/47815)** — open since Jun 17.
- **[P2, closed] #99421, #99398, #100381, #103391** — recent usage/compression bugs closed in-window (see Progress).

Several open fix PRs target bugs not listed above, including **[#103389](https://github.com/NousResearch/hermes-agent/pull/103389)** (pair unstarted tool calls when incremental persistence fails), **[#104564](https://github.com/NousResearch/hermes-agent/pull/104564)** (refresh opt-in JSON snapshots after in-place compaction), and **[#104330](https://github.com/NousResearch/hermes-agent/pull/104330)** (fuzzy-match reindent corruption).

## 6. Feature Requests & Roadmap Signals
Strongest near-term signals (already in PR form, likely to land in the next release):
- **OpenRouter service tiers & cache-warming** — [#104586 service tiers (flex/priority, per-model overrides, TTFT escalation)](https://github.com/NousResearch/hermes-agent/pull/104586) and [#104587 sticky provider order](https://github.com/NousResearch/hermes-agent/pull/104587), split from the earlier closed #100711. Config opt-in, hard-gated to "nothing changes unless configured."
- **Desktop group-chat bot robustness** — A fleet of `dokterdok` bot-mode fixes (#93903 rename splitting, #93993 stale attention badge) plus the persistent-chat feature ask #97681; group chats are clearly a 2026 roadmap pillar.
- **Gateway/desktop capability** — [PR #104267 uBlock Origin Lite for desktop preview](https://github.com/NousResearch/hermes-agent/pull/104267) and [PR #104589 open Skills Hub in standalone window](https://github.com/NousResearch/hermes-agent/pull/104589) (i18n-tagged, less risky).
- Community requests without PRs yet (backlog candidates): **#73327** customizable cron template (3 👍), **#104572** atomic disabled cron-job creation, **#99138** proactive memory agent to reduce long-horizon "behavioral state decay", **#44817** "Second Voice" guardrail/sandboxing mode, **#44993** trusted profile lane for `execute_code`, **#69882** authenticated gateway request context for plugin tool handlers.

## 7. User Feedback Summary
- **Desktop reliability pain is persistent and top-of-mind.** Multiple independent reports across versions about disappearing sessions/messages, wrong client-identity after updates, and updates forgetting that Desktop was installed (#90495, #97762, #68321). The common thread is *"data is fine/DB intact but the UI loses it"* — users repeatedly forced to clear renderer storage or restart.
- **Usage/cost accuracy matters to this community.** Community-spotted estimator inflation (+42% reasoning double-charge, #99398), image token flat-pricing footguns (#70328), and spurious compression fires (#103391, #100381) show users actively auditing token bills and expecting preflight/compaction to match provider reality.
- **Group/bot chats are a desired differentiator** (#97681, plus sustained `bot-mode` fixes) — users want multi-host, device-independent bot coordination.
- **Memory-system asymmetry frustration** (#79698): when a memory provider is configured, system guidance still steers agents at the built-in MEMORY.md, causing it to fill while provider tools go underused.
- **Security scanning false positives** (#84672): content scanners penalize security *documentation* that merely describes dangerous actions — an accuracy-vs-safety tuning complaint affecting cron scanners and the install-time skills guard.
- Positive signals: the high-velocity triage (risk-sweeper tags, rapid closures) and the community's own 1,393-agent refactor forensic audit ([#103563](https://github.com/NousResearch/hermes-agent/issues/103563), $19,302.59 run → 13 harness fixes) suggest an engaged, sophisticated power-user base that dogfoods the agent on the project itself.

## 8. Backlog Watch
Items needing maintainer attention due to age × importance:
- **[#66616 — Skills index stale/degraded](https://github.com/NousResearch/hermes-agent/issues/66616)** — open 51 days, 168 comments; watchdog keeps firing. Clear ownership + durable fix needed; this is operational debt draining triage attention.
- **[#88584 — "Automated Nous integration blocked"](https://github.com/NousResearch/hermes-agent/issues/88584)** — *_72 comments yet tagged `invalid`_*; left unactioned it will keep generating noise. Recommend explicit close-with-reason.
- **[#47815 — OIDC clock-skew leeway=0](https://github.com/NousResearch/hermes-agent/issues/47815)** — open ~3 months, P2, small self-contained fix (pass `leeway` to `jwt.decode`), yet unresolved.
- **[#84672 — Security docs flagged as attacks](https://github.com/NousResearch/hermes-agent/issues/84672)** — open ~4 weeks; affects both cron scanner and install guard; needs a subject-matter vs. action distinction.
- **[#79698 — Memory routing asymmetry](https://github.com/NousResearch/hermes-agent/issues/79698)** — open ~5 weeks, `needs-decision`; blocks adoption of third-party memory providers.
- Older PRs awaiting review/merge (open >1 week): **[#54230 Mattermost live-thinking bubble](https://github.com/NousResearch/hermes-agent/pull/54230)** (Jun 28), **[#88326 desktop packaged-client identity](https://github.com/NousResearch/hermes-agent/pull/88326)** (Aug 17), **[#91475 client turn-outcome recovery after reconnect](https://github.com/NousResearch/hermes-agent/pull/91475)** (Aug 21) — all functional improvements with risk-sweeper tags that would reduce Desktop/the reconnect edge-case backlog, and **[#86216 schema-project unknown tool args](https://github.com/NousResearch/hermes-agent/pull/86216)** (Aug 14), a security-relevant guard.

---

*Overall health assessment:* Healthy but noisy. The project is shipping steady correctness fixes and has an unusually engaged community that audits costs and files detailed, well-scoped reports. The main risks to project health are **Desktop regression density** (repeated UI-state bugs across releases), the **stale-skills watchdog** consuming triage cycles, and a **growing tail of P2/P3 items** marked `needs-decision` that would benefit from a maintainer pass to either commit to or formally decline.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-09-07

## 1. Today's Overview

PicoClaw shows **low but sustained activity** with 4 issues and 2 PRs updated in the last 24 hours, and no new releases. The update cadence is consistent with a mature maintenance-phase project rather than active feature development. Community attention is split between a long-standing feature request for broader LLM provider support (now closed without merge) and more recent, technically substantive bug reports concerning session persistence and Web UI performance on embedded/low-power hardware. One QQ channel enhancement PR was closed, indicating ongoing refinement of messaging integrations. Overall project health appears **stable but slow**, with two open issues flagged as stale signaling that maintainer triage capacity may be limited.

## 2. Releases

No new releases in the past 24 hours.

## 3. Project Progress

**Closed/Merged PRs:**

- **[PR #1349](https://github.com/sipeed/picoclaw/pull/1349)** — *Closed* — `feat(qq): support parsing and replying to more attachment types`
  - Extended QQ Channel integration to parse emoji structures and incoming voice/image/video/file messages
  - Added support for replying with local attachments (with upload-before-send logic)
  - Markdown reply with graceful fallback when Markdown delivery fails
  - Notable: This PR was opened in March 2026 and only closed today, suggesting an extended review cycle on the QQ channel enhancements.

No PRs were merged today.

## 4. Community Hot Topics

The most commented item in the last 24 hours is:

- **[Issue #675](https://github.com/sipeed/picoclaw/issues/675)** — *Add more LLM Provider Support* (7 comments, closed)
  - Long-running community demand for additional LLM provider integrations
  - Closure (without explicit merge confirmation) may signal either resolution, duplication with existing work, or rejection — community should monitor for clarification
  - Underlying need: users want flexibility to plug PicoClaw into diverse model providers without custom integration work

**[Issue #3369](https://github.com/sipeed/picoclaw/issues/3369)** — *Add OpenCode Go session header support* (new today) reflects a specific integration requirement for OpenCode Go's API contract, indicating the project is being adopted within OpenCode-adjacent workflows.

## 5. Bugs & Stability

Two open bugs reported by the same author (`chentianxiong123`) are flagged as **stale** despite being recent:

### High severity — Data loss risk
- **[Issue #3351](https://github.com/sipeed/picoclaw/issues/3351)** — *Session auto-compression physically deletes original records*
  - `pkg/memory/jsonl.go` `JSONLStore` is not purely append-only; `SetHistory` → `rewriteJSONL` overwrites the entire `.jsonl` file, destroying history
  - User-confirmed: files are physically shortened, not a display-layer issue
  - **Impact**: irreversible data loss; contradicts expected append-only log semantics for session storage
  - **Fix PR exists**: No

### Medium severity — Performance regression on low-power devices
- **[Issue #3350](https://github.com/sipeed/picoclaw/issues/3350)** — *Web UI input lag on embedded/low-performance devices (RV1106, RISC-V boards)*
  - Typing latency scales with chat history length
  - Symptom suggests frontend re-rendering or state management inefficiency tied to message volume
  - **Impact**: PicoClaw's value proposition on its target hardware (embedded Linux / RISC-V) is undermined
  - **Fix PR exists**: No

Both bugs are critical for PicoClaw's core use case (running on resource-constrained devices) and warrant maintainer prioritization.

## 6. Feature Requests & Roadmap Signals

- **[Issue #675](https://github.com/sipeed/picoclaw/issues/675)** — LLM provider expansion (closed; outcome unclear)
- **[Issue #3369](https://github.com/sipeed/picoclaw/issues/3369)** — OpenCode Go `x-opencode-session` header support — concrete, narrowly-scoped, likely a near-term candidate
- **[PR #3348](https://github.com/sipeed/picoclaw/pull/3348)** — *i18n: complete Czech code wrap labels* — open, stale; signals continued localization effort

**Prediction**: The OpenCode Go header support (#3369) is the most likely candidate for near-term inclusion given its specificity and minimal scope. Broader LLM provider work (#675) is harder to predict without closure context.

## 7. User Feedback Summary

User-reported pain points cluster around three themes:

1. **Data integrity concerns** — Users expect session logs to behave as durable append-only records. The current `rewriteJSONL` behavior breaks this mental model and causes real data loss, eroding trust in long-running conversations.

2. **Performance on target hardware** — PicoClaw's identity is tied to embedded/low-power deployment, but the Web UI experience on such hardware is degraded by chat history length. This is a core product-fit risk.

3. **Integration completeness** — Community actively wants richer provider/model integrations (LLM providers, QQ channel attachments, OpenCode Go header) — the project is being pushed toward more ecosystem compatibility.

**Satisfaction signals**: QQ channel PR #1349 progress suggests some user-driven enhancements do land, but the multi-month review cycle indicates friction.

## 8. Backlog Watch

The following items need maintainer attention:

- **[Issue #3351](https://github.com/sipeed/picoclaw/issues/3351)** — *Data loss bug* — High impact, already stale; treat as priority
- **[Issue #3350](https://github.com/sipeed/picoclaw/issues/3350)** — *Embedded device performance bug* — Aligned with project core use case; already stale
- **[PR #3348](https://github.com/sipeed/picoclaw/pull/3348)** — *Czech i18n completion* — Stale, low-risk merge candidate
- **[Issue #675](https://github.com/sipeed/picoclaw/issues/675)** — Recently closed; recommend maintainer post a closure summary explaining status (resolved / duplicate / wontfix) for community transparency

---

*Digest generated from GitHub data snapshot for 2026-09-07. Two issues (#3350, #3351) and one PR (#3348) are marked stale — recommend maintainer triage review.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-09-07

## 1. Today's Overview
NanoClaw enters the day with healthy merge velocity: 7 pull requests were closed in the last 24 hours, all converging on a major provider-contract refactor led by core-team member zvi-fried. That series — spanning setup, host, runtime, codex, instruction-rendering, and a new per-group `speed` inference property — appears to be winding down and landing onto `main`, marking significant architectural consolidation. Activity outside the refactor is thin: only 2 issues were touched, both freshly filed bug reports with zero comments, and no new releases shipped (last tagged release remains v2.3.0, published 2026-08-24, now ~119 commits behind `main`). Community discussion volume is low — none of the active items show reactions or comment threads — so the digest leans on signal from PR board movement and new bug reports rather than conversation. Overall: strong internal engineering momentum, with reliability and channel bugs surfacing that still need triage attention.

## 2. Releases
No new releases in the last 24 hours. The most recent published release remains v2.3.0 (2026-08-24), which is roughly 119 commits behind current `main` — the provider-contract refactor series landing this week is likely destined for the next minor/major release.

## 3. Project Progress
Seven PRs closed in the window, all part of the "declare the provider contract" refactor effort:

- **[#3592 — feat(groups): add a core-owned speed inference property](https://github.com/nanocoai/nanoclaw/pull/3592)** *(closed)* — adds `speed` as a core-owned per-agent-group property alongside `model` and `effort`, with CLI support via `ncl groups config update --speed <tier>` and approval gating for agent callers. New capability landed.
- **[#3586 — refactor(providers): declare the setup provider contract and install verifier](https://github.com/nanocoai/nanoclaw/pull/3586)** *(closed)* — formalizes the setup-provider seam with a registration-validated contract and install verification.
- **[#3585 — refactor(providers): declare the host provider contract](https://github.com/nanocoai/nanoclaw/pull/3585)** *(closed)* — routes host provider spawn and group-init surfaces through a declared contract, removing hard-coded Claude-specific file/mount logic.
- **[#3581 — refactor(providers): declare the runtime provider contract](https://github.com/nanocoai/nanoclaw/pull/3581)** *(closed)* — turns the container runtime seam into an executable contract that core actually calls, replacing flag- and helper-based behavior.
- **[#3584 — refactor(providers): implement the codex provider contract](https://github.com/nanocoai/nanoclaw/pull/3584)** *(closed)* — binds Codex payload to the enforced contracts, keeping it loadable on pre-contract cores.
- **[#3727 / #3591 — refactor(providers): render provider instructions from core-owned canon](https://github.com/nanocoai/nanoclaw/pull/3727)** *(both closed; #3591 appears to be a duplicate lineage)* — makes agent instruction prose core-owned: providers declare typed facts and core renders canonical instructions, eliminating free-form provider instruction sections.

Net effect: a wave of architectural debt cleanup that makes provider behavior verifiable and enforced rather than implicit, while adding the new `speed` group property as a user-facing capability.

## 4. Community Hot Topics
No issues or PRs in the last 24 hours carry meaningful comment or reaction traffic — all 2 updated issues have 0 comments/👍, and PR comment counts are not reported. There is no conversational thread to summarize. The closest thing to "active discussion areas" by volume of work are the provider-contract PRs listed above, but these are internal engineering efforts rather than community-driven debates.

## 5. Bugs & Stability
Two new bug reports filed in the window, both open and un-triaged (no comments, no linked fix PRs). Ranked by severity:

- **[HIGH] #3728 — Telegram inbound can die silently for days](https://github.com/nanocoai/nanoclaw/issues/3728)** *(open)* — The most serious report. Inbound Telegram delivery stopped for ~4 days with no logs: host stayed `active`, outbound delivery and scheduled tasks kept working, while inbound was dead. Root cause identified by reporter: `pollingLoop` retries forever with no give-up condition and logs nothing on success. Silent, long-duration channel failure of this kind is a major reliability gap with no error visibility. Affects v2.3.0 (observed since v2.1.54). No fix PR exists yet.
- **[MEDIUM] #3730 — Slack shared sessions still spawn per-thread sessions](https://github.com/nanocoai/nanoclaw/issues/3730)** *(open)* — With `session_mode: "shared"`, every top-level DM message still spawns a new per-thread session, defeating shared-state expectations. Reporter verified the session-mode wiring (`scripts/init-first-agent.ts`, `src/session-manager.ts`) is unchanged since v2.3.0 across ~119 commits. Behavioral bug, not a crash; no fix PR attached.

**Related stability signal:** **[#3654 — fix(onecli): NO_PROXY for host.docker.internal](https://github.com/nanocoai/nanoclaw/pull/3654)** *(open, PR: Fix, area/credentials)* — aims to make host-side MCP servers reachable by excluding `host.docker.internal` from proxy; still awaiting merge after ~9 days.

## 6. Feature Requests & Roadmap Signals
Merged/landed or in-flight features indicate where the project is heading:

- **Per-group inference speed tiers** — landed via #3592; expect usage/docs around `speed` as a first-class group property.
- **Cursor Agent provider** — two stacked PRs remain open: **[#3356 — Cursor Agent SDK payload](https://github.com/nanocoai/nanoclaw/pull/3356)** and **[#3355 — /add-cursor install skill](https://github.com/nanocoai/nanoclaw/pull/3355)** (both since Aug 19). When the contract refactor set merges, these become the natural next merges and likely ship together in the next release.
- **Proton Mail channel** — new **[#3726 — native Proton Mail adapter via Proton Mail Bridge](https://github.com/nanocoai/nanoclaw/pull/3726)** (opened Sep 6) adds email as a channel, explicitly addressing the ARM/Raspberry Pi gap since Proton Bridge has no ARM build. Novel and user-visible; could land if reviewers engage.
- **Browser portal / community cell integration** — **[#3729 — connect host to community cell, manage perks in browser](https://github.com/nanocoai/nanoclaw/pull/3729)** consolidates Echo/Slack setup into a browser flow with WorkOS sign-in. Signals a move toward managed, hosted agent onboarding.

Prediction: next release will bundle the closed provider-contract refactor, the `speed` property, and likely the long-pending Cursor payload/skill (#3356/#3355).

## 7. User Feedback Summary
Sparse this window, but the two new bug reports carry clear pain points:

- **Channel reliability anxiety (Telegram):** The silent multi-day inbound failure (#3728) reflects a real operational hazard — operators cannot trust agents to stay reachable without a health/error-visible polling loop. The reporter's tone implies frustration with the lack of both a give-up mechanism and success-path logging.
- **Shared-session expectations unmet (Slack):** #3730 shows power users configuring `session_mode: "shared"` and being surprised that conversational continuity doesn't behave as documented/expected — a correctness gap between configuration intent and runtime behavior.
- **Platform gap (ARM):** The Proton Mail PR (#3726) motivation ("Bridge ships no ARM binary, so Raspberry Pi installs…") indicates the self-hosted/hobbyist community on ARM is a real and underserved segment.

Satisfaction signals are otherwise neutral-to-positive given the sustained core-team merge cadence, though there is no direct sentiment data in this window.

## 8. Backlog Watch
Items that have sat open and may need maintainer attention:

- **[#3464 — Remove v1-only session-commands.ts superseded by v2 command gate](https://github.com/nanocoai/nanoclaw/pull/3464)** *(open since Aug 23, last touched Sep 6)* — This removal is a prerequisite to cleanly merging `skill/compact` into `main`; the files import v1-only symbols that no longer exist on v2 `main`. A merge-blocking cleanup that needs a decision.
- **[#3356 / #3355 — Cursor SDK payload and /add-cursor skill](https://github.com/nanocoai/nanoclaw/pull/3356)** *(open since Aug 19)* — Longest-pending feature work; stalled ~2.5 weeks, now likely awaiting the contract refactor to stabilize before review/merge.
- **[#3654 — NO_PROXY host.docker.internal fix](https://github.com/nanocoai/nanoclaw/pull/3654)** *(open since Aug 29, area/credentials)* — Small, low-risk fix touching host-side MCP reachability; ~9 days without merge.
- **[#3728 — Telegram silent inbound death](https://github.com/nanocoai/nanoclaw/issues/3728)** *(open, no comments, no assignee, no fix PR)* — Highest-severity open bug with zero maintainer engagement yet; deserves triage and a polling-loop reliability fix.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-09-07

## Today's Overview

NullClaw experienced minimal activity on 2026-09-07, with no new issues or releases recorded. A single open pull request (#996) was submitted, addressing an ongoing concern regarding timeout handling in MCP stdio responses. Test coverage remains strong, with thousands of tests passing in recent validation runs. The project is currently stable, though development velocity appears low based on today’s engagement metrics.

## Releases

No new releases were published during this period. [View all releases](https://github.com/nullclaw/nullclaw/releases)

## Project Progress

The only notable progress came via [PR #996](https://github.com/nullclaw/nullclaw/pull/996), which fixes [issue #991](https://github.com/nullclaw/nullclaw/issues/991). This PR introduces critical improvements to MCP (Model Context Protocol) integration:

- Bounds timeouts for stdio-based MCP response reads using `timeout_ms`.
- Terminates server process groups upon timeout to prevent orphaned processes.
- Cleans up partially initialized child processes during failed setups.

Validation included extensive testing (`zig build test --summary all`: 7,373 passed, 9 skipped) and successful compilation under optimized build settings.

## Community Hot Topics

There are no active discussions or trending issues/PRs today, indicating limited community engagement or focus elsewhere. Monitoring will continue for future bursts of activity around core subsystems like MCP support or performance tuning.

## Bugs & Stability

A key bug addressed by [PR #996](https://github.com/nullclaw/nullclaw/pull/996) relates to unbounded waits in MCP stdio communication—a high-severity issue potentially causing client hangs or resource leaks. Although not merged yet, the proposed solution appears robust and well-tested. No other bugs reported today.

Severity Ranking:
1. **High**: Unbounded stdio read waits in MCP clients (#991) — Fix available in [#996](https://github.com/nullclaw/nullclaw/pull/996)

## Feature Requests & Roadmap Signals

No new feature requests surfaced today. The project roadmap may be influenced by internal priorities or long-term planning rather than daily contributions. Continued attention to MCP protocol enhancements suggests it could feature prominently in upcoming versions.

## User Feedback Summary

There are currently no recent user comments or reactions attached to any issues or PRs. As such, real-time sentiment from end-users remains unavailable. Future digests should track feedback trends once more active participation resumes.

## Backlog Watch

Currently, there is little backlog congestion within the repository. However, several older pull requests and issues outside this digest's scope may require periodic review. Maintainers are encouraged to audit stale items regularly to ensure technical debt does not accumulate unnoticed. [Browse backlog here](https://github.com/nullclaw/nullclaw/projects).

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-09-07

## 1. Today's Overview

IronClaw activity today is **moderate in volume but light in substance**, driven almost entirely by Dependabot automation. Of 9 PRs updated in the last 24 hours, 7 are automated dependency bumps, while only 2 are human-authored code changes. Both human PRs are **bug fixes** targeting MCP egress safety and Slack/assistant channel handling, which indicates the project is in a hardening/refinement phase rather than active feature expansion. There were **no new issues, no releases, and no discussion activity** (all items show 0 reactions/comment count), pointing to a low-churn maintenance day. Project health overall appears stable, though review bandwidth for non-bot contributions is worth watching.

---

## 2. Releases

No releases were published in the last 24 hours. Section omitted.

---

## 3. Project Progress

No features were merged today. The **3 closed PRs** are all Dependabot dependency bumps:

- **[#8049](https://github.com/nearai/ironclaw/pull/8049)** — chore(deps): bump everything-else group (19 updates, `low` risk) — closed 2026-09-06.
- **[#7835](https://github.com/nearai/ironclaw/pull/7835)** — chore(deps): bump actions group (5 updates, `medium` risk, ci) — closed 2026-09-06.
- **[#7020](https://github.com/nearai/ironclaw/pull/7020)** — chore(deps): bump `tokio-tungstenite` 0.29.0 → 0.30.0 (`low` risk) — closed 2026-09-06.

**Notable pattern:** several older bumps were closed and immediately superseded by newer counterparts (e.g., #8049 → #8080 for the everything-else group; #7835 → #8079 for actions; #7020 → #8078 for the tokio-ecosystem group). This is normal Dependabot rebase/replacement behavior, but it suggests the old PRs were closed as obsolete rather than merged — dependency updates are still landing.

Two substantive fixes were **opened (not yet merged)**:

- **[#8077](https://github.com/nearai/ironclaw/pull/8077)** — `fix(mcp): classify response leak diagnostics` — centralizes a `response_leak_blocked` sentinel in `ironclaw_host_api::http` and teaches the MCP lane to classify it distinctly, keeping host leak-blocking safe while preserving an MCP-visible reason.
- **[#8076](https://github.com/nearai/ironclaw/pull/8076)** — `fix(assistant): distinguish disconnected shared channels` — differentiates a paired user's disconnected shared channel from an unpaired account, renders channel-specific guidance in both user messages and bot commands, and keeps rejection classification consistent across product, adapter, and OpenAI-compatible surfaces.

---

## 4. Community Hot Topics

There are **no issues with comments or reactions** in the last 24h, and none of the PRs have recorded reactions, so there is no genuine "hot topic" by engagement metrics today. The most meaningful human-initiated work — and therefore the closest thing to active development foci — are the two fix PRs:

- **[#8077](https://github.com/nearai/ironclaw/pull/8077) — MCP response-leak diagnostics** (fixes #8009). Underlying need: the MCP lane must not silently collapse important security events against the host's leak-blocking, and developers need a distinct MCP-visible reason when egress is blocked.
- **[#8076](https://github.com/nearai/ironclaw/pull/8076) — Shared-channel disconnection UX** (Slack-capability related). Underlying need: users of shared channels need accurate error states rather than being misclassified as unpaired accounts.

The absence of issue-level discussion suggests the project currently resolves needs directly via PRs rather than long public issue threads.

---

## 5. Bugs & Stability

No new bug reports or crash/regression issues were filed today. However, the two open fix PRs address known stability/UX defects:

| Severity | Bug | Status |
|---|---|---|
| Medium | MCP egress diagnostics collapse response-leak events into an ambiguous state (issue #8009) | Fix PR open: **[#8077](https://github.com/nearai/ironclaw/pull/8077)** |
| Low–Medium | Assistant misclassifies a disconnected shared channel as an unpaired account, showing wrong guidance | Fix PR open: **[#8076](https://github.com/nearai/ironclaw/pull/8076)** |

The MCP issue is ranked higher because it touches host leak-blocking safety (`ironclaw_host_api::http`) — a security-sensitive boundary. Both fixes appear well-scoped; neither has been merged yet, so verification is still pending.

---

## 6. Feature Requests & Roadmap Signals

No new user feature requests were filed this period. Roadmap signals derived from PR activity:

- **MCP egress hardening** (#8077): MCP server support is being actively refined for safe host communication, suggesting MCP remains a first-class integration surface.
- **Slack / shared-channel UX** (#8076): Slack capability work continues, with effort on multi-channel and cross-product consistency (product, adapter, OpenAI-compatible surfaces). Slack could receive improved channel-state handling in the next release.
- **Dependency modernization** (open #8080, #8078, #8079, #7834): continuous Rust/CI dependency roll-forward — including the WASM/runtime stack (`wasmtime`, `wit-component`, `wit-parser`) — signals upcoming runtime/WebAssembly ecosystem hygiene, likely to land before the next tagged release.

**Prediction for next version:** the two human fixes (#8077, #8076) are the most likely candidates to ship, given they are small, targeted, and authored by contributors. The pending Dependabot merges may also bundle in, assuming CI stays green.

---

## 7. User Feedback Summary

Direct user feedback is absent this period (no new issues, no comments, no reactions). Indirect pain points inferred from submitted fixes:

- **MCP users/developers** hit ambiguous egress errors when the host blocked response leaks; they needed a distinct, MCP-visible reason rather than a generic host-side signal (#8077).
- **Slack/assistant users in shared channels** were shown an "unpaired account" state instead of "channel disconnected," a misclassification that likely caused confusion in bot commands and messaging (#8076).

No satisfaction/dissatisfaction statements or requested use cases were captured in the data window.

---

## 8. Backlog Watch

Items needing maintainer attention, ordered by age/risk:

1. **[#7834](https://github.com/nearai/ironclaw/pull/7834)** — WASM group bump (4 updates, `medium` risk, `experienced` contributor required) — **open since 2026-08-23 (~2 weeks)**. This is the oldest open item and the only `medium`-risk Rust dependency PR still unhandled. Worth prioritizing to avoid drift in the `wasmtime`/WIT toolchain.
2. **[#8077](https://github.com/nearai/ironclaw/pull/8077)** and **[#8076](https://github.com/nearai/ironclaw/pull/8076)** — substantive human-authored fixes opened today with no recorded review activity. Both deserve timely reviewer attention.
3. **[#8079](https://github.com/nearai/ironclaw/pull/8079)** — GitHub Actions group bump (6 updates, including `actions/setup-node` 4.0.2 → 7.0.0, a major version jump). CI dependency changes may carry breaking behavior and should be validated promptly.
4. **[#8080](https://github.com/nearai/ironclaw/pull/8080)** and **[#8078](https://github.com/nearai/ironclaw/pull/8078)** — routine Dependabot bumps; low urgency but should be merged/closed before they accumulate churn.

No long-unanswered *issues* are present in the dataset — the backlog risk is concentrated in open PRs rather than stale discussion threads.

---

### Health Assessment

- **Stability:** Good — no crashes, regressions, or security incidents reported.
- **Bus factor / review load:** All substantive activity is split between Dependabot and two external contributors; maintainer engagement is not visible in the last 24h, which may delay merging of quality fixes.
- **Direction:** Maintenance-and-hardening phase, with MCP and Slack integrations as notable active surfaces.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI Project Digest – 2026‑09‑07**  
*Based on GitHub activity for the repository netease-youdao/LobsterAI*

---

### 1. Today's Overview  
The repository shows minimal activity over the past 24 hours: only one issue was updated (still open) and no pull requests or releases were recorded. The sole active item is a **stale bug** concerning UI refresh after agent deletion. Overall project momentum is low, with no recent code contributions or version releases, indicating a period of maintenance lull.

### 2. Releases  
*No new releases were published in the last 24 hours.*  

### 3. Project Progress  
- **Merged/closed PRs today:** 0  
- No features were advanced or bugs fixed via pull requests today.  

### 4. Community Hot Topics  
| Item | Type | Comments | Reactions | Link |
|------|------|----------|-----------|------|
| #1068 | Bug (stale) | 1 | 0 | [Issue #1068](https://github.com/netease-youdao/LobsterAI/issues/1068) |

**Analysis:** The issue has garnered only a single comment and no reactions, suggesting limited immediate community impact. However, the bug describes a usability gap—after deleting the active agent and switching to another, the task list does not auto‑refresh, leaving the UI out of sync. This points to a need for better state‑management or UI‑event handling in the agent‑switching workflow.

### 5. Bugs & Stability  
- **Reported today:** 1 bug (Issue #1068) – UI refresh failure after agent deletion.  
- **Severity:** Medium – functional correctness affected; does not crash the application but hinders workflow.  
- **Fix PRs:** None currently open; no associated pull request exists to address this issue.  

### 6. Feature Requests & Roadmap Signals  
No explicit feature requests were recorded in the last day. The existing bug hints at a potential roadmap item: **improve agent‑state synchronization** (e.g., automatically reload or re‑render the task list when the active agent changes). If addressed, this could be included in a forthcoming maintenance patch.

### 7. User Feedback Summary  
The reporter’s screenshots and description reveal a concrete pain point: after removing the current agent, the UI stubbornly displays the stale task list of the deleted agent, forcing users to manually trigger a refresh (or navigate away and back). This disrupts the expected seamless experience when managing multiple agents, indicating dissatisfaction with the current state‑propagation mechanism.

### 8. Backlog Watch  
- **Issue #1068** – Open, marked *stale*, opened 2026‑03‑30, last updated 2026‑09‑06.  
  - Age: ~6 months; lacks recent discussion or assignee.  
  - **Action needed:** Maintainer review to determine relevance, possibly reproduce the bug, and either close (if resolved elsewhere) or prioritize a fix.  

---

**Overall Health Indicator:** Low recent activity, with a single lingering usability bug. The project appears to be in a maintenance hiatus; addressing the stale issue could re‑engage contributors and improve user confidence.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-09-07

## 1. Today's Overview

Moltis shows minimal activity in the last 24 hours, with zero new issues, zero closed issues, and no new releases. Only two pull requests were updated, both opened by the same contributor (be-student) on the previous day, and both remain in an open/awaiting-review state. The work concentrated on backend correctness fixes: TLS protocol advertisement and shell-spawn error reporting. Overall, the project appears to be in a quiet maintenance phase rather than an active feature-development cycle.

## 2. Releases

No new releases in the last 24 hours. No version information to report.

## 3. Project Progress

No pull requests were merged or closed today. No features have been formally advanced into the codebase.

## 4. Community Hot Topics

No active engagement signals — both open PRs have zero comments and zero reactions, indicating no community discussion is underway. This is consistent with the absence of new issues in the period.

## 5. Bugs & Stability

Two bug-fix PRs are currently pending review, both targeting reliability rather than new features:

1. **PR #1260 — `fix(exec): report missing shell accurately`** ([link](https://github.com/moltis-org/moltis/pull/1260))
   - Severity: **Medium** — incorrect error classification could mislead users into believing a process spawned successfully when the underlying shell was missing.
   - Root cause: spawn `NotFound` errors were being attributed to the configured working directory, so an existing directory masked a missing `sh` in `PATH`.
   - Closes issue #279.
   - Fix PR exists: **Yes** (in review).

2. **PR #1261 — `fix(tls): restrict ALPN to HTTP/1.1`** ([link](https://github.com/moltis-org/moltis/pull/1261))
   - Severity: **Low–Medium** — protocol advertisement mismatch; not a security vulnerability but could cause interop issues with clients expecting HTTP/2 ALPN.
   - Scope: restricts advertised ALPN protocols to HTTP/1.1 until RFC 8441 WebSocket upgrades are implemented; pins the list in the existing TLS config test; documents the constraint in contributor guidance.
   - Fixes issue #245.
   - Fix PR exists: **Yes** (in review).

Both PRs have passing tests reported locally (18 passed for `moltis-tls`; `cargo check -p moltis-tools` passes; 915/916 of reduced-feature crate suite passes with one pre-existing unrelated failure noted).

## 6. Feature Requests & Roadmap Signals

No new feature requests were submitted today. A latent roadmap signal is implied by PR #1261: the project does **not yet** support RFC 8441 (WebSocket over HTTP/2), and this is explicitly being deferred. Once that work lands, full HTTP/2 ALPN can be re-enabled.

## 7. User Feedback Summary

No new user-submitted issues or comments in the period. The two underlying issues (#245, #279) — addressing ALPN behavior and shell-not-found error reporting respectively — point to recurring categories of user pain:

- **Diagnostics quality**: users were getting misleading error messages when shell binaries were missing.
- **TLS protocol expectations**: contributors/users needed clearer guidance on the project's HTTP version support boundaries.

Satisfaction signals cannot be assessed from the current data window.

## 8. Backlog Watch

Neither open PR (#1260, #1261) has a maintainer review, comment, or approval recorded. Although they were just submitted (2026-09-06), both touch safety-relevant areas — TLS protocol negotiation and process-spawn failure classification — and would benefit from prompt maintainer triage to prevent:

- Stale branches drifting from `main`,
- Untested edge cases being merged without second review,
- Documentation updates (notably PR #1261's contributor-guidance change) going stale.

**Recommendation**: maintainers should prioritize review of PR #1260 (smallest, highest user-facing diagnostic value) and PR #1261 (TLS-facing change with documentation implications).

---

*Generated from GitHub data for moltis-org/moltis, snapshot 2026-09-07.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# 🤖 CoPaw Project Digest — 2026-09-07

> CoPaw (community/agent-ecosystem tracked under `agentscope-ai/QwenPaw` GitHub repo) — Daily activity digest.

## 1. Today's Overview

Maintainer activity and community engagement are both high. Over the last 24 hours, **20 issues** and **8 PRs** were updated (3 issues closed; 1 PR closed/merged), with **no new releases** shipped. The dominant theme is **context/state reliability**: users repeatedly report model replies or early conversation history silently disappearing from context, leading to strange agent behavior, repeated tool-call loops, and "memory loss" complaints. On the positive side, contributor velocity is strong — four first-time contributors (Bruce-Yii, kabishou11, niceIrene) have active fix PRs targeting the most-reported bugs (Telegram/Feishu rendering, 409 queueing, swallowed exceptions). Overall project health looks good from a bus factor perspective, but the cluster of context-loss and agent-feedback-loop bugs suggests core state management deserves priority attention.

## 2. Releases

None in the last 24 hours. No release notes to report.

## 3. Project Progress

Closed/merged today:

- **[PR #2134 – feat(heartbeat): Support configurable heartbeat timeout](https://github.com/agentscope-ai/QwenPaw/pull/2134)** 🎉 — Merged/closed. Replaces the hardcoded `120s` heartbeat timeout with a configurable per-run timeout exposed in the console, fixing failures where legitimate long-running heartbeat tasks exceeded the fixed limit. This is likely shipping in the next release and directly mitigates heartbeat reliability issues seen in the field.
- Closed issues this window: **[#7447 (context loss on long docs)](https://github.com/agentscope-ai/QwenPaw/issues/7447)**, **[#7548 (navigation history loss after switch/restart)](https://github.com/agentscope-ai/QwenPaw/issues/7548)**, and **[#6814 (SIGBUS in `sqlite3WalFindFrame` opening Scroll history.db on macOS)](https://github.com/agentscope-ai/QwenPaw/issues/6814)**.

Open PRs under active review worth watching: [#7591 (Feishu reasoning-card auto-collapse)](https://github.com/agentscope-ai/QwenPaw/pull/7591), [#7590 (Telegram Markdown table fix)](https://github.com/agentscope-ai/QwenPaw/pull/7590), [#7577 (enqueue follow-up messages instead of 409)](https://github.com/agentscope-ai/QwenPaw/pull/7577), [#7578 (log coordinator exceptions)](https://github.com/agentscope-ai/QwenPaw/pull/7578), [#7547 + #7546 (channel session-queue & lazy-load fixes)](https://github.com/agentscope-ai/QwenPaw/pull/7547), and [#7521 (fold consumed thinking under context pressure)](https://github.com/agentscope-ai/QwenPaw/pull/7521).

## 4. Community Hot Topics

Most-discussed items (by engagement), reflecting top user concerns:

- **[Issue #7450 – Main agent doesn't poll sub-agents unless user asks "what's the progress?"](https://github.com/agentscope-ai/QwenPaw/issues/7450)** (8 comments, open since 09-01) — For "main-agent + multi-sub-agent" tasks, the main agent goes quiet for long stretches and only checks sub-agent status when prompted by the user. Users want proactive status polling.
- **[Issue #7559 – Sending a message mid-task triggers HTTP 409 instead of queueing](https://github.com/agentscope-ai/QwenPaw/issues/7559)** (5 comments) — Users expect new messages during an active run to be queued, not rejected. Open fix PR **[#7577](https://github.com/agentscope-ai/QwenPaw/pull/7577)** directly addresses this.
- **[Issue #7363 – Synchronous calls freeze the event loop; timeout never fires](https://github.com/agentscope-ai/QwenPaw/issues/7363)** (4 comments) — Windows desktop freezes for 118–135s on startup and ~126s on sending a message.
- **[Issue #7584 / #7579 – Model replies unexpectedly lost from context; AI misbehaves and loops](https://github.com/agentscope-ai/QwenPaw/issues/7579)** (2 + 2 comments) — Described by the reporter as a "very serious bug" causing repeated tool-call dead loops where the model doesn't "see" its own just-persisted replies.
- **[Issue #7585 – Markdown tables render as raw pipes on Telegram](https://github.com/agentscope-ai/QwenPaw/issues/7585)** — Has matching open fix PR **[#7590](https://github.com/agentscope-ai/QwenPaw/pull/7590)**.

Underlying need: users want **reliable task orchestration** (proactive sub-agent progress reporting, no lost messages/turns) and **cleaner multi-channel UX** (Telegram/Feishu message hygiene).

## 5. Bugs & Stability

Ranked by severity (fix PRs noted where present):

1. 🔴 **[#7584 / #7579 – Persisted model replies vanish from subsequent context; agent loops in tool-call cycles](https://github.com/agentscope-ai/QwenPaw/issues/7579)** — High severity, described as causing "paranoid" behavior, repeated execution, and dead loops. Related to the broader context-loss cluster (#7447, #7450, #7363). No dedicated fix PR yet — needs maintainer investigation in the message/context persistence layer.
2. 🔴 **[#7589 – Heartbeat cron session feedback loop (duplicate message pile-up)](https://github.com/agentscope-ai/QwenPaw/issues/7589)** — High; agent unresponsive ~2 hours. Verified against latest `main` on the reporting date. The merged heartbeat-timeout PR (#2134) may partly help but does not address the duplicate-pileup loop directly.
3. 🟠 **[#7363 – Synchronous calls freeze event loop on Windows; timeout never fires](https://github.com/agentscope-ai/QwenPaw/issues/7363)** — ~2-minute freezes on startup and message send; ongoing.
4. 🟠 **[#7572 – Tool dispatch layer swallows exception stack traces](https://github.com/agentscope-ai/QwenPaw/issues/7572)** — `_drain()` catches all exceptions and returns `str(exc)` with no logging, making failures unlocatable. ✅ **Fix PR exists: [#7578](https://github.com/agentscope-ai/QwenPaw/pull/7578)**.
5. 🟡 Middle cluster — context/memory-loss reports: **[#7548 (navigation history lost after switch/restart — closed)](https://github.com/agentscope-ai/QwenPaw/issues/7548)**, **[#7447 (early context suddenly lost — closed)](https://github.com/agentscope-ai/QwenPaw/issues/7447)**, **[#7571 (agent "always forgets" instructions, devs paths)](https://github.com/agentscope-ai/QwenPaw/issues/7571)** — recurring theme: memory/instruction adherence under long sessions.
6. 🟡 **[#7587 – OpenAI-compatible provider hits Cloudflare 403 when connecting to WUSRouter](https://github.com/agentscope-ai/QwenPaw/issues/7587)** — provider connectivity issue.
7. 🟢 **[#7585 – Telegram renders Markdown tables as raw pipes](https://github.com/agentscope-ai/QwenPaw/issues/7585)** — formatting/cosmetic; ✅ **Fix PR: [#7590](https://github.com/agentscope-ai/QwenPaw/pull/7590)**.
8. 🟢 **[#6541 – Scroll context compression injects `role=user` block causing MODEL_EXECUTION_ERROR on DeepSeek](https://github.com/agentscope-ai/QwenPaw/issues/6541)** — model-compat bug; should use `role=system`.

Overall: a meaningful portion of today's bug flow is already covered by contributor fix PRs (#7577, #7578, #7590, #7591, #7547), but the **context-loss / feedback-loop** family lacks a clear owning fix.

## 6. Feature Requests & Roadmap Signals

Active feature requests from the community:

- **[#7580 – Blocking built-in tool "wait agent task complete"](https://github.com/agentscope-ai/QwenPaw/issues/7580)** — Complements #7450; would let a primary agent reliably await sub-agent results instead of polling `check_agent_task`. Likely to attract maintainers given the active orchestration theme.
- **[#7570 – Feishu: auto-fold reasoning streaming card after output completes](https://github.com/agentscope-ai/QwenPaw/issues/7570)** — ✅ **Fix PR already submitted by Bruce-Yii: [#7591](https://github.com/agentscope-ai/QwenPaw/pull/7591)**; likely lands next release.
- **[#7586 – Telegram: auto-clean/hide intermediate streaming messages (thinking, tool calls) after final reply](https://github.com/agentscope-ai/QwenPaw/issues/7586)** — Channel UX polish; complements #7570.
- **[#7588 – Restore v2.1.0's direct-path main working directory switcher](https://github.com/agentscope-ai/QwenPaw/issues/7588)** — Reverts a v2.2.0 regression replacing the type-ahead path input with a GUI picker that is painful for deep directories. Low effort, high goodwill — strong candidate for a fast follow-up fix.
- **[#7582 – Plugin store UX: fewer clicks, one-click update button & update notifications](https://github.com/agentscope-ai/QwenPaw/issues/7582)** plus **[#7583 – Community linkage (login, mailbox, quick feedback to AgentScope community)](https://github.com/agentscope-ai/QwenPaw/issues/7583)** — Ecosystem/UX signals around multi-machine plugin management and community engagement.

## 7. User Feedback Summary

Real pain points and use cases surfaced this week:

- **Multi-agent orchestration visibility** (#7450): Users run complex tasks as main-agent + sub-agents (e.g., GPT-sol style division of labor) and cannot see activity or completion until they manually prompt. Frustration is high because failures surface late.
- **Context/memory trust deficit** (#7571, #7579, #7584): A plugin developer reports the agent repeatedly breaks explicit rules (e.g., writing TODO files and developing in the wrong directory across A/B/C paths), eroding trust in instruction adherence. Another user describes the agent as "always forgetting" despite repeated emphasis.
- **Message-queue expectations** (#7559): Users reasonably expect mid-task messages to be queued rather than rejected with 409 (fix in progress).
- **Long-document workflows** (#7447): OCR/proofreading of ~160-page Word docs over multiple days; users hand-compress context at ~70% of a 1M-token budget because rendering gets painfully slow — and still lose prior context.
- **Channel UX fatigue** (#7585, #7586, #7590): Telegram users get cluttered chats (raw pipes, leftover reasoning/tool messages), preferring self-cleaning output.
- Positive signals: users validate proposed solutions themselves (#7570 — "已验证可行", i.e., verified the collapsible-panel approach works locally), and community members are actively contributing accepted-style fixes, indicating an engaged and technically capable user base.

Overall sentiment: users appreciate the product's power but are frustrated by **state/history inconsistencies** and want **proactive orchestration and cleaner UX**. The influx of first-time-contributor PRs suggests a healthy, motivated community.

## 8. Backlog Watch

Items needing maintainer attention (open for a while or high-stakes without a fix owner):

- **[Issue #6541 – Scroll compression `role=user` bug on DeepSeek (opened 2026-07-29)](https://github.com/agentscope-ai/QwenPaw/issues/6541)** — Open for ~6 weeks with only 3 comments; a clear, low-complexity fix (`role` should be `system`) that continues to break DeepSeek users.
- **[Issue #7363 – Synchronous calls freeze event loop on Windows (opened 2026-08-27)](https://github.com/agentscope-ai/QwenPaw/issues/7363)** — ~1.5 weeks with no fix PR or maintainer acknowledgement; affects startup UX severely on Windows.
- **[Issue #7450 – Main agent doesn't proactively poll sub-agent status (opened 2026-09-01)](https://github.com/agentscope-ai/QwenPaw/issues/7450)** — Active discussion (8 comments) but no assignment/label indicating triage.
- **[Issue #7579/#7584 – Persisted replies lost from context / tool-call dead loops](https://github.com/agentscope-ai/QwenPaw/issues/7579)** — Opened 2026-09-06; flagged as severe by the reporter, no maintainer response yet. Since the sibling issues #7447/#7548 were closed today, maintainers should confirm #7579's root cause differs from those fixes.
- **[PR #7521 – fold consumed thinking under context pressure](https://github.com/agentscope-ai/QwenPaw/pull/7521)** — Open since 2026-09-03 without comments; addresses the recurring long-context exhaustion problem and deserves review alongside #7579.

---

*Digest generated from GitHub activity data for 2026-09-07 (24h window). All links reference the `agentscope-ai/QwenPaw` repository.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-09-07

## 1. Today's Overview

ZeptoClaw shows a security-focused maintenance day with concentrated activity around a self-described "Hermes comparison review" (`docs/reviews/2026-09-06-hermes-comparison-review.md`). Four P0/P1-critical safety issues were closed in 24 hours, three of them paired with merged code fixes that landed as PRs #672, #671, and #645. The remaining 10 open issues, all filed 2026-09-05, paint a deliberate backlog organized along 10 architectural "exec" themes (delegation, config, memory, scheduling, channels, prompt caching, extensibility, integration testing, code organization, audit). The project is in a corrective hardening phase rather than a feature-expansion phase: no releases, no community-contributed PRs, and the only open PRs are five stale (2–3 month old) Dependabot dependency bumps with zero review activity.

## 2. Releases

No new releases in the last 24 hours (or recent past — none listed). No version-tagged artifacts shipped today.

## 3. Project Progress

Three closed PRs in 24 hours, all authored by core maintainer `qhkm` and all landing security fixes:

- **[PR #672](https://github.com/qhkm/zeptoclaw/pull/672)** (merged/closed) — `fix(security): scrub inherited env in plugin/MCP spawn sites`. Closes [Issue #660](https://github.com/qhkm/zeptoclaw/issues/660). Completes environment scrubbing across the three remaining unscrubbed spawn sites (`tools/binary_plugin.rs`, `tools/mcp/transport.rs`, `channels/plugin.rs`), complementing the earlier runtime-level fix in [PR #645](https://github.com/qhkm/zeptoclaw/pull/645). Stops leaking API keys, tokens, and database URLs into plugin and MCP server subprocesses.
- **[PR #671](https://github.com/qhkm/zeptoclaw/pull/671)** (merged/closed) — `fix(security): fail closed on invalid agent_mode`. Closes [Issue #659](https://github.com/qhkm/zeptoclaw/issues/659). Changes the previously dangerous fallback (unknown/typo'd `agent_mode` strings resolved to `Autonomous`, granting max permissions) to a safe default of `Assistant` with a warning.
- **[PR #645](https://github.com/qhkm/zeptoclaw/pull/645)** (merged/closed) — `fix(runtime): scrub subprocess secrets and reap timed-out process trees`. Closes [Issue #644](https://github.com/qhkm/zeptoclaw/issues/644). Stops `Command::output()` futures from timing out without terminating spawned process trees, and scrubs inherited environment in runtime shell commands; also restarts stray Docker containers.

In parallel, [Issue #646](https://github.com/qhkm/zeptoclaw/issues/646) was closed (CI baseline: restore Clippy + cargo-deny on Rust 1.97.1 after fixing five new Clippy warnings and bumping vulnerable `quick-xml 0.39.2` / `lopdf 0.40.0`). Net progress: subprocess environment scrubbing is now end-to-end across all four identified spawn paths, and `agent_mode` parsing is fail-closed.

## 4. Community Hot Topics

Engagement today is muted: every issue and PR carries **0 👍** and at most **3 comments**. The most commented item is [Issue #646](https://github.com/qhkm/zeptoclaw/issues/646) with 3 comments — a chore, not a feature debate. The next are [Issue #664](https://github.com/qhkm/zeptoclaw/issues/664) and [Issue #644](https://github.com/qhkm/zeptoclaw/issues/644) with 1 comment each.

Underlying needs visible from the backlog titles (in order of how the maintainer group thems them):

- **Safety hardening** (the day's clear theme): P0 subprocess env scrubbing, fail-closed `agent_mode`, audit-chain persistence, delegated-agent policy inheritance.
- **Architecture consolidation**: finishing the `AgentLoop` → `CoreLoop` migration ([#663](https://github.com/qhkm/zeptoclaw/issues/663)), completing the channel-plugin protocol ([#662](https://github.com/qhkm/zeptoclaw/issues/662)), adopting a registry/footprint ladder for built-in tools ([#667](https://github.com/qhkm/zeptoclaw/issues/667)).
- **Performance**: byte-stable prompt envelope to unlock provider prompt-cache reuse ([#661](https://github.com/qhkm/zeptoclaw/issues/661)).
- **Operational UX**: Cron Job v2 with completion ack + run ledger ([#665](https://github.com/qhkm/zeptoclaw/issues/665)), config effective-view ([#670](https://github.com/qhkm/zeptoclaw/issues/670)), hermetic integration tests ([#668](https://github.com/qhkm/zeptoclaw/issues/668)), durable cross-session memory writes ([#666](https://github.com/qhkm/zeptoclaw/issues/666)).

The "hot" framing applies to internal maintainer priority rather than external community engagement.

## 5. Bugs & Stability

| Severity | Issue | Title | Fix PR |
|---|---|---|---|
| **P1-critical** (closed) | [#644](https://github.com/qhkm/zeptoclaw/issues/644) | Subprocess env inheritance + timeout without process-tree reap | [#645](https://github.com/qhkm/zeptoclaw/pull/645) ✅ merged |
| **P0 security** (closed) | [#660](https://github.com/qhkm/zeptoclaw/issues/660) | Unscrubbed env at plugin/MCP spawn sites | [#672](https://github.com/qhkm/zeptoclaw/pull/672) ✅ merged |
| **P0 security** (closed) | [#659](https://github.com/qhkm/zeptoclaw/issues/659) | `agent_mode` falls back to Autonomous on invalid input | [#671](https://github.com/qhkm/zeptoclaw/pull/671) ✅ merged |
| **P1-critical** (closed, chore) | [#646](https://github.com/qhkm/zeptoclaw/issues/646) | CI baseline failures (Clippy + cargo-deny) | bundled into the same branch as #645 |

No new unfixed bug reports are visible in the last 24 hours. Open P2-high items that can be classified as latent stability risks: [Issue #664](https://github.com/qhkm/zeptoclaw/issues/664) (delegated children can exceed parent policy), [Issue #669](https://github.com/qhkm/zeptoclaw/issues/669) (audit chain only tamper-evident within one process lifetime), and [Issue #662](https://github.com/qhkm/zeptoclaw/issues/662) (outbound-only channel-plugin protocol with stall risk).

## 6. Feature Requests & Roadmap Signals

All roadmap signal today comes from the maintainer's own backlog, not from external users. The 10 open items form a coherent 10-track plan:

- **S (small)**: [#670](https://github.com/qhkm/zeptoclaw/issues/670) — config effective-view, env-var deprecation, schema-backed get/set.
- **M (medium)**: [#664](https://github.com/qhkm/zeptoclaw/issues/664) delegated-agent policy inheritance; [#669](https://github.com/qhkm/zeptoclaw/issues/669) persist/rotate audit-chain segments; [#668](https://github.com/qhkm/zeptoclaw/issues/668) hermetic seam-level integration tests; [#667](https://github.com/qhkm/zeptoclaw/issues/667) Footprint Ladder + Extension Host v2; [#666](https://github.com/qhkm/zeptoclaw/issues/666) durable cross-session memory; [#665](https://github.com/qhkm/zeptoclaw/issues/665) Cron Job v2 with completion ack.
- **L (large)**: [#663](https://github.com/qhkm/zeptoclaw/issues/663) finish pipeline migration; [#662](https://github.com/qhkm/zeptoclaw/issues/662) complete channel-plugin protocol; [#661](https://github.com/qhkm/zeptoclaw/issues/661) byte-stable prompt envelope (flagged as the "largest architectural performance gap").

Predicted next-version priorities, based on the M-track size labels and the review document's "Quick wins" framing:

- **Highest probability for the next release tag**: [#670](https://github.com/qhkm/zeptoclaw/issues/670) (S — config effective-view) and [#671](https://github.com/qhkm/zeptoclaw/pull/671)-style micro-hardening follow-ons, because they are self-contained UX wins.
- **Likely mid-cycle**: [#661](https://github.com/qhkm/zeptoclaw/issues/661) (prompt envelope) and [#665](https://github.com/qhkm/zeptoclaw/issues/665) (Cron v2) — both are operationally visible and feed directly into cost/UX.
- **Multi-release**: [#663](https://github.com/qhkm/zeptoclaw/issues/663), [#667](https://github.com/qhkm/zeptoclaw/issues/667), [#668](https://github.com/qhkm/zeptoclaw/issues/668) — these are L-track structural rebuilds.

## 7. User Feedback Summary

No new external user feedback is present in the 24-hour window. All opened-and-still-open issues were authored by `qhkm` and reference an internal review document (`docs/reviews/2026-09-06-hermes-comparison-review.md`), suggesting this digest captures a self-driven hardening sprint against the `Hermes` comparison reference rather than a community-driven release cycle.

Indirect user-impact signals (i.e., what everyday users should care about today):

- **Reduced risk for self-hosters**: secrets are now isolated from spawned subprocesses, and a typo in `agent_mode` no longer escalates permissions.
- **Improved reliability**: timed-out `Command::output()` calls now properly reap process trees, so users should see fewer orphan `sh`/`bash`/Docker processes after long-running tool calls.
- **No user-visible feature shipped**: there is nothing new to enable or turn on; all changes are safety defaults.

## 8. Backlog Watch

Two distinct classes of stale-but-mission-critical items need maintainer attention:

**Stale dependency PRs (all from 2026-06-03, ~3 months old, all from `dependabot[bot]`, zero comments, zero reviews):**

- [PR #627](https://github.com/qhkm/zeptoclaw/pull/627) — bump `serde_json 1.0.149 → 1.0.150`
- [PR #625](https://github.com/qhkm/zeptoclaw/pull/625) — bump `rpassword 7.4.0 → 7.5.2` (Unicode parsing fix)
- [PR #623](https://github.com/qhkm/zeptoclaw/pull/623) — bump `tokio 1.52.1 → 1.52.3` (patch release)
- [PR #620](https://github.com/qhkm/zeptoclaw/pull/620) — bump `scraper 0.26.0 → 0.27.0` (breaking per upstream changelog)
- [PR #617](https://github.com/qhkm/zeptoclaw/pull/617) — bump `tower-http 0.6.10 → 0.6.11`

Note: [Issue #646](https://github.com/qhkm/zeptoclaw/issues/646)'s body mentions that `cargo-deny` is currently rejecting `quick-xml 0.39.2` and `lopdf 0.40.0` — these are **not** covered by the open Dependabot PRs above and represent a separate, unresolved dependency-hygiene gap.

**Security-sensitive open items that have no PR yet:**

- [Issue #664](https://github.com/qhkm/zeptoclaw/issues/664) (P2-high) — child subagents can exceed parent policy. Closely related to today's P0 fixes; treating the rest of the delegation path as P2 is internally consistent with the review's framing of the "quick wins" being done, but it remains the highest-risk unactioned safety item.
- [Issue #669](https://github.com/qhkm/zeptoclaw/issues/669) (P2-high) — audit chain loses tamper-evidence across restarts.
- [Issue #662](https://github.com/qhkm/zeptoclaw/issues/662) (P2-high, L-track) — channel-plugin protocol stalls (operational reliability risk for multi-channel users).

**Architectural debt that is now formally acknowledged:**

- [Issue #663](https://github.com/qhkm/zeptoclaw/issues/663) — production still runs the legacy 5,227-line `AgentLoop` while `CoreLoop` lives in tests only.
- [Issue #646](https://github.com/qhkm/zeptoclaw/issues/646) — closed but the underlying CI-supply-chain work it represents (vulnerable `quick-xml`/`lopdf`) does not yet have a tracking issue.

---

**Overall project-health read**: Healthy, intent-driven, and disciplined for a single-maintainer safety push. The 4-closed / 10-open ratio and the M/L effort tags on the remaining 10 issues indicate this is a planned multi-sprint hardening initiative rather than a reactive firefight. The concerning signal is the absence of community engagement (no external contributors, no new voices) and the 3-month-stale Dependabot queue.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-09-07

## 1. Today's Overview

ZeroClaw shows **high architectural activity but no release movement** heading into September 7, 2026. The project is dominated by RFC lifecycle management — four major architecture RFCs (#9487 sessions, #9488 file/attachment surface, #6996 sandbox policy, #10076 WASM plugin runtime) are all in advanced revision cycles with 10–34 comments each, indicating an active maintainer community converging on core design decisions. The last 24 hours saw **32 issue updates (29 open, 3 closed)** and **50 PR updates (44 open, 6 merged/closed)** — a healthy contributor pipeline, though 44 open PRs against only 6 merged signals a potential **review bottleneck** that maintainers will need to watch. Stability concerns remain elevated: multiple **S1 workflow-blocked bugs** are open simultaneously, including a daemon stack overflow (#10230) and incomplete provider responses being misreported as success (#9421).

## 2. Releases

No new releases in the reporting period. The most recent stabilization tracker (#9459) indicates a **v0.8.5 finite weekly stabilization line** with intake frozen as of August 4, 2026 and weekly cuts shipping ready work — meaning the next release is still in stabilization, not yet tagged.

## 3. Project Progress

**Merged/closed issues today (3):**
- **#9575** — Use `/models` (not `/chat/completions`) for OpenAI-compatible provider warmup. *Fixed a warmup path that previously relied on a 405-style probe.*
- **#9653** — Plugin `wasi:http` now trust-model aligned; follow-up scoped into existing destination-policy work (#9395). *Security gap closed on the plugin egress path.*
- **#10572** — WeCom (WeChat Work) channel documented. *Good-first-issue; closes docs gap for an implemented-but-undocumented channel.*

**Merged/closed PRs (visible in top list):**
- **#10487** — `fix(channels/matrix)`: transcription providers now resolve from **live config** instead of a construction-time snapshot, fixing unregistered typed transcription entries.
- **#10650** — `ci(channels/matrix)`: Matrix library tests are now executed, not just compiled — previously only a single module filter ran.

**Net effect:** progress is concentrated in **provider correctness, channel/test infrastructure, and security follow-ups**, while the heavyweight architectural work (session transcript persistence, WASM runtime, sandbox policy) remains in RFC negotiation rather than code.

## 4. Community Hot Topics

**Most active issues (by comment count):**

| Issue | Comments | Theme |
|---|---|---|
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) RFC: Runtime-owned conversation sessions & transport adapters | 34 | Session lifecycle architecture — now at **Revision 5**, replacing a revoked Rev-4 vote snapshot |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) RFC: Unified file/attachment architecture | 27 | File & attachment surface — **Revision 10**, the most-iterated RFC in the tree |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) RFC: Granular sandbox policy — filesystem restrictions | 25 | Reconciling app-layer path admission with OS sandbox backends (Bubblewrap/Landlock/Seatbelt) |
| [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) Bug: 74 Windows test failures | 19 | Cross-platform test parity — Unix-only test commands, path semantics, CJK console code page |

**Underlying needs:** The top three threads all orbit a single concern — **reconciling ZeroClaw's layered security model (session identity, file admission, OS sandbox) into a coherent runtime-owned architecture.** The revision churn (Rev-10 on files, Rev-5 on sessions) suggests maintainers are actively voting and iterating, but the repeated "material replacement" language indicates **consensus is still fragile**. The Windows test thread (#7462, P1) signals contributors increasingly expect **first-class non-Linux support** despite CI historically running Linux-only.

**Most active PRs:** #9713 (*token accounting on history-trim*, blocked) and #9378 (*persist failed/cancelled ACP transcripts*) lead the open queue — both address the same underlying gap identified in the session RFC: **durable, lossless conversation history**.

## 5. Bugs & Stability

Ranked by severity (S1 = workflow blocked):

| Severity | Issue | Status / Fix PR |
|---|---|---|
| **S1** | [#10230](https://github.com/zeroclaw-labs/zeroclaw/issues/10230) Daemon startup/reload **stack overflow** during agent init | In-progress, `r:needs-repro`; related defensive PR #10654 (*bound RPC dispatch stack usage*) is open but targets the RPC path, not this repro |
| **S1** | [#9421](https://github.com/zeroclaw-labs/zeroclaw/issues/9421) **Incomplete terminal responses reported as successful** (provider ends turn without final answer) | In-progress, no linked fix PR visible |
| **S1** | [#9191](https://github.com/zeroclaw-labs/zeroclaw/issues/9191) Cron jobs have **no wall-clock timeout**; in-flight locks only cleared at process start | In-progress, accepted, no-stale |
| **S1** | [#10659](https://github.com/zeroclaw-labs/zeroclaw/issues/10659) Budget-exceeded Code turn **loses visible progress after session restore** | New today (0 comments), follow-up, no PR yet |
| **P1/high** | [#10644](https://github.com/zeroclaw-labs/zeroclaw/issues/10644) Background delegate results not bound to an **owner principal** (security) | Accepted, follow-up from #10601 |
| **P1/high** | [#10635](https://github.com/zeroclaw-labs/zeroclaw/issues/10635) Profile cost limit reports `4294967295` while **global daily budget still rejects** turns | Accepted — config/onboarding honesty bug |
| **P1/high** | [#10617](https://github.com/zeroclaw-labs/zeroclaw/issues/10617) `thinking.display="updates"` returns **400 on Claude Fable 5.1** — enum narrower than shipped | Open, single comment |
| **P2** | [#10302](https://github.com/zeroclaw-labs/zeroclaw/issues/10302) ZeroCode Code pane stuck in `Processing...` while browsing history, **CPU burn** | In-progress, follow-up |

**Fresh today (9/6) — early signal:** #10659 (S1), #10660 (third cache breakpoint), #10662 (OAuth cache marker below Anthropic minimum), #10663 (configurable 1-hour prompt-cache TTL). The burst of **Anthropic cache-breakpoint issues** (#10660/#10662/#10663) suggests active provider-optimization work hitting real API constraints.

**Regression outlook:** Windows path semantics (#7462), session-restore progress loss (#10659), and the daemon overflow (#10230) represent **three independent S1/S2 reliability defects** that could block a tagged v0.8.5.

## 6. Feature Requests & Roadmap Signals

**Strong candidates for the next version:**

1. **Persistent session transcript architecture** — RFC #9487 (Rev-5) plus PR #9378 (already open, persisting failed/cancelled ACP transcripts) and #6932 (transcript-aware gateway persistence) are converging; this is the most likely near-term landing.
2. **Delegate sub-agent observability** — #10531 (parent sees sub-agent progress/receipts) is a P2 architecture item with clear demand; follow-ups #10644 and #10645 already exist.
3. **Gateway WebSocket background turns** — #7759 (P1, accepted, in-progress) decouples WS lifetime from turn lifecycle; security-bound PR #10664 (sanitized health endpoint) plus #10450 (SSE webhook streaming) show the gateway surface is under active rework.
4. **Telegram UX parity** — #9997 (secure model picker, blocked/needs-review) and #10426 (user-facing progress in Telegram) reflect a push to make chat channels first-class citizens, not thin shells.
5. **Mattermost approvals** — PR #10358 adds the first real approval path for Mattermost (currently *all* approval-requiring tools are denied); marked XL/high-risk and blocked but signals channel completeness as a 2026 goal.

**Lower confidence / longer horizon:** Composable WASM plugin runtime (#10076, early RFC), AnySearch provider (#10356, blocked), persistent session prompt attachments (#10407, XL).

## 7. User Feedback Summary

**Concrete pain points surfaced this period:**

- **Trust in final answers:** #9421 — users delegate or run terminal work and ZeroClaw reports success even when the provider never produced a trustworthy final answer. This is the most dangerous reliability complaint; it means a user-facing "done" can hide a silent failure.
- **Silent Telegram turns:** #10426 — Telegram conversations appear frozen during long tool calls; users cannot distinguish "working" from "stalled," directly eroding confidence in the channel.
- **Progress loss on restore:** #10659 — a budget-exceeded turn that had already streamed text and finished tool activity is discarded on session restore, so users lose visible evidence of completed work.
- **Windows second-class status:** #7462 (74 failing tests, code-page 936 console encoding) shows community contributors on Windows are hitting path/encoding walls that Linux CI never exposes.
- **Cache/performance tuning:** #10660/#10662/#10663 — contributors are actively probing Anthropic's cache-breakpoint limits (4 slots, 5-min default TTL) and finding ZeroClaw's markers waste budget or miss history fallback; this is power-user-level dissatisfaction with token cost efficiency.

**Positive signals:** The RFC process, while slow, is being earnestly followed — maintainers explicitly invalidate prior vote snapshots on material revisions (#9487/#9488), which suggests governance integrity even when it slows convergence.

## 8. Backlog Watch

**Needs maintainer attention (open, age + importance):**

| Item | Age (days) | Why it matters |
|---|---|---|
| [#6932](https://github.com/zeroclaw-labs/zeroclaw/issues/6932) Gateway WS sessions as full transcripts | ~105 | Blocked on RFC #9487; **anchor** for session persistence work |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) Granular sandbox policy | ~102 | 25 comments, still in-progress — security-critical, high-risk |
| [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) 74 Windows test failures | ~89 | P1, accepted but not resolved; CI still Linux-only |
| [#7759](https://github.com/zeroclaw-labs/zeroclaw/issues/7759) Gateway WS lifetime decoupling | ~83 | P1 accepted — foundational for background turns |
| PR [#9713](https://github.com/zeroclaw-labs/zeroclaw/pulls/9713) Token accounting on history-trim | ~35 | **Blocked + do-not-merge**, size XL; directly blocks durable-transcript observability |
| PR [#9378](https://github.com/zeroclaw-labs/zeroclaw/pulls/9378) Persist failed/cancelled ACP transcripts | ~43 | **needs-author-action + stale-candidate** — risk of drifting stale despite being a direct prerequisite for session RFC goals |
| PR [#9997](https://github.com/zeroclaw-labs/zeroclaw/pulls/9997) Telegram secure model picker | ~24 | **Blocked + do-not-merge** — community-contributed, XL, needs maintainer review to unblock |
| PR [#10411](https://github.com/zeroclaw-labs/zeroclaw/pulls/10411) Serialize same-session messages | ~11 | **needs-author-action**, XL — impacts conversation race semantics |

**Watch items:** #8692 (Maintainer Decision Queue tracker) is the coordination mechanism for the RFC backlog — its 15 comments indicate maintainers are aware of the queue, but the number of `do-not-merge`/`blocked` XL PRs suggests **review capacity, not consensus, is the binding constraint** on ZeroClaw's throughput right now.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*