# AI CLI Tools Community Digest 2026-09-02

> Generated: 2026-09-01 22:16 UTC | Tools covered: 12

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

**Today’s Highlights**

- **Claude Code** – v2.1.257 ships Claude Fable 5.1 (1 M‑token context) and adds configurable turn‑end clocks.  
  <https://github.com/anthropics/claude-code/releases/tag/v2.1.257>

- **OpenAI Codex** – Rust SDK v0.152.0 released, introducing full‑text search in Vim mode, on‑screen rate‑limit banners, and a revamped terminal UI (`codex exec`).  
  <https://github.com/openai/codex/releases/tag/rust-v0.152.0>

- **Gemini CLI** – Preview v0.59.0‑preview.0 fixes a “waiting‑input” dead‑lock in shell‑tool execution, preventing hangs in multi‑agent workflows.  
  <https://github.com/google-gemini/gemini-cli/releases/tag/v0.59.0-preview.0>

- **GitHub Copilot CLI** – v1.0.83‑1 adds sortable Sessions sidebar, a new enterprise “forceLoginOrgs” setting, and improved MCP config handling.  
  <https://github.com/github/copilot-cli/releases/tag/v1.0.83-1>

- **Kimi Code CLI** – v1.50.0 upgrades the `kosong` dependency, drops empty Anthropic‑beta headers, and introduces a deprecation‑aware shell migration flow.  
  <https://github.com/MoonshotAI/kimi-cli/releases/tag/v1.50.0>

- **Qwen Code** – CUA driver binaries v0.20.3 released, now offering signed macOS universal builds and multi‑arch Linux/Windows packages for GPU‑accelerated inference.  
  <https://github.com/QwenLM/qwen-code/releases/tag/cua-driver-rs-v0.20.3>

