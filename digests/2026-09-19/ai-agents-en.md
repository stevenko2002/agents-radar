# OpenClaw Ecosystem Digest 2026-09-19

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-09-18 22:15 UTC

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



# OpenClaw Project Digest — 2026-09-19

---

## 1. Today's Overview

OpenClaw remains a high-velocity project with **500 issues and 500 PRs updated in the last 24 hours** — 363 issues and 282 PRs still open, signaling sustained community engagement and a substantial active backlog. No new releases shipped today, but the PR queue is dense with maintainer-reviewed fixes and feature work across WebUI, Gateway, Windows, macOS, subagent coordination, and storage split refactors. The dominant themes are **stability hardening** (memory leaks, event-loop starvation, zombie processes) and **multi-host architecture prep** (remote workspace, paired-node document access, file transfer).

---

## 2. Releases

**None today.** No new versions were cut in the last 24h. The extended-stable `2026.7.34` candidate is being prepared (PR #151560) from `v2026.7.33`.

---

## 3. Project Progress

218 PRs were merged or closed today. Notable landed/in-flight work:

| Area | PR | Summary |
|------|-----|---------|
| **Subagents** | [#126924](https://github.com/openclaw/openclaw/pull/126924) | Distinguishes a subagent wait-expiring from the child dying — fixes false "timed out" announcements for still-running 90-min tasks |
| **WebUI** | [#152194](https://github.com/openclaw/openclaw/pull/152194) | Preserves person picker selection and profile photos |
| **WebUI** | [#152179](https://github.com/openclaw/openclaw/pull/152179) | Opens workspace links with spaces, emoji, and percent-sign filenames correctly |
| **WebUI** | [#152198](https://github.com/openclaw/openclaw/pull/152198) | Waits for widget readiness in board layout tests (fixes CI race) |
| **Gateway/Update** | [#151691](https://github.com/openclaw/openclaw/pull/151691) | Reconciles stale managed Gateway service definitions (umbrella PR being split) |
| **Gateway/Update** | [#150153](https://github.com/openclaw/openclaw/pull/150153) | Keeps task recovery working across shared Gateway updates (being split) |
| **Windows** | [#151157](https://github.com/openclaw/openclaw/pull/151157) | Preserves scheduled task owner through stop |
| **Windows** | [#151245](https://github.com/openclaw/openclaw/pull/151245) | Reconciles aliased plugin roots at safe open |
| **macOS** | [#152195](https://github.com/openclaw/openclaw/pull/152195) | Preserves LaunchAgent bytes and permissions on rollback |
| **Auth** | [#152140](https://github.com/openclaw/openclaw/pull/152140) | Reduces pauses during concurrent credential reads |
| **A2A** | [#152168](https://github.com/openclaw/openclaw/pull/152168) | Does not settle A2A tasks on fallback/status delivery notices |
| **Bonjour** | [#145639](https://github.com/openclaw/openclaw/pull/145639) | Stops ENODEV log bursts when transient interfaces disappear |
| **Telegram** | [#146361](https://github.com/openclaw/openclaw/pull/146361) | Preserves code and attachments in streamed replies |
| **Active Memory** | [#151218](https://github.com/openclaw/openclaw/pull/151218) | Lets plugins customize deep-recall escalation |
| **Storage Split** | [#150946](https://github.com/openclaw/openclaw/pull/150946), [#150584](https://github.com/openclaw/openclaw/pull/150584), [#150857](https://github.com/openclaw/openclaw/pull/150857), [#150734](https://github.com/openclaw/openclaw/pull/150734) | Series of draft PRs enabling Gateway to read/write Memory, Skills, agent documents, and attachments from a remote Harness host or paired node |
| **Agents refactor** | [#152181](https://github.com/openclaw/openclaw/pull/152181) | Shares external harness session and attempt machinery across agent backends |
| **SQLite** | [#152190](https://github.com/openclaw/openclaw/pull/152190) | Prevents worker timeouts through state path aliases |
| **CLI** | [#136158](https://github.com/openclaw/openclaw/pull/136158) | Rejects unknown proxy query presets |
| **i18n** | [#152196](https://github.com/openclaw/openclaw/pull/152196) | Refreshes Control UI locales |
| **Stable branch** | [#151560](https://github.com/openclaw/openclaw/pull/151560) | Prepares extended-stable `2026.7.34` |

---

## 4. Community Hot Topics

### Most Commented Issues

| Rank | Issue | Comments | Reactions | Core Need |
|------|-------|----------|-----------|-----------|
| 1 | [#97616](https://github.com/openclaw/openclaw/issues/97616) — Zombie process leak from hook/tool child processes | 31 | 👍 1 | Runtime degradation over time; unreaped `openclaw-hooks`, `bash`, `codex` children accumulate |
| 2 | [#91588](https://github.com/openclaw/openclaw/issues/91588) — Gateway memory leak: RSS 350MB → 15.5GB, OOM crashes | 26 | 👍 1 | Repeated `launchd-handoff` restart cycles; production-blocking |
| 3 | [#149361](https://github.com/openclaw/openclaw/issues/149361) — WebUI performance & stability umbrella | 22 | 👍 0 | Consolidated tracking for desktop/mobile WebUI fixes |
| 4 | [#48003](https://github.com/openclaw/openclaw/issues/48003) — Steer mode doesn't inject messages mid-turn | 20 | 👍 4 | `messages.queue.mode: "steer"` queues until turn completes instead of injecting at tool boundaries |
| 5 | [#149538](https://github.com/openclaw/openclaw/issues/149538) — Gateway ready but never serves; `/health` times out (632-agent fleet) | 18 | 👍 0 | Event loop starved after `ready`; separate from boot-duration issue #148529 |
| 6 | [#112423](https://github.com/openclaw/openclaw/issues/112423) — Large SQLite transcript cleanup blocks event loop | 17 | 👍 0 | Full materialization + compression + I/O on gateway thread during archiving |
| 7 | [#150201](https://github.com/openclaw/openclaw/issues/150201) — Windows update snapshot fails on 2026.9.3 | 16 | 👍 0 | SQLite check times out during update candidate snapshot |
| 8 | [#137332](https://github.com/openclaw/openclaw/issues/137332) — Requester-settle batches retry forever | 15 | 👍 0 | Orphaned subagent runs remain pending after undelivered wake |
| 9 | [#139710](https://github.com/openclaw/openclaw/issues/139710) — Plugin-generation supersede kills system-agent turn | 15 | 👍 1 | Mid-turn MCP hot reload kills turn + planner fallback; reports unreachable inference |
| 10 | [#148963](https://github.com/openclaw/openclaw/issues/148963) — Session listings retain archived metadata outside requested page | 12 | 👍 0 | Bounded metadata-listing entry point within broader persistence/starvation concern |

### Analysis of Underlying Needs

The comment-density around **memory management** (#91588, #97616, #149538) signals that production operators on large fleets (hundreds of agents) are hitting hard operational limits. The "steer mode" issue (#48003) with 4 👍 reactions is a feature-gap request from users expecting real-time message injection. WebUI performance (#149361) is attracting maintainer attention as an umbrella tracking issue — users want a cohesive desktop/mobile experience rather than piecemeal fixes.

---

## 5. Bugs & Stability

### Critical (P0) — Active/Open

| Issue | Title | Fix PR? |
|-------|-------|---------|
| [#149538](https://github.com/openclaw/openclaw/issues/149538) | Gateway ready but never serves; event loop starved (632-agent fleet) | ❌ None |
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | Agent SQLite WAL grows to 1.4–2.8 GB, blocks gateway startup (Windows) | ❌ None |
| [#143334](https://github.com/openclaw/openclaw/issues/143334) | Lost subagent completion delivery parks requester in settle-yield | ❌ None |
| [#151467](https://github.com/openclaw/openclaw/issues/151467) | Self-Upgrade Deadlock & Rollback Cron Failure (v6.33 → v9.4) | ❌ None |
| [#142586](https://github.com/openclaw/openclaw/issues/142586) (CLOSED) | Doctor detects orphan task_delivery_state foreign keys, no recovery path | — |

### High (P1) — Active/Open

| Issue | Title | Fix PR? |
|-------|-------|---------|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | Zombie process leak from hook/tool child processes | ❌ None |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway memory leak: RSS 350MB → 15.5GB | ❌ None |
| [#48003](https://github.com/openclaw/openclaw/issues/48003) | Steer mode doesn't inject messages mid-turn | ❌ None |
| [#112423](https://github.com/openclaw/openclaw/issues/112423) | Large SQLite transcript cleanup blocks event loop | ❌ None |
| [#137332

---

## Cross-Ecosystem Comparison



Here is the structured cross-project comparison report for the open-source AI agent and personal assistant ecosystem as of **September 19, 2026**.

---

# Ecosystem Comparison Report: Open-Source AI Agents & Assistants
**Date:** September 19, 2026  
**Scope:** Core reference projects (OpenClaw, Hermes Agent, NanoBot, NanoClaw, ZeptoClaw, ZeroClaw, IronClaw, LobsterAI, CoPaw, PicoClaw, Moltis, TinyClaw, NullClaw)

---

## 1. Ecosystem Overview

The open-source personal AI assistant and agent landscape is currently transitioning from rapid, feature-driven expansion to a **production-hardening and architectural refactoring phase**. Today's activity highlights a strong, shared focus on **resource governance** (preventing memory leaks, unbounded database growth, and Out-Of-Memory/OOM crash loops) and **execution isolation** (multi-profile security, session leakage prevention, and cross-tenant boundaries). 

While several projects (such as OpenClaw, CoPaw, and ZeroClaw) maintain high-velocity merge cycles, the community is actively addressing the operational friction of running large fleets (hundreds of agents) on long-running sessions. There is a distinct technical shift towards stateless task execution, profile-agnostic storage schemas, and transport-agnostic provider compatibility.

---

## 2. Activity Comparison

The table below summarizes the GitHub activity and project health metrics for the tracked projects over the last 24 hours. 

*Health Score* is a qualitative assessment based on maintainer responsiveness, backlog hygiene, and development throughput.

| Project | Issues Updated (Last 24h) | PRs Updated (Last 24h) | PRs Merged/Closed (Last 24h) | Release Status | Health Score |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **OpenClaw** | 500 | 500 | 218 | None (stable candidate preparing) | **High** (Very high throughput, large active backlog) |
| **CoPaw (QwenPaw)** | 24 | 50 | N/A (Active release cut) | Yes (`v...` release today) | **Very High** (Extremely high velocity) |
| **ZeroClaw** | 16 | 50 | 4 | None | **High** (Strong security & release-gate focus) |
| **Hermes Agent** | 50 | 50 | 27 | None | **Medium-High** (Active hardening, but integration blockages) |
| **LobsterAI** | 6 | 23 | 9 | Yes (`release/2026.9.18` closed) | **High** (Fast dev cycle, slow community issue resolution) |
| **NanoBot** | 5 | 14 | 4 | None | **High** (Rapid bug fixes, strong channel parity push) |
| **NanoClaw** | 4 | 4 | 0 | None | **Medium** (Active community patches, critical resource bugs open) |
| **ZeptoClaw** | 0 | 3 | 2 | None | **Medium-High** (Focused, high-quality security & provider hardening) |
| **IronClaw** | 1 | 2 | 0 | None | **Medium** (Steady, low-volume architectural refactoring) |
| **PicoClaw** | 1 | 3 | 0 | None | **Low** (Stale issues, slow maintainer review cycle) |
| **Moltis** | 0 | 1 | 0 | None | **Low/Stable** (Dormant, automated dependency hygiene only) |
| **TinyClaw / NullClaw** | 0 | 0 | 0 | None | **Low** (No activity) |

---

## 3. OpenClaw's Position

### Advantages vs. Peers
* **Scale and Throughput:** OpenClaw's raw GitHub activity (500 issues, 500 PRs updated today, 218 merged/closed) dwarfs all other projects. This indicates a massive, highly active contributor base and a highly institutionalized code review pipeline.
* **Enterprise-Grade Infrastructure:** OpenClaw is the only project actively preparing a multi-host architecture where the Gateway reads/writes Memory, Skills, agent documents, and attachments from a remote Harness host or paired nodes. This positions it strongly for enterprise fleet deployments.
* **Subagent Coordination:** The explicit distinction between subagent wait-expiring and child dying (PR #126924) shows a sophisticated understanding of long-running async agent workflows.

### Technical Approach Differences
* Unlike ZeptoClaw or NanoClaw, which focus on lightweight, single-node provider compatibility, OpenClaw is building heavy distributed gateway orchestration.
* It maintains a highly comprehensive WebUI and desktop integration layer (macOS LaunchAgent, Windows scheduled tasks, Bonjour), whereas peers like Hermes or Zepto

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



Based on the GitHub activity for the **NanoBot** project up to September 19, 2026, here is the structured project digest.

---

### 1. Today's Overview
NanoBot is experiencing high development activity, with 14 pull requests and 5 issues updated in the last 24 hours. The project health remains robust, characterized by active maintenance, significant architectural refactors, and prompt response to critical user-reported bugs. The focus today is heavily on platform parity (Discord/Telegram replies, WebUI responsiveness), core agent loop stability (cross-session isolation), and safe tool execution frameworks.

### 2. Releases
*   **New Releases Today:** None. No new versions have been cut recently.

### 3. Project Progress
Several key features and fixes were merged/closed today, advancing the project's roadmap:
*   **Native Linear Agent Channel Integration:** PR #5495 was closed, bringing native Linear agent channels with OAuth authorization code + PKCE, per-workspace rotating tokens, and a dedicated WebUI panel.
*   **Discord Reply Parity:** PR #5800 was closed, implementing the highly requested `channels.discord.replyToMessage` setting to align Discord’s messaging capabilities with Telegram's existing config-driven native replies.
*   **Core Agent Loop Stability:** PR #5794 was closed, resolving a critical cross-session response delivery bug in the agent loop's dispatch mechanism.
*   **WebUI & Channel Polish:** Multiple fixes were finalized, including showing all channels when WebUI is the only enabled channel (#5810) and executing explicit recovery continuations (#5812).

### 4. Community Hot Topics
The community is focusing heavily on session isolation, mobile UX, and safe command execution:
*   **Cross-Session Response Leakage (Issue #5798):** Users report critical frustration when responses intended for one active session leak into another. This is a high-priority bug affecting Windows users on version 0.3.5.
*   **Mobile WebUI Usability (Issue #5771):** Mobile users (specifically on iOS) report that the session list requires a double-tap to open, hurting the perceived responsiveness of the WebUI.
*   **Subagent Architecture Refactor (PR #5811):** A major architectural shift is proposed to execute subagents through private, in-memory child sessions, removing the separate subagent runner.
*   **Jev Shell Safeguard (PR #5815):** Introduction of an opt-in `tools.exec.jevGuard` preflight utilizing OpenRouter's Decisions API to batch and validate tool executions.

### 5. Bugs & Stability
Bugs reported or addressed today, ranked by severity and status:

| Severity | Bug Report / PR | Status / Fix Progress |
| :--- | :--- | :--- |
| **Critical** | **Issue #5798** - Cross-session response leakage on Windows (v0.3.5). | **Fix Merged:** PR #5794 addresses the agent loop dispatch logic causing this. |
| **High** | **Issue #5806** - Discord leaves reaction tasks alive after stop, causing state leaks. | **Fix Open:** PR #5807 is open to clean up working-emoji tasks and pending reactions on runtime reset. |
| **High** | **Issue #5808** - WebUI follow-ups replay after gateway restart following `/stop`. | **Fix Open:** PR #5809 is open to discard stopped follow-up recovery journals. |
| **Medium** | **Issue #5771** - Mobile session list requires two taps to open. | **Fix Open:** PR #5805 targets mobile chat row hit-testing to make taps responsive. |
| **Low** | **Issue #5780 / PR #5780** - Unwanted background context compaction notifications sent to users. | **Fix Open:** PR #5780 is open to make autocompaction notices invisible while retaining them for `/compact`. |

### 6. Feature Requests & Roadmap Signals
*   **Discord/Telegram Parity:** The closure of Issue #1663 and PR #5800 signals a strong push towards channel feature parity. Users can expect config-driven native replies across major chat platforms as a standard feature.
*   **External Tool Integrations:** The merge of the native Linear channel (#5495) signals a roadmap expanding into project management and issue-tracking webhooks.
*   **Safe Execution Guards:** The introduction of the Jev shell safeguard (#5815) indicates a growing focus on agent safety, allowing users to opt into LLM-based preflight checks for terminal commands.

### 7. User Feedback Summary
*   **Pain Points:** Users are highly sensitive to context bleeding (cross-session leaks) and state corruption after gateway restarts. Mobile users demand a polished, single-tap UI experience.
*   **Use Cases:** Power users are utilizing WebUI follow-ups and subagent delegation, highlighting the need for robust lifecycle management and private session isolation.
*   **Sentiment:** Overall satisfaction is positive due to rapid maintainer turnaround, but critical bugs like #5798 cause significant workflow disruption for active Windows users.

### 8. Backlog Watch
*   **Issue #1663 (Discord ReplyToMessage Parity):** Opened in March 2026, this long-standing feature request has been successfully resolved via PR #5800. 
*   **PR #5495 (Native Linear Channel):** Though closed today due to merge conflicts, this PR represents a significant feature addition that maintainers will need to integrate into the main branch carefully. Keep an eye on future Linear webhook handling.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Thinking Process:

1.  **Understand the Goal**: The user wants a structured project digest for the Hermes Agent repository (`github.com/nousresearch/hermes-agent`) based on the provided data for the period ending 2026-09-19 (data updated in last 24h).

2.  **Analyze the Input Data**:
    *   **Date**: 2026-09-19.
    *   **Activity Metrics**:
        *   Issues updated: 50 (open/active: 31, closed: 19).
        *   PRs updated: 50 (open: 23, merged/closed: 27).
        *   New releases: 0.
    *   **Latest Releases**: None.
    *   **Top Issues (by comment count, showing top 30)**:
        *   #88584 [OPEN, invalid, comp/cron, P3] Automated Nous integration is blocked (116 comments, high activity). Summary: scheduled Nous-to-Enterkey merge has conflicts in `cron/jobs.py`.
        *   #109417 [OPEN, type/feature, comp/gateway, P2] Tracking: profile multiplexing as the only gateway mode (11 comments). Summary: profile-multiplexing campaign tracker.
        *   #20548 [CLOSED, type/bug, comp/gateway, platform/feishu, P1] Feishu root_id fallback for thread_id causes threading issues (10 comments).
        *   #80125 [CLOSED, type/bug, comp/gateway, platform/wecom, P1] weixin adapter ret=-2 misreported as rate limited (10 comments).
        *   #30220 [OPEN, type/bug, comp/agent, tool/memory, P1] Background Self-Improvement Review misclassifies content (9 comments).
        *   #60789 [CLOSED, type/bug, comp/agent, P2] session_search(profile=...) searches current profile DB instead of named one (8 comments).
        *   #98588 [OPEN, type/bug, comp/cli, comp/gateway, P3] False positive 'gateways may still be serving pre-update modules' after launchd respawn (8 comments).
        *   #72529 [CLOSED, type/bug, comp/gateway, platform/whatsapp, P1] WhatsApp group messages never reach gateway while DMs work (7 comments).
        *   #63386 [CLOSED, type/bug, comp/agent, comp/cli, comp/gateway, P1] state.db FTS index corruption on macOS (6 comments).
        *   #91547 [CLOSED, type/bug, comp/cli, comp/gateway, P1] `hermes gateway restart` races its own port (6 comments).
        *   #76836 [CLOSED, type/bug, comp/agent, provider/minimax, P1] minimax provider ignores base_url override (5 comments).
        *   #69451 [CLOSED, type/bug, area/config, P2] Desktop custom endpoints ignore active profile (5 comments).
        *   #103363 [CLOSED, type/bug, comp/gateway, platform/telegram, P1] Telegram auto topic-rename silently broken on existing installs after 0.21.0 upgrade (5 comments).
        *   #78307 [OPEN, type/feature, comp/agent, tool/memory, P2] feat(memory): lifecycle management for built-in memory (5 comments).
        *   #68055 [OPEN, type/bug, comp/cli, tool/skills, P2] config: _secure_dir() chmods through symlinked $HERMES_HOME subdir (5 comments).
        *   #84997 [OPEN, type/bug, P2] Desktop switching into streaming session transcript scroll jitter (5 comments).
        *   #113270 [CLOSED, type/security, comp/cli, comp/gateway, comp/cron, P1] Profile-scoped authorization gates leak across profiles (4 comments).
        *   #63415 [CLOSED, type/bug, comp/gateway, platform/whatsapp, P1] WhatsApp authorize first-contact LID senders via senderPn (4 comments).
        *   #78497 [CLOSED, type/bug, comp/tui, tool/delegate, P2] TUI notification poller acknowledges async completions in launch profile DB (4 comments).
        *   #50745 [OPEN, duplicate, type/feature, P3] Mobile App for Hermes Agent (4 comments).
        *   #73085 [CLOSED, type/bug, comp/cli, tool/mcp, P2] Dashboard embedded chat runs in default scope, ignoring profile (3 comments).
        *   #80660 [CLOSED, type/bug, comp/plugins, platform/whatsapp, P3] WhatsApp group_allow_from ignores env var (3 comments).
        *   #106870 [CLOSED, type/bug, comp/agent, comp/plugins, P3] compression.checkpoint_required=true permanently blocks /compress (3 comments).
        *   #105574 [OPEN, type/bug, comp/agent, tool/delegate, P1] fix(context-compressor): Pass 4 clips pending tool-call args pre-send (2 comments).
        *   #115363 [OPEN, type/bug, comp/cli, P2] non-interactive hermes update parks local modifications in autostash (2 comments).
        *   #114209 [CLOSED, type/bug, comp/cron, P2] no_agent cron script jobs no longer inherit needed env (2 comments).
        *   #114476 [CLOSED, type/bug, comp/agent, provider/bedrock, P2] Bedrock application inference profile ARNs fall back to 128k default context window (1 comment).
        *   #85669 [CLOSED, type/bug, comp/tui, P3] Desktop multi-profile config.set writes focused-profile settings into launch profile (1 comment).
        *   #105275 [OPEN, type/bug, P2, comp/desktop] Disbanded bot group chat resurrects when gateway's mirror misses deletion tombstone (1 comment).
        *   #115402 [OPEN, type/feature, P3, comp/desktop] Desktop: new sessions are assigned to the active project by default (1 comment).
    *   **Top PRs (by comment count, showing top 20)**:
        *   #115454 [CLOSED] fmt(js): npm run fix auto-fix (auto-merge bot).
        *   #113545 [OPEN, type/security, comp/tui, P3] fix(gateway): redact cli.exec output before RPC boundary.
        *   #114841 [CLOSED, type/bug, comp/agent, provider/bedrock, P2] fix(bedrock): application inference profile ARNs size context window correctly (fixes #114476).
        *   #115453 [OPEN] fix(cron): attribute a job source's own failure to that source, not to a provider.
        *   #115452 [OPEN] fix(kanban): add create --body-file for multi-line bodies.
        *   #115448 [CLOSED] hermes backup exits 1 for incomplete archive and stops pruning complete ones.
        *   #115401 [CLOSED, type/bug, comp/agent, provider/minimax, P1] minimax behind OpenAI-compatible base_url override no longer 401s (fixes #76836).
        *   #113308 [CLOSED, type/security, comp/cli, P2] fix(security): strip platform authorization gates from child envs.
        *   #115425 [CLOSED, type/bug, comp/cli, comp/tui, P2] fix(desktop, dashboard): session-bound settings, chat deep links, and Custom Endpoints stay in focused profile (fixes #85669, #73085, #69451).
        *   #107385 [CLOSED, type/bug, comp/gateway, platform/feishu, P2] fix(feishu): drop root_id fallback and skip thread_id for regular replies (fixes #20548).
        *   #36233 [CLOSED, type/bug, comp/gateway, platform/feishu, P2] fix(feishu): distinguish quote replies from topic sessions.
        *   #115446 [CLOSED, type/security, comp/cli, comp/gateway, comp/cron, P1] fix(profiles): child spawned for another profile no longer inherits spawner's auth gates (fixes #113270).
        *   #42259 [CLOSED, type/bug, comp/gateway, platform/feishu, P2] fix(feishu): remove root_id from reply_to_message_id and thread_id fallback.
        *   #23758 [CLOSED, type/bug, comp/gateway, platform/feishu, P2] fix(feishu): avoid creating incorrect thread to msg referenced by user.
        *   #20562 [CLOSED, type/bug, comp/gateway, platform/feishu, P2] fix(feishu): avoid threading regular replies.
        *   #115438 [OPEN, type/feature, comp/agent, comp/cli, tool/browser, P3] fix(browser): make credential vault explicitly opt-in.
        *   #68844 [OPEN, type/feature, comp/gateway, platform/whatsapp, P3] fix(whatsapp): end-to-end allowlisted group intake for multi-member chats.
        *   #115443 [OPEN, type/test, comp/gateway, P3] test(gateway): shard module-level helper/store tests out of test_api_server.py.
        *   #115445 [OPEN, type/bug, comp/tools, tool/mcp, P2] fix(mcp): keep structuredContent unless content is its verbatim JSON dual-emit.
        *   #115444 [OPEN, type/bug, comp/cli, comp/gateway, P2] fix(gateway): loopback binds survive restart port handoff (fixes port race issue).

3.  **Synthesize Sections**:

    *   **Today's Overview**:
        *   Summarize the high activity (50 issues updated, 50 PRs updated).
        *   Highlight the major themes: profile multiplexing, Feishu platform bug fixes, security hardening (profile-scoped authorization isolation), and desktop/dashboard profile scoping improvements.
        *   Note that there are no new releases today, but substantial technical debt and bugs are being actively closed/fixed.

    *   **Releases**:
        *   None (as specified in "New releases: 0" and "Latest Releases: None"). Omit or state clearly that no new releases were made today.

    *   **Project Progress**:
        *   Focus on merged/closed PRs today (27 closed/merged).
        *   Key areas of progress:
            *   **Profile isolation & Security hardening**: PR #115446 and #113308 strip platform authorization gates from child envs to prevent cross-profile leakage (fixes #113270). PR #115425 fixes desktop/dashboard profile-scoped settings (fixes #85669, #73085, #69451).
            *   **Feishu Platform stabilization**: Multiple PRs merged to fix thread/reply routing issues (PR #107385, #36233, #42259, #23758, #20562) addressing root_id fallback bugs.
            *   **Provider fixes**: Bedrock application inference profile ARN context window sizing fixed in PR #114841 (fixes #114476). Minimax OpenAI-compatible base_url override fixed in PR #115401 (fixes #76836).
            *   **Gateway & Cron fixes**: Loopback bind port race condition fixed in PR #115444. Cron job source failure attribution fixed in PR #115453. Backup incomplete archive handling fixed in PR #115448.

    *   **Community Hot Topics**:
        *   Identify the most active issues.
        *   **Issue #88584** (116 comments): Automated Nous integration is blocked due to merge conflicts in `cron/jobs.py`. This is highly active and indicates integration pipeline blockages.
        *   **Issue #109417** (11 comments): Profile multiplexing campaign tracking. Users are looking for a seamless multi-profile gateway experience.
        *   **Issue #30220** (9 comments, 1 👍): Background Self-Improvement Review misclassifying memory/skill/user stores. Highlights community interest in the agent's self-improvement loop and data integrity.
        *   **Issue #20548** (10 comments) and **#80125** (10 comments): Platform-specific bugs (Feishu and WeChat/Wecom) that have recently been resolved but generated significant discussion.

    *   **Bugs & Stability**:
        *   Rank by severity (P1, P2, P3) and check if fix PRs exist.
        *   *Critical/P1 bugs active or reported today*:
            *   **Context compressor clipping tool-call args**: Issue #105574 (P1, OPEN). No fix PR listed yet, but active bug causing corrupted delegate instructions.
            *   **Profile-scoped authorization gates leak**: Issue #113270 (P1, CLOSED). Fixed by PR #115446 and #113308.
            *   **WhatsApp bot group messages not reaching gateway**: Issue #72529 (P1, CLOSED).
            *   **state.db FTS index corruption on macOS**: Issue #63386 (P1, CLOSED).
            *   **Gateway restart port race**: Issue #91547 (P1, CLOSED) / PR #115444 (P2, OPEN) addresses loopback bind survival.
            *   **Minimax base_url override 401**: Issue #76836 (P1, CLOSED). Fixed by PR #115401.
            *   **Telegram auto topic-rename broken after v0.21.0**: Issue #103363 (P1, CLOSED).
        *   *P2/P3 active bugs*:
            *   **Desktop session scroll jitter** (#84997, OPEN).
            *   **Non-interactive hermes update autostash issue** (#115363, OPEN).
            *   **Symlinked $HERMES_HOME subdir chmod clamping** (#68055, OPEN).
            *   **Disbanded bot group chat resurrection** (#105275, OPEN).

    *   **Feature Requests & Roadmap Signals**:
        *   **Profile Multiplexing**: Issue #109417 is a key tracking issue for making profile multiplexing the default gateway mode.
        *   **Memory Lifecycle Management**: Issue #78307 (P2, OPEN) requests first-class lifecycle management for built-in memory (inspection, deduplication, consolidation).
        *   **Mobile App**: Issue #50745 (P3, OPEN, duplicate) requests a mobile app to connect to sessions.
        *   **Desktop Project Assignment**: Issue #115402 (P3, OPEN) notes that desktop assigns new sessions to active projects invisibly.
        *   **Browser Credential Vault**: PR #115438 (OPEN) proposes making browser credential vault integration explicitly opt-in, showing a feature shift in security UX.

    *   **User Feedback Summary**:
        *   Highlight real-world pain points:
            *   Profile configuration leakage (users struggling with multi-profile setups where settings bleed across profiles).
            *   Platform integration issues (specifically Feishu/Wecom threading and WhatsApp group delivery).
            *   Desktop UI/UX issues (scroll jitter, invisible project assignment, custom endpoints ignoring profile).
            *   Update friction (autostash issues, false positive warnings about pre-update modules after launchd respawn).
            *   Self-improvement classification errors (misclassifying core memory files).

    *   **Backlog Watch**:
        *   Look for long-standing or highly commented issues needing attention.
        *   **Issue #88584** (116 comments, OPEN): Blockage in automated Nous integration. Needs maintainer attention to resolve merge conflicts.
        *   **Issue #30220** (9 comments, OPEN): Background review classification bug. Core to the agent's self-improving capabilities.
        *   **Issue #109417** (11 comments, OPEN): Profile multiplexing roadmap tracker. Needs clear roadmap definition and community path forward.
        *   **Issue #78307** (5 comments, OPEN): Memory lifecycle management. Important feature gap for users wanting to manage bounded memory stores.

4.  **Refine Formatting and Language**:
    *   Maintain an objective, data-driven, professional tone.
    *   Ensure all links are correctly formatted using the provided URLs (e.g., `NousResearch/hermes-agent Issue #88584` -> link to URL).
    *   Check for clarity and logical flow. Ensure the date is clearly marked as 2026-09-19.

5.  **Drafting the Content (Iterative refinement)**:
    *   *Overview*: High activity day with 50 issues and 50 PRs updated. The focus is heavily on profile isolation security, Feishu platform fixes, and desktop/dashboard profile scoping. No new releases.
    *   *Project Progress*: Focus on the major merged PRs. The profile-scoped security fixes (PR #115446, #113308) are huge wins. Feishu thread routing fixes (PR #107385

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



Based on the GitHub data for the PicoClaw project as of 2026-09-19, here is the structured project digest.

### 1. Today's Overview
PicoClaw shows low but steady activity, with no new releases or merged pull requests in the last 24 hours. The project is currently maintaining one open bug report and three open pull requests, indicating ongoing community contributions that are awaiting maintainer review. Overall, the project health appears stable, with active community members submitting fixes and feature additions, though the pace of official integration is currently slow.

### 2. Releases
*None.* No new releases have been published.

### 3. Project Progress
No pull requests were merged or closed today. The following PRs remain open and pending review:
*   **#3347 - fix laggy interface:** A community-submitted fix by iMilnb to address UI lag in the web interface and launcher, built and tested by the author on both desktop and mobile browsers. ([Link](https://github.com/sipeed/picoclaw/pull/3347))
*   **#3371 - feat(providers): add opencode-go provider:** A feature addition by EMTumariscal to integrate the OpenCode Go provider, including session header support and automatic model routing. ([Link](https://github.com/sipeed/picoclaw/pull/3371))
*   **#3222 - refactor(deltachat): cleanup implementation, documentation:** A large-scale refactoring PR by trufae to clean up the DeltaChat implementation, dropping legacy features and updating documentation. ([Link](https://github.com/sipeed/picoclaw/pull/3222))

### 4. Community Hot Topics
The most active item today is a long-standing bug report that has resurfaced:
*   **#3355 - [BUG]连接飞书报错-附解决方案 (config.json contains unknown field(s): channel_list.feishu.app_id):** This issue, opened on September 1st, details a configuration error when connecting to Feishu (Lark). The reporter has provided a solution, and the issue has received 2 comments, indicating ongoing user impact and a need for a configuration schema update. ([Link](https://github.com/sipeed/picoclaw/issues/3355))

### 5. Bugs & Stability
*   **#3355 [OPEN] [stale] [BUG]连接飞书报错-附解决方案:** Users are encountering a configuration validation error (`unknown field(s): channel_list.feishu.app_id`) when trying to set up the Feishu channel. This is a functional blocker for Feishu users. A solution is provided in the issue, but no fix PR is currently linked. Severity is **High** for affected users, as it prevents a core integration from working. ([Link](https://github.com/sipeed/picoclaw/issues/3355))

### 6. Feature Requests & Roadmap Signals
No new feature requests were filed today. However, the existing open PRs signal potential roadmap directions:
*   The **opencode-go provider** (PR #3371) suggests a continued focus on expanding LLM provider compatibility.
*   The **DeltaChat refactoring** (PR #3222) indicates an effort to modernize and simplify legacy channel integrations, which may lead to more stable messaging channel support in future versions.

### 7. User Feedback Summary
User feedback is focused on practical integration issues. The primary pain point identified is the broken Feishu configuration, which prevents users from starting the bot with that channel enabled. The detailed bug report and provided workaround show an engaged user base willing to debug and contribute solutions, but the lack of a merged fix suggests a bottleneck in maintainer review time.

### 8. Backlog Watch
The following items require maintainer attention due to their age or potential impact:
*   **PR #3222 (refactor(deltachat)):** Open since July 3rd, this large refactoring PR (over 200 lines changed) has not received a review, potentially blocking modernization of the DeltaChat channel.
*   **Issue #3355 (Feishu config error):** Marked as stale, this bug report with a known solution needs a maintainer to either implement the fix or close it if it's been resolved in a newer nightly build.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



Based on the provided GitHub data for the NanoClaw repository, here is the structured project digest for **2026-09-19**.

---

### 1. Today's Overview
NanoClaw is experiencing high community-driven activity focused on stability, resource management, and transport configuration. While no official software releases were published today, the repository saw updates across four open issues and four open pull requests. The primary focus of the community is addressing critical resource leaks (unbounded transcript archiving) and improving the reliability of LLM provider integrations (specifically Codex transport and Slack token expiration). Overall, project health is maintained by an active contributor base working on critical production-level patches.

---

### 2. Releases
*No new releases have been published today, and there are no recent releases listed in the repository data.*

---

### 3. Project Progress
No pull requests were merged or closed in the last 24 hours; however, several key feature and fix branches are actively being prepared by the community:
*   **Codex Transport Configurability (PR #3851, PR #3850):** Patches are being introduced to make the Codex Responses transport configurable (e.g., switching to HTTP SSE transport behind proxies), bypassing Websocket reliability issues.
*   **Slack Token Rotation (PR #3852):** A fix targeting the automatic rotation of the manager token before direct-mode provisioning, countering Slack’s 12-hour token expiration limit.
*   **Stateless Scheduled Tasks (PR #3741):** A feature branch introducing a `--fresh-session` flag, allowing scheduled tasks to run statelessly to prevent context-window bloat over time.

---

### 4. Community Hot Topics
The most pressing discussions today center on system resource preservation and smarter watchdog mechanisms:
*   **Unbounded Archive Growth (Issues #3735 & #3716):** These issues have gathered the most engagement (3 comments each). Users are demanding a robust, built-in transcript rotation, cap, and cleanup policy. The underlying need is to prevent production OOM (Out Of Memory) crash loops and disk exhaustion caused by full-rewrite compaction files.
*   **Watchdog and Heartbeat Latency (Issue #3455):** High-severity discussion regarding the `host-sweep` claim-stuck watchdog. Users note that the lack of a heartbeat during the latency gap between message claim and the first SDK event causes the watchdog to kill legitimately slow, but not stuck, turns.

---

### 5. Bugs & Stability
The following bugs are currently open and ranked by severity:

1.  **CRITICAL: Production OOM Crash Loops (Issue #3716)**
    *   *Description:* The `PreCompact` hook writes a brand-new file containing a full re-serialization of the entire conversation history on every firing, with no rotation or cleanup, leading to OOM crashes.
    *   *Status:* Open. No merged fix PR yet, but heavily discussed.
    *   *Link:* [nanocoai/nanoclaw Issue #3716](https://github.com/nanocoai/nanoclaw/issues/3716)
2.  **HIGH: Session Blocking due to Watchdog Timeout (Issue #3455)**
    *   *Description:* The claim-stuck watchdog kills legitimately busy turns because no heartbeat is sent between message claim and the first SDK event, permanently blocking sessions without self-recovery.
    *   *Status:* Open, awaiting core logic fixes.
    *   *Link:* [nanocoai/nanoclaw Issue #3455](https://github.com/nanocoai/nanoclaw/issues/3455)
3.  **HIGH: Unbounded Conversation Directory Growth (Issue #3735)**
    *   *Description:* `archiveTranscriptFile()` writes markdown archives into `groups/<folder>/conversations/` with no retention policy, causing continuous disk growth on long-lived agent fleets.
    *   *Status:* Open.
    *   *Link:* [nanocoai/nanoclaw Issue #3735](https://github.com/nanocoai/nanoclaw/issues/3735)
4.  **MEDIUM: Operator Env Overrides Not Forwarded (Issue #3714)**
    *   *Description:* Documented environment variable overrides (like auto-compact windows) do not reach the session container, requiring manual patching.
    *   *Status:* Open.
    *   *Link:* [nanocoai/nanoclaw Issue #3714](https://github.com/nanocoai/nanoclaw/issues/3714)

---

### 6. Feature Requests & Roadmap Signals
Based on active PRs and issues, the following features are likely to define the upcoming roadmap:
*   **Built-in Transcript Rotation & Retention:** A mandatory system-level feature requested by fleet operators to manage disk footprint (Issues #3735, #3716).
*   **Stateless Job Execution (`--fresh-session`):** The scheduled task runner is slated to receive a stateless mode (PR #3741) to prevent nightly jobs from accumulating massive, expensive contexts.
*   **Provider Transport Adapters:** Standardizing transport protocols (HTTP SSE vs WebSockets) to allow users to route around proxy issues (PRs #3850, #3851).

---

### 7. User Feedback Summary
*   **Pain Points:** Users report significant frustration with default resource management, specifically the lack of automated cleanup for archived conversations, which leads to manual disk cleanup and production crashes. Additionally, the lack of container environment injection overrides makes enterprise deployment difficult.
*   **Use Cases:** Fleet operators running long-lived agent groups require strict resource capping; scheduled job runners need stateless options to keep overhead low; enterprise setups require reliable proxy and token rotation support.
*   **Satisfaction:** Dissatisfaction is currently high regarding default stability and resource leaks, but community satisfaction is high regarding the responsiveness of contributors in identifying and drafting patches for these core operational bottlenecks.

---

### 8. Backlog Watch
*   **PR #3741 (`feat(tasks): --fresh-session`):** Open since September 7, 2026. It addresses a highly valuable use case (stateless scheduled tasks) and needs maintainer review for integration into the core scheduler.
*   **Issue #3455 (Heartbeat/Watchdog bug):** Open since August 23, 2026. High-severity issue that blocks session recovery; requires a rework of how the `host-sweep` sweep measures processing time.
*   **Issue #3714 (Container Env Overrides):** Open since September 4, 2026. Needs architectural alignment on how host-level environment variables are passed down to the session containers.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



Based on the GitHub activity data for the **IronClaw** repository (`nearai/ironclaw`) as of **September 19, 2026**, here is the structured project digest.

---

### 1. Today's Overview
IronClaw is experiencing steady, focused development activity, prioritizing architectural hardening, provider integration enhancements, and configuration bug fixes. Over the last 24 hours, the project recorded 1 updated issue and 2 updated pull requests, all of which remain open and under active development. No new releases were published today. The overall project health is stable, showing a strong focus on backend robustness, multi-tenant workspace isolation, and developer experience improvements.

---

### 2. Releases
*   **Status:** None. No new releases have been published today.

---

### 3. Project Progress
No pull requests were merged or closed today, but significant progress was made on key development branches:
*   **Profile-Agnostic Storage Refactor ([PR #7456](https://github.com/nearai/ironclaw/pull/7456)):** An XL-sized architectural refactor is underway to root Reborn profiles under a dedicated `IRONCLAW_REBORN_HOME` environment variable. This update establishes profile-agnostic namespaces (`state/`, `system/`, `workspaces/`, etc.) and introduces a typed security envelope to ensure tenant and workspace isolation remains robust during profile transitions.
*   **OAuth Configuration Readiness Fix ([PR #8102](https://github.com/nearai/ironclaw/pull/8102)):** A targeted bug fix addressing extension activation failures. It resolves issues where Google OAuth configurations (Gmail/Calendar) completed successfully via the Web UI but failed to activate due to provider-instance readiness timing issues when configured administratively.

---

### 4. Community Hot Topics
*   **LLM Thinking & Effort Control ([Issue #7537](https://github.com/nearai/ironclaw/issues/7537))** *(2 comments)*
    *   **Underlying Need:** Users and integrators require a generic, per-request and per-model mechanism to control the "thinking/effort" depth of LLMs. This is a critical requirement when using models like DeepSeek V4 Flash via NEAR AI, which can produce excessively verbose or slow reasoning outputs (specifically referencing checkpoint `0731`). The community wants a provider-native parameter mapping (such as mapping to DeepSeek's `chat_template_kwargs`) to optimize token usage and latency.
*   **Administrative Web UI vs. Env Vars OAuth Integration ([PR #8102](https://github.com/nearai/ironclaw/pull/8102))**
    *   **Underlying Need:** Deployment operators rely on the Web UI's administrative panel to configure OAuth clients (e.g., Google/Gmail). The current codebase exhibits a friction point where administrative configurations are ignored or fail during provider readiness checks compared to traditional environment variables, necessitating a live resolution fix.

---

### 5. Bugs & Stability
*   **Medium Severity: Google Extension Activation Failure ([PR #8102](https://github.com/nearai/ironclaw/pull/8102))**
    *   *Symptom:* Gmail and Google Calendar extensions fail to activate on deployments where the operator configured the Google OAuth client through the Web UI administrative settings rather than environment variables. The OAuth flow completes successfully, but the subsequent provider activation step fails.
    *   *Status:* A fix PR is open and in progress.
*   **Medium Severity: Profile Transition Security Weakening ([PR #7456](https://github.com/nearai/ironclaw/pull/7456))**
    *   *Symptom:* Potential weakening of workspace isolation and tenancy security during restart-only profile transitions within the "Reborn" storage architecture.
    *   *Status:* A large (XL) refactor PR is open to profile-agnostic storage directories and typed security envelopes to mitigate this.

---

### 6. Feature Requests & Roadmap Signals
*   **Generic LLM Reasoning/Thinking Controls ([Issue #7537](https://github.com/nearai/ironclaw/issues/7537))**
    *   *Roadmap Signal:* This feature request signals a strong push towards fine-grained, cost-saving LLM orchestration controls. It is highly likely to be integrated into the core LLM request path in the upcoming minor releases, enabling developers to programmatically scale reasoning effort per request and model provider natively.

---

### 7. User Feedback Summary
*   **Pain Points:** Users have reported frustration with verbose and costly LLM reasoning outputs from DeepSeek V4 Flash via NEAR AI, which currently lacks straightforward throttling. Additionally, configuration discrepancies between the Web UI administrative console and traditional environment variables for OAuth integrations have caused deployment friction.
*   **Core Maintainer Response:** Active core contributor `henrypark133` is currently addressing the storage isolation and OAuth readiness issues, showing high responsiveness to deployment edge cases.

---

### 8. Backlog Watch
*   **Issue #7537 (Generic per-request thinking/effort control):** Opened on August 12, 2026. Currently sitting with 2 comments. It needs maintainer triage to define the standard mapping interface across all supported providers (e.g., OpenAI, DeepSeek, Anthropic) before implementation is finalized.
*   **Pull Request #7456 (Profile-agnostic durable storage):** Opened on August 10, 2026. Marked as `size: XL` with `risk: medium`. Due to its large scope, it requires careful code review and staged integration to avoid breaking existing storage schemas.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



Based on the GitHub data for **LobsterAI** (`netease-youdao/LobsterAI`) up to **2026-09-19**, here is the structured project digest.

---

### 1. Today's Overview
LobsterAI exhibits high development velocity on 2026-09-19, with 23 pull requests updated (14 open, 9 merged/closed) and 6 open issues updated. The project is wrapping up a major release cycle (`release/2026.9.18`), focusing heavily on critical stability fixes—particularly regarding OpenClaw gateway lifecycle, Windows installer compatibility, and data migration. While core development is highly active, community-facing issue resolution remains slow, with several critical user-facing bugs (such as external build failures and login issues) marked as `[stale]`.

---

### 2. Releases
*   **New Releases:** None published in the last 24 hours.
*   **Release Cycle Update:** The pull request **[#2715] [CLOSED] Release/2026.9.18** was closed today, indicating that the version `2026.9.18` has been packaged and released. This release includes Codork-style workspace improvements, subagent session visibility, and various gateway stability patches.

---

### 3. Project Progress
A total of **9 pull requests were merged/closed** today, marking significant progress across several key areas:
*   **Cowork & Collaboration Features:** PR **[#2696]** brought Codex-style workspace reviews, inline question docks, and a Tasks panel to the Cowork session view. PR **[#2703]** improved subagent session visibility, and PR **[#2717]** added scheduled task Weixin delivery receipts.
*   **Authentication & Routing:** PR **[#2718]** fixed routing issues for Weixin and QQ QR login channels.
*   **OpenClaw & Startup Stability:** PR **[#2702]** resolved workspace setup recovery issues, and PR **[#2701]** hardened startup recovery and Feishu secret routing.
*   **Media & Skills UX:** While mostly open, the closure of the release PR (**[#2715**) integrates ongoing improvements like skill marketplace counts and safe skill re-imports into the main branch.

---

### 4. Community Hot Topics
The community is currently focused on developer onboarding, plugin configuration integrity, and authentication reliability. 

*   **Topic 1: External Build Failures (Issues #1015, #1025)**
    *   *Underlying Need:* External developers cannot build the project because the build script (`ensure-openclaw-plugins.cjs`) attempts to access the internal corporate registry (`https://npm.nie.netease.com/`) to install the optional `moltbot-popo` plugin. This results in a 5-minute timeout and a complete build blockage for public contributors.
    *   *Links:* [Issue #1015](https://github.com/netease-youdao/LobsterAI/issues/1015), [Issue #1025](https://github.com/netease-youdao/LobsterAI/issues/1025)
*   **Topic 2: Broken NetEase Employee Login (Issue #1016)**
    *   *Underlying Need:* Users attempting to log in via NetEase employee credentials successfully authenticate on the web portal (`c.youdao.com`), but the client fails to receive the resulting auth token via deep link, leaving them locked out of the application.
    *   *Link:* [Issue #1016](https://github.com/netease-youdao/LobsterAI/issues/1016)
*   **Topic 3: Plugin Sync Data Loss (Issue #2654)**
    *   *Underlying Need:* Plugin configurations lose their `hooks` fields upon Gateway restart because the database sync function (`getUserPlugins`) does not retrieve or persist this data to disk.
    *   *Link:* [Issue #2654](https://github.com/netease-youdao/LobsterAI/issues/2654)

---

### 5. Bugs & Stability
Several critical stability bugs are currently being addressed via open pull requests, while others remain stale in the backlog.

*   **Critical / High Severity (Fix PRs Open):**
    *   **Gateway Infinite Restarts (PR #2707):** A gateway crashing shortly after becoming healthy triggers an infinite restart loop because the restart counter is prematurely reset. *Status: Fix PR open.*
    *   **Session Start Rejection during Restart (PR #2708):** Users are blocked with "please try again later" errors when trying to start a session while a config-driven gateway restart is deferred. *Status: Fix PR open.*
    *   **Data Migration Rollbacks (PR #2705):** Restoring a backup fails and rolls back due to `EBUSY` locks on Chromium user data partitions. *Status: Fix PR open (skipping partitions).*
    *   **Windows Installer PowerShell Failures (PR #2706, #2709):** Upgrades fail on Windows PowerShell 5.1 due to script syntax errors, and security software can block SQLite staging directory creation. *Status: Fix PRs open.*
*   **Medium Severity (Fix PRs Open

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>



### Today's Overview

Today, the Moltis project exhibits very low activity, with no new issues filed and no releases published. The only repository activity recorded in the last 24 hours is a single open pull request (#1275) auto-generated by dependabot[bot] to update the `smol-toml` dependency in the `/docs` directory. This indicates a quiet day for core development, with maintenance bots handling routine dependency hygiene. Overall, the project remains stable and quiet, awaiting maintainer review on the single pending automated update.

### Releases
*None (No new releases were published today).*

### Project Progress

No pull requests were merged or closed today, meaning no core features advanced and no bugs were resolved via merges in the last 24 hours. The only pending progress item is the automated dependency bump in PR #1275, which is currently unreviewed. Development velocity is currently in a quiet phase focusing on maintenance rather than active feature implementation.

### Community Hot Topics

There are no active community hot topics today, as the repository shows zero issues and zero comments on the sole active pull request. The only community-facing technical artifact is the automated dependency update PR #1275:
*   **PR #1275:** [chore(deps): bump smol-toml from 1.7.0 to 1.8.0 in /docs in the npm_and_yarn group across 1 directory](https://github.com/moltis-org/moltis/pull/1275) (Author: dependabot[bot], State: Open, Comments: 0, Reactions: 0). This PR addresses routine dependency hygiene rather than a user-driven community discussion.

### Bugs & Stability

No bugs, crashes, or regressions were reported by users today (0 active issues, 0 closed issues). The project stability is currently high and uneventful, with no active bug reports requiring triage or hotfixes.

### Feature Requests & Roadmap Signals

No user-submitted feature requests were recorded today. The only automated roadmap signal is the pending dependency update of `smol-toml` to version 1.8.0 in the `/docs` directory (PR #1275). This indicates that minor tooling updates within the documentation environment are part of the ongoing routine maintenance cycle, though they do not represent core product feature updates.

### User Feedback Summary

There is no direct user feedback, pain points, or satisfaction data available today, as the issue tracker and discussion boards remained completely inactive over the last 24 hours.

### Backlog Watch

There are no long-unanswered issues or stale pull requests requiring immediate maintainer attention. The repository backlog is clean, with zero open issues and only the single automated dependency PR (#1275) waiting standard review.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>



Here is the structured project digest for CoPaw (QwenPaw) based on the GitHub data for **2026-09-19**.

---

### 1. Today's Overview
The project is experiencing very high development velocity and community engagement. A total of 24 issues and 50 pull requests (PRs) were updated in the last 24 hours, culminating in the release of `v

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>



# ZeptoClaw Project Digest — 2026-09-19

## 1. Today's Overview

ZeptoClaw shows focused, maintainer-driven development activity with three pull requests processed in the last 24 hours — two of which have been merged/closed, and one currently under review. No new issues were opened or closed, and no new releases were published, indicating the project is in a stabilization and hardening phase rather than a feature-sprint. The activity is entirely authored by the project lead (`qhkm`), suggesting a concentrated development effort. Overall project health remains positive, with the merged PRs directly addressing provider compatibility and security hardening.

## 2. Releases

No new releases were published in the last 24 hours. There are no pending version bumps or migration notices to report.

## 3. Project Progress

Two pull requests were merged/closed today, both advancing provider robustness and security:

- **#703 — Read reasoning-model replies on OpenAI-compatible endpoints** ([Closed]) — Addresses a critical gap where reasoning models served over OpenAI-compatible APIs return their thinking in `reasoning_content` and may leave `content` null (especially when the token budget was exhausted before an answer began). Previously, ZeptoClaw parsed only `content`, turning the null into `""` via `unwrap_or_default()`, effectively discarding the reasoning output. This fix ensures the agent can consume and surface the full model response. [Link](https://github.com/qhkm/zeptoclaw/pull/703)

- **#701 — Sanitize tool schemas and coerce model tool-args for strict/local backends** ([Closed]) — Every `ToolRegistry::definitions*()` path now runs a tool's schema through `utils::tool_schema::sanitize_schema()` before it reaches a provider request. External MCP server `input_schema` and plugin schemas are returned verbatim but are now sanitized downstream. This change prevents malformed or non-compliant schemas from breaking strict or local backend integrations, and coerces model tool-arguments into types the backend expects. [Link](https://github.com/qhkm/zeptoclaw/pull/701)

One PR remains open:

- **#702 — Rate-limit password login attempts** ([Open]) — The public panel password-login endpoint previously allowed unlimited attempts, with bcrypt cost as its only brake. This PR introduces a five-attempt-per-socket-peer-IP limit within a rolling 60-second window. The sixth attempt receives HTTP 429 with `Retry-After: 60` before JSON parsing or password verification occurs. [Link](https://github.com/qhkm/zeptoclaw/pull/702)

## 4. Community Hot Topics

No issues or PRs with notable comment threads or reactions were recorded in the last 24 hours. All three PRs show 0 comments and 0 👍 reactions, suggesting the changes are either very recent or reviewed primarily through private channels. The underlying needs reflected in these PRs are clear, however:

- **Provider compatibility** (#703, #701): Users running reasoning models or strict/local backends need ZeptoClaw to faithfully handle non-standard response shapes and tool schemas. These PRs address real-world deployment friction.
- **Security hardening** (#702): The panel login endpoint's lack of rate-limiting was a clear attack surface. The proposed fix reflects a security-conscious user base and the maintainer's responsiveness to it.

## 5. Bugs & Stability

No bugs, crashes, or regressions were reported via issues in the last 24 hours. However, two closed PRs directly address stability concerns:

| Severity | Issue | Fix PR |
|----------|-------|--------|
| Medium | Reasoning models returning `content: null` caused silent loss of reasoning output | #703 (Closed) |
| Medium | Unsanitized tool schemas could break strict/local backend integrations | #701 (Closed) |

The open PR #702 addresses a security vulnerability (unlimited password attempts on the public panel), which — if not yet merged — represents an active exposure.

## 6. Feature Requests & Roadmap Signals

No formal feature requests were filed today. However, the trajectory of recent PRs signals the project's near-term roadmap:

- **Provider-agnostic reasoning support** is clearly a priority. The #703 fix suggests ZeptoClaw is preparing to support reasoning-capable models (e.g., o1, DeepSeek-R1, QwQ) as first-class citizens across OpenAI-compatible endpoints.
- **Schema sanitization** (#701) indicates a push toward broader compatibility with strict/local backends, possibly including on-device or self-hosted model servers with stricter validation.
- **Security hardening** (#702) points to a growing awareness of production-deployment concerns — rate-limiting, brute-force protection, and input sanitization are becoming baseline expectations.

These signals suggest the next version may focus on "provider robustness" and "production readiness" rather than new agent capabilities.

## 7. User Feedback Summary

No direct user feedback (issues, comments, reactions) was recorded in the last 24 hours. The PRs themselves, however, reflect user pain points that the maintainer is proactively addressing:

- Users deploying ZeptoClaw with reasoning models were losing the model's thinking output — a silent failure that undermines trust in the agent's decision-making.
- Users integrating with strict or local backends were hitting schema-related failures — a friction point that limited deployment flexibility.
- Users exposing the panel to the network were vulnerable to brute-force password attacks — a security concern that the maintainer is now mitigating.

The absence of complaints or feature requests in the issue tracker suggests either a small, quiet user base or that the maintainer is successfully anticipating needs before they become reported bugs.

## 8. Backlog Watch

No long-unanswered issues or PRs requiring maintainer attention were identified in the last 24 hours. The open PR #702 is the only item awaiting review or merge, and given its security significance, it should be prioritized for integration. The project's issue tracker appears well-managed, with zero open issues — a positive indicator of maintenance hygiene.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



# ZeroClaw Project Digest — 2026-09-19

## 1. Today's Overview
ZeroClaw remains a highly active open-source project, characterized by substantial pull request velocity (50 updated today) alongside steady issue churn (16 updated today). The absence of new releases indicates a focus on integration and hardening rather than a immediate version cut. Project health is generally robust, though the volume of high-risk, high-priority security and architecture issues signals a maturing but complex codebase undergoing significant refactoring.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Project Progress
Four pull requests were merged or closed today, marking concrete progress in several areas:
*   **Plugin Egress Governance:** PR #10750 landed, governing channel plugin egress and preserving sender authorization and webhook publication models.
*   **Provider Hardening:** PR #10719 closed, ensuring tool image references are preserved through normalization, preventing broken image delivery to the agent.
*   **Release Infrastructure:** Multiple release-gate fixes were merged (#10815, #10816, #10817, #10818), adding fail-closed checks for Apple notarization, version preparation, dependency ordering, and stable metadata promotion. This significantly reduces the risk of incomplete or broken release cuts.
*   **Skill Documentation:** PR #10783 closed, preserving approved GitHub publication text for skills and removing override sentences for failed CI.

## 4. Community Hot Topics
The most active discussions center on architectural shifts and security provenance:
*   **RFC #10526 (Append-only session event history):** This high-risk RFC addresses the fragmentation of execution facts across multiple systems. The underlying need is a deterministic, replayable state model, which is critical for debugging, auditing, and building derived agent streams. [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/10526)
*   **Issue #8850 (Runtime WASM Plugins):** A proposal to move optional channels and tools off compile-time feature flags to runtime-installable WASM plugins. This signals a strong community desire for modularity and smaller stock binaries. [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8850)
*   **Issue #10908 (Image Marker Provenance):** A fresh, high-priority bug where image markers in tool results are stripped or attached without provenance. This highlights a critical gap in multimodal data handling and security auditing. [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/10908)
*   **PR #10321 (Browser PKCE & Enrollment API):** A large, stacked PR implementing a major security feature. The underlying need is a standardized, secure method for browser-based agent enrollment and authentication. [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/10321)

## 5. Bugs & Stability
Several bugs were reported today, ranked by severity:
1.  **P1 Security/Architecture:** Image markers in tool-result text are promoted to attachments without provenance, potentially stripping literal source text. (Issue #10908). A fix is in progress.
2.  **P1 Security/Architecture:** Bounded child loop tools may execute without approval enforcement due to a `None` vs `NotRequired` gating bug. (Issue #10643). A follow-up fix is in progress.
3.  **P2 Provider Bug:** Seam sanitizers rewrite signed reasoning inside assistant tool-call envelopes, causing Anthropic to reject replays. (Issue #10952). No fix PR linked yet.
4.  **P2 Runtime/UI Bug:** `cost.warn_at_percent` budget warnings are ignored by the runtime. (Issue #10950). Source code gap identified; fix pending.
5.  **P2 UI Bug:** ZeroCode Config refreshes the field list twice after saving, causing redundant API requests. (Issue #10951). No fix PR linked yet.
6.  **P2 Channel Bug:** Interruption-scope keys collide across component boundaries due to weak encoding. (Issue #10948). No fix PR linked yet.

## 6. Feature Requests & Roadmap Signals
User-requested features and RFCs indicate the following roadmap signals:
*   **Agent Skills Standardization:** Issue #4853 requests support for installing skills from `.well-known` discovery indexes, aligning with the broader Agent Skills group standardization. Given its age and accepted status, this is a strong candidate for the next minor release.
*   **Delegate Sub-agent Context:** Issue #10963 requests forwarding session identity to delegate sub-agents, currently missing from the prompt construction. This is a quick win for better multi-agent orchestration.
*   **Gateway Tool Result Streaming:** Issue #10962 requests forwarding tool result payloads over the `/ws/chat` stream, enabling richer client-side tool visualization.
*   **Internal Principal Envelope:** PR #10425 implements the first slice of RFC #6954, introducing an `InternalPrincipal` envelope for cron and peer agent execution. This is a foundational security feature likely to be merged soon.

## 7. User Feedback Summary
User pain points focus on **observability** and **security boundaries**. The ignored budget warnings (#10950) and the double config refresh (#10951) represent direct friction in the user workflow. The image marker provenance issue (#10908) and the child loop approval gap (#10643) reflect deep user concern over data integrity and safety guardrails. Satisfaction is high with the project's direction toward runtime pluginization (#8850) and session replayability (#10526), but users are vocal about the need for these architectural improvements to be delivered without introducing regressions.

## 8. Backlog Watch
The following items require sustained maintainer attention:
*   **Issue #4853:** The `.well-known` skills discovery feature has been open since March 2026. It is marked `accepted` but `in-progress` and `blocked`, waiting on external standardization and implementation.
*   **PR #10321 & #10259:** These large, stacked security PRs (Browser PKCE and RPC principal enforcement) are high-risk and require careful review to ensure the complex authentication flows do not introduce subtle bypasses.
*   **PR #10622:** The Slack bot message acceptance feature is marked `parking-lot` and `needs-maintainer-review`, indicating a potential scope or alignment issue that needs resolution.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*