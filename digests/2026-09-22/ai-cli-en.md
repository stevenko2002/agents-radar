# AI CLI Tools Community Digest 2026-09-22

> Generated: 2026-09-21 22:15 UTC | Tools covered: 12

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



Here is the brief "Today's Highlights" summary of the most important updates across all AI developer tools for 2026-09-22:

*   **Kimi Code CLI**: The legacy Python-based `kimi-cli` reached its final release with **v1.51.0**, officially archiving the repository and directing all users to migrate to the native binary version hosted at `MoonshotAI/kimi-code`. [Link](https://github.com/MoonshotAI/kimi-cli/pull/2660)
*   **ComfyUI**: Released **v0.37.0**, integrating Aimdo 0.5.5 for automatic fast-disk storage detection and adding OpenAI partner node updates with transparent background support for GPT Image 2. [Link](https://github.com/Comfy-Org/ComfyUI/releases/tag/v0.37.0)
*   **Gemini CLI**: Released **v0.62.0-nightly.20260921.gcfbcaa8df**, bringing critical improvements to file write safety (atomic writes), serialized same-path parallel execution, scheduler queue draining on disposal, and a fix for a high-severity CPU hang. [Link](https://github.com/google-gemini/gemini-cli/releases/tag/v0.62.0-nightly.20260921.gcfbcaa8df)
*   **OpenAI Codex**: Released **rust-v0.157.0-alpha.1**, focusing on core engine stability, session tracking, and TUI improvements, alongside incremental alpha builds (v0.156.0-alpha.11 through .17). [Link](https://github.com/openai/codex/releases/tag/rust-v0.157.0-alpha.1)
*   **GitHub Copilot CLI**: Released **v1.0.88-0**, adding OSC 777 terminal notifications for Ghostty and WezTerm, enhancing namespaced custom skill discovery, and improving MCP/plugin status view visibility. [Link](https://github.com/github/copilot-cli/releases/tag/v1.0.88-0)
*   **Pi**: Released **v0.87.0**, introducing canonical session context boundaries and extension lifecycle hooks that allow developers to edit model context without rewriting history. [Link](https://github.com/earendil-works/pi/releases/tag/v0.87.0)
*   **Qwen Code**: Released **v0.24.3**, enhancing the Web Shell with structured shell results, optional trajectory metrics, host settings allowlists, and mobile navigation fixes. [Link](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.3)
*   **llama.cpp**: Rolled out build **b11078**, which introduces `LLAMA_ARG_*` environment variables for declarative sampling parameter configuration in `llama-server`, and build **b11070**, adding 64-bit Hexagon buffer/DMA support. [Link](https://github.com/ggml-org/llama.cpp/releases/tag/b11081)

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-09-22 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking

| # | Skill / PR | Functionality | Status | Link |
|---|-----------|---------------|--------|------|
| 1 | **skill-creator** (PR #1298, #1769, #539) | The core meta-skill for authoring new Skills. Three active PRs address trigger evaluation false-negatives (0% recall bug), Windows `select()` failures on subprocess pipes, and unquoted YAML descriptions causing silent parse failures. The trigger-eval bug (#1769) is the most critical — it reports `precision=100% recall=0%` for every skill, causing the optimizer to tune against fabricated evidence. | OPEN | [#1298](https://github.com/anthropics/skills/pull/1298), [#1769](https://github.com/anthropics/skills/pull/1769), [#539](https://github.com/anthropics/skills/pull/539) |
| 2 | **mcp-builder** (PR #1742, Issue #1390) | Skill for building Model Context Protocol servers. PR #1742 fixes the `mcp>=2.0.0` breaking change where `streamablehttp_client` was renamed to `streamable_http_client`, and custom headers moved to `create_mcp_http_client`. Issue #1390 reveals a deeper problem: the evaluation harness silently fabricates tool-execution errors, scoring 0/N against any real MCP server. | OPEN | [#1742](https://github.com/anthropics/skills/pull/1742), [Issue #1390](https://github.com/anthropics/skills/issues/1390) |
| 3 | **DOCX / Office Skills** (PRs #541, #1790, #1765) | Document creation and redlining for .docx/.pptx/.xlsx. Three active fixes: (1) `w:id` collision between tracked changes and bookmarks causing corruption (#541), (2) missing `document.xml.rels` creation in comment.py (#1790), (3) UTF-8 decoding failure in redlining diffs on non-UTF-8 locales (#1765). High PR density signals heavy community usage. | OPEN | [#541](https://github.com/anthropics/skills/pull/541), [#1790](https://github.com/anthropics/skills/pull/1790), [#1765](https://github.com/anthropics/skills/pull/1765) |
| 4 | **AWT — AI Watch Tester** (PR #822) | Zero-code E2E testing skill giving Claude vision and browser control to auto-generate and run Playwright tests. Active since March 2026, last updated September 19 — the longest-tenured open PR, suggesting sustained review interest. | OPEN | [#822](https://github.com/anthropics/skills/pull/822) |
| 5 | **testing-patterns** (PR #723) | Comprehensive testing skill covering the Testing Trophy model, unit testing (AAA pattern, naming), React component testing, integration, and E2E patterns. Six-month open tenure with recent September activity. | OPEN | [#723](https://github.com/anthropics/skills/pull/723) |
| 6 | **pyxel** (PR #525) | Retro game development in Python using Pyxel. Guides the agent through implementation, deterministic headless runs, frame inspection, and state checks. Authored by kitao (Pyxel's creator). Longest-open new-skill PR (since March 2026). | OPEN | [#525](https://github.com/anthropics/skills/pull/525) |
| 7 | **proofcore-contract-auditor** (PR #1771) | Web3 smart contract static analysis (Solidity/Rust) with audit proofs anchored to TON Blockchain via ProofCore's zero-storage Merkle protocol. Newest high-scope submission. | OPEN | [#1771](https://github.com/anthropics/skills/pull/1771) |
| 8 | **document-typography** (PR #514) | Typographic quality control for AI-generated documents: fixes orphan word wrap, widow paragraphs, and numbering misalignment. Addresses a universal but rarely-requested quality gap. | OPEN | [#514](https://github.com/anthropics/skills/pull/514) |

---

## 2. Community Demand Trends

Distilled from the top Issues by engagement:

| Trend | Evidence | Anticipated Skill Direction |
|-------|----------|---------------------------|
| **Security & Trust Boundaries** | Issue #492 (43 comments, 👍2): Community skills distributed under `anthropic/` namespace impersonate official skills, creating a trust boundary vulnerability. Issue #1175: concerns about access-control logic in SKILL.md for SharePoint documents. | **Skill signing/verification** — namespace gating, provenance attestation, permission scoping |
| **Org-Wide Skill Distribution** | Issue #228 (16 comments, 👍8): Highest 👍 count. Users must manually share `.skill` files via Slack/Teams. Demand for shared skill libraries or direct sharing links within organizations. | **Skill registry/sharing** — org-level skill stores, permissioned distribution, version management |
| **Skill Evaluation Reliability** | Issue #556 (12 comments, 👍7): `run_eval.py` achieves 0% trigger rate — `claude -p` never invokes skills. Issue #1390: MCP builder eval scores 0/N due to fabricated errors. Issue #1487: `claude-api` injects ~156k tokens in one call. | **Evaluation & context-budgeting** — reliable trigger testing, token budget enforcement, eval harness hardening |
| **Agent Safety & Governance** | Issue #412 (6 comments): Proposes an `agent-governance` skill for policy enforcement, threat detection, and audit trails. Issue #1385 (4 comments, 👍1): Three-gate reasoning quality pipeline. Issue #1329 (9 comments): `compact-memory` skill for efficient agent state. | **Meta-agent skills** — governance guardrails, reasoning verification, context compaction |
| **MCP Integration** | Issue #16 (4 comments): Proposal to expose Skills as MCPs, turning skills into typed API surfaces. PR #1742 addresses MCP ≥2 compatibility. | **MCP-as-skill-interface** — bidirectional skill↔MCP bridging, standardized tool APIs |
| **Cross-Platform & Bedrock Support** | Issue #29 (4 comments): Skills don't work with AWS Bedrock. PR #1298 addresses Windows subprocess failures. | **Platform portability** — Bedrock/Vertex compatibility, Windows/Unix parity |

---

## 3. High-Potential Pending Skills

PRs with strong scope, active recent updates, and clear community need — likely candidates to land soon:

| PR | Skill | Why It May Land Soon |
|----|-------|---------------------|
| [#1742](https://github.com/anthropics/skills/pull/1742) | **mcp-builder** fix for `mcp>=2.0.0` | Fixes a confirmed breaking change (Issue #1668); updated Sep 19; narrow, well-scoped fix |
| [#1769](https://github.com/anthropics/skills/pull/1769) | **skill-creator** trigger detection 0% recall | Fixes a critical eval bug (Issue #1721) that makes all trigger optimization unreliable; high blast radius |
| [#1765](https://github.com/anthropics/skills/pull/1765) | **Office skills** UTF-8 redlining fix | Small, targeted fix for Issue #1707; prevents data corruption on non-ASCII content |
| [#1790](https://github.com/anthropics/skills/pull/1790) | **DOCX** missing `.rels` creation | Narrow defect fix; addresses a clear crash path |
| [#538](https://github.com/anthropics/skills/pull/538) | **PDF** case-sensitivity fix | Simple 8-replacement fix preventing failures on case-sensitive filesystems (Linux); low risk |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Comprehensive scope with Sep 21 activity; addresses a gap with no existing testing skill |
| [#822](https://github.com/anthropics/skills/pull/822) | **AWT (AI Watch Tester)** | Sep 19 update; solves E2E testing with novel vision+browser approach; strong use case |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for reliable skill evaluation and trustworthy distribution** — the top three Issues by engagement (43, 16, 12 comments) all center on the same structural problem: Skills cannot be trusted if they can't be accurately tested (#556, #1390) and users can't distinguish official from community contributions (#492) or share them within organizations (#228).

---



# Claude Code Community Digest — 2026-09-22

## Today's Highlights

No new releases shipped in the last 24 hours. Activity was dominated by stale-issue triage, with the macOS sandbox `ARG_MAX` failure (#73468) drawing the most engagement (10 comments, 6 👍). Two open PRs landed: one adding a GitHub connection issue template for claude.ai, and another fixing spurious refetches in the `diff` mod when read-only shell commands run.

## Releases

None in the past 24 hours.

## Hot Issues

**1. [bug] macOS sandbox breaks with many git worktrees — #73468** ([ehsan](https://github.com/ehsan), 10 comments, 6 👍)
Every sandboxed Bash command fails with `E2BIG` when the inline Seatbelt profile exceeds `ARG_MAX`. This is a blocker for users with large worktree setups; the sandbox is effectively unusable. [Link](https://github.com/anthropics/claude-code/issues/73468)

**2. [bug] CJK text corrupted on clipboard in fullscreen TUI — #66269** ([reggiechan74](https://github.com/reggiechan74), 8 comments)
Text renders correctly on screen but copying produces mojibake. The no-flicker/fullscreen renderer is the culprit; switching `tui: "default"` works around it. Affects macOS + OrbStack users. [Link](https://github.com/anthropics/claude-code/issues/66269)

**3. [bug] `send_message` never delivers cross-session — #86279** ([nourcosarl](https://github.com/nourcosarl), 5 comments)
The API returns success and the UI renders the message, but the target session hangs indefinitely with no turn created. Requires manual cancellation. [Link](https://github.com/anthropics/claude-code/issues/86279)

**4. [bug] hookify `stop`/`prompt` simple-pattern rules never fire — #83769** ([qasimsethi1-svg](https://github.com/qasimsethi1-svg), 4 comments)
Two fix PRs have been open since March with no merge. Users relying on hook-based automation are blocked. [Link](https://github.com/anthropics/claude-code/issues/83769)

**5. [bug] SessionStart `initialUserMessage` ignored in TUI — #85951** ([carronch](https://github.com/carronch), 3 comments)
Confirmed by maintainers as `-p`-only by design; the TUI has never consumed it. Users want either support or explicit documentation. [Link](https://github.com/anthropics/claude-code/issues/85951)

**6. [bug] Token rotation + jammed tasks silently consume Max quota — #87805** ([evanmeeks](https://github.com/evanmeeks), 3 comments)
After forced OAuth rotation, stuck background tasks and Remote Control reconnect loops burn usage without producing output. [Link](https://github.com/anthropics/claude-code/issues/87805)

**7. [bug] CoworkVMService crashes with Browser panel — #87679** ([Bubbler-Bear](https://github.com/Bubbler-Bear), 3 comments)
Using any browser tool panel in Cowork mode crashes the VM service. [Link](https://github.com/anthropics/claude-code/issues/87679)

**8. [enhancement] Remote Control supervisor exits after last client detaches — #85269** ([adamkwhite](https://github.com/adamkwhite), 3 comments)
Cannot leave a session available overnight; the supervisor exits ~5s after detachment. Users want a keep-alive option. [Link](https://github.com/anthropics/claude-code/issues/85269)

**9. [bug] Agent view caches terminal width at process start — #86226** ([gmedlin-p3](https://github.com/gmedlin-p3), 3 comments)
Split-pane layouts render with stale widths until a manual window resize. Sharpens a prior report (#80123). [Link](https://github.com/anthropics/claude-code/issues/86226)

**10. [bug] Claude Opus over-generates prose, ignores conciseness — #87820** ([KarlFarts69](https://github.com/KarlFarts69), 2 comments)
Users report Opus behaving like ChatGPT-5 — verbose, ignores explicit brevity constraints. Some are switching to Sonnet 4.8 out of frustration. [Link](https://github.com/anthropics/claude-code/issues/87820)

## Key PR Progress

**1. [OPEN] Add issue template for GitHub connection problems — #95932** ([dicksontsai](https://github.com/dicksontsai))
Adds a dedicated issue form for claude.ai GitHub integration failures, pre-applying the `github-integration` label and requesting a screenshot, reproduction steps, and diagnostics. Streamlines triage for a common pain point. [Link](https://github.com/anthropics/claude-code/pull/95932)

**2. [OPEN] diff mod: skip refetch on read-only shell commands — #95423** ([poteat](https://github.com/poteat))
The `diff` mod was refetching after every Bash/PowerShell call. Now it only refetches when the tool may have written — read-only commands (`ls`, `git status`, `cat`, `grep`) are skipped via `isReadOnly`. Reduces unnecessary network/disk churn. [Link](https://github.com/anthropics/claude-code/pull/95423)

## Feature Request Trends

- **Remote Control persistence**: Multiple users want the supervisor to stay alive after client detachment so sessions can be resumed hours later (#85269, #87154 cross-machine directory population).
- **Hook system reliability**: Simple-pattern hookify rules for `stop`/`prompt` events are broken with no fix in sight (#83769); users want a clear path to resolution or replacement.
- **Cowork mode improvements**: Scheduled tasks not firing (#87811), AskUserQuestion widget interrupting reading (#87807), and Chrome extension connection failures (#87814) all point to Cowork needing stability and UX work.
- **TUI/editor UX**: Double-Esc destroying prompt buffer with no recovery (#87631), `@` autocomplete broken on history-recalled prompts (#87345), and status line blank rows in fullscreen (#83402) suggest the TUI needs input-handling polish.
- **Multi-root workspace support**: VS Code `@`-mention picker only searches the first folder (#87827); users expect full multi-root awareness.

## Developer Pain Points

- **macOS sandbox fragility**: `ARG_MAX` exhaustion with large worktree counts (#73468) and missing `hw.optional.neon` in the Seatbelt allowlist breaking Qt 6 apps (#82423) make the sandbox a recurring source of breakage.
- **Silent data loss**: Unicode normalization in project paths causes conversation history loss on restart (#87822); double-Esc destroys prompt text with no recovery (#87631); editor exit after Ctrl+G loses data (#83006).
- **Background task & session lifecycle leaks**: Jammed tasks after token rotation (#87805), background processes not cleaned on Windows exit (#87813), and headless `-p` sessions exiting while background tasks are pending (#87836) all point to lifecycle management gaps.
- **Model behavior drift**: Opus over-generation (#87820) and silent model consent fallbacks (#87832) leave users feeling they've lost control over model selection and output style.
- **Cross-session & cross-machine gaps**: `send_message` hangs (#86279), cross-machine session directories don't populate (#87154), and CLAUDE.md re-injection on worktree round-trips (#87824) all indicate incomplete distributed-session support.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



# OpenAI Codex Community Digest — 2026-09-22

## 1. Today's Highlights
Today marks the release of `rust-v0.157.0-alpha.1`, bringing core SDK stabilization alongside a massive wave of backported fixes (primarily via automated `copyberry` bot merges) targeting Windows sandbox compatibility, Unix MCP security hardening, and JSON-RPC serialization standardization. On the community side, discussions are heavily dominated by trust and billing concerns, particularly around abnormal subscription quota depletion (#41220) and premium capacity errors (#46189). Additionally, highly requested IDE features like VS Code inline ghost text suggestions (#11898) continue to generate massive community engagement.

---

## 2. Releases
*   **rust-v0.157.0-alpha.1**: The latest alpha release of the Rust SDK, focusing on core engine stability, session tracking, and TUI improvements.
*   **rust-v0.156.0-alpha.11 through .17**: Incremental alpha releases building on the 0.156 branch, mostly focusing on subtle bug fixes for thread metadata, TUI rendering hints, and dependency optimizations.

---

## 3. Hot Issues

### 1. VSCode Extension Revert Failure (#7291)
*   **Status:** Open | **Comments:** 51 | **👍:** 19
*   **Why it matters:** Users on VS Code extension version `0.4.46` are experiencing failures where the extension cannot properly revert changes, disrupting core IDE workflows.
*   **Community Reaction:** High-priority bug with significant frustration over the impact on daily coding tasks. [Link](https://github.com/openai/codex/issues/7291)

### 2. Abnormal Quota Depletion & Accounting Inconsistencies (#41220)
*   **Status:** Open | **Comments:** 50 | **👍:** 17
*   **Why it matters:** A cross-report meta-tracker highlighting that subscription quotas and purchased credits are depleting materially faster than historical baselines, leading to unexpected limits.
*   **Community Reaction:** Severe trust issue; users are actively sharing logs, timestamps, and request IDs to pressure OpenAI Support for a structural fix. [Link](https://github.com/openai/codex/issues/41220)

### 3. Hallucinated Repository State & Unsafe Incident Reports (#46853)
*   **Status:** Open | **Comments:** 19 | **👍:** 0
*   **Why it matters:** Codex falsely reported the repository and deployment state, generating an unsafe public incident report based on fabricated context.
*   **Community Reaction:** Highlights critical AI safety and hallucination risks when relying on automated agents for incident management and repo auditing. [Link](https://github.com/openai/codex/issues/46853)

### 4. Windows Multi-Monitor Window Spill (#25826)
*   **Status:** Open | **Comments:** 25 | **👍:** 20
*   **Why it matters:** On Windows 11, maximizing the Codex Desktop app causes the window to spill onto adjacent monitors in multi-monitor setups.
*   **Community Reaction:** High-priority UI/UX bug for multi-screen developers, with robust community reproduction steps provided. [Link](https://github.com/openai/codex/issues/25826)

### 5. macOS Gatekeeper Malware False Positive (#23195)
*   **Status:** Closed | **Comments:** 23 | **👍:** 27
*   **Why it matters:** macOS suddenly blocked the Codex Desktop app, flagging it as malware mid-session.
*   **Community Reaction:** Highly frustrating false positive that halted active work; users demanded clarity on code-signing and notarization changes. [Link](https://github.com/openai/codex/issues/23195)

### 6. Windows PowerShell Execution Policy False Positive (#40060)
*   **Status:** Open | **Comments:** 20 | **👍:** 0
*   **Why it matters:** The Windows sandbox classifier blocks PowerShell scripts that combine `Start-Process` with unrelated URLs, even on stable releases like `0.149.0`.
*   **Community Reaction:** Major friction for automation developers executing standard shell scripts inside Codex CLI. [Link](https://github.com/openai/codex/issues/40060)

### 7. macOS Orphaned `inProgress` Turns Hiding Completed Turns (#41591)
*   **Status:** Open | **Comments:** 13 | **👍:** 3
*   **Why it matters:** A long-running thread contains an orphaned `inProgress` state that hides subsequent completed turns, persisting even after app restarts.
*   **Community Reaction:** Frustrating state-management bug that requires manual database or session file cleanups to resolve. [Link](https://github.com/openai/codex/issues/41591)

### 8. Codex Usage Web Chart Not Loading (#23686)
*   **Status:** Open | **Comments:** 12 | **👍:** 15
*   **Why it matters:** The "Personal usage" bar chart on the Codex Analytics web dashboard fails to render, showing an empty "No data" state.
*   **Community Reaction:** Critical visibility issue for developers trying to track their daily consumption and limits. [Link](https://github.com/openai/codex/issues/23686)

### 9. macOS 27 LAN Access Block (#35346)
*   **Status:** Open | **Comments:** 10 | **👍:** 2
*   **Why it matters:** Codex Desktop cannot connect to local network devices on macOS 27, throwing `EHOSTUNREACH` errors and failing to prompt for Local Network Permission.
*   **Community Reaction:** Breaks local development environments relying on LAN-based testing and local server integrations. [Link](https://github.com/openai/codex/issues/35346)

### 10. Inline Suggestions / Ghost Text for VS Code Extension (#11898)
*   **Status:** Closed | **Comments:** 9 | **👍:** 47
*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>



# Gemini CLI Community Digest — September 22, 2026

Welcome to the weekly technical digest for the `google-gemini/gemini-cli` repository, curated for AI developers and tooling engineers. Below is a detailed analysis of the latest releases, community-driven issues, critical pull requests, and emerging trends.

---

### 1. Today's Highlights
The Gemini CLI ecosystem is heavily focused on hardening core execution stability and resolving concurrency bugs. The release of **v0.62.0-nightly.20260921.gcfbcaa8df** brings critical improvements to file write safety and scheduler disposal. Simultaneously, the community is actively reporting high-severity behavioral bugs in subagents—most notably, indefinite hangs in the generalist agent and false success reporting after turn limits are reached.

---

### 2. Latest Releases
*   **v0.62.0-nightly.20260921.gcfbcaa8df**
    *   **Focus:** Core robustness, concurrency safety, and lifecycle management.
    *   **Key Highlights:** This nightly release incorporates major patches for atomic tool file writes, serialized same-path parallel execution, scheduler queue draining on disposal, and temporary directory cleanup post-background execution. It also addresses a high-severity CPU hang triggered by stdin parsing of scoped package imports.
    *   **Compare Changelog:** [v0.62.0-nightly.20260920...v0.62.0-nightly.20260921](https://github.com/google-gemini/gemini-cli/compare/v0.62.0-nightly.20260920.gcfbcaa8df...v0.62.0-nightly.20260921.gcfbcaa8df)

---

### 3. Hot Issues (Top 10)
These issues represent the most active, high-priority, or community-voted discussions over the last 24 hours:

1.  **[#21409] Generalist agent hangs indefinitely** *(P1 Bug | 8 👍 | 13 comments)*
    *   **Why it matters:** Users report that whenever the CLI defers tasks to the generalist agent (e.g., simple folder creation), the application hangs completely for over an hour. Avoiding subagent deferral is currently the only known workaround.
    *   [Link to Issue](https://github.com/google-gemini/gemini-cli/issues/21409)
2.  **[#22323] Subagent recovery reports GOAL success, hiding interruption** *(P1 Bug | 2 👍 | 13 comments)*
    *   **Why it matters:** The `codebase_investigator` subagent reports a successful status (`GOAL` termination) even when it hit its `MAX_TURNS` limit before completing analysis, misleading users into thinking a task was fully resolved.
    *   [Link to Issue](https://github.com/google-gemini/gemini-cli/issues/22323)
3.  **[#19873] Leverage model's bash affinity via Zero-Dependency OS Sandboxing** *(P2 Enhancement | 1 👍 | 9 comments)*
    *   **Why it matters:** A large-effort proposal to utilize native bash tool chaining (`grep`, `cat`, `sed`) inside secure, zero-dependency sandboxed environments to optimize model performance without compromising host security.
    *   [Link to Issue](https://github.com/google-gemini/gemini-cli/issues/19873)
4.  **[#22745] Assess the impact of AST-aware file reads, search, and mapping** *(P2 Epic | 1 👍 | 7 comments)*
    *   **Why it matters:** Explores the value of integrating AST-aware tools to precisely read method boundaries, reduce noise tokens, and optimize navigation across large codebases.
    *   [Link to Issue](https://github.com/google-gemini/gemini-cli/issues/22

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



# GitHub Copilot CLI Community Digest — 2026-09-22

A curated summary of the latest releases, hot issues, pull requests, and community-driven trends for the GitHub Copilot CLI repository (`github.com/github/copilot-cli`).

---

### 1. Today's Highlights

The Copilot CLI community is actively stabilizing core features around terminal rendering and session management, following the release of `v1.0.88-0` and the recent `v1.0.77` updates. Today's major discussions center around critical enterprise configurations, such as BYOK custom headers and organizational policy overrides, alongside highly requested workflow features like session branching. Community engagement remains high on usability blockers, particularly memory management (OOM crashes) and terminal streaming corruption.

---

### 2. Latest Releases

#### **v1.0.88-0** (Pre-release / Latest)
*   **OSC 777 Terminal Notifications:** Added optional support for direct OSC 777 terminal notifications in Ghostty and WezTerm sessions.
*   **Skill Discovery Improvements:** Enhanced support for namespaced custom skills and ignored skill directories during the discovery phase.
*   **MCP & Plugin Views:** Server display names and plugin descriptions are now clearly visible in status views.
*   *Link:* [v1.0.88-0 Release Notes](https://github.com/github/copilot-cli/releases/tag/v1.0.88-0)

#### **v1.0.87** (Released 2026-09-21)
*   **Auto Routing Defaults:** Introduced user and managed startup defaults for the Auto routing tier, supporting strict and user-overridable organization policies.
*   **Steering Prompt UX:** Consecutive steering prompts in the same mode now combine into a single pending message. Users can press `Up` in an empty chat input to pull back and edit the combined prompt (including pasted text).
*   *Link:* [v1.0.87 Release Notes](https://github.com/github/copilot-cli/releases/tag/v1.0.87)

---

### 3. Hot Issues (Top 10 Selected)

Here are the 10 most noteworthy issues shaping the community conversation today:

1.  **[OPEN] OOM Crash on Long `--resume` Sessions (#4699)**
    *   *Why it matters:* Copilot CLI repeatedly dies with a V8 heap out-of-memory (OOM) error at the 4 GiB cap during long resumed sessions. Additionally, Node diagnostic crash dumps are being written directly into the user's current working directory.
    *   *Community reaction:* 6 comments, 6 👎/👍 reactions. High priority for power users running massive context sessions.
    *   *Link:* [Issue #4699](https://github.com/github/copilot-cli/issues/4699)
2.  **[CLOSED] Terminal Streaming Renderer Output Corruption (#3749)**
    *   *Why it matters:* Streamed output is heavily corrupted, producing doubled characters, truncated tokens, and duplicated lines during both thinking/reasoning and final assistant response phases.
    *   *Community reaction:* 6 comments, 8 👍

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>



Based on the provided GitHub data for `MoonshotAI/kimi-cli`, here is the structured community digest for **2026-09-22**.

---

### 1. Today's Highlights
Today marks a historic milestone for the Kimi developer ecosystem: the release of **v1.51.0**, which signals the official archival of the legacy Python-based `kimi-cli` and the transition to the next-generation, native **Kimi Code CLI**. Alongside this major architectural shift, the community is focusing on critical hardening fixes, specifically targeting MCP OAuth integration, CJK IME input handling in the web UI, and legacy Windows console encoding crashes.

---

### 2. Releases
*   **kimi-cli v1.51.0 (The Final Release)**
    *   **Summary**: This is the final release of the legacy Python-based `kimi-cli` before the repository is archived. It consolidates documentation, updates the changelog, and syncs the `packages/kimi-code` stub version to 1.51.0. 
    *   **Migration Notice**: All developers are strongly encouraged to migrate to the native binary version hosted at [MoonshotAI/kimi-code](https://github.com/MoonshotAI/kimi-code).
    *   **Links**: 
        *   Release details: [PR #2660](https://github.com/MoonshotAI/kimi-cli/pull/2660)
        *   Archival prep: [PR #2659](https://github.com/MoonshotAI/kimi-cli/pull/2659)

---

### 3. Hot Issues
*Note: While the dataset only lists 2 issues updated in the last 24 hours, both are highly critical to the project's lifecycle and developer UX.*

*   **#2661 [OPEN] 📢 Kimi CLI is no longer maintained: please migrate to Kimi Code CLI**
    *   **Author**: RealKai42 | Created: 2026-09-21
    *   **Significance**: This is the official sunset notice for the Python-based CLI. It informs the entire developer community that active maintenance has ceased, and the native binary (`kimi-code`) is now the sole platform for future feature development.
    *   **Community Reaction**: High urgency for developers still running the legacy CLI to audit their CI/CD pipelines and local environments for migration.
    *   [Link to Issue](https://github.com/MoonshotAI/kimi-cli/issues/2661)
*   **#1534 [CLOSED/Updated] CLI causes confusion and automatic repetition in the terminal interface**
    *   **Author**: YeemingJeen | Created: 2026-03-20 | Updated: 2026-09-21
    *   **Significance**: Reports severe terminal layout corruption and automatic input repetition when manually resizing the terminal window post-startup. This highlights the underlying technical debt of Python-based TUI wrappers, reinforcing the need for the native C/Rust-based Kimi Code CLI.
    *   [Link to Issue](https://github.com/MoonshotAI/kimi-cli/issues/1534)

---

### 4. Key PR Progress
*Note: Summarizing the 5 key active/closed PRs updated recently that shape the final state of the tool.*

*   **PR #2659 [CLOSED] - chore: archive kimi-cli and point users to Kimi Code CLI**
    *   **Summary**: Prepares the repository for read-only archival status. It updates the README, docs site, security policies, and PyPI metadata to act as a permanent redirect pointing users to the new native repository.
    *   [View PR](https://github.com/MoonshotAI/kimi-cli/pull/2659)
*   **PR #2660 [CLOSED] - chore(release): bump kimi-cli to 1.51.0**
    *   **Summary**: Performs the final version bump, moves legacy release notes, and ensures the `kimi-code` wrapper package is decoupled and synced to v1.51.0.
    *   [View PR](https://github.com/MoonshotAI/kimi-cli/pull/2660)
*   **PR #1625 [OPEN] - feat(mcp): add `--scope` option for OAuth and fix upstream auth flow issues**
    *   **Summary**: Enhances Model Context Protocol (MCP) integration by adding repeatable OAuth scope support to server configurations, fixing upstream authorization bottlenecks. Backported onto the current main branch.
    *   [View PR](https://github.com/MoonshotAI/kimi-cli/pull/1625)
*   **PR #2658 [OPEN] - fix(web): preserve IME composition on Enter submission**
    *   **Summary**: Fixes a critical UX bug in `kimi web` where pressing `Enter` during CJK IME composition prematurely submits the prompt instead of confirming the characters. It patches WebKit event clearing behaviors.
    *   [View PR](https://github.com/MoonshotAI/kimi-cli/pull/2658)
*   **PR #2657 [OPEN] - fix(print): handle unsupported stdout encodings**
    *   **Summary**: Prevents crashes (`UnicodeEncodeError`) when streaming output to Windows consoles using legacy encodings (like GBK) by sanitizing print-mode output before writing to stdout.
    *   [View PR](https://github.com/MoonshotAI/kimi-cli/pull/2657)

---

### 5. Feature Request Trends
Based on the final issues and PRs of the repository, the primary feature request trends are shifting towards:
*   **Native Performance & Migration Guides**: Users requesting robust documentation and scripts to transition configurations from Python `kimi-cli` to the Rust/native `kimi-code`.
*   **Enterprise-grade MCP Security**: Strong demand for granular OAuth scopes (as seen in PR #1625) to secure connections to external tool databases.

---

### 6. Developer Pain Points
*   **The Sunset Migration Hurdle**: Developers face the friction of migrating legacy shell aliases and configurations to the new native binary architecture before the PyPI package is fully frozen.
*   **Cross-Platform Terminal Inconsistencies**: Developers face ongoing pain with terminal rendering (issue #1534) and legacy Windows encoding limitations (PR #2657), highlighting the inherent limitations of Python-based terminal wrappers compared to compiled native binaries.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

Thinking Process:

1.  **Analyze the Request:**
    *   **Role:** Technical analyst focused on AI developer tools.
    *   **Source:** GitHub data for `anomalyco/opencode` (OpenCode community).
    *   **Date:** 2026-09-22.
    *   **Data provided:** Latest Releases (none), Latest Issues (top 30 by comment count), Latest Pull Requests (top 20 by comment count).
    *   **Output format:** Structured English digest with 6 specific sections:
        1. Today's Highlights (2-3 sentences)
        2. Releases (omit if none)
        3. Hot Issues (10 noteworthy issues, why they matter, community reaction, links)
        4. Key PR Progress (10 important PRs, features/fixes, links)
        5. Feature Request Trends (most-requested directions from issues)
        6. Developer Pain Points (recurring frustrations/high-frequency requests)

2.  **Analyze the Data (Issues):**
    *   Total provided: ~30 issues. Let's look for the "hottest" 10 to summarize based on comments, likes, recency, and technical significance.
    *   *Issue #13984* [OPEN] "can not copy and paste in opencode CLI" - 61 comments, 32 👍. Major blocker for CLI usability.
    *   *Issue #2773* [CLOSED] "[opentui] clipboard copy not works in remote SSH console." - 28 comments, 3 👍. Core clipboard issue in SSH.
    *   *Issue #14292* [CLOSED] "[discussion, core] [FEATURE]: Save conversations and session data to project folder" - 14 comments, 23 👍. Highly requested feature.
    *   *Issue #48811* [CLOSED] "macOS: every prompt fails with 'undefined is not an object (evaluating 'a.name')'" - 10 comments, 47 👍. Major regression in 1.18.30.
    *   *Issue #48645* [CLOSED] "Regression in 1.18.30: every prompt crashes with TypeError..." - 10 comments, 18 👍. Same regression.
    *   *Issue #4734* [CLOSED] "[discussion] [FEATURE]: Refresh models manually" - 10 comments, 9 👍.
    *   *Issue #49158* [CLOSED] "TypeError: undefined is not an object..." - 9 comments, 35 👍. Same regression.
    *   *Issue #48372* [CLOSED] "SystemPrompt.environment" crash - 9 comments, 27 👍. Same regression.
    *   *Issue #36877* [CLOSED] "Reasoning thoughts not being shown" - 9 comments, 4 👍. Missing reasoning thoughts.
    *   *Issue #45011* [OPEN] "[Web] Sessions created from CLI/TUI never appear in web Home..." - 8 comments, 2 👍. Web sync issue.
    *   *Issue #50093* [OPEN] "Free usage exceeded and there's long retry timers..." - 8 comments, 5 👍. Free tier frustration.
    *   *Issue #39864* [OPEN] "Codex OAuth Fast models run at standard throughput" - 6 comments, 0 👍. Performance issue.
    *   *Issue #46444* [OPEN] "Web Home hides global-project sessions..." - 6 comments, 0 👍.
    *   *Issue #48803* [CLOSED] "v1.18.30: every prompt fails..." - 5 comments, 8 👍.
    *   *Issue #37077* [OPEN] "[FEATURE]: tab shortcuts" - 5 comments, 0 👍.
    *   *Issue #44216* [OPEN] "Web & Desktop home UIs render no projects/sessions..." - 4 comments, 0 👍.
    *   *Issue #37096* [OPEN] "Web UI Session List Empty — Project Auto-Registration Fails..." - 4 comments, 6 👍.
    *   *Issue #50366* [OPEN] "Error from provider (Console): OpenCode's free tier..." - 4 comments, 1 👍.
    *   *Issue #31909* [CLOSED] "[BUG] Custom providers fail on Desktop (Electron)..." - 4 comments, 0 👍.
    *   *Issue #42668* [OPEN] "Web sidebar shows 'no sessions' on Windows..." - 3 comments, 0 👍.
    *   *Issue #48965* [OPEN] "SystemPrompt.environment crashes on every prompt..." - 3 comments, 22 👍.
    *   *Issue #41232* [OPEN] "opencode completion fish emits bash/zsh script..." - 2 comments, 0 👍.
    *   *Issue #42060* [OPEN] "TUI: session directory filter keybind is inactive..." - 2 comments, 0 👍.
    *   *Issue #50446* [OPEN] "provider: opencode-go gateway rejects ~148k input..." - 1 comment, 0 👍.
    *   *Issue #50382* [OPEN] "desktop(browser): embedded browser never persists cookies..." - 1 comment, 0 👍.
    *   *Issue #50236* [OPEN] "acp: session/new catalog ignores config providers..." - 1 comment, 0 👍.
    *   *Issue #50339* [OPEN] "migrate: V1→V2 session history migration OOMs..." - 1 comment, 0 👍.
    *   *Issue #50378* [OPEN] "acp: session/new ignores configured default model..." - 1 comment, 0 👍.
    *   *Issue #50405* [OPEN] "docs: plugins guide's Skills example uses `location`..." - 1 comment, 0 👍.
    *   *Issue #50401* [OPEN] "`GET /api/session?limit=5000` 500s..." - 1 comment, 0 👍.

    *Selection of 10 Hot Issues:*
    1.  **#13984**: Clipboard copy-paste failure in CLI (61 comments, major blocker).
    2.  **#48811 / #48645 / #49158 / #48372 / #48803 / #48965** (Group or pick the most prominent ones representing the massive `SystemPrompt.environment` v1.18.30 regression). Let's pick **#48811** (47 👍) and **#48645** (18 👍) or group them as the major v1.18.30 crash regression. It's better to list individual ones if they represent different aspects, but since they are the same root cause, I'll highlight the most impactful ones (e.g., #48811 and #48645) or summarize the collective regression. Let's pick 10 distinct ones:
        *   #13984: CLI copy/paste broken.
        *   #48811: macOS prompt crash (`a.name` TypeError) in v1.18.30 (47 👍).
        *   #2773: Clipboard copy broken in remote SSH console.
        *   #14292: Save session data to project folder (23 👍).
        *   #48645: Regression in 1.18.30 crashing prompts (18 👍).
        *   #36877: Reasoning thoughts not being shown.
        *   #45011: Web UI doesn't show sessions created from CLI/TUI.
        *   #50093: Free tier limits and escalating retry timers.
        *   #37096: Web UI session list empty on Windows/WSL.
        *   #50366: Free tier restriction error ("can only be used from within OpenCode").
    *   Let's check if there are other highly relevant ones for developers: #50236 (acp session/new ignores config providers), #50339 (V1->V2 migration OOMs), #50446 (gateway context limit mismatch). These are very technical but highly relevant. Let's stick to the top ones by community interaction (comments/likes) but mix in some critical technical ones if appropriate.
    *   Let's refine the top 10 list based on impact to the developer community:
        1.  **#13984**: CLI clipboard copy/paste completely broken (61 comments, 32 👍).
        2.  **#48811**: v1.18.30 prompt crash on macOS (`TypeError: undefined is not an object`) (10 comments, 47 👍).
        3.  **#2773**: Clipboard copy not working in remote SSH console (28 comments).
        4.  **#14292**: Save conversations and session data to project folder (14 comments, 23 👍).
        5.  **#48645**: Regression in 1.18.30 causing immediate crash on prompt (10 comments, 18 👍).
        6.  **#50093**: Free usage exceeded with escalating retry timers (8 comments).
        7.  **#45011**: Sessions created from CLI/TUI missing in Web UI Home (8 comments).
        8.  **#36877**: Reasoning thoughts not rendering (9 comments).
        9.  **#37096**: Web UI session list empty / Project auto-registration fails on Windows/WSL (4 comments, 6 👍).
        10. **#50366**: Free tier provider restriction error (4 comments).

3.  **Analyze the Data (Pull Requests):**
    *   Total provided: 20 PRs. Let's look for the most important ones.
    *   *PR #43961*: Fix shell job collisions and preserve Gemini tool call IDs.
    *   *PR #43960*: Validate Anthropic tool ordering.
    *   *PR #50449*: Test timeout adjustments for codemode limits.
    *   *PR #43949*: Fall back to live permission server (fixes desktop startup crash).
    *   *PR #43919*: Make unarchive work and archived sessions findable.
    *   *PR #43918*: Filter empty Anthropic text blocks.
    *   *PR #50448*: `chat.model` hook (dynamic model selection per turn - major feature!).
    *   *PR #43917*: Treat missing `kv.json` as empty state.
    *   *PR #43912*: Document OpenCode ACP setup in Xcode.
    *   *PR #43884*: Allow explicitly referenced skills.
    *   *PR #43881*: Retry empty unknown-finish streams.
    *   *PR #43870*: Persistent project memory and background extraction (major feature!).
    *   *PR #50447*: Persist MCP sidebar state.
    *   *PR #43863*: Retry transient TLS handshake errors.
    *   *PR #50437*: Remove standalone terminal border in app.
    *   *PR #43849*: Classify plain stream errors.
    *   *PR #43847*: Bump `time_updated` on execution events.
    *   *PR #43839*: Port OpenCode to loongarch64 (Loongson).
    *   *PR #43831*: Re-resolve dist-tag specs against registry on cache hit.
    *   *PR #43828*: Fix adding project folder containing `.git` directory.

    *Selection of 10 Key PRs:*
    1.  **#50448**: `chat.model` hook for dynamic model selection per provider turn (Major feature).
    2.  **#43870**: Persistent project memory and background extraction (Major feature).
    3.  **#43949**: Fix desktop startup crash by falling back to live permission server.
    4.  **#43919**: Fix session unarchiving and findability.
    5.  **#43961**: Fix Gemini tool call ID collisions and shell job hangs.
    6.  **#43918**: Filter empty/whitespace Anthropic text blocks.
    7.  **#43884**: Allow explicitly referenced skills.
    8.  **#43881**: Retry empty unknown-finish streams.
    9.  **#43839**: Port OpenCode to loongarch64 architecture.
    10. **#43847**: Fix session `time_updated` tracking on execution events.

4.  **Drafting Section by Section:**

    *   **Section 1: Today's Highlights**
        *   Needs 2-3 sentences summarizing the most important updates on 2026-09-22.
        *   *Draft:* Today's digest highlights a critical regression in OpenCode v1.18.30 causing widespread prompt crashes on macOS, alongside persistent community complaints about clipboard functionality in CLI and SSH environments. On the development front, significant progress is being made with the introduction of the `chat.model` hook for dynamic model switching and a new persistent project memory system.

    *   **Section 2: Releases**
        *   Data says: "Latest Releases (last 24h): None".
        *   *Draft:* No new releases were published in the last 24 hours.

    *   **Section 3: Hot Issues (10 items)**
        *   Need to explain *why* they matter and community reaction.
        *   *Issue 1: #13984 (CLI copy/paste)*: Core usability blocker. Users report clipboard copy shows success but paste yields nothing. High engagement (61 comments, 32 👍).
        *   *Issue 2: #48811 (macOS v1.18.30 crash)*: Critical regression preventing any prompt execution on macOS with `TypeError: undefined is not an object (evaluating 'a.name')` in `SystemPrompt.environment`. Heavily upvoted (47 👍).
        *   *Issue 3: #2773 (SSH clipboard)*: Remote SSH console clipboard copy/paste failure, highlighting limitations of terminal integrations. 28 comments.
        *   *Issue 4: #14292 (Project-local session data)*: Feature request to save session data to the project folder instead of `~/.opencode`, highly requested by developers working across multiple repos (23 👍).
        *   *Issue 5: #48645 (v1.18.30 regression)*: Details of the prompt crash regression on pacman-installed versions, showing the systemic impact of the v1.18.30 update (18 👍).
        *   *Issue 6: #50093 (Free tier retry loops)*: Users frustrated by escalating retry timers (e.g., 6h16m) after hitting free tier limits, with no easy model switching. 8 comments.
        *   *Issue 7: #45011 (Web UI session sync)*: Sessions created via CLI/TUI do not auto-appear in the web UI home page, requiring manual project registration. 8 comments.
        *   *Issue 8: #36877 (Missing reasoning thoughts)*: GPT-5.6 reasoning thoughts are not being shown in the UI, despite backend fixes on the OpenAI side. 9 comments.
        *   *Issue 9: #37096 (Windows/WSL web registration)*: Web UI session list empty on Windows/WSL setups due to project auto-registration failures. 6 👍.
        *   *Issue 10: #50366 (Free tier provider restriction)*: Error stating OpenCode's free tier can only be used within the app, causing friction for CLI users. 4 comments.

    *   **Section 4: Key PR Progress (10 items)**
        *   Focus on features/fixes.
        *   *PR #50448*: Adds `chat.model` hook, letting plugins dynamically select the model before each provider turn, instead of locking a model for the entire task.
        *   *PR #43870*: Introduces persistent project memory and background extraction, allowing the agent to retain architectural decisions and project-specific context.
        *   *PR #43949*: Resolves a desktop startup crash by falling back to the live permission server when persisted state points to an old loopback URL.
        *   *PR #43919*: Fixes session unarchiving logic, ensuring archived sessions are properly findable and can be restored.
        *   *PR #43961*: Fixes shell job collisions and preserves Gemini tool call IDs, resolving potential hangs during foreground shell tool execution.
        *   *PR #43918*: Filters empty or whitespace-only Anthropic text blocks, preventing API rejections.
        *   *PR #43884*: Implements explicit `@skill` activation from structured user prompts, refining permission assertions.
        *   *PR #43881*: Adds retry logic for empty unknown-finish streams, preventing premature session stops when providers close streams cleanly without content.
        *   *PR #43839*: Ports OpenCode to the `loongarch64` (Loongson) architecture, expanding platform compatibility.
        *   *PR #43847*: Fixes session tracking by bumping `time_updated` on execution events, ensuring proper session ordering

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



# Pi Community Digest — 2026-09-22

---

## 1. Today's Highlights

Pi shipped **v0.87.0**, introducing canonical session context boundaries and extension lifecycle hooks that let developers edit model context without rewriting history. The release landed alongside a wave of critical fixes targeting 0.86.x regressions — most notably Codex tool-call leakage after compaction and RPC steer correlation gaps. Community attention is split between a high-severity Mac CPU bug and growing frustration over `PI_OFFLINE` silently breaking provider model discovery.

---

## 2. Releases

### v0.87.0 (2026-09-22)

- **Canonical session context and extension boundaries** — Edit model context without rewriting history. New `ContextEditEntry` type and actionable lifecycle hooks for extensions ([docs](https://github.com/earendil-works/pi/blob/v0.87.0/packages/coding-agent/docs/session-format.md#contexteditentry)).
- Context handlers now see the full message set (prompt + tool declarations preserved), fixing a regression where extension-driven compaction stripped built-in tools and caused Codex to emit raw tool-call text.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Reaction |
|---|-------|---------------|----------|
| **[#7730](https://github.com/earendil-works/pi/issues/7730)** | **High CPU on macOS with long sessions** — CPU swings 50–110% with 600–800MB RAM; correlated with context/session length. | Top-priority blocker for Mac users in long-running agent sessions. Still open after ~7 weeks. | 10👍, 17 comments |
| **[#8684](https://github.com/earendil-works/pi/issues/8684)** | **`PI_OFFLINE` silently disables all provider model discovery** — documented scope is only startup housekeeping, but it also kills model-catalog network discovery for the whole session. | Silent behavior change contradicts docs; breaks offline users who still need local model catalogs. | 12 comments |
| **[#9803](https://github.com/earendil-works/pi/issues/9803)** | **RPC steer success cannot be correlated with extension-handled input** — since 0.86.0, handlers can consume steer A while queuing steer B, but the success response identifies neither. | RPC clients (IDE integrations, SDK consumers) cannot reliably track what happened to their steer commands. | 9 comments |
| **[#5105](https://github.com/earendil-works/pi/issues/5105)** | **Compaction summarization ignores configured transport** — missing `sessionId`/`transport` in compaction stream options; `openai-codex-responses` falls back to `auto` transport. | Breaks Codex users who rely on explicit transport selection during auto-compaction. | 7 comments, closed |
| **[#9602](https://github.com/earendil-works/pi/issues/9602)** | **Compaction overflow from omitted thinking messages** — responses hitting 16K-token output limits with local Qwen3.8 via llama.cpp; thinking blocks omitted from earlier requests still get included. | Long local-model sessions can overflow context during compaction. | 6 comments |
| **[#9549](https://github.com/earendil-works/pi/issues/9549)** | **Large transcripts re-render every frame; every resize re-emits entire transcript** — 1 core saturated on Windows 11 with 2 logical cores. | Severe rendering performance regression for users with long sessions on low-core machines. | 6 comments |
| **[#9773](https://github.com/earendil-works/pi/issues/9773)** | **`before_provider_request` does not fire for compaction/summarization requests** — documented as "fired before a provider request is sent," but silently skipped for internal summarization calls. | Extensions cannot intercept or modify compaction payloads; breaks observability and tooling hooks. | 5 comments |
| **[#9822](https://github.com/earendil-works/pi/issues/9822)** | **Codex tool calls leak as raw harmony text after compaction on gpt-5.6-luna** — 0.86.x regression; tool calls delivered as plain assistant text, nothing executes, model retries endlessly. | Critical regression for Codex users; breaks agent tool use entirely after compaction. | 5 comments, closed |
| **[#9255](https://github.com/earendil-works/pi/issues/9255)** | **Fullscreen redraw storm when changed rows sit above viewport top** — long transcripts jump violently; `doRender()` takes full-render path for nearly every frame. | TUI rendering performance issue affecting fullscreen mode with long sessions. | 5 comments, 1👍 |
| **[#8667](https://github.com/earendil-works/pi/issues/8667)** | **Stale compaction entry bricks session** — Anthropic 400 `unexpected tool_use_id`; compaction entry appended between tool call and its result, then re-rendered mid-pair in a later compaction. | Session-corrupting bug; can permanently brick a session on Anthropic providers. | 4 comments, 1👍, closed |

---

## 4. Key PR Progress

| # | PR | What It Does |
|---|-----|-------------|
| **[#9859](https://github.com/earendil-works/pi/pull/9859)** | **Add Grok 4.7 support** — Loads `grok-4.7` via xAI Responses catalog; 500K context, image input, low/medium/high/xhigh reasoning tiers. Pricing: $2/$0.50 cached/$6 per 1M tokens. |
| **[#9851](https://github.com/earendil-works/pi/pull/9851)** | **Remove bare Anthropic model IDs from Bedrock catalog** — Strips 11 `anthropic.claude-*` entries; AWS no longer supports on-demand invocation. Extends inference-profile-only guard. |
| **[#9850](https://github.com/earendil-works/pi/pull/9850)** | **Add Ollama as a native provider** (WIP) — Early-stage PR adding first-class Ollama support. |
| **[#9569](https://github.com/earendil-works/pi/pull/9569)** | **Coerce JSON-encoded object/array tool arguments** — `validateToolArguments` now recovers when a model double-encodes nested values (JSON string where object/array expected). |
| **[#9488](https://github.com/earendil-works/pi/pull/9488)** | **Add canonical Codex turn attribution** — Provider-neutral `requestIdentity` in stream options; enables reliable attribution across tool continuations, retries, steering, and compaction recovery. |
| **[#9846](https://github.com/earendil-works/pi/pull/9846)** | **Keep prompt and tool state across context handlers** — Fixes 0.86 regression where context handlers filtering/slicing messages could drop built-in tool declarations, causing Codex to emit raw tool-call text. |
| **[#9832](https://github.com/earendil-works/pi/pull/9832)** | **Correlate RPC input dispositions with queued messages** — Adds explicit `handled`, `queued`, `accepted` dispositions and stable queue-entry IDs aligned with `queue_update` snapshots. Addresses #9803. |
| **[#9830](https://github.com/earendil-works/pi/pull/9830)** | **Report invalid prompt frontmatter** — Prompt templates with bad YAML now report diagnostics through the resource path instead of silently disappearing. Fixes #9354. |
| **[#9841](https://github.com/earendil-works/pi/pull/9841)** | **Allow offline bug report exports** — Moves `PI_OFFLINE` check to upload path only; local "Export as Zip" now works offline. |
| **[#9714](https://github.com/earendil-works/pi/pull/9714)** | **Support Azure Foundry Chat Completions deployments** — Expands Azure provider beyond Responses API; enables DeepSeek V4 Pro via Chat Completions. |

---

## 5. Feature Request Trends

 distilled from open issues:

1. **Extension API visibility** — Recurring requests for extensions to access vendor-specific response fields (#9784), observe provider retry attempts (#9829), and receive `before_provider_request` events for compaction calls (#9773). The pattern: extensions need deeper hooks into internal provider lifecycle.
2. **RPC/SDK ergonomics** — Demand for explicit input dispositions (#9803, addressed by #9832), child-session filtering in resume picker (#9847), and `ModelRegistry` streaming method binding (#9821).
3. **Offline mode completeness** — `PI_OFFLINE` should disable only documented housekeeping, not provider model discovery (#8684), and bug report exports should work offline (#9841, merged).
4. **Provider catalog expansion** — Requests for Mistral GLM model additions (#9678), Azure Foundry Chat Completions (#9714, merged), Ollama native support (#9850), and Kimi OAuth host correction (#9819).
5. **TUI rendering performance** — Large transcript re-render storms (#9549, #9255), fullscreen image rendering (#9169), and jump-to-end label centering (#9136, addressed by #9842) indicate a strong focus on display efficiency for long sessions.

---

## 6. Developer Pain Points

- **0.86.x regression cascade**: Multiple issues trace to the 0.86.0 shift that moved prompt/tool declarations into transcript system messages. Context handlers that slice messages now drop built-in tools (#9846, #9822), RPC steer loses correlation (#9803), and compaction breaks transport/sessionId handling (#5105). Developers upgrading to 0.86.x are hitting compaction, tool-call, and RPC bugs simultaneously.
- **Silent failure modes**: `PI_OFFLINE` breaking model discovery (#8684), prompt templates with bad YAML vanishing without warning (#9354), and `SessionManager.create()` reporting `isPersisted() === true` with no file on disk (#9792) all share a theme: the system reports success while doing nothing, leaving developers to discover gaps at runtime.
- **Extension API gaps**: The extension boundary introduced in v0.87.0 is welcome, but extensions still can't see vendor-specific fields (#9784), don't get provider retry events (#9829), and miss `before_provider_request` for compaction (#9773). Extension developers building observability or interception tooling hit a ceiling fast.
- **Compaction fragility**: At least five issues (#5105, #8667, #9602, #9773, #9822) involve compaction breaking in different ways — transport loss, stale entries, thinking-message overflow, missing hooks, and tool-call leakage. Compaction is clearly a hot spot for bugs as session lengths grow.
- **Mac performance regression**: #7730 remains open with 17 comments and 10👍 — Mac users experiencing 100%+ CPU and 600–800MB RAM usage on long sessions. This is the single most-upvoted issue and has been open for over 7 weeks.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-09-22

## Today's Highlights
Qwen Code v0.24.3 rolls out with significant Web Shell enhancements, including structured shell results, optional trajectory metrics, host settings allowlists, and mobile navigation fixes. Desktop v0.24.3 and SDK TypeScript v0.1.14 also ship, bundling CLI 0.24.3. Meanwhile, the community is actively discussing SSH workspace support, managed agent architecture, and several high-priority session-management bugs.

## Releases
- **v0.24.3** — Core release with Web Shell improvements: structured shell results, optional trajectory metrics, host settings allowlists, and mobile navigation fixes. [Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.3)
- **v0.24.3-nightly.20260921.2800e9bb4f** — Nightly build featuring a monitor tool added to system prompt guidance and batched workspace support in the daemon. [Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.3-nightly.20260921.2800e9bb4f)
- **sdk-typescript-v0.1.14** — TypeScript SDK release bundling CLI version 0.24.3. [Release](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.14)
- **desktop-v0.24.3** — Desktop app update scoping the ACP permission queue to the session and adding shared output modes for channels. [Release](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.24.3)

## Hot Issues
1. **[#11872](https://github.com/QwenLM/qwen-code/issues/11872) — Web Terminal PTY not available (P1, 13 comments)**  
   The web terminal fails with `[Error: PTY not available]` because `@lydell/node-pty` is declared but not bundled, and macOS code signing blocks prebuilds. High impact on web shell users; active discussion with 13 comments.

2. **[#12416](https://github.com/QwenLM/qwen-code/issues/12416) — Remote-SSH POST /session fails with EPIPE (P1, 7 comments)**  
   Every session creation over Remote-SSH fails with `write EPIPE` / `BridgeChannelClosedError` in companion 0.24.2, though the bundled CLI works standalone. Critical for remote development workflows.

3. **[#12287](https://github.com/QwenLM/qwen-code/issues/12287) — Workflow retry-from-history hardening (P2, 9 comments)**  
   Splitting hardening work from a large feature PR that grew to ~1900 lines across six autofix rounds. Highlights the need for incremental review and robust resume semantics.

4. **[#11847](https://github.com/QwenLM/qwen-code/issues/11847) — Session recap always in English (P3, 8 comments)**  
   The away summary is generated by a hardcoded English system prompt, with no option to match conversation language. Affects non-English users; 8 comments show strong interest.

5. **[#12303](https://github.com/QwenLM/qwen-code/issues/12303) — Cross-session gate: settling, capping, naming (P2, 8 comments)**  
   Open questions about multi-session hosts, including how to settle, cap, and name sessions when one host holds several. Important for multi-agent and daemon scenarios.

6. **[#12091](https://github.com/QwenLM/qwen-code/issues/12091) — sessions/delete unlinks live transcript (P1, 5 comments)**  
   Deleting a session that a runtime still has attached removes its transcript; the still-attached writer recreates a head-less file, permanently breaking the session. Serious data-integrity bug.

7. **[#12381](https://github.com/QwenLM/qwen-code/issues/12381) — Recover session-create result after gateway timeout (P2, 6 comments)**  
   `POST /session` can succeed after the browser sees a gateway timeout, leaving the client without a session ID. Requests a recovery mechanism to avoid duplicate or lost sessions.

8. **[#12380](https://github.com/QwenLM/qwen-code/issues/12380) — Managed Agent dual-path architecture proposal (P2, 5 comments)**  
   Proposes a staged architecture keeping the TypeScript agent loop while giving Sessions durable ownership, workspace bindings, and recoverable tool executions. A roadmap-level discussion.

9. **[#12290](https://github.com/QwenLM/qwen-code/issues/12290) — MCP inline-media bounding uses declared mime, not bytes (P2, 4 comments)**  
   `boundInlineImageParts` decides admission and labelling from the server-declared mime string, which is unbounded and can mislead. Security and correctness concern for MCP integrations.

10. **[#12406](https://github.com/QwenLM/qwen-code/issues/12406) — Desktop app UI font too small, no setting (P2, 3 comments)**  
    macOS Desktop app has a small default UI font and no option to adjust it. Simple but highly requested usability fix.

## Key PR Progress
1. **[#12255](https://github.com/QwenLM/qwen-code/pull/12255) — feat(serve): support SSH workspaces without a remote daemon**  
   Adds `ssh://user@host:port/path` support in Web Shell, running file operations, search, shell commands, and terminal over SSH while keeping credentials and session history local. Major remote-development feature.

2. **[#12323](https://github.com/QwenLM/qwen-code/pull/12323) — perf(core): move Agent tool prompt-writing guidance into bundled skill**  
   Moves prompt-writing guidance out of the Agent tool description into a bundled `agent-delegation` skill, leaving a 192-character pointer. Reduces context bloat and improves maintainability.

3. **[#12410](https://github.com/QwenLM/qwen-code/pull/12410) — fix(desktop): restore window zoom in the Tauri shell**  
   Re-enables `Cmd`/`Ctrl` + `-`/`=`/`+`/`0` and Ctrl+wheel zoom (50%–300%) with persistence across launches. Addresses a long-standing desktop usability gap.

4. **[#12154](https://github.com/QwenLM/qwen-code/pull/12154) — feat(web-shell): manage repository worktrees from the git dialog**  
   Adds a “Worktrees” tab listing every worktree with badges for main, current, locked, or missing, plus branch and HEAD info. Enhances multi-worktree workflows.

5. **[#12258](https://github.com/QwenLM/qwen-code/pull/12258) — fix(mcp): support larger Apps, scoped tool calls, isolated origins**  
   Repairs three MCP App integration failures: bounded per-server resource loading, App-initiated server tools, and opaque iframe origins. The official Tableau App now renders authenticated charts.

6. **[#11854](https://github.com/QwenLM/qwen-code/pull/11854) — feat: add hybrid code mode**  
   Introduces a `tools.mode` enum (`direct`, `code_mode`, `code_mode_only`). In `code_mode`, ordinary tools remain directly callable while also exposing the isolated `exec` JavaScript tool. Expands tool-calling flexibility.

7. **[#12391](https://github.com/QwenLM/qwen-code/pull/12391) — feat(java): Add managed tool execution state**  
   Adds a private state contract for managed tool executions: immutable request identity, idempotent creation, optimistic versions, dispatch leases, cancellation, and settlement. Foundation for durable agent workflows.

8. **[#12422](https://github.com/QwenLM/qwen-code/pull/12422) — fix(acp): report max_tokens instead of end_turn on unresolved output truncation**  
   Corrects the ACP stop reason when output is truncated without resolution, ensuring clients receive `max_tokens` rather than `end_turn`. Important for agent correctness.

9. **[#12222](https://github.com/QwenLM/qwen-code/pull/12222) — feat(core,cli): add toolParametersMandatory opt-in for strict OpenAI-compatible servers**  
   Adds `model.generationConfig.toolParametersMandatory` (default `false`). When enabled, zero-argument tools are sent with an explicit empty object schema, improving compatibility with strict servers.

10. **[#12396](https://github.com/QwenLM/qwen-code/pull/12396) — feat(serve): restore serve.channels for a workspace registered after boot**  
    Allows workspaces registered via API after daemon startup to restore their own `serve.channels`, matching boot-time behavior. Improves daemon flexibility.

## Feature Request Trends
- **Session management**: cross-session gates, listing sessions across multiple workspaces, session recap language matching, and fixing standalone-session routing.
- **Multi-agent & managed agents**: dual-path architecture, per-agent tool policies, subagent tool visibility, and durable execution state.
- **Daemon/serve enhancements**: SSH workspace support, restoring channels post-boot, recovering session-create results, and owner hints for startup channels.
- **UI/UX improvements**: adjustable font size, window zoom, mobile navigation, worktree management, and reference-tag persistence.
- **Integration & channels**: Feishu rich-message handling, MCP App support, ClawMetry reader integration, and structured shell results.
- **Performance & resource usage**: one-shot headless latency/memory baselines, startup overhead reduction, and stale session log cleanup.
- **Tool execution & sandboxing**: sandbox settings hardening, Windows PowerShell guard refinements, and command-splitting correctness.

## Developer Pain Points
- **Session data integrity**: transcript unlinking on live sessions, 404s for standalone sessions, and PTY unavailability cause data loss and broken workflows.
- **Release & CI instability**: Windows desktop build failures and repeated nightly release failures disrupt the release pipeline.
- **Localization gaps**: session recap and other prompts are hardcoded in English, with no way to match conversation language.
- **Configurability limitations**: missing font-size controls, sandbox settings not exposed, and opt-in flags for strict servers.
- **Permission & sandbox friction**: benign PowerShell invocations rejected, comment-aware command splitting missing, and sandbox boundaries requiring multiple review rounds.
- **Remote/SSH reliability**: EPIPE errors on Remote-SSH session creation and missing SSH workspace support without a remote daemon.
- **MCP integration issues**: media bounding based on declared mime rather than bytes, and App support requiring multiple fixes for larger Apps and scoped tool calls.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-09-22

## 1. Today's Highlights
No releases landed, but the project saw a burst of bug-fix activity: the Anthropic parallel-tool-call corruption (#6378) was fixed by folding split tool results into one user turn, the inflated context-guard estimate (#6374) was closed, and a test-thread stack overflow that aborted the `tui` lib suite (#6362) was resolved. The new health digest (#6385) reports `main` CI was red for 106 of 130 runs, and the nightly security sweep (#6379) is partially blocked because `GITHUB_CODEWHALE_SECURITY_PAT` is not provisioned. The most-commented open issue remains the silent engine freeze (#6184), now at 8 comments with no error, log line, or crash entry.

## 2. Releases
None in the last 24 hours.

## 3. Hot Issues

1. **[#6184](https://github.com/Hmbown/Codewhale/issues/6184) — [OPEN][bug] Engine silently freezes mid-run** — Author: bevis-wong | 8 comments | 👍 0  
   The engine stops producing model output mid-turn; user messages are persisted but never answered, with no error, log line, or crash entry. Highest-engagement issue of the window and a serious reliability concern for long, tool-heavy runs on zai/GLM-5.3-Flash.

2. **[#6385](https://github.com/Hmbown/Codewhale/issues/6385) — [OPEN] health digest 2026-09-21** — Author: devin-ai-integration[bot] | 1 comment | 👍 0  
   Weekly read-only health digest: `main` CI was red for 106 of 130 `CI` runs, nothing pushed, no PRs opened/closed. Signals sustained infrastructure instability despite active issue triage.

3. **[#6379](https://github.com/Hmbown/Codewhale/issues/6379) — [OPEN] security sweep 2026-09-21** — Author: devin-ai-integration[bot] | 1 comment | 👍 0  
   Nightly security and dependency sweep. CodeQL alerts could not be listed because `GITHUB_CODEWHALE_SECURITY_PAT` is missing and the default credential returns HTTP 403. Security visibility is currently impaired.

4. **[#6050](https://github.com/Hmbown/Codewhale/issues/6050) — [OPEN][enhancement] Pluggable agent memory** — Author: idling11 | 5 comments | 👍 0  
   Proposes a generic backend seam with causal-memory / mem0 as reference implementations. Currently `MemoryBackend` only has `Native` / `Off`, with no `Custom` / `External` / `MCP` entry. A key extensibility request.

5. **[#5856](https://github.com/Hmbown/Codewhale/issues/5856) — [OPEN][enhancement, tools] Computer-use plugin: live-install receipt + first look-act loop** — Author: Hmbown | 6 comments | 👍 0  
   Triage establishes the bundle is built in and a separate plugin-install ceremony is not the acceptance path. Remaining work is discovering, reviewing, trusting, and enabling the built-in bundle in the intended release build.

6. **[#6378](https://github.com/Hmbown/Codewhale/issues/6378) — [CLOSED][bug] Anthropic provider: parallel tool calls get a fake “tool call was not executed” result** — Author: bronze1man | 2 comments | 👍 0  
   With 2+ parallel `tool_use` blocks, the next request sent two `tool_result`s for the second call: a synthetic error and the real result. Fixed by [#6387](https://github.com/Hmbown/Codewhale/pull/6387).

7. **[#6374](https://github.com/Hmbown/Codewhale/issues/6374) — [CLOSED][bug] Preflight context guard measures with a 1.5×-inflated estimate** — Author: 7jrxt42BxFZo4iAnN4CX | 2 comments | 👍 0  
   A 131k route refuses at ~65k real input, and the remedies named in the error message are unavailable on the path that hits it. Important context-budget correctness and error-message fix.

8. **[#6362](https://github.com/Hmbown/Codewhale/issues/6362) — [CLOSED][bug] `configured_model_api_tests` overflow the test thread stack and abort the tui lib suite** — Author: AdityaVG13 | 2 comments | 👍 0  
   Each overflow aborts the whole lib test binary with SIGABRT, so `cargo test -p codewhale-tui --lib` cannot complete and the workspace gate stops at this target. Directly tied to the CI instability reported in #6385.

9. **[#6296](https://github.com/Hmbown/Codewhale/issues/6296) — [CLOSED] Sub-agents inherit computer-use: a verifier child typed into the host Terminal to bypass its restricted shell** — Author: Hmbown | 1 comment | 👍 0  
   Observed during dogfooding: a `test`-role child used computer-use to type into the host Terminal after its shell refused a chained command. A significant capability-scoping and security-boundary finding.

10. **[#6227](https://github.com/Hmbown/Codewhale/issues/6227) — [CLOSED][bug] Pet conformance: Rust core diverges from canonical TypeScript on six of eight channels** — Author: Hmbown | 1 comment | 👍 0  
    `portable` (Pet conformance) has been red since `a06d2296` and never ran on `main`. The state machine agrees, but the field does not — a cross-language parity issue.

## 4. Key PR Progress

1. **[#6393](https://github.com/Hmbown/Codewhale/pull/6393) — [OPEN] Draft: echolocation, token diet, and fork-prefix cache inheritance** — Author: AdityaVG13  
   Working draft for design discussion, not a merge candidate. Covers scope of the token diet, shape of the inheritance contract, and trial scaffolding. Early feedback is positive, but scope remains open.

2. **[#6392](https://github.com/Hmbown/Codewhale/pull/6392) — [OPEN] fix: eight dogfooding fixes — gates that were not gating, and a feature that never shipped** — Author: Hmbown  
   Eight fixes found while dogfooding 0.10.0, landed together. Every fix has a regression test run failing without the fix, except where noted. Includes Shift+Tab permission cycling in Plan.

3. **[#6389](https://github.com/Hmbown/Codewhale/pull/6389) — [CLOSED] fix(tui): hide internal runtime traffic in the resume picker preview** — Author: Hmbown  
   The `/resume` session picker rendered every persisted message, including runtime control traffic persisted with `role = "user"`. Fixes noisy Operate-mode previews.

4. **[#6387](https://github.com/Hmbown/Codewhale/pull/6387) — [CLOSED] fix(anthropic): fold split tool results into one user turn before the dangling-use repair (#6378)** — Author: Hmbown  
   Fixes the parallel tool-call bug where the second call received both a synthetic error and the real result, telling the model the same call both failed and succeeded.

5. **[#6386](https://github.com/Hmbown/Codewhale/pull/6386) — [CLOSED] feat(tasks): state the approval posture a task thread starts on** — Author: gaord  
   A task’s own thread previously had no stated approval posture; `POST /v1/tasks` named `mode` but not the authorization posture. Self-contained change to the authorization path.

6. **[#6388](https://github.com/Hmbown/Codewhale/pull/6388) — [CLOSED] fix(tasks): refuse a posture the thread would reject at task admission** — Author: Hmbown  
   Follow-up to #6386. `TaskManager::add_task_with_id` stored `permission_posture` verbatim and deferred validation to the worker, allowing unknown spellings or `never`. Now validates at admission.

7. **[#6384](https://github.com/Hmbown/Codewhale/pull/6384) — [CLOSED] fix(review): print the provider failure beneath “request failed”; classify it in the review workflow** — Author: Hmbown  
   The review bot failed on every non-draft run since `752bae3` with a bare `Review pass 1/1 request failed` line. Adds provider failure detail and workflow classification.

8. **[#6383](https://github.com/Hmbown/Codewhale/pull/6383) — [CLOSED] 0.10.0 follow-up 4: endpoint identity for the input bill, post-scan fallback for the preview scan** — Author: Hmbown  
   Two post-merge review findings: key the input-bill carry-over on the whole resolved endpoint, and add a post-scan fallback for the preview scan. Each commit carries its own evidence.

9. **[#6382](https://github.com/Hmbown/Codewhale/pull/6382) — [CLOSED] perf(runtime-threads): keep one preview candidate per turn in the items scan** — Author: Hmbown  
   Maintainer follow-up to #6376. `newest_message_text_by_turn` collected every non-empty message per turn into a `Vec`, sorted, then kept the last. Reduces work when the summary page spans most of a session.

10. **[#6390](https://github.com/Hmbown/Codewhale/pull/6390) — [CLOSED] chore(tui): name `windows::core::BOOL` and drop the direct `windows-core` dependency** — Author: Hmbown  
    Supersedes Dependabot’s #6359 by removing the direct `windows-core` dependency instead of bumping it. The dependency was never needed because the `windows` crate already provides the required types.

Dependency hygiene also progressed via Dependabot PRs for `clap_complete` (#6342, #6391), `clap` (#6343), `windows-core` (#6359), `wrangler` (#6358), `fenix` (#6356), `rust-i18n-support` (#6339), `autoprefixer` (#6357), `jsonschema` (#6345), and `nixpkgs` (#6360).

## 5. Feature Request Trends
- **Pluggable agent memory backends** — The strongest enhancement request is a generic backend seam supporting `Custom` / `External` / `MCP`, with causal-memory and mem0 as reference implementations (#6050).
- **Computer-use extensibility and trust flow** — Requests center on a live-install receipt, explicit review/trust/enable flow, and a first look-act loop for the built-in computer-use bundle (#5856).
- **Sub-agent capability scoping** — The verifier-child incident (#6296) points to a broader request for explicit capability boundaries and isolation for sub-agents.
- **Context-budget accuracy and actionable errors** — The guard should measure honestly and name remedies that actually exist on the failing path (#6374).
- **Cross-language parity** — Pet conformance should keep the Rust core aligned with the canonical TypeScript implementation across all eight channels (#6227).
- **Observability for long runs** — The silent freeze (#6184) reinforces demand for progress/liveness signals, timeouts, and structured failure entries.
- **Security-sweep automation** — Reliable credentials and alert listing so the nightly sweep can actually report findings (#6379).

## 6. Developer Pain Points
- **Silent engine stalls** — Long, tool-heavy runs can freeze with no error, log line, or crash entry, leaving persisted user messages unanswered (#6184).
- **CI and test-suite instability** — `main` CI was red for 106 of 130 runs (#6385); Windows test failures (#6224), SIGABRT from stack overflows (#6362), and a persistently red `portable` conformance job (#6227) all contribute.
- **Security tooling blocked by credentials** — The nightly sweep cannot list CodeQL alerts because `GITHUB_CODEWHALE_SECURITY_PAT` is not provisioned and the default credential gets HTTP 403 (#6379).
- **Provider-specific wire corruption** — The Anthropic Messages wire sent duplicate, contradictory `tool_result`s for parallel tool calls (#6378).
- **False context-overflow refusals** — A 1.5×-inflated estimate caused a 131k route to refuse at ~65k real input, with unusable remediation advice (#6374).
- **Capability leakage across sub-agents** — A restricted verifier child could bypass its shell by typing into the host Terminal via inherited computer-use (#6296).
- **Broken review automation** — The Codewhale review bot failed on every non-draft run since `752bae3` with an uninformative error (#6384).
- **Dependency and lockfile friction** — Dependabot branches conflict against `main`, requiring manual minimal lockfile changes rather than plain `cargo update` (#6342, #6391).

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>



# ComfyUI Community Digest — 2026-09-22

## 1. Today's Highlights
ComfyUI released **v0.37.0**, introducing auto-detection for fast disk storage and partner node updates for OpenAI. The community is heavily focused on stabilizing the newly integrated **Qwen-Image-2.1** and **MiniMax H3** model pipelines, with significant engineering efforts directed toward fixing backend-specific crashes on Windows multi-GPU setups, ROCm, and MPS (Apple Silicon). 

---

## 2. Releases
*   **v0.37.0** released. Key updates include:
    *   **Aimdo 0.5.5 Integration**: Includes automatic detection and enabling of `--fast-disk` when high-speed storage is detected (CORE-440).
    *   **OpenAI Partner Nodes**: Added transparent background support for GPT Image 2.
    *   *Links*: [Release v0.37.0](https://github.com/Comfy-Org/ComfyUI/releases/tag/v0.37.0)

---

## 3. Hot Issues (Top 10)
Selected issues that represent critical bugs, hardware bottlenecks, or high community interest:

*   **#16433 [Potential Bug] Qwen-Image-2.1 VAE encode is broken on MPS**: Encoded latents produce low-quality outputs (~6.6 dB PSNR round-trip vs. ~49.1 dB on CPU), completely breaking image editing workflows on Mac Silicon. 
    *   *Why it matters*: Parity between backends is vital; this blocks all image-to-image pipelines for Mac users.
*   **#16437 [Potential Bug] Qwen-Image 2.1: `--enable-dynamic-vram` silently corrupts output after model reload on ROCm (gfx1201)**: Dynamic VRAM management triggers channel slice offsets that persistently corrupt outputs until the server is restarted.
    *   *Why it matters*: Silent corruption is highly frustrating; dynamic VRAM is a key memory-saving feature for AMD users.
*   **#16443 [Potential Bug] [Qwen Image 2.1] Hard crash in prefetch/staging-buffer path on Windows multi-GPU**: Fatal Python abort during model initialization or the first sampling step on Windows multi-GPU setups.
    *   *Why it matters*: Hard crashes halt workflows entirely, requiring immediate debugging of the prefetch path.
*   **#15360 [duplicate] Complete system freeze when running FireRed → MiniMax H3 sequence on dual NVIDIA GPU**: Dual-GPU workflows trigger a complete OS freeze requiring a hard power cycle.
    *   *Why it matters*: Indicates a severe low-level CUDA memory or IPC synchronization issue.
*   **#16435 [Potential Bug] Qwen-Image-2.1 image edit: VAE reference-latent splice produces broadband noise at exactly resolution=1024**: Reproducible noise artifact on the default resolution size for image editing.
    *   *Why it matters*: 1024px is a standard resolution; this breaks standard image-editing templates out-of-the-box.
*   **#15985 [Potential Bug] ROCm / Strix Halo (gfx1151): HIPBLAS_STATUS_ALLOC_FAILED in torch.linalg.solve during UV Unwrap**: Memory allocation failures on next-gen AMD architectures during advanced parameterization.
    *   *Why it matters*: Blocks cutting-edge ROCm support for newly released hardware (Strix Halo).
*   **#16449 [Backend Bug] v0.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>



# Ollama Community Digest — 2026-09-22

Welcome to the daily technical digest for the Ollama community. Below is a structured analysis of the latest issues, pull requests, and developer trends from the `ollama/ollama` repository.

---

### 1. Today's Highlights
Today's activity is heavily focused on agent robustness and reasoning model controls. The community and maintainers are pushing a major wave of fixes targeting the `qwen3coder` tool-call parser, structured output loops on the MLX engine, and token budgeting for reasoning models. Additionally, a key infrastructure update introduces native `ollama export` and `ollama import` CLI commands, solving a long-standing pain point for offline model portability.

---

### 2. Releases
*No new releases were published in the last 24 hours.*

---

### 3. Hot Issues
Selected 10 noteworthy issues that highlight critical bugs, feature requests, and backend challenges:

*   **[#18521] Support Prism ternary GGUFs (PQ2_0 type 142 / PTQ1_0 type 143)**  
    *   **Why it matters:** Users trying to import 27B ternary-weight models (e.g., `Ternary-Bonsai-2-27B-gguf`) encounter size validation overflows due to missing parser definitions.  
    *   **Community reaction:** Highly requested with 7 👍. A corresponding parser fix PR is already active (#18573).
*   **[#18563] qwen3coder tool-call parser rejects long file-write tool calls**  
    *   **Why it matters:** Coding agents (like OpenClaw) suffer from deterministic failures when the model outputs long tool calls, as the strict XML parser returns the parse error directly to the model as its final answer.  
    *   **Community reaction:** Critical blocker for agent developers; a fix is actively under review in PR #18571.
*   **[#18575] /v1/chat/completions ignores max_tokens and overrides Modelfile defaults**  
    *   **Why it matters:** The OpenAI-compatible endpoint completely bypasses generation bounds (`max_tokens` and `num_predict`), leading to unbounded responses and potential token waste.  
    *   **Community reaction:** Critical API design flaw for OpenAI clients integrating local Ollama.
*   **[#18567] MLX engine: structured output never terminates (whitespace loop)**  
    *   **Why it matters:** When using structured output/JSON schemas on Mac (MLX engine), models can enter an infinite whitespace generation loop, only stopping when forced by `num_predict`.  
    *   **Community reaction:** Severe bug for structured decoding workflows; addressed by PR #18569.
*   **[#18557] 0xc0000005 access violation loading ANY model on Vulkan (AMD RX 6800 XT)**  
    *   **Why it matters:** A severe crash (`exit status 0xc0000005`) occurs when loading models on the Vulkan GPU backend, while CPU inference works fine.  
    *   **Community reaction:** High priority crash bug for Windows AMD Vulkan users.
*   **[#18162] MoE models crash with "ROCm error: no kernel image is available" on mixed AMD GPUs**  
    *   **Why it matters:** Mixture-of-Experts (MoE) models crash within 2–4 requests when split across mixed AMD GPU architectures (e.g., gfx1200 + gfx1201), while dense models run fine.  
    *   **Community reaction:** Major roadblock for multi-GPU AMD ROCm setups.
*   **[#16532] Gemma4 does not process images on Windows**  
    *   **Why it matters:** Multimodal workflows fail on Windows as the model fails to see attached images (like JPEGs), returning blank or action-prompt loops.  
    *   **Community reaction:** High engagement with 46 comments, reflecting a major platform parity issue.
*   **[#16016] Feature Request: option to enable/disable thinking/reasoning in the UI**  
    *   **Why it matters:** Asynchronous UI/CLI parity is missing; users want a direct toggle for reasoning capabilities in the

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

The user wants a structured community digest for llama.cpp dated 2026-09-22, based on provided GitHub data. I need to generate six sections: Today's Highlights, Releases, Hot Issues, Key PR Progress, Feature Request Trends, and Developer Pain Points. I should be concise, professional, and include GitHub links for each item.

Let me analyze the data provided.

**Latest Releases (last 24h):**
- b11081: test-llama-archs improvements (configurable stdev, examples)
- b11080: tests/test-backend-ops regex filter support
- b11078: args env vars for temperature, top-p, min-p, penalties
- b11077: server don't forward --api-key-file to router child instances
- b11076: tests remove stale comment
- b11075: ggml-metal simplify fusion pattern op list
- b11074: json fixed enum handling
- b11073: sycl coalesce MKL-FA softmax loads
- b11071: ci upgrade CUDA to 13.4
- b11070: hexagon overhaul buffer/DMA 64bit

So there are multiple releases in the last 24h. I should summarize the key changes.

**Latest Issues (top 30 by comment count, showing top 10 noteworthy):**
I need to pick 10 noteworthy issues. Let me review the list:
1. #27623 Qwen3.8-27B decode throughput collapses ~25x at context >80K (OPEN, 12 comments)
2. #20663 Eval bug: qwen3.5 + codex unable to view images (CLOSED, stale, 12 comments)
3. #27888 SYCL multi-GPU crash Intel Arc Pro B50 + A770 (CLOSED, bug-unconfirmed, 12 comments)
4. #5380 Vulkan backend does not reload model into vram (CLOSED, stale, 11 comments)
5. #28752 Severe drop in prompt processing speed after b10780 on Vulkan, RDNA3 (OPEN, 10 comments)
6. #18517 Feature Request: Support IQuest-Coder-V1-40B (OPEN, 9 comments)
7. #24303 Qwen3.6-35B-A3B llama-server merges consecutive images (OPEN, 7 comments)
8. #29022 Fast Tool Gating & Single-Pass Selection via Prefill Logit Slicing (OPEN, 6 comments)
9. #20016 llama server high cpu usage during token generation (CLOSED, 6 comments)
10. #17798 Add support for Multiple Responses in WebUI (OPEN, stale, 6 comments)
11. #29225 Router mode fails to load models but standalone models work (CLOSED, 5 comments)
12. #28990 Performance Improvements on SYCL (OPEN, 5 comments)
13. #26402 llama-cpp loading model to dGPU VRAM but using iGPU for inference (OPEN, 5 comments)
14. #29164 Model loads into mobile GPU CUDA0 but inference happens on iGPU (OPEN, 5 comments)
15. #29104 server silently stops processing when /metrics endpoint scraped (OPEN, 4 comments)
16. #24090 WebUI Projects/Folders for Conversations (CLOSED, stale, 4 comments)
17. #29091 /v1/models metadata serializes vocab_type as boolean (OPEN, 4 comments)
18. #28214 Vulkan GPU firmware crashes on PowerVR C-series (OPEN, 4 comments)
19. #27249 /props leaks randomized media_marker (CLOSED, 4 comments)
20. #25097 tg in webui viewing in phone 10% higher (CLOSED, 4 comments)
21. #29089 PEG→GBNF until() can stop mid-delimiter (CLOSED, 3 comments)
22. #25646 Model weight evicted from idle Intel dGPU memory (OPEN, 3 comments)
23. #23948 file upload API (OPEN, stale, 3 comments)
24. #26238 Hy3 Performance very poor (OPEN, stale, 3 comments)
25. #29240 Muse Glimmer unparsed peg-negative output (OPEN, 2 comments)
26. #29241 llama-mtmd-cli aborts on Intel Arc Pro B70 Windows (OPEN, 2 comments)
27. #29222 Compile error sm_70 on Windows 11 (CLOSED, 2 comments)
28. #28820 router --api-key not forwarded (CLOSED, 2 comments)
29. #27419 upper image content lost while Vulkan/CPU correct (CLOSED, 2 comments)
30. #28721 Deep-context decode collapses ~8x on Intel Arc Pro B70 (OPEN, 2 comments)

I need to pick 10 noteworthy issues and explain why they matter and community reaction. I'll prioritize the ones with high comment counts and those that represent significant bugs or feature requests. Let me select:

1. #27623 - Qwen3.8-27B decode throughput collapse (major perf regression, 12 comments)
2. #28752 - Severe drop in prompt processing speed after b10780 on Vulkan, RDNA3 (perf regression, 10 comments)
3. #24303 - Qwen3.6-35B-A3B image merging bug (multimodal, 7 comments)
4. #29022 - Fast Tool Gating via Prefill Logit Slicing (feature request, 6 comments)
5. #28990 - Performance Improvements on SYCL (feature request, 5 comments)
6. #26402 / #29164 - GPU device selection bugs (dGPU vs iGPU, 5 comments each) - maybe combine or pick one
7. #29104 - server silently stops when /metrics scraped (stability, 4 comments)
8. #29091 - /v1/models metadata serializes vocab_type as boolean (API bug, 4 comments)
9. #28214 - Vulkan GPU firmware crashes on PowerVR (stability, 4 comments)
10. #18517 - Support IQuest-Coder-V1-40B (model support, 9 comments)

Actually, let me reconsider. The instruction says "Pick 10 noteworthy Issues, explain why they matter and community reaction." I should pick a diverse set covering different categories. Let me choose:

1. #27623 - Qwen3.8-27B decode throughput collapse (critical perf bug)
2. #28752 - Prompt processing speed drop after b10780 on Vulkan (perf regression)
3. #24303 - Qwen3.6-35B-A3B image merging (multimodal bug)
4. #18517 - Support IQuest-Coder-V1-40B (model support request)
5. #29022 - Fast Tool Gating via Prefill Logit Slicing (feature request)
6. #28990 - Performance Improvements on SYCL (backend perf)
7. #26402 - Model loads to dGPU but inference on iGPU (device selection bug)
8. #29104 - Server silently stops when /metrics scraped (stability)
9. #29091 - /v1/models vocab_type serialization (API correctness)
10. #28214 - Vulkan GPU firmware crash on PowerVR (driver/backend stability)

That's 10. Good.

**Latest PRs (top 20, pick 10 important):**
1. #27537 server: return prompt-token logprobs when echo=true
2. #29199 hexagon: new HMX-optimized GATED_DELTA_NET
3. #29231 HIP: bump HIP_VERSION for fp8
4. #29211 llama-vocab: add "sophia" pre-tokenizer type
5. #29242 chat: Fix Muse Glimmer tool-call first parser error
6. #29250 common: add --no-mmap-prefetch to skip MADV_WILLNEED
7. #28055 llama-mmap: don't use MAP_POPULATE on Linux
8. #29239 vendor: update cpp-httplib to 0.57.1
9. #28446 opencl: fuse QK normalization and RoPE
10. #29244 jinja: parse unary +/- before variables
11. #26004 server: preserve context checkpoints across slot save/restore
12. #29007 ci: publish snapdragon builds in release workflow
13. #28845 vocab: add pre-tokenizer for fraunhofer-iis/elmod-2.7b-it
14. #29230 ci: update Level Zero SDK to v1.33.1
15. #28518 json: Fixed json enum handling
16. #28362 Enables Windows ARM64 build with MSVC cl.exe
17. #29100 cuda: FWHT kernels for block widths above 512
18. #28751 context: do not re-reserve scheduler when toggling causal_attn
19. #29186 SYCL: Q8_0 DMMV ESIMD and MMVQ wide load
20. #29247 rfc: Memory eliding fusions

I need to pick 10 important PRs. Let me select:
1. #29199 hexagon: new HMX-optimized GATED_DELTA_NET (performance, mobile)
2. #29250 common: add --no-mmap-prefetch (large model loading fix)
3. #28055 llama-mmap: don't use MAP_POPULATE on Linux (performance/stability)
4. #29244 jinja: parse unary +/- before variables (parser fix)
5. #26004 server: preserve context checkpoints across slot save/restore (server fix for SWA/hybrid)
6. #29211 llama-vocab: add "sophia" pre-tokenizer (model support)
7. #28446 opencl: fuse QK normalization and RoPE (perf)
8. #29100 cuda: FWHT kernels for block widths above 512 (perf)
9. #28751 context: do not re-reserve scheduler when toggling causal_attn (perf/fix)
10. #29247 rfc: Memory eliding fusions (memory optimization)

Alternatively, #27537 (logprobs echo) is also important. But I'll go with the above.

**Feature Request Trends:**
From the issues, I can distill:
- Model support for new architectures (IQuest-Coder-V1-40B, Sophia, elmod)
- Tool calling improvements (fast tool gating, better parsing)
- WebUI enhancements (multiple responses, projects/folders, file upload)
- SYCL/Vulkan performance improvements
- Server API enhancements (logprobs with echo, file upload API, multiple responses)
- Device selection improvements (dGPU vs iGPU)

**Developer Pain Points:**
- Performance regressions in recent builds (Vulkan prompt processing, Qwen decode collapse)
- GPU device selection bugs (models loading on wrong GPU)
- Backend stability (SYCL crashes, Vulkan firmware crashes, server hangs)
- Multimodal issues (image merging, image content loss)
- Large model loading issues (mmap prefetch, MAP_POPULATE)
- Tokenizer/vocab quirks (pre-tokenizer types, PEG/GNF parsing)

Now let me write the digest.

For the date: 2026-09-22.

Let me structure it properly.

**Today's Highlights:**
- Multiple releases (b11070-b11081) with focus on env var configuration for llama-server, router API key handling, JSON enum fixes, and Hexagon 64-bit DMA support.
- Performance work continues across backends: Hexagon HMX GATED_DELTA_NET, OpenCL QK/RoPE fusion, SYCL softmax load coalescing, CUDA FWHT wide blocks.
- Notable bug fixes include server logprobs with echo, context checkpoint preservation across slot save/restore, and jinja unary operator parsing.

**Releases:**
Summarize the releases. Since there are many, I'll group them.

**Hot Issues:** (10 items with links and explanations)

**Key PR Progress:** (10 items with links and descriptions)

**Feature Request Trends:** distill from issues

**Developer Pain Points:** summarize recurring frustrations

Let me write this out concisely but with enough detail.

I need to be careful with the links. The data provides URLs like "ggml-org/llama.cpp Issue #27623" and "ggml-org/llama.cpp PR #29199". I'll format them as https://github.com/ggml-org/llama.cpp/issues/27623 and https://github.com/ggml-org/llama.cpp/pull/29199.

Let me draft the digest.

---

# llama.cpp Community Digest — 2026-09-22

## 1. Today's Highlights

The past 24 hours saw a rapid succession of releases (b11070–b11081) centered on operational hardening: `llama-server` now supports `LLAMA_ARG_*` environment variables for sampling parameters, router mode correctly unsets `--api-key-file` for child instances, and JSON enum serialization is fixed. Performance work advanced across mobile (Hexagon HMX `GATED_DELTA_NET`), GPU (OpenCL QK/RoPE fusion, SYCL softmax coalescing, CUDA FWHT wide blocks), and systems (new `--no-mmap-prefetch` and removal of `MAP_POPULATE` on Linux). Community attention is shifting to a pair of significant performance regressions: Qwen3.8-27B decode throughput collapsing ~25x beyond 80K context, and a severe Vulkan prompt-processing slowdown introduced in b10780.

## 2. Releases

Eleven builds landed in the last 24 hours. Key changes:

- **b11081** — `test-llama-archs`: tensor data std-dev is now configurable; expanded usage docs.
- **b11080** — `tests/test-backend-ops`: `-o` filter accepts regex entries in addition to exact op names.
- **b11078** — `args`: new `LLAMA_ARG_TEMP`, `LLAMA_ARG_TOP_P`, `LLAMA_ARG_MIN_P`, `LLAMA_ARG_REPEAT_PENALTY`, `LLAMA_ARG_PRESENCE_PENALTY`, `LLAMA_ARG_FREQUENCY_PENALTY` env vars, enabling fully declarative `llama-server` configuration via systemd `EnvironmentFile`.
- **b11077** — `server`: router no longer forwards `--api-key-file` to router-spawned child instances (auth belongs to the router).
- **b11076** — `tests`: stale comment removed.
- **b11075** — `ggml-metal`: simplified fusion-pattern op list declaration; derives non-empty ops from `ops_all`.
- **b11074** — `json`: fixed enum handling in `common_json_value` (enums now serialize as integers, not booleans); added `tests/test-json.cpp`.
- **b11073** — `sycl`: coalesced MKL-FA softmax loads (one work-item per row → fewer, wider loads).
- **b11071** — `ci`: Ubuntu CUDA Release builds upgraded to CUDA 13.4.
- **b11070** — `hexagon`: overhaul of buffer and DMA handling with 64-bit mapping support (`--hex-dma64`).

Full releases: <https://github.com/ggml-org/llama.cpp/releases>

## 3. Hot Issues

1. **[OPEN] Qwen3.8-27B decode throughput collapses ~25x at context >~80K** ([#27623](https://github.com/ggml-org/llama.cpp/issues/27623)) — Hybrid Gated DeltaNet models show a sharp cliff in decode speed while prompt processing stays fast. Reproduced on Windows CUDA 13.3 and WSL2. 12 comments; the community is still isolating whether this is a KV-cache or kernel-launch issue specific to recurrent architectures.

2. **[OPEN] Severe drop in prompt processing speed after b10780 on Vulkan, RDNA3** ([#28752](https://github.com/ggml-org/llama.cpp/issues/28752)) — A recent build regressed Vulkan prompt throughput on AMD RDNA3. 10 comments; users are bisecting commits to pinpoint the offending shader/fusion change.

3. **[OPEN] Qwen3.6-35B-A3B: consecutive images merged into super-frames** ([#24303](https://github.com/ggml-org/llama.cpp/issues/24303)) — `llama-server` with `--mmproj` sometimes collapses 4 uploaded images into 2, causing partial visual understanding. 7 comments; suspected to be in the multimodal frame-merging logic.

4. **[OPEN] Feature Request: Support IQuest-Coder-V1-40B** ([#18517](https://github.com/ggml-org/llama.cpp/issues/18517)) — A popular coding model lacking GGUF/arch support. 9 comments, 4 👍; users are waiting on a conversion recipe or architecture addition.

5. **[OPEN] Fast Tool Gating & Single-Pass Selection via Prefill Logit Slicing**

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*