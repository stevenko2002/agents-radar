# AI CLI Tools Community Digest 2026-09-27

> Generated: 2026-09-26 22:15 UTC | Tools covered: 12

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



Here is the brief "Today's Highlights" summary of the most important updates across all tracked AI developer tools for 2026-09-27:

* **Qwen Code shipped v0.24.6** across CLI, Desktop, and TypeScript SDK with no known breaking changes, bundling CLI 0.24.6 and managed-runtime work for the Java SDK. ([Link](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.6))
* **OpenAI Codex released multiple Rust toolchain updates** (`rust-v0.159.0-alpha.6` down to `rust-v0.157.1`), focusing on stabilizing the desktop client and TUI rendering fidelity (Markdown tables, math expressions, and Mermaid parsing). ([Link](https://github.com/openai/codex/releases))
* **Pi merged a major feature PR (#10040) adding Codemode and MCP support**, significantly expanding its sandbox execution and tool integration capabilities. ([Link](https://github.com/earendil-works/pi/pull/10040))
* **Qwen Code advanced its Managed Agent architecture** with PR #11206 adding persistent shared-thread agent collaboration, interjection, cancellation, and review history. ([Link](https://github.com/QwenLM/qwen-code/pull/11206))
* **Ollama introduced the System One scoring API (PR #18606)** via `POST /v1/systemone`, enabling structured decisions using local Nimble and Tev models. ([Link](https://github.com/ollama/ollama/pull/18606))
* **llama.cpp shipped backend optimizations** including CUDA support for Nemotron 3 Puzzle SSM scan state-size 96 (PR #28717), tiled `mul_mat` for k-quants on ggml-cpu (PR #27851), and Ling 3.0 VL model support (PR #29151). ([Link](https://github.com/ggml-org/llama.cpp/releases))
* **OpenCode merged critical stability fixes**, including a webfetch timeout body read fix (#45235), failed turn recovery with another model (#45228), and warm PowerShell workers on Windows (#45138). ([Link](https://github.com/anomalyco/opencode/pull/45235))
* **ComfyUI merged security and correctness fixes**, notably redacting sensitive headers in API node logs (#16590) and fixing alpha scaling for direct LoKr matrices (#16583). ([Link](https://github.com/Comfy-Org/ComfyUI/pull/16590))

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the Claude Code Skills community highlights report based on the provided data.

Note: The "Comments" field for all PRs is `undefined`, so the ranking is based on PR number (recency) and activity (last updated date) as a proxy for attention.

---

## 1. Top Skills Ranking (by PR Recency & Activity)

### #1771 — proofcore-contract-auditor
- **Status:** Open
- **Author:** ProofCore-Protocol
- **Link:** [PR #1771](https://github.com/anthropics/skills/pull/1771)
- **Functionality:** An Agent Skill for Web3 developers that performs automated static analysis of Solidity and Rust smart contracts and anchors cryptographic audit proofs onto the public TON Blockchain using ProofCore's zero-storage Merkle protocol.
- **Discussion Highlights:** This PR represents a specialized vertical skill, extending Claude Code's capabilities into the Web3 and smart contract auditing space with on-chain proof anchoring.

### #1742 — fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers
- **Status:** Open
- **Author:** Kuldeeep18
- **Link:** [PR #1742](https://github.com/anthropics/skills/pull/1742)
- **Functionality:** Updates the `mcp-builder` skill to support `mcp>=2.0.0`, where `streamablehttp_client` was renamed to `streamable_http_client`, and custom HTTP headers are configured via `create_mcp_http_client` / `http_client`.
- **Discussion Highlights:** Fixes Issue #1668. This is a critical compatibility fix for the MCP builder skill, ensuring it works with the latest MCP protocol versions.

### #1703 — md2video-audio
- **Status:** Open
- **Author:** 70v-Yoyo
- **Link:** [PR #1703](https://github.com/anthropics/skills/pull/1703)
- **Functionality:** A zero-cost skill that compiles Markdown documents into professional-grade MP4 videos with realistic human-like voiceovers, using Marp for slide conversion.
- **Discussion Highlights:** This skill bridges the gap between text-based content and multimedia production, enabling automated video generation from Markdown.

### #1734 — Detect orphaned docx comments
- **Status:** Open
- **Author:** rohitjain25
- **Link:** [PR #1734](https://github.com/anthropics/skills/pull/1734)
- **Functionality:** Adds functionality to detect orphaned comments in DOCX documents.
- **Discussion Highlights:** A quality-assurance skill for document processing, addressing a common pain point in document generation workflows.

### #1792 — fix(docx): report LibreOffice timeout as an error and verify the output
- **Status:** Open
- **Author:** TINGyu123644
- **Link:** [PR #1792](https://github.com/anthropics/skills/pull/1792)
- **Functionality:** Fixes the DOCX skill to report LibreOffice timeouts as errors and verifies that the output DOCX no longer carries revision marks (`w:ins` / `w:del` / `w:moveFrom` / `w:moveTo`).
- **Discussion Highlights:** Improves the reliability of the DOCX skill by preventing false success reports and ensuring output quality.

### #1776 — blast-radius
- **Status:** Open
- **Author:** kishormorol
- **Link:** [PR #1776](https://github.com/anthropics/skills/pull/1776)
- **Functionality:** A checklist skill for the moment before a bulk or destructive write (e.g., archiving users, revoking access, deleting rows, mailing a batch). It covers the gap between a query being right about *rows* and a bulk operation being right about *the world*.
- **Discussion Highlights:** Addresses a critical operational risk in data management, providing a safety checklist for destructive operations.

### #1681 — fix(skill-creator): support direct execution of package_skill.py and update usage paths
- **Status:** Open
- **Author:** Kuldeeep18
- **Link:** [PR #1681](https://github.com/anthropics/skills/pull/1681)
- **Functionality:** Fixes the `skill-creator` skill to support direct execution of `package_skill.py` as a standalone script and updates outdated usage paths in docstrings and CLI help messages.
- **Discussion Highlights:** Improves the developer experience for skill creators by fixing a `ModuleNotFoundError` and updating documentation.

### #1298 — fix(skill-creator): isolate trigger evals and handle Windows and runtime failures
- **Status:** Open
- **Author:** MartinCajiao
- **Link:** [PR #1298](https://github.com/anthropics/skills/pull/1298)
- **Functionality:** Fixes the `skill-creator` skill's trigger evaluation to isolate per-worker command probes, handle `select()` on subprocess pipes failures on Windows, and prevent unrelated tools from stopping the scan. It also handles runtime failures that incorrectly pass negative examples.
- **Discussion Highlights:** A significant quality-of-life fix for skill creators, addressing cross-platform compatibility and evaluation accuracy.

---

## 2. Community Demand Trends (from Issues)

The most-anticipated new Skill directions, distilled from top issues:

- **Workflow Automation & Sharing:** Issue #228 (16 comments, 8 👍) demands org-wide skill sharing in Claude.ai, highlighting the need for collaborative skill libraries.
- **Security & Trust Boundaries:** Issue #492 (43 comments, 2 👍) raises concerns about community skills distributed under the `anthropic/` namespace, indicating a strong demand for trust and security-focused skills.
- **Testing & Quality Assurance:** Issue #556 (12 comments, 7 👍) reports that `run_eval.py` never triggers skills, pointing to a demand for better testing and evaluation tools.
- **Documentation & Typography:** Issue #514 (PR) addresses typographic quality control in generated documents, reflecting a demand for professional-grade document generation skills.
- **Code Review & Governance:** Issue #412 (6 comments) proposes an `agent-governance` skill for safety patterns in AI agent systems, indicating interest in operational safety.
- **Multimedia Production:** PR #1703 (md2video-audio) shows demand for skills that convert text into multimedia (video, audio).
- **Web3 & Blockchain:** PR #1771 (proofcore-contract-auditor) shows demand for specialized skills in emerging technical domains.

---

## 3. High-Potential Pending Skills (Active PRs)

These PRs are recently updated and may land soon:

- **#1742** — `mcp-builder` compatibility fix (updated 2026-09-26)
- **#1681** — `skill-creator` direct execution fix (updated 2026-09-26)
- **#1734** — Detect orphaned docx comments (updated 2026-09-25)
- **#1792** — DOCX LibreOffice timeout fix (updated 2026-09-25)
- **#1245** — Notion spec-to-implementation and quantitative-resume-auditor skills (updated 2026-09-24)
- **#525** — Pyxel skill for retro game development (updated 2026-09-22)

---

## 4. Skills Ecosystem Insight

The community's most concentrated demand is for **trust, security, and operational safety** in the Skills ecosystem, as evidenced by the high-engagement Issue #492 (namespace impersonation) and the growing number of skills focused on governance, blast-radius checklists, and quality assurance.

---



# Claude Code Community Digest — 2026-09-27

---

## 1. Today's Highlights

No new releases shipped in the last 24 hours, but the issue tracker remains active with several high-impact bugs surfacing around desktop app stability, permission handling, and post-crash session recovery. The most-discussed open issue (#79919) concerns prompt suggestions silently failing in the GUI despite being explicitly enabled — a feature that should "just work" but doesn't. Meanwhile, security-adjacent reports around unapproved tool executions and fragile hook-based permission bypasses continue to draw community attention.

---

## 2. Releases

*No new releases in the past 24 hours.*

---

## 3. Hot Issues

### #79919 — Prompt suggestions never appear in GUI app despite `promptSuggestionEnabled: true` 🔥
**Status:** OPEN | Author: AlexandreHandivia | [Link](https://github.com/anthropics/claude-code/issues/79919)

Ghost-text suggestions (Tab to accept) are completely absent from the desktop/web GUI even when the setting is toggled on. This is a core UX feature that's silently broken across graphical clients. The issue has 7 comments and a 👍, indicating broad impact. Community reaction is frustration — users expect the setting to work as documented.

### #73341 — `cmd C` broken on macOS TUI
**Status:** OPEN (duplicate) | Author: tortufello-hub | [Link](https://github.com/anthropics/claude-code/issues/73341)

The standard `cmd C` copy shortcut is non-functional in the macOS terminal interface. Affects daily workflow for anyone relying on keyboard shortcuts in the TUI. 5 comments, 1 👍.

### #75400 — `/compact` hangs indefinitely in desktop local-agent multi-session mode
**Status:** CLOSED | Author: csimpsonprepsportswear | [Link](https://github.com/anthropics/claude-code/issues/75400)

In the desktop app's Code/Cowork multi-session UI, invoking `/compact` on a large session causes an infinite hang — process alive, transcript frozen, counter climbing forever with no error or recovery path. This is a critical data-loss risk for users with long-running sessions. 4 comments.

### #69397 — PowerShell tool executed destructive command with no permission prompt
**Status:** OPEN | Author: thancyya | [Link](https://github.com/anthropics/claude-code/issues/69397)

A destructive PowerShell command ran without surfacing a permission prompt, and no event was recorded in the transcript. This is a serious security/permission regression — users expect every tool call requiring approval to trigger a prompt. 3 comments.

### #72622 — Windows system-tray icon invisible when theme differs from taskbar mode
**Status:** OPEN (invalid) | Author: ascetum | [Link](https://github.com/anthropics/claude-code/issues/72622)

Wrong-contrast glyph selected for the tray icon when app theme doesn't match Windows taskbar mode, rendering it invisible. Mirror of #65343. 3 comments, 4 👍 — the highest👍 count in this batch, showing strong community consensus on visibility being a blocker.

### #80264 — Case-insensitive filesystems create duplicate project entries
**Status:** OPEN | Author: dstoll7 | [Link](https://github.com/anthropics/claude-code/issues/80264)

On macOS/APFS and Windows/NTFS, launching from a differently-cased path to the same directory produces duplicate project entries because the project list keys by literal path string. A real annoyance for developers who navigate via symlinks or alternate case. 3 comments.

### #75510 — Permission-request stream retried ~128 times with no backoff
**Status:** CLOSED | Author: missioncitypm | [Link](https://github.com/anthropics/claude-code/issues/75510)

Session transcript analysis revealed a tool permission request failing with "Stream closed" triggered ~128 identical retries with no exponential backoff. A resource-waste and potential DoS vector inside the harness. 2 comments.

### #75533 — Plan mode: chat text not displayed when ExitPlanMode called with plan rejection
**Status:** CLOSED | Author: jloftus-mercer | [Link](https://github.com/anthropics/claude-code/issues/75533)

In VS Code with plan mode active, assistant chat text is never rendered when the turn ends with `ExitPlanMode` and the plan is rejected. Users see a blank turn — confusing and breaks the plan-approval workflow. 2 comments, has repro.

### #75360 — Permission dialog silently steals focus, destroying typed input
**Status:** CLOSED | Author: DenkoChojojama | [Link](https://github.com/anthropics/claude-code/issues/75360)

When a permission dialog appears mid-keystroke, focus is stolen silently and everything the user typed is lost with no recovery. An accessibility issue compounded by lack of warning. 2 comments, 3 👍.

### #75330 — Claude performed actions that were not approved
**Status:** CLOSED | Author: savagejen | [Link](https://github.com/anthropics/claude-code/issues/75330)

Users report Claude executing actions without surfacing approval prompts. Overlaps with #69397 — a pattern suggesting permission-prompt reliability is a systemic concern across platforms (macOS, VS Code, Bedrock). 2 comments.

---

## 4. Key PR Progress

### #97334 — sec-default: conversation rows persist past user tier
**Author:** poteat | [Link](https://github.com/anthropics/claude-code/pull/97334)

Security-focused change ensuring conversation rows continue past the user tier. Merge order is gated on the engine having `session.append` on main with no live release branch lacking it. The `test` check is red by construction until a released CLI carries the event. **Significance:** hardens session persistence guarantees; a prerequisite for reliable long-context conversations.

### #97293 — mods: declarations carry `process.run` truncation flags and `list` mtimeMs
**Author:** poteat | [Link](https://github.com/anthropics/claude-code/pull/97293)

Adds `isStdoutTruncated` / `isStderrTruncated` to `$.process.run` results and `mtimeMs` to `$.fs.list` entries. Arms only when the released npm CLI carries both fields — until then the declarations would promise what the installed CLI doesn't yet answer. **Significance:** improves tool-output observability (truncation awareness) and filesystem metadata completeness for mods/plugins.

### #41611 — add the missing source to Claude Code
**Author:** tornikeo | [Link](https://github.com/anthropics/claude-code/pull/41611)

Long-lived PR (created March, updated September) adding a missing source attribution. Low comment activity but touches attribution/compliance surface. **Significance:** likely a metadata/source-labeling fix for the codebase or packaging.

---

## 5. Feature Request Trends

Distilling from the issue pool, the most-requested feature directions are:

1. **IDE/Editor integration parity** — VS Code extension requests dominate: opening existing conversations regardless of working directory (#88127), better plan-mode rendering (#75533), and native panel behavior consistency. Users want the VS Code extension to feel like a first-class citizen rather than an afterthought.
2. **Desktop app (Cowork) organization UX** — pinning projects should not orphan sessions from Recents (#78233); browser shortcuts need to be consistently present across Enterprise/personal tiers (#80316); Squirrel→MSIX migration shouldn't orphan shortcuts (#76980). The desktop app's organizational features are requested but ship with surprising gaps.
3. **Permission & approval workflow hardening** — multiple reports converge on permission prompt reliability: missing prompts (#69397, #75330), focus-stealing dialogs (#75360), retry storms (#75510). The community wants predictable, non-destructive approval flows.
4. **Plugin/marketplace robustness** — git submodule cloning during plugin install from marketplace `source: url` entries (#88074). Plugin discovery and dependency resolution need improvement.
5. **Accessibility & UI polish** — tray icon contrast (#72622), theme reactivity on Linux (#77171), model-color distinguishability in usage graphs (#96312, #96311 — Sonnet 5 vs Opus 5 blues too similar). Small but high-frequency UX wins.

---

## 6. Developer Pain Points

Recurring frustrations emerging from this digest:

- **Permission system is the top reliability concern.** Three separate issues (#69397, #75330, #75510) describe permission prompts either not appearing, appearing at the wrong time, or triggering retry storms. Developers building on Claude Code can't trust the approval layer.
- **Desktop app stability lags behind CLI.** `/compact` hangs indefinitely (#75400), prompt suggestions don't render (#79919), and installation fails on Windows 11 after 5 minutes (#75485). The desktop wrapper introduces bugs the CLI doesn't have.
- **Session recovery after crashes is fragile.** Post-crash `--resume` sessions dead-ACK new Agent spawns with no failure signal (#80315). Developers lose work continuity after any host crash.
- **Case-sensitivity assumptions break on macOS/Windows.** Duplicate project entries from differently-cased paths (#80264) and tilde-expansion resolving relative to project root instead of home (#75271) reveal lingering *nix assumptions in cross-platform code.
- **Hook security is only as strong as the regex.** The hook-creation flow ships fragile bash one-liners that fail on common bypasses (#77177) — developers get a false sense of security from auto-generated permission hooks.
- **Model behavior inconsistency** between individual and enterprise accounts (#95591), excessive content flagging on benign input like "Hi" (#95533), and credit/billing failures (#95574) point to backend-side issues that developers have no visibility into or control over.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Thinking Process:

1.  **Analyze the Request:**
    *   **Role:** Technical analyst focused on AI developer tools.
    *   **Subject:** OpenAI Codex community digest for 2026-09-27 (based on provided GitHub data).
    *   **Sections needed:**
        1.  *Today's Highlights* - 2-3 sentences summarizing the most important updates.
        2.  *Releases* - Summarize changes if new versions exist (based on the provided release list).
        3.  *Hot Issues* - Pick 10 noteworthy Issues, explain why they matter and community reaction (with links).
        4.  *Key PR Progress* - Pick 10 important PRs, describe features or fixes (with links).
        5.  *Feature Request Trends* - Distill the most-requested feature directions from all Issues.
        6.  *Developer Pain Points* - Summarize recurring developer frustrations or high-frequency requests.
    *   **Style:** Concise, professional, suited for technical developers. Include GitHub links.

2.  **Analyze the Data:**
    *   **Latest Releases (last 24h):**
        *   `rust-v0.159.0-alpha.6`, `rust-v0.159.0-alpha.5`, `rust-v0.159.0-alpha.4`
        *   `rust-v0.158.0-alpha.2.1`, `rust-v0.158.0-alpha.15.1`
        *   `rust-v0.157.1` (Chores; release highlights could not be determined due to empty PR index / 404 tag comparison).
        *   Changelog link: `https://github.com/openai/codex/compare/rust-v0.157.0...rust-v0.157.1`
    *   **Latest Issues (total 50, top 30 by comment count shown in prompt):**
        *   #48212 (OPEN, bug, app, app-server, Linux Desktop): Tasks stuck on "Starting your task"; CLI works. (34 comments, 29 👍)
        *   #48016 (CLOSED, bug, windows-os, CLI, app-server): can't start in windows. (29 comments, 17 👍)
        *   #48074 (OPEN, bug, windows-os, CLI, app-server): Windows terminal windows repeatedly flash during requests. (28 comments, 43 👍)
        *   #46949 (OPEN, bug, windows-os, mcp, CLI, app-server, remote): Windows remote-control daemon spawns visible console windows for tool and MCP child processes. (19 comments, 14 👍)
        *   #44736 (OPEN, bug, windows-os, mcp, app, config): Windows: ChatGPT project prewarming locks local mirrors; startup erases node_repl cwd workaround. (19 comments, 0 👍)
        *   #48333 (OPEN, bug, windows-os, mcp, app, app-server): Windows Codex Desktop stuck on startup spinner until app-server codex.exe is terminated. (16 comments, 5 👍)
        *   #18984 (OPEN, bug, windows-os, tool-calls): Windows: hide command-safety PowerShell parser process to avoid pwsh.exe console flashes. (16 comments, 0 👍)
        *   #44768 (OPEN, bug, windows-os, CLI, hooks, app-server): Windows: app-server daemon opens a visible console window for every hook and shell command it runs. (11 comments, 3 👍)
        *   #32880 (OPEN, bug, windows-os, sandbox, app): Windows Desktop regression: Git writes stopped after update; workspace-write DENY ACL blocks linked worktrees. (10 comments, 0 👍)
        *   #33582 (OPEN, bug, app, performance): macOS app repeatedly grows to 55 GB and freezes the system. (9 comments, 1 👍)
        *   #48313 (OPEN, bug, windows-os, app): Windows app launches to a permanent blank white screen. (9 comments, 0 👍)
        *   #48419 (OPEN, bug, app, app-server, Linux): Linux desktop app hangs on opening local Codex thread — hydration never sends thread/resume. (9 comments, 2 👍)
        *   #45596 (OPEN, bug, windows-os, app): Windows ChatGPT project mirror sync fails after Work helpers occupy mirror directory. (9 comments, 0 👍)
        *   #46951 (OPEN, bug, sandbox, tool-calls, app, browser): Browser control fails on macOS 13.7.8: TIOCSTI sandbox error. (7 comments, 1 👍)
        *   #48114 (OPEN, bug, windows-os, app): blank console windows open after launching codex. (7 comments, 4 👍)
        *   #36268 (OPEN, bug, auth, CLI, app, remote): Android "Authorize this phone" loops forever after ChatGPT app reinstall. (7 comments, 0 👍)
        *   #44504 (OPEN, bug, windows-os, app, app-server, remote): Desktop ships app-server 0.153.4, rejects its own feature keys and marks connected Remote state as failed. (6 comments, 0 👍)
        *   #20957 (OPEN, enhancement, app): Codex Desktop: add ChatGPT-style Read Aloud for responses. (6 comments, 21 👍)
        *   #31255 (OPEN, bug, sandbox, custom-model, app, safety-check): auto-review fails with "codex-auto-review" model name not supported. (6 comments, 1 👍)
        *   #48522 (OPEN, bug, windows-os, app): Windows desktop app stuck on infinite loading spinner. (6 comments, 0 👍)
        *   #46767 (OPEN, bug, windows-os, app, browser): Windows app: repeated main-process crashes during embedded browser tab lifecycle. (5 comments, 0 👍)
        *   #48453 (OPEN, bug, windows-os, app): Codex/ChatGPT Desktop APP Stopped working! Not Loading Anymore! (4 comments, 0 👍)
        *   #48402 (CLOSED, bug, windows-os, auth, app, connectivity): Windows Codex app repeatedly reconnects / waiting for network; remote turn previously fails with 401. (3 comments, 0 👍)
        *   #48504 (OPEN, bug, windows-os, mcp, app, connectivity): Windows MCP HTTP responses fail with "error decoding response body". (3 comments, 0 👍)
        *   #37965 (OPEN, bug, windows-os, app): Windows: .git owned by CodexSandboxOffline causes Codex project detection and Git clients to reject repository. (3 comments, 0 👍)
        *   #20413 (OPEN, bug, windows-os, app, performance): Windows: sidebar ghost trails/stale repaints at 120Hz. (3 comments, 0 👍)
        *   #48552 (OPEN, bug, windows-os, app): Windows Codex UI turns yellow on one monitor after update. (2 comments, 0 👍)
        *   #48545 (OPEN, bug, windows-os, auth, app, connectivity): Windows Codex still stuck on Reconnecting after Sep 26 mitigation. (2 comments, 0 👍)
        *   #43073 (OPEN, bug, windows-os, app, skills): Codex Desktop rejects OpenAI-curated plugin manifests using policy.products: CHAT. (2 comments, 0 👍)
        *   #39698 (OPEN, bug, windows-os, auth, app, connectivity, remote): Remote stops working after switching between personal and work accounts. (2 comments, 0 👍)

    *   **Latest Pull Requests (total 21, top 20 shown):**
        *   #48551 (CLOSED): Fix TUI math rendering for zero and big wedge expressions.
        *   #48549 (CLOSED): Preserve Markdown tables and whitespace when copying TUI responses.
        *   #48548 (CLOSED): Preserve table cell source metadata through TUI rendering.
        *   #48547 (CLOSED): Fade blossom replays back to the idle state.
        *   #48544 (CLOSED): Make onboarding login links easier to copy.
        *   #48531 (CLOSED): Add context to Windows sandbox runtime registration errors.
        *   #48513 (CLOSED): Refresh the TUI welcome screen for new sessions.
        *   #48508 (CLOSED): Preserve WebSocket continuations when steering a turn.
        *   #48502 (CLOSED): Fix ChatGPT browser sign-in for local app servers.
        *   #48491 (CLOSED): Fall back to embedded mode under restrictive Windows launchers.
        *   #48489 (CLOSED): Fix Mermaid shape, relationship, and state description parsing.
        *   #48483 (CLOSED): Prevent console windows for piped Windows child processes.
        *   #48469 (CLOSED): Default to copying transcript selections in more terminals.
        *   #48353 (CLOSED): Stabilize skill catalogs across executor availability changes.
        *   #48352 (CLOSED): Show turn tips while working and after completion in the TUI.
        *   #48350 (CLOSED): Display reconnect commands on a separate line.
        *   #48344 (CLOSED): Preserve tool metadata for OpenAI provider endpoint overrides.
        *   #48318 (CLOSED): Keep TUI reconnect attempts running until the shared deadline.
        *   #48272 (CLOSED): Prevent Windows daemon launches from retaining launcher stdio.
        *   #48238 (CLOSED): Suppress console windows for local Windows MCP servers.

3.  **Drafting the Sections:**

    *   **Section 1: Today's Highlights**
        *   Needs to synthesize the core narrative of the day.
        *   Key themes: Intensive dev activity fixing TUI rendering (Markdown tables, math, Mermaid), major focus on Windows desktop stability (blank white screens, loading spinners, console window flashing), and alpha releases rolling out (`v0.159.0-alpha.6` down to `v0.157.1`).
        *   Drafting: "The OpenAI Codex repository is experiencing a high volume of activity focused on stabilizing the desktop client and enhancing the TUI. Today saw multiple alpha releases pushed to the Rust toolchain, alongside critical bug fixes targeting Windows desktop startup failures and console window management. Significant progress has been made in TUI rendering fidelity, specifically addressing Markdown table copying, math expressions, and Mermaid diagram parsing."

    *   **Section 2: Releases**
        *   List the releases: `rust-v0.159.0-alpha.6`, `rust-v0.159.0-alpha.5`, `rust-v0.159.0-alpha.4`, `rust-v0.158.0-alpha.2.1`, `rust-v0.158.0-alpha.15.1`, and `rust-v0.157.1`.
        *   Note on `rust-v0.157.1`: Marked as "Chores" with empty release highlights/404 tag comparison.
        *   General summary: These are alpha/beta releases moving towards stability, with `v0.157.1` serving as a chore/cleanup release. No specific feature highlights were provided for the alpha releases due to empty PR indexes in the metadata, but they represent incremental builds on the `rust-v0.15x` branch. (Keep it concise and factual).

    *   **Section 3: Hot Issues (Pick 10 noteworthy Issues)**
        *   Let's select the 10 most impactful/interesting ones based on comments, likes, and technical significance.
        *   *Issue 1:* **#48212** - Linux Desktop tasks stuck on "Starting your task" while CLI works (34 comments, 29 👍). High impact on Linux desktop users, showing a disconnect between the App server and CLI.
        *   *Issue 2:* **#48074** - Windows terminal windows repeatedly flash during requests (28 comments, 43 👍). Major UX annoyance on Windows, highly liked.
        *   *Issue 3:* **#48016** - Can't start Codex on Windows (29 comments, 17 👍, CLOSED). Critical blocker for Windows users.
        *   *Issue 4:* **#46949** - Windows remote-control daemon spawns visible console windows for tool and MCP child processes (19 comments, 14 👍). Visual clutter and security/cleanliness issue on Windows.
        *   *Issue 5:* **#33582** - macOS app repeatedly grows to 55 GB and freezes the system (9 comments). Critical performance/regression issue on macOS.
        *   *Issue 6:* **#48333** - Windows Codex Desktop stuck on startup spinner until app-server codex.exe is terminated (16 comments). Startup blocker related to app-server lifecycle.
        *   *Issue 7:* **#48419** - Linux desktop app hangs on opening local Codex thread — hydration timeout (9 comments). Another major Linux desktop blocker.
        *   *Issue 8:* **#48313** - Windows app launches to a permanent blank white screen after update (9 comments). Critical UI render failure.
        *   *Issue 9:* **#32880** - Windows Desktop regression: Git writes stopped; workspace-write DENY ACL blocks linked worktrees (10 comments). Critical for git workflows.
        *   *Issue 10:* **#20957** - Feature request: Add ChatGPT-style Read Aloud for responses (6 comments, 21 👍). High community interest (21 likes) for an accessibility feature.
        *   Let's write concise explanations for each, highlighting why they matter and community reaction.

    *   **Section 4: Key PR Progress (Pick 10 important PRs)**
        *   Focus on the ones that represent significant fixes or feature updates.
        *   *PR 1:* **#48551** - Fix TUI math rendering for zero and big wedge expressions. (Improves LaTeX rendering edge cases).
        *   *PR 2:* **#48549** - Preserve Markdown tables and whitespace when copying TUI responses. (Crucial for developer copy-paste workflows).
        *   *PR 3:* **#48508** - Preserve WebSocket continuations when steering a turn. (Improves connection stability and state management during active sessions).
        *   *PR 4:* **#48483** - Prevent console windows for piped Windows child processes. (Addresses the visual clutter of console windows on Windows).
        *   *PR 5:* **#48491** - Fall back to embedded mode under restrictive Windows launchers. (Helps CLI usability under restricted environments like `cargo run`).
        *   *PR 6:* **#48502** - Fix ChatGPT browser sign-in for local app servers. (Fixes authentication flow edge cases).
        *   *PR 7:* **#48531** - Add context to Windows sandbox runtime registration errors. (Improves debuggability of Windows sandbox setup).
        *   *PR 8:* **#48489** - Fix Mermaid shape, relationship, and state description parsing. (Enhances diagram rendering fidelity).
        *   *PR 9:* **#48469** - Default to copying transcript selections in more terminals. (Improves UX across various terminal emulators).
        *   *PR 10:* **#48353** - Stabilize skill catalogs across executor availability changes. (Backend stability for cloud skills).
        *   Format nicely with links and brief technical descriptions of the changes.

    *   **Section 5: Feature Request Trends**
        *   Look at the issues for feature requests.
        *   The standout feature request is **#20957** (Read Aloud for Codex Desktop), showing strong community demand for accessibility and multi-modal interaction (21 👍).
        *   Other trends: Better Windows integration (suppressing console windows, fixing launcher issues), improved copy/paste fidelity (Markdown table preservation), and better terminal emulator compatibility (copy-on-select).
        *   Synthesize these into broader trends: Accessibility (text-to-speech/Read Aloud), developer workflow optimization (clipboard fidelity, terminal integration), and cross-platform parity (especially Windows desktop stability and macOS performance).

    *   **Section 6: Developer Pain Points**
        *   Recurring themes in the issues:
            *   *Windows Desktop Instability:* Blank screens, infinite loading spinners, app crashes, and console window flashing. Windows remains a highly problematic platform for the Codex desktop client.
            *   *Lifecycle & Process Management:* Issues around daemon spawning, stdio inheritance, console window allocation, and sandbox runtime registration. Managing background processes and child processes on Windows is a major pain point.
            *   *State Sync & Authentication:* Loops in authorization (Android "Authorize this phone"), state desync between desktop and app-server, and reconnection loops after network drops.
            *   *Filesystem and Git Integration:* Git write blocks due to sandbox ownership (`.git` owned by `CodexSandboxOffline`) and workspace write ACL issues blocking linked worktrees.
        *   Structure this section to summarize these recurring pain points clearly.

4.  **Review and Refine:**
    *   Check formatting: Ensure all sections are present, structured, and professional.
    *   Verify links: Use the provided URLs (e.g., `openai/codex Issue #48212` -> construct standard GitHub URL format if needed, or use the exact text provided). The prompt says "Include

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>



# Gemini CLI Community Digest — 2026-09-27

Welcome to the daily technical digest for the Google Gemini CLI repository, curated for AI developers and tooling engineers. Below is a structured analysis of the latest releases, community issues, pull request activity, and emerging trends from the past 24 hours.

---

### 1. Today's Highlights
The community focus over the last 24 hours has centered heavily on agent reliability, performance optimization, and security

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



# GitHub Copilot CLI Community Digest — 2026-09-27

## 1. Today's Highlights
The last 24 hours saw no new releases or pull requests on the `github/copilot-cli` repository, but community engagement remains high, focusing heavily on the stability of long-running sessions and Model Context Protocol (MCP) integrations. Key closed issues highlight ongoing fixes around critical memory heap out-of-memory crashes during session resumption and alternative model API integrations (such as DeepSeek), reflecting a maturing effort to stabilize CLI version 1.0.x.

## 2. Releases
*No new releases were published in the last 24 hours.*

## 3. Hot Issues
Here are the 10 most noteworthy issues driving community discussion:

*   **[CLOSED] #2995 - Can't use DeepSeek API (14 comments, 9 👍):** Users attempting to route Copilot CLI through the DeepSeek OpenAI-compatible API endpoint faced configuration blocks. This high-interaction issue underscores the strong community demand for robust multi-model provider compatibility outside of standard GitHub models.
*   **[CLOSED] #4664 - JavaScript heap out of memory crashes on session resume (9 comments, 2 👍):** A critical blocker where resuming large, long-standing sessions triggers fatal Node.js V8 heap out-of-memory errors. The community identifies this as a major hurdle for persistent, multi-day developer workflows.
*   **[OPEN] #4725 - Frequent JavaScript heap out of memory (7 comments, 1 👍):** An ongoing issue mirroring #4664, showing that general interactive sessions also suffer from progressive memory leaks or unhandled allocation failures over time.
*   **[CLOSED] #4753 - Session resume cancels in-flight stdio MCP server connections (5 comments, 2 👍):** A regression in v1.0.83 where resuming a session aggressively timed out (~1s) MCP server connections mid-initialization (compared to ~16s in v1.0.82), rendering external tool integrations completely broken on resume.
*   **[CLOSED] #4370 - MCP initialization failure when `server/discover` returns `-32602` (4 comments, 3 👍):** Copilot CLI failed to connect to MCP servers built using frameworks like FastMCP that strictly reject unimplemented methods. This represents key protocol alignment challenges.
*   **[CLOSED] #4160 - Plan mode over-blocks read-only shell commands (4 comments, 2 👍):** The security heuristic gating shell commands in Plan mode triggered false positives on safe, read-only commands based on superficial keyword matching, frustrating developers trying to inspect codebases safely.
*   **[OPEN] #2644 - Feature Request: Support Shift+Arrow and Ctrl+A text selection (4 comments, 2 👍):** A highly requested UX enhancement asking for standard GUI-style text editing shortcuts within the prompt input line to improve developer typing efficiency.
*   **[CLOSED] #1864 - Failed to resume session: Session file is corrupted (2 comments, 8 👍):** High community empathy (8 thumbs up) for users losing session state due to JSON syntax errors and corruption after unexpected power losses or crashes, leaving no easy recovery path.
*   **[CLOSED] #2368 - LSP server not found when configured via project-level `.github/lsp.json` (1 comment, 5 👍):** A configuration resolution bug where project-level LSP settings were ignored, breaking code intelligence for team workflows despite the file being correctly detected.
*   **[CLOSED] #3712 - Question: ReFS / Dev Drive local-sandbox limitations on Windows (3 comments, 4 👍):** A documentation-focused inquiry regarding Windows-specific sandbox compatibility with ReFS and Dev Drives, highlighting platform-specific edge cases for local execution.

## 4. Key PR Progress
*No pull requests were updated or submitted in the last 24 hours.*

## 5. Feature Request Trends
Analysis of the repository issues reveals several distinct trends in what the community wants for the CLI's future:

*   **Advanced Input and Keyboard UX:** Developers want standard terminal editing features, specifically support for standard text selection shortcuts (`Shift+Arrow`, `Ctrl+A`) and customizable escape key behaviors to prevent accidental cancellation of requests.
*   **Model and Authentication Flexibility:** Strong interest in using alternative model providers (like DeepSeek via OpenAI APIs) and custom authentication methods (like `bearerToken` for enterprise key-free/BYO-K setups).
*   **Granular Tool and Agent Configuration:** Requests for finer control over automated agents, such as making the built-in research agent's MCP tools configurable, disabling the `ask_user` tool globally, and allowing fine-grained command whitelist approvals instead of an all-or-nothing permission model.
*   **Dynamic UI/UX Elements:** Requests for dynamic UI windows (like auto-growing `/ask` and `/btw` overlays) and better localization support, such as French voice mode models.

## 6. Developer Pain Points
The recurring themes across the open and closed issues highlight several persistent friction points for developers:

*   **Memory Scalability Issues:** The V8 heap out-of-memory crashes during both active usage and session resumption (#4664, #4725) remain a significant pain point for developers working in

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



# OpenCode Community Digest — 2026-09-27

## Today's Highlights
OpenCode v2 migration friction dominates current discussions, with multiple critical bugs reported around ESC interruption, session processor retry loops, and subagent request validation failures. The community is actively requesting Agent Plugins standard support and parallel subagent limits, while several merged PRs address timeout handling, error recovery, and TUI stability.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **[#3699](https://github.com/anomalyco/opencode/issues/3699) ESC Interrupt Broken in v1.0.7** — A show-stopper bug where interrupting a session via ESC does nothing. The issue is marked closed but appears to have resurfaced in v2 as well ([#42960](https://github.com/anomalyco/opencode/issues/42960)). Community reaction is mixed, with users reporting the problem persists across versions. *(19 comments, 👍 1)*

2. **[#28492](https://github.com/anomalyco/opencode/issues/28492) MaxListenersExceededWarning on Web UI** — The web interface prints a memory leak warning after startup, indicating unbounded event listener registration. This suggests a resource management issue that could degrade performance over time. *(10 comments, 👍 6)*

3. **[#17648](https://github.com/anomalyco/opencode/issues/17648) Unbounded Session Processor Retries** — Transient upstream errors trigger infinite exponential backoff loops with no circuit breaker or max retries. This is a robustness concern that could waste API credits and stall workflows. *(8 comments, 👍 6)*

4. **[#49768](https://github.com/anomalyco/opencode/issues/49768) Paid Subscription Shown as Inactive** — Users who paid for OpenCode Go monthly subscriptions report all Go model requests failing with `Account.Disabled`. Payment evidence provided. This is a billing/account system issue affecting paying customers. *(8 comments, 👍 1)*

5. **[#40993](https://github.com/anomalyco/opencode/issues/40993) Agent Plugins Standard Support** — A feature request to support the vendor-neutral [Agent Plugins](https://agent-plugins.org/specification) packaging spec for bundling Agent Skills and MCP servers. This is a broad, multi-vendor effort with significant community interest. *(7 comments, 👍 15)*

6. **[#51269](https://github.com/anomalyco/opencode/issues/51269) Subagent LLM Request Validation Failure** — On v2.0.16, every subagent dispatch fails before generating output due to a schema validation error (`system[4]` is `InvalidType` against `LLM.SystemPart`). This effectively breaks subagent functionality. *(6 comments, 👍 0)*

7. **[#27110](https://github.com/anomalyco/opencode/issues/27110) Limit Parallel Subagents** — A highly-requested feature to cap the number of parallel subagents, especially important for users running local models with limited context/memory. *(6 comments, 👍 37)*

8. **[#51529](https://github.com/anomalyco/opencode/issues/51529) Desktop OOM Crash with 8 Parallel Agents** — OpenCode Desktop crashes with Out-of-Memory on Windows 11 when running 8 parallel agents. The renderer process is killed by the OS. *(5 comments, 👍 0)*

9. **[#46692](https://github.com/anomalyco/opencode/issues/46692) chunkTimeout and timeout Silently Ignored** — Provider config accepts `chunkTimeout` and `timeout` settings, but the v2 `packages/llm` path never reads them. Providers routed through v2 have no client-side stall bounds. *(4 comments, 👍 0)*

10. **[#32825](https://github.com/anomalyco/opencode/issues/32825) OPENCODE_CONFIG_DIR Resolution Inconsistency** — The old app config loader treats `OPENCODE_CONFIG_DIR` as an extra directory, but v2/core treats it as a replacement. This causes config loading differences between versions. *(4 comments, 👍 1)*

## Key PR Progress

1. **[#45235](https://github.com/anomalyco/opencode/pull/45235) webfetch timeout body read fix** — Applies the timeout guard to the response body read, not just the request. Prevents stalls from servers that respond headers promptly but delay the body. *(Closes #45229)*

2. **[#45228](https://github.com/anomalyco/opencode/pull/45228) Failed turn recovery with another model** — Adds an explicit recovery action for failed assistant turns, exposing structured provider details and enabling model fallback. *(Closes #41587)*

3. **[#45219](https://github.com/anomalyco/opencode/pull/45219) Plugin tool registration fix** — Fixes the Promise plugin adapter to support the documented `tools.add(name, definition, options)` signature, which previously only handled a single object argument. *(Closes #43753)*

4. **[#45218](https://github.com/anomalyco/opencode/pull/45218) Project favicon discovery** — Adds a location-aware endpoint that returns ranked favicon previews for selected worktrees, with UI for selecting and saving project icons.

5. **[#45207](https://github.com/anomalyco/opencode/pull/45207) Readable Effect errors in TUI** — Replaces generic `JSON.stringify` error formatting with structured Effect `Cause` display for better debugging. *(Closes #34925)*

6. **[#45205](https://github.com/anomalyco/opencode/pull/45205) Hebrew locale support** — Adds Hebrew (`he`) localization across app, UI, and desktop packages. *(Closes #42447)*

7. **[#45202](https://github.com/anomalyco/opencode/pull/45202) read tool rejects offset/limit of 0** — Fixes a loop condition where `limit: 0` caused infinite looping instead of being rejected. *(Closes #45200)*

8. **[#45182](https://github.com/anomalyco/opencode/pull/45182) Restore SSE payload schemas in OpenAPI** — Fixes the generated OpenAPI document to properly represent SSE data instead of opaque strings, making `V2Event` and `SessionLogItem` reachable. *(Closes #44911)*

9. **[#45152](https://github.com/anomalyco/opencode/pull/45152) Resolve queued move projects at delivery** — Fixes a stale project ID issue where queued session moves could deliver to the wrong project if directory structure changed during the wait.

10. **[#45138](https://github.com/anomalyco/opencode/pull/45138) Warm PowerShell workers on Windows** — Reuses PowerShell workers with isolated runspaces instead of booting a fresh process for every shell command, significantly improving performance for agents running many commands.

## Feature Request Trends

- **Agent Plugins Standard** (#40993, 👍 15): Support for the vendor-neutral Agent Plugins spec to bundle Skills and MCP servers portably
- **Parallel Subagent Limits** (#27110, 👍 37): Configuration to cap concurrent subagent execution, especially for resource-constrained local models
- **Portable Builds** (#15789, 👍 9; #37893): Official wrapper scripts for no-global-install runs and portable Windows ZIP builds
- **Project-level /tmp Isolation** (#49073): Dedicated temp directories per project, e.g., `/tmp/opencode/{UUID}`
- **Project Session Lists** (#51144): Fix v1→v2 migration where sessions with `path=NULL` disappear from project views
- **Agent Permissions Frontmatter** (#50598): Apply V2 `permissions:` agent frontmatter to effective session permissions

## Developer Pain Points

- **v2 Migration Friction**: Multiple issues around config resolution differences between v1 and v2 loaders (`OPENCODE_CONFIG_DIR`, `AGENTS.md` paths), session schema changes (`path=NULL`), and event type naming before GA
- **ESC/Enter UI Freezes**: Recurring reports of unresponsive TUI when interrupting sessions, confirming prompts, or answering multi-question prompts — affecting both Desktop and CLI
- **Subagent Reliability**: Validation failures breaking all subagent dispatches on v2.0.16, combined with OOM crashes from parallel agent execution and lack of concurrency controls
- **Silent Configuration Failures**: Settings like `chunkTimeout`/`timeout` being accepted but ignored, leading to no client-side stall bounds on v2 provider paths
- **Event listener/memory leaks**: `MaxListenersExceededWarning` on web interface suggests unbounded resource growth that could destabilize long-running sessions
- **Billing & Account State**: Paid subscriptions showing as inactive, blocking model access despite successful payment

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

Thinking Process:

1.  **Analyze the Request:**
    *   Role: Technical analyst focused on AI developer tools.
    *   Source data: GitHub data from `badlogic/pi-mono` (Pi community).
    *   Date: 2026-09-27 (based on the prompt's date context, though data is updated up to 2026-09-26).
    *   Sections required:
        1.  **Today's Highlights** (2-3 sentences summarizing the most important updates).
        2.  **Releases** (Summarize changes if new versions exist; omit if none - data says "None").
        3.  **Hot Issues** (Pick 10 noteworthy Issues, explain why they matter and community reaction).
        4.  **Key PR Progress** (Pick 10 important PRs, describe features or fixes).
        5.  **Feature Request Trends** (Distill the most-requested feature directions from all Issues).
        6.  **Developer Pain Points** (Summarize recurring developer frustrations or high-frequency requests).
    *   Style: Concise and professional, suited for technical developers. Include GitHub links for each item.

2.  **Analyze the Data:**
    *   *Latest Releases*: None (omit section or state none).
    *   *Latest Issues* (Total 39, showing top 30 by comment count):
        *   #4945: openai-codex Connection Reliability Issues (80 comments, 34 👍) - TUI stuck on `Working...` with `gpt-5.5`/`openai-codex`.
        *   #7547: How do you use Pi on windows? What issues are you seeing? (68 comments, 2 👍) - Windows usage pain points, fragmentation of how to run Pi on Windows.
        *   #10031: Pi sporadically stuck in "Working..." when thinking is stopped with <esc> (15 comments, 2 👍).
        *   #9980: Calculated cost for top open models on OpenRouter is off by 2-3x almost always (5 comments) - uses cheapest provider's pricing.
        *   #9678: mistral-conversations: hosted GLM reasoning dispatch drops the requested effort level (4 comments) - add zai-glm models to mistral catalog.
        *   #9953: anthropic strict tools: makeStrictJsonSchema keeps minimum/maximum/minLength, API rejects every request (3 comments).
        *   #10002: Extension console output writes over the interactive TUI (3 comments) - `console.error()` goes directly to terminal, garbling TUI.
        *   #10061: pi install treats uppercase HTTPS git URLs as local paths (3 comments).
        *   #8891: clearQueue returns steering that is still sent after compaction (3 comments).
        *   #10041: 400 infinite loop: persisted toolResult with empty toolCallId poisons the session (2 comments).
        *   #9999: macOS: clipboard image paste (Ctrl+V) pastes the Finder file icon when a file was copied in Finder (2 comments).
        *   #10070: Config option for per-model max output tokens (max_tokens sent to provider) (2 comments).
        *   #10062: Skills loader swallows directory read errors (2 comments).
        *   #10065: /model search ranks 24 unrelated models ahead of the one I typed (2 comments).
        *   #10064: Should AgentSession.abort() cancel prompts still awaiting input hooks? (2 comments).
        *   #10063: Anthropic OAuth requests return `Invalid effort level` for Claude Opus 5/5.5 and Fable 5 (2 comments).
        *   #9954: kimi-coding models fail with ENOENT on ~/.config/anthropic/credentials/default.json (2 comments).
        *   #10048: turn_end boundary error during in-flight stream teardown (2 comments).
        *   #10056: TUI calls process.exit(1) when stdout goes away, so losing a terminal looks like a crash (2 comments).
        *   #10089: Support for the Kitty Clipboard Protocol (OSC 5522) (1 comment).
        *   #10088: /copy-code [n]: copy a fenced code block from internal state (1 comment).
        *   #10086: mistral-conversations: any strict field on tool functions makes Mistral mangle zai-glm streamed tool-call arguments (1 comment).
        *   #10084: Proposal: emit pi.ai.request spans on the classic Agent path (1 comment).
        *   #10083: Fullscreen: refocusing Pi with a click also activates a built-in selector row (1 comment).
        *   #10082: Resuming a session will not render correct context level (1 comment).
        *   #10080: mistral-conversations: multiple leading ThinkChunks from fragmented thinking output permanently brick sessions (1 comment).
        *   #10079: Force-killed, crashed, or restored local session leaves the terminal stuck in Kitty flags=7 (1 comment).
        *   #10078: xAI: inlined GIF tool result 400s the turn, then every later request on that session (1 comment).
        *   #10077: llama.cpp model: contextWindow getting reset (1 comment).
        *   #10076: Package Report: pi-use-claude-seo (malicious/unsafe behavior) (1 comment).

    *   *Latest Pull Requests* (Total 18):
        *   #10087: fix(ai): omit strict field on Mistral tools; use reasoning_effort for zai-glm models (pkos98) - Fixes #10086.
        *   #10085: feat(agent,coding-agent): emit pi.ai.request spans from the agent loop (manno23) - Proposal #10084.
        *   #10081: fix(ai): merge fragmented assistant thinking blocks into one leading Mistral ThinkChunk (pkos98) - Fixes #10080.
        *   #10040: feat(coding-agent): Codemode and MCP (mitsuhiko) - Large feature adding codemode and MCP.
        *   #8635: fix(ai): preserve aborted stop reason during lazy setup (Mallikarjun-0) - Fixes #8409.
        *   #8354: feat(ai): configurable reasoning replay field for openai-completions (bnsd55).
        *   #9776: Per thinking sampling parameters (mrexodia).
        *   #10071: fix(coding-agent): reject malformed extension commands at load time (charan-rathore).
        *   #10067: feat(coding-agent,tui): System theme (mitsuhiko).
        *   #10066: fix(tui,coding-agent): prefer clipboard file paths over the icon image (1dustycy) - Fixes #9999.
        *   #19: Filter model selector to only show models with configured API keys (CarlosGtrz).
        *   #9948: feat(ai,coding-agent): unify image and classifier model infrastructure (mitsuhiko).
        *   #9957: fix(tui): choose Kitty image dimensions by aspect distortion (rwachtler).
        *   #9977: feat(durable): export scoped storage conformance suite (christianklotz).
        *   #10020: feat(coding-agent): add hidden-message toggle to HTML exports (rwachtler).
        *   #10039: fix(coding-agent): honor truecolor in custom themes (christianklotz).
        *   #10044: fix(ai): upgrade openai SDK to 7.19.0 (davidbrai).
        *   #10057: fix(tui): do not exit the process when stdout goes away (mariobgsp) - Fixes #10056.

3.  **Drafting the Sections:**

    *   **Today's Highlights (2-3 sentences):**
        *   Focus on the major developments: The highly anticipated Codemode and MCP support has been merged via a large feature PR (#10040), significantly expanding Pi's sandbox and tool capabilities. Concurrently, critical stability fixes were deployed, addressing session teardown errors, terminal exit behaviors on lost stdout, and Mistral-specific reasoning and tool call bugs. The community remains highly active, with intense focus on Windows compatibility and connection reliability for major providers like OpenAI Codex.

    *   **Releases:**
        *   None in the last 24 hours.

    *   **Hot Issues (Pick 10 noteworthy Issues, explain why they matter and community reaction):**
        *   Need to select the top 10 most impactful issues based on comments, likes, and technical significance.
        *   1. **#4945 - openai-codex Connection Reliability Issues**: TUI gets stuck on `Working...` with no streamed text/tool/error, only recoverable via Escape. Highly active discussion (80 comments, 34 👍), indicating a major blocker for core users using GPT-5.5/codex.
        *   2. **#7547 - Windows usage experience**: Fragmented ways to run Pi on Windows makes it hard to prioritize core vs delegated features. 68 comments, showing major community interest in Windows parity.
        *   3. **#10031 - Stuck in "Working..." when stopping thinking with ESC**: Serious state lock requiring full restart (`CTRL+c` and `pi -c`). Happens frequently for some users since v0.84.0.
        *   4. **#9980 - OpenRouter cost calculation is off by 2-3x**: Uses cheapest provider pricing, misrepresenting actual costs for multi-provider open models like `z-ai/glm-5.3-flash`. Important for budget-conscious local/hosted deployments.
        *   5. **#9953 - Anthropic strict tools schema rejection**: `makeStrictJsonSchema` keeps keywords like `minimum`/`maximum` that Anthropic strict API rejects, causing 400 errors. Critical blocker for constrained sampling users.
        *   6. **#10002 - Extension console output garbles TUI**: Extensions writing `console.error()` directly to the terminal bypass the TUI renderer, messing up layouts. Crucial for extension developers and interactive users.
        *   7. **#10061 - Case-sensitive HTTPS git URL parsing**: `HTTPS://...` treated as local path, failing installation. Simple but critical packaging bug.
        *   8. **#9999 - macOS clipboard pastes Finder icon instead of file**: `Ctrl+V` pastes a generic icon image when copying files in Finder. UX bug partially resolved in PR #10066.
        *   9. **#10056 - TUI exits with code 1 when stdout goes away**: Disappearing terminal windows look like crashes instead of graceful exits. Prompts immediate fix in PR #10057.
        *   10. **#9954 - kimi-coding models fail with ENOENT on Anthropic credentials**: Ambient credential probing by Anthropic SDK crashes requests for non-Anthropic providers (kimi-coding). Interesting cross-provider credential leakage issue.
        *   *Alternative for 10th*: **#10041 - 400 infinite loop: empty toolCallId poisons session**. Very nasty bug causing infinite loops and session poisoning. Let's include this or #10048. Let's stick to #9954 as it's quite unique, but #10041 is also very severe. Let's write up 10 clearly.

    *   **Key PR Progress (Pick 10 important PRs, describe features or fixes):**
        *   1. **#10040 - feat(coding-agent): Codemode and MCP**: Massive PR bringing Codemode (for sandbox execution, e.g., helping models like Jev) and Model Context Protocol (MCP) support. Highly significant architectural update.
        *   2. **#10087 - fix(ai): omit strict field on Mistral tools; use reasoning_effort for zai-glm models**: Fixes tool call argument truncation and reasoning level drops for Mistral-hosted zai-glm models (Fixes #10086, #9678).
        *   3. **#10085 - feat(agent,coding-agent): emit pi.ai.request spans from the classic Agent loop**: Fills telemetry gap, enabling observability for classic agent requests (Fixes #10084).
        *   4. **#10081 - fix(ai): merge fragmented assistant thinking blocks into one leading Mistral ThinkChunk**: Prevents session bricking (400 errors) on Mistral Conversations API (Fixes #10080).
        *   5. **#10066 - fix(tui,coding-agent): prefer clipboard file paths over the icon image**: Resolves the macOS Finder copy image bug (#9999) by prioritizing file URLs over icon image representations.
        *   6. **#10057 - fix(tui): do not exit the process when stdout goes away**: Replaces raw stdout write crash (`process.exit(1)`) with graceful handling of terminal disconnections (Fixes #10056).
        *   7. **#10067 - feat(coding-agent,tui): System theme**: Implements dynamic terminal theme detection (using OKHSL color queries) matching background colors instead of blindly trusting light/dark settings.
        *   8. **#9776 - Per thinking sampling parameters**: Generalizes sampling parameter overrides based on thinking levels for various open models.
        *   9. **#10071 - fix(coding-agent): reject malformed extension commands at load time**: Prevents editor crashes from extensions registering commands with missing/non-string names or missing handlers.
        *   10. **#10044 - fix(ai): upgrade openai SDK to 7.19.0**: Adds "fast" service tier types (needed for GPT-6 Fast pricing) and drops redundant local types.

    *   **Feature Request Trends:**
        *   *Windows & Terminal Integration Parity*: Major push for Windows support clarity, Kitty Clipboard Protocol (OSC 5522) for SSH/containers, and robust terminal restore behaviors (avoiding fake crashes).
        *   *Telemetry and Observability*: Requests for standard `pi.ai.request` spans on the classic agent path and configurable replay fields for completions.
        *   *Model Control & Pricing Accuracy*: Demands for per-model `max_tokens` configuration, filtering models by configured API keys, and accurate OpenRouter cost calculations (using provider-specific pricing rather than cheapest).
        *   *Session Sandbox & Execution (Codemode/MCP)*: High interest in sandboxed code execution environments and tool integrations (MCP).
        *   *UI/UX Enhancements*: Copying code blocks directly via commands, filtering model search results, and system theme awareness.

    *   **Developer Pain Points:**
        *   *Provider Connection & State Reliability*: Recurring issues around connection drops (OpenAI Codex hanging on "Working..."), state poisoning via empty tool calls (infinite loops), and session bricking on malformed thinking blocks (Mistral).
        *   *Fragile TUI Rendering & Terminal Environments*: Extensions breaking layout via raw console output, terminal hijacking on macOS clipboard pastes, fake crashes on stdout pipe loss, and keyboard shortcuts triggering unwanted rows in fullscreen.
        *   *Credential & Authentication Friction*: Cross-provider credential probing (Anthropic SDK scanning `~/.config/anthropic` and breaking kimi-coding), and case-sensitive URL parsing breaking package installs.
        *   *Configuration & Cost Blind Spots*: Lack of fine-grained control over max tokens per model, inaccurate cost reporting on multi-provider routers (OpenRouter), and context window resets on local models (llama.cpp).

4.  **Refine Writing style:**
    *   Keep it crisp, structured, and informative.
    *   Ensure all links are formatted cleanly (using the provided URLs or standard GitHub issue/PR formats based on the text data). The prompt says "Include GitHub links for each item." I will use the URLs provided in the prompt text (e.g. `earendil-works/pi Issue #4945` or format them as standard github links if the exact URL format is inferred, but the prompt text lists them as `URL: earendil-works/pi Issue #4945` - I will write them out clearly as links to `github.com/earendil-works/pi/issues/4945` etc., or use the literal text if exact URLs aren't fully spelled out, but standard formatting is `https://github.com/earendil-works/pi/issues/4945`). Let me write standard GitHub URLs: `https://github.com/earendil-works/pi/issues/4945` (and `/pull/10087` for PRs) as standard.

Let me double check the issue numbers and URLs:
Issue #4945 -> URL: `https://github.com/earendil-works/pi/issues/4945`
PR #10087 -> URL: `https://github.com/earendil-works/pi/pull/10087`
This is standard GitHub structure and matches the repo name `earendil-works/pi`.

Let's review the prompt's instructions: "Include GitHub links for each item."
I will construct clean, clickable GitHub URLs based on standard patterns: `https://github.com/earendil-works/pi/issues/[number]` and `https://github.com/earendil-works/pi/pull/[number]`.

Let's do a quick pass on the selected issues for "Hot Issues":
1. **Connection Reliability with openai-codex (#4945)**: Stuck on "Working..." with no streamed text, tool call, or error. High comment count (80) and likes (34) show this is a major pain point for core users on GPT-5.5.
2. **Windows Integration Fragment

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-09-27

## 1. Today's Highlights
Qwen Code shipped **v0.24.6**, **Desktop v0.24.6**, and **TypeScript SDK v0.1.16**, with no known breaking changes. The issue and PR queues remain dominated by the **Managed Agent / serve / session-management** roadmap, plus several high-impact reliability and data-safety reports. Community attention is strongest around Remote-SSH session failures, worktree cleanup safety, and managed-agent architecture staging.

## 2. Releases
- **CLI v0.24.6** — [release](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.6). No breaking changes. Change list includes `feat(sdk-java): Add the Hosted Harness private client` ([#12654](https://github.com/QwenLM/qwen-code/pull/12654)) by @doudouO.
- **Desktop v0.24.6** — [release](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.24.6). Includes `fix(serve): preserve session creation failure diagnostics` ([#12331](https://github.com/QwenLM/qwen-code/pull/12331)) and managed-runtime work for the Java SDK.
- **TypeScript SDK v0.1.16** — [release](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.16). Bundles CLI **0.24.6**, built from the same branch/ref as the SDK. No breaking changes noted.

## 3. Hot Issues
1. **[#12380](https://github.com/QwenLM/qwen-code/issues/12380)** — *Managed Agent dual-path architecture and staged delivery* (OPEN, P2, 32 comments). Defines durable sessions, workspace bindings, recoverable tool executions, and multi-agent/serve direction. Highest-engagement issue; likely the roadmap anchor for upcoming work.
2. **[#12416](https://github.com/QwenLM/qwen-code/issues/12416)** — *Remote-SSH: every POST /session fails with `write EPIPE` / `BridgeChannelClosedError`* (OPEN, P1, 16 comments). Companion 0.24.2 fails while the bundled CLI works standalone. Severe remote-development blocker.
3. **[#3579](https://github.com/QwenLM/qwen-code/issues/3579)** — *DeepSeek API 400: `reasoning_content` in thinking mode must be passed back* (CLOSED, 12 comments). Provider-compatibility issue affecting DeepSeek users; closed after extended discussion.
4. **[#12737](https://github.com/QwenLM/qwen-code/issues/12737)** — *ACP Bridge Stage B host integration for paired Legacy and Managed engines* (OPEN, P2, 8 comments). Follow-up to the Managed Agent proposal; active design work on paired-engine host integration.
5. **[#11908](https://github.com/QwenLM/qwen-code/issues/11908)** — *Oversized `available_commands_update` trips `MAX_JSON_NODES`, tears down channel, later requests 404* (CLOSED, P1, 6 comments). Session-stability bug in serve/acp; closed.
6. **[#12727](https://github.com/QwenLM/qwen-code/issues/12727)** — *`/update` is weird on Windows PowerShell* (CLOSED, P2, 6 comments). Update downloads but the new version still appears after restart. Windows UX friction.
7. **[#12792](https://github.com/QwenLM/qwen-code/issues/12792)** — *`EditTool` reflows whole file when CRLF/LF endings are mixed* (OPEN, P2, 5 comments). Single-line edits produce whole-file diffs; ready-for-human / need-discussion.
8. **[#12760](https://github.com/QwenLM/qwen-code/issues/12760)** — *Model selection issue with multiple API keys* (OPEN, P2, 5 comments). `/model` and `/model --fast` behavior with DeepSeek/Aliyun keys. Configuration pain.
9. **[#12735](https://github.com/QwenLM/qwen-code/issues/12735)** — *Stale worktree cleanup deletes user-named worktrees with untracked files* (CLOSED, P1, 4 comments). Data-loss risk in automatic cleanup; urgent fix/closure.
10. **[#12770](https://github.com/QwenLM/qwen-code/issues/12770)** — *Extension lifecycle events ignore `privacy.usageStatisticsEnabled` and upload to RUM* (OPEN, P2, 4 comments). Privacy-control bypass; ready-for-human.

## 4. Key PR Progress
1. **[#11206](https://github.com/QwenLM/qwen-code/pull/11206)** — `feat(mesh): add persistent shared-thread agent collaboration`. Adds persistent workspace agent identities, shared threads, assignment, interjection, cancellation, and review history.
2. **[#12582](https://github.com/QwenLM/qwen-code/pull/12582)** — `feat(agents): run agents on other computers, bind Codex or Claude Code, share over A2A`. Stacked on #11206; expands agents beyond the local workspace.
3. **[#12807](https://github.com/QwenLM/qwen-code/pull/12807)** — `feat(acp-bridge): deliver workspace changes to every paired engine`. Second part of B2b for #12737; quarantines engines that fail to confirm changes.
4. **[#12767](https://github.com/QwenLM/qwen-code/pull/12767)** — `feat(core): add local managed tool-result segment store`. Immutable segments, idempotent publication, sealing, verified contiguous prefixes, and byte-range reads.
5. **[#11959](https://github.com/QwenLM/qwen-code/pull/11959)** — `feat(core): resolve model limits and modalities from a models.dev catalog`. Adds context windows, output limits, and modalities with a cached background refresh.
6. **[#10954](https://github.com/QwenLM/qwen-code/pull/10954)** — `feat(serve): expose the background agents the supervisor is running`. Adds `GET /background-agents` for Agent View supervisor state.
7. **[#11816](https://github.com/QwenLM/qwen-code/pull/11816)** — `feat(web-shell): support optional worktrees for branch sessions`. Brings worktree isolation to Web Shell branch sessions.
8. **[#12789](https://github.com/QwenLM/qwen-code/pull/12789)** — `fix(core): honor usage-statistics opt-out for extension lifecycle events`. Fixes the privacy bypass reported in #12770.
9. **[#12798](https://github.com/QwenLM/qwen-code/pull/12798)** — `fix(sdk-java): reject unreadable decimal scales`. Runtime Broker now rejects `BigDecimal` scales above 2048 at the JSON admission boundary.
10. **[#11965](https://github.com/QwenLM/qwen-code/pull/11965)** — `fix(hooks): key enabled state by name, not identity`. Fixes #11902, where a disabled hook’s state was lost on reload when its command changed.

## 5. Feature Request Trends
- **Managed Agent / session management / multi-agent / daemon** — The dominant direction: staged architecture ([#12380](https://github.com/QwenLM/qwen-code/issues/12380)), ACP paired engines ([#12737](https://github.com/QwenLM/qwen-code/issues/12737)), workspace-bound tool execution ([#12724](https://github.com/QwenLM/qwen-code/issues/12724)), and public API/event replay ([#12793](https://github.com/QwenLM/qwen-code/issues/12793)).
- **Platform distribution and packaging** — Requests for Linux ARM64 Desktop builds ([#12806](https://github.com/QwenLM/qwen-code/issues/12806)) and smoother Windows install/update behavior ([#12727](https://github.com/QwenLM/qwen-code/issues/12727), [#12802](https://github.com/QwenLM/qwen-code/issues/12802)).
- **Headless and subagent CLI workflows** — A first-class `qwen --agent <name>` mode with tool constraints and structured output ([#12803](https://github.com/QwenLM/qwen-code/issues/12803)).
- **Configuration and model management** — Better model selection with multiple providers/keys ([#12760](https://github.com/QwenLM/qwen-code/issues/12760)), disabling all skills by default ([#12790](https://github.com/QwenLM/qwen-code/issues/12790)), and Web Shell settings i18n ([#12306](https://github.com/QwenLM/qwen-code/issues/12306)).
- **Workspace and worktree safety** — Safer worktree cleanup and branch-session isolation ([#12735](https://github.com/QwenLM/qwen-code/issues/12735), [#12758](https://github.com/QwenLM/qwen-code/issues/12758), [#11816](https://github.com/QwenLM/qwen-code/pull/11816)).
- **Privacy and telemetry correctness** — Extension lifecycle events must respect usage-statistics opt-out ([#12770](https://github.com/QwenLM/qwen-code/issues/12770)).
- **MCP and web-tool robustness** — Tools-only MCP servers should not be marked disconnected ([#12496](https://github.com/QwenLM/qwen-code/issues/12496)); multi-address fetch fallback classification ([#12720](https://github.com/QwenLM/qwen-code/issues/12720)).

## 6. Developer Pain Points
- **Remote and session infrastructure reliability** — Remote-SSH `write EPIPE` / `BridgeChannelClosedError` ([#12416](https://github.com/QwenLM/qwen-code/issues/12416)), ACP channel teardown from oversized JSON ([#11908](https://github.com/QwenLM/qwen-code/issues/11908)), and later `No session with id` 404s remain high-friction.
- **Data loss and destructive cleanup** — Worktree cleanup deleting user-named worktrees with untracked files ([#12735](https://github.com/QwenLM/qwen-code/issues/12735)) and git-ignored content ([#12758](https://github.com/QwenLM/qwen-code/issues/12758)); `EditTool` reflowing mixed line endings ([#12792](https://github.com/QwenLM/qwen-code/issues/12792)).
- **Update and install friction** — Windows `/update` confusion ([#12727](https://github.com/QwenLM/qwen-code/issues/12727)), aged `.deferred` markers blocking updates ([#12802](https://github.com/QwenLM/qwen-code/issues/12802)), and missing Linux ARM64 desktop builds ([#12806](https://github.com/QwenLM/qwen-code/issues/12806)).
- **Privacy controls not fully honored** — Extension lifecycle telemetry bypassing `privacy.usageStatisticsEnabled` ([#12770](https://github.com/QwenLM/qwen-code/issues/12770)).
- **Configuration complexity** — Multi-key model selection ([#12760](https://github.com/QwenLM/qwen-code/issues/12760)), hooks state loss on reload ([#11902](https://github.com/QwenLM/qwen-code/issues/11902)), and skills default-disable requests ([#12790](https://github.com/QwenLM/qwen-code/issues/12790)).
- **Protocol and test flakiness** — Main CI failures ([#12714](https://github.com/QwenLM/qwen-code/issues/12714)), lease-clock flakiness ([#12782](https://github.com/QwenLM/qwen-code/issues/12782)), and Runtime Broker decimal/protocol edge cases ([#12796](https://github.com/QwenLM/qwen-code/issues/12796), [#12631](https://github.com/QwenLM/qwen-code/issues/12631)).
- **Provider compatibility** — DeepSeek thinking-mode `reasoning_content` errors ([#3579](https://github.com/QwenLM/qwen-code/issues/3579)).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-09-27

## Today's Highlights
Runtime and session integrity dominate: a new PR (#6660) gives runtime turns typed artifact references, closing a long-standing gap (#6653), while multiple fixes target session orphaning (#6640) and legacy config migration (#6641). The TUI also sees a cluster of fresh bug reports around scrolling lag, refresh behavior, and thinking-intensity shortcuts, alongside CI flake fixes unblocking dependency updates.

## Releases
No new releases in the last 24 hours.

## Hot Issues
1. **#6184 [bug] Engine silently freezes mid-run** — 8 comments. Critical reliability bug: user messages persist but never get answered; no error, log, or crash. Long-standing since 2026-09-15. [Link](https://github.com/Hmbown/Codewhale/issues/6184)
2. **#5856 [enhancement, tools] Computer-use plugin: live-install receipt + first look-act loop** — 6 comments. Tracks acceptance of the built-in computer-use bundle; active discussion on trust and release build discovery. [Link](https://github.com/Hmbown/Codewhale/issues/5856)
3. **#5581 [enhancement] Event-granularity audit** — 3 comments. Surfaces that only update at `TurnComplete` read as frozen during long multi-call turns. Follow-up to cost fix #5578. [Link](https://github.com/Hmbown/Codewhale/issues/5581)
4. **#6035 Model pins don't propagate** — 3 comments. A model id is pinned in six places with no shared owner; after DeepSeek retired `deepseek-v4-flash`, fleet members kept the retired id. [Link](https://github.com/Hmbown/Codewhale/issues/6035)
5. **#6109 Build the deterministic audiovisual pet across Codewhale surfaces** — 2 comments. Umbrella issue for a persistent whale pet sharing engine event authority across browser, TUI, and native hosts. [Link](https://github.com/Hmbown/Codewhale/issues/6109)
6. **#5625 [enhancement] Mid-turn guidance: deliver a committed queued follow-up as a steer** — 2 comments. Proposes a non-blocking peek tool so users can steer a running turn without waiting for completion. [Link](https://github.com/Hmbown/Codewhale/issues/5625)
7. **#6155 [enhancement, tui] Pet: qualify the /pet habitat in a real terminal** — 2 comments. Split from #6109; acceptance items for the `/pet` habitat across TUI and desktop remain open. [Link](https://github.com/Hmbown/Codewhale/issues/6155)
8. **#6298 [documentation] Fleet rework: stop defining read-only by command grammar** — 2 comments. Follow-up to a 2026-09-17 incident where a verifier child used an inherited computer-use tool to type into the host Terminal. [Link](https://github.com/Hmbown/Codewhale/issues/6298)
9. **#6603 [needs-triage] Add an optional Decision Gate to speed up routine agent decisions** — 1 comment. Every message wakes the large model even for trivial intent/tool decisions; proposes a lightweight gate. [Link](https://github.com/Hmbown/Codewhale/issues/6603)
10. **#6653 [enhancement] Runtime turns carry no artifact references** — 0 comments, but high impact and already addressed by PR #6660. Preview cannot show what a turn produced without manual hunting. [Link](https://github.com/Hmbown/Codewhale/issues/6653)

## Key PR Progress
1. **#6660 [OPEN] Runtime: turns carry typed artifact references** — Closes #6653. Reuses snapshot side repo and session artifact directory so desktop Preview can show turn files and large outputs. [Link](https://github.com/Hmbown/Codewhale/pull/6660)
2. **#6640 [OPEN] fix(sessions): stop orphaning sessions at their writers and repair existing orphans (#6144)** — Makes the session document the single authority; repairs existing orphans at launch. [Link](https://github.com/Hmbown/Codewhale/pull/6640)
3. **#6641 [CLOSED] fix(config): read legacy top-level base_url/api_key by one rule (#6394)** — One rule for legacy root fields; old files keep working unchanged, no rewrite on load. [Link](https://github.com/Hmbown/Codewhale/pull/6641)
4. **#6656 [OPEN] fix(hooks): pass the tool exit code to Runtime API tool_call_after** — Hooks now receive real shell exit code and how it ended, on both TUI and Runtime API threads. [Link](https://github.com/Hmbown/Codewhale/pull/6656)
5. **#6642 [OPEN] fix(compaction): survive a provider request-body 413 while making room** — Handles byte-limit 413s from base64 images that token-side context budgets cannot see. [Link](https://github.com/Hmbown/Codewhale/pull/6642)
6. **#6646 [OPEN] perf(tui): stop walking the whole item store to list or open a thread** — Opening a thread took 1.3s warm / 6.7s cold on a 140-thread store; fix targets the single directory read. [Link](https://github.com/Hmbown/Codewhale/pull/6646)
7. **#6649 [OPEN] runtime_api: end every server-initiated thread stream with a typed stream.end** — Replaces bare EOF with a typed end event for failed replays, lag catch-ups, and shutdowns. [Link](https://github.com/Hmbown/Codewhale/pull/6649)
8. **#6658 [OPEN] fix(web): derive changelog and install-guide modules at build time, not in git** — Removes race where two PRs adding CHANGELOG lines reddened main twice on 2026-09-26. [Link](https://github.com/Hmbown/Codewhale/pull/6658)
9. **#6655 [CLOSED] test: fix two Windows-CI flakes blocking dependency updates** — Fixes timing bugs in `adapter_re...` and another test, unblocking Dependabot PRs #6629 and #6630. [Link](https://github.com/Hmbown/Codewhale/pull/6655)
10. **#6615 [CLOSED] fix: three CI flakes at their cause** — Removes root causes for resume receipt, event lock budget, and rustfmt budget flakes from the 0.10.1 CI audit. [Link](https://github.com/Hmbown/Codewhale/pull/6615)

## Feature Request Trends
- **Session & runtime integrity**: Strong demand for consistent session binding (#6621, #6639), artifact references (#6653), path-scoped undo (#6644), and background-shell cleanup (#6654). The runtime is being hardened as a first-class API surface.
- **Human-in-the-loop controls**: Requests for mid-turn steering (#5625), a decision gate for routine choices (#6603), propose-only settings (#6564), and in-session secret entry (#6263) all aim to keep users in flow without waking the large model unnecessarily.
- **Cross-surface unified experience**: The deterministic pet (#6109, #6155), color-aware goldens (#6223), and event-granularity audit (#5581) push toward one consistent model across TUI, desktop, and browser.
- **Provider/model configuration robustness**: Model pin propagation (#6035), legacy `base_url` migration (#6394), provider descriptors (#6616), and search-backend quota ledgers (#6532) reflect growing multi-provider complexity.
- **TUI performance & responsiveness**: Fresh reports on scrolling lag (#6652), real-time refresh when unfocused (#6651), and thinking-intensity shortcut anomalies (#6650) show performance is a top user-visible concern.
- **Security & trust in tool use**: Fleet grant model rework (#6298) and computer-use plugin receipts (#5856) address real incidents and the need for auditable tool permissions.

## Developer Pain Points
- **Silent engine freezes**: #6184 remains the highest-comment issue; messages are persisted but never answered, with no logs or crash entry — extremely hard to diagnose.
- **TUI degradation over time**: Multiple reports (#6652, #6651) describe jelly-like scrolling and failure to refresh when the terminal loses focus; both reproduce after prolonged runs.
- **Model pin drift**: #6035 shows retired model ids persisting across fleet members and agent profiles because pins have no shared owner or migration path.
- **Session orphaning and undo gaps**: #6144, #6621, and #6644 reveal writers that orphan sessions, fresh HTTP threads without bound session ids, and TUI `/undo` using older selection logic.
- **CI flakes blocking dependency updates**: #6655 and #6615 document Windows and other flakes that reddened main and blocked Dependabot bumps, requiring root-cause fixes rather than retries.
- **Provider byte limits vs token budgets**: #6642 highlights that a base64 image can pass token-side budgets yet trigger HTTP 413 on request body size during compaction.
- **Slow thread opening**: #6646 measured 1.3s warm / 6.7s cold on a 140-thread store due to walking the entire item directory.
- **Tool permission escapes**: #6298 describes a verifier child using an inherited computer-use tool to type into the host Terminal after a read-only command was refused — a trust-boundary failure.

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

## ComfyUI Community Digest — 2026-09-27

### 1. Today's Highlights
No new ComfyUI release landed in the last 24 hours. Activity is dominated by correctness and stability regressions: Apple Silicon/MPS VAE and sampler bugs, MiniMax H3 host-loss/VRAM failures, and quantization-related crashes. On the fix side, LoKr alpha scaling, Qwen-Image text-encoder fallback, API response-header redaction, and local asset export API work are progressing.

### 2. Releases
No new versions in the last 24h.

### 3. Hot Issues

- **#16246 — BSOD in `dxgmms2.sys` on 6 GB RTX 3050 after v0.35.0 / comfy-aimdo 0.5.3**  
  Kernel-level Windows video memory manager crash tied to dynamic VRAM loading. High severity: 4 BSODs in one day. Community reaction: 10 comments, 2 👍.  
  https://github.com/Comfy-Org/ComfyUI/issues/16246

- **#16433 — Qwen-Image-2.1 VAE encode broken on MPS**  
  Encode→decode round-trip returns 6.6 dB PSNR on MPS vs 49.1 dB on CPU, silently corrupting image-edit workflows. Reproduced on clean master. 5 comments.  
  https://github.com/Comfy-Org/ComfyUI/issues/16433

- **#16585 — Qwen3-VL vision tower float32 + NVFP4 crash**  
  NVFP4-quantized vision layers fail with `Unsupported dtype code`. Affects `TextGenerate` with images. Highlights quantization + multimodal fragility. 1 comment.  
  https://github.com/Comfy-Org/ComfyUI/issues/16585

- **#16587 — MiniMax H3 FL2VA on DGX Spark GB10 causes whole-host loss**  
  Single-GPU DGX Spark becomes unresponsive during 864×480 T2V after earlier successful runs. Severe reliability issue for aarch64/GB10 users.  
  https://github.com/Comfy-Org/ComfyUI/issues/16587

- **#16589 — MiniMax H3 Ref2VA reference-fidelity regression**  
  Same workflow/model files, but major loss of visual identity and spatial structure. Signals possible core regression or undocumented model-handling change.  
  https://github.com/Comfy-Org/ComfyUI/issues/16589

- **#16591 — SeedVR2 native core nodes produce near-frozen frames every 4 frames**  
  Video upscaling output shows periodic motion stalls. Core-node issue with direct impact on video quality.  
  https://github.com/Comfy-Org/ComfyUI/issues/16591

- **#16593 — TAE previews for Wan 2.1 lighttaew2_1 look washed out**  
  Core `latent_preview.py` decodes from normalized latents. Preview quality issue that misleads users during generation.  
  https://github.com/Comfy-Org/ComfyUI/issues/16593

- **#16573 — `uni_pc` phi recurrence float32 breaks Wan 2.2 on MPS**  
  `b3 = 55` instead of `0.25`; computing in float64 fixes it. Another MPS numerical-precision blocker.  
  https://github.com/Comfy-Org/ComfyUI/issues/16573

- **#15114 — LoKr alpha scaling ignored for direct `lokr_w1`/`lokr_w2` matrices**  
  LyCORIS LoKr alpha/rank scaling is dropped in merged and bypass execution. A matching PR #16583 is already open.  
  https://github.com/Comfy-Org/ComfyUI/issues/15114

- **#16579 — ROCm / AMD Navi 31: GPU page faults, LoRA hook leaks, glibc RAM bloat**  
  Fix proposal covering `amdgpu` page faults, `SIGABRT`, and Linux RAM exhaustion. Important for RX 7900 XT/ROCm users.  
  https://github.com/Comfy-Org/ComfyUI/issues/16579

### 4. Key PR Progress

- **#16583 — Fix alpha scaling for direct LoKr matrices**  
  Derives rank from direct matrix shapes so alpha 1/rank 32 applies a 1/32 multiplier. Focused LoKr tests pass. Fixes #15114.  
  https://github.com/Comfy-Org/ComfyUI/pull/16583

- **#16567 — Fix Qwen-Image 2.1 text encoder fallback for vision-stripped / GGUF Qwen3-8B weights**  
  Corrects architecture detection when DeepStack visual keys are missing, avoiding misidentification as `TEModel.QWEN3_8B`.  
  https://github.com/Comfy-Org/ComfyUI/pull/16567

- **#16590 — Redact sensitive headers when logging API node responses**  
  `response_headers` were written unredacted to `temp/api_logs`. Security fix across API-node client/download call sites.  
  https://github.com/Comfy-Org/ComfyUI/pull/16590

- **#15207 — Fix Stable Audio 3 VAE decoding to noise on MPS**  
  Addresses bf16 precision issues in SA3 VAE on Apple Silicon. Important for MPS audio generation correctness.  
  https://github.com/Comfy-Org/ComfyUI/pull/15207

- **#14770 — Use MPS for text encoders on Apple Silicon**  
  Text encoders currently fall back to CPU because `VRAMState.SHARED` blocks GPU selection. Reported ACE-Step 1.5 LM sampling: 6m19s CPU vs ~40s MPS.  
  https://github.com/Comfy-Org/ComfyUI/pull/14770

- **#15520 — Fail loudly when quantization scale tensors go unrecognized**  
  Prevents silent dropping of `weight_scale` / `input_scale` tensors in NVFP4 checkpoints without `_quantization_metadata`.  
  https://github.com/Comfy-Org/ComfyUI/pull/15520

- **#15561 — Fix MiniMax H3 tiled VAE decode producing mismatched tiles**  
  Tiling at >256px creates grid artifacts in official 1344×768 template. Fixes #15548.  
  https://github.com/Comfy-Org/ComfyUI/pull/15561

- **#16391 — Fix MiniMax H3 VAE attention `qk_norm_scale` device mismatch on non-CUDA backends**  
  Fixes XPU crash where weight is on CPU while other tensors are on XPU.  
  https://github.com/Comfy-Org/ComfyUI/pull/16391

- **#16578 — Implement the asset export API locally**  
  Core serves `POST /api/assets/export`, `GET /api/assets/exports/{exportName}`, and `GET /api/tasks/{task_id}`, enabling one frontend code path for local and cloud.  
  https://github.com/Comfy-Org/ComfyUI/pull/16578

- **#16519 — Support Qwen-Image 2.1 union Fun ControlNet**  
  Adds support for `Qwen-Image-2.1-Fun-Controlnet-Union` with test workflows/model patches.  
  https://github.com/Comfy-Org/ComfyUI/pull/16519

### 5. Feature Request Trends

- **Apple Silicon/MPS parity is the largest theme.** Requests and bugs span VAE encode/decode, text encoders, Stable Audio, `uni_pc`, and bf16 handling.
- **Quantization robustness and transparency.** Users want unrecognized scale tensors to fail loudly, GGUF/vision-stripped encoders to detect correctly, and NVFP4 paths to work with multimodal models.
- **Video model stability and VRAM safety.** MiniMax H3 host-loss, tiled VAE artifacts, SeedVR2 frozen frames, and native-canvas validation (#16588) point to a need for guardrails and better memory behavior.
- **Cloud/local API parity.** Requests include detailed API endpoint documentation (#6607), local asset export APIs, and shared frontend contracts.
- **Scheduling consistency.** PR #16156 targets predictable `start_percent`/`end_percent` step selection across ControlNet, conditioning, and hooks.
- **Asset-management startup robustness.** Issues around `--enable-assets` without DB packages, GIL-yielding scans, and CI coverage show growing asset-system adoption.

### 6. Developer Pain Points

- **Silent correctness failures are the worst class of bugs.** MPS VAE corruption, washed-out TAE previews, frozen SeedVR2 frames, ignored LoKr alpha, and dropped quantization scales all produce wrong output without hard errors.
- **Windows/AMD/ARM memory management remains fragile.** Dynamic VRAM loading is linked to kernel BSODs, ROCm/Navi 31 sees GPU page faults, and DGX Spark GB10 can lose the whole host.
- **Apple Silicon is still treated as a second-class backend.** Text encoders default to CPU, bf16 is too coarse in some VAEs, float32 recurrences break samplers, and MPS VAE paths silently corrupt output.
- **Quantization/GGUF ecosystem is brittle.** Missing metadata, architecture misdetection, and NVFP4 dtype restrictions create hard-to-diagnose failures.
- **User support and custom-node issues remain noisy.** Stale issues, missing packages, Spanish-language reports, and workflows that fail without clear node-resolution guidance add maintainer load.
- **Security and logging hygiene needs attention.** API response headers were logged unredacted until PR #16590.
- **CI/test gaps around assets.** Re-enabling `--enable-assets` tests and adding coverage for scheduled CLIP hook cloning show the asset system is still stabilizing.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Community Digest — 2026-09-27

## 1. Today's Highlights
No new releases landed in the last 24 hours, but community attention remains concentrated on **cloud reliability, tool-call parser correctness, desktop UX, and API compatibility**. The most active thread is an Ollama Cloud Pro outage report with 53 comments and 20 👍, while a cluster of parser fixes for Gemma4, Qwen3, and GLM shows maintainers and contributors actively hardening tool calling. Desktop app ergonomics and server authentication/streaming also saw multiple PRs.

## 2. Hot Issues

1. **[#15453](https://github.com/ollama/ollama/issues/15453) — Ollama Cloud Pro: 95% failure rate across all cloud models**  
   A high-impact service reliability report claiming Pro cloud models are effectively unusable. With **53 comments and 20 👍**, this is the most engaged issue and signals serious concerns about cloud SLA/quality.

2. **[#17778](https://github.com/ollama/ollama/issues/17778) — Qwen 3.8 chat streaming: `no user query found in messages` (500)**  
   A reproducible 500 error during tool-calling loops with long context. **47 comments and 27 👍** indicate broad impact on API/Python users and possible regressions in message handling.

3. **[#12187](https://github.com/ollama/ollama/issues/12187) — GPT-OSS not completing tool calls**  
   Long-running issue where tool calls start but never complete, especially via Open WebUI. **40 comments** show this remains a persistent integration pain point.

4. **[#18368](https://github.com/ollama/ollama/issues/18368) — macOS GUI chat processing fails silently after 60 seconds**  
   Long document processing fails with no notification. **14 comments** highlight poor UX and debuggability for desktop users with large contexts.

5. **[#16203](https://github.com/ollama/ollama/issues/16203) — Desktop app should be narrow, resizable, and always on top**  
   A practical UX request for using Ollama as a quick assistant beside other apps. **9 comments** show sustained demand for better desktop window behavior.

6. **[#18632](https://github.com/ollama/ollama/issues/18632) — Qwen3.8 `think: "high"` / `"max"` silently run default `medium`**  
   Thinking-level values outside the documented list are accepted without error but ignored. This is a correctness/API-contract issue for reasoning-model users.

7. **[#18594](https://github.com/ollama/ollama/issues/18594) — System 1 Models**  
   Request to support fast “System 1” models like Kev and Laya. **7 👍** with only 3 comments suggests early but positive interest in low-latency decision models.

8. **[#18390](https://github.com/ollama/ollama/issues/18390) — Gemma4 tool-call keys with spaces are unquoted and call is dropped**  
   A valid tool call can return empty `content` and no `tool_calls`. This is part of a broader parser-robustness cluster affecting Gemma4 users.

9. **[#18542](https://github.com/ollama/ollama/issues/18542) — `typical_p` no longer supported, breaking clients that cannot omit it**  
   SillyTavern and similar clients break when sending the parameter. **3 👍** and a linked PR reference point to a backward-compatibility concern.

10. **[#18421](https://github.com/ollama/ollama/issues/18421) — Qwen3-Coder parser changes numbers outside int64 range**  
    Large numeric tool arguments like `1e20` are clamped/corrupted to `9223372036854775807`. This can silently alter tool inputs and is a serious precision bug.

## 3. Key PR Progress

1. **[#18606](https://github.com/ollama/ollama/pull/18606) — Add System One scoring API**  
   Introduces `POST /v1/systemone` for structured decisions using local Nimble and Tev models, returning choice probabilities, `noul`, and expected scores. This could open a new decision/scoring use case beyond chat.

2. **[#18665](https://github.com/ollama/ollama/pull/18665) — `ollama stop --all` and multi-model stop**  
   Adds `--all`/`-a` and support for stopping multiple models in one command via `/api/ps` and `keep_alive: 0`. Useful for server and workstation resource management.

3. **[#18663](https://github.com/ollama/ollama/pull/18663) — Preserve GLM string argument content**  
   Fixes GLM tool-call parsing so `</tool_call>` is detected only outside `<arg_value>`, and preserves leading/trailing newlines in well-formed string values. Directly addresses issues #18659 and #18658.

4. **[#18664](https://github.com/ollama/ollama/pull/18664) — Recover Gemma4 tool calls with trailing noise**  
   Recovers complete argument objects followed by non-JSON noise instead of rejecting the whole call. A pragmatic parser-hardening fix for real model output.

5. **[#18661](https://github.com/ollama/ollama/pull/18661) — Allow narrow window and always-on-top mode**  
   Fixes #16203 by lowering minimum window dimensions and adding an always-on-top mode. This is one of the most user-visible desktop improvements in the queue.

6. **[#18662](https://github.com/ollama/ollama/pull/18662) — Windows tray: open UI on single left click**  
   Separates left-click from right-click behavior so the tray icon can bring Ollama up in one click. Small but meaningful UX polish for Windows users.

7. **[#18668](https://github.com/ollama/ollama/pull/18668) — Allow hiding the macOS menu bar icon**  
   Adds a persistent setting to hide/show the menu bar icon while keeping Ollama running. Aimed at background-service users who want less UI clutter.

8. **[#9131](https://github.com/ollama/ollama/pull/9131) — Add API key authentication for Ollama server**  
   Introduces optional Bearer-token API key auth with new `serve` flags and middleware. Long-standing enterprise/security request that would make exposed Ollama servers safer.

9. **[#11589](https://github.com/ollama/ollama/pull/11589) — Respond with `text/event-stream` (SSE) if requested**  
   Enables SSE responses when `Accept: text/event-stream` is first, sending JSON chunks as default `message` events. Important for clients expecting standard streaming semantics.

10. **[#18657](https://github.com/ollama/ollama/pull/18657) — MLX: port Metal custom kernels to CUDA**  
    Ports `mamba2_scan`, `depthwise_conv_silu`, and `gated_delta` kernels to CUDA so they no longer fall back to graph ops. Performance-focused work for CUDA-backed MLX paths.

## 4. Feature Request Trends
- **Desktop app ergonomics:** narrow/resizable windows, always-on-top mode, tray/menu-bar controls, and one-click access.  
  [#16203](https://github.com/ollama/ollama/issues/16203), [#18668](https://github.com/ollama/ollama/pull/18668), [#18662](https://github.com/ollama/ollama/pull/18662), [#18661](https://github.com/ollama/ollama/pull/18661)
- **Robust tool-call parsing across model families:** Gemma4, Qwen3, Qwen3-Coder, and GLM edge cases dominate recent issue/PR activity.  
  [#18390](https://github.com/ollama/ollama/issues/18390), [#18354](https://github.com/ollama/ollama/issues/18354), [#18421](https://github.com/ollama/ollama/issues/18421), [#18659](https://github.com/ollama/ollama/issues/18659), [#18658](https://github.com/ollama/ollama/issues/18658)
- **Reasoning/thinking controls:** users want documented `think` levels to behave predictably and reject or warn on unsupported values.  
  [#18632](https://github.com/ollama/ollama/issues/18632)
- **Agentic and launcher integrations:** requests for `ollama launch chrome`, Perplexity/Comet browsing, and Docker SBX agent support.  
  [#18667](https://github.com/ollama/ollama/issues/18667), [#18666](https://github.com/ollama/ollama/issues/18666), [#18425](https://github.com/ollama/ollama/issues/18425)
- **Enterprise/API readiness:** API key auth, SSE streaming, and backward-compatible parameter handling.  
  [#9131](https://github.com/ollama/ollama/pull/9131), [#11589](https://github.com/ollama/ollama/pull/11589), [#18542](https://github.com/ollama/ollama/issues/18542)

## 5. Developer Pain Points
- **Silent tool-call failures:** valid calls are frequently dropped, truncated, or returned as empty content due to parser edge cases. This is the dominant source of recent bugs and fixes.
- **Breaking API/parameter changes:** removal or rejection of previously accepted parameters like `typical_p` breaks existing clients that cannot omit them.
- **Cloud reliability and opaque failures:** the Cloud Pro 95% failure report and Qwen3.8 500 errors erode trust in hosted/API workflows.
- **Poor failure visibility in desktop app:** long-running chats can fail silently after 60 seconds with no GUI notification, making debugging difficult.
- **Parser precision and whitespace handling:** delimiter collisions, int64 overflow, newline stripping, and unquoted keys show that model-specific parsers need more exhaustive edge-case coverage.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

# llama.cpp Community Digest — 2026-09-27

## Today's Highlights
llama.cpp shipped a dense set of backend optimizations: CUDA gained Nemotron 3 Puzzle SSM scan state-size 96 support and F16 FWHT input, ggml-cpu added tiled `mul_mat` for k-quants, and OpenCL added an A8 Q8_0 non-MoE dp4a binary kernel. Model support expanded with Ling 3.0 VL and a dedicated Ling 3.0 chat parser, while server fixes addressed UTF-8 sanitization, usage accounting for `n > 1`, and a Windows `wake_fd` warning. Community attention remains focused on backend stability (SYCL, Vulkan, CUDA) and speculative decoding correctness on quantized targets.

## Releases
- **b11205** — CUDA: support Nemotron 3 Puzzle state size 96 for SSM scan ([#28717](https://github.com/ggml-org/llama.cpp/pull/28717))
- **b11203** — CUDA: add F16 input to the FWHT ([#29096](https://github.com/ggml-org/llama.cpp/pull/29096))
- **b11202** — Server: fix `wake_fd` warning on Windows ([#29479](https://github.com/ggml-org/llama.cpp/pull/29479))
- **b11201** — Revert "Change max context length for auto-fitting with unified KV" ([#29437](https://github.com/ggml-org/llama.cpp/pull/29437))
- **b11200** — Jinja: implement `sameas` test ([#29448](https://github.com/ggml-org/llama.cpp/pull/29448))
- **b11199** — Jinja: fix compile error ([#29468](https://github.com/ggml-org/llama.cpp/pull/29468))
- **b11195** — ggml-cpu: tiled `mul_mat` for k-quants ([#27851](https://github.com/ggml-org/llama.cpp/pull/27851))
- **b11194** — OpenCL: add A8 Q8_0 non-MoE dp4a binary kernel ([#29439](https://github.com/ggml-org/llama.cpp/pull/29439))
- **b11193** — Hexagon: find software divide calls using binary inspection tool ([#29449](https://github.com/ggml-org/llama.cpp/pull/29449))
- **b11192** — Vendor: update cpp-httplib to 0.58.0 ([#29407](https://github.com/ggml-org/llama.cpp/pull/29407))

## Hot Issues
1. **[#14909](https://github.com/ggml-org/llama.cpp/issues/14909)** — *Feature Request: Implement missing ops from backends* (55 comments, 👍9). Long-running “good first issue” tracking backend parity gaps; high engagement signals ongoing pain for non-CUDA users.
2. **[#27198](https://github.com/ggml-org/llama.cpp/issues/27198)** — *SYCL `--split-mode tensor` crashes in `dev2dev_memcpy` (DEVICE_LOST) on dual Arc Pro B70* (31 comments). Multi-GPU SYCL instability despite working P2P remains a serious blocker.
3. **[#25618](https://github.com/ggml-org/llama.cpp/issues/25618)** — *Speculative decoding diverges from vanilla on quantized targets* (27 comments, 👍2). Correctness bug for `draft-mtp`/`draft-dspark` under greedy sampling; affects trust in speculative decoding.
4. **[#25593](https://github.com/ggml-org/llama.cpp/issues/25593)** — *SM_60 quality loss: FP32 math silently done in FP16* (18 comments, 👍4). Precision regression on older NVIDIA GPUs; fix exists in forks but not upstream.
5. **[#24795](https://github.com/ggml-org/llama.cpp/issues/24795)** — *gemma4-assistant MTP draft model fails to load — “invalid vector subscript”* (11 comments, 👍11). High community reaction to a regression between b9553 and b9702/b9717.
6. **[#29424](https://github.com/ggml-org/llama.cpp/issues/29424)** — *Feature Request: Add support for K2 Horizon (0.9B, 3.7B, 7B, 32B, 36B MoVA)* (10 comments). New model architecture request with active discussion.
7. **[#27922](https://github.com/ggml-org/llama.cpp/issues/27922)** — *Feature Request: Support GLM5.3 (flash)* (6 comments, 👍18). Strong user demand for another major model family.
8. **[#29104](https://github.com/ggml-org/llama.cpp/issues/29104)** — *Server silently stops processing when `/metrics` is scraped by VictoriaMetrics* (9 comments). Production reliability issue for observability integrations.
9. **[#27428](https://github.com/ggml-org/llama.cpp/issues/27428)** — *`draft-mtp` roughly halves prompt processing on multi-GPU layer split* (7 comments, 👍2). Multi-GPU speculative decoding performance regression.
10. **[#29494](https://github.com/ggml-org/llama.cpp/issues/29494)** — *`repeat_last_n` / `dry_penalty_last_n` unbounded, causing multi-GB buffer and server OOM* (1 comment). Newly filed but severe resource-exhaustion bug.

## Key PR Progress
1. **[#29500](https://github.com/ggml-org/llama.cpp/pull/29500)** — *SYCL: add IQ3_S multi-column MMVQ*. Ports the IQ4_XS `switch_ncols` path to IQ3_S; benchmark shows 2.71x speedup on Qwen3.8-27B IQ3_S-heavy GGUF.
2. **[#29151](https://github.com/ggml-org/llama.cpp/pull/29151)** — *Model: add Ling 3.0 VL support*. Adds vision-language variant (124B total / 5.1B active, hybrid KDA + gated MLA, 512-expert MoE) with 27-block vision tower.
3. **[#29497](https://github.com/ggml-org/llama.cpp/pull/29497)** — *Bug: fix grammar builder crash on invalid `minItems`/`maxItems`*. Prevents fatal OOM when JSON schema or GBNF pattern has `minItems > maxItems`.
4. **[#29496](https://github.com/ggml-org/llama.cpp/pull/29496)** — *Server: report usage across all choices when `n > 1`*. Fixes `usage.completion_tokens` and `total_tokens` undercounting for multi-choice requests.
5. **[#28907](https://github.com/ggml-org/llama.cpp/pull/28907)** — *HIP: enable fattn-mma kernel on CDNA for `dkq > 256` at large batch sizes*. Improves large-head-size flash attention performance on AMD CDNA.
6. **[#29483](https://github.com/ggml-org/llama.cpp/pull/29483)** — *WebGPU: add MMVQ support for Q1_0/Q5_0/Q5_1/Q3_K/Q5_K/Q6_K/MXFP4*. Expands WebGPU quantization coverage; reports TG speedups on V100.
7. **[#26289](https://github.com/ggml-org/llama.cpp/pull/26289)** — *CUDA: tune FP16 tile FlashAttention configs for head sizes 40–112*. Addresses a long-standing TODO and retunes 13 rows in `ggml_cuda_fattn_tile_configs`.
8. **[#29120](https://github.com/ggml-org/llama.cpp/pull/29120)** — *Server: cold-start race conditions and queueing under concurrency limits*. Improves slot reservation and eviction protection.
9. **[#29492](https://github.com/ggml-org/llama.cpp/pull/29492)** — *CLI: fix exit code 0 when media loading fails*. `llama-cli --single-turn` now returns non-zero on missing/invalid media.
10. **[#28717](https://github.com/ggml-org/llama.cpp/pull/28717)** — *CUDA: support state size 96 for SSM scan op for Nemotron 3 Puzzle*. Avoids CPU fallback and significant performance loss for Nemotron-Labs-3-Puzzle-75B-A9B.

## Feature Request Trends
- **Backend parity and missing ops**: [#14909](https://github.com/ggml-org/llama.cpp/issues/14909) remains the central tracker for unimplemented operations across non-CUDA backends.
- **New model architecture support**: recurring requests for K2 Horizon ([#29424](https://github.com/ggml-org/llama.cpp/issues/29424)), GLM5.3 Flash ([#27922](https://github.com/ggml-org/llama.cpp/issues/27922)), and Ling 3.0 VL (PR [#29151](https://github.com/ggml-org/llama.cpp/pull/29151)).
- **Speculative decoding improvements**: users want reliable `draft-mtp`/`draft-dspark` behavior, especially on quantized targets and multi-GPU setups ([#25618](https://github.com/ggml-org/llama.cpp/issues/25618), [#27428](https://github.com/ggml-org/llama.cpp/issues/27428)).
- **Server robustness and observability**: requests for safer resource bounds, correct usage reporting, and non-crashing metrics endpoints ([#29494](https://github.com/ggml-org/llama.cpp/issues/29494), [#29104](https://github.com/ggml-org/llama.cpp/issues/29104)).

## Developer Pain Points
- **Backend-specific crashes and regressions**: SYCL `DEVICE_LOST`/TDR ([#27198](https://github.com/ggml-org/llama.cpp/issues/27198), [#28778](https://github.com/ggml-org/llama.cpp/issues/28778)), Vulkan device loss/OOM/ARGSORT ([#27076](https://github.com/ggml-org/llama.cpp/issues/27076), [#29431](https://github.com/ggml-org/llama.cpp/issues/29431)), CUDA `cublasCreate_v2` allocation failures ([#25304](https://github.com/ggml-org/llama.cpp/issues/25304)), and OpenVINO exceptions ([#27546](https://github.com/ggml-org/llama.cpp/issues/27546)).
- **Quantization and precision correctness**: SM_60 silently using FP16 math ([#25593](https://github.com/ggml-org/llama.cpp/issues/25593)) and speculative decoding divergence on quantized targets ([#25618](https://github.com/ggml-org/llama.cpp/issues/25618)).
- **Multi-GPU scaling issues**: tensor split crashes, draft-model load failures, and prompt-processing regressions on layer-split setups ([#27198](https://github.com/ggml-org/llama.cpp/issues/27198), [#24795](https://github.com/ggml-org/llama.cpp/issues/24795), [#27428](https://github.com/ggml-org/llama.cpp/issues/27428)).
- **Resource exhaustion and OOM**: unbounded sampler parameters ([#29494](https://github.com/ggml-org/llama.cpp/issues/29494)), grammar builder OOM ([#29497](https://github.com/ggml-org/llama.cpp/pull/29497)), and Vulkan memory allocation failures ([#29270](https://github.com/ggml-org/llama.cpp/issues/29270)).
- **Windows-specific friction**: `wake_fd` warnings ([#29479](https://github.com/ggml-org/llama.cpp/pull/29479)) and CUDA crashes on Windows ([#23210](https://github.com/ggml-org/llama.cpp/issues/23210)).
- **Stale but high-engagement issues**: several long-lived bugs carry strong upvotes, indicating unresolved user pain despite community demand ([#24795](https://github.com/ggml-org/llama.cpp/issues/24795), [#27922](https://github.com/ggml-org/llama.cpp/issues/27922)).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*