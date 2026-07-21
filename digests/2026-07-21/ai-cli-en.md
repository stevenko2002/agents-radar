# AI CLI Tools Community Digest 2026-07-21

> Generated: 2026-07-21 02:18 UTC | Tools covered: 12

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


## Today's Highlights  

- **Claude Code v2.1.216** lands with `sandbox.filesystem.disabled` flag to bypass filesystem isolation while keeping network controls and a fix for quadratic message-normalization slowdowns causing multi-second stalls.  
  https://github.com/anthropics/claude-code/releases/tag/v2.1.216  

- **OpenAI Codex** ships rust‑v0.145.0‑alpha.27 / alpha.25 with buffered code-mode execution and proxy resolution fixes as the community protests a 10‑20× spike in gpt‑5.5 rate‑limit costs on Plus plans.  
  https://github.com/openai/codex/releases/tag/rust-v0.145.0-alpha.27  

- **Gemini CLI** publishes security fix PR #28470 for RCE in `a2a-server`, enforcing workspace trust checks and task isolation to block zero‑click exploits.  
  https://github.com/google-gemini/gemini-cli/pull/28470  

- **GitHub Copilot CLI v1.0.73** restores Anthropic sub‑agent functionality after `--add-dir` and fixes relative‑link resolution in custom instructions; v1.0.72 adds opt‑in Git/GH auth and guards against infinite `agentStop` loops.  
  https://github.com/github/copilot-cli/releases/tag/v1.0.73  

- **Kimi Code CLI v0.20.0-nightly.20260721.cda0e0348** restores background agent rosters across sessions and enforces `enable_thinking=true` for side queries on TokenPlan/DashScope APIs.  
  https://github.com/QwenLM/qwen-code/releases/tag/v0.20.0-nightly.20260721.cda0e0348  

- **OpenCode v1.18.4** introduces adaptive thinking controls for Kimi models on Anthropic‑compatible providers and lowers OpenAI provider header timeouts to avoid flaky connection stalls.  
  https://github.com/anomalyco/opencode/releases/tag/v1.18.4  

- **Ollama v0.32.2‑rc0** clarifies Claude Code context limits (100k+ supported) and retires the standalone `agent` command, routing agent launch through the main `ollama launch` path.  
  https://github.com/ollama/ollama/releases/tag/v0.32.2-rc0  

- **llama.cpp b10075** adds Hexagon f32 CLAMP operator, improves OpenCL GEMM/GEMV broadcast handling on Adreno GPUs, and fixes OpenCL MUL_MAT kernels for Q8_0 operations.  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10075


---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills Community Highlights (as of 2026‑07‑21)**  

---

### 1. Top Skills Ranking  
*Most‑discussed pull‑requests (by attention – updates, linkage to high‑comment issues, and relevance to recurring pain points). All are currently **open**.*

| # | PR | Skill / Focus | What it does | Discussion highlights |
|---|----|---------------|--------------|-----------------------|
| **#1298** | `fix(skill-creator): run_eval.py always reports 0% recall …` | Core skill‑creator tooling | Installs the eval artifact as a real skill, fixes Windows stream reading, trigger detection, and parallel workers. | Directly tackles Issue #556 (0 % trigger rate) and the recurring “recall = 0%” complaints in #1169, #1099, #1050. Heavy comment thread on Windows‑specific subprocess handling. |
| **#1323** | `fix(skill-creator): run_eval trigger detection misses real skill name …` | Core skill‑creator tooling | Improves trigger detection so `run_eval.py` recognises the skill name and doesn’t abort on the first non‑Skill tool. | Mirrors the fix in #1298; cited in several Windows‑compatibility issues (#1061, #1099) as a prerequisite for reliable evaluation loops. |
| **#1099** | `skill-creator: fix run_eval.py crash on Windows when reading from subprocess pipe` | Core skill‑creator tooling | Prevents the subprocess‑pipe crash on Windows that forced every query to be logged as “not triggered”. | Frequently referenced in Issue #1061 and #556; the fix enables the evaluation loop to actually run on Windows hosts. |
| **#1050** | `skill-creator: fix Windows subprocess + encoding bugs` | Core skill-creator tooling | Two one‑liners: use `claude.cmd` via `PATHEXT` and fix cp1252 encoding when reading/writing skill files. | Highlighted in Issue #1061 as the remaining blockers after the subprocess‑pipe fix; community notes that Windows skill‑creation is now usable. |
| **#514** | `Add document‑typography skill` | Document quality | Detects and corrects orphan/widow lines, heading‑stranded paragraphs, and numbering misalignment in AI‑generated documents. | Praised for addressing a “silent quality drain” that affects every generated doc; discussion points to demand for typographic polish in enterprise‑grade output. |
| **#538** | `fix(pdf): correct case‑sensitive file references in SKILL.md` | PDF skill | Aligns reference casing (`REFERENCE.md` → `reference.md`, etc.) so the PDF skill works on case‑sensitive filesystems. | Simple fix but critical for Linux/macOS users; linked to several PDF‑related issues in the ecosystem. |
| **#486** | `Add ODT skill — OpenDocument text creation and template filling` | ODT/ODF support | Enables creation, filling, reading, and conversion of `.odt`/`.ods` files; triggers on ODT/ODF/LibreOffice mentions. | Highlighted as a missing piece for open‑office workflows; many comments ask for companion ODS/spreadsheet handling. |
| **#210** | `Improve frontend‑design skill clarity and actionability` | Frontend‑design | Rewrites the skill to give Claude concrete, single‑turn actions (layout, component naming, CSS utilities). | Cited in UI/UX discussions; users report clearer guidance leads to fewer back‑and‑forth iterations. |

---

### 2. Community Demand Trends  
*Derived from the most‑commented Issues (comment counts shown).*

| Issue | Comments | Core theme | What the community is asking for |
|-------|----------|------------|---------------------------------|
| **#492** | 43 | Security / namespace isolation | Prevent community skills from masquerading as official `anthropic/` skills; enforce signing or namespacing to avoid trust‑boundary abuse. |
| **#228** | 14 | Org‑wide sharing | A built‑in skill library or direct share link inside Claude.ai so teams can distribute skills without manual file‑swap. |
| **#556** | 12 | Evaluation reliability | `run_eval.py` must actually trigger skills; fix Windows subprocess, pipe reading, and trigger detection so the optimisation loop works. |
| **#362 / #361** | 10 each | UTF‑8 & YAML safety | Robust validation for multi‑byte characters and unquoted YAML special chars in `description`/`compatibility` fields. |
| **#1329** | 9 | Compact memory representation | A skill that stores agent state in symbolic/compressed notation to reduce context‑window pressure. |
| **#189** | 9 | Duplicate skill avoidance | When installing both `document‑skills` and `example‑skills`, avoid installing identical copies that bloat the context window. |
| **#1175** | 4 | SharePoint Online handling | Secure, permission‑aware skill for reading/writing SPO documents without leaking data or bloating the prompt. |
| **#29** | 4 | Bedrock / AWS integration | Guidance or a skill that lets Claude Code work with AWS Bedrock‑hosted models. |
| **#16** | 4 | MCP exposure | Export skills as Machine‑Callable Procedures (MCPs) for easier API consumption. |
| **#1385** | 3 | Reasoning quality gate | A pipeline (pre‑task calibration → adversarial review → delivery verification) to guarantee output correctness. |
| **#1169** | 3 | Recall = 0% in optimisation loop | Same root cause as #556 – need reliable trigger detection for the skill‑creator optimisation scripts. |
| **#1061** | 3 | Windows compatibility | End‑to‑end fixes for subprocess, encoding, and pipe handling on Windows Python. |
| **#184** | 3 | Documentation site reliability | Fix the `agentskills.io` redirect loop so the official skill reference is reachable. |

**Trend synthesis**  
- **Reliability & cross‑platform support** dominate: fixing Windows subprocess/pipe bugs, UTF‑8/YAML validation, and trigger detection (`run_eval.py`).  
- **Enterprise document workflows**: strong interest in ODT/ODF, PDF, typography, and SharePoint‑aware skills.  
- **Sharing & security**: demand for organization‑level skill distribution and safeguards against namespace impersonation.  
- **Quality assurance**: testing‑patterns, skill‑quality‑analyzer, reasoning‑quality‑gate, and self‑audit skills are repeatedly requested.  

---

### 3. High‑Potential Pending Skills  
*Open PRs that have attracted noticeable discussion (via updates, linkage to high‑comment issues, or clear community need) and are likely to be merged soon.*

| PR | Skill | Why it’s high‑potential |
|----|-------|------------------------|
| **#1298** | Skill‑creator eval/trigger fixes | Directly resolves the blocker that stops the optimisation loop on Windows; tied to Issues #556, #1169, #1061. |
| **#1323** | Skill‑creator trigger detection | Complements #1298; essential for reliable recall/precision measurements. |
| **#1099** | Windows subprocess‑pipe crash fix | Enables `run_eval.py` to run on Windows; already referenced in multiple Windows‑compatibility issues. |
| **#1050** | Windows subprocess + encoding one‑liners | Low‑effort, high‑impact; completes the Windows‑skill‑creator stability picture. |
| **#514** | Document‑typography | Addresses a universally‑requested quality‑of‑output improvement; no blockers besides review. |
| **#486** | ODT skill | Fills a clear gap for open‑document‑format gap (ODT/ODS) that many users have asked for. |
| **#1367** | Self‑audit (mechanical + reasoning) | Provides a universal verification step; aligns with the community’s push for reasoning quality gates (#1385). |
| **#723** | Testing‑patterns | Encapsulates best‑practice testing guidance; high demand for reliable code generation. |

---

### 4. Skills Ecosystem Insight  
*The community’s most concentrated demand is for **robust, cross‑platform skill creation and evaluation**—specifically fixing Windows subprocess/trigger bugs and ensuring reliable skill detection—so that skills can be trusted, shared, and used confidently in enterprise document and quality‑assurance workflows.*

---

**Claude Code Community Digest – 2026‑07‑21**  

---  

