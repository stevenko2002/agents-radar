# AI CLI Tools Community Digest 2026-08-22

> Generated: 2026-08-21 22:15 UTC | Tools covered: 12

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

**Today's Highlights**

- **Claude Code** – Released **v2.1.239**, adding cost‑estimate awareness for the 1.1× US‑only‑inference premium and enabling a one‑time fullscreen renderer offer for Bedrock, Vertex, Foundry and other previously excluded setups.  
  https://github.com/anthropics/claude-code/releases/tag/v2.1.239  

- **Gemini CLI** – Published nightly **v0.56.0-nightly.20260821.g30573d2e4**, fixing symlink handling in ignore‑path logic and cleaning up the shell execution service by removing unnecessary `eslint-disable` directives and unsafe type‑asserts.  
  https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260821.g30573d2e4  

- **GitHub Copilot CLI** – Released **v1.0.81‑7**, which introduces automatic session‑restore on startup, enriches `copilot models.list` with service‑published info/warning messages, and adds a new `copilot app` sub‑command to launch the Copilot GUI directly from the terminal.  
  https://github.com/github/copilot-cli/releases/tag/v1.0.81-7  

- **OpenCode** – Issued patch releases **v1.18.20** and **v1.18.21**, addressing critical stability issues such as handling unknown model finish reasons, improving Vertex AI routing via REP endpoints, enhancing subagent failure visibility, and boosting network error retries.  
  https://github.com/anomalyco/opencode/releases/tag/v1.18.21  
  https://github.com/anomalyco/opencode/releases/tag/v1.18.20  

- **Qwen Code** – Delivered nightly **v0.21.14‑nightly.20260821.9f2342d323**, featuring a review‑loop enhancement that explains why a review iteration fails to settle and a CI fix that stops an erroneous fallback path.  
  https://github.com/QwenLM/qwen-code/releases/tag/v0.21.14-nightly.20260821.9f2342d323  

- **llama.cpp** – Released **v0.2.0** (nightly build **b10566**), incorporating Vulkan optimizations for Mixture‑of‑Experts workloads, Metal tensor API improvements, and new speculative decoding capabilities including DFlash2 support.  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10566

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills Community Highlights – as of 2026‑08‑22**  

---

## 1. Top Skills Ranking  
*(Based on the most recent activity, number of updates, and visible discussion in the PRs – comment counts are not exposed in the data, so we use update frequency and PR prominence as proxies for community attention.)*  

