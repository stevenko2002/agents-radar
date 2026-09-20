# OpenClaw Ecosystem Digest 2026-09-21

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-09-20 22:15 UTC

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

# OpenClaw Project Digest - 2026-09-21

## 1. Today's Overview
The OpenClaw project shows significant activity with 500 issues and 500 PRs updated in the past 24 hours. **Critical stability issues dominate the agenda**, with major concerns around memory management, database integrity, and process leaks. The project is in a reactive mode addressing multiple high-severity bugs that could impact user experience and system reliability. No new releases are currently available, indicating focus on bug fixes rather than feature releases.

## 2. Releases
**No new releases available.** The project is currently focused on addressing critical bugs and stability issues rather than publishing new versions. The absence of releases suggests ongoing intensive debugging and maintenance work.

## 3. Project Progress
**Merged PRs today include:**
- **#153962**: Defer maintainer tooling on product-only PRs to reduce costs
- **#147440**: Preserve reference intent and file ownership during config writes  
- **#143033**: Distinguish known zero costs from missing pricing in usage reports
- **#136158**: Reject unknown proxy query presets with better error handling
- **#153987**: Validate visitor permissions before granting access (security enhancement)
- **#152181**: Share external harness session and attempt machinery for agent backends
- **#153683**: Compact agent storage and index full-text maintenance for performance
- **#153513**: Keep delegated work visible after parent replies (user experience fix)
- **#153984**: Avoid local health timeouts for wildcard Gateways
- **#154111**: Keep update requests owned through acceptance for better workflow

**Key Advances:**
- Improved configuration management and file ownership preservation
- Enhanced agent session sharing for better backend consistency
- Database compaction and full-text index maintenance for performance
- Better visitor access validation for security
- UI improvements for cost display and message recovery

## 4. Community Hot Topics
**Most Active Discussions (by comment count):**

1. **#143524** - Agent SQLite WAL checkpointing failure (34 comments)
   - **Problem**: Agent SQLite WAL grows to 2.8GB without checkpointing on Windows
   - **Impact**: Blocks gateway startup, severe performance degradation
   - **Community Need**: Reliable database transaction management

2. **#97616** - OpenClaw leaks unreaped hook/tool child processes (31 comments, 1👍)
   - **Problem**: Zombie processes accumulate under main openclaw process
   - **Impact**: Runtime degradation over time
   - **Community Need**: Proper process lifecycle management

3. **#144911** - MCP server init timeout crashes Gateway (31 comments)
   - **Problem**: Unhandled rejection in child cleanup path causes entire Gateway crash
   - **Impact**: Service availability critical
   - **Community Need**: Robust error handling in child process management

4. **#91588** - Gateway Memory Leak (29 comments, 1👍)
   - **Problem**: RSS grows from 350MB to 15.5GB over days
   - **Impact**: OOM crashes, repeated restart cycles
   - **Community Need**: Memory management and leak detection

5. **#119720** - Synchronous agent persistence blocks event loop (21 comments)
   - **Problem**: Synchronous operations stall Gateway at scale
   - **Impact**: Poor concurrency and responsiveness
   - **Community Need**: Async operation optimization

**Underlying Needs:** The community is heavily focused on **core stability issues** - database integrity, memory management, and process lifecycle. These are foundational problems that directly impact user trust and system reliability.

## 5. Bugs & Stability
**High-Severity Critical Issues:**

1. **#91588** - **GATEWAY MEMORY LEAK** ⭐⭐⭐⭐⭐
   - **Status**: Open, 29 comments
   - **Impact**: OOM crashes, 15.5GB memory growth
   - **Fix Status**: No fix PR visible yet

2. **#143524** - **SQLITE WAL GROWTH** ⭐⭐⭐⭐⭐
   - **Status**: Open, 34 comments
   - **Impact**: 2.8GB WAL files, gateway startup blocks
   - **Fix Status**: No fix PR visible yet

3. **#149538** - **GATEWAY READY BUT NON-RESPONSIVE** ⭐⭐⭐⭐
   - **Status**: Open, 20 comments
   - **Impact**: Health probes timeout, event loop starvation
   - **Fix Status**: No fix PR visible yet

**Medium-Severity Issues:**

4. **#97616** - **PROCESS LEAKAGE** ⭐⭐⭐⭐
   - **Status**: Open, 31 comments, 1👍
   - **Impact**: Zombie accumulation, runtime degradation
   - **Fix Status**: No fix PR visible yet

5. **#144911** - **MCP TIMEOUT CRASH** ⭐⭐⭐⭐
   - **Status**: Open, 31 comments
   - **Impact**: Entire Gateway crash from timeout
   - **Fix Status**: No fix PR visible yet

