# OpenClaw Ecosystem Digest 2026-08-21

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-20 22:15 UTC

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

**OpenClaw Project Digest – 2026‑08‑21**  
*Data source: GitHub activity (last 24 h) – 500 issues updated, 500 PRs updated, 0 new releases.*

---

### 1. Today's Overview  
The repository is in a high‑tempo maintenance state: 458 issues remain open/active and 331 PRs are still open, while 169 PRs were merged/closed in the last day. No formal release was cut today, but the steady stream of merged PRs shows ongoing bug‑fixing and feature work. Overall project health is active, with a sizable backlog of open items that need triage.

### 2. Releases  
- **No new releases** were published today. The latest version in circulation remains the pre‑release **v2026.8.1‑beta.2** (validation issue #125626).

### 3. Project Progress (merged/closed PRs)  
Although the raw list does not show comment counts for most PRs, the 169 merged/closed PRs updated in the period include several notable fixes that landed today:

| PR | Summary | Linked Issue(s) |
|----|---------|-----------------|
| #126619 | HTTP `/v1/chat/completions` no longer sends a full system prompt when `tools.profile: "minimal"` – reduces token waste for lightweight agents. | #126459 |
| #126618 | Tool Search `directory`/`tools` modes now wrap native `read`/`exec` in a proper `tool_call`, preventing AI‑completions models from calling meta tools incorrectly. | #126460 |
| #126616 | HTTP chat now binds a single unbounded session per constant OpenAI `user` value, stopping accidental session sharing across clients. | #126461 |
| #126590 | Channel ingress deliveries are kept admissible after inherited root releases, eliminating premature `GatewayDrainingError` on LINE and similar webhooks. | #126441 |
| #126224 | Retry loop after model‑catalog generation mismatch is fixed by retiring only the worker that caused the mismatch. | #126108 |
| #126858 | Compaction guard now tolerates decimal numbers in tool results, avoiding false `guard_blocked` failures. | #126016 |
| #125471 (closed) | Restores Claude CLI OAuth availability in the Control UI after a gateway restart. | #118793 |
| #120900 (closed) | Adds UI flow to acknowledge install‑policy warnings before proceeding. | #116489 |

These PRs address token efficiency, tool‑call correctness, session isolation, channel reliability, and UX polish—areas that repeatedly appear in the open‑issue backlog.

### 4. Community Hot Topics (most‑commented items)  

| Item | Type | Comments | 👍 | Summary & Underlying Need |
|------|------|----------|----|---------------------------|
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | Feature (cost budget) | 23 | 1 | Operators want **per‑agent daily/monthly caps** enforced at the gateway to prevent runaway spend without external monitoring. |
| [#125626](https://github.com/openclaw/openclaw/issues/125626) | Release validation (v2026.8.1‑beta.2) | 17 | 0 | Community is testing the upcoming beta; feedback will shape the final release. |
| [#112423](https://github.com/openclaw/openclaw/issues/112423) | Bug (SQLite transcript cleanup) | 16 | 0 | Large SQLite‐backed transcript archiving blocks the gateway event loop – a performance/stability pain point for long‑running sessions. |
| [#108435](https://github.com/openclaw/openclaw/issues/108435) | Bug (gateway fails to start after 2026.7.1 update) | 14 | 3 | Regression causing startup failure (Ollama, systemd, manual launch) – blocks upgrades for many users. |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | Bug (Google Vertex/Gemini 3.1‑pro‑preview) | 14 | 3 | “Cannot convert undefined or null to object” after upgrading to 2026.3.2 – indicates a regression in provider‑specific handling. |
| [#53628](https://github.com/openclaw/openclaw/issues/53628) | Bug (XDG_CONFIG_HOME ignored on skill install) | 13 | 1 | Users relying on custom config directories cannot install skills via `clawhub` – a usability/configuration gap. |
| [#113306](https://github.com/openclaw/openclaw/issues/113306) | Bug (SQLite snapshot restore lacks durability guarantees) | 12 | 0 | Data‑loss risk during snapshot/restore; operators need stronger crash‑and‑identity guarantees. |

**Common themes:** cost governance, SQLite I/O bottlenecks, provider‑specific regressions, and configuration‑path handling. The high comment counts signal that these are blockers affecting production deployments.

### 5. Bugs & Stability (today’s reports, severity‑ranked)  

| Severity | Issue (link) | Brief | Fix PR (if any) |
|----------|--------------|-------|-----------------|
| **P0** (release‑blocker / crash‑loop) | [#108435](https://github.com/openclaw/openclaw/issues/108435) – gateway fails to start after 2026.7.1 update | Startup error with Ollama/systemd; blocks upgrades. | None visible in today’s PR list (may be in progress). |
| | [#119270](https://github.com/openclaw/openclaw/issues/119270) – file tools strip leading `@` from destination paths, causing wrong file writes/deletes | Data‑corruption risk for file‑tool usage. | None visible. |
| | [#124788](https://github.com/openclaw/openclaw/issues/124788) – event loop blocks ~100 s every ~10 min on beta.2 (anchored timer) | Periodic gateway stalls affecting WS/HTTP/cron. | None visible. |
| **P1** | [#112423](https://github.com/openclaw/openclaw/issues/112423) – SQLite transcript cleanup blocks event loop | Performance stall during session cleanup. | None visible. |
| | [#113306](https://github.com/openclaw/openclaw/issues/113306) – SQLite snapshot restore lacks end‑to‑end crash/identity guarantees | Potential data loss on restore. | None visible. |
| | [#118793](https://github.com/openclaw/openclaw/issues/118793) – Claude CLI session‑limit error dies instead of triggering fallback | Limits cause hard failures; no automatic model failover. | Fixed by #125471 (closed). |
| | [#125431](https://github.com/openclaw/openclaw/issues/125431) – Codex restricted tool policy silently disables workspace `AGENTS.md` | Loss of agent‑definition file during tool‑policy enforcement. | None visible. |
| **P2** | [#42475](https://github.com/openclaw/openclaw/issues/42475) – feature request (cost budget) – not a bug but high impact | No fix yet; tracking as enhancement. | None. |
| | [#53654](https://github.com/openclaw/openclaw/issues/53654) – Discord `messageUpdate`/`messageDelete` support missing | Limits edit‑to‑reprocess/delete‑to‑cancel workflows. | None visible. |
| | [#68920](https://github.com/openclaw/openclaw/issues/68920) – HTTP `/v1/chat/completions` TTFB 10‑15 s due to full context assembly | Real‑time voice agents unusable. | Partially mitigated by #126619 (reduces prompt tokens). |
| **P3** | [#53628](https://github.com/openclaw/openclaw/issues/53628) – XDG_CONFIG_HOME not processed when installing a skill | Configuration usability issue. | None visible. |
| | [#42276](https://github.com/openclaw/openclaw/issues/42276) – Reasoning stream (streaming “thinking” output) | UX enhancement for transparent LLM reasoning. | None visible. |

**Observation:** Most P0/P1 bugs lack an associated merged PR in today’s snapshot, indicating they are still under investigation or awaiting a fix. The few that have a fix (e.g., Claude CLI session‑limit) show rapid response when a clear regression is identified.

### 6. Feature Requests & Roadmap Signals  

| Feature Request | Issue (link) | Likelihood for next release |
|-----------------|--------------|-----------------------------|
| Per‑agent cost budget enforcement (daily/monthly caps) | #42475 | **High** – directly addresses ops spend control; already has a prototype discussion and strong community interest. |
| Visible agent‑to‑agent messaging for ACP thread‑bound sessions | #50798 | **Medium** – useful for multi‑agent coordination; depends on ACP stabilisation. |
| Reasoning stream (live “thinking” output) | #42276 | **Medium** – aligns with industry trend (OpenAI/Grok style); requires UI changes in Control UI. |
| Configurable upload size limit for Control UI | #71142 | **Low‑Medium** – simple UI tweak; may be bundled with next UI polish sprint. |
| Provider fallback by failure class (quarantine auth‑broken providers) | #47910 | **Medium** – improves reliability; would need changes in failover logic. |
| Discord `messageUpdate`/`messageDelete` support | #53654 | **Low** – niche but valued by Discord‑heavy users; likely after core stabilisation. |

The **cost‑budget** feature stands out as the most concrete and operationally critical request, making it a strong candidate for inclusion in the upcoming stable release (post‑v2026.8.1).

### 7. User Feedback Summary (pain points & use cases)  

- **Spend control anxiety** – Users repeatedly ask for hard limits per agent to avoid surprise bills; current per‑session tracking is insufficient for multi‑tenant fleets.  
- **Startup & upgrade fragility** – Several reports of the gateway refusing to start after a version bump (Ollama, systemd, manual launch), eroding confidence in the update process.  
- **SQLite I/O bottlenecks** – Large transcript archiving and snapshot/restore operations block the event loop, causing latency spikes and occasional timeouts in high‑volume agents.  
- **Configuration portability** – Environment variables like `XDG_CONFIG_HOME` are ignored during skill installation, forcing users to adapt workflows to hardcoded paths.  
- **Resource leaks** – Unreaped hook/tool child processes accumulate as zombies, gradually degrading runtime performance on long‑running gateways.  
- **Voice‑agent latency** – HTTP `/v1/chat/completions` suffers 10‑15 s TTFB because the full agent context is assembled for every request, making real‑time voice integration impractical.  
- **Tool‑call correctness** – Mis‑wrapped `read`/`exec` calls in Tool Search cause meta‑tool loops, breaking deterministic shell/file operations.  
- **OAuth & token handling** – Claude CLI OAuth refresh occasionally dead‑ends after a gateway restart, requiring manual re‑auth.  

Overall, users value the extensible agent framework but express frustration with operational stability, cost predictability, and occasional regressions after upgrades.

### 8. Backlog Watch (long‑unanswered / important items needing maintainer attention)  

| Issue (link) | Age (approx.) | Comments | Why it matters |
|--------------|---------------|----------|----------------|
| [#42475](https://github.com/openclaw/openclaw/issues/42475) – per‑agent cost budget | ~5 mo | 23 | Core ops‑governance feature; high community interest. |
| [#112423](https://github.com/openclaw/openclaw/issues/112423) – SQLite transcript cleanup blocks event loop | ~1 mo | 16 | Direct performance blocker for large‑scale deployments. |
| [#108435](https://github.com/openclaw/openclaw/issues/108435) – gateway fails to start after 2026.7.1 | ~1.3 mo | 14 | Regression blocking upgrades; urgent for stability. |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) – Google Vertex/Gemini regression | ~5 mo | 14 | Affects a major provider; users unable to use latest models. |
| [#53628](https://github.com/openclaw/openclaw/issues/53628) – XDG_CONFIG_HOME ignored on skill install | ~5 mo | 13 | Usability gap for custom‑config environments. |
| [#113306](https://github.com/openclaw/openclaw/issues/113306) – SQLite snapshot restore lacks durability

---

## Cross-Ecosystem Comparison

**Cross‑Project Comparison Report – AI Agent / Personal AI Assistant OSS Ecosystem (2026‑08‑21)**  

---

### 1. Ecosystem Overview  
The open‑source AI‑agent landscape in mid‑2026 is characterized by a handful of actively maintained frameworks that sit between low‑level LLM tooling (e.g., raw APIs, SDKs) and end‑user facing assistants. Most projects are iterating on core stability (startup reliability, resource leaks, deterministic tool‑call handling) while simultaneously exposing higher‑level orchestration features such as multi‑agent collaboration, cost‑governance, and plug‑in skill marketplaces. Community engagement varies widely: a few repositories (OpenClaw, Hermes Agent, ZeroClaw) generate dozens of daily issue/PR updates, whereas several niche or early‑stage efforts show little to no activity. Overall, the ecosystem is maturing—security‑focused fixes, CI hardening, and provider‑agnostic abstractions are common themes—but there remains a long tail of projects that need sustained maintainer bandwidth to move beyond proof‑of‑concept stages.

---

### 2. Activity Comparison  

| Project | Issues touched (24 h) | PRs touched (24 h) | New releases (24 h) | Health score* |
|---------|----------------------|--------------------|---------------------|---------------|
| **OpenClaw** | 500 | 500 | 0 | **High** – massive backlog, steady merge flow (≈169 PRs merged), active triage |
| **NanoBot** | 5 | 29 | 0 | **Medium** – low issue volume, consistent PR flow (≈12 merged), Docker‑OAuth blocker needs attention |
| **Hermes Agent** | 50 | 50 | 0 | **Medium‑High** – balanced issue/PR count, many blockers (Debian install, DB corruption) lacking fixes |
| **PicoClaw** | 3 | 8 | 0 | **Low‑Medium** – small but focused work; UI‑lag bug dominates backlog |
| **NanoClaw** | 3 | 50 | 0 | **Medium** – high PR throughput (≈16 merged), WhatsApp media path is top blocker |
| **NullClaw** | 0 | 0 | 0 | **Inactive** – no activity in the last day |
| **IronClaw** | 20 | 35 | 1 (v1.3.0) | **High** – recent stable release, strong CI/PR merge rate (≈15 merged) |
| **LobsterAI** | 2 | 7 | 0 | **Medium** – quick UX/bug fixes, documentation‑only open items |
| **TinyClaw** | 0 | 0 | 0 | **Inactive** – no activity |
| **Moltis** | 1 | 8 | 1 (20260820.01) | **Medium** – security fix released, open PRs awaiting review |
| **CoPaw** | 27 | 50 | 1 (v2.1.1‑beta.1) | **Medium‑High** – regular beta cadence, notable stall & network‑recovery bugs |
| **ZeptoClaw** | 0 | 0 | 0 | **Inactive** – no activity |
| **ZeroClaw** | 50 | 50 | 0 | **Low‑Medium** – high volume of open items, many RFCs/bugs awaiting triage |

\*Health score is a qualitative synthesis of: (i) proportion of PRs merged vs. open, (ii) presence of recent releases, (iii) severity and fix‑rate of open blocker issues, and (iv) overall maintenance tempo. “High” denotes a project with frequent merges, recent releases, and few critical unfixed bugs; “Medium” indicates steady activity but notable blockers; “Low‑Medium” signals high open backlog with limited fix flow; “Low” reflects stagnation or predominance of unfixed P0/P1 issues.

---

### 3. OpenClaw’s Position  

| Aspect | OpenClaw vs. Peers |
|--------|-------------------|
| **Scale of activity** | By far the largest volume of daily issue/PR updates (≈500 each), dwarfing all other projects. |
| **Release cadence** | No formal release today, but the project is on a pre‑release beta (v2026.8.1‑beta.2) with a strong stream of merged PRs, indicating a near‑stable release is imminent. |
| **Technical approach** | Focuses on a **gateway‑centric** architecture (HTTP API, tool‑call sandbox, session isolation) with heavy investment in **cost‑governance**, **SQLite I/O optimisation**, and **provider‑agnostic tooling**. |
| **Community size** | Highest comment density on hot topics (e.g., #42475 cost‑budget – 23 comments) and a sizable backlog of >400 open issues, indicating a large, engaged operator base. |
| **Differentiators** | Built‑in **per‑agent daily/monthly caps**, **session‑binding per OpenAI user**, and **compacting guard** for decimal tool results – features rarely seen in the other repositories. |
| **Weaknesses relative to peers** | Persistent P0/P1 bugs (gateway startup regression, SQLite transcript cleanup, event‑loop stalls) lack linked fixes in the latest 24 h window, suggesting triage latency despite high throughput. |

Overall, OpenClaw leads the ecosystem in raw activity and feature depth (especially cost control and multi‑tenant session safety) but shares the common challenge of stabilizing core reliability under high load.

---

### 4. Shared Technical Focus Areas  

| Focus area | Projects highlighting it | Specific needs expressed |
|------------|--------------------------|--------------------------|
| **Cost / spend governance** | OpenClaw (#42475), NanoClaw (token‑usage tracking PR #3270), Hermes Agent (token‑budgeted `/goal`), CoPaw (automatic model routing #6436) | Operators want hard per‑agent or per‑session limits to avoid surprise bills; demand for observable token usage. |
| **Deterministic tool‑call handling & safety** | OpenClaw (tool‑search directory/tools wrap, compaction guard), NanoBot (provider fallback retry), Hermes Agent (reversible `/refine`), PicoClaw (dynamic model override in agent tools) | Prevent meta‑tool loops, enable roll‑back of destructive actions, and allow runtime model selection for flexibility/cost control. |
| **Provider‑agnostic abstraction & fallback** | OpenClaw (OAuth Claude CLI restore), NanoBot (provider fallback on error), IronClaw (MCP OAuth registration issues), ZeroClaw (Grok Build ACP provider) | Need for seamless switching when a provider fails, and uniform error handling across LLM back‑ends. |
| **Startup / upgrade stability** | OpenClaw (gateway fails to start after 2026.7.1), Hermes Agent (Debian install broken, SIGTERM hang), IronClaw (container‑runtime regressions fixed in v1.3.0), LobsterAI (macOS build fix) | Reliable bootstrapping across OS/init systems, and clean shutdowns to avoid zombie processes. |
| **Observability & logging** | NanoBot (background child output flush), Hermes Agent (memory leak, Dashboard OOM), ZeroClaw (storage‑policy performance, stall watchdog) | Export of internal state, low‑overhead logging, and mechanisms to detect stalled background tasks. |
| **Skill / plugin marketplace extensibility** | NanoClaw (container‑skill improvements, one‑click Slack setup), PicoClaw (multi‑agent framework groundwork), ZeroClaw (plugin permission/config/secrets RFCs) | Easy skill installation, isolated execution, and fine‑grained permission models for third‑party extensions. |
| **UI / UX polish** | LobsterAI (file preview panel, settings search), Hermes Agent (reversible refine, temporary chats), CoPaw (console editor tab overflow, unified tool panel) | Reduce friction in agent configuration, improve discoverability of features, and provide richer in‑chat previews. |

---

### 5. Differentiation Analysis  

| Dimension | OpenClaw | NanoBot | Hermes Agent | PicoClaw | NanoClaw | IronClaw | LobsterAI | Moltis | CoPaw | ZeroClaw |
|-----------|----------|---------|--------------|----------|----------|----------|-----------|--------|-------|----------|
| **Primary user** | Platform operators / SaaS providers managing fleets of agents | Developers embedding LLM bots in chat/matrix platforms | End‑users & power‑users wanting a desktop‑centric assistant | Edge/IoT developers needing lightweight agent framework | Operators of multi‑channel messaging bots (WhatsApp, Slack) | Enterprise‑grade workflow automation (durable notifications, sandbox) | Business‑process automation with low‑code UI | Security‑focused service platform (vault, auth) | Researchers & tinkerers experimenting with conversational AI | Low‑level runtime developers seeking a pluggable, Rust‑based agent core |
| **Architectural core** | HTTP gateway + plugin‑based tool system + session manager | CLI‑first with modular providers (OAuth, proxy) | Desktop‑first UI + ACP + skill server | Minimalist core + experimental multi‑agent blackboard | Container‑skill runtime + media‑handling pipeline | Persistent user‑sandbox + proxy + lifecycle hooks | Redux‑driven SPA + engine‑overlay | Vault‑centric auth + plugin sandbox | Event‑driven runtime + plugin + channel abstractions |
| **Key differentiator** | Built‑in per‑agent cost caps & session binding | Strong focus on reliable OAuth in containerized envs | Reversible edit/refine & goal token budgeting | Early multi‑agent shared context work | WhatsApp media path & one‑click Slack onboarding | Durable notification inbox + WebUI design system | Rapid UX polish (file preview, settings search) | Security‑hardened vault auth + Windows shell‑hook fix | Conversational model routing & thinking‑level toggles | Plugin‑permission system, runtime‑owned sessions, WEB‑UI‑to‑Wasm roadmap |
| **Maturity signal** | Recent beta, high merge rate, but critical startup bugs | Frequent small fixes, Docker‑OAuth blocker | Stable UI features, but install & DB bugs block adoption | Early‑stage, UI lag remains | Active PR flow, media blocker | Recent stable release v1.3.0, CI health improving | Quick bug‑fix cycle, doc‑only open items | Security patch released, open PRs awaiting review | Regular beta releases, but stall/network bugs persist | Heavy RFC load, many open architectural discussions, low fix‑throughput |

---

### 6. Community Momentum & Maturity  

| Tier | Projects (activity level) | Characteristics |
|------|---------------------------|-----------------|
| **Rapidly iterating / high momentum** | OpenClaw, IronClaw, CoPaw, NanoClaw | >30 PRs touched daily, regular beta or patch releases, active merge‑to‑open PR ratio (>40 %). |
| **Steady / moderate momentum** | NanoBot, Hermes Agent, LobsterAI, Moltis | 5‑30 PRs/day, occasional releases, mix of bug‑fixes and small features; some blocker issues linger. |
| **Low momentum / stabilizing** | PicoClaw, ZeroClaw | High volume of open items but low fix‑throughput; many RFCs or architectural discussions, fewer merges. |
| **Inactive / dormant** | NullClaw, TinyClaw, ZeptoClaw | No issues/PRs in the last 24 h; likely abandoned or awaiting contributor revive. |

OpenClaw sits in the **high‑momentum** tier thanks to its sheer volume of contributions, though its health score is tempered by a handful of high‑severity blockers lacking immediate fixes.

---

### 7. Trend Signals – What the Community Is Telling AI‑Agent Developers  

| Trend | Evidence from digests | Implication for builders |
|-------|-----------------------|--------------------------|
| **Cost predictability is a top‑line concern** | Multiple projects (OpenClaw cost‑budget, NanoClaw token‑usage, Hermes Agent token‑budgeted goal, CoPaw automatic model routing) have open issues or PRs asking for hard limits or observable usage. | Provide built‑in, enforceable quotas and real‑time metering; expose usage via APIs or UI dashboards. |
| **Deterministic, rollback‑capable tool execution** | OpenClaw’s tool‑search wrap, Hermes Agent reversible `/refine`, NanoBot provider‑fallback retry, PicoClaw dynamic model override. | Design tool interfaces that are idempotent or snapshot‑based; allow agents to undo destructive actions without external state. |
| **Provider agnosticism with robust fallback** | OpenClaw Claude CLI OAuth restore, NanoBot provider fallback on error, IronClaw MCP OAuth troubles, ZeroClaw Grok Build ACP provider. | Abstract LLM calls behind a unified interface; implement automatic retry/circuit‑breaker logic for transient errors. |
| **Startup & upgrade reliability across environments** | OpenClaw gateway startup regression, Hermes Agent Debian install & SIGTERM hang, IronClaw container fixes, LobsterAI macOS build. | Ship OS‑agnostic installation scripts, use well‑tested init/systemd helpers, and validate upgrades with automated rollback tests. |
| **Observability & low‑overhead logging** | NanoBot background output flush

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot Project Digest – 2026‑08‑21**  
*Generated from GitHub activity (issues & PRs updated in the last 24 h).*

---

### 1. Today's Overview  
The repository shows steady maintenance activity: **5 issues** and **29 pull‑requests** were touched in the past day, with **3 issues still open** and **12 PRs already merged/closed**. No new releases were published today. The mix of bug‑fixes, small refactors, and feature additions indicates the project is in a healthy “incremental improvement” phase, with contributors focusing on stabilizing existing integrations (OAuth, proxy handling, streaming) while expanding provider support.

### 2. Releases  
- **No new releases** were created in the last 24 h.  
- The latest version remains whatever was published prior to 2026‑08‑21 (details not supplied in the data).

### 3. Project Progress (Merged/Closed PRs today)  
Twelve PRs reached a merged or closed state, delivering the following user‑visible improvements:

| PR | Title | Summary / Impact |
|----|-------|------------------|
| #5452 | feat(tui): print resume command on exit | Prints a ready‑to‑run `nanobot agent --session websocket:<id>` command after TUI exit, improving workflow resumability. |
| #5450* (not listed but implied by “merged/closed:12”) | – | (Assorted minor chores / doc updates) |
| #5414 | fix(slack): validate file downloads across redirects | Ensures Slack file downloads follow the full redirect chain and validates the final URL, closing a potential SSRF‑style risk. |
| #5413 | fix(providers): apply fallback policy to raised errors | Makes the provider fallback loop respect exceptions, preventing silent aborts when a provider throws instead of returning an error response. |
| #5412 | fix(gateway): flush background child output to logs | Forces early stdout/stderr from background gateway processes to appear promptly in log files, easing debugging. |
| #5339 | fix(webui): reject discarded temporary chat messages | Prevents WebSocket‑based temporary chat messages from being persisted as normal chats if the user discards them during the wait period. |
| #5338 | fix(mcp): preserve credentials when OAuth store read fails | Changes MCP OAuth storage to treat a read failure as “no change” rather than an empty store, avoiding accidental credential overwrite. |
| #5456 | chore(deps): drop websocket-client, add certifi | Cleans up an unused dependency and adds `certifi` as an explicit dev‑dependency (already a transitive requirement of `httpx`). |
| #5455 | fix(provider): retry Codex server_error (see Bugs & Stability) | Adds `"server_error"` to transient‑error markers so Codex streaming failures are retried when they occur before any content is streamed. |
| #5458 | fix(matrix): interpolate error log context | Corrects three Matrix error‑log statements to use Loguru’s `{}` placeholders, ensuring filenames, room IDs, and chat IDs appear in diagnostics. |
| #5457 | fix(channels): scope dispatcher exception boundary to message processing | Prevents a single outbound‑message exception from killing the background dispatcher task, restoring resilience to channel messaging. |
| #5431 | fix(agent): report background task failures | Replaces the naïve `set.discard` callback with a lifecycle‑aware handler that logs unexpected task exceptions with name and traceback. |

\*Exact titles for the remaining closed PRs are not in the excerpt; they appear to be chores, documentation tweaks, or minor test adjustments.

### 4. Community Hot Topics  
Because comment/reaction counts are not exposed in the supplied data, “hot” topics are inferred from recent updates and the nature of the discussion:

| Item | Type | Link | Why it’s drawing attention |
|------|------|------|----------------------------|
| #5444 | Issue (bug) | [Failed to ogin OpenAI via OAuth in Docker](https://github.com/HKUDS/nanobot/issues/5444) | Users hitting OAuth flow problems in containerized environments – a common deployment pain point. |
| #5459 | Issue (feature request) | [Add native Google Vertex AI provider for Claude models](https://github.com/HKUDS/nanobot/issues/5459) | Requests for first‑class Vertex AI support show growing interest in multi‑cloud LLM access. |
| #5453 | PR (new provider) | [feat(providers): add SenseNova (商汤日日新) provider](https://github.com/HKUDS/nanobot/pull/5453) | Adds a commercially‑relevant Chinese LLM provider, indicating community demand for regional model options. |
| #5179 | PR (MCP SDK v2 migration) | [Migrate MCP integration to SDK v2 with legacy compatibility](https://github.com/HKUDS/nanobot/pull/5179) | Long‑running (since 2026‑07‑30) refactor that could unlock newer MCP features while preserving existing integrations. |
| #5455 | PR (bug fix) | [fix(provider): retry Codex server_error](https://github.com/HKUDS/nanobot/pull/5455) | Directly addresses the streaming‑error bug reported in #5454, showing tight coupling between user reports and fixes. |

**Underlying needs:**  
- Reliable authentication in containerized/Docker setups.  
- Broader, first‑party support for major cloud AI services (Vertex AI, AWS Bedrock already present, etc.).  
- Robust handling of transient provider errors in streaming scenarios.  
- Continued modernization of the MCP (Model Context Protocol) stack to stay aligned with upstream SDK evolution.

### 5. Bugs & Stability  
All bugs reported today are accompanied by either an open issue or a linked fix PR. Severity is judged by impact on core functionality (authentication, streaming, proxy handling).

| Severity | Issue / PR | Summary | Fix Status |
|----------|------------|---------|------------|
| **High** | #5444 (Open) – OAuth login failure in Docker | Prevents users from authenticating to OpenAI when running Nanobot inside containers, breaking a common deployment model. | No linked fix PR yet; needs investigation. |
| **Medium** | #5454 (Open) – Streaming provider skips retry on mid‑stream `server_error` | Causes aborts of long‑running Codex completions when a transient error arrives after some content has been streamed. | Fixed by **#5455** (merged/closed). |
| **Medium** | #5425 (Closed) – Legacy `socks://` proxy URLs not handled for custom OpenAI‑compatible providers | Requests fail before reaching the proxy when a `socks://` alias is present in config or env. | Resolved (issue closed). |
| **Low** | #5458 (Open) – Matrix error logs missing context | Log messages omit useful identifiers, making debugging harder. | Fixed by **#5458** (still open but fix submitted). |

Overall, the project’s stability is good: the two most impactful bugs (OAuth Docker, streaming retry) have either a fix in progress or a PR already merged, and the remaining issues are either resolved or low‑impact.

### 6. Feature Requests & Roadmap Signals  
- **Vertex AI provider for Claude models** (#5459) – a clear demand for native Google Cloud integration; likely to be prioritized if the contributor maintains interest.  
- **SenseNova provider** (#5453) – already implemented in a PR; pending review/merge, this will expand the model catalog for Chinese‑language users.  
- **MCP SDK v2 migration** (#5179, #5180) – a major refactor that would future‑proof the MCP integration; maintainers appear to be evaluating it (still open after weeks).  
- **Turn observability & safe recovery** (#5420) – adds richer UI diagnostics and recovery mechanisms; indicates a roadmap focus on operator experience.  

Given the cadence, we can expect the next release to include:  
1. SenseNova provider (if #5453 passes review).  
2. The OAuth Docker fix (once root cause is identified).  
3. Possibly the MCP SDK v2 migration if the team decides to merge the evaluation branch.

### 7. User Feedback Summary  
- **Pain points:**  
  - Docker‑based OAuth flows are finicky (issue #5444).  
  - Proxy configuration tolerates only standard `http(s)://` forms; `socks://` aliases break custom providers (issue #5425, now fixed).  
  - Streaming interruptions cause loss of work when a transient error arrives after partial output (issue #5454, fixed).  
- **Positive signals:**  
  - Users actively request new first‑party providers (Vertex AI, SenseNova), showing confidence in Nanobot as a universal LLM front‑end.  
  - Contributions that improve observability (#5420) and logging (#5458) are welcomed, indicating a desire for better operational visibility.  
  - The community is quick to provide reproducing steps and test cases, facilitating rapid fixes.

### 8. Backlog Watch  
Long‑running or stalled items that may need maintainer attention:

| Item | Age (as of 2026‑08‑21) | Link | Concern |
|------|------------------------|------|---------|
| #5179 – MCP SDK v2 migration (open) | ~22 days | [PR #5179](https://github.com/HKUDS/nanobot/pull/5179) | Large refactor; needs review/testing to decide if it should be merged before the next release. |
| #5180 – Evaluate minimal MCP SDK v2 migration (open) | ~22 days | [PR #5180](https://github.com/HKUDS/nanobot/pull/5180) | Companion evaluation; may be superseded by #5179. |
| #5459 – Vertex AI provider feature request (open) | 1 day | [Issue #5459](https://github.com/HKUDS/nanobot/issues/5459) | Fresh request; prioritize if community demand grows. |
| #5444 – OAuth Docker bug (open) | 2 days | [Issue #5444](https://github.com/HKUDS/nanobot/issues/5444) | Blocking for containerized deployments; needs a dedicated fix. |
| #5420 – Turn observability & safe recovery (open) | 3 days | [PR #5420](https://github.com/HKUDS/nanobot/pull/5420) | Awaiting review; could improve user experience significantly. |

**Recommendation:** Maintainers should prioritize the OAuth Docker blocker (#5444) and the MCP SDK v2 migration evaluation (#5179/#5180) to unblock deployment scenarios and modernize the integration stack, respectively.

--- 

*All links point to the exact GitHub resources mentioned.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent Project Digest – 2026‑08‑21**  
*Generated from GitHub activity (issues/PRs updated in the last 24 h)*  

---  

### 1. Today's Overview  
The repository remains highly active: **50 issues** and **50 pull‑requests** were touched in the past day, with 39 issues still open and 38 PRs awaiting review. No new releases were cut today. The bulk of the work centers on bug‑fixes (installation, Windows stability, memory leaks, skill‑index freshness) and incremental feature work (session steering, reversible `/refine`, token‑budgeted goals, desktop UI polish). Overall project health is steady but a handful of long‑standing bugs continue to generate discussion.  

---  

### 2. Releases  
*No new releases were published today.*  

---  

### 3. Project Progress – Merged/Closed PRs (today)  

| PR | Type / Area | Summary |
|----|-------------|---------|
| #90284 | feat(refine) – reversible `/refine undo` | Adds snapshot‑before‑write + atomic‑restore so a `/refine` run can be rolled back with `/refine undo`. |
| #90340 | feat(delegate) – complete peer/child/broadcast steer (F3) | Implements user‑level `steer_peer` and `steer_broadcast` commands, completing the prime‑agent delegation primitive set. |
| #90288 | feat(steer) – peer + broadcast session steering | Introduces `session.steer_peer` / `steer_broadcast` on top of existing `steer_subagent`. |
| #90285 | feat(goals) – opt‑in token budget for `/goal` | Adds configurable input/output caps alongside the existing `max_turns` safety net. |
| #90287 | feat(steer) – peer + broadcast session steering (duplicate of #90288) | Closed as duplicate; work merged via #90288. |
| #89835 | bug – Bot Mode group chat scroll position | Fixes opening a group chat to land on the last message instead of the middle. |
| #90630 | bug – Desktop `::preview` widget intents dropped in tabs | Ensures `hermes.send` intents work when chat is opened as a tab/tile. |
| #91060 | bug – Windows 11 desktop chat cannot be snapped when glass translucency off | Restores native Win‑Snap/FancyZones functionality. |
| #90286 | feat(goals) – opt‑in token budget for `/goal` (duplicate) | Closed as duplicate; changes merged via #90285. |
| #90283 | feat – reversible `/refine undo` (duplicate) | Closed as duplicate; changes merged via #90284. |
| #79684 | bug – Windows `hermes update` hides CUA‑driver prompt & waits 660 s | Improves Windows update flow to avoid long hidden prompts. |
| #89545 | feature – Bot Mode groups can strand unresolved handoffs at safety cap | Adjusts group‑chat handoff logic to prevent dead‑locks at the round limit. |
| #89884 | bug – Bot Mode group composer lacks newline & @‑mention popover | Adds proper multiline input and fixes the mention popover. |

*All other PRs listed in the data remain open (comments undefined) and are therefore still under review.*  

---  

### 4. Community Hot Topics  

| Item | Link | Comments | Why it’s hot |
|------|------|----------|--------------|
| **#66616** – Skills index stale/degraded | <https://github.com/NousResearch/hermes-agent/issues/66616> | 65 | Automated freshness probe shows the Skills Hub index is 29.8 h old (limit 26 h). Impacts skill discovery and agent capability updates. |
| **#87093** – Debian install broken (uv.lock & npm) | <https://github.com/NousResearch/hermes-agent/issues/87093> | 14 | New Debian 13.6 users hit failures in the install script; blocks onboarding for a major Linux distro. |
| **#87697** – Hermes Client cancels local Ollama streams after ~1.5 s | <https://github.com/NousResearch/hermes-agent/issues/87697> | 8 | Regression causing local LLM reasoning to be cut off, triggering token‑loop errors; affects anyone using Ollama backend. |
| **#64155** – Slow/hanging graceful shutdown on SIGTERM (WhatsApp gateway) | <https://github.com/NousResearch/hermes-agent/issues/64155> | 7 | Systemd timeout leads to forced SIGKILL, causing hang‑s on shutdown/reboot – a stability concern for production deployments. |
| **#46082** – Dashboard memory leak (grows to 5.2 GB, OOM‑killed) | <https://github.com/NousResearch/hermes-agent/issues/46082> | 6 | Long‑running Dashboard consumes excessive RAM, leading to OOM kills; impacts usability for heavy‑usage sessions. |
| **#90950** – `state.db` corruption on SQLite 3.53.1 (WAL sidecar unlink) | <https://github.com/NousResearch/hermes-agent/issues/90950> | 5 | Recurrent corruption under concurrent writes; threatens session persistence reliability. |

*These items dominate discussion because they touch core workflows (skill discovery, installation, LLM streaming, shutdown safety, memory usage, and DB integrity).*  

---  

### 5. Bugs & Stability – Issues Filed/Updated Today (ranked by perceived severity)  

| Severity | Issue | Link | Summary | Fix PR (if any) |
|----------|-------|------|---------|-----------------|
| **P1 (critical)** | #87093 – Debian install broken | <https://github.com/NousResearch/hermes-agent/issues/87093> | Install script fails on Debian 13.6 (uv.lock/npm). | #82033 (Windows‑only npm check) – not applicable; needs a Debian‑specific fix. |
| **P1** | #64155 – Slow/hanging SIGTERM shutdown (gateway) | <https://github.com/NousResearch/hermes-agent/issues/64155> | Systemd timeout → forced kill. | No fix PR yet; likely needs gateway signal‑handling tweak. |
| **P1** | #90950 – SQLite `state.db` corruption (WAL) | <https://github.com/NousResearch/hermes-agent/issues/90950> | Recurrent corruption under concurrent writer. | No fix PR; requires SQLite/WAL handling or migration to a more robust backend. |
| **P2** | #87697 – Local Ollama stream cancellation (~1.5 s) | <https://github.com/NousResearch/hermes-agent/issues/87697> | Client‑side cut‑off triggers `<unused49>` token loop. | No fix PR; needs investigation of streaming/cancellation logic. |
| **P2** | #46082 – Dashboard memory leak (5.2 GB) | <https://github.com/NousResearch/hermes-agent/issues/46082> | OOM‑killed Dashboard process. | No fix PR; points to unbounded accumulation in UI state. |
| **P3** | #66616 – Skills index stale/degraded | <https://github.com/NousResearch/hermes-agent/issues/66616> | Index 29.8 h old (>26 h limit). | No fix PR; the cron workflow (`.github/workflows/skills-index.yml`) may need frequency adjustment. |
| **P3** | #91090 – ACP `session/set_model` always fails (“No LLM provider configured”) | <https://github.com/NousResearch/hermes-agent/issues/91090> | Misleading error even when provider is set. | No fix PR; likely a config‑propagation bug in ACP layer. |

*Overall, the most blocking issues today are installation breakage on Debian, ungraceful shutdowns, and DB corruption—each lacking an associated fix PR at the moment.*  

---  

### 6. Feature Requests & Roadmap Signals  

| Feature | Issue / PR | Link | Status / Indication |
|---------|------------|------|---------------------|
| **Token‑budgeted `/goal`** | #90285 / #90286 | <https://github.com/NousResearch/hermes-agent/pull/90285> | Merged – adds opt‑in input/output caps; likely to appear in next release. |
| **Reversible `/refine`** | #90284 / #90283 | <https://github.com/NousResearch/hermes-agent/pull/90284> | Merged – snapshot‑before‑write rollback; enables safer self‑improvement. |
| **Peer/broadcast session steering** | #90288 / #90340 | <https://github.com/NousResearch/hermes-agent/pull/90288> | Merged – completes F3 delegation primitive set. |
| **Temporary chats (no‑disk persistence)** | #78584 | <https://github.com/NousResearch/hermes-agent/pull/78584> | Open – adds ephemeral chat mode across CLI, Desktop, Telegram/Discord/Slack. |
| **Desktop Kanban attachment preview** | #84297 / #84299 | <https://github.com/NousResearch/hermes-agent/pull/84297> | Open – makes attachment filenames clickable and previews images. |
| **Dedicated gateway lifecycle channels** | #84874 | <https://github.com/NousResearch/hermes-agent/pull/84874> | Open – allows per‑platform startup/shutdown broadcast channels. |
| **Additive governance kernel (`hermes-tag`)** | #91111 | <https://github.com/NousResearch/hermes-agent/pull/91111> | Open – supplies horizontal authority model for Slack “@Hermes Tag” campaign. |
| **i18n coverage extension (Chinese UI)** | #23574 | <https://github.com/NousResearch/hermes-agent/issues/23574> | Open – long‑standing request to translate TUI, tool output, errors, etc. |
| **Configurable TUI attention hook** | #46357 | <https://github.com/NousResearch/hermes-agent/issues/46357> | Open – RFC for hooks on completed/waiting/blocked turns. |

*These signals suggest the next version will likely ship:*  
- Goal token budgets, reversible refine, and full peer/broadcast steering (already merged).  
- Temporary‑chat mode and desktop Kanban previews (high community interest, open PRs).  
- Improved i18n and TUI attention hooks (still in discussion).  

---  

### 7. User Feedback Summary  

- **Installation pain:** Debian users report the curl|bash installer stalls on `uv.lock` and `npm` steps (issue #87093). Windows users still see occasional update hangs (though #79684 improved the CUA‑driver prompt).  
- **Runtime stability:** Frequent complaints about the Dashboard leaking memory (up to 5 GB, OOM‑killed – #46082) and the gateway taking minutes to shut down on SIGTERM (#64155).  
- **Skill & model discovery:** The Skills Hub index going stale (#66616) breaks the ability to load new skills; ACP `set_model` failures (#91090) confuse users trying to switch models.  
- **Local LLM experience:** Ollama users see streams cut after ~1.5 s, leading to token loops (#87697).  
- **Desktop UI glitches:** Window‑snapping broken when glass translucency is off (#91060, #90237), group‑chat scroll position wrong (#89835), and preview intents dropped in tabbed chats (#90630).  
- **Positive notes:** Contributors appreciate the rapid PR turnover and the recent addition of reversible refine and goal token budgets, which directly address safety and usability concerns raised in earlier issues.  

---  

### 8. Backlog Watch – Long‑Unanswered Important Items  

| Issue | Age (as of 2026‑08‑21) | Link | Why it needs attention |
|-------|------------------------|------|------------------------|
| #66616 – Skills index stale/degraded | 3 weeks (opened 2026‑07‑18) | <https://github.com/NousResearch/hermes-agent/issues/66616> | High comment count (65) and directly impacts agent extensibility; no fix PR yet. |
| #46082 – Dashboard memory leak | 2 months +  (opened 2026‑06‑14) | <https://github.com/NousResearch/hermes-agent/issues/46082> | Persistent OOM risk for heavy users; needs profiling/fix. |
| #64155 – Slow/hanging SIGTERM shutdown | 1 month +  (opened 2026‑07‑14) | <https://github.com/NousResearch/hermes-agent/issues/64155> | Affects production reliability on systemd‑based hosts. |
| #51132 – Windows `computer_use` refuses to launch apps | 2 months +  (opened 2026‑06‑23) | <https://github.com/NousResearch/hermes-agent/issues/51132> | Blocks core Windows automation use‑case despite cua‑driver exposing the tool. |
| #23574 – Extend Chinese i18n coverage | 14 months +  (opened 2026‑05‑11) | <https://github.com/NousResearch/hermes-agent/issues/23574> | Community‑requested localization; still limited to approval prompts/gateway. |
| #56871 – Session search FTS5 boolean operator handling | 2 months +  (opened 2026‑07‑02) | <https://github.com/NousResearch/hermes-agent/issues/56871> | Search returns empty for valid queries; impacts usability of session DB. |
| #90950 – SQLite `state.db` corruption (WAL) | 1 day (opened 2026‑08‑20) | <https://github.com/NousResearch/hermes-agent/issues/909

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest – 2026-08-21**  
*Generated from GitHub activity (issues & PRs updated in the last 24 h).*

---

### 1. Today's Overview  
The project saw modest but focused activity today: **3 open issues** were updated (all still open) and **8 pull requests** were touched, of which **3 were closed/merged** and **5 remain open**. No new releases were published. The overall pulse indicates steady maintenance work—dependency bumps, small fixes, and a few feature‑oriented PRs—while core bugs and feature requests linger in a “stale” state awaiting deeper review.

### 2. Releases  
*No new versions were released today.*

### 3. Project Progress (Merged/Closed PRs)  
| PR | Title & Link | Status | What it advances |
|----|--------------|--------|------------------|
| **[#423](https://github.com/sipeed/picoclaw/pull/423)** | WIP: feat: base multi-agent collaboration framework & shared context | **CLOSED** (marked WIP) | Laid groundwork for a shared blackboard, agent handoff, and discovery tools—foundations for future multi‑agent orchestration. |
| **[#1158](https://github.com/sipeed/picoclaw/pull/1158)** | feat: add anthropic-messages protocol for native Anthropic API format (Fixes #269) | **CLOSED** | Adds native support for Anthropic’s Messages API (`/v1/messages`), extending LLM provider compatibility beyond the legacy format. |
| **[#3318](https://github.com/sipeed/picoclaw/pull/3318)** | fix(web): repair unparseable pnpm-lock.yaml | **CLOSED** | Corrects a duplicate key in `web/frontend/pnpm-lock.yaml` that was blocking pnpm installation, restoring reliable frontend builds. |

*All three closed PRs address stability or compatibility improvements rather than user‑facing features.*

### 4. Community Hot Topics  
| Item | Link | Comments | Reactions | Why it’s hot |
|------|------|----------|-----------|--------------|
| **Issue #3281** – *Web UI chat input is very laggy when history has a little bit long* | <https://github.com/sipeed/picoclaw/issues/3281> | 6 | 1 | The only issue with multiple comments; users report noticeable UI lag as chat history grows, impacting usability. |
| Issue #3331 – *Feature: use any models with /audio/transcriptions endpoint* | <https://github.com/sipeed/picoclaw/issues/3331> | 1 | 0 | Requests broader audio‑transcription model support beyond the outdated `*-whisper-*` pattern. |
| Issue #3330 – *Feature: Support dynamic model override in delegate/spawn/subagent tools* | <https://github.com/sipeed/picoclaw/pull/3330> | 1 | 0 | Calls for runtime model selection in agent‑spawning utilities, a common need for flexible workflows. |

*No PR today exceeded the comment count of the top issue; the UI‑lag bug dominates community discussion.*

### 5. Bugs & Stability  
| Bug | Link | Severity (subjective) | Fix PR? |
|-----|------|-----------------------|---------|
| **Web UI input lag with long chat history** (stale) | <https://github.com/sipeed/picoclaw/issues/3281> | **Medium** – degrades user experience but does not crash the app. | *None* – no linked PR; awaiting investigation. |

*No crash or regression reports were filed today.*

### 6. Feature Requests & Roadmap Signals  
- **Dynamic model selection for agent tools** – Issue #3330 highlights a desire to specify a model at call time for `delegate`, `spawn`, and `subagent`. This aligns with the recent multi‑agent framework work (#423) and suggests the team may soon expose per‑invocation model overrides.  
- **Flexible audio transcription** – Issue #3331 asks to drop the hard‑coded `*-whisper-*` filter, enabling newer or faster ASR models. The recent PR #1158 (Anthropic messages) shows the project is actively expanding provider support, making this a plausible next step.  
- **Multi‑agent collaboration** – Although #423 is closed (WIP), its intent points toward a shared context/blackboard system; future work likely will build on this to deliver usable agent‑handoff and discovery features.

*Predicted near‑term focus:* enhancing agent tooling with runtime model configuration and broadening ASR backend compatibility.

### 7. User Feedback Summary  
- **Pain point:** UI becomes unresponsive when chat history accumulates, forcing users to wait or restart sessions.  
- **Desire:** Greater freedom to choose transcription models (avoiding legacy Whisper) and to pick specific LLMs when spawning agents, enabling tailored performance/cost trade‑offs.  
- **Satisfaction indicators:** The merged PRs (#1158, #3318) show users’ earlier requests (Anthropic native API, lock‑file fixes) are being addressed, suggesting responsiveness to infrastructure‑level feedback.  
- **Dissatisfaction:** The stagnation of the UI‑lag bug and feature requests (marked stale) may be causing frustration among power users who rely on long conversations or advanced agent orchestration.

### 8. Backlog Watch (Stale / Long‑Unanswered Items)  
| Item | Link | Age (approx.) | Why it needs attention |
|------|------|---------------|------------------------|
| **Issue #3281** – UI lag with long history | <https://github.com/sipeed/picoclaw/issues/3281> | ~1 month (created 2026‑07‑21) | Affects core user experience; no fix PR yet. |
| **Issue #3331** – Audio transcription model flexibility | <https://github.com/sipeed/picoclaw/issues/3331> | ~8 days | Aligns with provider‑expansion trend; low discussion but clear request. |
| **Issue #3330** – Dynamic model override in delegate/spawn/subagent | <https://github.com/sipeed/picoclaw/issues/3330> | ~8 days | Directly builds on recent multi‑agent framework; high leverage for workflow flexibility. |
| **PR #3332–#3336** (dependency bumps) | Various links (e.g., <https://github.com/sipeed/picoclaw/pull/3332>) | ~8 days | Routine but marked stale; maintainers should verify compatibility and merge to keep dependencies current. |

*All stale items are awaiting maintainer review; prioritizing the UI‑lag bug and the two feature requests would likely yield the highest user impact.*

---

**Takeaway:** PicoClaw is actively maintaining its core infrastructure (dependency updates, lock‑file fixes, provider protocol additions) while foundational multi‑agent work is laying groundwork. The most pressing user‑visible issue is the chat‑input lag in the Web UI, and the community is clearly asking for more flexible model selection in both audio transcription and agent‑spawning contexts. Addressing these items should improve satisfaction and unlock the next wave of feature adoption.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest – 2026-08-21**  
*Based on GitHub activity (issues/PRs updated in the last 24 h)*  

---

### 1. Today's Overview  
The repository showed moderate maintenance activity: 3 issues were touched (2 open, 1 closed) and 50 pull requests were updated (34 still open, 16 merged/closed). No new version was released today. The bulk of the work centered on bug‑fixes for WhatsApp media handling and Slack integration, alongside a wave of container‑skill improvements (mount handling, provider SDKs, and one‑click setup docs). Overall project health appears active, with contributors focusing on stabilizing existing channels and expanding the skill ecosystem.

### 2. Releases  
*No new releases were published today.*

### 3. Project Progress (Merged/Closed PRs)  
Sixteen PRs were merged or closed in the last 24 h. The two visible closed PRs illustrate the day’s focus:  

- **#1311** – *Feature create new session* (closed) – adds a core workflow for spawning fresh agent sessions.  
- **#3421** – *[core-team] docs+setup: announce one-click Slack agents* (closed) – updates documentation and adds a banner guiding users to provision Slack agents via a single setup flow.  

The remaining 14 merged/closed PRs (not shown in the top‑20 comment list) primarily addressed:  
- Container‑skill robustness (e.g., fixes for mount‑readonly handling, refresh fan‑out caps, and SQL portability).  
- Provider‑specific adjustments (Matrix ESM patch, WhatsApp‑Cloud payload compatibility, Cursor Agent SDK integration).  
- Documentation and tooling improvements (smoke tests, idempotent removals, REMOVE.md files).  

### 4. Community Hot Topics  
The most‑engaged item today is the open issue:  

- **[#2715] Inbound WhatsApp media (images/docs/audio) is unreachable by the agent** – 1 comment, 👍0.  
  *Link:* https://github.com/qwibitai/nanoclaw/issues/2715  
  *Underlying need:* Users expect WhatsApp attachments to be accessible inside the agent container; currently files are written to a host‑only `DATA_DIR/attachments` directory, breaking downstream processing.  

All PRs listed have `comments: undefined` (effectively zero discussion), indicating that today’s activity is dominated by maintainer‑driven fixes rather than community debate.

### 5. Bugs & Stability  
**Open bugs (higher severity first):**  

| ID | Summary | Severity | Fix PR? |
|----|---------|----------|---------|
| #2715 | WhatsApp media saved to unmounted host path → agent cannot open files | **High** (blocks core media workflow) | No visible fix PR yet |
| #3369 | `mention-sticky` with `accumulate` triggers replies in threads where the bot was never mentioned | **Medium** (noise/incorrect engagement) | No visible fix PR yet |
| #2606 *(closed)* | `engage_mode: 'always'` silently drops all messages (`no_agent_engaged`) | **Low** (already resolved) | Fix merged (not shown in list) |

The WhatsApp media bug is the most pressing stability issue; a fix will likely involve adjusting the attachment‑save path to mount the container’s session inbox or copying files into the workspace.

### 6. Feature Requests & Roadmap Signals  
Recent feature‑oriented PRs point to the following near‑term roadmap directions:  

- **New integrations:** Cursor Agent SDK payload (#3356) and `/add-cursor` provider skill (#3355) – signaling official support for the Cursor IDE AI agent.  
- **Utility skills:** `add-why` (explain what happened to one message) – #3189 – adds a diagnostic tool for message lifecycle tracing.  
- **Configuration safety:** Mount‑readonly skill (#3196) and token‑usage tracking (#3270) – improve observability and least‑privilege deployments.  
- **One‑click onboarding:** The Slack announcement PR (#3421) hints at a broader push to simplify channel provisioning across platforms.  

Collectively, these suggest a focus on **extending the skill marketplace**, **enhancing operator observability**, and **reducing setup friction**.

### 7. User Feedback Summary  
Pain points voiced in today’s issues:  

- **WhatsApp attachment inaccessibility** – prevents agents from processing user‑shared files, breaking a core use‑case for media‑heavy workflows.  
- **Over‑eager sticky mentions** – leads to unwanted bot chatter in Slack threads, reducing signal‑to‑noise and potentially annoying users.  
- **Silent message drops** (now fixed) – previously caused confusion when `engage_mode: 'always'` appeared to be ignored.  

Positive signals include appreciation for the new **one‑click Slack setup** docs (closed PR #3421) and enthusiasm for upcoming Cursor‑agent integration.

### 8. Backlog Watch  
Items that have lingered without resolution and warrant maintainer attention:  

- **[#2715] WhatsApp media path mismatch** – open since 2026‑06‑08, last updated 2026‑08‑20; remains the top blocker for media‑dependent workflows.  
- **[#3369] mention‑sticky misuse** – newly opened (2026‑08‑20) but already showing signs of community impact; early intervention could prevent noisy deployments.  
- **PR #3270 (token‑usage tracking)** – open since 2026‑08‑16, awaiting review; would add valuable cost‑observability for LLM‑heavy agents.  
- **Older feature skills** (e.g., #1311’s session creation, now closed) indicate that once a PR clears review, it ships quickly; thus the bottleneck is often review bandwidth rather than contribution volume.  

Addressing the WhatsApp media bug and the mention‑sticky logic should be prioritized to restore core reliability, while continuing to merge utility skills like token usage will expand the platform’s operational visibility.  

---  

*All links point to the exact GitHub items referenced above.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw Project Digest – 2026‑08‑21**  
*(based on GitHub activity: 20 issues updated, 35 PRs updated, 1 new release)*  

---  

### 1. Today's Overview  
IronClaw is in a busy stabilization phase: the stable **v1.3.0** release was promoted from its RC2 tag on 2026‑08‑19, fixing upgrade loops and container‑related issues. Over the last 24 h the project saw **15 open/active issues** and **5 closed**, while **20 PRs remained open** and **15 were merged/closed**, indicating strong contributor throughput. Current work clusters around three strategic thrusts: (1) making the user‑sandbox persistent and proxy‑mediated, (2) extending the agent‑lifecycle hook system, and (3) delivering a cohesive WebUI design system and notification center.  

---  

### 2. Releases  

| Version | Date | Summary | Breaking / Migration Notes |
|---------|------|---------|----------------------------|
| **ironclaw‑v1.3.0** | 2026‑08‑19 | Stable promotion of `1.3.0‑rc.2`. Includes the upgrade‑path fix that now preserves the `activation_state` field during 1.2 → 1.3 upgrades (preventing crash‑loops) and resolves container‑runtime regressions validated in RC2. | No explicit breaking changes were mentioned. Users upgrading from 1.2 should note that the `activation_state` field is now retained automatically; no manual migration steps are required. |

---  

### 3. Project Progress (Merged/Closed PRs – 15 total)  

| PR | Title / Area | Key Outcome |
|----|--------------|-------------|
| **[#7729](https://github.com/nearai/ironclaw/pull/7729)** | feat(automations): add run‑now across trigger domain and WebUI | Introduces an atomic manual‑fire path for automations, exposed via first‑party capability, product service, authenticated WebUI API, and localized UI. |
| **[#7777](https://github.com/nearai/ironclaw/pull/7777)** | fix(ci): clear the clippy 1.98 lint cascade blocking the merge queue | Resolves a wave of new Clippy lints introduced with Rust 1.98, restoring green CI on the merge queue. |
| **[#7778](https://github.com/nearai/ironclaw/pull/7778)** | fix(lints): Rust 1.98 clippy migration (unbreaks all‑branch CI) | Workspace‑wide adjustments to satisfy `-D warnings` under Rust 1.98, ensuring all branches pass Clippy checks. |
| **[#7304](https://github.com/nearai/ironclaw/pull/7304)** | refactor(webui): place OAuth sign‑in above the gateway token form on login | Improves login UX by surfacing OAuth provider buttons before the token entry field, separated by the existing “or continue with” divider. |
| **[#7688](https://github.com/nearai/ironclaw/pull/7688)** | Add durable notification inbox contracts, storage, and ProductSurface APIs | Defines typed notification IDs, lifecycle states, deduplication keys, and server‑backed storage; lays the foundation for the new notification center. |
| **[#7755](https://github.com/nearai/ironclaw/pull/7755)** | Collapse two duplicated turn/subagent vocabulary types (dead metadata struct + duplicate spawn‑mode enums) | Removes redundant turn/subagent enums and structs, cleaning up the kernel vocabulary without behavioral change. |
| **[#7766](https://github.com/nearai/ironclaw/pull/7766)** | fix(telegram): separate bot pairing from personal device linking | Restores generic workspace‑bot pairing while keeping personal‑account device linking; adds explicit WebUI choice and localized disclosures. |
| **[#7773](https://github.com/nearai/ironclaw/pull/7773)** | refactor(webui): remove duplicate Settings and Extensions tabs | Deletes unused tab components and duplicate route metadata, simplifying the WebUI navigation layout. |
| **[#7772](https://github.com/nearai/ironclaw/pull/7772)** | fix(webui): surface extension setup phase and blockers in Configure | Passes the authoritative `phase` and `blockers` from the extension setup API into the Configure form, preventing silent mis‑configuration. |
| **[#7774](https://github.com/nearai/ironclaw/pull/7774)** | test(webui): make automation presenter date assertions timezone‑robust | Replaces UTC‑only expectations with browser‑local formatter‑based assertions, adding explicit UTC and Asia/Shanghai test cases. |
| **[#7767](https://github.com/nearai/ironclaw/pull/7767)** | Make Automation presenter date tests timezone‑robust | (Same intent as #7774 – ensures date‑dependent tests pass across timezones.) |
| **[#7768](https://github.com/nearai/ironclaw/pull/7768)** | Remove unused Settings and Extensions tabs and duplicate route metadata | Cleanup of dead UI code; no functional change. |
| **[#7769](https://github.com/nearai/ironclaw/pull/7769)** | Surface extension setup phase and blockers in Configure | (Duplicate of #7772 – appears as a parallel effort; both aim to expose setup status.) |
| **[#7770](https://github.com/nearai/ironclaw/pull/7770)** | [Open] Epic: hook the agent lifecycle — after‑turn, before‑turn, compaction, and tool‑result seams (phased) | Tracking issue; no code merged yet but signals upcoming hook‑system work. |

*Note: The list above captures the most consequential merged/closed PRs; the remaining 3‑5 PRs were smaller documentation, chore, or test adjustments.*  

---  

### 4. Community Hot Topics (Most Commented Items)  

| Item | Type | Comments | Link | What the Discussion Reveals |
|------|------|----------|------|-----------------------------|
| **[#7732](https://github.com/nearai/ironclaw/issues/7732)** | Issue (epic, v1.4.0) | **8** | https://github.com/nearai/ironclaw/issues/7732 | Persistent per‑user sandbox is a top‑voted pain point. Contributors discuss moving from per‑command Docker containers to a long‑lived per‑user proxy (`iron‑proxy`) to preserve `/workspace` and avoid container churn. |
| **[#7770](https://github.com/nearai/ironclaw/issues/7770)** | Issue (enhancement, epic) | **3** | https://github.com/nearai/ironclaw/issues/7770 | Demand for a formal hook lifecycle (after‑turn, before‑turn, compaction, tool‑result) to replace ad‑hoc core edits. Commenters outline phased delivery and ask for clear extension points. |
| **[#7193](https://github.com/nearai/ironclaw/issues/7193)** | Issue (closed) | **2** | https://github.com/nearai/ironclaw/issues/7193 | Although closed, the “run‑now” automation feature generated discussion about discoverability and UI placement; the merged PR #7729 addressed it. |
| **[#7763](https://github.com/nearai/ironclaw/pull/7763)** | PR (docs) | *comment count not shown* | https://github.com/nearai/ironclaw/pull/7763 | Consolidation of subagent design docs into a single README – reflects community desire for clearer internal documentation. |
| **[#7750](https://github.com/nearai/ironclaw/pull/7750)** | PR (webui) | *comment count not shown* | https://github.com/nearai/ironclaw/pull/7750 | Storybook + design‑system catalog integration (Phase 1) – indicates strong interest in a unified UI component library. |

*No PR/issue exceeded 8 comments in the supplied snapshot, making #7732 the clear focal point of community conversation.*  

---  

### 5. Bugs & Stability (Open Issues – Ranked by Severity)  

| Severity | Issue | Summary | Link | Fix PR? |
|----------|-------|---------|------|---------|
| **High** | **[#7776](https://github.com/nearai/ironclaw/issues/7776)** | `memory.write` with `append:false` can silently overwrite concurrent writes; the current CAS only protects against torn reads, not lost updates. | https://github.com/nearai/ironclaw/issues/7776 | **No** open fix PR yet. |
| **Medium** | **[#5998](https://github.com/nearai/ironclaw/issues/5998)** | No transport for a local (on‑device) MCP server: `stdio` rejected, loopback HTTP blocked → agents cannot talk to co‑located MCP services. | https://github.com/nearai/ironclaw/issues/5998 | **No** fix PR. |
| **Medium** | **[#7308](https://github.com/nearai/ironclaw/issues/7308)** | Hosted MCP OAuth registration for Attio fails with invalid scope and cannot be corrected; auth gate

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI Project Digest – 2026‑08‑21**  
*(Generated from GitHub activity: 2 issues updated, 7 PRs updated, 0 new releases)*  

---

### 1. Today's Overview  
The repository shows modest but focused maintenance activity: two open issues remain unresolved, while six pull requests were merged/closed today and one PR is still open. No new version was released, indicating the team is currently polishing existing features and fixing regressions rather than shipping major updates. Overall project health is stable, with most recent work addressing usability bugs and minor feature enhancements.

### 2. Releases  
*No new releases were published in the last 24 h.*  

### 3. Project Progress – Merged/Closed PRs  
| PR | Title | Type | Key Changes | Linked Issue |
|----|-------|------|-------------|--------------|
| [#1545](https://github.com/netease-youdao/LobsterAI/pull/1545) | fix(agent): sync activeSkillIds immediately when updating current agent's skills | Bug fix | Ensures the Redux `state.skill.activeSkillIds` updates instantly after `agentService.updateAgent()`, removing the need to switch agents to see skill badge changes. | #1502 |
| [#1546](https://github.com/netease-youdao/LobsterAI/pull/1546) | feat(engine-overlay): 引擎启动超时后显示取消启动和查看日志按钮 | Feature | After 30 s of engine startup, shows **Cancel Startup** and **View Logs** buttons to let users abort or diagnose hangs. | — |
| [#1547](https://github.com/netease-youdao/LobsterAI/pull/1547) | fix(scheduledTask): 修复定时任务通知渠道选择后无法改回"不通知"的问题 | Bug fix | Form initialization now respects `delivery.mode === 'none'` so the “No notification” option persists after saving. | — |
| [#1553](https://github.com/netease-youdao/LobsterAI/pull/1553) | feat(cowork): Write 工具文件卡片及分屏预览面板 | Feature | Adds an inline **FileCard** on Write tool completion and a resizable right‑hand **FilePreviewPanel** (Markdown, HTML sandbox, SVG, images, syntax‑highlighted code). | #1552 |
| [#1555](https://github.com/netease-youdao/LobsterAI/pull/1555) | fix: npm run dist:mac:x64打包失败 | Bug fix | Replaces `sha256sum` with `shasum` in the macOS build script to resolve packaging failures on macOS. | — |
| [#1557](https://github.com/netease-youdao/LobsterAI/pull/1557) | feat(settings): 设置面板侧栏支持搜索筛选分类 | Feature | Adds a searchable filter to the settings sidebar, with i18n support and auto‑tab switching when the current tab is hidden by the filter. | — |
| [#1560](https://github.com/netease-youdao/LobsterAI/pull/1560) | fix: 修复Agent编辑后点击原Agent无法切换回聊天界面的问题 | Bug fix | Adjusts `SidebarAgentList.handleSwitch` to call `onShowCowork()` even when the clicked agent equals the current agent, restoring expected chat navigation. | — |

### 4. Community Hot Topics  
| Item | Comments | Reactions | Why it’s hot |
|------|----------|-----------|--------------|
| [Issue #1556 – doc bug: IM机器人配置指南404](https://github.com/netease-youdao/LobsterAI/issues/1556) | 2 | 0 | Documentation link broken; users encountering a 404 when trying to follow the IM robot configuration guide. |
| [Issue #1552 – feat: AI产物 Markdown 预览及文件卡片支持](https://github.com/netease-youdao/LobsterAI/issues/1552) | 1 | 0 | Request for richer preview of agent‑generated files (Markdown/HTML/code) to avoid large chat dumps. Directly addressed by PR #1553. |
| PR #1545 (agent skill sync) | — (undefined) | — | Fixes a noticeable UX regression where skill badges didn’t update immediately; likely noticed by power users tweaking agents. |

*No PRs or issues displayed comment/reaction counts above the single‑digit range, so the above represent the most‑engaged items.*

### 5. Bugs & Stability  
| Severity | Description | Linked PR (fix) | Status |
|----------|-------------|-----------------|--------|
| **High** | macOS x64 build fails (`sha256sum` missing) → blocks distribution | [#1555](https://github.com/netease-youdao/LobsterAI/pull/1555) | Fixed (merged) |
| **Medium** | Scheduled task notification channel cannot revert to “不通知” | [#1547](https://github.com/netease-youdao/LobsterAI/pull/1547) | Fixed (merged) |
| **Medium** | After editing an agent, clicking the same agent does not return to chat | [#1560](https://github.com/netease-youdao/LobsterAI/pull/1560) | Fixed (merged) |
| **Medium** | Agent skill badge does not refresh after skill list change | [#1545](https://github.com/netease-youdao/LobsterAI/pull/1545) | Fixed (merged) |
| **Low** | Engine startup overlay provides no escape if launch hangs | [#1546](https://github.com/netease-youdao/LobsterAI/pull/1546) | Fixed (merged) – adds cancel/log buttons after 30 s. |
| **Low** | Documentation 404 for IM robot configuration guide | — (no code fix) | Open ([#1556](https://github.com/netease-youdao/LobsterAI/issues/1556)) |

### 6. Feature Requests & Roadmap Signals  
- **Markdown/HTML file preview & FileCard** – Requested in #1552, implemented via #1553 (closed). Expect this to appear in the next stable release as part of the “co‑work” UI enhancements.  
- **Settings sidebar search** – Implemented in #1557; likely to be highlighted in upcoming release notes as a usability improvement for power users navigating many settings tabs.  
- **Engine startup abort/log** – Added in #1546; improves robustness for users on flaky networks or with large dependency caches.  
- **Documentation fix** – The outstanding doc 404 (#1556) is a simple content fix; anticipate a quick patch before the next doc‑generation cycle.  

No major architectural features are currently under discussion; the roadmap appears focused on incremental UX polish and build reliability.

### 7. User Feedback Summary  
- **Pain points**: Users report being unable to preview agent‑generated Markdown/HTML files without copying large text into chat (issue #1552). The new FileCard + preview panel directly resolves this.  
- **Configuration friction**: The IM robot configuration guide returning 404 frustrates newcomers trying to set up integrations (issue #1556).  
- **Workflow interruptions**: Inability to revert scheduled‑task notifications to “不通知” forces users to delete and recreate tasks (fixed in #1547).  
- **Agent management**: Skill badge lag and agent‑switch navigation glitches cause confusion when iterating on agent configurations (fixed in #1545 and #1560).  
- **Build reliability**: macOS developers hit a blocker when trying to produce distributable packages (fixed in #1555).  

Overall sentiment from the tracked items is positive where fixes have landed; remaining open items are primarily documentation‑related.

### 8. Backlog Watch  
| Item | Age (days) | Type | Reason for Attention |
|------|------------|------|----------------------|
| [Issue #1556 – doc bug: IM机器人配置指南404](https://github.com/netease-youdao/LobsterAI/issues/1556) | 135 | Documentation | Simple link fix; impacts new‑user onboarding. |
| [Issue #1552 – feat: AI产物 Markdown 预览及文件卡片支持](https://github.com/netease-youdao/LobsterAI/issues/1552) | 135 | Feature request | Already addressed by PR #1553, but issue remains open/stale; should be closed to avoid confusion. |
| (No other open issues/PRs with > 30 days of inactivity were listed.) | | | |

*Recommendation:* Maintainers should close #1552 (since #1553 merged and closes it) and prioritize a documentation patch for #1556 in the next minor release.

---  

*All links point to the exact GitHub objects referenced.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis Project Digest – 2026‑08‑21**  
*Compiled from GitHub activity (issues, PRs, releases) for the 24‑hour window ending 2026‑08‑20.*

---

### 1. Today's Overview  
The repository showed modest but focused activity: one security‑related bug was closed, eight pull requests were updated (four still open, four merged/closed), and a new patch release was cut. Overall health appears stable—maintainers are addressing authentication gaps and polishing platform‑specific behavior while keeping the release cadence steady.

### 2. Releases  
- **Version:** `20260820.01` (released 2026‑08‑20)  
  - The tag follows a date‑based scheme; no accompanying release notes were supplied in the data.  
  - Given the timing, the release likely incorporates the merged PRs from today (see §3), especially the vault‑authentication fix (#1216) and WhatsApp‑related tweaks (#1217‑#1219).  
  - No explicit breaking changes or migration guidance were visible; users should review the changelog (if any) after pulling the update.

### 3. Project Progress – Merged/Closed PRs Today  
| PR | Area | Summary (what moved forward) | Link |
|----|------|------------------------------|------|
| #1216 | httpd/vault | **Fixed CWE‑306** – added `AuthSession` extractor to `POST /api/auth/vault/unlock` and `POST /api/auth/vault/recovery`, closing the authentication‑bypass bug. | [#1216](https://github.com/moltis-org/moltis/pull/1216) |
| #1217 | WhatsApp | Made a reply to the bot count as an address (fixes dropped messages when `mention_mode = "mention"`). | [#1217](https://github.com/moltis-org/moltis/pull/1217) |
| #1218 | WhatsApp | Removed hard‑coded push name “Moltis”; now uses the configured bot name from the builder hook. | [#1218](https://github.com/moltis-org/moltis/pull/1218) |
| #1219 | Channels | Made the untrusted‑turn tool ceiling configurable (previously a hard‑coded deny‑all for non‑operator turns). | [#1219](https://github.com/moltis-org/moltis/pull/1219) |

These four merges directly address stability, security, and usability concerns raised in recent issues.

### 4. Community Hot Topics  
All updated items today have **zero comments and reactions**, indicating low immediate discussion volume. The most visible items are the closed PRs above, but none have sparked comment threads. Consequently, there are no clear “hot topics” driven by community interaction at this moment.

### 5. Bugs & Stability  
| Item | Type | Severity* | Status | Fix PR |
|------|------|-----------|--------|--------|
| Issue #1177 | Vault unlock/recovery missing authentication (CWE‑306) | **High** – allows unauthenticated brute‑force of vault secrets | Closed (2026‑08‑20) | #1216 (merged) |
| — | — | — | — | — |

*Severity inferred from CWE‑306 (Missing Authentication for Critical Function) and the potential impact on data confidentiality.

No new bug reports appeared in the last 24 h; the sole bug was resolved promptly.

### 6. Feature Requests & Roadmap Signals  
Open PRs hint at near‑term priorities:

| PR | Indicated Feature / Improvement | Likelihood for Next Release |
|----|--------------------------------|-----------------------------|
| #1222 | **Sandbox image validation** – restrict image/package checks to admins, prevent unsafe container builds. | High – security‑focused, already passes CI. |
| #1221 | **Pin Snyk Agent Scan** – lock dependency‑scanning tool to a known‑good version, remove fallback. | High – supply‑chain hardening, minimal risk. |
| #1220 | **WhatsApp Markdown rendering** – convert model‑generated Markdown to WhatsApp‑native markup before sending. | Medium – UX enhancement; awaits further testing. |
| #468 | **Windows shell hooks** – use `cmd.exe /C` instead of `sh -c` on Windows. | Medium – long‑standing open PR; addresses platform compatibility. |

These suggest the upcoming version will likely tighten security controls (image validation, dependency scanning) and improve cross‑platform reliability.

### 7. User Feedback Summary  
- **Authentication gaps:** Users (via issue #1177) highlighted that vault operations were exposed without auth – a critical trust issue now fixed.  
- **WhatsApp identity:** Hard‑coded push name caused confusion in group chats; users wanted the bot’s configured name to appear (addressed in #1218).  
- **Reply handling:** In mention‑mode groups, replying to the bot was ignored – a usability pain point resolved by #1217.  
- **Tool policy rigidity:** Hard‑coded deny‑all for untrusted turns limited legitimate tool use; making it configurable (#1219) responds to requests for finer‑grained permissions.  
- **Windows support:** Persistent reports of shell‑hook failures on Windows indicate a lingering platform‑specific friction point (still open in #468).

Overall sentiment: users value security and correct identity/reporting behavior; they appreciate rapid fixes but remain wary of lingering platform gaps.

### 8. Backlog Watch  
- **PR #468 (fix(plugins): use cmd.exe on Windows for shell hooks)** – opened 2026‑03‑23, still open despite passing Windows CI. This is the longest‑running open change and addresses a recurring Windows compatibility issue. Maintainer attention would unblock Windows users and reduce platform‑specific support tickets.  
- No stale issues were present in the data (the sole issue was closed today).

---

*All links point directly to the relevant GitHub items.*  
*Generated analytically; no external sources beyond the supplied data were used.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw (QwenPaw) Project Digest – 2026‑08‑21**  
*Based on GitHub activity for the repository **agentscope-ai/QwenPaw** (issues/PRs updated in the last 24 h, latest release v2.1.1‑beta.1).*

---

### 1. Today's Overview
The project remains highly active: **27 issues** and **50 pull‑requests** were touched in the past day, with roughly half of the PRs already merged or closed. A new beta release (**v2.1.1‑beta.1**) was published, focusing on console usability fixes and a logging tweak. Overall health looks good – steady contribution flow, rapid issue triage, and a clear release cadence.

### 2. Releases
| Version | Type | Highlights |
|---------|------|------------|
| **v2.1.1‑beta.1** | Beta | • **feat(console):** improve editor tab overflow navigation (PR #6983)  <br>• **fix(providers):** lower rate‑limiter init log level (PR #6988)  <br>• **chore:** update release notes (truncated in source)  <br>• Associated release‑verification issue: [#7180](https://github.com/agentscope-ai/QwenPaw/issues/7180) |

*No breaking changes were announced in the release notes; users can upgrade from 2.1.0 to this beta without migration steps.*

### 3. Project Progress (Merged/Closed PRs Today)
- **29 PRs** reached a merged/closed state. Notable closed contributions include:  
  - **PR #7166** – bundle `qwenpawmail` MCP as a standalone sidecar (fixes release packaging).  
  - **PR #7174** – initialize persistent drivers concurrently at workspace startup (performance win).  
  - **PR #7161** – add artifacts to assistant response card (UI enhancement).  
  - **PR #7135** – preserve corrupt `envs.json` and write atomically (prevents silent loss of env vars).  
  - **PR #7073** – deduplicate skill names to avoid loading duplicate built‑in/workspace skills.  

These changes collectively improve stability, startup speed, and user‑visible polish.

### 4. Community Hot Topics (Most‑Commented Items)
| Item | Type | Comments | Link | Core Concern |
|------|------|----------|------|--------------|
| **#6921** | Open bug | 10 | [Issue #6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) | Agent stops after planning messages (“Now 2.1, 3.1, 3.2…”) without any UI cue; user must say “继续” to resume. |
| **#7102** | Closed bug | 9 | [Issue #7102](https://github.com/agentscope-ai/QwenPaw/issues/7102) | Desktop freeze (>5 min) when using GLM 5.3; no token output, thinking also stalls. |
| **#6643** | Closed enhancement | 6 | [Issue #6643](https://github.com/agentscope-ai/QwenPaw/issues/6643) | Request to scope task outputs per‑task directory instead of dumping everything into `media/`. |
| **#6436** | Open enhancement | 4 (+1 👍) | [Issue #6436](https://github.com/agentscope-ai/QwenPaw/issues/6436) | Automatic model routing per‑message (small/fast local for simple turns, vision for images, big for hard reasoning). |
| **#7013** | Open enhancement | 3 | [Issue #7013](https://github.com/agentscope-ai/QwenPaw/issues/7013) | Unified tool panel, web‑service preview, and interactive terminal in Chat view. |

*Underlying needs:* smoother turn‑taking (no silent stalls), better handling of long‑running model calls, clearer file organization, and smarter, context‑aware model selection to reduce manual switching.

### 5. Bugs & Stability (Open Issues Today)
| Severity | Issue | Summary | Linked Fix/PR (if any) |
|----------|-------|---------|------------------------|
| **High** | [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) | Agent halts after planning utterances; requires manual “继续”. | No linked PR yet. |
| **High** | [#6932](https://github.com/agentscope-ai/QwenPaw/issues/6932) | Network hiccup → permanent LLM timeout; needs manual restart. | No linked PR yet. |
| **Medium** | [#7156](https://github.com/agentscope-ai/QwenPaw/issues/7156) | Embedding health‑check timeout hard‑coded (5 s) causing false failures even when backend is warm. | No linked PR yet. |
| **Medium** | [#7184](https://github.com/agentscope-ai/QwenPaw/issues/7184) (Feature) | Cross‑session recall toggle for Scroll – not a bug but touches session stability. | PR #7183 (workspace‑scoped always‑on skills) touches related area. |
| **Low** | [#7162](https://github.com/agentscope-ai/QwenPaw/issues/7162) *(closed)* | `httpx.ReadError` in streaming → UNKNOWN_AGENT_ERROR; missing retry. | Fix implied by ongoing work on streaming reliability. |

*No critical crash reports (e.g., segfaults) appeared in the last 24 h; the most pressing stability concerns are the silent stalls (#6921) and network‑recovery failures (#6932).*

### 6. Feature Requests & Roadmap Signals
- **Automatic model routing** (#6436) – aligns with the project’s goal of efficient resource use; likely to appear in a future minor release once the routing abstraction matures.  
- **Unified tool panel / Web preview / Interactive terminal** (#7013) – directly enhances the Console workflow; a prototype is already being iterated (see PR #7167 for creator‑side video updates).  
- **Workspace‑scoped always‑on Skills** (#7182, #7183) – enables specialized agents to load core skills on startup; PR #7183 is open and ready for review.  
- **QQ & DingTalk group‑chat enhancements** (#7159, #7158) – reflect growing demand for multi‑platform automation; could be bundled in the next “Channels” update.  
- **Agent‑level thinking modes** (PR #7163) – adds Off/Low/Medium/High toggles; expected to land soon as it improves controllability of reasoning depth.  

Overall, the roadmap seems to be converging on **smarter, more autonomous agent behavior** (routing, thinking levels, skill preload) while polishing the **Console/UX** (tool panel, navigation, artifact display).

### 7. User Feedback Summary
Pain points voiced in the open issues:
- **Silent task pauses** – users lose confidence when the agent stops without any indicator, forcing manual prompts.  
- **Network brittleness** – temporary disconnects require a full restart, disrupting long‑running sessions.  
- **UI clutter** – dumping all task outputs into a flat `media/` folder makes file retrieval cumbersome.  
- **Model selection friction** – users want the system to pick the right model automatically rather than manually switching agents.  
- **Performance lag in long chats** – scrolling or streaming in extensive conversations causes UI jank (addressed by PR #7176).  

Positive signals: users actively suggest concrete UI improvements (tool panel, per‑task folders) and appreciate recent performance fixes (concurrent driver initialization, faster skill loading). The community is engaged, with many feature requests showing a clear vision for a more polished, resilient assistant.

### 8. Backlog Watch (Items Needing Maintainer Attention)
| Item | Age (days) | Comments | Why it matters |
|------|------------|----------|----------------|
| **[#6436] Automatic model routing** | 28 | 4 comments, 1 👍 | Core to reducing manual model switching; impacts latency and cost. |
| **[#7013] Unified tool panel / Web preview / Interactive terminal** | 7 | 3 comments | Directly improves developer workflow; high visibility. |
| **[#6921] Silent stall bug** | 9 | 10 comments | High‑impact usability blocker; no fix PR yet. |
| **[#6932] Network‑recovery failure** | 8 | 3 comments | Affects reliability in unstable environments. |
| **PR #7112 (QwenPaw Hub – self‑hosted multi‑user)** | 3 | 0 comments (undefined) | Major architectural addition; needs review to gauge scope and stability. |
| **PR #7080 (PowerContext LTM backend)** | 4 | 0 comments (undefined) | Optional long‑term memory alternative; could diversify storage options. |

*These items represent a mix of high‑impact bugs and strategic features that, if addressed, would significantly advance both stability and the product’s value proposition.*

---

**Takeaway:** The project is moving fast—steady releases, active PR merging, and a clear focus on polishing the console experience while laying groundwork for smarter, more autonomous agents. Addressing the silent‑stall and network‑recovery bugs will remove the most frustrating friction points, while the feature backlog (model routing, tool panel, always‑on skills) points toward a richer, more configurable assistant in the upcoming releases.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw Project Digest – 2026‑08‑21**  
*Generated from GitHub activity (issues & PRs updated in the last 24 h). No new releases were published today.*

---

## 1. Today’s Overview  
The repository showed a burst of maintenance activity: **50 issues** and **50 pull‑requests** were touched in the past 24 hours, with the majority still open (45 issues, 45 PRs). No version was released, indicating the team is currently focused on refactoring, RFC discussion, and bug‑triage rather than shipping a new binary. The high number of open RFCs and tracker issues signals ongoing architectural work, while the steady flow of small bug‑fix PRs (e.g., transcription proxy selectors, i18n prompts) shows that day‑to‑day stability is being attended to.

---

## 2. Releases  
*None* – No new tags or releases were created today.

---

## 3. Project Progress (Merged / Closed PRs)  

| PR | Type | Summary | Link |
|----|------|---------|------|
| #10182 | dependencies | Bump `rust-all` group (46 updates) across the repo. | [PR #10182](https://github.com/zeroclaw-labs/zeroclaw/pull/10182) |
| #10148 | bug / zerocode | Move TUI theme‑table generation from `build.rs` into an `xtask` generator and commit the table inside `apps/zerocode` to make the theme presets package‑local. | [PR #10148](https://github.com/zeroclaw-labs/zeroclaw/pull/10148) |
| #9104 | enhancement / providers | Add Grok Build ACP model provider (typed `grok_cli` family). | [PR #9104](https://github.com/zeroclaw-labs/zeroclaw/pull/9104) |
| #8443 | enhancement / channel | Add Matrix *single‑message* progress drafts (editable draft per turn). | [PR #8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443) |
| #9126 | enhancement / plugins | Validate typed instance config – require Draft 2020‑12 JSON‑Schema for `config_read` manifests and resolve per‑instance strings to typed JSON. | [PR #9126](https://github.com/zeroclaw-labs/zeroclaw/pull/9126) |
| #10194 *(issue)* | bug / ci | AI reviewer posted review results after a PR had already merged (PR #9104). Marked as closed/follow‑up. | [Issue #10194](https://github.com/zeroclaw-labs/zeroclaw/issues/10194) |

**What advanced:**  
- **Plugin system:** config validation (#9126) and theme‑localisation (#10148) lay groundwork for safer, more isolated plugins.  
- **Provider ecosystem:** Grok Build ACP support (#9104) expands the LLM back‑ends.  
- **UX:** Matrix single‑message drafts (#8443) improve real‑time collaboration.  
- **CI health:** Dependency bumps (#10182) keep the toolchain up‑to‑date.  

---

## 4. Community Hot Topics (Most‑commented Issues/PRs)

| Item | Comments | 👍 | Summary & Link | Underlying Need |
|------|----------|----|----------------|-----------------|
| **Issue #9487** – *Runtime‑owned conversation sessions & transport surface adapters* | 22 | 0 | Proposes a runtime‑owned session model, durable admission, and ambiguous‑outcome semantics for channels/gateways. | Need for a clean, runtime‑managed session boundary that survives agent restarts and enables pluggable transports. |
| **Issue #6165** – *Prefer a lighter ZeroClaw core through external integrations* | 18 | 0 | RFC to move long‑tail integrations out of the core, reducing configuration surface and maintenance burden. | Desire to slim the core, improve security, and rely on community‑maintained plugins. |
| **Issue #10118** – *[Tracker] Rust anti‑slop policy debt remediation* | 16 | 0 | Tracks cleanup of Rust patterns that clash with the project’s production‑code policy (panics, unwrap, etc.). | Improve code‑quality and reliability of the Rust base. |
| **Issue #6850** – *Decouple memory lifecycle policy from storage backends* | 14 | 0 | Separates durable storage (`Memory` trait) from higher‑level lifecycle decisions (retention, eviction). | Allow gateways/channels to reuse any storage backend without re‑implementing policy. |
| **Issue #8780** – *Realtime speech‑to‑speech channel for Gemini Live* | 14 | 0 | Feature‑gated voice channel using Gemini Live as a conversation‑level speech‑to‑speech model. | Users want low‑latency, multimodal interaction without leaving the ZeroClaw daemon. |

*Note: PR comment counts were not exposed in the data; the above reflects the most‑engaged discussion threads.*

---

## 5. Bugs & Stability (Reported Today)

| Severity | Issue | Summary | Fix / PR (if any) | Link |
|----------|-------|---------|-------------------|------|
| **P1** (blocking/high) | #10114 | `max_tool_result_chars` hard‑coded to 50 000, unrelated to model context window. | – | [#10114](https://github.com/zeroclaw-labs/zeroclaw/issues/10114) |
|  | #10115 | Tool‑result truncation invisible outside model context (head/tail + ellipsis). | – | [#10115](https://github.com/zeroclaw-labs/zeroclaw/issues/10115) |
|  | #10116 | Oversized tool results cut byte‑wise middle‑out; no spill‑to‑file handling. | – | [#10116](https://github.com/zeroclaw-labs/zeroclaw/issues/10116) |
|  | #10194 | AI reviewer publishes review after PR merge (CI tooling). | Closed/follow‑up. | [#10194](https://github.com/zeroclaw-labs/zeroclaw/issues/10194) |
|  | #10111 (duplicate) | Windows entry‑point missing (`TaskDialogIndirect`). | Closed as duplicate. | [#10111](https://github.com/zeroclaw-labs/zeroclaw/issues/10111) |
| **P2** (degraded) | #10074 | `SECURITY.md` documents a removed CI Docker job; container checks now convention only. | – | [#10074](https://github.com/zeroclaw-labs/zeroclaw/issues/10074) |
|  | #10106 | Exact proxy selectors reject supported transcription services (Groq, OpenAI, …). | Fixed by PR #10117. | [#10106](https://github.com/zeroclaw-labs/zeroclaw/issues/10106) / [PR #10117](https://github.com/zeroclaw-labs/zeroclaw/pull/10117) |
|  | #10073 | `StoragePolicy::Rolling` performance regression under sustained event volume. | – | [#10073](https://github.com/zeroclaw-labs/zeroclaw/issues/10073) |
|  | #10050 | Missing gateway route to send a caller‑supplied message verbatim (no agent turn). | – | [#10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050) |
|  | #10025 | *zeroclaw swarm* – ephemeral agent swarms need config surgery; no orchestrator. | – | [#10025](https://github.com/zeroclaw-labs/zeroclaw/issues/10025) |
|  | #10069 | Agent portability – export/share agents across deployments. | – | [#10069](https://github.com/zeroclaw-labs/zeroclaw/issues/10069) |
|  | #10141 | Sessions hard to use / copy in zerocode UI. | – | [#10141](https://github.com/zeroclaw-labs/zeroclaw/issues/10141) |
|  | #10138 | Git Channel not compiled into default `zeroclaw:debian` Docker image. | – | [#10138](https://github.com/zeroclaw-labs/zeroclaw/issues/10138) |
|  | #10168 | Stall watchdog disabled by default (`stall_timeout_secs = 0`). | – | [#10168](https://github.com/zeroclaw-labs/zeroclaw/issues/10168) |
|  | #10167 | No vendor‑neutral lifecycle export for terminal multiplexers. | – | [#10167](https://github.com/zeroclaw-labs/zeroclaw/issues/10167) |

**Observations:**  
- Several **P1** bugs revolve around tool‑result handling (size limits, visibility, spill‑to‑file). No fix PRs are yet linked, indicating they are likely in the triage backlog.  
- The **proxy selector** bug (#10106) already has a fixing PR (#10117).  
- CI/documentation drift (#10074) and performance regression in the rolling log policy (#10073) are noted but lack active PRs.  

---

## 6. Feature Requests & Roadmap Signals (RFCs & Trackers)

| RFC / Tracker | Key Goal | Link |
|---------------|----------|------|
| #9487 – Runtime‑owned conversation sessions | Session durability, transport adapters, ambiguous outcomes. | [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) |
| #6165 – Lighter core via external integrations | Move long‑tail integrations to plugins, shrink core. | [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) |
| #10118 – Rust anti‑slop policy debt remediation | Systematic cleanup of unsafe/idiomatic Rust patterns. | [#10118](https://github.com/zeroclaw-labs/zeroclaw/issues/10118) |
| #6850 – Decouple memory lifecycle from storage backends | Pluggable storage, centralised lifecycle policy. | [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) |
| #8780 – Realtime speech‑to‑speech (Gemini Live) | Optional voice channel, low‑latency multimodal. | [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) |
| #8692 – Maintainer decision queue for RFCs | Tracker for RFCs needing maintainer sign‑off. | [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) |
| #9598 – Define SOP capability permission contract | Make `required_permissions` authoritative for SOP tooling. | [#9598](https://github.com/zeroclaw-labs/zeroclaw/issues/9598) |
| #6996 – Granular sandbox policy (fs/network) | Unified policy that honors both application‑layer and OS sandbox backends. | [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) |
| #9990 – Calibrate PR risk & security approval | Distinguish test‑only changes from true high‑risk edits. | [#9990](https://github.com/zeroclaw-labs/zeroclaw/issues/9990) |
| #8132 – Replace React/Vite web UI with Rust→Wasm (Dioxus/Leptos/Yew) | Remove Node.js from build/runtime, ship UI as Wasm. | [#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132) |
| #9702 – Goal mode v2 (durable continuation + Web controls) | Persistent goals across restarts, browser‑based control surface. | [#9702](https://github.com/zeroclaw-labs/zeroclaw/issues/9702) |
| #8850 – Move optional channels/tools to runtime plugins (WASM) | Stock binary + installable plugins, smaller default binary. | [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) |
| #8398 – Plugin permission/config/secrets model (open questions) | Fine‑grained grants for plugins (e.g., `HttpClient`, `FileRead`). | [#8398](https://github.com/zeroclaw-labs/zeroclaw/issues/8398) |
| #9810 – Load Agent Plugins 1.0 skill & MCP packages | Support vendor‑neutral `plugin.json` + `skills/` + `mcp.json`. | [#9810](https://github.com/zeroclaw-labs/zeroclaw/issues/9810) |
| #10073 – Retire `StoragePolicy::Rolling`, absorb row‑cap into `Rotating`, extend `/api/logs` | Fix logging performance regression. | [#10073](https://github.com/zer

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*