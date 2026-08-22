# AI CLI Tools Community Digest 2026-08-23

> Generated: 2026-08-22 22:15 UTC | Tools covered: 12

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

**Today's Highlights (2026‑08‑23)**  

- **Claude Code** – Released **v2.1.240**, a patch focused on bug fixes and reliability improvements (hook execution, session‑management, and safety‑filter regressions).  
  https://github.com/anthropics/claude-code  

- **OpenAI Codex** – Pushed three new pre‑release Rust builds: **rust‑v0.150.0‑alpha.7**, **rust‑v0.149.0‑alpha.7.2**, and **rust‑v0.150.0‑alpha.6**, advancing toward the next stable release with dependency bumps and token‑stream fixes.  
  https://github.com/openai/codex  

- **Gemini CLI** – Nightly **v0.56.0‑nightly.20260822** hardened the macOS Seatbelt sandbox by isolating Docker/container runtime sockets and binaries, closing a potential sandbox‑escape vector via VirtioFS mounts.  
  https://github.com/google-gemini/gemini-cli  

- **Qwen Code** – Shipped **v0.22.0**, adding a Web Shell memory guard (bounds transcript history and trims oversized replays) and review‑loop diagnostics that pinpoint files causing instability.  
  https://github.com/QwenLM/qwen-code  

- **Ollama** – Released **v0.33.0‑rc2** (tagged as v0.33.0), introducing official **Claude Desktop integration** so users can toggle Ollama models from the menu bar and select them inside Claude.  
  https://github.com/ollama/ollama  

- **llama.cpp** – Merged a **common/json.h** abstraction (PIMPL around nlohmann::json) to reduce compile‑time duplication, added Vulkan **PAD_REFLECT_1D** operation for image‑processing, and introduced an adaptive MTP draft depth (`--spec-type draft-mtp-adaptive`) for speculative decoding.  
  https://github.com/ggerganov/llama.cpp  

