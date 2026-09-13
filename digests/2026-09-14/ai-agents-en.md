# OpenClaw Ecosystem Digest 2026-09-14

> Issues: 493 | PRs: 500 | Projects covered: 13 | Generated: 2026-09-13 22:15 UTC

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

# OpenClaw Project Digest: 2026-09-14

## 1. Today's Overview
OpenClaw is currently experiencing high-intensity activity with nearly 1,000 updates (Issues and PRs) recorded in the last 24 hours. While the development velocity is impressive (262 PRs merged/closed), the project is grappling with significant stability challenges related to session persistence, subagent orchestration, and the Model Context Protocol (MCP) integration. A critical focus for the team is resolving reliability regressions in the 2026.9.x release branch, which are currently causing update failures and "locked" states for many users.

## 2. Releases
*No new releases were reported in the last 24 hours.*

## 3. Project Progress
The team has been highly active, focusing on UI refinements and internal performance optimizations:
* **UI Enhancements:** Added support for custom SVG artwork in session icons ([#147442](https://github.com/openclaw/openclaw/pull/147442)) and implemented task-collapse features in the history view ([#147295](https://github.com/openclaw/openclaw/pull/147295)).
* **Performance Refactoring:** Refactored filesystem reads to reduce redundant code using `fs-safe` ([#147475](https://github.com/openclaw/openclaw/pull/147475)) and optimized plugin lookups to avoid unnecessary state probes ([#147467](https://github.com/openclaw/openclaw/pull/147467)).
* **Bug Fixes:** Resolved issues related to "stuck" session widgets in the UI that remained in memory even after being deleted ([#147471](https://github.com/openclaw/openclaw/pull/147471)).

## 4. Community Hot Topics
The community is focused on several critical architectural "leaks" and regressions:
* **Internal Data Leaks ([#25592](https://github.com/openclaw/openclaw/issue/25592)):** A high-priority UX concern where internal agent narration and error handling text are leaking into user-facing messaging channels like Slack and iMessage. (40 comments)
* **Subagent Failures ([#44925](https://github.com/openclaw/openclaw/issue/44925)):** Users are reporting that subagent completions are silently lost without retries or notifications, breaking complex multi-step workflows. (28 comments)
* **Update Instability ([#145252](https://github.com/openclaw/openclaw/issue/145252)):** A coordination effort is underway to address why updates from 2026.9.3 to 2026.9.4 are failing failing due to "handoff lease" conflicts.

## 5. Bugs & Stability
Stability is currently the primary concern, particularly regarding process management and SQLite bloat:
* **Zombie Process Accumulation ([#97616](https://github.com/openclaw/openclaw/issue/97616)):** OpenClaw is leaking unreaped child processes from tool execution, leading to runtime degradation over time.
* **Gateway Crashes on MCP Timeout ([#144911](https://github.com/openclaw/openclaw/issue/144911)):** When an MCP server fails to initialize within 30 seconds, the entire Gateway process crashes due to an unhandled promise rejection.
* **SQLite Unbounded Growth ([#114612](https://github.com/openclaw/openclaw/issue/114612)):** `memory_index_chunks` and `memory_embedding_cache` tables grow without a retention policy, threatening to fill disk space.
* **Lock Issues ([#145929](https://github.com/openclaw/openclaw/issue/145929)):** A persistent bug where the auth store remains "locked" after interrupted updates, even with no competing processes.

## 6. Feature Requests & Roadmap Signals
* **Subagent Orchestration ([#27445](https://github.com/openclaw/openclaw/issue/27445)):** A highly requested feature to allow sub-agents to announce completion to the parent session rather than the direct channel, enabling the main agent to better orchestrate multi-step tasks.
* **Dynamic Identity ([#58057](https://github.com/openclaw/openclaw/issue/58057)):** Moving away from hardcoded sender IDs in `openclaw.json` to support multi-user deployments on platforms like iMessage (BlueBubbles).
* **iOS Integration ([#147238](https://github.com/openclaw/openclaw/issue/147238)):** Significant work is underway for Cloudflare Access support and profile admission on the iOS app.

## 7. User Feedback Summary
* **UX Friction:** Users are frustrated by "internal thoughts" or technical processing text appearing in their actual chat history ([#25592]).
* **Reliability Issues:** There is significant sentiment regarding "silent failures" where agents appear to be working but have actually timed out or dropped the task ([#44925]).
* **Platform Specifics:** Windows users are reporting specific issues with gateway restarts killing slow-booting processes erroneously, while macOS users are hitting Node.js version-related decompression errors.

## 8. Backlog Watch
* **Context Overflow Recovery ([#113701](https://github.com/openclaw/openclaw/issue/113701)):** The current compaction logic fails to recover when large tool outputs exceed the window in a single turn, leading to infinite failure loops.
* **Scaling Blocking ([#119720](https://github.com/openclaw/openclaw/issue/119720)):** Synchronous persistence tasks are blocking the Gateway event loop at scale, which is a fundamental bottleneck for high-usage instances.

---

## Cross-Ecosystem Comparison

**Ecosystem Overview**  
The open‑source personal‑AI‑assistant/agent landscape in late‑2026 is characterized by a mix of high‑velocity, feature‑rich cores (OpenClaw, Hermes Agent, Moltis) and more narrowly focused utilities that excel at specific integrations (NanoBot, LobsterAI, IronClaw). While many projects are actively polishing UI/UX and hardening security, a common pain point is the reliability of long‑running agent loops—sub‑agent handoffs, session persistence, and cron‑scheduler timing appear repeatedly across repositories. The overall momentum is upward, but maintainer bandwidth for review and release engineering varies widely, creating a bifurcation between projects that can ship quickly and those that are bottlenecked by process overhead.

---

### Activity Comparison  

| Project | Issues (24 h) | PRs (24 h) | New Release? | Health Score* |
|---------|---------------|-----------|--------------|---------------|
| **OpenClaw** | ~738* | 262 (merged/closed) | N | 3 |
| **NanoBot** | 0 | 6 (4 open, 2 closed) | N | 3 |
| **Hermes Agent** | 50 | 50 | N | 3‑4 |
| **PicoClaw** | 5 | 4 | N | 2 |
| **NanoClaw** | ~5† | ~6† | N | 3 |
| **NullClaw** | 0 | 0 | N | 1 |
| **IronClaw** | 0 | 5 (Dependabot) | N | 4 |
| **LobsterAI** | 4 | 6 | N | 3 |
| **TinyClaw** | 0 | 0 | N | 1 |
| **Moltis** | 3 | 5 | N | 4 |
| **CoPaw** | 5 | 6 | N | 3 |
| **ZeptoClaw** | 0 | 0 | N | 1 |
| **ZeroClaw** | 36 | 50 | N | 2 |

\*Health Score (1 = stalled/inactive, 5 = stable + steady feature flow). Scores synthesize issue/PR volume, merge throughput, bug backlog, and release cadence.  
\†Exact counts not disclosed in the digest; approximated from described activity.

---

### OpenClaw’s Position  

**Advantages vs. Peers**  
- **Scale of activity:** Nearly 1 k issue/PR updates in 24 h dwarf all other repositories, indicating the largest contributor base and most rapid iteration.  
- **Feature breadth:** Actively working on UI enhancements (custom SVG icons, task‑collapse), performance refactoring (`fs‑safe`, plugin lookup), and emerging capabilities such as sub‑agent orchestration and dynamic identity for multi‑user deployments.  
- **Technical approach:** Heavy reliance on the Model Context Protocol (MCP) for tool integration, a sub‑agent execution model, and a plug‑in architecture that lets community contributors extend functionality without core changes.  

**Challenges**  
- Stability regressions (session persistence, zombie processes, SQLite bloat, gateway crashes on MCP timeout) are more acute than in most peers, dragging the health score down despite high velocity.  
- Community hot topics reveal UX friction (“internal thoughts leaking into chat”) and silent sub‑agent failures—issues that are less prevalent in the more narrowly scoped bots (e.g., NanoBot, LobsterAI).  

Overall, OpenClaw offers the richest extensibility platform but requires greater investment in reliability engineering to match the steadiness of projects like IronClaw or Moltis.

---

### Shared Technical Focus Areas  

| Area | Projects Highlighting Need | Specific Manifestations |
|------|----------------------------|--------------------------|
| **Sub‑agent orchestration & reliable handoff** | OpenClaw, Hermes Agent, Moltis | Silent completion loss, missing ACK/retries, need for parent‑session notification. |
| **Session / state persistence** | OpenClaw (SQLite bloat, locked auth store), Hermes Agent (OAuth MCP identity leak, config‑save race), ZeroClaw (config validation bypass) | Memory tables growing unbounded, profile‑settings lost after restart, stale config values. |
| **Security hardening (path traversal, SSRF, secret leakage)** | NanoBot (session‑key path‑traversal), LobsterAI (SSRF via `api:fetch/stream`), Hermes Agent (secret leak in terminal redaction) | Untrusted session IDs, arbitrary internal fetches, credential exposure in logs. |
| **Provider & channel integration reliability** | IronClaw (dependency updates), NanoClaw (Mattermost adapter verification), LobsterAI (OpenCode session header), ZeroClaw (OpenCode missing `x‑opencode‑session`) | Adapter restarts not proving connectivity, missing headers breaking downstream models, Windows‑specific stack‑guard issues. |
| **UI/UX polish & responsiveness** | PicoClaw (Web‑input lag with long history), LobsterAI (markdown editing, unsaved‑changes prompt), NanoBot (mobile composer layout) | Input latency scaling with history, inconsistent branding, mobile layout regressions. |
| **Cron / scheduled‑task reliability** | Hermes Agent (cold‑worker ACK timeout, DST confusion), ZeroClaw (cron check‑then‑act on agent rename) | Jobs missed or duplicated due to timing windows. |
| **Multi‑profile / identity isolation** | Hermes Agent (OAuth MCP identity leak, secondary‑profile config loss), NanoClaw (provider picker regression) | Profiles sharing tokens or losing settings when switched. |
| **Remote / headless workflows** | NanoClaw (remote project‑path support), Hermes Agent (Bot Screen streaming), LobsterAI (durable memory proposal) | Ability to operate on remote filesystems, stream desktop for 2FA, persist workspace across sessions. |

---

### Differentiation Analysis  

| Dimension | OpenClaw | NanoBot | Hermes Agent | PicoClaw | NanoClaw | IronClaw | LobsterAI | Moltis | CoPaw | ZeroClaw |
|-----------|----------|---------|--------------|----------|----------|----------|-----------|--------|-------|----------|
| **Primary language** | TS/JS (Electron‑like) | TS/JS (WebUI) | TS/JS (Electron) | Go | TS/JS | Rust | TS/JS (Electron) | TS/JS (React) | TS/JS | TS/JS |
| **Target user** | Power‑users & developers wanting extensible agent platform | Self‑hosters needing secure, lightweight assistant | Developers & ops needing multi‑profile gateway | Embedded/IoT developers (RV1106, RISC‑V) | Enterprises needing reliable first‑run UX | Infrastructure library consumers | Researchers & knowledge‑workers | End‑users seeking configurable reasoning | Developers building multi‑agent systems | Platform‑builders needing extensible RPC/plugin system |
| **Architecture** | Plugin‑based, MCP‑tool layer, sub‑agent orchestrator | Core + WebUI, cron‑automation focus | Gateway + Desktop + Bot modes, profile‑isolated | Minimal Go binary + launcher | Modular setup/provider flow | Pure Rust crate (dependency‑only) | Electron‑based desktop with markdown editor | Schema‑driven reasoning + Telegram bridge | Multi‑agent collaboration framework | RPC‑driven plugin ecosystem with policy engine |
| **Release cadence** | Frequent PRs, stalled releases due to bugs | Incremental UI/security patches | Steady bug‑fix + feature PRs | Low, reliance on stale‑bot closures | Moderate, backlog of feature PRs | Dependency‑only bumps | Mixed UI + security patches | High velocity on reasoning/features | Steady i18n/provider adds | High discussion, low merge throughput |
| **Community size (proxy)** | Largest (≈1k updates/24h) | Small‑moderate (6 PRs) | Medium (≈100 updates) | Tiny (≤10) | Small‑moderate | Minimal (automation) | Small‑moderate | Small‑moderate | Small‑moderate | Large discussion, low PR merge |

---

### Community Momentum & Maturity  

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapidly iterating** | OpenClaw, Hermes Agent, Moltis, LobsterAI | High issue/PR volume, active feature work, regular merges (though OpenClaw’s releases blocked by stability). |
| **Steady maintenance / incremental** | NanoBot, IronClaw, CoPaw | Predominantly dependency bumps, small UI/security fixes, low feature churn. |
| **Stalled / low activity** | PicoClaw, NullClaw, TinyClaw, ZeptoClaw | Minimal updates, reliance on stale‑bot closures, no releases. |
| **Review‑constrained** | ZeroClaw | Substantial issue/PR inflow but near‑zero merge throughput; bottleneck in decision/approval process. |
| **Emerging / stabilizing** | NanoClaw | Focused on fixing first‑run UX and provider onboarding; backlog of feature PRs awaiting review. |

---

### Trend Signals for AI‑Agent Developers  

1. **Security‑first posture** – Path‑traversal and SSRF vulnerabilities appear in multiple repos; projects are prioritizing session‑key validation, URL whitelisting, and secret‑redaction audits.  
2. **Reliable long‑running loops** – Sub‑agent handoff ACK windows, cron scheduler drift, and zombie‑process cleanup are recurring pain points; developers are asking for deterministic retry/back‑off policies and process‑reaping guarantees.  
3. **Persistent, isolated state** – Multi‑profile identity leaks, unbounded SQLite/JSONL growth, and config‑validation bypasses signal a need for scoped storage plugins with TTL/gc mechanisms.  
4. **Rich UI without sacrificing performance** – Input lag tied to chat history length (PicoClaw, OpenClaw) and mobile layout issues (NanoBot) indicate a shift toward virtual‑list rendering and incremental UI updates.  
5. **Provider/channel abstraction** – Requests for optional advanced memory providers, OpenCode session headers, and Mattermost/Telegram tool parity reflect a desire for pluggable, protocol‑level adapters that hide platform quirks.  
6. **Observability & operator control** – Feature requests for notice routing, Kanban CLI enhancements, and clear‑chat actions show operators want finer‑grained telemetry and manual intervention points.  
7. **Cross‑platform first‑run experience** – Ensuring bundled binaries (no global `npm install -g`) and reliable provider picker on fresh installs is a common ask across NanoClaw, LobsterAI, and IronClaw‑dependent projects.  

**Takeaway for decision‑makers:** The ecosystem is converging on a set of non‑functional requirements—security, state persistence, reliable tool/sub‑agent execution, and cross‑platform usability—that will likely shape the next generation of open‑source AI agents. Projects that can address these concerns while maintaining rapid feature velocity (e.g., Moltis, Hermes Agent) are poised to become the preferred foundations for both enterprise and end‑user deployments.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**1. Today's Overview**
On 2026-09-14, NanoBot (HKUDS/nanobot) exhibited moderate but focused development activity, with 6 pull requests updated in the prior 24 hours (4 open, 2 closed) and zero issue updates or new releases. The work concentrated on WebUI refinements and security hardening, including two merged UI fixes and four pending bug/security PRs. Project health appears actively maintained, though a backlog of open security‑related PRs (one marked p1) warrants timely reviewer attention.

**3. Project Progress** (Releases omitted – none published)
The following PRs were closed/merged on 2026-09-13:
- [PR #5755](https://github.com/HKUDS/nanobot/pull/5755) – `fix(webui): improve mobile composer and settings navigation`. Enhanced responsive layout by adapting composer controls to available width, keeping attachment/model controls left‑aligned; no backend changes.
- [PR #5754](https://github.com/HKUDS/nanobot/pull/5754) – `fix(webui): unify app logos and brand mentions`. Introduced compact rounded logos in the Apps catalog and consistent brand‑name display (e.g., Linear, iTerm2) in messages/composer.

These advances indicate continued polish of the user‑facing interface without altering core functionality.

**4. Community Hot Topics**
No PRs or issues recorded explicit community engagement (all show 0 comments, 0 reactions). However, priority and conflict markers reveal maintainer–community focal areas:
- [PR #5633](https://github.com/HKUDS/nanobot/pull/5633) (priority p1, security, open) – session key path‑traversal fix; reflects a critical shared need for safe multi‑tenant session storage.
- [PR #5673](https://github.com/HKUDS/nanobot/pull/5673) (priority p2, regression, conflict, open) – remote project‑path support; highlights demand for seamless remote/desktop agent workflows.

Underlying needs: secure hosting and reliable remote access for personal AI assistant deployments.

**5. Bugs & Stability**
Open bug‑fix PRs ranked by severity (no independent issue reports today):
- **High (p1):** [PR #5633](https://github.com/HKUDS/nanobot/pull/5633) – `fix(session): reject session keys with path traversal components`. Prevents untrusted session IDs (e.g., `../../etc/passwd`) from writing outside the sessions directory. Fix implemented, awaiting merge.
- **Medium (p2):** [PR #5751](https://github.com/HKUDS/nanobot/pull/5751) – `fix(cron): preserve pending runs when editing automation details`. Stops recomputation of next occurrence on metadata‑only edits that skipped due cron/one‑time tasks.
- **Medium (p2):** [PR #5673](https://github.com/HKUDS/nanobot/pull/5673) – `fix(webui): support remote project paths and honor picker capabilities`. Regression fix for remote users; currently has merge conflict.
- **Medium (p2):** [PR #5756](https://github.com/HKUDS/nanobot/pull/5756) – `test(security): keep proxy-clearing fixtures hermetic on hosts with OS-level proxies`. Strengthens SSRF/proxy test reliability on Windows/macOS system proxies.

No crash or stability issues were filed in the issue tracker.

**6. Feature Requests & Roadmap Signals**
No standalone feature‑request issues exist; signals are inferred from PR intent:
- Remote project selection ([PR #5673](https://github.com/HKUDS/nanobot/pull/5673)) suggests upcoming improved remote/server‑side file integration.
- Continuous WebUI branding and mobile UX work ([PR #5754](https://github.com/HKUDS/nanobot/pull/5754), [PR #5755](https://github.com/HKUDS/nanobot/pull/5755)) points to a polish‑oriented minor release.
- Security fixtures and session validation ([PR #5633](https://github.com/HKUDS/nanobot/pull/5633), [PR #5756](https://github.com/HKUDS/nanobot/pull/5756)) indicate the next version may bundle hardening fixes.

Predicted next version: incremental WebUI refresh + security patch set.

**7. User Feedback Summary**
Pain points distilled from PR descriptions:
- Mobile composer controls were squeezed into one row, harming usability ([PR #5755](https://github.com/HKUDS/nanobot/pull/5755)).
- Inconsistent app logos/brand mentions reduced interface clarity ([PR #5754](https://github.com/HKUDS/nanobot/pull/5754)).
- Remote WebUI users could not pick server‑side absolute paths, forcing client‑side choosers ([PR #5673](https://github.com/HKUDS/nanobot/pull/5673)).
- Editing automation name/instructions inadvertently skipped pending cron runs ([PR #5751](https://github.com/HKUDS/nanobot/pull/5751)).
- Need to block session‑ID path traversal for hostile‑environment safety ([PR #5633](https://github.com/HKUDS/nanobot/pull/5633)).

User satisfaction is tied to rapid UI responsiveness and visible security care.

**8. Backlog Watch**
Important open PRs needing maintainer review/merge:
- [PR #5633](https://github.com/HKUDS/nanobot/pull/5633) – created 2026‑09‑02, p1 security, updated 2026‑09‑13 but unmerged (12+ days open).
- [PR #5673](https://github.com/HKUDS/nanobot/pull/5673) – created 2026‑09‑05, p2 regression with conflict, updated 2026‑09‑13.
- [PR #5751](https://github.com/HKUDS/nanobot/pull/5751) – created 2026‑09‑12, p2 cron bug, open.
- [PR #5756](https://github.com/HKUDS/nanobot/pull/5756) – created 2026‑09‑13, p2 test security, open.

No lingering issues in backlog (zero issues updated). Priority should be given to the p1 security PR to close the vulnerability window.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent – Project Digest (2026‑09‑14)**  
*Based on GitHub activity (issues & PRs updated in the last 24 h). No new releases were published today.*

---

## 1. Today’s Overview  
The repository showed a burst of maintenance activity: **50 issues** and **50 pull‑requests** were touched in the past day, the vast majority of which are already closed (37 issues, 23 PRs). Only 13 issues and 27 PRs remain open, indicating a healthy triage rhythm. No version bump occurred, so the current stable line remains Hermes Agent 0.21.2 (`f364c1977`). The day's work was dominated by bug‑fixes (cron‑scheduler timing, session‑metadata loss, concurrent web‑search deadlocks, config‑parsing regressions) and a handful of feature‑oriented PRs that aim to improve multi‑profile lifecycle handling and Kanban CLI ergonomics.

## 2. Releases  
*No new releases were tagged today.*  
The latest published version is **0.21.2** (commit f364c1977). Users should continue to monitor the changelog for any upcoming point‑release that may incorporate today’s fixes.

## 3. Project Progress – Merged/Closed PRs  

| PR | Status | Summary (what moved forward) | Link |
|----|--------|------------------------------|------|
| **#110234** | CLOSED | Fixed Dashboard `/chat` getting stuck on “Setup Required” for custom endpoints and restored session‑controls for named local profiles (addresses #108383, #108369). | <https://github.com/NousResearch/hermes-agent/pull/110234> |
| **#49953** | CLOSED | Stripped ANSI escape codes from background‑watcher messages to prevent colour‑code leakage into Telegram/text notifications. | <https://github.com/NousResearch/hermes-agent/pull/49953> |

*All other PRs listed in the data are currently OPEN (under review or awaiting feedback).*

## 4. Community Hot Topics  

| Item | Type | Comments | Core Issue / Need | Link |
|------|------|----------|-------------------|------|
| **#109243** | Issue (cron) | **18** | External‑worker handoff times out because a cold worker start (~12 s) exceeds the 5 s ACK window, causing cron jobs to stall intermittently. | <https://github.com/NousResearch/hermes-agent/issues/109243> |
| **#102792** | Issue (desktop/sessions) | **10** | New‑session “+” button on project sidebar loses owner metadata on multi‑profile installs → immediate “Couldn't open this session”. | <https://github.com/NousResearch/hermes-agent/issues/102792> |
| **#29966** | Issue (tools/web) | **5** | Concurrent `ddgs` web searches trigger a futex deadlock, freezing the agent (CTRL‑C ineffective). | <https://github.com/NousResearch/hermes-agent/issues/29966> |
| **#109360** | Issue (cron) | **4** | Cron‑job gateway‑liveness check mis‑resolves `HERMES_HOME`, falsely reporting “gateway not running”. | <https://github.com/NousResearch/hermes-agent/issues/109360> |
| **#109258** | Issue (gateway/telegram) | **4** | `/save md` command fails in Telegram UI due to missing `GatewayRunner.get_adapter`. | <https://github.com/NousResearch/hermes-agent/issues/109258> |

*These items attracted the most discussion, signaling areas where users feel friction and where maintainers are actively debating fixes.*

## 5. Bugs & Stability – Today’s Reports  

| Severity (label) | Issue | Summary | Fix PR (if any) | Link |
|------------------|-------|---------|----------------|------|
| **P1** (high) | #109422 (multiplexed profiles sharing OAuth MCP server) | Two profiles silently adopt each other’s authenticated identity when pointing to the same OAuth MCP URL. | – (open) | <https://github.com/NousResearch/hermes-agent/issues/109422> |
| **P1** | #110308 (desktop Cloud cookie recovery) | Desktop fails to recover a saved Cloud cookie before gateway ticket mint, causing 401 loops. | PR #110308 (open) | <https://github.com/NousResearch/hermes-agent/issues/110308> |
| **P2** | #109243 (cron handoff timeout) | See Hot Topics – cold worker start >5 s ACK. | PR #109532 (open) & #110261 (open) address DST‑related timing; the core ACK vs. start‑time mismatch still needs a dedicated fix. | <https://github.com/NousResearch/hermes-agent/issues/109243> |
| **P2** | #109398 (secondary profile config missed) | Config saved while another adapter is connecting is not picked up by later rescans. | PR #110212 (open) aims to rescue mid‑connect config saves. | <https://github.com/NousResearch/hermes-agent/issues/109398> |
| **P2** | #109423 (Telegram allowed_chats JSON‑string mis‑parse) | Group messages silently dropped when `allowed_chats` stored as JSON string. | – (open) | <https://github.com/NousResearch/hermes-agent/issues/109423> |
| **P3** | #109362 (redact_terminal_output secret leak) | Secrets leak when command reads `config.yaml` or shell rc files. | – (open) | <https://github.com/NousResearch/hermes-agent/issues/109362> |
| **P3** | #109282 (status reports stale model) | `/status` shows a historical model as current on long‑lived gateway sessions. | – (open) | <https://github.com/NousResearch/hermes-agent/issues/109282> |
| **P3** | #109246 (i18n hardcoded English strings) | Settings page shows 21 hard‑coded English strings; missing zh/zh‑ant translations. | – (open) | <https://github.com/NousResearch/hermes-agent/issues/109246> |

*All P1/P2 bugs have at least one associated open PR attempting a fix; P3 issues are mostly awaiting triage.*

## 6. Feature Requests & Roadmap Signals  

| Item | Type | Summary | Link |
|------|------|---------|------|
| **#110337** | Feature (gateway notices) | Add configurable routing for operator notices (`session_reset`, `provider_error`, `fallback_switch`) to `chat` (default), `admin_dm`, or `log`. | <https://github.com/NousResearch/hermes-agent/pull/110337> |
| **#110338** | Feature (desktop Bot Chat clear) | Add a confirmed “Clear chat…” action for the canonical Bot Chat in Bot Mode. | <https://github.com/NousResearch/hermes-agent/pull/110338> |
| **#108914** | Feature (Bot Screen) | Stream a headless Linux bot’s Xfce desktop into Hermes Desktop, allowing takeover/hand‑back for 2FA, etc. | <https://github.com/NousResearch/hermes-agent/pull/108914> |
| **#110344** | Feature (Kanban promote) | Make `kanban promote` accept triage tasks, preserving parent guards. | <https://github.com/NousResearch/hermes-agent/pull/110344> |
| **#110322** | Feature (Kanban clean exit) | Allow a worker that exits cleanly (rc=0) to park with its last‑known state instead of being marked crashed. | <https://github.com/NousResearch/hermes-agent/pull/110322> |

*These PRs indicate a near‑term focus on:*  
- **Operator observability** (notice routing, logging).  
- **User‑experience polish** in Desktop (clear chat, cookie recovery).  
- **Kanban CLI usability** (triage workflow, clean exits).  
- **Remote‑bot interaction** (Bot Screen streaming).  

If the maintainers merge the above, the next minor release (likely 0.21.3) could ship these enhancements.

## 7. User Feedback Summary  

- **Cron reliability** remains a pain point: workers starting cold miss the ACK window, and DST transitions confuse due‑time calculations. Users report intermittent job loss and need more robust timing logic.  
- **Multi‑profile session management** is fragile: renaming profiles leaves ghost directories, secondary‑profile config gets lost during adapter connect, and OAuth/MCP token sharing leads to cross‑profile identity leakage.  
- **Desktop UI glitches** – blank chat pane, i18n missing strings, and sidebar “+” button losing metadata – affect daily usability, especially on non‑default profiles.  
- **Tool‑level concurrency bugs** (web‑search deadlock, MCP message‑reference instability) cause hard freezes that require process restart.  
- **Configuration parsing regressions** (empty string overriding env‑var, `allowed_chats` JSON‑string mis‑parse) silently break integrations (Telegram, Matrix).  
- **Security/privacy concerns** – secret leakage via `redact_terminal_output` and unintended credential sharing across profiles – are highlighted as high‑risk items needing prompt resolution.

Overall, users appreciate the active maintenance but urge stricter guarantees around cron reliability, profile isolation, and secret handling.

## 8. Backlog Watch  

| Item | Reason for Attention | Link |
|------|----------------------|------|
| **#109243** (cron handoff timeout) | High‑impact, still open despite two related PRs (#109532, #110261) that address DST but not the core ACK vs. start‑time mismatch. | <https://github.com/NousResearch/hermes-agent/issues/109243> |
| **#109422** (OAuth MCP identity leak) | P1 security‑boundary bug; no fix PR yet. | <https://github.com/NousResearch/hermes-agent/issues/109422> |
| **#109362** (secret leak in terminal redaction) | P3 privacy issue; open, no PR. | <https://github.com/NousResearch/hermes-agent/issues/109362> |
| **#110308** (desktop Cloud cookie recovery) | P1 blocker for Cloud‑linked users; PR open but needs review. | <https://github.com/NousResearch/hermes-agent/pull/110308> |
| **#110212** (multiplexed profile lifecycle) | Open PR that tackles several profile‑related bugs (#109267, #109398, #109016, #107829, #108346); critical for multi‑profile stability. | <https://github.com/NousResearch/hermes-agent/pull/110212> |
| **#70626** (propagate clarify callback) | Long‑standing open PR (since 2026‑07‑24) affecting tool‑plugin dialog flow; still awaiting merge. | <https://github.com/NousResearch/hermes-agent/pull/70626> |
| **#67153** (Monet‑project‑setup skill) | Feature request waiting since mid‑2026; could enrich the skill set. | <https://github.com/NousResearch/hermes-agent/pull/67153> |

*These items represent either high‑severity bugs lacking a fix, or significant feature work that has lingered in review. Prioritizing them would improve stability and user confidence.*

---

**Takeaway:** The Hermes Agent project is actively maintaining its codebase, with a strong focus on fixing cron‑scheduler timing, profile isolation, and UI regressions. While many bugs are being addressed promptly, a few critical items (cron ACK timeout, OAuth MCP identity leak, secret leakage) remain open and merit immediate attention to prevent reliability and security issues in production deployments. The upcoming feature PRs (notice routing, Bot Screen, Kanban enhancements) signal a roadmap toward richer observability and user‑experience improvements for the next release cycle.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-09-14

## 1. Today's Overview

PicoClaw (github.com/sipeed/picoclaw) showed a moderate level of maintenance activity on 2026-09-13, with 5 issues and 4 PRs updated in the last 24 hours and no new releases shipped. The activity is dominated by close/cleanup operations rather than new feature landing: all 4 PRs were closed (none merged today), and 2 of the 5 issues were closed (both flagged `[stale]`), suggesting active bot-driven housekeeping. The remaining open issues surface meaningful UX concerns (Web UI lag) and protocol integration gaps (IRC long-message handling, OpenCode Go headers). Overall, project velocity appears routine with no critical regressions reported, but the persistence of low-engagement `[stale]` items indicates some contributor feedback is being closed without resolution.

## 2. Releases

No new releases were published in the last 24 hours. There is no version-tagged activity to summarize.

## 3. Project Progress

No PRs were merged today. The following PRs were closed without merging:

- **PR #3348** — *[CLOSED, stale]* `i18n: complete Czech code wrap labels` — i18n improvement for Czech localization. Closed by stale-bot, not merged. ([link](https://github.com/sipeed/picoclaw/pull/3348))
- **PR #1545** — *[CLOSED]* `fix: merge PR #1500 #1490 #1488 #1487 #1485` — A meta-PR attempting to merge several outstanding fix PRs. Closed, possibly superseded or rejected as a batch-merge strategy. ([link](https://github.com/sipeed/picoclaw/pull/1545))
- **PR #20** — *[CLOSED]* `Fix typos and update API keys in README` — Documentation cleanup aligning README examples with the actual config schema (snake_case keys, corrected `api_base` URLs, fixed numbering). Useful but unmerged. ([link](https://github.com/sipeed/picoclaw/pull/20))
- **PR #1268** — *[CLOSED]* `imessage support, stop command, some logs` — A larger feature PR adding iMessage channel support, an LLM/conversation logger, a `stop` command, and a privacy sanitizer. Closed without merge, suggesting channel support landed elsewhere or scope was rejected. ([link](https://github.com/sipeed/picoclaw/pull/1268))

Net progress: zero code changes merged into the codebase today. Maintainers appear to be pruning rather than landing.

## 4. Community Hot Topics

The most engaged threads in the last 24 hours, ranked by comment count and reactions:

- **#3287 — IRC long-message handling** (12 comments, 0 👍)  
  Proposal to teach PicoClaw that split IRCv3 messages over the 512-byte limit should be reassembled into a single cohesive message instead of being processed as fragments. The repeated comment count suggests an ongoing design discussion between reporters and maintainers about how to signal message boundaries. Underlying need: reliable IRC interoperability without message fragmentation artifacts. ([link](https://github.com/sipeed/picoclaw/issues/3287))
- **#3281 — Web UI chat input lag with long history** (11 comments, 2 👍)  
  Reproducible lag in the Web UI input box once chat history grows, reported on PicoClaw 0.3.1 / Go 1.25.11. The engagement level indicates active debugging, likely discussing whether the issue is render-side, virtual-list, or state-update related. Connects strongly to #3350 (closed-stale duplicate). ([link](https://github.com/sipeed/picoclaw/issues/3281))
- **#3369 — OpenCode Go session header support** (1 comment, 2 👍)  
  Request to inject an `x-opencode-session` header for OpenCode Go (distinct from OpenCode Zen) using the session ID already tracked by PicoClaw. High 👍/comment ratio signals clear community demand even with low discussion volume. ([link](https://github.com/sipeed/picoclaw/issues/3369))

## 5. Bugs & Stability

| Severity | Issue | Status | Notes |
|----------|-------|--------|-------|
| **High** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) Web UI input lag with growing history | OPEN | Affects basic chat UX on standard Web UI; reproducible steps provided; active discussion. No fix PR linked. |
| **Medium** | [#3350](https://github.com/sipeed/picoclaw/issues/3350) Typing lag on embedded/low-perf devices (RV1106, RISC-V boards) | CLOSED [stale] | Related to #3281 but on resource-constrained hardware via `picoclaw-launcher` (port 18800). Closed as stale without fix. Underlying concern unanswered: why typing latency scales with chat history length. |
| **Medium** | [#3351](https://github.com/sipeed/picoclaw/issues/3351) Auto-compression physically deletes `.jsonl` session records | CLOSED [stale] | `pkg/memory/jsonl.go` `SetHistory` → `rewriteJSONL` overwrites the entire session file, contradicting the otherwise append-only behavior. Reported loss of irrecoverable history after memory compression. Closed as stale without fix — the data-loss risk remains unaddressed. |

No crash reports or regressions tied to a specific recent change were filed today. Two open reliability gaps (#3350's closed sibling #3281, and #3351) remain on the backlog; #3351 in particular represents a data-integrity risk that should not have been closed without remediation.

## 6. Feature Requests & Roadmap Signals

- **#3287 IRC long-message reassembly** — Likely addressed by extending the IRC channel parser to buffer and rejoin split messages using the standard 512-byte + newline signaling. Reasonable candidate for a near-term release once a contributor picks it up. ([link](https://github.com/sipeed/picoclaw/issues/3287))
- **#3369 OpenCode Go `x-opencode-session` header** — Small, well-scoped change to the OpenAI-compatible provider's request builder. High community upvote density per comment suggests this is the most likely feature to ship soon if a maintainer or the reporter submits a PR. ([link](https://github.com/sipeed/picoclaw/issues/3369))
- **Re-emerging: iMessage channel support** — PR #1268 was closed without merge but the feature category (channel expansion + `stop` command + privacy sanitizer) appears to be a recurring community ask. Expect a future PR or issue request to resurface it.

The closed-stale i18n PR (#3348, Czech code-wrap labels) signals that localization completeness is being tracked but is not on the critical path.

## 7. User Feedback Summary

- **Persistent UX frustration: Web UI performance.** Two independent reports (#3281 open, #3350 closed-stale) converge on the same pain point — chat history length degrades typing responsiveness. On embedded hardware the issue is acute enough to make the input box unusable. Users are explicitly asking why input latency should scale with history length, indicating a perceived architectural problem rather than an isolated bug.
- **Data-integrity concern.** #3351 articulates a substantive trust issue: the session compression path silently and irreversibly rewrites the user's `.jsonl` history file, contradicting the otherwise append-only contract. The fact that it was closed as stale rather than triaged is likely to generate follow-up dissatisfaction.
- **Channel/protocol coverage gaps.** IRC users (#3287) and OpenCode Go users (#3369) feel PicoClaw is not yet a seamless drop-in for their workflows. Both requests are narrow and well-defined, suggesting users are close to being unblocked with minimal engineering effort.
- **Satisfaction signal:** Low absolute comment counts on feature issues (1–12) and the absence of any release-blocking complaints suggest the active user base is generally tolerant; today's noise is concentrated on a small number of specific gaps rather than systemic dissatisfaction.

## 8. Backlog Watch

Items needing maintainer attention to prevent community disengagement:

- **#3351 (CLOSED [stale]) — Session compression data-loss bug** — Should be re-opened or have an explicit `wontfix`/tracking issue. Closing a data-loss report as stale without comment is reputation-damaging. ([link](https://github.com/sipeed/picoclaw/issues/3351))
- **#3350 (CLOSED [stale]) — Embedded device Web UI lag** — Likely a duplicate or near-duplicate of the still-open #3281. Closing without cross-linking leaves a confusing trail. Consider linking or merging into #3281. ([link](https://github.com/sipeed/picoclaw/issues/3350))
- **PR #20 (CLOSED) — README typo/API key fixes** — Pure documentation hygiene. Low-risk to merge; rejection without comment discourages new contributors. ([link](https://github.com/sipeed/picoclaw/pull/20))
- **PR #3348 (CLOSED [stale]) — Czech code-wrap i18n** — Re-opening or scheduling for the next i18n pass would reward the contributor. ([link](https://github.com/sipeed/picoclaw/pull/3348))
- **PR #1545 (CLOSED) — Batch-merge of #1500, #1490, #1488, #1487, #1485** — A maintainer should review and individually land/close the underlying fixes so that the original bug reports are properly resolved rather than collapsed into a rejected meta-PR. ([link](https://github.com/sipeed/picoclaw/pull/1545))

**Health summary:** PicoClaw's public activity is steady but maintenance-light today — no merges, no releases, and notable reliance on stale-bot closures. The most urgent signal for project health is the closed-as-stale treatment of a data-loss bug (#3351); the most promising near-term wins are the small, well-scoped #3287 and #3369 feature requests and the still-open #3281 Web UI lag issue.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-09-14

## 1. Today's Overview

NanoClaw saw a moderately busy 24-hour window with strong activity concentrated in **setup/installation reliability** and **provider onboarding**. No new releases were published, but maintainers landed a critical patch (PR #3790) and closed a corresponding user-facing bug (Issue #3787) around the fresh-install provider picker. The open PR pipeline remains heavy at 12 in-flight items, signaling a focus on hardening first-run and channel-adapter flows rather than feature expansion. Community engagement is shallow but signal-dense: only a handful of comments across all items, with most traffic driven by core-team contributors (glifocat, gavrielc, ljluestc).

## 2. Releases

No new releases in the last 24 hours. The most recent version-relevant activity is concentrated on landed fixes awaiting tagging — most notably the closed PR #3790, which restored the agent provider picker that had silently been bypassed since PR #3729.

## 3. Project Progress

**Merged / Closed Today:**
- **[PR #3790](https://github.com/nanocoai/nanoclaw/pull/3790)** — `fix(setup): restore the agent provider picker for fresh installs`. Traced the regression to PR #3729's community-portal change in `setup/auto.ts`, where `askAgentProviderChoice` short-circuited on `DEFAULT_AGENT_PROVIDER === "claude"` and skipped rendering the prompt entirely. Closed same day it was opened.
- **[Issue #3787](https://github.com/nanocoai/nanoclaw/issues/3787)** — Closed after #3790 landed; the bug report that surfaced the silent default.

**Materially advanced (still open but updated):**
- **[PR #3788](https://github.com/nanocoai/nanoclaw/pull/3788)** — Alternative fix for the same regression, narrowed to apply only on explicit defaults (more conservative than #3790). Likely to be superseded or rebased.
- **[PR #3781](https://github.com/nanocoai/nanoclaw/pull/3781)** — `feat(agent-runner): enforce tools-only delivery`, advancing the broader delivery-mode program.
- **[PR #3713](https://github.com/nanocoai/nanoclaw/pull/3713)** — Backbone of the delivery-mode work (migration 26, `container_configs.delivery_mode`).
- **[PR #3463](https://github.com/nanocoai/nanoclaw/pull/3463)** — OpenCode provider now falls back to `message.part.delta` text when final snapshots lose the race (~78ms margin in the reporter's measurement).

## 4. Community Hot Topics

Comment/reaction volume is low overall — most issues and PRs have 0–2 interactions — so "hot" is best read as **convergent focus** rather than debate.

| Topic | Item | Why it drew attention |
|---|---|---|
| Provider picker regression | [#3787](https://github.com/nanocoai/nanoclaw/issues/3787), [#3790](https://github.com/nanocoai/nanoclaw/pull/3790), [#3788](https://github.com/nanocoai/nanoclaw/pull/3788) | Both the bug and two competing fixes surfaced in one day; revealed a behavioral expectation that first-run users must always see and answer the provider choice |
| Codex-first setup | [#3791](https://github.com/nanocoai/nanoclaw/issues/3791), [#3792](https://github.com/nanocoai/nanoclaw/pull/3792), [#3489](https://github.com/nanocoai/nanoclaw/pull/3489) | Coordinated cluster on getting Codex authenticating through the driver without a globally installed CLI |
| Mattermost channel hardening | [#3777](https://github.com/nanocoai/nanoclaw/pull/3777), [#3778](https://github.com/nanocoai/nanoclaw/pull/3778), [#3780](https://github.com/nanocoai/nanoclaw/pull/3780) | Three coordinated PRs closing the same `/add-mattermost` reliability gap from different angles |

**Underlying need:** Both clusters point to one demand — **fresh-install UX has to be predictable, and adapter / provider setup has to "just work" without host-machine preparation.** Users expect NanoClaw to bundle whatever binaries it needs.

## 5. Bugs & Stability

Ranked roughly by user-impact severity:

| Severity | Item | Status | Fix Available? |
|---|---|---|---|
| **High** — broken first-run UX for any non-Claude user | [Issue #3787](https://github.com/nanocoai/nanoclaw/issues/3787) — picker skipped on fresh setup | **Closed** | Yes (#3790 merged) |
| **High** — Codex setup blocked on missing host binary | [Issue #3791](https://github.com/nanocoai/nanoclaw/issues/3791) — `codex_cli_missing` on unprivileged hosts | Open | Yes ([#3792](https://github.com/nanocoai/nanoclaw/pull/3792)) |
| **Medium** — Mattermost local stack on non-amd64 | [PR #3777](https://github.com/nanocoai/nanoclaw/pull/3777) — directories/containers created before architecture check | Open | In same PR |
| **Medium** — Mattermost stale config persists | [PR #3778](https://github.com/nanocoai/nanoclaw/pull/3778) — `nc:env-set` set-if-absent kept stale tokens | Open | In same PR |
| **Medium** — Mattermost adapter verification gap | [PR #3780](https://github.com/nanocoai/nanoclaw/pull/3780) — service restart didn't actually prove connectivity | Open | In same PR |
| **Medium** — restart handshake accepts stale socket | [PR #3779](https://github.com/nanocoai/nanoclaw/pull/3779) — `data/ncl.sock` presence wasn't proof of identity | Open | In same PR |
| **Medium** — `/update-nanoclaw` controller load failure | [PR #3750](https://github.com/nanocoai/nanoclaw/pull/3750) — `git archive` list omits `scripts/provider-contract-verifier.ts` | Open | In same PR |
| **Low** — OpenCode snapshot race | [PR #3463](https://github.com/nanocoai/nanoclaw/pull/3463) — final text dropped on ~78ms timing window | Open | In same PR |
| **Low** — watch-feed takedown | [PR #3789](https://github.com/nanocoai/nanoclaw/pull/3789) — optional feed failure broke arming | Open | In same PR |

## 6. Feature Requests & Roadmap Signals

No explicit `kind/feature` user requests appeared in the last 24 hours. The signal-rich items are **core-team-driven features in flight**:

- **[PR #3781](https://github.com/nanocoai/nanoclaw/pull/3781)** — `feat(agent-runner): enforce tools-only delivery`. Tied to [#3713](https://github.com/nanocoai/nanoclaw/pull/3713)'s `delivery_mode` setting. Predicted to land in the next release as a behind-config opt-in that defaults providers like Codex to tool-only outbound delivery.
- **[PR #3489](https://github.com/nanocoai/nanoclaw/pull/3489)** — `feat(codex): structured setup-driver authentication`. Long-lived (open since 2026-08-23), still active. Expected to merge alongside #3792 to deliver a fully self-contained Codex bootstrap path.
- **[PR #3463](https://github.com/nanocoai/nanoclaw/pull/3463)** — OpenCode snapshot-race fallback; likely small, likely merges quickly.

## 7. User Feedback Summary

The user-visible reports (issues authored by `glifocat`, cross-posting maintainer concerns) distill to three pain points:

1. **"Out-of-the-box must work without `npm install -g`."** Both #3787 and #3791 frame user-host assumptions as defects. Operators on locked-down hosts cannot globally install CLIs and expect NanoClaw to either pin or vendor its dependencies.
2. **"Silent defaults are a bug."** The picker-skipping regression is described as "silently selects Claude" — the dissatisfaction is less about Claude itself than about losing the choice step invisibly.
3. **"Restart must mean verified, not present."** Across #3779 and #3780, the consistent feedback is that a service restart succeeding is not sufficient evidence the adapter/channel is actually healthy.

Satisfaction signal: zero 👍 reactions across all 15 items in the 24h window — engagement is read-only rather than endorsement.

## 8. Backlog Watch

Items that have been open long enough to merit maintainer review:

- **[PR #3489](https://github.com/nanocoai/nanoclaw/pull/3489)** — 21 days open. Structured Codex auth is foundational to the Codex-first setup work now in flight (#3791, #3792); merging it would unblock coordinated follow-ups.
- **[PR #3463](https://github.com/nanocoai/nanoclaw/pull/3463)** — 21 days open. Fixes #2985 (referenced). Small, well-scoped; likely a quick review.
- **[PR #3713](https://github.com/nanocoai/nanoclaw/pull/3713)** — 11 days open. Backbone for the `delivery_mode` enum used by #3781; release-blocking if #3781 is to ship together.
- **[PR #3750](https://github.com/nanocoai/nanoclaw/pull/3750)** — 6 days open. `/update-nanoclaw` is currently broken; this is a user-facing regression that affects any operator trying to upgrade.

None of these have maintainer comments indicating blockers, suggesting they are queue-position rather than design-debate issues.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest
**Date:** 2026-09-14 | **Project:** nearai/ironclaw | **Analyst Perspective:** Maintenance‑focused, dependency‑driven steady state

---

### 1. Today's Overview
IronClaw is currently in a maintenance‑only cycle with **zero new issues, zero releases, and no user‑generated activity** in the last 24 hours. Five Dependabot‑driven PRs were updated (all on 2026-09-13), spanning dependency groups: `everything-else` (25 bumps), `actions` (6 bumps), `tokio-ecosystem` (2 bumps), and `wasm` (4 bumps). The project exhibits strong CI/CD hygiene and automated dependency hygiene, but shows limited feature development or cross‑project collaboration activity. Overall health is stable and consistent with an infrastructure library in steady‑state maintenance.

**Links:** [GitHub Repository](https://github.com/nearai/ironclaw) | [Project Dashboard](https://github.com/nearai/ironclaw/projects)

---

### 2. Releases
No new releases have been tagged since the previous digest cycle. The project version string remains unchanged, and there are no breaking‑change notes or migration guidance to report. Users should continue on the currently deployed version; no upgrade path or deprecation warnings are signaled at this time.

---

### 3. Project Progress
In the last 24h, **1 PR was merged/closed** (`#8097`), a Dependabot bump of the `everything-else` group with 24 updates. Four other PRs remain open, all are automated dependency updates with no merged code, feature flags, or bug‑fix contributions. Progress this period is exclusively dependency‑focused; no new APIs, runtime changes, or architectural improvements were merged.

**Merged/Closed:** `#8097` – `everything-else` group bump (24 updates)  
**Open:** `#8099`, `#8079`, `#8078`, `#7834` – all dependency bumps awaiting maintainer review/merge  
**Progress Link:** [PR #8097](https://github.com/nearai/ironclaw/pull/8097)

---

### 4. Community Hot Topics
The most active threads in the last 24h are the five Dependabot PRs, all generated automatically and carrying zero user comments or reactions. No issues have been opened or commented on, indicating either high project stability, a gated contributor pipeline, or low external engagement. The underlying need driving activity is **keepsake dependency currency** across Rust crates, GitHub Actions, and WebAssembly runtimes—ensuring the build graph remains current without manual intervention.

**Hot Threads (last 24h):**
- `#8099` – `everything-else` group: 25 updates including `uuid`, `base64`, `rust_decimal` (↗ Sep 13)
- `#8097` – `everything-else` group: 24 updates (merged/closed ✅ Sep 13)
- `#8079` – `actions` group: 6 updates including `actions/setup-node` v7.0.0 (↗ Sep 13)
- `#8078` – `tokio-ecosystem`: 2 updates (`tower-http`, `tokio-tungstenite`) (↗ Sep 13)
- `#7834` – `wasm` group: 4 updates (`wasmtime`, `wit-component`, `wit-parser`) (↗ Sep 13, opened Aug 23)

---

### 5. Bugs & Stability
**Zero bugs, crashes, or regressions** were reported in the last 24h. The issue queue is empty, and no stability‑related PRs were merged. Stability is being maintained through the volume of dependency updates; however, the absence of reported failures suggests either a small active user base, effective triage, or that the project’s primary consumers have not encountered breakage from the updated crates. No fix PRs are pending for stability incidents.

---

### 6. Feature Requests & Roadmap Signals
No feature requests, RFCs, or roadmap discussions appear in the data. The lack of issue‑type PRs or user‑facing feature proposals indicates the project is not currently shaping a next‑version feature set. Any forthcoming roadmap signals are likely to emerge as new issue types or feature‑scoped PRs, which are absent today. The next release will probably continue the dependency‑update trajectory unless maintainers explicitly flag a milestone.

---

### 7. User Feedback Summary
The data reflects **maintainer/automation activity**, not direct user feedback. The silence on the issue tracker may indicate:
- A mature, stable codebase where users have few friction points
- A contributor‑first model where external users do not file issues
- A gatekept contribution flow that funnels changes through Dependabot bumps only

Indirectly, the heavy dependency update cadence signals that downstream consumers (likely other `nearai` projects or Rust AI tooling) must regularly rebuild/test against new crate versions, which can be a pain point for version‑pinning workflows.

---

### 8. Backlog Watch
| PR/Issue | Age (as of Sep 14) | Status | Maintainer Need |
|----------|-------------------|--------|-----------------|
| `#7834` | ~21 days (opened Aug 23) | Open | Review/merge wasm-group bump (4 updates) |
| `#8099` | ~1 day (created Sep 13) | Open | Apply `everything-else` group bump (25 updates) |
| `#8079` | ~8 days (created Sep 6) | Open | Apply `actions` group bump (6 updates) |
| `#8078` | ~8 days (created Sep 6) | Open | Apply `tokio-ecosystem` bump (2 updates) |
| `#8097` | ~1 day (created/updated Sep 13) | Closed/Merged | – |

The oldest pending item is `#7834`, a wasm‑runtime dependency group bump opened nearly three weeks ago. Despite being updated on Sep 13, it has not been merged, suggesting a backlog in review/approval workflow. All other open PRs are recent Dependabot updates and should be low‑effort to resolve if maintainers have capacity.

**Backlog Link:** [#7834](https://github.com/nearai/ironclaw/pull/7834) | [All Open PRs](https://github.com/nearai/ironclaw/pulls?q=is%3Aopen)

---

*Data source snapshot: GitHub activity as of 2026-09-14. Analysis objective and data‑driven; sections omit content where zero items exist (releases, issues, bugs).*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI Project Digest – 2026‑09‑14**  
*Generated from GitHub activity (issues/PRs updated in the last 24 h, no new releases)*  

---

### 1. Today's Overview  
The repository showed modest but focused activity: **4 issues** and **6 pull‑requests** were updated in the past 24 h, with **2 PRs merged/closed** and **no new releases**. All updates were made on 2026‑09‑13, indicating a steady maintenance rhythm rather than a burst of new feature work. The project remains active, with ongoing security hardening, usability polish, and infrastructure fixes.

### 2. Releases  
*No new versions were published today.*

### 3. Project Progress (Merged/Closed PRs)  
| PR | Title / Area | Summary | Link |
|----|--------------|---------|------|
| #2659 | **feat: support markdown editing** (renderer / docs / main / artifacts) | Adds markdown editing capabilities to the UI, letting users author and modify notes directly within LobsterAI. | https://github.com/netease-youdao/LobsterAI/pull/2659 |
| #2658 | **fix: openclaw subagent yield empty response** (docs / main / openclaw) | Resolves a case where the OpenClaw sub‑agent returned an empty payload, improving reliability of agent‑to‑agent handoffs. | https://github.com/netease-youdao/LobsterAI/pull/2658 |

These two merges deliver a **new authoring feature** (markdown editing) and a **stability fix** for sub‑agent communication.

### 4. Community Hot Topics (Most Active Items)  
All updated issues/PRs have **1 comment** and **0 reactions**, so activity is evenly spread. The items that likely attract the most maintainer attention are:

- **#2660 – Proposal: durable user and workspace memory** (new feature request)  
  *Why it’s hot:* Introduces a long‑term memory layer for preferences, workspaces, sources, and unfinished decisions across sessions – a core usability need for a research‑oriented assistant.  
  https://github.com/netease-youdao/LobsterAI/issues/2660  

- **#1041 – [stale] security: api:fetch/stream IPC 可被用于 SSRF 攻击** (security bug)  
  *Why it’s hot:* A P0‑level SSRF vulnerability that could let malicious web‑content reach internal services or cloud metadata endpoints.  
  https://github.com/netease-youdao/LobsterAI/issues/1041  

- **#1042 – fix(security): api:fetch/stream IPC 可被用于 SSRF 攻击** (linked PR)  
  *Why it’s hot:* The direct fix for #1041, currently stale but ready for review.  
  https://github.com/netease-youdao/LobsterAI/pull/1042  

- **#1046 – [stale] 模型配置上下文窗口限制问题** (feature request / documentation)  
  *Why it’s hot:* Users want clarity and configurability around the 200 K context window (vs. the model‑claimed 1 M).  
  https://github.com/netease-youdao/LobsterAI/issues/1046  

Underlying needs: **security assurance**, **persistent personalization**, and **transparent model limits** are the recurring themes.

### 5. Bugs & Stability (Severity‑Ranked)  
| Severity | Item | Description | Fix PR (if any) | Link |
|----------|------|-------------|----------------|------|
| **P0 (Critical)** | SSRF via `api:fetch` / `api:stream` (Issue #1041) | No URL validation lets the main process fetch arbitrary internal addresses. | #1042 (open, stale) | https://github.com/netease-youdao/LobsterAI/issues/1041 |
| **P0 (Critical)** | Arbitrary file read via `dialog:readFileAsDataUrl` (Issue #1041) | Path traversal enables reading `/etc/passwd`, SSH keys, etc. | #1042 (covers both) | https://github.com/netease-youdao/LobsterAI/issues/1041 |
| **P1 (High)** | Skill persistence bug (Issue #1047) | Cleared skills reappear after switching agents. | No dedicated PR yet (related UI state work may be in #1045) | https://github.com/netease-youdao/LobsterAI/issues/1047 |
| **P2 (Medium)** | Installer path normalization on Windows (Issue #1044 – addressed by PR) | NSIS installer mis‑handles drive‑root selections. | #1044 (open, stale) | https://github.com/netease-youdao/LobsterAI/pull/1044 |
| **P2 (Medium)** | Unsaved changes loss when switching agents (Issue #1045 – addressed by PR) | Users lose edits when changing agents without warning. | #1045 (open, stale) | https://github.com/netease-youdao/LobsterAI/pull/1045 |
| **P3 (Low)** | Context window documentation / configurability (Issue #1046) | Lack of info on why 200 K limit exists and whether it can be raised. | No PR yet | https://github.com/netease-youdao/LobsterAI/issues/1046 |

*Note:* The two critical security bugs have a **ready‑to‑merge fix PR (#1042)** that has been stale since March 2026; merging it would immediately raise the project’s security posture.

### 6. Feature Requests & Roadmap Signals  
| Requested Feature | Source | Implication for Near‑Term Roadmap |
|-------------------|--------|-----------------------------------|
| Durable user & workspace memory (cross‑session preferences, histories, unfinished decisions) | Issue #2660 (proposal) | High‑impact usability upgrade; likely to be targeted for the next minor release if maintainers prioritize personalization. |
| Adjustable model context window (up to 1M tokens) & clear documentation | Issue #1046 | Aligns with model capabilities; could be shipped as a config flag in the upcoming release. |
| Agent‑settings unsaved‑changes prompt | PR #1045 (feature) | Already implemented; awaiting merge – will improve UX imminently. |
| Installer path normalization (Windows) | PR #1044 | Minor polish; low risk, good candidate for next patch. |
| Markdown editing support | PR #2659 (merged) | Already delivered; enables richer note‑taking. |

**Prediction:** The next version will likely bundle the **security fix (#1042)**, the **agent‑settings unsaved‑changes prompt (#1045)**, and possibly the **durable memory prototype** if the maintainers accept the proposal.

### 7. User Feedback Summary  
- **Security anxiety:** Users are wary of unfettered network/file access (SSRF, arbitrary read) – reflected in the high‑visibility stale security issue.  
- **Desire for continuity:** Frequent mention of wanting preferences, workspace layouts, and source lists to persist between sessions (proposal #2660).  
- **Fragmented agent experience:** Skills reappearing after clearing (#1047) and losing edits when switching agents (#1045) point to state‑management gaps.  
- **Installation quirks:** Windows users report odd install paths when selecting a drive root (#1044).  
- **Feature richness:** Demand for markdown editing (now merged) and deeper model configuration (context window) shows a power‑user base that wants LobsterAI to feel like a full‑featured research notebook.  

Overall sentiment: **cautiously optimistic** – users appreciate the expanding capability set but expect the core platform to be rock‑solid and privacy‑safe before adopting advanced features.

### 8. Backlog Watch (Long‑Unanswered / Stale Items Needing Attention)  
| Item | Age (as of 2026‑09‑14) | Why It Matters | Suggested Action |
|------|------------------------|----------------|------------------|
| #1041 (SSRF & file‑read security) | **≈ 174 days** (opened 2026‑03‑30) | P0 vulnerabilities expose users to data leakage and server‑side attacks. | Merge PR #1042 after a quick review; consider adding automated security scans. |
| #1046 (Context window configurability) | **≈ 174 days** | Limits advanced users; lack of docs leads to confusion. | Add documentation or expose a config flag; close if deemed unnecessary. |
| #1047 (Skill persistence bug) | **≈ 174 days** | Breaks agent workflow ergonomics. | Investigate state‑reset logic; possibly tie into #1045 work. |
| #1038 (Stream response reader leak) | **≈ 174 days** | Resource leak can degrade performance over long runs. | Review and merge; add unit test for error paths. |
| #1044 (Installer path normalization) | **≈ 174 days** | Minor UX polish for Windows users. | Merge; test with NSIS build pipeline. |
| #1045 (Unsaved‑changes prompt) | **≈ 174 days** | Prevents accidental data loss. | Merge; verify UI test coverage. |
| #2660 (Durable memory proposal) | **1 day** (new) | Strategic feature; early discussion needed. | Schedule a design meeting; gather community feedback. |

*All of the above items have had **only a single comment** since opening, indicating limited maintainer engagement. Prioritizing the security fixes (#1041/#1042) and the stream‑reader leak (#1038) would immediately improve stability and safety, while addressing the UX‑focused PRs (#1044, #1045) would polish the release candidate.*

---  

**Conclusion:** LobsterAI is maintaining a steady stream of incremental improvements and bug fixes, with two meaningful features merged today (markdown editing, sub‑agent fix). The most pressing items are the long‑standing security vulnerabilities that have a ready fix pending review. Addressing those, along with the stale UX polish PRs, will set a solid foundation for upcoming user‑requested enhancements like durable memory and configurable context windows. Continued triage of the backlog will help shift the project from “maintenance mode” to a more proactive feature‑delivery cadence.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest: 2026-09-14

## 1. Today's Overview
Moltis is showing high development velocity, with 5 pull requests processed and 3 issues updated in the last 24 hours. The project is currently focused on refining the agent's reasoning capabilities and improving multi-channel consistency, specifically for Telegram. The activity level is healthy, characterized by a rapid turnaround of bug fixes and the implementation of user-requested features like configurable reasoning effort levels.

## 2. Releases
*No new releases were recorded in the last 24 hours.*

## 3. Project Progress
The team has been highly productive today, closing 4 out of 5 active pull requests:
*   **Reasoning Enhancements:** Added a `max` reasoning effort level to the schema ([PR #1253](https://github.com/moltis-org/moltis/pr/1253)) and implemented persistence for configurable default reasoning levels across sessions ([PR #1266](https://github.com/moltis-org/moltis/pr/1266)).
*   **Telegram Integration:** Resolved a bug where tools stopped working in shared channels by exposing shared-chat tool policy controls ([PR #1265](https://github.com/moltis-org/moltis/pr/1265)).
*   **Maintenance:** Dependabot updated core dependencies including `@babel/core`, `astro`, and `js-yaml` ([PR #1263](https://github.com/moltis-org/moltis/pr/1263)).

## 4. Community Hot Topics
*   **Advanced Memory Providers:** A new significant proposal from MemCode asks for Moltis to expose an optional advanced memory provider ([Issue #1268](https://github.com/moltis-org/moltis/issues/1268)). This indicates a growing interest in moving beyond the built-in memory system toward third-party integrations for enterprise-grade persistence.

## 5. Bugs & Stability
*   **Telegram Tool Failure:** A bug was reported where tools were non-functional in shared Telegram channels ([Issue #1264](https://github.com/moltis-org/moltis/issues/1264)). 
    *   *Status:* **Fixed** [PR #1265](https://github.com/moltis-org/moltis/pr/1265).
*   **Lifecycle Events:** There is an open PR to fix how agent and outbound message lifecycle events are dispatched, ensuring `AgentEnd` and `MessageSending` are handled correctly ([PR #1267](https://github.com/moltis-org/moltis/pr/1267)).

## 6. Feature Requests & Roadmap Signals
*   **Configurable Reasoning:** The successful merge of `reasoning_default` (ranging from minimal to max) suggests that Moltis is moving toward giving users more granular control over the balance between cost/speed and intelligence depth.
*   **Extensible Memory:** The request for an advanced memory provider suggests the roadmap may soon include a pluggable architecture for long-term memory or complex vector database integrations.

## 7. User Feedback Summary
*   **Positive:** Users are actively seeking ways to fine-tune the "thinking effort" of the agent, as evidenced by the request to persist these settings across sessions.
*   **Pain Point:** Multi-Channel Parity. The bug in Telegram shared channels highlights that users expect feature parity across different platforms (Slack vs. Telegram).

## 8. Backlog Watch
*   **PR #1267 (OPEN):** `fix(hooks): dispatch agent and outbound message lifecycle events`. This is critical for developers building custom integrations that hook into agent behavior.
*   **Issue #1268 (OPEN):** `Could Moltis expose an optional advanced memory provider?`. Needs architectural discussion to determine how this would interface with the existing Rust-based memory system.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw Project Digest – 2026‑09‑14**  
*Repository: agentscope-ai/QwenPaw*  

---

### 1. Today's Overview  
The project shows steady maintenance activity: **5 issues** were touched in the last 24 h (4 remain open/active, 1 closed) and **6 pull‑requests** were updated (5 still open, 1 merged/closed). No new releases were published today. The bulk of recent work consists of small‑scale fixes, i18n improvements, and first‑time‑contributor contributions, indicating a healthy influx of community participation while core stability work continues.

### 2. Releases  
*No new releases* were recorded in the past 24 h. The latest available version remains **v2.2.1** (Windows) as referenced in the open issues.

### 3. Project Progress (Merged/Closed PRs today)  
- **PR #4009** (first‑time‑contributor, Under Review) – *Add Brazilian Portuguese (pt‑BR) locale support* – moved to **Closed** today after being merged, completing the i18n effort for pt‑BR.  
- One additional PR was merged/closed (not detailed in the feed), representing routine cleanup or dependency updates.

These closures advance the project’s internationalisation coverage and reduce technical debt.

### 4. Community Hot Topics  
| Item | Type | Comments | Link | Core Need / Discussion |
|------|------|----------|------|------------------------|
| **Issue #7571** | Question | 4 | <https://github.com/agentscope-ai/QwenPaw/issues/7571> | User struggles with agent‑generated TODO files scattering across multiple paths and accidental overwrites during auto‑deployment; seeks a deterministic way to confine runtime artifacts to a designated sub‑folder. |
| **Issue #7724** | Bug | 3 | <https://github.com/agentscope-ai/QwenPaw/issues/7724> | Session history disappears after a shutdown/restart cycle; the model configuration also resets, forcing users to reconfigure LLMs and lose conversation continuity. |
| **PR #7737** | First‑time contributor | 0 (no comment count) | <https://github.com/agentscope-ai/QwenPaw/pull/7737> | Expands multi‑agent collaboration trigger keywords to improve intent detection on first turn. |
| **PR #7736** | First‑time contributor | 0 | <https://github.com/agentscope-ai/QwenPaw/pull/7736> | Adds DeepSeek V4 Flash capabilities (image input, 1M‑token window) to the provider catalog. |

The two most‑commented items highlight **usability pain points** (file‑management and session persistence) that directly affect day‑to‑day developer experience.

### 5. Bugs & Stability  
| Bug ID | Severity (inferred) | Description | Fix PR? |
|--------|--------------------|-------------|---------|
| **#7724 – Session loss** | High | Conversation history and model config vanish after a shutdown/restart; users must reconfigure LLMs. | None linked yet. |
| **#7709 – Timed task output missing / folded** | Medium | Scheduled tasks often produce no visible output; results are hidden in `thinking` steps or omitted entirely. | None linked yet. |
| **#7571 – TODO file scattering** (question, but reveals a reproducibility issue) | Medium | Agent creates TODO files in multiple directories; overwrites occur during automated deployment. | None linked yet. |

No PRs explicitly reference these bugs in the last 24 h, indicating they are currently in triage or awaiting a fix.

### 6. Feature Requests & Roadmap Signals  
- **Issue #7733** – *Agent‑autonomous context management* (enhancement) – Proposes giving the agent a say in context eviction/compaction to avoid abrupt loss of live work. This aligns with a growing demand for more predictable long‑running agent behavior.  
- **PR #7737** – Expansion of multi‑agent collaboration keywords – Signals continued investment in richer team‑agent interaction patterns.  
- **PR #7736** – DeepSeek V4 Flash support – Shows the project is tracking cutting‑edge model releases to keep the provider catalog up‑to‑date.  

These suggest the next minor release may focus on **context‑management robustness**, **multi‑agent usability**, and **model‑provider extensibility**.

### 7. User Feedback Summary  
- **Pain points**:  
  - Uncontrolled file generation (TODO files) leads to clutter and accidental overwrites during automated pipelines.  
  - Fragile session persistence forces users to rebuild context and reconfigure LLMs after restarts.  
  - Inconsistent visibility of task outputs (hidden in thinking steps) reduces trust in automated workflows.  
- **Positive signals**:  
  - Active community contributions (first‑time PRs for i18n, keyword expansion, provider updates).  
  - Clear interest in deeper agent autonomy (context management) and cutting‑edge model support.  

Overall, users appreciate the extensibility of QwenPaw but request stronger guarantees around **state persistence** and **deterministic file handling**.

### 8. Backlog Watch  
- **Issue #7571** (created 2026‑09‑05, still open) – Long‑standing question about file‑path management; needs a design decision or documentation update to prevent recurrent user errors.  
- **Issue #7724** (created 2026‑09‑12) – High‑impact bug with no linked fix; should be prioritized for the next sprint.  
- **Issue #7709** (created 2026‑09‑11) – Medium‑impact bug affecting reliability of scheduled tasks; merits investigation.  
- **PR #4009** (closed) – While merged, verify that the pt‑BR translation quality meets the project’s localization standards and that no regressions were introduced in related UI components.  

Addressing these items will improve stability, reduce user frustration, and maintain momentum in community‑driven enhancements.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-09-14

Data window: Issues and PRs updated 2026-09-13. All links point to `zeroclaw-labs/zeroclaw`.

## 1. Today's Overview

ZeroClaw is showing high surface activity but no merge throughput: 36 issues were updated in the last 24h (31 open/active, 5 closed), 50 PRs were updated, and all 50 remain open with 0 merged/closed and 0 new releases. This points to an active but review-constrained project, where discussion and PR updates are strong while integration/release cadence is stalled. The most active discussions are governance and RFC-process related ([#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692), [#10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549), [#10366](https://github.com/zeroclaw-labs/zeroclaw/issues/10366)), alongside active P0/P1 runtime, provider, and security bugs. Five issues closed today, which shows some forward movement, but the 50-open-PR queue with zero merges is the clearest project-health risk. Overall assessment: technically ambitious, community-engaged, but throughput- and maintainer-attention-bound.

## 2. Releases

No new releases in this window. No release notes, breaking changes, or migration guidance to report.

## 3. Project Progress

**Merged/closed PRs today:** None. All 50 updated PRs remain open; 0 merged/closed.

**Closed issues today (5):**
- [#10721](https://github.com/zeroclaw-labs/zeroclaw/issues/10721) — `knowledge.db_path` tilde expansion was a global replace, silently dropping the knowledge tool. Closed.
- [#10324](https://github.com/zeroclaw-labs/zeroclaw/issues/10324) — cron manual trigger and run-history reads remained check-then-act across an agent rename. Closed.
- [#10580](https://github.com/zeroclaw-labs/zeroclaw/issues/10580) — docs links gate should catch dangling internal links repo-wide. Closed.
- [#10533](https://github.com/zeroclaw-labs/zeroclaw/issues/10533) — `model_routing_config` rejected `custom.*` and other valid provider slots. Closed.
- [#10837](https://github.com/zeroclaw-labs/zeroclaw/issues/10837) — RPC `config/set` persisted values that `Config::validate()` rejects. Closed.

**PRs advancing in review/update (not merged):**
- [#10610](https://github.com/zeroclaw-labs/zeroclaw/pull/10610) — shell V1 permission policy (RFC #7155 Phase 0+1).
- [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) — multiple models per provider profile.
- [#10750](https://github.com/zeroclaw-labs/zeroclaw/pull/10750) — govern channel plugin egress.
- [#10596](https://github.com/zeroclaw-labs/zeroclaw/pull/10596) — paginate persisted ACP transcripts.
- [#10621](https://github.com/zeroclaw-labs/zeroclaw/pull/10621) — coordinate agent lifecycle mutations.
- [#10407](https://github.com/zeroclaw-labs/zeroclaw/pull/10407) — persistent session prompt attachments.
- [#10255](https://github.com/zeroclaw-labs/zeroclaw/pull/10255) — OIDC token-verification provider.
- [#10525](https://github.com/zeroclaw-labs/zeroclaw/pull/10525) — relay-terminated browser enrollment frontdoor.
- [#10337](https://github.com/zeroclaw-labs/zeroclaw/pull/10337) — honor allowed roots for git operations.

## 4. Community Hot Topics

**Most active issues by comments:**
- [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) — Maintainer decision queue for RFCs and design issues. 15 comments. Underlying need: a durable, visible decision pipeline so accepted/rejected/deferred RFCs do not stall silently.
- [#10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549) — RFC: simplify RFC voting by removing mandatory discussion windows and making REVISE stop the current snapshot. 10 comments. Underlying need: reduce process friction and time-to-decision.
- [#10366](https://github.com/zeroclaw-labs/zeroclaw/issues/10366) — RFC: clarify PR review evidence, freshness warnings, and author-action boundaries. 7 comments. Underlying need: clearer review contracts and fewer ambiguous stalls.
- [#10734](https://github.com/zeroclaw-labs/zeroclaw/issues/10734) — RPC dispatcher runs within 2% of its 2 MB stack guard on Windows. 7 comments. Underlying need: Windows CI reliability and stack-safety.
- [#9381](https://github.com/zeroclaw-labs/zeroclaw/issues/9381) — crates.io publishing, packaging, and cargo-install follow-ups. 5 comments. Underlying need: packaging/distribution polish, especially Windows checkouts.
- [#10360](https://github.com/zeroclaw-labs/zeroclaw/issues/10360) — opt-in household edge mesh with pull workers and signed receipts. 4 comments. Underlying need: local-first distributed compute across owned devices.
- [#10066](https://github.com/zeroclaw-labs/zeroclaw/issues/10066) — SOP engine promotes/runs later steps before recording a step’s output-schema rejection. 4 comments. Underlying need: workflow correctness and fail-fast semantics.

**Reactions:** [#10603](https://github.com/zeroclaw-labs/zeroclaw/issues/10603) has 3 👍, indicating real user impact around OpenCode provider behavior and account-flag risk.

**Notable updated PRs:** PR comment counts were not provided. The most prominent updated PRs include [#10610](https://github.com/zeroclaw-labs/zeroclaw/pull/10610), [#10337](https://github.com/zeroclaw-labs/zeroclaw/pull/10337), [#9584](https://github.com/zeroclaw-labs/zeroclaw/pull/9584), [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109), [#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535), [#8965](https://github.com/zeroclaw-labs/zeroclaw/pull/8965), [#10596](https://github.com/zeroclaw-labs/zeroclaw/pull/10596), [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809), [#9819](https://github.com/zeroclaw-labs/zeroclaw/pull/9819), [#10831](https://github.com/zeroclaw-labs/zeroclaw/pull/10831), [#10750](https://github.com/zeroclaw-labs/zeroclaw/pull/10750), [#10255](https://github.com/zeroclaw-labs/zeroclaw/pull/10255), [#10525](https://github.com/zeroclaw-labs/zeroclaw/pull/10525), [#10621](https://github.com/zeroclaw-labs/zeroclaw/pull/10621), [#9134](https://github.com/zeroclaw-labs/zeroclaw/pull/9134), [#10407](https://github.com/zeroclaw-labs/zeroclaw/pull/10407), [#8863](https://github.com/zeroclaw-labs/zeroclaw/pull/8863), [#9142](https://github.com/zeroclaw-labs/zeroclaw/pull/9142), and [#10752](https://github.com/zeroclaw-labs/zeroclaw/pull/10752).

## 5. Bugs & Stability

**P0 / highest severity:**
- [#10066](https://github.com/zeroclaw-labs/zeroclaw/issues/10066) — SOP engine promotes and runs later steps before recording an output-schema rejection. Severity S1, workflow blocked, high risk. No direct fix PR identified in the provided data.

**P1 / high severity:**
- [#10734](https://github.com/zeroclaw-labs/zeroclaw/issues/10734) — `RpcDispatcher::process_line` runs within 2% of its 2 MB stack guard; Windows stack overflow surfaced by advisory CI. High risk.
- [#10603](https://github.com/zeroclaw-labs/zeroclaw/issues/10603) — OpenCode providers never send `x-opencode-session`, breaking Go models and risking account flags. 3 👍, high risk.
- [#10788](https://github.com/zeroclaw-labs/zeroclaw/issues/10788) — failed Code/ACP turn discards accepted prompt and completed tool exchanges from durable history. High risk.
- [#10635](https://github.com/zeroclaw-labs/zeroclaw/issues/10635) — runtime profile cost limit does not reflect effective global daily budget. High risk.
- [#10645](https://github.com/zeroclaw-labs/zeroclaw/issues/10645) — delegated sub-loops do not consistently run under scoped cost-tracking context. High risk.
- [#10785](https://github.com/zeroclaw-labs/zeroclaw/issues/10785) — notification lag cancels every running turn via `begin_notification_resync` → `session/cancel`. High risk.
- [#10828](https://github.com/zeroclaw-labs/zeroclaw/issues/10828) — `openai-codex --device-code` uses obsolete/incorrect device auth endpoint and returns 404. High risk.
- [#10324](https://github.com/zeroclaw-labs/zeroclaw/issues/10324) — cron check-then-act across agent rename. Closed today.
- [#10533](https://github.com/zeroclaw-labs/zeroclaw/issues/10533) — `model_routing_config` validation diverges from config schema. Closed today.

**P2 / moderate severity:**
- [#10320](https://github.com/zeroclaw-labs/zeroclaw/issues/10320) — `config set` and RPC `config/set` persist values without running validation.
- [#10736](https://github.com/zeroclaw-labs/zeroclaw/issues/10736) — pre-output stream failure skips advertised non-streaming fallback.
- [#10787](https://github.com/zeroclaw-labs/zeroclaw/issues/10787) — single-candidate stream recovery ignores `provider_retries`; 529 gets one immediate retry with no backoff.
- [#10779](https://github.com/zeroclaw-labs/zeroclaw/issues/10779) — OpenCode `FreeUsageLimitError` 429 is retried with sub-second backoff instead of failing fast.
- [#10793](https://github.com/zeroclaw-labs/zeroclaw/issues/10793) — three Windows-only test failures on advisory job with no change to code under test.
- [#10821](https://github.com/zeroclaw-labs/zeroclaw/issues/10821) — `zeroclaw service logs` shows stale stderr as current; service-installed daemon emits no tracing without `--verbose`.
- [#10802](https://github.com/zeroclaw-labs/zeroclaw/issues/10802) — `session/list-acp` reports a different `message_count` than `turn_end` for the same session.
- [#10721](https://github.com/zeroclaw-labs/zeroclaw/issues/10721) — `knowledge.db_path` tilde expansion bug. Closed today.
- [#10837](https://github.com/zeroclaw-labs/zeroclaw/issues/10837) — RPC `config/set` validation bypass. Closed today.

**Fix PRs:** The dataset does not show direct fix PRs for most P0/P1 bugs. Related PRs that may reduce stability/security risk include [#10337](https://github.com/zeroclaw-labs/zeroclaw/pull/10337) (allowed roots for git operations), [#9819](https://github.com/zeroclaw-labs/zeroclaw/pull/9819) (pixel-level image validation), [#10838](https://github.com/zeroclaw-labs/zeroclaw/pull/10838) (media marker degradation), and [#10610](https://github.com/zeroclaw-labs/zeroclaw/pull/10610) (shell permission policy).

## 6. Feature Requests & Roadmap Signals

**Active feature/RFC requests:**
- [#10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549) — simplify RFC voting and REVISE semantics.
- [#10366](https://github.com/zeroclaw-labs/zeroclaw/issues/10366) — clarify PR review evidence, freshness warnings, author-action boundaries.
- [#10360](https://github.com/zeroclaw-labs/zeroclaw/issues/10360) — opt-in household edge mesh with pull workers and signed receipts.
- [#10822](https://github.com/zeroclaw-labs/zeroclaw/issues/10822) — `config/set-many` atomic batch config mutation over RPC.
- [#10826](https://github.com/zeroclaw-labs/zeroclaw/issues/10826) — explicit ZeroCode session root selection and preserve resumed roots.
- [#10812](https://github.com/zeroclaw-labs/zeroclaw/issues/10812) — populate `DocumentMessage.jpegThumbnail` so WhatsApp PDFs preview on phones.
- [#9381](https://github.com/zeroclaw-labs/zeroclaw/issues/9381) — crates.io publishing, packaging, cargo-install follow-ups.
- [#9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459) — v0.8.5 finite weekly stabilization line.
- [#8691](https://github.com/zeroclaw-labs/zeroclaw/issues/8691) — ADR inventory and accepted RFC decision records.
- [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) — maintainer decision queue for RFCs/design issues.
- [#10580](https://github.com/zeroclaw-labs/zeroclaw/issues/10580) — docs links gate repo-wide. Closed today.

**Prediction for next version:** Given current open PRs and issue pressure, likely next-version candidates include shell V1 permission policy ([#10610](https://github.com/zeroclaw-labs/zeroclaw/pull/10610)), multiple models per provider ([#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809)), plugin egress governance ([#10750](https://github.com/zeroclaw-labs/zeroclaw/pull/10750)), ACP transcript pagination ([#10596](https://github.com/zeroclaw-labs/zeroclaw/pull/10596)), config validation/batch mutation ([#10822](https://github.com/zeroclaw-labs/zeroclaw/issues/10822)), ZeroCode session root selection ([#10826](https://github.com/zeroclaw-labs/zeroclaw/issues/10826)), and provider reliability fixes ([#10736](https://github.com/zeroclaw-labs/zeroclaw/issues/10736), [#10787](https://github.com/zeroclaw-labs/zeroclaw/issues/10787)). Since #10828 references v0.8.5 as current, the next likely line is a v0.8.6 or v0.8.5 follow-up rather than a major release.

## 7. User Feedback Summary

**Real pain points reported:**
- Windows reliability remains a recurring theme: stack overflow in RPC dispatch ([#10734](https://github.com/zeroclaw-labs/zeroclaw/issues/10734)), advisory Windows test failures ([#10793](https://github.com/zeroclaw-labs/zeroclaw/issues/10793)), and Windows checkout issues from crates.io packaging ([#9381](https://github.com/zeroclaw-labs/zeroclaw/issues/9381)).
- Provider behavior is causing user-visible breakage: OpenCode missing session header ([#10603](https://github.com/zeroclaw-labs/zeroclaw/issues/10603)), OpenCode 429 retry behavior ([#10779](https://github.com/zeroclaw-labs/zeroclaw/issues/10779)), stream fallback gaps ([#10736](https://github.com/zeroclaw-labs/zeroclaw/issues/10736)), and OpenAI Codex device auth 404 ([#10828](https://github.com/zeroclaw-labs/zeroclaw/issues/10828)).
- Configuration trust is a concern: `config set` and RPC `config/set` bypass validation ([#10320](https://github.com/zeroclaw-labs/zeroclaw/issues/10320), [#10837](https://github.com/zeroclaw-labs/zeroclaw/issues/10837)).
- Cost-control confusion: runtime profile limits do not match the effective global daily budget ([#10635](https://github.com/zeroclaw-labs/zeroclaw/issues/10635), [#10645](https://github.com/zeroclaw-labs/zeroclaw/issues/10645)).
- Observability and session correctness: stale service logs ([#10821](https://github.com/zeroclaw-labs/zeroclaw/issues/10821)), lost ACP/Code history on failed turns ([#10788](https://github.com/zeroclaw-labs/zeroclaw/issues/10788)), and inconsistent `message_count` ([#10802](https://github.com/zeroclaw-labs/zeroclaw/issues/10802)).
- Feature gaps from real usage: WhatsApp PDF previews ([#10812](https://github.com/zeroclaw-labs/zeroclaw/issues/10812)) and ZeroCode session root persistence ([#10826](https://github.com/zeroclaw-labs/zeroclaw/issues/10826)).

**Satisfaction/dissatisfaction signal:** The community is highly engaged—15 comments on the maintainer decision queue and 10 on RFC voting reform—which suggests contributors want ZeroClaw to succeed and are willing to invest in process. Dissatisfaction is concentrated around review latency and unclear decision boundaries: 50 open PRs, 0 merges today, and many PRs tagged `needs-author-action`, `needs-maintainer-review`, `status:blocked`, or `do-not-merge`.

## 8. Backlog Watch

Long-lived or high-importance items needing maintainer attention:

- [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) — Maintainer decision queue. Created 2026-07-04, 15 comments, still open. This is the central governance bottleneck.
- [#8691](https://github.com/zeroclaw-labs/zeroclaw/issues/8691) — ADR inventory and accepted RFC decision records. Created 2026-07-04, still open.
- [#9381](https://github.com/zeroclaw-labs/zeroclaw/issues/9381) — crates.io publishing/packaging follow-ups. Created 2026-07-26, 5 comments.
- [#9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459) — v0.8.5 stabilization tracker. Created 2026-07-27, still open.
- [#9584](https://github.com/zeroclaw-labs/zeroclaw/pull/9584) — egress grant ceremony for plugin install/list. Created 2026-07-31, `needs-author-action`.
- [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) — native Hailo-Ollama support. Created 2026-07-17, `status:blocked`, `do-not-merge`.
- [#9134](https://github.com/zeroclaw-labs/zeroclaw/pull/9134) — admit exact component payload bytes. Created 2026-07-18, `status:blocked`, `needs-author-action`, `do-not-merge`.
- [#8863](https://github.com/zeroclaw-labs/zeroclaw/pull/8863) — host-mediated outbound WebSocket for channel plugins. Created 2026-07-08, `needs-author-action`.
- [#9142](https://github.com/zeroclaw-labs/zeroclaw/pull/9142) — materialize named TLS profiles. Created 2026-07-18, `needs-author-action`.
- [#8965](https://github.com/zeroclaw-labs/zeroclaw/pull/8965) — declarative skills auto-activation. Created 2026-07-11, `needs-author-action`.
- [#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535) — anchor context compaction to model window ratio. Created 2026-07-29.
- [#10337](https://github.com/zeroclaw-labs/zeroclaw/pull/10337) — honor allowed roots for git operations. Created 2026-08-25, `needs-author-action`, security-sensitive.
- [#10360](https://github.com/zeroclaw-labs/zeroclaw/issues/10360) — household edge mesh RFC. Created 2026-08-25, `needs-author-action`.

**Health note:** The project’s main constraint is not lack of activity or ideas, but review/decision throughput. Clearing the maintainer decision queue and reducing the `needs-author-action`/`blocked` PR backlog would likely have the highest impact on ZeroClaw’s next release.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*