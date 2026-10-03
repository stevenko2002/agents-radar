# AI CLI Tools Community Digest 2026-10-04

> Generated: 2026-10-03 22:16 UTC | Tools covered: 12

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



### Today's Highlights

*   **llama.cpp** released a rapid series of bug-fix builds (`b11371` through `b11381`), addressing a critical server abort issue for Laya models, halving the memory footprint of the `qwen4exp` indexer, and adding initial support for the text-only `clef` decision model. [Link](https://github.com/ggml-org/llama.cpp)
*   **Pi** shipped **v1.0.1**, introducing Nix flake support, allowing users to easily run the latest stable release or install it system-wide via `nix run github:earendil-works/pi/stable`. [Link](https://github.com/earendil-works/pi/releases/tag/v1.0.1)
*   **OpenAI Codex** rolled out `v0.162.0-alpha.8` through `alpha.11`, bringing TUI improvements such as displaying the model and reasoning effort near the top of task details and fixing Windows Terminal mapped Shift+Enter sequences. [Link](https://github.com/openai/codex)
*   **Gemini CLI** published `v0.64.0-nightly.20261003.gfb972b2f8`, resolving a CLI interaction bug where the Enter and Spacebar keys failed to reliably confirm selection list options. [Link](https://github.com/google-gemini/gemini-cli)
*   **Claude Code** contributor **poteat** merged a stacked set of UI and security-default changes, including removing redundant blank rows in docked `/diff` headers, letting other plugins' toasts display while the diff pane is open, and preventing plugins from lifting security deny/ask rules. [Link](https://github.com/anthropics/claude-code)
*   **Ollama** merged a key input-validation fix for `/api/generate` to reject trailing non-JSON data after a valid JSON body, alongside a patch resolving a Windows-specific 2GiB read overflow that crashed the `clef-flash` decision model. [Link](https://github.com/ollama/ollama)
*   **DeepSeek TUI (Codewhale)** merged the broad 0.10.1 integration PR (#6815), unifying the Rust Engine for execution, provider identity, permissions, and sessions, while closing several TUI rendering bugs related to grapheme wrapping and config diagnostics. [Link](https://github.com/Hmbown/Codewhale)
*   **ComfyUI** resolved critical training and inference bugs, including a fix for `CheckpointFunction.backward()` raising errors on frozen parameters and a crash in SeedVR2 tiled VAE during in-place tile blending. [Link](https://github.com/Comfy-Org/ComfyUI)

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills Community Highlights Report
**Repository:** `anthropics/skills` | **Data as of:** 2026-10-04

> **Data note:** Comment counts for Pull Requests were unavailable (`undefined`) in the source data. Rankings below are derived from the provided sort order (comments/attention), cross-referenced with issue linkages, author activity, and recency. Issue rankings use verified comment counts.

---

## 1. Top Skills Ranking

### 1. `skill-creator` — Trigger Evals & Runtime Hardening (PR #1298)
- **Author:** MartinCajiao | **Status:** Open | **Created:** 2026-06-10
- **Functionality:** Fixes the skill-creator's trigger evaluation system — isolates per-worker command probes, handles Windows `select()` pipe failures, stops unrelated tools from aborting scans, and prevents runtime failures from being misclassified as non-triggers (which previously corrupted negative examples and skewed optimization).
- **Significance:** Directly addresses the core feedback loop for skill quality (see Issues #556, #1383). Trigger evals are the gatekeeper for whether a skill actually gets invoked.
- 🔗 `anthropics/skills#1298`

### 2. `mcp-builder` — MCP ≥2 Compatibility (PR #1742)
- **Author:** Kuldeeep18 | **Status:** Open | **Created:** 2026-09-08
- **Functionality:** Updates the MCP builder to support `mcp>=2.0.0`, where `streamablehttp_client` was renamed to `streamable_http_client`, and custom HTTP headers are now configured via `create_mcp_http_client` / `http_client` rather than a direct kwarg. Fixes Issue #1668.
- **Significance:** Keeps the MCP skill compatible with the latest Model Context Protocol library — critical as MCP adoption grows.
- 🔗 `anthropics/skills#1742`

### 3. `proofcore-contract-auditor` — Web3 Smart Contract Auditing (PR #1771)
- **Author:** ProofCore-Protocol | **Status:** Open | **Created:** 2026-09-15
- **Functionality:** Automated static analysis of Solidity and Rust smart contracts, anchoring cryptographic audit proofs onto the public TON Blockchain via ProofCore's zero-storage Merkle protocol.
- **Significance:** First Web3/blockchain-native skill; represents an expansion of the skills ecosystem into on-chain verification.
- 🔗 `anthropics/skills#1771`

### 4. `docx` — Orphaned Comment Detection (PR #1734)
- **Author:** rohitjain25 | **Status:** Open | **Created:** 2026-09-06
- **Functionality:** Detects orphaned comments in DOCX files (comments left behind without their host paragraph).
- **Significance:** Targets a real-world document hygiene gap in the `docx` skill suite.
- 🔗 `anthropics/skills#1734`

### 5. `md2video-audio` — Markdown → Video with Voiceover (PR #1703)
- **Author:** 70v-Yoyo | **Status:** Open | **Created:** 2026-09-01
- **Functionality:** Compiles Markdown documents into professional-grade MP4 videos with realistic human-like voiceovers, using Marp for slide generation.
- **Significance:** Novel cross-domain skill bridging documentation and multimedia output.
- 🔗 `anthropics/skills#1703`

### 6. `notion-spec-to-implementation` + `quantitative-resume-auditor` (PR #1245)
- **Author:** mrdesouzaphd-cmyk | **Status:** Open | **Created:** 2026-06-02
- **Functionality:** (1) Transforms product/tech specs from Notion into concrete implementation tasks with acceptance criteria and progress tracking; (2) Audits quantitative resumes (finance/quant roles) for accuracy and formatting.
- **Significance:** Long-lived PR (3+ months) with dual-skill scope; reflects demand for spec-to-code and domain-specific document skills.
- 🔗 `anthropics/skills#1245`

### 7. `claude-api` — Retired Model ID Cleanup (PR #1607)
- **Author:** adi-IL | **Status:** Open | **Created:** 2026-08-18
- **Functionality:** Marks four retired model IDs (`claude-opus-4-1`, `claude-sonnet-4-0`, `claude-opus-4-0`, `claude-3-haiku-20240307`) as retired/deprecated in `skills/claude-api/shared/models.md`. Fixes Issue #1603.
- **Significance:** Maintenance but important — stale model IDs cause silent failures for API users.
- 🔗 `anthropics/skills#1607`

### 8. `skill-creator` — Standalone Package Execution (PR #1681)
- **Author:** Kuldeeep18 | **Status:** Open | **Created:** 2026-08-27
- **Functionality:** Fixes `ModuleNotFoundError` when running `package_skill.py` directly as a standalone script; updates outdated docstrings/CLI help paths.
- **Significance:** Usability fix for the skill packaging workflow.
- 🔗 `anthropics/skills#1681`

---

## 2. Community Demand Trends (from Issues)

| Trend | Evidence | Signal |
|-------|----------|--------|
| **Skill trust & security** | Issue #492 (43 comments): community skills impersonating `anthropic/` namespace | ⚠️ Critical — trust boundary abuse |
| **Org-wide skill distribution** | Issue #228 (16 comments, 8 👍): skills should be shareable within organizations without manual .skill file shuffling | High demand |
| **Skill invocation reliability** | Issue #556 (12 comments, 7 👍): `run_eval.py` reports 0% trigger rate — skills never fire via `claude -p` | Core platform concern |
| **Skill quality tooling** | Issues #202 (8 comments, closed), #1383 (4 comments): skill-creator needs best-practice overhaul, silent benchmark failures | Meta-demand |
| **Context window efficiency** | Issue #1487 (4 comments): `claude-api` skill eagerly injects ~156k tokens | Performance concern |
| **Duplicate skill installation** | Issue #189 (6 comments, 9 👍): `document-skills` and `example-skills` plugins ship identical content | UX friction |
| **Agent governance & safety** | Issue #412 (6 comments, closed): proposal for agent-governance skill (policy enforcement, trust scoring, audit trails) | Emerging theme |
| **Compact memory/state** | Issue #1329 (9 comments): proposal for `compact-memory` skill (symbolic notation for agent state) | Agent infrastructure |

**Key takeaway:** The community is simultaneously demanding (a) better *platform* support (sharing, invocation, trust), (b) better *quality* tooling (evals, benchmarks), and (c) new *domain* skills (governance, memory, Web3).

---

## 3. High-Potential Pending Skills (Active PRs, Not Yet Merged)

These PRs show recent activity and address clear gaps — likely to land soon:

- **`blast-radius`** (PR #1776, kishormorol, Sep 17) — Destructive-write checklist: archiving users, revoking access, deleting rows, batch mailing. Covers the gap between "query is right about rows" and "bulk op is right about the world." 🔗 `anthropics/skills#1776`
- **`awt` (AI Watch Tester)** (PR #822, ksgisang, Mar 31 → Sep 19 update) — Zero-code E2E testing with vision + browser control. 🔗 `anthropics/skills#822`
- **`testing-patterns`** (PR #723, 4444J99, Mar 22 → Sep 21 update) — Full testing stack: Testing Trophy model, unit testing (AAA), React component testing. 🔗 `anthropics/skills#723`
- **`scnet-hpc`** (PR #1615, lql341, Aug 20) — SCNet HPC cluster operation via profile-based SSH + Slurm workflows. 🔗 `anthropics/skills#1615`
- **`pyxel`** (PR #525, kitao, Mar 5 → Sep 22 update) — Retro game development in Python with headless input-driven runs and frame inspection. 🔗 `anthropics/skills#525`
- **`document-typography`** (PR #514, PGTBoos, Mar 4) — Typographic quality control: orphan word wrap, widow paragraphs, numbering misalignment. 🔗 `anthropics/skills#514`
- **`skill-quality-analyzer` + `skill-security-analyzer`** (PR #83, eovidiu, Nov 6 → Jan 7 update) — Meta-skills for evaluating skill quality (5 dimensions) and security. 🔗 `anthropics/skills#83`

---

## 4. Skills Ecosystem Insight

> The community's most concentrated demand is **trustworthy skill invocation at scale** — the tension between how many skills exist, how reliably they trigger, and whether users can trust their origin and behavior is the single thread running through the highest-engagement issues (#492, #228, #556, #189, #1487).

---



# Claude Code Community Digest — 2026-10-04

## Today's Highlights

The Claude Code community is grappling with a mix of data-loss concerns and platform-specific bugs. The most-watched issue remains the silent 30-day transcript deletion (#62476), which has accumulated 28 👍 reactions and 27 comments. On the PR front, contributor **poteat** has pushed four stacked changes around `/diff` pane rendering, toast lifecycle, and security-default isolation — a notable burst of UI-engine work.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#62476] Silent transcript deletion after 30 days** — joelhochstetter (28👍, 27 comments). Users report Claude Code removes conversation transcripts by default with no warning. This is a data-loss concern for long-running projects. Community reaction is strongly negative; many are asking for an opt-out flag or configurable retention. [Link](https://github.com/anthropics/claude-code/issues/62476)

2. **[#98747] Idle compaction silently discards working context** — natefosterwarner (4👍, 8 comments). Since v2.1.286, idle sessions are auto-compacted before the prompt cache expires, with no opt-out. For long-running sessions this strips grounding context. Contributors are debating whether this is a bug or an intentional memory-management decision. [Link](https://github.com/anthropics/claude-code/issues/98747)

3. **[#95122] Worktree isolation refuses git-free Bash commands** — apollion69 (1👍, 2 comments). On v2.1.272/2.1.273, worktree-isolated sessions reject 75+ valid Bash calls over 3 days — loops, `$(…)`, heredocs, variable reads — even when they contain no git and reference only worktree paths. This is a sandbox false-positive regression. [Link](https://github.com/anthropics/claude-code/issues/95122)

4. **[#80576] AskUserQuestion widget hides preceding text in VS Code** — AlexandreEichenberger (10👍, 6 comments). When Claude outputs explanatory text then calls `AskUserQuestion`, the widget collapses and hides the preceding message in the VS Code extension. A UX regression that breaks context for users responding to clarifying questions. [Link](https://github.com/anthropics/claude-code/issues/80576)

5. **[#64029] Desktop MSIX install fails with HRESULT 0x80073CFF** — renestauder-cyber (1👍, 9 comments). Windows 11 Pro Build 26200 users cannot install Claude Desktop via MSIX. All documented workarounds are exhausted. This is a blocking deployment issue for Windows users on the latest OS build. [Link](https://github.com/anthropics/claude-code/issues/64029)

6. **[#99192] Code tab terminal integration broken on MSIX (Windows)** — Rapius. PowerShell terminal files are written to the virtualized AppData folder, but the terminal shell runs outside the package and can't find them. The app never detects the terminal. A packaging/filing mismatch specific to MSIX installs. [Link](https://github.com/anthropics/claude-code/issues/99192)

7. **[#92210] Desktop deep link starts scratch workspace on folder match** — PedroGiudice (3👍, 6 comments). Opening `claude://code/new?folder=<path>` when the path equals the currently selected folder opens a scratch workspace instead of targeting that folder. Regression since ~v1.46388. [Link](https://github.com/anthropics/claude-code/issues/92210)

8. **[#99071] Plugin startup tip references unavailable plugin** — menezescassio. A startup tip suggests enabling `cc-plugin-you-should-know@builtin`, but the plugin isn't installed in the project. A stale/incorrect recommendation that erodes trust in the plugin system. [Link](https://github.com/anthropics/claude-code/issues/99071)

9. **[#96792] MCP OAuth discovery fails across multiple servers** — Caetanogp. `.well-known` OAuth discovery returns `InvalidHTTPResponse` for multiple MCP servers, breaking authentication flows. Affects both VS Code and desktop on Windows. [Link](https://github.com/anthropics/claude-code/issues/96792)

10. **[#97473] Subagent status line shows parent model, not subagent override** — n0Sp00n (2👍). When launching a subagent with an explicit `model` override (e.g., `opus`), the transcript view's status line still shows the parent session's model. A display bug that misrepresents which model is actually running. [Link](https://github.com/anthropics/claude-code/issues/97473)

## Key PR Progress

1. **[#81672] hookify: decouple package import from directory name** — ozdemirsarman. Makes the `hookify` hook entry points importable regardless of the install directory name, fixing marketplace installs where the directory isn't named exactly `hookify`. Fixes #69665 and #81448. [Link](https://github.com/anthropics/claude-code/pull/81672)

2. **[#99206] diff: docked pane header positioning fix** — poteat. Removes a redundant blank row above the `/diff` header in docked mode; the engine now reserves the first row for its own close mark. Stacked UI refinement. [Link](https://github.com/anthropics/claude-code/pull/99206)

3. **[#99137] sec-default: plugin tightening only, never loosening** — poteat. Where `sec-default` is seated, a person's plugin can no longer lift a deny/ask rule or change a pinned variable. Reads only what the published config carries — a security hardening change with no new engine dependency. [Link](https://github.com/anthropics/claude-code/pull/99137)

4. **[#99141] diff: keep empty panes until they can render** — poteat. `/diff` now retains a pane even when nothing has attached to draw it yet, showing it as soon as something can. Stacked on #99118. [Link](https://github.com/anthropics/claude-code/pull/99141)

5. **[#99118] diff: toasts show while pane is open** — poteat. Other plugins' toasts are no longer held back while the `/diff` pane or dialog is open. Removes `holdToasts: true` from the diff pane/dialog lifecycle. [Link](https://github.com/anthropics/claude-code/pull/99118)

6. **[#77977] docs: document `skipLfs` for marketplace sources** — superdiaodiao. Adds documentation for the `skipLfs` option on `github` and `git` marketplace source objects, with examples for GitHub shorthand and generic Git URLs. Docs-only change referencing #63035. [Link](https://github.com/anthropics/claude-code/pull/77977)

## Feature Request Trends

- **Terminal graphics / inline image display** (#79706, 8👍): Support for terminal graphics protocols (iTerm2, sixel, Kitty) to render images inline in the TUI — the most-requested visual enhancement.
- **Cowork & Projects integration** (#99156, #98385): First-class Local Claude Code sessions as project threads, and preserving "default local folder" approvals across Remote Control server restarts.
- **Cost/usage transparency** (#99330): Publish Max 5x/20x weekly allowances with a usage history; users report 20x week ≈ 1.6× the 5x week, not 4×, and want auditable metering.
- **Plugin ecosystem improvements**: Better plugin discovery/enable flows, marketplace source flexibility (`skipLfs`), and plugin-level security boundaries.

## Developer Pain Points

- **Data retention anxiety**: Silent transcript deletion (#62476) and automatic idle compaction without opt-out (#98747) are the top frustration — developers feel their session history is being discarded without consent.
- **Windows/MSIX fragility**: A cluster of issues (#64029, #99192, #99211, #99333, #99301) point to MSIX packaging as a persistent pain point — virtualized AppData, terminal integration, deep links, and PATH probing all break specifically on MSIX installs.
- **Sandbox false positives**: Worktree isolation (#95122) is over-rejecting valid Bash commands, causing 75+ refusals in 3 days for legitimate worktree-local operations.
- **Context loss in long sessions**: Beyond compaction, developers report Claude stopping replies for minutes at a time when resuming local sessions (#99325), and migration ordering bugs that silently skip database migrations (#99329).
- **MCP/OAuth reliability**: OAuth discovery failures (#96792) and stale `enabledMcpTools` dual-key schemes (#85020) block custom MCP connector tool usage on macOS.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Thinking Process:

1.  **Understand the Goal**: The user wants a structured "OpenAI Codex community digest" for the date `2026-10-04` (based on the provided data, which is current as of the latest updates around Oct 3, 2026). The output needs to be professional, concise, and structured into 6 specific sections:
    1. Today's Highlights
    2. Releases
    3. Hot Issues (top 10 noteworthy issues, explaining why they matter and community reaction)
    4. Key PR Progress (top 10 important PRs, describing features/fixes)
    5. Feature Request Trends (most requested feature directions)
    6. Developer Pain Points (recurring frustrations/high-frequency requests)

2.  **Analyze the Data**:
    *   **Releases**:
        *   `rust-v0.162.0-alpha.8`, `rust-v0.162.0-alpha.9`, `rust-v0.162.0-alpha.10`, `rust-v0.162.0-alpha.11` (all alpha versions of 0.162.0). Let's group these as the release summary.
    *   **Issues (Top 30 shown, need to pick 10 hot ones)**:
        *   #48774: Codex Remote pairing fails on Android (Comments: 39, 👍: 23). Critical mobile integration issue.
        *   #49458: [Windows] dot-started local tasks lack Computer Use tools while ordinary local Codex sessions work (Comments: 38, 👍: 16). Feature gap/bug for Windows users using dots.
        *   #45119: macOS 14.2: sandbox startup fails with unbound variable TIOCSTI (Comments: 36, 👍: 0, CLOSED). Sandbox environment bug on macOS.
        *   #49532: Put the Branch selection BACK in codex app (Comments: 31, 👍: 64). Highly demanded feature request (64 thumbs up). Users want branch selection back.
        *   #49988: Code extension intermittently drops submitted messages after update (Comments: 30, 👍: 43). Major UX blocker for VS Code extension users.
        *   #50118: VS Code Codex queues prompts after completed turn; thread remains markedStreaming=true (Comments: 24, 👍: 10). State synchronization bug in VS Code.
        *   #50403: VS Code extension: queued messages silently fail to send - "Failed to release queued message send lock" (SyntaxError: "undefined" is not valid JSON) (Comments: 23, 👍: 1). JSON parsing bug blocking messages.
        *   #49682: ChatGPT dots: previously working cloud-computer files unavailable (Comments: 15, 👍: 2). Data persistence issue in cloud computers.
        *   #18620: Sandboxed shell commands fail on Windows with `CreateProcessWithLogonW failed: 1326` / `1909` (Comments: 11, 👍: 6). Legacy but critical Windows sandbox issue.
        *   #44988: macOS Chrome Computer Use fails to load browser request-header policy (Comments: 9, 👍: 0).
        *   #42695: Compaction during a send_message_to_thread-triggered turn can revive an obsolete instruction (Comments: 8).
        *   #49665: Custom MCP events discovered, but subscriptions unavailable in Chat and Work (Comments: 8).
        *   #50428: Windows desktop: durable chat turn/start and thread/fork fail with AbsolutePathBuf deserialized without a base path (Comments: 7).
        *   #50171: dot cannot continue an existing connected Windows local task (Comments: 6).
        *   #37738: Browser Use blocks localhost despite Allow browsing permission (Comments: 5).
        *   #50451: [Rate limits] Oct 2 global reset did not reach paid account (Comments: 5).
        *   #50486: VS Code: completed turns remain `markedStreaming=true` (Comments: 5).
        *   #50388: dot cloud computer changed and my game project became inaccessible (Comments: 4).
        *   #50667: [Windows 11] ChatGPT/Codex crashes shortly after startup — 0x80000003 in chrome.dll (Comments: 4).
        *   #50246: Codex Cloud: S3 SigV4 requests fail with an empty signed Content-Length (Comments: 3).
        *   #49287: Codex CLI: broad slowdown in task execution and response generation (Comments: 3).
        *   *Selection for Hot Issues (top 10)*: Focus on those with high comments, high thumbs up, or severe impact (e.g., #49532 with 64 👍, #49988 with 43 👍, #48774, #49458, #50118, #50403, #45119, #18620, #49682, #50486 or others like #49665 MCP one). Let's pick the 10 most impactful:
            1. #49532: Branch selection missing in Codex app (Feature Request, 64 👍, 31 comments).
            2. #49988: VS Code extension drops submitted messages (Bug, 43 👍, 30 comments).
            3. #48774: Codex Remote pairing fails on Android (Bug, 23 👍, 39 comments).
            4. #49458: Windows dot-started local tasks lack Computer Use tools (Bug, 16 👍, 38 comments).
            5. #45119: macOS 14.2 sandbox startup fails (Bug, 36 comments, closed).
            6. #50118: VS Code queues prompts after completed turn; thread remains markedStreaming=true (Bug, 10 👍, 24 comments).
            7. #50403: VS Code queued messages silently fail to send (SyntaxError JSON) (Bug, 23 comments).
            8. #18620: Windows sandbox shell commands fail with CreateProcessWithLogonW error (Bug, 6 👍, 11 comments).
            9. #49682: Cloud-computer files unavailable / environment changed (Bug, 15 comments).
            10. #49665: Custom MCP events discovered, but subscriptions unavailable (Bug/Feature gap, 8 comments). Or maybe #50451 (Rate limits reset issue) or #50667 (Windows 11 crash). Let's include #50667 or #50451 if rate limits are important, but developer tools focus might favor MCP or compaction bugs. Let's write a good balanced list. Let me write down the 10 selected issues with their key details.

    *   **Pull Requests (Top 20 shown, pick 10)**:
        *   #50727: Show model and reasoning effort near the top of task details (UI/UX improvement).
        *   #50720: Decode Windows Terminal's mapped Shift+Enter sequence (Input handling fix).
        *   #50700: Let the transport create the Windows remote-control socket directory (Security/Permissions fix).
        *   #50695: Preserve local Markdown link labels in the TUI (Rendering fix).
        *   #50687: Keep third-party tools deferred in strict Code Mode Only (Architecture/Tooling).
        *   #50564: Allow transcript selection and copying while bottom modals are open (UX fix).
        *   #50562: Keep Code Mode tool discovery guidance stable across catalog changes (Consistency fix).
        *   #50559: Distinguish daemon release identity from executable contents (Daemon/Updater logic).
        *   #50558: Avoid reading the current directory when resolving absolute paths (Path resolution fix).
        *   #50555: Skip daemon auto-start for Windows-mounted WSL homes (Compatibility fix).
        *   #50546: Keep MCP resource helpers available in code mode (MCP integration).
        *   #50540: Send incremental tool catalog updates in Responses Lite (Performance/Optimization).
        *   #50536: Keep shared MCP types stable in Code Mode exec descriptions (MCP/Code mode).
        *   #50531: Persist realtime transcript tails before closure without inference (Transcript reliability).
        *   #50525: Reject unknown TUI keys in strict config validation (Config validation).
        *   #50516: Add scenario coverage for remote `/compact` context preservation (Testing).
        *   #50510: Require GovCloud guidance acknowledgment after Bedrock setup (Compliance/UX).
        *   #50507: Record Windows sandbox service stop diagnostics (Diagnostics).
        *   #50505: Keep Command Center selection adjacent after task removal (UI/UX).
        *   #50504: Center TUI confirmations over their retained backdrop (UI styling).
        *   *Selection for Key PRs*: Pick 10 that show solid engineering progress across TUI, daemon, Windows, MCP, and developer workflow:
            1. #50727 (Show model/reasoning effort in task details)
            2. #50720 (Decode Windows Terminal Shift+Enter)
            3. #50700 (Windows remote-control socket directory creation & DACL)
            4. #50695 (Preserve local Markdown link labels in TUI)
            5. #50687 (Keep third-party tools deferred in strict Code Mode)
            6. #50558 (Avoid reading current directory when resolving absolute paths)
            7. #50555 (Skip daemon auto-start for Windows-mounted WSL homes)
            8. #50546 (Keep MCP resource helpers available in code mode)
            9. #50540 (Send incremental tool catalog updates in Responses Lite)
            10. #50531 (Persist realtime transcript tails before closure without inference) or #50525 (Reject unknown TUI keys in strict config validation). Let's go with #50525 and #50531. Let's select #50559 (Daemon release identity) and #50546 (MCP resources) as they touch crucial areas.

    *   **Feature Request Trends**:
        *   Branch selection in Codex App (#49532 - 64 👍).
        *   Computer Use tools support for Windows local tasks started via dot (#49458).
        *   MCP event subscription support in Chat and Work (#49665).
        *   TUI/UX improvements (transcript copying, model details, Command Center selection).
        *   Overall, there is a strong push for restoring desktop features (like branch selection) and bridging feature parity gaps between Windows/macOS and cloud/local environments.

    *   **Developer Pain Points**:
        *   VS Code extension stability: message drops (#49988), message queue lock syntax errors (#50403), and streaming state desync (#50118, #50486).
        *   Environment and sandbox issues: macOS TIOCSTI sandbox fail (#45119), Windows sandbox CreateProcessWithLogonW fail (#18620), Windows crash in chrome.dll (#50667).
        *   Cloud state and file persistence: files disappearing in cloud computers (#49682, #50388), rate limit resets not propagating properly to paid accounts (#50451), promotional credits dropping (#50501).
        *   Path resolution and daemon issues on edge filesystems (Windows-mounted WSL homes, deleted current directories).

3.  **Drafting the sections**:

    *   **Today's Highlights (2-3 sentences)**:
        *   Codex community is heavily focused on VS Code extension stability, with multiple severe bugs around message queuing, state synchronization, and message drops.
        *   The release of `v0.162.0-alpha` series (alpha 8 to 11) brings various TUI improvements, config validation hardening, and MCP tooling updates.
        *   Users are actively demanding the return of branch selection in the desktop app and better parity for Computer Use tools on Windows.

    *   **Releases**:
        *   Summarize `v0.162.0-alpha.8` through `v0.162.0-alpha.11`. Mention that these alpha releases focus on incremental improvements in TUI rendering, config validation, daemon release identity, and strict Code Mode tool deferral. (No need to detail every single alpha unless they represent a collective push towards the stable 0.162.0 release).

    *   **Hot Issues (Pick 10, explain why they matter and community reaction)**:
        *   Format each with Name, Link, Why it matters, and Community reaction (👍 / comments).
        *   1. **#49532 - Put the Branch selection BACK in codex app**: High demand (64 👍, 31 comments) to restore a critical workflow feature for git users.
        *   2. **#49988 - Code extension intermittently drops submitted messages**: Severe bug (43 👍, 30 comments) blocking core usage of the VS Code extension after the Oct 1 update.
        *   3. **#48774 - Codex Remote pairing fails on Android**: Mobile-desktop integration gap (23 👍, 39 comments) preventing Android users from pairing.
        *   4. **#49458 - Windows dot-started local tasks lack Computer Use tools**: Feature parity bug (16 👍, 38 comments) where local tasks miss crucial tools.
        *   5. **#45119 - macOS 14.2 sandbox startup fails with unbound variable TIOCSTI**: Sandbox environment blocker (36 comments, closed).
        *   6. **#50118 - VS Code queues prompts after completed turn; thread remains markedStreaming=true**: State desync bug (10 👍, 24 comments) causing message queues to lock up.
        *   7. **#50403 - VS Code queued messages silently fail to send (JSON SyntaxError)**: Critical bug (23 comments) where messages fail silently due to lock release parsing errors.
        *   8. **#18620 - Sandboxed shell commands fail on Windows with CreateProcessWithLogonW**: Core sandbox execution failure on Windows (6 👍, 11 comments).
        *   9. **#49682 - Cloud-computer files unavailable / environment changed**: Data integrity issue (15 comments) where developer environments unexpectedly reset.
        *   10. **#49665 - Custom MCP events discovered, but subscriptions unavailable**: MCP integration gap (8 comments) limiting plugin capabilities in standard Chat/Work flows.

    *   **Key PR Progress (Pick 10 important PRs, describe features or fixes)**:
        *   1. **#50727 - Show model and reasoning effort near the top of task details**: Improves task overview transparency by placing model and reasoning level front and center.
        *   2. **#50720 - Decode Windows Terminal's mapped Shift+Enter sequence**: Fixes input mapping issues, ensuring proper newline insertion in the composer when using Shift+Enter on Windows Terminal.
        *   3. **#50700 - Let the transport create the Windows remote-control socket directory**: Enhances security by letting the transport manage socket parent directories with a protected DACL instead of inheriting broad temp folder ACLs.
        *   4. **#50695 - Preserve local Markdown link labels in the TUI**: Fixes text rendering to preserve custom link labels and formatting instead of collapsing them to raw URLs.
        *   5. **#50687 - Keep third-party tools deferred in strict Code Mode Only**: Improves tool catalog stability by deferring third-party tool schemas to prevent unnecessary model context updates.
        *   6. **#50558 - Avoid reading the current directory when resolving absolute paths**: Robustness fix ensuring absolute path resolution doesn't fail if the current working directory is deleted.
        *   7. **#50555 - Skip daemon auto-start for Windows-mounted WSL homes**: Compatibility fix preventing startup failures on WSL filesystems that don't support Unix-style permission semantics.
        *   8. **#50546 - Keep MCP resource helpers available in code mode**: Ensures resource helper tools are consistently registered in Code Mode Only regardless of server counts.
        *   9. **#50540 - Send incremental tool catalog updates in Responses Lite**: Optimizes tool definition synchronization by sending only incremental catalog updates instead of full refreshes.
        *   10. **#50525 - Reject unknown TUI keys in strict config validation**: Hardens configuration validation by catching typos in TUI settings under `--strict-config`.

    *   **Feature Request Trends**:
        *   *Desktop Feature Parity*: Restoring classic desktop features like branch selection (#49532) and bringing Computer Use tools to Windows local tasks (#49458).
        *   *MCP & Plugin Integration*: Better event subscription mechanisms for custom MCP plugins in standard Chat and Work modes (#49665).
        *   *TUI/UX Enhancements*: Improved copy/paste behaviors, transcript copying while modals are open, and clearer visibility of model parameters and reasoning levels.
        *   *Cloud & Remote Consistency*: Better state persistence in cloud computers to prevent files and running services from disappearing unexpectedly.

    *   **Developer Pain Points**:
        *   *IDE Extension State Desync*: VS Code extension

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Thinking Process:

1.  **Analyze the Request:**
    *   **Role:** Technical analyst focused on AI developer tools.
    *   **Source data:** GitHub data for `google-gemini/gemini-cli` (latest releases, issues, PRs).
    *   **Date of digest:** 2026-10-04 (data is from the last 24h, looking at dates like 2026-10-03).
    *   **Format:** Structured English digest with 6 specific sections:
        1.  *Today's Highlights* (2-3 sentences summarizing the most important updates)
        2.  *Releases* (Summarize new versions/changes)
        3.  *Hot Issues* (Pick 10 noteworthy issues, explain why they matter, community reaction, include links)
        4.  *Key PR Progress* (Pick 10 important PRs, describe features/fixes, include links)
        5.  *Feature Request Trends* (Distill most-requested feature directions from issues)
        6.  *Developer Pain Points* (Summarize recurring developer frustrations / high-frequency requests)
    *   **Style:** Concise, professional, suited for technical developers. Include GitHub links for each item.

2.  **Analyze the Data:**

    *   **Latest Releases:**
        *   `v0.64.0-nightly.20261003.gfb972b2f8` (Release v0.64.0-nightly.20261003.gfb972b2f8)
        *   What's changed: `fix(cli): ensure Enter and Spacebar reliably confirm selection list options` by @ugorla-dev in PR #29502.
        *   Link: Compare `v0.64.0-nightly.20261002...v0.64.0-nightly.20261003...` (specific PR is #29502).

    *   **Latest Issues (Top 30 shown, need to pick ~10 noteworthy ones):**
        *   *Issue #22323* [priority/p1, area/agent]: Subagent recovery after MAX_TURNS is reported as GOAL success, hiding interruption. (Comments: 13, 👍: 2) - Crucial bug because subagent falsely reports success.
        *   *Issue #19873* [priority/p2, area/agent]: Leverage model's bash affinity via Zero-Dependency OS Sandboxing & Post-Execution Intent Routing. (Comments: 9, 👍: 1) - Large effort feature request.
        *   *Issue #21409* [priority/p1, area/agent]: Generalist agent hangs. (Comments: 8, 👍: 8) - Critical blocker/hang issue when deferring to generalist agent.
        *   *Issue #22745* [priority/p2, area/agent]: Assess the impact of AST-aware file reads, search, and mapping. (Comments: 7, 👍: 1) - Epic investigation.
        *   *Issue #21968* [priority/p2, area/agent]: Gemini does not use skills and sub-agents enough. (Comments: 7, 👍: 0) - Agent autonomy/proactivity issue.
        *   *Issue #22267* [priority/p2, area/agent]: Browser Agent ignores settings.json overrides (e.g., maxTurns). (Comments: 4, 👍: 0) - Configuration bug.
        *   *Issue #22232* [priority/p3, area/agent]: Enhance browser_agent resilience: Automatic session takeover and lock recovery. (Comments: 4, 👍: 0) - Browser profile lock issue.
        *   *Issue #21983* [priority/p1, area/agent]: browser subagent fails in wayland. (Comments: 4, 👍: 1) - Platform compatibility bug.
        *   *Issue #21000* [priority/p3, area/agent]: Experiment with using native file tools for creating and maintaining the task tracker. (Comments: 4, 👍: 0).
        *   *Issue #20079* [priority/p2, area/agent]: `~/.gemini/agents/filename.md` is not recognized as an agent if filename.md is a symlink. (Comments: 4, 👍: 0) - Symlink support bug.
        *   *Issue #24246* [priority/p2, area/agent]: Gemini CLI encounters 400 error with > 128 tools (or >400 tools). (Comments: 3, 👍: 0) - Scaling issue with tool counts.
        *   *Issue #23571* [priority/p2, area/agent]: Model frequently creates tmp scripts in random spots. (Comments: 3, 👍: 0) - Workspace cleanliness.
        *   *Issue #22672* [priority/p2, area/agent]: Agent should stop/discourage destructive behavior (e.g. git reset --force). (Comments: 3, 👍: 1) - Safety/behavior alignment.
        *   *Issue #22186* [priority/p1, area/agent]: get-shit-done output hook causes crash. (Comments: 3, 👍: 0) - Crash bug.
        *   *Issue #21763* [priority/p1, area/agent]: Bugreport doesn't provide context of the subagent. (Comments: 2, 👍: 0) - Debuggability gap.
        *   *Issue #22598* [priority/p3, area/agent]: Subagent trajectory should be visible via `/chat share`. (Comments: 2, 👍: 1) - Sharing/visibility feature.

    *   **Latest PRs (Top 18 shown, pick 10 important ones):**
        *   *PR #29590* [area/core, size/s]: fix(core): keep functionResponse.parts when stripping tool call id prefixes (T1misageek). Fixes image/screenshot data dropped.
        *   *PR #29622* [area/core, size/m]: fix(core): bound tildeifyPath to path segments (thesayaadii). Fixes sibling directory tilde expansion bug.
        *   *PR #29621* [area/core, size/m]: fix(core): preserve subagent multimodal tool response parts (shivangsharma01). Fixes image data discarded in subagent scheduler.
        *   *PR #29402* [CLOSED, priority/p1, area/core, size/m/l]: fix(cli): make persistent state writes failure-safe (Oscar-Williams). Atomic writes to prevent corrupted state.json.
        *   *PR #29387* [CLOSED, area/extensions, size/m]: fix(cli): don't let one malformed extension directory fail all extension loading (Kaushik2210). Error handling improvement.
        *   *PR #29400* [CLOSED, priority/p1, area/core]: Fix/29365 duplicate tool responses (abhashkumar9051). Fixes duplicate functionResponse on session resume with `-r`.
        *   *PR #29399* [CLOSED, priority/p2, area/agent]: fix(core): preserve unrelated comments during edits (csy20). Strengthens replace tool contract.
        *   *PR #29398* [CLOSED, priority/p1, area/agent]: fix(mcp): bound initial tool discovery to a short timeout (sanjibani). Prevents 10-minute hang on mismatched JSON-RPC id.
        *   *PR #29397* [CLOSED, priority/p2, area/agent, size/xl]: fix(agent): prevent session context poisoning and infinite loops on interrupted turns (dylanyunlon). Resolves synthetic history insertion bug.
        *   *PR #29394* [CLOSED, priority/p1, area/agent, size/xl]: fix(scheduler): enforce user hold directives by blocking mutating tools at scheduler layer (dylanyunlon). Resolves aggressive action-bias overriding user instructions.
        *   *PR #29386* [CLOSED, area/agent]: Fix #29315: bug(a2a-server): express.json registered after A2A routes, req.body undefined (danielalanbates).
        *   *PR #29505* [OPEN, priority/p1, size/l]: fix: support rootless Podman with keep-id (bl4987637-code). Sandbox UID/GID mapping fix.
        *   *PR #29597* [OPEN, priority/p2, area/extensions, size/l]: fix(companion): allow IPC socket fallback for gVisor/runsc sandboxes (elberthc-byte). Loopback isolation fix.

    *   **Selecting 10 Key PRs (mix of critical bug fixes, safety, and core improvements):**
        1.  #29394: Enforce user hold directives (scheduler layer blocking of mutating tools).
        2.  #29397: Prevent session context poisoning on interrupted turns.
        3.  #29400: Fix duplicate tool responses on session resume (`-r`).
        4.  #29402: Make persistent state writes failure-safe (atomic temp file writes).
        5.  #29590: Keep `functionResponse.parts` when stripping tool call id prefixes (fixes image rendering).
        6.  #29621: Preserve subagent multimodal tool response parts (image data fix).
        7.  #29398: Bound initial MCP tool discovery to a short timeout (fixes 10-min hang).
        8.  #29387: Malformed extension directory handling (graceful degradation).
        9.  #29622: Bound `tildeifyPath` to path segments (visual path rendering bug).
        10. #29597: Allow IPC socket fallback for gVisor/runsc sandboxes.
        *(Alternatively #29505 rootless Podman support is also very nice)* Let's list these 10 clearly.

    *   **Selecting 10 Hot Issues (prioritizing P1s and high-comment/interaction ones):**
        1.  #22323: Subagent false GOAL success report after MAX_TURNS (P1, critical agent logic bug).
        2.  #21409: Generalist agent hangs (P1, high thumbs up, critical usability blocker).
        3.  #21983: Browser subagent fails in Wayland (P1, key environment compatibility issue).
        4.  #22186: get-shit-done output hook causes crash (P1, crash bug).
        5.  #21763: Bug reports lack subagent context (P1, debugging pain point).
        6.  #19873: Zero-Dependency OS Sandboxing & Post-Execution Intent Routing (P2, large effort, model bash affinity).
        7.  #21968: Gemini does not use skills and sub-agents enough (P2, agent autonomy/proactivity).
        8.  #22672: Agent should stop/discourage destructive behavior (P2, safety concern, git reset force).
        9.  #22267: Browser Agent ignores settings.json overrides (P2, config bug).
        10. #24246: 400 error with > 128 tools (P2, scaling limitation).
        *(Alternatively #20079 symlink agent recognition or #22745 AST-aware reads). Let's stick to these 10 as they cover P1 crashes/hangs, agent behavior autonomy, sandboxing, and configuration bugs.*

    *   **Drafting the Sections:**

        *   **Today's Highlights (2-3 sentences):**
            October 4, 2026 digest. Today's release focuses on minor CLI interaction fixes (`v0.64.0-nightly`), while the community is heavily discussing critical agent behavioral bugs, notably the generalist agent hanging (#21409) and subagents falsely reporting success after hitting turn limits (#22323). On the development front, several major pull requests were closed, focusing heavily on agent safety (enforcing user hold directives), session state integrity, and preventing multimodal data loss during subagent handoffs.

        *   **Releases:**
            *   **v0.64.0-nightly.20261003.gfb972b2f8**
                *   Summary: A minor nightly release focusing on TUI/CLI usability.
                *   Key change: Fixed an issue where the Enter and Spacebar keys did not reliably confirm selection list options in the CLI interface (PR #29502 by @ugorla-dev).
                *   Compare link: `https://github.com/google-gemini/gemini-cli/compare/v0.64.0-nightly.20261002.gc9096a847...v0.64.0-nightly.20261003.gfb972b2f8`

        *   **Hot Issues (Pick 10, explain why they matter, community reaction, links):**
            *   Format each item: Title, Priority, URL, Why it matters, Community reaction (likes/comments).
            *   1. *Subagent recovery after MAX_TURNS is reported as GOAL success, hiding interruption* (#22323) - Priority P1. Critical logic flaw where agents think they succeeded when they actually timed out. 13 comments, 2 👍.
            *   2. *Generalist agent hangs* (#21409) - Priority P1. Severe blocker where deferring to the generalist agent causes infinite hangs, even for simple tasks like folder creation. 8 comments, 8 👍 (high community agreement of severity).
            *   3. *browser subagent fails in wayland* (#21983) - Priority P1. Critical environment compatibility issue for users running on Wayland-based display servers. 4 comments, 1 👍.
            *   4. *get-shit-done output hook causes crash* (#22186) - Priority P1. Crashes the CLI when almost finished printing user summaries. 3 comments.
            *   5. *Bugreport doesn't provide context of the subagent* (#21763) - Priority P1. Debugging bottleneck because standard `/bug` reports only capture the main session, leaving developers blind to subagent operations. 2 comments.
            *   6. *Leverage model's bash affinity via Zero-Dependency OS Sandboxing & Post-Execution Intent Routing* (#19873) - Priority P2. Large-scale feature proposal to align model training (bash-native) with secure sandboxing. 9 comments, 1 👍.
            *   7. *Gemini does not use skills and sub-agents enough* (#21968) - Priority P2. Frustration over the model's lack of proactive context switching and tool usage unless explicitly prompted. 7 comments.
            *   8. *Agent should stop/discourage destructive behavior* (#22672) - Priority P2. Safety concern regarding the model's occasional bias toward aggressive git commands (`reset --force`) over safer alternatives. 3 comments, 1 👍.
            *   9. *Browser Agent ignores settings.json overrides (e.g., maxTurns)* (#22267) - Priority P2. Configuration inconsistency where the Browser Agent bypasses system/project settings. 4 comments.
            *   10. *Gemini CLI encounters 400 error with > 128 tools* (#24246) - Priority P2. Scalability bottleneck limiting toolsets for complex workflows. 3 comments.

        *   **Key PR Progress (Pick 10, describe features/fixes, links):**
            *   Format: Title, State, URL, Summary.
            *   1. *fix(scheduler): enforce user hold directives by blocking mutating tools at scheduler layer* (#29394, Closed) - Resolves #26390. Crucial safety fix preventing the agent from executing destructive edits (`replace`, `write_file`) when users say "wait" or "explain first".
            *   2. *fix(agent): prevent session context poisoning and infinite loops on interrupted turns* (#29397, Closed) - Fixes a severe bug where synthetic interruption messages polluted the session history, causing loops.
            *   3. *Fix/29365 duplicate tool responses* (#29400, Closed) - Eliminates duplicate `functionResponse` messages when resuming sessions with the `-r` flag.
            *   4. *fix(cli): make persistent state writes failure-safe* (#29402, Closed) - Implements atomic write-temp-file-and-rename patterns to prevent corrupted `state.json` on interrupted saves.
            *   5. *fix(core): keep functionResponse.parts when stripping tool call id prefixes* (#29590, Open) - Fixes a critical data loss bug where images (like screenshots) read by tools were dropped entirely by the model.
            *   6. *fix(core): preserve subagent multimodal tool response parts* (#29621, Open) - Ensures image data emitted as sibling parts to function responses is preserved during subagent-to-model handoffs.
            *   7. *fix(mcp): bound initial tool discovery to a short timeout* (#29398, Closed) - Closes #28355. Fixes a major latency issue where mismatched JSON-RPC IDs caused 10-minute hangs during tool discovery.
            *   8. *fix(cli): don't let one malformed extension directory fail all extension loading* (#29387, Closed) - Improves robustness by isolating extension loading errors.
            *   9. *fix(core): bound tildeifyPath to path segments* (#29622, Open) - Resolves visual rendering bugs where sibling directories sharing home-directory prefixes were incorrectly collapsed to `~`.
           

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



Here is the GitHub Copilot CLI community digest for **2026-10-04**, compiled from the latest repository activity.

---

### 1. Today's Highlights
The last 24 hours have seen a high volume of technical issue tracking on `github/copilot-cli`, with a heavy focus on MCP (Model Context Protocol) authentication lifecycles and ACP (Agent Client Protocol) integration growing pains. Critical bugs regarding stale macOS device bindings and concurrent OAuth token refresh failures highlight the stability challenges in the MCP stack, while the community pushes for deeper feature parity in ACP mode, such as model listing and assisted approval safety nets.

---

### 2. Releases
*   **No new releases** were published in the last 24 hours.

---

### 3. Hot Issues
Selected 10 noteworthy issues that have gained significant traction or pose critical blockers to the developer community:

*   **[#4998](https://github.com/github/copilot-cli/issues/4998) [OPEN] Copilot CLI unusable after macOS update/reboot because `.mcp-writer.binding` persists stale filesystem device ID**  
    *   **Why it matters:** Completely bricks the Copilot CLI on macOS immediately following system security updates or reboots, affecting both new and resumed sessions.  
    *   **Community reaction:** Highly active with 7 comments and 6 👍, indicating a high-severity blocker for macOS users running version 1.0.90-3.
*   **[#4012](https://github.com/github/copilot-cli/issues/4012) [CLOSED] Bug with BYOK: reasoning effort not supported for model "glm-5.2:cloud"**  
    *   **Why it matters:** Prevents users of custom Bring-Your-Own-Key (BYOK) configurations from utilizing the `--reasoning-effort max` flag, despite model compatibility.  
    *   **Community reaction:** Highly voted with 23 👍, showing strong community demand for custom model feature parity.
*   **[#2795](https://github.com/github/copilot-cli/issues/2795) [CLOSED] `--agent <agent name>` does not work with `--plugin-dir <dir> -p <prompt>`**  
    *   **Why it matters:** Breaks non-interactive programmatic workflows where users try to target specific plugin-loaded agents with a direct prompt.  
    *   **Community reaction:** 17 👍 and 6 comments, highlighting a common friction point in plugin loading precedence.
*   **[#4946](https://https://github.com/github/copilot-cli/issues/4946) [OPEN] HTTP 400 `content[].thinking` after a background shell completion notification**  
    *   **Why it matters:** Triggers a protocol-level parsing error when background tasks complete and the runtime attempts to deliver notifications in a new session turn.  
    *   **Community reaction:** 4 comments and active tracking, representing a subtle but critical session state-corruption bug.
*   **[#5015](https://github.com/github/copilot-cli/issues/5015) [OPEN] Keyboard-accessible pager mode for chat history, with Vim/less-style navigation**  
    *   **Why it matters:** Power users disabled mouse mode are forced to use coarse Page Up/Page Down controls, making reviewing long tool outputs and diffs tedious.  
    *   **Community reaction:** 3 👍, representing a highly requested quality-of-life terminal UX improvement.
*   **[#5042](https://github.com/github/copilot-cli/issues/5042) [OPEN] HydraFusion: after a 400 on the routed model, the session is re-routed to a small-context model that cannot load the static prompt**  
    *   **Why it matters:** When a routed model fails mid-session, the fallback router switches the session to a smaller model, causing context overflow crashes and tool-set mismatches.  
    *   **Community reaction:** Critical architectural issue for users relying on dynamic multi-model routing (HydraFusion).
*   **[#5044](https://github.com/github/copilot-cli/issues/5044) [OPEN] Regression in 1.0.87: MCP tool call fails with "MCP tool catalog changed" when an unrelated tool's `_meta` differs**  
    *   **Why it matters:** Breaks MCP tool invocation if the server updates its tool list metadata during connection windows, causing false-positive failures.  
    *   **Community reaction:** Identified as a regression in version 1.0.87, currently tracked with developers seeking hotfixes.
*   **[#5040](https://github.com/github/copilot-cli/issues/5040) [OPEN] MCP OAuth: Entra rejects 127.0.0.1 callback (AADSTS50011); no localhost host override found**  
    *   **Why it matters:** Prevents enterprise users from authenticating Microsoft Entra ID-protected remote MCP servers due to loopback callback URI restrictions.  
    *   **Community reaction:** Critical blocker for enterprise-grade MCP security setups.
*   **[#5049](https://github.com/github/copilot-cli/issues/5049) [OPEN] [triage] Computer Use plugin unavailable in ACP mode despite being enabled in CLI (Windows, 1.0.91)**  
    *   **Why it matters:** Creates a feature parity gap where the ACP protocol advertises the `/computer` command, but the underlying plugin fails to initialize inside the session.  
    *   **Community reaction:** Newly opened issue targeting Windows ACP users.
*   **[#4839](https://github.com/github/copilot-cli/issues/4839) [CLOSED] Make option to disable taskbar icon**  
    *   **Why it matters:** Copilot CLI spawns multiple taskbar icons for concurrent sessions, cluttering the system tray for users who prefer custom desktop tracking tools.  
    *   **Community reaction:** 4 👍, showing steady demand from power users managing multiple parallel sessions.

---

### 4. Key PR Progress
*   **Total PRs in the last 24h:** 1 item.
*   **[#5046](https://github.com/github/copilot-cli/pull/5046) [OPEN] Initial commit** by *c6r8h48msf-debug*  
    *   **Summary:** This PR represents an initial community commit structure. No major core feature developments or core updates were submitted as pull requests in the provided data window.

---

### 5. Feature Request Trends
The community requests are consolidating around several key areas:
*   **ACP Integration & Parity:** Users want deeper integration with external ACP clients, specifically requesting the ability to expose the model list dynamically (`session/new` config options) and expose Copilot's built-in assisted approval safety judge to ACP clients (e.g., T3 Code).
*   **Advanced Terminal Navigation:** Strong desire for Vim/less-style keybindings to scroll through chat history and a way to disable taskbar icons to keep multi-session workflows clean.
*   **Context & Plan Management:** Requests for a "Accept plan with fresh context" action in Plan Mode to drop the heavy planning transcript and keep only the final artifacts, alongside robust fixes for `/compact` failures.

---

### 6. Developer Pain Points
Recurring frustrations in the developer workflow center around:
*   **Fragile MCP OAuth State Machines:** Developers are hitting a cascade of authentication issues, ranging from Entra ID rejecting loopback `127.0.0.1` callbacks to concurrent token-refresh races causing false-positive hard failures.
*   **Session and Routing Stability:** Model routing systems (like HydraFusion) failing over to small-context models mid-session, resulting in lost system prompts, and silent `/compact` failures when models return empty responses.
*   **Environment Friction:** Stale device bindings persisting across macOS system updates, breaking workspace integration, and terminal input conflicts (e.g., CJK text garbling and shortcut collisions in terminals like Herdr).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



# OpenCode Community Digest — 2026-10-04

Here is the structured digest of the latest activity, issues, and pull requests in the `anomalyco/opencode` community, compiled for October 4, 2026.

---

### 1. Today's Highlights
The OpenCode community is seeing a massive influx of high-quality contributions from core maintainers and community members (notably `kitlangton`, `afonsoft`, and `nexxeln`) stabilizing the v2 beta branch. Key robustness fixes targeting session recovery from corrupted attachments and MCP server reconnections are currently pending merge. On the user side, a cluster of critical bugs regarding free-tier model routing and aggressive 60-minute idle evictions of background tasks remain the primary pain points for daily users.

---

### 2. Releases
*No new releases were published in the last 24 hours.*

---

### 3. Hot Issues (Top 10)
These issues represent the most critical conversations and bugs currently shaping the v2 beta testing phase:

*   **Free Tier Routing Failures (`#52899`, `#49723`, `#50627`)**: A recurring and frustrating cluster of bugs where free-tier models fail with the error *"OpenCode's free tier can only be used from within OpenCode"* when routed through custom agents, MCP providers, or custom permission policies (e.g., denying shell commands). This suggests a systemic context/header validation bug in the provider routing layer.
*   **DSML Tool Call Parsing Crash (`#49050`)**: The AI session aborts immediately after writing the closing tag `</｜DSML｜tool_calls>`. This parser-level bug disrupts standard tool-calling flows and has gathered significant attention (12 comments, 4 likes).
*   **Go Model Limits Blocking Entire Subscription (`#49014`, `#52962`)**: Users report that hitting the 5-hour usage limit on one model (e.g., Grok or Kimi) blocks *all* other models under the Go subscription, even those with zero usage. This contradicts the documented per-model limits and points to an account-wide pooling bug.
*   **TUI Memory Exhaustion (OOM) in v2 (`#51761`)**: A severe memory leak in the v2 TUI where memory grows linearly at 500MB/s–1GB/s without GC sawtooth patterns, reaching 24–28GB in under a minute before being OOM-killed. A critical blocker for v2 desktop usage.
*   **Compaction Ignores `agents.compaction.model` (`#44094`)**: Since the "shared model request" refactor, manual compaction in v2 ignores the agent-specific compaction model configuration and always defaults to the session's current model.
*   **60m Idle Location Eviction Interrupts Active Runs (`#51343`, `#51828`, `#48691`)**: Sessions, terminals, and background shells are forcefully torn down and SIGTERM'd after 60 minutes of chat inactivity, even if a run is parked waiting on a user question. This state-management flaw disrupts long-running workflows.
*   **Subagent Premature Completion (`#48826`)**: V2 subagents running background tasks (`background: true`) report `completed` to their parent early, resulting in lost results when the background job finishes later.
*   **Windows Service Watchdog Restart Loop (`#52049`)**: On Windows, a 45s event-stream idle watchdog repeatedly kills the managed `opencode serve` background service, aborting all active sessions and subagents.

---

### 4. Key PR Progress (Top 10)
Community contributors are actively hardening the v2 codebase. Here are the key pull requests to review:

*   **Session Recovery from Rejected Attachments (`#53014`, `#53008`)**: Critical fixes by `kitlangton` to prevent session corruption. It ensures that interrupted/truncated PDF downloads (missing `%%EOF`) are omitted from future model requests, and sessions are recovered when attachments are rejected by providers with HTTP 400 errors.
*   **MCP Reconnection with Backoff (`#52943`)**: Fixes the issue where remote MCP servers that drop (e.g., during macOS sleep/wake) remained dead indefinitely. The background service will now automatically reconnect them with a backoff strategy.
*   **Tool Input Schema Repair (`#53026`)**: Fixes a bug where tool input repair used the live registry schema instead of the request's captured tool schema, preventing validation mismatches during execution.
*   **TUI Disconnection Session Hydration (`#53012`)**: Ensures that child subagents started during a TUI event stream drop are correctly registered and hydrated upon reconnection, preventing "orphaned" session states.
*   **TUI Prompt Flash Fix (`#53022`)**: Prevents the prompt flash when revealing older transcript history, improving the rendering performance of the v2 history view.
*   **TUI Provider Name Visibility (`#50727`)**: Updates the model picker to always show configured provider names, even when integrations are not actively connected, improving configuration transparency.
*   **Plugin Keymaps During Setup (`#53010`)**: Allows plugins to register reactive commands and keymaps during the setup phase without needing to mount dummy UI slots.
*   **Nix Desktop Signing Fix (`#53007`)**: Adds `codesign` and `codesign_allocate` to the macOS desktop Nix derivation, fixing desktop builds on `aarch64-darwin`.
*   **OpenCode Browser Extension (`#52818`)**: Introduces a new `packages/browser-extension` package, expanding the OpenCode ecosystem to browser environments.
*   **Command Menu Marquee (`#53027`)**: Implements a neat UI touch—reusing tab marquee animations when hovering over items in the slash/command menu.

---

### 5. Feature Request Trends
Based on issue discussions, the community is heavily requesting:
*   **Granular Context & Message Editing**: High demand for the ability to edit the context window, specifically deleting or modifying previous messages to steer LLM outputs away from dead ends (see closed/popular issue `#7712`).
*   **Subagent & Agent Profile Customization**: Requests for more flexible profile configurations, such as supporting Bash-less agent profiles (`#52880`) and customizing subagent compaction behaviors (`#44094`).
*   **TUI/UX Visual Enhancements**: Features like timestamp gutters for messages (`#29398`) and better visual indicators for configured model providers (`#50322`).

---

### 6. Developer Pain Points
*   **Inconsistent Free Tier Context Isolation**: Developers and users running complex setups (MCPs, custom shell

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



# Pi Community Digest — 2026-10-04

---

## 1. Today's Highlights

Pi v1.0.1 shipped with Nix flake support, making it installable via `nix run github:earendil-works/pi/stable`. The TUI team is pushing a perf-focused PR (#10383) that diffs raw lines to preserve pointer equality on unchanged rows — a direct response to the growing chorus of users reporting scroll/typing lag in sessions with 800+ messages. On the issues side, Mac OS CPU spikes and clipboard regressions remain the top pain points, both drawing heavy community engagement.

---

## 2. Releases

**v1.0.1** — [earendil-works/pi](https://github.com/earendil-works/pi/releases/tag/v1.0.1)

- **Nix flake** — `nix run github:earendil-works/pi/stable` runs the latest release; `nix profile add github:earendil-works/pi/stable` installs it system-wide. See the [quickstart guide](https://github.com/earendil-works/pi/blob/v1.0.1/packages/coding-agent/docs/quickstart.md#1-install-pi).
- Additional packaging and install improvements accompany the release; full changelog at the tag above.

---

## 3. Hot Issues

### #7730 — [bug] High CPU usage on Mac OS with long session
**Author:** gterzian | **Comments:** 17 | **👍:** 10
[Link →](https://github.com/earendil-works/pi/issues/7730)

The most impactful open bug. Users report CPU swinging between 50–110% on macOS with memory at 600–800MB, anecdotally tied to context/session length. This is a fundamental perf concern for long-running agents and has drawn 17 comments of discussion. The root cause is likely the same full-render storm described in #9255 and #9807, but macOS-specific threading or memory behavior may be amplifying it.

### #9255 — TuiMainScreen: full-screen redraw storm when changed rows sit above the viewport top
**Author:** vicmuchina | **Comments:** 9 | **👍:** 1
[Link →](https://github.com/earendil-works/pi/issues/9255)

When a long transcript's changed rows fall above the viewport top, `TuiMainScreen.doRender()` takes the `fullRender(true)` path for nearly every frame. A ~30-line thinking tail growing taller than the viewport triggers this, causing violent jumps and doubled text. This is the architectural root cause behind the lag complaints in #9807 and likely the CPU issue in #7730.

### #9688 — [bug] regression: clipboard copy doesn't work anymore
**Author:** BroadlyWhitaker | **Comments:** 9 | **👍:** 2
[Link →](https://github.com/earendil-works/pi/issues/9688)

A recent fix (#9618) changed OSC 52 clipboard copy logic to only emit when `xsel`/`wl-copy` are absent *and* an SSH session is detected. Users running Pi inside interactive containers (where SSH detection fails) lost clipboard copy entirely. This is a regression that breaks a core workflow for many.

### #10314 — Reconsider Home/End defaults in fullscreen mode?
**Author:** SorinGFS | **Comments:** 7 | **👍:** 5
[Link →](https://github.com/earendil-works/pi/issues/10314)

Home/End used to move cursor to start/end of line. In fullscreen TUI mode they now scroll to top/bottom of the transcript. The community is split — 5 👍 suggests many prefer the old line-editing behavior. A UX default change with real user friction.

### #8301 — [bug] Can't interleave compaction requests with prompts in prompt queue
**Author:** aryzing | **Comments:** 7 | **👍:** 2
[Link →](https://github.com/earendil-works/pi/issues/8301)

Queuing `"Do task 1" /compact "Do task 2" /compact "Do task 3"` fails: the first `/compact` cancels the session and compacts immediately. Users want to be able to interleave compaction with queued prompts, not have it short-circuit the queue.

### #9335 — [no-action] openai-responses: support configuration_update for cache-preserving reasoning changes
**Author:** harche | **Comments:** 5 | **👍:** 7
[Link →](https://github.com/earendil-works/pi/issues/9335)

High-impact feature request: GPT-6 guidance calls for a `configuration_update` input item to change reasoning effort without rewriting the prompt prefix (preserving prompt cache). Pi 0.85.1 changes at the request level would bust the cache. 7 👍 shows strong demand from users on expensive long-context workflows.

### #10267 — Prompt text contributed in before_agent_start is dropped on runs without a user prompt
**Author:** mvdbos | **Comments:** 5 | **👍:** 0
[Link →](https://github.com/earendil-works/pi/issues/10267)

Extensions contributing prompt text via `before_agent_start` lose it on runs triggered by background-task notifications, plan-mode continues, retries, or resumes. Both `systemPrompt` and `systemPromptOptions.sections` shapes are affected. A subtle but important correctness bug for extension authors.

### #9262 — [bug] find tool: glob patterns with Windows separators silently return no results
**Author:** weiconghe | **Comments:** 5 | **👍:** 0
[Link →](https://github.com/earendil-works/pi/issues/9262)

`find` with patterns like `src\**\*.ts` (Windows separators) silently return nothing — no error, no results. Agents copying native Windows paths get zero feedback and may wrongly conclude files don't exist. Follow-up to #6817.

### #9807 — perf(tui): full re-render causes scroll/typing lag in sessions with 800+ messages
**Author:** hernanharco | **Comments:** 4 | **👍:** 0
[Link →](https://github.com/earendil-works/pi/issues/9807)

Pi performs a full re-render of the entire scrollback on every interaction, unlike OpenCode's OpenTUI which uses incremental cell-level diffing. At 814 messages / 1.7MB JSON, scrolling and typing become noticeably slow. This is the canonical perf complaint and the target of PR #10383.

### #9311 — Fullscreen mouse selection survives session switch
**Author:** xdagiz | **Comments:** 7 | **👍:** 0
[Link →](https://github.com/earendil-works/pi/issues/9311)

Text selected in fullscreen TUI mode persists across session switches — the fix is clearing the selection on session change. A visual glitch that's easy to hit during active workflows.

---

## 4. Key PR Progress

### #10437 — fix(coding-agent): report settings save failures in interactive mode
**Author:** autopeasant | [Link →](https://github.com/earendil-works/pi/pull/10437)

Fixes #10168. `SettingsManager.enqueueWrite` catches write failures and queues them for `drainErrors()`, but interactive mode only drained once at startup. Runtime save failures (read-only `settings.json`, `EROFS`/`EACCES`) were silently swallowed. Now surfaced properly.

### #10383 — perf(tui): diff raw lines so unchanged lines keep pointer equality
**Author:** ReStranger | [Link →](https://github.com/earendil-works/pi/pull/10383)

Directly addresses the full-render perf complaints (#9807, #9255). By diffing raw lines and preserving pointer equality on unchanged rows, the TUI avoids re-rendering stable portions of the scrollback. The author notes the fullscreen mod resolved their own perf concerns.

### #10433 — feat(ai): let apps name themselves in OpenAI logins
**Author:** lucasmeijer | [Link →](https://github.com/earendil-works/pi/pull/10433)

Allows third-party apps using pi-ai to customize their name in the ChatGPT OAuth "sign in with chatgpt" flow instead of always showing as "Pi." Companion to #10429.

### #10429 — fix(ai): let caller headers override Codex originator and User-Agent
**Author:** lucasmeijer | [Link →](https://github.com/earendil-works/pi/pull/10429)

Allows callers to override the `originator` and `User-Agent` headers sent during Codex OAuth flows, so pi-ai based agents don't all appear as "Pi" to ChatGPT.

### #10410 — feat(durable): expose durable thinking, websocket, and session options
**Author:** mattiacerutti | [Link →](https://github.com/earendil-works/pi/pull/10410)

Adds `thinkingBudgets`, `websocketConnectTimeoutMs`, and `sessionId` to durable's `ConversationStreamOptions`. These were wired in the old SDK/pi but missing in the current durable package — closing a gap for durable users.

### #10397 — fix(ai): dedupe tool call ids when a server reuses the same (call_id, id) pair
**Author:** covrom | [Link →](https://github.com/earendil-works/pi/pull/10397)

Some OpenAI-compatible providers re-issue the last `function_call` with modified arguments but the same `(call_id, id)`. `createSlot` joined both without dedup, producing duplicate tool-call blocks sharing one id. Now deduplicated.

### #10402 — fix(coding-agent): bind Ctrl+H to delete backward on macOS
**Author:** sepeth | [Link →](https://github.com/earendil-works/pi/pull/10402)

Ctrl+H as backspace is nearly universal on macOS (including when CapsLock is mapped to Ctrl). Pi was the outlier. First-time contributor fix.

### #8734 — feat(ai): support top-level instructions for OpenAI Responses-compatible providers
**Author:** CaiJichang212 | [Link →](https://github.com/earendil-works/pi/pull/8734)

Adds an `openai-responses` `systemPromptFormat` compatibility option (defaults to `input`). When configured, the dynamic system prompt moves to top-level `instructions` without duplicating it in `input`. Closes #8388.

### #10261 — feat(coding-agent): add prompt template documentation eval
**Author:** christianklotz | [Link →](https://github.com/earendil-works/pi/pull/10261)

Adds live documentation comparisons for project-scoped and user-scoped `/current-time` prompt templates. Requires generated commands to expand to exact requested text, with Vitest multi-case report handling so skipped siblings don't invalidate observations.

### #10382 — feat(coding-agent): use llama.cpp classifier models natively
**Author:** mitsuhiko | [Link →](https://github.com/earendil-works/pi/pull/10382)

Loaded llama.cpp models are probed once per session via `/v1/systemone`. Decision models (Julia-1, Laya, Kev, lev, OpenJev) are now listed as typesafe-system-one classifiers instead of chat models; others keep the llama-cpp-classify fallback. Only 501/404 mark a model as chat.

---

## 5. Feature Request Trends

| Direction | Representative Issues |
|---|---|
| **TUI rendering perf & correctness** | #9255, #9807, #7730 — incremental diffing, redraw storms, scrollback memory |
| **Clipboard & input handling** | #9688, #10314, #9311, #10402 — OSC 52 regressions, Home/End defaults, selection persistence, Ctrl+H |
| **Prompt queue & compaction control** | #8301 — interleave `/compact` with queued prompts |
| **OpenAI Responses & Codex compatibility** | #9335, #10433, #10429, #8734 — `configuration_update`, app naming, header overrides, top-level `instructions` |
| **MCP transport & tooling** | #10247, #10416, #10419, #10285 — Unix socket support, stateless MCP, builtin extension IDs, MCP tool rendering |
| **Codemode & WASM bridges** | #10251, #10439 — image contents in codemode-only, quickjs-wasm path resolution after pnpm updates |
| **Durable & streaming options** | #10410 — expose thinking budgets, websocket timeouts, session IDs |

---

## 6. Developer Pain Points

- **TUI rendering architecture is the dominant bottleneck.** Full re-renders on every frame cause lag at 800+ messages (#9807), redraw storms when changed rows sit above the viewport (#9255), and likely drive the Mac CPU spike (#7730). PR #10383 is the first targeted fix, but the underlying architecture needs incremental diffing to scale.
- **Clipboard copy regression broke container workflows.** The SSH-only guard in #9618 silently disabled OSC 52 for users in containers — a classic "fix one path, break another" scenario.
- **Extension authors lose prompt text on non-interactive runs.** `before_agent_start` contributions are dropped on retries, resumes, and background notifications (#10267), forcing workarounds.
- **Provider compatibility churn is constant.** OpenAI-compatible providers reuse `(call_id, id)` pairs (#10397), drop terminal usage on `response.failed` (#10422), and embed bodies in `error.message` to bypass caps (#10423). The abstraction layer is under continuous stress.
- **Managed installs accumulate release directories (~168MB each) with no pruning** (#10392), particularly painful on mobile/Android via Termux.
- **Builtin extension IDs trigger unnecessary filesystem lookups** (#10419), adding network I/O on SMB/NAS working directories.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-10-04

## Today's Highlights
No new releases landed in the last 24h. The project’s center of gravity remains the **Managed Agent / session-management architecture**, led by the 45-comment dual-path proposal #12380 and the ACP bridge staging discussion #12737. Alongside that, **token/context governance** (#12028, #12333) and **managed-agent reliability P1s** (#13333, #13327) are the most consequential active workstreams.

## Releases
None in the last 24h.

## Hot Issues

1. **#12380 — proposal(serve): Define Managed Agent dual-path architecture and staged delivery**  
   [QwenLM/qwen-code#12380](https://github.com/QwenLM/qwen-code/issues/12380)  
   The highest-traffic issue today with 45 comments. It proposes keeping the TypeScript agent loop while separating model inference from tool-environment provisioning, plus durable Sessions, Workspace bindings, and recoverable tool executions. This is the architectural anchor for the managed-agent roadmap.

2. **#12028 — tracking(core): non-conversation context token governance**  
   [QwenLM/qwen-code#12028](https://github.com/QwenLM/qwen-code/issues/12028)  
   18 comments. Tracks the cost of system prompts, tool schemas, `QWEN.md`, and skill listings sent on every request. High relevance for long-context users because this block can dwarf conversation tokens.

3. **#12737 — feat(acp-bridge): Stage B host integration for paired Legacy and Managed engines**  
   [QwenLM/qwen-code#12737](https://github.com/QwenLM/qwen-code/issues/12737)  
   15 comments. Defines how Legacy and Managed execution paths coexist in `qwen serve`, with priority given to hosted managed slices over ordinary local managed execution.

4. **#12333 — feat(ci): the token work has no recall or task-success gate**  
   [QwenLM/qwen-code#12333](https://github.com/QwenLM/qwen-code/issues/12333)  
   9 comments, blocked. Part of #12028. It argues that token-saving changes need benchmark gates for tool recall and task success before large savings can be enabled responsibly.

5. **#13004 — perf(memory): add a bounded cooldown after no-op extraction**  
   [QwenLM/qwen-code#13004](https://github.com/QwenLM/qwen-code/issues/13004)  
   8 comments. Proposes cadence control so auto-memory extraction does not fork after every successful user turn when recent turns produced nothing durable.

6. **#12417 — tracking(cli): Follow up tool execution sandbox settings hardening**  
   [QwenLM/qwen-code#12417](https://github.com/QwenLM/qwen-code/issues/12417)  
   8 comments, closed. Follow-up to Linux bubblewrap confinement moving from the whole CLI to individual tool execution. Security/sandbox hardening remains an active concern.

7. **#13003 — perf(memory): skip the selector after a delivered unique strong recall hit**  
   [QwenLM/qwen-code#13003](https://github.com/QwenLM/qwen-code/issues/13003)  
   7 comments, on hold. Proposes a deterministic shortcut when structured-memory recall already returns exactly one strong, stable match, reducing selector latency.

8. **#10887 — [core] No early termination on repeated tool errors: sessions burn 5–14M tokens in dead-end loops**  
   [QwenLM/qwen-code#10887](https://github.com/QwenLM/qwen-code/issues/10887)  
   P1 bug, 7 comments. Production sessions on 0.20.1–0.21.0 can loop on repeated tool errors without termination. One of the clearest token-cost and reliability pain points.

9. **#13333 — fix(managed-agent): ≥8 concurrent Turns stall after the model answers (lock convoy)**  
   [QwenLM/qwen-code#13333](https://github.com/QwenLM/qwen-code/issues/13333)  
   P1 bug. Found via the new `--list-pagination` e2e mode. A store-path lock convoy stalls concurrent managed-agent Turns on modest hardware, directly affecting scalability.

10. **#13327 — fix(managed-agent): a coordinator-only crash wedges the in-flight Turn even though the Harness survived**  
    [QwenLM/qwen-code#13327](https://github.com/QwenLM/qwen-code/issues/13327)  
    P1 bug. Reproduced with `--spring-restart-midturn`. Shows a recovery gap where the Harness survives but the Turn remains stuck, important for durable session guarantees.

## Key PR Progress

1. **#12650 — fix(ci): fail yamllint and shellcheck lanes loudly on an empty git file list**  
   [QwenLM/qwen-code#12650](https://github.com/QwenLM/qwen-code/pull/12650)  
   Prevents lint lanes from passing when `git ls-files` returns empty. Important CI trust fix.

2. **#13301 — feat(managed-agent): persist Workspace session tool profiles**  
   [QwenLM/qwen-code#13301](https://github.com/QwenLM/qwen-code/pull/13301)  
   Persists `hosted-workspace-files/1` for Workspace Sessions created through public API or WebShell. First implementation step toward durable managed sessions.

3. **#13291 — feat(managed-agent): Make local Runtime tool outcomes durable (M5b)**  
   [QwenLM/qwen-code/pull/13291](https://github.com/QwenLM/qwen-code/pull/13291)  
   Design-first draft for durable local Runtime outcomes: intent and `await_runtime` checkpoint before dispatch, outcome committed after. Part of #12737.

4. **#13033 — feat(core): defer agent and goal declarations by default**  
   [QwenLM/qwen-code/pull/13033](https://github.com/QwenLM/qwen-code/pull/13033)  
   Makes `agent`, `list_agents`, `get_goal`, `update_goal`, and `propose_goal` discoverable on demand, reducing eager tool-schema overhead without user configuration.

5. **#12580 — feat(prompt): answer from conversation history before investigating**  
   [QwenLM/qwen-code/pull/12580](https://github.com/QwenLM/qwen-code/pull/12580)  
   Adds a context-first answering rule: reuse prior observations when they already answer a follow-up and remain current. Reduces unnecessary investigation loops.

6. **#11827 — fix(core): improve Responses recovery for computer-use sessions**  
   [QwenLM/qwen-code/pull/11827](https://github.com/QwenLM/qwen-code/pull/11827)  
   Recovers Responses sessions when a gateway wraps `invalid_encrypted_content` in `AllModelsFailed`, and treats `rate_limit_reached` as transient.

7. **#13246 — fix(cli): keep the /context estimate within the context window**  
   [QwenLM/qwen-code/pull/13246](https://github.com/QwenLM/qwen-code/pull/13246)  
   Uses category correction for registered tool schemas absent from the declared tool list, removing double counting from MCP and skills rows.

8. **#13331 — fix(cli): recognize markdown fences only on matching lines**  
   [QwenLM/qwen-code/pull/13331](https://github.com/QwenLM/qwen-code/pull/13331)  
   Fixes streaming Markdown splitter behavior so inline backtick/tilde markers remain prose. Directly addresses issue #13309.

9. **#13332 — fix(core): close Managed session correctness gaps from #12693 post-merge review**  
   [QwenLM/qwen-code/pull/13332](https://github.com/QwenLM/qwen-code/pull/13332)  
   Closes correctness findings from two post-merge review rounds on the durable Managed Session journal and failover.

10. **#13342 — fix(web-shell): managed session UI correctness from the #12692 R2 review**  
    [QwenLM/qwen-code/pull/13342](https://github.com/QwenLM/qwen-code/pull/13342)  
    Fixes ten R2 follow-ups, including stale-error banners and Turn-boundary settle state, improving Web Shell managed-session reliability.

## Feature Request Trends

- **Managed Agent / session management**: dual-path architecture, durable session ownership, Workspace bindings, recoverable tool executions, multi-agent coordination, daemon mode, ACP bridge integration, foreground Shell profiles, and queueing concurrent sessions on the same Workspace mount.
- **Context and token performance**: non-conversation context governance, recall/task-success benchmark gates, memory extraction cooldowns, deterministic recall shortcuts, context-window inheritance across model switches, and bounded read-only exploration.
- **Platform and UI distribution**: Web Shell keyboard shortcuts, Session Overview, Split View, markdown-rendered plan approval, Todo enforcement, Android Phase 2 regression coverage, and export UX.
- **CI/CD reliability**: CodeQL notifier coverage, empty lint-list detection, benchmark comparison gates, and flake reduction across managed-agent e2e lanes.
- **Security and trust**: tool-execution sandbox hardening, workspace-trust grants, and safer settings replacement.
- **Integrations**: Feishu inbound file attachment lifecycle, including orphan temp directories and text fallback behavior.

## Developer Pain Points

- **Token burn and cost opacity**: non-conversation context is paid on every request, and dead-end tool loops can burn 5–14M tokens. There is still no accepted recall/task-success gate for token-saving changes.
- **Managed-agent reliability under concurrency and recovery**: lock convoys at ≥8 concurrent Turns, coordinator-only crashes wedging Turns, opaque mixed-version takeover 503s, and terminal failures for second concurrent Workspace sessions.
- **CI trust and silent failures**: nightly CodeQL runs cancelled for many consecutive days, lint lanes passing on empty file lists, and flaky ACP/MySQL managed-agent lanes.
- **Review-process overhead**: many issues are deferred follow-ups from the repository’s ~5-review-round rule, creating a steady stream of post-merge correctness, test, and hygiene work.
- **UI correctness in Web Shell and streaming output**: inline fence markers misparsed as code blocks, composer tag root unmount issues, stale managed-session errors, and raw plan rendering.
- **Model/config registry edge cases**: dotted `qwen`/`glm`/`doubao` catalog keys not normalized, and `contextWindowSize` surviving model changes when the target registry entry declares none.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-10-04

Source: `github.com/Hmbown/DeepSeek-TUI`. Item links are shown as provided in the data (`Hmbown/Codewhale`).

## 1. Today's Highlights

No releases landed in the last 24h. Activity concentrated on 0.10.x stabilization: FEAT-027 command portability via PR #6832, broad 0.10.1 engine/TUI integration in PR #6815, and a high-impact MCP regression where enabled servers expose no tools in-session (#6828). EPIC-005 crate decomposition remains the most active issue with 31 comments, while several TUI polish fixes closed around grapheme wrapping, i18n, and pinned prompt headers.

## 2. Releases

None in the last 24h.

## 3. Hot Issues

> Only 6 issues were updated in the last 24h. All 6 are covered below; the requested 10-item target is not met by the available source data.

1. **#5316 [OPEN] EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)** — [link](https://github.com/Hmbown/Codewhale/issues/5316)  
   Author: `aboimpinto` | Updated: 2026-10-03 | Comments: 31 | 👍: 0  
   Why it matters: Tracks the major TUI crate decomposition effort. The latest FEAT-027 draft PR #6832 adopts shared command Shapes for `/permissions` and `/status`, with the submitted head rebased on upstream.  
   Community reaction: Highest-comment issue in the window, indicating active coordination; no upvotes.

2. **#6418 [CLOSED] [bug] Unable to restore the session** — [link](https://github.com/Hmbown/Codewhale/issues/6418)  
   Author: `luestr` | Updated: 2026-10-03 | Comments: 2 | 👍: 0  
   Why it matters: Session restore fails with a saved Runtime store ownership mismatch, which can block recovery of existing sessions.  
   Community reaction: Closed with limited discussion; low visible reaction but resolved.

3. **#6328 [OPEN] Schedule list UI for watches and heartbeat** — [link](https://github.com/Hmbown/Codewhale/issues/6328)  
   Author: `Hmbown` | Updated: 2026-10-03 | Comments: 0 | 👍: 0  
   Why it matters: Defines the list UI for agent schedules: named watches with intervals, heartbeat entries, and pause/resume. Creation flows are separate, and the issue is blocked on Core cron routes.  
   Community reaction: No comments yet; dependency-blocked.

4. **#6818 [OPEN] Add the complete Ratatui component explorer to the Codewhale website** — [link](https://github.com/Hmbown/Codewhale/issues/6818)  
   Author: `Hmbown` | Updated: 2026-10-03 | Comments: 0 | 👍: 0  
   Why it matters: Website onboarding and a sealed 204-entry export landed on `wave/0.10.1-next`, covering 11 learning/UI source files plus 212 generated catalogue/motion files.  
   Community reaction: No comments yet.

5. **#6828 [OPEN] [needs-triage] 0.10.0: enabled MCP servers expose no tools in-session (tool_search empty); mcp connect cannot attach to a live session** — [link](https://github.com/Hmbown/Codewhale/issues/6828)  
   Author: `GustavoAriel23` | Updated: 2026-10-03 | Comments: 0 | 👍: 0  
   Why it matters: With three enabled MCP servers, neither a fresh TUI session nor `codewhale exec` exposes any `mcp_*` tool. `tool_search` returns none, breaking discovery/invocation and the documented lazy trigger.  
   Community reaction: Needs triage; no comments yet.

6. **#6827 [OPEN] [bug, needs-triage] Windows (npm install): killing node.exe instantly terminates Codewhale with no cleanup; the agent's own “stop node” commands can kill the session** — [link](https://github.com/Hmbown/Codewhale/issues/6827)  
   Author: `jayanthvee` | Updated: 2026-10-02 | Comments: 0 | 👍: 0  
   Why it matters: On Windows npm installs, `codewhale` runs as `node.exe` → `codewhale.exe`; killing `node.exe` terminates the app with no cleanup, and the agent’s own stop commands can kill the session.  
   Community reaction: Needs triage; no comments yet.

## 4. Key PR Progress

> 8 PRs were updated in the last 24h. All 8 are covered below; the requested 10-item target is not met by the available source data.

1. **#6832 [OPEN] refactor(commands): adopt portable config policy and status shapes (FEAT-027)** — [link](https://github.com/Hmbown/Codewhale/pull/6832)  
   Author: `aboimpinto`  
   Makes `/permissions` and `/status` independently portable through shared command Shapes while preserving public behavior. Continues command adoption after merged #6793.

2. **#6815 [OPEN] 0.10.1 integration: Engine convergence, reviewed TypeScript mods and Ratatui UX** — [link](https://github.com/Hmbown/Codewhale/pull/6815)  
   Author: `Hmbown`  
   Broad 0.10.1 integration: one Rust Engine for execution, provider identity, permissions, events, sessions, storage, and accounting. ACP, child agents, and recursive RLM share the turn path; TypeScript mods reuse captured authority, cancellation, checkpoints, parent delivery, and usage settlement.

3. **#6820 [CLOSED] [contribution-gate] fix(tui): apply per-call execution policy to Python and JavaScript tools** — [link](https://github.com/Hmbown/Codewhale/pull/6820)  
   Author: `Guan0923`  
   Routes `code_execution` and `js_execution` interpreter processes through the existing permission-aware launcher instead of passing only tool input and workspace path.

4. **#6806 [CLOSED] [dependencies, javascript, bot-authored] build(deps): bump the npm_and_yarn group across 2 directories with 1 update** — [link](https://github.com/Hmbown/Codewhale/pull/6806)  
   Author: `dependabot[bot]`  
   Bumps `axios` from 1.18.1 to 1.20.0 in `/integrations/feishu-bridge` and `/integrations/wecom-bridge`.

5. **#6831 [CLOSED] [contribution-gate] fix(tui): translate the context inspector rows twelve packs ship in English** — [link](https://github.com/Hmbown/Codewhale/pull/6831)  
   Author: `Lstarsky0`  
   Fixes 12 of 14 translated packs that still showed English context inspector rows, including `CtxInspRowCompaction`, `CtxInspRowAnchors`, related lines, and Ctrl+ labels.

6. **#6829 [CLOSED] [contribution-gate] fix(tui): wrap diff and tool output at grapheme boundaries** — [link](https://github.com/Hmbown/Codewhale/pull/6829)  
   Author: `Lstarsky0`  
   Moves remaining diff/tool-output wrap paths from per-char wrapping to grapheme clusters so keycaps, ZWJ emoji, and combining sequences align with Ratatui’s cell accounting.

7. **#6819 [CLOSED] [contribution-gate] fix(cli): 修复配置诊断对 HTTP(S) 协议大小写的误判** — [link](https://github.com/Hmbown/Codewhale/pull/6819)  
   Author: `Guan0923`  
   Makes `config doctor` HTTP(S) scheme detection case-insensitive, fixing false “non-HTTP(S)” reports and exit code 1 for uppercase or mixed-case `base_url` values.

8. **#6830 [CLOSED] feat(tui): follow the viewport with the pinned prompt header and jump on click** — [link](https://github.com/Hmbown/Codewhale/pull/6830)  
   Author: `SparkofSpike`  
   The pinned user-prompt header now tracks the turn the viewport starts on, not only the newest message; clicking it returns the viewport to the named message.

## 5. Feature Request Trends

- **Modularity and portable command architecture** — EPIC-005 crate decomposition and FEAT-027 shared command Shapes for `/permissions` and `/status`: [#5316](https://github.com/Hmbown/Codewhale/issues/5316), [#6832](https://github.com/Hmbown/Codewhale/pull/6832).
- **Scheduling and automation UI** — named watches with intervals, heartbeat entries, pause/resume; currently blocked on Core cron routes: [#6328](https://github.com/Hmbown/Codewhale/issues/6328).
- **Documentation and onboarding** — complete Ratatui component explorer on the Codewhale website, with generated catalogue/motion assets: [#6818](https://github.com/Hmbown/Codewhale/issues/6818).
- **MCP tool reliability and discoverability** — enabled MCP servers should expose `mcp_*` tools in-session, `tool_search` should discover them, and `mcp connect` should attach to a live session: [#6828](https://github.com/Hmbown/Codewhale/issues/6828).
- **Session persistence robustness** — reliable restore across saved Runtime store ownership changes: [#6418](https://github.com/Hmbown/Codewhale/issues/6418).
- **Windows process lifecycle safety** — npm launcher cleanup and preventing the agent from killing its own session: [#6827](https://github.com/Hmbown/Codewhale/issues/6827).
- **TUI UX, localization, and rendering polish** — pinned prompt header viewport tracking/click-to-jump, complete i18n, and grapheme-correct wrapping: [#6830](https://github.com/Hmbown/Codewhale/pull/6830), [#6831](https://github.com/Hmbown/Codewhale/pull/6831), [#6829](https://github.com/Hmbown/Codewhale/pull/6829).
- **Execution policy coverage** — per-call execution policy for Python and JavaScript tools: [#6820](https://github.com/Hmbown/Codewhale/pull/6820).

## 6. Developer Pain Points

- **MCP tools missing in-session** — enabled servers expose no `mcp_*` tools, `tool_search` is empty, and `mcp connect` cannot attach to a live session: [#6828](https://github.com/Hmbown/Codewhale/issues/6828).
- **Windows npm/node.exe lifecycle** — killing `node.exe` terminates Codewhale with no cleanup, and agent “stop node” commands can kill the session: [#6827](https://github.com/Hmbown/Codewhale/issues/6827).
- **Session restore failures** — saved Runtime store ownership mismatches prevent normal session recovery: [#6418](https://github.com/Hmbown/Codewhale/issues/6418).
- **Localization gaps** — 12 of 14 translated packs still shipped English context inspector rows and Ctrl+ labels: [#6831](https://github.com/Hmbown/Codewhale/pull/6831).
- **Terminal rendering edge cases** — remaining char-based wrapping breaks keycaps, ZWJ emoji, and combining sequences against Ratatui cell accounting: [#6829](https://github.com/Hmbown/Codewhale/pull/6829).
- **Configuration diagnostics case sensitivity** — uppercase/mixed-case HTTP(S) `base_url` values were falsely rejected by `config doctor`: [#6819](https://github.com/Hmbown/Codewhale/pull/6819).
- **Execution policy bypass for interpreters** — Python and JavaScript tool runners previously bypassed the permission-aware launcher: [#6820](https://github.com/Hmbown/Codewhale/pull/6820).
- **Blocked scheduling work** — schedule list UI depends on Core cron routes: [#6328](https://github.com/Hmbown/Codewhale/issues/6328).
- **Coordination overhead on decomposition** — EPIC-005 remains a high-comment umbrella, suggesting ongoing architectural coordination cost: [#5316](https://github.com/Hmbown/Codewhale/issues/5316).
- **Release cadence gap** — no new releases in the window while users wait on 0.10.1 integration and 0.10.0 MCP regression fixes: [#6815](https://github.com/Hmbown/Codewhale/pull/6815), [#6828](https://github.com/Hmbown/Codewhale/issues/6828).

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

# ComfyUI Community Digest — 2026-10-04

## Today's Highlights
No new releases landed in the last 24 hours, but the project remains highly active with 14 issues and 35 PRs updated. Critical community attention is focused on VRAM/RAM regressions, AMD INT8 attention failures, and checkpoint backward bugs. Asset‑scanning PRs also aim to eliminate database locks and server freezes.

## Releases
None.

## Hot Issues

1. **#16246 – BSOD in dxgmms2.sys on 6 GB RTX 3050 since v0.35.0**  
   Windows kernel crashes linked to dynamic VRAM loading (`comfy-aimdo` 0.5.3). 11 comments, 3 👍 — high severity for low‑VRAM users.  
   [Comfy-Org/ComfyUI Issue #16246](https://github.com/Comfy-Org/ComfyUI/issues/16246)

2. **#16705 – Insane VRAM and RAM usage**  
   Users report extreme memory consumption on latest versions. 9 comments, no 👍 yet — widespread concern.  
   [Comfy-Org/ComfyUI Issue #16705](https://github.com/Comfy-Org/ComfyUI/issues/16705)

3. **#16731 – Silent image corruption with LoRA on warm server (INT8 convrot)**  
   AMD gfx1151, stock nodes only — outputs corrupted without error. 1 comment — correctness bug with high impact.  
   [Comfy-Org/ComfyUI Issue #16731](https://github.com/Comfy-Org/ComfyUI/issues/16731)

4. **#16711 – INT8 attention returns pure noise on AMD gfx1100**  
   Occurs when text conditioning exceeds ~150 tokens (Qwen‑Image 2.1). 3 comments — AMD‑specific regression.  
   [Comfy-Org/ComfyUI Issue #16711](https://github.com/Comfy-Org/ComfyUI/issues/16711)

5. **#16415 – Feature: opt‑out for auto‑enabled fast‑disk policy**  
   High‑RAM machines stream weights from NVMe every step since commit 7a0b5ee. 6 comments, 1 👍 — performance regression.  
   [Comfy-Org/ComfyUI Issue #16415](https://github.com/Comfy-Org/ComfyUI/issues/16415)

6. **#14981 – Empty Load Image node triggers ERROR**  
   Simple workflow fails instead of handling empty input. 11 comments, 1 👍 — common usability bug.  
   [Comfy-Org/ComfyUI Issue #14981](https://github.com/Comfy-Org/ComfyUI/issues/14981)

7. **#16753 – `CheckpointFunction.backward()` raises on frozen parameter**  
   Checkpointed blocks with frozen params break backward pass. 0 comments — new, but blocks training workflows.  
   [Comfy-Org/ComfyUI Issue #16753](https://github.com/Comfy-Org/ComfyUI/issues/16753)

8. **#16754 – `CheckpointFunction` re‑enters CUDA autocast on recompute**  
   Wrong numerics on non‑CUDA accelerators. 0 comments — related to #16753, affects AMD/CPU.  
   [Comfy-Org/ComfyUI Issue #16754](https://github.com/Comfy-Org/ComfyUI/issues/16754)

9. **#16685 – `--auto-launch` opens `0.0.0.0` on Linux**  
   Browser gets unusable URL; Windows correctly uses `127.0.0.1`. 0 comments — cross‑platform inconsistency.  
   [Comfy-Org/ComfyUI Issue #16685](https://github.com/Comfy-Org/ComfyUI/issues/16685)

10. **#15946 – Stuck on loading screen (stale)**  
    16 comments, long‑running user support issue. Highlights persistent startup problems.  
    [Comfy-Org/ComfyUI Issue #15946](https://github.com/Comfy-Org/ComfyUI/issues/15946)

## Key PR Progress

1. **#16757 – Fix checkpoint backward with frozen parameters**  
   Excludes frozen params from `torch.autograd.grad()` and returns `None` in their slots. Fixes #16753.  
   [Comfy-Org/ComfyUI PR #16757](https://github.com/Comfy-Org/ComfyUI/pull/16757)

2. **#16756 – Support both 4D and 5D latent composite**  
   Allows Latent Composite / Mask nodes to handle 5D tensors from Qwen‑style models.  
   [Comfy-Org/ComfyUI PR #16756](https://github.com/Comfy-Org/ComfyUI/pull/16756)

3. **#16752 – Fix SeedVR2 tiled VAE crash on in‑place tile blend**  
   Resolves autograd “view is being modified inplace” error when multiple tiles need blending.  
   [Comfy-Org/ComfyUI PR #16752](https://github.com/Comfy-Org/ComfyUI/pull/16752)

4. **#16751 – Support Qwen 2.5‑VL TextGenerate**  
   Completes generation path: stop tokens, output head, image inputs, MRoPE positions.  
   [Comfy-Org/ComfyUI PR #16751](https://github.com/Comfy-Org/ComfyUI/pull/16751)

5. **#16750 – Fix MiniMax H3 audio conditioning with guide/reference audio**  
   Builds conditional audio rows directly from keyframes and references, preventing latent loss.  
   [Comfy-Org/ComfyUI PR #16750](https://github.com/Comfy-Org/ComfyUI/pull/16750)

6. **#16748 – Write scan inserts in short transactions**  
   Prevents `database is locked` errors and server freezes during asset scans.  
   [Comfy-Org/ComfyUI PR #16748](https://github.com/Comfy-Org/ComfyUI/pull/16748)

7. **#16735 – Fix HiDream‑O1 ref‑edit position ids shape mismatch**  
   Fixes crash on first sampling step for reference‑image editing.  
   [Comfy-Org/ComfyUI PR #16735](https://github.com/Comfy-Org/ComfyUI/pull/16735)

8. **#16734 – Fix zero division on thin ref images in HiDream‑O1 resize**  
   Handles extreme‑aspect reference images without ZeroDivisionError.  
   [Comfy-Org/ComfyUI PR #16734](https://github.com/Comfy-Org/ComfyUI/pull/16734)

9. **#16758 – Preserve mask assignments when repeating batches**  
   Fixes mask order corruption when repeating latent batches.  
   [Comfy-Org/ComfyUI PR #16758](https://github.com/Comfy-Org/ComfyUI/pull/16758)

10. **#15020 – Add native Hunyuan3D 2.1 PBR paint**  
    Torch‑native multiview PBR UNet, renderer/baker, sampler/scheduler nodes, textured GLB export.  
    [Comfy-Org/ComfyUI PR #15020](https://github.com/Comfy-Org/ComfyUI/pull/15020)

## Feature Request Trends

- **Memory & VRAM control**: Users want opt‑outs for auto‑enabled fast‑disk policies and better VRAM/RAM management.
- **Customization**: Requests for custom browser launch paths and configurable auto‑launch behavior.
- **AMD/ROCm parity**: Growing demand for stable INT8 attention and dynamic VRAM on AMD GPUs.
- **Cross‑platform consistency**: Linux and Windows should behave identically for CLI flags.
- **Training & checkpointing**: Support for frozen parameters and correct autocast in checkpointed models.
- **Service reliability**: API endpoints like `api.comfy.org` should avoid 503s.

## Developer Pain Points

- **High VRAM/RAM usage** leading to BSODs and system instability, especially on low‑VRAM cards.
- **AMD‑specific bugs** (INT8 attention noise, silent corruption) erode trust on ROCm/gfx hardware.
- **Asset scanning DB locks** cause uploads and output saves to fail or freeze the server.
- **Checkpoint/autograd issues** with frozen parameters and autocast break training workflows.
- **Cross‑platform inconsistencies** (`--auto-launch` URL) create confusing user experiences.
- **Long‑standing stale issues** (e.g., stuck loading screen) remain unresolved, frustrating users.
- **Silent failures** (corruption, missing errors) make debugging difficult for developers.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Community Digest — 2026-10-04

## 1. Today's Highlights
No new releases landed in the last 24 hours, but activity was heavy: 12 issues and 28 PRs were updated. The dominant themes are the emerging **decision-model / `/v1/systemone`** surface (clef and basal model support, MLX backend work), **Apple Silicon MLX performance and memory** regressions, and **structured-output correctness** (JSON schema enforcement and property ordering). A Windows-specific `clef` crash and an Authenticode signature failure on the v0.35.1 installer also drew maintainer and community attention.

## 2. Releases
No new releases in the last 24 hours. The most recent user-reported reference point in the data is **v0.35.1**, which appears in several bug reports (Windows installer signature, `/api/generate` validation, MLX performance comparison against 0.35.1-rc2 and 0.40.0).

## 3. Hot Issues

1. **[#11798 — Feature Request: Add Audio Input Support for Multimodal Models](https://github.com/ollama/ollama/issues/11798)** — OPEN, 16 comments, 👍 40. The most-upvoted issue in this window. Requests audio input parity with existing image support, citing Qwen2-Audio. The `Images []Image` pattern is the proposed model, making this a well-scoped extension rather than a redesign.

2. **[#18769 — `clef-flash` always fails on `/v1/systemone` ("Clef: non-finite logit" / "cannot open model")](https://github.com/ollama/ollama/issues/18769)** — OPEN, 5 comments. Decision model `clef-flash` (Q8_0, 9.1B) fails on first forward pass while the same model works on `/v1/chat/completions` and `clef:27b` works on `/v1/systemone`. A paired PR (#18777) already identifies this as a Windows 2GiB read overflow, so expect a quick fix.

3. **[#18766 — `think: "low"/"medium"/"high"` ignored for Qwen3.8 GGUF with `reasoning_effort` template](https://github.com/ollama/ollama/issues/18766)** — OPEN, 3 comments. The chat template supports graded reasoning effort, but the API treats all non-`false` values as `true`, effectively pinning the model at `xhigh`. This is a silent correctness/behavior bug with real cost implications.

4. **[#17050 — Qwen3.5:35b-mlx slower than Qwen3.5:35b; Qwen3.6:35b-mlx unrunnable](https://github.com/ollama/ollama/issues/17050)** — CLOSED, 3 comments. Long-running macOS/MLX report on a 24GB M3 Air. Now closed, but it anchors the broader MLX parity discussion.

5. **[#18754 — MLX runner not using full GPU (Mac / M4 Pro)](https://github.com/ollama/ollama/issues/18754)** — OPEN, 3 comments. Compares 0.40.0 vs 0.35.1-rc2 on Qwen 3.8 `mxfp8` with M4 Pro 48GB. Suggests an MLX backend utilization regression across versions.

6. **[#18775 — `/api/generate` accepts trailing non-JSON data after a valid JSON body](https://github.com/ollama/ollama/issues/18775)** — OPEN, 1 comment. Input-validation gap on 0.35.1: a complete JSON object followed by garbage is accepted. Minor security/robustness concern, and already has a fix in flight.

7. **[#18770 — 0.35.1 / 0.34.4 cannot run `mistral-medium-3.5:128b` correctly](https://github.com/ollama/ollama/issues/18770)** — OPEN, 1 comment. 128GB M4 reports 127GB RAM and >100GB wired memory for an 80GB model, then ~1 word/minute throughput. Points at memory accounting / offload behavior on high-RAM Apple Silicon.

8. **[#18717 — JSON schema property order lost on native llama-server chat path (regression of #7978)](https://github.com/ollama/ollama/issues/18717)** — OPEN, 1 comment. `response_format` schemas are constrained to alphabetical key order, breaking step-dependent schemas. A regression against previously fixed behavior, which raises the priority.

9. **[#18774 — Gemma4: JSON schema format not enforced when `think:true` answers directly](https://github.com/ollama/ollama/issues/18774)** — OPEN, 0 comments. Reproduces on both `/api/chat` and `/api/generate`; the model bypasses the `format` constraint when it skips the reasoning channel. Newly filed, likely to gain traction given the structured-output cluster.

10. **[#18765 — Windows installer fails Authenticode with HashMismatch (v0.35.1)](https://github.com/ollama/ollama/issues/18765)** — OPEN, 0 comments. Both the `ollama.com` endpoint and the GitHub release asset fail signature verification, while an earlier version verifies as a control. Release-integrity issues tend to escalate quickly.

*Also worth tracking:* [#18760 — basal-1.0 encoding and per-type temperatures for `/v1/systemone`](https://github.com/ollama/ollama/issues/18760) and [#18772 — device index incremented for filtered pseudo-devices](https://github.com/ollama/ollama/issues/18772), both with fixes already proposed.

## 4. Key PR Progress

1. **[#18778 — Reject trailing garbage after JSON in `/api/generate`](https://github.com/ollama/ollama/pull/18778)** — OPEN. Decodes a single JSON object and returns HTTP 400 on trailing non-whitespace bytes; adds handler tests. Directly fixes #18775.

2. **[#18777 — llama: fix clef head reads past 2GiB on Windows](https://github.com/ollama/ollama/pull/18777)** — OPEN. Root-causes #18769: `llama/clef/clef.cpp` reads head weights in a way that overflows on Windows across CUDA, ROCm, Vulkan, and CPU. Explains why Linux/macOS are unaffected.

3. **[#18776 — mlx: Decision model improvements](https://github.com/ollama/ollama/pull/18776)** — OPEN. Rejects overflow requests instead of silently truncating, and tunes route flow for warm-latency gains (~5 ms on M5). Author: dhiltgen.

4. **[#18701 — mlx: System one support](https://github.com/ollama/ollama/pull/18701)** — CLOSED. Adds MLX support for SystemOne models plus test coverage. The foundation for the decision-model work above.

5. **[#18755 — mlx: separate decision preparation/readout from forward; implement Strands Decider](https://github.com/ollama/ollama/pull/18755)** — CLOSED. Lets serial and batched scoring share model-owned preparation and readout, avoiding duplicated architecture-specific logic in the runner.

6. **[#18773 — discover: keep GPU indexes aligned when skipping pseudo-devices](https://github.com/ollama/ollama/pull/18773)** — OPEN. Fixes #18772: skipping zero-memory BLAS/Accelerate entries no longer consumes a GPU ordinal, preventing misattributed CUDA compute-capability and PCI metadata.

7. **[#18761 — llama.cpp: version update](https://github.com/ollama/ollama/pull/18761)** — OPEN. Bumps `b11232...b11351`, the routine upstream sync that underpins most backend behavior changes.

8. **[#15876 — server: cancel pull on client disconnect](https://github.com/ollama/ollama/pull/15876)** — CLOSED. Makes `/api/pull` progress sends respect request context and cancels pulls on disconnect; also checks cancellation before verify/write/prune. Fixes a wedged-goroutine class of bug (#13142).

9. **[#18722 — openai: keep tool message content parts in one message](https://github.com/ollama/ollama/pull/18722)** — OPEN. Stops `FromChatRequest` from splitting tool result arrays into separate `api.Message` entries, which was dropping `tool_call_id` and tool name.

10. **[#18281 — llm: send assistant thinking to the chat template](https://github.com/ollama/ollama/pull/18281)** — OPEN. `Thinking` is parsed from the API but omitted from the outbound `llamaServerChatMessage` field list, so it never reaches the template. A quiet correctness fix for multi-turn reasoning.

*Additional PRs in flight:* [#18768 structured System One criteria](https://github.com/ollama/ollama/pull/18768), [#18767 match tool result groups by call ID](https://github.com/ollama/ollama/pull/18767), [#18771 encode colons in host for manifest paths](https://github.com/ollama/ollama/pull/18771), [#18189 Windows installation troubleshooting docs](https://github.com/ollama/ollama/pull/18189), [#18289 reload on differing runner flags](https://github.com/ollama/ollama/pull/18289), [#17564/#17565 tool-call truncation and missing-brace recovery](https://github.com/ollama/ollama/pull/17564).

## 5. Feature Request Trends

- **Multimodal expansion beyond images** — Audio input (#11798, 👍 40) is the clear top request, framed as extending the existing `Images []Image` mechanism to audio for models like Qwen2-Audio.
- **Decision models as a first-class surface** — `/v1/systemone` support for clef and basal model families (#18760, #18768, #18769), including per-type temperatures, structured criteria, and model-specific prompt encodings.
- **Fine-grained reasoning control** — Explicit `think: "low" | "medium" | "high"` levels mapped through to `reasoning_effort` in chat templates (#18766), rather than a binary toggle.
- **Guaranteed structured output** — Enforcing JSON schemas across all code paths, including thinking-enabled responses (#18774), and preserving declared property order (#18717).
- **Apple Silicon / MLX parity** — Consistent performance and full GPU utilization versus the llama.cpp path (#18754, #17050).

## 6. Developer Pain Points

- **MLX performance and memory regressions on Apple Silicon.** Reports span slower-than-expected `-mlx` variants, unrunnable models, incomplete GPU utilization, and severe memory over-allocation (127GB RAM / >100GB wired for an 80GB model). Cross-version comparisons suggest regressions rather than misconfiguration.
- **Structured output is not reliably enforced.** Property order is lost on the native llama-server path (a regression of #7978), and schemas are bypassed entirely when `think:true` produces a direct answer. Both break downstream parsers that depend on key order or schema conformance.
- **Reasoning controls silently no-op.** Graded `think` levels behave as `think: true` on templates that support `reasoning_effort`, so users cannot actually control cost or latency.
- **Platform-specific fragility, especially Windows.** A clef read overflow past 2GiB affects all backends on Windows, the v0.35.1 installer fails Authenticode verification, and registry hosts with colons break manifest paths.
- **API validation gaps.** `/api/generate` accepting trailing non-JSON bytes signals lenient parsing; related tool-call parsing issues (#18624, #17564, #17565) show the message/parser layer is brittle at chunk boundaries and on truncated output.
- **Long-standing pull and transfer reliability.** The `x/transfer` disk-full propagation work (#18648) and the client-disconnect pull fix (#15876) reflect recurring friction in model download and storage paths.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>



# llama.cpp Community Digest — 2026-10-04

A curated technical summary of the latest developments, issues, and pull requests in the `ggml-org/llama.cpp` ecosystem over the last 24 hours.

---

### 1. Today's Highlights
The project has released a series of rapid bug-fix releases (`b11371` through `b11381`) focusing on critical stability improvements, including server abort fixes for Laya models, memory optimization for the Qwen4Exp architecture, and parser enhancements for Ling 3.0. On the development front, major optimization PRs are merging, notably a GPU cache for host-resident MoE experts and the addition of sparse flash attention support for quantized KV caches on Vulkan.

---

### 2. Releases
The following releases were published in the last 24 hours, bringing critical fixes and performance enhancements:

*   **b11381**: Fixes a deprecated `strdup` warning on Windows within the MTMD module ([#29863](https://github.com/ggml-org/llama.cpp/pull/29863)).
*   **b11380**: Updates the vendored `cpp-httplib` to version 0.59.0 ([#29886](https://github.com/ggml-org/llama.cpp/pull/29886)).
*   **b11379**: Fixes a critical server abort issue for Laya models by limiting `n_batch` to `n_ubatch` ([#29903](https://github.com/ggml-org/llama.cpp/pull/29903)).
*   **b11378**: Introduces a `common_is_tty()` helper and resolves deprecated warnings on Windows ([#29860](https://github.com/ggml-org/llama.cpp/pull/29860)).
*   **b11377**: Enforces `json_schema` constraints in the Ling 3.0 parser, ensuring constrained response formats are strictly honored ([#29813](https://github.com/ggml-org/llama.cpp/pull/29813)).
*   **b11376**: Resolves CI flakiness in `ADD_ADD f16` tests by utilizing a fused ADD tolerance ([#29904](https://github.com/ggml-org/llama.cpp/pull/29904)).
*   **b11375**: Optimizes graph memory by gathering recurrent states once, ensuring proper reserve coverage across splits ([#29856](https://github.com/ggml-org/llama.cpp/pull/29856)).
*   **b11374**: Updates the OpenVINO backend to 2026.4.1, adding performance optimizations, expanded ops, and better device listing ([#29852](https://github.com/ggml-org/llama.cpp/pull/29852)).
*   **b11372**: Halves the memory footprint of the `qwen4exp` indexer score, reducing peak VRAM usage at long context lengths ([#29825](https://github.com/ggml-org/llama.cpp/pull/29825)).
*   **b11371**: Adds initial support for the text-only `clef` decision model ([#29831](https://github.com/ggml-org/llama.cpp/pull/29831)).

---

### 3. Hot Issues
The following 10 issues represent the most active or impactful discussions and bug reports from the community:

1.  **[#25618] Speculative Decoding Divergence on Quantized Targets (29 comments, 3 👍)**
    *   *Why it matters:* Under greedy sampling, draft-model speculative decoding (MTP/draft-dspark) can produce completely different outputs compared to vanilla decoding when the target model is quantized (e.g., Q4_K_M), while matching perfectly on bf16 targets. This is a critical correctness issue for production deployments utilizing speculative decoding with quantized models.
2.  **[#25207] Massive Performance Drop with Vulkan Flash Attention (20 comments, 2 👍)**
    *   *Why it matters:* Users report severe performance cliffs on AMD Strix Halo systems using Vulkan Flash Attention, highlighting backend-specific regressions that heavily impact edge and consumer GPU acceleration.
3.  **[#29811] Startup Assert with Qwen 3.8 Flash and MTP (16 comments)**
    *   *Why it matters:* A critical blocker preventing users from running the popular Qwen 3.8 Flash model with Multi-Token Prediction (MTP) draft models, causing immediate server crashes on startup.
4.  **[#8795] Feature Request: Support Zyphra/Zamba2-2.7B (6 comments, 20 👍)**
    *   *Why it matters:* Highly requested hybrid state-space/transformer model support. The community heavily upvoted this, seeking the double speed and memory efficiency Zamba2 offers over standard Phi2-class models.
5.  **[#28734] Qwen4exp CUDA Decode Slows Linearly with Context (8 comments)**
    *   *Why it matters:* A severe performance regression where decode speeds degrade linearly as context expands on CUDA, hindering long-context generation for the Qwen4Exp architecture.
6.  **[#29655] Unstable Tool Calling for Gemma 4 during Multi-line Streaming (7 comments)**
    *   *Why it matters:* Crucial for AI agent frameworks. Streaming partial JSON parses for multi-line tool calls in Gemma 4 models frequently fails, breaking tool-use integrations.
7.  **[#29867] GLM-5.3-Flash Decode Stalls on Metal (4 comments)**
    *   *Why it matters:* Highlights hardware-specific backend issues where the fused Lightning Indexer falls back to CPU on Apple Silicon, stalling decode entirely on Metal.
8.  **[#26484] Arm CPU Decode Bandwidth Bottleneck on Pi 5 (10 comments)**
    *   *Why it matters:* Detailed profiling showing decode bandwidth on Raspberry Pi 5 remains stuck near 10 GB/s across

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*