- **DeepSeek TUI / CodeWhale** – Prepared release candidate **Codewhale v0.9.11** (PR #5542) and progressed on durable child‑tool approvals (issue #5543) and TUI crate decomposition (EPIC‑005, issue #5316).  
  https://github.com/Hmbown/CodeWhale

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills Community Highlights (as of 2026‑08‑23)**  

---

### 1. Top Skills Ranking  
*Based on the PR list that is presented in comment‑order (the repository shows the most‑discussed PRs first). All items are currently **open**.*

| Rank | PR | Skill / Change | Core Functionality | Discussion Highlights | Link |
|------|----|----------------|--------------------|-----------------------|------|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298)** | `fix(skill-creator): run_eval.py always reports 0% recall` | Improves the skill‑creator evaluation pipeline: installs eval artifact as a real skill, fixes Windows stream reading, trigger detection, and parallel workers. | >10 independent reproductions of zero‑recall; conversation focused on Windows compatibility and making the optimization loop usable. | https://github.com/anthropics/skills/pull/1298 |
| 2 | **[#514](https://github.com/anthropics/skills/pull/514)** | **document‑typography** skill | Detects and fixes orphan/widow lines, heading‑stranded paragraphs, and numbering mis‑alignment in AI‑generated documents. | Community noted that typographic glitches affect *every* document Claude produces; discussion centered on practical triggers and edge‑case handling. | https://github.com/anthropics/skills/pull/514 |
| 3 | **[#538](https://github.com/anthropics/skills/pull/538)** | `fix(pdf): correct case‑sensitive file references in SKILL.md` | Corrects mismatched case references (`REFERENCE.md` → `reference.md`, etc.) that break the PDF skill on case‑sensitive filesystems. | Simple but critical fix; several commenters verified the change on Linux/macOS and Windows. | https://github.com/anthropics/skills/pull/538 |
| 4 | **[#486](https://github.com/anthropics/skills/pull/486)** | **ODT** skill | Enables creation, filling, reading, and conversion of OpenDocument Format files (.odt, .ods) and parses ODT → HTML. | Highlighted demand for open‑office‑suite interoperability; discussion covered trigger keywords and template‑filling workflow. | https://github.com/anthropics/skills/pull/486 |
| 5 | **[#210](https://github.com/anthropics/skills/pull/210)** | **frontend‑design** skill (clarity & actionability) | Rewrites the frontend‑design skill to give Claude concrete, single‑turn actions for UI layout, styling, and component composition. | Reviewers stressed the need for token‑efficient, imperative language; many suggested concrete examples (Flexbox, Grid). | https://github.com/anthropics/skills/pull/210 |
| 6 | **[#83](https://github.com/anthropics/skills/pull/83)** | **skill‑quality‑analyzer** & **skill‑security‑analyzer** (meta‑skills) | Provides automated checks across five dimensions (structure, documentation, examples, security, etc.) for any submitted Skill. | Discussion focused on integrating these analyzers into the PR workflow to curb low‑quality submissions. | https://github.com/anthropics/skills/pull/83 |
| 7 | **[#541](https://github.com/anthropics/skills/pull/541)** | `fix(docx): prevent tracked change w:id collision with existing bookmarks` | Resolves OOXML ID‑space collisions when the DOCX skill adds tracked changes to documents that already contain bookmarks. | Several commenters reported corrupted .docx files before the fix; after the change, round‑trip edits succeeded. | https://github.com/anthropics/skills/pull/541 |
| 8 | **[#539](https://github.com/anthropics/skills/pull/539)** | `fix(skill-creator): warn on unquoted description with YAML special characters` | Adds pre‑parse validation in `quick_validate.py` to catch unquoted `:` in skill descriptions that would truncate YAML. | Highlighted as a common source of silent failures; discussion yielded a one‑liner warning that now appears in the skill‑creator UI. | https://github.com/anthropics/skills/pull/539 |

---

### 2. Community Demand Trends (from Issues)  
*The most‑commented Issues reveal what users want next.*

| Rank | Issue | Comment Count | Summary of Demand |
|------|-------|---------------|-------------------|
| 1 | **[#492](https://github.com/anthropics/skills/issues/492)** – Security: community skills under `anthropic/` namespace enable trust‑boundary abuse | 43 | Users demand a clear separation between official and community skills (namespacing, signing, or a marketplace vet) to prevent impersonation and over‑privileged installations. |
| 2 | **[#228](https://github.com/anthropics/skills/issues/228)** – Enable org‑wide skill sharing in Claude.ai | 16 | Strong interest in a shared skill library or direct sharing links so teams can distribute skills without manual file exchange. |
| 3 | **[#556](https://github.com/anthropics/skills/issues/556)** – `run_eval.py`: claude -p never triggers skills/commands (0 % trigger rate) | 12 | Reliability of the skill‑trigger detection is a top pain point; users want the evaluation loop to accurately reflect real‑world invocation. |
| 4 | **[#62](https://github.com/anthropics/skills/issues/62)** – All my skills have disappeared and now I get errors | 10 | Concerns about skill persistence and accidental deletion; request for better skill‑management UI and safeguards against inadvertent removal. |
| 5 | **[#1329](https://github.com/anthropics/skills/issues/1329)** – Proposing a second skill: compact‑memory (symbolic notation for compact agent state) | 9 | Interest in a skill that compresses long‑running agent notes into a symbolic, low‑token representation to extend context capacity. |

**Trend Insight:** The community is most vocal about **skill trust & governance** (namespacing, sharing controls), **reliability of trigger detection/evaluation**, and **practical workflow enhancements** (memory compression, org‑wide sharing, document fidelity).

---

### 3. High‑Potential Pending Skills  
*Open PRs that have shown recent activity and are likely to be merged soon (based on update dates and ongoing discussion).*

| PR | Skill / Change | Why It’s Promising | Recent Activity |
|----|----------------|--------------------|-----------------|
| **[#1595](https://github.com/anthropics/skills/pull/1595)** – docs: add UIZZE to partner skills | Adds a free anti‑UI‑slop skill (UIZZE) to the Partner Skills section, linking to a large public repository of UI screenshots. | Addresses a frequently requested UI‑quality guardrail; low‑effort documentation update with clear user value. | Updated 2026‑08‑17 (same day). |
| **[#1538](https://github.com/anthropics/skills/pull/1538)** – fix: bring two skills back under the Agent Skills spec | Corrects `name` mismatches in `template/` and another skill so they pass `skills-ref validate`. | Removes blockers that prevent those skills from being usable in the official marketplace; essential for spec compliance. | Updated 2026‑08‑12. |
| **[#1528](https://github.com/anthropics/skills/pull/1528)** – FIX (@CLAUDE RESOLVE) | Placeholder for a rapid‑fix PR (likely addressing a critical bug flagged by the Claude CLI). | The “@CLAUDE RESOLVE” comment signals that the CLI auto‑triggered this PR; such PRs are typically merged quickly after verification. | Updated 2026‑08‑11. |
| **[#1367](https://github.com/anthropics/skills/pull/1367)** – feat(skills): add self‑audit – mechanical verification + four‑dimension reasoning quality gate (v1.3.0) | Introduces a universal self‑audit skill that first checks file existence, then runs a four‑dimension reasoning audit (logic, completeness, safety, style). | Directly responds to community demand for built‑in quality gating; combines mechanical checks with LLM‑based reasoning. | Updated 2026‑07‑02. |
| **[#568](https://github.com/anthropics/skills/pull/568)** – feat: add ServiceNow platform skill | Large‑scope Skill covering ITSM, ITOM, ITAM, FSM, HRSD, SPM, Vulnerability Response, Security Incident Response, IntegrationHub, etc. | Enterprise‑grade Skill that would unlock ServiceNow automation for many users; already gathered considerable attention (updated through Aug 12). | Updated 2026‑08‑12. |
| **[#525](https://github.com/anthropics/skills/pull/525)** – Add pyxel skill for retro game development | Skill for the Pyxel retro‑game engine (write → run_and_capture → inspect → iterate). | Niche but enthusiastic retro‑gaming community; provides a concrete, fun use‑case that showcases skill extensibility. | Updated 2026‑07‑15. |

---

### 4. Skills Ecosystem Insight  
**The community’s most concentrated demand is for trustworthy, reliably triggerable skills—especially around security namespacing, organization‑wide sharing, and robust evaluation—so that skills can be safely shared and consistently invoked in real‑world workflows.**

---

**Claude Code Community Digest – 2026‑08‑23**

---

### 1. Today’s Highlights
- The project shipped **v2.1.240**, a patch release focused on bug fixes and reliability improvements.  
- Community discussion remains centered on hook execution gaps (especially for sub‑agents), over‑zealous safety filters, and session‑management regressions that affect status lines, UUID reuse, and MCP server reconnects.  
- No pull‑request activity was recorded in the last 24 h; all updates are issue‑driven.

### 2. Releases
- **v2.1.240** – *Bug fixes and reliability improvements*  
  The release notes are terse, indicating internal stabilization work (likely addressing some of the hook and session‑line bugs reported recently). No new features were announced.

### 3. Hot Issues (selected by comment count & impact)

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
|[#62437](https://github.com/anthropics/claude-code/issues/62437)|PreToolUse hook not invoked after static ask rule approval|Highlights a hook‑ordering flaw that breaks safety‑check workflows for approved commands.|7 comments, 0👍 – needs more reproduction info.|
|[#69260](https://github.com/anthropics/claude-code/issues/69260)|PreToolUse hooks skipped for subagents|Sub‑agent tool calls bypass hook‑based instrumentation, undermining observability and policy enforcement.|6 comments, 2👍 – clear impact on agent‑based workflows.|
|[#56990](https://github.com/anthropics/claude-code/issues/56990)|Model‑name validation blocks third‑party gateways|Client‑side validation prevents use of custom model names, breaking federated or proxy setups.|5 comments, 3👍 – strong frustration from gateway users.|
|[#86824](https://github.com/anthropics/claude-code/issues/86824)|Nested‑repo trust change disables statusLine|Trust‑model tweak silently turns off status‑line updates, removing a key UI feedback mechanism.|3 comments, 1👍 – reported after upgrade to 2.1.232.|
|[#86888](https://github.com/anthropics/claude-code/issues/86888)|Session‑list left‑arrow navigation halts statusline refresh|UI interaction corrupts a core feature, requiring a restart to restore live status updates.|3 comments, 0👍 – reproducible regression.|
|[#79508](https://github.com/anthropics/claude-code/issues/79508)|SessionEnd hook stdin pipe not closed on `/clear`|Resource leak can cause hanging processes or incomplete cleanup after session clears.|3 comments, 0👍 – marked as regression, needs‑repro.|
|[#79498](https://github.com/anthropics/claude-code/issues/79498)|MCP server env vars not expanded on respawn|Breaks dynamic configuration for MCP servers when they are reconnected mid‑session.|3 comments, 0👍 – impacts automated workflows.|
|[#86188](https://github.com/anthropics/claude-code/issues/86188)|Deleted session UUID reused for new session|Potential data‑mix‑up and confusing history when transcripts are manually removed.|2 comments, 0👍 – points to stale `lastSessionId` pointer.|
|[#86525](https://github.com/anthropics/claude-code/issues/86525)|Project‑slug write path drops repeated segment|Memory isolation fails for projects with repeated directory names, leading to split context.|2 comments, 0👍 – highlights path‑slug logic bug.|
|[#61646](https://github.com/anthropics/claude-code/issues/61646)|False‑positive cyber‑safeguard on legit systems‑engineering work|Safety filters over‑block benign low‑level engineering tasks, hindering productive sessions.|5 comments, 1👍 – filed as product‑quality issue, not a safety‑weakening request.|

### 4. Key PR Progress
- **No pull‑request updates** were recorded in the past 24 h. All recent changes appear to be issue‑driven fixes awaiting merge.

### 5. Feature Request Trends
From the closed issues, the most‑frequent requested directions are:
- **Safety‑filter flexibility** – ability to disable or lower safeguards for local code review, academic research, or domain‑specific terminology (e.g., #73409, #73432, #67622).  
- **Hook reliability & extensibility** – ensuring PreToolUse/PostToolUse fire consistently for sub‑agents and after static ask rules (#69260, #62437, #86405).  
- **Session & UI improvements** – persistent custom session names, reliable status‑line updates, and better handling of session‑list navigation (#65388, #86824, #86888).  
- **Third‑party gateway support** – relaxation of client‑side model‑name validation to allow arbitrary model identifiers (#56990).  
- **MCP & skill namespace robustness** – preventing silent drops when skill and MCP server names collide (#85827) and ensuring env‑variable expansion on reconnect (#79498).

### 6. Developer Pain Points
- **Hook execution gaps** – developers repeatedly report that hooks (PreToolUse/PostToolUse, SessionEnd) fail for sub‑agents, after certain UI actions, or during specific events like `/clear`. This undermines automation, security checks, and telemetry.  
- **Over‑aggressive safety filters** – false positives on legitimate technical content (binary analysis, BJJ tutorials, academic sorting‑algorithm research) disrupt workflow and force users to file work‑around issues.  
- **Session management fragility** – UUID reuse, missing session indexing, and project‑slug collisions cause lost context or duplicated memory, especially when users manually edit transcript files.  
- **Trust/status‑line regressions** – recent trust‑model changes silently disable status‑line features or break their refresh intervals, removing a key feedback mechanism without clear opt‑out.  
- **Third‑party integration friction** – client‑side model‑name validation and MCP env‑var expansion blockers make it hard to run Claude Code behind custom gateways or with dynamically configured servers.  

*Overall, the community is asking for more predictable hook behavior, safer‑but‑configurable safety controls, and sturdier session/UI foundations to support complex agent‑based and gateway‑heavy workflows.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest – 2026‑08‑23**  

---  

### 1. Today's Highlights  
- Three new pre‑release builds of the Rust‑based Codex core (v0.150.0‑alpha.7, v0.149.0‑alpha.7.2, v0.150.0‑alpha.6) were pushed, indicating active work toward the next stable release.  
- The most‑discussed open issue continues to be a macOS‑specific runaway `syspolicyd`/`trustd` CPU/memory spike (#25719, 85 comments, 394 👍), reflecting widespread frustration with background daemon load.  
- Five internal tooling PRs were merged today, focusing on Guardian classifier metadata, MCP connection reporting, and turn‑suspension mechanics – all aimed at improving reliability and observability of the Codex runtime.  

---  

### 2. Releases  

| Version | Type | Highlights |
|---------|------|------------|
| **rust-v0.150.0-alpha.7** | Pre‑release | Latest alpha of the Codex Rust core; includes upstream dependency bumps and bug‑fixes from the 0.150 series. |
| **rust-v0.149.0-alpha.7.2** | Pre‑release | Patch to the 0.149 branch addressing a regression in token‑stream handling observed in the previous alpha. |
| **rust-v0.150.0-alpha.6** | Pre‑release | Early 0.150 alpha with experimental GPT‑5.6 Sol support and preliminary prompt‑caching hooks. |

*Links:*  
- [v0.150.0‑alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.7)  
- [v0.149.0‑alpha.7.2](https://github.com/openai/codex/releases/tag/rust-v0.149.0-alpha.7.2)  
- [v0.150.0‑alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.6)  

---  

### 3. Hot Issues (10 noteworthy picks)  

| # | Title & Link | Why it matters | Community reaction |
|---|--------------|----------------|--------------------|
| **#25719** | [macOS repeatedly triggers `syspolicyd` / `trustd` CPU‑memory runaway](https://github.com/openai/codex/issues/25719) | Persistent daemon spikes degrade system performance and battery life on Apple Silicon. | 85 comments, **394 👍** – top‑voted bug, many users reporting similar spikes after recent updates. |
| **#39162** | [Opening an existing conversation invalidates ChatGPT auth and redirects to sign‑in](https://github.com/openai/codex/issues/39162) | Auth breakage forces users to re‑login repeatedly, disrupting workflow. | 37 comments, **26 👍** – widespread impact on plus/pro subscribers on macOS arm64. |
| **#38455** | [ChatGPT desktop repeatedly spawns Computer Use workers → V8 OOM crash](https://github.com/openai/codex/issues/38455) | Unbounded worker creation leads to out‑of‑memory crashes, losing unsaved work. | 36 comments, **15 👍** – noted on idle sessions; users request worker‑limit safeguards. |
| **#20730** | [Custom pets fail to load in WSL due to path normalization](https://github.com/openai/codex/issues/20730) | Blocks a popular personalization feature for Windows‑WSL hybrid setups. | 23 comments, **28 👍** – long‑standing issue; community suggests using POSIX‑style paths. |
| **#39189** | [Windows 26.814: Opening an existing thread signs out a personal Pro account after workspace‑only settings 401](https://github.com/openai/codex/issues/39189) | Auth loss on Windows after certain UI actions, affecting Pro users. | 17 comments, **4 👍** – similar to macOS auth bug but Windows‑specific. |
| **#29197** | [Codex WebSearch receives Cloudflare managed challenge (403) on `/backend-api/codex/alpha/search`](https://github.com/openai/codex/issues/29197) | Search functionality blocked by Cloudflare, hampering web‑lookup tool. | 15 comments, **0 👍** – users report intermittent 403s; suggests need for proper UA/header handling. |
| **#34227** | [Windows pet overlay hit region desynchronizes from visible mascot over time](https://github.com/openai/codex/issues/34227) | Visual pet drifts, breaking the immersive overlay experience. | 14 comments, **1 👍** – cosmetic but annoying for long sessions. |
| **#37674** | [Native Bedrock Codex GPT‑5.6 Sol lacks explicit cache controls → high cache‑write spend](https://github.com/openai/codex/issues/37674) | Missing `prompt_cache_breakpoint` leads to unnecessary token cost on Bedrock. | 13 comments, **12 👍** – cost‑sensitive developers request cache‑control flags. |
| **#27565** | [Enhancement: Claude Code‑like remote control](/openai/codex/issues/27565) | Desire for a simple `/remote-control` command to sync CLI with mobile app without SSH. | 12 comments, **15 👍** – high interest in seamless cross‑device workflow. |
| **#30816** | [Weekly usage reset date changed unexpectedly after subscribing to ChatGPT Plus](https://github.com/openai/codex/issues/30816) | Billing‑cycle confusion leads to unexpected quota exhaustion. | 11 comments, **4 👍** – users want transparent reset‑date handling. |

---  

### 4. Key PR Progress (5 PRs merged today)  

| PR | Title & Link | What changed / Why it matters |
|----|--------------|--------------------------------|
| **#40150** | [Use thread source metadata for Guardian classifiers](https://github.com/openai/codex/pull/40150) | Adds `thread_source: guardian_classifier` to turn metadata, removes legacy flags, and updates tests – improves classifier tracing and reduces coupling. |
| **#40068** | [Report runtime MCP connection status](https://github.com/openai/codex/pull/40068) | Introduces a nullable `runtimeStatus` field in `mcpServerStatus/list` so clients can distinguish cached inventory from live connections. |
| **#40038** | [Add unfinished root turn suspension](https://github.com/openai/codex/pull/40038) | Provides `CodexThread::suspend_turn_and_shutdown` to stop an active root turn without marking it complete/aborted, enabling safe turn‑ID recovery. |
| **#40031** | [Preserve strict MCP auto‑review outcomes](https://github.com/openai/codex/pull/40031) | Ensures denial, timeout, and abort responses from strict MCP auto‑review are propagated verbatim, preserving reviewer rationale. |
| **#40028** | [Log Guardian V2 classification results](https://github.com/openai/codex/pull/40028) | Emits a structured log event per classification (thread, turn, tool, risk score, threshold, acceptance flag) – enhances auditability and debugging of safety checks. |

---  

### 5. Feature Request Trends  

- **Remote / cross‑device control** – Repeated requests for a Claude‑Code‑style `/remote-control` or mobile‑CLI sync (see #27565).  
- **Explicit prompt‑caching controls** – Developers want to expose `prompt_cache_breakpoint` and related Bedrock/GPT‑5.6 caching flags to reduce token spend (#37674, #35300).  
- **Session portability** – Requests for seamless session transfer between Codex CLI and Desktop, and better history handling (#40055, #32707).  
- **Improved authentication stability** – Fixes for recurring sign‑in loops on macOS and Windows (#39162, #39189, #39883, #40073).  
- **Resource governance** – Limits on Computer Use worker spawns, OOM protection, and better thread‑worker cleanup (#38455, #25719).  

---  

### 6. Developer Pain Points  

1. **Authentication instability** – Frequent sign‑out/re‑login prompts on both macOS and Windows after opening conversations or switching workspaces.  
2. **Performance & resource leaks** – Runaway daemon processes (`syspolicyd`/`trustd`), unbounded Computer Use workers, and V8 OOM crashes causing data loss.  
3. **Platform‑specific path issues** – WSL path normalization breaking custom pets; Windows overlay hit‑region desync; Windows sandbox helper failures.  
4. **Cost transparency** – Missing cache‑control options leading to unexpected token consumption on Bedrock and other hosted models.  
5. **Feature discoverability** – Users struggle to find or enable newer capabilities (e.g., GPT‑5.6 Sol, remote control) due to scattered documentation and feature‑flag gating.  

---  

*All links point to the official `openai/codex` repository on GitHub.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-23

## 1. Today's Highlights
The nightly **v0.56.0-nightly.20260822** release hardens the macOS Seatbelt sandbox by isolating Docker/container runtime sockets and binaries, closing a potential sandbox-escape vector via VirtioFS mounts. Meanwhile, the issue backlog shows sustained focus on **agent reliability**—subagent turn-limit reporting, generalist-agent hangs, and browser-agent Wayland failures—while security work continues on bash-variable expansion bypasses and SSRF mitigations in `web-fetch`.

## 2. Releases
### v0.56.0-nightly.20260822.g5411f113c
- **fix(sandbox)**: Isolate Docker and container runtime sockets/binaries in macOS Seatbelt to prevent sandbox escape via container hypervisor filesystem mounts (Docker Desktop VirtioFS).  
  [PR #28935](https://github.com/google-gemini/gemini-cli/pull/28935) — first contribution from **@josebalius**.

## 3. Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent recovery after MAX_TURNS reports GOAL success** | Subagents silently mask turn-limit exhaustion as success, breaking trust in autonomous workflows. | 13 comments, 2 👍, P1, needs retest |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs indefinitely** | Core agent delegation path stalls on simple ops (folder creation), forcing users to disable subagents. | 8 comments, 8 👍, P1 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell execution stuck at “Waiting input” after completion** | False “awaiting input” state blocks follow-up turns; affects basic CLI commands. | 4 comments, 3 👍, P1 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | **Leverage model’s bash affinity via zero-dependency OS sandboxing** | Strategic epic to align tooling with Gemini 3’s native POSIX-tool chaining strengths. | 8 comments, 1 👍, P2, large effort |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **Assess AST-aware file reads, search, mapping** | Exploring structural code navigation to cut token waste and misaligned reads. | 7 comments, 1 👍, P2 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | **Auto Memory retries low-signal sessions indefinitely** | Background extractor re-queues unread transcripts, causing processing loops. | 5 comments, P2 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | **Deterministic redaction & reduced Auto Memory logging** | Secrets hit model context before redaction; logging exposes skill data. | 4 comments, P2, security |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser subagent fails on Wayland** | Linux/Wayland users cannot use browser agent; termination reason misleading. | 4 comments, 1 👍, P1 |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | **Browser Agent ignores settings.json overrides (maxTurns)** | Configuration drift between registry and runtime; users cannot tune browser agent. | 3 comments, P2 |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | **400 error with >128 tools available** | Tool-count explosion breaks API calls; needs smarter scoping. | 3 comments, P2 |

## 4. Key PR Progress (Top 10 by Significance)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#28935](https://github.com/google-gemini/gemini-cli/pull/28935) | **CLOSED** | **Sandbox hardening**: Denies UNIX sockets, CLI binaries, Mach/XPC lookups, POSIX shm in macOS Seatbelt. Shipped in tonight’s nightly. |
| [#28902](https://github.com/google-gemini/gemini-cli/pull/28902) | **OPEN** | **Security (P1)**: Blocks `$VAR`/`${VAR}` expansion bypass (GHSA-wpqr-6v78-jr5g); hardens automated dedup workflow. |
| [#28725](https://github.com/google-gemini/gemini-cli/pull/28725) | **CLOSED** | **Critical SSRF fix (CVSS 8.6)**: `web-fetch` now validates resolved IPs against private/loopback ranges before fetch. |
| [#28967](https://github.com/google-gemini/gemini-cli/pull/28967) | **OPEN** | **Terminal UX**: Stops `clearTerminal` from wiping scrollback in standard buffer mode on Linux/Unix. |
| [#28966](https://github.com/google-gemini/gemini-cli/pull/28966) + [#28963](https://github.com/google-gemini/gemini-cli/pull/28963) | **OPEN** | **Docs fix**: `excludeTools` examples corrected—entries match exact tool names, not command patterns. |
| [#28961](https://github.com/google-gemini/gemini-cli/pull/28961) | **OPEN** | **Policy config**: Realigns `write.toml` safety checkers to top-level `[[safety_checker]]` tables for proper registration. |
| [#28863](https://github.com/google-gemini/gemini-cli/pull/28863) | **OPEN** | **Extensions security**: Consent prompts for env changes; sanitizes runtime-altering vars in MCP server spawns. |
| [#28940](https://github.com/google-gemini/gemini-cli/pull/28940) | **OPEN** | **A2A server**: Clears stale cancellation error on new message turns, fixing “Execution aborted” crash loop. |
| [#28956](https://github.com/google-gemini/gemini-cli/pull/28956) | **CLOSED** | **Symlinked skills**: Resolves `.gemini`/`.agents` junctions via `realpath` for Windows/macOS compatibility. |
| [#28892](https://github.com/google-gemini/gemini-cli/pull/28892) | **CLOSED** | **Chat history**: Preserves empty-text model turns carrying tool requests/responses or media. |

## 5. Feature Request Trends
1. **Agent Observability & Control** — Subagent trajectory sharing (`/chat share` [#22598](https://github.com/google-gemini/gemini-cli/issues/22598)), bug-report context inclusion [#21763](https://github.com/google-gemini/gemini-cli/issues/21763), and settings propagation [#22267](https://github.com/google-gemini/gemini-cli/issues/22267).
2. **Native Bash/OS Integration** — Zero-dependency sandboxing [#19873](https://github.com/google-gemini/gemini-cli/issues/19873), AST-aware tooling [#22745](https://github.com/google-gemini/gemini-cli/issues/22745), tactical extraction [#19561](https://github.com/google-gemini/gemini-cli/issues/19561).
3. **Persistent Task/State Management** — File-based CRUD task tracking replacing in-context `WriteToDo` [#18836](https://github.com/google-gemini/gemini-cli/issues/18836), [#21000](https://github.com/google-gemini/gemini-cli/issues/21000).
4. **Memory System Hardening** — Deterministic redaction, inbox quarantine, retry bounds [#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26525](https://github.com/google-gemini/gemini-cli/issues/26525).
5. **Browser Agent Resilience** — Session takeover, lock recovery [#22232](https://github.com/google-gemini/gemini-cli/issues/22232), Wayland support [#21983](https://github.com/google-gemini/gemini-cli/issues/21983).

## 6. Developer Pain Points
- **Silent Agent Failures**: Subagents report success on turn-limit exhaustion [#22323](https://github.com/google-gemini/gemini-cli/issues/22323); generalist agent hangs without diagnostics [#21409](https://github.com/google-gemini/gemini-cli/issues/21409).
- **Shell/Tool Execution Flakiness**: “Waiting input” ghost state [#25166](https://github.com/google-gemini/gemini-cli/issues/25166), interactive prompt stalls (Vite) [#22465](https://github.com/google-gemini/gemini-cli/issues/22465), tmp-script litter [#23571](https://github.com/google-gemini/gemini-cli/issues/23571).
- **Configuration Drift**: `settings.json` ignored by browser agent [#22267](https://github.com/google-gemini/gemini-cli/issues/22267); symlinked agents not recognized [#20079](https://github.com/google-gemini/gemini-cli/issues/20079).
- **Token/Context Bloat**: Large file reads firehose context (~36k baseline) [#19561](https://github.com/google-gemini/gemini-cli/issues/19561); >128 tools triggers 400 errors [#24246](https://github.com/google-gemini/gemini-cli/issues/24246).
- **Security UX Gaps**: `excludeTools` docs misled users into ineffective patterns [#28966](https://github.com/google-gemini/gemini-cli/pull/28966); Auto Memory logs secrets pre-redaction [#26525](https://github.com/google-gemini/gemini-cli/issues/26525).

---

*Digest generated from github.com/google-gemini/gemini-cli activity (2026-08-22 00:00–23:59 UTC).*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest – 2026‑08‑23**  

---

### 1. Today's Highlights  
The community is buzzing around expanding model flexibility and fixing recent regressions in memory, MCP, and session handling. Multiple open issues request the ability to switch between BYOK/local and GitHub‑hosted models within a single session, while a handful of newly reported bugs (e.g., `store_memory` missing instance ID, MCP `server/discover` failures) are drawing immediate attention from maintainers.

### 2. Releases  
*No new releases were published in the last 24 hours.*

### 3. Hot Issues (10 noteworthy)  

| # | Issue | Why it matters / Community reaction |
|---|-------|--------------------------------------|
| [#3282](https://github.com/github/copilot-cli/issues/3282) | **Add multiple BYOK model capability** | High‑impact feature request (26 👍, 9 comments). Users want to avoid restarting the CLI to swap BYOK models, a pain point for teams experimenting with multiple local fine‑tunes. |
| [#3709](https://github.com/github/copilot-cli/issues/3709) | **Allow `/model` to switch between multiple models, including BYOK/local providers** | Directly related to #3282; 27 👍 shows strong demand for a unified model picker that surfaces local providers. |
| [#4535](https://github.com/github/copilot-cli/issues/4535) | **`store_memory` fails in v1.0.81 prereleases: “Instance id is required”** | Blocks the new memory‑store tool in the latest prerelease; 4 comments indicate active debugging and a quick fix is expected. |
| [#4370](https://github.com/github/copilot-cli/issues/4370) | **MCP initialization fails when `server/discover` returns `-32602`** | Affects users of FastMCP and other MCP servers; 2 👍 and ongoing discussion highlight integration friction. |
| [#4514](https://github.com/github/copilot-cli/issues/4514) | **Unable to restore remote session locally** | Prevents seamless workflow across machines; 1 👍 but a clear use‑case for remote‑first developers. |
| [#4111](https://github.com/github/copilot-cli/issues/4111) | **Windows: long‑running sessions left open across an in‑place auto‑update keep executing from renamed `copilot.exe.old`** | Causes CPU spikes and orphaned processes; though only 0 👍, it’s a stability concern for Windows admins. |
| [#4566](https://github.com/github/copilot-cli/issues/4566) | **Agent repeatedly acknowledges work without executing tool actions** | New triage item (created today) – indicates a possible regression in the agent loop that needs investigation. |
| [#4533](https://github.com/github/copilot-cli/issues/4533) | **Terminal UI stops consuming events when a turn spawns parallel subagents** | UI freeze under parallel subagent execution; 1 👍 but a blocker for complex agent workflows. |
| [#4567](https://github.com/github/copilot-cli/issues/4567) | **Explicitly trust an insecure (http://) OTLP exporter endpoint** | Feature request to align telemetry behavior with VS Code; 0 👍 now but reflects growing observability needs. |
| [#4565](https://github.com/github/copilot-cli/issues/4565) | **Action Requested: App Configuration Problems Found in repo [copilot-runtime-bazel-cache]** | Automated scan surfacing config issues; while not a direct CLI bug, it signals upstream tooling health that could affect builds. |

### 4. Key PR Progress  
*No pull requests were updated in the last 24 hours.*

### 5. Feature Request Trends  
- **Multi‑model switching**: The ability to list and select BYOK/local models alongside GitHub‑hosted ones via the `/model` command or a runtime switcher is the most‑voted theme (issues #3282, #3709).  
- **Observability & telemetry**: Requests to expose/insecure OTLP endpoints (#4567) and to improve memory/store APIs (#4535) show a desire for better debugging and integration with external tracing systems.  
- **Session portability**: Enhancements for remote session restore (#4514) and robust handling of auto‑update scenarios (#4111) indicate users expect the CLI to behave like a long‑lived development tool across environments.  
- **MCP compatibility**: Aligning CLI MCP client expectations with servers that omit optional methods (#4370) reflects a broader trend toward pluggable tooling ecosystems.

### 6. Developer Pain Points  
- **Model lock‑in**: Having to terminate and restart the session to change a BYOK model disrupts workflow and discourages experimentation.  
- **Memory tool regressions**: Recent prereleases broke `store_memory` due to missing instance IDs, forcing users to downgrade or avoid new features.  
- **Unreliable session recovery**: Failures to resume remote sessions locally or after updates lead to lost context and duplicated effort.  
- **Agent/UI stalls**: Parallel subagent launches sometimes freeze the terminal UI, making complex agent pipelines unusable until a restart.  
- **Windows auto‑update orphan processes**: Long‑running CLI instances persist as stale `.old` binaries, consuming CPU and complicating process management.  

---  

*Stay tuned for upcoming fixes and feature iterations as the maintainers address the high‑priority items above.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest – 2026‑08‑23**  
*Source: github.com/MoonshotAI/kimi-cli*  

---

### 1. Today's Highlights
- Documentation improvements landed: PR #2614 added a **security & persistent‑data guide** for plugin developers, clarifying where user data is stored and how to harden plugin installations.  
- A subtle but important bug was fixed in PR #2594: `StrReplaceFile` now preserves non‑UTF‑8 bytes, preventing corruption of binary files during edits.  
- No new releases were tagged in the last 24 h, but the two open memory‑system issues continue to attract discussion, signalling strong community interest in long‑term context retention.

### 2. Releases
*None* – no new versions were published in the past 24 hours.

### 3. Hot Issues  
*(Only three issues were updated in the window; all are highlighted below.)*

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) | **Feature Request: Memory System – Persistent context across sessions** | Proposes a built‑in memory layer (auto‑generated AI notes + user‑defined instructions) to let Kimi retain project‑specific patterns between invocations – a key need for multi‑day workflows. | 40 comments, 0 👍; active discussion on design trade‑offs (storage location, privacy, sync). |
| [#1478](https://github.com/MoonshotAI/kimi-cli/issues/1478) | **[Chinese] Optimize memory layer / missing docs** | Mirrors #1283 but stresses the lack of documentation and the pain of working on large codebases without a usable memory system. | 3 comments, 0 👍; user points to a provisional `~/.openclaw/workspace/` layout as a possible reference. |
| [#760](https://github.com/MoonshotAI/kimi-cli/issues/760) | **SSL certificate verification fails behind corporate proxy (Zscaler)** | Blocks login for users behind strict TLS‑intercepting proxies; a common enterprise adoption barrier. | 3 comments, 0 👍; workaround suggestions (custom CA bundle, `NO_PROXY`) have been shared but no official fix yet. |

### 4. Key PR Progress  
*(Only two PRs were updated in the window; both are noteworthy.)*

| # | PR | Summary |
|---|----|---------|
| [#2614](https://github.com/MoonshotAI/kimi-cli/pull/2614) | **docs(plugins): document security and persistent data** | Adds a dedicated section to the plugin contract guide covering: where plugins write data (`~/.kimi/plugins/`), recommended file permissions, and how to avoid leaking secrets. No code change, purely documentation. |
| [#2594](https://github.com/MoonshotAI/kimi-cli/pull/2594) | **fix(tools): preserve non‑UTF-8 bytes in StrReplaceFile edits** | Changes `StrReplaceFile` to operate on raw byte buffers, applying the UTF‑8 `old`/`new` substrings without re‑decoding the whole file. Prevents binary corruption (e.g., images, compiled objects) when editing text files that contain non‑UTF‑8 sequences. |

### 5. Feature Request Trends
From the open issues in the last day, the dominant theme is **memory / context persistence**:
- **Persistent, cross‑session memory** (auto‑generated + user‑curated) – requested in #1283 and echoed in #1478.  
- **Better documentation & discoverability** of existing memory‑related files (e.g., `MEMORY.md`, `memory/` directory) – highlighted in #1478.  
- No other feature areas (e.g., new language support, UI enhancements) appeared in the recent update set.

### 6. Developer Pain Points
- **Enterprise proxy/TLS interception** – SSL verification failures (issue #760) remain a recurring blocker for users behind Zscaler or similar proxies.  
- **Lack of long‑term context** – Developers repeatedly ask for a reliable memory system to avoid re‑explaining project patterns each session (issues #1283, #1478).  
- **Documentation gaps** – Memory‑layer usage is not clearly explained, leading to confusion and the perception that the feature is missing (issue #1478).  
- **Binary safety in file edits** – Prior to PR #2594, the `StrReplaceFile` tool could corrupt non‑UTF‑8 data, a pain point for those working with mixed‑text/binary repositories.

---

*Prepared for the Kimi Code CLI developer community. All links point directly to the relevant GitHub items.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode Community Digest – 2026‑08‑23**  

---

### 1. Today's Highlights  
- No new releases were published in the last 24 h, but activity remains high in the issue tracker with a security‑sandbox request (#2242) topping the comment list (83 comments, 71 👍).  
- Several usability and reliability bugs surfaced today, including desktop‑app startup failures (#40516) and silent loop exits on interrupted tool calls (#44254), indicating a focus on stabilizing the core agent loop.  

---

### 2. Releases  
*None reported in the last 24 hours.*

---

### 3. Hot Issues (Top 10 by comment count)

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| [#2242](https://github.com/anomalyco/opencode/issues/2242) | **Sandbox the agent** – request to restrict terminal/file access to the current working directory (similar to seatbelt on macOS). | Directly impacts security posture of agent‑generated code; users want built‑in isolation without external tooling. | 83 comments, 71 👍 – strong interest in a native sandbox solution. |
| [#7101](https://github.com/anomalyco/opencode/issues/7101) | **Custom system prompts** – allow prompts to be defined globally, per‑project, or in custom directories. | Enables teams to encode domain‑specific instructions and reduce prompt‑engineering overhead. | 35 comments, 127 👍 – high endorsement despite fewer comments. |
| [#5121](https://github.com/anomalyco/opencode/issues/5121) | **Winget installation option** – make OpenCode discoverable via Windows Package Manager. | Improves Windows onboarding and version‑management parity with other dev tools. | 18 comments, 28 👍 – steady demand for easier Windows deployment. |
| [#32149](https://github.com/anomalyco/opencode/issues/32149) | **Opencode stops processing requests** – agent hangs in “thinking” state with no response. | Blocks workflow; indicates possible dead‑lock or unhandled exception in the agent loop. | 17 comments, 8 👍 – recurring pain point for reliability. |
| [#30662](https://github.com/anomalyco/opencode/issues/30662) | **Auto session title generation fails for opencode provider** – missing provider config leads to stale “New session …” titles. | Affects UI clarity and session management when using the built‑in opencode model. | 14 comments, 0 👍 – niche but impacts daily usability. |
| [#37564](https://github.com/anomalyco/opencode/issues/37564) | **“Auto mode” LLM model classifier auto‑approval for permissions** – let trusted models bypass per‑turn permission prompts. | Streamlines autonomous agent runs while preserving safety for untrusted models. | 7 comments, 22 👍 – growing interest in reducing friction for trusted workflows. |
| [#25984](https://github.com/anomalyco/opencode/issues/25984) | **setCacheKey sends wrong field for Bedrock proxies** – causes caching to be ignored. | Leads to unnecessary token usage and higher costs when using OpenAI‑compatible Bedrock endpoints. | 6 comments, 0 👍 – a subtle but costly bug for enterprises using Bifrost/LiteLLM. |
| [#40516](https://github.com/anomalyco/opencode/issues/40516) | **Desktop app: provider/model/MCP fail to load on startup** – regression from v1.18.5‑v1.18.13. | Renders the desktop client unusable for many users; forces downgrade or workaround. | 6 comments, 1 👍 – urgent regression affecting adoption. |
| [#36960](https://github.com/anomalyco/opencode/issues/36960) | **Fork button on assistant response texts** – add a UI action to duplicate a conversation branch. | Supports exploratory coding and A/B testing of agent suggestions without losing context. | 5 comments, 1 👍 – lightweight UX enhancement with clear workflow benefit. |
| [#37891](https://github.com/anomalyco/opencode/issues/37891) | **Make file paths in chat clickable** – open paths in editor/reveal in Finder. | Improves navigation between AI‑generated suggestions and source code. | 5 comments, 2 👍 – repeatedly requested for smoother editing loops. |

---

### 4. Key PR Progress (Selected 10)

| # | PR | Description |
|---|----|-------------|
| [#44259](https://github.com/anomalyco/opencode/pull/44259) | **fix(opencode): skip nested repositories in snapshots** – prevents accidental inclusion of sub‑Git repos when creating workspace snapshots, while still capturing ordinary untracked files. |
| [#44237](https://github.com/anomalyco/opencode/pull/44237) | **refactor(ai): share hosted tool parsing** – centralises parsing of provider‑hosted Responses items, reducing duplication and improving maintainability. |
| [#44235](https://github.com/anomalyco/opencode/pull/44235) | **refactor(ai): accept nullable response phases** – makes the Open Responses channel tolerant of `phase: null`, aligning with stricter provider contracts. |
| [#44253](https://github.com/anomalyco/opencode/pull/44253) | **refactor(ai): simplify Responses channel** – removes the optional continuation transport wrapper, letting OpenAI/xAI configure the transport directly. |
| [#43460](https://github.com/anomalyco/opencode/pull/43460) | **fix(core): decode plugin tool input with the schema's own instance** – resolves version‑mismatch errors when a plugin bundles a different `effect` version than the server. |
| [#43282](https://github.com/anomalyco/opencode/pull/43282) | **fix(core): expose valid subagent IDs in the subagent tool** – lists allowed subagent types in the tool schema, improving discoverability and validation. |
| [#38393](https://github.com/anomalyco/opencode/pull/38393) | **fix(a11y): expose streaming assistant content to screen readers** – ensures that incrementally streamed assistant text is announced to assistive technologies. |
| [#38388](https://github.com/anomalyco/opencode/pull/38388) | **test(cli): stabilize lifecycle tests under load** – refactors service‑lease handling and test setup to make CLI lifecycle tests deterministic under concurrent load. |
| [#38387](https://github.com/anomalyco/opencode/pull/38387) | **fix(session): end the turn loop by reply parent, not message ID order** – corrects a turn‑loop bug caused by treating client‑supplied `messageID` as a timestamp. |
| [#38385](https://github.com/anomalyco/opencode/pull/38385) | **fix(opencode): refresh projects after git init** – updates the project context when a Git repository is initialized after the workspace has already been opened, re‑enabling the workspace toggle without a restart. |

---

### 5. Feature Request Trends  
- **Security & Isolation** – Requests for built‑in sandboxing/restricting agent file access (e.g., #2242) and safer permission models for auto‑mode (#37564).  
- **Configuration Flexibility** – Desire for hierarchical system prompts (#7101), per‑project/custom prompt directories, and CLI‑driven plugin toggling (#7687).  
- **Packaging & Installation** – Calls for native Windows package managers (Winget #5121) and easier cross‑platform distribution.  
- **UX / Workflow Enhancements** – Fork button on messages (#36960), clickable file paths (#37891), improved session title generation (#30662), and VS Code‑style tab cycling (#44258).  
- **Session & Context Management** – Better handling of long‑running sessions, cost‑estimate accuracy for tiered pricing (#42910), and recovery from stuck sessions (#43277).  

---

### 6. Developer Pain Points  
- **Reliability / Hangs** – Agent loops that stop responding (#32149), sessions that become permanently stuck after reboots (#43277), and silent exits on interrupted tool calls (#44254).  
- **Desktop App Instability** – Frequent failure to load provider/MCP data on startup (#40516) forcing users to downgrade.  
- **Observability & Debugging** – Difficulty reviewing character‑level diffs (#36824), missing or inaccurate cost estimates (#42910), and opaque error handling when provider streams drop.  
- **Integration & Compatibility** – Mis‑aligned cache‑control fields for Bedrock proxies (#25984), OAuth failures for EU Enterprise GPT models (#43615), and plugin version mismatches causing tool‑input decode errors (#43460).  
- **Accessibility** – Streamed content not reaching screen readers (fixed in #38393) highlights a broader need for a11y‑first UI work.  

---  

*All links point to the respective GitHub items. The digest reflects the most active discussions and code changes in the OpenCode repository over the past 24 hours.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

**Pi Community Digest – 2026‑08‑23**  
*Source: github.com/badlogic/pi-mono*  

---

### 1. Today's Highlights  
The community’s focus today is on **Windows usability** (issue #7547 drew 39 comments) and a **critical auto‑compaction bug** that only triggers after the provider overflows (#6879, 20 👍). Simultaneously, contributors are polishing the TUI: fixing backspace/Kitty quirks, scroll‑jump glitches, and adding verification tooling. Recent work includes bundling the Node runtime for faster startup (#8474), adding **MindsHub** as a built‑in provider (#8488), and tightening Windows ConPTY handling (#8485). No new releases were published in the last 24 h.

---

### 2. Releases  
*None* – no new versions were tagged in the past 24 hours.

---

### 3. Hot Issues  

| # | Issue (link) | Why it matters | Community reaction |
|---|--------------|----------------|--------------------|
| #7547 | [How do you use Pi on Windows?] (https://github.com/earendil-works/pi/issues/7547) | Central hub for Windows‑specific questions; reveals fragmentation in deployment methods and docs. | 39 comments, ongoing discussion about best practices and pain points. |
| #6879 | [Auto‑compaction never triggers after context grows past 100% until provider overflow] (https://github.com/earendil-works/pi/issues/6879) | Users lose control over token usage; compaction only fires when the API rejects the request, causing wasted compute and possible failures. | 20 comments, 18 👍 – strong demand for proactive compaction checks. |
| #7130 | [Backspace deletes 2 chars in Kitty (Kitty protocol release events not filtered)] (https://github.com/earendil-works/pi/issues/7130) | Breaks basic editing in a popular terminal emulator, hurting productivity for Kitty users. | 11 comments, 1 👍 – reproducible and blocking for affected workflows. |
| #8167 | [Cannot pick a model with built‑in llama.cpp support] (https://github.com/earendil-works/pi/issues/8167) | Prevents users from selecting locally‑served Llama models via the UI, forcing manual `/llama` commands. | 9 comments, closed – highlights gaps in model‑discovery for custom backends. |
| #4861 | [Add generic TUI viewport primitive for extensions] (https://github.com/earendil-works/pi/issues/4861) | Enables extensions to center output or add side buffers on wide screens – a frequent UI‑customization ask. | 6 comments, closed – indicates interest in richer layout controls. |
| #8468 | [GitHub Copilot fails with timeout] (https://github.com/earendil-works/pi/issues/8468) | Blocks a widely‑used AI pair‑programming tool, forcing users to revert to manual login flows. | 5 comments, closed – reflects urgency to restore Copilot reliability. |
| #8376 | [Make interactive model selection persistence configurable by scope] (https://github.com/earendil-works/pi/issues/8376) | Users want model choices to stick per‑session, per‑directory, or globally – currently hard‑coded. | 5 comments, closed – shows demand for finer‑grained config. |
| #7885 | [npm search not indexing newly published pi‑packages] (https://github.com/earendil-works/pi/issues/7885) | New extensions remain invisible in the pi.dev gallery, slowing ecosystem discovery. | 5 comments, closed – points to a sync gap between npm and the internal catalog. |
| #8464 | [Handle output‑limit continuation and mid‑turn compaction] (https://github.com/earendil-works/pi/issues/8464) | When a model hits its output limit, Pi currently requires manual “continue”; auto‑compaction between tool turns is missing. | 4 comments, closed – highlights need for truly autonomous long runs. |
| #8489 | [Add MindsHub as a built‑in pi‑ai provider] (https://github.com/earendil-works/pi/issues/8489) | Expands model access via a unified OpenAI‑compatible gateway; reduces boilerplate for multi‑provider setups. | 3 comments, closed – provider‑addition requests are a steady trend. |

---

### 4. Key PR Progress  

| # | PR (link) | Summary |
|---|-----------|---------|
| #8474 | [feat(coding-agent): bundle Node runtime] (https://github.com/earendil-works/pi/pull/8474) | Reduces file‑load count for `pi-coding-agent`, speeding startup especially on Windows where Defender scans many files. |
| #8488 | [feat(ai): add MindsHub provider] (https://github.com/earendil-works/pi/pull/8488) | Implements the MindsHub gateway as a first‑class `pi-ai` provider (matches issue #8489). |
| #8487 | [fix(coding-agent): expose finish reason compatibility override] (https://github.com/earendil-works/pi/pull/8487) | Makes an internal API field public so extensions can tweak finish‑reason handling (closes #8460). |
| #8486 | [feat(tui): add editor‑scroll capture and verification tooling] (https://github.com/earendil-works/pi/pull/8486) | Adds a testable demo (`editor-scroll-demo.ts`) to catch regressions like the Windows ConPTY drift issue. |
| #8485 | [fix(tui): disable autowrap around main‑screen renders to prevent ConPTY drift] (https://github.com/earendil-works/pi/pull/8485) | Stops unwanted double‑row advances on Windows Terminal when rendering full‑width lines (fixes #8484). |
| #8482 | [docs(coding-agent): point custom footer docs at ctx.getContextUsage()] (https://github.com/earendil-works/pi/pull/8482) | Corrects documentation to reference the proper context‑usage API (addresses #8392). |
| #8479 | [fix: expose unloaded llama.cpp presets] (https://github.com/earendil-works/pi/pull/8479) | Allows llama‑server presets defined via `--models-preset` to appear in the model list (related to #8167). |
| #7148 | [feat(coding-agent): Experimental loadout management] (https://github.com/earendil-works/pi/pull/7148) | Introduces a `/loadout` command to enable/disable extensions mid‑session, with persistence. |
| #8295 | [feat(coding-agent,tui): add locale switching via /settings] (https://github.com/earendil-works/pi/pull/8295) | Adds UI for toggling between English and Simplified Chinese, persisting the choice. |
| #8459 | [fix(tui): keep / and - inside fullscreen double‑click word selection] (https://github.com/earendil-works/pi/pull/8459) | Ensures paths and flags are selected as a single token when double‑clicked in fullscreen mode. |

---

### 5. Feature Request Trends  
- **Windows‑first polish** – better installer guidance, path handling, and terminal‑emulator compatibility (Kitty, ConPTY).  
- **Flexible model selection** – persistent scopes (session/directory/global), UI improvements (display names, filtering), and easier addition of custom backends (llama.cpp, local servers).  
- **Provider expansion** – unified gateways (MindsHub, Parasail.io, OpenRouter) and incremental catalog updates (DeepSeek vision, Claude‑3 variants).  
- **TUI layout & usability** – viewport primitives, configurable block collapse/expand, scroll stability, and theme‑switch consistency.  
- **Compaction & token management** – proactive auto‑compaction checks, output‑limit continuation, and smarter summarization prompts.  
- **Extension ergonomics** – ability to exclude specific extensions, per‑extension config, and memory layers (SQLite + active notebook).  
- **Developer experience** – faster startup (Node runtime bundling), better diagnostics (request ID tracing), and locale/i18n support.

---

### 6. Developer Pain Points  
- **Windows friction** – editor view jumps, backspace misbehaviour, path‑separator mismatches, and unclear documentation for various runtime options.  
- **TUI instability** – stale colors after theme switches, input echoing or unresponsiveness after upgrades, scroll jumps on large output, and double‑width rendering glitch

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code Community Digest – 2026‑08‑23**  

---  

### 1. Today's Highlights  
- **v0.22.0** shipped with two core reliability wins: the Web Shell now bounds transcript retention and trims oversized replays to eliminate out‑of‑memory crashes (see [#9303](https://github.com/QwenLM/qwen-code/pull/9303)), and review loops explain instability by citing the specific files that repeatedly surface findings.  
- A nightly build **v0.21.14‑nightly.20260822.7a4566cb3b** was also published, incorporating the same review‑loop diagnostics and assorted CI fixes.  

---  

### 2. Releases  

| Version | What’s new (summary) |
|---------|----------------------|
| **v0.22.0** | • Web Shell memory guard – bounds transcript history and trims large replays to avoid OOM.<br>• Review‑loop diagnostics – when a review does not settle, the system now points to the exact files with recurring findings.<br>• Miscellaneous CI and stability tweaks (see release notes for the full diff). |
| **v0.21.14‑nightly.20260822.7a4566cb3b** (released 2026‑08‑22) | • Same review‑loop explanation feature as v0.22.0.<br>• CI fix to stop fallback continuation on failure.<br>• Minor bug‑fixes and documentation updates. |

---  

### 3. Hot Issues (selected by comment count / priority)  

| # | Title & Link | Why it matters | Community reaction |
|---|--------------|----------------|--------------------|
| [#8102](https://github.com/QwenLM/qwen-code/issues/8102) | **Deterministic tool‑execution boundaries for a trustworthy agent runtime** (P3, feature‑request) | Proposes moving the LLM outside the trust boundary and adding runtime‑level constraints – a foundational security/safety direction. | 17 comments, active discussion on threat model and implementation scope. |
| [#9278](https://github.com/QwenLM/qwen-code/issues/9278) | **Design: /review publish‑time convergence advisory** (P2, in‑progress) | Tracks the “runaway review loop” problem and seeks telemetry‑driven advisories to stop escalating diffs. | 9 comments, maintainer‑led design work underway. |
| [#9556](https://github.com/QwenLM/qwen-code/issues/9556) | **Review: decide whether the pipeline should keep granting code execution as the invoking user** (P2, security) | Questions the privileged execution model used by review agents – a key attack surface. | 8 comments, debate on least‑privilege vs. usability. |
| [#9002](https://github.com/QwenLM/qwen-code/issues/9002) | **SDK Python rejects `permission_mode="auto"` although the CLI supports it** (P3, bug) | Inconsistency between SDK and CLI breaks automated workflows that rely on the “auto” mode. | 6 comments, users requesting alignment. |
| [#9198](https://github.com/QwenLM/qwen-code/issues/9198) | **qwen 跑出来 oom 问题** (P2, bug, performance) | Persistent OOM despite 1 TB RAM – points to a leak in long‑running sessions. | 5 comments, reproductions and memory‑profile requests. |
| [#9706](https://github.com/QwenLM/qwen-code/issues/9706) | **Auto session title can echo the TITLE_SYSTEM_PROMPT example verbatim** (P2, bug) | Shows a flaw in the title‑generation prompt that surfaces noisy, non‑descriptive session names. | 4 comments, quick fix anticipated. |
| [#9573](https://github.com/QwenLM/qwen-code/issues/9573) | **Resumed sessions show ‘Tool result missing from saved history’** (P1, bug) | Breaks confidence in session resumption – a core UX expectation for long‑running agents. | 4 comments, need‑for‑retesting label indicates ongoing investigation. |
| [#9733](https://github.com/QwenLM/qwen-code/issues/9733) | **Loop detection false‑positives on verification cycles** (P2, bug) | Causing unattended turns to be killed, forcing manual intervention in automated pipelines. | 4 comments, discussion on refining heuristics. |
| [#9695](https://github.com/QwenLM/qwen-code/issues/9695) | **Deferred review findings from PR #9655** (P3, feature‑request) | Highlights the need for better handling of findings that autofix cannot resolve locally. | 4 comments, maintainer notes on turning items into follow‑ups. |
| [#2862](https://github.com/QwenLM/qwen-code/issues/2862) | **Startup hangs on “Initializing…” when checkpointing is enabled** (P3, bug) | Checkpointing, a valuable safety feature, currently blocks startup – a regression for users enabling it. | 4 comments, work‑arounds shared while a fix is sought. |

---  

### 4. Key PR Progress (selected by impact)  

| PR | Title & Link | Summary |
|----|--------------|---------|
| [#9303](https://github.com/QwenLM/qwen-code/pull/9303) | **Web Shell prevents out‑of‑memory crashes by bounding transcript retention** | Implements a sliding‑window on transcript storage and trims large replays, directly addressing the OOM issue highlighted in #9198. |
| [#9461](https://github.com/QwenLM/qwen-code/pull/9461) | **feat(review): tell the author why a review loop is not settling** | Adds the file‑level instability explanation shipped in v0.22.0/v0.21.14‑nightly. |
| [#9394](https://github.com/QwenLM/qwen-code/pull/9394) | **feat(channels): add DingTalk Workspace channel** | Introduces a first‑party DingTalk integration, expanding Qwen Code’s chat‑ops reach. |
| [#8927](https://github.com/QwenLM/qwen-code/pull/8927) | **feat(channels): bound session lifetime with sessionRotation** | Adds per‑channel `sessionRotation` (`maxTurns` / `maxIdleTime`) to automatically recycle stale sessions. |
| [#9273](https://github.com/QwenLM/qwen-code/pull/9273) | **feat(review): capture‑tui — rendering claims get pixels, not prose** | Provides a verifiable, image‑based evidence pipeline for UI‑related review findings. |
| [#9526](https://github.com/QwenLM/qwen-code/pull/9526) | **feat(review): add the persistently‑critical convergence advisory (land‑with‑residual‑risk)** | Emits an advisory when critical findings survive multiple rounds, helping operators decide on risk acceptance. |
| [#9602](https://github.com/QwenLM/qwen-code/pull/9602) | **fix(core): clear tool display list before awaiting completion callback** | Resolves a UI glitch where tool icons lingered after completion, improving responsiveness. |
| [#9492](https://github.com/QwenLM/qwen-code/pull/9492) | **fix(core): make loop detection result‑aware for task_list polls** | Makes the loop guard consider actual task‑list state, reducing false positives on collaborative boards. |
| [#9392](https://github.com/QwenLM/qwen-code/pull/9392) | **fix(serve): let channel workers reach TLS‑enabled daemons** | Updates channel workers to use `https://` loopback URLs when TLS is configured, fixing secure‑serve setups. |
| [#9499](https://github.com/QwenLM/qwen-code/pull/9499) | **refactor(node‑repl)!: deliver the persistent Node REPL as a standalone MCP server** | Moves the session‑level Node REPL out of core into `@qwen-code/node-repl-mcp`, simplifying embedding and versioning. |
| [#9753](https://github.com/QwenLM/qwen-code/pull/9753) | **fix(cli): degrade gracefully when messageRewrite.promptFile cannot be read** | Adds error handling for unreadable prompt files (e.g., directories), preventing hard startup failures. |
| [#9717](https://github.com/QwenLM/qwen-code/pull/9717) | **feat(review): add the prose‑execution audit and the counter‑frame audit** | Introduces two new review lenses from the #9655 post‑mortem, targeting instruction‑file changes and counter‑factual framing. |
| [#9729](https://github.com/QwenLM/qwen-code/pull/9729) | **feat(serve): backfill session PR bindings and refresh their merge state** | Extends the session↔PR binding feature to historic sessions and keeps merge status up‑to‑date. |

---  

### 5. Feature Request Trends  

- **Review‑loop safety & diagnostics** – repeated requests for better convergence advisories, risk‑aware landing explanations, and ways to surface *why* a review is stuck (see #9278, #9526, #9461, #9717).  
- **Deterministic, sandboxed agent runtimes** – strong interest in moving the LLM out of the trust boundary and adding explicit authorization/observation layers (#8102, #9556).  
- **Session durability & resumability** – fixes for checkpointing hangs, session title garbles, and missing tool‑history on resume (#2862, #9706, #9573).  
- **Memory & performance guards** – community wants transcript‑size caps, replay trimming, and OOM mitigation for long‑running sessions (#9303, #9198).  
- **Channel & integration extensibility** – DingTalk channel (#9394) and broader MCP‑server model for pluggable tools (#9499, #9333).  
- **CI/CD reliability** – eliminating flaky dependency‑audit jobs, improving test‑file size governance, and stabilizing permission handling in SDK/CLI (#9699, #9642, #9002).  
- **UX polish** – less intrusive UI (e.g., bottom‑aligned VP content, faster sidebar pinning), clearer error messages, and graceful degradation when config files are unreadable (#9305, #9465, #9753).  

---  

### 6. Developer Pain Points  

- **Out‑of‑memory / memory leaks** – long runs still trigger OOM despite ample RAM; transcript retention is the primary suspect.  
- **Session resume brittleness** – resumed sessions often lose tool results or show spurious errors, breaking confidence in unattended automation.  
- **Loop detection false positives** – overly aggressive guards kill legitimate verification cycles, forcing manual restarts.  
- **Permission & execution model ambiguity** – conflicting SDK/CLI behavior (`permission_mode=auto`) and unclear whether review agents should run as the invoking user.  
- **CI flakiness** – dependency‑CVE audit failures affecting every PR; checkpointing preventing startup; slow sidebar operations.  
- **Review loop opacity** – before the recent explainability add‑on, developers could not tell why a review kept looping, leading to wasted cycles.  
- **Tool‑history visibility** – missing or stale tool‑result displays after swap/resume, complicating debugging.  

---  

*All links point to the corresponding GitHub items in the QwenLM/qwen-code repository.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

**DeepSeek TUI Community Digest – 2026‑08‑23**  
*Source: github.com/Hmbown/DeepSeek-TUI (mirrored in the CodeWhale repo)*  

---

### 1. Today's Highlights  
- No new releases were tagged in the last 24 h, but the project is actively preparing **Codewhale v0.9.11** (PR #5542) as a release candidate.  
- Work continues on the large‑scale **EPIC‑005: CodeWhale TUI crate decomposition** (Issue #5316) and on improving the durability of child‑tool approvals (Issue #5543).  

---

### 2. Releases  
*None* – No new versions were published in the past day.  

---

### 3. Hot Issues  
Only two issues were updated in the last 24 h; both are worth noting because they represent ongoing architectural work.

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| [#5316](https://github.com/Hmbown/CodeWhale/issues/5316) | **EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)** | Tracks the effort to split the monolithic TUI crate into smaller, maintainable sub‑crates. Success will improve build times, enable independent versioning, and lower the barrier for contributors. | 12 comments, 0 👍 – discussion is technical; contributors are coordinating sub‑EPICs and PRs. |
| [#5543](https://github.com/Hmbown/CodeWhale/issues/5543) | **Persist child tool approvals through the durable receipt path** | Addresses a gap where child agents awaiting parent decisions bypass the durable approval receipt, risking inconsistent state if the process crashes. Fixing this strengthens reliability of multi‑agent workflows. | 0 comments, 0 👍 – newly opened; awaiting review. |

---

### 4. Key PR Progress  
Seven PRs were updated today. They span pricing logic, TUI enhancements, documentation refactors, and release preparation.

| # | PR | Summary & Impact |
|---|----|------------------|
| [#5545](https://github.com/Hmbown/CodeWhale/pull/5545) | **fix(pricing): bill whole Beijing weekends off‑peak for DeepSeek V4** | Aligns the `deepseek_is_peak` helper with the new Beijing‑time weekend off‑peak policy (effective 2026‑08‑23). Prevents over‑charging users on Sat/Sun. |
| [#5524](https://github.com/Hmbown/CodeWhale/pull/5524) | **feat(tui): add multi‑file read_lints operation** | Extends the existing `lsp` tool to accept a list of workspace‑relative files, reusing the shared `LspManager`. Reduces duplicated language‑server lifecycles and speeds up linting batches. |
| [#5544](https://github.com/Hmbown/CodeWhale/pull/5544) | **feat(web): move docs/subagents and docs/mcp onto the dictionary spine (#5337)** | Continues the documentation‑spine migration: moves two doc sub‑trees into the dictionary‑based locale system, enabling zero‑maintenance zh branches and simpler CI checks. |
| [#5525](https://github.com/Hmbown/CodeWhale/pull/5525) | **refactor(tui): adopt command shapes in utility group (FEAT‑018)** | Moves the TUI utility commands to the external command shape introduced by FEAT‑014/015, keeping files in place but clarifying execution boundaries and enabling future plug‑in style commands. |
| [#5542](https://github.com/Hmbown/CodeWhale/pull/5542) | **release: prepare Codewhale v0.9.11** | Creates a release candidate branch (excluding benchmark artefacts). Sets the stage for the next stable tag; all changes are currently gated behind CI. |
| [#1701](https://github.com/Hmbown/CodeWhale/pull/1701) | **chore(deps): bump portable‑pty to 0.9.0** | Updates the PTY dependency to gain loongarch64 support and eliminate a duplicate `nix` transitively. Improves cross‑platform compatibility. |
| [#5535](https://github.com/Hmbown/CodeWhale/pull/5535) | **Supervised operation stack: lifecycle outbox, /relaunch, per‑session control socket, and goal‑continuation quiet‑period fix** | Introduces an opt‑in JSONL/webhook lifecycle outbox, a control socket for per‑session commands, and fixes a quiet‑period bug that prevented goal continuation after stalls. Enhances observability and controllability of long‑running sessions. |

---

### 5. Feature Request Trends  
From the open issues (and implied by the PRs) the community is gravitating toward:

1. **Modularization & crate decomposition** – breaking the TUI into smaller, independently versioned crates (EPIC‑005).  
2. **Durable, reliable agent communication** – ensuring approvals, lifecycle events, and state survive crashes (issue #5543, PR #5535).  
3. **Enhanced tooling ergonomics** – batch operations like multi‑file lint read (PR #5524) and unified command shapes (PR #5525).  
4. **Documentation & localization scalability** – moving docs into a dictionary‑spine model to ease i18n maintenance (PR #5544).  
5. **Pricing & billing accuracy** – aligning internal helpers with external pricing changes (PR #5545).  

---

### 6. Developer Pain Points  
Recurring frustrations visible in the tracked items:

- **Complex approval flows** – developers note that child agents sometimes bypass durable receipt paths, leading to uncertain state after failures.  
- **Monolithic TUI codebase** – the single large crate hampers incremental builds and makes onboarding harder; there is a clear desire for finer‑grained crates.  
- **Inconsistent localization workflow** – maintaining multiple `isZh` branches across doc trees is error‑prone; the community seeks a centralized dictionary approach.  
- **Pricing logic drift** – UTC‑based peak detection no longer matches the provider’s Beijing‑time rules, causing billing confusion.  
- **Need for batch‑oriented tooling** – current LSP‑based tools operate on a single file; users request operations that accept file lists without spawning extra language‑server instances.  

---

*Prepared for developers tracking DeepSeek TUI/CodeWhale evolution. All links point to the respective GitHub items.*

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

**ComfyUI Community Digest – 2026‑08‑23**  
*Technical analyst perspective – AI developer tools*  

---

### 1. Today’s Highlights
- A regression in the **Dynamic VRAM streaming** subsystem (introduced after the Aug 3 update) is causing CUDA‑OOM failures across all generations; the community workaround is to limit ComfyUI to a single GPU or disable pinned memory ([#15255](https://github.com/Comfy-Org/ComfyUI/issues/15255)).  
- **MiniMax H3** continues to dominate discussion: users report zero‑effect text conditioning, silent audio output, and severe performance regressions, prompting multiple bug reports and PRs to increase memory‑usage factors and add missing special tokens ([#15799](https://github.com/Comfy-Org/ComfyUI/issues/15799), [#15805](https://github.com/Comfy-Org/ComfyUI/issues/15805), [#15808](https://github.com/Comfy-Org/ComfyUI/pull/15808)).  
- Platform‑specific issues are surfacing: Apple Silicon (MPS) users see all‑NaN attention crashes with bf16 LTX‑2.x models ([#15804](https://github.com/Comfy-Org/ComfyUI/issues/15804)), while a nightly import error stems from a breaking change in PyAV’s `ColorPrimaries` ([#15784](https://github.com/Comfy-Org/ComfyUI/issues/15784)).  

No new releases were published in the last 24 h.

---

### 2. Releases
*None.*

---

### 3. Hot Issues (10 selected)

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| [#15255](https://github.com/Comfy-Org/ComfyUI/issues/15255) | Dynamic VRAM streaming crashes → CUDA OOM (regression) | Blocks all GPU‑based workloads; forces users to downgrade or use workarounds. | 60 comments, high visibility; workaround (`--cuda-device 0` / `--disable-pinned-memory`) widely adopted. |
| [#15720](https://github.com/Comfy-Org/ComfyUI/issues/15720) | v0.33.2 makes H3 generations ~36% slower vs v0.33.1 | Performance regression directly impacts video‑generation throughput. | 9 comments, 👍9 – users confirming slowdown, requesting rollback or optimization. |
| [#15799](https://github.com/Comfy-Org/ComfyUI/issues/15799) | MiniMax H3 VAEDecodeAudio returns constant DC/silence | Audio pipeline broken; generated videos lack sound despite correct latents. | 6 comments; users confirming issue across bf16, `--cpu-vae`, and cu128. |
| [#15805](https://github.com/Comfy-Org/ComfyUI/issues/15805) | MiniMax H3 text prompt has zero effect (pixel‑identical videos) | Undermines core controllability of the model; prompts ignored. | 0 comments yet, but flagged as critical by early reporters. |
| [#15804](https://github.com/Comfy-Org/ComfyUI/issues/15804) | Apple Silicon (MPS) random all‑NaN attention → black videos (bf16 LTX‑2.x) | Platform‑specific crash makes ComfyUI unusable for many Mac users on latest models. | 0 comments, 👍1 – early signal needing investigation. |
| [#15784](https://github.com/Comfy-Org/ComfyUI/issues/15784) | Nightly crash: ImportError in `comfy_api/latest` (ColorPrimaries removed from PyAV) | Breaks API usage for anyone tracking nightly; dependency mismatch. | 5 comments, 👍5 – users urging version pinning or upstream fix. |
| [#15455](https://github.com/Comfy-Org/ComfyUI/issues/15455) | MinimaxH3 execution failed | Generic failure node; often tied to missing dependencies or memory issues. | 2 comments; users asking for clearer error messages. |
| [#15347](https://github.com/Comfy-Org/ComfyUI/issues/15347) | AMD: 1 core at 100% CPU after workflow completion | Wasted CPU resources; indicates a thread‑join or polling bug. | 6 comments; AMD users reporting persistent high CPU. |
| [#15289](https://github.com/Comfy-Org/ComfyUI/issues/15289) | New change breaks saving to soft‑linked folders | Affects workflows that store outputs on external drives via symlinks. | 7 comments; request for optional disable flag. |
| [#1112](https://github.com/Comfy-Org/ComfyUI/issues/1112) | API to convert workflow format to prompt format | Recurring friction for automation; users want a direct conversion utility. | 23 comments, 👍18 – strong demand for built‑in helper. |

---

### 4. Key PR Progress (10 selected)

| # | PR | Summary |
|---|----|---------|
| [#15808](https://github.com/Comfy-Org/ComfyUI/pull/15808) | **Minimax‑H3: Add missing special tokens** – Adds the seven tokenizer special tokens (`<d>`, `</d>`, `<|cutoff|>`, etc.) required for proper text‑to‑video conditioning. |
| [#15810](https://github.com/Comfy-Org/ComfyUI/pull/15810) | **CreateVideo: colorspace option & bit_depth as combo** – Exposes colorspace selection and simplifies bit‑depth configuration for video output nodes. |
| [#15809](https://github.com/Comfy-Org/ComfyUI/pull/15809) | **Fix(video): remux HEVC to mp4/mov as hvc1** – Applies `hevc_mp4toannexb` bitstream filter so HEVC‑encoded videos play on Apple devices. |
| [#15807](https://github.com/Comfy-Org/ComfyUI/pull/15807) | **[Partner Nodes] feat(Meshy): add Meshy‑7 support** – Integrates the Meshy‑7 text‑to‑3D model as an API‑node, with pricing and billing updates. |
| [#15800](https://github.com/Comfy-Org/ComfyUI/pull/15800) | **Increase MiniMaxH3 memory usage factor** – Raises the memory‑usage factor from 0.114 to better match observed VRAM consumption, reducing OOMs on 24 GB GPUs. |
| [#15796](https://github.com/Comfy-Org/ComfyUI/pull/15796) | **Increase trellis2 memory factor a bit** – Slight bump to avoid OOM when loading large Trellis‑2 checkpoints. |
| [#15790](https://github.com/Comfy-Org/ComfyUI/pull/15790) | **Add streaming tiled decoding function to VAE** – Introduces a memory‑efficient tiled decoder for SeedVR2/VAE workloads addressing superlinear runtime. |
| [#15788](https://github.com/Comfy-Org/ComfyUI/pull/15788) | **Respect cgroup memory limits when reporting RAM** – Makes ComfyUI aware of container memory caps, preventing OOM‑kills in Kubernetes/Docker environments. |
| [#15740](https://github.com/Comfy-Org/ComfyUI/pull/15740) | **Pass the schema default for optional inputs a prompt leaves out** – Ensures optional node inputs receive their declared defaults when omitted from API prompts, fixing `TypeError`. |
| [#15739](https://github.com/Comfy-Org/ComfyUI/pull/15739) | **Add a check for node input changes that break stored API prompts** – Snapshot‑based validation to warn users when a workflow’s API prompt becomes incompatible after node edits. |

---

### 5. Feature Request Trends
- **Workflow ↔ API conversion utilities** – Repeated asks for a built‑in function to transform UI workflow JSON into the API‑specific prompt format (see #1112, #12403, #4547, #15473).  
- **Flexible model‑path configuration** – Requests to extend `extra_model_paths` beyond the `/models` directory to arbitrary folders (inputs, outputs, custom workflows) – #15043.  
- **Stable, versioned API node IDs** – Desire to lock or customize the numeric IDs assigned to nodes when exporting workflows for API use (#4547).  
- **Improved video‑output controls** – More granular options for colorspace, bit‑depth, container codec, and default quality (#15810, #15798).  
- **Cross‑platform reliability** – Specific fixes for Apple Silicon (MPS NaN), AMD CPU‑spin, and multi‑GPU VRAM handling (#15804, #15347, #15255).  

---

### 6. Developer Pain Points
- **VRAM / OOM instability** – Dynamic streaming regression and inaccurate memory estimates cause frequent CUDA‑out‑of‑memory errors, forcing manual GPU pinning or disabled pinned memory.  
- **API workflow format mismatch** – The UI‑exported JSON differs from what the `/prompt` API expects, creating friction for automation and requiring manual EXIF extraction or custom conversion scripts.  
- **Platform‑specific regressions** – Apple Silicon (MPS) NaN attention, AMD CPU‑spin, and occasional nightly breakage due to third‑party library updates (e.g., PyAV) increase maintenance overhead.  
- **Performance unpredictability** – Superlinear scaling in tiled VAE decode and unexpected slow‑downs between minor versions hinder performance planning.  
- **Documentation & discoverability** – Users struggle to find minimal API quick‑start examples and clear guidance on features like `extra_model_paths` or workflow‑to‑API conversion, leading to repeated support tickets.  

---  

*Prepared for the ComfyUI developer community – stay tuned for next week’s digests.*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Community Digest – 2026‑08‑23**

---

### 1. Today's Highlights
- The **v0.33.0‑rc2** release brings the first official integration with **Claude Desktop**, letting users toggle Ollama models from the menu bar and pick them inside Claude.  
- Community activity remains high: 20 issues were updated in the last 24 h and 23 PRs touched the codebase, with a clear focus on UI polish, token‑caching visibility, and structured‑output support across backends.

---

### 2. Releases
**v0.33.0‑rc2 (tagged as v0.33.0)**  
*Claude Desktop integration*  
- Ollama now integrates with Claude; individual models can be turned on/off for Claude directly from the Ollama menu bar.  
- Within Claude, users can choose from their locally available Ollama models; cloud‑hosted models appear only when signed in to Ollama Cloud.  
- A new **Apps** view is introduced (details truncated in the changelog).  

[Release notes](https://github.com/ollama/ollama/releases/tag/v0.33.0-rc2)

---

### 3. Hot Issues (10 noteworthy)

| # | Issue | Why it matters / Community reaction |
|---|-------|--------------------------------------|
| [#16714](https://github.com/ollama/ollama/issues/16714) | **Prompt Cache Support for Ollama Cloud** | Heavy‑use agentic workflows benefit from caching; 34 comments and 3 👍 show strong demand for parity with other providers. |
| [#17889](https://github.com/ollama/ollama/issues/17889) | **Inconsistent ctx handling (no `num_ctx`)** | Same server returns 400 for some models and 200 for others on over‑length prompts, causing confusion; 13 comments indicate a need for deterministic behavior. |
| [#17484](https://github.com/ollama/ollama/issues/17484) | **“context deadline exceeded” errors** | Frequent when pulling large HF GGUF models; 12 comments and 2 👍 suggest network/timeout handling needs improvement. |
| [#12954](https://github.com/ollama/ollama/issues/12954) | **Sidebar animates on load instead of staying open** | Long‑standing UI polish issue; 9 comments, recently addressed by PR #17528 and related fixes. |
| [#17904](https://github.com/ollama/ollama/issues/17904) | **Model incorrectly identifies as Claude** | The `ornith‑1.5:35b` model claims to be Claude, raising concerns about model metadata integrity; 9 comments show surprise and debugging effort. |
| [#17591](https://github.com/ollama/ollama/issues/17591) | **Windows `ollama create` fails with NTFS mount point** | Blocks developers using volume mount points for GGUF files; 6 comments indicate a Windows‑specific path‑handling bug. |
| [#17011](https://github.com/ollama/ollama/issues/17011) | **Nemotron model “became stupid”** | Users report degraded reasoning/tool use; 6 comments suggest a possible regression in model loading or prompting. |
| [#17932](https://github.com/ollama/ollama/issues/17932) | **Cloudfront.net performance complaints** | Users request official images on Quay.io to avoid slow CDN; 4 comments reflect frustration with download speeds. |
| [#16773](https://github.com/ollama/ollama/issues/16773) | **Detect free‑plan 403 before running a model** | Want a way to preview whether a cloud model will be blocked; 3 comments show desire for better error‑preflight. |
| [#17937](https://github.com/ollama/ollama/issues/17937) | **Qwen3 parser does not split thinking from content** | HF‑imported models lose the `message.thinking` field, breaking tool‑use pipelines; 3 comments highlight impact on agentic apps. |

---

### 4. Key PR Progress (10 important)

| # | PR | Summary |
|---|----|---------|
| [#17943](https://github.com/ollama/ollama/pull/17943) | **Report cached prompt tokens** | Adds `prompt_eval_cached_count` to native, OpenAI‑ and Anthropic‑compatible responses; keeps `prompt_eval_count` as total input while exposing cache hits for better benchmarking. |
| [#17528](https://github.com/ollama/ollama/pull/17528) | **fix(app): prevent sidebar open animation on load** | Removes width‑transition so the sidebar appears instantly on first render (addresses #12954). |
| [#17942](https://github.com/ollama/ollama/pull/17942) | **app: always show all apps on Connect your apps screen** | Eliminates the “Show more apps” toggle and grid‑rows animation; all detected apps render directly. |
| [#17941](https://github.com/ollama/ollama/pull/17941) | **app: rename Connect your apps page title to Apps** | Shortens header to match sidebar label, reducing UI clutter. |
| [#17935](https://github.com/ollama/ollama/pull/17935) | **fix(compat): honor tool_choice across OpenAI and Anthropic layers** | Implements `none`, `required`, and named function handling for both compatibility layers (closes #17921). |
| [#17940](https://github.com/ollama/ollama/pull/17940) | **docs: add NVIDIA driver version guidance by compute capability** | Provides concrete driver examples for older GPUs, addressing chaos‑support concerns (#17789). |
| [#17929](https://github.com/ollama/ollama/pull/17929) | **mlxrunner: add structured output support** | Enforces `format` field via XGrammar, ensuring JSON/Schema‑constrained outputs on the MLX backend. |
| [#17938](https://github.com/ollama/ollama/pull/17938) | **Add RemiAI to integrations** | Updates the integrations list with RemiAI, expanding ecosystem visibility. |
| [#17936](https://github.com/ollama/ollama/pull/17936) | **app: add Back to chat button on Settings page** | Provides a UI way to return from Settings to the chat view, reducing reliance on the window close button. |
| [#17930](https://github.com/ollama/ollama/pull/17930) | **server: don't override a model's own template with a renderer** | Fixes prompt rendering when a model supplies a custom renderer (addresses #14560). |

---

### 5. Feature Request Trends
- **Token‑caching visibility** – multiple requests (#16714, PR #17943) for exposing cached‑prompt counts in APIs and CLI.  
- **Structured/constrained decoding** – strong push for JSON/Schema enforcement across GGUF, MLX, and CUDA backends (PR #17929, #17697, issue #17933).  
- **Cloud‑model usability** – better pre‑flight checks for free‑plan 403 errors (#16773) and easier model discovery (Apps UI tweaks, PR #17942/#17941).  
- **Tool‑choice compliance** – ensuring `tool_choice` is respected in OpenAI/Anthropic compatibility layers (PR #17935, issue #17921).  
- **Cross‑platform path handling** – fixing Windows NTFS mount point issues (#17591) and improving macOS menu‑bar integration (Claude Desktop).  

---

### 6. Developer Pain Points
- **Inconsistent context limits** – unpredictable 400/200 responses when `num_ctx` is omitted (#17889).  
- **Windows‑specific path bugs** – `ollama create` fails on NTFS volume mount points (#17591).  
- **CPU spikes despite VRAM fit** – versions 0.32.14+ cause high CPU usage when models reside fully in GPU memory (#17833).  
- **MLX memory leaks** – steady resident growth per request leading to ~28 GiB plateau (#17924).  
- **Model metadata confusion** – imported models sometimes misreport identity (e.g., claiming to be Claude) (#17904).  
- **UI polish latency** – sidebar animation on initial load, missing back‑button in Settings, and truncated app lists (#12954, #17936, #17942).  
- **External‑dependency frustrations** – slow CloudFront downloads prompting calls for official images on Quay.io (#17932).  
- **HF‑import quirks** – incorrect `stop` parameters causing truncated outputs (#17939) and missing thinking/split parsing (#17937).  

These trends highlight where the community is directing effort: tighter token‑usage diagnostics, reliable structured output, smoother cross‑platform UX, and more predictable model‑behavior handling.  

---  

*Digested from the Ollama GitHub activity for 2026‑08‑23.*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

**llama.cpp Community Digest – 2026‑08‑23**  

---

### 1. Today’s Highlights  
- The Vulkan backend received a new **PAD_REFLECT_1D** operation, expanding image‑processing capabilities for GGML‑Vulkan.  
- A lightweight **common/json.h** abstraction was merged to centralise JSON handling and reduce compile‑time duplication across the codebase.  
- Speculative decoding gained an **adaptive MTP draft depth** option (`--spec-type draft-mtp-adaptive`) that dynamically adjusts the number of draft tokens based on model confidence.  
- ROCm CI jobs were restored for Ubuntu builds, improving AMD GPU test coverage after a previous disablement.  

---

### 2. Releases  
No formal version tags were cut in the last 24 h; the activity consists of incremental commits on the main branch. Notable changes include:  

| Commit | Summary |
|--------|---------|
| **b10587** | Vulkan: added `GGML_OP_PAD_REFLECT_1D` (GLSL compute shader) – enables reflective 1‑D padding for image‑like tensors. |
| **b10586** | mtmd: switched to `ggml_rope_set_offset` for cleaner RoPE handling in multimodal models. |
| **b10585** | common: introduced `json.h` abstraction (PIMPL around nlohmann::json) to avoid recompiling the heavy header in multiple translation units. |
| **b10584** | fit: accounted for `n_streams` when allocating KV caches, fixing draft/target context mismatch in non‑unified cache mode. |
| **b10582** | CI: restored the Ubuntu ROCm job and set ccache `compiler_check=content` to cope with fresh clang toolchains. |
| **b10581** | model: added support for the DSpark variant of the **bailingmoe3** architecture. |
| **b10580** | mtmd: extended dots3‑note vision‑audio conversion, improving multimodal tokenisation. |
| **b10578** | ggml: optimised the concat op by replacing per‑element memcpy with row‑level copies, reducing memory bandwidth pressure. |
| **b10577** | common: fixed draft‑MTP handling when embeddings are present, resolving occasional token‑generation mismatches. |
| **b10576** | sycl: re‑added Q2_K reordered MMVQ and ESIMD kernels after a temporary revert. |

---

### 3. Hot Issues (Top 10 by comment count)  

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| [#27102](https://github.com/ggml-org/llama.cpp/issues/27102) | **CUDA kernel stall on RTX Pro 6000 Blackwell** – watchdog kills eval. | Highlights a severe stability regression on the newest Nvidia Blackwell GPU when running large quantised models (Qwen3‑8B). | 24 comments, 4 👍; users request a backport of the fix or a workaround (disable CUDA graphs, lower `--batch-size`). |
| [#27063](https://github.com/ggml-org/llama.cpp/issues/27063) | **SYCL broken on Intel A770** – crashes for many models. | Shows SYCL backend still unreliable on current Arc GPUs, blocking adoption for Intel users. | 17 comments, 0 👍; discussion focuses on missing P2P support and memory‑allocation bugs. |
| [#25618](https://github.com/ggml-org/llama.cpp/issues/25618) | **Speculative decoding diverges on quantised targets** (draft‑mtp/draft‑dspark). | Undermines the main speed‑up promise of speculative decoding when the target model is quantised (common in production). | 16 comments, 1 👍; contributors propose adjusting draft context batch size or disabling MTP for quantised runs. |
| [#27038](https://github.com/ggml-org/llama.cpp/issues/27038) | **SYCL host‑pinned memory causes high CPU usage** for large allocations. | Performance pitfall that can render SYCL unusable for big‑batch workloads. | 13 comments, 0 👍; suggestions include using regular malloc or adding a flag to disable host‑pinned memory. |
| [#11681](https://github.com/ggml-org/llama.cpp/issues/11681) | **`llama-server --ctx-size` divided by `--parallel`** – limits context length. | A long‑standing usability issue affecting multi‑instance serving scenarios. | 10 comments, 0 👍; users ask for a clearer doc or a flag to override the division. |
| [#23827](https://github.com/ggml-org/llama.cpp/issues/23827) | **Vulkan gibberish output with `-nkvo`** on Qwen3.5/3.6. | Indicates a correctness bug in the Vulkan KV‑cache layout when key/value caching is disabled. | 10 comments, 0 👍; users request a regression test or a temporary workaround (avoid `-nkvo`). |
| [#26845](https://github.com/ggml-org/llama.cpp/issues/26845) | **SYCL garbage on second prompt** – state not cleared between runs. | Points to missing state reset in the SYCL backend, leading to corrupted generation after the first request. | 10 comments, 0 👍; developers discuss adding explicit `ggml_sycl_reset()` calls. |
| [#24394](https://github.com/ggml-org/llama.cpp/issues/24394) | **mtmd video input fails when MOOV atom is at EOF**. | Blocks ingestion of many MP4 files (default ffmpeg output) for multimodal models. | 9 comments, 1 👍; patch suggestions involve using `ffmpeg -movflags +fastseek` or adjusting the probe logic. |
| [#27412](https://github.com/ggml-org/llama.cpp/issues/27412) | **SYCL build fails on Intel Iris Xe** – “program built for 1 device”. | Shows that even integrated GPUs hit device‑selection bugs in the SYCL path. | 6 comments, 0 👍; users ask for better device‑query logging and fallback to OpenCL. |
| [#27198](https://github.com/ggml-org/llama.cpp/issues/27198) | **SYCL split‑mode tensor crashes with DEVICE_LOST on dual Arc Pro B70**. | Multi‑GPU SYCL scaling remains fragile despite P2P working elsewhere. | 6 comments, 1 👍; discussion centers on improving `ur_die` handling and peer‑access checks. |

---

### 4. Key PR Progress (10 selected)  

| PR | Summary |
|----|---------|
| [#27511](https://github.com/ggml-org/llama.cpp/pull/27511) | **common: add json.h abstraction** – PIMPL wrapper around nlohmann::json to cut compile times and allow future backend swaps. |
| [#27575](https://github.com/ggml-org/llama.cpp/pull/27575) | **common: json.h – fix clang LTO** – resolves link‑time optimisation errors introduced by the new json header. |
| [#27210](https://github.com/ggml-org/llama.cpp/pull/27210) | **spec: add adaptive MTP draft depth** (`--spec-type draft-mtp-adaptive`) – dynamically caps draft tokens based on acceptance rate, improving speculative decoding efficiency. |
| [#27342](https://github.com/ggml-org/llama.cpp/pull/27342) | **model/server/conversion: add DFlash2 support** – introduces grouped dynamic depthwise convolution and a candidate selector for longer‑range attention. |
| [#26622](https://github.com/ggml-org/llama.cpp/pull/26622) | **llama: add `--n-cpu-ffn` option** – mirrors `--n-cpu-moe` for dense models, letting users offload specific FFN layers to CPU to alleviate GPU memory pressure. |
| [#27574](https://github.com/ggml-org/llama.cpp/pull/27574) | **[Tensor parallel] Fix meta tensor split state propagation** – corrects Qwen3Next recurrent cache splits and aligns attention gates/sinks for GQA/MQA across devices. |
| [#27197](https://github.com/ggml-org/llama.cpp/pull/27197) | **ggml, Apple Metal: add support for GGML_OP_DIAG_MASK_INF** – enables the diagonal‑mask‑in‑inf operation on Metal, completing attention‑mask coverage for Apple GPUs. |
| [#27573](https://github.com/ggml-org/llama.cpp/pull/27573) | **ggml, CUDA: add POOL_1D support** – implements avg/max 1‑D pooling kernels, test‑passing on T4 GPUs. |
| [#26477](https://github.com/ggml-org/llama.cpp/pull/26477) | **[ggml, OpenCL] quant lm_head / decode GEMV & medium‑batch GEMM optimisations** – improves speculative decoding and MTP performance on Adreno GPUs. |
| [#26460](https://github.com/ggml-org/llama.cpp/pull/26460) | **llama: re‑create KV cache when flash attention resolves to disabled** – fixes a performance/layout bug where FA auto‑selection left the cache in an incompatible state. |
| [#27535](https://github.com/ggml-org/llama.cpp/pull/27535) | **[ggml, Hexagon] add alternative Hexagon NPU backend (FastRPC)** – provides a second Qualcomm Hexagon implementation that can coexist with the existing dspqueue‑based backend. |

---

### 5. Feature Request Trends (distilled from Issues)  

| Trend | Representative Issues / Comments |
|-------|-----------------------------------|
| **CPU‑side optimisations for specialised ISAs** | #27276 (ARM i8mm 8×8 blocked GEMM/GEMV for TQ1/TQ2), #26622 (`--n-cpu-ffn`), recurring requests for AVX‑512, SVE, and matrix‑accelerator paths. |
| **Better speculative decoding & MTP controls** | #25618 (quantised target divergence), #27210 (adaptive MTP depth), #27569 (draft context batch capping) – users want knobs to tune draft size and avoid quality loss on quantised models. |
| **Robust multi‑GPU & multi‑backend support** | Numerous SYCL/OpenCL stability bugs (#27063, #26845, #27198, #27412) and requests for improved P2P handling, device‑selection logging, and fallback mechanisms. |
| **Tool & API completeness** | #24295 (Responses API dropping `namespace` & `web_search` tool types), #25333 (built‑in tools unavailable in router mode), #27567 (mic input for audio models) – developers seek full parity between the native Web UI and programmatic APIs. |
| **Memory management & cache reliability** | #27148 (RAM‑backed prompt cache leaking unrelated conversations), #25835 (CUDA Graphs VRAM leak), #26435 (HIP/ROCm regression) – demand for deterministic cache eviction and leak‑free graph modes. |
| **Cross‑platform model conversion & modality support** | #24394 / #24429 (mtmd video MOOV atom issues), #27567 (mic input), #27535 (Hexagon alternative backend) – expanding multimodal ingestion and hardware‑specific backends. |

---

### 6. Developer Pain Points (recurring frustrations)  

- **SYCL/OpenCL instability** – frequent crashes, device‑lost errors, high CPU utilisation, and missing P2P/peer‑access handling make the Intel/Arc GPU path feel experimental.  
- **CUDA graph & memory‑leak concerns** – VRAM leaks when enabling graphs, stalls on Blackwell GPUs, and watchdog kills deter production use on Nvidia cards.  
- **Vulkan correctness & performance** – occasional gibberish output (`-nkvo`), slow token generation when Resizable BAR is disabled, and a need for more exhaustive validation suites.  
- **Compile‑time heaviness** – the monolithic `json.hpp` inclusion historically hurt incremental builds; the new `json.h` abstraction addresses this but similar pain points exist for other large headers.  
- **Prompt‑cache correctness** – RAM‑backed cache occasionally serves stale or unrelated KV data under concurrent load, undermining trust in the caching mechanism.  
- **Limited CPU off‑loading knobs** – while `--n-cpu-moe` exists for MoE, users request symmetric controls for dense FFN layers and specialized ISA paths (i8mm, SVE) to better utilise heterogeneous systems.  
- **Tool‑API gaps** – the Responses API and server‑side tool routing still drop certain tool types (`namespace`, `web_search`) and lack audio‑input integration, forcing workarounds for advanced agent frameworks.  

---  

*Generated for developers seeking a quick yet comprehensive view of the llama.cpp ecosystem’s latest activity.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*