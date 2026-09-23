# AI CLI Tools Community Digest 2026-09-24

> Generated: 2026-09-23 22:15 UTC | Tools covered: 12

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



### Today's Highlights: Key AI Developer Tool Updates (2026-09-24)

1. **llama.cpp v0.5.0 Major Release**: This broad release focuses on backend performance and correctness, adding multi-address HTTP binding, ggml 0.25.0 improvements, and native support for HRM-Text, MiMo-V2.6, and HunyuanOCR models. [Link](https://github.com/ggml-org/llama.cpp/releases/tag/v0.5.0)
2. **Ollama v0.34.4-rc0**: This release fixes intermittent "model not found" server errors and applies structured outputs in a single pass on thinking models. It also addresses a regression causing high CPU usage when models are fully GPU-resident. [Link](https://github.com/ollama/ollama/releases/tag/v0.34.4-rc0)
3. **Claude Code v2.1.281**: Ships with Claude apps gateway enhancements for Desktop policy blocks and Bedrock IAM role support. It also merges a critical security fix (#96434) that keeps denied and secret files out of the security-guidance reviewer's model context. [Link](https://github.com/anthropics/claude-code)
4. **OpenAI Codex v0.156.1**: Adds GPT-6 Sol and GPT-6 Luna to the model picker, with Luna now recommended for rate-limit switching. The update also strengthens extension hooks for model requests and response streams. [Link](https://github.com/openai/codex/pull/47405)
5. **GitHub Copilot CLI v1.0.89-1**: Integrates GPT-6 Sol and GPT-6 Luna models, fixes the view tool to correctly honor line ranges, and resolves a local session UX bug where pressing "Up" failed to recall pending prompts. [Link](https://github.com/github/copilot-cli)
6. **Gemini CLI Nightly (v0.62.0-nightly.20260923)**: Promotes Gemini 3.8 Flash and Gemini 3.5 Flash Lite to the model picker. It also merges critical fixes bounding tool output sizes in long-running loops and decoupling tool confirmations from IDE diff RPCs to prevent UI freezes. [Link](https://github.com/google-gemini/gemini-cli)
7. **OpenCode ACP & IDE Integration**: Merges draft support for the ACP v2 specification and introduces native VS Code diff editor integration for edit and write permission approvals. [Link](https://github.com/anomalyco/opencode/pull/44524)
8. **Pi (pi-mono) Extension API & GPT-6 Limits**: Merges a major PR exposing provider stream events to extensions, closing a long-standing meta-issue about vendor-specific response field access. It also sets GPT-6 context windows to 1,050,000 tokens. [Link](https://github.com/earendil-works/pi/pull/9901)

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights
*Data as of 2026-09-24 · Source: github.com/anthropics/skills*

> Note: The PR extract is pre-sorted by comment volume, but raw comment counts are shown as `undefined`. The ranking below follows the provided comment-sorted order.

## 1. Top Skills Ranking

| Rank | Skill / PR | Functionality | Discussion Highlight | Status |
|---|---|---|---|---|
| 1 | [fix(skill-creator): isolate trigger evals and handle Windows/runtime failures #1298](https://github.com/anthropics/skills/pull/1298) | Fixes trigger evaluation false misses, Windows subprocess pipe failures, and runtime errors being misclassified as non-triggers. | Reliability of Skill trigger evaluation and optimization evidence. | OPEN |
| 2 | [feat(skills): add proofcore-contract-auditor #1771](https://github.com/anthropics/skills/pull/1771) | Web3 Agent Skill for static analysis of Solidity/Rust contracts and audit-proof anchoring on TON via Merkle protocol. | Novel blockchain/notarization use case for Skills. | OPEN |
| 3 | [fix(mcp-builder): support mcp>=2 streamable_http_client and custom headers #1742](https://github.com/anthropics/skills/pull/1742) | Updates MCP builder for `mcp>=2.0.0` API rename and custom HTTP header configuration. | Dependency compatibility for MCP Skill generation. | OPEN |
| 4 | [Add md2video-audio skill #1703](https://github.com/anthropics/skills/pull/1703) | Compiles Markdown into MP4 videos with realistic voiceovers via Marp. | Zero-cost media/document-to-video automation. | OPEN |
| 5 | [Detect orphaned docx comments #1734](https://github.com/anthropics/skills/pull/1734) | Detects orphaned comments in DOCX documents. | Document-quality and OOXML hygiene. | OPEN |
| 6 | [Add pyxel skill for retro game development #525](https://github.com/anthropics/skills/pull/525) | Creates, debugs, and verifies retro Python games with headless input and frame inspection. | Long-running proposal with sustained updates. | OPEN |
| 7 | [Add document-typography skill #514](https://github.com/anthropics/skills/pull/514) | Prevents orphan word wrap, widow paragraphs, and numbering misalignment in generated documents. | Universal typographic quality control. | OPEN |
| 8 | [Add scnet-hpc skill #1615](https://github.com/anthropics/skills/pull/1615) | Operates SCNet HPC clusters via profile-based SSH and Slurm workflows. | Scientific/HPC workflow automation. | OPEN |

## 2. Community Demand Trends

- **Security, trust, and governance** — The highest-comment issue is [Security: Community skills distributed under anthropic/ namespace enable trust boundary abuse #492](https://github.com/anthropics/skills/issues/492) with 43 comments. Related demand: [agent-governance #412](https://github.com/anthropics/skills/issues/412), [SharePoint security/context concerns #1175](https://github.com/anthropics/skills/issues/1175), and [Reasoning Quality Gate Pipeline #1385](https://github.com/anthropics/skills/issues/1385).
- **Distribution and org-wide sharing** — [Enable org-wide skill sharing in Claude.ai #228](https://github.com/anthropics/skills/issues/228) and [duplicate document-skills/example-skills installs #189](https://github.com/anthropics/skills/issues/189) show demand for managed skill libraries and clean packaging.
- **Evaluation and trigger reliability** — [run_eval.py never triggers skills #556](https://github.com/anthropics/skills/issues/556) and [skill-creator best-practice update #202](https://github.com/anthropics/skills/issues/202) reflect strong demand for dependable Skill invocation and authoring standards.
- **Context/token efficiency** — [claude-api eagerly injects ~156k tokens #1487](https://github.com/anthropics/skills/issues/1487) highlights demand for lazy-loading and token-aware Skills.
- **MCP/tooling interoperability** — [Expose Skills as MCPs #16](https://github.com/anthropics/skills/issues/16), [mcp-builder evaluation failure #1390](https://github.com/anthropics/skills/issues/1390), and [web-artifacts-builder pnpm issues #1362](https://github.com/anthropics/skills/issues/1362) point to deeper MCP and build-tool integration.
- **New Skill directions** — Agent memory/state ([compact-memory #1329](https://github.com/anthropics/skills/issues/1329)), governance, reasoning quality gates, enterprise/Bedrock support ([#29](https://github.com/anthropics/skills/issues/29)), and document/media automation.

## 3. High-Potential Pending Skills

These PRs are open, not yet merged, and recently active—making them likely candidates to land soon:

- [fix(docx): report LibreOffice timeout as an error and verify output #1792](https://github.com/anthropics/skills/pull/1792) — Updated 2026-09-23; fixes silent DOCX conversion success.
- [Add blast-radius skill #1776](https://github.com/anthropics/skills/pull/1776) — Updated 2026-09-18; checklist for destructive/bulk writes.
- [feat: add testing-patterns skill #723](https://github.com/anthropics/skills/pull/723) — Updated 2026-09-21; full testing stack guidance.
- [feat: add AWT (AI Watch Tester) E2E testing skill #822](https://github.com/anthropics/skills/pull/822) — Updated 2026-09-19; AI-powered browser/E2E testing.
- [fix(docx): create document.xml.rels when missing #1790](https://github.com/anthropics/skills/pull/1790) — Updated 2026-09-19; fixes comment relationship registration.
- [fix(skill-creator): isolate trigger evals and Windows/runtime failures #1298](https://github.com/anthropics/skills/pull/1298) — Updated 2026-09-16; core evaluation reliability.
- [feat(skills): proofcore-contract-auditor #1771](https://github.com/anthropics/skills/pull/1771) — Updated 2026-09-16; smart-contract audit Skill.
- [Add pyxel skill for retro game development #525](https://github.com/anthropics/skills/pull/525) — Updated 2026-09-22; sustained community interest.

## 4. Skills Ecosystem Insight

The community’s most concentrated demand is for **trustworthy, production-grade Skills infrastructure**—reliable trigger/evaluation behavior, secure distribution and governance, token efficiency, and seamless MCP/enterprise integration—more than for any single domain-specific Skill.

---



# Claude Code Community Digest — 2026-09-24

---

## 1. Today's Highlights

Claude Code v2.1.281 ships with Claude apps gateway enhancements for Desktop policy blocks and Bedrock IAM role support. On the security front, a notable PR closes a gap where the security-guidance reviewer could surface denied or secret files into model context. The community continues to grapple with a persistent IDE environment-contributions warning (#3301) that remains the most-discussed open bug, while a cluster of stale issues around Cowork rendering, MCP connectivity, and session recovery underscore lingering desktop and networking pain points.

---

## 2. Releases

### v2.1.281
- **Claude apps gateway — Desktop policy blocks:** Added support for newer Claude Desktop keys, including `blockReadsOutsideWorkingDirectories` and `disableBypassPermissionsMode`, enabling finer-grained sandboxing of Desktop-launched sessions.
- **Bedrock upstream `assume_role`:** The Claude apps gateway can now call Bedrock as an IAM role, simplifying credential management for organizations standardizing on role-based AWS access.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| **[#3301](https://github.com/anthropics/claude-code/issues/3301)** | **Environment Contributions warning continuously reappears** — On every open of Cursor or VSCode, users see "The following extensions want to relaunch the terminal to contribute to its environment: Claude Code." This is a persistent UX annoyance that disrupts workflow on every IDE launch. | **48 comments, 73 👍** — The highest-engagement open issue; clear signal of a long-standing UX regression that erodes trust in the IDE integration. |
| **[#91763](https://github.com/anthropics/claude-code/issues/91763)** | **Windows/MSIX: `git fsmonitor--daemon` blocks relaunch** — The daemon spawned by Claude Code inherits the AppX container job and survives forced shutdown, producing `0x80070020` on update. Root cause identified; no-reboot workaround exists but the friction on updating is significant. | **14 comments, 1 👍** — Affects Windows MSIX packaged users specifically; the survival of the daemon across updates is a packaging-level defect that blocks clean upgrades. |
| **[#79664](https://github.com/anthropics/claude-code/issues/79664)** | **Skill frontmatter `model` override ignored when invoked via the Skill tool** — The override works when a user types `/skill-name` but is silently dropped when Claude invokes the skill autonomously, meaning programmatic skill dispatch ignores the model pin. | **5 comments, 1 👍** — A real correctness gap for users who configure skills to route to specific models; the inconsistency between manual and tool-based invocation is confusing. |
| **[#74544](https://github.com/anthrop.com/claude-code/issues/74544)** | **1M-context session becomes unrecoverable: ECONNRESET on large uncached requests, and `/compact` fails with the same error** — At ~520k tokens, when the prompt cache goes cold, both the session and its compaction path fail with connection resets, leaving users with no recovery path. | **4 comments** — Critical for long-running sessions; the fact that `/compact` can't rescue the session makes this a dead-end scenario for power users. |
| **[#78398](https://github.com/anthropics/claude-code/issues/78398)** | **Adjudication step for auto-memory — batched promote/keep/discard review** — Proposes a review workflow where auto-memory entries are batched for human sign-off before promotion, rather than silently accepted or dropped. | **2 comments** — Reflects growing sophistication in how users manage auto-memory; the request for explicit adjudication signals trust concerns around automated memory writes. |
| **[#79811](https://github.com/anthropics/claude-code/issues/79811)** | **Plan mode's read-only guarantee not enforced for subagents dispatched via the Agent tool** — Subagents can violate the read-only constraints that the parent plan mode enforces, creating a security boundary gap. | **1 comment, 1 👍** — A security-relevant finding; plan mode is sold as a safe exploration environment, but subagent dispatch weakens that guarantee. |
| **[#79815](https://github.com/anthropics/claude-code/issues/79815)** | **Extreme memory leak: 2,108,208 MB/hour** — Reported on a stale issue; the extreme figure (2 TB/hr) suggests either a misreport or a catastrophic leak scenario. | **1 comment, 1 👍** — Even if the number is inflated, the report surfaces memory-management concerns that deserve investigation, especially for long sessions. |
| **[#79686](https://github.com/anthropics/claude-code/issues/79686)** | **CCD 2.1.209 regression: "Shell environment extraction" blocks main process for 25s on every app start (Linux)** — A 25-second hang on launch is a severe usability regression for Linux desktop users. | **1 comment** — Startup latency regressions are among the most disruptive; every launch penalty accumulates heavily across a workday. |
| **[#79751](https://github.com/anthropics/claude-code/issues/79751)** | **One-shot scheduled task with pending permission prompt vanishes from UI** — The prompt becomes unanswerable and the task dies silently, with no visible signal to the user. | **1 comment** — Silent task death with a stranded permission prompt is a correctness issue for scheduled/automated workflows where user interaction may be delayed. |

---

## 4. Key PR Progress

| # | PR | Summary |
|---|-----|---------|
| **[#96434](https://github.com/anthropics/claude-code/pull/96434)** | **security-guidance: keep denied and secret files out of the reviewer's reach** — Fixes #96276. The Stop-hook, commit, and push review prompts were assembled from `git diff`/`git show`, which could pull tracked `secrets.yaml` or `config/prod.json` into model context even when session permission rules deny reading them. This closes that leak path. |
| **[#96487](https://github.com/anthropics/claude-code/pull/96487)** | **telemetry: rows carry the engine's version, base version and build time** — External builds were sending telemetry rows with no version metadata because the mod gathered environment fields before the engine exposed its own. Now `$.session.version()` provides `{ version, base?, builtAt? }` from v2.1.281 onward, and the mod reads it once alongside other probes. |
| **[#96363](https://github.com/anthropics/claude-code/pull/96363)** | **diff: pass `--no-color` so forced git colors do not empty the diff body** — When `color.ui=always` or `color.diff=always` is set, every `git diff` returns ANSI escapes that break the mod's hunk-header matching, causing the diff body to appear empty even though `--shortstat` and `--numstat` headers remain correct. |
| **[#96364](https://github.com/anthropics/claude-code/pull/96364)** | **agents-md: an auto-paginated Read of a nested AGENTS.md no longer counts as delivering it** — A whole-file Read over the token cap gets paginated by the tool; the first page plus a banner is delivered, but the mod previously counted that partial read as full delivery, preventing later Reads from re-attaching the file. The fix distinguishes paginated reads from complete ones. |
| **[#95409](https://github.com/anthropics/claude-code/pull/95409)** | **mods/agents-md: the AGENTS.md project-instructions mod** (Closed) — Adds the `agents-md` mod under `mods/agents-md` with manifest, hooks module, tests, and README. It reads `AGENTS.md` the way the engine reads `CLAUDE.md`, gated by an `instructionFiles` option. Brings project-level instruction support to the mod system. |
| **[#79150](https://github.com/anthropics/claude-code/pull/79150)** | **docs: align code-review README with the current validation-based command** — The README still described a git blame/history agent pipeline, a 0–100 confidence scoring system with an 80 threshold, and a Configuration section referencing a filter line that no longer exists. Documentation cleanup to match reality. |

---

## 5. Feature Request Trends

Distilling from the issue corpus, the most-requested directions cluster around:

- **Memory adjudication control:** Multiple requests for explicit human review of auto-memory promotions — batched promote/keep/discard workflows rather than silent automation (#78398).
- **Subagent security boundaries:** Expectation that plan-mode read-only guarantees and permission rules propagate to subagents dispatched via the Agent tool (#79811).
- **Skill configuration parity:** Frontmatter overrides (especially `model`) should apply consistently whether the skill is user-invoked or tool-invoked (#79664).
- **Session resilience at scale:** Better handling of large-context sessions — recovery paths that don't depend on the cache being warm, and `/compact` that works even when the underlying connection is unstable (#74544).
- **Scheduled-task UI integrity:** Scheduled/automated tasks need visible state when a permission prompt is pending, so they don't die silently (#79751).

---

## 6. Developer Pain Points

- **The IDE environment warning (#3301) is the single loudest frustration** — 73 👍 and 48 comments make it the standout issue. Developers want it resolved or at least silenced; it fires on *every* IDE open and undermines confidence in the extension model.
- **Startup latency regressions** — The 25s "Shell environment extraction" hang on Linux (#79686) and the MSIX daemon blocking relaunch (#91763) both punish users at the point of launch, where first impressions matter most.
- **Silent failures are a recurring theme** — tasks dying without signal (#79751), MCP servers killed silently after idle (#79712), and compaction failing silently on connection errors (#74544) all share a pattern: the tool stops working and gives the user no actionable diagnosis.
- **Cross-platform inconsistencies** — Skills behave differently on manual vs. tool invocation (#79664), plan-mode guarantees don't extend to subagents (#79811), and Cowork rendering/Recents bugs manifest differently across Windows, macOS, and Linux (#79681, #79717, #79829). Platform fragmentation is a growing support burden.
- **Security and trust gaps** — The security-guidance reviewer leaking denied files into context (#96434, fixing #96276) and subagents bypassing read-only mode (#79811) both touch the boundary between "helpful" and "unsafe," and developers are increasingly attuned to those edges.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



# OpenAI Codex Community Digest — 2026-09-24

## Today's Highlights

The 0.156.1 release introduces GPT-6 Sol and Luna to the model picker, with Luna now recommended for rate-limit switching. However, the community is grappling with a cluster of reliability issues—most notably context compaction bugs that lose task state and destroy transcripts, plus persistent Windows sandbox and Remote-SSH blockers. On the PR front, a wave of closed merges strengthens extension hooks, model catalog controls, and diagnostic tracing.

## Releases

- **rust-v0.156.1 (0.156.1)** — Added GPT-6 Sol and GPT-6 Luna to the model picker; the rate-limit switch prompt now recommends GPT-6 Luna. ([#47405](https://github.com/openai/codex/pull/47405))
- Multiple alpha releases (0.158.0-alpha.2 through 0.158.0-alpha.5, 0.157.0-alpha.11, 0.155.0-alpha.16.3–4) were also published in the past 24h, with no additional changelog details beyond version bumps.

## Hot Issues

1. **#45626 — Windows Desktop: Follow-up messages disabled after first completed turn** (29 comments, 5 👍)
   Send button stays grayed in existing and new threads on Windows Desktop 26.908.70816. CLI is unaffected, suggesting an app-server or UI state bug. High frustration given it blocks all multi-turn work on Windows Desktop.

2. **#20851 — First-class Computer Use support from the Codex CLI** (17 comments, 39 👍)
   Computer Use exists as a desktop plugin but lacks CLI parity. Users want it exposed as a native CLI capability rather than a bundled MCP helper. One of the most-upvoted feature requests.

3. **#25792 — Context compaction forgets AGENTS rules; task progress jumps from 97% back to 42%** (18 comments, 2 👍)
   After automatic compaction, AGENTS.md rules are dropped, causing the model to regress on long-task reliability. Affects macOS Pro users on Codex app 26.527.60818.

4. **#15368 — Increase cap of sessions in VS Code extension** (18 comments, 6 👍)
   The extension hard-caps session count, forcing users to prune old sessions. Enterprise/Pro users with long-running projects hit the ceiling frequently.

5. **#35935 — [Windows Regression] Context compaction loses task state, repeats completed work, exhausts weekly usage** (15 comments)
   On Windows, compaction causes the agent to redo completed tasks, burning through weekly quota. Affects ChatGPT Plus users on CLI/app 26.721.41059.

6. **#41849 — VS Code Remote-SSH: stale app-server blocks new sessions after reconnect** (12 comments, 13 👍)
   Disconnect leaves the old app-server holding the thread writer; reconnect spawns a second server but the new session is blocked with "This is open in another app." Significant for remote developers.

7. **#15643 — Remote MCP: `scopes_supported` should be extracted from protected resource metadata** (11 comments, 17 👍)
   Enterprise users report that remote MCP scopes aren't correctly parsed from the protected resource metadata document, breaking fine-grained authorization.

8. **#44363 — Context compaction rewrites stored rollout in place, permanently destroys conversation transcript** (10 comments)
   On macOS, compaction mutates the rollout file directly, making the original transcript unrecoverable. Data-loss concern for Pro users.

9. **#46110 — Linux sandbox rejects valid nsfs mount roots from snapd** (13 comments, 1 👍)
   Codex CLI 0.155.0-alpha.15 fails on native Ubuntu with `mountinfo path is not absolute` when snapd creates nsfs entries. Blocks all filesystem-restricted commands.

10. **#46388 — Windows CLI 0.155.0: elevated sandbox initialization fails during runtime path validation** (12 comments, 3 👍)
    Regression from 0.154.0; elevated sandbox setup crashes on Windows 10 Pro 22H2. Users stuck on 0.154.0 as a workaround.

## Key PR Progress

1. **#47679 — Add extension hooks for model requests and response streams** — Introduces `ModelRequestContributor` and `ModelResponseInterceptor` so extensions can inject metadata and intercept streaming responses.
2. **#47677 — Support model catalog overrides for MCP resource tool specs** — Allows the model catalog to supply model-specific descriptions and schemas for `list_mcp_resources` and related tools.
3. **#47663 — Preserve managed network policy in route-aware transports** — Fixes a bypass where the default transport ignored application network policies in sandboxed or proxied environments.
4. **#47662 — Expose tool dispatch and timing observations to extensions** — Adds `on_tool_dispatch` and `on_tool_timing` hooks so extensions can observe rejected calls and cancellation timing independently of tracing.
5. **#47657 — Restrict the default Bedrock GovCloud model catalog** — Narrows the default catalog for Bedrock Mantle GovCloud endpoints to GPT-5.6 Terra, GPT-5.6 Luna, and GPT-5.4, with Terra as default.
6. **#47641 — Honor Retry-After and preserve server retry deadlines** — Parses `Retry-After` headers and accounts for propagation delay in relative retry backoffs.
7. **#47648 — Support bearer tokens for app-server executor connections** — Adds optional `authBearerToken` to `environment/add` and `environments.toml` for authenticated executor connections.
8. **#47647 — Apply Guardian computer-use review to the browser connector** — Extends computer-use policy and review handling to `connector_openai_browser`, matching existing coverage for `node_repl` and `cua_repl`.
9. **#47653 — Attach inherited rollout history to diagnostic reports** — When `include_logs` is enabled, follows `history_base` references so diagnostic reports include inherited rollout history.
10. **#47639 — Add configurable copy-on-select for transcript selections** — New `tui.copy_on_select` setting (`auto`/`always`/`never`) applied across fullscreen transcript, overlay, and resume/fork previews; `auto` enabled by default in tmux and Zellij.

## Feature Request Trends

- **First-class Computer Use CLI support** (#20851, 39 👍) — expose Computer Use as a native CLI command, not just a desktop plugin.
- **VS Code extension session cap increase** (#15368) — remove or raise the hard limit on stored sessions.
- **Current-worktree filter in `/resume` session picker** (#47485) — filter sessions by Git worktree for developers using parallel feature branches.
- **Configurable completion timestamps** (#47676) — expose timestamp visibility and clock format in `config.toml`.
- **Default cyber access program configuration** (#47558) — allow a configured default for new turns and goal continuations.

## Developer Pain Points

- **Context compaction reliability** is the dominant frustration: three separate issues (#25792, #35935, #44363) describe compaction dropping rules, losing task state, or destroying transcripts. Users running long tasks on macOS and Windows are especially affected.
- **Windows-specific breakage** spans Desktop follow-up messages (#45626), sandbox initialization (#46388, #47555), T

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Thinking Process:

1.  **Analyze the Request:**
    *   Target: Gemini CLI community digest for 2026-09-24.
    *   Source data: GitHub data from `google-gemini/gemini-cli` (Latest Releases, Latest Issues, Latest Pull Requests).
    *   Sections required:
        1.  **Today's Highlights**: 2-3 sentences summarizing the most important updates.
        2.  **Releases**: Summarize changes if new versions exist (v0.62.0-nightly.20260923.g62364cb20 is available).
        3.  **Hot Issues**: Pick 10 noteworthy Issues, explain why they matter and community reaction (using the top ones by comment count/impact).
        4.  **Key PR Progress**: Pick 10 important PRs, describe features or fixes.
        5.  **Feature Request Trends**: Distill the most-requested feature directions from all Issues.
        6.  **Developer Pain Points**: Summarize recurring developer frustrations or high-frequency requests.
    *   Style: Concise and professional, suited for technical developers. Include GitHub links for each item.

2.  **Analyze the Data:**

    *   **Latest Releases:**
        *   `v0.62.0-nightly.20260923.g62364cb20` released.
        *   What's changed: "Feat/gemini 3.8 flash 3.5 flash lite" (PR #29443).
        *   Link: `https://github.com/google-gemini/gemini-cli/compare/v0.62.0-nightly.20260922.gd5b3e3acc...v0.62.0-nightly.20260923.g62364cb20`

    *   **Latest Issues (Top 10-15 based on comments/relevance):**
        *   #22323: Subagent recovery after MAX_TURNS is reported as GOAL success, hiding interruption (P1, 13 comments, 2 👍).
        *   #19873: Leverage model's bash affinity via Zero-Dependency OS Sandboxing & Post-Execution Intent Routing (P2, 9 comments, 1 👍).
        *   #21409: Generalist agent hangs (P1, 8 comments, 8 👍).
        *   #22745: Assess the impact of AST-aware file reads, search, and mapping (P2, 7 comments, 1 👍).
        *   #21968: Gemini does not use skills and sub-agents enough (P2, 6 comments).
        *   #26525: Add deterministic redaction and reduce Auto Memory logging (P2, 5 comments).
        *   #26522: Stop Auto Memory from retrying low-signal sessions indefinitely (P2, 4 comments).
        *   #22267: Browser Agent ignores settings.json overrides (e.g., maxTurns) (P2, 4 comments).
        *   #22232: Enhance browser_agent resilience: Automatic session takeover and lock recovery (P3, 4 comments).
        *   #21983: browser subagent fails in wayland (P1, 4 comments, 1 👍).
        *   #21000: Experiment with using native file tools for creating and maintaining the task tracker (P3, 4 comments).
        *   #20079: ~/.gemini/agents/filename.md is not recognized as an agent if filename.md is a symlink (P2, 4 comments).
        *   #26523: Surface or quarantine invalid Auto Memory inbox patches (P2, 3 comments).
        *   #24246: Gemini CLI encounters 400 error with > 128 tools (P2, 3 comments).
        *   #23571: Model frequently creates tmp scripts in random spots (P2, 3 comments).
        *   #22672: Agent should stop/discourage destructive behavior (P2, 3 comments, 1 👍).
        *   #22186: get-shit-done output hook causes crash (P1, 3 comments).
        *   #20195: [Agents] - Local Subagent - Sprint 1 (P3, 3 comments).
        *   #18836: Replace WriteToDo with Persistent File-Based Task Tracking (CRUD) (P3, 3 comments).
        *   #26516: Memory system bugs and quality improvements (P2, 2 comments).
        *   #22746: Investigate using AST aware CLI tools to map codebase (P3, 2 comments).
        *   #22598: Feat: Subagent trajectory should be visible via `/chat share` (P3, 2 comments, 1 👍).
        *   #22466: Fix instances of incorrect \n escape behavior (P2, 2 comments).
        *   #22465: Gemini CLI gets stuck at interactive prompt creating vite app (P2, 2 comments).
        *   #21924: High performance and flicker free behavior on terminal resize (P2, 2 comments).
        *   #21763: Bugreport doesn't provide context of the subagent (P1, 2 comments).
        *   #21432: Improve Agent "Self-Awareness": Accurate CLI Flags, Hotkeys, and Self-Execution (P3, 2 comments).
        *   #21335: /compress command is not persistent across session resume (P2, 2 comments, 2 👍).
        *   #19561: Implement 'Tactful Extraction' logic for token-frugal surgical reads (P3, 2 comments).
        *   #18397: Support auto adding to a per workspace policy rather than a global policy (P3, 2 comments).

    *   **Latest PRs (Top 10 by relevance/impact):**
        *   #29451: fix(core): bound tool output size and optimize memory lifecycle in long-running agent loops (P1, size L/XL).
        *   #29468: fix(cli): display retry progress indicator during connection recovery (#28340) (P1, size L).
        *   #19013: Fixes #18884 (Windows-specific file lock error EBUSY during extension updates).
        *   #29443: Feat/gemini 3.8 flash 3.5 flash lite (CLOSED, size XL).
        *   #29452: fix(cli): decouple tool confirmation from IDE diff RPCs to prevent UI freeze (#23297) (P1).
        *   #29467: fix(core): remove invalid diff.external override (P1).
        *   #29462: Check for vsc integration test presence when attempting to run (CLOSED).
        *   #29457: fix(core): replace fuzzy requestedExplicitly logic with glob matching in read-many-files (P1).
        *   #29450: refactor(a2a-server): implement V1 to V2 settings migration logic.
        *   #29466: fix(cli): stop an untrusted workspace wiping its own settings.json (P1).
        *   #29329: fix(cli): warn when the piped-stdin timeout drops the input.
        *   #29304: fix(cli): avoid splitting surrogate pairs during truncation.
        *   #29436: fix(cli): prevent 100% CPU hang from @ within quotes in stdin (P1).
        *   #29463: fix(acp): resolve session before config initialization and avoid same-minute filename collisions (P1).
        *   #29445: fix(cli): distinguish an unreadable MCP enablement config from a missing one (P1).
        *   #29444: fix(cli): gemini mcp enable/disable never matched any server.
        *   #29432: fix(core): settle queued tool calls on scheduler disposal.
        *   #29431: fix(core): skip invalid TOML policy rules.
        *   #29460: Fix/auth url wrapping (P1, security).

3.  **Drafting the Sections:**

    *   **Today's Highlights (2026-09-24):**
        *   The major release highlight is the promotion of Gemini 3.8 Flash and Gemini 3.5 Flash Lite in nightly release v0.62.0-nightly.20260923.g62364cb20.
        *   On the infrastructure and core side, several critical stabilization fixes are merging, targeting tool output memory bounding, IDE UI freezes, untrusted workspace settings protection, and MCP configuration robustness.
        *   Community issues remain heavily focused on agent reliability, specifically subagent behavioral correctness (MAX_TURNS reporting, generalist agent hangs), Auto Memory pipeline hygiene, and tool scaling limits.

    *   **Releases:**
        *   `v0.62.0-nightly.20260923.g62364cb20`
        *   Summary: Adds support for Gemini 3.8 Flash and Gemini 3.5 Flash Lite as the latest GA models in the Flash and Flash Lite tiers (promoting `gemini-3.8-flash` and `gemini-3.5-flash-lite`).
        *   Changelog link: `https://github.com/google-gemini/gemini-cli/compare/v0.62.0-nightly.20260922.gd5b3e3acc...v0.62.0-nightly.20260923.g62364cb20`

    *   **Hot Issues (Pick 10 noteworthy Issues, explain why they matter and community reaction):**
        *   *Selection criteria:* High comments, high priority (P1), major UX/agent behavior blocks.
        *   1. **#22323 (Subagent recovery false success)**: Critical bug where subagents hitting `MAX_TURNS` are falsely reported as `success` with termination reason `GOAL`, hiding critical execution interruptions. (13 comments, 2 👍).
        *   2. **#21409 (Generalist agent hangs)**: Critical blocker where deferring to the generalist agent causes infinite hangs, halting basic operations like folder creation. High community thumbs up (8 👍) reflecting widespread frustration.
        *   3. **#19873 (Leverage model's bash affinity via Zero-Dependency OS Sandboxing)**: Large-effort enhancement proposal to leverage Gemini's native bash capabilities safely. (9 comments, 1 👍).
        *   4. **#22745 (AST-aware file reads, search, and mapping)**: Epic tracking the value of AST-aware tooling to reduce token bloat and misaligned reads. (7 comments, 1 👍).
        *   5. **#21968 (Gemini does not use skills and sub-agents enough)**: Key behavioral friction where the model fails to proactively trigger custom skills or sub-agents without explicit user command. (6 comments).
        *   6. **#26525 (Add deterministic redaction and reduce Auto Memory logging)**: Security and privacy concern regarding how background extraction agents handle secrets and local transcripts. (5 comments).
        *   7. **#21983 (browser subagent fails in wayland)**: Critical browser agent failure under Wayland environments, terminating with generic GOAL reasons. (4 comments, 1 👍).
        *   8. **#22267 (Browser Agent ignores settings.json overrides)**: Bug where global or project-level settings like `maxTurns` are completely ignored by the Browser Agent. (4 comments).
        *   9. **#24246 (Gemini CLI encounters 400 error with > 128 tools)**: Scalability bottleneck limiting tool definitions, causing context bloat or API failures. (3 comments).
        *   10. **#22672 (Agent should stop/discourage destructive behavior)**: Behavioral safety concern regarding the model executing dangerous commands like `git reset --force` or unsafe database modifications. (3 comments, 1 👍).
        *   *Alternative 10th:* **#22186 (get-shit-done output hook causes crash)** - P1 crash when printing user summary. Let's stick to #22672 or #22186. Let's include #22186 as a P1 crash issue for developer workflow reliability, or #21335 (/compress not persistent). Let's write up 10 strong ones. Let's use:
            *   #22323 (Subagent success misreport)
            *   #21409 (Generalist agent hangs - very high 👍)
            *   #19873 (Zero-dependency sandboxing/bash routing)
            *   #22745 (AST-aware file reads/search)
            *   #21968 (Underusing skills/subagents)
            *   #26525 (Auto Memory redaction/logging)
            *   #21983 (Wayland browser subagent failure)
            *   #22267 (Browser Agent settings ignored)
            *   #24246 (400 error with > 128 tools)
            *   #22186 (get-shit-done output hook crash - P1)

    *   **Key PR Progress (Pick 10 important PRs, describe features or fixes):**
        *   1. **#29443 (Feat/gemini 3.8 flash 3.5 flash lite)**: Adds support for Gemini 3.8 Flash and Gemini 3.5 Flash Lite. (Closed).
        *   2. **#29451 (fix(core): bound tool output size and optimize memory lifecycle)**: Prevents unbounded memory growth in long-running agent loops by capping tool execution output sizes.
        *   3. **#29468 (fix(cli): display retry progress indicator)**: Fixes UI freeze ("Thinking..." stuck screen) during connection recovery, rate limits, or server overloads when full error verbosity is enabled.
        *   4. **#29452 (fix(cli): decouple tool confirmation from IDE diff RPCs)**: Resolves UI freezes/ignored inputs when pressing Enter on tool approval prompts in integrated IDE terminals.
        *   5. **#29466 (fix(cli): stop an untrusted workspace wiping its own settings.json)**: Security fix preventing `gemini mcp add` in an untrusted folder from silently wiping `.gemini/settings.json` keys.
        *   6. **#29457 (fix(core): replace fuzzy requestedExplicitly logic with glob matching)**: Fixes critical context-bloat bug where binary assets (images, PDFs) were incorrectly treated as explicitly requested files due to fuzzy substring matches.
        *   7. **#29436 (fix(cli): prevent 100% CPU hang from @ within quotes in stdin)**: Fixes an infinite loop / CPU hang triggered when parsing `@` symbols inside double quotes in piped or pasted inputs.
        *   8. **#29467 (fix(core): remove invalid diff.external override)**: Resolves fatal Git spawn errors (`cannot spawn : No such file or directory`) during Git diff command execution.
        *   9. **#29463 (fix(acp): resolve session before config initialization)**: Prevents session overwrites and lookup failures in ACP mode when `session/load` runs within the same minute as `session/new`.
        *   10. **#29460 (Fix/auth url wrapping)**: Security/UX fix rendering long Google OAuth URLs using OSC 8 terminal hyperlinks to prevent truncation and `invalid_request` auth failures.
        *   *Honorable mentions:* #29445 (distinguish unreadable MCP config), #29444 (mcp enable/disable matching bug), #29432 (queued tool calls scheduler disposal), #29304 (surrogate pair splitting truncation).

    *   **Feature Request Trends:**
        *   Highlight the prominent themes from the issues:
            *   *AST-Aware Tooling & Codebase Mapping (#22745, #22746):* Strong desire to move beyond raw text/grep to structural code understanding to reduce token waste and improve navigation.
            *   *Subagent & Task Tracking Visibility (#22598, #18836, #21000):* Requests for persistent file-based task tracking (replacing in-memory WriteToDo), better visibility into subagent trajectories via `/chat share`, and robust subagent recovery reporting.
            *   *OS & Environment Sandboxing (#19873):* Push to leverage native bash tools safely through zero-dependency sandboxing and smart post-execution intent routing.
            *   *Memory System Hygiene & Auto Memory controls (#26525, #26522, #26523, #26516):* High interest in making Auto Memory background extraction less noisy, more secure (redaction), and resilient to bad inputs.
            *   *Agent Self-Awareness & Guidance (#21432, #21968):* Allowing the agent to dynamically understand and expose its own CLI flags, hotkeys, and custom skills without manual prompt engineering.

    *   **Developer Pain Points:**
        *   *Agent Reliability and Subagent Execution Failures:* Frustration with subagents falsely reporting success when hitting turn limits (#22323), hanging indefinitely during generalist delegations (#21409), and failing on specific OS environments like Wayland (#21983).
        *   *Context Bloat and Tool Limits:* Developers hitting hard walls with API 400 errors when loading > 128 tools (#24246) or experiencing massive token overhead from file reads (#29457, #19

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



# GitHub Copilot CLI Community Digest — 2026-09-24

### 1. Today's Highlights
The GitHub Copilot CLI community is focusing heavily on model configuration flexibility and agent execution stability, following the release of v1.0.89-1. Key updates include support for GPT-6 Sol and GPT-6 Luna models, alongside critical fixes for HTTP/2 networking races and local session chat inputs. Developers continue to push for native custom model endpoints (like DeepSeek) and more transparent sub-agent orchestration.

---

### 2. Releases
*   **v1.0.89-1** (Released recently)
    *   **Added**: Integration of **GPT-6 Sol** and **GPT-6 Luna** to the model picker as soon as they become available.
    *   **Fixed**: The view tool now correctly honors line ranges when providers send flattened `view_range` arguments.
    *   **Fixed**: Improved local session UX where pressing "Up" in an empty chat input successfully recalls the pending message and preserves queued prompts.

---

### 3. Hot Issues
Selected as the 10 most impactful issues based on community engagement, recency, and technical severity:

*   **[#2421] HTTP/2 GOAWAY Race Condition** *(19 👍, 8 comments)*
    *   **Why it matters:** A severe networking bug in the undici HTTP/2 connection pool causing cascading retry failures and silent waste of premium requests. It represents a critical backend stability milestone now closed.
    *   [Link](https://github.com/github/copilot-cli/issues/2421)
*   **[#2995] DeepSeek API Integration Failure** *(9 👍, 9 comments)*
    *   **Why it matters:** High community demand for cost-effective alternative models; users faced blockers trying to route Copilot CLI through DeepSeek endpoints. Closed, indicating official workaround or support.
    *   [Link](https://github.com/github/copilot-cli/issues/2995)
*   **[#2827] Rate Limit UI Improvements** *(9 👍, 3 comments)*
    *   **Why it matters:** Users lack proactive indicators for rate limits. This feature request asks for real-time, at-a-glance widgets showing current rate limit consumption rather than passive blockages.
    *   [Link](https://github.com/github/copilot-cli/issues/2827)
*   **[#4535] `store_memory` Fails in Prereleases** *(10 comments, 1 👍)*
    *   **Why it matters:** Core agent memory functionality broke in v1

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>



Based on the provided GitHub data for `MoonshotAI/kimi-cli`, here is the community digest for 2026-09-24.

---

## Kimi Code CLI Community Digest — 2026-09-24

### 1. Today's Highlights
No new releases or pull requests were published in the last 24 hours. Activity was limited to issue updates, with two notable threads receiving recent attention: a critical safety concern regarding accidental data deletion outside the workspace ([#2596](https://github.com/MoonshotAI/kimi-cli/issues/2596)) and a closed authentication bug ([#1547](https://github.com/MoonshotAI/kimi-cli/issues/1547)) that resurfaced in the tracking timeline.

### 2. Releases
*No new releases in the last 24 hours.*

### 3. Hot Issues
The following issues were updated recently and are worth attention:

| # | Title | Status | Why It Matters |
|---|-------|--------|----------------|
| [2596](https://github.com/MoonshotAI/kimi-cli/issues/2596) | Agent ran `rm -rf` on a pre-existing directory outside the workspace, deleting user session data | **OPEN** | A high-severity safety regression. In yolo permission mode, the agent attempted to clean up a symlink it believed it created, but because the symlink target already existed as a real directory, the operation cascaded into deleting user session data outside the intended workspace. This underscores the risk of aggressive autonomous file operations without strict path confinement. |
| [1547](https://github.com/MoonshotAI/kimi-cli/issues/1547) | Repeated error for "Authorization failed, please check your login status" mid generation | **CLOSED** | Users on v1.24.0 experienced intermittent authorization failures mid-session on Linux, disrupting ongoing coding tasks. While closed, the recent update suggests the fix may not have fully resolved the root cause or the issue is being monitored for recurrence. |

### 4. Key PR Progress
*No pull requests were updated in the last 24 hours.*

### 5. Feature Request Trends
The available data does not contain enough feature-request threads to identify a clear trend today. Both updated issues are bug/safety reports rather than feature proposals.

### 6. Developer Pain Points
From the recent issue activity, two recurring pain points stand out:

- **Workspace boundary enforcement**: Developers are concerned about agents operating outside the designated workspace, especially in permissive modes. The symlink/rm incident highlights the need for stronger path validation and rollback safeguards.
- **Session stability & auth reliability**: Mid-session authorization failures break developer flow. Even when marked closed, the persistence of the issue in tracking suggests it remains a latent concern for production usage.

---

*Note: This digest is based exclusively on the data provided (2 issues, 0 PRs, 0 releases updated in the last 24 hours). For a broader analysis, a longer data window would be needed.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



# OpenCode Community Digest — 2026-09-24

## Today's Highlights
The past 24 hours saw a surge in critical bug reports affecting core functionality, including session-wedging errors, payment processing failures, and provider authentication issues. Community engagement remains high around the MCP OAuth feature request and retry policy configurability. Several PRs addressing TUI stability, plugin loading, and desktop experience were merged.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **#49433 — Error from provider (Console): OpenCode's free tier can only be used from within OpenCode** (52 comments, 15 👍)
   Users report the free tier being restricted to the OpenCode console environment, breaking workflows for those using external providers. This is a significant usability barrier for the free user base.

2. **#988 — Feature request: add MCP remote using OAuth** (41 comments, 122 👍)
   A long-standing feature request with massive community support. Proposes using OAuth 2.1 to simplify MCP server installation by allowing users to authorize via URL without manual secret management.

3. **#19130 — Windows ARM64 native: OpenTUI fails to initialize with bun:ffi dlopen TinyCC error** (28 comments, 13 👍)
   Platform-specific initialization failure affecting Windows ARM64 users. The native binary works for non-interactive commands but the TUI crashes due to a `bun:ffi` dlopen issue with TinyCC.

4. **#45278 — Payment Declined After 3 Months Despite No Issue With Card or Bank** (22 comments, 5 👍)
   Recurring billing issue where existing payment methods are suddenly declined after successful months of payments. Indicates potential problems with the payment gateway integration or subscription management system.

5. **#50258 — [URGENT] Go: frank/DeepSeek-V4.1-Flash upstream repeatedly drops prompt cache** (5 comments, 1 👍)
   Critical cost-impacting bug where the prompt cache is dropped ~50% of the time, resulting in unnecessary full-context re-reads and inflated billing. Direct financial impact on users.

6. **#43596 — Configurable retry policy: expose maxRetries / initialDelay / backoffFactor / maxDelay via config** (6 comments, 12 👍)
   Request to make hardcoded retry parameters configurable. Currently, 5 retries (~68s) abort turns prematurely for providers with long quota windows, while transient errors persist.

7. **#50915 — [FEATURE REQUEST]: Redact credential values in opencode debug config** (5 comments)
   Security concern: `opencode debug config` outputs plaintext API keys and credentials, problematic in shared terminals, screen recordings, and pair sessions.

8. **#41848 — LLM retry has no max attempts: stream errors cause infinite retry loop, UI stuck on Thinking** (4 comments)
   Critical UI freeze bug where `RETRY_MAX_DELAY` is set to ~24 days, causing infinite retry loops when stream errors occur. The UI shows "Thinking..." indefinitely with no error feedback.

9. **#50775 — Failed to drain Session: one malformed tool result wedges the whole session** (2 comments)
   Session corruption issue where a single malformed tool result causes permanent session failure. Reported 33 occurrences in one evening across multiple sessions on Desktop 2.0.12-2.0.14.

10. **#49630 — acp: custom providers fail to load due to SchemaError(Missing key at ["path"]) on event subscription** (3 comments)
    ACP startup crash preventing custom providers from loading in versions 2.0.6-2.0.7. The internal event subscriber fails with an unhandled schema error during initialization.

## Key PR Progress

1. **#44524 — feat(acp): add ACP v2 draft support/features** (Closes #44877)
   Implements the ACP v2 draft specification with migration guide support, positioning OpenCode for the next generation of agent-client protocol interactions.

2. **#44533 — feat: open VS Code native diff for edit/write permission approvals** (Closes #9370)
   When running in VS Code integrated terminal, permission requests now open the native VS Code diff editor, providing a more familiar and powerful approval workflow.

3. **#44492 — feat(cli): add disabled_plugins config and plugin management commands** (Closes #7687)
   Introduces configuration for disabling plugins and CLI management commands, addressing long-standing plugin control needs with a fresh implementation against the current codebase.

4. **#44443 — feat(tui): add selection to prompt as quoted context** (Related to #21025)
   Enables text selection in the TUI to be added as quoted context in the prompt, a user-requested interaction pattern that was previously closed as "not planned."

5. **#44378 — feat(core): support AgentRouter provider** (Closes #41873)
   Adds native AgentRouter provider support with custom user agent handling, as AgentRouter rejects the default AI SDK user agent.

6. **#44453 — feat(console): unblock workspace by account email** (Closes related issue)
   Extends the support unblock endpoint to target either workspace ID or account email, resolving email targets through active account memberships with ambiguity rejection.

7. **#44342 — fix(tui): reconcile pending prompts with the live server** (Closes #36585)
   Fixes a critical issue where process-local pending question/permission maps are lost on server restart, causing TUI desynchronization.

8. **#44341 — fix(server): release SSE streams when a Bun client disconnects** (Closes #36311)
   Addresses a Bun-specific bug where `node:http` does not emit ServerResponse "close" events on client disconnect, causing SSE stream leaks.

9. **#44340 — fix(core): serialize prompt settlement around event publication** (Closes #34853)
   Fixes a race condition where `QuestionV2.reply`, `QuestionV2.reject`, and `PermissionV2.reply` published settlement events before removing pending entries.

10. **#50989 — fix: Update condition for OpenAIPlugin to check 'astra'**
    Refines the OpenAI plugin condition to properly check for 'astra', fixing provider detection logic.

## Feature Request Trends

- **MCP Simplification**: OAuth-based MCP server installation (#988) is the most-requested feature, with strong community support (122 👍).
- **Retry Configuration**: Multiple requests for configurable retry policies (#43596, #41848) indicating the community wants control over provider resilience behavior.
- **Context Management**: Requests for folder/project context addition (#50944) and multi-repository change tracking (#45498) show demand for enhanced workspace awareness.
- **Credential Security**: Redaction of credentials in debug output (#50915) and OAuth refresh race condition fixes (#50759) highlight security priorities.
- **Model Selection UX**: Multiple issues around model picker functionality (#50964, #50969, #48789) suggest the model selection interface needs attention.
- **Plugin Ecosystem**: Plugin management commands (#44492) and direct plugin tool invocation (#50312) indicate growing plugin ecosystem needs.

## Developer Pain Points

- **Configuration Rigidity**: Hardcoded retry limits and delays (#43596, #41848) prevent adaptation to different provider behaviors.
- **Platform Inconsistencies**: Windows ARM64 initialization failures (#19130), Windows file race conditions (#47497, #47516), and WSL detection issues (#44514, #44512) create cross-platform development challenges.
- **Session Reliability**: Wedged sessions from malformed tool results (#50775) and infinite retry loops (#41848) break developer workflows.
- **Billing & Payment Transparency**: Sudden payment declines (#45278, #49867) and unexpected caching costs (#50258) create financial uncertainty.
- **Credential Exposure**: Plaintext API keys in debug output (#50915) create security risks in collaborative environments.
- **Provider Compatibility**: Issues with NVIDIA NIM (#49240), DeepSeek caching (#50258), and custom provider loading (#49630, #50990) indicate ongoing integration challenges.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



# Pi Community Digest — 2026-09-24

*Source: [badlogic/pi-mono](https://github.com/badlogic/pi-mono) (earendil-works/pi)*

---

## 1. Today's Highlights

The past 24 hours saw no new releases, but the repository remains highly active with significant PRs landing across the board. A major TUI refactoring (#8398) that exposes color values and theme styling directly was merged, alongside a provider-stream-events extension hook (#9901) that closes a long-standing meta-issue about vendor-specific response fields. The community is also grappling with a clipboard copy regression (#9688) introduced by a recent SSH-detection change.

## 2. Releases

No new releases in the last 24 hours.

## 3. Hot Issues

### 🔴 #9688 — Clipboard copy regression after SSH detection change
- **Status:** Closed | 👍 2 | 9 comments
- A commit (`3349e1db`) changed OSC 52 clipboard emission to only fire when SSH is detected, breaking clipboard copy for users running `pi` inside interactive containers without SSH. The regression was quickly identified and the fix is noted, though the thread confirms the edge case was missed in review.
- [Link](https://github.com/earendil-works/pi/issues/9688)

### 🔴 #9361 — Windows `shellPath` silently ignored when extensions load
- **Status:** Open | 9 comments
- On Windows, a valid `shellPath` in `~/.pi/agent/settings.json` is non-deterministically discarded when any extension is loaded. Resolution falls through to Git Bash locations and eventually `bash.exe` on PATH (frequently the WSL System32 one), causing inconsistent shell behavior.
- [Link](https://github.com/earendil-works/pi/issues/9361)

### 🔴 #5294 — Request timeout with llama.cpp backend despite `http timeout = false`
- **Status:** Closed | 8 comments
- Users running `pi` against a local `llama.cpp` backend with infinite timeout still hit timeout errors on slow models. The `/settings` UI correctly reports `false`, but the underlying HTTP client may still enforce a default ceiling. This is a long-lived issue (opened June) with a recent update.
- [Link](https://github.com/earendil-works/pi/issues/5294)

### 🟡 #9549 — Large transcripts re-render every frame; resize re-emits entire transcript
- **Status:** Open | 👍 1 | 8 comments
- On Windows 11 with only 2 logical cores, sessions with large transcripts saturate a single core during every resize event. The full transcript is re-emitted and re-rendered, causing measurable UI lag. Reproduced with `pi -ne` (no extensions), confirming it's a core TUI issue.
- [Link](https://github.com/earendil-works/pi/issues/9549)

### 🟡 #5581 — `sendMessage()` with `triggerTurn: true` bypasses `before_agent_start`
- **Status:** Open | 👍 3 | 7 comments
- Custom messages sent via the SDK/API with `triggerTurn: true` call `_runAgentPrompt` directly instead of `prompt()`, skipping the `before_agent_start` event. This breaks extension hooks that rely on that event for setup, and creates an inconsistent agent-start path.
- [Link](https://github.com/earendil-works/pi/issues/5581)

### 🟡 #9674 — `mistral-conversations`: empty content deltas open empty text blocks
- **Status:** Open | 6 comments
- Zero-length `content: ""` deltas from Mistral's API open spurious empty text blocks. On GLM 5.x models this causes ~400 seconds of wasted tokens during replay. The reporter notes this is the proper fix on the `mistral-conversations` side, as the previous workaround routed through `openai-completions` and lost native prompt caching.
- [Link](https://github.com/earendil-works/pi/issues/9674)

### 🔵 #9098 — Expose prompt disposition in RPC responses
- **Status:** Open | 5 comments
- RPC `prompt` responses currently return the same success payload whether a prompt was handled by an extension/input handler, queued, or actually started. The request is to include `data.disposition: "handled" | "queued" | "started"` so callers can distinguish outcomes without additional plumbing.
- [Link](https://github.com/earendil-works/pi/issues/9098)

### 🔵 #9210 — Anthropic Messages via Vercel Gateway: `cacheWrite1h` never set
- **Status:** Closed | 5 comments
- Through the Vercel AI Gateway with `PI_CACHE_RETENTION=long`, every assistant message records `cacheWrite1h: 0` even though the gateway honors the 1h TTL. `calculateCost` then bills all cache writes at the 5m rate (1.25×), silently overcharging users who set long retention.
- [Link](https://github.com/earendil-works/pi/issues/9210)

### 🔵 #9036 — `openai-codex` SSE parser buffers entire response, fatal heap OOM
- **Status:** Closed | 5 comments
- `pi` aborted with a fatal V8 out-of-memory error while reading a Codex response stream on macOS with Node 26.7.0. The SSE parser accumulates the entire response in one string before processing, which is fine for short replies but catastrophic for large Codex outputs.
- [Link](https://github.com/earendil-works/pi/issues/9036)

### 🔵 #9784 — Meta-Issue: extensions can't access vendor-specific response fields
- **Status:** Closed | 5 comments
- The `AssistantMessage` type is described as a "Procrustean bed" — it strips provider-specific fields from response bodies, making it impossible for extensions to access metadata (e.g., Codex reasoning item IDs, Gemini thought signatures). This was recently addressed by PR #9901, which surfaces `provider_stream_event` to extensions.
- [Link](https://github.com/earendil-works/pi/issues/9784)

## 4. Key PR Progress

### 🚀 #8398 — TUI theming & color value exposure
- **Status:** Open | Author: mitsuhiko
- Major refactoring that exposes color values directly through the TUI and theme system, enabling agents to perform color math and supporting non-Terminal UIs in the future. Old API retained for backwards compatibility.
- [Link](https://github.com/earendil-works/pi/pull/8398)

### 🚀 #9901 — Expose provider stream events to extensions
- **Status:** Closed | Author: davidbrai
- Adds `onProviderStreamEvent` through `pi-ai` and agent core, surfacing `provider_stream_event` to coding-agent extensions. **Closes #9784** — the long-standing meta-issue about vendor-specific response fields.
- [Link](https://github.com/earendil-works/pi/pull/9901)

### 🚀 #9948 — Unify image and classifier model infrastructure
- **Status:** Closed | Author: mitsuhiko
- Larger architectural change to the model system so it supports model types beyond chat models (images, classifiers, etc.). This lays the groundwork for multimodal capabilities.
- [Link](https://github.com/earendil-works/pi/pull/9948)

### 🚀 #9934 — Add Yolo-Auto provider with `/v1/models` auto-discovery
- **Status:** Closed | Author: harryvgiunta
- Adds `yolo-auto` as a built-in OpenAI-compatible subscription gateway with runtime model auto-discovery. Serves `qwen3.8-flash`, `yolo`, and `yolo-small` with plan-bounded model listing.
- [Link](https://github.com/earendil-works/pi/pull/9934)

### 🚀 #9964 — Use GPT-6 API context limits
- **Status:** Closed | Author: goiltpatpat
- Sets GPT-6 Astra, Sol, and Luna context windows to 1,050,000 tokens with a 128,000 output limit, preserving the existing 272K threshold and long-context price tier calculation. Includes regression coverage for Moonshot Kimi IDs.
- [Link](https://github.com/earendil-works/pi/pull/9964)

### 🚀 #9956 — Paint user message on Enter before prompt preflight
- **Status:** Closed | Author: asperty567
- Fixes Enter→chat bubble lag: the editor cleared immediately on Enter but the user message only painted on `message_start` after preflight (extensions, auth, compaction). Now paints an optimistic user bubble + `requestRender` on Enter.
- [Link](https://github.com/earendil-works/pi/pull/9956)

### 🚀 #9941 — Turn steer during abort unwind into a fresh prompt
- **Status:** Closed | Author: nateGeorge
- When pressing Escape to abort a streaming response and quickly pressing Enter to resubmit, the new prompt was lost because it was queued as a steering message into the run that was unwinding from the abort. Now converts the steer into a fresh prompt.
- [Link](https://github.com/earendil-works/pi/pull/9941)

### 🚀 #7948 — Defer extension runtime reloads
- **Status:** Open | Author: christianklotz
- Replaces awaited `ctx.reload()` with fire-and-forget `ctx.requestReload()` in every extension context. Coalesces reload requests and defers canonical runtime replacement until extension operations, compaction, or branch summarization settle. Rejects unsafe direct reload.
- [Link](https://github.com/earendil-works/pi/pull/7948)

### 🚀 #9880 — Publish configuration schemas
- **Status:** Open | Author: christianklotz
- Generates and commits JSON Schemas for `models.json`, `settings.json`, `keybindings.json`, and themes from canonical TypeBox contracts. Packages schemas and adds golden-file coverage to detect drift. Editor descriptions and documented defaults preserved as metadata.
- [Link](https://github.com/earendil-works/pi/pull/9880)

### 🚀 #9569 — Coerce JSON-encoded object/array tool arguments
- **Status:** Open | Author: rsaryev
- `validateToolArguments` now recovers a tool argument the model delivered as a JSON-encoded string for `object` and `array` parameters. Prevents a common failure mode where models double-encode nested values.
- [Link](https://github.com/earendil-works/pi/pull/9569)

## 5. Feature Request Trends

- **RPC observability:** Multiple requests for richer RPC responses — prompt disposition (#9098), HTTP status codes on failure paths (#5623), and structured error metadata. The community wants synchronous callers to know *what happened*, not just *that it succeeded*.
- **Provider-specific field exposure:** The recurring theme of extensions being starved of vendor metadata culminated in #9784 (closed by #9901). The pattern is clear: Pi's abstraction layers are too aggressive in stripping provider-specific data.
- **Extension lifecycle control:** Requests around reload serialization (#7948, #9222), queued message management (#9886), and event ordering (#5581) suggest developers building extensions want finer-grained control over when and how the agent runtime transitions states.
- **Model infrastructure generalization:** PR #9948's unification of image/classifier models with chat models signals a deliberate push toward multimodal support, driven by user demand for vision capabilities.
- **Windows & container parity:** Issues like #9361 (shellPath), #9549 (transcript re-render), and #9688 (clipboard) all point to Windows and non-standard environments being second-class citizens.

## 6. Developer Pain Points

- **Fragile environment detection:** The clipboard regression (#9688) and Windows shell resolution (#9361) both stem from environment heuristics that don't generalize well — SSH detection for clipboard, and extension-load timing for shell path resolution. These are hard to test and easy to break.
- **Memory & performance on constrained hardware:** The OOM crash (#9036) and transcript re-render saturation (#9549) affect users on low-core machines and large sessions. The SSE buffering pattern and full-transcript re-emission are architectural bottlenecks.
- **Abstraction leaks:** Developers building extensions or SDK consumers keep hitting the boundary between Pi's clean API and the messy reality of provider-specific behaviors — vendor fields (#9784), model name mismatches on resume (#9243), and sampling param drops in tool-using turns (#9506).
- **Event ordering & lifecycle gaps:** The `before_agent_start` bypass (#5581) and `clearQueue()` silently destroying extension messages (#9886) reveal that the agent loop's event system and message queue don't compose predictably when extensions intervene.
- **Long-lived timeout & caching bugs:** The llama.cpp timeout (#5294) and Vercel Gateway cache billing (#9210) are bugs that persist across releases because they involve subtle interactions between client config, server behavior, and billing logic — easy to miss in testing, expensive when they hit users.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>



# Qwen Code Community Digest — 2026-09-24

## 1. Today's Highlights
The Qwen Code community is heavily focused on hardening security boundaries and fixing critical packaging and platform-specific bugs, while simultaneously introducing major productivity features like hybrid code mode and session-level model selection. The latest nightly release (`v0.24.4-nightly.20260923`) patches deferred tool bridge inconsistencies and updates the CUA driver across all major desktop platforms. Meanwhile, significant progress is being made to resolve 64-bit file identity failures on Windows and parallelize extension loading to boost daemon performance.

## 2. Releases
*   **v0.24.4-nightly.20260923.d0cd622a68** (Released 2026-09-23)
    *   **Core & Docs Fixes**: Corrects stale or untested behaviors introduced in the deferred-tool bridge.
    *   **CUA Driver Update (`cua-driver-rs-v0.20.11`)**: Ships prebuilt binaries under `packages/cua-driver`:
        *   **macOS**: Codesigned and notarized universal binary + `QwenCuaDriver.app`.
        *   **Linux**: Unsigned binaries for `x86_64` and `arm64` (glibc 2.31 floor).
        *   **Windows**: Unsigned UIAccess worker and native SDK payload (`x86_64` and `arm64`).

## 3. Hot Issues
These 10 issues represent the most critical bugs, security risks, and feature demands currently debated in the community:

*   **#12185 [P1 Bug] Web Shell Package Ships with Unresolvable Imports**  
    The published `@qwen-code/web-shell` package contains broken `@/` type imports and inlines declared runtime dependencies, breaking downstream npm consumers. This is a critical packaging defect that blocks production deployments of the web shell. [Link](https://github.com/QwenLM/qwen-code/issues/12185)
*   **#11198 [P1 Bug] Telemetry Uploads Raw Tool-Error Text Without Redaction**  
    The default-on usage-statistics channel sends raw tool-error text (including sensitive shell command lines) to the RUM endpoint without redaction. This is a severe pre-existing privacy and security vulnerability on the main branch. [Link](https://github.com/Q

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



# DeepSeek TUI Community Digest — 2026-09-24

*Data sourced from [Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI) (repository currently operating under the "Codewhale" working name).*

---

## 1. Today's Highlights

The repository is in an intensive pre-release integration phase for **v0.10.1**, with a dense wave of bug-fix and dogfooding-driven PRs landing on 2026-09-23. The dominant theme is **stabilization**: fixing regressions, reconciling duplicated subsystems (MCP stacks, fleet/agent concepts), and hardening the runtime against race conditions and performance stalls. Meanwhile, the long-running **crate decomposition epic** (#5316) continues to drive structural refactoring, with multiple monolith-splitting issues gaining traction.

---

## 2. Releases

**No new releases in the last 24 hours.** The repository is actively preparing v0.10.1, with issue #6458 ("0.10.1 source qualification and ordered PR integration") opened today to track the release integration queue.

---

## 3. Hot Issues

### 🔥 #5316 — EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)
**Author:** aboimpinto | **Comments:** 29 | [Link](https://github.com/Hmbown/Codewhale/issues/5316)

The flagship structural refactoring epic. Aims to split the TUI monolith into discrete, ownership-clear crates following the Codewhale Core execution plan (C03–C10). This is the backbone issue for all subsequent decomposition work — every sub-issue references this plan via Linear. Community attention is high; this is the single most-discussed thread.

### 🔥 #6011 — Usage & Tool Diagnostics: Token Accounting
**Author:** 7jrxt42BxFZo4iAnN4CX | **Comments:** 9 | [Link](https://github.com/Hmbown/Codewhale/issues/6011)

Requests per-component, per-model token accounting with cache hit rates, per-tool sinks, and compaction cost visibility. Also tracks tool-call error patterns. This is C11 of the Core execution plan. Developers want visibility into where their tokens are going — critical for cost-aware workflows.

### 🔥 #5586 — Decompose the Mega Files
**Author:** Hmbown | **Comments:** 8 | [Link](https://github.com/Hmbown/Codewhale/issues/5586)

Targets four monolithic source files: `lib.rs` (18.7k), `config.rs` (12.3k), `client.rs` (11.1k), and `runtime_threads.rs` (9.3k). Part of C09. Direct response to the founder's "our code is getting rather chunky" directive. This is a maintainability crisis issue — these file sizes make navigation and contribution painful.

### 🔥 #6050 — Pluggable Agent Memory
**Author:** idling11 | **Comments:** 6 | [Link](https://github.com/Hmbown/Codewhale/issues/6050)

Currently, agent memory is hardwired with only `Native`/`Off` variants. This issue proposes a generic `MemoryBackend` seam with causal-memory / mem0 as reference implementations. Would allow third-party backends (MCP, external stores). Significant for users who want to persist or share agent memory across sessions.

### 🔥 #6142 — Reconcile the Two MCP Client Stacks
**Author:** Hmbown | **Comments:** 5 | [Link](https://github.com/Hmbown/Codewhale/issues/6142)

The TUI has two parallel MCP implementations: `tui/src/mcp/` (~13.2k lines) and `crates/mcp` (~4.5k lines). The app-server uses the crate; the engine uses its own. This duplication is a maintenance hazard and a source of divergent behavior. From the 0.9.14 refactor backlog.

### 🔥 #6036 — "Fleet" and "Agent" Are the Same Concept Stored Twice
**Author:** Hmbown | **Comments:** 5 | [Link](https://github.com/Hmbown/Codewhale/issues/6036)

Founder-identified confusion: `scout` exists in both `~/.codewhale/agents/scout` and `~/.codewhale/fleets/` with identical values. Fleet members mix roles, model pins, and route bookmarks. This is a data-model integrity issue that undermines user trust in the configuration surface.

### 🔥 #2342 — Clickable File Preview in Output
**Author:** caeserchen | **Comments:** 5 | [Link](https://github.com/Hmbown/Codewhale/issues/2342)

User request: files mentioned in agent output should be clickable to open a preview, rather than requiring manual directory navigation. Long-standing UX gap (created 2026-05-29, still open). Simple but high-impact for daily workflow.

### 🔥 #6086 — Session Scratchpad + One Addressing Scheme
**Author:** Hmbown | **Comments:** 4 | [Link](https://github.com/Hmbown/Codewhale/issues/6086)

Founder direction (2026-09-11): scratchpad, Agent Mail, and workshop outputs should share a unified addressing scheme. Currently the scratchpad **does not exist** — the base prompt never mentions it. This is a foundational missing piece for cross-component data flow.

### 🔥 #5915 — Fleet Models: Provider → Model → Shortlist → Role
**Author:** Hmbown | **Comments:** 4 | [Link](https://github.com/Hmbown/Codewhale/issues/5915)

Founder direction (2026-09-06): users need a flow from provider → model → shortlist → fleet models, where the operator chooses and assigns roles. Currently no such shortlist mechanism exists. Critical for multi-agent fleet configuration.

### 🔥 #5479 — Fleet/Agents: First-Class Sub-Agent Management in TUI
**Author:** Hmbown | **Comments:** 3 | [Link](https://github.com/Hmbown/Codewhale/issues/5479)

C01 of the Core execution plan. Requests a live bottom view in the TUI showing per-agent status, elapsed time, token usage, focus, message, stop, and history-over-time. Currently sub-agents are managed through ad-hoc surfaces; this would give them a proper home.

---

## 4. Key PR Progress

### ✅ #6451 — Native DeepSeek Harness Bundle Import
**Author:** Hmbown | [Link](https://github.com/Hmbown/Codewhale/pull/6451)

DSH bundle packages were previously converted only through an external Python script. This PR adds **native import** into the product flow, so the desktop app and CLI can consume Harness bundles directly without external tooling. Step 2 of DSH plugin adoption.

### ✅ #6459 — Share GPUI Semantic Design Source
**Author:** Hmbown | [Link](https://github.com/Hmbown/Codewhale/pull/6459)

The public website's palette, spacing, radii, typography, focus geometry, and motion now derive from the **same versioned design artifact** as the GPUI app. Removes hand-maintained GPUI palette constants from the site. Ensures design parity between marketing and product.

### ✅ #6455 — Keyless Send Error Naming the Missing Key
**Author:** Hmbown | [Link](https://github.com/Hmbown/Codewhale/pull/6455)

When a message is sent with no API key configured, the transcript previously said only "No model connected… Choose a provider." The provider's own error — which **names the missing key and the `codewhale auth set` command** — now surfaces properly. Esc from the picker returns to the composer. Direct fix for a confusing first-run experience.

### ✅ #6454 — One Schema Probe for Fleet
**Author:** Hmbown | [Link](https://github.com/Hmbown/Codewhale/pull/6454)

"Does this file declare schema = fleet" was written twice: once in `fleet/store.rs` over `toml::Value`, once inline in `fleet/exact.rs` over `codewhale_workflow::fleet_exact::declared_schema_kind`. Consolidated into a single `read_declared_schema` on the store. Removes duplication and divergence risk.

### ✅ #6460 — Render Installation Guide from Markdown
**Author:** Hmbown | [Link](https://github.com/Hmbown/Codewhale/pull/6460)

The installation page now renders the verified `docs/INSTALL.md` at build time, with copyable commands and checked internal anchors. Eliminates a second set of installation instructions that could drift from the source of truth. Guide remains English pending translations.

### ✅ #6431 — Publish Without a Two-Link Window on Linux/macOS
**Author:** Lstarsky0 | [Link](https://github.com/Hmbown/Codewhale/pull/6431)

On Unix, `WorkspaceFile::publish` used `linkat` to atomically place a published file, then unlinked the temporary — creating a brief window where the file had **two links**. `open_file` rejects any link count other than 1, so a racing reader got `InvalidData`. Fixed by eliminating the intermediate link state. Critical correctness fix for fleet file publication.

### ✅ #6450 — Rewrite INSTALL.md from a Tested v0.10.0 Install
**Author:** Hmbown | [Link](https://github.com/Hmbown/Codewhale/pull/6450)

Complete rewrite of `docs/INSTALL.md` based on a real install test of published v0.10.0 on a fresh Ubuntu 24.04 x86_64 VM, running as a new Linux user per path. Findings are listed for triage. This is the most trustworthy installation documentation in the repo's history.

### ✅ #6453 — Config Template: Ctrl+T for Effort, Not Shift+Tab
**Author:** Hmbown | [Link](https://github.com/Hmbown/Codewhale/pull/6453)

Both config.toml templates said "Shift+Tab cycles between off / high / max" — but Shift+Tab has cycled the **permission posture** since 0.8.68, while Ctrl+T walks the active model's effort ladder. Corrected both templates. A small fix that prevents significant user confusion.

### ✅ #6452 — Keep Engine-Stopped Turn Reason in Transcript
**Author:** Hmbown | [Link](https://github.com/Hmbown/Codewhale/pull/6452)

A dogfood session appeared hung after an Engine-stopped turn: a long ssh tool call hit its 150s timeout, the turn settled Failed with no model follow-up, and the transcript showed no reason. Now the stop reason persists in the session log. Direct response to a real user confusion scenario.

### ✅ #6448 — Two-Press Stop for Writing Agents
**Author:** Hmbown | [Link](https://github.com/Hmbown/Codewhale/pull/6448)

0.10.1 Fleet addenda F4/F5: stopping an agent that can change files now requires **two presses of `X`** (or `X` then Enter) in `/subagents`. Esc disarms. A Stop cascades to descendants, and each descendant generates a receipt. Prevents accidental destructive stops on high-privilege agents.

---

## 5. Feature Request Trends

Distilled from the top 30 issues, the most-requested feature directions are:

| Trend | Representative Issues | Significance |
|---|---|---|
| **Token & cost observability** | #6011, #6426, #6425 | Per-component token accounting, cache hit rates, model-invoked self-compaction, and context-pressure notices. Users want granular visibility into LLM costs and context usage. |
| **Pluggable agent memory** | #6050, #6086 | A generic `MemoryBackend` seam with causal-memory / mem0 backends, plus a unified addressing scheme for scratchpad, workshop, and Agent Mail. |
| **Fleet/agent unification** | #6036, #5915, #5479 | Collapse the "fleet" vs "agent" conceptual duplication, add model shortlists with role assignment, and provide a first-class TUI sub-agent management view. |
| **IDE & ACP integration** | #5835, #5093 | Run ACP sessions on the full thread/turn runtime (Zed, JetBrains, VS Code, Neovim hosts), plus a conformance harness for the Responses API dialect. |
| **AST-resolved code editing** | #6203 | `edit_symbol` tool that anchors edits by symbol name rather than fragile text matching, eliminating the dominant edit-tool failure mode. |
| **Goal tracking with conversational creation** | #6327, #6013 | A Tracking/Goals surface with conversational goal creation via category picker, plus independent verification gates for goal status. |
| **MCP spec convergence** | #6280, #6142 | Converge on the MCP 2026-07-28 spec (rmcp ClientLifecycleMode negotiation), reconcile the two duplicated MCP client stacks. |

---

## 6. Developer Pain Points

Recurring frustrations and high-frequency requests extracted from the issue and PR landscape:

- **Codebase maintainability crisis.** Four source files exceed 9k lines (`lib.rs` at 18.7k, `config.rs` at 12.3k, `client.rs`

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>



# ComfyUI Community Digest — 2026-09-24

A technical analysis of the latest activity, issues, and pull requests in the ComfyUI repository. 

---

### 1. Today's Highlights
The primary focus of development has shifted towards stabilizing **Dynamic VRAM** and **MiniMax H3** integrations, which have recently caused several high-severity bugs (hangs, leaks, and NaN outputs). On the feature front, the core team has introduced a major milestone for robustness with **partial graph execution** (allowing independent branches to continue if a node fails), alongside key quantization updates (w6a8) and new model support (Ming-image, Recraft V4.1).

---

### 2. Releases
* **No new official releases** were published in the last 24 hours.
* However, the **v0.37.2 backport release** is actively being finalized (PR #16505, PR #16504), cherry-picking critical updates such as system prompts for `TextGenerate`, partner node updates (Quiver Arrow 2, Anthropic Claude Opus 5.5, Recraft V4.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Community Digest — 2026-09-24
Source: [github.com/ollama/ollama](https://github.com/ollama/ollama)

## 1. Today's Highlights
- **v0.34.4-rc0** is the only release in the last 24h, bringing a server fix for intermittent “model not found” errors and a single-pass structured-output path for thinking models.
- **Structured output and tool calling remain the dominant reliability themes**: the MLX whitespace non-termination bug was closed with a fix, while Homebrew MLX structured output and GPT-OSS tool calls remain active.
- **Performance/resource pressure is rising**, with renewed attention on CPU burn when models are fully GPU-resident and a new request to yield idle model VRAM under GPU-memory pressure.

## 2. Releases
### v0.34.4-rc0 — targeting v0.34.4
Release link: [v0.34.4-rc0](https://github.com/ollama/ollama/releases/tag/v0.34.4-rc0)

- `server`: fix intermittent “model not found” errors — [PR #18438](https://github.com/ollama/ollama/pull/18438)
- `server`: apply structured outputs in a single pass on thinking models — [PR #18479](https://github.com/ollama/ollama/pull/18479)
- `app`: avoid System Events for [release note truncated in source]

## 3. Hot Issues
1. **[#12187](https://github.com/ollama/ollama/issues/12187) — GPT-OSS not completing tool calls**  
   Long-running bug: Open WebUI tool calls start but “complete” without executing. High community engagement with **39 comments** and 2 👍, indicating persistent tool-calling reliability concerns.

2. **[#16060](https://github.com/ollama/ollama/issues/16060) — Non-US phone verification blocks paid plan registration**  
   German users cannot register for paid plans because phone verification rejects non-US numbers. **18 comments** and 1 👍 show global onboarding/payment friction for Ollama Cloud.

3. **[#15887](https://github.com/ollama/ollama/issues/15887) — Add MIMO v2.5 to Ollama Cloud**  
   Request to add Xiaomi’s MIT-licensed MIMO v2.5 with million-token context. Strong support: **10 comments** and **18 👍**, making it one of the most-upvoted model requests.

4. **[#17833](https://github.com/ollama/ollama/issues/17833) — v0.32.14 heavily uses CPU when model fully fits in VRAM**  
   Regression report showing 50–80% CPU spikes despite `ollama ps` reporting 100% GPU. **5 comments**, 3 👍, and it is directly targeted by [PR #18613](https://github.com/ollama/ollama/pull/18613).

5. **[#18597](https://github.com/ollama/ollama/issues/18597) — Homebrew Ollama cannot provide structured output with MLX models**  
   Homebrew build fails because `xgrammar` is unavailable. **3 comments**, highlighting packaging/distribution gaps for MLX structured outputs.

6. **[#18567](https://github.com/ollama/ollama/issues/18567) — MLX structured output never terminates**  
   Model emits whitespace until `num_predict` when using JSON schema/format. Now **CLOSED**, with a fix in [PR #18569](https://github.com/ollama/ollama/pull/18569).

7. **[#18392](https://github.com/ollama/ollama/issues/18392) — Sustained `/api/embed` load exhausts loopback ports on Windows**  
   llama-server HTTP client keep-alive disabled leads to `connectex` port exhaustion under bulk embedding. **2 comments**, important for production embedding workloads on Windows.

8. **[#17673](https://github.com/ollama/ollama/issues/17673) — Custom tools for OpenAI Responses API compatibility**  
   Requests support for OpenAI-style “custom tools” where models return arbitrary strings. **2 comments**, relevant for agent/MCP-style integrations.

9. **[#18612](https://github.com/ollama/ollama/issues/18612) — Yield idle model VRAM under GPU-memory pressure**  
   New feature request for best-effort VRAM release when another GPU app needs memory. **1 👍** already, reflecting growing multi-application GPU workflows.

10. **[#18609](https://github.com/ollama/ollama/issues/18609) — `glm-ocr` returns HTTP 500 on 0.34.1+**  
    OCR requests that worked on 0.34.0 now fail with “token repeat limit reached.” Newly filed, but a clear model-specific regression.

## 4. Key PR Progress
1. **[#18613](https://github.com/ollama/ollama/pull/18613) — `llm`: pass `--poll 0` to llama-server when a GPU is present**  
   Targets the CPU-burn regression in [#17833](https://github.com/ollama/ollama/issues/17833) by changing polling behavior for GPU-backed runners.

2. **[#18569](https://github.com/ollama/ollama/pull/18569) — `mlxrunner`: cap grammar whitespace so structured output terminates**  
   Closed fix for MLX structured-output runaway generation in [#18567](https://github.com/ollama/ollama/issues/18567).

3. **[#18615](https://github.com/ollama/ollama/pull/18615) — `mlxrunner`: Update XGrammar to 0.2.7 for structured outputs**  
   Picks up schema fixes for typed dictionary values and short arrays.

4. **[#18610](https://github.com/ollama/ollama/pull/18610) — `server`: avoid native JSON round trip for OpenAI embeddings**  
   Removes unnecessary serialization/deserialization for large `/v1/embeddings` batches, improving performance.

5. **[#18608](https://github.com/ollama/ollama/pull/18608) — Support `max_completion_tokens` as a generation cap**  
   Maps newer OpenAI client parameter to `num_predict`, closing a silent compatibility gap.

6. **[#18439](https://github.com/ollama/ollama/pull/18439) — `openai`: reject `previous_response_id` instead of answering with nothing**  
   Prevents `/v1/responses` from returning HTTP 200 with an empty result when conversation context is missing.

7. **[#16263](https://github.com/ollama/ollama/pull/16263) — `responses`: preserve namespace tool identity**  
   Fixes tool-call routing for clients like Codex by retaining the original `(namespace, name)` pair.

8. **[#18578](https://github.com/ollama/ollama/pull/18578) — `cmd/server`: add `ollama export` and `ollama import` commands**  
   Adds model export/import plus `/api/export` and `/api/import`, improving offline and air-gapped transfer workflows.

9. **[#16446](https://github.com/ollama/ollama/pull/16446) — AMD: update to ROCm v10 with improved HCL**  
   Moves Linux/Windows ROCm builds to AMD v10 multi-arch payloads, adding Linux and Windows hardware compatibility coverage.

10. **[#18606](https://github.com/ollama/ollama/pull/18606) — `feat`: add System One scoring API**  
    Introduces `POST /v1/systemone` for structured decisions using a local Nimble model, returning choice probabilities, `noul`, and ordered scores.

## 5. Feature Request Trends
- **Cloud model catalog expansion** — strong demand for new cloud models such as [MIMO v2.5](https://github.com/ollama/ollama/issues/15887).
- **OpenAI Responses API compatibility** — custom tools, `previous_response_id`, and `max_completion_tokens` are recurring gaps: [#17673](https://github.com/ollama/ollama/issues/17673), [#18439](https://github.com/ollama/ollama/pull/18439), [#18608](https://github.com/ollama/ollama/pull/18608).
- **GPU resource management** — users want Ollama to yield idle VRAM under pressure: [#18612](https://github.com/ollama/ollama/issues/18612), plus CPU/GPU efficiency concerns in [#17833](https://github.com/ollama/ollama/issues/17833).
- **Structured-output reliability across engines** — MLX and Homebrew packaging issues dominate: [#18597](https://github.com/ollama/ollama/issues/18597), [#18567](https://github.com/ollama/ollama/issues/18567).
- **Model portability** — export/import support is progressing via [#18578](https://github.com/ollama/ollama/pull/18578), addressing offline/air-gapped transfer needs.
- **Global cloud onboarding** — non-US phone verification remains a blocker for paid adoption: [#16060](https://github.com/ollama/ollama/issues/16060).

## 6. Developer Pain Points
- **Tool calling is still unreliable across models** — GPT-OSS tool calls do not complete ([#12187](https://github.com/ollama/ollama/issues/12187)), and Gemma 4 drops tool calls with many string values ([#18605](https://github.com/ollama/ollama/issues/18605)).
- **Structured output breaks in specific builds/engines** — Homebrew MLX lacks `xgrammar` ([#18597](https://github.com/ollama/ollama/issues/18597)), while MLX previously failed to terminate ([#18567](https://github.com/ollama/ollama/issues/18567)).
- **Performance regressions remain costly** — high CPU use despite full GPU offload ([#17833](https://github.com/ollama/ollama/issues/17833)) and Windows loopback port exhaustion under embedding load ([#18392](https://github.com/ollama/ollama/issues/18392)).
- **OpenAI-compatible API surface has silent gaps** — missing `max_completion_tokens`, `previous_response_id`, and custom tools cause dropped parameters or empty responses: [#17673](https://github.com/ollama/ollama/issues/17673), [#18439](https://github.com/ollama/ollama/pull/18439), [#18608](https://github.com/ollama/ollama/pull/18608).
- **Platform and account friction** — non-US phone verification blocks paid cloud registration ([#16060](https://github.com/ollama/ollama/issues/16060)), and Windows embedding workloads hit OS-level connection limits ([#18392](https://github.com/ollama/ollama/issues/18392)).
- **Model-specific regressions need faster triage** — `glm-ocr` fails on 0.34.1+ ([#18609](https://github.com/ollama/ollama/issues/18609)), and `qwen3.8:27b` hangs on `/v1/chat/completions` while other paths work ([#17790](https://github.com/ollama/ollama/issues/17790)).

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

# llama.cpp Community Digest — 2026-09-24

## 1. Today's Highlights
llama.cpp shipped **v0.5.0**, a broad release focused on backend performance/correctness, model coverage, and server/router robustness, including HRM-Text (DFM Mimir 1B), MiMo-V2.6/HunyuanOCR conversion, ggml 0.25.0 improvements, and multi-address HTTP binding. Recent builds also landed CUDA sparse-FA for DSV4 prefill, OpenCL dp4a kernels, server token-counting crash fixes, Jinja unary parsing, and Gemma4 DSpark draft support. Community attention remains concentrated on backend-specific performance regressions — especially Vulkan/RDNA3, CUDA sparse FA, and Metal batched decode — plus demand for broader model and router-mode support.

## 2. Releases
- **v0.5.0** — Major release covering backend performance/correctness, broader model support, and more robust server/router operation. Highlights include HRM-Text (DFM Mimir 1B), MiMo-V2.6 and HunyuanOCR conversion support, ggml 0.25.0 backend improvements, multi-address HTTP binding, and image output changes.  
  https://github.com/ggml-org/llama.cpp/releases/tag/v0.5.0
- **b11149** — Adds `-b/--backend` option to `test-llama-archs` for backend-specific architecture testing.  
  https://github.com/ggml-org/llama.cpp/releases/tag/b11149
- **b11147** — OpenCL: adds A8 Q6_K non-MoE dp4a binary kernel.  
  https://github.com/ggml-org/llama.cpp/releases/tag/b11147
- **b11146** — Version bump to 0.5.0.  
  https://github.com/ggml-org/llama.cpp/releases/tag/b11146
- **b11140** — CUDA: enables sparse-FA for DSV4 prefill again; unrolls the query loop of the sparse mask scan.  
  https://github.com/ggml-org/llama.cpp/releases/tag/b11140
- **b11139** — Server: fixes token counting API crash on sleep.  
  https://github.com/ggml-org/llama.cpp/releases/tag/b11139
- **b11138** — Jinja: parses unary `+/-` before variables, fixing slices like `items[:-n]`.  
  https://github.com/ggml-org/llama.cpp/releases/tag/b11138
- **b11136** — Server: accepts OpenAI `video_url` content type and `data:video/...` URIs.  
  https://github.com/ggml-org/llama.cpp/releases/tag/b11136
- **b11135** — Server: dedups draft HF model via `dedup-cache-models`.  
  https://github.com/ggml-org/llama.cpp/releases/tag/b11135
- **b11132** — Model: supports Gemma4 DSpark draft backbone, including GGUF conversion and runtime support.  
  https://github.com/ggml-org/llama.cpp/releases/tag/b11132

## 3. Hot Issues
1. **#28752 — Severe prompt-processing speed drop after b10780 on Vulkan/RDNA3**  
   High-impact Vulkan regression affecting AMD RDNA3 users; 14 comments and 2 👍 indicate active troubleshooting.  
   https://github.com/ggml-org/llama.cpp/issues/28752

2. **#22197 — ggml-backend-meta multi-buffer unsupported leading to Vulkan segfault**  
   Backend-meta/Vulkan stability issue with 11 comments and 3 👍; closed but representative of backend-meta correctness concerns.  
   https://github.com/ggml-org/llama.cpp/issues/22197

3. **#26669 — Feature request: Support Laguna S 2.1 DFlash**  
   Strong model-support demand with 10 comments and 5 👍, reflecting interest in newer DFlash architectures.  
   https://github.com/ggml-org/llama.cpp/issues/26669

4. **#28211 — HIP/ROCm gfx1151 wrong logits, triggered by prompts longer than `n_ubatch`**  
   Correctness bug on Strix Halo/RDNA3.5; 9 comments highlight ROCm reliability concerns.  
   https://github.com/ggml-org/llama.cpp/issues/28211

5. **#29281 — CUDA sparse flash attention decode 1.6x slower (b11047 → b11062)**  
   Clear performance regression in CUDA sparse-FA decode, 9 comments; important for long-context inference.  
   https://github.com/ggml-org/llama.cpp/issues/29281

6. **#28734 — qwen4exp CUDA decode slows linearly with context**  
   Long-context scaling issue on multi-GPU CUDA setups; 7 comments.  
   https://github.com/ggml-org/llama.cpp/issues/28734

7. **#29022 — Fast Tool Gating & Single-Pass Selection via Prefill Logit Slicing**  
   Enhancement proposal for faster tool selection; 7 comments and 3 👍 show practical agent/tooling interest.  
   https://github.com/ggml-org/llama.cpp/issues/29022

8. **#26116 — Allow `llama serve -hf` to use llama-server in router mode**  
   Router-mode UX improvement; 7 comments, relevant to server orchestration and model caching.  
   https://github.com/ggml-org/llama.cpp/issues/26116

9. **#28633 — CUDA: make `GGML_CUDA_FA_ALL_QUANTS=ON` the default**  
   Highlights silent CPU fallback for 4-bit KV cache, causing ~30x slowdown without warning; 6 comments.  
   https://github.com/ggml-org/llama.cpp/issues/28633

10. **#28433 — draft-MTP draft context sized from `llama_n_ctx()` instead of `llama_n_ctx_seq()`**  
    Server-killing bug at decode entry on large `--ctx-size`; 4 comments, important for draft-MTP/router deployments.  
    https://github.com/ggml-org/llama.cpp/issues/28433

## 4. Key PR Progress
1. **#29151 — model: add Ling 3.0 VL support**  
   Adds support for Ling-3.0-flash-VL, a 124B/5.1B-active hybrid KDA + gated MLA MoE vision-language model.  
   https://github.com/ggml-org/llama.cpp/pull/29151

2. **#29077 — ggml: add PQ2_0 and PTQ1_0 ternary types; llama: apply Hadamard-folded weights**  
   Enables ternary GGUF models such as Ternary-Bonsai-2-27B, adding tensor types and activation-side transforms.  
   https://github.com/ggml-org/llama.cpp/pull/29077

3. **#24033 — jinja: implement `map('filter')`**  
   Improves Jinja filter mapping, particularly for Gemma4 tool schema compatibility.  
   https://github.com/ggml-org/llama.cpp/pull/24033

4. **#28554 — server: pass `id_slot` through Anthropic `/v1/messages` conversion**  
   Fixes slot pinning being silently ignored on Anthropic-compatible endpoints.  
   https://github.com/ggml-org/llama.cpp/pull/28554

5. **#29030 — qwen4exp/gemma4: gather lazy tensor rows with direct reads**  
   OS-agnostic reimplementation using `llama_file`; targets large performance overhead on integrated platforms like Strix Halo.  
   https://github.com/ggml-org/llama.cpp/pull/29030

6. **#27952 — Vulkan: int8 coopmat1 matmul for AMD RDNA3 and RDNA4**  
   Adds an MMQ cm1 shader supporting q4_0/q4_1/q5_0/q5_1/q8_0/q3_k/q4_k/q5_k/q6_k/mxfp4/nvfp4/iq4_nl on RDNA3/4.  
   https://github.com/ggml-org/llama.cpp/pull/27952

7. **#21067 — ggml: allow prefetching tensor overrides**  
   CUDA-only PoC guarded by `--prefetch-weights`, overlapping per-layer weight prefetch with compute.  
   https://github.com/ggml-org/llama.cpp/pull/21067

8. **#29340 — Metal: fix threadgroup memory overflow in quantized flash attention**  
   Addresses overflow at head sizes 512/512 or 576/512 with batches of 20–31 tokens by dequantizing KV to F16.  
   https://github.com/ggml-org/llama.cpp/pull/29340

9. **#29137 — CUDA: add conv3d with implicit GEMM**  
   Adds CUDA support for `GGML_OP_CONV_3D` with an F16 implicit-GEMM kernel and direct fallback.  
   https://github.com/ggml-org/llama.cpp/pull/29137

10. **#29245 — SYCL: add grouped MoE XMX GEMM**  
    Moves away from one GEMM per expert, improving compute utilization for narrow MoE activations.  
    https://github.com/ggml-org/llama.cpp/pull/29245

## 5. Feature Request Trends
- **Broader model and architecture support**: requests and PRs target Laguna S 2.1 DFlash, Ling 3.0 VL, Gemma4 DSpark, ternary Bonsai models, and Qwen-family variants.  
  https://github.com/ggml-org/llama.cpp/issues/26669  
  https://github.com/ggml-org/llama.cpp/pull/29151  
  https://github.com/ggml-org/llama.cpp/pull/29077
- **Server/router usability**: router-mode `llama serve -hf`, per-device memory visibility, slot routing through Anthropic APIs, and web UI model preselection.  
  https://github.com/ggml-org/llama.cpp/issues/26116  
  https://github.com/ggml-org/llama.cpp/issues/26129  
  https://github.com/ggml-org/llama.cpp/pull/28554
- **OpenAI API compatibility**: support for `video_url` content, embeddings `dimensions`, and better error semantics for invalid requests.  
  https://github.com/ggml-org/llama.cpp/issues/25210  
  https://github.com/ggml-org/llama.cpp/pull/29060
- **Backend performance and coverage**: Vulkan int8 coopmat, SYCL grouped MoE XMX GEMM, CUDA conv3d, Metal flash-attention improvements, and MUSA fixes.  
  https://github.com/ggml-org/llama.cpp/pull/27952  
  https://github.com/ggml-org/llama.cpp/pull/29245  
  https://github.com/ggml-org/llama.cpp/pull/29137
- **Tool-calling and agent efficiency**: fast tool gating via prefill logit slicing and Jinja filter improvements for tool schemas.  
  https://github.com/ggml-org/llama.cpp/issues/29022  
  https://github.com/ggml-org/llama.cpp/pull/24033

## 6. Developer Pain Points
- **Backend-specific performance regressions**: Vulkan/RDNA3 prompt processing, Vulkan 131k-context decode cliffs, CUDA sparse-FA decode slowdowns, and Metal batched-decode collapse are recurring and hard to isolate.  
  https://github.com/ggml-org/llama.cpp/issues/28752  
  https://github.com/ggml-org/llama.cpp/issues/27734  
  https://github.com/ggml-org/llama.cpp/issues/29281  
  https://github.com/ggml-org/llama.cpp/issues/29335
- **Silent fallbacks and hard-to-diagnose slowdowns**: CUDA 4-bit KV cache can silently fall back to CPU prefill, and Vulkan suballocation fragmentation can cause severe throughput cliffs without obvious warnings.  
  https://github.com/ggml-org/llama.cpp/issues/28633  
  https://github.com/ggml-org/llama.cpp/issues/27734
- **ROCm/HIP correctness and GPU selection issues**: wrong logits on gfx1151, Windows ROCm not using the GPU, and HIP-related memory faults remain open concerns.  
  https://github.com/ggml-org/llama.cpp/issues/28211  
  https://github.com/ggml-org/llama.cpp/issues/26964  
  https://github.com/ggml-org/llama.cpp/issues/26782
- **Server stability under sleep/router/draft-MTP workloads**: token-counting crashes on sleeping servers and draft-MTP context-sizing bugs can kill router-mode deployments.  
  https://github.com/ggml-org/llama.cpp/issues/29188  
  https://github.com/ggml-org/llama.cpp/issues/28433
- **Memory/allocator correctness**: stale `ggml_gallocr` plans and backend-meta bounds issues point to low-level memory-management risks in dynamic-topology graphs.  
  https://github.com/ggml-org/llama.cpp/issues/28448  
  https://github.com/ggml-org/llama.cpp/issues/26367
- **Stale and unconfirmed issues**: many long-running bugs remain open or stale, increasing the need for backend-specific tests and clearer regression triage.  
  https://github.com/ggml-org/llama.cpp/issues/7218  
  https://github.com/ggml-org/llama.cpp/issues/25904

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*