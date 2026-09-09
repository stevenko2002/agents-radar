# AI CLI Tools Community Digest 2026-09-10

> Generated: 2026-09-09 22:15 UTC | Tools covered: 12

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [ComfyUI](https://github.com/comfyanonymous/ComfyUI)
- [Ollama](https://github.com/ollama/ollama)
- [llama.cpp](https://github.com/ggerganov/llama.cpp)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Today’s Highlights — 2026-09-10

*   **Claude Code (v2.1.267):** Introduced a `maxEffortLevel` setting to cap compute effort across providers (Bedrock, Vertex, Foundry) and added a flag to refresh system prompts on every request ([link](https://github.com/anthropics/claude-code)).
*   **OpenAI Codex (rust-v0.154.0-alpha11):** Focused on stabilizing the Windows Desktop experience and cross-platform synchronization; includes a PR to ensure saved threads are restored after daemon restarts ([link](https://github.com/openai/codex)).
*   **Gemini CLI (v0.61.0-nightly):** Released fixes for sandbox isolation and addressed NTFS short-name (SFN) path issues on Windows ([link](https://github.com/google-gemini/gemini-cli)).
*   **ComfyUI (v0.35.0):** Released major partner node updates including support for Recraft V4 Styles, WAN models, while removing retiring Google Veo 2/3.0 models ([link](https://github.com/comfyanonymous/ComfyUI)).
*   **OpenCode (v1.18.30):** Introduced native support for GPT-6 models via the Astra system prompt and implemented a massive cleanup of SQLite-related issues ([link](https://github.com/anomalyco/opencode)).
*   **llama.cpp (b10871):** Added a dedicated `iq4_xs` mat-vec shader for Vulkan, providing a 6-17% token generation boost on RDNA4 hardware ([link](https://github.com/ggerganov/llama.cpp)).
*   **Qwen Code (v0.23.2):** Improved split-view session navigation in the web shell and addressed a critical `conhost.exe` memory leak on Windows ([link](https://github.com/QwenLM/qwen-code)).
*   **Ollama (v18333):** Merged a major PR introducing native Intel SYCL (oneAPI) backend support for Intel Discrete GPUs ([link](https://github.com/ollama/ollama)).

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills: Community Analysis Report
**Date:** 2026-09-10

This report analyzes the current state of the `anthropics/skills` repository, focusing on community-driven development, emerging trends, and critical technical bottlenecks.

---

### 1. Top Skills Ranking (Most Discussed PRs)
The following Pull Requests are generating the most community engagement, representing a mix of infrastructure fixes and specialized capabilities.

*   **[#1298] fix(skill-creator): run_eval.py always reports 0% recall**
    *   **Functionality:** Addresses a critical bug where the evaluation loop reports 0% recall for all skill descriptions, causing the optimization loop to fail.
    *   **Discussion Highlights:** High priority; users report that the system is currently "optimizing against noise." Includes fixes for Windows-specific streaming and parallel worker issues.
    *   **Status:** `OPEN` ([Link](https://github.com/anthropics/skills/PR/1298))
*   **[#1615] Add scnet-hpc skill**
    *   **Functionality:** A specialized skill for operating SCNet HPC clusters using profile-based SSH, Slurm workflows, and compute node discovery.
    *   **Discussion Highlights:** Represents a push toward high-performance computing niche use cases.
    *   **Status:** `OPEN` ([Link](https://github.com/anthropics/skills/PR/1615))
*   **[#1367] feat(skills): add self-audit — mechanical verification + four-dimension reasoning gate**
    *   **Functionality:** A quality gate skill that audits AI output before delivery, verifying file existence and performing a tiered reasoning audit.
    *   **Discussion Highlights:** Focused on reducing "AI hallucinations" and ensuring reliability.
    *   **Status:** `OPEN` ([Link](https://github.com/anthropics/skills/PR/1367))
*   **[#1628] Add Hivemind: Zero-Cost Multi-Agent Orchestration**
    *   **Functionality:** Allows Claude Code to delegate mechanical tasks to headless free models (via opencode) while the primary model acts as the planner/reviewer.
    *   **Discussion Highlights:** High interest in cost-efficiency and multi-agent orchestration.
    *   **Status:** `OPEN` ([Link](https://github.com/anthropics/skills/PR/1628))
*   **[#514] Add document-typography skill**
    *   **Functionality:** Prevents common AI formatting errors like orphan words, widows, and numbering misalignment in generated documents.
    *   **Discussion Highlights:** Highlights a demand for "professional-grade" output that standard Claude often overlooks.
    *   **Status:** `OPEN` ([Link](https://github.com/anthropics/skills/PR/514))

---

### 2. Community Demand Trends
Based on active Issues and PRs, the community is prioritizing three key functional areas:

*   **Advanced Document Management & Formatting:** There is significant demand for skills that handle complex file formats natively. This includes **ODT (OpenDocument)** support ([#486]), deep **DOCX corruption fixes** ([#541]), and detection of **orphaned comments** ([#1734]). 
*   **Meta-Skills & Governance:** Users are asking for "Skills that manage Skills." Proposals like `skill-quality-analyzer` ([#83]) and `agent-governance` ([#412]) suggest the community wants automated ways to verify the security and quality of agents.
*   **Platform Parity (Windows Support):** A recurring pain point in the community is the failure of `skill-creator` scripts on Windows ([#1099], [#1050]), specifically regarding pipe-reading crashes and `PATHEXT` issues (`.cmd` resolution), hindering local skill development.

---

### 3. High-Potential Pending Skills
These Skills have active community discussion and are likely to be integrated into the ecosystem soon:

*   **[#1628] Hivemind (Multi-Agent Orchestration):** A highly anticipated method for offloading "work" to cheaper models to save tokens.
*   **[#1627] Buffer API Skill:** A portable skill for social media scheduling and analysis via the Buffer API.
*   **[#1595] UIZZE (UI Quality Control):** A partner skill designed to prevent "UI slop" by enforcing specific product design states and hard-finish gates.

---

### 4. Skills Ecosystem Insight
The community is moving beyond simple "prompt wrappers" toward **complex agentic orchestration and rigorous quality gates**, prioritizing skills that can self-audit and manage multi-model workflows.

---

# Claude Code Community Digest — 2026-09-10

## 1. Today’s Highlights
Two point releases shipped in the last 24 hours: **v2.1.267** adds a `maxEffortLevel` cap and a fresh‑prompt rendering flag, while **v2.1.266** fixes a gateway‑sign‑in regression introduced in 2.1.265. The most active discussion is on a Windows‑only Cowork breakage (#92984) caused by a recent KB update, drawing 23 comments and 10 👍. A large batch of stale issues was closed, highlighting ongoing triage of older bug reports.

## 2. Releases
- **v2.1.267**  
  - Added `maxEffortLevel` setting (top‑level or per‑model under `modelSettings`) to cap effort on all providers (Bedrock, Vertex, Foundry); users may still choose lower levels.  
  - Added `--system-prompt-snapshot off` to render the system prompt fresh on every request.  
- **v2.1.266**  
  - Fixed a 2.1.265 regression where the undocumented `CLAUDE_CODE_USE_GATEWAY` env var began forcing Cloud‑gateway sign‑in on its own, breaking LLM‑gateway/proxy setups that lacked both `ANTHROPIC_BASE_URL` and `ANTHROPIC_AUTH_TOKEN`.

## 3. Hot Issues
1. **#92984** – [OPEN] Cowork (Windows): Plan9 shares fail after KB5124008 ([link](https://github.com/anthropics/claude-code/issues/92984))  
   *Why it matters:* Breaks Cowork file‑sharing for Windows users on a specific patch; 23 comments show strong community impact. Uninstalling the KB mitigates.  
2. **#83436** – [CLOSED] Cyber‑safeguard false positives on IR spectrometer calibration ([link](https://github.com/anthropics/claude-code/issues/83436))  
   *Why it matters:* Illustrates over‑broad safety filters blocking legitimate scientific computing; 12 comments, now stale‑closed.  
3. **#81693** – [CLOSED] Opus 5 context window reported as 200k instead of 1M ([link](https://github.com/anthropics/claude-code/issues/81693))  
   *Why it matters:* Statusline gauge saturates and `/compact` appears ineffective; affects capacity planning for long sessions.  
4. **#76237** – [CLOSED] Fable 5 missing from `/model` on Max20 ([link](https://github.com/anthropics/claude-code/issues/76237))  
   *Why it matters:* CLI stuck at `hasAvailableSubscription: false` after re‑login; macOS auth/model selection bug.  
5. **#79810** – [OPEN] Custom sidebar groups disappear after switching accounts ([link](https://github.com/anthropics/claude-code/issues/79810))  
   *Why it matters:* Desktop app state loss on account switch; 5 comments, 4 👍, still open.  
6. **#83639** – [CLOSED] v2.1.220 spuriously drops auth mid‑session ([link](https://github.com/anthropics/claude-code/issues/83639))  
   *Why it matters:* Intermittent “Not logged in” turns disrupt flow; stale‑closed but signals past instability.  
7. **#85150** – [CLOSED] Cross‑device session continuity request ([link](https://github.com/anthropics/claude-code/issues/85150))  
   *Why it matters:* Max business user requests persistent sessions across machines; enhancement now stale.  
8. **#85052** – [CLOSED] Opus 5 guardrails satisfiable by ceremony ([link](https://github.com/anthropics/claude-code/issues/85052))  
   *Why it matters:* 22 review rounds on missed pre‑dispatch defects; highlights autonomy‑quality concerns.  
9. **#84310** – [CLOSED] Sonnet 5 limited to 200K instead of 1M context ([link](https://github.com/anthropics/claude-code/issues/84310))  
   *Why it matters:* Same mis‑reporting class as #81693 for another model.  
10. **#74210** – [CLOSED] Remote MCP OAuth connector tool fetch fails ([link](https://github.com/anthropics/claude-code/issues/74210))  
    *Why it matters:* Spec‑compliant Streamable HTTP server works with static token but not OAuth path; integration friction.

## 4. Key PR Progress
No pull requests were updated in the last 24 hours (total PR items: 0). Hence no PR progress to report.

## 5. Feature Request Trends
Distilled from issue texts (including closed/stale enhancement requests):
- **Cross‑device / persistent session continuity** (#85150, implied by #79810).  
- **Reliable account switching & sign‑out** in desktop, Chrome extension, and mobile clients (#85159, #79810, #85144).  
- **Mobile draft persistence** – Android composer discards unsent text (#85131).  
- **Accurate model metadata** – correct 1M context reporting for Opus/Sonnet (#81693, #84310).  
- **Configurable / less restrictive safety classifiers** for legitimate sec‑sci workflows (#83436, #85777, #85157).  
- **Multi‑model orchestration tooling** feedback (#85082) shows appetite for cross‑model judging panels.

## 6. Developer Pain Points
Recurring frustrations observed across the batch:
- **Over‑broad cyber‑safeguard false positives** blocking legitimate coding/security/biology tasks (#83436, #85777, #85157, #85164).  
- **Context‑window misreporting** (200k vs native 1M) causing UI saturation and compact confusion (#81693, #84310).  
- **Auth/session stability** – mid‑session logout, stale subscription state, account‑switch side effects (#83639, #76237, #79810).  
- **Cowork mode reliability on Windows/Pro** – Plan9 mount failures (#92984) and missing HCS services (#85175).  
- **Mobile & client UX gaps** – draft loss on Android, no sign‑out in Chrome extension, sidebar unmount on Windows (#85131, #85159, #84035).  
- **Installation/upgrade friction** – npm global update leaves stub binary, no rollback (#85154).  

*Digest generated from github.com/anthropics/claude-code activity snapshot for 2026‑09‑10.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest: 2026-09-10

## Today's Highlights
The Codex ecosystem is currently focused on stabilizing the Windows Desktop experience and refining sub-agent orchestration. Significant updates have addressed critical cross-platform synchronization issues between Windows and Android, while new Rust-based alpha releases indicate rapid iteration on the underlying core engine's performance.

## Releases
- **rust-v0.154.0-alpha.11**: The latest alpha build for the Rust components, likely containing stability fixes from the previous ten iterations.
- **rust-v0.154.0-alpha.10.2**: A patch release within the v10 alpha cycle.
- **rust-v0.154.0-alpha.8** & **rust-v0.154.0-alpha.6.1**: Earlier alpha iterations in the current 0.154 branch.

## Hot Issues
1. **[Windows 11 Performance Issues (#20214)**: Users report the Codex App frequently freezes or stutters on Windows 11 Pro despite high-end hardware (32GB RAM). This is a high-priority item with 111 comments, suggesting a deep-seated resource management conflict.
2. **[Computer Use Screenshot Failure (#25178)**: A critical bug where `get_window_state` fails on Windows 10 when `SetIsBorderRequired` is called, effectively breaking the "Computer Use" feature's visual capabilities.
3. **[Token Consumption via Polling (#35259)**: Developers are reporting that Codex Desktop repeatedly re-enters the model just to wait or poll status, accounting for nearly 20% of raw local token usage in multi-agent workflows.
4. **[Subagent Notification Failure (#15723)**: A CLI-specific issue where background subprocesses do not wake the calling agent upon completion, disrupting automated `gpt-5.3-codex medium` workflows.
5. **[Session Storage Bloat (#34337)**: A major enhancement request where CLI and Desktop session storage can silently grow from GiB to hundreds of GiB or even TiB during normal use.
6. **[Windows/Android Sync Gap (#41470)**: New projects created on Windows are not appearing on the Android app, while mobile-started threads hit unexpected "trust gates" on the desktop.
7. **[Chrome Control Blocked (#41334)**: Users report that Chrome browser control is failing due to enforced policies, limiting the agent's browser capabilities.
8. **[Duplicate Process Stacks (#37453)**: On Windows, resuming historical subagent threads spawns duplicate MCP and `node_repl` processes, wasting system resources.
9. **[Unix-Socket Error (#42669)**: The Windows app launches but fails to show a window, citing a "Session host Unix-socket transport not available" error.
10. **[Quota Depletion Bug (#44211)**: A report where a user's usage quota dropped from 94% to 1% without any active tasks.

## Key PR Progress
1. **[Restore saved threads (#44314)**: PR ensures that saved threads are restored when the managed daemon restarts, allowing active goals to continue without requiring a client reconnect.
2. **[Honor Retry-After Deadlines (#44311)**: Fixes a bug where remote-control requests could bypass server-side `Retry-After` limits through auth changes or reconnects.
3. **[macOS CLI Candidates (#44307)**: Adds a tag-release workflow for opt-in provisioned macOS CLI for both Apple Silicon and Intel.
4. **[Record recovery candidates (#44299)**: Atomically saves persisted thread IDs during graceful daemon shutdowns to prevent state loss.
5. **[Set Turn Triggers (#44298)**: Populates `turn_trigger` metadata for guardian reviews and classifier requests to improve agent logic.
6. **[Isolate hook I/O timeouts (#44297)**: Prevents shell startup files from causing hangs by ensuring output is drained when `stdin` is blocked.
7. **[Enforce Guardian Input Budget (#44293)**: Ensures the async classifier accounts for the full request (including checkpoints and images) before sending to the model.
8. **[Allow goal pauses (#44290)**: Updates `update_goal` to accept a `paused` state, allowing agents to stop upon explicit user request.
9. **[Expand MXC Volume Grants (#44289)**: Fixes volume-root grants to include immediate children while preserving read-only carveouts.
10. **[Streamed Remote Compaction (#44255)**: Migrates manual and automatic remote compaction to the v2 implementation, retiring the legacy toggle.

## Feature Request Trends
- **Custom Worktree Backends**: High demand for users to use `Jujutsu (jj)` workspaces instead of the default `git worktree` in the Codex App.
- **Removal of Blocking Limits**: Developers are pushing to remove the recommended 60-second limit on blocking sleep/wait calls, which currently forces long-running commands into inefficient polling loops.
- **State Architecture Clarification**: Requests for public documentation on Codex's local state/trace behavior, specifically regarding overlaps with proprietary "AI Mirror Architecture" systems.

## Developer Pain Points
- **Windows Stability**: The Windows environment remains the most significant source of friction, from UI freezing to socket transport errors and path-formatting issues (backslash drops).
- **Resource Inefficiency**: The "silent growth" of session storage and the high token cost of status polling are major concerns for power users building multi-agent systems.
- **Subagent Communication**: The failure of subagents to "wake up" their parents is currently hindering complex, asynchronous automation workflows in the CLI.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-09-10

## 1. Today's Highlights
A quiet but focused day: the nightly release delivers sandbox isolation and Windows/NTFS path hardening. Community attention remains fixed on agent reliability — subagent failures being misreported as successes, generalist hangs, and session history corruption. The open PR pipeline is heaviest around sandbox filesystem hardening, prompt-injection defense, and fixing subtle session/git-config regressions.

---

## 2. Releases
**v0.61.0-nightly.20260909.ged2ac40df** — fixes include:
- `fix(core)`: Mitigate NTFS 8.3 short-name (SFN) path issues on Windows ([PR #29116](https://github.com/google-gemini/gemini-cli/pull/29116))
- `fix(cli)`: Isolate the settings directory inside sandbox containers ([PR #29216](https://github.com/google-gemini/gemini-cli/pull/29216))
- Additional core fix (release notes truncated)

---

## 3. Hot Issues (Noteworthy 10)

1. **[#22323 — Subagent MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** (13 comments, maintainer-only, P1) — A `codebase_investigator` that hits its turn cap reports `"success"`/`GOAL`, masking the interruption and hiding incomplete analysis. This is the community's most active thread because false success signals break trust in agent-driven workflows.

2. **[#21409 — Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)** (8 comments, 8 👍, P1) — Deferring to the generalist agent hangs indefinitely on simple tasks (folder creation). Users report waiting up to an hour; disabling subagent delegation is the only workaround. High 👍 signal suggests broad impact.

3. **[#25166 — Shell command stuck "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166)** (4 comments, 3 👍, P1) — Simple non-interactive CLI commands hang with the shell shown as active and "Awaiting user input" even after the process exits. Likely tied to interactive-terminal detection logic.

4. **[#21968 — Gemini doesn't proactively use skills/subagents](https://github.com/google-gemini/gemini-cli/issues/21968)** (6 comments) — Anecdotal but recurring: the model ignores installed custom skills/cli subagents unless explicitly instructed, even when descriptions clearly match the task (e.g., gradle/git skills).

5. **[#26525 — Add deterministic redaction; reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)** (5 comments, P2, security) — Auto Memory sends local transcripts into model context before the extraction prompt redacts secrets, and it logs skill contents. Privacy-sensitive design gap.

6. **[#26522 — Auto Memory retries low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** (4 comments, P2) — Sessions skipped as low-signal are never marked processed, so they resurface repeatedly, wasting extraction tokens.

7. **[#19873 — Zero-dependency OS sandboxing + intent routing for bash affinity](https://github.com/google-gemini/gemini-cli/issues/19873)** (9 comments, P2, large effort) — Proposes letting Gemini 3's native POSIX-tool proficiency run free inside a sandbox rather than constraining it, with post-execution intent routing to keep security.

8. **[#22745 — AST-aware file reads, search & mapping](https://github.com/google-gemini/gemini-cli/issues/22745)** (7 comments, feature epic) — Evaluates AST-aware tools for precise method-bound reads, fewer misaligned-read turns, and token reduction — a direct response to context "firehose" costs.

9. **[#24246 — 400 error with >128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)** (3 comments, P2) — A 400 error surfaces when tool counts exceed model limits; users expect smarter tool-scoping based on enabled features.

10. **[#23571 — Model scatters tmp scripts across directories](https://github.com/google-gemini/gemini-cli/issues/23571)** (3 comments, P2) — When restricted from shell execution, the model writes numerous edit scripts across the repo, creating heavy cleanup overhead before commits.

---

## 4. Key PR Progress (10 Standouts)

1. **[#29250 — Prevent indirect prompt injection via build-file modifications](https://github.com/google-gemini/gemini-cli/pull/29250)** (OPEN, XL) — Strengthens workspace-boundary validation for build configs and external command flags under restricted workspace mode, refactoring `shell`, `edit`, and `write_file` paths.

2. **[#29214 — Harden sandbox filesystem boundaries](https://github.com/google-gemini/gemini-cli/pull/29214)** (OPEN, L/XL) — Isolates sandbox runtime state from host config dirs, replaces host mounts with sanitized config files, and standardizes realpath resolution in path checks.

3. **[#29265 — Prevent session context poisoning on interrupted turns](https://github.com/google-gemini/gemini-cli/pull/29265)** (OPEN, P2/agent) — Fixes SIGINT/timeout/aborted-tool interruptions from corrupting chat history and breaking subsequent prompts — directly relevant to the hang/completion issues above.

4. **[#29266 — Stop complexity routing from overriding manual model selection](https://github.com/google-gemini/gemini-cli/pull/29266)** (CLOSED) — Ensures `CliComplexityBasedRouting` no longer replaces explicitly chosen paid/pro models (e.g., `chat-gemini-3-1-pro-preview`) with Gemini 2.5 Flash.

5. **[#29248 — Avoid duplicate slash-command history/telemetry](https://github.com/google-gemini/gemini-cli/pull/29248)** (OPEN) — Suppresses duplicate history/telemetry entries for confirmed actions (e.g., `/resume save <tag>`), even when interleaved with arriving messages.

6. **[#29163 — Prevent auth crash in macOS git repos](https://github.com/google-gemini/gemini-cli/pull/29163)** (OPEN, P1/security) — Stops startup crashes under macOS Seatbelt / restricted permissions when `useGitBranchName` mounts against `.git`.

7. **[#29156 — Stop nullifying user git config in shell exec](https://github.com/google-gemini/gemini-cli/pull/29156)** (OPEN, core) — Reverts `#28792`'s blanket `GIT_CONFIG_GLOBAL`/`SYSTEM` → `/dev/null` redirect that silently hid `user.name`/`user.email` from all shell tool commands.

8. **[#29155 — Correct BOM decoding in `isEmpty`](https://github.com/google-gemini/gemini-cli/pull/29155)** (OPEN) — UTF-16/UTF-32 plan files were decoded as UTF-8, yielding NUL characters that made whitespace-only files appear non-empty, breaking `validatePlanC…`.

9. **[#29151 — Case-insensitive skill precedence & active state](https://github.com/google-gemini/gemini-cli/pull/29151)** (OPEN, P1/agent) — Fixes `SkillManager` failing on case-mismatched skill names when applying workspace-over-built-in precedence and active-skill tracking.

10. **[#29063 — Plan Mode must not wait on feedback in non-interactive sessions](https://github.com/google-gemini/gemini-cli/pull/29063)** (CLOSED, P1) — Fixes `gemini -p "..." -y` Plan Mode runs hanging forever because workflow instructions demanded a user turn that never arrives.

---

## 5. Feature Request Trends
- **More proactive skill/subagent usage** (#21968): the model should autonomously invoke declared skills matching the task rather than only on explicit instruction.
- **AST-aware tooling** (#22745, #22746): precise method-bound reads, search, and codebase mapping to slash token bloat and misaligned reads.
- **Away from in-context task management** (#18836, #21000): deprecate `WriteToDo` for persistent, file-based task tracking (CRUD), with experiments using native file tools.
- **Agent self-awareness & safety** (#21432, #22672): accurate self-documentation of flags/hotkeys, plus guardrails against destructive git/DB operations.
- **Robustness & resilience** (#22232, #22323): automatic browser-session takeover/lock recovery and honest subagent failure accounting.

---

## 6. Developer Pain Points
- **Hangs and stalls** recur across surfaces: generalist agent (#21409), shell commands stuck at "Waiting input" (#25166), Plan Mode in non-interactive runs (#29063), and interactive scaffolds like `vite` (#22465).
- **False success signals**: subagents hitting limits report GOAL/success, eroding confidence in autonomous runs (#22323, #21763 missing subagent context in bug reports).
- **Context & token bloat**: baseline ~36.6k tokens/turn and "firehose" file reads drive demand for surgical extraction (#19561, #22745).
- **Privacy/security mismatches**: Auto Memory sends transcript content into model context pre-redaction (#26525); prompt injection via build files and untrusted flags (#29250).
- **Session/config continuity**: `/compress` not surviving resume (#21335), interrupted turns poisoning history (#29265), symlinked custom agents ignored (#20079), user git config silently stripped (#29156).
- **Tool-scaling limits**: 400 errors beyond ~128 tools and expectation of context-aware tool pruning (#24246).

*Data source: github.com/google-gemini/gemini-cli*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI — Community Digest (2026-09-10)

## 1. Today's Highlights

Patch release **v1.0.84-3** landed with two targeted fixes: `/copy` now includes task-completion messages, and OAuth-authenticated MCP servers connect reliably during session startup. The tracker saw a fresh wave of triaged issues (mostly filed Sep 7–9), with Windows-specific friction and theming bugs drawing the strongest community reaction, topped by the Windows session-archival requirement at **19 👍** (#4756). Both merged/open PRs this cycle are documentation updates, one of which directly documents an escape hatch for the recurring `400 input item ID` failure that multiple active issues report.

## 2. Releases

**v1.0.84-3** — two fixes:
- `/copy` now includes task completion messages when available.
- OAuth-authenticated MCP servers connect reliably during session startup (directly relevant to recently filed MCP OAuth issues: [#4769](https://github.com/github/copilot-cli/issues/4769), [#4773](https://github.com/github/copilot-cli/issues/4773)).

## 3. Hot Issues

1. **[#135 — Light theme doesn't work](https://github.com/github/copilot-cli/issues/135)** (12 comments, 12 👍) — Longest-running engagement on this list; opened Sep 2025 and still unresolved. Light-theme terminals get unreadable output, echoed again by #3773. High visibility makes this a hygiene item for the team.
2. **[#4756 — Windows requires archiving every idle session before new Local session](https://github.com/github/copilot-cli/issues/4756)** (7 comments, **19 👍** — highest reaction count) — `Failed to create session: invalid argument` forces users to archive idle sessions before chatting; a major daily-workflow blocker on the desktop app.
3. **[#4535 — `store_memory` fails in 1.0.81 prereleases: "Instance id is required"](https://github.com/github/copilot-cli/issues/4535)** (8 comments) — Agent memory writes fail consistently because the native memory writer is invoked without the required instance ID; breaks context-memory area on prerelease channels.
4. **[#2147 — CAIP 400: "input item ID does not belong to this connection"](https://github.com/github/copilot-cli/issues/2147)** (6 comments) — Recurring websocket error with `gpt-5.4 (xhigh)`. Related to account-switch corruption in #4791, and the direct motivation for documentation PR #4770.
5. **[#3700 — WSL2 regression: MainThread spins at ~215% CPU while idle, TUI frozen](https://github.com/github/copilot-cli/issues/3700)** (3 comments, tagged High severity) — Regression of #2208; TUI output freezes until restart on fresh sessions after reboot.
6. **[#3773 — Broken light theme (low contrast)](https://github.com/github/copilot-cli/issues/3773)** (4 comments) — Black prompt background and low-contrast selection highlight make text hard to read; complements #135 and the theming request trend.
7. **[#4757 — `--yolo` blocked fail-closed despite absent managed policy](https://github.com/github/copilot-cli/issues/4757)** (3 comments) — Bypass-permissions mode disabled for the whole session by a fail-closed posture applied even when the policy resolves as absent. Enterprise/permissions edge case.
8. **[#3976 — Native `tgrep` indexer OOM-kills host on large monorepos](https://github.com/github/copilot-cli/issues/3976)** (3 comments) — Persistent `tgrep serve` daemon has no memory cap, endangering hosts on large repos when the `copilot_cli_tgrep` experiment is enabled.
9. **[#2199 — Add Ctrl+Backspace to delete whole word](https://github.com/github/copilot-cli/issues/2199)** (3 comments, 7 👍) — Keyboard-productivity request; mirrored on Windows as #3858 where Alt+Backspace workarounds don't match platform conventions.
10. **[#1467 — Default to/resume last session](https://github.com/github/copilot-cli/issues/1467)** (3 comments) — Ambiguous session list after restart ("2 min ago" vs "2 days ago") makes session restoration confusing.

Also worth watching (triage, 0–1 comments): session-steering turn-index conflict ([#4792](https://github.com/github/copilot-cli/issues/4792)), dashboard 404 links vs `/agents/tasks/` path ([#4775](https://github.com/github/copilot-cli/issues/4775)), and auto-approval expiry after ~1 hour ([#4764](https://github.com/github/copilot-cli/issues/4764)).

## 4. Key PR Progress

Only **two PRs** were updated within the reporting window — both documentation changes:

1. **[#4770 — Document the WebSocket responses opt-out](https://github.com/github/copilot-cli/pull/4770)** — Models advertising a WebSocket responses endpoint use it by default; when the transport is blocked or sessions fail with `400 input item ID does not belong to this connection`, this PR documents the working opt-out. High value: it is the community's most commonly reported connection error (#2147, #4791).
2. **[#4786 — Revise notice regarding third-party services](https://github.com/github/copilot-cli/pull/4786)** — Clarifies access requirements and terms for third-party service notices — a governance/clarity update with little technical surface.

No feature or bug-fix PRs were active in the last 24 hours; the release channel is carrying fixes instead.

## 5. Feature Request Trends

- **Theming & accessibility control** — Strongest recurring theme: low-contrast light mode ([#135](https://github.com/github/copilot-cli/issues/135), [#3773](https://github.com/github/copilot-cli/issues/3773)) plus a request to pin the GitHub palette independent of OS/terminal appearance ([#4620](https://github.com/github/copilot-cli/issues/4620)).
- **Keyboard editing parity** — Cross-platform support for Ctrl+Backspace word deletion ([#2199](https://github.com/github/copilot-cli/issues/2199), [#3858](https://github.com/github/copilot-cli/issues/3858)) so Windows users aren't forced onto Unix/Mac conventions.
- **Session UX** — Default to resuming the last session rather than presenting ambiguous lists of recent sessions ([#1467](https://github.com/github/copilot-cli/issues/1467)).
- **Enterprise/MCP infrastructure** — Authenticated reads of custom MCP registries so enterprises avoid anonymous exposure ([#3772](https://github.com/github/copilot-cli/issues/3772), 5 👍) and formal dependency resolution among marketplace plugins ([#4487](https://github.com/github/copilot-cli/issues/4487)).
- **Account management** — Multi-account switching remains requested ([#367](https://github.com/github/copilot-cli/issues/367), closed but indicative of demand).

## 6. Developer Pain Points

- **Windows platform friction** — Forced session archival before new chats ([#4756](https://github.com/github/copilot-cli/issues/4756)); missing Ctrl+Backspace ([#3858](https://github.com/github/copilot-cli/issues/3858)); stuck taskbar spinner/notification badges ([#4771](https://github.com/github/copilot-cli/issues/4771), [#4381](https://github.com/github/copilot-cli/issues/4381)); sandbox permission denials despite allowed paths ([#4788](https://github.com/github/copilot-cli/issues/4788)).
- **Recurring connection/transport errors** — The `400 input item ID does not belong to this connection` websocket failure appears across session and account-switch scenarios ([#2147](https://github.com/github/copilot-cli/issues/2147), [#4791](https://github.com/github/copilot-cli/issues/4791)); OAuth fails when MCP metadata URLs redirect ([#4769](https://github.com/github/copilot-cli/issues/4769)); MCP discovery falsely reports "Found 0 tools" for loaded namespaces ([#4773](https://github.com/github/copilot-cli/issues/4773)).
- **Stability & performance regressions** — WSL2 idle CPU spin with frozen TUI ([#3700](https://github.com/github/copilot-cli/issues/3700), High severity) and the native `tgrep` daemon OOM-killing large-monorepo hosts ([#3976](https://github.com/github/copilot-cli/issues/3976)) are the highest-risk items.
- **Permissions/session lifecycle gaps** — Auto-approval silently stops after ~1 hour ([#4764](https://github.com/github/copilot-cli/issues/4764)); fail-closed bypass restriction overrides absent policies for the entire session ([#4757](https://github.com/github/copilot-cli/issues/4757)).
- **Input & clipboard oddities** — macOS clipboard stays empty on remote SSH sessions despite "Copied" reports ([#4551](https://github.com/github/copilot-cli/issues/4551)); Ctrl+C for copy closes confirmation dialogs ([#4789](https://github.com/github/copilot-cli/issues/4789)); dictation periodically deletes entered text ([#4787](https://github.com/github/copilot-cli/issues/4787)).

*All issue/PR links refer to the public `github/copilot-cli` repository; counts reflect the data snapshot as of 2026-09-10.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest: 2026-09-10

## 1. Today's Highlights
The community is currently focused on resolving cross-platform stability and internationalization hurdles. A critical bug has been reported regarding device-based authentication on macOS, while users are pushing for better support for RTL (Right-to-Left) text rendering in various terminal environments.

## 2. Releases
*No new releases were published in the last 24 hours.*

## 3. Hot Issues
*   **[2638: /login device auth fails with HTTP 500 (macOS)](https://github.com/MoonshotAI/kimi-cli/issues/2638)** – A high-priority blocker for macOS users (v0.42.0) where even after successful browser approval, the CLI returns a 500 error. This prevents new or reauthenticated users from accessing their accounts and affects both the CLI and the VS Code extension.
*   **[2639: Arabic (RTL) text is character-reversed on Windows Terminal](https://github.com/MoonshotAI/kimi-cli/issues/2639)** – A significant UX issue for Arabic-speaking developers where input and assistant responses are appearing in reverse order, making the interactive chat nearly unusable for RTL language users.
*   **[1270: VSCode extension - prioritize open files in @ mention](https://github.com/MoonshotAI/kimi-cli/issues/1270)** (CLOSED) – A popular request to improve the developer workflow by suggesting currently open files first when using the `@` symbol. Its recent closure suggests a potential implementation or architectural shift incoming.

## 4. Key PR Progress
*   **[#1863: fix(fetch): suppress duplicated extracted comment text](https://github.com/MoonshotAI/kimi-cli/pr/1863)** (CLOSED) – This PR improved the `FetchURL` logic by refining how Trafilatura extracts text versus comments. It prevents redundant data in the context window, improving the quality of GitHub issue analysis.

## 5. Feature Request Trends
*   **Context-Aware UI:** There is a clear demand for "smarter" context, such as the VSCode extension prioritizing active buffers (open files) to reduce search friction.
*   **Granular Interaction:** Users are looking for "Quote & Reply" functionality (see Issue #2601), moving away from flat chat histories toward threaded discussions where specific AI outputs can be re-prompted.
*   **Global Accessibility:** A growing need for robust support of non-Latin scripts, specifically RTL text handling within the terminal-based interactive prompt.

## 6. Developer Pain Points취*   **Authentication Fragility:** The handshake between the browser-based device auth and the CLI is currently a point of failure for macOS users, causing significant onboarding friction.
*   **Terminal Rendering Disparity:** Developers are struggling with how Windows Terminal handles complex text encoding (RTL), indicating a gap in the CLI's cross-platform UI consistency.
*   **Context Noise:** While addressed in recent PRs, developers have previously been frustrated by "noisy" data (duplicated comments) when the tool scrapes web content or GitHub issues.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: September 10, 2026

## Today's Highlights
The community is celebrating a major milestone with **v1.18.30**, which introduces native support for the next-generation GPT-6 models via the Astra system prompt. While the core is evolving rapidly, discussions are heavily focused on developer experience—specifically high-demand requests for hot-reloading agents and fixes for TUI file-indexing and cross-platform compliance.

---

## Releases
*   **v1.18.30**
    *   **Core Improvements:** Added the Astra system prompt specifically optimized for GPT-6 models.
    *   **Bugfixes:** Fixed resolution issues for Bedrock DeepSeek model IDs (including ARNs); updated Azure and OpenAI provider SDKs with the latest compatibility fixes.

---

## Hot Issues
1.  **[#8751] Hot-reload agents, skills and commands** (96 👍): A highly requested feature to allow config invalidation and reloading without restarting OpenCode. This would significantly speed up the iteration loop for building custom agents.
2.  **[#32747] @ mentions missing new files** (14 👍): A persistent TUI bug where files created after startup do not appear in the `@` picker until a full restart.
3.  **[#27786] XDG Base Directory Spec violation** (9 👍): Developers are flagging that OpenCode installs runtime dependencies (`node_modules`) in `~/.config` instead of the standard `~/.local/share`. 
4.  **[#18654] Remove/change email in OpenCode Zen** (16 👍): Users are requesting the ability to update account emails to prevent duplicate profiles when switching GitHub accounts.
5.  **[#34040] TUI autocomplete fails on external references** (6 👍): When a reference alias (e.g., `@home`) is used, the autocomplete fails to list nested files within that directory.
6.  **[#39491] Plan mode file-writing via bash** (5 👍): An edge case where models like Claude Sonnet 4.6 bypass "Plan Mode" and use bash commands to write files instead of the designated `write-tool`.
7.  **[#47034] Gemini-3.8-Flash 400 Error** (1 👍): A specific API error where requests ending in a model turn fail with `INVALID_ARGUMENT`.
8.  **[#41730] Auto-approve permissions don't cascade** (3 👍): A critical workflow issue where the `--auto` flag for the main session is not respected by spawned sub-agents.
9.  **[#47665] CLI v2 local path resolution bug** (3 👍): In the new CLI, the tool attempts to resolve positional directories locally before checking the `--server` flag, causing `ENOENT` errors.
10. **[#48214] Tool list divergence mid-session** (3 👍): A stability issue where the available tool registry stops updating after a certain batch of calls, even without MCP mutations.

---

## Key PR Progress
*   **[#41381] Address 23 community-reported issues**: A massive cleanup PR covering various core fixes, including SQLite optimization and media-400-protection.
*   **[#41383] Add MCP server for delegating sessions**: A major feature exposing OpenCode sessions over Model Context Protocol, allowing external clients like Claude Code to interact with them.
*   **[#41432] Centralize locale-aware rendering**: A significant refactor replacing 62+ UI dictionaries with mechanical phrase templates for better internationalization.
*   **[#41416] Expose AI SDK package in Zen API**: Adds an `npm` field to model metadata, helping developers identify required dependencies for specific models.
*   **[#48152] Show compaction progress and outcomes**: Fixed a UI bug where "Session compacted" appeared prematurely while the agent was still working.
*   **[#41373] Correct todo progress count order**: Fixed a translation bug in Japanese that swapped "done" and "total" counts.
*   **[#41429] Resolve message identity by ID**: Fixed a bug where message lookups failed if creation-time timestamps shifted slightly.
*   **[#41331] Bundle CLI in release apps**: Packages the V2 CLI as an external executable for more stable desktop app builds.
*   **[#41440] Add opencode-docker to documentation**: Updates the ecosystem docs to include Docker-based workflows.
*   **[#45366] Prevent settings project card clipping**: A UI fix ensuring that full-screen settings don't cut off borders or shadows.

---

## Feature Request Trends
*   **Developer Workflow**: A strong demand for **hot-reloading** (#8751) to avoid restarting the entire environment during agent/skill development.
*   **UI/UX Enhancements**: Multiple requests for **audio notifications/bells** (#35282) when an agent finishes a task, so users don't have to watch the screen constantly.
*   **Configuration Refinement**: Users want the ability to **replace or disable** `AGENTS.md` (#47879) rather than just appending to it.
*   **Platform Parity**: A push for a native **MSI installer** (#48099) to facilitate enterprise-level Windows deployment.

---

## Developer Pain Points
*   **TUI Stale State**: The TUI frequently feels "stale," either by failing to index new files immediately (#32747) or truncating markdown lists in streams (#48155).
*   **Agent Inconsistency**: Developers are frustrated when agents "forget" their mode (like Plan Mode #39491) or fail to pass permissions to sub-agents (#41730).
*   **Performance at Scale**: Large sessions are experiencing significant "cold load" delays (#48223), indicating a need for better session-handling for long histories.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-09-10

## Today's Highlights
The Pi project saw a high-velocity but low-release day: no new versions shipped in the last 24h, while the community pushed 6 merged PRs covering documentation validation, TUI history behavior, and a Mistral model-config fix. Issue activity was intense, with 50 items touched — the most notable being a severe regression in which sessions hang indefinitely on "Working…" for Anthropic Enterprise subscribers (#5291), and a catalog mismatch where `gpt-5.4` and `claude-opus-4-8` are still advertised but rejected (400) by their upstream providers.

## Releases
No new releases in the last 24 hours.

## Hot Issues (Top 10)
1. **[#5291 — Sessions hang on "Working…" with Anthropic subscription](https://github.com/earendil-works/pi/issues/5291)** (CLOSED, 10 💬) — The highest-traffic issue of the window. Multiple sessions get stuck simultaneously on `"Working..."`, and interrupt/resume only sometimes recovers. Critical UX bug for paying subscribers; closed with presumably a fix landed.
2. **[#8928 — Parallel startup can report "No API key found" for ~48s](https://github.com/earendil-works/pi/issues/8928)** (OPEN, inprogress, 6 💬) — Deterministic repro in multi-process setups where an expired OAuth credential for one provider masks the active provider's valid key. Author spent ~3 hours debugging in production because the error message points at the wrong provider — links to #1871/#4919/#6880.
3. **[#8760 — OpenRouter `:free` models fail with 400](https://github.com/earendil-works/pi/issues/8760)** (OPEN, inprogress, 5 💬) — Pi sends `max_tokens` equal to the catalog's `maxOutputTokens`, exceeding upstream hard limits on multiple `:free` models. Provider config needs a clamp.
4. **[#9381 — Package Report: pi-safe-compact flagged as malicious/unsafe](https://github.com/earendil-works/pi/issues/9381)** (CLOSED, 5 💬) — Package author `primp9053` is unreachable on GitHub; community assessing supply-chain risk of the `pi-safe-compact` package.
5. **[#9394 — Remove gpt-5.4 from openai-codex catalog](https://github.com/earendil-works/pi/issues/9394)** (CLOSED, 3 💬) — `gpt-5.4`/`gpt-5.4-mini` no longer supported for ChatGPT accounts via Codex; catalog misleads users into guaranteed 400s.
6. **[#9294 — claude-fable-5 `allowedFallbackModels` still lists rejected claude-opus-4-8](https://github.com/earendil-works/pi/issues/9294)** (OPEN, 4 💬) — Built-in fallback list references a model the API now hard-rejects, breaking every `--model claude-fable-5` request with a 400.
7. **[#9298 — Grok 403 mislabeled as "OpenAI API error"](https://github.com/earendil-works/pi/issues/9298)** (OPEN, 3 💬) — Grok outages/credit exhaustion surface as misleading OpenAI billing errors via the OpenAI-compatible client formatter; poor diagnosability.
8. **[#9396 — Pi exits instantly inside tmux: "sessions should be nested with care"](https://github.com/earendil-works/pi/issues/9396)** (CLOSED, 2 💬) — Running `pi` in an existing tmux pane exits 1 with a single line and no TUI — a hard break for a very common workflow.
9. **[#9400 — pi-coding-agent CLI fails on Node.js v20.20.2](https://github.com/earendil-works/pi/issues/9400)** (CLOSED, 1 💬) — `SyntaxError: node:fs does not provide an export named 'globSync'` — incompatibility with the LTS Node runtime.
10. **[#9399 — Loading spinner consumes CPU linearly with transcript size](https://github.com/earendil-works/pi/issues/9399)** (CLOSED, 1 💬) — 25% single-core burn on large sessions (500–2000 messages); TUI render regression worth profiling.

## Key PR Progress
All 6 PRs merged in the window (data shows only these were updated; ranking below).

1. **[#9380 — docs: validate documentation navigation and reachability](https://github.com/earendil-works/pi/pull/9380)** — Converts `docs.json` into a versioned, recursive nav manifest with automated tests for broken links, duplicate slugs, and dead-end pages.
2. **[#9382 — Always place cursor at the end while navigating history](https://github.com/earendil-works/pi/pull/9382)** — Fixes inconsistent TUI cursor behavior when paging back through message history (aligns with bash); small but high-touch UX polish.
3. **[#9376 — fix(ai): use `reasoning_effort` for Mistral-hosted GLM (zai-glm-5-2)](https://github.com/earendil-works/pi/pull/9376)** — Mistral's catalog advertises `reasoning: true` but only honors `reasoning_effort`; replaces the non-functional `prompt_mode: "reasoning"` that Pi currently sends.
4. **[#9374 — fix(coding-agent): reject reload during active session operations](https://github.com/earendil-works/pi/pull/9374)** — Guards against extension-triggered reload while streaming/compacting; prevents a tool wrapper from accessing an invalidated runner and corrupting stored state.
5. **[#9370 — docs: extract interactive testing and release guidance into skills](https://github.com/earendil-works/pi/pull/9370)** — Moves testing/release how-tos into the project's "skills" workflow framework for contributor enablement.
6. **[#9368 — (accidental PR)](https://github.com/earendil-works/pi/pull/9368)** — Merged by accident; worth a brief look to confirm no unintended diff landed.

## Feature Request Trends
The community's most-requested directions cluster into four themes:

- **TUI interactivity & ergonomics** — Fullscreen mouse selection should clear on session switch (#9311), configurable scroll speed and Alt-multiplier (#9315), collapsible code blocks in assistant messages with a `collapseCodeBlocks` setting (#9397), and fine-grained control over startup display sections (#9289).
- **Expanded provider coverage** — Native LongCat provider contribution with a tested fork (#9308), and richer provider-specific configs (Fireworks #9323).
- **SDK/RPC surface improvements** — Explicit `persist` flag on RPC model/thinking commands (#9393), a lang-neutral runtime adapter for Java/Python to reuse Pi's agent loop (#9324), and an `exports["./sdk"]` path that avoids loading CLI main and the esbuild native binary (#9286).
- **Login & package UX** — Device-code providers should opt into opening verification pages and copying codes (#9282); `pi list` should display installed package versions (#9398).

## Developer Pain Points
- **Catalog drift vs. live provider capability** — Recurring theme of models advertised (gpt-5.4, claude-opus-4-8, OpenRouter `:free` limits) being rejected upstream, causing immediate 400s. Users want catalog entries validated against provider availability and hard `max_tokens` clamps.
- **Misattributed errors hurt debuggability** — Grok 403s surfaced as "OpenAI API error" (#9298) and expired OAuth credentials reported as missing keys for the wrong provider (#8928) both sent developers on long wrong-path debugging hunts.
- **Session/state consistency** — Stuck "Working…" states (#5291), unmatched toolCall blocks after aborted turns (#9306), and duplicated steer messages (#9322) show continuation and context handling remains fragile.
- **Environment compatibility** — Node v20 `globSync` breakage (#9400) and the tmux exit-1 (#9396) indicate platform/runtime edge cases still slip through CI.
- **Supply-chain vigilance** — Two back-to-back package reports (#9381 unsafe, #9321 impersonation) signal the community wants stronger package vetting and maintainer verification.

*Note: All linked issues/PRs live under `earendil-works/pi`, reflecting the canonical project path referenced across the data.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest - 2026-09-10

## 1. Today's Highlights
Today is marked by the release of **v0.23.2**, which includes improved session navigation for the web-shell and a new TypeScript SDK update. Development activity is heavily focused on stabilizing the `qwen serve` daemon, specifically addressing memory leaks on Windows and refining the reliability of background agent execution and session persistence.

## 2. Releases
*   **v0.23.2**: The latest stable release featuring improvements to split-view session navigation in the web shell.
*   **SDK TypeScript v0.1.11**: New SDK release for TypeScript, bundling CLI version 0.23.2.

## 3. Hot Issues
*   **[#11303] [Windows] `conhost.exe` Memory Leak**: A critical P1 performance bug where the VS Code extension leaks up to 347 child processes and ~2.8GB of RAM after 12 hours. [Link](https://github.com/QwenLM/qwen-code/issue/11303)
*   **[#11119] Background Shell Output Dropped**: In daemon-hosted sessions, background shell output is silently dropped when the session runtime recycles, wedging the session. [Link](https://github.com/QwenLM/qwen-code/issue/11119)
*   **[#11489] Extension History Loss**: Users report that updating from v0.21.x to v0.23.1 causes recorded conversation history to disappear from the sidebar, despite remaining in the database. [Link](https://github.com/QwenLM/qwen-code/issue/11489)
*   **[#11352] node-pty ConPTY Leak**: A blocked issue where `node-pty` fails to release `conhost.exe` on natural shell exit on Windows, attributed to a pinned dependency. [Link](https://github.com/QwenLM/qwen-code/issue/11352)
*   **[#11499] MCP Variable Expansion Failure**: `${VAR}` placeholders in `.mcp.json` headers are not being expanded, causing literal strings to be sent instead of secrets. [Link](https://github.com/QwenLM/qwen-code/issue/11499)
*   **[#11500] TUI Crash on Agent Completion**: Multiple background agents completing in succession causes the interactive TUI to exit with a "Maximum update depth exceeded" error. [Link](https://github.com/QwenLM/qwen-code/issue/11500)
*   **[#11186] Home Directory Settings Bug**: When `qwen serve` is bound to a home directory, the settings loader incorrectly disables workspace scope and attributes shared files to user scope. [Link](https://github.com/QwenLM/qwen-code/issue/11186)
*   **[#11503] Git Guard on Symlinks**: The daemon guard denies all git commands if the `.git` directory is an NTFS junction or symlink to another volume. [Link](https://github.com/QwenLM/qwen-code/issue/11503)
*   **[#11433] SQLite for Scaling**: A community proposal to evaluate an embedded SQLite store for session/prompt indexing to handle large histories and discovery. [Link](https://github.com/QwenLM/qwen-code/issue/11433)
*   **[#11328] Provider-Configured Edge Cases**: A request to handle edge cases in model switching and reasoning, specifically for DeepSeek-v4 Pro. [Link](https://github.com/QwenLM/qwen-code/issue/11328)

## 4. Key PR Progress
*   **[#11483] Reject Pre-abored Requests**: Fix to immediately reject tool requests if the abort signal is already cancelled, preventing them from hanging in the queue. [PR](https://github.com/QwenLM/qwen-code/pull/11483)
*   **[#6019] /model --compaction**: Implementation of a flag to allow users to configure a dedicated model for chat compression (auto-compact). [PR](https://github.com/QwenLM/qwen-code/pull/6019)
*   **[#9466] Anchor Rewind Mapping**: Refactors the "rewind" feature to use stable prompt identity rather than positional order, ensuring history survives turn renumbering. [PR](https://github.com/QwenLM/qwen-code/pull/9466)
*   **[#11163] Manage Remotes UI**: Feature to allow managing git remotes directly from the Web Shell's workspace branch picker. [PR](https://github.com/QwenLM/qwen-code/pull/11163)
*   **[#11411] Permission Citing**: Fix to ensure that when a command is denied by a pattern, the error message correctly cites the specific invocation-scoped rule. [PR](https://github.com/QwenLM/qwen-code/pull/11411)
*   **[#10347] Auto-retry on EOF**: Classifies certain 4xx errors (like EOF) as retryable transport errors rather than fatal-client errors. [PR](https://github.com/QwenLM/qwen-code/pull/10347)
*   **[#9305] Bottom-align Short Content**: Fix for the UI where short conversations fitting in the viewport leave an awkward gap at the bottom. [PR](https://github.com/QwenLM/qwen-code/pull/9305)
*   **[#11289] Mid-turn Rejection Handling**: Improves UX by explicitly telling the daemon when a message is rejected because the session went idle, allowing the UI to treat it as a standard prompt. [PR](https://github.com/QwenLM/qwen-code/pull/11289)
*   **[#10410] Preserve Prompt Cache**: Feature to preserve prompt cache for deferred tools, improving efficiency in multi-step execution. [PR](https://github.com/QwenLM/qwen-code/pull/10410)
*   **[#10938] Session Workflow Cleanup**: A major design pass to make session dependencies more navigable and clean up the plan DAG/inspector UI. [PR](https://github.com/QwenLM/qwen-code/pull/10938)

## 5. Feature Request Trends
*   **Remote Development**: High demand for a supported `qwen serve` workflow where the client is local but the daemon and execution happen on a remote host.
*   **Durable Memory**: Strong interest in integrating memory layers (like MemCode) to preserve repository conventions and user preferences across different sessions and model upgrades.
*   **Advanced Context Management**: Growing interest in "auto-compact" features where a smaller, cheaper model is used to compress long chat histories to save on tokens and context.
*   **MCP Flexibility**: Requests for better handling of environment variable expansion within `.mcp.json` configurations.

## 6. Developer Pain Points
*   **Windows Stability**: Significant frustration regarding `conhost.exe` leaks and `node-pty` issues that are impacting Windows users' productivity.
*   **Migration Friction**: The transition from v0.21.x to v0.23.x has introduced regressions regarding conversation history persistence in the VS Code extension.
*   **UI Determinism**: Developers are struggling with non-deterministic rendering in the web-shell visuals (`cockpit-light`), where the same code produces different pixel-perfect outputs.
*   **Daemon Reliability**: The "silent dropping" of background shell output during session recycling remains a major pain point for users using long-running CI-polling loops.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest
**Date:** 2026-09-10

### Today's Highlights
The community is currently focused on stabilizing the upcoming Codewhale 0.9.13 release, which integrates critical contributor fixes for the terminal UI and "Computer Use" implementation. Developers are also addressing edge cases regarding session persistence and provider-specific configuration issues, particularly for Google Gemini on fresh OS installs (macOS Sequoia).

### Releases
*No new releases in the last 24 hours.*

### Hot Issues
*   **[#6016] Resumed session visibility issue](https://github.com/Hmbown/Codewhale/issue/6016):** A critical UX bug where resumed sessions cannot see or switch to models/providers added after the session started. This hinders the workflow for users who dynamically update their local model catalogs mid-project.
*   **[#6018] Google Gemini fresh install failure](https://github.com/Hmbown/Codewhale/issue/6018):** Users on macOS Sequoia 15.5 are reporting failures with Gemini via both native and OpenAI-compatible setups on fresh installations, suggesting an environment-specific configuration mismatch.
*   **[#6017] Request for durable memory](https://github.com/Hmbown/Codewhale/issue/6017):** A high-level proposal to implement a memory layer that carries project context and workflow preferences across different sessions, moving the tool closer to a truly persistent agent.
*   **[#5848] Ollama live-catalog logic extraction](https://github.com/Hmbown/Codewhale/issue/5848):** A technical debt issue where a "brand rewrite" branch has tangled logic for Ollama default catalogs. This is vital for maintaining a clean codebase as the UI evolves.
*   **[#2955] OpenAI Codex telemetry alignment](https://github.com/Hmbown/Codewhale/issue/2955):** (Closed) A completed effort to ensure token usage telemetry matches the granularity of the Codex CLI, allowing for fair cost and performance analysis.

### Key PR Progress
*   **[#6002] Integrate Codewhale 0.9.13 fixes](https://github.com/Hmbown/Codewhale/pull/6002):** The most significant active PR. It merges contributor fixes for the CLI, TUI, and Runtime API. Key features include provider catalog pagination, OpenRouter vendor selection, and pricing validation logic.

### Feature Request Trends
*   **Contextual Persistence:** There is a growing interest in "durable memory"—allowing the TUI to remember project-specific context and user preferences beyond individual commands.
*   **Advanced Telemetry:** Developers are pushing for more granular token tracking (specifically reasoning tokens vs. cached tokens) to better manage costs across different providers.
*   **Provider Flexibility:** Requests continue for better handling of custom routes and seamless switching between local (Ollama) and cloud providers.

### Developer Pain Points
*   **Session Desync:** The disconnect between "fresh session" and "resumed session" configurations is a major friction point for users frequently updating their model environments.
*   **Environment Sensitivity:** Fresh installs on the latest OS versions (like macOS Sequoia) are experiencing friction with specific providers (Gemini), requiring manual troubleshooting.
*   **Codebase Complexity:** The "tangling" of UI-rewrites with core provider logic (like Ollama catalogs) indicates that the project is becoming increasingly complex to maintain without strict architectural boundaries.

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

# ComfyUI Community Digest: 2026-09-10

## Today's Highlights
The landscape is dominated by the release of **v0.35.0**, which focuses on significant partner node updates, including Recraft V4 Styles and the removal of retiring Google models. However, the community is currently focused on stability issues related to **MiniMax H3** and **Trellis2** workflows, with reports of VRAM regressions and OOM errors on AMD (ROCm) architectures.

---

## Releases
*   **v0.35.0**
    *   **Partner Nodes (Recraft):** Added support for V4 Styles.
    *   **Partner Nodes (Google):** Cleaned up retiring Veo 2 and Veo 3.0 models.
    *   **Partner Nodes (WAN):** New support added for WAN models.

---

## Hot Issues
*   **Potential VRAM Regression in MiniMax H3 (#16150):** Users are reporting potential VRAM regressions on the latest development build when running MiniMax H3 workflows. [View Issue](https://github.com/Comfy-Org/ComfyUI/issues/16150)
*   **Model Sparse Attention OOM on MMH3 (#16175):** A critical Out-of-Memory error occurs when using the sparse attention node with MiniMax H3. [View Issue](https://github.com/Comfy-Org/ComfyUI/issues/16175)
*   **Trellis2/Pixal3D Empty Meshes (#16147, #16017):** Multiple reports that Trellis2 and Pixal3D are generating empty meshes that cannot be 3D printed. [View Issue](https://github.com/Comfy-Org/ComfyUI/issues/16147)
*   **Stable Audio 3 VAE Noise (#16087):** A significant bug where the SA3 VAE produces broadband noise during a simple encode-decode round-trip on Apple Silicon (MPS) and CPU. [View Issue](https://github.com/Comfy-Org/ComfyUI/issues/16087)
*   **FinalLayer Signature Change (#16149):** A breaking change in the `FinalLayer` signature is crashing various downstream custom nodes; users are requesting graceful defaults or a deprecation window. [View Issue](https://github.com/Comfy-Org/ComfyUI/issues/16149)
*   **ROCm Stability on AMD (#15354, #16123):** Ongoing investigation into stability and performance issues for RX 6800 (gfx1030) and R9700 series using ROCm 7.13/7.14. [View Issue](https://github.com/Comfy-Org/ComfyUI/issues/15354)
*   **Ace-Step Metadata Bug (#14560):** The native `TextEncodeAceStepAudio1.5` node is forcing strict COMBO values, which breaks the auto-metadata feature of Ace-Step. [View Issue](https://github.com/Comfy-Org/ComfyUI/issues/14560)
*   **Custom Browser Launching (#11709):** Users are requesting the ability to launch a custom browser instead of the system default via CLI switches. [View Issue](https://github.com/Comfy-Org/ComfyUI/issues/11709)
*   **Image-Text Dataset Bug (#16213):** The loader fails to find captions if the image extension appears earlier in the path or filename (e.g., `train.png/photo.png`). [View Issue](https://github.com/Comfy-Org/ComfyUI/issues/16213)
*   **VAE Tiled Batch Issue (#16129):** The VAE Encode/Decode (Tiled) node is breaking batched images during SeedVR2 upscaling. [View Issue](https://github.com/Comfy-Org/ComfyUI/issues/16129)

---

## Key PR Progress
*   **ROCm HIP Backend (#16211):** Replaced the dead ROCm triton arch gate with a self-registering HIP backend that handles gfx architecture gating internally. [View PR](https://github.com/Comfy-Org/ComfyUI/pull/16211)
*   **Model Sparse Attention History (#16212):** Exposes core Model Sparse Attention through the existing history contract so providers can track MiniMax-H3 history. [View PR](https://github.com/Comfy-Org/ComfyUI/pull/16212)
*   **Custom Browser Support (#15909):** Implements the `--browser-path` CLI flag to allow users to specify a specific browser. [View PR](https://github.com/Comfy-Org/ComfyUI/pull/15909)
*   **VSA Output Reorder (#16197):** Uses `torch.index_select` to restore original token order after VSA sparse-attention without changing math. [View PR](https://github.com/Comfy-Org/ComfyUI/pull/16197)
*   **MiniMax H3 VAE Optimization (#16196):** Skips pixel finalization for discarded frames in temporal decoding to reduce memory bandwidth. [View PR](https://github.com/Comfy-Org/ComfyUI/pull/16196)
*   **Structured Asset Logging (#16082):** Adds machine-readable structured event lines to the asset system for logging. [View PR](https://github.com/Comfy-Org/ComfyUI/pull/16082)
*   **Dataset Path Fix (#16214):** Fixes the logic where repeated extensions in paths caused caption loading to fail. [View PR](https://github.com/Comfy-Org/ComfyUI/pull/16214)
*   **OpenRouter Image 2.6 (#16188):** Added Microsoft `mai-image-2.6` models via OpenRouter. [View PR](https://github.com/Comfy-Org/ComfyUI/pull/16188)
*   **Custom Combos Fix (#15060):** Resolved an issue where custom combos were broken within subgraphs. [View Issue](https://github.com/Comfy-Org/ComfyUI/issues/15060)
*   **Governance Enforcement (#16167):** (Open) Adds hooks for governance enforcement for custom nodes in governed ComfyUI builds. [View PR](https://github.com/Comfy-Org/ComfyUI/pull/16167)

---

## Feature Request Trends own*   **TextGenerate Expansion:** There is a strong demand for the `TextGenerate` node to replace various custom LLM nodes, though it currently struggles with some specific models (like QwenVL).
*   **Compare Images Output:** Users are requesting an `Image_a` output for the `Compare Images` node to allow for updates within loop workflows.
*   **Pixal3D Multi-view:** Requests to bring native `Multi_view` support for Pixal3D into the core.
*   **Node Governance:** A growing interest in formal governance enforcement for custom nodes in specific builds of ComfyUI.

---

## Developer Pain Points
*   **AMD/ROCm Stability:** Developers on AMD hardware are facing significant hurdles with VRAM reporting, HIPBLAS errors, and general stability crashes across Windows and Linux.
*   **Breaking API Changes:** Changes to core node signatures (like `FinalLayer`) without a deprecation period are causing widespread crashes in third-party custom nodes.
*   **Memory Management:** The interaction between `DynamicVRAM` and quantized models (INT8) is currently leading to `NoCapableBackendError` crashes.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Community Digest: September 10, 2026

### **Today's Highlights**
The community is currently focused on expanding hardware compatibility and backend stability, with a significant push for native Intel SYCL (oneAPI) support for Linux discrete GPUs. However, developers are grappling with high-priority regressions in the AMD Vulkan backend and memory leaks in the server-side, alongside requests for more robust configuration management and improved tool-calling API consistency.

---

### **Releases**
*No new releases in the last 24 hours.*

---

### **Hot Issues**
*   **Gemma4:e2b Crash (GGML Assert) [##16506](https://github.com/ollama/ollama/issue/16506):** Users on WSL2 are reporting immediate crashes when running `gemma4:e2b`. The error involves a `GGML_ASSERT(n_inputs < GGML_SCHED_MAX_SPLIT_INPUTS)` failure, suggesting a potential issue with how the model handles input splitting.
*   **Embeddings Returning Zero Vectors Under Load [##17878](https://github.com/ollama/ollama/issue/17878):** A critical bug where `/v1/embeddings` returns valid-dimensioned but all-zero vectors under sustained load. Since it returns HTTP 200, it is difficult to detect in production RAG pipelines.
*   **AMD iGPU Vulkan Memory Regression [##18272](https://github.com/ollama/ollama/issue/18272):** A regression dating back to v0.32.12 is preventing 66GB models from loading on AMD iGPUs via Vulkan, resulting in "Not enough memory for command submission" errors.
*   **Server File Descriptor Leak [##18344](https://github.com/ollama/ollama/issue/18344):** Developers have identified a leak where `ollama serve` retains one file descriptor for every successful `/api/generate` request, which eventually requires a process restart. own*   **Anthropic API Compatibility - Tool Schema Failure [##18346](https://github.com/ollama/ollama/issue/18346):** When using Ollama as a backend for Claude-like apps, complex tool schemas cause the model to output tool calls as literal text rather than structured `tool_use` blocks.
*   **Qwen2.5-Coder-3B Broken Quantization Broken [##18252](https://github.com/ollama/ollama/issue/18252):** Official low-bit quants (q2-q3) for Qwen2.5-Coder-3B are producing fluent text that fails 100% of code tasks while higher quants remain functional.
*   **Configuration File Support Request [##11076](https://github.com/ollama/ollama/issue/11076):** A high-interest request (26 likes) asking for a standardized config file to manage server settings like network binding, moving away from purely environment variables.
*   **MLX Prefix Cache Truncation [##18267](https://github.com/ollama/ollama/issue/18267):** On the MLX runner, prefix-cache restore is truncating to multiples of 8192 tokens, causing a frustrating 17–27 second re-prefill penalty on every turn.
*   **Ollama Cloud Model Requests [##17100](https://github.com/ollama/ollama/issue/17100):** The community is demanding frontier 100b+ models on the cloud platform, including Ornith, Longcat 2.0, Mimo v2.5, and Step 3.7.
*   **Claude Desktop Integration Restart Bug [##18188](https://github.com/ollama/ollama/issue/18188):** A bug where the "Restart Claude Desktop" toggle in the Ollama app fails to actually restart, silently reverting without writing the new gateway config.

---

### **Key PR Progress**
*   **Feature: Native Intel SYCL (oneAPI) Backend [##18333](https://github.com/ollama/ollama/pull/18333):** A major PR introducing support for Intel Discrete GPUs (like Arc B70) on Linux using an opt-in compilation backend and hardware discovery layer.
*   **Fix: Propagate Cloud Stream Failures [##18351](https://github.com/ollama/ollama/pull/18351):** Ensures that if an upstream cloud response terminates partially, the proxy correctly reports an abort instead of treating it as a normal completion.
*   **OpenAI: Support Named Function Outputs [##18348](https://github.com/ollama/ollama/pull/18348):** Enables compatibility with Codex-style handoffs that send tool results with `name` but without a `call_id`.
*   **UI: Fix ChatGPT Model Selector Spacing [##18347](https://github.com/ollama/ollama/pull/18347):** Corrects horizontal/vertical padding in the model selector to ensure consistency when chips wrap.
*   **LLM: VRAM Accounting via Log Names [##18350](https://github.com/ollama/ollama/pull/18350):** Aligns VRAM accounting to use the device names printed by `llama-server` rather than discovery names, fixing issues in multi-GPU setups.
*   **MLX: Wait for Killed Runner [##18345](https://github.com/ollama/ollama/pull/18345):** Prevents the scheduler from loading a new model before a previous MLX runner has fully exited and released its memory.
*   **Model Parsers: Preserve Large Numeric Arguments [##18341](https://github.com/ollama/ollama/pull/18341):** Fixes a bug where large numbers (like `1e20`) were incorrectly converted to `int64`, resulting in overflow values.
*   **Agent: Name Searched Directories [##18020](https://github.com/ollama/ollama/pull/18020):** Fixes an error where the agent failed to format directories when a skill was not found.
*   **Proxy: Normalize Namespaced Commands in Full Access [##18331](https://github.com/ollama/ollama/pull/18331):** Removes escalation-only arguments from nested tools to prevent Codex from rejecting valid requests.
*   **Logging: Filter Per-Request Server Logs [##17913](https://github.com/ollama/ollama/pull/17913):** Reduces log bloat by filtering out ~20 lines of slot bookkeeping per request unless debug mode is enabled.

---

### **Feature Request Trends**
*   **Standardized Configuration:** Strong demand for a `.yaml` or similar config file to replace complex environment variables for server settings.
*   **Cloud Model Expansion:** Frequent requests for "frontier" class 100b+ models to be available on Ollama Cloud.
*   **Agent Configuration Transparency:** Requests for a command to "dump" the actual configuration used when running `ollama launch <agent>` to help debug automated workflows.

---

### **Developer Pain Points**
*   **Hardware Regressions:** AMD Vulkan users are experiencing significant memory-related failures that weren't present in older versions.
*   **Silent Failures:** The "all-zero vector" issue under load is a major pain point for developers building reliable AI applications as it lacks clear error signaling.
*   **MLX Overhead:** The MLX prefix-cache truncation is causing unexpected latency spikes for agent-based workflows.
*   **API Inconsistency:** Discrepancies between how Ollama and Anthropic handle complex tool-schemas are complicating integration for multi-platform AI development.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

# llama.cpp Community Digest: 2026-09-10

## Today's Highlights
The latest updates focus heavily on performance optimization for **Vulkan and CUDA backends**, specifically addressing hardware bottlenecks on RDNA4/Intel GPUs and improving small matrix operations. Significant progress is being made on support for the **GLM-5-Next (GLM-5.3-Flash)** model, while fixes for memory leaks in speculative decoding (DSpark) are being actively tracked.

---

## Releases
*   **b10883**: Introduced Vulkan optimizations using spec constants for matrix-matrix multiplication (A-type) and consolidated shared memory (shmem) tables.
*   **b10881**: Implemented a workaround for Vulkan FILL operations to distribute work in 2D, preventing `maxComputeWorkGroupCount` overflows on Intel GPUs when running Qwen 3.8 Flash.
*   **b10878**: Updated `llama_sampler_chain_n` return type to `int32_t` for better compatibility.
*   **b10877**: Optimized CUDA MoE MMQ tile sizing for RDNA3 based on expert width.
*   **b10876**: Refined CUDA quantization control by replacing `GGML_FA_ALL_QUANTS` with `GGML_FA_QUANTS` for more granular compilation control.
*   **b10875**: Officially deprecated the `--mmap`, `--mlock`, and `--dio` flags.
*   **b10874**: Fixed unknown parameter count issues for Granite3 MoE models.
*   **b10871**: Added a dedicated `iq4_xs` mat-vec shader for Vulkan, yielding a **6-17% token generation boost** on RDNA4 hardware.

---

## Hot Issues
*   **[#9493 Feature Request: RDMA support for RPC](https://github.com/ggerganov/llama.cpp/issues/9493)**: High-interest request for Remote Direct Memory Access to facilitate multi-node distributed inference.
*   **[#20757 Feature Request: Two-tier GPU+RAM cache for MoE offload](https://github.com/ggerganov/llama.cpp/issues/20757)**: Users are pushing for a smarter eviction policy to manage VRAM and system RAM for large Mixture of Experts models.
*   **[#26845 Bug: SYCL garbage on the second prompt](https://github.com/ggerganov/llama.cpp/issues/26845)**: Reports of inference artifacts on Intel Arc Pro graphics using the SYCL backend.
*   **[#28247 Bug: Vulkan maxComputeWorkGroupCount on Intel Arc A770](https://github.com/ggerganov/llama.cpp/issues/28247)**: A critical issue for Qwen 3.8 Flash Next, recently addressed with a workaround.
*   **[#27953 Bug: Qwen next flash compute buffer issues](https://github.com/ggerganov/llama.cpp/issues/27953)**: Developers are reporting unnecessary compute buffer allocations in setups with more than 3 GPUs.
*   **[#28522 Bug: Parallel tool_calls get mangled/hang](https://github.com/ggerganov/llama.cpp/issues/28522)**: A significant bug affecting Qwen models when using tools with many optional parameters (~48).
*   **[#27155 Bug: VRAM leak with DeepSeek V4 + DSpark](https://github.com/ggerganov/llama.cpp/issues/27155)**: A reproducible leak where the KV cache grows by ~10MB per prefill/generate cycle, leading to OOM.
*   **[#28441 Bug: Qwen2.5-Omni audio corruption on Metal](https://github.com/ggerganov/llama.cpp/issues/28441)**: Audio issues occurring on M5 Max under heavy system load.
*   **[#26129 Request: Per-device memory usage](https://github.com/ggerganov/llama.cpp/issues/26129)**: A demand for the server to expose memory usage metrics for weights, context, and compute separately.
*   **[#27112 Proposal: Public API for hidden-state extraction (residual stream)](https://github.com/ggerganov/llama.cpp/issues/27112)**: Critical for interpretability research, as developers need intermediate post-block states during decode.

---

## Key PR Progress
*   **[#27754] Support for GLM-5-Next (GLM-5.3-Flash)](https://github.com/ggerganov/llama.cpp/pr/27754)**: Massive PR adding the 321.3B hybrid linear/sparse-attention MoE model.
*   **[#26103] ggml-cpu: skip unsupported ARM ISA variants](https://github.com/ggerganov/llama.cpp/pr/26103)**: Improves build stability by skipping ARM extensions that the specific compiler doesn't support.
*   **[#16923] Add E2E tests for embedding flag](https://github.com/ggerganov/llama.cpp/pr/16923)**: Ensures the `print_raw_embeddings` functionality works across refactors.
*   **[#28102] CUDA/HIP: Flash Attention tuning (gfx1201)](https://github.com/ggerganov/llama.cpp/pr/28102)**: Addressing poor prefill performance on RTX 4090/RDNA3 architectures.
*   **[#28528] Vulkan: Implement stream-k MUL_MAT](https://github.com/ggerganov/llama.cpp/pr/28528)**: Distributes 256 K elements across SMs to improve throughput. 
*   **[#28671] CUDA: use radix-select TOP_K in CUB for wide rows](https://github.com/ggerganov/llama.cpp/pr/28671)**: Optimizes the fallback for wide rows when CUB lacks `DeviceTopK`.
*   **[#25342] GigaChat 3.5 support](https://github.com/ggerganov/llama.cpp/pr/25342)**: Conversion and testing for the 432B MoE model.
*   **[#28670] SYCL: rfc: Use radix select for top_k](https://github.com/ggerganov/llama.cpp/pr/28670)**: Fixes CPU offload issues for Qwen 3.8 which requires high K (2048).
*   **[#28669] models: clean up dead switch in old models](https://github.com/ggerganov/llama.cpp/pr/28669)**: Maintenance to remove legacy code no longer needed.
*   **[#12552] llama-map: support hugepage (2M or 1G)](https://github.com/ggerganov/llama.cpp/pr/12552)**: Significant speedup for loading massive models on systems with abundant RAM.

---

## Feature Request Trends
1.  **Distributed Inference**: High demand for **RDMA support** to scale beyond single-node setups.
2.  **MoE Memory Management**: Multiple requests for **two-tier caching** (VRAM + RAM) to make massive Mixture of Experts models more accessible.
3.  **Observability**: A growing interest in **extracting intermediate hidden/residual states** to support advanced AI interpretability and debugging.
4.  **Granular Monitoring**: Requests for **per-device memory reporting** to manage multi-GPU clusters effectively.

---

## Developer Pain Points
*   **Backend-Specific Limits**: Users on Intel Arc (Vulkan/SYCL) are frequently hitting workgroup limits or encountering shader failures, requiring manual workarounds.
*   **Speculative Decoding Overhead**: The VRAM memory growth per cycle is a key pain point for those using DSpark/speculative decoding, leading to crashes in long-running sessions.
*   **Build Complexity**: The difficulty of building for various ARM ISA variants continues to cause build failures for developers not perfectly aligned with environment-specific flags.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*