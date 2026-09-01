# OpenClaw Ecosystem Digest 2026-09-02

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-09-01 22:16 UTC

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

## OpenClaw – Project Digest (2026‑09‑02)

### 1. Today’s Overview  
* The repository is extremely active: ≈ 500 issues and ≈ 500 pull‑requests were touched in the last 24 h, with **331 open issues** and **370 open PRs** still awaiting review/merge.  
* A fresh stable release (v2026.8.2) landed yesterday, and the community is already reporting a wave of **P1 regressions** linked to the upgrade.  
* Most discussion centers on **session‑state stability**, **resource‑leak protection**, and **new UI ergonomics** (the “Home” dock). The maintainer team is under pressure to triage high‑severity bugs while still reviewing a large backlog of feature requests.

---

### 2. Releases  
**v2026.8.2 – “openclaw 2026.8.2”** (released 2026‑08‑31)  

| Highlight | What changed | Impact / Migration notes |
|----------|--------------|--------------------------|
| **Home‑agent dock** – `Cmd/Ctrl+Shift+H` opens a persistent “Home” panel beside the work view. | Snapshots of the current work‑context can be previewed or attached to a message. | No breaking change; just an additional UI shortcut. |
| **Desktop companion improvements** – partially truncated in the changelog but include a more stable “right‑or‑bottom” docking model and cleanup of stale session snapshots. | Improves multitasking on macOS/Windows. | Existing dock customisations (if any) will be auto‑migrated; no manual steps required. |
| **Bug‑fixes** – series of core stability patches (see Issues #133984, #135347, #134453). | Addresses gateway start‑up failures and OOM loops. | Users upgrading from 2026.7.x should run `openclaw doctor --fix` **after** the upgrade; see the release notes for a full checklist. |
| **Deprecations** – the legacy `launchctl submit` keep‑alive validator has been removed; use the new `openclaw service` runner instead. | Affects macOS installations that manually added a custom keep‑alive script. | Delete any stale launch‑agents and reinstall the service via `openclaw service install`. |

*No other releases were published in the last 24 h.*

---

### 3. Project Progress (PRs merged/closed today)  
| PR | Title / Goal | Status today | Notable impact |
|----|--------------|--------------|----------------|
| **#135486** (scripts / agents) | Scope model‑catalog workers to only the plugins that actually contribute models. | Open, awaiting review (high merge risk). | Expected to cut catalog load time from ~45 s to < 10 s on large installations. |
| **#134737** (infra) | Expire stale presence entries after a host‑clock rollback. | Open, needs proof. | Improves multi‑device presence accuracy. |
| **#135097** (gateway / security) | Add configurable hostname block‑lists for SSRF protection. | Open, security‑review pending. | Directly addresses a long‑standing request for fine‑grained internet‑access control. |
| **#135016** (gateway / agents) | Fix browser messages being marked *Interrupted* during startup‑recovery. | Open, review pending. | Prevents loss of first‑message UI feedback after a crash‑restart. |
| **#135574** (app:web‑ui) | Speed up session‑list switching in the Control UI. | Open, performance‑review pending. | Reduces UI latency for users with > 1 000 sessions. |
| **#123535** (web‑ui) – *closed* | Avoid session‑catalog refresh storms on focus changes. | Closed (merged). | Stabilises UI when developers switch between tabs. |
| **#135200** (channel:googlechat) – *closed* | Preserve Markdown task‑list formatting across chunk boundaries. | Closed (merged). | Fixes broken check‑boxes in Google Chat posts. |
| **#135451** (doctor) – *closed* | Recover stale npm plugins during update‑repair. | Closed (merged). | Reduces manual clean‑up after failed upgrades. |
| **#134976** (line channel) – *closed* | Keep the prompt text when quick‑reply buttons are sent. | Closed (merged). | Improves UX on LINE bots. |

*~130 PRs were **merged/closed** in the last release cycle; today the maintainer queue is dominated by high‑risk, high‑impact changes that need additional security or compatibility review.*

---

### 4. Community Hot Topics (most‑commented items)  

| Item | Type / Severity | Comments | Link | Why it’s hot |
|------|----------------|----------|------|--------------|
| **#116201** – “Realtime voice work can retain unbounded provider and consult state” | **P1 bug** (session‑state) | 59 | <https://github.com/openclaw/openclaw/issues/116201> | Voice sessions are leaking provider frames and consult objects, causing memory bloat and eventual OOM. Frequent for users with long‑running “listen‑while‑talk” flows. |
| **#112423** – “Large SQLite transcript cleanup blocks the gateway event loop” | **P1 bug** (session‑state) | 16 | <https://github.com/openclaw/openclaw/issues/112423> | Transcript archiving now runs on the gateway thread, freezing all other traffic for several seconds. Affects large‑team deployments that archive nightly. |
| **#38327** – “Cannot convert undefined or null to object” after upgrading to 2026.3.2 (Gemini‑3.1‑pro‑preview) | **P1 regression** (auth/provider) | 15 | <https://github.com/openclaw/openclaw/issues/38327> | Breaks an entire class of Gemini users; the error is thrown before any model call. |
| **#96834** – “WhatsApp 1:1 inbound image wedges main lane ~3 min” | **P1 bug** (multimodal) | 14 | <https://github.com/openclaw/openclaw/issues/96834> | Image‑rich conversations stall; a major pain point for support‑bot operators. |
| **#85030** – “MCP tools not injected into `sessions_spawn` sub‑agents” | **P1 bug** (tool‑injection) | 13 | <https://github.com/openclaw/openclaw/issues/85030> | Sub‑agents lose access to custom tools, breaking complex orchestrations. |
| **#135486** (PR) – “scope model‑catalog workers to model‑contributing plugins” | **High‑impact PR** (performance) | – | <https://github.com/openclaw/openclaw/pull/135486> | 44 s catalog load on a 156‑plugin install; community is eager for the speed‑up. |
| **#135097** (PR) – “SSR​F hostname block‑list” | **Security PR** | – | <https://github.com/openclaw/openclaw/pull/135097> | Addresses compliance requests from enterprises; many comments from ops teams. |

**Underlying needs:**  
* **Predictable resource usage** (voice, SQLite, image handling).  
* **Robust upgrade path** – multiple issues flag migration‑step failures.  
* **Tool‑exposure consistency** across spawning APIs.  
* **Performance** of the model‑catalog for large plugin ecosystems.  

---

### 5. Bugs & Stability (ranked by severity)

| Severity | Issue | Summary | Current status / Fixes |
|----------|-------|---------|------------------------|
| **P0 – Crash / Unstartable** | **#135171** (closed) – Gateway crash‑loop due to Perplexity capability consent | Crash on startup after 2026.8.1/2 upgrade. | Fixed in a hot‑patch (not yet released). |
| **P1 – Session‑state / Message loss** | **#116201** – Unbounded voice provider state | Retains superseded frames → memory leak. | No fix yet; PR #135486 may indirectly help by isolating workers. |
| **P1** | **#112423** – SQLite transcript cleanup blocks event loop | Full materialisation on gateway thread → several‑second freeze. | No fix; tied to upcoming rewrite of `gateway transcript‑archiver`. |
| **P1** | **#96834** – WhatsApp image processing stalls ~3 min | Multimodal image injection blocks main lane. | No fix; discussion in #135486 about async image decoding. |
| **P1** | **#85030** – MCP tools missing in spawned sub‑agents | Sub‑agents cannot call custom tools. | No fix yet; related to PR #127284 (agent catalog tolerance). |
| **P1** | **#115424** – V8 heap OOM during long main‑session turn | Gateway aborts and enters crash‑loop. | No fix; watch for upcoming memory‑budget work (#135476). |
| **P1** | **#115546** – CLI‑budget transcript compaction fires far too early | Timeouts after 4.9 s on large sessions. | No fix; under investigation (likely timer logic). |
| **P2–P3** | **#135347** – Forced memory reindex inflates DB to 35 GB, prevents start‑up | Deleting DB destroys sessions. | No fix; pending a safe reindex strategy. |
| **P2** | **#134453** – Windows `doctor --fix` aborts (bare file not found) | Upgrade path broken on Windows. | No fix yet; Windows‑specific regressions are high priority. |
| **P2** | **#134608** – Auth migration archives JSON without credentials | Prevents repair scripts from restoring auth. | No fix; slated for next hot‑fix release. |

*Only a handful of the above have an associated PR ready for merge; most remain open and untriaged, reflecting a **critical triage backlog**.*

---

### 6. Feature Requests & Roadmap Signals  

| Request | Category | Why it matters | Likelihood for next release (v2026.9.x) |
|---------|----------|----------------|----------------------------------------|
| **Headless Chromium browser** – built‑in tool for reliable web access (#53763) | **Enhancement** | Removes external Chrome dependency; many agents need JS‑rendered pages. | Medium‑high – PRs in the pipeline (e.g., #135579 testing of worker bundles). |
| **Per‑model usage logging for cost tracking** (#13219) | **Observability** | Operators want aggregated cost reports across mixed‑model sessions. | Medium – tied to upcoming telemetry work (PR #135580). |
| **Per‑model generation timeout config** (#8724) | **Reliability** | Prevents infinite “thinking loops” on Gemini‑Flash. | High – being discussed in #135476 (performance). |
| **Suppress transient tool‑error warnings** (#39406) | **UX polish** | Avoids noisy “⚠️ Edit failed” messages when retry succeeds. | Medium – easy to gate via a config flag. |
| **Self‑hosted STT/TTS routing through gateway** (#45508) | **Privacy / Self‑host** | Enables fully offline voice pipelines. | Low‑medium – requires gateway‑side proxy changes. |
| **Config option to silence “No reply was generated” fallback** (#116348) | **UX** | Reduces spam in mention‑gated groups. | Medium – simple UI flag change. |
| **Emit task‑flow lifecycle hook events for plugins** (#87362) | **Extensibility** | Provides observability for plugin developers. | Low‑medium – needs SDK exposure; low PR activity. |
| **Allow “Chat‑first” Android surface** (#46058) | **Platform expansion** | Community building a mobile client. | Low – external fork, not a core priority. |

*The most concrete signals for the upcoming 2026.9.x release are the **headless browser**, **generation timeout**, and **usage‑logging** features—all have open design discussions and early prototypes.*

---

### 7. User Feedback Summary  

| Pain point | Frequency / Example | Net sentiment |
|------------|----------------------|---------------|
| **Upgrade‑migration pain** – multiple config‑key migrations failing, doctor‑fix aborts, Windows installer breakage. | Reported in #133984, #134453, #134608, #124343. | **Negative** – users are hesitant to upgrade. |
| **Session‑state instability** – message loss, long stalls, OOM, SQLite lock contention. | Issues #116201, #112423, #117262, #125344. | **Critical** – directly impacts production bots. |
| **Tool‑injection inconsistency** – MCP, `sessions_spawn`, or alias providers lose tools. | Issues #85030, #134307, #115546. | **Negative** – reduces confidence in custom tooling. |
| **Performance regressions** – catalog load times, UI latency in large session lists. | PR #135486 (catalog load), #135574 (UI speed). | **Mixed** – users appreciate the efforts, but delays remain. |
| **Positive reception** – the new “Home” dock, UI improvements, and quick‑fixes like #135451 (plugin‑repair) are getting 👍 reactions. | Mostly in comments on release notes. | **Positive** – shows that incremental ergonomics are valued. |

Overall, the community is **highly engaged** but is **frustrated by regressions** that accompany each major version bump. Rapid, safe upgrade tooling is the top user demand.

---

### 8. Backlog Watch (long‑standing items needing maintainer attention)

| Issue/PR | Age (approx.) | Why it matters | Needed action |
|----------|----------------|----------------|---------------|
| **#10687** – “Fully dynamic model discovery (OpenRouter + beyond)” | 7 months | Enables seamless access to rapidly‑changing model catalogs. | Prioritise design + prototype; PR none yet. |
| **#53548** – “Decouple mode=‘session’ from thread binding” | 6 months | Removes an unnecessary thread‑binding requirement for spawned sessions. | Review & merge; low risk. |
| **#50677** – “Skills silently truncated when token budget exceeded” | 6 months | Causes user‑created skills to disappear silently; impacts reliability of custom agents. | Add user‑visible warning; potential UI change. |
| **#53763** – “Built‑in headless browser” | 6 months | High‑impact for web‑scraping agents; still open. | Needs a concrete implementation PR. |
| **#133984** – “Gateway unstartable after 2026.7.1‑2 → 2026.8.1 upgrade” | 2 weeks | Shows the upgrade path is broken for many operators. | Hot‑fix release + migration guide. |
| **#135347** – “Forced memory reindex inflates DB to 35 GB” | 1 day | Blocks any new deployment; potentially catastrophic. | Immediate investigation, possible rollback. |
| **#124343** – “Yield‑owned settle‑wake parks completed sub‑agent forever” | 2 weeks | Leads to lost replies, no retry. | Needs a definitive fix (see related #115424). |
| **#135486** (PR) – “Scope model‑catalog workers” | Open, high‑impact | Still waiting for maintainer review; safety checks required. | Allocate reviewer, run extensive integration tests. |
| **#135571** (not listed but implied) – any PR with “needs‑maintainer‑review” tags > 5 days. | – | Accumulates reviewer debt. | Encourage rotate‑on‑call review rotation. |

---

**Bottom line:** OpenClaw remains a **vibrant, fast‑moving open‑source AI‑assistant platform**, but the **high volume of P1 regressions and upgrade‑path failures** is a clear health signal. Prioritising **stable upgrade tooling**, **resource‑leak mitigation**, and **core performance improvements** (catalog loading, session handling) will be essential to keep momentum and community trust.

---

## Cross-Ecosystem Comparison

**Cross‑Project Comparison – Open‑Source Personal‑AI / Agent Ecosystem (as of 2026‑09‑02)**  

---  

### 1. Ecosystem Overview  
The open‑source AI‑assistant landscape is now dominated by a handful of “reference runtimes” (OpenClaw, CoPaw, ZeroClaw) that provide a full‑stack agent‑framework, while a parallel wave of lightweight runtimes (NanoBot, PicoClaw, Moltis, ZeptoClaw) focuses on minimal Docker‑or‑binary deployments and fast iteration.  Across the board the most visible community pressures are **session‑state stability**, **secure tool‑execution**, and **scalable model‑catalog handling**.  Recent releases (OpenClaw v2026.8.2, CoPaw v2.2‑beta.6) demonstrate a move toward tighter UI ergonomics and richer memory plugins, but the rapid cadence also introduces regression spikes that the maintainer teams are struggling to triage.  

---  

### 2. Activity Comparison  

| Project | Open Issues* | Open PRs* | Release (last ≤ 30 d) | Health Score (1‑10) |
|---------|--------------|----------|------------------------|----------------------|
| **OpenClaw** | 331 | 370 | v2026.8.2 (1 d ago) | 7 |
| **NanoBot** | 4 | 10 | – | 8 |
| **Hermes Agent** | 44 | 15 | – | 5 |
| **PicoClaw** | 3 | 3 | – | 8 |
| **NanoClaw** | 4 | 12 | – | 7 |
| **LobsterAI** | 4 | 4 | – | 7 |
| **Moltis** | 2 | 1 (open) | – | 8 |
| **CoPaw** | 17 | 18 | v2.2‑beta.6 (1 d ago) | 6 |
| **ZeptoClaw** | 0 | 1 | – | 9 |
| **ZeroClaw** | 33 | 35 | – | 5 |

\*Counts are the number of *still‑open* items after the 24‑hour window; they give a quick view of backlog pressure.  

---  

### 3. OpenClaw’s Position  

| Dimension | Observation |
|-----------|-------------|
| **Community size** | By far the largest active community (≈ 500 issues and PRs touched daily, > 300 open issues). |
| **Technical breadth** | Full‑stack desktop + gateway, plug‑in model‑catalog workers, “Home” dock UI, and a native service‑runner (`openclaw service`). |
| **Advantages vs peers** | • Most mature plugin ecosystem (≈ 156 plugins) – enables rapid feature extensions.<br>• First‑class multi‑modal UI (web UI, desktop companion) that many smaller runtimes lack.<br>• Strong focus on resource‑leak protection and session‑state diagnostics (e.g., `openclaw doctor`). |
| **Trade‑offs** | • The very fast release cadence generates P1 regressions (voice‑state leaks, SQLite cleanup stalls).<br>• Upgrade path is fragile (several “doctor --fix” failures on Windows/macOS).<br>• High‑impact PRs (catalog‑worker scoping, SSRF block‑list) still sit in review, inflating technical debt. |

Overall, OpenClaw remains the **de‑facto reference platform** for large‑scale, multi‑agent deployments, but its health score is moderated by the size of its open‑issue backlog and the frequency of upgrade‑related breakages.  

---  

### 4. Shared Technical Focus Areas  

| Need | Projects Raising It | Typical Use‑Case |
|------|---------------------|------------------|
| **Session‑state / memory leak protection** | OpenClaw (#116201, #112423), Hermes (#90837, #99692), CoPaw (#7420, #7447), ZeroClaw (#10495, #10523) | Long‑running voice or multimodal bots that must keep OOM under control. |
| **Tool‑injection & guard consistency** | OpenClaw (#85030), Hermes (#135097), NanoClaw (#85030), CoPaw (#7472) | Preventing malicious or stray tool calls when agents spawn sub‑agents. |
| **Model‑catalog performance & scaling** | OpenClaw (#135486), CoPaw (#7450), ZeroClaw (#9809) | Large installations with > 100 plugins or multi‑model profiles. |
| **Secure sandbox / container hardening** | ZeroClaw (#6996, #9678), NanoClaw (#53448), Moltis (#134609), ZeptoClaw (#649) | Enterprises running agents on shared hosts or edge devices. |
| **Docker / lightweight deployment reliability** | Moltis (#1249), ZeptoClaw (#649), NanoBot (#5626), PicoClaw (#3269) | CI/CD pipelines, edge‑node deployments, “one‑click” installers. |
| **Unified UI component / design system** | OpenClaw (Home dock), CoPaw (scroll lock, dark‑mode), IronClaw (M3 design system), NanoBot (WebUI speed) | Consistent developer experience across web, desktop, and mobile clients. |
| **Observability & cost‑tracking** | OpenClaw (per‑model usage logging request), ZeroClaw (token accounting on trim), LobsterAI (credit‑drain complaints) | Operators need to bill or cap LLM usage in production. |

These converging requirements suggest that the next generation of runtimes will need **built‑in memory‑budgeting APIs, a uniform tool‑guard DSL, and a pluggable UI kit** that can be shared across projects.  

---  

### 5. Differentiation Analysis  

| Project | Core Feature Focus | Primary Target | Architectural Highlights |
|---------|-------------------|----------------|--------------------------|
| **OpenClaw** | Enterprise‑grade desktop & gateway, massive plugin catalog | Large teams, SaaS platforms | Go‑based core, separate `service` runner, UI dock, model‑catalog workers. |
| **NanoBot** | Tiny, per‑session sandbox, filesystem tools (copy/move) | Researchers & hobbyists needing a minimal agent | Python‑centric runtime, `runtime‑context` flag, fast CI feedback. |
| **Hermes Agent** | Multi‑channel (Discord, Matrix, Slack) with compliance hooks | Customer‑support bots, regulated enterprises | Node‑based gateway, channel adapters, explicit hostname block‑list PR. |
| **PicoClaw** | Edge‑device focus, Telegram/LINE integration, “Home” UI dock | Low‑resource devices, personal bots | Small C++/Rust core, minimal UI, lightweight docking model. |
| **NanoClaw** | Provider contract refactor, OpenRouter routing, tool‑policy schema | Companies building custom orchestration pipelines | Modular provider API (opencode, anthropic, openrouter), heavy type‑safe Rust bindings. |
| **LobsterAI** | Media generation & sharing (video, image), onboarding analytics | Content‑creation teams, marketing automation | Electron‑styled renderer, credit‑usage UI, MCP‑driven workflows. |
| **Moltis** | Docker‑first deployment, MCP doctor, streamable‑HTTP transport | DevOps / self‑hosted labs | Container‑native CLI, `doctor` diagnostics, minimal web UI. |
| **CoPaw** | ReMe memory engine, tool‑guard hardening, scroll‑lock UI | Research labs & advanced RAG/long‑term memory applications | Rust + Tauri desktop, ReMe 0.4.1, heavy unit‑test coverage. |
| **ZeptoClaw** | Ultra‑minimal Rust core, deterministic build image | Hobbyists who need a rock‑solid base library | Single‑binary, no optional features, strict dependency pinning. |
| **ZeroClaw** | Ambitious runtime sandbox, pluggable provider wire‑protocol, granular policy | Enterprises seeking “zero‑trust” agent platform | Rust core, WASM‑based plugins, sandbox layers (Bubblewrap/Landlock). |

---  

### 6. Community Momentum & Maturity  

| Tier | Projects | Comment |
|------|----------|---------|
| **Rapidly iterating (high PR churn, active RFCs)** | OpenClaw, CoPaw, ZeroClaw, Hermes Agent | Large open‑issue counts; many architectural RFCs in review; regression spikes indicate aggressive development. |
| **Stabilizing (few new issues, most PRs merging)** | NanoBot, PicoClaw, Moltis, ZeptoClaw, NanoClaw | PRs focus on bug‑fixes and small feature polish; release cadence is slower, signalling a consolidation phase. |
| **Maintenance‑only (minimal activity)** | LobsterAI, ZeptoClaw (post‑dependency bump) | Mostly UI/UX polishing; no major architectural changes, suitable for production use with low risk. |

---  

### 7. Trend Signals (value for AI‑agent developers)  

| Trend | Evidence Across Projects | Implication |
|-------|--------------------------|-------------|
| **Session‑state & memory budgeting** | Voice‑state leaks (OpenClaw #116201), ReMe memory errors (CoPaw #7469), token‑accounting requests (ZeroClaw #9713) | Future SDKs will expose explicit memory‑budget APIs and automatic “trim‑on‑overflow” hooks. |
| **Fine‑grained tool‑guard / security** | SSRF hostname block‑list (OpenClaw #135097), shell‑bypass guard (CoPaw #7472), policy hardening (ZeroClaw #9678) | Expect a common “tool‑guard DSL” that can be compiled into each runtime, reducing per‑project security reviews. |
| **Model‑catalog & multi‑model orchestration** | Scoped catalog workers (OpenClaw #135486), OpenRouter per‑model routing (NanoClaw #100711), provider‑catalog APIs (IronClaw #7998) | Platforms will ship **model‑selection services** (cost‑aware, capability‑aware) as first‑class primitives. |
| **Docker / edge‑deployment reliability** | Moltis bind‑mount fix, ZeptoClaw toolchain bump, PicoClaw MCP hang, NanoBot filesystem tools | Tooling around **container health‑checks and deterministic builds** is becoming a standard prerequisite. |
| **Unified UI component libraries** | IronClaw design‑system epic, CoPaw scroll‑lock, OpenClaw Home dock, NanoBot UI latency fixes | A shared React/Tauri component kit is emerging; projects that adopt it can ship UI updates faster. |
| **Observability & cost‑tracking** | Per‑model usage logging requests (OpenClaw), credit‑drain complaints (LobsterAI), token‑accounting on trim (ZeroClaw) | Expect built‑in dashboards and exportable telemetry (OpenTelemetry) to become mandatory for SaaS deployments. |
| **Pluggable WASM / sandbox plugins** | ZeroClaw’s WASM plugin plan, NanoClaw provider contracts, CoPaw ReMe runtime, IronClaw LLama‑cpp integration | A move toward **language‑agnostic plugin binaries** that run inside a hardened sandbox, lowering the barrier to custom tool creation. |

**Takeaway for developers** – The ecosystem is coalescing around three pillars: **stable session memory**, **secure, sandboxed tool execution**, and **modular model/provider orchestration**.  Projects that already provide a clean API for these (OpenClaw’s `openclaw doctor`, CoPaw’s ReMe memory, ZeroClaw’s wire‑protocol) are positioned to become the next generation of “plug‑and‑play” AI‑assistant runtimes, while smaller runtimes (NanoBot, Moltis, ZeptoClaw) will continue to serve niche use‑cases that need ultra‑light containers or rapid prototyping.  

---  

*Prepared for technical decision‑makers and AI‑agent developers seeking a concise, data‑backed view of the current open‑source personal‑AI landscape.*  

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

## NanoBot – Project Digest (2026‑09‑02)

### 1. Today’s Overview
- The repository saw a burst of activity: **19 pull‑request updates** (10 still open, 9 merged/closed) and **6 issue updates** (4 open, 2 closed) in the past 24 h.  
- No new releases were published, but several high‑impact PRs landed, especially around filesystem tooling and runtime‑context handling.  
- The core maintainer team is actively addressing long‑standing bugs (e.g., empty task‑group residues) while expanding the feature set (copy/move file tools, first‑run UI guides, per‑session sandboxing). Overall health is **stable but rapidly evolving**.

---

### 2. Releases
*No new release was cut in the last 24 h.*  
*(When a release appears, this section will list version number, notable changes, breaking‑change notices and migration guidance.)*

---

### 3. Project Progress – Merged / Closed PRs (today)

| PR | Title / Goal | Type | Key Impact |
|----|--------------|------|------------|
| **#5623** | *fix(agent): drop empty active‑task groups after tasks finish* | Bug‑fix / Performance | Resolves Issue #5428; prevents memory‑leak style buildup of empty task groups. |
| **#5430** | *fix(agent): release completed task groups* | Bug‑fix | Complements #5623; fully removes empty sets from `_active_tasks`. |
| **#5604** | *docs(edit_file): clarify mutual exclusivity of match selectors* | Documentation | Avoids user confusion when using `edit_file` tool. |
| **#5622** | *fix(dream): stop duplicating SOUL/USER/MEMORY into the Dream prompt* | Bug‑fix / Performance | Cuts prompt size roughly in half for every dream‑generation request. |
| **#5621** | *fix(tui): preserve input typed after submit* | Bug‑fix / UX | Restores typed text that was lost during rapid submissions. |
| **#5603** | *Detect a turn that claims an action it never performed* | Bug‑fix / Validation | Adds safety net against “phantom” tool calls (related to #1697). |
| **#5617** | *fix(websocket): stop treating SO_ACCEPTCONN as portable* | Bug‑fix / Portability | Makes WebSocket health‑checks work on macOS/BSD. |
| **#5615** | *feat(agent): support ephemeral runtime context* | Feature (closed) | Introduces `ephemeral` lifecycle for runtime‑context blocks (later superseded by #5619). |
| **#5619** | *feat(runtime‑context): allow blocks to opt‑out of history persistence* | Feature (closed) | Implements the `ephemeral` flag officially; closes Issue #5586. |

*All listed PRs were merged or closed on 2026‑09‑01 (the latest day counted in the 24‑h window).*

---

### 4. Community Hot Topics  

| Item | Comments / 👍 | Link | Why it’s hot |
|------|---------------|------|--------------|
| **Issue #2061** – *Bug: Unable to copy file inside workspace* | 3 comments, 0 👍 | <https://github.com/HKUDS/nanobot/issues/2061> | Users report that the agent keeps calling `list_dir`/`read_file` but never executes a copy/write. The problem is directly addressed by the newly merged **#5626** (copy/move file tools). |
| **Issue #5251** – *Enhancement: Add MCP Apps host support to the WebUI* | 3 comments, 0 👍 | <https://github.com/HKUDS/nanobot/issues/5251> | Extends Nanobot’s MCP integration beyond text/image artifacts to full‑stack app hosting; aligns with the project’s “model‑context protocol” roadmap. |
| **PR #5626** – *feat(tools): add copy_file and move_file filesystem tools* | No comment count shown yet (open) | <https://github.com/HKUDS/nanobot/pull/5626> | Provides the missing primitive that many users (including the reporter of #2061) have been asking for. |
| **Issue #5586** – *enhancement: let a runtime‑context block opt‑out of history persistence* | 1 comment | <https://github.com/HKUDS/nanobot/issues/5586> | Directly resolved by PRs #5615 & #5619, showing a fast feedback‑to‑code loop. |
| **PR #5283** – *feat(workspace): per‑session sandbox isolation for non‑WebUI channels* | Open, low activity | <https://github.com/HKUDS/nanobot/pull/5283> | Signals a growing demand for stronger isolation when agents run in external channels (e.g., Feishu, Telegram). |

**Underlying needs:**  
- **Robust filesystem manipulation** – The community repeatedly asks for richer file‑tool primitives (copy, move, delete) to make agents more autonomous.  
- **Fine‑grained context control** – The `ephemeral` flag and sandboxing PRs reflect a desire to keep temporary reasoning state out of persistent logs, improving privacy and reducing storage bloat.  
- **Extensible MCP hosting** – Integration of MCP Apps signals an ambition to let Nanobot act as a lightweight platform for custom AI‑driven micro‑services.

---

### 5. Bugs & Stability (ranked by severity)

| Severity | Issue/PR | Summary | Current Status |
|----------|----------|---------|----------------|
| **Critical** | **#2061** (open) – copy operation never completes. | Agent loops on read/list without performing a write. | **Fix in PR #5626** (adds native `copy_file` & `move_file`). Pending merge. |
| **High** | **#5428** (closed) – AgentLoop retains empty active‑task groups. | Could cause memory growth in long‑running gateways. | Fixed by PRs #5623 & #5430 (merged). |
| **Medium** | **#5603** – “phantom” action detection. | Prevents the model from claiming an action it never performed. | Fixed in PR #5603 (closed). |
| **Medium** | **#5617** – WebSocket health‑check portability. | Crashes on macOS/BSD due to `SO_ACCEPTCONN`. | Fixed in PR #5617 (closed). |
| **Low** | **#5604** – Documentation mismatch for `edit_file`. | Users may misuse mutually exclusive selectors. | Updated docs via PR #5604 (closed). |

*All high‑severity bugs reported in the last 24 h already have a merged fix. The only open blocker is #2061, which will likely be resolved once #5626 lands.*

---

### 6. Feature Requests & Roadmap Signals

| Request | Rationale | Likelihood of inclusion in next release (v X.Y) |
|----------|-----------|-----------------------------------------------|
| **MCP Apps host support** (Issue #5251) | Enables agents to launch full UI‑backed apps via the Model‑Context Protocol. | **High** – Already in the backlog; the PR ecosystem around MCP is active. |
| **Per‑session sandbox for non‑WebUI channels** (PR #5283) | Improves security and reproducibility across external chat platforms. | **Medium‑High** – A core security improvement; may be merged before the next minor release. |
| **File‑system copy/move tools** (PR #5626) | Directly solves a user‑reported blocker (Issue #2061). | **High** – Expected to be merged imminently; will be part of the next release. |
| **HTML/.txt/.md preview in WebUI** (Issue #5493) | Enhances user experience when reviewing generated documents. | **Medium** – UI‑centric; could be slated for a later feature sprint. |
| **Configurable cron result delivery & batch archive** (PR #5620) | Addresses noise in personal chats and gives operators better job management. | **Medium** – Already opened as a PR; if merged will likely appear in the next feature release. |

---

### 7. User Feedback Summary

- **File manipulation frustration:** Users (e.g., the reporter of #2061) cannot reliably copy files, forcing them to implement inefficient read‑write loops. The community is eagerly awaiting native `copy_file` / `move_file` tools.  
- **Context persistence concerns:** Requests for “ephemeral” runtime blocks (#5586) indicate users want temporary reasoning steps (e.g., one‑off calculations) to stay out of the durable chat history, improving privacy and reducing token cost. The rapid closure of this issue shows responsiveness.  
- **UI onboarding pain:** Issue #5625 (first‑run AI setup) and PR #5625 aim to replace a confusing error state with a guided flow, suggesting onboarding remains a friction point for new adopters.  
- **Platform integration bugs:** The Zalo refactor (#2078) and WebSocket portability fix (#5617) highlight ongoing challenges when deploying Nanobot across diverse messaging back‑ends.  
- **Overall satisfaction:** The fast turnaround on high‑severity bugs and the steady stream of feature PRs indicate a committed maintainer community; however, the lack of a formal release in over six months may leave some users uncertain about the latest stable state.

---

### 8. Backlog Watch – Items Needing Maintainer Attention

| Item | Reason it Needs Prompt Action |
|------|------------------------------|
| **#2061** – Copy‑file bug (open) | Still unresolved; a core workflow blocker for many users. |
| **#5251** – MCP Apps host support (open) | High‑impact enhancement; no PR yet, could stall the MCP roadmap. |
| **#5493** – Document preview (open) | Low activity now, but represents a visible UI improvement that could boost user adoption. |
| **#5283** – Per‑session sandbox (open) | Security‑critical; pending review may delay broader channel rollout. |
| **#5626** – copy/move file tools (open) | Likely to fix #2061; needs final review and CI passes before merge. |
| **#5620** – Configurable cron delivery (open) | Addresses operational noise; pending review could delay the next major feature freeze. |

*Maintainers are encouraged to prioritize the open copy‑file bug and MCP Apps support, as they touch the largest user segments and align with the project’s roadmap toward richer toolsets and extensibility.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent – Project Digest (2026‑09‑02)**  

---

### 1. Today’s Overview  
- The repository is buzzing: 50 issues and 50 pull‑requests were touched in the last 24 h, with **44 open/active issues** still needing attention.  
- No new release was cut, but a steady stream of bug‑fix PRs landed (or are in review) and several high‑visibility feature discussions are gaining traction.  
- Core stability concerns dominate the conversation – especially the **state‑db corruption** seen on gateway‑only deployments and a cascade of session‑state crashes on the desktop client.  

---

### 2. Releases  
*No new version was published in the past day.*  

---

### 3. Project Progress (PRs merged / closed today)  
| PR | Type / Component | Main Change | Status |
|----|------------------|-------------|--------|
| **#100721** | bug / gateway / discord / billing | Restores provider‑account‑limit info in `/status` (regression from recent gateway refactor). | **Open** (awaiting review) |
| **#100718** | bug / cron / skills | De‑duplicates byte‑identical `skill_view` candidates instead of erroring. | **Open** |
| **#100719** | bug / cron / skills (duplicate) | Same de‑dup logic applied to tool‑side, fixes Kanban worker spawn crashes. | **Open** |
| **#100713** | bug / agent / anthropic | Centralises `reasoning_config` resolution at agent init (eliminates per‑call overrides). | **Open** |
| **#100712 / #100724** | bug / kanban / notification | Coalesces “timed_out → gave_up” alerts to reduce noise in TUI/desktop/gateway. | **Closed** (#100712) / **Open** (#100724) |
| **#100714** | chore / deps | Bumps Tornado from 6.5.7 → 6.5.8. | **Open** |
| **#99828** | feature / skills | Adds a “busy‑terminal” screensaver skill (fun, non‑essential). | **Open** |
| **#98848** | feature / discord | Extends Discord tool to support forums, thread posts and an OpenCode permission bridge. | **Open** (duplicate flag) |
| **#97383** | security / redaction | Introduces exact‑value and key‑form redaction from a user‑supplied pattern file. | **Closed** |
| **#75776** | bug / gateway / matrix | Enables progressive response edits (removes `buffer_only=True`). | **Open** |
| **#55104** | feature / cli / models | Shows provider `display_name` in model picker & status line. | **Open** |
| **#100711** | feature / agent / openrouter | Adds per‑model routing, service‑tier selection and sticky provider ordering for OpenRouter. | **Open** |
| **#100421** | bug / agent | Improves error preview for malformed LLM responses. | **Open** |
| **#100667** | feature / local models | Prototype for a managed `llama.cpp` runtime with one‑click desktop setup. | **Closed** (duplicate) |

*Take‑away:* Most PR activity is **bug‑fixes** aimed at session stability, skill handling, and gateway streaming. Feature work (Discord, OpenRouter, local models) is progressing but still in early review.

---

### 4. Community Hot Topics  

| # | Title / Focus | Comments | Labels (Priority) | Link |
|---|----------------|----------|-------------------|------|
| **66616** | *Skills‑index watchdog – index stale/degraded* | **137** | `type/bug`, `P3` | https://github.com/NousResearch/hermes-agent/issues/66616 |
| **88584** | *Automated Nous integration blocked (cron merge conflicts)* | **52** | `invalid`, `P3` | https://github.com/Notresearch/hermes-agent/issues/88584 |
| **90837** | *Recurring `state.db` corruption on gateway‑only writes* | **14** | `P1` | https://github.com/NousResearch/hermes-agent/issues/90837 |
| **84220** (closed) | *Desktop home → new chat binds wrong CWD* | **14** | `P1` | https://github.com/NousResearch/hermes-agent/issues/84220 |
| **12020** | *Suppress `hermes.tool.progress` events* | **7** | `P3` | https://github.com/NousResearch/hermes-agent/issues/12020 |

**Analysis**  
- **Skills index freshness** is the biggest discussion driver. The community relies on the auto‑generated `/docs/api/skills-index.json` for UI tooling, and the “degraded” status is causing downstream failures.  
- The **state‑db corruption** thread reflects a critical production‑grade pain point; it has already triggered a P1 escalation and multiple forensics attempts.  
- The **integration‑blocking cron merge** shows that CI/CD automation is fragile; maintainers may need to revisit the merge‑conflict handling strategy.  

---

### 5. Bugs & Stability  

| Severity | Issue | Symptom | Current Fix (if any) |
|----------|-------|---------|-----------------------|
| **P1** | #90837 – `state.db` corruption (gateway‑only) | Repeated DB corruption after hourly writes, 11 incidents in two weeks. | No fix yet; investigation ongoing. |
| **P1** | #100639 – Session‑scoped RPC “not in memory” after restart | All approval prompts blocked; RPCs rejected continuously. | No PR yet. |
| **P1** | #99692 – Compression never completes on large sessions (10 min stall, lock leak) | Session hangs on every message when very large history. | No fix yet. |
| **P1** | #98552 – Telegram streaming finalizes prematurely, truncates messages | 624‑char messages cut, streaming cursor left on screen. | No fix yet. |
| **P1** | #84220 (closed) – Desktop Home binds wrong project folder | Workspace mismatched after leaving a named project. | Fixed in v0.20.6. |
| **P2** | #100339 – Anthropic OAuth token rotation leaves stale credentials | New profile creation fails after first rotation. | No PR yet. |
| **P2** | #73032 – Discord auto‑thread creates duplicate threads & replies | Two parallel threads, duplicate agent messages. | No fix yet. |
| **P2** | #96925 – Copilot duplicate tool calls post‑v0.20.6 | Repeated tool‑call IDs, noisy logs. | No fix yet. |
| **P3** | #100705 (closed) – `hermes.tool.progress` SSE frames break OpenAI‑compatible clients | Clients reject stream due to unexpected schema. | Closed (issue resolved elsewhere). |
| **P3** | #100715 – Kanban worker spawn “Unknown skill(s)” for builtin skills | Workers abort on valid builtin skill names. | PR #100718 / #100719 aim to dedupe skill view candidates – likely to resolve. |

*Overall*: The most critical stability threats are **state‑db corruption** and **session‑state crashes**. Several high‑priority bugs still lack an associated PR, indicating a risk of regression if not addressed promptly.

---

### 6. Feature Requests & Roadmap Signals  

| Feature | Rationale / Use‑Case | Priority | Likely Next Release? |
|---------|----------------------|----------|-----------------------|
| **#12020** – Suppress `hermes.tool.progress` events | Prevent front‑end parsing failures in OpenAI‑compatible UIs. | P3 | High – already tied to a known breaking UI issue. |
| **#53347** – Context‑length < 64 K with warning | Enable lightweight deployments (e.g., Ollama on low‑RAM laptops). | P2 | Medium – API change needed; could be slated for next minor bump. |
| **#88881** – Configurable model display labels | Disambiguate aliased models in desktop composer. | P3 | Low‑mid; UI‑only, low risk. |
| **#47063** – Kanban WebUI DAG mode & pipeline status | Visual cue for workflow graph mode & reviewer gates. | P3 | Medium – aligns with roadmap for richer Kanban UI. |
| **#43418** – YAML workflow execution | Allow users to author structured, repeatable workflows. | P3 | Medium‑high – expands skill system; may be early next major release. |
| **#77349** – Multi‑Agent visual orchestration (graph of tasks) | Complement existing cron/blueprint system with DAG orchestration. | P3 | Low – currently a duplicate request, needs broader design. |
| **#99828** – “busy‑terminal” screensaver skill | Fun, non‑essential, but showcases skill extensibility. | P3 | Low – novelty; unlikely to be priority. |
| **#100711** – Per‑model OpenRouter routing & tiering | Gives users fine‑grained provider control, reduces cost. | P3 | High – already in PR, may land soon. |

**Signals:** The community is pushing for **better model handling** (context length, display labels) and **more expressive workflow orchestration** (Kanban DAG mode, YAML pipelines). The OpenRouter routing PR suggests a near‑term push for provider‑level configurability.

---

### 7. User Feedback Summary  

| Pain Point | Example | Frequency |
|------------|----------|------------|
| **Stale Skills Index** | Users report UI failures when `/docs/api/skills-index.json` is older than 26 h. | Very high (137 comments). |
| **Session Corruption / Lost State** | Multiple incidents of `state.db` corruption and “not in memory” RPC errors, causing loss of approval prompts. | High (several P1 issues). |
| **Streaming Inconsistencies** | Telegram & Matrix gateways truncate or never stream replies, breaking real‑time chat expectations. | Moderate (P1 & P2 bugs). |
| **Model Context Limits** | Users on low‑resource hardware blocked by hard 64K token minimum. | Moderate (feature request). |
| **Discord Thread Duplication** | Duplicate threads create noisy conversations. | Low‑moderate (P2 bug). |
| **Configuration Leaks** | API keys spilled into `config.yaml` for custom endpoints, raising security concerns. | Low (single security bug). |

Overall sentiment: **core reliability** (DB integrity, session handling) dominates dissatisfaction, while **feature polish** (skill index freshness, model ergonomics) is a growing demand.

---

### 8. Backlog Watch (Long‑standing items needing attention)

| Issue / PR | Age (approx.) | Why it matters | Current state |
|------------|----------------|----------------|--------------|
| **#84220** (desktop home binding) – closed, but similar workspace‑CWD bugs persist (e.g., #57911). | Closed 2 weeks ago | Users lose context when switching projects. | Open follow‑ups still active. |
| **#63717** (Windows desktop update failures) – closed after extensive diagnostics, but update reliability remains a concern for Windows users. | Closed 7 weeks ago | Update failures block large user base. | No new PR; monitoring needed. |
| **#97994** (pre‑update `state.db` guard limited to root DB) – closed, yet multi‑profile DB safety still unaddressed. | Closed 1 week ago | Multi‑profile installs risk data loss on update. | No follow‑up PR. |
| **#97383** (redaction of exact values) – merged, but downstream tooling still needs integration tests. | Merged 5 days ago | Security compliance for user‑supplied patterns. | Awaiting downstream consumption. |
| **#99879** (routines run late after downtime) – closed, but missed‑run visibility remains a UX gap. | Closed 1 day ago | Operators need clear audit of missed schedules. | No dedicated UI fix yet. |
| **#100705** (SSE frame incompatibility) – closed, yet many front‑ends still hit the same issue. | Closed 1 day ago | Breaks third‑party OpenAI‑compatible SDKs. | Might need a config toggle. |
| **#100667** (local llama.cpp runtime) – closed as duplicate, but community interest in offline models is rising. | Closed 1 day ago | Enables privacy‑first deployments. | No active roadmap item yet. |

*Recommendation:* Prioritise the **state‑db guard** for all profile DBs and accelerate a **high‑availability guard** for session persistence. Simultaneously, allocate a short‑term sprint to finish the **skill‑index watchdog** automation and expose a health‑check endpoint.

---

**Bottom Line:** Hermes Agent shows *high community involvement* and a steady flow of PRs, but the **stability of session state and the freshness of the skills index** are the most urgent engineering risks. Addressing those, while delivering the high‑visibility feature requests (model label configuration, OpenRouter routing, and Kanban DAG visibility), will likely improve both user confidence and adoption in the coming weeks.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw – Project Digest (2026‑09‑02)**  

---

## 1. Today’s Overview  
- Activity is modest but focused: 3 open issues were updated and 4 pull‑requests (3 open, 1 merged) saw activity in the last 24 h.  
- No new release was published, indicating the maintainers are still in a stabilization / cleanup phase rather than a feature‑release sprint.  
- The most visible pain point is a **core‑loop hang** when the MCP server drops, while the community is also pushing usability improvements for Telegram/Feishu and a “lightweight worker” mode for edge devices.

---

## 2. Releases  
*No new tags or binaries were created in the last day.*  

*If a release appears later, reviewers should watch for:*  
- Inclusion of the **Telegram reply‑handling fixes** (PRs #3356‑#3358).  
- Any changes to the **MCP client** that address Issue #3269.  

---

## 3. Project Progress  

| PR | Status (today) | Summary | Impact |
|----|----------------|---------|--------|
| **#3299** *Add native Exa web search provider* | **Closed (merged)** on 2026‑09‑01 | Introduces a first‑class `tools.web` provider using Exa’s API, with date‑range filters and API‑key auth. | Expands out‑of‑the‑box search capabilities; developers can now call `web_search` without custom adapters. |
| **#3358** *fix(agent): thread responses to the originating question message* | Open | Ensures the bot replies with `ReplyToMessageID` when a user mentions the bot without using the reply UI, keeping thread continuity. | Improves conversation flow in busy groups; no breaking change. |
| **#3357** *fix(telegram): treat replies to the bot’s own messages as implicit mentions* | Open | Allows natural “reply‑to‑bot” actions to be interpreted as mentions even when `mention_only:true`. | Reduces friction for end‑users; aligns bot behavior with common chat etiquette. |
| **#3356** *fix(telegram): re‑attach quoted documents when replying to a file message* | Open | Restores document attachments (PDF, DOC, etc.) when users quote a file, fixing the `[file]` placeholder bug. | Prevents loss of context and data in document‑heavy chats. |

**Take‑away:** The only merged work today was a new web‑search provider; most of the day’s effort is spent on polishing Telegram integration and thread handling, which are high‑visibility bugs for end users.

---

## 4. Community Hot Topics  

| Item | Type | Comments / 👍 | Link | Why it matters |
|------|------|----------------|------|----------------|
| **#3269** *MCP server connection failure hangs the agent loop* | Issue (BUG) | 8 comments, 1 👍 | <https://github.com/sipeed/picoclaw/issues/3269> | The agent is the core of PicoClaw; a hang stops all chat interaction, directly affecting reliability on production deployments. |
| **#3358** *Thread‑response fix* | PR (fix) | No comments yet (opened today) | <https://github.com/sipeed/picoclaw/pull/3358> | Directly addresses the symptom reported in #3269 for group chats – keeping the bot’s replies attached to the trigger message. |
| **#3345** *Lightweight worker mode proposal* | Issue (proposal) | 1 comment | <https://github.com/sipeed/picoclaw/issues/3345> | Signals a strategic shift toward “edge‑only” deployments (≤ 20 MB RAM). Could shape the next major roadmap milestone. |
| **#3299** *Exa web‑search provider* | PR (feature) | Closed, merged | <https://github.com/sipeed/picoclaw/pull/3299> | First community‑approved native web‑search integration, showing demand for out‑of‑the‑box tool support. |

**Analysis** – The most active discussion centers on reliability (MCP hang) and conversational UX (Telegram reply handling). The proposal for a worker mode, although low‑traffic, reflects a growing user base on ultra‑low‑resource hardware, hinting at a future direction.

---

## 5. Bugs & Stability  

| Severity | Issue/PR | Description | Current Status | Fix Outlook |
|----------|----------|-------------|----------------|-------------|
| **Critical** | #3269 (BUG) | Agent loop freezes when the MCP server disconnects, halting the chat UI. | Open, 8 comments. | No dedicated fix yet; related PR #3358 may mitigate symptom but does not address the underlying loop dead‑lock. |
| **High** | #3355 (BUG) | `config.json` rejects Feishu channel due to unknown field `channel_list.feishu.app_id`. | Open, 0 comments. | No PR opened; likely a schema validation regression in the latest nightly. |
| **Medium** | #3356 (fix) | Quoted document messages lose attachment when replied to. | Open PR, awaiting review. | Expected to merge soon; resolves a clear UX regression. |
| **Medium** | #3357 (fix) | Replies to bot’s own messages ignored unless they contain an explicit @mention. | Open PR, awaiting review. | Same as above – fix pending. |
| **Low** | None reported today. | | | |

**Overall:** Stability concerns are concentrated on the MCP client and channel configuration validation. The Telegram fixes are high‑impact for day‑to‑day usage but are still pending review.

---

## 6. Feature Requests & Roadmap Signals  

| Request | Rationale | Likelihood for Next Release |
|---------|-----------|----------------------------|
| **Lightweight “worker” mode** (Issue #3345) | Users want PicoClaw to run on devices with as little as 10‑20 MB RAM (RISC‑V, old Android, low‑end SBCs). | **Medium–High** – The proposal aligns with the project’s edge‑compute positioning; early design work may start if maintainers prioritize it. |
| **Native Exa web‑search** (PR #3299) | Provides out‑of‑the‑box web search without extra adapters. | **Already merged** – already part of the codebase; next release will likely expose it as a default tool. |
| **Improved config validation** (derived from #3355) | Better error messages and tolerance for unknown fields to avoid silent failures. | **High** – Simple schema tweak can be back‑ported to nightly builds quickly. |
| **Thread‑aware response handling** (PR #3358) | Keeps bot answers attached to the originating message, essential for busy group chats. | **High** – Once merged, it will be bundled in the next patch. |

---

## 7. User Feedback Summary  

- **Reliability:** The most urgent complaint is the **MCP hang** (Issue #3269). Users experiencing this see the entire chat interface become unresponsive, which is a show‑stopper for production bots.  
- **Usability in Group Chats:** Multiple Telegram‑related PRs indicate that users expect natural “reply” interactions, not just @mentions. The current strict “mention‑only” mode leads to missed messages.  
- **Configuration Friction:** The Feishu config error (`unknown field`) shows that schema validation is too rigid; users need clearer guidance or permissive parsing.  
- **Edge Deployment Aspirations:** The worker‑mode proposal reflects a strong desire to run PicoClaw on devices with **tiny memory footprints**, a niche that the project uniquely targets.  

Overall sentiment is **constructive**: users are willing to contribute fixes (see the PRs) but are impatient with core stability bugs.

---

## 8. Backlog Watch  

| Item | Age / Staleness | Reason it Needs Attention |
|------|-----------------|---------------------------|
| **#3269** (BUG) | Open since 2026‑07‑20 → **≈ 1.5 months**, still stale with high activity. | Critical block for reliability; priority should be elevated. |
| **#3345** (proposal) | Open since 2026‑08‑25 → **≈ 1 month**, marked stale. | Aligns with strategic edge‑compute roadmap; a design brief or prototype would reduce staleness. |
| **#3355** (BUG) | Open since 2026‑09‑01 → **new**, but no discussion. | Simple validation bug; quick triage needed to avoid cascade of channel‑setup failures. |
| **PR #3356‑#3358** | Open since 2026‑09‑01 (2‑3 days). | Review backlog; merging these will resolve three medium‑severity Telegram bugs. |
| **#3299** (feature) | Closed (merged) but not yet released. | Ensure the release pipeline picks up the Exa provider; otherwise the effort stays invisible to end‑users. |

*Actionable recommendation:* Assign a reviewer to the Telegram PR batch today and prioritize a hot‑fix branch for the MCP hang issue. Consider a short “worker‑mode” design sprint in the next sprint planning session.

--- 

*Prepared by the AI‑Assistant Analyst (Open‑Source Project Monitoring)*. All links point to the official `sipeed/picoclaw` GitHub repository.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

## NanoClaw – Project Digest (2026‑09‑02)

### 1. Today's Overview
- The repository saw **moderate activity**: 2 open issues were updated and 14 pull requests (PRs) received activity, with 12 still open and **2 PRs merged/closed**.  
- No new releases were published, indicating the team is still in a **pre‑release polishing phase**.  
- Most of the work today centers on **refactoring provider contracts**, **hardening security / runtime stability**, and a handful of **feature‑focused additions** (e.g., new skills and scheduling policies).

---

### 2. Releases
*No new releases were cut in the last 24 h. The project remains on its previous tag.*

---

### 3. Project Progress (Merged / Closed PRs)

| PR # | Title / Type | Area(s) | Author | Merged / Closed (2026‑09‑01) | Key Impact |
|------|--------------|---------|--------|------------------------------|------------|
| **#3698** | *chore(container): bump Bun & Claude runtimes* | containers, repository‑maintenance, skills | omri‑maya | **Closed** (merged) | Updates the core runtime (Bun 1.4.0, Claude SDK 0.3.257) → newer language features, security patches, and CI consistency. |
| **#3695** | *feat(skills): Slack agents companion skills move in‑tree* | channels, setup‑installation, skills | gavrielc | **Closed** (merged) | Consolidates Slack companion skills under `main`, simplifying consumption and eliminating a stale branch requirement. |

*Both merges are infrastructure‑level improvements that lay groundwork for upcoming feature work.*

---

### 4. Community Hot Topics  

| Item | Type | Activity (comments / 👍) | Link | Why it’s hot |
|------|------|--------------------------|------|--------------|
| **#3700** – “Destination local‑names don’t repoint when target messaging‑group is recreated” | Issue (bug) | 0 / 0 | https://github.com/qwibitai/nanoclaw/issues/3700 | Real‑world install broke after fixing a Discord platform‑ID; the problem surfaces only in edge‑case re‑creation flows, indicating a gap in state‑reconciliation logic. |
| **#3699** – “`ncl destinations create/remove` don’t auto‑fill `--agent-group-id`” | Issue (UX) | 0 / 0 | https://github.com/qwibitai/nanoclaw/issues/3699 | Inconsistent CLI ergonomics across group‑scoped commands; users expect the same auto‑fill behavior already present in task commands. |
| **#3427** – “fix(agent‑runner): tell the agent `send_card` drops callback actions” | PR (bug‑fix) | – | https://github.com/qwibitai/nanoclaw/pull/3427 | Addresses silent loss of interactive buttons, a pain point for agents that rely on callback actions for workflow branching. |
| **#3646** – “fix(sweep): make idle timeout configurable” | PR (bug‑fix) | – | https://github.com/qwibitai/nanoclaw/pull/3646 | Prevents premature termination of long‑running local model inference, a stability concern for on‑prem deployments. |
| **#3697** – “feat: add Keenable MCP tool skill” | PR (feature) | – | https://github.com/qwibitai/nanoclaw/pull/3697 | Introduces a new remote search/fetch capability, showing demand for extensible “tool” skills. |

*Even though comment counts are low, the topics reflect concrete production‑level pain points (CLI consistency, reliability of messaging groups, and proper handling of UI elements).*

---

### 5. Bugs & Stability

| Severity | Issue / PR | Summary | Status / Fix |
|----------|------------|---------|--------------|
| **Critical** | **#3700** (open) | Destination references become stale after a messaging‑group is recreated, causing outbound sends to report success while the target is dead. | No fix yet; a PR is likely needed to add proper listener/resync logic. |
| **High** | **#3427** (open PR) | `send_card` reports success even when the bridge drops callback actions, leading to broken conversational flows. | PR #3427 is **open**; merging will restore accurate success reporting. |
| **High** | **#3646** (open PR) | Hard‑coded 30‑minute idle timeout kills slow local‑model runs; heartbeat only on provider events. | PR #3646 is **open**; pending merge will make the timeout configurable and apply to both kill paths. |
| **Medium** | **#3680** (open PR) | Mount‑security validation allowed an allow‑listed extra mount to bypass checks. | PR #3680 is **open**; merging would close a potential container escape vector. |
| **Medium** | **#3699** (open) | CLI command `ncl destinations create/remove` fails to auto‑fill `agent_group_id`, breaking workflow consistency. | No fix yet; likely a small CLI helper update. |
| **Low** | **#3696** (open PR) | Recurring task scheduler lacks per‑task missed‑run policy, causing ambiguous behavior after missed intervals. | PR #3696 is **open**; merging will add granular policy flags. |

*Overall, the most pressing stability gap is the dead‑target messaging‑group bug (#3700), which can lead to silent message loss in production.*

---

### 6. Feature Requests & Roadmap Signals

| Feature | Origin | Likelihood of Landing in Next Minor (≈ 4‑week) |
|---------|--------|-----------------------------------------------|
| **Keenable MCP tool skill** (remote web search/fetch) | PR #3697 (feature) | **High** – already open with full implementation; awaiting review. |
| **Core‑owned speed inference property** (group‑level inference speed hint) | PR #3592 | **Medium‑High** – provider‑centric change; likely to be merged after provider contract refactors. |
| **Per‑task missed‑run policy** | PR #3696 | **Medium** – scheduling enhancements often prioritized after core stability fixes. |
| **Provider contract refactors** (opencode, codex, runtime, host, setup) | PRs #3588, #3584, #3586, #3585, #3581 | **High** – these are grouped under a concerted “providers” refactor effort; they may be merged incrementally over the next few weeks. |
| **CLI auto‑fill for `destinations`** | Issue #3699 | **Low‑Medium** – UI polish; may be bundled with a broader CLI cleanup. |
| **Messaging‑group repointing logic** | Issue #3700 | **High** – production‑blocking; likely to be addressed urgently once a design is agreed upon. |

---

### 7. User Feedback Summary
- **Pain Points**:  
  1. **Stale destination handling** – users report messages disappearing after a group recreation, indicating missing state sync.  
  2. **CLI ergonomics** – inconsistent auto‑fill behavior causes extra typing and error proneness.  
  3. **Callback action visibility** – agents cannot rely on `send_card` success when UI buttons are silently stripped.  
- **Satisfaction**: The community appreciates the **rapid iteration on provider contracts** and the **addition of new skills** (e.g., Keenable MCP), signalling confidence in the extensibility model.  
- **Dissatisfaction**: Lack of clear migration guidance for runtime upgrades (Bun/Claude bump) and limited discussion around the newer provider contracts suggest a need for better communication.

---

### 8. Backlog Watch
| Item | Type | Open Since | Reason it Needs Attention |
|------|------|------------|---------------------------|
| **#3700** – Destination local‑name repointing | Issue (bug) | 2026‑09‑01 | Production‑critical; blocks reliable outbound messaging. |
| **#3699** – CLI auto‑fill for `destinations` | Issue (UX) | 2026‑09‑01 | Consistency across CLI commands is a long‑standing request. |
| **#3588 / #3584 / #3586 / #3585 / #3581** – Provider contract implementations | PRs (refactor) | Late Aug 2026 | Although open, they collectively constitute the next major architectural shift; delayed merges could stall downstream feature work. |
| **#3646** – Configurable idle timeout | PR (bug) | 2026‑08‑29 | Prevents false‑positive kills; essential for users running heavy local models. |
| **#3680** – Mount‑security bypass | PR (security) | 2026‑08‑30 | Potential container escape; should be merged promptly for security hygiene. |

*Maintainers should prioritize the two production‑impact bugs (#3700, #3646) and the security fix (#3680) while progressing the provider contract suite to enable the upcoming skill and inference‑speed features.*  

---  

**Bottom line:** NanoClaw is in an active development window focusing on core stability and a sweeping refactor of its provider system. The most urgent community concerns revolve around reliable messaging group handling and CLI consistency. If the team merges the pending bug‑fixes and continues the provider contract rollout, the project is on track for a solid minor release within the next month.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw – Project Digest (2026‑09‑02)**  

---  

### 1. Today’s Overview  
- The repository saw a **high level of activity** in the last 24 h: 15 issues (11 open) and 23 pull‑requests (15 still open) were touched, indicating both rapid development and significant bug‑triage effort.  
- Most of the day’s work revolves around **unifying the UI component library** (shared `SearchField`, `Input`, `SelectMenu`, `InlineNotice`) and polishing the **design‑system governance** that underpins the upcoming M3 reskin.  
- Stability concerns are prominent: a new **special‑character handling bug**, CI time‑out flakiness, and a **root‑less Docker sandbox permission issue** were reported, while several performance‑focused PRs (e.g., GitHub repo list compaction, Slack durable replies) were merged.  

---  

### 2. Releases  
*No new releases were published in the last 24 h.*  

---  

### 3. Project Progress (Merged / Closed PRs)  
| PR | Title / Scope | Size / Risk | What landed | Link |
|----|---------------|-------------|-------------|------|
| **#8013** | `ci: parallelize affected crate tests with nextest` | XL / medium | Test suite now runs four‑way in parallel, cutting CI runtime by ~30 % | https://github.com/nearai/ironclaw/pull/8013 |
| **#8014** | `fix(slack): preserve explicit mentions across callback dedup` | M / low | Slack‑bot now respects explicit `@user` mentions when duplicate callbacks arrive. | https://github.com/nearai/ironclaw/pull/8014 |
| **#7998** | `feat(llm): preserve NEAR AI model capabilities through discovery` | XL / low | Added `list_model_catalog()` API; model input/output modalities are now retained. | https://github.com/nearai/ironclaw/pull/7998 |
| **#7996** | `perf(github): compact repository list responses` | L / low | GitHub `list_repos` now returns a trimmed projection (≈ 10 KB vs 520 KB per 100 repos). | https://github.com/nearai/ironclaw/pull/7996 |
| **#7977** | `fix(loop): terminate on dominant repeated output, cap interactive wall clock` | XL / low | Agent loop now aborts after a configurable number of non‑progressing cycles, preventing runaway runs. | https://github.com/nearapi/ironclaw/pull/7977 |
| **#8028** | `refactor(agent-loop): align state and stage ownership` | XL / low | State‑machine split into `ModelStage`, `StopStage`, etc.; improves serialization safety. | https://github.com/nearai/ironclaw/pull/8028 |
| **#8010** | `feat(webui): session‑event transport unification & run‑completion notifications` | XL / medium | New typed WebSocket contract; UI now shows durable “run finished” notices. | https://github.com/nearai/ironclaw/pull/8010 |
| **#8006** | `feat(channels): add durable progressive replies and native Slack Agent UI` | XL / low | Introduced `ReplyDocument` and Slack‑specific presentation layer for multi‑turn replies. | https://github.com/nearai/ironclaw/pull/8006 |

*These merges push forward the **M3 design‑system rollout**, improve CI efficiency, and lay groundwork for richer multi‑modal LLM interactions.*  

---  

### 4. Community Hot Topics  
| Item | Comments / 👍 | Why it matters |
|------|----------------|----------------|
| **#7781** – *Epic: Design System Phases 2–3* (open) | 2 comments, 0 👍 | Central roadmap for the **M3 Expressive design language**; touches UI governance, theming, and reskin. All UI component migrations (SearchField, InlineNotice, etc.) cascade from this epic. |
| **#7997** – *feat(webui): show model capability icons across Inference* (open) | No public comments yet but a large PR (XL) | Directly improves discoverability of model capabilities for end‑users, aligning with the newly added `list_model_catalog` API. |
| **#8025** – *Bug: unexpected behavior with special characters in input* (open) | 1 comment, 0 👍 | Regression likely introduced by recent encoding changes; affects any tool that accepts free‑text, a high‑frequency user path. |
| **#8010** – *session‑event transport unification* (open) | No comments yet (still under review) | Provides a **single, typed WebSocket channel** for all UI‑side events, a prerequisite for future real‑time features (e.g., live tool streaming). |
| **#7831** – *ci(webui): publish Storybook to Chromatic as a non‑blocking lane* (open) | No comments | Enables continuous UI‑component visual testing; essential for maintaining the design system at scale. |

*The dominant signal is a coordinated push to **standardise UI components** and **expose richer model metadata**, while the special‑character bug shows the need for tighter regression testing around encoding.*  

---  

### 5. Bugs & Stability (ranked)  
| Severity | Issue / PR | Summary | Fix status |
|----------|------------|---------|-----------|
| **Critical** | **#8025** – *special characters in input* | Characters are stripped or cause crashes; breaking core chat/command flow. | No fix yet; likely to be addressed in an upcoming **input‑sanitisation** PR. |
| **High** | **#8016** – *CI lock‑free turn‑state root test intermittently times out* | Flaky test can stall CI pipeline, delaying merges. | No dedicated fix yet; may be resolved by the state‑ownership refactor in PR #8028. |
| **High** | **#8015** – *Rootless Docker sandbox workspace not writable* | UID/GID mismatch prevents user‑level workspaces from persisting; blocks QA on non‑root environments. | Open; hints that container‑runtime config needs a patch. |
| **Medium** | **#8012** – *47k‑tool catalog ingests but tools not searchable* | Large MCP catalog truncates search; impacts power‑users with extensive tool libraries. | No fix yet; PR #7996 (repo list compaction) shows attention to payload size, but search‑index logic still pending. |
| **Medium** | **#7892** – *deferred tool found 15×, never invoked* (closed) | Demonstrated runaway capability loops; already fixed in PR #7996 and related agent‑loop safeguards. | Fixed. |

---  

### 6. Feature Requests & Roadmap Signals  
- **UI component migration**: Multiple open PRs (#8021, #8024, #8022, #8023) replace native inputs with shared, design‑system components. Expect these to land before the **v1.4.1** minor release, completing the M3 reskin baseline.  
- **Design‑system governance**: Epic #7781 (Design System Phases 2‑3) is the official roadmap anchor; subsequent tickets (#7890, #7994) flesh out token‑bundle and colour‑alias clean‑up.  
- **Model capability exposure**: PR #7997 (capability icons) and the recently merged `list_model_catalog` API (#7998) suggest a near‑term focus on richer model discovery UI.  
- **Slack integration enhancements**: Durable progressive replies (PR #8006) and mention‑preservation (PR #8014) signal a **first‑class Slack agent** in the next release.  
- **Performance & payload optimisation**: GitHub repo‑list compaction (PR #7996) and tool‑search envelope sizing (PR #7984) are being prioritized to keep LLM token budgets manageable for large‑scale tool catalogs.  

---  

### 7. User Feedback Summary  
- **Input handling** – Users reported that special characters break chat output (`#8025`). This is a direct pain point for developers embedding commands or code snippets.  
- **Workspace writability** – The root‑less Docker sandbox issue (`#8015`) stops QA and local development on non‑root hosts, a common setup for security‑conscious teams.  
- **Searchability at scale** – The 47k‑tool catalog failure (`#8012`) shows that power‑users hitting large MCP catalogs experience broken discoverability, flagging a scalability bottleneck.  
- **UI consistency** – Multiple tickets (e.g., `#8018`, `#8019`, `#8017`, `#8020`) complain about “native” components that clash with the new design language, indicating strong community demand for a **cohesive visual experience**.  
Overall sentiment is **constructive**: users are happy with the rapid delivery of new UI features but are keen on quick resolutions for the regression bugs that interrupt daily workflows.  

---  

### 8. Backlog Watch (Long‑Unanswered Items)  
| Item | Open Since | Why it needs attention |
|------|------------|------------------------|
| **#7781** – Design System Epic (Phases 2‑3) | 2026‑08‑20 | Core alignment for all UI work; still open, blocking downstream component PRs. |
| **#8026** – Dogfooding & QA bug‑fixing epic (08/31‑09/06) | 2026‑09‑01 | Provides a consolidated “hardening” sprint; progress unclear. |
| **#7890** – Retire `app.css` Tailwind colour‑alias layer | 2026‑08‑25 | Needed to eliminate legacy token overrides before the final M3 reskin. |
| **#8020** – Shared `SearchField` for Workspace & Logs | 2026‑09‑01 | PR #8024 implements the change, but the issue remains open pending review. |
| **#8019** – Migrate Automations status banners | 2026‑09‑01 | PR #8022 does the migration; reviewer lag is preventing merge. |
| **#8018** – Replace native SettingsField controls | 2026‑09‑01 | PR #8021 implements the fix; still awaiting maintainer sign‑off. |
| **#8017** – Adopt shared form & feedback in Extension Configure | 2026‑09‑01 | Implemented in PR #8023; pending merge. |
| **#8012** – Large MCP catalog not searchable | 2026‑09‑01 | No PR yet; may require deeper changes to the tool‑search indexing pipeline. |
| **#8015** – Rootless Docker sandbox permissions | 2026‑09‑01 | Security‑critical for CI; needs a container‑runtime fix. |

*These items are high‑impact and tightly coupled to the upcoming M3 release; timely review will keep the roadmap on schedule.*  

---  

**Bottom line:** IronClaw is in a **rapid iteration phase**, delivering foundational UI infrastructure and model‑metadata improvements while simultaneously grappling with a few regressions that affect core usability. Prioritising the open design‑system epic, addressing the special‑character bug, and clearing the pending UI‑migration PRs will be key to maintaining momentum toward the next stable release.  

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI – Project Digest (2026‑09‑02)**  
*GitHub: https://github.com/netease-youdao/LobsterAI*  

---

### 1. Today’s Overview
- The repository saw **moderate activity**: 13 issues were touched (4 still open) and 9 pull‑requests were updated (4 open, 5 merged/closed).  
- Most of the work was “house‑keeping” – stale issues were closed and several UI/UX polishing PRs landed.  
- The only noteworthy open‑issue clusters relate to **stability crashes**, **language‑switch inconsistencies**, and **scheduled‑task reliability**, indicating continued growing pains as the platform expands its automation features.

---

### 2. Releases
*No new releases were published in the last 24 h.*

---

### 3. Project Progress (Merged / Closed PRs)

| PR # | Title & Area | What landed |
|------|--------------|-------------|
| **2595** | platform: windows – *nsis web staging drive preflight* | Fixed Windows installer pre‑flight checks for the web staging build. |
| **2594** | renderer / cowork – *onboarding polish* | Reduced cursor size, sped up result pop‑over animation, applied CTA styling, removed a one‑frame layout flash. |
| **2593** | renderer / artifacts – *model‑generated video sharing* | Added end‑to‑end support for sharing AI‑generated videos (ID tracking, source validation, remote preview, docs). |
| **2592** | renderer / cowork – *user guide fix* | Minor documentation and UI tweaks to the in‑app guide. |
| **2591** | renderer / cowork – *first‑run analytics* | Instrumented onboarding funnel (login, task creation, stream lifecycle) with privacy‑preserving analytics. |

*Impact*: The merged PRs mainly improve **installer robustness**, **first‑time user experience**, and **new media‑sharing capabilities**—a clear shift toward polish and enterprise‑ready features.

---

### 4. Community Hot Topics  

| Item | Type | Comments | Highlights |
|------|------|----------|------------|
| **#1112** – *Table component leaves unexplained white space* (open) | Issue | 2 | UI layout regression noticed after recent renderer changes; screenshots attached. |
| **#1105** – *DingTalk scheduled‑task IM routing fails when `conversationId` includes prefix* (open) | Issue | 1 |
| **#1107** – *`pollOnce()` lacks re‑entrancy protection, ghost events after `stopPolling()`* (open) | Issue | 1 |
| **#2589** – *Plan mode drains 200 credits!* (open) | Issue | 0 | New‑user complaint about unexpected credit consumption; could hint at billing‑logic bug. |
| **#2593** – *Model‑generated video sharing* (merged) | PR | N/A | First major media‑export feature; draws community interest for content‑creation use‑cases. |

**Underlying needs**  
- **Consistent UI**: The table white‑space bug and skill‑deletion UI lag show developers are still refining the renderer’s layout engine.  
- **Reliability of automation**: Two scheduled‑task bugs (routing and polling) are being actively addressed, reflecting a demand for dependable background jobs.  
- **Transparency of resource usage**: The credit‑drain complaint signals a need for clearer billing/usage dashboards.  

---

### 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue # / PR # | Summary | Current Status | Fix in progress? |
|----------|----------------|---------|----------------|-------------------|
| **Critical** | **#1587** – *App crashes on first launch after update* (closed) | Full‑screen crash on macOS; large log attached. | Closed (no public fix yet). | No PR linked – may require upstream OpenClaw update. |
| **Critical** | **#1589** – *Conversation & scheduled‑task execution dead‑locks* (closed) | Both chat and cron jobs freeze on macOS (itel). | Closed; no PR attached. | Likely pending internal fix. |
| **High** | **#1627** – *Complex task crashes client* (closed) | Client aborts when processing a heavy OpenClaw turn; log excerpt provided. | Closed; no visible PR. |
| **High** | **#1622** – *Custom model addition fails* (closed) | UI error when loading user‑provided model; screenshot attached. | Closed; no PR linked. |
| **Medium** | **#1617** – *Deleted skill still listed after restart* (closed) | Front‑end state not refreshed after skill removal. | Closed; no PR. |
| **Medium** | **#1632** – *Switching to local model breaks all skills* (closed) | Skill loading fails after model swap; no remediation noted. | Closed. |
| **Medium** | **#1586** – *Partial language switch failure* (closed) | Some UI strings remain Chinese after switching to English. | Closed. |
| **Low** | **#1112** – *Table component white‑space* (open) | Layout glitch in table view; 2 comments seeking CSS fix. | **Open**, no PR yet. |
| **Low** | **#1105** – *DingTalk IM routing prefix bug* (open) | Conversation ID prefix prevents message delivery. | **Open** – **PR #1106** (open) provides a fix. |
| **Low** | **#1107** – *PollOnce re‑entrancy & ghost events* (open) | Concurrency bug in scheduled‑task polling. | **Open** – **PR #1108** (open) provides a fix. |
| **Low** | **#2589** – *Plan mode drains 200 credits* (open) | Unexpected credit consumption; no technical details yet. | **Open**, no fix. |

*Takeaway*: The most severe crashes have been closed but remain **unresolved at the code level**, indicating they may be upstream issues or require a dedicated hot‑fix sprint. Low‑severity UI and scheduled‑task bugs already have targeted PRs, showing responsive maintenance.

---

### 6. Feature Requests & Roadmap Signals

| Request / Signal | Description | Likelihood of appearing in the next release |
|------------------|-------------|--------------------------------------------|
| **Hermes‑agent as an optional AI engine** (Issue #1614, closed) | Suggest adding Hermes‑agent alongside OpenClaw. | Low – closed as *stale*; no recent activity. |
| **System notification after scheduled‑task completion** (Issue #1620, closed) | Push native OS notification when a cron job finishes. | Medium – concept already discussed; could be merged once UI work finalises. |
| **Video sharing for model‑generated content** (PR #2593, merged) | Already delivered; may be expanded with more sharing platforms. | High – already in the product. |
| **First‑run analytics** (PR #2591, merged) | Telemetry for onboarding funnel; may evolve into richer usage dashboards. | High – foundation already in place. |
| **Improved credit‑usage visibility** (Issue #2589, open) | Users see unexpected credit drain; request transparent billing UI. | Medium – aligns with monetisation roadmap; likely a near‑term enhancement. |

---

### 7. User Feedback Summary

- **Stability concerns dominate**: Multiple crash reports after recent updates (especially on macOS) and recurring scheduled‑task failures illustrate that reliability is the top user pain point.  
- **UI polish still needed**: Table white‑space, lingering skill items, and incomplete language switches are being noticed by power users and affect perceived professionalism.  
- **Automation reliability is a growth area**: The community is actively filing bugs around DingTalk routing and polling logic, indicating heavy reliance on scheduled tasks for real‑world workflows.  
- **Feature enthusiasm**: The video‑sharing PR was well‑received, reflecting demand for content‑creation capabilities.  
- **Resource‑usage transparency**: The credit‑drain complaint suggests users need clearer quota tracking as the platform moves toward paid tiers.

Overall sentiment is **cautiously optimistic**: users appreciate the rapid delivery of UX improvements and new media features but expect a more stable core before expanding further.

---

### 8. Backlog Watch (Stale / Unanswered Items)

| Issue / PR | Reason for attention | Suggested next step |
|------------|----------------------|----------------------|
| **#1105** – DingTalk IM routing bug | Open, but only a comment; fix PR (#1106) still open. | Prioritise review/merge of PR #1106. |
| **#1107** – PollOnce concurrency | Open; fix PR (#1108) pending. | Review PR #1108; add unit tests before merging. |
| **#1112** – Table white‑space | UI regression, 2 comments, no PR. | Assign to renderer team; create a small CSS fix PR. |
| **#2589** – Credit drain | No comments, potentially high impact on paying users. | Request additional logs; investigate billing subsystem. |
| **#1614** – Hermes‑agent engine request | Closed as stale; still a potential alternative engine. | Re‑open as a feature‑proposal if community interest resurfaces. |
| **#2590** – MCP stdio & external URL hardening (open) | Security hardening PR, not yet merged. | Expedited security review; merge to reduce attack surface. |

**Actionable recommendation**:  
- **Fast‑track** PRs #1106 and #1108 to resolve the two most frequently reported scheduled‑task bugs.  
- **Allocate a sprint** for UI regression fixes (#1112) and the credit‑drain investigation (#2589) to improve user confidence ahead of the next feature roll‑out.  

---  

*Prepared by the AI‑Assistant Analyst – 2026‑09‑02*  

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis – Project Digest (2026‑09‑02)**  

---

### 1. Today’s Overview  
- Activity in the last 24 h was modest but focused: two bug‑related issues were closed, and two pull requests were merged/closed while a third PR remains open for documentation.  
- The team continued to shore up Docker‑deployment pain points (auth locality and bind‑mount permission errors) and refined the MCP “doctor” diagnostics for the new *streamable‑http* transport.  
- No new releases were published, indicating the maintainers are still in a stabilisation phase rather than a feature‑release sprint.

---

### 2. Releases  
*No new version was tagged in the last day, and the repository has no releases listed.*  

---

### 3. Project Progress  

| PR | Status | Owner | Summary of Change | Impact |
|----|--------|-------|-------------------|--------|
| **#1249** – *fix(auth): let Docker loopback‑only deployments count as local* | **Closed (merged)** | Saraswat123 | Adjusted `is_local_connection()` to treat Docker bridge‑network loopback addresses as local, re‑enabling the “Tier 2” local‑dev convenience mode (including `auth_disabled`). | Removes a blocker for developers running Moltis in Docker on a single host; improves local testing workflow. |
| **#1251** – *Fix doctor validation for streamable HTTP MCP servers* | **Closed (merged)** | penso | Added canonical handling for `streamable-http` (and its aliases), validated server URLs before reporting success, and changed unresolved credential‑store placeholders to *informational* warnings. | Prevents false‑negative “doctor” failures, making deployment diagnostics more reliable. |
| **#1252** – *docs(docker): document the bind‑mount permission fix for fresh deploys* | **Open** | Saraswat123 | Draft documentation that explains the SQLite bind‑mount permission error observed on fresh Docker check‑outs and the required `chmod` fix. | Anticipated to reduce support tickets and onboarding friction for new Docker users. |

*All merged PRs are bug‑oriented; no new functional feature landed today.*

---

### 4. Community Hot Topics  

| Item | Type | Comments / 👍 | Link | Why It Matters |
|------|------|----------------|------|----------------|
| **#1112** – *Disabling auth doesn't seem to disable auth (Docker)* | Issue (closed) | 1 comment, 0 👍 | https://github.com/moltis-org/moltis/issues/1112 | Highlights that the “auth‑disabled” flag was ineffective inside Docker because the connection was no longer seen as loopback. The fix in PR #1249 directly addresses this pain point. |
| **#1250** – *doctor treats working streamable‑http MCP server as missing command* | Issue (closed) | 0 comments, 0 👍 | https://github.com/moltis-org/moltis/issues/1250 | Exposes a regression in the `moltis doctor` health‑check after the `20260827.01` release, prompting the validation overhaul in PR #1251. |
| **#1252** – *docs(docker): bind‑mount permission fix* | PR (open) | No reactions yet | https://github.com/moltis-org/moltis/pull/1252 | Documentation gaps are a recurring source of friction; this PR is likely to draw community attention once merged. |

The two closed issues received the most attention (though still low comment counts), indicating that Docker‑deployment reliability is the current hot spot for users.

---

### 5. Bugs & Stability  

| Severity | Issue/PR | Description | Fix Status |
|----------|-----------|-------------|-----------|
| **Critical** | #1112 (bug) | `auth_disabled` flag ineffective in Docker because the source IP is not recognized as loopback, leading to unexpected authentication failures. | Fixed in PR #1249 (merged). |
| **High** | #1250 (bug) | `moltis doctor` mistakenly reports a healthy `streamable-http` MCP server as missing a command, causing false alarms. | Fixed in PR #1251 (merged). |
| **Medium** | #1252 (doc bug) | Fresh Docker deployments can panic due to SQLite file permission errors on bind‑mounted volumes. | Documentation fix in progress (PR #1252). No code change required yet. |

All reported bugs from the last day have already been addressed by merged PRs, showing a rapid response cycle.

---

### 6. Feature Requests & Roadmap Signals  

- **Documentation of Docker bind‑mount fixes** (PR #1252) signals a strong community desire for clearer deployment guides. Once merged, the maintainers may prioritize a “Docker‑first” checklist in the next minor release.  
- No explicit feature‑request issues appeared in the 24‑hour window, but the fact that two bugs were tied to new MCP transport support (`streamable-http`) suggests that the *MCP extensibility* area is an emerging focus. Expect future PRs to add further transport types or improve credential‑store handling.  

**Prediction:** The next version (likely a `202609xx.xx` bump) will probably be a *stabilisation* release, bundling the Docker auth locality fix, the doctor validation improvements, and updated documentation—rather than introducing brand‑new features.

---

### 7. User Feedback Summary  

- **Pain Point – Docker Local‑Dev Experience:** Users running Moltis inside Docker hit two distinct roadblocks: authentication not being disabled as intended, and SQLite bind‑mount permission panics. Both have now been mitigated (code fix & forthcoming docs).  
- **Pain Point – Diagnostic Accuracy:** The “doctor” command gave false‑negative results for the new `streamable-http` transport, confusing operators. The validation overhaul restores trust in the health‑check tool.  
- **Overall Sentiment:** While the raw number of comments is low, the rapid closure of the two issues and the targeted documentation PR indicate a responsive maintainer team, which should translate into higher user confidence for Docker deployments.

---

### 8. Backlog Watch  

| Item | Type | Age (approx.) | Current State | Reason for Attention |
|------|------|---------------|---------------|----------------------|
| **#293** – *Docker bind‑mount permission failure* (referenced by PR #1252) | Issue (still open) | > 3 months | Open, awaiting documentation PR merge | The underlying bug is already fixed in code; however, without the documentation merge, new users may still encounter the error. Prioritise merging PR #1252. |
| **Open Issues List** (not listed here) | – | – | Several open bugs/feature discussions older than 30 days | A quick triage of stale, low‑activity tickets would help keep the backlog manageable and signal project vitality. |
| **PRs awaiting review** (aside from #1252) | – | – | No open PRs besides #1252, but any pending community contributions should be marked for review within a week. | Encouraging timely reviews will prevent backlog creep and keep contributors engaged. |

---

**Bottom‑line health assessment:**  
Moltis is in a *maintenance‑focused* stage with swift bug resolution and a clear emphasis on Docker‑deployment usability. The maintainer team is keeping the backlog tight, but the outstanding documentation PR (#1252) should be merged promptly to close the loop on the recent Docker‑related bugs. Continued attention to stale issues and proactive documentation will sustain the positive momentum observed today.  

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw (agentscope‑ai/QwenPaw) – Project Digest – 2026‑09‑02**

---

### 1. Today’s Overview
- The repository saw a **high level of activity** in the last 24 h: 31 issues (17 still open) and 33 pull‑requests (18 open, 15 merged/closed).  
- A **new beta release (v2.2.0‑beta.6)** was published, mainly cleaning up desktop packaging and expanding console test coverage.  
- Most of the churn is concentrated around **memory/embedding stability**, **tool‑guard security**, and **UI polish** (dark‑mode fixes, scroll‑locking, sidebar behaviour).  
- Community discussion is centred on **regressions introduced in the 2.2‑beta series** (context loss, doom‑loop protection, and embedding index bugs), indicating the need for rapid hot‑fixes before the next official beta.

---

### 2. Releases  *(v2.2.0‑beta.6)*
| Component | Change | Impact / Migration |
|-----------|--------|--------------------|
| **Desktop (Tauri) bundle** | Re‑bundles the *ReMe* entry‑point plugins (PR #7458). | No user‑visible change, but resolves missing plugin errors on Windows/macOS installations. |
| **Console test suite** | Added **617 new unit tests**, raising statement coverage by **10.61 pp** (PR #7452). | Improves reliability of the web UI; no migration needed. |
| **Other** | Minor documentation/CI tweaks (not detailed in the release notes). | No breaking changes reported. |

*No explicit migration steps are required for end‑users; the release is a drop‑in replacement for existing 2.2‑beta installs.*

---

### 3. Project Progress (Merged / Closed PRs)
| PR | Summary | Category |
|----|---------|----------|
| **#7468** – *fix(memory): start ReMe before model configuration* | Starts the ReMe memory manager earlier to avoid `ProviderError` when no model is yet configured. | Bug‑fix (memory init). |
| **#7472** – *fix(governance): prevent shell line‑continuation bypasses* | Tightens tool‑guard parsing to stop malicious backslash‑newline tricks. | Security hardening. |
| **#7453** – *fix(pack): bundle reme‑ai core in PyInstaller onedir* | Fixes the “Rebuild Memory Index → 500” crash on Windows (closed #7446). | Bug‑fix (packaging). |
| **#7466** – *fix(console): link Daily Paper to QwenPaw docs* | Updates documentation link to internal memory guide. | Docs. |
| **#7441** – *feat(memory): add Auto Fin and upgrade ReMe to 0.4.1.11* | Introduces a new scheduled long‑term memory source (Auto Fin) and upgrades the embedded ReMe runtime. | Feature. |
| **#7459 / #7463** (still **open**) – *Bundled llama.cpp cannot load Spark‑X2.5 GGUF* | Reports and tracks a model‑architecture compatibility problem. | Ongoing feature/bug investigation. |
| **#7348** – *chore: release notes for v2.2.0* | Prepares the official changelog for the beta series. | Release prep. |
| **#7356** – *feat(console): add chat scroll lock* | Gives users control over automatic scrolling during long streaming responses. | UI improvement. |

**Take‑away:** The team is focused on stabilising the memory stack (ReMe) and tightening security, while also delivering small but user‑visible UI enhancements (scroll lock, dark‑mode fixes).

---

### 4. Community Hot Topics
| Issue / PR | Comments / Reactions | Core Need |
|------------|----------------------|-----------|
| **#7420** – *Tool results lost & doom‑loop protection* (8 cmt) | Users experience silent stalls after upgrading to 2.2‑beta. | Robustness of tool‑execution pipeline and clearer diagnostics. |
| **#7450** – *Main agent only reports progress when asked* (5 cmt) | Multi‑agent orchestration lacks proactive status updates. | Better task‑monitoring & asynchronous progress reporting. |
| **#7417** – *Console stream duplication* (5 cmt) | Duplicate SSE chunks appear mid‑stream, confusing UI. | Correct SSE replay handling; UI consistency. |
| **#7443** – *Evasive dangerous instructions* (4 cmt) | Safety guard can be bypassed under certain prompts. | Strengthening content moderation & guard logic. |
| **#7461** – *In‑round queued events* (1 cmt, open) | Users want messages injected during a tool call to be processed immediately. | More responsive interactive loops. |
| **#7378** – *feat(mobile): native mobile experience* (open, 0 cmt) | Early interest in a mobile client. | Platform expansion. |

**Analysis:** The most‑commented issues all revolve around **runtime stability and interaction quality**—especially when the new beta changes internal event handling. The community is also pushing for **proactive multi‑agent visibility** and **improved safety checks**, signalling that future releases must prioritize these aspects.

---

### 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Symptoms | Status / Fix |
|----------|-------|----------|--------------|
| **Critical** | **#7420** – Tool results lost, doom‑loop protection | Tasks stall, repeated `write_file` triggers infinite‑loop guard. | No fix yet; being investigated. |
| **Critical** | **#7447** – Early context disappears in long sessions | Loss of token history → tasks cannot resume. | Open, no PR linked. |
| **High** | **#7469** – ReMe background embedding fails (`as_embedding:default` accessed before start) | New memories never indexed, causing memory‑search failures. | No fix yet; related to embedding dimensions (PR #7465). |
| **High** | **#7445** – QwenPaw Hub fails to connect to local model service | Hub UI shows “connection error” for 127.0.0.1:8088 or LAN endpoints. | Open, no fix. |
| **Medium** | **#7464** – Embedding config always reported as unsaved | UI shows “unsaved changes” even after save. | Open; may be addressed by PR #7465 (normalise dimensions). |
| **Medium** | **#7417** – Duplicate console stream chunks | UI shows repeated text blocks before final clean output. | Open; likely related to SSE replay bug. |
| **Low** | **#7479** – Misspelled commands still forwarded | Typos like `/mew` are treated as normal messages. | Open, no fix yet. |
| **Low** | **#7476** – Cron misfire causes duplicate backup runs | Two backup files created seconds apart. | Open, could be mitigated by tighter APScheduler config. |

*Fix PRs that address some of the above:*  
- **#7468** (memory init), **#7472** (tool‑guard), **#7465** (embedding dimension normalisation), **#7453** (packaging fix for ReMe).  
These PRs mitigate related crashes but do not fully resolve the high‑severity regressions listed.

---

### 6. Feature Requests & Roadmap Signals
| Feature | Description | Likelihood for Next Beta (v2.2.0‑beta.7) |
|---------|-------------|----------------------------------------|
| **In‑round queued events** (PR #7461) | Allow user messages to be injected while a tool call is running. | **High** – already under active discussion; aligns with the “forced‑confirmation turn” issue (#7467). |
| **Auto Fin memory source** (merged #7441) | Scheduled retrieval of recent CLS data. | **Implemented** – will be part of the next beta. |
| **Disable built‑in cloud providers** (issue #7455) | UI button to turn off default “cloud” back‑ends (Kilo Code, opencode). | **Medium** – repeated request; likely to be added before 2.2 final. |
| **Custom provider loading fix** (issue #7474) | Model loading fails after PR #7337 migration. | **High** – regression already identified; a fix is expected soon. |
| **Mobile client** (PR #7378) | Native iOS/Android app built with Expo/React‑Native. | **Low‑Medium** – early prototype, may be slated for a separate “mobile” release after core stability is restored. |
| **Support for Spark‑X2.5 GGUF** (issues #7463 / #7459) | Enable loading of newer GGUF model architecture. | **Medium** – active bug report, likely to be addressed in a future patch. |

---

### 7. User Feedback Summary
- **Stability concerns** dominate: multiple users report stalls, missing context, and memory indexing failures after upgrading to 2.2‑beta.  
- **Multi‑agent orchestration** is still fragile; agents don’t proactively report sub‑agent status, forcing users to inquire manually.  
- **User‑experience pain points** include UI glitches (duplicate console streams, dark‑mode container backgrounds) and lack of feedback for misspelled commands.  
- **Positive notes**: the expanded console test suite is appreciated, and the new scroll‑lock feature is seen as a quality‑of‑life improvement.  
- Overall sentiment is **cautiously optimistic**: users value the rapid feature cadence but are asking for a more *rock‑solid* beta before committing to production workloads.

---

### 8. Backlog Watch (Long‑Unanswered / High‑Priority Items)
| Item | Reason for Attention | Suggested Action |
|------|---------------------|-------------------|
| **#7420** – Tool results lost / doom‑loop | Critical regression affecting all tool‑based agents. | Prioritise a hot‑fix; consider rolling back the new protection logic. |
| **#7447** – Early context loss | Directly impacts long‑form tasks; potential data loss. | Investigate token‑store pruning logic; add regression test. |
| **#7469** – ReMe embedding job silent failure | Memory indexing is core to agent reasoning. | Pair with PR #7465; add explicit error reporting / fallback. |
| **#7474** – Custom provider load failure after migration | Blocks users who rely on private models. | Provide migration guide; add compatibility shim. |
| **#7461** – In‑round queued events | Requested feature with high impact on interactivity. | Continue design review; prototype in next sprint. |
| **#7463 / #7459** – Spark‑X2.5 GGUF load error | Limits model ecosystem; many users report same issue. | Update bundled llama.cpp to recognise `spark2_5` architecture. |
| **#7476** – Cron misfire duplicate backups | DevOps reliability concern for scheduled jobs. | Tighten APScheduler misfire handling; add test. |
| **#6970** – Per‑session model overrides (PR #5992) | Enables heterogeneous LLM usage per conversation. | Review for security & UI impact; consider for next minor release. |
| **#6960** – Import flow from other agents (PR #6960) | Facilitates migration from Codex/Qoder; first‑time contributor. | Provide reviewer and merge if code passes tests. |

*Maintainers should allocate at least one sprint to the three **critical bugs** (#7420, #7447, #7469) before the next beta release, while the medium‑severity UI/UX items can be grouped into a “polish” sprint.*

---

**Overall Health:**  
CoPaw is **highly active** with a healthy influx of contributions, but the **fast‑track beta cadence** has introduced several regressions that threaten user confidence. Prioritising the critical stability fixes and delivering the most‑requested interaction improvements (in‑round events, progress reporting) will be key to maintaining momentum into the next release cycle.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

**ZeptoClaw – Project Digest (2026‑09‑02)**  
*Repository: https://github.com/qhkm/zeptoclaw*

---

### 1. Today’s Overview
- The repository saw **no new issues** and **no activity on existing issues** in the past 24 hours.  
- Two dependency‑related pull requests were updated: one was **merged** (PR #649) and the other remains **open** (PR #658).  
- No new releases were published, and community chatter is limited to the Rust‑toolchain bump discussions. Overall the project appears **stable but lightly active** today.

---

### 2. Project Progress
| PR | Status | Summary | Key Impact |
|----|--------|---------|------------|
| **[#649](https://github.com/qhkm/zeptoclaw/pull/649)** | **Closed / Merged** (2026‑09‑01) | Updated the Docker base image from `rust:1.95‑slim‑trixie` to `rust:1.97‑slim‑trixie`. | Refreshes the toolchain, brings in minor compiler improvements and security patches. No code‑level changes. |
| **[#658](https://github.com/qhkm/zeptoclaw/pull/658)** | **Open** (created 2026‑09‑01) | Proposed bump to `rust:1.98‑slim‑trixie`. Contains a **cool‑down warning** because Dependabot could not obtain a publication date. | Preparing the next toolchain upgrade; pending maintainer review. No functional impact yet. |

*No feature‑oriented or bug‑fix PRs were merged today, so the codebase remains unchanged aside from the toolchain version.*

---

### 3. Community Hot Topics
- **Dependency upgrades** dominate today’s discussion. The only active conversation revolves around PR #658, where the bot warns that the “cool‑down could not be applied.” This suggests the community is **keeping the build environment current**, but also **monitoring the reliability of automated version bumps**.  
- No issues or feature debates generated comments or reactions, indicating a **quiet community** for the period.

---

### 4. Bugs & Stability
| Severity | Report | Status | Notes |
|----------|--------|--------|-------|
| – | *None reported today.* | – | The absence of new issues or crash reports implies **no regressions** were observed in the last 24 h. |

*No fix‑oriented PRs are present because no bugs were filed.*

---

### 5. Feature Requests & Roadmap Signals
- **No new feature requests** appeared in the issue tracker within the last day.  
- The exclusive focus on Rust version bumps suggests the maintainer’s short‑term priority is **environment hygiene** rather than new functionality.  

*Given the pattern, the next “visible” roadmap signal will likely be the **approval and merge of PR #658**, after which the maintainer may evaluate whether any code changes are needed to accommodate Rust 1.98.*

---

### 6. User Feedback Summary
- With **zero issue comments** and **no new issues**, there is **no direct user‑submitted feedback** to summarize for today.  
- The implicit user sentiment is **neutral**; the community is not reporting pain points nor expressing dissatisfaction.

---

### 7. Backlog Watch
| Item | Type | Age (approx.) | Reason for attention |
|------|------|--------------|----------------------|
| **PR #658** | Open dependency PR | < 2 days | Needs maintainer review; the cooldown warning may merit investigation to ensure future automated bumps are safe. |
| *(Other backlog items)* | — | — | No additional open issues or stale PRs were listed in the data set. |

*Maintainers should prioritize reviewing PR #658 to keep the Docker image up‑to‑date and to resolve the Dependabot cooldown warning before it potentially blocks future upgrades.*

---

**Bottom line:** ZeptoClaw’s activity on 2026‑09‑02 is limited to routine dependency maintenance, with no new bugs, features, or community discussions surfacing. The project remains **stable**, but a pending dependency PR (+cool‑down warning) is the only item requiring immediate maintainer attention.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw Project Digest – 2026‑09‑02**  
*Data extracted from issues and pull‑requests updated on 2026‑09‑01 (last 24 h).*  

---

## 1. Today’s Overview  
- Activity remains **high**: 37 issues (33 still open) and 50 PRs (35 open) were touched in the past day, showing a vibrant development rhythm.  
- The bulk of the work revolves around **architecture‑level RFCs** (runtime, memory, sandbox, wiring) and **bug‑fixes** that affect security and operator experience.  
- No new release was cut, so the project is still in a *pre‑release* phase where core design decisions are being consolidated before the next “stable” milestone.

---

## 2. Releases  
*No new release was published in the last 24 h.*  

---

## 3. Project Progress (Merged / Closed PRs)  
| PR | Title / Goal | Size / Impact | Status |
|----|--------------|--------------|--------|
| **#9739** | `zerocode`: multi‑session panes + sidebar quick‑start | XL – major UI/UX change for the web dashboard | **Open** (still under review) |
| **#9713** | Runtime – expose token accounting on history‑trim events | XL – improves observability & cost tracking | **Open** |
| **#10220** | `cron`: deterministic `pre_hook` gate | XL – adds safety guard for scheduled jobs | **Open** |
| **#9841** | SOP: head‑less runs + fix 4 review defects | XL – stabilises SOP automation pipeline | **Open** |
| **#9809** | Providers: multiple models per profile | L – eases multi‑model deployments | **Open** |
| **#10084** | WhatsApp‑Web: answer passkey gate | L – restores device‑linking flow | **Open** |
| **#9678** | Config: harden Git shell policy arguments | XL – security hardening of policy parsing | **Open** |
| **#10441** | CI: route Rust CodeQL to Blacksmith | XS – reduces CI costs on forks | **Open** |
| **#10471**, **#10482**, **#10466**, **#10392** | Various bug‑fixes (test harness, cost cache, SOP UI) | S–M – incremental stability improvements | **Closed** / **Open** (as noted) |

*Takeaway:* Most PRs are **still open**, indicating a heavy review backlog. The closed PRs are mostly targeted at **bug‑fixes, CI hygiene, and documentation**, while the large‑size PRs (UI, runtime, provider extensions) await maintainer sign‑off.

---

## 4. Community Hot Topics  

| # | Issue / PR | Comments | Core Theme | Why it matters |
|---|------------|----------|-----------|----------------|
| **#9487** | *RFC: Runtime‑owned conversation sessions & transport surface adapters* | 31 | Architecture – session lifecycle | Sets the contract for how agents own conversations across gateways; essential for multi‑agent scaling. |
| **#9488** | *RFC: Unified file & attachment architecture for conversation surfaces* | 25 | Architecture – data model | Aims to standardise file handling across channels (e.g., web, WhatsApp), reducing incoherent implementations. |
| **#6850** | *RFC: Decouple memory lifecycle policy from storage backends* | 24 | Architecture – memory management | Clears the boundary between durable storage and policy‑driven expiry, a prerequisite for pluggable memory back‑ends. |
| **#6996** | *RFC: Granular sandbox policy (filesystem & network)* | 19 | Security – sandboxing | Aligns OS‑level sandbox (Bubblewrap, Landlock) with ZeroClaw’s higher‑level policy model, mitigating privilege‑escalation risk. |
| **#8396** | *RFC: Wire protocol as first‑class in provider onboarding* | 17 | Architecture – provider integration | Enables providers to negotiate capabilities reliably, easing future third‑party model hosting. |
| **#10050** | *RFC: Verbatim channel send without an agent turn* | 12 | Feature – low‑latency messaging | Allows external services to push messages directly, expanding ZeroClaw’s use as a relay/bus. |
| **#9739 (PR)** | Multi‑session ZeroCode UI | — | UI/UX – developer dashboard | High‑visibility UI overhaul; many comments reflect design trade‑offs and user‑experience concerns. |
| **#9713 (PR)** | Token accounting on history trim | — | Observability – cost tracking | Direct response to operator complaints about opaque token usage. |

**Underlying needs:**  
- A **coherent runtime contract** (sessions, memory, wire protocol) before stable releases.  
- **Security hardening** (sandbox, policy parsing) to satisfy enterprise adopters.  
- **Usability enhancements** (UI multi‑session, direct channel pushes) driven by operator feedback on day‑to‑day workflow.

---

## 5. Bugs & Stability (ranked by severity)

| Severity | Issue | Summary | Current Status | Fix PR (if any) |
|----------|-------|---------|----------------|-----------------|
| **P0 – Data loss / security risk** | **#10495** – `Config::save()` overwrites populated `config.toml` | Saves a near‑empty file, wiping dozens of agents. | Open | – |
| **P1 – Critical operator impact** | **#9779** – SOP `sops_dir` default ignored | SOPs never load when operator relies on the documented default. | Open | – |
| **P1 – Truncation bug** | **#10523** – Bootstrap file cut at 6000 chars | Important context (AGENTS/USER files) silently lost in system prompt. | Open | – |
| **P1 – Tool delegation security** | **#8279** – `delegate` bypasses parent tool allowlist | Sub‑agent can invoke disallowed tools, potential data exfiltration. | Open | – |
| **P2 – Degraded behavior** | **#9896** – Status banner may say “Memory: none” when sqlite backend is active | Confusing UI, may mislead operators about persistence. | Open | **#10482** (cost cache) – unrelated; no direct fix yet. |
| **P2 – Config persistence** | **#9395** (closed) – WASM `http` egress missing policy | Highlighted missing config knob; already closed. | Closed | – |
| **P2 – Compatibility** | **#7899** – OpenAI STT provider ignores env‑based credentials | Breaks CI pipelines on machines that rely on env vars. | Open | – |

*Observation:* The most severe bugs are **still open** with **no corresponding PRs** yet, indicating a risk to production deployments. Immediate maintainer attention is needed for the P0/P1 items.

---

## 6. Feature Requests & Roadmap Signals  

| RFC / Feature | Primary Goal | Likely next‑milestone |
|---------------|--------------|-----------------------|
| **#9487** – runtime‑owned sessions | Define clear session ownership & transport adapters | *Core runtime v1.0* (expected in the next release cycle) |
| **#6850** – decouple memory lifecycle | Separate storage from policy (GC, TTL) | *Memory subsystem refactor* (Q4 2026) |
| **#6996** – granular sandbox policy | Merge OS‑sandbox & ZeroClaw policy layers | *Security hardening sprint* (Q4 2026) |
| **#8396** – wire‑protocol first‑class | Provider‑side negotiation of capabilities | *Provider onboarding framework* (mid‑Q4) |
| **#8850** – move optional channels/tools to runtime plugins | Replace compile‑time Cargo features with WASM plugins | *Pluggable architecture* (planned for next major version) |
| **#10050** – verbatim channel send | Enable external message injection without agent turn | *Gateway API extension* (likely post‑v1.0) |
| **#10222** – single‑tool provider rounds | Fine‑grained control over tool usage per turn | *Agent‑tool orchestration* (next sprint) |
| **#8288** – SOP control‑plane to 5/5 | Complete SOP feature set | *SOP milestone* (targeted for next release) |

**Prediction:** The upcoming “v1.0‑candidate” will likely focus on **runtime contracts (sessions, memory, wire protocol)** and **security sandboxing**, as these RFCs have the most comments and are marked high‑risk. The pluggable‑plugin roadmap (channels/tools as WASM) will follow once the core runtime stabilises.

---

## 7. User Feedback Summary  

| Feedback Theme | Representative Issue | Operator Pain Point |
|----------------|----------------------|----------------------|
| **Configuration defaults** | #9779 (SOP default) | Operators expect documented defaults to be honoured; silent failures erode trust. |
| **Prompt size handling** | #10523 (bootstrap truncation) | Critical context lost, leading to degraded agent performance. |
| **Data safety** | #10495 (config overwrite) | Risk of catastrophic loss of agent definitions and settings. |
| **Observability** | #9713 (token accounting) | Need for transparent token usage to control costs. |
| **Channel ergonomics** | #10050 (verbatim send) | Desire for tighter integration with external event streams. |
| **UI/UX** | #9739 (multi‑session ZeroCode) | Users want to run multiple agents concurrently without losing state. |

Overall sentiment is **highly engaged** but **concerned** about stability and proper handling of defaults. The community repeatedly requests **clear migration paths** and **robust security guarantees** before adopting ZeroClaw in production environments.

---

## 8. Backlog Watch (Issues/PRs needing maintainer action)

| ID | Title / Type | Reason it’s Stalled | Suggested Action |
|----|--------------|---------------------|------------------|
| **#9487** | RFC: Runtime‑owned conversation sessions | Awaiting maintainer review & vote (status no‑stale) | Schedule a design review meeting; create a concise decision snapshot. |
| **#9488** | RFC: Unified file & attachment architecture | Same as above; high comment count | Prioritise as it impacts many channel implementations. |
| **#6850** | RFC: Decouple memory lifecycle | No maintainer comment; high‑risk | Align with upcoming memory‑refactor milestone. |
| **#6996** | RFC: Granular sandbox policy | In‑progress but no recent maintainer comment | Assign a security champion to drive closure. |
| **#8396** | RFC: Wire protocol first‑class | Needs maintainer review | Link to provider onboarding PRs for cross‑dependency. |
| **#8692** (Tracker) | Maintainer decision queue | Tracker itself needs periodic grooming | Review queue weekly; close stale items. |
| **#8288** (Tracker) | SOP 5/5 milestone | Ongoing multi‑PR rollout | Ensure each sub‑task has an owner and CI gate. |
| **#10220** | PR: deterministic `cron` pre‑hook | Open, large size | Request final sign‑off from security team. |
| **#9739**, **#9713** | Large UI/observability PRs | No maintainer feedback yet | Allocate a reviewer with UI expertise; consider splitting if needed. |
| **#9678** | PR: harden Git shell policy | Open, security‑critical | Fast‑track review due to high risk. |

---

### Bottom Line
ZeroClaw is **actively evolving** with a strong focus on architectural foundations and security. The current bottleneck is **maintainer review throughput**: many high‑impact RFCs and large PRs sit awaiting sign‑off. Accelerating decision cycles on the core runtime and memory RFCs, and addressing the top‑severity bugs (P0/P1), will clear the path for the next stable release and improve confidence among enterprise users.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*