- **DeepSeek TUI** – Native ChatGPT/Codex PKCE sign‑in merged (PR #5784), removing the hard dependency on the external Codex CLI.  
  <https://github.com/Hmbown/DeepSeek-TUI/pull/5784>

- **Ollama** – PR #17943 adds cached prompt‑token metrics to the API, giving users visibility into cache‑hit ratios for both native and OpenAI‑compatible back‑ends.  
  <https://github.com/ollama/ollama/pull/17943>

- **llama.cpp** – CUDA release b10751 fuses MoE weighted‑expert reduction, cutting latency for mixture‑of‑experts models.  
  <https://github.com/ggerganov/llama.cpp/releases/tag/b10751>

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

## Claude Code Skills Community Highlights – Report (as of 2026‑09‑02)

---

### 1️⃣ Top Skills Ranking  
*These pull‑requests generate the bulk of discussion (comments, reactions, and follow‑up issues). All are still **open** in the repo; most are awaiting review or a final merge.*

| # | Skill (PR) | Core Functionality | Discussion Highlights | Current State |
|---|------------|-------------------|-----------------------|---------------|
| 1 | **Document‑Typography** – PR #514 | Automatic detection & correction of typographic problems in AI‑generated text (orphans, widows, mis‑numbered lists, line‑wrap issues). | Users report that even small typographic glitches break downstream publishing pipelines; many ask for a “one‑click polish” before sending docs to clients. | Open (draft) |
| 2 | **ODT Skill** – PR #486 | Create, fill, read, and convert OpenDocument files (.odt, .ods) – includes templating and HTML export. | Heavy demand from open‑source / ISO‑standard office users (LibreOffice, Collabora). Issues reference missing ODF support in existing DOCX/PDF skills. | Open (draft) |
| 3 | **Testing‑Patterns** – PR #723 | Comprehensive “testing‑patterns” skill covering testing philosophy, unit‑test AAA, edge‑case design, React Testing Library, integration, and CI/CD hooks. | Developers cite repetitive test‑scaffolding and ask for a skill that can auto‑generate test skeletons from code snippets. | Open (draft) |
| 4 | **ServiceNow** – PR #568 | Full‑stack ServiceNow assistant (ITSM, ITOM, ITAM, FSM, HRSD, SecOps, IntegrationHub, CSDM). Generates scripts, workflow designs, and policy documents. | Enterprise customers request a single skill to replace fragmented internal tooling; security & compliance concerns dominate the chat. | Open (draft) |
| 5 | **Skill‑Quality & Security Analyzer** – PR #83 | Meta‑skill that scores any Claude Code Skill on structure, documentation, security, and runtime safety (five‑dimensional rubric). | Community sees this as a “Lint” for skills, hoping to catch malformed `SKILL.md` files before they break agents. | Open (draft) |
| 6 | **Self‑Audit (Mechanical + Reasoning Gate)** – PR #1367 | Pre‑delivery audit that (a) validates file outputs, signatures, hash checks, and (b) runs a four‑dimension reasoning quality gate (correctness, completeness, safety, alignment). | Repeated calls for an “automatic guardrail” before agents ship code or docs; many cite recent production bugs. | Open (draft) |
| 7 | **Hivemind – Zero‑Cost Multi‑Agent Orchestration** – PR #1628 | Enables Claude Code to delegate cheap, deterministic work to free‑model workers on Opencode, while retaining planning & review in Claude. | Excitement about reducing token cost for long‑running pipelines; concerns about trust & sandboxing. | Open (draft) |
| 8 | **SCNet‑HPC** – PR #1615 | Profiles‑based SSH & Slurm workflow for Anthropic’s internal SCNet high‑performance clusters (partition, memory, accelerator selection, job script generation). | Researchers on Anthropic and partners request native HPC integration; early testers report “simple‑run” success. | Open (draft) |

*GitHub links*: `#514 <https://github.com/anthropics/skills/pull/514>`, `#486 <https://github.com/anthropics/skills/pull/486>`, `#723 <https://github.com/anthropics/skills/pull/723>`, `#568 <https://github.com/anthropics/skills/pull/568>`, `#83 <https://github.com/anthropics/skills/pull/83>`, `#1367 <https://github.com/anthropics/skills/pull/1367>`, `#1628 <https://github.com/anthropics/skills/pull/1628>`, `#1615 <https://github.com/anthropics/skills/pull/1615>`.

---

### 2️⃣ Community Demand Trends (Derived from Issues)

| Trend | Indicative Issues (most‑commented) | What the community wants |
|-------|-----------------------------------|--------------------------|
| **Enterprise workflow automation** | #228 (Org‑wide skill sharing), #568 (ServiceNow), #1615 (SCNet‑HPC) | Centralised libraries & “share‑once” models; built‑in connectors for ITSM, HPC, CI/CD. |
| **Security & trust boundaries** | #492 (Namespace impersonation), #1175 (SharePoint security), #1487 (Token‑exhaustion in `claude‑api`) | Clear provenance, sandboxing, and security‑oriented meta‑skills (e.g., analyzers, governance). |
| **Quality‑gate & audit tooling** | #1367 (self‑audit), #1385 (Reasoning Quality Gate proposal), #83 (quality analyzer) | Automated pre‑flight checks, multi‑stage verification pipelines before output is released. |
| **Documentation & formatting polish** | #514 (Typography), #386 (docx whitespace), #538 (PDF case‑sensitivity) | Skills that guarantee publishing‑ready docs (typography, ODF/Docx/PDF hygiene). |
| **Testing & code‑generation support** | #723 (Testing‑patterns), #525 (Pyxel retro‑game dev), #1628 (Hivemind) | End‑to‑end generation of test suites, scaffolding, and lightweight agent orchestration for cheap compute. |
| **Tooling reliability / Windows support** | #1050, #1099, #1298 (run_eval bugs) | Stable, cross‑platform developer tooling (skill‑creator, evaluation harness). |

The **dominant demand** is for *enterprise‑grade, secure, and quality‑assured automation* – i.e., skills that can be safely shared across orgs, execute repeatable workflows, and guarantee output correctness before deployment.

---

### 3️⃣ High‑Potential Pending Skills  
*(Open PRs with noticeable community chatter, recent updates, or alignment with the trends above. Likely to land in the next few weeks.)*

| PR | Skill | Why it matters now |
|----|-------|--------------------|
| **#1628** – *Hivemind* | Multi‑agent orchestration, token‑cost reduction | Addresses cost‑optimization trend; early adopters already prototyped pipelines. |
| **#568** – *ServiceNow* | End‑to‑end ServiceNow assistant | Directly fulfills enterprise workflow‑automation demand. |
| **#723** – *Testing‑Patterns* | Full testing‑strategy skill | Responds to the “auto‑generate tests” pain point for developers. |
| **#1367** – *Self‑Audit* | Mechanical + reasoning quality gate | Provides the first built‑in safety net that many issues reference. |
| **#83** – *Skill‑Quality & Security Analyzer* | Lint‑style evaluator for all skills | Tackles the security‑namespace concerns raised in Issue #492. |
| **#514** – *Document‑Typography* | Polishing typographic quality | Directly solves the formatting‑quality complaints in several docs‑related issues. |
| **#486** – *ODT* | OpenDocument creation & conversion | Fills the missing open‑standard document format gap noted by multiple users. |
| **#1615** – *SCNet‑HPC* | HPC orchestration via SSH/Slurm | Provides a concrete example of high‑performance compute integration, a frequent request from research teams. |

*GitHub links*: see section 1 for PR numbers.

---

### 4️⃣ Skills Ecosystem Insight  
> **Community demand is converging on secure, share‑able enterprise automation plus built‑in quality‑gate tooling – the strongest pull is for “trusted, organization‑wide skills that execute repeatable workflows while guaranteeing safety and correctness.”**

---

**Claude Code Community Digest – 2026‑09‑02**  
*(GitHub: https://github.com/anthropics/claude-code)*  

---

### 1. Today’s Highlights  
- **v2.1.257** ships with the new **Claude Fable 5.1** model (1 M‑token context, updated pricing) and introduces configurable time‑display settings for the turn‑end clock.  
- A wave of safety‑filter false‑positive reports has been closed, highlighting growing pains as the platform scales to more security‑focused workflows.  

---

### 2. Releases  
**v2.1.257** – *2026‑09‑01*  
- **Claude Fable 5.1** (`claude‑fable‑5‑1`) is now the default Fable model. 1 M‑token context, $10 / Mtok (prompt) / $50 / Mtok (completion) with $0.25 / Mtok cache reads.  
- New **`timeFormat`** and **`timeZone`** settings let users choose 12‑hour, 24‑hour, UTC, or a custom *strftime* pattern for the turn‑end clock and transcript timestamps.  

*Full changelog:* https://github.com/anthropics/claude-code/releases/tag/v2.1.257  

---

### 3. Hot Issues (10 most noteworthy)

| # | Title / Summary | Why it matters | Community reaction |
|---|----------------|----------------|--------------------|
| **66728** | *Safety classifier false positive on syscall/ABI dev content forces silent model downgrade (Fable 5 → Opus 4.8)* | Breaks PR‑review‑reply workflow; developers lose the larger context of Fable 5. | 11 comments, 2 👍 – heavy discussion on balancing safety vs. usability. |
| **69700** | *URLs not clickable in Ghostty terminal (macOS)* | Hinders quick navigation from the TUI, a core productivity feature for many macOS users. | 6 comments, 7 👍 – users shared workarounds and requested proper terminal integration. |
| **65035** | *Auto‑compact not triggered on Linux* | Auto‑compact keeps token usage low; its failure inflates costs and slows sessions. | 3 comments, 6 👍 – developers asked for tighter heuristics. |
| **73879** | *Sub‑agent per‑call model overrides lost on session resume* | Leads to unexpected model switches, confusing output quality for multi‑model agents. | 3 comments, no 👍 – few but technical participants noted the regression. |
| **74975** | *Safety filter halted session on a frustrated exclamation (no cyber content)* | Demonstrates over‑aggressive cyber‑filtering that stops legitimate work. | 3 comments, no 👍 – repeated by many downstream safety‑filter tickets. |
| **68273** | *WebFetch fails to return response body on HTTP error codes* | Agents that scrape APIs can’t recover error payloads, breaking fault‑tolerant flows. | 2 comments, no 👍 – highlighted by users building proxy‑aware agents. |
| **75356** | *Cannot open Claude‑generated HTML reports in the iPhone app* | Mobile‑first developers lose the ability to view rich reports on‑the‑go. | 2 comments, no 👍 – request for a “preview” button in the iOS client. |
| **75538** | *Bun 1.4.0 segfaults with ~25 concurrent background subagents (Windows)* | Stability issue for high‑throughput Windows pipelines; can crash whole CLI session. | 1 comment, no 👍 – early bug report, needs upstream fixes. |
| **75394** | *Model auto‑switches to Opus when security keywords appear* | Undermines the purpose of the new Fable 5 model for security audits. | 1 comment, no 👍 – echo of issue 66728, users demand stable model selection. |
| **75398** | *Remote‑Control status indicator missing on desktop/web* | Users can’t quickly see if the desktop client is connected, leading to confusion in multi‑device setups. | 1 comment, no 👍 – minor UI bug but impacts workflow visibility. |

*All links:* https://github.com/anthropics/claude-code/issues/[issue‑number]  

---

### 4. Key PR Progress (10 top pull requests)

| # | PR | Core contribution | Status |
|---|----|-------------------|--------|
| **78371** | *Harden ralph‑wiggum plugin: bounded iterations, push/publish guard, stop‑hook fixes* | Adds safety limits to the powerful `ralph‑wiggum` loop plugin, preventing runaway iterations and accidental pushes/merges. | **Closed** (merged) – safeguards introduced. |
| — | *(No other PRs merged in the last 24 h)* | The repository saw only this PR activity today; other changes are pending review or in earlier stages. | — |

*Full PR list (last 24 h):* https://github.com/anthropics/claude-code/pulls?q=is%3Apr+updated%3A2026-09-01..2026-09-02  

---

### 5. Feature Request Trends  

From the recent issue set, the community’s most‑requested directions are:

1. **Safer, more granular safety filtering** – multiple false‑positive “cyber” blocks and unintended model downgrades show demand for configurable filter thresholds or “trusted‑session” modes.  
2. **Stable model selection** – users want the chosen model (e.g., Fable 5) to persist across sub‑agents, session resumes, and security‑keyword scanning.  
3. **Improved UI/UX for terminals and desktop** – clickable URLs, remote‑control status icons, and consistent IDE‑detection behavior are recurrent pain points.  
4. **Mobile‑first reporting** – opening generated HTML reports directly from the iOS app is a frequent request.  
5. **Robust error handling in WebFetch** – returning bodies on HTTP error codes is essential for resilient agents.  

---

### 6. Developer Pain Points  

| Area | Recurring frustration |
|------|-----------------------|
| **Safety filter false positives** | Sessions are abruptly halted on innocuous language, forcing restarts and loss of context. |
| **Model auto‑switching / downgrade** | Fable 5 is automatically replaced by Opus when “security” terms appear, defeating the purpose of the new model. |
| **Sub‑agent model persistence** | Overrides disappear after a resume, leading to inconsistent behavior. |
| **Stability under load** | Segfaults (e.g., Bun on Windows) and auto‑compact failures inflate token counts and cause crashes. |
| **Terminal & UI quirks** | Non‑clickable links, missing status indicators, and IDE‑poll flashing degrade the interactive experience. |
| **Mobile report consumption** | No native way to preview HTML reports on the Claude iPhone app. |

Addressing these themes—especially safety‑filter ergonomics and model‑selection stability—will be critical for broader adoption of Claude Code in security‑sensitive and high‑throughput development pipelines.  

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex – Community Digest**  
*Date: 2026‑09‑02*  

---

### 1. Today’s Highlights  
- The Rust SDK shipped **v0.152.0**, adding full‑text search in Vim mode, on‑screen rate‑limit banners and a revamped terminal UI (`codex exec`).  
- A burst of α releases (v0.153.0‑alpha 1/2/4) signals the next major SDK iteration.  
- Community discussion is dominated by **voice‑enabled IDE/TUI support** and a critical bug where Codex agents replay older messages instead of the latest user turn.

---

### 2. Releases  
| Release | Key changes | GitHub |
|---------|-------------|--------|
| **rust‑v0.152.0** | • Vim mode now supports `/` and `?` searches, highlighted matches, and repeat navigation (`n` / `N`).  <br>• Rate‑limit banners with quick actions (usage view, credit add, reset, plan switch).  <br>• New terminal UI and `codex exec` command for richer shell interaction. | https://github.com/openai/codex/releases/tag/rust-v0.152.0 |
| **rust‑v0.153.0‑alpha 1, 2, 4** | Early preview of the next SDK generation (internal API refinements, preparatory work for upcoming feature flags). | https://github.com/openai/codex/releases/tag/rust-v0.153.0-alpha.4 |

*No other stable releases were published in the last 24 h.*

---

### 3. Hot Issues (most‑commented / highest‑reaction)

| # | Title / Tag | Why it matters | Community reaction |
|---|-------------|----------------|--------------------|
| **8648** – *bug, context, agent* – “Codex replies to earlier messages instead of latest one” | Breaks conversational reliability, especially for multi‑turn coding sessions. | 83 comments, 62 👍 – heavy discussion on regression testing. |
| **3000** – *enhancement, extension* – “Voice transcription for IDE extension” | Direct dictation would close the hands‑free loop for many developers. | 36 comments, **218 👍** – main feature request for next quarter. |
| **14630** – *enhancement, TUI* – “Voice transcription for TUI” | Mirrors the IDE demand; important for terminal‑only users. | 21 comments, 58 👍. |
| **11915** – *enhancement, sandbox* – “Approval mode ‘read‑only’ option” | Enables safe inspection of generated code without accidental writes. | 20 comments, 41 👍. |
| **29639** – *bug, windows‑os, mcp, app* – “Browser Node REPL fails in Windows Desktop + WSL” | Blocks cross‑platform debugging workflows for Windows users. | 18 comments, 5 👍. |
| **40782** – *bug, app* – “macOS UI text becomes thin & blurry after update” | Visual regressions affect usability on Apple Silicon. | 12 comments, 4 👍. |
| **18343** – *enhancement, agent, memory* – “Scoped memory management (global / project / per‑thread)” | Gives developers fine‑grained control over state persistence. | 12 comments, 11 👍. |
| **41088** – *bug, windows‑os, app* – “Local execution fails after Desktop update” | Regression that prevents immediate code execution on the latest client. | 11 comments, 0 👍. |
| **38417** – *bug, CLI, exec* – “codex‑code‑mode‑host 0.147.0 crashes on every shell exec (SIGTRAP)” | Stops the core CLI workflow for WSL2 users. | 11 comments, 0 👍. |
| **39121** – *bug, app, session* – “Historical local projects disappear after update” | Data‑loss risk for long‑running projects; impacts trust. | 11 comments, 1 👍. |

*All links follow the pattern `https://github.com/openai/codex/issues/<number>`.*

---

### 4. Key PR Progress (most impactful changes)

| PR | Summary | Impact |
|----|---------|--------|
| **#42142** – *Add early rate‑limit warnings for Plus & Team plans* | Shows proactive alerts when the usage window is > 50 % consumed. | Reduces unexpected throttling for power users. |
| **#42140** – *Add redo support to Vim composer history* | Implements a bounded redo stack (`Ctrl‑R`) for Composer drafts. | Completes the classic Undo/Redo loop for Vim‑mode users. |
| **#42137** – *Prewarm shell snapshots for eligible turns* | Captures shell environment asynchronously before the turn runs. | Improves latency for `codex exec` commands. |
| **#42135** – *Support thread forks from symlinked session roots* | Fixes session‑forking when the `sessions` directory is a symlink. | Improves reliability of multi‑threaded workflows on complex repo layouts. |
| **#42134** – *Include app link metadata in MCP approval elicitations* | Propagates `link_id` and `link_is_implicit` in tool‑approval requests. | Enables per‑account approval granularity for integrated apps. |
| **#42133** – *Scope session MCP approvals to app account links* | Adds the app account link to the approval cache key, avoiding cross‑account reuse. | Tightens security for multi‑account environments. |
| **#42132** – *Bound Git root discovery for metadata enrichment* | Limits Git‑root probing to avoid blocking the async runtime. | Makes CLI start‑up faster, especially on large monorepos. |
| **#42118** – *Refine hook activity rendering in the TUI* | Moves running hook indicators to a dedicated activity bar. | Improves readability of long conversations in the terminal UI. |
| **#42114** – *Centralize remote plugin mutations in `PluginsManager`* | Consolidates install/uninstall orchestration for remote plugins. | Reduces race conditions and improves plugin state consistency. |
| **#42113** – *Apply remote platform semantics to exec safety checks* | Executes safety‑checks using the remote executor’s OS semantics. | Prevents accidental Windows/PowerShell command execution on Linux hosts. |

*All PR links: `https://github.com/openai/codex/pull/<number>`.*

---

### 5. Feature Request Trends  

| Trend | Representative Issues | What developers are asking for |
|-------|----------------------|---------------------------------|
| **Voice‑first interaction** | #3000 (IDE), #14630 (TUI) | Built‑in microphone button, push‑to‑talk, and seamless dictation across UI layers. |
| **Fine‑grained memory & state scopes** | #18343 (scoped memory), #11915 (read‑only mode) | Ability to declare global, project, thread‑local, or hybrid memories; read‑only sandboxes for safe review. |
| **Enhanced editor ergonomics** | #2379 (undo/redo), #42140 (redo in Vim), #8648 (conversation ordering) | Standard undo/redo, reliable turn ordering, searchable drafts, and stable Vim navigation. |
| **Safety & permission gating** | #33624 (hard bulk‑delete confirmation), #42113 (remote platform safety), #42142 (rate‑limit warnings) | Explicit confirmation dialogs, per‑action permissions, and proactive usage alerts. |
| **Cross‑platform consistency** | #29639, #38417, #41088, #39121 (Windows/WSL issues) | Uniform behavior of tool‑calls, REPLs, and session persistence across macOS, Linux, and Windows. |

---

### 6. Developer Pain Points  

| Issue area | Core frustration |
|------------|-------------------|
| **Conversation drift** – agents answering stale messages (#8648). |
| **Tool‑call compliance** – agents repeatedly violating explicit constraints (#40646, #37278). |
| **Automatic context compaction** – loss of history or goals (#36642, #36712, #31659). |
| **Platform‑specific crashes** – WSL2 crashes (#38417), Windows REPL failures (#29639). |
| **UI regressions after updates** – blurry text (#40782), missing sub‑agent activity (#32502). |
| **Session persistence** – projects disappearing after desktop updates (#39121). |
| **Safety gate over‑reach** – false positives on benign summaries (#41672). |
| **Permission handling** – agents editing config files without consent (#15680). |
| **Performance warnings** – unexpected rate‑limit banners and early warnings (#42142). |
| **Plugin/extension reliability** – remote plugin catalog handling, MCP server spawning (#42114, #42117). |

Addressing these recurring pain points will be essential for maintaining developer trust and improving the overall Codex experience.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI – Community Digest**  
*Date: 2026‑09‑02*  
Source: github.com/google‑gemini/gemini‑cli  

---  

### 1. Today’s Highlights  
- The team shipped **v0.59.0‑preview.0** and a new nightly **v0.59.0‑nightly.20260901** – both contain a small core‑fix that curbs a “waiting‑input” dead‑lock in shell‑tool execution.  
- A flurry of high‑priority bugs around **sub‑agent stability**, **browser‑agent session handling**, and **memory‑inbox validation** were opened or updated, indicating a community focus on reliability for multi‑agent workflows.  

---  

### 2. Releases  

| Version | Type | Notable Changes |
|---------|------|-----------------|
| **v0.59.0‑preview.0** | Preview | Core fix to prevent “waiting input” dead‑locks (`fix(core): prevent …`). Includes version bump automation. |
| **v0.59.0‑nightly.20260901** | Nightly | Diff: https://github.com/google‑gemini/gemini-cli/compare/v0.59.0‑nightly.20260831.g0bd1d4397...v0.59.0‑nightly.20260901.g0bd1d4397 – adds the same core fix and updates the changelog generation pipeline. |
| **v0.58.0** | Stable | Path‑ignore symlink handling improvement (`fix(core): ensure consistent symlink evaluation in ignore path handling`). |

---  

### 3. Hot Issues (most‑discussed & high impact)

| # | Title & Link | Why It Matters | Community Reaction |
|---|--------------|----------------|--------------------|
| **22323** | *Subagent recovery after MAX_TURNS reported as GOAL success* – <https://github.com/google-gemini/gemini-cli/issues/22323> | Mis‑reports termination reason, breaking expectations for turn‑limit handling. | 13 comments, 2 👍 – developers are reproducing in large repos, calling for clearer status semantics. |
| **19873** | *Leverage model's bash affinity via zero‑dependency OS sandboxing* – <https://github.com/google-gemini/gemini-cli/issues/19873> | Proposes a security‑focused sandbox that still lets the model use native POSIX tools. | 9 comments, 1 👍 – strong interest from power‑users who wish to retain shell richness without extra containers. |
| **21409** | *Generalist agent hangs* – <https://github.com/google-gemini/gemini-cli/issues/21409> | Generalist hangs on trivial ops (e.g., folder creation), halting whole sessions. | 8 comments, 8 👍 – many reports of long‑running stalls; priority P1. |
| **22745** | *Assess impact of AST‑aware file reads, search, and mapping* – <https://github.com/google-gemini/gemini-cli/issues/22745> | Evaluates whether AST‑based tools can cut token waste and improve turn efficiency. | 7 comments, 1 👍 – foundational for future code‑understanding features. |
| **21968** | *Gemini does not use skills & sub‑agents enough* – <https://github.com/google-gemini/gemini-cli/issues/21968> | Highlights under‑utilisation of custom skills, affecting productivity. | 6 comments – community suggesting richer skill discovery heuristics. |
| **26525** | *Deterministic redaction & reduce Auto‑Memory logging* – <https://github.com/google-gemini/gemini-cli/issues/26525> | Security‑related: secret redaction happens **after** content is already in model context. | 5 comments – security team pushing for pre‑redaction. |
| **25166** | *Shell command execution stuck with “Waiting input”* – <https://github.com/google-gemini/gemini-cli/issues/25166> | Directly tied to the core fix in the latest preview release. | 4 comments, 3 👍 – high urgency; many users hit this bug in CI pipelines. |
| **24246** | *CLI 400 error with > 128 tools* – <https://github.com/google-gemini/gemini-cli/issues/24246> | Limits scalability for large tool‑sets; impacts enterprises with many extensions. | 3 comments – request for smarter tool‑pruning logic. |
| **21983** | *Browser sub‑agent fails in Wayland* – <https://github.com/google-gemini/gemini-cli/issues/21983> | Affects Linux users on modern desktop environments; blocks UI‑driven workflows. | 4 comments, 1 👍 – requests for Wayland compatibility shim. |
| **29153** | *v0.57.0 hangs on “Waiting for authentication...” on macOS* – <https://github.com/google-gemini/gemini-cli/issues/29153> | New‑release regression for macOS developers; blocks first‑run experience. | 2 comments – early reports, likely to be fixed in next nightly. |

---  

### 4. Key PR Progress  

| # | PR & Link | Core Contribution |
|---|-----------|-------------------|
| **29158** | *Sanitize hard‑coded CrUX API key* – <https://github.com/google-gemini/gemini-cli/pull/29158> | Removes exposed Google API key from `chrome-devtools-mcp` bundle – essential for supply‑chain security. |
| **29156** | *Stop nullifying user git config in shell executions* – <https://github.com/google-gemini/gemini-cli/pull/29156> | Restores access to `~/.gitconfig` for user‑provided git credentials; fixes many CI/CD scripts. |
| **29155** | *Decode BOM‑encoded content correctly* – <https://github.com/google-gemini/gemini-cli/pull/29155> | Fixes false‑positive “non‑empty” detection for UTF‑16/UTF‑32 plan files, improving plan validation. |
| **29151** | *Handle skill precedence & active state case‑insensitively* – <https://github.com/google-gemini/gemini-cli/pull/29151> | Prevents hidden skill collisions on Windows/macOS where file‑system case differs. |
| **29162** | *Bump version to 0.60.0‑nightly.20260901* – <https://github.com/google-gemini/gemini-cli/pull/29162> | Automated release plumbing for the next nightly cycle. |
| **29159** | *Changelog for v0.59.0‑preview.0* – <https://github.com/google-gemini/gemini-cli/pull/29159> | Generates the official release notes; ties PR to #18505. |
| **29115** | *Enforce strict permission & ownership checks on system‑wide config paths* – <https://github.com/google-gemini/gemini-cli/pull/29115> | Hardens loading of global config files on Windows & POSIX, mitigating privilege‑escalation vectors. |
| **29116** | *Mitigate NTFS 8.3 short‑name path issues* – <https://github.com/google-gemini/gemini-cli/pull/29116> | Prevents path‑traversal bypasses on Windows where short names hide prohibited directories. |
| **29022** | *Retain ask_user question in text history* – <https://github.com/google-gemini/gemini-cli/pull/29022> | Adds `ui.keepAskUserQuestionsInHistory` flag, improving session reproducibility. |
| **28863** | *Prompt for consent on env‑var changes & sanitize runtime env* – <https://github.com/google-gemini/gemini-cli/pull/28863> | Gives users explicit control over environment variables injected by extensions, addressing security concerns. |

---  

### 5. Feature Request Trends  

| Trend | Representative Issues / PRs | Insight |
|-------|-----------------------------|---------|
| **AST‑aware code navigation** | #22745, #22746 | Developers want precise method‑boundary reads, reducing token waste and turn count. |
| **Zero‑dependency sandbox for Bash affinity** | #19873 | A secure execution sandbox that still lets the model use native POSIX tools is in high demand. |
| **Improved sub‑agent visibility & sharing** | #22598, #21763 | Users request easy export (`/chat share`) and richer bug‑reports that include sub‑agent context. |
| **Tool‑set scaling & management** | #24246, #26525, #26523 | As tool ecosystems grow, users need deterministic redaction, memory‑patch validation, and smarter tool‑pruning. |
| **Cross‑platform UI reliability** | #21983 (Wayland), #29153 (macOS auth), #22465 (Vite interactive prompt) | Platform‑specific hangs are blocking adoption; fixes for Wayland, macOS auth flow, and interactive prompts are repeatedly requested. |
| **Documentation completeness** | PRs #29013, #29011, #29009 | Missing CLI flags and env‑var docs cause confusion; the team is actively closing the gap. |

---  

### 6. Developer Pain Points  

1. **Hangs & “Waiting input” dead‑locks** – especially after shell commands or when the generalist agent is invoked (Issues #21409, #25166). The upcoming core fix in v0.59.0‑preview targets this.  
2. **Sub‑agent status mis‑reporting** – MAX_TURNS and browser‑agent overrides are hiding real termination reasons (Issues #22323, #22267).  
3. **Tool‑limit errors** – > 128 tools trigger 400 responses, breaking large enterprises (Issue #24246).  
4. **Symlink & path handling quirks** – `.gemini` folder, Windows short names, and symlinked skill directories cause discovery failures (Issues #20079, PR #28866, PR #29017).  
5. **Security & redaction gaps** – Auto‑Memory redaction occurs after context ingestion; hard‑coded API keys still surface (Issues #26525, PR #29158).  
6. **Missing or outdated docs** – Undocumented flags and environment‑var settings lead to misuse (PRs #29013, #29009).  
7. **Platform‑specific regressions** – Wayland, macOS authentication, and interactive prompts hinder smooth onboarding (Issues #21983, #29153, #22465).  

Addressing these recurrent pain points will improve stability, security, and developer confidence in the Gemini CLI ecosystem.  

---  

*Prepared by the Gemini CLI technical analyst team.*  

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI – Community Digest**  
*Date: 2026‑09‑02*  

---  

### 1. Today’s Highlights  
- The **v1.0.83‑1** release arrived with UI‑level sorting improvements for the Sessions sidebar and a new enterprise‑admin setting for forced organization sign‑in.  
- OOM‑related crashes and several session‑restoration regressions dominate the issue chatter, reflecting growing stability concerns as users adopt longer, more complex sessions.  

---  

### 2. Releases  

| Version | Notable changes |
|---------|-----------------|
| **v1.0.83‑1** (2026‑09‑01) | • Added **Recent, Created, Name, and classic “None” sorting** to the split‑Sessions sidebar, persisting the chosen order across restarts. <br>• **Enterprise admins** can now pin sign‑in to approved GitHub orgs via the new `forceLoginOrgs` managed setting. <br>• Improved `/mcp config` handling and the MCP add/edit workflow. |

---  

### 3. Hot Issues  

| # | Title / Brief | Why it matters | Community reaction |
|---|----------------|----------------|--------------------|
| **13** *(closed)* | *CLI input should have a vi/vim input mode* | Adds modal‑editing for power‑users, aligning the CLI with Vim‑centric workflows. | 9 comments, **75 👍** |
| **4664** | *Copilot CLI crashes with JavaScript heap OOM when resuming a long‑standing session* | Session‑resume stability is critical for enterprise‑scale usage; OOM kills productivity. | 5 comments, 0 👍 |
| **4525** | *1.0.81‑1 sends legacy `initialize` after successful modern `server/discover`, causing -32022* | Breaks compatibility with newer MCP servers, causing connection failures. | 4 comments, 0 👍 |
| **3688** | *Repository‑level custom agents resolved relative to git root, but skills and .mcp.json relative to cwd* | Inconsistent discovery paths lead to missing agents/skills, confusing developers. | 3 comments, **3 👍** |
| **3421** | *Azure DevOps MCP Server connected but CLI commands fail with “Dangerous Request.Path”* | Hinders adoption in Azure DevOps environments; a security‑related error block. | 3 comments, 0 👍 |
| **4438** | *`disable-model-invocation: true` makes a skill unreachable, not manual‑only* | Skill configuration semantics are broken; affects extensibility via custom skills. | 3 comments, **5 👍** |
| **4681** | *MCP OAuth: initialize request after successful login omits User‑Agent header* | Breaks custom OAuth flows that rely on header validation; a subtle but blocking bug. | 2 comments, 0 👍 |
| **4680** | *CLI sends wrong model ID to custom OpenAI‑compatible endpoint, killing the session* | Misrouting destroys sessions when users point the CLI at self‑hosted models. | 2 comments, 0 👍 |
| **4672** | *1.0.82 Regression: “Unknown command: /model” with BYOK* | BYOK (bring‑your‑own‑model) is a major enterprise feature; regression erodes trust. | 2 comments, **1 👍** |
| **4686** | *Node.js OOM crash after ~37 min – 31,965 leaked async libuv handles* | Long‑running sessions are common in CI/CD pipelines; memory leaks are unacceptable. | 1 comment, 0 👍 |

---  

### 4. Key PR Progress  
No pull requests were merged or updated in the last 24 hours. The repository remains in a **maintenance‑only** mode for today, with focus on issue triage and the recent release.  

---  

### 5. Feature Request Trends  

| Emerging theme | Representative issues |
|----------------|----------------------|
| **Editor ergonomics** – modal (Vim/Vi) input support. | #13 |
| **Robust session handling** – OOM avoidance, reliable resume of long sessions, proper cleanup of stale session IDs. | #4664, #4686, #4676, #4673 |
| **Agent & skill discovery consistency** – unified base directory, correct handling of `disable-model-invocation`, duplicate look‑ups, and persistence across resume. | #3688, #4438, #4637, #4674 |
| **BYOK and model command stability** – commands like `/model` must work with custom models; correct model ID propagation. | #4672, #4680 |
| **Enterprise & auth configurability** – forced org sign‑in, correct OAuth headers, handling of dangerous request paths. | #4681, #3421 |
| **Resource‑aware concurrency** – sub‑agent limiter should respect host load; sandbox config must be honored. | #4688, #4679 |

---  

### 6. Developer Pain Points  

1. **Memory‑related crashes** – multiple OOM reports (session resume, long‑running shells) indicate the embedded Node runtime still leaks or over‑allocates.  
2. **Session‑resume regressions** – custom agents, model settings, and working‑state flags are not consistently restored, causing silent feature loss.  
3. **Inconsistent path resolution** – agents, skills, and configuration files are discovered from differing roots, leading to “skill not found” errors.  
4. **BYOK command breakage** – the `/model` command and model‑ID propagation to custom endpoints are unreliable, hindering enterprise model adoption.  
5. **Authentication header omissions** – missing `User‑Agent` in OAuth flows breaks custom MCP servers that enforce strict header validation.  
6. **Enterprise policy enforcement** – lack of a clear, enforceable way to pin sign‑in to specific orgs was only just added, highlighting prior gaps.  
7. **PowerShell ConstrainedLanguage noise** – every shell command prints spurious errors under constrained mode, impacting managed Windows environments.  

---  

*All issue links point to the official GitHub tracker, e.g., https://github.com/github/copilot-cli/issues/13.*  

Stay tuned for tomorrow’s update!

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI – Community Digest (2026‑09‑02)**  
*Your quick‑scan of what’s happening in the Kimi Code CLI repository.*

---

## 1. Today’s Highlights
- **Version 1.50.0 released** – the latest stable bump brings the `kosong` dependency up to 0.56.0 and adds a deprecation‑aware shell migration flow.  
- Two long‑standing issues were closed (a task‑prompt UX problem and an intermittent “Task” stall), showing active maintenance on stability.  
- Documentation work for plugins is progressing, and a migration‑aware shell update is now merged, preparing users for the upcoming Kimi Code deprecation path.

---

## 2. Releases
### **v1.50.0** – 2026‑09‑01 → 2026‑09‑02  
*Release notes* – https://github.com/MoonshotAI/kimi-cli/releases/tag/v1.50.0  

| Category | Change |
|----------|--------|
| **Bug fix** | *kosong*: Omit empty `anthropic-beta` header when no beta features are declared (`#2580`). |
| **Dependency bump** | `kosong` upgraded to **0.56.0** (`#2581`). |
| **Feature** | Shell now supports a **deprecation‑aware migration flow** with a one‑key “upgrade to Kimi Code” command (`#2630`). |
| **Chore** | Release process cleanup & version sync for the `kimi-code` wrapper. |

*Why it matters:* The deprecation‑aware shell gives developers a safe, automated path from the legacy CLI to the newer Kimi Code ecosystem, reducing friction for teams still on older releases.

---

## 3. Hot Issues (Top 10 – currently 2 open‑closed items)
| # | Title | Type | Status | Why it matters | Community reaction |
|---|-------|------|--------|----------------|----------------------|
| **1287** | *When we are executing the previous task, we are unable to write a prompt for the next task* | Enhancement | **Closed** | Highlights a UX gap in the task‑chaining workflow; developers need to pre‑populate prompts for downstream tasks. | Closed with a fix (see PR #2630) – community expressed appreciation for the upcoming migration‑aware shell that resolves the lock‑out. |
| **1292** | *在调用 Task 的时候，有时会卡住* (Task sometimes hangs) | Bug | **Closed** | Intermittent hangs impact reliability of batch jobs and CI pipelines. | Fixed in v1.50.0 (kosong header tweak); minimal discussion, but the issue’s closure signals the team’s focus on stability. |

*Note:* No new open issues appeared in the last 24 h; the team is currently consolidating earlier feedback.

---

## 4. Key PR Progress (Top 10 – all 4 recent PRs)
| PR | Title | Author | State | Key contribution |
|----|-------|--------|-------|-------------------|
| **#2630** | *feat(shell): deprecation‑aware update flow with one‑key migration to Kimi Code* | jackfish212 | **Closed** | Implements the automated migration prompt shown in v1.50.0, guiding users to the new Kimi Code runtime. |
| **#2632** | *chore(release): bump kimi-cli to 1.50.0* | sailist | **Closed** | Bumps the package version, aligns the `kimi-code` wrapper, and updates release metadata. |
| **#2614** | *docs(plugins): document security and persistent data* | QIANLING-0831 | **Open** | Adds critical documentation for plugin developers on handling sensitive data and persisting state across CLI sessions. |
| **#742** | *Add `$ list skills like codex`* | ZacharyZhang-NY | **Closed** | Introduces a new `$ list` sub‑command exposing available “skills” (similar to Codex), improving discoverability for end‑users. |

*Why they matter:* PR #2630 is the cornerstone for the deprecation strategy; PR #2614 fills a documentation gap that many plugin authors have flagged. The `$ list skills` enhancement expands the CLI’s discoverability surface, aligning with community requests for better introspection tools.

---

## 5. Feature Request Trends
Analyzing the recent issue backlog (including the two closed items) reveals three recurring themes:

1. **Task‑flow ergonomics** – Developers want the ability to prepare or edit prompts for subsequent tasks while a current task is still running. This points to a demand for richer “pipeline” primitives in the CLI.  
2. **Reliability & dead‑lock prevention** – Sporadic hangs when invoking `Task` sub‑commands indicate a need for stronger timeout handling and clearer error reporting.  
3. **Plugin ecosystem support** – Documentation on security, persistent storage, and skill discovery suggests the community is expanding the plugin model and needs clearer contracts and tooling.

---

## 6. Developer Pain Points
- **Prompt lock‑out during task chaining** – The current UI blocks next‑step editing, forcing developers to wait for completion or restart the workflow.  
- **Intermittent task stalls** – Without explicit timeout or retry mechanisms, CI pipelines can hang, leading to wasted compute time.  
- **Insufficient plugin documentation** – New plugin authors struggle to understand security best‑practices and persistence APIs, slowing adoption of the extensibility layer.

*Actionable takeaways for the Kimi team:*  
- Prioritize a “pre‑flight prompt editor” or a “task queue preview” feature.  
- Introduce configurable timeouts and clearer error messages for `Task` calls.  
- Accelerate the documentation PR #2614 and consider adding example plugins that demonstrate secure data handling.

--- 

*Stay tuned for tomorrow’s digest – we’ll keep tracking migration progress, stability fixes, and community‑driven feature requests.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode Community Digest – 2026‑09‑02**

---

### 1. Today’s Highlights  
- **v1.18.26** landed with a batch of core bug‑fixes that improve Bedrock model handling, Claude‑5 session stability, and tool‑call timing accuracy.  
- The discussion around **auto‑discovering models** and **clipboard behavior** dominates the issue tracker, reflecting strong community demand for smoother local‑provider integration and UI ergonomics.

---

### 2. Releases  
**v1.18.26** – Core (released 2026‑09‑01)  
- **Claude 5** sessions now survive stale “thinking blocks” after prompt or tool changes.  
- **Bedrock GPT‑5.6** models accept a `none` reasoning‑effort flag and have more reliable replay handling.  
- Fixed timing drift in tool calls that previously accumulated during long‑running sessions.  

[Release notes ▶︎](https://github.com/anomalyco/opencode/releases/tag/v1.18.26)

---

### 3. Hot Issues (top 10 by community reaction)

| # | Title / Core Concern | Why It Matters | Community Reaction |
|---|----------------------|----------------|-------------------|
| [4283](https://github.com/anomalyco/opencode/issues/4283) | **Copy‑to‑clipboard broken** – selected text no longer copies. | Directly impacts daily workflow; users can’t grab code snippets. | 128 comments, 119 👍 |
| [6231](https://github.com/anomalyco/opencode/issues/6231) | **Auto‑discover models from OpenAI‑compatible endpoints**. | Eliminates manual `opencode.json` edits for LM Studio, Ollama, etc.; a long‑standing pain point. | 47 comments, 225 👍 |
| [10490](https://github.com/anomalyco/opencode/issues/10490) | **Add config to disable copy‑on‑select**. | Provides XTerm‑style control for users who prefer explicit copy actions. | 18 comments, 32 👍 |
| [19466](https://github.com/anomalyco/opencode/issues/19466) | **CPU spin while waiting on rate‑limit retries**. | Unexpected resource usage hurts laptops and CI runners. | 16 comments, 16 👍 |
| [7006](https://github.com/anomalyco/opencode/issues/7006) | **`permission.ask` hook defined but never fired**. | Breaks custom permission logic in plugins, limiting extensibility. | 14 comments, 24 👍 |
| [25570](https://github.com/anomalyco/opencode/issues/25570) | **Support multiple skills in a single prompt**. | Enables richer multi‑framework workflows (e.g., coding + search). | 8 comments, 22 👍 |
| [34344](https://github.com/anomalyco/opencode/issues/34344) | **Unlimited‑usage exploit via VPN rotation**. | Security‑risk: free‑tier limits can be bypassed, threatening cost control. | 7 comments, 0 👍 |
| [18011](https://github.com/anomalyco/opencode/issues/18011) | **LM Studio shows only 3/9 models** despite full `/v1/models`. | Reduces the value of local model farms; reliability issue for LAN setups. | 7 comments, 5 👍 |
| [46173](https://github.com/anomalyco/opencode/issues/46173) | **Upload attachments for agent tools (per‑session store)**. | Opens the door for PDFs, images, etc., to be processed by tools. | 2 comments, 0 👍 |
| [43598](https://github.com/anomalyco/opencode/issues/43598) | **Markdown preview of project files in the TUI**. | Makes reading documentation without leaving the terminal possible. | 2 comments, 1 👍 |

---

### 4. Key PR Progress (selected 10)

| PR | Summary | Impact |
|----|---------|--------|
| [40042](https://github.com/anomalyco/opencode/pull/40042) | **Model star ratings & capability filters** – UI for rating models and filtering by features (coding, reasoning, etc.). | Empowers users to pick optimal models quickly. |
| [40051](https://github.com/anomalyco/opencode/pull/40051) | **Inbox session workflow** – adds “inbox” tab layout with groups (Active/Today/Yesterday) and read/unread markers. | Improves session navigation, especially for heavy users. |
| [40030](https://github.com/anomalyco/opencode/pull/40030) | **`spinner_verbs` config** – customizable verb text next to TUI spinners. | Allows teams to align UX language with internal terminology. |
| [40018](https://github.com/anomalyco/opencode/pull/40018) | **Inject `session_id` for OpenRouter** – enables session‑level grouping on the provider side. | Improves cost tracking & quota management for OpenRouter users. |
| [40057](https://github.com/anomalyco/opencode/pull/40057) | **Scope prompt state to sessions** – separates draft/history per TUI session, prevents cross‑session bleed. | Fixes a subtle bug that caused lost prompt drafts. |
| [40069](https://github.com/anomalyco/opencode/pull/40069) | **Default header timeout for all providers** – extends the 300 s timeout beyond OpenAI. | Reduces premature failures on slower back‑ends. |
| [40070](https://github.com/anomalyco/opencode/pull/40070) | **Await initial plugin readiness before catalog reads**. | Guarantees a complete model catalog on first client start‑up. |
| [40062](https://github.com/anomalyco/opencode/pull/40062) | **Reconnect MCP servers on tool‑call failure**. | Prevents stale tool sets after transient network glitches. |
| [40061](https://github.com/anomalyco/opencode/pull/40061) | **Graceful handling of streamed‑end without finish frame**. | Stops “unknown” finish reasons and improves error reporting. |
| [40076](https://github.com/anomalyco/opencode/pull/40076) | **Expand `AWS_REGION` in Bedrock Mantle base URL**. | Fixes malformed endpoint URLs for non‑standard AWS regions. |

---

### 5. Feature Request Trends  

| Trend | Representative Issues/PRs |
|-------|---------------------------|
| **Local model discovery & management** | Auto‑discover models (#6231), LM Studio model list bug (#18011), Bedrock provider tweaks. |
| **User‑interface ergonomics** | Clipboard copy‑on‑select toggle (#10490), scrollbar visibility bug (#46680), custom theme loading (#46668), markdown preview in TUI (#43598). |
| **Permission & plugin extensibility** | `permission.ask` hook not firing (#7006), permission‑hook gating via plugins (#34327), PowerShell escape warnings (#40068). |
| **Multi‑skill / richer prompting** | Multiple skills per prompt (#25570), inbox workflow (#40051), spinner verb customization (#40030). |
| **Asset handling for tools** | Upload attachments per session (#46173), ability for tools to read PDFs/images. |
| **Security & rate‑limit robustness** | Unlimited usage exploit (#34344), CPU spin during back‑off (#19466), “Failed to fetch” black‑screen bug (#45227). |

---

### 6. Developer Pain Points  

1. **Clipboard behavior** – Inconsistent copy‑on‑select and broken clipboard APIs are the most‑commented issues, indicating a need for a stable, configurable text‑selection model.  
2. **Model onboarding friction** – Manual entry of model IDs for local providers remains a recurrent complaint; auto‑discovery is repeatedly requested.  
3. **Plugin permission flow** – Hooks such as `permission.ask` and `PermissionV2` are either silent or incomplete, limiting advanced customizations.  
4. **UI ergonomics on desktop/TUI** – Hidden scrollbars, missing markdown previews, and lack of custom‑theme loading hinder day‑to‑day usability.  
5. **Performance anomalies** – Unexpected CPU usage while idle and “Failed to fetch” UI freezes are breaking developer confidence, especially on resource‑constrained machines.  

Addressing these themes in upcoming releases should deliver the most immediate uplift to the OpenCode developer experience.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

**Pi Community Digest – 2026‑09‑02**  
*Technical snapshot for developers working with the Pi AI‑assistant platform.*

---

### 1. Today’s Highlights
- The community is pushing hard on **environment‑ and configuration‑standardisation** (XDG base directory, split `settings.json`, new env‑vars) and on fixing **tool‑execution reliability** (preflight abort handling, provider‑selection bugs, Gemini 3.x signature issue).  
- A cluster of UI‑focused PRs landed this week (TUI spinner, selection indicators, SIGWINCH handling) that will make the terminal experience smoother and more visually consistent.  

---

### 2. Releases
*No new releases were published in the last 24 h.*

---

### 3. Hot Issues (most talked‑about)

| # | Title / Core Problem | Why It Matters | Community Reaction |
|---|----------------------|----------------|---------------------|
| **2870** | *Follow XDG Base Directory* – Pi writes config/state to `$HOME` instead of `$XDG_CONFIG_HOME`. | Aligns Pi with Linux‑wide standards, avoids home‑directory clutter and eases containerised deployments. | 21 comments, **54 👍** (most‑up‑voted issue). |
| **4338** | *Agent reports “working” but makes no progress.* | Blocks productive sessions; highlights robustness gaps in the agent loop. | 8 comments, 2 👍; users shared logs and work‑arounds. |
| **5931** | *Copy‑paste from TUI inserts extra spaces/line‑breaks.* | Impairs copy‑editing workflow, especially for long code blocks. | 8 comments, 1 👍; several UI‑focused contributors chimed in. |
| **6996** | *Gemini 3.x models fail tool use – missing `thought_signature`.* | Directly affects a growing user base on Google Gemini models; tool‑calling is a core Pi feature. | 7 comments, no 👍 yet but rapid triage. |
| **8134** | *Agent stops after first tool call when hitting a plain‑HTTP provider behind a forward proxy.* | Breaks remote‑provider scenarios (e.g., self‑hosted OpenAI‑compatible endpoints) in corporate networks. | 6 comments, no 👍; flagged as high priority. |
| **6374** | *Model catalog fixes – reasoning‑level metadata mismatches.* | Accurate catalog is essential for model selection and cost‑estimation tooling. | 5 comments, 1 👍. |
| **4758** | *Split `settings.json` into user‑owned and dynamic state files.* | Prevents accidental overwrites, clarifies config vs. runtime state, improves CI reproducibility. | 4 comments, 0 👍. |
| **3591** | *Add `CLAUDE_CODE_OAUTH_TOKEN` env‑var for Anthropic provider.* | Enables headless CI usage for Claude‑Code models; fills a missing secret‑injection path. | 4 comments, 0 👍. |
| **8968** | *Providers missing API key disappear from model catalog.* | Users lose access to configured providers after a reload – a serious reliability issue. | 2 comments, 0 👍; quickly reproduced. |
| **8921** | *Documentation links don’t match heading anchors.* | Hinders onboarding and reference look‑ups; impacts release‑note discoverability. | 1 comment, 0 👍; low priority but noted for docs team. |

*All links:* `https://github.com/earendil-works/pi/issues/<num>`

---

### 4. Key PR Progress

| # | PR Title / Summary | What’s Delivered |
|---|--------------------|------------------|
| **8966** | *Fix provider default‑model selection & name failing auth provider.* | `--provider` now chooses the provider’s default model; auth failures report the specific provider that failed. |
| **8898** | *Wrap SIGWINCH self‑signal for restricted seccomp policies.* | Prevents TUI crashes when the process receives a window‑size change under hardened containers. |
| **8941** | *Add `supportsMaxOutputTokens` compat flag for OpenAI‑Responses.* | Allows gateways that reject `max_output_tokens` to be used without error. |
| **8936** | *Stop prepared parallel tools after a preflight abort.* | Guarantees aborted tool calls are never executed, preventing stray side‑effects. |
| **8937** | *Settle active turn before in‑memory fork.* | Fixes race where tool results were routed to a newly‑forked session, eliminating crashes. |
| **8946** | *Never serve a stale pre‑trust runtime after session replace.* | Guarantees extensions load against the correct trust context, fixing intermittent extension failures. |
| **8951** | *Hide headless (RPC‑mode) sessions from the resume picker by default.* | Cleans up the `/resume` UI, reducing noise for interactive users. |
| **8950** | *Keep theme markers visible after UI updates.* | Restores colour cues that indicate active UI elements, improving readability. |
| **8900** | *Adjust TUI selections in thinking‑mode, models and scoped models.* | Introduces a two‑column “→ ✓ xhigh” layout that clearly shows the active option. |
| **8799** | *Prettier “Working…” spinner inside the input editor border.* | Gives immediate visual feedback during long‑running model calls. |

*All links:* `https://github.com/earendil-works/pi/pull/<num>`

---

### 5. Feature Request Trends
1. **Configuration Hygiene & Standards** – Multiple issues ask for XDG compliance, separation of static vs. dynamic settings, and clearer env‑var handling for providers.  
2. **Robust Provider & Model Management** – Requests for better default model selection, transparent auth‑failure reporting, and handling of missing API keys indicate a need for more deterministic provider behaviour.  
3. **Extension & Tool Lifecycle Controls** – Developers want APIs to start fresh context windows, deregister event handlers, and control model/effort per sub‑agent tool.  
4. **TUI Usability Enhancements** – Frequent UI‑related requests (copy‑paste fidelity, fullscreen scrolling, mouse events, spinner aesthetics) show a focus on polishing the terminal experience.  
5. **Documentation Accuracy** – Misaligned heading anchors and missing release‑note links point to a desire for tighter docs‑code sync.

---

### 6. Developer Pain Points
- **Inconsistent Model Catalog** – Wrong reasoning‑level metadata and providers disappearing cause confusion and broken automation pipelines.  
- **Tool Execution Fragility** – Preflight aborts, missing signatures, and stale runtimes lead to silent failures or crashes during tool calls.  
- **Environment Configuration Overhead** – Scattered settings (`settings.json` vs. runtime state) and lack of XDG support make cross‑platform setups cumbersome.  
- **Networking Edge Cases** – Proxy handling for plain‑HTTP providers and NO_PROXY parsing errors break corporate‑network usage.  
- **UI Friction** – Copy‑paste glitches, missing visual cues, and cumbersome fullscreen scrolling degrade productivity for terminal‑heavy users.  

---

*Stay tuned for tomorrow’s update – we’ll track the resolution of the Gemini‑signature bug and the upcoming UI refinements.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code – Community Digest | 2026‑09‑02**

---

### 1. Today’s Highlights
- The CUA driver binaries were shipped in a new **v0.20.3** release, adding signed macOS builds and multi‑arch Linux/Windows packages.  
- A flurry of high‑visibility bugs (tool‑search thresholds, permission‑manager crashes, NDJSON queue failures) and major UI refactor work (Ink → OpenTUI) dominate the discussion, indicating a shift toward more stable tooling and a modern TUI foundation.

---

### 2. Releases
**cua‑driver‑rs v0.20.3** – pre‑built CUA driver binaries for macOS (codesigned & notarized universal binary + `QwenCuaDriver.app`), Linux (glibc 2.31+, x86_64 / arm64, unsigned) and Windows (UIAccess worker + native SDK payload, x86_64 / arm64).  
🛠 *Impact*: Simplifies local GPU‑accelerated inference setup for the Qwen Code ecosystem.  
🔗 [Release details →](https://github.com/QwenLM/qwen-code/releases/tag/cua-driver-rs-v0.20.3)

---

### 3. Hot Issues (most discussed / most impactful)

| # | Title / Core Problem | Why it matters | Community reaction |
|---|----------------------|----------------|--------------------|
| **8662** | *Migrate TUI rendering from Ink to OpenTUI* | The current Ink‑based UI suffers from flicker, viewport bugs, and a massive patch set. Moving to OpenTUI promises a cleaner, less‑hacky renderer. | 16 comments, active design discussion. |
| **10520** | *toolSearch threshold > 0 breaks llama.cpp (400 “failed to parse grammar”)* | Breaks the primary workflow for developers using multiple MCP tools with `llama.cpp`. | 7 comments, urgent repro steps provided. |
| **10530** | *400 “Failed to initialize samplers” in 0.22.3* | A regression affecting Qwen 3.8‑27B / 3.6‑35B models, halting generation entirely. | 5 comments, reproducible on several platforms. |
| **10218** | *`settings.permissions.allow` semantics changed in 0.22.1* | Unannounced shift from “auto‑approve list” to “registry whitelist” disables uncovered tools without prompting, causing silent failures. | 5 comments, many users request clearer docs. |
| **10162** | *Graceful degradation when NDJSON channel queue saturates* | Prevents hard crashes of daemon channels under heavy load; improves production robustness. | 5 comments, praised as a needed safety net. |
| **2339** | *Telegram Bot Mode (`--telegram` flag)* | Expands Qwen Code’s reach to remote, chat‑based workflows; a frequent community wish. | 4 comments, 3 👍 reactions, prototype ideas discussed. |
| **10583** | *Add lightweight Bubblewrap sandbox for Linux* | Offers OS‑level isolation without Docker/Podman, lowering resource overhead for local tool execution. | 4 comments, enthusiasm for a “fast sandbox”. |
| **10710** | *Session reload hides persisted assistant messages* | Affects reliability of the web‑shell daemon when a turn is killed mid‑flight. | 4 comments, reproducible in CI tests. |
| **10400** | *`tools.eager` entry named after `Object.prototype` key crashes PermissionManager* | A subtle bug that can bring down the whole daemon after a config reload. | 4 comments, workaround shared. |
| **10718** | *Ctrl+C exit warning overflows short terminals, scrolls banner off* | UI glitch that degrades UX on embedded terminals (e.g., VS Code, Sublime). | 2 comments, quick UI fix proposed. |

---

### 4. Key PR Progress

| # | PR | What it delivers | Why it’s important |
|---|----|------------------|--------------------|
| **10457** | *feat(dingtalk): native interactive permission cards* | Turns DingTalk permission prompts into rich cards with Allow/Den​y options. | Improves UX for enterprise chat integrations. |
| **10747** | *feat(web‑shell): expose session‑artifact snapshots* | Adds `onSessionArtifactsChange` callback delivering full, versioned artifact lists. | Enables external tooling (e.g., CI, auditors) to track session state. |
| **10687** | *fix(cli): guard channel pidfiles against PID reuse* | Stores start‑token and validates against recycled PIDs, preventing stray kills. | Increases daemon reliability on long‑running hosts. |
| **10691** | *fix(dws): isolate direct‑message ingestion* | Persists direct messages before DWS reader continues, preserving order across conversations. | Removes race conditions that caused lost messages. |
| **10449** | *perf(dev): pnpm worktree bootstrap foundation* | Introduces optional frozen pnpm bootstrap for auxiliary git worktrees, keeping existing npm pipelines untouched. | Speeds up CI setup for large monorepo builds. |
| **9260** | *fix(web‑shell): keep manual session name across `/clear`* | Session titles set by users survive a `/clear` command. | Improves continuity for long‑running debugging sessions. |
| **9402** | *feat: agent board – share work across independent agents* | Introduces a portable “Board” layer that records user‑visible sequence of agent actions. | Lays groundwork for collaborative multi‑agent workflows. |
| **10746** | *fix(cli): hide unavailable external editor option* | Verifies `general.preferredEditor` exists before offering “Modify with external editor”. | Eliminates confusing error dialogs on mis‑configured environments. |
| **10697** | *feat(serve): workspace‑scoped Skills runtime* | Moves Skills management into per‑workspace runtimes, tracking revisions and epochs. | Enables dynamic skill hot‑swap without restarting the daemon. |
| **8927** | *feat(channels): bound session lifetime with `sessionRotation`* | Adds per‑channel limits (`maxTurns` / `maxTime`) that automatically rotate sessions. | Prevents session bloat and improves resource cleanup. |

---

### 5. Feature Request Trends
| Trend | Representative Issues / PRs |
|-------|-----------------------------|
| **Alternative UI / TUI Modernization** | #8662 (OpenTUI migration), #10718 (Ctrl+C warning), #10728 (OpenTUI review follow‑ups) |
| **Remote / Chat‑Based Interfaces** | #2339 (Telegram bot), #10457 (DingTalk cards), #10583 (Bubblewrap sandbox for safer remote tool execution) |
| **Granular Permission & Approval Controls** | #10218 (permissions.allow semantics), #10714 (approvalMode on standalone sessions), #10705 ( `/approve` race in non‑primary workspaces) |
| **Performance & Resource Management** | #10162 (NDJSON queue throttling), #10691 (direct‑message isolation), #10449 (pnpm bootstrap), #10733 (cursor rewrite avoidance) |
| **Extensibility & Extension Reliability** | #10741/​#10742 (extensions install silently failing), #10746 (editor option hide), #10687 (pidfile guard) |

---

### 6. Developer Pain Points
- **Stability of Tool & Permission System** – Frequent crashes from `tools.eager` entries, silent permission denials, and `/approve` failures indicate the permission manager needs tighter validation and clearer error reporting.  
- **CLI/Extension Installation Failures on Windows** – Silent exits when installing extensions from zip URLs (issues #10741, #10742) frustrate Windows developers and demand a more robust installer flow.  
- **TUI Rendering Bugs** – Flicker, viewport mis‑alignment, and exit‑warning overflows show that the Ink‑based UI is reaching its technical limits, driving the OpenTUI rewrite.  
- **Resource‑Bound Daemon Queues** – NDJSON queue saturation and session‑rotation limits are surfacing as production‑grade concerns; developers want graceful back‑pressure rather than abrupt channel teardown.  
- **Cross‑Platform Build Pain** – Node 20 ESM errors (#10698) and unsigned Linux/Windows binaries highlight the need for smoother CI pipelines and better packaging defaults.

---  

*All links point to the Qwen Code GitHub repository.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

**DeepSeek TUI – Community Digest (2026‑09‑02)**  
*Your daily snapshot of the most relevant activity in the DeepSeek‑TUI repository.*

---

## 1. Today's Highlights
- The project is in a rapid stabilization phase: several flaky‑test failures were closed, and a handful of UI‑polish bugs (composer chrome, focus handling, startup branding) were fixed in the last 24 h.  
- A major functional milestone landed – native **ChatGPT PKCE sign‑in** for the `openai‑codex` route – removing the hard dependency on the external Codex CLI.

---

## 2. Releases
*No new version was published in the last 24 h.*

---

## 3. Hot Issues (10 of the most noteworthy)

| # | Title & Link | Why it matters | Community reaction |
|---|--------------|----------------|--------------------|
| 4394 | **Compaction: publish and enforce a structured survival contract** – <https://github.com/Hmbown/DeepSeek-TUI/issues/4394> | Addresses a gap in the “compaction” subsystem where the survival contract (state‑persistence spec) was only implicit. Closing it will make long‑running agents more reliable across restarts. | Closed after 4 comments; no 👍 but the author and reviewers emphasized the need for deterministic state. |
| 5605 | **Flaky test: `remote_control::separate_predispatch_crashes_on_one_run_get_distinct_recovery_turn_ids`** – <https://github.com/Hmbown/DeepSeek-TUI/issues/5605> | Highlights intermittent failures under full‑suite parallel CI, indicating hidden race conditions in the remote‑control module. Fixes improve CI stability. | 3 comments, detailed reproduction steps; no 👍 but rapid triage shows community vigilance. |
| 5735 | **Flaky test: `runtime_chat_relay::failed_state_writes…exact_retry_reopens`** – <https://github.com/Hmbown/DeepSeek-TUI/issues/5735> | Another parallel‑load flake, this time in the chat‑relay runtime. Demonstrates systemic concurrency fragility that must be addressed before larger releases. | 2 comments; linked to #5605, indicating a pattern of CI‑related reliability work. |
| 5713 | **Enhancement: `wire = "responses" | "anthropic"` for `kind="openai-compatible"`** – <https://github.com/Hmbown/DeepSeek-TUI/issues/5713> | Enables the OpenAI‑compatible custom provider to correctly route to Anthropic‑style responses, expanding the ecosystem of usable back‑ends. | 2 comments; community values multi‑provider flexibility. |
| 5778 | **Native ChatGPT/Codex sign‑in without Codex CLI** – <https://github.com/Hmbown/DeepSeek-TUI/issues/5778> | Removes a hard barrier for end‑users; aligns DeepSeek‑TUI with modern OAuth‑PKCE flows. This was the driver behind PR #5784. | 1 comment; quick closure after PR merged, showing strong demand. |
| 5522 | **Make first run progressive instead of front‑loading config** – <https://github.com/Hmbown/DeepSeek-TUI/issues/5522> | Improves onboarding UX, especially for non‑English users who hit an overwhelming settings screen on first launch. | 1 comment; reflects broader UI‑accessibility concerns. |
| 5757 | **Restore rounded, truthful active‑session composer chrome** – <https://github.com/Hmbown/DeepSeek-TUI/issues/5757> | Visual consistency with the Tideline design language; small polish that influences perceived quality. | 1 comment; accepted quickly, indicating design‑driven community. |
| 5761 | **Show Tideline Startup on every clean interactive launch** – <https://github.com/Hmbown/DeepSeek-TUI/issues/5761> | Guarantees new users see the intended welcome screen, preventing “black‑box” launches. | 1 comment; aligns with UX fixes. |
| 5754 | **Align Tideline startup with approved Codewhale mark** – <https://github.com/Hmbown/DeepSeek-TUI/issues/5754> | Branding consistency; the new ASCII‑art mark replaces a deprecated one. | 1 comment; modest but important for visual identity. |
| 5806 | **OpenDesign compatibility – MCP today, native runtime adapter upstream** – <https://github.com/Hmbown/DeepSeek-TUI/issues/5806> *(open)* | Proposes integration with the OpenDesign studio, turning DeepSeek‑TUI into a design‑engine front‑end. Signals a strategic expansion toward design‑centric workflows. | No comments yet, but the issue is open and tagged as an enhancement, indicating growing interest. |

---

## 4. Key PR Progress (10 most impactful)

| # | Title & Link | What it delivers / fixes |
|---|--------------|--------------------------|
| 5807 | **Fix bundled model catalog staleness** – <https://github.com/Hmbown/DeepSeek-TUI/pull/5807> *(open)* | Reduces TTL from 10 years to 30 days, enabling automatic refresh of the built‑in model list and preventing forever‑stale snapshots. |
| 5808 | **One definition per constant; drop dead fleet settings entry** – <https://github.com/Hmbown/DeepSeek-TUI/pull/5808> *(open)* | Consolidates duplicate constant definitions and removes an unreachable `fleet.exec.max_spawn_depth` entry – a zero‑risk hygiene improvement from the “slop audit”. |
| 5784 | **Native ChatGPT PKCE sign‑in for `openai‑codex`** – <https://github.com/Hmbown/DeepSeek-TUI/pull/5784> *(closed)* | Implements browser‑based OAuth PKCE flow, storing refresh tokens in the app’s own storage; eliminates the need for the external Codex CLI. |
| 5743 | **Tideline slice 2 – docs hub, shared state, offline/reconnect, changelog** – <https://github.com/Hmbown/DeepSeek-TUI/pull/5743> *(closed)* | Introduces a comprehensive documentation surface inside the TUI, complete with offline handling and a changelog view. |
| 5799 | **Tool cells now carry their own state** – <https://github.com/Hmbown/DeepSeek-TUI/pull/5799> *(closed)* | Tool output blocks now render status‑aware borders (running, failed, warned), giving users immediate visual feedback. |
| 5798 | **Fix focus owner – Tab/Shift‑Tab behave predictably** – <https://github.com/Hmbown/DeepSeek-TUI/pull/5798> *(closed)* | Introduces a single source of focus ownership, removing the “guessing” behavior that broke keyboard navigation. |
| 5765 | **Render truthful active Tideline rail** – <https://github.com/Hmbown/DeepSeek-TUI/pull/5765> *(closed)* | Restores the five‑group session rail at the documented column thresholds, accurately reflecting queued/running state. |
| 5795 | **Ollama default model comes from live local catalog** – <https://github.com/Hmbown/DeepSeek-TUI/pull/5795> *(closed)* | Fixes a mismatch where the UI displayed a hosted model that wasn’t actually reachable; now shows the real local Ollama model. |
| 5725 | **Add Concentrate BYOK Responses gateway** – <https://github.com/Hmbown/DeepSeek-TUI/pull/5725> *(closed)* | Introduces a first‑class, opt‑in “Concentrate” provider that talks to the OpenAI‑Responses‑compatible endpoint, expanding the provider ecosystem. |
| 5712 | **Cloud‑dispatch remote runner – sandbox to forge PR** – <https://github.com/Hmbown/DeepSeek-TUI/pull/5712> *(closed)* | Completes the `/dispatch` flow: confirmed jobs now spin up a sandboxed cloud agent and automatically open a Forge PR, closing the loop on remote execution. |

---

## 5. Feature Request Trends
1. **Improved Provider Flexibility** – Multiple issues/PRs (e.g., #5713, #5725, #5755) focus on adding or unifying provider routes, supporting new wire protocols, and consolidating authority logic.  
2. **Native Authentication Flows** – The push for PKCE‑based sign‑in (#5778 → PR #5784) signals a desire to eliminate external CLI dependencies.  
3. **User‑Onboarding & UI Polish** – Requests for progressive first‑run configuration (#5522), consistent startup branding (#5754, #5761), and rounded composer chrome (#5757) reflect a broader UX‑maturity goal.  
4. **Documentation Inside the TUI** – Issue #5806 and PR #5743 indicate growing demand for an integrated docs/help surface (Tideline docs hub).  
5. **Reliability under Parallel CI Load** – Flaky‑test issues #5605 and #5735 expose a pattern: the community expects robust concurrency handling before the next major release.

---

## 6. Developer Pain Points
| Pain point | Evidence |
|------------|----------|
| **Flaky tests / CI instability** | Two high‑visibility flaky‑test issues (#5605, #5735) were closed on the same day, highlighting frequent race conditions under parallel loads. |
| **Authentication friction** | Users had to install the Codex CLI to log in to ChatGPT/Codex; the native PKCE implementation was a top‑priority fix. |
| **First‑run overwhelm** | Issue #5522 points out that non‑English users confront an English telemetry notice and a wall of settings before productive use. |
| **Inconsistent provider UI** | Issue #5755 notes mismatched authority displays across picker, runtime, and CLI, causing confusion about which models are actually selectable. |
| **Visual/UX regressions** | Multiple closed UI bugs (composer chrome, focus handling, footer chip ordering) suggest that subtle visual regressions are a recurring annoyance. |
| **Stale bundled model catalog** | The open PR #5807 (catalog TTL) and closed PR #5795 (Ollama model mismatch) reveal that keeping the built‑in model list fresh is a pain point for end‑users. |

---

*Stay tuned for tomorrow’s digest – we’ll track how the PKCE sign‑in lands in the wild and whether the new model‑catalog TTL resolves the lingering “stale model” complaints.*

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

**ComfyUI Community Digest – 2026‑09‑02**

---

### 1. Today’s Highlights
- The most active discussions revolve around stability on newer hardware (AMD ROC m, Apple Silicon, and the upcoming MiniMax H3 models) and the need for better workflow ergonomics such as input‑output reordering and 3‑D asset handling.  
- Several partner‑node and cloud‑integration PRs are moving forward, while the core team continues to tighten VRAM‑low‑memory handling and flash‑attention memory estimates.

---

### 2. Releases
*No new official releases were published in the last 24 h.*

---

### 3. Hot Issues  
| # | Title & Link | Why It Matters | Community Reaction |
|---|--------------|----------------|--------------------|
| **15100** | [Mess with stable versions](https://github.com/Comfy-Org/ComfyUI/issues/15100) | Users report divergent behavior across “stable” vs. “dev” builds, threatening reproducibility of published workflows. | 35 comments, 8 👍 – lengthy troubleshooting thread. |
| **13730** | [LTX 2.3 FP8/Q4KM stalls on RX 7900 XTX + ROCm](https://github.com/Comfy-Org/ComfyUI/issues/13730) | A high‑profile AMD GPU stalls unless dynamic‑VRAM tricks are disabled, limiting adoption of the newest quantized checkpoints. | 33 comments, 0 👍 – many replication attempts. |
| **14382** | [AttributeError in ModelMergeSimple on quantized models](https://github.com/Comfy-Org/ComfyUI/issues/14382) | Breaks model‑merging workflows for FP8/QuantizedTensor checkpoints, a growing segment of the model zoo. | 20 comments, 0 👍 – developers sharing work‑arounds. |
| **15946** | [Stuck on loading screen / logo](https://github.com/Comfy-Org/ComfyUI/issues/15946) | Blocks newcomers from even opening the UI; symptoms appear on several OS/driver combos. | 13 comments, 0 👍 – many “same‑issue” reports. |
| **9865** | [Reordering of inputs and outputs](https://github.com/Comfy-Org/ComfyUI/issues/9865) | Large sub‑graphs become unwieldy; a UI‑level feature that would dramatically improve workflow readability. | 13 comments, 19 👍 – strong community demand. |
| **13810** | [Support for newer pixel‑space models (HiDream O1, SenseNova‑U1, LLaDA2.0‑Uni)](https://github.com/Comfy-Org/ComfyUI/issues/13810) | New state‑of‑the‑art image generators are not yet loadable, slowing adoption of cutting‑edge diffusion models. | 12 comments, 20 👍 – several users posted test snippets. |
| **15289** | [Saving to soft‑linked folders breaks after recent change](https://github.com/Comfy-Org/ComfyUI/issues/15289) | Affects pipelines that store outputs on secondary drives; a regression that hinders large‑scale batch jobs. | 10 comments, 0 👍 – reproducible with minimal effort. |
| **14271** | [RuntimeError: normalized_shape mismatch](https://github.com/Comfy-Org/ComfyUI/issues/14271) | Crashes when mixing certain LoRAs with high‑dimensional models, a pain point for custom‑node creators. | 7 comments, 0 👍 – many “same‑error” replies. |
| **15192** *(closed)* | [Support SenseNova‑U1.5‑8B‑MoT model](https://github.com/Comfy-Org/ComfyUI/issues/15192) | Demonstrates the appetite for rapid integration of emerging models. | 6 comments, 9 👍 – closed after partial implementation. |
| **8721** | [Decentralised asset metadata & version‑tracking via Hypercore/IPFS](https://github.com/Comfy-Org/ComfyUI/issues/8721) | Proposes a long‑term solution for provenance of community‑shared assets; could reshape the ecosystem. | 5 comments, 0 👍 – early‑stage discussion. |

---

### 4. Key PR Progress  
| # | PR & Link | Core Contribution |
|---|----------|-------------------|
| **16025** | [feat(MiniMax): add H3 Max option to H3 text‑to‑video nodes](https://github.com/Comfy-Org/ComfyUI/pull/16025) | Exposes the highest‑quality MiniMax H3 setting for video generation, expanding the partner‑node catalogue. |
| **15935** | [Add Comfy Cloud partner nodes (BE‑9870)](https://github.com/Comfy-Org/ComfyUI/pull/15935) | Introduces a generic cloud‑execution wrapper, enabling on‑demand GPU billing without a subscription gate. |
| **16024** | [Update workflow templates to v0.11.52](https://github.com/Comfy-Org/ComfyUI/pull/16024) | Refreshes the built‑in template library with the latest model releases and UI screenshots. |
| **16013** | [Add live resolution preview widget to ResolutionSelector](https://github.com/Comfy-Org/ComfyUI/pull/16013) | New read‑only widget shows the calculated pixel dimensions before execution, reducing trial‑and‑error. |
| **16019** | [Support Bernini v2 single‑file pipeline](https://github.com/Comfy-Org/ComfyUI/pull/16019) | Native loading of the latest Bernini generation suite, complete with sharded BF16/INT8 support. |
| **16020** | [Allow using references with MiniMax‑H3 Fun Union & fix prefetch race](https://github.com/Comfy-Org/ComfyUI/pull/16020) | Enables control‑net keyframe conditioning for MiniMax H3, fixing a prefetch dead‑lock. |
| **15586** | [Use efficient attention memory estimate when `--use-flash-attention` is set](https://github.com/Comfy-Org/ComfyUI/pull/15586) | Corrects the memory‑required formula, preventing OOM errors on flash‑attention enabled runs. |
| **15976** | [Support image conditioning for Flux.2 Klein (CORE‑412)](https://github.com/Comfy-Org/ComfyUI/pull/15976) | Adds visual encoder weights handling, unlocking image‑to‑image and hybrid workflows for the Klein variant. |
| **16016** | [Fix multi‑GPU device selection for cloned models](https://github.com/Comfy-Org/ComfyUI/pull/16016) | Guarantees that weight patches (LoRA, etc.) are placed on the correct CUDA device in multi‑GPU setups. |
| **16014** | [Enable PyTorch SDPA attention and FP8 ops for `gfx1170`](https://github.com/Comfy-Org/ComfyUI/pull/16014) | Extends hardware‑specific optimizations to AMD Rdna 3 (“gfx1170”), improving performance on newer GPUs. |

---

### 5. Feature Request Trends  
- **Workflow ergonomics:** Reordering of node inputs/outputs and live resolution previews are repeatedly requested to tame complex graphs.  
- **Model compatibility:** Strong demand for out‑of‑the‑box support of the newest pixel‑space and “thinking” models (HiDream O1, SenseNova‑U1.x, Bernini v2, Pixal3D multi‑view).  
- **3‑D asset pipeline:** Calls for a core `FILE_3D → MESH` conversion node and better mesh‑processing utilities.  
- **Decentralised provenance:** Community interest in Hypercore/IPFS‑based metadata and version tracking for shared assets.  
- **Cloud/partner integration:** Repeated proposals for seamless cloud‑run partner nodes that can be toggled via a CLI flag.

---

### 6. Developer Pain Points  
- **Hardware‑specific stalls & crashes:** ROCm, Apple MPS, and newer AMD GPUs trigger stalls, memory‑estimate mismatches, or silent BF16 corruption, creating a fragmented experience.  
- **Custom‑node isolation:** The “disable all custom nodes” checklist is frequently invoked, indicating that custom‑node conflicts remain a major source of instability.  
- **VRAM/Low‑VRAM handling:** Users repeatedly hit issues with `--lowvram`/`--novram` flags, especially on Apple Silicon and large quantized checkpoints.  
- **Saving & path handling:** Soft‑linked output directories break after recent changes, disrupting batch‑processing pipelines.  
- **WebSocket / event‑loop reliability:** Unbounded directory traversal and reconnection bugs cause dropped updates in the UI.  
- **Bootloop on auto‑updates:** The Comfy Desktop auto‑updater can lock users in a repeat‑install loop, requiring manual intervention.

---  

*All links point to the official `Comfy-Org/ComfyUI` repository on GitHub.*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Community Digest – 2026‑09‑02**

---

### 1. Today’s Highlights  
- The community is still wrestling with a rare **digest‑mismatch** error that can abort model pulls, sparking the longest‑running discussion on the repo (‑ #941).  
- A wave of **cloud‑usage visibility** requests (‑ #12532) and **GPU‑fallback transparency** concerns (‑ #14258) show users want tighter observability of both local and hosted runtimes.  
- Several PRs landed that improve performance‑critical back‑ends (MLX, cached‑token metrics) and open new media capabilities (video input on macOS, Granite model support).

---

### 2. Releases  
*No new version was published in the last 24 h.*

---

### 3. Hot Issues  

| # | Title / Summary | Why it matters | Community reaction |
|---|-----------------|----------------|---------------------|
| **941** | `digest mismatch` on `ollama pull` (rare but blocks model download) | Stops users from fetching new models; impacts CI pipelines that automatically pull GGUFs. | **161** comments, **45** 👍 – ongoing debugging with logs from multiple OSes. |
| **12532** | Cloud usage stats missing from `/api/me` | Gives teams programmatic insight into quota, billing, and model‑level metrics; important for enterprise customers. | **48** comments, **86** 👍 – strong support, several work‑arounds posted. |
| **10333** | CLI image‑path not recognized when dragging files | Breaks the emerging multimodal workflow; developers cannot reliably feed screenshots to vision models. | **22** comments – many repro steps, a few suggested patches. |
| **14493** | Qwen 3.5 27B tool‑calling and repetition‑penalty bugs | Tool‑calling is a flagship agent capability; regression undermines reliability of agentic agents. | **17** comments, **14** 👍 – heavy debate on quantization vs. model code. |
| **16060** | Phone‑verification rejects non‑US numbers (Germany) | Bars European developers from paid Cloud plans, throttling adoption outside the US. | **14** comments – users posted work‑arounds; request escalated to product team. |
| **17961** | Qwen3.8 27B + Claude Code gives incomplete responses | Highlights stability issues when chaining models; affects multi‑model pipelines. | **11** comments – many logs, request for reproducible test case. |
| **17471** | Persistent 403 Forbidden & login loop on ollama.com (8 + hrs) | Completely blocks API and UI access for paying customers. | **9** comments, **1** 👍 – outage monitoring and temporary fixes discussed. |
| **17099** | 0.31.2 regression: memory estimate inflated → 7× slower generation | Directly hurts performance for large‑context models (gemma4:31b). | **7** comments – users traced to VRAM‑estimation bug; high impact on production services. |
| **14258** | Silent GPU‑to‑CPU fallback with no warning | Leaves users clueless why a model runs slowly; hampers debugging on mixed‑hardware setups. | **7** comments, **2** 👍 – calls for an explicit log‑level flag. |
| **14571** | No way to suppress control‑character output from `ollama run` | Pollutes logs and terminal output, especially for downstream tooling that parses stdout. | **7** comments, **3** 👍 – several workaround scripts posted. |

---

### 4. Key PR Progress  

| # | PR Title / Summary | Impact |
|---|--------------------|--------|
| **18181** | `api: clamp keep_alive durations that overflow int64` | Prevents runaway `keep_alive` values that silently unload models; improves reliability of long‑running services. |
| **17943** | `Report cached prompt tokens` | Adds `prompt_eval_cached_count` to native and OpenAI/Anthropic APIs, giving users visibility into cache‑hit ratios. |
| **18078** | `MLX: make Qwen3.8 Flash Next memory efficient` | Introduces selective BF16/MXFP8 quantization, reducing VRAM pressure while preserving quality for the largest Qwen models. |
| **17972** | `Add GraniteForCausalLM support in experimental models and mlxrunner` | Enables IBM Granite 4.1 family in Ollama, expanding the catalog of high‑performance open‑source LLMs. |
| **18179** | `video: accept video input on macOS` | First‑class video ingestion for multimodal models (e.g., Qwen‑VL); opens new application domains like video analysis. |
| **16916** | `server: add cached eval metric to response` | Exposes cache statistics in `/api/generate` and `/api/chat`, helping developers benchmark and optimise prompts. |
| **18173** | `thinking: flush buffered content at end of stream` | Fixes lost tokens when the parser holds partial tags, improving correctness of `<think>` handling. |
| **18080** | `MLX, MLX‑C: version bump` | Keeps the backend aligned with upstream MLX releases, reducing build‑time regressions. |
| **18183** | `Add Sefia‑ai to Ollama Clients list` | Highlights community tooling, promoting ecosystem integration. |
| **18176** | `docs: add TeeChat to community desktop integrations` | Expands the “Community Integrations → Chat Interfaces” list, giving users more ready‑to‑use clients. |

---

### 5. Feature Request Trends  

| Trend | Representative Issues / PRs |
|-------|----------------------------|
| **Observability & Metrics** | Cloud usage stats (#12532), cached‑token metrics (#17943, #16916), GPU‑fallback warnings (#14258). |
| **Multimodal Input Support** | Image path handling (#10333), video input on macOS (#18179), video model integration (#18151). |
| **Enterprise Cloud UX** | Non‑US phone verification (#16060), clearer quota APIs (#12532), longer request timeout limits (closed #15973). |
| **Model‑Specific Controls** | Tool‑calling reliability for Qwen (#14493), repetition‑penalty handling (#14493), MTP off‑load behavior (#18186). |
| **Resource Management Transparency** | Memory‑estimate regression (#17099), silent GPU‑to‑CPU fallback (#14258), keep_alive overflow (#18181). |

---

### 6. Developer Pain Points  

1. **Download & Integrity Failures** – The digest‑mismatch bug halts automated model provisioning.  
2. **Lack of Runtime Visibility** – Users can’t programmatically see cloud usage, cache hits, or why a model fell back to CPU, leading to mysterious performance drops.  
3. **Multimodal Workflow Friction** – Drag‑and‑drop image paths and missing video support break end‑to‑end pipelines.  
4. **Platform‑Specific Onboarding Issues** – Phone‑verification limits and Windows hostname parsing errors block adoption in non‑US or mixed‑OS environments.  
5. **Resource‑Estimation Regressions** – Recent releases mis‑estimate VRAM, causing severe slow‑downs and forced CPU usage.  
6. **Control‑Character & Tag Leakage** – Unwanted `<think>` tags and raw control characters pollute output, complicating downstream parsing.  

Addressing these recurring themes—especially around observability, multimodal I/O, and robust resource handling—will be key to maintaining developer confidence as Ollama scales.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

**🗓️ llama.cpp Community Digest – 2026‑09‑02**  

---

### 1. Today’s Highlights  
- A wave of low‑level performance tweaks landed: CUDA now fuses the MoE weighted‑expert reduction, and Metal received new “fa‑vec” tunings for Apple‑silicon M2 Pro/Max and the A18 Pro MacBook Neo.  
- Several long‑standing usability gaps were addressed, notably the kv‑cache lookup overhaul (kv‑cells) and automatic scaling of `n_ctx_train` when using Yarn‑based scaling.  
- Community momentum remains high, with a flood of bug reports around new hybrid architectures (Qwen 4‑exp, GLM‑5.3‑Flash) and a surge of feature‑request threads demanding missing ops, audio output, and better documentation.

---

### 2. Releases  

| Tag | Key Changes |
|-----|--------------|
| **b10751** – CUDA | *Fuse MoE weighted‑expert reduction* – eliminates an intermediate global‑memory write, cutting MoE combine‑tail latency (see #25952). |
| **b10750** – kv‑cells | *Seq‑position indexed lookup* – replaces the costly `get_prev_tokens()` hash‑map rebuild with a direct ordered index, reducing CPU overhead on long contexts. |
| **b10749** – context | *Autoscale `n_ctx_train`* when Yarn‑based scaling is specified, simplifying large‑context training setups. |
| **b10743 / b10742 / b10741** – Metal & model loader | *fa‑vec tuning* for M2 Pro, M2 Max, and A18 Pro; plus early loading of `hparams.n_layer_nextn` to avoid duplicate loads. |

All releases are available on the **[llama.cpp releases page](https://github.com/ggml-org/llama.cpp/releases)**.

---

### 3. Hot Issues (most active / impactful)

| # | Title & Link | Why It Matters | Community Pulse |
|---|--------------|----------------|------------------|
| **14909** | *Feature Request: Implement missing ops from backends* – <https://github.com/ggml-org/llama.cpp/issues/14909> | Core ops (e.g., `transpose`, `gelu`) are still stubbed on some backends, limiting model portability. | 52 comments, 7 👍 – active discussion on API design. |
| **21956** | *Support audio output in mtmd* – <https://github.com/ggml-org/llama.cpp/issues/21956> | Extends multi‑modal (mtmd) pipelines to speech generation, a hot demand for LLM‑driven assistants. | 27 comments, 13 👍 – high enthusiasm, early design sketches. |
| **17459** | *RoPE context‑length restriction* – <https://github.com/ggml-org/llama.cpp/issues/17459> | Users hitting server‑side caps can’t exploit long‑context models (e.g., 16‑k token). | 25 comments, 10 👍 – many work‑arounds posted. |
| **13523** | *Tutorials: list for llama.cpp* – <https://github.com/ggml-org/llama.cpp/issues/13523> | Lack of a central tutorial index hampers onboarding of new contributors. | 24 comments, 9 👍 – community curates a “starter‑kit”. |
| **27595** | *SYCL `--fit` memory‑usage overflow* – <https://github.com/ggml-org/llama.cpp/issues/27595> | SYCL memory‑estimation bug crashes on Intel Arc b70, blocking adoption on Intel GPUs. | 17 comments, 1 👍 – need for a fix in the memory‑budget estimator. |
| **28134** | *SYCL abort on Lunar Lake iGPU* – <https://github.com/ggml-org/llama.cpp/issues/28134> | Device‑memory query fails on newer Intel iGPUs, preventing any SYCL build on that platform. | 11 comments, 0 👍 – largely reproducible, waiting for upstream Intel driver fix. |
| **28124** | *Vulkan FA ignores `GGML_PREC_F32`* – <https://github.com/ggml-org/llama.cpp/issues/28124> | Long‑context corruption for MLA models on fp16‑capable GPUs; impacts production workloads. | 3 comments, 0 👍 – deemed a regression, priority for Vulkan maintainer. |
| **28158** | *Qwen3.8 DFlash/MTP OOB token on Vulkan* – <https://github.com/ggml-org/llama.cpp/issues/28158> | Out‑of‑bounds token IDs crash decoding, affecting the newest hybrid Qwen models. | 2 comments, 1 👍 – fix merged in PR #28206. |
| **28196** | *CUDA qwen35 token generation 3.5× below bandwidth bound* – <https://github.com/ggml-org/llama.cpp/issues/28196> | Highlights a severe performance drop on RTX 5090 (SM‑120); reveals hidden bottlenecks in MoE control flow. | 2 comments, 0 👍 – sparks discussion on kernel tuning. |
| **28160** | *Regression: `--lazy-mode auto` halves pre‑fill on Vulkan* – <https://github.com/ggml-org/llama.cpp/issues/28160> | Breaks the “auto” lazy‑mode for Qwen‑4‑exp, reducing throughput on AMD iGPUs. | 2 comments, 0 👍 – requires a rollback or more robust lazy handling. |

---

### 4. Key PR Progress  

| # | PR & Link | Core Contribution |
|---|------------|-------------------|
| **28209** | *Memory: return error instead of abort on multi‑range device state save* – <https://github.com/ggml-org/llama.cpp/pull/28209> | Turns fatal aborts into recoverable exceptions when a state spans multiple memory ranges. |
| **28192** | *Move NextN/MTP hyperparameter loading to Qwen handlers* – <https://github.com/ggml-org/llama.cpp/pull/28192> | Architecture‑specific loading of `Llama_KV_NEXTN_PREDICT_LAYERS`, cleaning up generic model loader. |
| **27773** | *Add GLM‑5.3‑Flash (GLM5‑Next) support* – <https://github.com/ggml-org/llama.cpp/pull/27773> | Introduces a 321 B hybrid model (text + vision) with MoE and sparse attention, expanding the model zoo. |
| **28118** | *Server: keep speculative recurrent‑state checkpoints on‑device* – <https://github.com/ggml-org/llama.cpp/pull/28118> | Enables on‑device checkpointing for hybrid recurrent models, sharpening speculative decoding. |
| **28210** | *Metal: fix int32 overflow in `kernel_mul_mm`* – <https://github.com/ggml-org/llama.cpp/pull/28210> | Prevents deep‑context corruption on large batch kernels for Apple‑silicon. |
| **28128** | *KV‑cells: scan flat pos array instead of std::set walk* – <https://github.com/ggml-org/llama.cpp/pull/28128> | Cuts CPU overhead of token‑lookup from ~17 % to ~12 % at 130 k tokens, raising decode speed. |
| **28138** | *Release: Self‑Speculative Biased Decoding (SSBD)* – <https://github.com/ggml-org/llama.cpp/pull/28138> | Provides reference implementation for the COLM 2026 paper, improving re‑translation latency. |
| **27701** | *Metal: fix memory query under low‑memory conditions* – <https://github.com/ggml-org/llama.cpp/pull/27701> | Corrects under‑flow when `currentAllocatedSize` exceeds the recommended max, preventing spurious “out‑of‑memory” errors. |
| **28174** | *Server: enable `preserve_reasoning` kwarg by default* – <https://github.com/ggml-org/llama.cpp/pull/28174> | Aligns default behavior with chat‑template expectations; adds explicit logging. |
| **28164** | *Metal: single‑source fusion table + Gated‑Delta‑Net cache fusion* – <https://github.com/ggml-org/llama.cpp/pull/28164> | Unifies op‑fusion logic, eliminates mismatches between optimizer and encoder, and adds cache‑fusion for Gated Delta Net. |

---

### 5. Feature Request Trends  

| Trend | Representative Issues/PRs |
|-------|---------------------------|
| **Missing backend ops** – users want a complete, spec‑compliant operator set for CUDA, SYCL, Metal, and Vulkan. | #14909, #25952 (MoE reduction), ongoing CUDA/SYCL PRs. |
| **Audio & multi‑modal output** – integration of speech synthesis and vision encoders in the mtmd pipeline. | #21956, #27152 (vision warm‑up), #27773 (GLM‑5.3 vision). |
| **Automatic context & training scaling** – smoother handling of large `n_ctx` and Yarn‑based scaling without manual tuning. | #17459, #b10749 (autoscale `n_ctx_train`). |
| **Improved documentation & tutorials** – consolidated “Getting Started” guides, model‑conversion docs, and end‑to‑end examples. | #13523, PR #28138 (SSBD demo), various “how‑to” discussions. |
| **Robust SYCL & OpenCL support** – better memory‑budget estimation, device‑query reliability, and pre‑built install scripts. | #27595, #28134, PR #27656 (oneAPI detection). |
| **Speculative / hybrid decoding ergonomics** – checkpoint handling, lazy‑mode defaults, and KV‑cache performance on diverse GPUs. | #28160, #28174, PR #28118, #28164. |

---

### 6. Developer Pain Points  

1. **KV‑cache performance & memory leaks** – frequent CPU hotspots on long contexts; recent kv‑cells work mitigates but older code paths still surface in logs.  
2. **Inconsistent backend behavior** – e.g., Vulkan ignoring `GGML_PREC_F32`, SYCL aborting on newer Intel iGPUs, and CUDA MoE reductions being sub‑optimal without the new fuse.  
3. **Model conversion gaps** – converters for emerging architectures (VibeVoice, GLM‑5.3, Qwen‑4‑exp) are missing or require manual flag gymnastics.  
4. **Sparse documentation** – new contributors struggle to locate step‑by‑step tutorials; community‑curated lists are fragmented.  
5. **Error handling & recoverability** – aborts on multi‑range device states or int32 overflow crash long‑running services; PR #28209 begins to address this.  
6. **Hardware‑specific tuning overhead** – per‑device “fa‑vec” tables for Metal, and many CUDA tile‑config PRs underscore the maintenance burden of keeping performance optimal across GPU generations.  

---

*Stay tuned for tomorrow’s digest – we’ll keep tracking the convergence of performance‑first kernels and the push for richer multi‑modal capabilities.*  

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*