6. **#119720** - **SYNCHRONOUS BLOCKING** ⭐⭐⭐
   - **Status**: Open, 21 comments
   - **Impact**: Event loop stalls, poor concurrency
   - **Fix Status**: Partial repairs mentioned (#140231, #138984)

**Recent Fixes (Closed/Related PRs):**
- **#152759** - Update failure with doctor-failed (CLOSED)
- **#153704** - Update failure at migration integrity check (CLOSED)
- **#153246** - Plugin build temp dir cleanup (CLOSED)
- **#153067** - State DB re-copying issue (CLOSED)

## 6. Feature Requests & Roadmap Signals
**Emerging Trends:**

1. **Plugin Architecture Improvements:**
   - Visitor permission validation before access (#153987)
   - Plugin build temp directory cleanup (#153246)
   - Per-agent web_fetch SSRF overrides (#67421)

2. **User Experience Enhancements:**
   - Keep delegated work visible after parent replies (#153513)
   - Apply Labs settings without restarting Gateway (#153975)
   - Make message recovery actionable in Inbox (#153974)

3. **Performance Optimizations:**
   - Compact agent storage and full-text index maintenance (#153683)
   - Reduce eager imports during workspace discovery (#154115)
   - Reuse warmed JavaScript bytecode in CI (#154113)

4. **Configuration Management:**
   - Preserve reference intent and file ownership during config writes (#147440)
   - Reject unknown proxy query presets (#136158)
   - Defer maintainer tooling on product-only PRs (#153962)

**Next Version Predictions:**
Based on PR trends, the next release likely prioritizes:
- **Stability fixes** for memory leaks and database issues
- **Performance improvements** in agent persistence and indexing
- **Security enhancements** in access validation
- **User experience** fixes for visibility and recovery

## 7. User Feedback Summary
**Major Pain Points Identified:**

1. **Reliability Issues:** Memory leaks, database corruption, and process crashes dominate user complaints
2. **Performance Problems:** Event loop blocking, high memory usage, and slow operations
3. **Update Failures:** Multiple reports of update deadlocks and migration failures
4. **Visibility Issues:** Delegated work disappearing, message recovery hidden, delayed responses

**Satisfaction Drivers:**
- Users value **stability and reliability** over new features
- Quick recovery from failures is crucial for trust
- Configuration and update workflows need better error handling
- Process transparency (what's running, why it fails) is important

**Dissatisfaction Triggers:**
- Crashes and outages without clear explanations
- Silent failures during updates
- Resource consumption leading to OOM conditions
- Complex recovery processes

## 8. Backlog Watch
**Critical Issues Needing Maintainer Attention:**

1. **#91588** - **Gateway Memory Leak** (P1, 29 comments, 1👍) - **URGENT**
   - RSS grows from 350MB to 15.5GB over days
   - Multiple OOM crashes reported
   - Requires immediate investigation

2. **#143524** - **SQLite WAL Growth** (P0, 34 comments) - **CRITICAL**
   - Database checkpointing completely broken on Windows
   - 2.8GB WAL files blocking startup
   - Must fix before new releases

3. **#97616** - **Process Leakage** (P1, 31 comments, 1👍) - **HIGH**
   - Zombie processes accumulate over time
   - Affects all hook/tool execution
   - Performance degradation issue

4. **#149538** - **Non-responsive Gateway** (P0, 20 comments) - **CRITICAL**
   - Gateway shows ready but serves nothing
   - Health probes timeout
   - 632-agent fleet affected
   - Immediate action required

5. **#153049** - **Update Failure** (P0, 6 comments) - **HIGH**
   - Doctor-failed during 2026.9.4 update
   - Multiple user reports of similar failures
   - Affects upgrade stability

**PRs Waiting for Author/Proof:**
- #153987 - Visitor permission validation
- #153975 - Apply Labs settings without restart
- #153974 - Make message recovery actionable
- #154020 - Link team activity to work sessions
- #153978 - Session-scoped operator access

**Maintainer Priority Items:**
1. Fix memory leak (#91588) - affects system stability
2. Fix SQLite WAL checkpointing (#143524) - affects database integrity
3. Address non-responsive gateway (#149538) - affects service availability
4. Resolve process leakage (#97616) - affects long-term performance
5. Investigate update failures (#153049) - affects user experience

The project is clearly in a **critical stabilization phase**, with maintainers needing to prioritize core infrastructure fixes over feature development. The high concentration of P0/P1 issues suggests this may be a pre-release stabilization period before the next major version.

---

## Cross-Ecosystem Comparison



# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem
**Date:** 2026-09-21

---

## 1. Ecosystem Overview

The personal AI assistant open-source landscape in 2026 is a maturing but fragmented ecosystem of 13+ active projects, ranging from heavily resourced platforms to dormant repositories. The dominant narrative across active projects is a **tension between stability and velocity**: several projects (OpenClaw, Hermes Agent, ZeroClaw) are drowning in critical bugs while simultaneously pushing major architectural refactoring. The ecosystem is consolidating around a few technical paradigms—WASM plugins, event-sourced sessions, transport-abstraction layers, and heartbeat/cron scheduling—but adoption is uneven. Community engagement is highly concentrated: OpenClaw and ZeroClaw each command ~50 daily issue/PR touches, while half the projects show zero activity. The overall signal is one of **high engineering ambition meeting operational reality**, with the projects that ship releases regularly (LobsterAI, CoPaw) demonstrating healthier user trust than those stuck in perpetual beta.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Latest Release | Health Signal |
|---|---|---|---|---|
| **OpenClaw** | 500 updated | 500 updated | None (stabilization) | ⚠️ Moderate — critical P0 bugs unaddressed, no releases |
| **NanoBot** | 4 updated | 56 (37 merged) | None | ✅ Good — high merge rate, rapid triage, architecture migration |
| **Hermes Agent** | 50 updated | 50 (2 merged) | None (v2026.9.14 baseline) | ⚠️ Concerning — 48 PRs unmerged, severe backlog |
| **PicoClaw** | 6 updated | 5 (2 merged) | None | ⚠️ Moderate — critical regression untriaged, stale issues |
| **NanoClaw** | 1 open | 40 (38 merged) | v2.3.0 | ✅ Good — highest merge rate, concentrated contribution |
| **NullClaw** | 1 updated | 0 | None | ❌ Minimal — single usability issue, no dev activity |
| **IronClaw** | 0 | 6 (all Dependabot) | None | ⚠️ Stable but inactive — automation-only, zero community engagement |
| **LobsterAI** | 3 (all stale) | 12 (5 merged) | 4 releases (9.14–9.20) | ✅ Good — active release cadence, feature velocity, stale backlog risk |
| **Moltis** | 1 closed | 0 | None | ⚠️ Moderate — focused triage, no PR pipeline |
| **CoPaw** | 24 updated | 37 (14 merged) | v2.2.2-beta.3 | ✅ Good — high velocity, strong testing, critical backend bugs remain |
| **ZeroClaw** | 50 updated | 50 updated | None | ✅ Good (with strain) — high RFC throughput, XL PRs awaiting review |

*Health signal is derived from merge rate, release recency, bug triage velocity, and community engagement.*

---

## 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Largest visible community:** 500 issue/PR touches in 24h dwarfs all but ZeroClaw, indicating either a very large user base or a very loud bug surface. The comment counts (34 on SQLite WAL, 31 on process leaks, 29 on memory leaks) represent the deepest technical discussion threads in the ecosystem.
- **Reference architecture:** As the "core reference" project, OpenClaw's bug patterns (memory leaks, SQLite WAL, event-loop blocking) are effectively the canonical challenge set for the entire agent-runtime space. Other projects (LobsterAI, Hermes Agent) explicitly track OpenClaw compatibility.
- **Security-conscious PR volume:** Visitor permission validation (#153987), proxy preset rejection (#136158), and config ownership preservation (#147440) signal a mature security mindset that most peers lack.

**Technical Approach Differences:**
- OpenClaw is a **monolithic Gateway process** with heavy SQLite dependency, child process orchestration (hooks/tools/MCP), and a config-driven plugin model. This is distinct from ZeroClaw's WASM-plugin + event-sourcing approach, NanoClaw's skill-based extensibility, and CoPaw's multi-tab terminal + model-management unification.
- Its architecture makes it **more vulnerable to process-leak and memory-leak class bugs** than peers that use sandboxed plugin runtimes (ZeroClaw's WASM, NanoBot's in-memory child sessions).

**Community Size Comparison:**
OpenClaw and ZeroClaw are the clear leaders in raw engagement. However, Hermes Agent's 124-comment thread (#88584) and Claude OAuth billing issue (#25267, 57👍) suggest a highly engaged user base that is frustrated by unshipped fixes rather than absent contribution.

---

## 4. Shared Technical Focus Areas

Multiple projects are converging on the same technical requirements, indicating ecosystem-wide architectural shifts:

| Focus Area | Projects | Specific Need |
|---|---|---|
| **Session & Context Isolation** | OpenClaw, NanoBot, Hermes Agent, ZeroClaw | Per-session chat routing (NanoBot #5838), session-scoped operator access (OpenClaw #153978), runtime-owned sessions (ZeroClaw RFC #9487), subagent child sessions (NanoBot #5811) |
| **Database / Storage Integrity** | OpenClaw, NanoBot, Hermes Agent | SQLite WAL checkpointing (OpenClaw #143524), FTS5 search index (NanoBot #5509), state DB re-copying (OpenClaw #153067), event-sourced persistence (ZeroClaw #10526) |
| **Process & Memory Management** | OpenClaw, Hermes Agent, NanoClaw | Zombie process reaping (OpenClaw #97616), memory leak from 350MB→15.5GB (OpenClaw #91588), container timeout from oversized sessions (NanoClaw #700), idle timeout controls (NanoClaw #2152) |
| **Provider / Auth Abstraction** | Hermes Agent, PicoClaw, LobsterAI, NanoBot | Subscription OAuth (Hermes #25267), OAuth scope correctness (PicoClaw #3378), xAI credential migration (LobsterAI #2675), OpenAI-compatible providers (PicoClaw #3366) |
| **Scheduler / Heartbeat Control** | Moltis, LobsterAI, Hermes Agent | Active-hours enforcement (Moltis #1205), tool-control scoping for cron (Moltis #1279), scheduled-task casing preservation (LobsterAI #2722), cron merge conflicts (Hermes #88584) |
| **Security Sandboxing** | ZeroClaw, OpenClaw, Hermes Agent | Sandbox policy schema (ZeroClaw #7821), workspace-confined filesystem mutations (ZeroClaw #9977), visitor permission validation (OpenClaw #153987), browser automation opt-in (ZeroClaw #9830) |

**Key Insight:** Six projects independently arrived at the same need for **session isolation** and **provider abstraction**—this is the dominant architectural concern of the ecosystem in late 2026.

---

## 5. Differentiation Analysis

| Project | Feature Focus | Target User | Architecture Signature |
|---|---|---|---|
| **OpenClaw** | Stability, security, config management | Enterprise/ops users running gateway fleets | Monolithic Gateway + SQLite + child process pool |
| **NanoBot** | WebUI protocol, provider integrations, API routing | Developers building on WebUI/API surfaces | Event-protocol migration, in-memory child sessions |
| **Hermes Agent** | Desktop experience, Bot Mode, provider flexibility | Multi-platform desktop + chat users | Desktop shell + session wrapper + provider routing layer |
| **PicoClaw** | Channel reliability (IRC, QQ, DingTalk), provider extensibility | Multi-channel deployment operators | Go-based, channel adapters, lightweight provider model |
| **NanoClaw** | WhatsApp integration, OpenCode provider, skill ecosystem | WhatsApp-heavy personal assistants | Chat SDK bridge, skill packaging, companion rows |
| **CoPaw** | Unified model management, terminal, community feeds | Platform builders, power users with console access | Multi-tab terminal + unified provider discovery + ReMeLight memory |
| **ZeroClaw** | WASM plugins, event sourcing, desktop computer-use | Security-conscious deployers, plugin developers | WASM runtime + append-only event history + pluggable transport adapters |
| **LobsterAI** | OpenClaw compatibility, subscription monetization, browser passkeys | Enterprise users migrating from OpenClaw | OpenClaw fork with repair/migration tooling + passkey auth |
| **Moltis** | Heartbeat scheduler correctness | Enterprise users needing bounded autonomy | Cron/heartbeat scheduler with config-driven constraints |

**Architectural Divergence:** The ecosystem is splitting into two camps—**gateway-centric** (OpenClaw, LobsterAI, Hermes Agent) and **plugin/sandbox-centric** (ZeroClaw, NanoBot, PicoClaw). The former prioritizes operational simplicity at the cost of process-management fragility; the latter prioritizes security and extensibility at the cost of architectural complexity.

---

## 6. Community Momentum & Maturity

### Rapidly Iterating (High Velocity, Active Releases)
- **NanoBot:** 37 merged PRs, architecture migration complete, rapid bug triage. No releases yet but engineering velocity is exceptional.
- **CoPaw:** 14 merged PRs, v2.2.2-beta.3 shipped, 1,027 frontend test statements added. Strong CI/CD discipline.
- **LobsterAI:** 4 releases in 7 days, 5 merged PRs, active OpenClaw compatibility work. Highest release cadence in the ecosystem.

### Stabilizing (High Activity, Bottlenecked)
- **OpenClaw:** Massive bug report volume but zero releases. Maintainers are in reactive stabilization mode. The risk is that critical fixes (#91588, #143524) remain unshipped.
- **ZeroClaw:** 12 issues closed (including 6 accepted RFCs), but XL PRs await review. Bandwidth is stretched; the project is architecturally ambitious but execution-constrained.
- **Hermes Agent:** High issue churn (42% closed) but 48 open PRs from a single maintainer (`teknium1`) represent a merge/release bottleneck. The fix backlog is substantial but already reviewed.

### Moderate / Niche
- **PicoClaw:** Steady maintenance, but a fresh panic regression (#3382) and stale issues suggest limited maintainer bandwidth.
- **NanoClaw:** Exceptionally high merge rate (38/40), but contribution is heavily concentrated (one author). Healthy but fragile.
- **Moltis:** Focused triage on heartbeat scheduler, but no PR pipeline active.

### Dormant / Inactive
- **NullClaw, IronClaw, TinyClaw, ZeptoClaw:** Zero or near-zero community activity. IronClaw is maintained by Dependabot only.

---

## 7. Trend Signals

**For AI Agent Developers:**

1. **Session isolation is the new security boundary.** Six projects are implementing per-session context routing. Any agent framework that doesn't natively support session-scoped state will be left behind.

2. **WASM and sandboxed plugins are the emerging extensibility standard.** ZeroClaw's WASM plugin RFC (#10076) and NanoBot's in-memory child sessions (#5811) point toward a future where agent extensions are safely isolated from the core runtime.

3. **Event-sourced conversation state is gaining traction.** ZeroClaw's append-only session event history (#10526) and OpenClaw's SQLite WAL struggles both point to a need for more robust persistence models. Developers should evaluate event sourcing for session durability.

4. **Provider abstraction is table stakes, but billing models are the real blocker.** Hermes Agent's #25267 (57👍) reveals that the hardest problem isn't technical routing—it's subscription-vs-per-token billing. Frameworks that don't solve this will lose Claude/Gemini subscribers.

5. **Scheduler control is an underappreciated enterprise requirement.** Moltis's heartbeat active-hours bug (#1205) and LobsterAI's scheduled-task fixes reveal that enterprise users need bounded, predictable autonomy—not 24/7 agent execution.

6. **The "gateway process" model is showing its age.** OpenClaw's memory leaks, process leaks, and event-loop blocking are symptoms of a monolithic architecture. The ecosystem is quietly moving toward sandboxed, plugin-based runtimes—but migration is slow.

7. **Release discipline is a competitive differentiator.** LobsterAI (4 releases in 7 days) and CoPaw (beta releases with test-gated CI) are building user trust faster than projects with larger backlogs but no shippable fixes. In the agent ecosystem, *shipping fixes* matters more than *having the best architecture*.

---

*Report generated from community digest data for 13 open-source AI agent projects on 2026-09-21.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



Based on the GitHub activity for `HKUDS/nanobot` on **2026-09-21**, here is the structured project digest.

---

### 1. Today's Overview
The NanoBot project is experiencing exceptionally high development velocity on 2026-09-21, characterized by robust engineering activity across both issues and pull requests. There are **56 PRs updated** (19 open, 37 merged/closed) and **4 issues updated** (3 open, 1 closed), with no new releases published today. The activity indicates a major push toward architectural refactoring—specifically migrating the WebUI protocol, refactoring subagent session handling, and resolving critical transport and routing bugs in the API layer. Overall, project health is excellent, with high-quality community contributions and rapid triage of priority bugs (such as API session routing and token consolidation triggers).

---

### 2. Releases
*No new releases were published today.* (Latest releases: None).

---

### 3. Project Progress
A massive volume of work was merged or closed today, indicating rapid iteration on core components:
*   **WebUI Architecture Migration Completed:** PR #5823 (closed) removed the legacy message projection path (`replay_transcript_to_ui_messages`), completing the WebUI event-protocol migration and returning canonical events unconditionally.
*   **New Provider Integrations:** PR #5830 (closed) added the Baizhi Agent Toolkit MCP preset, and PR #5832 (closed) integrated Unifically as a built-in LLM provider on the OpenAI-compatible path.
*   **WebUI UX and Auth Fixes:** PR #5836 (closed) made OAuth reauthentication actionable by distinguishing rejected credentials from temporary network failures. PR #5837 (closed/open hybrid state) resolved navigation issues where temporary chats lost their message cache.
*   **CI and Testing:** PR #5835 (closed) fixed the response-source runner test contract to pass the mandatory `consolidate_history` callback, unblocking CI pipelines.

---

### 4. Community Hot Topics
*   **API Session Routing Breakthrough (PR #5838):** Highly critical issue where all OpenAI-compatible API requests were forced into `chat_id="default"`. This PR routes each `session_id` to its own chat, fixing context isolation, cron bindings, and subagent origins.
*   **WebUI Notification Sound Request (Issue #5524):** Users are requesting a toggleable notification bell sound when an agent turn completes in the WebUI, solving the UX issue of waiting on long tasks without visual feedback.
*   **SSE Reasoning Event Asymmetry (Issue #5833 & PR #5834):** A community developer identified that the raw-SSE Responses consumer dropped `response.reasoning_text.*` events. The fix (PR #5834) is currently open and will benefit xAI Grok and OpenAI Codex providers.
*   **Session Search Performance Bottleneck (Issue #5509):** Proposes moving from full JSONL scans to an asynchronous SQLite FTS5 index to handle hundreds of sessions efficiently.

---

### 5. Bugs & Stability
Bugs reported or fixed today, ranked by severity:

*   **CRITICAL / P1:**
    *   **Token Consolidation Undercount (PR #5403):** Local tiktoken estimation undercounts prompt tokens by 30-50% compared to actual API reports, preventing context compaction from triggering. A fix PR is open but has been in progress since mid-August.
    *   **API Session ID Routing (PR #5838):** Core routing bug where all API sessions collapsed into a single "default" chat, causing severe context leakage. Fix PR is open.
    *   **WebUI Follow-up Replay after Restart (Issue #5808 - Closed):** Stopping a turn cleared the in-memory queue but left durable recovery journal entries, causing messages to replay on gateway restart. Closed as resolved.
*   **MODERATE / P2:**
    *   **Discord Reaction State Cleanup (PR #5807):** Fixes lingering working-emoji tasks and pending-reaction messages during runtime reset. Fix PR is open.
    *   **Email `\Seen` Flag Premature Marking (PR #5605):** Messages were marked `\Seen` before passing filters or delivering to the agent, causing missed emails. Fix PR is open.
    *   **NIM-style Timeout Failover (PR #5769):** Classifies timeouts from exception message text (e.g., NVIDIA NIM) to allow `FallbackProvider` model switching. Fix PR is open.

---

### 6. Feature Requests & Roadmap Signals
*   **Self-Update CLI Flows (PR #5817):** The addition of `nanobot update` and `--update-dev` source flows signals a roadmap shift toward standard, user-friendly CLI lifecycle management, including a SHA-256-verified private Bun runtime bootstrap.
*   **Microsoft OAuth for Email (PR #5609):** The move from basic IMAP/SMTP auth to Microsoft delegated OAuth2 for Office365/Outlook indicates a strong push toward enterprise security compliance.
*   **Reusable JEV Client & Shell Safeguards (PR #5825, PR #5815):** Integration of the OpenRouter Decisions API (JEV) suggests a roadmap focusing on safety guardrails (e.g., `tools.exec.jevGuard`) and smart model routing.
*   **Subagent Execution Refactoring (PR #5811):** Moving subagents to execute through private, in-memory child sessions via the shared `AgentLoop` context instead of separate runner paths.

---

### 7. User Feedback Summary
*   **Pain Points:** Users have highlighted a lack of feedback when long-running agent tasks finish in the WebUI (#5524). Additionally, navigating away from active or temporary chats in the WebUI caused message loss and cache misses (#5837).
*   **Performance Frustrations:** Users noted that session search slows down significantly as JSONL files grow (#5509), and context compaction fails to trigger because local token estimates are wildly inaccurate compared to API reports (#5403).
*   **Use Cases:** Power users running automated API pipelines suffered from session bleeding (`chat_id="default"` bug in #5838), while enterprise email users require modern OAuth2 integrations to keep their mailboxes secure.

---

### 8. Backlog Watch
*   **Issue #5524 (WebUI Notification Sound):** Marked as `good first issue` but remains open with zero comments. It needs maintainer scoping to define audio assets and settings UI integration.
*   **Issue #5509 (FTS5 Search Index):** A vital architectural upgrade for search performance, but currently lacks comments or maintainer feedback. Needs database schema review.
*   **PR #5811 & PR #5817 (Conflict-tagged PRs):** Both of these major refactoring PRs (subagent sessions and self-updates) are marked `[conflict]`. They likely require active maintainer rebasing to resolve branch conflicts on `main`.
*   **PR #5403 (Token Consolidation Fix):

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent — Project Digest
**Date:** 2026-09-21 · **Repo:** [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

---

## 1. Today's Overview

Hermes Agent shows **very high issue throughput but a widening PR bottleneck**: 50 issues and 50 PRs were touched in the last 24h, yet only **2 PRs were merged/closed** against **48 left open**. Issue flow is healthier — 21 of 50 updated issues closed (42%), indicating active triage. Notably, the visible issue churn is dominated by **duplicate closures** (Gemini `AQ.` routing, ZAI vision routing, `httpx2` advisories, `key_cmd` shell injection), suggesting a maintainer sweep consolidating reports rather than 21 independent fixes. The PR queue is dominated by a **batch of "salvage" PRs authored by a single maintainer (`teknium1`)**, each referencing a prior issue/salvage number — a recognizable pattern of a large backport/rebase wave. **No releases** shipped, so the substantial fix volume accumulating in open PRs has not yet reached users.

**Health snapshot**

| Metric | Value | Read |
|---|---|---|
| Issues updated | 50 (29 open / 21 closed) | Healthy triage velocity |
| PRs updated | 50 (48 open / 2 merged-closed) | ⚠️ Severe merge backlog |
| New releases | 0 | Fixes not shipping |
| Top-comment issue | #88584 (124 comments) | Long-running, stalled automation |

---

## 2. Releases

**None.** No new versions in the reporting window. Users are currently pinned to the most recent prior tag (issues reference `v2026.9.14` as the tested baseline). Given the volume of open fix PRs (VRAM residency caps, Windows venv-holder guards, PKCE auth hardening, dependency advisory bumps), a release appears overdue.

---

## 3. Project Progress

Only **2 PRs merged/closed** in the window; the top-20 PR list is entirely open, so merged-PR specifics are not enumerated in the supplied data. Progress is instead visible as **advanced-but-unmerged work**, concentrated in one maintainer's batch:

- **Local runtime / Windows** — [PR #117656](https://github.com/NousResearch/hermes-agent/pull/117656): resident model cap now derived from VRAM with `models_max` as ceiling (#116078).
- **Update tooling** — [PR #117657](https://github.com/NousResearch/hermes-agent/pull/117657): `hermes update --list-venv-holders` (JSON, exit 3); [PR #117663](https://github.com/NousResearch/hermes-agent/pull/117663): pending fleet restart spares gateways already on checkout code (#117051).
- **Desktop** — [PR #117658](https://github.com/NousResearch/hermes-agent/pull/117658) (right-rail preview tabs scoped per chat), [PR #117659](https://github.com/NousResearch/hermes-agent/pull/117659) (remote-served updates no longer spawn local gateway), [PR #117664](https://github.com/NousResearch/hermes-agent/pull/117664) (edit composer after timeline jump), [PR #117661](https://github.com/NousResearch/hermes-agent/pull/117661) (link-title sign-in wall detection).
- **Agent core** — [PR #117606](https://github.com/NousResearch/hermes-agent/pull/117606) (child timeout bounds inactivity, not total runtime), [PR #117576](https://github.com/NousResearch/hermes-agent/pull/117576) (MoA advisor guidance staleness), [PR #117557](https://github.com/NousResearch/hermes-agent/pull/117557) (`@folder:` listing under widened `allowed_root`).
- **Auth / providers** — [PR #117655](https://github.com/NousResearch/hermes-agent/pull/117655) (plugin alias/display-name ownership), [PR #117594](https://github.com/NousResearch/hermes-agent/pull/117594) (PKCE `invalid_grant` marked grant-dead), [PR #110951](https://github.com/NousResearch/hermes-agent/pull/110951) (require usable credentials before fallback).
- **Ecosystem** — [PR #117660](https://github.com/NousResearch/hermes-agent/pull/117660) (plugin-catalog: `prompt-snippets` v1.6.0), [PR #97772](https://github.com/NousResearch/hermes-agent/pull/97772) (camofox external noVNC discovery), [PR #117662](https://github.com/NousResearch/hermes-agent/pull/117662) (browserslist/vitest advisory bumps).

**Closed issues representing completed triage:** #66750, #116376, #117296, #90451, #117146, #117147, #116464, #95613, #117411, #117208, #117087, #85879, #117291, #114736, #86153, #116907, #117263.

---

## 4. Community Hot Topics

1. **[Issue #88584 — "Automated Nous integration is blocked"](https://github.com/NousResearch/hermes-agent/issues/88584)** · OPEN · **124 comments** · updated 2026-09-20
   Cron merge conflicts in `cron/jobs.py`; the dashboard updater is stuck on the last tested Enterkey release. This is by far the most-discussed thread and represents **release-automation friction**, not end-user functionality. The `invalid` label plus 124 comments suggests either a bot-loop or unresolved process dispute — a governance smell worth maintainer attention.

2. **[Issue #25267 — Claude Agent SDK provider with subscription OAuth](https://github.com/NousResearch/hermes-agent/issues/25267)** · OPEN · **20 comments · 57 👍** · created 2026-05-13
   The **highest-reaction item in the dataset**. Users on a Claude subscription are forced into per-token Developer Platform billing — "effectively pay twice." Labels `blocked`, `needs-decision`, `area/billing` signal this is a **business/licensing decision**, not an engineering gap.

3. **[Issue #66750 — Cline gateway nested non-streaming envelope](https://github.com/NousResearch/hermes-agent/issues/66750)** · CLOSED · 5 comments
   Custom OpenAI-compatible endpoints returning `{"data": {...}}` envelopes. Closed as duplicate — pattern indicates growing demand for **non-standard gateway compatibility**.

4. **[Issue #116376 — Windows close leaves `Hermes.exe` alive](https://github.com/NousResearch/hermes-agent/issues/116376)** · CLOSED · 5 comments
   Zero windows, zero `BrowserWindow`, process persists. High user-visible severity; closed 2026-09-20.

5. **[Issue #117472 — Bot Mode Stop-hold swallows triggering message](https://github.com/NousResearch/hermes-agent/issues/117472)** · OPEN · 4 comments
   Reproduced live over ~90 min in a household room; hold detection cannot be disabled.

**Underlying needs:** (a) **subscription-based provider auth** (billing pain, high sentiment), (b) **release/CI automation reliability**, (c) **third-party endpoint/gateway tolerance**, (d) **Bot Mode as a real product surface**, not a session wrapper.

---

## 5. Bugs & Stability

Ranked by severity, with fix status:

**P1**
- [#117296](https://github.com/NousResearch/hermes-agent/issues/117296) — *title_generation completion persisted as assistant message, replayed to model; session derails into JSON-title mimicry.* **CLOSED** (4 comments). Session-corrupting, model-behavior-breaking. Highest-impact core bug in the window.

**P2**
- [#117472](https://github.com/NousResearch/hermes-agent/issues/117472) — Bot Mode Stop-hold permanently swallows a message; no opt-out. **OPEN** — no linked fix PR.
- [#116376](https://github.com/NousResearch/hermes-agent/issues/116376) — Windows main process orphaned on window close. **CLOSED**.
- [#116464](https://github.com/NousResearch/hermes-agent/issues/116464) — iOS disconnect leaves canonical Bot Chat lease alive. **CLOSED**.
- [#105535](https://github.com/NousResearch/hermes-agent/issues/105535) — Post-compression cost freezes at rotation value; profile usage excludes post-compression spend. **OPEN** — financial-accuracy bug, no fix PR.
- [#116905](https://github.com/NousResearch/hermes-agent/issues/116905) — `bot_mode_probe._roster()` lists `.deleted` tombstone dir as a teammate. **OPEN**.
- [#117544](https://github.com/NousResearch/hermes-agent/issues/117544) — `/review` fails `UnscopedSecretError` on `HERMES_CODEX_BASE_URL` under multiplexed Desktop serve. **OPEN**.
- [#117147](https://github.com/NousResearch/hermes-agent/issues/117147) / [#117291](https://github.com/NousResearch/hermes-agent/issues/117291) — Gemini `AQ.` keys force-routed to Vertex Express → 403 with misleading "invalid key." **CLOSED (duplicate)**.
- [#117208](https://github.com/NousResearch/hermes-agent/issues/117208) — `vision_analyze` routes ZAI Coding Plan keys to pay-as-you-go → 429. **CLOSED (duplicate)**.
- [#47590](https://github.com/NousResearch/hermes-agent/issues/47590) — Qwen: `'list' object has no attribute 'get'`. **OPEN · needs-repro** (since June).

**P3 / Security**
- [#117087](https://github.com/NousResearch/hermes-agent/issues/117087) — `mcp` extra pins `httpx2==2.7.0` with **five advisories** (two on MCP paths). **CLOSED (duplicate)** — [PR #117662](https://github.com/NousResearch/hermes-agent/pull/117662) bumps the npm side; Python-side fix not evidenced.
- [#116907](https://github.com/NousResearch/hermes-agent/issues/116907) — `key_cmd` token helper executes with `shell=True`. **CLOSED (duplicate)**.
- [#117263](https://github.com/NousResearch/hermes-agent/issues/117263) — Remote backend probe leaks username/home/cwd into system prompt every turn. **CLOSED (duplicate)**.

**Stability read:** P1/P2 volume is concentrated in **session lifecycle and provider routing**. The high duplicate-closure rate for provider-routing bugs (Gemini ×2, ZAI, Cline) suggests **a systemic provider-normalization design flaw** rather than isolated defects — worth a consolidated fix instead of per-provider patches.

---

## 6. Feature Requests & Roadmap Signals

| Request | Link | Signal | Likelihood next version |
|---|---|---|---|
| Claude Agent SDK provider w/ subscription OAuth | [#25267](https://github.com/NousResearch/hermes-agent/issues/25267) | **57 👍**, blocked/needs-decision | Low near-term (billing/legal), high demand |
| Bot Mode chats should feel like real chat | [#117520](https://github.com/NousResearch/hermes-agent/issues/117520) | 2 comments, product-direction | Medium — Bot Mode is receiving active bug work |
| Local-currency cost display (CNY/EUR/JPY) | [#47991](https://github.com/NousResearch/hermes-agent/issues/47991) | 1 comment, stale since June | Low |
| Dashboard behind reverse proxy (CORS + `HERMES_TUI_DIR`) | [#47601](https://github.com/NousResearch/hermes-agent/issues/47601) | 1 comment, stale since June | Low |
| Plugin catalog: `prompt-snippets` v1.6.0 | [PR #117660](https://github.com/NousResearch/hermes-agent/pull/117660) | Open PR | **High** |
| `hermes update --list-venv-holders` (JSON/exit 3) | [PR #117657](https://github.com/NousResearch/hermes-agent/pull/117657) | Open PR | **High** |
| camofox external noVNC discovery | [PR #97772](https://github.com/NousResearch/hermes-agent/pull/97772) | Open since Aug 29 | Medium |

**Prediction:** The next release will be **fix-heavy, not feature-heavy** — dominated by the teknium1 salvage batch (desktop correctness, update/Windows reliability, auth hardening, local-runtime VRAM caps). Subscription-OAuth (#25267) is the most-wanted feature but is blocked on a decision, not code.

---

## 7. User Feedback Summary

**Pain points (ranked by user expression):**
1. **Double-billing anxiety** — Claude subscribers must buy per-token API access (#25267, 57 👍). This is the single clearest unmet need in the dataset.
2. **Provider routing confusion** — Gemini `AQ.` keys, ZAI Coding Plan keys, and Cline gateway envelopes all fail with *misleading* errors ("invalid key", "insufficient balance"). Users are doing provider archaeology on code they don't own.
3. **Session/state integrity** — stale leases (#116464), orphaned Windows processes (#116376), swallowed messages (#117472), frozen cost accounting (#105535), and a P1 that derails sessions into JSON mimicry (#117296). Users are losing trust in long-running sessions.
4. **Bot Mode UX gap** — [#117520](https://github.com/NousResearch/hermes-agent/issues/117520): replies read as "status reports" with headings and bullets; users want social, chat-like affordances.
5. **Corporate/enterprise friction** — proxy-unaware update checks (#114736) and reverse-proxy CORS failures (#47601).
6. **Ecosystem/plugin friction** — installer vs. loader disagreeing on `manifest_version` (#90451, #85879) and `plugins doctor` failing all 34 bundled model-providers (#86153).

**Satisfaction signals:** High engagement (57 👍, 124-comment threads), users filing precise repros with measured state, and contributors shipping fixes. Dissatisfaction is concentrated on **unshipped fixes** (48 open PRs) and **blocked decisions**, not on missing capability.

---

## 8. Backlog Watch

Long-lived or decision-blocked items needing maintainer attention:

| Item | Age | Why it matters |
|---|---|---|
| [#25267](https://github.com/NousResearch/hermes-agent/issues/25267) Claude OAuth provider | ~4 months | Highest-reaction issue; `blocked` + `needs-decision` — needs a product/billing call, not code |
| [#88584](https://github.com/NousResearch/hermes-agent/issues/88584) Automated Nous integration blocked | ~5 weeks, **124 comments** | Release automation stalling; labelled `invalid` yet accumulating the most discussion in the project |
| [#78007](https://github.com/NousResearch/hermes-agent/issues/78007) A2A long tasks can never complete | ~7 weeks | Structural timeout mismatch (client 120s vs server 300s); no fix PR |
| [#47590](https://github.com/NousResearch/hermes-agent/issues/47590) Qwen `list.get` error | ~3 months | `needs-repro`, untouched — core agent path for a major provider |
| [#47601](https://github.com/NousResearch/hermes-agent/issues/47601) Dashboard reverse proxy | ~3 months | Empty summary; enterprise deployment blocker |
| [#47991](https://github.com/NousResearch/hermes-agent/issues/47991) Local currency costs | ~3 months | Small, well-scoped, non-US user base |
| [#47749](https://github.com/NousResearch/hermes-agent/issues/47749) camofox VNC fix | ~3 months | Community-provided patch ([PR #97772](https://github.com/NousResearch/hermes-agent/pull/97772) partially addresses) |
| [PR #97772](https://github.com/NousResearch/hermes-agent/pull/97772) camofox noVNC | Open since Aug 29 | Community PR awaiting review; blocks a visible feature |
| [PR #103702](https://github.com/NousResearch/hermes-agent/pull/103702) Session timer unify | Open since Sep 5 | Desktop correctness, no review activity |

**Bottom line:** Project activity is high, but **throughput is misallocated** — issues are triaged quickly while 48 PRs (many already reviewed-quality salvage fixes) sit unmerged with zero releases. The biggest risk to project health is not a lack of contribution, but a **merge/release cadence that is falling behind the fix backlog**, compounded by one unresolved business decision (#25267) and one stalled automation thread (#88584) absorbing disproportionate community attention.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-09-21

## 1. Today's Overview
PicoClaw saw moderate-to-high maintenance activity in the last 24h: 6 issues and 5 PRs were updated, with no new releases. The issue mix was 4 open/active and 2 closed, while PRs were 3 open and 2 closed/merged. Activity is concentrated on channel reliability, provider extensibility, and documentation/roadmap planning rather than shipped code. Project health is active but shows signs of backlog pressure: several high-comment issues and PRs are marked stale, and a fresh critical DingTalk panic regression (#3382) remains untriaged.

## 2. Releases
No new releases were published in the last 24h. There are no release notes, breaking changes, or migration steps to report.

## 3. Project Progress
- **Closed/merged PRs today:**
  - [#3367 docs: add Pilot MCP setup example](https://github.com/sipeed/picoclaw/pull/3367) — documentation update for native MCP CLI quick start, health-check command, and setup clarification.
  - [#3383 docs: v0.11.0 sprint plan — agentic web3, module trust, ACP/mesh depth](https://github.com/sipeed/picoclaw/pull/3383) — durable design record for v0.11.0 sprint Tracks 67–75, including ordering DAG, decisions, file maps, verification checklist, and risk register.
- **Closed issues today:**
  - [#973 [BUG] Connected to QQ and DingTalk, kept online overnight, PANIC and exited](https://github.com/sipeed/picoclaw/issues/973) — old channel panic report closed.
  - [#3369 [Feature] Add OpenCode Go session header support](https://github.com/sipeed/picoclaw/issues/3369) — provider-specific `x-opencode-session` header request closed.
- **Open PRs advancing:**
  - [#3354 feat(irc): assemble IRCv3 multiline messages](https://github.com/sipeed/picoclaw/pull/3354) — requests `batch`, `message-tags`, and `draft/multiline` to deliver long/multi-line IRC messages as one inbound message.
  - [#3353 fix(channels): bound tool feedback animations](https://github.com/sipeed/picoclaw/pull/3353) — caps tool feedback animations at five minutes and stops on first edit error.
  - [#3378 fix(auth): use configured scopes instead of hardcoded default in RefreshAccessToken](https://github.com/sipeed/picoclaw/pull/3378) — fixes OAuth refresh requests overriding provider-specific scopes.

Overall, code progress is mainly in open PRs; the only closed/merged items today are documentation and planning artifacts.

## 4. Community Hot Topics
- [#3287 [Feature] Better support long messages in IRC](https://github.com/sipeed/picoclaw/issues/3287) — 13 comments, open, stale. Users want IRCv3 long messages treated as a single cohesive message instead of being split by the 512-byte IRC limit.
- [#3281 [BUG] Web UI chat input is very laggy when history has a little bit long](https://github.com/sipeed/picoclaw/issues/3281) — 12 comments, 2 👍, open, stale. Reproducible on PicoClaw 0.3.1 / Go 1.25.11 / PicoClaw Web; lag grows with session history.
- [#3366 [Feature] Add support for OpenAI compatible providers](https://github.com/sipeed/picoclaw/issues/3366) — 4 comments, open, stale. Request for a custom “OpenAI Compatible” provider to support self-hosted routers such as 9Router.
- [#3369 [Feature] Add OpenCode Go session header support](https://github.com/sipeed/picoclaw/issues/3369) — 2 comments, 2 👍, closed. Demand for mapping PicoClaw session IDs into OpenCode Go’s `x-opencode-session` header.
- [#973 [BUG] QQ/DingTalk panic](https://github.com/sipeed/picoclaw/issues/973) — 3 comments, closed, but directly relevant to the new #3382 regression.

Underlying needs: protocol-correct channel handling (IRC), frontend performance at scale (Web UI), provider abstraction/extensibility (OpenAI-compatible, OpenCode Go), and long-running channel stability (DingTalk/Feishu).

## 5. Bugs & Stability
Ranked by severity:

1. **Critical / open regression — [#3382 v0.3.1: DingTalk gateway still panics on stream SDK reconnect (send on closed channel, client.go:161)](https://github.com/sipeed/picoclaw/issues/3382)**  
   Freshly reported on 2026-09-20, 0 comments. Same panic as #973 is still reproducible on v0.3.1 (commit `2cf030d2`) with `dingtalk-stream-sdk-go` v0.9.1. No fix PR identified.

2. **High / open performance — [#3281 Web UI chat input lag with longer history](https://github.com/sipeed/picoclaw/issues/3281)**  
   12 comments, 2 👍, stale. Affects PicoClaw Web sessions; no linked fix PR in the dataset.

3. **Closed but potentially unresolved — [#973 QQ/DingTalk overnight panic](https://github.com/sipeed/picoclaw/issues/973)**  
   Closed today, but #3382 indicates the underlying DingTalk reconnect panic may not be fixed. Closure may be premature unless a separate fix exists.

4. **Stability PR — [#3353 fix(channels): bound tool feedback animations](https://github.com/sipeed/picoclaw/pull/3353)**  
   Addresses runaway channel message edits after missed lifecycle cleanup; open.

5. **Auth reliability PR — [#3378 fix(auth): use configured scopes in RefreshAccessToken](https://github.com/sipeed/picoclaw/pull/3378)**  
   Prevents OAuth token refresh from overriding provider-specific scopes; open.

## 6. Feature Requests & Roadmap Signals
- **OpenAI-compatible providers — [#3366](https://github.com/sipeed/picoclaw/issues/3366)**  
  Strong signal for self-hosted/OpenAI-compatible routing. If accepted, it would expand deployment flexibility and likely fit a provider-abstraction roadmap item.
- **IRCv3 multiline support — [#3287](https://github.com/sipeed/picoclaw/issues/3287) + PR [#3354](https://github.com/sipeed/picoclaw/pull/3354)**  
  Already has an open implementation PR. This is a plausible near-term feature if maintainers review and merge.
- **OpenCode Go session header — [#3369](https://github.com/sipeed/picoclaw/issues/3369)**  
  Closed today, but the 2 👍 indicate real demand for provider-specific session headers. Could reappear as a provider customization requirement.
- **v0.11.0 roadmap — PR [#3383](https://github.com/sipeed/picoclaw/pull/3383)**  
  Closed sprint-plan document references Tracks 67–75: agentic web3, module trust, and ACP/mesh depth. These are the clearest roadmap signals in today’s data.
- **OAuth scope correctness — PR [#3378](https://github.com/sipeed/picoclaw/pull/3378)**  
  Not a headline feature, but important for multi-provider auth compatibility.

Prediction: immediate patch attention is most likely needed for the DingTalk panic (#3382). Feature-wise, IRCv3 multiline (#3354) and OpenAI-compatible providers (#3366) are the strongest candidates for near-term inclusion if maintainers prioritize channel and provider extensibility.

## 7. User Feedback Summary
- **Pain points:** long IRC messages are split and lose cohesion; Web UI input becomes laggy with longer chat history; self-hosted OpenAI-compatible routers are not directly supported; OpenCode Go needs session-header mapping; DingTalk/Feishu stream reconnects still panic.
- **Use cases:** IRCv3 channel usage, long-running Web UI sessions, self-hosted LLM routing (e.g., 9Router), OpenCode Go integration, DingTalk/Feishu channel deployments.
- **Satisfaction signals:** documentation improvements merged (#3367), v0.11.0 sprint planning published (#3383), and some stale issues closed (#973, #3369).
- **Dissatisfaction signals:** multiple stale tags on active issues/PRs, unresolved panic regression, persistent Web UI lag, and provider compatibility gaps. Reaction counts are low overall, but #3281 and #3369 each have 2 👍.

## 8. Backlog Watch
Important items needing maintainer attention:

- [#3287 IRC long-message support](https://github.com/sipeed/picoclaw/issues/3287) — open since 2026-07-22, 13 comments, stale. High discussion volume; linked PR [#3354](https://github.com/sipeed/picoclaw/pull/3354) open since 2026-08-31.
- [#3281 Web UI lag](https://github.com/sipeed/picoclaw/issues/3281) — open since 2026-07-21, 12 comments, 2 👍, stale. No fix PR identified.
- [#3366 OpenAI-compatible providers](https://github.com/sipeed/picoclaw/issues/3366) — open since 2026-09-04, 4 comments, stale. Clear extensibility request.
- [#3382 DingTalk panic regression](https://github.com/sipeed/picoclaw/issues/3382) — opened 2026-09-20, 0 comments. Critical stability issue; needs triage and likely a fix PR.
- [#3354 IRCv3 multiline PR](https://github.com/sipeed/picoclaw/pull/3354) — open since 2026-08-31, stale. Direct implementation for a high-comment issue.
- [#3353 Bound tool feedback animations PR](https://github.com/sipeed/picoclaw/pull/3353) — open since 2026-08-31, stale. Stability-oriented channel fix.
- [#3378 OAuth refresh scopes PR](https://github.com/sipeed/picoclaw/pull/3378) — open since 2026-09-12, stale. Small but relevant auth correctness fix.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



# NanoClaw Project Digest — 2026-09-21

---

## 1. Today's Overview

NanoClaw saw high PR activity on 2026-09-21, with 40 pull requests updated — 38 merged or closed and only 2 remaining open. No new releases were published during the window. The merged PRs span WhatsApp adapter fixes, OpenCode provider resilience, skill packaging, CLI tooling, and CI infrastructure, painting a picture of a project in active hardening and polish rather than headline feature expansion. One unresolved bug (#3858) around WhatsApp sender display names remains open and is the sole active issue.

---

## 2. Releases

No new releases were published in the last 24 hours. The most recent tagged version remains v2.3.0. Users should monitor the next release for the accumulated fixes detailed below, particularly the WhatsApp display-name and auth-failure fixes.

---

## 3. Project Progress

38 PRs were merged or closed today, covering a broad swath of the codebase:

| Area | Highlights |
|---|---|
| **WhatsApp** | PR #746 prevents service restart hammering on auth failure; PR #2565 adds group @-mention detection via `contextInfo.mentionedJid`; PR #2265 enables `send_card` display cards through the Chat SDK bridge |
| **OpenCode Provider** | PR #3463 (open) adds a fallback to `message.part.delta` text when final snapshots race against `session.idle`; PR #2152 kills server process groups and adds configurable `IDLE_TIMEOUT_MS`; PR #3346 recovers from idle-without-work sessions; PR #2153 uses native instructions config to load `CLAUDE.md` |
| **Skills** | PR #706 adds an `icloud-tools` skill (CalDAV/CardDAV/IMAP/SMTP); PR #2322 brings v2 compatibility to `add-karpathy-llm-wiki`; PR #2309 replaces `sqlite3` CLI with an in-tree `better-sqlite3` wrapper |
| **Sessions & Context** | PR #700 rotates oversized JSONL sessions to prevent container timeouts; PR #701 injects date/time context into all agent prompts; PR #2327 injects destination reminders after SDK auto-compaction |
| **CLI & Ops** | PR #2416 provisions companion rows on `ncl groups create` and `ncl wirings create`; PR #2356 installs `~/.local/bin/ncl` symlink on upgrade; PR #2290 includes canonical SQL queries in `manage-channels` SKILL.md |
| **CI & Migration** | PR #2402 updates repository guards after repo rename; PR #2287 probes the correct OneCLI health endpoint; PR #2288 parses SQLite timestamps as UTC |

The dominant contributor is **glifocat**, who authored or co-authored the vast majority of today's merged PRs, indicating a highly concentrated contribution pattern.

---

## 4. Community Hot Topics

### 🔥 Issue #3858 — WhatsApp Sender Display Names
**Status:** Open | **Author:** glifocat | **Created:** 2026-09-20
- **Link:** [nanocoai/nanoclaw Issue #3858](https://github.com/nanocoai/nanoclaw/issues/3858)
- **Underlying need:** In WhatsApp groups, the agent receives only the phone JID (e.g., `1234567890@s.whatsapp.net`) as the sender identifier, with no display name. This makes it impossible for the agent to address participants by name or maintain natural conversational context. Users expect the agent to recognize and use contact names, especially in group settings where JIDs are opaque and unhelpful.

### 🔥 PR #3463 — OpenCode Provider Text Fallback
**Status:** Open | **Author:** wakqasahmed | **Created:** 2026-08-23
- **Link:** [nanocoai/nanoclaw PR #3463](https://github.com/nanocoai/nanoclaw/pull/3463)
- **Underlying need:** The OpenCode provider's event loop only captured assistant text from `message.part.updated` snapshots. A timing race (~78ms margin measured) or missed final snapshot could cause the entire turn's text to be lost before `session.idle` broke the read loop. This is a silent data-loss bug affecting model output on OpenCode-backed sessions.

---

## 5. Bugs & Stability

### Critical / High Severity

| Issue | Status | Fix Available? |
|---|---|---|
| **#3858** — WhatsApp: agent never sees sender display names; only JID visible | Open, triage unresolved | No fix PR yet |

This is the only open bug today. It affects user-facing behavior in WhatsApp groups — the agent cannot distinguish participants, degrading conversational quality. The issue is reproducible on v2.3.0, Linux host, and was reported by a maintainer-level contributor (glifocat), so it is likely to receive prompt attention.

### Resolved Today (via merged PRs)

- **Auth failure restart hammering** (PR #746, fixes #748) — WhatsApp service was repeatedly retrying connection after auth failures/revoke events, potentially causing resource exhaustion. ✅ Fixed.
- **OpenCode snapshot race** (PR #3463, fixes #2985) — Final-turn text could be lost if the snapshot didn't arrive before `session.idle`. 🔓 Open but has a proposed fix.
- **`send_card` silent no-op** (PR #2265) — Chat SDK bridge's `deliver()` method dropped display cards on all non-WhatsApp channels. ✅ Fixed.
- **Container timeouts from oversized sessions** (PR #700, fixes #697) — Sessions exceeding size limits caused container spawn timeouts. ✅ Fixed with pre-spawn size check.

No crashes or regressions were reported in the last 24 hours beyond the open items above.

---

## 6. Feature Requests & Roadmap Signals

No new feature requests were filed today. However, the merged PRs signal several roadmap directions:

1. **iCloud integration** (PR #706) — The `icloud-tools` skill adds CalDAV/CardDAV/IMAP/SMTP support, suggesting NanoClaw is expanding its personal-assistant footprint beyond chat into calendar, contacts, and email.
2. **OpenCode provider hardening** — Multiple PRs (#3463, #2152, #3346, #2153) target the OpenCode provider, indicating it is a priority integration path. Expect continued investment here.
3. **Multi-destination group support** (PR #2328) — Default reply destination now defaults to message origin in multi-destination groups, hinting at upcoming group-chat orchestration features.
4. **v2 migration tooling** (PR #2287) — Continued refinement of the `migrate-v2` path suggests an approaching v2 stable release or migration window.

---

## 7. User Feedback Summary

Direct user feedback is not captured in the GitHub data, but the issue and PR metadata reveal clear pain points:

- **WhatsApp groups are functionally limited** — Agents cannot use display names, making group interactions feel robotic and error-prone. This is the top user-facing friction point.
- **OpenCode sessions can silently lose output** — The snapshot race is a subtle but serious correctness issue for users relying on OpenCode-backed workflows.
- **Auth failures cause aggressive retry loops** — Users experienced service instability when WhatsApp auth expired or was revoked, before PR #746 landed.
- **Overall satisfaction trend** — The volume of merged fixes (38 today) suggests the maintainers are responsive to reported issues. The project appears healthy from a maintenance standpoint, with a steady cadence of bug fixes and no signs of maintainer abandonment.

---

## 8. Backlog Watch

| Item | Age | Concern |
|---|---|---|
| **Issue #3858** (WhatsApp display names) | 1 day | Fresh; triage unresolved. Needs maintainer assignment and a fix PR. High visibility due to author being a core contributor. |
| **PR #3463** (OpenCode text fallback) | ~29 days | Open for nearly a month with no merge. The proposed fix is straightforward but may need review bandwidth. |
| **PR #746** (WhatsApp auth restart) | ~200 days | Was open since March 2026; closed today. Indicates some PRs wait a long time for review — a potential bottleneck. |
| **PR #706** (icloud-tools skill) | ~200 days | Similarly long-lived before closure. Suggests review queues can stretch significantly. |

---

*Digest generated from GitHub API data for `nanocoai/nanoclaw`. All links point to the nanocoai/nanoclaw repository.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw – Project Digest (2026‑09‑21)**  

---

### 1. Today's Overview  
The repository is quiet today: only one open issue was updated, no pull requests were merged or closed, and there are no new releases. Activity is minimal, suggesting the team is in a maintenance window. The sole issue highlights a user‑facing usability gap (lack of clear error messaging for Ollama tool incompatibility), which could be a low‑hanging improvement for the next cycle. Overall project health appears stable, but the pending enhancement indicates an area where developer experience could be enhanced.

### 2. Releases  
**None** – No new releases were published in the last 24 h.

### 3. Project Progress  
**No PRs merged/closed today.** The development pipeline is idle, with no feature work or bug‑fixes advancing through the review cycle.

### 4. Community Hot Topics  
**Issue #1000 – “ollama incompatibility notification”** (https://github.com/nullclaw/nullclaw/issues/1000)  
* **Activity:** 1 comment, 0 👍 reactions.  
* **Underlying Need:** Users currently see a cryptic “adapter error” when their Ollama model lacks tool‑support, making debugging difficult. The community is asking for a clearer, actionable notification that explains *why* the model isn’t working and how to resolve it (e.g., selecting a tool‑compatible model). This points to a broader need for improved error reporting and user guidance in integration points.

### 5. Bugs & Stability  
* **Reported Bugs/Crashes:** None today.  
* **Stability Assessment:** No regressions or crashes have been logged in the past 24 h, indicating the codebase remains stable at present.

### 6. Feature Requests & Roadmap Signals  
The only open feature request is the Ollama incompatibility notification. Because:  

* It addresses a concrete user pain point (unintelligible adapter errors).  
* It requires a modest change (adding a user‑friendly warning or diagnostic message).  

**Prediction:** This enhancement is a strong candidate for inclusion in the next minor/major release (v1.x or v2.0), likely as a non‑breaking improvement that adds a helpful UI/CLI message when tool‑unsupported models are detected.

### 7. User Feedback Summary  
* **Pain Point:** Users struggle to diagnose why Ollama models fail to work with the adapter; the current error lacks context.  
* **Desired Experience:** A clear, concise notification that explains the incompatibility, suggests alternatives (e.g., switch to a tool‑supporting model), and possibly includes links to documentation.  
* **Satisfaction/Dissatisfaction:** Low satisfaction with the current error handling; the user attempted advanced troubleshooting (Wireshark) before seeking a software fix, indicating frustration.

### 8. Backlog Watch  
* **Open Item:** Issue #1000 remains unanswered beyond the initial comment (created 2026‑09‑20). With only one comment and no reactions, it’s still awaiting maintainer attention.  
* **Priority Flag:** Given its recent creation and direct impact on user experience, this issue should be triaged soon. Adding a clear notification for Ollama tool incompatibility would improve onboarding and reduce support overhead.  

---  

**Next Steps for Maintainers**  
1. Review Issue #1000 and decide on the scope of the notification (CLI prompt, logs, or UI banner).  
2. If the fix is low‑complexity, target inclusion in the upcoming release cycle.  
3. Communicate any resolution or roadmap update to the reporter and the broader community.  

*Generated on 2026‑09‑21 based on the latest GitHub activity for **nullclaw/nullclaw**.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-09-21

## Today's Overview
As of 2026-09-21, IronClaw recorded 0 issues updated in the last 24h, 6 PRs updated (4 open, 2 closed), and 0 new releases. All six PRs are dependency-management updates authored by `dependabot[bot]`, spanning Rust crates, GitHub Actions, wasm tooling, and tokio-ecosystem packages. The activity profile is therefore maintenance-automation-driven rather than community- or feature-driven. Project health appears stable from a release/bug perspective, but there is no visible issue discussion or user engagement in this window. The main watch item is the aging wasm dependency PR #7834, open since 2026-08-23.

## Project Progress
- **Closed PR #8099** — [nearai/ironclaw PR #8099](https://github.com/nearai/ironclaw/pull/8099) — Rust “everything-else” group with 25 updates. Closed on 2026-09-20; appears superseded by #8104, which contains 29 updates and was opened the same day. No user-facing feature change.
- **Closed PR #8079** — [nearai/ironclaw PR #8079](https://github.com/nearai/ironclaw/pull/8079) — GitHub Actions group with 6 updates. Closed on 2026-09-20; appears superseded by #8103, which contains 8 updates and was opened the same day. CI/tooling maintenance only.
- **Open PR #8104** — [nearai/ironclaw PR #8104](https://github.com/nearai/ironclaw/pull/8104) — Rust “everything-else” group with 29 updates. Awaiting review/merge.
- **Open PR #8103** — [nearai/ironclaw PR #8103](https://github.com/nearai/ironclaw/pull/8103) — GitHub Actions group with 8 updates. Awaiting review/merge.
- **Open PR #8078** — [nearai/ironclaw PR #8078](https://github.com/nearai/ironclaw/pull/8078) — tokio-ecosystem group with 2 updates: `tower-http` and `tokio-tungstenite`. Updated 2026-09-20; not yet merged.
- **Open PR #7834** — [nearai/ironclaw PR #7834](https://github.com/nearai/ironclaw/pull/7834) — wasm group with 4 updates: `wasmtime`, `wasmtime-wasi`, `wit-component`, and `wit-parser`. Labeled size L, risk medium, contributor experienced; open since 2026-08-23.

## Community Hot Topics
- No Issues were updated in the last 24h; total issues = 0, so there are no issue-based hot topics.
- PR comment counts were reported as `undefined`, and reactions were 0 across all six PRs. No PR has measurable community discussion.
- Most active by update recency: [#8104](https://github.com/nearai/ironclaw/pull/8104), [#8103](https://github.com/nearai/ironclaw/pull/8103), [#8099](https://github.com/nearai/ironclaw/pull/8099), [#8079](https://github.com/nearai/ironclaw/pull/8079), [#7834](https://github.com/nearai/ironclaw/pull/7834), and [#8078](https://github.com/nearai/ironclaw/pull/8078).
- Underlying need: routine dependency maintenance and CI hygiene. The absence of comments suggests either low community participation in this window or that dependency PRs are treated as low-touch automation.

## Bugs & Stability
- No bugs, crashes, or regressions were reported via Issues in the last 24h because there were 0 issue updates.
- No fix PRs were opened or updated specifically for bug reports.
- Dependency updates may indirectly improve stability/security: [#8104](https://github.com/nearai/ironclaw/pull/8104) and [#8099](https://github.com/nearai/ironclaw/pull/8099) for Rust crates; [#8103](https://github.com/nearai/ironclaw/pull/8103) and [#8079](https://github.com/nearai/ironclaw/pull/8079) for GitHub Actions; [#8078](https://github.com/nearai/ironclaw/pull/8078) for tokio networking/HTTP; [#7834](https://github.com/nearai/ironclaw/pull/7834) for wasm runtime/tooling.
- Severity ranking: none applicable today.

## Feature Requests & Roadmap Signals
- No feature requests were recorded because there were 0 Issues.
- Roadmap signals are limited to dependency groups:
  - **Rust ecosystem:** `uuid` 1.24.0→1.26.1, `base64` 0.22.1→0.23.1, `rust_decimal`, and others — [#8104](https://github.com/nearai/ironclaw/pull/8104), [#8099](https://github.com/nearai/ironclaw/pull/8099)
  - **GitHub Actions:** `anthropics/claude-code-action` 1.0.183→1.0.228, `actions/setup-node` 4.0.2→7.0.0, and others — [#8103](https://github.com/nearai/ironclaw/pull/8103), [#8079](https://github.com/nearai/ironclaw/pull/8079)
  - **wasm:** `wasmtime`, `wasmtime-wasi`, `wit-component`, `wit-parser` — [#7834](https://github.com/nearai/ironclaw/pull/7834)
  - **tokio ecosystem:** `tower-http` 0.7.0→0.7.1, `tokio-tungstenite` — [#8078](https://github.com/nearai/ironclaw/pull/8078)
- Prediction: the next version/release, if any, is more likely to contain dependency and CI updates than new user-facing features. No roadmap item can be inferred from user requests today.

## User Feedback Summary
- No user feedback was captured today: 0 Issues updated, 0 issue comments/reactions, and 0 PR reactions.
- Real user pain points, use cases, and satisfaction/dissatisfaction cannot be assessed from this dataset.
- The only observable “feedback” is automated dependency demand from Dependabot; this is not user feedback and should not be interpreted as feature demand.

## Backlog Watch
- **PR #7834** — [nearai/ironclaw PR #7834](https://github.com/nearai/ironclaw/pull/7834) — open since 2026-08-23, updated 2026-09-20. wasm group, size L, risk medium, contributor experienced. Longest-open PR in this dataset; needs maintainer review because wasm runtime/tooling updates can carry compatibility risk.
- **PR #8078** — [nearai/ironclaw PR #8078](https://github.com/nearai/ironclaw/pull/8078) — open since 2026-09-06, updated 2026-09-20. tokio-ecosystem update; may need review if networking stack changes are sensitive.
- **PR #8104** — [nearai/ironclaw PR #8104](https://github.com/nearai/ironclaw/pull/8104) — open, updated 2026-09-20. 29 Rust updates; new but large, and likely supersedes #8099.
- **PR #8103** — [nearai/ironclaw PR #8103](https://github.com/nearai/ironclaw/pull/8103) — open, updated 2026-09-20. 8 GitHub Actions updates; new, and likely supersedes #8079.
- No long-unanswered Issues are present because there are 0 issues in the dataset.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-09-21

## 1. Today's Overview
LobsterAI shows high engineering throughput in the last 24h: 12 PRs updated, 5 merged/closed, 7 open, plus 4 recent releases. The release cadence is active, with work concentrated on OpenClaw compatibility/migrations, browser passkeys, scheduled tasks, and subscription monetization. Issue activity is low and mostly stale: all 3 updated issues were created in March 2026 and carry the `[stale]` label, including one closed bug and two open stability/integration reports. Overall project health is strong on feature velocity, but backlog hygiene and recurring runtime/MCP stability complaints remain the main risks.

## 2. Releases
Four releases are surfaced: **2026.9.20**, **2026.9.17**, **2026.9.15**, and **2026.9.14**. Release notes are partially truncated in the source.

- **2026.9.20** — [Release feed](https://github.com/netease-youdao/LobsterAI/releases)
  - `feat: subagent session visibility` — [PR #2703](https://github.com/netease-youdao/LobsterAI/pull/2703)
  - `feat(browser): add passkey/WebAuthn support for the in-app agent browser` — [PR #2723](https://github.com/netease-youdao/LobsterAI/pull/2723)
  - `feat: scheduled ta...` (truncated; likely scheduled-task changes)

- **2026.9.17** — [Release feed](https://github.com/netease-youdao/LobsterAI/releases)
  - `feat(openclaw): migrate shared state schema before startup repair` — [PR #2689](https://github.com/netease-youdao/LobsterAI/pull/2689)
  - `feat(openclaw): add repair snapshot rollback and agent media migration handling` — [PR #2689](https://github.com/netease-youdao/LobsterAI/pull/2689) related

- **2026.9.15** — [Release feed](https://github.com/netease-youdao/LobsterAI/releases)
  - `feat: openclaw compatibility repair` — [PR #2683](https://github.com/netease-youdao/LobsterAI/pull/2683)
  - `feat(openclaw): migrate xAI auth credentials to canonical SQLite store` — [PR #2675](https://github.com/netease-youdao/LobsterAI/pull/2675)
  - `fix(openclaw): rec...` (truncated)

- **2026.9.14** — [Release feed](https://github.com/netease-youdao/LobsterAI/releases)
  - `feat: upgrade OpenClaw to v2026.8.1 and improve artifact workflows` — [PR #2665](https://github.com/netease-youdao/LobsterAI/pull/2665)
  - `feat: support markdown editing` — [PR #2659](https://github.com/netease-youdao/LobsterAI/pull/2659)
  - `feat(markdown): improve inl...` (truncated)

**Breaking changes:** none explicitly labeled.  
**Migration notes:** OpenClaw shared state schema migration before startup repair, repair snapshot rollback, agent media migration handling, and xAI auth credential migration to canonical SQLite store. Users upgrading from older OpenClaw states should back up OpenClaw/SQLite state and expect a startup repair/migration path. The closed `refactor(cowork): remove background jobs` PR ([#2724](https://github.com/netease-youdao/LobsterAI/pull/2724)) may also remove existing background-job workflows in a later release.

## 3. Project Progress
Merged/closed PRs today:

- [#2725](https://github.com/netease-youdao/LobsterAI/pull/2725) — `Release/2026.9.18`, release branch closed.
- [#2724](https://github.com/netease-youdao/LobsterAI/pull/2724) — `refactor(cowork): remove background jobs feature`; drops background job store, OpenClaw `tasks.list`/`tasks.cancel`, cowork IPC channels, renderer hook, task panel section, types, and i18n strings.
- [#2723](https://github.com/netease-youdao/LobsterAI/pull/2723) — `feat(browser): add passkey/WebAuthn support`; adds browser passkey service, page observer, preload bridge, macOS WebAuthn integration, entitlements, and in-app browser passkey notices.
- [#2722](https://github.com/netease-youdao/LobsterAI/pull/2722) — `fix(scheduled-task): preserve Weixin target casing and explain resend rejection`; keeps channel-native casing and surfaces session-expired hints.
- [#2720](https://github.com/netease-youdao/LobsterAI/pull/2720) — `feat(subscription): add one-cent trial and low-credit purchase offers`; adds trial eligibility, Portal checkout, discount display, and funnel analytics.

Open PRs advancing major work:

- [#2727](https://github.com/netease-youdao/LobsterAI/pull/2727) — persist OpenClaw entry hooks across sync.
- [#2726](https://github.com/netease-youdao/LobsterAI/pull/2726) — add digital employees, expert teams, and capability markets.
- [#2721](https://github.com/netease-youdao/LobsterAI/pull/2721) — apply IM configuration without restarting the gateway.

## 4. Community Hot Topics
Issue engagement is low, but the most discussed items are:

- [#1068 [CLOSED] [stale] Bug: 删除当前的agent，切换到别的agent之后需要自动刷新任务列表](https://github.com/netease-youdao/LobsterAI/issues/1068) — 2 comments. User deleted the current agent, switched to another, and the task list did not auto-refresh; after only `main` remained, its tasks failed to appear. Underlying need: reliable UI state consistency after agent deletion.
- [#1003 [OPEN] [stale] 关于Notion MCP的问题](https://github.com/netease-youdao/LobsterAI/issues/1003) — 1 comment. The MCP Bridge starts `npx @notionhq/notion-mcp-server` without passing environment variables, causing Notion to return 401. Underlying need: correct env propagation in `child_process.spawn` and better MCP diagnostics.
- [#1007 [OPEN] [stale] 请教解决 agent engine 无限重启的方法](https://github.com/netease-youdao/LobsterAI/issues/1007) — 1 comment. Agent Engine repeatedly restarts; user asks for a configuration-file fix. Underlying need: runtime stability and actionable troubleshooting guidance.

No PRs show visible comment counts or reactions; all listed PRs have 0 👍.

## 5. Bugs & Stability
Ranked by severity:

1. **Agent Engine infinite restart** — [#1007](https://github.com/netease-youdao/LobsterAI/issues/1007). Open, stale, no linked fix PR. High severity: blocks normal agent use.
2. **Notion MCP token/env not passed, resulting in 401** — [#1003](https://github.com/netease-youdao/LobsterAI/issues/1003). Open, stale, no linked fix PR. High/medium severity: breaks MCP integration; user suspects MCP Bridge layer.
3. **OpenClaw entry hooks dropped on gateway restarts** — fix PR [#2727](https://github.com/netease-youdao/LobsterAI/pull/2727) open. Persists `plugins.entries.*.hooks` in SQLite and rewrites on `syncToDisk`.
4. **IM configuration save forces gateway restart / races config watcher** — fix PR [#2721](https://github.com/netease-youdao/LobsterAI/pull/2721) open. Applies eligible config changes through the live gateway.
5. **Weixin scheduled-task target casing/resend rejection** — fix PR [#2722](https://github.com/netease-youdao/LobsterAI/pull/2722) closed/merged. Repairs lowercased targets and surfaces session-expired hints.
6. **Task list not auto-refreshing after agent deletion** — [#1068](https://github.com/netease-youdao/LobsterAI/issues/1068) closed/stale. Lower severity UI bug.

Stability signal: OpenClaw compatibility repair, schema migration, and rollback work across 2026.9.15–2026.9.17 indicate active stabilization, but the recurring restart and MCP issues show unresolved operational pain.

## 6. Feature Requests & Roadmap Signals
- [#2726](https://github.com/netease-youdao/LobsterAI/pull/2726) — digital employees, expert teams, capability markets, expert kits, tool plugins, and MCP tool exposure. Fresh, open, and likely a major roadmap item.
- [#1008](https://github.com/netease-youdao/LobsterAI/pull/1008) — add 6 new preset agent templates beyond the existing six scenarios. Open, stale.
- [#1009](https://github.com/netease-youdao/LobsterAI/pull/1009) — prompt template library with variable fill and copy support. Open, stale.
- [#1011](https://github.com/netease-youdao/LobsterAI/pull/1011) — extensible artifacts preview pipeline for HTML, React, and Mermaid. Open, stale.
- [#1013](https://github.com/netease-youdao/LobsterAI/pull/1013) — slash-triggered skill picker in the prompt input. Open, stale.
- [#2720](https://github.com/netease-youdao/LobsterAI/pull/2720) — one-cent trial and low-credit purchase offers. Closed today; monetization feature likely to appear in a release.
- [#2723](https://github.com/netease-youdao/LobsterAI/pull/2723) — passkey/WebAuthn support already noted in 2026.9.20 release.

**Prediction:** the next release is likely to include capability-marketplace/digital-employee work, plugin hook persistence, and live IM configuration application. Stale community PRs around prompt templates, skill picker, preset agents, and artifact previews may need rebasing or maintainer pickup before they can land.

## 7. User Feedback Summary
Real user pain points:

- Agent Engine repeatedly restarts, and users do not know which config file to change — [#1007](https://github.com/netease-youdao/LobsterAI/issues/1007).
- Notion MCP fails with 401 because the MCP Bridge does not pass environment variables/token correctly — [#1003](https://github.com/netease-youdao/LobsterAI/issues/1003).
- Deleting an agent leaves the task list stale until the user switches agents — [#1068](https://github.com/netease-youdao/LobsterAI/issues/1068).
- Users want less manual repetition: reusable prompt templates, slash skill insertion, more preset agents, and better artifact previews — [#1008](https://github.com/netease-youdao/LobsterAI/pull/1008), [#1009](https://github.com/netease-youdao/LobsterAI/pull/1009), [#1011](https://github.com/netease-youdao/LobsterAI/pull/1011), [#1013](https://github.com/netease-youdao/LobsterAI/pull/1013).

Satisfaction/dissatisfaction: release velocity is positive, especially around OpenClaw compatibility, browser passkeys, scheduled tasks, and subscription offers. Dissatisfaction is driven by stale March issues/PRs, unresolved runtime restarts, and MCP integration failures.

## 8. Backlog Watch
Long-unanswered or stale items needing maintainer attention:

- [#1003](https://github.com/netease-youdao/LobsterAI/issues/1003) — Notion MCP env-var bug; open since 2026-03-28, updated 2026-09-20, 1 comment, stale.
- [#1007](https://github.com/netease-youdao/LobsterAI/issues/1007) — Agent Engine infinite restart; open since 2026-03-29, updated 2026-09-20, 1 comment, stale.
- [#1008](https://github.com/netease-youdao/LobsterAI/pull/1008) — preset agent templates; open since 2026-03-29, stale, no comments.
- [#1009](https://github.com/netease-youdao/LobsterAI/pull/1009) — prompt template library; open since 2026-03-29, stale, no comments.
- [#1011](https://github.com/netease-youdao/LobsterAI/pull/1011) — extensible artifacts preview pipeline; open since 2026-03-29, stale, no comments.
- [#1013](https://github.com/netease-youdao/LobsterAI/pull/1013) — slash-triggered skill picker; open since 2026-03-29, stale, no comments.
- [#1068](https://github.com/netease-youdao/LobsterAI/issues/1068) — closed but stale; may still need verification that the task-list refresh behavior is fully resolved.

Recommendation: batch-triage the stale March backlog, link relevant items to the current roadmap ([#2726](https://github.com/netease-youdao/LobsterAI/pull/2726)), and prioritize the two open stability issues ([#1003](https://github.com/netease-youdao/LobsterAI/issues/1003), [#1007](https://github.com/netease-youdao/LobsterAI/issues/1007)) before they age further.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>



Here is the structured project digest for **Moltis** dated **2026-09-21**.

---

### 1. Today's Overview
On September 21, 2026, Moltis project activity is highly focused on the configuration and behavioral discrepancies within its automated heartbeat scheduler. While no new pull requests or releases were recorded in the last 24 hours, issue triage has progressed, with one documentation-behavior mismatch issue closed. The community is actively highlighting critical functional gaps regarding how heartbeat active hours and tool controls are handled, indicating that scheduler constraints are a current priority for maintainers.

### 2. Releases
*No new releases were published in the last 24 hours.*

### 3. Project Progress
* **Pull Requests:** No pull requests were merged or closed today.
* **Issue Resolution:** Progress was made on the heartbeat scheduling documentation gap. Issue #1278 (`heartbeat.active_hours` documented but never evaluated) was closed, likely consolidating the issue or marking it for documentation update. However, the underlying functional bug remains open as Issue #1205. 

### 4. Community Hot Topics
The community focus is tightly centered on **heartbeat boundaries and execution controls**:
* **Heartbeat Active Hours Ignored (Issue #1205):** [Open] Users report that the heartbeat runs continuously, completely ignoring the configured `active_hours` window. This represents a major gap between documented configuration features and actual runtime behavior. 
  * Link: [moltis-org/moltis#1205](https://github.com/moltis-org/moltis/issues/1205)
* **Hardcoded Tool Controls (Issue #1279):** [Open] A technical limitation where the heartbeat registration path hard-codes `Default::default()` for `tool_controls`, preventing users from customizing what tools the agent can run during automated turns.
  * Link: [moltis-org/moltis#1279](https://github.com/moltis-org/moltis/issues/1279)
* **Documented but Unenforced Config (Issue #1278):** [Closed] Highlighted the lack of callers for `is_within_active_hours`, pointing out the disconnect between configuration reference docs and the codebase.
  * Link: [moltis-org/moltis#1278](https://github.com/moltis-org/moltis/issues/1278)

**Underlying Needs:** Enterprise and advanced users require predictable, bounded autonomous behavior. The current lack of execution windows (`active_hours`) and inflexible tool permissions during automated scheduled tasks restricts production deployment capabilities.

### 5. Bugs & Stability
* **High Severity — Continuous Heartbeat Execution (Issue #1205):** The scheduler ignores the configured active hours window, leading to unwanted, continuous background agent execution. This is a core stability and resource concern for users trying to limit agent activity to specific times. No merged PR is currently visible to resolve this.
* **Medium Severity — Hardcoded Tool Controls (Issue #1279):** The `CronPayload::AgentTurn` implementation hardcodes default tool controls, preventing restriction of automated agent capabilities. This is a security and stability risk if automated tasks trigger unintended tools. No fix PRs are currently active.
* **Low Severity / Resolved — Doc/Code mismatch (Issue #1278):** Closed today; resolved as a documentation vs. implementation discrepancy.

### 6. Feature Requests & Roadmap Signals
* **Enforced `heartbeat.active_hours` Scheduler:** The logic represented by `is_within_active_hours` needs actual integration into the cron/heartbeat execution loop to match the documented configuration reference (signaled by #1205 and #1278).
* **Customizable Tool Profiles for Cron/Heartbeats:** Refactoring the heartbeat registration path to respect user-defined `tool_controls` in `CronPayload::AgentTurn` (signaled by #1279) is a likely next-step roadmap item for securing autonomous agent schedules. 
* *Predicted Next Version Focus:* The next major update is likely to feature scheduler constraints (time-window limits) and tool-level security scopes for automated agent turns.

### 7. User Feedback Summary
Users are expressing dissatisfaction with the lack of boundary controls for automated agent tasks. The pain points center on the inability to safely run agents continuously without hitting unexpected execution windows or unrestricted tool access. Specifically, production users cannot trust the scheduler to respect quiet hours (#1205) or limit the tool scope of scheduled tasks (#1279), forcing manual overrides or forks to achieve safe automation boundaries.

### 8. Backlog Watch
* **Issue #1205 (Open since August 16, 2026):** This is a critical, long-standing bug regarding the total bypass of `active_hours` configuration. It requires direct maintainer intervention to integrate the scheduling check into the core heartbeat loop.
  * Link: [moltis-org/moltis#1205](https://github.com/moltis-org/moltis/issues/1205)
* **Issue #1279 (Open since September 19, 2026):** Needs architectural review to decouple the heartbeat registration from hardcoded default tool controls, allowing user-defined configurations to flow through the cron execution path.
  * Link: [moltis-org/moltis#1279](https://github.com/moltis-org/moltis/issues/1279)

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>



Based on the GitHub activity data for CoPaw (specifically the `agentscope-ai/QwenPaw` repository) up to **2026-09-21**, here is the structured project digest.

---

### 1. Today's Overview
CoPaw is experiencing exceptionally high development velocity and community engagement. In the last 24 hours, the repository recorded **37 updated Pull Requests (PRs)** and **24 updated issues**, culminating in the release of version **v2.2.2-beta.3**. The project is balancing robust feature expansion—such as unified model management, integrated community feeds, and a multi-tab terminal—with critical stability and security hardening. Overall project health is strong, highlighted by automated CI/CD improvements and massive boosts in frontend test coverage, though some critical backend bugs regarding session persistence and agent prompt injection require immediate attention.

---

### 2. Releases
*   **v2.2.2-beta.3 (Beta)**
    *   **Changes:** 
        *   Restored assistant response actions in the console UI (`fix(console)` by @zhijianma).
        *   Fixed and re-anchored console selectors broken by the previous UI redesign (#7502), while hardening E2E session-list assertions (`fix(e2e)` by @yutai78786).
    *   **Migration/Breaking Changes:** As a beta release targeting the upcoming stable `v2.2.2`, developers should expect minor UI adjustments in the console session list and E2E test suites due to the selector refactor.

---

### 3. Project Progress
The development velocity is high, with **14 merged/closed PRs** and **23 open PRs** today, focusing on architecture refactoring, test coverage, and UI/UX fixes:
*   **Core Infrastructure & CI/CD:** PRs #7901 and #7862 optimized the release pipeline, introducing immediate merge-unfreezing post-release and gating artifact publishing on test results.
*   **Quality Assurance:** PR #7894 significantly boosted frontend test coverage by adding **1,027 statements (+543 test cases)**, pushing console coverage to 67.65%.
*   **Major Feature Refactors (Open):**
    *   **#7899:** Reworks provider management to unify model discovery, pricing, selection, and thinking controls.
    *   **#7719:** Introduces a separate model configuration for `ReMeLight` memory writing to reduce chat-model API costs.
    *   **#7861:** Adds an authenticated, multi-tab chat terminal to the console workspace.
    *   **#7903:** Integrates the QwenPaw community feed and inbox directly into the platform.

---

### 4. Community Hot Topics
The most active discussions center around the future roadmap, multimodal limitations, and data persistence:
*  

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



# ZeroClaw Project Digest — 2026-09-21

---

## 1. Today's Overview

ZeroClaw remains a highly active project with 50 issues and 50 pull requests updated in the last 24 hours. The overall health signal is strong: 12 issues were closed today, including several major RFCs that have moved through revision cycles toward acceptance. No new releases were cut, but the volume of large, cross-cutting PRs under review suggests the project is in a heavy architectural consolidation phase — particularly around runtime coordination, security policy enforcement, and provider reliability. Maintainer bandwidth appears stretched, with multiple XL-sized PRs awaiting review, but the issue-to-PR conversion rate is healthy and most activity is constructive rather than churn.

---

## 2. Releases

No new releases were published in the last 24 hours. The most recent stable release remains the prior tagged version (not shown in the data window). Contributors are currently focused on master-branch integration work rather than release preparation.

---

## 3. Project Progress

### Merged / Closed Today

| Item | Type | Summary |
|---|---|---|
| [PR #10959](https://github.com/zeroclaw-labs/zeroclaw/pull/10959) | Bug Fix | **fix(runtime): sort tool specs so the prompt-cache prefix is stable** — Assembles the tool list from unordered `HashMap`s and sorts it deterministically, ensuring Anthropic's cache breakpoint lands on a stable prefix across process restarts. |
| [Issue #9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | RFC (Accepted) | **RFC: Runtime-owned conversation sessions and transport surface adapters** — Revision 5 accepted; establishes runtime ownership of session lifecycle and pluggable transport adapters. |
| [Issue #9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | RFC (Accepted) | **RFC: Unified file and attachment architecture for conversation surfaces** — Revision 10 accepted; defines a single file model across all channel surfaces. |
| [Issue #10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) | RFC (Accepted) | **RFC: Composable WASM plugin runtime architecture** — Core APIs, typed extension points, and replaceable providers. |
| [Issue #10526](https://github.com/zeroclaw-labs/zeroclaw/issues/10526) | RFC (Accepted) | **RFC: Append-only session event history, deterministic state replay, and derived agent streams** — Replaces mutable conversation persistence with an event-sourcing model. |
| [Issue #6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) | RFC (Accepted) | **RFC: Prefer a lighter ZeroClaw core through external integrations** — Establishes a replacement-first policy for moving integrations out of the core. |
| [Issue #6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | RFC (Accepted) | **RFC: Computer-use support for desktop screen interaction and input control** — Bounded approval units, execution-time revalidation, session arming, and sidecar trust. |
| [Issue #10927](https://github.com/zeroclaw-labs/zeroclaw/issues/10927) | Bug Fix | **Telegram voice preferences match destination chats instead of sender identities** — Resolves a voice-peer comparison bug where the outbound recipient address was compared to configured voice-peer strings. |

### Major PRs Under Review (Open, >200 lines or cross-cutting)

| PR | Summary | Risk | Size |
|---|---|---|---|
| [PR #10621](https://github.com/zeroclaw-labs/zeroclaw/pull/10621) | **feat(runtime): coordinate agent lifecycle mutations** — Single shared live-config authority for daemon RPC, gateway, channels, ACP, and CLI. | High | XL |
| [PR #10381](https://github.com/zeroclaw-labs/zeroclaw/pull/10381) | **fix(security): resolve host launchers before workspace cwd** — Canonical absolute executable paths before applying workspace working directory. | High | XL |
| [PR #7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821) | **feat(security): canonical sandbox_policy schema with application-layer enforcement** — Additive `SandboxPolicyConfig` on `RiskProfileConfig`. | High | XL |
| [PR #10197](https://github.com/zeroclaw-labs/zeroclaw/pull/10197) | **fix(acp): persist interrupted turn progress** — Checkpoint accepted Code/ACP prompts, visible text, tool calls, and results before forwarding turn events. | High | XL |
| [PR #10241](https://github.com/zeroclaw-labs/zeroclaw/pull/10241) | **fix(channels): restore supervised shell approval routing** — Real operator approval path for channel-driven supervised shell calls. | High | XL |
| [PR #9977](https://github.com/zeroclaw-labs/zeroclaw/pull/9977) | **fix(tools): confine filesystem mutations to workspace** — Shared data directory authoritative for backup/retention; file writes confined to policy-authorized paths. | High | XL |
| [PR #9830](https://github.com/zeroclaw-labs/zeroclaw/pull/9830) | **fix(browser): make full browser automation opt-in** — Separate `browser` Chrome automation from `browser_open`; remove from default auto-approve list. | High | M |
| [PR #9584](https://github.com/zeroclaw-labs/zeroclaw/pull/9584) | **feat(cli): add the egress grant ceremony to plugin install and list** — Canonical instance-key grant model, non-widening upgrades. | High | XL |

---

## 4. Community Hot Topics

### Most Commented Issues

| Issue | Comments | Topic | Status |
|---|---|---|---|
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | 39 | RFC: Runtime-owned conversation sessions and transport surface adapters | Closed (Accepted) |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | 32 | RFC: Unified file and attachment architecture for conversation surfaces | Closed (Accepted) |
| [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) | 19 | RFC: Prefer a lighter ZeroClaw core through external integrations | Closed (Accepted) |
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | 17 | RFC: Computer-use support for desktop screen interaction | Closed (Accepted) |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | 15 | Tracker: Maintainer decision queue for RFCs and design issues | Open |

### Analysis

The comment-weighted activity is dominated by RFCs, not bug reports — indicating the community is primarily engaged in architectural discussion rather than reactive troubleshooting. The top two issues (#9487, #9488) are deeply related: both address the conversation surface layer, one from the session-ownership angle and the other from the file-attachment angle. The high engagement on these suggests the community recognizes that the current ad-hoc session and file handling is the biggest architectural liability. The lighter-core RFC (#6165) also drew significant attention, reflecting a shared desire to reduce maintenance burden by pushing integrations to external plugins. The computer-use RFC (#6909) is notable because it touches a high-risk area (desktop input control) yet achieved acceptance with a security clarification revision — a sign that the maintainer team has mature security review processes.

### Most Commented PRs

No PR comment counts were provided in the data (all show `undefined`), but the PR list is dominated by security and runtime-coordination work, consistent with the issue trends above.

---

## 5. Bugs & Stability

### High Severity (Risk: High / Priority: P1)

| Issue | Title | Status | Fix PR? |
|---|---|---|---|
| [#10635](https://github.com/zeroclaw-labs/zeroclaw/issues/10635) | Runtime profile cost limit does not reflect effective global daily budget | Open | No explicit fix PR linked |
| [#10643](https://github.com/zeroclaw-labs/zeroclaw/issues/10643) | fail-closed approval enforcement for bounded child loop tools | Open (In Progress) | Follow-up from #10601; PR exists in linked issues |

**#10635** is a config/onboarding bug: a profile can report `max_cost_per_day_cents = 4294967295` (effectively unbounded) while agent turns are still rejected at the process-wide $10/day ledger. This is a discrepancy between user-facing configuration and actual enforcement — users may believe they have raised their budget when they have not. Severity S2 (degraded behavior), but the risk is high because it touches the security domain (cost limiting is a DoS mitigation).

**#10643** is a security-policy bug: bounded child loops inherit tools without an approval manager, and `gate_tool_approval` treats `approval: None` as `NotRequired`, allowing prompt-required inherited tools to execute without approval. This is a fail-closed enforcement gap — the system is permissive when it should be restrictive. Already marked in-progress with a follow-up from #10601.

### Medium / Low Severity

| Issue | Title | Status |
|---|---|---|
| [#10919](https://github.com/zeroclaw-labs/zeroclaw/issues/10919) | A2A and HTTP tool tests use separate locks for global proxy state | Open (S2, Risk: Low) |
| [#11021](https://github.com/zeroclaw-labs/zeroclaw/issues/11021) | Guarantee exactly-once session_end delivery after ACP hard cancellation | Open |
| [#11020](https://github.com/zeroclaw-labs/zeroclaw/issues/11020) | Surface ACP TodoWrite plan persistence failures | Open |
| [#11019](https://github.com/zeroclaw-labs/zeroclaw/issues/11019) | Make ACP administrative removal transactional with active-turn cancellation | Open |

The ACP-related trio (#11019–#11021) all emerged from the review of PR #10197 and represent edge cases in ACP session lifecycle management: hook delivery after hard cancellation, plan persistence failure observability, and transactional cleanup. These are not user-facing bugs in the traditional sense but are correctness concerns for the ACP transport layer.

---

## 6. Feature Requests & Roadmap Signals

### Active Feature Requests

| Issue | Title | Signal |
|---|---|---|
| [#8046](https://github.com/zeroclaw-labs/zeroclaw/issues/8046) | Optional Telegram webhook mode (alternative to getUpdates long polling) | Users behind NAT without inbound ports want webhook support; 1 👍 |
| [#10987](https://github.com/zeroclaw-labs/zeroclaw/issues/10987) | Surface WhatsApp Web poll votes as `[choice]` messages, like Signal | Follow-up to native polls (#10983/#10984); users expect bidirectional poll interaction |
| [#10634](https://github.com/zeroclaw-labs/zeroclaw/issues/10634) | Recover network-interrupted provider turns without replaying side effects | Bounded retries with safe Continue/Retry path; ZeroCode/ACP resilience |

### Recently Accepted RFCs (Roadmap Indicators)

| RFC | What It Signals |
|---|---|
| [#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) | WASM plugin runtime — the project is moving toward a composable, language-agnostic plugin architecture |
| [#10526](https://github.com/zeroclaw-labs/zeroclaw/issues/10526) | Append-only session event history — event sourcing for conversations, enabling deterministic replay and derived agent streams |
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | Desktop computer-use — screen observation and input control, a major capability expansion |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | Unified file and attachment architecture — all channels share one file model |
| [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) | Lighter core — replacement-first policy for integrations |

The roadmap is clearly trending toward: (1) a modular, plugin-based architecture with WASM as the extension mechanism, (2) event-sourced conversation state for reliability and replay, (3) a unified transport and file surface across all channels, and (4) desktop automation as a first-class capability. The v0.9.0 milestone is implicitly the target for much of this work, as indicated by trackers #7432 and #8358.

---

## 7. User Feedback Summary

Direct user feedback is sparse in the issue data — most comments come from maintainers and contributors (@Audacity88, @NiuBlibing, @JordanTheJet, @iceHub82). However, several pain points are visible:

- **Cost transparency**: Issue #10635 reveals that users cannot trust the reported daily cost limit; the effective global budget is silently enforced at a different threshold.
- **Channel parity expectations**: The WhatsApp poll votes issue (#10987) shows users expect feature parity with Signal, and the Telegram webhook request (#8046) reflects users who need ingress connectivity that long-polling cannot provide.
- **Approval UX for supervised shell**: PR #10241 addresses a situation where channel-driven shell calls were denied before any human could respond — a poor operator experience that the community flagged.
- **Browser automation surprise**: PR #9830 fixes a case where `browser` (full Chrome automation) was force-merged into the default auto-approve list, meaning users could accidentally enable dangerous automation.
- **Provider reliability**: The cluster of Anthropic provider PRs (#10960, #10895, #10959, #94

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*