# AI CLI Tools Community Digest 2026-08-20

> Generated: 2026-08-19 22:15 UTC | Tools covered: 12

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

**Today's Highlights (2026‑08‑20)**  

- **Claude Code** ([github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)) – Released **v2.1.236**, adding the `ANTHROPIC_DEFAULT_MODEL` environment variable for a persistent default model and a `notify_when_idle` flag to cross‑session `SendMessage` so one session can be alerted when another becomes idle.  

- **OpenAI Codex** ([github.com/openai/codex](https://github.com/openai/codex)) – Published stable **rust‑v0.148.0** with TUI export (`/export`), session‑forking (`codex exec fork`), and draft‑prompt support; followed by an alpha **rust‑v0.149.0‑alpha.1** build.  

- **Gemini CLI** ([github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)) – Shipped **v0.57.0‑preview.0** fixing Cloud Workstations OAuth redirect URI and IDE connection stability, plus the stable **v0.56.0** release.  

- **GitHub Copilot CLI** ([github.com/github/copilot-cli](https://github.com/github/copilot-cli)) – Issued three patch releases **v1.0.81‑{4,3,2}** containing bug‑fixes and stability improvements (clipboard shortcuts, sandbox behavior, MCP OAuth, etc.).  

- **Qwen Code** ([github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)) – Released stable **v0.21.14** introducing a live‑session registry and the `qwen sessions ps` command for JSON‑based session inspection.  

- **DeepSeek TUI** ([github.com/Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)) – Advanced **CodeWhale v0.9.10** (PR #5513) with retention hardening, identity improvements, first‑run experience and durable approvals.  

- **Ollama** ([github.com/ollama/ollama](https://github.com/ollama/ollama)) – Cut release candidate **v0.32.15‑rc1** that adds a model‑metadata cache to reduce per‑request overhead.  

- **llama.cpp** ([github.com/ggerganov/llama.cpp](https://github.com/ggerganov/llama.cpp)) – Added commit **b10502** enabling CI attestation for signed release artifacts, strengthening supply‑chain security for downstream users.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills Community Highlights (as of 2026‑08‑20)**  

---

### 1. Top Skills Ranking  
*Ranked by recent activity (latest update) and overall visibility in the PR list – comment fields were not supplied, so we use the most recently touched/open PRs as a proxy for community attention.*

| Rank | PR | Skill / Change | Functionality | Discussion Highlights | Status |
|------|----|----------------|---------------|-----------------------|--------|
| 1 | [#1538](https://github.com/anthropics/skills/pull/1538) | **Bring two skills back under the Agent Skills spec** | Fixes `template/SKILL.md` naming mismatch and other spec violations so that `skills-ref validate` passes. | Contributor notes the spec drift broke CI; discussion focuses on aligning all skills with the reference implementation. | OPEN |
| 2 | [#1595](https://github.com/anthropics/skills/pull/1595) | **Add UIZZE to partner skills** | Adds the free anti‑UI‑slop skill (UIZZE) to the README’s Partner Skills section. | Brief but positive feedback; highlighted as a quick win for expanding the ecosystem. | OPEN |
| 3 | [#1528](https://github.com/anthropics/skills/pull/1528) | **FIX (unspecified)** | Minimal change tagged `@CLAUDE RESOLVE` – likely a typo‑fix or small automation tweak. | Low‑effort cleanup; no debate, just a quick merge candidate. | OPEN |
| 4 | [#1367](https://github.com/anthropics/skills/pull/1367) | **Self‑audit skill (mechanical verification + 4‑dim reasoning quality gate)** | New meta‑skill that first checks claimed output files exist, then runs a four‑dimension reasoning audit (correctness, relevance, safety, style). | Strong interest as a universal quality‑gate; several reviewers asked for configurable thresholds. | OPEN |
| 5 | [#568](https://github.com/anthropics/skills/pull/568) | **ServiceNow platform skill** | Broad ServiceNow assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD, SPM, Vulnerability Response, Security Incident Response, IntegrationHub, etc. | Long‑running thread (updated 2026‑08‑12) with requests for clearer trigger phrases and example workflows. | OPEN |
| 6 | [#1298](https://github.com/anthropics/skills/pull/1298) | **fix(skill‑creator): run_eval.py always reports 0% recall** | Installs the eval artifact as a real skill, fixes Windows stream reading, trigger detection, and parallel workers. | Directly addresses the blocker reported in Issue #556; multiple users confirmed the fix restores meaningful recall numbers. | OPEN |
| 7 | [#1099](https://github.com/anthropics/skills/pull/1099) | **skill‑creator: fix run_eval.py crash on Windows** | Resolves a subprocess pipe error (`[WinError 10038]`) that made `run_eval.py` unusable on Windows. | Windows developers reported the crash halted skill‑creation loops; after the fix the evaluation loop proceeds. | OPEN |
| 8 | [#1050](https://github.com/anthropics/skills/pull/1050) | **skill‑creator: fix Windows subprocess + encoding bugs** | Two one‑liners: use `claude.cmd` via `subprocess.Popen` and correct encoding handling. | Complements #1099; together they restore full Windows compatibility for the skill‑creator toolchain. | OPEN |

*All listed PRs remain open as of the cutoff date; none have been merged yet.*

---

### 2. Community Demand Trends (from Issues)  
The most‑commented Issues reveal what contributors want next:

| Issue | Comments | Core Demand | Implied Skill Direction |
|-------|----------|-------------|--------------------------|
| [#492](https://github.com/anthropics/skills/issues/492) | 43 | **Security / trust boundary** – prevent community skills from being mis‑represented as official `anthropic/` skills. | A **skill‑verification / signing** skill or marketplace guardrail that attests authenticity. |
| [#228](https://github.com/anthropics/skills/issues/228) | 16 | **Org‑wide skill sharing** – seamless internal distribution without manual file hand‑off. | An **organization‑skill‑catalog** skill that pulls from a private repo or internal registry. |
| [#556](https://github.com/anthropics/skills/issues/556) | 12 | **Reliable skill triggering** – `run_eval.py` must detect when a skill is actually invoked. | Improved **trigger‑detection** logic and better test harnesses (already being tackled in #1298, #1099, #1050). |
| [#62](https://github.com/anthropics/skills/issues/62) | 10 | **Skill persistence / discovery** – users losing locally‑installed skills after file moves. | A **skill‑manager** skill that tracks installations, resolves paths, and can re‑install missing skills. |
| [#1329](https://github.com/anthropics/skills/issues/1329) | 9 | **Compact memory representation** – reduce context‑window usage for long‑running agent notes. | A **compact‑memory** skill using symbolic / binary encodings for agent state. |

*Other notable asks include better documentation (e.g., #189 duplicate‑skill issue) and cross‑platform Windows stability (reflected in the PR fixes above).*

---

### 3. High‑Potential Pending Skills  
These open PRs have substantive discussion and are likely to land soon once reviewers converge:

| PR | Skill | Why It’s High‑Potential |
|----|-------|------------------------|
| [#1538](https://github.com/anthropics/skills/pull/1538) | Spec‑compliance fix | Removes a blocker for CI validation; essential for any future skill to pass `skills-ref validate`. |
| [#1595](https://github.com/anthropics/skills/pull/1595) | UIZZE partner skill | Low‑effort addition that immediately expands the ecosystem with a proven anti‑UI‑slop tool. |
| [#1367](https://github.com/anthropics/skills/pull/1367) | Self‑audit skill | Addresses a recurring quality‑gate need; multiple reviewers asked for configurational flags, indicating strong adoption potential. |
| [#568](https://github.com/anthropics/skills/pull/568) | ServiceNow platform skill | Broad enterprise coverage; ongoing dialogue suggests it will be refined (trigger wording, examples) before merge. |
| [#1298](https://github.com/anthropics/skills/pull/1298) | Skill‑creator eval fix | Directly resolves the core evaluation bottleneck (Issue #556); once merged, skill‑authoring loops become trustworthy. |
| [#1099](https://github.com/anthropics/skills/pull/1099) & [#1050](https://github.com/anthropics/skills/pull/1050) | Windows skill‑creator stability | Together they restore full Windows support, unlocking skill creation for a large segment of contributors. |

---

### 4. Skills Ecosystem Insight  
> **The community’s most concentrated demand is for trustworthy, cross‑platform skill authoring and evaluation—specifically reliable trigger detection, Windows compatibility, and security‑backed skill sharing—so that skills can be created, validated, and distributed with confidence.**  

---  

*All links point to the official `anthropics/skills` repository on GitHub.*

---

**Claude Code Community Digest – 2026‑08‑20**

---

### 1. Today's Highlights
- The latest release **v2.1.236** introduces an `ANTHROPIC_DEFAULT_MODEL` environment variable to set a persistent default model and adds a `notify_when_idle` flag to cross‑session `SendMessage`, letting one session ping another when it becomes idle.  
- The most‑discussed issue right now is **[#81698](https://github.com/anthropics/claude-code/issues/81698)**, a Windows GPU‑process crash (exit code 101457950) that kills the desktop app and all active sessions; it has garnered 43 comments and 3 👍 in the last day, underscoring stability concerns on Windows 11 with recent NVIDIA drivers.

---

### 2. Releases
**v2.1.236** (released within the last 24 h)  
- **ANTHROPIC_DEFAULT_MODEL**: New environment variable that defines the model a fresh session starts with; a manual `/model` selection still overrides it and persists across restarts (unlike the older `ANTHROPIC_MODEL`).  
- **notify_when_idle**: Added to the cross‑session `SendMessage` tool so one Claude Code instance can request a notification from another session when that session becomes idle.  

*No other version tags appeared in the feed.*

---

### 3. Hot Issues (10 noteworthy)

| # | Issue | Why it matters / Community reaction |
|---|-------|--------------------------------------|
| [#81698](https://github.com/anthropics/claude-code/issues/81698) | **[Windows] Desktop app: GPU process crash (exit code 101457950) kills entire app and all running sessions** | Open, 43 comments, 3 👍. A hard crash that wipes out all work; users on Windows 11 with RTX 5080 report frequent forced restarts, making it a top stability priority. |
| [#69317](https://github.com/anthropics/claude-code/issues/69317) | **[platform:linux, area:auth, area:mcp, stale] claude_design built‑in MCP server always 404s** | Closed, 4 comments, 3 👍. Highlights an auth token mismatch (login‑OAT vs. designOauth) that blocks the built‑in design MCP server; indicates lingering gaps in the MCP auth flow on Linux. |
| [#77410](https://github.com/anthropics/claude-code/issues/77410) | **[BUG] Assistant text in the same response as an AskUserQuestion tool_use is never persisted to the session JSONL (silent data loss)** | Closed, 2 comments, 3 👍. Silent loss of assistant‑side text when a question tool is present breaks transcript integrity and confuses users who rely on JSONL logs for audit/replay. |
| [#77655](https://github.com/anthropics/claude-code/issues/77655) | **[BUG] Subagent view renders the main session's model/effort/agent identity instead of the subagent's** | Open, 2 comments, 6 👍. Misleading UI in the subagent pane undermines trust in the multi‑agent workflow; the high like‑to‑comment ratio shows strong community interest. |
| [#59737](https://github.com/anthropics/claude-code/issues/59737) | **[Bug] Claude Code ignores $COLORTERM=truecolor in foot terminal, downgrades to 16‑color** | Open, 2 comments. Affects developers using modern Wayland terminals (foot) that advertise truecolor; the fallback degrades syntax highlighting and UI readability. |
| [#72931](https://github.com/anthropics/claude-code/issues/72931) | **[Feature Request] Refine Fable 5 safeguards to reduce false positives on legitimate cosmetics/skincare app development** | Closed, 1 👍. Reflects a broader pain point: safety‑policy over‑blocking for harmless domains, prompting requests for finer‑grained tunability. |
| [#72954](https://github.com/anthropics/claude-code/issues/72954) | **[Feature Request] Override or disable safety policy blocks for open‑source bioinformatics software refactoring** | Closed, 0 👍. Echoes the need for an “escape hatch” when working on regulated or scientific code that the current safeguards treat as risky. |
| [#72951](https://github.com/anthropics/claude-code/issues/72951) | **[BUG] Session falls back from Fable 5 to Opus 4.8 mid‑task with no way to opt out** | Closed, 0 👍. Users complain about silent model switches that break expectations of a locked‑in model (especially for long‑running refactors). |
| [#72924](https://github.com/anthropics/claude-code/issues/72924) | **[Bug] Non‑Compliant Content Filter: Legitimate Fable Project Planning Blocked** | Closed, 0 👍. Another example of false‑positive safeguards interrupting benign project‑planning workflows, eroding confidence in the model’s judgment. |
| [#72916](https://github.com/anthropics/claude-code/issues/72916) | **[BUG] Fable's safeguards flagged this message for saying hello** | Closed, 0 👍. Extremely low‑trigger false positive that highlights how sensitive the current classifier can be, even to innocuous greetings. |

---

### 4. Key PR Progress
Only one PR was updated in the last day:

- **[#77977](https://github.com/anthropics/claude-code/pull/77977)** – *docs(plugin-dev): document skipLfs marketplace sources*  
  Adds documentation for the `skipLfs` option on GitHub/git marketplace sources, helping plugin authors avoid unnecessary large‑file downloads. No code changes; purely documentation.

---

### 5. Feature Request Trends
From the issues (including closed ones) the most‑frequent requests center around:

1. **Safety‑policy controllability** – Users want the ability to **tune, override, or disable** Fable/Opus safeguards for legitimate work (cosmetics, bioinformatics, security audits).  
2. **Model persistence** – Requests for a **reliable way to lock a session to a specific model** (e.g., Fable 5) without silent fallbacks to Opus 4.8.  
3. **Improved cross‑session coordination** – The new `notify_when_idle` flag shows interest in **session‑to‑session messaging**; further desires include shared state, joint debugging, or unified UI for spawned subagents.  
4. **Better auth/MCP integration** – Fixes for token mismatches (designOauth vs login‑OAT) and smoother remote‑control/Web‑setup flows on macOS/Linux.  

---

### 6. Developer Pain Points
Recurring frustrations evident across the feed:

- **Windows stability** – GPU‑process crashes that terminate the entire app (see #81698) disrupt daily work and erode trust in the desktop client on Windows 11.  
- **Overzealous safety filters** – Frequent false positives cause unwanted model switches or hard blocks, forcing users to work around the safeguards or abandon Claude Code for certain domains.  
- **Transcript & state reliability** – Missing assistant text in JSONL (#77410) and lost per‑channel memory in subagent spawns (#72892) lead to silent data loss and hinder reproducibility.  
- **Terminal UI glitches** – Truecolor detection failures (#59737), duplicate skill listings in narrow terminals (#72900), and incorrect subagent identity displays (#77655) degrade the developer experience.  
- **Slow remote provisioning** – SSH remote setup timing out after 180 s (#71677) hampers cloud‑dev workflows, especially on high‑latency links.  

Addressing these areas—particularly Windows GPU stability, configurable safety policies, and reliable session state—would likely yield the biggest satisfaction gains for the Claude Code developer community.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest – 2026‑08‑20**  

---

### 1. Today's Highlights  
- The Codex CLI shipped a new **rust‑v0.148.0** release that adds TUI export (`/export`), session‑forking (`codex exec fork`), and draft‑prompt support while the TUI boots. An **alpha** of **rust‑v0.149.0** followed shortly after, indicating active iteration on the Rust‑based CLI core.  
- Windows‑specific issues dominate the conversation: path‑handling bugs (`\\?\` prefixed rollout paths) cause archiving failures, repeated authentication loss after enabling Advanced Account Security, and frequent OOM crashes in the Computer‑Use subsystem.  
- Community feedback is strongest around reliability on Windows (archiving, update, and permission‑prompt bugs) and performance/stability of the Computer‑Use and sandbox subsystems.

---

### 2. Releases  

| Release | Version | Highlights |
|---------|---------|------------|
| **rust‑v0.148.0** | 0.148.0 (stable) | • `/export` command to save TUI conversations to Markdown (clipboard or file).<br>• `codex exec fork` to duplicate sessions; archive/restore via TUI resume picker.<br>• Ability to draft prompts while the TUI initializes.<br>• Various bug‑fixes and CLI ergonomics improvements. |
| **rust‑v0.149.0‑alpha.1** | 0.149.0‑alpha.1 | • Early‑access build incorporating the above features plus internal refactors.<br>• No user‑visible changes beyond the stabilization work for the next stable release. |

*Links*:  
- rust‑v0.148.0: https://github.com/openai/codex/releases/tag/rust-v0.148.0  
- rust‑v0.149.0‑alpha.1: https://github.com/openai/codex/releases/tag/rust-v0.149.0-alpha.1  

---

### 3. Hot Issues (top 10 by community impact)

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| #39397 | **0.148.0 sends `prompt_cache_retention` on gpt‑5.6‑sol → every turn fails** | Breaks core interaction for users on the latest model; error bubbles up on each turn, making the CLI unusable. | 41 comments, 👍37 – high frustration, urgent need for a fix. |
| #38455 | **ChatGPT desktop repeatedly spawns Computer Use workers → V8 OOM on macOS** | Causes memory‑explosion crashes after ~90 s idle, rendering the desktop app unstable on Apple Silicon. | 28 comments, 👍12 – notable impact on power users. |
| #28276 | **Failed to archive conversation + stray threads** | Archiving is a core workflow; failures leave orphaned threads and erode trust in session persistence. | 22 comments, 👍5 – long‑standing pain point. |
| #33493 | **Local compaction v2 retains unbounded `input_image` payloads → repeated auto‑compaction** | Leads to CPU‑spinning loops in image‑heavy sessions, degrading responsiveness. | 17 comments, 👍4 – relevant for multimodal workflows. |
| #27117 | **Windows standalone update inherits PSModulePath → `Get-FileHash` fails** | Update mechanism breaks PowerShell‑based automation, a common dev‑ops scenario. | 17 comments, 👍13 – highlights Windows‑CLI integration gaps. |
| #39239 / #39209 / #39150 | **Windows archiving fails with “os error 2” when rollout paths use `\\?\` prefix** | Windows long‑path handling blocks a basic feature (archiving) for many users; multiple duplicate reports show breadth. | 15+12+9 comments, 👍0‑2 – growing consensus on a path‑normalisation bug. |
| #11298 | **Keeps asking for permission to run commands (yes‑and‑don’t‑ask‑again broken)** | Undermines the “trusted commands” UX, forcing users to confirm repeatedly. | 10 comments, 👍18 – high annoyance despite lower comment count. |
| #39189 | **Opening an existing thread signs out Pro account after workspace‑only settings 401** | Authentication loss disrupts paid users; ties to recent security‑hardening changes. | 9 comments, 👍2 – signals regression in auth flow. |
| #30015 | **Codex native Windows install fails to update via `codex update`** | Prevents users from staying current; forces manual reinstall. | 8 comments, 👍14 – notable uptake among Windows CLI adopters. |
| #39537 | **0.148.0 breaks MCP servers added via `-c` option in app‑server mode** | Affects extensibility; MCP is a key integration point for third‑party tools. | 2 comments, 👍0 – early indicator of a breaking change. |

*Links*: Use the pattern `https://github.com/openai/codex/issues/<NUMBER>` (e.g., #39397 → https://github.com/openai/codex/issues/39397).

---

### 4. Key PR Progress (selected 10)

| PR | Title & Link | What it does / Fixes |
|----|--------------|----------------------|
| #39524 | **Stop treating Git commands as inherently safe** – https://github.com/openai/codex/pull/39524 | Removes Git from the Unix/macOS “known‑safe” list, preventing automatic execution of unsafe Git helpers during background operations. |
| #39523 | **Persist thread section moves before the first turn** – https://github.com/openai/codex/pull/39523 | Ensures newly created non‑ephemeral threads appear in sectioned views immediately, fixing missing‑thread bugs in the TUI. |
| #39520 | **Isolate automatic plugin Git operations** – https://github.com/openai/codex/pull/39520 | Sandboxes marketplace/plugin refreshes so they cannot inherit the caller’s Git config, eliminating remote‑ hijack risks. |
| #39515 | **Use `mem::take` to drain unified exec output buffers** – https://github.com/openai/codex/pull/39515 | Simplifies buffer handling, reducing chance of leftover data causing corrupted output in simultaneous executions. |
| #39514 | **Use stored item types when materializing turn summaries** – https://github.com/openai/codex/pull/39514 | Makes summary generation robust against schema changes by relying on the dedicated `item_type` column. |
| #39510 | **Track built‑in control tool calls in analytics** – https://github.com/openai/codex/pull/39510 | Adds telemetry for `request_user_input`, `update_plan`, `view_image`, and goal tools to better understand usage patterns. |
| #39509 | **Test disabled enhanced Node REPL transcript images separately** – https://github.com/openai/codex/pull/39509 | Guarantees that turning off enhanced REPL transcripts does not break Guardian‑image collection. |
| #39506 | **Test code mode notifications without a sync tool call** – https://github.com/openai/codex/pull/39506 | Validates that UI notifications appear correctly even when no synchronization occurs. |
| #39505 | **Test text stringify errors in the code mode runtime** – https://github.com/openai/codex/pull/39505 | Moves circular‑value checks into the runtime test suite, catching V8 circular‑structure errors early. |
| #39501 | **Use a narrow fixture for the unified image resize test** – https://github.com/openai/codex/pull/39501 | Focuses the image‑budget test on a 6401×1 → 6000×1 resize, making the test deterministic and faster. |

---

### 5. Feature Request Trends (derived from Issues)

- **Robust Windows path handling** – numerous requests to normalise or reject `\\?\` prefixed paths before they reach the storage layer (archiving, thread resume, sandbox mounts).  
- **Improved session persistence & archiving** – users want reliable export/archive, automatic cleanup of orphaned threads, and deterministic behavior after forks/resumes.  
- **Stable Computer‑Use / sandbox performance** – calls to bound worker spawns, prevent V8 OOM, and limit background CPU usage on both macOS and Windows.  
- **Authentication durability** – especially after enabling Advanced Account Security or workspace‑only settings; users expect the desktop app to stay signed in for the length of the session.  
- **Extensibility & MCP stability** – maintaining backward compatibility for MCP servers added via `-c` and ensuring plugin Git operations do not leak host configuration.  
- **Permission‑U‑X refinement** – making the “yes, and don’t ask again” flow work reliably across platforms to reduce friction.  

---

### 6. Developer Pain Points (recurring frustrations)

1. **Windows‑specific reliability** – path‑resolution bugs (`\\?\`), update failures (`codex update`), permission‑prompt loops, and authentication drops after security hardening.  
2. **Memory and CPU runaway** – Computer‑Use worker proliferation leading to V8 OOM on macOS; local compaction loops retaining large image blobs.  
3. **Session management fragility** – archiving, forking, and resume operations often leave orphaned threads or fail silently, eroding confidence in long‑running projects.  
4. **CLI update experience** – especially on Windows PowerShell, where module‑path inheritance and broken `codex update` commands hinder staying current.  
5. **Extensibility breakage** – recent changes (e.g., treating Git commands as unsafe, MCP server handling) have caused regressions for users who rely on custom tooling or third‑party integrations.  

Addressing these pain points—particularly Windows path normalisation, tighter bounds on background workers, and more resilient session‑store logic—would likely yield the biggest uplift in developer satisfaction for the upcoming release cycle.  

---  

*End of Digest*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

### Gemini CLI Community Digest  
**Date:** 2026-08-20  

---

#### **1. Today's Highlights**  
The Gemini CLI team shipped v0.57.0-preview.0 with critical fixes for Cloud Workstations OAuth flows and IDE connection stability, alongside the stable v0.56.0 release. Community engagement remains robust, with 50 issues updated in the last 24h highlighting active work on agent reliability, memory systems, and core usability. Key focus areas include resolving subagent hang scenarios, improving Auto Memory quality, and enhancing developer experience through better configuration handling.  

#### **2. Releases**  
- **v0.57.0-preview.0**  
  - Fixed dynamic resolution of Cloud Workstations proxy redirect URI for OAuth flows ([#28688](https://github.com/google-gemini/gemini-cli/pull/28688))  
  - Resolved swallowed directory mismatch in IDE connections ([#28689](https://github.com/google-gemini/gemini-cli/pull/28689))  
- **v0.56.0**  
  - Stable release with full changelog available ([v0.55.1...v0.56.0](https://github.com/google-gemini/gemini-cli/compare/v0.55.1...v0.56.0))  
- **v0.56.0-nightly.20260819.g571851b10**  
  - Added Vertex AI locations documentation link ([#28865](https://github.com/google-gemini/gemini-cli/pull/28865))  
  - Prevented subagents from running when agents mode is disabled ([#28866](https://github.com/google-gemini/gemini-cli/pull/28866))  

#### **3. Hot Issues**  
Top 10 issues by comment count and priority, reflecting community concerns:  
1. [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) (12 comments, 👍2)  
   - **Why it matters:** Subagent incorrectly reports `GOAL` success after hitting `MAX_TURNS`, masking failures in codebase investigation. Critical for trust in agent outcomes.  
   - **Community reaction:** High priority (P1) with ongoing need for retesting; signals frustration with opaque agent termination logic.  
2. [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) (8 comments, 👍8)  
   - **Why it matters:** Generalist agent hangs indefinitely on simple tasks (e.g., folder creation), forcing manual cancellation. Severely impacts usability.  
   - **Community reaction:** Strong engagement (8👍); workaround exists (disabling subagents) but reveals core orchestration flaws.  
3. [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) (8 comments, 👍1)  
   - **Why it matters:** Aims to harness Gemini 3's native bash affinity via zero-dependency sandboxing for safer, more efficient codebase navigation.  
   - **Community reaction:** Enhancement request with clear UX/security benefits; indicates demand for deeper tool integration.  
4. [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) (7 comments, 👍0)  
   - **Why it matters:** Tracks effort to establish robust component-level evaluations, following initial behavioral test foundation. Vital for quality assurance.  
   - **Community reaction:** P1 priority; reflects investment in systematic agent performance measurement.  
5. [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) (7 comments, 👍1)  
   - **Why it matters:** Evaluates AST-aware tooling to reduce token waste and improve precision in codebase operations (e.g., single-call method reads).  
   - **Community reaction:** Shows interest in compiler-level integrations to boost agent efficiency.  
6. [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) (6 comments, 👍0)  
   - **Why it matters:** Gemini underutilizes custom skills/sub-agents without explicit prompting, limiting automation potential.  
   - **Community reaction:** Highlights gap between agent capabilities and autonomous tool adoption.  
7. [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) (5 comments, 👍0)  
   - **Why it matters:** Auto Memory retries low-signal sessions indefinitely, wasting resources and cluttering logs.  
   - **Community reaction:** Points to needed memory system refinements for signal-based filtering.  
8. [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) (4 comments, 👍3)  
   - **Why it matters:** Shell commands hang showing "Waiting input" after completion, breaking workflow trust.  
   - **Community reaction:** Notable 👍3 indicates widespread impact; suggests PTY/stream handling flaws.  
9. [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) (4 comments, 👍0)  
   - **Why it matters:** Auto Memory lacks deterministic redaction and logs excessively, risking secret leaks and noise.  
   - **Community reaction:** Security-focused; aligns with enterprise compliance needs.  
10. [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) (4 comments, 👍0)  
    - **Why it matters:** Browser

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest – 2026‑08‑20**

---

### 1. Today's Highlights
- The CLI shipped three patch releases (v1.0.81‑4, ‑3, ‑2) focused on bug‑fixes and stability improvements.  
- A cluster of high‑impact issues surfaced around **clipboard shortcuts on Linux**, **MCP OAuth failures with Atlassian**, and **sandbox enforcement overriding user settings**, prompting active discussion and multiple 👍 reactions.  
- No pull‑request updates were recorded in the last 24 h, so the current focus remains on issue triage and regression hunting.

---

### 2. Releases
| Version | Summary |
|---------|---------|
| **v1.0.81‑4** | Miscellaneous fixes and changes (see changelog). |
| **v1.0.81‑3** | Miscellaneous fixes and changes. |
| **v1.0.81‑2** | Miscellaneous fixes and changes. |

*All three releases are patch‑level updates addressing regressions reported after v1.0.79‑v1.0.80.*

---

### 3. Hot Issues (10 notable picks)

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| #2082 | **Ctrl+Shift+C no longer copies to clipboard on Linux** | Breaks a muscle‑memory shortcut used across all Linux terminals; affects daily workflow. | 24 comments, 👍 12 – strong confirmation of regression. |
| #4480 / #4490 | **Atlassian MCP OAuth fails with “Incompatible authorization server” (RFC 8414 §3.3)** | Blocks integration with Atlassian’s remote MCP server; appears as a regression from 1.0.71 → 1.0.79/1.0.80. | #4480: 6 comments, 👍 6; #4490: 4 comments, 👍 0 – users reporting blocker for enterprise MCP usage. |
| #4522 | **Sandbox forced on despite `sandbox.enabled=false` (Windows/Enterprise)** | Overrides explicit user/MDM configuration, causing permission errors and loss of trust in sandbox controls. | 2 comments, 👍 7 – high‑impact for enterprises managing policies. |
| #4521 | **Sandbox cannot be disabled (UI shows disabled but engine stays enabled)** | Inconsistent state leads to confusing debugging and unexpected sandbox violations. | 2 comments, 👍 4 – reflects user frustration with toggle reliability. |
| #4524 | **Sandbox blocks Git usage** | Prevents basic version‑control operations inside the enforced sandbox, breaking core developer loops. | 3 comments, 👍 0 – early signal of over‑restrictive sandbox policy. |
| #4520 | **Standalone `.github/hooks/*.json` postToolUse hook never fires** | Hinders adoption of repo‑level hook customization; users expect these to work like plugin hooks. | 2 comments, 👍 0 – indicates a gap in hook discovery logic. |
| #4519 | **400 “Missing namespace for function_call” on deferred/tool‑search tools** | Intermittent tool‑execution failures affect AI‑agent reliability, especially for extensions that rely on dynamic tool loading. | 1 comment, 👍 0 – points to a contract mismatch between CLI and model tool schema. |
| #4530 | **Persist Reasoning Effort between sessions** | Users want the reasoning‑effort setting (Low/Medium/High) to stick across restarts, not reset to Medium. | 0 comments, 👍 0 – emerging feature request with clear UX benefit. |
| #4527 | **`copilot -p` fails with 401 on GHEC data residency** | Prompt mode breaks for enterprises with data‑residency endpoints, while interactive mode works – splits CLI usability. | 0 comments, 👍 0 – highlights endpoint‑selection bug in non‑interactive flow. |
| #4526 | **MCP forced re‑auth appends `prompt=select_account` for non‑Microsoft providers** | Violates OAuth spec for IdPs that don’t support the `select_account` prompt, causing login loops. | 0 comments, 👍 0 – shows over‑generalization of Microsoft‑specific OAuth behavior. |

---

### 4. Key PR Progress
*No pull‑request updates were recorded in the last 24 h.*  
(The repository’s activity is currently issue‑driven; keep an eye on upcoming fixes for the regressions above.)

---

### 5. Feature Request Trends
From the open issues, the most‑requested directions are:

1. **Restore expected keyboard shortcuts** – especially clipboard copy (`Ctrl+Shift+C`) on Linux and reliable key‑event handling when the terminal loses focus.  
2. **Make sandbox behavior transparent and overridable** – users want a reliable `sandbox.enabled` flag that is honored across platforms and not overridden by undetermined managed policies.  
3. **Improve MCP OAuth robustness** – fix the RFC 8414 issuer‑match regression, stop forcing `prompt=select_account` on non‑Microsoft IdPs, and ensure forced re‑auth works generically.  
4. **Persist user‑specific settings** – reasoning effort, model choice, and other `/config` values should survive CLI restarts.  
5. **Extend hook system** – enable repo‑level `.github/hooks/*.json` (postToolUse, preToolUse, etc.) to fire consistently, matching plugin‑hook behavior.  
6. **Better error messages for tool namespace mismatches** – surface the missing namespace and provide a fallback or clearer guidance when dynamic tool search fails.  

---

### 6. Developer Pain Points
- **Clipboard & Input Regression** – Linux users repeatedly report that standard copy shortcuts no longer work, forcing them to rely on work‑arounds (right‑click, `Ctrl+C`).  
- **Sandbox Overreach** – The enforced sandbox is activating despite explicit disables, breaking Git, JVM, and other toolchains; leads to “permission denied” errors and loss of confidence in the CLI’s configuration model.  
- **MCP Auth Fragility** – OAuth flows with third‑party MCP servers (Atlassian, etc.) are failing after recent updates, causing blocked integrations and requiring manual token handling.  
- **Inconsistent Hook Discovery** – Repo‑level hooks are silently ignored, pushing developers to bundle hooks inside plugins or abandon custom automation.  
- **Non‑Interactive Mode Issues** – Prompt‑only usage (`copilot -p`) fails under data‑residency endpoints and ignores managed permission settings, creating a split between interactive and scripted workflows.  

Addressing these pain points will directly improve day‑to‑day productivity and enterprise adoption of the Copilot CLI.  

---  

*Digested from the GitHub repository `github.com/github/copilot-cli` activity on 2026‑08‑20.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest – 2026‑08‑20**  
*Source: github.com/MoonshotAI/kimi-cli*  

---  

### 1. Today's Highlights  
- No new releases were published in the last 24 h.  
- The only activity was the closure of **Issue #2609**, which reported that the ACP runtime blocks built‑in `Grep`/`Glob` tools and intermittently loses terminal capability. This highlights ongoing work to stabilize the ACP (Agent‑Control‑Protocol) integration for Zed and other clients.  

### 2. Releases  
*None* – No version tags were created or updated in the past day.  

### 3. Hot Issues  
Only one issue was updated in the last 24 h; therefore the list reflects the sole notable item.  

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
|[#2609](https://github.com/MoonshotAI/kimi-cli/issues/2609)|**[CLOSED] [ACP] Grep/Glob blocked: "ACP runtime only supports interactive Bash tool processes"; Bash intermittently reports "ACP terminal capability is unavailable"**|Reveals a limitation in the ACP runtime that prevents non‑interactive Bash‑based tools (Grep, Glob) from functioning, and points to intermittent terminal‑capacity failures that break Zed‑based workflows.|0 reactions, 0 comments – the issue was closed without further discussion, suggesting the resolution may have been deemed sufficient by the maintainer or that users have not yet re‑engaged.|

### 4. Key PR Progress  
*None* – No pull requests were updated or merged in the last 24 h.  

### 5. Feature Request Trends  
From the recent issue, the community is signaling a desire for:  

- **Extended ACP tool support** – enabling non‑interactive Bash utilities (e.g., `grep`, `find`, `fd`) to run inside ACP sessions without the “only supports interactive Bash tool processes” error.  
- **More reliable terminal capability handling** – eliminating intermittent “ACP terminal capability is unavailable” messages that disrupt editor‑driven workflows.  

These trends suggest that future ACP enhancements should focus on relaxing the interactive‑only restriction and improving robustness of the underlying pseudo‑terminal management.  

### 6. Developer Pain Points  
Recurring frustrations evident from the latest activity:  

- **ACP runtime constraints** – developers relying on Zed (or other ACP clients) cannot use standard shell‑based search/globbing tools, forcing workarounds or abandoning ACP for certain tasks.  
- **Unstable terminal capability** – occasional loss of terminal access leads to failed commands and loss of confidence in the ACP session’s reliability.  

Addressing these points will likely improve adoption of kimi‑cli’s ACP mode among editor‑integrated workflows.  

---  

*Prepared for technical developers seeking a concise snapshot of recent kimi‑cli activity.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode Community Digest – 2026‑08‑20**  

---

### 1. Today's Highlights
- A cluster of billing‑ and quota‑related bugs surfaced today (e.g., Go‑plan credits being reported as exhausted far earlier than actual usage, and mismatched 5‑hour limits), prompting urgent community discussion.  
- Meanwhile, long‑standing usability pain points gained traction: Emacs keybindings remain inconsistent, and users are requesting session‑renaming and crash‑recovery features to improve workflow resilience.  

### 2. Releases
*No new versions were published in the last 24 h.*

### 3. Hot Issues  
| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| [#37852](https://github.com/anomalyco/opencode/issues/37852) | Provider stream recorded as clean stop on abort (`finish=unknown`, zero usage) | Causes silent agent termination; no error is logged, breaking multi‑turn workflows. | 19 comments, 👍 56 – high concern among power users. |
| [#4877](https://github.com/anomalyco/opencode/issues/4877) | Emacs keybindings (`Ctrl‑A Ctrl‑K`) act on whole window, not line | Violates muscle‑memory expectations for many developers using Emacs‑style editing. | 26 comments, 👍 2 – steady demand for fix. |
| [#25848](https://github.com/anomalyco/opencode/issues/25848) | Add manual session renaming (`/rename` or CLI) | Enables better organization of long‑running projects; currently only auto‑generated names exist. | 13 comments, 👍 1 – clear feature request. |
| [#41976](https://github.com/anomalyco/opencode/issues/41976) | Go plan quota shows $60 exhausted after only ~$14.80 actual spend (cache‑read billing invisible) | Misleading usage meter leads to unexpected throttling and loss of trust in billing. | 4 comments, 👍 0 – noted as a critical billing transparency issue. |
| [#43416](https://github.com/anomalyco/opencode/issues/43416) | Usage‑based billing does not match total subscription usage (new subscriber sees $20 vs. ~$9 used) | Early‑stage subscribers report double‑counting, raising concerns about meter accuracy. | 4 comments, 👍 0 – echoing other quota‑mismatch reports. |
| [#43424](https://github.com/anomalyco/opencode/issues/43424) | Weekly quota incorrectly exhausted after only ~$11 spent (new Go subscription) | Similar to #41976; indicates a systemic bug in quota calculation for fresh subscriptions. | 2 comments, 👍 0 – adds weight to the quota‑mismatch pattern. |
| [#43387](https://github.com/anomalyco/opencode/issues/43387) | 5‑hour limit shows ~50% consumed after <$2 real usage (DeepSeek V4 Pro, heavy cache reads) | Rate‑limiting triggers before dollar limit, disrupting long sessions. | 2 comments, 👍 0 – highlights mis‑alignment between time‑ and cost‑based limits. |
| [#43409](https://github.com/anomalyco/opencode/issues/43409) | Abnormal credit consumption: 42% of monthly limit used in ~4 h on OpenCode Go | Suggests possible metering bug or runaway token counting for certain models. | 2 comments, 👍 0 – another symptom of metering inconsistency. |
| [#43463](https://github.com/anomalyco/opencode/issues/43463) | Zen plan user sees “Upstream request failed: invalid_encrypted_content” after payment | Blocks code generation despite active subscription; points to provider‑side auth/encryption glitch. | 8 comments, 👍 0 – immediate impact on paying users. |
| [#43364](https://github.com/anomalyco/opencode/issues/43364) | Luna session fails in OpenCode Go with same encrypted‑content error | Mirrors #43463; indicates a broader issue with certain model sessions in the Go client. | 7 comments, 👍 3 – growing frustration with model‑session reliability. |

### 4. Key PR Progress  
| # | PR | Summary |
|---|----|---------|
| [#43528](https://github.com/anomalyco/opencode/pull/43528) | **fix(tui): render commands as attachments** – Slash commands are now stored as first‑class command attachments instead of being expanded into raw text, preserving intent and improving TUI fidelity. |
| [#43522](https://github.com/anomalyco/opencode/pull/43522) | **fix: eliminate flaky CI races** – Isolates CLI subprocess tests, prevents concurrent TUI plugin saves, and stabilizes the V2 test suite after recent stress failures. |
| [#43526](https://github.com/anomalyco/opencode/pull/43526) | **fix(tui): handle form clipboard shortcut** – `Ctrl+V` now correctly pastes into V2 TUI forms, opening a custom answer when a choice is focused. |
| [#37813](https://github.com/anomalyco/opencode/pull/37813) | **refactor(opencode): coalesce code mode progress updates** – Bundles child‑call metadata updates to a 100 ms interval, reducing UI chatter and improving responsiveness. |
| [#37810](https://github.com/anomalyco/opencode/pull/37810) | **fix(github): wait for browser callback before polling install status** – Resolves hangs on Linux and timeouts on macOS/Windows during `opencode github install`. |
| [#37809](https://github.com/anomalyco/opencode/pull/37809) | **fix(console): prevent open redirect in /auth/authorize continue parameter** – CWE‑601 fix that sanitizes the `continue` redirect URL. |
| [#37801](https://github.com/anomalyco/opencode/pull/37801) | **docs(opencode): add @rrr2010/opencode-roundtable to ecosystem** – Community‑plugin listing updated with the Roundtable plugin (English & pt‑BR). |
| [#37796](https://github.com/anomalyco/opencode/pull/37796) | **docs(ecosystem): add opencode-show-timestamps plugin** – Adds the Show‑Timestamps plugin to the ecosystem docs. |
| [#37788](https://github.com/anomalyco/opencode/pull/37788) | **fix(opencode): batch direct shell output updates** – Batches shell‑output chunks to reduce pipe‑consumption overhead and avoid excessive UI updates. |
| [#37782](https://github.com/anomalyco/opencode/pull/37782) | **feat(ai): add Alibaba image generation** – Implements `Alibaba.configure(...).image(modelID)` for the Singapore synchronous endpoint, with native parameter passthrough. |

### 5. Feature Request Trends
- **Session management** – renaming (#25848), crash‑recovery auto‑resume (#43488), and better persistence of prompts after detach/reattach (#36604).  
- **Keyboard‑driven workflow** – Emacs‑compatible keybindings (#4877), configurable shortcuts to switch agents/plans (#41742), and SOCKS5 proxy support for desktop (#9956).  
- **Observability & control** – usage‑meter transparency (multiple quota‑mismatch issues), audible/visual approval prompts (#43493), and session‑level cost breakdowns.  
- **Model/provider reliability** – fixing encrypted‑content errors (#43463, #43364), endpoint‑availability handling (#43477), and stream‑abort detection (#37852).  

### 6. Developer Pain Points
- **Billing/metering inconsistency** – repeated reports of quota exhaustion far exceeding actual spend, especially for the Go plan and cache‑read models, leading to unexpected throttling and distrust.  
- **Provider stream robustness** – aborted streams are silently recorded as successful completions, causing agents to exit without error or user notice.  
- **UI/UX glitches** – Enter key not executing in Windows TUI, review shortcut triggering page refresh, and overlapping controls on narrow web viewports.  
- **Keybinding friction** – Emacs‑style navigation (`Ctrl‑A`, `Ctrl‑K`) operates on the whole buffer rather than the current line, breaking established muscle memory.  
- **Resource bloat** – Temporary `libopentui.dylib` copies accumulating to hundreds of gigabytes in `$TMPDIR` on macOS, threatening disk space.  

*All links point to the corresponding GitHub items in the anomalyco/opencode repository.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

**Pi Community Digest – 2026‑08‑20**  

---

### 1. Today's Highlights  
- The community is heavily focused on improving the Windows experience: several high‑comment issues discuss settings‑json parsing, key‑binding conflicts, and unwanted console windows when spawning child processes.  
- Recent PRs have closed two long‑standing pain points – making in‑session model/thinking changes session‑scoped (#8356) and fixing the OpenAI‑completions reasoning_details round‑trip (#8246) – while a new npm‑min‑release‑age guard prevents false update banners (#8377).  
- Feature requests continue to cluster around per‑model configuration, better isolation (profiles), and more transparent error handling for mis‑configured providers.

---

### 2. Releases  
*No new releases were published in the last 24 h.*

---

### 3. Hot Issues  

| Issue | Why it matters | Community reaction |
|-------|----------------|--------------------|
| **[#7547] Windows usage & troubleshooting** – 31 ⭐ | Central hub for Windows developers trying to run Pi; highlights fragmentation of execution methods and documentation gaps. | Active discussion (31 comments) with users sharing work‑arounds and asking for clearer “out‑of‑the‑box” guidance. |
| **[#5263] Ephemeral in‑session model/thinking changes** – 11 ⭐ | Prevents accidental pollution of global defaults when experimenting with models or thinking levels mid‑session. | Broad approval (13 👍) – the fix landed in PR #8356. |
| **[#5895] Steering message opt‑out of agent wake** – 6 ⭐ | Allows extensions to queue continuations without forcing an extra LLM turn, reducing latency and token waste. | No votes yet, but the change is straightforward and welcomed by tool‑authors. |
| **[#7829] Invalid settings.json silently ignored on Windows** – 6 ⭐ | Mis‑escaped backslashes produce a misleading “bash not found” error, hiding the real JSON syntax problem. | Prompted improved validation in later patches; users noted the confusion. |
| **[#8183] Windows Terminal Ctrl+Shift+F conflict** – 4 ⭐ | Fullscreen transcript search clashes with Windows Terminal’s Find shortcut, breaking expected UX. | Requested documentation note; no code change yet. |
| **[#8206] Opencode‑go model catalog mismatch** – 4 ⭐ | Models `qwen3.6-plus` and `minimax-m2.7` are incorrectly routed through the completions endpoint, causing 404s. | Highlights the need for automated catalog sync; maintainers acknowledged the issue. |
| **[#3966] Add built‑in `--profile` support** – 4 ⭐ | Enables isolated Pi state (auth, sessions, settings) for work/personal/LLM projects without manual env‑vars. | Long‑standing request; recent activity shows renewed interest. |
| **[#7994] OpenAI‑completions reasoning_details round‑trip** – 3 ⭐ | Non‑encrypted reasoning text was dropped, breaking replay of model‑generated reasoning. | Fixed in PR #8246; users reported restored fidelity. |
| **[#8323] OpenAI client missing timeout** – 3 ⭐ | Default 600 s SDK timeout can cut off long‑running local model generations. | Prompted addition of explicit timeout configuration. |
| **[#8322] `isRecoverableLength` off‑by‑one** – 3 ⭐ | Exact‑limit truncation was treated as non‑recoverable, preventing useful compaction retries. | Fixed; improves reliability of length‑based overflow handling. |

---

### 4. Key PR Progress  

| PR | Summary | Impact |
|----|---------|--------|
| **[#8377] Respect npm `min-release-age`** | Update‑banner now honors `.npmrc` min‑release‑age, preventing false “update available” notices. | Eliminates noise for developers pinning versions. |
| **[#8374] Abort active run before forking** | Ensures a running agent is settled before a fork operation, avoiding race conditions. | Stabilizes session‑fork workflows. |
| **[#8066] Visual lines caching** | Caches TUI line‑layout results to avoid O(n) recomputation on each render. | noticeable UI speed‑up on large transcripts. |
| **[#6216] Amazon Bedrock Mantle OpenAI Responses provider** | Adds support for Bedrock’s Mantle API surface (GPT‑5 etc.). | Expands model choice for AWS users. |
| **[#8302] WIP: Amazon Bedrock Mantle** | Continuation of #6216; awaiting API‑key permissions for end‑to‑end test. | Signals upcoming full Bedrock Mantle coverage. |
| **[#8363] Prevent wrapped table link colour leaks** | Resets link colours before table padding/borders, fixing colour bleed in markdown tables. | Restores correct syntax highlighting. |
| **[#8369] Fullscreen wheel‑scroll lines setting** | Makes `wheelScrollLines` configurable in fullscreen TUI, accommodating track‑pad gestures. | Improves scrolling ergonomics on certain terminals. |
| **[#8356] Keep model/thinking level changes session scoped** | Model/thinking edits no longer mutate global defaults; explicit `/settings` required for persistence. | Directly addresses #5263; reduces accidental config drift. |
| **[#8246] OpenAI‑completions reasoning_details fix** | Preserves assistant‑level `reasoning.text`/`summary` from `delta.reasoning_details`. | Resolves #7994; restores reasoning replay. |
| **[#8361] Add Pi user‑agent to most API adapters** | Injects a default `User-Agent: pi/<version>` into OpenAI, Anthropic, Azure, Google, Mistral adapters. | Improves telemetry and provider‑side debugging. |

*(Additional notable PRs: #8359 proxy/gateway DeepSeek detection, #8346 unterminated session‑tail repair, #8355 UI prompt events.)*

---

### 5. Feature Request Trends  
- **Windows‑first ergonomics** – key‑binding docs, settings validation, eliminating stray console windows, and clearer installation guides.  
- **Isolation & profiles** – demand for `--profile`/environment‑based state separation to avoid cross‑project contamination.  
- **Per‑model configuration** – ability to set compaction, thinking level, timeout, or provider overrides on a per‑model basis.  
- **Transparent error handling** – better messages for invalid JSON, missing binaries, or mis‑routed model catalog entries.  
- **Extension visibility** – hooks for built‑in slash commands, shared request IDs, and tool‑registration without auto‑activation.  
- **Catalog fidelity** – automated sync of provider model lists (especially for OpenAI‑compatible gateways) to avoid mismatched endpoints.

---

### 6. Developer Pain Points  
- **Windows‑specific friction**: invalid `settings.json` parsing, conflicting shortcuts, unexpected console windows, and fragmented launch methods create a steep onboarding curve.  
- **State leakage**: model/thinking changes and session settings unintentionally persisting globally, forcing developers to manually reset or use work‑arounds.  
- **Catalog/provider mismatches**: outdated or incorrectly mapped model entries lead to 404s or wrong API surfaces, especially when using proxies/gateways (LiteLLM, OpenCode Zen).  
- **Timeout and overflow handling**: missing explicit timeouts cause long local model runs to be cut; off‑by‑one length checks prevent useful compaction retries.  
- **Limited extension insight**: built‑in commands and tool execution fire without events, hindering extensions that need to show UI feedback or manage resources.  
- **Update‑banner noise**: ignoring npm’s `min‑release‑age` resulted in spurious “update available” alerts, wasting CI/CD cycles.  

*Addressing these themes—particularly Windows polish, stronger isolation, and more reliable model catalog handling—will likely yield the highest satisfaction gains in the coming weeks.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code Community Digest – 2026‑08‑20**

---

### 1. Today’s Highlights
- The stable **v0.21.14** release ships a **live‑session registry** and the new `qwen sessions ps` command (JSON‑output) for listing and managing interactive sessions — a foundational improvement for multi‑workspace daemon usage.  
- SWE‑bench Verified runs for v0.21.14 succeeded (1/1 resolved) and the full end‑to‑end validation pipeline (SWE‑bench 500 → Release writeback → Terminal‑Bench 2.0 89) passed, confirming regression‑free quality.  
- Numerous daemon‑ and session‑related fixes landed today (prompt‑ledger persistence, token‑count scoping on model switches, loop‑detection refinements), directly addressing the most‑up‑voted issues around memory usage and context handling.

---

### 2. Releases
| Version | Key Changes |
|---------|-------------|
| **v0.21.14** | • Added live‑session registry and `qwen sessions ps` (JSON) for runtime session inspection.<br>• Improved daemon resource tracking and prompt‑ledger persistence for cold‑load reconciliation.<br>• Fixed token‑count leakage when switching models (GeminiChat). |
| **v0.21.14‑preview.0** | Preview of the above features; includes early daemon‑side skill‑toggle metadata attachment. |
| **v0.21.11‑nightly.20260819.d87b272aec** | Nightly build that already contains the live‑session registry and `sessions ps` work. |
| **dsw‑eas‑net‑smoke‑20260819‑r1** / **dsw‑eas‑full‑20260820‑r1** | Isolated network/smoke and full end‑to‑end validation runs using the new v0.21.14 baseline. |

*No other version tags appeared in the last 24 h.*

---

### 3. Hot Issues (Top 10 by community engagement)

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| [#5267](https://github.com/QwenLM/qwen-code/issues/5267) | `context.fileName` setting not working (12 comments) | Blocks users from persisting file attachments across prompts – a core workflow ergonomics problem. | Awaiting clarification; maintainers asked for repro steps. |
| [#9194](https://github.com/QwenLM/qwen-code/issues/9194) | Mutation‑verified test‑pin gaps from PR #9096 (11 comments) | Highlights test brittleness where production changes pass but tests under‑specify behavior. | Tagged P3; discussion on hardening test contracts. |
| [#8051](https://github.com/QwenLM/qwen-code/issues/8051) | Bound multi‑workspace daemon resource usage (10 comments) | Daemon currently caps workspace/session counts but not actual memory/WS buffers → OOM risk. | High‑priority P2; needs design for byte‑level limits. |
| [#9278](https://github.com/QwenLM/qwen-code/issues/9278) | /review publish‑time convergence advisory (7 comments) | Captures a dangerous feedback loop in the review‑fix cycle; proposes telemetry and operator surfaces. | In‑progress; reflects community concern over review stability. |
| [#9309](https://github.com/QwenLM/qwen-code/issues/9309) | Incorrect context compression (5 comments) | Shows `/compress‑fast` → `/compress` leaving residual tokens, breaking context‑free guarantees. | Active debugging; token‑count mismatch visualized. |
| [#9320](https://github.com/QwenLM/qwen-code/issues/9320) | Lost context after `/compress‑fast` + `/rewind` (5 comments) | Rewinding a compressed session drops history, breaking session continuity. | Similar root cause to #9309; users report data loss. |
| [#8182](https://github.com/QwenLM/qwen-code/issues/8182) | Daemon gives each ACP child 50 % host memory (5 comments) | Memory allocation not divided by child count → over‑allocation and swap pressure. | P2; fix expected in daemon spawner logic. |
| [#9459](https://github.com/QwenLM/qwen-code/issues/9459) | `/effort max` rejected by OpenAI‑compatible providers (4 comments) | UI offers an unsupported effort tier, causing 400 errors until tier is changed back. | P1; blocks reasoning‑effort tuning on many providers. |
| [#9450](https://github.com/QwenLM/qwen-code/issues/9450) | `task_list` triggers false duplicate‑tool‑call loops (4 comments) | State‑aware read tool mis‑identified as looping when teammates mutate shared task board. | P2; prompts loop‑detection refinements (see PR #9492). |
| [#9219](https://github.com/QwenLM/qwen-code/issues/9219) | /review presubmit overlap detection exact‑line only (4 comments) | Misses multi‑line and semantic duplicate comments, reducing review effectiveness. | P2; enhancement request for range‑aware matching. |

---

### 4. Key PR Progress (10 notable PRs)

| PR | Summary |
|----|---------|
| [#9260](https://github.com/QwenLM/qwen-code/pull/9260) | Web Shell: retain manually set session name across `/clear` – prevents auto‑title overwrite. |
| [#8276](https://github.com/QwenLM/qwen-code/pull/8276) | Core: preserve prompt cache across deferred tool discovery by moving catalog into live `tool_search`. |
| [#9426](https://github.com/QwenLM/qwen-code/pull/9426) | Serve: persist a prompt‑terminal ledger (append‑only) next to session transcript for cold‑load reconciliation. |
| [#9332](https://github.com/QwenLM/qwen-code/pull/9332) | Review: fold one‑hop import widening into `fetch‑pr --since`, removing the obsolete `rescope` subcommand. |
| [#9441](https://github.com/QwenLM/qwen-code/pull/9441) | Core: show edit/exec diffs when a PreToolUse hook returns `ask`, making interactive approvals transparent. |
| [#9506](https://github.com/QwenLM/qwen-code/pull/9506) | Core: invalidate GeminiChat token counts when the model route changes, scoping counts to the active route. |
| [#9361](https://github.com/QwenLM/qwen-code/pull/9361) | Scheduled‑tasks: allow creating a task with an existing idle session, reusing it after validation. |
| [#9393](https://github.com/QwenLM/qwen-code/pull/9393) | Web Shell: adopt canonical Goal v3 controls (create, inspect, edit, pause, resume, replace, clear) without model routing. |
| [#9394](https://github.com/QwenLM/qwen-code/pull/9394) | Channels: add built‑in DingTalk Workspace channel using existing DWS CLI profile (DMs, @mentions, ambient groups). |
| [#9492](https://github.com/QwenLM/qwen-code/pull/9492) | Core: make loop‑detection result‑aware for stateful read tools (currently `task_list`) to avoid false positives on shared state. |

*Other noteworthy PRs (not in the top‑10 list but still impactful):*  
- [#9502](https://github.com/QwenLM/qwen-code/pull/9502) – suppress Homebrew “update available” notification when no newer version exists.  
- [#9503](https://github.com/QwenLM/qwen-code/pull/9503) – fold completed read/search tool batches into the thought line for cleaner TUI output.  
- [#9501](https://github.com/QwenLM/qwen-code/pull/9501) – cap reasoning‑effort tier at what each endpoint actually accepts (prevents 400 errors).  
- [#9402](https://github.com/QwenLM/qwen-code/pull/9402) – Agent Board MVP: filesystem‑backed board to share work across independently started agents.  
- [#9389](https://github.com/QwenLM/qwen-code/pull/9389) – Provider setup wizard now queries the endpoint for live model list instead of a static release‑time list.

---

### 5. Feature Request Trends
- **Session & Context Management** – Live‑session registry, `sessions ps`, persistent session names, and better context compression/rewind semantics are repeatedly requested.  
- **Token Usage Transparency** – CLI token counters, per‑model token accounting, and visibility of usage percentages (see #7719, #9454).  
- **Advisor / Second‑Opinion Tools** – Requests for a read‑only Advisor capability mirroring Claude Code’s native Advisor (#6542, #9036).  
- **Cross‑Package Contract Consistency** – Centralizing constants (approval mode, task‑list, prompt length) to avoid drift (#9151, #9497).  
- **Daemon Resource Bounding** – Multi‑workspace daemon memory/WS limits, per‑child memory division (#8051, #8182).  
- **Integration & Notification Improvements** – Homebrew update‑notification suppression, reliable webhook/event delivery for GitHub channel (#8012, #9493).  
- **Review‑Loop Stability** – Publish‑time convergence advisories, range‑aware overlap detection, and incremental review rounds (#9278, #9219, #9190).  

---

### 6. Developer Pain Points
- **Context Compression/Unreliability** – Frequent reports that `/compress`, `/compress‑fast`, and `/rewind` do not actually reduce token count or lose data (#4098, #4141, #9309, #9320).  
- **Token‑Count Leakage on Model Switch** – GeminiChat and other providers reuse prior prompt/output totals, causing mis‑billing and limit errors (#9454, #9506).  
- **Daemon Memory Allocation** – Each ACP child receives a flat 50 % host memory ceiling, leading to over‑allocation under load (#8182).  
- **False Loop Detection** – Stateful read tools like `task_list` trigger duplicate‑tool‑call loops despite legitimate state changes (#9450, #9492).  
- **Homebrew Update Noise** – Persistent “update available” banner even when brew has no newer version (#9493, #9502).  
- **Review‑Feedback Loop Instability** – The review‑fix cycle can amplify diffs when findings are applied, creating a runaway feedback loop (#9278).  
- **Limited Token Usage Visibility** – No built‑in CLI token meter; users must infer usage from external logs (#7719).  

--- 

*Generated for developers seeking a concise, actionable snapshot of the Qwen Code project’s activity on 2026‑08‑20.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

**DeepSeek TUI Community Digest – 2026‑08‑20**  
*Based on activity in github.com/Hmbown/DeepSeek‑TUI (issues & PRs updated in the last 24 h)*  

---

### 1. Today’s Highlights  
- The project shipped **CodeWhale v0.9.10** (PR #5513), introducing retention hardening, identity improvements, first‑run experience and durable approvals.  
- Documentation localization effort progressed sharply: Tier 1 Chinese docs were moved to `docs/zh_hans/` (PR #5507) and the dictionary‑spine migration continued with several doc sets now using the new i18n structure (PRs #5517, #5504, #5510).  
- A handful of blocking bugs surfaced on the day of release, notably an **early emergency compaction** issue at ~85‑105 K tokens (Issue #5518) and an **HTTP 400 max_tokens** regression after the v0.9.9 upgrade (Issue #5516).  

---

### 2. Releases  
*No new releases were published in the last 24 h.*  
The upcoming v0.9.10 release is captured in PR #5513 and is expected to be merged shortly.

---

### 3. Hot Issues (10)  

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| **#5518** | [Emergency compaction triggers ~85‑105 K tokens despite 327 680‑token context](https://github.com/Hmbown/CodeWhale/issues/5518) | Users hit unexpected compaction mid‑session, losing context and degrading model usefulness. | 3 comments, 0 👍 – early signal of a regression in the auto‑compaction logic. |
| **#5516** | [HTTP 400 `max_tokens=384000` exceeds model limit after v0.9.9 upgrade](https://github.com/Hmbown/CodeWhale/issues/5516) | Breaks all requests for anyone who upgraded without manual config, effectively a release blocker. | 1 comment, 0 👍 – urgent need for a version‑bump or config guard. |
| **#5512** | [Header status indicator (cw/whale/dots) never renders since 0.9.7](https://github.com/Hmbown/CodeWhale/issues/5512) | Removes a key UI cue for agent status, hurting usability especially in headless terminals. | 2 comments, 0 👍 – regression noted after UI refactor. |
| **#5519** | [isZh migration losing ground – more files adding locale branches](https://github.com/Hmbown/CodeWhale/issues/5519) | Indicates the i18n cleanup is drifting; more technical debt is being introduced than removed. | 1 comment, 0 👍 – highlights need for stricter enforcement. |
| **#5482** | [EPIC(docs): review, restructure, fully localize docs to Chinese](https://github.com/Hmbown/CodeWhale/issues/5482) | Strategic effort to serve the growing Chinese‑speaking user base; without it, language barrier persists. | 1 comment, 0 👍 – tracked via PR #5507 and follow‑ups. |
| **#5472** | [TUI memory retention: every Bash call’s full stdout/kept for 1 h](https://github.com/Hmbown/CodeWhale/issues/5472) | Explains observed swap pressure and OOM risks during long sessions with heavy tooling. | 1 comment, 0 👍 – closed after investigation; signals need for configurable retention. |
| **#5478** | [`/rename` mid‑leave leaves shell tool row stuck at “running”](https://github.com/Hmbown/CodeWhale/issues/5478) | UI lags behind actual tool completion, causing confusion and potential double‑run attempts. | 1 comment, 0 👍 – closed; fix expected in upcoming release. |
| **#5403** | [main red on both platforms: plugin_e2e_acceptance macOS, NSIS provisioning Windows](https://github.com/Hmbown/CodeWhale/issues/5403) | CI instability blocks merge confidence; points to flaky e2e tests or provisioning scripts. | 4 comments, 0 👍 – ongoing investigation. |
| **#5337** | [Web: finish the #4934 dictionary spine – retire every `isZh` branch](https://github.com/Hmbown/CodeWhale/issues/5537) | Core i18n architecture work; completion will simplify future translations and reduce bugs. | 6 comments, 0 👍 – tracked via multiple PRs (#5504, #5510, #5517). |
| **#5455** | [feat(tui): Signal Cut whale – empty‑state hero art + Whale Teams role mapping](https://github.com/Hmbown/CodeWhale/issues/5455) | Polishes the first‑time user experience; visual branding influences perception of maturity. | 0 comments, 0 👍 – closed; art now in main. |

---

### 4. Key PR Progress (10)  

| # | PR | Summary |
|---|----|---------|
| **#5513** | [release: Codewhale v0.9.10 – retention, identity, durable approvals](https://github.com/Hmbown/CodeWhale/pull/5513) | bundles 76 commits: session‑log persistence, approval durability, first‑run flow, and various hardening tweaks. |
| **#5507** | [docs(i18n): complete Tier 1 of Chinese docs localization (#5482)](https://github.com/Hmbown/CodeWhale/pull/5507) | moves existing Chinese translations into `docs/zh_hans/` and restructures the docs tree for per‑language folders. |
| **#5510** | [docs(readme): restore the star history chart](https://github.com/Hmbown/CodeWhale/pull/5510) | reinstates the star‑history visual (via a self‑hosted fallback) after GitHub restricted third‑party access. |
| **#5517** | [feat(web): move docs/constitution and docs/runtime‑api onto the dictionary spine (#5337)](https://github.com/Hmbown/CodeWhale/pull/5517) | eliminates `isZh` branches for two major doc sets, wiring them through the new i18n dictionary. |
| **#5515** | [fix(tui): forward MCP image results as typed content](https://github.com/Hmbown/CodeWhale/pull/5515) | converts MCP `image` payloads into CodeWhale’s rich tool‑result block, stripping inline base64 while preserving semantics. |
| **#5514** | [refactor(tui): extract stream processing from turn loop](https://github.com/Hmbown/CodeWhale/pull/5514) | isolates the response‑stream state machine into `process_stream`, improving readability and testability. |
| **#5509** | [fix(tui): restore `/title` as an independent terminal window title (#5430)](https://github.com/Hmbown/CodeWhale/pull/5509) | separates `/title` from `/rename` so changing the window title no longer mutates the session name. |
| **#5506** | [feat(tui): add command context adapters and migration gate (FEAT‑015)](https://github.com/Hmbown/CodeWhale/pull/5506) | builds DI infrastructure for slash‑command extraction; currently migrates zero commands but sets the stage. |
| **#5504** | [feat(web): move docs/hooks and docs/troubleshooting onto the dictionary spine (#5337)](https://github.com/Hmbown/CodeWhale/pull/5504) | continues the i18n cleanup, converting two small doc pages to the dictionary‑spine approach. |
| **#5511** | [feat(tui): show repository context in git chrome](https://github.com/Hmbown/CodeWhale/pull/5511) | header now displays `repo/branch` or `repo/worktree · branch`, ahead/behind counts when available. |

---

### 5. Feature Request Trends  
- **Documentation localization** – strong demand for complete Chinese translations (issues #5482, #5507, #5519).  
- **UI stability & discoverability** – requests to restore missing status indicators (header indicator, `/title`), fix garbled image output, and ensure reliable terminal title handling.  
- **Performance & resource management** – calls to bound memory retention for tool output, prevent early compaction, and avoid session hangs on large‑file processing.  
- **Internationalization infrastructure** – completion of the dictionary spine retirement of `isZh` branches to simplify future i18n work.  
- **Observability & CI health** – desire for stable CI pipelines (eliminate flaky e2e/NSIS jobs) and richer runtime diagnostics (repo/worktree header, star‑history chart).  

---

### 6. Developer Pain Points  
- **Flaky tests & CI instability** – repeated red runs on macOS/plugin_e2e_acceptance and Windows/NSIS provisioning (Issue #5403).  
- **Memory bloat** – full stdout/stderr retention for each Bash command leads to swap pressure (Issue #5472).  
- **Session hangs with large workloads** – timeout‑induced deadlocks when processing multi‑million‑text files (Issue #1425) and image‑related UI glitches (Issue #894).  
- **Regression after upgrades** – header status indicator loss (Issue #5512) and `max_tokens` overshoot (Issue #5516) show insufficient upgrade guards.  
- **Localization fragmentation** – the `isZh` migration is regressing, with more locale branches being added than removed (Issue #5519).  
- **Tool‑output handling** – MCP image results currently lose typed structure; developers want proper rich‑content forwarding (PR #5515).  

---  

*Prepared for the DeepSeek TUI developer community. All links point to the exact GitHub items referenced.*

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

**ComfyUI Community Digest – 2026‑08‑20**  
*Technical analyst perspective – AI developer tools*  

---

### 1. Today's Highlights  
- A critical regression in the dynamic‑VRAM subsystem (Issue #15255) is causing CUDA OOM crashes on multi‑GPU setups after the Aug 3 update; the community is rallying around a temporary `--cuda‑device 0` workaround while a permanent fix is prepared.  
- Performance concerns have surfaced: v0.33.2 slows MiniMax H3 video generation by ~36 % (Issue #15720) and multiple H3 instances now trigger a “version_counter” error (Issue #15733), prompting urgent PRs that address quantized‑model handling and kernel launch verification.  
- Platform‑specific requests are gaining traction: Jetson/ARM64 users are asking for a `--disable-dynamic-vram` flag (Issue #15285), and Windows multi‑GPU visibility is being limited by default via PR #15737 to mitigate the CUDA bug.

### 2. Releases  
*No new releases were published in the last 24 h.*

### 3. Hot Issues (10 noteworthy)  

| # | Issue | Why it matters | Community reaction (👍 / comments) |
|---|-------|----------------|------------------------------------|
| #15255 | **[Bug] Dynamic VRAM streaming crashes all generations** – CUDA OOM regression after Aug 3 update | Blocks any multi‑GPU workflow; core to recent ComfyUI stability. | 0 👍 • 58 💬 |
| #15285 | **[Feature] `--disable-dynamic-vram` flag needed for Jetson (ARM64/Unified Memory)** | Jetson Orin users cannot use dynamic VRAM because of unified memory; request for an opt‑out. | 0 👍 • 8 💬 |
| #15720 | **[Potential Bug] v0.33.2 makes H3 generations ~36 % slower** | Performance regression affects the popular MiniMax H3 video pipeline. | 7 👍 • 3 💬 |
| #15738 | **[Potential Bug] H3 Ref2VA: safe max frame length drops sharply with more references** | Leads to corrupted output that is falsely reported as success, undermining trust in results. | 0 👍 • 0 💬 |
| #15733 | **[Potential Bug] Multiple instances of the same MiniMax H3 model cause “Cannot set version_counter for inference tensor”** | Prevents chaining or parallel H3 nodes, a common pattern in complex workflows. | 0 👍 • 0 💬 |
| #14881 | **[Bug] AMD problem of ROCm or PyTorch** – ImageZ fails to generate | Highlights ongoing AMD/ROCm support gaps; affects a sizable AMD user base. | 0 👍 • 8 💬 |
| #14075 | **[Potential Bug] CheckpointSave fails with FakeDevice when Dynamic VRAM is enabled** | Shows interaction between checkpointing and VRAM subsystem; relevant for long‑running jobs. | 2 👍 • 6 💬 |
| #14940 | **[User Support, Stale] DynamicVRAM, pinned memory, paging file issues** | Collects various memory‑management pain points; serves as a tracker for VRAM‑related UX complaints. | 0 👍 • 3 💬 |
| #15679 | **[Closed] DynamicVRAM on WSL pins the entire model set into Shared GPU memory** | Demonstrates WSL‑specific memory‑pinning overhead; useful for cross‑platform developers. | 0 👍 • 2 💬 |
| #2556 | **[Bug] Expected all tensors to be on the same device – VAE Encode for Inpaint Node** | Persistent device‑mismatch issue that surfaces in inpainting workflows; still receiving updates. | 0 👍 • 2 💬 |

### 4. Key PR Progress (10 important PRs)  

| # | PR | Summary & Impact |
|---|----|------------------|
| #15737 | **Limit Windows multi‑GPU visibility (CORE‑391)** | Defaults to first GPU only; adds `--cuda-devices all` opt‑in. Direct workaround for #15255 CUDA OOM. |
| #15648 | **Fix: Verify aotriton kernels actually launch before enabling pytorch attention** | Prevents silent fallback to slower attention when AOTriton kernels are missing, fixing #15647/#15653. |
| #14863 | **feat: add torchao INT4 weight‑only quantization backend** | Introduces production‑grade INT4 quantization (W4A16) via torchao, reducing VRAM footprint for LLMs. |
| #15718 | **[Partner Nodes] Adding Cosmos3 models via API Nodes** | Exposes Cosmos3 text‑to‑image/video/audio through local vLLM‑Omni server, expanding partner‑node ecosystem. |
| #15736 | **Fix VAEEncodeForInpaint mask growing on non‑CPU or non‑float32 masks** | Ensures mask‑growing kernel works regardless of mask device/dtype, removing spurious errors in inpainting. |
| #15735 | **Add MiniMax H3 AV latent builder** | Provides a native node to assemble video/audio latents into the official H3 `NestedTensor` format, streamlining multimodal workflows. |
| #14856 | **force LowVramPatch for quantized patched weights** | Avoids eager LoRA merging into quantized weights that caused CUDA OOM, addressing quant‑model instability. |
| #15721 | **Fix Porter‑Duff blend modes with transparent layers** | Corrects source‑over compositing for DARKEN/LIGHTEN modes when layers contain alpha, fixing visual artifacts. |
| #15734 | **Fix “Cannot set version_counter for inference tensor” for quantized weights** | Directly resolves #15733 by safeguarding `version_counter` during quantized model unload/reload cycles. |
| #15730 | **Support launching auto‑launch in a specific browser** | Adds `--browser-path` and `--browser-profile` flags, giving developers control over the preview browser for debugging. |

### 5. Feature Request Trends  
- **Manual VRAM control** – Frequent calls for flags to disable or limit dynamic VRAM (`--disable-dynamic-vram`, `--cuda-devices` selection) especially on Jetson/WSL and multi‑GPU rigs.  
- **Improved AMD/ROCm support** – Users report failures with ImageZ and other nodes; desire for better ROCm/PyTorch compatibility and fallback paths.  
- **Quantization ergonomics** – Requests for safer handling of quantized checkpoints (FP8, INT4, NF4) when combined with LoRA or dynamic patching, to avoid OOM and version‑counter errors.  
- **Cross‑platform launch customization** – Demand for choosing browser, profile, and tighter integration with container memory limits (cgroup‑aware RAM accounting).  
- **Performance transparency** – Requests for benchmarking tools or telemetry to detect regressions like the H3 slowdown in v0.33.2.  

### 6. Developer Pain Points  
- **Dynamic VRAM instability** – Repeated OOM crashes, incorrect memory pinning on WSL, and performance regressions when the subsystem is enabled.  
- **Device/tensor placement bugs** – Persistent “expected all tensors on same device” errors, especially in VAE/VAE‑Encode and checkpoint‑save nodes.  
- **Quantization fragility** – LoRA merging, version‑counter issues, and kernel‑launch verification gaps make FP8/INT4 workflows error‑prone.  
- **Platform‑specific gaps** – Jetson/ARM64 unified memory, WSL shared memory behavior, and AMD ROCm support remain under‑served, prompting work‑arounds rather than native fixes.  
- **Performance regressions** – Minor version bumps (e.g., v0.33.2) causing noticeable slowdowns in popular models (MiniMax H3) erode confidence in release stability.  

*Prepared for the ComfyUI developer community – stay tuned for upcoming patches addressing the VRAM regression and quantization stability.*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Community Digest – 2026‑08‑20**

---

### 1. Today’s Highlights
- The project cut a new release candidate **v0.32.15‑rc1** that adds a model‑metadata cache to shave per‑request overhead.  
- Community discussion is dominated by licensing compliance (MIT notice distribution), AMD Strix Halo VRAM regressions, and missing prompt‑caching features for both local and cloud workloads.  
- Several PRs landed or are under review that target goroutine leaks, UI settings persistence, and cross‑device tool‑agent compatibility.

---

### 2. Releases
| Version | Date | Key Change |
|---------|------|------------|
| **v0.32.15‑rc1** | 2026‑08‑19 | *Add a model metadata cache to reduce Ollama’s per‑request overhead* (see [changelog](https://github.com/ollama/ollama/compare/v0.32.14...v0.32.15-rc1)). First‑time contributor @gaugarg‑nv added the cache in PR #17752. |

---

### 3. Hot Issues (10 picked)

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| [#3185](https://github.com/ollama/ollama/issues/3185) | **Missing MIT notice distribution** – Ollama bundles llama.cpp but does not ship the required copyright notice in binaries. | Legal compliance risk for distributors; users must manually verify notices. | 56 comments, 👍 269 – high visibility and strong demand for a fix. |
| [#16462](https://github.com/ollama/ollama/issues/16462) | **AMD Strix Halo VRAM detection regression** (0.30+ containers) – only 2 GB reported instead of full memory. | Breaks GPU‑aware scheduling on newer AMD APUs; forces users to older builds or manual overrides. | 32 comments, 👍 3 – active discussion among ROCm users. |
| [#16714](https://github.com/ollama/ollama/issues/16714) | **Ollama Cloud – Prompt Cache Support** – request to expose provider‑side prompt caching (like Open Code Zen). | Direct impact on cost/latency for agentic workloads; aligns Ollama Cloud with competing services. | 32 comments, 👍 2 – clear feature demand from cloud subscribers. |
| [#17839](https://github.com/ollama/ollama/issues/17839) | **Agent integrations hang with local Qwen models on macOS** – API works, but agents (Claude, Codex, etc.) stall. | Blocks adoption of Ollama as a backend for AI‑agent frameworks on Apple Silicon. | 18 comments, 👍 3 – growing concern as agent tooling expands. |
| [#14621](https://github.com/ollama/ollama/issues/14621) | **Qwen3.5:9b concurrent call BUG** – parallel requests downgraded despite sufficient memory and OLLAMA_NUM_PARALLEL set. | Limits throughput for serving Qwen‑based models; users report under‑utilization of hardware. | 17 comments, 👍 0 – niche but critical for high‑concurrency deployments. |
| [#17778](https://github.com/ollama/ollama/issues/17778) | **Qwen 3.8 streaming error** – “no user query found in messages” (500) during tool‑call loops. | Causes failures in agent‑style pipelines that rely on streaming tool use. | 15 comments, 👍 4 – recent spike after Qwen 3.8 rollout. |
| [#17829](https://github.com/ollama/ollama/issues/17829) | **MLX engine: no prompt/prefix caching** – each agent step re‑prefills the whole prompt, inflating TTFT. | Degrades performance for multi‑step agents on Apple Silicon; defeats purpose of KV caching. | 7 comments, 👍 1 – MLX users noticing latency growth. |
| [#17847](https://github.com/ollama/ollama/issues/17847) | **ROCm backend on Strix Halo KV state bleed** – responses contaminated by previous request. | Leads to incorrect outputs in conversational loops; a correctness issue for ROCm deployments. | 2 comments, 👍 0 – emerging bug needing investigation. |
| [#17876](https://github.com/ollama/ollama/issues/17876) | **ollama.app.exe UI thread infinite GET↔POST loop** – blocks server readiness on Windows GUI. | Renders the desktop app unusable until restarted; affects non‑technical Windows users. | 4 comments, 👍 0 – high impact on GUI adoption. |
| [#14258](https://github.com/ollama/ollama/issues/14258) | **GPU‑to‑CPU fallback happens silently** – no user‑visible warning when model spills to CPU. | Users experience unexplained slowness; debugging requires enabling verbose logs. | 5 comments, 👍 2 – long‑standing UX pain point. |

---

### 4. Key PR Progress (10 picked)

| PR | Summary |
|----|---------|
| [#17883](https://github.com/ollama/ollama/pull/17883) | **Server:** Prevent wedging chat/generate on mid‑stream parser error – stops goroutine deadlock when a builtin parser rejects model output. |
| [#17881](https://github.com/ollama/ollama/pull/17881) | **Server:** Avoid goroutine leaks on client disconnect in streaming routes – ensures background workers exit when the client aborts. |
| [#17855](https://github.com/ollama/ollama/pull/17855) | **Qwen 3.8:** Normalize system messages – merges multiple system/dev messages into a single leading prompt, fixing rendering glitches. |
| [#17880](https://github.com/ollama/ollama/pull/17880) | **App/UI:** Keep settings the client did not send – stops UI from resetting unspecified fields to zero on every settings write. |
| [#17879](https://github.com/ollama/ollama/pull/17879) | **App/UI:** Disable sidebar open animation on initial load – prevents unwanted animation when settings are restored async. |
| [#17144](https://github.com/ollama/ollama/pull/17144) | **Server:** Allow parallel requests for Qwen 3.5/Qwen 3.5moe now that the upstream llama.cpp crash is fixed – removes the hard‑coded `numParallel = 1` blocklist. |
| [#17877](https://github.com/ollama/ollama/pull/17877) | **Scripts:** Fall back to .tgz when `zstd` CLI missing – improves install.sh robustness on distros like Ubuntu 26.04 that lack zstd by default. |
| [#17278](https://github.com/ollama/ollama/pull/17278) | **Server:** Warm prefill cache across model unload/reload (via `OLLAMA_PREFILL_CACHE`) – persists KV prefixes to reduce TTFT on model reloads. |
| [#17865](https://github.com/ollama/ollama/pull/17865) | **MLX:** Add DFlash2 support – brings native MLX loading/inference for the new DFlash2 draft model family. |
| [#17863](https://github.com/ollama/ollama/pull/17863) | **Envconfig:** Normalize `OLLAMA_HOST` scheme to lowercase – fixes mixed‑case URLs that were incorrectly defaulting to port 11434. |

*(Additional notable PRs: #17853 (desktop onboarding flow), #17874 (CI MLX patch plumbing), #17195 (GLM‑OCR EOT fix), #17054 (add otaku CLI), #17344 (add whatbroke observability tool).)*

---

### 5. Feature Request Trends
- **Prompt‑caching exposure** – both local (return cache usage in completion responses, #8008) and cloud (Ollama Cloud prompt‑cache support, #16714).  
- **Cross‑device tool/agent flexibility** – allow Codex and similar tools to run on a different machine than the Ollama server (#17835).  
- **Legacy OS support** – requests to run Ollama on older macOS/Windows releases (#17842).  
- **Better quantization options** – ship official Q3_K_M MLX quantizations for large Qwen models to fit 16‑24 GB Macs (#17869).  
- **Cloud reliability & observability** – improve timeout rates, expose detailed error messages, and add usage metrics for cached tokens (#14673, #17130).  
- **Benchmark realism** – adopt HumanEval‑style prompts for code‑model evaluation (#17480).  

---

### 6. Developer Pain Points (recurring themes)
- **Licensing/compliance** – missing distribution of dependency notices (MIT, Apache, etc.) creates legal friction.  
- **GPU/VRAM detection bugs** – AMD Strix Halo and ROCm regressions lead to under‑utilization or incorrect memory reporting.  
- **Prompt‑caching gaps** – absence of KV‑cache reuse across requests (MLX, ROCm) and lack of cache‑usage metrics increase latency and cost.  
- **Agent/tool integration instability** – hangs or parsing errors when external agents (Claude, Codex, OpenCode) interact with local models, especially on macOS.  
- **Concurrent request limits** – unintended throttling of parallel calls for certain architectures (Qwen 3.5/3.5moe, Qwen 3.8).  
- **Silent fallbacks & poor error visibility** – GPU‑to‑CPU fallback, TLS handshake timeouts, and installer failures give no clear feedback, forcing users to dig through logs.  
- **UI/UX glitches** – settings not persisting, infinite loops in the desktop app, and unwanted animations degrade the native experience.  
- **Installer fragility** – reliance on external tools (zstd) without graceful fallbacks breaks on clean OS installs.  

---  

*Generated from the Ollama GitHub activity for 2026‑08‑20.*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

**llama.cpp Community Digest – 2026‑08‑20**

---

### 1. Today’s Highlights
- The latest commit **b10502** adds CI attestation for signed release artifacts, improving supply‑chain security for downstream users.  
- Activity remains concentrated on GPU backend stability: SYCL (Intel Arc) shows correct output but no performance gain, CUDA kernels are stalling under watchdog, and HIP/ROCm integrations suffer from cross‑talk and infinite‑token bugs.  
- Feature work continues around conversation management (compact conversation action) and tool‑calling support, while performance‑focused PRs introduce DFlash2, draft‑model prefetch optimizations, and tensor‑split meta‑backend fixes.

---

### 2. Releases
- **b10502** – *ci : add attestation for signed release artifacts* ([#25933](https://github.com/ggml-org/llama.cpp/pull/25933))  
  No version bump; the change adds GPG/signature verification to the release pipeline so that consumers can validate the integrity of distributed binaries.

---

### 3. Hot Issues  
*(selected by comment count, recency, and impact)*  

| Issue | Comments | Why it matters | Community reaction |
|-------|----------|----------------|--------------------|
| **[#23533] SYCL MTP on Intel Arc: correct output but no speed gain** | 41 | Highlights that the new SYCL‑based MTP path produces correct results but fails to deliver the expected acceleration on Intel Arc GPUs, limiting adoption of the speculative‑decoding feature. | 👍5; discussion centers on profiling and potential memory‑bandwidth bottlenecks. |
| **[#6528] Fails to run in SYCL mode** | 28 | A long‑standing blocker for users wanting to run llama.cpp on Intel integrated GPUs via SYCL; the process aborts early during initialization. | 👍0; users request clearer error messages and a minimal reproducer. |
| **[#27102] CUDA kernel stall during model execution (watchdog kill)** | 17 | Reports a hard hang on Blackwell‑class RTX Pro 6000 when running large Qwen models, forcing a watchdog termination. Critical for production CUDA deployments. | 👍3; contributors suggest checking grid‑size limits and stream synchronization. |
| **[#25992] Server returns other requests’ responses verbatim (‑np 4 ‑‑kv‑unified on HIP)** | 9 | Demonstrates a serious concurrency bug: under parallel load the server mixes up responses, breaking correctness of multi‑tenant serving. | 👍7; flagged as a regression bisected to commit c7d8722. |
| **[#24473] Feature: Compact Conversation Action** | 9 | Community‑driven request for a `/compact` command (or UI button) to truncate history when approaching the context limit, improving usability of long‑form chats. | 👍0; interest expressed in several forks. |
| **[#10732] Structured output: json_object works, json_schema does not** | 7 | Points out a gap in the server’s JSON‑mode support: while `response_format: json_object` is honoured, `json_schema` is ignored, limiting structured‑data pipelines. | 👍3; users ask for schema validation integration. |
| **[#26997] CPU mask/range/strict options ignored** | 7 | Users attempting to pin llama.cpp threads to specific cores see no effect, affecting performance tuning on heterogeneous servers. | 👍0; suggests missing flag propagation in thread‑pool init. |
| **[#14557] Add tool calling for deepseek‑r1‑0528** | 6 | Requests official tool‑calling support for the recently released DeepSeek‑R1 model, enabling agent‑style workflows. | 👍0; reflects growing demand for function‑call APIs. |
| **[#26677] Compile error: unknown type name '__fp16'** | 5 | Blocks compilation on newer Linux distros where the `__fp16` typedef is not available, affecting CPU‑only builds. | 👍0; fix involves guarding the typedef with appropriate feature checks. |
| **[#26038] Excessive compute buffer reservation in MTP draft context (ROCm HIP)** | 5 | Shows that the MTP draft allocation unnecessarily shrinks usable context size on AMD GPUs, limiting batch size for long prompts. | 👍3; suggests tuning the draft‑context buffer size. |

---

### 4. Key PR Progress  
*(selected for relevance to features, performance, and reliability)*  

| PR | Summary |
|----|---------|
| **[#27342] Add DFlash2 support (local convolution + candidate selector)** | Introduces the DFlash2 attention variant, adding a dynamic depthwise convolution and candidate selector to improve quality/speed trade‑off for long‑context models. |
| **[#27416] Fix --docker-repo being treated as router mode** | Corrects a logic error where specifying `--docker-repo` without a local model path incorrectly triggered router mode, preventing proper model loading. |
| **[#27414] CI: use shell script to check CMake package** | Replaces the Tcl‑based CMake version check with a portable shell script, fixing CI failures on runners lacking `tclsh`. |
| **[#27396] Prefill optimizations for draft model** | Implements zero‑copy embedding path, event‑based synchronization, and next‑n zero‑copy for draft models, boosting prefetch throughput on RTX 5090. |
| **[#26502] Tensor‑split meta backend fixes** | Ensures `buffer_usage` propagation and proper `init_tensor` calls for the meta backend used in Hexagon and OpenCL, resolving silent weight‑loading bugs. |
| **[#27413] Vulkan: FA MMQ should use fp32 for Q quantization calculations** | Changes quantization math to fp32 to avoid denorm overflows that caused NaNs/infs on AMD Polaris GPUs. |
| **[#27339] OpenCL: fix local size for norm** | Forces the local work‑group size for layer‑norm to be a power of two, preventing launch failures on devices with strict alignment requirements. |
| **[#27411] CUDA: prefer MMQ for MXFP4 on CDNA2** | Selects the MMQ kernel path for MXFP4 on AMD CDNA2 architectures, improving throughput for Mixture‑of‑Experts layers. |
| **[#27210] Testing/Server: add adaptive MTP draft depth (draft‑mtp‑adaptive)** | Introduces `--spec-type draft-mtp-adaptive` with a climb‑counter / drop‑pressure accumulator to dynamically adapt draft length during generation. |
| **[#27410] CUDA: prefer MMQ for IQ4_XS on CDNA2** | Mirrors the MXFP4 change for the IQ4_XS quantization scheme, ensuring the optimized MMQ path is used on CDNA2 GPUs. |

---

### 5. Feature Request Trends
- **Conversation management**: demand for on‑demand compaction (`/compact` or UI button) to keep prompts within context limits (#24473).  
- **Tool‑calling / agents**: requests for official tool‑calling support for newer models (DeepSeek‑R1) and better enforcement of `tool_choice: "required"` (#14557, #27217).  
- **Structured output**: desire for full JSON‑Schema validation in addition to the existing `json_object` mode (#10732).  
- **Multimodal tooling**: calls for a `read_image` / `read_media` tool call to enable vision‑language agents (#27391).  
- **Adaptive speculative decoding**: interest in dynamic MTP depth mechanisms that adjust draft length based on runtime heuristics (#27210 PR).  

Overall, the community is pushing for richer interaction patterns (tool use, multimodal input) and more ergonomic long‑conversation handling, while also seeking stricter, schema‑driven output guarantees.

---

### 6. Developer Pain Points
- **GPU backend instability**: SYCL (Intel Arc) shows no speed gain and frequent launch failures; CUDA experiences watchdog‑triggered stalls on Blackwell GPUs; HIP/ROCm suffer from cross‑talk between concurrent requests and excessive buffer reservations.  
- **Compilation hiccups**: missing `__fp16` typedef on newer Linux distros, and occasional header/loader issues for Level Zero and ROCm environments.  
- **Configuration propagation**: CPU affinity flags (`--cpu-mask`, `--cpu-range`, `--cpu-strict`) are ignored, making performance tuning tedious.  
- **Vulkan reliability**: SIGSEGV on model load for older AMD GPUs and issues with `dry_penalty_last_n` when using Vulkan images.  
- **CI/CD fragility**: reliance on `tclsh` and limited ccache hit rates causing broken builds on some architectures.  

Addressing these pain points—particularly hardening the SYCL, CUDA, and HIP backends, ensuring correct flag propagation, and stabilizing the CI environment—would remove the most frequently cited blockers for developers integrating llama.cpp into production pipelines.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*