# AI CLI Tools Community Digest 2026-09-30

> Generated: 2026-09-29 22:16 UTC | Tools covered: 12

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



Here is a concise summary of the most important updates across all tracked AI developer tools for today:

1. **Claude Code v2.1.285** — Added a WebFetch kill switch via the `CLAUDE_CODE_DISABLE_WEB_FETCH` environment variable, a `claude --desktop` launcher to open the desktop app on the current directory, and a `claude plugin configure <plugin>` command. [Read more](https://github.com/anthropics/claude-code)

2. **OpenAI Codex v0.159.1** — Made GPT-6.1 Sol the default model in the bundled catalog and Amazon Bedrock Mantle/Runtime catalogs, and improved Windows sandbox behavior to reduce console flashing during startup. [Read more](https://github.com/openai/codex)

3. **Pi v0.99.0 & v0.99.1** — Introduced Codemode and MCP support, allowing models to run JavaScript that calls tools in parallel, and added GPT-6.1 Sol across OpenAI, Azure OpenAI, and OpenAI Codex as the default Codex model. [Read more](https://github.com/earendil-works/pi)

4. **ComfyUI v0.38.0** — Focused on Qwen 2.1 performance with improved KV cache location logic, compiled Qwen Image 2.1 transformer blocks, and support for model files declaring which attention implementation to use. [Read more](https://github.com/Comfy-Org/ComfyUI)

5. **Ollama v0.35.1-rc0** — Limited web searches to ten per response, bumped MLX and `llama.cpp` versions, and advanced System One model support with explicit capability declarations. [Read more](https://github.com/ollama/ollama)

6. **llama.cpp nightly b11249–b11262** — Delivered AVX512-FP16 dot products accumulating in F32, correct graph input collection for pipeline parallelism, and FP32 GELU_ERF/GEGLU_ERF support on Hexagon. [Read more](https://github.com/ggml-org/llama.cpp)

7. **Gemini CLI v0.63.0-preview.0, v0.63.0-nightly, and v0.62.0** — Added a retry progress indicator during connection recovery, fixed an infinite auth loop caused by file contention, and hardened the A2A server against unsupported stores. [Read more](https://github.com/google-gemini/gemini-cli)

8. **GitHub Copilot CLI v1.0.90-1 to v1.0.90-5** — Fixed "No supported model available" errors when a configured provider already supplies a model, improved MCP OAuth sign-in and tool-call reliability, and added `--mcp-github-auth` to scope GitHub account auth to approved MCP server origins. [Read more](https://github.com/github/copilot-cli)

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights  
*Report date: 2026‑09‑30 | Repository: github.com/anthropics/skills*

---

## 1. Top Skills Ranking (Most-Watched PRs)

The PRs below are the top entries from the repository’s attention-sorted list. (The exported data did not include exact PR comment counts, so ranking is based on the repository’s “most-watched” ordering.)

| # | Skill / PR | What it does | Status & discussion |
|---|-----------|--------------|---------------------|
| 1 | **skill-creator trigger-eval fixes** — [PR #1298](https://github.com/anthropics/skills/pull/1298) | Hardens `skill-creator` evaluation by isolating trigger evals per worker, fixing `select()` on Windows subprocess pipes, and preventing unrelated tools from stopping scans. | **Open**; focused on cross-platform reliability and accurate negative-example scoring. |
| 2 | **mcp-builder v2 compatibility** — [PR #1742](https://github.com/anthropics/skills/pull/1742) | Adapts `mcp-builder` to MCP ≥2.0: renames `streamablehttp_client` → `streamable_http_client` and wires custom headers through the new `create_mcp_http_client` / `http_client` path. | **Open**; keeps the skill aligned with a breaking upstream MCP release. |
| 3 | **proofcore-contract-auditor** — [PR #1771](https://github.com/anthropics/skills/pull/1771) | An Agent Skill for Web3 devs that runs static analysis on Solidity and Rust smart contracts and anchors cryptographic audit proofs on the TON Blockchain via ProofCore. | **Open**; brings on-chain verifiability into the Claude Code workflow. |
| 4 | **md2video-audio** — [PR #1703](https://github.com/anthropics/skills/pull/1703) | Converts Markdown documents into presentation slides (via Marp) and then into professional MP4 videos with realistic voiceovers — described as a “zero-cost” content pipeline. | **Open**; targets documentation-to-video automation. |
| 5 | **Orphaned DOCX comments detection** — [PR #1734](https://github.com/anthropics/skills/pull/1734) | Adds detection of orphaned comments in Word documents, improving DOCX hygiene. | **Open**; narrow but high-impact document-quality fix. |
| 6 | **DOCX / LibreOffice timeout handling** — [PR #1792](https://github.com/anthropics/skills/pull/1792) | Updates `accept_changes.py` to report `soffice` timeouts as errors and only succeeds after verifying no revision marks remain in the output DOCX. | **Open**; closes a silent-failure path in document workflows. |
| 7 | **notion-spec-to-implementation + quantitative-resume-auditor** — [PR #1245](https://github.com/anthropics/skills/pull/1245) | Two skills: one turns product/tech specs into concrete Notion implementation tasks, the other audits résumés quantitatively. | **Open**; bridges PM/spec work and candidate screening. |
| 8 | **pyxel retro game dev** — [PR #525](https://github.com/anthropics/skills/pull/525) | Guides creating, debugging, and verifying retro games in Python with the Pyxel engine, including headless input-driven runs and frame inspection. | **Open**; a creative/learning skill with strong niche appeal. |

---

## 2. Community Demand Trends (from Issues)

The most-anticipated directions for new or improved Skills cluster around five themes:

| Theme | Why the community cares | Representative Issues |
|-------|------------------------|----------------------|
| **Trust, provenance & governance** | Fear of namespace impersonation and a desire for audit/governance patterns. | [#492](https://github.com/anthropics/skills/issues/492) community skills under `anthropic/` namespace; [#412](https://github.com/anthropics/skills/issues/412) agent-governance skill proposal |
| **Organization-wide sharing & deployment** | Users want shared skill libraries, fewer manual uploads, and Bedrock/enterprise integration. | [#228](https://github.com/anthropics/skills/issues/228) org-wide sharing; [#189](https://github.com/anthropics/skills/issues/189) duplicate `document-skills`/`example-skills`; [#29](https://github.com/anthropics/skills/issues/29) Bedrock usage |
| **Evaluation, testing & quality gates** | Heavy demand for skills that trigger correctly, benchmark cleanly, and review code quality. | [#556](https://github.com/anthropics/skills/issues/556) `run_eval.py` 0% trigger rate; [#1383](https://github.com/anthropics/skills/issues/1383) skill-creator benchmark failures; [#1390](https://github.com/anthropics/skills/issues/1390) mcp-builder evaluation; [#1394](https://github.com/anthropics/skills/issues/1394) eval-viewer XSS; [#1385](https://github.com/anthropics/skills/issues/1385) reasoning quality gate proposal |
| **Context & token efficiency** | Skills that shrink memory footprints and avoid duplicate or oversized skill content. | [#1487](https://github.com/anthropics/skills/issues/1487) `claude-api` 156k token injection; [#1329](https://github.com/anthropics/skills/issues/1329) compact-memory symbolic notation |
| **Domain-specific creation & media** | Strong interest in document, video, game, and Web3 skills that produce artifacts directly. | Document fixes above; [#1703](https://github.com/anthropics/skills/pull/1703) md2video-audio; [#525](https://github.com/anthropics/skills/pull/525) pyxel; [#1771](https://github.com/anthropics/skills/pull/1771) proofcore; [#514](https://github.com/anthropics/skills/pull/514) document-typography |

---

## 3. High-Potential Pending Skills

These open PRs are near the top of the attention list and appear likely to land once reviewed:

- **PR #1298** — [skill-creator eval isolation & Windows/runtime fixes](https://github.com/anthropics/skills/pull/1298)
- **PR #1742** — [mcp-builder MCP ≥2 `streamable_http_client` support](https://github.com/anthropics/skills/pull/1742)
- **PR #1771** — [proofcore-contract-auditor for smart-contract notarization](https://github.com/anthropics/skills/pull/1771)
- **PR #1703** — [md2video-audio Markdown-to-MP4 skill](https://github.com/anthropics/skills/pull/1703)
- **PR #1792** — [DOCX LibreOffice timeout reporting & output verification](https://github.com/anthropics/skills/pull/1792)
- **PR #1245** — [Notion spec-to-implementation + quantitative résumé auditor](https://github.com/anthropics/skills/pull/1245)
- **PR #525** — [pyxel retro game development skill](https://github.com/anthropics/skills/pull/525)
- **PR #1681** — [skill-creator `package_skill.py` standalone execution fix](https://github.com/anthropics/skills/pull/1681)

---

## 4. Skills Ecosystem Insight

The community’s most concentrated demand is for **trustworthy, evaluable, and shareable skills**—spanning namespace security, organization-wide distribution, reliable skill-creation tooling, and context-efficient execution—while simultaneously pushing a wave of domain-specific content skills spanning documents, media, games, and Web3.

---

# Claude Code Community Digest — 2026-09-30

Source: [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)

## 1. Today's Highlights
Claude Code shipped **v2.1.285**, adding a WebFetch kill switch, a `claude --desktop` launcher, and a new plugin configuration command. Issue activity remains dominated by safety-filter false positives, permission/sandbox reliability bugs, and closed `needs-info` / `needs-repro` reports, while PR work focuses heavily on **sec-default** managed security semantics, mod/plugin governance, CI hardening, and diff-pane behavior.

## 2. Releases

### v2.1.285
- Added `CLAUDE_CODE_DISABLE_WEB_FETCH` environment variable to disable the WebFetch tool.
- Added `claude --desktop` to open the Claude desktop app on the current directory, or on a session with `--continue` / `--resume <id>`.
- Added `claude plugin configure <plugin>` to show a p… *(release note appears truncated in the provided data).*

## 3. Hot Issues

1. **[#77482 — GitHub push permission (403) in Claude Code Remote session](https://github.com/anthropics/claude-code/issues/77482)** `OPEN` `area:cowork` `platform:web` `stale`  
   Remote/cowork sessions remain read-only despite the repo being added as a source. This blocks collaborative push workflows. **Reaction:** 4 comments, 1 👍, still open and stale.

2. **[#75523 — Desktop: expose a persistent “keep sidebar open” setting](https://github.com/anthropics/claude-code/issues/75523)** `OPEN` `enhancement` `area:ui` `area:desktop` `stale`  
   The pinned state via `Ctrl+B` is undiscoverable and undocumented; users want a persistent setting. **Reaction:** 4 comments, 5 👍 — the clearest desktop UX request in this batch.

3. **[#80214 — sandbox filesystem: allowRead re-bind shadowed by later `--tmpfs` on parent path](https://github.com/anthropics/claude-code/issues/80214)** `OPEN` `bug` `stale` `reproduced`  
   Sandbox permission correctness issue: a later tmpfs mount can override an earlier `allowRead` re-bind. **Reaction:** 3 comments, reproduced label; security/sandbox correctness concern.

4. **[#79424 — `.worktreeinclude` leading `**/` silently matches nothing](https://github.com/anthropics/claude-code/issues/79424)** `OPEN` `bug` `has repro` `area:core` `reproduced`  
   Gitignored files expected in a new worktree are silently skipped, with no warning. **Reaction:** 2 comments, 1 👍; has reproduction.

5. **[#96160 — Content filtering blocking normal work prompts](https://github.com/anthropics/claude-code/issues/96160)** `CLOSED` `area:model` `needs-info`  
   User reports normal work prompts repeatedly flagged by content filtering. **Reaction:** 1 comment, 0 👍; closed as `needs-info`, but representative of a broader filter-false-positive trend.

6. **[#96102 — Non-Haiku models (Opus, Sonnet) unavailable or misconfigured](https://github.com/anthropics/claude-code/issues/96102)** `CLOSED` `area:model` `needs-info`  
   Model availability issue where only Haiku was usable. **Reaction:** 1 comment, 0 👍; closed as `needs-info`.

7. **[#96077 — Auto mode classifier timeout fails closed and blocks tool calls](https://github.com/anthropics/claude-code/issues/96077)** `CLOSED` `area:permissions` `needs-info`  
   Explicit allow rules are bypassed when the auto-mode classifier times out, blocking tool calls. **Reaction:** 1 comment, 0 👍; important permissions reliability issue.

8. **[#96142 — Agent spawning restriction not enforced, causing unauthorized fork and excessive API usage](https://github.com/anthropics/claude-code/issues/96142)** `CLOSED` `area:cost` `area:agents` `area:permissions` `needs-repro`  
   A subagent forbidden from spawning agents reportedly forked itself and burned significant quota. **Reaction:** 1 comment, 0 👍; highlights agent guardrail and cost-control gaps.

9. **[#96031 — Claude invents file content instead of reading it](https://github.com/anthropics/claude-code/issues/96031)** `CLOSED` `area:tools` `area:model` `needs-repro`  
   Tool-trust complaint: model allegedly fabricated file contents instead of reading them. **Reaction:** 1 comment, 0 👍; part of a cluster including excessive API overhead and formatting failures.

10. **[#88614 — [Bug][cyber] Blocked during Android device inspection and rootability assessment](https://github.com/anthropics/claude-code/issues/88614)** `OPEN` `area:model` `area:security` `api:anthropic` `stale`  
    Cybersecurity safety-filter false positive halted authorized work, with a reproducible request ID. **Reaction:** 1 comment, 0 👍; open and stale, signaling unresolved filter concerns.

## 4. Key PR Progress

1. **[#97241 — sec-default: the system prompt’s sections continue past the user tier](https://github.com/anthropics/claude-code/pull/97241)** `CLOSED`  
   When an org seats `sec-default`, user-installed plugins no longer shape system-prompt sections. `prompt.compose` now joins rows that continue past the user tier.

2. **[#97334 — sec-default: the rows a conversation keeps continue past the user tier](https://github.com/anthropics/claude-code/pull/97334)** `OPEN`  
   Extends sec-default behavior to conversation persistence. Notes a strict merge order: requires `session.append` on main and no live engine release branch lacking it.

3. **[#97293 — mods: declarations carry `process.run` truncation flags and `list` entries’ `mtimeMs`](https://github.com/anthropics/claude-code/pull/97293)** `OPEN`  
   Mod declarations are armed only when the released npm CLI carries `isStdoutTruncated` / `isStderrTruncated` and `mtimeMs`; test fakes answer them meanwhile.

4. **[#98080 — sec-default: a settings deny rule holds over an allow or ask from a plugin the person installed](https://github.com/anthropics/claude-code/pull/98080)** `CLOSED`  
   Prevents a user-installed mod from switching off a permission deny rule when the security default is seated; orgs can opt out in managed settings.

5. **[#98083 — sec-default: managed option `allowManagedModsOnly`](https://github.com/anthropics/claude-code/pull/98083)** `CLOSED`  
   Lets an organization allow its own mods while refusing user-installed ones, read from managed settings under `pluginConfigs`.

6. **[#96434 — security-guidance: keep denied and secret files out of the reviewer’s reach](https://github.com/anthropics/claude-code/pull/96434)** `OPEN`  
   Fixes #96276 by preventing the security-guidance reviewer from putting permission-denied or secret files into model context via `git diff` / `git show`.

7. **[#97952 — ci: security hardening for GitHub Actions workflows that call Claude](https://github.com/anthropics/claude-code/pull/97952)** `OPEN`  
   Hardens `claude-issue-triage.yml`, `claude-dedupe-issues.yml`, and `claude.yml`, including an egress-firewall runner.

8. **[#94847 — diff: first edit opens the pane only when it has a file to list](https://github.com/anthropics/claude-code/pull/94847)** `OPEN`  
   Fixes the diff pane auto-opening before fetching and showing an empty pane for writes outside the repo, ignored files, or different worktrees.

9. **[#98018 — mods: revert two changes (agents-md truncated reads, diff forced colors)](https://github.com/anthropics/claude-code/pull/98018)** `CLOSED`  
   Reverts #96363 and #96364, returning the agents-md and diff mods to earlier behavior.

10. **[#96364 — agents-md: auto-paginated Read of a nested `AGENTS.md` no longer counts as delivering it](https://github.com/anthropics/claude-code/pull/96364)** `CLOSED`  
    Clarifies delivery semantics when a whole-file Read exceeds the Read tool token cap and is paginated; later reverted by #98018.

## 5. Feature Request Trends
- **Persistent desktop UI state and discoverability** — e.g., keeping the sidebar open without hidden `Ctrl+B` pinning ([#75523](https://github.com/anthropics/claude-code/issues/75523)).
- **Managed security defaults and plugin/mod governance** — org-level control over prompt sections, permission precedence, and which mods load ([#97241](https://github.com/anthropics/claude-code/pull/97241), [#98080](https://github.com/anthropics/claude-code/pull/98080), [#98083](https://github.com/anthropics/claude-code/pull/98083)).
- **Reliable permission and agent guardrails** — auto-mode timeouts should not override explicit allow rules, and agent-spawn restrictions should be enforced ([#96077](https://github.com/anthropics/claude-code/issues/96077), [#96142](https://github.com/anthropics/claude-code/issues/96142)).
- **Sandbox and worktree correctness** — reproducible filesystem shadowing and `.worktreeinclude` matching bugs need fixes ([#80214](https://github.com/anthropics/claude-code/issues/80214), [#79424](https://github.com/anthropics/claude-code/issues/79424)).
- **Safety/content-filter tuning and appealability** — recurring false positives on normal work and authorized cyber/security tasks ([#96160](https://github.com/anthropics/claude-code/issues/96160), [#88614](https://github.com/anthropics/claude-code/issues/88614)).
- **Model availability and quality controls** — Opus/Sonnet availability and code-generation quality complaints ([#96102](https://github.com/anthropics/claude-code/issues/96102), [#96140](https://github.com/anthropics/claude-code/issues/96140)).
- **Remote/cowork GitHub write access** — push permissions in Remote sessions ([#77482](https://github.com/anthropics/claude-code/issues/77482)).
- **OSS program scalability** — the Claude for Open Source form only loading the first 100 contributed repositories ([#97445](https://github.com/anthropics/claude-code/issues/97445)).

## 6. Developer Pain Points
- **Safety filters repeatedly block legitimate work.** Multiple reports cite false positives on normal prompts, non-security code, and authorized cyber/security inspection ([#96160](https://github.com/anthropics/claude-code/issues/96160), [#96034](https://github.com/anthropics/claude-code/issues/96034), [#88614](https://github.com/anthropics/claude-code/issues/88614), [#88613](https://github.com/anthropics/claude-code/issues/88613)).
- **Permissions and sandbox behavior is unreliable.** Auto-mode classifier timeouts fail closed, `allowRead` can be shadowed, and `.worktreeinclude` patterns silently fail ([#96077](https://github.com/anthropics/claude-code/issues/96077), [#80214](https://github.com/anthropics/claude-code/issues/80214), [#79424](https://github.com/anthropics/claude-code/issues/79424)).
- **Tool trust and cost overhead.** Users report fabricated file reads, ignored formatting instructions, and excessive API message overhead ([#96031](https://github.com/anthropics/claude-code/issues/96031), [#96042](https://github.com/anthropics/claude-code/issues/96042), [#96054](https://github.com/anthropics/claude-code/issues/96054)).
- **Agent spawn restrictions are not reliably enforced.** This leads to unauthorized agent forks and unexpected quota burn ([#96142](https://github.com/anthropics/claude-code/issues/96142)).
- **Model availability and quality regressions.** Opus/Sonnet unavailability and poor task completion are recurring complaints ([#96102](https://github.com/anthropics/claude-code/issues/96102), [#96140](https://github.com/anthropics/claude-code/issues/96140)).
- **Remote/cowork GitHub push remains blocked.** Read-only behavior persists despite source configuration ([#77482](https://github.com/anthropics/claude-code/issues/77482)).
- **Issue tracker noise and onboarding friction.** Many `invalid` / `github-integration` test issues, plus the OSS form’s 100-repo limit, add friction ([#97514](https://github.com/anthropics/claude-code/issues/97514), [#97445](https://github.com/anthropics/claude-code/issues/97445)).
- **Desktop UI discoverability.** The sidebar pin state is hidden and undocumented ([#75523](https://github.com/anthropics/claude-code/issues/75523)).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-09-30

## 1. Today's Highlights
- Rust `v0.159.1` shipped, making **GPT-6.1 Sol** the default model in the bundled catalog and Amazon Bedrock Mantle/Runtime catalogs ([#49323](https://github.com/openai/codex/pull/49323), [#49342](https://github.com/openai/codex/pull/49342)).
- Windows daemon regressions dominate community attention: terminal/console flashing and daemon privilege/startup failures are generating the highest comment and reaction counts.
- Several PRs landed to improve Windows sandbox behavior, remote control backoff, RPC cleanup, and shell/exec metadata.

## 2. Releases
- **rust-v0.159.1** — Added GPT-6.1 Sol as the default model in the bundled catalog and Amazon Bedrock Mantle and Runtime catalogs. Includes backports [#49323](https://github.com/openai/codex/pull/49323), [#49342](https://github.com/openai/codex/pull/49342).  
  Full changelog: https://github.com/openai/codex/compare/rust-v0.159.0...rust-v0.159.1
- **rust-v0.159.0** — Added opt-in `instant_interrupt` to let new input steer Codex during model responses or long-running code-mode calls ([#48135](https://github.com/openai/codex/pull/48135), [#48141](https://github.com/openai/codex/pull/48141)); new sessions get a compact welcome screen, consistent headers, and occasional tips ([#48513](https://github.com/openai/codex/pull/48513), [#48562](https://github.com/openai/codex/pull/48562), [#48352](https://github.com/openai/codex/pull/48352)); additional warning-related changes were truncated in the source.
- **Alpha pre-releases** — `rust-v0.161.0-alpha.2`, `rust-v0.161.0-alpha.1`, `rust-v0.160.0-alpha.6`, `rust-v0.160.0-alpha.3` have no detailed notes.

## 3. Hot Issues
1. [#48074 Windows: terminal windows repeatedly flash during requests after installing the Codex daemon](https://github.com/openai/codex/issues/48074) — 115 comments, 137 👍. Top issue; severe Windows daemon regression causing constant flashing.
2. [#48043 Codex CLI 0.157.0 fails to start on Windows with daemon privilege error (0.156.1 works)](https://github.com/openai/codex/issues/48043) — 36 comments, 35 👍. Blocks Windows users after upgrade.
3. [#24040 Codex Desktop Chrome plugin: Native Messaging Host registry key missing on Windows](https://github.com/openai/codex/issues/24040) — 17 comments. Long-running integration blocker.
4. [#35127 Windows: new local chat in a ChatGPT project fails to sync project context](https://github.com/openai/codex/issues/35127) — 13 comments. Tagged Papercuts 2026 / broken flow.
5. [#26613 Codex Desktop on Windows flashes visible PowerShell/console windows during background process polling](https://github.com/openai/codex/issues/26613) — 13 comments, 11 👍. Related console-flash pain.
6. [#19265 Codex Desktop background exec intermittently deletes `~/.codex/skills/.system`](https://github.com/openai/codex/issues/19265) — 11 comments, 6 👍. Skills/data-loss concern.
7. [#24542 Codex Desktop remote proxy respawns unmanaged app-server and blocks daemon bootstrap](https://github.com/openai/codex/issues/24542) — 9 comments. Remote/daemon migration blocker.
8. [#23517 Request setting to disable autoscroll](https://github.com/openai/codex/issues/23517) — 8 comments, 11 👍. Long-requested UX improvement.
9. [#48195 CLI: make `daemon_auto_start` opt-in — a persistent, self-updating background daemon shouldn't be the default](https://github.com/openai/codex/issues/48195) — 5 comments, 12 👍. Strong support for opt-in daemon behavior.
10. [#49362 Sol 6.1 Not Appearing in Codex](https://github.com/openai/codex/issues/49362) — 3 comments, 4 👍. Direct fallout from the 0.159.1 model default; users cannot see the new model.

## 4. Key PR Progress
1. [#49318 Add GPT-6.1 Sol as the default catalog model](https://github.com/openai/codex/pull/49318) — adds `gpt-6.1-sol` with capabilities, reasoning levels, and highest catalog priority.
2. [#49339 Add GPT-6.1 Sol to Bedrock catalogs and make it the default](https://github.com/openai/codex/pull/49339) — updates Bedrock Mantle/Runtime catalogs and provider fallback behavior.
3. [#49342 [0.159] Backport GPT-6.1 Sol Bedrock catalogs](https://github.com/openai/codex/pull/49342) — backports the Bedrock catalog changes for 0.159.1.
4. [#49308 Run piped legacy Windows sandbox processes without a console](https://github.com/openai/codex/pull/49308) — uses `CREATE_NO_WINDOW` to reduce console flashing.
5. [#49325 Retry Windows sandbox runner logon once on error 1056](https://github.com/openai/codex/pull/49325) — handles `ERROR_SERVICE_ALREADY_RUNNING` during sandbox startup.
6. [#49330 Keep remote control reconnect backoff capped during sustained failures](https://github.com/openai/codex/pull/49330) — prevents fast retry loops on HTTP 409 responses.
7. [#49332 Clean up canceled exec-server RPC requests immediately](https://github.com/openai/codex/pull/49332) — adds `PendingRequestGuard` to remove canceled calls promptly.
8. [#49379 Compile hook matchers during discovery](https://github.com/openai/codex/pull/49379) — avoids recompiling regex matchers on every dispatch.
9. [#49353 Allow approved filesystem escalation while preserving denied reads](https://github.com/openai/codex/pull/49353) — fixes approved commands stuck under denied-read restrictions.
10. [#49360 Carry shell invocation metadata and report executor PATH directories](https://github.com/openai/codex/pull/49360) — uses `ShellInvocation` for shell snapshots and credential brokerage.

## 5. Feature Request Trends
- **Daemon behavior controls**: make `daemon_auto_start` opt-in ([#48195](https://github.com/openai/codex/issues/48195)); reduce/stop Windows console flashing ([#48074](https://github.com/openai/codex/issues/48074), [#26613](https://github.com/openai/codex/issues/26613), [#49264](https://github.com/openai/codex/issues/49264), [#49352](https://github.com/openai/codex/issues/49352)); improve daemon startup reliability ([#48043](https://github.com/openai/codex/issues/48043), [#47416](https://github.com/openai/codex/issues/47416)).
- **UI/UX customization**: disable autoscroll ([#23517](https://github.com/openai/codex/issues/23517), [#36390](https://github.com/openai/codex/issues/36390)); restore a dedicated sidebar section for non-project chats ([#49128](https://github.com/openai/codex/issues/49128)); separate project chats from global Recents ([#48320](https://github.com/openai/codex/issues/48320), [#48742](https://github.com/openai/codex/issues/48742)).
- **Remote control and app-server robustness**: Windows Remote Control failures ([#47416](https://github.com/openai/codex/issues/47416)); macOS reconnect blocking active chats ([#49268](https://github.com/openai/codex/issues/49268)); proxy respawn/unmanaged app-server issues ([#24542](https://github.com/openai/codex/issues/24542)).
- **Computer Use reliability** on Windows/macOS ([#48660](https://github.com/openai/codex/issues/48660), [#48712](https://github.com/openai/codex/issues/48712), [#49358](https://github.com/openai/codex/issues/49358)).
- **Model availability/visibility**: GPT-6.1 Sol not appearing ([#49362](https://github.com/openai/codex/issues/49362)).
- **Platform support**: retain Intel macOS support ([#49378](https://github.com/openai/codex/issues/49378)).
- **MCP/tooling**: avoid silently hiding plugin MCP tools after the global schema budget is exhausted ([#44308](https://github.com/openai/codex/issues/44308)).

## 6. Developer Pain Points
- **Windows daemon regressions are the dominant pain**: terminal flashing ([#48074](https://github.com/openai/codex/issues/48074), [#26613](https://github.com/openai/codex/issues/26613), [#49264](https://github.com/openai/codex/issues/49264), [#49352](https://github.com/openai/codex/issues/49352)), daemon privilege/startup failures ([#48043](https://github.com/openai/codex/issues/48043), [#47416](https://github.com/openai/codex/issues/47416)), and sandbox console behavior ([#49308](https://github.com/openai/codex/pull/49308), [#49325](https://github.com/openai/codex/pull/49325)).
- **Daemon auto-start is perceived as intrusive**: users want explicit opt-in ([#48195](https://github.com/openai/codex/issues/48195)) and fewer background side effects ([#24542](https://github.com/openai/codex/issues/24542), [#47735](https://github.com/openai/codex/issues/47735)).
- **Data/skills loss**: background exec intermittently deletes `~/.codex/skills/.system` ([#19265](https://github.com/openai/codex/issues/19265)).
- **Remote control/connectivity remains fragile**: Windows remote control fails ([#47416](https://github.com/openai/codex/issues/47416)), macOS reconnect blocks active chats ([#49268](https://github.com/openai/codex/issues/49268)), proxy respawn blocks daemon bootstrap ([#24542](https://github.com/openai/codex/issues/24542)).
- **UI/UX friction**: autoscroll discomfort ([#23517](https://github.com/openai/codex/issues/23517), [#36390](https://github.com/openai/codex/issues/36390)), sidebar/project chat organization ([#49128](https://github.com/openai/codex/issues/49128), [#48320](https://github.com/openai/codex/issues/48320), [#48742](https://github.com/openai/codex/issues/48742)), cold-launch blank window ([#43960](https://github.com/openai/codex/issues/43960), [#48878](https://github.com/openai/codex/issues/48878)).
- **Computer Use is unreliable and costly to debug** ([#48660](https://github.com/openai/codex/issues/48660), [#48712](https://github.com/openai/codex/issues/48712), [#49358](https://github.com/openai/codex/issues/49358)).
- **Model rollout issues**: GPT-6.1 Sol not appearing despite release ([#49362](https://github.com/openai/codex/issues/49362)).
- **Platform support regression**: Intel macOS support dropped ([#49378](https://github.com/openai/codex/issues/49378)).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-09-30

## 1. Today's Highlights
Three releases landed in the last 24 hours: **v0.63.0-preview.0** adds a retry progress indicator during connection recovery, **v0.63.0-nightly.20260929** fixes an infinite auth loop from file contention and headless keyring state drops, and **v0.62.0** hardens the A2A server against unsupported stores. Meanwhile, high-priority PRs target a CPU hang in headless mode, folder‑trust propagation, and atomic state persistence, while the community continues to push hard on subagent architecture and reliability.

## 2. Releases

- **v0.63.0-preview.0**  
  - `fix(cli): display retry progress indicator during connection recovery` ([PR #29468](https://github.com/google-gemini/gemini-cli/pull/29468))  
  - Changelog for v0.61.0-preview.1 ([PR #29469](https://github.com/google-gemini/gemini-cli/pull/29469))  

- **v0.63.0-nightly.20260929.gfe6350238**  
  - `fix(auth): prevent infinite auth loop from file contention, headless keyring, and supervisor state drops` ([PR #29448](https://github.com/google-gemini/gemini-cli/pull/29448))  

- **v0.62.0**  
  - `fix(a2a-server): add early return on unsupported store in tasks metadata endpoint` ([PR #29334](https://github.com/google-gemini/gemini-cli/pull/29334))  
  - Changelog for v0.61.0-preview.0 ([PR #29344](https://github.com/google-gemini/gemini-cli/pull/29344))  

## 3. Hot Issues

1. **[#3132 – [Agents] Post V1.0 Work](https://github.com/google-gemini/gemini-cli/issues/3132)** — 46 comments, 50 👍. Proposes a reusable `SubAgent` class for LLM‑driven tool orchestration; by far the most upvoted and discussed issue, signalling strong demand for a first‑class agent abstraction.

2. **[#25689 – Bug: 'text.response' in custom theme triggers validation error](https://github.com/google-gemini/gemini-cli/issues/25689)** — 16 comments. A configuration validation bug that blocks custom themes; labelled `good first issue` and `help wanted`, indicating a low‑effort, high‑impact fix.

3. **[#3716 – Infra: Build and Tag Docker for PR's](https://github.com/google-gemini/gemini-cli/issues/3716)** — 13 comments. Long‑standing infrastructure request to enable sandboxed testing per PR; still open and marked `Stale`, reflecting ongoing friction in CI/CD.

4. **[#22323 – Subagent recovery after MAX_TURNS is reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** — 13 comments, 2 👍. Critical reliability bug: subagents report success even when they hit turn limits, hiding interruptions. Priority/p1.

5. **[#10673 – Flicker free robust terminal rendering](https://github.com/google-gemini/gemini-cli/issues/10673)** — 9 comments. Tracks UI improvements for terminal buffer management; important for daily usability on all platforms.

6. **[#15269 – Feature: Missing Subagent Hook Events](https://github.com/google-gemini/gemini-cli/issues/15269)** — 8 comments. Requests `BeforeSubAgent`/`AfterSubAgent` hooks to bring subagent lifecycle parity with the main agent.

7. **[#22745 – Assess the impact of AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)** — 7 comments, 1 👍. Epic investigating AST‑aware tools to reduce token noise and misaligned reads; could significantly improve agent efficiency.

8. **[#17110 – Agent should run changes to validate app](https://github.com/google-gemini/gemini-cli/issues/17110)** — 5 comments. Proposes self‑validation feedback loops so the agent can catch its own errors before finishing.

9. **[#11802 – Add OTLP headers for telemetry](https://github.com/google-gemini/gemini-cli/issues/11802)** — 5 comments, 7 👍. Enterprise‑focused request for custom authentication headers in telemetry; high upvote ratio shows clear need.

10. **[#15179 – [Feat] Investigate recursive subagent delegation](https://github.com/google-gemini/gemini-cli/issues/15179)** — 4 comments, 1 👍. Post‑v1 exploration of letting subagents delegate further, a natural extension of the current subagent work.

## 4. Key PR Progress

1. **[PR #29568 – fix(core): implement append-only delta patching and bounded history windowing in ChatRecordingService](https://github.com/google-gemini/gemini-cli/pull/29568)** — Replaces full‑history rewrites with incremental deltas, reducing memory and I/O overhead for long sessions. Priority/p1, size/xl.

2. **[PR #29528 – fix(cli): propagate resolved folder trust state in headless mode (#29031)](https://github.com/google-gemini/gemini-cli/pull/29528)** — Fixes a split‑brain state where headless mode always reported `onTrustChange(true)` even for untrusted folders. Priority/p1.

3. **[PR #29557 – fix(cli): prevent CPU hang and quote swallowing on @ within code (#29434)](https://github.com/google-gemini/gemini-cli/pull/29557)** — Resolves an uninterruptible 100% CPU lockup in non‑interactive mode caused by scoped package names followed by quoted strings. Priority/p1.

4. **[PR #29560 – fix(ui): ensure Windows ConPTY forwards IME cursor position](https://github.com/google-gemini/gemini-cli/pull/29560)** — Fixes severe IME candidate window misalignment for CJK input on Windows. Priority/p2.

5. **[PR #29549 – fix(acp): bridge PromptResponse.usage and emit usage_update notifications (#29389)](https://github.com/google-gemini/gemini-cli/pull/29549)** — Populates standard ACP usage fields, resolving ~3× billing overestimations in `gemini --acp` mode.

6. **[PR #29564 – fix(cli): preserve env placeholders during settings migration](https://github.com/google-gemini/gemini-cli/pull/29564)** — Prevents `${VAR}` placeholders from being expanded and persisted during settings migration. Fixes #29556.

7. **[PR #29563 – fix(core): keep line terminators when truncating](https://github.com/google-gemini/gemini-cli/pull/29563)** — Small but important: `truncateString()` now preserves line terminators instead of silently deleting them. Fixes #29562.

8. **[PR #29559 – fix(core): normalize CRLF before computing diff context snippets](https://github.com/google-gemini/gemini-cli/pull/29559)** — Fixes a bug where CRLF vs LF comparison caused the whole file to appear changed in diff snippets. Fixes #29130.

9. **[PR #29558 – fix(cli): persist state atomically and recover from backup on corruption](https://github.com/google-gemini/gemini-cli/pull/29558)** — Introduces atomic writes, `.bak` rotation, and automatic recovery for `~/.gemini/state.json`. Priority/p1.

10. **[PR #29457 – fix(core): replace fuzzy requestedExplicitly logic with glob matching in read-many-files](https://github.com/google-gemini/gemini-cli/pull/29457)** — Fixes context bloat where binary assets were incorrectly treated as explicitly requested. Priority/p1.

## 5. Feature Request Trends

- **Subagent architecture and lifecycle** — The dominant theme: reusable `SubAgent` class (#3132), subagent hook events (#15269), recursive delegation (#15179), recovery after MAX_TURNS (#22323), trajectory visibility (#22598), and `/agents` registration (#15975). The community clearly wants subagents to be first‑class, observable, and composable.
- **Terminal and UI robustness** — Flicker‑free rendering (#10673), Windows IME fixes (#29560), and custom theme validation (#25689, #29571) show sustained demand for a polished cross‑platform CLI experience.
- **Observability and enterprise readiness** — OTLP headers (#11802), OpenTelemetry epic (#12244), enterprise hook controls (#15462), and CI/CD security reviews (#14540) indicate growing enterprise adoption needs.
- **Agent self‑validation and safety** — Requests for the agent to run changes and validate results (#17110), avoid destructive commands (#22672), and use AST‑aware tools (#22745, #22746) point to a desire for more reliable, less error‑prone autonomy.
- **Performance and parallelism** — Parallel tool calling (#17120), bundled distributions (#10168), and fixes for process hangs (#29435) reflect ongoing performance and stability concerns.

## 6. Developer Pain Points

- **Subagent reliability** — The most upvoted and commented issues revolve around subagents failing silently, reporting false success, or lacking observability. This erodes trust in agentic workflows.
- **Configuration validation and migration** — Repeated bugs with custom theme keys (#25689, #29571), env placeholder expansion during settings migration (#29564), and V1→V2 settings migration (#29450) create friction for users upgrading or customizing the CLI.
- **Process hangs and performance regressions** — CPU lockups in headless mode (#29557), process hangs on session exit (#29435), Windows performance issues (#10168), and auth infinite loops (#29448) are high‑impact stability problems.
- **File operation races and context bloat** — Concurrent file operations causing lost updates (#29499) and fuzzy matching pulling in binary assets (#29457) degrade core agent behavior.
- **State corruption and trust issues** — State file corruption (#29558) and headless folder‑trust mismatches (#29031) lead to confusing, hard‑to‑debug behavior.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-09-30

## Today's Highlights
Copilot CLI shipped a rapid patch sequence from `v1.0.90-1` through `v1.0.90-5`, focused on model-provider errors, MCP OAuth/tool-call reliability, GitHub auth scoping for MCP, and session-scoped path approvals. Issue activity remains dominated by MCP integration failures, session lifecycle/recovery problems, and model/provider inconsistencies. The highest-engagement open issue is still #1274, where intermittent `400` invalid request body errors continue to block code-review workflows.

## Releases
- **v1.0.90-5** — Fixed “No supported model available” appearing when a configured provider already supplies a model; MCP tool calls now complete even if servers keep sending progress updates after responding. [Release link](https://github.com/github/copilot-cli/releases/tag/v1.0.90-5)
- **v1.0.90-4** — Fixed fresh launch printing “Failed to read model provider attribution” errors during sign-in. [Release link](https://github.com/github/copilot-cli/releases/tag/v1.0.90-4)
- **v1.0.90-3** — Added `--mcp-github-auth` to scope GitHub account auth to approved MCP server origins; added session-scoped read-only directory approvals to path access prompts. [Release link](https://github.com/github/copilot-cli/releases/tag/v1.0.90-3)
- **v1.0.90-2** — “Fixes and changes” (no further detail provided). [Release link](https://github.com/github/copilot-cli/releases/tag/v1.0.90-2)
- **v1.0.90-1** — Fixed MCP OAuth sign-in to servers such as Datadog reusing a still-valid cached token; withdrawn running prompts stay removed after session resume. [Release link](https://github.com/github/copilot-cli/releases/tag/v1.0.90-1)

## Hot Issues
1. **[#1274](https://github.com/github/copilot-cli/issues/1274) — OPEN — CLI constantly getting 400 errors for invalid request body**  
   31 comments, 13 👍. High-impact blocker for code review and prompting workflows; community is actively debugging whether the CLI or API is crafting invalid requests.

2. **[#1285](https://github.com/github/copilot-cli/issues/1285) — OPEN — Organisation-level Agent not showing up**  
   11 comments, 14 👍. Enterprise/agent discovery issue: org-level agents in `.github-private` are not appearing in CLI or VS Code. High community interest.

3. **[#4870](https://github.com/github/copilot-cli/issues/4870) — CLOSED — Figma remote MCP server fails with `-32601` on `server/discover`**  
   8 comments, 12 👍. Important MCP compatibility bug: CLI treated a discover error as fatal while VS Code worked. Highlights gaps in MCP discovery handling.

4. **[#3281](https://github.com/github/copilot-cli/issues/3281) — CLOSED — After upgrading to `v1.0.46`, CLI unusable due to native binding error**  
   7 comments. Installation/upgrade pain around optional npm dependencies and native bindings; a recurring class of breakage for some environments.

5. **[#2861](https://github.com/github/copilot-cli/issues/2861) — CLOSED — Compaction failed with empty model response on Opus 4.6**  
   7 comments, 5 👍. Affects long-session context management; manual `/compact` repeatedly failed. Relevant to context-memory reliability.

6. **[#3589](https://github.com/github/copilot-cli/issues/3589) — CLOSED — Multiple `sessionStart`/`subagentStart` hooks: only last `additionalContext` injected**  
   4 comments, 2 👍. Plugin/hook authors need deterministic context injection; this undermines multi-hook workflows.

7. **[#4919](https://github.com/github/copilot-cli/issues/4919) — CLOSED — `/ask` does not work with auto models**  
   4 comments. Recent model UX issue: auto mode produced “model not supported” errors for `/ask` tangents.

8. **[#2581](https://github.com/github/copilot-cli/issues/2581) — CLOSED — MCP tools with dots in names cause `400 Bad Request`**  
   3 comments, 3 👍. MCP spec allows dots, but CLI/API rejected them. Important interoperability issue for MCP server authors.

9. **[#4807](https://github.com/github/copilot-cli/issues/4807) — CLOSED — Idle CLI enters `FileWatch` event storm, 221% CPU, 33+ GB log**  
   3 comments, 1 👍. Severe resource leak with operational impact; shows need for better idle/watch throttling and log rotation.

10. **[#4982](https://github.com/github/copilot-cli/issues/4982) — OPEN — AI model stuck indefinitely on Read/Search/View/Rg tool calls**  
    1 comment. Recent stall report on `v1.0.88`; intermittent parallel-tool hangs are painful because they require user interruption.

## Key PR Progress
The provided dataset contains only **1 PR updated in the last 24h**, so a top-10 PR list cannot be produced without fabricating data. The sole PR is:

- **[#5000](https://github.com/github/copilot-cli/pull/5000) — OPEN — Publish npm tarballs from published Copilot CLI releases**  
  Author: devm33. Proposes triggering npm publishing from the published GitHub release in `github/copilot-cli`, with an explicit-tag manual recovery path. npm auth would use trusted publishing (OIDC) rather than an npm token, while the runtime repository’s internal feed and ancillary release jobs remain separate.

## Feature Request Trends
- **MCP management and interoperability** — Users want easier MCP toggling like skills ([#2805](https://github.com/github/copilot-cli/issues/2805)), smoother OAuth authorization ([#3393](https://github.com/github/copilot-cli/issues/3393)), secret env placeholder support ([#4985](https://github.com/github/copilot-cli/issues/4985)), correct `structuredContent` handling ([#4515](https://github.com/github/copilot-cli/issues/4515)), support for empty input schemas ([#1825](https://github.com/github/copilot-cli/issues/1825)), and MCP-spec-compliant tool names with dots ([#2581](https://github.com/github/copilot-cli/issues/2581)).
- **Session lifecycle and recovery** — Requests for reclaiming stale locks ([#4805](https://github.com/github/copilot-cli/issues/4805)), retrieving sessions by name ([#2483](https://github.com/github/copilot-cli/issues/2483)), fixing “Continue in Copilot CLI” empty sessions ([#2497](https://github.com/github/copilot-cli/issues/2497)), and restoring auto-rename ([#3365](https://github.com/github/copilot-cli/issues/3365)).
- **Tool UX and conversation navigation** — Suggested improvements include an “Other/custom answer” escape hatch for `ask_user` enums ([#3323](https://github.com/github/copilot-cli/issues/3323)), fixing parallel tool stalls ([#4982](https://github.com/github/copilot-cli/issues/4982)), and better scrollback highlighting/collapsing ([#4995](https://github.com/github/copilot-cli/issues/4995)).
- **Platform/install reliability** — Windows ARM64 prebuild fixes ([#3309](https://github.com/github/copilot-cli/issues/3309)), native binding failures ([#3281](https://github.com/github/copilot-cli/issues/3281)), and npm release automation ([#5000](https://github.com/github/copilot-cli/pull/5000)).
- **BYOK and model flexibility** — BYOK support in ACP server mode ([#4037](https://github.com/github/copilot-cli/issues/4037)), correct BYOK Anthropic turn lifecycle/reasoning events ([#2651](https://github.com/github/copilot-cli/issues/2651)), `/ask` with auto models ([#4919](https://github.com/github/copilot-cli/issues/4919)), and PDF upload support ([#4583](https://github.com/github/copilot-cli/issues/4583)).
- **Input/auth ergonomics** — Ctrl+Z exiting the CLI ([#3693](https://github.com/github/copilot-cli/issues/3693)), macOS keyboard input issues ([#3533](https://github.com/github/copilot-cli/issues/3533)), and finer-grained GitHub MCP auth scoping (release `v1.0.90-3`).

## Developer Pain Points
- **MCP integration fragility** — Recurring failures around discovery, OAuth, schemas, tool naming, secret placeholders, and duplicate `content`/`structuredContent` exposure. Examples: [#4870](https://github.com/github/copilot-cli/issues/4870), [#2581](https://github.com/github/copilot-cli/issues/2581), [#4515](https://github.com/github/copilot-cli/issues/4515), [#4985](https://github.com/github/copilot-cli/issues/4985).
- **Installation and upgrade breakage** — Native binding errors, ARM64 prebuild mismatches, and version-sort bugs can make the CLI unusable after upgrade. Examples: [#3281](https://github.com/github/copilot-cli/issues/3281), [#3309](https://github.com/github/copilot-cli/issues/3309), [#4611](https://github.com/github/copilot-cli/issues/4611).
- **Model/provider unpredictability** — `400` invalid request errors, auto-model `/ask` failures, BYOK event gaps, and compaction failures create inconsistent behavior across providers. Examples: [#1274](https://github.com/github/copilot-cli/issues/1274), [#4919](https://github.com/github/copilot-cli/issues/4919), [#2651](https://github.com/github/copilot-cli/issues/2651), [#2861](https://github.com/github/copilot-cli/issues/2861).
- **Session lifecycle and recovery** — Stale locks, resume-by-name regressions, cloud-session continuation failures, and auto-rename breakage make saved work hard to reopen reliably. Examples: [#4805](https://github.com/github/copilot-cli/issues/4805), [#2483](https://github.com/github/copilot-cli/issues/2483), [#2497](https://github.com/github/copilot-cli/issues/2497), [#3365](https://github.com/github/copilot-cli/issues/3365).
- **TUI/input friction** — Copy/paste gaps, Ctrl+Z unexpectedly exiting, and unresponsive macOS keyboard input remain common usability complaints. Examples: [#3693](https://github.com/github/copilot-cli/issues/3693), [#3533](https://github.com/github/copilot-cli/issues/3533).
- **Resource leaks and tool stalls** — Idle `FileWatch` event storms and parallel tool-call hangs can waste CPU, produce huge logs, and block prompts until manual interruption. Examples: [#4807](https://github.com/github/copilot-cli/issues/4807), [#4982](https://github.com/github/copilot-cli/issues/4982).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-30

## 1. Today's Highlights

No new releases landed in the last 24h, but issue traffic is heavy and skews toward **stability and resource exhaustion**: a closed "Memory Megathread" (#20695, 147 comments) anchors a cluster of reports about OOM kills, runaway CPU, and unbounded SQLite growth. A notable security-adjacent report (#52180) shows redirect-only bash statements bypassing `deny` permission rules, while a batch of long-stale `automated-pr-cleanup` PRs from late August were closed out today.

## 2. Releases

None in the last 24 hours. (Notable: issues #52121 and #52122 indicate Nix-built desktop builds currently report a mismatched app/CLI version and arm the production auto-updater — worth watching before the next cut.)

## 3. Hot Issues

1. **#20695 — Memory Megathread** (CLOSED, 147 comments, 👍112) — Central hub for memory reports; maintainers explicitly warn against LLM-generated "solutions" and ask for heap snapshots. The single highest-signal thread in the repo. [Link](https://github.com/anomalyco/opencode/issues/20695)
2. **#33356 — Unbounded `event` table growth (13GB+)** (37 comments, 👍12) — `opencode.db` has no retention/compaction; `message.updated.1` snapshots filled a 22GB volume to 97–99%. High impact for long-lived instances. [Link](https://github.com/anomalyco/opencode/issues/33356)
3. **#51761 — TUI OOM: 24–28GB exhaustion in v2** (5 comments) — Linear growth at ~500MB/s–1GB/s with no GC sawtooth, no reliable trigger. Directly relevant to the megathread. [Link](https://github.com/anomalyco/opencode/issues/51761)
4. **#33399 — Random 99–100% CPU, CLI unresponsive** (10 comments) — Fans spin up, keyboard input dies. Present since 1.3.3; a long-running unresolved perf complaint. [Link](https://github.com/anomalyco/opencode/issues/33399)
5. **#52042 — Image rejection bricks a session** (8 comments) — A provider 400 on image input poisons the session: every subsequent request replays the image and fails with no recovery path. [Link](https://github.com/anomalyco/opencode/issues/52042)
6. **#42170 — Desktop fails to load sessions: `no such column: project_id`** (8 comments) — Schema migration breakage between `workspace` and provider/binding builds; desktop dies on launch. [Link](https://github.com/anomalyco/opencode/issues/42170)
7. **#44821 — OAuth transform misreads Codex budget as endpoint limit** (5 comments, 👍5) — Causes auto-compaction hundreds of thousands of tokens early for ChatGPT OAuth users. [Link](https://github.com/anomalyco/opencode/issues/44821)
8. **#52180 — Redirect-only bash bypasses all permission rules** (1 comment) — With `bash: {"*": "deny"}`, a bare `> out.txt` still executes. A real security-relevant gap in the permission model. [Link](https://github.com/anomalyco/opencode/issues/52180)
9. **#51424 — OpenCode Go returns "Insufficient account funds" with active sub** (5 comments, 👍2) — 0% usage, active subscription, still blocked. Billing/entitlement mismatch. [Link](https://github.com/anomalyco/opencode/issues/51424)
10. **#51330 — Desktop rejects custom providers as "unavailable on this server"** (3 comments, 👍2) — v2-protocol block prevents saving any custom OpenAI-compatible provider from the GUI; corroborates #50650 and #51031. [Link](https://github.com/anomalyco/opencode/issues/51330)

## 4. Key PR Progress

Today's PR activity is a sweep of the late-August `[automated-pr-cleanup]` backlog, all closed:

1. **#46181 — DeepSeek V4 "none" variant to disable thinking** — Fixes `reasoningVariants` short-circuiting on effort entries so a toggle+effort model can actually turn reasoning off. [Link](https://github.com/anomalyco/opencode/pull/46181)
2. **#46136 — Auto-compaction uses cumulative token usage** — Overflow check never fired for large-context models like `opencode-go/hy3`. [Link](https://github.com/anomalyco/opencode/pull/46136)
3. **#46131 — Atomic `auth.json` writes under a lock** — Two separate credential-loss defects: env-snapshot persistence and non-atomic writes. [Link](https://github.com/anomalyco/opencode/pull/46131)
4. **#46165 — Archived sessions stay open in their tabs** — Archiving no longer acts as a navigation command. [Link](https://github.com/anomalyco/opencode/pull/46165)
5. **#46125 — Reset session status to idle when async prompt fails** — Prevents sessions stuck in a non-idle state after a forked prompt errors. [Link](https://github.com/anomalyco/opencode/pull/46125)
6. **#46139 — Resume loop when a message arrives during a `question` prompt** — Fixes the agent stalling when the user replies instead of answering the prompt. [Link](https://github.com/anomalyco/opencode/pull/46139)
7. **#46160 — Preserve V1 tool attachment filenames** — PDF tool results were serialized as `filename: "data"` for Responses providers (incl. Bedrock Mantle). [Link](https://github.com/anomalyco/opencode/pull/46160)
8. **#46148 — Skip file watcher on filesystem roots** — Stops creating a `FileWatcher` for every opened location, including `/`. [Link](https://github.com/anomalyco/opencode/pull/46148)
9. **#46150 — Report missing glob/grep search paths** — Silent/misleading failures when the `path` argument doesn't exist. [Link](https://github.com/anomalyco/opencode/pull/46150)
10. **#46188 — Keep healthy well-known origins when one is unreachable** — `WellKnown.load()` used fail-fast `Effect.forEach`, failing the whole batch on one bad origin. [Link](https://github.com/anomalyco/opencode/pull/46188)

*Also of note:* the managed-attachment stack #46175 → #46182 → #46185 (materialize → promote → upload-before-submit) closed as a coordinated feature series.

## 5. Feature Request Trends

- **Third-party provider integrations** — Nous Research's public inference API (#47515) is the clearest ask; broadly, users want more first-class provider coverage beyond the default set.
- **Provider config reliability in V2** — #51252 (native `providers` block ignored in 2.0.16) and #51330 (desktop rejects custom providers) point to a config-parity gap between V1 and V2.
- **Simple/plain chat mode** — #39399 requested a mode that doesn't inject prompts into models; closed today, suggesting some movement.
- **Desktop UX polish** — #52117 (sort context-panel source messages newest-first) and #52125 (record pinned Electron version in debug export) are small, well-scoped quality-of-life asks.
- **Packaging correctness** — the Nix cluster (#52121–#52125) represents a request for reproducible, version-consistent, auto-update-safe builds.

## 6. Developer Pain Points

- **Memory and resource exhaustion** — The dominant theme: OOM kills (#51761), runaway CPU (#33399), unbounded DB growth (#33356), all funneling into the memory megathread (#20695). Long-lived instances are the worst affected.
- **Provider configuration is brittle in V2** — Native `providers` maps ignored (#51252), custom providers rejected in Desktop (#51330), and OAuth budget misread as a context limit (#44821). Users repeatedly note "it worked in V1."
- **No recovery from poisoned sessions** — A single bad request (image rejection #52042, oversized payload #52174) can permanently brick a session, forcing a restart.
- **Billing and entitlement confusion** — #51424 and #49867 ("Subscription not found") plus the Spanish-language #52167 ("Free usage exceeded") show repeated friction between paid status and what the CLI reports.
- **Permission-model gaps** — #52180 demonstrates the `bash` deny rules can be bypassed by redirect-only statements — a trust issue for anyone relying on the sandbox.
- **Desktop migration and platform bugs** — Schema mismatches (#42170), ghost projects on Windows (#49428), and version-gate failures (#52121) make the desktop path feel less stable than the CLI.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-09-30

## 1. Today's Highlights
Pi shipped two releases in the last 24h: **v0.99.1** adds **GPT-6.1 Sol** across OpenAI, Azure OpenAI, and OpenAI Codex, making it the default Codex model; **v0.99.0** introduces **Codemode and MCP**, allowing models to run JavaScript that calls tools in parallel. Community attention is split between enthusiasm for the new MCP/codemode architecture and a cluster of auth/packaging regressions around OpenAI ChatGPT sign-in and provider registration.

## 2. Releases
- **[v0.99.1](https://github.com/earendil-works/pi/releases/tag/v0.99.1)** — Added **GPT-6.1 Sol** (`gpt-6.1-so...`) on OpenAI, Azure OpenAI, and OpenAI Codex; now the default OpenAI Codex model. Docs: [Select a model](https://github.com/earendil-works/pi/blob/v0.99.1/packages/coding-agent/docs/models.md#select-a-model).
- **[v0.99.0](https://github.com/earendil-works/pi/releases/tag/v0.99.0)** — **Codemode and MCP** support: connect MCP servers and let models run JavaScript that calls tools in parallel. Docs: [MCP Servers](https://github.com/earendil-works/pi/blob/v0.99.0/packages/coding-agent/docs/mcp.md), [Enable codemode](https://github.com/earendil-works/pi/blob/v0.99.0/packages/coding-agent/docs/codemode.md).

## 3. Hot Issues
1. **[#8643 OPEN — Bedrock: OpenAI models reject images nested in toolResult.content](https://github.com/earendil-works/pi/issues/8643)** — Cross-provider multimodal compatibility bug; fix and regression test are ready on a fork. **8 comments, 3 👍.**
2. **[#10033 CLOSED — Compaction prompt includes all thinking text and exceeds the context window](https://github.com/earendil-works/pi/issues/10033)** — Auto-compaction fails on long reasoning-model sessions because full thinking blocks are serialized into the summary prompt. **8 comments, 1 👍.**
3. **[#9962 CLOSED — registerNativeProvider races startup refresh; stale “No models available”](https://github.com/earendil-works/pi/issues/9962)** — Custom native providers with OAuth intermittently resolve from a stale snapshot at startup. **6 comments.**
4. **[#10074 OPEN — Anthropic tool calls silently corrupt non-ASCII edit arguments](https://github.com/earendil-works/pi/issues/10074)** — Korean text edits fail often and can corrupt files due to dropped `u` in `\uXXXX` escapes. Serious data-integrity issue. **5 comments.**
5. **[#10144 OPEN — Queued prompts are sent one by one instead of batching](https://github.com/earendil-works/pi/issues/10144)** — Agent-flow UX bug: follow-up corrections are not batched while a tool is running. **4 comments.**
6. **[#10154 OPEN — Chinese `**bold**` renders literally when closing `**` precedes CJK punctuation](https://github.com/earendil-works/pi/issues/10154)** — Long-standing TUI markdown/CJK rendering bug; still broken in 0.87.1, previously #3353. **4 comments.**
7. **[#10184 CLOSED — Sign in with ChatGPT: OpenAI consent page rejects Pi with `invalid_client`](https://github.com/earendil-works/pi/issues/10184)** — High-visibility auth regression blocking ChatGPT login. **3 comments, 6 👍.**
8. **[#10182 CLOSED — 0.99.0 ChatGPT login fails because `openai-chatgpt.js` is missing from bundle](https://github.com/earendil-works/pi/issues/10182)** — Published npm tarball lacks a required module; release packaging issue. **3 comments, 4 👍.**
9. **[#10191 CLOSED — Interactive mode holds ~1.5 cores while idle; Loader repaint and GC](https://github.com/earendil-works/pi/issues/10191)** — Performance regression: spinner repaint at 80ms drives high idle CPU. **2 comments.**
10. **[#10157 OPEN — Gemini tool-call thought signatures dropped with AI Studio OpenAI-compatible endpoint](https://github.com/earendil-works/pi/issues/10157)** — Provider compatibility issue: `extra_content.google.thought_signature` is not replayed, breaking tool-call continuity. **2 comments.**

## 4. Key PR Progress
1. **[#10040 CLOSED — feat(coding-agent): Codemode and MCP](https://github.com/earendil-works/pi/pull/10040)** — Core feature adding MCP support and QuickJS-wasm codemode so models can call Pi tools as async JavaScript functions in parallel.
2. **[#10159 CLOSED — refactor(coding-agent): resolve built-in extensions as `builtin:<name>` paths](https://github.com/earendil-works/pi/pull/10159)** — Makes built-ins like `mcp`, `llama.cpp`, `codemode`, and `tool-search` disableable globally or per project via `pi config`.
3. **[#10122 OPEN — feat(coding-agent): add managed llama.cpp server mode](https://github.com/earendil-works/pi/pull/10122)** — `/login llama.cpp` can start a detached `llama-server` supervisor on a random local port and stop it after the last Pi process disconnects.
4. **[#10190 CLOSED — fix(coding-agent): mark native providers with stored credentials as configured on registration](https://github.com/earendil-works/pi/pull/10190)** — Directly addresses #9962 by updating the auth snapshot during `registerNativeProvider()`.
5. **[#10176 CLOSED — feat(ai,coding-agent): add alternative sign in for the openai provider](https://github.com/earendil-works/pi/pull/10176)** — Auth-flow improvement for OpenAI provider sign-in.
6. **[#10194 OPEN — feat(ai): add copy code login method to Anthropic OAuth](https://github.com/earendil-works/pi/pull/10194)** — Adds code-based login for remote/cloud Pi environments where localhost redirects are poor UX.
7. **[#10146 OPEN — fix(coding-agent): preserve pasted text during editor restoration](https://github.com/earendil-works/pi/pull/10146)** — Fixes queued-message restoration submitting literal `[paste #x +y lines]` instead of pasted text.
8. **[#10165 OPEN — fix(coding-agent): track discarded user bash output](https://github.com/earendil-works/pi/pull/10165)** — Ensures truncation notices and full-log paths are surfaced when `!` command output discards earlier chunks.
9. **[#10156 CLOSED — feat(coding-agent): add configurable mouse-wheel scrolling](https://github.com/earendil-works/pi/pull/10156)** — Adds normal/alt wheel scrolling presets in `/settings` or custom `settings.json` values; fixes #9758.
10. **[#10158 CLOSED — fix(llama): cached context on reload](https://github.com/earendil-works/pi/pull/10158)** — Addresses #10077 by preserving per-model context window during refresh instead of falling back to `n_ctx_train`.

## 5. Feature Request Trends
- **MCP/codemode ecosystem expansion** — New MCP support is driving follow-up requests around auth links, hidden-tool advertisement, and built-in extension management.
- **Provider/auth robustness** — OpenAI ChatGPT sign-in, Anthropic OAuth for remote machines, custom native providers, Bedrock/OpenAI image handling, and Gemini thought signatures are all active areas.
- **Context and compaction control** — Multiple issues ask for better auto-compaction thresholds, reasoning-block handling, and provider-policy-safe summarization.
- **TUI/rendering polish** — CJK bold rendering, multiline syntax highlighting, OSC-8 clickable links, mouse-wheel scrolling, footer documentation, and hiding tool rows are recurring requests.
- **Local model and catalog management** — llama.cpp context-window persistence, managed server mode, model catalog accuracy, and simplifying `/scoped-models` into `/model`.
- **Performance and packaging** — Idle CPU usage, npm install size, extension package resolution, and missing bundle files are all under scrutiny.

## 6. Developer Pain Points
- **Auth regressions are blocking onboarding** — ChatGPT login failures (`invalid_client`, missing `openai-chatgpt.js`) and provider-registration races create high-visibility startup failures.
- **Provider-specific tool/multimodal incompatibilities** — Bedrock/OpenAI image nesting, Anthropic non-ASCII argument corruption, and Gemini thought-signature loss force retries and risk file corruption.
- **Auto-compaction remains fragile** — Reasoning-model thinking text, provider ToS blocks, and run-boundary-only threshold checks make long sessions unreliable.
- **CJK/non-ASCII handling is a persistent quality gap** — Markdown bold rendering and edit-tool corruption affect non-English developers disproportionately.
- **Release/packaging quality is under pressure** — Missing bundled modules and large npm installs erode trust in published artifacts.
- **Session and memory consistency edge cases** — Failed appends can desynchronize memory from JSONL transcripts, leaving broken `parentId` chains.
- **Contribution/triage friction** — Some fixes are auto-closed or marked `no-action`, then resubmitted manually, suggesting process friction for community contributors.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-09-30

## 1. Today's Highlights

The dominant theme this cycle is the **Managed Agent / Hosted Workspace** architecture maturing from design into staged delivery, with a wave of D-series slices, runtime-broker correctness fixes, and admission-profile proposals landing within 24h. Alongside this, the **long-context token-governance umbrella (#12028)** continues to drive a cluster of measurement and tool-surface issues, reflecting sustained pressure to reduce per-request overhead. Release activity was steady (CLI v0.24.7 plus coordinated SDK/Desktop builds), though the VSCode IDE Companion release workflow failed for 0.24.7.

---

## 2. Releases

- **v0.24.7 (CLI)** — Standard release with no known breaking changes. Headline change: `feat(managed-agent): admit workspace-bound sessions without execution` ([#12709](https://github.com/QwenLM/qwen-code/pull/12709)).
- **sdk-typescript-v0.1.17** — SDK release bundling CLI version 0.24.7 (built from the same branch/ref as the SDK). Note the release notes also reference a bundled CLI 0.24.6, suggesting a stacked/repeated template block.
- **desktop-v0.24.7** — Qwen Code Desktop build. Includes `fix(serve): preserve session creation failure diagnostics` ([#12331](https://github.com/QwenLM/qwen-code/pull/12331)) and `feat(sdk-java): Add managed runtime` work.
- **⚠️ Release failure:** [Issue #13028](https://github.com/QwenLM/qwen-code/issues/13028) — the **VSCode IDE Companion release failed for 0.24.7** (run 36579627891), now closed.

---

## 3. Hot Issues (Top 10 by relevance & activity)

1. **[#12380](https://github.com/QwenLM/qwen-code/issues/12380)** — *proposal(serve): Define Managed Agent dual-path architecture and staged delivery* (37 comments). The architectural north star: keep the TS agent loop, decouple model inference from tool-environment provisioning, and give Sessions durable ownership/Workspace bindings. Highest-traffic issue this cycle; the reference point for most other managed-agent work.

2. **[#12028](https://github.com/QwenLM/qwen-code/issues/12028)** — *tracking(core): non-conversation context token governance* (15 comments). Umbrella for the observation that system prompt + tool schemas + `QWEN.md` + skill listings are paid for on every request and can dwarf the conversation. Anchors a large family of child issues.

3. **[#12326](https://github.com/QwenLM/qwen-code/issues/12326)** — *feat(core): the eager tool surface is a hand-maintained static list* (8 comments). Proposes making the resident tool set dynamically chosen **without invalidating the prompt prefix** — a hard constraint that makes this genuinely interesting.

4. **[#12333](https://github.com/QwenLM/qwen-code/issues/12333)** — *feat(ci): the token work has no recall or task-success gate* (7 comments). Argues every token-saving change is measured for savings but never for its cost in tool recall/task success. Blocked without an owner — a real gap in the optimization loop.

5. **[#12867](https://github.com/QwenLM/qwen-code/issues/12867)** — *feat(managed-agent): Stage D follow-ups for durable lifecycle, Turns, Actions* (5 comments). Covers the remainder of Stage D in #12380 after D1–D3: durable lifecycle, Turns, Actions, `java_durable` admission profile, AgentDefinition.

6. **[#13016](https://github.com/QwenLM/qwen-code/issues/13016)** — *SDK abort or close leaves the relaunched CLI worker running* (P1, 5 comments). A concrete, high-severity bug: the supervisor child process survives SIGTERM/SIGKILL because neither signal reaches the relaunched worker.

7. **[#12889](https://github.com/QwenLM/qwen-code/issues/12889)** — *Deferred `tool_call` schema allows empty arguments for tools with required fields* (5 comments). Reproducible from a v0.24.6 session; a correctness bug in the deferred tool bridge surfaced by real usage.

8. **[#13030](https://github.com/QwenLM/qwen-code/issues/13030)** — *feat(managed-agent): Admit read-only search tools in a new Hosted Workspace profile* (5 comments). Adds `list_directory`, `glob`, `grep_search` to the Hosted Harness via the Broker path — expanding what hosted sessions can safely do.

9. **[#13068](https://github.com/QwenLM/qwen-code/issues/13068)** — *Ctrl + named key sends a raw C0 byte to the pty* (4 comments). Shell-mode UX bug: Ctrl+arrows/Delete/Home/End/PageUp/PageDown corrupt the terminal instead of emitting escape sequences.

10. **[#12999](https://github.com/QwenLM/qwen-code/issues/12999)** — *deferred tool_call bridge enforces a declaration-schema layer 8 tool families never enforce* (4 comments). A subtle layering inconsistency with broad implications for tool validation semantics.

*Also notable:* [#12714](https://github.com/QwenLM/qwen-code/issues/12714) (main CI failure, ready-for-agent), [#13059](https://github.com/QwenLM/qwen-code/issues/13059) (broker answers `200 prepared` for refused dispatch — provider client hangs forever).

---

## 4. Key PR Progress (Top 10)

1. **[#13071](https://github.com/QwenLM/qwen-code/pull/13071)** — *feat(managed-agent): ask for Hosted tool approvals (D6a)*. Hosted Harness now requests approval before non-pre-approved tool calls, waits durably, then runs/refuses. Slice D6a of #12867.

2. **[#13069](https://github.com/QwenLM/qwen-code/pull/13069)** — *fix(runtime-broker): keep the UNKNOWN answer when the original Runtime cannot answer*. Fixes #13060; stops leaking the attempt error and keeps `409 runtime_broker_execution_unknown`.

3. **[#13064](https://github.com/QwenLM/qwen-code/pull/13064)** — *fix(runtime-broker): answer a refused provider start as unknown instead of prepared*. Companion to #13069; eliminates the "hangs forever" class of bug.

4. **[#13072](https://github.com/QwenLM/qwen-code/pull/13072)** — *fix(core): guard compression request admission*. Rebuilds the compression-admission fix on current `main`; applies full request admission to shared-cache and cold compression requests.

5. **[#12977](https://github.com/QwenLM/qwen-code/pull/12977)** — *feat(sdk-java): Add audited Hosted Workspace operator recovery*. Offline `workspace-recovery inspect|prepare|complete` for a Linux durable worker whose partial Shell capture pinned its lease.

6. **[#13067](https://github.com/QwenLM/qwen-code/pull/13067)** — *fix(cli): do not read a Ctrl modifier on a named key as Ctrl + a letter*. Fixes #13068; named keys with Ctrl now emit their normal escape sequence.

7. **[#13061](https://github.com/QwenLM/qwen-code/pull/13061)** — *test(managed-agent): gate provider retries and release ordering*. Real Spring Broker, Workspace transport, packaged-worker and MySQL/MariaDB gates for the FG6f provider-control portion.

8. **[#13029](https://github.com/QwenLM/qwen-code/pull/13029)** — *fix(core): keep delivered notification turns out of ACP rewind ordinals*. Prevents background-notification turns from corrupting positional prompt rewind counting.

9. **[#12789](https://github.com/QwenLM/qwen-code/pull/12789)** — *fix(core): honor usage-statistics opt-out for extension lifecycle events*. A throwaway `Config` in `ExtensionManager` was bypassing the resolved opt-out and proxy.

10. **[#12995](https://github.com/QwenLM/qwen-code/pull/12995)** — *test(managed-agent): Pin M4 close anchors and the published definition*. Addresses non-blocking review follow-ups from #12935 (M4 slice); tests only.

*Also active:* [#13032](https://github.com/QwenLM/qwen-code/pull/13032) (de-flake turn-claim tests), [#12985](https://github.com/QwenLM/qwen-code/pull/12985) (`--include-tools/--exclude-tools` comma splitting), [#12130](https://github.com/QwenLM/qwen-code/pull/12130) / [#12129](https://github.com/QwenLM/qwen-code/pull/12129) (mobile Phase 2: save picker, accessibility).

---

## 5. Feature Request Trends

- **Managed Agent / Hosted Workspace maturation** — The single largest cluster. Durable session lifecycle, Turns/Actions, admission profiles, operator recovery, media delivery, and tool approvals all trace back to [#12380](https://github.com/QwenLM/qwen-code/issues/12380) and [#12867](https://github.com/QwenLM/qwen-code/issues/12867). This is the project's primary roadmap vector.
- **Token / context governance** — The #12028 umbrella spawns requests for bounded preload budgets, dynamic tool-surface selection, recall/success gates in CI, and smarter memory-extraction cadence (#13003, #13004, #13063). A clear, sustained demand for measurable context efficiency.
- **Event-driven / autonomous memory recall** — [#13063](https://github.com/QwenLM/qwen-code/issues/13063) asks for recall selection *during* long autonomous tool runs, not just at turn entry points — a shift toward continuous memory.
- **Mobile parity** — Phase 2 work (#12129, #12130) signals growing investment in the Android companion: system save picker, accessibility, connection actions.
- **Cross-language SDK expansion** — Java SDK managed runtime and audited recovery indicate first-class multi-language SDK support is becoming a priority.

---

## 6. Developer Pain Points

- **Runtime Broker hang / state-machine correctness** — A tight cluster of bugs where the Broker answers optimistically (`200 prepared`) for work that will never start, leaving provider clients waiting forever (#13059, #13060, #13040, #13042). Rooted in the recent `9cb9dc86e8` / #12868 merge; several fixes already in flight.
- **Unbounded per-Session resource growth** — [#13042](https://github.com/QwenLM/qwen-code/issues/13042) reports indexes that gain one entry per released Session and never shrink, a long-running-daemon memory leak.
- **Tool validation inconsistency** — [#12889](https://github.com/QwenLM/qwen-code/issues/12889) and [#12999](https://github.com/QwenLM/qwen-code/issues/12999) show the deferred `tool_call` bridge enforcing schema rules that many tool families never enforce themselves — a source of surprising empty-argument calls.
- **Terminal/shell input fidelity** — [#13068](https://github.com/QwenLM/qwen-code/issues/13068) (raw C0 bytes on Ctrl+named keys) and the long-open VP alignment issue ([#9305](https://github.com/QwenLM/qwen-code/pull/9305)) reflect recurring TUI polish debt.
- **Process lifecycle leaks** — [#13016](https://github.com/QwenLM/qwen-code/issues/13016) (orphaned relaunched CLI worker) is a P1 reliability concern for SDK/ACP hosts.
- **CI flakiness and release failures** — [#13017](https://github.com/QwenLM/qwen-code/issues/13017) (flaky Java fault gate), [#12714](https://github.com/QwenLM/qwen-code/issues/12714) (main CI failure), and [#13028](https://github.com/QwenLM/qwen-code/issues/13028) (VSCode Companion release failed) point to test/release infrastructure instability that repeatedly interrupts contributor flow.

---

*Digest generated from GitHub activity updated within the last 24 hours. Issue/PR counts shown are the top-N by comment count, not exhaustive.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI / Codewhale Community Digest — 2026-09-30

## Today's Highlights
No new releases landed in the last 24 hours. The biggest update is architecture-related: FEAT-029’s complete fourteen-command debug group merged into upstream `main` via PR #6707, as tracked in EPIC-005 (#5316), which remains the most-discussed issue in the set with 30 comments. A broad bug-hunt PR wave is also active across TUI input/rendering, task-store CPU contention, receipts, app-server daemon behavior, CLI/npm, runtime API, and shell process lifecycle.

## Hot Issues

1. **#5316 — EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)**  
   [Hmbown/Codewhale Issue #5316](https://github.com/Hmbown/Codewhale/issues/5316)  
   The main architecture tracking issue for decomposing the TUI crate. FEAT-029 landed on 2026-09-29 and merged the full debug command group via PR #6707. Community reaction is concentrated here: 30 comments, 0 👍.

2. **#6427 — 0.10.0 regression: multiline paste on Windows Terminal self-submits one message per line**  
   [Hmbown/Codewhale Issue #6427](https://github.com/Hmbown/Codewhale/issues/6427)  
   Closed regression report that #5981 was re-broken for the named terminal class. Important for Windows Terminal users and terminal-input reliability. 4 comments.

3. **#6573 — Multiple TUI sessions contend on Subagents Store → CPU spin-loop**  
   [Hmbown/Codewhale Issue #6573](https://github.com/Hmbown/Codewhale/issues/6573)  
   Reports idle Codewhale processes pinning CPU when multiple TUI sessions contend on the subagents store. Likely cross-platform despite FreeBSD report. Directly addressed by PR #6778. 1 comment.

4. **#6728 — CPU Usage Regression: v0.9.12 idle → v0.9.13 moderate → v0.10.0 heavy**  
   [Hmbown/Codewhale Issue #6728](https://github.com/Hmbown/Codewhale/issues/6728)  
   Binary-level performance regression analysis on FreeBSD 15.0. High-severity signal even with 0 comments: CPU usage worsened across three releases.

5. **#6746 — Web search: configured API providers lose fallback in DuckDuckGo-unreachable networks**  
   [Hmbown/Codewhale Issue #6746](https://github.com/Hmbown/Codewhale/issues/6746)  
   Configured API search providers tail into DuckDuckGo, whose Bing fallback does not cover connection failure. Matters for search reliability in restricted networks. 0 comments.

6. **#6747 — Model-facing text still names tools the current environment lacks (7 residual sites)**  
   [Hmbown/Codewhale Issue #6747](https://github.com/Hmbown/Codewhale/issues/6747)  
   Residual sites where model-facing text references tools the environment cannot dispatch. Important for tool-call correctness and weaker-model behavior. 0 comments.

7. **#6745 — Windows: shell tool fails under machine ExecutionPolicy**  
   [Hmbown/Codewhale Issue #6745](https://github.com/Hmbown/Codewhale/issues/6745)  
   PowerShell shell tool is blocked by machine/Group Policy; proposal is process-scoped `-ExecutionPolicy Bypass`. A Windows enterprise adoption blocker. 0 comments.

8. **#6700 — Expose stream retry budgets and transport timeouts as configuration**  
   [Hmbown/Codewhale Issue #6700](https://github.com/Hmbown/Codewhale/issues/6700)  
   Retry/timeout parameters are compiled in as `const`, leaving operators on flaky/proxy’d networks no tuning surface. 1 comment.

9. **#6699 — Turn fails with no retry when the SSE request never receives response headers**  
   [Hmbown/Codewhale Issue #6699](https://github.com/Hmbown/Codewhale/issues/6699)  
   Closed report: a network failure while opening the response stream terminates the interactive turn without retry, unlike other failure modes. 2 comments.

10. **#6705 — opencode-zen: 58 of 111 catalog models fail closed as “unproven endpoint”**  
   [Hmbown/Codewhale Issue #6705](https://github.com/Hmbown/Codewhale/issues/6705)  
   Closed issue on stale curated wire list causing many provider models to be refused. Highlights provider catalog maintenance risk. 0 comments.

## Key PR Progress

1. **#6773 — fix(web): run the website agents on deepseek-flash (V4.1 Flash)**  
   [Hmbown/Codewhale PR #6773](https://github.com/Hmbown/Codewhale/pull/6773)  
   Switches website DeepSeek callers from `deepseek-v4-flash` to `deepseek-flash`, covering community triage, PR review, stale, dupes, digest, content-watch drafts, and the curated “Today’s Dispatch” cron.

2. **#6778 — fix(tasks): answer idle task listings from memory instead of the shared store lock**  
   [Hmbown/Codewhale PR #6778](https://github.com/Hmbown/Codewhale/pull/6778)  
   Second slice for #6573: stops the TUI task panel from polling the shared store every 2.5s, following #6677’s worker-polling fix.

3. **#6735 — Supervise extension hosts and add a tested authoring workflow**  
   [Hmbown/Codewhale PR #6735](https://github.com/Hmbown/Codewhale/pull/6735)  
   Recovers reviewed extensions after host crashes, supervises heartbeats, retires hung processes, and replays only still-authorized owners with fresh tokens.

4. **#6777 — fix: pager whitespace and wrap width, iterative /tree render, macOS sleep inhibitor lifetime**  
   [Hmbown/Codewhale PR #6777](https://github.com/Hmbown/Codewhale/pull/6777)  
   Four verified bug-hunt findings across `pager.rs`, `session_tree.rs`, and `sleep_guard.rs`.

5. **#6768 — fix(snapshot,subagent): serialize side-repo writes, keep undo under size pressure, clean up worktrees**  
   [Hmbown/Codewhale PR #6768](https://github.com/Hmbown/Codewhale/pull/6768)  
   Six verified snapshot/subagent-state findings, with regression tests failing when fixes are disabled.

6. **#6776 — fix(tui): composer input correctness**  
   [Hmbown/Codewhale PR #6776](https://github.com/Hmbown/Codewhale/pull/6776)  
   Fixes multibyte clicks, oversized submit, paste order, mentions, history, and attachments in the composer.

7. **#6760 — fix(receipts): recover interrupted append tails without reviving approvals**  
   [Hmbown/Codewhale PR #6760](https://github.com/Hmbown/Codewhale/pull/6760)  
   Makes interrupted receipt writes recoverable without changing the log or reviving previously denied approvals.

8. **#6774 — fix(cli,npm): exit codes, hidden key prompt, config and alias routing, wrapper signals and download timeouts**  
   [Hmbown/Codewhale PR #6774](https://github.com/Hmbown/Codewhale/pull/6774)  
   Bug-hunt lane for CLI and npm wrapper behavior, including signal handling and download timeout fixes.

9. **#6748 — fix(web): gate public digest on maintainer approval; keep resolved community drafts resolved**  
   [Hmbown/Codewhale PR #6748](https://github.com/Hmbown/Codewhale/pull/6748)  
   Prevents `/digest` from presenting unreviewed model output as maintainer-approved and preserves resolved community drafts.

10. **#6755 — fix(tui): require deliberate approval dialog input**  
    [Hmbown/Codewhale PR #6755](https://github.com/Hmbown/Codewhale/pull/6755)  
    Hardens elevation dialogs: starts on Abort, ignores stale/modified/non-press keys, and requires deliberate unmodified input to grant.

## Feature Request Trends

- **TUI UX correctness and polish:** composer input, multiline paste, pager rendering, `/tree` rendering, jump-to-latest button, text background, and todo-list manageability. Examples: [#6427](https://github.com/Hmbown/Codewhale/issues/6427), [#6697](https://github.com/Hmbown/Codewhale/issues/6697), [#6704](https://github.com/Hmbown/Codewhale/issues/6704), [#6546](https://github.com/Hmbown/Codewhale/issues/6546).
- **Performance and resource contention:** CPU spin-loops, idle polling, subagents store contention, and release-to-release CPU regressions. Examples: [#6573](https://github.com/Hmbown/Codewhale/issues/6573), [#6728](https://github.com/Hmbown/Codewhale/issues/6728).
- **Configurable operability:** stream retry budgets, transport timeouts, provider descriptors, web-search fallback, and catalog freshness. Examples: [#6700](https://github.com/Hmbown/Codewhale/issues/6700), [#6746](https://github.com/Hmbown/Codewhale/issues/6746), [#6695](https://github.com/Hmbown/Codewhale/issues/6695), [#6705](https://github.com/Hmbown/Codewhale/issues/6705).
- **Platform compatibility:** Windows ExecutionPolicy and Windows Terminal behavior, macOS sleep inhibitor lifetime, FreeBSD reports, and ConPTY/app-server terminal contracts. Examples: [#6745](https://github.com/Hmbown/Codewhale/issues/6745), [#6427](https://github.com/Hmbown/Codewhale/issues/6427), [#6160](https://github.com/Hmbown/Codewhale/issues/6160).
- **Hooks and extension receipts:** structured execution receipts, post-admission receipts, and extension host supervision. Examples: [#6582](https://github.com/Hmbown/Codewhale/issues/6582), [#6689](https://github.com/Hmbown/Codewhale/issues/6689), [#6735](https://github.com/Hmbown/Codewhale/pull/6735).
- **Architecture and decomposition:** TUI crate decomposition, portable debug command groups, and deferred tool dispatch. Examples: [#5316](https://github.com/Hmbown/Codewhale/issues/5316), [#6706](https://github.com/Hmbown/Codewhale/issues/6706), [#6494](https://github.com/Hmbown/Codewhale/issues/6494).
- **Community/agent presence:** agent presence chips, side chats, activity receipts, and deterministic audiovisual pet behavior across surfaces. Examples: [#6322](https://github.com/Hmbown/Codewhale/issues/6322), [#6109](https://github.com/Hmbown/Codewhale/issues/6109).
- **Install/onboarding:** one smooth install path across website app, marketplace plugin, and GitHub repo. Example: [#6303](https://github.com/Hmbown/Codewhale/issues/6303).

## Developer Pain Points

- **0.10.0 regressions:** multiline paste, CPU usage, TUI refresh, text background, and jump-button rendering all saw bug reports in this window.
- **CPU spin-loops and shared-store contention:** idle TUI processes and subagent/task polling continue to cause high CPU on multiple platforms.
- **Network recovery gaps:** SSE streams that fail before headers get no retry, while retry budgets and timeouts remain non-configurable.
- **Provider/catalog staleness:** `opencode-zen` model routing and web-search fallback chains both fail closed in common network/provider conditions.
- **Windows enterprise friction:** machine-level PowerShell ExecutionPolicy blocks the shell tool, and Windows Terminal paste behavior regressed.
- **Unclear or broken task management:** users cannot reliably clear todo lists or manage tasks through known menu items.
- **Cryptic shell failures:** lock timeouts surface as “operation binding shell:<id> is not registered” instead of actionable errors.
- **Model-facing tool references:** residual text still names tools unavailable in the current environment, risking bad dispatch and model loops.
- **CI and workspace gate instability:** shared-process workspace gate fails on clean `main` while nextest CI passes, plus Windows extension-host handshake flakes.
- **Session reliability under pressure:** emergency compaction can interrupt or impact `save session` workflows, and interrupted receipts previously risked session/checkpoint load failures.

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

## ComfyUI Community Digest — 2026-09-30

### Today's Highlights
ComfyUI shipped **v0.38.0**, focused on Qwen 2.1 performance: improved KV cache location logic, compiled Qwen Image 2.1 transformer blocks, and support for model files declaring which attention implementation to use. The community is also reacting to a serious **security report** (#16631) where a custom node package installed via ComfyUI-Manager allegedly delivered a RAT and cryptominer. Meanwhile, a long-running **CUDA OOM regression** (#15255) remains the most-commented issue, with 71 comments and an official workaround.

---

### Releases
**v0.38.0** — Qwen 2.1 and attention metadata update:
- Improve Qwen 2.1 KV cache location logic — [PR #16429](https://github.com/Comfy-Org/ComfyUI/pull/16429)
- Compile Qwen Image 2.1 transformer blocks — [PR #16430](https://github.com/Comfy-Org/ComfyUI/pull/16430)
- Allow model files to contain which attention should be used

---

### Hot Issues

1. **[#15255](https://github.com/Comfy-Org/ComfyUI/issues/15255) — Dynamic VRAM streaming crashes with CUDA OOM (71 comments, 0 👍)**  
   A regression since the Aug 3 2026 update causes `HostBuffer.read_file_slice failed` and CUDA OOM across generations. Maintainers note it is a CUDA error reported to NVIDIA and suggest `--cuda-device 0` or `--disable-pinned-memory` as workarounds. This is the highest-engagement issue of the day and a major stability concern.

2. **[#12619](https://github.com/Comfy-Org/ComfyUI/issues/12619) — Workflows empty when switching to another workflow (11 comments, 2 👍)**  
   A persistent UI/state bug where workflows appear empty after switching. Community members have confirmed it survives disabling custom nodes, making it a core workflow reliability issue.

3. **[#16631](https://github.com/Comfy-Org/ComfyUI/issues/16631) — Security report: champdev-comfyui-nodes infected victim with RAT + cryptominer (3 comments, 1 👍)**  
   A Windows ComfyUI Desktop user installed `champdev-comfyui-nodes v0.5.2` from the Comfy Registry via ComfyUI-Manager and was compromised for at least 9 days. The report includes RCE nodes, telemetry to an attacker-controlled domain, and IOCs. This is a critical supply-chain warning for the custom node ecosystem.

4. **[#16587](https://github.com/Comfy-Org/ComfyUI/issues/16587) — MiniMax H3 FL2VA on DGX Spark GB10 causes whole-host loss (4 comments)**  
   A single-GPU DGX Spark became unresponsive during 864×480 T2V after earlier successful runs. The severity — whole-host loss — makes this a high-priority hardware/software interaction bug for MiniMax H3 users.

5. **[#16589](https://github.com/Comfy-Org/ComfyUI/issues/16589) — MiniMax H3 Ref2VA reference-fidelity regression (7 comments)**  
   Users report major loss of visual identity and spatial structure compared to expected behavior, despite identical workflows and model files. This matters for production video workflows relying on reference conditioning.

6. **[#15264](https://github.com/Comfy-Org/ComfyUI/issues/15264) — Subgraph KSampler previews disappear after update (5 comments, 3 👍)**  
   A regression introduced after v0.28.x removes KSampler previews in subgraphs. The community reaction includes multiple confirmations and upvotes, signaling a notable UI regression.

7. **[#16607](https://github.com/Comfy-Org/ComfyUI/issues/16607) — Oversharpened/noisy output with Qwen Image 2.1 Edit (4 comments, closed)**  
   Closed after user reports of degraded edit quality. Its closure suggests a fix or resolution path, but the issue highlights ongoing tuning needs for Qwen Image 2.1 Edit.

8. **[#16526](https://github.com/Comfy-Org/ComfyUI/issues/16526) — AMD ROCm `hipErrorInvalidValue` in SDPA for Anima models (3 comments)**  
   Reproduces on gfx1201 with torch 2.13.0+rocm10.0.0 and a minimal graph, with no custom nodes involved. This is a platform-specific blocker for AMD users running Anima models.

9. **[#15043](https://github.com/Comfy-Org/ComfyUI/issues/15043) — Expand `extra_model_paths` to include other folders (7 comments)**  
   A feature request to extend path configuration beyond models and the `/models` folder to input, output, and workflow directories. It reflects a recurring desire for more flexible, user-defined path layouts.

10. **[#16653](https://github.com/Comfy-Org/ComfyUI/issues/16653) — `_gated_residual` breaks Qwen-Image-2.1 training path (0 comments)**  
    A technical bug where an in-place residual update breaks backward passes in `comfy/ldm/qwen_image21/model.py`. It has an immediate companion PR (#16654), showing rapid maintainer/community attention.

---

### Key PR Progress

1. **[#16047](https://github.com/Comfy-Org/ComfyUI/pull/16047) — Node API SDK 2.0: ref-based node execution with a provider seam**  
   Introduces `comfy_api.latest` SDK 2.0, where nodes hold ref handles instead of buffers and execute through an `ExecutionPlan` provider seam. This is a foundational change for custom node authors.

2. **[#16656](https://github.com/Comfy-Org/ComfyUI/pull/16656) — Enforce V2 custom-node runtime profiles**  
   Selects converted packs through their V2 entrypoint when the manifest declares a V2 runtime profile, while preserving the legacy entrypoint for ordinary local packs.

3. **[#16654](https://github.com/Comfy-Org/ComfyUI/pull/16654) — Fix in-place gated residual breaking Qwen-Image-2.1 training**  
   Closes #16653 by preventing `_gated_residual` from updating the residual stream in place across 32 blocks, which was breaking tensor backward reads.

4. **[#16619](https://github.com/Comfy-Org/ComfyUI/pull/16619) — Fix live weight casts overwritten during async offload**  
   Addresses a bug where `--async-offload 1` reuses one cast buffer per stream even when an earlier cast is still live, producing incorrect outputs for Lumina/Z-Image and similar models.

5. **[#16647](https://github.com/Comfy-Org/ComfyUI/pull/16647) — [Partner Nodes] Add Anthropic Sonnet 5.5 model**  
   Adds a new API node for Anthropic Sonnet 5.5, with pricing and billing checklist updates. This expands the partner node ecosystem for hosted model workflows.

6. **[#16657](https://github.com/Comfy-Org/ComfyUI/pull/16657) — Support LynnReal light MiniMax-H3 VAE**  
   Adds loading and use of pruned H3 VAEs, such as LynnReal-Onmi-light-vae. This is a direct response to community interest in lighter H3 video VAEs.

7. **[#15474](https://github.com/Comfy-Org/ComfyUI/pull/15474) — XPU fixes: VAE no_grad, execution-layer VRAM prep, H3 synchronize, .gguf support**  
   Fixes large video VAE OOM on Intel Arc XPU by adding `torch.no_grad()` to VAE decode paths and improves MiniMax H3 first-forward synchronization. Important for Intel Arc users.

8. **[#16660](https://github.com/Comfy-Org/ComfyUI/pull/16660) — Restructure README, add docs/installation.md**  
   Reduces the README from 439 lines with five H1 headings to 120 lines with one H1, moving installation detail into dedicated docs. Improves onboarding and maintainability.

9. **[#16456](https://github.com/Comfy-Org/ComfyUI/pull/16456) — Bump comfyui-frontend-package to 1.54.7**  
   Automated frontend package bump from v1.53.6 to v1.54.7, keeping the bundled UI current with upstream fixes.

10. **[#14215](https://github.com/Comfy-Org/ComfyUI/pull/14215) — Avoid ROCm Conv3d crash in Qwen35 vision patch embedding**  
    Replaces the problematic Conv3d path with an equivalent linear projection to avoid segfaults on ROCm when using reference images. Valuable for AMD users running Qwen35/HiDream workflows.

---

### Feature Request Trends
- **More flexible path configuration**: Requests to expand `extra_model_paths` beyond models (#15043) and to expose `custom_nodes` as a separate launch flag instead of YAML-only configuration (#16649).
- **Broader node input type support**: Extend Start Loop to accept Latent, Image, Audio, and other non-string types (#16648).
- **Model and API expansion**: New partner model support such as Anthropic Sonnet 5.5 (#16647) and pruned/lightweight MiniMax H3 VAE variants (#16657).
- **Training and fine-tuning support**: Fixes for Qwen-Image-2.1 training paths (#16653/#16654) suggest growing demand for training-oriented workflows.
- **Predictable scheduling controls**: Requests for more consistent `start_percent` / `end_percent` step selection across nodes (#16156).

---

### Developer Pain Points
- **VRAM and CUDA stability**: The `HostBuffer.read_file_slice` CUDA OOM regression (#15255) is the dominant pain point, with 71 comments and workarounds required for multi-GPU and pinned-memory setups.
- **Workflow state and UI regressions**: Empty workflows when switching (#12619), disappearing subgraph KSampler previews (#15264), broken copy-paste for Qwen text encode nodes (#16562), and right-click save issues on workflow tabs (#16651).
- **Model-specific failures**: MiniMax H3 host loss (#16587), reference-fidelity regression (#16589), and attention stride limits (#16617); Qwen-Image-2.1 training breakage (#16653); Wan 2.2 MPS corrupt frames (#16644).
- **Platform fragmentation**: AMD ROCm SDPA errors (#16526) and Conv3d crashes (#14215); Apple Silicon MPS corruption (#16644); Intel XPU VAE OOM fixes (#15474).
- **Asset catalogue fragility**: Scans abort or lose history when folders are missing, renamed, symlinked, or numerous (#16645, #16646, #16650, #16652, #16658).
- **Supply-chain security**: The RAT/cryptominer report (#16631) underscores risks in installing unvetted custom nodes from the registry.
- **Media encoding robustness**: `SaveVideo` can fail entire prompts on invalid audio tensors via `avcodec_send_frame(22)` (#13192).
- **Timestep scheduling inconsistency**: `start_percent` evaluates to different steps across nodes and model setups (#16156), complicating reproducible pipelines.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Community Digest — 2026-09-30

## 1. Today's Highlights
Ollama shipped `v0.35.1-rc0`, headlined by a new limit of ten web searches per response and version bumps for MLX and `llama.cpp`. The community remains focused on expanding multimodal input, especially audio, while System One model support advances across several PRs. Critical bug reports around tool-call parsing, runner hangs, and release labeling continue to drive discussion.

## 2. Releases
**v0.35.1-rc0** — [Release link](https://github.com/ollama/ollama/releases/tag/v0.35.1-rc0)
- Allow ten web searches per response — [PR #18602](https://github.com/ollama/ollama/pull/18602)
- MLX version bump — [PR #18651](https://github.com/ollama/ollama/pull/18651)
- `llama.cpp` version bump to b11232 — [PR #18652](https://github.com/ollama/ollama/pull/18652)

## 3. Hot Issues

- **[#11798 — Add Audio Input Support for Multimodal Models](https://github.com/ollama/ollama/issues/11798)** *(16 comments, 40 👍)*  
  Top-voted feature request. Would let models like Qwen2-Audio process audio alongside text, matching existing image input support. Strong community demand for broader multimodal capabilities.

- **[#18706 — Is 0.35.0 a pre-release?](https://github.com/ollama/ollama/issues/18706)** *(11 comments, closed)*  
  Users noticed `v0.35.0` is marked as a pre-release without an `-rc` suffix. The rapid discussion highlights ongoing confusion around release labeling and version semantics.

- **[#1653 — Shell autocompletion](https://github.com/ollama/ollama/issues/1653)** *(9 comments, 34 👍)*  
  Long-standing request to add shell autocompletion for the Ollama CLI. High upvote count and repeated comments show this is a persistent developer-experience gap.

- **[#18193 — Cloud glm-5.3 enters endless reasoning and aborts tasks](https://github.com/ollama/ollama/issues/18193)** *(8 comments, 5 👍)*  
  Reports that `glm-5.3:cloud` loops in reasoning and aborts tasks via Ollama Cloud, while the official Z.AI API works normally. Matters for cloud reliability and agentic workflows.

- **[#9774 — Estimate VRAM needs based on context length and quantization](https://github.com/ollama/ollama/issues/9774)** *(5 comments)*  
  Requests VRAM guidance on Ollama.com for different `num_ctx` and quantization settings. Important for users planning local deployments and avoiding OOM errors.

- **[#18594 — System 1 Models](https://github.com/ollama/ollama/issues/18594)** *(4 comments, 7 👍)*  
  Asks for support of “System 1” models such as Kev and Laya. Aligns with recent PR activity around decision-only and System One model scheduling.

- **[#17428 — Embedding runner stuck in `Stopping...` on macOS Apple Silicon](https://github.com/ollama/ollama/issues/17428)** *(4 comments)*  
  `qwen3-embedding:4b` runner hangs while the server stays healthy; `/api/embed` requests time out. A follow-up to earlier embedding reliability reports.

- **[#18507 — Windows 11 tray app shows icon but never starts server](https://github.com/ollama/ollama/issues/18507)** *(4 comments, closed)*  
  Manual `ollama serve` works, but the tray app fails to start the server. Highlights Windows desktop reliability, especially after recent OS security updates.

- **[#18685 — `llama-server` wedges on full-cache-hit task; later requests hang](https://github.com/ollama/ollama/issues/18685)** *(3 comments)*  
  On Linux/CUDA, a model’s `llama-server` occasionally wedges and all subsequent requests hang until unload. Critical for production and long-running sessions.

- **[#16049 — Generate completion API hangs with certain models](https://github.com/ollama/ollama/issues/16049)** *(3 comments)*  
  `qwen3.5:2b` hangs on macOS while `llama3.2:3b` completes in under 2s. Model-specific hang reports remain a recurring theme.

## 4. Key PR Progress

- **[#18711 — create: make explicit capabilities exhaustive at create and runtime](https://github.com/ollama/ollama/pull/18711)**  
  Preserves inference when capabilities are omitted and allows decision-only System One models. Follow-up to #18708.

- **[#18700 — app: make chat history read-only and add exports](https://github.com/ollama/ollama/pull/18700)**  
  Desktop app chats become read-only, with markdown export for individual chats and bulk export. A significant shift in desktop app behavior.

- **[#18701 — mlx: System One support](https://github.com/ollama/ollama/pull/18701)**  
  Adds MLX backend support for SystemOne models, including test coverage.

- **[#18702 — docs: document System One API](https://github.com/ollama/ollama/pull/18702)**  
  Adds a Decision guide and System One API reference with examples for choice, yes/no, and scoring questions.

- **[#18708 — create: support explicit model capabilities](https://github.com/ollama/ollama/pull/18708)** *(closed)*  
  Introduces `CAPABILITY` declarations in Modelfiles and additive capabilities in create requests. Foundational for System One scheduling.

- **[#18578 — cmd/server: add `ollama export` and `ollama import` commands](https://github.com/ollama/ollama/pull/18578)**  
  Adds model export/import commands and `/api/export`, `/api/import` endpoints. Closes #17115 and improves offline/air-gapped model transfer.

- **[#17972 — Add GraniteForCausalLM support in experimental models and mlxrunner](https://github.com/ollama/ollama/pull/17972)**  
  Adds dense `GraniteForCausalLM` architecture in the MLX backend for Granite 4.1/4.2 models.

- **[#18684 — cli: adaptive Simplified Chinese localization](https://github.com/ollama/ollama/pull/18684)**  
  Adds opt-in/out bilingual CLI mode: Simplified Chinese when the environment indicates Chinese, English elsewhere.

- **[#18624 — qwen3.5: a tool call can open before the thinking channel is closed](https://github.com/ollama/ollama/pull/18624)**  
  Fixes a parser state bug where partial tag matching can cause tool calls to be misparsed when chunk boundaries land inside tool-call bodies.

- **[#18281 — llm: send assistant thinking to the chat template](https://github.com/ollama/ollama/pull/18281)**  
  Ensures the `Thinking` field is included in outbound chat messages, improving reasoning-model template correctness.

## 5. Feature Request Trends
- **Multimodal input expansion** — Audio input is the most upvoted request; users want parity with image inputs for models like Qwen2-Audio.
- **CLI and shell ergonomics** — Shell autocompletion and tab completion remain long-standing requests, alongside new localization work.
- **VRAM and resource estimation** — Users want context-length and quantization-aware VRAM guidance on Ollama.com.
- **System 1 / decision models** — Growing interest in decision-only models and explicit capability declarations.
- **Cloud reliability and billing** — Requests and bugs around Ollama Cloud model behavior, billing flows, and support responsiveness.
- **Desktop app UX** — Chat history resizing, export options, and better Claude Desktop integration are recurring themes.
- **Installer robustness** — The install script’s behavior on poor connections is a recurring pain point.

## 6. Developer Pain Points
- **Release versioning confusion** — `v0.35.0` being marked pre-release without `-rc` caused immediate community discussion.
- **Model-specific hangs and wedges** — Embedding runners, `llama-server` cache-hit tasks, and certain Qwen models hang or wedge under specific conditions.
- **Tool-call parsing fragility** — Multiple reports and PRs around Qwen3Coder, Qwen3.5, and Gemma4 parsers mishandling XML, thinking tags, or truncated tool calls.
- **API parameter overrides** — `/v1/chat/completions` injecting `top_p: 1.0` when omitted silently overrides Modelfile parameters.
- **Installer failures** — The `.sh` installer fails repeatedly on poor internet connections and does not resume downloads.
- **Billing and support loops** — Accounts stuck in automated Stripe retry loops with unresponsive support block cloud usage.
- **Windows and CUDA discovery issues** — Tray app server startup failures and intermittent empty `--list-devices` output on Windows.
- **Desktop app limitations** — Chat history column not resizable on macOS, and “Restart Claude Desktop” toggles silently reverting.
- **Runaway reasoning** — Models looping inside thinking blocks can burn the full context and return empty answers, as seen with `glm-5.3:cloud`.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

# llama.cpp Community Digest — 2026-09-30

## 1. Today’s Highlights

Nightly builds **b11249–b11262** delivered a mix of correctness, infrastructure, and backend work: AVX512-FP16 dot products now accumulate in F32, graph inputs are collected correctly for pipeline parallelism, the server invalidates its built-in UI service worker when the UI is not served, and Hexagon gains FP32 GELU_ERF/GEGLU_ERF support. The highest-engagement issue, [#21831](https://github.com/ggml-org/llama.cpp/issues/21831) (53 comments, 30 👍), closed after addressing forced full prompt reprocessing in `llama-server` tied to SWA/recurrent memory. Active community attention remains on performance regressions across Blackwell, SYCL, HIP/Strix Halo, and Vulkan, plus speculative-decoding correctness bugs.

## 2. Releases

Last 24h produced nightly tags **b11249–b11262**; no semantic version release was published.

- [b11262](https://github.com/ggml-org/llama.cpp/releases/tag/b11262) — `ggml`: accumulate f16 dot products in f32 on AVX512-FP16 ([#29545](https://github.com/ggml-org/llama.cpp/pull/29545)); supersedes [#29530](https://github.com/ggml-org/llama.cpp/pull/29530).
- [b11261](https://github.com/ggml-org/llama.cpp/releases/tag/b11261) — `ggml`: require input tensors to be `GGML_OP_NONE` ([#29647](https://github.com/ggml-org/llama.cpp/pull/29647)).
- [b11260](https://github.com/ggml-org/llama.cpp/releases/tag/b11260) — `hexagon`: add FP32 GELU_ERF and GEGLU_ERF support ([#29631](https://github.com/ggml-org/llama.cpp/pull/29631)).
- [b11259](https://github.com/ggml-org/llama.cpp/releases/tag/b11259) — `common`: stop accepting draft tokens at EOG ([#29638](https://github.com/ggml-org/llama.cpp/pull/29638)).
- [b11258](https://github.com/ggml-org/llama.cpp/releases/tag/b11258) — `server`: remove built-in UI service worker when UI is not served ([#29565](https://github.com/ggml-org/llama.cpp/pull/29565)).
- [b11257](https://github.com/ggml-org/llama.cpp/releases/tag/b11257) — `common`: use `fs::path` for config dir ([#29649](https://github.com/ggml-org/llama.cpp/pull/29649)).
- [b11256](https://github.com/ggml-org/llama.cpp/releases/tag/b11256) — `tests`: adjust server string regex to match M2 Ultra results ([#29648](https://github.com/ggml-org/llama.cpp/pull/29648)).
- [b11255](https://github.com/ggml-org/llama.cpp/releases/tag/b11255) — `common`: add `fs_write_atomic()` ([#29642](https://github.com/ggml-org/llama.cpp/pull/29642)).
- [b11254](https://github.com/ggml-org/llama.cpp/releases/tag/b11254) — `ggml`: collect all input tensors into `graph_inputs` ([#29634](https://github.com/ggml-org/llama.cpp/pull/29634)).
- [b11249](https://github.com/ggml-org/llama.cpp/releases/tag/b11249) — `llama`: fix init in several tools/examples ([#29632](https://github.com/ggml-org/llama.cpp/pull/29632)).

## 3. Hot Issues

- [#21831](https://github.com/ggml-org/llama.cpp/issues/21831) — **CLOSED**, 53 comments, 30 👍. Server forces full prompt re-processing on subsequent requests (SWA/recurrent memory error). Why it matters: directly affects server caching, latency, and memory correctness. Community reaction: highest engagement in the window; closure suggests a long-standing blocker is resolved.
- [#26674](https://github.com/ggml-org/llama.cpp/issues/26674) — **OPEN**, 15 comments. Gemma 4 tg128 performance on RTX 5060 Ti Blackwell appears abnormally low. Why it matters: Blackwell users report poor token generation versus other architectures. Reaction: active investigation, no upvotes yet.
- [#25452](https://github.com/ggml-org/llama.cpp/issues/25452) — **CLOSED**, 13 comments. DSV4-Flash churned-reuse SWA KV-cache exhaustion crash/stall. Why it matters: multi-GPU KV-cache lifecycle under reuse/speculation. Reaction: closed after active debugging.
- [#25973](https://github.com/ggml-org/llama.cpp/issues/25973) — **OPEN**, 13 comments. SYCL backend shows bad performance on newer oneAPI. Why it matters: Intel GPU users are blocked from expected throughput. Reaction: ongoing backend-specific investigation.
- [#28541](https://github.com/ggml-org/llama.cpp/issues/28541) — **OPEN**, 10 comments. RFC: image, video, and audio generation from diffusion GGUFs (LTX-2). Why it matters: signals demand for multimodal/diffusion support beyond text/vision. Reaction: design-level discussion.
- [#28158](https://github.com/ggml-org/llama.cpp/issues/28158) — **OPEN**, 9 comments, 2 👍. Qwen3.8 DFlash/MTP speculative emits OOB token id == `n_vocab` on Vulkan. Why it matters: speculative decoding correctness and tokenizer boundary handling. Reaction: upvoted, Vulkan-specific.
- [#24437](https://github.com/ggml-org/llama.cpp/issues/24437) — **CLOSED**, 8 comments. HIP `GGML_HIP_ROCWMMA_FATTN=ON` causes severe prefill regression on gfx1151 Strix Halo, up to −41% at long context. Why it matters: AMD flash-attention performance regression. Reaction: closed after diagnosis.
- [#25117](https://github.com/ggml-org/llama.cpp/issues/25117) — **OPEN**, 8 comments. DFlash performance regression on AMD APU + quantized MoE target: ~2× slower than baseline. Why it matters: speculative decoding on Strix Halo remains costly. Reaction: active perf thread.
- [#26497](https://github.com/ggml-org/llama.cpp/issues/26497) — **OPEN**, 7 comments, 4 👍. UI bug: configured MCP servers no longer show in WebUI. Why it matters: user-visible server configuration regression. Reaction: community upvotes show impact.
- [#29551](https://github.com/ggml-org/llama.cpp/issues/29551) — **CLOSED**, 6 comments. Builds b11222 and later crash unless `-dev` is specified. Why it matters: recent Windows `llama-cli` release blocker. Reaction: quick closure after regression report.

## 4. Key PR Progress

- [#29530](https://github.com/ggml-org/llama.cpp/pull/29530) — **CLOSED**. Revert “ggml: add native AVX512-FP16 support for F16 operations” due to FP16 accumulator overflow. Critical numerical correctness fix; superseded by b11262/#29545.
- [#29671](https://github.com/ggml-org/llama.cpp/pull/29671) — **OPEN**. AMX: fix batched `mul_mat` weight broadcast and byte offsets. Fixes hybrid Qwen3.5/3.6 `ssm_out` paths with multiple sequences per ubatch.
- [#28243](https://github.com/ggml-org/llama.cpp/pull/28243) — **OPEN**. Models: Qwen3.8-Flash-Next MTP support. Enables 1.3–2× faster MTP and shared MTP modules to save disk/VRAM/RAM.
- [#28569](https://github.com/ggml-org/llama.cpp/pull/28569) — **OPEN**, merge ready. Re-enable `-sm tensor` for `qwen4exp`; addresses scheduler placement rather than QSA.
- [#29677](https://github.com/ggml-org/llama.cpp/pull/29677) — **OPEN**. Fix “invalid vector subscript” when loading on a completely full GPU. Addresses zero-free-VRAM layer split, often hit by draft models for MTP/EAGLE3/DFlash.
- [#29675](https://github.com/ggml-org/llama.cpp/pull/29675) — **OPEN**. Add BF16 unary, GLU, binary, and scale ops for CPU and CUDA. Groundwork for keeping activations in bf16.
- [#29679](https://github.com/ggml-org/llama.cpp/pull/29679) — **OPEN**. Vulkan: keep 4-row MMVQ only at 8 columns on RDNA3 AMD proprietary driver. Performance tuning after #27909.
- [#29165](https://github.com/ggml-org/llama.cpp/pull/29165) — **OPEN**. Vulkan: opt-in Adreno 750 matvec compatibility guard. Works around a proprietary driver shader-compiler segfault on Galaxy S24.
- [#26979](https://github.com/ggml-org/llama.cpp/pull/26979) — **CLOSED**, merge ready. GGUF: reject tensor size that wraps after padding. Robustness/security fix for malformed GGUF files.
- [#29575](https://github.com/ggml-org/llama.cpp/pull/29575) — **CLOSED**, merge ready. `ggml-cpu`: check row bounds in `get_rows_back`. Memory-safety fix for CPU backend operations.

Other notable PRs: [#29627](https://github.com/ggml-org/llama.cpp/pull/29627) ModernBERT reranker `classifier_pooling`, [#25940](https://github.com/ggml-org/llama.cpp/pull/25940) HIP RDNA4 `MUL_MAT` optimizations, [#29651](https://github.com/ggml-org/llama.cpp/pull/29651) CI models backend check.

## 5. Feature Request Trends

- **Diffusion and multimodal generation from GGUFs** — [#28541](https://github.com/ggml-org/llama.cpp/issues/28541) proposes image, video, and audio generation via LTX-2.
- **Better WebUI controls** — [#27118](https://github.com/ggml-org/llama.cpp/issues/27118) requests separate reasoning effort/strength and token-limit settings; [#26497](https://github.com/ggml-org/llama.cpp/issues/26497) asks for reliable MCP server configuration display.
- **Expanded model architecture support** — Qwen3.8-Flash-Next MTP [#28243](https://github.com/ggml-org/llama.cpp/pull/28243), GLM-5.3-Flash [#27773](https://github.com/ggml-org/llama.cpp/pull/27773), ModernBERT rerankers [#29627](https://github.com/ggml-org/llama.cpp/pull/29627), and Qwen3.5 hybrid conversion [#27019](https://github.com/ggml-org/llama.cpp/issues/27019).
- **Backend-specific acceleration and compatibility** — Hexagon f16/FP32 ops [#29209](https://github.com/ggml-org/llama.cpp/pull/29209)/[#29631](https://github.com/ggml-org/llama.cpp/pull/29631), AMX [#29671](https://github.com/ggml-org/llama.cpp/pull/29671), AVX512-FP16 [#29545](https://github.com/ggml-org/llama.cpp/pull/29545), Vulkan RDNA3/Adreno [#29679](https://github.com/ggml-org/llama.cpp/pull/29679)/[#29165](https://github.com/ggml-org/llama.cpp/pull/29165), CUDA BF16 [#29675](https://github.com/ggml-org/llama.cpp/pull/29675), HIP RDNA4 [#25940](https://github.com/ggml-org/llama.cpp/pull/25940).
- **Speculative decoding improvements and correctness** — DFlash/MTP issues [#28158](https://github.com/ggml-org/llama.cpp/issues/28158), [#25117](https://github.com/ggml-org/llama.cpp/issues/25117), [#26894](https://github.com/ggml-org/llama.cpp/issues/26894), plus EOG draft stopping in [#29638](https://github.com/ggml-org/llama.cpp/pull/29638).
- **Server/API robustness** — `/infill` token validation [#29458](https://github.com/ggml-org/llama.cpp/issues/29458), graceful shutdown [#29581](https://github.com/ggml-org/llama.cpp/issues/29581), service-worker cache cleanup [#29565](https://github.com/ggml-org/llama.cpp/pull/29565), CLI `mmproj` download [#28977](https://github.com/ggml-org/llama.cpp/pull/28977).
- **Memory management under full VRAM** — full-GPU load crashes [#28964](https://github.com/ggml-org/llama.cpp/issues/28964), [#27440](https://github.com/ggml-org/llama.cpp/issues/27440), addressed in PR [#29677](https://github.com/ggml-org/llama.cpp/pull/29677).

## 6. Developer Pain Points

- **Backend performance regressions** — Blackwell CUDA arm64 [#29341](https://github.com/ggml-org/llama.cpp/issues/29341), Gemma 4 on RTX 5060 Ti [#26674](https://github.com/ggml-org/llama.cpp/issues/26674), SYCL oneAPI [#25973](https://github.com/ggml-org/llama.cpp/issues/25973), HIP gfx1151 ROCWMMA [#24437](https://github.com/ggml-org/llama.cpp/issues/24437), DFlash AMD APU [#25117](https://github.com/ggml-org/llama.cpp/issues/25117), Vulkan A770 long-run degradation [#29526](https://github.com/ggml-org/llama.cpp/issues/29526).
- **Release/build regressions** — b11222+ crash unless `-dev` is passed [#29551](https://github.com/ggml-org/llama.cpp/issues/29551); Pascal GPU startup crash after b11222 [#29657](https://github.com/ggml-org/llama.cpp/issues/29657).
- **OOM / full-VRAM handling** — macOS Metal OOM on Gemma 4 31B [#29521](https://github.com/ggml-org/llama.cpp/issues/29521); “invalid vector subscript” with zero free VRAM [#28964](https://github.com/ggml-org/llama.cpp/issues/28964); `std::out_of_range` with zero free bytes [#27440](https://github.com/ggml-org/llama.cpp/issues/27440).
- **Speculative decoding bugs** — OOB token id on Vulkan [#28158](https://github.com/ggml-org/llama.cpp/issues/28158); DFlash drafter bind failure [#26894](https://github.com/ggml-org/llama.cpp/issues/26894); KV-cache exhaustion [#25452](https://github.com/ggml-org/llama.cpp/issues/25452).
- **Server/UI stability** — missing MCP servers in WebUI [#26497](https://github.com/ggml-org/llama.cpp/issues/26497); stale service-worker cache [#29565](https://github.com/ggml-org/llama.cpp/pull/29565); SIGTERM deadlock [#29581](https://github.com/ggml-org/llama.cpp/issues/29581); Windows EOF sending Ctrl+C [#29664](https://github.com/ggml-org/llama.cpp/issues/29664).
- **Hardware/driver fragmentation** — Vulkan device lost with ReBAR [#29623](https://github.com/ggml-org/llama.cpp/issues/29623); CUDA Volta invalid argument [#29255](https://github.com/ggml-org/llama.cpp/issues/29255); HIP SOLVE_TRI rocBLAS error [#27557](https://github.com/ggml-org/llama.cpp/issues/27557).
- **Conversion/quantization edge cases** — Qwen3.5 hybrid tensors [#27019](https://github.com/ggml-org/llama.cpp/issues/27019); GGUF padding wrap [#26978](https://github.com/ggml-org/llama.cpp/issues/26978).
- **Unbounded resource growth** — RPC node cache growth without bound [#26143](https://github.com/ggml-org/llama.cpp/issues/26143).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*