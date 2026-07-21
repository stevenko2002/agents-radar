# AI CLI Tools Community Digest 2026-07-22

> Generated: 2026-07-21 22:16 UTC | Tools covered: 12

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

**Today's Highlights – July 22 2026**

1. **Claude Code** – v2.1.217 released adds emoji short‑code autocomplete and runtime warnings for failed transcript writes; [release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.217).  

2. **OpenAI Codex** – Nightly rust 0.145.0 adds experimental paginated thread history and an expanded `/import` migration that now supports Cursor, Claude Code, MCP servers, plugins, sessions and projects; [release details](https://github.com/openai/codex/releases/tag/0.145.0).  

3. **Gemini CLI** – Nightly v0.52.0‑nightly.20260721 includes Cloud Run/Workflows deployment assets and a Firestore‑based dual‑locking issue‑to‑PR pipeline; [build info](https://github.com/google-gemini/gemini-cli/actions).  

4. **Qwen Code** – v0.20.1 stable adds label‑driven autofix takeover, updates the CUADriver to 0.7.3 with macOS universal signed binaries, and provides a relative‑coordinate CUA driver fork; [release notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.20.1).  

5. **ComfyUI** – Merged Uni3C ControlNet support for Wan models (enabling precise camera‑motion control) and added a dedicated `dataset/` folder to prevent arbitrary path access; [PR #14946](https://github.com/comfyanonymous/ComfyUI/pull/14946).  

6. **Ollama** – PR #17291 adds Laguna v8 chat support and fixes Metal inference; [change summary](https://github.com/ollama/ollama/pull/17291).  

7. **llama.cpp** – PR #25165 adds first‑class GGUF support for Laguna XS.2 & M.1 27 B‑scale models and vectorised CUDA `GET_ROWS` for improved copy performance; [PR #25165](https://github.com/ggerganov/llama.cpp/pull/25165).  

8. **Pi** – v0.81.1 releases deterministic, checksummed source archives and a local llama.cpp model manager with search/download/unload capabilities; [release assets](https://github.com/earendil-works/pi/releases/tag/v0.81.1).

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills – Community Highlights (as of 2026‑07‑22)**  

---

## 1. Top Skills Ranking  
*The five‑to‑eight most‑discussed Skills (PRs) by recent activity and comment volume.*

| # | PR (link) | Title / Core Functionality | Recent Activity & Comments* | Status |
|---|-----------|----------------------------|-----------------------------|--------|
| **1367** | [feat(skills): add self‑audit – mechanical verification + four‑dimension reasoning quality gate (v1.3.0)](https://github.com/anthropics/skills/pull/1367) | A universal audit skill that first verifies output files mechanically, then runs a four‑dimensional reasoning audit (damage‑severity priority). | Updated 2026‑07‑02 (most recent update among open PRs). No comment count listed, but the PR appears in the “most‑watched” list and has been highlighted in several community discussions. | **Open** |
| **1323** | [fix(skill‑creator): run_eval trigger detection misses real skill name and bails on first non‑Skill tool](https://github.com/anthropics/skills/pull/1323) | Fixes a critical bug in `run_eval.py` that prevented the optimization loop from detecting when a skill actually triggers, causing persistent `recall=0%` scores. | Updated 2026‑06‑25; the issue underlying the PR (#556) has 12 comments, indicating strong community impact. | **Open** |
| **1302** | [Add color‑expert skill](https://github.com/anthropics/skills/pull/1302) | A self‑contained color‑expertise skill covering naming systems, color spaces, and “what‑to‑use‑when” guidance. | Updated 2026‑07‑21 (latest update in the top‑20 list). No comment count shown, but the PR is listed among the most‑watched. | **Open** |
| **723** | [feat: add testing‑patterns skill](https://github.com/anthropics/skills/pull/723) | Supplies a full testing stack (philosophy, unit testing, React component testing, etc.) for building robust AI‑driven tests. | Updated 2026‑04‑21; the PR has generated a number of follow‑up discussions around best‑practice testing templates. | **Open** |
| **525** | [Add pyxel skill for retro game development](https://github.com/anthropics/skills/pull/525) | Introduces a skill for the Pyxel retro‑game engine (MCP server integration, workflow from write → run_and_capture → inspect → iterate). | Updated 2026‑07‑15 (most recent activity for a feature‑focused skill). The PR is actively referenced in conversations about domain‑specific creative workflows. | **Open** |
| **1298** | [fix(skill‑creator): run_eval.py always reports 0% recall … fix Windows stream reading, trigger detection, and parallel workers](https://github.com/anthropics/skills/pull/1298) | Addresses the “run_eval.py → 0% recall” bug that plagued the description‑optimization loop, adds Windows‑specific fixes for stream reading and worker parallelism. | Updated 2026‑06‑23; the underlying issue (#556) attracted 12 comments, underscoring community urgency. | **Open** |

\*GitHub does not expose a comment count for these PRs in the snapshot; they were selected because they (a) appear at the top of the “most‑watched” list, (b) have recent update timestamps, and (c) are linked from discussions that generated notable community comment activity (e.g., Issue #556).

---

## 2. Community Demand Trends  
*Key directions that keep surfacing in Issues.*

| Trend | Representative Issue (comments) | Core Insight |
|-------|--------------------------------|--------------|
| **Security & Trust Boundaries** | **#492** – *Security: Community skills distributed under `anthropic/` namespace enable trust boundary abuse* (43 comments) | Users want official provenance for skills; impersonation poses a serious risk. |
| **Org‑wide Skill Sharing** | **#228** – *Enable org‑wide skill sharing in Claude.ai* (14 comments) | Need for a native sharing mechanism instead of manual file exchange. |
| **Reliable Evaluation & Trigger Detection** | **#556** – *run_eval.py: claude -p never triggers skills/commands* (12 comments) & **#1169** – *recall=0% on every iteration* (3 comments) | Current evaluation pipeline is brittle; community demands deterministic, observable skill activation. |
| **Governance & Safety Patterns** | **#412** – *Skill proposal: agent‑governance* (6 comments) | Growing appetite for safety‑focused skills that embed policy enforcement and audit trails. |
| **Documentation & Duplicate Content** | **#189** – *document‑skills and example‑skills plugins install identical content* (9 comments) | Users want clean separation of reference vs. example content to avoid duplication. |
| **Cross‑Platform & Compatibility** | **#1061** – *Windows compatibility: skill‑creator scripts fail* (3 comments) & **#29** – *Usage with bedrock* (4 comments) | Seamless operation across Windows, AWS Bedrock, and other environments is a priority. |
| **Standardised API Representation** | **#16** – *Expose Skills as MCPs* (4 comments) | Desire to expose skill capabilities via a uniform MCP protocol. |
| **Reasoning Quality Gates** | **#1385** – *[Proposal] Reasoning Quality Gate Pipeline* (3 comments) | Community is experimenting with multi‑gate pipelines to raise output quality. |

*Overall pattern*: The community is gravitating toward **trustworthy, shareable, and reliably testable skill ecosystems** that work across platforms and are evaluated by deterministic tooling.

---

## 3. High‑Potential Pending Skills  
*Active‑comment PRs that have not yet been merged (likely to land soon).*

| # | PR (link) | Brief Description | Why It’s High‑Potential |
|---|-----------|-------------------|------------------------|
| **1367** | [feat(skills): add self‑audit …](https://github.com/anthropics/skills/pull/1367) | Introduces a universal audit skill (mechanical verification + four‑dimension reasoning). | Addresses multiple community pain points (quality gate, deterministic verification). |
| **1323** | [fix(skill‑creator): run_eval trigger detection …](https://github.com/anthropics/skills/pull/1323) | Fixes the “recall = 0%” bug that blocks the description‑optimization loop. | Directly removes a blocker reported by >10 community members. |
| **1302** | [Add color‑expert skill](https://github.com/anthropics/skills/pull/1302) | Self‑contained color‑expertise covering naming systems & usage tables. | Fulfills a concrete, high‑visibility domain request. |
| **723** | [feat: add testing‑patterns skill](https://github.com/anthropics/skills/pull/723) | Provides a full testing stack (philosophy, unit & React component testing). | Aligns with frequent testing‑related discussions. |
| **525** | [Add pyxel skill for retro game development](https://github.com/anthropics/skills/pull/525) | Enables creation, filling, and conversion of Pyxel/OData assets. | Niche but enthusiastic user base; recent update (2026‑07‑15). |
| **1298** | [fix(skill‑creator): run_eval.py always reports 0% recall …](https://github.com/anthropics/skills/pull/1298) | Fixes Windows stream reading, trigger detection, and parallel‑worker issues. | Solves the “0 % recall” problem that plagued many CI pipelines. |
| **1099** | [skill‑creator: fix run_eval.py crash on Windows when reading from subprocess pipe](https://github.com/anthropics/skills/pull/1099) | Windows subprocess/pipe crash fix (single‑line change). | Critical for cross‑platform usability; high attention in issue threads. |
| **1050** | [skill‑creator: fix Windows subprocess + encoding bugs](https://github.com/anthropics/skills/pull/1050) | One‑line fixes for `PATHEXT`, `cp1252`, and pipe‑encoding on Windows. | Complements #1099; together they unlock Windows evaluation. |

*All listed PRs remain **open** as of 2026‑07‑22 and have seen recent updates or non‑trivial comment activity.*

---

## 4. Skills Ecosystem Insight  
**One‑sentence summary:**  
> The community’s most concentrated demand centers on trustworthy, cross‑platform skill discovery and evaluation—especially secure provenance, reliable trigger detection, and robust sharing mechanisms.  

---  

*All links point to the official `anthropics/skills` repository on GitHub.*

---

**Claude‑Code Community Digest – 2026‑07‑22**  

---  

### 1. Today's Highlights  
- The **v2.1.217** release adds emoji short‑code autocomplete in the prompt input and introduces runtime warnings when transcript writes fail or when a session cannot be saved because of an inherit‑related setting.  
- Community attention is currently centered on **multi‑account switching**, **Fable‑5 usage‑credit handling**, and **MCP tool‑visibility failures**, all of which are attracting strong up‑votes and extensive discussion.  

---  

### 2. Releases  
- **v2.1.217** – *What’s new*  
  - Emoji short‑code autocomplete (`:heart:` → ❤️, `:hea` → suggestions).  
  - Runtime warnings for failing transcript writes (e.g., disk‑full) and for sessions that cannot be saved due to inheritance.  
  - No deprecation or removal of prior features.  
  - 👉 [Release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.217)  

---  

### 3. Hot Issues (10 most‑talked‑about)  

| # | Title (type) | Comments | 👍 | Why it matters | Link |
|---|--------------|----------|----|----------------|------|
| **#36151** | **[FEATURE] Multi‑account switching in Claude Mobile app without shared email** (OPEN) | 139 | 488 | Highly requested capability for users who need separate sandboxes; community traction is strong. | <https://github.com/anthropics/claude-code/issues/36151> |
| **#29017** | **[BUG] Conversation history is lost in VSCode extension** (OPEN) | 26 | 18 | Breaks workflow continuity for VS Code users; repeatedly flagged as a regression. | <https://github.com/anthropics/claude-code/issues/29017> |
| **#79337** | **[BUG] Fable 5 prompts “usage credits required” on Max plan** (OPEN) | 23 | 9 | Incorrect model gating on the first day Fable 5 became standard; confuses Max subscribers. | <https://github.com/anthropics/claude-code/issues/79337> |
| **#75577** | **[BUG] Task tools silently disabled on Opus 4.8 / Sonnet 5 / Fable 5** (OPEN) | 13 | 6 | Silent loss of critical task‑automation APIs; no error or warning is emitted. | <https://github.com/anthropics/claude-code/issues/75577> |
| **#79358** | **[BUG] “Auto‑fix CI and address comments” checkbox silent no‑op** (CLOSED) | 10 | 7 | Indicates a regression in desktop UI behavior that was later fixed but remains a reference point for similar issues. | <https://github.com/anthropics/claude-code/issues/79358> |
| **#58606** | **[BUG] Windows Bash/PowerShell tool calls flash visible conhost window** (OPEN) | 7 | 4 | Visual flicker distracts users; impacts Windows‑only workflows. | <https://github.com/anthropics/claude-code/issues/58606> |
| **#79926** | **[BUG] Desktop stops dispatching tools to local stdio MCP servers after ~18:29 UTC** (OPEN) | 4 | 0 | Affects only the desktop client; highlights a timing‑related race condition in MCP routing. | <https://github.com/anthropics/claude-code/issues/79926> |
| **#78826** | **[BUG] MCP server connects but tools never exposed** (OPEN) | 4 | 0 | Prevents custom MCP integrations from being usable; a recurring integration pain point. | <https://github.com/anthropics/claude-code/issues/78826> |
| **#78150** | **[BUG] Custom Python MCP servers not loading after restart** (OPEN) | 1 | 0 | Undermines reliability of user‑provided MCP extensions; seen after multiple restarts. | <https://github.com/anthropics/claude-code/issues/78150> |
| **#11002** | **[FEATURE] Add a `--screen-reader` mode for NVDA/JAWS** (CLOSED) | 63 | 38 | Though closed, it still reflects strong accessibility demand that resurfaces in newer requests. | <https://github.com/anthropics/claude-code/issues/11002> |

*These issues collectively illustrate the community’s focus on account management, reliability of task/mcp tooling, and accurate model gating.*  

---  

### 4. Key PR Progress (10 most‑impactful)  

| PR # | Title & Status | Summary of Change | Link |
|------|----------------|-------------------|------|
| **#79898** | `Add Claude apps gateway on AWS example deployment assets` (CLOSED) | Provides ready‑to‑use Terraform assets for AWS‑hosted Claude Apps Gateway, expanding cloud deployment examples. | <https://github.com/anthropics/claude-code/pull/79898> |
| **#79889** | `fix(hookify): make hook entrypoints runnable without CLAUDE_PLUGIN_ROOT` (OPEN) | Removes mandatory `CLAUDE_PLUGIN_ROOT` guard, allowing plugins to be discovered via the standard `sys.path` mechanism. | <https://github.com/anthropics/claude-code/pull/79889> |
| **#79873** | `fix(hookify): event: prompt rules never fire (payload key is `prompt`)` (OPEN) | Aligns rule extraction to the actual payload key (`prompt`), enabling `event: prompt` rules to fire as intended. | <https://github.com/anthropics/claude-code/pull/79873> |
| **#78532** | `gateway/gcp: optional internal ALB + PG16 Cloud SQL edition fix` (OPEN) | Adds an optional internal ALB to the GCP example and upgrades the default Cloud SQL edition to avoid PG16 tier errors. | <https://github.com/anthropics/claude-code/pull/78532> |
| **#79647** | `fix(hookify): resolve imports independent of the plugin directory name` (OPEN) | Makes hook scripts import‑stable regardless of the plugin folder name, improving plugin portability. | <https://github.com/anthropics/claude-code/pull/79647> |
| **#79645** | `fix(hookify): read rule and transcript files as UTF-8` (OPEN) | Explicit UTF‑8 file opens prevent encoding errors on Windows, ensuring all users can use emoji and special characters. | <https://github.com/anthropics/claude-code/pull/79645> |
| **#79644** | `quote ${CLAUDE_PLUGIN_ROOT} in plugin hook commands` (OPEN) | Quotes environment expansion to handle spaces in the plugin root path, eliminating silent hook failures on macOS. | <https://github.com/anthropics/claude-code/pull/79644> |
| **#79620** | `feat: Add text‑to‑speech read‑aloud hook for accessibility` (OPEN) | Introduces a production‑ready TTS hook (Piper, `say`, PowerShell) that reads assistant responses aloud. | <https://github.com/anthropics/claude-code/pull/79620> |
| **#79636** | `fix(hookify): add hookify. prefix to example rule filenames` (OPEN) | Enforces the required `hookify.` prefix for rule files, preventing discovery mismatches. | <https://github.com/anthropics/claude-code/pull/79636> |
| **#79635** | `docs(pr-review-toolkit): point Contributing section to in‑repo agents` (OPEN) | Updates documentation to reference the correct in‑repo agent location, improving onboarding clarity. | <https://github.com/anthropics/claude-code/pull/79635> |

*These PRs focus on plugin reliability, documentation accuracy, new accessibility features, and clearer deployment examples.*  

---  

### 5. Feature Request Trends  

- **Multi‑account / sandbox isolation** – Users repeatedly request a native way to switch between independent Claude accounts without needing a shared email (see #36151).  
- **Better accessibility** – Screen‑reader mode (`--screen-reader`) and TTS hooks are the most up‑voted accessibility extensions.  
- **Robust MCP integration** – Several requests ask for guaranteed tool exposure from custom MCP servers and clearer runtime warnings when tools are unavailable.  
- **Transparent model gating & usage‑credit handling** – The Fable 5 “usage credits required” confusion highlights a need for clearer status reporting to Max subscribers.  
- **Stable plugin development experience** – Fixes around import paths, environment variable handling, and UTF‑8 file reading are frequently merged, indicating a stable but fragile plugin ecosystem.  

---  

### 6. Developer Pain Points  

- **Silent tool / API loss** – Tasks tools and MCP‑exposed functions sometimes become unavailable without error or warning (e.g., #75577, #78826).  
- **State‑loss bugs** – Conversation history disappearing in the VS Code extension and session‑index corruption after unclean shutdown (issues #29017, #79941) interrupt workflow

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest – 2026‑07‑22**  

---

### 1. Today’s Highlights
- The latest **rust 0.145.0** release lands with experimental paginated thread history, richer `/import` migrations, and a suite of alpha builds aimed at smoothing the macOS‑only `syspolicyd`/`trustd` crash that has plagued recent macOS desktop users.  
- Community backlash is growing over **unbounded Windows background‑process storms** (hundreds of `taskkill.exe`/`conhost.exe` loops) and **sandbox‑policy mismatches** that cause weekly‑limit counters to bleed at the old 5‑hour rate.  
- A fresh batch of **closed PRs** shows the team tightening process isolation (job‑object termination, stdin detachment) and adding LSP‑style auto‑installation support for the CLI.

---

### 2. Releases (last 24 h)  
| Release | Version | Key Changes |
|---------|---------|-------------|
| **rust** | `0.145.0` (stable) | • Experimental **paginated thread history** with efficient resume/search and persisted session names. <br>• **Expanded `/import`** to migrate Cursor/Claude Code settings, MCP servers, plugins, sessions, commands, and projects. |
| **rust** | `0.145.0‑alpha.27` – `0.145.0‑alpha.29` | Nightly builds delivering the above features and bug‑fixes for macOS sandbox handling. |

*No other major version bumps were published today.*

---

### 3. Hot Issues (Top 10 by comment count)  

| # | Title (link) | Why it matters | Community reaction |
|---|--------------|----------------|--------------------|
| **25719** | [macOS `syspolicyd`/CPU runaway](https://github.com/openai/codex/issues/25719) | Leads to 30‑+ % CPU spikes, memory leaks, and forces users to quit the app. | 79 comments, 344 👍 – many demand an immediate hot‑fix. |
| **2998** | [IDE‑integrated diff/approval](https://github.com/openai/codex/issues/2998) | Users want the terminal‑only approval flow inside VS Code/Cursor UI. | 66 comments, 215 👍 – strong demand for native UI experience. |
| **20214** | [Windows freeze on Pro](https://github.com/openai/codex/issues/20214) | Frequent stuttering despite ample RAM/CPU, disrupts workflow. | 62 comments, 70 👍 – repeated reports of instability on Windows 11. |
| **8745** | [LSP integration (auto‑detect/install)](https://github.com/openai/codex/issues/8745) | Lack of built‑in language‑server support forces manual setup. | 59 comments, 430 👍 – highest‑voted feature request. |
| **15310** | [Automation sandbox fallback](https://github.com/openai/codex/issues/15310) | Desktop automations ignore `danger‑full‑access` and revert to `workspace‑write`. | 20 comments, 15 👍 – calls for clearer sandbox policy enforcement. |
| **10185** | [TUI mode‑switch bug](https://github.com/openai/codex/issues/10185) | “Plan → Code” button incorrectly stays in “Plan” state. | 19 comments, 0 👍 – low visibility but signals UI regression. |
| **33685** | [Weekly‑limit drain mimics old 5‑hour cap](https://github.com/openai/codex/issues/33685) | Users notice token‑budget depletion faster than expected after limit change. | 18 comments, 9 👍 – frustration over unexpected billing impact. |
| **33776** | [Windows `taskkill`/`conhost` storm](https://github.com/openai/codex/issues/33776) | 287 processes left running, saturating WMI and degrading DWM. | 16 comments, 13 👍 – high‑severity stability issue. |
| **34260** | [Duplicate MCP suites accumulate](https://github.com/openai/codex/issues/34260) | Unbounded `taskkill` processes exhaust WMI quota, causing system‑wide slowdown. | 13 comments, 7 👍 – mirrors #33776 on a per‑session basis. |
| **34318** | [Extension adds ~19 s latency to trivial commands](https://github.com/openai/codex/issues/34318) | Small commands become sluggish after recent extension updates. | 6 comments, 0 👍 – performance regression noted by power users. |

---

### 4. Key PR Progress (Top 10 merged/closed PRs)  

| PR | Link | Summary |
|----|------|---------|
| **#34625** | [Fix Windows TUI navigation key handling](https://github.com/openai/codex/pull/34625) | Adjusts crossterm input handling to correctly map Win32 keys; resolves stuck navigation on Windows consoles. |
| **#34624** | [Terminate Windows process trees with job objects](https://github.com/openai/codex/pull/34624) | Uses Job Objects to kill child processes on Windows, preventing orphaned `cmd.exe`/`node.exe` zombies. |
| **#34622** | [Increase auto‑review model override test timeout](https://github.com/openai/codex/pull/34622) | Extends timeout to accommodate longer model‑override evaluations, preventing flaky CI failures. |
| **#34621** | [Load paginated model context across rollout lineages](https://github.com/openai/codex/pull/34621) | Guarantees that paginated thread context is fully restored when resuming a lineage. |
| **#34620** | [Add exec‑server network policy callback types](https://github.com/openai/codex/pull/34620) | Introduces `network/policyRequest` payloads enabling allow/deny/ask decisions for HTTP/HTTPS‑CONNECT/SOCKS5. |
| **#34615** | [Initialize missing‑path behavior in exec‑server sandbox test](https://github.com/openai/codex/pull/34615) | Sets `missing_path_behavior=None` for minimal root entries, cleaning up sandbox setup edge cases. |
| **#34613** | [Route Windows sandbox proxy traffic by restricting SID](https://github.com/openai/codezx/pull/34613) | Stabilizes proxy ports for elevated sandboxes while preserving network‑policy attribution. |
| **#34612** | [Detach non‑interactive subprocesses from stdin](https://github.com/openai/codex/pull/34612) | Redirects stdin to `/dev/null` for `codex doctor`‑related subprocesses, eliminating stray input deadlocks. |
| **#34611** | [Add compatibility policies for skill catalog rendering](https://github.com/openai/codex/pull/34611) | Parameterizes skill‑catalog output to respect core vs. extension compatibility policies. |
| **#34601** | [Sanitize skill names in injection metrics](https://github.com/openai/codex/pull/34601) | Sanitizes metric tags before reporting, preventing invalid‑character counter errors. |

*All of the above PRs were merged within the last 24 h and focus on process isolation, sandbox robustness, and CLI ergonomics.*

---

### 5. Feature Request Trends  

- **Paginated, searchable thread history** – high demand for UI‑level “resume” capability (mentioned in #25719, #33685).  
- **Native IDE diff/approval UI** – users want the terminal approval flow embedded in VS Code/Cursor (see #2998).  
- **Built‑in LSP auto‑installation** – a top‑voted enhancement (#8745) to eliminate manual server setup.  
- **Fine‑grained sandbox & policy controls** – clearer mapping of `danger‑full‑access` ↔ `workspace‑write` and sandbox‑proxy routing (#15310, #34260).  
- **Better Windows stability** – fixes for runaway `taskkill`/`conhost` processes and WMI storms (#33776, #34260).  
- **TUI mode‑switch clarity** – UI bugs where “Plan → Code” misbehaves (#10185).  

Overall, the community is gravitating toward **greater UI integration, richer debugging/approval workflows, and more predictable sandbox behavior** on Windows and macOS.

---

### 6. Developer Pain Points  

- **Unbounded background‑process churn** on Windows (hundreds of `taskkill.exe`/`conhost.exe` processes) leads to WMI saturation, DWM degradation, and system‑wide slowdown.  
- **MacOS CPU/memory leaks** triggered by `syspolicyd`/`trustd` after recent desktop updates, forcing frequent restarts.  
- **Sandbox policy mismatches** where automations silently fall back to `workspace‑write` despite `danger‑full‑access` configuration, causing unexpected permission errors.  
- **Performance regressions in the VS Code extension**, notably a ~19 s latency increase on trivial shell commands after recent releases.  
- **Weekly‑limit token accounting** now draining at a rate reminiscent of the deprecated 5‑hour limit, catching users off‑guard.  

These recurring issues are driving the loudest community reactions and are the primary focus of the latest closed PRs aimed at process lifecycle management, sandbox tightening, and UI stability.  

---  

*All links point to the live GitHub issue or pull‑request pages for further detail.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI Community Digest – 2026‑07‑22**  

---

### 1. Today’s Highlights
- A nightly build **v0.52.0‑nightly.20260721.gacae7124b** was published, bringing a full set of bug‑fixes, performance tweaks, and the latest “auto‑memory” improvements.  
- The issue queue remains active, with two high‑priority bugs (‑ sub‑agent recovery and generalist‑agent hangs) crossing the 10‑comment threshold and sparking considerable discussion.  
- The PR stream is dominated by infrastructure work: new Cloud Run/Workflows support, a Firestore‑backed issue‑to‑PR pipeline, and a series of security hardening fixes.

---

### 2. Releases
- **v0.52.0‑nightly.20260721.gacae7124b** – nightly build.  
  *Full changelog:* https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260720.gacae7124b...v0.52.0-nightly.20260721.gacae7124b  

*No other formal versioned releases were recorded in the last 24 h.*

---

### 3. Hot Issues (Top 10)

| # | Title (link) | Why it matters & community reaction |
|---|--------------|-------------------------------------|
| **#22323** | **[OPEN] Subagent recovery after MAX_TURNS is reported as GOAL success**  <br>**https://github.com/google-gemini/gemini-cli/issues/22323** | The `codebase_investigator` sub‑agent falsely reports `status: "success"` and `Termination Reason: "GOAL"` even after hitting its turn limit, misleading users. Community members flag this as a correctness bug; 12 comments, 2 👍. |
| **#21409** | **[OPEN] Generalist agent hangs**  <br>**https://github.com/google-gemini/gemini-cli/issues/21409** | Any call to the generalist agent causes indefinite hangs (often > 1 h). Users report that forcing “no sub‑agent” usage resolves the stall. 8 comments, 8 👍 – a clear pain point for workflow reliability. |
| **#19873** | **[OPEN] Leverage model's bash affinity via Zero‑Dependency OS Sandboxing & Post‑Execution Intent Routing**  <br>**https://github.com/google-gemini/gemini-cli/issues/19873** | Highlights the desire to expose the model’s native Bash capabilities while preserving security. The discussion frames this as a “must‑have” for code‑base exploration. 8 comments, 1 👍. |
| **#24353** | **[OPEN] Robust component level evaluations**  <br>**https://github.com/google-gemini/gemini-cli/issues/24353** | Extends the behavioral‑eval framework (originated in #15300) with 76 new evals. Engineers view this as essential for quality‑gate automation; 7 comments, 0 👍. |
| **#22745** | **[OPEN] Assess the impact of AST‑aware file reads, search, and mapping**  <br>**https://github.com/google-gemini/gemini-cli/issues/22745** | Proposes AST‑aware reads to shrink token noise and turn counts. The community sees potential performance gains; 7 comments, 1 👍. |
| **#21968** | **[OPEN] Gemini does not use skills and sub‑agents enough**  <br>**https://github.com/google-gemini/gemini-cli/issues/21968** | Users note that sub‑agents are only invoked when explicitly commanded, not autonomously. 6 comments, 0 👍 – reflects a gap between design intent and observed behaviour. |
| **#26522** | **[OPEN] Stop Auto Memory from retrying low‑signal sessions indefinitely**  <br>**https://github.com/google-gemini/gemini-cli/issues/26522** | “Auto Memory” currently retries every low‑signal session forever, cluttering the inbox. Community wants a cap or early dismissal; 5 comments, 0 👍. |
| **#25166** | **[OPEN] Shell command execution gets stuck with “Waiting input” after command completes**  <br>**https://github.com/google-gemini/gemini-cli/issues/25166** | After a command finishes, Gemini erroneously stays in “awaiting input” state, causing hangs on simple CLI calls. 4 comments, 3 👍 – a frequent runtime bug. |
| **#22232** | **[OPEN] Enhance browser_agent resilience: Automatic session takeover and lock recovery**  <br>**https://github.com/google-gemini/gemini-cli/issues/22232** | Browser‑agent fails when a profile is locked; the suggested fix is a graceful takeover instead of a fail‑fast exit. 4 comments, 0 👍. |
| **#21983** | **[OPEN] (Sub)agents running without permission since v0.33.0**  <br>**https://github.com/google-gemini/gemini-cli/issues/22093** | After upgrading to v0.33.0, sub‑agents start despite “agents mode = disabled”. Users view this as a security regression. 3 comments, 0 👍. |

---

### 4. Key PR Progress (Top 10)

| # | Title (link) | Core contribution |
|---|--------------|-------------------|
| **#28432** | **feat(pr‑generator-db): implement Firestore concurrency dual‑locking and test ingestion utilities**  <br>**https://github.com/google-gemini/gemini-cli/pull/28432** | Introduces a robust Firestore interface for the Issue‑to‑PR pipeline, adding transactional locks and test helpers. |
| **#28472** | **fix(core): sequentially verify cached credentials and restore GOOGLE_APPLICATION_CREDENTIALS fallback**  <br>**https://github.com/google-gemini/gemini-cli/pull/28472** | Fixes an authentication fallback regression that caused “FatalAuthenticationError” exit codes. |
| **#28469** | **fix(core): rotate session ID on model fallback to prevent stateful API errors**  <br>**https://github.com/google-gemini/gemini-cli/pull/28469** | Rotates the session identifier when falling back to `gemini‑2.5‑flash`, eliminating a repeatable API error. |
| **#28431** | **feat(pr‑generator‑infra): configure Cloud Run job, Workflows definition, and Dockerfile**  <br>**https://github.com/google-gemini/gemini-cli/pull/28431** | Sets up the cloud‑native runtime for the SSR code‑generation pipeline. |
| **#28305** | **feat(evals): add tool call formatter and integrate failure summaries**  <br>**https://github.com/google-gemini/gemini-cli/pull/28305** | Enhances evaluation diagnostics with a timeline of tool calls and concise failure summaries. |
| **#28169** | **feat(evals): add eval coverage report command**  <br>**https://github.com/google-gemini/gemini-cli/pull/28169** | Provides `eval:coverage` to report tool‑call coverage across the eval suite. |
| **#28411** | **feat(caretaker): post comment before auto‑closing feature requests**  <br>**https://github.com/google-gemini/gemini-cli/pull/28411** | Automatically explains the auto‑close decision to users when a feature request is labelled. |
| **#28474** | **feat(core): add skill name dimension to tool call telemetry (#18189)**  <br>**https://github.com/google-gemini/gemini-cli/pull/28474** | Enriches telemetry with a `skill_name` label for better observability of skill usage. |
| **#28397** | **fix(core): remove synchronous I/O from shell tool critical path**  <br>**https://github.com/google-gemini/gemini-cli/pull/28397** | Swaps blocking `fs.*Sync` calls for async alternatives, eliminating terminal UI stutter. |
| **#28394** | **fix(core): remove temp files on background process exit**  <br>**https://github.com/google-gemini/gemini-cli/pull/28394** | Prevents lingering temporary directories after background shell jobs, fixing a resource‑leak bug. |

---

### 5. Feature‑Request Trends
- **Visibility into Sub‑Agent Trajectories** – Multiple issues request a shareable view of agent steps (`/chat share`, trajectory logs).  
- **AST‑aware Exploration** – Strong demand for AST‑aware file reads, searches, and mapping to cut token churn and improve precision.  
- **Native Bash Affinity & Sandboxing** – Users want to leverage the model’s natural Bash skill set within a safe, zero‑dependency sandbox.  
- **Skill‑level Telemetry & Naming** – Adding a `skill_name` dimension to telemetry is repeatedly mentioned as a debugging aid.  
- **Robust Auto‑Memory Management** – Requests for deterministic redaction, session‑expiry, and inbox quarantine of malformed patches are surfacing.  

---

### 6. Developer Pain Points
- **Unpredictable Agent Hangs** – Both the generalist agent and sub‑agents can stall indefinitely, often after emitting a “success” status that is actually a timeout.  
- **Incorrect Symlink Recognition** – Agents fail to pick up `~/.gemini/agents/*.md` files when they are symlinks, breaking custom skill registration.  
- **Resource Leaks & Temp‑File Accumulation** – Background processes leave temporary directories behind and do not clean up after themselves.  
- **Version‑Lock‑In Errors & 400‑Tool Limits** – Exceeding 128 tools triggers a 400 error; credential fallback regressions cause hard crashes.  
- **Security‑Sensitive Variable Expansion** – Current sanitisation misses certain Bash variable patterns, allowing potential bypasses (GHSA‑wpqr‑6v78‑jr5g).  
- **Infinite Loop Risks in Event‑Driven Agents** – Lack of real‑world time budgets can lead to endless state‑transition loops, prompting proposed deadline enforcement.  

---

*All links refer to the official **google‑gemini/gemini-cli** repository.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest – 2026‑07‑22**

---

### 1. Today’s Highlights
- **`/model plan` command** was merged, letting users switch or lock a model while in *plan* mode (`/model <id|off>`).  
- The latest patch **v1.0.74‑0** adds this functionality alongside small UI fixes (search‑match whitelisting, relative‑link handling).  
- A single open PR (#3163) brings a monitoring view for ViewSonic displays, but it is still in early discussion.

---

### 2. Releases
- **v1.0.74‑0** (released 2026‑07‑22) – Adds `/model plan` (or `/model --plan`) to select a model while in plan mode; improves search‑match logic; fixes relative link handling in custom agent instructions.  
- No other version bumps were published in the last 24 h.

*Release notes:* <https://github.com/github/copilot-cli/releases/tag/v1.0.74-0>

---

### 3. Hot Issues (10 noteworthy items)

| Issue | Why It Matters | Community Reaction |
|-------|----------------|--------------------|
| **#1305** – *Support CIMD for Remote OAuth MCP Servers* | Enables proper OAuth token handling for remote MCP servers that use Dynamic Client Registration. Critical for enterprises adopting private MCP endpoints. | 26 👍, 4 comments – strong appetite for full OAuth flow support. |
| **#3622** – *Copy to clipboard silently fails on Windows* | Breaks a core workflow (copying agent output) on the most widely‑used platform; downgrade from v1.0.48. | 4 👍, 4 comments – users report regression, requesting urgent fix. |
| **#4188** – *Plan‑mode blocks shell commands* | Plan mode was advertised as “enriching” with `gh` and other CLI tools; the block is seen as a regression. | 2 👍, 3 comments – calls for reconsideration of the restriction. |
| **#2193** – *Default model configuration for /fleet subagents* | Users want a global/default model for fleet‑spawned subagents rather than repeating the flag each time. | 14 👍, 3 comments – high demand for configurability. |
| **#4163** – *Child processes accumulate as zombies* | Each session leaks zombie subprocesses (~2 /min), eventually exhausting resources. | 0 👍, 2 comments – performance‑critical bug needing immediate attention. |
| **#1518** – *Support MCP resources & prompts* | MCP offers three primitives (tools, prompts, resources); currently only tools are exposed. | 14 👍, 2 comments – repeated request to broaden MCP surface. |
| **#4012** – *BYOK reasoning‑effort flag not recognised for `glm-5.2:cloud`* | Custom BYOK configurations break when using advanced reasoning‑effort settings. | 16 👍, 2 comments – friction for self‑hosted model users. |
| **#2595** – *Background agent completion retention* | Completed background agents disappear from the registry too quickly, breaking `read_agent` after completion. | 0 👍, 2 comments – reliability issue for long‑running workflows. |
| **#4183** – *Auto‑compaction misses 5 MB CAPI failure* | Large tool histories exceed the 5 MB request body limit even when token budget is intact; compaction does not pre‑empt this. | 5 👍, 1 comment – highlights edge‑case context‑size limits. |
| **#4201** – *ENOENT: cannot open token file in remote Linux* | SSH‑based deployments fail to locate the token file, preventing Copilot from reaching the server. | 0 👍, 0 comments – specific to remote Raspberry‑Pi setups, but signals a path‑resolution bug. |

---

### 4. Key PR Progress (10 important PRs)

| PR | Summary |
|----|---------|
| **#3163** – *Add ViewSonic monitor view* | Introduces a UI view for monitoring a ViewSonic display; currently open for feedback. <https://github.com/github/copilot-cli/pull/3163> |
| *(All other merged PRs are internal; only this one is open in the last 24 h.)* |

---

### 5. Feature Request Trends
- **Full MCP Resource & Prompt support** – multiple issues (#1518, #3073, #1803) ask for resources and prompts to be first‑class citizens.  
- **Configurable model defaults** – requests for a global/default model for fleet subagents (#2193) and quick switching between preset configs (#4190).  
- **Advanced plan‑mode flexibility** – users want plan mode to invoke arbitrary shell tools and to preserve sandboxed session isolation (#4188, #4193).  
- **Improved token/credits visibility** – breakdown of AI‑credit usage per subagent (#4207) and richer per‑subagent accounting.  
- **Robust OAuth token refresh** – silent refresh using `refresh_token` instead of interactive re‑auth (#4203).  

These themes recur across ~30 open issues, indicating a clear direction: **extend Copilot CLI’s MCP surface, make model selection/configurable, and tighten session‑level security and observability**.

---

### 6. Developer Pain Points
- **Clipboard unreliability on Windows & in tmux/screen** (#3622, #4191) – breaks basic workflow steps.  
- **Zombie subprocess accumulation** (#4163) – leads to memory leaks and performance degradation.  
- **Plan‑mode command blocking** (#4188) – prevents use of essential CLI tools like `gh`.  
- **Background agent lifecycle gaps** (#2595) – agents disappear before their results can be consumed.  
- **BYOK configuration friction** (#4012, #4196) – advanced reasoning flags and streaming APIs cause failures.  
- **Environment footer stuck on “Loading:”** (#4206) – misleading UI state when MCP handshake stalls.  
- **Token‑file path issues in remote Linux** (#4201) – prevents remote sessions from authenticating.  
- **Sandboxed session permission model** (#4193) – prevents agents from editing their own `plan.md`.  

Addressing these pain points will be pivotal for maintaining developer confidence as the platform matures.  

--- 

*All links are relative to the official repository:* <https://github.com/github/copilot-cli>

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest (2026‑07‑22)**  

---

### 1. Today's Highlights  
- A UI‑flicker bug that caused the entire conversation to be re‑rendered repeatedly has been highlighted by users on Issue #2474.  
- Tool‑calling for the **k2.5** model is currently failing, and Goal‑mode can get stuck in an infinite loop (Issue #2527).  
- A PR (#2524) addresses the inaccurate replacement counting of `StrReplaceFile`, fixing a chain‑edit counting error reported in Issue #2526.

---

### 2. Releases  
- **No new releases** have been pushed in the last 24 hours.

---

### 3. Hot Issues  *(selected for impact & community attention)*  

| Issue | Why it matters | Community reaction | Link |
|-------|----------------|--------------------|------|
| **#2474** – Interface keeps “shaking” and re‑renders the whole conversation | Affects usability; users report jittery screens that force full re‑render, degrading the smooth chat experience | 👍 2, 1 comment | <https://github.com/MoonshotAI/kimi-cli/issues/2474> |
| **#2529** – Keyboard number keys on the right side do not trigger input | Breaks basic editing for users relying on num‑pad; suspected missing key‑event listeners | 👍 0, no comments | <https://github.com/MoonshotAI/kimi-cli/issues/2529> |
| **#2528** – Shell mode output can become excessively long | Makes it hard to read command results; users must manually truncate or abort | 👍 0, no comments | <https://github.com/MoonshotAI/kimi-cli/issues/2528> |
| **#2527** – `k2.5` tool calling is completely broken; Goal mode loops infinitely | Core functionality (function/tool invocation) fails, preventing typical workflows | 👍 0, no comments | <https://github.com/MoonshotAI/kimi-cli/issues/2527> |
| **#2526** – `StrReplaceFile` counts replacements against the original file, causing chained edits to miss their targets | Leads to silent edit failures when edits depend on prior transformations | 👍 0, no comments | <https://github.com/MoonshotAI/kimi-cli/issues/2526> |

*All five issues are active and have been updated within the last 24 hours.*

---

### 4. Key PR Progress  

| PR | Summary | Impact | Link |
|----|---------|--------|------|
| **#2524** – `fix(tools): count StrReplaceFile replacements against the running content` | Adjusts the replacement counter to evaluate edits on the *current* file state rather than the original, preventing missed chained edits | Resolves Issue #2526; restores reliable sequential editing workflows | <https://github.com/MoonshotAI/kimi-cli/pull/2524> |

*Only one PR was merged in the last day; it directly addresses a high‑impact bug.*

---

### 5. Feature Request Trends  

- **Reliability of tool invocation** – Multiple users report broken `tool calling` for `k2.5` and want robust function dispatch.  
- **Unified input handling** – Requests for proper listening of all keyboard keys (especially num‑pad) to avoid silent input failures.  
- **Controlled output length** – Desire for built‑in truncation or pagination in shell mode to keep long outputs manageable.  
- **Intelligent replacement tracking** – Need for precise edit tracking when performing chained `StrReplaceFile` operations.  
- **Stable UI rendering** – Users want a non‑flickering interface that does not re‑render the entire conversation on each keystroke.

These themes dominate the recent issue set and signal priority areas for the next development cycle.

---

### 6. Developer Pain Points  

- **Flickering UI & full re‑renders** (Issue #2474) cause noticeable lag and disrupt workflow.  
- **Missing key‑event listeners** (Issue #2529) break basic text entry on certain keyboards.  
- **Failing tool‑call mechanisms** for `k2.5` (Issue #2527) halt automation pipelines.  
- **Incorrect replacement counting** in `StrReplaceFile` (Issue #2526) leads to silent edit failures in complex editing scenarios.  
- **Unbounded shell output** (Issue #2528) makes debugging and script pipelines cumbersome.

Addressing these pain points will markedly improve the developer experience and reduce the most common support queries.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode Community Digest – 2026‑07‑22**

---

### 1. Today's Highlights
- The issue tracker is buzzing with memory‑management bugs, subscription‑balance problems, and a flurry of UI‑/TUI‑related feature requests.  
- No new stable releases were published in the last 24 h, but several high‑impact pull‑requests have been merged or are open for review.  
- Community sentiment is mixed: while performance regressions and instability dominate discussions, there is strong demand for persistent project storage, better legacy UI options, and richer session metadata.

---

### 2. Releases
- **None** – no versioned release notes were posted in the last 24 h.

---

### 3. Hot Issues (10 most noteworthy)

| # | Title (link) | Why it matters | Community reaction |
|---|--------------|----------------|--------------------|
| **20695** | [Memory Megathread](https://github.com/anomalyco/opencode/issues/20695) | Centralises scattered memory‑leak reports; asks for heap snapshots – a core reliability concern. | 117 comments, 90 👍 – high visibility; users warn “LLM always wrong” and request systematic diagnostics. |
| **37012** | [FEATURE] Keep legacy layout option (link) | Many users prefer the old sidebar‑first UI; the new layout adds navigation friction. | 27 👍, 25 comments – strong endorsement for UI continuity. |
| **12393** | [CLOSED] How to unarchive in opencode‑desktop (link) | Frequently asked support question; demonstrates a usability gap in session management. | 31 👍, 17 comments – repeatedly referenced in help forums. |
| **31119** | [BUG] Error: no such column: name (link) | Breaks the app after an upgrade; blocks all user workflows. | 15 👍, 14 comments – urgent bug that halted usage for several members. |
| **30680** | OpenCode enters auto‑compaction loop (link) | Causes token‑exhaustion loops and silent response failures; impacts every model. | 0 👍, 14 comments – users demand immediate loop‑break fix. |
| **19130** | Windows ARM64 native: OpenTUI fails to initialize (link) | Blocks UI interaction on a key platform; only non‑TUI commands work. | 8 👍, 12 comments – platform‑specific regression. |
| **14292** | Save conversations & session data to project folder (link) | Addresses data‑persistence concerns; currently all sessions dump to `~/.opencode`. | 20 👍, 12 comments – a widely‑requested workflow improvement. |
| **20045** | Edit permission uses relative paths but external_directory uses absolute paths (link) | Breaks permission enforcement when mixing relative/absolute paths. | 2 👍, 11 comments – developers note subtle path‑format inconsistency. |
| **37790** | OpenCode Go subscription paid but workspace shows “Insufficient balance” (link) | Payment succeeded but feature remains locked – erodes trust in billing flow. | 0 👍, 10 comments – frustration over subscription handling. |
| **33028** | Subagents hang indefinitely after quick bash tool call (link) | Long‑standing hang issue that requires manual kill; affects all models. | 3 👍, 7 comments – community points to lack of timeout handling. |

---

### 4. Key PR Progress (10 most relevant)

| PR # | Title (link) | Summary |
|------|--------------|---------|
| **38179** | [feat(plugin): expose app metadata](https://github.com/anomalyco/opencode/pull/38179) | Adds normalized `App.useragent()`, centralises version/channel metadata; aims to simplify plugin contexts. |
| **38198** | [fix(acp): stage file edits for native review instead of writing twice](https://github.com/anomalyco/opencode/pull/38198) | Fixes duplicate write issue in the ACP workflow; resolves race conditions in file staging. |
| **38175** | [feat(session-ui): render mermaid code blocks as diagrams in chat](https://github.com/anomalyco/opencode/pull/38175) | Merges Mermaid rendering into the desktop UI; chat now displays live diagrams while preserving copy source. |
| **38194** | [fix(opencode): skip tui migration when tui.jsonc exists](https://github.com/anomalyco/opencode/pull/38194) | Prevents unintended migration when a `tui.jsonc` config is present, fixing migration stalls. |
| **38192** | [mini: add hideable footer details](https://github.com/anomalyco/opencode/pull/38192) | Introduces optional persistent footer with model/usage/context metrics; users can hide to gain screen real‑estate. |
| **38172** | [feat(codemode): support generator functions](https://github.com/anomalyco/opencode/pull/38172) | Enables async/sync generators, full lazy evaluation, and proper cleanup semantics for CodeMode plugins. |
| **37174** | [refactor(tui): use command IDs for v2 keybinds](https://github.com/anomalyco/opencode/pull/37174) | Aligns keybindings with canonical command IDs; improves configurability and eliminates duplication. |
| **33690** | [fix(lsp): match extensionless filenames in extensions config](https://github.com/anomalyco/opencode/pull/33690) | Allows LSP servers registered with extension‑less names (e.g., `Makefile`) to activate correctly. |
| **38187** | [contributor] feat(desktop): add default background (link) | Sets a default desktop background image while preserving user overrides; part of UI polish. |
| **38189** | [fix(core): identify spawned subagents](https://github.com/anomalyco/opencode/pull/38189) | Prefixes child prompts with “spawned‑subagent” context and preserves original request lineage for debugging. |

---

### 5. Feature Request Trends
- **Persistence & Project‑Bound Storage** – users repeatedly ask to save sessions, conversations, and cache data *inside* the project directory rather than a global `~/.opencode` location.  
- **Legacy UI & Layout Flexibility** – strong demand to retain the old sidebar‑first layout and to expose simple toggle switches for UI elements.  
- **Session Autonomy** – proposals to auto‑name new sessions from the first message, and to make session URLs add the project to the sidebar automatically.  
- **Caching Cost Model** – several requests to expose distinct 5‑minute vs. 1‑hour cache write‑cost rates (mirroring Anthropic’s tiered scheme).  
- **Telegram / Remote Assistant Integration** – interest in delegating tasks to OpenCode via Telegram bots.  
- **Background & Theming Options** – community contributions propose configurable default desktop backgrounds and more granular UI theming.

---

### 6. Developer Pain Points
- **Memory Instability** – recurring heap‑snapshot requests and reports of leaks hint at underlying GC or resource‑management bugs.  
- **Unpredictable Auto‑Compaction** – loops that consume tokens without user control break workflows and cause silent failures.  
- **Billing/Credit Mismatches** – Paid subscriptions showing “Insufficient balance” erode confidence in the Go subscription model.  
- **Cross‑Platform Runtime Quirks** – Windows ARM64 TUI failures, Bun networking issues on localhost, and macOS log‑rotation problems illustrate platform‑specific regression density.  
- **Permission System Inconsistencies** – mismatched path handling (relative vs. absolute) and delayed permission reads cause subtle permission bugs.  
- **Event Propagation Overhead** – in the TUI, high‑frequency event bursts cause redundant reactive updates, suggesting a need for batched propagation.  

---

*All links point to the original GitHub issue or pull‑request pages for quick reference.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

**Pi Community Digest – 2026‑07‑22**  
*Compiled from the last 24 h on https://github.com/badlogic/pi-mono*  

---  

### 1. Today's Highlights
- **v0.81.1** is now live, delivering deterministic source archives with checksums and a new **local llama.cpp model manager** that can search, download, and unload Hug‑ging Face models on‑the‑fly.  
- The community is actively debating **session‑selector UI enhancements** (Ctrl + A “Archive” shortcut) and **compaction/retry handling** to avoid crashes when context windows exceed the 100 % threshold.  
- Several critical bugs (‑ `streamFunction is not a function` crashes on resume and on non‑string autocomplete values) have been closed, but the underlying race conditions remain under discussion.  

---  

### 2. Releases
| Version | Highlights | Link |
|---------|------------|------|
| **v0.81.1** | • Deterministic, checksummed source archives for every release  <br>• Instructions for rebuilding standalone binaries  <br>• Minor patch to the CLI help flow | https://github.com/earendil-works/pi/releases/tag/v0.81.1 |
| **v0.81.0** | • **Local llama.cpp model manager** – search/download/HF‑model loading & unload with live progress  <br>• Updated documentation on rebuilding binaries from source archives | https://github.com/earendil-works/pi/releases/tag/v0.81.0 |

*No other version bumps were published in the past 24 h.*  

---  

### 3. Hot Issues (10 most‑commented)

| # | Title (type) | Comments | Why it matters | Community reaction |
|---|--------------|----------|----------------|--------------------|
| **#3357** (Closed) | Official local LLM provider extension | **30** 👍 43 | Enables dynamic model list fetching from `{baseUrl}/models`, a prerequisite for plugging any local LLM router (llama.cpp, Ollama, LM Studio). | High enthusiasm; many users see it as the “gateway” to a truly vendor‑agnostic Pi. |
| **#6278** (Closed) | Bug: New Claude models fail ~20 % edits | **23** 👍 9 | Breakage of the edit tool due to stray keys (`new_text_x`, `type`, …) generated by LLMs; impacts reliability of interactive editing. | Strong push for a robust schema validation layer. |
| **#5653** (Open) | Move off Shrinkwrap | **19** 👍 0 | Duplicate `pi-ai` copies cause module‑level `Map` collisions; blocks clean publishing of `@earendil-works/pi-coding-agent`. | Request to consolidate dependencies and simplify the dependency graph. |
| **#6915** (Closed) | Crash after 0.81.0 upgrade (`streamFunction is not a function`) | **14** 👍 2 | Introduced regression that aborts resumed sessions; reproduces on multiple platforms (Linux/macOS). | Users demand a hot‑fix and clearer migration path. |
| **#6747** (Open) | API for enhancing agent message markdown | **7** 👍 2 | Enables extensions to render markdown formulas or custom renders without mutating LLM payloads. | Positive but low traction; seen as a future‑proofing feature. |
| **#6774** (Open) | Ctrl+G external editor slowdown in crowded `os.tmpdir()` | **7** 👍 0 | Writing temp files to a global temp directory creates contention; degrades editor launch speed. | Community suggests isolated `mkdtemp` subfolders. |
| **#5593** (Open) | Tab‑completion trailing space blocks argument autocomplete | **4** 👍 0 | Simple UX bug that prevents the natural “/`<Tab>` + Space” flow. | Minor but repeated across many users. |
| **#6163** (Closed) | Map Bedrock `apiKey` to `env.AWS_BEARER_TOKEN_BEDROCK` | **4** 👍 0 | Aligns auth semantics with other providers; improves security and consistency. | Merged but later auto‑closed; developers want it re‑opened. |
| **#6552** (Open) | Allow extensions to request a deferred canonical reload | **4** 👍 0 | Needed for extensions that must wait for runtime stability before reloading. | Viewed as a building block for richer extension ecosystems. |
| **#6918** (Closed) | Constant crashing – same `streamFunction is not a function` error | **3** 👍 0 | Overlaps with #6915; suggests a systemic race condition in the agent loop. | Community points to need for better error handling in async streams. |

---  

### 4. Key PR Progress (10 most‑commented / highest‑impact)

| PR | Title | Status | Core Change | Link |
|----|-------|--------|-------------|------|
| **#6928** | `generate-models`: use reasoning options from `models.dev` | Open | Pulls the latest reasoning‑level metadata from the remote catalog, enabling per‑model reasoning toggles. | https://github.com/earendil-works/pi/pull/6928 |
| **#6216** | Add Amazon Bedrock Mantle OpenAI Responses provider | Open | Implements a new provider that translates Mantle’s OpenAI‑compatible responses into Pi’s API. | https://github.com/earendil-works/pi/pull/6216 |
| **#6927** | Add native OpenRouter OAuth support | Open | Introduces PKCE‑based browser flow and one‑shot localhost callback; returns a user‑scoped API key. | https://github.com/earendil-works/pi/pull/6927 |
| **#6925** | `clipboard`: await `wl-copy` exit code before claiming success | Closed | Guarantees true success only after the copy command finishes; prevents false‑positive reports in sandboxed envs. | https://github.com/earendil-works/pi/pull/6925 |
| **#6903** | Fix(\(coding‑agent\)): speed up external editor launch | Open | Refactors prompt handling into a shared temporary sub‑folder, eliminating global `tmpdir` contention. | https://github.com/earendil-works/pi/pull/6903 |
| **#6913** | `feat(coding‑agent)`: add release source archives | Closed | Publishes deterministic source archives with checksums and docs for rebuilding binaries. | https://github.com/earendil-works/pi/pull/6913 |
| **#6881** | `feat(ai)`: use provider‑reported cost when responses include it | Open | Switches from catalog‑based cost calculation to real billed cost (`usage.cost.total`). | https://github.com/earendil-works/pi/pull/6881 |
| **#6901** | `compaction & branch summarization follow retry policy` | Open | Adds retry logic to auto/compaction and summarization flows; emits UI events for retry visibility. | https://github.com/earendil-works/pi/pull/6901 |
| **#6916** | `feat(agent)`: add `AgentHarness` execution tools | Open | Introduces `AgentHarnessTool` with arbitrary app context (e.g., `ExecutionEnvironment`, session ID). | https://github.com/earendil-works/pi/pull/6916 |
| **#6917** | `feat(session‑selector)`: add Ctrl+A archive shortcut | Closed | Adds a keyboard shortcut to archive selected sessions to `.pi/archive/YYYY‑MM/` with one keystroke. | https://github.com/earendil-works/pi/pull/6917 |

---  

### 5. Feature Request Trends
- **Unified Model Management** – Dynamic fetching of model lists (`#3357`) and native support for llama.cpp/ Bedrock/Ollama providers are repeatedly requested.  
- **Enhanced Session Controls** – Archive shortcuts, stable session IDs, and better cleanup of temp session directories are top‑of‑mind for power users.  
- **Robust Editing & Compaction** – Users want reliable edit‑tool validation, retry‑aware summarization/compaction, and clearer UI feedback when context windows exceed limits.  
- **Cost Transparency & Reporting** – Direct consumption of provider‑reported usage cost (`#6881`) is gaining traction as a way to avoid manual billing calculations.  
- **Extension‑API Maturity** – Requests for `ExtensionContext.requestReload()`, custom chrome for built‑in messages, and markdown/ image rendering show a push toward a richer, more composable extension surface.  

---  

### 6. Developer Pain Points
- **Crash Regressions** – Multiple “`streamFunction is not a function`” crashes after 0.81.x upgrades (#6915, #6918) indicate race conditions in the async agent loop.  
- **Temp‑File Contention** – External editors stall when `os.tmpdir()` is crowded; users propose isolated `mkdtemp` workspaces (#6774).  
- **Dependency Collisions** – Shrinkwrap duplication (`#5653`) blocks clean publishing of the coding‑agent package.  
- **Schema Breakage** – Extra LLM‑generated keys in edit payloads break validation (`#6278`).  
- **Feature Gap for Local LLMs** – Default model selection cannot reference llama.cpp models, leading to “No models available” on startup (#6922).  
- **Testing Flakiness** – Real‑registry refresh tests timeout under CI, requiring longer budgets or stricter mocking.  
- **Visibility of Cost & Usage** – Lack of per‑response cost data forces developers to recompute usage manually.  

---  

*All links point to the live GitHub repository; please refer to the original issue/PR pages for the most up‑to‑date details.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code Community Digest – 2026‑07‑22**  

---

### 1. Today's Highlights  
- **v0.20.1** is now live: brings label‑driven autofix takeovers, a fix for forced‑dispatch green no‑ops, and the first official **cua‑driver‑rs v0.7.3** pre‑built binaries (macOS universal, signed & notarized; Linux & Windows unsigned).  
- The nightly build **v0.20.0‑nightly.20260721.cda0e0348** adds relative‑coordinate support for the CUA driver and expands macOS/Apple Silicon packaging.  
- No breaking changes were reported; the release focuses on stability, tooling ergonomics, and incremental UI polish.

---

### 2. Releases (last 24 h)  
| Version | Type | Key Changes |
|--------|------|-------------|
| **v0.20.1** | Stable | • `autofix` label‑driven takeover & release flow  <br>• Fix for forced‑dispatch green no‑op ([#7165](https://github.com/QwenLM/qwen-code/pull/7165))  <br>• Updated **cua‑driver‑rs** to 0.7.3 with macOS universal signed binary, Linux/ARM64 glibc 2.31 floor, Windows ARM64 builds |
| **v0.20.0‑nightly.20260721.cda0e0348** | Nightly | • Relative‑coordinate fork of CUA driver  <br>• macOS codesigned & notarized universal app (`QwenCuaDriver.app`)  <br>• Linux & Windows unsigned builds (x86_64 + arm64) |

*No breaking changes were introduced.*

---

### 3. Hot Issues  *(top‑10 by comment volume or impact)*  

| # | Issue (link) | Why it matters | Community reaction |
|---|--------------|----------------|--------------------|
| **#7156** | [Bug: Subagent mutates main session model – context overflow recurrence](https://github.com/QwenLM/qwen-code/issues/7156) | Shows a silent model switch during sub‑agent execution, causing 400 errors and session‑state corruption. | 11 comments, 👍 0 – developers flag it as a critical regression after PR #7119. |
| **#7316** | [Bug: OpenAI‑compatible toolCall breaks subAgent with empty `working_dir`](https://github.com/QwenLM/qwen-code/issues/7316) | Prevents any `agent` tool from functioning when `isolation: "worktree"` is used; empty `working_dir` fields generate schema‑conflict errors. | 5 comments, 👍 0 – high‑priority P2, awaiting fix. |
| **#7056** | [Failed to connect to Qwen agent – ACP process exits unexpectedly](https://github.com/QwenLM/qwen-code/issues/7056) | VS Code extension cannot start the ACP process; exit code 0 with “unknown option ‘acp’”. Blocks adoption of the Code Companion. | 5 comments, 👍 0 – major usability blocker. |
| **#7306** | [Harden tool‑output budgeting, observability, and artifact lifecycle](https://github.com/QwenLM/qwen-code/issues/7306) | Phase 1 completed; now moving to deeper observability and budgeting controls for future scaling. | 4 comments, 👍 0 – community sees this as the next performance frontier. |
| **#5540** | [Allow resuming a completed background sub‑agent (revive via send_message)](https://github.com/QwenLM/qwen-code/issues/5540) | Background agents are currently single‑shot; users want persistence after completion. | 4 comments, 👍 0 – strong demand for long‑running automation. |
| **#7252** | [Token‑plan.ap‑southeast‑1 not selectable on /auth](https://github.com/QwenLM/qwen-code/issues/7252) | Selector UI omission prevents a regional token plan from being used, limiting pricing options. | 4 comments, 👍 0 – simple UI fix needed. |
| **#7049** | [Update‑check timeout UX – warning instead of error, raise budget](https://github.com/QwenLM/qwen-code/issues/7049) | Network‑slow regions experience false‑negative update checks; softening UX improves adoption. | 3 comments, 👍 0 – users appreciate the warning approach. |
| **#7404** | [Startup timeout too short when loading old sessions](https://github.com/QwenLM/qwen-code/issues/7404) | Long session restores cause immediate timeout, preventing daemon start‑up. | 3 comments, 👍 0 – high‑frequency pain point. |
| **#7433** | [SDK reports “coder‑model(qwen‑oauth)” after using local model](https://github.com/QwenLM/qwen-code/issues/7433) | Wrong model identifier appears in SDK payload, breaking model‑tracking. | 2 comments, 👍 0 – confusing output for users. |
| **#6701** | [feat(web‑shell): add “Start‑in” context selector](https://github.com/QwenLM/qwen-code/issues/6701) | Requested UI to let users pick execution context (local vs worktree) directly from the toolbar. | 2 comments, 👍 0 – early interest in workflow customization. |

---

### 4. Key PR Progress  *(10 PRs with the most impact)*  

| PR | Title (link) | Summary |
|----|--------------|---------|
| **#7381** | [fix(cli): correct queued message display style and ordering](https://github.com/QwenLM/qwen-code/pull/7381) | Polished UI for mid‑turn steer messages – switched from notification “●” to proper `>` styling and reordered queued entries. |
| **#7444** | [ci(autofix): continue environment‑specific fixes](https://github.com/QwenLM/qwen-code/pull/7444) | Extends Autofix to keep investigating failures that can’t be reproduced locally, replacing subjective confidence with objective blockers. |
| **#7302** | [feat(cli): reference prior sessions via `@` and add completion tabs](https://github.com/QwenLM/qwen-code/pull/7302) | Enables `@session:<id>` mentions that inject a read‑only transcript summary, improving session navigation. |
| **#6723** | [fix(prompt‑cache): stabilize deferred tool calls](https://github.com/QwenLM/qwen-code/pull/6723) | Prevents tool‑search declarations from flickering after deferred discovery; introduces a stable schema payload. |
| **#7393** | [feat(core): add memory recall delivery telemetry](https://github.com/QwenLM/qwen-code/pull/7393) | Adds telemetry to verify that recalled memories actually reach the main model, closing a visibility gap. |
| **#7268** | [feat(serve): hot‑reload workspace trust changes](https://github.com/QwenLM/qwen-code/pull/7268) | Allows dynamic workspace‑trust updates without restarting the daemon; introduces policy snapshots. |
| **#7426** | [feat(core): keep completed background agents resident](https://github.com/QwenLM/qwen-code/pull/7426) | Preserves runtime state of finished background agents, enabling quick reuse via `send_message`. |
| **#7258** | [fix(cli): yield to single‑slot background agents](https://github.com/QwenLM/qwen-code/pull/7258) | When the only background slot is taken, the main agent now yields and resumes after completion, preventing dead‑locks. |
| **#6486** | [feat(cli): Add model toggle hotkey (Ctrl+F)](https://github.com/QwenLM/qwen-code/pull/6486) | Introduces a persistent hotkey to switch between primary and alternate models; persists selection across turns. |
| **#7459** | [feat(core): restore background agent roster](https://github.com/QwenLM/qwen-code/pull/7459) | Restores previously completed background agents in the roster when a parent session re‑opens, preserving task IDs and state. |

---

### 5. Feature Request Trends  

- **Workspace & Context Management** – Multiple requests for a **“Start‑in” selector** (Issue #6701) and persistent **workspace‑trust hot‑reloading** (PR #7268) indicate a strong desire for clearer execution contexts and smoother multi‑workspace workflows.  
- **Background Agent Persistence** – Issues #5540, #7426, and #7459 collectively push for **resuming or preserving completed background agents**, reflecting a shift toward long‑running automation pipelines.  
- **Tool Parameter Robustness** – Frequent bugs around empty `working_dir` and parameter stripping (Issues #7316, #7343) surface a trend: **making tool schemas more tolerant of optional / empty fields**.  
- **Token Accounting & UI Clarity** – Requests to expose token‑plan selectors (Issue #7252) and improve token‑usage UI (Issue #7384) show that **accurate usage reporting and selectable pricing plans** are top priorities.  
- **CLI & UX Polish** – Hot‑key model toggling (PR #6486), queued‑message styling fixes (PR #7381), and softer update‑check errors (PR #7431) underline a community focus on **fast, intuitive terminal interactions**.

---

### 6. Developer Pain Points  

| Pain Point | Frequency / Context | Impact |
|------------|---------------------|--------|
| **Silent model switches & context overflow** (Issue #7156) | Recurring after sub‑agent execution | Breaks session state, leads to 400 errors. |
| **Parameter loss in tool calls** (Issue #7377) | Repeated across `run_shell_command`, `write_file`, `agent` | Causes retries, degrades reliability. |
| **Empty `working_dir` handling with `isolation: worktree`** (Issue #7316, PR #7343) | Affects any OpenAI‑compatible model emitting empty placeholders | Prevents isolated sub‑agents from launching. |
| **Startup & update‑check timeout brittleness** (Issues #7049, #7404) | Network‑constrained regions | Users see hard failures on legitimate slow networks. |
| **Windows installer SHA verification failure** (Issue #7118) | Standalone installer stuck on checksum step | Blocks adoption on Windows environments. |
| **Token usage record loss after session purge** (Issue #7384) | Direct data integrity issue | Misreports cost, confounds billing & quota planning. |
| **Daemon SSE cursor staleness after restart** (Issue #7457) | Affects long‑running `qwen serve` sessions | Can cause missed events and inconsistent state. |
| **VS Code extension ACP process exit** (Issue #7056) | Core integration blocker | Prevents many developers from using the Code Companion. |

---

**Takeaway:** The latest stable release (v0.20.1) consolidates autofix improvements and ships a polished, signed CUA driver, while the community is actively addressing stability issues around sub‑agent lifecycle, tool‑parameter robustness, and workspace context selection. The most vocal developer concerns revolve around persistent background agents, reliable token accounting, and smoother CLI/UX interactions. Continued focus on these areas should yield the greatest usability gains for the Qwen Code ecosystem.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

**DeepSeek TUI Community Digest – 2026‑07‑22**  

---  

### 1. Today's Highlights  
- The community is actively tightening the **v0.9.1** milestone, with multiple release‑blocker bugs (auth OAuth, scroll‑truncation, Enter‑send lag) being closed and a suite of contract‑driven improvements merged.  
- A flurry of PRs focus on making **Work/To‑do queues** and **Agent rows** deterministic, while developers are pushing for a **single, stable skill manager** and a **professional public‑gate** for release documentation.  

---  

### 2. Releases  
*None – no new version tags were published in the last 24 hours.*  

---  

### 3. Hot Issues  
| # | Title (link) | Why it matters | Community reaction |
|---|--------------|----------------|--------------------|
| **#4032** (CLOSED) – *Codewhale not following the constitution* | [Issue #4032](https://github.com/Hmbown/CodeWhale/issues/4032) | Shows a reliability/behaviour defect where the agent writes scripts it shouldn’t, a release‑blocker for the v0.9.1 workflow. | 41 comments, flagged as “bug, release‑blocker”; developers demand stricter script‑authoring enforcement. |
| **#4227** (OPEN) – *feat: 🐋 help JayBeest map the CodeWhale tsunami* | [Issue #4227](https://github.com/Hmbown/CodeWhale/issues/4227) | Proposes a workflow‑setup skill to keep dev environments in sync with `main`; critical for high‑velocity (10+ PRs/day) projects. | 11 comments, support for automation; calls for integration with existing tooling. |
| **#4410** (CLOSED) – *Restore xAI device‑code OAuth login* | [Issue #4410](https://github.com/Hmbown/CodeWhale/issues/4410) | OAuth flow broke; fixing restores external‑model authentication, a prerequisite for multi‑provider workflows. | 7 comments, relief once resolved; emphasis on backward‑compatible auth. |
| **#4603** (CLOSED) – *Long output content cannot scroll — content truncated* | [Issue #4603](https://github.com/Hmbown/CodeWhale/issues/4603) | UI truncates long diffs/logs, preventing review; affects P2 users daily. | 3 comments, high priority for TUI usability. |
| **#4605** (CLOSED) – *Enter key send lag — UI freezes on message send* | [Issue #4605](https://github.com/Hmbown/CodeWhale/issues/4605) | 100‑200 ms UI freeze on send; a performance pain point across 0.6‑0.9.x. | 3 comments, P1 severity; fix merged in PR #4654. |
| **#4647** (CLOSED) – *v0.9.1: Coordinate decisions, context, write scopes* | [Issue #4647](https://github.com/Hmbown/CodeWhale/issues/4647) | Introduces bounded decision records and conflict‑free scope handling; core to deterministic agent coordination. | 4 comments, praised for clarity. |
| **#4625** (CLOSED) – *Enhancement: Collapse command execution into one canonical Bash tool* | [Issue #4625](https://github.com/Hmbown/CodeWhale/issues/4625) | Simplifies tool landscape; reduces confusion over multiple `exec_shell*` utilities. | 1 comment, positive uptake. |
| **#4674** (OPEN) – *BashTool ignores context.workspace for default cwd* | [Issue #4674](https://github.com/Hmbown/CodeWhale/issues/4674) | Sub‑agents lose correct working directory, leading to hidden file‑system errors. | 1 comment, flagged as a critical bug for worktree workflows. |
| **#4659** (OPEN) – *edit_file 审批预览仅展示3行，多行改动无法完整审查* | [Issue #4659](https://github.com/Hmbown/CodeWhale/issues/4659) | Approval preview truncates diffs after three lines, rendering review ineffective. | 1 comment, community demands full diff rendering. |
| **#4660** (OPEN) – *添加自定义的提供商和大模型的配置方式* | [Issue #4660](https://github.com/Hmbown/CodeWhale/issues/4660) | Requests extended provider/model configuration schema; many users want parity with Kimi’s approach. | 1 comment, seen as a forward‑looking feature need. |

---  

### 4. Key PR Progress  
| PR # | Title (link) | Summary of Change |
|------|--------------|-------------------|
| **#4673** | fix(shell): default no-cwd shell commands to `context.workspace` | Ensures BashTool runs in the correct worktree when `worktree:true` is used; prevents commands executing in the parent checkout. |
| **#4668** | chore(deps-dev): bump `js-yaml` from 4.2.0 → 4.3.0 | Updates a dev dependency in `/web`; minor security/bug‑fix bump. |
| **#4487** | chore(release): reconcile late v0.9.1 intake | Consolidates changelog and credit data for the upcoming v0.9.1 freeze. |
| **#4652** | feat(cli): add public `--no-project-config` flag | Enables reproducible headless execution by bypassing project‑specific config loading. |
| **#4653** | test(tui): lock long‑output transcript scrolling with PTY scenario | Adds an end‑to‑end test that guarantees full scrollback for long outputs (covers #4603). |
| **#4654** | fix(tui): acknowledge Enter before slow send prep | Eliminates UI freeze on Enter; separates UI acknowledgement from send‑preparation latency. |
| **#4658** | feat(runtime-api): add provider registry + switch endpoints | Introduces three new API endpoints for dynamic provider/model selection, removing legacy config hacks. |
| **#4657** | fix(streaming): report progress on idle timeouts | Extends telemetry to distinguish zero‑byte stalls from partial‑output stalls. |
| **#4656** | fix(route): honor explicit limits for unknown local models | Refines `effective_max_output_tokens_for_route` to use explicit limits instead of a blanket 4K fallback. |
| **#4566** | [v0.9.2] update tui Cargo.toml for HarmonyOS build | Adjusts crate configuration to compile TUI on HarmonyOS, enabling cross‑platform builds. |

---  

### 5. Feature Request Trends  
- **Unified Skill Management** – multiple issues request a single `/skills` surface to install, update, trust, and remove skills without parallel command families.  
- **Deterministic Agent Workflow** – strong demand for bounded decision records, clear role definitions (Planner/Worker/Reviewer/Verifier), and persistent mode/permission states.  
- **Robust Provider/Model Configuration** – users want an extensible provider catalog (e.g., TelecomJS) and a stable way to configure custom large‑model endpoints similar to Kimi’s schema.  
- **Complete Diff/Preview Rendering** – requests for full‑length diff display in approval panels and scrollable output areas.  
- **Public Completion Gate** – a need for a professional “release gate” that validates README, website, and documentation before tagging a version.  

---  

### 6. Developer Pain Points  
- **Working‑Directory Mis‑alignment** – BashTool defaults to the parent workspace when `cwd` is omitted, breaking isolated sub‑agent worktrees.  
- **UI Freezes on Interaction** – Enter‑to‑send and long‑output rendering cause noticeable latency spikes, hurting responsiveness.  
- **Truncated Diff/Preview Panels** – approval previews cut off after three lines, preventing thorough code‑review of multi‑line changes.  
- **Auth‑Endpoint Drift** – hard‑coded OAuth paths diverge from upstream providers, leading to immediate failures.  
- **Fragmented Tool Landscape** – numerous `exec_shell*` variants create confusion; developers push for a single canonical Bash tool.  

---  

*All links point to the original GitHub issue or pull‑request pages.*

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

**ComfyUI Community Digest – 2026‑07‑22**  

---  

### 1. Today's Highlights  
- A flurry of bug‑fixes and performance‑tuning PRs landed in the last 24 h, including an optimized RMS‑RoPE implementation for JoyAI image models and native Uni3C control‑net support for Wan models.  
- Several long‑standing performance regressions (LTX‑2.3 slowdown, int8‑LoRA loading, AMD ROCm tensor layout) were re‑opened, prompting community discussion on caching and architecture‑specific work‑arounds.  

---  

### 2. Releases  
*None – no new versioned release in the past 24 h.*  

---  

### 3. Hot Issues  *(10 most noteworthy)*  

| # | Title | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| **[#14618](https://github.com/Comfy-Org/ComfyUI/issues/14618)** | *Potential Bug – ComfyUI keeps loading models on every prompt change* | Causes unnecessary GPU memory churn; affects all custom‑node workflows. | 78 comments, 10 👍 – users request a “prompt‑only” mode or caching flag. |
| **[#14345](https://github.com/Comfy-Org/ComfyUI/issues/14345)** | *LTX‑2.3 generation speed dropped significantly after upgrading* | Previously 8 min → now >30 min for a 10‑s video; stalls animation pipelines. | 32 comments, 2 👍 – calls for profiling and a re‑introduction of older optimisations. |
| **[#14850](https://github.com/Comfy-Org/ComfyUI/issues/14850)** | *Unexpected acceleration on Wan2.2 I2V when using both `--lowvram` and `--use-sage-attention`* | Shows contradictory behaviour; may indicate hidden code paths. | 11 comments, 0 👍 – developers probing why dual flags speed up rather than slow down. |
| **[#12700](https://github.com/Comfy-Org/ComfyUI/issues/12700)** | *TypeError: Failed to fetch* | Frequently appears when loading images from external URLs; blocks workflows that pull from remote repos. | 10 comments, 0 👍 – users share work‑arounds (proxy, direct download). |
| **[#14967](https://github.com/Comfy-Org/ComfyUI/issues/14967)** | *Nodes Manager Extensions does not work after 0.28.0 update* | Breaks UI for managing custom nodes; impacts many mod‑workflows. | 5 comments, 0 👍 – requests for regression testing. |
| **[#14985](https://github.com/Comfy-Org/ComfyUI/issues/14985)** | *int8 model cause PC crash* | Crash on RTX 30‑series when loading int8 checkpoints; raises stability concerns for quantised models. | 3 comments, 0 👍 – community asking for safer loading path. |
| **[#14919](https://github.com/Comfy-Org/ComfyUI/issues/14919)** | *int8 lora always load from disk* | Loading latency ≈ 10× slower than safetensors; blocks fast iteration with LoRA‑heavy pipelines. | 2 comments, 1 👍 – suggestion to cache after first load. |
| **[#15004](https://github.com/Comfy-Org/ComfyUI/issues/15004)** | *[AMD][ROCm][gfx1103] Big things coming from my tiny package* | AMD ROCm users hit performance walls with certain ops; calls for proper architecture mapping. | 1 comment, 0 👍 – highlights missing `gfx1035` entry in `AMD_RDNA2_AND_OLDER_ARCH`. |
| **[#15013](https://github.com/Comfy-Org/ComfyUI/issues/15013)** | *Regression: Qwen Image Edit FP8 + LoRA VRAM overflow after comfy‑kitchen update* | Out‑of‑memory spikes when mixing FP8 encoders with LoRA; breaks existing workflows. | 1 comment, 0 👍 – asks for fallback to FP16 or explicit cache. |
| **[#15016](https://github.com/Comfy-Org/ComfyUI/issues/15016)** | *Continuous/Repeated Reconnecting & Reconnected toast messages on v0.28.2* | UI noise; may indicate underlying websocket or RPC instability. | 0 comments, 0 👍 – pure bug report. |

---  

### 4. Key PR Progress  *(10 most important)*  

| PR | Title | Effect / Feature | Linked Issue(s) |
|----|-------|-------------------|-----------------|
| **[#15018](https://github.com/Comfy-Org/ComfyUI/pr/15018)** | *Use optimized rms_rope function in joyai image model* | Improves attention‑rope throughput for JoyAI; reduces latency by ~15 %. | – |
| **[#15017](https://github.com/Comfy-Org/ComfyUI/pr/15017)** | *ci: bump cursor-review to github‑workflows@964d5aa* | CI housekeeping; no functional change. | – |
| **[#15014](https://github.com/Comfy-Org/ComfyUI/pr/15014)** | *fix(Gemini-Omni): pass videos as inline data* | Fixes “HTTP video input is not supported” error; enables video‑to‑video generation. | #14453 |
| **[#15015](https://github.com/Comfy-Org/ComfyUI/pr/15015)** | *Serve a browser‑playable H.264 proxy for undecodable video previews* | Allows non‑H.264 video files to be previewed in‑browser via transcoding proxy. | #14453 |
| **[#15011](https://github.com/Comfy-Org/ComfyUI/pr/15011)** | *Fix AttributeError in get_key_weight when op lacks weight attribute* | Prevents crashes when loading certain checkpoint formats. | #13637 |
| **[#14946](https://github.com/Comfy-Org/ComfyUI/pr/14946)** | *Add native Uni3C Controlnet support for Wan models (CORE‑365)* | Introduces **WanUni3CControlnetApply** node; enables precise camera motion control for Wan‑family models. | #10234 |
| **[#13285](https://github.com/Comfy-Org/ComfyUI/pr/13285)** | *Twinflow‑Z‑Image Turbo support* | Expands supported model family; adds inference node for Twinflow‑Z‑Image. | – |
| **[#15007](https://github.com/Comfy-Org/ComfyUI/pr/15007)** | *FreSca: 5D+ (ex. Anima) fix, model‑agnostic iteration* | Guarantees correct scaling over last two dimensions; fixes iteration count bugs. | #15007 |
| **[#14807](https://github.com/Comfy-Org/ComfyUI/pr/14807)** | *Dataset/Security: Add dataset folder to avoid arbitrary folder access* | Enforces a dedicated `dataset/` directory; mitigates path‑traversal security risks. | – |
| **[#15009](https://github.com/Comfy-Org/ComfyUI/pr/15009)** | *Fix gfx1035 not being treated like RDNA2* | Adds `gfx1035` to `AMD_RDNA2_AND_OLDER_ARCH`, forcing FP16 path for better performance. | #15006 |

---  

### 5. Feature Request Trends  

- **Camera‑aware controls** – Multiple requests for native **Uni3C** (camera‑motion) integration across Wan, Animate, and future video models.  
- **Better AMD/ROCm support** – Need for explicit arch‑mapping (`gfx1035`, `gfx1103`) and fp16 fallback to avoid forced BF16 slowdown.  
- **Video‑pipeline extensions** – Native video dataset loading, frame‑wise processing, and H.264 proxy preview to overcome browser decoding limits.  
- **Performance‑focused caching** – Community repeatedly asks for caching of int8 LoRA weights, model metadata, and intermediate tensors to cut load times.  
- **Simplified version discovery** – Requests for a built‑in command or UI element that reports compatible PyTorch / Python versions before pulling a ComfyUI build.  

---  

### 6. Developer Pain Points  

- **Recurring performance regressions** – LTX‑2.3 slowdown, int8‑LoRA latency, and BF16 vs FP16 on AMD GPUs generate repeated “why is it slower?” threads.  
- **Unstable custom‑node handling** – Loading models on every prompt change, broken Node‑Manager extensions, and symlink rejection errors frustrate developers who rely on rapid prototyping.  
- **Inconsistent error messaging** – “Failed to fetch” and vague “Image not loaded” messages provide little context, leading to repeated troubleshooting.  
- **Missing architecture hooks** – AMD‑specific entries (`gfx1035`) absent from model‑management logic force users to manually pass flags, increasing the chance of mis‑configuration.  
- **UI noise from reconnect storms** – Repeated toast notifications on reconnection suggest an underlying RPC instability that developers would like to silence or refactor.  

---  

*All issue and PR references include direct GitHub URLs for quick navigation.*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Community Digest – 2026‑07‑22**

---

### 1. Today’s Highlights
- The latest GitHub snapshot shows **19 open issues** and **19 updated PRs** – a busy day of bug‑fixes, GPU‑related work, and API enhancements.  
- No new stable release landed in the last 24 h, but several high‑visibility PRs landed that target model loading, embed‑input truncation, and streaming API compatibility.  
- Community attention is focused on **GPU detection failures**, **process‑stopping mechanics**, and **tool‑call output handling** – all of which have active discussions and a handful of open bugs.

---

### 2. Releases
- **No new version** of Ollama was published in the last 24 hours. Existing stable builds remain at 0.30.x/0.31.x.

---

### 3. Hot Issues  *(10 standout items)*  

| # | Title / Link | Why It Matters | Community Reaction |
|---|--------------|----------------|--------------------|
| 690 | **[CLOSED] Stop Ollama** – *How can I stop Ollama?* ([link](https://github.com/ollama/ollama/issues/690)) | Users need a reliable way to fully halt the background service; currently a Ctrl‑C leaves the process respawned. | High traffic (64 comments, 45 👍). Many ask for a CLI flag or systemd‑style stop command. |
| 16957 | **[OPEN] [bug] nvidia 1080Ti take 0xc0000005 error…** ([link](https://github.com/ollama/ollama/issues/16957)) | GPU off‑load crashes on GTX 1080 Ti under Windows 11; prevents hardware acceleration. | 12 comments, no 👍 yet – developers are requesting driver‑specific workarounds. |
| 17080 | **[OPEN] [bug] ollama 0.31.1 crash** ([link](https://github.com/ollama/ollama/issues/17080)) | Random crashes on Windows; users resort to older 0.24.x releases. | 9 comments; frustration over stability regressions. |
| 13593 | **[OPEN] [bug] Ollama does not detect GPU (RTX A1000 Laptop, Windows 11)** ([link](https://github.com/ollama/ollama/issues/13593)) | Persistent “total vram=0 B” reports; blocks local LLM usage on Windows laptops. | 6 comments; many up‑votes echo the same hardware‑detection problem. |
| 8793 | **[OPEN] [feature request] Add support for Modelfile via the `create` API endpoint** ([link](https://github.com/ollama/ollama/issues/8793)) | Aligns CLI (`--file`) with HTTP API; developers want a uniform way to create models programmatically. | 6 comments; seen as a needed step toward richer automation. |
| 7327 | **[CLOSED] Bug Report: `ollama create` `Error: open config.json: file does not exist`** ([link](https://github.com/ollama/ollama/issues/7327)) | Import of GGUF models fails when the working directory is mis‑resolved. | 5 comments; fixed but highlights path‑resolution fragility. |
| 17274 | **[OPEN] Tool‑call output is silently discarded when the parse fails** ([link](https://github.com/ollama/ollama/issues/17274)) | When a tool‑call cannot be parsed, the whole response is dropped without feedback. | 5 comments; calls for clearer error reporting and retention of buffered output. |
| 17069 | **[OPEN] GPU discovery intermittently times out (30 s watchdog) with LXC + Docker** ([link](https://github.com/ollama/ollama/issues/17069)) | Causes permanent fallback to CPU in containerised deployments. | 5 comments; users request more robust detection and watchdog tuning. |
| 17272 | **[OPEN] [bug] Responses are frequently cut short / interrupted without completion** ([link](https://github.com/ollama/ollama/issues/17272)) | Truncated outputs break downstream tool‑use; no “completed” flag is raised. | 5 comments; a pain point for API consumers. |
| 17292 | **[OPEN] [bug] qwen3:30b (qwen3moe) ignores `--think=false` while other models honour it** ([link](https://github.com/ollama/ollama/issues/17292)) | Model‑specific flag handling inconsistency; breaks expected reasoning behaviour. | 1 comment; developers flag it as a regression from earlier releases. |

---

### 4. Key PR Progress  *(10 most impactful PRs)*  

| # | Title / Link | Summary |
|---|--------------|---------|
| 17291 | **[OPEN] model: add Laguna v8 chat support and fix Metal inference** ([link](https://github.com/ollama/ollama/pull/17291)) | Introduces Laguna‑v8 renderer/parser and fixes Metal fallback for Mac‑silicon models. |
| 16687 | **[OPEN] server: truncate embedding inputs to the physical batch size** ([link](https://github.com/ollama/ollama/pull/16687)) | Prevents crashes when embedding inputs exceed `num_batch`; aligns truncation with batch limits. |
| 17293 | **[OPEN] anthropic: serialize empty message content as an empty array instead of null** ([link](https://github.com/ollama/ollama/pull/17293)) | Makes Ollama’s Anthropic‑compatible API match the real Anthropic spec for empty responses. |
| 17253 | **[OPEN] llm: account for multiple model memory buffers** ([link](https://github.com/ollama/ollama/pull/17253)) | Fixes VRAM under‑reporting caused by buffer collisions; improves `ollama ps` accuracy. |
| 17238 | **[OPEN] model: add Laguna MLX support with custom kernels** ([link](https://github.com/ollama/ollama/pull/17238)) | Adds high‑performance custom kernels for Laguna‑MLX models, narrowing the gap to llama.cpp. |
| 16560 | **[OPEN] test: revamp integration test entrypoints** ([link](https://github.com/ollama/ollama/pull/16560)) | Organises tests into fast, release, and library groups; prunes stale models and adds newer ones. |
| 17287 | **[OPEN] docs/api: add streaming OpenAI compatibility examples** ([link](https://github.com/ollama/ollama/pull/17287)) | Provides concrete streaming examples for Python, JS, and curl; aligns docs with real‑world usage. |
| 17277 | **[OPEN] fix: report actual VRAM available for AMD integrated GPUs (APUs)** ([link](https://github.com/ollama/ollama/pull/17277)) | Corrects reported `available` memory on AMD APUs, enabling proper resource planning. |
| 17284 | **[OPEN] tools: return buffered output as content when no tool call is parsed** ([link](https://github.com/ollama/ollama/pull/17284)) | Prevents silent loss of output when tool‑call parsing fails; preserves user‑visible content. |
| 17278 | **[OPEN] server: warm prefill cache across model unload/reload** ([link](https://github.com/ollama/ollama/pull/17278)) | Adds opt‑in `OLLAMA_PREFILL_CACHE` to keep KV caches alive during model reloads, improving latency. |

---

### 5. Feature Request Trends
- **Uniform Model Creation API** – Several users (e.g., #8793) want the HTTP `create` endpoint to accept a Modelfile directly, mirroring the CLI `--file` flag.  
- **Concurrent/Batch Processing** – Requests for native parallel execution (e.g., `OLLAMA_NUM_PARALLEL`‑style controls for the MLX engine) are gaining traction, especially on Apple‑silicon.  
- **Extended Anthropic Compatibility** – Parameters such as `allowed_domains` and `blocked_domains` are missing from the streaming API implementation (#17283).  
- **Better Stop/Control Mechanisms** – The “stop Ollama” use‑case (#690) repeatedly surfaces, indicating a need for a clean shutdown command or service‑level control.  
- **GPU & APU Visibility** – Improvements to GPU detection and accurate VRAM reporting (e.g., AMD APU memory) are recurring pain points.

---

### 6. Developer Pain Points
- **Unreliable GPU Detection** – Multiple issues (#13593, #16957, #17069) report that Ollama fails to recognise or properly off‑load to NVIDIA/AMD GPUs, leading to CPU‑only fallback.  
- **Process Termination** – Users cannot reliably stop the background daemon; Ctrl‑C often leaves a resurrected process (#690).  
- **Crashes & Instability** – Reports of sudden crashes on Windows (#17080) and on specific GPU hardware (GTX 1080 Ti error) force users to pin older, less‑feature‑rich releases.  
- **Output Truncation & Silent Dropping** – Responses are frequently cut off or entirely discarded when tool‑call parsing fails, leaving downstream tools without expected data (#17272, #17274).  
- **Version Lock‑In** – Some deployments must stay on 0.24.x because later versions break model loading or GPU support, creating maintenance overhead.  
- **Inconsistent Flag Handling** – Model‑specific behaviours (e.g., `--think=false` ignored by qwen3:30b) confuse developers building multi‑model pipelines.  

---

*All links point to the official Ollama GitHub repository. For the latest updates, keep an eye on the issue and PR trackers – the community is actively addressing the above pain points.*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

**Llama.cpp Community Digest – 2026‑07‑22**  

---  

### 1. Today's Highlights  
* The OpenVINO backend received a much‑needed macro fix (`GGML_BACKEND_DL_IMPL()`) to align it with other back‑ends, closing issue **#25586**.  
* A vectorised CUDA `GET_ROWS` implementation landed, dramatically reducing per‑element overhead and improving throughput for same‑type copies.  
* macOS Apple‑Silicon binaries (including a KleidiAI‑enabled build) were published for the latest nightly releases.  

---  

### 2. Releases (last 24 h)  
No new **versioned** release was tagged; however, three pre‑built nightly binaries were posted:  

| Build | Platform | Link |
|------|----------|------|
| **b10077** | macOS Apple Silicon (arm64) | <https://github.com/ggml-org/llama.cpp/releases/download/b10077/llama-b10077-bin-macos-arm64.tar.gz> |
| **b10076** | macOS Apple Silicon (arm64) – vectorised `GET_ROWS` | <https://github.com/ggml-org/llama.cpp/releases/download/b10076/llama-b10076-bin-macos-arm64.tar.gz> |
| **b10075** | macOS Apple Silicon (arm64) – Hexagon CLAMP op | <https://github.com/ggml-org/llama.cpp/releases/download/b10075/llama-b10075-bin-macos-arm64.tar.gz> |

These builds incorporate the fixes mentioned above.  

---  

### 3. Hot Issues (top‑10 by comment count)  

| # | Title & Link | Why it matters | Community sentiment |
|---|--------------|----------------|----------------------|
| **#22746** | **[OPEN] Eval bug: Qwen 3.6 27B forces full prompt re‑processing** – <https://github.com/ggml-org/llama.cpp/issues/22746> | Triggers unnecessary recomputation of KV cache, hurting latency on large models. | 104 comments – high pain; users request a proper cache‑reuse flag. |
| **#19466** | **[OPEN] Saving KV cache for vision‑enabled models fails** – <https://github.com/ggml-org/llama.cpp/issues/19466> | Prevents persistent storage of vision context, a key workflow for multimodal apps. | 35 comments – strong demand for API parity. |
| **#21956** | **(Planning) Support audio output in mtmd** – <https://github.com/ggml-org/llama.cpp/issues/21956> | Audio generation is missing; a roadmap item that could unlock new use‑cases. | 23 comments – enthusiastic but awaiting design consensus. |
| **#23774** | **[OPEN] Performance degradation with MTP on Vulkan** – <https://github.com/ggml-org/llama.cpp/issues/23774> | Large slowdown on Vulkan‑backended inference; impacts cross‑platform users. | 20 comments – calls for kernel refactor. |
| **#25349** | **[OPEN] Persist MCP‑servers activation status in WebUI** – <https://github.com/ggml-org/llama.cpp/issues/25349> | Users want server‑side selections to survive restarts; currently manual re‑configuration. | 15 comments – practical request, low‑priority but recurring. |
| **#24712** | **[OPEN] Warning: scheduler reserves layer to CPU while tensor on CUDA** – <https://github.com/ggml-org/llama.cpp/issues/24712> | Mis‑aligned device placement leads to confusing error messages. | 8 comments – developers ask for clearer diagnostics. |
| **#23737** | **[OPEN] GGML_ASSERT failure on Vulkan after b9318** – <https://github.com/ggml-org/llama.cpp/issues/23737> | Crash in Vulkan backend for certain quantised models; blocks adoption on newer GPUs. | 5 comments – urgent bug‑fix expectation. |
| **#24051** | **[OPEN] `reasoningEffort` not pre‑settable in JSON UI** – <https://github.com/ggml-org/llama.cpp/issues/24051> | Limits configurable defaults for reasoning‑intensive pipelines. | 9 comments – modest but clear UX gap. |
| **#25657** | **[CLOSED] Hy‑v3 quantisation mismatch** – <https://github.com/ggml-org/llama.cpp/issues/25657> | Shows the importance of backward‑compatible GGUF conversion; already resolved but highlighted as a pain point. | 7 comments – serves as a reminder of conversion rigor. |
| **#25807** | **[OPEN] ROCm‑7.14 shared‑library error** – <https://github.com/ggml-org/llama.cpp/issues/25807> | Prevents use of recent ROCm on Linux; many users stuck on older versions. | 6 comments – requests clearer dependency guidance. |

---  

### 4. Key PR Progress (top‑10 by relevance)  

| PR | Title & Link | Core contribution |
|----|--------------|-------------------|
| **#25975** | *common: fix leading pipe syntax error in `gbnf_excluding_grammar`* – <https://github.com/ggml-org/llama.cpp/pull/25975> | Resolves a GBNF parsing crash when excluding grammar patterns. |
| **#25165** | *[model, testing, ggml, CUDA] Add support for Laguna XS.2 & M.1* – <https://github.com/ggml-org/llama.cpp/pull/25165> | First‑class GGUF support for Poolside’s newest 27 B‑scale models. |
| **#25974** | *[ggml, Hexagon] hexagon: activation ops update* – <https://github.com/ggml-org/llama.cpp/pull/25974> | Introduces fused GEGLU kernel and broader ACT‑op support for Hexagon. |
| **#25781** | *[mtmd] use align_corners for Qwen3‑VL vision position‑embedding* – <https://github.com/ggml-org/llama.cpp/pr/25781> | Switches interpolation to `align_corners=True` for better visual fidelity. |
| **#25942** | *[documentation, ggml, SYCL] Add DMMV Q4_K and Q6_K ESIMD kernels* – <https://github.com/ggml-org/llama.cpp/pr/25942> | Documents performance‑boosting ESIMD kernels for Q‑quantised models. |
| **#25924** | *[testing, ggml, Apple Metal] ggml‑metal: FWHT kernel for metal backend* – <https://github.com/ggml-org/llama.cpp/pr/25924> | Implements Fast Walsh‑Hadamard Transform on Metal, widening low‑latency paths. |
| **#25968** | *[ggml, Hexagon] check tensor type when reusing descriptors* – <https://github.com/ggml-org/llama.cpp/pr/25968> | Prevents descriptor reuse bugs with Qwen3‑VL tensors of differing shapes. |
| **#25962** | *[ggml, CUDA] cuda: GET_ROWS quants* – <https://github.com/ggml-org/llama.cpp/pr/25962> | Extends CUDA GET_ROWS to support i‑quants, mxfp4, and other quant types. |
| **#25238** | *[testing] chat: trim messages sent to StepFun parser* – <https://github.com/ggml-org/llama.cpp/pr/25238> | Re‑introduces auto‑trimming for long‑context StepFun interactions. |
| **#25741** | *[ggml, SYCL] sycl: single‑device still requires sync* – <https://github.com/ggml-org/llama.cpp/pr/25741> | Adds hidden synchronisation to avoid garbage output on second prompts. |

---  

### 5. Feature Request Trends  

| Requested Area | What users want | Why it matters |
|----------------|----------------|----------------|
| **Backend Extensibility** | Broader DP4A/DP2A emulation on CUDA, OpenVINO `GGML_BACKEND_DL` flag, SYCL‑specific tensor‑type handling | Improves performance parity across heterogeneous hardware. |
| **Persistency & State** | Save/restore KV‑cache for vision models, persist MCP‑server selections, retain reasoning‑effort defaults | Eliminates repeated work and simplifies UI workflows. |
| **New Quantisation Levels** | Support for **Q2_0**, **dp4a** emulation, and expanded sparse‑MoE formats (e.g., Sparsetral) | Targets storage‑constrained environments while preserving accuracy. |
| **Multimodal Enhancements** | Audio output support in `mtmd`, richer vision‑cache APIs | Expands llama.cpp into speech and multimodal pipelines. |
| **UI/UX Improvements** | Visible reasoning button, JSON‑UI preset persistence, symbolic‑math sandbox (nerdamer) | Directly improves developer and end‑user experience. |
| **Error Diagnostics** | Clearer scheduler‑device mismatch messages, better logging for Vulkan/Kernel failures | Reduces troubleshooting time for users on emerging back‑ends. |

---  

### 6. Developer Pain Points  

* **Cache‑reuse bugs** – Several reports (e.g., #22746, #23737) highlight situations where the KV cache is incorrectly invalidated, leading to unnecessary recompute on large prompts.  
* **Cross‑backend inconsistency** – OpenVINO and ROCm integrations still require manual macro updates, causing build‑time friction.  
* **Missing quantization formats** – The community repeatedly asks for Q2_0, dp4a emulation, and sparse‑MoE support; the current codebase lacks these out‑of‑the‑box.  
* **UI discoverability** – The reasoning‑effort toggle and reasoning button are hidden or poorly labelled, frustrating users who rely on those features.  
* **ROCm/HIP integration** – New ROCm‑7.14 libraries break default builds; users must manually adjust `GGML_BACKEND_DL` flags, creating confusion.  
* **Vulkan performance regressions** – Recent kernel changes cause sporadic stalls on newer Intel/iGPU GPUs, forcing users to fall back to CUDA or Metal.  

---  

*All links point to the live GitHub issue or pull‑request pages for further inspection.*  

---  

*Prepared by a technical analyst focused on AI developer tooling.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*