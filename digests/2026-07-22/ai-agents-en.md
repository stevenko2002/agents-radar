# OpenClaw Ecosystem Digest 2026-07-22

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-21 22:16 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

**OpenClaw Project Digest – 2026‑07‑22**  

---

### 1. Today's Overview  
Over the last 24 hours the OpenClaw ecosystem logged **500 issue updates** (391 still open, 109 closed) and **500 PR updates** (343 open, 157 merged/closed). No new versioned release hit the `main` branch, so the code base is effectively in a *maintenance‑and‑bug‑fix* rhythm. Activity levels remain high, but the majority of changes are incremental (bug‑fixes, documentation, and minor feature tweaks) rather than large‑scale architectural work.

---

### 2. Releases  
- **Latest releases:** *None* – no tagged version or changelog was published in the last day.  
- **Implication:** The project is currently in a “stabilisation” phase; all new work must be merged before a formal point‑release can be cut.

---

### 3. Project Progress  
- **Merged / closed PRs:** 157 PRs were merged or closed in the past 24 h, indicating a steady flow of code integration.  
- **Key advancements:**  
  * **Telegram bot UI** – PR #112260 adds a session‑observer HUD with subtitles, settings, and a floating status bar.  
  * **MacOS privacy compliance** – PR #112321 enforces explicit consent for privacy‑sensitive macOS APIs.  
  * **Cron integrity** – PR #112429 validates rate‑limit configuration values and prevents nonsensical inputs.  
  * **Plugin hot‑reload** – PR #14438 introduces JITI cache invalidation, enabling plugin code changes without a full container restart.  

These merged PRs are the primary source of visible progress today.

---

### 4. Community Hot Topics  

| Issue / PR | Comments | 👍 | Reactions / Rating | Link | Core Concern |
|------------|----------|----|-------------------|------|--------------|
| **#10659** – *Masked Secrets* (15 c, 4 👍) | 15 | 4 | 🔗 [Issue #10659](https://github.com/openclaw/openclaw/issues/10659) | Prevent agents from seeing raw API keys → security & prompt‑injection mitigation. |
| **#101290** – *CLI startup corrupts DB* (13 c, 1 👍) | 13 | 1 | 🔗 [Issue #101290](https://github.com/openclaw/openclaw/issues/101290) | SQLite DB corruption under gateway operation → critical stability regression. |
| **#86996** – *Latency spike with active‑memory stack* (11 c, 2 👍) | 11 | 2 | 🔗 [Issue #86996](https://github.com/openclaw/openclaw/issues/86996) | Performance collapse when `active-memory` + Codex chain is used → latency & timeout risk. |
| **#85030** – *MCP tools not injected into subagents* (11 c, 5 👍) | 11 | 5 | 🔗 [Issue #85030](https://github.com/openclaw/openclaw/issues/85030) | Sub‑agent tool exposure fails → functional breakage for multi‑agent pipelines. |
| **#106779** – *2026.7.1 provider parsing error* (11 c, 2 👍) | 11 | 2 | 🔗 [Issue #106779](https://github.com/openclaw/openclaw/issues/106779) | Local `llama.cpp` providers reject template parsing → upgrade‑specific regression. |
| **#112426** – *Android branch‑count localisation* (undefined c, 0 👍) | – | – | 🔗 [PR #112426](https://github.com/openclaw/openclaw/pull/112426) | Language‑neutral branch counting for multi‑-language UI. |
| **#87800** – *Google Vertex AI onboarding wizard* (undefined c, 0 👍) | – | – | 🔗 [PR #87800](https://github.com/openclaw/openclaw/pull/87800) | Full ADC‑compatible startup for Vertex AI. |

**Analysis:** The most commented‑on issues all orbit around *security* (masked secrets, DB corruption), *performance* (latency spikes), and *correctness of multi‑agent tool exposure*. The high emoji‑based ratings (diamond lobster, platinum hermit) highlight that community members view these as *P1/P0* severity items.

---

