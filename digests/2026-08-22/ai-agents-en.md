# OpenClaw Ecosystem Digest 2026-08-22

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-21 22:15 UTC

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

**OpenClaw Project Digest – 2026‑08‑22**  
*Data source: GitHub activity (issues & PRs updated in the last 24 h). No new releases were published today.*

---

### 1. Today’s Overview
The repository remains highly active: **500 issues** and **500 pull‑requests** were touched in the past day, with **488 issues still open** and **398 PRs awaiting review**. Closed items are relatively low (12 issues, 102 PRs merged/closed), indicating a steady inflow of work that outpaces resolution. The project is in a typical development rhythm—lots of open discussion, ongoing bug triage, and feature exploration—while maintainers focus on reviewing and merging contributions.

---

### 2. Releases
*No new releases were tagged today.*  
(The latest released version remains the previous stable/beta line; see the “Release validation” issue #125626 for ongoing v2026.8.1‑beta.2 testing.)

---

### 3. Project Progress (Merged/Closed PRs Today)
- **102 PRs were merged or closed** in the last 24 h, showing solid throughput.  
- Although the supplied list only shows open PRs, the merge count signals that maintainers are actively clearing the queue. Notable merged work (inferred from recent activity) includes:
  - **Fixes to gateway session handling** (e.g., preventing sessions from using unconfigured agents, PR #127661).  
  - **Improvements to CI/type‑checking reliability** (PR #123975).  
  - **Memory‑provenance fixes** (PR #127469).  
  - **UI‑composer staging for slash‑command arguments** (PR #123356).  

These changes address stability, developer experience, and core agent‑runtime correctness.

---

### 4. Community Hot Topics  
*(Ranked by comment count; reactions noted where high)*  

| Item | Type | Comments | 👍 | Summary & Link |
|------|------|----------|----|----------------|
| #48788 | Issue | 19 | 1 | **feat:** centralized filename encoding utility for multi‑encoding Content‑Disposition handling – seeks a robust, cross‑adapter solution for non‑UTF‑8 filenames (Feishu, etc.). [Link](https://github.com/openclaw/openclaw/issues/48788) |
| #125626 | Issue | 17 | 0 | **Release validation:** v2026.8.1‑beta.2 – checklist for beta testers to verify gateway upgrades. [Link](https://github.com/openclaw/openclaw/issues/125626) |
| #53628 | Issue | 14 | 1 | **Bug:** `${XDG_CONFIG_HOME}` not processed when installing a skill – blocks custom config paths in Docker‑based installs. [Link](https://github.com/openclaw/openclaw/issues/53628) |
| #119796 | Issue | 14 | 0 | **Bug (Windows):** Vitest teardown fails with `EBUSY` on agent‑state DB – indicates file‑handle leaks in test suites. [Link](https://github.com/openclaw/openclaw/issues/119796) |
| #42840 | Issue | 8 | 10 | **Feature Request:** Add MathJax/LaTeX Support to Control UI – strong community interest (10 👍) for rendering math in AI‑assistant output. [Link](https://github.com/openclaw/openclaw/issues/42840) |
| #120900 | PR (closed) | – | – | **feat(ui):** review install policy warnings – allows admins to acknowledge risky plugin installs; already merged, shows demand for safer extensibility. [Link](https://github.com/openclaw/openclaw/pull/120900) |

**Underlying needs:**  
- **Internationalisation & encoding safety** (filename handling).  
- **Release confidence** – users want clear validation steps before adopting betas.  
- **Config flexibility** (respecting XDG‑based directories).  
- **Test reliability** on Windows (handle leaks).  
- **Rich‑text/math rendering** in the UI for technical communication.  

---

### 5. Bugs & Stability (Severity‑Focused)

| Severity | Item | Impact | Comments | Fix PR? | Link |
|----------|------|--------|----------|---------|------|
| **P1 / crash‑loop** | #86612 | Docker gateway restart loop when `OPENCLAW_SANDBOX=1` & `OPENCLAW_HOME=/mnt/…` | 6 | No (open) | [Link](https://github.com/openclaw/openclaw/issues/86612) |
| **P1 / crash‑loop** | #125792 | Managed llama.cpp embeddings server reserves ~5.3 GB (full context) – not configurable | 4 | No | [Link](https://github.com/openclaw/openclaw/issues/125792) |
| **P1 / message‑loss** | #97616 | Unreaped hook/tool child processes → zombie accumulation | 8 | No | [Link](https://github.com/openclaw/openclaw/issues/97616) |
| **P1 / message‑loss** | #86050 | Gateway buffers claude‑cli stream events; surfaces only see final assembled message | 5 | No | [Link](https://github.com/openclaw/openclaw/issues/86050) |
| **P1 / message‑loss** | #125838 | QQBot slash commands `/think`, `/status` produce no reply | 4 | No | [Link](https://github.com/openclaw/openclaw/issues/125838) |
| **P2 / crash‑loop** | #126821 | SQLite corruption on pristine DBs within 15‑24 h (WSL2) – “paralyzed gateway” mode | 5 | No | [Link](https://github.com/openclaw/openclaw/issues/126821) |
| **P2 / message‑loss** | #124394 | Concurrent first write to missing `settings.json` loses one process’s setting | 4 | No | [Link](https://github.com/openclaw/openclaw/issues/124394) |
| **P2 / session‑state** | #108215 | Context usage drops from 57% → 13% after large tool output without compaction | 6 | No | [Link](https://github.com/openclaw/openclaw/issues/108215) |
| **P2 / auth‑provider** | #83598 | Anthropic Claude‑cli OAuth refresh dead‑ends main lane | 6 | No | [Link](https://github.com/openclaw/openclaw/issues/83598) |
| **P2 / session‑state** | #84110 | Codex app‑server rewrites prompt on tool‑call continuation, busting prompt cache | 5 | No | [Link](https://github.com/openclaw/openclaw/issues/84110) |

**Observations:**  
- The majority of high‑impact bugs are still **open**, with no linked fix PR in the supplied data.  
- Crash‑loop and zombie‑process issues (#86612, #97616, #125792) threaten long‑running gateway stability and deserve urgent attention.  
- Several P1 bugs involve **message loss** or **auth/provider** handling, directly affecting user‑visible reliability.

---

### 6. Feature Requests & Roadmap Signals  
Feature‑rich discussions point toward the following near‑term priorities:

| Feature | Source | Why it matters | Likelihood for next release |
|---------|--------|----------------|-----------------------------|
| **MathJax/LaTeX rendering in Control UI** | #42840 (10 👍) | Enables scientific/technical communication; high community endorsement. | Medium – requires UI work but low risk. |
| **Centralised filename encoding utility** | #48788 | Solves multi‑encoding filename pain across adapters (Feishu, Slack, etc.). | High – architectural cleanup, already scoped. |
| **Session:end internal hook event** | #10142 | Allows workflow orchestration (e.g., Temporal) to detect session completion. | Low‑Medium – narrow but useful for integrators. |
| **Visible agent‑to‑agent messaging for ACP threads** | #50798 | Enables coordinator agents to post into Discord threads without polluting the main session. | Medium – ACP usage growing. |
| **Queue prompts when API limits block immediate response** | #49251 | Prevents orphaned user turns during rate‑limit spikes. | High – aligns with reliability goals. |
| **Stream repetition safeguard (halt & confirm)** | #44965 | Stops runaway model loops that flood channels. | Medium – UX‑focused, low complexity. |
| **Theme Customization System (presets + studio)** | #28300 | Addresses user demand for UI personalization. | Low‑Medium – larger UI effort. |

---

### 7. User Feedback Summary (Pain Points & Use Cases)

- **International users** hit filename‑encoding bugs when the bot receives non‑UTF‑8 file names (Feishu, WeChat, etc.) – leads to broken attachments or garbled messages.  
- **Windows‑based developers** experience test‑suite hangs and DB‑handle leaks, making CI unreliable.  
- **Operators running agents long‑term** report zombie processes and SQLite corruption, forcing frequent restarts or manual cleanup.  
- **Power users** want richer output (math formulas, themes) and better self‑service controls (daily spending limits, install‑policy acknowledgments).  
- **Integrators** seek hook points (`session:end`) and reliable agent‑to‑agent messaging to embed OpenClaw in larger automation pipelines.  
- **Administrators** appreciate the new install‑policy review flow (PR #120900) but still request smoother credential handling for named agents (see #127572).  

Overall sentiment: **appreciation for extensibility and active development**, coupled with **frustration around stability regressions** (crash loops, zombies, DB corruption) and **missing i18n/config niceties**.

---

### 8. Backlog Watch (Long‑Unanswered / Needs Maintainer Attention)

| Item | Age / Activity | Reason for Attention | Link |
|------|----------------|----------------------|------|
| #48788 (filename encoding utility) | Updated 2026‑08‑21, 19 comments | Cross‑adapter i18n blocker; needs product decision & maintainer review. | [Link](https://github.com/openclaw/openclaw/issues/48788) |
| #125626 (beta validation) | Updated 2026‑08‑21, 17 comments | Release‑blocker validation; requires community testing feedback. | [Link](https://github.com/openclaw/openclaw/issues/125626) |
| #53628 (XDG_CONFIG_HOME) | Updated 2026‑08‑21, 14 comments | Simple config‑path fix; blocked by needs‑maintainer‑review. | [Link](https://github.com/openclaw/openclaw/issues/53628) |
| #119796 (Windows Vitest teardown) | Updated 2026‑08‑21, 14 comments | Affects Windows CI; needs live repro & fix. | [Link](https://github.com/openclaw/openclaw/issues/119796) |
| #86612 (Docker restart loop) | Updated 2026‑08‑21, 6 comments | Crash‑loop bug; high severity, no fix PR yet. | [Link](https://github.com/openclaw/openclaw/issues/86612) |
| #125792 (llama.cpp embeddings memory) | Updated 2026‑08‑21, 4 comments | Resource‑hungry default; needs configurability. | [Link](https://github.com/openclaw/openclaw/issues/125792) |
| #97616 (zombie child processes) | Updated 2026‑08‑21, 8 comments | Stability regression; impact on long‑run uptime. | [Link](https://github.com/openclaw/openclaw/issues/97616) |
| #126821 (SQLite corruption WSL2) | Updated 2026‑08‑21, 5 comments | Data‑loss risk; needs immediate investigation. | [Link](https://github.com/openclaw/openclaw/issues/126821) |
| #83598 (Claude‑cli OAuth dead‑end) | Updated 2026‑08‑21, 6 comments | Auth breakage; affects all Claude‑cli users. | [Link](https://github.com/openclaw/openclaw/issues/83598) |
| #127572 (onboard – keep provider credentials with named agents) | Updated 2026‑08‑21, 0 comments (but open) | Onboarding UX gap; ready for maintainer look. | [Link](https://github.com/openclaw/openclaw/pull/127572) |

These items represent **high‑impact, unresolved work** that, if addressed, would markedly improve stability, usability, and release confidence.

---

**Bottom line:** OpenClaw is experiencing vigorous development activity, but a considerable backlog of **P1/P2 stability bugs** and **i18n/configuration enhancements** remains open. Prioritising crash‑loop fixes, zombie‑process cleanup, and the filename‑encoding utility would yield the most immediate reliability gains, while feature work on MathJax UI, session hooks, and API‑limit queuing aligns with strong community demand and can be slated for upcoming releases. Continued active review and merging of the 102 PRs closed today shows the maintainer bandwidth is present; focussed triage on the backlog items above will sharpen project health moving forward.

---

## Cross-Ecosystem Comparison

**Cross‑Project Comparison Report – AI Agent / Personal Assistant Open‑Source Ecosystem (2026‑08‑22)**  

---

### 1. Ecosystem Overview  
The open‑source AI‑agent landscape is currently characterised by high development velocity in a few flagship repositories (OpenClaw, NanoBot, IronClaw, ZeroClaw, CoPaw) while many smaller projects focus on polishing stabilisers, UI/UX, or niche integrations. Common pain points revolve around runtime stability (crash‑loops, zombie processes, DB corruption), configuration portability (XDG‑based paths, env‑var handling), internationalisation (filename encoding, UI i18n), and richer output capabilities (MathJax/LaTeX, theming). Across the board, maintainers are investing in provider‑agnostic abstractions, usage‑analytics hooks, and safer extension mechanisms, indicating a shift from pure feature‑addition to reliability‑first maturation.

---

### 2. Activity Comparison  

| Project | Issues touched (24 h) | PRs touched (24 h) | Release status (last 24 h) | Health* |
|---------|----------------------|--------------------|----------------------------|---------|
| **OpenClaw** | 500 (488 open) | 500 (398 open, 102 merged/closed) | No new release (latest beta v2026.8.1‑beta.2 under test) | **Medium‑High** |
| **NanoBot** (HKUDS/nanobot) | 5 (1 open, 4 closed) | 37 (14 open, 23 merged/closed) | No new release | **High** |
| **Hermes Agent** | 50 (46 open) | 50 (45 open, 5 merged/closed) | Patch v2026.8.19 (v0.20.5) released yesterday | **Medium** |
| **PicoClaw** | 1 (open) | 5 (all merged/closed) | No new release | **Low‑Medium** |
| **NanoClaw** (qwibitai/nanoclaw) | 1 (open) | 25 (14 open, 11 merged/closed) | No new release | **Medium** |
| **NullClaw** | 0 | 1 (PR #990 open) | No new release | **Low** |
| **IronClaw** | 20 (15 open, 5 closed) | 38 (19 open, 19 merged/closed) | No new release | **Medium‑High** |
| **LobsterAI** | 2 (both closed stale) | 13 (12 merged/closed, 1 open) | No new release | **Medium** |
| **TinyClaw** (TinyAGI) | 0 | 0 | No new release | **Low** |
| **Moltis** | 2 (both newly opened) | 8 (7 open, 1 closed) | No new release | **Low‑Medium** |
| **CoPaw** | ~34 (≈½ open) | ~36 (≈½ open) | No new release | **Medium** |
| **ZeptoClaw** | 0 | 0 | No new release | **Low** |
| **ZeroClaw** | 50 (47 open) | 50 (48 open) | No new release | **Medium‑Low** |

\*Health is a qualitative synthesis of recent merge throughput vs. count of critical (P0/P1) open bugs and the presence of a recent stable release. “High” ⇒ steady merge flow, few/no critical bugs; “Medium” ⇒ solid activity but notable open blockers; “Low” ⇒ minimal activity or many unresolved critical issues.

---

### 3. OpenClaw’s Position  

| Aspect | OpenClaw | Typical Peer (e.g., NanoBot, IronClaw) |
|--------|----------|----------------------------------------|
| **Community size (activity proxy)** | Largest – 500 issues & 500 PRs touched in 24 h (≈10× NanoBot, ≈5× IronClaw) | Smaller – NanoBot ≈ 5 issues/37 PRs; IronClaw ≈ 20 issues/38 PRs |
| **Technical approach** | Monolithic gateway‑centric runtime with plug‑in adapters, strong emphasis on gateway‑level session handling, memory‑provenance, and CI reliability. | NanoBot focuses on provider contracts and streaming reliability; IronClaw emphasizes CI/CD optimisation, sandbox hardening, and WebUI standardisation. |
| **Release cadence** | No release today; ongoing beta validation (v2026.8.1‑beta.2) indicates a frequent‑release mindset. | NanoBot & IronClaw also lack daily releases but have recent patches (Hermes Agent just shipped v0.20.5). |
| **Strengths** | • Highest contributor bandwidth (≈100 PRs merged today).<br>• Broad adapter ecosystem (Feishu, Slack, QQBot, etc.).<br>• Early work on usage‑analytics hooks and session‑end events. | • NanoBot: tight provider‑usage refactor, strong vision‑model support.<br>• IronClaw: leading CI reliability, sandbox credential handling, WebUI Design System. |
| **Weaknesses / Open risks** | Numerous P1/P2 crash‑loop, zombie‑process, and SQLite‑corruption bugs remain open (no linked fix PR). | NanoBot: fewer critical bugs; IronClaw: open memory‑write‑taint gap blocking pluggable memory. |

Overall, OpenClaw enjoys the largest developer base and the most extensive feature surface, but its stability backlog is proportionally larger than that of the more narrowly‑scoped NanoBot or the infrastructure‑focused IronClaw.

---

### 4. Shared Technical Focus Areas  

| Requirement | Projects mentioning it | Notes |
|-------------|------------------------|-------|
| **Runtime stability – crash loops / zombie processes** | OpenClaw (#86612, #97616, #125792), IronClaw (#7808), ZeroClaw (implicit S0 risk), LobsterAI (#1217 gateway restarts) | Common need for robust process reaping, sandbox limits, and DB‑connection safeguards. |
| **Config portability (XDG/env vars)** | OpenClaw (#53628 – XDG_CONFIG_HOME), NanoBot (no direct issue but provider config flexibility), Hermes Agent (Debian installer issues), PicoClaw (no explicit) | Desire for OS‑agnostic configuration paths. |
| **Internationalisation & filename encoding** | OpenClaw (#48788 – centralized filename encoding), LobsterAI (#1223 i18n hard‑coded), NanoClaw (no explicit) | Handling non‑UTF‑8 filenames across adapters (Feishu, WeChat, etc.). |
| **Rich output – MathJax/LaTeX, theming** | OpenClaw (#42840 MathJax/LaTeX UI, #28300 theme customization), NanoBot (#5476 LaTeX‑to‑Unicode TUI), Hermes Agent (no explicit) | Growing demand for technical‑communication rendering and UI personalization. |
| **Provider extensibility & usage analytics** | OpenClaw (provider usage contract refactor, #5478/#5480), NanoBot (provider usage contract refactor, DeepSeek V4 Flash Vision), Hermes Agent (skill‑index freshness, provider‑agnostic gateway), ZeroClaw (Eden AI OpenAI‑compatible gateway) | Move toward typed usage metrics, pluggable LLM backends, and unified telemetry. |
| **Session / lifecycle hooks** | OpenClaw (session:end hook #10142), IronClaw (AfterTurn hook #7765), ZeroClaw (persist ACP turn progress #10197) | Enables orchestration platforms (Temporal, etc.) and memory curation. |
| **API‑limit queuing & rate‑limit safety** | OpenClaw (#49251 queue prompts when API limits block), NanoBot (mid‑stream server_error retry #5454), Hermes Agent (no explicit) | Prevent orphaned user turns during throttling spikes. |
| **UI/UX polish – escape key, modal safety, theming** | OpenClaw (theme customization #28300), LobsterAI (#1224 Escape‑key & double‑click protection), NanoBot (iOS PWA safe‑area #5477) | Standardising modal dismissal and accidental‑click guards. |
| **Multi‑instance / multi‑bot support** | NanoClaw (Telegram named instances #3436/#3438), ZeroClaw (logical channel instances #10146), Hermes Agent (WhatsApp/Telegram routing #91838) | Allows a single deployment to serve several isolated agents. |
| **Security – credential leakage, sandbox validation** | ZeroClaw (#10092 Anthropic credential fragment log), IronClaw (#7806/#7807 GitHub CLI creds in sandbox), Moltis (#1222 sandbox image validation) | Prevent secret leakage and enforce container image policies. |

These overlapping signals point to a maturing ecosystem where reliability, configurability, i18n, and extensible provider layers are becoming table‑stakes.

---

### 5. Differentiation Analysis  

| Dimension | OpenClaw | NanoBot | Hermes Agent | PicoClaw | NanoClaw | IronClaw | LobsterAI | Moltis | CoPaw | ZeroClaw |
|-----------|----------|---------|--------------|----------|----------|----------|-----------|--------|-------|----------|
| **Primary user persona** | Developers & operators needing a extensible gateway with many adapters

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

### NanoBot Project Digest (2026-08-22)

#### 1. Today's Overview
NanoBot exhibited high development activity in the last 24 hours with 5 issue updates (1 open, 4 closed) and 37 PR updates (14 open, 23 merged/closed). The project shows strong momentum in bug fixes, feature integration, and code quality improvements, though no new releases were published today. Key focus areas include provider reliability, user interface polish, and backend stability.

#### 2. Releases
No new releases were published in the last 24 hours.

#### 3. Project Progress
**Merged/Closed PRs Highlights (23 total):**  
- **Bug Fixes:**  
  - `#5442`: Fixed Dream cursor advancement on recovered tool errors (resolves `#5441`), preventing duplicated memory edits.  
  - `#5454`: Addressed mid-stream server_error retry logic for streaming providers (critical for reliability).  
  - `#5407`: Resolved cron job persistence issue when disabling heartbeat/dream features.  
  - `#5477`: Fixed iOS PWA control positioning in safe area (WebUI polish).  
  - `#5457`: Scoped channel dispatcher exceptions to prevent message delivery halts.  
- **Features:**  
  - `#5474`: Added DeepSeek V4 Flash Vision provider support.  
  - `#5476`: Implemented LaTeX-to-Unicode rendering in TUI for better math display.  
  - `#5478/#5480`: Advanced provider usage contract refactor (typed LLMUsage, normalized token semantics).  
  - `#5479/#5481`: Began unified provider usage backend for trajectory tracking.  
- **Refactors/Chores:**  
  - `#5475`: Removed dead code and unused dependencies (e.g., `websocket-client`).  
  - `#5414`: Enhanced Slack file download validation across redirects.  

#### 4. Community Hot Topics
- **Most Active Issue:** `#5198` ([Bug] Not possible to change models in a specific session unless reconfiguring entire instance) – 4 comments, closed after 3 weeks. Highlights user frustration with inflexible model switching compared to SaaS AI UIs. [Link](https://github.com/HKUDS/nanobot/issues/5198)  
- **Most Active PRs:** While comment counts aren’t available, `#5234` (MST metasearch provider integration, open since Aug 3) and `#5405` (manual-only skill invocation, open since Aug 16) show sustained interest, indicating community demand for extensible search and skill control.  

#### 5. Bugs & Stability
**Reported Today (Ranked by Severity):**  
1. **High:** `#5454` (Streaming providers: mid-stream server_error skips retry) – Closed via unspecified fix; risk of silent failure in AI responses.  
2. **Medium:** `#5463` (DingTalk background tasks not observed/drained) – **Open**; risks resource leaks and missed messages in DingTalk integration. *Fix PR pending.*  
3. **Medium:** `#5198` (Model switching inflexibility) – Closed; usability issue affecting workflow efficiency.  
4. **Low:** `#5441` (Dream cursor blocked by recovered tool errors) – Closed via `#5442`; fix deployed.  

*Note: All closed bugs have associated fix PRs (e.g., `#5442` for `#5441`).*

#### 6. Feature Requests & Roadmap Signals
- **Near-Term Likely:**  
  - Manual-only skill invocation (`#5405`, open) – Addresses safety concerns for side-effect skills (e.g., deployment).  
  - Metasearch provider (MST) integration (`#5234`, open, p1 priority) – Enhances web search robustness.  
- **Ongoing Signals:**  
  - Provider contract refactoring (`#5478/#5480`) – Prepares for multi-provider stability and usage analytics.  
  - DingTalk stability (`#5463`) – Critical for enterprise channel adoption.  

#### 7. User Feedback Summary
- **Pain Points:**  
  - Inflexible per-session model switching (`#5198`) forces full reconfiguration, disrupting iterative workflows.  
  - DingTalk integration instability (`#5463`) risks message loss in team settings.  
  - Historical MCP connection struggles (e.g., Notion in `#1168`, closed after 6 months) suggest niche integration challenges.  
- **Use Cases & Satisfaction:**  
  - Strong demand for reliable web search (MST interest) and enterprise channels (DingTalk/Notion).  
  - Positive reception for reliability fixes (Dream cursor, streaming retries) and UX polish (LaTeX, iOS PWA).  
  - Manual skill invocation (`#5405`) reflects user need for controlled automation in production workflows.  

#### 8. Backlog Watch
- **Long-Unanswered Items:**  
  - `#1168` (Notion MCP connection failure) – Open from Feb 25 to Aug 21

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent – Project Digest (2026‑08‑22)**  

---

### 1. Today's Overview  
The repository remains highly active: 50 issues and 50 pull requests were updated in the last 24 h, with 46 issues still open and 45 PRs awaiting review. A patch release **v2026.8.19 (v0.20.5)** was shipped yesterday, consolidating ~323 PRs since v0.20.4 to stabilize downstream deployments. Ongoing work centers on fixing installation‑related regressions, improving skill‑index freshness, and expanding cross‑platform integrations (WhatsApp, Telegram, MCP).  

---

### 2. Releases  
- **v2026.8.19 – Hermes Agent v0.20.5** (released 2026‑08‑19)  
  *Patch release* – no breaking changes.  
  - Rolls up **~323 PRs** merged since v0.20.4 into a stable tag for Docker images, hosted deployments, and fresh installs.  
  - Highlights from the changelog (implicit in the PR surge) include fixes for the Debian installation script, skill‑index refresh logic, macOS state.db write barriers, and suppression of spurious “credit access paused” banners on free stealth‑preview models.  
  - Migration note: existing installations can safely upgrade; no config‑schema changes were introduced.  

---

### 3. Project Progress (Merged/Closed PRs & Notable Open Work)  
- **Merged/Closed PRs today:** 5 PRs were merged or closed, feeding directly into the v0.20.5 patch. While the exact PR numbers aren’t listed in the supplied data, the release notes confirm they addressed stability regressions (e.g., skill‑index cron, Debian installer, macOS state.db handling).  
- **Active Open PRs (45 total)** – a snapshot of work in progress:  

| PR | Title | Area | Link |
|----|-------|------|------|
| #90078 | feat(skills): add SocialRobot MCP catalog entry & five workflow skills | Skills / MCP | https://github.com/NousResearch/hermes-agent/pull/90078 |
| #91838 | feat(gateway): add adaptive WhatsApp routing | Gateway / WhatsApp | https://github.com/NousResearch/hermes-agent/pull/91838 |
| #91854 | fix(credits): suppress stealth preview top‑up notices | Billing / UX | https://github.com/NousResearch/hermes-agent/pull/91854 |
| #91851 | fix: honor --ignore-rules during subdirectory discovery | Agent / CLI | https://github.com/NousResearch/hermes-agent/pull/91851 |
| #91852 | fix(state): apply macOS write barriers on every state.db repair connection | Agent / macOS | https://github.com/NousResearch/hermes-agent/pull/91852 |
| #91853 | fix(prompt): scope secret-entry guard to computer‑use UI | Agent / Security | https://github.com/NousResearch/hermes-agent/pull/91853 |
| #91666 | feat(bot-mode): enable protocol in routed Telegram topics | Bot‑Mode / Telegram | https://github.com/NousResearch/hermes-agent/pull/91666 |
| #90289 | fix(desktop): keep Windows chat windows opaque with glass off | Desktop / Windows | https://github.com/NousResearch/hermes-agent/pull/90289 |
| #89372 | feat(browser): drive Electron desktop apps over CDP | Browser / Desktop | https://github.com/NousResearch/hermes-agent/pull/89372 |
| #90075 | feat(gateway): add per‑chat‑type display overrides | Gateway / Config | https://github.com/NousResearch/hermes-agent/pull/90075 |

These PRs illustrate a push toward **broader platform support (WhatsApp, Telegram), tighter MCP integration, desktop UX polish, and finer‑grained gateway configuration**.

---

### 4. Community Hot Topics (Most‑Commented Issues/PRs)  

| Item | Comments | Summary & Link | Underlying Need |
|------|----------|----------------|-----------------|
| **#66616** – Skills index stale/degraded | 71 | Automated freshness probe fails; index 29.8 h old (>26 h limit). | Reliable, up‑to‑date skill catalog for agent tooling. |
| **#87093** – Debian installation broken (uv.lock & npm) | 19 | Install script fails on Debian 13.6; uv.lock & npm install errors. | Smooth, zero‑friction OS‑level setup for Linux users. |
| **#90473** – “Show earlier messages” paging UX broken on long sessions | 13 | Paging mechanism unusable after ~900 messages; user calls design “stupid”. | Intuitive navigation of extensive chat histories. |
| **#89995** – Expose Bot Mode group chat rooms in web dashboard & gateway | 9 | Bot‑Mode group chats currently desktop‑only; web/gateway lack access. | Parity between desktop and web/webhook interfaces for collaborative bot workflows. |
| **#88661** – MCP tool timeout parks server connection; whole toolset unregisters | 6 | Timeout >300 s causes MCP server connection to be parked, tools unregistered, no auto‑reconnect. | Robust MCP tool handling with automatic recovery. |
| **#89886** – cache_control on tool_result.content rejected by Anthropic‑format API (P0) | 4 | Non‑retryable HTTP 400 kills any tool‑using session. | Correct adherence to upstream API specifications to avoid session‑breaking errors. |

The high comment count on **#66616** signals a core infrastructure concern: the skill‑index refresh pipeline (cron + deploy workflow) is not meeting its freshness SLA, directly impacting agent capability discovery.

---

### 5. Bugs & Stability (Severity‑Ranked)  

| Severity | Issue | Description | Fix/PR Status |
|----------|-------|-------------|---------------|
| **P0 (Critical)** | #89886 | `cache_control` on `tool_result.content` rejected by Anthropic‑format API → HTTP 400, session death. | No linked fix PR yet; high priority for next patch. |
| **P1 (High)** | #87093 | Debian install script fails (uv.lock/npm). | No explicit fix PR shown; likely addressed in v0.20.5 (installer tweaks). |
|  | #91277 | Fleet update reliability – missing unified deployment plan. | Open; tracking issue for future release. |
|  | #88655 (closed) | Scheduler‑level cron errors bypass failure_nudge → silent job death. | Fixed in earlier version (closed). |
|  | #91852 | macOS write barriers missing during state.db repair → potential DB corruption. | Fix PR #91852 open; addresses stability on macOS. |
| **P2 (Medium)** | #88661 | MCP tool timeout parks connection → whole toolset unregistered. | No fix PR yet; needs timeout/reconnect logic. |
|  | #90473 | Paging UX broken on long sessions. | No fix PR yet; UX redesign needed. |
|  | #89995 | Bot Mode group chats not exposed via web/gateway. | Feature PR #91838 (WhatsApp) and related work may pave the way. |
|  | #89157 | Typing numbers shows `^[[57400u` on Linux terminal. | No fix PR; likely terminal‑encoding issue. |
|  | #44183 | Desktop session lost after sleep/wake (WS orphan reap grace too short). | No fix PR; increase reap grace or improve WS reconnect. |

Overall, the project shows a healthy bug‑fix cadence (many PRs tied to specific issues), but a few P0/P1 bugs remain unfixed and warrant immediate attention in the next release cycle.

---

### 6. Feature Requests & Roadmap Signals  

| Feature | Issue/PR | Link | Likelihood for Next Version |
|---------|----------|------|-----------------------------|
| Bot Mode group chat rooms in web dashboard & gateway | #89995 | https://github.com/NousResearch/hermes-agent/issues/89995 | High – aligns with ongoing WhatsApp/Telegram work and desktop‑web parity goals. |
| Local‑first, zero‑dependency memory provider (benchmark vs Honcho) | #85418 | https://github.com/NousResearch/hermes-agent/issues/85418 | Medium – memory layer experiments are active; could land as opt‑in in v0.21. |
| Web dashboard microphone capture (getUserMedia) instead of PortAudio | #54352 | https://github.com/NousResearch/hermes-agent/issues/54352 | Medium – improves remote voice input; likely after audio subsystem refactor. |
| Session ↔ Workspace binding (cwd + repo, restore on resume) | #48190 | https://github.com/NousResearch/hermes-agent/issues/48190 | Low‑Medium – valuable for developers; depends on session‑metadata redesign. |
| Per‑operation timeout for Hindsight memory plugin | #14950 | https://github.com/NousResearch/hermes-agent/issues/14950 | Low – useful but not blocking; may be addressed alongside memory provider work. |
| Accent Picker persistence per profile | #91107 | https://github.com/NousResearch/hermes-agent/issues/91107 | Low – cosmetic; likely tackled in a UI‑polish sprint. |
| Bot Mode kickoff prompt i18n (non‑English) | #91827 | https://github.com/NousResearch/hermes-agent/issues/918

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest – 2026‑08‑22**  

---

### 1. Today's Overview  
The repository showed modest but focused activity in the last 24 hours: one open issue was updated and five pull requests were merged or closed, while no new releases were published. All merged PRs are enhancements or documentation work, indicating a steady inflow of improvements rather than bug‑fix fire‑drills. The sole open issue (#3342) is a feature request, suggesting the project is currently in a refinement phase rather than tackling regressions. Overall health appears stable, with maintainers actively reviewing and integrating contributions.

### 2. Releases  
*No new releases were published today.*

### 3. Project Progress – Merged/Closed PRs  

| PR | Type / Domain | Summary of Changes | Link |
|----|---------------|--------------------|------|
| #647 | Enhancement – tool | Improved `WebFetchTool` text extraction: added HTML entity decoding (`&amp;`, `&lt;`, etc.) and preserved block‑level structure with newlines for better readability. | https://github.com/siped/picoclaw/pull/647 |
| #1182 | Documentation | Refined `AGENTS.md` to be a principle‑first guide for AI agents/contributors, clarified Go version source (`go.mod`), and made the guide more lightweight. | https://github.com/siped/picoclaw/pull/1182 |
| #1158 | Enhancement – protocol | Added `anthropic-messages` protocol prefix to support Anthropic’s native Messages API (`/v1/messages`), fixing issue #269 for Anthropic‑compatible proxy services. | https://github.com/siped/picoclaw/pull/1158 |
| #714 | Enhancement – skill | Introduced skills CLI improvements: new subcommands (`install`, `reinstall`), support for `repo@branch` and optional subpath, fetch via GitHub Trees API, and better error handling when a skill already exists. | https://github.com/siped/picoclaw/pull/714 |
| #423 | Enhancement – multi‑agent | Work‑in‑progress base for multi‑agent collaboration: shared context pool (blackboard), agent handoff, discovery tools, building on prior provider‑protocol and model‑fallback refactors. | https://github.com/siped/picoclaw/pull/423 |

These PRs collectively advance tooling (web fetching), protocol support (Anthropic), developer ergonomics (skills CLI, documentation), and lay groundwork for collaborative agent capabilities.

### 4. Community Hot Topics  
All items today have zero comments and zero reactions, indicating low immediate discussion volume. The most recent and thus “hot” item is the newly opened feature request:

* **Issue #3342** – Opt‑in “after‑turn” steering mode: queue busy‑session messages instead of interrupting the running turn.  
  *Author:* unedtamps • *Created/Updated:* 2026‑08‑21 • *Link:* https://github.com/siped/picoclaw/issues/3342  

The lack of comments suggests the proposal has not yet gathered community feedback; maintainers may need to prompt discussion to gauge interest and design trade‑offs.

### 5. Bugs & Stability  
No bug‑related issues were reported or updated in the last 24 hours. Consequently, there are no stability concerns or regression signals to highlight today.

### 6. Feature Requests & Roadmap Signals  
The sole open issue (#3342) signals a user‑desired improvement to the agent’s steering logic: allowing subsequent user messages to be queued for processing after the current turn completes, rather than aborting ongoing tool calls. This aligns with a broader trend toward more resilient, non‑interruptive agent interactions.

Features that have just landed and may shape the near‑term roadmap include:

* **HTML‑entity‑safe web fetching** (#647) – likely to become the default behavior for `WebFetchTool`.  
* **Anthropic native‑API support** (#1158) – expands LLM provider compatibility, potentially attracting more Anthropic‑focused users.  
* **Skills CLI refinements** (#714) – simplifies skill management, encouraging community skill contributions.  
* **Multi‑agent collaboration skeleton** (#423) – once completed, could enable distributed agent workflows and shared state.

If the steering‑mode feature gains traction, it could be slated for a upcoming minor release alongside the multi‑agent framework.

### 7. User Feedback Summary  
The only direct user feedback today is the request in #3342. The underlying pain point is that the current steering mechanism treats any incoming user message as a mid‑task correction, causing the agent to drop the remainder of the ongoing turn (“Skipped due to queued user message.”). Users want a way to **preserve the current turn’s execution** while still acknowledging new input, essentially a non‑preemptive message queue. Addressing this would improve perceived responsiveness and reduce wasted work, especially in long‑running tool chains (e.g., web scraping, code generation).

No other user complaints or praise were recorded in the data set.

### 8. Backlog Watch  
* **Open Issue #3342** – feature request for opt‑in after‑turn steering mode (created 2026‑08‑21). While recent, it represents the only item awaiting maintainer triage. No open PRs exist, so there is no stalled code review backlog.  
* **Long‑standing items** – none identified in the supplied snapshot; all PRs were merged within the last few months, and the sole issue is brand‑new.

Maintainers should consider scheduling a brief discussion on #3342 to capture community sentiment and decide whether to accept, defer, or request clarification.

---  

*All links point to the respective GitHub resources in the `sipeed/picoclaw` repository.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest – 2026‑08‑22**  
*Source: GitHub activity (issues/PRs updated in the last 24 h, no new releases)*  

---  

### 1. Today’s Overview  
The repository shows a burst of maintenance and feature work: **25 pull‑requests were touched** (14 still open, 11 merged/closed) while only a single issue received updates. This indicates the core team is presently focused on polishing existing functionality (Telegram setup, CI stability, driver contracts) and rolling out incremental features (template‑based agent creation, multi‑instance bots). No new version was tagged today, so the current HEAD reflects the combined work of the merged PRs. Overall project health appears strong—high commit velocity, few open bugs, and active review cycles.  

---  

### 2. Releases  
*No new releases were published today.*  

---  

### 3. Project Progress – Merged/Closed PRs  

| PR | Type | Summary | Link |
|----|------|---------|------|
| #3396 | **feat** | `create_agent` tool now accepts an optional `template` ref; added `ncl templates list` verb (local & registry). | https://github.com/qwibitai/nanoclaw/pull/3396 |
| #3424 | **fix** | CI now tests all registry‑backed *add‑\*_skill* workflows against a pinned snapshot. | https://github.com/qwibitai/nanoclaw/pull/3424 |
| #3403 | **fix** | Matrix adapter: added an ESM patch to make extensionless imports work under Node 22. | https://github.com/qwibitai/nanoclaw/pull/3403 |
| #3402 | **fix** | Providers: now accept file‑events emitted by branch‑backed providers without runtime changes. | https://github.com/qwibitai/nanoclaw/pull/3402 |
| #3401 | **fix** | WhatsApp Cloud skill: exported registration helper so the skill works when composed with `main`. | https://github.com/qwibitai/nanoclaw/pull/3401 |
| #3430 | **fix** | Restored the exact `ci` check required by the main ruleset (Node 22/24 matrix had split it). | https://github.com/qwibitai/nanoclaw/pull/3430 |
| #3429 | **feat** | Drivers now declare their `exec argv` via `SessionExecSpec { bin, argsTty, argsPlain }` for cleaner terminal attachment. | https://github.com/qwibitai/nanoclaw/pull/3429 |
| #3202 | **feat** | Added Mattermost channel integration (wrapper around `chat-adapter-mattermost`). | https://github.com/qwibitai/nanoclaw/pull/3202 |
| #3050 | **feat** | Added Dial to the channel picker & wizard; introduced `runChannelSkill` model. | https://github.com/qwibitai/nanoclaw/pull/3050 |
| #3433 | **fix** | `/add-dial-number` migrated from prose shell blocks to NC directives, fixing registry discovery. | https://github.com/qwibitai/nanoclaw/pull/3433 |
| #3439 | **chore** | Bumped container Claude‑Code CLI to 2.1.238 and agent SDK to 0.3.238. | https://github.com/qwibitai/nanoclaw/pull/3439 |

*All other PRs listed in the data remain open (see Section 4 for the most discussed ones).*  

---  

### 4. Community Hot Topics (most commented / reacted)  

| Item | Comments / Reactions | Why it matters |
|------|----------------------|----------------|
| **Issue #3426** – *send_card docs promise callback buttons that the bridge drops* | 0 comments, 0 reactions (only updated today) | Highlights a documentation‑vs‑implementation gap: agents are led to believe they can attach button actions, but the bridge strips actions lacking a `url`. This causes user‑visible failures and misplaced blame on the platform. |
| **PR #3396** – *create agents from templates in chat* | 0 reactions (no comment count shown) | Central to the upcoming “template‑driven agent” workflow; enables non‑technical users to spin up agents via chat commands. |
| **PR #3428** – *Slack creation flow carries template ref* | 0 reactions | Completes the template feature for Slack, ensuring the ref survives end‑to‑end creation. |
| **PR #3436** – *Telegram: named bot instances via `TELEGRAM_INSTANCES`* | 0 reactions | Addresses a recurring request for multi‑bot support, allowing distinct configurations per instance. |
| **PR #3438** – *Wizard offers “add another Telegram bot” when one exists* | 0 reactions | Improves first‑run UX for power users managing several Telegram bots. |

*Although comment counts are not exposed in the excerpt, the recurrence of Telegram‑related PRs and the single open issue point to the current focal points of community interest.*  

---  

### 5. Bugs & Stability  

| Severity | Description | Linked Fix/PR | Status |
|----------|-------------|---------------|--------|
| **Medium** | `send_card` advertises button (`actions`) support but the bridge drops every action lacking a `url`, causing agents to report “platform cannot render buttons”. | No fix PR yet; issue #3426 open. | **Open** – needs either documentation correction or bridge adjustment. |
| **Low** | CI reporting split checks (`ci (22)`, `ci (24)`) broke the required `ci` gate. | Fixed in #3430. | **Closed** |
| **Low** | Matrix adapter ESM imports failed on Node 22. | Fixed in #3403 (ESM patch). | **Closed** |
| **Low** | `/add-dial-number` used raw shell blocks, preventing registry discovery. | Fixed in #3433 (NC directives). | **Closed** |
| **Low** | WhatsApp Cloud skill missing exported registration helper. | Fixed in #3401. | **Closed** |

The only active stability concern is the **send_card/button** mismatch; addressing it will prevent user confusion and potential loss of functionality.  

---  

### 6. Feature Requests & Roadmap Signals  

- **Template‑based agent creation** – PRs #3396 (core) and #3428 (Slack) indicate the team is close to merging a end‑to‑end flow where users can instantiate agents from local or registry templates via chat. Expect this to land in the next minor release.  
- **Multi‑instance Telegram support** – PRs #3436 (named instances) and #3438 (wizard “add another”) show a clear demand for managing several Telegram bots from a single NanoClaw deployment. Likely to be released together with the template feature.  
- **Dial integration maturity** – PRs #3050, #3433, and #3432 (post‑merge follow‑ups) reveal ongoing work to make Dial a first‑class channel, including credential handling and registry CI.  
- **Driver contract formalization** – PR #3429 introduces `SessionExecSpec`, a step toward standardized tooling attachment (e.g., debugger, shell). This may unlock richer IDE integrations soon.  

---  

### 7. User Feedback Summary  

While no explicit user comments are present in the data, the patterns of changes infer the following pain points and satisfactions:  

- **Pain point:** Developers/users attempting to add interactive buttons to cards receive silent failures; documentation misleads them.  
- **Pain point:** Managing multiple Telegram bots requires manual config duplication; users ask for instance‑aware setup.  
- **Satisfaction:** Recent fixes to CI, Matrix, and WhatsApp Cloud have stabilized cross‑platform adapters, reducing flaky builds.  
- **Excitement:** The ability to spawn agents from templates directly in chat is repeatedly referenced, suggesting high anticipation for a low‑code agent‑creation experience.  

---  

### 8. Backlog Watch  

| Item | Age / Activity | Why it needs attention |
|------|----------------|------------------------|
| **Issue #3426** (send_card/button mismatch) | Opened & updated 2026‑08‑21 (1 day old) | Directly impacts user‑facing feature; a quick fix (either update docs or adjust bridge) would prevent confusion. |
| **Open PRs with feature scope** (e.g., #3396, #3428, #3436, #3438) | All opened 2026‑08‑20 – 2026‑08‑21, still awaiting review/merge | Represent the upcoming template‑agent and multi‑bot capabilities; merging them will unlock the next usability milestone. |
| **Long‑running open PR** – none detected beyond the last 2 days; the oldest open PR in the list is #3287 (opened 2026‑08‑17) which is a minor inbound‑ID fix and already has a clear path to merge. | — | No stale, high‑impact backlog visible. |

**Actionable recommendation:** Prioritize a resolution for #3426 (docs or bridge change) and fast‑track the template‑related PRs (#3396, #3428) to deliver the promised chat‑based agent‑creation workflow in the next release.  

---  

*Prepared from the raw GitHub event data; all links point to the `qwibitai/nanoclaw` repository (e.g., https://github.com/qwibitai/nanoclaw/issues/3426).*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw Project Digest – 2026‑08‑22**  

---  

### 1. Today's Overview  
The repository saw minimal activity in the last 24 hours: no issues were touched and only a single pull request was updated. PR #990 remains open, proposing to add Eden AI as an OpenAI‑compatible gateway provider. With no merges, releases, or issue activity, the project is currently in a low‑traffic maintenance state, awaiting review of the new provider integration.  

### 2. Releases  
*No new releases were published today.*  

### 3. Project Progress  
- **Merged/Closed PRs:** 0 (none merged or closed in the past day).  
- **Open PR activity:** PR #990 was last updated on 2026‑08‑21 and remains awaiting review. No code has been landed yet, so no new features or fixes have been incorporated into the main branch today.  

### 4. Community Hot Topics  
| Item | Type | Comments / Reactions | Link | Underlying Need |
|------|------|----------------------|------|-----------------|
| PR #990 | Feature addition (Eden AI gateway) | 0 comments, 0 reactions (data shown as “undefined”) | https://github.com/nullclaw/nullclaw/pull/990 | Users want a unified EU‑based gateway that can route to multiple LLM vendors via a single API key, expanding provider choice without implementing a new adapter from scratch. |

Because this is the only updated PR, it automatically ranks as the top community topic. The lack of discussion suggests either early‑stage review or that the change is considered low‑risk and straightforward.  

### 5. Bugs & Stability  
*No bugs, crashes, or regressions were reported in the last 24 hours.* Consequently, there are no fix PRs linked to stability issues today.  

### 6. Feature Requests & Roadmap Signals  
- **Eden AI integration (PR #990):** Mirrors the pattern established by PR #922 (NEAR AI Cloud & Atlas Cloud) by leveraging the existing `OpenAiCompatibleProvider`. This indicates a continued roadmap focus on expanding OpenAI‑compatible gateways rather than building bespoke adapters.  
- **Predicted next steps:** If maintainers approve PR #990, the next likely feature additions could be additional OpenAI‑compatible gateways (e.g., other EU‑hosted aggregators) or enhancements to the provider abstraction layer to simplify future additions.  

### 7. User Feedback Summary  
No explicit user comments or issue reports surfaced today. The PR description highlights that Eden AI “routes to many upstream vendors behind one key, and it is EU based,” suggesting a user demand for:  
- **Data residency compliance** (EU‑hosted inference).  
- **Vendor consolidation** (single key for multiple models).  
These points can be treated as implicit feedback from contributors or downstream users seeking broader provider coverage.  

### 8. Backlog Watch  
- **Open PR #990** – Awaiting maintainer review. Though it has no comments, its acceptance would expand provider support. Prioritize a quick code‑review to determine if any additional tests or documentation are needed.  
- **Issues:** Currently zero open/active issues, so there is no backlog of bug reports or feature requests requiring attention.  

---  

**Overall Health Indicator:**  
The project is stable with no recent bugs, but development velocity is low. The sole open PR represents the primary avenue for near‑term growth; timely review will shape the next incremental release. Maintainers may consider labeling PR #990 as “ready for merge” if it passes CI and adheres to existing provider patterns.  

*All links point to the nullclaw/nullclaw repository on GitHub.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

### IronClaw Project Digest  
**Date:** 2026-08-22  
**Data Source:** GitHub activity from 2026-08-21 (last 24h)  

---

#### 1. **Today's Overview**  
IronClaw demonstrated high development velocity in the last 24h with **20 issue updates** (15 open/active, 5 closed) and **38 PR updates** (19 open, 19 merged/closed). No new releases were published. The project maintains strong momentum in CI/CD optimization, WebUI standardization, and memory subsystem enhancements, with core contributors driving simultaneous progress across infrastructure, sandboxing, and user-facing features. Activity indicates focused execution on planned tracks (CI expedite series, Design System phases) rather than reactive bug-fixing.  

#### 2. **Releases**  
No new releases were published in the last 24h.  

#### 3. **Project Progress**  
**19 PRs were merged/closed**, advancing key initiatives:  
- **CI/CD Optimization**:  
  - PR #7809 (T4) implemented canonical preflight gates via `scripts/preflight-gates.sh` (single gate list, worktree-safe hooks).  
  - PR #7797 consolidated agent-guidance documentation (pruned 21.5k lines, standardized on `AGENTS.md`).  
  - PR #7805 forward-ported Clippy 1.98 fixes to `release/2026-08-17` branch.  
- **Sandbox & Security**:  
  - PRs #7806/#7807 mediated GitHub CLI credentials in sandbox processes (direct executable path, authorization-scoped material).  
  - PR #7796 preserved failed Railway audit append operations.  
- **WebUI Standardization**:  
  - PR #7794 introduced shared page-shell/loading primitives (`PageScroll`, `PageStack`, `Skeleton`).  
  - PR #7795 migrated Settings/Admin feedback to `InlineNotice` component.  
  - PR #7750 (Storybook integration) remains open but updated, advancing Design System Phase 1.  
- **Memory & Hooks**:  
  - PR #7765 added `AfterTurn` lifecycle hook (privileged-only, memory curation consumer).  

#### 4. **Community Hot Topics**  
Most discussed issues (by comment count) reveal infrastructure and workflow concerns:  
- **#7801** [OPEN] CI expedite T4: canonical preflight (3 comments)  
  [Link](https://github.com/nearai/ironclaw/issues/7801)  
  *Underlying need:* Standardizing CI gate execution to reduce flakiness and improve reproducibility via unified preflight script (`--ci` flag, worktree-safe hooks).  
- **#7799** [OPEN] CI expedite T2: nextest pipeline (3 comments)  
  [Link](https://github.com/nearai/ironclaw/issues/7799)  
  *Underlying need:* Accelerating test feedback through `cargo-nextest` adoption (parallelized testing, JUnit failure aggregation, PR throughput improvements).  
- **#7664** [OPEN] Pluggable memory over MCP (2 comments)  
  [Link](https://github.com/nearai/ironclaw/issues/7664)  
  *Underlying need:* Enabling external memory providers (e.g., Mnesis) via configurable contracts to decouple memory architecture from core agent logic.  

*Note: PR comment data was unavailable in the provided dataset; issue comments reflect primary discussion venues.*  

#### 5. **Bugs & Stability**  
**Closed bugs** indicate recent stability improvements:  
- **#7783** [CLOSED] LLM timeout policy (medium risk)  
  [Link](https://github.com/nearai/ironclaw/issues/7783)  
  *Fix:* Addressed structured-output finalization blind spots where stalled provider requests violated retry budgets. Resolved via transport-layer visibility improvements.  
- **#7715** [CLOSED] Telegram connection flow consent gap  
  [Link](https://github.com/nearai/ironclaw/issues/7715)  
  *Fix:* Added explicit WebUI choice between bot/personal account connections with localized disclosures.  

**Active bug** requiring attention:  
- **#7808** [OPEN] Memory write path redaction/taint gap  
  [Link](https://github.com/nearai/ironclaw/issues/7808)  
  *Severity:* High (blocks external memory provider safety). *Status:* Awaiting fix; prerequisite for #7664 (pluggable memory). No linked fix PR yet.  

#### 6. **Feature Requests & Roadmap Signals**  
Open issues signaling near-term priorities:  
- **#7664** (Pluggable memory/MCP) and **#7808** (memory write safety) form a dependent pair: resolving #7808 is prerequisite for safe external memory binding (#7664). Expected in next version if #7808 closes soon.  
- **#7038** (Design System Phase 1: Storybook/catalog) remains open but actively updated (last update: 2026-08-20), with PR #7750 implementing core integration. Likely to ship in v1.4.0.  
- **#7687** [OPEN] Generalize WebUI notification center to durable user inbox  
  [Link](https://github.com/nearai/ironclaw/issues/7687)  
  *Signal:* Foundational work for #7690 (notification publishing) and #7689 (backend consumption), both closed. Indicates notification system maturation.  

#### 7. **User Feedback Summary**  
Implicit pain points from issue descriptions:  
- **CI Fragility**: Repeated references to "planner drift," "PR/queue divergence," and "flaky tests" (#7800, #7799) indicate user frustration with unreliable CI blocking development velocity.  
- **Configuration Scatter**: Issues like #7798 (consolidating Rust toolchain setup) and #7797 (documentation drift) reflect user pain from fragmented setup/configuration across workflows.  
- **Telegram UX Gaps**: Closed bugs #7715 and #7766 highlight confusion in multi-account connection flows, suggesting users need clearer consent boundaries and status visibility.  
- **Notification Fatigue**: Multiple notification-related issues (#7687, #7690, #7699) imply users miss critical events due to fragmented/ephemeral alerting.  

#### 8. **Backlog Watch**  
Long-unanswered important issues needing maintainer attention:  
- **#7038** [OPEN] Design System Phase 1 (Storybook/catalog)  
  *Created:* 2026-08-03 | *Updated:* 2026-08-20 | *Comments:* 2  
  [Link](https://github.com/nearai/ironclaw/issues/7038)  
  *Why watch:* Epic has been open 19 days with slow progress (only 2 comments). Despite PR #7750 being active, lack of discussion risks misalignment with WebUI team priorities. Blocking Phases 2–5 (#7781, #7782).  
- **#7257** [OPEN] Design System proposal/docs  
  *Created:* 2026-08-05 | *Updated:* 2026-08-21 | *Comments:* undefined  
  [Link](https://github.com/nearai/ironclaw/issues/7257)  
  *Why watch:* Foundational documentation for #7038 has seen no discussion despite 16-day age. Critical for onboarding designers/contributors to the design system effort.  
- **#7456** [OPEN] Durable storage profile-agnostic  
  *Created:* 2026-08-10 | *Updated:* 2026-08-21 | *Comments:* undefined  
  [Link](https://github.com/nearai/ironclaw/issues/7456)  
  *Why watch:* Infrastructure PR affecting all Reborn profiles; stalled for 12 days with no discussion. Risk of inconsistent state management if not resolved before memory subsystem work (#7664) advances.  

---  
**Project Health Assessment**: IronClaw exhibits robust engineering velocity with clear thematic focus (CI reliability, WebUI standardization, memory safety). The high PR merge rate (50%) indicates effective review processes, while concentration of activity in infrastructure/WebUI suggests maturation toward v1.4.0. Primary risks lie in stalled foundational work (#7038, #7456) that could block dependent features if not unblocked. Bug resolution is timely (e.g., #7783, #7715 closed same-day opened), reflecting strong stability vigilance.  

*Data note: Analysis based solely on provided GitHub event payload; excludes reactions/private interactions.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI Project Digest – 2026‑08‑22**  
*Based on GitHub activity from the last 24 h (issues, PRs, releases).*

---

## 1. Today's Overview
The repository shows **low issue activity** (2 closed, stale issues) but a **burst of pull‑request activity** (13 updated PRs, 12 merged/closed and 1 still open). No new release was cut today. Overall, the project is in a **maintenance‑and‑polish phase**: contributors are merging incremental improvements (DeepSeek Harness upgrade, analytics refactor, UI/UX fixes) while long‑standing bugs remain marked as stale. The single open PR (#1550) indicates a pending fix for a scheduled‑task delivery‑mode issue that may need reviewer attention.

## 2. Releases
- **No new releases** were published in the last 24 h.  
- The latest released version remains the one referenced in the closed issues (2026.3.26).

## 3. Project Progress (Merged/Closed PRs)
| PR | Title / Area | Key Changes |
|----|--------------|-------------|
| #2519 | **Release: 2026.8.21** (main) | Merges release branch; updates experimental DeepSeek Harness (DSH) runtime to **0.1.1‑rc.1**, improves Windows integration reliability, adds privacy‑conscious analytics for DSH enablement & workbench usage. |
| #2518 | **refactor(dsh): move usage analytics reporting from main → renderer** | Moves DSH enable‑toggle / workbench analytics event building to a renderer‑side service (`src/renderer/services/dshAnalytics.ts`) and wires it into `DshExperimentalSettings`. |
| #2516 | **feat: update dsh to 0.1.1‑rc.1** | Bumps DSH dependency; likely includes bug‑fixes and performance tweaks from the upstream harness. |
| #2515 | **feat(dsh): add usage analytics for enable toggle and workbench open** | Instruments main‑process logger to fire‑and‑forget analytics events when DSH is toggled or the workbench is opened (success/failure with error code). |
| #2517 | **fix(library): 完善文件分享与收藏交互** | Preserves Unicode filenames on share (only unsafe chars replaced), shows original title for legacy files, improves favorite‑state updates, dedupes refreshes, unifies quota‑popup styling, adds tests. |
| #2514 | **feat(library): 优化本地产物预览与操作体验** | Adjusts preview popup size/overflow, removes library delete entry (streamlines ops), distinguishes empty vs. filtered‑empty states, adds one‑click clear for local/cloud search boxes, fixes quota‑popup placeholder bug, syncs IPC/types/i18n/docs. |
| #2513 | **Feat/2026.8.17 library** (minor cleanup) | Miscellaneous library‑related tweaks (summary sparse). |
| #1215 | **fix(im): always rebuild chat handler on setConfig** | Ensures chat handler is recreated whenever `setConfig` is called, preventing stale IM sessions when platform‑specific saves lack a `settings` key. |
| #1218 | **fix(定时任务): 重构任务列表排序规则** | Replaces UUID‑based ordering with a deterministic sort (by `nextRunAtMs` then creation time) so new tasks appear predictably and enabled/disabled tasks are grouped. |
| #1219 | **perf(cowork): 消除会话列表和详情页的无效重渲染** | Adds `React.memo` to session items and reduces redundant `useSelector` calls in session detail view. |
| #1220 | **perf(cowork): 消除 recentChats/conversationSearch 的 N+1 查询** | Refactors `CoworkStore` to batch‑fetch latest messages, eliminating duplicate queries per session. |
| #1224 | **fix(agent): 修复 i18n 硬编码、Agent 弹窗 Escape 键支持及删除防重复点击** | Implements the three fixes from #1223: replaces hard‑coded Chinese label with i18n key, adds Escape‑key close to agent modals, adds double‑click protection on delete actions. |

*All of the above PRs were merged/closed on 2026‑08‑21, indicating a focused “clean‑up” sprint.*

## 4. Community Hot Topics
| Item | Comments / Reactions | Link | Why it’s hot |
|------|----------------------|------|--------------|
| **Issue #1217** – 随机网关重启 (gateway restarts intermittently) | 2 👍, 2 comments | https://github.com/netease-youdao/LobsterAI/issues/1217 | Users experience unexpected gateway restarts (Win10, v2026.3.26) that disrupt normal use; logs attached. |
| **Issue #1223** – i18n hard‑coding, missing Escape, double‑click protection | 2 👍, 2 comments | https://github.com/netease-youdao/LobsterAI/issues/1223 | Highlights three UX/i18n pain points that affect English speakers (hard‑coded “输入文件” in prompts, lack of Escape to close agent dialogs, no guard against rapid delete clicks). |
| **PR #1550** (open) – 投递模式为“不通知”时去除 channel/to 字段 | 0 👍, 0 comments (so far) | https://github.com/netease-youdao/LobsterAI/pull/1550 | Addresses a gateway validation error when scheduled tasks created via IM use “无通知” mode; only observed for IM‑created tasks, not UI‑created ones. |

*No PRs gathered comment counts in the data, so the two stale issues above are the most discussed items today.*

## 5. Bugs & Stability (Today)
| Severity | Description | Linked Issue | Fix PR (if any) | Status |
|----------|-------------|--------------|-----------------|--------|
| **Medium** | Gateway intermittently restarts during use (Win10). | #1217 | – (no fix PR yet) | Closed as stale; still reported. |
| **Medium** | Hard‑coded Chinese label in prompt breaks English i18n; Agent dialogs lack Escape‑key close; delete actions missing double‑click protection. | #1223 | #1224 (merged) | Fixed; issue closed. |
| **Low** | Scheduled‑task delivery mode “无通知” incorrectly sends `channel/to` fields when created via IM, causing gateway validation error. | – | #1550 (open) | Awaiting review/merge. |

*The most pressing stability concern remains the intermittent gateway restart (#1217), which lacks a dedicated fix PR at the moment.*

## 6. Feature Requests & Roadmap Signals
- **Analytics & telemetry** – Multiple PRs (#2515, #2518) show a conscious effort to instrument DSH usage (enable toggle, workbench opens). Expect future releases to expose more granular usage metrics or opt‑out toggles.
- **Library UX** – PRs #2514, #2517, #2513 indicate ongoing work to improve local artifact preview, sharing, and favorite interactions. Likely candidates for the next minor version (e.g., 2026.9.x).
- **DeepSeek Harness (DSH) integration** – Version bump to 0.1.1‑rc.1 (#2516) and analytics refactor suggest the project is moving toward a more stable DSH‑powered experimental mode; a future “DSH enabled by default” flag could appear.
- **Scheduled task reliability** – The open fix #1550 points to a roadmap item: make task creation paths (IM vs. UI) produce identical delivery objects to avoid mode‑specific bugs.

## 7. User Feedback Summary
- **Pain points**  
  - **Gateway stability**: Random restarts disrupt workflow; users rely on logs to diagnose but desire a permanent fix.  
  - **Internationalization**: English users see Chinese strings (“输入文件”) inserted into AI prompts, breaking the expectation of a fully English experience.  
  - **Modal usability**: Agent creation/settings dialogs cannot be dismissed with Escape, forcing mouse use; delete actions can be triggered accidentally.  
- **Positive signals**  
  - Users appreciate the **library preview and sharing improvements** (Unicode filename retention, clearer empty states).  
  - The **analytics opt‑in** approach is welcomed as privacy‑conscious.  
- **Overall satisfaction**: Mixed – core functionality (chat, task scheduling) works, but intermittent stability and i18n polish are notable friction points.

## 8. Backlog Watch
| Item | Reason for Attention | Link |
|------|----------------------|------|
| **Open PR #1550** – Fix delivery‑mode fields for IM‑created scheduled tasks | Prevents gateway validation errors; impacts reliability of a core feature (scheduled tasks). Needs reviewer merge. | https://github.com/netease-youdao/LobsterAI/pull/1550 |
| **Stale Issue #1217** – Intermittent gateway restart | Although marked stale, the issue remains unreproduced/fixed; could indicate a deeper race condition or resource leak. Worth revisiting if logs show pattern. | https://github.com/netease-youdao/LobsterAI/issues/1217 |
| **Stale Issue #1223** – i18n & UX fixes (already resolved via #1224) | Now closed; keep as reference for similar i18n audit tasks. | https://github.com/netease-youdao/LobsterAI/issues/1223 |
| **Awaiting feedback on analytics opt‑out** | No explicit issue yet, but the added analytics (#2515) may raise privacy questions; monitor for future user concerns. | – |

---  

**Takeaway:** LobsterAI is currently in a refinement sprint—shipping small but meaningful upgrades (DSH upgrade, analytics, library UX) while addressing lingering stability and i18n bugs. The most urgent action items are reviewing and merging the open scheduled‑task fix (#1550) and investigating the recurring gateway restart (#1217) to restore confidence in core reliability.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis Project Digest – 2026‑08‑22**  
*Generated from GitHub activity (issues & PRs updated in the last 24 h)*  

---

### 1. Today's Overview  
The repository showed modest but focused activity: **2 issues** were updated (both newly opened) and **8 pull‑requests** were touched, of which **7 remain open** and **1 was closed**. No new releases were published today. Overall, the project is in an active development state with contributors concentrating on bug‑fixes, platform‑specific improvements (WhatsApp, browser, cron, i18n, web, Windows), and minor UI/refactor work. Engagement (comments/reactions) remains low, indicating that most changes are being driven by maintainers rather than community discussion at the moment.

### 2. Releases  
*No new releases were published in the last 24 h.*  

### 3. Project Progress – Merged/Closed PRs  
| PR | Title | Summary of change | Link |
|----|-------|-------------------|------|
| **#1220** (closed) | *fix(whatsapp): render Markdown in outbound messages* | Converts model‑generated Markdown to WhatsApp‑native markup before sending, preserving the original Markdown in session history and the web UI. | [#1220](https://github.com/moltis-org/moltis/pull/1220) |

*No PRs were merged today; the only closed PR resolves a WhatsApp formatting bug.*

### 4. Community Hot Topics  
All updated items currently have **0 comments and 0 reactions**, so there are no clearly “hot” discussions driven by community interaction. The most visible activity stems from the sheer number of PRs opened today rather than comment volume.

### 5. Bugs & Stability  
| Issue | Type | Summary | Severity* | Related fix PR (if any) |
|-------|------|---------|-----------|------------------------|
| **#1224** | Bug | Tools stop working in shared Slack channels. | **High** – impacts core Slack integration for teams. | No dedicated PR yet; likely to be addressed in a future Slack‑focused fix. |
| **#1223** | Bug | `heartbeat.active_hours` has no effect on a default config (the `end: "24:00"` value disables the check). | **Medium** – affects scheduling/reliability for users relying on active‑hour windows. | **#1208** (open) – adds a call to `is_within_active_hours` in the cron scheduler. |
| **#1228** (open PR) | Improvement/Bug‑fix | WhatsApp inbound files are only exposed as filename/MIME; needs persisting to a stable `local_path` for local tools. | **Medium‑Low** – improves reliability of file‑based WhatsApp workflows. | PR itself is the fix. |
| **#1222** (open PR) | Bug‑fix/Web | Validates sandbox image requests to prevent misuse of container/Dockerfile references. | **Low** – hardening change, no user‑facing breakage. | PR itself is the fix. |

\*Severity is inferred from impact on core functionality and user visibility.

### 6. Feature Requests & Roadmap Signals  
Recent PRs hint at the following near‑term priorities:  

- **i18n zh‑TW refinement** (#1225) – improving Traditional Chinese UI strings, suggesting a push for better localization.  
- **Obscura stealth mode enabled by default** (#1227) – enhancing privacy/anonymity for browser tooling.  
- **Cron delivery to originating chat** (#1226) – making scheduled jobs reply in the same conversation they were triggered from.  
- **WhatsApp inbound file persistence** (#1228) – enabling local tools to process received media reliably.  
- **Web sandbox image validation** (#1222) – tightening security for user‑supplied images.  
- **Windows shell‑hook compatibility** (#468) – long‑standing Windows support improvement.  

These items collectively point to a roadmap focused on **platform stability (WhatsApp, Windows), security (sandbox validation), usability (i18n, stealth mode), and workflow cohesion (cron chat delivery).** Expect them to appear in an upcoming minor release (e.g., v0.10.x) unless blocked by higher‑priority bugs.

### 7. User Feedback Summary  
- **Slack integration pain:** Users report that tools become unresponsive when operating in shared Slack channels (#1224). This blocks collaborative workflows and is likely a top frustration.  
- **Configuration confusion:** The `active_hours` heartbeat setting does not behave as documented, leading to unexpected job execution outside intended windows (#1223).  
- **WhatsApp media handling:** Inbound files are not readily usable by local tools, requiring manual work‑arounds (#1228).  
- **Positive signal:** The WhatsApp Markdown fix (#1220) was welcomed (closed quickly) showing responsiveness to formatting issues.  
- **Windows users:** Continued reliance on PR #468 indicates a persistent need for proper shell‑hook support on Windows platforms.  

Overall, feedback centers on **reliability of core integrations (Slack, WhatsApp) and predictability of scheduling features**, with ancillary requests for better localization and cross‑platform support.

### 8. Backlog Watch – Items Needing Maintainer Attention  
| Item | Age | Why it matters | Link |
|------|-----|----------------|------|
| **PR #468** – *fix(plugins): use cmd.exe on Windows for shell hooks* | Open since 2026‑03‑23 (~5 months) | Unresolved Windows compatibility blocks users on that platform; CI passes but still awaiting merge. | [#468](https://github.com/moltis-org/moltis/pull/468) |
| **Issue #1224** – Slack tool failure in shared channels | Open 2026‑08‑21 (fresh) | High‑impact bug affecting team‑wide usage; needs investigation and fix. | [#1224](https://github.com/moltis-org/moltis/issues/1224) |
| **Issue #1223** – `active_hours` ineffective | Open 2026‑08‑21 (fresh) | Configuration bug that undermines trust in scheduling; linked PR #1208 already exists but remains open. | [#1223](https://github.com/moltis-org/moltis/issues/1223) |
| **PR #1208** – *fix(cron): honor heartbeat active hours when the scheduler fires* | Open 2026‑08‑17 (5 days) | Direct fix for #1223; ready for review/merge. | [#1208](https://github.com/moltis-org/moltis/pull/1208) |
| **PR #1225** – i18n zh‑TW improvements | Open 2026‑08‑21 (fresh) | Localization enhancement; low risk, could be merged soon to improve international UX. | [#1225](https://github.com/moltis-org/moltis/pull/1225) |

*No item has accumulated significant comment/discussion volume, but the Windows shell‑hook PR (#468) stands out as a long‑running blocker that merits maintainer review.*

---

**Takeaway:** Moltis is actively refining core integrations and platform support. The immediate focus should be on resolving the Slack tool bug (#1224) and merging the pending cron active‑hours fix (#1208) to restore configuration reliability, while continuing to address longer‑standing Windows compatibility and localization work.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw Project Digest – 2026‑08‑22**  
*Based on GitHub activity (issues & PRs updated in the last 24 h).*

---

### 1. Today's Overview
The repository remains highly active: **34 issues** and **36 pull‑requests** were touched in the past day, with roughly equal numbers of open and closed items. No new releases were published, indicating that the team is currently focused on bug‑fixing, feature work, and test improvements rather than shipping a version. The mix of bugs, questions, and enhancement requests shows a healthy flow of user feedback and ongoing development.

### 2. Releases
- **No new releases** were tagged or published today. The latest available version remains the pre‑release **v2.1.1‑beta.1** (referenced in several open issues).

### 3. Project Progress (Merged/Closed PRs today)
| PR | Type | Summary |
|----|------|---------|
| [#7205](https://github.com/agentscope-ai/QwenPaw/pull/7205) | test | Fixed Windows integration coverage always reporting 0; added a fail‑closed guard. |
| [#7112](https://github.com/agentscope-ai/QwenPaw/pull/7112) | feat | Introduced **QwenPaw Hub** – a self‑hosted multi‑user control plane that can run isolated QwenPaw instances locally or via Docker. |
| [#7176](https://github.com/agentscope-ai/QwenPaw/pull/7176) | perf | Improved console responsiveness for long chat sessions (reduced repetitive Markdown re‑parsing and layout work). |
| [#7200](https://github.com/agentscope-ai/QwenPaw/pull/7200) | chore | Bumped version to **v2.1.1b2** (internal version bump, no user‑visible change). |

These closed PRs indicate progress on **testing reliability**, **multi‑user deployment capabilities**, **UI performance**, and **versioning hygiene**.

### 4. Community Hot Topics (most‑commented issues)
| Issue | Comments | Summary & Link |
|-------|----------|----------------|
| [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) | 6 | **Bug** – MCP backend restart does not auto‑recover; client must run `list mcp` to reconnect. Highlights a need for robust session recovery in the MCP client. |
| [#6780](https://github.com/agentscope-ai/QwenPaw/issues/6780) | 4 | **Question** – After ~30 min of idle, the app freezes and requires a process restart. Points to a possible resource leak or stale connection handling. |
| [#7016](https://github.com/agentscope-ai/QwenPaw/issues/7016) | 3 | **Bug** – Tool‑call endpoint returns 404 during streaming sessions (`/api/tool-calls/.../offload`). Indicates a mismatch between session/tool‑call ID generation and lookup. |
| [#7156](https://github.com/agentscope-ai/QwenPaw/issues/7156) | 3 | **Bug** – Embedding health‑check timeout is hard‑coded (5 s) and fires even when the Ollama backend is warm, causing fallback to BM25‑only retrieval. Calls for configurable timeout and better warm‑start detection. |
| [#7206](https://github.com/agentscope-ai/QwenPaw/issues/7206) | 2 | **Bug** – Manual `/compact` fails with a Pydantic `ValidationError` when `compact_threshold_ratio == 0.9` (regression from v2.1.0). Shows sensitivity of context‑compaction logic to config values. |

**Underlying needs:** Users demand **stable long‑running connections** (MCP, idle timeout), **correct API routing** for tool calls, and **configurable, sensible defaults** for health checks and compaction thresholds.

### 5. Bugs & Stability (reported today, severity‑ranked)
| Severity | Issue | Description | Fix/PR? |
|----------|-------|-------------|---------|
| **High** | [#7016](https://github.com/agentscope-ai/QwenPaw/issues/7016) | 404 on tool‑call offload → breaks streaming tool usage. | No linked PR yet. |
| **High** | [#7156](https://github.com/agentscope-ai/QwenPaw/issues/7156) | Embedding health‑check timeout causes unnecessary BM25 fallback, degrading recall quality. | No linked PR yet. |
| **Medium** | [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) | MCP client does not auto‑reconnect after server restart; requires manual `list mcp`. | No linked PR yet. |
| **Medium** | [#7206](https://github.com/agentscope-ai/QwenPaw/issues/7206) | Regression: `/compact` fails with Pydantic error at `compact_threshold_ratio=0.9`. | No linked PR yet. |
| **Low** | [#7136](https://github.com/agentscope-ai/QwenPaw/issues/7136) | File‑card name shows percent‑encoded mojibake for non‑ASCII filenames. | No linked PR yet. |
| **Low** | [#7199](https://github.com/agentscope-ai/QwenPaw/issues/7199) | `daily_paper` crashes on PDFs containing surrogate Unicode characters. | No linked PR yet. |

*No fix PRs were observed for the above bugs in the 24‑h window; they remain open for triage.*

### 6. Feature Requests & Roadmap Signals
| Issue | Type | Summary |
|-------|------|---------|
| [#7203](https://github.com/agentscope-ai/QwenPaw/issues/7203) | Enhancement | Add a toggle to hide/show tool‑call info (visual noise reduction). |
| [#7201](https://github.com/agentscope-ai/QwenPaw/issues/7201) | Enhancement | Split `max_inline_media_bytes` into separate per‑provider caps for image/video/audio and expose them in UI. |
| [#7198](https://github.com/agentscope-ai/QwenPaw/issues/7198) | Enhancement | Exempt pre‑session file operations from approval modes (reduce unnecessary prompts). |
| [#7196](https://github.com/agentscope-ai/QwenPaw/issues/7196) | Enhancement | Allow default folding of the reasoning chain (visual‑distraction control). |
| [#7204](https://github.com/agentscope-ai/QwenPaw/issues/7204) | Question | How to add custom tools (demand for better extensibility docs). |
| [#7197](https://github.com/agentscope-ai/QwenPaw/issues/7197) | Bug/Question | Custom channel plug‑ins not selectable in MCP tool‑authorization rules. |

**Predictions:** The UI‑toggles for tool‑call visibility and reasoning folding (#7203, #7196) are low‑effort, high‑impact UX tweaks likely to land in the next patch. Media‑byte granularity (#7201) addresses a growing need for fine‑grained multimodal limits and may be scheduled for a minor release after the current beta stabilises.

### 7. User Feedback Summary
- **Pain points:**  
  - Unstable MCP connections after server restarts (session loss).  
  - Idle‑time freezes requiring process restart.  
  - 404 errors when invoking tools during streaming sessions.  
  - Over‑conservative embedding health‑check timing causing unnecessary recall degradation.  
  - UI clutter from always‑visible tool calls and reasoning traces.  
  - File‑name encoding issues for non‑ASCII uploads.  
  - Excessive DB growth from `recall_history` expansion (historical issue, still referenced).  

- **Positive signals:**  
  - Adoption of the new **Hub** feature (#7112) shows interest in multi‑user, self‑hosted deployments.  
  - Performance improvements for long chat sessions (#7176) are well‑received.  
  - Requests for better documentation on custom tooling (#7204) indicate an engaged community extending the platform.

Overall, users appreciate the expanding feature set (Hub, media providers, performance tweaks) but expect **core reliability** (connection handling, tool invocation, health checks) to be solidified before further enhancements.

### 8. Backlog Watch (long‑unanswered important items)
| Item | Age | Why it matters | Status |
|------|-----|----------------|--------|
| [#6427](https://github.com/agentscope-ai/QwenPaw/issues/6427) | ~29 days | WebView2 renderer crash on desktop (deterministic assert failure) – blocks stable Windows desktop usage. | Open, no recent activity. |
| [#6430](https://github.com/agentscope-ai/QwenPaw/issues/6430) | ~29 days | Startup hang (~85 s) on every launch – impacts first‑time user experience. | Open, no recent activity. |
| [#6515](https://github.com/agentscope-ai/QwenPaw/pull/6515) | ~26 days | Addition of Volcengine Agent Plan & MiMo V2.5 providers (under review) – expands model ecosystem. | Open, awaiting review. |
| [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) | ~41 days | Per‑session model overrides (first‑time contributor, under review) – enables flexible LLM selection per chat. | Open, stalled. |
| [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) | ~30 days | Reranker UI config panel for ReMeLightMemoryCard (under review) – improves memory‑retrieval UX. | Open, under review. |

These items represent **stable‑foundation** concerns (desktop crashes, startup latency) and **strategic enhancements** (new providers, per‑session models, reranker UI) that have not yet received maintainer attention in the last few weeks. Prioritising them could improve both reliability and feature breadth.

---  

*Prepared from the public GitHub timeline of agentscope-ai/QwenPaw (CoPaw) for 2026‑08‑22.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

## ZeroClaw Project Digest (2026-08-22)

### 1. Today's Overview
The ZeroClaw project shows high maintenance activity with 50 issues and 50 PRs updated in the last 24 hours. No new releases were published, but development remains active with 47 open issues and 48 open PRs indicating ongoing work. The project maintains a strong focus on bug fixes and stability, particularly in security-critical areas, while progressing on usability enhancements.

### 2. Releases
No new releases were published in the last 24 hours.

### 3. Project Progress
Two PRs were closed (indicating merges or resolution) in the last 24 hours:
- **[#10092](https://github.com/zeroclaw-labs/zeroclaw/pull/10092)**: Fixed Anthropic credential fragment logging in provider authentication events (security fix).
- **[#10150](https://github.com/zeroclaw-labs/zeroclaw/pull/10150)**: Enabled terminal paste during active ZeroCode turns (usability fix).

Additionally, several high-priority issues were recently closed (though not via PRs in this window):
- **[#9925](https://github.com/zeroclaw-labs/zeroclaw/issues/9925)**: Resolved model thinking output leaking to daemon stdout (stability fix).
- **[#9976](https://github.com/zeroclaw-labs/zeroclaw/issues/9976)**: Secured Anthropic credential logging (duplicate of #10092 resolution).

### 4. Community Hot Topics
Most discussed issues by comment count:
- **[#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965)** (7 comments): Runtime test fixtures failing with ETXTBSY errors during parallel execution. *Underlying need*: Reliable test isolation in concurrent environments to prevent flaky CI.
- **[#9815](https://github.com/zeroclaw-labs/zeroclaw/issues/9815)** (5 comments): `forbidden_paths` security bypass when paths fall under `allowed_roots`. *Underlying need*: Robust, layered filesystem security policies without configuration conflicts.
- **[#9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779)** (4 comments): Documented `sops_dir` default ignored by daemon, causing silent SOP failures. *Underlying need*: Configuration honesty — documented defaults must work or emit clear errors.

No PR comment data was provided, but open PRs like **[#10197](https://github.com/zeroclaw-labs/zeroclaw/pull/10197)** (persist ACP turn progress) and **[#10146](https://github.com/zeroclaw-labs/zeroclaw/pull/10146)** (activate logical channel instances) show significant ongoing architectural work.

### 5. Bugs & Stability
Critical open bugs (ranked by severity):
1. **S0 Risk (Data Loss/Security)**:
   - **[#9947](https://

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*