| Rank | PR | Skill / Change | What it does | Discussion highlights | Status |
|------|----|----------------|--------------|-----------------------|--------|
| **1** | [#1298](https://github.com/anthropics/skills/pull/1298) | **fix(skill-creator): run_eval.py always reports 0% recall** | Fixes the core evaluation script so that skill‑trigger detection works on Windows/Linux, restores meaningful recall/precision metrics, and enables the description‑optimization loop. | • Multiple reproductions of the “0 % recall” bug (>10 reports). <br>• Thread covers Windows stream‑reading, parallel‑worker handling, and test‑artifact installation. <br>• High‑impact because it unblocks all skill‑creator workflows. | **Open** (last update 2026‑06‑23) |
| **2** | [#514](https://github.com/anthropics/skills/pull/514) | **Add document‑typography skill** | Provides typographic quality control for AI‑generated documents (orphan/widow prevention, numbering alignment). | • Emphasised as a “universal pain point” for any document Claude produces. <br>• Discussion includes concrete examples of orphan/widow cases and requests for configurable thresholds. | **Open** (last update 2026‑03‑13) |
| **3** | [#568](https://github.com/anthropics/skills/pull/568) | **Add ServiceNow platform skill** | Broad ServiceNow assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD, SPM, Vulnerability Response, Security Incident Response, IntegrationHub, etc. | • Long‑running PR with updates through August 2026, indicating active refinement. <br>• Contributors debate scope (scripting vs. full‑platform) and request sample workflows for common admin tasks. | **Open** (last update 2026‑08‑12) |
| **4** | [#1367](https://github.com/anthropics/skills/pull/1367) | **feat(skills): add self‑audit – mechanical verification + four‑dimension reasoning quality gate** | Skill that first checks that every claimed output file exists, then runs a reasoning audit (correctness, relevance, safety, style) before delivering results. | • Positioned as a “universal quality gate” usable with any project or model. <br>• Discussion touches on integrating the gate into `run_loop.py` and configuring severity thresholds. | **Open** (last update 2026‑07‑02) |
| **5** | [#723](https://github.com/anthropics/skills/pull/723) | **feat: add testing‑patterns skill** | Encapsulates testing philosophy (Testing Trophy), unit‑testing best practices, React component testing with Testing Library, and guidance on what *not* to test. | • Frequently referenced in related issues about test generation and CI integration. <br>• Contributors ask for examples covering Jest, Vitest, and Playwright. | **Open** (last update 2026‑04‑21) |
| **6** | [#486](https://github.com/anthropics/skills/pull/486) | **Add ODT skill – OpenDocument text creation, template filling, parse ODT → HTML** | Enables Claude to create, fill, read, and convert .odt/.ods files, plus a round‑trip to HTML for web preview. | • Highlighted as a missing open‑standard document skill; discussion covers LibreOffice compatibility and handling of embedded images. | **Open** (last update 2026‑04‑14) |
| **7** | [#538](https://github.com/anthropics/skills/pull/538) | **fix(pdf): correct case‑sensitive file references in SKILL.md** | Fixes eight case‑sensitivity mismatches that broke the PDF skill on case‑sensitive filesystems (Linux/macOS). | • Simple but critical fix; discussion notes CI failures on macOS runners and the importance of maintaining cross‑platform correctness. | **Open** (last update 2026‑04‑29) |
| **8** | [#210](https://github.com/anthropics/skills/pull/210) | **Improve frontend‑design skill clarity and actionability** | Rewrites the frontend‑design skill to use imperative, single‑turn instructions that Claude can follow reliably. | • Addresses feedback that the original skill was too verbose and ambiguous. <br>• Thread includes concrete before/after examples of button‑styling guidance. | **Open** (last update 2026‑03‑07) |

> **Note:** All listed PRs remain open; none have been merged as of the cut‑off date. The high update frequency (especially for #1298, #568, and #1367) signals ongoing community scrutiny and iteration.

---

## 2. Community Demand Trends (from Issues)

| Issue | Comments | Core theme | What the community is asking for |
|-------|----------|------------|---------------------------------|
| **[#492](https://github.com/anthropics/skills/issues/492)** | 43 | **Security / namespace trust** | Prevent community skills from being published under the `anthropic/` namespace to avoid impersonation and trust‑boundary violations. |
| **[#228](https://github.com/anthropics/skills/issues/228)** | 16 | **Org‑wide skill sharing** | A native way to share skills inside an organization (shared library or direct link) without manual file exchange. |
| **[#556](https://github.com/anthropics/skills/issues/556)** | 12 | **Skill trigger / evaluation reliability** | Fix `run_eval.py` so that skills are actually detected by `claude -p`; related to #1298, #1099, #1050. |
| **[#62](https://github.com/anthropics/skills/issues/62)** | 10 | **Skill persistence / visibility** | Skills disappearing after file moves or renames; request for more robust skill‑management UI. |
| **[#1329](https://github.com/anthropics/skills/issues/1329)** | 9 | **Compact memory / state notation** | A skill that provides a symbolic, low‑overhead way to store agent state (compact‑memory). |
| **[#202](https://github.com/anthropics/skills/issues/202)** | 8 | **Skill‑creator best practices** | Make the skill‑creator skill itself concise, action‑oriented, and compliant with naming guidelines. |
| **[#412](https://github.com/anthropics/skills/issues/412)** | 6 | **Agent governance / safety patterns** | Demand for a governance skill covering policy enforcement, threat detection, trust scoring, and audit trails. |
| **[#189](https://github.com/anthropics/skills/issues/189)** | 6 | **Duplicate skill installation** | Avoid installing identical skills when both `document-skills` and `example-skills` plugins are present. |
| **[#1487](https://github.com/anthropics/skills/issues/1487)** | 4 | **Context‑window bloat** | The `claude-api` skill injects ~156 k tokens, exhausting the context window; need lazy‑loading or trimming. |
| **[#1385](https://github.com/anthropics/skills/issues/1385)** | 4 | **Reasoning quality‑gate pipeline** | Interest in a multi‑gate QA pipeline (pre‑task calibration → adversarial review → delivery verification). |
| Others (≤4 comments each) | – | **Platform‑specific asks** | Bedrock support, exposing skills as MCPs, fixing docx whitespace, SharePoint handling, web‑artifacts builder fixes. |

**Trend synthesis:**  
The community’s most vocal concerns cluster around **(1) reliable skill detection/evaluation**, **(2) security and namespace hygiene**, **(3) organizational sharing and skill‑management ergonomics**, and **(4) quality‑assurance mechanisms (self‑audit, reasoning gates, governance).**  

---

## 3. High‑Potential Pending Skills  
*Open PRs with noticeable recent activity and clear community interest that are likely to be merged soon.*

| PR | Skill | Why it’s likely to land soon |
|----|-------|------------------------------|
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | Fixes `run_eval.py` recall/precision | Unblocks the entire skill‑creator feedback loop; multiple maintainers have already tested the fix on Windows/Linux. |
| **[#514](https://github.com/anthropics/skills/pull/514)** | Document‑typography skill | Addresses a universally‑relevant pain point (typographic defects) and has a clean, self‑contained implementation. |
| **[#568](https://github.com/anthropics/skills/pull/568)** | ServiceNow platform skill | Ongoing refinement through August 2026 shows maintainer engagement; the skill fills a major enterprise‑automation gap. |
| **[#1367](https://github.com/anthropics/skills/pull/1367)** | Self‑audit quality gate | Aligns with the community’s demand for automated reasoning verification; discussion indicates readiness for a v1.3.0 release. |
| **[#723](https://github.com/anthropics/skills/pull/723)** | Testing‑patterns skill | Directly supports the frequent request for better test‑generation guidance; minimal external dependencies. |
| **[#486](https://github.com/anthropics/skills/pull/486)** | ODT skill | Completes the set of open‑document‑format skills (ODT/ODS) alongside existing PDF/DOCX offerings. |
| **[#538](https://github.com/anthropics/skills/pull/538)** | PDF case‑sensitivity fix | Small, low‑risk change that restores PDF skill functionality on Linux/macOS CI pipelines. |
| **[#210](https://github.com/anthropics/skills/pull/210)** | Frontend‑design clarity improvement | Straightforward wording tweaks that make the skill immediately actionable; no behavioral changes required. |

---

## 4. Skills Ecosystem Insight  
*The community’s most concentrated demand right now is for **trustworthy, cross‑platform skill evaluation and quality‑gating mechanisms**—that is, reliable trigger detection, secure namespace handling, and automated reasoning/self‑audit checks that let users confidently deploy and share Skills across Windows, macOS, and Linux environments.*  

---  

*All links point to the official `anthropics/skills` repository on GitHub.*

---

**Claude Code Community Digest – 2026‑08‑22**  
*Anthropics / claude-code*  

---

### 1. Today's Highlights  
- **Release v2.1.239** adds cost‑estimate awareness for the 1.1× US‑only‑inference premium applied to data‑residency workspaces and rolls out a one‑time fullscreen renderer offer for Bedrock, Vertex, Foundry and other previously excluded setups.  
- The issue tracker shows a wave of **closed “false‑positive” AUP blocks** (mostly flagged by the Fable 5 model) that halted legitimate developer work—security audits, UI/3D polishing, trading‑bot updates, and routine code‑quality checks—sparking frustration despite low comment counts.  

---

### 2. Releases  
**v2.1.239** – *What’s changed*  
- **Cost estimates** (`/cost`, status line, `--max-budget-usd`) now include the **1.1× US‑only‑inference premium** for data‑residency workspaces, giving teams visibility into the extra charge when running workloads in US‑only regions.  
- **One‑time fullscreen renderer offer** has been enabled for Bedrock, Vertex, Foundry and other setups that were previously excluded; new installations in those environments will start in fullscreen mode by default.  
[Release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.239)  

---

### 3. Hot Issues (10 noteworthy)  

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| #73182 | [Safeguards block fired on resuming a defensive vulnerability scrub of user's own healthcare web app](https://github.com/anthropics/claude-code/issues/73182) | AUP block halted a **authorized security‑hardening** session on a healthcare app, illustrating how safety filters can impede legitimate defensive work. | 5 comments, 0 👍 – closed as duplicate. |
| #73126 | [Blocked decompiling own drone app to build FOSS ground‑control station](https://github.com/anthropics/claude-code/issues/73126) | Shows the model treating **legitimate reverse‑engineering for open‑source tooling** as a cyber‑security violation. | 4 comments, 0 👍 – closed as duplicate. |
| #73172 | [Deploying validated trading‑bot sizing upgrade plus dashboard 3D visual polish flagged as AUP](https://github.com/anthropics/claude-code/issues/73172) | AUP interruption during **financial‑trading feature work** raises concerns about over‑blocking of algo‑trading development. | 3 comments, 0 👍 – closed. |
| #73171 | [Blocked while auditing code that integrates with a shared internal module after a recent auth‑flow](https://github.com/anthropics/claude-code/issues/73171) | Highlights false positives on **routine internal‑module audits**, a common developer activity. | 3 comments, 0 👍 – closed. |
| #73168 | [Blocked while auditing recent commits' interactions with a companion service after a QR/passkey feature](https://github.com/anthropics/claude-code/issues/73168) | Demonstrates how **post‑commit security reviews** get caught by the safeguard. | 3 comments, 0 👍 – closed. |
| #73169 | [Safeguards blocked a routine code audit of recent changes touching an internal subsystem](https://github.com/anthropics/claude-code/issues/73169) | Another example of **standard code‑quality audits** being mis‑flagged. | 3 comments, 0 👍 – closed. |
| #73212 | [Safeguards block UI feedback on card glass/emboss styling and hero photo crossfade transition effect](https://github.com/anthropics/claude-code/issues/73212) | Shows the model interpreting **innocent UI polish** as a policy violation. | 3 comments, 0 👍 – closed. |
| #73145 | [ClAudit false‑positive in GlassFalcon](https://github.com/anthropics/claude-code/issues/73145) | Specific to the **GlassFalcon** project; indicates a pattern of false positives in certain codebases. | 3 comments, 0 👍 – closed. |
| #73206 | [ClAudit false‑positive in com](https://github.com/anthropics/claude-code/issues/73206) | Similar false‑positive pattern in the “com” module, reinforcing the need for model tuning. | 3 comments, 0 👍 – closed. |
| #73211 | [Safeguards blocked a routine security audit of the user's own website backend infrastructure](https://github.com/anthropics/claude-code/issues/73211) | Security‑audit workflows repeatedly interrupted, impacting **dev‑sec‑ops** pipelines. | 3 comments, 0 👍 – closed. |

*Overall trend:* The majority of recent activity revolves around **false‑positive AUP blocks** (mostly flagged by the Fable 5 model) that halt sessions for legitimate work—security audits, UI/3D enhancements, financial‑tool updates, and routine code reviews. Though comment counts are low, the recurrence signals a systemic tuning issue rather than isolated incidents.

---

### 4. Key PR Progress  
*No pull requests were updated in the last 24 hours.*  

---

### 5. Feature Request Trends  
From the issue titles and summaries, the community is implicitly asking for:  

1. **Reduced false‑positive AUP blocks** – better discrimination between legitimate security/dev activity and policy‑violating content.  
2. **Granular override or appeal mechanism** – a way for developers to quickly resume a halted session after a verified false positive (e.g., a “trust this session” button).  
3. **Model‑specific tuning controls** – ability to adjust sensitivity of the Fable 5 safeguard per project or workspace.  
4. **Improved logging / traceability** – clearer details on why a block was triggered (beyond the generic Request ID) to aid debugging and future model improvement.  
5. **Cost‑transparency enhancements** – the new cost‑estimate feature is welcomed; further requests likely include granular breakdowns by model, token type, and residency premium.  

---

### 6. Developer Pain Points  
- **Workflow interruption** – AUP false positives cause abrupt session halts, forcing developers to restart or re‑authenticate, breaking concentration.  
- **Lack of immediate remediation** – Current process requires filing an issue or waiting for a maintainer to label it as duplicate; no in‑tool “undo” or “override”.  
- **Perceived over‑cautiousness** – Security‑focused work (vulnerability scanning, dependency audits, internal‑module reviews) is repeatedly blocked, eroding trust in the safeguard system.  
- **Limited visibility into block rationale** – Developers receive only a generic “session‑halted” notice, making it hard to adjust code or configuration to avoid future blocks.  
- **Cost‑awareness gaps** – While the latest release adds premium‑aware estimates, teams still desire proactive budget alerts before hitting limits.  

---  

*Generated for technical developers seeking a concise, actionable snapshot of Claude Code’s recent activity.*  
*All links point to the corresponding GitHub items.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest – 2026‑08‑22**

---

### 1. Today’s Highlights
- A wave of **rust‑v0.150.0‑alpha** prereleases (α.2 – α.5) landed, signalling active work on the Codex CLI’s Rust toolchain.  
- The most‑discussed bugs continue to revolve around **macOS/Windows desktop stability** (OOM crashes, auth invalidation, sandbox fall‑backs) and **remote‑control reliability** (Android/iOS disconnects, QR‑pairing failures).  
- Closed PRs show a focused push to **harden sandbox/permission handling**, expose **browser & computer‑use policies**, and add **Amazon Bedrock setup** in the app‑server, indicating upcoming enterprise‑grade configuration capabilities.

---

### 2. Releases
| Version | Type | Notes |
|---------|------|-------|
| **rust‑v0.150.0‑alpha.5** | Prerelease | Latest rust‑toolchain update for the Codex CLI. |
| rust‑v0.150.0‑alpha.3 | Prerelease | Intermediate alpha build. |
| rust‑v0.150.0‑alpha.2 | Prerelease | Early α‑series. |
| rust‑v0.149.0‑alpha.7.1 | Prerelease | Patch on the 0.149 line. |
| rust‑v0.149.0‑alpha.4.1 | Prerelease | Earlier patch. |

*All are pre‑release alphas; no stable version was published in the last 24 h.*

---

### 3. Hot Issues (top‑10 by comment count)

| # | Issue | Comments / 👍 | Why it matters |
|---|-------|---------------|----------------|
| **[#38455](https://github.com/openai/codex/issues/38455)** | macOS Desktop repeatedly spawns Computer Use workers → V8 OOM crash | 35 / 15 | Critical stability regression on Apple Silicon; renders the app unusable after ~90 s idle. |
| **[#39162](https://github.com/openai/codex/issues/39162)** | Opening an existing conversation invalidates auth & redirects to sign‑in (macOS) | 31 / 22 | Breaks workflow for users with saved chats; high‑impact auth bug affecting many macOS users. |
| **[#25220](https://github.com/openai/codex/issues/25220)** | Bundled plugins (Computer Use, Browser, Chrome, LaTeX) unavailable on Windows due to copyfile failure on EFS‑encrypted *WindowsApps* | 27 / 4 | Blocks core extensibility for Windows Enterprise environments that enforce encryption. |
| **[#15310](https://github.com/openai/codex/issues/15310)** | Desktop automations fall back to `workspace-write` sandbox regardless of config (only corrected after manual UI entry) | 21 / 16 | Security‑policy bypass; scheduled tasks run with excess privileges until user intervention. |
| **[#34499](https://github.com/openai/codex/issues/34499)** | Cannot create a local Work chat inside a ChatGPT Project (Windows Desktop) | 17 / 10 | Hinders project‑based collaboration; a regression introduced in July 2026 release. |
| **[#35259](https://github.com/openai/codex/issues/35259)** | Codex Desktop repeatedly re‑enters the model during wait/status polling, burning credits | 15 / 8 | Cost‑impact bug for Ultra / multi‑agent workloads; users report ~20 % of token spend wasted on idle polling. |
| **[#37674](https://github.com/openai/codex/issues/37674)** | Native Bedrock Codex GPT‑5.6 Sol lacks explicit cache controls → high cache‑write spend | 12 / 12 | Cost‑optimization request; enabling prompt caching would reduce Bedrock usage fees. |
| **[#39856](https://github.com/openai/codex/issues/39856)** | Windows Remote: QR pairing succeeds but Android clients cannot establish session (`nextConnectionCount=0`) | 8 / 0 | Remote‑control usability regression affecting cross‑device workflows. |
| **[#39947](https://github.com/openai/codex/issues/39947)** | Android Remote becomes unusable: Windows host appears disconnected; long tasks do not open | 8 / 3 | Mirrors #39856; indicates broader Android‑remote stability problem. |
| **[#33398](https://github.com/openai/codex/issues/33398)** | Codex Desktop stops prematurely after context/task handoff, waiting for a new request | 8 / 6 | Interrupts agent continuity; forces users to re‑prompt to resume work. |

*Community reaction:* Up‑votes correlate with severity; macOS OOM and auth bugs have the strongest support, while Windows plugin‑availability and remote‑connectivity issues draw steady concern despite lower 👍 counts.

---

### 4. Key PR Progress (selected closed PRs)

| PR | Summary | Impact |
|----|---------|--------|
| **[#40024](https://github.com/openai/codex/pull/40024)** | Honor granular sandbox approvals in unified exec – escalated commands now prompt when `sandbox_approval` is enabled. | Fixes the silent sandbox fallback seen in #15310; improves security‑policy enforcement. |
| **[#40021](https://github.com/openai/codex/pull/40021)** | Cancel Guardian reviews with their tool calls – propagation of cancellation tokens aborts pending reviews. | Prevents stale approval blocks when tools are interrupted, reducing UI freezes. |
| **[#40020](https://github.com/openai/codex/pull/40020)** | Add end‑to‑end tests for executor Stop hooks. | Increases reliability of cleanup logic for long‑running agents (helps #35259 polling waste). |
| **[#40018](https://github.com/openai/codex/pull/40018)** | Add browser and computer‑use configuration (typed settings for history, CDP, AUMID, etc.). | Lets admins fine‑tune plugin permissions via config, addressing #25220 and similar plugin‑availability complaints. |
| **[#40007](https://github.com/openai/codex/pull/40007)** | Implement Amazon Bedrock setup in the app server (discover/aws profiles, region persistence). | Direct response to #37674 – enables explicit cache‑control and credential management for Bedrock users. |
| **[#40015](https://github.com/openai/codex/pull/40015)** | Harden remote installed‑plugin cache reconciliation – scopes snapshots to active account, discards in‑flight loads on account change. | Mitigates token‑leakage and auth‑conflict issues seen in remote‑control sessions. |
| **[#40013](https://github.com/openai/codex/pull/40013)** | Reuse Guardian reviews in async risk scoring – retains evidence from sync reviews for classifier samples. | Improves speed and consistency of risk decisions, lowering latency for tool approvals. |
| **[#40005](https://github.com/openai/codex/pull/40005)** | Route escalated commands through synchronous Guardian review – ensures `require_escalated` always gets full review. | Closes a loophole that allowed privileged commands to bypass review, enhancing security. |
| **[#39999](https://github.com/openai/codex/pull/39999)** | Hide Fast mode status for unsupported models – prevents misleading “Fast off” display. | Small UX polish that reduces confusion when switching models. |
| **[#39994](https://github.com/openai/codex/pull/39994)** | Add Guardian internal session support – extension API for host‑owned internal sessions & `ThreadReadyInput` callback. | Lays groundwork for better auditability and session‑level policy enforcement. |

---

### 5. Feature Request Trends (derived from issue titles & discussions)

| Trend | Evidence |
|-------|----------|
| **Improved Remote‑Control Stability** | Multiple recent issues (#39856, #39947, #39954, #39931) cite QR‑pairing success but session drop‑off; community asks for resilient reconnection and better state sync. |
| **Fine‑Grained Sandbox / Permission Controls** | #15310, #40024, #40004, #40018 reflect demand for per‑app, per‑origin, and granular deny‑read rules that persist across updates. |
| **Auth & Session Persistence** | #39162 (macOS auth invalidation) and several Windows‑auth tokens‑dropping issues (#39850) highlight need for reliable token refresh and cached‑credential handling. |
| **Cost Management & Rate‑Limit Transparency** | #35259 (polling waste), #37674 (Bedrock cache‑write), #38728 (quota meter spikes) show users want clearer usage metering and options to curb unnecessary model calls. |
| **Plugin Availability on Encrypted/Enterprise Windows** | #25220, #30529 (WSL clipboard), #39225 (missing `load_workspace_dependencies`) point to a need for better handling of protected file systems and WSL integration. |
| **Unified Cross‑Platform UI/UX** | Reports of macOS‑specific OOM, Windows‑specific sandbox breakage, and Android/iOS remote disconnects suggest a desire for a more consistent experience across OSes. |

---

### 6. Developer Pain Points

- **Unpredictable Crashes & OOM** (macOS Desktop, Computer Use workers) – forces frequent restarts and erodes trust in long‑running agents.  
- **Authentication Flakiness** (token invalidation on conversation open, silent drops in remote sessions) – disrupts automated workflows and requires manual re‑login.  
- **Sandbox Policy Drift** (automations reverting to `workspace-write`, deny‑read state files persisting after reinstall) – creates security concerns and complicates CI/CD pipelines that rely on deterministic permissions.  
- **Remote‑Control Fragility** (Android/iOS disconnects, QR‑pairing success but no session, reconnect loops) – limits the viability of Codex as a cross‑device development assistant.  
- **Cost Overruns from Idle Polling** (model re‑entry during wait/status loops) – especially painful for Pro/Enterprise users on strict budgets.  
- **Plugin & Feature Availability Gaps** (bundled plugins not loading on encrypted Windows, missing `load_workspace_dependencies`, clipboard issues in WSL) – hinders adoption in enterprise and developer‑environment‑specific setups.  
- **Lack of Transparent Usage Metering** (quota jumps, inaccurate Pro‑tier limits) – makes it difficult to forecast expenses and optimize agent behavior.  

Addressing these pain points through the ongoing sandbox hardening, remote‑control reliability work, Bedrock cache‑control enhancements, and more robust auth/session handling will be key to the next stable release.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI Community Digest – 2026‑08‑22**  

---

### 1. Today's Highlights
- A new nightly release **v0.56.0-nightly.20260821.g30573d2e4** landed, fixing symlink handling in ignore‑path logic and cleaning up the shell execution service (removing unnecessary `eslint-disable` directives and type‑asserts).  
- Community discussion remains focused on agent reliability: sub‑agent recovery after hitting turn limits, generalist agent hangs, and memory‑system quirks continue to draw the most comments and reactions.  
- PR activity is dominated by the PR‑generation pipeline (Cloud Run jobs, workflow orchestration, diff visualizers, and evaluation harnesses), indicating a push toward automated PR creation and evaluation infrastructure.

---

### 2. Releases
**v0.56.0-nightly.20260821.g30573d2e4**  
- **fix(core)**: Ensure consistent symlink evaluation when processing ignore paths ([#28915](https://github.com/google-gemini/gemini-cli/pull/28915)).  
- **refactor(core)**: Strip `eslint-disable` comments and unsafe type‑asserts from `shellExecutionService.ts` ([#28862](https://github.com/google-gemini/gemini-cli/pull/28862)).  

*(No other stable releases were published in the last 24 h.)*

---

### 3. Hot Issues (10)

| Issue | Why it matters | Community reaction |
|-------|----------------|--------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) – Subagent recovery after MAX_TURNS reported as GOAL success | Masks failures; users cannot distinguish a true goal completion from a turn‑limit abort, leading to silent data loss. | 13 comments, 👍 2 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) – Generalist agent hangs | Causes indefinite stalls on simple tasks (e.g., folder creation); forces users to disable sub‑agent delegation. | 8 comments, 👍 8 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) – Leverage model’s bash affinity via zero‑dependency OS sandboxing | Aims to unlock the model’s native shell‑tool proficiency while preserving security; high impact on agent efficiency. | 8 comments, 👍 1 |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) – Robust component‑level evaluations | Tracks the need for reliable, granular evals to guard regressions as the codebase grows. | 7 comments |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) – Assess impact of AST‑aware file reads/search/mapping | Could drastically reduce token usage and turn count by enabling precise code navigation. | 7 comments, 👍 1 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) – Gemini does not use skills and sub‑agents enough | Limits extensibility; users must manually invoke skills, reducing the agent’s autonomy. | 6 comments |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) – Stop Auto Memory from retrying low‑signal sessions indefinitely | Prevents wasted resources and log noise when the extraction agent deems a session uninformative. | 5 comments |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) – Shell command execution stuck with “Waiting input” after completion | Breaks the feedback loop; forces manual interruption and harms trust in automated tool use. | 4 comments, 👍 3 |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) – Enhance browser_agent resilience: automatic session takeover & lock recovery | Improves reliability of browser‑based agents in shared or persistent‑profile environments. | 4 comments |
| [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) – `~/.gemini/agents/filename.md` not recognized as an agent if symlink | Blocks a common workflow for managing agent definitions via dotfiles; limits configurability. | 4 comments |

---

### 4. Key PR Progress (10)

| PR | Summary |
|----|---------|
| [PR #28955](https://github.com/google-gemini/gemini-cli/pull/28955) | Updates dependencies, adds MCP configuration, and integrates ECC bundles – foundational tooling for future releases. |
| [PR #28951](https://github.com/google-gemini/gemini-cli/pull/28951) | Adds Cloud Run job, Workflow orchestration, and deployment script for the PR‑generation pipeline – moves toward fully automated PR creation. |
| [PR #28953](https://github.com/google-gemini/gemini-cli/pull/28953) | Provides a helper (`create_pr_from_diff.py`) to turn evaluation diffs into PRs, plus unit tests – streamlines the PR‑generation feedback loop. |
| [PR #28952](https://github.com/google-gemini/gemini-cli/pull/28952) | Generates an interactive HTML diff visualizer (`generate_diff_viewer.py`) for side‑by‑side comparison of agent vs. ground‑truth changes. |
| [PR #28948](https://github.com/google-gemini/gemini-cli/pull/28948) | Introduces the PR‑generation evaluation harness and end‑to‑end benchmark runner – enables reproducible performance measurement. |
| [PR #28949](https://github.com/google-gemini/gemini-cli/pull/28949) | Adds an LLM‑as‑a‑Judge diff evaluation module and rubric – automates quality scoring of generated PRs. |
| [PR #28934](https://github.com/google-gemini/gemini-cli/pull/28934) | Optimizes history rollback and retry nudges to cut context‑window bloat and API usage on tool cancellations. |
| [PR #28940](https://github.com/google-gemini/gemini-cli/pull/28940) | Clears stale A2A cancellation errors to stop “Execution aborted” crashes on new message turns. |
| [PR #28862](https://github.com/google-gemini/gemini-cli/pull/28862) | (See Release notes) Removes `eslint-disable` and unsafe type‑asserts from shell execution service – improves code hygiene. |
| [PR #28935](https://github.com/google-gemini/gemini-cli/pull/28935) | Isolates Docker/container runtime sockets and binaries inside macOS Seatbelt sandbox – strengthens security against sandbox escapes. |

---

### 5. Feature Request Trends
- **AST‑aware tooling** (issues #19873, #22745, #22746) – community wants precise navigation/refactoring to save tokens and turns.  
- **Sub‑agent orchestration & visibility** (issues #21968, #22598, #22323) – requests for better skill/sub‑agent usage, trajectory sharing, and accurate failure reporting.  
- **Memory & Auto‑Memory reliability** (issues #26522, #26523, #26525, #26516) – deterministic redaction, low‑signal handling, and quarantine of bad patches.  
- **Browser/agent resilience** (issues #22232, #21983, #22267) – automatic session takeover, lock recovery, and respect for `settings.json` overrides.  
- **Evaluation harness expansion** – numerous PRs adding Cloud Run jobs, diff visualizers, LLM judges, and end‑to‑end benchmarks indicate a shift toward automated PR generation and quality gating.

---

### 6. Developer Pain Points
- **Agent hangs / unresponsiveness** – generalist agent stalls (#21409) and shell commands showing “Waiting input” after finish (#25166).  
- **Misreported sub‑agent outcomes** – turn‑limit aborts labeled as GOAL success (#22323) erodes trust in autonomous flows.  
- **Inadequate sub‑agent skill usage** – users must explicitly invoke skills; the agent rarely picks them up organically (#21968).  
- **Memory system noise** – Auto Memory repeatedly retries low‑signal sessions and lacks deterministic redaction (#26522, #26525).  
- **Tool‑limit errors** – >128 tools trigger 400 errors (#24246), forcing manual pruning of available tools.  
- **Configuration bypass** – browser agent ignores `settings.json` overrides like `maxTurns` (#22267), reducing predictability.  

These recurring themes point to a need for more robust state handling, clearer success/failure signaling, and tighter integration of user‑provided configuration and skills.  

---  

*Generated from GitHub activity for google‑gemini/gemini-cli (2026‑08‑21 → 2026‑08‑22).*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest – 2026‑08‑22**  

---  

### 1. Today’s Highlights  
- The latest CLI release (v1.0.81‑7) adds automatic session‑restore on startup, enriches `models.list` with service‑published info/warning messages, and introduces a new `copilot app` command to launch the GUI.  
- Community discussion is heating up around **multi‑BYOK model support** and **in‑session model switching**, both of which have gathered dozens of up‑votes and comments in the last 24 h.  
- Persistent UX annoyances (Windows console flashing, theme drift, clipboard loss over SSH, and sandbox‑disable bugs) continue to generate high‑frequency reports.  

---  

### 2. Releases  
**v1.0.81‑7** (released within the last 24 h)  
- **Session restore** – On startup the CLI now offers to reopen sessions that were still open when the process exited, eliminating the need to manually recreate terminals after a crash or reboot.  
- **Enhanced model metadata** – `copilot models.list` now includes each model’s `infoMessages` and `warningMessages` as published by the service, giving users richer context before selection.  
- **New `copilot app` sub‑command** – Opens the Copilot desktop GUI directly from the terminal, streamlining the switch between CLI and GUI workflows.  

*Release notes:* https://github.com/github/copilot-cli/releases/tag/v1.0.81-7  

---  

### 3. Hot Issues (10 picks)  

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| [#3282](https://github.com/github/copilot-cli/issues/3282) | **Add multiple BYOK model capability** – Users want to configure more than one Bring‑Your‑Own‑Key model via env vars and switch them inside the TUI without restarting. | 8 comments, 26 👍 – High demand for flexible enterprise‑grade model usage. |
| [#3709](https://github.com/github/copilot-cli/issues/3709) | **Allow `/model` to switch between multiple models (including BYOK/local)** – Current `/model` picker only shows GitHub‑hosted models, locking BYOK sessions to a single model. | 4 comments, 27 👍 – Strong interest in seamless model switching mid‑session. |
| [#1313](https://github.com/github/copilot-cli/issues/1313) | **Session Branching** – Ability to fork a session, preserving history while diverging work streams. | 7 comments, 13 👍 – Enables experimental workflows without losing context. |
| [#4345](https://github.com/github/copilot-cli/issues/4345) | **Reasoning effort ‘medium’ not supported for model `claude-haiku-4.5`** – Causes repeated execution errors when certain feature flags are active. | 8 comments, 4 👍 – Blocks users who rely on medium‑effort reasoning for complex tasks. |
| [#4211](https://github.com/github/copilot-cli/issues/4211) | **BigInt serialization error in MCP responses** – CLI crashes with `TypeError: Do not know how to serialize a BigInt` when MCP servers return large integers. | 5 comments, 3 👍 – Affects any workflow using MCP tools that return big numbers (e.g., timestamps, IDs). |
| [#4521](https://github.com/github/copilot-cli/issues/4521) | **Sandbox cannot be disabled** – UI shows sandbox disabled but execution still attempts to use it, causing permission errors. | 3 comments, 4 👍 – Security‑conscious users need a reliable off‑switch. |
| [#4485](https://github.com/github/copilot-cli/issues/4485) | **Theme turns light overnight** – Dark theme reverts to light after macOS sleep/wake cycles, breaking visual consistency. | 2 comments, 2 👍 – Annoying for developers who prefer a stable dark UI. |
| [#4549](https://github.com/github/copilot-cli/issues/4549) | **Windows: every shell command spawns a visible PowerShell console** – Causes focus stealing and visual noise during intensive agent use. | 1 comment, 0 👍 – Frequently reported by Windows power users. |
| [#4550](https://github.com/github/copilot-cli/issues/4550) | **Clickable file links for IDEs beyond VS Code** – Users of Visual Studio 2026 (or other IDEs) want terminal file paths to open directly in their editor. | 0 comments, 0 👍 – Growing request as CLI adoption spreads to non‑VS Code editors. |
| [#4551](https://github.com/github/copilot-cli/issues/4551) | **Remote SSH clipboard reports success but macOS clipboard stays empty** – Copy‑actions from a remote Linux session fail to transfer to the host macOS clipboard. | 0 comments, 0 👍 – Hinders cross‑platform workflows that rely on clipboard sharing. |

---  

### 4. Key PR Progress  
No pull requests were updated in the last 24 h (the repository shows 0 PR activity). Development focus appears to be on issue triage and release preparation rather than open PRs at this moment.  

---  

### 5. Feature Request Trends  
From the open issues, the most‑requested directions are:  

1. **Multi‑model & BYOK flexibility** – Ability to configure, list, and switch between multiple custom models (including local providers) without restarting the session.  
2. **Session management enhancements** – Branching, reliable restore after crashes/power‑loss, and improved resume picker (e.g., disabling repo‑scope grouping).  
3. **MCP reliability** – Proper handling of BigInt payloads, ensuring workspace‑level `.mcp.json` files are actually connected in agent sessions, and fixing stale config reloads.  
4. **UX polish** – Persistent theme/dark‑mode, disabling sandbox reliably, eliminating Windows console flashes, and restoring clipboard functionality over SSH.  
5. **IDE‑agnostic integration** – Clickable file links that work with editors other than VS Code, and better ACP (agent‑control‑protocol) behavior for cancellation and background task handling.  

---  

### 6. Developer Pain Points  
Recurring frustrations highlighted by the community:  

- **Session loss** after unexpected exits or system sleeps, forcing users to manually reconstruct workspaces.  
- **Limited BYOK usability** – Single‑model lock‑in and the need to restart the CLI to change providers.  
- **Type‑safety gaps** in MCP interactions (BigInt, serialization) leading to abrupt aborts.  
- **Sandbox configuration drift** – UI state not matching actual execution sandbox status.  
- **Platform‑specific glitches** – Windows console flashing, macOS theme switching, and clipboard failures over SSH.  
- **MCP discovery vs. connection mismatch** – Workspace MCP servers appear enabled but are not injected into the agent runtime.  
- **Reasoning‑effort configuration opacity** – Certain models (e.g., Claude Haiku 4.5) reject medium effort, causing silent failures.  

Addressing these areas will likely yield the highest satisfaction gains for the Copilot CLI user base.  

---  

*Generated for internal developer‑tooling awareness. All links point to the official github.com/github/copilot-cli repository.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest – 2026‑08‑22**  
*Source: github.com/MoonshotAI/kimi-cli*  

---

### 1. Today's Highlights
No new releases were published in the last 24 hours. The community’s activity centered on a single open bug concerning background sub‑agents that continue to issue LLM calls after being marked terminal, and a documentation PR that clarifies plugin security and persistent‑data handling.

### 2. Releases
*None* – no version tags were created or updated in the past day.

### 3. Hot Issues  
| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| [#2615](https://github.com/MoonshotAI/kimi-cli/issues/2615) | **Background subagent keeps making LLM calls after TaskStop/timeout marks it terminal** | A stray sub‑agent can consume quota invisibly, evading normal termination mechanisms and potentially leading to unexpected costs or resource exhaustion. | Opened 2026‑08‑21, no comments or reactions yet; the issue highlights a critical reliability gap that needs immediate attention. |

### 4. Key PR Progress  
| # | PR | Description |
|---|----|-------------|
| [#2614](https://github.com/MoonshotAI/kimi-cli/pull/2614) | **docs(plugins): document security and persistent data** | Adds guidance that plugin tools run as local subprocesses with the user’s file/network access, explains credential handling for the `inject` mechanism, warns against logging/committing injected values, clarifies that reinstalling a plugin replaces its installed directory, and recommends a separate data directory for persistence. |

### 5. Feature Request Trends  
No feature‑request‑type issues were updated in the last 24 hours, so there are no discernible trends to report at this time.

### 6. Developer Pain Points  
- **Invisible quota consumption:** The background sub‑agent bug (#2615) shows that once a task is marked terminal, the CLI loses the ability to stop it, leading to hidden LLM usage and potential cost overruns.  
- **Documentation clarity:** The recent PR (#2614) reflects a recurring need for clearer security and data‑handling guidance when extending the CLI with plugins, indicating developers often struggle with understanding the sandbox boundaries and credential safety of plugin tools.  

---  

*End of digest.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-08-22

## Today's Highlights
Two patch releases (v1.18.20 and v1.18.21) addressed critical stability issues, including handling unknown model finish reasons and Vertex AI routing improvements. Community focus remains on streaming mode compatibility (Issue #785: 31 comments, 38👍) and session reliability, with empty LLM responses causing silent exits (Issue #41469). Feature requests for cost transparency (#14524) and session archiving (#24153) continue gaining traction.

## Releases
**v1.18.21**  
- Core: Fixed early termination on unknown model finish reasons; routed Vertex AI multi-region Gemini requests via REP endpoints for reliability.  
**v1.18.20**  
- Core: Improved subagent failure visibility with resumable `task_id`; enhanced network error retries (including `network-error` variants).  
- Desktop: Maintained file search visibility during subsequent searches; resolved UI freezing during large file diffs on Windows.

## Hot Issues
1. **[#785](https://github.com/anomalyco/opencode/issues/785)** - *Disable streaming mode?*  
   **Why matters:** Users with non-streaming proxies (e.g., Credal) face `AI_APICallError` blocking usage.  
   **Reaction:** 31 comments, 38👍 – High demand for proxy compatibility.  
2. **[#41469](https://github.com/anomalyco/opencode/issues/41469)** - *Session stops on empty LLM response*  
   **Why matters:** Zero-token responses with `finish: unknown` cause silent session exits, breaking workflows.  
   **Reaction:** 10 comments – Critical stability regression affecting reliability.  
3. **[#24153](https://github.com/anomalyco/opencode/issues/24153)** - *Add unarchive/restore for archived sessions*  
   **Why matters:** Archiving is currently one-way; users lose sidebar access to historical sessions.  
   **Reaction:** 9 comments, 11👍 – Strong interest in session lifecycle management.  
4. **[#14524](https://github.com/anomalyco/opencode/issues/14524)** - *Display model cost in model picker*  
   **Why matters:** Cost opacity hinders budget-conscious model selection in TUI.  
   **Reaction:** 5 comments, 10👍 – Clear demand for financial transparency.  
5. **[#34473](https://github.com/anomalyco/opencode/issues/34473)** - *Random response termination*  
   **Why matters:** Sessions abruptly stop mid-thought with no errors, requiring manual restarts.  
   **Reaction:** 5 comments, 3👍 – Persistent frustration with unpredictable behavior.  
6. **[#35376](https://github.com/anomalyco/opencode/issues/35376)** - *Lazy-load MCP tool definitions*  
   **Why matters:** All MCP server tools bloat prompts, wasting tokens with 9+ servers connected.  
   **Reaction:** 5 comments – Performance optimization for complex toolchains.  
7. **[#43829](https://github.com/anomalyco/opencode/issues/43829)** - *Deepseek-v4-flash-free unavailable*  
   **Why matters:** Model missing from free tier despite API listing, breaking user workflows.  
   **Reaction:** 5 comments – Highlights model availability gaps in provider integrations.  
8. **[#28492](https://github.com/anomalyco/opencode/issues/28492)** - *MaxListenersExceededWarning on web start*  
   **Why matters:** Event listener leaks suggest resource management issues in web interface.  
   **Reaction:** 7 comments, 2👍 – Indicates potential scalability concerns.  
9. **[#30906](https://github.com/anomalyco/opencode/issues/30906)** - *Windows UI freeze with large file diffs*  
   **Why matters:** Renderer locks in Electron on v1.16.0+ (regression from v1.15.13).  
   **Reaction:** 7 comments, 2👍 – Blocks core functionality for large-codebase users.  
10. **[#43805](https://github.com/anomalyco/opencode/issues/43805)** - *DeepSeek-v4-flash-free missing in Zen dropdown*  
    **Why matters:** Model exists in API/config but absent from TUI model picker.  
    **Reaction:** 4 comments – Recurring provider-specific UI sync issue.

## Key PR Progress
1. **[#38166](https://github.com/anomalyco/opencode/pull/38166)** - *feat(ai): support Gemini thinking levels*  
   Adds `thinkingLevel` config for Gemini 3.6 Flash, enabling granular reasoning control beyond legacy token budgets.  
2. **[#38082](https://github.com/anomalyco/opencode/pull/38082)** - *feat(todo): add Todo Sidebar with Linear integration*  
   Introduces project-scoped task management with Linear-style UI for issue tracking within OpenCode.  
3. **[#38079](https://github.com/anomalyco/opencode/pull/38079)** - *feat(app): support bidirectional chat text*  
   Fixes right-to-left language support via `dir="auto"` in message editors, improving i18n accessibility.  
4. **[#38071](https://github.com/anomalyco/opencode/pull/38071)** - *feat(config): allow partial override of built-in commands*  
   Lets `opencode.json` specify agents for commands like `/review` without full template replication.  
5. **[#43915](https://github.com/anomalyco/opencode/pull/43915)** - *fix(provider): guard textVerbosity injection*  
   Prevents incorrect `textVerbosity: "low"` application to non-Azure OpenAI-compatible providers (fixes #43911).  
6. **[#38115](https://github.com/anonymco/opencode/pull/38115)** - *fix(core): restore webfetch image output*  
   Returns fetched images as native file

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

**Pi Community Digest – 2026‑08‑22**  
*Technical analyst focus: AI developer tools*  

---

### 1. Today's Highlights  
The most active discussion revolves around compaction reliability – a bug that delays auto‑compaction until the provider overflows (#6879) has drawn 19 comments and 17 👍, signalling strong community impact. Parallelly, terminal‑input regressions (Backspace/Delete misbehaviour in Windows Terminal #2733 and Kitty #7130) continue to frustrate users, while several feature requests for per‑model compaction profiles (#8133) and configurable thinking levels (#7553) show a clear push toward finer‑grained control over token‑budget management.  

### 2. Releases  
*No new releases were published in the last 24 h.*  

### 3. Hot Issues (10 noteworthy)  

| # | Issue | Why it matters / Community reaction |
|---|-------|--------------------------------------|
| [#6879](https://github.com/earendil-works/pi/issues/6879) | **Auto‑compaction never triggers after context >100% until provider overflow** | Critical reliability bug: sessions can balloon to >300 k tokens before being rejected, wasting cost and risking OOM. High engagement (19 comments, 17 👍) reflects urgency. |
| [#2733](https://github.com/earendil-works/pi/issues/2733) | **Backspace and Delete keys don't work correctly in Windows Terminal** | Regression after 0.64.0 breaks basic editing for a large Windows user base. 11 comments indicate active troubleshooting. |
| [#7130](https://github.com/earendil-works/pi/issues/7130) | **Backspace deletes 2 chars in Kitty (Kitty protocol release events not filtered)** | Similar input‑handling flaw in Kitty terminal; 9 comments show it affects power‑users of this emulator. |
| [#7553](https://github.com/earendil-works/pi/issues/7553) | **Configurable thinking level/model for compaction** (in‑progress) | Users want to decouple compaction’s reasoning budget from the session’s thinking level to avoid wasting tokens on summarisation. 8 comments, steady interest. |
| [#7995](https://github.com/earendil-works/pi/issues/7995) | **openai‑responses: no cacheControlFormat ‘anthropic’ support — 2.5× measured cost penalty for Claude via OpenRouter** | Missing Anthropic‑style prompt caching forces full‑token reloads, directly inflating costs. 7 comments highlight a performance‑cost pain point. |
| [#6193](https://github.com/earendil-works/pi/issues/6193) | **Request(ui): Make "/exit" an alias for "/quit"** | Small usability tweak requested to align with other agents (Codex, Claude, OpenCode). 4 comments, 1 👍 – low friction but widely appreciated. |
| [#8133](https://github.com/earendil-works/pi/issues/8133) | **Per‑model compaction settings** | Request to let `compaction.profiles` override global reserves per model (e.g., larger reserve for big‑context models). 3 comments, 3 👍 – strong endorsement for flexibility. |
| [#8344](https://github.com/earendil-works/pi/issues/8344) | **Proposal: per‑tool output expansion in the fullscreen TUI** | Enables mouse‑driven collapse/expand of individual tool blocks, improving readability in long sessions. 4 comments show interest in richer UI controls. |
| [#8421](https://github.com/earendil-works/pi/issues/8421) | **Generalize the Termux keyboard‑resize exemption to any mobile client (mosh/SSH from iOS)** | Current code exempts only Termux from full redraw on height changes; extending this would reduce flicker for all mobile SSH users. 3 comments, indicating a niche but valid need. |
| [#4742](https://github.com/earendil-works/pi/issues/4742) | **Add SiliconFlow provider** | Adds support for a popular open‑source model host (Qwen, GLM, etc.) via OpenAI‑compatible API. 4 comments reflect demand for broader provider coverage. |

### 4. Key PR Progress (6 PRs updated in the last 24 h)  

| PR | Summary |
|----|---------|
| [#8443](https://github.com/earendil-works/pi/pull/8443) | **feat(interactive-mode): share via radius artifacts under experimental** – Makes `/share` use Radius artifacts when the experimental flag is set, falling back to auth flow if needed. |
| [#8433](https://github.com/earendil-works/pi/pull/8433) | **feat(coding-agent): add --exclude-extensions to skip named extensions** – Allows users to keep their default extension set while omitting specific third‑party extensions. |
| [#8428](https://github.com/earendil-works/pi/pull/8428) | **fix(coding-agent): re‑pair tool results when rebuilding session context** – Fixes session‑corruption bug (#8166) by correctly re‑associating tool results with their originating assistant messages during resume/compaction/branch navigation. |
| [#8424](https://github.com/earendil-works/pi/pull/8424) | **fix(coding-agent): discard failed extension factory state** – Guarantees that a failing extension factory does not leave staged state or listeners, preventing downstream errors. |
| [#8422](https://github.com/earendil-works/pi/pull/8422) | **fix(ai): omit reasoning effort for xAI Grok Build** – Adds a Responses‑compatibility flag to suppress `reasoning.effort` for `grok-build-0.1`, avoiding HTTP 400 rejections. |
| [#4537](https://github.com/earendil-works/pi/pull/4537) | **feat: Exit alias** – Implements `/exit` as an alias for `/quit` (closes #4538), updating docs and keybindings. |

*Note: Only six PRs were updated in the observed window; all are listed above.*

### 5. Feature Request Trends  
From the aggregated issues, the most‑requested directions are:  

1. **Compaction granularity** – per‑model reserves, configurable thinking levels for summarisation, manual full‑span compotion, and smarter default prompts that preserve continuation state.  
2. **Terminal & input robustness** – consistent Backspace/Delete behaviour across Windows Terminal, Kitty, and other emulators; generalized handling of mobile/resize events.  
3. **Provider extensibility** – adding new OpenAI‑compatible hosts (SiliconFlow, Parasail.io, etc.) and improving authentication flows (RPC login, scoped API‑key handling, MMDS credentials).  
4. **Cost & efficiency optimisations** – Anthropic‑style prompt caching for OpenRouter, retry logic for TLS/certificate errors, and avoidance of unnecessary reasoning effort for models that reject it.  
5. **UX & UI refinements** – per‑tool output expansion, sticky headers, configurable scroll sensitivity, and alias commands (`/exit`/`/quit`).  
6. **Session stability** – mitigating OOM crashes in long runs, better error handling for proxy‑mediated HTTP providers, and reliable state rebuild after interruptions.  

### 6. Developer Pain Points  
Recurring frustrations evident in the tracker:  

- **Terminal input inconsistencies** – developers repeatedly report broken editing keys in specific terminals, forcing work‑arounds or manual configuration.  
- **Unpredictable token usage** – the compaction bug (#6879) lets context windows grow unchecked, leading to surprise costs and occasional provider rejections.  
- **Lack of model‑specific tuning** – users want to decouple compaction settings and thinking levels from global defaults, especially when mixing reasoning‑heavy and lightweight models.  
- **Provider onboarding friction** – adding a new host often requires manual configuration; requests for first‑class login/RPC support highlight a desire for plug‑and‑play provider integration.  
- **UI scalability** – long sessions make it hard to navigate tool output; demands for collapsible blocks, sticky headers, and finer scroll control reflect a need for better information density management.  
- **Error‑handling gaps** – missing retry classification for transport errors and proxy‑related hangs cause session drops that require manual restart.  

---  

*Stay tuned for the next digest as the community continues to shape Pi’s evolution toward a more reliable, cost‑effective, and extensible AI coding assistant.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code Community Digest – 2026‑08‑22**  
*Compiled from GitHub activity (issues, PRs, releases) up to 2026‑08‑21.*

---

### 1. Today’s Highlights
- A new nightly release **v0.21.14‑nightly.20260821.9f2342d323** landed, delivering a key review‑loop enhancement that now explains *why* a review iteration fails to settle and a CI fix that stops an erroneous fallback path.  
- Ongoing discussions focus on **security‑hardening CI pipelines** (e.g., PAT‑bearing job isolation, dependency CVE audit failures) and **usability pain points** such as Chinese IME stability on Windows and MCP connection reliability.  
- The community is actively shaping the next wave of features: expanded UI detail mode, configurable read‑only command allow‑lists, session‑state restoration (model & HITL), and broader cross‑platform extension support (DingTalk, Electron‑hosted Web Shell).

---

### 2. Releases
| Version | Date | Highlights |
|---------|------|------------|
| **v0.21.14‑nightly.20260821.9f2342d323** | 2026‑08‑21 | • **feat(review)** – tells the author why a review loop is not settling (PR #9461). <br>• **fix(ci)** – stops the erroneous fallback CI step (truncated in log). <br>• Benchmark validation: SWE‑bench verified (SUCCEEDED) and Terminal‑Bench smoke passed for the new ref. |

*No stable releases were published in the last 24 h; the above nightly represents the latest upstream change.*

---

### 3. Hot Issues (10 picks)

| # | Title & Link | Why it matters | Community reaction |
|---|--------------|----------------|--------------------|
| **#9556** | [review: decide whether the pipeline should keep granting code execution as the invoking user](https://github.com/QwenLM/qwen-code/issues/9556) | Security‑core debate: CI pipelines currently run with the reviewer’s user token inside worktrees, enabling persistent code‑execution privileges. Deciding whether to drop this privilege impacts isolation and supply‑chain risk. | 7 comments, 0 👍 – active discussion among maintainers. |
| **#5180** | [主会话作为项目经理、派发任务，监控进度等。subagent做实际执行，但任务执行到一半就崩了](https://github.com/QwenLM/qwen-code/issues/5180) | Highlights instability of the multi‑agent workflow: the primary “manager” session spawns subagents that crash mid‑task, breaking long‑running automation. | 7 comments, 0 👍 – indicates a reproducible pain point for power users. |
| **#8993** | [Public extension installs require Git 2.37, but Ubuntu 22.04 apt provides only 2.34.1](https://github.com/QwenLM/qwen-code/issues/8993) | Blocks extension installation on a widely‑used LTS distro, forcing users to install Git from source or PPAs – a barrier to adoption. | 6 comments, 0 👍 – community urging a fallback or version‑tolerant install path. |
| **#5966** | [0.19.3 UI不定期错误，中文输入法完全无效](https://github.com/QwenLM/qwen-code/issues/5966) | Chinese IME intermittently disables, leaving users unable to input CJK characters without error feedback – a critical localization issue. | 6 comments, 0 👍 – frequent reports from Chinese‑speaking developers. |
| **#9089** | [autofix: PAT-bearing jobs share a host with untrusted branch code — needs runner‑level isolation](https://github.com/QwenLM/qwen-code/issues/9089) | Personal Access Token (PAT) used for autofix runs on the same runner as untrusted PR code, risking token leakage. Calls for runner‑level sandboxing. | 6 comments, 0 👍 – security‑focused discussion. |
| **#9693** | [Qwen Desktop reports MCP -32000 Connection closed at startup on Windows even when MCP is not activated](https://github.com/QwenLM/qwen-code/issues/9693) | MCP (Model Context Protocol) clients fail to start on Windows, emitting a generic connection‑closed error even when the feature is off, hindering out‑of‑the‑box usage. | 4 comments, 0 👍 – newly opened, rising attention. |
| **#9446** | [review: residual gaps in the live-service witness arm, and a graft for coexistence claims](https://github.com/QwenLM/qwen-code/issues/9446) | Points out missing verification steps in the review pipeline that could let unverified changes slip through, affecting trust in automated reviews. | 4 comments, 0 👍 – part of ongoing review‑hardening effort. |
| **#9168** | [Proposal: evaluate an isolated Electron host for Web Shell desktop](https://github.com/QwenLM/qwen-code/issues/9168) | Explores swapping the current Tauri‑based desktop shell for an Electron alternative to improve plugin compatibility and reduce binary size. | 4 comments, 1 👍 – interest from UI/UX contributors. |
| **#7167** | [Fleet Shepherd Dashboard](https://github.com/QwenLM/qwen-code/issues/7167) | Auto‑generated dashboard tracking fleet health (PRs, releases, cleanups). Stalled at zero activity, suggesting missing instrumentation or wiring. | 3 comments, 0 👍 – indicates a need for better observability tooling. |
| **#2862** | [Startup hangs on "Initializing..." when checkpointing is enabled](https://github.com/QwenLM/qwen-code/issues/2862) | Enabling checkpointing causes an infinite hang at startup, forcing users to disable the feature – a regression that impacts experiment reproducibility. | 3 comments, 0 👍 – recurring complaint in checkpoint‑related threads. |

---

### 4. Key PR Progress (10 picks)

| PR | Title & Link | Summary |
|----|--------------|---------|
| **#9596** | [feat(review): ask each fix for its test, and rule on non‑convergence](https://github.com/QwenLM/qwen-code/pull/9596) | Adds acceptance‑criteria metadata to each finding and forces the review loop to halt when fixes lack tests or fail to converge, reducing endless re‑review cycles. |
| **#9690** | [fix(core): support public GitHub extensions with older Git](https://github.com/QwenLM/qwen-code/pull/9690) | Implements a secure fallback: when system Git < 2.37, the CLI resolves the requested ref to an immutable commit and fetches it via the existing public‑asset pipeline, removing the hard Git‑version blocker. |
| **#9662** | [fix(autofix): include pending runs in the busy‑PR enumeration](https://github.com/QwenLM/qwen-code/pull/9662) | The autofix scanner now treats *pending* workflow runs as “busy”, preventing duplicate processing and reducing race‑condition noise in PR queues. |
| **#9513** | [fix(cli): Restore PR2A session behaviors](https://github.com/QwenLM/qwen-code/pull/9513) | Re‑installs the PR2A session lifecycle (save/resume) that was accidentally stripped, restoring expected daemon‑session semantics. |
| **#9566** | [fix(review): screen content filters before the probe tree's restore too (#9558)](https://github.com/QwenLM/qwen-code/pull/9566) | Ensures Git content filters (e.g., smudge/clean) are applied **before** the probe tree is reset, avoiding filter‑bypass during review‑workspace checkouts. |
| **#9576** | [feat(core): accept cross‑session messages behind an inbound gate](https://github.com/QwenLM/qwen-code/pull/9576) | Introduces a UNIX‑domain‑socket based IPC mechanism allowing sibling Qwen Code sessions to exchange structured messages, gated by an inbound policy check. |
| **#9394** | [feat(channels): add DingTalk Workspace channel](https://github.com/QwenLM/qwen-code/pull/9394) | Adds a first‑class DingTalk Workspace integration (DMs, @mentions, ambient groups, document events) using an existing authenticated DWS CLI profile. |
| **#9340** | [feat(review): say when the approach, not the patch, is the open question](https://github.com/QwenLM/qwen-code/pull/9340) | When a PR has undergone many rounds and diverged significantly, the review verdict now notes that the *design approach* — not the current diff — remains unresolved. |
| **#9602** | [fix(core): clear tool display list before awaiting completion callback](https://github.com/QwenLM/qwen-code/pull/9602) | Moves the UI‑tool‑display clear earlier in the completion flow, fixing a stray‑tool‑artifact bug where stale tool names lingered after async calls. |
| **#9623** | [feat(review): give the convergence observation a machine‑readable half](https://github.com/QwenLM/qwen-code/pull/9623) | Extends the human‑readable convergence diagnosis (from #9461) with a structured JSON field, enabling downstream tooling to programmatically act on non‑settling loops. |
| **#9624** | [feat(review): close Aone residual gaps — composeUrl, test‑plan routing, a1 version floor](https://github.com/QwenLM/qwen-code/pull/9624) | Supplies the missing pieces for Aone Code integration: a provider‑owned compose URL, proper test‑plan routing, and enforces a minimum Aone version floor. |
| **#9673** | [fix(autofix): stop counting idle timeouts toward the timeout cap](https://github.com/QwenLM/qwen-code/pull/9673) | Adjusts the cumulative timeout circuit breaker to ignore idle watchdog kills, preventing genuine work from being unfairly penalized by spurious idle events. |

---

### 5. Feature Request Trends (derived from Issues)

| Trend | Representative Issues | Summary |
|-------|-----------------------|---------|
| **Subagent controllability** | #5180, #1212 | Users want a way to disable or limit the built‑in *general‑purpose* subagent, which currently fires too often and derails workflows. |
| **MCP reliability & Windows support** | #9693, #9675, #379 | Requests for stable MCP STDIO transport on Windows, better error reporting, and proper native‑type serialization of complex arguments. |
| **UI accessibility & IME** | #5966, #9666, #9670 | Demand for stable Chinese/Japanese/Korean input methods, low‑contrast IME fixes, and a setting to start the terminal UI in expanded detail mode (show thinking by default). |
| **Configurable security sandboxes** | #9556, #9089, #9699 | Calls for runner‑level isolation of PAT‑bearing jobs, dependency‑CVE audit fixes, and the ability to turn off automatic code‑execution privileges in CI. |
| **Session state persistence** | #9686, #9664, #9688 | Requests to restore the exact model used before a daemon session exit, to preserve unanswered HITL prompts after resume, and to avoid active/archived transcript duplication. |
| **Extension & platform flexibility** | #8993, #9168, #9172 | Desire for Git‑version‑tolerant extension installs, evaluation of an Electron‑hosted Web Shell, and exploration of desktop‑only extension boundaries. |
| **Observability & dashboarding** | #7167 | Interest in a functional “Fleet Shepherd” dashboard that surfaces PR, release, and cleanup metrics in real time. |

---

### 6. Developer Pain Points (recurring frustrations)

1. **CI/CD security & reliability**  
   - Dependency CVE audits fail on every PR (#9699).  
   - PAT‑bearing autofix jobs share runners with untrusted code (#9089).  
   - Pipeline still grants the reviewer’s user token inside worktrees (#9556).  
   *Result:* Developers feel the CI pipeline is a supply‑chain risk and spend time manually mitigating failures.

2. **Input method & localization instability**  
   - Chinese IME randomly stops working on Windows terminals (#5966, #9666).  
   - No clear error messages when IME fails, forcing users to switch to ASCII input.  
   *Result:* Non‑English speakers report reduced productivity and mistrust in the UI.

3. **MCP & cross‑platform integration flakiness**  
   - MCP clients report “Connection closed” at startup on Windows even when disabled (#9693).  
   - MCP servers become unavailable between sessions despite valid config (#9675).  
   - Complex tool arguments are serialized as JSON strings, breaking strict‑type servers (#379).  
   *Result:* Users cannot reliably use MCP‑based tools (filesystem, sequential‑thinking, TradingView) on Windows.

4. **Session & state management regressions**  
   - Checkpointing enabled leads to infinite “Initializing…” hang (#2862).  
   - Daemon sessions lose model selection or HITL state on resume (#9686, #9664).  
   - Archiving a live session can leave duplicated active/archived transcripts (#9688).  
   *Result:* Workflow interruptions force users to disable useful features or manually recover state.

5. **Review‑loop noise**  
   - Endless review‑fix‑re‑review cycles without clear termination criteria.  
   - Recent PRs (#9461, #9596, #9623) aim to expose why loops stall, but the underlying causes (flaky tests, missing convergence signals) remain a common complaint.  

6. **Extension installation friction**  
   - Public extensions require Git ≥ 2.37, yet

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

**DeepSeek TUI Community Digest – 2026‑08‑22**  
*Repository: Hmbown/CodeWhale*  

---

### 1. Today's Highlights  
- A coordinated push toward supervised, long‑running sessions landed in PR #5535, adding lifecycle event outboxes, a `/relaunch` command, and per‑session control sockets.  
- Dependabot updates continue to keep the Rust stack current (similar, rio‑vt, jsonschema, etc.), while the community debates vision‑model support (DeepSeek‑V4‑Flash‑Vision‑Exp) and reliability gaps in sub‑agent execution.  

### 2. Releases  
*No new releases were published in the last 24 h.*

### 3. Hot Issues  

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| [#5316](https://github.com/Hmbown/CodeWhale/issues/5316) | **EPIC‑005: CodeWhale TUI Crate Decomposition** – umbrella tracking for splitting the TUI into crates. | Sets the architectural foundation for future modularity and easier maintenance. | 11 comments, 0 👍 – active discussion on scope and dependencies. |
| [#5526](https://github.com/Hmbown/CodeWhale/issues/5526) | **Deprecated shell completion** – `codew completions powershell` outdated; still points to `codewhale-tui`. | Breaks the expected CLI UX for PowerShell users; highlights documentation gaps. | 4 comments, 0 👍 – users request a fix or migration guide. |
| [#5541](https://github.com/Hmbown/CodeWhale/issues/5541) | **Feature: DeepSeek‑V4‑Flash‑Vision‑Exp** – add the new multi‑modal model and enable vision tooling. | Unlocks image‑understanding capabilities, a highly requested expansion for CodeWhale. | 1 comment, 0 👍 – early interest; likely to gain traction. |
| [#5534](https://github.com/Hmbown/CodeWhale/issues/5534) | **Bug: Goal‑continuation cadence bypassed** – `continuation_delay_seconds` ignored in within‑turn dispatch. | Causes premature goal resumption, breaking intended throttling and leading to resource spikes. | 1 comment, 0 👍 – flagged as a regression from recent cadence work. |
| [#5533](https://github.com/Hmbown/CodeWhale/issues/5533) | **Feature: Control surface for supervised operation** – per‑session control socket (message / interrupt / relaunch / status). | Enables external orchestrators (CI, tmux wrappers) to manage long‑lived sessions safely. | 1 comment, 0 👍 – strong demand from automation‑focused users. |
| [#5532](https://github.com/Hmbown/CodeWhale/issues/5532) | **Feature: `/relaunch` – switch a running session to the current binary**. | Reduces friction after updates; eliminates the need for manual restarts. | 1 comment, 0 👍 – paired with the control‑surface work. |
| [#5531](https://github.com/Hmbown/CodeWhale/issues/5531) | **Feature: Local lifecycle event outbox (JSONL + webhook)** – emit `turn_stalled`, `turn_failed`, etc. | Gives operators observability into agent health for unattended runs. | 1 comment, 0 👍 – aligns with supervised‑operation trends. |
| [#5529](https://github.com/Hmbown/CodeWhale/issues/5529) | **Sub‑agents cannot reliably execute** – wall‑time deaths, provider‑route failures, shell tooling gaps. | Undermines the core Fleet value proposition; leads to lost work and flaky pipelines. | 0 comments, 0 👍 – a silent but critical pain point. |
| [#5528](https://github.com/Hmbown/CodeWhale/issues/5528) | **Workflow runs fail silently** – dispatch/schema errors never surface in the TUI. | Operators have no visibility when workflows break, causing delayed debugging. | 0 comments, 0 👍 – high‑impact UX issue. |
| [#4069](https://github.com/Hmbown/CodeWhale/issues/4069) | **Documentation/enhancement: indexing privacy controls (.codewhaleignore)**. | Allows teams to exclude secrets, vendor trees, etc., from agent discovery—mirroring Cursor’s `.cursorignore`. | 1 comment, 0 👍 – steady interest as projects grow. |

### 4. Key PR Progress  

| # | PR | Description |
|---|----|-------------|
| [#5540](https://github.com/Hmbown/CodeWhale/pull/5540) | **chore(deps): bump similar 3.1.2 → 3.2.0** – adds structured line‑or‑block similarity APIs. |
| [#5539](https://github.com/Hmbown/CodeWhale/pull/5539) | **chore(deps): bump rio‑vt 0.5.19 → 0.5.25** – latest terminal rendering improvements, bug fixes. |
| [#5390](https://github.com/Hmbown/CodeWhale/pull/5390) | **chore(deps): bump rmcp 2.2.0 → 3.1.2** – updates Model Context Protocol Rust SDK. |
| [#5538](https://github.com/Hmbown/CodeWhale/pull/5538) | **chore(deps): bump jsonschema 0.46.10 → 0.49.9** – adds support for newer JSON Schema drafts. |
| [#5537](https://github.com/Hmbown/CodeWhale/pull/5537) | **chore(deps): bump docker/setup‑buildx‑action 4.2.0 → 4.3.0** – improves multi‑platform CI builds. |
| [#5535](https://github.com/Hmbown/CodeWhale/pull/5535) | **Supervised operation stack** – lifecycle outbox (JSONL/webhook), `/relaunch`, per‑session control socket, and goal‑continuation quiet‑period fix. Major step toward observable, externally managed sessions. |
| [#5525](https://github.com/Hmbown/CodeWhale/pull/5525) | **refactor(tui): adopt command shapes in utility group (FEAT‑018)** – migrates seven utility commands to the external command shape introduced earlier. |
| [#5524](https://github.com/Hmbown/CodeWhale/pull/5524) | **feat(tui): add multi‑file read_lints operation** – enables the LSP tool to read lint diagnostics for multiple files via a shared transport pool. |
| [#5530](https://github.com/Hmbown/CodeWhale/pull/5530) | **fix(cli): route legacy completions through public binary** – makes `codewhale completions <shell>` use the public `codewhale` command, fixing the deprecated completion issue. |
| [#5523](https://github.com/Hmbown/CodeWhale/pull/5523) | **refactor(tui): extract tool‑call stages from turn loop** – splits planning, approval, execution, and result projection into separate functions for clarity and testability. |

### 5. Feature Request Trends  
- **Multimodal/Vision support** – requests to add DeepSeek‑V4‑Flash‑Vision‑Exp and enable image‑based tooling.  
- **Supervised / lifecycle management** – control sockets, `/relaunch`, JSONL/webhook event outboxes, and goal‑continuation cadence fixes.  
- **Reliability & observability** – making sub‑agents resilient to wall‑time/provider failures and surfacing workflow errors in the TUI.  
- **CLI ergonomics** – up‑to‑date shell completions, intuitive update/relaunch flow, and consistent command naming.  
- **Privacy & workspace scoping** – `.codewhaleignore`‑style indexing controls to keep secrets out of agent discovery.  

### 6. Developer Pain Points  
- **Sub‑agent instability** – wall‑time killings, provider‑route errors, and inadequate shell tooling cause lost work and reduced trust in the Fleet model.  
- **Silent failures** – workflow dispatch or schema problems produce no UI feedback, forcing developers to dig logs.  
- **Outdated CLI helpers** – shell completion scripts lag behind the binary, leading to confusion (`codewhale-tui` vs. `codewhale`).  
- **Update friction** – lack of an automatic relaunch / post‑update notice forces manual restarts.  
- **Complex codebase** – ongoing crate‑decomposition effort (EPIC‑005) indicates a desire for better modularity, but the transition creates uncertainty about API stability.  

*End of digest.*

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

**ComfyUI Community Digest – 2026‑08‑22**  

---

### 1. Today’s Highlights  
- Performance regressions in MiniMax H3 video generation and SeedVR2 tiled VAE decode dominated discussions, with multiple users reporting slowdowns and super‑linear runtime growth.  
- A cluster of Windows‑specific GPU‑detection issues surfaced (duplicate GPU counting, reserved‑VRAM flag ignored), prompting several PRs that aim to fix device enumeration using `nvidia‑smi` and isolated subprocess probing.  
- Usability tweaks gained traction: a request for a confirmation prompt before closing instances and a fix for the Ctrl‑S shortcut being hijacked by the browser are now open PRs/issues.

---

### 2. Releases  
*No new releases were published in the last 24 h.*

---

### 3. Hot Issues  

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| [#15745](https://github.com/Comfy-Org/ComfyUI/issues/15745) | Multiple NVIDIA GPUs detected when only one GPU is present | Breaks memory‑allocation logic on Windows; leads to OOM or under‑utilisation. | 10 👍, 10 comments – active debugging. |
| [#15314](https://github.com/Comfy-Org/ComfyUI/issues/15314) | MiniMax H3 produces pure noise/mosaic on AMD RX 7900 XTX (RDNA3) | Blocks AMD users from using the latest video model; affects a growing segment of the community. | 0 👍, 8 comments – ongoing investigation. |
| [#15720](https://github.com/Comfy-Org/ComfyUI/issues/15720) | v0.33.2 makes H3 generations ~36% slower vs v0.33.1 | Performance regression impacts production pipelines; users noticeably slower renders. | 7 👍, 7 comments – confirmed across setups. |
| [#15782](https://github.com/Comfy-Org/ComfyUI/issues/15782) | SeedVR2 vae (tiled) decode has superlinear runtime | Tile‑based decoding scales poorly with video length, making long‑form upscaling impractical. | 0 👍, 5 comments – highlighted as a blocker for video workflows. |
| [#15639](https://github.com/Comfy-Org/ComfyUI/issues/15639) | Ctrl‑S is now Browser‑Save instead of Workflow‑Save | Breaks muscle‑memory shortcut; forces users to use menu or mouse, reducing efficiency. | 0 👍, 5 comments – frequent complaint in Discord. |
| [#15784](https://github.com/Comfy-Org/ComfyUI/issues/15784) | Nightly crash: ImportError in comfy_api/latest (ColorPrimaries removed from PyAV) | Prevents users from running the latest nightly; blocks access to new features. | 4 👍, 4 comments – urgent for early adopters. |
| [#15665](https://github.com/Comfy-Org/ComfyUI/issues/15665) | MiniMax H3 video generation ~4× slower since v0.32.0 (regression from #15486) | Confirms a persistent slowdown affecting high‑resolution video generation. | 3 👍, 4 comments – linked to a specific code change. |
| [#15666](https://github.com/Comfy-Org/ComfyUI/issues/15666) | `--reserve-vram` ignored | Users cannot limit VRAM usage, causing OOM on shared GPUs. | 0 👍, 4 comments – requested by multi‑tenant environments. |
| [#15793](https://github.com/Comfy-Org/ComfyUI/issues/15793) | Wan 2.1/2.2 silent progressive output corruption on Apple Silicon MPS | Affects macOS users; corruption depends on temporal length and silicon generation. | 0 👍, 1 comment – emerging issue for Apple‑silicon adopters. |
| [#15780](https://github.com/Comfy-Org/ComfyUI/issues/15780) | Add a confirmation prompt when closing an instance in ComfyUI Manager | Prevents accidental loss of long‑running generations; a QoL improvement many have asked for. | 0 👍, 0 comments – newly filed but likely to gain traction. |

---

### 4. Key PR Progress  

| # | PR | Summary |
|---|----|---------|
| [#15792](https://github.com/Comfy-Org/ComfyUI/pull/15792) | Fail CLA allowlist step on API errors – makes the contribution‑license‑check robust against transient GitHub failures. |
| [#15755](https://github.com/Comfy-Org/ComfyUI/pull/15755) | Partner Nodes: add ByteDance vCube Video Enhance node – expands the official video‑enhancement toolkit. |
| [#15776](https://github.com/Comfy-Org/ComfyUI/pull/15776) | Use `hvc1` tag for remuxed HEVC in MP4/MOV – fixes compatibility with QuickTime/Final Cut on macOS. |
| [#13180](https://github.com/Comfy-Org/ComfyUI/pull/13180) | Basic looping nodes for video workflows – enables accumulation/edit loops for InfiniteTalk‑style extensions. |
| [#15788](https://github.com/Comfy-Org/ComfyUI/pull/15788) | Respect cgroup memory limits when reporting RAM – crucial for containerized deployments to avoid OOM kills. |
| [#15790](https://github.com/Comfy-Org/ComfyUI/pull/15790) | Add streaming tiled decoding function to VAE – addresses SeedVR2 superlinear runtime by enabling chunked decode. |
| [#15789](https://github.com/Comfy-Org/ComfyUI/pull/15789) | Let subgraphs act as cache boundaries (`--disable-subgraph-caching`) – reduces memory pressure in large video/resolution workflows. |
| [#15787](https://github.com/Comfy-Org/ComfyUI/pull/15787) | Detect Windows CUDA devices in isolated PyTorch process – resolves duplicate‑GPU counting on Windows. |
| [#15749](https://github.com/Comfy-Org/ComfyUI/pull/15749) | Fix Windows physical GPU detection – uses `nvidia‑smi -L` to count real GPUs, fixing #15745. |
| [#15785](https://github.com/Comfy-Org/ComfyUI/pull/15785) | Make SeedVR2 memory‑efficient with dynamic chunking – replaces hardcoded MLP chunk size with runtime‑based free‑memory query. |

---

### 5. Feature Request Trends  
From the open issues, the most‑requested directions are:  

1. **Performance & Memory Efficiency** – dynamic VRAM allocation, tiled/streaming VAE decoding, subgraph‑level cache control, and GPU‑aware RAM accounting.  
2. **Cross‑Platform Device Detection** – reliable Windows GPU enumeration, proper handling of mixed AMD/NVIDIA/Apple‑Silicon setups, and respecting container limits.  
3. **Usability QoL** – restoration of expected keyboard shortcuts (Ctrl‑S = workflow save), confirmation dialogs for destructive actions, and clearer UI feedback for long‑running processes.  
4. **Model‑Specific Stability** – fixes for MiniMax H3 artifacts on AMD, Wan 2.x corruption on Apple‑Silicon, and SeedVR2 tiled decode scaling.  
5. **Extended Node Ecosystem** – official partners adding video‑enhance, looping, and utility nodes to reduce reliance on custom community nodes.

---

### 6. Developer Pain Points  
- **Performance regressions after minor version bumps** (e.g., v0.33.2 slowing MiniMax H3, v0.32.0+ slowing Wan/H3) force developers to pin older versions or bisect regressions.  
- **GPU detection quirks on Windows** lead to mis‑reported device counts, causing incorrect memory reservations and OOMs.  
- **Memory‑intensive tiled VAE decoding** scales poorly with video length, limiting practical use of high‑resolution video upscaling.  
- **Unintended UI shortcut interception** (Ctrl‑S) and lack of safety nets (no close confirmation) disrupt workflow efficiency.  
- **Model‑list duplication** when symbolic links create cycles in `extra_model_paths.yaml`, cluttering dropdowns and confusing users.  
- **Fragmented error reporting** (e.g., nightly imports breaking due to upstream PyAV changes) makes tracking regressions difficult without a stable compatibility layer.  

---  

*Prepared for the ComfyUI developer community – stay tuned for upcoming fixes and feature merges.*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Community Digest – 2026‑08‑22**

---

### 1. Today's Highlights
- The long‑standing NUMA multi‑socket CPU utilization bug ([#2929](https://github.com/ollama/ollama/issues/2929)) continues to draw attention (38 comments, 10 👍) as users report only half of available cores being used.  
- Claude‑related work landed: the **Claude model management** PR ([#17915](https://github.com/ollama/ollama/pull/17915)) was merged and a companion PR to accept Claude context‑window suffixes ([#17908](https://github.com/ollama/ollama/pull/17908)) is open, signaling tighter integration with Claude Code.  
- A subtle but impactful regression was identified where embedding requests return all‑zero vectors under sustained load ([#17878](https://github.com/ollama/ollama/issues/17878)), prompting calls for better error visibility in high‑throughput scenarios.

---

### 2. Releases
*No new releases were published in the last 24 h.*

---

### 3. Hot Issues (selected from the last 24 h)

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| [#2929](https://github.com/ollama/ollama/issues/2929) | **NUMA multi‑socket CPU under‑utilization** – Ollama only uses ~½ of available cores on Linux VMs with multiple NUMA nodes. | Affects raw throughput for CPU‑only workloads; critical for users scaling LLMs on commodity servers. | 38 comments, 10 👍 – active discussion of BIOS/OS tweaks and potential scheduler fixes. |
| [#16714](https://github.com/ollama/ollama/issues/16714) | **Ollama Cloud – Prompt Cache Support** – request to add provider‑side prompt caching (like OpenCode Zen) for agentic workloads. | Directly impacts latency and cost in repetitive agent loops; a highly‑upvoted feature request. | 33 comments, 3 👍 – strong interest from Cloud subscribers. |
| [#17839](https://github.com/ollama/ollama/issues/17839) | **Agent integrations hang with local Qwen models on macOS** (closed). | Highlights a regression where agent frameworks stall despite the core API working; blocks automation pipelines. | 24 comments, 3 👍 – confirmed fix in recent patch. |
| [#17904](https://github.com/ollama/ollama/issues/17904) | **ornith‑1.5:35b model reports itself as Claude** – metadata mix‑up causing identity confusion. | Undermines trust in model provenance; important for multi‑model serving setups. | 8 comments, 0 👍 – quick triage underway. |
| [#17829](https://github.com/ollama/ollama/issues/17829) | **MLX engine: no prompt/prefix caching between requests** – each agent step re‑prefills the full prompt. | Degrades time‑to‑first‑token (TTFT) in long‑context agent loops on Apple Silicon. | 8 comments, 3 👍 – MLX users actively testing work‑arounds. |
| [#17889](https://github.com/ollama/ollama/issues/17889) | **Inconsistent `num_ctx` behavior** – same server returns 400 for some models, 200 with truncated prompts for others when `num_ctx` is unset. | Leads to unpredictable prompt truncation; complicates prompt engineering and batching. | 6 comments, 0 👍 – need for deterministic fallback logic. |
| [#17878](https://github.com/ollama/ollama/issues/17878) | **Embeddings return all‑zero vectors under sustained load** – HTTP 200 with correct shape but useless output. | Silent failure can corrupt downstream retrieval pipelines; hard to detect without extra logging. | 1 comment, 0 👍 – emerging concern for high‑throughput embeddings services. |
| [#17916](https://github.com/ollama/ollama/issues/17916) | **Default `n_threads` ignores cgroup CPU quota/cpuset** → ~45× throughput collapse in containers. | Breaks Ollama in Kubernetes or Docker‑CPU‑limited environments; a critical cloud‑native issue. | 0 comments, 0 👍 – flagged by platform engineers. |
| [#15447](https://github.com/ollama/ollama/issues/15447) | **Error 400 (empty body) when pulling HF.co GGUF models after successful download** – model never registers. | Blocks automated model‑pull workflows; requires manual cleanup. | 11 comments, 6 👍 – recurring across multiple HF tags. |
| [#12436](https://github.com/ollama/ollama/issues/12436) | **Option to disable all Cloud and remote Search features** (closed). | Addresses privacy‑first users who want a fully offline binary; reflects demand for stricter data‑isolation toggles. | 9 comments, 8 👍 – strong community endorsement. |

---

### 4. Key PR Progress (selected from the last 24 h)

| # | PR | Summary |
|---|----|---------|
| [#17915](https://github.com/ollama/ollama/pull/17915) | **app: claude model management** – Adds UI controls to list, pull, and remove Claude models in the Ollama desktop app (macOS). |
| [#17908](https://github.com/ollama/ollama/pull/17908) | **launch: accept Claude context window suffix** – Allows `claude-3-opus:latest[1m]` style selectors to be stripped before API calls, fixing Claude Code integration. |
| [#17865](https://github.com/ollama/ollama/pull/17865) | **mlx: add DFlash2 support** – Implements native MLX loading/inference for the DFlash2 draft model architecture, expanding MLX‑backed model zoo. |
| [#17900](https://github.com/ollama/ollama/pull/17900) | **app: add Connect your apps experience** – Revised onboarding flow, adds a unified Apps page, and enables Claude Desktop connect/disconnect from the UI. |
| [#17913](https://github.com/ollama/ollama/pull/17913) | **llm: filter per‑request llama-server logs unless debug enabled** – Reduces log spam (was ~20 lines/request) that was flooding journald and inflating macOS log files. |
| [#17914](https://github.com/ollama/ollama/pull/17914) | **qwen3coder: tolerate a dropped closing tag, stop rewriting parameter values** – Improves robustness of Qwen‑Coder tool‑call parsing for long agent sessions. |
| [#17480](https://github.com/ollama/ollama/pull/17480) | **bench: use HumanEval patch prompts** – Replaces synthetic word‑list benchmark with realistic Python prompts, making speculative draft model evaluation more meaningful. |
| [#17901](https://github.com/ollama/ollama/pull/17901) | **mlxrunner: make prefix cache restore points survive cancelled and resumed prefills** – Prevents wasted compute when agent clients cancel long pre‑fills, restoring prefix cache state on retry. |
| [#17909](https://github.com/ollama/ollama/pull/17909) | **llm: strip stray LLAMA_API_KEY from llama‑server subprocess env** – Avoids leaking unrelated API keys into the llama‑server environment, fixing intermittent auth errors. |
| [#17791](https://github.com/ollama/ollama/pull/17791) | **convert/llama4: set tokenizer.ggml.pre to llama4** – Corrects GGUF conversion for Llama 4 models so llama.cpp uses the proper pre‑tokenizer instead of GPT‑2 fallback. |
| [#17890](https://github.com/ollama/ollama/pull/17890) | **server: return 204 for OPTIONS on loopback/private hosts** – Fixes CORS pre‑flight `405` errors when serving Ollama from the same machine, enabling in‑browser fetches. |
| [#17888](https://github.com/ollama/ollama/pull/17888) | **gemma4: accept '=' separator in tool call arguments** – Allows Gemma‑4 models that output `save_as='file.txt'` to be parsed correctly, avoiding empty `tool_calls`. |
| [#17891](https://github.com/ollama/ollama/pull/17891) | **install.sh: auto‑install zstd when extracting .tar.zst** – Makes the one‑liner installer work on fresh Ubuntu 26.04 systems lacking the `zstd` CLI. |
| [#17894](https://github.com/ollama/ollama/pull/17894) | **chat: always preserve the most recent user message during truncation** – Guarantees that the latest user query isn’t dropped when the context window overflows, fixing “no user query” errors in tool loops. |

---

### 5. Feature Request Trends
- **Prompt caching for Cloud & agentic workflows** (e.g., #16714).  
- **Privacy controls** – global opt‑out for cloud/remote search & telemetry (#12436).  
- **Claude/Anthropic integration** – model management, context‑window suffix handling, and proper reasoning‑effort mapping.  
- **Token‑parameter alignment** – support for `max_completion_tokens` alongside deprecated `max_tokens` (#7125).  
- **Model availability requests** – timely addition of newly released models (Kimi K3, Gemma 4, etc.).  
- **Performance & resource‑isolation fixes** – NUMA‑aware CPU scheduling, cgroup‑respecting thread limits, and GPU/CPU balancing under load.  

---

### 6. Developer Pain Points
- **CPU under‑utilization on NUMA/multi‑socket systems** – only a subset of cores engaged, limiting throughput.  
- **Embedding pipelines silently failing** – zero‑vector returns under high concurrency with no distinguishing log.  
- **Unpredictable context handling** – inconsistent `num_ctx` behavior and truncation that drops the latest user query.  
- **MLX‑specific regressions** – missing prefix caching, excessive Metal buffer allocation, and lack of GPU‑only offload detection.  
- **Container‑native deployment issues** – Ollama ignores cgroup CPU limits, causing severe throttling; installer assumes host utilities (e.g., `zstd`).  
- **UI/UX friction** – missing back/close button in Settings, settings window hiding main chat, and occasional UI thread loops blocking the app.  
- **Tool‑call streaming gaps** – MLX backend does not stream tool outputs, leading to timeouts for large code generation.  

*All links point to the exact GitHub items referenced.*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

### llama.cpp Community Digest (2026-08-22)

#### **Today's Highlights**
The release of **llama.cpp v0.2.0** (via nightly build `b10566`) marks the primary update, incorporating recent improvements across backends and features. Key advancements include Vulkan optimizations for Mixture-of-Experts (MoE) workloads, Metal tensor API enhancements, and new speculative decoding capabilities like DFlash2 support. Community focus remains on stabilizing performance regressions (notably in Vulkan MTP acceptance rates) and expanding hardware compatibility.

#### **Releases**
- **v0.2.0** ([b10566](https://github.com/ggml-org/llama.cpp/releases/tag/b10566)): Official release bumping the version from 0.1.x. Includes aggregated fixes from recent nightly builds: tensor split for LFM2/LFM2MOE ([#26993](https://github.com/ggml-org/llama.cpp/pull/26993)), Metal kernel clamping for non-32-aligned K extents ([#27450](https://github.com/ggml-org/llama.cpp/pull/27450)), Vulkan FP32 quantization safety ([#27413](https://github.com/ggml-org/llama.cpp/pull/27413)), and deferred KV cache dequantization for large batches ([#27438](https://github.com/ggml-org/llama.cpp/pull/27438)). Nightly assets now include `nightly-tag.txt` for Web UI version tracking.

#### **Hot Issues**
1. **[#20977](https://github.com/ggml-org/llama.cpp/issues/20977)** (TurboQuant support): 116 comments, 339👍. High demand for faster quantization; closed but actively discussed for revival. *Community reaction:* Strong interest in reducing quantization latency without quality loss.
2. **[#17284](https://github.com/ggml-org/llama.cpp/issues/17284)** (Server HTTP 400 on context overflow): 55 comments, 8👍.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*