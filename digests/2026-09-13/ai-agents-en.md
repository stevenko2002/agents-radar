# OpenClaw Ecosystem Digest 2026-09-13

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-09-12 22:16 UTC

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

**OpenClaw Project Digest – 2026‑09‑13**  

---  

### 1. Today's Overview  
The repository remains highly active: in the last 24 h ≈ 500 issues and 500 pull‑requests were touched, with 271 issues still open and 228 PRs awaiting review. No new releases were published today, but a steady stream of bug‑reports, regressions and small‑refactor PRs indicates ongoing maintenance work. Overall project health shows a healthy contribution velocity mixed with a noticeable backlog of high‑impact, open bugs that are gathering discussion.  

---  

### 2. Releases  
*No new releases were published on 2026‑09‑13.*  

---  

### 3. Project Progress (Merged / Closed PRs)  
- **Closed PRs (merged or closed)**: 272 PRs were updated in the last day; of those, a substantial portion reached the *closed* state (the data does not separate merged vs. closed, but the high number reflects active integration).  
- Notable closed items that signal progress:  
  - **#142476** – Fixed a cron‑session reaper that was blocking the event loop with synchronous `PRAGMA integrity_check` scans on large gateways.  
  - **#140620** – Resolved an upgrade stall where session‑transcript reconciliation stopped after importing only a fraction of pre‑upgrade sessions.  
  - **#145266** – Addressed a regression where the Git/dev Doctor refreshed the Codex plugin from npm, shadowing the bundled build and dropping the native‑hook‑relay export.  
  - **#145782** – Closed an update‑failure tracking issue (repair phase) after the underlying cause was mitigated in the 2026.9.4 release.  
These closures indicate that the team is making headway on stability‑critical bugs, especially around database maintenance, upgrade paths, and plugin lifecycle.  

---  

### 4. Community Hot Topics (Most‑Commented Issues)  

| Issue | Comments | 👍 | Summary & Link |
|-------|----------|----|----------------|
| **#44925** – *Subagent completion silently lost* | 27 | 2 | Describes multiple failure modes where subagent results disappear without retry, notification or auto‑restart. Core concern: reliability of long‑running agent workflows. [[link](https://github.com/openclaw/openclaw/issues/44925)] |
| **#97616** – *Unreaped hook/tool child processes (zombies)* | 23 | 1 | Reports accumulation of zombie child processes from hook/tool execution, leading to runtime degradation. Highlights need for better process reaping in the agent supervisor. [[link](https://github.com/openclaw/openclaw/issues/97616)] |
| **#142585** – *Doctor refuses valid legacy workspace on upgrade* | 17 | 0 | Regression blocking migration from 2026.7.1‑2 → 2026.9.3 when canonical rows are missing. Users hit upgrade‑blocker during routine updates. [[link](https://github.com/openclaw/openclaw/issues/142585)] |
| **#67777** – *Subagent completion delivery lost on timeout/drain* | 16 | 0 | Similar to #44925 but focuses on direct‑announce timeout, drain or orphan prune scenarios. Indicates a pattern of incomplete completion handling. [[link](https://github.com/openclaw/openclaw/issues/67777)] |
| **#78308** – *Channel‑mediated approval for MCP tool calls* | 16 | 1 | Feature request to extend the existing `/approve` consent mechanism to MCP tool calls, addressing security/consent gaps for external tool invocations. [[link](https://github.com/openclaw/openclaw/issues/78308)] |

**Underlying needs:**  
- **Reliability of subagent lifecycle** (completion delivery, zombie reaping) is a recurring theme – users expect deterministic task outcomes and clean resource cleanup.  
- **Upgrade safety** is critical; regressions that block Doctor‑mediated migrations cause operational friction.  
- **Security/consent** for extensible tooling (MCP) is gaining traction as more external plugins are adopted.  

---  

### 5. Bugs & Stability (Severity‑Ranked)  

| Severity | Issue | Key Symptoms | Fix/PR Status |
|----------|-------|--------------|---------------|
| **P0 / Critical** | #142476 (closed) | Event‑loop blocked 14‑76 s every few mins on large gateways due to synchronous integrity checks. | Fixed – PR merged (implied by closure). |
| | #145782 (closed) | Update failure during “repairing” phase on macOS. | Closed after mitigation in 2026.9.4. |
| **P1 / High** | #44925 (open) | Silent loss of subagent results – no retry/notification. | No linked fix PR yet; needs investigation. |
| | #97616 (open) | Zombie child‑process accumulation → runtime degradation. | No fix PR visible; likely requires supervisor reaping logic. |
| | #142585 (open) | Upgrade blocked by Doctor rejecting valid legacy workspace. | Awaiting fix; may involve migration script changes. |
| | #67777 (open) | Completion loss on direct‑announce timeout/drain. | Similar to #44925; no explicit fix PR. |
| | #78308 (open) | Missing channel‑mediated approval for MCP tool calls (feature/security). | Feature request – no implementation yet. |
| **P2 / Medium** | #140620 (closed) | Upgrade stalls after partial session‑transcript import. | Fixed – PR merged. |
| | #145266 (closed) | Git/dev Doctor shadows bundled Codex plugin, dropping native‑hook‑relay export. | Fixed – PR merged. |
| | #136183 (open) | SSH command executor hangs on banner exchange (SIGTERM). | No fix PR yet. |
| | #139847 (open) | Message dropped when a reply run is active (regression 2026.9.2). | No fix PR yet. |

**Observation:** The most severe stability issues (event‑loop stalls, update failures) have already been resolved, but a set of high‑impact bugs concerning subagent reliability and zombie processes remain open and are generating significant discussion.  

---  

### 6. Feature Requests & Roadmap Signals  

- **#78308** (Channel‑mediated approval for MCP tool calls) – Aligns with the project’s move toward stricter consent for external tool invocations; likely to be slated for a upcoming security‑hardening release.  
- **#131457** (Add progress‑streaming mode to Feishu/Lark channel) – Mirrors existing streaming support in Slack/Discord/Telegram; indicates a push for parity across chat platforms.  
- **#123009** (Recheck native Codex subscription blocks) – Suggests ongoing work to make Codex subscription handling less aggressive and more usage‑aware.  
- **#115367** (Provider‑owned read gate requiring `origin: bundled`) – Highlights a friction point as more channels become external plugins; a roadmap item may involve revisiting the read‑gate logic to accommodate external plugins safely.  

These requests point to two near‑term themes: **(1) strengthening security/consent boundaries for extensible tooling**, and **(2) achieving feature parity and smooth UX across all supported chat channels**.  

---  

### 7. User Feedback Summary (Pain Points & Use Cases)  

