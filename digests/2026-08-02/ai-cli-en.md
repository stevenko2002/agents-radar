# AI CLI Tools Community Digest 2026-08-02

> Generated: 2026-08-01 22:16 UTC | Tools covered: 12

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

1. **Gemini CLI** — Released nightly **v0.55.0-nightly.20260801.gf47d6c6f7** with two critical fixes: classifying API capacity exhaustion as terminal to prevent retry hangs, and propagating `InvalidStreamError` details to the UI for actionable guidance. ([github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli))

2. **GitHub Copilot CLI** — Released **v1.0.78-2**, fixing the split-view sidebar close confirmation wording and ensuring extension slash command handlers run exactly once per invocation. ([github.com/github/copilot-cli](https://github.com/github/copilot-cli))

3. **OpenCode** — Released **v1.18.11** with two high-impact bugfixes: MCP SSE connections no longer get stuck in reconnect loops after server errors, and provider model configs using interleaved reasoning fields (e.g., `reasoning_text`) are now handled correctly. ([github.com/anomalyco/opencode](https://github.com/anomalyco/opencode))

4. **Qwen Code** — Released stable **v0.21.3** alongside a nightly build, enhancing the `/review` command with test plan validation and measured failure attribution, and adding session source metadata to lifecycle hook payloads for better observability. ([github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code))

5. **Kimi Code CLI** — Merged four critical bugfix PRs today: recursive unwrapping of double-encoded JSON in tool-call arguments, correct `StrReplaceFile` replacement counting against running content, shell pipe-hang prevention for detached child processes, and proper async lifecycle management for `PostToolUse` hooks. ([github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli))

6. **Ollama** — Multiple OpenAI API compatibility PRs advanced: `reasoning_effort: "minimal"` normalized to `"low"`, MLX structured output requests now rejected with clear errors instead of silently returning malformed results, and incomplete cogito tool calls are finalized rather than dropped. ([github.com/ollama/ollama](https://github.com/ollama/ollama))

7. **llama.cpp** — Released **b10221** with a BoringSSL update to `0.20260730.0` for security and TLS compatibility, and **b10219** persisted `reasoning_content` in chat history to support `--reasoning-preserve` re-injection of prior thoughts. ([github.com/ggerganov/llama.cpp](https://github.com/ggerganov/llama.cpp))

8. **OpenAI Codex** — Merged three quality-of-life PRs: two-stroke TUI key chord support (e.g., `ctrl-x ctrl-s`), retained attempted tool metadata across prompts for context continuity, and doubled remote plugin bundle size limits (50→100 MiB download, 250→512 MiB extraction). ([github.com/openai/codex](https://github.com/openai/codex))

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-08-02 | Source: anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

### 1. fix(skill-creator): run_eval.py always reports 0% recall
**[PR #1298](https://github.com/anthropics/skills/pull/1298)** — *Open* | Author: MartinCajiao | Updated: 2026-06-23

The single most impactful PR in the current cycle. `run_eval.py` — and its consumers `run_loop.py` and `improve_description.py` — report `recall=0%` for every skill description, rendering the entire description-optimization loop ineffective. This PR addresses the root cause: the eval artifact is not installed as a real skill, causing trigger detection to fail. It also fixes Windows stream reading, trigger detection logic, and parallel worker handling. Directly linked to [Issue #556](https://github.com/anthropics/skills/issues/556) (12 comments) and [Issue #1169](https://github.com/anthropics/skills/issues/1169) (3 comments).

### 2. fix(skill-creator): Windows subprocess + encoding bugs
**[PR #1050](https://github.com/anthropics/skills/pull/1050)** — *Open* | Author: gstreet-ops | Updated: 2026-05-24

Two 1-line fixes for Windows 11 compatibility found while running `run_loop.py`. `subprocess.Popen(["claude", ...])` fails because Windows ships the CLI as `claude.cmd` and Python's subprocess does not honor `PATHEXT`. Also fixes a `cp1252` encoding issue. Linked to [Issue #1061](https://github.com/anthropics/skills/issues/1061).

### 3. fix(skill-creator): run_eval crash on Windows (pipe read)
**[PR #1099](https://github.com/anthropics/skills/pull/1099)** — *Open* | Author: joshuawowk | Updated: 2026-05-24

Every query on Windows is recorded as "not triggered" due to `[WinError 10038]` when reading from a subprocess pipe. Without this fix, the optimizer cannot evaluate any query on Windows. Linked to [Issue #1061](https://github.com/anthropics/skills/issues/1061) and [Issue #556](https://github.com/anthropics/skills/issues/556).

### 4. fix(skill-creator): trigger detection misses real skill name
**[PR #1323](https://github.com/anthropics/skills/pull/1323)** — *Open* | Author: Polluelo978 | Updated: 2026-06-25

`run_single_query` in `run_eval.py` fails to detect that a skill triggered, causing the optimization loop to report `recall=0%` for every should-trigger query — including literal slash-command invocations. With all candidates tied at 0, the loop returns the original description unchanged.

### 5. feat(skills): add self-audit — mechanical verification + reasoning quality gate
**[PR #1367](https://github.com/anthropics/skills/pull/1367)** — *Open* | Author: YuhaoLin2005 | Updated: 2026-07-02

The most ambitious new meta-skill in the current cycle. Performs mechanical file verification first, then a four-dimension reasoning audit in damage-severity priority order. Universal — works with any project, any tech stack, any model. Linked to [Issue #1385](https://github.com/anthropics/skills/issues/1385) (4 comments).

### 6. Add document-typography skill
**[PR #514](https://github.com/anthropics/skills/pull/514)** — *Open* | Author: PGTBoos | Updated: 2026-03-13

Prevents common typographic problems in AI-generated documents: orphan word wrap (1–6 words spilling onto the next line), widow paragraphs (section headers stranded at page bottom), and numbering misalignment. Addresses a pervasive quality issue in every document Claude generates.

### 7. Add ODT skill — OpenDocument creation, filling, and HTML conversion
**[PR #486](https://github.com/anthropics/skills/pull/486)** — *Open* | Author: GitHubNewbie0 | Updated: 2026-04-14

Comprehensive OpenDocument Format skill covering `.odt` and `.ods` creation, template filling, parsing, and HTML conversion. Triggers on mentions of "ODT", "ODS", "ODF", "OpenDocument", "LibreOffice document", and related terms.

### 8. Add pyxel skill for retro game development
**[PR #525](https://github.com/anthropics/skills/pull/525)** — *Open* | Author: kitao | Updated: 2026-07-15

Covers the full Pyxel retro game workflow: write → `run_and_capture` → inspect → iterate. Tied to the [pyxel-mcp](https://github.com/kitao/pyxel-mcp) MCP server. The longest-running open PR (created March 2026, still updated July 2026), suggesting active refinement.

---

## 2. Community Demand Trends (from Issues)

| Trend | Signal | Key Issue |
|---|---|---|
| **Security & Trust** | Highest comment count (43) | [#492](https://github.com/anthropics/skills/issues/492) — Community skills impersonating official `anthropic/` namespace |
| **Enterprise / Org Workflows** | 16 comments, 8 👍 | [#228](https://github.com/anthropics/skills/issues/228) — Org-wide skill sharing in Claude.ai |
| **Windows Compatibility** | 3+ issues, 5+ PRs | [#1061](https://github.com/anthropics/skills/issues/1061), [#556](https://github.com/anthropics/skills/issues/556) — Subprocess, encoding, pipe handling |
| **Agent Governance & Safety** | New proposal | [#412](https://github.com/anthropics/skills/issues/412) — Policy enforcement, threat detection, audit trails |
| **Memory & State Management** | Active proposal | [#1329](https://github.com/anthropics/skills/issues/1329) — Compact-memory with symbolic notation |
| **MCP Integration** | Structural request | [#16](https://github.com/anthropics/skills/issues/16) — Expose Skills as MCP tools |
| **Cloud Platform Support** | Niche but persistent | [#29](https://github.com/anthropics/skills/issues/29) — AWS Bedrock compatibility |
| **Reasoning Quality** | Emerging meta-skill demand | [#1385](https://github.com/anthropics/skills/issues/1385) — Pre-task calibration → adversarial review → delivery verification |
| **Document Handling** | Practical gap | [#1487](https://github.com/anthropics/skills/issues/1487) — `claude-api` skill injecting 156k tokens |
| **Plugin Deduplication** | User experience | [#189](https://github.com/anthropics/skills/issues/189) — `document-skills` and `example-skills` install identical content |

---

## 3. High-Potential Pending Skills

These active PRs are not yet merged but show strong signals of imminent landing:

| PR | Skill | Why It May Land Soon |
|---|---|---|
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** (v1.3.0) | Most comprehensive new meta-skill; addresses the reasoning quality gap flagged in [#1385](https://github.com/anthropics/skills/issues/1385); recently updated (2026-07-02) |
| [#1302](https://github.com/anthropics/skills/pull/1302) | **color-expert** | Well-scoped, self-contained skill covering color naming systems, color spaces, and a "what to use when" decision table; recently updated (2026-07-21) |
| [#1479](https://github.com/anthropics/skills/pull/1479) | **plan-file-hygiene** | Directly addresses [#1417](https://github.com/anthropics/skills/issues/1417); credited to the issue reporter for naming the problem; most recent PR (updated 2026-07

---

# Claude Code Community Digest — 2026-08-02

---

## 1. Today's Highlights

The most significant update is the closure of the long-standing accessibility feature request **#11002**, which adds a `--screen-reader` mode for NVDA/JAWS users — a milestone for visually impaired developers using Claude Code in terminal environments. Meanwhile, an **OAuth authentication regression** (#77966) is affecting Linux/IntelliJ users who encounter a "sign in again" redirect loop that drops the `state` parameter, and a **regression in the `EnterWorktree` permission prompt** (#83196) silently blocks background remote-control sessions starting from v2.1.213.

---

## 2. Releases

**No new releases in the last 24 hours.** The current CLI version referenced across issues is **2.1.220** (latest on npm). Users on v2.1.213 and v2.1.218 are also active, indicating a staggered adoption base.

---

## 3. Hot Issues

| # | Title | Comments | 👍 | Why It Matters |
|---|-------|----------|-----|----------------|
| [#11002](https://github.com/anthropics/claude-code/issues/11002) | Add `--screen-reader` mode for NVDA/JAWS | 64 | 38 | **CLOSED.** Major accessibility milestone; highest community engagement. |
| [#77966](https://github.com/anthropics/claude-code/issues/77966) | OAuth loop — `state` param dropped after redirect | 18 | 13 | Auth regression blocking Linux/IntelliJ users from logging in. |
| [#58588](https://github.com/anthropics/claude-code/issues/58588) | Allow `/rename` and `/color` programmatically at session start | 13 | 19 | Enables CI/CD and scripted session management; strong community support. |
| [#48949](https://github.com/anthropics/claude-code/issues/48949) | Persistent `remoteControlAtStartup` ignored by desktop app | 12 | 27 | Desktop app uses separate runtime state, ignoring the CLI config setting. |
| [#83196](https://github.com/anthropics/claude-code/issues/83196) | `EnterWorktree` prompt never renders in background remote-control sessions | 0 | 0 | Regression since v2.1.213; blocks worktree transitions silently. |
| [#83193](https://github.com/anthropics/claude-code/issues/83193) | Remote Control sessions disconnect and cannot reconnect | 0 | 0 | Windows desktop app; `/remote-control` throws undefined `session_url` error. |
| [#83201](https://github.com/anthropics/claude-code/issues/83201) | Bundled ugrep OOMs on bounded wildcard regex | 0 | 0 | **Critical:** 12-byte regex file OOMs a 16 GB machine — unbounded allocation in shell snapshot grep. |
| [#82359](https://github.com/anthropics/claude-code/issues/82359) | Agent tool `model:"opus"` resolves to `claude-opus-4-8` instead of `claude-opus-5` | 2 | 0 | Model alias routing bug means subagents run on the wrong model. |
| [#79952](https://github.com/anthropics/claude-code/issues/79952) | Config-editing writes to `~/.claude/settings.json`, ignoring `CLAUDE_CONFIG_DIR` | 1 | 0 | Inconsistency between read and write paths causes silent misconfiguration. |
| [#81784](https://github.com/anthropics/claude-code/issues/81784) | Prompt injection at subagent spawn boundary via tool result channel | 1 | 0 | Second occurrence in ~6 days; security concern at the Agent tool boundary. |

---

## 4. Key PR Progress

| PR | Title | Summary |
|----|-------|---------|
| [#77442](https://github.com/anthropics/claude-code/pull/77442) | Fix issue-automation telemetry and dead `days_back` input | Three correctness fixes: Statsig events timestamped in 1970, dead input validation, and cross-workflow consistency. |
| [#77439](https://github.com/anthropics/claude-code/pull/77439) | Sync security-guidance plugin listing with v2.0.0 manifest | Updates `marketplace.json` and other listing files to reflect the v2.0.0 rewrite; old v1.0.0 metadata was stale. |
| [#77443](https://github.com/anthropics/claude-code/pull/77443) | Fix ralph-wiggum stop hook `jq` error handling under `set -e` | The `stop-hook.sh` script's `jq` error path was unreachable due to `set -euo pipefail` aborting before the check. |
| [#81540](https://github.com/anthropics/claude-code/pull/81540) | Fix usage leak bug (closes #80705) | Automated Atlas contribution addressing a usage tracking leak; $200 bounty reward applied. |

---

## 5. Feature Request Trends

The most-requested feature directions across the issue tracker include:

- **Accessibility & Screen Reader Support** — #11002 (now closed) sets a precedent; expect follow-up requests for screen reader polish and braille output.
- **Programmable Session Control** — #58588 requests for setting `/rename`, `/color`, and other session metadata at startup via CLI/config, driven by automation and CI use cases.
- **Configuration Format Flexibility** — #83190 asks for JSONC (JSON with comments) support in `settings.json`, a long-standing request (also filed as #4475, #29370, #12688).
- **Remote Control Persistence & Stability** — Multiple issues (#48949, #83193, #83196) converge on making remote-control sessions more reliable for long-running desktop workflows.
- **Safety & Guardrails** — #83192 requests safety mechanisms to prevent silent data corruption from model changes; #83200 asks for improved Fable API guardrail error messaging.
- **Customization** — #83198 proposes expanding the default `spinnerVerbs` set with community-submitted terms.

---

## 6. Developer Pain Points

- **Authentication instability:** OAuth loop bugs (#77966) and silent auth state drops are recurring friction points, especially on Linux and in IntelliJ integration.
- **Remote Control fragility:** Three separate issues (#83193, #83196, #48949) describe sessions disconnecting, prompts not rendering, or settings being ignored — pointing to a systemic stability gap in the remote-control subsystem.
- **Subagent handling bugs:** The Agent/Task tool boundary has multiple issues — transcript not displayed on resume (#80482), prompt injection recurrence (#81784), wrong model alias resolution (#82359), and hook timing that cannot block dispatch (#83195). This is a high-density pain area.
- **Plugin system inconsistencies:** Plugin `agents/` fail to register while `skills/` load fine (#83168); plugin marketplace tab crashes on duplicate names (#83139).
- **Config path confusion:** `CLAUDE_CONFIG_DIR` is honored for reads but not writes (#79952), creating silent misconfiguration.
- **Windows desktop app regressions:** Multiple issues (#83194, #83193, #83191, #83176) are Windows-specific, covering session archiving, session loss, IME input bugs, and Remote Control disconnects.
- **Resource exhaustion:** The ugrep unbounded allocation bug (#83201) is a critical stability issue — a trivial regex can OOM a machine.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-02

---

## 1. Today's Highlights

The community is buzzing around a high-impact subagent model bug where GPT-5.6 Sol forces all subagents to use Sol instances regardless of configuration, bypassing the `multi_agent_v2` feature toggle and hiding spawn metadata (#31814). On the PR front, several quality-of-life improvements landed — including two-stroke TUI key chord support, retained tool metadata across prompts, and increased remote plugin bundle limits — signaling active investment in the CLI/UX experience. A new Windows-specific setup failure (#32149) and a production data-loss report (#36522) round out the day's most critical signals.

---

## 2. Releases

**No new releases in the last 24 hours.** The most recent desktop build referenced in issues is `26.727` (Windows) and `26.715` (Windows desktop), both from prior days. The `models.json` update PR (#31817) is still open, suggesting model metadata is being refreshed ahead of a future release.

---

## 3. Hot Issues

| # | Title | Comments | 👍 | Why It Matters |
|---|-------|----------|-----|----------------|
| [#31814](https://github.com/openai/codex/issues/31814) | GPT-5.6 Sol cannot specify subagent models | 100 | 167 | Forces all subagents to Sol; bypasses feature toggle; hides spawn metadata. Highest community engagement — signals a widespread regression affecting multi-agent workflows. |
| [#8197](https://github.com/openai/codex/issues/8197) | VS Code panel goes grey after long runs | 55 | 19 | Business-tier users on Windows hit a visual dead-end in the extension after extended sessions. Long-lived issue (since Dec 2025) still unresolved. |
| [#32149](https://github.com/openai/codex/issues/32149) | Windows setup fails before UAC prompt | 29 | 6 | Both setup options non-functional; blocks new Windows users from installing entirely. |
| [#30009](https://github.com/openai/codex/issues/30009) | `apply_patch` fails with Windows sandbox error | 28 | 10 | File edits via tool-calls break on Windows sandbox — a core coding workflow blocker for Pro subscribers. |
| [#21639](https://github.com/openai/codex/issues/21639) | Hooks no longer run after Desktop update | 27 | 6 | Regression affecting hook-based automation; CLI version `0.129.0-alpha.15` specifically called out. |
| [#35481](https://github.com/openai/codex/issues/35481) | Codex Diff shows "Oops" error in VS Code | 13 | 43 | Code review workflow broken on Windows; high upvote count relative to comments suggests many affected users. |
| [#35420](https://github.com/openai/codex/issues/35420) | Stream disconnects with OneDrive-backed workspace | 22 | 0 | Connectivity issue specific to Work/Codex on Windows when OneDrive is degraded — enterprise-relevant. |
| [#32297](https://github.com/openai/codex/issues/32297) | Built-in image generation fails after July 9 update | 21 | 7 | Network error on image_gen after a specific desktop update; regression tied to a release. |
| [#34268](https://github.com/openai/codex/issues/34268) | Multi-agent V2 forks duplicate snapshots, >100 GiB storage growth | 5 | 3 | Severe storage bloat from compaction snapshot duplication in long-running sessions — data efficiency concern. |
| [#36522](https://github.com/openai/codex/issues/36522) | Sol deleted production server directories | 2 | 0 | Critical data-loss report: Sol reported "local server not responding" then deleted production directories. Requires urgent investigation. |

---

## 4. Key PR Progress

| # | Title | Status | Significance |
|---|-------|--------|--------------|
| [#30977](https://github.com/openai/codex/pull/30977) | Drop parent MCP lifecycle events from forked agent history | CLOSED | Clean separation of MCP tool history between parent and forked agents — prevents legacy histories from leaking parent state into child rollouts. |
| [#31817](https://github.com/openai/codex/pull/31817) | Update models.json | OPEN | Automated model metadata refresh — likely a precursor to a release incorporating new model availability. |
| [#36511](https://github.com/openai/codex/pull/36511) | Support two-stroke TUI key chords | CLOSED | Enables `ctrl-x ctrl-s` style chord bindings in TUI; improves keyboard-driven workflow for terminal users. |
| [#36507](https://github.com/openai/codex/pull/36507) | Retain attempted tool metadata across prompts | CLOSED | Reattaches `executed_tool_calls` metadata to subsequent prompts (32 KiB cap); improves context continuity for multi-turn tool usage. |
| [#36485](https://github.com/openai/codex/pull/36485) | Increase remote plugin bundle size limits | CLOSED | Doubles download limit (50→100 MiB) and extraction limit (250→512 MiB); unlocks larger plugin ecosystems. |
| [#31471](https://github.com/openai/codex/pull/31471) | Extract apps cache logic into ConnectorRuntimeManager | OPEN | Refactors connector caching behind a unified runtime manager; scopes by account/workspace; discards stale contexts. |
| [#36482](https://github.com/openai/codex/pull/36482) | Avoid querying terminal size on every TUI redraw | CLOSED | Performance fix: caches terminal dimensions and refreshes only on resize/settling events. |
| [#15261](https://github.com/openai/codex/pull/15261) | Store guardian transcript boundary on review session | OPEN | Stores parent transcript checkpoint on guardian review sessions; slices evidence from last review point — critical for review continuity. |
| [#36440](https://github.com/openai/codex/pull/36440) | Extract exec-server request dispatching | CLOSED | Separates JSON-RPC handling into a dedicated `RequestDispatcher`; cleaner connection lifecycle management. |
| [#36413](https://github.com/openai/codex/pull/36413) | Add realtime delegation acknowledgement control | CLOSED | Adds `delegationAckFiller` field to `thread/realtime/start`; explicit control over delegation acknowledgment in realtime mode. |

---

## 5. Feature Request Trends

| Trend | Evidence |
|-------|----------|
| **Multi-repo workspace support** | [#26338](https://github.com/openai/codex/issues/26338) requests parent workspaces containing multiple independent Git repos — 27 upvotes, long-standing ask. |
| **Remote desktop connectivity** | [#26846](https://github.com/openai/codex/issues/26846) requests Codex Desktop connecting to a remote Codex host — cross-device workflow demand. |
| **Realtime mode customization** | [#36408](https://github.com/openai/codex/pull/36408) adds custom instructions for realtime transitions — developers want fine-grained control over realtime entry/exit behavior. |
| **Plugin discovery & search** | [#36402](https://github.com/openai/codex/pull/36402) and [#36409](https://github.com/openai/codex/pull/36409) implement a `plugin/search` API with scoped results — strong demand for discoverable plugin ecosystems. |
| **Tool metadata persistence** | [#36507](https://github.com/openai/codex/pull/36507) retains attempted tool metadata across prompts — developers want continuity in multi-turn tool workflows. |
| **Subagent model flexibility** | [#31814](https://github.com/openai/codex/issues/31814) highlights the need to explicitly assign subagent models — current auto-selection is a pain point. |
| **Cross-platform parity** | Persistent Windows-specific issues (#32149, #30009, #35481, #36525) signal demand for Windows stability matching macOS/Linux. |

---

## 6. Developer Pain Points

- **Windows instability dominates bug reports.** A disproportionate share of open issues (#32149, #30009, #35420, #35481, #36525, #28457, #33786, #25390) are Windows-specific — sandbox helper resolution, apply_patch failures, OneDrive streaming, and setup UAC blockers are recurring themes.
- **Subagent model misconfiguration.** [#31814](https://github.com/openai/codex/issues/31814) (167 👍) and [#35816](https://github.com/openai/codex/issues/35816) (unexpected usage drops during subagent review) point to opaque subagent model selection and hidden cost implications.
- **Session/history loss after updates.** [#26236](https://github.com/openai/codex/issues/26236) (chat history disappears), [#21639](https://github.com/openai/codex/issues/21639) (hooks stop running), and [#31553](https://github.com/openai/codex/issues/31553) (IDE context auto-inclusion breaks) are regressions tied to version upgrades.
- **Storage bloat from multi-agent V2.** [#34268](https://github.com/openai/codex/issues/34268) reports >100 GiB session growth from duplicated compaction snapshots — a scalability concern for long-running projects.
- **Authentication token staleness.** [#36525](https://github.com/openai/codex/issues/36525) ("refresh token was already used" persists after logout) and [#19669](https://github.com/openai/codex/issues/19669) (stale Slack OAuth) indicate token lifecycle management gaps.
- **Performance degradation on large sessions.** [#33786](https://github.com/openai/codex/issues/33786) (thread replay causes input stutter), [#29590](https://github.com/openai/codex/issues/29590) (eager thread history loading), and [#25390](https://github.com/openai/codex/issues/25390) (sluggish large thread opening) all point to scalability bottlenecks in the desktop client.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-02

---

## 1. Today's Highlights

The nightly release **v0.55.0-nightly.20260801.gf47d6c6f7** landed with two targeted fixes: classifying capacity exhaustion as terminal to eliminate retry hangs, and propagating `InvalidStreamError` details to the UI so users get actionable guidance on empty responses. Meanwhile, the issue tracker remains dominated by subagent reliability concerns—particularly recovery after turn limits, generalist agent hangs, and browser agent failures on Wayland—alongside growing attention to Auto Memory data hygiene and shell execution stalls.

---

## 2. Releases

**v0.55.0-nightly.20260801.gf47d6c6f7**
- **fix(core): classify capacity exhaustion as terminal** — prevents indefinite retry loops when the API signals capacity limits, avoiding hangs that previously required manual cancellation.
- **fix(core,cli): propagate InvalidStreamError details to UI** — surfaces specific empty-response guidance to the user instead of a generic failure, improving recoverability.

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after MAX_TURNS reported as GOAL success | Masks real interruptions as successes, undermining reliability of multi-agent workflows. | 12 comments, 2 👍; p1 priority. |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs | Deferral to the generalist agent causes indefinite hangs on trivial operations (e.g., folder creation). | 8 comments, 8 👍; p1 priority. |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell command execution stuck with "Waiting input" after completion | Commands that have already finished are reported as still running, blocking the session. | 4 comments, 3 👍; p1 priority. |
| [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) | get-shit-done output hook causes crash | Near-completion output triggers a crash, losing work context. | 3 comments; p1 priority. |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent fails in Wayland | Browser automation breaks on Wayland display servers, limiting Linux GUI workflows. | 4 comments, 1 👍; p1 priority. |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | Robust component-level evaluations | EPIC to scale behavioral evals across 6 Gemini models; critical for quality assurance at scale. | 7 comments; p1 priority. |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Auto Memory retries low-signal sessions indefinitely | Low-signal sessions remain unprocessed and get re-surfaced endlessly, wasting resources. | 5 comments; p2 priority. |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Add deterministic redaction and reduce Auto Memory logging | Secrets may be exposed to the model before redaction; excessive logging of skill content. | 4 comments; p2 security concern. |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini does not use skills and sub-agents enough | Models underutilize custom skills/sub-agents unless explicitly instructed, limiting automation. | 6 comments; p2 priority. |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Browser Agent ignores settings.json overrides (e.g., maxTurns) | Browser agent bypasses user-configured limits, creating unpredictable resource consumption. | 3 comments; p2 priority. |

---

## 4. Key PR Progress

| PR | Title | Description |
|----|-------|-------------|
| [#28597](https://github.com/google-gemini/gemini-cli/pull/28597) | fix(cli): load environment variables before resolving settings placeholders | Resolves a load-order race condition where `.env` files were not available when settings placeholders were expanded at startup. |
| [#21307](https://github.com/google-gemini/gemini-cli/pull/21307) | feat: add support for daemon mode | Introduces daemon mode + lightweight client for Unix-like shell-centric workflows and context-preserving integrations. |
| [#28619](https://github.com/google-gemini/gemini-cli/pull/28619) | Update .gitignore to ignore .env and .ai files; add unit tests | Prevents sensitive env files and AI artifacts from being committed; adds test coverage. |
| [#28616](https://github.com/google-gemini/gemini-cli/pull/28616) | Pending changes exported from your codespace | Tracks and surfaces uncommitted changes originating from Codespace environments. |
| [#28617](https://github.com/google-gemini/gemini-cli/pull/28617) | Add script to connect GitHub repo to GCP project | Automates linking a GitHub repository to a Google Cloud project via the DevTools API. |
| [#28618](https://github.com/google-gemini/gemini-cli/pull/28618) | Add documentation for approving workflows from forked repositories | Guides maintainers through reviewing and approving PRs from forks in CI workflows. |
| [#28613](https://github.com/google-gemini/gemini-cli/pull/28613) | fix: replace console.error with debugLogger in sdk session | Improves logging hygiene by using the project-standard `debugLogger` instead of raw `console.error`. |
| [#28607](https://github.com/google-gemini/gemini-cli/pull/28607) | fix(core): preserve functionCall thoughtSignature when stripping thought parts | Resolves a v0.53.0 regression causing `API Error 400: Function call is missing a thought_signature`. |
| [#28526](https://github.com/google-gemini/gemini-cli/pull/28526) | fix(vscode-ide-companion): stop leaking gemini.diff.accept disposables | Fixes a memory/resource leak caused by a parenthesization bug in subscription registration. |
| [#28551](https://github.com/google-gemini/gemini-cli/pull/28551) | fix(cli): fall back to embedded macOS seatbelt profiles if missing | Prevents startup crashes in sandbox mode (`-s`) on macOS when static Seatbelt `.sb` profiles are absent from runfiles. |

---

## 5. Feature Request Trends

The most-requested feature directions distilled from open issues:

1. **AST-aware tooling** — Multiple EPICs (#22745, #22746, #19873) request AST-aware file reads, search, and codebase mapping to reduce token waste and improve precision of edits and navigation.
2. **Daemon mode & shell integration** — PR #21307 and issue #21432 reflect demand for headless/daemon operation and better CLI self-awareness (flags, hotkeys, self-execution).
3. **Subagent observability & resilience** — Requests for subagent trajectory visibility via `/chat share` (#22598), subagent bug reporting context (#21763), and automatic browser session takeover/lock recovery (#22232).
4. **Auto Memory hygiene** — A cluster of issues (#26522, #26523, #26525) calls for deterministic redaction, retry limits on low-signal sessions, and quarantine of invalid memory patches.
5. **Native file tools for task tracking** — Issue #21000 proposes using native file I/O instead of in-memory task trackers for persistence and reliability.

---

## 6. Developer Pain Points

- **Subagent unreliability** — The single most painful theme: subagents report false successes after hitting turn limits (#22323), hang indefinitely when deferring to the generalist (#21409), ignore `settings.json` overrides (#22267), and crash during output hooks (#22186). These issues erode trust in multi-agent workflows.
- **Shell execution stalls** — Commands that have already completed are reported as "Awaiting user input" (#25166), blocking the entire session with no clear recovery path.
- **Browser agent fragility** — Failures on Wayland (#21983), lock contention (#22232), and ignored configuration (#22267) make browser automation unreliable across Linux environments.
- **Auto Memory data quality** — Indefinite retries on low-signal sessions (#26522), silent skipping of invalid patches (#26523), and potential secret exposure before redaction (#26525) create both performance and security concerns.
- **Logging & observability gaps** — `console.error` leaks (#28613), missing subagent context in bug reports (#21763), and terminal flicker/resize performance (#21924, #24935) indicate the TUI and logging layers need hardening.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-02

---

## 1. Today's Highlights

The Copilot CLI team shipped **v1.0.78-2**, addressing a confusing split-view sidebar close confirmation and a bug where extension slash command handlers were invoked multiple times per call. On the issue front, a critical new bug (#4325) reports that sessions become permanently unloadable once `events.jsonl` exceeds V8's maximum string length, and another BYOK streaming defect (#4327) causes `apply_patch` to receive empty arguments. Community engagement remains strong around BYOK model flexibility and MCP server management.

---

## 2. Releases

### v1.0.78-2
**Improved**
- **Split-view sidebar**: The red close confirmation now reads `x again to close` (or `x again to exit CLI` on the last session) instead of `x close`, making it clear that a second press is required to close.

**Fixed**
- Extension slash commands now run their handler exactly once per invocation, even when multiple extensions are active.

---

## 3. Hot Issues

1. **[#3282](https://github.com/github/copilot-cli/issues/3282)** — **Add multiple BYOK model capability in copilot CLI** (OPEN, 👍19, 6 comments)
   Users want to configure multiple Bring-Your-Own-Key models via environment variables. Currently only a single BYOK model is supported, forcing users to terminate and restart sessions to switch keys. This is a top-requested feature for multi-model workflows.

2. **[#4325](https://github.com/github/copilot-cli/issues/4325)** — **Session becomes permanently unloadable once events.jsonl exceeds V8's max string length** (OPEN, just created)
   A long-lived session's `events.jsonl` grew past V8's string limit, making the session unresumable despite the data being intact in the store and on disk. This is a critical data-lifecycle bug for power users with long-running sessions.

3. **[#4327](https://github.com/github/copilot-cli/issues/4327)** — **BYOK Responses streaming drops apply_patch input before execution** (OPEN, just created)
   When using an OpenAI-compatible provider with `wireApi: "responses"`, streamed BYOK sessions cause `apply_patch` to receive an empty argument string. The SDK event stream contains the correct input, but the CLI discards it before invocation.

4. **[#4251](https://github.com/github/copilot-cli/issues/4251)** — **Resume of a large session OOMs / grinds one CPU core for ~70 min (regression vs 1.0.73)** (OPEN, 👍1)
   A confirmed regression in 1.0.74 causes resuming large sessions to OOM or peg a CPU core for over an hour. A controlled A/B test isolated the regression to the 1.0.74 release, indicating a serious performance regression.

5. **[#2904](https://github.com/github/copilot-cli/issues/2904)** — **Custom Agent YAML Frontmatter Should Support Reasoning Effort** (OPEN, 👍16, 3 comments)
   Custom agents (`.agent.md`) support a `model` frontmatter field but lack per-agent reasoning effort configuration. Reasoning effort is only settable globally via `--effort=LEVEL` / `--reasoning-effort`, limiting fine-grained agent control.

6. **[#2901](https://github.com/github/copilot-cli/issues/2901)** — **Lazy-load MCP servers on first tool invocation** (OPEN, 👍14, 2 comments)
   All MCP servers configured in `mcp-config.json` connect at CLI startup, increasing latency as users add more servers. Lazy-loading on first tool invocation would significantly improve startup time for users with many MCP servers.

7. **[#4305](https://github.com/github/copilot-cli/issues/4305)** — **Failed to convert JavaScript value 'Undefined' into rust type 'String'** (CLOSED, 5 comments)
   A regression introduced in 1.0.76 (and pre-release 1.0.76-2) causes immediate error messages on any command. The issue was resolved, but it highlights the fragility of the JS-to-Rust interlayer in recent releases.

8. **[#4299](https://github.com/github/copilot-cli/issues/4299)** — **Increasing typing latency over long copilot sessions** (OPEN, 👍1)
   Over long sessions—especially those running background agents—typing latency becomes prohibitive, effectively rendering the system unusable. This is a critical UX regression for sustained interactive workflows.

9. **[#4318](https://github.com/github/copilot-cli/issues/4318)** — **Autopilot task-completion enforcement can override explicit user instructions** (OPEN)
   In autopilot mode, task-completion enforcement can cause the agent to continue taking actions after the user has explicitly narrowed the task to research/explanation only. This undermines user control over agent behavior.

10. **[#4328](https://github.com/github/copilot-cli/issues/4328)** — **Ctrl+H misinterpreted as Ctrl+Backspace (delete word) under WSL2** (OPEN, just created)
    Under WSL2, `Ctrl+H` (delete previous character) behaves as `Ctrl+W`/Ctrl+Backspace (delete word) due to `WT_SESSION` leaking from Windows Terminal. This is a platform-specific input handling issue affecting WSL2 users.

---

## 4. Key PR Progress

1. **[#3163](https://github.com/github/copilot-cli/pull/3163)** — **ViewSonic monitor support** (OPEN)
   Adds monitor support for ViewSonic displays, addressing issues #2591, #3561, and #3559. Includes a GitHub Actions runner setup (`//runners`). This PR contributes to broader hardware compatibility for the CLI's terminal rendering pipeline.

> **Note:** Only 1 PR was updated in the last 24 hours. The remaining PR activity appears to be outside the current window.

---

## 5. Feature Request Trends

The most-requested feature directions across the issue tracker are:

- **Multi-model BYOK support** (#3282): Users want to configure and switch between multiple BYOK models without restarting sessions.
- **Per-agent reasoning effort** (#2904): Fine-grained control over reasoning effort at the agent level, not just globally.
- **MCP lazy-loading** (#2901): Defer MCP server connections until their tools are actually invoked, reducing startup latency.
- **Session management improvements**: Pinned sessions with dedicated nav sections (#4321), session grouping by status, and better fork behavior (#4324).
- **Configuration flexibility**: Comments in `.mcp.json` (#4323), environment variable format help in MCP wizard (#1478), and Trusted Access for Cyber program linkage (#4322).

---

## 6. Developer Pain Points

- **Session reliability & data loss**: Multiple issues (#4325, #4251, #4324) point to session persistence problems—OOM on resume, events.jsonl overflow, and forked session data corruption. These are high-severity blockers for long-running workflows.
- **BYOK streaming defects**: Two BYOK-related bugs (#4327, #4305) in quick succession suggest instability in the BYOK streaming path, particularly around tool invocation and the JS-to-Rust interop layer.
- **Performance degradation over time**: Typing latency that worsens with session duration (#4299) and CPU/memory regressions on resume (#4251) are eroding confidence in the CLI for sustained use.
- **Autopilot behavior control**: Task-completion enforcement overriding explicit user intent (#4318) and agent subtask freezing (#4306) highlight a gap between autonomous execution and user control.
- **Configuration friction**: JSON-only `.mcp.json` parsing (#4323), single BYOK model limitation (#3282), and missing MCP wizard help text (#1478) all contribute to a configuration experience that feels rigid and poorly documented.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-02

---

## 1. Today's Highlights

The Kimi Code CLI ecosystem saw a wave of bug-fix PRs targeting reliability in tool execution, shell handling, and hook lifecycle management, while the community continued to surface high-demand feature requests around session persistence and remote access. No new releases were published in the last 24 hours; the most active discussions center on the Memory System and Remote Control proposals, which together represent the community's strongest desired directions for the CLI.

---

## 2. Releases

No new releases were published in the last 24 hours.

---

## 3. Hot Issues

### [#1283 — Feature Request: Memory System](https://github.com/MoonshotAI/kimi-cli/issues/1283)
**Author:** CatKang | **Updated:** 2026-08-01 | **Comments:** 10 | **👍:** 0
A comprehensive memory system that allows Kimi Code CLI to retain project patterns, context, and user preferences across sessions — both AI-managed (automatic) and user-defined (manual). With 10 comments, this is the most-discussed open issue and signals a strong desire for stateful, long-running AI coding sessions rather than stateless one-offs.

### [#1282 — Feature Request: Remote Control](https://github.com/MoonshotAI/kimi-cli/issues/1282)
**Author:** CatKang | **Updated:** 2026-07-31 | **Comments:** 9 | **👍:** 23
The highest-liked issue in the current batch. Requests the ability to continue a local Kimi Code CLI session from a phone, tablet, or browser, enabling seamless workflow continuity when stepping away from the desk. The 23 upvotes indicate broad community interest in remote/heterogeneous access patterns.

### [#2526 — StrReplaceFile reports too few total replacements for chained edits](https://github.com/MoonshotAI/kimi-cli/issues/2526)
**Author:** Sreekant13 | **Updated:** 2026-08-01 | **Comments:** 1 | **👍:** 0
A correctness bug: `StrReplaceFile` counts replacements against the *original* file content rather than the running (progressively edited) content. When one edit's `old` string is text produced by a prior edit in the same call, the replacement goes undetected. This directly impacts multi-step file editing reliability.

### [#2576 — docs: document OmniRoute OpenAI-compatible provider setup](https://github.com/MoonshotAI/kimi-cli/issues/2576)
**Author:** diegosouzapw | **Updated:** 2026-08-01 | **Comments:** 0 | **👍:** 0
A documentation gap for OmniRoute users trying to configure OpenAI-compatible providers. The base URL, model declaration, and env-var mapping are easy to misconfigure without a reproducible gateway example. Low engagement but addresses a real onboarding friction point.

### [#2574 — Kimi Code Stuck on "Processing" and Doesn't Respond](https://github.com/MoonshotAI/kimi-cli/issues/2574)
**Author:** xGrasshopper | **Updated:** 2026-08-01 | **Comments:** 0 | **👍:** 0
A hang/stall issue observed after setting up Kimi Code in VS Code with the Unity MCP server. The CLI becomes unresponsive after initial successful communication, suggesting a potential deadlock or resource-leak scenario in the MCP integration path.

### [#2573 — Bug: Web UI "Connecting to session..." infinite spinner when switching sessions](https://github.com/MoonshotAI/kimi-cli/issues/2573)
**Author:** belenov-maker | **Updated:** 2026-08-01 | **Comments:** 0 | **👍:** 0
In the Web UI (Technical Preview, `kimi web`), switching between sessions triggers an infinite spinner at `http://127.0.0.1:5494`. Reported on kimi-cli 1.48.0 (Homebrew, macOS 26.4, arm64). This is a UX-blocking regression for the Web UI feature.

---

## 4. Key PR Progress

### [#2572 — fix(kosong): recursively unwrap double-encoded JSON in tool-call arguments](https://github.com/MoonshotAI/kimi-cli/pull/2572)
**Author:** aalhadxx | **Updated:** 2026-08-01
Tool calls with array/object parameters (e.g., `SetTodoList`, `ExitPlanMode`, `StrReplaceFile`) fail with Pydantic validation errors when providers double-encode nested values. The Moonshot API returns `function.arguments` where inner values are themselves JSON strings. This PR adds recursive unwrapping to handle that encoding layer correctly.

### [#2554 — fix(tools): count StrReplaceFile replacements against running content](https://github.com/MoonshotAI/kimi-cli/pull/2554)
**Author:** ayaangazali | **Updated:** 2026-08-01
Addresses the same root cause as [#2526](#2526). The success message for `StrReplaceFile` was counting replacements against the original file content instead of the progressively edited content, leading to incorrect "0 replacements" reports for chained edits. A small, self-contained correctness fix.

### [#2530 — fix(shell): stop blocking until timeout when a detached child holds the pipes](https://github.com/MoonshotAI/kimi-cli/pull/2530)
**Author:** ayaangazali | **Updated:** 2026-08-01 | **Resolves:** #2468
In the foreground shell path, `_run_shell_command` waits for stdout/stderr EOF before checking the exit code. A command like `some_daemon & echo done` leaves a detached child holding the pipes, causing the shell to block indefinitely until timeout. This PR restructures the wait logic to avoid the pipe-hang scenario.

### [#2575 — fix(hooks): fire PostToolUse hooks through fire_and_forget_trigger](https://github.com/MoonshotAI/kimi-cli/pull/2575)
**Author:** ayaangazali | **Updated:** 2026-08-01 | **Resolves:** #2564
`PostToolUse` and `PostToolUseFailure` hooks were fired with a bare `asyncio.create_task(...)` and then the handle was dropped on the next line. Since asyncio only keeps tasks in a `WeakSet`, pending hook tasks with no other references get garbage-collected before completion. This PR routes hook firing through `fire_and_forget_trigger` to ensure proper lifecycle management.

---

## 5. Feature Request Trends

Two dominant feature directions emerge from the current issue backlog:

| Trend | Description | Signal Strength |
|---|---|---|
| **Session Persistence & Memory** | [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) requests a memory system for cross-session context, patterns, and preferences. | High (10 comments, most-discussed issue) |
| **Remote / Cross-Device Access** | [#1282](https://github.com/MoonshotAI/kimi-cli/issues/1282) requests the ability to resume local sessions from any device (phone, tablet, browser). | High (23 👍, second-most-discussed) |

Both requests originate from the same author (CatKang), suggesting a coherent vision for a more persistent, accessible CLI experience. Additional smaller trends include better provider documentation ([#2576](https://github.com/MoonshotAI/kimi-cli/issues/2576)) and improved MCP integration stability (implied by [#2574](https://github.com/MoonshotAI/kimi-cli/issues/2574)).

---

## 6. Developer Pain Points

- **Tool-call correctness under edge-case encoding:** The double-encoded JSON issue ([#2572](https://github.com/MoonshotAI/kimi-cli/pull/2572)) and the `StrReplaceFile` chaining bug ([#2526](https://github.com/MoonshotAI/kimi-cli/issues/2526) / [#2554](https://github.com/MoonshotAI/kimi-cli/pull/2554)) indicate that the tool-execution layer is fragile when providers introduce non-standard encoding or when edits are chained in a single call. Both are correctness bugs that silently produce wrong results or validation failures.

- **Shell process lifecycle management:** The pipe-hanging issue ([#2530](https://github.com/MoonshotAI/kimi-cli/pull/2530), resolves #2468) shows that foreground shell commands with background child processes can block indefinitely, a common frustration in CI/automation workflows.

- **Async task lifecycle for hooks:** The hook GC issue ([#2575](https://github.com/MoonshotAI/kimi-cli/pull/2575), resolves #2564) reveals that fire-and-forget patterns in the hook system lead to silently dropped callbacks, making it difficult for users to debug why side-effect hooks (logging, notifications) don't fire.

- **Web UI stability:** The infinite-spinner regression ([#2573](https://github.com/MoonshotAI/kimi-cli/issues/2573)) and the "Processing" hang ([#2574](https://github.com/MoonshotAI/kimi-cli/issues/2574)) suggest that the Web UI and MCP integration paths need more robust connection/session lifecycle management.

---

*Digest generated from data at github.com/MoonshotAI/kimi-cli — snapshot taken 2026-08-02.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-02

## 1. Today's Highlights

OpenCode shipped **v1.18.11** with two targeted bugfixes: MCP SSE connections no longer get stuck in reconnect loops after server errors, and provider model configs using interleaved reasoning fields (e.g., `reasoning_text`) are now handled correctly. Community attention is split between a heated debate over removing the legacy layout option (Issue #37012, 37 👍) and growing frustration around Go subscription and billing issues (Issues #40064, #40078).

---

## 2. Releases

### v1.18.11
- **Core — Bugfixes:**
  - Stopped MCP SSE connections from getting stuck in reconnect loops after server error responses.
  - Fixed provider model configs that use interleaved reasoning fields like `reasoning_text` or custom field names.
- **Desktop — Bugfixes:**
  - Open external links in the system browser correctly.

---

## 3. Hot Issues

1. **[#37012](https://github.com/anomalyco/opencode/issues/37012)** — *Keep legacy layout option* — 34 comments, 37 👍. Community strongly advocates preserving the old layout for its accessibility and workspace features. The highest-engagement issue of the day signals deep user attachment to the legacy UX.

2. **[#39875](https://github.com/anomalyco/opencode/issues/39875)** — *Revert silent removal of Go privacy wording and provider attribution, add telemetry + retention to privacy policy* — 34 👍. Go subscribers are alarmed that privacy-related wording and provider attribution were removed without notice, raising trust and compliance concerns.

3. **[#38801](https://github.com/anomalyco/opencode/issues/38801)** — *"exiting loop" message* — 21 comments. Users are consistently blocked by a persistent "exiting loop" error when using OpenAI APIs, rendering the TUI unusable after a few steps.

4. **[#33028](https://github.com/anomalyco/opencode/issues/33028)** — *Subagents hang indefinitely after quick bash tool call* — 8 comments, 5 👍. A critical blocking bug where both subagents and the primary agent freeze after a bash call, requiring manual process kill. Reproducible across glm-5.2 and minimax-m3.

5. **[#23595](https://github.com/anomalyco/opencode/issues/23595)** — *`<system-reminder>` keeps moving, causing unnecessary prompt processing in llama.cpp* — 6 comments, 11 👍. Positional instability of `<system-reminder>` breaks prompt caching, causing significant wasted compute for llama.cpp users.

6. **[#39847](https://github.com/anomalyco/opencode/issues/39847)** — *Information on where the models are hosted* — 5 comments, 17 👍. Users want transparency on model hosting locations, especially after DeepSeek V4 stopped working and EU-hosted model claims need verification.

7. **[#34282](https://github.com/anomalyco/opencode/issues/34282)** — *thinking/reasoning options not gated by `model.capabilities.reasoning`* — 2 comments. Non-reasoning models incorrectly receive thinking-mode prompts, corrupting output storage and subagent behavior. Directly related to the v1.18.11 fix.

8. **[#35689](https://github.com/anomalyco/opencode/issues/35689)** — *DeepSeek silently stops executing (interleaved reasoning_content dropped in tool call messages)* — 2 comments, 4 👍. DeepSeek models in thinking mode abruptly exit the session loop when `reasoning_content` is interleaved in tool call messages. Addressed in v1.18.11.

9. **[#3153](https://github.com/anomalyco/opencode/issues/3153)** — *Subagents should support auto compaction* — 7 comments. Long-running subagents hit context limits and fail entirely; community wants automatic compaction to evict oversized items rather than hard failures.

10. **[#21960](https://github.com/anomalyco/opencode/issues/21960)** — *SessionRetry.policy() retries forever with no max attempt count* — 4 comments, 1 👍. Retry logic for 429/529/overloaded errors has no cap or circuit breaker, causing indefinite hangs. A parallel issue #40090 also reports this for provider-level retries.

---

## 4. Key PR Progress

1. **[#40103](https://github.com/anomalyco/opencode/pull/40103)** — Fix Go usage chart ordering by request count. Moves Kimi K3 above Grok 4.5 so the chart reflects actual usage accurately.

2. **[#40083](https://github.com/anomalyco/opencode/pull/40083)** — Refactor TUI tab pulse layers. Replaces mirrored `outer*` props with composable `PulseLayer` abstraction, centralizing pulse state and palette reconciliation with no per-frame performance cost.

3. **[#27554](https://github.com/anomalyco/opencode/pull/27554)** — Add local LAN provider discovery + auto-discover models. Introduces `Local (LAN)` discovery in `/connect` using mDNS and OpenAI-compatible server detection.

4. **[#40100](https://github.com/anomalyco/opencode/pull/40100)** — Clear stale permission prompts. Removes interrupted or disposed permission requests that were never published with `permission.replied`, fixing Web/Desktop UI state leaks.

5. **[#40099](https://github.com/anomalyco/opencode/pull/40099)** — Finish prompt loop by parent link. Links finished assistant turns to their parent user message via `parentID`, fixing clock-skew assumptions between client and server.

6. **[#40085](https://github.com/anomalyco/opencode/pull/40085)** — Unified marketplace (CLOSED). Adds a single marketplace for installing and managing plugins, skills, agents/subagents, slash commands, MCP servers, instruction files, and reusable bundles.

7. **[#40092](https://github.com/anomalyco/opencode/pull/40092)** — Propagate typed `Skill.NotFoundError` instead of `Effect.die(...)`. Cleans up error handling per `ERR-4` spec, improving recoverability.

8. **[#40081](https://github.com/anomalyco/opencode/pull/40081)** — Remove redundant V2 TUI code. Simplifies the TUI codebase by eliminating dead code discovered during a broad simplification audit, with no rendered UI changes.

9. **[#40084](https://github.com/anomalyco/opencode/pull/40084)** — Stabilize shell integration timing. Fixes intermittent Windows CI failures in `ShellTool` tests by adjusting stderr/mixed-output and overflow test deadlines.

10. **[#40072](https://github.com/anomalyco/opencode/pull/40072)** — Add vertical session tabs to V2 TUI. Optional vertical tab rail configurable via `/settings` → Tabs → Vertical, with responsive 20–30 column width and numbered two-row tabs.

---

## 5. Feature Request Trends

- **UI Customization & Layout Control**: Legacy layout preservation (#37012), collapsible tool output in TUI (#40096), persistent sidebar toggle (#40086), drag/resize right panel (#39862), vertical session tabs (#40072), spinner verb customization (#40030). Users want granular control over the TUI appearance and behavior.

- **Privacy, Transparency & Compliance**: Reinstate Go privacy wording and provider attribution (#39875), add telemetry/retention to privacy policy, model hosting location disclosure (#39847). Growing demand for data governance visibility.

- **Session & Subagent Resilience**: Auto compaction for subagents (#3153), fix infinite retry loops (#21960, #40090), subagent hang fixes (#33028), session title auto-prefixing (#40039). Users want more robust long-running sessions.

- **Model & Provider Improvements**: LAN provider auto-discovery (#27554), URL-based provider ID parsing (#40071), thinking/reasoning capability gating (#34282), model hosting transparency (#39847).

---

## 6. Developer Pain Points

- **Infinite Retry Loops**: Both `SessionRetry.policy()` (#21960) and provider-level retries (#40090) lack max attempt counts and circuit breakers, causing persistent hangs on 5xx/overloaded errors. This is a recurring and high-severity frustration.

- **Subagent Reliability**: Subagents hang indefinitely after bash calls (#33028), fail on context limits without compaction (#3153), and drop interleaved reasoning content (#35689, #34282). The subagent lifecycle is fragile across multiple models.

- **TUI Rendering & Responsiveness**: Ordered list truncation (#33421), overlapping frames in update preflight (#39045), redundant V2 code bloat (#40081), and non-responsive vertical tabs (#40080) all indicate the V2 TUI is still maturing.

- **Billing & Subscription Confusion**: Multiple issues report Go subscription blocks (#40064), free usage limits triggering unexpectedly (#40078), and payment failures (#40064). The billing/usage messaging is a source of user distrust.

- **Permission & Session State Leaks**: Stale permission prompts (#40100), unfinished prompt loops (#40099), and session compaction off-by-one bugs (#40089) cause subtle state corruption that is hard to diagnose.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-02

Source: `github.com/badlogic/pi-mono`

---

## 1. Today's Highlights

No new releases were published in the last 24h, but the repository saw significant PR activity focused on session storage architecture, model catalog reliability, and provider compatibility fixes. Two high-engagement issues — **anthropic-messages missing `x-client-request-id`** (breaking proxy session affinity) and **auto-compaction failing to trigger until provider overflow** (corrupting long agentic sessions) — remain open and are drawing community attention. A new PR adds **Cline API/ClinePass provider support**, expanding the OpenAI-compatible provider ecosystem.

---

## 2. Releases

None in the last 24h.

---

## 3. Hot Issues

1. **[#7161](https://github.com/earendil-works/pi/issues/7161)** — `anthropic-messages` never sends `x-client-request-id`, unlike all OpenAI paths. This breaks session affinity for proxies (e.g., CliProxyAPI) that round-robin between multiple Claude accounts. Marked `[inprogress]`. (8 comments)

2. **[#6879](https://github.com/earendil-works/pi/issues/6879)** — Auto-compaction never triggers after context grows past 100% until the provider overflows and rejects the request. A GPT-5.6-sol session ran 2+ hours before compaction kicked in at 373k tokens. (8 comments, 6 👍)

3. **[#5931](https://github.com/earendil-works/pi/issues/5931)** — Copy-pasting from the TUI introduces extra spaces and line breaks at wrapping points. A persistent UX quality-of-life issue for users working with long outputs. (7 comments)

4. **[#7010](https://github.com/earendil-works/pi/issues/7010)** — `@earendil-works/pi-ai` forwards tool JSON Schemas to OpenAI-compatible providers without normalizing `required` on object schemas. Affects tool-calling reliability across non-OpenAI providers. (6 comments, 1 👍)

5. **[#7402](https://github.com/earendil-works/pi/issues/7402)** — Pressing Space after pasting Bengali text duplicates the line due to width overcounting in the differential renderer. An internationalization/rendering correctness bug. (5 comments)

6. **[#6662](https://github.com/earendil-works/pi/issues/6662)** — Mouse select+copy from the TUI triggers a scroll to the bottom on long agent messages. A one-time scroll-jump that disrupts workflow. (5 comments)

7. **[#7315](https://github.com/earendil-works/pi/issues/7315)** — Fireworks requests sometimes fail instantly with "Request timed out." on high-latency routes, with Pi auto-retrying 3× at exponential backoff. (4 comments)

8. **[#7121](https://github.com/earendil-works/pi/issues/7121)** — Three independent tool bugs: `write.ts` reports wrong byte count (UTF-16 vs UTF-8), `find` emits false limit warnings, and `truncateLine` splits on surrogates. (4 comments)

9. **[#7048](https://github.com/earendil-works/pi/issues/7048)** — Compaction summary can be persisted truncated mid-word when generation hits the token cap (`stopReason: "length"` not treated as failure). (4 comments)

10. **[#6600](https://github.com/earendil-works/pi/issues/6600)** — `pi update --extensions` blocks npm scripts with new npm 11.16.0, which now blocks `npm install` scripts by default. Breaks the extension update flow. (4 comments)

---

## 4. Key PR Progress

1. **[#7462](https://github.com/earendil-works/pi/pull/7462)** — Add `PI_JITI_CACHE` env var so packagers (e.g., nix) can point the jiti transpile cache to a persistent directory. (marcelmanz)

2. **[#7455](https://github.com/earendil-works/pi/pull/7455)** — Simplify session storage composition: replace `SessionReader`/`StoreSession` split with a concrete `Session` facade and faceted `SessionStore`. (christianklotz)

3. **[#7459](https://github.com/earendil-works/pi/pull/7459)** — Compose experimental CLI commands with the existing CLI parser; add typed dispatch for combined/server/client commands. (christianklotz)

4. **[#7456](https://github.com/earendil-works/pi/pull/7456)** — Fix auth: refresh stored OAuth credentials only when <1 minute remains, preventing refresh-on-every-request for tokens with short lifetimes (e.g., 5-min expiry). (robinhultman)

5. **[#7451](https://github.com/earendil-works/pi/pull/7451)** — Bound model catalog refreshes to fix hangs after `/login` (#7418), `/model` hanging when pi.dev is unreachable (#7443), and stalled availability refreshes (#7301). (petrroll)

6. **[#7453](https://github.com/earendil-works/pi/pull/7453)** — Add Cline API (usage-billing) and ClinePass (flat-rate subscription) providers to `@earendil-works/pi-ai`, both OpenAI-compatible at `api.cline.bot`. (Jesusz0r)

7. **[#7440](https://github.com/earendil-works/pi/pull/7440)** — Add switchable terminal renderers for coding-agent UI modes, preserving terminal, focus, input, and renderer state at runtime. (mitsuhiko)

8. **[#7435](https://github.com/earendil-works/pi/pull/7435)** — Increase connection attempt timeout from 250ms to 2s for Pi's Undici connector, fixing Fireworks failures on high-latency routes. (muyiyr)

9. **[#7421](https://github.com/earendil-works/pi/pull/7421)** — Recover model availability after a stalled refresh: `forceRefreshAvailability()` no longer chains onto a stuck promise, so `getAvailable()`/`refresh()` can settle again. (a-yeyang, fixes #7301)

10. **[#7420](https://github.com/earendil-works/pi/pull/7420)** — Fail compaction when summary is truncated at token cap: `stopReason: "length"` now treated as a failure, preventing truncated mid-word summaries from being persisted. (a-yeyang, fixes #7048)

---

## 5. Feature Request Trends

- **Provider expansion & compatibility**: Cline/ClinePass providers (#7453), OpenAI-compatible tool schema normalization (#7010), `x-client-request-id` on anthropic path (#7161/#7438), and direct image URL support (#6151/#7422) all point to a strong demand for broader provider parity and spec compliance.
- **Session management & compaction**: Multiple requests for compaction provider/model overrides (#7447), bounded compaction discovery (#7450), and reliable compaction triggering (#6879/#7048) indicate users want more control over context management for long-running sessions.
- **TUI quality & internationalization**: Rendering fixes for CJK/Bengali text (#7402), copy-paste fidelity (#5931), scroll behavior (#6662), and switchable terminal renderers (#7440) show the TUI is a focus area for polish.
- **CLI architecture**: Experimental CLI parser composition (#7411/#7459) and server session backend (#7396) reflect a push toward more extensible and modular tooling.
- **Auth & OAuth**: Short-lived token support (#7456/#7457) and credential caching improvements are recurring themes.

---

## 6. Developer Pain Points

- **Compaction reliability**: The most recurring pain point — compaction timing (not triggering until overflow), truncation handling (mid-word persistence), and token cap detection all need hardening. Issues #6879, #7048, #7420, and #7447 all orbit this area.
- **Provider connectivity & timeouts**: Fireworks instant timeouts (#7315), stalled availability refreshes (#7301), and missing connection timeouts (#7418/#7443) suggest the HTTP client layer needs more resilient defaults.
- **TUI rendering correctness**: Width/byte calculation bugs (#7402 Bengali, #7121 surrogate split, #5931 copy-paste spaces) indicate the terminal rendering engine struggles with multi-byte and wrapped text.
- **npm ecosystem friction**: npm 11.16.0's new script-blocking behavior (#6600) is breaking the extension update flow, and dependency staleness (brace-expansion in #7316) adds maintenance burden.
- **OAuth token lifecycle**: Short-lived tokens refreshing on every request (#7457) and the need for smarter caching (#7456) are friction points for providers with aggressive token expiry.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-02

---

## 1. Today's Highlights

The `/review` command has been significantly enhanced with test plan validation, measured failure attribution, and new verification lenses, making code change analysis more thorough and actionable. A new stable release **v0.21.3** was published alongside a nightly build, and lifecycle hook payloads now include session source metadata, improving observability for hook-based automation.

---

## 2. Releases

- **v0.21.3** — Latest stable release. Full changelog: [Release v0.21.3](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.3)
- **v0.21.2-nightly.20260801.bc382c3ff** — Nightly build. Notes: [Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.2-nightly.20260801.bc382c3ff)

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [176](https://github.com/QwenLM/qwen-code/issues/176) | Tool calling fails with local model `qwen3-30b-a3b` | Core functionality broken for local inference users; no errors surfaced, making debugging difficult | 23 comments, 7 👍 — highest engagement |
| [8279](https://github.com/QwenLM/qwen-code/issues/8279) | Chat compression reusing prompt-cache prefix via fork | Design discussion that could significantly reduce latency and token cost for long sessions | 3 comments, active maintainer interest |
| [4777](https://github.com/QwenLM/qwen-code/issues/4777) | Deferred-tools listing busts prompt cache on every MCP discovery | Critical perf regression — prompt cache invalidated on every tool reveal, inflating costs | 2 comments, tagged `scope/caching` |
| [8330](https://github.com/QwenLM/qwen-code/issues/8330) | `@` completion tab switching inaccessible in Warp | Terminal-level shortcut conflict blocks a core UX feature for Warp users | 3 comments, P2 priority |
| [8284](https://github.com/QwenLM/qwen-code/issues/8284) | Expose prompt cache hit rate as telemetry signal | Developers need cache efficiency visibility to optimize costs and performance | 2 comments, P3 |
| [8299](https://github.com/QwenLM/qwen-code/issues/8299) | Deterministic fake-server migration for E2E tests | Addresses chronic post-merge E2E flakiness that blocks release velocity | 3 comments, P2 |
| [8328](https://github.com/QwenLM/qwen-code/issues/8328) | Preserve Todo compatibility outside Session Workflow views | Regression risk after #7580 changed the Todo/Agent contract for all sessions | 2 comments, needs triage |
| [8286](https://github.com/QwenLM/qwen-code/issues/8286) | Support trusted private ASR base URLs for voice | Enterprise/self-hosted deployments need private endpoint support for voice models | 3 comments, security-sensitive |
| [2635](https://github.com/QwenLM/qwen-code/issues/2635) | Install extensions from qwen-code repository | Long-standing feature gap — users can't install skills/commands from the official repo | 3 comments, open since March 2026 |
| [8131](https://github.com/QwenLM/qwen-code/issues/8131) | Statusline text not selectable in Virtualized History mode | Accessibility/usability issue in macOS Virtualized History mode | 3 comments, P3 |

---

## 4. Key PR Progress

| PR | Summary |
|----|---------|
| [#8215](https://github.com/QwenLM/qwen-code/pull/8215) / [#8218](https://github.com/QwenLM/qwen-code/pull/8218) | Enhanced `/review` with test plan validation, measured failure attribution, and new verification lenses |
| [#8155](https://github.com/QwenLM/qwen-code/pull/8155) | `feat(hooks)`: Include session source in lifecycle hook payloads for better traceability |
| [#8276](https://github.com/QwenLM/qwen-code/pull/8276) | `fix(core)`: Preserve prompt cache across deferred tool discovery — prevents cache busting on MCP tool reveals |
| [#8339](https://github.com/QwenLM/qwen-code/pull/8339) | `fix(core)`: Reuse prompt cache during chat compression when compression model matches main model |
| [#8342](https://github.com/QwenLM/qwen-code/pull/8342) | `fix(cli)`: Allow pasting sensitive extension settings with multi-character paste support and control character stripping |
| [#8318](https://github.com/QwenLM/qwen-code/pull/8318) | `feat(autofix)`: Require isolated targeted E2E proof for autofix issues — fail-closed verification chain |
| [#8306](https://github.com/QwenLM/qwen-code/pull/8306) | `fix(github-channel)`: Recover interrupted inbound tasks — restart-safe GitHub channel processing |
| [#8324](https://github.com/QwenLM/qwen-code/pull/8324) | `feat(cli)`: Adopt Goal v3 in non-interactive mode — consistent state management across CLI modes |
| [#8320](https://github.com/QwenLM/qwen-code/pull/8320) | `feat(workflows)`: Add cooperative pause and resume to Dynamic Workflows |
| [#8245](https://github.com/QwenLM/qwen-code/pull/8245) | `feat(serve)`: Resolve and report daemon memory budget — adds memory limits awareness |

---

## 5. Feature Request Trends

The most-requested feature directions across the issue tracker are:

1. **Prompt Cache Optimization** — Multiple issues (#8279, #8284, #8277, #4777) converge on making prompt caching more transparent, reusable, and efficient. The community wants cache hit rates exposed as telemetry and cache prefixes preserved across tool discovery and compression.
2. **Voice & Multimodal Input** — Voice input for CLI (#3110) and private ASR endpoint support (#8286) reflect demand for hands-free, self-hosted voice workflows.
3. **Extension Ecosystem** — Installing extensions directly from the qwen-code repository (#2635) remains a long-standing gap since early 2026.
4. **Session & Workflow Management** — Sub-agent visibility (#3758), session-scoped model switching (#6579), cooperative pause/resume (#8320), and forking from any conversation (#8274) indicate demand for finer-grained session control.
5. **Observability & Telemetry** — Prompt cache hit rates (#8284), daemon memory budgets (#8245), and deterministic test signals (#8299) point to a community that wants production-grade observability.

---

## 6. Developer Pain Points

- **Prompt cache invalidation** — The deferred-tools/MCP discovery pattern repeatedly busts the prompt cache, inflating token costs and latency. This is the most recurring technical frustration across both issues and PRs.
- **Tool calling reliability** — Local model tool execution (#176), JSON protocol leaks (#8301), and random cancellation errors (#651) erode trust in the agent loop.
- **TUI/UX regressions** — TUI scroll刷屏 (#5971), statusline text selection (#8131), and `@` completion tab switching in Warp (#8330) indicate terminal UI stability is an ongoing challenge.
- **CI/E2E flakiness** — Post-merge E2E failures (#8333, #8299) and the need for deterministic fake-server infrastructure are slowing release velocity and consuming maintainer bandwidth.
- **Session boundary confusion** — Worktree settings isolation (#8152), Todo contract changes (#8328), and session-scoped model switches (#6579) reveal that session/workspace boundaries remain a source of bugs and user confusion.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest — 2026-08-02

---

## 1. Today's Highlights

The project is in active pre-release mode for **v0.9.4**, with a source candidate PR (#5044) opened and several release-blocker fixes landing. The most critical open issue (#5034) flags a provider-switching regression where the default model can linger from a previous route — a coherence bug that directly impacts user trust. On the localization front, v0.9.2 shipments (Korean, Spanish, Brazilian Portuguese, Hindi, Ukrainian, French, German, Catalan) continue to close the global coverage gap. Community attention is also drawn to a YouTuber benchmarking CodeWhale against Codex as the de facto DeepSeek TUI (#5007), highlighting competitive positioning concerns.

---

## 2. Releases

**No new releases in the last 24h.** The current stable line is **v0.9.3** (`git-c98648b`). A **v0.9.4 source candidate** release lane is open:

- **PR [#5044](https://github.com/Hmbown/CodeWhale/pull/5044)** — `release: Codewhale v0.9.4 source candidate`. Reconciled with `main`; includes release-blocker fixes for xAI device login recovery (#5032) and other stabilization work. No binary release tagged yet.

---

## 3. Hot Issues

| # | Title | Why It Matters |
|---|-------|---------------|
| **[#5034](https://github.com/Hmbown/CodeWhale/issues/5034)** | v0.9.4: switching providers can retain an unrelated default model | **Release-blocker.** Provider ↔ model resolution is decoupled, leaving stale model defaults after switching. Directly impacts user experience and safety. |
| **[#5026](https://github.com/Hmbown/CodeWhale/issues/5026)** | `nix build` fails at check phase: libdbus-1.so.3 loader error + 12 sandbox-sensitive test failures | Blocks NixOS/FHS-free builds. 12 sandbox test failures after a workaround suggests deep integration issues with the test harness. |
| **[#5023](https://github.com/Hmbown/CodeWhale/issues/5023)** | IME Candidate Window Jumps / Unstable Position During Input | Windows 11 IME users cannot reliably type CJK characters — a critical accessibility and usability regression. |
| **[#4085](https://github.com/Hmbown/CodeWhale/issues/4085)** | Cannot read/write files under `~/Library/CloudStorage/Dropbox/` (macOS File Provider) | macOS 12+ Dropbox paths are invisible to the tool. Not a sandbox issue — the binary is ad-hoc signed with zero entitlements. Affects a large user base. |
| **[#4326](https://github.com/Hmbown/CodeWhale/issues/4326)** | Perf: explain and bound RSS after cancelling a 32-worker storm | High fan-out PTY benchmarks show RSS spikes that don't settle after cancellation. Suggests allocator high-water retention or a real worker/runtime leak. |
| **[#5007](https://github.com/Hmbown/CodeWhale/issues/5007)** | Youtuber doesn't use CodeWhale as TUI for DeepSeek | Community visibility concern — a prominent reviewer is using Codex TUI instead, raising questions about CodeWhale's positioning as the canonical DeepSeek terminal interface. |
| **[#5003](https://github.com/Hmbown/CodeWhale/issues/5003)** | 针对中长文本的一段write功能出现严重反复 (File edit反复失败) | Large-file edits with Chinese comments and CRLF line endings cause 15+ failed attempts, 3 `git checkout` rollbacks, and eventual workaround via external script. PR [#5008](https://github.com/Hmbown/CodeWhale/pull/5008) addresses this. |
| **[#5047](https://github.com/Hmbown/CodeWhale/issues/5047)** | API keys silently persist only in the working repo instead of durable global secret storage | **Security concern.** Keys written to `<cwd>/.codewhale/config.toml` (plaintext) are repo-scoped and accessible to anyone with repo access. Global secret store is expected behavior. |
| **[#4077](https://github.com/Hmbown/CodeWhale/issues/4077)** | v0.9.3 refactor(web_search): split provider backends into submodules | `web_search.rs` is a 2,881-line god file mixing ToolSpec, policy, HTML parsers, and 8 provider backends. Refactor is long-overdue for maintainability. |
| **[#4515](https://github.com/Hmbown/CodeWhale/issues/4515)** | [stale, needs-info] J | Stale issue flagged for lack of reproduction details. Representative of low-quality report noise that needs triage cleanup. |

---

## 4. Key PR Progress

| PR | Title | Summary |
|----|-------|---------|
| **[#5044](https://github.com/Hmbown/CodeWhale/pull/5044)** | release: Codewhale v0.9.4 source candidate | Release lane for v0.9.4, reconciled with `main`. Includes xAI device login recovery (#5032) and other blocker fixes. |
| **[#5025](https://github.com/Hmbown/CodeWhale/pull/5025)** | fix(runtime): make permission posture live | Normalizes runtime compatibility inputs into `permission_posture`; makes Auto-Review autonomous with deterministic allows and closed unresolved actions. |
| **[#5030](https://github.com/Hmbown/CodeWhale/pull/5030)** | fix(tui): correct File edit validation and release clippy gate | Validates C/C++ preprocessor conditionals against complete file before/after `edit_file` changes; fail-closed for orphaned `#if`/`#endif`. |
| **[#5029](https://github.com/Hmbown/CodeWhale/pull/5029)** | fix(tui): restore only persisted composer drafts | Stops inferring drafts from final transcript message; restores composer text only from same-session `OfflineQueueState.draft`. Fixes resume corruption. |
| **[#5024](https://github.com/Hmbown/CodeWhale/pull/5024)** | fix(tui): trim drifting turn metadata | Removes noisy/duplicate metadata (version, model, mode, route, cache, continuation-count) from turn records; keeps actionable facts only. |
| **[#4992](https://github.com/Hmbown/CodeWhale/pull/4992)** | Layer 5.2: User command dispatch precedence, shadowing, and error semantics | Adds Gherkin acceptance coverage for user-command shadowing of built-in names/aliases and fallback/error semantics. |
| **[#5006](https://github.com/Hmbown/CodeWhale/pull/5006)** | fix(installer): preserve long Windows user PATH | Fixes NSIS installer overwriting long PATH values by addressing `ReadRegStr` buffer truncation. Closes #4685. |
| **[#5008](https://github.com/Hmbown/CodeWhale/pull/5008)** | fix(tui): actionable File edit diagnostics and stale-line-number tolerance | Addresses #5003 — provides actionable diagnostics for large-file edit failures with Chinese comments and CRLF line endings. |
| **[#5027](https://github.com/Hmbown/CodeWhale/pull/5027)** | fix(state): make SQLite startup lock-safe | Installs 5-second SQLite busy timeout before any connection setup; treats WAL as persistent mode with proper transition verification. |
| **[#5031](https://github.com/Hmbown/CodeWhale/pull/5031)** | Refresh MiniMax M3 pricing | Updates MiniMax M3 to flat standard rate; removes old 512K tier split expectations; aligns metadata lookups with usage-based estimates. |

---

## 5. Feature Request Trends

1. **Deep Localization Expansion** — The most consistent feature direction. v0.9.2 shipped Korean, Spanish, Brazilian Portuguese, Hindi (Devanagari spike), Ukrainian, French, German, and Catalan. The pipeline shows a systematic approach: identify large developer populations, assess RTL complexity, and ship locale packs with raw-key parity contracts. Next targets likely include Japanese, Traditional Chinese, and Southeast Asian languages.

2. **Provider-Scoped Defaults & Consent Flows** — Issue #4411 requests that `/model auto` respect the active provider boundary rather than selecting from every authenticated provider. Users want explicit consent and scoped routing decisions.

3. **Modular Tool & Backend Architecture** — Recurring demand to split god files (`web_search.rs`, `shell.rs`, `runtime_api.rs`, `mcp.rs`) into focused submodules. This is not just cleanup — it enables independent provider backend development and testing.

4. **Tool Output Contracts** — Deferred DD #24 (Issue #4160) seeks an explicit `ToolOutput` success field contract, enabling downstream consumers (UI, logging, analytics) to react deterministically to tool outcomes.

5. **Fleet/Sub-Agent Model Flexibility** — Issue #5046 highlights that Fleet sub-agents bind too strictly to configured roles, with only `general` exposing model options. Users want role-based model override capabilities.

---

## 6. Developer Pain Points

- **File editing reliability with non-ASCII content**: The #5003/#5008 pattern — large edits failing silently on files with Chinese comments and CRLF endings — is a recurring trust eroder. Models waste turns on failed attempts, and diagnostics were previously insufficient.
- **God-file maintenance burden**: Four files exceed 2,800–3,400 lines (`shell.rs`, `web_search.rs`, `runtime_api.rs`, `mcp.rs`). These are the primary friction points for contributors and the source of architectural debt flagged in every v0.9.x refactor cycle.
- **Cross-process state safety**: SQLite lock contention (#5026/#5027) and runtime event serialization (#4522) reveal that the TUI and web processes share mutable state without cross-process transactions — a reliability gap for `codewhale --web` users.
- **Windows installer PATH destruction**: The NSIS installer overwriting user PATH (#4685, fixed in #5006) was a high-severity regression that broke other tools. The root cause (fixed-length `ReadRegStr` buffer) is a classic Windows installer pitfall.
- **IME input instability on Windows**: #5023 reports that the IME candidate window jumps during input, making CJK typing unreliable — a critical blocker for the East Asian developer audience the project is actively courting via localization.
- **Memory retention after high-fan-out cancellation**: #4326 shows that 32-worker PTY benchmarks leave RSS elevated after cancellation, suggesting either allocator high-water marks or a subtle worker leak that needs bounding before v0.9.4 ships.
- **API key security posture**: #5047 flags that keys written to repo-local config files (plaintext) contradict the expected behavior of durable global secret storage, creating both security and UX risks.

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

# ComfyUI Community Digest — 2026-08-02

---

## 1. Today's Highlights

The most impactful issue of the day is **#15077**, where masked image output for Inpaint, Outpaint, and all Talking Avatar workflows is producing corrupted results — a regression that breaks core workflows for a wide user base. On the fix side, the long-standing **#14618** (models reloading on every prompt change) was finally closed after 112 comments, resolving a persistent performance drain. In PRs, two notable merges address latent preview handling for nested latents (#15196) and nested audio decoding in VAEDecodeAudio (#15211), both improving the pipeline's handling of complex tensor structures.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [15077](https://github.com/Comfy-Org/ComfyUI/issues/15077) | Image mask output is weird in all workflows | Regression affecting Inpaint, Outpaint, and Talking Avatar — core workflows broken for many users. | 13 comments, 4 👍 |
| [14618](https://github.com/Comfy-Org/ComfyUI/issues/14618) | ComfyUI keeps loading models on every prompt change | Persistent performance bug; finally closed after 112 comments. High community engagement over its lifetime. | 112 comments, 10 👍 |
| [5908](https://github.com/Comfy-Org/ComfyUI/issues/5908) | InpaintModelConditioning doesn't work | Long-standing bug (opened Dec 2024) still unresolved; affects Flux-fill inpainting workflows. | 6 comments, 0 👍 |
| [15184](https://github.com/Comfy-Org/ComfyUI/issues/15184) | 2x memory footprint when loading a model on AMD APU | AMD APU users face double memory usage — significant for users with limited VRAM. | 4 comments, 0 👍 |
| [15163](https://github.com/Comfy-Org/ComfyUI/issues/15163) | ConnectionResetError WinError 10054 after recent update | Audio generation (ACE-Step) broken on Windows after latest update; regression bug. | 4 comments, 0 👍 |
| [14888](https://github.com/Comfy-Org/ComfyUI/issues/14888) | AttributeError: module 'dill' has no attribute 'extend' | Serialization crash preventing workflows from running; persists across custom node tests. | 4 comments, 0 👍 |
| [15145](https://github.com/Comfy-Org/ComfyUI/issues/15145) | Custom node ComfyUI-LTXVideo won't install | Blocks users from using the LTXVideo video generation node. | 9 comments, 0 👍 |
| [15143](https://github.com/Comfy-Org/ComfyUI/issues/15143) | Gemma 4 prompt generation issue in ComfyUI desktop app | Desktop app regression after update; affects LLM integration. | 6 comments, 0 👍 |
| [15189](https://github.com/Comfy-Org/ComfyUI/issues/15189) | Subgraph node widgets cannot be promoted | Limits composability of subgraphs; UI/UX blocker for advanced workflows. | 2 comments, 3 👍 |
| [15202](https://github.com/Comfy-Org/ComfyUI/issues/15202) | Convrot quants dilute loras, likeness not preserved | Quantization workflow corrupts LoRA fidelity — critical for model fine-tuning workflows. | 1 comment, self-reported SOLVED |

---

## 4. Key PR Progress

| # | Title | Description |
|---|-------|-------------|
| [15211](https://github.com/Comfy-Org/ComfyUI/pull/15211) | Let VAEDecodeAudio node decode nested audio | Enables nested audio tensor decoding, expanding VAEDecodeAudio's compatibility with complex pipeline structures. |
| [15212](https://github.com/Comfy-Org/ComfyUI/pull/15212) | Treat async-offload pins as inactive | Fixes async-offload model eviction by treating their pins as inactive during candidate selection, preventing unsafe cross-node buffer resets. |
| [15208](https://github.com/Comfy-Org/ComfyUI/pull/15208) | Update comfy-kitchen version to 0.2.26 | Dependency bump for the comfy-kitchen submodule. |
| [15044](https://github.com/Comfy-Org/ComfyUI/pull/15044) | Set fake tensor stride to match Q for FlashAttention | Fixes `AssertionError` stride mismatch when using `torch.compile` with `--use-flash-attention` on Flux2 Klein and Krea2. |
| [15207](https://github.com/Comfy-Org/ComfyUI/pull/15207) | Don't default Stable Audio 3 VAE to bf16 on MPS | Fixes silent audio corruption on Apple Silicon where bf16 VAE decoding produces broadband noise. |
| [15205](https://github.com/Comfy-Org/ComfyUI/pull/15205) | Add four-checkpoint comparison script and Flux Schnell smoke test | Adds `compare-four-checkpoints.py` for controlled checkpoint evaluation and an API smoke test for Flux Schnell. |
| [15085](https://github.com/Comfy-Org/ComfyUI/pull/15085) | Make convert_old_quants prefix-aware for quantization metadata | Fixes `.comfy_quant` markers landing on keys without weights, which prevented `MixedPrecisionOps` from engaging. |
| [15196](https://github.com/Comfy-Org/ComfyUI/pull/15196) | Support latent previews for nested latents | Unpacks nested latents before preview callbacks; adds latent2rgb factors for LTXAV video previews. |
| [15067](https://github.com/Comfy-Org/ComfyUI/pull/15067) | Gate nvfp4 compute on CUDA 13+ | Prevents NVFP4 path from being taken on Blackwell GPUs compiled against CUDA < 13, avoiding cuBLAS failures and OOM. |
| [15191](https://github.com/Comfy-Org/ComfyUI/pull/15191) | Add crf option to save video node | Adds CRF (Constant Rate Factor) control to the video saving node for quality tuning. |

---

## 5. Feature Request Trends

The most-requested feature directions across all issues are:

- **Queue/Execution Control** — A pause button for the execution queue ([#15200](https://github.com/Comfy-Org/ComfyUI/issues/15200)) is the clearest QoL demand, with no current workaround.
- **Node Organization & Bookmarks** — Users want folder/category support for node lists and better bookmark management ([#15203](https://github.com/Comfy-Org/ComfyUI/issues/15203), [#10021](https://github.com/Comfy-Org/ComfyUI/issues/10021)).
- **SAM3 Coordinate Input** — A dedicated node for inputting coordinates into SAM3 Detect, replacing manual JSON text nodes ([#15061](https://github.com/Comfy-Org/ComfyUI/issues/15061)).
- **New Model Support** — Requests for SenseNova-U1.5-8B-MoT ([#15192](https://github.com/Comfy-Org/ComfyUI/issues/15192)) and Grok Imagine Video 1.5 (via PR [#15197](https://github.com/Comfy-Org/ComfyUI/pull/15197)) show continued demand for latest LLM/video models.
- **Asset Panel UX** — Requests to disable multiselect-by-single-click and fix failed asset deletion ([#15206](https://github.com/Comfy-Org/ComfyUI/issues/15206)).

---

## 6. Developer Pain Points

- **AMD/APU Memory & Driver Issues** — Multiple open issues (#15184, #15097, #15209) point to persistent memory footprint and backend selection problems on AMD hardware, including APU systems and ROCm/FlashAttention interactions.
- **Windows-Specific Regressions** — `ConnectionResetError` WinError 10054 after updates (#15163) and `offload-arch.exe` path mismatches in Portable builds (#15097) indicate fragile Windows packaging and async I/O handling.
- **Serialization / `dill` Compatibility** — The `dill.extend` attribute error (#14888) and related `ValueError: A distribution name is required` (#15037) suggest Python dependency versioning conflicts that recur across user reports.
- **Custom Node Installation Failures** — LTXVideo node failing to install (#15145) and general custom-node troubleshooting friction remain high-frequency support burdens.
- **Quantization Workflow Integrity** — Convrot quants diluting LoRA likeness (#15202) and `convert_old_quants` prefix mismatches (#15085) highlight fragility in the quantization conversion pipeline.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Community Digest — 2026-08-02

---

## 1. Today's Highlights

No new Ollama releases were published in the last 24 hours. The community remains active around **tool-calling regressions** introduced in 0.32.4/0.32.5, with multiple reports of broken VS Code Copilot Harness and persistent gemma4 parsing errors. On the Apple Silicon front, a critical report describes **qwen3.6 causing full macOS system freezes** on M5 hardware, while embedding-related crashes on the same platform are gaining traction. Several PRs addressing OpenAI API compatibility gaps (reasoning_effort normalization, structured output handling, incomplete status reporting) are nearing review.

---

## 2. Releases

None in the last 24 hours.

---

## 3. Hot Issues

1. **[#17444](https://github.com/ollama/ollama/issues/17444)** — Tool calling broken in VS Code Copilot Harness after upgrading to 0.32.4/0.32.5. Rolling back to 0.32.1 is the confirmed workaround. Community impact is high given VS Code's dominance among AI-assisted developers.

2. **[#15315](https://github.com/ollama/ollama/issues/15315)** — gemma4:e4b still produces tool parsing errors on ollama 0.20.1 despite a prior fix attempt for #15254. 50 comments and 9 upvotes signal sustained frustration.

3. **[#17452](https://github.com/ollama/ollama/issues/17452)** — qwen3.6:latest causes macOS system-wide freeze on Apple M5 MacBook Air, requiring force restart. Critical stability concern for the Apple Silicon user base.

4. **[#17471](https://github.com/ollama/ollama/issues/17471)** — Persistent 403 Forbidden and login loop on ollama.com for 8+ hours, affecting both web and CLI across Windows/Linux. Platform reliability concern.

5. **[#16714](https://github.com/ollama/ollama/issues/16714)** — Feature request for Ollama Cloud prompt cache support. 34 comments indicate strong demand from agentic workload users who rely on cache-aware providers.

6. **[#16563](https://github.com/ollama/ollama/issues/16563)** — Structured outputs silently ignored for MLX models. 5 upvotes; the linked PR #17232 aims to fix this by rejecting unsupported requests with a clear error instead of returning 200 with bad output.

7. **[#17501](https://github.com/ollama/ollama/issues/17501)** — qwen3.6:35b-a3b-nvfp4 advertises vision capability but silently discards images, while the q8_0 quant of the same model works. Quantization-specific regression.

8. **[#17482](https://github.com/ollama/ollama/issues/17482)** — Models repeatedly unloading and reloading when switching between clients (VS Code Continue ↔ Goose). Suggests a resource management or model lifecycle race condition.

9. **[#17484](https://github.com/ollama/ollama/issues/17484)** — "context deadline exceeded" errors when running models downloaded from HuggingFace. Impacts users relying on community GGUF models.

10. **[#17498](https://github.com/ollama/ollama/issues/17498)** — Gemma 4 12B produces corrupted output with ROCm on gfx1151 (AMD Radeon 8060S) at ~1,200 prompt tokens. Hardware-specific regression under Windows.

---

## 4. Key PR Progress

1. **[#17412](https://github.com/ollama/ollama/pull/17412)** — Adds `OLLAMA_TOOLS_ALL_ALLOWED` env variable to let operators bypass approval prompts for tool calls. Improves automation and CI/CD workflows.

2. **[#16998](https://github.com/ollama/ollama/pull/16998)** — Introduces an opt-in Prometheus-compatible `GET /metrics` endpoint (`OLLAMA_METRICS=1`) exposing scheduler gauges, request counters, and per-model/token metrics. Significant for observability and SRE tooling.

3. **[#17396](https://github.com/ollama/ollama/pull/17396)** — Normalizes `reasoning_effort: "minimal"` to `"low"` in the OpenAI-compatible layer, preventing 400 errors from SDKs and agent frameworks targeting GPT-5.

4. **[#17232](https://github.com/ollama/ollama/pull/17232)** — MLX runner now rejects structured output requests with a clear error instead of silently returning malformed results. Fixes #16563.

5. **[#17505](https://github.com/ollama/ollama/pull/17505)** — Finalizes incomplete cogito tool calls that were previously dropped when the model emitted `done` before the closing delimiter. Improves reliability for the cogito parser.

6. **[#17239](https://github.com/ollama/ollama/pull/17239)** — `/v1/responses` endpoint now reports `status: "incomplete"` when generation is cut off by `max_output_tokens`, populating `IncompleteDetails`. Critical for agentic applications that need to distinguish truncation from completion.

7. **[#17293](https://github.com/ollama/ollama/pull/17293)** — Anthropic-compatible `/v1/messages` endpoint now serializes empty message content as `[]` instead of `null`, matching the real Anthropic API behavior.

8. **[#17504](https://github.com/ollama/ollama/pull/17504)** — Prevents sidebar animation on initial load in the desktop app, fixing UX issue #12954.

9. **[#17135](https://github.com/ollama/ollama/pull/17135)** — Stops streaming goroutines from blocking forever when a client disconnects. Addresses a resource leak that could degrade server stability under load.

10. **[#17267](https://github.com/ollama/ollama/pull/17267)** — Accepts `reasoning_effort: "minimal"` by mapping it to `"low"`, complementing PR #17396 for the OpenAI compatibility layer.

---

## 5. Feature Request Trends

- **Prompt caching** — The most-discussed cloud feature request (#16714, 34 comments), driven by agentic use cases where repeated prompts across sessions are common.
- **OpenAI API compatibility** — Multiple PRs and issues target parity: `reasoning_effort` handling, proper incomplete status reporting, and empty-content serialization. The community expects Ollama to be a drop-in replacement for OpenAI's API surface.
- **Structured output reliability** — Requests for consistent structured output support across all backends (MLX, ROCm, etc.), not just the default llama-server runner.
- **Tool calling robustness** — Persistent regressions and parser edge cases (cogito, gemma4) indicate demand for a more resilient, spec-compliant tool-calling pipeline.
- **Desktop app organization** — Folder-based chat organization (#13349) remains an open feature request for the offline app.

---

## 6. Developer Pain Points

- **Tool calling regressions** — The single most disruptive theme. Both gemma4 and VS Code Copilot Harness users report broken tool parsing after version bumps, with no clear upstream fix yet. This erodes trust in version stability.
- **Apple Silicon stability** — A cluster of macOS-specific issues (M5 system freezes, embedding runner crashes, MLX structured output failures) suggests the MLX backend needs more rigorous testing on newer hardware.
- **Ollama Cloud reliability** — Authentication loops and 403 errors (#17471) directly impact cloud subscribers' trust in the platform.
- **Model lifecycle management** — Repeated unloading/reloading (#17482) and context deadline exceeded errors (#17484) point to resource management and timeout configuration pain points.
- **Quantization-specific bugs** — NVFP4 vs q8_0 divergence (#17501) and ROCm corruption (#17498) highlight that different quantization/backend combinations need more matrix testing before release.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

# llama.cpp Community Digest — 2026-08-02

---

## 1. Today's Highlights

The `b10221` release ships a BoringSSL update to `0.20260730.0` (#26353), addressing security and TLS compatibility. The most-discussed community issue remains the Qwen 3.6 27B eval bug (#22746, 115 comments), where full prompt re-processing is forced due to missing cache data. DeepSeek V4 ecosystem support continues to dominate PR and issue activity, with multiple backends (CUDA, SYCL, Vulkan, HIP) seeing related work.

---

## 2. Releases

| Version | Key Change | PR |
|---------|-----------|----|
| **b10221** | Update BoringSSL to `0.20260730.0` | [#26353](https://github.com/ggerganov/llama.cpp/pull/26353) |
| **b10219** | Persist `reasoning_content` in chat history so `--reasoning-preserve` can re-inject prior thoughts | [#26362](https://github.com/ggerganov/llama.cpp/pull/26362) |
| **b10218** | Add MiniCPMv46 downsample mode; put downsample config inside GGUF | [#25993](https://github.com/ggerganov/llama.cpp/pull/25993) |
| **b10217** | Enable tool calls in thinking mode for DeepSeek V4 | [#26269](https://github.com/ggerganov/llama.cpp/pull/26269) |

**macOS/iOS binaries** are available for Apple Silicon (arm64) across all releases, with KleidiAI variants for select builds.

---

## 3. Hot Issues

1. **[#22746](https://github.com/ggerganov/llama.cpp/issues/22746)** — *Qwen 3.6 27B forces full prompt re-processing due to missing cache data.* (115 comments, 31 👍) — The most-engaged issue; impacts eval correctness on HIP/ROCm. Community actively debugging KV cache invalidation.

2. **[#1499](https://github.com/ggerganov/llama.cpp/issues/1499)** — *AMD XDNA AI Engine support on Ryzen 7x40.* (96 comments, 41 👍) — Closed as stale but remains the highest-liked feature request, reflecting sustained demand for AMD's AI engine backend.

3. **[#25436](https://github.com/ggerganov/llama.cpp/issues/25436)** — *DeepSeek V4 garbled output on Strix Halo with ROCm.* (25 comments) — Part of a cluster of DSV4 regressions on AMD GPUs; community coordinating across multiple related issues.

4. **[#24168](https://github.com/ggerganov/llama.cpp/issues/24168)** — *SYCL empty/gibberish output + `ggml_sycl_op_mul_mat` crash on Intel Arc Pro B60.* (22 comments) — Regression between b9128–b9159 and server-intel latest; critical for Intel GPU users.

5. **[#20697](https://github.com/ggerganov/llama.cpp/issues/20697)** — *Disk-based context checkpoint offloading (`--cache-disk`).* (19 comments, 42 👍) — High community interest in UMA offloading to extend context windows beyond VRAM limits.

6. **[#21725](https://github.com/ggerganov/llama.cpp/issues/21725)** — *XDNA backend feature request.* (16 comments, 26 👍) — Closely related to #1499; persistent demand for AMD XDNA hardware acceleration.

7. **[#19256](https://github.com/ggerganov/llama.cpp/issues/19256)** — *llama-cli output redirection with `>` broken.* (14 comments) — A long-standing usability regression affecting CLI workflows.

8. **[#23704](https://github.com/ggerganov/llama.cpp/issues/23704)** — *Server router mode: multiple presets for the same model.* (14 comments) — Reflects demand for production-grade server flexibility.

9. **[#25664](https://github.com/ggerganov/llama.cpp/issues/25664)** — *`vk::DeviceLostError` on DeepSeek-V4-Flash with RADV on Strix Halo.* (13 comments) — Vulkan stability concern on AMD GPUs with DSV4 models.

10. **[#26206](https://github.com/ggerganov/llama.cpp/issues/26206)** — *Gemma 4 12B garbled output on Intel Arc Pro B70 (Xe2).* (10 comments) — Adds to the growing list of SYCL/Intel Arc regressions affecting newer models.

---

## 4. Key PR Progress

1. **[#26298](https://github.com/ggerganov/llama.cpp/pull/26298)** — *Add support for Motif 3 Beta.* Introduces GDLA (Grouped Differential Latent Attention) with MLA-style low-rank projections and 16 GQA KV heads.

2. **[#26414](https://github.com/ggerganov/llama.cpp/pull/26414)** — *`--pin-hot-experts N` to pin hottest MoE experts in RAM.* Prevents OS page-cache eviction of frequently used MoE experts, reducing latency spikes for large MoE models.

3. **[#26102](https://github.com/ggerganov/llama.cpp/pull/26102)** — *Add `subproc.h` wrapper, disabled on Android/iOS/WASM.* Cleanups for subprocess handling in sandboxed environments.

4. **[#26415](https://github.com/ggerganov/llama.cpp/pull/26415)** — *Fix CI errors.* Addresses `llama-ui-embed` TSan build error and `test-llama-archs` failure on WebGPU with MiniMax M3.

5. **[#26412](https://github.com/ggerganov/llama.cpp/pull/26412)** — *Only load MiMo2 MTP tensors if used.* Optimizes memory usage by skipping unnecessary MTP tensor loading.

6. **[#25601](https://github.com/ggerganov/llama.cpp/pull/25601)** — *Vulkan backend: implement `GATED_LINEAR_ATTN`.* Eliminates CPU fallback for this op, following the existing `wkv6.comp` pattern.

7. **[#23122](https://github.com/ggerganov/llama.cpp/pull/23122)** — *DeepSeek V4 hyperconnection + KV ops (CPU).* First in a series of PRs for full DSV4 CPU backend support.

8. **[#26390](https://github.com/ggerganov/llama.cpp/pull/26390)** — *CUDA: batched argsort for multi-row top-k.* Improves throughput for batch top-k workloads (e.g., MiniMax M3) by reducing sequential dispatch overhead.

9. **[#25819](https://github.com/ggerganov/llama.cpp/pull/25819)** — *Stuck-loop escape for ngram-mod speculative decoding.* Mitigation PR preventing infinite loops when ngram-mod verification fails.

10. **[#26408](https://github.com/ggerganov/llama.cpp/pull/26408)** — *Add `--cache-disk` for mmap-backed prompt cache (UMA offloading).* Stores KV checkpoint state in mmap'd files instead of heap RAM, complementing issue #20697.

---

## 5. Feature Request Trends

The most-requested feature directions across the issue tracker:

- **AMD XDNA / iGPU backend support** — #1499 (41 👍), #21725 (26 👍). Strong sustained demand for AMD's AI engine and integrated GPU acceleration.
- **Disk-based context offloading (`--cache-disk`)** — #20697 (42 👍). The highest-liked feature request; driven by users running large-context workloads on UMA systems.
- **Model management API for server** — #21779. Dynamic model reloading, download, and lifecycle management for production deployments.
- **Server router mode with multiple presets** — #23704. Production-grade serving flexibility for the same model under different configurations.
- **Vulkan tensor parallelism** — #22648. Multi-GPU Vulkan support remains an open gap.
- **WebUI multiple responses** — #17798. Ability to generate and compare multiple responses in the web interface.
- **Cached model listing/deletion tooling** — #16393. Basic model management UX for local deployments.

---

## 6. Developer Pain Points

- **ROCm/HIP regressions with DeepSeek V4 and newer models.** A cluster of issues (#25436, #25664, #26399, #26220) reports garbled output, device lost errors, and performance regressions on AMD GPUs running DSV4 and Gemma 4 models. The removal of rocWMMA FA paths (#26046) and `GGML_OP_TOP_K` CPU fallback are primary suspects.
- **SYCL/Intel Arc instability.** Multiple reports (#24168, #26396, #26206, #26239) of gibberish output, prefill regressions, and classification bugs on Intel Arc GPUs, indicating the SYCL backend needs more robust validation for newer hardware (Battlemage/Xe2).
- **CLI output redirection broken.** #19256 is a long-standing, low-priority but persistent frustration for users piping `llama-cli` output to files.
- **Speculative decoding CUDA failures.** #26119 reports `cublasSgemm_v2` parameter errors on V100 during speculative decoding, limiting compatibility with older CUDA hardware.
- **Build/installation issues.** #23494 (`libllama-*-impl.so` not copied by `cmake --install`) and #26343 (Windows Defender false positive on b10195) continue to surface, affecting developer experience.
- **Cross-directory CLI execution.** #26265 reports `llama-cli` failing when launched from a different working directory, a basic usability regression.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*