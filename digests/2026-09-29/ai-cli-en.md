# AI CLI Tools Community Digest 2026-09-29

> Generated: 2026-09-28 22:15 UTC | Tools covered: 12

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



### Today's Highlights: Key Updates Across AI Developer Tools (2026-09-29)

*   **Claude Code Ships v2.1.284 with Sonnet 5.5 Default**: Anthropic released v2.1.284, setting Claude Sonnet 5.5 (`claude-sonnet-5-5`) as the default Sonnet model on the API with a 1M-token context window and $0.20/Mtok cache-read pricing. The release also refines auto-mode permissions with a new "Yes, but ask again next time" option for reads outside working directories. [Release link](https://github.com/anthropics/claude-code/releases/tag/v2.1.284)
*   **Ollama Releases v0.35.0-rc1**: Ollama rolled out v0.35.0-rc1 featuring macOS menu sync at startup and deferred Settings model discovery. Key PRs in this build include making desktop chat history read-only with Markdown exports, adding a new System One scoring API (`POST /v1/systemone`), and adding support for IBM Granite models via MLX. [Release link](https://github.com/ollama/ollama/releases/tag/v0.35.0-rc1)
*   **OpenAI Codex Stable `rust-v0.158.0` Launches**: The stable channel received `rust-v0.158.0`, adding configurable copy-on-select and right-click paste in the fullscreen TUI, Markdown-preserving transcript copies, and MCP OAuth support for pre-registered client secrets (including via `codex mcp add --oauth-client`). [Release link](https://github.com/openai/codex/releases/tag/rust-v0.158.0)
*   **llama.cpp Migrates Speculative Decoding, MTMD, and Server to `batch_ext`**: The core team merged a major internal refactor (b11236, PR #29385) migrating speculative decoding, mtmd, and server paths onto the new `batch_ext` API, accompanied by backend robustness fixes across Vulkan, Metal, HIP, WebGPU, and OpenVINO. [Release link](https://github.com/ggml-org/llama.cpp/releases/tag/b11236)
*   **GitHub Copilot CLI Lands `.claude/rules` Support and PR-Template Awareness**: Release tags `v1.0.90-0` and `v1.0.89` shipped support for reading custom instructions from `.claude/rules`, making PR creation follow repository pull request templates, and adding a blue dot unread-turn indicator in the session sidebar. [Repository link](https://github.com/github/copilot-cli)
*   **Gemini CLI Nightly `v0.63.0-nightly.20260928` Closes Infinite Auth Loop**: The latest nightly build includes fixes for a long-running Windows/WSL infinite OAuth loop, alongside headless folder trust state propagation and non-interactive plan mode execution. [Release link](https://github.com/google-gemini/gemini-cli/releases/tag/v0.63.0-nightly.20260928.g2fe7c2d3f)
*   **OpenCode v1.18.33 Fixes Gateway Timeouts and MCP Errors**: OpenCode shipped v1.18.33 resolving Cloudflare AI Gateway model stream timeouts, reporting MCP browser launch failures when the launcher exits immediately, and redacting credentials and sensitive headers from debug configuration output. [Release link](https://github.com/anomalyco/opencode/releases/tag/v1.18.33)
*   **Pi Pushes Codemode, Virtual Models, and Managed llama.cpp Server PRs**: Pi's mitsuhiko pushed three major extensibility PRs: Codemode + MCP integration (#10040), Virtual Models routing via `pi.registerVirtualModel()` (#10035), and a managed llama.cpp server mode handling the lifecycle of `llama-server` (#10122). [PR link](https://github.com/badlogic/pi-mono/pull/10040)

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills — Community Highlights Report
*Data source: github.com/anthropics/skills · snapshot 2026-09-29*

> **Data caveat:** PR comment counts are reported as `undefined` in the supplied dataset, so the PR ranking below is ordered by **engagement signals available** (update recency, cross-issue references, and submission scope). Issue comment counts are available and used directly in Section 2.

---

## 1. Top Skills Ranking (most-watched PRs)

| # | Skill / PR | What it does | Discussion highlights | Status |
|---|---|---|---|---|
| 1 | **`notion-spec-to-implementation` + `quantitative-resume-auditor`** — [PR #1245](https://github.com/anthropics/skills/pull/1245) | Turns product/tech specs into Notion implementation tasks; plus a resume audit skill | Long-lived submission (Jun→Sep), most recently updated of all PRs (2026-09-28); two-skill bundle | OPEN |
| 2 | **`claude-api` model retirement update** — [PR #1607](https://github.com/anthropics/skills/pull/1607) | Marks four retired model IDs as retired; fixes #1603 | Correctness fix on a bundled, high-traffic skill; updated 2026-09-28 | OPEN |
| 3 | **`mcp-builder` mcp>=2 compatibility** — [PR #1742](https://github.com/anthropics/skills/pull/1742) | Fixes `streamablehttp_client` rename and custom-header config in `connections.py`; fixes #1668 | Directly closes a reported breakage; updated 2026-09-27 | OPEN |
| 4 | **`skill-creator` trigger-eval hardening** — [PR #1298](https://github.com/anthropics/skills/pull/1298) | Isolates per-worker probes, fixes Windows pipe `select()`, stops runtime failures masquerading as non-triggers | Addresses the eval-reliability complaints in Issues #556 / #1383 | OPEN |
| 5 | **`proofcore-contract-auditor`** — [PR #1771](https://github.com/anthropics/skills/pull/1771) | Static analysis of Solidity/Rust contracts with on-chain audit proofs (TON, Merkle) | Novel Web3 domain; vendor-authored skill | OPEN |
| 6 | **`md2video-audio`** — [PR #1703](https://github.com/anthropics/skills/pull/1703) | Compiles Markdown into MP4 videos with synthesized voiceover (Marp + TTS) | "Zero-cost" media-generation pipeline | OPEN |
| 7 | **`document-typography`** — [PR #514](https://github.com/anthropics/skills/pull/514) | Guards against orphan wraps, widowed headers, numbering misalignment in generated docs | Targets a universal output-quality complaint | OPEN |
| 8 | **`skill-quality-analyzer` + `skill-security-analyzer`** — [PR #83](https://github.com/anthropics/skills/pull/83) | Meta-skills scoring Skills across structure, docs, and security dimensions | Earliest meta-skill proposal (Nov 2025); still open | OPEN |

**Notable supporting entries:** `pyxel` retro-game dev ([#525](https://github.com/anthropics/skills/pull/525)), `blast-radius` destructive-write checklist ([#1776](https://github.com/anthropics/skills/pull/1776)), `docx` orphaned-comment detection ([#1734](https://github.com/anthropics/skills/pull/1734)), and the `pdf` case-sensitivity fix ([#538](https://github.com/anthropics/skills/pull/538)).

---

## 2. Community Demand Trends (from Issues)

Ranked by discussion volume and reaction signals:

1. **Security & trust boundaries** — [Issue #492](https://github.com/anthropics/skills/issues/492) (43 comments, 👍2) is the single most-discussed issue: community skills shipping under the `anthropic/` namespace create an impersonation/permission-escalation risk. Related: [#1175](https://github.com/anthropics/skills/issues/1175) (SPO document access control inside SKILL.md).
2. **Skill evaluation & trigger reliability** — [Issue #556](https://github.com/anthropics/skills/issues/556) (12 comments, 👍7) reports a 0% trigger rate in `run_eval.py`; [#1383](https://github.com/anthropics/skills/issues/1383) documents six reproducible `skill-creator` eval defects. This is the strongest *technical* demand signal.
3. **Context-window economy** — [Issue #1487](https://github.com/anthropics/skills/issues/1487) (`claude-api` injecting ~156k tokens in one call) and [#202](https://github.com/anthropics/skills/issues/202) (`skill-creator` reads like docs, not an operational skill) both push toward **token-efficient, instruction-oriented Skills**.
4. **Skill distribution & sharing** — [Issue #228](https://github.com/anthropics/skills/issues/228) (16 comments, 👍8) asks for org-wide skill sharing; [#189](https://github.com/anthropics/skills/issues/189) (👍9, highest reaction) flags duplicate content across `document-skills` / `example-skills`.
5. **Governance & quality meta-skills** — [#412](https://github.com/anthropics/skills/issues/412) (agent governance: policy, threat detection, audit trails) and [#1385](https://github.com/anthropics/skills/issues/1385) (three-gate reasoning quality pipeline) show appetite for **safety/verification Skills** rather than new domain tools.

**Directional read:** demand is shifting from "more Skills" toward **trust, verification, and lifecycle management** of Skills themselves.

---

## 3. High-Potential Pending Skills (active, unmerged)

All 20 listed PRs are **OPEN** — none merged. The ones with the most recent activity are the likeliest to land:

| PR | Skill | Last updated | Why it may land soon |
|---|---|---|---|
| [#1245](https://github.com/anthropics/skills/pull/1245) | notion-spec-to-implementation / quantitative-resume-auditor | 2026-09-28 | Most recent update; sustained author engagement since June |
| [#1607](https://github.com/anthropics/skills/pull/1607) | claude-api retired-model fix | 2026-09-28 | Small, corrective, tied to a filed issue (#1603) |
| [#1742](https://github.com/anthropics/skills/pull/1742) | mcp-builder mcp>=2 fix | 2026-09-27 | Closes a concrete bug (#1668); narrow diff |
| [#1681](https://github.com/anthropics/skills/pull/1681) | skill-creator standalone execution fix | 2026-09-27 | Fixes a `ModuleNotFoundError`; low-risk |
| [#1792](https://github.com/anthropics/skills/pull/1792) | docx LibreOffice timeout handling | 2026-09-25 | Corrects a silent false-success path |
| [#1734](https://github.com/anthropics/skills/pull/1734) | docx orphaned-comment detection | 2026-09-25 | Complements existing docx tooling |
| [#525](https://github.com/anthropics/skills/pull/525) | pyxel retro-game dev | 2026-09-22 | Revived after months dormant |
| [#723](https://github.com/anthropics/skills/pull/723) | testing-patterns | 2026-09-21 | Broad, reusable testing reference |

**Pattern:** the fastest-moving queue is **corrective fixes to existing bundled Skills** (`skill-creator`, `docx`, `mcp-builder`, `claude-api`) — small diffs tied to filed issues.

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is no longer new Skill ideas but the trustworthiness of the Skills pipeline itself — reliable trigger evaluation, bounded context consumption, secure namespacing, and verifiable output — with `skill-creator`/`mcp-builder` correctness fixes and Issue #492's namespace-impersonation concern forming the ecosystem's center of gravity.**

---

# Claude Code Community Digest — 2026-09-29

## 1. Today's Highlights

Anthropic shipped **v2.1.284**, making **Claude Sonnet 5.5 (`claude-sonnet-5-5`)** the default Sonnet model on the API with a 1M-token context window and aggressive cache-read pricing ($0.20/Mtok). The release also refines auto-mode permissions with a new "Yes, but ask again next time" option for reads outside working directories. The issue tracker remains dominated by model-behavior and token-cost regressions, alongside a large wave of `invalid`/spam reports, while substantive open threads focus on cross-session memory, sandbox isolation, and MCP UI control.

## 2. Releases

**v2.1.284** — [Release link](https://github.com/anthropics/claude-code/releases/tag/v2.1.284)

- **Claude Sonnet 5.5 (`claude-sonnet-5-5`)** added and set as the default Sonnet model on the Anthropic API: 1M context, $2/$10 per Mtok, $0.20/Mtok cache reads.
- **Auto mode permission refinement**: new answer option **"Yes, but ask again next time"** when a read outside the working directories is requested, giving users a middle ground between one-off approval and persistent allowlisting.
- (Release notes truncated in source data.)

## 3. Hot Issues

1. **[#74948](https://github.com/anthropics/claude-code/issues/74948) — MCP / claude-code-web / permissions bug** (OPEN, 4 comments, 👍1)
   Top issue by comment count today. Touches multiple high-blast-radius areas (MCP, web, permissions) and remains open despite being filed in July — a signal that cross-surface permission behavior is still unresolved.

2. **[#77770](https://github.com/anthropics/claude-code/issues/77770) — System prompt model identity contradicts `/model` and commit trailer** (CLOSED, 3 comments)
   Three surfaces in one session report two different models, with two contradictions inside the same injected system prompt. Closed/stale, but it raises real questions about prompt-injection consistency and model observability.

3. **[#87023](https://github.com/anthropics/claude-code/issues/87023) — Field report: cross-session memory at multi-agent scale** (OPEN, 2 comments)
   A detailed operator-authored report on memory limits in multi-agent Claude Code deployments. Notable because it is framed as engineering feedback rather than a single-user bug, and it aligns with growing demand for persistent agent state.

4. **[#88379](https://github.com/anthropics/claude-code/issues/88379) — Worktree isolation misclassifies git `-C`/`--git-dir`/`--work-tree` paths** (OPEN, 2 comments)
   Sandbox escape-adjacent: paths are classified by leading character, refusing `.` and `~` inside the worktree while allowing `$VAR` that escapes it. A security-relevant correctness bug in sandbox enforcement.

5. **[#77319](https://github.com/anthropics/claude-code/issues/77319) — Per-connector toggle to disable MCP widget (MCP Apps) rendering** (OPEN, 2 comments, 👍4)
   The most-upvoted issue in today's set. MCP connectors declaring `_meta.ui` auto-render interactive widgets; users want granular opt-out per connector rather than all-or-nothing.

6. **[#74004](https://github.com/anthropics/claude-code/issues/74004) — CLI truncates long input messages without warning** (OPEN, 2 comments)
   A ~121-line typed message was silently truncated before reaching the model. Silent data loss on the input path is a serious usability and trust issue for long prompts.

7. **[#81931](https://github.com/anthropics/claude-code/issues/81931) — Scheduled task silently fails (`lastRunAt` advances, no session/output)** (OPEN, 1 comment)
   Cron task appears to fire but produces no session or output, even with the Mac awake and app open. Reliability gap for automation use cases where silent failure is worse than a loud error.

8. **[#95891](https://github.com/anthropics/claude-code/issues/95891) — Excessive refusal on context-compaction validation requests** (CLOSED, 1 comment)
   Safeguards tripping when the user tries to verify that compaction didn't degrade the model. Part of a cluster of model-behavior complaints following the mid-September update.

9. **[#97119](https://github.com/anthropics/claude-code/issues/97119) / [#97120](https://github.com/anthropics/claude-code/issues/97120) — Web search fabricates citations for unreachable (NXDOMAIN) pages** (CLOSED, 1 comment each)
   Claude claims to have read pages that return `DNS_PROBE_FINISHED_NXDOMAIN` and cites specific data from dead domains. Marked invalid/closed, but the hallucinated-citation pattern is a recurring trust concern.

10. **[#95905](https://github.com/anthropics/claude-code/issues/95905) — Excessive token consumption during usage** (CLOSED, needs-info)
    Representative of a cluster of cost complaints (#95916, #95890) filed in the same window. Community reaction is heated but the reports lack reproducible detail, so they were closed with `needs-info`/`needs-repro`.

## 4. Key PR Progress

> Only **3 PRs** were updated in the last 24h; all are covered below. There is no larger PR pool to sample from in this window.

1. **[#97952](https://github.com/anthropics/claude-code/pull/97952) — `ci: security hardening for GitHub Actions workflows that call Claude`** (OPEN)
   Hardens `claude-issue-triage.yml`, `claude-dedupe-issues.yml`, and `claude.yml` with an egress-firewall runner, restricting outbound network access for workflows that invoke the Claude Code action. Directly relevant to supply-chain and secret-exfiltration risk in CI.

2. **[#97688](https://github.com/anthropics/claude-code/pull/97688) — `sec-default: collector records continue past the user tier`** (OPEN)
   When an organization seats `sec-default`, a user's plugin can no longer drop or rewrite records sent to its collector; `telemetry.log` now continues past the user tier like `classic.*` and `settings.read`. Enterprise governance change for telemetry pipelines.

3. **[#31204](https://github.com/anthropics/claude-code/pull/31204) — `Add AI Learning Roadmap interactive canvas application`** (CLOSED)
   A React/Vite node-and-edge graph app for AI learning paths with localStorage persistence. Closed and off the core product surface, but notable as a long-lived community contribution that was ultimately not merged.

## 5. Feature Request Trends

- **Granular MCP UI control** — per-connector toggles to disable MCP Apps / widget rendering (#77319, 4 👍), reflecting discomfort with automatic UI injection from third-party connectors.
- **Cross-session and multi-agent memory** — persistent state across sessions and agents is the most structurally ambitious request (#87023).
- **Cost and token transparency** — repeated demands for visibility into where tokens go, plus safeguards against perceived waste (#95905, #95916, #95890).
- **Permission granularity** — interest in middle-ground approval modes; partially addressed by the new "Yes, but ask again next time" option in v2.1.284.
- **Automation reliability** — scheduled tasks need detectable failure states rather than silent no-ops (#81931).
- **Model identity and behavior clarity** — users want consistent reporting of which model is actually serving a session (#77770), and clearer signals when behavior changes after updates.
- **Accessibility and theming** — low-contrast text in the VS Code extension (#77808) and persistent prompt-color corruption in plan mode (#88079) point to unmet TUI/IDE polish requests.

## 6. Developer Pain Points

- **Token consumption and cost opacity.** A dense cluster of `area:cost` reports (#95905, #95916, #95890) with emotional framing ("admits to wasting tokens on purpose") signals low trust in token accounting, even where reports are closed as `needs-repro`.
- **Perceived model regressions after updates.** Multiple reports cite the "Sept 16 update" as a turning point for attribution errors, video/screenshot analysis precision (#97204, #97200), API assumptions on Opus (#95919), and over-refusal (#95891).
- **Silent failures.** Agent dispatch that never fires (#95824), scheduled tasks that advance `lastRunAt` without output (#81931), and CLI input truncation without warning (#74004) all share the same failure mode: the user is not told something went wrong.
- **Sandbox and worktree edge cases.** Path-classification logic in worktree isolation (#88379) is fragile around `-C`, `--git-dir`, `--work-tree`, `~`, `.`, and variable expansion — a security-sensitive area where heuristic bugs are costly.
- **MCP integration friction.** OAuth misconfiguration (#97065, client_id set to user email) and lack of per-connector UI control (#77319) show the MCP surface still lacks operational guardrails.
- **Issue tracker noise.** A large share of today's updates are `invalid` GitHub-integration spam and test reports (#97121, #97158, #97175, #97064, #97221, #97247), degrading signal for maintainers and reporters alike.
- **Stale backlog.** Many open items carry the `stale` label and have sat since July (#74948, #74004, #81931), suggesting triage capacity is not keeping pace with incoming volume.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-09-29

## Today's Highlights
Stable `rust-v0.158.0` ships fullscreen TUI copy-on-select/right-click paste, Markdown-preserving transcript copies, and MCP OAuth support for pre-registered client secrets. The issue tracker is dominated by cross-platform desktop reliability: Windows daemon/terminal flashing, Windows desktop loading/auth failures, and a broad Linux 26.924 hang regression. PR activity is mostly internal hardening—app-server turn accounting, Guardian review context, SQLite maintenance, and Windows sandbox policy/ACL fixes.

## Releases
- [rust-v0.158.0](https://github.com/openai/codex/releases/tag/rust-v0.158.0) — Stable release. Adds configurable copy-on-select and right-click paste in the fullscreen TUI; copied transcript selections preserve Markdown formatting; MCP servers requiring pre-registered OAuth client secrets are now supported, including via `codex mcp add --oauth-clie…`.
- Alpha channel continues with [rust-v0.160.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.160.0-alpha.2), [rust-v0.159.0-alpha.13](https://github.com/openai/codex/releases/tag/rust-v0.159.0-alpha.13), [rust-v0.159.0-alpha.12](https://github.com/openai/codex/releases/tag/rust-v0.159.0-alpha.12), [rust-v0.159.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.159.0-alpha.11), and [rust-v0.158.0-alpha.15.4](https://github.com/openai/codex/releases/tag/rust-v0.158.0-alpha.15.4). No detailed release notes were provided for the alpha builds.

## Hot Issues
1. [#48074](https://github.com/openai/codex/issues/48074) — **Windows terminal windows repeatedly flash during requests after installing the Codex daemon.** 65 comments, 108 👍. The highest-engagement issue this cycle; points to daemon/process-management regressions that make Windows CLI usage disruptive.
2. [#27117](https://github.com/openai/codex/issues/27117) — **Windows standalone update inherits `PSModulePath` into `powershell.exe`, causing `Get-FileHash` to fail.** 39 comments, 28 👍. A long-lived update-path bug with strong community validation.
3. [#40060](https://github.com/openai/codex/issues/40060) — **Windows execpolicy false positive when `Start-Process` and an unrelated URL appear in the same PowerShell script.** 24 comments. Sandbox/classifier false positives remain a recurring Windows blocker.
4. [#48417](https://github.com/openai/codex/issues/48417) — **Linux Desktop regression: Codex hangs on every prompt in 26.924.22138, works after downgrade.** 23 comments, 5 👍, closed. Central report in the Linux 26.924 regression cluster.
5. [#48324](https://github.com/openai/codex/issues/48324) — **ChatGPT Windows Desktop: Codex shows “Unable to load organization settings” before composer/session.** 22 comments, 4 👍. Blocks desktop Codex entirely while Web and CLI still work.
6. [#48522](https://github.com/openai/codex/issues/48522) — **Windows desktop app stuck on infinite loading spinner; `app://-/index.html` route never resolves.** 13 comments. Renderer-alive but route-unresolved failures are hard for users to diagnose.
7. [#48624](https://github.com/openai/codex/issues/48624) — **Linux: Codex tasks stuck at “Starting your task” (temporary workaround found).** 9 comments, 1 👍, closed. Workaround confirms the issue is in task startup/worktree orchestration.
8. [#48640](https://github.com/openai/codex/issues/48640) — **Linux desktop 26.924.22138 stays on “Starting your task” and leaves exited helper processes unreaped.** 8 comments, 2 👍, closed. Process-lifecycle bug with desktop stability impact.
9. [#48500](https://github.com/openai/codex/issues/48500) — **Managed app-server runs hooks with the first client’s `TMUX_PANE`/`TMUX`, misattributing hook events.** 4 comments, 4 👍. A 0.157 regression in shared app-server environments; important for multi-pane and multi-session workflows.
10. [#48507](https://github.com/openai/codex/issues/48507) — **MCP OAuth: concurrent processes race refresh-token rotation in `.credentials.json`; next startup hits `invalid_grant`.** 3 comments. Highlights enterprise/MCP auth fragility under concurrent Codex processes.

## Key PR Progress
1. [#49084](https://github.com/openai/codex/pull/49084) — **Track app-server running turns incrementally.** Avoids scanning all tracked runtimes under the state lock for every thread mutation; supports graceful restart draining.
2. [#49082](https://github.com/openai/codex/pull/49082) — **Skip remote Git discovery for Guardian diff paths.** Prevents offline secondary executors from stalling Guardian approval revalidation.
3. [#49079](https://github.com/openai/codex/pull/49079) — **Update and centralize TUI subscription labels.** Renames `Pro Extra` → `Pro 200`, `Pro Standard` → `Pro 100`, and `Pro Max` → `Pro 500` across status/analytics views.
4. [#49075](https://github.com/openai/codex/pull/49075) — **Preserve pending environments when spawning subagents.** Ensures child agents retain starting environment selections and receive config/failure once preparation finishes.
5. [#49073](https://github.com/openai/codex/pull/49073) — **Surface realtime voice catalog failures in the TUI.** Stops silent fallback to the built-in catalog when `thread/realtime/listVoices` fails.
6. [#49069](https://github.com/openai/codex/pull/49069) — **Reclaim unused SQLite log database pages in the background.** Adds incremental vacuum with a reserve for future writes, reducing log DB bloat.
7. [#49067](https://github.com/openai/codex/pull/49067) — **Keep configuration values out of Windows sandbox policy events.** Prevents credentials from being recorded in persistent policy-rejection events.
8. [#49058](https://github.com/openai/codex/pull/49058) — **Fix Windows sandbox ACL repair for long runtime paths.** Uses extended-length path handling for nested files/directories beyond legacy Windows limits.
9. [#49036](https://github.com/openai/codex/pull/49036) — **Add opt-in conversation history retrieval to Guardian reviews.** Lets reviewers check earlier instructions, restrictions, or revoked permissions before approving side-effecting actions.
10. [#49038](https://github.com/openai/codex/pull/49038) — **Preserve encrypted agent messages in Guardian reviews.** Carries encrypted `agent_message` items through reviews so evidence such as encrypted parent replies is not omitted.

## Feature Request Trends
- **Remote control and remote host selection for desktop/Linux apps.** [#39793](https://github.com/openai/codex/issues/39793) requests using devices like a Steam Deck as a control plane for Codex running elsewhere.
- **Cross-platform desktop parity and reliability.** Linux and Windows desktop issues dominate: hangs, loading screens, auth failures, process leaks, and startup regressions.
- **MCP/OAuth credential robustness.** Pre-registered OAuth client secrets, persistent credentials, and race-free refresh-token rotation are in demand.
- **Actionable sandbox/execpolicy diagnostics.** Users want policy rejections to explain why commands were blocked, not just “blocked by policy.”
- **TUI configurability and UX polish.** Copy/paste behavior, Markdown-preserving copies, subscription labels, and Plan mode hints are active areas.
- **App-server multi-client isolation.** Shared daemon environments should not leak `TMUX_PANE`/`TMUX` or misattribute lifecycle hooks across sessions.
- **Session/thread lifecycle resilience.** Loading existing conversations, resuming threads, worktree setup, and image-heavy thread rendering need stronger recovery paths.
- **Model behavior controls.** Reports such as [#48980](https://github.com/openai/codex/issues/48980) and [#49053](https://github.com/openai/codex/issues/49053) ask for better routing consistency and protection against repetitive agent loops.

## Developer Pain Points
- **Windows regressions are broad and disruptive.** Terminal flashing, background CMD/PowerShell focus stealing, `PSModulePath` update failures, “Unable to load organization settings,” infinite loading spinners, and sandbox false positives all hit Windows users this cycle.
- **Linux desktop 26.924 is a major regression cluster.** Hangs on every prompt, tasks stuck at “Starting your task,” unreaped helper processes, conversations failing to load, and SIGCHLD handler conflicts appear across multiple reports.
- **Auth and MCP OAuth flows remain fragile.** Refresh-token rotation races, revoked-token errors after reauthentication, and repeated MCP re-login requests create friction for CLI and desktop users.
- **Shared app-server daemon state causes cross-session confusion.** Hook events can be attributed to the wrong terminal pane because the daemon inherits the first client’s environment.
- **Sandbox policy blocks lack diagnostics.** Developers cannot tell why validation commands are rejected or how to adjust policy safely.
- **Performance and lifecycle issues surface under real workloads.** SQLite connection setup, app-server state scans, high CPU during conversation loading, and unreaped helper processes indicate hardening still needed.
- **Model behavior inconsistency is a growing trust issue.** Xcode Coding Intelligence loops and suspected desktop routing/quality regressions consume usage without progress and are difficult to reproduce.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-09-29

## Today's Highlights
The repository shipped the `v0.63.0-nightly.20260928` build, while contributors closed several high-impact bugs including a long-running Windows/WSL infinite auth loop. Activity remains heavily concentrated on agent reliability, headless/non-interactive correctness, and hardening the hooks/security surface ahead of the v1.0 milestone.

## Releases
- **[v0.63.0-nightly.20260928.g2fe7c2d3f](https://github.com/google-gemini/gemini-cli/releases/tag/v0.63.0-nightly.20260928.g2fe7c2d3f)** — Automated nightly version bump. Full changelog: [compare v0.63.0-nightly.20260926...v0.63.0-nightly.20260928](https://github.com/google-gemini/gemini-cli/compare/v0.63.0-nightly.20260926.g2fe7c2d3f...v0.63.0-nightly.20260928.g2fe7c2d3f).

## Hot Issues

1. **[#3132 [Agents] Post V1.0 Work](https://github.com/google-gemini/gemini-cli/issues/3132)** — The highest-engagement roadmap issue (46 comments, 50 👍) tracks the design of a reusable `SubAgent` class for LLM-driven tool orchestration. It signals where the core agent architecture is heading after v1.0.

2. **[#22323 Subagent recovery after MAX_TURNS is reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** — A P1 bug where a `codebase_investigator` subagent hits the turn limit yet reports `status: "success"` and `Termination Reason: "GOAL"`, masking interruption and misleading downstream logic.

3. **[#28341 Infinite auth loop](https://github.com/google-gemini/gemini-cli/issues/28341)** — CLOSED. A widely reported Windows OAuth loop (10 👍) that blocked CLI usage across versions; resolution landed via a dedicated auth fix PR.

4. **[#10673 Flicker free robust terminal rendering](https://github.com/google-gemini/gemini-cli/issues/10673)** — Medium-effort effort to eliminate flicker, fix content outside the window area, and provide a performant alternative to Ink static rendering. Core UX polish for heavy terminal users.

5. **[#15269 Feature: Missing Subagent Hook Events](https://github.com/google-gemini/gemini-cli/issues/15269)** — Requests `BeforeSubAgent` / `AfterSubAgent` hook parity with the main agent lifecycle, important for observability and automation around subagent delegation.

6. **[#22745 Assess the impact of AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)** — An epic investigating whether AST-aware tooling can reduce token noise and misaligned reads. Tied directly to #22746 for possible `codebase_investigator` improvements.

7. **[#21968 Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** — A customer-reported friction that the model rarely invokes custom skills or sub-agents without explicit prompting, limiting the value of user-defined automation.

8. **[#11802 Add OTLP headers for telemetry](https://github.com/google-gemini/gemini-cli/issues/11802)** — Requests custom OTLP headers for authenticated telemetry export. A small but important enterprise/observability gap with 7 upvotes.

9. **[#24246 Gemini CLI encounters 400 error with > 128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)** — When many tools are enabled, the agent can exceed API limits. Users expect smarter tool scoping rather than hard failures.

10. **[#22186 get-shit-done output hook causes crash](https://github.com/google-gemini/gemini-cli/issues/22186)** — A P1 crash triggered near the end of a `get-shit-done` output hook print, indicating fragility in hook output handling.

## Key PR Progress

1. **[#29448 fix(auth): prevent infinite auth loop](https://github.com/google-gemini/gemini-cli/pull/29448)** — CLOSED. Resolves file contention with companion tools, adds headless keyring fallback, and fixes supervisor state drops that caused repeated OAuth flows on Windows/WSL.

2. **[#29528 fix(cli): propagate resolved folder trust state in headless mode](https://github.com/google-gemini/gemini-cli/pull/29528)** — Fixes a split-brain state where `useFolderTrust` reported trusted even when the workspace was untrusted, preventing silent trust bypasses in CI/headless runs.

3. **[#29539 fix(core): enable autonomous plan execution in non-interactive mode](https://github.com/google-gemini/gemini-cli/pull/29539)** — Allows Plan Mode to draft and execute strategies without waiting for user agreement when `interactive: false`, unblocking automated/CI plan workflows.

4. **[#29499 fix(core): serialize file tool operations and make writes atomic](https://github.com/google-gemini/gemini-cli/pull/29499)** — Eliminates lost-update races when parallel subagents or tools touch the same file, making file writes atomic and diffs reliable.

5. **[#29457 fix(core): replace fuzzy requestedExplicitly logic with glob matching](https://github.com/google-gemini/gemini-cli/pull/29457)** — Replaces naive substring matching in `read-many-files` with glob matching, preventing binary assets from being accidentally inlined and causing context bloat.

6. **[#29476 fix(cli): resolve hang on Enter keypress in interactive mode](https://github.com/google-gemini/gemini-cli/pull/29476)** — Fixes unresponsive `Enter` on tool confirmation prompts in IDE integrated terminals by decoupling confirmation events from IDE companion messages.

7. **[#29502 fix(cli): ensure Enter and Spacebar reliably confirm selection list options](https://github.com/google-gemini/gemini-cli/pull/29502)** — Touches `useSelectionList`, `RadioButtonSelect`, `ToolConfirmationMessage`, and `AskUserDialog` to make keyboard confirmation reliable across terminals, including Windows IDEs without Kitty Keyboard Protocol.

8. **[#29450 refactor(a2a-server): implement V1 to V2 settings migration logic](https://github.com/google-gemini/gemini-cli/pull/29450)** — Adds hierarchical V2 configuration support to the A2A server while preserving in-memory backward compatibility with flat V1 settings files.

9. **[#29492 fix(cli): avoid shell interpolation in sandbox build and network setup](https://github.com/google-gemini/gemini-cli/pull/29492)** — Hardens `BUILD_SANDBOX=1` paths against shell metacharacter injection by replacing string interpolation with explicit argument arrays.

10. **[#29536 fix(grep): prevent command-line option injection](https://github.com/google-gemini/gemini-cli/pull/29536)** — Defends `git grep` and system `grep` pipelines against CWE-88 option injection by forcing explicit `-e` pattern delimiters.

## Feature Request Trends
- **Subagent lifecycle and orchestration** — Recurring asks for hook parity, recursive delegation, turn-limit handling, and clearer success/failure semantics.
- **AST-aware and precision tooling** — Strong interest in smarter file reads, search, and codebase mapping to reduce token waste and misaligned edits.
- **Hooks extensibility and safety** — Requests for default sandboxing, enterprise toggles, and compatibility fixes with Claude Code conventions.
- **Observability and enterprise controls** — OTLP headers, OpenTelemetry epic, CI/CD security review, and onboarding tier handling.

## Developer Pain Points
- **Authentication and licensing reliability** — Infinite OAuth loops and tier-detection edge cases remain top blockers, especially on Windows and in headless environments.
- **Interactive/headless behavioral gaps** — Folder trust, plan mode, and keyboard input behave differently or hang in non-interactive contexts.
- **Agent behavior unpredictability** — Subagents masking failures as success, under-utilization of skills/sub-agents, and overly destructive commands create trust issues.
- **Windows-specific friction** — File locking during extension updates and terminal input handling show up repeatedly.
- **Security hardening expectations** — Users want deterministic redaction, sandboxed hooks, and injection-resistant shell invocation by default.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI — Community Digest
**Date: 2026-09-29** · Source: [github.com/github/copilot-cli](https://github.com/github/copilot-cli)

---

## 1. Today's Highlights

Release activity continues on the 1.0.89 line with `v1.0.90-0` and a series of incremental tags landing within the last 24 hours, headlined by support for Claude Code rule files in `.claude/rules`, PR-template-aware PR creation, and an unread-turn indicator in the session sidebar. The issue tracker is dominated by authentication reliability problems — a long-running process losing its token mid-session ([#4929](https://github.com/github/copilot-cli/issues/4929)) and hourly credential expiry ([#4971](https://github.com/github/copilot-cli/issues/4971)) — alongside a cluster of MCP OAuth/secret-handling defects. Notably, no pull requests were updated in the window, so all visible progress is shipping through release tags and issue triage.

---

## 2. Releases

### v1.0.90-0
- "Fixes and changes" — no detailed changelog body published yet.

### v1.0.89 (2026-09-28)
- **Left-click cursor placement**: Clicking supported `ask_user` and elicitation form inputs now focuses them and positions the cursor at the exact click location — a meaningful UX polish for interactive prompts.
- **Claude Code rule file support**: Custom instructions can now be sourced from `.claude/rules`, lowering migration friction for teams already standardized on Claude Code conventions.
- **Sidebar unread indicator**: Sessions that completed a turn you haven't opened display a blue dot, improving multi-session workflow awareness.

### v1.0.89-7
- "Fixes and changes" — no detailed changelog body published.

### v1.0.89-6
**Improved**
- PR creation now follows repository pull request templates, preserving required sections and checklist structure — a notable step toward CI/process compliance.
- Automatic indexed search activation is now configurable via `TGREP_FILE_COUNT_THRESHOLD`.

**Fixed**
- Shell output no longer shows trailing command-completion metadata.
- Timeline output truncation corrected (details cut off in source data).

---

## 3. Hot Issues

1. **[#1274 — CLI constantly returns 400 errors for invalid request body](https://github.com/github/copilot-cli/issues/1274)** · OPEN · 29 comments · 👍 12
   The most-discussed open issue in the window. Roughly 95% of code-review-on-diff prompts fail with HTTP 400, with the reporter unsure whether validation is server-side or the CLI is malforming requests. High comment volume and debug-log sharing suggest a systemic request-construction problem affecting a core workflow.

2. **[#4929 — Process-local auth token stops refreshing; all prompts fail until restart](https://github.com/github/copilot-cli/issues/4929)** · OPEN · 13 comments
   A long-running process permanently loses authentication; `/login` cannot recover it and only a restart/resume restores operation. This is arguably the highest-severity open bug — it makes long sessions fundamentally unreliable.

3. **[#1838 — Copilot CLI hangs in Nix/direnv environments due to subprocess I/O deadlock](https://github.com/github/copilot-cli/issues/1838)** · CLOSED · 7 comments · 👍 12
   The bash tool deadlocks when launched from Nix flake/direnv directories. Closure with strong upvote support indicates a well-scoped platform fix that the Nix community had been tracking closely.

4. **[#2958 — Support per-mode default model configuration (plan vs. autopilot)](https://github.com/github/copilot-cli/issues/2958)** · CLOSED · 5 comments · 👍 16
   The highest-upvoted item in this batch. Users want distinct default models per interaction mode via config file. Closure signals a shipped or accepted direction for model-configuration flexibility.

5. **[#3392 — Bash tool breaks on NixOS with version >= 1.0.49](https://github.com/github/copilot-cli/issues/3392)** · CLOSED · 5 comments · 👍 13
   `Failed to start bash process` on NixOS, reproduced under `strace`. Closely related to #1838 and indicative of a broader POSIX/Nix environment compatibility gap that has now been addressed.

6. **[#2216 — Text selection highlight has very low contrast on dark terminals](https://github.com/github/copilot-cli/issues/2216)** · CLOSED · 6 comments · 👍 2
   The dark purple/indigo selection background is nearly invisible on dark themes, making text effectively unreadable. A clear accessibility fix with steady community engagement.

7. **[#4971 — Every hour: "Authorization error. Your credentials may be expired or invalid"](https://github.com/github/copilot-cli/issues/4971)** · OPEN · [triage] · 3 comments
   `/login` completes successfully but does not remediate the failure, nor does `mcp reload`. This correlates strongly with #4929 and points to a token-refresh lifecycle defect rather than user error.

8. **[#4968 — OAuth redirect URI port mismatch breaks login to most MCP servers](https://github.com/github/copilot-cli/issues/4968)** · OPEN · [triage] · 2 comments
   The CLI publishes a CIMD declaring a fixed loopback port but binds an ephemeral port at runtime. This is a precise, high-impact root-cause analysis affecting MCP login broadly.

9. **[#4531 — Launching VS Code from Copilot CLI drops empty `GIT_CONFIG_VALUE` and breaks Git discovery](https://github.com/github/copilot-cli/issues/4531)** · OPEN · 3 comments · 👍 3
   Copilot CLI exports an indexed `GIT_CONFIG_*` block where the `core.fsmonitor` override has an empty value, corrupting Git behavior in child processes. Related in kind to [#3602](https://github.com/github/copilot-cli/issues/3602) (SDK mutating host `process.env`), highlighting environment leakage from the CLI into spawned tooling.

10. **[#4985 — MCP server env secret placeholders are not passed to spawned process](https://github.com/github/copilot-cli/issues/4985)** · OPEN · [triage] · 1 comment
    `${secret:...}` placeholders silently fail to reach stdio MCP servers on macOS, while plain environment variables work. Silent secret-handling failures are both a security and a debuggability concern.

*Other notable closed items:* [#1250](https://github.com/github/copilot-cli/issues/1250) (Windows silent exit via `getCACertificates`), [#3042](https://github.com/github/copilot-cli/issues/3042) (double trust prompt with `permissionDecision: "ask"`), [#1936](https://github.com/github/copilot-cli/issues/1936) (single `~` wrongly rendered as strikethrough), [#4442](https://github.com/github/copilot-cli/issues/4442) (`adm-zip` CVE-2026-39244).

---

## 4. Key PR Progress

**No pull requests were updated in the last 24 hours (Total: 0 items).** There is no PR-level activity to report for this window.

For context on where non-PR progress is visible instead:
- **Release-tag-driven delivery** — `v1.0.89`, `v1.0.89-6`, `v1.0.89-7`, and `v1.0.90-0` all landed within the window, carrying features such as `.claude/rules` support and PR-template-compliant PR creation.
- **Issue closures as an indirect signal** — the closure of [#1838](https://github.com/github/copilot-cli/issues/1838), [#3392](https://github.com/github/copilot-cli/issues/3392), [#2958](https://github.com/github/copilot-cli/issues/2958), and [#2216](https://github.com/github/copilot-cli/issues/2216) suggests fixes are flowing, but the corresponding PRs are not represented in this dataset.

---

## 5. Feature Request Trends

Distilling the most-requested directions across all listed issues:

- **Granular model configuration** — Per-mode default models for plan vs. autopilot ([#2958](https://github.com/github/copilot-cli/issues/2958), 👍 16) and array-valued `model:` fields in custom agent frontmatter ([#3070](https://github.com/github/copilot-cli/issues/3070)) show users want model choice to be contextual and declarative rather than global.
- **Instruction/rule interoperability** — Support for Claude Code rule files in `.claude/rules` (shipped in v1.0.89) reflects demand for portable, cross-tool instruction formats.
- **Richer interactive input** — `ask_user` improvements, including Ctrl-G/$EDITOR composition for long freeform answers ([#4050](https://github.com/github/copilot-cli/issues/4050)) and click-to-focus cursor placement (shipped in v1.0.89).
- **MCP authentication and secret plumbing** — Multiple requests target correct OAuth discovery ([#4606](https://github.com/github/copilot-cli/issues/4606), [#4968](https://github.com/github/copilot-cli/issues/4968)), slow-`initialize` tolerance ([#4983](https://github.com/github/copilot-cli/issues/4983)), and reliable secret delivery ([#4985](https://github.com/github/copilot-cli/issues/4985)).
- **Workflow/process compliance** — PR-template adherence (shipped in v1.0.89-6) and configurable indexed-search activation thresholds indicate appetite for repository-aware, tunable behavior.
- **Cross-platform parity** — Recurring requests and bugs target Nix/NixOS, Windows, and Linux parity for the bash tool, certificate handling, and process lifecycle.

---

## 6. Developer Pain Points

- **Authentication lifecycle is the top frustration.** [#4929](https://github.com/github/copilot-cli/issues/4929) and [#4971](https://github.com/github/copilot-cli/issues/4971) describe token refresh failing in long-running sessions, with `/login` unable to recover the process. This breaks long autonomous runs and is currently the most damaging open class of bug.
- **MCP setup is fragile end-to-end.** OAuth issuer trailing-slash mismatch ([#4606](https://github.com/github/copilot-cli/issues/4606)), redirect-URI port mismatch ([#4968](https://github.com/github/copilot-cli/issues/4968)), slow-`initialize` timeouts ([#4983](https://github.com/github/copilot-cli/issues/4983)), and unpassed secret placeholders ([#4985](https://github.com/github/copilot-cli/issues/4985)) collectively make MCP onboarding unreliable.
- **Environment leakage and platform incompatibility.** The CLI injects `GIT_CONFIG_*` variables into child processes ([#4531](https://github.com/github/copilot-cli/issues/4531), [#3602](https://github.com/github/copilot-cli/issues/3602)), and the bash tool has repeatedly broken on Nix/NixOS ([#1838](https://github.com/github/copilot-cli/issues/1838), [#3392](https://github.com/github/copilot-cli/issues/3392)) and Windows ([#1250](https://github.com/github/copilot-cli/issues/1250), [#4972](https://github.com/github/copilot-cli/issues/4972)).
- **Silent failures are hard to diagnose.** Windows startup exiting with no output ([#1250](https://github.com/github/copilot-cli/issues/1250)) and secrets vanishing without error ([#4985](https://github.com/github/copilot-cli/issues/4985)) force users into log-digging and `strace`-level debugging.
- **Terminal rendering and accessibility defects persist.** Low-contrast selection highlighting ([#2216](https://github.com/github/copilot-cli/issues/2216)), incorrect tilde strikethrough ([#1936](https://github.com/github/copilot-cli/issues/1936)), unrounded percentage display ([#1726](https://github.com/github/copilot-cli/issues/1726)), and forced bracketed paste blocking multi-line paste ([#2997](https://github.com/github/copilot-cli/issues/2997)).
- **Request-construction correctness.** [#1274](https://github.com/github/copilot-cli/issues/1274)'s 400-error rate remains unexplained and is the single largest source of comment volume, suggesting either server validation gaps or malformed client payloads.
- **Instruction adherence.** [#4986](https://github.com/github/copilot-cli/issues/4986) reports em-dash output despite explicit "no em dash" instructions, a recurring class of complaint about instruction-following fidelity.

---

*Digest generated from GitHub data for the 24-hour window ending 2026-09-29. PR data was empty for this period; release and issue signals were used as the primary indicators of project activity.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

Thinking Process:

1.  **Analyze the Request:**
    *   **Role:** Technical analyst focused on AI developer tools.
    *   **Task:** Generate the OpenCode community digest for 2026-09-29 based on provided GitHub data.
    *   **Source:** `github.com/anomalyco/opencode` (data provided in prompt).
    *   **Sections required:**
        1.  *Today's Highlights* - 2-3 sentences summarizing the most important updates.
        2.  *Releases* - Summarize changes if new versions exist (v1.18.33 is listed).
        3.  *Hot Issues* - Pick 10 noteworthy Issues, explain why they matter and community reaction (include links).
        4.  *Key PR Progress* - Pick 10 important PRs, describe features or fixes (include links).
        5.  *Feature Request Trends* - Distill the most-requested feature directions from all Issues.
        6.  *Developer Pain Points* - Summarize recurring developer frustrations or high-frequency requests.
    *   **Style:** Concise, professional, suited for technical developers.

2.  **Analyze the Data:**

    *   **Latest Releases (last 24h):**
        *   `v1.18.33`: Bug fixes include Cloudflare AI Gateway models honoring provider response/stream timeouts, MCP browser launch failures reported when launcher exits immediately, Debug configuration output redacting credentials/sensitive headers, Gemini thinking de... (truncated, but enough to summarize).

    *   **Latest Issues (top 30 by comment count, total 50 items in last 24h):**
        *   `#45278` [OPEN] Payment Declined After 3 Months Despite No Issue With Card or Bank (29 comments, 👍: 8) - Billing/payment issues.
        *   `#42421` [CLOSED] [2.0] runtime: todowrite/todoread TODO tools missing in V2 (14 comments) - V2 migration issue, missing core tools.
        *   `#42938` [OPEN] Go plan hits 100%, blocks 12h — "Use balance" enabled but $39.89 Zen balance never used (8 comments) - Billing/plan quota fallback logic flaw.
        *   `#42225` [OPEN] TUI does not re-layout on terminal shrink (only on grow) (7 comments) - TUI layout bug.
        *   `#41206` [OPEN] OpenCode Go weekly/monthly quota does not match usage history (7 comments) - Quota tracking discrepancy.
        *   `#9065` [CLOSED] [discussion] [FEATURE]: add model identity info to system prompt (7 comments) - Model self-awareness.
        *   `#51909` [OPEN] [FEATURE]: expose the running OpenCode version, provider and model in the agent env block (6 comments) - Extension of #9065, environment variable exposure.
        *   `#51887` [OPEN] [2.0] [Bug] OpenCode2 CLI Endlessly Pops Up Windows on Windows (5 comments) - Windows-specific install/execution bug.
        *   `#38964` [CLOSED] [FEATURE]: Sibling subagents cannot talk to each other without routing through the parent (5 comments) - Subagent communication topology.
        *   `#38963` [CLOSED] [FEATURE]: A subagent cannot ask the agent that spawned it a question (5 comments) - Subagent interaction limitation.
        *   `#51464` [OPEN] GitLab Responses: Astra fails fresh subagent creation while Opus succeeds (4 comments) - Model-specific subagent instantiation bug.
        *   `#51779` [CLOSED] Opencode Zen: Account budget exceeded (4 comments) - Backend billing status bug.
        *   `#49925` [OPEN] Error from provider (Console): OpenCode's free tier can only be used from within OpenCode (4 comments) - Desktop client restriction.
        *   `#36990` [OPEN] [2.0] core: restore non-experimental environment variable compatibility in v2 (3 comments) - V2 migration env var loss.
        *   `#51917` [OPEN] [Bug]: Session panel stops answering prompts mid-session with no output or error message (3 comments) - Desktop UI frozen/stuck session bug.
        *   `#51682` [OPEN] Go free models documented as "Unlimited" are blocked when any Go usage cap is reached (3 comments) - Go plan logic bug blocking free models.
        *   `#51224` [OPEN] permissions: parallel Code Mode asks for the same tool orphan the second request (3 comments) - Concurrent execution race condition.
        *   `#47839` [OPEN] [2.0] server: case-sensitive duplicate locations on Windows break instruction init (3 comments) - Windows case-sensitivity issue.
        *   `#51562` [OPEN] Paid $20 credits but balance remains $0 / Zen API returns 402 (2 comments) - Payment/credit sync delay/bug.
        *   `#23664` [CLOSED] Remote MCP headers: {env:...} interpolation not working (2 comments) - MCP env var interpolation bug.
        *   `#50464` [CLOSED] [FEATURE]: create-only --session-id flag for caller-chosen session IDs (2 comments) - CLI enhancement.
        *   `#51908` [CLOSED] agent: overly conservative interpretation of "never commit secrets" blocks writing (not committing) a file in-repo (2 comments) - Agent safety guardrail overreach.
        *   `#51919` [OPEN] [FEATURE]: Deep link to add an MCP server (opencode://add-mcp) (2 comments) - Deep linking for desktop.
        *   `#51916` [OPEN] [FEATURE]: Custom home screen logo (slot or setting; V1 home_logo has no V2 equivalent) (2 comments) - Customization feature.
        *   `#51223` [OPEN] permissions: asks from MCP tools inside Code Mode never surface in the TUI, execute hangs (2 comments) - Code Mode TUI rendering bug.
        *   `#51883` [CLOSED] model cirovents premission by wirting files using python (2 comments) - Agent permission triggers.
        *   `#51886` [OPEN] OpenCode Go subscription was deactivated accidentally and asks me to pay again (2 comments) - Account state bug.
        *   `#51881` [CLOSED] Entrée d'images (2 comments) - Image input support limitation for big-pickle.
        *   `#47584` [CLOSED] MCP server request timeout in Opencode Desktop (2 comments) - Timeout reliability.
        *   `#47742` [OPEN] [FEATURE]: Support a Shared .agents/ Directory and Manifest-Based Discovery (2 comments) - Agent sharing standard.

    *   **Latest Pull Requests (top 20 by comment count, total 50):**
        *   `#45940` [CLOSED] fix(tui): make session switching independent of transcript length - Closes #39380. Fixes session switching pauses due to unbounded per-session message cache growth.
        *   `#45936` [CLOSED] docs: add Corvex provider section - Adds standard /connect flow docs for Corvex inference platform.
        *   `#45933` [CLOSED] fix(session): trigger auto-compaction at the effective input ceiling - Closes #45168. Fixes auto-compaction gating logic (`usable()` capped by maxOutputTokens).
        *   `#45925` [CLOSED] fix(core): reject non-UTF-8 files instead of silently corrupting them - Closes #45924. Prevents U+FFFD corruption loops on GBK/Latin-1 files.
        *   `#45922` [CLOSED] docs(ecosystem): add opencode-mouth and opencode-global-sessions - Ecosystem documentation updates.
        *   `#45921` [CLOSED] feat(tui): prompt and steer selected subagents from the inspector - Closes #42670. Adds composer control for subagent steering in the compact TUI inspector.
        *   `#45919` [CLOSED] fix(console): protect legacy auth with turnstile - Adds Cloudflare Turnstile widget to legacy console auth worker to prevent bypass of GitHub/Google OAuth.
        *   `#45917` [CLOSED] docs: add opencode-local-context to ecosystem documentation - Plugin documentation for local context management.
        *   `#51924` [CLOSED] [contributor] fix(tui): deduplicate projects in the open picker - Prevents duplicate project rows pointing to the same directory.
        *   `#45916` [CLOSED] chore(deps): bump solid-js to 1.9.15 - Dependency upgrade.
        *   `#45915` [CLOSED] fix(format): bound formatter subprocesses with a timeout - Closes #45908. Prevents hanging formatter subprocesses (e.g., mix format, ktlint).
        *   `#45906` [CLOSED] fix(webfetch): convert application/xhtml+xml responses - Closes #45905. Prevents raw XML tag soup returns for XHTML pages.
        *   `#45903` [CLOSED] fix(webfetch): decode responses using the declared charset - Closes #45902. Fixes encoding issues (GBK/Shift_JIS/etc.) by honoring charset headers.
        *   `#45901` [CLOSED] feat(cli): support additional server URLs - Adds optional client connection URLs without replacing auto-discovered ones.
        *   `#45900` [CLOSED] fix(app): normalize terminal websocket path - Closes #45891. Fixes terminal websocket routing issues when server URL ends in `/`.
        *   `#45898` [CLOSED] fix(core): require external_directory approval when glob searches outside the Location - Security containment check for ripgrep.
        *   `#45894` [CLOSED] fix(edit): write newString literally instead of expanding $ replacement patterns - Closes #4592. Fixes unexpected variable expansion in edit operations.
        *   `#45888` [CLOSED] fix(core): match LF regions of mixed-ending files in edit - Closes #45880. Fixes line ending detection mismatch in mixed CRLF files.
        *   `#45886` [CLOSED] fix(core): keep captured output in bash timeout settlement - Closes #45881. Preserves partial command output on timeout.
        *   `#45884` [CLOSED] refactor(tui): use semantic feedback pairs - Refers to #42704. Adds distinct warning/error backgrounds for light/dark themes.

3.  **Drafting the Sections:**

    *   **Today's Highlights (2-3 sentences):**
        *   OpenCode v1.18.33 was released, focusing on critical stability fixes such as Cloudflare AI Gateway timeout handling, MCP launcher error reporting, and credential redaction in debug configs.
        *   The community is highly active, with major discussions centering around V2 migration bugs (such as missing `todowrite`/`todoread` tools and environment variable compatibility) and persistent billing and quota issues on the Go/Zen plans.
        *   Key development progress includes significant TUI and core fixes—such as resolving session switching pauses caused by unbounded transcript caching and securing glob searches outside the workspace location.

    *   **Releases:**
        *   **v1.18.33**
            *   *Core Bugfixes*: Cloudflare AI Gateway models now correctly honor provider response and stream timeouts. MCP browser launch failures are properly reported if the launcher exits immediately. Debug configuration output has been enhanced to redact credentials and sensitive headers. (Note: Gemini thinking part is truncated but indicates ongoing model-specific tweaks).

    *   **Hot Issues (Pick 10 noteworthy Issues, explain why they matter and community reaction):**
        *   Let's select the top 10 most critical or high-impact ones from the list, balancing user-blocking bugs, billing issues, and V2 migration regressions.
        *   1. **#45278 - Payment Declined After 3 Months Despite No Issue With Card or Bank** (haumannsvante, 29 comments, 👍 8): Sudden payment failures for long-standing subscribers severely impact user retention. High community empathy, pointing to backend billing system issues.
        *   2. **#42421 - [2.0] todowrite/todoread TODO tools missing in V2** (kiliantgs, 14 comments): Critical regression from V1 to V2 where core agent task-list tracking tools are lost, preventing the model from managing its own todo lists. Closed but highlights V2 migration friction.
        *   3. **#42938 - Go plan hits 100%, blocks 12h — "Use balance" enabled but $39.89 Zen balance never used** (CinematicEnciclopedia, 8 comments): Major logic flaw in subscription fallback; users get throttled instead of using available Zen balance. Frustration over 12-hour blocks.
        *   4. **#42225 - TUI does not re-layout on terminal shrink (only on grow)** (HermanShi, 7 comments): Visual layout bug in the TUI causing overflow or blank spaces when resizing terminals down, impacting mobile or constrained terminal users.
        *   5. **#41206 - OpenCode Go weekly/monthly quota does not match usage history** (diqdrax, 7 comments): Quota tracking discrepancies cause unexpected limits, breaking workflow continuity for Go plan subscribers.
        *   6. **#51909 - [FEATURE]: expose the running OpenCode version, provider and model in the agent env block** (PascalBourdier, 6 comments): High-demand feature request to let agents programmatically inspect their own environment context (model, version), crucial for dynamic tooling.
        *   7. **#51887 - [2.0] [Bug] OpenCode2 CLI Endlessly Pops Up Windows on Windows** (TGSAN, 5 comments): Severe Windows-specific execution bug where background server spawning triggers constant foreground window focus stealing, rendering the CLI nearly unusable on Windows.
        *   8. **#51464 - GitLab Responses: Astra fails fresh subagent creation while Opus succeeds** (pedropombeiro, 4 comments): Model-specific integration bug where GitLab's Astra model fails subagent session creation due to incorrect parent session ID mapping.
        *   9. **#51682 - Go free models documented as "Unlimited" are blocked when any Go usage cap is reached** (khaosdoctor, 3 comments): Logic bug where entire provider gets throttled when caps are hit, overriding documentation that promises "Unlimited" usage for specific free models.
        *   10. **#51917 - [Bug]: Session panel stops answering prompts mid-session with no output or error message** (AhmadObyd89, 3 comments): Silent failure/hang in Desktop session panel where prompts generate no response and no error, requiring session restarts.

    *   **Key PR Progress (Pick 10 important PRs, describe features or fixes):**
        *   1. **#45921 - feat(tui): prompt and steer selected subagents from the inspector** (nitishagar): Allows users to directly prompt and steer subagents via the compact TUI inspector, enhancing multi-agent workflow management.
        *   2. **#45940 - fix(tui): make session switching independent of transcript length** (nitishagar): Resolves severe lag/pauses during session switching by capping/per-session message cache growth, dramatically improving TUI performance.
        *   3. **#45933 - fix(session): trigger auto-compaction at the effective input ceiling** (reisi007): Fixes auto-compaction trigger thresholds, preventing premature or late compactions by accounting for output token caps.
        *   4. **#45925 - fix(core): reject non-UTF-8 files instead of silently corrupting them** (skyzhao1223): Prevents silent data corruption when editing files with non-UTF-8 encodings (like GBK or Latin-1) by failing safely instead of writing replacement characters.
        *   5. **#45898 - fix(core): require external_directory approval when glob searches outside the Location** (skyzhao1223): Security hardening patch ensuring glob searches outside the designated workspace directory require explicit user approval.
        *   6. **#45894 - fix(edit): write newString literally instead of expanding $ replacement patterns** (skyzhao1223): Fixes a major bug where literal `$` patterns in model edit instructions were unexpectedly interpreted and expanded as regex replacement variables.
        *   7. **#45903 - fix(webfetch): decode responses using the declared charset** (skyzhao1223): Ensures webfetch correctly parses non-UTF-8 character sets (like Shift_JIS or GB18030) by honoring HTML meta charset and Content-Type headers.
        *   8. **#45915 - fix(format): bound formatter subprocesses with a timeout** (skyzhao1223): Prevents formatter hangs (e.g., cold Elixir compilation or pathological files in ktlint) by enforcing subprocess timeouts.
        *   9. **#45919 - fix(console): protect legacy auth with turnstile** (adamdotdevin): Security enhancement adding Cloudflare Turnstile challenges to legacy console auth worker to block automated OAuth bypasses.
        *   10. **#51924 - fix(tui): deduplicate projects in the open picker** (kitlangton): Cleans up the project picker UI

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



# Pi Community Digest — 2026-09-29

## Today's Highlights

The past 24 hours brought a dense wave of both feature work and bug fixes. On the feature side, mitsuhiko pushed three significant PRs — **Codemode + MCP** (#10040), **Virtual Models** (#10035), and a **managed llama.cpp server mode** (#10122) — signaling a strong push toward extensibility and local-model ergonomics. On the stability front, several long-running bugs around compaction, tool-call handling, and TUI rendering were closed, while a high-comment-count issue around ESC-stuck "Working..." states remains open and unresolved.

## Releases

No new releases were published in the last 24 hours.

## Hot Issues

1. **#10031 — Pi sporadically stuck in "Working..." when thinking is stopped with `<esc>`** ([earendil-works/pi#10031](https://github.com/earendil-works/pi/issues/10031))
   Open since 2026-09-25, 17 comments, 2 👍. Users report Pi frequently hangs after ESC-interrupting a thinking block, forcing a full restart. Affects multiple machines and has persisted since ~v0.84.0. The comment volume signals a high-impact, reproducible regression.

2. **#9508 — pi-ai sends unsupported OpenAI-specific request fields/roles/auth to compatible providers** ([earendil-works/pi#9508](https://github.com/earendil-works/pi/issues/9508))
   Open since 2026-09-12, 8 comments. OpenAI-compatible providers (especially self-hosted ones like llama.cpp, vLLM, etc.) reject requests carrying OpenAI-only fields or auth headers. This is a real interoperability gap for the growing "bring your own API" crowd.

3. **#10074 — Anthropic tool calls: corrupted non-ASCII edit arguments are silently accepted** ([earendil-works/pi#10074](https://github.com/earendil-works/pi/issues/10074))
   Open since 2026-09-26, 3 comments. Korean (and likely other CJK) text in `edit` tool calls gets corrupted — `\uXXXX` escapes are mangled into control characters, silently corrupting files. Three weeks of recurrence with no clean fix.

4. **#10077 — llama.cpp model: contextWindow getting reset to 128000 in models-store.json** ([earendil-works/pi#10077](https://github.com/earendil-works/pi/issues/10077))
   Open since 2026-09-26, 3 comments. Users setting `ctx-size: 65536` in `presets.ini` find the stored config sometimes overrides it with 128000. Breaks memory/cost expectations for local model users.

5. **#10033 — Compaction prompt includes all thinking text and exceeds the context window** ([earendil-works/pi#10033](https://github.com/earendil-works/pi/issues/10033))
   Closed, 7 comments, 1 👍. `serializeConversation()` dumps full thinking blocks into the compaction summary prompt, making auto-compaction impossible on long reasoning-model sessions (DeepSeek V4.1 reported). The fix likely needs to redact or summarize thinking, not forward it verbatim.

6. **#9974 — pi mishandles Responses API tool calls from llama.cpp, executing duplicated/corrupted calls** ([earendil-works/pi#9974](https://github.com/earendil-works/pi/issues/9974))
   Closed, 6 comments. SSE stream parsing for the Responses API produces duplicate or corrupted `function_call` items when llama.cpp is the backend. A correctness issue for anyone routing through llama.cpp with the Responses API.

7. **#9905 — Anthropic: `thinking.display` is always sent as "summarized" with no CLI override** ([earendil-works/pi#9905](https://github.com/earendil-works/pi/issues/9905))
   Closed, 6 comments. The code hard-codes `"summarized"` with no way to switch to `"omitted"` from the CLI. Users who want full thinking visibility have no knob.

8. **#10101 — AGENTS.md is read by the resource loader but never injected into the system prompt** ([earendil-works/pi#10095](https://github.com/earendil-works/pi/issues/10101))
   Closed, 2 comments. `AGENTS.md` is detected and opened but silently dropped from the system prompt. strace confirms the file is read; `cacheRead` stats show it never reaches the model. A silent feature gap for project-context workflows.

9. **#10105 / #10104 — Session creation re-loads all extensions every time (4s → >280s)** ([earendil-works/pi#10105](https://github.com/earendil-works/pi/issues/10105), [#10104](https://github.com/earendil-works/pi/issues/10104))
   Both closed, 2 comments each. With 34+ packages and 70+ extensions, every new session pays the full extension-loading cost, and the cost grows cumulatively in long-running hosts (pi-web-ui). A severe performance cliff for power users.

10. **#10137 — Failed threshold compaction continues with the unchanged context** ([earendil-works/pi#10137](https://github.com/earendil-works/pi/issues/10137))
    Closed, 2 comments. When compaction hits the summary token cap, the error is reported but the next model call still sends the uncompressed context. Users get repeated failures instead of a graceful fallback.

## Key PR Progress

1. **#10040 — feat(coding-agent): Codemode and MCP** ([earendil-works/pi#10040](https://github.com/earendil-works/pi/pull/10040))
   Open, by mitsuhiko. A large PR bundling codemode (JS sandbox for models like "Jev") and MCP (Model Context Protocol) support into Pi. This is the biggest extensibility play in the current cycle.

2. **#10035 — feat(coding-agent): Virtual models** ([earendil-works/pi#10035](https://github.com/earendil-works/pi/pull/10035))
   Closed, by mitsuhiko. Adds `pi.registerVirtualModel()` — catalog entries that don't talk to a provider directly but route to a physical model + thinking level. Enables pluggable routing policies.

3. **#10122 — feat(coding-agent): managed llama.cpp server mode** ([earendil-works/pi#10122](https://github.com/earendil-works/pi/pull/10122))
   Open, by mitsuhiko. `/login llama.cpp` can now launch `llama-server` itself — detached supervisor, random local port, auto-stop on last disconnect. Big ergonomics win for local-model users.

4. **#9714 — feat(ai): Azure Foundry Chat Completions support** ([earendil-works/pi#9714](https://github.com/earendil-works/pi/pull/9714))
   Open, by jsanter27. The Azure provider previously only spoke Responses API; this adds Chat Completions, unblocking DeepSeek V4 Pro on Azure Foundry.

5. **#10142 — fix(ai): send reasoning effort to OpenAI models on Bedrock Converse** ([earendil-works/pi#10142](https://github.com/earendil-works/pi/pull/10142))
   Open, by jsanter27. Bedrock Converse adapter only sent thinking fields for Claude; OpenAI models always ran at Bedrock's default `medium` effort. Now `reasoning_effort` is forwarded.

6. **#10136 — fix(coding-agent,tui): paste Finder file paths instead of icons** ([earendil-works/pi#10136](https://github.com/earendil-works/pi/pull/10136))
   Closed, by christianklotz. On macOS, `Ctrl+V` pasted the Finder file icon instead of the file path when a file was copied in Finder. Now reads file URLs before clipboard image data.

7. **#9993 — feat(ai,coding-agent): Anthropic Claude support on Google Vertex AI** ([earendil-works/pi#9993](https://github.com/earendil-works/pi/pull/9993))
   Closed, by unrealandychan. The `google-vertex` catalog generator previously excluded all non-Gemini models; now Claude Opus/Sonnet/Haiku are available via Vertex AI Model Garden with ADC or API key auth.

8. **#10135 — fix(coding-agent): normalise compaction usage to prevent footer crash on resume** ([earendil-works/pi#10135](https://github.com/earendil-works/pi/pull/10135))
   Closed, by holny. `summaryUsage` was persisted raw from the provider response, crashing the footer UI on session resume.

9. **#10134 — fix(coding-agent): preserve tool prompt fields in built-in-tool-renderer example** ([earendil-works/pi#10134](https://github.com/earendil-works/pi/pull/10134))
   Closed, by holny. The example extension was stripping tool prompt fields when creating bare tools via `createReadTool()` etc., silently changing what the model saw.

10. **#10113 — Keep useful lines when shell output is tail-truncated** ([earendil-works/pi#10113](https://github.com/earendil-works/pi/pull/10113))
    Closed, by arjunkshah12345-hash. When bash/PowerShell output exceeds 2,000 lines / 50KB, only the tail is kept; important lines above that boundary were invisible to the model. Now surfaces relevant lines from the truncated head when `SUPERCOMPRESS_API_KEY` is set.

## Feature Request Trends

- **Extension loading performance** — caching or lazy-loading of extensions to avoid 4s→280s session creation cliffs (#10104, #10105).
- **AGENTS.md / project-context injection** — ensuring detected context files actually reach the system prompt (#10101).
- **OpenAI-compatible provider interoperability** — stripping OpenAI-only fields, roles, and auth headers for third-party providers (#9508).
- **Thinking block transparency** — giving users control over `thinking.display` (#9905) and fixing compaction to handle thinking text correctly (#10033).
- **TUI prompt and dialog typing** — typed TUI `select`/`confirm`/`input`/`editor` dialogs for remote/extension responders (#10123, #10124).
- **Managed local model servers** — supervisor-managed llama.cpp server lifecycle (#10122).
- **Clipboard and file-path handling** — pasting file paths instead of icons on macOS (#9999, #10136).

## Developer Pain Points

- **Session creation cost explodes with extension count** — the same 34-package setup that once took 4s now takes 280s, and the cost keeps growing across sessions in a long-running host. This is a structural scaling problem, not a one-off regression.
- **Provider compatibility is fragile** — OpenAI-specific fields leak into requests for llama.cpp, vLLM, and other compatible providers, causing 400/422 errors. Bedrock Converse had a similar issue with reasoning effort not being forwarded. Each provider adapter seems to need bespoke fixes.
- **Thinking-block handling is inconsistent** — compaction dumps full thinking into the summary prompt (breaking context limits), Anthropic hard-codes `"summarized"` with no override, and ESC-interrupting a thinking block can hang the agent entirely. Reasoning models expose a lot of edge cases.
- **Silent failures in context injection** — `AGENTS.md` is read but never injected, and the `built-in-tool-renderer` example was stripping tool prompt fields. Both are "works on my machine" bugs that only surface through careful tracing.
- **TUI rendering regressions** — fullscreen exit corrupts scrollback (#9828), multiline syntax highlighting only colors the first line (#10143), and frozen partial frames accumulate in regular mode with dock widgets (#10141). The TUI layer is showing stability strain.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-09-29

## 1. Today's Highlights
The project is deep in the Managed Agent / `qwen serve` architecture buildout, with the dual-path proposal (#12380) and its staged follow-ups (#12737, #12847, #12867) driving most discussion. Memory and context governance remains the other dominant theme, spanning the token-governance umbrella (#12028), structured Auto Memory rollout (#12947), and a new extraction-overhead perf PR (#12951). On the correctness side, several P1/P2 bugs landed or were fixed, including the Remote-SSH session failure (#12416) and a fresh-install ripgrep exec-bit defect (#12679).

## 2. Releases
None in the last 24 hours.

## 3. Hot Issues
1. **[#12380] proposal(serve): Define Managed Agent dual-path architecture and staged delivery** — 37 comments. The single most active thread; defines durable Session ownership, Workspace bindings, and a stable Web Shell surface while keeping the existing TS agent loop. Foundational for the daemon roadmap. [link](https://github.com/QwenLM/qwen-code/issues/12380)
2. **[#12416] Remote-SSH: every POST /session fails with `write EPIPE` / `BridgeChannelClosedError` (P1)** — 17 comments. Companion 0.24.2 breaks all Remote-SSH sessions while the bundled CLI works standalone, a high-impact blocker for remote developers. [link](https://github.com/QwenLM/qwen-code/issues/12416)
3. **[#12737] feat(acp-bridge): Stage B host integration for paired Legacy and Managed engines** — 13 comments. Schedules Managed execution priority and retains merged paired-host foundations; key to the multi-agent delivery plan. [link](https://github.com/QwenLM/qwen-code/issues/12737)
4. **[#12028] tracking(core): non-conversation context token governance** — 11 comments. Highlights that system prompt, tool schemas, `QWEN.md`, and skill listings are billed on every request and often dwarf the conversation. [link](https://github.com/QwenLM/qwen-code/issues/12028)
5. **[#12947] Track structured Auto Memory rollout readiness on main (in-progress)** — 7 comments. Closeout tracker for correctness/effectiveness work before broader rollout; child of #12028. [link](https://github.com/QwenLM/qwen-code/issues/12947)
6. **[#10151] Improve Auto Memory with structured recall and lossless migration** — 6 comments. Proposes retrieval metadata and legacy-compatible fallback; the design anchor for the memory workstream. [link](https://github.com/QwenLM/qwen-code/issues/10151)
7. **[#8281] Add an Email channel with IMAP and SMTP support** — 6 comments. Provider-neutral agent mailbox channel, part of the background-automation roadmap. [link](https://github.com/QwenLM/qwen-code/issues/8281)
8. **[#12853] follow-up(memory): resolve non-blocking review debt after #10183** — 6 comments. Illustrates the repo's review policy in action: defer non-blocking findings to keep large PRs converging. [link](https://github.com/QwenLM/qwen-code/issues/12853)
9. **[#12059] vscode-ide-companion: cover remote-webview failure modes** — 6 comments. Follow-up to the remote-window daemon fix; covers forwarded-port Host gate, IPv6 CSP, and Remote-SSH/WSL runs. [link](https://github.com/QwenLM/qwen-code/issues/12059)
10. **[#12679] Fresh global install ships vendored ripgrep at 0644 (P1, CLOSED)** — 5 comments. A packaging bug with no exec-bit restore path; now closed but a good example of install-integrity pain. [link](https://github.com/QwenLM/qwen-code/issues/12679)

Honorable mentions: **[#12835]** skills listing leaked when the Skill tool is excluded (CLOSED), and **[#12928]** hard-coded `temperature` causing HTTP 400 on modern providers.

## 4. Key PR Progress
1. **[#12951] perf(memory): reduce automatic extraction token overhead** — Cuts managed-memory extraction cost by stripping runtime reminder blocks, skill catalogs, and hidden reasoning from inherited context. [link](https://github.com/QwenLM/qwen-code/pull/12951)
2. **[#12958] fix(core): remove hard-coded temperatures from internal model requests (#12928)** — Fixes HTTP 400s on OpenAI GPT-6 / Astra-style endpoints that reject `temperature`. [link](https://github.com/QwenLM/qwen-code/pull/12958)
3. **[#12868] feat(serve): implement generic Broker provider controls** — Connects the Broker provider to a versioned worker contract (manifest, turn/tool prep, approval, preflight, file history) with durable references. [link](https://github.com/QwenLM/qwen-code/pull/12868)
4. **[#12358] feat(managed-agent): Add standalone managed agent stack** — End-to-end preview from resident Harness through the Java control plane to session-scoped Tool Runtimes. [link](https://github.com/QwenLM/qwen-code/pull/12358)
5. **[#12901] fix(core): pre-validate bridged tool_call arguments against the target schema** — Rejects invalid bridged calls with `INVALID...` before scheduling, closing the deferred-schema gap in #12889. [link](https://github.com/QwenLM/qwen-code/pull/12901)
6. **[#12862] fix(cli): scrub userinfo credentials from aux-model selector egress** — Prevents `user:sk-...@host` credentials embedded in provider base URLs from leaking into persisted selectors. [link](https://github.com/QwenLM/qwen-code/pull/12862)
7. **[#12531] fix(core): stop MCP server rules from authorizing a colliding server** — Removes lossy `sanitizeToolNameForProvider()` comparison so wildcard/prefix permission patterns match literally. [link](https://github.com/QwenLM/qwen-code/pull/12531)
8. **[#12665] fix(cli): report dropped @-references instead of dropping them silently** — Surfaces refusals (outside workspace, unreadable, ignored, server refs) instead of disappearing them. [link](https://github.com/QwenLM/qwen-code/pull/12665)
9. **[#12127/#12129/#12130/#12247] feat(mobile): accessibility, microphone consent, Blob export picker, and connection restore** — A coordinated mobile phase-2 batch improving native accessibility, explicit mic consent, Android Save picker exports, and WebView state recovery. [link](https://github.com/QwenLM/qwen-code/pull/12127) · [12129](https://github.com/QwenLM/qwen-code/pull/12129) · [12130](https://github.com/QwenLM/qwen-code/pull/12130) · [12247](https://github.com/QwenLM/qwen-code/pull/12247)
10. **[#12954] test(hosted): gate Shell output capture failures (FG6f)** — Fault-injection gates against the packaged Harness/Broker to validate durable output-prefix recovery. [link](https://github.com/QwenLM/qwen-code/pull/12954)

Also notable: **[#12945]** Hosted latency baseline and **[#12896]** FG6c process-crash gates, both advancing Managed Agent verification.

## 5. Feature Request Trends
- **Managed Agent / `qwen serve` architecture** — The largest cluster: dual-path design (#12380), ACP-bridge host integration (#12737), task contract gaps (#12847), and Stage D durable lifecycle (#12867). Durable Sessions, Workspaces, and Web Shell are the recurring primitives.
- **Memory & context governance** — Structured Auto Memory recall (#10151), rollout readiness (#12947), token governance for non-conversation context (#12028), recall-budget validation (#8998), and extraction frequency gating (#11471).
- **Integration channels** — Email/IMAP-SMTP (#8281) and broader IDE/VSCode companion hardening (#12059).
- **Mobile/Web Shell UX** — Accessibility, consent, and export flows via the mobile PR batch.

## 6. Developer Pain Points
- **Remote & packaged-environment fragility** — Remote-SSH session failures (#12416), VSCode remote-webview modes (#12059), and the ripgrep exec-bit defect (#12679) all point to install/runtime integrity issues that bite users on real hosts.
- **Token cost opacity** — Non-conversation context silently inflates every request (#12028), and Auto Memory extraction overhead (#12951) compounds it.
- **Provider compatibility** — Hard-coded request parameters (`temperature`) now break modern endpoints (#12928/#12958), a recurring theme as providers tighten APIs.
- **Review-debt accumulation** — Multiple trackers (#11408, #12853, #12847) exist solely to capture deferred non-blocking findings, reflecting a high-volume, policy-driven review process where large PRs must converge.
- **Silent failures** — Dropped `@`-references (#12665), unreadable JDBC rows (#12859/#12899), and missing diff-reconstruction hints (#12919) show a consistent demand for explicit, durable error reporting over silent degradation.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-09-29

## 1. Today's Highlights
- v0.10.1 release prep is active in PR [#6708](https://github.com/Hmbown/Codewhale/pull/6708), but `main` is still reported red on clean HEAD in both Windows and Linux workspace gates ([#6702](https://github.com/Hmbown/Codewhale/issues/6702), [#6698](https://github.com/Hmbown/Codewhale/issues/6698)).
- Network resilience is the dominant runtime theme: SSE header failures terminate turns without retry ([#6699](https://github.com/Hmbown/Codewhale/issues/6699)), and retry/timeout budgets remain hard-coded ([#6700](https://github.com/Hmbown/Codewhale/issues/6700)).
- Session/undo ownership and TUI rendering continue to receive focused fixes, while provider catalog gaps remain a recurring source of user-facing failures ([#6705](https://github.com/Hmbown/Codewhale/issues/6705), [#6695](https://github.com/Hmbown/Codewhale/issues/6695)).

## 2. Releases
No new releases in the last 24h. The v0.10.1 release PR is open: [#6708](https://github.com/Hmbown/Codewhale/pull/6708).

## 3. Hot Issues
1. **[#5316 — EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)](https://github.com/Hmbown/Codewhale/issues/5316)** — Highest-engagement issue with 29 comments. Tracks crate decomposition, ownership, dependency order, and Core execution evidence. Community reaction: active maintainer/contributor coordination.
2. **[#6015 — adaptive anti-stall + wider read-only shell grammar](https://github.com/Hmbown/Codewhale/issues/6015)** — Closed, 9 comments. Admits adaptive anti-stall and safe read-only shell grammar into C05/C06 of the Core plan. Matters because it changes default fleet behavior, not per-user config.
3. **[#6699 — Turn fails with no retry when SSE request never receives response headers](https://github.com/Hmbown/Codewhale/issues/6699)** — Open, 2 comments. A network failure before the stream opens kills the interactive turn with no retry at any layer. High-impact reliability gap.
4. **[#6700 — Expose stream retry budgets and transport timeouts as configuration](https://github.com/Hmbown/Codewhale/issues/6700)** — Open, 1 comment. Operators on proxies/unreliable networks cannot tune compiled-in constants. Clear operational pain point.
5. **[#6705 — opencode-zen: 58 of 111 catalog models fail closed as “unproven endpoint”](https://github.com/Hmbown/Codewhale/issues/6705)** — Open, 0 comments. Stale curated wire list blocks model dispatch. Matters for first-class provider usability.
6. **[#6698 — shared-process workspace gate fails on main while nextest CI passes](https://github.com/Hmbown/Codewhale/issues/6698)** — Open, 0 comments. Reports clean `main@0bfe04e1` red after #6672. CI trust and release-readiness issue.
7. **[#6702 — health digest 2026-09-28](https://github.com/Hmbown/Codewhale/issues/6702)** — Bot-authored digest, 0 comments. Flags `main` red at HEAD `0bfe04e1`, with Windows `snapshot_tests` failure. Useful signal for release blockers.
8. **[#6704 — The text background in the TUI interface is abnormal](https://github.com/Hmbown/Codewhale/issues/6704)** — Open, 0 comments. After ~30 minutes in focus, text background turns black. Long-session TUI visual regression.
9. **[#6697 — latest-message jump button in the TUI renders abnormally](https://github.com/Hmbown/Codewhale/issues/6697)** — Open, 0 comments. Multiple horizontal lines on the button. Small but visible TUI polish issue.
10. **[#6690 — v0.10.0: OpenRouter session costs always show “rate unavailable”](https://github.com/Hmbown/Codewhale/issues/6690)** — Closed, 0 comments. `~`-alias IDs break provider-lake refresh and `custom_models` overrides are ignored. Important cost-observability bug for OpenRouter users.

## 4. Key PR Progress
1. **[#6708 — release: v0.10.1](https://github.com/Hmbown/Codewhale/pull/6708)** — Open. Bumps version-bearing files, dates the CHANGELOG, and credits contributors. Release-prep PR.
2. **[#6703 — fix(engine): no per-turn wall-clock limit by default](https://github.com/Hmbown/Codewhale/pull/6703)** — Closed. Removes the one-hour turn stop reported during 0.10.1 release checks. Improves long autonomous runs.
3. **[#6707 — refactor(commands): make the complete debug group portable (FEAT-029)](https://github.com/Hmbown/Codewhale/pull/6707)** — Open. Closes [#6706](https://github.com/Hmbown/Codewhale/issues/6706). Completes adoption for all fourteen debug slash commands.
4. **[#6646 — perf(tui): stop walking the whole item store to list or open a thread](https://github.com/Hmbown/Codewhale/pull/6646)** — Open. Targets 1.3s warm / 6.7s cold thread open on a 140-thread, 294MB store. Significant TUI performance fix.
5. **[#6645 — fix(runtime): threads own the restore points on their turns; undo restores or refuses](https://github.com/Hmbown/Codewhale/pull/6645)** — Closed. Closes [#6621](https://github.com/Hmbown/Codewhale/issues/6621) and [#6659](https://github.com/Hmbown/Codewhale/issues/6659). Fixes random session IDs and broken file undo.
6. **[#6682 — fix(tui): scope /undo to the paths the undone step changed](https://github.com/Hmbown/Codewhale/pull/6682)** — Closed. Closes [#6644](https://github.com/Hmbown/Codewhale/issues/6644). Replaces whole-tree restore with path-scoped undo.
7. **[#6687 — fix(tui): first launch keeps the configured provider instead of adopting local Ollama](https://github.com/Hmbown/Codewhale/pull/6687)** — Closed. Fixes fresh installs silently switching to local Ollama. Important first-run correctness.
8. **[#6660 — Runtime: turns carry typed artifact references](https://github.com/Hmbown/Codewhale/pull/6660)** — Closed. Adds item, turn aggregate, workspace delta, and read-route artifact refs. Enables Preview/observability.
9. **[#6640 — fix(sessions): stop orphaning sessions at their writers and repair existing orphans](https://github.com/Hmbown/Codewhale/pull/6640)** — Closed. Closes [#6144](https://github.com/Hmbown/Codewhale/issues/6144). Establishes session document authority and repairs orphans.
10. **[#6619 — fix(tools): one recoverable size budget for tool output](https://github.com/Hmbown/Codewhale/pull/6619)** — Closed. Closes [#6508](https://github.com/Hmbown/Codewhale/issues/6508). Replaces truncation behavior that dropped failures and summaries.

## 5. Feature Request Trends
- **Configurable network resilience:** retry budgets, transport timeouts, and retry-on-SSE-header-failure are repeatedly requested ([#6699](https://github.com/Hmbown/Codewhale/issues/6699), [#6700](https://github.com/Hmbown/Codewhale/issues/6700)).
- **Provider/catalog expansion and freshness:** opencode-zen wire list, Tsubasa descriptor, AICraft metadata, and OpenRouter pricing accuracy ([#6705](https://github.com/Hmbown/Codewhale/issues/6705), [#6695](https://github.com/Hmbown/Codewhale/issues/6695), [#6616](https://github.com/Hmbown/Codewhale/issues/6616), [#6690](https://github.com/Hmbown/Codewhale/issues/6690)).
- **TUI/UX polish and portability:** debug command portability, rendering fixes, footer/thinking labels, mobile agent progress ([#6707](https://github.com/Hmbown/Codewhale/pull/6707), [#6704](https://github.com/Hmbown/Codewhale/issues/6704), [#6697](https://github.com/Hmbown/Codewhale/issues/6697), [#6686](https://github.com/Hmbown/Codewhale/pull/6686), [#6638](https://github.com/Hmbown/Codewhale/pull/6638)).
- **Runtime observability:** turns should carry artifact references, receipts, and previewable outputs ([#6660](https://github.com/Hmbown/Codewhale/pull/6660), [#6653](https://github.com/Hmbown/Codewhale/issues/6653), [#6591](https://github.com/Hmbown/Codewhale/pull/6591)).
- **Session/undo correctness:** one session authority, path-scoped undo, stable thread snapshots ([#6144](https://github.com/Hmbown/Codewhale/issues/6144), [#6644](https://github.com/Hmbown/Codewhale/issues/6644), [#6621](https://github.com/Hmbown/Codewhale/issues/6621)).
- **Background work lifecycle:** parent-death cleanup, read-only shell grammar, adaptive anti-stall ([#6654](https://github.com/Hmbown/Codewhale/issues/6654), [#6015](https://github.com/Hmbown/Codewhale/issues/6015)).

## 6. Developer Pain Points
- **CI and release readiness:** `main` is red at HEAD, shared-process workspace gate fails, and Windows snapshot tests fail while v0.10.1 is being prepared ([#6702](https://github.com/Hmbown/Codewhale/issues/6702), [#6698](https://github.com/Hmbown/Codewhale/issues/6698), [#6665](https://github.com/Hmbown/Codewhale/issues/6665)).
- **Flaky-network handling:** SSE header failure has no retry, and retry/timeout budgets are hard-coded, leaving proxy users without recourse ([#6699](https://github.com/Hmbown/Codewhale/issues/6699), [#6700](https://github.com/Hmbown/Codewhale/issues/6700)).
- **Stale provider catalog:** 58/111 opencode-zen models fail closed, OpenRouter costs show “rate unavailable,” and descriptor gaps persist ([#6705](https://github.com/Hmbown/Codewhale/issues/6705), [#6690](https://github.com/Hmbown/Codewhale/issues/6690), [#6616](https://github.com/Hmbown/Codewhale/issues/6616)).
- **Session and undo inconsistency:** competing session authorities, orphaned sessions, unbound threads, and whole-tree undo behavior ([#6144](https://github.com/Hmbown/Codewhale/issues/6144), [#6644](https://github.com/Hmbown/Codewhale/issues/6644), [#6621](https://github.com/Hmbown/Codewhale/issues/6621)).
- **TUI rendering regressions:** text background turns black, jump button renders with lines, cursor remains visible, and footer labels truncate ([#6704](https://github.com/Hmbown/Codewhale/issues/6704), [#6697](https://github.com/Hmbown/Codewhale/issues/6697), [#6545](https://github.com/Hmbown/Codewhale/issues/6545), [#6686](https://github.com/Hmbown/Codewhale/pull/6686)).
- **Tool output truncation:** `run_tests`/`git_diff` keep only the first 40k chars and drop failures; native search answers were cut to 4k ([#6508](https://github.com/Hmbown/Codewhale/issues/6508)).
- **Background shell lifecycle:** `background: true` shells can outlive a TUI that dies without unwinding ([#6654](https://github.com/Hmbown/Codewhale/issues/6654)).
- **CLI argument limits:** `codewhale exec` fails with `E2BIG` above ~128 KiB because the prompt is argv-only ([#6688](https://github.com/Hmbown/Codewhale/issues/6688)).
- **First-run provider override:** a configured provider can be silently replaced by local Ollama on first launch ([#6687](https://github.com/Hmbown/Codewhale/pull/6687)).
- **Long-turn limits:** a one-hour wall-clock cap stopped a progressing autonomous turn until removed by [#6703](https://github.com/Hmbown/Codewhale/pull/6703).

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

# ComfyUI Community Digest — 2026-09-29

## Today's Highlights
No new releases landed in the last 24h. The community’s attention is split between a critical security report for a malicious custom-node package, a cluster of platform-specific Qwen-Image 2.1 / MiniMax H3 failures (MPS, ROCm, Windows multi-GPU), and a performance-focused PR stack targeting output rescans and asset scans. AMD `gfx1032` bf16 selection and `/free` flag handling also saw targeted fixes.

## Releases
No new releases in the last 24h.

## Hot Issues

1. **[Security report] champdev-comfyui-nodes — RAT + cryptominer after install** — [Comfy-Org/ComfyUI#16631](https://github.com/comfyanonymous/ComfyUI/issues/16631)  
   A Windows ComfyUI Desktop user installed `champdev-comfyui-nodes v0.5.2` via ComfyUI-Manager and was compromised with a RAT and cryptominer persisting at least 9 days. High-severity supply-chain concern; 1 comment so far but likely to escalate.

2. **Qwen-Image-2.1 VAE encode broken on MPS** — [Comfy-Org/ComfyUI#16433](https://github.com/comfyanonymous/ComfyUI/issues/16433)  
   Encode→decode round-trip returns 6.6 dB PSNR on MPS vs 49.1 dB on CPU, silently corrupting every image-edit workflow. Clean master with no custom nodes; 6 comments.

3. **Qwen Image 2.1 hard crash on Windows multi-GPU** — [Comfy-Org/ComfyUI#16443](https://github.com/comfyanonymous/ComfyUI/issues/16443)  
   Fatal Python abort in the prefetch/staging-buffer path during model init or first sampling step. Multi-GPU Windows users blocked; 6 comments.

4. **MiniMax H3 Ref2VA reference-fidelity regression** — [Comfy-Org/ComfyUI#16589](https://github.com/comfyanonymous/ComfyUI/issues/16589)  
   Local ComfyUI loses visual identity and spatial structure of reference images despite identical workflow/model files. 6 comments; active investigation.

5. **MiniMax H3 FL2VA whole-host loss on DGX Spark GB10** — [Comfy-Org/ComfyUI#16587](https://github.com/comfyanonymous/ComfyUI/issues/16587)  
   864×480, 124-frame T2V run caused whole-host unresponsiveness on a single-GPU DGX Spark. 3 comments; severe reliability issue for aarch64/GB10 users.

6. **Qwen3-VL NVFP4 vision layers crash in float32 vision tower** — [Comfy-Org/ComfyUI#16585](https://github.com/comfyanonymous/ComfyUI/issues/16585)  
   `TextGenerate` with an image fails on first image when vision tower layers are NVFP4-quantized: `Unsupported dtype code (only FP16/BF16 supported): 0`. 3 comments.

7. **Qwen-Image 2.1 dynamic VRAM corruption on ROCm gfx1201** — [Comfy-Org/ComfyUI#16437](https://github.com/comfyanonymous/ComfyUI/issues/16437)  
   `--enable-dynamic-vram` silently corrupts output after any model reload; first job correct, every subsequent job corrupt until server restart. 2 comments, 1 👍.

8. **gfx1032 missing from `AMD_RDNA2_AND_OLDER_ARCH` causes bf16 slowdown** — [Comfy-Org/ComfyUI#16535](https://github.com/comfyanonymous/ComfyUI/issues/16535)  
   RX 6600/6600 XT/6650 XT selects bf16 and runs ~2x slower. Already has a fix PR (#16538); 1 comment.

9. **Pixal3DMultiViewConditioning retains ~3 GiB per view in RAM** — [Comfy-Org/ComfyUI#16620](https://github.com/comfyanonymous/ComfyUI/issues/16620)  
   12 GiB for 4 views; `/free` cannot release without unloading first. Core-only issue; PR #16622 addresses the `/free` part.

10. **Group `font_size` no longer affects group title rendering since v0.21.1** — [Comfy-Org/ComfyUI#14322](https://github.com/comfyanonymous/ComfyUI/issues/14322)  
    Long-standing UI regression, still reproducible with custom nodes disabled. 3 comments, 1 👍.

## Key PR Progress

1. **[CORE-356] Support partial graph execution** — [Comfy-Org/ComfyUI#14918](https://github.com/comfyanonymous/ComfyUI/pull/14918)  
   Adds opt-in `node_failure_policy: continue_independent`; independent branches finish when a node fails. Default remains fail-fast.

2. **Pause output rescan loops so prompts/UI stay responsive** — [Comfy-Org/ComfyUI#16600](https://github.com/comfyanonymous/ComfyUI/pull/16600)  
   Prevents pure-Python rescan loops from starving the UI; stacked on #16599.

3. **Rescan output folder by listing folders instead of every file** — [Comfy-Org/ComfyUI#16599](https://github.com/comfyanonymous/ComfyUI/pull/16599)  
   Scales better at 200k+ outputs; must land with #16600.

4. **perf(assets): yield the GIL while deriving tags for new files** — [Comfy-Org/ComfyUI#16546](https://github.com/comfyanonymous/ComfyUI/pull/16546)  
   First-run asset scans no longer monopolize the GIL.

5. **Fix crash when dynamic VRAM prefetch cannot grow its cast buffer** — [Comfy-Org/ComfyUI#16615](https://github.com/comfyanonymous/ComfyUI/pull/16615)  
   Handles oversized block cast buffers (e.g. ~744 MB for LTX AV) that previously crashed.

6. **fix(assets): start without assets packages; `--enable-assets` reports missing deps** — [Comfy-Org/ComfyUI#16580](https://github.com/comfyanonymous/ComfyUI/pull/16580)  
   Prevents startup crash when `sqlalchemy`/`alembic`/`blake3` are absent.

7. **fix(db): wait briefly for the database lock at startup** — [Comfy-Org/ComfyUI#16602](https://github.com/comfyanonymous/ComfyUI/pull/16602)  
   Adds up to 5s retry grace period when another instance is shutting down.

8. **Fix `/free` ignoring explicit `"unload_models": false`** — [Comfy-Org/ComfyUI#16622](https://github.com/comfyanonymous/ComfyUI/pull/16622)  
   Correctly stores false flags; fixes part of #16620.

9. **Fix bf16 wrongly selected on AMD gfx1032** — [Comfy-Org/ComfyUI#16538](https://github.com/comfyanonymous/ComfyUI/pull/16538)  
   Adds missing `gfx1032` to `AMD_RDNA2_AND_OLDER_ARCH`, restoring expected performance.

10. **Use `cuda_device_context` when partially loading models** — [Comfy-Org/ComfyUI#16414](https://github.com/comfyanonymous/ComfyUI/pull/16414)  
    Prevents illegal memory access when loading onto `cuda:1+` by setting the thread-local CUDA device.

## Feature Request Trends
- **Broader hardware/backend coverage**: multi-GPU Windows, ROCm gfx1032/gfx1201, Apple MPS, Ascend NPU, DGX Spark/aarch64.
- **Robust memory management**: dynamic VRAM correctness, `/free` behavior, Pixal3D RAM retention, model reload safety.
- **Attention/quantization compatibility**: NVFP4 vision towers, flash-attention CUDA 13.0 requirements, `sage_sdpa` int32 stride limits, SDPA fallbacks.
- **Text-generation polish**: Qwen 2.5-VL `TextGenerate` missing `stop_tokens`/`lm_head`/MRoPE, `use_default_template` semantics.
- **Performance at scale**: output rescan, asset scan GIL yielding, partial graph execution, Yue2 AR speedups.
- **Supply-chain security**: stronger vetting/telemetry for registry custom nodes.

## Developer Pain Points
- **Silent corruption on non-CUDA backends**: MPS VAE PSNR collapse and ROCm dynamic-VRAM corruption are hard to detect and destroy outputs.
- **Hard crashes on multi-GPU / exotic hosts**: Windows multi-GPU aborts and DGX Spark host loss block workflows entirely.
- **Insufficient diagnostics**: DB lock logs do not identify the holding process; `/free` silently ignored explicit flags.
- **Memory not released**: `/free` cannot release Pixal3D NAF features without unloading models first.
- **Attention backend incompatibilities**: MiniMax H3 `sage_sdpa` stride overflow above ~116k tokens; flash-attention only working on specific CUDA builds.
- **Stale frontend cache**: JS module frontends need `*.mjs` handling to avoid stale cache (PR/issue #16623).
- **Long-standing UI regressions**: group title `font_size` has been broken since v0.21.1.
- **Security risk from registry packages**: malicious custom-node installs can compromise the host for days.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Community Digest — 2026-09-29

## Today's Highlights
Ollama released **v0.35.0-rc1**, bringing macOS menu sync and deferred Settings model discovery. The community is actively reporting a **critical CUDA illegal memory access** on RTX 5090 with Cohere MoE models, while a long-standing **gemma4 image processing bug on Windows** continues to draw attention. On the PR side, major work includes **read-only chat history with exports**, a new **System One scoring API**, **Granite model support**, and fixes for context truncation in tool loops.

## Releases
- **v0.35.0-rc1** (`v0.35.0`)
  - `app`: sync macOS update menu and icon at startup — [PR #18622](https://github.com/ollama/ollama/pull/18622)
  - `app`: defer Settings model discovery — [PR #18598](https://github.com/ollama/ollama/pull/18598)
  - `app`: isolate cloud-setting tests from Windows user config — by @drifk (no PR link provided)

## Hot Issues

1. **[#16532](https://github.com/ollama/ollama/issues/16532) — [bug] gemma4 does not process images on Windows**  
   Long-running bug (since June) with **53 comments** and 1 👍. Users report that JPEG images are attached but not actually processed on Windows. High engagement indicates a persistent blocker for multimodal use on Windows.

2. **[#18642](https://github.com/ollama/ollama/issues/18642) — [bug] CUDA illegal memory access (MUL_MAT) on RTX 5090 with Cohere MoE architecture (Windows)**  
   Critical crash during prompt evaluation on high-end GPUs. **7 comments** in a few days. Community is actively triaging; likely affects Blackwell-series compatibility.

3. **[#12638](https://github.com/ollama/ollama/issues/12638) — [bug] Disable Ollama GUI Popup on API Requests (Windows 11)**  
   API users are frustrated by the GUI popping up on every request. **2 comments**, 1 👍. Recurring complaint about desktop/API mode separation.

4. **[#18679](https://github.com/ollama/ollama/issues/18679) — [bug] OLLAMA_GPU_OVERHEAD is ignored by the llama-server backend (layer placement via --fit)**  
   VRAM reservation no longer works for models run through llama-server. **2 comments**. Impacts users relying on precise GPU memory management.

5. **[#18698](https://github.com/ollama/ollama/issues/18698) — [feature request] Support for K2 Horizon models (architecture "k2-horizon")**  
   Request to add MBZUAI IFM’s new K2 Horizon family (0.9B–36B MoE). **1 comment**. Reflects demand for cutting-edge open models.

6. **[#17916](https://github.com/ollama/ollama/issues/17916) — Default n_threads ignores cgroup CPU quota and cpuset: ~45x throughput collapse in CPU-limited containers**  
   Containers see host core count instead of cgroup limits, causing severe throughput loss. **1 comment**. Critical for Kubernetes/Docker deployments.

7. **[#18683](https://github.com/ollama/ollama/issues/18683) — [bug] [CRITICAL BUG][Billing] Accounts stuck in automated Stripe loop with unresponsive support**  
   Billing flow traps users in a retry loop, blocking Cloud access. **1 comment**. Highlights support and payment integration pain.

8. **[#18699](https://github.com/ollama/ollama/issues/18699) — ollama launch dsh: dsh 0.1.7 removed the settings-file provider, so launch no longer loads Ollama models**  
   Closed quickly, but shows integration fragility with third-party CLI tools. **0 comments**.

9. **[#18690](https://github.com/ollama/ollama/issues/18690) — `/v1/chat/completions` forces `top_p: 1.0` when omitted, silently overriding Modelfile `PARAMETER top_p`**  
   API behavior overrides user-defined Modelfile parameters. **0 comments** but important for reproducibility and advanced users.

10. **[#18696](https://github.com/ollama/ollama/issues/18696) — [feature request] ollama cli (Ubuntu) integration with chatgpt and claude desktop apps**  
    Requests Linux desktop integration parity with other platforms. **0 comments**. Indicates growing Linux desktop user base.

## Key PR Progress

1. **[#18700](https://github.com/ollama/ollama/pull/18700) — app: make chat history read-only and add exports**  
   Existing chats remain available with messages, attachments, and last used model; users can read/delete but no longer create or send in the desktop app. Adds markdown export with attachments.

2. **[#18606](https://github.com/ollama/ollama/pull/18606) — feat: add System One scoring API**  
   Adds `POST /v1/systemone` for structured decisions using local Nimble and Tev models. Returns choices, probabilities, and expected scores.

3. **[#18602](https://github.com/ollama/ollama/pull/18602) — feat: allow ten web searches per response**  
   Raises per-response web search limit from 3 to 10 for Responses and Anthropic. Honors positive `max_uses` below 10.

4. **[#17972](https://github.com/ollama/ollama/pull/17972) — feat: Add GraniteForCausalLM support in experimental models and mlxrunner**  
   Adds MLX backend support for IBM Granite 4.1/4.2 dense models.

5. **[#17894](https://github.com/ollama/ollama/pull/17894) — chat: always preserve the most recent user message during truncation**  
   Fixes `500: no user query found in messages` during multi-step tool loops that overflow context.

6. **[#17542](https://github.com/ollama/ollama/pull/17542) — llm: warn when a model is loaded entirely on CPU**  
   Adds a warning when no layers fit in VRAM, improving visibility for CPU-only fallback.

7. **[#18684](https://github.com/ollama/ollama/pull/18684) — cli: adaptive Simplified Chinese localization (zh-CN, English elsewhere)**  
   Adds opt-in/out bilingual CLI mode; English output remains byte-for-byte identical.

8. **[#18661](https://github.com/ollama/ollama/pull/18661) — app: allow a narrow window and add an always-on-top mode**  
   Desktop window can now be resized narrow and pinned above other windows, improving compact assistant use.

9. **[#18625](https://github.com/ollama/ollama/pull/18625) — mlx: bound pull stall retries and let the watchdog interrupt them**  
   Fixes a stall handling bug in MLX safetensor model pulls; moves transfer out of experimental.

10. **[#18652](https://github.com/ollama/ollama/pull/18652) — llama.cpp: version bump b11232**  
    Routine upstream sync to latest llama.cpp, bringing performance and compatibility updates.

## Feature Request Trends
- **New model support**: K2 Horizon family (0.9B–36B MoE) and continued requests for emerging architectures.
- **Third-party integrations**: Adding AgentBridge to official lists, plus ChatGPT/Claude desktop integration on Linux.
- **Desktop/API separation**: Users want the GUI to stay out of the way during API-only usage.
- **Platform parity**: Linux users request the same desktop integration features available on macOS/Windows.
- **Localization**: Growing interest in non-English CLI experiences (e.g., Simplified Chinese).

## Developer Pain Points
- **Windows-specific bugs**: Image processing failures (gemma4), CUDA crashes on RTX 5090, and unwanted GUI popups dominate Windows reports.
- **GPU/VRAM management**: `OLLAMA_GPU_OVERHEAD` being ignored and silent CPU fallback cause confusion and performance loss.
- **Container/CPU scheduling**: `n_threads` ignoring cgroup quotas leads to severe throughput collapse in constrained environments.
- **API/Modelfile inconsistencies**: `/v1/chat/completions` overriding `top_p` breaks user-defined parameters.
- **Context truncation in tool loops**: Multi-step tool calls can drop the latest user message, causing `500` errors.
- **Billing and support**: Stripe retry loops and unresponsive support block Cloud users.
- **Integration fragility**: Third-party CLI updates (e.g., `dsh 0.1.7`) can silently break model loading.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

# llama.cpp Community Digest — 2026-09-29

## 1. Today's Highlights

Today's activity is dominated by a major internal refactor migrating speculative decoding, mtmd, and server paths onto the new `batch_ext` API (b11236, PR #29385, with #29601 continuing into examples). Backend robustness is the other theme, with fixes landing across Vulkan, Metal, HIP, WebGPU, and OpenVINO, plus a model-side cleanup replacing manual left-padding with `ggml_pad_ext`. On the issue tracker, long-running multi-GPU speculative decoding (MTP) and server-stability problems continue to attract the most discussion.

## 2. Releases (last 24h)

- **b11239** — `vulkan: include functional header` (#29597): fixes a compile error `no template named 'function' in namespace 'std'`. [Release](https://github.com/ggml-org/llama.cpp/releases/tag/b11239)
- **b11238** — `models: pad on the left with ggml_pad_ext` (#29567): replaces right-pad-then-roll (and zero-block concatenation in DFlash2) for Parakeet, LFM2-Audio, Granite Speech, and Gemma 4 audio encoders. [Release](https://github.com/ggml-org/llama.cpp/releases/tag/b11238)
- **b11237** — `ggml-openvino: mark unaligned batch-stride views unsupported` (#29603). [Release](https://github.com/ggml-org/llama.cpp/releases/tag/b11237)
- **b11236** — `batch: migrate speculative, mtmd and server to batch_ext` (#29385): the headline refactor of the day. [Release](https://github.com/ggml-org/llama.cpp/releases/tag/b11236)
- **b11235** — `common: fix HF cache paths on Windows` (#29475). [Release](https://github.com/ggml-org/llama.cpp/releases/tag/b11235)
- **b11234** — `webgpu: handle unaligned writes in ggml_backend_webgpu_buffer_set_tensor` (#29471). [Release](https://github.com/ggml-org/llama.cpp/releases/tag/b11234)
- **b11233** — `tests: refactor test-recurrent-state-rollback` to use `llama_context_ptr` (#29426). [Release](https://github.com/ggml-org/llama.cpp/releases/tag/b11233)
- **b11232** — `ggml-cpu: enable tiled flash attention for non-vector-multiple head dims on x86`, adds AVX2 masked load/store and softcap fix (#29423). [Release](https://github.com/ggml-org/llama.cpp/releases/tag/b11232)
- **b11229** — `HIP: fix template skip for DKQ > 256 mfma kernels` (#29559). [Release](https://github.com/ggml-org/llama.cpp/releases/tag/b11229)
- **b11228** — `metal: support left and circular padding in GGML_OP_PAD` (#29561), aligning Metal with CPU/CUDA/Vulkan. [Release](https://github.com/ggml-org/llama.cpp/releases/tag/b11228)

## 3. Hot Issues

1. **#19466 [CLOSED] KV cache save fails for vision models** (43 comments) — `/slots/3?action=save` doesn't work with vision-enabled models. High-traffic, long-lived thread finally closed; matters for server users doing multimodal session persistence. [Link](https://github.com/ggml-org/llama.cpp/issues/19466)
2. **#27428 draft-MTP roughly halves prompt processing on multi-GPU layer split** (24 comments) — Single-GPU is fine, multi-GPU regresses badly. A key speculative-decoding performance bug with strong community attention. [Link](https://github.com/ggml-org/llama.cpp/issues/27428)
3. **#29104 server silently stops processing when /metrics is scraped** (11 comments) — VictoriaMetrics scraping wedges the server. A production-observability blocker. [Link](https://github.com/ggml-org/llama.cpp/issues/29104)
4. **#29424 Feature request: K2 Horizon (0.9B–36B MoVA) support** (11 comments) — New architecture family request, part of a steady stream of model-support asks. [Link](https://github.com/ggml-org/llama.cpp/issues/29424)
5. **#26590 [CLOSED] Model request: Ling-3.0-flash** (47 👍) — 124B MoE with 5.1B active, hybrid KDA/MLA attention. Highest-reaction item in the window; illustrates demand for modern MoE/hybrid architectures. [Link](https://github.com/ggml-org/llama.cpp/issues/26590)
6. **#28541 RFC: image/video/audio generation from diffusion GGUFs (LTX-2)** (8 comments) — Extends llama.cpp beyond text into diffusion generation; strategically significant direction. [Link](https://github.com/ggml-org/llama.cpp/issues/28541)
7. **#24440 Server crashes (fattn.cu fatal error) after editing system message with Gemma 4 31B + MTP + `-sm tensor`** (8 comments) — Combines MTP, tensor split, and chat-template mutation into a hard crash. [Link](https://github.com/ggml-org/llama.cpp/issues/24440)
8. **#29092 HIP fused Gated Delta Net carries recurrent state across reused server slots** (8 comments) — Earlier prompts' text leaks verbatim into later completions — a correctness/cross-request contamination bug with serious implications for multi-tenant serving. [Link](https://github.com/ggml-org/llama.cpp/issues/29092)
9. **#27109 CUDA 4-bit KV cache collapses prefill to ~34 t/s on qwen35 hybrid** (7 comments) — MMQ guard passes but performance craters; KV-cache quantization remains a weak spot. [Link](https://github.com/ggml-org/llama.cpp/issues/27109)
10. **#29457 Large `enum` in json_schema makes grammar construction superlinear (DoS)** (3 comments, 1 👍) — A small request can pin a core for tens of seconds; notable as a security/robustness concern for hosted deployments. [Link](https://github.com/ggml-org/llama.cpp/issues/29457)

Honorable mentions: **#29526** Vulkan A770 decode degradation after ~7–8h ([link](https://github.com/ggml-org/llama.cpp/issues/29526)); **#29521** macOS Metal OOM on Gemma 4 31B with large default `n_ctx` ([link](https://github.com/ggml-org/llama.cpp/issues/29521)); **#29473** ggml-hexagon failures on Snapdragon 7 Gen 4 ([link](https://github.com/ggml-org/llama.cpp/issues/29473)); **#28433** draft-MTP context sized from total `llama_n_ctx()` ([link](https://github.com/ggml-org/llama.cpp/issues/28433)).

## 4. Key PR Progress

1. **#29601 [OPEN] batch: migrate the rest of examples to `llama_batch_ext`** — Follows #29385/#24669; goal is for libcommon, examples, and tools to use the new API, paving the way to deprecate `llama_batch`. [Link](https://github.com/ggml-org/llama.cpp/pull/29601)
2. **#29598 [OPEN] ggml: speed up model loading** — Addresses a crafted GGUF that can hang the server for a very long time; a robustness/DoS fix. [Link](https://github.com/ggml-org/llama.cpp/pull/29598)
3. **#29446 [OPEN] model: GraniteSpeech5ForCTC (Turbo CTC)** — Adds a non-autoregressive encoder-only speech architecture with new code paths. [Link](https://github.com/ggml-org/llama.cpp/pull/29446)
4. **#29353 [OPEN] CUDA/HIP: GDN chunked kernel** — Upstreamed from downstream QVAC fabric; ~10% better prompt processing on full GPU offload with FA and F16 KV. [Link](https://github.com/ggml-org/llama.cpp/pull/29353)
5. **#29612 [OPEN] CUDA: refactor swizzling code** — Generalizes swizzling for non-128-byte-multiple strides plus Volta/AMD, keeping disabled paths for future use. [Link](https://github.com/ggml-org/llama.cpp/pull/29612)
6. **#29545 [OPEN] ggml: accumulate f16 dot products in f32 on AVX512-FP16** — Fixes overflow; logits now match non-AVX512-FP16 builds. [Link](https://github.com/ggml-org/llama.cpp/pull/29545)
7. **#29609 [OPEN] ggml-cuda: sanitize post-bias NaNs in MoE selection** — Prevents threads from selecting divergent winning experts after bias-induced NaNs. [Link](https://github.com/ggml-org/llama.cpp/pull/29609)
8. **#29572 [OPEN] HIP: avoid treating CDNA as DGX Spark for gqa_ratio 20 in fattn_mma dqk 576** — Corrects an overly broad dispatch path that misrouted CDNA kernels. [Link](https://github.com/ggml-org/llama.cpp/pull/29572)
9. **#29615 [OPEN] chat: fix Muse Glimmer ignoring `response_format` json_schema with `--jinja`** — Grammar now applied with json_schema precedence when tools are also supplied. [Link](https://github.com/ggml-org/llama.cpp/pull/29615)
10. **#29558 [OPEN] model-conversion: add `--add-bos` to run-org-model script** — Needed for models like Gemma 4 that force `add_bos=true` in `llama-vocab.cpp`. [Link](https://github.com/ggml-org/llama.cpp/pull/29558)

Also notable: **#29606** hexagon duplicate HTP work-queue execution fix ([link](https://github.com/ggml-org/llama.cpp/pull/29606)); **#29600** runtime support for Prism Bonsai 2 27B ([link](https://github.com/ggml-org/llama.cpp/pull/29600)); **#29575** row-bounds check in `get_rows_back` ([link](https://github.com/ggml-org/llama.cpp/pull/29575)); **#29610** skip pytest xdist workers when `PYTEST_WORKERS=1` ([link](https://github.com/ggml-org/llama.cpp/pull/29610)).

## 5. Feature Request Trends

- **New model architectures and families**: K2 Horizon (MoVA), Ling-3.0-flash (124B MoE, hybrid KDA/MLA), Prism Bonsai 2, GraniteSpeech5ForCTC, Nemotron-3-Nano, and further Gemma 4 variants. Community demand is clearly for MoE, hybrid-attention, and multimodal/speech architectures.
- **Beyond text generation**: diffusion-based image/video/audio generation from GGUFs (LTX-2 RFC, #28541) signals interest in turning llama.cpp into a general GGUF runtime.
- **Speculative decoding maturity**: MTP/draft-model support keeps generating requests — combining draft types (`draft-dflash,draft-mtp,ngram-mod`), sidecar draft weights, and mtmd input for draft models.
- **KV cache and long-context ergonomics**: vision-model KV save/restore, KV quantization trade-offs, and prompt-cache flags remain recurring themes.
- **Training/adaptation**: LoRA training example (#13485) continues as a long-standing research request.
- **Observability and production serving**: `/metrics` integration, router mode, and multi-tenant slot isolation.

## 6. Developer Pain Points

- **Speculative decoding (MTP/draft) is fragile**: multi-GPU prompt-processing regression (#27428), context sized from total rather than per-sequence `n_ctx` (#28433), sidecar draft weight resolution failures (#29345), and mixed draft-type init errors (#27839).
- **Backend-specific instability**: Vulkan decode degradation over hours (#29526), HIP kernel/FA errors (#29552, #29092), Metal OOM and hard crashes (#29521, #27822), Hexagon/HTP correctness on newer Snapdragon (#29473).
- **Multi-GPU / tensor split (`-sm tensor`)**: reported crashes and even host reboots (#29549), plus the Gemma 4 MTP crash (#24440).
- **Server robustness and safety**: silent stalls on metrics scraping (#29104), hangs on Jetson Orin after the server rewrite (#29499), superlinear grammar construction from large enums (#29457), and slow-loading crafted GGUFs (#29598).
- **Memory handling and clean failure**: OOM paths frequently surface as `EXC_BAD_ACCESS` or hard crashes rather than graceful errors.
- **Cross-platform ergonomics**: recurring Windows-specific issues (HF cache paths, mmap/tensor-lazy disk writes #27840) and build/packaging problems (UI asset COPY loop #26907).
- **KV cache quantization performance**: 4-bit KV cache and ROCm FA cache-type combinations still degrade throughput dramatically (#27109, #27761).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*