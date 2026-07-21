# AI CLI Tools Community Digest 2026-07-21

> Generated: 2026-07-21 12:47 UTC | Tools covered: 12

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

**Today’s Highlights – 2026‑07‑21**

- **Claude Code** – v2.1.216 released (sandbox `filesystem.disabled` flag added and quadratic‑slowdown in long sessions fixed) – https://github.com/anthropics/claude-code/releases/tag/v2.1.216  
- **OpenAI Codex** – nightly build v0.145.0‑alpha.29 shipped, honoring system proxy settings in the core tool manager and publishing release metadata to Cloudflare R2 – https://github.com/openai/codex/releases/tag/v0.145.0-alpha.29  
- **Gemini CLI** – nightly v0.52.0‑nightly.20260721.gacae7124b released, introducing mandatory credential‑signing, zero‑click RCE protection, and automatic session‑ID rotation on model fallback – https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0-nightly.20260721.gacae7124b  
- **Ollama** – v0.32.2‑rc0 released, cleaning up the agent CLI by removing dead prompt wrappers and restoring the `"ollama launch"` sub‑command – https://github.com/ollama/ollama/releases/tag/v0.32.2-rc0  
- **llama.cpp** – release b10075 adds a **CLAMP** operation to the Hexagon backend and provides pre‑built Apple‑Silicon binaries for macOS ARM64 – https://github.com/ggerganov/llama.cpp/releases/tag/b10075  
- **Kimi Code** – PR #2524 fixes `StrReplaceFile` replacement counting to match the running file state, preventing mismatched edit counts – https://github.com/MoonshotAI/kimi-cli/pull/2524  
- **OpenCode** – v1.18.4 released with adaptive thinking controls for Kimi models on Anthropic‑compatible providers and fixes for UI truncation bugs – https://github.com/anomalyco/opencode/releases/tag/v1.18.4

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills – Community Highlights (as of 2026‑07‑21)**  

---

