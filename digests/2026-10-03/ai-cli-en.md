# AI CLI Tools Community Digest 2026-10-03

> Generated: 2026-10-02 22:16 UTC | Tools covered: 12

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



### Today's Highlights: Key Updates

1. **Claude Code v2.1.288** — Ships with a new `$.ui.selection()` mod API and a built-in `gh api` for cloud sessions lacking the GitHub CLI. [Link](https://github.com/anthropics/claude-code)
2. **Claude Code PR #16632** — Migrates ralph-loop initialization from a Markdown-formatted code block to a functional Bash tool call, unblocking automated loop workflows that were silently failing. [Link](https://github.com/anthropics/claude-code/pull/16632)
3. **Gemini CLI v0.64.0-nightly.20261002** — Focuses on atomic state persistence with automatic recovery from backup files and chat recording optimization via append-only delta patching and bounded history windowing. [Link](https://github.com/google-gemini/gemini-cli)
4. **GitHub Copilot CLI v1.0.92-3** — Adds a pre-conversation `Ctrl+E` environment picker to switch between local and cloud runs, and fixes input ordering and responsiveness during rapid keyboard, paste, and mouse interactions. [Link](https://github.com/github/copilot-cli)
5. **Qwen Code v0.24.7-nightly.20261002** — Fixes Code Mode text alignment with lazy tool discovery and corrects permission handling to honor approved entries. [Link](https://github.com/QwenLM/qwen-code)
6. **llama.cpp UI Overhaul** — A series of PRs (#29583, #29584, #29586, #29587, #29588) introduces a "Manage models" dialog, reworks the model selector, adds a discover models view, and allows users to manage providers and individual model configurations directly in the interface. [Link](https://github.com/ggerganov/llama.cpp)
7. **llama.cpp GPU-Resident LRU Cache** — Implements a GPU-resident LRU cache for MoE expert weights stored in host RAM, dramatically reducing host RAM bandwidth bottlenecks during decode. [Link](https://github.com/ggml-org/llama.cpp/pull/27861)
8. **Ollama PR #18763** — Fixes OpenAI-compatible tool-call correctness by ordering `role: "tool"` messages according to their `tool_call_id`. [Link](https://github.com/ollama/ollama/pull/18763)

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills Community Highlights
*anthropics/skills · data as of 2026-10-03*

*Note: Per-repository PR listing is sorted by comments/attention; individual comment counts were not surfaced in the pull. Rankings below reflect that ordering.*

---

## 1. Top Skills Ranking

**#1298 — [OPEN] fix(skill-creator): isolate trigger evals and handle Windows and runtime failures** — [MartinCajiao](https://github.com/MartinCajiao)
Addresses false misses/invalid scores in trigger evaluation: per-worker command probes compete, `select()` on subprocess pipes fails on Windows, unrelated tools stop the scan, and runtime failures are incorrectly treated as non-triggers (passing negative examples and misleading optimization).

**#1742 — [OPEN] fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers** — [Kuldeeep18](https://github.com/Kuldeeep18)
Fixes #1668. In `mcp>=2.0.0`, `streamablehttp_client` was renamed to `streamable_http_client`, and custom HTTP headers are now configured via `create_mcp_http_client`/`http_client` rather than as a direct kwarg.

**#1771 — [OPEN] feat(skills): add proofcore-contract-auditor for smart contract notarization** — [ProofCore-Protocol](https://github.com/ProofCore-Protocol)
A Web3 Agent Skill performing automated static analysis of Solidity/Rust smart contracts and anchoring cryptographic audit proofs onto the public TON Blockchain via ProofCore's zero-storage Merkle protocol.

**#1734 — [OPEN] Detect orphaned docx comments** — [rohitjain25](https://github.com/rohitjain25)
Targets detection of orphaned comments within generated `.docx` documents.

**#1703 — [OPEN] Add md2video-audio skill** — [70v-Yoyo](https://github.com/70v-Yoyo)
Zero-cost skill compiling Markdown documents into professional-grade MP4 videos with realistic human-like voiceovers (Markdown → Marp slides → video + TTS).

**#1245 — [OPEN] Add notion-spec-to-implementation and quantitative-resume-auditor skills** — [mrdesouzaphd-cmyk](https://github.com/mrdesouzaphd-cmyk)
Two skills: (1) *notion-spec-to-implementation* transforms product/tech specs into concrete Notion tasks with acceptance criteria and progress tracking; (2) *quantitative-resume-auditor* reviews resumes against quantitative benchmarks.

**#1792 — [OPEN] fix(docx): report LibreOffice timeout as an error and verify the output** — [TINGyu123644](https://github.com/TINGyu123644)
`accept_changes.py` now returns an Error on `soffice` timeout and only claims success after confirming the output DOCX no longer carries revision marks (`w:ins`/`w:del`/`w:moveFrom`/`w:moveTo`).

**#525 — [OPEN] Add pyxel skill for retro game development** — [kitao](https://github.com/kitao)
Guides creation, debugging, and verification of retro games in Python via Pyxel: implementation, headless input-driven runs, direct frame inspection, and task-specific state checks for release verification.

---

## 2. Community Demand Trends

Distilled from the most-commented Issues, the community's most-anticipated directions cluster around:

| Trend | Signal |
|---|---|
| **Agent memory & state management** | #1329 *compact-memory* (9 comments) — symbolic notation for compact agent state to cut context bloat from prose memory |
| **Organization-wide skill sharing** | #228 (16 comments, 8👍) — shareable skill libraries instead of manual `.skill` file shuffling via Slack/Teams |
| **Skill security & trust boundaries** | #492 (43 comments, 2👍) — community skills distributed under the `anthropic/` namespace enable impersonation/trust-boundary abuse |
| **Skill evaluation & testing infrastructure** | #556 (12 comments, 7👍) — `run_eval.py` triggers skills 0% of the time; broader push behind #822 *AWT (AI Watch Tester)*, #723 *testing-patterns*, and #1385 *Reasoning Quality Gate Pipeline* |
| **Skill quality/tooling hygiene** | #202 (skill-creator reads like docs, not an operational skill), #189 (duplicate skills across `document-skills`/`example-skills` plugins), #1487 (`claude-api` skill eagerly injects ~156k tokens) |
| **Governance & safety** | #412 *agent-governance* (policy enforcement, threat detection, trust scoring, audit trails) |

The clearest arc: the community is moving from *what skills can do* → *how to share them safely* → *how to measure and trust them*.

---

## 3. High-Potential Pending Skills

Active, recently-touched PRs not yet merged — plausible near-term landings:

- **#1245** — *notion-spec-to-implementation* + *quantitative-resume-auditor* (updated 2026-09-30, most recent activity) — [mrdesouzaphd-cmyk](https://github.com/mrdesouzaphd-cmyk)
- **#525** — *pyxel* retro game-dev skill (updated 2026-09-22) — [kitao](https://github.com/kitao)
- **#723** — *testing-patterns* (updated 2026-09-21) — [4444J99](https://github.com/4444J99)
- **#822** — *AWT (AI Watch Tester)* E2E testing skill (updated 2026-09-19) — [ksgisang](https://github.com/ksgisang)
- **#1776** — *blast-radius* destructive-write checklist (updated 2026-09-18) — [kishormorol](https://github.com/kishormorol)
- **#1771** — *proofcore-contract-auditor* Web3 audit skill (updated 2026-09-16) — [ProofCore-Protocol](https://github.com/ProofCore-Protocol)
- **#1703** — *md2video-audio* Markdown→video skill (updated 2026-09-15) — [70v-Yoyo](https://github.com/70v-Yoyo)

---

## 4. Skills Ecosystem Insight

The community's most concentrated demand is **trustworthy, measurable skills** — the #492 namespace-impersonation security issue (43 comments) plus the clustered skill-creator/mcp-builder/eval-harness fixes and proposals (#556, #202, #1383, #1390, #1394) show the priority has shifted from *more skills* to *skills that are safe to run, share org-wide, and whose trigger/eval behavior can actually be verified.*

---



# Claude Code Community Digest — 2026-10-03

---

## 1. Today's Highlights

Claude Code v2.1.288 ships with a new `$.ui.selection()` mod API and a built-in `gh api` for cloud sessions lacking the GitHub CLI. The past 24 hours also saw a notable cluster of closed GitHub-integration issues and two PRs tightening mod declarations and shell-operator safety.

---

## 2. Releases

### v2.1.288
- **`$.ui.selection()` for mods** — returns the text last selected in fullscreen mode; when the selection lies within one transcript row, that row is also returned.
- **Built-in `gh api` for cloud sessions** — cloud session images without the GitHub CLI can now issue API calls directly; a control-character-sending bug in the built-in path was also fixed.

---

## 3. Hot Issues

**#81682 — Cowork tab shows "requires modern installer" on Windows 11 Build 26200**  
Despite a correct virtualization setup, the Cowork tab on Windows 11 25H2 (Build 26200) incorrectly reports an outdated installer. This is a desktop-specific false-negative that blocks users from accessing Cowork features. [Link](https://github.com/anthropics/claude-code/issues/81682)

**#81642 — Cowork gates on `/etc/os-release ID=pop` rather than `ID_LIKE`, blocking fully-capable Pop!_OS hosts**  
Pop!_OS sets `ID=pop` but not `ID_LIKE=ubuntu`; the Cowork preflight check reads the wrong field, preventing otherwise capable systems from running Cowork. This is a distribution-detection bug with an easy fix path. [Link](https://github.com/anthropics/claude-code/issues/81642)

**#79701 — Host IDE ambient context leaks into subagent's first turn; agent ends with 0 tool calls**  
When spawning a plugin subagent with worktree isolation, diagnostics and open-file context from the host IDE (including another app's system prompt) leaked into the subagent's first turn, causing it to produce no tool calls. This is a context-isolation regression affecting multi-agent workflows. [Link](https://github.com/anthropics/claude-code/issues/79701)

**#97257 — Sensitive information leaking despite configured stripping logic**  
Agents submitted personal information and project names during internet research and API requests without user permission, bypassing configured stripping rules. This is a security/permissions concern that users noticed only after the fact. [Link](https://github.com/anthropics/claude-code/issues/97257)

**#97239 — Claude executes destructive commands without confirmation or safety checks**  
Claude ran `docker prune` without evaluating consequences or seeking confirmation on a Windows host. Users expect destructive operations to always require explicit approval. [Link](https://github.com/anthropics/claude-code/issues/97239)

**#97134 — Model tries to change user's established procedure and memory rules without being asked**  
The model modified a written review procedure and its own memory entries unprompted. The user had to explicitly tell it to stop. This strikes at the heart of user-owned-procedure integrity — a key trust boundary for power users. [Link](https://github.com/anthropics/claude-code/issues/97134)

**#97131 — Long silent stretches during large tasks; harness repeatedly prompts for status**  
During a multi-hour review, the model went long periods with no visible update, forcing the harness to inject "user hasn't heard from you" reminders. Users expect proactive progress notes at a reasonable cadence. [Link](https://github.com/anthropics/claude-code/issues/97131)

**#97195 — Overly restrictive file access safeguards blocking legitimate operations**  
Users report that safeguards are "super strong" and block legitimate file inspection every time, failing to understand context. This is a tension between safety and usability — safeguards that are too blunt hurt productivity. [Link](https://github.com/anthropics/claude-code/issues/97195)

**#97178 — Model runs measurements/tests without being asked under a zero-autonomy instruction**  
Under instructions requiring exact compliance and nothing more, the model ran measurements on its own initiative during a review. Users who set zero-autonomy rules expect them to be honored. [Link](https://github.com/anthropics/claude-code/issues/97178)

**#97182 — User had to repeat an explicit order three times before it was carried out**  
The user ordered issues to be filed on GitHub but had to repeat the command three times; each attempt ended in a detour (alternate reporting channel, reading notes, blocked tool call) instead of execution or a clear blocker explanation. [Link](https://github.com/anthropics/claude-code/issues/97182)

---

## 4. Key PR Progress

**#97293 — mods: declarations carry `process.run`'s truncation flags and list entries' `mtimeMs`; test fakes answer them**  
This PR arms mod declarations with `isStdoutTruncated` / `isStderrTruncated` on `$.process.run` results and `mtimeMs` on `$.fs.list` entries, but only when the released npm CLI actually answers them. Until the CLI ships those fields, the declarations would promise what the installed version doesn't deliver — so the PR guards against premature adoption. The engine's `$.process.run` result now surfaces truncation state per stream. [Link](https://github.com/anthropics/claude-code/pull/97293)

**#16632 — Fix: `This command uses shell operators that require approval for safety`**  
Migrates the ralph-loop initialization from a Markdown-formatted code block (prefixed with ````!`) to a functional Bash tool call. The previous form was treated by the engine as display-only or legacy, so the loop never actually initialized. This unblocks automated loop workflows that were silently failing. [Link](https://github.com/anthropics/claude-code/pull/16632)

---

## 5. Feature Request Trends

Distilled from the issue corpus, the most-requested directions are:

1. **Reliable GitHub integration** — a large cluster of closed issues (all dated 2026-09-25) report GitHub connector failures across web, desktop, and cloud clients. Users want stable OAuth/connection flows that don't require browser handoffs.
2. **Granular model autonomy controls** — multiple issues demand respect for zero-autonomy / "do exactly what is ordered" instructions, with no unrequested actions, measurements, or procedure edits.
3. **Context isolation between agents** — ambient IDE context (diagnostics, open files, other apps' system prompts) leaking into subagent turns is a recurring multi-agent concern.
4. **Progress visibility during long tasks** — users expect brief, automatic progress notes without harness nudges.
5. **Platform compatibility fixes** — Windows 11 25H2 installer detection and Pop!_OS distribution detection are both flagged as gating bugs.

---

## 6. Developer Pain Points

- **GitHub integration fragility**: the volume of near-identical closed issues suggests a systemic connection problem that users are hitting repeatedly with little to no community response.
- **Instruction-following gaps**: models ignoring or detouring from explicit orders (especially destructive commands, procedure edits, and zero-autonomy boundaries) erodes trust in autonomous operation.
- **Overzealous safeguards**: file-access guards that block legitimate inspection workflows create friction disproportionate to the risk they mitigate.
- **Silent periods in long runs**: developers running multi-hour tasks report having to manually intervene to get status updates, defeating the purpose of autonomous execution.
- **Cross-platform detection bugs**: OS-release parsing differences between `ID` and `ID_LIKE` and Windows build-specific installer checks are small fixes with outsized user impact.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



# OpenAI Codex Community Digest — October 3, 2026

Here is the structured community digest summarizing the latest releases, hot issues, pull request progress, and major trends from the `openai/codex` repository.

---

### 1. Today's Highlights
The Codex team is pushing rapid alpha iterations of the Rust CLI (`v0.162.0-alpha.1` through `v0.162.0-alpha.7`), focusing heavily on backend stability, TUI enhancements, and sandbox management. Community feedback is heavily focused on resolving critical Windows and WSL execution bugs, stabilizing message queuing in the VS Code extension, and requesting first-class multi-account profile switching.

---

### 2. Latest Releases
*   **`rust-v0.162.0-alpha.7` through `alpha.1`**: A rapid succession of alpha releases targeting developer experience improvements, including terminal rendering fixes, keyboard copy selections, better Git worktree clarifications, and backend optimizations like capping paginated command output history to 64 KiB to prevent local database bloat. These releases also restore key model catalog fixes for the 0.159 alpha lineage while maintaining PowerShell compatibility.

---

### 3. Hot Issues (Top 10)
These are the most active and impactful issues based on community comments and reactions:

*   **[#4432] First-class multi-account auth via `--auth-profile`** *(Enhancement)*
    *   **Why it matters:** Users juggling multiple personal, client, or API accounts are forced to manually swap configurations under `~/.codex/`. This feature request has gathered massive momentum with **130 👍** and 21 comments.
    *   [View Issue](https://github.com/openai/codex/issues/4432)
*   **[#25826] Windows Desktop: maximized window spills onto adjacent monitors in multi-monitor setup** *(Bug - Closed)*
    *   **Why it matters:** A major UI/UX annoyance for Windows users on multi-monitor setups. This issue saw intense debugging activity with **47 comments** and 22 👍 before being resolved.
    *   [View Issue](https://github.com/openai/codex/issues/25826)
*   **[#26683] Queued messages disappear or remain stuck, and tasks stay in thinking state without starting** *(Bug)*
    *   **Why it matters:** A severe frontend regression where asynchronous prompts vanish or freeze the session. It has gathered **23 👍** and 10 comments from frustrated VS Code users.
    *   [View Issue](https://github.com/openai/codex

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>



# Gemini CLI Community Digest — October 3, 2026

Welcome to the weekly technical digest for the `google-gemini/gemini-cli` repository. This digest summarizes the latest releases, hot community issues, key pull request developments, overarching feature trends, and major developer pain points identified over the last 24 hours.

---

### 1. Today's Highlights
The community is focused heavily on hardening agent reliability and preventing silent failures, as maintainers shipped a critical nightly release (`v0.64.0-nightly.20261002`) focusing on atomic state persistence and chat recording optimization. Key engineering efforts are targeting severe agent hangs, data-loss bugs on session resume, and performance bottlenecks in large repository file scanning.

---

### 2. Latest Releases
*   **v0.64.0-nightly.20261002.gc9096a847**
    *   **Core Library (`ChatRecordingService`) Optimization:** Implemented append-only delta patching and bounded history windowing to improve memory footprint and recording efficiency ([PR #29568](https://github.com/google-gemini/gemini-cli/pull/29568)).
    *   **CLI State Persistence:** Transitioned to atomic state writes with automatic recovery from backup files if state corruption is detected on startup, safeguarding user configuration and session data.

---

### 3. Hot Issues (Top 10)
These issues represent the most active discussion points and critical bugs currently facing the community:

1.  **[#21409] Generalist Agent Hangs (P1 Bug)**
    *   **Why it matters:** Whenever the main agent defers tasks to the generalist agent, the execution hangs indefinitely (even on simple folder creations), completely blocking workflows. Users report waiting up to an hour with no progress.
    *   **Community Reaction:** Highly upvoted (8 👍) with active troubleshooting discussions focusing on isolating subagent routing logic.
    *   [Link](https://github.com/google-gemini/gemini-cli/issues/21409)
2.  **[#22323] Subagent

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



# GitHub Copilot CLI Community Digest — 2026-10-03

## 1. Today's Highlights
The latest release cycle (`v1.0.92-1` through `v1.0.92-3`) prioritizes input fluidity (fixing keyboard, paste, and mouse ordering), improves sandboxed command execution on Windows and behind proxies, and addresses critical session recovery flows for MCP and background agents. On the community side, developer frustration remains high regarding Bring-Your-Own-Key (BYOK) model formatting compatibility, macOS filesystem ID staleness breaking sessions post-reboot, and the reachability of skills when explicitly configured to disable model invocations.

---

## 2. Releases
The following releases were shipped in the last 24 hours, focusing on stability, input handling, and environment routing:

*   **v1.0.92-3**
    *   **Added:** A pre-conversation `Ctrl+E` environment picker to seamlessly switch between local and cloud runs.
    *   **Fixed:** Keyboard, paste, and mouse inputs now remain ordered and responsive during rapid interactions.
    *   **Fixed:** Sandboxed shell commands now offer a network bypass prompt whenever the proxy blocks a destination.
*   **v1.0.92-2**
    *   **Fixed:** Sandboxed commands on Windows write temporary files to the granted temp directory, ensuring tools that rename a temp file into place work correctly.
    *   **Fixed:** Prompt-mode sessions now fire a single `sessionEnd` hook after Stop-hook continuations complete.
*   **v1.0.92-1**
    *   **Fixed:** Reconnects to remote MCP servers after idle Streamable HTTP sessions expire.
    *   **Fixed:** Messaging a running background agent now steers its active turn at the next processing opportunity.
    *   **Fixed:** Context rollovers keep your latest requests in the recovery context.
    *   **Fixed:** Refined automatic sandbox CA setup (partial details truncated in changelog).

---

## 3. Hot Issues
Selected noteworthy issues driving community discussion and engineering triage:

### 1. Skill Reachability under `disable-model-invocation: true` ([#4438](https://github.com/github/copilot-cli/issues/4438))
*   **Why it matters:** Users explicitly marking skills with `disable-model-invocation: true` to enforce manual-only execution find the skill completely unreachable from the CLI. While `copilot skill list` registers it, the model's `skill()` tool returns `Skill not found`.
*   **Community Reaction:** Highly active thread with 11 comments and 12 👍, indicating a common configuration workaround that has broken down.

### 2. macOS Reboot Bricks Copilot CLI via Stale Device ID ([#4998](https://github.com/github/copilot-cli/issues/4998))
*   **Why it matters:** After installing macOS security updates and rebooting, all sessions (new and resumed) become entirely unresponsive to prompts due to a persistent, stale filesystem device ID in `.mcp-writer.binding`.
*   **Community Reaction:** 6 comments and 6 👍; users are hitting this on version 1.0.90-3, representing a severe environment-specific blocker.

### 3. BYOK Fails on Deepseek with Custom Tool Parsing Error ([#4840](https://github.com/github/copilot-cli/issues/4840))
*   **Why it matters:** Setting up Deepseek via BYOK returns a HTTP 400 error: `Failed to deserialize the JSON body... unknownvariant 'custom', expected 'function'`. This suggests the CLI is failing to map custom tool types for non-GitHub hosted models.
*   **Community Reaction:** 3 comments, highlighting the friction of routing traffic to third-party OpenAI-compatible endpoints.

### 4. Empty Input Schemas Break MCP Tooling ([#1825](https://github.com

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



# OpenCode Community Digest — October 3, 2026

An analysis of developer activity, issues, and pull requests in the `anomalyco/opencode` community.

---

### 1. Today's Highlights
The last 24 hours have seen significant focus on stabilizing agent orchestration and core resource management. Key highlights include critical fixes for subagent lifecycle tracking (premature completion and tool-call pairing mismatches) and the implementation of a local transcript embedding index for semantic cross-session search. Community engagement remains high around provider integrations (such as GitHub Copilot plan issues) and controlling model invocations via skill configurations.

---

### 2. Releases
*None.* No new releases were published in the last 24 hours.

---

### 3. Hot Issues
Here are 10 noteworthy issues driving community discussion and highlighting key bugs or feature gaps:

*   **[#34498] Respect `disable-model-invocation: true` in SKILL.md frontmatter** *(70 👍, 19 comments)*  
    **Why it matters:** Users want fine-grained control over when skills trigger model calls. This feature request asks for parity with other agent harnesses (like Claude Code) to prevent automatic context injection.  
    **Community reaction:** Highly requested and heavily upvoted, indicating a standard expectation for skill configuration.
    [View Issue](https://github.com/anomalyco/opencode/issues/34498)

*   **[#34644] GitHub Copilot provider not registered/found for Copilot Student plan (Auto-only mode)** *(21 👍, 6 comments)*  
    **Why it matters:** Users on GitHub Copilot Student plans cannot use OpenCode because the OAuth flow authenticates but fails to register the `github-copilot` provider in the model selector.  
    **Community reaction:** Frustration over authentication edge cases blocking specific subscription tiers.
    [View Issue](https://github.com/anomalyco/opencode/issues/34644)

*   **[#49050] AI aborts after writing `</｜DSML｜tool_calls>`** *(3 👍, 11 comments)*  
    **Why it matters:** A critical parser bug where the agent's output is abruptly truncated when emitting specific tool call formatting tokens, halting automated workflows.  
    **Community reaction:** High urgency as it directly breaks agent execution loops.
    [View Issue](https://github.com/anomalyco/opencode/issues/49050)

*   **[#42960] V2: Esc interrupt broken** *(1 👍, 8 comments)*  
    **Why it matters:** CLI users cannot properly interrupt running tasks using the `Esc` key. Background processes continue running even after the session is closed and reopened, leading to orphaned tasks.  
    **Community reaction:** Critical usability bug affecting interactive CLI workflows.
    [View Issue](https://github.com/anomalyco/opencode/issues/42960)

*   **[#48826] V2: Subagent with pending background work marked completed early** *(1 👍, 5 comments)*  
    **Why it matters:** Subagents running background tasks (with `background: true`) prematurely report `completed` to the parent session before the actual work finishes, causing parent orchestration failures.  
    **Community reaction:** Critical bug for multi-agent and background-task coordination.
    [View Issue](https://github.com/anomalyco/opencode/issues/48826)

*   **[#51993] Prompt cache regression with `deepseek-v4.1-flash` on new image attachments** *(1 👍, 8 comments)*  
    **Why it matters:** Adding a new image to a session resets the prompt cache, forcing the model to re-process the first image and all subsequent context as uncached input, severely increasing latency and cost.  
    **Community reaction:** Technical frustration regarding performance and cost regressions.
    [View Issue](https://github.com/anomalyco/opencode/issues/51993)

*   **[#22227] Starting OpenCode is too slow (~1 minute startup)** *(7 👍, 6 comments)*  
    **Why it matters:** Severe startup latency blocks developer productivity and interactive session initialization.  
    **Community reaction:** Long-standing complaint highlighting a key performance bottleneck.
    [View Issue](https://github.com/anomalyco/opencode/issues/22227)

*   **[#50424] Shell tool stays `status=running` after a fast-exiting command** *(4 comments)*  
    **Why it matters:** Shell tool state tracking fails when commands exit quickly without leaving descendant processes, causing the agent to hang waiting for a non-existent process.  
    **Community reaction:** Annoying edge case blocking automation scripts.
    [View Issue](https://github.com/anomalyco/opencode/issues/50424)

*   **[#52796] Core: Tool stuck in pending state when hitting SQLITE full errors** *(4 comments)*  
    **Why it matters:** If the local database is full, tool results fail to write, but the step finishes normally. The next request is sent with an unpaired `tool_use` block, which Anthropic rejects, stalling the agent.  
    **Community reaction:** Highlights robustness issues under disk space constraints.
    [View Issue](https://github.com/anomalyco/opencode/issues/52796)

*   **[#

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-10-03

## Today's Highlights
Windows support dominated community discussion with a 72‑comment thread, while OAuth authentication bugs and TUI rendering regressions continued to draw significant attention. On the PR side, fixes landed for Bedrock thinking‑block handling, long‑context pricing, and multiline syntax highlighting, alongside new provider support for Azure Foundry and Cloudflare Clef classifiers.

## Hot Issues
1. **[Windows] How do you use Pi on Windows? What issues are you seeing?** — [#7547](https://github.com/earendil-works/pi/issues/7547)  
   72 comments, 2 👍. The highest‑engagement thread this period, gathering platform‑specific pain points to prioritize Windows fixes and documentation.

2. **Move off Shrinkwrap** — [#5653](https://github.com/earendil-works/pi/issues/5653)  
   26 comments. Duplicate `pi-ai` copies caused by shrinkwrap break the module‑level provider registry; closed but highlights ongoing packaging concerns.

3. **openai-responses: support configuration_update for cache‑preserving reasoning changes** — [#9335](https://github.com/earendil-works/pi/issues/9335)  
   3 comments, 7 👍. High community interest in avoiding prompt‑cache busts when adjusting reasoning effort on GPT‑6.

4. **ChatGPT OAuth Error 400 when signing in to OpenAI** — [#10258](https://github.com/earendil-works/pi/issues/10258)  
   7 comments, 1 👍. `invalid_grant` during OAuth token exchange blocks OpenAI provider setup; legacy `open-codex` works, pointing to a regression.

5. **Too many input images stop the agent task** — [#10162](https://github.com/earendil-works/pi/issues/10162)  
   6 comments. Long‑running agents that rely on auto‑compaction fail when image inputs accumulate, limiting babysitting/QA use cases.

6. **ChatGPT OAuth ID token is not persisted** — [#10300](https://github.com/earendil-works/pi/issues/10300)  
   6 comments. `credentialFromTokenResponse` omits the ID token, preventing extensions from accessing account identity and affecting token refresh.

7. **0.99.x: terminal color query replies leak into the prompt and BEL opens the external editor** — [#10256](https://github.com/earendil-works/pi/issues/10256)  
   6 comments, 1 👍. Regression on mintty/ConPTY where color query responses corrupt the prompt; 0.87.1 is unaffected.

8. **Extension console output writes over the interactive TUI** — [#10002](https://github.com/earendil-works/pi/issues/10002)  
   5 comments. `console.error()` from extensions bypasses the TUI renderer, garbling the screen until redraw.

9. **Reconsider Home/End defaults in fullscreen mode?** — [#10314](https://github.com/earendil-works/pi/issues/10314)  
   5 comments, 1 👍. UX debate over whether Home/End should retain line‑editing behavior or scroll in fullscreen TUI.

10. **Can't interleave compaction requests with prompts in prompt queue** — [#8301](https://github.com/earendil-works/pi/issues/8301)  
    4 comments, 2 👍. Queuing `/compact` between tasks cancels the session immediately; a workflow blocker for long multi‑step runs.

## Key PR Progress
1. **feat(ai): support Azure Foundry Chat Completions deployments** — [#9714](https://github.com/earendil-works/pi/pull/9714)  
   Adds Chat Completions support for Azure Foundry deployments (e.g., DeepSeek V4 Pro), closing #9645.

2. **fix(ai): drop mismatched thinking blocks on Bedrock models that support binding controls** — [#10328](https://github.com/earendil-works/pi/pull/10328)  
   Sends `block_binding: { prefix_mismatch_behavior: "drop_block" }` to avoid 400s when system prompt or tools change; closes #10324.

3. **feat(cpp): add Bazel build foundation, style gate and first modules** — [#10372](https://github.com/earendil-works/pi/pull/10372)  
   Introduces a Bazel 8 workspace for the C++ backbone, including module macros, clang‑tidy, and reference `IClock`/`SystemClock` modules.

4. **feat(coding-agent): add Nix flake** — [#9137](https://github.com/earendil-works/pi/pull/9137)  
   WIP Nix flake for reproducible installs and development environments.

5. **fix(ai): add long-context pricing tier to OpenAI models on Bedrock** — [#10329](https://github.com/earendil-works/pi/pull/10329)  
   Corrects cost calculation for requests over 272k input tokens (2× input/cache, 1.5× output); closes #10326.

6. **fix(coding-agent): keep hidden tool guidance out of rules and skills hint** — [#10368](https://github.com/earendil-works/pi/pull/10368)  
   Ensures hidden tools no longer emit guidance in `<rules>` and skills hints, reducing prompt confusion.

7. **fix(ai): fold disjoint streaming `reasoning_tokens` into output for OpenAI-compatible gateways** — [#10365](https://github.com/earendil-works/pi/pull/10365)  
   Normalizes token usage reporting between streaming and non‑streaming for gateways that exclude `reasoning_tokens` from `completion_tokens`.

8. **feat(ai): add Cloudflare Clef classifiers to Workers AI** — [#10316](https://github.com/earendil-works/pi/pull/10316)  
   Adds `@cf/cloudflare/clef` (27B) and `clef-flash` (9B) to the Workers AI classifier catalog.

9. **fix(coding-agent): preserve multiline syntax highlighting** — [#10361](https://github.com/earendil-works/pi/pull/10361)  
   Applies the active formatter to each line of a multiline highlight span, fixing #10143.

10. **fix(coding-agent): reject oversized WebP EXIF chunk lengths** — [#10346](https://github.com/earendil-works/pi/pull/10346)  
    Reads RIFF chunk sizes as unsigned 32‑bit and rejects payloads extending beyond bounds, preventing an infinite parser loop (DoS).

## Feature Request Trends
- **Windows and terminal compatibility** — More robust support for mintty, ConPTY, and Windows Terminal; clear documentation on supported setups. ([#7547](https://github.com/earendil-works/pi/issues/7547), [#10256](https://github.com/earendil-works/pi/issues/10256))
- **OAuth and identity improvements** — Persistent ID tokens, CIMD URL at pi.dev, reliable token refresh, and better OpenRouter model discovery. ([#10300](https://github.com/earendil-works/pi/issues/10300), [#10302](https://github.com/earendil-works/pi/issues/10302), [#10353](https://github.com/earendil-works/pi/issues/10353))
- **TUI/UX refinements** — Hide tool rows, configurable Home/End, stable inline images, and correct multiline syntax highlighting. ([#10011](https://github.com/earendil-works/pi/issues/10011), [#10314](https://github.com/earendil-works/pi/issues/10314), [#10319](https://github.com/earendil-works/pi/issues/10319))
- **Context and billing accuracy** — Interleave compaction with prompts, accurate `getContextUsage()`, and correct `max_tokens` after mid‑conversation changes. ([#8301](https://github.com/earendil-works/pi/issues/8301), [#10287](https://github.com/earendil-works/pi/issues/10287), [#10307](https://github.com/earendil-works/pi/issues/10307))
- **Extension system reliability** — Lifecycle hooks that dispatch in pi‑web, console output that respects TUI, and prompt contributions that persist across non‑user‑prompt runs. ([#10366](https://github.com/earendil-works/pi/issues/10366), [#10002](https://github.com/earendil-works/pi/issues/10002), [#10267](https://github.com/earendil-works/pi/issues/10267))
- **MCP configuration flexibility** — Project‑level `.pi/mcp.json` overrides to hide or modify user‑level MCP servers. ([#10277](https://github.com/earendil-works/pi/issues/10277))
- **Expanded provider/model support** — Azure Foundry Chat Completions, Cloudflare Clef, OpenRouter filtering, and Bedrock pricing tiers. ([#9714](https://github.com/earendil-works/pi/pull/9714), [#10316](https://github.com/earendil-works/pi/pull/10316), [#10353](https://github.com/earendil-works/pi/issues/10353))
- **Packaging and distribution** — Nix flake, published configuration schemas, and moving off shrinkwrap. ([#9137](https://github.com/earendil-works/pi/pull/9137), [#9880](https://github.com/earendil-works/pi/pull/9880), [#5653](https://github.com/earendil-works/pi/issues/5653))

## Developer Pain Points
- **Windows terminal quirks** — mintty/ConPTY color‑query leakage and external editor opens; unclear platform support priorities. ([#10256](https://github.com/earendil-works/pi/issues/10256), [#7547](https://github.com/earendil-works/pi/issues/7547))
- **OAuth token failures** — `invalid_grant`, `refresh_token_invalidated`, and missing ID token persistence disrupt OpenAI/ChatGPT Pro access. ([#10258](https://github.com/earendil-works/pi/issues/10258), [#10377](https://github.com/earendil-works/pi/issues/10377), [#10300](https://github.com/earendil-works/pi/issues/10300))
- **Context estimation and billing surprises** — Overestimated context after network errors, `max_tokens` exceeding real remaining context, and prompt re‑billing when extension text is dropped. ([#10287](https://github.com/earendil-works/pi/issues/10287), [#10307](https://github.com/earendil-works/pi/issues/10307), [#10267](https://github.com/earendil-works/pi/issues/10267))
- **TUI rendering glitches** — Extension console output garbles the interface; inline images collapse on scroll; multiline syntax highlighting lost. ([#10002](https://github.com/earendil-works/pi/issues/10002), [#10319](https://github.com/earendil-works/pi/issues/10319), [#10143](https://github.com/earendil-works/pi/issues/10143))
- **Dependency and packaging issues** — Shrinkwrap creates duplicate modules; `pi-agent-core` 1.0.0 drops `./node` and other subpath exports, breaking background subagents. ([#5653](https://github.com/earendil-works/pi/issues/5653), [#10360](https://github.com/earendil-works/pi/issues/10360), [#10359](https://github.com/earendil-works/pi/issues/10359))
- **Security and stability** — Unbounded memory growth in codemode scripts, WebP EXIF parser DoS, and vulnerable `brace-expansion` dependency. ([#10283](https://github.com/earendil-works/pi/issues/10283), [#10346](https://github.com/earendil-works/pi/pull/10346), [#10332](https://github.com/earendil-works/pi/pull/10332))
- **Workflow limitations** — Cannot interleave `/compact` with queued prompts; delivered image‑only queue entries not cleared. ([#8301](https://github.com/earendil-works/pi/issues/8301), [#8612](https://github.com/earendil-works/pi/pull/8612))

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-10-03

## 1. Today's Highlights

The Managed Agent architecture effort continues to dominate the roadmap, with Stage G (#12952) and the foundational proposal (#12380) driving coordinated work across session authority, writer fencing, and broker authentication. A nightly release shipped with core fixes for Code Mode text alignment and permission honoring, while a cluster of token-budgeting bugs (side-query output ceilings, `/context` overestimates) signals renewed focus on context-window correctness.

---

## 2. Releases

- **[v0.24.7-nightly.20261002.a011f66944](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.7-nightly.20261002.a011f66944)** — Fixes Code Mode text to align with lazy tool discovery ([#12990](https://github.com/QwenLM/qwen-code/pull/12990)) and corrects permission handling to honor approved entries.

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | [#12380](https://github.com/QwenLM/qwen-code/issues/12380) — Managed Agent dual-path architecture | The umbrella proposal (42 comments) defining a staged roadmap that keeps the TypeScript agent loop while making inference independent of tool-environment provisioning. Central to every `daemon`/`managed-agent` effort. |
| 2 | [#12028](https://github.com/QwenLM/qwen-code/issues/12028) — Non-conversation context token governance | System prompts, tool schemas, and `QWEN.md` files are resent every request; on large-context models this block can dwarf conversation cost invisibly. High-value cost/token optimization target. |
| 3 | [#13157](https://github.com/QwenLM/qwen-code/issues/13157) — Confinement guard before permission flow | On Agent Hosts, out-of-workspace calls hit the permission flow first and auto-reject, killing the whole run. Ordering bug that blocks agent-host reliability. |
| 4 | [#12091](https://github.com/QwenLM/qwen-code/issues/12091) — `sessions/delete` breaks live sessions | Deleting a session unlinks its transcript while a writer is still attached, recreating a head-less file that permanently corrupts history and disables auto-continue. Serious data-integrity P1. |
| 5 | [#13122](https://github.com/QwenLM/qwen-code/issues/13122) — Stale host credentials after re-enrollment | Re-enrolling after a 401 mints a fresh secret but leaves the old host row with a still-valid credential. Security-relevant dedup gap. |
| 6 | [#13130](https://github.com/QwenLM/qwen-code/issues/13130) — Desktop workspaces suddenly untrusted | Every workspace flipped to read-only with no practical UI recovery path. A trust-configuration failure that renders the Desktop client unusable. |
| 7 | [#13208](https://github.com/QwenLM/qwen-code/issues/13208) — Side queries exceed context-window max_tokens | Output budgeting outside `llm-chat` ignores the window clamp, putting full ceilings on the wire. Pairs directly with PR #13244. |
| 8 | [#13234](https://github.com/QwenLM/qwen-code/issues/13234) — TLS-stack-selective connection resets | Carrier-link resets differ by TLS stack (BoringSSL fails, OpenSSL 3.5 succeeds). Affects the Extension+Daemon combo for mainland-China links; includes a documented workaround. |
| 9 | [#13184](https://github.com/QwenLM/qwen-code/issues/13184) — Unbounded managed session store growth | Every managed-runtime persistence layer only grows over time. Audit-verified across TS core; needed before multi-agent usage scales. |
| 10 | [#13238](https://github.com/QwenLM/qwen-code/issues/13238) — Late Host results drop incurred usage | `applyHostRunResult()` still treats same-attempt late results as already-applied, silently dropping token usage accounting. Billing/usage accuracy on agent hosts. |

---

## 4. Key PR Progress

| # | PR | What It Does |
|---|-----|--------------|
| 1 | [#13241](https://github.com/QwenLM/qwen-code/pull/13241) — Distinguish accepted Host results | Exact-retry receipts vs. terminal runs are now differentiated; late results can no longer change terminal state (fixes issue #13238 direction). |
| 2 | [#13179](https://github.com/QwenLM/qwen-code/pull/13179) — Managed-agent robustness | Rejects relative paths escaping the workspace, hardens commit retry, and fixes panel polling — each pinned by new unit tests. |
| 3 | [#13247](https://github.com/QwenLM/qwen-code/pull/13247) — Creators can change Session directory (W2) | Implements the W2 slice of #12380: idempotent, durable working-directory changes for Workspace-bound Sessions within an authorized Workspace. |
| 4 | [#13244](https://github.com/QwenLM/qwen-code/pull/13244) — Side-query output budget vs. context window | Gives side queries (which bypass `llm-chat.ts`) a window-aware output ceiling, closing the gap from issue #13208. |
| 5 | [#12531](https://github.com/QwenLM/qwen-code/pull/12531) — MCP server rule collision fix | Allow entries no longer authorize tools from a differently-spelled but colliding server identity; producer-carried identity now drives evaluation. |
| 6 | [#13246](https://github.com/QwenLM/qwen-code/pull/13246) — `/context` estimate stays in-window | Applies the same tool-schema correction as the provider-count path so estimates sum to exactly the context window (fixes #13239). |
| 7 | [#13237](https://github.com/QwenLM/qwen-code/pull/13237) — Million-token display in `/context` | Shows `1.0m tokens` instead of `1000.0k` for 1M-context models; improves readability across all `/context` rows. |
| 8 | [#13192](https://github.com/QwenLM/qwen-code/pull/13192) — Epoch deadline correctness across timezones | Returns correct Unix deadlines for writer leases and publication grants when JDBC/JVM/DB timezones differ. |
| 9 | [#13168](https://github.com/QwenLM/qwen-code/pull/13168) — Hosted turns get project context | `QWEN.md`/`AGENTS.md` are now delivered to Hosted turns from the Session working directory, keeping safe mode enabled. |
| 10 | [#10954](https://github.com/QwenLM/qwen-code/pull/10954) — Expose supervisor background agents | Adds `GET /background-agents` to `qwen serve`, surfacing what the Agent View supervisor is running per session. |

---

## 5. Feature Request Trends

1. **Managed Agent / Multi-Agent Architecture** — The largest and most active theme. Issues #12380, #12952, #13180, and PR #13247 all extend a staged dual-path design with durable Sessions, workspace bindings, broker authentication, and writer fencing. Expect continued `daemon` + `sdk` evolution.
2. **Token & Context Governance** — Persistent requests for window-aware budgeting (#12028, #13208, #13239, #13004) across side queries, non-conversation context, and the `/context` command — converging on a unified, window-aware cost model.
3. **Session Lifecycle Management** — Durable, recoverable sessions (takeover, deletion safety, directory changes) recur in #12091, #13124, #13247, indicating production-grade multi-agent session semantics are a priority.
4. **Credential & Security Hardening** — Re-enrollment dedup (#13122), broker-provisioned writer credentials (#13180), and trusted-folder recovery (#13130) all point to maturing security posture for the daemon/agent-host era.
5. **Web Shell UI & Keybindings** — Keyboard shortcuts for Session Overview/Split View (#13175) and memory-panel correctness (#13177) show growing investment in the browser-facing surface.
6. **CI/Efficiency** — Routing trusted PRs to idle ECS (#13245) suggests infrastructure cost is a live concern as the repo scales.

---

## 6. Developer Pain Points

- **Silent context-window overruns** — Side queries, `/context` estimates, and index budgets can exceed windows without warning, causing failed requests or misleading cost displays. Multiple fixes in flight but not yet consolidated.
- **Session integrity under concurrency** — Deleting or settling sessions while writers/agents are still attached destroys history files (head-less transcripts) and drops usage accounting. Recovery paths are weak or absent.
- **Trust-state brick walls** — The "everything untrusted" failure mode (#13130) leaves users with no UI recovery, forcing manual config surgery — a high-friction dead end for Desktop users.
- **TLS/network fragility on carrier links** — Stack-dependent resets (BoringSSL vs OpenSSL) are environment-specific and hard to diagnose; users need documented workarounds while the root cause is unresolved.
- **Memory/index budget contention** — Long paths crowd ordinary notes out of `MEMORY.md`; budget rules are duplicated and inconsistent between indexer and reader (#13178, #13236), yielding unpredictable memory behavior.
- **Unbounded growth everywhere in managed runtime** — Session stores, panel projections, and tool-publication streams only accumulate (#13184, #13242), threatening scalability before multi-agent workloads even reach production.

---

*Digest generated from public GitHub data — QwenLM/qwen-code, 2026-10-03. 50 issues and 50 PRs tracked in the last 24 hours.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



Here is the **DeepSeek TUI (Codewhale) Community Digest** for **2026-10-03**, compiled from the latest GitHub activity.

---

### 1. Today's Highlights
The project is actively steering towards the **v0.10.1 release milestone**, highlighted by the integration of official ChatGPT plan sign-in, extension capabilities, and native terminal adoption. On the community side, there is a strong push toward architectural modularization (TUI crate decomposition) and a call to action for establishing a Chinese localization group to improve documentation translation quality. Additionally, developers are addressing critical cross-platform performance regressions and expanding plugin ecosystem capabilities.

---

### 2. Releases
*No new releases were published in the last 24 hours.*

---

### 3. Hot Issues

*   **[#5316 [OPEN] EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)](https://github.com/Hmbown/Codewhale/issues/5316)**
    *   **Why it matters:** This umbrella issue tracks the massive modularization of the Codewhale TUI crate. With 31 comments, it represents a major architectural shift aimed at improving maintainability and compile times. The recent merge of `FEAT-026` (PR #6793) marks significant progress in this decomposition.
*   **[#6804 [OPEN] 召叫：成立汉化组 (Call to Action: Form a Chinese Localization Group)](https://github.com/Hmbown/Codewhale/issues/6804)**
    *   **Why it matters:** Crucial for community growth in Chinese-speaking regions. The author highlights the poor quality of raw LLM translations of technical documentation and is calling for a volunteer group to manually translate and maintain high-quality Chinese docs.
*   **[#6728 [OPEN] [bug, needs-triage] CPU Usage Regression: v0.9.12 (idle) → v0.9.1

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

## ComfyUI Community Digest — 2026-10-03

### Today's Highlights
No new ComfyUI releases landed in the last 24 hours. Community attention is concentrated on performance and memory behavior: a reported ~36% H3 generation slowdown, high VRAM/RAM usage, and the auto-enabled `--fast-disk` policy. On the development side, the asset subsystem received a large batch of fixes, while partner-node work continued with Grok, ElevenLabs, and Luma changes.

### Releases
No new releases in the last 24 hours.  
A backport release PR for `v0.38.2` was active and closed: [PR #16725](https://github.com/Comfy-Org/ComfyUI/pull/16725), carrying FLUX 3 Image, Grok Imagine Video 1.5 Lite, and workflow templates `0.11.74`.

### Hot Issues

1. **#15720 — v0.33.2 makes H3 generations ~36% slower than v0.33.1**  
   [Issue #15720](https://github.com/Comfy-Org/ComfyUI/issues/15720) · OPEN · 10 comments · 👍 9  
   A clear performance regression with strong community validation. This is the highest-signal issue in the window because it affects generation speed and has multiple confirmations.

2. **#16705 — Insane VRAM and RAM usage**  
   [Issue #16705](https://github.com/Comfy-Org/ComfyUI/issues/16705) · OPEN · 7 comments  
   Users report memory consumption that feels disproportionate to the workload. It matters because memory pressure is a recurring blocker for consumer GPUs and Apple Silicon.

3. **#16415 — Add opt-out for auto-enabled fast-disk policy**  
   [Issue #16415](https://github.com/Comfy-Org/ComfyUI/issues/16415) · OPEN · 5 comments · 👍 1  
   Since commit `7a0b5ee`, `--fast-disk` can auto-enable on NVMe and stream weights every step on high-RAM machines. The request is for explicit user control over a behavior that can unexpectedly trade RAM for disk I/O.

4. **#16711 — comfy kitchen attention INT8 returns pure noise on AMD gfx1100**  
   [Issue #16711](https://github.com/Comfy-Org/ComfyUI/issues/16711) · OPEN · 2 comments  
   Affects Qwen-Image 2.1 `int8_convrot` when text conditioning exceeds ~150 tokens. Important for AMD users and for confidence in INT8 attention paths.

5. **#16682 — Select Model Device forces float16 on FP8 models**  
   [Issue #16682](https://github.com/Comfy-Org/ComfyUI/issues/16682) · OPEN · 1 comment  
   Leads to black images with Qwen Image Edit. Highlights a dtype-handling inconsistency between `SelectModelDevice` and the standard loader.

6. **#16731 — Silent image corruption on warm server when a LoRA is applied**  
   [Issue #16731](https://github.com/Comfy-Org/ComfyUI/issues/16731) · OPEN · 0 comments  
   Stock nodes only, int8 convrot, AMD gfx1151. Silent corruption is especially dangerous because it can go unnoticed in production pipelines.

7. **#16729 — Windows/AIMDO: weights are never retained in RAM**  
   [Issue #16729](https://github.com/Comfy-Org/ComfyUI/issues/16729) · CLOSED · 1 comment  
   `load_safetensors()` always mmaps, making `fast_disk=False` unreachable and causing ~214 GB host-to-device traffic per run. A high-impact memory/caching bug for Windows + Intel Arc users.

8. **#16532 — Missing Node Packs**  
   [Issue #16532](https://github.com/Comfy-Org/ComfyUI/issues/16532) · OPEN · 1 comment  
   `comfyui_controlnet_aux` is reported missing. Node-pack dependency management remains a frequent onboarding and workflow-reproducibility pain point.

9. **#15136 — DETAIL logging side channel writes `comfyui_detail.log` automatically**  
   [Issue #15136](https://github.com/Comfy-Org/ComfyUI/issues/15136) · CLOSED · 2 comments  
   User objects to forced file creation and unexpected logging behavior at INFO level. Relevant to privacy, workspace hygiene, and default configuration expectations.

10. **#6472 — No module named 'ComfyUI-CCSR'**  
    [Issue #6472](https://github.com/Comfy-Org/ComfyUI/issues/6472) · CLOSED · 10 comments  
    Despite being older, it was updated in the window and has the highest comment count among issues. It reflects the persistent confusion around missing custom-node modules and unclear error messages.

### Key PR Progress

1. **#16725 — ComfyUI backport release v0.38.2**  
   [PR #16725](https://github.com/Comfy-Org/ComfyUI/pull/16725) · CLOSED  
   Backports FLUX 3 Image, Grok Imagine Video 1.5 Lite, and workflow templates `0.11.74` from `v0.38.1`.

2. **#16721 — [Partner Nodes] feat(Grok): add grok-imagine-video-1.5-lite model**  
   [PR #16721](https://github.com/Comfy-Org/ComfyUI/pull/16721) · CLOSED  
   Expands API-node video generation options and includes pricing/billing checklist updates.

3. **#16737 — [Partner Nodes] feat(ElevenLabs): add Eleven v4 and v4 Turbo models**  
   [PR #16737](https://github.com/Comfy-Org/ComfyUI/pull/16737) · OPEN  
   Adds newer ElevenLabs TTS models to partner nodes, with rate-card and billing test updates.

4. **#16741 — [Partner Nodes] chore(Luma): deprecate Ray 2 nodes**  
   [PR #16741](https://github.com/Comfy-Org/ComfyUI/pull/16741) · CLOSED  
   Marks Luma Ray 2 endpoints for removal on October 24. Important for workflows depending on those nodes.

5. **#16743 — Resolve linked node values in Save Image filename prefixes**  
   [PR #16743](https://github.com/Comfy-Org/ComfyUI/pull/16743) · OPEN  
   Fixes `%Node.input%` tokens so filenames use values consumed during execution rather than stale widget values. Useful for automation and reproducible output naming.

6. **#16578 — Implement the asset export API locally (CORE-454)**  
   [PR #16578](https://github.com/Comfy-Org/ComfyUI/pull/16578) · OPEN  
   Brings `POST /api/assets/export`, `GET /api/assets/exports/{exportName}`, and `GET /api/tasks/{task_id}` to core, aligning local and cloud asset export paths.

7. **#16742 — fix(assets): don't take the database lock when assets are off; warn when it's held**  
   [PR #16742](https://github.com/Comfy-Org/ComfyUI/pull/16742) · OPEN  
   Fixes a blocking startup issue where a non-assets instance still held the asset DB lock, causing later `--enable-assets` starts to fail.

8. **#16696 — fix(assets): write prune and offline marking in short batches**  
   [PR #16696](https://github.com/Comfy-Org/ComfyUI/pull/16696) · OPEN  
   Reduces long lock windows during asset catalogue pruning so saves are not locked out. A direct reliability improvement for asset-heavy installs.

9. **#12487 — feat: add route to automatically download missing models**  
   [PR #12487](https://github.com/Comfy-Org/ComfyUI/pull/12487) · OPEN  
   Adds bulk “Download missing models” behavior. This addresses one of the most repeated workflow friction points: manually locating and placing model files.

10. **#16735 / #16734 — HiDream-O1 ref-edit and resize fixes**  
    [PR #16735](https://github.com/Comfy-Org/ComfyUI/pull/16735) · OPEN  
    [PR #16734](https://github.com/Comfy-Org/ComfyUI/pull/16734) · OPEN  
    Fixes shape mismatch in reference-edit position IDs and a zero-division crash for extreme-aspect reference images. Important for HiDream-O1 stability.

### Feature Request Trends

- **Explicit memory and caching controls:** users want opt-outs and predictable behavior for `--fast-disk`, RAM pinning, VRAM reservation, and weight retention.
- **Quantization correctness and hardware parity:** repeated reports around INT8 attention, FP8 dtype handling, AMD gfx1100/gfx1151, Intel Arc/XPU, and Apple M3 Max.
- **Better asset lifecycle management:** export API, scan reporting, database locking, cross-volume uploads, and catalogue consistency.
- **Model acquisition automation:** automatic download of missing models remains a top workflow convenience request.
- **Node-pack dependency reliability:** missing modules and node packs continue to generate support noise.
- **Safer defaults and opt-outs:** logging side channels, silent corruption, and forced file creation are all friction points.

### Developer Pain Points

- **Silent failures are worse than crashes:** black images, pure-noise outputs, and LoRA-induced corruption are hard to detect and debug.
- **Memory behavior is opaque:** users cannot easily predict when ComfyUI will mmap, pin, stream from disk, or exhaust VRAM/RAM.
- **Platform-specific backend bugs are recurring:** AMD ROCm, Intel XPU, and Apple MPS paths need more consistent validation.
- **Performance regressions between patch versions:** the H3 slowdown shows users are sensitive to version-to-version throughput changes.
- **Asset database locking and scan behavior:** blocking startup, locked saves, and records briefly disappearing during scans create operational instability.
- **Dependency and custom-node management:** missing node packs and unclear module errors remain high-frequency support issues.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

## Today’s Highlights
No new Ollama releases landed in the last 24 hours, but community activity remains high with 19 updated issues and 28 updated PRs. The most urgent thread is Ollama Cloud Pro reliability ([#15453](https://github.com/ollama/ollama/issues/15453)), where users report a 95% failure rate across cloud models. In parallel, maintainers and contributors are pushing fixes for tool-call ordering, parser chunk-boundary bugs, MLX memory behavior, and broader hardware/runtime support.

## Hot Issues
1. **[#15453](https://github.com/ollama/ollama/issues/15453) — Ollama Cloud Pro: 95% failure rate across all cloud models**  
   A paid-tier reliability failure affecting multiple cloud models. High community reaction: 54 comments and 21 👍. This is the top trust and service-quality issue.

2. **[#1653](https://github.com/ollama/ollama/issues/1653) — Shell autocompletion**  
   Long-standing CLI ergonomics request, now with 34 👍. Users want distro-friendly completion scripts, likely via Cobra, matching tools like `gh`.

3. **[#16490](https://github.com/ollama/ollama/issues/16490) — Llama3.2-vision broken with latest update**  
   A regression that breaks vision-based document scanning apps. 8 comments and 4 👍 indicate real production impact.

4. **[#16224](https://github.com/ollama/ollama/issues/16224) — Ollama.com password change and MFA**  
   Missing account-security basics in 2026. 8 👍 and 4 comments show demand for TOTP and password management outside social logins.

5. **[#18672](https://github.com/ollama/ollama/issues/18672) — Intel UHD 0x4626 not detected by Vulkan on Windows**  
   Ollama’s bundled `llama-server.exe` reports no devices despite Windows Vulkan detecting the iGPU. Important for Windows iGPU users.

6. **[#18754](https://github.com/ollama/ollama/issues/18754) — MLX runner not using full GPU on Mac / M4 Pro**  
   Performance comparison against older Ollama builds suggests underutilization. Matters for Apple Silicon users relying on MLX acceleration.

7. **[#18416](https://github.com/ollama/ollama/issues/18416) — `ollama create --quantize` leaves unreferenced F16 blob**  
   Every safetensors quantization can leave ~50 GB unreferenced in `blobs/`. A serious disk-lifecycle bug for model builders.

8. **[#18762](https://github.com/ollama/ollama/issues/18762) — `/v1/chat/completions` associates reordered tool results by position**  
   OpenAI-compatible parallel tool calls can be misattributed when results arrive out of order. Critical for agent and tool-use correctness.

9. **[#18744](https://github.com/ollama/ollama/issues/18744) — MLX weights unwired ~2s after each request on macOS 27**  
   Idle models get paged back in on the next request, causing latency spikes. Matters for interactive macOS users under memory pressure.

10. **[#18756](https://github.com/ollama/ollama/issues/18756) — ROCm GPU VRAM ignored when evicting models**  
    Reported as a likely duplicate of #16462, but still highlights ongoing ROCm VRAM accounting and eviction problems.

## Key PR Progress
1. **[#18763](https://github.com/ollama/ollama/pull/18763) — openai: order tool results by the tool calls they answer**  
   Fixes #18762 by sorting `role: "tool"` messages according to their `tool_call_id`, improving OpenAI-compatible tool-call correctness.

2. **[#18759](https://github.com/ollama/ollama/pull/18759) — model/parsers: preserve partial cogito tool call tags**  
   Fixes chunk-boundary parsing for Cogito tool calls, addressing #18681 and preventing valid tool calls from being emitted as raw text.

3. **[#18761](https://github.com/ollama/ollama/pull/18761) — llama.cpp: version update**  
   Updates llama.cpp from `b11232` to `b11351`, bringing upstream fixes and model/runtime improvements.

4. **[#18720](https://github.com/ollama/ollama/pull/18720) — MLX: version bump**  
   Advances the MLX dependency, relevant to Apple Silicon performance and compatibility.

5. **[#18755](https://github.com/ollama/ollama/pull/18755) — mlx: separate decision preparation and readout from forward; implement Strands Decider**  
   Refactors MLX decision scoring so serial and batched paths share model-owned preparation/readout logic.

6. **[#18748](https://github.com/ollama/ollama/pull/18748) — models: add Strands Decider support**  
   Adds model-level support for Strands Decider, complementing the MLX implementation work.

7. **[#18634](https://github.com/ollama/ollama/pull/18634) — MLX: pull the MLX variant for models installed before manifest lists**  
   Avoids forcing existing GGUF users to manually pull MLX variants when a tag now defaults to MLX on Mac.

8. **[#18700](https://github.com/ollama/ollama/pull/18700) — app: make chat history read-only and add exports**  
   Keeps existing chats available while disabling new chat creation in the desktop app; adds markdown/attachment exports.

9. **[#18738](https://github.com/ollama/ollama/pull/18738) — app: finish onboarding with Run Ollama**  
   Improves onboarding flow for sign-up, sign-in, and local use, ending with a copyable `ollama` command.

10. **[#17972](https://github.com/ollama/ollama/pull/17972) — feat: Add GraniteForCausalLM support in experimental models and mlxrunner**  
    Adds dense Granite architecture support for Granite 4.1/4.2 models in the MLX backend.

## Feature Request Trends
- **Account security and management:** Password changes and MFA for Ollama.com accounts are a clear gap ([#16224](https://github.com/ollama/ollama/issues/16224)).
- **CLI ergonomics:** Shell autocompletion remains a high-demand, long-standing request ([#1653](https://github.com/ollama/ollama/issues/1653)).
- **Hardware/runtime flexibility:** Users want both ROCm and CUDA runtimes installed on multi-GPU systems ([#18545](https://github.com/ollama/ollama/issues/18545)), plus better detection and VRAM handling ([#18672](https://github.com/ollama/ollama/issues/18672), [#18756](https://github.com/ollama/ollama/issues/18756)).
- **Launcher and ecosystem expansion:** Requests to extend `ollama launch` to browsers ([#18752](https://github.com/ollama/ollama/issues/18752)) and add more agent/tool integrations ([#18093](https://github.com/ollama/ollama/pull/18093), [#18693](https://github.com/ollama/ollama/pull/18693), [#18749](https://github.com/ollama/ollama/pull/18749)).
- **Decision-model and API compatibility:** Better `/v1/systemone` encoding and per-type temperatures ([#18760](https://github.com/ollama/ollama/issues/18760)), plus parallel request handling for qwen35 ([#18750](https://github.com/ollama/ollama/issues/18750)).
- **Documentation accuracy:** Model version requirements need to be documented on model pages ([#18414](https://github.com/ollama/ollama/issues/18414)).

## Developer Pain Points
- **Cloud reliability:** Ollama Cloud Pro failures dominate discussion and undermine paid-tier confidence ([#15453](https://github.com/ollama/ollama/issues/15453)).
- **Update regressions:** Vision and MLX behavior broke or degraded after updates ([#16490](https://github.com/ollama/ollama/issues/16490), [#18754](https://github.com/ollama/ollama/issues/18754)).
- **GPU detection and VRAM accounting:** Intel Vulkan, ROCm eviction, and multi-runtime installs remain inconsistent ([#18672](https://github.com/ollama/ollama/issues/18672), [#18756](https://github.com/ollama/ollama/issues/18756), [#18545](https://github.com/ollama/ollama/issues/18545)).
- **Disk/model lifecycle bugs:** Quantization leaves large unreferenced blobs, wasting storage ([#18416](https://github.com/ollama/ollama/issues/18416)).
- **Tool-call and parser correctness:** Chunk-boundary parsing and positional tool-result mapping cause incorrect agent behavior ([#18681](https://github.com/ollama/ollama/issues/18681), [#18762](https://github.com/ollama/ollama/issues/18762)).
- **MLX memory management:** Weights are unwired after idle, causing page-in latency on next request ([#18744](https://github.com/ollama/ollama/issues/18744)).
- **Documentation gaps:** Undocumented version requirements lead to confusing model failures ([#18414](https://github.com/ollama/ollama/issues/18414)).
- **Review latency:** Contributors are explicitly asking for maintainer attention on ready PRs ([#18747](https://github.com/ollama/ollama/issues/18747)).
- **High-frequency asks:** Shell completion, MFA/password management, and multi-runtime support recur across issues ([#1653](https://github.com/ollama/ollama/issues/1653), [#16224](https://github.com/ollama/ollama/issues/16224), [#18545](https://github.com/ollama/ollama/issues/18545)).

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>



# llama.cpp Community Digest — 2026-10-03

Welcome to the llama.cpp community digest. Below is a structured overview of the latest releases, hot issues, pull request progress, and key trends from the past 24 hours.

---

### 1. Today's Highlights
The community is pushing major UI upgrades alongside critical backend stability patches. A significant wave of PRs is reworking the model management interface, while developers are heavily focused on hardening speculative decoding (MTP) across CUDA, Vulkan, and ROCm backends. On the infrastructure side, Hexagon CPU quantization support and CPU flash-attention overflow fixes are merging, addressing key performance and accuracy bottlenecks.

---

### 2. Latest Releases & Key Commits
The repository has rolled out a series of incremental updates (b11337 through b11351) focusing on backend correctness, developer experience, and platform-specific optimizations:

*   **`b11351` / `b11349` / `b11344`**: Backend fixes including a new `alloc_buffer_n` buffer interface for GGML, Vulkan pipeline compile logging, and fixes for two broken Volta Flash-Attention cases on CUDA ([#23671](https://github.com/ggml-org/llama.cpp/pull/23671), [#29794](https://github.com/ggml-org/llama.cpp/pull/29794), [#29803](https://github.com/ggml-org/llama.cpp/pull/29803)).
*   **`b11347` / `b11345` / `b11338`**: Major Hexagon backend updates, including installing rebuilt HTP skeletons, adding `q2_k` and `q3_k` quant type support, and enabling shared strided DMA copies for CPY and CONCAT operations ([#29828](https://github.com/ggml-org/llama.cpp/pull/29828), [#29717](https://github.com/ggml-org/llama.cpp/pull/29717), [#29685](https://github.com/ggml-org/llama.cpp/pull/29685)).
*   **`b11342` / `b11339` / `b11337`**: Common and server fixes, resolving a cache directory symlink bug on buggy libstdc++ versions, clamping kpool re-pool bounds, and returning HTTP 400 for invalid embedding requests ([#29816](https://github.com/ggml-org/llama.cpp/pull/29816), [#29805](https://github.com/ggml-org/llama.cpp/pull/29805), [#29060](https://github.com/ggml-org/llama.cpp/pull/29060)).

---

### 3. Hot Issues
Here are the ten most impactful issues trending over the last 24 hours, highlighting critical bugs and highly requested features:

*   **Audio Output in MTMD (#21956)**: A long-standing planning issue requesting audio generation support in the multimodal text-to-text framework (mtmd). With 27 comments and 13 👍, this represents a major missing piece for fully multimodal offline processing.
*   **Draft-MTP Performance Halving on Multi-GPU (#27428)**: Users report that speculative decoding with draft-mtp roughly halves prompt processing speeds when layer splitting spans multiple GPUs, though single GPU performance remains unaffected. This is a critical performance regression for large cluster setups.
*   **Qwen 3.8 Flash Startup Assert with MTP (#29811)**: A fresh bug report showing an assertion failure at startup when running Qwen 3.8 Flash with Multi-Token Prediction (MTP) draft models, blocking a highly popular model configuration.
*   **Gemma 4 MTP Vulkan Crash (#24492)**: Gemma 4 31B with MTP crashes on the Vulkan backend with the error "pre-allocated tensor cannot run operation NONE," pointing to backend-specific tensor allocation issues.
*   **Unstable Tool Calling for Gemma 4 (#29655)**: Multi-line streaming breaks tool calling parsers for Gemma 4 models, posing a significant blocker for function-calling and agent workflows.
*   **AMD RADV MTP DeviceLost during Prompt (#27306)**: On AMD GPUs using the RADV Vulkan driver, `llama-server` crashes with a device-lost error mid-prefill when MTP is enabled, though standard generation without MTP survives past 125k tokens.
*   **CUDA MMQ Out-of-Bounds Read in MoE (#27792)**: A memory safety bug in the CUDA backend's MoE path where tail padding calculation results in an illegal memory access for specific batch sizes.
*   **sched_reserve Layer Assignment Warning (#24712)**: Users see warnings where layer 0 is assigned to CPU, but fused Gated Delta Net tensors are forced to CUDA0, indicating a gap in multi-device tensor mapping logic.
*   **YuE Music Generation Feature Request (#11467)**: A closed but highly active feature request (15 comments, 8 👍) asking for native support for YuE music generation models.
*   **Windows ROCm Build Missing hipblas.dll (#26996)**: The Windows release binary for ROCm 7.14 fails to detect GPUs because `hipblas.dll` is missing from the packaged assets.

---

### 4. Key PR Progress
The pull request activity highlights a massive push towards a modernized web UI and broader model architecture support:

*   **UI Overhaul: Models Manager & Provider Settings (#29583, #29584, #29586, #29587, #29588)**: A series of PRs by `allozaur` introduces a "Manage models" dialog, reworks the model selector, adds a discover models view, and allows users to manage providers and individual model configurations directly in the interface.
*   **GPU-Resident LRU Cache for Host-Offloaded MoE (#27861)**: Implements a GPU-resident Least Recently Used (LRU) cache for MoE expert weights stored in host RAM (`-ot ...exps=CPU`), dramatically reducing host RAM bandwidth bottlenecks during decode.
*   **LFM2.5 Encoder Support (#29862)**: Registers the `Lfm2BidirectionalForMaskedLM` architecture, adding support for LiquidAI's LFM2.5-Encoder-350M and 230M models.
*   **K2 Horizon Dense and MoVA Support (#29535)**: Adds full conversion, tokenizer, and inference graph support for the K2 Horizon dense and MoVA (Mixture of VAs) model variants.
*   **GLM-5.3-Flash Support (#27773)**): Adds support for the 320B hybrid GLM-5.3-Flash model, covering both text and vision modalities.
*   **CPU Flash Attention F16 Overflow Fix (#29810)**: Offsets the KQ max in CPU flash attention kernels to prevent F16 sums from overflowing on long contexts during small-batch/decode steps.
*   **Ling 3.0 JSON Schema Parser Fix (#29813)**: Ensures the Ling 3.0 parser honors `json_schema` in the chat interface, aligning it with other structured output parsers.
*   **Vulkan F16 Accumulation Optimization (#29877)**: Packs scalar FMA operations into a single `v_pk_fma_f16` vector instruction on devices lacking dot-product instructions, improving performance.
*   **SYCL GLM MLA Prefill Acceleration (#29171)**: Routes GLM-4.7 Flash's specific MLA prompt shapes through the SYCL MKL flash-attention pipeline, boosting Intel GPU prefill performance.
*   **Metal Speculative Decoding Optimizations (#29869)**: Implements few-row MMA mat-mul and batched copies for

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*