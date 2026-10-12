# AI CLI Tools Community Digest 2026-10-13

> Generated: 2026-10-12 22:15 UTC | Tools covered: 12

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



Here are the key updates across all tracked AI developer tools for today, October 13, 2026:

### 1. Ollama Releases v0.40.4-rc0
Ollama released the `v0.40.4-rc0` release candidate, bringing critical updates including llama.cpp integration for decision models, server manifest reuse, and various parser fixes for Cohere and FunctionGemma. 
*   **Link:** [github.com/ollama/ollama](https://github.com/ollama/ollama)

### 2. llama.cpp Updates (b11576 to b11565)
llama.cpp rolled out several backend hardening updates, notably padding the KV dimension of no-cache attention to 256 to fix CUDA kernels for head size 512 models (such as EmbeddingGemma 2). The update also added support for vllm d3/decision models and resolved Metal tensor errors for large matrices.
*   **Link:** [github.com/ggerganov/llama.cpp](https://github.com/ggerganov/llama.cpp)

### 3. GitHub Copilot CLI Releases v1.0.97-0 and v1.0.96
GitHub Copilot CLI introduced agent-scoped declarative hooks and inline image rendering by default in `v1.0.97-0`, alongside enterprise policy startup improvements and case-insensitive model IDs in `v1.0.96`.
*   **Link:** [github.com/github/copilot-cli](https://github.com/github/copilot-cli)

### 4. Gemini CLI Nightly Build and P0 Security Fix
Gemini CLI landed a nightly build (`v0.65.0-nightly.20261012`) alongside the closure of a long-standing P0 security fix (#8154) where the `/settings` command overwrote JSON and leaked environment variables. The update also includes fixes for Ctrl-C session poisoning and synchronized terminal output to eliminate `tmux` flicker.
*   **Link:** [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

### 5. OpenCode Targets Large Payload Gateway Errors
OpenCode introduced a pivotal PR (#54932) to add request body compression (zstd/gzip), directly targeting gateway 503 errors on large payloads, alongside critical migration bugs (legacy ID mapping) and rendering bugs (KaTeX MathML preservation).
*   **Link:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

### 6. DeepSeek TUI Prepares v0.10.2 Patch Release
DeepSeek TUI active development is slicing the upcoming v0.10.2 patch release, carrying core decisions for fail-closed tier pricing, build-lock bypass fixes, and Windows owner recovery (PR #6965), alongside test stabilization to resolve flaky failures on Windows runners.
*   **Link:** [github.com/codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale)

### 7. Pi Restores Image Attachments for Compiled Bun Binaries
Pi fixed a silent, long-lived regression (#10645) in PR #10834 where `resizeImage` resolved to null in compiled Bun executables, causing all image attachments to be omitted since version 0.87.x.
*   **Link:** [github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono)

### 8. ComfyUI Fixes Loop Output-Cache RAM Leak
ComfyUI paired the loop output-cache leak issue (#16978) with a direct fix PR (#16979) to drop finished loop iterations from the output cache when `cache_iterations` is off, preventing RAM exhaustion in long-running loop workflows.
*   **Link:** [github.com/Comfy-Org/ComfyUI](https://github.com/Comfy-Org/ComfyUI)

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills Community Highlights
*anthropics/skills · data as of 2026-10-13*

> **Data note:** PR comment counts returned `undefined` in this dataset, so "top" PRs below are selected from the comment-sorted top-20 by recency, ecosystem impact, and substantive scope. All PRs listed are **open**.

---

## 1. Top Skills Ranking (by attention)

| # | PR | Skill | Focus | Status |
|---|-----|-------|-------|--------|
| 1 | [#1742](https://github.com/anthropics/skills/pull/1742) | `mcp-builder` | Fixes `mcp>=2.0.0` rename of `streamable_http_client` + custom-header configuration (fixes #1668) | OPEN |
| 2 | [#1298](https://github.com/anthropics/skills/pull/1298) | `skill-creator` | Isolates trigger evals; handles Windows `select()` pipe failures, runtime failures masquerading as non-triggers | OPEN |
| 3 | [#1961](https://github.com/anthropics/skills/pull/1961) | `skill-creator` (eval viewer) | Hardens `generate_review.py`/`viewer.html` against script breakout, DNS rebinding, cross-site POST, and unsafe escaping | OPEN |
| 4 | [#1771](https://github.com/anthropics/skills/pull/1771) | `proofcore-contract-auditor` | New Web3 skill: static analysis of Solidity/Rust contracts + cryptographic audit proofs anchored on TON Blockchain | OPEN |
| 5 | [#1703](https://github.com/anthropics/skills/pull/1703) | `md2video-audio` | Compiles Markdown → Marp slides → MP4 with human-like voiceovers (zero-cost video generation) | OPEN |
| 6 | [#1245](https://github.com/anthropics/skills/pull/1245) | `notion-spec-to-implementation` + `quantitative-resume-auditor` | Transforms product/tech specs into Notion task breakdowns; resume auditing against quantitative benchmarks | OPEN |
| 7 | [#822](https://github.com/anthropics/skills/pull/822) | `awt` (AI Watch Tester) | Zero-code E2E testing: gives Claude vision + browser control to auto-generate and run web tests | OPEN |

**Functional spread:** MCP/agent-tooling fixes (1, 2, 3), Web3 auditing (4), content/video generation (5), product & resume workflows (6), and E2E testing (7). The top of the list is dominated by `skill-creator`/`mcp-builder` internals — the community is heavily invested in the *tooling that builds Skills*, not just the Skills themselves.

---

## 2. Community Demand Trends (from Issues)

 distilled into four clusters:

- **Trust & security hardening.** [#492](https://github.com/anthropics/skills/issues/492) (46 comments) — community skills impersonating the `anthropic/` namespace is the highest-engagement issue; [#1394](https://github.com/anthropics/skills/issues/1394) (eval-viewer XSS) and [#1175](https://github.com/anthropics/skills/issues/1175) (SharePoint permission boundaries) reinforce that safety is the #1 concern.
- **Skill distribution & sharing.** [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8 👍) wants org-wide skill sharing without manual `.skill` file shuffling; [#189](https://github.com/anthropics/skills/issues/189) (9 👍) flags duplicate skills across the `document-skills`/`example-skills` plugins.
- **Skill-creation tooling reliability.** A dense cluster of bugs in `skill-creator`: [#556](https://github.com/anthropics/skills/issues/556) (0% trigger rate via `claude -p`), [#1352](https://github.com/anthropics/skills/issues/1352) (parallel-worker false negatives), [#1383](https://github.com/anthropics/skills/issues/1383) (silent benchmark failures), [#1390](https://github.com/anthropics/skills/issues/1390) (`mcp-builder` eval scores 0/N). The eval harness is widely perceived as broken.
- **Context-window efficiency.** [#1487](https://github.com/anthropics/skills/issues/1487) — the `claude-api` skill eagerly injects ~156k tokens in one tool call, a growing pain as Skills get larger.

**Anticipated new Skill directions** surfaced in Issues: `agent-governance` ([#412](https://github.com/anthropics/skills/issues/412), closed), `compact-memory` ([#1329](https://github.com/anthropics/skills/issues/1329)), and a reasoning-quality-gate pipeline ([#1385](https://github.com/anthropics/skills/issues/1385)) — pointing at **agent governance, memory management, and output-quality verification** as the next frontier.

---

## 3. High-Potential Pending Skills (open PRs, not yet merged)

These active submissions may land soon:

- **`proofcore-contract-auditor`** — [#1771](https://github.com/anthropics/skills/pull/1771): Web3 smart-contract auditing + on-chain proof notarization (novel niche).
- **`md2video-audio`** — [#1703](https://github.com/anthropics/skills/pull/1703): Markdown → MP4 video with voiceover (content-gen gap).
- **`awt` (AI Watch Tester)** — [#822](https://github.com/anthropics/skills/pull/822): vision-driven E2E test generation.
- **`notion-spec-to-implementation` + `quantitative-resume-auditor`** — [#1245](https://github.com/anthropics/skills/pull/1245): spec-to-task and resume benchmarking workflows.
- **`document-typography`** — [#514](https://github.com/anthropics/skills/pull/514): typographic QC (orphan words, widows, numbering) for generated docs.
- **`scnet-hpc`** — [#1615](https://github.com/anthropics/skills/pull/1615): SSH/Slurm HPC cluster operation profiles (domain-specific).
- **`odt` (OpenDocument)** — [#486](https://github.com/anthropics/skills/pull/486): create/fill/convert `.odt`/`.ods` files.
- **`skill-quality-analyzer` + `skill-security-analyzer`** — [#83](https://github.com/anthropics/skills/pull/83): meta-skills for evaluating quality and security of other Skills (directly addresses Issue #492's trust problem).

---

## 4. Skills Ecosystem Insight

> The community's most concentrated demand is for the **Skills framework itself to become a secure, auditable, and efficient agent-runtime substrate** — moving from a creative catalog toward trust boundaries (namespace impersonation, XSS, permission abuse), reliable eval/creation tooling (broken trigger rates, benchmark failures), and lean context usage, rather than merely adding more domain-specific Skills.

---



# Claude Code Community Digest — 2026-10-13

---

## 1. Today's Highlights

No new releases or pull requests landed in the past 24 hours, but the issue tracker remains active with several high-impact bugs surfacing. The most engaged topics this cycle center on **Windows command-line encoding corruption** (affecting Git Bash/MSYS2 workflows), **silent data loss in session transcripts**, and **prompt-cache invalidation on session forks** — all of which carry significant consequences for developer productivity and cost.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

### 🔴 #85856 — Windows/Git Bash: Bash tool silently halves backslashes
**Why it matters:** Every backslash in a Bash tool command is halved before bash parses it on Windows with Git Bash/MSYS2. This breaks path handling, regex patterns, and any command relying on literal backslashes. Quoting does not prevent the corruption.
**Community reaction:** 12 comments, 9 👍 — the highest-engagement issue this cycle. Developers report workarounds involving double-escaping, which is unsustainable for real workflows.
🔗 https://github.com/anthropics/claude-code/issues/85856

### 🔴 #72957 — Write/Edit tools silently decode `\uXXXX` in file content
**Why it matters:** The Write and Edit tools treat `\uXXXX` sequences as JSON Unicode escapes and decode them before writing to disk. This makes it impossible to store literal escape-sequence text (e.g., `\uE010` in font/encoding contexts), corrupting source files, config files, and test fixtures.
**Community reaction:** 8 comments, 1 👍. Confirmed on Linux; root cause appears to be in the tool's content serialization layer.
🔗 https://github.com/anthropics/claude-code/issues/72957

### 🔴 #79298 — Session `.jsonl` rewritten to metadata-only stub at resume time
**Why it matters:** 27 sessions affected — the main conversation transcript is truncated to a metadata-only stub (zero user/assistant records) on resume, while subagent transcripts survive intact. This is a data-loss event with the same signature as the locked #18311. Users cannot recover their conversation history.
**Community reaction:** 4 comments, 1 👍. Forensics provided to help localize the bug; linked to a prior locked issue.
🔗 https://github.com/anthropics/claude-code/issues/79298

### 🔴 #77306 — Session forks forfeit the entire conversation prompt cache
**Why it matters:** Since the scratchpad-directory rollout (~June 2026), every session fork (`--fork-session`, `/branch`, desktop Fork) invalidates the prompt cache for the entire conversation history. The fork's first request re-serializes everything, causing significant latency and token-cost spikes.
**Community reaction:** 4 comments, 2 👍. Diagnosed as a `system_changed` cache-invalidation trigger from a fork-only history re-serialization residual. Directly impacts cost-efficiency for branching workflows.
🔗 https://github.com/anthropics/claude-code/issues/77306

### 🟡 #75281 — [Feature Request] Real-time clock awareness
**Why it matters:** The agent frequently loses track of elapsed time, leading to stale state (forgotten pulls, overwritten pages, incorrect todo-list items). A built-in clock-awareness mechanism would prevent time-related state inconsistencies without manual prompting.
**Community reaction:** 3 comments, 0 👍. Closed but requested as a general improvement beyond Claude Code.
🔗 https://github.com/anthropics/claude-code/issues/75281

### 🟡 #100590 — Desktop: Remote Control not restored after app update/restart
**Why it matters:** On Windows 11, after a desktop auto-update and relaunch, all sessions with Remote Control enabled are stopped and the feature is not re-enabled. Sessions also silently disappear from the mobile app while the desktop still reports "connected" — a confusing state for users.
**Community reaction:** 2 comments, 0 👍. Filed against build 2.26454.0.0.
🔗 https://github.com/anthropics/claude-code/issues/100590

### 🟡 #88321 — Interactive startup hangs forever when plugin marketplace dir contains macOS File Provider placeholders
**Why it matters:** On macOS, a plugin marketplace directory containing File Provider dataless placeholders causes the TUI to hang indefinitely with no timeout. Combined with a silent infinite retry on a rejected API key, this is a hard failure that requires manual intervention.
**Community reaction:** 1 comment, 0 👍. Closed; empirically proven (removal cures, re-addition reproduces).
🔗 https://github.com/anthropics/claude-code/issues/88321

### 🟡 #88327 — Claude in Chrome 1.0.85: navigate and page reading denied on every domain except google.com
**Why it matters:** The Chrome extension denies navigation and page-reading on all domains except google.com, with no approval prompt ever rendering. This effectively neutralizes the browser integration for real-world research and web automation.
**Community reaction:** 1 comment, 0 👍. Closed as a duplicate.
🔗 https://github.com/anthropics/claude-code/issues/88327

### 🟡 #88325 — MCP OAuth "URL >" prompt should also accept a bare authorization code
**Why it matters:** When an MCP server triggers an OAuth flow, the current prompt only accepts a full URL redirect. Users pasting a bare authorization code from the provider's dashboard get rejected, creating friction in the MCP onboarding flow.
**Community reaction:** 1 comment, 0 👍. Closed; straightforward enhancement.
🔗 https://github.com/anthropics/claude-code/issues/88325

### 🟡 #99766 — Long-running tasks interrupted despite token limit allocation
**Why it matters:** A user with a 20× token limit allocation reports long-running tasks being repeatedly interrupted and throttled, undermining the promised workflow guarantees. The complaint is blunt but the underlying issue (misconfigured or miscalculated token budgeting) affects anyone running extended sessions.
**Community reaction:** 1 comment, 0 👍. Closed; needs further investigation.
🔗 https://github.com/anthropics/claude-code/issues/99766

---

## 4. Key PR Progress

No pull requests were updated in the last 24 hours.

---

## 5. Feature Request Trends

Distilling from all issues this cycle:

| Direction | Representative Issues | Signal |
|---|---|---|
| **Clock / time awareness** | #75281 | Agent loses track of elapsed time; state drift on long sessions |
| **MCP OAuth usability** | #88325 | Bare authorization code not accepted in OAuth flow |
| **Guardrail flexibility** | #88324 | Unnecessary guardrails on mathematical research tasks |
| **Artifact notifications** | #100904 | Notifications for artifact comments and @mentions across Slack, email, in-app inbox |
| **Usage-limit transparency** | #100900 | Claude Project consuming from weekly usage *and* $100 free credit allowance simultaneously |

---

## 6. Developer Pain Points

Recurring themes from this cycle's issues:

- **Data loss and corruption:** Session transcript truncation (#79298, linked to #18311) and silent `\uXXXX` decoding (#72957) are both data-integrity bugs with no user-visible warning. These are the highest-severity pain points.
- **Platform-specific fragility:** Windows command-line encoding (#85856), Chrome extension domain handling (#88327), and macOS File Provider edge cases (#88321) all point to environment-specific failures that are hard to diagnose without deep platform knowledge.
- **Cost and performance regressions:** Prompt-cache invalidation on forks (#77306) directly increases token costs for branching workflows. Combined with token-limit throttling complaints (#99766), developers are pushing back on silently degraded performance.
- **Security policy false positives:** Multiple issues (#88322, #99789, #99754, #99723) report the safeguard/security layer blocking legitimate activities — code review, vulnerability patching, and simple tasks — creating friction in otherwise normal workflows.
- **Session lifecycle reliability:** Remote Control state not persisting across restarts (#100590) and sessions silently disappearing from mobile add to a pattern of lifecycle-management gaps in the desktop client.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-10-13

## 1. Today's Highlights
No new Codex releases shipped in the last 24h. Community attention remains concentrated on Windows desktop/WSL regressions, dot-created task tool availability, and a high-signal CLI request to make `daemon_auto_start` opt-in. The PR queue is dominated by closed stabilization work around turn finalization, incomplete responses, permissions, WSL clipboard handling, and TUI routing.

## 2. Releases
No new releases were published in the last 24h.

## 3. Hot Issues

| Issue | Signal | Why it matters |
|---|---:|---|
| [#49458](https://github.com/openai/codex/issues/49458) — [Windows] dot-started local tasks lack Computer Use tools while ordinary local Codex sessions work | 76 comments, 26 👍 | Top-engagement bug: dot-created local tasks appear to lose Computer Use tools, breaking parity with ordinary local sessions. Strong community validation suggests this is a real workflow blocker. |
| [#42739](https://github.com/openai/codex/issues/42739) — Local projects disappear from sidebar after Windows desktop update | 54 comments | State/UI regression with high frustration: projects vanish from the sidebar even though chats and source folders remain. Indicates desktop state migration or persistence issues. |
| [#49980](https://github.com/openai/codex/issues/49980) — Windows/WSL: Agent tools fail with process creation and workspace URI errors | 18 comments | WSL workspaces are a common Windows developer setup; agent tool initialization failures block core Codex workflows. |
| [#48195](https://github.com/openai/codex/issues/48195) — CLI: make `daemon_auto_start` opt-in | 13 comments, 102 👍 | Highest positive reaction in the dataset. Users strongly oppose a persistent, self-updating background daemon becoming default behavior without consent. |
| [#51049](https://github.com/openai/codex/issues/51049) — [Windows][dots] Desktop follow-up to dot-created task fails with `AbsolutePathBuf` and mixed cloud/Windows cwd | 11 comments, 1 👍 | Shows a path/serialization defect when dot-created Windows tasks mix cloud and local context. Important for reliable delegated task continuation. |
| [#51197](https://github.com/openai/codex/issues/51197) — Cloud task label obscures local Mac execution host and browser/plugin availability | 10 comments | UX trust issue: users cannot easily tell where a task is executing or which browser/plugin capabilities are available. |
| [#50182](https://github.com/openai/codex/issues/50182) — `codex cloud` does not discover current Cloud environments | 10 comments, 3 👍 | Cloud environment discovery is core to CLI/desktop parity. Failure here blocks cloud task workflows. |
| [#51638](https://github.com/openai/codex/issues/51638) — Windows: sandbox setup fails with `SHARING_VIOLATION` on running `node_repl.exe` | 10 comments, 1 👍 | Sandbox reliability on Windows remains fragile; a file-lock conflict during setup can prevent task execution. |
| [#52919](https://github.com/openai/codex/issues/52919) — [Windows / Codex Desktop + VS Code] Intermittent stream disconnects and reconnect failures since Oct 10 | 10 comments | Fresh connectivity regression affecting desktop and VS Code integration. Reconnect failures make sessions unreliable. |
| [#48217](https://github.com/openai/codex/issues/48217) — [Linux][Desktop] Codex corrupts shared fontconfig cache causing KDE/Qt SIGSEGV | 10 comments, 3 👍 | Closed, but severe: desktop integration can break the broader Linux desktop. A good example of platform-specific blast radius. |

## 4. Key PR Progress
All listed PRs are closed; the batch appears bot-authored and focused on stabilization, correctness, and platform polish.

| PR | What changed / why it matters |
|---|---|
| [#53451](https://github.com/openai/codex/pull/53451) — Treat incomplete responses as terminal errors | Prevents `max_output_tokens` and similar incomplete responses from being retried or falling back to compaction models after output limits are hit. Correctness fix for streaming/response handling. |
| [#53452](https://github.com/openai/codex/pull/53452) — Close input admission while a turn finishes recording | Fixes a race where inputs arriving during turn finalization could be queued after the final batch was drained. Important for deterministic turn handling. |
| [#53453](https://github.com/openai/codex/pull/53453) — Prefer Windows clipboard and bound copy attempts on WSL | Addresses WSLg/PowerShell clipboard stalls that can hang TUI copy requests. Directly relevant to Windows/WSL developer pain. |
| [#53444](https://github.com/openai/codex/pull/53444) — Suppress repeated turn diffs in `codex exec` human output | Reduces noisy repeated file-change output in CLI runs. Quality-of-life fix for `codex exec`. |
| [#53436](https://github.com/openai/codex/pull/53436) — Route TUI request replies to originating connection and thread | Keeps pending request replies associated with the correct session/thread after session switches. Fixes cross-thread reply leakage. |
| [#53429](https://github.com/openai/codex/pull/53429) — Apply configuration toggles live and improve settings navigation | Removes restart requirements for several toggles and improves settings search/display. Reduces friction in Codex configuration. |
| [#53419](https://github.com/openai/codex/pull/53419) — Restore saved thread permissions during configuration loading | Ensures saved read-only threads resume with correct permissions, including network proxy initialization and validation. Security-relevant correctness fix. |
| [#53424](https://github.com/openai/codex/pull/53424) — Add regression coverage for network grants on cold thread resume | Adds Linux app-server integration coverage for restored network grants after default permissions change. Good regression hardening. |
| [#53412](https://github.com/openai/codex/pull/53412) — Isolate arg0 helper directories by OS | Prevents Windows and WSL from cleaning each other’s live helpers when sharing `CODEX_HOME`. Important mixed-environment safety fix. |
| [#53400](https://github.com/openai/codex/pull/53400) — Add explicit local board connections with fixed runtime access | Adds `LocalBoard`/`LocalBoardConnection` for independently created Codex runtimes to share boards with different access permissions. Multi-agent/local coordination infrastructure. |

Additional notable closed PRs: [#53443](https://github.com/openai/codex/pull/53443) local MSVC toolchains for Windows Bazel, [#53426](https://github.com/openai/codex/pull/53426) Windows runtime registration diagnostics, [#53440](https://github.com/openai/codex/pull/53440) 16-color terminal status accents, [#53438](https://github.com/openai/codex/pull/53438) Apple Terminal detection fix.

## 5. Feature Request Trends
- **Daemon lifecycle control:** Make background daemon behavior opt-in, or at least ask before enabling it. Representative: [#48195](https://github.com/openai/codex/issues/48195).
- **More automation triggers:** Support event-driven automation beyond scheduled/heartbeat runs. Representative: [#24864](https://github.com/openai/codex/issues/24864).
- **Windows/WSL parity:** Fix Computer Use, Browser Use, sandbox, path handling, clipboard, and agent-tool initialization on Windows/WSL. Representatives: [#49458](https://github.com/openai/codex/issues/49458), [#49980](https://github.com/openai/codex/issues/49980), [#51638](https://github.com/openai/codex/issues/51638), [#52857](https://github.com/openai/codex/issues/52857).
- **Cloud/local execution clarity:** Users want clearer labels, environment discovery, and execution-host visibility for cloud tasks. Representatives: [#51197](https://github.com/openai/codex/issues/51197), [#50182](https://github.com/openai/codex/issues/50182), [#49608](https://github.com/openai/codex/issues/49608).
- **Context/resume reliability:** Long-running goals should survive compaction, WebSocket retries, and resume without context overflow. Representatives: [#51368](https://github.com/openai/codex/issues/51368), [#52567](https://github.com/openai/codex/issues/52567).
- **Delegated/subagent approvals:** Approvals and permissions need to propagate reliably into dot tasks, subagents, and auditor/CoS workflows. Representatives: [#51412](https://github.com/openai/codex/issues/51412), [#51304](https://github.com/openai/codex/issues/51304), [#45470](https://github.com/openai/codex/issues/45470).
- **MCP performance/inventory:** Reduce redundant MCP ready notifications and inventory refresh traffic. Representative: [#50627](https://github.com/openai/codex/issues/50627).

## 6. Developer Pain Points
- **Windows desktop instability dominates:** Sidebar/project loss, renderer crashes, OAuth/workspace routing failures, stream disconnects, sandbox `SHARING_VIOLATION`, and state corruption after shutdowns. Representatives: [#42739](https://github.com/openai/codex/issues/42739), [#50969](https://github.com/openai/codex/issues/50969), [#52713](https://github.com/openai/codex/issues/52713), [#53261](https://github.com/openai/codex/issues/53261), [#52919](https://github.com/openai/codex/issues/52919).
- **WSL/Windows mixed environments are fragile:** Path serialization, workspace URI errors, process creation failures, and clipboard stalls remain recurring. Representatives: [#49980](https://github.com/openai/codex/issues/49980), [#51049](https://github.com/openai/codex/issues/51049), [#53453](https://github.com/openai/codex/pull/53453).
- **Computer Use / Browser Use availability is inconsistent:** Dot tasks, subagent continuations, and Windows browser control intermittently lose tools or routes. Representatives: [#49458](https://github.com/openai/codex/issues/49458), [#51105](https://github.com/openai/codex/issues/51105), [#52857](https://github.com/openai/codex/issues/52857), [#25848](https://github.com/openai/codex/issues/25848).
- **Context overflow blocks long-running work:** Compaction and resume failures can strand goals that have been running for weeks. Representatives: [#51368](https://github.com/openai/codex/issues/51368), [#52567](https://github.com/openai/codex/issues/52567).
- **Approval propagation is unreliable:** Explicit user approval often fails to reach delegated tasks, subagents, or auditor workflows. Representatives: [#51412](https://github.com/openai/codex/issues/51412), [#51304](https://github.com/openai/codex/issues/51304), [#45470](https://github.com/openai/codex/issues/45470).
- **Cloud/local labels obscure execution context:** Users cannot easily tell whether a task is cloud or local, which host is executing, or which browser/plugin capabilities exist. Representative: [#51197](https://github.com/openai/codex/issues/51197).
- **Daemon behavior feels surprising:** A persistent, self-updating background daemon enabled by default is a major trust and resource concern. Representative: [#48195](https://github.com/openai/codex/issues/48195).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-10-13

## 1. Today's Highlights
A single nightly build landed (`v0.65.0-nightly.20261012`), while community attention remained concentrated on **subagent reliability** — a p1 bug where MAX_TURNS interruptions are falsely reported as `GOAL` success (#22323) and a widely-upvoted report that the generalist agent hangs indefinitely (#21409, 8 👍). On the PR side, the day's strongest activity was in **interruption/terminal robustness**: fixes for Ctrl-C session poisoning (#29728), synchronized output to kill `tmux` flicker (#29725), and a long-standing P0 security fix for `/settings` leaking environment variables (#8154, now closed).

## 2. Releases
**v0.65.0-nightly.20261012.g9b6e0265d** — nightly channel only; no stable release in the last 24h.
- Full changelog: https://github.com/google-gemini/gemini-cli/compare/v0.65.0-nightly.20261010.g9b6e0265d...v0.65.0-nightly.20261012.g9b6e0265d
- Diff versus the prior nightly is incremental; no user-facing release notes were published. Users on stable should wait for the next promoted build.

## 3. Hot Issues

1. **#22323 — Subagent recovery after MAX_TURNS reported as GOAL success (p1, 13 comments, 2 👍)**
   A `codebase_investigator` subagent reports `status: "success"` / `Termination Reason: GOAL` even though it hit the turn limit before doing any analysis. This is the highest-traffic issue of the day because it corrupts trust in agent telemetry — callers can't distinguish real completion from silent failure.
   https://github.com/google-gemini/gemini-cli/issues/22323

2. **#21409 — Generalist agent hangs (p1, 8 comments, 8 👍)**
   The most upvoted issue in this window. Trivial operations (e.g. folder creation) hang indefinitely when delegated to the generalist agent; disabling subagent delegation is the only workaround. High reaction count signals broad real-world impact.
   https://github.com/google-gemini/gemini-cli/issues/21409

3. **#19873 — Zero-dependency OS sandboxing & post-execution intent routing (p2, 9 comments)**
   Argues Gemini 3 is natively bash-oriented (`grep`/`sed`/`awk` chains) and proposes a sandboxing model that unlocks that affinity without sacrificing security. Second-highest comment count; a strategic design debate rather than a single bug.
   https://github.com/google-gemini/gemini-cli/issues/19873

4. **#21968 — Gemini does not use skills and sub-agents enough (p2, 7 comments)**
   Anecdotal but persistent: skills with clear trigger descriptions (gradle, git) are ignored unless explicitly invoked. Undermines the value of the extensions/skills ecosystem.
   https://github.com/google-gemini/gemini-cli/issues/21968

5. **#22745 — AST-aware file reads, search, and mapping EPIC (p2, 7 comments)**
   Umbrella investigation into AST-aware tooling to cut misaligned reads, reduce token noise, and improve navigation precision. Signals a likely direction for `codebase_investigator` improvements (see also #22746, #22747).
   https://github.com/google-gemini/gemini-cli/issues/22745

6. **#22267 — Browser Agent ignores `settings.json` overrides (p2, 4 comments)**
   `AgentRegistry` merges settings correctly, but the Browser Agent discards them (e.g. `maxTurns`). A configuration-integrity bug that breaks user expectations of a single source of truth.
   https://github.com/google-gemini/gemini-cli/issues/22267

7. **#21983 — Browser subagent fails on Wayland (p1, 4 comments, 1 👍)**
   Browser subagent terminates with `GOAL` despite failing on Wayland. Part of a cluster of browser-agent issues (#22232, #22267) suggesting the browser stack needs a hardening pass.
   https://github.com/google-gemini/gemini-cli/issues/21983

8. **#24246 — 400 error with >128 tools (p2, 3 comments)**
   Too many enabled tools produce a hard API failure instead of intelligent scoping. Directly limits users with large extension/MCP setups.
   https://github.com/google-gemini/gemini-cli/issues/24246

9. **#22672 — Agent should stop/discourage destructive behavior (p2, 3 comments, 1 👍)**
   Model occasionally reaches for `git reset` / `--force` when safer paths exist, and doesn't respect the danger of mutating live resources. A safety-adjacent request with clear user buy-in.
   https://github.com/google-gemini/gemini-cli/issues/22672

10. **#22741 — Allow local agents to be backgroundable (p3, 1 comment, 2 👍)**
    Request to send local subagents to the background with `Ctrl+B`. Small surface, high reaction-to-comment ratio — a good signal of latent demand for non-blocking workflows.
    https://github.com/google-gemini/gemini-cli/issues/22741

*Also worth watching:* #22598 (expose subagent trajectories via `/chat share`), #18836 (replace WriteToDo with persistent file-based task tracking), #20079 (symlinked agent files not recognized), #21763 (bug reports omit subagent context).

## 4. Key PR Progress

1. **#29728 — Prevent session poisoning on rapid Ctrl-C interruption (p1, size/l)**
   Fixes a race where a second `Ctrl+C` fires `/quit` before the unawaited cancellation completes, leaving the session in a poisoned state. Core UX reliability.
   https://github.com/google-gemini/gemini-cli/pull/29728

2. **#29725 — Synchronized output + isolated spinner rendering (p2, size/xl)**
   Wraps interactive frame writes in terminal synchronized-output escapes and isolates spinner state to eliminate flicker in `tmux` and other multiplexers.
   https://github.com/google-gemini/gemini-cli/pull/29725

3. **#29568 — Append-only delta patching & bounded history in ChatRecordingService (p1, closed)**
   Replaces full-history `$set: { messages }` rewrites and unbounded in-memory retention with incremental deltas — a meaningful memory/latency win for long sessions.
   https://github.com/google-gemini/gemini-cli/pull/29568

4. **#8154 — Fix P0: `/settings` overwrites JSON and leaks env vars (closed)**
   Long-running (since Sept 2025) P0 fix: the `/settings` command replaced `$API_KEY` references with plaintext and stripped comments. Now refactored onto `comment-json`. Its closure is the most security-relevant event in this window.
   https://github.com/google-gemini/gemini-cli/pull/8154

5. **#29611 — Multimodal function response for dotted Gemini 3 models (p2, size/m)**
   Resolves model aliases and dotted versions in `supportsMultimodalFunctionResponse()`, preventing image tool outputs from being emitted as invalid sibling parts (HTTP 400s) on models like `gemini-3.8-flash`.
   https://github.com/google-gemini/gemini-cli/pull/29611

6. **#29678 — Load `.env` before resolving settings placeholders (p2, closed)**
   Fixes a load-order race in `_doLoadSettings` where workspace/user settings expanded `${VAR}` placeholders before `.env` was loaded.
   https://github.com/google-gemini/gemini-cli/pull/29678

7. **#29644 — Restore debounced static UI refresh on terminal width change (p1, size/m–l)**
   Reinstates a 100 ms debounced `refreshStatic()` so horizontal resizes in inline rendering mode don't thrash the renderer. Complements #29725 and #21924.
   https://github.com/google-gemini/gemini-cli/pull/29644

8. **#29727 — Report omitted `list_directory` entries (area/agent, size/s)**
   `list_directory` silently returned zero entries when files failed path validation; rejected entries are now surfaced to both model and user while keeping access restrictions intact.
   https://github.com/google-gemini/gemini-cli/pull/29727

9. **#29718 — `--userns=keep-id` for rootless Podman sandboxes (p2, size/m)**
   Fixes `EACCES` for rootless Podman users by mapping the caller's UID into the container namespace, applied only for Podman sandbox invocations.
   https://github.com/google-gemini/gemini-cli/pull/29718

10. **#29638 — Remove VS Code marketplace update check on startup (size/l)**
    Drops an unnecessary network request on every `vscode-ide-companion` activation (fixes #29555).
    https://github.com/google-gemini/gemini-cli/pull/29638

*Also notable:* #29726 (sandbox `trap` wrapper misidentified as command name, breaking per-command rules on POSIX), #29719 (reset/dedupe `sessionModifiedBuildFiles` security warnings), #29699 (Unicode off-by-one in Ctrl+R reverse search), #29722 (whitespace-only UTF-16/32 files misdetected as non-empty), #29720 (one bad extension no longer blocks all extension loading).

## 5. Feature Request Trends

- **Smarter, cheaper code exploration** — AST-aware file reads, search, and codebase mapping (#22745, #22746, #22747), plus token-frugal surgical read hierarchies (#19561). The dominant architectural theme.
- **Persistent, out-of-context state** — replace in-context `WriteToDo` with file-based CRUD task tracking (#18836, #21000) to combat context rot.
- **Subagent observability & control** — trajectory visibility via `/chat share` (#22598), subagent context in `/bug` reports (#21763), backgroundable local agents via `Ctrl+B` (#22741), and shared-memory / parallel subagent collaboration (#18287).
- **Sandboxing and safe autonomy** — zero-dependency OS sandboxing (#19873), discouraging destructive git/DB operations (#22672), and per-workspace (not global) policy scoping (#18397).
- **Better agent self-awareness** — accurate CLI flags, hotkeys, and self-execution so the agent can act as its own expert guide (#21432); more autonomous use of skills and subagents (#21968).
- **Browser agent resilience** — automatic session takeover and lock recovery (#22232), Wayland support (#21983), and honoring `settings.json` (#22267).

## 6. Developer Pain Points

- **Subagents are the weakest link.** Hangs (#21409), false-success reporting after turn limits (#22323), ignored configuration (#22267), missing context in bug reports (#21763), and platform-specific failures (#21983). This cluster accounts for the highest comment and reaction counts across the dataset.
- **Interruption and input handling is fragile.** Multiple concurrent PRs (#29728, #29586, #29644) target Ctrl+C being swallowed or corrupting session state — a strong signal that abort semantics have been unreliable.
- **Terminal rendering quality.** Flicker in multiplexers, resize thrashing, and reverse-search highlight bugs (#29725, #29644, #29699, #21924) form a recurring UX complaint thread.
- **Configuration and environment ordering bugs.** Settings loaded before `.env` (#29678), placeholders expanded too early, and browser agent overrides discarded (#22267) — users are fighting load-order semantics rather than configuration content.
- **Hard limits that fail loudly instead of degrading.** The 400 error beyond ~128 tools (#24246) blocks power users with large MCP/extension sets rather than scoping intelligently.
- **Workspace hygiene and safety.** The model littering temp scripts across directories (#23571) and reaching for `git reset` / `--force` (#22672) create cleanup overhead and real risk of data loss.
- **Underused capabilities.** Skills and subagents that exist but aren't invoked autonomously (#21968) leave the extension ecosystem's value unrealized.

*Digest generated from github.com/google-gemini/gemini-cli activity for 2026-10-13.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



# GitHub Copilot CLI Community Digest — 2026-10-13

## 1. Today's Highlights
The GitHub Copilot CLI released versions **v1.0.97-0** and **v1.0.96**, introducing agent-scoped declarative hooks, inline image rendering by default, and enterprise policy startup improvements. The community is actively troubleshooting critical platform-specific issues, particularly around Windows Entra/MCP authentication crashes and macOS Gatekeeper blocks under corporate security policies.

---

## 2. Releases

### v1.0.97-0
*   **Agent-Scoped Declarative Hooks:** Added support for custom agents to define declarative hooks.
*   **Inline Images:** Inline images now render by default on supported terminals without requiring experimental mode. Users can disable this via `/settings inlineImages false`.
*   **Autopilot Hook Decisions:** Fixed an issue where Autopilot incorrectly denies a `preToolUse` hook's "ask" decision.

### v1.0.96 (Released 2026-10-12)
*   **Interactive Sandbox Settings:** Sandbox configuration now suggests potential environment secrets and allows defining masking hosts prior to saving.
*   **Case-Insensitive Model IDs:** Model IDs in `/model` and `/config model` are now case-insensitive, automatically saving canonical IDs.
*   **Enterprise Policy Resolution:** `/allow-all` remains available during the startup phase while enterprise policies are still resolving.

---

## 3. Hot Issues (Top 10)

### 1. macOS Gatekeeper Corporate Policy Block ([#970](https://github.com/github/copilot-cli/issues/970))
*   **Why it matters:** Users upgrading via Homebrew are blocked by macOS Gatekeeper security warnings, requiring manual Privacy & Security overrides. 
*   **Community Reaction:** Highly critical with **22 👍** and **8 comments**, highlighting a major friction point for enterprise-managed macOS environments.

### 2. Windows MCP Entra Sign-in Scopes Validation Failure ([#5068](https://github.com/github/copilot-cli/issues/5068))
*   **Why it matters:** Interactive sign-ins to Entra ID-protected MCP servers (like Azure DevOps MCP) fail completely due to scope validation errors.
*   **Community Reaction:** **12 👍** and **3 comments**, indicating a severe blocker for enterprise Windows users leveraging secure MCP servers.

### 3. Prompt Caching for Claude Sonnet ([#3808](https://github.com/github/copilot-cli/issues/3808))
*   **Why it matters:** No visible optimization exists for Anthropic's prompt caching, leading to high latency and redundant token costs for large system prompts.
*   **Community Reaction:** **8 👍** and **3 comments**, showing strong demand for cost and latency optimizations.

### 4. BYOK Sub-Agent Wire API Mismatch ([#5103](https://github.com/github/copilot-cli/issues/5103))
*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



# OpenCode Community Digest — 2026-10-13

## 1. Today's Highlights
Today marks a major push toward stabilizing V2 architecture and resolving critical upstream provider integration issues. The core development team has introduced a pivotal PR (#54932) to add request body compression (zstd/gzip), directly targeting the gateway 503 errors on large payloads. Additionally, significant progress has been made on closing critical migration bugs (legacy ID mapping) and rendering bugs (KaTeX MathML preservation), while the community remains highly active in troubleshooting memory leaks and desktop performance bottlenecks.

## 2. Releases
*No new releases were published in the last 24 hours.*

## 3. Hot Issues
Here are 10 noteworthy issues shaping the community conversation:

*   **[#20695] Memory Megathread (Closed):** A centralized hub for tracking memory leaks (150 comments, 112 👍). It remains the most critical community-focused thread, requesting standardized heap snapshots to diagnose severe memory bloat during long-running sessions.
*   **[#54664] OpenAI gateway 503 on uncompressed bodies over ~1 MiB (Open):** Tracks a critical failure where OpenAI-compatible providers reject uncompressed request bodies exceeding roughly 1 MiB, rendering large-context sessions unreliable.
*   **[#50363] mcp: orphaned local MCP server processes accumulate after sessions end (Open):** Highlights a severe resource leak where local `npx

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-10-13

## 1. Today's Highlights

Activity is dominated by Windows-specific reliability and TUI performance problems, with the long-running Windows sink-thread (#7547) passing 80 comments and several Windows rendering/sandbox bugs closed today. A high-priority (p0) session-resume regression (#10785) and a context-estimation corruption chain (#10807) highlight ongoing fragility in long sessions, while the image-attachment bug on compiled Bun binaries (#10645) picked up a fix in PR #10834. Model-catalog freshness continues to generate churn on both the issue and PR side, notably around OpenRouter key guardrails and the Codex 500K context window.

## 2. Releases

No new releases in the last 24 hours.

## 3. Hot Issues

1. **[#7547](https://github.com/earendil-works/pi/issues/7547) — [Windows] How do you use Pi on Windows? (81 comments, 👍2, OPEN)**
   The de facto Windows community hub: how to scope core effort across native, WSL, Git Bash, and terminal variants. The 81-comment thread is the clearest signal that Windows support is the single largest unresolved platform question.

2. **[#9549](https://github.com/earendil-works/pi/issues/9549) — Large transcripts re-render every frame; every resize re-emits the whole transcript (OPEN)**
   On a 2-core Windows 11 box, fullscreen mode saturates a core on large sessions. Agent-drafted, repro-verified with `pi -ne`, so the measurement quality drove engagement rather than volume.

3. **[#10645](https://github.com/earendil-works/pi/issues/10645) — resizeImage resolves null in compiled (Bun) executables; all image attachments omitted since 0.87.x (inprogress)**
   A silent, long-lived regression affecting every standalone binary user and any host spawning `pi --mode rpc`. Already has a fix in flight (#10834), which explains the "inprogress" tag.

4. **[#10785](https://github.com/earendil-works/pi/issues/10785) — [prio:p0] Resuming a session drops dynamically activated tools (OPEN)**
   Highest-priority open issue on the board: optional (`defaultActive: false`) and `exposure: "deferred"` tools silently deactivate after resume, corrupting the next turn's tool list. Directly affects extension authors and deferred MCP setups.

5. **[#10807](https://github.com/earendil-works/pi/issues/10807) — One retryable request failure permanently corrupts the context estimate and bricks the session via compaction (CLOSED, last-read)**
   A single 429/5xx can poison `context_*` accounting and trigger a compaction death spiral. Closed as last-read, but the severity (unrecoverable long sessions) makes it a likely re-open or follow-up candidate.

6. **[#10741](https://github.com/earendil-works/pi/issues/10741) — Groq Qwen3.8 27B fails with HTTP 400 because Pi sends the `developer` role (OPEN)**
   Provider-role mapping bug: minijinja rejects the role outright, so the model is entirely unusable on Groq. A clean example of provider-compatibility gaps outside the big three vendors.

7. **[#10628](https://github.com/earendil-works/pi/issues/10628) — OSC 52 copy in fullscreen TUI is swallowed by tmux (👍3, OPEN)**
   Copy-on-select writes raw OSC 52 without passthrough wrapping; tmux eats it, yet Pi still flashes "Copied!". The highest-upvoted open issue in this window and a classic headless-SSH-over-tmux workflow blocker.

8. **[#10838](https://github.com/earendil-works/pi/issues/10838) — `--tools` silently drops direct-exposure MCP tools, including codemode (CLOSED, no-action)**
   Silent loss of MCP capability when `--tools` is scoped, contradicting documented codemode behavior. Closed no-action, which may not sit well with users relying on the documented contract.

9. **[#10812](https://github.com/earendil-works/pi/issues/10812) — Saved default model missing from catalog is ignored, silently falling back to a different model (OPEN)**
   Renamed/retired model IDs cause quiet substitution with no warning. A small UX issue with outsized trust implications — users can't tell which model actually served a session.

10. **[#10798](https://github.com/earendil-works/pi/issues/10798) — Concurrent pi processes race managed npm install on the shared `.pi/npm` prefix (OPEN)**
    No install lock means parallel subagent sessions can corrupt the managed package prefix. Directly relevant as subagent parallelism becomes more common.

*Also worth tracking:* [#10821](https://github.com/earendil-works/pi/issues/10821) (resize freeze, closed), [#7738](https://github.com/earendil-works/pi/issues/7738) (concurrent compaction crash, closed), [#10770](https://github.com/earendil-works/pi/issues/10770) (session dir perms should be `0700`).

## 4. Key PR Progress

1. **[#10834](https://github.com/earendil-works/pi/pull/10834) — fix(coding-agent): fall back after Bun image worker null (CLOSED)**
   Fixes #10645: a `null` worker result is no longer treated as a successful resize, restoring the URL-worker and in-process fallbacks.

2. **[#10847](https://github.com/earendil-works/pi/pull/10847) — fix: preserve legacy model catalog route on publish (OPEN)**
   Prevents the publisher from clobbering the `minimumPiVersion: "0.80.7"` index entry, which had been breaking catalog fetches for 0.80.8–0.84.4 clients.

3. **[#10672](https://github.com/earendil-works/pi/pull/10672) — feat(ai,coding-agent): list only the OpenRouter models a key may use (CLOSED)**
   Merges the catalog with `GET /models/user`, carrying per-key context size, max output, and pricing. Also the better-tested of the two competing OpenRouter-filtering PRs.

4. **[#10569](https://github.com/earendil-works/pi/pull/10569) — feat(ai,coding-agent): filter OpenRouter models by key availability (CLOSED)**
   The earlier take on the same problem (closes #10353), using `baseUrl`/effective key for regional guardrails. Closed alongside #10672 — worth watching which lands.

5. **[#10533](https://github.com/earendil-works/pi/pull/10533) — fix(durable): reject waits that close a cycle (CLOSED)**
   Cyclic waits now fail at the closing wait instead of hanging indefinitely, matching existing self/owner-wait semantics.

6. **[#10830](https://github.com/earendil-works/pi/pull/10830) — fix(coding-agent): bound retries across successful tool turns (CLOSED)**
   A successful `toolUse` no longer resets `retry.maxRetries`, closing an unbounded retry loop (`error → toolUse → error → …`).

7. **[#10829](https://github.com/earendil-works/pi/pull/10829) — fix(coding-agent): demonstrate durable filtering of degenerate output (CLOSED)**
   Adds an opt-in extension example that filters repeated tails during replay/compaction, addressing context bloat from degenerate model output.

8. **[#10739](https://github.com/earendil-works/pi/pull/10739) — fix(coding-agent): emit `before_agent_start` for runs started by custom messages (CLOSED)**
   Fixes runs triggered by `pi.sendMessage(..., { triggerTurn: true })` that skipped the hook, which was patching away prompt sections mid-run and breaking provider prompt caching.

9. **[#10820](https://github.com/earendil-works/pi/pull/10820) — fix(ai): send `x-opencode-session` by endpoint, not provider id (CLOSED)**
   Generalizes the #9326 fix so any provider pointing at a zen endpoint gets the per-conversation routing header, eliminating `400 MissingSessionID`.

10. **[#10819](https://github.com/earendil-works/pi/pull/10819) — docs(coding-agent): use `registerToolRenderer` in minimal-mode example (CLOSED)**
    Documentation-only, but fixes a real footgun: the old example re-registered built-in tools and silently replaced their `execute`.

*Also:* [#10718](https://github.com/earendil-works/pi/pull/10718) (system prompt in `--export` HTML, OPEN) and [#1](https://github.com/earendil-works/pi/pull/1) (Windows Git Bash support for the bash tool, closed as a feature request).

## 5. Feature Request Trends

- **Windows as a first-class platform.** Git Bash detection, terminal matrix, and sandbox cold-start budgets dominate (#7547, #1, #10850, #10821). The community is asking for a decision on which Windows paths core owns versus delegates.
- **Extension observability and interception.** Requests for wrapping/observing session model calls (#10832) and per-task metadata on model requests (#10845) point to a desire for proper instrumentation hooks (OpenTelemetry is explicitly cited).
- **Portability of the durable runtime.** #10846 asks for an injected daemon process so the client can run in Workers without `node:*` imports — a push toward edge/serverless deployment.
- **Machine-readable session output.** #10833 wants session entry IDs on `message_end` (or universal `entry_appended`), reflecting growing programmatic consumption of `--mode json`.
- **Privacy-safe defaults.** #10770 requests `0700` on `.pi/agent/sessions` (and possibly `.pi/agent`) at creation time.
- **Model catalog correctness.** #10840, #10812, #10847, #10672 all revolve around stale or incorrectly scoped model metadata, including per-key guardrails and context-window budgets.

## 6. Developer Pain Points

- **Silent failures are the dominant theme.** Dropped MCP tools (#10838), ignored default models (#10812), `null` image resizes (#10645), and false "Copied!" confirmations (#10628) all share the same shape: the user is told everything is fine while capability is quietly lost.
- **Long sessions remain fragile.** Context-estimate corruption after a single 429/5xx (#10807), concurrent compaction crashes (#7738), unbounded retries (#10830), and full-transcript re-renders (#9549, #10821) all scale badly with session length — precisely where Pi's value proposition is highest.
- **Concurrency races in shared project state.** Unlocked `npm install` against a shared `.pi/npm` prefix (#10798) breaks parallel subagent workflows.
- **Provider-specific compatibility gaps.** The `developer` role on Groq (#10741), Anthropic grammar-size rejection under `strict: "prefer"` (#10409), and Anthropic OAuth tool-name casing (#10836) each require per-vendor special-casing that users must discover the hard way.
- **Windows experience fragmentation.** Cold-start sandbox timeouts (#10850), resize freezes (#10821), and the sprawling terminal/backend matrix (#7547) leave Windows users without a clear "supported" configuration.
- **Documentation drift from behavior.** The `--tools`/codemode contract (#10838) and the minimal-mode example (#10819) both documented behavior the code did not honor.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-10-13
Data window: activity through 2026-10-12. Source: [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code).

## Today's Highlights
No new releases landed in the last 24h. The highest-signal discussion remains Managed Agent architecture and multi-agent/session semantics, led by [#12380](https://github.com/QwenLM/qwen-code/issues/12380) with 56 comments. Bug/CI/config activity is also high: XML tool-call recovery, RTL/LTR chat rendering, LSP BOM handling, Linux Desktop packaging, and main-branch CI failures all saw updates.

## Releases
None in the last 24h.

## Hot Issues

1. **[#12380](https://github.com/QwenLM/qwen-code/issues/12380) — proposal(serve): Define Managed Agent dual-path architecture and staged delivery**  
   *Why it matters:* Sets direction for durable Sessions, Workspace bindings, recoverable tool executions, and Web Shell integration.  
   *Reaction:* 56 comments — by far the most active design thread; labels span core, session-management, multi-agent, daemon, and web-shell.

2. **[#13492](https://github.com/QwenLM/qwen-code/issues/13492) — XML tool-call recovery drops outer calls containing quoted tool markup**  
   *Why it matters:* Tool-call parsing/recovery is foundational for agent reliability; a partial fix merged, but outer-call recovery remains.  
   *Reaction:* 11 comments; in-review core bug with follow-up PR pending.

3. **[#13785](https://github.com/QwenLM/qwen-code/issues/13785) — Multi-Agent API: agent-identity dimension on the public contract**  
   *Why it matters:* Aims to make multi-agent execution attributable, tree-shaped, and interruptible without adding a hosted service.  
   *Reaction:* 6 comments; roadmap/multi-agent and daemon labels indicate active design interest.

4. **[#13898](https://github.com/QwenLM/qwen-code/issues/13898) — Web Shell: show live status of background subagents**  
   *Why it matters:* Background Agent runs are hard to monitor; requested live running/done/elapsed/remaining status in the session window.  
   *Reaction:* 5 comments; UI + subagents-tools + web-shell scope.

5. **[#13837](https://github.com/QwenLM/qwen-code/issues/13837) — Chat view breaks mixed RTL/LTR text**  
   *Why it matters:* RTL users see mirrored/scrambled code blocks and broken bidi isolation — an i18n and rendering correctness issue.  
   *Reaction:* 5 comments; marked `feature/need-help` and `welcome-pr`.

6. **[#13924](https://github.com/QwenLM/qwen-code/issues/13924) — Publish Qwen Code Desktop on Flathub for Linux app stores**  
   *Why it matters:* Closes a distribution/update-channel gap for Linux Mint and other Flathub-based stores.  
   *Reaction:* 5 comments; platform/packaging/roadmap labels.

7. **[#13130](https://github.com/QwenLM/qwen-code/issues/13130) — Desktop became unusable because every workspace turned untrusted**  
   *Why it matters:* Trust/security state can render the app read-only with no practical recovery path.  
   *Reaction:* 4 comments; closed after maintainer attention, but highlights a sharp Desktop UX/security edge case.

8. **[#13680](https://github.com/QwenLM/qwen-code/issues/13680) — Vendored x64-linux ripgrep SIGSEGVs on every startup probe**  
   *Why it matters:* A P1 Linux Desktop startup blocker caused by post-link binary rewriting.  
   *Reaction:* 4 comments; closed, but important for Linux release confidence.

9. **[#14004](https://github.com/QwenLM/qwen-code/issues/14004) — Separate the agentic harness from the LLM subscription**  
   *Why it matters:* Raises governance/conflict-of-interest concerns around token spend and quota incentives.  
   *Reaction:* 3 comments; token-management + need-discussion.

10. **[#13998](https://github.com/QwenLM/qwen-code/issues/13998) — Web Shell turn collapse hides the final answer when a background task notification lands**  
    *Why it matters:* A UI regression that hides the actual answer behind a collapsed turn row.  
    *Reaction:* 3 comments; Web Shell UI bug with clear repro.

## Key PR Progress

1. **[#13601](https://github.com/QwenLM/qwen-code/pull/13601) — feat(core): add a convergence reminder for read-only exploration**  
   Adds an advisory reminder when read/search/fetch calls reach the tool-call allowance, pushing the agent to advance or explain blockers.

2. **[#13969](https://github.com/QwenLM/qwen-code/pull/13969) — feat(hooks): add FileChanged notifications for local sessions**  
   Adds a general `FileChanged` hook for local, non-managed sessions, with cwd filenames, absolute files, and recursive directories.

3. **[#14003](https://github.com/QwenLM/qwen-code/pull/14003) — feat(cli): add repeatable `--disable-mcp-server`**  
   Lets users exclude named MCP servers per invocation without mutating `settings.json`; comma-split and repeatable.

4. **[#13219](https://github.com/QwenLM/qwen-code/pull/13219) — fix(managed-agent): bound retry loops with terminal states**  
   Gives managed-agent async retry loops budgets and terminal states, including healing a permanently wedged projection.

5. **[#13816](https://github.com/QwenLM/qwen-code/pull/13816) — fix(managed-agent): hand back the Workspace mount when a tool turn goes recovery blocked**  
   Adds a narrow broker-internal mount-release endpoint to free a Workspace execution lease without broader disruption.

6. **[#13436](https://github.com/QwenLM/qwen-code/pull/13436) — fix(acp): preserve cancellation intent across session recovery**  
   Preserves explicit user cancellation while keeping infrastructure interruptions recoverable.

7. **[#13914](https://github.com/QwenLM/qwen-code/pull/13914) — fix(web-shell): honor session recap settings in the auto-recap trigger**  
   Aligns Web Shell auto-recap behavior with CLI settings, including the away threshold and default-off recap trigger.

8. **[#13215](https://github.com/QwenLM/qwen-code/pull/13215) — fix(serve): fit provider confirmation answers to the response limit**  
   Keeps Managed Runtime confirmation payloads within wire limits by trimming large fields like diffs and commands.

9. **[#13981](https://github.com/QwenLM/qwen-code/pull/13981) — refactor(core): one record/array gate for file-history snapshot payloads**  
   Consolidates duplicated payload validation across restore/fork/turn-state readers, reducing drift and defects.

10. **[#12985](https://github.com/QwenLM/qwen-code/pull/12985) — fix(cli): split comma-separated `--include-tools`/`--exclude-tools` in `mcp add`**  
    Makes MCP tool filters save as separate names instead of one comma-joined string, matching OAuth scope handling.

## Feature Request Trends
- **Managed agents, multi-agent, and daemon/session architecture:** durable ownership, Workspace bindings, recoverable tool executions, agent identity, interruptibility, and staged delivery.
- **Web Shell / Desktop UX:** live background subagent status, turn-collapse correctness, recap settings, model/OAuth cleanup, composer polish, and clearer session state.
- **Platform distribution and IDE integration:** Flathub/Linux packaging, VS Code IDE Companion localization, and stable update channels.
- **Integration/MCP expansion:** You.com free MCP for web search, Chrome extension behavior, and ACP transcript/resource replay.
- **Configuration and runtime robustness:** LSP BOM handling, multi-provider same-model switching, OSC 7501 program status, memory extraction cadence, and token-management governance.

## Developer Pain Points
- **CI instability:** main-branch failures ([#12714](https://github.com/QwenLM/qwen-code/issues/12714), [#13953](https://github.com/QwenLM/qwen-code/issues/13953)) and integration checkout failures such as “pack has 1 unresolved delta” ([#13951](https://github.com/QwenLM/qwen-code/issues/13951)).
- **Silent config failures:** `.lsp.json` with a UTF-8 BOM is silently ignored, leaving users with no LSP diagnostics ([#13943](https://github.com/QwenLM/qwen-code/issues/13943)).
- **Managed-agent recovery complexity:** retry loops without terminal states, race conditions around Monitor resume/settle, and cleanup/mount-release edge cases ([#13984](https://github.com/QwenLM/qwen-code/issues/13984), [#13992](https://github.com/QwenLM/qwen-code/issues/13992), [#13242](https://github.com/QwenLM/qwen-code/issues/13242)).
- **Web Shell/Desktop UI regressions:** hidden final answers, discontinued OAuth model entries, RTL/LTR breakage, and release-note duplication ([#13998](https://github.com/QwenLM/qwen-code/issues/13998), [#13965](https://github.com/QwenLM/qwen-code/issues/13965), [#13837](https://github.com/QwenLM/qwen-code/issues/13837), [#13925](https://github.com/QwenLM/qwen-code/issues/13925)).
- **Linux Desktop packaging fragility:** vendored ripgrep SIGSEGV and missing Flathub/update-channel support ([#13680](https://github.com/QwenLM/qwen-code/issues/13680), [#13924](https://github.com/QwenLM/qwen-code/issues/13924)).
- **Provider/model management friction:** switching between providers that expose the same model ID remains awkward ([#13942](https://github.com/QwenLM/qwen-code/issues/13942)).
- **Background task visibility and daemon noise:** background subagents lack live status, and rejected daemon WebSocket upgrades retry indefinitely ([#13898](https://github.com/QwenLM/qwen-code/issues/13898), [#13966](https://github.com/QwenLM/qwen-code/issues/13966)).
- **Review/CI tooling false positives:** the `/review` Test Plan check misreads comma-grouped test counts ([#13735](https://github.com/QwenLM/qwen-code/issues/13735)).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



Here is the **DeepSeek TUI Community Digest** for **October 13, 2026**, summarizing the latest activity, issues, pull requests, and community trends based on the provided GitHub data.

---

### 1. Today's Highlights
The primary focus over the last 24 hours has been stabilizing the upcoming **v0.10.2 release** while tackling critical cross-platform compatibility issues, particularly on Windows. Key developments include addressing Windows 10 1607 startup crashes and runtime blocks on piped commands, alongside architectural refactors to improve code hygiene and test reliability in the TUI subagent modules.

---

### 2. Releases
*No new releases were published in the last 24 hours.* However, active development and slicing for the next patch release (v0.10.2) are well underway, focusing on fail-closed pricing, build-lock bypasses, and Windows owner recovery.

---

### 3. Hot Issues
The following issues represent the most critical bugs and feature requests currently being triaged or resolved:

*   **[Windows Runtime Floor Blocks Piped Commands](https://github.com/codewhale-hq/Codewhale/issues/6963)** *(Open, needs-triage)*: A follow-up to #6827 showing that the Windows runtime floor (`SessionRuntimeRisk`) incorrectly blocks ordinary read-only piped commands under Full Access on native installs. This is a high-priority blocker for Windows shell integration.
*   **[Windows 10 1607 v0.10.1 Startup Crash](https://github.com/codewhale-hq/Codewhale/issues/6953)** *(Closed)*: The app fails to start on older Windows 10 builds (e.g., build 14393) due to an unresolved load-time import of `DeriveCapabilitySidsFromName` (error `0xC0000139`). 
*   **[CI Regression Guard for Windows Imports](https://github.com/codewhale-hq/Codewhale/issues/6962)** *(Open)*: A proposal to implement automated checks ensuring that new releases do not introduce load-time imports that break older Windows versions (like Windows 10 1607).
*   **[Invisible Background Work & API Blocks](https://github.com/codewhale-hq/Codewhale/issues/6944)** *(Closed)*: Long-running commands silently moved to the background lost visibility, and Full Access blocked the single background API. Slices of this issue were partially resolved in v0.10.2.
*   **[Thinking Intensity Shortcut Glitch](https://github.com/codewhale-hq/Codewhale/issues/6650)** *(Closed)*: A UX bug where pressing the shortcut `Ctrl+T` to cycle thinking intensity fails to switch parameters on the third consecutive press, requiring a fourth press to register.
*   **[Multi-language `agents.md` Generation](https://github.com/codewhale-hq/Codewhale/issues/6964)** *(Open, enhancement)*: Users request that `codewhale init` automatically detect the system's language and generate a localized `agents.md` configuration file.
*   **[Background Work Progress & API Follow-up](https://github.com/codewhale-hq/Codewhale/issues/6961)** *(Open)*: Tracks remaining product decisions regarding unpolished progress events for background tasks and side-by-side execution metrics.
*   **[Runtime Split RS-12: Crate Root Relocation](https://github.com/codewhale-hq/Codewhale/issues/6939)** *(Closed)*: Part of the runtime/TUI deconstruction effort, relocating crate-root helpers and CLI parse types to establish cleaner boundaries for runtime tests.

---

### 4. Key PR Progress
The following pull requests show active development, stabilization, and dependency upgrades:

*   **[v0.10.2 Slices: Pricing, Build-Lock, and Windows Recovery](https://github.com/codewhale-hq/Codewhale/pull/6965)** *(Open)*: Carries the founder's core decisions for the v0.10.2 release, including fail-closed tier pricing, build-lock bypass fixes, and Windows owner recovery.
*   **[Runtime API: Workspace Trust Read/Write](https://github.com/codewhale-hq/Codewhale/pull/6959)** *(Open)*: Extends the Runtime API so external clients (like VS Code extensions) can read and write a workspace's project trust level without needing terminal access.
*   **[Test Stabilization: Widen Subagent Approval Bounds](https://github.com/codewhale-hq/Codewhale/pull/6966)** *(Open)*: Widens three short approval bounds to 30 seconds to resolve flaky test failures on Windows runners.
*   **[TUI Code Hygiene: Drop Blanket `dead_code` Allows](https://github.com/codewhale-hq/Codewhale/pull/6943)**

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

# ComfyUI Community Digest — 2026-10-13

## 1. Today's Highlights
No new ComfyUI releases were published in the last 24 hours. Activity is dominated by memory/cache correctness fixes — especially the loop output-cache leak ([#16978](https://github.com/Comfy-Org/ComfyUI/issues/16978)) and its companion PR ([#16979](https://github.com/Comfy-Org/ComfyUI/pull/16979)) — alongside a large batch of assets-system PRs. High-comment issues continue to center on quantized model merging and Windows/multi-GPU stability with newer model families such as Qwen Image 2.1 and MiniMax-H3.

## 3. Hot Issues

1. **[#14382](https://github.com/Comfy-Org/ComfyUI/issues/14382) — Quantized ModelMergeSimple crash (`'Linear' object has no attribute 'weight_scale'`)**  
   Open since June, now at 23 comments. Core-only reproduction: unguarded `getattr` in `get_key_weight` versus synthetic quant state-dict keys breaks fp8/QuantizedTensor merges. This is the most-discussed issue in the set and affects a core workflow.

2. **[#16443](https://github.com/Comfy-Org/ComfyUI/issues/16443) — Qwen Image 2.1 hard crash on Windows multi-GPU**  
   Fatal Python abort in the prefetch/staging-buffer path during image editing/img-to-img initialization or first sampling step. 7 comments; multi-GPU Windows users are clearly hitting it consistently.

3. **[#16946](https://github.com/Comfy-Org/ComfyUI/issues/16946) — MiniMax-H3 freezes entire Windows PC (RTX 3060 12GB)**  
   Repeated complete-PC freezes with no handled Python/CUDA OOM traceback; NVFP4 encoder/offload log ends abruptly. 3 comments. High severity because recovery requires a reboot.

4. **[#16917](https://github.com/Comfy-Org/ComfyUI/issues/16917) — MiniMax H3 I2V on Desktop: missing INT8 video VAE and audio VAE/image encoding error**  
   Workflow validation blocks execution on `vae_n...` input. 2 comments. Representative of model-specific setup friction in ComfyUI Desktop.

5. **[#16978](https://github.com/Comfy-Org/ComfyUI/issues/16978) — Loop iterations with `cache_iterations` off fill RAM**  
   Finished loop iterations remain in the output cache for the whole prompt, causing large performance drops as RAM is exhausted. Filed 2026-10-12 and already paired with a fix PR (#16979).

6. **[#16972](https://github.com/Comfy-Org/ComfyUI/issues/16972) — Download fails with `EISDIR` when models dir is on exFAT**  
   The download finalization uses a hard link with no fallback, so exFAT drives cannot finalize model downloads. Portability bug with a clear repro.

7. **[#16971](https://github.com/Comfy-Org/ComfyUI/issues/16971) — Detect Edges (Canny) batch VRAM and slowdown**  
   `Canny.execute` moves the whole IMAGE batch to GPU and runs one kornia call: ~134 MB VRAM per 720p frame and slower per frame as batch grows. Important for video-length batches.

8. **[#16964](https://github.com/Comfy-Org/ComfyUI/issues/16964) — Select CLIP Device still uses old offloaded model, `gpu:1` ~7x slower**  
   After moving CLIP device, the text encoder runs on the old offloaded model. Performance bug with a measurable 7x regression.

9. **[#15965](https://github.com/Comfy-Org/ComfyUI/issues/15965) — Persist execution history and output metadata across restarts**  
   With `--enable-assets` and a persistent database, generated files survive restarts but their execution history and prompt/workflow associations do not. Long-running feature request with 2 comments.

10. **[#16973](https://github.com/Comfy-Org/ComfyUI/issues/16973) — Color Transfer fails in Comfy Core but works in KJNodes ColorMatch**  
    Same target/reference inputs; core `Transfer Color` errors while the KJNodes equivalent works. Highlights a core-vs-custom-node parity gap.

## 4. Key PR Progress

1. **[#16979](https://github.com/Comfy-Org/ComfyUI/pull/16979) — Drop finished loop iterations from output cache when `cache_iterations` is off**  
   Direct fix for #16978. Prevents RAM growth in long loops by removing expanded iterations that can never be reused.

2. **[#16982](https://github.com/Comfy-Org/ComfyUI/pull/16982) — Fix tensor cache slot promotion**  
   Replaces `list.remove` with index-based removal to avoid ambiguous tensor truth-value errors when promoting a non-first matched slot; preserves LRU order.

3. **[#16927](https://github.com/Comfy-Org/ComfyUI/pull/16927) — Downscaled JPEG previews from `/view` with `res=N`**  
   Adds `res=N` for PNG/JPEG, returning a quality-85 JPEG whose longest side is at most N pixels. Useful for image grids/thumbnails without downloading full-size originals.

4. **[#16936](https://github.com/Comfy-Org/ComfyUI/pull/16936) — Catalogue models before other roots in startup asset scan**  
   Fixes the startup asset scan so the model library populates before slow input/output folder walks, instead of waiting for `assets.seed.fast_complete`.

5. **[#16934](https://github.com/Comfy-Org/ComfyUI/pull/16934) — Stop `/object_info` from rescanning the models folder**  
   Loading the UI no longer rescans models; models are scanned at startup and on explicit `POST /api/assets/seed`. Reduces startup/UI latency.

6. **[#16931](https://github.com/Comfy-Org/ComfyUI/pull/16931) — Start without assets when the DB is from a newer ComfyUI**  
   Reads the migration revision over a read-only connection and starts without assets rather than refusing to launch. Improves forward-compatibility robustness.

7. **[#16832](https://github.com/Comfy-Org/ComfyUI/pull/16832) — Recover from a corrupt `comfyui.db` at startup**  
   With `--enable-assets`, a malformed database previously blocked every launch. This adds recovery instead of requiring manual deletion.

8. **[#16983](https://github.com/Comfy-Org/ComfyUI/pull/16983) — Give each output file a version so clients can refresh rewritten files**  
   Adds a `version` string to `executed` outputs and `/history` entries that changes on mtime/size change. Enables cache-busting `/view` URLs for rewritten files.

9. **[#16898](https://github.com/Comfy-Org/ComfyUI/pull/16898) — EXR previews for assets, written by `SaveImageAdvanced`**  
   EXR files get a small JPEG/WebP preview (max one megapixel, alpha preserved as WebP) under `previews/`, since browsers cannot display EXR directly.

10. **[#16280](https://github.com/Comfy-Org/ComfyUI/pull/16280) — Fix userdata paths on another drive raising instead of returning 403**  
    On Windows, `os.path.commonpath` raises `ValueError: Paths don't have the same drive`. This handles cross-drive `/userdata` paths correctly instead of erroring.

## 5. Feature Request Trends

- **Persistence and metadata**: execution history across restarts ([#15965](https://github.com/Comfy-Org/ComfyUI/issues/15965)), output file versioning ([#16983](https://github.com/Comfy-Org/ComfyUI/pull/16983)), and optional prompt-embedding control in Save nodes ([#16932](https://github.com/Comfy-Org/ComfyUI/issues/16932)).
- **API/UI observability**: live job preview in the v2 API ([#16269](https://github.com/Comfy-Org/ComfyUI/issues/16269)), completion notification sound ([#16975](https://github.com/Comfy-Org/ComfyUI/issues/16975)), and 3D viewer initialization feedback ([#16980](https://github.com/Comfy-Org/ComfyUI/issues/16980)).
- **Prompt/input ergonomics**: DynamicPrompts on string inputs inside DynamicCombo options ([#16977](https://github.com/Comfy-Org/ComfyUI/issues/16977)) and disabling prompt embedding on save nodes ([#16932](https://github.com/Comfy-Org/ComfyUI/issues/16932)).
- **Core-node parity and gaps**: Color Transfer parity with KJNodes ([#16973](https://github.com/Comfy-Org/ComfyUI/issues/16973)) and additional resize modes for total-pixel scaling ([#16930](https://github.com/Comfy-Org/ComfyUI/pull/16930)).
- **Performance/memory controls**: loop-cache cleanup ([#16978](https://github.com/Comfy-Org/ComfyUI/issues/16978)), Canny batch VRAM ([#16971](https://github.com/Comfy-Org/ComfyUI/issues/16971)), CLIP device offload correctness ([#16964](https://github.com/Comfy-Org/ComfyUI/issues/16964)), and generation-speed regressions ([#16969](https://github.com/Comfy-Org/ComfyUI/issues/16969)).

## 6. Developer Pain Points

- **Quantization and model merging**: the long-running `weight_scale` crash ([#14382](https://github.com/Comfy-Org/ComfyUI/issues/14382)) shows quantized state-dict handling remains fragile.
- **Windows and multi-GPU instability**: hard crashes, full-PC freezes, and slow device switching ([#16443](https://github.com/Comfy-Org/ComfyUI/issues/16443), [#16946](https://github.com/Comfy-Org/ComfyUI/issues/16946), [#16964](https://github.com/Comfy-Org/ComfyUI/issues/16964)).
- **Memory growth in loops and batch nodes**: RAM exhaustion in loop workflows ([#16978](https://github.com/Comfy-Org/ComfyUI/issues/16978)) and VRAM scaling in Canny batches ([#16971](https://github.com/Comfy-Org/ComfyUI/issues/16971)).
- **Model-specific setup friction**: missing VAEs/audio encoding for MiniMax H3 ([#16917](https://github.com/Comfy-Org/ComfyUI/issues/16917), [#15862](https://github.com/Comfy-Org/ComfyUI/issues/15862)) and Qwen Image 2.1 multi-GPU crashes ([#16443](https://github.com/Comfy-Org/ComfyUI/issues/16443)).
- **Filesystem portability**: exFAT download finalization ([#16972](https://github.com/Comfy-Org/ComfyUI/issues/16972)) and cross-drive userdata paths ([#16280](https://github.com/Comfy-Org/ComfyUI/pull/16280)).
- **Assets-system churn**: many PRs toggling `--enable-assets`, scan ordering, `/object_info` rescans, and database recovery ([#16928](https://github.com/Comfy-Org/ComfyUI/pull/16928), [#16929](https://github.com/Comfy-Org/ComfyUI/pull/16929), [#16931](https://github.com/Comfy-Org/ComfyUI/pull/16931), [#16934](https://github.com/Comfy-Org/ComfyUI/pull/16934), [#16936](https://github.com/Comfy-Org/ComfyUI/pull/16936), [#16832](https://github.com/Comfy-Org/ComfyUI/pull/16832)).
- **Stale/low-quality user support**: several stale or low-signal reports remain open ([#15643](https://github.com/Comfy-Org/ComfyUI/issues/15643), [#15862](https://github.com/Comfy-Org/ComfyUI/issues/15862), [#16269](https://github.com/Comfy-Org/ComfyUI/issues/16269), [#16965](https://github.com/Comfy-Org/ComfyUI/issues/16965), [#16966](https://github.com/Comfy-Org/ComfyUI/issues/16966)).

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

Thinking Process:

1.  **Analyze the Request:**
    *   **Role:** Technical analyst focused on AI developer tools.
    *   **Source data:** GitHub data for `ollama/ollama` (specifically releases, issues, and pull requests updated/created in the last 24h relative to the simulated date `2026-10-13`).
    *   **Output format:** Structured English digest with specific sections:
        1. **Today's Highlights** (2-3 sentences summarizing the most important updates).
        2. **Releases** (Summarize changes if new versions exist, omit if none).
        3. **Hot Issues** (Pick 10 noteworthy Issues, explain why they matter and community reaction).
        4. **Key PR Progress** (Pick 10 important PRs, describe features or fixes).
        5. **Feature Request Trends** (Distill the most-requested feature directions from all Issues).
        6. **Developer Pain Points** (Summarize recurring developer frustrations or high-frequency requests).
    *   **Style:** Concise, professional, suited for technical developers, including GitHub links.

2.  **Analyze the Data (Simulated Date: 2026-10-13, looking at data updated in the last 24h):**
    *   **Latest Releases:**
        *   `v0.40.4-rc0` (v0.40.4 release candidate).
        *   Key changes mentioned in the snippet: llama.cpp updated to b11521 for decision models and EmbeddingGemma 2; server reuses verified manifests and loaded models in inference routes; mlx updates (truncated but visible in the text).
    *   **Latest Issues (Total: 24 items, top ones listed):**
        *   `#18796` [OPEN] [bug] fails to run on a 2nd 'ollama run' (RPi 5, Debian 13, stuck on second run). Comments: 19.
        *   `#12362` [OPEN] [bug, cloud] JSON reply schema is ignored by Cloud model (qwen3-coder:480b-cloud ignores schema). Comments: 16.
        *   `#18642` [OPEN] [bug] CUDA illegal memory access (MUL_MAT) on RTX 5090 with Cohere MoE architecture (Windows). Comments: 12.
        *   `#13388` [CLOSED] [bug, needs more info] v0.13.1+ Breaks Deepseek R1 671B system messages (macOS, Apple). Comments: 9.
        *   `#18846` [CLOSED] [bug, macos, mlx] Version 0.40.0 stops with "Maximum threads" error after a minute. Comments: 5, 👍: 2.
        *   `#18698` [OPEN] [feature request] Support for K2 Horizon models (architecture "k2-horizon"). Comments: 5, 👍: 6.
        *   `#18557` [OPEN] [needs more info] 0xc0000005 access violation loading ANY model on Vulkan (AMD RX 6800 XT). Comments: 5, 👍: 2.
        *   `#17341` [CLOSED] [cloud] Paid for API access but cannot access the service — no support response. Comments: 5.
        *   `#18950` [OPEN] Scheduler reloads the model when a request's `shift` differs from the loaded runner's; launch shift-capable and enforce `shift:false` per request instead. Comments: 4.
        *   `#18853` [OPEN] [cloud] [Cloud] deepseek-v4.1-flash:cloud returns 500 (Internal Server Error) for image input exceeding ~655,360 tokens. Comments: 3.
        *   `#18421` [OPEN] Qwen3-Coder tool parser changes number arguments outside int64 range. Comments: 3.
        *   `#18712` [OPEN] Windows auto-update can leave cuda_v12\ggml-cuda.dll as .tmp, causing 0 B VRAM / CPU fallback. Comments: 3.
        *   `#18952` [OPEN] [feature request] Systemprompt KV cache warm-up for Ollama. Comments: 2.
        *   `#18856` [CLOSED] [bug, mlx] MLX runner panic with qwen3.6:35b-mlx in Ollama 0.40.x — regression from 0.35.0. Comments: 2, 👍: 4.
        *   `#18954` [OPEN] Windows: GPU discovery subprocesses can flash console windows. Comments: 2.
        *   `#18921` [OPEN] [bug] Windows: `ollama list` returns empty when Model location is an NTFS mount point path. Comments: 2.
        *   `#18521` [CLOSED] [model] Support Prism ternary GGUFs (PQ2_0 type 142 / PTQ1_0 type 143): import fails with unsupported tensor size overflows. Comments: 2, 👍: 11.
        *   `#18926` [OPEN] [bug] [Cloud] glm-5.3-flash / glm-5.3 hang the client on exit — stream never terminates. Comments: 2.
        *   `#18958` [OPEN] [feature request] The size issue (1.5gb)?? (Suggests separating apps/plugins/desktop/cli/api). Comments: 1.
        *   `#18620` [CLOSED] MLX runner: each request that ends in a tool call leaks ~0.43 GiB (three recurrent snapshots) outside the prefix-cache budget. Comments: 1.
        *   `#18885` [OPEN] [bug, mlx] mlx runner failed: panic: mlx (gemma4:e2b-mlx on Mac mini m6). Comments: 1.
        *   `#18869` [CLOSED] [bug] ffn_down_exps.weight size overflows (gpt-oss:latest). Comments: 1.
        *   `#18966` [OPEN] [bug] panic: mlx: Maximum threads per threadgroup is 896 but requested 960... Comments: 0.
        *   `#18940` [CLOSED] [bug, mlx] [macOS/Metal] MLX SDPA kernel panic on M2 Max... Comments: 0.

    *   **Latest Pull Requests (Total: 32 items, top 20 shown):**
        *   `#18963` [CLOSED] docs: update SECURITY.md (Directs users to Github advisories instead of hello email).
        *   `#18967` [OPEN] llama: add prism model support 0f8e8d.
        *   `#18962` [OPEN] cli: add decision model support to `ollama run`.
        *   `#18965` [OPEN] model/parsers: process cohere block markers in order (fixes tool call parsing issues).
        *   `#17195` [OPEN] fix(glm-ocr): register  as EOT for legacy glmocr GGUFs.
        *   `#18964` [OPEN] openai: rate prompt timings by evaluated tokens (fixes cache timing division issues).
        *   `#18961` [OPEN] model/parsers: preserve content between functiongemma calls.
        *   `#18957` [OPEN] docs: update README to include cloud and privacy language.
        *   `#17570` [OPEN] fix(gemma4): trim channel-boundary whitespace independent of chunk boundaries.
        *   `#17615` [OPEN] fix(llm): mirror GraphSize KV accounting in PredictServerVRAM.
        *   `#18960` [CLOSED] Revert "docs: restructuring".
        *   `#18959` [OPEN] README: add omnexx to community integrations (terminal coding agent).
        *   `#18828` [CLOSED] docs: restructuring (Local/Cloud split).
        *   `#18956` [CLOSED] MLX, MLX-C: version bump.
        *   `#18887` [CLOSED] launch: include installed models in Codex /model picker.
        *   `#17992` [OPEN] launch: add Atomic Agent integration.
        *   `#18805` [CLOSED] mlx: compact restored recurrent state after speculative rollback.
        *   `#18955` [CLOSED] mlx: compact restored recurrent state after speculative rollback (replacing #18805).
        *   `#9379` [CLOSED] server: validate local path on safetensor create.
        *   `#18951` [OPEN] app/updater: keep earlier upgrade logs on Windows (fixes log overwriting issue related to #18712).

3.  **Drafting Section by Section:**

    *   **Section 1: Today's Highlights**
        *   Needs 2-3 sentences summarizing the most important updates.
        *   Key events: Release of `v0.40.4-rc0` bringing critical updates like llama.cpp integration for decision models, server manifest reuse, and various parser fixes (Cohere, FunctionGemma). Significant community focus on cloud model schema adherence, CUDA backend crashes on RTX 5090, and MLX kernel thread limit panics.
        *   *Drafting:* Ollama released `v0.40.4-rc0`, focusing on core stability with server manifest reuse, llama.cpp updates for decision models, and critical parser fixes for Cohere and FunctionGemma. The community is heavily tracking backend stability, particularly CUDA crashes on RTX 5090 GPUs and recurring MLX threadgroup limit panics on Apple Silicon. Additionally, cloud integration issues, such as schema adherence failures and stream termination hangs, remain hot topics.

    *   **Section 2: Releases**
        *   Release: `v0.40.4-rc0` (v0.40.4).
        *   Summarize changes:
            *   llama.cpp updated to b11521 for decision models and EmbeddingGemma 2 support.
            *   Server reuses verified manifests and loaded models in inference routes for improved efficiency.
            *   MLX backend updates and fixes (including compact restored recurrent state after speculative rollback).
            *   CLI and model parser improvements (decision model support, Cohere block marker ordering, FunctionGemma content preservation).

    *   **Section 3: Hot Issues (Pick 10 noteworthy Issues, explain why they matter and community reaction)**
        *   Let's select the 10 most impactful/interesting ones from the list:
            1.  `#18796` [OPEN] [bug] fails to run on a 2nd 'ollama run' (RPi 5, Debian 13). *Why it matters:* Blocks basic CLI usage on popular single-board computers after initial model pull. High comment count (19) indicates active troubleshooting.
            2.  `#12362` [OPEN] [bug, cloud] JSON reply schema is ignored by Cloud model. *Why it matters:* Breaks structured output workflows for cloud API users utilizing JSON schema marshalling. 16 comments show significant developer friction when migrating local to cloud.
            3.  `#18642` [OPEN] [bug] CUDA illegal memory access (MUL_MAT) on RTX 5090 with Cohere MoE architecture (Windows). *Why it matters:* Critical crash on high-end consumer hardware (RTX 5090) running MoE models, blocking Windows local inference.
            4.  `#18698` [OPEN] [feature request] Support for K2 Horizon models (architecture "k2-horizon"). *Why it matters:* Highly requested (6 👍) model architecture support from MBZUAI IFM, showing community demand for cutting-edge architectures.
            5.  `#18950` [OPEN] Scheduler reloads the model when a request's `shift` differs from the loaded runner's. *Why it matters:* Core scheduler inefficiency causing unnecessary model reloading, impacting latency and resource usage in high-throughput scenarios.
            6.  `#18712` [OPEN] Windows auto-update can leave cuda_v12\ggml-cuda.dll as .tmp, causing 0 B VRAM / CPU fallback. *Why it matters:* Silent performance degradation on Windows where GPU acceleration drops without clear logs unless upgrade logs are kept (partially addressed in PR #18951).
            7.  `#18846` [CLOSED] [bug, macos, mlx] Version 0.40.0 stops with "Maximum threads" error after a minute (gemma/qwen). *Why it matters:* Regression in MLX backend causing crashes on Macs after short inference runs (2 👍).
            8.  `#18521` [CLOSED] [model] Support Prism ternary GGUFs (PQ2_0 type 142 / PTQ1_0 type 143). *Why it matters:* High community interest (11 👍) for importing highly compressed ternary models (27B in 6.7 GiB).
            9.  `#18853` [OPEN] [cloud] deepseek-v4.1-flash:cloud returns 500 for image inputs exceeding token limits. *Why it matters:* Restricts multimodal workflows on Ollama Cloud, throwing hard 500 errors under specific token thresholds.
            10. `#18926` [OPEN] [cloud] glm-5.3-flash / glm-5.3 hang the client on exit — stream never terminates. *Why it matters:* Breaks agent integrations (like Hermes Agent) by keeping subprocesses alive indefinitely after task completion.

    *   **Section 4: Key PR Progress (Pick 10 important PRs, describe features or fixes)**
        *   Let's select 10 key PRs:
            1.  `#18967` llama: add prism model support. *Fix/Feature:* Adds support for the Prism model architecture, addressing the ternary GGUF import issues.
            2.  `#18962` cli: add decision model support to `ollama run`. *Fix/Feature:* Extends CLI execution to support decision models.
            3.  `#18965` model/parsers: process cohere block markers in order. *Fix:* Fixes tool call parsing bug where Cohere parser skips tool calls if text blocks arrive in the same chunk as action blocks.
            4.  `#18961` model/parsers: preserve content between functiongemma calls. *Fix:* Prevents loss of assistant text between tool calls in FunctionGemma models.
            5.  `#18964` openai: rate prompt timings by evaluated tokens. *Fix:* Corrects prompt timing metrics (`prompt_per_second`) by dividing by evaluated tokens rather than total prompt count, fixing warm cache inflation.
            6.  `#17615` fix(llm): mirror GraphSize KV accounting in PredictServerVRAM. *Fix:* Aligns Go-side VRAM prediction with actual KV cache usage, preventing scheduler OOM issues.
            7.  `#17570` fix(gemma4): trim channel-boundary whitespace independent of chunk boundaries. *Fix:* Resolves markup translation and thinking abortion issues in Gemma 4.
            8.  `#18951` app/updater: keep earlier upgrade logs on Windows. *Fix:* Preserves Inno Setup upgrade logs to help diagnose broken installs (e.g., leftover `.tmp` CUDA files).
            9.  `#17195` fix(glm-ocr): register  as EOT for legacy glmocr GGUFs. *Fix:* Stops runaway text generation in legacy `glm-ocr` models by setting the correct end-of-generation token.
            10. `#17992` launch: add Atomic Agent integration. *Feature:* Expands the `ollama launch` toolchain support to the local-first Atomic Agent framework.

    *   **Section 5: Feature Request Trends**
        *   Distill the most-requested feature directions from the issues:
            *   **New Model Architecture Support:** High demand for specific architectures like K2 Horizon (`#18698`), Prism ternary GGUFs (`#18521`), and decision models.
            *   **Performance Optimizations & Caching:** Requests for system prompt KV cache warm-up (`#18952`) to eliminate cold-start latency, and scheduler optimizations to avoid redundant model reloading (`#18950`).
            *   **Modularization / App Separation:** User requests to split the massive 1.5GB Ollama package into modular components (desktop, CLI, API, plugins) to save bandwidth and storage (`#18958`).
            *   **Cloud Reliability & Structured Outputs:** Strong feedback around cloud-specific features, primarily reliable JSON schema adherence (`#12362`) and robust handling of large multimodal inputs (`#18853`).

    *   **Section 6: Developer Pain Points**
        *   Summarize recurring developer frustrations or high-frequency requests:
            *   **Backend Crashes and Hardware Incompatibilities:** Recurring driver-level crashes on Windows (CUDA illegal access on RTX 5090, Vulkan access violations on AMD) and macOS (MLX threadgroup limit panics on M1/M2/M3 chips).
            *   **Silent Performance Degradation:** Frustrating bugs like Windows auto-updates leaving CUDA DLLs as `.tmp` files, causing silent fallback to CPU (0 B VRAM) without obvious immediate logs.


</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

Thinking Process:

1.  **Analyze the Request:**
    *   **Topic:** llama.cpp community digest for 2026-10-13.
    *   **Source:** Provided GitHub data (commits/releases, issues, PRs).
    *   **Sections required:**
        1.  *Today's Highlights* - 2-3 sentences summarizing the most important updates.
        2.  *Releases* - Summarize changes if new versions exist (looking at the "Latest Releases (last 24h)" section: b11576 down to b11565). Let's call these "Recent Commits/Releases" if they are individual commits labeled as releases in the data, but the prompt says "Latest Releases (last 24h)" with b11576 to b11565. I will summarize them as releases/commits.
        3.  *Hot Issues* - Pick 10 noteworthy Issues, explain why they matter and community reaction (with links).
        4.  *Key PR Progress* - Pick 10 important PRs, describe features or fixes (with links).
        5.  *Feature Request Trends* - Distill the most-requested feature directions from all Issues.
        6.  *Developer Pain Points* - Summarize recurring developer frustrations or high-frequency requests.
    *   **Style:** Concise and professional, suited for technical developers. Include GitHub links.

2.  **Analyze the Data:**

    *   **Latest Releases (last 24h):**
        *   b11576: graph: pad the KV dimension of the no-cache attention to 256 (#30416) - Fixes CUDA kernels for head size 512 (e.g. EmbeddingGemma 2) falling back to CPU.
        *   b11575: metal: fix metal tensor kernel_mul_mm error for large tensor (#28748) - Fix for large tensors on Metal.
        *   b11574: hexagon: optimize CPY/CONCAT — round 3, short-rows edition (#30341) - Hexagon optimizations.
        *   b11573: vulkan: pack FMA for f16 accumulation, no dot product op (#29877) - Vulkan optimization.
        *   b11572: model: support vllm d3 models (#30383) - Support for pplx-decider / vllm d3 models.
        *   b11571: model: support vllm decision 2 model (#30378) - Support for vllm d2 models.
        *   b11570: tests : link each test against only the libraries it uses (#30299) - Build system/test optimization.
        *   b11569: metal : fix mul_mat_id with duplicate ids (#30373) - Fixes expert mixing issues on Metal.
        *   b11567: llama : report compute graph reallocations during inference (#30329) - Added backend scheduling callback.
        *   b11565: sycl: guard DMMV reads at row tails (#29338) - SYCL optimization/safety.

    *   **Latest Issues (updated in last 24h)(Total: 50 items; showing top 30 by comment count):**
        *   #19466 [CLOSED] [enhancement, stale, server] Saving KV cache does not work for vision-enabled models (Comments: 46, 👍: 7) - Major issue for multi-modal.
        *   #25618 [OPEN] [bug-unconfirmed] Eval bug: Speculative decoding (draft-mtp / draft-dspark): greedy output diverges from vanilla on quantized targets (Comments: 30, 👍: 3) - Core logic bug in speculative decoding.
        *   #27428 [OPEN] [bug-unconfirmed] eval bug: draft-mtp roughly halves prompt processing on multi-GPU layer split (Comments: 26, 👍: 3) - Performance regression in multi-GPU setups.
        *   #23704 [OPEN] [enhancement, stale] Feature Request: server in Router Mode: Multiple presets for the same model (loaded once) (Comments: 17, 👍: 7) - Highly requested server feature.
        *   #29949 [OPEN] [enhancement] Feature Request: MoE expert cache with GPU-resident LRU (Comments: 13, 👍: 1) - Performance optimization for MoE.
        *   #27638 [OPEN] [bug-unconfirmed] [Vulkan/ANV] Flash Attention fallback to SCALAR path causes O(N²) PP degradation (Comments: 11, 👍: 0) - Severe performance issue on Intel Arc.
        *   #27546 [OPEN] [bug-unconfirmed] OpenVINO on i5 1345u GPU throws exception (Comments: 10, 👍: 0).
        *   #24440 [OPEN] [bug] llama server crashes after editing system message when using Gemma 4 31B with MTP (Comments: 10, 👍: 2).
        *   #29419 [OPEN] [bug-unconfirmed] [speculative/mtp] Flash-Attention crash in gemma4-assistant: Query head dimension mismatch (Comments: 10, 👍: 0).
        *   #27330 [OPEN] Eval bug: CUDA graphs hang the GPU channel on RTX 5090 Laptop / sm_120 (Comments: 10, 👍: 7) - Critical bug for latest RTX 5090 owners.
        *   #22531 [OPEN] [enhancement, stale] Feature Request: allow the web UI to be used with other backends (Comments: 10, 👍: 12).
        *   #24460 [OPEN] [bug] llama-convert-hf-to-gguf.py fails with: AttributeError (Comments: 8, 👍: 0).
        *   #27109 [CLOSED] [stale] CUDA: 4-bit KV cache collapses prefill to ~34 t/s (Comments: 8).
        *   #23444 [CLOSED] [enhancement] Feature: Thinking Controls in the UI (Comments: 7).
        *   #21723 [OPEN] [enhancement, Vulkan, stale] Refactor: Split up ggml-vulkan.cpp (Comments: 7).
        *   #30010 [OPEN] [bug-unconfirmed] Eval bug: decode() failed: vk::Queue::submit: ErrorDeviceLost (Comments: 6).
        *   #26321 [OPEN] [bug-unconfirmed, stale] Eval bug: Reasoning button is gone (Comments: 6).
        *   #27845 [CLOSED] [bug-unconfirmed, stale] potential memory leak with `-sm tensor` on dual Intel B70 SYCL (Comments: 6).
        *   #29418 [OPEN] [bug-unconfirmed] [Vulkan] GGML_ASSERT(neq0 == HSK) failed in speculative draft decoding (Comments: 5).
        *   #30175 [OPEN] [bug-unconfirmed] Eval bug: Nondeterministic FA prefill with Qwen 3.5 9B on RDNA3 (Comments: 4).
        *   #29821 [OPEN] vulkan: MUL_MAT_ID loses rows when an expert id appears more than once (Comments: 4).
        *   #27557 [OPEN] HIP/gfx1151: SOLVE_TRI aborts with rocBLAS 'hipErrorInvalidImage' (Comments: 4).
        *   #27148 [OPEN] server: RAM-backed prompt cache restores content from unrelated conversation (Comments: 4) - Security/correctness bug.
        *   #30000 [CLOSED] Eval bug: Vulkan prompt processing slower for Q8_0 on RTX 5060 Ti (Comments: 4).
        *   #29975 [CLOSED] Eval bug: llama-speculative changes the distribution at temp > 0 (Comments: 3).
        *   #30364 [OPEN] [bug-unconfirmed] Eval bug: Vulkan: MiniMax-M2 prompt processing collapses at long context on Strix Halo (Comments: 2).
        *   #30018 [OPEN] gemma4 : decode -5% since #29622 (Comments: 2).
        *   #28249 [OPEN] [stale] wiring up jinja input marking (Comments: 2).
        *   #29849 [CLOSED] Misc. bug: Homebrew's llama.cpp 0.5.0 has no web UI (Comments: 2).
        *   #27972 [OPEN] Eval bug: llama-server returns logprob 0.0 for every token when speculative decoding is enabled (Comments: 2).

    *   **Latest Pull Requests (updated in last 24h)(Total: 50 items; showing top 20 by comment count):**
        *   #29881 [OPEN] tests: add Q8_0 N=1 range coverage
        *   #30122 [OPEN] hexagon: add support for Q1_0
        *   #29882 [OPEN] vulkan: rms norm optimization using subgroup reductions
        *   #30415 [OPEN] ggml-rpc : fail gracefully on unreachable endpoints and failed handshakes
        *   #29910 [OPEN] ggml-cuda: fix a mountain of VGPR spills on Q2_K
        *   #30255 [OPEN] llama : skip logits buffer allocation when graph produces no logits
        *   #30420 [OPEN] ggml, CUDA : cuda : warnings cleanup
        *   #30397 [OPEN] model: Allow Qwen3.8 Flash Next to accept image embds for MTP
        *   #30416 [CLOSED] model: graph: pad the KV dimension of the no-cache attention to 256 (Note: this matches the commit b11576)
        *   #30421 [OPEN] ggml, OpenCL: opencl: fix OOB tail access for adreno noshuffle gemv kernels
        *   #30418 [OPEN] ggml, OpenCL: opencl: use buf+offset instead of subbuffer for adreno moe expert sort
        *   #30401 [OPEN] devops: fix OpenVINO download links in release notes
        *   #30417 [OPEN] common : add fs::path arg handler, fix --log-file on Windows
        *   #30414 [OPEN] ggml, OpenCL: opencl: admit K = 256 weights to the Adreno kernels
        *   #30413 [OPEN] ggml, OpenCL: opencl: read each weight row once in the small-N f32/f16 GEMV
        *   #30412 [OPEN] ggml, OpenCL: opencl: run the tiled q4_K lm_head through a tiled GEMM at batch > 1
        *   #30324 [OPEN] devops: build OpenVINO releases with GGML_NATIVE=OFF and CPU backend variants
        *   #30047 [OPEN] ggml, Apple Metal: metal : few-row MMA kernels for MUL_MAT_ID and more src0 types
        *   #30072 [OPEN] ggml, Apple Metal: metal : stop overflow from happening in large matrix output offsets
        *   #30411 [OPEN] examples, ggml, CUDA: llama : cross-process weight sharing for model tensors (--share-ipc)

3.  **Drafting Sections based on Data Analysis:**

    *   **Today's Highlights (2-3 sentences summarizing the most important updates):**
        *   Focus on the major themes: robust backend improvements (Vulkan, Metal, CUDA, OpenCL, Hexagon), key model support expansions (vllm d2/d3, Qwen3.8 Flash Next MTP), and critical bug fixes like the KV padding for no-cache attention and the CUDA graph hang on RTX 5090. Let's write a concise summary reflecting the high pace of backend hardening and multi-modal/speculative decoding alignment.

    *   **Releases (Commits/Releases in the last 24h):**
        *   List the key commits/releases from b11576 to b11565 with brief technical summaries:
            *   **b11576**: Pads KV dimension of no-cache attention to 256, resolving silent CPU fallbacks for CUDA models like EmbeddingGemma 2 with head size 512.
            *   **b11575**: Fixes Metal `kernel_mul_mm` errors for large tensors.
            *   **b11574 (Round 3 of Hexagon CPY/CONCAT)**: Optimizes short-rows DMA latency on Hexagon.
            *   **b11573**: Vulkan f16 accumulation packing optimization without dot product ops.
            *   **b11572 / b11571**: Adds support for vllm d3 (pplx-decider) and vllm decision 2 models.
            *   **b11570**: Optimizes test build linking (linking only required libraries).
            *   **b11569**: Fixes Metal `mul_mat_id` with duplicate ids, crucial for MoE models.
            *   **b11567**: Adds compute graph reallocation reporting during inference.
            *   **b11565**: Guards DMMV reads at row tails for SYCL.

    *   **Hot Issues (Pick 10 noteworthy Issues, explain why they matter and community reaction):**
        *   Let's pick the most impactful ones based on comment count, likes, and technical significance:
            1.  **#19466 (46 comments, 7 👍)**: Saving KV cache fails for vision-enabled models. Critical limitation for multi-modal deployment.
            2.  **#25618 (30 comments, 3 👍)**: Speculative decoding greedy output diverges from vanilla on quantized targets. Core correctness issue for MTP users.
            3.  **#27428 (26 comments, 3 👍)**: draft-mtp roughly halves prompt processing on multi-GPU layer split. Critical multi-GPU performance regression.
            4.  **#27330 (10 comments, 7 👍)**: CUDA graphs hang the GPU channel (RC watchdog + Xid 8) on RTX 5090 Laptop / sm_120. Critical for next-gen hardware support (with `GGML_CUDA_DISABLE_GRAPHS=1` workaround).
            5.  **#23704 (17 comments, 7 👍)**: Server Router Mode: Multiple presets for the same model loaded once. Highly requested configuration flexibility.
            6.  **#27638 (11 comments)**: Flash Attention fallback to scalar path causes O(N²) PP degradation on Intel Arc (Vulkan). Severe performance bottleneck on ANV graphics.
            7.  **#24440 (10 comments, 2 👍)**: Server crashes after editing system message with Gemma 4 31B with MTP and `-sm tensor`. Hard crash on specific configs.
            8.  **#22531 (10 comments, 12 👍)**: Web UI compatibility with other backends. High community interest (12 thumbs up).
            9.  **#27148 (4 comments)**: RAM-backed prompt cache restores content from unrelated conversations under concurrent load. Critical data isolation / safety bug.
            10. **#29821 (4 comments)**: Vulkan `MUL_MAT_ID` loses rows when an expert id appears more than once in a token's row and n > 8. Core correctness bug for MoE models on Vulkan.
        *   Ensure links are formatted properly: `https://github.com/ggml-org/llama.cpp/issues/<ID>` (the data says `ggml-org/llama.cpp Issue #XXXX`). Let's use standard URL format: `https://github.com/ggml-org/llama.cpp/issues/XXXX`.

    *   **Key PR Progress (Pick 10 important PRs, describe features or fixes):**
        *   Select 10 prominent PRs representing active development areas (OpenCL/Adreno, Metal, CUDA, RPC, system features):
            1.  **#30416**: Graph KV dimension padding for no-cache attention (fixes CPU fallback for CUDA EmbeddingGemma).
            2.  **#30411**: Cross-process weight sharing for model tensors (`--share-ipc`). Great for memory efficiency in multi-process setups.
            3.  **#30415**: `ggml-rpc` fail gracefully on unreachable endpoints and failed handshakes (crucial robustness fix for distributed/Android RPC).
            4.  **#30122**: Hexagon: add support for Q1_0 (expanding CPU/Hexagon quantization coverage).
            5.  **#29910**: ggml-cuda: fix VGPR spills on Q2_K (vital performance optimization for AMD / low-end CUDA).
            6.  **#30255**: Skip logits buffer allocation when graph produces no logits (memory saving for embedding/reranking models like bge-m3).
            7.  **#30047**: Metal few-row MMA kernels for `MUL_MAT_ID` (Apple Silicon performance boost).
            8.  **#30072**: Metal: stop overflow in large matrix output offsets (64-bit arithmetic safety fix).
            9.  **#30412 / #30413 / #3

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*