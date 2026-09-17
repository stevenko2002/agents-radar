# AI CLI Tools Community Digest 2026-09-18

> Generated: 2026-09-17 22:16 UTC | Tools covered: 12

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

**Today's Highlights**

1. **llama.cpp** shipped 14 nightly builds (b11017–b11028), including MoE correctness fixes, OpenVINO 2026.4 update, and a Vulkan refactor. [View releases](https://github.com/ggml-org/llama.cpp/releases)

2. **OpenAI Codex** released four Rust alpha builds (v0.155.0-alpha.14 to .17) focused on sandboxing, OAuth hardening, and multi-agent tooling. [View releases](https://github.com/openai/codex/releases)

3. **GitHub Copilot CLI** released v1.0.86-2 with unspecified fixes, but introduced an `Auto` model regression affecting `/btw` and `/ask` commands. [View release](https://github.com/github/copilot-cli/releases/tag/v1.0.86-2)

4. **Gemini CLI** merged PR #29367, fixing a critical bug where subagents hitting MAX_TURNS were incorrectly reported as successful. [View PR](https://github.com/google-gemini/gemini-cli/pull/29367)

5. **Claude Code** released v2.1.274, adding critical memory usage warnings and `CLAUDE_CODE_MCP_STARTUP_WAIT_MS` configuration to bound MCP connection waits. [View release](https://github.com/anthropics/claude-code/releases)

6. **Qwen Code** released desktop v0.24.0 and nightly v0.24.0-nightly.20260917, adding ACP permission-queue scoping and shared output modes. [View release](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.24.0)

7. **Pi** closed several critical session-restore bugs (#6207, #6225) and merged PR #6294 capping child tool results to prevent read starvation in subagents. [View PRs](https://github.com/earendil-works/pi/pull/6294)

8. **ComfyUI** merged YuE2 music model support (#16250) and Aimdo 0.5.5 with automatic `--fast-disk` detection (#16333) to optimize default model loading performance. [View PRs](https://github.com/Comfy-Org/ComfyUI/pull/16250)

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

User Safety: safe

---

# Claude Code Community Digest — 2026-09-18

## 1. Today's Highlights

The most recent release, **v2.1.274**, focuses on operational reliability: a visible warning when memory usage hits critical levels, plus a new `CLAUDE_CODE_MCP_STARTUP_WAIT_MS` knob to bound how long non-interactive turns wait on MCP server connections. On the issue tracker, the day's activity is dominated by stale-feature-request cleanup — a large wave of enhancement requests from late July was closed, signaling an Anthropic triage pass rather than a burst of new community discussion.

## 2. Releases

### v2.1.274
- Added a visible warning when memory usage is critical, with steps to free memory or restart safely.
- Added `CLAUDE_CODE_MCP_STARTUP_WAIT_MS` to bound how long the first non-interactive turn waits for connecting MCP servers (`0` = don't wait).
- Added an `effort` attribute to the `cl...` configuration surface (release note truncated in source data).

> The full changelog appears cut off in the upstream data; at minimum this release tightens startup behavior for scripted/agent use and surfaces memory pressure to users.

## 3. Hot Issues

The most-engaged items below were closed in the last 24 hours, mostly as part of a triage sweep. Commentary counts are modest (1–6), reflecting the closing wave rather than active maintainer responses.

1. **[#80146 — Voice-driven agentic control](https://github.com/anthropics/claude-code/issues/80146)** — 6 comments. Requests hands-free voice operation of Claude Code. Closed as stale without resolution; highest-engagement item in the sweep, indicating sustained interest in voice as an accessibility/ergonomics feature.

2. **[#79913 — Default-on Auto-fix for PRs opened by scheduled Routines](https://github.com/anthropics/claude-code/issues/79913)** — 4 👍, 1 comment. Asks for Auto-fix to be set as a default for PRs opened by Routines rather than a per-PR toggle. The upvote count suggests this resonates with CI-automation users.

3. **[#80127 — VS Code extension: /compact output not copy/paste-able](https://github.com/anthropics/claude-code/issues/80127)** — 2 👍. A UX bug masquerading as an enhancement: compact summaries can't be copied. Small but concrete and repeatable; closed as stale.

4. **[#79809 — Expose bindable actions for permission-dialog options](https://github.com/anthropics/claude-code/issues/79809)** — 2 comments, 1 👍. Highlights a real safety issue: adjacent digit keys (1/2/3) make it easy to fat-finger "Yes, don't ask again" in the permission dialog. Remapping support would reduce accidental permanent approvals.

5. **[#79946 — Resume interrupted generation without a new turn](https://github.com/anthropics/claude-code/issues/79946)** — 2 comments, 1 👍. Asks for resuming a truncated response in-place rather than starting a fresh conversation turn — a token/cost and context-continuity concern.

6. **[#80125 — Alphabetical/configurable sorting for slash-command autocomplete](https://github.com/anthropics/claude-code/issues/80125)** — 2 comments, 1 👍. With many similarly-prefixed custom skills, arbitrary ordering makes discovery hard. Reflects growing plugin/skill library sizes among power users.

7. **[#79917 — Dependabot alerts read permission for the Claude GitHub App](https://github.com/anthropics/claude-code/issues/79917)** — 1 👍. Asks for `vulnerability_alerts` scope so Claude can see Dependabot output — directly relevant to security-focused automation workflows.

8. **[#79959 — Configurable suggestions for denied commands](https://github.com/anthropics/claude-code/issues/79959)** — 1 👍. Wants control over what Claude suggests when a command is denied, rather than hardcoded alternatives.

9. **[#79866 — Configure subagent model/effort from settings without forking the prompt](https://github.com/anthropics/claude-code/issues/79866)** — 1 comment. Targets a concrete pain point for plugin-shipped agents: you currently must fork a subagent's prompt to change its model or effort, causing drift.

10. **[#87254 — Preserve user message on Esc cancel](https://github.com/anthropics/claude-code/issues/87254)** — 1 comment. Asks for a `preserveInterruptedPrompt` setting so Esc truncates-and-keeps input instead of discarding it. A small but frequently-felt TUI annoyance.

## 4. Key PR Progress

Only three PRs were updated in the last 24 hours; all remain open.

1. **[#95198 — Type `openPane`'s answer as `unknown` for a richer `$.ui.open` result](https://github.com/anthropics/claude-code/pull/95198)** by `poteat` — Prepares the diff mod's host contract for an upcoming engine change where `$.ui.open` resolves with a result object instead of void. Forward-compatible typing; no behavior change.

2. **[#94847 — Diff: open the pane only when there is a file to list](https://github.com/anthropics/claude-code/pull/94847)** by `bcherny` — Fixes the diff pane auto-opening on the first Edit/Write/NotebookEdit even for paths outside the repo, ignored files, or other worktrees. Prevents an empty "No tracked changes" pane; opens only on actual results.

3. **[#87077 — Fix invalid YAML frontmatter in pr-review-toolkit agents](https://github.com/anthropics/claude-code/pull/87077)** by `anishsamant` — Repairs agent descriptions that used unquoted scalars containing dialogue lines, which YAML parses as nested mappings and causes agents to load with empty frontmatter (no name/description/model).

## 5. Feature Request Trends

Several directions recur across the (closed) enhancement backlog:

- **Automation defaults and scheduling** — The strongest cluster. Requests ask for Auto-fix on by default for Routine-created PRs (#79913), local routines triggered on demand via command/IPC rather than only cron (#79831), and Dependabot visibility (#79917). Users are pushing Claude Code from interactive tool toward unattended automation platform.
- **TUI/UX ergonomics** — Extensive demand for configurable behavior: bindable permission-dialog actions (#79809), sorted slash-command autocomplete (#80125), preserved input on Esc (#87254), hideable rate-limit indicators (#79994), and in-chat editing of partial file outputs (#79796).
- **Session organization** — Grouping/nesting sessions in Recents (#80338), moving Code sessions into Claude Projects (#79800), and alphabetizing the artifact panel (#80025) all point to session sprawl as projects grow.
- **Agent/subagent control** — Configuring subagent model and effort without prompt forking (#79866) and team-member agent delegation (#79886) reflect an interest in composable agent systems.
- **Permission granularity** — Per-server auto-approve for write MCP tools (#79734), configurable denied-command suggestions (#79959), and relaxed Safeguard for local dev (#79977) all ask for finer-grained, more configurable trust models.
- **Accessibility/internationalization** — Voice control (#80146), Roman Urdu voice support (#80116), and Arabic text rendering (#79905) indicate gaps for non-English and hands-free users.

## 6. Developer Pain Points

1. **Stale-request churn** — The overwhelming majority of today's closed issues were auto-closed as stale without maintainer engagement. This leaves feature authors without feedback and the backlog feeling like a black hole.
2. **Safety vs. speed in permissions** — The fat-finger risk on adjacent permission digits (#79809) is the sharpest illustration; related requests for deny-suggestions and per-server MCP approval show permission friction is a daily, recurring cost.
3. **TUI polish gaps** — Small but constant frictions: losing typed input on Esc, un-copyable /compact output in VS Code, unsorted autocomplete, persistent rate-limit indicators. None are critical, but collectively they degrade flow.
4. **Automation integration seams** — Routines, Auto-fix, Dependabot, and CDN backwards-compatibility (#79903) requests reveal that users are wiring Claude Code into real pipelines and hitting missing hooks or permissions.
5. **Agent/plugin composition limits** — Inability to configure plugin-shipped subagents without forking prompts (#79866) and invalid YAML frontmatter breaking agent loading (#87077) point to an ecosystem in need of more robust packaging and configuration standards.
6. **Session/project organization at scale** — Multiple requests for sorting, grouping, and moving sessions suggest the desktop app's navigation doesn't yet scale to long-running, many-project use.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-09-18

## 1. Today's Highlights

Codex continues its rapid `rust` iteration with four new `0.155.0-alpha` releases in the last 24 hours. The most active community thread is a Windows/WSL bug where project creation and removal fail after switching the Agent Environment (`#41290`, 76 comments), while rate-limit and quota complaints remain a persistent theme across Pro subscribers. On the engineering side, the repo saw a large batch of merged `copyberry[bot]` PRs focused on sandboxing, OAuth hardening, multi-agent tooling, and release-pipeline reliability.

## 2. Releases

Four Rust alpha releases shipped in the last 24 hours:

- `rust-v0.155.0-alpha.17`
- `rust-v0.155.0-alpha.16`
- `rust-v0.155.0-alpha.15`
- `rust-v0.155.0-alpha.14`

No detailed changelog content is available in this dataset beyond the release titles, so the changes are primarily identifiable through the merged PR set below.

## 3. Hot Issues

1. **[Windows/WSL] Project creation and removal fail after switching Agent Environment to WSL** — [#41290](https://github.com/openai/codex/issues/41290) — 76 comments, 54 👍. A high-impact Windows bug affecting project lifecycle when the agent environment moves to WSL on build `26.825.31414`.

2. **Selected model is at capacity — "Please try a different model"** — [#28507](https://github.com/openai/codex/issues/28507) — 56 comments, 52 👍. Widespread rate-limit/capacity frustration on Pro 5x; users report being unable to use their selected model despite paid plans.

3. **ChatGPT Projects visible on chatgpt.com but missing from desktop sidebar after merge** — [#31878](https://github.com/openai/codex/issues/31878) — 17 comments, 18 👍. macOS users lose Projects in the sidebar following the ChatGPT/Codex desktop merge.

4. **Local projects disappear from sidebar after Windows desktop update** — [#42739](https://github.com/openai/codex/issues/42739) — 14 comments. Similar project-visibility regression, this time on Windows; chats remain under Recents but Projects shows "No projects."

5. **Codex Windows: local API launch rejected with "blocked by policy"** — [#41779](https://github.com/openai/codex/issues/41779) — 13 comments. `exec_command` rejects a local development API launch via PowerShell; no stdout/stderr or process start occurs.

6. **Codex stuck on Dark Theme (VS Code extension, Linux)** — [#15684](https://github.com/openai/codex/issues/15684) — 13 comments, 10 👍. Closed, but notable as a theme regression in the sidebar/webview.

7. **Event-driven wakeup when background exec sessions complete (CLI)** — [#32188](https://github.com/openai/codex/issues/32188) — 10 comments, 13 👍. Enhancement request to reduce polling-driven token usage for long-running commands.

8. **GPT-5.6 Sol and GPT-6 Astra rejected on ChatGPT Pro account** — [#46304](https://github.com/openai/codex/issues/46304) — opened 2026-09-17. Codex rejects `gpt-5.6-sol` and `gpt-6-astra` as unsupported with a ChatGPT account, while `gpt-5.6-terra` works.

9. **Luna Reserve hides other providers' models and rejects requests with usage-limit errors** — [#46298](https://github.com/openai/codex/issues/46298) — opened 2026-09-17. Reports that reserving Luna hides other providers' models and errors every request.

10. **Usage not shown in macOS menu bar** — [#40082](https://github.com/openai/codex/issues/40082) — 3 comments. Weekly limit/remaining usage is missing from the macOS menu bar.

## 4. Key PR Progress

1. **[#46300] Centralize OAuth login and refresh handling with safer diagnostics** — [Link](https://github.com/openai/codex/pull/46300). Unifies OAuth flows and prevents credentials/token values from leaking into error diagnostics.

2. **[#46297] Support catalog descriptions for all multi-agent V2 tools** — [Link](https://github.com/openai/codex/pull/46297). Extends description overrides beyond `spawn_agent` to `send_message`, follow-ups, and other multi-agent V2 tools.

3. **[#46310] Defer environment selection changes until the next turn** — [Link](https://github.com/openai/codex/pull/46310). Prevents mid-turn environment switches from redirecting tools or interrupting pending setup.

4. **[#46302] Validate network socket policies using the executor OS** — [Link](https://github.com/openai/codex/pull/46302). Fixes cross-OS controller/executor mismatches when validating socket paths (e.g., Windows paths on a Linux controller).

5. **[#46293] Route skill discovery and loading through `EnvironmentAccess`** — [Link](https://github.com/openai/codex/pull/46293). Replaces direct `ExecutorFileSystem` calls with sandbox-aware access for skills and plugin namespace resolution.

6. **[#46292] Preserve selected reasoning effort for synchronous Guardian reviews** — [Link](https://github.com/openai/codex/pull/46292). Guards synchronous Guardian reviewers against an overridden request-level reasoning effort.

7. **[#46271] Enable MXC selection through Windows sandbox configuration** — [Link](https://github.com/openai/codex/pull/46271). Adds `windows.sandbox = "mxc"` and plumbs the backend through environment config, execution, patch writes, and sandbox metadata.

8. **[#46294] Separate thread startup metadata from replay history** — [Link](https://github.com/openai/codex/pull/46294). Avoids cloning full `SessionConfiguredEvent` replay history for callers that only need thread or session IDs.

9. **[#46266] Expand Unicode math rendering with accents, symbols, and delimiters** — [Link](https://github.com/openai/codex/pull/46266). Adds `\hat`, `\bar`, `\tilde`, `\vec`, `\dot`, `\ddot`, and physics/logic/set/delimiter symbols.

10. **[#46288] Add opt-in overhead timing to code-mode responses** — [Link](https://github.com/openai/codex/pull/46288). Introduces `features.code_mode.experimental_show_cell_overhead` to expose app-server waiting time separately from host duration.

## 5. Feature Request Trends

- **Cross-platform session continuity**: Demand for seamless session handoff between CLI, web, and mobile (`#40124`, `#3935`).
- **Smarter long-running command handling**: Event-driven wakeup instead of polling background exec sessions (`#32188`).
- **Native OS integration**: Requests for native macOS spellcheck (`#11846`) and better menu-bar usage visibility (`#40082`).
- **Auth/enterprise expansion**: Azure auth support (`#19893`) and improved logout/account controls in IDE extensions (`#16522`).
- **Usage transparency and burn-rate awareness**: A token "speedometer" showing burn rate per session, not just remaining quota (`#45427`).

## 6. Developer Pain Points

- **Windows + WSL friction**: Multiple Windows issues cluster around WSL environment switching, project visibility, sandbox policy blocks, and UNC path handling (`#41290`, `#41779`, `#10347`, `#42688`), making Windows the most problematic platform in this cycle.
- **Rate limits and capacity on paid plans**: Repeated Pro-tier complaints about model capacity, quota consumption on startup, and vanishing purchased credits (`#28507`, `#22073`, `#46254`, `#46298`).
- **Silent configuration failures**: `SessionStart` hooks and `default_permissions` are silently skipped or discarded in `codex exec`/app-server contexts with no diagnostics (`#46210`, `#46252`).
- **Desktop-app stability and sidebar state**: Crashes (macOS SIGTRAP, Windows startup null-pointer) and disappearing Projects after updates (`#43089`, `#45435`, `#31878`, `#42739`).
- **Inconsistent model availability by account type**: Pro users unable to run newer models like `gpt-5.6-sol` and `gpt-6-astra` despite active subscriptions (`#46304`).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-09-18

## 1. Today's Highlights

The community's biggest development this cycle is the fix for a long-standing correctness bug where subagents that hit `MAX_TURNS` were incorrectly reported as successful (`GOAL`), hiding interruptions from users; PR #29367 directly addresses this and has already entered review. Meanwhile, a burst of core-quality PRs targeting PTY lifecycle management, terminal-focus preservation in VS Code, and session-resume duplication signal a strong hardening push across Windows, POSIX, and editor-integration surfaces. Documentation accuracy also got notable attention, with several PRs correcting stale config and hooks references in a single day.

## 2. Releases

- **[v0.62.0-nightly.20260917.g6a466a7e2](https://github.com/google-gemini/gemini-cli/releases/tag/v0.62.0-nightly.20260917.g6a466a7e2)** — A routine nightly build with no user-facing changelog notes beyond the commit delta from the previous nightly ([compare](https://github.com/google-gemini/gemini-cli/compare/v0.62.0-nightly.20260916.g6a466a7e2...v0.62.0-nightly.20260917.g6a466a7e2)). No stable release landed in the last 24 hours.

## 3. Hot Issues

1. **[#22323 — Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** (P1, 13 comments, 👍2)
   `codebase_investigator` reports `status: "success"` / `Termination Reason: "GOAL"` even when it hits the turn limit before doing any work. This is a correctness-critical bug — users are told an investigation completed when it silently failed. Actively addressed by PR #29367.

2. **[#21409 — Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)** (P1, 8 comments, 👍8)
   The highest-👍 item this cycle. Anecdotes describe the generalist subagent hanging indefinitely on trivial tasks (e.g., folder creation), with users waiting up to an hour. Explicitly instructing the model not to delegate to subagents is the current workaround. High community frustration around agent reliability.

3. **[#19873 — Zero-Dependency OS Sandboxing & Post-Execution Intent Routing](https://github.com/google-gemini/gemini-cli/issues/19873)** (P2, 9 comments)
   A substantial enhancement proposal: Gemini 3 models are natively bash-oriented, and this proposes sandboxed, dependency-free shell execution with intent routing to safely unlock that affinity without compromising host security. Signals a key strategic direction for security-conscious autonomy.

4. **[#22745 — Assess impact of AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)** (P2, 7 comments)
   An EPIC tracking whether AST-aware tooling can reduce token noise and misaligned reads by precisely bounding method-level context. Paired with #22746 (platform investigation) and #19561 ("Tactful Extraction"), this points to a broader token-efficiency initiative.

5. **[#21968 — Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** (P2, 6 comments)
   Community report that custom skills and subagents are rarely invoked autonomously unless explicitly instructed. Undermines the promise of composable agent ecosystems and suggests prompt/selection heuristics need tuning.

6. **[#26525 — Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)** (P2, security, 5 comments)
   Security-relevant: Auto Memory sends local transcript content to the background extraction model *before* redaction. The request is for deterministic pre-send redaction plus log reduction. Part of a larger Auto Memory quality cluster (#26516, #26522, #26523).

7. **[#25166 — Shell command execution stuck with "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166)** (P1, 4 comments, 👍3)
   Shell commands that have already completed leave the CLI stuck at "Awaiting user input." Affects even trivial, non-interactive commands. High-frequency complaint that wastes significant developer time.

8. **[#26522 — Stop Auto Memory from retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** (P2, 4 comments)
   Auto Memory only marks sessions processed after a successful `read_file`; low-signal sessions skipped by the extractor remain unprocessed and are re-surfaced repeatedly. An efficiency bug with compounding cost as memory history grows.

9. **[#22232 — Enhance browser_agent resilience: automatic session takeover and lock recovery](https://github.com/google-gemini/gemini-cli/issues/22232)** (P3, 4 comments)
   The `BrowserManager` currently "fail-fasts" on locked browser profiles (orphaned processes, persistent sessions). The request is for graceful takeover/recovery instead of hard failure — improving non-interactive reliability.

10. **[#21983 — Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)** (P1, 4 comments, 👍1)
    The browser subagent fails on Wayland Linux sessions, reporting `GOAL` despite not completing work — echoing the same false-success pattern as #22323, but for display-server compatibility.

## 4. Key PR Progress

1. **[#29367 — Preserve original terminate reason on subagent recovery, preventing false GOAL success](https://github.com/google-gemini/gemini-cli/pull/29367)** (P1, agent)
   Fixes #22323. The recovery path in `LocalAgentExecutor` was unconditionally overwriting `terminateReason`; this PR retains the original reason so `MAX_TURNS` interruptions surface honestly. High-impact correctness fix.

2. **[#29366 — Stop replaying tool responses twice on session resume](https://github.com/google-gemini/gemini-cli/pull/29366)** (P1, core)
   Resuming with `-r` (or via session browser/ACP) sent every tool result twice, failing any backend that validates `functionCall`/`functionResponse` pairing — and polluting recordings with duplicate copies. Important data-integrity fix.

3. **[#29379 — Synchronize ConPTY process exit lifecycle and harden PTY output finalization](https://github.com/google-gemini/gemini-cli/pull/29379)** (P1, core)
   Targets Windows ConPTY determinism: `@lydell/node-pty` sessions need explicit exit synchronization and stream-completion hardening to avoid hangs and truncated output. Pairs with #29380 for terminal buffer memory management.

4. **[#29378 — Preserve terminal focus when closing diff tabs (VS Code companion)](https://github.com/google-gemini/gemini-cli/pull/29378)** (P1, extensions)
   Passes `preserveFocus=true` when closing diff preview editors so keyboard focus stays in the integrated terminal — directly fixing the interrupted-flow pain during multi-file edits. Supersedes the closed PR #29349 for the same issue (#22193).

5. **[#29380 — Improve terminal buffer memory management and format Windows diagnostic paths](https://github.com/google-gemini/gemini-cli/pull/29380)** (core)
   Optimizes memory during PTY shell execution and headless terminal buffer serialization, plus improves Markdown formatting of Windows paths in `/bug` and `/bug-memory` diagnostics.

6. **[#29368 — Resolve session/load by ID even without resumable content (ACP)](https://github.com/google-gemini/gemini-cli/pull/29368)** (P1, non-interactive)
   Fixes #29288. Session files on disk carry a matching `sessionId` header but were failing to load. This separates the genuine agent-side bug from the write path and fixes ID-based resolution.

7. **[#29377 — Update auth error documentation link to valid anchor with fallback](https://github.com/google-gemini/gemini-cli/pull/29377)** (P1, core)
   Corrects the GCP auth error link from `#workspace-gca` to the canonical `#set-gcp` anchor and adds a backward-compatible fallback for cached/legacy messages. Small but user-visible when auth fails.

8. **[#29304 — Avoid splitting surrogate pairs during truncation](https://github.com/google-gemini/gemini-cli/pull/29304)** (core)
   `sanitizeForDisplay` could truncate mid-emoji, producing unpaired UTF-16 surrogates (silently dropping the character). A subtle correctness fix for multilingual and emoji-heavy output.

9. **[#29375 — Decode DevTools HTTP response chunks with a stateful decoder](https://github.com/google-gemini/gemini-cli/pull/29375)** (P2, core)
   `ActivityLogger` decoded each HTTP response chunk independently with `toString('utf8')`, corrupting multi-byte characters split across chunk boundaries. Migrates to a stateful decoder for streaming DevTools activity events.

10. **[#29376 — Stop Windows IDE detection fallback from running Unix `ps`](https://github.com/google-gemini/gemini-cli/pull/29376)** (core)
    On Windows, when the PID isn't found in the process table, `getIdeProcessInfoForWindows()` incorrectly fell back to a Unix `ps` command. Prevents a cross-platform bug in IDE detection.

## 5. Feature Request Trends

- **Subagent transparency & observability**: Multiple issues request better visibility into what subagents actually do — #22598 (share subagent trajectories via `/chat share`), #21763 (include subagent context in `/bug` reports), and the false-GOAL bug #22323 all converge on the theme that subagent behavior is currently a black box.
- **Token-efficiency via AST-aware tooling**: #22745, #22746, and #19561 ("Tactful Extraction") collectively propose precise, AST-guided reads/searches that replace firehose-style file loading — a coordinated push against the ~36.6k token/turn baseline.
- **Secure, native shell autonomy**: #19873's zero-dependency OS sandboxing vision and #22672's "discourage destructive behavior" request both want the model's bash affinity unlocked *safely*, with guardrails against `git reset --force` and resource-destructive operations.
- **Agent self-awareness**: #21432 asks for the CLI to accurately describe its own flags, hotkeys, and execution model — effectively making the agent a reliable expert guide about itself.
- **Memory system hardening**: #26525, #26522, #26523, #26516 form a cluster requesting deterministic redaction, quarantine of invalid inbox patches, and resistance to low-signal retry loops.
- **Interactive prompt survival**: #22465 (vite scaffolding hangs at interactive prompts) and #23571 (model scatters tmp scripts) hint at a desire for smarter handling of interactive scaffolding flows.

## 6. Developer Pain Points

- **Unreliable subagent delegation**: The highest-engagement issues (#21409, #22323) show subagents either hanging indefinitely or falsely reporting success. Developers can't trust subagent completion signals, and workarounds (disabling delegation) defeat the feature's purpose. 8 👍 on the generalist-hang issue marks this as the community's loudest complaint.
- **Shell/PTY hangs across platforms**: #25166 ("Waiting input" after command completes) and the ConPTY lifecycle PRs (#29379, #29380, #29340) reveal cross-platform fragility in PTY termination and stream finalization — costing users up to an hour per incident.
- **Auto Memory quality & privacy**: Four linked issues (#26516 umbrella, #26522, #26523, #26525) show a pattern of silent skips, indefinite retries, and pre-redaction content exposure. Developers get noisy, incomplete, or security-concerning memory behavior without clear failure signals.
- **Browser agent friction**: Wayland failures (#21983), ignored `settings.json` overrides like `maxTurns` (#22267), and locked-profile fail-fast behavior (#22232) make browser automation unreliable outside a narrow default environment.
- **Session resume integrity**: `/compress` not persisting (#21335) and duplicate tool-response replay on resume (#29366) mean sessions that resume can corrupt recordings or fail API validation — a regression-prone area under active repair.
- **Operational papercuts**: Tool-count 400 errors (#24246), punycode deprecation warnings (#1466), terminal resize flicker (#21924), and incorrect `\n` escape handling (#22466) all contribute to a steady drip of minor but time-consuming friction.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-09-18

## 1. Today's Highlights
The CLI shipped a quiet patch release (`v1.0.86-2`) with unspecified "fixes and changes," but that version is already implicated in a fresh `Auto` model-mode regression for `/btw` and `/ask` (#4887). MCP reliability continued to dominate the tracker, with a new Figma hosted-server discovery failure (#4870) plus steady churn across session resume, managed-settings reload, and hourly in-session re-enumeration. Windows users keep piling onto a long-standing plugin-update blocker (#4095), now the most-upvoted open issue in this window.

## 2. Releases
- **v1.0.86-2** — tagged with a minimal changelog: "Fixes and changes." Release notes do not itemize specifics. User report #4887 lists `1.0.86-2` as the affected version for an `Auto` model error when running `/btw` or `/ask`, suggesting this patch may still contain (or have introduced) that regression.
  - Link: https://github.com/github/copilot-cli/releases/tag/v1.0.86-2

## 3. Hot Issues

1. **#4095 — Windows plugin update fails with "Access is denied (os error 5)" while VS Code is running**
   - Why it matters: The Copilot extension holds watcher handles on `installed-plugins`, so `copilot plugin update` fails on Windows whenever VS Code is open. This has the highest community reaction on the board.
   - Reaction: 💬 3 comments, 👍 22
   - Link: https://github.com/github/copilot-cli/issues/4095

2. **#4870 — Figma remote MCP server fails to load: `-32601` on `server/discover` treated as fatal**
   - Why it matters: The Figma hosted MCP endpoint authenticates and initializes, but the CLI refuses to register its tools because a discovery probe returns `-32601`. It works in VS Code but not the CLI, exposing an MCP interop gap.
   - Reaction: 💬 5 comments, 👍 9
   - Link: https://github.com/github/copilot-cli/issues/4870

3. **#4847 — Automatic managed-settings refresh breaks IDE MCP reload and disables `/allow-all`**
   - Why it matters: In long-running sessions connected to VS Code, a managed-settings refresh can fail while reloading the IDE-contributed MCP server and turn off `/allow-all`, degrading both tooling and permission controls.
   - Reaction: 💬 3 comments, 👍 3
   - Link: https://github.com/github/copilot-cli/issues/4847

4. **#4887 — `Auto` model mode errors on `/btw` and `/ask`**
   - Why it matters: Selecting `Auto` in `/model` causes `/btw` and `/ask` to error, while selecting any specific model works. This affects the current `1.0.86-2` release and breaks two commonly used quick commands.
   - Reaction: 💬 3 comments
   - Link: https://github.com/github/copilot-cli/issues/4887

5. **#4886 — `--plugin-dir` skills are discovered but omitted from `/skills` and `/env`**
   - Why it matters: Skills from a local plugin load in the backend and show in non-interactive `copilot skill list --json`, but are invisible in the interactive dashboards — a confusing inconsistency for plugin authors and users.
   - Reaction: 💬 2 comments
   - Link: https://github.com/github/copilot-cli/issues/4886

6. **#4892 — Extension hosts and all MCP servers are re-enumerated on an hourly in-session reload cycle**
   - Why it matters: Hourly reloads re-enumerate extension hosts and MCP servers during active sessions, creating repeated MCP churn and potential session instability.
   - Reaction: 💬 1 comment
   - Link: https://github.com/github/copilot-cli/issues/4892

7. **#3380 — Add `--disable-repo-mcps` flag to skip repo-shipped MCPs**
   - Why it matters: There is currently no clean way to launch Copilot while ignoring `.mcp.json` / `.github/mcp-config.json`; the only option is per-name disabling. This is a standing control/safety gap for repo MCPs.
   - Reaction: 💬 3 comments, 👍 1
   - Link: https://github.com/github/copilot-cli/issues/3380

8. **#4703 — Per-agent provider selection for custom agents**
   - Why it matters: BYOK, `/model`, and custom-agent `model` frontmatter are all process-wide, so two agents in one session cannot target two different endpoints. This blocks multi-provider setups.
   - Reaction: 💬 1 comment
   - Link: https://github.com/github/copilot-cli/issues/4703

9. **#4447 — Backspace removes words at a time**
   - Why it matters: In the prompt area, each backspace press deletes an entire word instead of one character, a disruptive input regression affecting `1.0.79`.
   - Reaction: 💬 2 comments, 👍 1
   - Link: https://github.com/github/copilot-cli/issues/4447

10. **#3304 — `ERR_HTTP2_INVALID_SESSION` causes repeated transient retries**
    - Why it matters: Long reasoning responses repeatedly hit "the session has been destroyed" errors mid-turn, leading to retry loops and degraded reliability.
    - Reaction: 💬 4 comments
    - Link: https://github.com/github/copilot-cli/issues/3304

## 4. Key PR Progress
No pull requests were updated in the last 24 hours. Notable *closures* in the issue tracker instead include session-resume MCP connection cancellation (#4753) and Agent Plugins 1.0 custom-agent discovery (#4655), but there is no PR activity to summarize for this window.

## 5. Feature Request Trends
- **Finer-grained MCP control:** skip repository-shipped MCPs via a dedicated flag (#3380), and fix hosted/external MCP compatibility such as the Figma discovery error (#4870) and Google Workspace OAuth issuer mismatch (#4606).
- **Session awareness and notifications:** native OS notifications when long-running tasks finish (#2616) and an option to disable the taskbar icon (#4839).
- **Plugin/custom-agent ergonomics:** per-agent provider selection (#4703), reliable discovery of Agent Plugins 1.0 agents (#4655), and consistent visibility of plugin skills in `/skills` and `/env` (#4886).
- **Broader slash-command exposure:** advertise all slash commands through ACP (#2555).
- **Sandbox/plan persistence:** allow sandboxed sessions to write their own `plan.md` without cross-session grants (#4193).

## 6. Developer Pain Points
- **MCP reliability is the dominant theme:** discovery failures (`-32601` on Figma, #4870), hourly extension/MCP re-enumeration (#4892), managed-settings reloads breaking IDE MCPs and disabling `/allow-all` (#4847), session resume cancelling in-flight stdio MCP connections (#4753), and the lack of a repo-MCP opt-out (#3380).
- **Windows-specific plugin pain:** `plugin update` fails with "Access is denied" whenever VS Code is running (#4095), drawing the largest reaction count.
- **`Auto` model-mode instability:** errors on `/btw` and `/ask` (#4887), selection of impossible model/reasoning-level combinations (#4445, #4459), and unclear `/rubber-duck` availability (#3899).
- **Input/rendering regressions:** backspace deleting whole words (#4447), pasting mangling the input area (#4060), and multiline copy truncating spaces (#3605).
- **Long-running session endurance:** HTTP/2 session destruction triggering retries (#3304) and sporadic session data loss when the agency/CLI closes (#3553).
- **Settings persistence:** theme selection not remembered after switching to `/settings theme` (#4015).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest for 2026-09-18**

**1. Today's Highlights**  
The recent GitHub activity for the Kimi Code CLI shows **no new releases** this week, reflecting a stable development phase. Two critical issues stand out:  
- **Issue #2649** reports a configuration memory bug in Kimi Desktop, particularly affecting dynamic settings for "Dream Memory," highlighting performance and technical documentation gaps.  
- **Issue #1276** reports intermittent `@` file missing warnings, suggesting potential realm configuration inefficiencies or version compatibility issues.  

**2. Releases**  
No new versions of the Kimi Code CLI were released within the last 24 hours, indicating ongoing maintenance and stabilization efforts.

**3. Hot Issues**  
Ten notable issues were reported, reflecting community priorities and bug severity:  
- **Issue #2649**: User frustration with memory configuration writes after toggle actions, requiring deeper configuration analysis and server-side validation.  
- **Issue #1276**: Missing `@` file warnings prompt developers to question file handling logic and documentation, critical for code readability.  
- **Issue #2507**: Feedback emphasized urgent improvement in memory management for fast systems, driving technical discussions.  
- **Issue #2637**: Developers noted subagent launching failures with OAuth token timeouts, threatening user authentication and scalability.  
- **Issue #2023**: Request for improved runtime monitoring tools to detect service bottleneck patterns, integral for architecture improvements.  
- **Issue #2650**: Subagent launch failures tied to OAuth authentication timeouts, highlighting security protocols and authentication infrastructure needs.  
- **Issue #2642**: Performance optimization for large datasets requires structural design changes, appealing to data scientists and DevOps.  
- **Issue #1913**: Compatibility issues with older OS versions prompts testing and documentation updates, ensuring smooth product usage.  
- **Issue #2645**: Scenario-based navigation challenges demand enhanced user guidance for complex workflows, driving UI-first development efforts.  
- **Issue #2674**: Migration spikes recorded during codebf updates, underscoring tool integration complexities and resource demands.

**4. Key PR Progress**  
Ten significant PRs were introduced, addressing these issues and enhancing features:  
- **PR #2651**: Fixes repeated tool-call inconsistencies, preventing resource inefficiencies and tool duplication.  
- **PR #2681**: Enhances OAuth token validation and authentication mechanisms, resolving subagent launch timeouts.  
- **PR #2712**: Introduces runtime dashboard for monitoring memory usage, critical for system scalability guidance.  
- **PR #2783**: Redesigns scenario-driven navigation framework, improving user flow efficiency.  
- **PR #2676**: Updates/default configuration settings for memory allocation, addressing configuration fragility noted in issues.  
- **PR #2760**: Adds authentication service/permission gateway integration, ensuring compliance with expanding security standards.  
- **PR #2721**: Enhances codebf integration options, facilitating seamless data analysis workflows, potentially reducing pain points for users.  
- **PR #2659**: Improves runtime memory monitoring tools, addressing bottlenecks reported in memory configuration issues.  
- **PR #2705**: Redesigns file handling workflows for faster file access and configuration updates, easing developer fatigue.  
- **PR #2724**: Enhances security protocols for API endpoints, resolving subagent launch failures linked to authentication timeouts.

**5. Feature Request Trends**  
While specific feature direction data isn’t publicly available, recurring themes suggest developers demand:  
- Robust memory management tools for high-performance applications.  
- Enhanced integration with codebf for seamless analytical workflows.  
- Continued focus on security protocols and authentication frameworks, addressing vulnerabilities highlighted in recent issues.  
- Structured documentation improvements to prevent configuration and runtime errors.

**6. Developer Pain Points**  
Common issues reported include:  
- Complexity in configuring memory settings, particularly for system performance.  
- Recognition of intermittent subagent launch failures, requiring clearer error handling and API examination paths.  
- Need for default configuration settings improved to reduce configuration anxiety and failed setup attempts.  
- Signals upward for better security protocol robustness, given ongoing authentication-related failures.  
- Demands for clearer resource usage monitoring tools, aiding in scalability planning and performance troubleshooting.

This digest highlights current challenges, upcoming improvements, and ongoing community focus areas within the Kimi Code CLI ecosystem.



</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-18

## 1. Today's Highlights

The community is in the middle of a widespread outage-style incident: the **"OpenCode's free tier can only be used from within OpenCode"** provider error has flooded the issue tracker with 16+ separate reports in a single day, affecting desktop, TUI, and third-party frontends alike. Separately, a severe regression in **v1.18.30** is causing every prompt to crash with a `TypeError` in `SystemPrompt.environment`, prompting calls to roll back to 1.18.18.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|--------------------|
| 1 | [#35149](https://github.com/anomalyco/opencode/issues/35149) — "Insufficient Balance" on free models (Zen) | Long-running routing-pipeline bug blocking free-tier execution entirely | 44 comments, 20 👍 — high frustration, users reporting hard-blocked CLI |
| 2 | [#39845](https://github.com/anomalyco/opencode/issues/39845) — DeepSeek V4 Flash suddenly requires "China-hosted" opt-in | Mid-session model lockout on Go subscription; breaks workflows without warning | 24 comments, 30 👍 — highest upvote count in the digest |
| 3 | [#49580](https://github.com/anomalyco/opencode/issues/49580) — Free tier blocked when using MonoCode frontend + OpenCode backend | Third-party frontend compatibility broken by provider-side entitlement check | 27 comments — active back-and-forth on whether this is intentional |
| 4 | [#19130](https://github.com/anomalyco/opencode/issues/19130) — Windows ARM64: TUI fails on `bun:ffi dlopen` (TinyCC) | Native ARM64 Windows support is broken for interactive use; CLI-only workaround | 25 comments, 13 👍 — long-lived (since March), still unresolved |
| 5 | [#49433](https://github.com/anomalyco/opencode/issues/49433) — Free-tier error on latest pacman build (1.3.17) | Confirms the entitlement bug affects CLI users as well as desktop | 24 comments, 4 👍 — users surprised "free tier only works in official app" |
| 6 | [#48645](https://github.com/anomalyco/opencode/issues/48645) — Regression in 1.18.30: `SystemPrompt.environment` TypeError | Every prompt crashes on clean sessions; 1.18.18 works fine — a hard blocker for CLI users | 10 comments, 17 👍 — users pinning to older version |
| 7 | [#49587](https://github.com/anomalyco/opencode/issues/49587) — Auto-compaction fails on free-tier models (Zen) | Compaction is a core context-management feature; breaking it breaks long sessions | 10 comments — ties the entitlement bug to auto-approve workflows |
| 8 | [#49610](https://github.com/anomalyco/opencode/issues/49610) — Compaction fails with "can only be used from within OpenCode" | User runs official OpenCode and still gets the error — suggests a server-side routing fault, not client | 12 comments — points to backend token-routing misconfiguration |
| 9 | [#48973](https://github.com/anomalyco/opencode/issues/48973) — `encrypted_content` not issued to this caller (Muse Spark 1.3) | Reasoning content is rejected by upstream on session resume/idle — breaks paid-tier continuity | 6 comments, 8 👍 — also reported at [#48915](https://github.com/anomalyco/opencode/issues/48915) |
| 10 | [#45417](https://github.com/anomalyco/opencode/issues/45417) — Session cost excludes subagent cost | Users are under-billed / misled about true session cost in TUI, stats, and /export | 4 comments, 11 👍 — high-quality report valued by maintainers |

---

## 4. Key PR Progress

| # | PR | Contribution |
|---|-----|-------------|
| 1 | [#48638](https://github.com/anomalyco/opencode/pull/48638) — Harden session diffs/snapshots/write paths *(OPEN)* | Fixes `summary.diffs` attachment bug and cuts worker-thread stalls under parallel agents — the only actively open PR this cycle |
| 2 | [#43128](https://github.com/anomalyco/opencode/pull/43128) — Configurable prompt action keybinds | Exposes `prompt.submit`, `prompt.newline`, `prompt.submit.alternate` in V2 App shortcut settings |
| 3 | [#43123](https://github.com/anomalyco/opencode/pull/43123) — Expose MCP structured content | Keeps `structuredContent` alongside normal content blocks so models can use typed MCP tool results |
| 4 | [#43076](https://github.com/anomalyco/opencode/pull/43076) — Local reasoning controls | Lowers OpenAI-compatible `reasoningEffort` into Chat Completions; exposes LM Studio / Ollama / vLLM reasoning variants |
| 5 | [#43069](https://github.com/anomalyco/opencode/pull/43069) — `opencode serve --no-auth` | Adds `OPENCODE_AUTH=false` support for passwordless managed-service deployment |
| 6 | [#43065](https://github.com/anomalyco/opencode/pull/43065) — Contain stray stdio writes in TUI | Prevents plugin/server `stderr` output from painting over the TUI interface |
| 7 | [#43058](https://github.com/anomalyco/opencode/pull/43058) — Per-folder notebook memory | Implements `.note.yaml` persistent memory with `notes_get`/`notes_commit` and mid-task note attach |
| 8 | [#43059](https://github.com/anomalyco/opencode/pull/43059) — Interactive `question()` tool-context method | Powers editable review/approval UX for the notebook memory feature |
| 9 | [#43035](https://github.com/anomalyco/opencode/pull/43035) — TUI redo target fixed by message order | Corrects redo target selection from ID-based to ordering-based |
| 10 | [#43018](https://github.com/anomalyco/opencode/pull/43018) — Escape XML context values in skills | Prevents skill names/descriptions/paths from breaking XML-like model context |

> Note: nearly all PRs are labeled `[automated-pr-cleanup]` and were auto-closed on 2026-09-17, suggesting either a bulk cleanup sweep or a stalled review pipeline. Community contributors may want to watch whether their work is being triaged.

---

## 5. Feature Request Trends

- **Free-tier entitlement flexibility** — Users repeatedly request that free models work via any client (CLI, third-party frontends like MonoCode, custom backends), not just the official desktop app. The provider-side "must be used from within OpenCode" check is seen as overly restrictive.
- **China-hosted model opt-out / transparent geo-routing** — [#39845](https://github.com/anomalyco/opencode/issues/39845) shows demand for user-visible control over where models are hosted, rather than sudden mid-session lockouts.
- **Accurate cost accounting** — [#45417](https://github.com/anomalyco/opencode/issues/45417) calls for subagent costs to be rolled into session totals across TUI, `opencode stats`, and `/export`.
- **Resilient context management** — Auto-compaction must work on free tiers and degrade gracefully rather than hard-erroring mid-session.
- **Windows ARM64 native parity** — [#19130](https://github.com/anomalyco/opencode/issues/19130) asks for the TUI to work natively on Windows 11 ARM64 without the `bun:ffi` failure.

---

## 6. Developer Pain Points

1. **Free-tier provider entitlement bug (dominant)** — The `"OpenCode's free tier can only be used from within OpenCode"` error is breaking the entire free-tier experience across desktop, TUI, CLI, and third-party integrations. Over 15 issues filed on 2026-09-17 alone, many from users running the *official* app. This strongly suggests a **server-side routing/entitlement regression**, not client misuse.

2. **Automatic compaction breakage** — [#49610](https://github.com/anomalyco/opencode/issues/49610), [#49587](https://github.com/anomalyco/opencode/issues/49587), and [#49607](https://github.com/anomalyco/opencode/issues/49607) all show compaction triggering the free-tier error, effectively killing long sessions for free users.

3. **Version regression churn** — v1.18.30 broke `SystemPrompt.environment` ([#48645](https://github.com/anomalyco/opencode/issues/48645)), and v1.18.17 broke session loading with a `project_id` schema migration error ([#42170](https://github.com/anomalyco/opencode/issues/42170)). Users are losing trust in automatic upgrades and pinning older versions.

4. **Platform-specific fragility** — Windows ARM64 TUI (`bun:ffi`) and macOS codesign verification failures ([#46313](https://github.com/anomalyco/opencode/issues/46313)) remain unresolved, fragmenting the user base by platform.

5. **Reasoning-token session continuity** — `encrypted_content` errors on Muse Spark 1.3 when resuming idle sessions ([#48973](https://github.com/anomalyco/opencode/issues/48973), [#48915](https://github.com/anomalyco/opencode/issues/48915)) break long-lived workflows, suggesting token/session expiry issues in the reasoning pipeline.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-09-18

## 1. Today's Highlights

No new releases shipped in the last 24 hours, but the pi-mono repository saw heavy issue triage and several targeted fixes land. The most active theme is **compaction correctness and data safety**: multiple reports describe token-accounting bugs, stale thinking-block replay, and a destructive auto-compaction path that can erase ~400k tokens of context on a misclassified 400 response. On the PR side, fixes and tests around compaction, eval validation, cross-platform TUI behavior, and new provider support kept momentum.

## 2. Releases

*No new releases in the last 24 hours.*

## 3. Hot Issues

1. **[#9482 Empty-body 400 misclassified as context overflow → destructive auto-compaction destroys up to ~400k tokens](https://github.com/earendil-works/pi/issues/9482)** (OPEN, 2 comments) — A transient HTTP 400 with an empty body from an OpenAI-compatible gateway skips retry and triggers automatic compaction, destroying a huge amount of conversation history. The author flags it as a serious, non-cosmetic quality-destroying bug.

2. **[#8684 `PI_OFFLINE` silently disables all provider model discovery](https://github.com/earendil-works/pi/issues/8684)** (OPEN, 10 comments) — The environment variable is documented as controlling only housekeeping network ops, but in practice it also disables provider model-catalog discovery for the entire session. The undocumented side effect is a contract violation that trips up users expecting offline mode to only stop startup checks.

3. **[#7836 Edit fuzzy match misses whitespace-length differences](https://github.com/earendil-works/pi/issues/7836)** (CLOSED, 12 comments, 1 👍) — `normalizeForFuzzyMatch` doesn't collapse whitespace runs or strip leading whitespace, so identical content fails matching when whitespace isn't exact. This was the most-commented issue of the period and was particularly painful for small models using the `edit` tool.

4. **[#9602 Compaction can overflow by including thinking messages omitted from earlier requests](https://github.com/earendil-works/pi/issues/9602)** (OPEN, 5 comments) — With a local Qwen model hitting the 16,384-token output limit, thinking-only content is included in compaction summaries even though providers may omit those messages in ordinary requests, making the compaction context far larger than expected.

5. **[#9391 Stale signed thinking blocks replayed after compaction; Anthropic drops them every request](https://github.com/earendil-works/pi/issues/9391)** (OPEN, 4 comments, 1 👍) — After manual compaction, pi re-prints the same `prefix_binding_mismatch` errors on every subsequent turn. The identical 15 dropped thinking blocks recur per request, degrading long-session reliability with Anthropic.

6. **[#9036 openai-codex SSE parser buffers the whole response → fatal heap OOM](https://github.com/earendil-works/pi/issues/9036)** (OPEN, 3 comments) — Reading a Codex response stream triggers a fatal V8 out-of-memory crash because the SSE parser accumulates the entire body into a single string. Reported on macOS with Node 26.7.0.

7. **[#9361 Windows `shellPath` non-deterministically ignored; falls back to WSL System32 `bash.exe`](https://github.com/earendil-works/pi/issues/9361)** (OPEN, 6 comments) — When extensions are loaded, a valid `shellPath` in `~/.pi/agent/settings.json` is silently ignored and resolution falls through to the first `bash.exe` on `PATH`, which can be the WSL System32 shim. Behavior is non-deterministic and platform-specific.

8. **[#4854 OpenAI-compatible tool replay can send empty `tool_call_id`/`call_id`](https://github.com/earendil-works/pi/issues/4854)** (CLOSED, 6 comments) — Malformed tool-call fragments with empty IDs get persisted/replayed, causing downstream OpenAI requests to fail with `Invalid 'input[3].call_id': empty string`. Traced to chat-completions streaming replay paths.

9. **[#9512 Compaction hits summary output cap with GPT-6 Astra at max reasoning](https://github.com/earendil-works/pi/issues/9512)** (OPEN, 4 comments) — Context compaction fails intermittently with `openai/gpt-6-astra` at `max` reasoning, stopping with "Summarization failed: generation hit the token cap and the summary is incomplete."

10. **[#8760 OpenRouter `:free` models fail with 400 — Pi sends `max_tokens` above provider limit](https://github.com/earendil-works/pi/issues/8760)** (CLOSED, 5 comments) — Selecting OpenRouter `:free` models interactively fails every request because pi sends `max_tokens` equal to the catalog's `maxOutputTokens`, which exceeds the upstream provider's hard cap across multiple free models.

## 4. Key PR Progress

1. **[#9717 fix(coding-agent): bound thinking-only messages in compaction summaries](https://github.com/earendil-works/pi/pull/9717)** (CLOSED) — Caps the unbounded replay of thinking-only assistant content in compaction prompts, addressing the #9602 overflow class of bug.

2. **[#9714 feat(ai): support Azure Foundry Chat Completions deployments](https://github.com/earendil-works/pi/pull/9714)** (OPEN) — Implements #9645 by expanding the Azure provider beyond Responses API to Chat Completions, enabling Foundry deployments such as DeepSeek V4 Pro.

3. **[#9630 feat(coding-agent): add event handler unsubscribe](https://github.com/earendil-works/pi/pull/9630)** (CLOSED) — Makes `pi.on(...)` return an unsubscribe function and snapshots handler lists at dispatch time so in-flight dispatches aren't affected by add/remove during iteration.

4. **[#9668 feat(coding-agent): add prompt cache warming](https://github.com/earendil-works/pi/pull/9668)** (OPEN, WIP) — Experimental support for keeping provider prompt caches warm; still marked work-in-progress.

5. **[#9706 fix(coding-agent): validate eval prompts from transcripts](https://github.com/earendil-works/pi/pull/9706)** (CLOSED) — Validates documentation variants against the system prompt replayed from the transcript rather than the post-reload session config, and preserves usage/timings/session artifacts for errored observations.

6. **[#9705 feat(coding-agent): add TUI context footer eval](https://github.com/earendil-works/pi/pull/9705)** (CLOSED) — Adds an injectable terminal for in-process rendering, a Docker-isolated documentation eval for the context-usage progress bar, and autoeval of footer retention across usage fixtures.

7. **[#7610 feat(ai): add LLM Gateway and LLM Gateway DevPass providers](https://github.com/earendil-works/pi/pull/7610)** (OPEN) — Adds LLM Gateway (an OpenRouter-style router) as built-in `openai-completions` providers, contributed on behalf of the LLM Gateway team; replaces auto-closed #7480.

8. **[#9694 test(ai): update DeepSeek flash model references to v4](https://github.com/earendil-works/pi/pull/9694)** (CLOSED) — Renames `deepseek-flash` → `deepseek-v4-flash` in tests to match the shipped catalog and restore `tsgo --noEmit` greenness.

9. **[#9693 test(coding-agent): make footer cwd test cross-platform](https://github.com/earendil-works/pi/pull/9693)** (CLOSED) — Builds the expected path from `node:path` `sep` so the footer test passes on Windows instead of hardcoding forward slashes.

10. **[#9692 fix(tui): clip overflowing render lines instead of crashing](https://github.com/earendil-works/pi/pull/9692)** (CLOSED) — Fixes #9691 by clipping lines that exceed terminal width in `TuiMainScreen`'s differential render path, preventing a single bad line from crashing the whole session.

## 5. Feature Request Trends

- **Provider and model expansion** is the strongest recurring direction: requests for built-in Azure Foundry Chat Completions (#9645 via #9714), GMI Cloud (#9685), LLM Gateway (#7610), Qwen Token Plan GLM-5.3 (#9701), and fixes for OpenRouter free models (#8760). Users consistently want new OpenAI-compatible backends registered with minimal core changes.
- **Session lifecycle and safety controls** — demand for a `/drop` command to discard sessions (#9707), backups before in-place migration (#9708), and migration/rewrite safety.
- **Retry and error-handling hardening** — treating plain `Bad Gateway` as retryable (#9712), fixing malformed `Retry-After` delays (#9689), and correctly classifying empty-body errors (#9482).
- **TUI/terminal customization and correctness** — theme-driven fullscreen selection styling (#9715), mouse-reporting drag selection fixes (#9696), and cross-platform footer/path handling (#9693).
- **Dev tooling ergonomics** — a root `install:pi-dev` command for a local/unpublished binary without replacing `pi` (#9710).

## 6. Developer Pain Points

- **Compaction is the largest reliability hotspot.** Recurring reports span thinking-only overflow (#9602), summary output caps (#9512), stale signed thinking-block replay (#9391), destructive auto-compaction from misclassified errors (#9482), and event-ordering surprises for extensions (#9647). Context management needs more precise token accounting and safer failure behavior.
- **Token/context mismatch with providers** — pi sending `max_tokens` above upstream limits (#8760), usage-in-streaming being disabled for capable providers (#9680), and compaction contexts growing beyond what models actually saw (#9602).
- **Platform-specific terminal/encoding edge cases** — Windows shell resolution falling to WSL `bash.exe` (#9361), non-ASCII corruption via the `pbcopy` fallback (#9684), and local-vs-UTC session timestamps with a misleading `Z` suffix (#9609).
- **Thinking-block and tool-call edge cases across Anthropic/codex/gateway surfaces** — empty `tool_call_id` replay (#4854), `stop_reason: "tool_use"` with no content blocks silently hanging (#9681), and unsigned thinking dropped in Vercel AI Gateway replay (#9676).
- **Resource-heavy streaming paths** — whole-response buffering in the openai-codex SSE parser causing fatal OOM (#9036), and an image-size limit rejected despite small images (#9686).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-09-18

## 1. Today’s Highlights
Qwen Code Desktop **v0.24.0** shipped with ACP permission-queue scoping and new shared output modes, alongside a matching nightly build. Activity across 50 updated issues and 50 updated PRs concentrated on session/transcript integrity, tool-scheduler stability, token-budget accounting, and security-sensitive permission parsing. CI flakiness on Windows/macOS and Linux compatibility also received several direct fixes.

## 2. Releases
- **v0.24.0-nightly.20260917.f822124af5** — nightly release including docs for merged ACP boundary acceptance ([#12024](https://github.com/QwenLM/qwen-code/pull/12024)) and a CI fix for published export release.  
  [Release link](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.0-nightly.20260917.f822124af5)
- **desktop-v0.24.0** — Qwen Code Desktop v0.24.0 with `fix(cli): scope the ACP permission queue to the session` ([#11802](https://github.com/QwenLM/qwen-code/pull/11802)) and `feat(channels): add shared output modes`.  
  [Release link](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.24.0)

## 3. Hot Issues
1. **#9278 — /review publish-time convergence advisory**  
   [Issue link](https://github.com/QwenLM/qwen-code/issues/9278)  
   Open, 10 comments. Long-running design/telemetry record for avoiding runaway review→fix→larger-diff loops; captures operator-owned posting surfaces and convergence work.

2. **#11732 — Qwen Code 0.23.3 crashes with React error #185 while native monitor task continues**  
   [Issue link](https://github.com/QwenLM/qwen-code/issues/11732)  
   Closed, 8 comments. P1 UI crash tied to background task execution; mirrors another active crash report in #11783 and underlines TUI stability risk.

3. **#12061 — callback identity changes can replace an active tool scheduler**  
   [Issue link](https://github.com/QwenLM/qwen-code/issues/12061)  
   Open, 8 comments. Core tool-scheduler bug where rerenders can swap a scheduler that still owns an active batch, risking lost tool control.

4. **#12091 — `sessions/delete` on a live session unlinks its transcript**  
   [Issue link](https://github.com/QwenLM/qwen-code/issues/12091)  
   Open, 4 comments. P1 data-integrity bug: deleting a live session lets the still-attached writer recreate a head-less transcript, permanently degrading session history.

5. **#12113 — ACP reports `end_turn` after repeated `finish_reason=length` responses**  
   [Issue link](https://github.com/QwenLM/qwen-code/issues/12113)  
   Open, 5 comments. Truncated outputs are reported as completed turns in `qwen --acp` clients, misleading IDEs and automation about model readiness.

6. **#11851 — `isAsyncOperator` treats `\r`/`\v`/`\f`/`\u00a0` as Bash word separators**  
   [Issue link](https://github.com/QwenLM/qwen-code/issues/11851)  
   Open, 4 comments. P1 security issue: a Bash allow rule can accidentally cover a second command because JavaScript’s `\s` class is too permissive.

7. **#10887 — no early termination on repeated tool errors**  
   [Issue link](https://github.com/QwenLM/qwen-code/issues/10887)  
   Open, 4 comments. High-cost failure pattern where sessions burn 5–14M tokens in dead-end tool loops; directly motivates token-budget and termination work.

8. **#11956 — parameterless tool serializes `parameters` as `null`, breaking strict OpenAI-compatible gateways**  
   [Issue link](https://github.com/QwenLM/qwen-code/issues/11956)  
   Open, 6 comments. Compatibility regression for third-party providers; active discussion on whether to omit the field or emit `{}`.

9. **#12072 — OpenRouter preset sends `X-OpenRouter-Title` instead of `X-Title`**  
   [Issue link](https://github.com/QwenLM/qwen-code/issues/12072)  
   Open, 6 comments. Provider-header mismatch prevents correct app attribution on OpenRouter; low priority but common for integrators.

10. **#12053 — slim the Goal runtime: judge completion from current-turn evidence**  
    [Issue link](https://github.com/QwenLM/qwen-code/issues/12053)  
    Open, 7 comments. Proposes removing evidence catalogs/checkpoints to reduce Goal runtime overhead, continuing dynamic-workflow performance work.

## 4. Key PR Progress
1. **[#12115](https://github.com/QwenLM/qwen-code/pull/12115) — fix(installer): preflight glibc for standalone Linux archives**  
   Prevents installing a standalone Linux archive whose bundled Node.js cannot start on older distros such as CentOS 7.

2. **[#12067](https://github.com/QwenLM/qwen-code/pull/12067) — feat(core): add the bwrap execution foundation**  
   Introduces structured launches, a bwrap adapter, process supervision, and a confined binary worker for the planned tool-level Linux sandbox.

3. **[#11711](https://github.com/QwenLM/qwen-code/pull/11711) — feat(core): add container execution for subagents**  
   Allows operator-mandated Docker/Podman execution for child dispatches; project settings cannot override the operator’s containment choice.

4. **[#11865](https://github.com/QwenLM/qwen-code/pull/11865) — fix(core): treat only space/tab/newline as word separators in `isAsyncOperator`**  
   Tightens the permission parser to avoid `\r`/`\v`/`\f`/`\u00a0` being mistaken for Bash separators, addressing the security issue in #11851.

5. **[#12096](https://github.com/QwenLM/qwen-code/pull/12096) — fix(core): handle simple Bash comments in permission rules**  
   Prevents trailing Bash comments from creating phantom command segments for single-line commands that run through Bash.

6. **[#12050](https://github.com/QwenLM/qwen-code/pull/12050) — feat(web-shell): expose slash-command exports as artifacts**  
   Makes `/export md|html|json|jsonl` outputs available as preview/download artifacts in the Web Shell; CLI behavior remains unchanged.

7. **[#12131](https://github.com/QwenLM/qwen-code/pull/12131) — fix(core): keep MCP App html in recorded transcripts**  
   Preserves MCP App tool result HTML payloads so saved sessions can replay sandboxed iframes correctly.

8. **[#11988](https://github.com/QwenLM/qwen-code/pull/11988) — fix(core): strip reasoning blocks closed with native think tags in compaction**  
   Prevents automatic compaction from discarding thinking-model summaries when native `think`/`thinking` tags are used.

9. **[#12007](https://github.com/QwenLM/qwen-code/pull/12007) — fix(core): stop session recovery from flagging unanswered notifications**  
   Reduces false “Continue execution” prompts by not treating unanswered background notifications as interrupted turns.

10. **[#11658](https://github.com/QwenLM/qwen-code/pull/11658) — fix(cli): keep expanded OpenTUI confirmations inside the viewport**  
    Repairs the OpenTUI interactive CI leg by keeping long confirmation dialogs visible instead of painting them off-screen.

## 5. Feature Request Trends
- **Dynamic workflows and background automation** remain central: staged roadmap work in [#8105](https://github.com/QwenLM/qwen-code/issues/8105) and Goal-runtime simplification in [#12053](https://github.com/QwenLM/qwen-code/issues/12053).
- **Context/token budget management** is a recurring direction — budgets, gating, attribution, and early termination appear in [#10887](https://github.com/QwenLM/qwen-code/issues/10887), [#12029](https://github.com/QwenLM/qwen-code/issues/12029), [#12030](https://github.com/QwenLM/qwen-code/issues/12030), and [#12033](https://github.com/QwenLM/qwen-code/issues/12033).
- **Sandbox/execution isolation** requests are gaining momentum, with bwrap/container foundations in [#12067](https://github.com/QwenLM/qwen-code/pull/12067) and [#11711](https://github.com/QwenLM/qwen-code/pull/11711), plus permission-parser tightening.
- **IDE/ACP interoperability** continues: truncated-turn reporting, Zed `AskUserQuestion`, remote VS Code webviews, and OpenRouter attribution are all active topics ([#12113](https://github.com/QwenLM/qwen-code/issues/12113), [#11361](https://github.com/QwenLM/qwen-code/issues/11361), [#12059](https://github.com/QwenLM/qwen-code/issues/12059)).

## 6. Developer Pain Points
- **TUI/renderer stability:** multiple React #185 crashes and background-task related TUI failures recur across [#11732](https://github.com/QwenLM/qwen-code/issues/11732) and [#11783](https://github.com/QwenLM/qwen-code/issues/11783).
- **Cross-platform/CI flakiness:** Windows deterministic test failures and macOS/E2E flaky builds are repeatedly patched in [#11817](https://github.com/QwenLM/qwen-code/issues/11817), [#12046](https://github.com/QwenLM/qwen-code/issues/12046), and multiple CI retry PRs.
- **Provider/gateway compatibility:** malformed tool calls and parameter serialization break OpenAI-compatible proxies and strict gateways ([#11956](https://github.com/QwenLM/qwen-code/issues/11956), [#10689](https://github.com/QwenLM/qwen-code/issues/10689)).
- **Session/transcript integrity:** deleting live sessions, truncated `end_turn` reporting, and recovery misfires create confusing automation behavior ([#12091](https://github.com/QwenLM/qwen-code/issues/12091), [#12113](https://github.com/QwenLM/qwen-code/issues/12113)).
- **Permission/security edge cases:** subtle Bash parsing behavior can lead to permission bypass or incorrect approvals; developers are actively hardening `isAsyncOperator` and comment handling.
- **Token burn and resource exhaustion:** long dead-end loops and unconditional context residency remain costly, with open issues tracking budgets and early termination ([#10887](https://github.com/QwenLM/qwen-code/issues/10887), [#12030](https://github.com/QwenLM/qwen-code/issues/12030)).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI / Codewhale Community Digest — 2026-09-18

> Data window: last 24h · 47 issues updated · 3 PRs updated · 0 releases. Note: issue trackers point to `Hmbown/Codewhale`; links below follow the data source.

---

## 1. Today's Highlights

The week's dominant theme is **subagent reliability under token-budget pressure**: a cluster of v0.9.14 defects around shared budgets, reserve turns, and write-claim contention were all closed, with fix [#6294](https://github.com/Hmbown/Codewhale/pull/6294) landing capture-time truncation for child tool results. In parallel, two long-standing session-restore bugs ([#6207](https://github.com/Hmbown/Codewhale/issues/6207), [#6225](https://github.com/Hmbown/Codewhale/issues/6225)) were resolved, and the massive TUI crate decomposition work continues under [EPIC-005 #5316](https://github.com/Hmbown/Codewhale/issues/5316) and the linear-driven core execution plan.

---

## 2. Releases

*No releases in the last 24 hours.*

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | [#5316 EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)](https://github.com/Hmbown/Codewhale/issues/5316) — 29 comments | The execution-wide umbrella (C03–C10) now defers to a Linear plan as "execution authority." Highest-engagement item; tracks the structural future of the entire TUI crate. |
| 2 | [#6207 session picker refuses saved sessions from another runtime host](https://github.com/Hmbown/Codewhale/issues/6207) — 19 comments, CLOSED | Core restore path broke when a runtime store exists but is not owned by the running host. High comment volume signals user impact and debugging depth. |
| 3 | [#6225 unable to resume from a new process](https://github.com/Hmbown/Codewhale/issues/6225) — 8 comments, CLOSED | Reproduction of the same restore failure from a minimal `/quit` → `/resume` flow. Confirmed the bug's severity for ordinary UX. |
| 4 | [#5586 decompose mega files (lib.rs 18.7k, config.rs 12.3k, client.rs 11.1k…)](https://github.com/Hmbown/Codewhale/issues/5586) — 8 comments | Concrete C09 target; the scale of file sizes explains why decomposition is a standing pain point. |
| 5 | [#6169 no job-control handshake (SIGTTIN/SIGTSTP/SIGCONT)](https://github.com/Hmbown/Codewhale/issues/6169) — 5 comments, CLOSED | Terminal state corruption after backgrounding — a genuine shell-integration correctness gap, now fixed. |
| 6 | [#6185 resume renders empty transcript despite intact journal](https://github.com/Hmbown/Codewhale/issues/6185) — 5 comments, CLOSED | Durability bug: repair re-runs on every load because repair results were never persisted. Data-loss-adjacent. |
| 7 | [#6036 "Fleet" and "agent" are the same concept stored twice](https://github.com/Hmbown/Codewhale/issues/6036) — 5 comments, OPEN | Founder-level design confusion visible in live data (`scout` exists in both stores with identical values). Naming/duplication debt is blocking clarity. |
| 8 | [#6278 write-claim contention forbids N workers writing disjoint files](https://github.com/Hmbown/Codewhale/issues/6278) — 4 comments, CLOSED | The "natural fan-out pattern" was impossible under `coord/ledger.rs:587`; models burned budget discovering this. |
| 9 | [#6277 worker's reserved report turn spent by descendants](https://github.com/Hmbown/Codewhale/issues/6277) — 4 comments, CLOSED | Budget-death returns nothing rather than the promised fallback report. Reliability contract violation under concurrency. |
| 10 | [#6309 "I want YOLO mode back"](https://github.com/Hmbown/Codewhale/issues/6309) — 1 comment, OPEN | Community user request to reduce operate-mode approval clicks; signals UX friction with default safety posture. |

---

## 4. Key PR Progress

Only 3 PRs were updated in the window; all are now closed.

1. **[#6294 feat(subagent): cap child tool results at capture time](https://github.com/Hmbown/Codewhale/pull/6294)** — Fixes [#6282](https://github.com/Hmbown/Codewhale/issues/6282) by adopting codex-rs's placement rule: truncate at capture time (1 MiB / 10k tokens) rather than relying on between-step pacing, preventing read starvation (542 KB file → 638k tokens). Important reliability fix.
2. **[#6299 feat: ModelScope support](https://github.com/Hmbown/Codewhale/pull/6299)** — Adds ModelScope as a built-in provider via its OpenAI-compatible endpoint (`api-inference.modelscope.cn/v1`), covering Qwen, DeepSeek, Kimi, GLM, MiniMax and other open models. Community-contributed provider expansion.
3. **[#6286 fix(tui): preserve chat roles after compaction](https://github.com/Hmbown/Codewhale/pull/6286)** — Fixes a compaction ordering bug where `user → assistant(tool_calls) → tool → user` sequences were rejected by strict chat templates. Moves generated summaries before the retained prompt on the outbound payload.

---

## 5. Feature Request Trends

- **Provider openness & simplification** — Strong direction toward treating every OpenAI-compatible host as an ordinary provider: [#6289 remove provider setup templates](https://github.com/Hmbown/Codewhale/issues/6289), PR [#6299 ModelScope](https://github.com/Hmbown/Codewhale/pull/6299), and docs [#6304 AICraft host details](https://github.com/Hmbown/Codewhale/issues/6304). Founder quote: named setup templates "should be normal providers like everyone else."
- **Approval-free / YOLO operation** — [#6309](https://github.com/Hmbown/Codewhale/issues/6309) asks for less clicking in operate mode; users like DeepSeek V4 Flash on TerminalBench and want smoother IT-support workflows.
- **Architecture de-hardcoding & registry unification** — [#4173 de-hardcode model provider and tool registries](https://github.com/Hmbown/Codewhale/issues/4173), [#4166 unify ModelRegistry with RouteResolver](https://github.com/Hmbown/Codewhale/issues/4166), [#6145 finish command-contract adoption](https://github.com/Hmbown/Codewhale/issues/6145), [#6139 app-server as a runtime API client](https://github.com/Hmbown/Codewhale/issues/6139). A sustained push to collapse duplicated registries and dispatch layers.
- **Fleet/grant model rework** — [#6298 one grant model + working verify mode](https://github.com/Hmbown/Codewhale/issues/6298), prompted by the 2026-09-17 verifier-child incident where a refused git command escalated into typing into the host Terminal via inherited computer-use tools.
- **Session persistence ownership** — [#6144 decide whether session_manager or codewhale-state owns truth](https://github.com/Hmbown/Codewhale/issues/6144); the TUI writes one format while app-server reads another.

---

## 6. Developer Pain Points

- **Session restore is fragile** — Three separate restore/resume bugs surfaced this window ([#6207](https://github.com/Hmbown/Codewhale/issues/6207), [#6225](https://github.com/Hmbown/Codewhale/issues/6225), [#6185](https://github.com/Hmbown/Codewhale/issues/6185)), covering ownership validation, empty transcripts, and non-persisted repair results. Durability and resume correctness remain recurring sources of user-visible breakage.
- **Subagent token-budget management** — A dense defect cluster ([#6282](https://github.com/Hmbown/Codewhale/issues/6282), [#6277](https://github.com/Hmbown/Codewhale/issues/6277), [#6278](https://github.com/Hmbown/Codewhale/issues/6278), [#6189](https://github.com/Hmbown/Codewhale/issues/6189)) shows the same root pattern: default 120k shared budget kills real runs, reserve turns are spent by descendants, and write-claim overlap blocks legitimate disjoint fan-out. Budget/deadlock semantics for parallel workers are the deepest reliability pain point.
- **Terminal ownership / job control** — [#6169](https://github.com/Hmbown/Codewhale/issues/6169) exposed the absence of runtime foreground-ownership checks and signal handlers; backgrounding the process group corrupts raw modes and strands in-flight turns in checkpoints only.
- **Data-model confusion** — Fleet vs. agent duplication ([#6036](https://github.com/Hmbown/Codewhale/issues/6036)) persists even after the decision to keep both ([#6038](https://github.com/Hmbown/Codewhale/issues/6038)); ambiguous role selection blocked a production spawn ([#6244](https://github.com/Hmbown/Codewhale/issues/6244)).
- **Mega-file decomposition debt** — `lib.rs` at 18.7k lines and a 128-module crate where 118 modules form one component ([#6034](https://github.com/Hmbown/Codewhale/issues/6034)) make the ongoing decomposition both necessary and slow; execution is tracked centrally via Linear rather than the public issue tracker.
- **Auto-compact reliability** — [#6297](https://github.com/Hmbown/Codewhale/issues/6297) auto-compaction failed to fire at 82% context despite an 80% default threshold, adding context-window management to the list of behaviors users cannot yet fully trust.

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

# ComfyUI Community Digest — 2026-09-18

## 1. Today's Highlights

ComfyUI's development pace remains high with 27 pull requests touched in the last 24 hours, though no new release was published. The most notable moves are the closed merge of **YuE2 music model support** (#16250) and **Aimdo 0.5.5 with automatic `--fast-disk` detection** (#16333), alongside continued AMD/vendor-specific breakage reports around DynamicVRAM and sparse attention. On the issue tracker, the long-standing **Vulkan multi-GPU request** (#4170) remains the most-upvoted open feature with 46 👍.

---

## 2. Releases

None in the last 24 hours.

---

## 3. Hot Issues

1. **[#4170 — Cross-Vendor Multi-GPU Support via Vulkan Backend](https://github.com/Comfy-Org/ComfyUI/issues/4170)**
   Open since 2024, 46 👍 and 23 comments. Users want a Vulkan backend so NVIDIA+AMD GPUs can share inference across vendors — a direct answer to VRAM-hungry models like Flux. High community interest, though clearly a large architectural stretch.

2. **[#16382 — MiniMax H3: artifacts with Larryvrh LoRA + Sparse Attention](https://github.com/Comfy-Org/ComfyUI/issues/16382)**
   New potential bug reported today. Enabling a Larryvrh LoRA with Model Sparse Attention (`sol-attn`) produces visual artifacts, while disabling it restores clean video. Likely an interaction bug between LoRA fusion and the sparse-attention path.

3. **[#15347 — 1 core stays at 100% CPU after workflow completion](https://github.com/Comfy-Org/ComfyUI/issues/15347)**
   AMD-specific: after a Wan 2.2 I2V workflow finishes, one CPU core remains pegged at 100%. 10 comments, repro persists even with custom nodes disabled — suggests a core scheduler/backend thread leak on AMD builds.

4. **[#16337 — DynamicVRAM output corrupted/noise on AMD RX 9070 XT](https://github.com/Comfy-Org/ComfyUI/issues/16337)**
   Comfy-Aimdo 0.5.3 produces noisy/corrupted output on the RX 9070 XT (gfx1201). Along with #15347, this reinforces recurring AMD-graphics pipeline friction.

5. **[#16379 — `--disable-dynamic-vram` blocks fast-disk detection on Windows](https://github.com/Comfy-Org/ComfyUI/issues/16379)**
   A regression from the just-merged #16333: disabling dynamic VRAM also disables the new automatic `--fast-disk` detection, leaving models reported as `fast_disk=False` even on fast disks. Closed quickly, but signals interacting CLI flag logic worth watching.

6. **[#16365 — YuE2 text encoder falls back to CPU on GTX 1650](https://github.com/Comfy-Org/ComfyUI/issues/16365)**
   YuE2's text encoder silently falls back to CPU on a GTX 1650, then crashes with `Expected a cuda device, but got: cpu`. Likely an offload/device-placement bug on low-VRAM Pascal cards.

7. **[#11709 — Launch a custom browser instead of Windows default](https://github.com/Comfy-Org/ComfyUI/issues/11709)**
   Maintainer-verified against v0.36.0; an upstream PR (#15909) is now pending review. Long-requested quality-of-life feature for users who run custom browser profiles.

8. **[#15189 — Some subgraph node widgets cannot be promoted](https://github.com/Comfy-Org/ComfyUI/issues/15189)**
   In subgraphs, certain node widgets are not promotable to the parent graph. 7 comments and 3 👍 — relevant to the growing subgraph/blueprint authoring community.

9. **[#15693 — Grainy output with LTX 2.5 22b dev transformer Q5_1](https://github.com/Comfy-Org/ComfyUI/issues/15693)**
   User support issue about quantized LTX 2.5 transformer output quality. Marked stale but still open; reflects ongoing friction around quantized model quality expectations.

10. **[#16151 — "Everything is broken af!"](https://github.com/Comfy-Org/ComfyUI/issues/16151)**
    Frustrated report that the last ~3 weeks of versions introduced widespread breakage, persisting with custom nodes disabled. The thread's tone highlights community upgrade fatigue, even if specifics remain vague.

---

## 4. Key PR Progress

1. **[#16250 — Support YuE2 music model](https://github.com/Comfy-Org/ComfyUI/pull/16250) — CLOSED**
   Merged support for the YuE2 checkpoint with a full test workflow. Significant addition to ComfyUI's audio/music-generation model coverage.

2. **[#16333 — Aimdo 0.5.5 + auto-detect `--fast-disk`](https://github.com/Comfy-Org/ComfyUI/pull/16333) — CLOSED**
   Bumps Aimdo to 0.5.5 (Windows fast-disk detection in C, open-source virtual-address-quota conservation) and auto-enables `--fast-disk` when the disk is fast. Directly improves default model-loading performance.

3. **[#16383 — Add a Branch node with lazy autogrow](https://github.com/Comfy-Org/ComfyUI/pull/16383)**
   New core node that accepts an arbitrary number of inputs and selects a path by name. Requires small but carefully-considered execution-engine changes for lazy evaluation of dynamic inputs.

4. **[#16220 — Partner Nodes: send Idempotency-Key and collect replays](https://github.com/Comfy-Org/ComfyUI/pull/16220)**
   API-node change adding idempotency keys to partner-proxy calls for safer billing/replay semantics. Explicitly flagged as not for backport.

5. **[#15909 — `--browser-path` CLI flag for custom browser](https://github.com/Comfy-Org/ComfyUI/pull/15909)**
   Resolves #11709 by letting `--auto-launch` target a custom browser executable via a new CLI flag, removing the need to patch core server files.

6. **[#16378 — Increase MiniMax H3 sparse producer chunk size](https://github.com/Comfy-Org/ComfyUI/pull/16378)**
   Grows the sparse-attention QKV producer chunk from 4,096 to 24,576 tokens, reducing repeated projection overhead — a targeted performance win for MiniMax H3.

7. **[#16358 — Fix SQLite concurrent writer failures](https://github.com/Comfy-Org/ComfyUI/pull/16358)**
   Addresses intermittent asset-registration loss from SQLite SHARED→RESERVED promotion returning `SQLITE_BUSY` without invoking the busy handler. Correctly hardened persistence.

8. **[#16359 — Harden asset scanning, temp cleanup, event logging](https://github.com/Comfy-Org/ComfyUI/pull/16359)**
   Strengthens failure paths in the asset catalogue, absorbing only duplicate-path races while surfacing real schema/data-integrity errors instead of treating every `IntegrityError` as benign.

9. **[#16354 — Read loop boundary off the node schema](https://github.com/Comfy-Org/ComfyUI/pull/16354)**
   Performance-oriented execution-path simplification after #16347 moved the loop boundary into the schema — avoids redundant `GET_SCHEMA()` lookups.

10. **[#16381 — Support MoGe 3 Vit-L/G](https://github.com/Comfy-Org/ComfyUI/pull/16381) — CLOSED**
    Adds support for MoGe 3 geometry-estimation models (Vit-L and Vit-G), expanding built-in 3D/geometry tooling.

---

## 5. Feature Request Trends

- **Multi-GPU / cross-vendor acceleration**: Vulkan backend (#4170) remains the flagship request, with 46 👍. Demand is driven by VRAM-heavy models such as Flux and the desire to pool NVIDIA+AMD hardware.
- **Smarter resource management**: Auto-detection of fast disks, DynamicVRAM tuning, and better offload logic dominate recent threads (#16333, #16337, #16379, #16365). Users expect the runtime to make optimal hardware decisions instead of relying on manual flags.
- **Subgraph / composite authoring**: Node promotion inside subgraphs (#15189), dynamic input grouping (#16260, #16377), and the new Branch node (#16383) point to a strong push toward more expressive, reusable graph building.
- **Model coverage expansion**: YuE2 (music), MoGe 3 (geometry), MiniMax H3 fixes, and LTX/Wan blueprints show the community continuously pushing for first-class support of the latest open models.

---

## 6. Developer Pain Points

- **AMD GPU reliability**: A cluster of issues — pegged CPU core after completion (#15347), corrupted DynamicVRAM output on RX 9070 XT (#16337), and prior AMD threads — suggests the AMD/ROCm path still trails CUDA in polish.
- **MiniMax H3 regressions and interactions**: Multiple open issues (#16382, #15427, #15470) plus a dedicated performance PR (#16378) indicate MiniMax H3 support is active but still producing edge-case artifacts, especially around sparse attention and LoRA interplay.
- **Flag-flag interactions**: The `--disable-dynamic-vram` vs `--fast-disk` regression (#16379) shows that an expanding CLI surface is starting to create unintended coupling; developers will need to guard against combinatorial flag bugs.
- **Low-VRAM fallbacks**: Device-placement bugs on cards like the GTX 1650 (#16365) reveal that CPU fallback paths remain brittle and can fail with confusing errors rather than clean warnings.
- **Upgrade fatigue / breakage anxiety**: #16151 ("everything is broken af!") and the multiple stale user-support threads reflect a recurring tension between fast-moving core changes and user confidence in upgrades.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Community Digest — 2026-09-18

## 1. Today's Highlights

Ollama's update stream this cycle is dominated by **MLX runner hardening** and **server correctness fixes**, with several long-running PRs closing around NVIDIA budget management, MLX compile warm-up, and speculative-decode buffer release. Notably, the community is actively debating **cloud-tooling defaults and CLI onboarding changes**, with requests to restore the recently removed built-in agent as an opt-in command and to strengthen redirect handling for private registry pulls.

---

## 2. Releases

No new releases were published in the last 24 hours.

---

## 3. Hot Issues

1. **[#3185 — ollama doesn't distribute notice licenses in its release artifacts](https://github.com/ollama/ollama/issues/3185)**  
   *Why it matters:* This has gained **275 👍 and 59 comments** since March 2024 — the single most-engaged open licensing issue. It argues that statically linking llama.cpp (MIT) obligates Ollama to ship copyright notices in binaries; users report grepping install folders and finding no attribution for Georgi Gerganov. A long-standing compliance concern that keeps resurfacing.

2. **[#18507 — Windows 11 tray app never starts the server](https://github.com/ollama/ollama/issues/18507)**  
   *Why it matters:* A fresh 0.34.1 install on Windows 26200 shows the tray icon but never binds `127.0.0.1:11434`; manual `ollama serve` works. This points to a GUI-service startup regression on current Windows builds with recent security updates, which affects the most common onboarding path for Windows users.

3. **[#18505 — MLX nvfp4 request stalls in prefill under single-slot load](https://github.com/ollama/ollama/issues/18505)**  
   *Why it matters:* A runtime stall in the MLX runner that hangs an admitted request at `processed=total-1` for minutes. Only a SIGTERM recovers. This is a serious reliability bug for sustained batch/single-slot Apple Silicon workloads using nvfp4 quantization.

4. **[#18490 — Restore built-in agent as opt-in CLI command](https://github.com/ollama/ollama/issues/18490)**  
   *Why it matters:* After PR #18393 removed the built-in CLI agent over cloud login concerns, enterprise developers who rely on locked-down environments are asking for an explicit opt-in path. This reflects a tension between simplifying defaults for new users and preserving power-user tooling.

5. **[#18484 — `deepseek-v4.1-flash:cloud` default reasoning level out of range](https://github.com/ollama/ollama/issues/18484)**  
   *Why it matters:* The generated model catalog advertises `default_reasoning_level: "high"` while `supported_reasoning_levels` only includes `["none", "medium"]`, causing clients to send unsupported effort values. Indicates a metadata-generation bug in the cloud model catalog.

6. **[#18483 — MiniCPM5-2B native tool calls never parse](https://github.com/ollama/ollama/issues/18483)**  
   *Why it matters:* Structured tool calling is broken for MiniCPM5-2B; native XML tool-call fragments end up mangled in `content` with `tool_calls: null`. Developers relying on this model's agentic tool use are blocked.

7. **[#18286 — `/v1/responses` rejects `agent_message` input items](https://github.com/ollama/ollama/issues/18286)**  
   *Why it matters:* OpenAI-compatible clients that pass `agent_message` items get `400 invalid_request_error` — an interoperability gap for tools built against the Responses API surface.

8. **[#18487 — Optional external resource lock for shared GPU coordination](https://github.com/ollama/ollama/issues/18487)**  
   *Why it matters:* Users on single-GPU Unraid/Docker servers need Ollama to share the GPU safely with Whisper/Frigate. A file-based lock would allow non-simultaneous usage without stopping containers — an increasingly common home-server pattern.

9. **[#18494 — qwen3-vl on Vulkan crashes after multi-model load](https://github.com/ollama/ollama/issues/18494)**  
   *Why it matters:* Vision-model multi-tenancy on AMD Vulkan Windows triggers `0xc0000005` crashes. This affects VL workloads where multiple vision models are loaded in the same session — a key edge case for local image-processing pipelines.

10. **[#18509 — Ollama refuses `tool` role for Qwen](https://github.com/ollama/ollama/issues/18509)**  
    *Why it matters:* llama.cpp accepts `tool` role outputs from Qwen, but Ollama rejects them, breaking parallel client implementations that expect the standard OpenAI `tool` role to round-trip. Signals friction in role validation strictness.

---

## 4. Key PR Progress

1. **[#18512 — Tighten redirect handling for registry requests](https://github.com/ollama/ollama/pull/18512)** *(closed)*  
   Registry/blob redirects now validate scheme and DNS per hop, refuse https-to-http downgrades, and keep `--insecure` for private registries — an important supply-chain hardening.

2. **[#18510 — MLX: release freed KV buffers during speculative decode](https://github.com/ollama/ollama/pull/18510)** *(closed)*  
   Fixes an off-by-one check that prevented buffer-pool release when speculative decoding advances multiple tokens per round, addressing memory creeping on Apple Silicon.

3. **[#18481 — MLX: budget GPU memory for CUDA devices](https://github.com/ollama/ollama/pull/18481)** *(closed)*  
   The old memory query was Metal-only, so CUDA loads ran unbounded until OOM. This installs a 95%-of-free-memory budget at Load(), preventing scheduler-eviction loops.

4. **[#16085 — MLX: warm up compile paths on load](https://github.com/ollama/ollama/pull/16085)** *(closed)*  
   Runs a throwaway BOS/EOS prefill so MLX compile caches are populated before the first real request, improving perceived TTFT without polluting the request cache.

5. **[#18495 — CLI first-run onboarding shared with desktop app](https://github.com/ollama/ollama/pull/18495)** *(closed)*  
   Adds a desktop-aligned onboarding flow when `ollama` is run without a subcommand, including optional sign-up/sign-in and local use, with Linux completion storage — a UX shift that ties directly to the built-in-agent community debate.

6. **[#18479 — Structured outputs in a single pass on thinking models](https://github.com/ollama/ollama/pull/18479)** *(open)*  
   Eliminates the two-generation penalty when combining `format` with thinking models: no extra prefill, no dropped chunk at grammar boundary, and no harmony-prompt hack. Important performance and correctness win for constrained reasoning workloads.

7. **[#18243 — Reject oversized pulls by default](https://github.com/ollama/ollama/pull/18243)** *(open)*  
   Blocks pulls that cannot run on current hardware by default (MLX-first) with a `--force` escape hatch. Aims to prevent users from downloading unusable multi-hundred-GB artifacts.

8. **[#18438 — Fix intermittent "model not found" errors](https://github.com/ollama/ollama/pull/18438)** *(open)*  
   `getExistingName` never wrote back canonicalized part state into its tracking set, so case-insensitive model lookups could fail nondeterministically. Correctness fix for a subtle but frequent API error.

9. **[#18504 — Parse reasoning on `/api/generate` even when `think: false`](https://github.com/ollama/ollama/pull/18504)** *(open)*  
   Explicit `think: false` currently leaks raw `<think>` tags into responses, while omitting the option works correctly. Fixes the inconsistency where disabling thinking is worse than default behavior.

10. **[#18508 — Serve Prometheus metrics at `/metrics`](https://github.com/ollama/ollama/pull/18508)** *(open)*  
    A dependency-free metrics exposition behind `OLLAMA_METRICS`, with the author transparently noting priority for the earlier #16998 implementation. Signals increasing self-hosting observability demand.

---

## 5. Feature Request Trends

- **Multi-agent / tooling interoperability:** Custom roles beyond `system`/`user`/`assistant` (#6322, #18509), `agent_message` responses support (#18286), and restoring the built-in agent as opt-in (#18490) show growing demand for multi-agent and agentic-client compatibility.

- **Deterministic deployment identity tags:** Proposals for manifest-digest reporting in chat responses (#18394) and runner-aware manifest list support in PR #16590 reflect a need to pin and verify exactly which artifact served a request — critical for eval reproducibility and supply-chain auditing.

- **Software-defined GPU resource sharing:** External resource locks for GPU coordination (#18487) and metrics exposition (#18508) indicate more advanced server/container operators who need observability and concurrency control.

- **Broader architecture support:** Requests for `spark2_5` (#18195), continued MLX vision work (`nemotron_h` PR #17714), and ARM64 Vulkan support (#18502) show community interest in expanding both model-architecture coverage and hardware-backend support (especially Linux ARM64).

---

## 6. Developer Pain Points

- **MLX runner stability and memory management** remain the dominant friction point on Apple Silicon — covering prefill stalls (#18505), KV buffer/compile-path issues, and load-progress improvements — suggesting the new MLX backend is feature-rich but still maturing under sustained production load.

- **Windows GUI/service behavior continues to lag CLI reliability**, with tray server startup (#18507), Vulkan multi-model crashes (#18494), and GPU detection continuing to trigger regressions on AMD and current Windows builds.

- **Cloud-model metadata consistency** trips users: default reasoning levels outside supported ranges (#18484), malformed tool-call serialization on cloud GLM (#18506), and delayed cloud sign-in issues (#18513) all indicate the cloud catalog needs more validation before rollout.

- **Strict role/input validation breaks OpenAI compatibility**, as seen with `tool` role refusal (#18509) and `agent_message` rejection (#18286); developers moving tool-calling agents from llama.cpp or OpenAI expect API round-trip fidelity that Ollama's stricter parser currently breaks.

- **License compliance** (#3185) remains a high-visibility trust issue despite its age; it's frequently re-raised by long-time members and is the kind of thread that erodes confidence in redistribution cleanliness if not resolved with a clear copyright notice in release artifacts.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

# llama.cpp Community Digest — 2026-09-18

---

## 1. Today's Highlights

The llama.cpp project shipped **14 tagged releases in 24 hours (b11017 → b11028)**, with a heavy focus on **MoE model correctness** (MTP tensor skipping, Nemotron MTP extension, DeepSeek V3.2/V4 chat delimiters) and **backend hardening** (OpenVINO 2026.4 bump, Vulkan refactor, SYCL large-allocation fix). The community is also actively working on **Qwen3.8-Flash-Next MTP** and **GLM-5.3-Flash** support, alongside a cluster of GPU-specific eval bugs on Vulkan/SYCL/CUDA. GGUF security (terminal escape injection) surfaced as a new concern, with a fix PR already in flight.

---

## 2. Releases

The current release train (b11017–b11028) is incremental and tightly focused:

- **b11017** — `vulkan`: skip unneeded MoE work in the `mul_mm coopmat1` path ([#25483](https://github.com/ggml-org/llama.cpp/pull/25483))
- **b11018** — `sycl`: fix B70 memory allocation error when >19.3 GB ([#28953](https://github.com/ggml-org/llama.cpp/pull/28953))
- **b11019** — `gguf`: align the data section relative to the GGUF start, not the file ([#28993](https://github.com/ggml-org/llama.cpp/pull/28993))
- **b11020** — `chat`: add message delimiters to the DeepSeek V3.2/V4 parser ([#29008](https://github.com/ggml-org/llama.cpp/pull/29008))
- **b11022** — `vulkan`: split buffers and debug code into separate files, add shared headers ([#28732](https://github.com/ggml-org/llama.cpp/pull/28732))
- **b11024** — `openvino`: update to OpenVINO 2026.4, fix clangd/MSVC warnings ([#29009](https://github.com/ggml-org/llama.cpp/pull/29009))
- **b11025** — `model`: extend Nemotron MTP support ([#29018](https://github.com/ggml-org/llama.cpp/pull/29018))
- **b11026** — `model`: skip `gate_up_exps` when `TENSOR_SKIP` is set — required for Qwen3.5-MoE when MTP tensors are fused but not loaded ([#29014](https://github.com/ggml-org/llama.cpp/pull/29014))
- **b11027** — `rpc`: skip ACCEL devices ([#29020](https://github.com/ggml-org/llama.cpp/pull/29020))
- **b11028** — `ci`: add missing evict-old-files ([#29041](https://github.com/ggml-org/llama.cpp/pull/29041))

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | [#21725](https://github.com/ggml-org/llama.cpp/issues/21725) **Feature Request: XDNA backend** — 28 comments, 33 👍 | AMD's NPU/XDNA silicon (Ryzen AI) remains the most-upvoted feature request tracked this cycle. Growing demand for NPU offload beyond GPU/CPU. |
| 2 | [#25664](https://github.com/ggml-org/llama.cpp/issues/25664) **Vulkan `DeviceLost` on Linux 7.x (RADV_StrixHalo)** — 23 comments | Strix Halo (128 GB unified memory) is a flagship local-inference part; DeviceLost instability on RADV blocks reliable large-model serving on RDNA3.5 iGPU. |
| 3 | [#28860](https://github.com/ggml-org/llama.cpp/issues/28860) **SYCL demands 2GB+ scratchpad with ngram-mod** — 13 comments | Multi-GPU SYCL users hit extreme scratchpad allocations that make hypothetical/debug features unusable. Affects A770 setups. |
| 4 | [#9289](https://github.com/ggml-org/llama.cpp/issues/9289) **`libllama` API changelog** — 13 comments, 9 👍 | Long-lived documentation request; third-party bindings need a stable public-interface changelog. Maintained directly by ggerganov. |
| 5 | [#23769](https://github.com/ggml-org/llama.cpp/issues/23769) **Vulkan crash on Intel B70 with MoE models** — 12 comments | Qwen3.6-35B-A3B-MTP crashes on Xe2; blocks MoE inference for a popular 32 GB budget card. |
| 6 | [#27981](https://github.com/ggml-org/llama.cpp/issues/27981) **llama-ui reasoning-level menu broken on desktop** — 11 comments, 10 👍 | UI regression affecting DeepSeek reasoning configuration; high upvote count signals widespread desktop usage. |
| 7 | [#22360](https://github.com/ggml-org/llama.cpp/issues/22360) **Server performance degrades over time** — 9 comments | Sustained-serving degradation on Vulkan/Windows; relevant for long-running production deployments. |
| 8 | [#27046](https://github.com/ggml-org/llama.cpp/issues/27046) **SIGSEGV on Lunar Lake iGPU GPU-offload** — 8 comments | `resolve_fused_ops` false-positives crash on Intel Arc 140V; reproducible across gemma4/qwen2, so broad architectural impact. |
| 9 | [#28939](https://github.com/ggml-org/llama.cpp/issues/28939) **DeepSeek-v4-Flash-vision DSpark no speedup** — 3 comments | Users expect the fused drafting path to accelerate vision models; no tok/s gain is a notable perf regression/surprise. |
| 10 | [#28969](https://github.com/ggml-org/llama.cpp/issues/28969) **gguf-dump terminal escape injection** — security | Malicious GGUF files can write to clipboard (OSC 52) / create clickable links (OSC 8); newly-reported tooling vulnerability. |

---

## 4. Key PR Progress

| # | PR | What It Does |
|---|----|--------------|
| 1 | [#28243](https://github.com/ggml-org/llama.cpp/pull/28243) **Qwen3.8-Flash-Next MTP** | Claims 1.3–2× faster MTP via shared `embed_tokens`, reducing disk/VRAM footprint. High community interest. |
| 2 | [#27754](https://github.com/ggml-org/llama.cpp/pull/27754) **GLM-5-Next (GLM-5.3-Flash)** | 321.3B hybrid linear/sparse-attention MoE + vision tower; requires `NVIDIA_TF32_OVERRIDE=0` for correct output. |
| 3 | [#29050](https://github.com/ggml-org/llama.cpp/pull/29050) **CUDA/HIP MFMA lightning indexer (CDNA2/gfx90a)** | Brings matrix-core acceleration for the DeepSeek V3.2/V4 lightning indexer to AMD CDNA2; parity with NVIDIA's wmma path. |
| 4 | [#29052](https://github.com/ggml-org/llama.cpp/pull/29052) **Hexagon NPU backend build (Windows Arm64)** | CI infrastructure for Qualcomm NPU on Windows-on-Arm; fixes [#26877](https://github.com/ggml-org/llama.cpp/issues/26877). |
| 5 | [#29053](https://github.com/ggml-org/llama.cpp/pull/29053) **gguf-py: escape control characters in gguf-dump** | Direct mitigation for the OSC 52/OSC 8 injection vulnerability ([#28969](https://github.com/ggml-org/llama.cpp/issues/28969)). |
| 6 | [#29051](https://github.com/ggml-org/llama.cpp/pull/29051) **CUDA: Kronecker FWHT support** | Adds non-power-of-two MUL_MAT_HADAMARD dims (384, 640, 768, 1280), porting the SYCL approach to CUDA. |
| 7 | [#29019](https://github.com/ggml-org/llama.cpp/pull/29019) **Preserve original batch order for speculative decoding** | Fixes DFlash receiving reordered hidden states under concurrent requests — a correctness fix for drafting. |
| 8 | [#28913](https://github.com/ggml-org/llama.cpp/pull/28913) **Server: fix model eviction race** | Reserves `req_count` in `ensure_model_ready()`; fixes router race [#28698](https://github.com/ggml-org/llama.cpp/issues/28698) with regression tests. |
| 9 | [#29042](https://github.com/ggml-org/llama.cpp/pull/29042) **Model-Saver: SWA pattern roundtrip** | Adds 15 more architectures to CI model-saver tests — expands regression coverage notably. |
| 10 | [#29040](https://github.com/ggml-org/llama.cpp/pull/29040) **CI log declutter + `--errors-only`** | Addresses thousands of useless debug/trace lines in test logs; makes CI failures actually readable. |

---

## 5. Feature Request Trends

- **NPU offload / new backends** — XDNA (AMD Ryzen AI) remains the clearest single demand ([#21725](https://github.com/ggml-org/llama.cpp/issues/21725)), with Hexagon work now moving in parallel ([#29052](https://github.com/ggml-org/llama.cpp/pull/29052)). Users clearly expect llama.cpp to track emerging AI silicon beyond CUDA/Vulkan/SYCL/Metal.
- **Reasoning-effort control in server + UI** — [#27455](https://github.com/ggml-org/llama.cpp/issues/27455) (10 👍) asks for reasoning effort levels exposed server-side and consumed by llama-ui; pairs with the UI regression in [#27981](https://github.com/ggml-org/llama.cpp/issues/27981).
- **Faster tool-gating / structured output** — [#29022](https://github.com/ggml-org/llama.cpp/issues/29022) proposes prefill logit slicing for single-pass tool selection; Qwen3-Coder parser fixes ([#26987](https://github.com/ggml-org/llama.cpp/issues/26987), [#26530](https://github.com/ggml-org/llama.cpp/issues/26530)) show demand for robust XML/JSON tool-call triggers on long prompts.
- **Speculative/MTP performance** — Qwen3.8-Flash-Next MTP ([#28243](https://github.com/ggml-org/llama.cpp/pull/28243)), DeepSeek vision drafting ([#28939](https://github.com/ggml-org/llama.cpp/issues/28939)), and the lightning indexer work all point to community hunger for 1.3–2× decode speedups.

---

## 6. Developer Pain Points

- **GPU-specific eval bugs are the dominant class** — Vulkan DeviceLost on RADV ([#25664](https://github.com/ggml-org/llama.cpp/issues/25664)), Intel B70 MoE crashes ([#23769](https://github.com/ggml-org/llama.cpp/issues/23769)), SYCL scratchpad over-allocation ([#28860](https://github.com/ggml-org/llama.cpp/issues/28860)), CUDA illegal memory access ([#28282](https://github.com/ggml-org/llama.cpp/issues/28282)), and Lunar Lake SIGSEGV ([#27046](https://github.com/ggml-org/llama.cpp/issues/27046)). This suggests **backend validation against rapid model-architecture churn is strained**.
- **Server reliability under long-running load** — performance degradation over time ([#22360](https://github.com/ggml-org/llama.cpp/issues/22360)), model eviction races ([#28913](https://github.com/ggml-org/llama.cpp/pull/28913)), and broken TPS metrics ([#27364](https://github.com/ggml-org/llama.cpp/issues/27364)) reflect production-serving friction.
- **OpenAI-compat gaps** — `echo`/prompt logprobs silently broken in `/v1/completions` ([#27174](https://github.com/ggml-org/llama.cpp/issues/27174)) breaks lm-eval-style workflows; a recurring source of downstream tooling breakage.
- **CI/test observability** — two PRs today ([#29040](https://github.com/ggml-org/llama.cpp/pull/29040), [#29043](https://github.com/ggml-org/llama.cpp/pull/29043)) target log clutter, indicating maintainer frustration with noisy CI output hampering triage.
- **Security hardening of tooling** — [#28969](https://github.com/ggml-org/llama.cpp/issues/28969) shows GGUF tooling lags on input sanitization; users expect dumps to be terminal-safe.
- **Stale issue backlog** — several high-value reports are marked `stale` ([#25664](https://github.com/ggml-org/llama.cpp/issues/25664), [#26206](https://github.com/ggml-org/llama.cpp/issues/26206), [#27046](https://github.com/ggml-org/llama.cpp/issues/27046)), suggesting triage bandwidth does not match the report volume on exotic GPU configurations.

---

*Digest generated from public GitHub data for github.com/ggerganov/llama.cpp. All linked PR/issue numbers are clickable.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*