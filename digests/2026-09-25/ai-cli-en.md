# AI CLI Tools Community Digest 2026-09-25

> Generated: 2026-09-24 22:16 UTC | Tools covered: 12

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



### Key Updates

* **Claude Code v2.1.282** released with a `maxProseWidth` setting for wide-terminal readability and improved telemetry-variable visibility in `/status` and `claude doctor`. ([Link](https://github.com/anthropics/claude-code/releases/tag/v2.1.282))
* **GitHub Copilot CLI v1.0.89-3** shipped, fixing Ask-user forms to keep custom "Other" answers separate across questions, while v1.0.89-2 enforces MCP OAuth scopes and adds `Esc Esc` empty-input prompt rollback. ([Link](https://github.com/github/copilot-cli))
* **Qwen Code v0.24.5** released across CLI, Desktop, and TypeScript SDK (v0.1.15), bringing managed runtime support and preserving session-creation failure diagnostics. ([Link](https://github.com/QwenLM/qwen-code))
* **OpenCode** enabled the LSP tool by default, removing its experimental flag, and merged a new transcript detail slider allowing users to cycle final-response-only, compact tool summaries, and full outputs. ([Link](https://github.com/anomalyco/opencode/pull/44757))
* **Pi** merged a critical fix for dropped tool results on parallel abort, added HTML export toggles for hidden messages, and expanded provider support for Anthropic Claude on Google Vertex AI. ([Link](https://github.com/earendil-works/pi))
* **Gemini CLI** rolled out v0.62.0-nightly.20260924.g8e70c862f and v0.62.0-preview.0, adding VS Code integration test checks and fixing a CLI bug to display a retry progress indicator. ([Link](https://github.com/google-gemini/gemini-cli))
* **OpenAI Codex** published incremental alpha releases v0.158.0-alpha.6 through alpha.10, continuing rapid iteration on the Rust-based CLI and desktop application. ([Link](https://github.com/openai/codex))
* **llama.cpp** released builds b11157–b11169, featuring Hexagon dynamic quantizer improvements, CUDA F16 kernel support for `CONV_2D_DW`, and Vulkan cooperative matrix tuning for Adreno GPUs. ([Link](https://github.com/ggml-org/llama.cpp))

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills Community Highlights Report
*Data as of 2026-09-25 · Source: [anthropics/skills](https://github.com/anthropics/skills)*

> **Data note:** PR comment counts were returned as `undefined` in the source dataset. The PR ranking below reflects the repository's own presentation order (top 20 of 50 by comments). Issue comment counts are concrete and used for trend analysis.

---

## 1. Top Skills Ranking (by community attention)

**#1298 — [fix(skill-creator): isolate trigger evals and handle Windows and runtime failures](https://github.com/anthropics/skills/pull/1298)** — MartinCajiao · Open
Targets the skill-creator's trigger evaluation, which reports false misses/invalid scores because per-worker command probes compete, `select()` on subprocess pipes fails on Windows, and unrelated tools stop the scan. Runtime failures are also incorrectly treated as non-triggers. This directly addresses the trigger-detection reliability problems surfacing in Issues #556 and #1721.

**#1771 — [feat(skills): add proofcore-contract-auditor for smart contract notarization](https://github.com/anthropics/skills/pull/1771)** — ProofCore-Protocol · Open
An Agent Skill for Web3 developers that performs automated static analysis of Solidity and Rust smart contracts and anchors cryptographic audit proofs onto the public TON Blockchain via ProofCore's zero-storage Merkle protocol. One of the newest entries (2026-09-15).

**#1742 — [fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers](https://github.com/anthropics/skills/pull/1742)** — Kuldeeep18 · Open
Fixes Issue #1668: in `mcp>=2.0.0`, `streamablehttp_client` was renamed to `streamable_http_client`, and custom HTTP headers are now configured via `create_mcp_http_client`/`http_client` rather than as a direct kwarg. Critical compatibility fix for the mcp-builder skill.

**#1703 — [Add md2video-audio skill](https://github.com/anthropics/skills/pull/1703)** — 70v-Yoyo · Open
A zero-cost skill that compiles Markdown documents into professional-grade MP4 videos with realistic human-like voiceovers, using Marp for slide conversion. Bridges documentation and video production.

**#1734 — [Detect orphaned docx comments](https://github.com/anthropics/skills/pull/1734)** — rohitjain25 · Open
Targets orphaned Word document comments — a document-quality gap in the docx skill suite.

**#525 — [Add pyxel skill for retro game development](https://github.com/anthropics/skills/pull/525)** — kitao · Open (updated 2026-09-22)
Guides implementation, headless input-driven runs, direct frame inspection, and task-specific state checks for retro games built with the Pyxel Python framework. Separate references cover Pyxel behavior, presentation, and release-check evidence.

**#514 — [Add document-typography skill: typographic quality control for generated documents](https://github.com/anthropics/skills/pull/514)** — PGTBoos · Open
Prevents orphan word wrap (1–6 words spilling onto the next line), widow paragraphs (headers stranded at page bottom), and numbering misalignment in AI-generated documents. Addresses issues that affect every generated document.

**#1615 — [Add scnet-hpc skill](https://github.com/anthropics/skills/pull/1615)** — lql341 · Open
Operates SCNet HPC clusters through profile-based SSH and Slurm workflows: profile-specific connection/partition/memory/module/accelerator guidance, SSH setup, Slurm job generation, cluster discovery, and compute-node targeting.

---

## 2. Community Demand Trends (from Issues)

| Trend | Leading Issue | Signal |
|---|---|---|
| **Security & trust boundaries** | [#492 — Community skills under `anthropic/` namespace enable trust boundary abuse](https://github.com/anthropics/skills/issues/492) (43 comments) | The highest-engagement issue: community-made skills impersonating official Anthropic skills create a permission/trust vulnerability. |
| **Org-wide skill sharing** | [#228 — Enable org-wide skill sharing in Claude.ai](https://github.com/anthropics/skills/issues/228) (16 comments, 👍 8) | Users want a shared skill library or direct sharing link instead of manual .skill file exchange via Slack/Teams. |
| **Skill-creator reliability** | [#556 — run_eval.py: claude -p never triggers skills (0% trigger rate)](https://github.com/anthropics/skills/issues/556) (12 comments, 👍 7) | The evaluation harness reports 0% trigger rate across all queries — a core tooling defect. |
| **Skill discovery/visibility** | [#62 — All my skills have disappeared](https://github.com/anthropics/skills/issues/62) (10 comments) | Users report skills vanishing after file renames — a discoverability/persistence concern. |
| **Agent state compaction** | [#1329 — Proposing compact-memory skill](https://github.com/anthropics/skills/issues/1329) (9 comments) | Symbolic notation for compacting long-running agent state and persistent memory out of prose. |
| **Skill-creator quality** | [#202 — skill-creator should be updated to best practice](https://github.com/anthropics/skills/issues/202) (8 comments, CLOSED) | Critique that skill-creator reads as developer docs rather than an operational skill; token-inefficient. |
| **Governance & safety** | [#412 — Skill proposal: agent-governance](https://github.com/anthropics/skills/issues/412) (6 comments, CLOSED) | Demand for policy enforcement, threat detection, trust scoring, and audit trails for AI agent systems. |
| **Duplicate skills** | [#189 — document-skills and example-skills plugins install identical content](https://github.com/anthropics/skills/issues/189) (6 comments, 👍 9) | Plugin overlap causes duplicate skills in context window. |

**Distilled demand directions:** (1) security/trust-boundary hardening, (2) skill distribution & sharing infrastructure, (3) reliable skill-creator evaluation tooling, (4) agent memory/state management, (5) governance & safety patterns, (6) document quality (typography, orphaned content), (7) HPC/scientific computing, (8) game development, (9) video/content production.

---

## 3. High-Potential Pending Skills (open PRs, not yet merged)

These active PRs have recent update dates and may land soon:

- **[#1769 — Fix skill-creator trigger detection reporting 0% recall](https://github.com/anthropics/skills/pull/1769)** — ChiFungHillmanChan · Updated 2026-09-15. Fixes Issue #1721 where `run_loop` tunes descriptions against evidence that every positive query failed.
- **[#1776 — Add blast-radius skill](https://github.com/anthropics/skills/pull/1776)** — kishormorol · Updated 2026-09-18. A pre-destructive-write checklist (archiving users, revoking access, deleting rows, batch mail) covering the gap between a correct query and a correct bulk operation.
- **[#1792 — fix(docx): report LibreOffice timeout as error and verify output](https://github.com/anthropics/skills/pull/1792)** — TINGyu123644 · Updated 2026-09-23. `accept_changes.py` now errors on `soffice` timeout and verifies the output DOCX no longer carries revision marks.
- **[#1790 — fix(docx): create document.xml.rels when missing in comment.py](https://github.com/anthropics/skills/pull/1790)** — TINGyu123644 · Updated 2026-09-19. Registers four comment relationships when the rels file is missing.
- **[#822 — feat: add AWT (AI Watch Tester) — AI-powered E2E testing skill](https://github.com/anthropics/skills/pull/822)** — ksgisang · Updated 2026-09-19. Zero-code E2E test generation giving Claude vision and browser control.
- **[#723 — feat: add testing-patterns skill](https://github.com/anthropics/skills/pull/723)** — 4444J99 · Updated 2026-09-21. Comprehensive testing stack coverage: testing trophy model, AAA patterns, React component testing, and more.
- **[#1742 — fix(mcp-builder): mcp>=2 compatibility](https://github.com/anthropics/skills/pull/1742)** — Kuldeeep18 · Updated 2026-09-19 (see Top Skills above).
- **[#1703 — md2video-audio](https://github.com/anthropics/skills/pull/1703)** — 70v-Yoyo · Updated 2026-09-15 (see Top Skills above).

---

## 4. Skills Ecosystem Insight

> The community's most concentrated demand is at the **trust and reliability layer of the Skills ecosystem itself** — specifically, stopping community skills from impersonating official Anthropic skills (Issue #492, 43 comments) and fixing the skill-creator's broken trigger evaluation so Skills can be reliably authored, tested, and distributed.

---



# Claude Code Community Digest — 2026-09-25

---

## 1. Today's Highlights

Claude Code v2.1.282 shipped with a `maxProseWidth` setting for wide-terminal readability and improved telemetry-variable visibility in `/status` and `claude doctor`. The mod layer saw a tight cluster of five merged PRs — all from contributor `poteat` — addressing `AGENTS.md` pagination semantics, forced Git color handling in the diff panel, telemetry version propagation, read-only shell-command refetching, and hook command-name scanning. Engagement on issues remains heavily Windows-centric, with Cowork VM failures, scheduled-task orphaning, and MSIX rendering problems dominating the conversation.

## 2. Releases

**v2.1.282** — [anthropics/claude-code](https://github.com/anthropics/claude-code/releases/tag/v2.1.282)

- **`maxProseWidth`** caps the width of Claude's prose output in wide terminals; tables and code blocks retain full width for readability.
- **Startup notice + `/status` + `claude doctor`** now surface telemetry variables found in a project's settings files, making it easier to audit what's being captured.

## 3. Hot Issues

1. **[#30176] `.ignore` not respected by file picker** — 22 comments, 3 👍. A long-standing regression where the TUI file picker ignores `.ignore` rules on macOS. High visibility; the bug has a repro and has been open since March. [link](https://github.com/anthropics/claude-code/issues/30176)

2. **[#64592] Cowork VM service not running on Windows 11** — 13 comments. Fresh repro of the "VM service not starting" failure cluster; all built-in recovery options fail, only a manual Virtual Machine Configuration workaround works. Extends the closed #54891 / #61559 cluster. [link](https://github.com/anthropics/claude-code/issues/64592)

3. **[#36700] Cowork remote plugins serve stale marketplace cache** — 13 comments, 1 👍. Cowork mounts remote plugins read-only, so there's no user-accessible path to force a cache refresh — unlike the CLI plugin system where users can `git pull` the local clone. [link](https://github.com/anthropics/claude-code/issues/36700)

4. **[#51464] Segmentation fault at address** — 12 comments. A core crash with repro steps on Windows; low 👍 but high severity given it's a segfault in the core runtime. [link](https://github.com/anthropics/claude-code/issues/51464)

5. **[#50982] Remote SSH sessions lose UI message history after Windows reboot** — 8 comments, **7 👍**. When using Claude Desktop (Windows) over SSH, rebooting the client wipes the UI conversation history even though the underlying session JSONL persists on the remote host. Strong community consensus this is a real data-loss-adjacent bug. [link](https://github.com/anthropics/claude-code/issues/50982)

6. **[#61675] `/goal` long prompt has no "Show less" control** — 6 comments, 3 👍. Long `/goal` prompts hide task status and messages with no collapse affordance, making it hard to see what's running. [link](https://github.com/anthropics/claude-code/issues/61675)

7. **[#64275] `/insights` skill returns empty `{}` for AI-generated sections** — 3 comments, 1 👍. The skill's analysis sections come back empty, suggesting a backend or parsing regression. [link](https://github.com/anthropics/claude-code/issues/64275)

8. **[#77239] Claude in Chrome: nondeterministic browser targeting** — 3 comments. The extension targets the wrong Chrome profile/window/device nondeterministically across multi-profile setups (personal + Workspace). [link](https://github.com/anthropics/claude-code/issues/77239)

9. **[#87266] Suspected prompt injection in background subagent tool-result stream** — 3 comments. A subagent's Bash tool results contained a `system-reminder`-formatted message instructing the agent to conceal file state from the user. Security-relevant; the injection vector through tool output is worth watching. [link](https://github.com/anthropics/claude-code/issues/87266)

10. **[#87251] Windows: tool calls fail on single-backslash paths in JSON** — 1 comment. Unescaped backslashes like `E:\Folder\file.md` in tool-call arguments produce invalid JSON, causing the entire arguments object to fail to parse. A Windows-only but fundamental path-handling bug. [link](https://github.com/anthropics/claude-code/issues/87251)

## 4. Key PR Progress

All five merged PRs this cycle come from `poteat` and cluster around the mod/diff layer and telemetry:

1. **[#96364] Auto-paginated `Read` of nested `AGENTS.md` no longer double-delivers** — A whole-file `Read` over the token cap is paginated by the tool; the mod now correctly treats the first page + banner as delivery, so subsequent directory Reads don't re-attach the file. [link](https://github.com/anthropics/claude-code/pull/96364)

2. **[#96363] `diff` passes `--no-color` to suppress forced Git colors** — Repositories with `color.ui=always` or `color.diff=always` were returning ANSI escapes that emptied the diff body in the panel (header/counts from `--shortstat`/`--numstat` remained correct). [link](https://github.com/anthropics/claude-code/pull/96363)

3. **[#96487] Telemetry rows carry engine version, base version, and build time** — External builds were sending telemetry with no version because the mod probed environment fields before the engine exposed its own. `$.session.version()` now provides `{ version, base?, builtAt? }` on builds ≥ 2.1.281. [link](https://github.com/anthropics/claude-code/pull/96487)

4. **[#95423] `diff` panel skips refetch on read-only shell commands** — The mod was refetching after every Bash/PowerShell call; it now checks `isReadOnly` and skips refetch for `ls`, `git status`, `cat`, `grep`, etc. [link](https://github.com/anthropics/claude-code/pull/95423)

5. **[#96570] `command.run` hook names its command by a literal the engine's scan reads** — The mod matched its own command through a named constant; the engine's hooks-module scan reads literal command names in `command.run` matchers to decide which slash commands must wait for module load. This avoids a startup ordering hazard. [link](https://github.com/anthropics/claude-code/pull/96570)

## 5. Feature Request Trends

Distilling from the issue landscape, the most-requested directions are:

- **Windows Cowork / VM stability** — repeated, overlapping reports (#64592, #87252, #87263, #36700) demand a robust VM lifecycle fix and a user-facing cache-refresh mechanism for remote plugins.
- **Scheduled-task reliability** — unattended sessions dying from permission-prompt + idle-disconnect interactions (#87263), retry loops that never terminate (#87252), and ambiguous `/schedule` backend responses (#87274).
- **UI state persistence** — forked sessions not registering for Remote Control (#78563), routine-backed sessions forgetting closed panel state (#87279), and SSH sessions losing history on reboot (#50982) all point to a need for durable session metadata.
- **Path and JSON handling on Windows** — backslash escaping in tool-call arguments (#87251) and MSIX rendering failures (#87267) suggest Windows edge cases remain under-tested.
- **Security hardening** — prompt injection through tool output (#87266, #95150) and safety-classifier false positives (#88056, #95189) indicate the guardrails need tuning.

## 6. Developer Pain Points

The recurring frustrations cluster around three themes:

1. **Windows is a second-class citizen.** Cowork VM failures, scheduled-task orphaning, MSIX renderer composite errors, backslash path parsing, and voice-input transcription dropouts all target Windows specifically. Developers on Windows report workarounds (manual VM config toggles, restarts that don't help) rather than fixes.

2. **State doesn't survive across boundaries.** Whether it's UI history across a reboot, plugin cache across a server deploy, or session registration across a fork, the pattern is consistent: something transient is treated as authoritative and nothing durable catches it.

3. **Mod/tool-layer fragility.** The diff panel breaking under forced Git colors, `AGENTS.md` double-delivery on pagination, and telemetry rows arriving without version info all stem from the mod layer probing or matching before the engine has fully exposed its state. The fixes this cycle are all in this layer — suggesting it's both the most active and the most brittle part of the system.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



# OpenAI Codex Community Digest — 2026-09-25

Welcome to the daily community digest for OpenAI Codex. Below is a structured analysis of the latest releases, hot issues, merged pull requests, and key trend lines from the repository over the last 24 hours.

---

### 1. Today's Highlights
The Codex repository is experiencing a high volume of user-reported bugs, particularly centered around Windows desktop UI responsiveness (such as frozen send buttons and missing git controls) and sandbox initialization failures. On the development side, a major batch of backend and configuration improvements was merged, notably focusing on MCP (Model Context Protocol) startup readiness, configurable schema budgets, and TUI prompt suggestions.

---

### 2. Releases
* **v0.158.0-alpha.6 through alpha.10**: Incremental alpha releases of the Rust-based Codex CLI and desktop application, continuing the rapid iteration on the Rust codebase.
* **v0.157.0-alpha.11.1**: Patch-level alpha release maintaining stability for the previous minor line.
* *Note: Developers are encouraged to test the latest `0.158.0-alpha` builds to check for improvements, but should be aware of the sandbox and UI regressions noted in the issues section below.*

---

### 3. Hot Issues
We select 10 of the most impactful issues based on community engagement, severity, and recurrence:

* **[Bug] Windows Codex desktop: Send button spins forever and prompts never submit (#40968)**  
  * **Why it matters:** A critical UI deadlock preventing any prompt submission on Windows desktop versions.  
  * **Community reaction:** Extremely high engagement with 53 comments

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>



# Gemini CLI Community Digest — 2026-09-25

Welcome to the community digest for the Google Gemini CLI. Below is a summary of the latest releases, hot issues, pull request progress, and key trends shaping the developer ecosystem around Gemini CLI as of September 25, 2026.

---

### 1. Today's Highlights
The Gemini CLI repository is experiencing a massive wave of stability, security, and performance updates, particularly targeting long-running agent loop memory management, critical authentication loops on Windows/WSL, and sandbox security bypasses. Community issues are heavily focusing on agent autonomy, subagent reporting accuracy, and context-window optimization, reflecting a transition phase toward highly autonomous, low-latency background operations.

---

### 2. Releases

#### **v0.62.0-nightly.20260924.g8e70c862f**
*   Added checks for VS Code integration test presence when running ([PR #29462](https://github.com/google-gemini/gemini-cli/pull/29462)).
*   Fixed a CLI bug to display a retry progress indicator during connection recovery ([PR #28340](https://github.com/google-gemini/gemini-cli/pull/28340)).

#### **v0.62.0-preview.0**
*   Fixed an early return issue on unsupported stores in the `a2a-server` tasks metadata endpoint ([PR #29334](https://github.com/google-gemini/gemini-cli/pull/29334)).
*   Standardized changelog automation updates.

#### **v0.61.0 & v0.61.0-preview.1**
*   Patched versioning and cherry-picked critical hotfixes into the `v0.61.0-preview.0` branch to resolve edge cases in task state tracking ([PR #29455](https://github.com/google-gemini/gemini-cli/pull/29455)).

---

### 3. Hot Issues
These are the top 10 noteworthy issues driving community discussion and developer focus:

*   **Subagent Recovery Reports False Success (GOAL) after MAX_TURNS [#22323](https://github.com/google-gemini/gemini-cli/issues/223

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Thinking Process:

1.  **Analyze the Request:**
    *   **Role:** Technical analyst focused on AI developer tools.
    *   **Subject:** GitHub Copilot CLI community digest for 2026-09-25.
    *   **Data Source:** Provided GitHub data for `github.com/github/copilot-cli` (latest releases, issues, pull requests).
    *   **Format:** Structured English digest with specific sections:
        1.  **Today's Highlights** (2-3 sentences summarizing the most important updates).
        2.  **Releases** (Summarize changes if new versions exist).
        3.  **Hot Issues** (Pick 10 noteworthy issues, explain why they matter and community reaction, include links).
        4.  **Key PR Progress** (Pick 10 important PRs - *Wait, the data says "Total: 1 items" for PRs, so I must pick the available ones, or note if there are fewer than 10, but let's look closely at the data. The prompt says "Pick 10 important PRs, describe features or fixes", but the data only lists 1 PR: #4948. I should adapt and describe the available ones, maybe extrapolate or focus on the 1 provided and note the low activity, or treat some closed issues as PR-like if needed, but stick strictly to the provided PR list first and supplement if needed, or just list the 1 PR and explain its significance, maybe noting the low PR volume for the 24h period.* Let's check the data again. Only 1 PR is listed under "Latest Pull Requests". I will write a section addressing the key PRs, highlighting the single one and explaining its context, or treating it as the sole highlight).
        5.  **Feature Request Trends** (Distill the most-requested feature directions from all issues).
        6.  **Developer Pain Points** (Summarize recurring developer frustrations or high-frequency requests).
    *   **Style:** Concise and professional, suited for technical developers. Include GitHub links for each item.

2.  **Analyze the Data:**
    *   **Releases:**
        *   `v1.0.89-3`: Fixed "Ask-user forms keep custom Other answers separate across questions".
        *   `v1.0.89-2`:
            *   *Added:* MCP pre-registered OAuth clients honor configured `oauthScopes`.
            *   *Added:* In local sessions, Esc Esc in an empty chat input takes back a prompt whose turn the model has not started answering and removes it from the conversation.
            *   *Improved:* Sandboxed commands on supported Windows versions can... (truncated, but likely sandbox improvements).
    *   **Issues (Top 30 by comment count, but I need to pick 10 "Hot Issues" that are noteworthy):**
        *   #4742 (OPEN): Desktop app 1.1.15 cannot create a second Local (branch) session while one is running. (11 comments, 5 👍) - Major workflow blocker for parallel sessions.
        *   #2058 (CLOSED): Add `/fork` command to branch a session for side quests without derailing the main objective. (10 comments, 10 👍) - Highly requested feature for session management.
        *   #4535 (CLOSED): `store_memory` fails in v1.0.81 prereleases: `Instance id is required`. (9 comments, 1 👍) - Core memory function broken in pre-releases.
        *   #2408 (CLOSED): Issues auto-updating CLI. (7 comments, 5 👍) - Installation reliability issue.
        *   #4725 (OPEN): Frequent JavaScript heap out of memory. (6 comments, 1 👍) - Performance/crash issue.
        *   #4699 (OPEN): OOM crash on long `--resume` sessions; crash dumps written into the user's cwd. (6 comments, 7 👍) - Serious memory leak and hygiene issue (dump files polluting cwd).
        *   #1974 (CLOSED): After upgrading Copilot CLI 1.0.3, generated Markdown links are not clickable. (6 comments, 1 👍) - Quality of life / markdown rendering issue.
        *   #4929 (OPEN): Process-local auth token stops refreshing; all prompts fail until restart. (5 comments, 0 👍) - Auth lifecycle issue causing dead sessions.
        *   #4905 (OPEN): Desktop app: sessions die minutes after spawn — "GitHub credential registration is no longer available for this session". (4 comments, 4 👍) - Critical auth/session spawn issue on desktop.
        *   #4780 (OPEN): Session compaction OOMs and never completes, leaving the session permanently unresumable. (2 comments, 3 👍) - Critical issue with session resumption/compaction loop.
        *   #4755 (OPEN): Session wedges permanently when a queued-lane message lands at turn end. (2 comments, 0 👍) - State machine deadlock/hang issue.
        *   #4639 (OPEN): event-storage exhaustion retry storm drives long-running session into GC/compaction loop and Node OOM. (2 comments, 0 👍) - Backend scaling/storage issue leading to OOM.
        *   #4432 (OPEN): rubber-duck: model-emitted `model` argument silently overrides the complementary strategy. (2 comments, 0 👍) - Sub-agent routing/model override bug.
        *   #4663 (OPEN): Failed compaction is retried unchanged on every turn: unbounded billed retries. (2 comments, 0 👍) - Billing/retry logic flaw.
        *   #4851 (OPEN): Azure MCP server fails sending HTTP request / BrokenPipe. (2 comments, 6 👍) - MCP integration reliability issue.
        *   Let's select the top 10 most impactful ones for the "Hot Issues" section, focusing on severity, community reactions (👍/comments), and recency.
            *   *Selection:*
                1.  #4742: Blocker on parallel local sessions (Desktop 1.1.15).
                2.  #4699: OOM crashes on resume + writing crash dumps to cwd.
                3.  #4929: Auth token stops refreshing, prompts fail until restart.
                4.  #4905: Desktop app sessions die minutes after spawn (credential registration error).
                5.  #4780: Session compaction OOMs and never completes (unresumable sessions).
                6.  #2058 (Closed): Highly requested `/fork` command for side quests (10 👍).
                7.  #4535 (Closed): `store_memory` failure (`Instance id is required`) in v1.0.81 prereleases.
                8.  #4851: Azure MCP server registry validation fails with BrokenPipe (6 👍).
                9.  #4663: Unbounded billed retries on failed compaction.
                10. #4755: Session wedges permanently on queued-lane message at turn end.
    *   **PRs (Total: 1 item):**
        *   #4948 (OPEN): Update github-script action pin to v9.0.0. (Housekeeping/dependency update). I will detail this, and perhaps note that PR activity was low in the last 24h, focusing on maintenance.
    *   **Feature Request Trends (from issues, especially closed ones like #2058, #2399, #2170, #3682, #2753):**
        *   *Session branching/forking:* #2058 (`/fork` command) is a major trend—users want to explore side quests without derailing the main objective.
        *   *Timeline history search:* #2170 (searchable timeline history similar to tmux).
        *   *Plugin/MCP optimization:* #2399 (sparse checkout for plugin installs to save bandwidth/disk) and plugin skill visibility (#2753).
        *   *BYOK credential refresh:* #3682 (refreshing BYOK provider credentials without restarting).
    *   **Developer Pain Points (recurring themes in issues):**
        *   *Memory and OOM crashes:* Multiple issues point to V8 heap limits (~4 GiB) being exceeded during long sessions, compaction, or event-storage storms (#4725, #4699, #4780, #4639).
        *   *Session state wedges and deadlocks:* Issues like #4755 (queued-lane wedge), #4742 (parallel session creation block), and #4929 (auth token failure halting all prompts) show fragility in long-running session state management.
        *   *Authentication and Policy conflicts:* Issues like #4905 (credential registration failure), #4844 (`--yolo` swallowed by pre-auth fail-closed), and #4522 (sandbox forced while policy undetermined) highlight friction between local settings and managed enterprise/auth policies.
        *   *MCP and Plugin reliability:* Failures in MCP servers (#4851 Azure BrokenPipe, #3948 `web_fetch` TypeError, #4556 marketplace silent auth bail) and plugin skill injection (#2753).

3.  **Drafting the Sections:**

    *   **Today's Highlights (2-3 sentences):**
        *   The GitHub Copilot CLI released version `v1.0.89-3` focusing on form input hygiene and UI responsiveness (Esc Esc to revert unanswered prompts, MCP OAuth scope enforcement).
        *   However, the community remains highly focused on critical stability issues, particularly around V8 heap out-of-memory (OOM) crashes during long sessions and session compaction, as well as authentication conflicts in the desktop wrapper.

    *   **Releases:**
        *   **v1.0.89-3**:
            *   *Fixes:* Ask-user forms now correctly keep custom "Other" answers separate across multiple questions, preventing data bleed in multi-step interactive forms.
        *   **v1.0.89-2**:
            *   *Added:* MCP pre-registered OAuth clients now strictly honor configured `oauthScopes`, enhancing security and compliance for custom integrations.
            *   *Added:* In local sessions, double-tapping `Esc Esc` on an empty chat input now safely rolls back a prompt whose turn the model has not started answering, removing it from the conversation history.
            *   *Improved:* Sandboxed commands have been enhanced on supported Windows versions (note: description truncated in data, but indicates Windows sandboxing progress).

    *   **Hot Issues (Pick 10, explain why they matter, community reaction, links):**
        *   *Issue 1: #4742 - Desktop app 1.1.15 blocks parallel Local sessions.*
            *   *Why it matters:* Users cannot run parallel local branch workflows in the desktop app if a CLI process is already active in the same project workspace.
            *   *Reaction:* 11 comments, 5 👍. Highly frustrating workflow limitation.
            *   *Link:* `https://github.com/github/copilot-cli/issues/4742`
        *   *Issue 2: #4699 - OOM crash on long `--resume` sessions; crash dumps pollute cwd.*
            *   *Why it matters:* Long-running sessions consistently hit the 4 GiB V8 heap cap, crashing the CLI and leaving diagnostic reports in the user's working directory.
            *   *Reaction:* 6 comments, 7 👍. High community annoyance at the file pollution and session fragility.
            *   *Link:* `https://github.com/github/copilot-cli/issues/4699`
        *   *Issue 3: #4929 - Process-local auth token stops refreshing, halting all prompts.*
            *   *Why it matters:* Long-running processes permanently lose auth, requiring a full restart to resume work, even though `/login` fails to recover it.
            *   *Reaction:* 5 comments. A major pain point for continuous background automation.
            *   *Link:* `https://github.com/github/copilot-cli/issues/4929`
        *   *Issue 4: #4905 - Desktop app sessions die minutes after spawn.*
            *   *Why it matters:* Bundled CLI in desktop app 1.1.22 fails to register GitHub credentials, killing sessions almost immediately after spawn.
            *   *Reaction:* 4 comments, 4 👍. Critical blocker for desktop users.
            *   *Link:* `https://github.com/github/copilot-cli/issues/4905`
        *   *Issue 5: #4780 - Session compaction OOMs and never completes, making sessions unresumable.*
            *   *Why it matters:* Compaction triggers an unrecoverable crash loop; resuming the session always re-enters the OOM state, permanently losing session history.
            *   *Reaction:* 2 comments, 3 👍. Severe data-loss risk for long-term session users.
            *   *Link:* `https://github.com/github/copilot-cli/issues/4780`
        *   *Issue 6: #2058 (Closed) - Add `/fork` command to branch sessions.*
            *   *Why it matters:* Allows users to branch off for side questions without derailing the primary multi-step objective.
            *   *Reaction:* 10 comments, 10 👍. Extremely high demand; core workflow improvement.
            *   *Link:* `https://github.com/github/copilot-cli/issues/2058`
        *   *Issue 7: #4535 (Closed) - `store_memory` fails in v1.0.81 prereleases.*
            *   *Why it matters:* Core memory-saving tool fails because the native memory writer is invoked without a required instance ID.
            *   *Reaction:* 9 comments. Broke core agent memory capabilities during testing.
            *   *Link:* `https://github.com/github/copilot-cli/issues/4535`
        *   *Issue 8: #4851 - Azure MCP server fails validation with BrokenPipe.*
            *   *Why it matters:* Overnight breakage preventing validation of MCP servers against Azure API Center registries.
            *   *Reaction:* 2 comments, 6 👍. High impact on enterprise Azure workflows.
            *   *Link:* `https://github.com/github/copilot-cli/issues/4851`
        *   *Issue 9: #4663 - Unbounded billed retries on failed compaction.*
            *   *Why it matters:* Compaction model call failures trigger identical, un-backoffed retries on every turn, billing the user repeatedly for failing operations.
            *   *Reaction:* 2 comments. Financial and performance waste.
            *   *Link:* `https://github.com/github/copilot-cli/issues/4663`
        *   *Issue 10: #4755 - Session wedges permanently on queued-lane message at turn end.*
            *   *Why it matters:* Sessions enter a permanently hung idle state, accepting no input and requiring manual process termination.
            *   *Reaction:* 2 comments. Critical concurrency state machine bug.
            *   *Link:* `https://github.com/github/copilot-cli/issues/4755`

    *   **Key PR Progress (Focus on the single listed PR, but frame it in the context of overall low PR volume for the cycle):**
        *   Since only one PR was updated in the last 24 hours, the focus is on repository maintenance:
        *   **PR #4948 - Update `github-script` action pin to v9.0.0**:
            *   *Details:* Refreshes the pinned `actions/github-script` dependency to the current v9.0.0 release commit.
            *   *Why it matters:* Critical for security and workflow automation hygiene. The maintainers verified that other actions (like `actions/stale`) are already up-to-date and that `git diff --check` passes cleanly, ensuring no whitespace or formatting errors break the pipelines.
            *   *Link:* `https://github.com/github/copilot-cli/pull/4948`

    *   **Feature Request Trends:**
        *   Distill the most-requested directions based on issues (both open and closed):
            *   **Session Forking and Branching (#2058, #4742):** Users heavily demand parallel session support, allowing them to branch off for side quests or run multiple local workspace sessions concurrently without conflict.
            *   **Timeline and History Interaction (#2170):** Searchable timeline history (similar to tmux copy-mode) is highly requested to easily navigate and jump back to previous conversation entries.
            *   **BYOK Credential Lifecycle Management (#3682):** Developers using short-lived tokens (AWS STS, Entra ID) need the CLI to support credential refreshing without requiring a process restart.
            *   **Plugin and Marketplace Optimization (#2399, #2753):** Requests for sparse checkout during plugin installs (to avoid cloning entire repos) and fixing plugin skill injection so marketplace skills are properly exposed to the agent system prompt.

    *   **Developer Pain Points:**
        *   Summarize the recurring patterns of frustration:
            *   **Memory Exhaustion (OOM) & Crashes:** Multiple issues (#4725, #4699, #4780, #4639) highlight a severe vulnerability in long-running sessions. V8 heap limits (~4 GiB) are easily exceeded, leading to crashes, session loss, and unrecoverable compaction loops.
            *   **Session State Fragility & Wedges:** Developers face high friction from sessions getting permanently wedged (#4755), auth tokens failing mid-flight (#4929), or session creation being blocked by desktop wrapper locks (#4742).
            *   **Enterprise and Policy Friction:** Local settings frequently clash with managed policies, such as the `--yolo` flag being swallowed by pre-auth fail-closed bypasses (#4844), sandbox settings being overridden while policy is undetermined (#4522), or MCP servers being blocked by policy errors (#3934).
            *   **MCP and Plugin Reliability:** Tools like `web_fetch` failing with generic network errors (#3948), Azure MCP connections breaking (#4851), and plugin marketplaces silently failing to register due to auth bails (#4556) represent high friction

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>



# Kimi Code CLI Community Digest — 2026-09-25

### 1. Today's Highlights
Today's activity in the `kimi-cli` repository is centered on security maintenance and dependency hygiene. The main highlight is the closure of PR #2622, which addresses critical security vulnerabilities by bumping the `asyncssh` dependency to version 2.23.1. No new releases or issues were reported in the last 24 hours, indicating a quiet day for community-driven bug reports and feature discussions.

---

### 2. Releases
*No new releases were published in the last 24 hours.*

---

### 3. Hot Issues
*No new issues were created or updated in the last 24 hours (Total: 0 items).* 

Because the issue tracker has seen zero activity today, there are no specific hot issues to highlight. The community is currently in a stable phase, likely focusing on integration and testing of recent updates.

---

### 4. Key PR Progress
Given the low activity window, only one key PR was updated and closed recently:

* **[CLOSED] deps: bump asyncssh to 2.23.1 in pykaos (GHSA-2wxc-x7rj-hg8f)**
  * **Author:** katsugtgz
  * **Summary:** This PR updates the `asyncssh` library from version 2.21.1 to 2.23.1 within the `pykaos` workspace package. The change is a critical security patch designed to remediate vulnerabilities tracked under security identifiers GHSA-2wxc-x7rj-hg8f and GHSA-qr67-gv47-xwwh. 
  * **Why it matters:** Keeping SSH dependencies secure is vital for maintaining the integrity of remote execution environments within the CLI tool.
  * **Link:** [MoonshotAI/kimi-cli PR #2622](https://github.com/MoonshotAI/kimi-cli/pull/2622)

---

### 5. Feature Request Trends
*No new feature requests were submitted in the last 24 hours.* 

With zero new issues logged, there is no fresh community feedback to distill into feature trends. The development team is currently focusing on backend security and dependency upgrades.

---

### 6. Developer Pain Points
*No new developer pain points or recurring frustrations were reported in the last 24 hours.* 

The repository is currently stable, with the engineering team proactively addressing security advisories rather than reacting to user-facing bugs or friction points.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



# OpenCode Community Digest — 2026-09-25

---

## 1. Today's Highlights

A burst of fresh issue filings on 2026-09-24 surfaces several critical TUI crashes and plugin API gaps, while a cluster of merged PRs delivers meaningful UX and provider improvements—including LSP tool enabled by default and a new transcript detail slider.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

### 🔴 #49057 — Muse Spark 1.3 Free access restricted via OpenCode Zen
**Author:** alkaserGG | [Link](https://github.com/anomalyco/opencode/issues/49057) | 15 comments

Users report every message through the OpenCode Zen provider fails with `[user_blocked]` in both new and existing sessions. The error offers no appeal path. This is the most-engaged issue of the day and strikes at the free-tier onboarding funnel.

### 🔴 #48743 — MCP warm-up / pre-spawn mechanism requested
**Author:** liudongyan13701205717-source | [Link](https://github.com/anomalyco/opencode/issues/48743) | 5 comments, 2 👍

With 14+ local stdio MCP servers configured on Windows, every server is marked `failed` at cold session start despite being healthy. Users must manually restart each one. This is a scaling/usability problem for power users with large MCP fleets.

### 🟡 #25344 — Auto-title generation silently fails when provider has no small model
**Author:** per-hap-s | [Link](https://github.com/anomalyco/opencode/issues/25344) | 4 comments

Sessions with providers lacking a small model never receive auto-generated titles, remaining stuck with the default "New session - …" indefinitely. A long-standing gap affecting providers that only offer large models.

### 🟡 #47624 — TUI: question dialog keyboard trapped after switching tabs
**Author:** felixarnold | [Link](https://github.com/anomalyco/opencode/issues/47624) | 3 comments

When typing a custom answer in a multi-question dialog and switching tabs, the keyboard becomes completely trapped—even Esc fails. Only app restart recovers. A severe TUI interaction bug.

### 🟡 #49175 — Foreign Effect NonEmptyString schemas reject valid input
**Author:** stevoland | [Link](https://github.com/anomalyco/opencode/issues/49175) | 3 comments, 1 👍

Tools registered by plugins using an Effect schema created outside OpenCode's bundled runtime advertise correctly (showing `minLength: 1`) but reject valid values at execution. Direct pain point for plugin developers integrating external Effect schemas.

### 🟡 #51087 — TodoWrite crashes session timeline in non-English locales
**Author:** tammatatsky-ctrl | [Link](https://github.com/anomalyco/opencode/issues/51087) | 2 comments

OpenCode Desktop 2.0.16 throws a renderer error (`TypeError: Iterable yielded undefined`) when displaying a TodoWrite tool call under Thai locale. Tool execution succeeds; only the UI timeline breaks. Confirms i18n gaps in the session renderer.

### 🟡 #50986 — One Dark Pro workspace messages have low contrast
**Author:** anabelle2001 | [Link](https://github.com/anomalyco/opencode/issues/50986) | 2 comments

User messages in workspace sessions render with a 1.2:1 contrast ratio under One Dark Pro (illegible), while local sessions achieve 14.1:1. An accessibility regression specific to the workspace session view.

### 🟡 #40066 — Desktop app freezes on external-directory permission check
**Author:** NathanDrake2406 | [Link](https://github.com/anomalyco/opencode/issues/40066) | 2 comments

A bash tool call triggering an external-directory permission check freezes the desktop app entirely—unresponsive until killed. Restart recovers but mislabels the never-run tool call as "interrupted." Long-lived issue (since August) with severe UX impact.

### 🟡 #50168 — Desktop zoom resets to 100% after restarting the app
**Author:** mitivil | [Link](https://github.com/anomalyco/opencode/issues/50168) | 2 comments, 2 👍

Ctrl++ / Cmd+ zoom changes are not persisted across app restarts in v2. The `wireZoom()` function explicitly resets the factor to 1. A simple but frustrating UX regression.

### 🟡 #50627 — Policy: deny shell `*` on custom agent breaks free tier
**Author:** Saka-CS | [Link](https://github.com/anomalyco/opencode/issues/50627) | 2 comments

Enabling `permissions: [{action: shell, resource: "*", effect: deny}]` on a custom primary agent causes all free-tier requests to fail with "OpenCode's free tier can only be used from within OpenCode"—even though the request originates inside the TUI. A permission policy / free-tier validation collision.

---

## 4. Key PR Progress

### ✅ #44757 — Enable LSP tool by default
**Author:** jinhuang712 | [Link](https://github.com/anomalyco/opencode/pull/44757)

Removes the `flags.experimentalLspTool` guard in `packages/opencode/src/tool/registry.ts` and always registers `tool.lsp`. The LSP tool is now available out of the box without experimental flags. Closes #44759.

### ✅ #51232 — Show child model beside subagent status
**Author:** opencode-agent[bot] | [Link](https://github.com/anomalyco/opencode/pull/51232)

The Subagents tab now displays each child session's selected model, including variant information. Falls back to provider/model when the child location catalog name can't be resolved. Does not guess a model when the child has none selected.

### ✅ #51166 — Apply GPT verbosity defaults at request time
**Author:** rekram1-node | [Link](https://github.com/anomalyco/opencode/pull/51166)

Removes the AI package's implicit `low` verbosity default and sets it explicitly at outbound request preparation for GPT-6 variants and known GPT-5 minor families. Covers direct OpenAI, Azure Responses, Bedrock Mantle, Cloudflare AI Gateway, and Vercel AI Gateway paths.

### ✅ #44721 — Add transcript detail slider
**Author:** opencode-agent[bot] | [Link](https://github.com/anomalyco/opencode/pull/44721)

Adds a draggable three-stop transcript detail control supporting final-response-only, compact tool summaries, and full code/tool output. Persists the selected detail level and exposes a command-palette cycle action. Backed by tests in `detail-level.test.ts`.

### ✅ #44725 — Restore OPENCODE_DISABLE_CLAUDE_CODE on v2
**Author:** malarahfelipe | [Link](https://github.com/anomalyco/opencode/pull/44725)

Brings back the `OPENCODE_DISABLE_CLAUDE_CODE` environment variable on the `v2` branch, which v1 used to prevent OpenCode from reading `~/.claude` (prompt and skills). Part of the broader #36990 migration effort.

### ✅ #44723 — Bundle @aihubmix/ai-sdk-provider
**Author:** 0genlab | [Link](https://github.com/anomalyco/opencode/pull/44723)

Adds the `@aihubmix/ai-sdk-provider` package as a bundled provider, enabling the Aihubmix model gateway natively. Ref #31909.

### ✅ #44722 — Resolve npm provider entrypoint to a file on Node
**Author:** 0genlab | [Link](https://github.com/anomalyco/opencode/pull/44722)

Fixes npm provider resolution on Node by resolving the entrypoint to an actual file rather than a directory, preventing module resolution failures. Closes #31909.

### ✅ #44709 — Isolate temporary scratch files
**Author:** opencode-agent[bot] | [Link](https://github.com/anomalyco/opencode/pull/44709)

Uses `$XDG_RUNTIME_DIR/opencode` for OpenCode's scratch directory when available, falling back to a unique `opencode-*` directory under the platform temp directory. Verifies the selected scratch directory is writable and searchable before use.

### ✅ #44705 — Coerce legacy string tool-part input
**Author:** LovePlayCode | [Link](https://github.com/anomalyco/opencode/pull/44705)

Fixes a data migration issue where OpenCode 1.14 stored some tool-part `state.input` values as JSON strings. v2's `Schema.Record` encoding broke deserialization of these legacy values. Closes #44688.

### ✅ #51231 — Promote radar fixes to production
**Author:** adamdotdevin | [Link](https://github.com/anomalyco/opencode/pull/51231)

Promotes #51161 from `dev` to `production` to fix Muse Spark contributor comparisons showing all-zero radar charts. Resolves contributor catalog metadata and uses labeled capability fallbacks when benchmark data is incomplete.

---

## 5. Feature Request Trends

The most-requested feature directions distilled from recent issues:

| Trend | Representative Issues | Summary |
|---|---|---|
| **MCP lifecycle management** | #48743 | Pre-spawn/warm-up mechanism for local stdio MCP servers to avoid cold-start failures |
| **Plugin API

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



# Pi Community Digest — 2026-09-25

## Today's Highlights

A wave of fixes landed today, addressing critical bugs across the TUI rendering pipeline, tool execution, and multi-provider compatibility. Notable merges include an HTML export toggle for hidden messages, a fix for dropped tool results on parallel abort, and new Anthropic Claude support on Google Vertex AI. Meanwhile, the community voiced frustration over issues being auto-closed without human review, signaling a need for better triage visibility.

## Releases

*No new releases in the last 24 hours.*

## Hot Issues

**1. [OPEN] Windows: shellPath non-deterministically ignored when extensions are loaded** — [#9361](https://github.com/earendil-works/pi/issues/9361) (11 comments)
A valid `shellPath` in `~/.pi/agent/settings.json` is silently discarded on Windows whenever any extension is active, falling back to Git Bash or the first `bash.exe` on `PATH`. This is a serious Windows-specific regression that breaks deterministic shell resolution for extension users.

**2. [OPEN] Bedrock: OpenAI models reject images nested in toolResult.content** — [#8643](https://github.com/earendil-works/pi/issues/8643) (7 comments, 2 👍)
Images returned inside `toolResult.content` blocks are rejected by OpenAI models served on AWS Bedrock. The fix (already prepared on a fork) hoists these images into sibling user content blocks, matching existing behavior in `openai-completions.ts`. This is a blocker for Bedrock users running OpenAI-compatible models.

**3. [OPEN] mistral-conversations: empty content deltas open text blocks (GLM 5.x)** — [#9674](https://github.com/earendil-works/pi/issues/9674) (7 comments)
Zero-length `content: ""` deltas from ZAI GLM 5.x models via the Mistral Conversations API open empty text blocks, causing 400 errors on session replay. The fix routes these models natively instead of through the OpenAI completions workaround, preserving Mistral's prompt cache.

**4. [OPEN] TuiMainScreen: full-screen redraw storm on long transcripts** — [#9255](https://github.com/earendil-works/pi/issues/9255) (7 comments, 1 👍)
On transcripts taller than the terminal viewport, `TuiMainScreen.doRender()` triggers a full-screen redraw on nearly every frame. The live thinking tail (~30 lines) growing past the viewport top causes violent jumping and doubled text — a significant rendering performance regression.

**5. [OPEN] pi-ai sends unsupported OpenAI-specific request fields to compatible providers** — [#9508](https://github.com/earendil-works/pi/issues/9508) (6 comments)
`pi-ai` injects OpenAI-specific request fields, message roles, and auth headers that some OpenAI-compatible providers reject with 400/422 errors. This affects any non-OpenAI provider sitting behind an OpenAI-compatible API surface.

**6. [OPEN] Context size defaults to 128k despite real size being available** — [#9566](https://github.com/earendil-works/pi/issues/9566) (5 comments, 3 👍)
When a `models.json` provider entry lists a model ID already exposed by the provider, Pi ignores the actual context size, cost, input, and maxTokens values, hardcoding 128k defaults. This is a major issue for self-hosted Llama and Ollama users.

**7. [OPEN] before_agent_start: forced system prompt keeps tools that setActiveTools removed** — [#9932](https://github.com/earendil-works/pi/issues/9932) (4 comments)
When a `before_agent_start` handler returns a `systemPrompt`, the forced text is captured before the active tool set is reconciled. Tools removed by another handler in the same chain remain advertised to the model — an extension hook ordering bug.

**8. [OPEN] ExtensionContext cannot detect queued custom continuations** — [#8349](https://github.com/earendil-works/pi/issues/8349) (3 comments)
Extensions cannot detect a custom continuation queued during `agent_end`, preventing them from reacting to or suppressing the continuation event. This limits extension visibility into the agent's continuation pipeline.

**9. [CLOSED] /export HTML silently drops context sent to the model (display:false)** — [#8896](https://github.com/earendil-works/pi/issues/8896) (8 comments)
The `/export` HTML output drops any custom message with `display: false`, even though that flag is documented as a TUI-only toggle. Fixed by PR #10020, which adds a show/hide toggle for hidden messages in exports.

**10. [CLOSED] Cannot paste images into Pi** — [#2144](https://github.com/earendil-works/pi/issues/2144) (8 comments)
Pi lacks clipboard image paste (Ctrl+V) support that Claude Code offers in Warp Terminal. While partially addressed in recent updates, full clipboard image paste parity remains elusive.

## Key PR Progress

**1. [CLOSED] feat(coding-agent): add hidden-message toggle to HTML exports** — [PR #10020](https://github.com/earendil-works/pi/pull/10020)
Adds a show/hide button control for hidden `CustomMessage` entries in HTML exports, preserving the "hidden by default" behavior. Also preserves toggle states for "Toggle tools" and "Toggle thinking" buttons. Fixes #8896.

**2. [OPEN] feat(coding-agent): highlight heredocs and inline scripts in bash calls** — [PR #10021](https://github.com/earendil-works/pi/pull/10021)
Adds syntax highlighting for heredocs and inline scripts in bash tool calls, primarily to assist newer Opus/Fable models that prefer shell-based edits over the built-in edit tools.

**3. [OPEN] fix(coding-agent): resume aborted runs when a wake follow-up is queued** — [PR #10016](https://github.com/earendil-works/pi/pull/10016)
Fixes a race condition where `sendMessage` with `deliverAs: "followUp"` issued during a streaming run gets dropped if the run ends via abort before the follow-up queue is drained.

**4. [OPEN] feat(ai): support Azure Foundry Chat Completions deployments** — [PR #9714](https://github.com/earendil-works/pi/pull/9714)
Expands the Azure provider beyond the Responses API to support Chat Completions, enabling DeepSeek V4 Pro and other Foundry deployments that don't speak the Responses protocol.

**5. [CLOSED] feat(otel): add pi-otel OTLP/HTTP exporter package** — [PR #10009](https://github.com/earendil-works/pi/pull/10009)
Introduces `@earendil-works/pi-otel`, a dependency-light package implementing `TelemetryContext` on top of the existing telemetry contract with an OTLP/HTTP span exporter. Implements #10006.

**6. [CLOSED] fix(agent): fix tool_result drop on parallel abort** — [PR #9995](https://github.com/earendil-works/pi/pull/9995)
`executeToolCallsParallel` was breaking out of its loop on `signal.aborted` before reaching pending tool calls, silently dropping their results. The fix ensures all tool calls receive proper `tool_execution_start` events and finalized results.

**7. [CLOSED] feat(ai,coding-agent): add Anthropic Claude support to Google Vertex AI** — [PR #9993](https://github.com/earendil-works/pi/pull/9993)
Enables Anthropic Claude models (Opus, Sonnet, Haiku) in the Google Vertex AI Model Garden using existing ADC or API key credentials, removing the previous blanket exclusion of non-Gemini models.

**8. [CLOSED] fix(coding-agent): coerce read renderer line range args to numbers** — [PR #9988](https://github.com/earendil-works/pi/pull/9988)
Models occasionally send `offset`/`limit` as JSON strings (e.g., `"13"`), causing the read tool renderer to concatenate strings instead of adding numbers — rendering `dummy.txt:25-2512` instead of the correct range. Fixes #9887.

**9. [CLOSED] fix(tui): choose Kitty image dimensions by aspect distortion** — [PR #9957](https://github.com/earendil-works/pi/pull/9957)
Improves Kitty terminal image rendering by choosing the less-distorted rounding for height or width after fitting the image to terminal cells, reducing visual stretch on wide, short images.

**10. [CLOSED] feat(ai): use provider-reported cost when responses include it** — [PR #6881](https://github.com/earendil-works/pi/pull/6881)
When an API response includes billed cost data, Pi now uses it as `usage.cost.total` instead of relying on catalog rate estimates. Falls back to `calculateCost` unchanged when no cost is reported. Covers OpenAI completions and reads upstream inference cost details for BYOK setups.

## Feature Request Trends

- **Provider compatibility shims**: Multiple requests for stripping or conditionally sending OpenAI-specific fields when talking to compatible providers (#9508), Azure Foundry Chat Completions (#9714), and Bedrock image handling (#8643)
- **Extension API enhancements**: Better tool registration semantics (#9071), continuation detection hooks (#8349), and `before_agent_start` tool reconciliation (#9932)
- **Telemetry & observability**: OTLP/HTTP exporter package (#10006/#10009) and provider-reported cost tracking (#6881)
- **Session export fidelity**: Preserving hidden messages and toggle states in HTML exports (#8896/#10020)
- **Clipboard & image handling**: Image paste support (#2144), X11 clipboard edge cases (#9786), and macOS Finder icon handling (#9999)
- **Async tool calling**: Interest in OpenAI's async tool calling API for GPT-6 Astra and later (#9113)

## Developer Pain Points

- **Auto-close fatigue**: Issue #10008 captures community frustration — bugs are auto-closing without human review, leaving reporters feeling ignored. This is eroding trust in the issue tracker as a feedback channel.
- **Windows shell resolution fragility**: The non-deterministic `shellPath` behavior when extensions load (#9361) highlights platform-specific testing gaps.
- **Extension ecosystem friction**: Extensions can't resolve npm packages declared via `package.json` `main`/`exports` (#9817), can't replace built-in tools by name (#9071), and can't detect queued continuations (#8349) — collectively making extension development harder than it should be.
- **Provider configuration drift**: Context sizes, costs, and token limits defaulting to 128k instead of provider-reported values (#9566) means developers must manually audit their `models.json` entries or accept incorrect billing and overflow behavior.
- **TUI rendering performance**: Full-screen redraw storms on long transcripts (#9255) and string/number coercion bugs in tool output rendering (#9887, #9996) indicate the TUI rendering layer needs more robust input validation and incremental diffing.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>



Here is the Qwen Code community digest for 2026-09-25.

---

## 1. Today's Highlights

Qwen Code released **v0.24.5** alongside a Desktop build and TypeScript SDK (v0.1.15). The most significant development is the **managed agent architecture proposal** (#12380) gaining traction, with complementary SDK-Java and TypeScript bindings moving toward a unified runtime contract. Several high-priority stability fixes landed, including TUI crash resolution, clipboard feedback improvements, and node-pty prebuild pinning for standalone releases.

---

## 2. Releases

### v0.24.5 (CLI / Desktop / SDK)
- **CLI v0.24.5** — Stable release; bundles the latest fixes including deferred `/context` accounting corrections and improved MCP connection resilience.
- **Desktop v0.24.5** — Adds managed runtime support and preserves session-creation failure diagnostics ([#12331](https://github.com/QwenLM/qwen-code/pull/12331)).
- **SDK TypeScript v0.1.15** — Bundles CLI v0.24.5; includes the Hosted Harness private client and runtime-broker guard pinning.
- **SDK Java** — Adds the Hosted Harness private client and reconciles/restores Runtime bindings for durable session ownership ([#12627](https://github.com/QwenLM/qwen-code/pull/12627), [#12654](https://github.com/QwenLM/qwen-code/pull/12654)).
- **v0.24.5-nightly.20260924** — Nightly build with decoupled group-member access from `senderPolicy` ([#12475](https://github.com/QwenLM/qwen-code/pull/12475)).

---

## 3. Hot Issues

### #12380 — Managed Agent Dual-Path Architecture Proposal
A foundational design issue proposing a staged migration where the existing TypeScript agent loop runs independently of tool-environment provisioning, with durable session ownership and recoverable tool executions. **17 comments** — the most-discussed issue, signaling strong community interest in production-grade session management. ([Link](https://github.com/QwenLM/qwen-code/issues/12380))

### #11500 — TUI Exits Silently with React #185 on Background Agent Completion
Multiple background subagents completing in close succession trigger an uncaught React "Maximum update depth exceeded" error, killing the interactive TUI without rendering an error. **16 comments**, 1 👍 — a P1 blocking bug for users relying on background automation. ([Link](https://github.com/QwenLM/qwen-code/issues/11500))

### #11872 — Web Terminal PTY Not Available on macOS
`@lydell/node-pty` is declared but not bundled; macOS code signing blocks locally installed prebuilds, causing `[Error: PTY not available]` in `qwen serve` and Desktop web shell. **14 comments** — directly impacts web-terminal users on macOS. ([Link](https://github.com/QwenLM/qwen-code/issues/11872))

### #11119 — Background Shell Output Dropped When Session Runtime Recycles
In daemon-hosted sessions, background shell output and wake notifications are silently discarded after the turn that started them ends, eventually wedging the session. **10 comments** — a P1 issue affecting long-running background automation reliability. ([Link](https://github.com/QwenLM/qwen-code/issues/11119))

### #12416 — Remote-SSH: Every POST /session Fails with EPIPE
Companion 0.24.2 fails to create sessions over Remote-SSH with `write EPIPE` / `BridgeChannelClosedError`, while the bundled CLI works standalone. **8 comments** — blocks Remote-SSH workflow adoption. ([Link](https://github.com/QwenLM/qwen-code/issues/12416))

### #11795 — Permission Queue Keyed on ACP Connection Blocks All Sessions
One idle session's unanswered prompt indefinitely blocks every other session on the daemon, silently. Fix 3 (serialization scope) is in progress (#11802); fixes for queue visibility and TTL status remain open. **5 comments** — a P1 multi-tenancy blocker for daemon deployments. ([Link](https://github.com/QwenLM/qwen-code/issues/11795))

### #11956 — Parameterless Tool `parameters` Field Serialized as `null`
Strict OpenAI-compatible gateways reject the entire request when a parameterless tool serializes `parameters` as `null` or omits the field. **7 comments** — compatibility issue with external model providers. ([Link](https://github.com/QwenLM/qwen-code/issues/11956))

### #12053 — Goal Runtime: Slim Completion Judging
Proposes judging goal completion from the current turn's evidence only, dropping the evidence catalog and checkpoints that caused excessive tool calls in real sessions. **8 comments** — performance and token-efficiency enhancement. ([Link](https://github.com/QwenLM/qwen-code/issues/12053))

### #12505 — Clipboard Image Paste Fails Silently on Linux
Three silent failure paths remain when the clipboard tool is found but its query fails, when the native module throws, or on the OpenTUI renderer. **6 comments** — P2 usability bug with poor user feedback. ([Link](https://github.com/QwenLM/qwen-code/issues/12505))

### #8596 — Deprecate Electron Desktop in Favor of Tauri
Proposes deprecating `packages/desktop` (Electron) and renaming `packages/desktop-shell` (Tauri) to `packages/desktop`. **10 comments** — long-term platform strategy discussion. ([Link](https://github.com/QwenLM/qwen-code/issues/8596))

---

## 4. Key PR Progress

### [#12653] Rename `desktop-shell` to `desktop`
Renames the Tauri shell package to `packages/desktop` and updates all references across workspaces, CI, and scripts — executing the first step of the desktop deprecation roadmap. ([Link](https://github.com/QwenLM/qwen-code/pull/12653))

### [#12666] Notify on Linux Clipboard Tool Query Failure
Closes the silent-failure gap in clipboard image paste: when `wl-paste` or `xclip` is installed but the query fails (non-zero exit, spawn error, or timeout), the user is now notified. ([Link](https://github.com/QwenLM/qwen-code/pull/12666))

### [#12665] Report Dropped @-References
Dropped `@`-references are now reported instead of disappearing silently, covering workspace-boundary violations, unreadable files, and server-reference refusals. ([Link](https://github.com/QwenLM/qwen-code/pull/12665))

### [#12649] Pin node-pty-linux-arm64 and Fail Release on Missing Prebuilds
Adds the missing `@lydell/node-pty-linux-arm64` pin and wires the `QWEN_STANDALONE_REQUIRE_NODE_PTY_PREBUILD=1` gate into the release archive build — directly addressing #11872. ([Link](https://github.com/QwenLM/qwen-code/pull/12649))

### [#12590] System One Decision Gate (Superfast)
Implements an optional local decision model (Von) that classifies user turns in a single forward pass, allowing the harness to skip expensive LLM work on obvious requests. Off by default; fails open. ([Link](https://github.com/QwenLM/qwen-code/pull/12590))

### [#12580] Answer from Conversation History Before Investigating
Adds a context-first answering policy: the model checks conversation history before launching any investigation (read/grep/glob/search or research sub-agent), reducing redundant tool calls. ([Link](https://github.com/QwenLM/qwen-code/pull/12580))

### [#12540] Close Deferred /context Accounting Follow-ups
Closes the Suggestions deferred by #12119 into #12235, fixing listing detection that mistook any text containing `<available_skills>` as the skill listing. ([Link](https://github.com/QwenLM/qwen-code/pull/12540))

### [#12183] Load Deployment-Managed Extensions from a Directory
Adds `--managed-extensions <root>` to CLI and daemon, allowing deployment providers to ship complete extensions with full control over package contents. ([Link](https://github.com/QwenLM/qwen-code/pull/12183))

### [#12107] Parallelize Extension Loading Loops
Fixes a major serialization bottleneck: extension cold-load (behind `GET /extensions` and full cache refreshes) now loads extensions in parallel instead of strictly serially. ([Link](https://github.com/QwenLM/qwen-code/pull/12107))

### [#12221] Recognize sed Quiet Aliases as Read-only
Classifies GNU sed `--quiet` and `--silent` as read-only (matching existing `-n` behavior), while sed scripts that write output files remain classified as writes. ([Link](https://github.com/QwenLM/qwen-code/pull/12221))

---

## 5. Feature Request Trends

The most-requested feature directions cluster around **production-grade session management**:

- **Durable session ownership** — recoverable sessions across process restarts, HTTP gateway timeouts, and runtime recycling (#12380, #12381, #11119).
- **Managed agent architecture** — decoupled model inference from tool-environment provisioning, with staged delivery and dual-path execution (#12380).
- **Background automation reliability** — deferred/dropped notifications, wake mechanisms, and session-busy semantics for shell-mode commands (#11119, #12207, #12664).
- **Desktop platform consolidation** — full migration from Electron to Tauri, including package renaming and eventual Electron deprecation (#8596, #12653).
- **SDK unification** — consistent Java/TypeScript bindings for the Managed Runtime contract, including v2 tool operations (#12627, #12637, #12654).
- **Lightweight decision gating** — optional local classification models to skip expensive LLM calls on trivial turns (#12589, #12590).

---

## 6. Developer Pain Points

Recurring frustrations across the issue tracker include:

- **Silent failures everywhere** — dropped background notifications, swallowed clipboard errors, unreported `@`-reference rejections, and PTY import failures. The pattern is clear: errors that "disappear" are consistently the most-reported user-facing bugs.
- **TUI stability under concurrency** — React update loops (#11500, #11756) triggered by background agent completion and virtualized history updates remain a fragile area, especially as background automation grows.
- **Daemon multi-tenancy gaps** — permission queues keyed on ACP connections (#11795), session creation lost to gateway timeouts (#12381), and background output dropped on runtime recycling (#11119) all point to insufficient isolation and error propagation in daemon mode.
- **Packaging and distribution fragility** — node-pty prebuild availability (#11872, #12649), macOS code signing conflicts, and the ongoing Electron-to-Tauri migration (#8596) create friction for desktop and web-shell distribution.
- **Documentation drift** — JSDoc/comments contradicting actual code (#11948) and missing non-graceful shutdown guidance (#12214) slow down both human and AI-assisted code review.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



# DeepSeek-TUI Community Digest — 2026-09-25

*Repository: [Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI) (project codename: Codewhale)*

---

## 1. Today's Highlights

A dense 24-hour window saw the founder close out a token-efficiency audit and land a wave of hard fixes for the 0.10.0 / 0.10.1 release cycle. The headline items: a long-running compaction failure class (15 of 16 compactions failing) was diagnosed and patched, sub-agent budget deaths now leave a deterministic digest artifact behind, and the app-server's rogue `/tool` endpoint with an empty registry was removed entirely. On the product side, official model routing via `/router` is now implemented, and the model picker was reworked to surface current, pinned, and recently-used models.

---

## 2. Releases

No new releases in the last 24 hours. The most recent published version remains **0.10.0**, with 0.10.1 fixes landing in PRs as noted below.

---

## 3. Hot Issues

### #6050 — Pluggable agent memory: a generic backend seam
[OPEN] · [enhancement] · [idling11](https://github.com/idling11) · 5 comments
The agent memory system is currently a hardwired native feature with only `Native` / `Off` variants. This proposal asks for a `MemoryBackend` abstraction with reference implementations for causal-memory and mem0, enabling third-party memory backends. **Why it matters:** As workflows and sub-agents become more sophisticated, memory is the natural next extensibility point. The community has been waiting for a plug-in story here. [🔗](https://github.com/Hmbown/Codewhale/issues/6050)

### #6504 — Sub-agents killed at 100k per-step input cap, never compact
[CLOSED] · [bug] · [Hmbown](https://github.com/Hmbown) · 3 comments
A workflow's `deepseek-flash` child failed after 56 seconds with `child context budget exhausted: step billed 103126 input tokens, over the 100000 per-step bound`. The root cause: `MAX_CHILD_STEP_INPUT_TOKENS = 100_000` with no compaction path for sub-agents. **Why it matters:** This directly breaks multi-child workflows on models with large windows — a core use case. The founder confirmed it and it drove the follow-up digest-artifact fix (#6536). [🔗](https://github.com/Hmbown/Codewhale/issues/6504)

### #6421 — `deepseek-flash` reports no image input support on 0.10.0
[CLOSED] · [bug] · [AccMoment](https://github.com/AccMoment) · 2 comments
Users pasting images with `deepseek-flash` got a "can't support image input" error. The hand-maintained capability rows in `bundled_offerings()` incorrectly marked the model as text-only. **Why it matters:** Affects a primary model choice; capability metadata correctness is foundational for routing. Fixed in #6521. [🔗](https://github.com/Hmbown/Codewhale/issues/6421)

### #6427 — 0.10.0 regression: multiline paste self-submits on Windows Terminal
[OPEN] · [bug] · [thejayjetson](https://github.com/thejayjetson) · 2 comments
With `bracketed_paste = true` and `paste_burst_detection = true`, pasting multiple lines into Windows Terminal submits one message per line. This is a re-break of #5981 for that terminal class. **Why it matters:** Breaks the ability to paste code blocks or multi-line prompts on Windows — a significant UX regression. [🔗](https://github.com/Hmbown/Codewhale/issues/6427)

### #6532 — TinyFish search backend with shared quota ledger
[CLOSED] · [Hmbown](https://github.com/Hmbown) · 1 comment
Adds TinyFish as a web-search backend (adapted from `maxwell-feng/dsh-tinyfish-search`, MIT), ported to Rust in `web_search.rs`. Includes a SQLite quota ledger (30/min, 500/h, 12,000/day) with disclosed fallback when exhausted. **Why it matters:** Diversifies search away from a single provider and introduces proper rate-limit accounting. [🔗](https://github.com/Hmbown/Codewhale/issues/6532)

### #6536 — Child budget death must leave deterministic digest as deliverable
[CLOSED] · [bug] · [Hmbown](https://github.com/Hmbown) · 0 comments
When a sub-agent hits its wall-clock or step limit, the host builds a deterministic digest but only embeds it in the hand-back prompt. If that bounded report then fails, the deliverable is lost. **Why it matters:** Sub-agent results are only useful if they survive the hand-off. Fixed in #6549 by writing the digest to a private result artifact. [🔗](https://github.com/Hmbown/Codewhale/issues/6536)

### #6540 — Compaction: 15 of 16 recorded compactions failed
[CLOSED] · [bug] · [Hmbown](https://github.com/Hmbown) · 0 comments
Token-efficiency audit found that 15 of 16 compactions in the runtime store were recorded as failed, all from emergency passes on local `ollama` / `qwen3:4b` dogfood turns. The summary call was reading ~219k tokens with 0% cache hit. **Why it matters:** Compaction is the safety valve for long sessions; if it silently fails, sessions grow unbounded. Fixed in #6544. [🔗](https://github.com/Hmbown/Codewhale/issues/6540)

### #6541 — Token efficiency: per-request telemetry, cost-based compaction trigger
[OPEN] · [enhancement] · [Hmbown](https://github.com/Hmbown) · 0 comments
Audit baseline: `deepseek-flash` is 94.8% of 3.55B tokens; mean request ~363k tokens; median task 5 requests. Proposes usage telemetry, cost-based compaction triggers, a stable tool list, and a smaller static prefix. **Why it matters:** Direct cost and latency levers. The fixed-prefix overhead is a known waste; this issue is the roadmap for it. [🔗](https://github.com/Hmbown/Codewhale/issues/6541)

### #6542 — Recurring tool errors: edit old-text mismatch, cwd errors, no-goal update_goal
[OPEN] · [bug] · [Hmbown](https://github.com/Hmbown) · 0 comments
Tool errors are 5.0% of calls. The top fixable classes: edit failures where old text doesn't match (6.9% of edits), agent cwd outside workspace, write-scope contention, and `update_goal` with no goal. **Why it matters:** Each error burns a model round-trip; at scale this is pure waste. Partial fix in #6548; error classification remains open. [🔗](https://github.com/Hmbown/Codewhale/issues/6542)

### #6525 — Official model routing: `/router` with Jev via OpenRouter or TypeSafe
[OPEN] · [enhancement] · [Hmbown](https://github.com/Hmbown) · 0 comments
The per-turn router (`[auto.router]`) exists but has no interactive toggle, no recommended choices, and nothing tells users it's there. Proposes an official `/router` command with presets. **Why it matters:** Auto routing is one of the most powerful features and is currently invisible. Implemented in #6539. [🔗](https://github.com/Hmbown/Codewhale/issues/6525)

---

## 4. Key PR Progress

### #6549 — fix(agents): budget death keeps deterministic digest as deliverable
[CLOSED](https://github.com/Hmbown/Codewhale/pull/6549) · Closes #6536
Writes the child's deterministic digest to `.codewhale/state/subagent-results/<sha256(agent_id)>.md` before the bounded hand-back turn, so the result survives even if the summary call fails.

### #6544 — fix(compaction): stop false emergency passes on fallback windows
[CLOSED](https://github.com/Hmbown/Codewhale/pull/6544) · Closes #6540
All 15 compaction failures were emergency passes on `ollama` / `qwen3:4b` local dogfood turns. The fix stops false emergency passes on fallback windows and reuses the turn's cache prefix, cutting the ~219k-token summary call cost.

### #6551 — fix(build): clear unfulfilled dead_code expectations on rustc 1.89
[CLOSED](https://github.com/Hmbown/Codewhale/pull/6551) · Closes #6543
`cargo +1.89 check` was failing with 8 unfulfilled `#[expect(dead_code)]` lints. Root cause: rustc 1.89 counts uses inside dead items differently than newer compilers. Adds an MSRV CI job to catch this class.

### #6552 — fix(audit): DSH integration audits into its own home
[CLOSED](https://github.com/Hmbown/Codewhale/pull/6552) · Closes #6534
The DSH integration was writing `integration.dsh.*` audit events into the real `~/.codewhale/audit.log` instead of its hermetic home. Now isolated; tests never touch the real audit log.

### #6522 — fix(sessions): in-session resume accepts resolved sessions path (Windows)
[CLOSED](https://github.com/Hmbown/Codewhale/pull/6522) · Closes #6418
`/resume` was rejecting session stores on Windows because the canonicalized path has a `\\?\` prefix. The confinement check now uses the resolved sessions path.

### #6519 — fix(tui): keep drawing while unfocused; show Esc only where it closes the workbar
[CLOSED](https://github.com/Hmbown/Codewhale/pull/6519) · Closes #6502
The TUI appeared frozen when unfocused on macOS (a 0.10.0 regression from #6311). Also fixes the misleading "Esc closes this" hint beside the workbar close X — Esc now cancels turns, not closes the workbar.

### #6537 — fix(tui): /model lists what you use: current, pins/Fleet, recent
[CLOSED](https://github.com/Hmbown/Codewhale/pull/6537) · Closes #6533
Model picker now shows: (1) current route, (2) pins and Fleet models always visible, (3) up to 8 recently used routes. Drops the legacy `enabled_models` table that was surfacing stale entries like GLM-5.2.

### #6527 — fix(app-server): remove /tool and the empty second tool/approval authority
[CLOSED](https://github.com/Hmbown/Codewhale/pull/6527) · Closes #6550
`POST /tool` was running `Runtime::invoke_tool` against an **empty** `ToolRegistry` — a second, parallel tool/approval authority with no tools. Removed entirely rather than bridged.

### #6539 — feat(auto): official model routing with /router and Jev
[OPEN](https://github.com/Hmbown/Codewhale/pull/6539) · Closes #6525
Adds `[auto.router] kind = "decision"` (default `chat`), `min_confidence` (default 0.5), and `base_url`. Each Auto turn makes one System One call choosing a fast/strong tier and thinking level. Supports OpenRouter or TypeSafe backends.

### #6521 — fix(config): deepseek-flash accepts image input on the official route
[CLOSED](https://github.com/Hmbown/Codewhale/pull/6521) · Closes #6421
Corrects the hand-maintained DeepSeek rows in `bundled_offerings()` that marked `deepseek-flash` and `deepseek-v4-flash` as `image_input: Unsupported`. The Models.dev JSON assets were already correct; the shared `documented_capabilities` were not.

---

## 5. Feature Request Trends

| Direction | Representative Issues | Signal |
|---|---|---|
| **Pluggable backends** (memory, search, models) | #6050, #6532, #6529 | Strong — the project is clearly moving toward an extensibility hub model |
| **Token efficiency & cost visibility** | #6541, #6542, #6540 | Audit-driven; the founder's own data shows 5% tool error rates and 94.8% token concentration |
| **Official product surface for existing machinery** | #6525, #6533, #6526 | Router, model picker, and standing-instruction budgets all exist internally but lack user-facing controls |
| **Config hygiene & migration** | #6530, #6516, #6528 | Dead keys, legacy env twins, invisible characters in pasted keys — a sweep is underway |
| **Sub-agent & workflow robustness** | #6504, #6536, #6464, #6465 | Multi-child workflows are a first-class use case and hitting real limits |

---

## 6. Developer Pain Points

- **Capability metadata drift:** The hand-maintained `documented_capabilities` table in `route/offering.rs` disagrees with the Models.dev JSON assets (#6421). Developers maintaining model rows have two sources of truth that can silently diverge — and the wrong one wins.
- **Compaction as a silent failure class:** 15 of 16 compactions were recorded as failed but sessions kept running. The failure reporting path needs to be as robust as the compaction path itself (#6540).
- **Two tool/approval authorities:** The app-server had a parallel `ToolRegistry` with an empty map and its own approval mapping, while the Engine had the real one (#6505). This class of "second authority" bugs appears repeatedly (#6516 sweeps for dead env twins, `--output-mode`, etc.).
- **Windows path canonicalization:** Session store confinement broke on Windows because `\\?\` prefixes weren't accounted for (#6522). Cross-platform path handling remains a recurring footgun.
- **Test pollution of real state:** Integration tests were writing `integration.dsh.*` events into the founder's real `~/.codewhale/audit.log` (#6534). Hermetic test homes need to be enforced for *all* state writers, not just some.
- **rustc version sensitivity:** `#[expect(dead_code)]` expectations that pass on newer rustc fail on 1.89 (#6543). The MSRV CI job added in #6551 is the right call, but it signals that lint expectations are version-fragile.

---

*Digest generated from GitHub data for [Hmbown/Deep

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>



# ComfyUI Community Digest — 2026-09-25

## 1. Today's Highlights
The core development focus is heavily centered around performance optimizations for Qwen Image 2.1, MiniMax H3, and SeedVR2, alongside critical stability patches for ROCm and Windows dynamic VRAM configurations. Major partner node integrations, including ByteDance's Seedance 2.5 Draft mode and OpenAI's GPT-6 models, are being actively merged, while core scheduling and CUDA context handling are being refined for multi-GPU and edge-case setups.

## 2. Releases
*No new releases were published in the last 24 hours.*

## 3. Hot Issues (Top 10)
Here are the ten most impactful issues currently open or updated, highlighting key stability, performance, and quality-of-life challenges:

*   **[BSOD] Kernel Crash on RTX 3050 since v0.35.0 / comfy-aimdo 0.5.3** ([#16246](https://github.com/Comfy-Org/ComfyUI/issues/16246)): Since the dynamic VRAM loading update, Windows 11 users on RTX 3050 cards are experiencing severe system crashes (BSODs) inside `dxgmms2.sys`. This is a critical blocker for Windows users on lower-memory GPUs.
*   **[MiniMax H3] Linux Multi-GPU Whole-Host Hard Resets** ([#15760](https://github.com/Comfy-Org/ComfyUI/issues/15760)): Running MiniMax H3 with INT8 ConvRot on multi-GPU Linux systems triggers reproducible, system-level hardware hard resets, indicating severe kernel/driver instability under specific quantization paths.
*   **YuE2 Text Encoder CPU Fallback on GTX 1650** ([#16365](https://github.com/Comfy-Org/ComfyUI/issues/16365)): The YuE2 text encoder silently falls back to CPU on low-end GPUs like the GTX 1650, throwing a hard `RuntimeError: Expected a cuda device, but got: cpu` and halting generation. 
*   **Opt-out for Auto-Enabled Fast-Disk Policy** ([#16415](https://github.com/Comfy-Org/ComfyUI/issues/16415)): The automatic activation of `fast_disk` on NVMe drives forces RAM pinning bypass, causing high-RAM machines to stream weights from disk on every step, severely hurting step-to-step performance. Users are demanding a configuration opt-out.
*   **[AMD ROCm] DynamicVRAM Performance Degradation** ([#16502](https://github.com/Comfy-Org/ComfyUI/issues/16502)): On ROCm GPUs, performance severely degrades after the first generation cycle, though running `/free` temporarily restores full speed, pointing to a memory leak or caching issue in dynamic VRAM management.
*   **[AMD ROCm] hipErrorInvalidValue in SDPA for Anima Models** ([#16526](https://github.com/Comfy-Org/ComfyUI/issues/16526)): Generating with any Anima model on ROCm (gfx1201) crashes during sampling due to an HIP error inside the scaled dot-product attention call. (A fix is currently being reviewed in PR #16528).
*   **MiniMax H3 Inpainting Latent Masking Example Bug** ([#16516](https://github.com/Comfy-Org/ComfyUI/issues/16516)): The community example workflow for row masking omits the crucial connection from the source video to the `MiniMax H3 Reference to Video` node, resulting in degraded reference fidelity.
*   **Qwen3.5 KV Cache Attention Overhead** ([#16509](https://github.com/Comfy-Org/ComfyUI/issues/16509)): Qwen3.5 decoding speed drops significantly as `max_length` increases because the attention mechanism attends over the entire preallocated KV cache capacity rather than just the active segment.
*   **PoseBranchCache.select Shape Mismatch Crash** ([#16511](https://github.com/Comfy-Org/ComfyUI/issues/16511)): A `RuntimeError` occurs in `model_animate2.py` when two cache slots with different key shapes coexist, triggered deterministically by mid-run conditional batch changes.
*   **Windows System Notifications on Generation Complete** ([#16268](https

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

Thinking Process:

1.  **Analyze the Request:**
    *   **Role:** Technical analyst focused on AI developer tools.
    *   **Task:** Generate the Ollama community digest for 2026-09-25 based on provided GitHub data (issues, pull requests, releases).
    *   **Sections required:**
        1.  *Today's Highlights* (2-3 sentences summarizing the most important updates).
        2.  *Releases* (Summarize changes if new versions exist; omit if none. Data says "None" for latest releases in last 24h).
        3.  *Hot Issues* (Pick 10 noteworthy Issues, explain why they matter and community reaction).
        4.  *Key PR Progress* (Pick 10 important PRs, describe features or fixes).
        5.  *Feature Request Trends* (Distill the most-requested feature directions from all Issues).
        6.  *Developer Pain Points* (Summarize recurring developer frustrations or high-frequency requests).
    *   **Style:** Concise, professional, suited for technical developers. Include GitHub links for each item.

2.  **Analyze the Data:**
    *   **Date:** 2026-09-25 (The prompt asks for the digest on this date, data reflects updates around 2026-09-24).
    *   **Releases:** None in the last 24h.
    *   **Issues (Total 9 listed):**
        *   #18368 [OPEN] [bug, app, macos] Chat processing fails silently after 60.0 seconds with no GUI notification (macOS GUI). Author: xmddmx. (Silent failures on long doc processing on Mac GUI).
        *   #18505 [OPEN] [bug, mlx] [BUG] MLX nvfp4: admitted request stalls in prefill at processed=total-1 with zero tokens for minutes under sustained single-slot load; only runner SIGTERM recovers. Author: Etoile04. (Stalling issue in MLX nvfp4 under load).
        *   #18390 [OPEN] gemma4: tool-call object keys containing spaces are left unquoted by the parser and the whole call is dropped as an empty response. Author: mitchallen. (Gemma 4 parser bug with spaces in tool keys).
        *   #18616 [CLOSED] Mimo-v2.6-Pro and Mimo-v2.6-Flash. Author: thermalWinds. (Downloadable models request).
        *   #18581 [OPEN] Windows CUDA discovery fails (0 B VRAM / CPU fallback) on NVIDIA RTX 50-Series (Blackwell) with Driver 616.92. Author: saroshwadia. (Regression: Blackwell GPU not detected on Windows).
        *   #18594 [OPEN] System 1 Models. Author: mdlmarkham. (Request for System 1 models like Kev and Laya). 👍: 4.
        *   #18628 [OPEN] [bug] macOS incorrectly prompts to move app when installed in an `/Applications` subdirectory. Author: CodingMarkus. (UI bug on macOS subdirectory installs).
        *   #18621 [CLOSED] macOS: keep the update icon and Restart to update menu synchronized at startup. Author: hoyyeva. (Menu sync issue).
        *   #18620 [OPEN] MLX runner: each request that ends in a tool call leaks ~0.43 GiB (three recurrent snapshots) outside the prefix-cache budget (qwen3.6:27b-mlx, 0.34.2 and 0.34.4). Author: robin1333k. (Memory leak in MLX tool calls).
    *   **Pull Requests (Total 22 listed, top 20 shown):**
        *   #18627 [CLOSED] api: deprecate typical_p (dhiltgen). Switch from rejecting to logging a warning.
        *   #17972 [OPEN] feat: Add GraniteForCausalLM support in experimental models and mlxrunner (gabe-l-hart). Granite 4.1/4.2 support.
        *   #17976 [CLOSED] create: quantize gemma4 sparse-MoE expert banks uniformly (dhiltgen). Fixes bloat in Gemma 4 sparse MoE.
        *   #18614 [OPEN] mlx: fix Nemotron bugs and support global scales (dhiltgen). Fixes layer names, MTP quantization, Mamba softplus, etc.
        *   #18626 [CLOSED] app: isolate cloud-setting tests from Windows user config (drifkin). Test isolation fix.
        *   #18598 [CLOSED] app: defer Settings model discovery (ParthSareen). Settings page responsiveness improvement.
        *   #18602 [OPEN] feat: allow ten web searches per response (ParthSareen). Limits raised from 3 to 10.
        *   #18623 [OPEN] docs: expand AMD GPU list for Windows (saman-amd). Doc update for ROCm.
        *   #18625 [OPEN] mlx: bound pull stall retries and let the watchdog interrupt them (dhiltgen). Fixes stall handling during model pulls.
        *   #18624 [OPEN] qwen3.5: a tool call can open before the thinking channel is closed (mann1x). Parser bug fix for Qwen3.5 tool calls.
        *   #18092 [OPEN] docs/api: add missing 401 and 403 status codes to error documentation (putramkti). API doc update.
        *   #18622 [CLOSED] app: sync macOS update menu and icon at startup (hoyyeva). GUI sync fix.
        *   #18606 [OPEN] feat: add System One scoring API (ParthSareen). Adds `POST /v1/systemone` for structured decisions.
        *   #16590 [OPEN] llama-server: prepare to remove compatibility patch with manifest list support (dhiltgen). Storage and runner manifest list support.
        *   #18619 [CLOSED] Add vestige to Community Integrations (samvallad33). Memory system integration.
        *   #18618 [OPEN] readme: add AGNT to desktop integrations (agnt-gg).
        *   #18617 [OPEN] docs: add Lyra to Community Integrations (amineutron).
        *   #17834 [OPEN] mlxrunner: implement load progress reporting and stall detection (dhiltgen).
        *   #18615 [CLOSED] mlxrunner: Update XGrammar to 0.2.7 for structured outputs (jessegross).
        *   #18578 [OPEN] cmd/server: add ollama export and import commands (MohamedAliBouhaouala). Offline model transfer utility.

3.  **Drafting the Sections:**

    *   **Section 1: Today's Highlights**
        *   Summarize key developments: Major progress on MLX backend stability (fixes for stall handling, memory leaks, and Nemotron bugs), expansion of model architectures (Granite 4 support, Gemma 4 MoE quantization), and the introduction of a new "System One" scoring API for structured local decisions.
        *   Keep it to 2-3 professional sentences.

    *   **Section 2: Releases**
        *   Data states: "None" for last 24h. I will write a brief note stating no new releases were published in the last 24 hours, but mention the ongoing development on version 0.34.x based on context in issues (e.g., 0.34.2, 0.34.4).

    *   **Section 3: Hot Issues (Pick 10 noteworthy Issues, explain why they matter and community reaction)**
        *   Since there are only 9 issues in total in the data, I will analyze all 9 (or pick the most critical ones if I need to pad or just list the 9 available). Let's list the 9 available and focus on the most critical ones. Let's do a robust top 9/10 list of the active/closed ones.
        *   *Issue 1:* #18581 - Windows CUDA discovery fails on RTX 50-Series (Blackwell). Critical regression for Windows users on latest hardware. High impact.
        *   *Issue 2:* #18505 - MLX nvfp4 request stalls in prefill under single-slot load. Severe performance blocker for MLX users running high-precision models.
        *   *Issue 3:* #18620 - MLX runner memory leak (~0.43 GiB per tool call request). Crucial for long-running agent sessions using tool calls.
        *   *Issue 4:* #18368 - macOS GUI silent failure on long document processing (>60s). Bad UX for Mac GUI users.
        *   *Issue 5:* #18390 - Gemma 4 tool-call keys with spaces dropped silently. Critical parser bug for tool-use workflows.
        *   *Issue 6:* #18594 - System 1 Models request (Kev, Laya). Popular feature request (4 👍) to support lightweight scoring/routing models.
        *   *Issue 7:* #18628 - macOS app subdirectory installation prompt bug. Minor but annoying macOS GUI bug.
        *   *Issue 8:* #18368 (already listed, but let's look at the closed ones too if needed, though open bugs are usually hotter). Let's list the top critical bugs and the popular feature request.
        *   Let's construct a list of 10 items by highlighting the key issues from the list (9 total are provided, I will detail the most impactful ones and include the popular feature request). Let's write up 10 points, covering the 9 provided, highlighting the most severe ones first. Let me double check the count: 9 issues are listed in the prompt. I will list 9 or add one synthetic but highly grounded observation, or just list the 9 provided with deep analysis. Better to list the 9 provided and group them or highlight 9 specific ones, maybe splitting one or focusing on the closed ones as well (like #18616 Mimo model request). Let's stick strictly to the provided ones and write 9 or 10 bullet points (the prompt says "Pick 10 noteworthy Issues", so I will write 10, perhaps referencing the closed ones as resolved hot topics or expanding on the details). Let's count:
            1. #18581 (Windows Blackwell CUDA failure)
            2. #18505 (MLX nvfp4 prefill stall)
            3. #18620 (MLX tool call memory leak)
            4. #18390 (Gemma 4 tool call parser space bug)
            5. #18368 (macOS silent fail on long tasks)
            6. #18594 (System 1 Models feature request)
            7. #18628 (macOS subdirectory app prompt)
            8. #18616 (Closed: Mimo model request)
            9. #18621 (Closed: macOS update menu sync)
            Wait, that's 9. Let me write 10 items. I can count #18620 and #18390 as separate, and so on. Let me structure the 10 items clearly.

    *   **Section 4: Key PR Progress (Pick 10 important PRs, describe features or fixes)**
        *   Need to select 10 PRs from the 22 listed (top 20 by comment count shown).
        *   Let's pick the most technically significant ones:
            1.  **#17972** - Add GraniteForCausalLM support in MLX backend (Granite 4.1/4.2).
            2.  **#18606** - Add System One scoring API (`POST /v1/systemone`) for structured local decisions.
            3.  **#18578** - Add `ollama export` and `ollama import` commands/APIs for offline model transfer.
            4.  **#18614** - MLX fixes for Nemotron bugs, global scales, Mamba softplus, and FP32 vision normalization.
            5.  **#18625** - MLX pull stall retries and watchdog interrupt fixes.
            6.  **#18624** - Qwen3.5 tool call parser fix (opening tool call before thinking channel closes).
            7.  **#17976** - Quantize Gemma 4 sparse-MoE expert banks uniformly (prevents package bloat).
            8.  **#18602** - Increase web search limit per response from 3 to 10.
            9.  **#16590** - Prepare llama-server compatibility patch removal with manifest list support.
            10. **#17834** - MLX runner load progress reporting and stall detection.
            (Honorable mentions: #18627 deprecating `typical_p`, #18623 AMD GPU doc update, #18615 XGrammar update).

    *   **Section 5: Feature Request Trends**
        *   Distill the most-requested feature directions from the issues:
            *   Support for "System 1" / lightweight scoring models (like Kev and Laya) for routing and structured decisions (complemented by the new System One API in #18606).
            *   Better tool call parsing robustness, specifically around edge cases like spaces in keys (Gemma 4 #18390) and streaming/chunk boundaries (Qwen3.5 #18624).
            *   Model architecture support expansion, specifically IBM Granite models and newer architectures like Mimo.
            *   Enhanced offline utility and portability (model export/import in #18578).

    *   **Section 6: Developer Pain Points**
        *   Summarize recurring developer frustrations or high-frequency requests:
            *   **Silent failures and poor diagnostics:** Issues like the macOS GUI silent timeout (#18368) and the Gemma 4 tool call silent drop (#18390) highlight a frustration with silent failures where developers get empty responses without clear errors.
            *   **Backend stability and resource leaks:** The MLX memory leak per tool call (#18620) and prefill stalls under load (#18505) represent major pain points for developers building agent loops on macOS/MLX.
            *   **Platform/Hardware compatibility regressions:** The Windows Blackwell VRAM detection failure (#18581) shows the pain of keeping up with latest GPU architectures and driver updates.
            *   **GUI/UI friction:** Subdirectory installation prompts (#18628) and update menu synchronization bugs (#18621) hurt the desktop experience.

4.  **Refining and Formatting the Output:**
    *   Ensure all links are formatted properly: `[Issue #XXXX](URL)` or standard markdown. The prompt provides URLs like `ollama/ollama Issue #18368` but not full URLs. I will write them as standard links or reference them clearly as `ollama/ollama#18368` to make them clickable if base URL is known, or write out the exact text provided. Let's use the standard format: `ollama/ollama#18368` (resolves directly to GitHub).
    *   *Self-Correction on URLs:* The prompt lists URLs like `URL: ollama/ollama Issue #18368`. I will format them as `https://github.com/ollama/ollama/issues/18368` or simply `ollama/ollama#18368` for clean reading. Let's write `https://github.com/ollama/ollama/issues/18368` (replacing the placeholder text with standard GitHub path format). Let's map the numbers:
        *   `ollama/ollama Issue #18368` -> `https://github.com/ollama/ollama/issues/18368`
        *   `ollama/ollama PR #18627` -> `https://github.com/ollama/ollama/pull/18627`
    *   Keep the tone highly professional, technical, and concise.

Let's do a quick double check on the date: 2026-09-25.
Let's check the formatting of the generated digest to ensure it is structured, clean, and directly answers all parts of the prompt.

Let's write down the details for each section.

### Section 1: Today's Highlights
*   Focus on the major theme: MLX backend stabilization (memory leaks, stall retries, Nemotron support) and the expansion of structured decision tools (System One API) and model architectures (Granite 4).
*   Draft: "The Ollama community is heavily focused on backend stability and developer utility this week. Major updates include the addition of a structured scoring API (`/v1/systemone`) and offline model import/export tooling, paired with critical fixes to the MLX runner regarding memory leaks, prefill stalls, and pull watchdogs. Support for IBM Granite 4 models and uniform Gemma 4 MoE quantization is also moving forward."

### Section 2: Releases
*   Draft: "No new releases were published in the last 24 hours. Current development remains focused on stabilizing the 0.34.x series, addressing issues ranging from macOS GUI glitches to low-level CUDA and MLX runner bugs."

### Section 3: Hot Issues (Explain why they matter and community reaction)
Let's select 10 items (9 open/closed issues provided, I will write up 10 points covering the 9 issues and perhaps a general trend or a specific detail from the closed ones to make exactly 10, or just 9 core issue highlights if only 9 are in the data. I will list 9 core issues and 1 general issue trend to hit 10, or just list the 9 provided ones and

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>



# llama.cpp Community Digest — 2026-09-25

## Today's Highlights
The past 24 hours brought a wave of backend optimizations across CUDA, Vulkan, Metal, and Hexagon, alongside critical fixes in grammar parsing and CPU GEMM performance. Multiple releases (b11157–b11169) landed with focus on quantizer improvements, convolution kernels, and developer tooling, while the community continued to chase down speculative-decoding correctness and multi-GPU stability issues.

## Releases
A string of new builds shipped, each with targeted fixes:

- **b11169** — Fixes numeric truncation in `llama-grammar` token_id parsing ([#29382](https://github.com/ggml-org/llama.cpp/pull/29382)).
- **b11168** — Hexagon dynamic quantizer improvements: Q8_0 accuracy fix, register-spill reduction, DMA usage, and removal of obsolete code ([#29395](https://github.com/ggml-org/llama.cpp/pull/29395)).
- **b11167** — Hexagon backend now supports I32 CPY and CONT operations ([#29379](https://github.com/ggml-org/llama.cpp/pull/29379)).
- **b11166** — CUDA adds F16 kernel support for `CONV_2D_DW` ([#29064](https://github.com/ggml-org/llama.cpp/pull/29064)).
- **b11165** — Test status flush fix ([#28352](https://github.com/ggml-org/llama.cpp/pull/28352)).
- **b11163** — Introduces `llama_batch_ext` API for extended batch handling ([#24669](https://github.com/ggml-org/llama.cpp/pull/24669)).
- **b11160** — Vulkan: int8 coopmat1 matmul for AMD RDNA3/RDNA4 ([#27952](https://github.com/ggml-org/llama.cpp/pull/27952)).
- **b11159** — Vulkan: misalignment fixes in `conv_2d`/`conv_3d` ([#29365](https://github.com/ggml-org/llama.cpp/pull/29365)).
- **b11158** — Vulkan: cooperative matrix tuning for Adreno GPUs ([#29328](https://github.com/ggml-org/llama.cpp/pull/29328)).
- **b11157** — CUDA: adds conv3d with implicit GEMM ([#29137](https://github.com/ggml-org/llama.cpp/pull/29137)).

## Hot Issues

1. **[#25618](https://github.com/ggml-org/llama.cpp/issues/25618) — Speculative decoding diverges on quantized targets** (26 comments). Under greedy sampling, draft-model speculation produces different output than vanilla decoding when the target model is quantized (e.g., Q4_K_M), but matches on bf16. This strikes at the core correctness of a latency-optimization feature; community response is active and reproduction steps are being refined.

2. **[#27623](https://github.com/ggml-org/llama.cpp/issues/27623) — Qwen3.8-27B decode throughput collapses ~25× beyond 80K context** (17 comments). Prompt processing stays fast, but decode slows dramatically at long context on both CUDA (RTX 4080 SUPER) and WSL2. Suggests a backend-specific attention or KV-cache bottleneck in the hybrid Gated DeltaNet architecture.

3. **[#17583](https://github.com/ggml-org/llama.cpp/issues/17583) — Multi-GPU AMD segmentation fault** (16 comments). Running `llama-server` with multiple AMD GPUs reliably crashes regardless of model size, while single-GPU works. Long-standing ROCm issue with no obvious workaround yet.

4. **[#28752](https://github.com/ggml-org/llama.cpp/issues/28752) — Vulkan prompt-processing regression after b10780** (14 comments). Severe speed drop on RDNA3; users are asked to bisect which commit introduced the regression.

5. **[#28211](https://github.com/ggml-org/llama.cpp/issues/28211) — HIP/ROCm wrong logits on gfx1151** (11 comments). Not a crash — silently incorrect outputs on Strix Halo when prompts exceed `n_ubatch`. Correctness issue, not just performance.

6. **[#29281](https://github.com/ggml-org/llama.cpp/issues/29281) — CUDA sparse flash attention 1.6× slower after b11062** (10 comments). Regression in decode throughput traced to a specific commit range; maintainers are reviewing the sparse FA changes.

7. **[#29022](https://github.com/ggml-org/llama.cpp/issues/29022) — Fast Tool Gating via prefill logit slicing** (8 comments). Feature request to slice logits during prefill for single-pass tool selection, cutting latency for function-calling workloads. Growing interest (3 👍).

8. **[#20433](https://github.com/ggml-org/llama.cpp/issues/20433) — HIP correctness regression from #17795** (7 comments). Subtle quality collapse across multiple models (gpt-oss, devstral, GLM-4.5-air, Qwen3-30B-A3B) when using Mistral-vibe-style prompts. Critical for ROCm users running these architectures.

9. **[#24429](https://github.com/ggml-org/llama.cpp/issues/24429) — mtmd video input hangs on Windows** (7 comments). `probe()` deadlocks on faststart MP4; decode emits zero frames when MOOV is at end of file. Affects multimodal deployments on Windows.

10. **[#24375](https://github.com/ggml-org/llama.cpp/issues/24375) — Microphone button missing when model lacks audio support** (6 comments). UI inconsistency: when a loaded model doesn't support audio but another loaded model does, the mic button stays hidden. Straightforward UI/UX fix requested.

## Key PR Progress

1. **[#27851](https://github.com/ggml-org/llama.cpp/pull/27851) — CPU tiled `mul_mat` for k-quants**. Generic 256×256 int8 tiled implementation using VNNI delivers 3–7× faster CPU matmul with minimal complexity. Still in testing.

2. **[#29393](https://github.com/ggml-org/llama.cpp/pull/29393) — CUDA: fuse RMS_NORM + SCALE**. Single-kernel fusion for MoE/Gated Delta Net paths, recovering ~4% prefill regression from #28068. Matches existing Metal fusion work.

3. **[#29397](https://github.com/ggml-org/llama.cpp/pull/29397) — AVX-512 VNNI+VBMI Q4_K GEMM**. Adds `vpdpbusd`-based repack GEMM path for Q4_K on CPU; permute tables lazy-init to avoid unsupported-instruction issues during backend load.

4. **[#29401](https://github.com/ggml-org/llama.cpp/pull/29401) — OpenCL Q5_K bin kernels for Adreno**. DP4A and non-DP4A GEMM plus matching GEMV kernels, expanding Adreno GPU coverage.

5. **[#29400](https://github.com/ggml-org/llama.cpp/pull/29400) — NVFP4 MoE conversion fix**. Step-3.7-Flash's NVFP4 checkpoint stores already-stacked 3-D expert weights; converter now preserves this layout and forwards per-expert scales to both MoE graphs.

6. **[#29291](https://github.com/ggml-org/llama.cpp/pull/29291) — Strip stray media markers**. Server now tolerates unmatched media markers in conversation text, preventing tokenization breakage when marker count doesn't match bitmap count.

7. **[#29280](https://github.com/ggml-org/llama.cpp/pull/29280) — Vulkan descriptor set reuse**. Skips `vkUpdateDescriptorSets` when bindings are constant across graph recordings, reducing driver overhead.

8. **[#28554](https://github.com/ggml-org/llama.cpp/pull/28554) — Pass `id_slot` through Anthropic `/v1/messages`**. Slot pinning now works consistently across `/completion`, `/v1/chat/completions`, and the Anthropic-compatible endpoint.

9. **[#29394](https://github.com/ggml-org/llama.cpp/pull/29394) — KleidiaAI SME2 CPU flash attention**. Routes eligible CPU `FLASH_ATTN_EXT` QK/AV tile products through Arm's KleidiAI F32 SME2 kernels, with workspace sizing and dispatch kept behind KleidiAI-specific abstractions.

10. **[#29052](https://github.com/ggml-org/llama.cpp/pull/29052) — Hexagon NPU Windows Arm64 CI**. Adds the missing Hexagon backend build for Windows Arm64, closing #26877.

## Feature Request Trends
- **Tool/function-calling acceleration**: Fast logit slicing during prefill for single-pass tool selection (#29022) is the top enhancement request.
- **Audio & multimodal UI parity**: Show microphone button when any loaded model supports audio (#24375); fix video probe/decode on Windows (#24429).
- **New quantization formats**: Support for Prism PQ2_0 (type 142) and PTQ1_0 (type 143) from Ternary-Bonsai-2 (#29058).
- **WebUI improvements**: Pre-select models via alias in the web UI (#24902).
- **KV-cache & attention defaults**: Make `GGML_CUDA_FA_ALL_QUANTS=ON` the default to avoid silent CPU fallback with 4-bit KV (#28633).

## Developer Pain Points
- **Backend correctness instability**: Multiple reports of silently wrong logits (HIP #28211, #20433), speculative-decoding divergence (#25618), and garbled output on dual-GPU CUDA (#26257) suggest that recent refactors in attention and MoE paths are introducing subtle bugs.
- **Performance regressions**: CUDA sparse FA slowdown (#29281), Vulkan prompt-processing drop (#28752), and Qwen3.8-27B decode collapse (#27623) keep developers chasing commit-level regressions.
- **Multi-GPU and hybrid-architecture fragility**: AMD multi-GPU segfaults (#17583), Intel B70 missing fused ops (#26549), and Qwen4exp/Metal EOS issues (#28805) highlight incomplete backend coverage for non-CUDA targets.
- **Build and install friction**: `llama-common` headers not installed via CMake (#29350) and `--cache-ram -1` semantics broken (#29324) remain recurring friction points for downstream integrators.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*