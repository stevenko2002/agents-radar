# OpenClaw Ecosystem Digest 2026-10-05

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-10-04 22:15 UTC

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

Here is a structured digest of the OpenClaw project activity for October 5, 2026, based on the provided GitHub data.

### Today's Overview
Activity on the OpenClaw repository remains exceptionally high, with 500 issues and 500 pull requests updated in the last 24 hours. While there are no new releases today, the volume of closed issues (152) and merged/closed PRs (203) indicates a strong, ongoing maintenance cycle. The project is currently focused on stabilizing recent feature rollouts, addressing regressions in core session management, and improving the reliability of multi-agent and CLI backend integrations.

### Releases
No new releases were published in the last 24 hours.

### Project Progress
The development effort today has been heavily focused on performance, stability, and platform-specific fixes. Several key areas saw significant advancement:

- **Session & State Management:** Multiple PRs target session lifecycle improvements, including sharing list views to reduce redundant data fetching (#165150), admitting recovered WAL databases without foreground scans to speed up post-crash recovery (#165070), and cleaning up GitHub publication receipts during bulk session deletion (#163833).
- **Channel & Platform Expansion:** A new X (Twitter) mentions channel plugin (#165138) is a major addition, allowing team agents to be steered via mentions. On Android, native assistant invocations now start Talk directly (#165136).
- **CI & Testing:** Efforts to reduce flakiness in the test suite are ongoing, with fixes for timeout issues in macOS Swift packages (#165068, #165157) and WebChat startup recovery tests (#165156).
- **Security & Configuration:** A critical fix for the A2A channel ensures it fails closed when peer token environment variables are missing (#165021). Additionally, core group allowlist entries are no longer incorrectly flagged as requiring a plugin (#161641).
- **Agent Runtimes:** Fixes for the Copilot provider address a severe bug where tool calls fail after the first turn due to async scope closure (#164723). For Code Mode, waiting results are now made durable across retries (#119055).

### Community Hot Topics
The community conversation is dominated by stability issues in recent versions (2026.9.x) and architectural concerns regarding resource management.

- **Per-Agent Cost Budgets (#42475):** This highly discussed feature request (24 comments) highlights a strong operator need for financial control. Users want to prevent runaway spending at the gateway level before model calls are dispatched, rather than relying on external monitoring.
- **Zombie Process Leaks (#97616):** With 17 comments, this bug is a major pain point. Users report unreaped child processes from hooks and tools accumulating over time, leading to runtime degradation.
- **Memory & SQLite Growth (#114612, #158390):** The community is actively discussing unbounded growth in the SQLite database tables (`memory_index_chunks`, `memory_embedding_cache`) and the `plugin-captures` temp directory. These issues lead to disk exhaustion and are considered critical for long-running instances.
- **Config Hot-Reload Breaking Turns (#144291):** Users report that any configuration change on a hot-reloadable path currently aborts every in-flight agent turn, causing a poor user experience and forcing a "prepared model runtime plugin generation was superseded" error.

### Bugs & Stability
The bug queue today is heavily weighted toward regressions and critical stability issues introduced in recent releases, particularly 2026.9.3 through 2026.9.8.

| Severity | Issue Title | Description | Fix Status |
| :--- | :--- | :--- | :--- |
| **P0** | [plugin-captures tmp dirs not GC'd](https://github.com/openclaw/openclaw/issues/158390) | Temporary directories from plugin builds and catalog operations fill the disk indefinitely. | Open |
| **P0** | [Lost subagent completion delivery](https://github.com/openclaw/openclaw/issues/143334) | Subagent completions park requesters in a "settle-yield" state, starving queued user messages. | Open |
| **P0** | [Interrupted package activation](https://github.com/openclaw/openclaw/issues/143752) | Strands the canonical CLI if package activation is interrupted between moving incumbents and updating launchers. | Open |
| **P0** | [2026.9.8 refuses to connect to local gateway](https://github.com/openclaw/openclaw/issues/164396) | Clean install on Windows 11 with Node 22 LTS fails to connect to the local gateway after onboarding. | Open |
| **P1** | [Gateway pins a CPU core forever](https://github.com/openclaw/openclaw/issues/161379) | A refresh loop for the OpenAI live catalog (TTL 60s) pins a CPU core when agent refresh times exceed the TTL. | Open |
| **P1** | [Config hot-reload aborts turns](https://github.com/openclaw/openclaw/issues/144291) | Any config set on a hot-reloadable path kills all in-flight agent turns. | Open |
| **P1** | [Memory search livelocks](https://github.com/openclaw/openclaw/issues/138775) | Every search triggers a full reindex that fails, re-arming itself with no backoff and saturating the event loop. | Open |
| **P1** | [WhatsApp DM durable registry handoff fails](https://github.com/openclaw/openclaw/issues/161976) | Automatic final reply delivery fails after a restart, causing message loss on the next inbound message. | Open |
| **P1** | [claude-cli transcript path ignores CLAUDE_CONFIG_DIR](https://github.com/openclaw/openclaw/issues/145309) | The backend looks only under `$HOME/.claude`, breaking sessions when `CLAUDE_CONFIG_DIR` is set. | Open |

### Feature Requests & Roadmap Signals
The feature pipeline is pointing toward better resource governance, multi-agent isolation, and platform maturity.

- **Per-Agent Cost Budgets (#42475):** This is a top-priority feature for operators managing large fleets. It is likely to appear in a near-term stable release as a gateway-level enforcement mechanism.
- **Per-Agent Visibility Scoping (#59149):** The request to scope `tools.sessions.visibility` and `tools.agentToAgent` per-agent, rather than globally, signals a need for finer-grained security in hierarchical deployments.
- **Bounded Launch Contract for Swarm (#156632):** The proposal for a "bounded launch contract" to restrict verification lanes from gaining authority suggests an upcoming security hardening for the Swarm agent system.
- **Index Memory by Source Directory (#95724):** This feature aims to eliminate duplicate vector stores for agents sharing a workspace, which is a significant optimization for multi-agent setups.

### User Feedback Summary
User feedback centers heavily on the instability of the 2026.9.x series. Pain points include:

- **Frustration with Update Mechanics:** Multiple issues (#164396, #164422, #157415) detail failures during or after updates, particularly on macOS and Windows, leaving users stranded or unable to connect.
- **Resource Leaks:** Users on long-running instances are hitting disk and memory limits due to unbounded SQLite growth and uncaptured temp directories (#114612, #158390).
- **Session State Corruption:** The regression in subagent completion delivery (#143334) and the "restart recovery claim changed" error (#118839) are causing significant workflow disruption, particularly for users relying on Telegram and WebChat sessions.
- **UX Friction:** The default behavior of `openclaw agent` resuming the last session silently (#71417) and the failure of `taskSuggestions.accept` in Docker sandboxes (#143980) are noted as significant usability blockers.

### Backlog Watch
The following items represent long-standing issues or pull requests that require maintainer intervention or architectural decisions.

- **Issue #84037 (Codex App-Server CPU Overhead):** This P1 issue has been open since May 2026. It describes significant steady CPU usage from the Codex runtime, even at idle. It requires a deep profile of the app-server and gateway helper processes.
- **Issue #113434 (Codex Session Reset Memory Exhaustion):** Closed but marked as stale, this issue describes a severe RAM exhaustion bug on Windows. It may need a re-evaluation if the code path for catalog scans has changed.
- **PR #113824 (Preserve Restored Flow Controller Provenance):** This PR has been in "waiting on author" status since July 2026. It addresses a data integrity issue where historical task flows display a fabricated controller identity. It needs a maintainer to resolve conflicts or guide the author.
- **PR #117605 (Fail Closed on Gateway Task Cancellation):** Also waiting on author since August 2026, this is a critical safety fix ensuring that when the Gateway is disconnected, cron task cancellations are not falsely reported as successful.

---

## Cross-Ecosystem Comparison



Here is the cross-project comparison report based on the community digest summaries for **2026-10-05**.

---

### 1. Ecosystem Overview
The personal AI assistant and agent open-source landscape is experiencing a period of intense, rapid iteration, characterized by a high volume of community-driven bug fixes and feature integrations. Projects are heavily focused on operational stability, resource management, and multi-agent coordination, reflecting a transition from prototype to production-grade systems. Platform-specific optimizations (mobile, desktop, containerized) and security hardening (fail-closed mechanisms, dependency pinning) are emerging as critical battlegrounds. There is a clear divergence in strategies: some projects prioritize aggressive feature expansion (e.g., MCP integrations, multi-channel support), while others focus on architectural hygiene and update safety.

---

### 2. Activity Comparison

The table below summarizes the development activity and project health across the ecosystem for the 24-hour period ending October 5, 2026.

| Project | Issues Updated | PRs Updated | Release Status | Health Score & Notes |
| :--- | :---: | :---: | :---: | :--- |
| **OpenClaw** | 500 | 500 | None | **High (Stressed)**. Massive community volume, but facing stability regressions in the 2026.9.x series. |
| **NanoBot** | 5 | 49 | None | **High**. Rapid bug-to-fix turnaround (e.g., temperature provider bug) and mobile WebUI maturation. |
| **Hermes Agent** | 50 | 50 | None | **High**. Heavy community interaction and automated merges, though some long-standing architectural issues remain. |
| **PicoClaw** | 4 | 7 | None | **High**. Strong backend stability fixes, particularly around config persistence and channel reload safety. |
| **NanoClaw** | 9 | 40 | **v2026.10.0-rc.1** | **High**. Shipped a major release candidate focusing on update safety, container trust, and security pinning. |
| **ZeroClaw** | 42 | 50 | None | **Medium (Backlog Stress)**. High activity, but a growing open backlog and critical data-loss bugs require maintainer attention. |
| **CoPaw** | 11 | 8 | None | **Medium-High**. Active triage and first-time contributor fixes for containerized runtimes and console boot reliability. |
| **NullClaw** | ~3 | ~4 | None | **Medium-High**. Focused maintenance on platform stability (Android/Termux, macOS CLI streams). |
| **LobsterAI** | 5 | 6 | None | **Medium**. Steady frontend and MCP progress, but battling stale critical engine and scheduler bugs. |
| **IronClaw** | 0 | 5 | None | **Stable (Automated)**. Proactive dependency hygiene via Dependabot; no active user-reported issues. |
| **TinyClaw** | 0 | 0 | None | **Inactive**. No activity detected in the last 24 hours. |
| **Moltis** | 0 | 0 | None | **Inactive**. No activity detected in the last 24 hours. |
| **ZeptoClaw** | 0 | 0 | None | **Inactive**. No activity detected in the last 24 hours. |

---

### 3. OpenClaw's Position
OpenClaw acts as the core reference architecture in this ecosystem, distinguished by its massive community engagement and its focus on gateway-level governance.

*   **Advantages vs.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



Based on the provided GitHub activity for the **NanoBot** project (`github.com/HKUDS/nanobot`) up to October 5, 2026, here is the structured project digest.

---

### 1. Today's Overview
NanoBot is experiencing exceptionally high development activity, with 49 pull requests updated and 5 issues closed/opened in the last 24 hours. The daily workflow is heavily focused on core provider logic corrections, a massive suite of mobile WebUI usability fixes, and architectural refactoring of subagent task management. Overall project health is highly active, demonstrating rapid bug-to-fix turnaround times (such as the critical temperature-dropping provider bug) and steady feature maturation.

### 2. Releases
*No new releases have been published in the last 24 hours.*

### 3. Project Progress
The development team merged/closed 17 pull requests today, advancing several core areas of the project:
*   **Core Provider Fixes:** Merged PR #6005 (`fix(providers): preserve temperature for compatible reasoning models`), which resolves a critical bug where `temperature` settings were silently dropped across 38 OpenAI-compatible providers.
*   **Subagent Architecture:** Closed PR #5985 (`feat(subagent): add session-owned task messaging and cancellation`), introducing session-isolated subagent communication, targeted cancellation, and live task observation.
*   **WebUI Mobile UX Suite:** Closed a massive block of mobile-oriented fixes from contributor Re-bin (#6056, #6055, #6053, #6052, #6059, #6058, #6061, and #6049). These changes address touch target sizes, viewport keyboard avoidance, focus restoration on escape, and mobile sidebar behavior.
*   **Documentation & Parsing Fixes:** Closed PR #6054 (`docs(memory): correct Git layout and history search example`) and addressed XLSX parsing edge cases (#6060).

### 4. Community Hot Topics
*   **Silent Background Cycles & Context Compaction (#5900, #6029):** 
    *   *Link:* [Issue #5900](https://github.com/HKUDS/nanobot/issues/5900) (Closed) / [Issue #6029](https://github.com/HKUDS/nanobot/issues/6029) (Open)
    *   *Analysis:* Users heavily requested automated background tasks—such as idle context compaction and heartbeat/dream cycles—to run silently without broadcasting status messages (e.g., "Compressing context...") to active chat channels like WeChat. While #5900 was closed, #6029 remains open as a priority p2 bug/feature request.
*   **Chat Channel Failover Observability (#6031, #6062):**
    *   *Link:* [Issue #6031](https://github.com/HKUDS/nanobot/issues/6031) (Open) / [PR #6062](https://github.com/HKUDS/nanobot/pull/6062) (Open)
    *   *Analysis:* Users on chat platforms (QQ, Telegram, Discord, Slack) currently receive no warning when a fallback model serves a turn. PR #6062 is actively drafted to publish fallback events directly to chat channels, resolving the opacity of cross-provider failovers.

### 5. Bugs & Stability
Bugs reported or updated today, ranked by severity:
1.  **CRITICAL: `temperature` dropped globally for Reasoning Models (Issue #6002 / PR #6005):** Enabling `reasoningEffort` dropped `temperature` for all 38 OpenAI-compatible providers, not just reasoning models. **Status:** Fixed in PR #6005.
2.  **P2: Background Broadcast Noise (Issue #6029):** Background maintenance routines trigger automatic context compression notifications directly to active chat channels. **Status:** Open PR/Issue, awaiting implementation.
3.  **P2: XLSX Cell Parsing Drops Out-of-Range Cells (PR #6060):** In read-only mode, openpyxl trusts declared sheet dimensions, causing nanobot to silently drop cells outside the declared range. **Status:** Open PR #6060 fixes this by reading cells beyond declared dimensions.
4.  **P2: WebUI Sidebar State Fetch Failures (PR #6009):** A failed initial fetch was treated as an empty store, breaking the sidebar. **Status:** Open PR #6009 implements retry logic and read-only state preservation.
5.  **Low: Obsidian CLI Integration on Linux (Issue #6024):** The CLI app failed to detect Obsidian under nanobot due to environment isolation (`XDG_RUNTIME_DIR` not reaching the CLI). **

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Thinking Process:

1.  **Understand the Goal**: The user wants a structured project digest for the Hermes Agent (`github.com/nousresearch/hermes-agent`) based on the provided GitHub data, dated **2026-10-05** (based on the prompt's date "digest for 2026-10-05" and the data reflecting activity up to "2026-10-04").

2.  **Analyze the Input Data**:
    *   **Issues updated in last 24h**: 50 (open/active: 43, closed: 7)
    *   **PRs updated in last 24h**: 50 (open: 47, merged/closed: 3)
    *   **New releases**: 0 (None)

    *   **Latest Releases**: None.

    *   **Latest Issues (Top 30 by comment count)**:
        *   #125727 [OPEN] [invalid, comp/agent, P3] Automated Nous integration is blocked (23 comments, 0 👍). Summary: Scheduled Nous-to-Enterkey merge has conflicts in many files.
        *   #132607 [CLOSED] [invalid, provider/ollama, P3, bug, area/local-models] [Bug]: More 'web' toolset intersections leading to failed web_search (11 comments, 0 👍). Summary: websearch fails in hermes-cli unless run with `hermes chat -t web`.
        *   #38519 [OPEN] [type/feature, P2, comp/desktop, area/install-update] [Feature]: Hermes Desktop frontend install only (10 comments, 16 👍). Summary: Install frontend only, no agent on the same machine, remote connection setup for Windows.
        *   #49578 [OPEN] [type/security, comp/tools, tool/file, tool/code-exec, P3, needs-decision] [Bug]: execute_code (Python) bypasses agent file edit restrictions (4 comments, 0 👍). Summary: `patch` and `write_file` tools refuse security-sensitive files, but `execute_code` Python RPC wrappers bypass this.
        *   #54650 [OPEN] [type/bug, comp/cron, P2, area/profiles] Cron scheduler ignores job profile — always runs as default identity (4 comments, 0 👍). Summary: Cron jobs with profile run as default identity instead of loading target profile's SOUL.md, skills, memories.
        *   #47092 [OPEN] [type/feature, comp/agent, comp/plugins, P3] Feature request: add pre_agent_invocation hook as a canonical gate before agent execution (4 comments, 0 👍). Summary: Request for a `pre_agent_invocation` hook.
        *   #4256 [OPEN] [type/feature, comp/cli, comp/tui, area/config, P3, sweeper:risk-compatibility, comp/dashboard] [UX] Support configurable keybindings via config.yaml (4 comments, 7 👍). Summary: Keybindings hardcoded in `cli.py`, need configurable via config.yaml.
        *   #132920 [OPEN] [type/feature, comp/cli, comp/cron, P3, area/profiles] [Bug] `hermes cron list` doesn't report ALL cron jobs, only current profile (3 comments, 0 👍). Summary: Multi-profile cron job visibility issue.
        *   #122445 [OPEN] [type/docs, P3, area/install-update] [Docs] Termux APT docs stale: stable channel 404s and canary signing-key fingerprint differs (3 comments, 0 👍). Summary: Doc inconsistencies for Termux install.
        *   #132883 [OPEN] [type/bug, comp/cli, tool/skills, area/config, P2, sweeper:risk-compatibility] [Bug]: Blank Slate setup leaves all installer-seeded bundled skills on disk (3 comments, 0 👍). Summary: Opt-out marker is written but bundled skills are not removed.
        *   #69208 [CLOSED] [type/bug, comp/agent, provider/gemini, P2, needs-repro, bug] [Bug]: HTTP 400 on multi-turn tool calls with gemini-3-6-flash via Venice (3 comments, 0 👍). Summary: Multi-turn tool calling crashes on second turn with HTTP 400 from Google due to thought_signature stripping by proxy.
        *   #124526 [CLOSED] [type/bug, comp/cli, P2, python:uv, sweeper:risk-compatibility, sweeper:risk-platform-windows, comp/desktop, platform/windows, area/install-update] Windows: non-ASCII character in username breaks `uv` Python path resolution (3 comments, 0 👍). Summary: Non-ASCII chars in Windows usernames break `python-deps` stage.
        *   #132935 [OPEN] [type/bug, comp/agent, comp/gateway, provider/openai, P2, needs-repro, sweeper:risk-session-state, area/sessions] /model --provider openai-codex mid-session switch reports success but silently fails to rebind the live client (2 comments, 0 👍). Summary: Next message fails with HTTP 403 because live client wasn't rebound.
        *   #31419 [OPEN] [type/security, comp/agent, tool/terminal, P2] [Bug] Windows: asyncio.subprocess_exec misparses argv metacharacters when target is a .cmd/.bat shim (2 comments, 0 👍). Summary: Spawning CLI tools via .cmd/.bat shims on Windows can cause re-parsing of shell metacharacters.
        *   #79065 [CLOSED] Desktop file attachments fail when session workspace is read-only (2 comments, 0 👍). Summary: Staging uploaded bytes under `<session cwd>/.hermes/desktop-attachments` fails if cwd is not writable.
        *   #42106 [OPEN] [type/feature, comp/cli, comp/tui, area/install-update] Add macOS Spotlight/Desktop launcher installer for Hermes Desktop (2 comments, 0 👍). Summary: Request for official macOS Spotlight launcher.
        *   #91264 [CLOSED] [type/bug, comp/cli, comp/cron, P3] [Bug]: Kanban goal-mode judge/provider failures consume empty continuation turns (2 comments, 0 👍). Summary: Worker model/judge unavailable exhausts turn budget.
        *   #41957 [OPEN] [type/feature, area/config, P3] [Feature]: Respect Windows system proxy settings for API calls (2 comments, 0 👍). Summary: Hermes only respects HTTP_PROXY/HTTPS_PROXY env vars on Windows, not system proxy settings.
        *   #132862 [OPEN] [type/bug, comp/agent, comp/lsp, P2] [Bug]: LSP language server outlives its Hermes parent on every os._exit path (pyright orphans) (1 comment, 0 👍). Summary: Pyright and other LSP servers accumulate, parented to PID 1 after owners exited.
        *   #132937 [OPEN] [type/bug, duplicate, comp/acp, area/auth, area/config, sweeper:risk-session-state, P4, area/sessions] ACP session restore fails for named custom providers (1 comment, 0 👍). Summary: Restoring ACP session fails for named custom providers with HTTP 401.
        *   #131164 [OPEN] [type/bug, duplicate, comp/cli, comp/gateway, P2, sweeper:risk-compatibility, area/install-update] `hermes gateway restart` run from a dependency-generation venv script rewrites the systemd unit (1 comment, 0 👍). Summary: Rewrites systemd unit to a workspace launcher causing crash loop.
        *   #122813 [OPEN] [type/bug, comp/gateway, comp/cron, P2] gateway_state.json active_agents is not persisted when a cron job or API-server run starts or ends (1 comment, 0 👍). Summary: active_agents count is inaccurate during cron/API runs.
        *   #132893 [OPEN] [type/feature, tool/skills, P3] [Feature]: skill_linter: enforce Anthropic's updated skill authoring rules (1 comment, 0 👍). Summary: TOC and reference depth rules.
        *   #132778 [OPEN] [type/bug, comp/agent, comp/cli, P2, area/local-models] Managed worker: Compute error on a poisoned Metal backend is retried forever instead of recycling the worker (1 comment, 0 👍). Summary: Metal backend OOM leads to infinite retries instead of worker recreation.
        *   #128859 [OPEN] [type/bug, P2, sweeper:risk-session-state, comp/desktop, area/sessions, area/compression] [Bug]: Desktop stale-transcript guard fires forever after in-place compaction (1 comment, 0 👍). Summary: Stale-transcript guard fires on every send after compaction.
        *   #132949 [OPEN] [type/bug, comp/agent, P1, sweeper:risk-session-state, area/sessions] Ordinary instruction answered with only the "[response interrupted]" placeholder (0 comments, 0 👍). Summary: Long-running session returns just "[response interrupted]" on ordinary instruction.
        *   #132951 [OPEN] [type/bug, tool/tts, P2] [Bug]: Command STT provider reports a silent capture as "Transcription failed" (0 comments, 0 👍). Summary: Command-type STT provider fails on silent capture.
        *   #132953 [OPEN] [type/bug, comp/agent, P2, comp/gateway, area/sessions] Email on a multiplexed secondary profile never reports `connected` (stuck at `fatal` after a reconnect) (0 comments, 0 👍). Summary: Secondary profile email adapter stuck at `fatal` after IMAP outage.
        *   #132939 [OPEN] [type/bug, comp/agent, P2, sweeper:risk-session-state, comp/desktop, bug, area/sessions, area/compression] [Bug]: Display history shows compacted tail copies twice when tool-result payloads are pruned (0 comments, 0 👍). Summary: Messages painted twice in display history after compaction.
        *   #132942 [OPEN] [type/bug, comp/tools, P2, sweeper:risk-session-state] todo_list: coerce_tool_args wraps an unparseable todos string as [raw]; TodoStore silently replaces the whole list (0 comments, 0 👍). Summary: Unparseable todos string replaces whole list with placeholder.

    *   **Latest Pull Requests (Top 20 by comment count)**:
        *   #75212 [OPEN] [type/docs, tool/skills, P3] fix(skills/himalaya): upgrade bundled skill to himalaya v2 schema (0 comments).
        *   #110011 [OPEN] [type/bug, comp/agent, tool/skills, P2] fix(skills): capture direct-handler mutations and roll back under configured roots (0 comments).
        *   #132925 [OPEN] [type/bug, comp/agent, tool/skills, P2] fix(skills): disable dot- and underscore-prefixed trees in discovery (0 comments).
        *   #132952 [OPEN] fix(google-workspace): emit [] for empty Python-backend Gmail searches (0 comments).
        *   #132950 [OPEN] [type/bug, comp/tools, P2] fix(tools): keep unparseable container-shaped strings unwrapped in coerce_tool_args (0 comments).
        *   #113339 [OPEN] [type/test, P3, sweeper:risk-automation, sweeper:risk-platform-windows, platform/windows] fix(tests): a skipif probe must not spawn a process at collection time (0 comments).
        *   #132948 [OPEN] [type/bug, comp/agent, comp/tui, P2, sweeper:risk-session-state, area/sessions] fix(webui-ng): restore YOLO on resume, surface failure_reason, stop fork prompt races (0 comments).
        *   #73205 [OPEN] [type/feature, comp/gateway, comp/plugins, tool/skills, platform/matrix, area/config, P3, sweeper:risk-compatibility, sweeper:blast-moderate] feat(matrix): add channel prompts and skill bindings (salvage #25995) (0 comments).
        *   #132354 [OPEN] [type/bug, comp/cli, P2, sweeper:risk-compatibility, sweeper:risk-platform-windows, comp/desktop, platform/windows, ci-reviewed, area/install-update] Desktop update hand-off scripts hold the update marker as a lock and report committed updates as committed (0 comments). Stacked on #132345.
        *   #132345 [OPEN] [type/bug, P2, sweeper:risk-compatibility, sweeper:risk-platform-windows, comp/desktop, platform/windows, ci-reviewed, area/install-update] fix(desktop): update gate waits for a live updater; hand-off needs the script to take the marker (0 comments).
        *   #73238 [OPEN] [type/bug, comp/gateway, tool/vision, P2, sweeper:risk-message-delivery, sweeper:blast-moderate] fix(gateway): deliver generated media despite stale marker (0 comments).
        *   #132346 [OPEN] [type/test, P3, sweeper:risk-automation, ci-reviewed] ci: real-update E2E gates every updater change; Windows crash cells for a killed update (0 comments). Stacked on #132361.
        *   #132646 [OPEN] [type/feature, P3, sweeper:risk-automation, ci-reviewed] Code health can only improve: per-unit CC/size ratchet, Hermes invariant rules, scripts/check (0 comments).
        *   #129397 [OPEN] [type/bug, P2, comp/dashboard] fix(web): ignore replayed sidebar connection state (0 comments).
        *   #62088 [OPEN] [type/feature, comp/gateway, comp/plugins, platform/matrix, area/config, P3, needs-decision, sweeper:risk-message-delivery, sweeper:risk-compatibility, sweeper:risk-automation, sweeper:blast-moderate] feat(matrix): implement spec-correct threading and reply semantics (0 comments).
        *   #132338 [OPEN] [type/bug, comp/cli, P2, sweeper:risk-compatibility, sweeper:risk-platform-windows, platform/windows, ci-reviewed, area/install-update] fix(update): a killed Windows updater no longer strands paused gateways, and never resumes them onto a torn tree (0 comments). Stacked on #132365.
        *   #82788 [OPEN] [type/bug, tool/vision, backend/docker, P2, sweeper:risk-platform-windows, platform/windows] fix(tools): preserve POSIX paths for Docker vision (0 comments).
        *   #115548 [OPEN] [type/test, P3, sweeper:risk-platform-windows, platform/windows] fix(tests): a POSIX-only probe in a skipif costs the whole directory on Windows (0 comments).
        *   #113341 [OPEN] [type/bug, comp/cli, P3, sweeper:risk-automation, sweeper:risk-platform-windows, platform/windows] fix(ci): the Windows footgun linter was blind to aliased module imports (0 comments).

3.  **Drafting the Sections**:

    *   **Today's Overview**:
        *   Summarize the general status. High activity with 50 issues and 50 PRs updated in the last 24 hours. No new releases were made.
        *   The project is actively maintained with a high volume of community interaction, particularly around bug fixing (especially multi-profile management, session state, and tool security) and feature requests (like frontend-only desktop installation and configurable keybindings).
        *   Note the presence of stacked PRs (e.g., update mechanism improvements by teknium1) indicating structured development pipelines.

    *   **Releases**:
        *   None. (Omit or state "No new releases today.")

    *   **Project Progress**:
        *   Merged/closed PRs today: 3 (open: 47, merged/closed: 3). Let's review the closed issues too if they reflect progress (7 closed issues).
        *   Key areas of progress based on open PRs focused on fixes:
            *   *Skills & Tooling*: Fixes for skill discovery (excluding dot/underscore trees, PR #132925), capturing direct-handler mutations (PR #110011), and himalaya v2 schema doc update (PR #75212).
            *   *Web UI / TUI*: Fixing YOLO resume, failure reasons, and fork prompt races in webui-ng (PR #132948), and fixing replayed sidebar connection state in the dashboard (PR #129397).
            *   *Update Mechanism (Windows/Desktop)*: A major stack of PRs by `teknium1` targeting safe updates on Windows (crash-safe commit point #132361, live updater gate #132345, hand-off scripts #132354, killed updater handling #132338, and E2E test gating #132346).
            *   *Gateway & Media*: Fixing gateway delivery of generated media despite stale markers (PR #73238) and spec-correct Matrix threading (PR #62088).

    *   **Community Hot Topics**:
        *   Identify the most commented/reacted items.
        *   *Issue #125727 (23 comments)*: Automated Nous integration is blocked due to merge conflicts in a massive file list. This shows active development friction during merges.
        *   *Issue

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



Based on the GitHub activity leading up to October 5, 2026, here is the structured project digest for **PicoClaw (github.com/sipeed/picoclaw)**.

---

### 1. Today's Overview
PicoClaw exhibits high development velocity, driven primarily by a robust batch of backend stability fixes and feature toggles. In the last 24 hours, the project saw 7 pull requests closed/merged and 4 issues updated. The development focus is heavily directed toward configuration persistence, channel reload safety, and routing fixes (primarily led by contributor `x1F916`), while community demands for channel-specific customization (like OneBot reactions) are progressing through open pull requests. Overall, project health is stable, with critical gateway panics and config loss bugs actively resolved.

---

### 2. Releases
*   **No new releases** were published in the last 24 hours. 

---

### 3. Project Progress
Seven PRs were closed/merged during this period, focusing heavily on agent routing, configuration robustness, and system safety:

*   **Fix agent context routing (`#3402`)**: Resolved an issue where the legacy context manager used the default agent instead of the owning (routed/non-default) agent during session assembly.
*   **Persist multi-key model configurations (`#3400`)**: Fixed a critical configuration bug where `expandMultiKeyModels` rebuilt entries without the `Enabled` flag or proper key names, causing multi-key model configurations to be lost on save.
*   **Fix 32-bit ARM updater asset matching (`#3399`)**: Fixed a bug where the updater installed the `arm64` archive on 32-bit ARM systems because substring matching matched "arm" inside "arm64".
*   **Make channel Reload synchronous and nil-safe (`#3401`)**: Prevented a critical gateway panic (`manager.go:1956`) during channel reloads when an enabled channel failed its readiness check or factory, leaving a nil instance.
*   **Deliver async tool results to the originating session (`#3403`)**: Fixed routing for async tools (`spawn`), ensuring results are correctly delivered to the specific session that initiated them rather than routing everything to the default agent's main session.
*   **Bound tool feedback animations (`#3353`)**: Prevented channel messages from being edited indefinitely by stopping tool feedback animations after five minutes or immediately upon the first edit error.
*   **Fix backward compatibility (`#3233`)**: Resolved backward compatibility issues introduced by previous changes (specifically PR #3222).

---

### 4. Community Hot Topics
The community is highly active around QQ/OneBot integration and OpenAI API compatibility:

*   **QQ Chat Channel API Sync Delay (`#3394`)**: Highly critical issue with 2 comments. Users report that the underlying QQ robot API has been updated, but PicoClaw's QQ chat channel interface has not been updated to match. This is a major integration blocker for the QQ platform. [Link](https://github.com/sipeed/picoclaw/issues/3394)
*   **OneBot Automatic Reaction Configuration (`#3395` / `#3396`)**: Users running PicoClaw via the OneBot channel (QQ through NapCat) are frustrated that every group message triggers an automatic emoji like (`set_msg_emoji_like`, emoji 289). PR `#3396` introduces an opt-in `reaction_enabled` setting (defaulting to `false`) to make this behavior configurable. [Issue Link](https://github.com/sipeed/picoclaw/issues/3395) | [PR Link](https://github.com/sipeed/picoclaw/pull/3396)
*   **OpenAI Responses API & Signature Detection (`#3392` / `#3381`)**: Users are encountering issues with `CLAassistant` failing to detect signatures. This is linked to the ongoing major feature PR `#3381` which switches the OpenAI provider to the Responses API. [Issue Link](https://github.com/sipeed/picoclaw/issues/3392) | [PR Link](https://github.com/sipeed/picoclaw/pull/3381)

---

### 5. Bugs & Stability
Bugs are ranked by severity based on today's reports and status:

*   **HIGH: QQ Chat Channel API Outdated (`#3394`)**: Active bug. The QQ bot API has updated, but the channel wrapper has not. No fix PR is currently visible, leaving QQ channel integration broken for some users.
*   **HIGH: CLAassistant Signature Detection Failure (`#3392`)**: Active bug. Likely caused by the ongoing OpenAI Responses API migration (PR `#3381`). Needs to be resolved alongside the provider switch.
*   **MEDIUM: DingTalk Stream Gateway Panic (`#3382`)**: Marked as closed/stale, but users still report that the DingTalk gateway panics (`send on closed channel` at `client.go:161`) on stream SDK reconnects under v0.3.1. This requires upstream SDK verification or a localized patch.
*   **RESOLVED: Channel Reload Nil Pointer Panic (`#3401`)**: Fixed today. Safely handles channel reloads when readiness checks fail.
*   **RESOLVED: Multi-key Config Save Loss (`#3400`)**: Fixed today. Ensures all API keys and the `enabled` flag are correctly persisted.

---

### 6. Feature Requests & Roadmap Signals
*   **OneBot Reaction Toggle (`#3396`)**: Highly requested by QQ/NapCat users. The addition of an opt-in `reaction_enabled` setting indicates a move toward stricter default privacy and less intrusive bot behaviors. Likely to be part of the next minor release.
*   **OpenAI Responses API Migration (`#3381`)**: A major architectural update. Once merged, it will align PicoClaw with the latest OpenAI API structures.
*   **Predicted Next Version**: The next release will likely bundle the massive stability bundle from `x1F916` (`#3399` to `#3403`) alongside the OneBot reaction toggle (`#3396`), with urgent manual intervention needed to sync the QQ channel API (`#3394`).

---

### 7. User Feedback Summary
*   **Pain Points**: Users face significant friction with platform-specific integrations—specifically QQ and DingTalk. Hardcoded behaviors (like automatic emoji reactions in OneBot) limit production usability in group chats, and API synchronization lag with QQ causes functional blockages.
*   **Config Pain**: Users experienced silent configuration failures where multi-key models lost their active state during updates.
*   **Sentiment**: Users are generally supportive of rapid fixes, as evidenced by the quick resolution of the config and reload safety

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



# NanoClaw Project Digest — 2026-10-05

---

## 1. Today's Overview

NanoClaw is in a **high-activity release cycle**, with 40 pull requests updated in the last 24 hours (20 open, 20 merged/closed) and 9 issues touched (7 open, 2 closed). The project shipped **v2026.10.0-rc.1**, its first calendar-versioned release and a major operational shift: `/update-nanoclaw` now follows published release tags instead of the `main` branch tip. The bulk of today's movement is hardening — container trust fixes, setup/installation robustness, CI governance, and a Baileys security pin — alongside a steady stream of bug fixes across channels (Telegram, WhatsApp), the agent runner, and the CLI. Activity is concentrated on the `channels` branch merge and release-readiness work.

---

## 2. Releases

### v2026.10.0-rc.1 — Release Candidate

- **Versioning model change**: NanoClaw moves from semver (`2.4.0`) to calendar versions (`YYYY.M.PATCH`). This is the first release under the new scheme.
- **Update mechanism**: `/update-nanoclaw` now installs from published releases by default. The `stable` channel resolves the newest annotated `vX.Y.Z` tag via `git ls-remote`; the `beta` channel gets `-rc.N` candidates. This eliminates the previous "tip of `main`" install behavior, which could pull unreleased commits.
- **Breaking change**: Users on `stable` who were manually tracking `main` may need to verify their installed version matches a tagged release. The `[BREAKING]` marker in upgrade docs flags this for OneCLI and direct installs.
- **Migration note**: `NANOCLAW_UPDATE_CHANNEL` in `.env` selects `stable` (default) or `beta`. Existing installs that relied on `main` HEAD should confirm they are on a tagged release after updating.
- **PR**: [#4025](https://github.com/nanocoai/nanoclaw/pull/4025) — `chore(release): v2026.10.0-rc.1`
- **Underlying feature**: [#3986](https://github.com/nanocoai/nanoclaw/pull/3986) — `feat(update): follow release tags by default via update channels`

---

## 3. Project Progress

### Merged/Closed Today (10 PRs)

| PR | Area | Summary |
|---|---|---|
| [#3998](https://github.com/nanocoai/nanoclaw/pull/3998) | containers, agent-runner | Trust the gateway CA in the agent browser — Chromium now loads HTTPS pages through credential-gateway-inspected TLS. |
| [#3999](https://github.com/nanocoai/nanoclaw/pull/3999) | providers, agent-runner | `CLAUDE_CODE_AUTO_COMPACT_WINDOW` now actually reaches the agent container (host env → container env plumbing fix). |
| [#3983](https://github.com/nanocoai/nanoclaw/pull/3983) | core, log | Logger keeps nested `toJSON()` redaction when values hold BigInt or cycles — `safeStringify` no longer drops redaction on fallback. |
| [#4024](https://github.com/nanocoai/nanoclaw/pull/4024) | channels, setup, skills | `/add-whatsapp` pinned to Baileys `7.0.0-rc14`, closing a critical message-spoofing advisory (GHSA-qvv5-jq5g-4cgg). |
| [#4028](https://github.com/nanocoai/nanoclaw/pull/4028) | skills, docs | OneCLI upgrade guide now detects the gateway at `ONECLI_URL`, fixing Linux installs where the gateway listens on the Docker bridge. |
| [#3986](https://github.com/nanocoai/nanoclaw/pull/3986) | setup, skills | Release-tag-based update channels (the feature behind v2026.10.0-rc.1). |
| [#3988](https://github.com/nanocoai/nanoclaw/pull/3988) | setup, skills | `/update-nanoclaw` now refreshes the installed gateway when only its skill payload changed (previously missed updates confined to gateway skills). |
| [#4023](https://github.com/nanocoai/nanoclaw/pull/4023) | (checklist) | Shopping-list checklist PR — administrative housekeeping. |
| [#4025](https://github.com/nanocoai/nanoclaw/pull/4025) | release | The release candidate itself. |

### Key Open PRs (Not Yet Merged)

- **[#4000](https://github.com/nanocoai/nanoclaw/pull/4000)** — `chore(channels): merge main into channels`. A 463-commit merge requiring "Create a merge commit" only (squash would lose the merge base). This is the big branch sync that unblocks further mainline development on the channels work.
- **[#4017](https://github.com/nanocoai/nanoclaw/pull/4017)** — WhatsApp linking now fetches the current Web version before pairing, instead of silently using Baileys' stale built-in version on 429 rate-limit responses.
- **[#4029](https://github.com/nanocoai/nanoclaw/pull/4029)** — Telegram: renders underscore-containing `mailto:` links as plain text so they aren't dropped by MarkdownV2 parsing.
- **[#4019](https://github.com/nanocoai/nanoclaw/pull/4019)** — Generated systemd unit now waits for Docker (`After=docker.service`) before starting the host, fixing Pi reboots that hit "FATAL: Container runtime failed to start".
- **[#4026](https://github.com/nanocoai/nanoclaw/pull/4026)** — `ncl groups restart --id <other group>` from an agent now restarts the target instead of the caller (fixes #3911).
- **[#3980](https://github.com/nanocoai/nanoclaw/pull/3980)** — Setup's first-chat ping no longer scores a "run failed" notice as a working assistant.

---

## 4. Community Hot Topics

### Most-Referenced Issues

| Issue | Author | Status | Comments | Core Need |
|---|---|---|---|---|
| [#3643](https://github.com/nanocoai/nanoclaw/issues/3643) | glifocat | OPEN | 2 | **High-priority bug**: Hardcoded 30-minute `ABSOLUTE_CEILING_MS` cold-kills long local-model turns with no config override. Local-model users running long agentic tasks have no way to extend the timeout. |
| [#3569](https://github.com/nanocoai/nanoclaw/issues/3569) | shachartal | OPEN | 1 | Telegram messages with an **odd number of underscores** never deliver because `@chat-adapter/telegram@4.29.0` is pinned while upstream fixed this in 4.32.0. |
| [#3223](https://github.com/nanocoai/nanoclaw/issues/3223) | chiptoe-svg | OPEN | 1 | Scheduled-task errors produce an unroutable message that is silently dropped — operators never know a task failed. |
| [#3301](https://github.com/nanocoai/nanoclaw/issues/3301) | glifocat | OPEN | 1 | Since #2988, tasks firing inside chat sessions switch the query into "one-door" task mode, eating replies and dropping logs. |
| [#4027](https://github.com/nanocoai/nanoclaw/issues/4027) | antonio-antuan | OPEN | 0 | Coordinator agents that created child agents cannot restart or reset them — `cli_scope: group` blocks foreign `--id`. |

### Analysis

The recurring theme across the top issues is **operator observability and control**: long-running local turns being killed silently, task failures disappearing, Telegram message delivery being non-deterministic based on content, and coordinator agents lacking lifecycle management over their children. The Telegram underscore bug (#3569) is particularly insidious because it's content-dependent — some users hit it constantly, others never notice — and the fix exists upstream but isn't backported. Issue #4027 signals an emerging use case (coordinator/worker agent patterns) that the current CLI guard model doesn't anticipate.

---

## 5. Bugs & Stability

### Critical / High Severity

| Issue | Severity | Fix Status |
|---|---|---|
| [#3643](https://github.com/nanocoai/nanoclaw/issues/3643) — Hardcoded 30-min ceiling kills long local-model turns | **High** | No fix PR yet. The `ABSOLUTE_CEILING_MS` constant has no config seam. Local-model users are blocked on long agentic tasks. |
| [#4004](https://github.com/nanocoai/nanoclaw/issues/4004) — Update cutover crashes when update bumps tsx or esbuild | **High** (closed, triage/unresolved) | Closed without resolution — the cutover path is fragile when build tooling changes. May resurface in the 2026.10.0 rollout. |
| [#4021](https://github.com/nanocoai/nanoclaw/issues/4021) — macOS update: `stopService` returns before host exits, snapshot races shutdown | **High** | No fix PR yet. Directly caused a failed 2.3.0→2.4.0 cutover on macOS. |
| [#4020](https://github.com/nanocoai/nanoclaw/issues/4020) — `escapeXml` never reversed, replies show `&amp;` instead of `&` | **Medium** | No fix PR yet. Affects any reply that quotes user text containing XML-special characters. |
| [#3569](https://github.com/nanocoai/nanoclaw/issues/3569) — Telegram odd-underscore messages never deliver | **Medium** | No fix PR yet, but upstream fix exists (chat-adapter 4.32.0). A dependency bump is needed. |

### Security

| Issue | Status |
|---|---|
| [#2970](https://github.com/nanocoai/nanoclaw/issues/2970) — Local action forgery via unauthenticated forwarded gateway loopback webhook | **Closed**. Advisory documented; the localhost-only webhook did not authenticate senders. Remediation path unclear from issue alone. |

### Notable: Baileys Message-Spoofing

PR [#4024](https://github.com/nanocoai/nanoclaw/pull/4024) closed a critical advisory (GHSA-qvv5-jq5g-4cgg) by pinning Baileys to `7.0.0-rc14`. This is a security-sensitive fix that touches the WhatsApp skill payload — and was paired with PR [#4007](https://github.com/nanocoai/nanoclaw/pull/4007) to make skill-pinned npm versions visible to Dependabot, since they previously lived outside the root lockfile and were invisible to `pnpm audit`.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Version |
|---|---|---|
| Let agents restart and clear agents they created | [#4027](https://github.com/nanocoai/nanoclaw/issues/4027) | **Medium-High** — coordinator/worker patterns are an obvious next step; the `--id` guard refactor in PR #4026 is a related prerequisite. |
| Configurable turn timeout for local models | [#3643](https://github.com/nanocoai/nanoclaw/issues/3643) | **Medium** — high-priority but no PR yet; may land as a config option rather than a hardcoded constant. |
| Scheduled-task error routing | [#3223](https://github.com/nanocoai/nanoclaw/issues/3223) | **Medium** — design issue ("task messages carry no routing fields by design") may require more than a bug fix. |
| Update channel infrastructure | [#3986](https://github.com/nanocoai/nanoclaw/pull/3986) | **Shipped** in rc.1 |

The v2026.10.0-rc.1 release and the update-channel work (#3986, #3988) signal that **operational maturity** is the current roadmap priority — making updates safe, predictable, and observable is the theme, not new agent capabilities.

---

## 7. User Feedback Summary

**Pain points evident from the issue/PR data:**

- **Local-model users** feel blocked by the hardcoded 30-minute ceiling (#3643). This is the only high-priority open bug and has no workaround.
- **Telegram users** are hitting content-dependent message loss (#3569, #4029) — the underscore issue is a known upstream fix that hasn't been backported, and the `mailto:` autolink issue (#4029) is a related parsing gap.
- **macOS updaters** had a real failure (#4021) where the update mechanism raced its own shutdown and cost a cutover attempt. The fix exists as a PR (#4019 for Docker wait on systemd) but the macOS-specific race still lacks a merged

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>



# NullClaw Project Digest — 2026-10-05

## 1. Today's Overview
Over the last 24 hours, NullClaw has experienced high maintenance activity focused heavily on hardening platform stability, particularly for Android (Termux) and macOS CLI streams. While no new software releases were published, the repository shows a strong health indicators with a high volume of critical bug fixes merged (PR #1006, PR #966) and rigorous test coverage added (PR #1019). Activity is heavily driven by a single active contributor (`vernonstinebaker`) who is systematically addressing silent failures, Docker deployment blockers, and developer workflow issues. 

## 2. Releases
*No new releases were published during this period.*

## 3. Project Progress
The project has advanced significantly by closing critical stability pull requests:
*   **Streamed CLI stdout fix (PR #1006 - Closed):** Fixed a bug where streamed CLI stdout was written at offset zero on macOS, corrupting the first byte of output (e.g., printing `pong` with a corrupted first line). Streamed output now correctly appends.
*   **Android HTTP fallback fix (PR #966 - Closed):** Resolved a long-standing issue (open since June 2026) where Zig 0.16’s stdlib HTTP path failed DNS resolution on `aarch64-linux-android` (Termux) by securing a robust, buffered curl fallback.
*   **Transport Test Hardening (PR #1019 - Open):** Adds byte-exact integrity coverage for the HTTP curl transport, testing large payloads crossing the 8 KiB read buffer, preserved request bodies, and state isolation between calls.

## 4. Community Hot Topics
*   **Termux Agent Output Corruption (Issue #1018 - 2 comments):** Users reported that agent output on Android (`aarch64-linux-android`) was silently scrambled or truncated, yet returned exit code 0 with no logged errors. This is a highly deceptive bug that masks failures. 
    *   *Link:* [nullclaw/nullclaw Issue #1018](https://github.com/nullclaw/nullclaw/issues/1018)
    *   *Underlying Need:* Reliable, verifiable execution of AI agents on mobile CLI environments like Termux without silent data degradation.
*   **Docker Gateway Permission Block (Issue #1017 - 1 comment):** The containerized gateway fails immediately with an `AccessDenied` error because the `/nullclaw-data` directory is owned by `root` while the application runs as uid `65534`.
    *   *Link:* [nullclaw/nullclaw Issue #1017](https://github.com/nullclaw/nullclaw/issues/1017)
    *   *Underlying Need:* Out-of-the-box compatibility for standard Docker desktop setups without requiring complex permission overrides or user mapping configurations.
*   **Git Worktree Pre-Push Failures (Issue #1020 & PR #1021 - 0 comments):** The `.githooks/pre-push` hook fails when run from a git worktree because inherited environment variables (`GIT_DIR`) leak into git-spawning tests.
    *   *Link:* [nullclaw/nullclaw Issue #1020](https://github.com/nullclaw/nullclaw/issues/1020) | [PR #1021](https://github.com/nullclaw/nullclaw/pull/1021)
    *   *Underlying Need:* Support for documented maintainer workflows (worktrees) during standard git operations.

## 5. Bugs & Stability
Bugs reported or addressed today are ranked by severity below:

1.  **CRITICAL: Docker Gateway Access Denied (Issue #1017 - OPEN)**
    *   *Symptom:* Container exits immediately due to root-owned `/nullclaw-data` folder preventing write access for uid 65534.
    *   *Status:* Open. No merged fix PR yet, representing a critical blocker for local Docker deployments.
    *   *Link:* [Issue #1017](https://github.com/nullclaw/nullclaw/issues/1017)
2.  **HIGH: Termux Scrambled Agent Output (Issue #1018 - CLOSED)**
    *   *Symptom:* Agent returns scrambled/truncated strings on Termux with exit code 0, hiding errors from the user.
    *   *Status:* Closed (likely resolved via transport fixes in PR #966).
    *   *Link:* [Issue #1018](https://github.com/nullclaw/nullclaw/issues/1018)
3.  **MEDIUM: Git Worktree Hook Failure (Issue #1020 - OPEN)**
    *   *Symptom:* `.githooks/pre-push` fails when pushed from a worktree due to `GIT_DIR` environment leakage.
    *   *Status:* Open, but a fix PR (#1021) is drafted to clear inherited environment variables before test runs.
    *   *Links:* [Issue #1020](https://github.com/nullclaw/nullclaw/issues/1020) | [Fix PR #1021](https://github.com/nullclaw/nullclaw/pull/1021)
4.  **LOW/MEDIUM: macOS Streamed stdout Corruption (PR #1006 - CLOSED)**
    *   *Symptom:* Trailing newlines overwrote the first byte of streamed replies on macOS pipes.
    *   *Status:* Fixed (streamed stdout now appends correctly).
    *   *Link:* [PR #1006](https://github.com/nullclaw/nullclaw/pull/1006)

## 6. Feature Requests & Roadmap Signals
While no explicit user-requested features were opened today, the technical trajectory points to specific roadmap areas:
*   **Observability & Debugging (PR #1004 - Open):** Focuses on logging secret-scrubbed provider error bodies on non-2xx responses. This signals a push toward better out-of-the-box debugging for AI model providers (

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



Here is the structured project digest for IronClaw (`nearai/ironclaw`) as of **2026-10-05**.

---

### 1. Today's Overview
IronClaw’s activity in the last 24 hours is heavily dominated by automated dependency hygiene rather than active human development. No new releases or user-submitted issues were recorded today. However, five pull requests updated recently (four open, one closed), all managed by Dependabot. This indicates a highly automated, proactive maintenance cycle keeping the project's Rust toolchain, WebAssembly runtime, and GitHub Actions workflows securely up to date. Overall project health remains stable, with a clean slate of user-reported bugs.

### 2. Releases
*No new releases were published today.*

### 3. Project Progress
Today’s progress is strictly focused on automated dependency maintenance, which is crucial for long-term project stability and security:
*   **Closed PRs:** PR #8078 was closed, successfully bumping the `tokio-ecosystem` group (including `tower-http` and `tokio-tungstenite`).
*   **Open PRs (Pending Review):**
    *   **PR #8123:** Bumps the `tokio-ecosystem` group with 3 updates (including `tokio-test`).
    *   **PR #8114 (XL size):** A massive update bumping the `everything-else` group with 31 updates (including critical crates like `thiserror`, `uuid`, and `base64`).
    *   **PR #8103:** Bumps the GitHub Actions group with 8 updates (e.g., `actions/setup-node`, `claude-code-action`).
    *   **PR #7834 (L size):** Bumps the `wasm` group with 4 updates (including `wasmtime` and `wit-parser`).

No core application features or engine updates were merged today.

### 4. Community Hot Topics
Community interaction is quiet today. There are no active issues, and the tracked pull requests show zero comments or 👍 reactions. The lack of human-to-human interaction suggests the community is currently in a low-activity phase, relying on automated bots to keep the repository ticking over.

### 5. Bugs & Stability
*No bugs, crashes, or regressions were reported today.* The project currently has zero open issues, indicating a highly stable current build or a quiet period for external bug reports. The ongoing updates to test frameworks like `tokio-test` (via PR #8123) suggest the project's automated test suite is being kept modern.

### 6. Feature Requests & Roadmap Signals
No user feature requests were filed today. However, looking at the technical signals:
*   The persistent updates to the WebAssembly group (**PR #7834**, updating `wasmtime`, `wasmtime-wasi`, `wit-component`, and `wit-parser`) show that the project's roadmap is heavily investing in WASI capabilities. This is a key signal for future plugin architectures, sandboxed tool execution, and edge-deployable AI agent logic.

### 7. User Feedback Summary
There is no direct user feedback to summarize for this 24-hour window. User satisfaction metrics cannot be derived due to the lack of open issues or comments.

### 8. Backlog Watch
Maintainers should monitor the integration of large dependency updates to prevent subtle regressions:
*   **PR #8114 (XL size, 31 updates):** While low risk in terms of code logic, merging 31 dependency updates at once can hide breaking changes. It needs thorough CI pipeline validation before merging.
*   **PR #7834 (L size, WASM updates):** Open since August 23, 2026. This medium-risk update to the WASM toolchain should be prioritized for merging to keep the project's WebAssembly capabilities aligned with the latest host standards.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



Based on the GitHub activity for **LobsterAI** (`netease-youdao/LobsterAI`) up to October 4, 2026, here is the structured project digest for October 5, 2026.

---

### 1. Today's Overview
LobsterAI shows active development, particularly focused on frontend UI/UX refinements, artifact handling, and expanding the Model Context Protocol (MCP) integration capabilities. Over the last 24 hours, there were 6 pull requests (3 open, 3 closed) and 5 issues updated (3 open, 2 closed). While feature development and UI enhancements are moving steadily forward, the project continues to battle a backlog of critical stability issues related to the agent engine and task scheduler that remain stale and unresolved since March 2026.

### 2. Releases
*   **No new releases** were published today. 

### 3. Project Progress
The project has successfully merged or closed 3 pull requests today, shifting focus heavily toward MCP extensibility and UI/UX improvements:
*   **MCP Tool Filter & Parallelism Sync ([PR #2710](https://github.com/netease-youdao/LobsterAI/pull/2710)):** Synced per-server `toolFilter` configurations and `supportsParallelToolCalls` support to OpenClaw, allowing sessions to load only the specific MCP tools they need.
*   **MCP Tool Picker ([PR #2789](https://github.com/netease-youdao/LobsterAI/pull/2789)):** Introduced a new MCP tool picker interface, giving users granular control over which tools are active.
*   **New Preset Agent Templates ([PR #1008](https://github.com/netease-youdao/LobsterAI/pull/1008)):** Expanded the library with 6 new preset agent templates to cover more vertical use cases.
*   **UI Refinements:** Active work (open PRs #2792, #2791, #2790) is currently targeting the renderer, improving model catalog navigation (collapsible families, search), prompt readability, and artifact path resolution.

### 4. Community Hot Topics
The community focus is split between integration work and core stability troubleshooting:
*   **Agent Engine Reliability ([Issue #1007](https://github.com/netease-youdao/LobsterAI/issues/1007)):** Users report frequent, frustrating infinite restart loops of the Agent Engine. This is the most commented and viewed stability concern.
*   **Scheduler Logic Flaws ([Issues #837](https://github.com/netease-youdao/LobsterAI/issues/837) & [#850](https://github.com/netease-youdao/LobsterAI/issues/850)):** Users are reporting critical scheduling bugs—tasks executing despite being disabled, and tasks permanently failing after an exception (such as occurring during a locked screen state) until a manual restart is performed.
*   **Notion MCP Integration ([Issue #1003](https://github.com/netease-youdao/LobsterAI/issues/1003)):** Users attempting to connect to Notion via the MCP Bridge are hitting 401 authentication errors due to environment variables not being passed correctly through the spawn configuration.

### 5. Bugs & Stability
Today's reported bugs are highly severe, affecting core automation and engine stability. No direct code fix PRs were merged today specifically to resolve these legacy scheduler bugs:
*   **Critical: Infinite Agent Engine Restarts ([#1007](https://github.com/netease-youdao/LobsterAI/issues/1007))** — Core engine loop crash. *Status: Closed (Stale), likely awaiting user validation.*
*   **High: Scheduled Task Failures & State Lock ([#837](https://github.com/netease-youdao/LobsterAI/issues/837))** — Tasks fail silently after encountering an exception (e.g., during screen lock), blocking subsequent schedules. *Status: Open (Stale).*
*   **High: Scheduler Triggering Disabled Tasks ([#850](https://github.com/netease-youdao/LobsterAI/issues/850))** — Logic bug where disabling tasks does not stop them from executing. *Status: Open (Stale).*
*   **Medium: Notion MCP Bridge Auth Failures ([#1003](https://github.com/netease-youdao/LobsterAI/issues/1003))** — Environment variable inheritance failure in the MCP Bridge wrapper. *Status: Closed (Stale).*

### 6. Feature Requests & Roadmap Signals
The transition of PRs today hints at a clear roadmap focusing on **granular tool control** and **interface scalability**:
*   **MCP-Centric Tooling:** The merge of tool filters (#2710) and tool pickers (#2789) indicates that modular, per-session tool management is a major product requirement.
*   **Per-Task Model Routing ([#856](https://github.com/netease-youdao/LobsterAI/issues/856)):** Users are requesting the ability to assign specific models to specific tasks (e.g., a powerful model for coding, a fast/cheap model for cron summaries), rather than globally switching the system-wide model. This is likely a high-priority roadmap item.
*   **Documentation Sync ([#856](https://github.com/netease-youdao/LobsterAI/issues/856)):** Demands for updated official documentation matching new releases (like "openclawd") suggest a need for tighter docs-as-code updates alongside feature rollouts.

### 7. User Feedback Summary
*   **Pain Points:** The primary friction points for users are the lack of robust background scheduling (fragile state handling during locks/errors) and the core engine stability (infinite loops). Additionally, developer-config hurdles like passing env vars to spawned child processes in the MCP bridge block advanced integrations.
*   **Use Cases:** Power users are heavily looking to utilize LobsterAI for automated, unattended background operations (scheduled agents), but are currently blocked by scheduler robustness. Concurrently, advanced users are pushing the boundaries of external tool integration via MCP.
*   **Sentiment:** Cautiously optimistic on feature growth, but highly frustrated with the stability backlog. The stale status of critical March bugs suggests a need for maintainers to prioritize bug triation over UI polish.

### 8. Backlog Watch
The following items represent critical, long-standing gaps requiring maintainer intervention or official response:
*   **Agent Engine Infinite Loop ([#1007](https://github.com/netease-youdao/LobsterAI/issues/1007)):** Over 6 months old. Needs a systematic code review into what triggers the restart loop and why the configuration workaround suggested in the issue does not reliably resolve it.
*   **Scheduler Exception Handling ([#837](https://github.com/netease-youdao/LobsterAI/issues/837)):** Needs a state-reset mechanism so that a single failed task does not poison the queue, especially during OS-level sleep/lock states.
*   **Task Disable Logic ([#850](https://github.com/netease-youdao/LobsterAI/issues/

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



Based on the GitHub activity for **CoPaw (agentscope-ai/QwenPaw)** up to October 4, 2026, here is the structured project digest dated **2026-10-05**.

---

### 1. Today's Overview
CoPaw is experiencing high triage and development activity, with 11 active issues and 8 open/closed pull requests updated in the last 24 hours. While no new releases were published today, the project shows strong community health, driven heavily by first-time contributors submitting fixes for critical containerized runtime issues, console boot reliability, and API wrapper compatibility. The project maintainers are actively reviewing architectural bugs, particularly around plugin isolation and memory exhaustion.

---

### 2. Releases
*   **No new releases** were published today. 

---

### 3. Project Progress
*   **Closed/Merged PRs:** 
    *   **PR #7299 (CLOSED/Under Review)** by `chrischen-coder`: Rejects conflicting chat payloads on `POST /api/console/chat` to prevent silent SSE stream hijacking when multiple concurrent runs are triggered.
*   **Active Fixes in PRs:**
    *   **Console Boot Reliability:** PR #8102 introduces a boot watchdog with a user

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest – 2026-10-05

## 1. Today's Overview
ZeroClaw remains highly active with 42 issues and 50 pull requests updated in the last 24 hours, though no new releases were published. All 42 updated issues are open, indicating a growing backlog, while 47 of 50 PRs remain open and only 3 were merged/closed. The project shows strong community engagement, but the high volume of open items and the presence of several critical bugs (including a data-loss issue) suggest maintainers may face a review bottleneck. Overall, development velocity is high, but stability and responsiveness to critical reports will be key to project health.

## 2. Releases
No new releases in the last 24 hours.

## 3. Project Progress
While specific merged PRs are not detailed in the provided data, 3 PRs were merged or closed today, indicating some forward movement. Several long-running PRs are advancing, including:
- **#9320** – `fix(cron): bound agent job runs with a wall-clock timeout` (open since 2026-07-23) – addresses cron job reliability.
- **#9214** – `feat(eval): live execution mode with sandboxed tool surface` (open since 2026-07-20) – enhances evaluation capabilities.
- **#9002** – `fix(gateway): keep agent turns alive after viewer disconnect` (open since 2026-07-11) – improves gateway resilience.

These are still open but represent significant in-progress work. The 3 merged/closed PRs likely include smaller fixes or documentation updates, but details are unavailable.

## 4. Community Hot Topics
The most commented issues reveal key areas of community concern:

- **#9965** – [Task]: harden runtime-written executable test fixtures under the parallel runtime gate (14 comments)  
  https://github.com/zeroclaw-labs/zeroclaw/issues/9965  
  *Need:* Robustness of test infrastructure under parallel execution.

- **#5287** – [Feature]: define a compact local_small runtime profile and prompt-budget contract (9 comments, 2 👍)  
  https://github.com/zeroclaw-labs/zeroclaw/issues/5287  
  *Need:* Better support for local models with reduced prompt bloat and controlled output.

- **#7432** – [Tracker]: Runtime and gateway delivery - v0.8.6 and v0.9.0 (6 comments)  
  https://github.com/zeroclaw-labs/zeroclaw/issues/7432  
  *Need:* Coordination of complex runtime and gateway architecture changes.

- **#10495** – [Bug]: Config::save() can replace an operator's populated config.toml with a near-empty file (5 comments)  
  https://github.com/zeroclaw-labs/zeroclaw/issues/10495  
  *Need:* Critical data-loss prevention and config reliability.

- **#11420** – [Bug]: SQLite session backend rewrites created_at of every message on each turn (4 comments)  
  https://github.com/zeroclaw-labs/zeroclaw/issues/11420  
  *Need:* Data integrity for session timestamps.

Other notable hot topics include **#11418** (Copy feature broken), **#10673** (ACP turn persistence), **#10700** (cost tracking granularity), and **#10876** (gateway config auth propagation). The underlying needs are a mix of critical bug fixes, security, and improved local/edge support.

## 5. Bugs & Stability
Ranked by severity:

- **S0 – Data Loss/Security Risk:**  
  **#10495** – `Config::save()` can replace a populated config with a near-empty file.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/10495  
  *Fix PR exists:* **#11527** – `fix(config): refuse unproven full saves over existing files` (open).  
  https://github.com/zeroclaw-labs/zeroclaw/pull/11527

- **S1 – Workflow Blocked:**  
  **#11418** – Copy one-click feature not working.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/11418  
  *Fix PR exists:* **#11529** – `fix(zerocode): use local Linux clipboard writers and report copy outcomes` (open).  
  https://github.com/zeroclaw-labs/zeroclaw/pull/11529  
  **#10673** – Failed ACP turns not persisted on daemon RPC path.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/10673  
  **#10536** – macOS Seatbelt ignores configured `allowed_roots` for shell commands.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/10536  
  **#11525** – Quickstart fails on Android/Termux.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/11525

- **S2 – Degraded Behavior:**  
  **#11420** – SQLite session timestamps lost on each turn.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/11420  
  **#10700** – Cost records carry daemon-lifetime session id, preventing per-conversation spend.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/10700  
  **#9190** – Reliable provider API key rotation selects but cannot apply alternate keys.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/9190  
  **#11371** – MCP nested object argument serialized as string.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/11371  
  **#11515** – Cost ledger drops torn-write records from rollups.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/11515  
  **#11517** – Web chat reload mid-turn drops user prompt.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/11517  
  **#10301** – ZeroCode Code pane session history hard to navigate.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/10301  
  **#11484** – ZeroCode Agent turns disable repetitive-tool safeguards.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/11484

- **S3 – Minor Issue:**  
  **#11416** – Slack "is thinking…" status no longer shown in channel threads.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/11416

- **Other:**  
  **#10728** – npm audit failed (high severity, js-yaml).  
  https://github.com/zeroclaw-labs/zeroclaw/issues/10728

Many bugs have corresponding fix PRs already open, indicating active triage.

## 6. Feature Requests & Roadmap Signals
Prominent feature requests include:

- **#5287** – Compact `local_small` runtime profile (status: accepted, high risk) – likely to improve local-first experience.
- **#7432** – Tracker for v0.8.6 and v0.9.0 runtime/gateway delivery (explicitly tied to releases).
- **#8383** – Show active runtime context in ZeroCode Dashboard (in-progress).
- **#7951** – Effort-based local/cloud model routing (parking-lot, but high interest).
- **#10892** – Publish canonical config generations and track per-target apply results (accepted).
- **#8527** – Route large generated files through channel attachments (icebox, but useful).
- **#11442** – Retire legacy native tool adapters after verified replacements (follow-up).
- **#11492** – Improve action discovery in ZeroCode client settings (in-progress).

**Prediction:** The next releases (v0.8.6 and v0.9.0) will likely include items from tracker **#7432**, plus fixes for **#11416** (Slack status) and **#11371** (MCP argument), as they are tagged `release:v0.8.6`. The `local_small` profile (**#5287**) and config generation tracking (**#10892**) may land in later versions given their complexity.

## 7. User Feedback Summary
Users are reporting significant pain points, particularly around data integrity and usability:

- **Data Loss:** Config file replacement (#10495) is a severe trust issue.
- **Usability:** Copy feature broken (#11418), Slack status missing (#11416), web chat prompt loss (#11517), and ZeroCode navigation difficulties (#10301) frustrate daily workflows.
- **Platform Support:** Quickstart fails on Android/Termux (#11525), limiting mobile/edge use.
- **Security/Config:** macOS Seatbelt ignores allowed_roots (#10536) undermines security expectations.
- **Observability:** Cost tracking is not per-conversation (#10700), hindering budget management.
- **Reliability:** Provider key rotation fails (#9190) and cron jobs lack timeouts (#9320).

Satisfaction appears mixed: while users are actively filing detailed issues, the volume of critical bugs suggests frustration. However, the quick appearance of fix PRs (e.g., #11527, #11529) shows the maintainers are responsive.

## 8. Backlog Watch
Several important issues and PRs have been open for months with limited progress and need maintainer attention:

**Issues:**
- **#5287** (2026-04-04) – local_small profile – 9 comments, 2 👍.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/5287
- **#7432** (2026-06-09) – Runtime/gateway tracker – 6 comments.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/7432
- **#8383** (2026-06-27) – Runtime context in Dashboard – 3 comments.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/8383
- **#7951** (2026-06-19) – Effort-based routing – 2 comments.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/7951
- **#8527** (2026-06-30) – Route large files – 1 comment.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/8527

**PRs:**
- **#9320** (2026-07-23) – cron timeout – needs author action.  
  https://github.com/zeroclaw-labs/zeroclaw/pull/9320
- **#9214** (2026-07-20) – live eval mode – needs author action.  
  https://github.com/zeroclaw-labs/zeroclaw/pull/9214
- **#9002** (2026-07-11) – gateway turn survival – needs author action.  
  https://github.com/zeroclaw-labs/zeroclaw/pull/9002
- **#10698** (2026-09-07) – guided cron editor – stale-candidate.  
  https://github.com/zeroclaw-labs/zeroclaw/pull/10698
- **#10768** (2026-09-10) – Sendblue iMessage/SMS channel – stale-candidate.  
  https://github.com/zeroclaw-labs/zeroclaw/pull/10768

These items represent significant features or fixes that may be stalled due to review capacity or author inactivity. Prioritizing them could unlock further progress.

---
*This digest is based solely on the provided GitHub data snapshot for 2026-10-05.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*