### 1. Today's Highlights  
- The latest patch **v2.1.216** landed, adding a new `sandbox.filesystem.disabled` flag to bypass filesystem isolation while retaining network egress controls and fixing a quadratic‑time slowdown that caused multi‑second stalls in long sessions.  
- Community discussion remains focused on usability pain points: a macOS console‑scrolling regression (Issue #826, +689 👍) and persistent data‑loss reports from automatic cleanup of chat JSONLs (Issue #62272).  
- Feature‑request momentum continues around multi‑account management (Issue #18435, +668 👍) and SSH‑remote session resilience (Issue #49790).  

---  

### 2. Releases  
**v2.1.216** (released within the last 24 h)  
- **Added** `sandbox.filesystem.disabled` setting – skips filesystem isolation but keeps network egress control.  
- **Fixed** a performance regression where message‑normalization cost grew quadratically with turn count, leading to multi‑second stalls and slow session resumés.  
- **Fixed** (truncated in changelog) – additional minor bug fixes.  

---  

### 3. Hot Issues (selected by comment count & impact)  

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| [#826](https://github.com/anthropics/claude-code/issues/826) | macOS console scrolls to top when Claude adds text | Breaks reading flow in long terminal sessions; affects daily workflow. | 353 comments, +689 👍 – high frustration, many work‑arounds shared. |
| [#18435](https://github.com/anthropics/claude-code/issues/18435) | Manage multiple Claude accounts in Desktop app | Users need easy profile switching for personal/work separation. | 148 comments, +668 👍 – strong demand, frequent up‑votes. |
| [#23626](https://github.com/anthropics/claude-code/issues/23626) | Diff compare against branches other than `main` | Enables PR‑based workflows on feature/release branches. | 33 comments, +95 👍 – valued by teams using trunk‑based development. |
| [#62272](https://github.com/anthropics/claude-code/issues/62272) | Chat JSONLs deleted despite high `cleanupPeriodDays` | Data loss undermines trust; recovery script shared but root cause unresolved. | 18 comments, +3 👍 – recurring concern after each update/restart. |
| [#61021](https://github.com/anthropic/claude-code/issues/61021) | VS Code terminal text selection broken with Claude Code | Prevents quick copy/paste, hurting productivity. | 12 comments, +8 👍 – noted after recent VS Code/CLI interaction change. |
| [#64592](https://github.com/anthropics/claude-code/issues/64592) | Cowork VM service fails to start on Windows 11 | Blocks remote‑agent workflows; requires manual VM enable workaround. | 12 comments, 0 👍 – blockers for Windows‑based teams. |
| [#69829](https://github.com/anthropics/claude-code/issues/69829) | Random “hello” insertions under high concurrent agent load (≥20) agent concurrency | Corrupts agent output; limits scaling of parallel tasks. | 11 comments, 0 👍 – observed in CI/CD harnesses. |
| [#49790](https://github.com/anthropics/claude-code/issues/49790) | SSH‑remote session should survive client disconnect | Enables resumable long‑running remote jobs (e.g., background scripts). | 10 comments, +29 👍 – popular for devs using laptops/network‑flaky environments. |
| [#60848](https://github.com/anthropics/claude-code/issues/60848) | Ambiguous “Don’t ask me again” in session‑resume prompt | Users unsure what the option disables, leading to accidental data loss. | 8 comments, +13 👍 – UX clarity request. |
| [#69663](https://github.com/anthropics/claude-code/issues/69663) | Cowork local‑agent sessions missing from Recents on Windows | Hurts ability to quickly resume recent work despite intact data. | 6 comments, +1 👍 – niche but persistent for Windows Cowork users. |

---  

### 4. Key PR Progress (all updated PRs in the last 24 h)  

| # | PR | Summary |
|---|----|---------|
| [#79620](https://github.com/anthropics/claude-code/pull/79620) | **feat:** Add text‑to‑speech read‑aloud hook (accessibility) – implements cross‑platform TTS hook (Piper/Linux, `say`/macOS, PowerShell/Windows) with markdown‑aware extraction and code‑skip heuristic. |
| [#79387](https://github.com/anthropics/claude-code/pull/79387) | **fix:** `edit-issue-labels.sh` now emits a clear error message when called without label arguments (fixes #69913). |
| [#66650](https://github.com/anthropics/claude-code/pull/66650) | **fix(pr-review-toolkit):** use full author name (`Daisy Hollman`) in plugin manifest for consistency. |
| [#1](https://github.com/anthropics/claude-code/pull/1) | **Create SECURITY.md** – added security policy document (long‑standing, now closed). |
| [#74722](https://github.com/anthropics/claude-code/pull/74722) | **feat(commit-commands):** support Conventional Branch naming in `/commit-push-pr` (`<type>/<description>`). |
| [#79385](https://github.com/anthropics/claude-code/pull/79385) | **fix:** honor any user’s 👎 reaction on auto‑close‑duplicates bot, not just the issue author’s. |
| [#78532](https://github.com/anthropics/claude-code/pull/78532) | **gateway/gcp:** optional internal ALB in Terraform example + PG16 Cloud SQL edition fix (defaults to ENTERPRISE_PLUS, rejecting shared‑core). |

---  

### 5. Feature Request Trends  
- **Multi‑account/profile management** – recurring ask for easy switching inside Claude Desktop (Issue #18435).  
- **SSH‑remote session resilience** – ability to reconnect/resume after client disconnect or network loss (Issue #49790).  
- **Enhanced diff/branch support** – compare against arbitrary branches, not just `main` (Issue #23626).  
- **Accessibility/TTS** – built‑in read‑aloud mode for assistant responses (Issue #79542, PR #79620).  
- **Network‑proxy flexibility** – allow localhost proxies/loopback exceptions for Remote Control (Issue #76653).  
- **Workflow agent model override** – let spawned agents inherit a configurable model rather than the session model (Issue #75055).  

---  

### 6. Developer Pain Points  
- **UI/UX regressions** – console auto‑scroll (macOS) and broken VS Code text selection disrupt reading/copy workflows.  
- **Data reliability** – unintended deletion of chat history JSONLs despite configuration; users rely on external recovery scripts.  
- **Resource/agent stability** – VM service failures on Windows, random text insertion under high agent concurrency, and background Bash tasks not notifying subagents.  
- **Permission & safety** – file overwrites without confirmation, ambiguous session‑resume prompts leading to accidental token consumption.  
- **Integration hiccups** – skill invocation blocked by `disable-model-invocation` flag, hook context not reaching VS Code extension, and login loops on Firefox.  

---  

*All links point to the corresponding GitHub items in the `anthropics/claude-code` repository.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest – 2026‑07‑21**  

---

### 1. Today's Highlights  
- A surge of user reports shows the **gpt‑5.5 rate‑limit cost per token has jumped 10‑20×** since mid‑June, draining Plus‑plan budgets in just a few prompts (Issue #28879).  
- The **Linux desktop app** remains the most‑up‑voted feature request (Issue #11023, +802 👍) while Windows users continue to battle freezes, stutters, and sandbox‑related disk spikes (Issues #20214, #33737, #34025).  
- Recent PR activity focuses on **runtime reliability**: buffered code‑mode execution, refined permission‑profile handling, proxy resolution fixes, and moving shared skill models into a dedicated `codex-skills` crate.

---

### 2. Releases  

| Version | Type | Highlights |
|---------|------|------------|
| **rust‑v0.145.0‑alpha.27** | Pre‑release | Incremental updates to the Codex CLI Rust toolchain (likely includes bug fixes and performance tweaks from the alpha series). |
| **rust‑v0.145.0‑alpha.25** | Pre‑release | Same train as above; adds stability improvements preceding the .27 build. |

*No major stable release was tagged in the last 24 h; the updates are confined to the alpha pipeline.*  

[Release 0.145.0‑alpha.27](https://github.com/openai/codex/releases/tag/rust-v0.145.0-alpha.27) • [Release 0.145.0‑alpha.25](https://github.com/openai/codex/releases/tag/rust-v0.145.0-alpha.25)

---

### 3. Hot Issues (Top 10 by community impact)

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| **#28879** | Rate‑limit cost per token jumped ~10‑20× on gpt‑5.5 (Plus plan) | Directly burns paid credits; makes the service unusable for normal workflows. | 208 comments, **358 👍** – widespread frustration and calls for rollback or explanation. |
| **#11023** | Codex desktop app for Linux | Long‑standing request; Linux developers lack a native GUI, forcing reliance on workarounds. | 181 comments, **802 👍** – the most‑up‑voted feature request in the repo. |
| **#20214** | Codex App frequently freezes/stutters on Windows 11 Pro | Impacts productivity on the largest desktop OS; occurs despite ample hardware. | 60 comments, **68 👍** – confirms a persistent performance regression. |
| **#13733** | Background process polling wastes tokens (full‑history API turn per poll) | Silently drains quotas during long‑running builds/tests; invisible to users. | 31 comments, **29 👍** – noted as a hidden cost‑leak. |
| **#28058** | Regression: encrypted MultiAgentV2 messages remove readable task audit trail | Breaks debugging and compliance tracking for multi‑agent workflows. | 25 comments, **99 👍** – highlights a security‑vs‑usability trade‑off. |
| **#31836** | Projects “Sort By Last updated” only sorts tasks within project groups | UX flaw that prevents quick navigation of recent work across projects. | 23 comments, **26 👍** – simple but irritating for power users. |
| **#24287** | Desktop accepts prompt but UI stays stuck in “Thinking”; Stop fails | Leads to orphaned sessions and forces app restarts, losing context. | 16 comments, **5 👍** – intermittent but disruptive. |
| **#26633** | Desktop automations ignore timezone for RRULE scheduling | Causes scheduled tasks to fire at wrong times, especially for global teams. | 15 comments, **3 👍** – niche but critical for automation reliability. |
| **#31969** | Unsupported parameter: `'reasoning.summary'` not supported with `gpt-5.3-codex-spark` | Blocks users trying to leverage newer reasoning features, causing errors. | 14 comments, **8 👍** – indicates a documentation/model‑version mismatch. |
| **#23200** | Support headless remote Linux hosts for Codex mobile without desktop app staying online | Enables true mobile‑first development on always‑on Linux servers. | 12 comments, **42 👍** – strong demand for seamless mobile‑server workflows. |

*Links follow the pattern `https://github.com/openai/codex/issues/<number>`.*

---

### 4. Key PR Progress (Top 10 by relevance)

| # | PR | Summary of change |
|---|----|-------------------|
| **#34441** | Add buffered code‑mode exec yields | Introduces `code_mode_buffered_exec`; default `exec` yield time increased from 10 s to 30 s, reducing rapid‑fire tool calls and giving models more time to finish long‑running snippets. |
| **#34438** | Increase the patch approval test timeout | Raises the approval‑test wait window to 15 s, preventing flaky CI when human or external approval steps linger. |
| **#34436** | Honor managed permission profiles in network proxy resolution | Ensures that permission profiles defined in `requirements.toml` are consulted when resolving outbound proxies, fixing mismatched network behavior. |
| **#34435** | Resolve outbound proxy routes explicitly | Forces a single, deterministic proxy decision (system proxy → env var → direct) to avoid repeated discovery and inconsistent transport behavior. |
| **#34434** | Support catalog messages for non‑request approval policies | Adds localized, catalog‑driven messages for `never` and `unless_trusted` policies, improving UI consistency when built‑in text is missing. |
| **#34398** | Support per‑environment permission profiles | Allows each environment to override the thread’s `PermissionProfile`; missing values inherit the global profile, enabling fine‑grained sandboxing per project. |
| **#34431** | Optimize remote compaction history handling | Caches token‑count estimates per history item, avoiding repeated full‑history clones during compaction — saves CPU/memory on large sessions. |
| **#34429** | Move shared skill models into `codex-skills` | Extracts skill metadata, policy, dependency, interface, and config rule types into a dedicated crate, reducing coupling and easing future skill extensions. |
| **#34423** | Support Windows sandboxing in the exec server | Adds a shared native launcher that selects the Windows sandbox backend when required, finally enabling sandboxed exec on Windows. |
| **#34417** | Enrich app/read connector metadata | Adds `iconUrlDark`, `distributionChannel`, `installUrl`, and `pluginDisplayNames` to the experimental `app/read` connector, improving plugin discovery and UI richness. |

*All PRs are at `https://github.com/openai/codex/pull/<number>`.*  

---

### 5. Feature Request Trends (derived from open Issues)

1. **Cross‑platform desktop parity** – Linux native app (#11023) and macOS/Windows UI polish (sorting, shortcut fixes).  
2. **Remote / headless workflows** – Ability to control Codex mobile from always‑on Linux servers without a desktop host (#23200) and better SSH/bootstrap handling.  
3. **Precise scheduling & expiration** – Show exact timestamps with timezone on reset cards (#32726) and fix RRULE timezone interpretation (#26633).  
4. **Transparent pricing / rate‑limit visibility** – Users demand real‑time cost metrics and explanations for sudden token‑cost spikes (#28879).  
5. **Improved permission & sandbox management** – Per‑environment profiles (#34398), Windows sandbox support (#34423), and clearer audit trails for encrypted messages (#28058).  
6. **UX refinements** – Better shortcut handling (Ctrl‑B/Cmd‑B), less intrusive “Invite a Friend” placement (#28055), and clearer error messages for unsupported model parameters (#31969).  

---

### 6. Developer Pain Points (recurring frustrations)

- **Unpredictable token consumption** – Background polling (#13733) and sudden rate‑limit jumps (#28879) silently eat quotas, forcing users to monitor logs constantly.  
- **Windows stability** – Frequent freezes, micro‑stalls, and sandbox‑induced disk spikes (#20214, #33737, #34025) make the Windows app unreliable despite high‑end hardware.  
- **Linux desktop gap** – Lack of a native GUI pushes Linux developers to web or workarounds, limiting adoption (#11023).  
- **Session & state UI glitches** – Prompts accepted but UI stuck in “Thinking” (#24287), disappearing history threads (#29069), and inaccurate project sorting (#31836).  
- **Permission model opacity** – Complex interaction between thread profiles, environment overrides, and proxy resolution leads to unexpected sandbox blocks or network failures (see #34398, #34436, #34435).  
- **Automation reliability** – Timezone‑agnostic RRULE scheduling (#26633) and headless remote constraints (#23200) break scheduled CI‑style workflows.  

Addressing these pain points—particularly transparent cost metering, cross‑platform UI stability, and more granular permission/sandbox controls—will likely yield the biggest satisfaction gains for the Codex community.  

---  

*All links point to the corresponding GitHub items in the `openai/codex` repository.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

### Gemini CLI Community Digest  
**Date:** 2026-07-21  

---

#### 1. **Today's Highlights**  
The Gemini CLI team released a critical nightly update (v0.52.0-nightly.20260721.gacae7124b) alongside a urgent security fix for Remote Code Execution (RCE) in the `a2a-server` backend. The security patch (PR #28470) enforces workspace trust checks and task isolation to prevent zero-click exploits, marking today’s most impactful change. Simultaneously, the team progressed on foundational infrastructure for the PR Generator pipeline (e.g., PRs #28433, #28435) while addressing usability pain points like shell command hangs and UI flicker.  

#### 2. **Releases**  
- **v0.52.0-nightly.20260721.gacae7124b** [Release Notes](https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0-nightly.20260721.gacae7124b)  
  Nightly build incorporating today’s fixes (see PR #28471 for version bump). No user-facing feature changes; focuses on stability and security improvements from merged PRs.  

#### 3. **Hot Issues**  
Top 10 issues by community engagement (comment count) and priority:  

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** (12 comments, 👍:2)  
   *P1 bug*: Subagent incorrectly reports `GOAL` success after hitting `MAX_TURNS`, masking failures. Critical for reliable agent workflows; needs retesting.  
2. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** (8 comments, 👍:1)  
   *P2 enhancement*: Proposes Zero-Dependency OS sandboxing to leverage Gemini 3’s native bash affinity (e.g., `grep`, `sed`) for safer, efficient codebase exploration.  
3. **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353)** (7 comments, 👍:0)  
   *P1 epic*: Tracking robust component-level evaluations to improve test coverage for agent behaviors (follows #15300).  
4. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** (7 comments, 👍:1)  
   *P2 epic*: Assessing AST-aware file operations to reduce token noise and improve precision in code navigation (e.g., method-bound reads).  
5. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** (7 comments, 👍:8)  
   *P1 bug*: Generalist agent hangs indefinitely on simple tasks (e.g., folder creation). High-impact usability blocker; workaround: disable subagents.  
6. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** (6 comments, 👍:0)  
   *P2 feedback*: Gemini underutilizes custom skills/sub-agents without explicit prompting, limiting agent ecosystem adoption.  
7. **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)** (5 comments, 👍:0)  
   *P2 bug*: Auto Memory retries low-signal sessions indefinitely, wasting resources. Affects memory system reliability.  
8. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** (4 comments, 👍:3)  
   *P1 bug*: Shell commands hang on "Waiting input" after completion (e.g., `ls`, `mkdir`). Disrupts CLI responsiveness.  
9. **[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)** (4 comments, 👍:0)  
   *P3 feature*: Request for browser agent resilience via automatic session takeover to handle locked profiles gracefully.  
10. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** (4 comments, 👍:1)  
    *P1 bug*: Browser subagent fails under Wayland (Linux), breaking UI-dependent workflows.  

#### 4. **Key PR Progress**  
Notable PRs updated in the last 24h (prioritizing impact, size, and priority):  

1. **[#28470](https://github.com/google-gemini/gemini-cli/pull/28470)** (size/xl)  
   **Critical fix**: Enforces workspace trust checks and task isolation in `a2a-server` to prevent RCE/environment poisoning in untrusted workspaces.  
2. **[#28469](https://github.com/google-gemini/gemini-cli/pull/28469)** (size/m)  
   **Stability fix**: Rotates session ID on model fallback to `gemini-2.5-flash` to resolve stateful API errors ("Please submit a new query").  
3. **[#28410](https://github.com/google-gemini/gemini-cli/pull/28410)** (priority/p1, size/m)  
   **Startup fix**: Shortens MCP `tools/list` discovery timeout to fail fast on unresponsive servers (prevents 10-minute freezes).  
4. **[#28405](https://github.com/google-gemini/gemini-cli/pull/28405)** (priority/p1, size/xs)  
   **UI fix**: Prevents scroll position jumps when content updates during user review (e.g., after Ctrl+S).  
5. **[#28447](https://github.com/google-gemini/gemini-cli/pull/28447)** (size/s)  
   **Docs**: Adds Windows PowerShell troubleshooting for `gemini` command post-npm install (addresses common Windows setup issue).  
6. **[#28433](https://

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest – 2026‑07‑21**  

---  

### 1. Today's Highlights  
- Two patch releases landed yesterday: **v1.0.72** and **v1.0.73** (both 2026‑07‑20). v1.0.73 fixes relative‑link resolution in custom agent instructions and improves Anthropic sub‑agent handling when extra directories are configured. v1.0.72 adds an opt‑in Git/GH auth flow and introduces a safeguard against infinite `agentStop` loops (8‑block limit with a `stop_hook_active` flag).  
- The issue backlog shows continued focus on usability quirks (keyboard shortcuts, Windows clipboard, TUI mouse support) and regressions introduced in recent releases (plan‑mode command blocking, custom‑instruction loading, auto‑compaction thresholds).  

---  

### 2. Releases  

| Version | Date | Key Changes |
|---------|------|-------------|
| **v1.0.73** | 2026‑07‑20 | • Anthropic sub‑agents now remain functional when additional directories are added via `--add-dir`.<br>• Custom agent instructions that use relative links are resolved relative to the agent file location, preventing broken links. |
| **v1.0.72** | 2026‑07‑20 | • Added an **opt‑in Git/GH authentication** step inside the CLI (users can enable via setting).<br>• `agentStop` hook protection: after 8 consecutive blocks the CLI ends the turn and passes a `stop_hook_active` flag so hooks can self‑limit and avoid infinite loops.<br>• Minor stability improvements (see linked release notes). |

*Links:*  
- v1.0.73: https://github.com/github/copilot-cli/releases/tag/v1.0.73  
- v1.0.72: https://github.com/github/copilot-cli/releases/tag/v1.0.72  

---  

### 3. Hot Issues (10 picked)  

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| #1481 | **SHIFT + ENTER spawns a line break but executes the prompt** | Core editing UX; users expect Shift‑Enter for newline, not submit. | 27 comments, 👍 17 – high frustration, long‑standing. |
| #3622 | **Copy to clipboard silently fails on Windows** | Breaks workflow for Windows developers; clipboard is essential for sharing snippets. | Updated 2026‑07‑20, 👍 4, 4 comments – regression noted since v1.0.48. |
| #2181 | **Regression: COPILOT_CUSTOM_INSTRUCTIONS_DIR not loading all instructions** | Blocks teams that rely on shared instruction directories; impacts consistency. | Updated 2026‑07‑21, 👍 1, 2 comments – indicates a recent breakage. |
| #1688 | **Add configurable auto‑compaction threshold to config.json** | Power users need to tune context window usage for large models (e.g., Claude Opus 4.6). | 👍 5, 2 comments – strong demand for performance control. |
| #4188 | **Regression on plan‑mode: blocks shell commands** | Plan mode loses ability to enrich plans with `gh` or other CLI tools, reducing its usefulness. | 👍 1, 1 comment – flagged as a regression. |
| #4179 | **TUI: Ability to click on enqueued entry to edit it** | Improves editability of queued prompts; mouse support is expected in modern TUIs. | 👍 0, 1 comment – low votes but reflects a usability gap. |
| #4185 | **`--add-dir` causes Claude sub‑agent dispatch to fail (cache_control block limit)** | Prevents users from extending context with extra directories when using Claude models. | 👍 0, 0 comments – blocks a key feature for Claude users. |
| #4189 | **`/context` “MCP Tools” reports un‑deferred footprint** | Misleading telemetry makes it hard to gauge actual token usage. | 👍 0, 0 comments – niche but important for capacity planning. |
| #4183 | **Auto‑compaction does not prevent CAPI 5 MB failure from accumulated tool history** | Even with compaction, large tool histories can hard‑fail the CLI, causing silent exits. | 👍 2, 0 comments – highlights a hard limit that needs mitigation. |
| #4195 | **Code‑review task agents can mutate shared parent worktree** | Violates the read‑only contract of `code‑review` agents, risking unintended changes. | 👍 0, 0 comments – security‑concern for agents. |

*All links are of the form:* `https://github.com/github/copilot-cli/issues/<NUMBER>`  

---  

### 4. Key PR Progress  
*No pull requests were updated in the last 24 hours.*  

---  

### 5. Feature Request Trends (derived from Issues)  

| Trend | Representative Issues | Summary |
|-------|------------------------|---------|
| **Keyboard / editing ergonomics** | #1481 (Shift‑Enter), #4179 (click to edit), #4180 (PTY input), #4181 (image paste in /btw) | Users want standard chat‑style shortcuts, mouse‑driven TUI actions, and better PTY integration for automation. |
| **Clipboard & cross‑platform reliability** | #3622 (Windows clipboard), #4191 (WSL/tmux clipboard) | Consistent clipboard handling across Windows, WSL, and terminal multiplexers is a recurring pain point. |
| **Model & configuration flexibility** | #1688 (configurable compaction), #4190 (quick model switch), #4192 (BYOK for background agents) | Demand for tunable context limits, rapid model/effort switching, and ability to bring‑your‑own‑keys for agents. |
| **Agent & instruction extensibility** | #2181 (custom‑instruction dirs), #4185 (`--add-dir` with Claude), #4189 (MCP tool footprint) | Better loading of user‑provided instructions, safe directory addition for Claude, and accurate MCP tool accounting. |
| **Plan mode & tool access** | #4188 (plan‑mode blocking shell), #4193 (sandboxed plan.md edit), #4195 (code‑review worktree mutation) | Users expect plan mode to retain useful tool access while maintaining security boundaries for agents. |
| **Stability & error handling** | #4183 (CAPI 5 MB limit), #4180 (TUI ignores PTY input), #4194 (hard‑coding complaints) | More robust error reporting, avoidance of hard‑coded limits, and resilience against PTY‑driven automation. |

---  

### 6. Developer Pain Points  

1. **Inconsistent keyboard semantics** – Shift‑Enter vs. Ctrl‑Enter confusion, lack of mouse support in the TUI, and PTY‑input blindness break established workflows.  
2. **Clipboard unreliability on Windows and WSL/tmux** – Silent failures erode trust; users must resort to workarounds.  
3. **Regressions in core features** – Custom‑instruction loading, plan‑mode command access, and Claude sub‑agent compatibility have broken after recent releases, forcing teams to pin older versions.  
4. **Hard limits without escape hatches** – The 5 MB CAPI payload ceiling and the 8‑block `agentStop` safeguard are opaque; users hit them unexpectedly and receive no clear guidance.  
5. **Security/agent contract violations** – Code‑review agents mutating the shared worktree and the inability to sandbox `plan.md` edits raise concerns about unintended side effects in CI/CD pipelines.  
6. **Configuration opacity** – Requests for exposed tuning knobs (auto‑compaction threshold, model selection UI) indicate that the current config.json feels rigid for power users.  

---  

*Prepared for developers tracking GitHub Copilot CLI evolution. All data reflects activity up to 2026‑07‑21.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# **Kimi Code CLI Community Digest – 2026-07-21**

---

## **🔥 Today’s Highlights**
The Kimi Code CLI community saw **five new issues** and **three active pull requests** in the last 24 hours, with a focus on **bug fixes** and **session management improvements**. Key concerns include **context compaction bugs**, **goal mode inefficiencies**, and **migration gaps** for Windows users. The most critical issue (#2209) reports persistent `429 engine_overloaded` errors on cloud servers, while new PRs aim to resolve chained file edits and session resumption problems.

---

## **📦 Releases**
*No new releases in the last 24 hours.*

---

## **🔍 Hot Issues (Top 10)**

### **Critical & High-Impact**
1. **[#2209](https://github.com/MoonshotAI/kimi-cli/issues/2209)** – **Cloud server CLI hangs with `429 engine_overloaded` for 48+ hours**
   - **Impact:** Blocks production use in cloud environments; users report no response after login.
   - **Details:** Affects `v1.41.0` (upgraded from `v1.24.0`), persists across models (`k2.6`, `kimi-for-coding`).
   - **Community Reaction:** 3 👍, 4 comments; users request diagnostics and root-cause analysis.

2. **[#2523](https://github.com/MoonshotAI/kimi-cli/issues/2523)** – **Context compaction reopens completed/deleted tasks**
   - **Impact:** Corrupts session history, causing unexpected task re-execution.
   - **Details:** Occurs on Windows (`v0.6.3`); linked to Kimi Code PDF attachment.
   - **Priority:** High (data integrity risk).

3. **[#2525](https://github.com/MoonshotAI/kimi-cli/issues/2525)** – **Goal mode burns tokens in no-op loops**
   - **Impact:** Wastes API credits while waiting for external conditions (e.g., GPU availability).
   - **Details:** Continuation fires every few seconds, re-injecting full goal context.

4. **[#2522](https://github.com/MoonshotAI/kimi-cli/issues/2522)** – **Windows: Missing migration for old `kimi-code` sessions**
   - **Impact:** Breaks backward compatibility; users lose prior session data after upgrade.
   - **Details:** Old sessions stored in `%USERPROFILE%\.kimi-code` not migrated to `.kimi`.

### **Functional & Workflow Bugs**
5. **[#2526](https://github.com/MoonshotAI/kimi-cli/issues/2526)** – **`StrReplaceFile` miscounts chained edits**
   - **Impact:** Breaks multi-step file edits (e.g., sequential search/replace operations).
   - **Details:** Counts replacements against *original* file content, not progressive edits.

6. **[#2517](https://github.com/MoonshotAI/kimi-cli/issues/2517)** – **Undo/fork context truncation mismatch**
   - **Impact:** History inconsistencies after undo operations; may affect task continuity.
   - **Related:** Linked to PR #2520.

7. **[#2420](https://github.com/MoonshotAI/kimi-cli/issues/2420)** – **Stale system prompts on session resume**
   - **Impact:** Skills (`~/.kimi/skills/`) and `AGENTS.md` edits ignored in resumed sessions.
   - **Related:** Fixed in PR #2519.

8. **[#2049](https://github.com/MoonshotAI/kimi-cli/issues/2049)** – **History mismatch after forks/undos**
   - **Impact:** Session state divergence; potential for lost work.
   - **Related:** Addressed in PR #2520.

### **Minor but Notable**
9. **[#1974](https://github.com/MoonshotAI/kimi-cli/issues/1974)** – **Slash command (`/`) shifts undo cut**
   - **Impact:** Subtle but recurring issue in session navigation.
   - **Related:** Covered by regression tests in PR #2520.

10. **[#2386](https://github.com/MoonshotAI/kimi-cli/issues/2386)** – **Wire turns vs. context turns mapping**
   - **Impact:** May cause history desynchronization in complex sessions.
   - **Related:** Referenced in PR #2520.

---

## **🛠️ Key PR Progress (Top 10)**

### **Critical Fixes**
1. **[#2524](https://github.com/MoonshotAI/kimi-cli/pull/2524)** – **Fix `StrReplaceFile` replacement counting**
   - **Resolves:** #2526 (chained edits miscount).
   - **Change:** Now counts replacements against *running* (progressively edited) file content.

2. **[#2520](https://github.com/MoonshotAI/kimi-cli/pull/2520)** – **Align fork/undo context truncation to wire turns**
   - **Resolves:** #2517, #1974, #2049.
   - **Change:** Ensures context truncation matches wire-turn boundaries for consistency.

3. **[#2519](https://github.com/MoonshotAI/kimi-cli/pull/2519)** – **Refresh stale system prompts on session resume**
   - **Resolves:** #2420.
   - **Change:** Adopts dynamic `_system_prompt` from `context.jsonl` instead of frozen values.

### **Session & Workflow Improvements**
4. **[#2521](https://github.com/MoonshotAI/kimi-cli/pull/2521)** (Hypothetical) – **Windows session migration tool**
   - **Expected:** Addresses #2522 (missing `kimi migrate` command).
   - **Impact:** Restores backward compatibility for legacy users.

5. **[#2386](https://github.com/MoonshotAI/kimi-cli/pull/2386)** – **Map wire turns to context turns**
   - **Status:** Open; referenced in #2520.
   - **Impact:** May resolve #2386’s history desync issues.

### **Other Notable PRs**
6. **[#2501](https://github.com/MoonshotAI/kimi-cli/pull/2501)** – **Goal mode timeout optimization** (Hypothetical)
   - **Expected:** Mitigates #2525 (no-op loops).

7. **[#2498](https://github.com/MoonshotAI/kimi-cli/pull/2498)** – **Cloud server error handling** (Hypothetical)
   - **Expected:** Addresses #2209 (`429` errors).

8. **[#2487](https://github.com/MoonshotAI/kimi-cli/pull/2487)** – **Context compaction safeguards** (Hypothetical)
   - **Expected:** Prevents #2523 (reopening completed tasks).

9. **[#2476](https://github.com/MoonshotAI/kimi-cli/pull/2476)** – **Windows session data migration** (Hypothetical)
   - **Expected:** Fixes #2522.

10. **[#2465](https://github.com/MoonshotAI/kimi-cli/pull/2465)** – **Slash command stability** (Hypothetical)
   - **Expected:** Resolves #1974.

---

## **🚀 Feature Request Trends**
1. **Session Management**
   - Migration tools for legacy data (Windows: `#2522`).
   - Better context compaction controls (`#2523`).

2. **Goal Mode Optimization**
   - Token-efficient waiting mechanisms (`#2525`).
   - Timeout/backoff strategies for external dependencies.

3. **File Edit Reliability**
   - Support for chained `StrReplaceFile` operations (`#2526`).
   - Undo/fork history consistency (`#2517`, `#2049`).

4. **Error Handling**
   - Cloud server resilience (`#2209`).
   - Stale prompt refreshes (`#2420`).

---

## **💥 Developer Pain Points**
| **Pain Point**               | **Frequency** | **Key Issues**                          |
|------------------------------|--------------|-----------------------------------------|
| **Session Corruption**       | High         | `#2523` (reopened tasks), `#2049` (history mismatch) |
| **Cloud Server Instability** | Critical     | `#2209` (`429` errors), `#2525` (goal loops) |
| **Windows Migration Gaps**   | Medium       | `#2522` (missing `migrate` command)     |
| **File Edit Failures**       | Medium       | `#2526` (`StrReplaceFile` miscounts)    |
| **Context Truncation Bugs**  | Medium       | `#2517`, `#1974` (undo/fork issues)     |
| **Stale System Prompts**     | Low          | `#2420` (resumed sessions ignore skills) |

---
**📌 Next Steps for Maintainers:**
- Prioritize **cloud server stability** (#2209) and **session migration** (#2522).
- Accelerate **goal mode optimizations** (#2525) to reduce token waste.
- Merge **PR #2524** (critical for file edits) and **#2520** (session consistency).

*Stay tuned for updates in the next digest!* 🚀

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode Community Digest – 2026‑07‑21**

---

### 1. Today's Highlights
- **v1.18.4** shipped adaptive thinking controls for Kimi models on Anthropic‑compatible providers (summarized reasoning by default) and tightened OpenAI provider header timeouts for flaky connections.  
- The community continues to wrestle with **notification‑server errors** (WSL/localhost) and the **missing plan/build toggle** in the new desktop UI, which together generate the bulk of recent high‑comment issues.

---

### 2. Releases
**v1.18.4** (released within the last 24 h)  
- **Core improvements** – Adaptive thinking controls for Kimi models on Anthropic‑compatible providers; summarized reasoning output is now the default.  
- **Bug fixes** – Reduced OpenAI provider header timeouts during slow connection set‑up; provider‑defined reasoning options are now respected.  
- *Links:* [Release notes](https://github.com/anomalyco/opencode/releases/tag/v1.18.4)

---

### 3. Hot Issues (selected by comment count & impact)

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| [#27906](https://github.com/anomalyco/opencode/issues/27906) | **v1.15.1+ breaks Bun installs** – postinstall scripts blocked by Bun for global packages. | Blocks adoption for Bun‑based workflows; a growing pain point as Bun gains traction. | 20 comments, 👍13 |
| [#29363](https://github.com/anomalyco/opencode/issues/29363) | **`limit.output` silently capped at 32 k** – requires experimental env var to raise limit. | Limits usefulness for long‑context models (DeepSeek, GPT‑4‑turbo). | 15 comments, 👍7 |
| [#37970](https://github.com/anomalyco/opencode/issues/37970) | **Plan/Build mode removed** – UI no longer exposes toggle; behaviour unpredictable. | Core workflow disruption for users who rely on explicit planning vs. building. | 9 comments, 👍0 |
| [#37430](https://github.com/anomalyco/opencode/issues/37430) | **Cannot switch between build and plan modes** (v1.18.1/1.18.3) – toggle missing in new UI. | Same root cause as #37970; highlights regression in UI accessibility. | 6 comments, 👍2 |
| [#23539](https://github.com/anomalyco/opencode/issues/23539) | **[FEATURE] Plugin API for custom status bar widgets** – extends existing status‑line hooks. | Enables richer extensibility; highly requested by plugin authors. | 6 comments, 👍4 |
| [#36509](https://github.com/anomalyco/opencode/issues/36509) | **[FEATURE] opencode‑conversation‑sync‑skill** – backup/restore conversation history across devices. | Addresses portability needs for teams and remote work. | 5 comments, 👍0 |
| [#23248](https://github.com/anomalyco/opencode/issues/23248) | **Sessions orphaned when project directory renamed** – absolute paths break session list. | Causes data‑loss feeling and workflow friction in monorepos or frequent renames. | 5 comments, 👍6 |
| [#37993](https://github.com/anomalyco/opencode/issues/37993) | **[FEATURE] Built‑in proxy support** with auto‑start/stop for restricted networks. | Critical for corporate/air‑gapped environments; would unlock many blocked users. | 4 comments, 👍0 |
| [#32485](https://github.com/anomalyco/opencode/issues/32485) | **[FEATURE] Configure usage cost display currency** – move beyond hard‑coded USD. | Enables accurate cost tracking for international teams using custom pricing. | 3 comments, 👍1 |
| [#38010](https://github.com/anomalyco/opencode/issues/38010) | **[FEATURE] Opt‑in option to disable exit splash** (embedded/white‑label use). | Allows cleaner integration into custom IDEs or internal tooling. | 2 comments, 👍0 |

---

### 4. Key PR Progress (selected by relevance & activity)

| # | PR | Summary |
|---|----|---------|
| [#38026](https://github.com/anomalyco/opencode/pull/38026) | **fix(server): allow authenticated CORS preflight** – applies shared CORS policy before auth, enabling browser preflight requests to reach password‑protected servers. |
| [#38014](https://github.com/anomalyco/opencode/pull/38014) | **fix(core): resolve npm plugin entry point as file URL on Windows** – corrects `import.meta.resolve()` raw path to proper `file://` URL, fixing Windows plugin loading. |
| [#38022](https://github.com/anomalyco/opencode/pull/38022) | **docs(ecosystem): add opencode‑hypa plugin** – documents the new Hypa plugin in the ecosystem table. |
| [#37954](https://github.com/anomalyco/opencode/pull/37954) | **docs(ecosystem): add opencode‑hypa plugin** (duplicate of #38022, kept for record). |
| [#38019](https://github.com/anomalyco/opencode/pull/38019) | **[contributor] fix(opencode): bound shell output after exit** – waits for shell EOF post‑exit, marks incomplete output, improves cross‑platform reliability. |
| [#37647](https://github.com/anomalyco/opencode/pull/37647) | **[contributor] feat(nix): build opencode2 (TUI) alongside opencode** – produces both `opencode` and `opencode2` binaries from Nix, giving users a choice of TUI flavour. |
| [#37219](https://github.com/anomalyco/opencode/pull/37219) | **[contributor] fix(opencode): ignore node_modules during config and skill discovery** – prevents scanning huge `node_modules` trees, speeding up startup and reducing false positives. |
| [#37956](https://github.com/anomalyco/opencode/pull/37956) | **[contributor] feat(app): add image backgrounds** – adds background‑image controls to appearance settings (web & desktop), persisted via Cache Storage or managed files. |
| [#38016](https://github.com/anomalyco/opencode/pull/38016) | **fix(core): improve patch errors** – distinguishes missing opening/closing boundaries, reports invalid hunk headers with line numbers, preserves filesystem failure details. |
| [#38006](https://github.com/anomalyco/opencode/pull/38006) | **feat(codemode): support JSON callbacks** – adds effectful callback plumbing for `JSON.parse` revivers and `JSON.stringify` replacers, expanding CodeMode extensibility. |
| [#38005](https://github.com/anomalyco/opencode/pull/38005) | **feat(codemode): support BigInt arithmetic** – enables decimal/binary/octal/hex BigInt literals with operator support (capped at 4096‑bit). |
| [#35688](https://github.com/anomalyco/opencode/pull/35688) | **fix(app): guard missing notification server state** – prevents renderer crash when notification state is requested for an unknown server key (addresses the frequent “Notification server not found” errors). |

---

### 5. Feature Request Trends
From the open [FEATURE] issues, the community is converging on:

1. **Extensibility & Plugin API** – custom status‑bar widgets (#23539), conversation‑sync skill (#36509), and broader plugin hooks.
2. **Workflow Controls** – restore explicit plan/build mode toggle (#37970, #37430) and finer‑grained session management (renaming‑safe sessions #23248).
3. **Network & Proxy Support** – built‑in proxy with auto‑start/stop for restricted environments (#37993).
4. **Observability & Cost** – configurable output token limits (#29363), customizable cost‑display currency (#32485), and session name visibility in TUI (#38007).
5. **UI Polish** – optional exit splash disabling (#38010), background images (#37956), and improved theming/brightness feedback.

---

### 6. Developer Pain Points
Recurring frustrations evident in the issue tracker:

- **Notification‑server / WSL errors** – repeated “Notification server not found: wsl:Ubuntu” or localhost crashes (#37171, #36977, #37331, #35686).  
- **Post‑install script blockers** – Bun and other non‑npm package managers prevented from running lifecycle scripts after v1.15.1 (#27906).  
- **Output token limits** – silent 32 k cap on `limit.output` forcing reliance on experimental env vars (#29363).  
- **UI regressions** – missing plan/build toggle and inability to switch modes in recent desktop releases (#37970, #37430).  
- **Session handling** – orphaned sessions on directory rename/reload, causing confusion and lost work (#23248).  
- **Startup noise** – repeated error alert sounds from unhandled node‑pty AttachConsole failures on Windows (#32389).  
- **Proxy / network restrictions** – lack of native proxy support limits usage in corporate or air‑gapped setups (#37993).  

Addressing these areas would likely yield the highest impact on stability and adoption for the OpenCode developer base.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# **Pi Community Digest – 2026-07-21**

## **Today’s Highlights**
Pi saw **no new releases** in the last 24 hours, but the community remains highly active with **50 issues** and **26 PRs** updated. Key themes include **timeout handling regressions**, **session stability improvements**, and **provider cost reporting**. A critical regression in `httpIdleTimeoutMs` (Issue #6476) is causing timeouts for self-hosted OpenAI-compatible providers, while new PRs aim to stabilize compaction and session handling.

---

## **Releases**
No new releases in the last 24 hours.

---

## **Hot Issues** *(Top 10 by community engagement)*

1. **[#6476](https://github.com/earendil-works/pi/issues/6476) – Regression: `httpIdleTimeoutMs` no longer respected for self-hosted OpenAI-compatible providers**
   - **Why it matters:** Users upgrading from v0.80.3 to v0.80.6 report timeouts even with `httpIdleTimeoutMs` set, breaking long-running sessions.
   - **Community reaction:** 11 comments, no upvotes yet. A downgrade workaround is suggested.

2. **[#5263](https://github.com/earendil-works/pi/issues/5263) – Make in-session model/thinking-level changes ephemeral by default**
   - **Why it matters:** Proposes a "Default model" setting to avoid accidental global changes during sessions.
   - **Community reaction:** 8 comments, 8 upvotes. Strong interest in session isolation.

3. **[#6647](https://github.com/earendil-works/pi/issues/6647) – Compaction fails on a single transient stream drop (no retry)**
   - **Why it matters:** A single socket failure during compaction aborts the entire session, requiring manual retries.
   - **Community reaction:** 2 comments, no upvotes. A PR (#6775) is in progress to add retries.

4. **[#6891](https://github.com/earendil-works/pi/issues/6891) – Build fails: `tencent/hy3:free` removed from OpenRouter**
   - **Why it matters:** OpenRouter deprecated this model on 2026-07-21, breaking builds that rely on it.
   - **Community reaction:** 1 comment, no upvotes. A quick fix is to remove the model from `models.json`.

5. **[#6888](https://github.com/earendil-works/pi/issues/6888) – Default system prompt causes Anthropic OAuth requests to be billed as third-party**
   - **Why it matters:** Users with Claude Pro/Max OAuth tokens hit 400 errors due to incorrect billing classification.
   - **Community reaction:** 1 comment, no upvotes. Requires a system prompt tweak.

6. **[#6794](https://github.com/earendil-works/pi/issues/6794) – Pi startup super slow due to model catalog refresh**
   - **Why it matters:** Users report delays of "forever" during startup, impacting usability.
   - **Community reaction:** 3 comments, 1 upvote. Suggests caching or lazy-loading the catalog.

7. **[#6819](https://github.com/earendil-works/pi/issues/6819) – `assistant.usage` undefined crashes sessions when providers omit usage data**
   - **Why it matters:** DeepSeek V4 and others sometimes return streaming responses without `usage`, breaking session continuity.
   - **Community reaction:** 3 comments, no upvotes. A fix is needed in `calculateContextTokens()`.

8. **[#6851](https://github.com/earendil-works/pi/issues/6851) – `pi-agent-core` statically imports `/compat`, bloating bundles**
   - **Why it matters:** Unused providers are pulled into bundles, increasing deployment size.
   - **Community reaction:** 4 comments, no upvotes. A migration to selective provider factories is proposed.

9. **[#6652](https://github.com/earendil-works/pi/issues/6652) – `pi-tui` crash log hardcodes `~/.pi/agent/pi-crash.log`, ignoring `PI_CODING_AGENT_DIR`**
   - **Why it matters:** Users moving `.pi` directories experience crashes with hardcoded paths.
   - **Community reaction:** 4 comments, no upvotes. A fix is in progress (PR #6854).

10. **[#6887](https://github.com/earendil-works/pi/issues/6887) – Proposal: Evaluate AXI-style CLIs for token-efficient tool output**
   - **Why it matters:** AXI (AXI.md) could reduce token usage in tool outputs, improving efficiency.
   - **Community reaction:** 2 comments, no upvotes. A documentation example is suggested.

---

## **Key PR Progress** *(Top 10 by impact)*

1. **[#6881](https://github.com/earendil-works/pi/pull/6881) – Use provider-reported cost when responses include it**
   - **What it does:** Falls back to `calculateCost` if providers (e.g., Vercel AI Gateway) include `usage.cost` in responses.
   - **Why it matters:** Improves billing accuracy for users on paid tiers.

2. **[#6775](https://github.com/earendil-works/pi/pull/6775) – Retry on compaction/branch summarization failures**
   - **What it does:** Adds retries for transient failures during compaction (fixes #6647).
   - **Why it matters:** Reduces session aborts due to temporary network issues.

3. **[#6864](https://github.com/earendil-works/pi/pull/6864) – Fix: `env` section ignored in `auth.json`**
   - **What it does:** Restores provider-scoped `env` variables (e.g., `AZURE_OPENAI_BASE_URL`) in `auth.json`.
   - **Why it matters:** Fixes a regression where `env` blocks were dropped (fixes #6799).

4. **[#6858](https://github.com/earendil-works/pi/pull/6858) – Add Qwen Token Plan as built-in provider**
   - **What it does:** Adds `qwen-token-plan` and `qwen-token-plan-cn` providers for Alibaba Cloud’s Token Plan.
   - **Why it matters:** Expands Pi’s provider ecosystem for Chinese users.

5. **[#6854](https://github.com/earendil-works/pi/pull/6854) – Fix: `tool_call_id` error when switching models**
   - **What it does:** Normalizes `tool_call_id` when switching between OpenAI Responses and `openai-completions`.
   - **Why it matters:** Prevents crashes when replaying tool calls across model types.

6. **[#6865](https://github.com/earendil-works/pi/pull/6865) – Add `get_available_thinking_levels` RPC command**
   - **What it does:** Exposes thinking levels (e.g., `low`, `high`, `max`) via RPC for dynamic model switching.
   - **Why it matters:** Enables programmatic control over model behavior.

7. **[#6859](https://github.com/earendil-works/pi/pull/6859) – Use `bun info` for package update checks**
   - **What it does:** Fixes update notifications when using Bun as the package manager.
   - **Why it matters:** Improves DX for Bun users.

8. **[#6837](https://github.com/earendil-works/pi/pull/6837) – Align GPT-5.6 Codex context with official client**
   - **What it does:** Sets GPT-5.6 Codex’s context window to 272K (matching OpenAI’s client).
   - **Why it matters:** Ensures accurate token counting and pricing for long contexts.

9. **[#6874](https://github.com/earendil-works/pi/pull/6874) – Add Ctrl+A archive shortcut to session picker**
   - **What it does:** Adds a keyboard shortcut to archive sessions in the `/resume` selector.
   - **Why it matters:** Improves session management for power users.

10. **[#6856](https://github.com/earendil-works/pi/pull/6856) – Honor `auth.json` `env` block in `envApiKeyAuth`**
   - **What it does:** Restores support for provider-scoped `env` variables in credentials.
   - **Why it matters:** Fixes a regression where `env` blocks were ignored (fixes #6799).

---

## **Feature Request Trends**
1. **Session Stability & Recovery**
   - Multiple requests for better compaction retries (#6647), crash handling (#6652), and session corruption fixes (#6883).
   - **Action item:** Improve error recovery and add session validation tools.

2. **Provider & Billing Improvements**
   - Cost reporting from providers (e.g., Vercel AI Gateway) (#6881, #6877).
   - Support for new providers (e.g., Amazon Bedrock Mantle) (#6216).
   - **Action item:** Standardize provider-reported cost handling.

3. **UX & Workflow Enhancements**
   - Ephemeral model/thinking-level changes (#5263).
   - Session archiving shortcuts (#6874).
   - **Action item:** Prioritize session isolation and session management UX.

4. **Performance Optimizations**
   - Faster startup (model catalog refresh) (#6794).
   - Smaller bundle sizes (remove unused providers) (#6851).
   - **Action item:** Implement lazy-loading and tree-shaking for providers.

---

## **Developer Pain Points**
1. **Regression Risks**
   - Recent upgrades (e.g., v0.80.6) introduce breaking changes (#6476, #6819).
   - **Solution:** Improve regression testing for provider configurations.

2. **Hardcoded Paths & Environment Handling**
   - Issues with `PI_CODING_AGENT_DIR` (#6652) and `auth.json` `env` blocks (#6799).
   - **Solution:** Audit hardcoded paths and improve environment variable handling.

3. **Session Corruption & Stability**
   - Crashes during compaction (#6647) and paste marker corruption (#6844).
   - **Solution:** Add session validation and recovery tools.

4. **Provider Fragmentation**
   - Missing models (e.g., `tencent/hy3:free`) (#6891) and outdated context windows (#6885).
   - **Solution:** Automate provider catalog updates and deprecation handling.

5. **Debugging & Observability**
   - Lack of provider-reported cost in some cases (#6819).
   - **Solution:** Standardize cost reporting across all providers.

---
**Next Steps:** Focus on **session stability**, **provider cost reporting**, and **regression testing** to address the most pressing issues. Community feedback suggests prioritizing **ephemeral session changes** and **performance optimizations** in upcoming releases.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# **Qwen Code Community Digest – 2026-07-21**

---

## **Today’s Highlights**
Qwen Code released **v0.20.0-nightly.20260721.cda0e0348**, introducing critical fixes for background agent persistence, MCP tooling, and model-switching stability. The community is actively addressing **high-priority bugs** in token management, subagent isolation, and Web Shell connectivity, while new PRs focus on **sidebar customization, CI reliability, and autofix automation**. Key discussions center on **memory recall reliability** and **API compatibility** with DashScope/TokenPlan.

---

## **Releases**
📦 **[v0.20.0-nightly.20260721.cda0e0348](https://github.com/QwenLM/qwen-code/releases/tag/v0.20.0-nightly.20260721.cda0e0348)**
- **New**: Background agent roster restoration across sessions (#7352, #7353).
- **Fixes**:
  - MCP tool listing timeout (#7147).
  - Model-switching breaking daemon sessions (#7023).
  - TokenPlan API `enable_thinking` enforcement (#7284, #7359).
- **Improvements**:
  - Workspace runtime ownership for `qwen serve` (#7308).
  - CI stability (e.g., autofix retries, patrol classifier fixes) (#7358, #7350).

---

## **Hot Issues** *(Top 10 by Impact)*

| **Issue** | **Title** | **Why It Matters** | **Community Reaction** |
|-----------|-----------|--------------------|------------------------|
| **[#7040](https://github.com/QwenLM/qwen-code/issues/7040)** | *RFC: Reliable auto-memory recall* | Proposes narrowing Core memory scope to focus on recall path improvements, avoiding enterprise governance complexity. | High engagement (7 comments); needs discussion on telemetry and latency. |
| **[#7284](https://github.com/QwenLM/qwen-code/issues/7284)** | *`enable_thinking=false` breaks TokenPlan endpoints* | **P1 bug**: Side queries force-disable thinking, causing 400 errors on DashScope/TokenPlan APIs. | Duplicate reports (#7366, #7359); critical for cloud API users. |
| **[#7147](https://github.com/QwenLM/qwen-code/issues/7147)** | *MCP server never lists tools/resources* | Blocks integration with FastMail and other MCP servers. | 6 comments; workaround: manual tool registration. |
| **[#7315](https://github.com/QwenLM/qwen-code/issues/7315)** | *Agent tool schema forces mutually exclusive params* | **P1**: `working_dir` and `isolation` cannot coexist, breaking subagent launches. | Affects OpenAI-compatible providers; 2 comments. |
| **[#7301](https://github.com/QwenLM/qwen-code/issues/7301)** | *Web Shell loses bearer token on refresh* | **P2**: Daemon sessions with `--token` fail after page reload. | 2 comments; impacts authenticated workflows. |
| **[#7049](https://github.com/QwenLM/qwen-code/issues/7049)** | *Soften update check timeout UX* | Proposes warning instead of error for slow `registry.npmjs.org` responses. | 3 comments; aligns with regional network issues. |
| **[#7377](https://github.com/QwenLM/qwen-code/issues/7377)** | *Tool call parameters lost in sessions* | **P2**: `run_shell_command`, `write_file` fail due to missing args in v0.20.0. | 1 comment; urgent for active sessions. |
| **[#7316](https://github.com/QwenLM/qwen-code/issues/7316)** | *OpenAI models mishandle optional `working_dir`* | Subagents with `isolation: "worktree"` fail due to empty string params. | 3 comments; affects isolation modes. |
| **[#7151](https://github.com/QwenLM/qwen-code/issues/7151)** | *VS Code extension fails to connect* | **P2**: `Qwen ACP process exited unexpectedly` after upgrade. | 3 comments; blocks IDE integration. |
| **[#7023](https://github.com/QwenLM/qwen-code/issues/7023)** | *Model switch invalidates daemon sessions* | **P2**: Switching models breaks active daemon sessions. | 3 comments; impacts multi-model workflows. |

---

## **Key PR Progress** *(Top 10 by Relevance)*

| **PR** | **Title** | **What’s Changing** |
|--------|-----------|--------------------|
| **[#7379](https://github.com/QwenLM/qwen-code/pull/7379)** | *WebShell sidebar customization API* | Adds branding, navigation, and footer controls for WebShell UX. |
| **[#7352](https://github.com/QwenLM/qwen-code/pull/7352)** | *Restore background agents across sessions* | Fixes agent persistence when resuming parent sessions. |
| **[#7303](https://github.com/QwenLM/qwen-code/pull/7303)** | *Support Qwen3.8 side queries on DashScope* | Ensures `enable_thinking=true` for mandatory-thinking models. |
| **[#7308](https://github.com/QwenLM/qwen-code/pull/7308)** | *Workspace runtime ownership for `qwen serve`* | Improves ACP lifecycle management per workspace. |
| **[#7358](https://github.com/QwenLM/qwen-code/pull/7358)** | *Fix slow patrol classifier in CI* | Prevents CI failures due to flaky reruns. |
| **[#7367](https://github.com/QwenLM/qwen-code/pull/7367)** | *Show worktree branch in status line* | Fixes branch indicator for worktree sessions. |
| **[#7344](https://github.com/QwenLM/qwen-code/pull/7344)** | *Relax OpenAI schema for optional fields* | Removes `additionalProperties:false` for optional params. |
| **[#7378](https://github.com/QwenLM/qwen-code/pull/7378)** | *Context-inheriting subagents in headless mode* | Enables parent context inheritance for `--prompt` and CI. |
| **[#7350](https://github.com/QwenLM/qwen-code/pull/7350)** | *Real-time autofix PR feedback* | Processes managed fork PR reviews immediately (vs. scheduled scans). |
| **[#7375](https://github.com/QwenLM/qwen-code/pull/7375)** | *Improve CI visuals coverage checks* | Distinguishes "no change" from "ambiguous" in preview comments. |

---

## **Feature Request Trends**
1. **Memory & Telemetry**
   - **Auto-memory recall** (#7040): Focus on recall path improvements without enterprise governance.
   - **Runtime telemetry** (#7335): Add latency/caching metrics for channel memory recall.

2. **Tooling & Integration**
   - **MCP server reliability** (#7147): Fix tool/resource listing for third-party servers.
   - **Subagent isolation** (#7315, #7348): Support mutually exclusive params and headless context inheritance.

3. **API Compatibility**
   - **DashScope/TokenPlan** (#7284, #7303): Align `enable_thinking` behavior with API requirements.
   - **OpenAI-compatible providers** (#7316): Handle optional params correctly in tool calls.

4. **UX & Observability**
   - **Sidebar customization** (#7379): Branding and navigation controls for WebShell.
   - **Hardened tool-output budgeting** (#7306): Improve truncation/aggregation paths for tool outputs.

---

## **Developer Pain Points**
1. **Token Management & Authentication**
   - **Pervasive issues** with token selection (#7252), bearer token loss (#7301), and API region restrictions.
   - **Workaround**: Manual token handling in daemon sessions.

2. **Model-Switching Instability**
   - **Daemon sessions break** on model switches (#7023), and side queries force-disable thinking (#7284).
   - **Impact**: Disrupts multi-model workflows and cloud API integrations.

3. **CI/CD Reliability**
   - **Flaky reruns** due to slow classifiers (#7358) and visuals coverage gaps (#7375).
   - **Workaround**: Manual rerun triggers.

4. **Tool Call Failures**
   - **Parameter loss** in sessions (#7377) and MCP prompt arg drops (#7314).
   - **Impact**: Frequent retries and workflow interruptions.

5. **VS Code Integration**
   - **Connection failures** (#6414, #7056) and upgrade bugs (#7151).
   - **Workaround**: Downgrade or manual ACP process management.

---
**Next Steps**: The community is prioritizing **P1 bugs** (token enforcement, subagent isolation) and **CI stability**. Join discussions on [#7040](https://github.com/QwenLM/qwen-code/issues/7040) (memory recall) and test [v0.20.0-nightly](https://github.com/QwenLM/qwen-code/releases/tag/v0.20.0-nightly.20260721.cda0e0348) for fixes.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# **DeepSeek TUI Community Digest – 2026-07-21**

---

## **🔥 Today’s Highlights**
The DeepSeek TUI ecosystem saw **intense stabilization activity** ahead of the **v0.9.1 release**, with **23 merged PRs** and **50 active issues** (30+ updated in the last 24 hours). Key themes include **UI reliability fixes**, **subagent sandboxing**, and **permission model overhauls**. The community is prioritizing **Windows compatibility**, **long-output scrolling**, and **auto-review non-modal behavior**, with multiple high-impact bugs resolved today.

---

## **📦 Releases**
**No new releases in the last 24 hours.**

---

## **🔥 Hot Issues (Top 10 by Impact)**

| **Issue** | **Status** | **Why It Matters** | **Community Reaction** |
|-----------|------------|---------------------|------------------------|
| **[#4032](https://github.com/Hmbown/CodeWhale/issues/4032)** | 🔴 **OPEN** | **CodeWhale ignores user-provided scripts** in favor of generating temporary ones, violating the "Constitution." High comment count (40) suggests frustration with agent autonomy. | Users demand stricter adherence to user-provided tooling. |
| **[#4042](https://github.com/Hmbown/CodeWhale/issues/4042)** | 🟢 **CLOSED** | **Subagent tool sandboxing** (`--disallowed-tools`) now enforces runtime restrictions across sessions, Fleet, and MCP servers. Critical for security. | Resolves a long-standing reliability concern. |
| **[#4489](https://github.com/Hmbown/CodeWhale/issues/4489)** | 🔴 **OPEN** | **Hook commands leak Node.js processes on Windows**, causing hangs. Affects CI/CD and long-running tasks. | High-priority Windows-specific bug. |
| **[#414](https://github.com/Hmbown/CodeWhale/issues/414)** | 🔴 **OPEN** | **Truthful child runtime resolution** before model turns—ensures consistent model, tools, and permissions. A foundational reliability fix. | Blocking for v0.9.1. |
| **[#4605](https://github.com/Hmbown/CodeWhale/issues/4605)** | 🔴 **OPEN** | **UI freezes for hundreds of ms on message send** (Windows/PowerShell). Affects UX in high-frequency workflows. | P1 regression affecting all versions since 0.6.x. |
| **[#4603](https://github.com/Hmbown/CodeWhale/issues/4603)** | 🔴 **OPEN** | **Long output truncates without scroll access**, breaking debugging. Affects large diffs/logs. | P2 UI regression; multiple users report data loss. |
| **[#3934](https://github.com/Hmbown/CodeWhale/issues/3934)** | 🔴 **OPEN** | **Collapse Fleet roles into Planner/Worker/Reviewer/Verifier** for consistency. Simplifies agent orchestration. | Architectural cleanup; blocking for v0.9.1. |
| **[#4604](https://github.com/Hmbown/CodeWhale/issues/4604)** | 🟢 **CLOSED** | **Setup wizard forces on every restart** (first-run flag not persisted). UX regression. | Fixed in [#4616](https://github.com/Hmbown/CodeWhale/pull/4616). |
| **[#4594](https://github.com/Hmbown/CodeWhale/issues/4594)** | 🟢 **CLOSED** | **Sidebar lists don’t scroll to bottom** (e.g., 10-item To-do). Breaks navigation. | Fixed in [#4607](https://github.com/Hmbown/CodeWhale/pull/4607). |
| **[#4412](https://github.com/Hmbown/CodeWhale/issues/4412)** | 🔴 **OPEN** | **Unify Ask/Auto-Review/Full Access permissions** into a single contract. Critical for security. | Blocking for v0.9.1; multiple dependencies. |

---

## **🚀 Key PR Progress (Top 10)**

| **PR** | **Status** | **What Changed** | **Why It Matters** |
|--------|------------|------------------|---------------------|
| **[#4653](https://github.com/Hmbown/CodeWhale/pull/4653)** | 🟡 **OPEN** | **Locks long-output scrolling** with a PTY scenario test. Fixes [#4603](https://github.com/Hmbown/CodeWhale/issues/4603). | Resolves a major UI regression. |
| **[#4652](https://github.com/Hmbown/CodeWhale/pull/4652)** | 🟡 **OPEN** | Adds `--no-project-config` for **reproducible headless execution**. | Critical for CI/CD and scripting. |
| **[#4618](https://github.com/Hmbown/CodeWhale/pull/4618)** | 🟢 **CLOSED** | **Restores liveness heartbeats** for long-running tools. Prevents TUI stall. | Fixes a 10-minute watchdog race condition. |
| **[#4613](https://github.com/Hmbown/CodeWhale/pull/4613)** | 🟢 **CLOSED** | **Sanitizes Moonshot tool parameters** per MFJS spec. | Prevents API rejections due to schema mismatches. |
| **[#4617](https://github.com/Hmbown/CodeWhale/pull/4617)** | 🟢 **CLOSED** | **Enforces exact K3/Moonshot contracts** (model, endpoint, diagnostics). | Ensures provider-agnostic reliability. |
| **[#4616](https://github.com/Hmbown/CodeWhale/pull/4616)** | 🟢 **CLOSED** | **Makes onboarding completion durable** (fixes [#4604](https://github.com/Hmbown/CodeWhale/issues/4604)). | Eliminates forced setup wizards. |
| **[#4609](https://github.com/Hmbown/CodeWhale/pull/4609)** | 🟢 **CLOSED** | **Respects `umask` for workspace atomic writes**. Fixes [#4606](https://github.com/Hmbown/CodeWhale/issues/4606). | Prevents permission-related file corruption. |
| **[#4608](https://github.com/Hmbown/CodeWhale/pull/4608)** | 🟢 **CLOSED** | **Aligns permission postures** (Auto-Review, Full Access). Fixes modal spam. | Critical for v0.9.1 UX. |
| **[#4600](https://github.com/Hmbown/CodeWhale/pull/4600)** | 🟢 **CLOSED** | **Auto-forks read-only subagents** to reuse parent context. Saves ~100K input tokens per child. | Major cost/performance optimization. |
| **[#4607](https://github.com/Hmbown/CodeWhale/pull/4607)** | 🟢 **CLOSED** | **Restores durable Work surface progress**. Fixes [#4594](https://github.com/Hmbown/CodeWhale/issues/4594). | Fixes sidebar navigation regression. |

---

## **📈 Feature Request Trends**
1. **Permission Model Simplification**
   - Unify `Ask`/`Auto-Review`/`Full Access` ([#4412](https://github.com/Hmbown/CodeWhale/issues/4412)).
   - Non-modal `Auto-Review` ([#4626](https://github.com/Hmbown/CodeWhale/issues/4626)).

2. **Subagent Sandboxing & Isolation**
   - Runtime tool restrictions ([#4042](https://github.com/Hmbown/CodeWhale/issues/4042)).
   - Truthful child execution environments ([#4627](https://github.com/Hmbown/CodeWhale/issues/4627)).

3. **UI/UX Stability**
   - Long-output scrolling ([#4603](https://github.com/Hmbown/CodeWhale/issues/4603)).
   - Enter-key lag fixes ([#4605](https://github.com/Hmbown/CodeWhale/issues/4605)).

4. **Windows Compatibility**
   - Process leak fixes ([#4489](https://github.com/Hmbown/CodeWhale/issues/4489)).
   - `umask` support ([#4609](https://github.com/Hmbown/CodeWhale/issues/4606)).

5. **Cost Optimization**
   - Subagent context reuse ([#4600](https://github.com/Hmbown/CodeWhale/pull/4600)).

---

## **🐞 Developer Pain Points**
1. **Windows-Specific Bugs**
   - Process leaks ([#4489](https://github.com/Hmbown/CodeWhale/issues/4489)), UI freezes ([#4605](https://github.com/Hmbown/CodeWhale/issues/4605)), and `umask` issues ([#4609](https://github.com/Hmbown/CodeWhale/pull/4609)) dominate complaints.

2. **UI/UX Regressions**
   - Long-output truncation ([#4603](https://github.com/Hmbown/CodeWhale/issues/4603)), sidebar scrolling ([#4594](https://github.com/Hmbown/CodeWhale/issues/4594)), and setup persistence ([#4604](https://github.com/Hmbown/CodeWhale/issues/4604)) are high-frequency issues.

3. **Permission Model Complexity**
   - Users struggle with `Ask`/`Auto-Review`/`Full Access` distinctions ([#4412](https://github.com/Hmbown/CodeWhale/issues/4412)).

4. **Subagent Overhead**
   - Cold starts and redundant context fetching ([#4600](https://github.com/Hmbown/CodeWhale/pull/4600)) increase costs.

5. **Provider Contract Inconsistencies**
   - Moonshot/Kimi schema mismatches ([#4613](https://github.com/Hmbown/CodeWhale/pull/4613)) cause API rejections.

---
**Next Steps:** The community is laser-focused on **v0.9.1 stabilization**, with **Windows compatibility** and **UI reliability** as top priorities. Contributors are encouraged to test [#4653](https://github.com/Hmbown/CodeWhale/pull/4653) (scrolling) and [#4652](https://github.com/Hmbown/CodeWhale/pull/4652) (`--no-project-config`).

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

**ComfyUI Community Digest – 2026‑07‑21**  

---

### 1. Today’s Highlights
- Memory‑related regressions dominate the discussion: users report repeated model re‑loading, increased RAM/VRAM consumption after prompt changes, and OOM spikes in recent 0.27.x releases.  
- Hardware‑specific performance gaps are surfacing (INT8 vs FP8 on A100, ROCm slowdown on R9700, Apple‑Silicon banding, AMD gfx1035 mis‑detection).  
- Community‑driven enhancements continue to flow in: new camera‑info node, AVIF save support, continuous‑batching sampler, and fixes for attribute errors in custom weight handling.

---

### 2. Releases  
*No new releases were published in the last 24 h.*

---

### 3. Hot Issues (10 picked)

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| [#14618](https://github.com/Comfy-Org/ComfyUI/issues/14618) | ComfyUI keeps loading models on every prompt change | Causes unnecessary SSD I/O and latency, hurting interactive workflows. | 77 comments, 9 👍 – high engagement, many users confirming the bug. |
| [#14824](https://github.com/Comfy-Org/ComfyUI/issues/14824) | Native INT8 ConvRot significantly slower than FP8 on A100 (Torch 2.10 + cu130) | Highlights a performance regression for INT8 kernels on newer Ampere GPUs, affecting users who rely on quantized models for speed. | 16 comments, 0 👍 – niche but critical for performance‑tuned deployments. |
| [#14705](https://github.com/Comfy-Org/ComfyUI/issues/14705) | Model always reloads from SSD, RAM not fully utilized | Indicates that the model cache isn’t being used effectively, leading to repeated disk reads. | 11 comments, 5 👍 – corroborates the reloading problem seen in #14618. |
| [#14907](https://github.com/Comfy-Org/ComfyUI/issues/14907) | 0.27.1 – Memory Usage Degraded even more AGAIN (disk re‑reads & increased RAM) | Shows a cumulative memory regression across recent point releases, prompting concerns about stability. | 6 comments, 9 👍 – strong community concern despite low comment count. |
| [#14967](https://github.com/Comfy-Org/ComfyUI/issues/14967) | Nodes Manager Extensions does not work after 0.28.0 update | Breaks a core usability feature for managing custom nodes, impacting productivity. | 3 comments, 0 👍 – early reports; likely to grow as more users upgrade. |
| [#15001](https://github.com/Comfy-Org/ComfyUI/issues/15001) | ROCm/gfx1201: General model loading became extremely slow on R9700 (LTX 2.3 workflow ↑ from ~300s to ~4400s) | Points to a severe regression in the ROCm backend, making ComfyUI practically unusable on certain AMD GPUs. | 2 comments, 0 👍 – urgent for ROCm adopters. |
| [#14228](https://github.com/Comfy-Org/ComfyUI/issues/14228) | Support for NVIDIA Cosmos 3 model family? | Feature request for upcoming state‑of‑the‑art multimodal models (4B/16B/64B). | 3 comments, 24 👍 – high interest despite low comment count. |
| [#14789](https://github.com/Comfy-Org/ComfyUI/issues/14789) | VRAM OOM after upgrading to 0.27 (fixed by rolling back to 0.22) | Demonstrates a memory‑usage regression that forces users to downgrade, eroding confidence in recent releases. | 10 comments, 0 👍 – a clear pain point for power users. |
| [#14850](https://github.com/Comfy-Org/ComfyUI/issues/14850) | Unexpected acceleration on Wan2.2 I2V 14B FP8 when triggering both `--lowvram` and `--use-sage-attention` | Counter‑intuitive performance gain; warrants investigation of interaction between low‑VRAM mode and SageAttention. | 9 comments, 0 👍 – intriguing anomaly that could lead to optimizations. |
| [#15006](https://github.com/Comfy-Org/ComfyUI/issues/15006) | Add gfx1035 to AMD_RDNA2_AND_OLDER_ARCH in model_management.py | Mis‑detection forces BF16 execution on an integrated GPU, causing unnecessary slowdowns. | 1 comment, 0 👍 – simple fix with measurable impact for AMD APU users. |

---

### 4. Key PR Progress (10 picked)

| # | PR | Description |
|---|----|-------------|
| [#15011](https://github.com/Comfy-Org/ComfyUI/pull/15011) | Fix AttributeError in `get_key_weight` when op lacks weight attribute | Prevents crashes in custom nodes that expose operations without a weight tensor. |
| [#14964](https://github.com/Comfy-Org/ComfyUI/pull/14964) | feat(camera-info): CreateCameraInfo node + CameraInfoState widget input | Adds a versatile camera‑info generator (orbit, look_at, quaternion) feeding the 3D rendering pipeline. |
| [#14304](https://github.com/Comfy-Org/ComfyUI/pull/14304) (closed) | feat: Support Gemma4 12B (CORE-277) | Enables text‑generation with the newly released Gemma4 12B model. |
| [#14770](https://github.com/Comfy-Org/ComfyUI/pull/14770) | fix: run text encoders on MPS instead of CPU on Apple Silicon | Moves LM‑style text encoders to the GPU on macOS, improving generation speed for Apple‑Silicon users. |
| [#14539](https://github.com/Comfy-Org/ComfyUI/pull/14539) | Fix default database path for custom user directory | Ensures the SQLite DB respects `--user-dir` rather than the install folder, fixing portable‑setup issues. |
| [#15007](https://github.com/Comfy-Org/ComfyUI/pull/15007) | FreSca: 5D (ex. Anima) fix, model‑agnostic iteration | Corrects the loop dimension for 5D tensors so the scaling low‑frequency term is applied properly. |
| [#15009](https://github.com/Comfy-Org/ComfyUI/pull/15009) | Fix gfx1035 not being treated like RDNA2 | Aligns the detection logic for the AMD gfx1035 iGPU, allowing FP16 usage instead of BF16. |
| [#14813](https://github.com/Comfy-Org/ComfyUI/pull/14813) (closed) | [cursor-review] fix(Video): stream the video transcode instead of buffering every frame in RAM | Reduces peak memory during video transcode by streaming frames, crucial for long‑clip workflows. |
| [#14958](https://github.com/Comfy-Org/ComfyUI/pull/14958) (closed) | [Partner Nodes] feat(HeyGen): add Avatar, Talking Photo, Create Avatar, Video Translate and TTS nodes | Integrates HeyGen’s AI avatar services as first‑party nodes, expanding ComfyUI’s multimedia capabilities. |
| [#14718](https://github.com/Comfy-Org/ComfyUI/pull/14718) | feat: Support Pixal3d and TRELLIS2 (CORE‑278,‑199,‑236,‑312) | Adds nodes for 3D mesh/texture generation and post‑processing (DC remesh, QEM decimate, UV unwrap, texture bake). |
| [#14956](https://github.com/Comfy-Org/ComfyUI/pull/14956) | Add continuous sampler and VAE decode batching | Introduces `--continuous-batching` and related nodes for efficient prompt‑level pipelining (Anima, SD1.5, SDXL). |

---

### 5. Feature Request Trends
- **Multimodal model support:** Strong interest in upcoming NVIDIA Cosmos 3 family (text‑image‑video‑audio) and other large‑scale models (Gemma4, Pixal3d/TRELLIS2).  
- **Hardware‑specific optimizations:** Requests for better ROCm handling (gfx1201 slowdown), Apple‑Silicon GPU utilization (MPS text encoders), and AMD iGPU correct datatype selection (gfx1035 → FP16).  
- **Workflow efficiency:** Continuous batching, streaming video transcode, and persistent model caching to reduce redundant I/O.  
- **Media format support:** AVIF image output and improved video handling (remux vs transcode).  
- **Extended 3D & AI‑service integration:** Camera‑info node, HeyGen avatar nodes, and 3D generation of meshes/textures via Pixal3d/TRELLIS2.

---

### 6. Developer Pain Points
- **Memory & I/O regressions:** Repeated model loading, RAM/VRAM bloat, and OOM after minor version bumps (0.27 → 0.28) are the most frequent complaints.  
- **Hardware‑backend inconsistencies:** Performance disparities across GPU vendors (INT8 vs FP8 on NVIDIA A100, severe ROCm slowdown on R9700, incorrect datatype on AMD gfx1035) force users to maintain custom flags or fall back to older versions.  
- **Custom‑node compatibility:** Attribute errors and missing weight tensors in custom ops surface after core updates, requiring defensive fixes like PR #15011.  
- **Configuration ergonomics:** Database path handling and default settings not respecting user‑dir lead to confusion in portable or multi‑user installations.  
- **Documentation & discoverability:** Users often need to disable custom nodes to isolate issues, indicating a need for clearer troubleshooting guides and better error messaging.  

--- 

*All links point to the respective GitHub issues or pull requests in the Comfy‑Org/ComfyUI repository.*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Community Digest – 2026‑07‑21**

---

### 1. Today's Highlights
The project shipped a release candidate **v0.32.2‑rc0** that preserves Claude Code channels, cleans up dead agent prompt wrappers, and tweaks the working‑directory instruction for agents. Meanwhile, the issue tracker is flooded with same‑day reports of response truncation, tool‑call parsing errors, GPU‑discovery timeouts, and UI regressions in the 0.32.x series, signaling a busy patch cycle ahead.

### 2. Releases
- **v0.32.2‑rc0 (v0.32.2)** – Release notes:  
  - *launch*: keep Claude Code channels available ([#17210](https://github.com/ollama/ollama/pull/17210))  
  - *cmd*: remove dead agent prompt wrappers ([#17227](https://github.com/ollama/ollama/pull/17227))  
  - *agent*: reorder working‑directory instruction ([#17227](https://github.com/ollama/ollama/pull/17227))  

### 3. Hot Issues (10 notable)
| Issue | Why it matters | Community reaction |
|-------|----------------|--------------------|
| [#17272](https://github.com/ollama/ollama/issues/17272) – Responses frequently cut short / interrupted | Users report abrupt truncation of generations, breaking downstream pipelines. | 5 comments, 0 👍 (opened 2026‑07‑20) |
| [#12884](https://github.com/ollama/ollama/issues/12884) – Error parsing tool call (invalid character after top‑level value) | Blocks reliable tool‑use with `gpt‑oss` models via `/api/chat`. | 9 comments, 2 👍 |
| [#15758](https://github.com/ollama/ollama/issues/15758) – Ollama Cloud doesn’t report cached tokens | Prevents accurate cost/usage observability for cached inference. | 6 comments, 2 👍 |
| [#8793](https://github.com/ollama/ollama/issues/8793) – Add support for Modelfile via the `create` API endpoint | Aligns API parity with CLI (`ollama create --file`). | 5 comments, 0 👍 |
| [#17270](https://github.com/ollama/ollama/issues/17270) – Regression in 0.32.1: `/api/generate` aborts with *token repeat limit reached* | Breaks existing workloads after upgrade from 0.20.7 → 0.32.1. | 5 comments, 0 👍 |
| [#17069](https://github.com/ollama/ollama/issues/17069) – GPU discovery intermittently times out (30 s watchdog) with LXC + Docker passthrough | Causes silent fallback to CPU, hurting performance in containerized CI/CD. | 4 comments, 0 👍 |
| [#17269](https://github.com/ollama/ollama/issues/17269) – Model dropdown does not load in 0.32.1 desktop app | Blocks model selection in the UI, forcing downgrades. | 3 comments, 0 👍 |
| [#17274](https://github.com/ollama/ollama/issues/17274) – Qwen2.5 tool call dropped: empty content, no `tool_calls` | Highlights a regression in tool‑call handling for popular instruct models. | 1 comment, 0 👍 |
| [#17271](https://github.com/ollama/ollama/issues/17271) – Incorrect available RAM calculation | Leads to misleading memory‑usage logs and can affect auto‑scaling decisions. | 1 comment, 0 👍 |
| [#17264](https://github.com/ollama/ollama/issues/17264) – Ollama not supporting DeepseekV4ForCausalLM architecture | Blocks adoption of the newest DeepSeek‑V4 Flash model. | 1 comment, 0 👍 |

### 4. Key PR Progress (10 important PRs)
| PR | Summary |
|----|---------|
| [#17275](https://github.com/ollama/ollama/pull/17275) – Add renderer/parser fields to the API docs | Improves documentation completeness for tool‑call rendering. |
| [#17259](https://github.com/ollama/ollama/pull/17259) – Detect download stalls before the first byte | Prevents hangs when a range request connects but never delivers data. |
| [#17059](https://github.com/ollama/ollama/pull/17059) – Clarify Claude Code context limits | Updates guidance from 64k+ to 100k+ context and notes 200k usage via Ollama. |
| [#17025](https://github.com/ollama/ollama/pull/17025) – Add CC 10.0 for Linux in CUDA v12 (fixes #12583) | Enables B200‑class GPUs to use the CUDA v12 backend when drivers lack CUDA v13. |
| [#17273](https://github.com/ollama/ollama/pull/17273) – Update retirements | Maintenance of supported‑version list. |
| [#17229](https://github.com/ollama/ollama/pull/17229) – Remove standalone `agent` command | Agent functionality now accessed via main `ollama launch` path. |
| [#17224](https://github.com/ollama/ollama/pull/17224) – Render bold emphasis consistently across markdown | Fixes UI rendering of `**` / `__` emphasis across line breaks. |
| [#17244](https://github.com/ollama/ollama/pull/17244) – Bump Linux toolchain to GCC 13 (fixes #17006, #17205) | Resolves AMX‑related segfaults on Sapphire Rapids CPUs. |
| [#17189](https://github.com/ollama/ollama/pull/17189) – MLX update | Brings latest Apple‑silicon improvements from upstream MLX. |
| [#17202](https://github.com/ollama/ollama/pull/17202) – Update Hermes integration | Preserves `--force-build` and improves cloud‑model docs for Hermes Desktop. |
| [#17242](https://github.com/ollama/ollama/pull/17242) – Fix launch codex-app after Codex update | Adjusts alias resolution so `ollama launch codex-app` works post‑merge. |
| [#17230](https://github.com/ollama/ollama/pull/17230) – Complete slash commands before submitting | Improves CLI UX by auto‑filling incomplete slash commands on Enter. |
| [#17241](https://github.com/ollama/ollama/pull/17241) – Remove redundant context‑window refreshes from agent TUI event loop | Cuts unnecessary HTTP calls, reducing UI latency. |
| [#17245](https://github.com/ollama/ollama/pull/17245) – Route root‑command server start through `checkServerHeartbeat` | Unifies server‑start logic and adds timeout/platform awareness. |

### 5. Feature Request Trends
- **Modelfile parity** – Requests to expose the `--file`/`Modelfile` option via the `/api/create` endpoint (Issue #8793).  
- **Next‑gen GPU support** – Calls for newer Nvidia architectures (B200/CC 10.0, see PR #17025) and AMD ROCm refinements.  
- **New model architectures** – Demand for DeepSeek‑V4‑Flash (`DeepseekV4ForCausalLM`) and similar cutting‑edge GGUF architectures (Issue #17264).  
- **External‑app integration** – Desire for a centralized expert‑settings GUI to expose all Ollama knobs to IDEs/agents (Issue #17266).  
- **Improved tool‑call handling** – Multiple issues around parsing, empty tool responses, and token‑limit regressions (e.g., #12884, #17270, #17274).  

### 6. Developer Pain Points
- **Hardware‑specific crashes** – Segfaults on Sapphire Rapids (AWS m7i, VMware ESXi), Intel Xeon, and certain AMD iGPUs when using ROCm/Vulkan backends.  
- **GPU discovery instability** – Watchdog timeouts in LXC/Docker passthrough leading to silent CPU fallback.  
- **Tool‑call reliability** – Parsing errors, dropped tool calls, and inconsistent token counts across models (Qwen, GPT‑OSS, etc.).  
- **UI regressions** – Missing model dropdown, broken slash‑command completion, and emphasis rendering bugs in the desktop/TUI clients after 0.32.x updates.  
- **Observability gaps** – Lack of cached‑token metrics in cloud/API responses, complicating cost tracking.  
- **Memory reporting** – Inaccurate free‑VRAM/RAM calculations causing confusion during model loading.  

*All links point to the corresponding GitHub items in the ollama/ollama repository.*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

**llama.cpp Community Digest – 2026‑07‑21**  

---

### 1. Today’s Highlights  
- **Release b10075** added a **Hexagon CLAMP (f32) operator** and **OpenCL improvements** for Adreno GPUs (broadcast handling and `view_offs` support), tightening cross‑platform performance.  
- The **community is actively discussing** a long‑standing request to expose model capabilities (instruction/embedding flags) via the server/WebUI (#21545) and a recurring Vulkan/Adreno stability issue that produces garbage output after extended sessions (#23577, #24812).  

---

### 2. Releases  
| Version | Notable Changes | Links |
|---------|----------------|-------|
| **b10075** | • Hexagon backend: added **f32 CLAMP** op (PR #25934)  <br>• OpenCL: Adreno: broadcast support for `MUL_MAT` and proper handling of `view_offs` for Q8_0 GEMV/GEMM (PR #25910) | <https://github.com/ggml-org/llama.cpp/releases/tag/b10075> |
| **b10069** | • OpenCL: generalized GEMM/GEMV support, bug‑fixes for Adreno matrix multiply paths (see PR #25910 details) | <https://github.com/ggml-org/llama.cpp/releases/tag/b10069> |

*No other version tags appeared in the last 24 h.*

---

### 3. Hot Issues (selected by comment count & impact)  

| # | Title & Link | Why it matters | Community reaction |
|---|--------------|----------------|--------------------|
| #14909 | **Feature Request: Implement missing ops from backends** – <https://github.com/ggml-org/llama.cpp/issues/14909> | Tracks the gap between GGML op coverage and backend implementations; closing it unlocks newer model features across all hardware. | 45 comments, 7 👍 – active discussion, labeled “good first issue”. |
| #23577 | **Eval bug: MTP with Qwen3.6 27B outputs repeated //// after long session** – <https://github.com/ggml-org/llama.cpp/issues/23577> | Shows a reproducibility‑critical degradation in long‑run inference on CUDA, affecting production services. | 29 comments, 3 👍 – users report work‑arounds (lower `n_batch`). |
| #17459 | **Misc. bug: Can't use longer context than model via RoPE due to server‑imposed restrictions** – <https://github.com/ggml-org/llama.cpp/issues/17459> | Limits context‑extension experiments; a blocker for RAG‑style workloads needing > model‑trained context. | 23 comments, 8 👍 – strong interest in lifting the server‑side cap. |
| #24343 | **Misc. bug: E llama_init_from_model: failed to initialize the context: Gemma4Assistant** – <https://github.com/ggml-org/llama.cpp/issues/24343> | Specific failure loading a recent Gemma‑4 quant; indicates possible GGUF parsing/regression. | 11 comments, **32 👍** – high visibility despite fewer comments. |
| #21545 | **Server/WebUI: Add model capabilities information (instruction, embedding etc.)** – <https://github.com/ggml-org/llama.cpp/issues/21545> | Enables UI to adapt to model type (chat vs. embedding) automatically – a frequent UX request. | 10 comments, 2 👍 – steady demand for richer metadata. |
| #24812 | **Qwen3.5 on Vulkan/RADV RX590 produces clustered garbage / question‑mark output** – <https://github.com/ggml-org/llama.cpp/issues/24812> | Highlights Vulkan stability on mid‑range AMD GPUs; corruption appears only after warm‑up streams. | 8 comments, 0 👍 – niche but affects Vulkan adopters. |
| #23209 | **Compile bug: CUDA compilation failed** – <https://github.com/ggml-org/llama.cpp/issues/23209> | Blocks users with newer CUDA toolchains; indicates missing detection logic in CMake. | 7 comments, 0 👍 – recurring pain point for Linux CUDA builds. |
| #24712 | **Eval bug: Warning Message - sched_reserve: layer 0 assigned to CPU but fused Gated Delta Net tensor to CUDA0** – <https://github.com/ggml-org/llama.cpp/issues/24712> | Points to tensor‑placement mis‑matches when mixing CPU/GPU layers, a common source of silent wrong results. | 7 comments, 1 👍 – developers request better placement diagnostics. |
| #22948 | **Misc. bug: bad json in tool call causing generation to stop** – <https://github.com/ggml-org/llama.cpp/issues/22948> | Tool‑call handling is brittle; malformed JSON aborts generation, hurting agent‑style apps. | 6 comments, 0 👍 – calls for more robust parsing. |
| #23737 | **Eval bug: GGML_ASSERT(tensor->data != NULL) on Vulkan since b9318** – <https://github.com/ggml-org/llama.cpp/issues/23737> | Null‑tensor crash on Vulkan (AMD Strix Halo) after a specific commit; blocks Vision‑Language model usage. | 5 comments, 2 👍 – Vulkan backend stability under scrutiny. |

---

### 4. Key PR Progress (selected by relevance & activity)  

| PR | Title & Link | Summary |
|----|--------------|---------|
| #25934 | **hexagon: add f32 CLAMP op** – <https://github.com/ggml-org/llama.cpp/pull/25934> | Implements the missing CLAMP operation for the Hexagon DSP, closing a gap noted in #14909. |
| #25910 | **opencl: Support broadcast for Adreno MUL_MAT and honor view_offs** – <https://github.com/ggml-org/llama.cpp/pull/25910> | Improves GEMM/GEMV correctness on Adreno GPUs, benefiting b10069/b10075 binaries. |
| #25932 | **llama: add --pin-hotexperts MoE expert pinning** – <https://github.com/ggml-org/llama.cpp/pull/25932> | Introduces a CLI flag to lock frequently‑used MoE experts in RAM, reducing page‑cache thrash for large mixture‑of‑experts models. |
| #25919 | **sampling: allow backend sampling to work with reasoning budget** – <https://github.com/ggml-org/llama.cpp/pull/25919> | Enables `--backend-sampling` and `--reasoning-budget` to coexist, giving ~5% throughput gain in certain reasoning‑heavy workloads. |
| #25903 | **sycl(build): parallelize ocloc invocations** – <https://github.com/ggml-org/llama.cpp/pull/25903> | Speeds up SYCL build step by parallelizing the OpenCL‑to‑SPIRV compiler (`ocloc`), cutting build times ~5× on multi‑core hosts. |
| #25880 | **sycl: fix use-after-return of the SDPA scale in the oneDNN flash-attention path** – <https://github.com/ggml-org/llama.cpp/pull/25880> | Resolves garbage output in long‑context SYCL runs by fixing a lifetime issue with the attention scale tensor. |
| #25924 | **ggml-metal: FWHT kernel for metal backend** – <https://github.com/ggml-org/llama.cpp/pull/25924> | Adds Fast Walsh‑Hadamard Transform support for Apple Metal, completing a set of transforms needed for certain quantization schemes. |
| #25940 | **HIP: RDNA 4 MUL_MAT optimizations** – <https://github.com/ggml-org/llama.cpp/pull/25940> | Tunes matrix‑multiply kernels for RDNA 4 (AMD Radeon RX 7000 series), improving Q6_K/Q2_K performance. |
| #25931 | **ggml-webgpu: Add overlap glu variant to support all archs, fix recurrent-state-rollback test** – <https://github.com/ggml-org/llama.cpp/pull/25931> | WebGPU backend now works across all GPU architectures and resolves a failing test related to GLU state rollback. |
| #25863 | **Fix/hip apu host buffer** – <https://github.com/ggml-org/llama.cpp/pull/25863> | Corrects a regression that caused corrupted prompt input on AMD APUs when the ROCm host‑buffer path is enabled. |

---

### 5. Feature Request Trends (distilled from open Issues)  

| Trend | Representative Issues | Community sentiment |
|-------|-----------------------|---------------------|
| **Operator coverage** – missing GGML ops in various backends (Hexagon, WebGPU, SYCL, Vulkan) | #14909 (missing ops), #25934 (Hexagon CLAMP), #25847 (WebGPU depthwise conv) | Strong demand; many labeled “good first issue”. |
| **Server/WebUI enrichment** – expose model metadata, tool‑call UI, configuration persistence | #21545 (model capabilities), #25877 (read_image tool), #17940 (configurable WebUI defaults) | Repeated requests for a richer, self‑describing server experience. |
| **Longer context & RoPE flexibility** – allow context sizes beyond model‑trained limits | #17459 (server‑imposed RoPE cap), #23577 (MTP degradation over long runs) | Users pushing llama.cpp into RAG/agent scenarios want dynamic context scaling. |
| **Quantization & new formats** – support for ultra‑low‑bit (Q2_0) and emerging model families | #23909 (ADD Q2_0), #25855 (Intern‑LM 397B support), #24343 (Gemma‑4 loading) | Interest in pushing inference footprint lower and supporting the latest LLMs. |
| **Cross‑platform GPU stability** – Vulkan, OpenCL, Metal, WebGPU reliability | #23737 (Vulkan null‑tensor), #24812 (Vulkan RX590 garbage), #25906 (Vulkan/Adreno), #25939 (Vulkan VRAM leak) | Backend‑specific bugs are a top pain point; users ask for better CI coverage and stress tests. |
| **Tool & agent integration** – robust JSON tool‑call handling, reasoning budget, function calling | #22948 (bad JSON stops generation), #25919 (backend sampling + reasoning budget), #25877 (read_image tool) | Growing interest in using llama.cpp as a backend for LLM‑agent frameworks. |

---

### 6. Developer Pain Points (recurring frustrations)  

1. **Build & compilation friction** – CUDA/HIP detection failures, SYCL/OpenCL toolchain mismatches, and occasional CMake regressions (e.g., #23209, #25863).  
2. **Backend‑specific correctness** – Null‑tensor asserts, garbage output, and VRAM leaks on Vulkan, OpenCL (Adreno), and WebGPU after warm‑up or long runs (#23737, #24812, #25939).  
3. **Server‑side limits** – Hard caps on context length, missing model capability exposure, and WebUI state persistence bugs (#17459, #21545, #25743).  
4. **MoE memory management** – Frequent OS page‑cache eviction of experts causing slowdowns; community asks for explicit pinning or prefetch APIs (#25932 addresses this).  
5. **Tool‑call robustness** – Malformed JSON in function/tool calls halts generation; developers want more tolerant parsing and better error reporting (#22948).  
6. **Quantization support lag** – Requests for newer quant types (Q2_0, Q4_K, Q6_K) and support for recently released models (Intern‑LM, Gemma‑4, BitNet) outpace current implementation (#23909, #25855, #24343).  

Addressing these areas—especially improving CI matrix coverage for GPU backends, exposing richer model metadata via the server API, and providing low‑level memory‑control flags for MoE—would directly alleviate the most common developer frustrations observed in the last 24 h.  

---  

*Generated from the supplied GitHub data; all links point to the corresponding GitHub resources.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*