- **Reliability anxiety:** Users report that subagent outcomes can silently vanish (#44925, #67777), forcing them to add manual checks or retries in their workflows.  
- **Upgrade friction:** Doctor‑mediated migrations are failing or blocking (#142585, #140620), causing hesitation to adopt new versions on production gateways.  
- **Resource leaks:** Accumulating zombie processes (#97616) degrade long‑running gateways, prompting operators to schedule frequent restarts.  
- **Security/consent gaps:** The lack of a uniform approval mechanism for MCP tool calls (#78308) leaves teams uncertain about invoking state‑changing external tools via agents.  
- **Cross‑platform parity:** Requests for streaming mode in Feishu (#131457) and similar features show that users expect a consistent real‑time experience irrespective of the chat backend.  

Overall satisfaction appears mixed: while core agent functionality works for many, the noted regressions and reliability gaps are eroding confidence, especially in large‑scale or mission‑critical deployments.  

---  

### 8. Backlog Watch (Long‑Unanswered, High‑Impact Items)  

| Issue | Age (days) | Comments | Why it needs attention |
|-------|------------|----------|------------------------|
| **#44925** | 179 (created 2026‑03‑13) | 27 | Core subagent completion loss – affects reliability of any long‑running agent job. |
| **#97616** | 105 (created 2026‑06‑29) | 23 | Zombie process leak – degrades performance over time; requires supervisor fix. |
| **#142585** | 5 (created 2026‑09‑08) | 17 | Upgrade blocker – prevents migration to latest stable for many users. |
| **#136183** | 11 (created 2026‑09‑02) | 12 | SSH executor hang – blocks a common tool (remote command execution) for users relying on SSH. |
| **#115367** | 104 (created 2026‑07‑28) | 10 | Read‑gate limitation for external plugins – impacts security model as plugin ecosystem grows. |

These items have either gathered considerable discussion or represent blockers that affect a broad user base. Prioritizing fixes for subagent completion reliability, zombie process reaping, and upgrade safety would likely yield the highest impact on perceived project stability.  

---  

*End of digest.*

---

## Cross-Ecosystem Comparison

**Cross‑Project Comparison Report (2026‑09‑13)**  

---

### 1. Ecosystem Overview  
The open‑source personal‑AI‑assistant/agent landscape remains highly fragmented but increasingly converging on a few core concerns: reliable long‑running agent execution, safe upgrade paths, and fine‑grained consent/ security for extensible tooling. Most projects are maintenance‑heavy, with steady streams of bug‑fixes and small feature PRs rather than major releases. Community interest is strongest around workflow durability (sub‑agent results, zombie‑process reaping), upgrade friction, and plug‑in/provider flexibility, indicating a maturing user base that expects production‑grade stability alongside rapid feature iteration.

---

### 2. Activity Comparison  

| Project | Issues (24 h) | PRs (24 h) | Releases (24 h) | Health (qualitative)* |
|---------|---------------|-----------|-----------------|-----------------------|
| **OpenClaw** | ~500 | ~500 | 0 | **High** |
| **Hermes Agent** | 50 | 50 | 0 | **Medium‑High** |
| **ZeroClaw** | 24 | 50 | 0 | **Medium‑High** |
| **NanoClaw** | 6 | 43 | 0 | **Medium** |
| **NanoBot** | 4 | 20 | 0 | **Low‑Medium** |
| **LobsterAI** | 6 | 9 | 0 | **Low** |
| **PicoClaw** | 4 | 3 | 0 | **Low** |
| **Moltis** | 1 | 3 | 0 | **Very Low** |
| **IronClaw** | 0 | 2 | 0 | **Very Low** |
| **NullClaw** | 0 | 1 | 0 | **Very Low** |
| **TinyClaw** | 0 | 0 | 0 | **Inactive** |
| **CoPaw** | – | – | – | *Insufficient data* |
| **ZeptoClaw** | 0 | 0 | 0 | *Inactive* |

\*Health is inferred from combined issue/PR volume and backlog pressure (high = >800 total updates, medium‑high = 50‑80, medium = 20‑49, low = 5‑19, very low = <5).

---

### 3. OpenClaw’s Position  

| Aspect | OpenClaw | Typical Peers |
|--------|----------|---------------|
| **Activity Scale** | ~1 000 issue/PR updates in 24 h – an order of magnitude higher than any other project. | Most peers < 100 updates; only Hermes and ZeroClaw reach ~100. |
| **Backlog** | 271 open issues, 228 PRs awaiting review – sizable but actively triaged. | Smaller backlogs (e.g., NanoClaw 2 open issues, ZeroClaw 18 open). |
| **Technical Focus** | Core agent runtime: event‑loop safety, database maintenance, upgrade Doctor, plugin lifecycle, sub‑agent reliability. | Peripheral concerns: WebUI/UX (NanoBot, PicoClaw), provider‑specific adapters (Hermes gateways, Moltis Telegram), setup ergonomics (NanoClaw), low‑level IPC hardening (NullClaw). |
| **Community Size** | Implied by volume of contributions – likely the largest contributor base in the snapshot. | Smaller, often maintainer‑driven (e.g., IronClaw, NullClaw). |
| **Maturity** | High velocity but noticeable stability debt (high‑impact open bugs). | Generally lower velocity, fewer critical regressions; some projects (ZeroClaw) showing similar stability pressure. |

*Takeaway:* OpenClaw is the ecosystem’s “core engine” – the most active, with the broadest functional scope and the largest contributor pool, but it also carries the heaviest stability backlog.

---

### 4. Shared Technical Focus Areas  

| Theme | Projects Reporting It | Specific Needs / Pain Points |
|-------|----------------------|------------------------------|
| **Sub‑agent / task reliability** | OpenClaw (#44925, #67777, #97616), NanoClaw (provider‑picker, session persistence), ZeroClaw (#10788 history loss, #10797 memory‑backend loss) | Deterministic completion delivery, retry/notification, zombie‑process reaping, durable history across tool/ACP failures. |
| **Upgrade safety & migration** | OpenClaw (#142585, #140620), Hermes (cron hand‑off #109243), NanoClaw (provider‑picker #3787), ZeroClaw (Windows CI/advisory flakiness) | Smooth Doctor‑mediated migrations, no regression blocking upgrades, reliable external‑worker hand‑off. |
| **Security / consent for extensible tooling** | OpenClaw (#78308 MCP approval), Hermes (MCP mTLS isolation #109429), ZeroClaw (approval policy #9724, Telegram notice #10400) | Uniform approval mechanisms, mTLS scoping, locale‑aware consent UI. |
| **Memory / state durability** | OpenClaw (sub‑agent loss), ZeroClaw (#10797 Markdown backend, #10788 durable history), NanoClaw (persistent coding sessions #3783) | Persistent storage across restarts, concurrent‑safe writes, session‑binding for scheduled tasks. |
| **Cross‑platform UI / performance** | PicoClaw (WebUI lag #3281, IRC long messages #3287), Hermes (Telegram JSON parsing #109423), ZeroClaw (Windows stack overflow #10734, REPL UTF‑8 #10795) | Smooth UI with large history, correct handling of multi‑part messages, Windows‑specific stability. |
| **Provider flexibility & plugin ecosystem** | Hermes (multiple models per provider #9809), Moltis (Requesty provider #1143), ZeroClaw (multiple models per provider #9809, plugin outbox #9139) | Ability to add arbitrary OpenAI‑compatible endpoints, versioned plugin contracts, durable outbox for cron plugins. |
| **Tool policy controls** | Moltis (Telegram shared‑chat tool policy #1265), ZeroClaw (approval policy #9724) | Granular allow/deny lists per chat/platform, propagation through config/storage. |
| **Testing & regression prevention** | IronClaw (lineage test #8098), Hermes (various socket‑leak fixes), NullClaw (MCP timeout fix #996) | Targeted unit/integration tests to guard against lineage leakage, resource leaks, timeout hangs. |

---

### 5. Differentiation Analysis  

| Project | Primary Target / Use‑Case | Core Architectural Angle | Notable Distinction |
|---------|--------------------------|--------------------------|---------------------|
| **OpenClaw** | Enterprise‑grade agent gateways & fleets | Monolithic runtime with integrated DB, upgrade Doctor, plugin lifecycle | Largest surface area; handles low‑level concerns (event‑loop, DB migrations) that most others delegate to external services. |
| **Hermes Agent** | Multi‑gateway messaging platform (Telegram, Desktop, CLI, bots) | Unified gateway‑owned session model (#106742) | Strong focus on cross‑device session persistence and bot‑screen streaming. |
| **ZeroClaw** | Windows‑centric, low‑level agent core (RPC, memory backends) | Plugin‑framework with durable outbox & typed events | Emphasis on Windows CI stability, memory‑backend concurrency, and policy‑driven approvals. |
| **NanoBot** | Headless & WebUI‑driven personal assistant | Modular WebUI + headless login flow | Improves onboarding (headless password) and WebUI performance; minimal backend changes. |
| **PicoClaw** | IRC‑centric chat bot with WebUI | Plugin‑based MCP & protocol adapters | Addresses niche IRCv3 long‑message reassembly and UI latency. |
| **NanoClaw** | Setup & provider onboarding experience | Installer / service‑manager + provider picker | Fixes first‑run usability (provider picker) and persistent coding sessions. |
| **Moltis** | Secure tool execution in shared chat channels (Telegram, Slack) | Policy‑propagation via config & runtime | Unique focus on per‑channel tool‑audience controls. |
| **NullClaw** | Minimal MCP stdio helper library | Simple timeout‑bounded stdio wrapper | Very small scope; solves a specific IPC hang. |
| **IronClaw** | Research‑oriented lineage & turn‑state tracking | Test‑driven improvements to state snapshots | Purely test‑and‑model‑focused; no user‑visible features. |
| **LobsterAI** | Desktop‑based AI workflow app (Electron) | Auth token refresh + UI modal fixes | Concentrates on auth race conditions and UI quirks specific to Electron. |
| **TinyClaw / ZeptoClaw** | (No recent activity) | – | Effectively dormant in the snapshot window. |
| **CoPaw** | – | – | Insufficient data to characterize. |

---

### 6. Community Momentum & Maturity  

| Activity Tier | Projects | Characteristics |
|---------------|----------|------------------|
| **Rapidly iterating** (high‑velocity, active backlog) | OpenClaw, Hermes Agent, ZeroClaw | Frequent issue/PR turnover, ongoing stability work, visible release‑cycle pressure. |
| **Steady medium** | NanoClaw, NanoBot | Moderate PR flow, focused on usability and setup; fewer critical regressions. |
| **Low / stabilizing** | PicoClaw, LobsterAI, Moltis, Mol­tis, IronClaw, NullClaw | Sporadic updates, mostly bug‑fixes or small features; backlog limited, projects appear to be maintaining rather than expanding. |
| **Inactive / dormant** | TinyClaw, ZeptoClaw | No updates in the last 24 h; likely awaiting contributor interest or a new release cycle. |

Overall, the ecosystem shows a **core‑periphery split**: a few projects (OpenClaw, Hermes, ZeroClaw) drive

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

### NanoBot Project Digest (2026-09-13)

#### 1. Today's Overview
NanoBot demonstrated active development in the last 24 hours with 4 issue updates (3 open, 1 closed) and 20 PR updates (11 open, 9 merged/closed). No new releases were published. The project shows steady progress focused on improving usability (headless login, WebUI performance), stability (session security, history replay), and foundational features (tool invocation context, recovery mechanisms), indicating a healthy maintenance cycle addressing both immediate user pain points and long-term architectural needs.

#### 2. Releases
No new releases were published in the last 24 hours.

#### 3. Project Progress (Merged/Closed PRs)
Key advancements from merged/closed PRs include:
- **Usability & DX**: 
  - [`#5735`](https://github.com/HKUDS/nanobot/pull/5735) improved headless login by detecting text-only browsers and providing clear SSH handoff instructions.
  - [`#5743`](https://github.com/HKUDS/nanobot/pull/5743) simplified WebUI settings, setting Calendar as the default Automations view.
- **Performance & Stability**:
  - [`#5745`](https://github.com/HKUDS/nanobot/pull/5745) optimized large history replay via incremental/cached processing and budget controls.
  - [`#5738`](https://github.com/HKUDS/nanobot/pull/5738) reduced WebUI refresh overhead by bounding reasoning previews.
  - [`#5613`](https://github.com/HKUDS/nanobot/pull/5613) prevented Responses API failures by cleaning replayed provider items.
  - [`#5675`](https://github.com/HKUDS/nanobot/pull/5675) fixed provider failover after runner deadlines.
- **Extensibility**:
  - [`#5746`](https://github.com/HKUDS/nanobot/pull/5746) added DaoXE as a named gateway provider.

#### 4. Community Hot Topics
- **Most Active Issue**: [`#5726`](https://github.com/HKUDS/nanobot/issues/5726) (closed, 2 comments) – Headless server users reported confusion over initial WebUI password after installation, highlighting a critical onboarding gap for non-GUI environments.
- **High-Interest Open Issue**: [`#5721`](https://github.com/HKUDS/nanobot/issues/5721) (1 comment) – MemCode CEO proposed durable cross-session memory integration, signaling strong enterprise interest in persistent state management.
- **Notable PR Discussion**: While PR comment counts weren't provided, [`#5750`](https://github.com/HKUDS/nanobot/pull/5750) (linked to [`#5749`](https://github.com/HKUDS/nanobot/issues/5749)) and [`#5748`](https://github.com/HKUDS/nanobot/pull/5748) (linked to [`#5747`](https://github.com/HKUDS/nanobot/issues/5747)) show active development around tool invocation stability and recovery – core concerns for agent reliability.

#### 5. Bugs & Stability (Ranked by Severity)
- **P1 (Critical)**:
  - [`#5726`](https://github.com/HKUDS/nanobot/issues/5726) (closed): Headless initial password ambiguity. Addressed via improved login flow in [`#5735`](https://github.com/HKUDS/nanobot/pull/5735).
  - Session security: [`#5633`](https://github.com/HKUDS/nanobot/pull/5633) (open, p1) – Path traversal fix via session key validation

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent – Project Digest (2026‑09‑13)**  

---

### 1. Today’s Overview  
The repository showed very high engagement in the last 24 h: **50 issues** and **50 pull‑requests** were updated, with only 2 issues closed and 4 PRs merged/closed. No new releases were published. The bulk of activity consists of bug‑fixes, small feature tweaks, and ongoing discussions around core reliability (session persistence, cron worker hand‑offs, and MCP/OAuth flows). Overall project health remains active but the backlog of open issues (48) indicates a steady inflow of work that outpaces closure velocity.

---

### 2. Releases  
*No new releases* were tagged today. The latest version in circulation is **0.21.2** (commit `f364c1977`), referenced in several bug reports.

---

### 3. Project Progress (Merged/Closed PRs)  
Four PRs reached a merged/closed state today (exact IDs not listed in the supplied data). Based on the open‑PR list, the following fixes have been proposed and are likely candidates for inclusion once approved:  

| PR | Area | Fix Summary |
|----|------|-------------|
| #109432 | `gateway/telegram` | Decode JSON‑encoded `allowed_chats` before comma‑splitting to prevent silent message drops. |
| #109437 | `mcp` | Isolate mTLS client‑certificate connections across profile scopes (addresses #109429). |
| #109343 | `curator/skills` | Skip absolute symlinks in skill snapshots to avoid un‑restorable links. |
| #109342 | `desktop/evals` | Close HTTP response in lease‑probe helper to eliminate socket leak. |

These PRs target stability regressions introduced in the 0.21.2 cycle and, if merged, should reduce the number of “gateway not running” warnings, Telegram message loss, and skill‑snapshot failures.

---

### 4. Community Hot Topics  

| Item | Type | Comments | Reactions | Key Concern |
|------|------|----------|-----------|-------------|
| [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) | Feature (Bot Group Chats) | **28** | 👍 1 | Keep bots working across devices/gateways when the Desktop client is closed. |
| [#109243](https://github.com/NousResearch/hermes-agent/issues/109243) | Bug (cron hand‑off) | **17** | 👍 0 | External‑worker handoff times out (5 s SLA) because a cold worker needs ~12 s to start. |
| [#89412](https://github.com/NousResearch/hermes-agent/issues/89412) | Bug (MCP OAuth) | **6** | 👍 0 | OAuth flow never triggers for servers that don’t send a 401/challenge (e.g., Google Gmail MCP). |
| [#106742](https://github.com/NousResearch/hermes-agent/pull/106742) | PR (Unified gateway) | – (comments undefined) | – | Proposes that *all* Hermes surfaces (CLI, TUI, Desktop, API, ACP, bots, cron) share a single gateway‑owned session. |
| [#108914](https://github.com/NousResearch/hermes-agent/pull/108914) | PR (Bot Screen) | – | – | Streams a headless bot’s Xfce desktop into Hermes Desktop for interactive takeover (2FA, login). |

**Underlying needs:** Users want **seamless cross‑device continuity** (issue #97681), **reliable background job execution** (cron hand‑off #109243), and **robust authentication** for third‑party MCP services (#89412). The unified‑gateway PR (#106742) directly addresses the first need by ensuring a single source of truth for session state.

---

### 5. Bugs & Stability (Today’s Reports)  

| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **P1 / High** | [#109357](https://github.com/NousResearch/hermes-agent/issues/109357) | Desktop overwrites remote host’s `config.yaml` with local factory config on connection switch. | No fix PR yet. |
| **P2 / High** | [#109243](https://github.com/NousResearch/hermes-agent/issues/109243) | Cron external‑worker handoff requires ack within 5 s; cold start ≈12 s → jobs fail intermittently. | No fix PR yet. |
| **P2** | [#109215](https://github.com/NousResearch/hermes-agent/issues/109215) | Native memory tool stages already‑invalid proposals, causing perpetual approval failures. | No fix PR yet. |
| **P2** | [#109423](https://github.com/NousResearch/hermes-agent/issues/109423) | Telegram `allowed_chats` stored as JSON string is mis‑parsed → group messages silently dropped. | **#109432** (fix). |
| **P2** | [#109429](https://github.com/NousResearch/hermes-agent/issues/109429) | mTLS client certs excluded from MCP connection identity → cross‑profile leakage. | **#109437** (fix). |
| **P3** | Numerous socket‑leak fixes (e.g., #109342, #109344‑#109346) | Missing `close()` on HTTP responses in evals, skills, browser, terminal tools. | Fix PRs exist for each. |

**Stability takeaway:** The most urgent regressions are the config‑overwrite bug (#109357) and the cron hand‑off timeout (#109243). Both lack an associated fix PR at the moment, making them candidates for immediate triage.

---

### 6. Feature Requests & Roadmap Signals  

| Feature | Issue/PR | Notes |
|---------|----------|-------|
| Bot Group Chat persistence across devices | [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) | High interest; aligns with unified‑gateway effort (#106742). |
| “Home” as first‑class sidebar item | [#109433](https://github.com/NousResearch/hermes-agent/issues/109433) | Low‑effort UI tweak; likely to be accepted for next release. |
| VPN‑mediated browser takeover (user‑in‑the‑loop) | [#108660](https://github.com/NousResearch/hermes-agent/pull/108660) | Enables secure credential handling; fits the “Bot Screen” direction. |
| Bot Screen (streamed headless desktop) | [#108914](https://github.com/NousResearch/hermes-agent/pull/108914) | Directly addresses #97681 use‑case; could ship soon if review passes. |
| Model‑alias custom `base_url` preservation | [#107191](https://github.com/NousResearch/hermes-agent/issues/107191) | Blocking bug; fix would improve configurability for self‑hosted LLMs. |

**Roadmap inference:** The project appears to be converging on a **single‑gateway, session‑centric architecture** (#106742) that will underpin features like persistent group chats, bot screen streaming, and reliable cron job execution. UI refinements (e.g., “Home” item) and authentication hardening (MCP mTLS isolation) are also near‑term priorities.

---

### 7. User Feedback Summary  

- **Pain points:**  
  - Loss of bot/context when Desktop app is closed (users want “pick up where you left off” on another device).  
  - Cron jobs silently failing due to timing mismatches between handoff ack and worker start‑up.  
  - Authentication flows stalling with MCP servers that don’t issue a 401 challenge (e.g., Google services).  
  - Configuration drift: Desktop overwriting remote configs, empty strings shadowing env‑var fallbacks, and stale `base_url` handling.  

- **Positive signals:**  
  - Strong interest in cross‑device bot collaboration and unified session model.  
  - Appreciation for rapid bug‑fix turnaround (many fix PRs opened the same day as the issue).  
  - Enthusiasm for experimental features like Bot Screen and VPN‑mediated browser control.  

Overall, users value **reliability** (session persistence, cron reliability) and **extensibility** (secure third‑party tool integration) but are frustrated by intermittent regressions that break core workflows.

---

### 8. Backlog Watch (Long‑Running / High‑Impact Items)  

| Issue | Age (approx.) | Severity | Why it matters |
|-------|---------------|----------|----------------|
| [#82304](https://github.com/NousResearch/hermes-agent/issues/82304) | ~5 weeks | P3 | Unattended autonomous missions leak GPU resources and lose work; blocks reliable long‑running agent jobs. |
| [#90679](https://github.com/NousResearch/hermes-agent/issues/90679) | ~4 weeks | P2 | Docker‑backend terminal fails on Windows due to host‑path cwd; blocks cross‑platform dev workflows. |
| [#92146](https://github.com/NousResearch/hermes-agent/issues/92146) | ~4 weeks | P3 | `HERMES_HOME` exemption bypasses protected‑instruction gate, exposing SOUL.md/AGENTS.md to accidental edits. |
| [#106742](https://github.com/NousResearch/hermes-agent/pull/106742) | ~4 days | P1 (potential) | Unified gateway – if stalled, blocks many dependent features (group chat persistence, reliable cron, bot screen). |
| [#108659](https://github.com/NousResearch/hermes-agent/issues/108659) | ~2 days | P2 | Custom provider cache pollution leads to wrong vision answers; affects multimodal reliability. |

These items have either gone stale without a fix PR or represent architectural changes that, once resolved, would unlock multiple user‑requested capabilities. Prioritizing reviews and providing feedback on these threads would help reduce the backlog and improve overall project velocity.

--- 

*Generated automatically from GitHub activity data for Hermes Agent (NousResearch/hermes-agent) on 2026‑09‑13.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest – 2026‑09‑13**  
*Based on GitHub activity (issues & PRs updated in the last 24 h)*  

---

### 1. Today's Overview  
PicoClaw shows moderate developer activity today: **4 open issues** and **3 open pull requests** were updated, with no items closed or merged. The project is currently dealing with a **critical infrastructure problem** (expired TLS certificate for picoclaw.io) alongside several longer‑standing usability and feature requests. No new releases were published, so the latest stable version remains 0.3.1.

### 2. Releases  
*No new releases were published in the last 24 h.*  
→ No version changes, breaking changes, or migration notes to report.

### 3. Project Progress  
| PR | Status | Summary | Impact |
|----|--------|---------|--------|
| #3378 | Open | Fix hardcoded OAuth scopes in `RefreshAccessToken` – use `cfg.Scopes` instead of `"openid profile email"` | Will correct token‑refresh behavior for providers that require custom scopes (awaiting review/merge) |
| #3368 | Open (stale) | Docs: add Parallel Search MCP setup example to CLI guide | Documentation improvement – adds a ready‑to‑copy search integration |
| #3367 | Open (stale) | Docs: add Pilot MCP setup example + health‑check command | Documentation improvement – clarifies Pilot Protocol usage |

*No PRs were merged or closed today, so no feature or bug‑fix code landed in the main branch.*

### 4. Community Hot Topics  
| Item | Type | Comments | Reactions | Why it’s hot |
|------|------|----------|-----------|--------------|
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) – *Better support long messages in IRC* | Feature | 12 | 0 | Users need IRCv3 message reassembly; long discussion shows clear demand. |
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) – *Web UI chat input laggy with longer history* | Bug | 10 | 👍2 | Directly impacts day‑to‑day usability; several users report the slowdown. |
| [#3366](https://github.com/sipeed/picoclaw/issues/3366) – *Add support for OpenAI compatible providers* | Feature | 2 | 0 | Growing interest in self‑hosted LLM routers (e.g., 9Router). |
| [#3377](https://github.com/sipeed/picoclaw/issues/3377) – *TLS certificate for picoclaw.io expired* | Critical/Infra | 0 | 👍1 | Site downtime affects all visitors; urgent fix needed. |

**Underlying needs:**  
- **IRC users** want seamless handling of multi‑part messages without manual splitting.  
- **Web UI users** experience performance degradation as chat history grows, pointing to inefficient DOM updates or state handling.  
- **Developers** seek extensibility to plug in any OpenAI‑compatible endpoint, reflecting a shift toward self‑hosted or private LLM services.  
- **Site reliability** is a prerequisite for community trust; the expired cert blocks access to docs and downloads.

### 5. Bugs & Stability  
| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **Critical** | [#3377](https://github.com/sipeed/picoclaw/issues/3377) – TLS cert expired | `https://picoclaw.io` is unreachable in all browsers; affects documentation, releases, and user trust. | No PR yet – requires ops/infra action (cert renewal). |
| **High** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) – Web UI input lag | Input box becomes unresponsive when chat history accumulates; likely due to re‑rendering of large message list. | No PR yet – needs performance profiling. |
| **Low** | (none reported today) | — | — |

### 6. Feature Requests & Roadmap Signals  
| Feature | Issue/PR | Current traction | Likelihood for next release |
|---------|----------|------------------|-----------------------------|
| Long‑message support for IRCv3 | [#3287](https://github.com/sipeed/picoclaw/issues/3287) | 12 comments, ongoing discussion | Medium – well‑defined scope; could be tackled in a minor version if prioritized. |
| OpenAI‑compatible provider (custom endpoint) | [#3366](https://github.com/sipeed/picoclass/issues/3366) | 2 comments, clear use‑case (self‑hosted routers) | High – aligns with growing demand for LLM flexibility; small implementation effort. |
| Documentation – Parallel Search MCP setup | [#3368](https://github.com/sipeed/picoclaw/pull/3368) | Stale, no comments | Low‑Medium – docs only; can be merged once reviewed. |
| Documentation – Pilot MCP setup | [#3367](https://github.com/sipeed/picoclaw/pull/3367) | Stale, no comments | Low‑Medium – similar to above. |

### 7. User Feedback Summary  
- **Pain points:**  
  - Laggy web UI when chat history grows (frustrates interactive use).  
  - IRC clients splitting long messages cause PicoClaw to treat them as separate entries, breaking conversation flow.  
  - Site downtime due to expired TLS certificate blocks access to documentation and downloads.  
- **Positive signals:**  
  - Community actively requesting extensibility (OpenAI‑compatible providers) shows interest in integrating PicoClaw with private LLM stacks.  
  - Documentation contributions (PRs #3367, #3368) indicate users are trying to onboard new MCP integrations and appreciate clear examples.  
- **Satisfaction/Dissatisfaction:**  
  - Dissatisfaction driven by performance and reliability issues; satisfaction expressed when feature requests are acknowledged (e.g., the OpenAI‑compatible request has already received a thumbs‑up on the issue).  

### 8. Backlog Watch  
| Item | Age (as of 2026‑09‑13) | Why it needs attention |
|------|------------------------|------------------------|
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) – IRC long‑message support | ~2 months | Stale but high‑impact feature; no recent maintainer response. |
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) – Web UI lag | ~2 months | Directly affects core UX; needs performance investigation. |
| [#3366](https://github.com/sipeed/picoclaw/issues/3366) – OpenAI compatible provider | ~1 week | Clear demand; low implementation effort; could be quick win. |
| [#3368](https://github.com/sipeed/picoclaw/pull/3368) – Parallel Search MCP docs | ~1 week (stale) | Documentation PR awaiting review; low risk. |
| [#3367](https://github.com/sipeed/picoclaw/pull/3367) – Pilot MCP docs | ~1 week (stale) | Same as above. |
| [#3377](https://github.com/sipeed/picoclaw/issues/3377) – TLS cert expiry | <1 day | **Critical** – site down; requires immediate ops action (cert renewal). |

---

**Overall Health Assessment:**  
PicoClaw is experiencing a **mix of urgent infrastructure failure** (TLS cert) and **moderate‑term usability/feature work**. The core codebase sees little change today (no merges), but the issue tracker shows active community interest. Addressing the cert expiry should be the top priority, followed by performance fixes for the web UI and the IRC long‑message feature to improve day‑to‑day usability. Documentation PRs are ready for merging and can help onboard users once the site is back online. If the OpenAI‑compatible provider is implemented soon, it could become a differentiating feature in the next minor release.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest – 2026‑09‑13**  
*Generated from GitHub activity (issues & PRs updated in the last 24 h)*  

---  

### 1. Today's Overview  
NanoClaw remains highly active: **6 issues** and **43 pull‑requests** were touched in the past day, with **2 issues still open** and **24 PRs awaiting review**. No new releases were cut today, indicating that work is focused on integrating ongoing features and fixing regressions rather than publishing a version. Overall project health is good – the core team is merging a steady stream of bug‑fixes while several larger feature branches (voice, persistent coding sessions, community‑portal enhancements) are progressing toward merge.  

---  

### 2. Releases  
*No new releases were published today.*  

---  

### 3. Project Progress (Merged/Closed PRs)  
| PR | Type | Summary | Link |
|----|------|---------|------|
| #3782 | Fix | Gateway providers now receive the session’s `containerName` – improves credential routing. | <https://github.com/nanocoai/nanoclaw/pull/3782> |
| #3763 | Fix (skill) | Removes stale Dockerfile guard left by pre‑8772ec97 `add-opencode` installs. | <https://github.com/nanocoai/nanoclaw/pull/3763> |
| #3774 | Fix | OneCLI gateway files are now persisted across host restarts, preventing `EISDIR` errors. | <https://github.com/nanocoai/nanoclaw/pull/3774> |
| #3779 | Fix (setup) | Added host‑identity verification before accepting a restarted `ncl.sock`. | <https://github.com/nanocoai/nanoclaw/pull/3779> |
| #3768 | Fix (setup) | Linux fallback service is now started and verified during setup. | <https://github.com/nanocoai/nanoclaw/pull/3768> |
| #3776 | Fix (setup) | Downloaded installers are executed via absolute system‑shell path, fixing PATH‑related failures on exe.dev images. | <https://github.com/nanocoai/nanoclaw/pull/3776> |
| #3770 | Fix (config) | `WEBHOOK_PORT` now honours values defined in `.env`. | <https://github.com/nanocoai/nanoclaw/pull/3770> |
| #3767 | Fix (setup) | Preserves existing files when a registry copy fails, allowing safe retries. | <https://github.com/nanocoai/nanoclaw/pull/3767> |
| #3766 | Fix (db) | SQLite migration checks are re‑run under a write lock to avoid duplicate applications. | <https://github.com/nanocoai/nanoclaw/pull/3766> |
| #3773 | Fix (setup) | Fetch explicit tracking refs for registry‑based skill installs in shallow clones. | <https://github.com/nanocoai/nanoclaw/pull/3773> |
| #3758 | Fix (setup) | Portal reminders no longer re‑ask questions already answered by the operator. | <https://github.com/nanocoai/nanoclaw/pull/3758> |
| #3754 | Fix (setup) | Not‑enrolled browser handoff now prints a single portal link. | <https://github.com/nanocoai/nanoclaw/pull/3754> |

**What advanced:**  
- Core reliability (DB migrations, service start‑up, credential handling).  
- Setup ergonomics (provider picker restoration, env‑var handling, installer execution).  
- Skill‑specific fixes (opencode Dockerfile guard, OneCLI persistence).  

---  

### 4. Community Hot Topics  
Because comment counts are low across the board, the most‑discussed items are those with **any** interaction:

| Item | Type | Comments / Reactions | Why it matters |
|------|------|----------------------|----------------|
| **Issue #3787** – Fresh setup skips provider picker and silently selects Claude | Bug (open) | 1 comment | New users cannot choose alternative runtimes (e.g., Codex) on first install – a first‑run usability blocker. |
| **Issue #3762** – `add-opencode` leaves stale Dockerfile guard on remove/upgrade | Bug (closed) | 1 comment | Highlights lingering technical debt from a previous refactor; indicates need for better clean‑up scripts. |
| **PR #3788** – Restore provider picker on fresh installs | Fix (open) | 0 comments | Directly addresses #3787; community watchers are waiting for this to land. |
| **PR #3786** – Typing indicator follows runner’s turn state | Feature (open) | 0 comments | Improves UX of the agent‑runner UI; signals ongoing polishing of real‑time feedback. |
| **PR #3784** – Community‑portal: opt‑in remote terminal & chat surface | Feature (open) | 0 comments | Expands the portal’s usefulness for remote collaboration; likely a high‑value add‑on for teams. |

*Underlying need:* Users expect a smooth, configurable first‑run experience and reliable cleanup when removing skills. The open provider‑picker fix (#3788) is the most immediate hotspot.  

---  

### 5. Bugs & Stability (Reported Today)  
| Severity | Issue | Summary | Fix PR (if any) |
|----------|-------|---------|-----------------|
| **High** | #3787 | Fresh setup skips provider picker → forces Claude, preventing selection of other runtimes. | #3788 (open) |
| **Medium** | #3785 | `channels` branch Slack adapter references non‑existent `extractRawText` function. | – (awaiting core change) |
| **Low** | #3765 (closed) | Concurrent SQLite migrations during fresh setup caused initializer failure. | #3766 (merged) |
| **Low** | #3769 (closed) | `uvx` bootstrap fails when `~/.local/bin` missing from PATH. | – (already resolved in newer commits) |
| **Low** | #2901 (closed) | `WEBHOOK_PORT` ignored when set in `.env`. | #3770 (merged) |

**Ranking:** The provider‑picker bug (#3787) is the only blocker affecting new users; it has an associated fix PR (#3788) ready for merge. The Slack‑adapter mismatch (#3785) is a branch‑specific issue that will block the `channels` feature until the core function is added.  

---  

### 6. Feature Requests & Roadmap Signals  
| Open PR | Feature Area | Anticipated Impact |
|---------|--------------|--------------------|
| #3489 | Codex provider – structured setup‑driver authentication | Enables non‑interactive, CI‑friendly Codex login – likely to land in the next minor release. |
| #3788 | Setup – provider picker restoration | Restores user choice; essential for multi‑provider adoption. |
| #3786 | Agent‑runner – typing indicator tied to turn state | Improves UI fidelity; expected in the upcoming UI polish sprint. |
| #3784 | Community‑portal – remote terminal & chat | Adds collaborative debugging; a candidate for the next “community‑portal” enhancement release. |
| #3783 | Persistent coding sessions (code mode) | Introduces tmux‑based sandbox workflow – a major shift toward IDE‑like usage. |
| #3772 / #3764 | Voice channel adapter & `/add-voice` skill | Brings real‑time audio interaction; likely slated for a future “voice” feature flag. |
| #3781 | Agent‑runner – enforce tools‑only delivery | Strengthens security for tool‑only groups; may appear in the next security hardening patch. |

Overall, the roadmap appears to be moving toward: **(1)** solidifying core setup reliability, **(2)** expanding interaction modalities (voice, remote terminal), and **(3)** delivering more deterministic, secure agent runtimes (persistent sessions, tools‑only enforcement).  

---  

### 7. User Feedback Summary  
- **Pain points:** First‑time users report being locked into Claude because the provider picker is missing (issue #3787).  
- **Frustrations:** Environment‑variable handling (`WEBHOOK_PORT`) was previously ignored, causing confusion (now fixed).  
- **Positive signals:** Recent fixes for SQLite migrations, installer execution, and OneCLI persistence have eliminated several hard‑to‑reproduce startup failures, improving out‑of‑the‑box stability.  
- **Desired features:** Users are asking for more provider choice (Codex, voice), better UI feedback (typing indicator), and collaborative tools (remote terminal, persistent coding sessions).  

---  

### 8. Backlog Watch  
| Item | Type | Age / Status | Why it needs attention |
|------|------|--------------|------------------------|
| **Issue #3785** | Bug (open) – channels branch Slack adapter missing function | Opened 2026‑09‑12 | Blocks merging of the `channels` feature; needs either a stub implementation in core or removal of the call. |
| **Issue #3787** | Bug (open) – provider picker skipped | Opened 2026‑09‑12 | Affects all fresh installs; fix PR #3788 awaits review. |
| **PR #3788** | Fix (open) – restore provider picker | Opened 2026‑09‑12 | Directly resolves #3787; high priority for next release. |
| **PR #3786** | Feature (open) – typing indicator tied to turn state | Opened 2026‑09‑12 | Improves UX; low risk, could be merged soon. |
| **PR #3784** | Feature (open) – community‑portal remote terminal & chat | Opened 2026‑09‑12 | Larger change; may need additional review/testing before merge. |
| **PR #3783** | Feature (open) – persistent coding sessions | Opened 2026‑09‑12 | Major architectural shift; requires careful validation of sandbox lifecycle. |

*No items appear to be stalled for an unusually long time; the backlog is dominated by today’s activity. The maintainer team should prioritize merging #3788 (provider picker) and addressing #3785 to allow the `channels` branch to progress.*  

---  

**End of Digest**.  
*All links point to the respective GitHub issue or pull request.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw Project Digest – 2026‑09‑13**  

---

### 1. Today's Overview  
The repository shows minimal activity in the last 24 hours: no issue updates and a single pull‑request that was merged/closed. The merged PR (#996) addresses a timeout‑handling bug in the MCP stdio interface, indicating that the project is currently in a maintenance‑oriented state rather than feature‑development mode. Overall project health appears stable, with the test suite passing after the change.

### 2. Releases  
*No new releases were published today.*  

### 3. Project Progress  
| PR | Status | Summary | Link |
|----|--------|---------|------|
| #996 | Merged/Closed | **fix(mcp): bound stdio response waits** – Applies a configurable `timeout_ms` to stdio MCP response reads, terminates the server’s process group on timeout, and ensures spawned child processes are cleaned up on failed initialization. Fixes issue #991. | https://github.com/nullclaw/nullclaw/pull/996 |

The change improves reliability of MCP‑based communication, eliminating hanging reads and leaked child processes.

### 4. Community Hot Topics  
Only one item received any recent attention:

* **PR #996** – the sole merged PR today. Although it currently has 0 reactions and no comment thread, it resolves a concrete bug (#991) that could cause process stalls, making it the focal point of today’s activity.  

*No issues or other PRs garnered comments or reactions.*

### 5. Bugs & Stability  
*No new bug reports or regressions were filed today.*  
The merged PR #996 itself is a stability fix for a timeout‑related hang in the MCP stdio layer, suggesting that the underlying issue was previously observed (issue #991) but not reported as a fresh bug.

### 6. Feature Requests & Roadmap Signals  
*No feature requests or roadmap‑related issues/PRs were updated today.*  
Given the recent focus on timeout handling, future work may continue to harden IPC/MCP interactions (e.g., configurable retry policies, richer error reporting), but no explicit signals are present in the data.

### 7. User Feedback Summary  
No user‑submitted feedback, use‑case descriptions, or satisfaction indicators appear in the latest activity. The absence of comments on PR #996 suggests either that the fix was uncontroversial or that the affected users have not yet engaged publicly.

### 8. Backlog Watch  
*There are no open issues or pull‑requests older than a day requiring maintainer attention.*  
Consequently, the current backlog is empty; the project’s immediate priorities appear to be addressed.

---  

*All links point to the corresponding items in the NullClaw GitHub repository (github.com/nullclaw/nullclaw).*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw Project Digest – 2026‑09‑13**  
*Generated from GitHub activity (issues/PRs updated in the last 24 h)*  

---  

### 1. Today's Overview  
IronClaw shows low‑intensity activity today: **no issues were touched** and only **two pull‑requests received updates** (one opened, one closed/merged). The repository currently has **zero open issues**, indicating a clean backlog at the moment. Overall project health appears stable, with maintenance work focused on refining existing functionality rather than addressing new bugs or feature requests.  

### 2. Releases  
*No new releases were published in the last 24 h.*  

### 3. Project Progress  
| PR | Status | Summary (as written by author) | Impact |
|----|--------|--------------------------------|--------|
| **#8098** (open) | *test(turns): pin state‑derived lineage drop* | Adds a missing inverse regression test for terminal‑rewrite lineage, proves that metadata initially carries depth, activation provenance, and descendant‑cap, and verifies that a subsequent `TurnRunState`‑derived snapshot deliberately omits those three lineage fields. | Strengthens test coverage for the lineage‑tracking subsystem; helps prevent regressions when turn‑state snapshots are mutated. |
| **#8076** (closed/merged) | *fix(assistant): distinguish disconnected shared channels* | Differentiates a paired user’s disconnected shared channel from an unpaired account, renders channel‑specific guidance for both user messages and bot commands, keeps rejection classification consistent across product, adapter, and OpenAI‑compatible surfaces, and updates Slack capability handling. | Improves user experience in multi‑party/shared‑channel scenarios and ensures consistent error handling across integrations. |

The merged PR #8076 directly advances stability for assistant‑side channel management, while the open PR #8098 is a test‑only change that will safeguard future modifications to turn‑state lineage logic.  

### 4. Community Hot Topics  
Both updated PRs are the only items with recent activity, so they naturally dominate the conversation:  

* **PR #8098** – [test(turns): pin state‑derived lineage drop](https://github.com/nearai/ironclaw/pull/8098) – 0 reactions, 0 comments.  
  *Underlying need:* Ensure that lineage metadata (depth, activation provenance, descendant cap) is correctly stripped when a `TurnRunState`‑derived snapshot is created, preventing accidental leakage of internal state.  

* **PR #8076** – [fix(assistant): distinguish disconnected shared channels](https://github.com/nearai/ironclaw/pull/8076) – 0 reactions, 0 comments.  
  *Underlying need:* Clarify the UI/UX when a shared channel exists but the paired user is currently disconnected, avoiding confusion between “no channel” and “channel present but unreachable.”  

No issues or PRs attracted comments or reactions today, indicating limited community discussion at this moment.  

### 5. Bugs & Stability  
*No bugs, crashes, or regressions were reported in the last 24 h.*  
The only fix merged (#8076) addresses a functional correctness issue (mis‑classification of disconnected shared channels) rather than a crash or security concern.  

### 6. Feature Requests & Roadmap Signals  
The recent work hints at two ongoing focus areas:  

1. **Lineage & provenance tracking** – The test in #8098 suggests the team is solidifying guarantees around how turn‑state snapshots handle lineage fields. Expect future releases to tighten contracts around state derivation, possibly exposing more explicit APIs for lineage inspection.  

2. **Assistant channel semantics** – PR #8076 improves handling of shared‑channel states. This signals continued investment in multi‑user collaboration features (Slack, other adapters, OpenAI‑compatible surfaces). Future work may expand to richer channel metadata (e.g., reconnection notifications, presence indicators).  

No explicit feature requests were filed today, so the above are inferred from current development direction.  

### 7. User Feedback Summary  
With **zero open issues** and **no recent user‑submitted feedback**, there is no observable pain point or satisfaction signal from the user base today. The lack of reported issues may reflect either a stable release or low recent usage; maintainers should monitor telemetry or community channels for hidden concerns.  

### 8. Backlog Watch  
*There are currently no open issues or long‑running PRs awaiting attention.*  
The only open PR (#8098) is recent (created 2026‑09‑12) and appears ready for review; it does not constitute a backlog item.  

---  

**Overall Assessment:** IronClaw is in a maintenance‑focused state with minimal churn. Recent work improves test coverage and clarifies shared‑channel behavior, both of which enhance reliability. Activity is low but healthy; maintainers should consider encouraging community engagement (e.g., discussion forums, issue triage) to surface any latent user needs.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI Project Digest – 2026‑09‑13**  

---

### 1. Today's Overview  
The repository shows steady but low‑intensity activity: 6 issues and 9 pull‑requests were updated in the last 24 hours, all of them tagged *[stale]* except for one closed PR. No new releases were cut today. The bulk of the work consists of bug‑fix PRs that address long‑standing race conditions and UI glitches, while a single feature PR proposes a useful enhancement for scheduled‑task workflows. Overall project health is stable, but many items remain awaiting review or verification.

### 2. Releases  
*No new releases were published today.*  

### 3. Project Progress (Merged/Closed PRs)  
| PR | Title | Area | Status | What advanced/fixed |
|----|-------|------|--------|----------------------|
| [#2657](https://github.com/netease-youdao/LobsterAI/pull/2657) | fix: resolve thumbnail rendering and native dependency build issues | renderer / build / docs / main / openclaw | **CLOSED** (merged) | Fixed thumbnail generation failures and resolved native‑dependency compilation errors that blocked Electron builds on certain platforms. |
| [#1049](https://github.com/netease-youdao/LobsterAI/pull/1049) | fix(auth): fetchWithAuth 并发 401 时双重消费 refreshToken，导致用户被强制登出 | auth | OPEN | Implements a shared refresh‑token guard (`sharedRefreshOnce`) so concurrent 401 responses no longer double‑consume the rolling refresh token. Directly addresses #1048. |
| [#1052](https://github.com/netease-youdao/LobsterAI/pull/1052) | fix(openclaw): 两处竞态条件导致 AI 会话永久无法启动 | openclaw | OPEN | Fixes two race conditions in `ensureGatewayClientReady` and `ensureActiveTurn` that could leave AI sessions in a permanent error state. Addresses #1051. |
| [#1054](https://github.com/netease-youdao/LobsterAI/pull/1054) | fix(modal): modal close button unclickable when overlapping title bar drag region | modal | OPEN | Adds `-webkit-app-region: no-drag` to fixed/modal backdrops, preventing the Electron draggable region from swallowing click events on modal close buttons. Fixes #1053. |
| [#1056](https://github.com/netease-youdao/LobsterAI/pull/1056) | fix(cowork): remove debug console.log calls from production code | cowork | OPEN | Strips three leftover debug logs from `cowork.ts`. |
| [#1057](https://github.com/netease-youdao/LobsterAI/pull/1057) | fix(memory): filter thinking blocks from LLM judge response | memory | OPEN | Prevents Anthropic “thinking” blocks from being fed into the memory‑judge pipeline when extended thinking is enabled. |
| [#1058](https://github.com/netease-youdao/LobsterAI/pull/1058) | fix(scheduled-task): prevent data loss when run history JSONL write fails | scheduled‑task | OPEN | Makes the migration idempotency guard resilient to `fs.appendFileSync` failures, avoiding silent data loss. |
| [#1059](https://github.com/netease-youdao/LobsterAI/pull/1059) | Fix/windows default browser detection | utils | OPEN | Adjusts Windows browser detection to respect the user‑set default (Chrome) instead of always launching Edge. |
| [#1065](https://github.com/netease-youdao/LobsterAI/pull/1065) | feat(scheduled-task): allow binding task to existing cowork session | scheduled‑task | OPEN | Adds a searchable session selector to the scheduled‑task create/edit form, letting users bind a task to an existing cowork session rather than forcing a new isolated session each run. |

*Note:* All open PRs above were updated today (timestamp 2026‑09‑12) and await review/merge.

### 4. Community Hot Topics  
| Item | Type | Comments | Reactions | Link | Why it’s hot |
|------|------|----------|-----------|------|--------------|
| #1048 / #1049 | Issue + PR | 1 comment each | 0 👍 | [#1048](https://github.com/netease-youdao/LobsterAI/issues/1048) • [#1049](https://github.com/netease-youdao/LobsterAI/pull/1049) | Authentication token‑refresh race causing forced logouts – a critical stability issue that directly impacts user experience. |
| #1051 / #1052 | Issue + PR | 1 comment each | 0 👍 | [#1051](https://github.com/netease-youdao/LobsterAI/issues/1051) • [#1052](https://github.com/netease-youdao/LobsterAI/pull/1052) | Two openclaw race conditions that lock AI sessions forever; high‑impact for users relying on AI‑driven workflows. |
| #1053 / #1054 | Issue + PR | 1 comment each | 0 👍 | [#1053](https://github.com/netease-youdao/LobsterAI/issues/1053) • [#1054](https://github.com/netease-youdao/LobsterAI/pull/1054) | UI regression where modal close button becomes unclickable when the modal touches the draggable title bar – a frequent annoyance reported by power users. |
| #1065 | PR (feature) | 0 comments | 0 👍 | [#1065](https://github.com/netease-youdao/LobsterAI/pull/1065) | Request to let scheduled tasks reuse existing cowork sessions – indicates demand for more flexible task‑execution models and reduced resource overhead. |

*Underlying needs:* Users are most concerned about **reliability** (auth/session crashes) and **usability** (modal interactions, port conflicts, task‑management ergonomics). The community is actively surfacing these pain points via stale issues, showing that the core functional areas need attention.

### 5. Bugs & Stability (Severity Ranking)  
| Severity | Issue / PR | Summary | Fix PR? |
|----------|------------|---------|---------|
| **Critical** | #1048 / #1049 | Concurrent 401 responses double‑consume the rolling refresh token → forced logout. | ✅ #1049 (shared refresh guard) |
| **High** | #1051 / #1052 | openclaw race conditions → AI session never starts, requiring app restart. | ✅ #1052 (fixes ensureGatewayClientReady & ensureActiveTurn) |
| **Medium** | #1053 / #1054 | Modal close button unclickable when overlapping title‑bar drag region. | ✅ #1054 (CSS `-webkit-app-region: no-drag`) |
| **Medium** | #1061 | Gateway port conflicts with Openclaw; no clear way to change ports. | *None yet* |
| **Low** | #1062 | Scheduled‑task title/description drifts after time edit. | *None yet* |
| **Low** | #1066 | Heartbeat/system dialogs pollute chat view, causing user confusion. | *None yet* |

### 6. Feature Requests & Roadmap Signals  
- **#1065 – Bind scheduled task to existing cowork session** – This feature aligns with a roadmap goal of making scheduled tasks more lightweight and integrable with existing cowork workflows. If approved, it likely lands in the next minor release (v2026.4.x) as it touches only the scheduled‑task UI and a small service layer.  
- **Implicit demand** from #1061 (port configuration) suggests a need for a centralized network‑settings UI, which could be earmarked for a future “configuration” sprint.  
- **Debug‑log cleanup** (#1056) and **thinking‑block filter** (#1057) reflect ongoing code‑quality maintenance; these are likely to be merged soon as they are low‑risk.

### 7. User Feedback Summary  
- **Authentication frustrations:** Users report being logged out unexpectedly during heavy IPC usage (app startup, quota checks). The root cause is a race in token refresh; the community has already supplied a fix awaiting merge.  
- **Session start‑up failures:** AI sessions sometimes hang indefinitely after a gateway initialization failure, forcing a full restart – a show‑stopper for automated workflows.  
- **UI glitches:** Modal dialogs become unusable when they expand near the top draggable bar; users must resort to keyboard shortcuts or restarting the app.  
- **Port collisions:** Developers running multiple local services hit gateway/Openclaw port conflicts, indicating a missing configuration knob.  
- **Scheduled‑task UX:** Editing a task’s time fails to update its displayed title, leading to confusion about when the task will actually run.  
- **Noise in conversation view:** System heartbeat messages appear as regular chat entries, cluttering the UI and making it harder to follow genuine agent interactions.  

Overall, the feedback points to **stability** (auth/session) and **polish** (UI, configuration) as the two primary areas where users feel the product falls short.

### 8. Backlog Watch (Items Needing Maintainer Attention)  
| Item | Type | Last Update | Why it needs attention |
|------|------|-------------|------------------------|
| #1061 – Gateway port modification request | Issue | 2026‑09‑12 | No PR yet; users are blocked by port collisions. A simple config‑expose or CLI flag would resolve a common developer friction point. |
| #1062 – Scheduled‑task title drift | Issue | 2026‑09‑12 | Affects usability of the scheduler; low‑effort UI fix (bind title to internal schedule model). |
| #1066 – Heartbeat dialog filtering | Issue | 2026-09-12 | Minor but impacts conversation clarity; can be addressed by adding a filter in the chat‑rendering layer. |
| Open PRs without review (e.g., #1056, #1057, #1058, #1059) | PR | 2026‑09‑12 | Though low‑risk, they linger; merging them would reduce noise and improve code health. |
| Stale issues with associated PRs (e.g., #1048/#1049, #1051/#1052, #1053/#1054) | Issue/PR pair | 2026‑09‑12 | While fixes exist, they remain open; maintainers should prioritize reviewing and merging these to close the loop on critical bugs. |

*Actionable insight:* The maintainer team can achieve quick wins by merging the ready PRs (#1049, #1052, #1054, #1056‑#1059) and then addressing the three open configuration/UX issues (#1061, #1062, #1066). This would clear most of the backlog and demonstrate responsiveness to the community’s most vocal pain points.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis Project Digest – 2026‑09‑13**  
*Generated from GitHub activity (issues/PRs updated in the last 24 h)*  

---

### 1. Today's Overview  
The repository showed modest but focused activity over the past day: one new bug report was filed, two pull requests remain open, and one PR was merged/closed. The bug concerns Telegram tool execution in shared channels, and a matching fix PR has already been opened, indicating a rapid triage‑to‑fix cycle. In parallel, a TLS‑related PR that restricts ALPN to HTTP/1.1 was merged, hardening the transport layer. No new releases were cut today. Overall, the project is maintaining steady progress on stability and extensibility while addressing a specific user‑facing issue.

### 2. Releases  
*No new releases were published in the last 24 h.*  

### 3. Project Progress  
| PR | Status | Summary | Impact |
|----|--------|---------|--------|
| **#1261** | **Closed / Merged** | `fix(tls): restrict ALPN to HTTP/1.1` – advertises only HTTP/1.1 over TLS until WebSocket upgrades (RFC 8441) are supported; updates tests and contributor guidance. | Improves TLS security posture and prevents premature WebSocket upgrade attempts. |
| #1265 | Open | `fix(telegram): expose shared-chat tool policy controls` – wires `untrusted_audience` and `untrusted_tools` through Telegram config, runtime, storage, and redacted API responses; resolves #1264. | Directly addresses the reported Telegram tool‑failure bug; awaiting review/merge. |
| #1143 | Open | `Add Requesty as an OpenAI‑compatible provider` – mirrors the existing `openrouter` wiring, adding a new LLM router endpoint. | Expands provider ecosystem; still pending review. |

### 4. Community Hot Topics  
All items currently have **0 comments and 0 reactions**, reflecting low immediate discussion volume. The most linked items are:

- **Issue #1264** – *Tools stop working in shared Telegram channels* ([link](https://github.com/moltis-org/moltis/issues/1264))  
- **PR #1265** – *fix(telegram): expose shared‑chat tool policy controls* ([link](https://github.com/moltis-org/moltis/pull/1265)) – directly tied to the issue above.  

The lack of comments suggests the reporter and contributor have a clear understanding of the problem and solution, but broader community validation (e.g., testing, usage feedback) has not yet surfaced.

### 5. Bugs & Stability  
| Bug ID | Severity | Description | Fix Status |
|--------|----------|-------------|------------|
| **#1264** (bug) | **Medium** – affects core functionality (tool execution) in a common deployment scenario (shared Telegram channels). | Tools cease to work because Telegram inherits a gateway deny‑all tool ceiling without exposing the overridable settings already present for Slack. | **Fix PR #1265** open (ready for review). |
| — | — | TLS ALPN over‑advertisement (previously reported in #245). | **Resolved** by merged PR #1261. |

No crashes or regressions were reported today beyond the Telegram tool issue.

### 6. Feature Requests & Roadmap Signals  
- **Open PR #1143** signals a clear roadmap intent to **support additional OpenAI‑compatible LLM providers** (Requesty). Given its alignment with the existing `openrouter` implementation, it is likely to be merged in the next release cycle pending reviewer bandwidth.  
- The Telegram tool‑policy work (#1265) hints at a broader effort to **unify privilege‑controls across chat platforms**; future work may expose similar settings for Discord, Mattermost, etc.  

### 7. User Feedback Summary  
- **Pain point**: Users running Moltis in shared Telegram spaces experience silent tool failures, breaking automation workflows. The request is for configurable tool‑policy controls mirroring Slack’s existing mechanism.  
- **Desired extensibility**: Community members (evidenced by the Requesty PR) want **more LLM provider options** to avoid vendor lock‑in and to leverage specialized routers.  
- Overall sentiment appears **neutral‑to‑positive**; the quick response to the bug report shows maintainer responsiveness, while the lack of discussion on the Provider PR suggests users are awaiting its integration before providing feedback.

### 8. Backlog Watch  
| Item | Age | Reason for Attention |
|------|-----|----------------------|
| **PR #1143** – Add Requesty provider | ~2 months (opened 2026‑07‑02) | No comments/reactions; may be awaiting reviewer bandwidth or additional tests. A nudge from maintainers could accelerate merging. |
| (No other stale items visible in the 24‑h window) | – | – |

*Actionable insight:* A brief maintainer comment on #1143 (e.g., requesting test coverage or confirming design) would likely move it toward closure and signal active stewardship of the provider‑expansion roadmap.

---

**Conclusion:** Today’s activity reflects a healthy balance—rapid bug triage (Telegram tools) and steady infrastructure improvements (TLS hardening). The primary backlog item is the pending provider addition (#1143); addressing it will keep the project’s feature roadmap moving forward. No releases were cut, but the merged TLS fix and imminent Telegram fix suggest a forthcoming patch/minor release is plausible.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

We are generating a project digest for CoPaw (agentscope-ai/QwenPaw) for 2026-09-13 based on the provided data.

Note: The data provided is for the last 24 hours (updated in last 24h) and includes issues and PRs.

Let's break down the data:

- Issues updated in last 24h: 17 (open/active: 14, closed: 3)
- PRs updated in last 24h: 6 (open: 6, merged/closed: 0)
- New releases: 0

We are to create a structured digest with the following sections:

1. Today's Overview
2. Releases
3. Project Progress
4. Community Hot Topics
5. Bugs & Stability
6. Feature Requests & Roadmap Signals
7. User Feedback Summary
8. Backlog Watch

We note that there are no new releases, so section 2 will be omitted (or state none).

We'll go through the data to fill each section.

First, let's list the issues and PRs from the data:

Issues (17 total, but we have a list of some of them; note: the data provided lists 17 issues but we see only a subset in the "Latest Issues" section? Actually, the "Latest Issues" section lists 17 items? Let's count:

The provided "Latest Issues" section has:
#7484, #7708, #7715, #7676, #7724, #7582, #7728, #7722, #7664, #7716, #7731, #7730, #7727, #7726, #7721, #7720, #7717 -> that's 17 issues.

Similarly, PRs: 
#7729, #7725, #7723, #7719, #7718, #7680 -> 6 PRs.

Now, let's analyze:

1. Today's Overview:
   - Activity: 17 issues updated (14 open, 3 closed) and 6 PRs updated (all open, none merged/closed) in the last 24h.
   - No new releases.
   - The project is active with ongoing bug fixes and feature discussions.

2. Releases: None.

3. Project Progress:
   - We note that there are no merged/closed PRs in the last 24h (all 6 PRs are open). However, we see that some issues were closed (3 closed issues). But note: the closed issues might not necessarily be due to PRs merged today? We have to check the closed issues from the list.

   Looking at the issues, we see:
   - #7676: CLOSED [Bug] `subagent_model` has no effect — spawned subagents always inherit the parent's `active_model`
   - #7582: CLOSED [enhancement] [Feat]: 当前的扩展插件商店，操作过于复杂，装多个插件需要超多次点击，缺少一键插件更新按钮 和 更新通知。
   - #7664: CLOSED [enhancement] [Feature]:  RemeLight额外自定义模型

   So three issues were closed. However, we don't have the PRs that closed them in the last 24h? The PRs listed are all open and updated today. It's possible that the closing of these issues happened via PRs that were merged earlier but the issue was updated today? Or maybe the issue was closed without a PR? But typically, issues are closed by PRs.

   Since the PRs updated in the last 24h are all open, it's likely that the closed issues were closed by PRs that were merged before the last 24h, but the issue was updated (e.g., commented) in the last 24h? However, the data says "updated in last 24h" for issues, so the closed issues were updated (e.g., closed) in the last 24h.

   But note: the PRs updated in the last 24h are 6 and all open. So no PR was merged in the last 24h? Then how were the issues closed? It's possible that the issue was closed by a maintainer without a PR (e.g., marking as duplicate, wontfix, etc.) or by a PR that was merged earlier but the issue update (closing) happened in the last 24h? However, the data for PRs says "updated in last 24h" and we have 6 open PRs. So no PR was merged in the last 24h.

   Therefore, the closed issues might have been closed by non-PR actions (like a maintainer closing the issue directly) or by a PR that was merged in the last 24h but not listed in the PRs updated? Wait, the PRs updated in the last 24h are 6 and all open. So if a PR was merged, it would be closed and not in the open list. But we have 0 merged/closed PRs. So no PR was merged in the last 24h.

   Hence, the closed issues must have been closed by other means (e.g., the maintainer closed the issue without a PR, or the issue was closed by a bot, etc.). However, we don't have that information.

   For the purpose of the digest, we note that 3 issues were closed (as per the issues updated: 3 closed) but no PRs were merged. So we cannot attribute the closing to a PR in the last 24h.

   However, we do see that there are PRs that are open and related to some of the closed issues? For example, #7680 is a PR that seems related to #7676 (subagent model). But #7676 is closed and #7680 is open? That doesn't match.

   Let's check:
   - #7676: closed issue about subagent_model not having effect.
   - #7680: open PR [first-time-contributor] fix(agents): diagnose dropped subagent model overrides

   It's possible that #7680 is a fix for #7676, but the issue was closed before the PR was submitted? Or the issue was closed as a duplicate? We don't have enough context.

   Given the data, we'll report:
   - No PRs were merged in the last 24h (all 6 PRs are open).
   - 3 issues were closed (but without associated PRs in the last 24h).

   However, note that the project progress section asks for "Merged/closed PRs today". Since there are no merged PRs, we can say none were merged. But we can note that 3 issues were closed (though not via PRs in the last 24h).

   Alternatively, we might look at the PRs that are open and see if they are fixing issues that were recently closed? But that's speculative.

   We'll stick to the data: no merged PRs, and 3 issues closed (without PRs in the last 24h).

   But note: the data says "PRs updated in last 24h: 6 (open: 6, merged/closed: 0)" meaning none of the PRs updated in the last 24h were merged or closed (they are all open). So no PR was merged in the last 24h.

   Therefore, for project progress, we can say:
   - No PRs were merged in the last 24h.
   - However, 3 issues were closed (as per the issue updates), indicating some resolution of reported problems.

   We can also note the open PRs that are currently under review.

4. Community Hot Topics:
   We need to find the most active Issues/PRs with most comments/reactions.

   Looking at the issues:
   - #7484: 3 comments
   - #7708: 3 comments
   - #7715: 3 comments
   - #7676: 3 comments (but closed)
   - #7724: 2 comments
   - #7582: 2 comments
   - #7728: 2 comments
   - #7722: 2 comments
   - #7664: 2 comments (closed)
   - #7716: 2 comments
   - The rest: 1 comment

   So the issues with 3 comments are the most active. Among them, we have:
     #7484 (enhancement: A2A support for qwenpaw 2.x)
     #7708 (bug: model setting lost)
     #7715 (bug: Daily Paper fails silently when arxiv.org unreachable)
     #7676 (bug: subagent_model has no effect) [closed]

   Since #7676 is closed, we might focus on the open ones.

   For PRs, all have 0 or undefined comments (the data shows "Comments: undefined" for PRs, meaning we don't have comment count? But in the data, for PRs it says "Comments: undefined", so we cannot use comment count for PRs). However, we can look at the PRs that are addressing hot topics.

   Alternatively, we can note that the issues with 3 comments are the hot topics.

   We'll list the top 3 open issues by comment count (all with 3 comments) and note that they are open.

   Underlying needs:
     #7484: Users want to know when A2A protocol will be supported (since MCP is already supported via Driver mechanism). They are asking for a timeline.
     #7708: Users are experiencing loss of configured large model settings, causing disruption. They want stability in model configuration.
     #7715: The Daily Paper feature fails without a clear error message when arxiv.org is unreachable, making debugging hard. Users want better error handling and messaging.

5. Bugs & Stability:
   We list the bugs reported today (open bugs) and rank by severity.

   From the issues, we can identify bugs by the label [bug] or [Bug].

   Open bugs (from the list, excluding closed ones):
     #7708: [bug] [Bug]: 设置好的大模型丢失 (model setting lost)
     #7715: [bug] [Bug]: Daily Paper fails silently when arxiv.org is unreachable
     #7724: [bug] [Bug]: 会话丢失 (session lost)
     #7728: [bug] [Bug]: `server/discover` HTTP 500 with non-standard jsonRpcError envelope
     #7722: [bug] [Bug]: Memory exhaustion compounds through three paths
     #7716: [bug] [Bug]: MCP can't connect and register since upgrade to 2.2.x
     #7727: [bug] [Bug]: Out-of-workspace write hard-block is blind to kimi-code's Write tool
     #7726: [bug] [Bug]: ACP `trusted: true` silently falls back to interactive prompts
     #7721: [bug] [Bug]: Workspace file browser freezes the entire server
     #7720: [bug] [Bug]: Creator hides prompt-sync blocker behind GATED and lacks manual image acceptance

   We also have #7676 which was closed (so not open).

   To rank by severity, we consider:
     - Impact: how many users affected, data loss, system crash, etc.
     - Examples:
        #7721: freezes the entire server -> high severity (denial of service)
        #7722: memory exhaustion leading to OOM -> high severity (service crash)
        #7708 and #7724: loss of model/session -> medium-high (user data loss, disruption)
        #7715: silent failure -> medium (debugging difficulty, but not crash)
        Others: medium to low.

   We'll rank:
     High: #7721, #7722
     Medium-High: #7708, #7724
     Medium: #7715, #7716, #7728, #7727, #7726, #7720

   Note: We have fix PRs for some of these:
        #7728: fixed by PR #7729
        #7721: fixed by PR #7725
        #7722: ? (no direct PR seen, but note #7722 is about memory exhaustion and we have PR #7719? Not directly. However, note that #7722 mentions three paths and we don't see a PR for it yet.)
        #7708: ? (no PR seen for model setting loss)
        #7724: ? (no PR seen for session loss)

   We note:
        PR #7729 fixes #7728
        PR #7725 fixes #7721

   For #7722, we don't see a direct PR, but note that the issue describes three paths and we have other PRs that might be related? Not obvious.

6. Feature Requests & Roadmap Signals:
   We look for issues/PRs labeled [enhancement] or [Feature].

   Open feature requests:
     #7484: [enhancement] [Feature]: 基于qwenpaw 2.x的A2A何时支持 (A2A support timeline)
     #7582: [CLOSED] [enhancement] [Feat]: ... (closed, so not open)
     #7664: [CLOSED] [enhancement] [Feature]: RemeLight额外自定义模型 (closed)
     #7717: [enhancement] [Feature]: DeepSeek models: add native capability metadata, ...
     #7731: [enhancement] [Feature]: Files panel: add a toggle to show dot-prefixed files and folders
     #7719: [OPEN] feat(memory): allow a separate model for ReMeLight memory writing (this is a PR, but it's implementing a feature request that was in issue #7664? However, #7664 is closed, so maybe the feature was already planned and this PR is implementing it)

   Note: #7664 is closed, but PR #7719 is open and implements the feature for ReMeLight.

   Also, note:
        #7719: PR for allowing separate model for ReMeLight memory writing (related to #7664 which is closed)

   Open feature requests (issues):
        #7484: A2A support
        #7717: DeepSeek model enhancements
        #7731: Show dot-files in file panel

   We can predict that:
        - The DeepSeek enhancement (#7717) might be considered for next version as it's a provider-level enhancement.
        - The file panel toggle (#7731) is a small UI improvement and likely to be implemented soon.
        - A2A support (#7484) is a larger feature and might be planned for a future release.

7. User Feedback Summary:
   We summarize real user pain points from the issues.

   From the bugs:
        - Model settings being lost (#7708, #7724) causing users to reconfigure frequently.
        - Session loss (#7724) leading to loss of conversation history.
        - Silent failures in features (Daily Paper #7715) making troubleshooting hard.
        - Server freezes (#7721) and memory leaks (#7722) causing service unavailability.
        - MCP connection issues after upgrade (#7716) breaking integrations.
        - Workspace file browser freezing the entire server (#7721) making the UI unusable.

   From feature requests:
        - Users want A2A protocol support (#7484) to extend agent capabilities.
        - Users want to configure a separate, lighter model for memory operations to save costs (#7664, and PR #7719 is implementing it).
        - Users want better visibility in the file panel (showing hidden files) (#7731).
        - Users want DeepSeek models to have better metadata and observability (#7717).

   Overall, users are expressing frustration with stability issues (especially related to upgrades and resource management) and desiring more features for extensibility and customization.

8. Backlog Watch:
   We look for long-unanswered important Issues or PRs needing maintainer attention.

   We don't have explicit timestamps for when issues were created beyond the last 24h update, but we can see the creation dates.

   Note: The data shows the "Created" date for each issue.

   We can look for issues that are old and still open without recent activity? But note: the data is for issues updated in the last 24h, so all these issues have been updated recently (within last 24h). Therefore, there are no long-unanswered issues in the sense of no recent update? However, we can look at the time since creation.

   For example:
        #7484: Created 2026-09-02, updated 2026-09-12 -> about 10 days old, but updated recently (so active).
        #7708: Created 2026-09-11, updated 2026-09-12 -> very recent.

   Since all issues in the list were updated in the last 24h, they are all active. However, we might consider issues that have been open for a long time without resolution? But we don't have data on issues not updated in the last 24h.

   The task is to generate a digest based on the provided data (which only includes issues and PRs updated in the last 24h). Therefore, we don't have information about older issues that haven't been updated.

   However, note that the issue #7484 was created on 

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw Project Digest – 2026‑09‑13**  

---

### 1. Today's Overview  
The repository shows strong, sustained activity: 24 issues were touched in the last 24 h (18 still open/active, 6 closed) and 50 PRs updated (41 open, 9 merged/closed). No new releases were published today. The workflow is dominated by bug‑fixing and stability work, with a noticeable surge of Windows‑CI/advisory‑nextest failures and several high‑risk runtime bugs appearing on the same day. Overall project health remains active, but the backlog of open, high‑priority issues is growing, indicating pressure on maintainers to triage and stabilize the core runtime and CI pipelines.

---

### 2. Releases  
*No new releases were published on 2026‑09‑13.*  

---

### 3. Project Progress (Merged/Closed PRs today)  
Nine PRs reached a merged/closed state. The most notable closed contributions are:

| PR | Summary (what advanced/fixed) | Link |
|----|------------------------------|------|
| #10091 | Hardened response‑cache storage permissions to owner‑only, preventing unintended broader local access. | zeroclaw-labs/zeroclaw PR #10091 |
| #10449 | Ensured Edge TTS artifacts are created with owner‑only permissions, closing a world‑readable audio file issue. | zeroclaw-labs/zeroclaw PR #10449 |
| #10726 | Pin the published **zerorelay** base images by digest, eliminating drift from mutable tags. | zeroclaw-labs/zeroclaw PR #10726 |
| #10676 | Fixed CI publish‑contract exception comparison to work on Windows paths, adding a regression test. | zeroclaw-labs/zeroclaw PR #10676 |
| #10091 (duplicate entry – already listed) | — | — |
| #10449 (duplicate) | — | — |
| #10726 (duplicate) | — | — |
| #10676 (duplicate) | — | — |
| *(remaining closed PRs had no comment data in the feed; they are minor chore/docs updates)* | — | — |

These closures primarily address **security hardening**, **CI reliability**, and **artifact permission** issues—areas that have been recurring hot spots in recent weeks.

---

### 4. Community Hot Topics (Most‑commented / reacted items)  
Because comment counts are only defined for a subset of items, the highest‑engagement entries we can quantify are:

| Item | Type | Comments | Summary & Underlying Need | Link |
|------|------|----------|---------------------------|------|
| #10734 | Issue | **6** | Windows stack‑overflow in `RpcDispatcher::process_line` (2 MB guard). Indicates a need for deeper stack‑usage analysis and possibly increasing guard size or refactoring recursion. | zeroclaw-labs/zeroclaw Issue #10734 |
| #10788 | Issue | 2 | Lost durable history on failed Code/ACP turns – users want guaranteed persistence of prompts and tool exchanges even when a provider errors. | zeroclaw-labs/zeroclaw Issue #10788 |
| #10400 | Issue (Feature) | 1 | Configurable Telegram unauthorized‑sender notice – operators desire localization and awareness of the actual authorization path. | zeroclaw-labs/zeroclaw Issue #10400 |
| #10797 | Issue | 1 | Markdown memory backend losing entries on concurrent `store()` calls – highlights a concurrency safety gap in a core persistence component. | zeroclaw-labs/zeroclaw Issue #10797 |
| #9724 | PR | (comment count undefined but long‑running) | Approval policy fix (`always_ask` surviving full autonomy) – a security‑critical behavior that has attracted sustained discussion. | zeroclaw-labs/zeroclaw PR #9724 |

**Analysis:** The top‑commented bug (#10734) points to a **runtime stability** concern on Windows that could affect CI reliability and user‑facing agent execution. The next hot items revolve **history durability**, **telegram UX**, and **memory‑backend concurrency**, suggesting users are hitting real‑world limits when running long‑running agents with heavy tool usage.

---

### 5. Bugs & Stability (Today’s Reports, Ranked by Severity)  

| Severity (label) | Issue | Summary | Fix PR? |
|------------------|-------|---------|---------|
| **S0 – data loss / security risk** (priority p1, risk high) | #10797 | Markdown memory backend silently loses stored entries on overlapping `store()` calls. | None yet (open). |
| **S1 – workflow blocked** (priority p2, risk high) | #10807 | MCP connection permanently poisoned after one failed recovery attempt. | None yet. |
| **S2 – degraded behavior** (priority p1) | #10734 | Windows stack overflow in `RpcDispatcher::process_line`. | None yet. |
| **S2 – degraded behavior** (priority p1) | #10788 | Failed Code/ACP turn discards accepted prompt & completed tool exchanges from durable history. | None yet. |
| **S2 – degraded behavior** (priority p2) | #10795 | `zeroclaw agent` REPL never enables terminal IUTF8 (multi‑byte backspace issue). | None yet. |
| **S2 – degraded behavior** (priority p2) | #10785 | Notification lag cancels every running turn (zerocode). | None yet. |
| **S2 – degraded behavior** (priority p2) | #10803 | Single‑candidate stream recovery ignores provider_retries; overload gets one immediate retry. | **PR #10803** (open) – addresses this directly. |
| **S3 – minor issue** (priority p3) | #10796 | ZeroCode chat input ignores Delete key. | None yet. |
| **S3 – minor issue** (priority p2) | #10805 | Control‑plane liveness tests race process teardown on Windows (Advisory Windows nextest). | None yet. |
| **S3 – minor issue** (priority p2) | #10794 | Advisory Windows nextest fails `publish_contract::published_crates_never_include_files_outside_their_own_directory`. | None yet. |
| **S3 – minor issue** (priority p3) | #10802 | `session/list-acp` reports different `message_count` than `turn_end`. | None yet. |
| **S3 – minor issue** (priority p3) | #10792 | Clarify Windows recovery after daemon reload refusal (doc task). | None yet. |
| **S3 – minor issue** (priority p3) | #10791 | Retire local RPC connections after terminal writer failure. | None yet. |
| **S3 – minor issue** (priority p3) | #10789 | Localize ZeroCode daemon startup diagnostics. | None yet. |
| **S3 – minor issue** (priority p2) | #10812 | Populate `DocumentMessage.jpegThumbnail` for WhatsApp PDF previews. | None yet. |

**Observation:** The most severe bugs (S0/S1) are still without a linked fix PR, indicating a gap that maintainers should prioritize. Several S2 bugs have associated PRs in progress (e.g., #10803 for stream‑recovery retry budget).

---

### 6. Feature Requests & Roadmap Signals  

| Feature Request | Issue/PR | Summary | Likelihood for Next Release |
|-----------------|----------|---------|-----------------------------|
| Configurable Telegram unauthorized‑sender notice (aware of auth path) | #10400 (issue) / #10401 (PR) | Allows operators to customize the notice and tie it to the actual authorization flow. | Medium – PR already open, needs maintainer review. |
| WhatsApp PDF preview support (jpegThumbnail) | #10812 (issue) | Add thumbnail generation for PDFs sent via WhatsApp. | Low – new feature, no implementation yet. |
| Durable scheduler outbox foundation (plugins) | #9139 (PR, open) | Adds a host‑owned durable plugin outbox in cron SQLite DB. | High – large XL PR, already in progress; likely to land soon if reviews finish. |
| Typed event routing foundation for plugins | #9138 (PR, open) | Introduces `PluginEventEnvelope` and clarifies ownership. | High – same rationale as #9139. |
| Multiple models per provider profile | #9809 (PR, open) | Enables a single provider credential to host several model aliases. | Medium – long‑running XL PR; may be merged after dependency work. |

Overall, the roadmap signals point to **plugin‑framework maturation** (durable outbox, typed events) and **provider flexibility** (multiple models) as near‑term priorities, alongside **UX‑focused channel features** (Telegram notice, WhatsApp PDF preview).

---

### 7. User Feedback Summary (Pain Points & Use‑Cases)  

- **Windows CI instability**: Stack overflow in RPC dispatcher and flaky liveness tests break the Advisory Windows nextest job, eroding confidence in cross‑platform reliability.  
- **History durability**: Users lose conversation context when a provider errors mid‑turn, undermining trust in long‑running agent sessions.  
- **Memory backend concurrency**: Overlapping `store()` calls in the Markdown memory backend cause silent data loss, a critical issue for agents that rely on persistent knowledge.  
- **Telegram UX**: Unauthorized senders receive a static, non‑localized notice; operators want the ability to tailor the message and reflect the actual authorization logic.  
- **Tool‑plugin reliability**: Notification lag causing wholesale turn cancellation and MCP connections being poisoned after a single failure indicate gaps in error‑handling and retry logic.  
- **Usability quirks**: Delete key ignored in ZeroCode chat, missing UTF‑8 handling in the REPL, and missing PDF previews on WhatsApp are friction points for end‑users.  

Collectively, these reflect a user base that is pushing ZeroClaw into **production‑grade, long‑running, multi‑modal agent workloads** and expects **robust fault tolerance, deterministic state persistence, and polished cross‑platform UX**.

---

### 8. Backlog Watch (Long‑Unanswered Important Items Needing Maintainer Attention)  

| Item | Age (as of 2026‑09‑13) | Why Important | Link |
|------|------------------------|---------------|------|
| #8733 | ~2 months (opened 2026‑07‑05) | Models.dev catalog drops vision capabilities; leads to incorrect `supports_vision()` fallback, affecting tooling that relies on vision. | zeroclaw-labs/zeroclaw Issue #8733 |
| #10400 | ~3 weeks (opened 2026‑08‑26) | Feature request for configurable Telegram notice – impacts operator experience and security posture. | zeroclaw-labs/zeroclaw Issue #10400 |
| #9724 | ~5 weeks (opened 2026‑08‑04) | Approval policy fix (`always_ask` surviving full autonomy) – security‑critical, still awaiting maintainer review. | zeroclaw-labs/zeroclaw PR #9724 |
| #9139 / #9138 | ~5 weeks (opened 2026‑07‑18) | XL plugin‑framework enhancements (durable outbox, typed events) – foundational for future plugin ecosystem. | zeroclaw-labs/zeroclaw PR #9139 ; zeroclaw-labs/zeroclaw PR #9138 |
| #9809 | ~5 weeks (opened 2026‑08‑07) | Multiple models per provider profile – would greatly increase provider flexibility. | zeroclaw-labs/zeroclaw PR #9809 |

These items have either aged without resolution or represent substantial architectural work that, if stalled, could delay upcoming feature releases and accumulate technical debt.

--- 

**Overall Assessment:** ZeroClaw is experiencing a healthy influx of contributions and bug reports, but the surge of high‑severity Windows/CI and memory‑safety bugs, coupled with several long‑running feature PRs, suggests the project is at a **junction point**: stabilization work must be prioritized alongside continued plugin‑framework evolution to maintain momentum and user confidence. Timely triage of the S0/S1 bugs and review of the XL plugin PRs will be key to the next release cycle.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*