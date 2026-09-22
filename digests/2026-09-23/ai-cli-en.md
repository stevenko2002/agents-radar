# AI CLI Tools Community Digest 2026-09-23

> Generated: 2026-09-22 22:15 UTC | Tools covered: 12

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



### Today's Highlights: Key Updates (2026-09-23)

*   **Claude Code v2.1.280**: Ships Claude Opus 5.5 as the new default Opus model with a 1M context window ($4/$20 per Mtok, $0.20 cache reads) and adds fullscreen mouse support for the `/skills` and `/plugin` lists. ([Link](https://github.com/anthropics/claude-code/releases/tag/v2.1.280))
*   **OpenAI Codex v0.156.0**: Introduces an optional fullscreen TUI (`/tui`) with transcript search and mouse support, alongside voice conversations enabled by default with an F8 toggle and bundled audio support. ([Link](https://github.com/openai/codex/releases/tag/v0.156.0))
*   **GitHub Copilot CLI v1.0.89-0**: Adds support for `claude-opus-5.5` and improves managed Connector consent progress by displaying a copyable authorization URL during connect/reconnect flows. ([Link](https://github.com/github/copilot-cli/releases/tag/v1.0.89-0))
*   **OpenCode v1.18.32**: Resolves critical bugs including Bedrock image attachment hoisting (restricted to Claude, Nova, and Llama 4 models) and Together AI streaming usage reporting, while expanding Zen with DeepSeek V4.1 Flash and Grok 4.7. ([Link](https://github.com/anomalyco/opencode/releases/tag/v1.18.32))
*   **Ollama (PR #17154 merged)**: Raises and exposes the Gemma 4 image token budget (`max_soft_tokens`), fixing OCR rendering issues on high-resolution images on macOS GUI and MLX setups. ([Link](https://github.com/ollama/ollama/pull/17154))
*   **Ollama (PR #18578 opened)**: Adds official `ollama export` and `ollama import` CLI commands and API endpoints to support offline, content-addressed model transfers. ([Link](https://github.com/ollama/ollama/pull/18578))
*   **Qwen Code v0.24.4 & v0.24.5-preview.0**: Delivers fixes for deferred-tool bridge staleness, adds the `monitor` tool to system-prompt guidance, and resolves review coverage denominator issues. ([Link](https://github.com/QwenLM/qwen-code/releases))
*   **llama.cpp (b11104 - b11115)**: Focuses on server stability with a critical fix for server router eviction races, adds OpenCL binary kernels for quantized models, and implements Vulkan Intel Xe flash attention. ([Link](https://github.com/ggerganov/llama.cpp/releases))

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills Community Highlights
*anthropics/skills · data as of 2026-09-23*

> **Data note:** PR comment/reaction counts in the source dataset were reported as `undefined`/`0`, so the PR ranking below reflects the repository's provided watch-order rather than verified comment tallies. Issue comment counts are populated and used for trend analysis.

---

## 1. Top Skills Ranking (by watch/activity)

**#1298 — `fix(skill-creator): isolate trigger evals and handle Windows and runtime failures`** — MartinCajiao
An infrastructure-level fix to the skill-creator's trigger evaluation. It addresses three distinct failure modes: per-worker command probes competing against each other, `select()` on subprocess pipes failing on Windows, and unrelated tools aborting the scan. Runtime failures were also being misclassified as non-triggers, corrupting negative-example data and misleading description optimization. Status: **OPEN** · [link](https://github.com/anthropics/skills/pull/1298)

**#1771 — `feat(skills): add proofcore-contract-auditor`** — ProofCore-Protocol
A Web3-oriented skill that performs automated static analysis of Solidity and Rust smart contracts, then anchors cryptographic audit proofs onto the public TON Blockchain via ProofCore's zero-storage Merkle protocol. Represents the repo's first dedicated smart-contract-auditing skill. Status: **OPEN** · [link](https://github.com/anthropics/skills/pull/1771)

**#1742 — `fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers`** — Kuldeeep18
Fixes #1668. In `mcp>=2.0.0`, `streamablehttp_client` was renamed to `streamable_http_client`, and custom HTTP headers moved to `create_mcp_http_client`/`http_client` rather than a direct kwarg. The mcp-builder connection scripts need updating to stay compatible. Status: **OPEN** · [link](https://github.com/anthropics/skills/pull/1742)

**#1703 — `Add md2video-audio skill`** — 70v-Yoyo
A zero-cost pipeline that compiles Markdown documents into professional-grade MP4 videos with realistic human-like voiceovers, routing through Marp for slide generation. Targets content creators who want video output from Markdown sources. Status: **OPEN** · [link](https://github.com/anthropics/skills/pull/1703)

**#1734 — `Detect orphaned docx comments`** — rohitjain25
Adds detection for orphaned comments in DOCX documents, complementing the existing document-typography and docx tooling. Status: **OPEN** · [link](https://github.com/anthropics/skills/pull/1734)

**#525 — `Add pyxel skill for retro game development`** — kitao
Guides implementation, headless input-driven runs, direct frame inspection, and task-specific state checks for retro games built with the Pyxel Python framework. One of the longest-lived open PRs (created 2026-03-05, still active into September). Status: **OPEN** · [link](https://github.com/anthropics/skills/pull/525)

**#514 — `Add document-typography skill`** — PGTBoos
Targets typographic defects in AI-generated documents: orphan word wrap (1–6 words spilling to the next line), widow paragraphs (headers stranded at page bottom), and numbering misalignment. A quality-control skill for document generation broadly. Status: **OPEN** · [link](https://github.com/anthropics/skills/pull/514)

**#1615 — `Add scnet-hpc skill`** — lql341
Operates SCNet HPC clusters through profile-based SSH and Slurm workflows: profile-specific connection/partition/memory/accelerator guidance, SSH setup, Slurm job generation, cluster discovery, and profile refresh. Status: **OPEN** · [link](https://github.com/anthropics/skills/pull/1615)

---

## 2. Community Demand Trends (from Issues)

**🔴 Security & trust boundary (#492, 43 comments, 👍 2)** — The dominant issue. Community-made skills are being distributed under the `anthropic/` namespace, impersonating official Anthropic skills and creating a trust-boundary vulnerability where users grant elevated permissions believing they're using official tooling. Highest-engagement issue by a wide margin.

**🌐 Skill distribution & sharing (#228, 16 comments, 👍 8; #189, 6 comments, 👍 9)** — Strong demand for org-wide skill sharing in Claude.ai (currently requires manual .skill file shuffling via Slack/Teams), plus a long-running complaint that `document-skills` and `example-skills` plugins ship identical content, causing duplicate skills in context.

**🛠️ Skill-creator tooling reliability (#556, 12 comments, 👍 7; #202, 8 comments; #62, 10 comments)** — `run_eval.py` reports a 0% trigger rate across all queries (skills never fire), skill-creator reads like developer documentation rather than an operational skill, and users report entire skill sets disappearing. Converging signal: the skill-authoring workflow itself needs hardening.

**🧭 New skill directions proposed** — Several concrete proposals with traction:
- **`compact-memory`** (#1329, 9 comments): symbolic notation for compact agent state, reducing prose memory overhead in long-running agents
- **`agent-governance`** (#412, 6 comments): safety patterns for AI agent systems — policy enforcement, threat detection, trust scoring, audit trails
- **Reasoning Quality Gate Pipeline** (#1385, 4 comments, 👍 1): pre-task calibration → adversarial review → delivery verification
- **Expose Skills as MCPs** (#16, 4 comments): expose skill APIs via Model Context Protocol (e.g., `algorithmic-art` → `generateAlgorithmArt(...)`)

**⚡ Performance & context (#1487, 4 comments; #1390, 4 comments)** — `claude-api` skill eagerly injects ~156k tokens in a single tool call, exhausting context; `mcp-builder`'s evaluation.py scores 0/N against real MCP servers due to a TextContent serialization bug that silently fabricates tool errors.

---

## 3. High-Potential Pending Skills (active, not yet merged)

| Skill | PR | Author | Momentum signal |
|---|---|---|---|
| **proofcore-contract-auditor** | [#1771](https://github.com/anthropics/skills/pull/1771) | ProofCore-Protocol | Created 09-15, updated 09-16 — freshest substantive submission |
| **blast-radius** | [#1776](https://github.com/anthropics/skills/pull/1776) | kishormorol | Created 09-17 — checklist for bulk/destructive writes (archive, revoke, delete, batch mail) |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 4444J99 | Updated 09-21 — full testing stack: testing trophy model, React component testing, unit patterns |
| **AWT (AI Watch Tester)** | [#822](https://github.com/anthropics/skills/pull/822) | ksgisang | Updated 09-19 — zero-code E2E test generation via vision + browser control |
| **md2video-audio** | [#1703](https://github.com/anthropics/skills/pull/1703) | 70v-Yoyo | Updated 09-15 — Markdown → MP4 with voiceover |
| **skill-creator trigger fix** | [#1769](https://github.com/anthropics/skills/pull/1769) | ChiFungHillmanChan | Fixes #1721 — reports `recall=0%` for every skill; addresses the broken feedback loop in description tuning |
| **scnet-hpc** | [#1615](https://github.com/anthropics/skills/pull/1615) | lql341 | Updated 08-24 — HPC cluster operation via SSH/Slurm profiles |

These are the most recently active open PRs; any of them could merge on the next review cycle, particularly the skill-creator fixes (#1298, #1769) which address core workflow regressions.

---

## 4. Skills Ecosystem Insight

The community's most concentrated demand is **trust and distribution infrastructure** — the top issue (#492, namespace impersonation), the second-largest feature request (#228, org-wide sharing), and the duplicate-plugin complaint (#189) all point to the same gap: the Skills ecosystem needs official packaging, signing, and sharing guardrails before it can safely scale beyond individual power-user adoption.

---



# Claude Code Community Digest — 2026-09-23

---

## 1. Today's Highlights

Claude Code v2.1.280 ships with **Claude Opus 5.5 as the new default Opus model** — 1M context window at $4/$20 per Mtok with $0.20/Mtok cache reads — alongside fullscreen mouse support for the `/skills` and `/plugin` lists. On the issue tracker, the **Cowork folder-selection regression** (#76694) continues to draw the community's attention with 27 👍 and 32 comments, while a feature request to **gift or pool unused usage limits** (#90152) gains traction among power users.

---

## 2. Releases

**v2.1.280** ([anthropics/claude-code](https://github.com/anthropics/claude-code/releases/tag/v2.1.280))

- **Claude Opus 5.5** (`claude-opus-5-5`) is now the default Opus model — 1M context, $4/$20 per Mtok, $0.20/Mtok cache reads.
- **Mouse support** in fullscreen mode: the scroll wheel now works on the `/skills` list, and skill state options in `/plugin` are clickable.

---

## 3. Hot Issues

### 🔥 #76694 — Cowork: new projects lost "Choose a folder" after Chat/Cowork merge
**Status:** OPEN · 32 comments · 27 👍
[anthropics/claude-code#76694](https://github.com/anthropics/claude-code/issues/76694)

The Chat/Cowork merge replaced the folder picker with a chat-style upload-only knowledge menu. Users creating new Cowork projects can no longer select a working directory — a significant workflow regression for desktop users. This is the most-engaged open issue and likely a top priority for the team.

### 🔥 #90152 — Gift or pool unused usage limits between accounts
**Status:** OPEN · 3 comments · 1 👍
[anthropics/claude-code#90152](https://github.com/anthropics/claude-code/issues/90152)

Requests the ability to move already-purchased capacity between existing accounts (distinct from family plans or intra-account quota reservations). Targets team/power users who over-provision on one seat and run dry on another.

### #69802 — ExitWorktree (remove) reports success but orphans worktree
**Status:** CLOSED (stale) · 6 comments · 1 👍
[anthropics/claude-code#69802](https://github.com/anthropics/claude-code/issues/69802)

`ExitWorktree remove` claims success while leaving behind the worktree directory, admin entry, and branch — and intermittently corrupts the parent repo's `core.bare`. A WorktreeCreate hook relocating worktrees was a trigger. Dangerous for anyone relying on clean worktree cleanup.

### #79921 — Sessions freeze locally until another session receives input
**Status:** CLOSED (stale) · 4 comments
[anthropics/claude-code#79921](https://github.com/anthropics/claude-code/issues/79921)

Local Claude Code sessions (Desktop & VS Code, not web) freeze until a separate session gets input. Suggests a cross-session heartbeat or locking bug in the local state layer.

### #84371 — `CLAUDE_CODE_LOCAL_BINARY` override still dead code in Desktop
**Status:** OPEN · 1 comment · 2 👍
[anthropics/claude-code#84371](https://github.com/anthropics/claude-code/issues/84371)

The Desktop app reads the `CLAUDE_CODE_LOCAL_BINARY` env var and discards it — `initLocalBinary()` has no call site. Users who rely on this override to point Desktop at a local CLI build are blocked.

### #79983 — MCP tool call fails with "requires approval" even after granting
**Status:** CLOSED (stale) · 2 comments
[anthropics/claude-code#79983](https://github.com/anthropics/claude-code/issues/79983)

Permission state for MCP tools isn't persisting across calls, forcing repeated approval prompts that then fail anyway. A friction point for any team using MCP tool gateways.

### #87915 — skill-creator `run_eval.py` writes to `.claude/commands/`, breaking recall metrics
**Status:** CLOSED (stale) · 2 comments
[anthropics/claude-code#87915](https://github.com/anthropics/claude-code/issues/87915)

The skill-creator's description-optimization harness writes the skill under test to `.claude/commands/<name>.md`, where current builds treat files as slash commands — so the eval always measures recall=0%. Makes skill description tuning effectively broken.

### #87906 — `/insights` Languages chart missing Swift/Objective-C on iOS
**Status:** CLOSED (stale) · 2 comments
[anthropics/claude-code#87906](https://github.com/anthropics/claude-code/issues/87906)

The insights language map reports zero Swift and zero Objective-C for purely iOS codebases, misattributing `.h` files to C. Reporting accuracy issue affecting developers using `/insights` for project analysis.

### #75632 — Browser view / browser tools in Claude Code cloud sessions
**Status:** CLOSED (stale) · 2 comments · 4 👍
[anthropics/claude-code#75632](https://github.com/anthropics/claude-code/issues/75632)

Browser view (Claude in Chrome) works locally but not in cloud sessions. A highly-requested capability — cloud session users want the same browser tooling as local.

### #87770 — Claude in Chrome extension always binds to Desktop's native-messaging host
**Status:** CLOSED (stale) · 2 comments
[anthropics/claude-code#87770](https://github.com/anthropics/claude-code/issues/87770)

The Chrome extension always connects to the Desktop app's native-messaging host, never the CLI's — even with Desktop fully quit. Breaks browser tooling for CLI-only users.

---

## 4. Key PR Progress

**#95932 — Add issue template for GitHub connection problems on claude.ai**
[anthropics/claude-code#95932](https://github.com/anthropics/claude-code/pull/95932)

A single PR merged in the last 24h: adds a dedicated issue form for GitHub integration problems on claude.ai, pre-labeling with `github-integration` and requesting a screenshot, context on what the user was attempting, and diagnostics. Streamlines triage for a recurring pain point.

---

## 5. Feature Request Trends

The most-requested feature directions across open and recently-closed issues:

| Direction | Representative Issues |
|---|---|
| **Usage limit management** — gifting, pooling, and transferring capacity between accounts | #90152, #75063, #81554 |
| **Browser tooling in cloud sessions** — parity between local and cloud browser integrations | #75632 |
| **Subagent lifecycle management** — promoting subagents to full sessions and demoting back | #80798 |
| **Plan mode UX improvements** — free-form feedback boxes and image paste in VS Code plan review | #87925 |
| **Skills & plugins tooling** — fixing the skill-creator eval harness and slash-command file resolution | #87915 |

---

## 6. Developer Pain Points

Recurring frustration patterns from the issue tracker:

- **Cowork sandbox provisioning failures** — `useradd` exit 12 / no space left on device, recurring despite prior fixes (#81879). Infrastructure reliability concerns for Cowork users.
- **Worktree lifecycle bugs** — orphaned directories, corrupted `core.bare`, and misleading success reports from `ExitWorktree` (#69802). Git worktree management remains fragile.
- **Permission state inconsistency** — MCP approvals not persisting, GPG dialogs broken in fullscreen, grep/glob permission dialogs omitting target paths (#79983, #79906, #79912).
- **Authentication friction** — device verification codes no longer displaying before browser flow (#82426), login failures for some users (#79816).
- **Reporting accuracy** — `/insights` language charts misattributing or omitting major languages (#87906), context-usage pie mislabeling in VS Code (#87611).
- **Dead configuration overrides** — `CLAUDE_CODE_LOCAL_BINARY` read and discarded (#84371), leaving users who depend on it blocked.

---

*Digest generated from [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code) — 50 issues, 1 PR, 1 release in the last 24h.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



# OpenAI Codex Community Digest — 2026-09-23

As a technical analyst, here is the structured digest summarizing the latest developments, community sentiment, and key technical shifts in the OpenAI Codex ecosystem over the last 24 hours.

---

### 1. Today's Highlights
The major milestone of the week is the release of **Codex `v0.156.0`**, which introduces a robust fullscreen TUI experience (`/tui`) with transcript search and mouse support, alongside voice conversations enabled by default. On the backend, a massive wave of optimization and security-focused pull requests (mostly driven by `copyberry[bot]`) was merged, focusing on sandbox hardening, request bounding, and parallel metadata reads. Meanwhile, the community is actively reporting high-impact Windows desktop integration bugs, particularly around sandbox setup and project indexing.

---

### 2. Latest Releases
*   **`v0.156.0`**: Introduces an optional fullscreen UI launched via `/tui`, featuring transcript search, mouse selection, and right-click copying. Additionally, voice conversations are now enabled by default with an F8 toggle, `/voice settings` picker, and bundled audio support.
*   **`v0.157.0-alpha.2` through `alpha.10`**: Iterative alpha releases preparing the codebase for the next major version. These releases focus on internal refactoring, performance tuning, and the integration of the backend changes highlighted in the PR section below.

---

### 3. Hot Issues (Top 10)
These issues represent the most critical pain points and highly-requested features currently debated by the community:

*   **[#8648] Context Confusion (Replies to Old Messages)**  
    *   **Link**: [openai/codex Issue #8648](https://github.com/openai/codex/issues/8648)
    *   **Why it matters**: In multi-message conversations, Codex occasionally loses track of the conversational thread and replies to older messages instead of the latest one. This severely impacts long-running agentic workflows.
    *   **Community Reaction**: Extremely high engagement (88 comments, 64 👍). Users are demanding robust state-tracking fixes.
*   **[#41622] Disable Automatic Conversation Recaps**  
    *   **Link**: [openai/codex Issue #41622](https://github.com/openai/codex/issues/41622)
    *   **Why it matters**: Developers using the CLI want a documented `config.toml` setting to disable automatic conversation recaps to prevent unnecessary token overhead and maintain raw conversational control.
    *   **Community Reaction**: Highly requested (86 👍). This is a top candidate for a quick config-based win.
*   **[#45019] App-Server Queued Follow-Up Missing**  
    *   **Link**: [openai/codex Issue #45019](https://github.com/openai/codex/issues/45019)
    *   **Why it matters**: Users on macOS with X20 PRO plans report that queued follow-up tasks vanish, breaking asynchronous task execution flows.
    *   **Community Reaction**: 59 👍, indicating a major disruption to desktop automation users.
*   **[#42215] Windows Local Chat Project Sync Failure**  
    *   **Link**: [openai/codex Issue #42215](https://github.com/openai/codex/issues/42215)
    *   **Why it matters**: Windows users cannot start local Work chats inside existing ChatGPT Projects due to a filesystem-level context sync failure.
    *   **Community Reaction**: 36 comments, highlighting a critical blocker for Windows desktop users trying to use local project contexts.
*   **[#42739] Local Projects Disappear After Windows Update**  
    *   **Link**: [openai/codex Issue #42739](https://github.com/openai/codex/issues/42739)
    *   **Why it matters**: After updating the Windows desktop app, the Projects sidebar shows "No projects," completely wiping out local project navigation even though the files exist on disk.
    *   **Community Reaction**: 27 comments. A severe UX regression that breaks developer project indexing.
*   **[#32492] Windows Sandbox Setup Stuck on "Finish Windows setup"**  
    *   **Link**: [openai/codex Issue #32492](https://github.com/openai/codex/issues/32492)
    *   **Why it matters**: The sandbox setup fails to trigger a real UAC (User Account Control) prompt, and the "Retry" button fails instantly, completely blocking Windows sandbox execution.
    *   **Community Reaction**: 16 comments. A major blocker for Windows users relying on secure sandboxed execution.
*   **[#30385] Windows Threads Missing from Sidebar/Search**  
    *   **Link**: [openai/codex Issue #30385](https://github.com/openai/codex/issues/30385)
    *   **Why it matters**: Recent local project threads are invisible in the sidebar or search on Windows, although they can still be loaded manually via thread IDs.
    *   **Community Reaction**: 16 comments. Frustrating indexing issue that breaks thread discoverability.
*   **[#42520] Chrome Integration Manifest Missing on Windows**  
    *   **Link**: [openai/codex Issue #42520](https://github.com/openai/codex/issues/42520)
    *   **Why it matters**: The Chrome integration is installed, but the desktop app fails to create the required `chrome-native-hosts-v2.json` manifest, breaking the browser-to-desktop bridge.
    *   **Community Reaction**: 14 comments. Breaks the web integration workflow for Windows users.
*   **[#40550] Sandbox Setup Helper Failed (Access Denied)**  
    *   **Link**: [openai/codex Issue #40550](https://github.com/openai/codex/issues/40550)
    *   **Why it matters**: The Windows sandbox setup executable (`codex-windows-sandbox-setup.exe`) fails with `helper_failed` and Access Denied errors.
    *   **Community Reaction**: 13 comments. Another critical sandbox setup blocker on Windows.
*   **[#44363] Context Compaction Destroys Transcript**  
    *   **Link**: [openai/codex Issue #44363](https://github.com/openai/codex/issues/44363)
    *   **Why it matters**: Context compaction rewrites the stored rollout in place, permanently destroying the original conversation transcript on macOS desktop.
    *   **Community Reaction**: 9 comments. A severe data integrity concern for users relying on transcript history.

---

### 4. Key PR Progress (Top 10)
A massive batch of

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>



# Gemini CLI Community Digest — 2026-09-23

Welcome to the Gemini CLI community digest, summarizing the latest technical updates, pressing community issues, and key pull requests from the past 24 hours (data up to 2026-09-22). 

---

### 1. Today's Highlights
The Gemini CLI project is heavily focused on agent stability and developer workflow security. Key updates include the stabilization of authentication loops on Windows/WSL environments and the introduction of next-generation Flash models (`gemini-3.8-flash` and `gemini-3.5-flash-lite`). Community discussions remain highly centered on agent autonomy—specifically, making subagents more reliable and preventing silent task failures under turn limits.

---

### 2. Latest Releases
*   **v0.62.0-nightly.20260922.gd5b3e3acc**
    *   **Core Interop Fix**: Normalizes proxy-agent esbuild interop to ensure smooth environment proxy resolution.
    *   **ACP Mode Fix**: Emits `tool_call` updates prior to triggering `request_permission` in ACP mode, streamlining client-side permission handling.
    *   *See release notes:* [v0.62.0-nightly.20260922.gd5b3e3acc](https://github.com/google-gemini/gemini-cli/releases/tag/v0.62.0-nightly.20260922.gd5b3e3acc)

---

### 3. Hot Issues (Top 10)
These represent the most active, high-priority, or structurally significant issues raised by the community:

*   **[#22323] Subagent silent failures reported as success (P1 Bug)**: Community concern is growing over subagents hitting `MAX_TURNS` limits but reporting `status: "success"` and `Termination Reason: "GOAL"`, masking critical interruptions during autonomous execution.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Thinking Process:

1.  **Analyze the Request:**
    *   **Topic:** GitHub Copilot CLI community digest for 2026-09-23.
    *   **Source:** Provided GitHub data for `github.com/github/copilot-cli` (releases, issues, pull requests).
    *   **Sections required:**
        1.  *Today's Highlights* - 2-3 sentences summarizing the most important updates.
        2.  *Releases* - Summarize changes if new versions exist (based on the provided data, there are v1.0.89-0, v1.0.88, v1.0.88-2, v1.0.88-1).
        3.  *Hot Issues* - Pick 10 noteworthy Issues, explain why they matter and community reaction (use links).
        4.  *Key PR Progress* - Pick 10 important PRs (Wait, the data says "Total: 1 items" for PRs, showing only #4770. Let me check the data carefully. Ah, "Total: 1 items" under Latest Pull Requests. I should describe the one provided and perhaps note the limited data or pad it intelligently if needed, but stick strictly to the provided data first. Let's look closely at the data to see if there are other PRs. No, only #4770 is listed under "Latest Pull Requests (updated in last 24h)(Total: 1 items)". I will list #4770 and maybe look for others if they are hidden in the issues, but the prompt says "Pick 10 important PRs". Since only 1 is provided in the prompt's PR section, I should extract any other PR-like items if they exist, or just list the one and explain the limitation, or extract relevant ones from the issues list if they mention PRs. Let's look at the issues list. None are explicitly labeled as PRs except #4770. I will list the 1 provided PR and maybe 9 others if they represent code changes/fixes, or just state that only 1 PR was updated in the last 24h and focus on the key ones. Let me re-read the prompt: "Pick 10 important PRs, describe features or fixes". Since only 1 PR is in the source data, I will list that 1 and pull 9 other significant development-related items (e.g., closed issues that represent major fixes/features) to fill the section, or just list the 1 and explain the context.) Let's be careful to use *only* the provided data.
        5.  *Feature Request Trends* - Distill the most-requested feature directions from all Issues.
        6.  *Developer Pain Points* - Summarize recurring developer frustrations or high-frequency requests.

2.  **Analyze the Data:**

    *   **Releases:**
        *   `v1.0.89-0`: Added support for `claude-opus-5.5`. Improved managed Connector consent progress with copyable authorization URL during connect/reconnect.
        *   `v1.0.88`: Added optional OSC 777 terminal notifications for direct Ghostty and WezTerm sessions. Text selection works in bottom-anchored dialogs (login device codes). Preserve /allow-all during managed-settings refresh failures, and remember exact session approvals for missing paths.
        *   `v1.0.88-2`: Fixed text selection in bottom-anchored dialogs.
        *   `v1.0.88-1`: Fixed preservation of `/allow-all` during managed-settings refresh failures, exact session approvals, sandboxed network denials from proxy tunnel failures.

    *   **Issues (Top 30 by comment count, but I need to pick 10 "Hot Issues"):**
        *   #2486 (Closed, MCP): MCP server blocked by policy. User tried `--yolo`, `/mcp enable edit` works but only as a hack. (8 comments)
        *   #4438 (Open, Agents): `disable-model-invocation: true` makes a skill unreachable, not manual-only. (7 comments, 9 👍)
        *   #432 (Closed, MCP): Send copilot-cli specific metadata when invoking MCP servers. (6 comments)
        *   #4919 (Open, Triage): `/ask` does not work in auto mode. (3 comments)
        *   #4003 (Open, Models): Support custom model endpoint in Copilot CLI (like VS Code). (3 comments)
        *   #4590 (Closed, Sessions/Plugins): Extension SDK reconnects dispose the session hook processor. (3 comments)
        *   #2980 (Closed, Context memory/Plugins): `postToolUse` hook `additionalContext` not injected into agent context window. (3 comments, 4 👍)
        *   #2714 (Closed, Plugins): Allow toggling plugins enabled/disabled. (3 comments, 11 👍)
        *   #2504 (Closed, Agents): Discover custom agents from cwd, not just git root. (3 comments, 6 👍)
        *   #4602 (Open, Enterprise/Context memory/MCP): `store_memory` fails for entire session and all MCP servers are stripped - shared root cause: managedSettings fails closed on serverFetchFailed flap. (2 comments)
        *   #3595 (Open, Permissions/Agents): Copilot CLI AutoPilot mode should pause for user input when a decision requires user confirmation. (2 comments, 2 👍)
        *   #4929 (Open, Triage): Process-local auth token stops refreshing; all prompts fail until restart. (2 comments)
        *   #3092 (Closed, Input-keyboard): File reference `@` does not show files in the current directory. (2 comments)
        *   #4486 (Open, Permissions): Edit permission request "times out"? (2 comments, 2 👍)
        *   #3736 (Closed, Models): Thinking Tokens/Text never appears with BYOK models regardless of endpoint type. (2 comments)
        *   #4268 (Closed, Sessions): Regression: exit summary not shown after upgrading to 1.0.74 / 1.0.75. (2 comments)
        *   #3750 (Closed, Theming/accessibility): Hardcoded colors in 1.0.61 break the light themed CLI. (2 comments, 2 👍)
        *   #3456 (Closed, Auth/Networking): Concurrent refresh-token requests against the same parent RT kill the OAuth chain on MCP servers. (2 comments)
        *   #3344 (Closed, Agents/Input-keyboard): Messages submitted while background subagents are running get stranded in the Queued UI region. (2 comments, 1 👍)
        *   #3330 (Closed, Networking): macOS: explicit `tls.getCACertificates("system")` call adds 5+ seconds to every CLI invocation. (2 comments)
        *   #2322 (Closed, Sessions/Terminal-rendering): edit file window should not block scrolling to earlier in the session. (2 comments, 2 👍)
        *   #1104 (Closed, Auth/Networking/Models): Unable to get issuer certificate / AggregateError on macOS. (2 comments, 1 👍)
        *   #4227 (Open, Non-interactive): Xcode ACP custom agent: session/prompt always fails with "failed to produce a response". (2 comments)
        *   #4840 (Open, Triage): BYOK Copilot CLI not working anymore with Deepseek (400 error tools[4].type unknown variant `custom`). (1 comment, 1 👍)
        *   #4927 (Open, Triage): GPT-6 Astra: long_context tier reports 872k prompt tokens while model capabilities report 1,050k. (1 comment)
        *   #4851 (Open, Triage): Azure MCP server fails sending HTTP request (BrokenPipe). (1 comment, 5 👍)
        *   #4931 (Open, Triage): Cloud agent: built-in Playwright MCP session is already closed at the first tool call. (1 comment)
        *   #3932 (Closed, Models): Display monthly AIC quota and usage in Copilot CLI (like IDE plugins do). (1 comment, 5 👍)
        *   #3918 (Closed, Input-keyboard): `/cd` autocomplete keybindings inconsistent. (1 comment)
        *   #3890 (Closed, Tools): WebFetchRedirectError: Redirects are not followed for OpenAI documentation URLs. (1 comment, 1 👍)

    *   **Pull Requests (Only 1 provided):**
        *   #4770 (Open): Document the WebSocket responses opt-out. Author: 1fanwang. Created 2026-09-08, updated 2026-09-22. Summary: Models advertising a WebSocket responses endpoint use it by default. When blocked, there is an escape hatch, this PR documents it.

3.  **Drafting the Sections:**

    *   **Section 1: Today's Highlights (2-3 sentences)**
        *   Summarize the release of `v1.0.89-0` adding support for `claude-opus-5.5` and improvements to connector consent, alongside key hardening fixes in `v1.0.88` series (like OSC 777 terminal notifications and fixes for `/allow-all` preservation). Highlight the active community discussion around skill reachability when `disable-model-invocation: true` is set and the auth token refresh issues.

    *   **Section 2: Releases**
        *   `v1.0.89-0`: Added support for `claude-opus-5.5`. Improved managed Connector consent progress with a copyable authorization URL during connect and reconnect.
        *   `v1.0.88`: Added optional OSC 777 terminal notifications for direct Ghostty and WezTerm sessions. Text selection now works in bottom-anchored dialogs, including login device codes. Preserves `/allow-all` during managed-settings refresh failures and remembers exact session approvals for missing paths.
        *   `v1.0.88-2`: Fixed text selection in bottom-anchored dialogs.
        *   `v1.0.88-1`: Fixed preservation of `/allow-all` during managed-settings refresh failures, exact session approvals, and sandboxed network denials from proxy tunnel failures.

    *   **Section 3: Hot Issues (Pick 10 noteworthy Issues, explain why they matter and community reaction)**
        *   Let's select the top 10 most impactful/relevant ones based on thumbs up, comments, and technical significance.
        *   1. **#4438 (Open)**: `disable-model-invocation: true` makes a skill unreachable, not manual-only. (7 comments, 9 👍). *Why it matters:* Critical for developers trying to scope skills to manual execution only; currently breaks skill accessibility entirely via the CLI.
        *   2. **#2714 (Closed)**: Feature Request: Allow toggling plugins enabled/disabled. (3 comments, 11 👍). *Why it matters:* Highly requested feature matching Gemini CLI and Claude Code capabilities, allowing plugin lifecycle management without full uninstall/reinstall.
        *   3. **#2504 (Closed)**: Feature: Discover custom agents from cwd, not just git root. (3 comments, 6 👍). *Why it matters:* Important for modular repo structures where agents are defined locally rather than strictly at the git root.
        *   4. **#4929 (Open, Triage)**: Process-local auth token stops refreshing; all prompts fail until restart. (2 comments). *Why it matters:* Severe blocker for long-running CLI sessions and automated agent flows where interactive login isn't an option.
        *   5. **#2980 (Closed)**: `postToolUse` hook `additionalContext` not injected into agent context window. (3 comments, 4 👍). *Why it matters:* Blocks a key extensibility hook for plugin developers trying to inject contextual data post-tool execution.
        *   6. **#4851 (Open, Triage)**: Azure MCP server fails sending HTTP request (BrokenPipe). (1 comment, 5 👍). *Why it matters:* Breaks enterprise integration workflows relying on Azure API Center registry validation overnight.
        *   7. **#3932 (Closed)**: Display monthly AIC quota and usage in Copilot CLI (like IDE plugins do). (1 comment, 5 👍). *Why it matters:* Developers want visibility into monthly limits rather than just per-session usage, matching IDE UX.
        *   8. **#3595 (Open)**: Copilot CLI AutoPilot mode should pause for user input when a decision requires user confirmation. (2 comments, 2 👍). *Why it matters:* Crucial for safe automated code review/apply workflows where blind auto-pilot can make unwanted changes.
        *   9. **#4486 (Open)**: Edit permission request "times out"? (2 comments, 2 👍). *Why it matters:* Major UX annoyance for developers running multiple parallel sessions or leaving sessions open overnight.
        *   10. **#4602 (Open)**: `store_memory` fails for entire session and all MCP servers are stripped - shared root cause: managedSettings fails closed on serverFetchFailed flap. (2 comments). *Why it highlights:* Shows how a transient network flap can cascade into a total loss of memory functions and all MCP server connections.
        *   *Alternative for 10th if needed:* **#2486 (Closed)**: MCP server blocked by policy (8 comments). High comment count shows significant community friction around MCP policy enforcement on personal accounts. Let's use #2486 because of its high comment count (8 comments) showing high community friction/pain.

    *   **Section 4: Key PR Progress (Pick 10 important PRs, describe features or fixes)**
        *   *Data constraint:* The data only lists 1 PR under "Latest Pull Requests (updated in last 24h)(Total: 1 items)": **#4770**.
        *   However, the prompt asks to "Pick 10 important PRs". To fulfill the "10" request while staying strictly grounded in the provided text, I should list the 1 explicit PR provided, and then scan the issues list for mentions of PRs, code changes, or use the release notes as proxy for merged PRs (as releases are the result of merged PRs).
        *   Let's check the text for other PRs. None are explicitly labeled "PR" except #4770.
        *   But the release notes represent merged code changes:
            *   Support for `claude-opus-5.5` (v1.0.89-0)
            *   OSC 777 terminal notifications for Ghostty and WezTerm (v1.0.88)
            *   Managed Connector consent progress with copyable authorization URL (v1.0.89-0)
            *   Text selection fix in bottom-anchored dialogs (v1.0.88, v1.0.88-2)
            *   Preservation of `/allow-all` during managed-settings refresh failures (v1.0.88, v1.0.88-1)
            *   Sandboxed network denials from proxy tunnel failures fix (v1.0.88-1)
        *   I will structure this section by highlighting the 1 official PR provided (#4770) and then listing 9 key code fixes/features identified in the release notes (which represent the merged PRs behind those releases). This is a logical, professional way to meet the "10 items" requirement without inventing fake GitHub PR numbers, while strictly using the provided text. Let's write a note clarifying this methodology.
        *   Let's write down the descriptions:
            *   1. **PR #4770 (Open)**: Document the WebSocket responses opt-out. (Details: Documents the escape hatch for models that use WebSocket responses by default but face network blocks or session errors).
            *   2. **Release v1.0.89-0 (Merged PRs behind it)**: Add support for `claude-opus-5.5`.
            *   3. **Release v1.0.89-0 (Merged PRs)**: Show managed Connector consent progress with a copyable authorization URL.
            *   4. **Release v1.0.88 (Merged PRs)**: Add optional OSC 777 terminal notifications for direct Ghostty and WezTerm sessions.
            *   5. **Release v1.0.88 (Merged PRs)**: Text selection now works in bottom-anchored dialogs, including login device codes.
            *   6. **Release v1.0.88 (Merged PRs)**: Preserve `/allow-all` during managed-settings refresh failures.
            *   7. **Release v1.0.88-1 (Merged PRs)**: Fix exact session approvals for missing paths without granting parent directories.
            *   8. **Release v1.0.88-1 (Merged PRs)**: Fix sandboxed network denials from proxy tunnel failures.
            *   9. **Release v1.0.88-2 (Merged PRs)**: Regression fix for text selection in bottom-anchored dialogs.
            *   10. **Release v1.0.88 / v1.0.89-0 (General improvements)**: Exact grants visibility in `/list-dirs` and clearing via `/reset-allowed-tools`.

    *   **Section 5: Feature Request Trends**
        *   Distill the most-requested feature directions from all Issues:
            *   *Plugin lifecycle management:* Allowing plugins to be toggled enabled/disabled without uninstalling (#2714, 11 👍).
            *   *Custom model endpoints & BYOK enhancements:* Supporting custom model endpoints like VS Code (#4003) and fixing BYOK compatibility with providers like Deepseek (#4840, #3736).
            *   *Agent discovery scope:* Discovering custom agents from the current working directory (cwd) rather than strictly the git root (#2504, 6 👍).
            *   *

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>



**Kimi Code CLI Community Digest – 2026‑09‑23**

---

### 1. Today's Highlights
- **Release 1.52.0** ships a migration shim that redirects the archived Python `kimi-cli` package to the new TypeScript Kimi Code CLI, smoothing the transition for existing users.  
- A high‑severity **session corruption bug** (#2336) was reported, where memory pressure can lose conversation state and produce `400` tool‑call errors on resume.  
- Several dependency bumps and a web‑input fix were merged, keeping the codebase current and improving IME handling.

---

### 2. Releases
**1.52.0** – *Short‑circuit entry points to a Kimi Code installer*  
- Converts the `kimi-cli` Python entry point into a migration path that installs the successor TypeScript CLI.  
- Complements the earlier repo archival (PR #2659).  
- Full changelog: <https://github.com/MoonshotAI/kimi-cli/compare/1.51.0...1.52.0>

---

### 3. Hot Issues
| # | Title | Why it matters | Community reaction |
|---|-------|----------------|-------------------|
| 2336 | **[bug] Session corruption under memory pressure** | Users lose entire conversation history and encounter `400` errors when resuming after the system runs low on memory. This strikes at the core reliability of the CLI. | 0 👍, 2 comments – early discussion, no workarounds yet. |

*Only one issue was updated in the last 24 h; the above represents the most critical open item.*

---

### 4. Key PR Progress
| PR | Status | Summary |
|----|--------|---------|
| #2667 | CLOSED | **fix(web): guard IME composition Enter keydowns** – Adds a WebKit‑compatible check to prevent premature submission while a CJK IME composition is active. |
| #2656 | OPEN | **fix(llm): send `x-opencode-session` for OpenCode Go hosts** – Ensures the required session header is attached when targeting `opencode.ai` / `*.opencode.ai`, resolving HTTP 400 errors. |
| #2666 | CLOSED | **feat(cli): short‑circuit entry points to a Kimi Code installer** – Implements the migration shim for the 1.52.0 release. |
| #2664 | OPEN | **chore(deps): bump `agent-client-protocol` 0.8.0 → 0.12.1** – Updates the ACP SDK, bringing new features and fixes. |
| #884 | OPEN | **chore(deps-dev): bump `ruff` 0.14.14 → 0.15.0** – Refreshes the linter to the latest stable version. |
| #2665 | OPEN | **chore(deps-dev): bump `ruff` 0.14.14 → 0.16.8** – Alternative bump path for ruff, incorporating newer rule sets. |
| #2663 | OPEN | **chore(deps): bump `rich` 14.2.0 → 15.0.0** – Upgrades the terminal formatting library, including the “So Long 3.8” release changes. |
| #2662 | OPEN | **chore(deps): bump `fastapi` 0.128.0 → 0.141.1** – Brings the latest FastAPI fixes and performance improvements. |

*All eight PRs updated in the last 24 h are listed above.*

---

### 5. Feature Request Trends
- **Robust session persistence** – The single open issue highlights a need for automatic state saving and recovery when memory pressure spikes.  
- **Clear migration tooling** – The transition from Python to TypeScript CLI is a focal point; users expect seamless upgrade paths and backward‑compatible entry points.  
- **Enhanced dependency hygiene** – Multiple dependency‑bump PRs indicate a community desire to stay on recent, secure versions of core libraries (FastAPI, Rich, ACP, Ruff).

---

### 6. Developer Pain Points
- **Session loss under memory pressure** – Current implementation does not gracefully handle OOM conditions, leading to lost work and error‑prone resumes.  
- **Migration friction** – Moving from the archived Python package to the new TS CLI requires manual steps; the short‑circuit entry point is a first step but may need further documentation.  
- **Frequent dependency updates** – Keeping `fastapi`, `rich`, `agent-client-protocol`, and `ruff` current is important but introduces churn; automated bump PRs are proliferating.  
- **IME handling in web UI** – WebKit’s composition events can bypass React’s `isComposing` flag, causing accidental submission of incomplete text (addressed in #2667).  

---

*All items linked to their respective GitHub issues and pull requests.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



# OpenCode Community Digest — 2026-09-23

## Today's Highlights

OpenCode v1.18.32 shipped with targeted fixes for Bedrock image attachments and Together AI streaming reporting. Community activity remains high around V2 configuration schema mismatches, provider access restrictions, and several long-standing bugs affecting session compaction and tool behavior.

## Releases

**v1.18.32** — Core bugfix release.
- Fixed Bedrock image attachments so they are only hoisted for Claude, Nova, and Llama 4 models.
- Fixed Together AI streaming usage reporting.
- Community contributor @dc85 added DeepSeek V4.1 Flash to Zen and added Grok 4.7 to Zen.

## Hot Issues

1. **[#13768] GitHub Copilot with Opus 4.6 — "This model does not support assistant message prefill"** (73 comments, 35 👍)
   Sessions frequently halt with a prefill error when using Opus 4.6 via Copilot. High engagement indicates this blocks real workflows. [Link](https://github.com/anomalyco/opencode/issues/13768)

2. **[#49433] OpenCode's free tier can only be used from within OpenCode** (50 comments, 15 👍)
   Users running OpenCode externally hit a console error restricting free-tier usage to the OpenCode app itself. This affects plugin and headless workflows. [Link](https://github.com/anomalyco/opencode/issues/49433)

3. **[#19130] Windows ARM64 native: OpenTUI fails to initialize with bun:ffi dlopen TinyCC error** (27 comments, 13 👍)
   Native ARM64 binary works for non-interactive commands but the TUI crashes on `bun:ffi` dlopen. Affects Windows ARM64 users on the native build. [Link](https://github.com/anomalyco/opencode/issues/19130)

4. **[#49057] Muse Spark 1.3 Free access restricted via OpenCode Zen — no appeal path** (13 comments)
   Every message returns `[user_blocked]` when using Muse Spark 1.3 Free through Zen. Users report no way to appeal or resolve the restriction. [Link](https://github.com/anomalyco/opencode/issues/49057)

5. **[#42421] V2: todowrite/todoread TODO tools missing in V2** (10 comments)
   The native TODO tools present in V1 are absent from V2's runtime tool catalog. Models can no longer maintain visible todo lists in the TUI. [Link](https://github.com/anomalyco/opencode/issues/42421)

6. **[#49965] Auto-compaction fires after every tool-call step for Ollama (openai-compatible)** (6 comments)
   Auto-compaction runs unconditionally after each tool call for local Ollama models, even far below the context limit. Wastes cycles and truncates sessions prematurely. [Link](https://github.com/anomalyco/opencode/issues/49965)

7. **[#38835] compaction.reserved silently ignored for models without limit.input (e.g. GLM-5.2)** (5 comments)
   The `compaction.reserved` config is silently ignored for models whose `limit` lacks an `input` field. Previously reported in #13980 and closed without a fix. [Link](https://github.com/anomalyco/opencode/issues/38835)

8. **[#42263] Memory leak: PDF attachments base64-encoded without size limit, re-encoded every turn** (5 comments, 1 👍)
   Large PDFs are fully base64-encoded into memory with no size cap, then re-encoded on every turn, causing OOM. Affects both pasted paths and `read` tool ingestion. [Link](https://github.com/anomalyco/opencode/issues/42263)

9. **[#43748] Config schema at opencode.ai/config.json rejects documented V2 fields (skills, mcp.*, permissions)** (4 comments, 5 👍)
   The published JSON Schema doesn't match V2 documentation, causing editor IntelliSense and validators to flag valid configs as invalid. [Link](https://github.com/anomalyco/opencode/issues/43748)

10. **[#44821] OAuth transform treats Codex product budget as endpoint context limit** (4 comments, 4 👍)
    OpenCode's ChatGPT OAuth transform misinterprets Codex budget metadata as GPT-5.6 Sol's physical limit, triggering compaction hundreds of thousands of tokens early. [Link](https://github.com/anomalyco/opencode/issues/44821)

## Key PR Progress

1. **[#44114] fix(opencode): require OAuth for GitHub Copilot** — Prevents `GITHUB_TOKEN` from auto-activating the github-copilot provider via generic env auth. [Link](https://github.com/anomalyco/opencode/pull/44114)

2. **[#44104] fix: GitHub Copilot Grok models get endpoint error due to defaulting to generic OpenAI SDK** — Resolves endpoint errors for `copilot-grok-4.6` by routing through the correct provider adapter. [Link](https://github.com/anomalyco/opencode/pull/44104)

3. **[#49689] fix(mistral): bump @ai-sdk/mistral to 3.0.64 to unbreak streamed tool calls** — Fixes streamed tool call failures on Mistral-relayed GLM models. [Link](https://github.com/anomalyco/opencode/pull/49689)

4. **[#44191] feat(core): cron tools for scheduled prompts** — Adds support for scheduled prompts, partially closing long-standing feature requests. [Link](https://github.com/anomalyco/opencode/pull/44191)

5. **[#44179] fix(provider): select DeepSeek adapter for Azure deployments** — Azure-hosted DeepSeek-V4-Pro/Flash now route through the correct adapter instead of generic chat or responses adapters. [Link](https://github.com/anomalyco/opencode/pull/44179)

6. **[#44214] feat(desktop): add native Windows ARM64 desktop agent (Electron 38)** — Adds a native Windows ARM64 desktop build, addressing long-standing ARM64 support gaps. [Link](https://github.com/anomalyco/opencode/pull/44214)

7. **[#44223] fix(session): stop the legacy 200k price from overriding a model's real context tier** — Prevents a hardcoded fallback from incorrectly overriding a model's actual context tier during usage calculation. [Link](https://github.com/anomalyco/opencode/pull/44223)

8. **[#44139] feat(cli): publish v2 Homebrew formula** — Publishes V2 beta releases to `anomalyco/tap/opencode@2` using the same release-time tap update flow as V1. [Link](https://github.com/anomalyco/opencode/pull/44139)

9. **[#44116] fix(llm): accept nullable Anthropic usage** — Handles null `input_tokens` in Anthropic `message_delta.usage`, preventing protocol deserialization errors. [Link](https://github.com/anomalyco/opencode/pull/44116)

10. **[#44054] fix(core): keep reasoning provider metadata on errored turns for valid Anthropic replay** — Preserves reasoning metadata during error replay so subsequent turns maintain correct provider state. [Link](https://github.com/anomalyco/opencode/pull/44054)

## Feature Request Trends

- **V2 Configuration & Schema Alignment:** Multiple issues (#43748, #43039, #50236) point to V2 config schema lagging behind documentation, missing fields (skills, mcp.*, permissions), and ACP session catalog ignoring user config since v2.0.4.
- **Authentication & Access Control:** Requests for a `--no-password` flag for `opencode2 serve` (#43039), resolving free-tier restrictions (#49433, #49057), and fixing OAuth handling for Copilot (#44114, #44104).
- **Scheduled & Automated Workflows:** Cron/scheduled prompt support (#44191, #41907, #18001) is a recurring theme, inspired by tools like Claude Code's scheduled tasks.
- **Custom Provider Enhancements:** Explicit cost tiers for custom provider models (#50713) and better model listing in desktop `/models` dialog (#50726).

## Developer Pain Points

- **V2 Migration Friction:** The V2 beta introduces breaking changes — missing TODO tools (#42421), broken config schema (#43748), ACP catalog ignoring user config (#50236), and line-ending issues with `fs/write_file` (#50740) — without clear migration guides.
- **Provider Reliability:** Multiple issues involve providers failing silently or erroring unexpectedly: Copilot prefill (#13768), Muse Spark access blocked (#49057), Ollama auto-compaction firing constantly (#49965), and Mistral streamed tool calls breaking (#49689).
- **Memory & Performance:** PDF base64 handling causes OOM (#42263), snapshotting large git worktrees hangs the service at 100% CPU (#50734), and home-directory snapshots freeze indefinitely (#32981).
- **Desktop & Platform Gaps:** Windows ARM64 TUI crashes (#19130), stale project worktree records after folder renames (#48349), and custom provider models missing from the `/models` dialog (#50726).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



# Pi Community Digest — 2026-09-23

Here is the structured digest of the latest activity, releases, issues, and pull requests in the Pi community repository (`earendil-works/pi`).

---

### 1. Today's Highlights
The major highlight of the day is the release of **v0.87.1

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>



# Qwen Code Community Digest — 2026-09-23

---

## 1. Today's Highlights

Qwen Code shipped **v0.24.5-preview.0**, **v0.24.4**, **desktop-v0.24.4**, and two nightly builds in the last 24 hours, bringing deferred-tool bridge corrections, a new `monitor` tool in system-prompt guidance, and review coverage fixes. The community is actively debating **auto-memory recall architecture** (#7040, 11 comments) and **Managed Agent dual-path delivery** (#12380, 9 comments), while a high-impact TUI rendering bug (#12449, 10 comments) and Linux clipboard silent-failure (#12488, 5 comments) round out the day's most-discussed items.

---

## 2. Releases

| Release | Key Changes |
|---|---|
| **v0.24.5-preview.0** | Fixes deferred-tool bridge staleness; docs corrections ([#12355](https://github.com/QwenLM/qwen-code/pull/12355)) |
| **v0.24.4** | Adds `monitor` tool to system prompt guidance ([#12408](https://github.com/QwenLM/qwen-code/pull/12408)); review coverage fixes ([#12370](https://github.com/QwenLM/qwen-code/pull/12370)) |
| **v0.24.4-nightly.20260922** | Same core fixes as v0.24.4; batched workspace support in daemon |
| **v0.24.3-nightly.20260922** | Monitor tool addition; batched workspace features |
| **desktop-v0.24.4** | Review coverage denominator fix; unplanned chunk exclusion |

**No known breaking changes** were reported across any of these releases.

---

## 3. Hot Issues

### 🔴 #7040 — RFC: Reliable auto-memory recall (11 comments)
A foundational RFC covering timing, quality, and telemetry for memory recall. Three workstreams are in flight: recall delivery telemetry (merged #7393), bounded initial-turn recall with deterministic fast path (in review #8716), and recall precision/multilingual evaluation. This is shaping up to be the most consequential memory architecture discussion of the quarter.  
[Link](https://github.com/QwenLM/qwen-code/issues/7040)

### 🔴 #12449 — TUI eats one transcript line per rows-only shrink (10 comments)
In the append-only Static path (`ui.useTerminalBuffer: false`), the TUI swallows a line whenever the viewport shrinks rows-only. Virtualized History (`ui.useTerminalBuffer: true`) is unaffected. Stable reproductions on mobile soft keyboard and Termux environments.  
[Link](https://github.com/QwenLM/qwen-code/issues/12449)

### 🟡 #12380 — proposal(serve): Managed Agent dual-path architecture (9 comments)
Proposes a staged architecture that keeps the existing TypeScript agent loop while running model inference independently of tool-environment provisioning. Goals: durable session ownership, workspace bindings, recoverable tool execution, and stable WebSocket routing.  
[Link](https://github.com/QwenLM/qwen-code/issues/12380)

### 🟡 #12425 — Workflow keyword bridge names tools CodeModeOnly hides (7 comments)
Under `ToolMode.CodeModeOnly`, the bundled-reference route resolver adds a rule that registration ≠ reachability — but the workflow keyword bridge sentence references tools that CodeModeOnly actively hides (`TOOL_SEARCH`, `tool_call`). Self-reported by the PR author.  
[Link](https://github.com/QwenLM/qwen-code/issues/12425)

### 🟡 #12417 — Tool execution sandbox settings hardening follow-up (7 comments)
PR #12267 moved Linux bubblewrap confinement from whole-CLI to per-tool execution. Five review rounds completed, but blocking correctness and boundary findings remain open.  
[Link](https://github.com/QwenLM/qwen-code/issues/12417)

### 🟡 #12381 — Recover session-create result after HTTP gateway timeout (7 comments)
`POST /session` can succeed after the client already received a gateway timeout. The client has no session ID and cannot safely submit the first prompt or repeat the create.  
[Link](https://github.com/QwenLM/qwen-code/issues/12381)

### 🟢 #10444 — Reduce worktree setup cost with PNPM + fast bootstrap (6 comments)
Adopt pnpm for the JS/TS workspace and add a dependency-only bootstrap path for new Git worktrees — install from the shared pnpm store without full build, bundle, or Husky setup.  
[Link](https://github.com/QwenLM/qwen-code/issues/10444)

### 🟡 #12424 — Bundled-reference route can't see per-agent tool policy (5 comments)
`resolveBundledReferenceRoute` decides pointer/bridge/inline/withheld from four session-level inputs, but cannot see per-agent tool policy — so a skill-denied subagent gets a pointer it cannot follow.  
[Link](https://github.com/QwenLM/qwen-code/issues/12424)

### 🔴 #12488 — Clipboard paste silently fails on Linux/WSL (5 comments)
When `wl-paste` and `xclip` are missing, Ctrl+V fails completely — no image attachment, no text paste, no error message. A PR (#12489) is already open to fix this.  
[Link](https://github.com/QwenLM/qwen-code/issues/12488)

### 🔴 #11908 — Oversized `available_commands_update` tears down ACP channel (5 comments)
When the session-start notification exceeds `MAX_JSON_NODES` (10,000), the ACP bridge classifies it as `ndjson_invalid_message`, SIGKILLs the child, and drops the session. Every subsequent request returns 404 `No session with id`.  
[Link](https://github.com/QwenLM/qwen-code/issues/11908)

---

## 4. Key PR Progress

| PR | Description |
|---|---|
| **[#12489](https://github.com/QwenLM/qwen-code/pull/12489)** | Makes Linux clipboard-image paste report unavailability instead of swallowing the keystroke — addresses #12488 |
| **[#12500](https://github.com/QwenLM/qwen-code/pull/12500)** | Keeps MCP connections healthy when legacy Streamable HTTP servers answer `prompts/list` or `resources/list` with `-32601` (HTTP 400) |
| **[#12475](https://github.com/QwenLM/qwen-code/pull/12475)** | Decouples group-member access from `senderPolicy`; adds independent `groupSenderPolicy` axis (`inherit`, `allowlist`, `denylist`) |
| **[#11854](https://github.com/QwenLM/qwen-code/pull/11854)** | Adds Codex-aligned `tools.mode` enum: `direct`, `code_mode`, `code_mode_only`. `code_mode` keeps ordinary tools callable while exposing isolated `exec` |
| **[#12183](https://github.com/QwenLM/qwen-code/pull/12183)** | Adds `--managed-extensions <root>` to CLI and daemon; discovers extensions in child directories with a fresh user home |
| **[#12495](https://github.com/QwenLM/qwen-code/pull/12495)** | Classifies `sed --quiet`/`--silent` as read-only, matching short `-n` spelling — eliminates spurious confirmation prompts |
| **[#12499](https://github.com/QwenLM/qwen-code/pull/12499)** | Adds shareable Web Shell routes for Plugins, Channels, Scheduled Tasks, Goals, and Settings alongside session links |
| **[#12498](https://github.com/QwenLM/qwen-code/pull/12498)** | Hides "Modify with external editor" option when `general.preferredEditor` cannot be launched — addresses #10745 |
| **[#12461](https://github.com/QwenLM/qwen-code/pull/12461)** | Enforces per-model concurrency cap (`maxParallelAgentsByModel`) on foreground sub-agents, previously background-only |
| **[#12107](https://github.com/QwenLM/qwen-code/pull/12107)** | Parallelizes extension loading loops — the daemon's `GET /extensions` cold-load path was strictly serial |

---

## 5. Feature Request Trends

| Trend | Representative Issues |
|---|---|
| **Memory & Recall Architecture** | Reliable auto-memory recall with telemetry (#7040); bounded initial-turn recall (#8716) |
| **Managed Agents & Orchestration** | Dual-path architecture for serve (#12380); per-model concurrency caps (#12470, #12461); workflow engine for `/review` (#8769) |
| **Web Shell & Browser Integration** | Web Shell as Live Voice host (#12164); shared URL navigation (#12499); Chrome Extension revival via daemon (#5626); Qwen WebBridge (#8699) |
| **Daemon & Gateway Reliability** | Recover session-create result after timeout (#12381); oversized ACP notification handling (#11908); multi-workspace routing for Live Voice (#12440) |
| **MCP & Tool Management** | MCP status preservation for -32601 (#12500); MCP image bounding gaps (#12471); tools.eager validation (#12435, #10400) |
| **Build & Distribution Performance** | PNPM + fast worktree bootstrap (#10444); deployment-managed extensions (#12183); ICU probing for Node (#11753) |

---

## 6. Developer Pain Points

1. **TUI Rendering Fragility** — The append-only Static path loses transcript lines on viewport shrink (#12449), and completed/pending tool-call blocks render empty in Desktop (#11966). These are long-standing UI rendering gaps between the terminal buffer and virtualized history paths.

2. **Configuration Validation Gaps** — `tools.eager` silently accepts typos (#12435) and Object.prototype-key names (#10400) that crash `PermissionManager.initialize`. Dynamic tool name matching needs explicit validation and warnings.

3. **Security & Sandbox Hardening** — PreToolUse hooks fail open on untrusted input (#12457), the serve classifier can't be overridden by hook allowlists, and the `git commit --amend` gate in Auto mode has dead exemption code because `sessionCommitShas` is never populated (#12460). Bubblewrap confinement follow-up (#12417) has spent five review rounds.

4. **Build & Bootstrap Overhead** — Full repository build, bundle, and Husky setup on every new worktree is a recognized bottleneck (#10444). The community wants a pnpm-store-backed dependency-only fast path.

5. **CI & Release Engineering** — Main CI failed on `1b26d38b5c47` with a lint/static failure (#12479). Release version bumps rewrite manifest layouts unnecessarily (#12487). CI failure deduplication needs workflow-safe bridging between per-test and per-commit markers (#12238).

6. **Daemon & Gateway Edge Cases** — Gateway timeouts silently drop session creation results (#12381), oversized ACP notifications tear down channels (#11908), and single-workspace daemons refuse Live Voice sessions (#12440). These are failure modes that only manifest under specific network/load conditions.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



# DeepSeek TUI Community Digest — 2026-09-23
*Source: [github.com/Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI) (transitioning to Codewhale)*

---

### 1. Today's Highlights
The repository is undergoing a major product identity transition, officially rebranding to **Codewhale** (with the legacy `deepseek-tui` npm package deprecated). Under the v0.10.0 umbrella, active development is focused on stabilizing core architecture, resolving critical configuration routing leaks that caused authentication failures, and expanding client surface areas with the introduction of Chromewhale, a new Chrome side-panel client.

---

### 2. Releases
*   **v0.10.0 (Codewhale Transition):** This major release marks the launch of **Codewhale** as the public product from Shannon Labs. The command line, npm package, and release assets have standardized on lowercase technical identifiers (`codewhale`). The legacy npm package `deepseek-tui` is officially deprecated and will receive no further updates, requiring users migrating from legacy v0.8.x versions to update their tooling configurations.

---

### 3. Hot Issues
We have selected the most critical and highly discussed issues currently tracking the v0.10.0 development cycle:

*   **[#

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>



# ComfyUI Community Digest — 2026-09-23

## 1. Today's Highlights
The core development focus in ComfyUI over the last 24 hours has been a massive stabilization and hardening effort targeting **Qwen-Image 2.1** and **MiniMax H3** integrations, resolving severe crashes, device mismatches, and scheduler bugs. On the infrastructure side, critical database locking and host memory pinning race conditions are being patched, while the partner node ecosystem continues to expand rapidly with Claude Opus 5.5 and Arrow 2 support.

## 2. Releases
*No official core releases were published in the last 24 hours.* However, the **v0.37.1 backport release** is currently in progress (PR #16467), cherry-picking critical fixes and partner node integrations (such as Tencent Hunyuan Image 3.5) onto the stable branch.

## 3. Hot Issues
Here are 10 of the most critical and noteworthy issues updated or opened recently:

*   **[#16433] Qwen-Image-2.1 VAE Encode Broken on MPS**: A critical bug where the VAE encode/decode round-trip on Apple Silicon (MPS) silently corrupts images, dropping the PSNR to a devastating 6.6 dB (compared to 49.1 dB on CPU). This breaks all image-editing workflows on Mac.
    *   *Link:* https://github.com/Comfy

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

Thinking Process:

1.  **Analyze the Request:**
    *   Target: Ollama community digest for 2026-09-23.
    *   Data source: GitHub data from `github.com/ollama/ollama` (provided in the prompt).
    *   Sections required:
        1.  *Today's Highlights* - 2-3 sentences summarizing the most important updates.
        2.  *Releases* - Summarize changes if new versions exist, omit if none (data says "None").
        3.  *Hot Issues* - Pick 10 noteworthy Issues, explain why they matter and community reaction (with links).
        4.  *Key PR Progress* - Pick 10 important PRs, describe features or fixes (with links).
        5.  *Feature Request Trends* - Distill the most-requested feature directions from all Issues.
        6.  *Developer Pain Points* - Summarize recurring developer frustrations or high-frequency requests.
    *   Style: Concise, professional, suited for technical developers. Include GitHub links.

2.  **Analyze the Data:**
    *   *Latest Releases*: None (omit the Releases section or state no releases in the last 24h).
    *   *Latest Issues* (Total 35, top 30 shown):
        *   #17778 [OPEN] [bug] qwen 3.8 reports error during query: Error: ResponseError during chat streaming: no user query found in messages (status code: 500) - 44 comments, 26 👍. (High priority bug, tool calling loop issue).
        *   #10333 [OPEN] [good first issue] CLI: image path not recognized correctly - 24 comments. (Path escaping issue on macOS).
        *   #15626 [CLOSED] [feature request] Expose `max_soft_tokens` (image token budget) as a runtime parameter for Gemma 4 models - 19 comments, 28 👍. (Vision token limit hardcoded).
        *   #11798 [OPEN] Feature Request: Add Audio Input Support for Multimodal Models - 15 comments, 40 👍. (Audio input like Qwen2-Audio).
        *   #17961 [CLOSED] [bug, needs more info] Qwen3.8:27B on Ollama + Claude Code setup having incomplete responses - 11 comments. (Truncated responses).
        *   #13949 [OPEN] [bug] Ollama API Compatibility Issue with Claude Code / Anthropic CLI - 10 comments, 3 👍. (Anthropic-compatible endpoint `/v1/messages` issues).
        *   #15887 [OPEN] [model, cloud] I suggest adding the MIMO v2.5 LLM to Ollama Cloud - 7 comments, 17 👍. (Xiaomi MiMo).
        *   #18368 [OPEN] [bug, app, macos] Chat processing fails silently after 60.0 seconds with no GUI notification (macOS GUI) - 7 comments. (Silent timeout crash/hang).
        *   #16599 [OPEN] [bug] 0.30.6 spreading model across GPUs even though one GPU has enough VRAM - 6 comments. (GPU splitting heuristic issue).
        *   #18151 [CLOSED] [feature request] qwen3-vl and other video models can't be used with video - 6 comments. (No native video input support).
        *   #18593 [CLOSED] macOS app 0.34: UI hangs because ChatGPT/Codex detection runs osascript on the main thread - 4 comments. (UI freeze bug).
        *   #18225 [CLOSED] [needs more info] [Bug] 0.33.x: ~5x slower token generation than 0.32.13 on CUDA (RTX 3090) - 4 comments. (Performance regression).
        *   #17788 [CLOSED] [bug] offload and layer split is weird - 4 comments. (Layer split percentage display weirdness).
        *   #18597 [OPEN] [bug] homebrew installed ollama cannot provide structured output when running mlx model - 3 comments. (xgrammar library missing).
        *   #10929 [CLOSED] [bug, thinking] Ollama produces invalid JSON when using thinking mode with structured output - 3 comments, 9 👍. (Thinking mode + format bug).
        *   #14196 [CLOSED] [feature request] Delayed Constrained Decoding for Thinking with JSON/Structured Outputs - 2 comments. (Suppress thinking during JSON format).
        *   #17544 [CLOSED] /api/generate silently ignores think when format is set; /api/chat does not - 2 comments. (Inconsistency between endpoints).
        *   #17673 [OPEN] [feature request] custom tools (OpenAI Responses API compatibility) - 2 comments. (Custom tools support).
        *   #18129 [CLOSED] [needs more info] Scheduler restarts llama-server with default context (4096) immediately after a successful load - 2 comments. (Scheduler context reset bug).
        *   #17152 [CLOSED] [Bug] Ollama hardcodes Gemma 4 image token budget (max_soft_tokens=280), breaking OCR on high-resolution images - 1 comment, 3 👍. (Related to #15626).
        *   #18293 [OPEN] [bug, cloud] Frequent model unavailable errors - 1 comment, 2 👍. (Cloud connectivity/stability).
        *   #18544 [OPEN] [feature request] Support CLAUDE_CODE_AUTO_MODE_SERVER=1 - 1 comment. (Claude Code integration).
        *   #18595 [OPEN] [bug] macOS 0.33.0: no garbage collection for orphaned blobs - 1 comment. (Storage bloat).
        *   #18590 [CLOSED] top_logprobs is capped at 20, but nothing downstream requires that - 1 comment. (Logprobs cap limit).
        *   #18579 [CLOSED] Cannot get the log probability of a specific token unless it ranks in top_logprobs - 1 comment. (Logprobs completeness).
        *   #18429 [CLOSED] Hi Ollama - 1 comment. (General feature request).
        *   #18412 [OPEN] [needs more info] Linux hybrid graphics (Intel iGPU + NVIDIA RTX 4080): llama-server crashes with SIGABRT - 1 comment. (Hybrid graphics crash).
        *   #18217 [CLOSED] [feature request] Support authenticating via API_KEY with the cli tool - 1 comment. (CLI auth).
        *   #17627 [OPEN] [bug, needs more info] llama-server crashes with exit status 0xc0000409 (stack-based buffer overrun) on CUDA initialization - 1 comment. (Crash on CUDA init).
        *   #18106 [CLOSED] llama-server runner leaks host memory linearly with request count (~5-12 MiB/req) - 1 comment. (Memory leak).

    *   *Latest Pull Requests* (Total 32, top 20 shown):
        *   #18555 [OPEN] app: don't animate sidebar on load (UI fix).
        *   #18596 [OPEN] launch: default Claude Code to client-side auto checks.
        *   #18603 [OPEN] mlx: select Gemma 4 image resolution dynamically (Addresses dynamic image token budget for MLX).
        *   #18602 [OPEN] feat: allow ten web searches per response (Web search limits).
        *   #17154 [CLOSED] llm: raise and expose Gemma 4 image token budget (Closes #17152).
        *   #18577 [CLOSED] llama.cpp: version update.
        *   #18578 [OPEN] cmd/server: add ollama export and import commands (Offline model transfer).
        *   #18488 [OPEN] feat: implement full jsonschema spec (Tool parameter schema completeness).
        *   #18601 [CLOSED] app: avoid System Events for ChatGPT/Codex detection (macOS UI responsiveness fix).
        *   #18514 [OPEN] app: restore Apps list and improve connection feedback.
        *   #17531 [OPEN] openai: emit response.failed when generation fails mid-stream (Streaming error handling).
        *   #18600 [OPEN] tools: clear the parser buffer after flushing it as content (Double streaming byte bug).
        *   #18553 [OPEN] app: add read aloud for assistant responses (Text-to-speech).
        *   #18599 [OPEN] docs: troubleshoot "unknown model architecture".
        *   #18583 [OPEN] launch: make managed auth permission test portable (Windows POSIX perms fix).
        *   #18592 [OPEN] docker: add missing libraries and configs for Nvidia MLX/Vulkan (Docker support).
        *   #18598 [OPEN] app: defer Settings model discovery.
        *   #18479 [CLOSED] server: apply structured outputs in a single pass on thinking models (Structured output optimization).
        *   #18438 [CLOSED] server: fix intermittent "model not found" errors (Canonicalization fix).
        *   #17972 [OPEN] feat: Add GraniteForCausalLM support in experimental models and mlxrunner (IBM Granite support).

3.  **Drafting the Sections:**

    *   **Today's Highlights:**
        *   Focus on the major themes: MLX and vision improvements (especially Gemma 4 dynamic token budgets), structured output and thinking mode fixes, and improved developer tool integrations (Claude Code, export/import commands).
        *   Draft: "The Ollama community is actively tackling critical bugs in structured output handling, particularly around thinking models and JSON generation, while advancing multimodal features like dynamic Gemma 4 image token budgets on MLX. Significant progress is also being made on developer tooling, including official export/import commands and Claude Code integrations."

    *   **Releases:**
        *   State clearly: "No new releases were published in the last 24 hours."

    *   **Hot Issues (Pick 10 noteworthy Issues):**
        *   Need to select 10 issues that represent key bugs, feature requests, and community interest.
        *   1. **#17778 (High Priority Bug: Qwen 3.8 streaming error)**: 500 error during tool calling loop with large context (205000k). High activity (44 comments, 26 👍) showing community impact on agent workflows.
        *   2. **#11798 (Major Feature Request: Audio Input Support)**: 40 👍. Users want multimodal audio inputs (e.g., Qwen2-Audio) to match image input capabilities.
        *   3. **#15626 (Feature request: Expose `max_soft_tokens`)**: 28 👍. Crucial for OCR and high-resolution image handling in Gemma 4 (related to #17152).
        *   4. **#10333 (CLI Image Path Bug)**: Common issue when dragging images into the CLI on macOS (path escaping issues with spaces and special characters).
        *   5. **#13949 (API Compatibility with Claude Code / Anthropic CLI)**: Incompatibilities with Anthropic endpoints (`/v1/messages`) blocking Claude Code usage with local models.
        *   6. **#18368 (macOS GUI silent timeout)**: Long document processing fails silently after 60 seconds without GUI notification, causing user frustration.
        *   7. **#16599 (GPU splitting heuristic)**: Model spreading across GPUs even when one GPU has sufficient VRAM, hurting performance for users with mixed setups (e.g., 3090 + 4060).
        *   8. **#18597 (Homebrew structured output failure)**: xgrammar library issue preventing structured output on macOS/Homebrew MLX setups.
        *   9. **#15887 (Model Request: Xiaomi MIMO v2.5)**: Popular request for Xiaomi's million-token context model on Ollama Cloud.
        *   10. **#18595 (macOS orphaned blob storage leak)**: Lack of garbage collection for orphaned model blobs leading to severe disk space waste (e.g., 21GB orphan).
        *   *Self-Correction on selection*: Ensure a balance of bugs and highly upvoted feature requests. Let's write concise explanations for each of the 10.

    *   **Key PR Progress (Pick 10 important PRs):**
        *   1. **#18603 (mlx: select Gemma 4 image resolution dynamically)**: Addresses the hardcoded token budget issue dynamically per image, preserving high-res details.
        *   2. **#17154 (llm: raise and expose Gemma 4 image token budget)**: Closes the hardcoded budget issue (#17152), allowing configuration of visual tokens.
        *   3. **#18578 (cmd/server: add ollama export and import commands)**: Introduces official offline model transfer (`ollama export/import` and API endpoints), solving content-addressed blob transfer pain points.
        *   4. **#18488 (feat: implement full jsonschema spec)**: Enhances tool parameter schema support to full draft-07/2020-12, preserving unknown keywords for robust tool calling.
        *   5. **#18479 (server: apply structured outputs in a single pass on thinking models)**: Major optimization avoiding double prefill/generation overhead when combining thinking models with JSON schemas.
        *   6. **#18600 (tools: clear the parser buffer after flushing it as content)**: Fixes a critical streaming parser bug where bytes could be handed to the client twice.
        *   7. **#17531 (openai: emit response.failed when generation fails mid-stream)**: Fixes silent stream closure on generation failure, helping clients handle errors gracefully.
        *   8. **#18592 (docker: add missing libraries and configs for Nvidia MLX/Vulkan)**: Fixes Docker container support for Nvidia devices using MLX and Vulkan backends.
        *   9. **#17972 (feat: Add GraniteForCausalLM support in mlxrunner)**: Expands backend support to IBM Granite 4.1 models in the MLX backend.
        *   10. **#18602 (feat: allow ten web searches per response)**: Increases the default limit of web searches per response from 3 to 10, enhancing agent search capabilities.
        *   *Alternative addition*: **#18553 (app: add read aloud)** adds text-to-speech, or **#18599 (docs)** adds helpful troubleshooting. Let's stick to the technical list above, maybe swap one for **#18596 (launch: default Claude Code to client-side auto checks)** if relevant, but the technical ones are stronger.

    *   **Feature Request Trends:**
        *   Summarize the core requests:
            *   *Multimodal Expansion*: Heavy demand for native audio input support (e.g., #11798) and video input support (e.g., #18151) to match image capabilities.
            *   *Configurable Vision Parameters*: Exposing model-specific parameters like `max_soft_tokens` for Gemma 4 (#15626) to optimize OCR and high-res image processing.
            *   *Advanced Tool Calling & Schema Support*: Full JSON Schema spec implementation (#18488) and custom tools support matching OpenAI's Responses API (#17673).
            *   *Thinking + Structured Output Coexistence*: "Delayed Constrained Decoding" (#14196) to allow models to think unconstrained before formatting final JSON output.
            *   *Agent & CLI Integration Enhancements*: Better Claude Code compatibility (#13944, #18544) and API key authentication for the CLI (#18217).

    *   **Developer Pain Points:**
        *   Recurring issues developers face based on the data:
            *   *Structured Output & Thinking Mode Inconsistencies*: Bugs like invalid JSON generation in thinking mode (#10929), silent ignoring of `think` in `/api/generate` when `format` is set (#17544), and the performance overhead of double generation when combining both (#18479).
            *   *Environment & Platform Instability*: macOS-specific bugs like UI freezing due to system event checks (#18593), silent timeouts (#18368), and orphaned blob storage bloat (#18595).
            *   *GPU and Hardware Heuristics*: Frustration with automatic GPU layer splitting (#16599) and crashes on hybrid graphics setups (#18412) or CUDA initialization stack overruns (#17627).
            *   *API Compatibility Gaps*: Friction when using Ollama as a drop-in replacement for OpenAI/Anthropic APIs, particularly with Claude Code CLI (#13949) and streaming failure events (#17531).

4.  **Review and Refine:**
    *   Check date: 2026-09-23 (Matches prompt).
    *   Check links format: `URL: ollama/ollama Issue #XXXX` -> convert to standard markdown links `https://github.com/ollama/ollama/issues/XXXX` or use the provided URL text. The prompt provides URLs like `ollama/ollama Issue #17778`. I will write them out as standard GitHub links: `

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>



# llama.cpp Community Digest — 2026-09-23

An analysis of the latest developments, issues, and pull requests from the [ggerganov/llama.cpp](https://github.com/ggerganov/llama.cpp) repository.

---

### 1. Today's Highlights
The past 24 hours saw a rapid succession of minor releases (b11104 through b11115) focusing heavily on server stability, backend-specific optimizations, and multimodal improvements. Key highlights include a critical fix for server router eviction races, the addition of OpenCL binary kernels for quantized models, and significant work on Vulkan Intel Xe flash attention. On the community side, discussions are heavily focused on speculative decoding correctness on quantized targets and high demand for disk-based context offloading.

---

### 2. Releases
Several releases were published in the last 24 hours, addressing critical bugs,

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*