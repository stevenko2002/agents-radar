# AI CLI Tools Community Digest 2026-09-14

> Generated: 2026-09-13 22:15 UTC | Tools covered: 12

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

## Today's Highlights

- **Gemini CLI** released nightly build `v0.61.0-nightly.20260913` implementing a native Google search tool in RobustAutonomousAgent, fixing A2A server JSON parsing middleware order, and preventing emoji corruption via surrogate pair splitting fixes during text truncation.  
  [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

- **Qwen Code** shipped nightly build `v0.23.3-nightly.20260913.faa395885e` updating cua-driver-rs to v0.20.6 (adding macOS codesigned/notarized prebuilt binaries) and refactoring dingtalk background response aggregation while removing obsolete notification polling logic.  
  [github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.3-nightly.20260913.faa395885e)

- **Pi** added permanent branch deletion from session trees, mid-conversation system messages for accurate state resume, Azure Foundry v3 support, server-side tool declaration capability, and an "exit" tool call enabling models to terminate sessions autonomously.  
  [github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono)

- **DeepSeek TUI** launched `/pet` mode taking over the terminal viewport, professionalized Computer Use with native permission setup and human Pause/Stop controls, exposed workspace file suggestions via Runtime API, and bounded unbounded engine channels to prevent memory growth from pathological tools.  
  [github.com/Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)

- **ComfyUI** progressed on its Asset System Refactor (#16295) separating records from content (collapsing a 10-PR review stack), optimized MiniMax H3 VAE decoding by folding norm/SiLU/padding into convolutions, and added the official Flux Video Edit node as part of partner nodes.  
  [github.com/comfyanonymous/ComfyUI](https://github.com/comfyanonymous/ComfyUI)

- **llama.cpp** added Kimi-K3 text model support with hybrid KDA+MLA attention and latent MoE, implemented SYCL graph record/replay porting CUDA graph functionality, and enabled server-side `input_image` support in Responses tool outputs for Codex-style workflows.  
  [github.com/ggml-org/llama.cpp](https://github.com/ggml

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills — Community Highlights Report
*Data as of 2026-09-14 · Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

PR comment counts were not exposed in the dataset, but the list is pre-sorted by discussion volume. The leading items:

| # | Skill / PR | Functionality | Status |
|---|-----------|---------------|--------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | **fix(skill-creator): run_eval.py 0% recall** | Fixes eval harness that reports `recall=0%` for every skill; installs eval artifact as a real skill, fixes Windows stream reading & parallel workers | OPEN |
| [#1742](https://github.com/anthropics/skills/pull/1742) | **fix(mcp-builder): mcp≥2 streamable_http_client** | Supports renamed `streamable_http_client` import and custom headers via `create_mcp_http_client` | OPEN |
| [#1734](https://github.com/anthropics/skills/pull/1734) | **Detect orphaned docx comments** | Detects dangling/orphaned comments in .docx output | OPEN |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography skill** | Typographic QC for AI docs: orphan wraps, widow paragraphs, numbering alignment | OPEN |
| [#1615](https://github.com/anthropics/skills/pull/1615) | **scnet-hpc skill** | Profile-based SSH + Slurm workflows for SCNet HPC clusters | OPEN |
| [#538](https://github.com/anthropics/skills/pull/538) | **fix(pdf): case-sensitive refs** | Corrects 8 uppercase `REFERENCE.md`/`FORMS.md` mismatches to lowercase | OPEN |
| [#486](https://github.com/anthropics/skills/pull/486) | **ODT skill** | Create/fill/parse OpenDocument (.odt/.ods) + ODT→HTML | OPEN |
| [#210](https://github.com/anthropics/skills/pull/210) | **Improve frontend-design skill** | Revisions for clarity, actionability, single-conversation coherence | OPEN |

**Discussion highlights:** The dominant theme is *correctness of the Skill tooling itself* — `skill-creator`'s broken evaluator (#1298, mirroring Issue #556) and `mcp-builder`'s compatibility drift (#1742, #1602, #1724) attract the most sustained attention. Document-format skills (docx/pdf/odt/typography) form a large secondary cluster.

---

## 2. Community Demand Trends (from Issues)

Distilled from the top-comment Issues:

- **Security & Trust Boundaries** — [#492](https://github.com/anthropics/skills/issues/492) (43 comments): community skills impersonating the `anthropic/` namespace; [#1175](https://github.com/anthropics/skills/issues/1175) (SharePoint ACL in SKILL.md). Highly anticipated: verified/official namespace enforcement.
- **Org-Wide Sharing & Distribution** — [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8 👍): native in-product skill sharing instead of manual `.skill` file swaps.
- **Evaluation & Reliability Tooling** — [#556](https://github.com/anthropics/skills/issues/556) (12 comments), [#1390](https://github.com/anthropics/skills/issues/1390): working eval harnesses for skills and MCP servers.
- **Context / Token Efficiency** — [#1487](https://github.com/anthropics/skills/issues/1487) (156k-token injection), [#1329](https://github.com/anthropics/skills/issues/1329) (compact-memory symbolic state): demand for lean, memory-efficient skills.
- **Governance & Quality Gates** — [#412](https://github.com/anthropics/skills/issues/412) (agent-governance), [#1385](https://github.com/anthropics/skills/issues/1385) (reasoning quality gate): safety/QA skills for agent output.
- **Packaging Hygiene** — [#189](https://github.com/anthropics/skills/issues/189) (9 👍): duplicate skills across `document-skills`/`example-skills` plugins.
- **Platform Reach** — [#29](https://github.com/anthropics/skills/issues/29) (Bedrock), [#16](https://github.com/anthropics/skills/issues/16) (Skills-as-MCPs).

---

## 3. High-Potential Pending Skills (Active, Unmerged)

All listed PRs remain OPEN; these show recent activity and likely near-term landing:

- [**#1298**](https://github.com/anthropics/skills/pull/1298) — skill-creator eval fix (updated 2026-09-13, ties to high-traffic Issue #556).
- [**#1742**](https://github.com/anthropics/skills/pull/1742) — mcp-builder mcp≥2 support (updated 2026-09-13, fixes #1668).
- [**#525**](https://github.com/anthropics/skills/pull/525) — Pyxel retro-game MCP skill (updated 2026-09-13).
- [**#1628**](https://github.com/anthropics/skills/pull/1628) — Hivemind: zero-cost multi-agent orchestration via opencode workers.
- [**#1627**](https://github.com/anthropics/skills/pull/1627) — Buffer GraphQL API agent skill (portable across agents).
- [**#1607**](https://github.com/anthropics/skills/pull/1607) — claude-api retired-model IDs cleanup (fixes #1603).
- [**#1367**](https://github.com/anthropics/skills/pull/1367) — self-audit skill: mechanical verification + 4-dimension reasoning gate.
- [**#1734**](https://github.com/anthropics/skills/pull/1734) — orphaned docx comment detection (updated 2026-09-11).

---

## 4. Skills Ecosystem Insight

> The community's most concentrated demand at the Skills level is **reliable, secure evaluation and distribution infrastructure for the Skills system itself** — fixing `skill-creator`/`mcp-builder` correctness, enforcing trust boundaries around the `anthropic/` namespace, and reducing token/context overhead — rather than net-new domain skills.

---

# Claude Code Community Digest — 2026-09-14

**Source:** github.com/anthropics/claude-code

---

## 1. Today's Highlights

There were **no new releases** in the last 24 hours. Activity was dominated by a large batch of **issue closures**: all 50 issues updated today are marked `[CLOSED]`, the vast majority carrying the `stale` label after being auto-closed without a fix — including several high-severity auth, data-loss, and headless-execution bugs. On the PR side, only 7 PRs saw activity, and the most substantive movement is around the community `mods/` plugin test infrastructure rather than core CLI fixes.

---

## 2. Releases

None in the last 24 hours.

---

## 3. Hot Issues

> ⚠️ **Note:** Every issue listed below is `[CLOSED]`/`stale` as of today. They are surfaced here because they represent unresolved user-visible problems that were swept by the stale bot rather than fixed.

1. **#76026 — Sonnet 5 flags `UserPromptSubmit` hooks as prompt injection** (4 comments)
   The model refuses to follow instructions delivered via the `UserPromptSubmit` hook on AWS Bedrock, treating them as injection attempts. This breaks a core extensibility surface for teams using hooks to inject context. Marked `reproduced`, then closed stale.
   🔗 https://github.com/anthropics/claude-code/issues/76026

2. **#74699 — iTerm2 launches CLI as a daemon child session, blocking Agents panel** (4 comments)
   On macOS, a normal top-level `claude` launch is routed through the background daemon with `CLAUDE_CODE_CHILD_SESSION=1`, disabling the Agents panel and session switching. A functional regression on the primary macOS terminal.
   🔗 https://github.com/anthropics/claude-code/issues/74699

3. **#86370 — Cross-session messages silently dropped since 2.1.227** (4 comments, 👍1)
   Sender receives a success response while the target session never receives the message. Silent delivery failure is among the worst failure modes for multi-agent workflows. Closed as `duplicate`.
   🔗 https://github.com/anthropics/claude-code/issues/86370

4. **#84331 — macOS CLI login loop / Keychain credential blob blanked** (4 comments)
   Every `accessToken`/`refreshToken` in `claudeAiOauth` and all `mcpOAuth` entries are emptied, forcing a permanent login loop. Related to #83345 but broader in scope; closed stale without a fix.
   🔗 https://github.com/anthropics/claude-code/issues/84331

5. **#73886 — `fileSuggestion` `.map()` passes array index as score** (4 comments)
   MCP resources outrank every file except the first because the array index is used as the score. A clean, well-diagnosed root cause that had never been correctly identified across four prior duplicate reports.
   🔗 https://github.com/anthropics/claude-code/issues/73886

6. **#75613 — Headless `claude -p` hangs indefinitely at startup** (3 comments)
   Zero stdout/stderr, no transcript created, process hung ~4 hours under memory pressure — suspected untimed background-daemon spare-worker handshake. Directly impacts CI and launchd/cron automation.
   🔗 https://github.com/anthropics/claude-code/issues/75613

7. **#74052 — `AskUserQuestion` fires `Notification` with `notification_type: permission_prompt`** (3 comments)
   Plain multiple-choice questions are indistinguishable from real tool-approval dialogs. Breaks hook-based notification routing and any automation keyed on notification type.
   🔗 https://github.com/anthropics/claude-code/issues/74052

8. **#72690 — Auto-update silently exits 0, leaving a stub binary** (2 comments)
   When the native optional-dependency download is throttled, the updater exits successfully but leaves no bin symlink → `command not found`. A silent-corruption failure in the install path.
   🔗 https://github.com/anthropics/claude-code/issues/72690

9. **#77488 — Glob tool hardcodes `--no-ignore --hidden --sort=modified`** (2 comments)
   An un-prunable single-threaded ripgrep walk guarantees ~20s timeouts on large monorepos. The escape hatches (`CLAUDE_CODE_GLOB_NO_IGNORE`, `CLAUDE_CODE_GLOB_HIDDEN`) work but are undocumented and unmentioned in the error.
   🔗 https://github.com/anthropics/claude-code/issues/77488

10. **#85749 — Claude Code on the web alternates between two concurrent conversations** (2 comments)
    Messages silently interleave between two conversations in the same reused container, with no UI indication. A serious state-isolation problem on the web surface.
    🔗 https://github.com/anthropics/claude-code/issues/85749

**Also notable:** #84234 (bundled ugrep ignores root-anchored `.gitignore` patterns → walks `node_modules`/`target`, can stall the machine), #80227 (permission allowlist / `acceptEdits` ignored over UNC paths), #79510 (VS Code session delete is a no-op), #73759 & #86305 (prompt-cache token growth and sudden usage-limit jumps).

---

## 4. Key PR Progress

Only **7 PRs** were updated in the last 24h. All are listed below.

1. **#79148 [OPEN] — Add mandatory `hookify.` prefix to example rule filenames**
   The loader only discovers `.claude/hookify.*.local.md`, yet all four shipped examples omit the prefix and are silently ignored when copied per the docs. Docs-vs-implementation mismatch fix.
   🔗 https://github.com/anthropics/claude-code/pull/79148

2. **#89404 [OPEN] — `validate-agent.sh`: don't abort at first warning**
   Fixes `set -euo pipefail` interactions where `((warning_count++))` aborts the script on the first warning and false-flags valid agents. Addresses public issue #83803.
   🔗 https://github.com/anthropics/claude-code/pull/89404

3. **#41621 [CLOSED] — Add missing CLI build infrastructure and bundler configuration**
   Adds the TypeScript source plus esbuild bundling config to produce a single executable, along with build documentation. Closed after a long-open period.
   🔗 https://github.com/anthropics/claude-code/pull/41621

4. **#93951 [OPEN] — Move diff/sec-default/telemetry tests next to their mods**
   Relocates behavior tests to `mods/<mod>/tests/`, one file per unit, run via `claude plugin test`. Improves the plugin authoring story.
   🔗 https://github.com/anthropics/claude-code/pull/93951

5. **#93932 [CLOSED] — `plugin.json` types path made `./`-relative**
   One-line fix so the telemetry mod's `types` entry conforms to the manifest schema, which rejects bare relative paths.
   🔗 https://github.com/anthropics/claude-code/pull/93932

6. **#93452 [CLOSED] — `mods/diff` matches the built-in `/diff` panel**
   Aligns the mod pane with the built-in: engine code element for hunks, close ✕, row spacing, empty-state placement, narrow-terminal resize line, one probe in flight.
   🔗 https://github.com/anthropics/claude-code/pull/93452

7. **#93912 [CLOSED] — Unit tests for diff, sec-default, telemetry, typed against plugin declarations**
   Tests run in the same seat as the mod, receiving the engine's `$` and the hooks `on` API. Part of a coordinated `mods/` testing push by the same contributor.
   🔗 https://github.com/anthropics/claude-code/pull/93912

**Takeaway:** PR throughput is low and heavily concentrated in the community `mods/` plugin ecosystem (#93912, #93932, #93452, #93951 all from the same author). No core CLI or model-behavior fixes landed today.

---

## 5. Feature Request Trends

The explicit feature-request volume in this window is low (only one `enhancement` issue surfaced), which itself is a signal — but the surrounding issues point to these directional asks:

- **Accessibility & TUI configurability** — #87123 requests a config setting to enable/disable screen-reader mode (`AXScreenReader`), noting it is currently impossible to toggle. The sole tagged enhancement of the day.
- **Hook semantics correctness** — #74052 (distinct notification type for questions vs. permissions) and #76026 (hooks must not be treated as injection) both ask for hooks to be first-class, semantically meaningful signals.
- **Non-interactive / headless reliability** — #75613 and #72690 reflect demand for dependable `claude -p`, CI, and daemon-free execution paths.
- **Cost & usage transparency** — #73759 (prompt-cache token growth) and #86305 (abrupt usage-limit jumps) point to a request for clearer, more accurate token/limit accounting.
- **IDE and web session management** — #79510, #74731, #85749, #82219 all concern session list correctness, rename rendering, and state isolation across VS Code and web.
- **Plugin/mod authoring ergonomics** — the entire PR cluster (#93912/#93932/#93452/#93951) plus #79148 targets making the plugin manifest, test harness, and example rules behave predictably.

---

## 6. Developer Pain Points

1. **Stale-bot closure of real, reproduced bugs.** Every issue in today's feed is closed, and most are tagged `stale` or `reproduced`. High-severity defects — blanked Keychain tokens (#84331), silent cross-session message loss (#86370), headless hangs (#75613), update corruption (#72690) — were closed without visible fixes. This erodes trust in the issue tracker as a signal of what is actually being worked on.

2. **Silent failures instead of loud errors.** A recurring pattern: the updater exits `0` while leaving a broken install (#72690); the sender gets "success" while the message is dropped (#86370); the allowlist is silently ignored on UNC paths (#80227); `fileSuggestion` silently mis-scores (#73886). Developers lose hours to failures that report success.

3. **Update/packaging nag loops.** #86231 (Homebrew cask nag never clears when npm is ahead) and #87197 (false "Update available!" on apt installs) show the version-check logic does not understand package-manager-managed installs, producing persistent false prompts.

4. **Platform-specific breakage with no workaround.** macOS Keychain corruption (#84331), iTerm2 daemon routing (#74699), Windows ECONNRESET after the first streamed chunk (#87183), and Windows "Run on startup" that cannot be disabled (#87208) suggest platform QA gaps.

5. **Performance cliffs on large repositories.** #77488 (Glob hardcoded flags → 20s timeouts) and #84234 (ugrep ignoring root-anchored `.gitignore` → walks dependency trees, can stall the machine) make Claude Code effectively unusable on large monorepos.

6. **Opaque cost and limit behavior.** Sudden jumps in usage percentage and prompt-cache token growth (#73759, #86305) leave users unable to predict or budget consumption.

7. **Documentation/implementation drift.** #79148 (undocumented mandatory `hookify.` prefix) and #77488 (working but undocumented env-var escape hatches) show features exist that users cannot discover.

---

*Digest compiled from GitHub activity on anthropics/claude-code for 2026-09-14. All issue/PR states are as reported in the source data.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI Community Digest — 2026-09-14**

### 1. Today's Highlights
The Gemini CLI project continues to iterate rapidly, releasing the nightly build `v0.61.0-nightly.20260913` while addressing a backlog of high-severity agent stability and infrastructure issues. The community has heavily flagged critical agent behaviors—specifically the generalist agent hanging indefinitely and subagents misreporting successful completions after hitting turn limits. Concurrently, core infrastructure is seeing a surge of fixes for A2A server middleware ordering, JSON parsing crashes during streaming, and UI rendering bugs related to emoji truncation.

### 2. Releases
*   **v0.61.0-nightly.20260913.g9c1b0a610** ([Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.61.0-nightly.20260912.g9c1b0a610...v0.61.0-nightly.20260913.g9c1b0a610))
    *   *Note:* No detailed changelog was provided for this nightly build.

### 3. Hot Issues (Top 10)
*   **[#22323 - Subagent recovery reports success after MAX_TURNS](google-gemini/gemini-cli Issue #22323)** (13 comments)  
    *Why it matters:* A critical logic bug where the `codebase_investigator` subagent reports `status: "success"` and `Termination Reason: "GOAL"` even if it hit the maximum turn limit without doing any analysis. This masks workflow interruptions from the developer.
*   **[#21409 - Generalist agent hangs indefinitely](google-gemini/gemini-cli Issue #21409)** (8 comments, 8 👍)  
    *Why it matters:* Deferring to the generalist agent causes the CLI to hang forever, even on simple tasks like folder creation. The only workaround is instructing the model not to use sub-agents, severely limiting usability.
*   **[#26525 - Deterministic redaction and Auto Memory logging](google-gemini/gemini-cli Issue #26525)** (5 comments)  
    *Why it matters:* Auto Memory reads local transcripts and sends them to the extraction agent *before* redacting secrets, creating a security/logging vulnerability where sensitive data may be logged.
*   **[#25166 - Shell command execution stuck at "Waiting input"](google-gemini/gemini-cli Issue #25166)** (4 comments, 3 👍)  
    *Why it matters:* Repeatedly, simple CLI commands hang with an "Awaiting user input" state despite the shell command having already finished, blocking the agent workflow.
*   **[#21983 - Browser subagent fails in Wayland](google-gemini/gemini-cli Issue #21983)** (4 comments, 1 👍)  
    *Why it matters:* The browser agent terminates prematurely or fails on Wayland environments, limiting the utility of the browser subagent for Linux desktop users.
*   **[#21968 - Gemini underutilizes skills and sub-agents](google-gemini/gemini-cli Issue #21968)** (6 comments)  
    *Why it matters:* An anecdotal but widespread complaint that Gemini CLI fails to autonomously invoke custom skills (like `gradle` or `git`) or sub-agents unless explicitly instructed to do so.
*   **[#22672 - Agent should discourage destructive behavior](google-gemini/gemini-cli Issue #22672)** (3 comments, 1 👍)  
    *Why it matters:* The model frequently opts for dangerous commands like `git reset --force` or database destructive commands when safer alternatives exist, highlighting a need for better safety guardrails.
*   **[#21335 - /compress command not persistent across sessions](google-gemini/gemini-cli Issue #21335)** (2 comments, 2 👍)  
    *Why it matters:* The `/compress` command summarizes chat history to save tokens in-memory, but fails to write this summary back to the session file on disk, meaning token savings are lost on session resume.
*   **[#22267 - Browser Agent ignores settings.json overrides](google-gemini/gemini-cli Issue #22267)** (3 comments)  
    *Why it matters:* Global or project-level `settings.json` configurations (like `maxTurns`) are completely ignored by the Browser Agent during execution, bypassing user-defined constraints.
*   **[#22745 - Assess impact of AST-aware file reads and mapping](google-gemini/gemini-cli Issue #22745)** (7 comments, 1 👍)  
    *Why it matters:* An epic tracking the potential shift from regex/text-based searching to AST-aware tools for precise code navigation, which could drastically reduce token bloat and misaligned reads.

### 4. Key PR Progress (Top 10)
*   **[#29320 - Fix A2A server JSON parsing middleware order](google-gemini/gemini-cli PR #29320)**  
    Fixes a critical ordering bug where `express.json()` needed to be registered *before* A2A routes so that JSON-RPC handlers could properly parse `req.body`.
*   **[#29319 - Guard JSON.parse on malformed tool-call args](google-gemini/gemini-cli PR #29319)**  
    Prevents the SDK stream from crashing when encountering malformed JSON in `toolCall.args` by wrapping the parse in a try/catch and pushing a `_parseError` argument instead of killing the stream.
*   **[#29286 - Implement Google search tool in RobustAutonomousAgent](google-gemini/gemini-cli PR #29286)**  
    A major feature addition integrating a native Google search tool into the robust autonomous agent, expanding the agent's ability to retrieve real-time web information.
*   **[#29304 - Fix surrogate pair splitting during text truncation](google-gemini/gemini-cli PR #29304)**  
    Fixes the `sanitizeForDisplay` utility so that truncating text does not split UTF-16 surrogate pairs, which previously caused emojis to be silently omitted or corrupted.
*   **[#29222 - Prevent rewriting explicitly pinned flash models](google-gemini/gemini-cli PR #29222)**  
    Resolves a severe configuration bug where invoking Gemini CLI with `--model gemini-2.5-flash` was silently rewritten to `gemini-3.5-flash` on backends where the newer model was GA, breaking environments without access to the newer model.
*   **[#29163 - Prevent authentication crash in restricted git repos](google-gemini/gemini-cli PR #29163)**  
    Prevents CLI crashes on startup when run inside a Git repository under macOS Seatbelt or restricted permissions, where the `useGitBranchName` hook fails to read `.git`.
*   **[#29208 - Fall back to empty on malformed agents.json](google-gemini/gemini-cli PR #29208)**  
    Adds validation to `load` so that corrupt `agents.json` files (valid JSON but wrong shape) no longer crash the acknowledgment logic or silently drop agent configurations.
*   **[#29125 - Fix hook timeout unit mismatch in migration](google-gemini/gemini-cli PR #29125)**  
    Fixes a critical migration bug where Claude Code hook timeouts (measured in seconds) were being copied verbatim into Gemini CLI's millisecond-based system, causing hooks to time out almost instantly.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** September 14, 2026

## Today's Highlights
The community is currently focused on stabilizing the new agentic workflows and Model Context Protocol (MCP) integrations in version 1.0.83. While autonomous subagent orchestration is gaining traction, developers are reporting critical issues regarding token consumption efficiency during long tool-call sequences and platform-specific crashes, most notably in Linux-based voice processing.

---

## Releases
*No new releases in in the last 24 hours.*

---

## Hot Issues
* **[#4829] Subagents executing long tool-call sequences fail prompt caching](https://github.com/github/copilot-cli/issue/4829)** - A significant bug reported on Windows 11/PowerShell where autonomous subagents running hundreds of tool calls in a single turn bypass prompt caching. This leads to massive compound token consumption, impacting costs significantly when using Gemini 3.8 Flash.
* **[#4833] Voice mode crashes with ONNX Runtime assertion on Linux](https://github.com/github/copilot-cli/issue/4833)** - A critical crash for Manjaro users. Enabling voice input triggers a `SIGABRT` (signal 6) when the local Nemotron speech model processes audio.
* **[#4832] Workspace .mcp.json is never loaded](https://github.com/github/copilot-cli/issue/4832)** - Developers are reporting that v1.0.83 fails to recognize repo-root `.mcp.json` files. Consequently, `copilot mcp list` only shows user-level servers, preventing workspace-specific tools from starting.
* **[#2254] Add live progress streaming for background sub-agents](https://github.com/github/copilot-cli/issue/2254)** - A high-priority feature request for better observability. Users want multi-phase orchestrators (plan → implement → review) to show live progress rather than just a static tool-call count.
* **[#2147] [CLOSED] CAIP 400: input item ID does not belong to connection](https://github.com/github/copilot-cli/issue/2147)** - A resolved issue involving websocket errors when using gpt-5.4, indicating a mismatch in session-based item ID validation.

---

## Key PR Progress
* **[#4827] bump actions/stale from 9.1.0 to 11.0.0](https://github.com/github/copilot-cli/pr/4827)** - Dependabot updated the stale-action to help maintain repository health effectively.
* **[#4828] bump actions/github-script from 7.1.0 to 9.0.0](https://github.com/github/copilot-cli/pr/4828)** - Dependency update for GitHub-script actions, likely supporting internal CI/CD workflows.

---

## Feature Request Trends
* **Agent Observability:** There is a clear demand for "richer agent observability" for background sub-agents. Developers need to see the internal state of multi-phase orchestrators to debug complex task lifecycles.
* **MCP Maturity:** With the introduction of the Model Context Protocol, there is high pressure to ensure that workspace-level configurations (`.mcp.json`) work seamlessly and are detected automatically by the CLI.

---

## Developer Pain Points
* **Efficiency in Scaling:** The failure of prompt caching during long subagent tool-call sequences is a major concern, as it directly impacts API costs and performance.
* **Linux Stability:** Linux users are currently locked out of voice-mode features due to ONNX Runtime assertion failures in the Nemotron ASR model.
* **Configuration Silos:** The inability to load workspace-specific MCP settings in v1.0.83 is causing friction for teams trying to standardize project-specific AI tools.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest - 2026-09-14

### 1. Today's Highlights
The focus today is on refining the documentation for OpenAI-compatible provider integrations. A significant new pull request aims to clarify how the CLI handles environment variable overrides versus explicit provider configurations, ensuring better predictability for custom model endpoints.

### 2. Releases
*No new releases were recorded in the last 24 hours.*

### 3. Hot Issues
*No new issues were updated in the last 24 hours.*

### 4. Key PR Progress
*   **[#2641 [OPEN] docs(providers): clarify OpenAI-compatible configuration](https://github.com/MoonshotAI/kimi-cli/pull/2641)**
    This PR addresses documentation gaps by explicitly stating that custom providers require both an API-root base URL and a specific model ID. It also clarifies the hierarchy where `OPENAI_BASE_URL` and `OPENAI_API_KEY` will take precedence over local provider configuration fields, preventing configuration conflicts for power users.

### 5. Feature Request Trends
Based on recent activity, the community is increasingly interested in:
*   **Enhanced Provider Flexibility:** Clearer schemas and documentation for connecting non-standard LLM providers via OpenAI-compatible interfaces.
*   **Configuration Priority Clarity:** Requests for more explicit documentation on how environment variables interact with config file-based settings.

### 6. Developer Pain Points
*   **Configuration Ambiguity:** Developers are experiencing confusion regarding whether environment variables or local config files are taking precedence, leading to "silent" failures when switching between model providers.
*   **Integration Friction:** There is a recurring need for more detailed technical documentation regarding the specific requirements (like model ID mapping) when using self-hosted or third-party OpenAI-compatible gateways.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-14

*Source: github.com/anomalyco/opencode*

## 1. Today's Highlights

No new releases were published in the last 24 hours. The community's attention is dominated by a controversial forced migration to the "new layout" (V2 UI), with multiple issues reporting broken multi-worktree and multi-session workflows after the old layout was removed (#48835, #48837). Separately, a cluster of provider errors tied to Muse Spark / Zen `encrypted_content` authentication is surging across fresh issues, and the long-standing clipboard-copy bug (#4283) remains the most-discussed ticket with 133 comments.

## 2. Releases

No new releases in the last 24 hours. Omitted.

## 3. Hot Issues

1. **#4283 — Copy To Clipboard is not working** ([link](https://github.com/anomalyco/opencode/issues/4283))  
   133 comments / 124 👍. Selecting response text fails to copy on v1.0.62. Long-running top complaint; high community friction on a basic UX expectation.

2. **#23153 — [FEATURE] Pay Go with crypto** ([link](https://github.com/anomalyco/opencode/issues/23153))  
   22 comments / 51 👍. Recurring monetization request to support crypto payments for OpenCode Go.

3. **#48741 — [2.0] OpenCode Zen critical errors on Muse Spark family** ([link](https://github.com/anomalyco/opencode/issues/48741))  
   21 comments. `reasoning encrypted_content was not issued to this caller` when image/tool calls hit Muse Spark on Zen; blocks 2.0 users on that provider.

4. **#43277 — Sessions permanently stuck during normal use** ([link](https://github.com/anomalyco/opencode/issues/43277))  
   14 comments. Stuck sessions survive reboots and can't be recovered — a severe reliability problem for long-running work.

5. **#40516 — Desktop app: provider/model/MCP fail to load on startup** ([link](https://github.com/anomalyco/opencode/issues/40516))  
   11 comments. Regression from v1.18.5–v1.18.13 (v1.18.4 works); ~80% of starts fail to load config in org deployments.

6. **#36423 — [2.0] v2: subagent: no cancellation support for background subagents** ([link](https://github.com/anomalyco/opencode/issues/36423))  
   5 comments / 4 👍. Background subagents return session IDs but cannot be cancelled — a control-flow gap in the v2 agent model.

7. **#48645 — Regression in 1.18.30: every prompt crashes (TypeError in SystemPrompt.environment)** ([link](https://github.com/anomalyco/opencode/issues/48645))  
   4 comments. Fresh sessions fail immediately on `a.name` TypeError; 1.18.18 stable. Clear version-regression signal.

8. **#48835 — Old layout removed, new layout doesn't support multiple worktrees** ([link](https://github.com/anomalyco/opencode/issues/48835))  
   2 comments / 2 👍. Forced switch to new layout dropped multi-worktree support, breaking monorepo workflows.

9. **#48837 — Forced V2 interface destroys productivity (20+ sessions)** ([link](https://github.com/anomalyco/opencode/issues/48837))  
   2 comments. Users with large multi-project/agent setups report the removed toggle left them no escape hatch.

10. **#34442 — Windows Desktop installer broken offline (ripgrep not bundled)** ([link](https://github.com/anomalyco/opencode/issues/34442))  
    3 comments / 4 👍. `grep`/`glob`/`skill` and `customize-opencode` fail with no network because ripgrep isn't bundled.

## 4. Key PR Progress

All listed PRs are closed/merged `automated-pr-cleanup` entries updated today (authored 2026-08-13):

1. **#42296 — fix(opencode): drop empty text separators between signed reasoning blocks** ([link](https://github.com/anomalyco/opencode/pull/42296)) Closes #41738; preserves Anthropic signed thinking blocks.
2. **#42292 — fix(session): recover orphaned task runs** ([link](https://github.com/anomalyco/opencode/pull/42292)) Closes #42286; aborts stale task parts when session runner exits.
3. **#42290 — fix(app): scope review panel to session's own file changes** ([link](https://github.com/anomalyco/opencode/pull/42290)) Closes #41399; stops clean sessions showing shared working-tree diffs.
4. **#42283 — fix(session): ignore failed compaction summaries when reordering** ([link](https://github.com/anomalyco/opencode/pull/42283)) Closes #42282; stabilizes compaction reorder logic.
5. **#42281 — fix(core): apply external plugin changes after startup batch commits** ([link](https://github.com/anomalyco/opencode/pull/42281)) Closes #42280; fixes lost plugin mutations.
6. **#42278 — fix(opencode): keep shell tail when oversized line ends with newline** ([link](https://github.com/anomalyco/opencode/pull/42278)) Closes #42277; corrects output truncation.
7. **#42274 — fix(shell): encode PowerShell commands to preserve multi-line output** ([link](https://github.com/anomalyco/opencode/pull/42274)) Closes #41983; Windows cmd.exe newline fix.
8. **#42262 — fix(tui): align skill descriptions with wide characters** ([link](https://github.com/anomalyco/opencode/pull/42262)) Closes #40605; CJK alignment in TUI.
9. **#42257 — fix(opencode): persist Config.update to loaded config file** ([link](https://github.com/anomalyco/opencode/pull/42257)) Fixes #42276/#28966; PATCH /config now durable.
10. **#42202 — feat(opencode): add per-session budget limit** ([link](https://github.com/anomalyco/opencode/pull/42202)) New feature; stops assistant at session cost cap with TUI widget.

## 5. Feature Request Trends

- **UI layout freedom**: Restore old layout / add toggle, support multiple worktrees and 20+ session workflows in new UI (#39835, #48835, #48837).
- **Monetization flexibility**: Crypto payment support for OpenCode Go (#23153).
- **Plugin/tool ergonomics**: Env-var injection for bash (#11065, closed), plugin URL/file attachments in v2 (#47458), subagent cancellation (#36423).
- **Session management**: Clear recent folders/projects history (#19546, closed), per-session budget limits (#42202).
- **Reliability surfaces**: Cancellation signals for background agents and promise-plugin tools.

## 6. Developer Pain Points

- **Forced V2 migration** with removed escape hatch and lost multi-worktree support is the day's dominant frustration.
- **Provider instability** on Muse Spark / Zen (`encrypted_content` not issued) recurs across #48741, #48805, #48864 — appears tied to model switching and image/tool-call paths.
- **Copy/clipboard failures** persist at both message level (#4283) and code-fence level (#48839, closed).
- **Session corruption & stuck states** (#43277, #37353, #48848) including git `index.lock` races and stale global-state JSON causing white screens.
- **Desktop startup regressions** (#40516, #48645) where config/model/MCP fail to load or prompts crash on TypeErrors after minor version bumps.
- **Windows/offline brokenness** (#34442) — missing bundled ripgrep undermines core tools with no network.
- **New-UI gaps**: missing MCP toggle (#46426) and no layout switch for new users (#39835).

---
*Digest generated from GitHub activity snapshot for 2026-09-14. Issue/PR counts reflect the top items by engagement in the provided data.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

**Pi Community Digest – 2026‑09‑14**  
*Source: github.com/badlogic/pi-mono (earendil‑works/pi)*  

---

### 1. Today's Highlights
- Performance work is heating up: the team is debating a startup‑time budget to match jcode latency (#7739) and tackling UI redraw storms that plague long transcripts (#9255).  
- Stability fixes landed for the edit tool crash on huge diffs (#8036) and for the jiti cache‑related startup slowdown (#9565), while a new “exit” tool proposal aims to let models close sessions autonomously (#9544, #9543).  

### 2. Releases
*No new releases in the last 24 h.*

### 3. Hot Issues  
| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| [#7739](https://github.com/earendil-works/pi/issues/7739) | Set a startup‑time budget targeting jcode‑comparable latency and memory | Directly addresses the perceived performance gap with jcode; a budget would guide future optimisations. | 8 comments, 0👍 – active discussion on measurement methodology. |
| [#8036](https://github.com/earendil-works/pi/issues/8036) | Edit tool crashes TUI when rendering a large diff during execution and session resume | Crash on ~14 MB diffs breaks workflow; fix improves robustness for large‑file edits. | 8 comments, 0👍 – reporters confirm reproducibility. |
| [#9255](https://github.com/earendil-works/pi/issues/9255) | TuiMainScreen: full‑screen redraw storm when changed rows sit above the viewport top (long transcripts jump violently / doubled text) | UI becomes unusable on very long sessions; fixing this would smooth scrolling and reduce CPU load. | 4 comments, 0👍 – highlighted as a blocker for heavy‑usage sessions. |
| [#9075](https://github.com/earendil-works/pi/issues/9075) | Compaction summarisation inherits the session thinking level on adaptive models and deterministically hits the output cap at high efforts | Token‑budget misuse can waste reasoning capacity and hit output limits unexpectedly. | 3 comments, 👍3 – shows concern from power users of adaptive thinking. |
| [#9474](https://github.com/earendil-works/pi/issues/9474) | Codex transport: no non‑resetting per‑request total deadline; periodic events defeat idle timeout | Missing deadline can cause stalled connections to linger, affecting reliability of Codex‑based workflows. | 3 comments, 0👍 – early interest in adding a hard timeout. |
| [#9545](https://github.com/earendil-works/pi/issues/9545) | Reuse whole‑file normalization during batch edit uniqueness checks | Avoids repeated O(n) work in batch edits, improving latency for large refactorings. | 1 comment, 0👍 – noted as a low‑hanging fruit for performance. |
| [#9565](https://github.com/earendil-works/pi/issues/9565) | Unwritable jiti cache causes repeated extension recompilation and slow startup | Cache permission issues force recompilation on every launch, hurting dev‑loop speed. | 2 comments, 0👍 – confirmed on multi‑user Linux setups. |
| [#9561](https://github.com/earendil-works/pi/issues/9561) | Length‑truncated response with many tool calls materializes one error toolResult per call — 14k‑entry wall floods context | Massive tool‑call bursts can blow up context, leading to degraded model performance. | 1 comment, 0👍 – raises need for better tool‑result handling. |
| [#9554](https://github.com/earendil-works/pi/issues/9554) | Zai/glm‑5.3‑flash returns chain‑of‑thought in `content` with no `reasoning_content`; pi renders it as the reply body with no warning | Mis‑routing of reasoning tokens confuses users and hides the model’s internal thinking. | 1 comment, 0👍 – points to a provider‑specific rendering gap. |
| [#9553](https://github.com/earendil-works/pi/issues/9553) | Pi doesn't support commandcode provider | Missing provider limits ecosystem extensibility; users request commandcode login. | 1 comment, 0👍 – simple feature request awaiting implementation. |

### 4. Key PR Progress  
| # | PR | Summary |
|---|----|---------|
| [#9531](https://github.com/earendil-works/pi/pull/9531) | **feat(tree): add permanent branch deletion from session tree** | Allows pruning of off‑path session branches while protecting the active path; improves tree hygiene. |
| [#9548](https://github.com/earendil-works/pi/pull/9548) | **Mid conversation system messages** | Makes system‑prompt and tool changes part of the transcript, enabling accurate state restore after resume/branch navigation. |
| [#9558](https://github.com/earendil-works/pi/pull/9558) | **Feat/azure foundry v3** | Adds Azure‑Anthropic Foundry support, expands the AI test matrix, and integrates stream/abort/tool‑call coverage. |
| [#9556](https://github.com/earendil-works/pi/pull/9556) | **feat(ai): serverTools — declare provider server‑side tools in model config** | Introduces a `serverTools` field to expose built‑in provider tools (e.g., OpenAI `web_search`) directly in model definitions. |
| [#9550](https://github.com/earendil-works/pi/pull/9550) | **fix(coding-agent): compact before send using system and tool tokens** *(withdrawn)* | Attempted to pre‑compact using system/tool token counts; withdrawn for further design work. |
| [#9488](https://github.com/earendil-works/pi/pull/9488) | **fix(ai): add canonical Codex turn attribution** | Adds a provider‑neutral `requestIdentity` to stream options so Codex turn metadata survives retries, steering, and compaction. |
| [#9543](https://github.com/earendil-works/pi/pull/9543) | **feat: "Exit" tool call for models** | Provides an `exit` tool that lets models terminate the chat session when users utter “bye”, “/exit”, etc. |
| [#9541](https://github.com/earendil-works/pi/pull/9541) | **fix(tui): show human model labels** | Renders the friendly `name` field as the primary label in model pickers, relegating raw IDs to a secondary line. |
| [#9539](https://github.com/earendil-works/pi/pull/9539) | **examples: add loop‑guard extension (break LLM tool‑call loops)** | Example extension that detects and breaks repetitive identical tool calls, a common LLM agent failure mode. |

### 5. Feature Request Trends
- **Session control:** Requests for an `/exit` alias, persistent model/effort across `/new`, and a model‑initiated “exit” tool.  
- **Provider coverage:** Calls for additional providers (commandcode) and better handling of provider‑specific fields (e.g., `reasoning_content`).  
- **Performance & resource management:** Startup‑time budgets, jiti cache writability, reuse of normalized file content, and UI redraw optimisation.  
- **Tool‑call hygiene:** Loop‑guard patterns, better toolResult truncation handling, and server‑side tool declaration.  
- **Transcript fidelity:** Recording system‑prompt changes, preserving thinking token boundaries, and avoiding duplicate rendering of thinking tokens.

### 6. Developer Pain Points
- **Startup latency:** Repeated extension recompilation due to inaccessible jiti cache and perceived slowness vs. jcode.  
- **UI stability:** Crashes or massive redraws when handling large diffs or very long transcripts, leading to CPU spikes and visual glitches.  
- **Token budgeting:** Compaction and thinking‑level interactions that unintentionally consume output caps or flood context with tool‑call noise.  
- **Provider integration gaps:** Missing or inconsistently rendered provider features (commandcode login, chain‑of‑thought fields, Azure Foundry support).  
- **Extensibility overhead:** Extension loaders pulling in heavy TUI/graph dependencies at import time, slowing down embedding scenarios.  

*All links point to the exact GitHub items referenced above.*  
---  
*Generated for the Pi developer community – stay tuned for next week’s updates.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here's a thinking process:

1.  **Analyze User Request:**
   - Role: Technical analyst focused on AI developer tools
   - Task: Generate Qwen Code community digest for 2026-09-14
   - Data source: GitHub data for github.com/QwenLM/qwen-code
   - Output structure: 6 specific sections with specific content requirements
   - Style: concise, professional, suited for technical developers
   - Requirement: Include GitHub links for each item

2.  **Examine the Data:**
   - Latest Releases (last 24h): v0.23.3-nightly.20260913.faa395885e with some changes (refactor dingtalk, cua-driver-rs v0.20.6)
   - Latest Issues (updated in last 24h): 39 total, showing top 30 by comment count. I need to pick 10 noteworthy ones.
   - Latest Pull Requests (updated in last 24h): 50 total, showing top 20 by comment count. I need to pick 10 important ones.
   - No explicit "What's Changed" beyond the release notes and the bullet points, but those are part of the release.

   Let me carefully go through the data to extract meaningful items for each section.

   **Today's Highlights:** Need 2-3 sentences summarizing most important updates. Looking at the release and key changes: v0.23.3-nightly released, CUA driver updates (macOS codesigned/notarized, Linux/Windows unsigned), and several critical bug fixes/Features in flight. Also notable: TUI crashes (React error #185), memory usage issues, and CI stability work.

   **Releases:** The nightly v0.23.3-nightly.20260913.faa395885e was released. I should summarize its changes: refactoring dingtalk background response aggregation, removing obsolete code, and CUA driver prebuilt binaries update with platform-specific improvements.

   **Hot Issues:** Pick 10 from the 30 shown. I need to pick those that are open, have comments, and are noteworthy. Let's list the ones from the issue list that are OPEN and seem important:
   - #11500: TUI exits silently when multiple background agents complete - uncaught React #185, very commented (12), P1 priority, affects core UX
   - #11756: Virtualized history crashes with React error #185 during background-agent workflows - similar, recently created, 4 comments
   - #11783: TUI crashes with uncaught React error #185 a few seconds after background task registered - 3 comments, P1
   - #11764: Bash allow rule authorizes second command with backslash inside single quotes - security, P1, 3 comments
   - #11747: TUI crashes on Linux when Node's Intl.Segmenter broken/unavailable - P2, platform issue, 3 comments
   - #11724/#11725: High memory usage 7GB, crashes, non-recoverable - P2, performance, 4 comments each
   - #11590: qwen code with non-Qwen vendors incompatible due to metadata field - bug, P1, 4 comments
   - #11771: Desktop AppImage PYTHONHOME/PYTHONPATH leak into spawned stdio MCP servers - P2, packaging, 4 comments
   - #11019: AUTO mode user approvals never reach classifier - P2, core, 3 comments
   - #11780: CI tsc --build OOMs at 3072MB heap cap - P2, build system, 2 comments
   - #11791: Web shell command explanation panel hardcoded language - P3, enhancement, 2 comments
   - #11767: Second runtime recycle dropped while first generation still drains - P2, daemon, 2 comments
   - #11772: Anthropic pipeline thinking blocks replayed without signature rejected - P2, content-generation, 2 comments
   - #11762: /delete does not clean logs.json - P2, session-management, 3 comments
   - #11760: fix(core): usage-telemetry follow-ups to error-text redaction - P2, telemetry, 3 comments
   - #11742: fix(cli): reap running monitors when process dies on uncaught exception - CLOSED but important fix
   - #11786: fix(web-shell): make cockpit visual capture deterministic - OPEN, P2, 0 comments but relates to visual stability
   - #11731: fix(ci): retry transient npm ci failures in e2e.yml - OPEN, CI stability
   - #11563: fix(channels): preserve Feishu rich content and quoted resources - OPEN, comms
   - #11711: feat(core): add container execution for subagents - feature, P? 
   - #11722: feat(web-shell, mobile-shell): browser compat, PWA installability, Android shell skeleton - feature
   - #11280: fix(skills): re-apply a Skill's side effects when a session is resumed - bugfix
   - #11588: fix(ci): widen the review-salvage replay's timeline margin - CI fix
   - #11731: fix(ci): retry transient npm ci failures - CI stability
   - #11635: feat(web-shell): show fixed scheduled tasks in session sidebar - feature
   - #9466: refactor: anchor rewind mapping to stable prompt identity - refactor
   - #11241: feat(browser-use): add Playwright-based Browser SDK - big feature
   - #11792: fix(live): keep the monitor debug store working on Windows - Windows CI fix
   - #11742: fix(cli): reap running monitors when process dies - already closed
   - #11786: fix(web-shell): make cockpit visual capture deterministic - visual stability
   - #11731: retry npm ci failures - CI

   I need to pick exactly 10. Let me select the most impactful, recently updated, or high-comment ones that represent current community pain points:
   1. #11500 - TUI silent exit with React #185 (12 comments, P1, core UX)
   2. #11756 - Virtualized history crashes with React #185 (4 comments, P1, recurring)
   3. #11764 - Bash allow rule security vulnerability (3 comments, P1, shell security)
   4. #11747 - TUI crashes on Linux due to missing Intl.Segmenter (3 comments, P2, platform)
   5. #11724 - High memory usage 7GB crash (4 comments, P2, performance/long-term stability)
   6. #11590 - Non-Qwen vendor model incompatibility due to metadata (4 comments, P1, vendor support)
   7. #11771 - AppImage PYTHONHOME/PYTHONPATH leak (4 comments, P2, packaging)
   8. #11019 - AUTO mode approvals never reach classifier (3 comments, P2, core flow)
   9. #11780 - CI tsc OOM at 3072MB (2 comments, P2, build infrastructure)
   10. #11786 - Make cockpit visual capture deterministic (P2, visual consistency, relates to recent nondeterministic rendering issue #11465)

   Wait, #11786 has 0 comments but is a PR-related fix for the nondeterministic rendering issue #11465. Actually, #11465 is an issue about nondeterministic rendering. #11786 is a PR to fix it. I'll pick issues only for the "Hot Issues" section. Let re-read: "Hot Issues - Pick 10 noteworthy Issues, explain why they matter and community reaction". So I need 10 issues from the issue list.

   Let me pick 10 OPEN issues from the list that are updated in last 24h or have significant comments:
   1. #11500 - TUI exits silently with React #185 (12 comments, P1, just updated Sept 13)
   2. #11756 - Virtualized history crashes with React #185 (4 comments, P1, Sept 13)
   3. #11764 - Bash allow rule security vulnerability (3 comments, P1, Sept 13)
   4. #11747 - TUI crashes on Linux Intl.Segmenter (3 comments, P2, Sept 13)
   5. #11724 - High memory usage 7GB (4 comments, P2, Sept 12-13)
   6. #11590 - Non-Qwen vendor model metadata incompatibility (4 comments, P1, Sept 10-13)
   7. #11771 - AppImage PYTHONHOME/PYTHONPATH leak (4 comments, P2, Sept 12-13)
   8. #11019 - AUTO mode approvals never reach classifier (3 comments, P2, Sept 4-13)
   9. #11780 - CI tsc OOM at 3072MB (2 comments, P2, Sept 13)
   10. #11742 - fix(cli): reap running monitors when process dies (closed but recently merged/updated, P2, Sept 12-13) - actually it's CLOSED but was updated recently. I should probably stick to OPEN issues, but the prompt says "noteworthy Issues" without specifying open/closed. I'll include mostly OPEN ones, maybe one closed that's significant.

   Actually, looking at the dates, many are updated on Sept 13. I'll pick 10 that are OPEN and have activity. Let me list them with brief reasons:

   1. #11500: TUI silent crash on background agent completion - React #185 "Maximum update depth exceeded", blocks TUI usability. 12 comments, P1.
   2. #11756: Virtualized history React #185 crash during background-agent workflows - similar root cause, affects history rendering. 4 comments, P1.
   3. #11764: Bash allow rule security flaw - authorizes second command when first ends with backslash in single quotes, serious shell security issue. 3 comments, P1.
   4. #11747: TUI crashes on RHEL 10 due to missing Intl.Segmenter Node dependency - no diagnostic emitted, silent crash. 3 comments, P2.
   5. #11724: High memory usage 7GB detected, non-recoverable CLI crashes, long-running sessions broken. 4 comments, P2.
   6. #11590: Non-Qwen vendor models (e.g., GLM-5.3-Flash) fail due to injected `metadata` field, 400 errors. 4 comments, P1.
   7. #11771: AppImage sets PYTHONHOME/PYTHONPATH globally, leaks into spawned MCP Python interpreters, crashes external tools. 4 comments, P2.
   8. #11019: AUTO mode user approvals never reach classifier, blocks are unoverridable; approval mode reverts to AUTO on session rebuild. 3 comments, P2.
   9. #11780: CI tsc --build OOMs at 3072MB heap cap, main peaks at 3.14GB, build lanes flaky under load. 2 comments, P2.
   10. #11762: /delete does not clean ~/.qwen/tmp/<hash>/logs.json, accumulates full conversation content for all sessions. 3 comments, P2.

   That's 10 good ones. I'll add GitHub links.

   **Key PR Progress:** Pick 10 important PRs from the 20 shown. I need to describe features or fixes. Let's look at the PR list:
   - #11722: feat(web-shell, mobile-shell): browser compat, PWA installability, Android shell skeleton - new ground
   - #11711: feat(core): add container execution for subagents - docker/podman backend for subagents
   - #11787: fix(ci): restore Windows test baseline - CI stability, portable paths
   - #11280: fix(skills): re-apply a Skill's side effects when a session is resumed - important resume fix
   - #11563: fix(channels): preserve Feishu rich content and quoted resources - comms preservation
   - #10183: feat(memory): add structured on-demand recall - memory feature evolution
   - #11588: fix(ci): widen the review-salvage replay's timeline margin past contention stalls - CI flaky test fix
   - #11731: fix(ci): retry transient npm ci failures in e2e.yml install steps - CI reliability
   - #11635: feat(web-shell): show fixed scheduled tasks in session sidebar - task visibility
   - #9466: refactor: anchor rewind mapping to stable prompt identity - prompt identity stability
   - #11241: feat(browser-use): add Playwright-based Browser SDK - big browser control feature
   - #11792: fix(live): keep the monitor debug store working on Windows (#11790) - Windows CI fix
   - #11742: fix(cli): reap running monitors when the process dies on an uncaught exception - process death cleanup
   - #11786: fix(web-shell): make the cockpit visual capture deterministic - visual determinism
   - #9305: fix(ui): bottom-align short VP content so blank space is at top - VP mode UX
   - #10455: fix(cli): don't crash startup when the output-language file is unwritable - startup crash fix
   - #11001: fix(test): wait for interactive PTY sessions to end during cleanup - test harness fix
   - #11134: fix(ci): retry the transient all-green macOS E2E shard death once - macOS E2E stability
   - #11692: feat(core): make the web_search budget configurable and bound the extractor fallback - web search budget control

   I'll pick 10 that are most impactful or recently active:
   1. #11722: Browser compat, PWA installability, Android shell skeleton for web/mobile shell - expands platform support
   2. #11711: Container execution for subagents on Unix with docker/podman backend - new execution isolation
   3. #11280: Re-apply Skill side effects on session resume - critical for session continuity
   4. #11563: Preserve Feishu rich content and quoted resources - important for Feishu users
   5. #11787: Restore Windows test baseline by making paths portable - CI cross-platform fix
   6. #11731: Retry transient npm ci failures in e2e.yml - reduces CI flakiness
   7. #11635: Show fixed scheduled tasks in session sidebar - task management UX
   8. #9466: Anchor rewind mapping to stable prompt identity - survives session reshape
   9. #11792: Keep monitor debug store working on Windows (#11790) - Windows CI stability
   10. #11786: Make cockpit visual capture deterministic - fixes the nondeterministic rendering issue #11465

   Each gets a brief description and GitHub link.

   **Feature Request Trends:** Distill most-requested feature directions from all Issues. I need to scan the issues and PRs for recurring themes. Looking at the issues: 
   - TUI stability/crashes (React #185, Intl.Segmenter, memory)
   - Session management (AUTO approvals, /delete, resume side effects)
   - Cross-vendor model compatibility (metadata field, non-Qwen models)
   - CI/build stability (OOM, npm ci flakiness, Windows baseline)
   - Platform-specific issues (Linux Intl.Segmenter, AppImage PYTHONPATH, Windows monitor store)
   - Feature additions: container execution for subagents, browser/PWA shell, Feishu rich content, scheduled tasks visibility, structured memory recall, configurable web search budget
   - Security: bash allow rule vulnerability
   - Telemetry/privacy: error text redaction, data privacy in telemetry
   - Rendering determinism: cockpit visual capture

   Common directions: 
   1. TUI/U stability and crash fixes (React error #185 is huge)
   2. Cross-platform compatibility (Linux, Windows, macOS, AppImage)
   3. Model vendor agnosticism (fixing metadata injection for non-Qwen APIs)
   4. Session management resilience (resume, approvals, cleanup)
   5. CI/build infrastructure reliability
   6. New capabilities: containerized subagent execution, browser/PWA integration, Feishu rich content preservation
   7. Deterministic rendering and visual consistency

   I'll distill into 5-6 trend bullets.

   **Developer Pain Points:** Summarize recurring developer frustrations or high-frequency requests. From the data:
   - React #185 Maximum update depth exceeding in TUI

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-09-14

## 1. Today's Highlights
Today's activity is dominated by the ongoing 0.9.14 refactor backlog, with engineers aggressively addressing internal architectural debt, async discipline, and state management. A critical batch of high-severity session and sub-agent data integrity issues has surfaced, while the product team advances the visual pet ecosystem and local API capabilities. No new releases were published in the last 24 hours.

## 2. Releases
**None** in the last 24 hours.

## 3. Hot Issues (Top 10 Noteworthy)

*   **[#6137](https://github.com/Hmbown/Codewhale/issues/6137) Persisted empty "New Session" records evict real transcripts**
    *   *Why it matters:* Opening Codewhale creates an empty session record that reaches disk immediately. These empty records occupy the `MAX_SESSIONS` cap and force the eviction of real, non-empty transcripts. This is a severe data integrity and retention bug.
*   **[#6136](https://github.com/Hmbown/Codewhale/issues/6136) `save_session` silently deletes the oldest transcript**
    *   *Why it matters:* The `cleanup_old_sessions()` helper is called after every successful write, removing any records past the 50 most recently updated. This silently truncates historical data without user warning once the store hits capacity.
*   **[#6128](https://github.com/Hmbown/Codewhale/issues/6128) Fan-out is not bounded; grandchild spawned past `max_spawn_depth`**
    *   *Why it matters:* A child spawned a grandchild at `spawn_depth: 2` even when its profile mandated `max_spawn_depth: 1`. The parent remained unaware until dumping `action=status`. This allows unbounded resource consumption and unbudgeted token spend.
*   **[#6129](https://github.com/Hmbown/Codewhale/issues/6129) No per-call budget on `agent()`**
    *   *Why it matters:* The runtime refuses per-call token budgets, only allowing fleet-level defaults. When workers overrun, the parent process cannot gracefully say "stop at N tokens and hand back what you have," forcing full cancellation or waiting.
*   **[#6130](https://github.com/Hmbown/Codewhale/issues/6130) `action=status` returns ~50k tokens of nested payload**
    *   *Why it matters:* The compact status projection for `agent()` is bloated, returning full engine event logs and hundreds of sequenced entries instead of a concise child status summary, creating massive latency and token overhead for simple queries.
*   **[#6117](https://github.com/Hmbown/Codewhale/issues/6117) Agent profiles ignored when spawning sub-agents**
    *   *Why it matters:* Calling `agent(action="start", profile="<name>")` silently falls back to the session's default route (`run.model`). The specified provider and model are entirely discarded, breaking user expectations for custom agent configurations.
*   **[#6017](https://github.com/Hmbown/Codewhale/issues/6017) Request for durable memory across sessions**
    *   *Why it matters:* Proposes integrating MemCode as an optional memory layer to carry project context and user workflow preferences between commands and sessions, moving beyond ephemeral state to persistent agent memory.
*   **[#6138](https://github.com/Hmbown/Codewhale/issues/6138) Design: resume when target session or provider is gone**
    *   *Why it matters:* Currently, a deleted/mistyped session ID or missing provider results in an opaque error with no in-product recovery path. The community needs a clear UX dead-end resolution when `load_session_by_prefix` fails.
*   **[#6116](https://github.com/Hmbown/Codewhale/issues/6116) Add copy on select and paste on middle click for Linux**
    *   *Why it matters:* Native Linux UX requirements are missing. Selection does not copy to the secondary buffer and middle-click paste does not work, which is highly inconvenient for standard Linux terminal workflows.
*   **[#6147](https://github.com/Hmbown/Codewhale/issues/6147) Bound the two unbounded channels inside the engine**
    *   *Why it matters:* `tx_subagent_completion` and `progress_tx` in `core/engine.rs` are `mpsc::unbounded_channel()`. A pathological tool emitting rapid progress will grow memory without bound inside the core actor, threatening the stability of the entire product.

## 4. Key PR Progress

*   **[#6154](https://github.com/Hmbown/Codewhale/pull/6154) feat(tui): `/pet` mode — Codewhale pet takes the terminal**
    *   *Summary:* Turns the terminal over to the pet. `/pet on` gives the habitat the whole viewport and reveals the assistant answer or error through the transcript renderer upon turn completion.
*   **[#6120](https://github.com/Hmbown/Codewhale/pull/6120) feat(runtime-api): expose workspace file suggestions**
    *   *Summary:* Closes #6095. Adds `GET /v1/workspace/files/search?query=...` to the Runtime API, allowing local API clients to use the same discovery and ranking as the composer file suggestions.
*   **[#6134](https://github.com/Hmbown/Codewhale/pull/6134) Professionalize Computer Use**
    *   *Summary:* Routes local actions through a registered standalone helper. If the helper cannot start, input fails closed. Adds native permission setup, background practice checks, and human Pause/Stop controls.
*   **[#6096](https://github.com/Hmbown/Codewhale/pull/6096) feat(commands): adopt capability shapes in TUI session-export (FEAT-025)**
    *   *Summary:* Rewires `/export` through the portable command contract while keeping the command file in `codewhale-tui`. Structural migration with no visible behavior change.
*   **[#6110](https://github.com/Hmbown/Codewhale/pull/6110) feat(pet): add persistent world and work-driven dot forms**
    *   *Summary:* Establishes a shared persistent audiovisual world across browser, Apple, Android, and TUI Watch. The 980 dots dynamically represent reasoning knots, code strands, and filesystem branches.
*   **[#6153](https://github.com/Hmbown/Codewhale/pull/6153) [rust, cleanup] Guard reqwest clients to use codewhale_release::tls**
    *   *Summary:* Fixes a panic in `default_rustls_crypto_provider` caused by a bare `reqwest::Client::builder()` built under the `rustls-no-provider` feature. Mandates all clients go through the centralized TLS guard.
*   **[#6147](https://github.com/Hmbown/Codewhale/pull/6147) [rust, subagents] Bound the two unbounded channels inside the engine**
    *   *Summary:* Part of the 0.9.14 refactor backlog. Replaces the unbounded memory growth in `core/engine.rs` with bounded channels to prevent pathological tools from crashing the core

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

# ComfyUI Community Digest: September 14, 2026

## Today's Highlights
The community is currently focused on optimizing the **MiniMax H3** video model, specifically addressing VAE performance bottlenecks and crashes on MPS (Mac) hardware. Significant architectural work is underway to refactor the **asset system** to separate records from content, while new support for the **YuE2** music generation model is gaining traction among contributors.

---

## Releases
*No new releases in the last 24 hours.*

---

## Hot Issues
1. **MiniMax H3 Audio Shape Mismatch (#16289):** A critical tensor shape mismatch occurs when combining video continuation (with audio) and a standalone audio-timbre reference. This blocks advanced video-sync workflows. [View Issue](https://github.com/Comfy-Org/ComfyUI/issues/16289)
2. **MiniMax H3 ControlNet Crash (#16230):** Users on RTX 5080 laptops report the ControlNet aborting at the first sampling step. Interestingly, `--disable-comfy-compiler` does not resolve the issue. [View Issue](https://github.com/Comfy-Org/ComfyUI/issues/16230)
3. **ROCm/Windows Access Violation (#16102):** A memory access violation in `vbar_allocate` is hitting `gfx1151` hardware when loading the `LTXVLatentUpsampler`, affecting AMD users on Windows. [View Issue](https://github.com/Comfy-Org/ComfyUI/issues/16102)
4. **H3 Indexing Inconsistency (#16282):** A UX request noting that reference inputs use 0-based indexing (`ref_image_0`) while H3 prompt references use 1-based indexing (`<Picture 1>`), leading to user confusion. [View Issue](https://github.com/Comfy-Org/ComfyUI/issues/16282)
5. **YuE2 Support Request (#16256):** High-interest request for support for the newly open-sourced YuE2 music generation model, signaling growing interest in high-fidelity audio workflows. [View Issue](https://github.com/Comfy-Org/ComfyUI/issues/16256)
6. **PyTorch 2.7 Incompatibility (#16300):** `comfy-kitchen` fails to start on legacy GPUs using PyTorch < 2.7 due to PEP-585 annotations in custom ops. [View Issue](https://github.com/Comfy-Org/ComfyUI/issues/16300)
7. **MPS Int8 Crash Bypass (#16284):** On Mac Silicon, `linear_input_act` bypasses the fallback to full precision, causing crashes for MiniMax H3 when int8 is explicitly disabled. [View Issue](https://github.com/Comfy-Org/ComfyUI/issues/16284)
8. **VAE Decode OOM Strategy (#16299):** A feature request to have ComfyUI attempt to unload other models and retry regular VAE decoding before falling back to slower tiled decoding on VRAM-constrained systems. [View Issue](https://github.com/Comfy-Org/ComfyUI/issues/16299)
9. **CSP Restrictions for API Nodes (#15565):** When `--disable-api-nodes` is active, a restrictive Content Security Policy breaks media playback and file uploads in the `Record Audio` node. [View Issue](https://github.com/Comfy-Org/ComfyUI/issues/15565)
10. **Model Filtering Complaint (#15234):** A stale but closed issue regarding "ridiculous" model filtering, highlighting ongoing user friction with restrictive model loading checks. [View Issue](https://github.com/Comfy-Org/ComfyUI/issues/15234)

---

## Key PR Progress
1. **MiniMax H3 VAE Optimizations (#16187):** `kijai` is merging kernels from `comfy-kitchen` to speed up the VAE by folding norm, SiLU, and padding into convolutions. [View PR](https://github.com/Comfy-Org/ComfyUI/pull/16187)
2. **CameraAngle Node (#16251):** `jtydhr88` is introducing a three-parameter camera picker (horizontal/vertical/zoom) that outputs 3D camera info and plain-English prompts. [View PR](https://github.com/Comfy-Org/ComfyUI/pull/16251)
3. **RAM Cache Fix (#16302):** `christian-byrne` is fixing an issue where the RAM cache evaluates lazy mappings prematurely, which interferes with tensor pressure accounting. [View PR](https://github.com/Comfy-Org/ComfyUI/pull/16302)
4. **Accumulate Toggle (#16304):** A revival of a feature to add an "accumulate" toggle to `SaveImage` and `PreviewImage` nodes for better batch handling. [View PR](https://github.com/Comfy-Org/ComfyUI/pull/16304)
5. **Asset System Refactor (#16295):** `synap5e` collapsed a massive 10-PR review stack to properly separate asset records from content, a major architectural cleanup. [View PR](https://github.com/Comfy-Org/ComfyUI/pull/16295)
6. **Flux Video Edit (#16259):** `bigcat88` has added the official Flux Video Edit node as part of partner nodes. [View PR](https://github.com/Comfy-Org/ComfyUI/pull/16259)
7. **Graceful Degradation (#16301):** `L4XB` is implementing a fix to allow `comfy-kitchen` to degrade gracefully rather than killing startup when encountering incompatible PyTorch-related custom ops. [View PR](https://github.com/Comfy-Org/ComfyUI/pull/16301)
8. **Int8 Format Honor (#16286):** `L4XB` fixed a fused activation kernel to respect the "disabled" flag for int8 formats. [View PR](https://github.com/Comfy-Org/ComfyUI/pull/16286)
9. **Yue 2 Documentation (#16303):** `comfyanonymous` updated the readme to reflect that YuE2 is supported. [View PR](https://github.com/Comfy-Org/ComfyUI/pull/16303)
10. **Typo Fix (#16298):** A minor but helpful fix for a typo in the error message for multiprocess ControlNet cloning. [View PR](https://github.com/Comfy-Org/ComfyUI/pull/16298)

---

## Feature Request Trends
* **Advanced Audio Integration:** High demand for native music generation support (YuE2) and better handling of audio-timbre references in video-generation models.
* **VRAM Management:** Users want "smart" VAE decoding that attempts to clear VRAM before giving up and using tiled decoding to preserve speed.
* **Cinematic Tooling:** Increasing interest in dedicated camera-control nodes (CameraAngle) that generate both technical metadata and natural language descriptions.

---

## Developer Pain Points
* **Hardware-Specific Regressions:** Mac (MPS) users are experiencing frequent crashes when using quantized (int8) weights on newer MiniMax models.
* **Dependency Versioning:** The transition to newer PyTorch versions (2.7+) is breaking older custom nodes that use modern Python type hinting (PEP-585).
* **UI/UX Consistency:** Discrepancies between 0-based node inputs and 1-based prompt references are a recurring source of friction for power users.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Community Digest: September 14, 2026

## Today's Highlights
The community is currently focused on resolving stability issues with the new generation of **Qwen 3** and **Gemma 4** models, particularly regarding tool-call parsing and multimodal processing on Windows. There is also significant activity around optimizing memory management for edge hardware like Jetson Orin and expanding the Ollama ecosystem to include new productivity integrations like Genie and SlopShield.

---

## Releases
*No new releases in in the last 24 hours.*

---

## Hot Issues
1. **#3185: License notice missing in artifacts**: A high-priority issue reporting that Ollama fails to distribute copyright notices for statically linked dependencies (like `llama.cpp`) in binary form, potentially violating MIT terms. [275 👍](https://github.com/ollama/ollama/issue/3185)
2. **#17778: Qwen 3.8 500 error during streaming**: Users are reporting "no user query found" errors when Qwen 3.8 enters tool-calling loops during chat streaming sessions. [25 👍](https://github.com/ollama/ollama/issue/17778)
3. **#16532: Gemma 4 image processing on Windows**: A bug where Gemma 4 can successfully attach JPEGs but fails to "see" or process them for OCR tasks on the Windows platform. [https://github.com/ollama/ollama/issue/16532)
4. **#12362: Cloud model JSON schema ignored**: The `qwen3-coder:480b-cloud` model is reportedly ignoring JSON reply schemas, returning raw strings instead of structured data. [https://github.com/ollama/ollama/issue/12362)
5. **#18396: Jetson Orin Nano OOM**: The Gemma 4 E4B multimodal projector is causing host Out-of-Memory errors on 8GB Jetson devices despite valid CPU-projector configurations. [https://github.com/ollama/ollama/issue/18396)
6. **#16383: Qwen 3.6 tool-call drift**: The Qwen 3.5 parser intermittently fails to unmarshal Qwen 3.6 tool-calls, resulting in 500 errors. [2 👍](https://github.com/ollama/ollama/issue/16383)
7. **#18431: Anthropic-compat cache breaking**: A critical architectural issue where system-role messages placed inside the `messages` array are hoisted to the top, defeating prefix caching for tools like Claude Code. [https://github.com/ollama/ollama/issue/18431)
8. **#18421: Qwen 3-Coder integer overflow**: A parser bug where tool arguments outside the `int64` range (e.g., 1e20) are incorrectly capped at the maximum `int64` value. [https://github.com/ollama/ollama/issue/18421)
9. **#18426: Kimi-k3 crash**: A regression where `kimi-k3:cloud` crashes with a 500 error when image content is included in tool-role messages, unlike previous versions. [https://github.com/ollama/ollama/issue/18426)
10. **#18415: Windows PowerShell flicker**: A persistent UI annoyance where the Ollama desktop app briefly flashes a PowerShell window on launch on Windows 10. [https://github.com/ollama/ollama/issue/18415)

---

## Key PR Progress
1. **#18422: Preserve tool numbers outside int64 range**: Fixes #18421 by ensuring large float values in tool calls remain as floats rather than being cast to broken integers. [https://github.com/ollama/ollama/pull/18422)
2. **#18124: Direct I/O for Vulkan GPUs**: Closed PR resolving timeouts on integrated Vulkan GPUs (like Virtio) by matching behavior with CUDA/ROCm. [Closed](https://github.com/ollama/ollama/pull/18124)
3. **#18424: Clean up intermediate blobs**: Addresses the issue where `ollama create --quantize` leaves behind ~50GB unreferenced F16 blobs in the model directory. [https://github.com/ollama/ollama/pull/18424)
4. **#13806: Windows Image Generation**: A major PR bringing image generation support to Windows via upstreamX patches. [Closed](https://github.com/ollama/ollama/pull/13806)
5. **#18428: Add Genie to desktop integrations**: Documentation update for Genie, a native macOS workspace agent. [https://github.com/ollama/ollama/pull/18428)
6. **#18316: Enhance n8n and ComfyUI integration**: Expanding native support for popular workflow automation and AI image generation tools. [https://github.com/ollama/ollama/pull/18316)
7. **#18423: Add Clips Kitty to docs**: Adding documentation for Clips Kitty, a Windows app that turns videos into vertical clips. [https://github.com/ollama/ollama/pull/18423)
8. **#18420: Add SlopShield to docs**: Adding SlopShield, the Chrome extension that scores YouTube clickbait accuracy. [https://github.com/ollama/ollama/pull/18420)
9. **#18417: Fix 'an the' typo**: A minor documentation cleanup in the LLM libraries troubleshooting section. [https://github.com/ollama/ollama/pull/18417)

---

## Feature Request Trends
*   **Docker Sandbox (SBX) Integration**: High demand for Ollama to integrate with Docker sandboxes to allow coding agents (like Cline or Cursor) to execute code safely in isolated environments.
*   **Advanced Context Management**: Developers are requesting "Advanced Context Sharing" and "Directory Inputs" to better manage large codebases when interacting with local models.
*   **Model Variety**: Continued requests for specific high-parameter count models like **SARVAM-30b/105b** and **Gnani-Evon-v3.3**.
*   **Thinking-Budgets**: Users are pushing for explicit control over "thinking budgets" for models that utilize internal reasoning chains.

---

## Developer Pain Points
*   **Storage Bloat**: A recurring frustration regarding the `ollama create` process leaving massive, unreferenced blobs on disk that aren't cleaned up by `ollama rm`.
*   **Prompt Cache Invalidation**: Developers are frustrated that random key ordering in tool schemas (specifically in Qwen3-coder) and system-role hoisting are breaking prefix cache hits, degrading performance.
*   **Platform Disparity**: Significant gaps remain between Linux/macOS and Windows, particularly regarding multimodal image processing and UI stability.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

## llama.cpp Community Digest — 2026-09-14
*Data source: [github.com/ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp) (activity through 2026-09-13)*

---

### 1. Today's Highlights
llama.cpp shipped a dense batch of backend and model-format fixes across WebGPU, SYCL, Vulkan, OpenCL, s390x, and CUDA, plus grammar/schema improvements in `common`. Community attention remains concentrated on backend op parity, server API compatibility, and vision/KV-cache behavior. High-signal PRs this period include Kimi-K3 support, DeepSeek V4.1 conversion, SYCL graph replay, MoE expert disk streaming, and a 1.2–1.3x grammar-parsing optimization.

---

### 2. Releases
New builds in the last 24h:

- **[b10948](https://github.com/ggml-org/llama.cpp/releases/tag/b10948)** — tests: exclude `HY_V4` from WebGPU `test-llama-archs`.
- **[b10947](https://github.com/ggml-org/llama.cpp/releases/tag/b10947)** — models: guard nemotron-h expert FFN size fallback against a zero divisor.
- **[b10946](https://github.com/ggml-org/llama.cpp/releases/tag/b10946)** — ggml-cpu(s390x): guard VXE-only repack helpers.
- **[b10944](https://github.com/ggml-org/llama.cpp/releases/tag/b10944)** — SYCL: fix `get mem` error and improve Level Zero SDK detection.
- **[b10941](https://github.com/ggml-org/llama.cpp/releases/tag/b10941)** — tests: reduce FA test sizes.
- **[b10938](https://github.com/ggml-org/llama.cpp/releases/tag/b10938)** — Vulkan: workaround NV queuesubmit driver bug with a mutex.
- **[b10937](https://github.com/ggml-org/llama.cpp/releases/tag/b10937)** — OpenCL: apply noshuffle row-alignment rule to `q4_K`, `q5_K`, `q8_0`.
- **[b10936](https://github.com/ggml-org/llama.cpp/releases/tag/b10936)** — chat: improve parsing of complex types in qwen3-coder.
- **[b10935](https://github.com/ggml-org/llama.cpp/releases/tag/b10935)** — common: add `LOG_JSON` macro for structured logging.
- **[b10934](https://github.com/ggml-org/llama.cpp/releases/tag/b10934)** — common: implement `common_schema` internal representation for JSON schemas.

---

### 3. Hot Issues
Top issues by community engagement:

1. **[#14909 — Implement missing ops from backends](https://github.com/ggml-org/llama.cpp/issues/14909)** — 54 comments, 9 👍. Open enhancement/good-first-issue. Backend op coverage remains a long-running coordination problem across CUDA, SYCL, Vulkan, Metal, etc.
2. **[#19466 — KV cache save fails for vision models](https://github.com/ggml-org/llama.cpp/issues/19466)** — 38 comments, 7 👍. `/slots/3?action=save` does not work for vision-enabled models, blocking server-side multimodal state workflows.
3. **[#25808 — SYCL `GGML_SYCL_DEVICE_ARCH=xe2` segfault](https://github.com/ggml-org/llama.cpp/issues/25808)** — 35 comments, now closed. A high-traffic SYCL crash report; closure suggests a fix or resolution path.
4. **[#16393 — Tool to list and delete cached models](https://github.com/ggml-org/llama.cpp/issues/16393)** — 27 comments, 21 👍. Strong demand for basic model cache management in the CLI/server tooling.
5. **[#19138 — Support OpenAI Responses API (`/v1/responses`)](https://github.com/ggml-org/llama.cpp/issues/19138)** — 18 comments, 41 👍. The highest thumbs-up count in the set; reflects strong ecosystem-compatibility demand.
6. **[#20141 — Metal crash on M4 Pro / Tahoe 26.3](https://github.com/ggml-org/llama.cpp/issues/20141)** — 14 comments, closed. `ggml_metal_synchronize` / `kIOGPUCommandBufferCallbackErrorInnocentVictim` crash drew Apple Silicon attention.
7. **[#25751 — SWA on Gemma 4 forgets key details](https://github.com/ggml-org/llama.cpp/issues/25751)** — 14 comments. Sliding-window attention correctness issue with long-context quality implications.
8. **[#24343 — `llama_init_from_model` fails for Gemma4Assistant](https://github.com/ggml-org/llama.cpp/issues/24343)** — 12 comments, 32 👍. Initialization failure for a popular model family; high community signal.
9. **[#20934 — ROCm lower token-gen performance vs Vulkan on RX 7900 XTX](https://github.com/ggml-org/llama.cpp/issues/20934)** — 9 comments, closed. Backend performance parity remains a recurring AMD concern.
10. **[#22921 — Independent control of slots (`-ns`) and parallelism (`-np`)](https://github.com/ggml-org/llama.cpp/issues/22921)** — 9 comments, 3 👍. Server scheduling flexibility request tied to discussion #22401.

---

### 4. Key PR Progress
Notable pull requests updated in the last 24h:

1. **[#26185 — model: add Kimi-K3 text model](https://github.com/ggml-org/llama.cpp/pull/26185)** — Closed/merge-ready. Adds hybrid KDA + MLA attention, cross-layer residual attention, latent MoE, and situ activation.
2. **[#28846 — ggml-cuda: fallback to F32 on devices without BF16 acceleration](https://github.com/ggml-org/llama.cpp/pull/28846)** — Closed. Addresses older AMD GPUs (pre-CDNA / pre-RDNA3) that lack native BF16 matrix acceleration.
3. **[#26885 — Grammars: single lookup, remove extra copies](https://github.com/ggml-org/llama.cpp/pull/26885)** — Closed. Reports 1.2x–1.3x grammar-parsing speedup for the in-house grammar engine.
4. **[#25294 — llama: stream MoE routed experts from disk](https://github.com/ggml-org/llama.cpp/pull/25294)** — Open. Enables models larger than RAM by streaming routed-expert weights from SSD with a device-side expert slab cache.
5. **[#28725 — Add SYCL graph record and replay](https://github.com/ggml-org/llama.cpp/pull/28725)** — Open. Ports CUDA graph functionality to SYCL, with SYCL-specific data reordering.
6. **[#28696 — convert: add DeepSeek V4.1 (`DeepseekV41ForCausalLM`)](https://github.com/ggml-org/llama.cpp/pull/28696)** — Open. Adds conversion support under a `deepseek41` architecture, handling nested `text_config`.
7. **[#28847 — server: support `input_image` in Responses tool outputs](https://github.com/ggml-org/llama.cpp/pull/28847)** — Open. Allows image content inside `function_call_output`, useful for Codex `view_image`-style tools.
8. **[#28868 — models: fix incorrect uses of `get_key_or_arr`](https://github.com/ggml-org/llama.cpp/pull/28868)** — Open/merge-ready. Prevents array-loading bugs where a step value could be written into an array.
9. **[#20831 — cuda: dynamic MMVQ nwarps for narrow matrices](https://github.com/ggml-org/llama.cpp/pull/20831)** — Open. Fixes MoE TG regression by avoiding `nwarps=8` on narrow expert FFN matrices.
10. **[#28864 — vocab: add byte fallback path to UGM tokenizer](https://github.com/ggml-org/llama.cpp/pull/28864)** — Open. Fixes UGM tokenizer coverage, mirroring SPM `resegment()` behavior.

---

### 5. Feature Request Trends
Across open issues, the strongest recurring directions are:

- **Backend op parity** — Implement missing operations across CUDA, SYCL, Vulkan, Metal, OpenCL, and other backends ([#14909](https://github.com/ggml-org/llama.cpp/issues/14909)).
- **OpenAI API compatibility** — `/v1/responses` support and broader server API parity ([#19138](https://github.com/ggml-org/llama.cpp/issues/19138)).
- **Model/cache lifecycle tooling** — List and delete cached models, better cache visibility, and cache management ([#16393](https://github.com/ggml-org/llama.cpp/issues/16393)).
- **Server scheduling control** — Independent control of slots and parallelism (`-ns` vs `-np`) ([#22921](https://github.com/ggml-org/llama.cpp/issues/22921)).
- **Multimodal state support** — KV cache save/restore for vision-enabled models ([#19466](https://github.com/ggml-org/llama.cpp/issues/19466)).
- **Performance parity** — ROCm/HIP/Vulkan/SYCL performance regressions and quantized-KV decode slowdowns ([#20934](https://github.com/ggml-org/llama.cpp/issues/20934), [#27796](https://github.com/ggml-org/llama.cpp/issues/27796)).
- **Long-context correctness** — SWA and long-context generation quality issues ([#25751](https://github.com/ggml-org/llama.cpp/issues/25751), [#28805](https://github.com/ggml-org/llama.cpp/issues/28805)).
- **Tool/MCP reliability** — Deadlocks and large tool-call payload handling ([#28723](https://github.com/ggml-org/llama.cpp/issues/28723)).

---

### 6. Developer Pain Points
Recurring frustrations visible in the issue and PR queue:

- **Backend fragmentation** — Missing ops and divergent behavior across CUDA, SYCL, Vulkan, Metal, OpenCL, HIP, and WebGPU make “works on my backend” common.
- **Performance regressions after specific builds** — e.g. Vulkan RDNA3 prompt-processing drop after b10780 ([#28752](https://github.com/ggml-org/llama.cpp/issues/28752)) and quantized KV cache decoding slower than f16 on RDNA4 ([#27796](https://github.com/ggml-org/llama.cpp/issues/27796)).
- **Memory/graph allocation crashes** — `ggml_backend_sched_alloc_splits` graph reallocation crashes ([#28753](https://github.com/ggml-org/llama.cpp/issues/28753)) and CLIP warmup VRAM-pressure SIGSEGVs ([#23422](https://github.com/ggml-org/llama.cpp/issues/23422)).
- **Driver-specific instability** — Vulkan NV queuesubmit bugs, SYCL TDR resets on Arc Pro B70 ([#28778](https://github.com/ggml-org/llama.cpp/issues/28778)), and Metal OOM/init failures ([#27309](https://github.com/ggml-org/llama.cpp/issues/27309)).
- **Server readiness lies** — Server can report “model loaded” and bind the port after fatal init failures, then 500 every request.
- **Tool-calling deadlocks** — Stdio MCP servers deadlocking on tool calls above ~1–5 KB ([#28723](https://github.com/ggml-org/llama.cpp/issues/28723)).
- **Test coverage gaps** — WebGPU `HY_V4` failures and s390x non-VXE / ARM `nrc=2` paths needed explicit CI exclusions or additions.
- **Stale / bug-unconfirmed churn** — Many high-comment issues remain open or stale, slowing triage and making regressions harder to track.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*