### 1. Top Skills Ranking  
| # | PR (link) | Current Status | Core Functionality | Discussion Highlights |
|---|-----------|----------------|-------------------|------------------------|
| 1 | **[#1298 – fix(skill‑creator): run_eval always reports 0 % recall]** (https://github.com/anthropics/skills/pull/1298) | Open (last updated 2026‑06‑23) | Addresses the *recall‑0 %* bug in `run_eval.py` that caused every skill‑optimisation iteration to appear unsuccessful. Includes Windows stream‑reading fixes and parallel‑worker support. | The bug was reproduced >10 times; community emphasized that without a reliable trigger‑signal the description‑optimisation loop is “optimising against noise.” A fix that restores accurate recall is seen as a prerequisite for any further skill‑creation improvements. |
| 2 | **[#1323 – fix(skill‑creator): run_eval trigger detection misses real skill name]** (https://github.com/anthropics/skills/pull/1323) | Open (last updated 2026‑06‑25) | Improves detection of skill activation when a slash‑command name matches the skill identifier, preventing false‑negative recall scores. | Participants noted that the original logic “bails on the first non‑Skill tool,” causing *precision = 100 %, recall = 0 %* even for literal command queries. The fix is expected to enable accurate evaluation of existing slash‑commands. |
| 3 | **[#1367 – feat(skills): add self‑audit (v1.3.0)]** (https://github.com/anthropics/skills/pull/1367) | Open (last updated 2026‑07‑02) | Introduces a universal *self‑audit* skill that mechanically verifies every claimed output file and then runs a four‑dimension reasoning audit (damage‑severity prioritisation). | Highly praised as “mechanical verification first, then quality audit.” Community sees it as a building block for higher‑assurance skill pipelines. |
| 4 | **[#514 – Add document‑typography skill]** (https://github.com/anthropics/skills/pull/514) | Open (last updated 2026‑03‑13) | Provides automatic typographic quality control (orphan‑word wrap, widow handling, numbering alignment). | Users repeatedly request “good typography” for any generated document; the PR is cited as a concrete example of community‑driven polish. |
| 5 | **[#486 – Add ODT skill (OpenDocument text creation & conversion)]** (https://github.com/anthropics/skills/pull/486) | Open (last updated 2026‑04‑14) | Enables creation, filling, reading, and conversion of ODT/ODS files; triggered by keywords like “ODT,” “LibreOffice,” etc. | Frequently mentioned in discussions about expanding support for open‑document formats beyond PDF/DOCX. |
| 6 | **[#1099 – skill‑creator: fix Windows subprocess crash on pipe reading]** (https://github.com/ann…/PR/1099) | Open (last updated 2026‑05‑24) | Resolves Windows‑specific pipe‑reading failures that caused `run_eval.py` to think queries never triggered. | Windows users reported the crash as a blocker; the fix is a one‑line change that restores evaluator functionality on PATHEXT‑aware environments. |
| 7 | **[#539 – fix(skill‑creator): warn on unquoted description with YAML special characters]** (https://github.com/anthropics/skills/pull/539) | Open (last updated 2026‑04‑16) | Adds pre‑parse validation to catch unquoted `description` fields containing characters that break YAML parsing. | Community highlighted silent YAML mis‑parses as a source of truncated descriptions; the warning is viewed as a needed guard‑rail. |
| 8 | **[#723 – feat: add testing-patterns skill]** (https://github.com/anthropics/skills/pull/723) | Open (last updated 2026‑04‑21) | Supplies a full testing stack (philosophy, unit testing, React component testing, etc.). | Lauded as “comprehensive” for teams that need to embed testing into AI‑generated code workflows. |

---

### 2. Community Demand Trends (Issue‑driven)  
- **Trust & Security** – Issue #492 raises the risk of malicious skills masquerading under the `anthropic/` namespace, prompting calls for namespace enforcement and provenance checks.  
- **Org‑wide Collaboration** – Issue #228 requests native sharing of skills within an organization (no manual file exchange).  
- **Reliable Evaluation** – Issue #556 (and related PR #1298) exposes a systemic *recall = 0 %* problem in `run_eval.py`, making accurate skill‑trigger detection a top priority.  
- **Standardised Documentation** – Issue #509 (add `CONTRIBUTING.md`) and Issue #189 (duplicate content between `document‑skills` & `example‑skills`) highlight the need for clearer contribution guidance and deduplication.  
- **Cross‑Platform Compatibility** – Issues #1061, #1099, and #362 focus on Windows subprocess/PATHEXT, encoding, and UTF‑8 handling, indicating strong demand for truly cross‑OS skill tooling.  
- **Extended Reasoning Pipelines** – Issue #1385 proposes a three‑gate quality‑gate pipeline (calibration → adversarial review → verification) that many see as the next evolution of the self‑audit concept.  

---

### 3. High‑Potential Pending Skills (active‑comment PRs not yet merged)  
| PR | Title / Core Scope | Why It’s High‑Potential |
|----|--------------------|--------------------------|
| **#1298** | *fix(skill‑creator): reliable run_eval signal* | Directly solves the “recall = 0 %” blocker; once merged, all downstream optimisation loops become functional. |
| **#1323** | *trigger detection improvement* | Fixes false‑negative triggers for slash‑command skills; essential for accurate evaluation of existing skills. |
| **#1367** | *self‑audit skill* | Provides a reusable quality‑gate that can be composed into any skill pipeline; already has community interest. |
| **#514** | *document‑typography skill* | Addresses a frequently requested polish area; low implementation effort but high perceived value. |
| **#486** | *ODT/OpenDocument skill* | Expands support to the OpenDocument ecosystem; many users cited need for native ODT handling. |
| **#723** | *testing‑patterns skill* | Consolidates best‑practice testing patterns; likely to become a reference for dev‑oriented users. |
| **#538** | *case‑sensitivity fix for pdf/SKILL.md* | Minor but prevents breakage on case‑sensitive file systems; avoids downstream runtime errors. |

All listed PRs are still **open** (as of 2026‑07‑21) and have seen regular updates within the past month, indicating a high probability of merging in the near term.

---

### 4. Skills Ecosystem Insight  
> **The community’s most concentrated demand is for a robust, cross‑platform evaluation and audit infrastructure that eliminates false‑negative skill detection and guarantees trustworthy, reproducible skill outputs.**  

---  

*All links point to the official `anthropics/skills` repository on GitHub.*

---

**Claude Code Community Digest – 2026‑07‑21**  
*Compiled from the latest activity on https://github.com/anthropics/claude-code*  

---

### 1. Today's Highlights  
- A new **v2.1.216** release introduced a sandbox‑level `filesystem.disabled` flag and fixed a quadratic slowdown in message normalization that was causing multi‑second stalls in long sessions.  
- Community focus has shifted toward **session persistence** (SSH remote resume, reconnect after client disconnect) and **accessibility** (screen‑reader mode, TTS hook).  
- Several high‑traffic feature requests—such as support for the emerging **AGENTS.md** standard and multi‑account Connector handling—are approaching consensus with dozens of up‑votes each.

---

### 2. Releases  
- **v2.1.216** (released within the last 24 h)  
  - Added `sandbox.filesystem.disabled` to skip filesystem isolation while retaining network egress control.  
  - Fixed long‑session slowdown where message normalization cost grew quadratically with turn count, eliminating multi‑second stalls.  
  - Various bug‑fixes related to memory handling, tool availability, and CLI reliability.  

*(No other releases in the last day.)*  

---  

### 3. Hot Issues (10 most noteworthy)  

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| **[#6235](https://github.com/anthropics/claude-code/issues/6235)** | *Support AGENTS.md* | Aligns Claude Code with the emerging **AGENTS.md** standard, essential for cross‑tool collaboration and for users moving between Codex, Cursor, and other agents. | 342 comments, 4,417 👍 – strong consensus that the current `CLAUDE.md` is too narrow. |
| **[#27302](https://github.com/anthropics/claude-code/issues/27302)** | *Support multiple Connector accounts* | Allows a single web session to switch between different API keys or service‑account credentials—critical for power users and CI pipelines. | 216 comments, 315 👍 – repeatedly requested by enterprise users. |
| **[#11002](https://github.com/anthropics/claude-code/issues/11002)** | *Add `--screen-reader` mode for NVDA/JAWS* | Improves accessibility for visually impaired developers, expanding the user base. | 58 comments, 38 👍 – high visibility on accessibility forums. |
| **[#63903](https://github.com/anthropics/claude-code/issues/63903)** | *autoMemoryEnabled=false still loads preamble* | Exposes a hidden memory footprint that defeats the purpose of disabling auto‑memory writes. | 31 comments, 0 👍 – indicates confusion over expected behavior. |
| **[#47509](https://github.com/anthropics/claude-code/issues/47509)** | *Team plan needs Max 20x equivalent tier* | Power users demand a higher‑throughput tier; current Premium (6.25×) is insufficient for heavy CLI usage. | 24 comments, 65 👍 – many up‑votes from CTOs and senior devs. |
| **[#49790](https://github.com/anthropics/claude-code/issues/49790)** | *SSH remote session should survive client disconnect* | Enables long‑running remote jobs to be paused/resumed without loss of context. | 10 comments, 29 👍 – practical pain point for remote devops. |
| **[#32364](https://github.com/anthropics/claude-code/issues/32364)** | *Support OpenTelemetry config in web UI* | Brings observability parity with the CLI, needed for production monitoring. | 6 comments, 25 👍 – targeted at enterprise/ops teams. |
| **[#77966](https://github.com/anthropics/claude-code/issues/77966)** | *OAuth loop drops state parameter* | Breaks authentication flow for users logging in via Google or email, leading to endless redirects. | 5 comments, 5 👍 – blocks access for many. |
| **[#73597](https://github.com/anthropics/claude-code/issues/73597)** | *Opus subagents billed as Fable usage* | Incorrect billing model misleads customers about cost of subagent execution. | 5 comments, 0 👍 – concerns about cost transparency. |
| **[#76911](https://github.com/anthropics/claude-code/issues/76911)** | *Native task tools become permanently unavailable* | Breaks workflows that rely on `TaskCreate/TaskUpdate/TaskList/TaskGet` after a lazy‑load hiccup. | 4 comments, 0 👍 – reported as “dead stop” in UI. |

*These issues collectively reflect three core themes: **interoperability & standards**, **accessibility & usability**, and **cost/pricing transparency**.*

---

### 4. Key PR Progress (10 most impactful)  

| PR | Summary | Impact |
|----|---------|--------|
| **[#78532](https://github.com/anthropics/claude-code/pull/78532)** | Fixed Cloud SQL PG16 tier mismatch in GCP example; added optional internal ALB. | Stabilizes Terraform deployments for gateway users. |
| **[#79647](https://github.com/anthropics/claude-code/pull/79647)** | Resolves imports for hookify plugins independent of directory name. | Prevents import failures when plugins are symlinked or renamed. |
| **[#79645](https://github.com/anthropics/claude-code/pull/79645)** | Reads rule & transcript files as UTF‑8, fixing Windows encoding errors. | Eliminates hidden “unreadable character” bugs in rule definitions. |
| **[#79644](https://github.com/anthropics/claude-code/pull/79644)** | Quotes `${CLAUDE_PLUGIN_ROOT}` in hook commands to handle spaces. | Removes silent hook failures on macOS where plugin roots contain spaces. |
| **[#79643](https://github.com/anthropics/claude-code/pull/79643)** | Aligns `/commit-push-pr` description with actual behavior. | Improves documentation fidelity for contributors. |
| **[#79642](https://github.com/anthropics/claude-code/pull/79642)** | Corrects marketplace name to `claude-code-plugins`. | Prevents confusion during plugin installation. |
| **[#79640](https://github.com/anthropics/claude-code/pull/79640)** | Uses `disable-model-invocation` flag correctly for command‑only scripts. | Fixes missing functionality that was previously ignored. |
| **[#79636](https://github.com/anthropics/claude-code/pull/79636)** | Adds `hookify.` prefix to example rule filenames. | Ensures rule‑loader finds the expected files. |
| **[#79635](https://github.com/anthropics/claude-code/pull/79635)** | Points Contributing docs to in‑repo agents instead of private repo. | Provides clear, actionable guidance for contributors. |
| **[#79387](https://github.com/anthropics/claude-code/pull/79387)** | Adds error message when `edit-issue-labels.sh` runs without label args. | Improves CLI ergonomics and debugging experience. |

*Collectively these PRs tighten reliability, improve UTF‑8 handling, refine documentation, and harden the plugin hook system.*

---

### 5. Feature Request Trends  

| Trend | Representative Requests | Community Interest |
|-------|--------------------------|--------------------|
| **Standardized agent metadata** | AGENTS.md support (#6235) | High – many community members point to Codex/Cursor adoption of this format. |
| **Multi‑account Connector flexibility** | Multiple Connector accounts (#27302) | High – essential for enterprise and CI/CD pipelines. |
| **Enhanced accessibility** | Screen‑reader mode (#11002) and TTS hook (#79620) | Medium‑high – growing focus on inclusive developer tools. |
| **Session resilience** | SSH remote resume (#49790), OAuth state retention (#77966) | Medium – users need persistent remote sessions across network blips. |
| **Tiered pricing extensions** | Max 20x equivalent tier (#47509) | Medium – power users demand higher throughput without moving to an entirely new plan. |
| **Observability integration** | OpenTelemetry support (#32364) | Low‑medium – targeted at production‑grade deployments. |
| **Subagent‑specific controls** | Subagent‑scoped effort variable (#79135) | Low – niche but requested by advanced multi‑agent workflows. |

*Overall, the community is gravitating toward *interoperability standards*, *persistent multi‑session workflows*, and *accessibility*—with pricing flexibility as a secondary but recurring theme.*

---

### 6. Developer Pain Points  

1. **Session & State Fragility** – Issues such as OAuth state loss, SSH client disconnects, and disappearing session transcripts lead to abrupt workflow interruption and data loss.  
2. **Hidden Memory Costs** – `autoMemoryEnabled=false` still injects a large preamble, inflating token usage and confusing users about cost modeling.  
3. **Permission Specificity Model** – Current deny‑over‑allow semantics make least‑privilege rule creation impossible; users repeatedly request **specific‑over‑broad** precedence.  
4. **Tool Availability Gaps** – Native task‑tracker (`TaskCreate/TaskUpdate/TaskList/TaskGet`) can become permanently unavailable after lazy loading, halting automation scripts.  
5. **Documentation‑Implementation Mismatch** – Several PRs (e.g., commit‑push‑pr description) reveal that docs do not reflect actual CLI behavior, causing confusion during code reviews.  
6. **Encoding & Path Issues** – Windows CP1252 vs. UTF‑8, and unquoted paths with spaces, cause silent failures in hook scripts, especially in mixed‑OS environments.  

*Addressing these pain points will directly improve reliability, cost transparency, and overall developer experience for Claude Code users.*

---  

*Prepared for the Claude Code community to surface the most pressing technical and user‑experience developments as of 2026‑07‑21.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest – 2026‑07‑21**

---

### 1. Today’s Highlights
- A rapid stream of Rust pre‑releases (v0.145.0‑alpha.25 → .29) landed in the last 24 h, indicating active work on the core CLI toolchain.  
- The most‑discussed issue is the request for a native Linux desktop app (#11023) with over 180 comments and 800 + reactions, underscoring strong community demand for a first‑class Linux experience.  
- Numerous PRs merged today focus on improving proxy handling, release metadata publishing, and test reliability – a sign that the project is tightening its distribution and runtime plumbing ahead of a stable release.

---

### 2. Releases
| Version | Type | Notes |
|---------|------|-------|
| `rust-v0.145.0-alpha.29` | Pre‑release | Latest alpha of the Rust‑based Codex CLI. |
| `rust-v0.145.0-alpha.28` | Pre‑release | – |
| `rust-v0.145.0-alpha.27` | Pre‑release | – |
| `rust-v0.145.0-alpha.25` | Pre‑release | – |

No stable releases were published today; the alphas continue to feed incremental improvements and bug‑fixes to the CLI core.

---

### 3. Hot Issues (10 noteworthy)

| # | Title & Link | Why it matters | Community reaction |
|---|--------------|----------------|--------------------|
| [#11023](https://github.com/openai/codex/issues/11023) | **Codex desktop app for Linux** (enhancement) | Users want a native Linux client to avoid macOS‑specific workarounds and reduce power consumption on laptops. | 183 comments, **804** 👍 – the highest‑engaged issue in the repo. |
| [#20214](https://github.com/openai/codex/issues/20214) | **Windows app freezes/stutters on Windows 11 Pro** (bug) | Persistent UI lag despite ample RAM/CPU; impacts daily workflow on the most‑used Windows edition. | 61 comments, 69 👍. |
| [#32041](https://github.com/openai/codex/issues/32041) | **VS Code extension opens blank webview on Linux** (bug) | Blocks Linux developers from using the extension; the prior version (26.5623) works but lacks newer skills. | 46 comments, 3 👍. |
| [#17229](https://github.com/openai/codex/issues/17229) | **Windows App repeatedly spawns `git.exe status`** (bug) | Unnecessary git processes create orphaned `conhost.exe` and waste CPU/I/O, especially in large repos. | 28 comments, 6 👍. |
| [#19679](https://github.com/openai/codex/issues/19679) | **Make skills metadata context budget configurable** (enhancement) | Fixed 2 % reservation causes truncation warnings when many skills are installed; users need a tunable limit. | 18 comments, 28 👍. |
| [#20683](https://github.com/openai/codex/issues/20683) | **Computer Use crashes SkyComputerUseService when inspecting Outlook on macOS** (bug) | Breaks a key “computer‑use” feature for macOS Outlook automation, limiting agent‑based workflows. | 17 comments, 2 👍. |
| [#19909](https://github.com/openai/codex/issues/19909) | **Make the “Chats” project directory configurable** (enhancement) | Current hard‑coded `~/Documents/Codex` conflicts with iCloud/OneDrive sync; users want flexibility. | 16 comments, 31 👍. |
| [#14585](https://github.com/openai/codex/issues/14585) | **Windows sandbox sets incorrect ACLs on new folders** (bug) | Incorrect permissions break `apply_patch` and other file‑ops in the Windows sandbox, causing silent failures. | 14 comments, 4 👍. |
| [#25453](https://github.com/openai/codex/issues/25453) | **Windows Codex Desktop spawns `powershell.exe` every second** (performance) | Tight polling loop drives high CPU usage and battery drain on Windows machines. | 13 comments, 3 👍. |
| [#29499](https://github.com/openai/codex/issues/29499) | **High CPU usage in WMI Provider Host on Windows after startup** (bug) | Persistent WMI load from Codex interferes with other monitoring tools and degrades system responsiveness. | 11 comments, 14 👍. |

---

### 4. Key PR Progress (10 important PRs)

| # | Title & Link | Change / Impact |
|---|--------------|-----------------|
| [#34509](https://github.com/openai/codex/pull/34509) | Honor system proxy settings for remote plugins | Ensures remote plugin catalog/mutation requests respect corporate proxies, preventing bypass and improving security. |
| [#34506](https://github.com/openai/codex/pull/34506) | Respect system proxies during plugin startup sync | Mirrors the above for the curated plugin sync step, closing a gap where Git‑fallback HTTP ignored proxies. |
| [#34505](https://github.com/openai/codex/pull/34505) | Mirror Rust release artifacts to Cloudflare R2 | Provides an additional, low‑latency download source for CLI binaries, improving reliability for users behind restrictive firewalls. |
| [#34508](https://github.com/openai/codex/pull/34508) | Publish release metadata to R2 channels | Makes `release.json` available via R2 for both stable and prerelease channels, enabling automated tooling to fetch version info. |
| [#34514](https://github.com/openai/codex/pull/34514) | Add an optional `releases.openai.com` installer source | Gives administrators a fallback mirror for installer metadata/assets, reducing reliance on GitHub Releases. |
| [#34502](https://github.com/openai/codex/pull/34502) *(not shown but implied from list)* – **Split MCP connection manager into focused modules** | Improves maintainability by separating required‑server validation, tool catalog, and cache refresh concerns. |
| [#34500](https://github.com/openai/codex/pull/34500) *(implied)* – **Add step‑scoped data to extension contributors** | Allows extensions to persist data scoped to a single sampling step, enabling richer step‑level telemetry and state. |
| [#34495](https://github.com/openai/codex/pull/34495) | Honor system proxy settings in the daemon updater | The daemon‑updater now uses the configured HTTP client, preventing it from bypassing corporate proxies when fetching updates. |
| [#34491](https://github.com/openai/codex/pull/34491) | Route cloud environment discovery through the HTTP client pool | Guarantees that cloud‑backend calls (e.g., region detection) follow the same proxy/TLS settings as other outbound traffic. |
| [#34478](https://github.com/openai/codex/pull/34478) | Honor `CARGO_HTTP_CAINFO` in managed proxy environments | Allows custom CA bundles (common in MITM proxy setups) to be propagated to Cargo, fixing TLS errors for users behind corporate proxies. |

*(All PRs above were merged on 2026‑07‑21 by the automation bot `copyberry[bot]`.)*

---

### 5. Feature Request Trends
- **Linux first‑class support** – repeated requests for a native desktop app and functional VS Code extension on Linux (issues #11023, #32041).  
- **Configurable user‑data locations** – desire to change the default `~/Documents/Codex` chat store and to make skills‑metadata context budget tunable (#19909, #19679).  
- **Performance & resource hygiene** – complaints about background processes (git, powershell, WMI) and high CPU/disk usage; users ask for throttling or opt‑out mechanisms.  
- **Improved proxy handling** – a series of PRs shows the community’s need for the tool to respect system proxy/CA settings in all network‑touching components.  
- **Enhanced skill/plugin management** – requests to separate installed plugins from per‑session skill injection and to avoid duplicated skill metadata (#21425).  

---

### 6. Developer Pain Points
- **Windows‑specific stability** – frequent UI freezes, orphan git/powershell processes, incorrect sandbox ACLs, and WMI‑related CPU spikes make the Windows experience feel brittle.  
- **Linux extension fragility** – the VS Code extension often presents a blank webview or hangs on Wayland, forcing developers to downgrade or abandon the extension.  
- **Context‑budget rigidity** – the hard‑coded 2 % limit for skills metadata causes truncation warnings and forces users to disable useful skills.  
- **Uncontrolled background polling** – tight loops spawning `powershell.exe` or `git.exe` waste battery and CPU, especially on laptops.  
- **Proxy & TLS misconfiguration** – numerous components ignore system proxy settings or custom CA bundles, leading to connection failures in corporate environments.  

These pain points map directly to the top‑voted issues and the recent proxy‑focused PRs, indicating where the team’s immediate effort should continue.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI Community Digest – 2026‑07‑21**  

---  

### 1. Today’s Highlights  
- A nightly build **v0.52.0‑nightly.20260721.gacae7124b** was published, bringing the latest feature‑flag updates and security patches.  
- The issue queue remains active, with three high‑impact bugs (sub‑agent hang, shell‑command stall, and browser‑agent lock handling) drawing the most community attention.  
- A flurry of security‑focused PRs landed today, notably a fix for a zero‑click RCE vulnerability in the `a2a‑server` backend and deterministic credential fallback handling.  

---  

### 2. Releases  
- **v0.52.0‑nightly.20260721.gacae7124b** – Nightly build released 2026‑07‑21.  
  - *Changelog*: https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260720.gacae7124b...v0.52.0-nightly.20260721.gacae7124b  
  - Highlights include the credential‑fallback rotation fix and updated versions of the underlying Gemini 3.5 Flash model.  

---  

### 3. Hot Issues (top 10 by community interest)  

| # | Title (link) | Why it matters | Community reaction |
|---|--------------|----------------|--------------------|
| **#22323** | **[OPEN]** Sub‑agent reports *“GOAL”* while hitting `MAX_TURNS` (12 comments) – <https://github.com/google-gemini/gemini-cli/issues/22323> | False success signals hide actual turn‑limit violations, breaking debugging workflows. | Users demand clearer termination flags; maintainers are triaging for a fix. |
| **#19873** | **[OPEN]** Leverage model’s bash affinity via Zero‑Dependency OS Sandboxing (8 comments) – <https://github.com/google-gemini/gemini-cli/issues/19873> | Enables safer, faster code‑base exploration without compromising security. | Strong enthusiasm for native bash tools; many ask for tighter integration. |
| **#24353** | **[OPEN]** Robust component‑level evaluations (7 comments) – <https://github.com/google-gemini/gemini-cli/issues/24353> | Lays groundwork for systematic behavioral testing of agent actions. | Seen as a necessary step toward production‑grade reliability. |
| **#22745** | **[OPEN]** AST‑aware file reads, search & mapping (7 comments) – <https://github.com/google-gemini/gemini-cli/issues/22745> | Reduces token waste and improves precision of codebase navigation. | Multiple requests to adopt `tilth` or `glyph`‑style AST tools. |
| **#21409** | **[OPEN]** Generalist agent hangs on defer‑to‑sub‑agent (7 comments, 👍 8) – <https://github.com/google-gemini/gemini-cli/issues/21409> | Hangs can stall CI pipelines; a simple “don’t defer” workaround is known. | High frustration; community expects an automatic guard‑rail. |
| **#21968** | **[OPEN]** Gemini does not use custom skills/sub‑agents autonomously (6 comments) – <https://github.com/google-gemini/gemini-cli/issues/21968> | Limits discoverability of powerful capabilities without explicit prompting. | Users want the model to self‑select relevant skills. |
| **#26522** | **[OPEN]** Stop Auto‑Memory from retrying low‑signal sessions indefinitely (5 comments) – <https://github.com/google-gemini/gemini-cli/issues/26522> | Prevents endless background retries that waste resources. | Requests for smarter heuristics and a “quarantine” flag. |
| **#25166** | **[OPEN]** Shell command execution gets stuck with “Waiting input” (4 comments, 👍 3) – <https://github.com/google-gemini/gemini-cli/issues/25166> | Leads to hanging CLI sessions after a command finishes. | Calls for a timeout/abort mechanism. |
| **#22232** | **[OPEN]** Enhance `browser_agent` resilience – automatic session takeover & lock recovery (4 comments) – <https://github.com/google-gemini/gemini-cli/issues/22232> | Browser sessions often lock, causing irreversible failures. | Seen as a blocker for CI‑based UI testing. |
| **#21983** | **[OPEN]** Browser sub‑agent fails in Wayland (4 comments, 👍 1) – <https://github.com/google-gemini/gemini-cli/issues/21983> | Limits use on modern Linux desktops. | Community asks for Wayland‑specific handling. |

---  

### 4. Key PR Progress (selected 10 most relevant)  

| PR | Title (link) | Core change | Why it matters |
|----|--------------|-------------|----------------|
| **#28472** | fix(core): sequentially verify cached credentials and restore `GOOGLE_APPLICATION_CREDENTIALS` fallback – <https://github.com/google-gemini/gemini-cli/pull/28472> | Guarantees credential validation before fallback; fixes exit‑code 41 crashes. | Critical for authentication reliability in Agent Mode. |
| **#28386** | fix(vscode): track activation disposables – <https://github.com/google-gemini/gemini-cli/pull/28386> | Corrects VS Code activation subscription tracking. | Prevents premature cleanup of extension resources. |
| **#28397** | fix(core): remove synchronous I/O from shell tool critical path – <https://github.com/google-gemini/gemini-cli/pull/28397> | Switches `fs.mkdtempSync`, `fs.existsSync`, `fs.statSync` to async versions. | Eliminates UI stutter in the Ink terminal UI. |
| **#28394** | fix(cli): remove temp files on background process exit – <https://github.com/google-gemini/gemini-cli/pull/28394> | Cleans up lingering temporary directories after background shell runs. | Stops disk‑space leaks in long‑running sessions. |
| **#28389** | fix(core): add real‑world time budget to prevent infinite‑loop event‑driven agent state transitions – <https://github.com/google-gemini/gemini-cli/pull/28389> | Introduces a shared deadline for `sendMessageStream` and `processTurn`. | Caps runaway state‑machine loops that previously hung agents. |
| **#28387** | fix(cli): guard `customDeepMerge` against circular references – <https://github.com/google-gemini/gemini-cli/pull/28387> | Adds cycle‑tracking to deep‑merge routine. | Stops crashes from malformed settings objects. |
| **#28388** | fix(core): scope tools.core wildcard deny to built‑in tools – <https://github.com/google-gemini/gemini-cli/pull/28388> | Introduces `builtinOnly` flag for policy rules. | Prevents accidental disabling of MCP tools. |
| **#28470** | fix(a2a‑server): enforce workspace trust and task isolation to prevent RCE – <https://github.com/google-gemini/gemini-cli/pull/28470> | Refactors startup to isolate workspace trust and enforce task sandboxing. | Critical security hardening against zero‑click RCE. |
| **#28469** | fix(a2a‑server): rotate session ID on model fallback to prevent stateful API errors – <https://github.com/google-gemini/gemini-cli/pull/28469> | Generates a fresh session ID when falling back to `gemini‑2.5‑flash`. | Resolves “API Error: Please submit a new query…” loops. |
| **#28411** | feat(caretaker): post comment before auto‑closing feature requests – <https://github.com/google-gemini/gemini-cli/pull/28411> | Adds explanatory comment before attaching `auto-close` label. | Improves triage transparency for contributors. |

---  

### 5. Feature‑Request Trends  

- **Visibility of Sub‑Agent Trajectories** – Several issues (#22598, #22267) request a `/chat share`‑style view of sub‑agent decision paths, indicating a desire for richer debugging and evaluation tools.  
- **AST‑aware Navigation** – Multiple threads (#22745, #22746) push for AST‑enhanced file reads and code‑base mapping to cut token usage and improve precision.  
- **Autonomous Skill/Skill‑Usage** – Community repeatedly asks for the model to select and invoke custom skills (git, gradle, bash) without explicit prompting (#21968, #19873).  
- **Robust Error Handling & Timeouts** – Recurring asks for automatic timeouts on hanging agents, shell‑command stalls, and session‑ID rotation on model fallback (#21409, #26522, #28469).  
- **Security & Isolation** – A wave of PRs (#28470, #28319) reflects a focus on workspace trust, credential fallback, and sandboxing to pre‑empt RCE risks.  

---  

### 6. Developer Pain Points  

- **Agent Hangs & Stalls** – Generalist and browser agents frequently hang (issues #21409, #25166, #22232), often after deferring to sub‑agents or hitting interactive prompts.  
- **Inconsistent Sub‑Agent Utilisation** – Users observe that custom skills and sub‑agents are only executed when explicitly instructed, limiting discoverability (#21968).  
- **Auto‑Memory Over‑Engineering** – The background memory extraction retries low‑signal sessions indefinitely, leading to wasted resources and occasional credential leaks (#26522, #26523).  
- **Wayland & Platform Compatibility** – Browser‑agent failures on Wayland (#21983) and other Linux desktop environments restrict cross‑platform usability.  
- **Credential & Session State Leaks** – Missing fallback rotation and lingering temp directories cause intermittent authentication crashes and disk‑space bloat (#28472, #28394).  
- **Lack of Transparent Debugging** – Absence of easy‑to‑share sub‑agent trajectory logs hampers root‑cause analysis for complex multi‑turn interactions.  

---  

*All links point to the live GitHub repository; for the most up‑to‑date status, refresh the issue or PR pages.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest – 2026‑07‑21**  

---

### 1. Today’s Highlights
- **v1.0.73** shipped (2026‑07‑20) with critical stability fixes: *anthROPIC sub‑agents now continue processing when new directories are added*, *relative link resolution in custom‑agent instructions*, and an **`agentStop` hook that no longer loops indefinitely** (turns end after 8 consecutive blocks, `stop_hook_active` flag added).  
- The long‑standing **SHIFT + ENTER line‑break bug** (Issue #1481) was closed, restoring the expected behaviour in the input editor.  
- **Opt‑in Git & GitHub authentication** has been rolled out inside the O (overlay) UI, giving users finer‑grained control over credential handling.

---

### 2. Releases
| Version | Date | Notable Changes |
|---------|------|-----------------|
| **v1.0.73** | 2026‑07‑20 | • Anthropic sub‑agents continue after directory additions<br>• Resolved relative links in agent instructions<br>• `agentStop` hook now aborts after 8 blocks & receives `stop_hook_active` flag<br>• Opt‑in Git/GitHub auth inside O overlay |
| **v1.0.72** | 2026‑07‑20 | (preview of above changes; no public changelog) |

*No other version bumps were reported in the last 24 h.*

---

### 3. Hot Issues (10 most‑talked‑about)

| # | Title (link) | Why it matters | Community reaction |
|---|--------------|----------------|--------------------|
| **#1481** | [SHIFT + ENTER should spawn a line break, but executes the prompt instead](https://github.com/github/copilot-cli/issues/1481) (CLOSED) | Restores the universal line‑break shortcut; previously forcedEnter used `CTRL+ENTER` only. | 👍 17, 27 comments – widely applauded as a usability win. |
| **#3622** | [Copy to clipboard silently fails on Windows](https://github.com/github/copilot-cli/issues/3622) (OPEN) | Clipboard operations are core for agent output sharing; silent failure breaks workflow on Windows. | 👍 4, 4 comments – users report lost data after upgrade to 1.0.48. |
| **#2193** | [Default model configuration for /fleet subagents](https://github.com/github/copilot-cli/issues/2193) (OPEN) | Fleet users need a predictable model baseline; currently they must repeat preferences each turn. | 👍 13, 3 comments – high demand for global config. |
| **#4012** | [Bug with BYOK: reasoning effort not supported for model “glm‑5.2:cloud”](https://github.com/github/copilot-cli/issues/4012) (OPEN) | Prevents users from leveraging max‑reasoning on custom BYOK models; blocks advanced prompting. | 👍 9, 2 comments – highlights gap in BYOK parity. |
| **#2595** | [Background agent completion retention](https://github.com/github/copilot-cli/issues/2595) (OPEN) | Completed background agents disappear too quickly, causing `agent not found` after success. | 👍 0, 2 comments – affects long‑running automation. |
| **#2181** | [Regression: COPILOT_CUSTOM_INSTRUCTIONS_DIR not loading all instructions](https://github.com/github/copilot-cli/issues/2181) (OPEN) | Breaks custom‑instruction pipelines that users rely on for team policies. | 👍 1, 2 comments – regression from 1.0.8 to 1.0.9. |
| **#4183** | [Auto‑compaction does not prevent CAPI 5 MB failure from accumulated normal tool history](https://github.com/github/copilot-cli/issues/4183) (OPEN) | Large tool histories can hit the 5 MB request‑body ceiling, causing silent failures. | 👍 3, 1 comment – points to a hidden performance cliff. |
| **#4005** | [Copilot billing entity isn’t selected](https://github.com/github/copilot-cli/issues/4005) (OPEN) | Enterprise users cannot persist memories after billing entity selection UI glitch. | 👍 1, 1 comment – enterprise‑level blocker. |
| **#3125** | [MCP tools/list_changed notification: updated tools not visible to the model until the next user turn](https://github.com/github/copilot-cli/issues/3125) (OPEN) | Real‑time tool updates are essential for dynamic MCP ecosystems; latency hurts responsiveness. | 👍 0, 1 comment – calls for tighter sync. |
| **#3747** | [Unrecoverable timeouts when WAITFOR DELAY occurs anywhere. Poison pill](https://github.com/github/copilot-cli/issues/3747) (OPEN) | Any occurrence of `WAITFOR DELAY` crashes the session, affecting SQL‑oriented prompts. | 👍 1, 1 comment – “poison pill” description caught attention. |

---

### 4. Key PR Progress
- **No pull requests were merged or opened in the last 24 h** (the PR feed is empty).  
- The most recent merged changes are reflected only in the **v1.0.73** changelog above.

---

### 5. Feature Request Trends
From the open issue set, the **dominant request areas** are:

1. **Granular model control** – ability to set a *default model* (or effort level) globally or per‑project, especially for fleet/sub‑agents.  
2. **Enhanced BYOK parity** – support for reasoning‑effort flags and streaming `reasoning_content` without hitting transient errors.  
3. **Stability and memory management** – smarter auto‑compaction thresholds, prevention of CAPI 5 MB overflow, and proper stale‑session cleanup.  
4. ** richer MCP integration** – immediate visibility of `tools/list_changed` updates and support for required runtime headers in allow‑list configurations.  
5. **User‑experience shortcuts** – native line‑break handling (`SHIFT+ENTER`), consistent clipboard behavior across OSes, and editor fallback for `Ctrl+G` in `ask_user` prompts.

These trends converge on a single theme: **greater configurability and reliability of the Copilot CLI runtime**, especially for power‑users managing custom agents, BYOK models, and complex MCP ecosystems.

---

### 6. Developer Pain Points (recurring frustrations)

- **Clipboard reliability on Windows** – silent failures that leave the clipboard unchanged.  
- **`Ctrl+G` not launching an editor** when `ask_user` prompts appear inside tmux/screen or VS Code terminals.  
- **Stale background sessions** after an in‑CLI update – old binaries linger, retaining large heaps (≈ 460 MB) indefinitely.  
- **Missing environment/footer progression** – the UI can get stuck on “Loading:” forever when built‑in MCP handshakes stall.  
- **File‑not‑found errors for internal tokenizers** (`…/o200k_base.tiktoken`) on remote Linux/raspberry deployments.  
- **Unexpected termination on `WAITFOR DELAY`** strings, causing “poison‑pill” crashes even in innocuous prompts.  
- **Authentication token refresh flow** – expired tokens force an interactive re‑login rather than silently using cached refresh tokens.  
- **Custom instruction directory loading regressions** – instructions under `COPILOT_CUSTOM_INSTRUCTIONS_DIRS` sometimes vanish after upgrade.

These pain points are repeatedly mentioned across issues and are driving the most urgent PR activity and community discussions.

--- 

*All links point to the original GitHub issue or release page for quick reference.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest – 2026‑07‑21**  

---

### 1. Today’s Highlights  
- A flurry of bug reports highlights three core pain points: (1) unreliable **tool‑calling** in K2.x models, (2) UI “jitter” and full‑conversation re‑rendering, and (3) **StrReplaceFile** replacement‑counting errors.  
- Three pull‑requests were merged in the last 24 h, focusing on fixing the replacement‑count logic, aligning fork/undo context with wire turns, and refreshing stale system prompts on session resume.  
- No new releases were published today.

---

### 2. Releases  
- **None** in the past 24 h. The latest version remains **v1.41.0** (released previously).

---

### 3. Hot Issues *(6 notable open issues updated in the last day)*  

| # | Title | Why it matters | Community reaction (👍) | Link |
|---|-------|----------------|--------------------------|------|
| **#2209** | *Bug: cloud‑deployed kimi​claw CLI hangs at 429 engine_overloaded for >48 h* | Persistent throttling on remote servers can stall entire inference pipelines, especially for CI/CD or batch jobs. | 3 | <https://github.com/MoonshotAI/kimi-cli/issues/2209> |
| **#2474** | *Bug: CLI UI continuously shakes and re‑renders the whole dialogue* | Degrades usability; can cause lost context and accidental command execution. | 2 | <https://github.com/MoonshotAI/kimi-cli/issues/2474> |
| **#2528** | *Bug: Shell mode output becomes excessively long* | Long outputs can overflow buffers, break downstream parsers, and waste token budget. | 0 | <https://github.com/MoonshotAI/kimi-cli/issues/2528> |
| **#2527** | *k2.5 tool‑calling completely invalid + goal mode infinite loop* | Critical functional failure; goal mode loops can exhaust model tokens and lock the session. | 0 | <https://github.com/MoonshotAI/kimi-cli/issues/2527> |
| **#2526** | *StrReplaceFile reports too few total replacements for chained edits* | Mis‑counted replacements break file‑editing workflows that rely on sequential diffs. | 0 | <https://github.com/MoonshotAI/kimi-cli/issues/2526> |
| **#2525** | *Goal mode: no‑op continuation fires indefinitely while waiting on external conditions* | Unbounded token consumption can lead to runaway costs and stuck agents. | 0 | <https://github.com/MoonshotAI/kimi-cli/issues/2525> |

*These issues have been actively discussed, with several community members up‑voting (👍) to prioritize fixes.*

---

### 4. Key PR Progress *(3 PRs merged/updated in the last 24 h)*  

| PR | Summary | Link |
|----|---------|------|
| **#2524** | *fix(tools): count StrReplaceFile replacements against the running content* – Aligns replacement counting with the progressive file state, resolving Issue #2526. | <https://github.com/MoonshotAI/kimi-cli/pull/2524> |
| **#2520** | *fix(session): align fork/undo context truncation to wire turns* – Ensures that undo/redo actions respect the same turn count as the server wire, preventing history mismatches after forks or undos. | <https://github.com/MoonshotAI/kimi-cli/pull/2520> |
| **#2519** | *fix(app): refresh stale frozen system prompt on session resume* – Guarantees that newly added skills or edited `AGENTS.md` content are reflected after a session is resumed. | <https://github.com/MoonshotAI/kimi-cli/pull/2519> |

---

### 5. Feature Request Trends  

- **Robust tool‑calling infrastructure** – Multiple issues (#2209, #2527) request clearer error messages, fallback mechanisms, and a more deterministic tool‑discovery process.  
- **Stable goal‑mode behavior** – Repeated reports of infinite loops and periodic “fire” events (#2527, #2525) signal a strong demand for configurable time‑outs and smarter back‑off strategies.  
- **Enhanced shell‑mode ergonomics** – Users want tighter control over output length and better handling of interactive prompts (Issue #2528).  
- **Predictable edit accounting** – Requests for accurate replacement counting in `StrReplaceFile` (Issue #2526) point to a broader desire for reliable file‑manipulation APIs.  
- **Seamless session continuity** – The need to refresh the frozen system prompt on resume (#2519) reflects expectations for persistent, up‑to‑date skill and configuration loading.

---

### 6. Developer Pain Points  

- **Inconsistent replacement counting** – `StrReplaceFile` tallies against the original file, causing mismatched edit counts when edits reference prior modifications.  
- **Unbounded goal‑mode loops** – When waiting on external resources (e.g., GPU availability), the agent repeatedly fires, consuming tokens indefinitely.  
- **Frequent UI jank** – The CLI UI can “shake” and re‑render the full conversation, breaking immersion and potentially exposing race conditions.  
- **Stale system prompts after resume** – Sessions that are paused and later resumed do not automatically adopt newly edited skills or documentation.  
- **Tool‑call failures on remote servers** – Throttling (429) and “Tool not found” errors can halt workflows on cloud instances, especially after model upgrades.  

---

*All links point to the official MoonshotAI/kimi-cli repository on GitHub. This digest captures the most salient activity for developers evaluating or contributing to the Kimi Code CLI ecosystem.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# **OpenCode Community Digest – 2026-07-21**

## **Today's Highlights**
OpenCode v1.18.4 introduces **adaptive thinking controls for Kimi models** on Anthropic-compatible providers, improving reasoning output by default. Meanwhile, the community is actively discussing **UI/UX regressions** (e.g., missing Build/Plan modes, clipboard failures in web-based VS Code environments) and **feature parity** (e.g., workspace deletion, Linear integration). Several critical bugfixes are in progress, including **MCP transport stability** and **session persistence** issues.

---

## **Releases**
### **v1.18.4**
- **Improvements**:
  - Added **adaptive thinking controls** for Kimi models on Anthropic-compatible providers, with **summarized reasoning output** enabled by default ([@chouqin](https://github.com/chouqin)).
- **Bugfixes**:
  - Reduced **OpenAI provider header timeouts** during slow connection setups.
  - Fixed **provider-defined reasoning options** not being respected.

*(Note: Screenshot PRs for #37967 were also merged but are visual artifacts.)*

---

## **Hot Issues** *(Top Community Concerns)*

| **Issue** | **Title** | **Why It Matters** | **Community Reaction** |
|-----------|-----------|-------------------|------------------------|
| **[#37012](https://github.com/anomalyco/opencode/issues/37012)** | [FEATURE] Keep legacy layout option | Users prefer the **old UI for accessibility** (e.g., one-window access to tools vs. nested navigation in the new design). | **26 👍** – High engagement suggests strong resistance to UI changes. |
| **[#38054](https://github.com/anomalyco/opencode/issues/38054)** | Build/Plan missing in 1.18.4 | **Core workflow disruption** – Users report Build/Plan modes disappearing post-update, breaking agent-based workflows. | **3 👍** – Critical for developers relying on agentic coding. |
| **[#26459](https://github.com/anomalyco/opencode/issues/26459)** | Clipboard copy fails in web-based VS Code terminals | **Blocks workflows in code-server/GitHub Codespaces** – A long-standing issue affecting remote dev environments. | **0 👍** – Frustrating for cloud/remote users. |
| **[#38073](https://github.com/anomalyco/opencode/issues/38073)** | New interface cannot toggle between Build and Plan modes | **UI regression** – Confirms #38054’s severity; users can’t switch modes at all. | **1 👍** – Closed but highlights urgency. |
| **[#37428](https://github.com/anomalyco/opencode/issues/37428)** | Brightness values for Desktop client look "chosen by a Ringwraith" | **Poor UX** – Extremely dark UI elements make the app hard to use. | **1 👍** – Aesthetic/accessibility concern. |
| **[#38076](https://github.com/anomalyco/opencode/issues/38076)** | Fresh chat sends ~42k input tokens before user interaction | **Wastes tokens/credits** – New sessions send excessive context, inflating costs. | **0 👍** – Financial and performance impact. |
| **[#38087](https://github.com/anomalyco/opencode/issues/38087)** | HY3 model removed without notice | **Breaks user trust** – Sudden removal of a key model without explanation alienates users. | **0 👍** – High frustration; suggests lack of communication. |
| **[#38096](https://github.com/anomalyco/opencode/issues/38096)** | Broken rendering for non-English languages | **Excludes non-English speakers** – Unicode/rendering issues make the app unusable for multilingual users. | **0 👍** – Critical for global adoption. |
| **[#38056](https://github.com/anomalyco/opencode/issues/38056)** | Sessions/settings disappear with EasyTier networking | **Data loss risk** – Remote networking setups (e.g., VPNs) corrupt user data. | **0 👍** – Severe reliability issue. |
| **[#38088](https://github.com/anomalyco/opencode/issues/38088)** | MCP transport stays 'failed' after transient connection close | **Plugin tools vanish mid-session** – Breaks MCP-based workflows (e.g., LSP tools). | **0 👍** – High-impact for plugin users. |

---

## **Key PR Progress**

| **PR** | **Title** | **Impact** |
|--------|-----------|------------|
| **[#38100](https://github.com/anomalyco/opencode/pull/38100)** | Fix: Resolve task descriptions from metadata | **Fixes #38094** – Tasks with descriptions in metadata (e.g., from plugins) now render correctly. |
| **[#38098](https://github.com/anomalyco/opencode/pull/38098)** | Fix: Persist async prompts before responding | **Fixes #38092** – Prevents prompt loss when requests fail mid-processing. |
| **[#38099](https://github.com/anomalyco/opencode/pull/38099)** | Fix: Recognize separator-free GLM 5.2 IDs | **Fixes #38093** – Correctly parses `glm5.2-fast` model IDs. |
| **[#38082](https://github.com/anomalyco/opencode/pull/38082)** | Feat: Todo Sidebar with Linear integration | **Closes #38081** – Adds project-scoped issue management (Linear integration). |
| **[#38080](https://github.com/anomalyco/opencode/pull/38080)** | Fix: Show running shell commands in UI | Improves transparency for shell tool execution. |
| **[#38079](https://github.com/anomalyco/opencode/pull/38079)** | Feat: Bidirectional chat text support | **Closes #32726** – Adds `dir="auto"` to prevent RTL/LTR text issues. |
| **[#38086](https://github.com/anomalyco/opencode/pull/38086)** | Fix: Show slash command aliases in autocomplete | **Closes #38043** – Improves discoverability of commands like `/quit`. |
| **[#35558](https://github.com/anomalyco/opencode/pull/35558)** | Feat: Pluggable web search | Adds a **modular web search domain** for providers (e.g., DuckDuckGo, Brave). |
| **[#38055](https://github.com/anomalyco/opencode/pull/38055)** | Feat: Draggable project rows | Enhances **workspace management UX**. |
| **[#36052](https://github.com/anomalyco/opencode/pull/36052)** | Feat: Worktree-based workspace switching | **Closes #36048** – Adds Git worktree support for seamless project switching. |

---

## **Feature Request Trends**
1. **UI/UX Stability & Customization**
   - Requests to **revert or preserve legacy layouts** (#37012), **fix dark mode contrast** (#37428), and **improve slash command autocomplete** (#38086) dominate.
   - **Workspace management** (e.g., deleting workspaces (#18653), draggable projects (#38055)) is a recurring theme.

2. **Plugin & MCP Ecosystem**
   - **MCP transport reliability** (#38088) and **plugin tool persistence** are critical.
   - **New provider integrations** (e.g., Gitlawb Opengateway (#38090), Kiro (#20491)) show demand for diversity.

3. **Session & Data Management**
   - **Cross-device sync** (e.g., conversation sync skill (#36509)) and **networking stability** (e.g., EasyTier fixes (#38056)) are high-priority.
   - **Session export/import** (#36661) and **compaction improvements** (#38102, #38103) aim to prevent data loss.

4. **Internationalization & Accessibility**
   - **Non-English rendering** (#38096) and **Unicode support** are under-addressed.

5. **Performance & Cost Optimization**
   - **Token waste in fresh sessions** (#38076) and **Groq TPM limits** (#38059) highlight scalability concerns.

---

## **Developer Pain Points**
1. **UI/UX Instability**
   - Frequent **regressions** (e.g., missing Build/Plan modes, clipboard failures) erode trust.
   - **Dark mode/contrast issues** (#37428) and **non-English support** (#38096) suggest UX design gaps.

2. **Plugin & Tooling Reliability**
   - **MCP transport failures** (#38088) and **shell command visibility** (#38080) break workflows.
   - **Automatic file attachment** (#38105) interferes with manual file path usage.

3. **Data Persistence & Networking**
   - **Session loss** (#38056) and **export failures** (#36661) are critical for remote users.
   - **Token inefficiency** (#38076) increases costs for large-scale usage.

4. **Provider & Model Management**
   - **Sudden model removals** (e.g., HY3 (#38087)) without communication damage trust.
   - **Provider-specific quirks** (e.g., GLM 5.2 ID parsing (#38099)) require constant maintenance.

5. **Performance Bottlenecks**
   - **Groq TPM limits** (#38059) and **compaction loops** (#38102) hinder scalability.

---
**Next Steps**: The community is pushing for **UI stability**, **plugin reliability**, and **better internationalization**. Contributors are actively fixing **session persistence** and **MCP issues**, while feature requests trend toward **workspace management** and **provider diversity**.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

**Pi Community Digest – 2026‑07‑21**

---

### 1. Today’s Highlights  
The community is focused on stabilising the self‑update pipeline (retrying transient version‑fetch failures) and improving reliability of auto‑compaction and external‑editor launch performance. Meanwhile, demand is rising for more flexible model discovery, richer multimodal prompt support, and tighter integration of cost data from upstream providers.

---

### 2. Releases  
*No new Pi releases were published in the last 24 h.*

---

### 3. Hot Issues  *(10 noteworthy issues)*  

| # | Title | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| **#3357** | **Official local LLM provider extension** – fetch model list from `{baseUrl}/models` dynamically | Enables any LLM‑compatible server to expose its model catalog without code changes, widening provider support. | 29 comments, 43 👍 – strong appetite for a more generic extension mechanism. <https://github.com/earendil-works/pi/issues/3357> |
| **#6278** | **Claude edit‑tool bug** – ~20 % of edits fail with `Validation failed for tool "edit"` | Breaks a core workflow for users relying on Claude models, reducing productivity. | 23 comments, 9 👍 – users report frequent edit failures; the issue is closed but still a pain point. <https://github.com/earendil-works/pi/issues/6278> |
| **#6476** | **httpIdleTimeoutMs regression** – self‑hosted OpenAI‑compatible providers time out despite larger timeout values | Self‑hosted deployments (vLLM, Ollama, etc.) now fail after a few minutes, undermining the purpose of the timeout setting. | 11 comments, 0 👍 – open, high‑impact for self‑hosters. <https://github.com/earendil-works/pi/issues/6476> |
| **#6675** | **Self‑update aborts after a single transient connection failure** | A temporary network glitch stops `pi update --self` instantly, preventing reliable upgrades. | 8 comments, 0 👍 – open; users want resilience against flaky connectivity. <https://github.com/earendil-works/pi/issues/6675> |
| **#6774** | **Ctrl+G external editor launch is slow** when `os.tmpdir()` is crowded | The temporary file is written directly to a busy temp directory, causing editor start‑up delays. | 7 comments, 0 👍 – open; performance‑focused request. <https://github.com/earendil-works/pi/issues/6774> |
| **#6879** | **Auto‑compaction never triggers** until provider overflow (>100 % context) | Sessions can grow beyond the intended window, only compacted after an API rejection, risking OOM errors. | 2 comments, 0 👍 – open, critical for long‑running agent runs. <https://github.com/earendil-works/pi/issues/6879> |
| **#6819** | **`assistant.usage` undefined** when provider omits usage data, causing crashes | Crashes in token‑estimation utilities when streaming responses lack usage information. | 3 comments, 0 👍 – closed, but the underlying bug still surfaces in other providers. <https://github.com/earendil-works/pi/issues/6819> |
| **#6863** | **Allow extensions to rewrite session files before launch** | Extensions (e.g., gzip compression) cannot customise how session files are stored, limiting flexibility. | 3 comments, 1 👍 – closed, but the need for pre‑launch session handling remains. <https://github.com/earendil-works/pi/issues/6863> |
| **#6877** | **Use provider‑reported cost from Vercel AI Gateway** | Pi currently recomputes cost; using the billed cost would improve accuracy and billing transparency. | 3 comments, 0 👍 – closed, reflects a broader demand for reliable cost reporting. <https://github.com/earendil-works/pi/issues/6877> |
| **#6895** | **Retry self‑update on transient version‑fetch failures** | `getSelfUpdatePlan` should retry once when the latest‑version request fails with network errors, improving upgrade success rates. | 0 comments, 0 👍 – closed; the fix is now part of the codebase. <https://github.com/earendil-works/pi/pull/6895> |

---

### 4. Key PR Progress  *(10 important PRs)*  

| # | Title | What it delivers | Link |
|---|-------|------------------|------|
| **#6902** | **Update deprecated GitHub Actions** | Moves `actions/checkout` from v4 → v7.0.1, raises runner version requirements, and modernises credential handling. | <https://github.com/earendil-works/pi/pull/6902> |
| **#6903** | **Speed up external editor launch** | Shares a single external‑editor process between main and extension editors and writes prompt files to a private sparse temp directory, eliminating slow startups in crowded `/tmp`. | <https://github.com/earendil-works/pi/pull/6903> |
| **#6901** | **Compaction & branch summarization retry policy** | Makes auto‑compaction and branch summarisation retry on transient failures using the same settings‑defined retry policy, with UI events for retry indication. | <https://github.com/earendil-works/pi/pull/6901> |
| **#6895** | **Retry self‑update on transient version‑fetch failures** | Adds a single retry for `getLatestPiRelease()` on network errors and surfaces detailed error codes in the update error message. | <https://github.com/earendil-works/pi/pull/6895> |
| **#6892** | **Persist jiti cache in agent directory** | Stores compiled TypeScript output in the agent’s working directory instead of `/tmp`, preventing loss when the temp folder is cleaned. | <https://github.com/earendil-works/pi/pull/6892> |
| **#6881** | **Use provider‑reported cost when available** | Reads `usage.cost` (and `cost_details.upstream_inference_cost` for BYOK) from provider responses and sets `usage.cost.total` directly. | <https://github.com/earendil-works/pi/pull/6881> |
| **#6875** | **Update GitHub Actions to current versions & pin SHAs** | Bumps `actions/checkout`, `actions/setup-node`, and `actions/github-script` to latest releases and pins them to commit SHAs for reproducibility. | <https://github.com/earendil-works/pi/pull/6875> |
| **#6874** | **Add Ctrl+A archive shortcut to session picker** | Introduces a `Ctrl+A` shortcut that archives selected sessions to `.pi/archive/YYYY-MM/` with a single keystroke. | <https://github.com/earendil-works/pi/pull/6874> |
| **#6865** | **Expose `get_available_thinking_levels` RPC** | Adds a new RPC method to query supported thinking‑level granularities (low/high/max) for models such as Kimi Coding K3. | <https://github.com/earendil-works/pi/pull/6865> |
| **#6863** | **Allow extensions to rewrite session files before launch** | Provides `ExtensionContext.requestReload()` (and a no‑op for print/JSON) so tools can request a canonical reload after they have customised session storage. | <https://github.com/earendil-works/pi/pull/6863> |

---

### 5. Feature Request Trends  

- **Dynamic model discovery** – multiple requests (e.g., #3357) ask for the ability to fetch model lists from a configurable `{baseUrl}/models` endpoint, enabling any LLM‑compatible server to be supported without code changes.  
- **Multimodal prompt extensions** – #3200 requests video/audio support alongside images, indicating a push for richer context in LLM interactions.  
- **Enhanced markdown handling** – #6747 seeks an API for extensions to mutate agent message markdown while preserving the content sent to the LLM, pointing to a desire for better rendering pipelines.  
- **Cost transparency** – #6877 and #6881 both request using provider‑reported billing costs (`usage.cost.total`) rather than catalog‑derived rates, reflecting a clear demand for accurate cost reporting.  
- **Session file customisation** – #6863 and #6819 highlight the need for extensions to control how session files are prepared and consumed at launch, reducing friction for third‑party tools.  
- **Robustness & reliability** – recurring themes are self‑update resilience (#6675, #6895), auto‑compaction timing (#6879), and external editor performance (#6774), all aimed at making the platform more dependable under real‑world conditions.  

---

### 6. Developer Pain Points  

- **Transient network failures** repeatedly break self‑update (`pi update --self`) and version‑fetch operations, causing abrupt aborts.  
- **External editor latency** when the system temp directory is crowded makes the “Ctrl+G” workflow sluggish, impacting productivity.  
- **Auto‑compaction timing** – compaction only triggers after a provider‑level overflow, leading to occasional OOM or request‑rejection scenarios.  
- **Usage data gaps** – missing `usage` fields from certain providers crash downstream utilities that assume `assistant.usage` is defined.  
- **Session file handling** – extensions cannot pre‑process session files before Pi reads them, limiting the usefulness of tools like session‑gzip.  
- **Deprecated model listings** – some deprecated models remain selectable, creating confusion and potential usage of unsupported endpoints.  
- **Build & dependency issues** – recent `npm run check` failures and build errors (e.g., missing `tencent/hy3:free` model) expose fragile dependency pinning and provider API changes.  

--- 

*All links point to the official repository at https://github.com/earendil-works/pi.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code Community Digest – 2026‑07‑21**  
*GitHub: https://github.com/QwenLM/qwen-code*  

---

## 1. Today's Highlights
- A **nightly build v0.20.0‑nightly.20260721.cda0e0348** was published, bringing a new “label‑driven takeover & release” workflow, a refreshed `cua‑driver‑rs` v0.7.3 binary with relative‑coordinate support, and universal‑binary signing for macOS.  
- The release ships the first public **relative‑coordinate CUA driver** and improves cross‑platform binary packaging (macOS notarized, Linux/Windows unsigned).  

---

## 2. Releases
| Version | Type | Summary |
|---------|------|---------|
| **v0.20.0‑nightly.20260721.cda0e0348** | Nightly | *feat(autofix): label‑driven takeover and release*; *fix(autofix): label‑driven takeover*; *cua‑driver‑rs v0.7.3*; macOS universal‑binary, codesigned & notarized; Linux/Windows unsigned builds; enable relative coordinates. | [Release notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.20.0-nightly.20260721.cda0e0348) |

*No other formal releases were recorded in the last 24 h.*

---

## 3. Hot Issues (10 most noteworthy)

| # | Title | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| **#7156** (closed) | Sub‑agent mutates main session model – context overflow recurrence | Breaks session consistency; a bug that re‑appeared after PR #7119 despite fixes. | High priority (P1), 11 comments, developers concerned about silent model swaps. |
| **#7147** (open) | MCP server never successfully gets tool & resource listing | Prevents integration with external MCP services (e.g., Fastmail). | P2, 6 comments, users requesting reliable MCP discovery. |
| **#7316** (open) | OpenAI‑compatible tool call forces empty `working_dir` causing mutually exclusive parameters | Sub‑agents become unusable on many OpenAI models. | P2, 5 comments, highlighted as a blocker for sub‑agent workflows. |
| **#7056** (open) | VS Code extension fails to connect – ACP process exits unexpectedly | Core usability issue for the VS Code companion. | P2, 5 comments, many users report “process exited unexpectedly”. |
| **#7252** (closed) | Token plan `ap‑southeast‑1` not selectable on `/auth` | Limits region‑specific token plan usage. | P2, 4 comments, resolved in this release. |
| **#7306** (open) | Tool‑output budgeting & observability need hardening | Tool outputs currently traverse multiple truncation paths, leading to race conditions. | P2, 4 comments, cited as a scalability concern. |
| **#7404** (open) | Update‑check timeout too short when loading large historic sessions | Startup hangs for users with long‑running daemon sessions. | P3, 3 comments, affects perceived stability on slower connections. |
| **#7139** (open) | Windows `qwen serve` passes invalid workspace CWD to Docker sandbox | Shell tools fail with “No such file or directory”. | P2, 2 comments, platform‑specific regression. |
| **#7301** (closed) | Web‑Shell loses bearer token on page refresh when daemon started with `--token` | Authentication state is not persisted across refreshes. | P1, 2 comments, critical for continuous sessions. |
| **#7384** (open) | Token usage records are cleared when a conversation is deleted | Inaccurate usage accounting for billing/monitoring. | P2, 2 comments, users demand reliable accounting. |

*These issues surface the most active bug reports, integration blockers, and usability regressions in the past day.*

---

## 4. Key PR Progress (10 most impactful PRs)

| # | Title | What was delivered | Why it matters |
|---|-------|-------------------|----------------|
| **#7424** (open) | *fix: worktree sessions unopenable in Web Shell while actively running* | Resolves stall when opening active worktree sessions; removes 30 s timeout block. | Improves Web‑Shell session navigation stability. |
| **#7378** (closed) | *fix(core): support context‑inheriting subagents in headless mode* | Enables true parent‑context inheritance for `fork` subagents in non‑TTY runs. | Critical for CI/CD and automated evaluation pipelines. |
| **#7380** (open) | *autofix(takeover): feed the gate's rejection back so the retry can fix what it broke* | Feeds rejection reasons back into the autofix loop, allowing self‑healing of failed tasks. | Reduces manual intervention for flaky autofix actions. |
| **#7393** (open) | *feat(core): add memory recall delivery telemetry* | Tracks whether recalled memories actually reach the model. | Improves observability of auto‑memory pipelines. |
| **#7373** (open) | *chore(docs,test): batch three small docs and test fixes* | Consolidates minor documentation and test corrections. | Cleaner SDK docs, reduces duplication. |
| **#7308** (open) | *feat(serve): establish workspace runtime ownership* | Makes ACP runtime scoped to the registered workspace instead of the last session. | Prevents cross‑session contamination and clarifies ownership. |
| **#7409** (closed) | *fix(cli): soften update‑check failure UX — warning instead of error, raise timeout to 5 s* | Improves startup experience on slow networks; replaces red error with a warning. | Directly addresses many user‑reported timeout complaints. |
| **#7395** (open) | *feat(cli): support custom skill directories via settings* | Users can now point the CLI at additional `SKILL.md` directories. | Enables skill sharing across agents and custom organization. |
| **#7312** (open) | *fix(web-shell): restore context tags in queued and recalled prompts* | Preserves host‑defined context tags after prompts enter the pending queue. | Keeps UI context clear for users navigating long histories. |
| **#7426** (open) | *feat(core): keep completed background agents resident* | Background agents stay alive after completion, allowing `send_message` reuse. | Enables “revive” workflow for long‑running background tasks. |

*These PRs collectively stabilize session handling, improve observability, and expand headless/sub‑agent capabilities.*

---

## 5. Feature Request Trends
- **Sub‑agent Context Inheritance** – Repeated calls for true parent‑context inheritance (e.g., inheriting conversation history, tool registries) across `qwen --prompt`, SDK transports, and CI pipelines.  
- **Unified Token Management** – Requests to make token plans selectable, improve usage accounting accuracy, and expose custom token‑plan selection UI.  
- **Enhanced CLI UX** – Softer update‑check failures (warning vs. error), longer network timeouts, and the ability to configure skill directories via settings.  
- **Better Observability** – Telemetry for memory‑recall delivery and tool‑output budgeting, aiming for deterministic aggregation and clearer budget enforcement.  

*The overarching theme is tighter integration between background agents, improved token/usage tracking, and smoother developer‑facing tooling.*

---

## 6. Developer Pain Points
- **Timeouts & Network Sensitivity** – Many users encounter hard timeouts during update checks, MCP discovery, and tool execution on slow or firewalled networks. The recent soft‑error approach (PR #7409) mitigates but the root cause remains variable latencies.  
- **Token Plan Limitations** – Regional token plans (e.g., `ap‑southeast‑1`) are not selectable, forcing users onto less‑suitable endpoints.  
- **Session State Leakage** – Model switches can invalidate daemon sessions; background agents lose state after completion; token usage resets on conversation deletion, leading to inaccurate accounting.  
- **Windows Docker Integration** – Invalid workspace CWD handling breaks shell tools inside Docker sandboxes on Windows, a recurring regression.  
- **MCP & External Service Connectivity** – Reliable tool and resource enumeration from external MCP servers is frequently flaky, causing blocking calls.  

*Addressing these systemic reliability and ergonomics issues appears to be the primary focus of both bug triage and upcoming feature work.*

---  

*All links reference the GitHub issue or PR numbers shown above.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

**DeepSeek TUI Community Digest – 2026‑07‑21**  
*Compiled from the latest activity on https://github.com/Hmbown/DeepSeek‑TUI*  

---  

### 1. Today's Highlights  
- The community merged the final v0.9.1 release‑lane changes and locked down the completion board, marking the last major pre‑release milestone.  
- A burst of UI‑performance fixes landed today (Enter‑key lag, long‑output truncation, atomic‑write umask handling), directly addressing the most‑frequent user‑reported pain points.  
- New runtime API endpoints were shipped, enabling a dynamic provider/model picker that removes the brittle “set‑config‑reload” workflow.

---  

### 2. Releases  
*No new version was published in the last 24 h.*  

---  

### 3. Hot Issues (10 standout items)  

| # | Title (link) | Why it matters | Community reaction |
|---|--------------|----------------|---------------------|
| **[#4032](https://github.com/Hmbown/CodeWhale Issue #4032)** | *Codewhale not following the constitution* (closed) | Shows a reliability regression where the agent creates temporary scripts despite explicit user‑provided scripts, raising trust concerns. | 41 comments, **bug + release‑blocker** flagged; developers ask for stricter script‑generation policies. |
| **[#4042](https://github.com/Hmbown/CodeWhale Issue #4042)** | *Environment‑level tool sandboxing for sub‑agents* (closed) | Introduces mandatory `tool_restrictions` to enforce `--disallowed-tools` across all execution contexts. | 18 comments, praised as **security** and **reliability** improvement; requests for broader sandboxing. |
| **[#4410](https://github.com/Hmbown/CodeWhale Issue #4410)** | *Restore xAI device‑code OAuth login and surface endpoint errors* (closed) | Fixes a breaking OAuth flow for xAI device authentication, which blocks headless launches. | 7 comments; users relieved to see the endpoint error finally surfaced. |
| **[#414](https://github.com/Hmbown/CodeWhale Issue #414)** | *v0.9.1: Resolve one truthful child runtime before launch* (closed) | Central contract for child runtimes – all metadata must be persisted from a single manifest, preventing inconsistent state. | 5 comments; considered essential for **agent‑ready** stability. |
| **[#2889](https://github.com/Hmbown/CodeWhale Issue #2889)** | *Work Agent rows: real sub‑agent details and structured current activity* (closed) | Restores a long‑deleted UI slice that shows precise sub‑agent activity, improving the sidebar UX. | 5 comments; community appreciates the UI restoration. |
| **[#3934](https://github.com/Hmbown/CodeWhale Issue #3934)** | *v0.9.1: Collapse Fleet and agent roles to Planner / Worker / Reviewer / Verifier* (closed) | Simplifies role taxonomy to four canonical responsibilities, clarifying permission posture. | 3 comments; deemed a **clear architectural win**. |
| **[#4603](https://github.com/Hmbown/CodeWhale Issue #4603)** | *Long output content cannot scroll — content truncated beyond viewport* (closed) | UI truncates large diffs/logs, preventing users from reviewing full output. | 3 comments; **P2** severity highlighted. |
| **[#4605](https://github.com/Hmbown/CodeWhale Issue #4605)** | *Enter key send lag — UI freezes for hundreds of ms on message send* (closed) | Users experience noticeable UI freezes when pressing Enter to send a message. | 3 comments; **P1** high‑frequency pain point. |
| **[#4598](https://github.com/Hmbown/CodeWhale Issue #4598)** | *v0.9.1: Make Operate delegate bounded leaves by default* (closed) | Introduces a deterministic delegation contract for bounded leaves, simplifying parallel work coordination. | 2 comments; viewed as a clean abstraction for future scaling. |
| **[#4636](https://github.com/Hmbown/CodeWhale Issue #4636)** | *v0.9.1: Make Work one truthful queue with clear Agents, activity, and diffs* (open) | Aims to collapse Work/To‑do/operations into a single ordered queue with explicit Agent rows. | 1 comment; early enthusiasm for UI clarity. |

---  

### 4. Key PR Progress (10 most impactful merges)  

| PR | Title (link) | Core change | Why it matters |
|----|--------------|-------------|----------------|
| **[#4652](https://github.com/Hmbown/CodeWhale PR #4652)** | *feat(cli): add public `--no-project-config` for reproducible headless exec* | Introduces a flag that disables project‑config overlay for headless launches. | Guarantees deterministic config surfaces for scripts and CI pipelines. |
| **[#4653](https://github.com/Hmbown/CodeWhale PR #4653)** | *test(tui): lock long-output transcript scrolling with a PTY scenario* | End‑to‑end test that guarantees full transcript retention beyond viewport. | Directly resolves Issue #4603’s scrolling truncation. |
| **[#4654](https://github.com/Hmbown/CodeWhale PR #4654)** | *fix(tui): acknowledge Enter before slow send prep* | Decouples UI acknowledgement from heavy send preparation, eliminating Enter‑key freeze. | Fixes Issue #4605’s P1 performance regression. |
| **[#4658](https://github.com/Hmbown/CodeWhale PR #4658)** | *feat(runtime-api): add provider registry + switch endpoints* | Adds three new endpoints enabling dynamic provider/model picker without fragile config reloads. | Improves UX for multi‑provider environments. |
| **[#4657](https://github.com/Hmbown/CodeWhale PR #4657)** | *fix(streaming): report progress on idle timeouts* | Emits byte‑count and timing telemetry on idle‑timeout errors. | Helps diagnose stalls described in Issue #4605. |
| **[#4656](https://github.com/Hmbown/CodeWhale PR #4656)** | *fix(route): honor explicit limits for unknown local models* | Replaces generic 4K fallback with explicit output limits for unknown aliases. | Addresses issue #4655’s cap on self‑hosted routes. |
| **[#4370](https://github.com/Hmbown/CodeWhale PR #4370)** | *[enhancement, model‑lab] feat: add TelecomJS provider support* | Registers TelecomJS and invokes catalog refresh to expose all returned models. | Expands provider catalog richness for users outside the existing ecosystem. |
| **[#4661](https://github.com/Hmbown/CodeWhale PR #4661)** | *[dependencies, javascript] chore(deps): bump axios from 1.16.1 → 1.18.1* | Updates axios dependency across the feishu‑bridge integration. | Security and bug‑fix upgrade for HTTP client used by integrations. |
| **[#4613](https://github.com/Hmbown/CodeWhale PR #4613)** | *fix(tui): sanitize Moonshot tool parameters per MFJS spec* | Enforces root‑level MFJS schema (object only) and normalises nested schemas. | Prevents schema‑rejection errors for Moonshot/Kimi tool calls. |
| **[#4618](https://github.com/Hmbown/CodeWhale PR #4618)** | *fix(tui): keep long‑running tools live* | Restores heartbeats around tool execution to avoid TUI stall watchdog race. | Guarantees responsiveness for long‑running dependencies. |

---  

### 5. Feature Request Trends  

- **Granular sandboxing & permission contracts** – multiple issues request environment‑level tool restrictions, bounded write scopes, and unified permission decisions to eliminate “approval‑modal” friction.  
- **Deterministic routing & billing provenance** – community wants authoritative, provider‑neutral billing metadata and exact route‑offering facts to enable reproducible cost tracking.  
- **Unified skill manager & command surface** – a recurring theme is collapsing disparate command families (`exec_*`, `task_shell_*`) into a single canonical `Bash` tool and a single `/skills` manager.  
- **Improved UI for long content** – scrolling truncation, diff preview limited to 3 lines, and missing persistent setup flag are flagged as critical UX blockers.  
- **Dynamic provider/model picker** – demand for a clean, state‑preserving way to switch providers/models without repeated config reloads.  

Overall, the most‑requested direction is **greater determinism and reproducibility** (config, routes, billing) coupled with **smoother, non‑blocking UI interactions**.

---  

### 6. Developer Pain Points  

- **UI freezes on Enter‑key send** (Issue #4605) causing noticeable latency for every message.  
- **Truncated long‑output transcripts** (Issue #4603) leaving users unable to review full diffs or logs.  
- **Repeated first‑run wizard** (Issue #4604) forcing setup on every restart, breaking workflow continuity.  
- **Incomplete diff preview** in approval panels (Issue #4659) where only the first three lines are shown, hiding crucial changes.  
- **Permission modal overload** – Auto‑Review still triggers approval dialogs for ordinary tool calls, contrary to the goal of a seamless, non‑modal experience.  
- **Transient sandbox / tool restriction configuration** – current approach requires repeated manual re‑specification, especially problematic for sub‑agents and Fleet workers.  

These pain points are repeatedly mentioned across closed issues and PR discussions, indicating priority areas for the next sprint.  

---  

*All links point to the public GitHub repository; issue numbers and PR numbers are as assigned by the project maintainers.*

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

**ComfyUI Community Digest – 2026‑07‑21**  

---  

### 1. Today's Highlights  
- A flurry of bug reports and performance‑related issues dominate the last 24 h, with several high‑visibility tickets updated today (e.g., #14618, #14824, #14907).  
- The community merged native Uni3C control‑net support for Wan models (#14946) and added several partner‑node enhancements, signalling a push toward richer multimodal workflows.  
- Multiple pull‑requests focus on AMD/ROCm support, model‑management fixes, and security‑hardening of dataset paths, reflecting ongoing efforts to broaden platform compatibility and improve safety.  

---  

### 2. Releases  
*No new stable releases in the past 24 h.*  

---  

### 3. Hot Issues (10 most notable)  

| # | Title | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| **[#14618](https://github.com/Comfy-Org/ComfyUI/issues/14618)** | *Potential Bug – ComfyUI keeps loading models on every prompt change* | Core performance regression; forces model reloads, hurting latency. | 10 👍, 77 comments – high visibility. |
| **[#14345](https://github.com/Comfy-Org/ComfyUI/issues/14345)** | *LTX‑2.3 generation speed dropped significantly after upgrading* | Users see >6× slowdown on video generation, directly impacting workflow productivity. | 2 👍, 31 comments – frequent complaints. |
| **[#14824](https://github.com/Comfy-Org/ComfyUI/issues/14824)** | *Native INT8 ConvRot significantly slower than FP8 on A100* | Quantisation performance issue on high‑end GPUs; affects model‑size & cost efficiency. | 0 👍, 16 comments – technical deep‑dive. |
| **[#14850](https://github.com/Comfy-Org/ComfyUI/issues/14850)** | *Unexpected acceleration on Wan2.2 I2V 14B FP8 when using both `--lowvram` & `--use-sage-attention`* | Demonstrates hidden performance interactions; useful for GPU memory‑constrained users. | 0 👍, 11 comments – curiosity. |
| **[#12700](https://github.com/Comfy-Org/ComfyUI/issues/12700)** | *TypeError: Failed to fetch* | Persistent network‑fetch error across releases; blocks model loading for many users. | 0 👍, 10 comments – recurring pain point. |
| **[#14907](https://github.com/Comfy-Org/ComfyUI/issues/14907)** | *0.27.1 – Memory Usage Degraded even more AGAIN* | Escalating RAM consumption & disk re‑reads on every prompt change; threatens stability on modest hardware. | 9 👍, 6 comments – strong community concern. |
| **[#14985](https://github.com/Comfy-Org/ComfyUI/issues/14985)** | *int8 model cause PC crash* | Crash on int8 inference can cause data loss; high‑impact for quantised model users. | 0 👍, 3 comments – critical stability issue. |
| **[#14967](https://github.com/Comfy-Org/ComfyUI/issues/14967)** | *Nodes Manager Extensions does not work after 0.28.0 update* | Extension UI regression breaks custom‑node management; hampers workflow customisation. | 0 👍, 3 comments – usability blocker. |
| **[#14919](https://github.com/Comfy-Org/ComfyUI/issues/14919)** | *int8 lora always load from disk* | Loras load 10× slower than safetensors; request for caching to improve latency. | 1 👍, 2 comments – performance‑oriented request. |
| **[#15001](https://github.com/Comfy-Org/ComfyUI/issues/15001)** | *[ROCm][gfx1201] General model loading became extremely slow on R9700* | ROCm users experience >10× slowdown; threatens cross‑platform adoption. | 0 👍, 2 comments – platform‑specific regression. |

---  

### 4. Key PR Progress (10 most important merges)  

| PR | Title | Summary of Changes | Link |
|----|-------|--------------------|------|
| **[#14946](https://github.com/Comfy-Org/ComfyUI/pull/14946)** | *Add native Uni3C Controlnet support for Wan models (CORE‑365)* | Introduces **WanUni3CControlnetApply** node, enabling native camera‑control for Wan‑series models. | <https://github.com/Comfy-Org/ComfyUI/pull/14946> |
| **[#13285](https://github.com/Comfy-Org/ComfyUI/pull/13285)** | *Twinflow‑Z‑Image Turbo support (CORE‑196)* | Adds support for the Twinflow‑Z‑Image model, expanding image‑to‑image capabilities. | <https://github.com/Comfy-Org/ComfyUI/pull/13285> |
| **[#15007](https://github.com/Comfy-Org/ComfyUI/pull/15007)** | *FreSca: 5D+ (ex. Anima) fix, model‑agnostic iteration* | Corrects loop iteration logic for FreSca, ensuring proper scaling for 5‑dimensional tensors. | <https://github.com/Comfy-Org/ComfyUI/pull/15007> |
| **[#15014](https://github.com/Comfy-Org/ComfyUI/pull/15014)** | *feat(Partner Nodes) fix(Gemini‑Omni): pass videos as inline data* | Adjusts Gemini‑Omni to send videos as base64 inline data, fixing “HTTP video input not supported” errors. | <https://github.com/Comfy-Org/ComfyUI/pull/15014> |
| **[#14807](https://github.com/Comfy-Org/ComfyUI/pull/14807)** | *Add dataset folder to avoid arbitrary folder access for dataset stuff* | Introduces a dedicated dataset directory, tightening security by preventing arbitrary path writes. | <https://github.com/Comfy-Org/ComfyUI/pull/14807> |
| **[#13588](https://github.com/Comfy-Org/ComfyUI/pull/13588)** | *Video processing nodes, Image Processing Node video support, trainer video support (CORE‑81)* | Extends trainer pipeline to handle video datasets and adds video‑aware image processing transforms. | <https://github.com/Comfy-Org/ComfyUI/pull/13588> |
| **[#15012](https://github.com/Comfy-Org/ComfyUI/pull/15012)** | *fix: allow Load Image symlinks into temp/output media roots* | Enables symlinked images from `input/` into `temp/`/`output/` without “Image not loaded” errors. | <https://github.com/Comfy-Org/ComfyUI/pull/15012> |
| **[#14962](https://github.com/Comfy-Org/ComfyUI/pull/14962)** | *[cursor‑review] chore: add /AGENTS.md to CODEOWNERS* | Adds explicit ownership of `AGENTS.md` to `@comfyanonymous`, clarifying review responsibilities. | <https://github.com/Comfy-Org/ComfyUI/pull/14962> |
| **[#15009](https://github.com/Comfy-Org/ComfyUI/pull/15009)** | *Fix gfx1035 not being treated like RDNA2* | Updates `model_management.py` to treat `gfx1035` as part of `AMD_RDNA2_AND_OLDER_ARCH`, enabling fp16‑friendly paths. | <https://github.com/Comfy-Org/ComfyUI/pull/15009> |
| **[#14979](https://github.com/Comfy-Org/ComfyUI/pull/14979)** | *[cursor‑review] fix(api‑nodes): disambiguate deprecated partner‑node display names* | Prevents duplicate display names between deprecated V1 and active V2 partner nodes, improving UI clarity. | <https://github.com/Comfy-Org/ComfyUI/pull/14979> |

---  

### 5. Feature Request Trends  

- **Camera & Control‑Net Enhancements** – Repeated calls for native Uni3C control‑net nodes, Uni3C support for additional Wan variants, and camera‑info widgets to drive motion parameters.  
- **Quantisation & Performance Optimisation** – Numerous issues request faster int8/INT8 handling, caching of merged LoRA weights, and better FP8/INT8 scheduling on both NVIDIA and AMD GPUs.  
- **Dataset & Security Hardening** – A clear movement toward dedicated dataset folders and stricter path sanitisation to prevent arbitrary directory access.  
- **Cross‑Platform/ROCm Support** – Growing number of reports about model loading speed on AMD/ROCm stacks, with patches targeting `gfx1035` and generic ROCm performance.  
- **Video‑Centric Workflows** – Demand for video‑aware nodes, streaming transcode improvements, and better handling of VTuber‑style guide images in I2V pipelines.  

---  

### 6. Developer Pain Points  

- **Model‑Reload Latency** – Custom‑node workflows still trigger full model reloads on every prompt change (Issue #14618), causing noticeable slowdown.  
- **Quantisation Inconsistencies** – INT8 kernels behave unexpectedly on A100 and newer GPUs (Issue #14824), and int8 LoRA loading remains disk‑bound (Issue #14919).  
- **Memory Footprint Creep** – Versions 0.27.x exhibit steadily rising RAM usage and disk re‑reads (Issue #14907), threatening stability on lower‑spec machines.  
- **Extension & UI Breakages** – Post‑0.28.0 updates break the Nodes Manager UI and custom‑node loading (Issue #14967), hampering plugin development.  
- **Symlink Handling** – `Load Image` rejects symlinked assets in `temp/`/`output/` (Issue #15012), limiting flexible asset organisation.  
- **ROCm & AMD Compatibility** – Model loading becomes >10× slower on AMD GPUs (Issue #15001) and certain GPU architectures are not correctly classified, leading to undesirable BF16 execution (Issue #15006).  

---  

*All links point to the official ComfyUI GitHub repository. For a full snapshot of today’s activity, see the issue and PR filters on the repo.*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# **Ollama Community Digest – 2026-07-21**

---

## **Today’s Highlights**
Ollama released **v0.32.2-rc0**, introducing stability fixes and cleanup in the agent CLI. Meanwhile, the community is actively reporting regressions in **v0.32.1**, including token-limit crashes and tool-call parsing failures. Key discussions focus on **GPU memory handling** (AMD/NVIDIA), **API compatibility** (Anthropic web search params), and **MLX backend limitations** (lack of parallel request support). Several critical bugs—such as segmentation faults on Sapphire Rapids CPUs and GPU discovery timeouts in LXC/Docker—remain unresolved.

---

## **Releases**
- **[v0.32.2-rc0](https://github.com/ollama/ollama/releases/tag/v0.32.2-rc0)**
  - **Changes**:
    - Retains Claude Code channels in `ollama launch` ([#17210](https://github.com/ollama/ollama/pull/17210)).
    - Removes dead agent prompt wrappers ([#17227](https://github.com/ollama/ollama/pull/17227)).
    - Reorders working directory instructions in the agent CLI.

---

## **Hot Issues** *(Top 10)*

| **Issue** | **Title** | **Why It Matters** | **Community Reaction** |
|-----------|-----------|--------------------|------------------------|
| **[#17270](https://github.com/ollama/ollama/issues/17270)** | Regression: `/api/generate` aborts with "token repeat limit reached" | Blocks critical API workflows post-v0.32.1 upgrade. | High urgency; no workaround suggested. |
| **[#17272](https://github.com/ollama/ollama/issues/17272)** | Responses truncated mid-generation | Undermines reliability for production use. | Recurring complaint (3–6 months). |
| **[#16957](https://github.com/ollama/ollama/issues/16957)** | NVIDIA 1080Ti crashes with `0xc0000005` | Prevents GPU offloading on older hardware. | Zero upvotes; likely niche but critical for legacy setups. |
| **[#17069](https://github.com/ollama/ollama/issues/17069)** | GPU discovery times out in LXC/Docker | Causes permanent CPU fallback. | Non-deterministic; manual restarts sometimes help. |
| **[#17236](https://github.com/ollama/ollama/issues/17236)** | Segfault loading Qwen3 (hybrid SSM/attention) | Breaks support for cutting-edge architectures. | Confirmed works in `llama.cpp`; Ollama-specific bug. |
| **[#17274](https://github.com/ollama/ollama/issues/17274)** | Qwen2.5 tool calls dropped silently | Silent failures break tool-use workflows. | 40 tokens reported but no `tool_calls` in response. |
| **[#17282](https://github.com/ollama/ollama/issues/17282)** | Custom model templates reset after v0.32 | Disrupts existing workflows. | Affects both new and legacy models. |
| **[#17271](https://github.com/ollama/ollama/issues/17271)** | Incorrect RAM calculation for iGPUs | Misleads users about available VRAM. | Example: 96 GiB VRAM shown as 17.8 GiB available. |
| **[#17265](https://github.com/ollama/ollama/issues/17265)** | GLM-5.2 cloud model degraded | Sudden performance drop in cloud-hosted models. | Observed since mid-July 2026. |
| **[#690](https://github.com/ollama/ollama/issues/690)** | "How to stop Ollama?" | Persistent confusion over process management. | 64 comments; no clear resolution. |

---

## **Key PR Progress** *(Top 10)*

| **PR** | **Title** | **Impact** |
|--------|-----------|------------|
| **[#17278](https://github.com/ollama/ollama/pull/17278)** | Warm prefill cache across model reloads | Reduces latency for repeated queries; opt-in via `OLLAMA_PREFILL_CACHE`. |
| **[#17277](https://github.com/ollama/ollama/pull/17277)** | Fix AMD iGPU VRAM reporting | Corrects `available` memory for APUs (e.g., Radeon 8060S). |
| **[#17259](https://github.com/ollama/ollama/pull/17259)** | Detect download stalls pre-first-byte | Prevents stuck pulls during final chunk transfers. |
| **[#17059](https://github.com/ollama/ollama/pull/17059)** | Clarify Claude Code context limits | Updates guidance to 100k+ (was 64k+) and notes 200k support. |
| **[#17025](https://github.com/ollama/ollama/pull/17025)** | Add CUDA CC 10.0 for Linux v12 | Enables B200-class GPUs with older drivers. |
| **[#17229](https://github.com/ollama/ollama/pull/17229)** | Remove standalone `agent` command | Simplifies CLI; agent now accessible via `ollama run`. |
| **[#17244](https://github.com/ollama/ollama/pull/17244)** | Bump Linux toolchain to GCC 13 | Fixes AMX crashes on Sapphire Rapids CPUs. |
| **[#17186](https://github.com/ollama/ollama/pull/17186)** | `llama.cpp` update | Includes fixes for hybrid architectures (e.g., Qwen3). |
| **[#17281](https://github.com/ollama/ollama/pull/17281)** | Add ChatOSS to community integrations | Expands desktop app ecosystem. |
| **[#17280](https://github.com/ollama/ollama/pull/17280)** | Request: Concurrent requests in MLX engine | Seeks parity with `llama.cpp`’s `OLLAMA_NUM_PARALLEL`. |

---

## **Feature Request Trends**
1. **API Parity**:
   - Add `allowed_domains`/`blocked_domains` for Anthropic web search ([#17283](https://github.com/ollama/ollama/issues/17283)).
   - Support `Modelfile` in `/api/create` endpoint ([#8793](https://github.com/ollama/ollama/issues/8793)).

2. **GPU/Compute Enhancements**:
   - Better AMD APU memory reporting ([#17277](https://github.com/ollama/ollama/issues/17277)).
   - NVIDIA B200 support ([#12583](https://github.com/ollama/ollama/issues/12583)).

3. **Backend Improvements**:
   - Concurrent requests in MLX engine ([#17280](https://github.com/ollama/ollama/issues/17280)).
   - Persistent prefill cache ([#17278](https://github.com/ollama/ollama/pull/17278)).

4. **Model Support**:
   - Cloud model requests (e.g., Kimi K3, GLM-5.2) ([#17235](https://github.com/ollama/ollama/issues/17235)).

---

## **Developer Pain Points**
- **Silent Failures**: Tool calls dropped without errors ([#17274](https://github.com/ollama/ollama/issues/17274)), responses truncated mid-generation ([#17272](https://github.com/ollama/ollama/issues/17272)).
- **GPU Inconsistencies**: Timeouts in LXC/Docker ([#17069]), incorrect VRAM reporting for AMD APUs ([#17271]).
- **Regression Risks**: New releases breaking existing workflows (e.g., `/api/generate` token limits in v0.32.1).
- **Debugging Gaps**: No clear way to stop Ollama gracefully ([#690]), lack of detailed logs for tool-call parsing failures.
- **MLX Limitations**: Sequential request processing on Apple Silicon ([#17280]).

---
**Next Steps**: The team is prioritizing regressions (e.g., [#17270](https://github.com/ollama/ollama/issues/17270)) and GPU-related bugs. Community testing for [#17278](https://github.com/ollama/ollama/pull/17278) (prefill cache) is encouraged.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

**LLaMA.cpp Community Digest – 2026‑07‑21**  
*Your snapshot of the most recent releases, discussions and code changes on github.com/ggerganov/llama.cpp.*

---

## 1. Today’s Highlights
* The **b10075** release adds a CLAMP operation to the Hexagon backend (#25934) and ships pre‑built Apple‑Silicon binaries for macOS ARM64.  
* ROCm‑7.14 users are hitting shared‑library loading failures, sparking a flurry of bug reports and a targeted PR to improve error handling.  
* A wave of enhancement proposals focuses on extending quantization support (e.g., Q2_0) and tightening integration with new hardware back‑ends (Metal, SYCL, Vulkan).

---

## 2. Releases (last 24 h)  
| Asset | Description | Link |
|------|-------------|------|
| **b10075** | Hexagon: add **CLAMP** op (#25934). Provides macOS Apple‑Silicon (arm64) binaries (both vanilla and KleidiAI‑enabled builds). | <https://github.com/ggml-org/llama.cpp/releases/download/b10075/llama-b10075-bin-macos-arm64.tar.gz> |

*No other new version tags were published in the last day.*

---

## 3. Hot Issues (top‑10 by comment count)  

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| **#22746** | **Eval bug:** Qwen 3.6 27B forces full prompt re‑processing due to missing KV cache. | Breaks long‑context inference; impacts the largest multilingual model. | 103 comments, 30 👍 – users demand a cache‑aware fix. |
| **#14909** | **Feature Request:** Implement missing ops from backends. | Core parity work needed for full backend coverage (CUDA, Metal, Vulkan). | 45 comments, 7 👍 – seen as a “good first issue” for contributors. |
| **#23577** | **Eval bug:** MTP with Qwen 3.6 27B outputs repeated `////` after long sessions. | Reproducible generation glitch that degrades user trust. | 29 comments, 3 👍 – active troubleshooting thread. |
| **#24343** | **Bug:** `llama_init_from_model` fails for **Gemma4Assistant**. | Prevents adoption of Google’s newest assistant model. | 32 👍 – high visibility, requests for debugging symbols. |
| **#24616** | **Feature Request:** Add `dp4a` emulation via `dp2a` on CUDA. | Enables half‑precision matrix math on older GPUs lacking native `dp4a`. | 13 comments, 2 👍 – developers eager for broader quantization support. |
| **#25807** | **Bug:** ROCm‑7.14 runtime error – `libhipblas.so.3` missing. | Blocks AMD‑GPU users from running the latest builds. | 5 comments, 0 👍 – community posting work‑arounds. |
| **#23737** | **Bug:** `GGML_ASSERT(tensor->data != NULL)` crashes on Vulkan (since b9318). | Vulkan users experience hard crashes during inference. | 5 comments, 2 👍 – calls for immediate regression testing. |
| **#24486** | **Eval bug:** TP: Stepfun 3.7 fails with uneven splits (`GGML_META_DEBUG=1`). | Affects a high‑profile model provider; impacts benchmark reproducibility. | 5 comments, 1 👍 – request for more robust split handling. |
| **#23984** | **Bug:** Unable to use OpenVINO NPU backend. | Limits deployment on Intel AI‑accelerators. | 4 comments, 0 👍 – open request for NPU runtime fixes. |
| **#23909** | **Feature Request:** **ADD Q2_0** quantization format. | Expands the quant format set, potentially reducing model size further. | 4 comments, 1 👍 – early interest, awaiting implementation. |

*All links follow the pattern `https://github.com/ggerganov/llama.cpp/issues/<num>`.*

---

## 4. Key PR Progress (top‑10 by impact)  

| PR | Title / Core Change | Why it matters | Link |
|----|---------------------|----------------|------|
| **#25575** | **CUDA:** use `argsort` for small multi‑row top‑k (heuristic). | Reduces kernel launches for top‑k on small tensors, improving latency. | <https://github.com/ggerganov/llama.cpp/pull/25575> |
| **#25377** | **Metal:** add 64×8 mul‑mm tile variant for `q4_0`. | Improves small‑batch performance on Apple‑Silicon GPUs. | <https://github.com/ggerganov/llama.cpp/pull/25377> |
| **#25930** | **CUDA:** fuse `q8_1` quantization into producer RMS‑Norm. | ~4 % decode‑speed gain on Strix Halo; tighter integration of quant & norm. | <https://github.com/ggerganov/llama.cpp/pull/25930> |
| **#22675** | **CUDA:** chunked SSD matmul for Mamba‑2 prefill acceleration. | Enables efficient long‑sequence SSM processing on GPUs. | <https://github.com/ggerganov/llama.cpp/pull/22675> |
| **#24364** | **OpenVINO:** force W4A8 path for NVFP4_W4A16 layers on Blackwell. | Utilises superior memory bandwidth on new GPUs; reduces fallback to slower paths. | <https://github.com/ggerganov/llama.cpp/pull/24364> |
| **#25571** | **CI:** add Ubuntu CUDA 13 release binaries (x64/arm64). | Aligns GitHub releases with the official CUDA Docker image; improves binary availability. | <https://github.com/ggerganov/llama.cpp/pull/25571> |
| **#24942** | **Server:** disable embeddings/pooling on speculative draft/MTP contexts. | Fixes load‑failure crashes when MTP models are served via `llama‑server`. | <https://github.com/ggerganov/llama.cpp/pull/24942> |
| **#19357** | **GGML:** add INT2 quantization and KleidiAI SME2 kernels. | Expands low‑precision support for emerging hardware (M4, Vivo X300). | <https://github.com/ggerganov/llama.cpp/pull/19357> |
| **#23570** | **Vulkan:** refactor `vk_queue` to use per‑instance mutexes & unique handles. | Improves thread‑safety and reduces static‑state contention. | <https://github.com/ggerganov/llama.cpp/pull/23570> |
| **#25948** | **WebUI:** add symbolic‑math sandbox via Nerdamer. | Enables advanced reasoning tasks; community‑driven math‑enhanced UI. | <https://github.com/ggerganov/llama.cpp/pull/25948> |

---

## 5. Feature Request Trends  

| Requested Feature | Frequency | Typical Use‑Case |
|-------------------|-----------|-----------------|
| **Missing ops / backend parity** | ★★☆☆☆ (high) | Full‑stack support for CUDA/Metal/Vulkan, especially `dp4a`, CLAMP, and fused kernels. |
| **New quantization formats** (`Q2_0`, `dp2a` emulation) | ★★★★☆ (rising) | Reducing model size while preserving accuracy for edge devices. |
| **MCP server activation persistence** | ★★☆☆☆ | UI stability across server restarts; seamless integration with the new SvelteKit WebUI. |
| **Extended GPU‑specific accelerations** (Metal 64×8 mul‑mm, SYCL paths, ROCm improvements) | ★★☆☆☆ | Leveraging vendor‑specific tensor cores and unified‑memory architectures. |
| **Error‑handling & robustness** (ROCm shared‑library warnings, Vulkan assert crashes) | ★★☆☆☆ | Production‑grade reliability for AMD and Intel GPUs. |

*Overall, the community is pushing for richer quantization options, tighter hardware‑backend integration, and UI‑level persistence features.*

---

## 6. Developer Pain Points  

1. **ROCm runtime gaps** – missing `libhipblas.so.3` and CLAMP operation cause crashes on ROCm 7.14; users request proactive library checks and clearer error messages.  
2. **Backend‑specific bugs** – Vulkan `GGML_ASSERT` failures, OpenVINO NPU inaccessibility, and Metal tile‑size mismatches generate intermittent crashes, especially on newer silicon (Blackwell, M4).  
3. **Build & binary availability** – Linux users lack pre‑compiled CUDA binaries; the CI pipeline now adds Ubuntu CUDA 13 packages to close this gap.  
4. **Missing ops & quantization formats** – contributors frequently cite the need for ops that are absent from the default backends and ask for `Q2_0` or `dp2a` implementations.  
5. **Server‑side stability** – issues around speculative draft/MTP context loading and slot updating lead to crashes when multiple models are hot‑swapped, prompting calls for more robust context handling.  
6. **UX gaps in the WebUI** – invisible reasoning button, absence of CLI‑configurable server props, and lack of symbolic‑math support hinder the developer experience.  

*Addressing these pain points will significantly improve cross‑platform reliability and broaden adoption in production environments.*

--- 

*All references point to the official **ggml‑org/llama.cpp** repository. For deeper inspection, follow the linked issues and PRs above.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*