### 5. Bugs & Stability  
| Severity | Issue(s) | Symptom | Link | Fix Status |
|----------|----------|---------|------|------------|
| **P0 / Critical** | **#101290** – DB corruption while gateway runs | “database disk image is malformed” repeated under normal operation | 🔗 [Issue #101290](https://github.com/openclaw/openclaw/issues/101290) | No merge‑ready PR yet; regression under active investigation. |
| **P1** | **#10659** – Masked Secrets (feature, not a bug) | Leaks of raw API keys in `.env` | 🔗 [Issue #10659](https://github.com/openclaw/openclaw/issues/10659) | Open, targeting next release. |
| **P1** | **#106779** – 2026.7.1 parsing error | 400 “Unable to generate parser” for local llama.cpp | 🔗 [Issue #106779](https://github.com/openclaw/openclaw/issues/106779) | Open; tied to recent provider update. |
| **P1** | **#90840** – Sub‑agent run completion delivered as raw worker output | Wrong routing of sub‑agent summary to parent chat | 🔗 [Issue #90840](https://github.com/openclaw/openclaw/issues/90840) | Open; requires hook refactor. |
| **P2** | Various *cron* schema regressions (e.g., **#108473**, **#53408**) | Silent parameter loss, tool‑call parsing failures | Scattered across issues | Mostly open; a few fix‑oriented PRs in review. |

Overall, **four** open issues are flagged as *P0/P1* regression bugs that directly impact stability or security. No dedicated merge‑ready PR addressing them was merged today.

---

### 6. Feature Requests & Roadmap Signals  
| Request | Issue | Community Push (👍/comments) | Likely Timeline |
|---------|-------|----------------------------|-----------------|
| **Masked Secrets** (prevent raw API‑key exposure) | #10659 | 4 👍, 15 c | Targeted for next minor release (post‑stabilisation). |
| **Filesystem Sandboxing Config** (`tools.fileAccess`) | #7722 | 4 👍, 10 c | Medium‑term (roadmap signal in “sandboxing” discussions). |
| **Session snapshots** (`/session save|load`) | #13700 | 7 👍, 0 c | Already has prototype discussion; may appear in a future *session persistence* feature. |
| **Configurable auto‑update** with backup & health‑check | #14526 | 5 👍, 0 c | Proposed; likely slated for a later major version after CI improvements. |
| **Per‑model usage logging** (cost tracking) | #13219 | 6 👍, 0 c | Low priority but mentioned in cost‑visibility RFCs. |
| **Telegram Business Bot support** (`business_message`) | #20786 | 6 👍, 0 c | Early‑stage; depends on Telegram API changes. |
| **Dynamic header templating for custom LLM providers** (Fireworks.ai affinity) | #16387 | 5 👍, 0 c | Feasible for next provider‑integration cycle. |

**Takeaway:** Most high‑interest feature proposals are *security‑oriented* (masked secrets) or *stability‑oriented* (session snapshots, auto‑rollback). The community is signalling a shift toward **controlled, auditable upgrades** and **granular permission models**—both likely to appear in the upcoming 2026‑Q4 roadmap.

---

### 7. User Feedback Summary  
- **Pain points:**  
  * **Data loss / DB corruption** – multiple users reported SQLite DB becoming “malformed” during normal gateway operation, causing loss of session history.  
  * **Latency spikes** – heavy `active-memory` + Codex stacks cause >2 s response delays and timeout cascades.  
  * **Tool‑exposure gaps** – MCP schemas are not reliably injected into sub‑agents, breaking multi‑agent workflows.  
- **Satisfaction indicators:**  
  * The **masked‑secrets** concept generated strong positive reaction (diamond lobster rating), suggesting high demand for credential‑privacy safeguards.  
  * **Auto‑update safety** proposals received modest but focused interest, indicating operators want a “safe‑update” pathway.  
- **Overall sentiment:** Mixed – stability regressions are eroding confidence, while security‑focused enhancements are viewed as timely and valuable.

---

### 8. Backlog Watch – Items Needing Maintainer Attention  

| Issue / PR | Age (days) | Why It Stands Out | Current Status |
|------------|------------|-------------------|----------------|
| **#101290** – DB corruption regression | ~14 days (opened 2026‑07‑07) | P0 stability impact; repeated corruption on macOS | Open, **no merge‑ready fix** yet. |
| **#85030** – MCP tool injection failure | ~55 days (opened 2026‑05‑21) | Breaks core multi‑agent workflow; high 👍 (5) | Open, discussion ongoing but no PR merged. |
| **#14526** – Safe‑update proposal | ~150 days (opened 2026‑02‑12) | Addresses operational risk in production | Open, awaiting design consensus. |
| **#112331** – Model catalog coherence across config reloads | ~70 days (opened 2026‑07‑21) | Prevents inconsistent model selection during live reloads | Open, minor but critical for runtime stability. |
| **#87800** – Vertex AI onboarding wizard | ~55 days (opened 2026‑05‑28) | Enables ADC auth for a major cloud provider | Open, implementation in PR but still under review. |
| **#112426** – Android localisation fix | ~0 days (opened 2026‑07‑21) | Minor but required to avoid UI glitches on non‑English locales | Open, low priority but needs maintainer merge. |

**Urgent attention items:** The **DB corruption** (Issue #101290) and **MCP tool injection** (Issue #85030) are the only open P0/P1 tickets without a merged fix, and they directly affect core runtime reliability and multi‑agent correctness. Maintainers should prioritise triaging these bugs and merging any pending patches to prevent further regression.

---

### Closing Note  
The OpenClaw project is currently in a *high‑velocity maintenance* window: hundreds of issues and PRs are being churned daily, yet **no new versioned release** has been cut. The community is heavily focused on **security**, **stability**, and **controlled upgrade pathways**. Resolving the outstanding P0/P1 regressions and shipping the much‑requested *masked‑secrets* and *safe‑update* mechanisms will be pivotal for restoring confidence and moving the project toward its next major release.

---

## Cross-Ecosystem Comparison

**Personal‑AI‑Assistant / Agent Open‑Source Ecosystem – Cross‑Project Comparison (2026‑07‑22)**  

---

### 1. Ecosystem Overview  
The landscape comprises a dozen emerging runtimes that expose “agent‑as‑a‑service” capabilities through modular skill/extension frameworks, configurable memory back‑ends, and native‑OS integrations. Core concerns are **security (credential masking, sandboxed execution), multi‑agent coordination, and reliable state management** (session continuity, versioned config). Release cadence is now **maintenance‑first**, with most projects using release candidates to signal stability rather than shipping full versions.  

---

### 2. Activity Comparison  

| Project | Issues (open) | PRs (open) | Release Status (last 24 h) | Health Score* |
|---------|----------------|------------|----------------------------|----------------|
| **OpenClaw** (core) | 391 | 343 | No new stable release; only bug‑fixes | **7 / 10** (high churn, critical P0 bugs unresolved) |
| **NanoBot** | 11 | 34 | No new release | **8 / 10** (steady bug‑fix flow, active PR merges) |
| **Hermes Agent** | 36 | 46 | RC v0.19.0 released 2026‑07‑20; no new release today | **9 / 10** (rapid convergence on Reborn rewrite) |
| **PicoClaw** | N/A (no open issues) | N/A | No release | **N/A** (inactive) |
| **NanoClaw** | 12 | 9 | No new release | **6 / 10** (bugs pending, stale dependencies) |
| **IronClaw** | 43 | 50 | RC v1.0.0‑rc.1 released 2026‑07‑20 | **8 / 10** (high activity, architectural overhaul) |
| **LobsterAI** | 1 | 10 | No new release | **7 / 10** (critical UI bug pending PR) |
| **TinyClaw** | 0 | 0 | No release | **N/A** (inactive) |
| **Moltis** | 0 | 1 (open) | No release | **N/A** (maintenance‑only) |
| **CoPaw** | 21 | 19 | v2.0.1‑beta.1 released 2026‑07‑22 | **8 / 10** (steady PR churn, beta release) |
| **ZeptoClaw** | 0 | 0 | No release | **N/A** (inactive) |
| **ZeroClaw** | 48 | 41 | No new release; 9 PRs merged | **7 / 10** (security‑focused, active goal‑mode work) |

\*Health Score reflects **activity intensity**, **critical‑bug coverage**, and **release cadence** on a 1‑10 scale (10 = high stability & release momentum; 1 = stalled).

---

### 3. OpenClaw’s Position  

| Aspect | OpenClaw vs. Peers |
|-------|--------------------|
| **Advantages** | • Longest‑standing core reference (since 2024) with a well‑documented skill‑package ecosystem. <br>• Rich library of **sandboxed execution contexts** (system.exec.v1) and **config‑atomicity** utilities that many companions still lack. |
| **Technical Approach** | Emphasises **declarative “Model Catalog” entries** and **explicit consent flows** for privacy‑sensitive APIs; uses a **maintenance‑centric release model** rather than aggressive feature expansion. |
| **Community Size** | Among the largest (≈ 500 daily issue updates, 500 PR updates) – comparable to IronClaw and Hermes Agent, but larger than most niche projects (PicoClaw, Moltis). |

---

### 4. Shared Technical Focus Areas  

| Need | Projects Reporting / Working on It |
|------|-----------------------------------|
| **Masked / protected secrets & credential handling** | OpenClaw (Issue #10659), NanoBot (PR #5010), ZeroClaw (Issue #8226), CoPaw (RFC #8603) |
| **Config‑atomic / safe‑upgrade mechanisms** | OpenClaw (PR #14526), NanoBot (PR #5010), IronClaw (PR #6274), ZeroClaw (Issue #8720) |
| **Multi‑agent tool exposure / MCP schema consistency** | OpenClaw (Issue #85030), NanoBot (Issue #85030), Hermes Agent (Issue #67187), CoPaw (Issue #2291) |
| **Goal‑mode / bounded autonomous sessions** | OpenClaw (Issue #10109), Hermes Agent (Issue #6389), ZeroClaw (Issue #8303), CoPaw (Issue #6257) |
| **Session / memory durability & leak prevention** | OpenClaw (Issue #101290), NanoBot (PR #4663), ZeroClaw (Issue #8731) |
| **Rich media handling (images, PDFs, audio)** | LobsterAI (Issue #1861), NanoClaw (Issue #3050), CoPaw (Issue #6297), IronClaw (Issue #6437) |

These cross‑project threads indicate a **common demand for robust identity, versioned configuration, and reliable state handling** across the ecosystem.

---

### 5. Differentiation Analysis  

| Dimension | OpenClaw | Hermes Agent | IronClaw | CoPaw | ZeroClaw |
|-----------|----------|--------------|----------|-------|----------|
| **Feature Focus** | Skill‑package marketplace, sandboxed exec, privacy‑first config | Unified agent runtime with **Telegram Business**, ADC confinement, hot‑reload of plugins | Full **Reborn** re‑architect (binary CLI, DeploymentConfig) targeting a **single‑run‑time** deployment model | Browser‑based UI, **drag‑and‑drop** file upload, mobile‑first console | Explicit **goal‑mode** tooling, strict delegation, evaluation harness |
| **Target Users** | Enterprise/Sandbox developers needing granular permission controls | End‑users of a **Telegram‑centric assistant** with strict policy enforcement | Engineers building **production‑grade agents** who accept a steep migration path for stability | Developers seeking a **lightweight, UI‑rich agent** for rapid prototyping | Researchers and power users focused on **long‑running autonomous tasks** and security isolation |
| **Technical Architecture** | Modular “skill” + “provider” model, in‑memory token stores, config‑atomic writes | Plugin‑observable UI, discrete “session‑observer HUD”, macOS privacy compliance | Monolithic “Reborn” runtime exposing **DeploymentConfig**, unified storage, discrete extension host | React‑based web UI, sandboxed FS, script‑binding focus | Goal‑controller + verifier, RPC‑based channel gating, evaluation‑first mindset |
| **Release Cadence** | Maintenance‑only (no stable release in 24 h) | RC releases; next stable expected Q4‑2026 | RC v1.0.0‑rc.1 (first production‑ready build) | Beta releases (v2.0.1‑beta.1) | No stable release yet; frequent PR churn |
| **Community Health** | High issue volume, but **critical bugs** (DB corruption, P0) un‑fixed | Moderate volume, active PR merges, strong governance | High activity, rapid convergence on Reborn; moving toward stable release | Active PR flow, but **stale dependencies**; limited community size | Strong S‑level security focus; high‑impact RFCs, but less overall chatter |

---

### 6. Community Momentum & Maturity  

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapid‑Iteration** | **Hermes Agent**, **IronClaw**, **CoPaw** | > 40 % of daily activity consists of merged PRs; RC or beta releases are being cut; architectural convergence visible. |
| **Steady‑Maintenance** | **OpenClaw**, **NanoBot**, **ZeroClaw** | High issue traffic but **critical regressions** remain open; release cadence is slow; focus on bug‑fixes and documentation. |
| **Stabilizing / Niche** | **LobsterAI**, **PicoClaw**, **Moltis**, **ZeptoClaw** | Low issue/PR counts; activity limited to dependency updates or UI tweaks; no upcoming releases. |

*Hermes Agent* and *IronClaw* are the only projects currently **progressing toward a production‑grade release** with clearly defined roadmap milestones. *OpenClaw* and *ZeroClaw* show **high traffic but slower maturity**, largely due to unresolved stability regressions.

---

### 7. Trend Signals for AI‑Agent Developers  

| Trend | Evidence Across Projects | Implication |
|-------|--------------------------|-------------|
| **Security‑first credential handling** | Masked‑secrets (OpenClaw), env‑var enforcement (NanoBot), per‑agent git identity (ZeroClaw) | Future SDKs will expose *credential‑scope* APIs; libraries must audit secret leakage automatically. |
| **Goal‑mode & autonomous session durability** | OpenClaw RFC #10109, Hermes “Goal mode” (Issue #6389), ZeroClaw goal controller, IronClaw “Goal mode” RFC #8303 | Agents will be expected to expose **start/stop, budget, pause, and recoverable state** primitives as standard APIs. |
| **Standardised MCP / Plug‑in ecosystems** | Issue #85030 (OpenClaw), Issue #2291 (CoPaw), Issue #6257 (Hermes), Issue #6389 (Hermes) | Normalising **tool schema registration** and **tool‑call safety** will become a baseline requirement for interoperable agents. |
| **Unified, declarative configuration** | DeploymentConfig (IronClaw), config‑atomic writes (OpenClaw), config‑init template in ZeroClaw | Move away from ad‑hoc env‑files to **single source‑of‑truth configs** that are validated at launch. |
| **Rich‑media & multimodal input handling** | LobsterAI image sync (Issue #1861), NanoClaw drag‑and‑drop (Issue #6297), Hermes “embed‑media” (PR #68199) | Agents will need **automatic content‑type negotiation** and **model‑aware handling of attachments**. |
| **Observability & evaluation harnesses** | Hermes “structured memory seeds” (PR #9245), ZeroClaw “judge‑calibration dumping” (PR #9248) | **Telemetry pipelines** that emit deterministic JSON/JUnit receipts will be essential for debugging, compliance, and continuous improvement. |
| **Security isolation of sub‑agents** | ZeroClaw delegate bypass (Issue #8279), Hermes MCP tool‑exposure gaps, OpenClaw session‑leak bugs | **Sandbox‑level policies** must be enforced at the runtime‑host level; runtime must prevent unintended privilege escalation. |

*Overall*, the ecosystem is converging on a **maturity model where reliability, security, and observable state** outrank feature novelty. Projects that move quickly to standardise config, credential handling, and goal‑mode primitives will likely become the de‑facto platforms for production‑grade personal AI agents.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot Project Digest – 2026‑07‑22**  

---

### 1. Today’s Overview  
NanoBot saw moderate activity with **11 issues** and **34 pull‑request updates** in the last 24 hours. The bulk of the work is focused on bug‑fixes and incremental enhancements rather than major feature roll‑outs. Activity is steady but not explosive – the project remains healthy, with most contributors addressing existing debt (e.g., session‑message growth, tool‑gateway safety) while a few high‑visibility issues (caching, endless loops) continue to draw community attention.

---

### 2. Releases  
- **No new versions** were published today. The release pipeline is currently idle.

---

### 3. Project Progress  
- **Closed PRs (today)**:  
  - **[#4663](https://github.com/HKUDS/nanobot/pull/4663)** – *[bug, priority:p1]* Fixed quarantine of invalid tool results (regression fix for #4058).  
  - **[#5010](https://github.com/HKUDS/nanobot/pull/5010)** – *[documentation, security]* Updated security docs to recommend env‑var references over plaintext API keys.  
  - **[#4399](https://github.com/HKUDS/nanobot/pull/4399)** – *[enhancement]* Added `hidden_settings_sections` config to strip UI noise for non‑technical users.  
  - **[#5020](https://github.com/HKUDS/nanobot/pull/5020)** – *[webui]* Highlighted skill references in sent messages.  
  - **[#4811](https://github.com/HKUDS/nanobot/pull/4811)** – *[bug, p2]* Logged suppressed `prepare_call` exceptions instead of silently swallowing them.  

- **Merged/closed issues** addressed:  
  - Session‑message size limitation (`#4787`) – fixed unbounded growth.  
  - Config atomic write (`#4984`) – prevented truncated `config.json` on crash.  
  - Tool‑result protocol sanitisation (`#4663`) – removed missing/duplicate IDs.  

- **Open PRs advancing**:  
  - **[#4866](https://github.com/HKUDS/nanobot/pull/4866)** – Bind model presets to sessions (P1).  
  - **[#5022](https://github.com/HKUDS/nanobot/pull/5022)** – Add `/cancel-goal` command to break sustained‑goal loops (P1).  

---

### 4. Community Hot Topics  
| Item | Type | Comments / 👍 | Link | Underlying Need |
|------|------|---------------|------|-----------------|
| **#4867** – *“Preserve exact prompt prefix to enable caching in Ollama and others”* (closed) | Enhancement | **22** comments | <https://github.com/HKUDS/nanobot/issues/4867> | Users need deterministic, cache‑friendly prompts for Ollama/local models; current 60 s latency is a blocker. |
| **#4864** – *“Endless loop for complete_goal”* (open) | Bug | **4** comments, **1** 👍 | <https://github.com/HKUDS/nanobot/issues/4864> | Recursive goal activation can trap the agent in infinite loops when user “stop” commands are out‑matched by system prompts. |
| **#4934** – *“Qwen models expose thinking/reasoning content”* (open) | Bug | **2** comments | <https://github.com/HKUDS/nanobot/issues/4934> | Exposing internal chain‑of‑thought can leak sensitive reasoning and break UI expectations. |
| **#5013** – *“shell execution needs human confirmation”* (open) | Enhancement | **1** comment | <https://github.com/HKUDS/nanobot/issues/5013> | Safety concern: unrestricted shell runs pose security risk. |
| **#4987** – *“bind workspace checks to opened files”* (open) | Bug | **0** comments | <https://github.com/HKUDS/nanobot/pull/4987> | Filesystem guard bypass via `=` delimiter is a security gap. |
| **#4866** – *“bind model presets to sessions”* (open) | Feature | **0** comments | <https://github.com/HKUDS/nanobot/pull/4866> | Desire for per‑session model overrides to enable flexible preset switching. |

**Takeaway:** The community is most vocal about **caching latency** (Issue #4867) and **goal‑loop safety** (Issue #4864). Both are tied to core usability for local‑model users and to preventing runaway agent behavior.

---

### 5. Bugs & Stability  
| Severity | Issue | Summary | Fix / PR |
|----------|-------|---------|----------|
| **Critical** | **#4864** (endless loop) | Recursive goal activation leads to infinite loops; user stop commands ignored. | Fix in progress – **[#5022](https://github.com/HKUDS/nanobot/pull/5022)** adds `/cancel-goal`. |
| **High** | **#4785** (read_file OOM) | Entire file loaded before truncation → OOM on multi‑GB files. | Fixed in **[#4785](https://github.com/HKUDS/nanobot/issues/4785)** (already closed). |
| **High** | **#4794** (exec session orphaned processes) | No graceful shutdown → orphaned children persist across restarts. | Fixed in **[#4794](https://github.com/HKUDS/nanobot/issues/4794)** (closed). |
| **Medium** | **#4803** (API keys stored plaintext) | Keys persisted in `~/.nanobot/config.json` without proper masking. | Mitigated in **[#4803](https://github.com/HKUDS/nanobot/issues/4803)** (closed); security docs updated in **[#5010](https://github.com/HKUDS/nanobot/pull/5010)**. |
| **Medium** | **#4934** (Qwen thinking exposure) | Model reasoning content leaked in chat responses. | No fix yet; slated for attention in upcoming provider‑specific PRs. |
| **Low** | **#5013** (shell execution confirmation) | No human confirmation before executing arbitrary shell commands. | Enhancement request (**#5013**) – UI confirmation and interrupt middleware under discussion. |
| **Low** | **#4788** (catching BaseException) | Catches `KeyboardInterrupt`/`SystemExit` unintentionally. | Fixed in **[#4788](https://github.com/HKUDS/nanobot/issues/4788)** (closed). |

**Overall stability:** Most critical crashes (OOM, orphan processes) have been patched. Remaining high‑severity concerns revolve around **goal‑loop safety** and **shell safety**, both actively being addressed.

---

### 6. Feature Requests & Roadmap Signals  
- **Session‑level model preset binding** (`#4866`) – likely to land in the next minor release to support per‑session overrides.  
- **Explicit context loading for skills** (`#5018`) – indicates demand for granular control over which skills are pre‑loaded; may appear in a “skills v2” sprint.  
- **Cancel‑goal command** (`#5022`) – directly solves the sustained‑goal loop problem; probable inclusion in the upcoming **agent‑safety** update.  
- **Codex fast‑mode support** (`#5019`) – shows intent to expose high‑throughput Codex endpoints; could be bundled with provider‑level enhancements later this quarter.  
- **Hidden UI settings sections** (`#4399`) – already merged; signals a broader push toward “normie‑friendly” deployments.  

**Prediction:** Features tied to **user control and safety** (preset binding, cancel‑goal, explicit skill context) have higher chances of landing in the **v0.9.x** milestone, while experimental provider integrations (ModelScope, Codex fast mode) may be targeted for **v1.0**.

---

### 7. User Feedback Summary  
- **Pain Points:**  
  1. **Latency from prompt preprocessing** – users experience a 60 s delay on every turn when using Ollama/local models.  
  2. **Unpredictable goal loops** – agents ignore user “stop” commands, leading to runaway executions.  
  3. **Security of stored credentials** – plaintext API keys in config files remain a concern despite recent mitigation.  
  4. **Safety of unrestricted shell execution** – calls for mandatory human confirmation or interruptable middleware.  

- **Satisfaction Drivers:**  
  - Recent fixes to **session message bounds** and **config atomicity** have improved reliability for long‑running sessions.  
  - Documentation updates urging env‑var usage for secrets are well‑received by security‑conscious adopters.  
  - The community appreciates granular UI knobs (e.g., hidden settings) that simplify deployment for non‑technical users.  

Overall sentiment leans toward **“steady improvement but high‑impact usability gaps remain.”**

---

### 8. Backlog Watch  
| Item | Status | Why It Matters |
|------|--------|----------------|
| **#4864** – Endless goal loop (open) | No merge yet; dependent on `/cancel-goal` PR #5022. | Direct threat to agent stability; high user impact. |
| **#4934** – Qwen thinking exposure (open) | No fix; may affect multiple providers. | Privacy and UI integrity concerns. |
| **#5021** – Cascade exec session termination on `/stop` (open) | Addresses orphan subprocesses from subagents. | Prevents lingering processes that could exhaust resources. |
| **#4987** – Filesystem guard bypass via `=` (open) | Security regression; needs regex fix. | Could allow arbitrary file writes in sandboxed environments. |
| **#4866** – Bind model presets to sessions (open) | Enhancement pending; impacts flexibility for multi‑model deployments. | Desired by power users; may influence adoption of NanoBot in production. |

**Maintainer Prioritisation Needed:** The above items combine **critical stability** (goal loops, session termination) with **strategic enhancements** (preset binding, security guard). timely triage will affect release cadence and community confidence.

--- 

*All links point to the official NanoBot repository on GitHub.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# **Hermes Agent Project Digest**
**Date:** 2026-07-22
**Repository:** [NousResearch/hermes-agent](https://github.com/nousresearch/hermes-agent)

---

## **1. Today’s Overview**
Hermes Agent remains highly active, with **50 issues and 50 pull requests updated in the last 24 hours**, indicating a busy development cycle. The project maintains a **balanced workload**—**36 open issues** (vs. 14 closed) and **46 open PRs** (vs. 4 merged/closed)—suggesting active triage but slower resolution. No new releases were published today, and the absence of recent releases may indicate stabilization efforts or a focus on bug fixes over new features. The high volume of **P1/P2 bugs** (e.g., session leaks, deadlocks, gateway crashes) suggests stability remains a priority.

---

## **2. Releases**
**No new releases today.**
- **Latest stable version:** v0.19.0 (2026.7.20)
- **Observation:** The project appears to be in a **stabilization phase**, with no immediate plans for a new release despite numerous open bugs.

---

## **3. Project Progress**
### **Merged/Closed PRs Today (4)**
| PR | Title | Impact |
|----|-------|--------|
| **[#68958](https://github.com/nousresearch/hermes-agent/pull/68958)** | `fix(desktop): increase Windows cold-boot timeout` | Fixes a critical Windows startup failure where the Hermes desktop app fails to launch after a cold boot. |
| **[#68947](https://github.com/nousresearch/hermes-agent/pull/68947)** | `fix(tui): release active-session lease immediately` | Addresses a **P1 session leak bug** (#68920) where TUI/desktop sessions block new sessions due to orphaned leases. |
| **[#68948](https://github.com/nousresearch/hermes-agent/pull/68948)** | `fix(terminal): stop background-compound rewrite from emitting invalid bash` | Fixes a **P1 deadlock issue** (#68915) where backgrounded shell commands (e.g., `node server.js &`) cause worker deadlocks. |
| **[#68957](https://github.com/nousresearch/hermes-agent/pull/68957)** | `fix(cli): warn when `--env` after `--args` is swallowed` | Fixes a **P2 CLI bug** (#68944) where `--env KEY=VALUE` is silently ignored when placed after `--args`. |

**Key Takeaways:**
- **Critical fixes** are being prioritized (Windows startup, session leaks, deadlocks).
- **CLI and TUI stability** are receiving attention, likely due to user-reported regressions.
- **No major feature merges** today, reinforcing a focus on stability.

---

## **4. Community Hot Topics**
### **Most Active Issues (by comments)**
| Issue | Title | Comments | 👍 | Status | Link |
|-------|-------|----------|----|--------|------|
| **[#47349](https://github.com/nousresearch/hermes-agent/issues/47349)** | **Feature: Configurable Memory Backends** | 13 | 1 | Open | [Link](https://github.com/nousresearch/hermes-agent/issues/47349) |
| **[#25083](https://github.com/nousresearch/hermes-agent/issues/25083)** | **Feature: Immutable/Protected Skills** | 7 | 0 | Open | [Link](https://github.com/nousresearch/hermes-agent/issues/25083) |
| **[#67187](https://github.com/nousresearch/hermes-agent/issues/67187)** | **Bug: MCP Server Revival Fails to Re-register Tools** | 7 | 0 | Closed | [Link](https://github.com/nousresearch/hermes-agent/issues/67187) |
| **[#27683](https://github.com/nousresearch/hermes-agent/issues/27683)** | **Bug: Web Tools Silent Failure on Fresh Install** | 7 | 0 | Closed | [Link](https://github.com/nousresearch/hermes-agent/issues/27683) |

### **Analysis of Hot Topics**
1. **Memory Backends (#47349)**
   - **Request:** Replace hardcoded `memory.md` with configurable backends (e.g., `honcho/fact_store`).
   - **Why it matters:** Users want flexibility in memory management, especially for multi-agent setups.
   - **Blockers:** Needs maintainer decision on backward compatibility.

2. **Immutable Skills (#25083)**
   - **Request:** Prevent agents from modifying critical skills (e.g., safety constraints).
   - **Why it matters:** Security and governance concerns—users want to lock down core functionality.
   - **Blockers:** No PR yet; may require a new `skill_protect` tool or permission system.

3. **MCP Tool Re-registration (#67187, #65677, #62212)**
   - **Bug:** MCP servers fail to re-register tools after reconnection.
   - **Why it matters:** Breaks long-running sessions and automation workflows.
   - **Status:** Some fixes merged (#65677, #62212), but lingering issues persist.

---

## **5. Bugs & Stability**
### **Critical Bugs Reported Today (P1/P2)**
| Issue | Title | Severity | Platform | Fix PR? | Link |
|-------|-------|----------|----------|---------|------|
| **[#68915](https://github.com/nousresearch/hermes-agent/issues/68915)** | **Worker Deadlock on Backgrounded Commands** | P1 | All | ✅ (#68948) | [Link](https://github.com/nousresearch/hermes-agent/issues/68915) |
| **[#68920](https://github.com/nousresearch/hermes-agent/issues/68920)** | **Session Leaks Block New Sessions** | P1 | Desktop/TUI | ✅ (#68947) | [Link](https://github.com/nousresearch/hermes-agent/issues/68920) |
| **[#68474](https://github.com/nousresearch/hermes-agent/issues/68474)** | **state.db Zeroed on Windows Update** | P1 | Windows | ❌ | [Link](https://github.com/nousresearch/hermes-agent/issues/68474) |
| **[#68911](https://github.com/nousresearch/hermes-agent/issues/68911)** | **Gateway Redacts E.164 Phone Numbers** | P2 | Gateway | ❌ | [Link](https://github.com/nousresearch/hermes-agent/issues/68911) |
| **[#68858](https://github.com/nousresearch/hermes-agent/issues/68858)** | **Disk I/O Saturation on Large state.db** | P2 | Gateway | ❌ | [Link](https://github.com/nousresearch/hermes-agent/issues/68858) |

### **Key Stability Concerns**
- **Windows-Specific Issues:**
  - `state.db` corruption during updates (#68474) and cold-boot failures (#68958) suggest **platform-specific regressions**.
- **Session Management:**
  - Multiple reports of **session leaks** (#68920, #68895) indicate a systemic issue in session cleanup.
- **Gateway Performance:**
  - **Disk I/O saturation** (#68858) and **MCP tool re-registration failures** (#67187) point to scalability bottlenecks.

---

## **6. Feature Requests & Roadmap Signals**
### **Likely Next-Feature Candidates**
| Issue | Feature | Likelihood of Inclusion | Link |
|-------|---------|-------------------------|------|
| **[#47349](https://github.com/nousresearch/hermes-agent/issues/47349)** | Configurable Memory Backends | **High** | [Link](https://github.com/nousresearch/hermes-agent/issues/47349) |
| **[#25083](https://github.com/nousresearch/hermes-agent/issues/25083)** | Immutable Skills | **Medium** | [Link](https://github.com/nousresearch/hermes-agent/issues/25083) |
| **[#68871](https://github.com/nousresearch/hermes-agent/issues/68871)** | Buzz Messaging Integration | **Low** | [Link](https://github.com/nousresearch/hermes-agent/issues/68871) |
| **[#68951](https://github.com/nousresearch/hermes-agent/issues/68951)** | Atomic Hermes (Mobile) Support | **Low** | [Link](https://github.com/nousresearch/hermes-agent/issues/68951) |

### **Roadmap Signals**
- **Memory & Skills:** High community demand for **flexibility in memory backends** and **security hardening** (immutable skills).
- **Messaging Platforms:** Interest in **Buzz integration** (self-hosted workspace) and **Atomic Hermes** (mobile).
- **Observability:** Recent PRs (#68882, #68883) suggest a push toward **metrics and telemetry**.

---

## **7. User Feedback Summary**
### **Pain Points**
1. **Stability Over Features:**
   - Users are **frustrated by regressions** (e.g., session leaks, Windows crashes) and prioritize fixes over new features.
2. **Memory & Skills Management:**
   - **Hardcoded memory systems** (#47349) and **lack of skill protection** (#25083) are seen as **governance risks**.
3. **Gateway Reliability:**
   - **MCP tool failures** (#67187) and **disk I/O issues** (#68858) disrupt long-running automation.
4. **CLI/TUI Usability:**
   - **Session management bugs** (#68920) and **PDF handling issues** (#68937) affect daily workflows.

### **Satisfaction/Dissatisfaction**
- **Positive:** Active triage, quick fixes for critical bugs (#68947, #68948).
- **Negative:** **No releases in weeks**, despite high bug volume. Users may perceive the project as **stagnant**.

---

## **8. Backlog Watch**
### **Long-Unanswered Issues (Needs Maintainer Attention)**
| Issue | Title | Age | Comments | Link |
|-------|-------|-----|----------|------|
| **[#25083](https://github.com/nousresearch/hermes-agent/issues/25083)** | Immutable Skills | **2 months** | 7 | [Link](https://github.com/nousresearch/hermes-agent/issues/25083) |
| **[#34385](https://github.com/nousresearch/hermes-agent/issues/34385)** | Kanban DB Corruption | **2 months** | 5 | [Link](https://github.com/nousresearch/hermes-agent/issues/34385) |
| **[#53819](https://github.com/nousresearch/hermes-agent/issues/53819)** | Kanban DB High-Load Corruption | **1 month** | 3 | [Link](https://github.com/nousresearch/hermes-agent/issues/53819) |
| **[#68465](https://github.com/nousresearch/hermes-agent/issues/68465)** | Telegram Gateway Stuck on Windows | **1 day** | 2 | [Link](https://github.com/nousresearch/hermes-agent/issues/68465) |

### **PRs Needing Review**
| PR | Title | Age | Link |
|----|-------|-----|------|
| **[#66520](https://github.com/nousresearch/hermes-agent/pull/66520)** | Migrate CI to GKE Self-Hosted Runners | **4 days** | [Link](https://github.com/nousresearch/hermes-agent/pull/66520) |
| **[#68199](https://github.com/nousresearch/hermes-agent/pull/68199)** | Matrix Approval Cards with Async Summary | **2 days** | [Link](https://github.com/nousresearch/hermes-agent/pull/68199) |
| **[#68217](https://github.com/nousresearch/hermes-agent/pull/68217)** | Remove Homebrew/PyPI Support | **2 days** | [Link](https://github.com/nousresearch/hermes-agent/pull/68217) |

### **Recommendations for Maintainers**
1. **Prioritize a release** (even a patch version) to address **Windows and session stability** concerns.
2. **Triage long-standing issues** (#25083, #34385) to unblock community contributions.
3. **Accelerate MCP tool reliability fixes**—this is a **blocker for automation workflows**.
4. **Improve communication**—users are concerned about the lack of releases despite high activity.

---
**Final Assessment:**
Hermes Agent is **actively developed but struggling with stability**. The team is making progress on critical bugs, but **long-term trust depends on regular releases and clearer roadmap communication**. The community is **eager for memory flexibility and security hardening**, but regressions are dampening enthusiasm. **Next steps should focus on stabilization and a release cycle.**

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# **PicoClaw Project Digest – 2026-07-22**

---

## **1. Today’s Overview**
PicoClaw remains actively maintained, with **8 issues and 8 PRs updated in the last 24 hours**, indicating steady development and community engagement. The project shows a balanced mix of **bug fixes, security updates, and feature enhancements**, though no new releases were published today. High-priority discussions focus on **security (libolm replacement), OAuth compliance (Google blocking Antigravity), and stability (Matrix sync failures, Web UI lag)**. The maintainers appear responsive, with several stale issues receiving recent updates.

---

## **2. Releases**
**No new releases today.**

---

## **3. Project Progress**
### **Merged/Closed PRs Today**
| PR | Status | Key Change | Impact |
|----|--------|------------|--------|
| **[#3233](https://github.com/sipeed/picoclaw/pull/3233)** | ✅ **Closed** | Fixes backward compatibility for PR #3222 | Prevents regression in model fallback logic |
| **[#303](https://github.com/sipeed/picoclaw/pull/303)** | ✅ **Closed** | Makes bot greeting name configurable via `bot_name` setting | Improves customization for identity management |
| **[#3282](https://github.com/sipeed/picoclaw/pull/3282)** | ✅ **Closed** | Adds policy-gated `system.exec.v1` to slim node companion | Enhances security for system execution |

### **Open PRs Advancing Today**
| PR | Status | Key Change | Potential Next Steps |
|----|--------|------------|----------------------|
| **[#3200](https://github.com/sipeed/picoclaw/pull/3200)** | 🔄 **Open** | Adds configurable default fallback chain for models | Likely to be merged soon; improves model routing |
| **[#3228](https://github.com/sipeed/picoclaw/pull/3228)** | 🔄 **Open** | Fixes `anthropic_messages` provider to support `cache_control` | Critical for Anthropic prompt caching |
| **[#3256](https://github.com/sipeed/picoclaw/pull/3256)** | 🔄 **Open** | Sends Feishu audio/video as native messages (not files) | Improves media handling in Feishu channel |

---

## **4. Community Hot Topics**
### **Most Active Issues (by comments/reactions)**
| Issue | Title | Comments | Key Discussion Points |
|-------|-------|----------|-----------------------|
| **[#3088](https://github.com/sipeed/picoclaw/issues/3088)** | Replace `libolm` with `vodozemac` | 9 comments, 2 👍 | **High-priority security concern** – `libolm` is unmaintained and insecure. Users seek a migration path. Maintainers may need to prioritize this. |
| **[#3278](https://github.com/sipeed/picoclaw/issues/3278)** | Google blocks Antigravity OAuth | 1 comment | **Critical blocker** – Google’s OAuth policy change prevents login. Users cannot authenticate with Antigravity. A fix is urgently needed. |
| **[#3203](https://github.com/sipeed/picoclaw/issues/3203)** | Matrix sync loop has no reconnection logic | 4 comments, 1 👍 | **Stability issue** – Network disruptions cause silent failures. Users report no automatic recovery, breaking long-running sessions. |

### **Underlying Needs**
- **Security & Compliance**: Replacing `libolm` and fixing OAuth policies are **non-negotiable** for production use.
- **Stability**: Matrix and Web UI issues suggest **long-running session reliability** needs improvement.
- **Media Handling**: Feishu audio/video support indicates **rich media integration** is a growing user demand.

---

## **5. Bugs & Stability**
### **Critical Bugs Reported Today**
| Issue | Title | Severity | Status | Fix PR? |
|-------|-------|----------|--------|---------|
| **[#3274](https://github.com/sipeed/picoclaw/issues/3274)** | Antigravity regression: `INVALID_ARGUMENT` | 🔴 **High** | Closed | No direct PR, but regression likely tied to tool schema changes |
| **[#3278](https://github.com/sipeed/picoclaw/issues/3278)** | Google blocks Antigravity OAuth | 🔴 **Critical** | Closed | No fix yet; requires OAuth policy update |
| **[#3281](https://github.com/sipeed/picoclaw/issues/3281)** | Web UI chat input laggy with history | 🟡 **Medium** | Open | No PR yet; likely a frontend performance issue |

### **Other Notable Bugs**
| Issue | Title | Severity | Status |
|-------|-------|----------|--------|
| **[#3232](https://github.com/sipeed/picoclaw/issues/3232)** | Rate limiting fails without fallback models | 🟡 **Medium** | Closed (PR #3233 fixed) |
| **[#3153](https://github.com/sipeed/picoclaw/issues/3153)** | Volcengine tool calls leak as raw text | 🟡 **Medium** | Closed |
| **[#3255](https://github.com/sipeed/picoclaw/issues/3255)** | DingTalk preview shows fixed "PicoClaw" | 🟢 **Low** | Open |

---

## **6. Feature Requests & Roadmap Signals**
### **User-Driven Feature Requests**
| Issue | Title | Priority | Potential Next Version |
|-------|-------|----------|------------------------|
| **[#3088](https://github.com/sipeed/picoclaw/issues/3088)** | Replace `libolm` with `vodozemac` | 🔴 **High** | Likely **v0.4.0** (security-focused) |
| **[#3200](https://github.com/sipeed/picoclaw/pull/3200)** | Configurable fallback chain | 🟡 **Medium** | Likely **v0.3.2** |
| **[#3228](https://github.com/sipeed/picoclaw/pull/3228)** | Anthropic prompt caching support | 🟡 **Medium** | Likely **v0.3.2** |

### **Roadmap Signals**
- **Security-first releases** (e.g., `libolm` → `vodozemac`) are likely prioritized.
- **OAuth compliance** (Google Antigravity) is a **blocker** for enterprise users.
- **Media handling improvements** (Feishu audio/video) suggest **richer channel support** is in progress.

---

## **7. User Feedback Summary**
### **Pain Points**
1. **Authentication Failures** – Google’s OAuth policy change breaks Antigravity logins, a **critical blocker** for users relying on this provider.
2. **Security Concerns** – `libolm` is **unmaintained and insecure**, pushing users toward alternatives like `vodozemac`.
3. **Stability Issues** – Matrix sync failures and Web UI lag **disrupt long-running sessions**, frustrating power users.
4. **Media Handling** – Feishu users want **native audio/video playback**, not file downloads.

### **Satisfaction Signals**
- **Positive**: Backward compatibility fixes (PR #3233) and configurability improvements (PR #303) show **responsive maintenance**.
- **Negative**: **OAuth and security issues** dominate complaints, indicating **production-readiness concerns**.

---

## **8. Backlog Watch**
### **Long-Unanswered Issues/PRs Needing Attention**
| Item | Title | Staleness | Priority | Maintainer Action Needed |
|------|-------|-----------|----------|--------------------------|
| **[#3088](https://github.com/sipeed/picoclaw/issues/3088)** | Replace `libolm` with `vodozemac` | ~43 days | 🔴 **Critical** | **Urgent**: Assign a maintainer to draft a migration guide or PR. |
| **[#3203](https://github.com/sipeed/picoclaw/issues/3203)** | Matrix sync loop has no reconnection logic | ~20 days | 🟡 **High** | **Needs design**: Propose a reconnection strategy (e.g., exponential backoff). |
| **[#3281](https://github.com/sipeed/picoclaw/issues/3281)** | Web UI chat input laggy with history | ~1 day | 🟡 **Medium** | **Needs investigation**: Could be a React/Vue performance issue. |
| **[#3279](https://github.com/sipeed/picoclaw/pull/3279)** | Prevent tool-call format leakage in seahorse summaries | ~1 day | 🟡 **Medium** | **Needs review**: PR is open but lacks feedback. |

### **Key Takeaways for Maintainers**
1. **Security and OAuth compliance** are **top priorities**—users cannot deploy PicoClaw in production without these fixes.
2. **Matrix stability** and **Web UI performance** are **user-facing pain points** that could drive adoption if resolved.
3. **Media handling** (Feishu, DingTalk) is a **growing expectation**—users want richer interactions.

---
**Next Digest Suggestion**: Monitor **OAuth fixes (Antigravity)**, **libolm migration progress**, and **Matrix reconnection logic**. A release (v0.3.2 or v0.4.0) addressing these would significantly improve project health.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# **NanoClaw Project Digest**
**Date:** 2026-07-22

---

## **1. Today’s Overview**
NanoClaw remains highly active with **12 PRs updated** and **1 new issue** in the last 24 hours, indicating strong development momentum. While no new releases were published, the project continues to refine core functionality, expand channel integrations, and address stability issues. The **LINE Official Account channel support** (Issue #3096) and **Telegram URL protection** (PR #3111) highlight regional and platform-specific improvements. The project maintains a healthy balance between feature development and bug fixes, with a notable focus on **WhatsApp media handling** and **OneCLI infrastructure**.

---

## **2. Releases**
**No new releases today.**

---

## **3. Project Progress**
### **Merged/Closed PRs (3)**
1. **[PR #3116](https://github.com/nanoclaw/nanoclaw/pull/3116)** – Sync PR (follows guidelines)
2. **[PR #3114](https://github.com/nanoclaw/nanoclaw/pull/3114)** – Langfuse tracing skill integration
3. **[PR #3095](https://github.com/nanoclaw/nanoclaw/pull/3095)** – Rewrite branch maintenance guide for registry-branch model

### **Open PRs (9)**
Key focus areas:
- **Channel Integrations:**
  - **[PR #3050](https://github.com/nanoclaw/nanoclaw/pull/3050)** – Add Dial to channel picker (feature skill)
  - **[Issue #3096](https://github.com/nanoclaw/nanoclaw/issues/3096)** – Propose `/add-line` skill for LINE Official Account support (Japan/Taiwan/Thailand focus)
- **Infrastructure & Stability:**
  - **[PR #3115](https://github.com/nanoclaw/nanoclaw/pull/3115)** – Block legacy Gmail API routes in OneCLI
  - **[PR #1530](https://github.com/nanoclaw/nanoclaw/pull/1530)** – Add SELinux `:z` label to Docker mounts (long-standing issue)
  - **[PR #2236](https://github.com/nanoclaw/nanoclaw/pull/2236)** – Align `WORKDIR` with group mount path
- **Bug Fixes:**
  - **[PR #3113](https://github.com/nanoclaw/nanoclaw/pull/3113)** – Fix WhatsApp inbound media staging
  - **[PR #2896](https://github.com/nanoclaw/nanoclaw/pull/2896)** – Apply media-failure notes at inbound boundary (follow-up to #2895)
  - **[PR #3112](https://github.com/nanoclaw/nanoclaw/pull/3112)** – Document OneCLI/Postgres port collision
  - **[PR #3111](https://github.com/nanoclaw/nanoclaw/pull/3111)** – Protect URLs from Telegram legacy-Markdown stripping

---

## **4. Community Hot Topics**
### **Most Active Items**
1. **[Issue #3096](https://github.com/nanoclaw/nanoclaw/issues/3096)** – **LINE Official Account Support**
   - **Why it matters:** LINE is dominant in Japan/Taiwan/Thailand, but lacks a `@chat-adapter/line` package. This aligns with NanoClaw’s **Request for Skills (RFS)** process.
   - **Activity:** 3 comments, 0 👍 (early-stage discussion).

2. **[PR #3111](https://github.com/nanoclaw/nanoclaw/pull/3111)** – **Telegram URL Protection**
   - **Why it matters:** Underscores in URLs (e.g., GitLab merge requests) break Telegram’s legacy Markdown parser, causing silent message drops.
   - **Activity:** High-impact stability fix, no comments yet.

3. **[PR #3115](https://github.com/nanoclaw/nanoclaw/pull/3115)** – **Gmail API Legacy Route Blocking**
   - **Why it matters:** Prevents deprecated Gmail API traffic, improving security and compliance.
   - **Activity:** Core-team labeled, awaiting review.

---

## **5. Bugs & Stability**
### **Critical/High-Severity Bugs**
| Issue/PR | Description | Status |
|----------|------------|--------|
| **[PR #3113](https://github.com/nanoclaw/nanoclaw/pull/3113)** | WhatsApp inbound media not staged correctly | **Open** |
| **[PR #2896](https://github.com/nanoclaw/nanoclaw/pull/2896)** | Media-failure notes applied too late in approval flow | **Open** |
| **[PR #1530](https://github.com/nanoclaw/nanoclaw/pull/1530)** | SELinux permission issues on Docker mounts | **Open (since March 2026)** |
| **[PR #2236](https://github.com/nanoclaw/nanoclaw/pull/2236)** | `WORKDIR` misalignment in containers | **Open (since May 2026)** |

### **Notes:**
- **WhatsApp media handling** is a recurring pain point (multiple PRs in this area).
- **SELinux support** remains unresolved despite being a long-standing issue (March 2026).
- **Telegram URL parsing** (PR #3111) is a critical fix for message reliability.

---

## **6. Feature Requests & Roadmap Signals**
### **Likely Next Features**
1. **LINE Official Account Integration** (#3096)
   - **Why:** Expands NanoClaw’s reach in high-growth Asian markets.
   - **Effort:** Medium (requires new `@chat-adapter/line` package).

2. **Dial Channel Support** (PR #3050)
   - **Why:** Adds another VoIP/telephony option for users.
   - **Status:** Ready for review (follows guidelines).

3. **Langfuse Tracing** (PR #3114)
   - **Why:** Enhances observability for AI agent workflows.
   - **Status:** Merged.

### **Roadmap Hints**
- **Infrastructure:** OneCLI improvements (Gmail blocking, Postgres collision docs).
- **Regional Focus:** LINE support for APAC markets.
- **Stability:** WhatsApp/Telegram media handling fixes.

---

## **7. User Feedback Summary**
### **Pain Points**
- **WhatsApp Media Failures:** Users report issues with inbound media handling (PRs #3113, #2896).
- **SELinux Compatibility:** Docker volume mounts fail on SELinux-enforcing systems (PR #1530, open since March).
- **Telegram URL Parsing:** Silent message drops due to legacy Markdown quirks (PR #3111).

### **Positive Signals**
- **Documentation Improvements:** Branch maintenance guide rewrite (PR #3095) and Traditional Chinese README (PR #2950).
- **Observability:** Langfuse tracing integration (PR #3114) suggests growing focus on debugging.

---

## **8. Backlog Watch**
### **Stale/Unresolved Issues**
| Issue/PR | Age | Description | Action Needed |
|----------|-----|------------|---------------|
| **[PR #1530](https://github.com/nanoclaw/nanoclaw/pull/1530)** | 4+ months | SELinux `:z` label for Docker mounts | **Review/merge** |
| **[PR #2236](https://github.com/nanoclaw/nanoclaw/pull/2236)** | 3+ months | `WORKDIR` misalignment | **Review/merge** |
| **[Issue #3096](https://github.com/nanoclaw/nanoclaw/issues/3096)** | 2 days | LINE Official Account skill proposal | **Discussion/approval** |

### **Recommendations**
1. **Prioritize SELinux fix** (#1530) – Affects a significant user base (Fedora/RHEL).
2. **Accelerate WhatsApp media fixes** (#3113, #2896) – High user impact.
3. **Review LINE skill proposal** (#3096) – Aligns with regional expansion goals.

---
**Project Health:** 🟢 **Active, with strong focus on stability and regional integrations.**
**Next Steps:** Address stale PRs, merge WhatsApp/Telegram fixes, and advance LINE/Dial channel work.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw Project Digest – 2026‑07‑22**  
*Compiled from the latest GitHub activity (issues, PRs, releases).*  

---  

### 1. Today's Overview  
- The project is in a high‑velocity “re‑architect” sprint: **43 issues** were updated in the last 24 h (30 still open, 13 closed) and **50 PRs** saw activity (34 remain open, 16 have been merged/closed).  
- The community is focusing on the **Reborn** re‑implementation – a ground‑up rewrite of the runtime, storage, extension host, and web UI that now ships as the `ironclaw` CLI binary.  
- A **single release candidate** (`ironclaw‑v1.0.0‑rc.1`) was published on 2026‑07‑20, marking the first public build of the new stack.  
- Activity levels are **above baseline** (≈ 40 % more issue updates and ≈ 30 % more PR updates than the 7‑day moving average), indicating strong momentum but also a crowded backlog.  

---  

### 2. Releases  
- **ironclaw‑v1.0.0‑rc.1** – 2026‑07‑20  
  - **What changed:**  
    - Complete re‑architecture of the agent runtime, storage layer, extension host, and Web UI.  
    - The monolithic `ironclaw` binary is now the **CLI entry point** for the new stack; the legacy `src/` codebase has been removed.  
    - Introduced `DeploymentConfig` as the unified composition configuration and removed in‑memory ratchet stores.  
    - Added experimental compact Google‑extension capabilities and a design‑system token playground for the Web UI.  
  - **Breaking changes:**  
    - All configuration must now be expressed via `DeploymentConfig`; legacy `.env`, workspace docs, and manual extension installs are no longer read automatically.  
    - The `ironclaw` binary is now the **only** CLI; any scripts referencing the old `ironclaw‑legacy` binary must be migrated.  
    - API signatures in `ironclaw_common`, `ironclaw_safety`, and `ironclaw_skills` have been bumped (semantic‑version bump to 0.x).  
  - **Migration notes:**  
    - Update CI/CD pipelines to point at the new binary path (`/usr/local/bin/ironclaw`).  
    - Replace any direct calls to legacy configuration file formats with the new JSON/YAML‑based `DeploymentConfig`.  
    - Review the “Reborn operator setup, config, diagnostics, and service lifecycle” epic (#4533) for migration‑specific guidance.  

---  

### 3. Project Progress  
| Metric | Value (last 24 h) |
|--------|------------------|
| Issues updated | **43** (30 open, 13 closed) |
| PRs updated | **50** (34 open, 16 merged/closed) |
| New releases | **1** (RC 1) |
| Merged PRs (today) | **16** – primarily bug‑fixes, documentation updates, and dependency bumps. |
| Notable merged PRs (by comment count) | - **#6435** – bump `fast-uri` (XS, low risk). <br> - **#6431** – bulk dependency update (XS, low risk). <br> - **#6153** – UI fix for running‑status display (S, low risk). |
| Open PRs with the highest comment counts | - **#6437** – “make model‑visible failures recoverable” (XL, low risk). <br> - **#6439** – “replay QA fixtures through Emulate.dev” (M, medium risk). |
| Closed PRs with impact | - **#6429** – “Always compile database backends” (removed feature‑flags for `libsql`/`postgres`). <br> - **#6302** – “preserve completed chat responses after stream retry”. |

Overall, the codebase is consolidating the **Reborn architecture** (witness‑based dispatch, unified `DeploymentConfig`, removal of in‑memory stores) while aggressively updating dependencies and polishing UI behavior.  

---  

### 4. Community Hot Topics  

| Issue / PR | Comments | Reactions | Link | Why it matters |
|------------|----------|-----------|------|----------------|
| **#2987** – *[EPIC] Track Reborn architecture landing strategy* | **44** | 👍: 0 | <https://github.com/nearai/ironclaw/issues/2987> | The highest‑commented issue tracks the **overall landing plan** for the Reborn architecture. Stakeholders are debating how to split the massive work into manageable PRs and how to coordinate reviews. |
| **#6389** – *Phase 4 (§5.11): collapse build_local_runtime + build_production_shaped* | **10** | 👍: 0 | <https://github.com/nearai/ironclaw/issues/6389> | Consolidating the two runtime‑assembly paths is seen as a **critical simplification** for the production build pipeline. Community wants a clean, single entry point (`build_runtime(cfg)`). |
| **#2767** – *[EPIC] Separate engine v2 capability background from callable tool schemas* | **7** | 👍: 0 | <https://github.com/nearai/ironclaw/issues/2767> | Concerned with **clean separation** of v2 background capability handling. This will affect future tool‑schema evolution and backward compatibility. |
| **PR #6437** – *fix(reborn): make model‑visible failures recoverable* | — (open) | — | <https://github.com/nearai/ironclaw/pull/6437> | XL‑size PR with **recoverability** at the core of stability. Community is watching for risk‑mitigation strategies around model‑failure handling. |
| **PR #6439** – *test(reborn): replay QA fixtures through Emulate.dev* | — (open) | — | <https://github.com/nearai/ironclaw/pull/6439> | Medium‑risk PR that introduces automated replay testing via Emulate.dev; reflects a push for **hermetic QA** of the new runtime. |

**Underlying needs:** The community is seeking **clarity, stability, and reproducible testing** for the massive Reborn rewrite. The high comment counts on architectural epics indicate a strong desire for **coordinated roadmap communication** and **risk mitigation** before the final v1.0 release.  

---  

### 5. Bugs & Stability  

| Issue | Severity* | Status | Link | Comments |
|-------|-----------|--------|------|----------|
| **#6396** – *Tier B follow‑up: gaps left by v1 retirement* | **Medium** | **Open** (just created) | <https://github.com/nearai/ironclaw/issues/6396> | Tracks missing pieces after deleting the legacy `src/` monolith; could cause runtime crashes if not addressed. |
| **#6434** – *seal process redispatch authority* | **Medium** | **Open** | <https://github.com/nearai/ironclaw/issues/6434> | Part of the witness‑dispatch refactor; incomplete implementation may leave **dispatch‑authority gaps**. |
| **#6436** – *refactor(reborn): make the Authorized witness the sole Allow‑path dispatch input* | **High** | **Open** (stacked on #6432) | <https://github.com/nearai/ironclaw/pull/6436> | Removes the “None‑fallback” path; a **high‑risk change** that could break existing dispatch patterns if merged before #6432 is fully validated. |
| **#6274** – *Finish DeploymentConfig as the main composition config* | **Low** | **Open** | <https://github.com/nearai/ironclaw/issues/6274> | Mostly documentation; low risk but essential for eventual release. |
| **Closed issues with bug‑like impact** (e.g., #6302, #6153, #6154) were merged today and addressed UI‑level regressions (stream‑retry handling, loading indicator). No critical production bugs were closed in the last 24 h. |

\*Severity assessed by potential impact on runtime correctness and user‑visible failures.  

---  

### 6. Feature Requests & Roadmap Signals  

| Requested Feature | Source (Issue/PR) | Likely Timeline |
|-------------------|-------------------|-----------------|
| **Custom instructions / master prompt section** – a dedicated UI area for user‑defined master prompts. | **#6433** – *Feature: Dedicated custom instructions* | Expected in a **post‑RC** minor release (v1.0.x) once UI design tokens are finalized (see #5563). |
| **Host‑level multi‑account support for all messaging channels** | **#2392** – *Host‑level multi‑account support* | Medium‑term; part of the “Gateway state convergence” epic (#2792). |
| **Persistent multi‑identity browser automation (Chrome + CDP)** | **#2355** – *Epic: persistent multi‑identity agent browsing* | Longer‑term; depends on sandbox‑runtime maturity. |
| **Runtime service profiles for credentialed generic HTTP & skill‑declared services** | **#4543** – *Epic: Runtime service profiles* | Planned for the **next** iteration of the Reborn runtime (post‑v1.0). |
| **Self‑serve secret setup & grants for user‑generated tools** | **#4545** – *Epic: Self‑serve secret setup* | Aligned with the “Reborn operator setup” roadmap; likely in a **v1.1** release. |
| **Unified generic extension runtime & honest state machine (reconcile main)** | **#6116** – *feat(reborn): unified generic extension runtime* | Currently **in review**; will shape the next extension SDK. |
| **Error‑recoverability endgame – 100 % error recovery contract** | **#6284** – *Epic: error‑recoverability endgame* | Core stability focus; expected to land before final v1.0 freeze. |

**Predictive signal:** The most frequently commented‑on issues (#2987, #6389, #2767) all revolve around **architectural consolidation and convergence**. The product team appears to be moving toward a **stable, production‑ready v1.0** with an emphasis on deterministic dispatch, robust testing, and polished operator tooling.  

---  

### 7. User Feedback Summary  

- **Pain points:**  
  1. **Configuration complexity** – users must juggle `.env`, workspace docs, JSON settings, and manual extension installs; lack of a unified schema makes auditing difficult.  
  2. **State drift** between UI and backend is perceived as a risk for operational reliability (Issue #2792).  
  3. **Legacy migration friction** – the shift from the old `ironclaw‑legacy` binary to the new CLI has forced users to update scripts and CI pipelines.  
  4. **Observability gaps** – missing built‑in log‑tail/redaction APIs and diagnostics hampers operator troubleshooting (Issues #4597, #4596).  

- **Desired capabilities:**  
  - A **master‑prompt UI section** (Issue #6433) to enable persistent personalization.  
  - **Multi‑account support** across messaging channels (Issue #2392) to support multi‑tenant deployments.  
  - **Self‑service secret management** for user‑generated tools (Issue #4545).  

- **Overall satisfaction:** Early adopters of the RC note **high enthusiasm** for the architectural vision but express **concern** over the steep migration curve and the need for clearer migration guides.  

---  

### 8. Backlog Watch  

| Issue | Age (days) | Comments | Open/Closed | Why it needs attention |
|-------|------------|----------|-------------|------------------------|
| **#2987** – Architecture landing strategy | **85** | 44 | Open | Central epic for Reborn landing; still unresolved, blocking many dependent PRs. |
| **#2767** – Separate engine v2 capability background | **87** | 7 | Open | Foundations for v2 behavior; pending decisions affect downstream tooling. |
| **#3031** – Reborn product‑surface migration | **85** | 7 | Open | Migration plan not yet finalized; impacts all downstream feature PRs. |
| **#2599** – Enforce crate guardrails & E2E | **96** | 2 | Open | Guardrails are critical for long‑term maintainability; low activity suggests possible stall. |
| **#6389** – Collapse build_local_runtime + build_production_shaped | **2** | 10 | Open | Directly tied to production build simplification; pending review. |
| **PR #6437** – Model‑visible failure recoverability | **0** | – | Open | High‑impact stability PR; needs timely review to avoid regressions before release. |
| **PR #6432** – Witness‑always‑present dispatch authority | **0** | – | Closed (merged) | Completed, but its **dependent** PRs (#6436, #6438) remain open and must be merged to close the loop. |

**Takeaway:** The backlog contains several **long‑standing architectural epics** that are prerequisites for many downstream features. Maintainers should prioritize closing the **#2987** landing strategy and ensuring that **#6389** and **#6432** are fully merged, as they unlock multiple dependent PRs and reduce overall cycle time.  

---  

**Project Health Snapshot**  
- **Velocity:** Above‑average issue and PR throughput (≈ 40 % ↑ issues, ≈ 30 % ↑ PRs vs. 7‑day avg).  
- **Release cadence:** One RC released; a stable v1.0 appears imminent if the current convergence pace holds.  
- **Risk:** High‑impact refactors (witness‑dispatch, DeploymentConfig migration) are still in progress; missing dependencies could delay the final release.  
- **Community engagement:** Strong focus on architectural stability and testing; elevated comment counts signal active scrutiny.  

*All links point to the live GitHub repository.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# **LobsterAI Project Digest**
**Date:** 2026-07-22
**Repository:** [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## **1. Today’s Overview**
LobsterAI remains active with **moderate development momentum** today. Over the past 24 hours, the project saw **1 new issue** and **10 pull requests (PRs)**, with **5 merged/closed** and **5 still open**. No new releases were published. The activity suggests a focus on **bug fixes, UI improvements, and dependency updates**, with no major feature additions. The lack of new releases may indicate stabilization efforts or preparation for a larger update.

---

## **2. Releases**
**No new releases today.**

---

## **3. Project Progress**
### **Merged/Closed PRs (5)**
| PR | Area | Summary | Status |
|----|------|---------|--------|
| **[#2372](https://github.com/netease-youdao/LobsterAI/pull/2372)** | OpenClaw, Renderer, Main | Fixes OpenClaw token proxy SSE truncation issues, improving streaming stability. | ✅ Closed |
| **[#2371](https://github.com/netease-youdao/LobsterAI/pull/2371)** | Renderer, Cowork, Artifacts | Enhances browser annotation handling, including support for style-only modifications and better session cleanup. | ✅ Closed |
| **[#2370](https://github.com/netease-youdao/LobsterAI/pull/2370)** | Renderer, Artifacts | Unifies subscription interception popups for artifact sharing and deployment, improving UX consistency. | ✅ Closed |
| **[#2369](https://github.com/netease-youdao/LobsterAI/pull/2369)** | Renderer, Artifacts | Optimizes artifact sharing workflow, separating "Create Share" and "Update Permissions" actions. | ✅ Closed |
| **[#2368](https://github.com/netease-youdao/LobsterAI/pull/2368)** | Windows | Enables silent Windows updates via NSIS installer (`/S` flag), improving unattended installation. | ✅ Closed |

### **Open PRs (5)**
| PR | Area | Summary | Status |
|----|------|---------|--------|
| **[#2374](https://github.com/netease-youdao/LobsterAI/pull/2374)** | Renderer | Adds a permanent toggle in **Settings → General** to hide sidebar ads. | 🔄 Open |
| **[#2373](https://github.com/netease-youdao/LobsterAI/pull/2373)** | Renderer, Cowork | Syncs image attachment handling with model vision capabilities (addresses [#1861](https://github.com/netease-youdao/LobsterAI/issues/1861)). | 🔄 Open |
| **[#1279](https://github.com/netease-youdao/LobsterAI/pull/1279)** | Dependencies | Bumps `cross-env` from `7.0.3` to `10.1.0` (security/performance). | 🔄 Stale |
| **[#1280](https://github.com/netease-youdao/LobsterAI/pull/1280)** | Dependencies | Upgrades `react-dom` from `18.3.1` to `19.2.4` (React 19 compatibility). | 🔄 Stale |
| **[#1281](https://github.com/netease-youdao/LobsterAI/pull/1281)** | Dependencies | Updates `vite` from `5.4.21` to `8.0.9` (major version bump). | 🔄 Stale |

**Key Takeaways:**
- **Critical fixes** merged today include **SSE streaming stability** (`#2372`) and **artifact sharing workflows** (`#2370`, `#2369`).
- **Dependency updates** are pending review (some marked as `stale` since April).
- **User-facing improvements** (e.g., ad banner toggle `#2374`) are in progress.

---

## **4. Community Hot Topics**
### **Most Active Issue**
**[#1861](https://github.com/netease-youdao/LobsterAI/issues/1861)** – **"图片附件不随模型切换重新处理"**
- **Status:** Open (since **2026-04-28**)
- **Activity:** Updated **2026-07-21** (comments: 2)
- **Summary:** Users report that **image attachments** (e.g., base64 vs. file paths) are **not resynced** when switching between vision-capable and non-vision models. This causes **visual models to miss images** or **non-vision models to receive invalid data**.
- **Underlying Need:** **Dynamic model capability awareness** in the UI/UX. Users expect attachments to **automatically adapt** to the selected model’s requirements.

**Related PR:** **[#2373](https://github.com/netease-youdao/LobsterAI/pull/2373)** (open) aims to fix this by syncing attachment behavior with model capabilities.

---

## **5. Bugs & Stability**
### **Critical Issues Reported Today**
| Issue | Severity | Status | Fix PR |
|-------|----------|--------|--------|
| **[#1861](https://github.com/netease-youdao/LobsterAI/issues/1861)** | **High** | Open | **[#2373](https://github.com/netease-youdao/LobsterAI/pull/2373)** (in review) |
| **SSE Truncation** (`#2372`) | **Medium** | Fixed | Merged |
| **Artifact Sharing Workflow** (`#2370`, `#2369`) | **Medium** | Fixed | Merged |

**Notes:**
- **No crashes or regressions** reported today.
- **Image attachment sync** (`#1861`) is the **highest-priority bug** and has a **pending fix PR**.

---

## **6. Feature Requests & Roadmap Signals**
### **Emerging User Needs**
1. **Permanent UI Customization** (`#2374`)
   - Users want **persistent control** over UI elements (e.g., hiding ads).
   - **Likely to land soon** (PR open, low risk).

2. **Model-Aware Attachments** (`#1861`, `#2373`)
   - Users expect **automatic adaptation** of attachments (e.g., base64 vs. file paths) when switching models.
   - **Critical for UX** and likely a **near-term priority**.

3. **Dependency Updates** (`#1279`, `#1280`, `#1281`)
   - **React 19** and **Vite 8** updates suggest a **major version bump** may be planned.
   - **Stale PRs** may need maintainer attention.

---

## **7. User Feedback Summary**
### **Pain Points**
- **Image Handling Confusion** (`#1861`)
  - Users are **frustrated** when attachments break after model switching.
  - **Expectation:** The app should **automatically adjust** attachment formats based on model capabilities.

- **UI/UX Inconsistencies**
  - **Sidebar ads** are a recurring complaint (addressed by `#2374`).
  - **Artifact sharing workflows** were previously confusing (now improved by `#2370`, `#2369`).

### **Positive Signals**
- **Silent Windows updates** (`#2368`) improve **enterprise/deployment UX**.
- **Annotation improvements** (`#2371`) enhance **collaborative workflows**.

---

## **8. Backlog Watch**
### **Long-Unanswered Issues/PRs**
| Item | Age | Status | Notes |
|------|-----|--------|-------|
| **[#1279](https://github.com/netease-youdao/LobsterAI/pull/1279)** | ~3 months | Stale | `cross-env` update (security risk if outdated). |
| **[#1280](https://github.com/netease-youdao/LobsterAI/pull/1280)** | ~3 months | Stale | `react-dom` upgrade (React 19 compatibility). |
| **[#1281](https://github.com/netease-youdao/LobsterAI/pull/1281)** | ~3 months | Stale | `vite` major version bump (performance/security). |
| **[#1861](https://github.com/netease-youdao/LobsterAI/issues/1861)** | ~3 months | Open | **High-impact bug** needing prioritization. |

**Action Items:**
- **Review stale dependency PRs** (security/performance risks).
- **Prioritize `#1861`** (image attachment sync) for the next release.

---
### **Final Assessment**
LobsterAI is in a **stabilization phase**, with **critical fixes merging** and **user-facing improvements in progress**. The **highest risk** is the **unresolved image attachment issue** (`#1861`), which could impact **core functionality**. Maintainers should **focus on**:
1. **Reviewing `#2373`** (image sync fix).
2. **Reviving stale dependency PRs** (security/compatibility).
3. **Planning a release** once `#1861` is resolved.

**Health Score:** **7/10** (Good progress, but critical bugs remain).

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis – Project Digest (2026‑07‑22)**  

---

### 1. Today’s Overview  
The core `moltis-org/moltis` repository remained quiet in terms of new issue activity – **0 new issues** were opened or updated in the last 24 h, and the number of active issues stayed at **0**. A single pull request (**#1161**) was updated, representing a minor dependency bump for the *docs* folder. With **0 closed PRs** and **0 released versions**, the project’s current tempo is essentially **maintenance‑only**, reflecting a low‑risk, stable codebase with limited external contributions.

---

### 2. Releases  
- **No new releases** were published today.  
- Consequently, there are **no changelog entries**, breaking‑change announcements, or migration guides to consider.

---

### 3. Project Progress  
- **Merged / Closed PRs:** 0 (the only PR referenced (#1161) is still **OPEN**).  
- **What advanced?** No feature merges, bug fixes, or refactor commits were merged recently, so no functional advancements or defect resolutions are recorded for today.

---

### 4. Community Hot Topics  
| Item | Status | Activity | Link | Likely Need |
|------|--------|----------|------|--------------|
| PR #1161 – Bump `astro` from 7.0.9 → 7.1.3 in `/docs` | **OPEN** | 0 👍, no comments | [moltis PR #1161](https://github.com/moltis-org/moltis/pull/1161) | Validation that the updated Astro version does not break documentation builds; maintainers may need to manually review to ensure compatibility with the docs pipeline. |
| No other issues or PRs are currently active. | — | — | — | — |

*Analysis*: The only “hot” item is an automated dependency update. Its presence suggests the maintainers rely on Dependabot for incremental library upgrades, but no community‑driven discussions are currently influencing the codebase.

---

### 5. Bugs & Stability  
- **Reported bugs / regressions:** 0 (no issue events recorded in the last 24 h).  
- **Fixes linked to PRs:** None at this time.  
- **Severity ranking:** N/A (no entries).  

*Conclusion*: Stability metrics remain flat; no volatility signals have emerged.

---

### 6. Feature Requests & Roadmap Signals  
- **User‑requested features:** No new feature‑request issues were opened or updated today.  
- **Potential roadmap signals:** The dependency bump indicates an ongoing effort to stay aligned with Astro’s release cadence, which may indirectly affect future documentation generation pipelines.  
- **Predicted next version content:** If the Astro upgrade proceeds without incidents, the next minor release could include updated doc generation tooling and possibly minor improvements to the developer experience around type‑checking or linting of documentation snippets.

---

### 7. User Feedback Summary  
- **Pain points / satisfaction:** With no user‑initiated issues, there is currently **no qualitative feedback** available about dissatisfaction or feature gaps. The silence may imply that existing users are content with the current state of the project.  
- **Use‑case observations:** Since the only update concerns documentation dependencies, users who consume the docs (e.g., developers integrating Moltis components) should watch for any breaking changes in the Astro ecosystem that could affect rendering pipelines.

---

### 8. Backlog Watch  
- **Long‑unanswered important Issues:** 0 (active issue count = 0).  
- **Open PRs needing maintainer attention:** **PR #1161** remains open; its review depends on confirming that the Astro version upgrade does not introduce required breaking changes for the docs build.  
- **Potential bottlenecks:** The maintainer team should monitor the dependency update to ensure it doesn’t trigger downstream failures in CI pipelines or documentation generation, as this is the sole item pending action.

---

### Overall Health Snapshot  
- **Activity level:** Low (maintenance‑only, no new feature or bug activity).  
- **Release cadence:** Stable, no recent version bumps.  
- **Community engagement:** Minimal – only an automated dependency PR is in progress.  
- **Risk profile:** Low; the primary watchpoint is ensuring dependency updates stay compatible with the documentation build process.  

*Prepared by:* Moltis Analyst (based on GitHub activity data up to 2026‑07‑22).

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw Project Digest – 2026‑07‑22**  

---

### 1. Today’s Overview  
- **Activity snapshot:** In the last 24 h the repository logged **41 issue updates** (20 still open, 21 closed) and **46 PR updates** (19 remain open, 27 merged/closed). The merge‑rate is high, indicating an active code‑integration pipeline.  
- **Release cadence:** A new pre‑release **v2.0.1‑beta.1** was published, bumping the version and tightening a few core behaviours.  
- **Overall health:** The mix of bug‑fixes, performance‑oriented PRs and a steady stream of community‑driven feature requests suggests the project is in a *mature‑but‑still‑evolving* phase. No critical service‑outage signals were reported today.

---

### 2. Releases  
| Version | Type | Notable Changes | Breaking / Migration Notes |
|---------|------|----------------|----------------------------|
| **v2.0.1‑beta.1** | Pre‑release | • Enforced absolute imports in the Tauri entry point (`src/qwenpaw/main.ts`). <br>• Version bump from 2.0.0‑beta.3 → 2.0.1‑beta.1. <br>• Fixed `OSError` in `_saved_tool_refs` when accessing memory‑space files. | No migration guide needed for beta users; the absolute‑import change may require a clean rebuild of the frontend (`npm run build`). |

*All changes are backward‑compatible with the existing API surface.*

---

### 3. Project Progress  
- **Merged / closed PRs (27):** The bulk of today’s merges focused on:  
  - Stabilising the **session‑history migration** (`#6068`).  
  - Hardening **workspace/fork gates** for OMP modes (`#6317`).  
  - Decoupling **slash‑command registration** and wiring shared safety checks (`#5796` & `#6313`).  
  - Adding **AI‑only model provider** support (`#6271`) and **scriptable environment reads** (`#6251`).  
- **Closed issues with fixes:** Several high‑impact bugs were resolved in merged PRs, notably the **session‑ID preservation** fix (`#6068`) and the **tool‑guard safety‑check integration** (`#6311`).  

---

### 4. Community Hot Topics  

| # | Issue / PR | Comments | Reaction | Link | Underlying Need |
|---|------------|----------|----------|------|-----------------|
| 1 | **[#2291 – CLOSED] Open‑Task Invitation** | 65 | 👍 0 | <https://github.com/agentscope-ai/QwenPaw/issues/2291> | Community wants a visible, self‑service way to claim “Not Started” tasks; signal of a healthy contributor pipeline. |
| 2 | **[#6257 – CLOSED] Identical Thinking in Multiple Tool Calls** | 13 | 👍 0 | <https://github.com/agentscope-ai/QwenPaw/issues/6257> | Agents repeat the same reasoning block across tool invocations, causing wasted tokens and unclear decision traces. |
| 3 | **[#4873 – CLOSED] Subagent Polling Loop on Feishu** | 5 | 👍 0 | <https://github.com/agentscope-ai/QwenPaw/issues/4873> | Parallel subagents generate excessive polling, preventing external interruption and inflating API usage. |
| 4 | **[#6297 – OPEN] Drag‑Drop Upload for Images/PDFs** | 4 | 👍 0 | <https://github.com/agentscope-ai/QwenPaw/issues/6297> | Users need a frictionless way to feed rich media into conversations (e.g., contract review). |
| 5 | **[#6281 – OPEN] Mobile‑Friendly Web Console** | 4 | 👍 0 | <https://github.com/agentscope-ai/QwenPaw/issues/6281> | Demand for on‑the‑go access to the control panel; currently desktop‑only UX. |
| 6 | **[#6299 – OPEN] Session‑Record Deletion Causes Seq Collision** | 3 | 👍 0 | <https://github.com/agentscope-ai/QwenPaw/issues/6299> | Deleting a chat leaves stale IDs that corrupt later sessions; leads to context “bleed‑through”. |
| 7 | **[#6314 – OPEN] RemoteProtocolError – Fin Sent Early** | 3 | 👍 0 | <https://github.com/agentscope-ai/QwenPaw/issues/6314> | Connection teardown by the client aborts message bodies, causing intermittent RPC failures. |
| 8 | **[#6083 – OPEN] Quick‑Access to Workspace Output Files** | 3 | 👍 0 | <https://github.com/agentscope-ai/QwenPaw/issues/6083> | Users want one‑click access to files generated by agents (reports, CSVs, images). |
| 9 | **[#6273 – OPEN] Unify Task‑Tracking & Concurrency Semantics** | 2 | 👍 0 | <https://github.com/agentscope-ai/QwenPaw/issues/6273> | Inconsistent task‑tracking across entry points creates race conditions and hidden state. |
|10 | **[#6307 – OPEN] 2‑Second Fixed Overhead per Reply in v2** | 2 | 👍 0 | <https://github.com/agentscope-ai/QwenPaw/issues/6307> | Performance regression compared to v1.x; impacts latency‑sensitive interactions. |

*These items together highlight three dominant themes:* **(a) reliability of multi‑agent orchestration**, **(b) usability of the UI/UX for non‑technical users**, and **(c) fine‑grained control over model‑session semantics.**

---

### 5. Bugs & Stability  

| Severity | Issue | Symptom | Fix Status |
|----------|-------|---------|------------|
| **Critical** | **#6299** – Session‑record ghosting | Deleted sessions leak into new chats → seq collisions, context contamination. | Fixed in PR **#6068** (session‑ID preservation). |
| **High** | **#6314** – RemoteProtocolError (Fin sent early) | Connection closed without full message body → intermittent RPC failures. | Under investigation; no merge yet. |
| **High** | **#6241** – Repeated `memory_search` & identical assistant output | Agent loops on the same query, tool‑call dead‑lock. | Partially addressed in PR **#6310** (rotate reasoning block). |
| **Medium** | **#5860** – Conversation loss & infinite loops in v2.0 | Random context loss, infinite self‑queries. | Observed in release notes; no merge yet. |
| **Medium** | **#6258** – `max_output_tokens` setting ignored | Model continues to exceed token limit. | No PR yet; feature flag likely pending. |
| **Low** | **#6320** – LaTeX rendering broken | Equations with radicals fail to render. | Open; low‑impact. |
| **Low** | **#6286** – Built‑in tool description bloat | 8‑10 k tokens per request even for rarely‑used tools. | Feature request to disable/customise (already closed as *enhancement*). |

*Overall stability appears solid for core workflows, but the recurring “identical thinking” and “session‑record” bugs merit close watch.*

---

### 6. Feature Requests & Roadmap Signals  

| Request | Issue | Potential Impact |
|---------|-------|------------------|
| **Drag‑and‑drop file upload** (images, PDFs, Office) | **#6297** | Enables rich‑media analysis; likely to be bundled in the next minor release. |
| **Mobile‑optimized Web Console** | **#6281** | Broadens adoption to tablet/phone; aligns with “Desktop‑as‑app” trend. |
| **Per‑conversation model selection** | **#6318** | Allows agents to switch models mid‑session; may ship as a “model‑profile” UI flag. |
| **Pre‑condition rules in AGENTS.md** | **#6321** | Improves safety around file edits; could be rolled into governance enhancements. |
| **Support qwen3.8‑max‑preview** | **#6285** | Directly benefits from Aliyun’s new model; likely to appear in the next provider‑list update. |
| **Custom terminal commands & mobile UI optimization** | **#6308** | Community‑driven roadmap item for power users. |
| **Unified task‑tracking & concurrency semantics** | **#6273** | Addresses hidden race conditions; may

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw Project Digest – 2026‑07‑22**  
*Compiled from the official GitHub activity feed (issues & PRs updated in the last 24 h). All links point to the live GitHub entries.*

---

## 1. Today's Overview
In the last 24 hours the ZeroClaw community recorded **50 issue updates** (48 still open, 2 newly closed) and **50 pull‑request updates** (41 open, 9 merged/closed). No new versioned release was published. Activity is steady but concentrated in a handful of high‑traffic topics – primarily agent‑level configuration, channel‑level bugs, and the emerging “goal‑mode” roadmap. The project remains healthy, with a balanced mix of bug‑fixes, RFC proposals, and experimental features, but the concentration of comments on a few security‑critical issues signals elevated maintenance pressure.

---

## 2. Releases
- **No new releases** were cut in the past day.  
- The repository’s *latest release* field remains empty, so there are no version‑upgrade notes or migration guides to report.

---

## 3. Project Progress
**Merged / closed PRs (9)**  
- **#8689** – Adds a `/goal` admission command to all channels, enabling start/stop, budget, pause, resume, cancel, and help actions.  
- **#8688** – Introduces trusted goal tools (`goal_start`, `goal_objective`, `goal_resume`) and delegation boundaries.  
- **#8687** – Implements a goal controller and verifier, providing explicit admission gating and restart recovery.  
- **#8746** – Fixes active‑goal self‑resume loops, preserving state across daemon reloads.  
- **#8996** – Prevents goal self‑resume loops after reloads (follow‑up to #8746).  
- **#9013** – Refactors TodoWrite display configuration out of the daemon into zerocode, making it configurable.  
- **#9244** – Extends the evaluation harness with structured memory seeds and exact expectation checks.  
- **#9245** – Adds judge‑calibration dumping, labeling, and finalisation utilities.  
- **#9248** – Appends an append‑only run‑history receipt feature for trend tracking.

**Open PRs showing forward motion**  
- **#8966** – Emits `model_context_window` separately from max_context_tokens trim budget (RPC changes).  
- **#8746** (again) – Addresses goal loop stability.  
- **#9242** – Provides a full Telegram‑setup guide, improving onboarding clarity.

Overall, the merged work is converging on **goal‑level durability**, **secure delegation**, and **evaluation observability**—the three pillars most discussed in the issue tracker.

---

## 4. Community Hot Topics
| Thread (comments) | Link | Core Concern | Why it matters |
|-------------------|------|--------------|----------------|
| **[#8226 – 6 comments]** Add typed per‑agent git identity for built‑in git operations | <https://github.com/zeroclaw-labs/zeroclaw/issues/8226> | Multi‑tenancy & identity isolation across agent lanes | Enables safe sharing of git credentials when multiple agents run in the same runtime. |
| **[#8505 – 6 comments]** Telegram channel cannot be configured | <https://github.com/zeroclaw-labs/zeroclaw/issues/8505> | Runtime/daemon failing to recognise configured Telegram channels | Blocks a major communication channel; severity labelled *S1*. |
| **[#8303 – 4 comments]** RFC: Goal mode for bounded autonomous session work | <https://github.com/zeroclaw-labs/zeroclaw/issues/8303> | Lack of a first‑class durable “goal” mode | Drives the roadmap for long‑running autonomous tasks. |
| **[#8603 – 4 comments]** RFC: OpenAI Chat Completions compatibility adapter | <https://github.com/zeroclaw-labs/zeroclaw/issues/8603> | Need for standard OpenAI API bindings | Opens the ecosystem to a wide range of UI clients. |
| **[#8279 – 3 comments]** Delegate bypasses parent allowlist – security risk | <https://github.com/zeroclaw-labs/zeroclaw/issues/8279> | Sub‑agents can invoke prohibited tools | Direct security impact (S0). |
| **[#8410 – 3 comments]** Channel tasks need a first‑class intentional no‑reply outcome | <https://github.com/zeroclaw-labs/zeroclaw/issues/8410> | Silent fallback causing unwanted UI noise | Improves UX for conditional channel logic. |
| **[#8541 – 3 comments]** Matrix channel opt‑in thread‑scoped history | <https://github.com/zeroclaw-labs/zeroclaw/issues/8541> | History sharing boundaries for Matrix threads | Enhances conversational context handling. |
| **[#8600 – 3 comments]** Easy per‑chat model switching for multi‑model providers | <https://github.com/zeroclaw-labs/zeroclaw/issues/8600> | Need to flip models on‑the‑fly without re‑initialising providers | Facilitates cost/quality trade‑offs per conversation. |
| **[#8720 – 3 comments]** Disable cachePoint for Bedrock Nova‑2‑Lite via config | <https://github.com/zeroclaw-labs/zeroclaw/issues/8720> | Random caching errors on Bedrock model | Affects reliability of a high‑traffic provider. |
| **[#8396 – 2 comments]** Make wire protocol first‑class in provider construction | <https://github.com/zeroclaw-labs/zeroclaw/issues/8396> | Standardising provider onboarding | Influences future provider ecosystem stability. |
| **[#8731 – 2 comments]** StdIO MCP servers accumulate as zombie processes | <https://github.com/zeroclaw-labs/zeroclaw/issues/8731> | Process reclamation in daemon | Direct stability / OOM risk. |

*Takeaway:* The most commented threads cluster around **identity & security (git, delegate)**, **channel configuration (Telegram, Matrix)**, and **goal‑level durability**. These are the pain points driving the most immediate community discussion.

---

## 5. Bugs & Stability
| Issue (severity) | Link | Symptom | Current Fix Status |
|-------------------|------|---------|--------------------|
| **[#8279 – S0]** Delegate bypasses parent allowlist | <https://github.com/zeroclaw-labs/zeroclaw/issues/8279> | Sub‑agent can invoke disallowed tools | Under discussion; no PR yet. |
| **[#8505 – S1]** Telegram channel cannot be configured | <https://github.com/zeroclaw-labs/zeroclaw/issues/8505> | Runtime reports “channels not set up” despite config | Open; community awaiting fix. |
| **[#8731 – S2]** MCP servers leak as zombie processes | <https://github.com/zeroclaw-labs/zeroclaw/issues/8731> | RSS growth / OOM in daemon loops | Fixes being merged (e.g., #8746, #8996). |
| **[#8642 – S2]** MCP tool‑schema cloning drives unbounded RSS | <https://github.com/zeroclaw-labs/zeroclaw/issues/8642> | Memory growth during agent loops | Partially addressed by #8633; still monitored. |
| **[#8718 – S2]** `zeroclaw config init` ships a template rejected by daemon | <https://github.com/zeroclaw-labs/zeroclaw/issues/8718> | Voice transcription silently disabled for new installs | Fix scheduled for next config release. |
| **[#9240 – S?]** `save_dirty()` drops writes with dot‑containing keys | <https://github.com/zeroclaw-labs/zeroclaw/issues/9240> | Config entries like `cost.rates.providers.models.gpt-4.1` are ignored | Open; requires change to map‑parsing logic. |
| **[#9247 – S0]** Shell tool bypasses workspace boundary via symlink | <https://github.com/zeroclaw-labs/zeroclaw/issues/9247> | Potential data‑loss / security exposure | Open; requires filesystem‑policy overhaul. |
| **[#9120 – Closed]** SOP routing evaluates switch after false top‑level when | <https://github.com/zeroclaw-labs/zeroclaw/issues/9120> | Incorrect routing after guard failure | Resolved in PR #9183 (merged). |

*Ranking by severity*: S0 (security) > S1 (workflow‑blocking) > S2 (degraded behavior) > lower‑impact bugs. At present, **four S0/S1 issues remain open without a merged fix**, representing the most urgent stability work.

---

## 6. Feature Requests & Roadmap Signals
| Request (issue) | Link | Desired Capability | Likelihood of near‑term inclusion |
|------------------|------|--------------------|-----------------------------------|
| Typed per‑agent git identity | <https://github.com/zeroclaw-labs/zeroclaw/issues/8226> | Secure, multi‑tenant git credentials | High – already in active design. |
| Goal mode for bounded autonomous sessions | <https://github.com/zeroclaw-labs/zeroclaw/issues/8303> | Long‑running, pause‑resumable objectives | Very high – central roadmap item. |
| OpenAI Chat Completions adapter | <https://github.com/zeroclaw-labs/zeroclaw/issues/8603> | First‑class integration with Web UI clients | Medium – RFC drafted, implementation pending. |
| Mixture‑of‑Agents (MoA) virtual model provider | <https://github.com/zeroclaw-labs/zeroclaw/issues/8568> | Aggregated model output for complex tasks | Medium – under discussion, prototype exists. |
| Per‑chat model switching for multi‑model providers | <https://github.com/zeroclaw-labs/zeroclaw/issues/8600> | Easy provider‑level model swaps | High – already prototyped in PR #8600. |
| Matrix channel thread‑scoped history | <https://github.com/zeroclaw-labs/zeroclaw/issues/8541> | Conversation‑level context isolation | Medium – accepted RFC, implementation pending. |
| Rich Telegram messages (Bot API 10.1) | <https://github.com/zeroclaw-labs/zeroclaw/issues/8415> | Improved UX (buttons, carousel, etc.) | Low‑Medium – scheduled after core channel fixes. |

*Signal*: The community is gravitating toward **goal durability**, **secure delegation**, and **API‑standardisation** (Chat Completions, rich messaging). These are likely to appear in the next minor release cycle.

---

## 7. User Feedback Summary
- **Configuration onboarding friction**: Users report that `zeroclaw config init` creates a config snippet that the daemon immediately rejects, leaving transcription disabled without explicit notice.  
- **Documentation mismatches**: Several Telegram‑related guides are outdated or incomplete, leading to “channel not set up” errors despite following steps.  
- **Silent data loss**: `save_dirty()` drops writes when map keys contain a dot (e.g., `cost.rates.providers.models.gpt-4.1`), causing hidden loss of cost data.  
- **Security concerns**: Delegates can invoke tools not whitelisted by the parent policy, raising S0‑level worries.  
- **Desire for richer telemetry**: The evaluation harness generates JSON/ JUnit receipts but lacks a visual dashboard for trend analysis; users request a trend‑tracking UI (Issue #9228).  
- **Positive sentiment**: The introduction of goal‑mode RFCs and the moving away from “ClawHub” toward git‑based skill installation have been praised as “clear steps forward”.

Overall satisfaction appears **moderately high** among early adopters who leverage advanced features (agents, SOP, goal), but **pain points around configuration, documentation, and security** dampen the experience for newcomers.

---

## 8. Backlog Watch
| Issue (age) | Link | Why it deserves attention |
|-------------|------|---------------------------|
| **[#8288 – Tracker]** SOP milestone: daemon‑owned S

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*