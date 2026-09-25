# AI CLI Tools Community Digest 2026-09-26

> Generated: 2026-09-25 22:15 UTC | Tools covered: 12

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



Here is the summary of today's key updates across the major AI developer tools:

*   **Ollama (v0.40.0-rc0):** Released a major update introducing native MLX support on Apple Silicon by default for supported models, starting with `qwen3.8`. ([GitHub](https://github.com/ollama/ollama))
*   **Claude Code (v2.1.283):** Shipped a new release adding gateway-level request grouping via the `x-claude-code-prompt-id` header and an `availableModelsMatch` managed setting for precise model availability control. ([GitHub](https://github.com/anthropics/claude-code/releases/tag/v2.1.283))
*   **OpenAI Codex (v0.157.0):** Released version 0.157.0, introducing the GPT-6 Sol and Luna models alongside Amazon Bedrock support and migration prompts for older models. ([GitHub](https://github.com/openai/codex))
*   **GitHub Copilot CLI (v1.0.89-4):** Released a new version focusing on smarter model routing auto-suggestions and improved plugin lifecycle management. ([GitHub](https://github.com/github/copilot-cli))
*   **Pi:** Developer mitsuhiko dropped a large dual PR adding Codemode (a sandbox for models like Jev) and MCP support, alongside experimental Virtual Models support. ([GitHub](https://github.com/earendil-works/pi))
*   **llama.cpp (b11182–b11191):** Landed backend updates introducing the model-driven W4A4 inference path (`llama_prec_policy`) and a Vulkan build fix for legacy GLSLC toolchains. ([GitHub](https://github.com/ggerganov/llama.cpp))
*   **Qwen Code (v0.24.5-nightly.20260925):** Released a nightly build adding the Hosted Harness private client for Java SDK consumers. ([GitHub](https://github.com/QwenLM/qwen-code))
*   **DeepSeek TUI (Codewhale):** Shipped a combined parity batch (workflow truth, safe /share, Claude Code agents, worktree cleanup, per-thread provider switch) and the TypeScript + Cordis extension host phase 1. ([GitHub](https://github.com/Hmbown/DeepSeek-TUI))

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills Community Highlights
*Data: anthropics/skills, as of 2026-09-26*

> **Data note:** The PR dataset lists all entries with `Comments: undefined` — actual comment counts were not captured in this export. The "Top Skills Ranking" below is therefore based on inclusion in the most-watched PR list, recency, and update activity rather than raw comment tallies. Issue comment counts are intact and used for demand analysis.

---

## 1. Top Skills Ranking

All PRs below are **[OPEN]** (unmerged). Ranks reflect prominence in the watched-PR list and recency of activity.

### #1298 — fix(skill-creator): isolate trigger evals & handle Windows/runtime failures
- **Author:** MartinCajiao | Created 2026-06-10, last updated 2026-09-16
- **Functionality:** Hardens the `skill-creator` evaluation harness. Fixes false-miss trigger scores caused by per-worker command probes competing, `select()` on subprocess pipes failing on Windows, and unrelated tools stopping scans prematurely. Runtime failures were incorrectly being treated as "negative examples," poisoning optimization.
- **Significance:** Addresses core reliability issues in the skill-authoring workflow itself. [Link](https://github.com/anthropics/skills/pull/1298)

### #1771 — feat: proofcore-contract-auditor (smart contract notarization)
- **Author:** ProofCore-Protocol | Created 2026-09-15, updated 2026-09-16
- **Functionality:** Automated static analysis of Solidity/Rust smart contracts, with cryptographic audit proofs anchored to the public TON Blockchain via ProofCore's zero-storage Merkle protocol.
- **Significance:** First Web3/blockchain-native skill in the collection; targets a niche where audit trail immutability matters. [Link](https://github.com/anthropics/skills/pull/1771)

### #1742 — fix(mcp-builder): support mcp≥2 `streamable_http_client` & custom headers
- **Author:** Kuldeeep18 | Created 2026-09-08, updated 2026-09-19
- **Functionality:** Updates `mcp-builder` connection scripts for the MCP SDK rename (`streamablehttp_client` → `streamable_http_client`) and moves custom header configuration to `create_mcp_http_client` / `http_client` rather than a direct kwarg. Fixes #1668.
- **Significance:** Keeps the MCP builder skill compatible with the latest MCP Python SDK — essential for the growing MCP ecosystem integration. [Link](https://github.com/anthropics/skills/pull/1742)

### #1734 — Detect orphaned docx comments
- **Author:** rohitjain25 | Created 2026-09-06, updated 2026-09-25
- **Functionality:** Adds detection for orphaned comments in DOCX documents (comments left behind without their anchor context).
- **Significance:** Document-quality improvement; active maintenance on the docx skill family. [Link](https://github.com/anthropics/skills/pull/1734)

### #1703 — Add md2video-audio skill
- **Author:** 70v-Yoyo | Created 2026-09-01, updated 2026-09-15
- **Functionality:** Compiles Markdown into MP4 videos with realistic human-like voiceovers via Marp (presentation slides) + text-to-speech pipeline. Zero-cost, direct Markdown→video conversion.
- **Significance:** Novel cross-domain skill bridging documentation and video production — a genuinely new capability class in the ecosystem. [Link](https://github.com/anthropics/skills/pull/1703)

### #822 — feat: AWT (AI Watch Tester) — AI-powered E2E testing
- **Author:** ksgisang | Created 2026-03-31, updated 2026-09-19
- **Functionality:** Zero-code E2E test generation: gives Claude vision and browser control to automatically run web tests. Point at an app, generate tests.
- **Significance:** Long-lived PR (6 months) with recent re-activity; fills the test-automation gap that Issues #1390 and #1385 also call out. [Link](https://github.com/anthropics/skills/pull/822)

### #525 — Add pyxel skill for retro game development
- **Author:** kitao | Created 2026-03-05, updated 2026-09-22
- **Functionality:** Guides creation, debugging, and verification of retro games in Python using the Pyxel framework — headless input-driven runs, direct frame inspection, state checks.
- **Significance:** Niche but passionate community; retro gaming is a well-defined creative domain. [Link](https://github.com/anthropics/skills/pull/525)

### #1776 — Add blast-radius skill
- **Author:** kishormorol | Created 2026-09-17, updated 2026-09-18
- **Functionality:** A pre-destructive-write checklist: classify impact before archiving users, revoking access, deleting rows, or sending batch mail. Bridges the gap between "query is right about rows" and "bulk op is right about the world."
- **Significance:** Directly addresses a practical failure mode in data operations. [Link](https://github.com/anthropics/skills/pull/1776)

---

## 2. Community Demand Trends (from Issues)

Issues are the clearest signal of unmet demand. Ranked by engagement:

### 🔴 Security & Trust (highest engagement)
- **#492** (43 comments, 👍2): Community skills impersonating `anthropic/` namespace — trust boundary abuse. The top-issue by far.
- **#1175** (4 comments): Security & context-window risks when handling SharePoint Online documents via agent skills.

### 🔴 Skill Distribution & Sharing
- **#228** (16 comments, 👍8): Org-wide skill sharing in Claude.ai — users want a shared skill library, not manual `.skill` file shuffling via Slack.
- **#189** (6 comments, 👍9): `document-skills` and `example-skills` plugins install identical content, causing duplicate skills in context.

### 🔴 Skill Infrastructure & Tooling Reliability
- **#556** (12 comments, 👍7): `run_eval.py` + `claude -p` never triggers skills (0% trigger rate) — the skill-creator evaluation harness is fundamentally broken.
- **#62** (10 comments): Users report skills disappearing after file renames or updates.
- **#202** (8 comments, CLOSED): `skill-creator` reads like developer docs, not an operational skill — verbose, educational tone, token-inefficient.

### 🟡 Testing & Quality Assurance
- **#1390** (4 comments): `mcp-builder`'s `evaluation.py` fabricates tool errors for every call, scoring 0/N against real MCP servers.
- **#1385** (4 comments, 👍1): Proposal for a Reasoning Quality Gate Pipeline (pre-task calibration → adversarial review → delivery verification).

### 🟡 New Skill Directions Proposed
- **#1329** (9 comments): `compact-memory` — symbolic notation for compact agent state, reducing context bloat from prose memory.
- **#412** (6 comments, CLOSED): `agent-governance` — policy enforcement, threat detection, trust scoring, audit trails for AI agent systems.
- **#16** (4 comments): Expose skills as MCPs — standardize skill APIs via the MCP protocol.
- **#29** (4 comments): Skills compatibility with AWS Bedrock.

### 🟡 Performance
- **#1487** (4 comments): `claude-api` skill eagerly injects ~156k tokens, exhausting context in a single tool call.

---

## 3. High-Potential Pending Skills (Open PRs, Active Maintenance)

These PRs have seen recent updates and may merge soon:

| PR | Skill | Last Updated | Why It's Pending |
|---|---|---|---|
| **#1734** | orphaned docx comments | 2026-09-25 | Most recently updated; incremental docx quality fix |
| **#1792**

---



# Claude Code Community Digest — 2026-09-26

---

## 1. Today's Highlights

Claude Code ships v2.1.283 with gateway-level request grouping via the new `x-claude-code-prompt-id` header and an `availableModelsMatch` managed setting for precise model availability control. The issue tracker remains heavily weighted toward process-lifecycle bugs—particularly orphaned shells, leaked processes on Windows, and stale desktop sessions—underscoring that stability work is still the community's top priority.

---

## 2. Releases

### v2.1.283

- **Gateway hint headers**: Added `x-claude-code-prompt-id` to outgoing request headers so LLM gateways can group requests belonging to a single user prompt. Opt in via `CLAUDE_CODE_GATEWAY_HINT_HEADERS=1`. ([release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.283))
- **`availableModelsMatch` managed setting**: New `"exact"` mode restricts an `availableModels` entry to match only the specified model ID, giving org admins finer control over which models are surfaced to users.

---

## 3. Hot Issues

### #80885 — Scheduled-task sessions leak orphaned background processes
macOS users report that cron-based scheduled tasks (via the schedule/loop skill) leave behind OS-level processes after each firing, even though the session API reports `isRunning: false`. This is a resource leak that compounds over time. **Why it matters**: Long-lived machines accumulate zombie processes; users running frequent scheduled tasks are most affected. (5 comments, 👍3) [Link](https://github.com/anthropics/claude-code/issues/80885)

### #80514 — Desktop app (Windows, RTL): browser pane renders duplicated side-by-side
The built-in browser pane renders twice—a "ghost" copy on the right that is completely unresponsive, overlapping the chat column. Only the left copy responds to input. **Why it matters**: A rendering duplication bug that breaks the primary browsing surface on Windows RTL setups; likely an electron/webview lifecycle issue. (3 comments) [Link](https://github.com/anthropics/claude-code/issues/80514)

### #80906 — Custom session titles bleed across forked/resumed sessions
`/rename` titles are overwritten in the resume picker by titles belonging to *other* sessions. Users with many sessions and frequent forks/resumes see incorrect labels. **Why it matters**: Session identity confusion in the resume UI—users may pick the wrong session, losing context. (3 comments, 👍1) [Link](https://github.com/anthropics/claude-code/issues/80906)

### #81108 — Orphaned wrapper shells accumulate and pin CPU (~1400%)
Bash calls containing shell loops with command substitution leak wrapper shells that are never reaped. Users report 80–110 orphan processes at 1255–1413% CPU on otherwise idle machines. **Why it matters**: Severe performance and stability issue; orphan accumulation can crash sessions or the host. (👍1) [Link](https://github.com/anthropics/claude-code/issues/81108)

### #80547 — Worktree checkbox resets base branch to "main", ignoring repo default
Enabling the worktree checkbox in the desktop app's new-session bar forces the branch to `main`, discarding the repo's actual default branch (e.g., `dev` from `origin/HEAD`). **Why it matters**: Users on non-main default branches get incorrect branch selection, potentially causing pushes to the wrong base. (👍2) [Link](https://github.com/anthropics/claude-code/issues/80547)

### #80871 — TaskUpdate/TaskList task IDs do not survive session resume
After resuming a session, `TaskUpdate` on previously valid task IDs returns `Task not found`. The task list appears re-listed with reset/renumbered IDs. **Why it matters**: Breaks task-tracking continuity across session interruptions—a core workflow for long-running agent sessions. (👍1) [Link](https://github.com/anthropics/claude-code/issues/80871)

### #80526 — Shipped agent/skill tool manifests still list Grep/Glob after native builds removed them
On native macOS/Linux builds, `Grep` and `Glob` were removed in v2.1.117, but agent and skill definitions still reference them, causing agents to invoke nonexistent tools. **Why it matters**: Agents on native builds fail when their manifests try to call removed tools—directly impacts agent reliability. [Link](https://github.com/anthropics/claude-code/issues/80526)

### #80524 — Desktop app agent sessions don't apply OTel telemetry env from managed settings
Org-wide managed settings configure OpenTelemetry environment variables, but desktop-launched agent sessions ignore them while CLI and VS Code sessions apply them correctly. **Why it matters**: Inconsistent observability across surfaces; orgs relying on OTel for monitoring get blind spots from desktop sessions. (👍2) [Link](https://github.com/anthropics/claude-code/issues/80524)

### #81142 — Auto mode classifier sends `[1m]`-suffixed model without the 1M beta header
When the session model carries a `[1m]` suffix (e.g., `opus[1m]`), the auto-mode safety classifier forwards that same suffixed ID without the `context-1m-2025-08-07` beta header, triggering HTTP 400 reported as "temporarily unavailable." **Why it matters**: Auto mode silently fails on 1M-context models, breaking safety classification for users with extended-context sessions. (👍1) [Link](https://github.com/anthropics/claude-code/issues/81142)

### #88121 — CoworkVMService restarts silently kill running scheduled-task sessions
On Windows, memory-pressure-triggered `CoworkVMService` restarts silently terminate any active Claude session—including scheduled/background tasks—with no error in the transcript. **Why it matters**: Scheduled tasks are a key automation feature; silent kills with no recovery configuration leave users with no indication their automation failed. [Link](https://github.com/anthropics/claude-code/issues/88121)

---

## 4. Key PR Progress

> Only 5 PRs were updated in the last 24h; all are shown.

### #97241 — sec-default: system prompt sections continue past user tier
Adjusts merge ordering so the system prompt's security-default sections compose after the engine has `prompt.compose` on main. The test check is intentionally red until a released CLI carries the event. ([Link](https://github.com/anthropics/claude-code/pull/97241))

### #96953 — diff: focus hook answers to either name the engine stamps
The `ui.focus` hook previously matched elements by its own hardcoded name (`'diff'`). The engine now stamps elements with the plugin's registered name (`cc-plugin-diff`), so the hook resolves against either name. ([Link](https://github.com/anthropics/claude-code/pull/96953))

### #96930 — telemetry, agents-md: test plugins hook the collector stream by name
Test-only PR: test plugins now name the one telemetry stream a real plugin may touch (`telemetry.log`), hooking the collector stream by name to stand in for telemetry through its events. ([Link](https://github.com/anthropics/claude-code/pull/96930))

### #96917 — telemetry: log and mark are what the mod's hooks do
Refactors `$.telemetry.log` and `$.telemetry.mark` into two hooks on the noun's events (`telemetry.log`, `telemetry.mark`), each gated and queuing rows with `{ value }` answers. ([Link](https://github.com/anthropics/claude-code/pull/96917))

### #41611 — add the missing source to claude code
Long-standing PR (created March 2026) adding missing source files; updated September 25. ([Link](https://github.com/anthropics/claude-code/pull/41611))

---

## 5. Feature Request Trends

Distilling from the open issues, the most-requested directions are:

- **Process hygiene & lifecycle management**: Users want automatic reaping of orphaned wrapper shells (#81108), cleanup of leaked background processes from scheduled tasks (#80885), and proper termination of renderer/Node/CLI-engine processes on Windows close (#81130).
- **Session identity & continuity**: Requests for stable task IDs across resume (#80871), non-bleeding custom session titles across forks/resumes (#80906), and reliable `/rename` repaint in the VS Code sidebar (#81134).
- **UI/UX refinements**: Letter-key shortcuts (a/b/c) for dialog choices instead of numbers (#80897), correct model name display in the startup banner (#80926), and a `/context` breakdown that separates system tools from MCP tools (#80527).
- **Desktop app parity**: OTel telemetry env application for desktop agent sessions (#80524), worktree checkbox respecting repo default branch (#80547), and WSL2 workspace targeting in Cowork Dispatch (#81150).
- **Tool manifest accuracy**: Removing references to deleted native tools (Grep/Glob) from shipped agent/skill manifests (#80526).

---

## 6. Developer Pain Points

- **Orphaned process accumulation** is the dominant frustration: wrapper shells, scheduled-task processes, and desktop renderers leak across platforms (macOS, Windows) and are never reaped, leading to CPU pinning and memory bloat.
- **Session state inconsistency** across resume/fork operations—task IDs, titles, and task lists reset or bleed into other sessions, breaking the mental model of a continuous session.
- **Desktop app discrepancies** from CLI/VS Code: telemetry env vars, branch defaults, and MCP tool visibility differ between surfaces, making desktop-first workflows feel like second-class citizens.
- **Stale issue triage**: Multiple high-impact issues (process leaks, rendering bugs, title bleeding) have been open since July 2026 with minimal maintainer response, leaving the community without workarounds.
- **Tooling fragmentation**: The removal of native `Grep`/`Glob` on macOS/Linux while manifests still reference them creates agent failure points that users must manually work around.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



# OpenAI Codex Community Digest — 2026-09-26

### 1. Today's Highlights
The OpenAI Codex repository released version **0.157.0**, introducing the GPT-6 Sol and Luna models alongside Amazon Bedrock support and migration prompts for older models. This release is accompanied by a major wave of backend and TUI stabilization pull requests focusing

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>



# Gemini CLI Community Digest — 2026-09-26

Welcome to the daily technical digest for the `google-gemini/gemini-cli` repository. Below is a structured summary of the latest releases, community issues, key pull requests, and emerging trends from the past 24 hours.

---

### 1. Today's Highlights
The repository has been heavily focused on hardening core stability, resolving concurrent file operation race conditions, and fixing critical authentication and session loading loops. On the community side, developer attention is sharply focused on subagent execution reliability (such as hanging loops and incorrect success statuses) and advanced subagent configurability. Key dependency updates, including major bumps to `puppeteer-core` and `google-auth-library`, have been pushed via automated dependency management.

---

### 2. Latest Releases
*   **v0.62.0-nightly.202

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



# GitHub Copilot CLI Community Digest — 2026-09-26

## 1. Today's Highlights
The Copilot CLI released version `v1.0.89-4`, focusing on smarter model routing auto-suggestions and improved plugin lifecycle management. On the issue tracker, community engagement remains highly focused on system prompt configurability to manage massive token overheads, alongside critical session persistence bugs affecting long-running processes and cross-app synchronization.

## 2. Releases
*   **v1.0.89-4**: 
    *   **Added**: Auto-suggests a routing tier and allows users to switch with a shortcut or click. A quick feedback prompt is now shown after switching away to a manually selected model.
    *   **Improved**: Direct plugin installs can now be enabled and disabled. Plugins previously marked as disabled now correctly stop loading on startup.

## 3. Hot Issues
Here are 10 noteworthy issues shaping the Copilot CLI community discussion:
1.  **[#2627] Configurable system prompt to reduce token overhead (20 👍, 5 comments)**: Users request the ability to slim down the default system prompt, which consumes ~20,500 tokens (~10% of a 200K context window) before any user content is loaded. This is the most highly upvoted issue on the board.
2.  **[#4438] `disable-model-invocation: true` makes a skill unreachable (11 👍, 8 comments)**: A bug where project skills marked as non-model-invocable are completely hidden from the CLI, failing with `Skill not found` even when manually requested via slash commands.
3.  **[#232] Add System Prompt parameter for Copilot-CLI (11 👍, 6 comments)**: A highly requested feature asking for a `--system-prompt` CLI parameter to pass system-level instructions directly without relying solely on repo-specific instruction files.
4.  **[#4082] Cross-app session sync between CLI and Desktop App (9 👍, 2 comments)**: Users using both macOS environments request seamless session import and synchronization between Copilot CLI and the Copilot desktop application.
5.  **[#3534] WSL2 (ARM64): `/copy` fails with `clip.exe exited with code 1` (5 👍, 7 comments)**: A persistent quoting bug in the `cmd.exe` wrapper that blocks clipboard writes for WSL2 ARM64 users.
6.  **[#4929] Process-local auth token stops refreshing (6 comments)**: A severe bug where long-running Copilot CLI sessions permanently lose authentication. Standard prompts fail, `/login` does not recover the process, and a full restart is required.
7.  **[#4905] Desktop app sessions die minutes after spawn (4 👍, 5 comments)**: Credential registration failures making the `github-mcp-server` catalog stale and fatal, causing desktop-spawned CLI sessions to crash shortly after starting.
8.  **[#4775] Mission Control dashboard links 404 (2 👍, 6 comments)**: The web-based Mission Control dashboard generates broken links pointing to `/copilot/tasks/<uuid>` instead of the actual active path `/agents/tasks/<uuid>`.
9.  **[#4680] CLI sends wrong model ID to custom OpenAI-compatible endpoint (4 comments)**: A critical integration bug where the CLI overrides custom endpoint configurations (e.g., `mimo-v2.5`) and sends `gpt-5.4-nano` in the API request body, killing the session.
10. **[#4710] Runaway `copilot-file-search` thread consumes CPU/disk while idle (2 comments)**: An resource leak where background search threads continue running indefinitely, pinning CPU cores and writing unbounded diagnostic logs during idle periods.

## 4. Key PR Progress
*No pull requests were updated or merged in the last 24

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



# OpenCode Community Digest — 2026-09-26

## Today's Highlights

OpenCode's community activity today centers on critical subagent lifecycle bugs, plugin API gaps, and several important security and stability fixes. The most engaging issue remains the GitLab Duo workflow failure on self-managed instances, while a cluster of subagent-related reports signal that background task handling in V2 is a pressing reliability concern. On the PR side, a batch of codemode confinement fixes and model-resolution corrections landed, alongside several automated cleanups restoring V1 parity.

## Releases

*None released in the last 24 hours.*

## Hot Issues

**1. GitLab Duo workflow fails on self-managed instances** ([#50843](https://github.com/anomalyco/opencode/issues/50843))
The top issue by engagement (10 comments). Users report two distinct failures: Duo workflow models lack context for self-managed GitLab, and expired OAuth tokens block refresh. This affects a core integration for enterprise users.

**2. Selecting a skill clears the input draft** ([#39376](https://github.com/anomalyco/opencode/issues/39376))
9 comments, 4 👍. When invoking a skill via Ctrl+P or the `prompt_skills` keybind, any existing draft in the input box is destroyed. A frustrating UX regression for multi-step skill composition.

**3. Live Subagents sidebar section in the TUI** ([#41249](https://github.com/anomalyco/opencode/issues/41249))
8 comments, 1 👍. A feature request that has community backing: a built-in live Subagents sidebar, eliminating the need for an external plugin (`opencode-subagents-view`).

**4. Allow selecting multiple skills from /skills** ([#32954](https://github.com/anomalyco/opencode/issues/32954))
6 comments, 10 👍. High-demand feature: the `/skills` menu should support multi-select so users can compose prompts combining several skills at once.

**5. Gemini rejects MCP tool with nullable array schema** ([#48073](https://github.com/anomalyco/opencode/issues/48073))
5 comments, 1 👍. A schema-compatibility bug: any MCP tool declaring `type: ["array", "null"]` causes Gemini to reject *all* requests with `INVALID_ARGUMENT`. Affects the `@sylphx/pdf-reader-mcp` server but is likely broader.

**6. Subagent with pending background work marked completed early** ([#48826](https://github.com/anomalyco/opencode/issues/48826))
4 comments. V2 subagents running background `task`/`shell` are reported as `completed` to the caller before the work actually finishes — results are never collected.

**7. Background subagent's resumed turn never notifies parent** ([#50751](https://github.com/anomalyco/opencode/issues/50751))
4 comments. Closely related: the parent session waits indefinitely for a completion notification that never arrives, even though the subagent's final report is persisted.

**8. Desktop installer fails on Windows ARM64** ([#33732](https://github.com/anomalyco/opencode/issues/33732))
4 comments, 1 👍. The Windows ARM64 installer extracts files but never places `OpenCode.exe`, making the app unlaunchable. Likely a 7-Zip bundling incompatibility.

**9. Desktop sidecar OOM — JavaScript heap out of memory** ([#47553](https://github.com/anomalyco/opencode/issues/47553))
4 comments. The desktop sidecar process grows unbounded until the OS kills it (~3GB+). A confirmed memory leak in `opencode-ai@1.18.29` on Windows.

**10. Agent config extra fields forwarded verbatim, causing invalid_request_error** ([#49027](https://github.com/anomalyco/opencode/issues/49027))
4 comments. Custom properties in agent config are passed through to upstream providers (e.g. `opencode-go`), producing `invalid_request_error`. A validation gap between config schema and provider contracts.

## Key PR Progress

**1. fix(codemode): bound replacement strings, recursion depth, and rejection diagnostics** ([#51407](https://github.com/anomalyco/opencode/pull/51407))
Open PR. First in a series of confinement fixes from a recursion/allocation audit. Addresses unbounded allocation in replacement strings, argument counts, built-in recursion depth, and thenable chains — all previously able to hang the host or exhaust memory.

**2. fix(app): support model IDs with multiple slashes in resolveDefaultModel** ([#51402](https://github.com/anomalyco/opencode/pull/51402))
Closed. Corrects a parsing bug where model IDs like `nvidia-nim/nvidia/nemotron-3-super-120b-a12b` were truncated because `legacy.split("/")` only took the first segment after the provider.

**3. feat(cli): support model flag in v2 tui** ([#44988](https://github.com/anomalyco/opencode/pull/44988))
Closed. Restores V1 parity: the root CLI command now forwards the `--model` flag to the V2 TUI, closing a feature gap noticed after the V2 migration.

**4. feat(cli): add mcp remove command** ([#44986](https://github.com/anomalyco/opencode/pull/44986))
Closed. Adds `opencode mcp remove` to the CLI. V2 had add/list/auth/logout but no remove, forcing manual config edits.

**5. fix(desktop): raise detectServerProtocol health-probe timeout to 60s** ([#44980](https://github.com/anomalyco/opencode/pull/44980))
Closed. The renderer's first health probe was timing out at 5s on slow machines, causing false fallbacks to the v2 protocol path.

**6. fix(opencode): seal partial reasoning/text parts before stream retries** ([#44884](https://github.com/anomalyco/opencode/pull/44884))
Closed. When a stream attempt failed mid-retry, persisted parts were left without `time.end`, corrupting the transcript. This ensures parts are properly sealed before retrying.

**7. fix(llm): detect litellm context window exceeded error** ([#44889](https://github.com/anomalyco/opencode/pull/44889))
Closed. litellm wraps `ContextWindowExceededError` in a generic `BadRequestError`, which OpenCode failed to detect — leading to repeated failures instead of context-reset behavior.

**8. feat(protocol): add session message total and seek** ([#44872](https://github.com/anomalyco/opencode/pull/44872))
Closed. Adds `total` and random-access seeking to the V2 session message protocol, so clients (e.g. CodeNomad) can jump without walking opaque cursors.

**9. fix(app): recover sessions with missing directories** ([#44932](https://github.com/anomalyco/opencode/pull/44932))
Closed. When a session's working directory is deleted, the app now enters a read-only recovery state with a directory picker instead of crashing.

**10. fix(core): make inbox reordering durable and atomic** ([#44858](https://github.com/anomalyco/opencode/pull/44858))
Closed. Adds a durable `POST /api/session/{sessionID}/inbox/reorder` endpoint, replacing a fragile queue-rewrite workaround with a single atomic operation.

## Feature Request Trends

The most-requested feature directions cluster around four themes:

- **Subagent & Task UX:** Live Subagents sidebar ([#41249](https://github.com/anomalyco/opencode/issues/41249)), multi-skill selection from `/skills` ([#32954](https://github.com/anomalyco/opencode/issues/32954)), shared precached repo/context state across subagent sessions ([#51383](https://github.com/anomalyco/opencode/issues/51383)).
- **Plugin API Exposure:** Expose the V2 TUI composer to plugins ([#51209](https://github.com/anomalyco/opencode/issues/51209)), re-expose token-usage data for context-pruning plugins ([#51265](https://github.com/anomalyco/opencode/issues/51265)), expose credential list/activate on `ctx.integration` ([#51410](https://github.com/anomalyco/opencode/issues/51410)).
- **Custom StatusLine & UI Personalization:** Custom statusLine via shell command ([#37464](https://github.com/anomalyco/opencode/issues/37464), 11 👍), transparency toggle in TUI settings ([#51353](https://github.com/anomalyco/opencode/issues/51353)).
- **Ecosystem Visibility:** Add `opencode-workflows` ([#51366](https://github.com/anomalyco/opencode/issues/51366)) and `opencode-prewalk` ([#44940](https://github.com/anomalyco/opencode/pull/44940)) to the ecosystem docs.

## Developer Pain Points

- **Subagent lifecycle unreliability:** At least four open issues ([#48826](https://github.com/anomalyco/opencode/issues/48826), [#50751](https://github.com/anomalyco/opencode/issues/50751), [#51268](https://github.com/anomalyco/opencode/issues/51268), [#51343](https://github.com/anomalyco/opencode/issues/51343)) describe background subagents completing early, losing tool definitions (especially with local Ollama models), or failing to notify parent sessions. This is the most concentrated pain point.
- **Plugin API regression in V2:** Multiple reports that V2 removed or hid data plugins need — token usage ([#51265](https://github.com/anomalyco/opencode/issues/51265)), composer append ([#51209](https://github.com/anomalyco/opencode/issues/51209)), and credential access ([#51410](https://github.com/anomalyco/opencode/issues/51410)). DCP-style context-pruning plugins are effectively dead.
- **Config validation gaps:** Agent config extra fields are forwarded to providers without sanitization ([#49027](https://github.com/anomalyco/opencode/issues/49027)), and agent-level `variant` config is resolved by debug tools but never applied in requests ([#51326](https://github.com/anomalyco/opencode/issues/51326)).
- **Desktop stability on Windows:** ARM64 installer ([#33732](https://github.com/anomalyco/opencode/issues/33732), [#49059](https://github.com/anomalyco/opencode/issues/49059)) and sidecar OOM ([#47553](https://github.com/anomalyco/opencode/issues/47553)) remain open, with users effectively locked out of the desktop experience on Windows ARM64.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



# Pi Community Digest — 2026-09-26

---

## 1. Today's Highlights

The big news is mitsuhiko's dual drop of **Codemode + MCP** and **Virtual Models** — both large, experimental features landing in the same day. Meanwhile, the community is grappling with a cluster of cost-calculation bugs (OpenRouter pricing off by 2–3×, OpenAI `fast` tier mispriced), a compaction failure mode that eats entire sessions on reasoning models, and a growing list of TUI rendering regressions. The extension console-output fix (#10050) is a particularly welcome patch for plugin developers.

---

## 2. Releases

No new releases in the last 24 hours. The repo is at **v0.87.1** (referenced in several open issues), with active development on `main`.

---

## 3. Hot Issues

### 🔴 Critical / High Impact

**#10031 — Pi sporadically stuck in "Working..." when thinking is stopped with ESC**  
[Link](https://github.com/earendil-works/pi/issues/10031) · 15 comments · 👍 1  
Users report Pi hangs indefinitely after pressing ESC to stop thinking. Requires a full `CTRL+c` + resume to recover. Has persisted since ~v0.84.0 across machines. The high comment count signals this is a widely felt pain point, yet it was closed as `no-action` — likely a difficult race condition to reproduce reliably.

**#9980 — Calculated cost for top open models on OpenRouter is off by 2–3× almost always**  
[Link](https://github.com/earendil-works/pi/issues/9980) · 5 comments  
Pi's OpenRouter catalog uses the *cheapest* provider's pricing for cost estimates. For widely mirrored models like `z-ai/glm-5.3-flash`, this means reported costs are wildly inaccurate. Anyone billing or tracking usage against OpenRouter models is affected.

**#10033 — Compaction prompt includes all thinking text and exceeds the context window**  
[Link](https://github.com/earendil-works/pi/issues/10033) · 5 comments  
With reasoning models (DeepSeek V4.1 confirmed), `serializeConversation()` dumps every thinking block verbatim into the compaction summary prompt. The result: auto-compaction can *never* succeed on long sessions because the summary itself blows the context window. This is a session-killer for heavy reasoning-model users.

**#9840 — Kimi provider: pi completes final output then sleeps at 0% CPU and never exits**  
[Link](https://github.com/earendil-works/pi/issues/9840) · 4 comments  
Non-interactive runs against `kimi-coding/kimi-for-coding` produce correct stdout output but the process never terminates (observed ≥15 min, state `S`, 0% CPU). SIGINT exits cleanly. A serious hang for scripted/automated usage.

### 🟡 Noteworthy

**#7885 — npm search not indexing newly published pi-packages**  
[Link](https://github.com/earendil-works/pi/issues/7885) · 15 comments  
The pi.dev/packages gallery mirrors npm search, but npm isn't indexing new `pi-package`-tagged publications. No new package names have appeared since August 4th. This directly impacts discoverability for the extension ecosystem.

**#9803 — RPC steer success cannot be correlated with extension-handled input**  
[Link](https://github.com/earendil-works/pi/issues/9803) · 11 comments  
Since v0.86.0, RPC `steer` calls pass through extension input handlers. A handler can consume steer A while queuing steer B, and Pi reports success for A — but the client can't tell which input was actually queued. Breaks the RPC contract for extension authors.

**#9674 — mistral-conversations: empty content deltas open text blocks (GLM 5.x: whitespace, 400s on replay)**  
[Link](https://github.com/earendil-works/pi/issues/9674) · 7 comments  
Zero-length `content: ""` deltas from Mistral's conversations API open empty text blocks. When replayed, GLM 5.x models return 400 errors. The fix properly handles empty deltas on the `mistral-conversations` side rather than routing through the lossy `openai-completions` workaround.

**#8913 — Expose the fullscreen renderer's existing `mouse` option**  
[Link](https://github.com/earendil-works/pi/issues/8913) · 6 comments  
`--tui-mode fullscreen` unconditionally enables mouse tracking (including `?1003` any-event), with no opt-out. The renderer already supports a `mouse` option internally — it's just never passed. Users on terminals that don't handle mouse tracking well are stuck.

**#9974 — pi mishandles Responses API tool calls as returned by llama.cpp**  
[Link](https://github.com/earendil-works/pi/issues/9974) · 5 comments  
Raw SSE data from llama.cpp's Responses API includes `function_call` items with empty arguments and duplicate `call_id` values. Pi executes these as duplicated and corrupted tool calls. Important for anyone running local llama.cpp servers.

---

## 4. Key PR Progress

| PR | Summary |
|---|---|
| **[#10040](https://github.com/earendil-works/pi/pull/10040)** — Codemode + MCP | mitsuhiko drops a large PR adding both Codemode (a sandbox for models like Jev) and MCP support. A major capability expansion. |
| **[#10035](https://github.com/earendil-works/pi/pull/10035)** — Virtual Models | Experimental virtual model support, allowing synthetic model definitions that route through real backends. |
| **[#10050](https://github.com/earendil-works/pi/pull/10050)** — Fix extension console output | Fixes #10002. Intercepts `console.log/warn/error` and direct `process.stdout/stderr` writes from extensions so they don't garble the interactive TUI. |
| **[#10051](https://github.com/earendil-works/pi/pull/10051)** — MCP OAuth error mapping | Adds detection and user-actionable error messages for incompatible auth servers that don't support dynamic client registration. Includes unit tests and an example wrapper. |
| **[#10044](https://github.com/earendil-works/pi/pull/10044)** — Upgrade OpenAI SDK to 7.19.0 | Adds the `fast` service tier to SDK types (needed to correctly price GPT-6 Fast mode). Drops the local `prompt_cache_options` type in favor of the SDK's. |
| **[#10027](https://github.com/earendil-works/pi/pull/10027)** — Streaming robustness, reasoning clamp, compaction validity, edit recovery | A batch of accumulated fixes from a daily-driver fork against OpenRouter and local gateways. Covers streaming edge cases, reasoning clamping, compaction correctness, and edit tool recovery. |
| **[#10039](https://github.com/earendil-works/pi/pull/10039)** — Honor truecolor in custom themes | Resolves color mode from environment and terminal settings before theme construction, avoiding conflicts when env vars and settings disagree. |
| **[#10037](https://github.com/earendil-works/pi/pull/10037)** — Collapse historical tool output | Performance improvement: collapses older tool output in the transcript to reduce rendering overhead. |
| **[#8262](https://github.com/earendil-works/pi/pull/8262)** — Dispatch hooks on every turn-start path | Fixes a gap where `sendCustomMessage(triggerTurn: true)` started a turn without dispatching `input` hook or `before_agent_start`. Enables cancellable turn preflight. |
| **[#6933](https://github.com/earendil-works/pi/pull/6933)** — Disable undici idle timeout for local LLMs | Changes `DEFAULT_HTTP_IDLE_TIMEOUT_MS` from 300s to 0 (disabled) so slow local backends (vLLM, LM Studio, llama.cpp, Ollama) don't get killed during long prompt evaluations. |

---

## 5. Feature Request Trends

Across the open issues, several clear themes emerge:

- **Thinking level control** — Three separate issues (#3790, #6281, and implicitly #10033) ask for bi-directional cycling of reasoning levels. Users want `alt+,` to cycle *down*, not just forward. The current 5–6 level forward-only cycle is considered a usability pain point.
- **Mouse/input configurability** — #8913 (fullscreen mouse tracking), #9758 (wheel scroll step), and #10038 (wheel behavior in fullscreen editor) all point to a need for finer-grained input handling in the TUI.
- **RPC transparency** — #9803 (steer correlation), #9098 (prompt disposition in responses), and #10011 (hide tool rows) all ask for richer, more introspectable RPC responses and rendering control.
- **Extension ecosystem discoverability** — #7885 (npm search indexing) and the broader package gallery concerns signal a need for better packaging, search, and distribution tooling.
- **Provider parity** — Issues around Commandcode (#9553), Kimi (#9840), and llama.cpp Responses API (#9974) reflect users wanting seamless support for emerging and self-hosted providers.

---

## 6. Developer Pain Points

- **Cost accuracy is a mess.** OpenRouter pricing uses cheapest-provider rates (#9980), OpenAI's `fast` tier is mispriced (#10034), and the overall model catalog maintenance seems reactive. Developers building on top of Pi for billing or usage tracking should treat cost figures as advisory at best.
- **Session durability is fragile.** #10000 (session file not written until first assistant message) means a first-turn failure loses everything. #10033 (compaction eats reasoning text) means long sessions with reasoning models can become uncompactable. Both are fundamental data-loss risks.
- **TUI rendering regressions are accumulating.** Issues #10002 (extension console output), #10026 (cursor hidden on exit), #9887 (string line numbers in `read` tool), and #10038 (fullscreen wheel scrolling) suggest the differential renderer is under strain from feature additions. The fullscreen mode in particular has multiple input-handling bugs.
- **RPC contract gaps.** Extension authors and RPC consumers face ambiguous semantics around steer handling (#9803), prompt disposition (#9098), and hook dispatch timing (#8262). The extension API is powerful but the feedback loop between Pi and extensions is under-specified.
- **Provider-specific edge cases are multiplying.** Empty content deltas (#9674), Responses API tool call formats (#9974), Kimi hangs (#9840), and strict JSON schema rejection (#9953) all require per-provider workarounds. The abstraction layer is leaking.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>



# Qwen Code Community Digest — 2026-09-26

---

## 1. Today's Highlights

The Qwen Code repository is seeing intense activity around **Managed Agent architecture** and **multi-agent coordination**, with a major proposal (#12380) defining a dual-path execution model that decouples model inference from tool-environment provisioning. On the stability front, critical Windows bugs — including a `conhost.exe` process leak (#11303) and ripgrep execute-bit loss during self-update (#12668) — are drawing significant community attention. Several PRs are advancing background-agent lifecycle management (`peek`, `answer`, `stop`) and mobile feature parity (microphone consent, document selection).

---

## 2. Releases

**v0.24.5-nightly.20260925.c3a4058a0c** — Latest nightly build.

Key changes in this release window:
- `feat(sdk-java)`: Added the Hosted Harness private client for Java SDK consumers.
- `test(java)`: Pinned runtime-broker guard for Java test stability.

Full notes: [Release v0.24.5-nightly.20260925](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.5-nightly.20260925.c3a4058a0c)

---

## 3. Hot Issues

### 🔴 #12380 — Managed Agent Dual-Path Architecture Proposal
**Priority:** P2 · **Comments:** 21  
A foundational proposal to define a staged Managed Agent architecture that keeps the existing TypeScript agent loop, runs model inference independently of tool-environment provisioning, and gives Sessions durable ownership, Workspace bindings, recoverable tool executions, and a stable WebSocket interface. This is shaping up to be the roadmap's backbone for multi-agent and daemon scenarios.  
[Link](https://github.com/QwenLM/qwen-code/issues/12380)

### 🔴 #11303 — Windows: `conhost.exe` ConPTY Process Leak in VS Code Companion
**Priority:** P1 · **Comments:** 17  
The VS Code Companion extension leaks headless `conhost.exe` (ConPTY) processes on Windows. After ~12 hours of uptime, a single qwen-cli process accumulates **347 child processes holding ~2.8 GB of RAM**. This is a severe resource leak for long-running Windows sessions.  
[Link](https://github.com/QwenLM/qwen-code/issues/11303)

### 🟡 #472 — `is_background` Missing Property and Not Boolean
**Priority:** Mixed · **Comments:** 14 · **👍:** 5  
Users report that since PR #445 merged, the API consistently returns `"params/is_background must be boolean"` and `"params must have required property 'is_background'"` even when following the documented `shell.md` tool schema. This is a long-lived (since Aug 2025) compatibility issue affecting tool callers.  
[Link](https://github.com/QwenLM/qwen-code/issues/472)

### 🔴 #11872 — Web Terminal: `[Error: PTY not available]` on macOS
**Priority:** P1 · **Comments:** 14 · **Status:** Closed  
The web Terminal panel fails to create a PTY because `@lydell/node-pty` is declared but not bundled, and macOS code signing blocks locally installed prebuilds. This breaks `qwen serve` / Desktop web shell on macOS.  
[Link](https://github.com/QwenLM/qwen-code/issues/11872)

### 🔴 #12416 — Remote-SSH: Every `POST /session` Fails with `write EPIPE`
**Priority:** P1 · **Comments:** 12  
When using Qwen Code Companion 0.24.2 over Remote-SSH, creating any session from the chat panel fails with `BridgeChannelClosedError`, while the bundled CLI works standalone. This blocks the primary workflow for remote SSH users.  
[Link](https://github.com/QwenLM/qwen-code/issues/12416)

### 🟡 #8586 — Track `activeWork` and Background Agent Recovery
**Priority:** P2 · **Comments:** 10  
Requests an explicit `activeWork` fact in deep daemon health checks and a recovery path for background Agents that outlive their foreground prompt or stop making progress. Covers five layers: deep health, ACP Session reporting, durable ownership, recovery, and progress tracking.  
[Link](https://github.com/QwenLM/qwen-code/issues/8586)

### 🟡 #8097 — Background Agent Coordination Gaps
**Priority:** P2 · **Comments:** 9  
When running multiple background Explore subagents simultaneously, three coordination failures occur: (1) parent agent duplicates subagent work, (2) premature completion reports, and (3) `send_message` is non-interactive mid-flight.  
[Link](https://github.com/QwenLM/qwen-code/issues/8097)

### 🔴 #12679 — Fresh Global Install Ships Vendored ripgrep at 0644 (No Exec Bit)
**Priority:** P1 · **Comments:** 4  
A fresh install of `@qwen-code/qwen-code@0.24.5` lands vendored ripgrep binaries without an execute bit, and no code path restores it. All `rg` spawns fail with `EACCES`. Verified first-hand on the published registry tarball.  
[Link](https://github.com/QwenLM/qwen-code/issues/12679)

### 🔴 #12683 — PreToolUse Hook Decision Race (Deny Overridden by Allow)
**Priority:** P1 · **Comments:** 4 · **Status:** Closed  
When multiple `PreToolUse` hooks match the same tool call, the applied permission decision is **not** an aggregate — the hook that *finishes last* wins. A `deny` from one hook can be silently overridden by an `allow` from another. This is a security-relevant race condition.  
[Link](https://github.com/QwenLM/qwen-code/issues/12683)

### 🟡 #12169 — Batch API Uploads Bypass Pinned Dispatcher
**Priority:** P2 · **Comments:** 4  
Both Batch API upload sites call the global `fetch` directly and send only `Authorization`, so they never receive the dispatcher the rest of the client uses. In proxy-required or TLS-intercepting environments, every other request succeeds while Batch uploads fail.  
[Link](https://github.com/QwenLM/qwen-code/issues/12169)

---

## 4. Key PR Progress

### 🚀 #10954 — `feat(serve)`: Expose Background Agents via `GET /background-agents`
Adds a new endpoint to `qwen serve` that exposes the sessions the Agent View supervisor is running, including each agent's name, state, and current activity. Stack position 4/4.  
[Link](https://github.com/QwenLM/qwen-code/pull/10954)

### 🚀 #10949 — `feat(cli)`: See, Answer, and Stop a Background Session
Adds three subcommands for background Agent View sessions: `qwen sessions peek <session>`, `qwen sessions answer <session>`, and `qwen sessions stop <session>`. Stack position 3/3.  
[Link](https://github.com/QwenLM/qwen-code/pull/10949)

### 🚀 #12719 — `feat(serve)`: Support Multiple Workspace Roots in Daemon Shell Guard
Enables VS Code multi-root workspaces to run mutating Git commands in any opened folder by supporting multiple workspace roots in the daemon shell guard. Refs #12628.  
[Link](https://github.com/QwenLM/qwen-code/pull/12719)

### 🚀 #12709 — `feat(managed-agent)`: Admit Workspace-Bound Sessions Without Execution
Adds the W0b admission slice for Managed Agent Sessions. Callers can select a registered Workspace and relative directory when creating an empty Session via the public or WebShell API, with seven-field binding and frozen configuration references.  
[Link](https://github.com/QwenLM/qwen-code/pull/12709)

### 🚀 #12688 — `feat`: Complete Advisor Consultation Behavior and Usage Limits
Completes the next Advisor behavior layer after #9636. The executor now receives task reminders covering consultation after orientation and before substantive work, when the task appears complete, and on recurring failures.  
[Link](https://github.com/QwenLM/qwen-code/pull/12688)

### 🚀 #12183 — `feat(extensions)`: Load Deployment-Managed Extensions from a Directory
Adds `--managed-extensions <root>` to the CLI and daemon. Qwen discovers complete extensions in the root's child directories and reads their contributions in place, including with a fresh user home.  
[Link](https://github.com/QwenLM/qwen-code/pull/12183)

### 🚀 #12127 — `feat(mobile)`: Add Scoped Microphone Consent (Phase 2)
Rebased onto `main` with the updated profile foundation. Ready for review; merge after #12121.  
[Link](https://github.com/QwenLM/qwen-code/pull/12127)

### 🚀 #12126 — `feat(mobile)`: Support Scoped Native Document Selection (Phase 2)
Companion mobile feature to #12127, rebased onto `main`. Ready for review; merge after #12121.  
[Link](https://github.com/QwenLM/qwen-code/pull/12126)

### 🛠️ #12705 — `fix(core)`: Treat EHOSTUNREACH/ENETUNREACH as Connection-Level in `web_fetch`
Adds `EHOSTUNREACH` and `ENETUNREACH` to `CONNECTION_LEVEL_ERROR_CODES` so the opportunistic http→https upgrade falls back to the original http URL when the upgraded connection fails at the network layer. Directly addresses #12699.  
[Link](https://github.com/QwenLM/qwen-code/pull/12705)

### 🛠️ #12718 — `fix(core)`: Tolerate Win32 Directory-Sync Refusal in Managed Session Resources
Fixes two root causes behind red nightly CI legs (Windows 145 failures, macOS 2) and stops macOS-only test-fixture bugs from failing on case-insensitive and non-UTF-8-name filesystems.  
[Link](https://github.com/QwenLM/qwen-code/pull/12718)

---

## 5. Feature Request Trends

| Direction | Representative Issues | Signal |
|---|---|---|
| **Managed Agent / Multi-Agent Architecture** | #12380, #8586, #8097, #12470, #11069 | 🔥🔥🔥🔥🔥 |
| **Background Agent Lifecycle Control** | #8586, #8097, #10949 (PR) | 🔥🔥🔥🔥 |
| **Mobile Feature Parity** | #12127, #12126 (PRs) | 🔥🔥🔥 |
| **Windows Stability & Packaging** | #11303, #12679, #12668, #12687, #11778 | 🔥🔥🔥🔥 |
| **Performance & Latency** | #12589, #10603, #12579 | 🔥🔥🔥 |
| **Platform Distribution & Daemon** | #12380, #12628, #12183 | 🔥🔥🔥 |

The dominant theme is **Managed Agent** infrastructure — durable sessions,

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



# DeepSeek TUI (Codewhale) Community Digest — 2026-09-26

---

## 1. Today's Highlights

The 0.10.1 development cycle is in full swing, with a strong push on first-run experience hardening, runtime architecture splitting (`codewhale-runtime` crate), and a major extension-host pivot to TypeScript + Cordis. A community contributor filed a large batch of static-audit findings covering everything from DoS controls to fail-open error paths, while the maintainers shipped a combined parity PR batch (workflow truth, safe /share, Claude Code agents, worktree cleanup, per-thread provider switch).

---

## 2. Releases

No new releases in the last 24 hours. The project is working toward **v0.10.0** and **v0.10.1** (dev builds referenced throughout issues/PRs).

---

## 3. Hot Issues

### #6566 — First run: new users never see onboarding; first message lost or doubled
**Status:** OPEN · [Link](https://github.com/Hmbown/Codewhale/issues/6566)
A comprehensive first-run audit at 80×24 and 160×45 (including `zh_CN`) found: no onboarding appears, the first message is lost or doubled, and the provider picker / key errors / approval card all present developer-facing internals to end users. This is the highest-priority UX issue in the cycle.

### #6573 — Multiple TUI Sessions Contend on Subagents Store → CPU Spin-loop
**Status:** OPEN · [Link](https://github.com/Hmbown/Codewhale/issues/6573)
Two interactive TUI sessions on FreeBSD 15.0 pinned CPU to 100% via an idle spin-loop on the shared subagents store. A concurrency bug in the store access pattern — likely missing backoff or proper locking. Confirmed reproducible on `0.10.0 (dev)`.

### #6563 — `codewhale config set` accepts typos and unknown keys silently
**Status:** CLOSED · [Link](https://github.com/Hmbown/Codewhale/issues/6563)
`calm_mode flase` and `totally_bogus_key 42` both exit 0 and write into `config.toml`, but `calm_mode` actually lives in `settings.toml`, so the write is silently ignored. The `did-you-mean` suggestion list uses a stale key index. Root cause: config writes lack validation against the canonical key registry.

### #6565 — Background work: footer shows step chatter, agent names disagree, needs-you never reaches the footer
**Status:** OPEN · [Link](https://github.com/Hmbown/Codewhale/issues/6565)
Product audit of 15 surfaces reporting background work. Footer shows "Agent 1: step 6: finished tool 'read_file'" while agent names disagree across the UI, the "needs-you" state never surfaces in the footer, and the cache-rate display is hidden by the compact default. The cache-rate hiding itself was never removed — it was introduced in `66f022ff2d`.

### #6585 — "Whose word wins": provenance on instructions and memory, agent-written text as claims
**Status:** OPEN · [Link](https://github.com/Hmbown/Codewhale/issues/6585)
The instruction ranking logic already exists in `crates/tui/src/prompts/text.rs`. This issue adds the three enforcement pieces the prompt text can't guarantee: provenance tracking on instructions and memory, treating agent-written text as claims (not facts), and ensuring honesty can't be overridden by later instructions. Founder-approved direction from `codewhale-app #90`.

### #6582 — Hooks: structured execution receipt on stdin for shell `tool_call_after`
**Status:** OPEN · [Link](https://github.com/Hmbown/Codewhale/issues/6582)
Contributor `wuisabel-gif` (behind [MemWhale](https://github.com/wuisabel-gif/MemWhale), a local SQLite-backed memory for terminals) proposes an opt-in Codewhale plugin that records shell commands (command, cwd, exit code, output) via a structured execution receipt piped through stdin on the `tool_call_after` hook. This would give Codewhale a persistent, queryable command history layer.

### #6562 — Code mode for MCP and plugins: discovery without re-pinning, then typed bindings
**Status:** OPEN · [Link](https://github.com/Hmbown/Codewhale/issues/6562)
Design research (2026-09-24) citing Cloudflare Code Mode, Anthropic's "code execution with MCP," and Cursor's per-server schema folders (−46.9% tokens in MCP runs). Evidence from 81 founder sessions / 11,574 tool calls: MCP is only 3% of calls (345), but 71% of those are discovery calls. Proposal: discovery without re-pinning, then typed bindings through one shared gate.

### #6564 — Settings by conversation: propose-only settings tool with per-change approval cards
**Status:** OPEN · [Link](https://github.com/Hmbown/Codewhale/issues/6564)
Founder ask: tell Codewhale what you want, it proposes concrete changes, you approve or reject each. Design: a new `settings` tool with actions `search`, `read`, and `propose` — it never writes. The catalog stays out of the static prompt. `propose` blocks on the same wait mechanism as other tool calls.

### #6561 — Localized / component hardening backlog
**Status:** OPEN · [Link](https://github.com/Hmbown/Codewhale/issues/6561)
Community contributor `7jrxt42BxFZo4iAnN4CX` filed a per-zone backlog of static audit findings that don't fit a single systemic class. Each zone should be filed as its own issue (or folded into an existing one). Template: `agent-task > (agent-ready, docs/ISSUE_TRIAGE.md)`.

### #6560 — Missing resource limits / DoS controls on untrusted input
**Status:** OPEN · [Link](https://github.com/Hmbown/Codewhale/issues/6560)
Static audit of `main@384439634`. Candidates: fan-out/cardinality, task counts, login attempts, ingest rate, and request sizes on unbounded inputs. All are static candidates — not reproduced — but need confirmation before code changes.

---

## 4. Key PR Progress

### #6592 — First run connects a model, messages never lost or doubled
**Status:** OPEN · [Link](https://github.com/Hmbown/Codewhale/pull/6592)
Closes #6566, refs #6565. A launch with no usable key now opens the provider picker even for new users; Esc goes back to the picker. Messages are no longer lost or doubled. Workbar and approval-save offer fail-closed behavior added. Agent names, needs-you in the footer, and dock step chatter are covered (cache rate #6569 and parent status line #6570 are explicitly *not* in this PR).

### #6588 — Turn-loop guard sees sub-agent and RLM loops; plain exec and review get one prompt authority
**Status:** OPEN · [Link](https://github.com/Hmbown/Codewhale/pull/6588)
Closes #6510, refs #6511. `crates/core/tests/single_turn_loop.rs` now matches the `create_message*` family, `request_*model*` wrappers, and REPL/kernel rounds. The sub-agent loop (#6504) and the RLM loop are both covered by the single turn-loop guard. The RLM wall-clock cap (#6511) remains open.

### #6583 — MCP and plugin calls in code mode through the one approval gate
**Status:** OPEN · [Link](https://github.com/Hmbown/Codewhale/pull/6583)
Closes #6562, refs #6509. Code mode (`execute_tools`) can now compose MCP and plugin tools. Every nested call goes through the same `plan_tool_calls` and `request_tool_approval` gate as a direct call — no second authority. Approval and grouping are unified.

### #6586 — Runtime crate split: `codewhale-runtime` and boundary ratchet (RS-0..RS-7)
**Status:** OPEN · [Link](https://github.com/Hmbown/Codewhale/pull/6586)
Refs #6034. Creates `codewhale-runtime`, moves modules with no UI dependency into it, and adds a ratchet so runtime code cannot import from the TUI crate. This is steps RS-0 through RS-7 of the runtime split plan (`codewhale-ops/releases/0.10.1/plans-20260925/RUNTIME-SPLIT-PLAN.md`).

### #6587 — Right-click reaches every surface; items do what they say; Open in editor stays in workspace
**Status:** OPEN · [Link](https://github.com/Hmbown/Codewhale/pull/6587)
Refs #2342 and RIGHT-CLICK-DESIGN slices S1a, S1b (T1, T3–T11, N9, N14). Right-click now works reliably across all surfaces. "Open in editor" stays within the workspace context rather than leaking out. Click-to-preview was explicitly *not* added — clicking still opens the file directly.

### #6591 — Session receipts: list what a session did, from the records it already keeps
**Status:** OPEN · [Link](https://github.com/Hmbown/Codewhale/pull/6591)
Refs #6534 (network audit follows `CODEWHALE_HOME`) and #3020 (permission denials that name their own fix). No tracking issue covers session receipts; the plan lives in the Linear "0.10.1 completion plan." Receipts surface what a session did, derived from existing record streams.

### #6589 — Workflow truth, safe /share, Claude Code agents, worktree cleanup, per-thread provider switch
**Status:** OPEN · [Link](https://github.com/Hmbown/Codewhale/pull/6589)
Refs #5479, #5824. Combined parity batch merging `feat/workflow-truth`, `feat/parity-small-wins`, and `feat/thread-provider-switch`. Workflow children are delivered once; worktree removal goes through the same linked-worktree-only guard; per-thread provider switching is enabled.

### #6584 — Remove capability limits that prevent no concrete harm
**Status:** OPEN · [Link](https://github.com/Hmbown/Codewhale/pull/6584)
No-issue: capability-limit removals from the 0.10.1 capability audit ("a layer stays only if it names the harm it prevents"). Removes limits that blocked no concrete harm while preserving the safety floor (approval and trust gate, sandbox, credentials, data loss boundaries).

### #6600 — TypeScript + Cordis extension host, phase 1 (behind a flag)
**Status:** OPEN · [Link](https://github.com/Hmbown/Codewhale/pull/6600)
Refs #6094. Founder direction (2026-09-25): plugins, MCP, and extensibility move to TypeScript + Cordis — the same model the DeepSeek Harness (DSH) uses — and that becomes the only extensible part of Codewhale. The Rust core remains authoritative for: turn loop, store, approval and trust gate, sandbox, credential store. Phase 1 is behind a feature flag.

### #6590 — codewhale.net and its docs in the whale-road direction
**Status:** OPEN · [Link](https://github.com/Hmbown/Codewhale/pull/6590)
Refs #6094. Rebuilds the website and docs around the C-shaped logo whale and its 17 v2 poses as the only character. Dark blue ombre, one calm horizon. Docs are rewritten as task pages and checked against the page-body contract.

---

## 5. Feature Request Trends

| Direction | Representative Issues |
|---|---|
| **MCP & plugin code-mode integration** | #6562, #6583 |
| **Settings by conversation (propose-only)** | #6564 |
| **Hooks: structured execution receipts** | #6582 |
| **Official model routing with presets** | #6525 |
| **Session receipts / audit trails** | #6591 (PR), #6534 |
| **TypeScript + Cordis extension system** | #6600 (PR), #6094 |
| **Instruction provenance & honesty guarantees** | #6585 |
| **Deterministic audiovisual pet (Codewhale whale)** | #6109 |

The clearest trend is toward a **pluggable, observable, and auditable** agent — MCP/plugin composition in code mode, structured receipts for every tool call, session-level audit trails, and an extension host that doesn't compromise the Rust core's authority.

---

## 6. Developer Pain Points

- **Silent config failures** — typos and unknown keys write to `config.toml` and exit 0, but are never read (#6563). Developers (and users) assume config is validated.
- **First-run is broken for new users** — no onboarding, first message lost/doubled, developer-facing errors shown to end users (#6566). This is the single biggest onboarding blocker.
- **Concurrency bugs in shared state** — multiple TUI sessions spin-loop on the subagents store (#6573). Any shared mutable state without proper synchronization is a landmine.
- **Compaction is failing at scale** — 15 of 16 recorded compactions failed, and the summary call reads ~219k tokens with 0% cache hit (#6540). Token efficiency is degrading as sessions grow.
- **Model selection UI is non-functional** — pinning a model and adding to Fleet don't work (#6500). Every menu action needs an audit.
- **Audit backlog is large and untriaged** — a single static audit by `7jrxt42BxFZo4iAnN4CX` produced 8 issues (#6553–#6561) covering DoS controls, fail-open paths, TOCTOU races, unbounded reads, non-atomic writes, and more. All are marked "static candidates, not reproduced" — they need confirmation before anyone touches code.
- **Background work display is inconsistent** — 15 surfaces disagree on agent names, step chatter leaks into the footer, and "needs-you" never surfaces (#6565). Observability

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>



# ComfyUI Community Digest — 2026-09-26

Here is the structured digest of the latest activity, issues, and pull requests in the ComfyUI community for the period leading up to 2026-09-26.

---

### 1. Today's Highlights
The core team and community contributors are heavily focused on stabilizing support for next-generation models, notably **Qwen-Image 2.1**, **MiniMax H3**, and **YuE2**. Major efforts are directed toward resolving multi-GPU crashes on Windows, fixing text encoder fallback bugs for GGUF/quantized models, and optimizing performance on Apple Silicon (MPS). Additionally, significant progress is being made on backend asset scanning performance to prevent UI blocking on large libraries.

---

### 2. Releases
*   **No new official releases** were made in the last 24 hours.
*   However, two critical backport release PRs were merged:
    *   **v0

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

Thinking Process:

1.  **Analyze the Request:**
    *   **Role:** Technical analyst focused on AI developer tools.
    *   **Source Data:** GitHub data for `ollama/ollama` (latest releases, issues, pull requests).
    *   **Target Date:** 2026-09-26 (The prompt asks for digest for 2026-09-26, based on data updated around 2026-09-25).
    *   **Sections required:**
        1.  **Today's Highlights** - 2-3 sentences summarizing the most important updates.
        2.  **Releases** - Summarize changes if new versions exist (v0.40.0-rc0 is mentioned).
        3.  **Hot Issues** - Pick 10 noteworthy Issues, explain why they matter and community reaction.
        4.  **Key PR Progress** - Pick 10 important PRs, describe features or fixes.
        5.  **Feature Request Trends** - Distill the most-requested feature directions from all Issues.
        6.  **Developer Pain Points** - Summarize recurring developer frustrations or high-frequency requests.
    *   **Style:** Concise and professional, suited for technical developers. Include GitHub links for each item.

2.  **Analyze the Data:**

    *   **Latest Releases:**
        *   `v0.40.0-rc0`: Major change: Models run on MLX on Apple Silicon by default if supported by the MLX runtime (e.g., `qwen3.8`). Commands: `ollama pull qwen3.8`, `ollama run qwen3.8`.

    *   **Issues (Total 22, need to select 10 noteworthy ones):**
        *   *Issue #18509 (CLOSED)*: [bug, needs more info] Ollama refusing toolcalls, which always worked fine in llama.cpp with qwen. (19 comments) -> Tool call parsing issues with Qwen.
        *   *Issue #18368 (OPEN)*: [bug, app, macos] Chat processing fails silently after 60.0 seconds with no GUI notification (macOS GUI). (13 comments) -> Silent failures on macOS GUI, prefill timeout issue.
        *   *Issue #18091 (CLOSED)*: [feature request] Does Ollama Qwen3.8-27B uses reasoning "xhigh"? (8 comments) -> Qwen reasoning levels.
        *   *Issue #17099 (OPEN)*: [bug] 0.31.2 regression: vision model (gemma4:31b) memory estimate inflated ~1.2 GiB → no longer fits in VRAM → 7x slower generation. (8 comments) -> Severe regression in VRAM estimation causing massive slowdowns.
        *   *Issue #18527 (OPEN)*: [bug, cloud] [Cloud] deepseek-v4.1-flash silently discards all image input while advertising `vision` in capabilities. (7 comments) -> Cloud vision bug, silent data loss.
        *   *Issue #18131 (OPEN)*: MLX prefix cache: fixed 8 GiB budget causes heavy swap on 32 GB Apple Silicon during agent workloads. (6 comments) -> Memory pressure on Apple Silicon.
        *   *Issue #18644 (OPEN)*: [bug, mlx] MLX pull path doesn't detect disk full. (6 comments) -> Disk full error handling.
        *   *Issue #18387 (CLOSED)*: [bug] More than ten ellipses between Titles and Page Numbers in Table of Contents will cause ollama 'cancel task'. (5 comments) -> Weird parsing edge case crash/cancel.
        *   *Issue #16930 (OPEN)*: [feature request, intel] Proposal: Intel SYCL / oneAPI GPU backend (Arc / Battlemage). (4 comments, 3 👍) -> Intel GPU support.
        *   *Issue #18293 (OPEN)*: [bug, cloud] Frequent model unavailable errors. (3 comments, 3 👍) -> Cloud reliability issues halting agents.
        *   *Issue #18632 (OPEN)*: qwen3.8: `think: "high"` / `"max"` silently run the default (`medium`); the model's top level `xhigh` is reachable only by a string outside the documented `think` values. (3 comments) -> Qwen thinking level parameter validation bug.
        *   *Issue #18594 (OPEN)*: System 1 Models (Kev, Laya). (2 comments, 6 👍) -> System 1 / fast intuition models support.
        *   *Issue #17720 (OPEN)*: [model, cloud] Cloud: Qwen3.8. (2 comments, 9 👍) -> High demand for Qwen3.8 on cloud.
        *   *Issue #18642 (OPEN)*: [Bug] CUDA illegal memory access (MUL_MAT) on RTX 5090 with Cohere MoE architecture (Windows). (2 comments) -> CUDA crash on RTX 5090.
        *   *Issue #18581 (OPEN)*: Windows CUDA discovery fails (0 B VRAM / CPU fallback) on NVIDIA RTX 50-Series (Blackwell) with Driver 616.92. (2 comments) -> Blackwell CUDA fallback bug.
        *   *Issue #18575 (OPEN)*: [needs more info] /v1/chat/completions ignores max_tokens AND overrides the Modelfile num_predict default, leaving generation unbounded. (1 comment) -> Critical API bug regarding generation limits.
        *   *Issue #18620 (OPEN)*: MLX runner: each request that ends in a tool call leaks ~0.43 GiB (three recurrent snapshots) outside the prefix-cache budget (qwen3.6:27b-mlx). (1 comment) -> Memory leak on MLX tool calls.
        *   *Issue #18655 (OPEN)*: OpenAI-compatible endpoint: response ids have only 999 possible values (chatcmpl-rand.Intn(999)). (0 comments) -> ID collision issue.
        *   *Issue #18653 (OPEN)*: Cloud API: expose credit balance & true spend after pay-as-you-go migration. (0 comments) -> Cloud billing transparency.
        *   *Issue #18649 (OPEN)*: gemma4 parser: valid tool call rejected due to trailing garbage tokens after closing braces. (0 comments) -> Parser bug.
        *   *Issue #18637 (CLOSED)*: [Cloud] deepseek-v4.1-flash silently discards image input again — regression of #18527.
        *   *Issue #18638 (CLOSED)*: [feature request] From 0.34.2 onwards the good feature of chat,code ,&work is missing.

    *   **PRs (Total 31, top 20 by comment count shown, need to pick 10 important ones):**
        *   *PR #18656*: Use UUIDs for OpenAI-compatible response ids (Fixes #18655).
        *   *PR #18606*: feat: add System One scoring API (`POST /v1/systemone`). Adds structured decisions using local Nimble and Tev models.
        *   *PR #18654*: app/ui: keep chat stream alive during slow prefill (Fixes #18368). Wraps chat response writer to keep WKWebView alive.
        *   *PR #18652*: llama.cpp: version bump b11185.
        *   *PR #18651*: MLX: version bump.
        *   *PR #18650*: readme: add Arelis to community integrations.
        *   *PR #17834*: mlxrunner: implement load progress reporting and stall detection.
        *   *PR #18648*: x/transfer: propagate disk-full write errors (closes #18644).
        *   *PR #18202*: cmd/model: add offline model diff tool.
        *   *PR #16852 (CLOSED)*: feat: improve CLI navigation, implement atomic manifest writes, and add local model filtering.
        *   *PR #16851 (CLOSED)*: fix(cli): abort interactive mode with error when stdout is redirected without prompt.
        *   *PR #17621*: llm: add Intel oneAPI (SYCL) GPU backend (Addresses #16930). Opt-in SYCL backend via `-DOLLAMA_LLAMA_BACKENDS=sycl`.
        *   *PR #18647*: readme: add Future AGI to Observability & Monitoring.
        *   *PR #18646*: fix: increase model name component length limit from 80 to 128 (Fixes #18274).
        *   *PR #18645*: fix: accept apps in /Applications subdirectories and ~/Applications (Fixes #18628).
        *   *PR #18643*: app/cmd/app: accept bundles in Applications subdirectories (Fixes #18628).
        *   *PR #18641*: server: print large integer parameters in show modelfiles without exponents.
        *   *PR #18640*: model/parsers: resolve escapes in lfm2 quoted tool call arguments.
        *   *PR #18639*: openai: keep the tool call id and name on tool results sent as content parts.
        *   *PR #17144*: server: allow parallel requests for qwen35 / qwen35moe now that the upstream llama.cpp crash is fixed.

3.  **Drafting Sections:**

    *   **Section 1: Today's Highlights**
        *   Focus on the release of `v0.40.0-rc0` with native MLX support on Apple Silicon as a massive shift.
        *   Mention the ongoing work on Intel SYCL backend (`PR #17621`) and the new System One scoring API (`PR #18606`).
        *   Highlight critical fixes like the macOS GUI prefill timeout (`PR #18654`) and OpenAI-compatible ID uniqueness (`PR #18656`).

    *   **Section 2: Releases**
        *   `v0.40.0-rc0`: Focus on MLX runtime defaulting on Apple Silicon for supported architectures (like `qwen3.8`). This represents a major performance push for macOS ecosystem users, bypassing llama.cpp GPU layers where MLX is more optimized.

    *   **Section 3: Hot Issues (Select 10, explain why they matter & community reaction)**
        *   Let's select issues that have high impact (bugs that break workflows, feature requests with high thumbs up):
            1.  **#17099 (Regression in 0.31.2 for gemma4:31b)**: Memory estimation inflation causing 7x slowdown (33.8 -> 4.7 tok/s). *Crucial for vision model users, performance killer.*
            2.  **#18368 (macOS GUI silent failure after 60s)**: Long prefill leads to silent chat drops. *Frustrating UX, but now addressed in PR #18654.*
            3.  **#18509 (Ollama refusing toolcalls with qwen)**: Tool role parsing issues breaking agent pipelines. *Critical for agent developers.*
            4.  **#18527 / #18637 (Cloud deepseek-v4.1-flash silently discarding images)**: Cloud vision capability bug causing silent loss of multimodal input. *High severity for cloud users.*
            5.  **#18131 (MLX prefix cache heavy swap on 32GB Apple Silicon)**: Hardcoded 8 GiB budget causing heavy swapping. *Affects agent workloads on large models like qwen3.8:27b-mlx.*
            6.  **#18632 (Qwen3.8 thinking level bug)**: `"high"` or `"max"` silently run default (`medium`), only `"xhigh"` is documented/reachable outside the standard values. *Confusing parameter schema validation.*
            7.  **#18575 (OpenAI endpoint ignores max_tokens)**: Unbounded generation on `/v1/chat/completions`. *Critical API compliance and server safety issue.*
            8.  **#18293 (Frequent model unavailable errors on Cloud)**: Halts agentic processes frequently. *High frustration, 3 👍.*
            9.  **#18642 / #18581 (CUDA / RTX 5090 Blackwell issues)**: CUDA illegal memory access on Cohere MoE, and 0 B VRAM fallback on RTX 50-series with latest drivers. *Crucial for high-end Windows CUDA users.*
            10. **#18594 (System 1 Models support - Kev/Laya)**: High interest (6 👍) in fast, non-transformer/structured decision models. *Indicates interest in lightweight, high-speed reasoning systems.*

    *   **Section 4: Key PR Progress (Pick 10, describe features/fixes)**
        *   Let's pick the most impactful technical changes:
            1.  **PR #18656 (UUIDs for OpenAI response IDs)**: Replaces the limited `rand.Intn(999)` space with UUIDs, fixing ID collisions in proxies like LiteLLM.
            2.  **PR #18654 (Keep chat stream alive during slow prefill)**: Fixes the 60s WKWebView timeout on macOS, stopping silent chat failures during long prefill steps.
            3.  **PR #17621 (Intel oneAPI / SYCL GPU backend)**: Major expansion: opt-in build support for Intel GPUs (Arc/Battlemage) via `ggml-sycl`.
            4.  **PR #18606 (System One scoring API)**: Introduces `/v1/systemone` for structured local decisions using Nimble and Tev models.
            5.  **PR #17144 (Parallel requests for qwen35 / qwen35moe)**: Removes the hardcoded `numParallel = 1` restriction now that the upstream llama.cpp crash is fixed.
            6.  **PR #18648 (Propagate disk-full write errors in x/transfer)**: Fixes MLX pull path issues where disk full errors weren't properly surfaced.
            7.  **PR #18646 (Increase model name component limit to 128)**: Fixes issues pulling models with long tags/filenames from HuggingFace (up to 96 chars).
            8.  **PR #18639 & #18640 (OpenAI tool result parsing & LFM2 escapes)**: Improves compliance for tool calls (preserving tool call IDs on content-part tool results) and fixes escape parsing in LFM2 python-style tool calls.
            9.  **PR #17834 (MLX load progress reporting and stall detection)**: Brings pre-0.30 progress-based stall detection to MLX runner to avoid cancelling slow but valid loads.
            10. **PR #18202 (Offline model diff tool)**: Adds a standalone `cmd/model` tool to compare local models, safetensors, and GGUF files offline.

    *   **Section 5: Feature Request Trends**
        *   Distill the most requested directions:
            *   **Intel GPU (SYCL/oneAPI) Support**: High demand for Arc/Battlemage integration, now moving forward via PR #17621.
            *   **System 1 / Fast Inference Models**: Support for non-transformer architectures like Kev and Laya (Issue #18594, PR #18606).
            *   **Cloud Model Availability & Transparency**: Push for Qwen3.8 on Cloud (Issue #17720, 9 👍) and credit balance/billing spend APIs (Issue #18653).
            *   **Better Reasoning Level Controls**: Clarifying undocumented thinking parameters for Qwen series (Issue #18632, #18091).
            *   **MacOS App UX Enhancements**: Subdirectory installation support (Issues #18628) and non-silent failure handling on slow prefill (Issue #18368).

    *   **Section 6: Developer Pain Points**
        *   Recurring frustrations:
            *   **Unreliable Tool Calling Parsing**: Issues like trailing garbage tokens breaking Gemma4 tool calls (#18649), role parsing errors with Qwen (#18509), and LFM2 escape sequences (#18640). Tool call parsing remains highly fragile across model architectures.
            *   **Silent Failures and Poor Error Propagation**: macOS GUI dropping chats after 60s without notice (#18368), cloud models silently discarding image inputs (#18527), and disk-full errors during MLX pulls being disguised as network timeouts (#18644).
            *   **Environment-Specific Regressions**: Memory estimation regressions causing massive slowdowns on vision models (#17099) and hardcoded parallel limits on hybrid architectures like Qwen35 (#17144).
            *   **Inadequate API Compliance**: OpenAI-compatible endpoints ignoring generation bounds (`max_tokens`) (#18655) and generating duplicate/limited response IDs, causing proxy database collisions.

4.  **Review and Refine:**
    *   Check date consistency: Digest is for 2026-09-26, based on data updated up to 2026-09-25. This matches perfectly.
    *   Ensure all links are formatted properly.
    *   Ensure tone is highly professional, technical, and concise.
    *   Verify the count of picked items: 10 Hot Issues, 10 Key PRs. Let's make

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>



# llama.cpp Community Digest — 2026-09-26

---

## 1. Today's Highlights

The past 24 hours brought a cluster of backend and infrastructure improvements alongside a notable model-support push. The most significant merge is the **model-driven W4A4 inference path** (`llama_prec_policy`), which introduces precision policies that adapt quantization to model architecture — a step toward lower-VRAM, higher-throughput inference on consumer GPUs. On the stability side, a **Vulkan build fix for legacy GLSLC** restores compilation for environments lacking the cooperative-matrix API, while the **LFM2 audio mel-preprocessor fix** corrects greedy transcription errors in ~5% of utterances. The community is also actively tracking **K2-Horizon model loading failures** and **HIP/ROCm correctness regressions**, both of which remain open and heavily discussed.

---

## 2. Releases

Ten new commits landed in the last 24h (b11180–b11191). Key changes:

- **b11182** — `llama_prec_policy` + model-driven W4A4 path (#24364). Introduces a precision policy enum and architecture-specific overrides to enable W4A4 execution paths with appropriate fallbacks.
- **b11188** — Vulkan: fix build failure with legacy GLSLC versions lacking `GL_KHR_cooperative_matrix` by guarding Intel FA shade code behind `GGML_VULKAN_COOPMAT_GLSLC_SUPPORT`.
- **b11190** — MTMD: fix mel preprocessor in LFM2 audio (#29403). Replaces clamping with `log(x + 2^-24)` to eliminate transcription drift in English (4.5%) and Japanese (6.5%).
- **b11189** — OpenCL: add A8 Q5_K binary GEMM kernels (both dp4a and non-dp4a variants) plus a transpose fix for bin kernels.
- **b11184** — Metal: FWHT kernels for block widths 64–512, one row per simdgroup.
- **b11183** — Metal: split FA kernels into per-dtype libraries (#29329).
- **b11181** — HIP: bump minimum HIP version for fp8 to avoid missing `__hip_fp8_e4m3` support in 6.2.
- **b11191** — common/rpc: simplify `fs_create_directory_with_parents()` (#29432); fixes Windows unicode path handling and ensures the last directory is created even without a trailing separator.
- **b11185** — Extract shared unicode path/string helpers into common (#29415).
- **b11180** — RPC: include `nb` in `get_alloc_size` cache key and floor result at `ggml_nbytes` (#29283).

Full release notes: <https://github.com/ggml-org/llama.cpp/releases>

---

## 3. Hot Issues

### 1. [#28211] HIP/ROCm on gfx1151 — wrong logits with long prompts
[OPEN] · 12 comments · 👍 0
Users on AMD Strix Halo APUs (Ryzen AI MAX+ 395, Radeon 8060S) report incorrect logits — not a crash — when prompts exceed `n_ubatch`. This is a correctness bug in the HIP backend on RDNA 3 integrated graphics, and it remains unfixed. [Link](https://github.com/ggml-org/llama.cpp/issues/28211)

### 2. [#25992] Server returns other requests' responses verbatim on HIP with `-np 4 --kv-unified`
[OPEN] · 10 comments · 👍 12
Under parallel mixed load on integrated HIP GPUs, `llama-server` returns complete responses belonging to earlier requests. Bisected to commit c7d87229. This is a high-impact concurrency bug that undermines multi-user serving on AMD iGPUs. [Link](https://github.com/ggml-org/llama.cpp/issues/25992)

### 3. [#29373] Vulkan fails to build with glslc lacking `GL_KHR_cooperative_matrix`
[OPEN] · 6 comments · 👍 0
Since #24406, Vulkan shaders are built as cooperative-matrix unconditionally, breaking builds on older GLSLC toolchains. The fix landed in b11188 but the issue highlights a recurring theme: shader compilation paths need to remain backward-compatible with legacy Vulkan drivers. [Link](https://github.com/ggml-org/llama.cpp/issues/29373)

### 4. [#29022] Feature Request: Fast Tool Gating & Single-Pass Selection via Prefill Logit Slicing
[OPEN] · 10 comments · 👍 3
A request to optimize tool selection by slicing logits during prefill rather than doing a separate forward pass. This targets the agentic/tool-use use case where model call overhead matters. [Link](https://github.com/ggml-org/llama.cpp/issues/29022)

### 5. [#28495] Prompt processing drops 42–54% with `-np 2 --kv-unified`
[OPEN] · 8 comments · 👍 0
Root cause identified: CUDA/HIP flash-attention kernels skip only the tails of the KQ mask, not all-`-INF` interior blocks, causing redundant computation on unified KV. This is a known limitation with a documented workaround path. [Link](https://github.com/ggml-org/llama.cpp/issues/28495)

### 6. [#29424] Add support for K2 Horizon (0.9B, 3.7B, 7B, 32B, 36B MoVA)
[OPEN] · 7 comments · 👍 1
A new model architecture request. Closely tracked by #28361, which reports K2-Horizon models currently fail to load entirely. [Link](https://github.com/ggml-org/llama.cpp/issues/29424)

### 7. [#28361] K2-Horizon models fail to load
[OPEN] · 7 comments · 👍 0
Concrete failure report for the K2-Horizon model family on CUDA. Users get load errors; the architecture is not yet supported in llama.cpp's GGUF loader. [Link](https://github.com/ggml-org/llama.cpp/issues/28361)

### 8. [#26873] Glimmer consumes more memory and prefill slows after first mmproj use
[OPEN] · 5 comments · 👍 4
A multimodal model (Muse-Glimmer-30B) exhibits degraded performance after the first vision projection forward. Suggests a state leak or cache invalidation issue in the mmproj path. [Link](https://github.com/ggml-org/llama.cpp/issues/26873)

### 9. [#29104] Server silently stops processing when `/metrics` is scraped by VictoriaMetrics
[OPEN] · 8 comments · 👍 0
Windows + CUDA setup. The server halts entirely under Prometheus-style metrics scraping. Likely a threading or signal-handling bug in the server's metrics endpoint. [Link](https://github.com/ggml-org/llama.cpp/issues/29104)

### 10. [#28867] gfx1201 head-size-256 WMMA FA dispatch threshold too low — ~20% speculative-decoding regression
[OPEN] · 3 comments · 👍 0
ROCm on gfx1201 (RDNA 3) shows a significant speculative-decoding slowdown since #28102, traced to an overly aggressive flash-attention dispatch threshold for WMMA. [Link](https://github.com/ggml-org/llama.cpp/issues/28867)

---

## 4. Key PR Progress

| PR | Area | Summary |
|---|---|---|
| [#29446](https://github.com/ggml-org/llama.cpp/pull/29446) | model, server, mtmd | Adds `GraniteSpeech5ForCTC` (Turbo CTC) — a non-autoregressive encoder-only speech architecture for IBM Granite Speech 5.0 |
| [#27861](https://github.com/ggml-org/llama.cpp/pull/27861) | ggml | GPU-resident LRU cache for host-offloaded MoE expert weights — decodes host-offloaded MoE layers at host-RAM bandwidth instead of streaming every token |
| [#29442](https://github.com/ggml-org/llama.cpp/pull/29442) | CUDA | BF16/FP16 → f32 conversion chunking with `GGML_CUDA_CUBLAS_CONVERT_CHUNK_SIZE` to lower VRAM usage during conversion |
| [#29430](https://github.com/ggml-org/llama.cpp/pull/29430) | tools/quantize | Opt-in `--verify` flag for `llama-quantize`: reloads input/output GGUF, dequantizes, and prints per-tensor error JSON with max/RMS error and 150-bucket histogram |
| [#29423](https://github.com/ggml-org/llama.cpp/pull/29423) | ggml-cpu | Enables tiled flash attention for non-vector-multiple head dims on x86 (e.g. head-size 72), removing an order-of-magnitude fallback penalty |
| [#29030](https://github.com/ggml-org/llama.cpp/pull/29030) | model, server | Lazy tensor rows with direct reads for qwen4exp/gemma4 — replaces mmap-backed `on` mode, supersedes #28136 |
| [#28849](https://github.com/ggml-org/llama.cpp/pull/28849) | server | Auto-fitting now tries up to model context length × parallel slots for unified KV, matching no-unified-KV capacity behavior |
| [#29273](https://github.com/ggml-org/llama.cpp/pull/29273) | CI, SYCL | Updates oneAPI toolkit from 2025.3.3 to 2026.1; preserves oneDNN support after its removal from the DLE package |
| [#29440](https://github.com/ggml-org/llama.cpp/pull/29440) | RPC | Uses RDMA completion channel instead of 100% spin on `rdma_poll` |
| [#29434](https://github.com/ggml-org/llama.cpp/pull/29434) | common | Shows downloaded/total size in HuggingFace download progress bar (e.g. `71% [0.56 / 0.78 GB]`) |

---

## 5. Feature Request Trends

Across the open issues, several recurring feature directions stand out:

- **K2-Horizon / MoVA architecture support** — Multiple issues (#29424, #28361) call for loading and inference support for the K2 Horizon MoE/MoVA model family. This appears to be an urgent community priority.
- **Tool gating & agentic optimizations** — #29022 requests prefill-logit slicing for single-pass tool selection, and #24375 asks for smarter UI hints (microphone button) when models support audio. The broader theme is reducing per-step overhead in tool-using agents.
- **Unified KV & concurrent serving improvements** — #28495, #25992,

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*