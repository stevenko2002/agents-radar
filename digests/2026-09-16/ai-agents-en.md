# OpenClaw Ecosystem Digest 2026-09-16

> Issues: 471 | PRs: 500 | Projects covered: 13 | Generated: 2026-09-15 22:15 UTC

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

**OpenClaw Project Digest – 2026‑09‑16**  

---  

### 1. Today's Overview  
The repository showed **very high activity** in the last 24 h: **471 issues** were updated (296 still open/active, 175 closed) and **500 pull‑requests** were updated (329 open, 171 merged/closed). No new releases were published today. The surge of updates indicates ongoing triage, bug‑fixing, and internal refactor work, while a substantial backlog of open issues remains.

---  

### 2. Releases  
*No new releases were tagged today.*  

---  

### 3. Project Progress (Merged/Closed PRs)  
Among the **171 merged/closed PRs**, the majority are internal maintenance/refactor changes (e.g., test matrix compaction, CI improvements, config audit refactors). A few user‑impacting fixes that reached merge include:  

| PR | Title / Purpose | Link |
|----|----------------|------|
| #149045 | **refactor(xai): compact provider test matrices** – removes duplicate test data, no user‑visible change | <https://github.com/openclaw/openclaw/pull/149045> |
| #149043 | **refactor(config): compact audit redaction matrix** – similar test‑only cleanup | <https://github.com/openclaw/openclaw/pull/149043> |
| #149087 | **fix: stop Gateway RPC maturity false failures** – resolves spurious maturity test failures | <https://github.com/openclaw/openclaw/pull/149087> |
| #149088 | **fix: stop cron maturity false failures** – aligns cron state checks with actual completion | <https://github.com/openclaw/openclaw/pull/149088> |
| #149047 | **fix(update): keep restart notices in selected state** – prevents stray restart notices during managed‑gateway updates | <https://github.com/openclaw/openclaw/pull/149047> |
| #149359 | **fix(ui): stop retrying rejected unread patches** – reduces useless UI traffic when a Control UI viewer watches a shared session | <https://github.com/openclaw/openclaw/pull/149359> |
| #149369 | **fix(gateway): stop endless thaw recovery on busy gateways** – addresses repeated admission closures caused by mistaking CPU‑bound stalls for host sleep | <https://github.com/openclaw/openclaw/pull/149369> |
| #149283 | **fix(sessions): preserve paused task ownership when a parent resumes work** – ensures delegated tasks stay owned by the original worker after a parent resumes | <https://github.com/openclaw/openclaw/pull/149283> |
| #149418 | **fix(ci): request fresh watched run status by default** – improves CI watcher reliability | <https://github.com/openclaw/openclaw/pull/149418> |
| #149308 | **improve: avoid legacy database checks on Gateway reads** – removes legacy Workshop‑recovery probes that were recompiling SQLite statements on every read | <https://github.com/openclaw/openclaw/pull/149308> |

These changes collectively improve **test reliability, CI stability, UI responsiveness, and gateway robustness**, though most are internal refactors without direct end‑user feature additions.

---  

### 4. Community Hot Topics (Most‑Commented Issues/PRs)  

| Rank | Item | Comments | Summary & Underlying Need | Link |
|------|------|----------|---------------------------|------|
| 1 | **#25592** – *Text between tool calls leaks to messaging channels* | 40 | Users see internal agent narration/error messages appear in Slack/iMessage etc. → **UX polish & proper isolation of agent‑internal output**. | <https://github.com/openclaw/openclaw/issues/25592> |
| 2 | **#97616** – *OpenClaw leaks unreaped hook/tool child processes (zombie accumulation)* | 30 | Long‑running agents gradually fill the process table with zombies → **resource‑leak fix, proper reaping of child processes**. | <https://github.com/openclaw/openclaw/issues/97616> |
| 3 | **#91588** – *Gateway Memory Leak – RSS grows from 350 MB to 15.5 GB* | 25 | Progressive memory consumption leads to OOM kills and restart loops → **memory‑leak hunt, likely in gateway or session state handling**. | <https://github.com/openclaw/openclaw/issues/91588> |
| 4 | **#91009** – *Codex PreToolUse native hook relay spawns CPU‑bound openclaw‑hooks processes* | 24 | Hook relay consumes 100%+ CPU, stalls gateway RPC → **performance regression in hook/spawn logic**. | <https://github.com/openclaw/openclaw/issues/91009> |
| 5 | **#119720** – *Synchronous agent persistence and transcript maintenance block the Gateway event loop at scale* | 20 | Heavy persistence/I/O blocks the event loop, hurting throughput under load → **async‑ify persistence, offload transcript work**. | <https://github.com/openclaw/openclaw/issues/119720> |
| 6 | **#102175** – *Embedded prompt cache breaks across room‑event, policy, and Responses boundaries* | 19 | Prompt‑cache reuse lost when crossing internal boundaries → **cache‑coherency improvements**. | <https://github.com/openclaw/openclaw/issues/102175> |
| 7 | **#144911** – *MCP server init timeout crashes the Gateway – unhandled rejection* | 17 | Timeout during MCP server start triggers unhandled promise rejection → **better error handling / timeout propagation**. | <https://github.com/openclaw/openclaw/issues/144911> |
| 8 | **#139847** – *Message sent while a reply run is active is dropped* | 14 | Incoming chat messages lost when a reply run is already active → **race‑condition fix for concurrent tool authority**. | <https://github.com/openclaw/openclaw/issues/139847> |
| 9 | **#53628** – *${XDG_CONFIG_HOME} not processed when installing a skill* | 14 | Config‑dir variable ignored in skill‑install flow → **configuration‑variable handling**. | <https://github.com/openclaw/openclaw/issues/53628> |
|10| **#139710** – *Mid‑turn plugin‑generation supersede kills system‑agent turn* | 13 | Hot‑reload of MCP config aborts current turn and fallback → **safer hot‑reload semantics**. | <https://github.com/openclaw/openclaw/issues/139710> |

*No PR in the top‑30 list displayed comment counts (the API returned `undefined`), indicating that discussion is currently concentrated in issues rather than open pull‑requests.*

**What the community is asking for:**  
- **Stability** – eliminate zombie processes, memory leaks, and crash‑loops.  
- **UX** – stop internal log‑leakage into chat channels and ensure messages aren’t dropped.  
- **Performance** – curb CPU‑spiking hook processes and make persistence non‑blocking.  
- **Reliability** – better error handling for MCP/timeouts and config‑variable handling.  

---  

### 5. Bugs & Stability (Severity‑Ranked)  

| Severity | Issue | Key Symptoms | Fix/PR Status |
|----------|-------|--------------|---------------|
| **P0 / Critical** | #144911 – MCP server init timeout → unhandled rejection → Gateway crash | Gateway dies when an MCP server fails to initialize within 30 s. | Open; no linked fix PR yet. |
|  | #143524 – SQLite WAL growth → agent DB blocks gateway startup (Windows) | WAL file expands to GBs, never checkpointed, blocks start. | Open; no fix PR. |
|  | #145252 – Tracking update/upgrade/reliability for 2026.9.3‑2026.9.4 | Frequent update failures, restart loops. | Open; tracking issue. |
|  | #148866 – Gateway permanent restart loop when `gateway.bind=lan` | systemd‑managed gateway repeatedly crashes/restarts. | Open; no fix PR. |
| **P1 / High** | #91588 – Gateway memory leak (RSS → 15 GB) | OOM kills, launchd‑handoff restart cycle. | Open; no fix PR. |
|  | #97616 – Zombie child‑process leak | Accumulating zombies degrade runtime. | Open; no fix PR. |
|  | #91009 – Codex PreToolUse hook spawns CPU‑bound processes | 100%+ CPU, RPC stall. | Open; no fix PR. |
|  | #119720 – Synchronous persistence blocks event loop | Latency spikes under load. | Open; no fix PR. |
|  | #139847 – Message dropped when reply run active | Lost inbound chat messages. | Open; no fix PR. |
|  | #144809 – claude-cli turns lose generated reply after RUN_STALE_TAKEOVER_MS | Reply disappears, UX breakage. | Open; no fix PR. |
|  | #102175 – Prompt‑cache boundary break | Lost cache reuse, degraded model quality. | Open; no fix PR. |
|  | #139710 – Mid‑turn plugin supersede kills turn | Turn aborts unexpectedly. | Open; no fix PR. |
|  | #25592 – Text between tool calls leaks to chat | Internal noise visible to users. | Open; no fix PR. |
|  | #53628 – XDG_CONFIG_HOME ignored on skill install | Config dir not respected. | Open; no fix PR. |

**Observation:** All of the top‑stability bugs are still **open** with no directly linked fix PR in the data set. The merged PRs today are largely refactor/test‑cleanup; they do not yet address these core stability concerns.

---  

### 6. Feature Requests & Roadmap Signals  

| Issue | Title | Core Ask | Likelihood for Near‑Term Release |
|-------|-------|----------|----------------------------------|
| #51441 | Expose resolved backend model in `session_status` & agent runtime | Enable agents/LiteLLM users to see the actual model used (e.g., `openai/gpt-5.4`). | Medium – touches session metadata; appears in backlog but no active PR. |
| #51572 | Fire `session‑memory` hook on session reset/prune (not just compaction) | Allow plugins to persist/cleanup memory on idle/daily reset. | Low‑Medium – hook‑system change; no PR yet. |
| #46058 | Explore a chat‑first Android surface for OpenClaw | Community interest in a native mobile client. | Low – would require new mobile repo; currently just discussion. |
| #126781 | Detached managed Lobster runs after tool return | Allow long‑running background tasks to survive tool completion. | Medium – aligns with existing TaskFlow/Lobster work; no PR. |
| #115642 | Billing cooldown outlives the outage – add probe‑based recovery, shorter TTL, manual reset | Improve handling of provider billing errors for subscription users. | Medium – affects auth/billing; no PR. |
| #123799 | Need safe upgrade/backport guidance for production affected by Codex compact 404 | Operational docs for admins on broken Codex compact. | Low – documentation effort. |
| #146391 | Fresh Groq setup cannot resolve manifest model from external plugin | Fix model‑resolution when Groq loaded as non‑bundled plugin. | Medium – plugin‑loader fix; no PR. |

Overall, the feature backlog is **model‑visibility, hook extensibility, and platform‑support** (Android). None of these have an associated open PR in the latest batch, suggesting they are still in the triage/design phase.

---  

### 7. User Feedback Summary (Pain Points & Use Cases)  

- **Message loss / leakage** – Users report internal agent chatter appearing in Slack/iMessage and inbound messages disappearing when a reply is in flight. This erodes trust in the assistant’s reliability.  
- **Stability crashes** – Repeated OOM kills, zombie accumulation, and gateway restart loops force users to rely on watchdogs or manual restarts, increasing operational overhead.  
- **Performance spikes** – CPU‑bound hook processes cause noticeable latency spikes, especially when using Codex or other native hooks.  
- **Configuration friction** – Variables like `XDG_CONFIG_HOME` are not honored, complicating containerized or custom‑install deployments.  
- **Prompt‑cache incoherence** – When sessions cross internal boundaries (room events, policy checks) the cached prompt context is lost, leading to repeated re‑comprehension and higher token usage.  
- **Upgrade anxiety** – Several tracking issues highlight failed updates and schema mismatches, making admins hesitant to roll out new versions.  
- **Desire for transparency** – Requests to surface the actual backend model being used (especially when using LiteLLM or other proxies) indicate a need for better observability and debugging.  

Overall sentiment: **Users value OpenClaw’s powerful agent framework but are hampered by reliability and UX regressions that make production use risky.**

---  

### 8. Backlog Watch (Long‑Unanswered Important Items)  

| Issue | Age (approx.) | Why It Matters | Current Status |
|-------|---------------|----------------|----------------|
| #25592 (Text leak) | ~7 mo | Core UX – internal logs polluting chat channels. | Open, 40 comments, no fix PR. |
| #97616 (Zombie leak) | ~3 mo | Resource exhaustion; affects long‑running agents. | Open, 30 comments. |
| #91588 (Gateway memory leak) | ~3 mo | Leads to OOM and restart loops; blocks stable uptime. | Open, 25 comments. |
| #91

---

## Cross-Ecosystem Comparison

**Cross‑Project Comparison – Personal AI Assistant & Agent Open‑Source Ecosystem**  
*Date: 2026‑09‑16*

---

## 1. Ecosystem Overview
The personal AI assistant space is splintered into several complementary open‑source families: a **core reference framework (OpenClaw)** that supplies the underlying agent runtime, **client‑centric wrappers (NanoBot, CoPaw, ZeptoClaw)** that expose UI and cross‑platform experiences, **enterprise‑grade agent suites (Hermes Agent, NanoClaw, ZeroClaw)** that bundle connectors, governance and multimodal capabilities, and **niche tooling (PicoClaw, Moltis, TinyClaw)** that address specific concerns such as mesh observability, OAuth/custom‑OpenAI endpoints, or maintenance hygiene.  Overall, the ecosystem is moving from “single‑purpose bots” toward **unified, multi‑client sessions, hardened security, and richer plugin/hub ecosystems**, while still wrestling with legacy stability bugs (zombies, memory leaks, upgrade‑drift).

---

## 2. Activity Comparison  

| Project | Open Issues* | Open PRs* | Release Status (last 24 h) |

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot Project Digest – 2026‑09‑16**

---

### 1. Today's Overview
NanoBot saw a busy day with **1 new release (v0.3.5)**, **12 PRs merged/closed**, and **7 open issues** updated. The release brings the “one‑agent, more places to work” experience—unified sessions across the native terminal client (`nanobot`) and the WebUI (`nanobot webui`). Core stability work continued (Dream iteration caps, provider error handling, file‑write serialization), while UI/UX fixes addressed mobile usability and PWA performance. Overall health remains good, but a few critical bugs (Dream loops, Nvidia NIM timeout handling) still require attention.

---

### 2. Releases
**v0.3.5** – *2026‑09‑15*  
- **Headline:** “One agent, more places to work.” Unified session continuity between the terminal and browser chat apps.  
- **Key changes:**  
  - Native terminal client (`nanobot`) and WebUI (`nanobot webui`) now share the same agent backend, letting users pick their preferred interface without losing context.  
  - Improved onboarding for the WebUI PWA (still in progress; see UI issues).  
- **Breaking changes / migration:** None reported. Existing sessions should work transparently across the two clients.  

*Link:* [HKUDS/nanobot/releases/tag/v0.3.5](https://github.com/HKUDS/nanobot/releases/tag/v0.3.5)

---

### 3. Project Progress (Merged / Closed PRs Today)

| PR | Title & Scope | What Advanced / Fixed |
|----|---------------|-----------------------|
| #5785 | **chore(release):** prepare v0.3.5 | Set distribution version and release checklist; no functional changes. |
| #5787 | **build:** bundle native TUI in platform wheels | Native TUI now ships inside PyPI wheels, eliminating the need for a post‑install GitHub download or separate Bun install. |
| #5786 | **refactor(webui):** animate segmented control indicator | Replaced per‑segment background selects with a single moving indicator, added smooth overshoot transitions, reduced‑motion support, and reused the control for the Appearance theme selector. |
| #5783 | **fix(providers):** preserve assistant content with tool calls | Assistant `content` no longer stripped from history when `tool_calls` are present; removed obsolete compatibility setting. |
| #5775 | **fix(tools):** scope file‑read dedup to model context | `read_file` now requires the original output to stay in the current model request before deduplication, preventing stale stubs after compaction. |
| #5778 | **fix(email):** require trusted authentication results | Harden email verification by requiring an explicitly configured receiving service and validating authentication results against the sender domain. |
| #5757 | **fix(session):** search older pages of persisted conversation history | `search_sessions` and `read_session` now correctly paginate through older messages in long conversations. |
| #5768 | **fix(feishu):** use /page/cli verification URL for QR onboarding | QR login for Feishu/Lark now works reliably; the verification endpoint no longer expires instantly. |
| #5697 | **fix(qq):** protect inbound attachment downloads from SSRF | QQ attachment URLs are validated, redirects disabled, and only HTTP‑200 responses accepted. |
| #5774 | **fix(memory):** recover archive tool calls before raw fallback | Archive requests that unexpectedly emit tool calls are now retried with a non‑executing placeholder, preserving RAW fallback behavior. |
| #5728 | **perf:** reduce streaming text processing and classic CLI redraws | Tag parsing and Markdown re‑rendering are deferred when the incoming text is already well‑formed, cutting CPU cost for long streamed replies. |

*All merged PRs are viewable at the links above.*

---

### 4. Community Hot Topics
**Most Active Discussion:** **#5781** – *Dream runs loop indefinitely* (2 comments)  
- **Issue Summary:** Scheduled Dream consolidation turns into very long loops (25‑111 min, ~200 tool calls) because `dream.maxIterations` is deprecated/ignored; the global 200‑iteration cap is applied instead.  
- **Underlying Need:** Users want per‑Dream iteration limits to prevent runaway consolidation, especially for long‑running tasks. The deprecation of `agents.defaults.dream.maxIterations` leaves no way to control Dream‑specific iteration counts.  
- **Link:** [#5781](https://github.com/HKUDS/nanobot/issues/5781)

*All other issues have 0‑1 comment; none have yet reached a critical mass.*

---

### 5. Bugs & Stability (Issues Opened Today)

| Issue | Severity (High/Med/Low) | Description | Fix PR(s) Available? |
|-------|------------------------|-------------|----------------------|
| **#5781** | **High** | Dream runs loop indefinitely due to missing iteration limit. | ✅ #5782 (open) – re‑enforces `agents.defaults.dream.maxIterations` (default 15). |
| **#5784** | **Low** | QQ auto‑compaction notices appear as chat messages; no collapse UI. | ✅ #5780 (open) – stops sending context compaction notifications in QQ channel (keeps `/compact` visible). |
| **#5674** | **High** | Nvidia NIM provider timeout errors cause the agent to stop thinking. | *No fix PR yet* (under investigation). |
| **#5773** | **Medium** | PWA cold‑start shows long blank screen before first paint. | *No fix PR yet* (UI performance). |
| **#5772** | **Medium** | iOS PWA standalone mode renders top viewport washed out. | *No fix PR yet* (styling/rendering). |
| **#5771** | **Low** | Mobile session list requires two taps to open a session. | ✅ #5777 (open) – prevents drawer from stealing focus to the search button. |
| **#5770** | **Low** | Opening mobile sidebar focuses the search button and shows “Search ⌘K” tooltip. | ✅ #5777 (open) – same PR addresses focus behavior. |

*Highest severity bugs (#5781, #5674) need immediate attention.*

---

### 6. Feature Requests & Roadmap Signals
- **#5666** – **Add aimlapi.com** as an OpenAI‑compatible gateway provider. *(Open, waiting for merge)*  
- **#5626** – **Add `copy_file` and `move_file`** filesystem primitives. *(Open, pending conflict resolution)*  
- **#5750** – **Expose stable per‑invocation tool context** via `ToolInvocationContext`. *(Open, ready for merge)*  
- **#5776** – **Add search to provider pickers in Settings** (combobox with filter). *(Open, UI improvement)*  
- **#5748** – **Persist partial tool progress at batch boundaries** for recovery. *(Open, core reliability fix)*  
- **#5779** – **Serialize concurrent session file writes** to prevent interleaving/loss. *(Open, data integrity fix)*  
- **#5782** – **Enforce configured iteration limit for Dream** (addresses #5781). *(Open, ready for merge)*  
- **#5780** – **Stop sending context compaction notifications** (addresses #5784). *(Open, ready for merge)*  

These PRs collectively signal the next wave of improvements: richer filesystem tools, provider flexibility, better error handling, and a smoother mobile experience.

---

### 7. User Feedback Summary
- **Dream Loop Frustration:** Users report long‑running Dream consolidations that stall the terminal and waste compute resources. The missing `maxIterations` setting is a clear pain point.  
- **QQ Noise:** Auto‑compaction notices clutter the chat feed, making it hard to distinguish user messages from system notifications.  
- **Provider Reliability:** Nvidia NIM timeout errors leave users with a “frozen” agent, breaking workflow continuity.  
- **PWA Performance:** Cold‑start lag and iOS display issues degrade the WebUI experience on mobile, especially for first‑time users.  
- **Mobile UX:** Double‑tap to open a session and unexpected focus on the search button reduce the perceived responsiveness of the WebUI on phones.  
- **Positive Signals:** The unified “one agent, more places to work” concept is well‑received; users appreciate the ability to switch between terminal and WebUI without losing context.  

Overall satisfaction remains high for core functionality, but UI/UX and stability refinements are needed to polish the experience.

---

### 8. Backlog Watch – Items Needing Maintainer Attention
**Critical Open Issues**
- **#5781** – Dream iteration limit (high impact). Fix PR #5782 is ready; needs merge.
- **#5784** – QQ compaction notifications (noise). Fix PR #5780 is ready; needs merge.
- **#5674** – Nvidia NIM timeout handling (high impact). No fix yet; investigation pending.

**Open PRs Awaiting Merge**
- **#5748** – Partial tool progress persistence (reliability). Ready for review.
- **#5779** – File‑write serialization (data integrity). Ready for review.
- **#5750** – Tool invocation context exposure (developer feature). Ready for review.
- **#5782** – Dream iteration enforcement (addresses #5781). Ready for review.
- **#5780** – Stop compaction notifications (addresses #5784). Ready for review.
- **#5776** – Search in provider pickers (UX). Ready for review.
- **#5777** – Stop mobile drawer focus theft (addresses #5770). Ready for review.

- **#5666** – Aimlapi provider integration (new gateway). Still in the queue behind other stabilization work.
- **#5626** – Copy/Move file tools (filesystem primitives). Conflict resolution needed.

**Next Steps for Maintainers**
1. Merge the stabilization fixes (#5748, #5779, #5750, #5782, #5780, #5776, #5777) to reduce known bugs and improve reliability.
2. Review and either integrate or prioritize the new provider (`aimlapi`) and filesystem tools (`copy_file`, `move_file`) based on community demand.
3. Address the Nvidia NIM timeout bug (#5674) – consider provider‑error resilience improvements.
4. Follow up on UI/UX items (#5773, #5772, #5771) with dedicated performance and styling fixes.

*All links point to the HKUDS/nanobot repository.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest - 2026-09-16

## 1. Today's Overview
The Hermes Agent project shows high activity today with 50 issues and 50 pull requests updated in the last 24 hours. Despite no new releases, the project is progressing steadily through targeted bug fixes and feature improvements. The development team appears to be focusing on stability enhancements, particularly around desktop integration, gateway management, and cross-platform compatibility. The mix of open/closed PRs indicates both ongoing development and effective triage of critical issues.

## 2. Releases
**No new releases** for today. The project maintains its current release cadence with no new version tags published.

## 3. Project Progress
### Merged/Closed PRs Today:
- **#111385** - *fix(update): wait for fleet state publication after supervised restart* - CLOSED
  - Resolved fleet_restart_pending marker issue after successful updates (Source: JoaoMarcos44)

- **#112259** - *hermes update no longer fails fleet verification on a slow gateway boot* - CLOSED
  - Extended fleet verification polling to 120s and improved gateway restart detection (Source: teknium1)

- **#112288** - *Multiplex gateway boot no longer re-scans every plugin's source per profile* - CLOSED
  - Cached plugin scanning to improve gateway boot performance (Source: teknium1)

- **#112341** - *fix(desktop): route tile tab title heals when its plugin route registers late* - CLOSED
  - Fixed desktop plugin route title registration timing issues (Source: teknium1)

- **#112347** - *fix(desktop): remembered plugin page survives boot when the session list beats disk plugins* - CLOSED
  - Preserved remembered plugin pages across desktop restarts (Source: teknium1)

### Active PRs:
- **#112390** - *feat: numbered env keys (KEY_2, KEY_3, …) join the credential pool automatically*
  - Adds multi-key rotation support for NVIDIA_API_KEY_2, NVIDIA_API_KEY_3, etc. (Source: teknium1)

- **#112280** - *fix(mcp): HTTP/SSE MCP servers honor HTTP_PROXY / system proxy settings*
  - Improves MCP server connectivity through proxy configurations (Source: teknium1)

- **#112230** - *fix(gateway): tool.completed run events report structured tool failures*
  - Enhanced tool failure reporting with redacted result previews (Source: teknium1)

## 4. Community Hot Topics
### Most Active Issues by Comments:

1. **#88584** - *Automated Nous integration is blocked* (104 comments)
   - *Status: OPEN* | *Created: 2026-08-17*
   - Scheduled merge conflicts in `cron/jobs.py` preventing automated integration (Source: echokos)

2. **#97681** - *Bot Group Chats should keep working after Desktop closes* (29 comments)
   - *Status: OPEN* | *Created: 2026-08-29*
   - Feature request for persistent group chats across device restarts (Source: dokterdok)

3. **#103483** - *[Bug] muse-spark turns end mid-task with unrelated final word* (15 comments)
   - *Status: OPEN* | *Created: 2026-09-05*
   - Streaming issues causing random word corruption in responses (Source: apoapostolov)

4. **#111761** - *[Bug] reasoning is promoted into assistant content on clean stop*
   - *Status: OPEN* | *Created: 2026-09-15*
   - DeepSeek reasoning pollution in assistant messages (Source: lijing200609)

5. **#98647** - *Desktop: 401 from WS-ticket mint reported as gateway unreachable*
   - *Status: OPEN* | *Created: 2026-08-30*
   - Authentication error misrepresentation in desktop client (Source: kerfern)

## 5. Bugs & Stability
### Critical Issues (P1):

1. **#103483** - *muse-spark streaming corruption* (11 upvotes)
   - Affects 1.2 and 1.3 versions, causing mid-task termination with unrelated final words

2. **#111761** - *DeepSeek reasoning pollution*
   - Reasoning content incorrectly promoted to visible assistant messages, corrupting history

3. **#111949** - *Desktop SSH mode unusable with zsh shells*
   - Fatal `set -m` command in non-interactive zsh shells, blocking remote connections

### High Priority (P2):

1. **#111996** - *Failed compaction multiplies history rows*
   - [CLOSED] History repair re-appends entire turn history, causing exponential growth

2. **#105675** - *83% Token Consumption discrepancy in API logging*
   - Critical billing accuracy issue with Anthropic API usage reporting

3. **#108200** - *Bedrock Converse text deltas misordering*
   - ToolUse deltas disrupt session state, causing "does not support assistant message prefill" errors

## 6. Feature Requests & Roadmap Signals
### Proposed Features:

1. **#38280** - *Agent Economic Layer*
   - Native wallet, service registration, and reputation ledger for autonomous economic activity

2. **#55811** - *Runtime-enforced capability contracts*
   - High-risk tool execution safety mechanisms with runtime enforcement

3. **#77146** - *Desktop Electron upgrade*
   - Upgrade from Electron 40.10.2 to 43.2.0 for security patches and Chromium updates

4. **#112359** - *MoA UX clarity*
   - Make aggregator slot billing obvious in Model of Agents configurations

## 7. User Feedback Summary
### Common Pain Points:
- **Streaming Issues**: Multiple reports of corrupted output during AI model interactions
- **Authentication Problems**: 401 errors misreported as gateway connectivity issues
- **Desktop Stability**: Persistent issues with backend respawning and plugin registration
- **Session Management**: Group chats not persisting after desktop closure
- **Platform Compatibility**: Windows Docker and zsh shell compatibility issues

### Satisfaction Signals:
- Several bug fixes have received upvotes (e.g., #103483 with 11 likes)
- Active development on kanban system improvements (#112270, #112269)
- Progressive MCP server proxy support enhancements (#112280)
- Credential pool improvements (#112390)

## 8. Backlog Watch
### Long-Unanswered Critical Issues:

1. **#88584** - *Automated Nous integration blocked* (37 days old, 104 comments)
   - Critical integration dependency impacting automated workflows

2. **#38280** - *Agent Economic Layer* (93 days old, 5 comments)
   - Fundamental feature request for autonomous economic participation

3. **#105675** - *83% Token Consumption discrepancy* (30 days old, 1 comment)
   - Financial accuracy issue requiring immediate attention

4. **#98647** - *Desktop authentication error reporting* (26 days old, 2 comments)
   - Diagnostic clarity issue affecting user troubleshooting

5. **#77146** - *Desktop Electron upgrade* (22 days old, 2 comments)
   - Security and feature update request for desktop client

### Unresolved PRs Needing Attention:
- **#104353** - *Native Skills over MCP prototype* - Awaiting decision on SEP-2640 implementation
- **#111385** - *Update fleet verification* - Merged but multiple salvage attempts indicate complexity
- **#112259** - *Slow gateway boot fix* - Merged but indicates ongoing verification challenges

The project shows strong engineering focus on stability while maintaining momentum on feature development, particularly around authentication, streaming quality, and cross-platform compatibility.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest – 2026‑09‑16**

---

### 1. Today's Overview  
The PicoClaw repository shows modest activity today: two open issues remain unresolved and four pull‑requests have been updated, of which one (PR #3380) was merged and closed. No new releases were published, indicating the project is still in a development‑heavy phase focused on bug‑fixes and feature‑enrichment rather than shipping stable versions. Overall health appears stable, but two lingering data‑integrity bugs could undermine user confidence if left unaddressed. The community is actively contributing (three PRs updated, one merge) while maintainers have yet to close the critical config‑related bugs.

---

### 2. Releases  
**None** – No new releases were published in the last 24 h.

---

### 3. Project Progress  
**Merged / Closed PR:**  
- **PR #3380** – *feat(mesh): observability — peer conns/score/bandwidth, activity feed, SSE events (Track 63)* ✅  
  - Added rich peer status fields (`conns[]`, `latency_ms`, `score`, `last_seen`).  
  - Integrated libp2p bandwidth reporting and activity‑feed SSE events.  
  - Marks a significant step toward full mesh observability.  

**Open PRs under review:**  
- **PR #3375** – *fix(config): guard lazy sensitive‑data cache against concurrent init* – addresses the data‑race causing a nil replacer panic.  
- **PR #3372** – *fix(config): make the reaction tool configurable* – fixes mis‑wired tool registration and adds missing `reaction` field.  
- **PR #3370** – *feat(tools): add Keenable web search provider* – integrates Keenable as a `web_search` tool with public‑endpoint support.  

These PRs collectively improve configurability, security, and tooling, indicating continued forward momentum.

---

### 4. Community Hot Topics  
| Item | Comments / Reactions | Link | Underlying Need |
|------|----------------------|------|----------------|
| **Issue #3374** – Data race in `Config.initSensitiveCache` | **1** | [sipeed/picoclaw Issue #3374](https://github.com/sipeed/picoclaw/issues/3374) | Critical security & stability bug; users rely on `FilterSensitiveData` not panicking. |
| **Issue #3373** – `SaveConfig` silently deletes API keys | **1** | [sipeed/picoclaw Issue #3373](https://github.com/sipeed/picoclaw/issues/3373) | Data‑loss concern; users need confidence that config round‑trips preserve secrets. |
| **PR #3380** – Mesh observability feature | 0 (merged) | [sipeed/picoclaw PR #3380](https://github.com/sipeed/picoclaw/pull/3380) | Community demand for richer peer monitoring and diagnostics. |

The two bug reports dominate discussion (each with a comment), highlighting immediate stability concerns, while the merged observability feature signals a longer‑term roadmap priority.

---

### 5. Bugs & Stability  
| Severity | Bug | Description | Fix PR? |
|----------|-----|-------------|----------|
| **High** | **#3374 – Data race in `Config.initSensitiveCache`** | Un‑synchronised lazy creation of `sensitiveCache` leads to `nil *strings.Replacer` and panic in `FilterSensitiveData`. | **Yes – PR #3375** (guards cache creation with proper `sync.Once`). |
| **Medium** | **#3373 – `SaveConfig` silently deletes API keys** | `model_list` entries with multiple `api_keys` lose all but the first after a `LoadConfig` → `SaveConfig` round‑trip; leaves dangling `fallback` references. | **No fix yet** – still awaiting maintainer attention. |

The high‑severity data‑race bug now has a corrective PR; the medium‑severity data‑loss bug remains open and should be prioritized.

---

### 6. Feature Requests & Roadmap Signals  
- **Keenable Web Search** (PR #3370) – Adds a new `web_search` provider that works out‑of‑the‑box with a public endpoint. Signals growing interest in external AI‑enabled tools.  
- **Configurable Reaction Tool** (PR #3372) – Makes the `reaction` tool explicitly configurable, improving flexibility for users who want to toggle it.  
- **Mesh Observability** (PR #3380) – Introduces peer‑connection metrics, bandwidth reporting, and activity‑feed SSEs, a major feature for network monitoring.  

These three themes (tool enrichment, configurability, observability) are likely to shape the next release cycle, especially once the lingering bugs are cleared.

---

### 7. User Feedback Summary  
- **Pain Points:**  
  - Users reported crashes when `FilterSensitiveData` encounters a nil replacer (Issue #3374).  
  - Silent loss of API keys after routine config saves erodes trust in the config system (Issue #3373).  
- **Satisfaction Drivers:**  
  - New tools like Keenable improve out‑of‑the‑box functionality.  
  - Enhanced observability gives operators visibility into mesh health, a highly requested feature.  
- **Overall Sentiment:** Mixed – active development brings excitement, but unresolved stability bugs generate frustration and demand quick fixes.

---

### 8. Backlog Watch  
- **Issue #3373** – *SaveConfig silently deletes API keys* – No fix PR yet; requires maintainer review to prevent data loss.  
- **Issue #3374** – *Data race in Config.initSensitiveCache* – Fix PR exists ( #3375 ), but pending merge/review; watch for integration.  
- **PR #3375** – Needs final review to ensure synchronization is robust across all code paths.  
- **PR #3372** – Pending review; once merged, the reaction tool will be fully configurable.  

These items should be prioritized in the upcoming sprint to solidify stability and close the most visible bug loops.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest - 2026-09-16

## 1. Today's Overview
NanoClaw shows significant development activity with 5 issues updated (2 open, 3 closed) and 38 PRs processed (20 merged/closed, 18 open). The project is actively addressing stability concerns around WebSocket timeouts, setup reliability on headless systems, and credential management. While no releases were made today, substantial technical improvements are being integrated to enhance performance, security, and user experience.

## 2. Releases
No new releases exist for today's digest.

## 3. Project Progress
Several major technical advances closed today:
- **PR #3830**: Fixed webhook port testing flakiness by using kernel-allocated ports instead of random selection
- **PR #3829**: Performance optimization for cross-session echo fan, bounding it to hot set to prevent wake latency growth
- **PR #3827**: Codex refactoring to use provider tone contract for personality settings
- **PR #3826**: Provider tone settings declaration for default tone and native mapping
- **PR #3822**: Added `.worktrees/` to `.gitignore` to prevent untracked files from worktree operations

These changes indicate a focus on performance optimization, code cleanup, and improved testing reliability.

## 4. Community Hot Topics
**Issues with Most Engagement:**
- **#3338** (OPEN) - "Codex WebSocket idle retry is hidden until NanoClaw’s 10-minute turn timeout" - 3 comments - [View](https://github.com/nanocoai/nanoclaw/issues/3338) - Critical stability issue where Telegram requests can remain silent for 10 minutes when Codex WebSocket stalls
- **#1981** (CLOSED) - "v2 setup: systemd misdetected as absent on headless Linux" - 2 comments - [View](https://github.com/nanocoai/nanoclaw/issues/1981) - Setup detection problems on headless systems
- **#3354** (CLOSED) - "Setup leaves 0-byte channel files... onecli check runs before its own PATH fix" - 1 comment - [View](https://github.com/nanocoai/nanoclaw/issues/3354) - Installation bugs with non-login SSH sessions

The underlying need: improved reliability for headless deployments and better error handling for network timeouts.

## 5. Bugs & Stability
**Critical Severity Bugs:**
1. **#3338** (OPEN) - Codex WebSocket idle retry not surfaced to NanoClaw, causing 10-minute silent periods
2. **#3828** (OPEN) - Cutover drain can never succeed - service stops before waiting on agent containers

**High Severity Bugs (Closed):**
1. **#3354** - Setup creates 0-byte channel files on failed git-show copy, PATH issues in headless installs
2. **#3684** - `update-nanoclaw` captures symlinks instead of content when data/groups are symlinked
3. **#1981** - Systemd misdetected as absent on headless Linux systems

The system shows active bug resolution with 3 critical fixes closed and 2 major stability issues currently open.

## 6. Feature Requests & Roadmap Signals
**Major Features in Progress:**
- **#3764** - `/add-voice` skill for full-duplex browser conversations with GPT-Live-1
- **#3697** - Keenable MCP tool skill for web search and page fetch
- **#3817** - Iron Proxy gateway with Iron Control integration
- **#3818** - Gateway selection without changing provider login
- **#3815** - Centralized credential gateway contract
- **#3722** - Provider refactoring to adopt OpenCode contract
- **#3826** - Provider tone settings declaration framework
- **#3781** - Tools-only delivery enforcement for agent groups
- **#3796** - OpenTelemetry tracing for agent containers
- **#3743** - AgentMail email channel adapter (no MX records required)
- **#3726** - Proton Mail channel adapter via Proton Mail Bridge
- **#3799** - Signal inbound attachment staging fix

The roadmap strongly indicates focus on authentication infrastructure, multi-modal capabilities, and improved reliability.

## 7. User Feedback Summary
Users are reporting pain points around:
- **Headless installation reliability** - Setup assumes interactive shells, causing PATH and symlink issues
- **Network timeout handling** - WebSocket idle retries not properly surfaced
- **Credential management complexity** - Multiple gateways and authentication methods
- **Missing email capabilities** - Requests for email channels without DNS/MX ownership

Dissatisfaction appears concentrated in setup reliability for non-traditional environments (SSH-only, headless).

## 8. Backlog Watch
**High-Priority Unaddressed Issues:**
- **#3338** (OPEN, 3 comments) - Critical stability bug with 10-minute silent periods
- **#3828** (OPEN, 0 comments) - Cutover drain impossibility - blocking issue for updates

**Emerging Concerns:**
- **Gateway complexity** - Multiple PRs addressing credential management suggest architectural complexity
- **Provider contract evolution** - Multiple refactoring PRs indicate evolving interface standards

**Maintainer Attention Needed:**
1. **WebSocket timeout issue** (#3338) - Affects core reliability
2. **Cutover drain problem** (#3828) - Blocks update functionality  
3. **Headless setup reliability** - Multiple related issues suggest systematic problem

The project shows healthy development velocity with strong focus on stability improvements and infrastructure modernization. Critical attention should be paid to the WebSocket timeout issue and cutover drain problem as they directly impact core functionality.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-09-16

## 1. Today's Overview
LobsterAI showed a **high-activity day** with 30 PRs updated (20 merged/closed, 10 open) against just 3 issues updated — indicating the project is in a heavy **development/stabilization phase** rather than a community-discussion phase. The dominant theme is clearly **OpenClaw compatibility and upgrade repair**: 10+ PRs (most from 2026-09-15) address runtime breakage after upgrading to OpenClaw v2026.8.1. A release train (`Release/2026.9.15`, PR #2687) was merged, though no formal GitHub release was published in the last 24h. Contributor-driven PRs from March (#1142–#1151) were bulk-closed as stale, suggesting a backlog cleanup pass.

## 2. Releases
No new GitHub releases in the last 24h. However, **PR #2687 "Release/2026.9.15"** was merged, signaling that version **v2026.9.15** is staged. Based on its merged contents, it will likely include the OpenClaw compatibility repair batch (#2683, #2679, #2681–#2686). Users upgrading to OpenClaw v2026.8.1 should treat this release as **strongly recommended** given the volume of upgrade-repair fixes.

## 3. Project Progress
**Merged/closed PRs (20 total)** — key advances:

- **OpenClaw v2026.8.1 compatibility wave** (the day's core work, mostly by `fisherdaddy` and `btc69m979y-dotcom`):
  - [#2683](https://github.com/netease-youdao/LobsterAI/pull/2683) — feat: openclaw compatibility repair (umbrella fix)
  - [#2679](https://github.com/netease-youdao/LobsterAI/pull/2679) — post-upgrade gateway state repair (backup, official `doctor` repair, memory index/plugin recovery)
  - [#2681](https://github.com/netease-youdao/LobsterAI/pull/2681) — recover invalid legacy `memory/.dreams/` JSON blocking gateway startup
  - [#2682](https://github.com/netease-youdao/LobsterAI/pull/2682) — validate historical transcript replay (crashed on malformed content blocks)
  - [#2678](https://github.com/netease-youdao/LobsterAI/pull/2678) — preserve compaction summary format and audit facts in long sessions
  - [#2684](https://github.com/netease-youdao/LobsterAI/pull/2684) — prevent heuristic output budget starvation (output tokens wrongly squeezed to 1)
  - [#2685](https://github.com/netease-youdao/LobsterAI/pull/2685) / [#2686](https://github.com/netease-youdao/LobsterAI/pull/2686) — preserve patched workspace dependencies in OpenClaw runtime build
  - [#2677](https://github.com/netease-youdao/LobsterAI/pull/2677) — restore sanitized technical error details on error cards
  - [#2664](https://github.com/netease-youdao/LobsterAI/pull/2664) — fix POPO SDK `ERR_REQUIRE_ESM_RACE_CONDITION` on plugin load

- **Backlog cleanup**: stale March PRs closed — [#1142](https://github.com/netease-youdao/LobsterAI/pull/1142) (skill quick-create), [#1143](https://github.com/netease-youdao/LobsterAI/pull/1143) (agent default icon), [#1144](https://github.com/netease-youdao/LobsterAI/pull/1144) (task last-run time), [#1145](https://github.com/netease-youdao/LobsterAI/pull/1145) (team config template export/import), [#1146](https://github.com/netease-youdao/LobsterAI/pull/1146) (duplicate-agent task records); stale issues [#1149](https://github.com/netease-youdao/LobsterAI/issues/1149) and [#1151](https://github.com/netease-youdao/LobsterAI/issues/1151) also closed.

**Still open**: [#2680](https://github.com/netease-youdao/LobsterAI/pull/2680) (preserve model policy during config sync) and [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) (dependabot Electron 43→44 bump).

## 4. Community Hot Topics
Comment data is sparse (0 👍 across items, comment counts 0–2), but attention clusters around:

- **[Issue #2342 — "Can the bottom-left ad be permanently disabled?"](https://github.com/netease-youdao/LobsterAI/issues/2342)** (OPEN, since 2026-07-15) — a user on v2026.7.15 complained about a new ad banner with no permanent off switch. Directly matched by open PR **[#2374 — add permanent setting to hide sidebar ad banner](https://github.com/netease-youdao/LobsterAI/pull/2374)**. **Underlying need**: users want an ad-free local experience from a desktop AI assistant; monetization UX is the friction point and a reputational risk for an open-source project.
- **[Issue #1149 — Vitest unit tests for coworkMemoryExtractor](https://github.com/netease-youdao/LobsterAI/issues/1149)** (CLOSED as stale) — signals community appetite for test coverage of the memory system's regex-heavy core; the 35-case test suite was proposed but the issue aged out.
- **OpenClaw upgrade thread (PRs #2677–#2686)** — driven by real user logs and unreported breakage (multiple PRs cite "from user feedback, no public issue"), showing users are actively upgrading and hitting failures.

## 5. Bugs & Stability
Ranked by severity (all fix PRs merged same-day — excellent responsiveness):

| Severity | Bug | Fix |
|---|---|---|
| 🔴 Critical | Legacy `memory/.dreams/` JSON corruption **blocks gateway startup entirely** | [#2681](https://github.com/netease-youdao/LobsterAI/pull/2681) ✅ |
| 🔴 Critical | Malformed historical transcript blocks crash request prep → tasks unrecoverable | [#2682](https://github.com/netease-youdao/LobsterAI/pull/2682) ✅ |
| 🔴 High | Output budget heuristic drops output tokens to 1 → models "succeed" with empty responses | [#2684](https://github.com/netease-youdao/LobsterAI/pull/2684) ✅ |
| 🟠 High | Patched workspace deps dropped from packaged runtime (`prepareReplayMessages` missing) | [#2685](https://github.com/netease-youdao/LobsterAI/pull/2685), [#2686](https://github.com/netease-youdao/LobsterAI/pull/2686) ✅ |
| 🟠 Medium | POPO SDK ESM race leaves gateway without account listeners | [#2664](https://github.com/netease-youdao/LobsterAI/pull/2664) ✅ |
| 🟠 Medium | Config sync deletes migrated model policy → repeated spurious config writes | [#2680](https://github.com/netease-youdao/LobsterAI/pull/2680) 🔶 **still open** |
| 🟡 Low | Compaction summary format conflict degrades long-session summaries | [#2678](https://github.com/netease-youdao/LobsterAI/pull/2678) ✅ |
| 🟡 Low | Error cards missing technical details post-upgrade | [#2677](https://github.com/netease-youdao/LobsterAI/pull/2677) ✅ |

**Assessment**: The OpenClaw v2026.8.1 upgrade introduced a broad regression surface; today's merges substantially de-risk it, but #2680 should be prioritized before wide rollout.

## 6. Feature Requests & Roadmap Signals
- **Permanent ad-banner hide toggle** ([#2374](https://github.com/netease-youdao/LobsterAI/pull/2374), open) — user-pull is strong; high probability of landing in the next minor release.
- **Model policy preservation in config sync** ([#2680](https://github.com/netease-youdao/LobsterAI/pull/2680), open) — near-certain for v2026.9.x.
- **Hide OpenClaw main agent sessions from session list** ([#1181](https://github.com/netease-youdao/LobsterAI/pull/1181), open since 2026-04-01) — internal-session hygiene; likely folded into an upcoming release if revived.
- **Team config template export/import** ([#1145](https://github.com/netease-youdao/LobsterAI/pull/1145), closed stale) — strong enterprise/team signal; may return as a roadmap item.
- **Scheduled task UX polish** ([#1144](https://github.com/netease-youdao/LobsterAI/pull/1144)) — low-cost additions likely to be re-proposed.

## 7. User Feedback Summary
- **Frustration with advertising**: the single clearest user complaint ([#2342](https://github.com/netease-youdao/LobsterAI/issues/2342)) — a new ad banner in v2026.7.15 with no opt-out erodes trust in an otherwise self-hosted-feeling product.
- **Pain from upgrades**: multiple users hit startup failures, empty model responses, and unrecoverable tasks after OpenClaw v2026.8.1 — issues were debugged from user-provided logs, showing engaged users but also that upgrade paths need hardening and better auto-repair (the `doctor`-based repair in #2679 is a step in the right direction).
- **Positive**: maintainers/contributors turned around fixes within one day; users provide detailed logs and reproduction steps, indicating a technically invested community.

## 8. Backlog Watch
- **[Issue #2342](https://github.com/netease-youdao/LobsterAI/issues/2342)** — open since 2026-07-15 with only 2 comments; PR [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374) has sat open since 2026-07-21. This user-facing request deserves a review/merge decision.
- **[PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277)** — dependabot Electron 43.5.0→44.3.0 bump, open since 2026-04-02 (~5.5 months). Major-version Electron upgrades accumulate risk the longer they wait; needs CI validation or explicit deferral.
- **[PR #1181](https://github.com/netease-youdao/LobsterAI/pull/1181)** — hiding internal OpenClaw sessions from the Cowork list; open since 2026-04-01. Small, sensible UX fix worth reviving.
- **[PR #2680](https://github.com/netease-youdao/LobsterAI/pull/2680)** — not old, but the only unresolved OpenClaw regression fix from the current wave; flag for inclusion in the next patch release.

**Health verdict**: 🟢 Strong engineering velocity and same-day bug turnaround; 🟡 watch points are upgrade-path fragility around OpenClaw and unresolved community friction over ad UX.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis Project Digest – 2026‑09‑16**

---

### 1. Today's Overview  
The repository shows a quiet day with **one open issue** and **two new pull requests** but **no releases**. Activity is limited to ongoing maintenance (image‑build caching and OAuth test stability) and a long‑standing feature request for OpenAI endpoint customization. No merges or closed tickets were recorded, indicating the team is still in a review‑focused phase.

### 2. Releases  
**None** – no new versions were published in the last 24 h.

### 3. Project Progress  
- **No merged/closed PRs today.**  
- **Open PRs awaiting review:**  
  - **#1270 (feat(build): cache cargo across image builds, and script building the image)** – improves build performance by moving Cargo’s target directory and registry into BuildKit cache mounts, reducing recompilation on source changes.  
  - **#1269 (test(oauth): remove success‑popup timing race)** – fixes a flaky test (moltis‑064r) by waiting for a durable authentication state instead of relying on immediate popup events.  

### 4. Community Hot Topics  
**Issue #205 – “Allow setting body parameters for custom OpenAI endpoints (and per‑model)”**  
- **Comments:** 2 (no 👍 reactions)  
- **Link:** https://github.com/moltis-org/moltis/issues/205  
- **Underlying need:** Users want finer‑grained control over request bodies when calling custom OpenAI‑compatible endpoints, including per‑model overrides. This suggests a demand for configurability beyond the current one‑size‑fits‑all parameter handling, likely driven by diverse AI‑service integrations.

### 5. Bugs & Stability  
- **No bug reports or crashes were filed in the last 24 h.**  
- The two open PRs actually address stability (the OAuth timing race) and performance (cargo caching), indicating proactive stability work.

### 6. Feature Requests & Roadmap Signals  
- The sole active feature request (**#205**) signals a **road‑map priority**: expanding the flexibility of OpenAI endpoint interactions. If addressed, it would enable users to tailor request bodies per endpoint or per model, supporting more complex AI‑workflow integrations. This aligns with a broader trend toward configurable, provider‑agnostic AI client libraries.

### 7. User Feedback Summary  
- **Feedback volume is low** (only two comments on the feature request).  
- The OAuth test fix (#1269) hints at user‑facing reliability concerns in the authentication flow, which, once resolved, should improve overall satisfaction.  
- No explicit satisfaction/dissatisfaction metrics are available; the community appears to be waiting for the OpenAI‑parameter feature to be delivered.

### 8. Backlog Watch  
- **Issue #205** (opened 2026‑02‑22, last updated 2026‑09‑15) remains unanswered and is the only open issue awaiting prioritization.  
- **Pull Requests #1270 and #1269** are both open and likely awaiting maintainer review/merge. Their progress will be crucial for both build performance and test reliability.  

**Next steps:** Review and merge the caching and OAuth‑test fixes, and assess the OpenAI body‑parameter request to determine its impact on the upcoming release cycle.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw Project Digest – 2026‑09‑16**

---

### 1. Today's Overview
- **Issue activity**: 28 issues were updated (12 still open/active, 16 closed). The community continues to surface both feature‑wish and bug reports, with the most‑commented thread (#7318) shaping the upcoming QwenPaw Hub roadmap.  
- **PR activity**: 50 pull‑requests were touched today (25 still open, 25 merged/closed). Development is vigorous; the bulk of today’s merges address bugs, UI layout, and provider capability work.  
- **Release cadence**: No new releases were published today – the project remains on the 2.2.x beta line pending stabilization of recent Hub and performance fixes.  
*Overall health*: A healthy flow of fixes and new features, but the backlog of open bugs (especially around sub‑agent spawning, MCP connectivity, and file‑preview auth) suggests some integration complexity that may need focused attention.

---

### 2. Releases
**None** – the 2.2.x beta line is still in flux; no new version was cut today.

---

### 3. Project Progress – PRs Merged / Closed Today
| # | Title | Type | Core Impact |
|---|-------|------|-------------|
| **PR #7796** | `fix(agents): diagnose dropped subagent model overrides` | Bug fix | Sub‑agent overrides now log errors instead of silently disappearing. |
| **PR #7795** | `fix(skills): expand multi‑agent collaboration trigger keywords` | Feature | Skill‑selection understands more “team”‑style prompts (e.g., “work together”, “split task”). |
| **PR #7794** | `feat(providers): add DeepSeek V4 Flash capabilities` | Provider | DeepSeek V4 Flash appears with 1 M‑token window and image input in model picker. |
| **PR #7779** | `feat(hub): add model gateway, member governance & usage dashboard` | Hub feature | Hub now acts as an org‑wide model gateway; members pick from centrally published models. |
| **PR #7790** | `feat(console): add unified chat workbench shell` | UI/UX | Right‑hand workbench (Files, Changes, Terminal, Tools) replaces the old Files‑only workspace panel. |
| **PR #7789** | `feat(proj dir): support configurable multi‑folder default workspaces` | Config | Users can define and persist multi‑folder workspace layouts for future tasks. |
| **PR #7791** | `feat(mail): support custom IMAP/SMTP servers via provider "custom"` | Integration | Email management now accepts self‑hosted mail servers, not just built‑in domains. |
| **PR #7737** | `fix(skills): expand multi‑agent collaboration trigger keywords` (closed) | Feature | Same scope as #7795 – duplicate PR merged. |
| **PR #7736** | `feat(providers): add DeepSeek V4 Flash capabilities` (closed) | Provider | Duplicate of #7794 – merged. |
| **PR #7735** | `fix(mcp): preserve decoded HTTP error responses` (closed) | Bug fix | MCP HTTP errors now retain useful body text after retry. |
| **PR #7680** | `fix(agents): diagnose dropped subagent model overrides` (closed) | Bug fix | Same as #7796 – duplicate. |
| **PR #7759** | `fix(console): restore visible link focus indicators` (closed) | UI | Improves accessibility focus style for keyboard navigation. |
| **PR #7758** | `fix(console): align embedding timeout validation` (closed) | Config | Embedding health‑check timeout now validates >0 & ≤300 s, with clear feedback. |
| **PR #7756** | `fix(memory): distinguish empty error notifications` (closed) | UI | Empty error results are shown as separate failure alerts. |
| **PR #7644‑7632** *(others)* | Miscellaneous UI, memory, and plugin fixes | Misc. | Contribute to overall stability. |

**Key takeaways**:  
- **Bug‑fix momentum**: 8+ PRs address runtime reliability (sub‑agent config, MCP errors, focus UI).  
- **Hub & governance**: Two major PRs (#7779, #7790) move the platform toward a multi‑tenant, organization‑level model gateway and a modern chat workbench.  
- **Provider enrichment**: DeepSeek V4 Flash is now catalogued, expanding model choice for users on OpenAI‑compatible endpoints.  

---

### 4. Community Hot Topics (Most Engaged)

| Issue | Comments / 👍 | Core Theme | Link |
|-------|---------------|------------|------|
| **#7318** – “QwenPaw Hub, the multi‑tenant edition, is coming in 2.2.0: what should we build next?” | **27** comments, **4**👍 | Feature direction for Hub (multi‑tenant collaboration, admin‑managed skills). | https://github.com/agentscope-ai/QwenPaw/issues/7318 |
| **#7678** – “spawn subAgent … all tasks fail / timeout” | **7** comments, **0**👍 | Sub‑agent lifecycle and timeout handling (high severity). | https://github.com/agentscope-ai/QwenPaw/issues/7678 |
| **#7567** – “执行中的任务，点了停止后 … 依然在执行” (stop‑button bug) | **7** comments, **0**👍 | UI stop‑action not terminating background tasks. | https://github.com/agentscope-ai/QwenPaw/issues/7567 |
| **#7792** – “WeChat video/audio attachments become file:// URLs” | **1** comment | WeChat attachment encoding for multimodal APIs. | https://github.com/agentscope-ai/QwenPaw/issues/7792 |
| **#7775** – “max_iters ends the turn with no final answer” | **1** comment | React turn termination without user feedback. | https://github.com/agentscope-ai/QwenPaw/issues/7775 |

**Analysis**:  
- The **Hub roadmap discussion** (#7318) is the most vibrant, indicating strong community interest in multi‑tenant orchestration and admin‑managed skill publishing.  
- **Operational reliability** (sub‑agent spawning, stop‑button handling) ranks second, reflecting real‑world usage friction.  
- The remaining open bugs are lower‑volume but still affect specific use‑cases (WeChat media, iteration budgeting).

---

### 5. Bugs & Stability – Today’s Reported Issues (Ranked by Severity)

| # | Severity* | Summary | Impact |
|---|-----------|---------|--------|
| **#7678** | **High** | Sub‑agent spawn times out for all tasks; even large timeouts do not help. | Halts team‑collaboration workflows. |
| **#7567** | **High** | “Stop” button disappears the UI indicator but the task keeps running (waste of resources, possible conflicts). | Poor user control over long‑running agents. |
| **#7767** | **Medium** | Console attachment stale blob, cron misfire, `on_acting` never fires (guardrail plugin). | Degraded plugin reliability and UI consistency. |
| **#7789** | **Medium** | PDF document blocks still sent to multimodal `/chat/completions` endpoints, causing HTTP 400. | Breaks multimodal model compatibility. |
| **#7792** | **Medium** | WeChat audio/video attachments become `file://` URLs → upstream API rejects them. | Corrupts multimodal input for WeChat channel. |
| **#7771** | **Low** | Context management / new chat creates meaningless blank session titles. | UX clutter. |
| **#7786** | **Low** | Workspace file browser freezes the whole process for 5–6 min on cloud/NFS deployments. | Performance degradation on shared storage. |
| **#7775** | **Low** | `max_iters` termination ends turn silently – no final answer or warning. | Confusing user experience when iteration budget exhausted. |

\*Severity is a qualitative gauge based on likelihood of affecting core workflows.

**Fix status**:  
- **High‑severity** issues (#7678, #7567) have **no merge yet** (still open).  
- **Medium** bugs (#7767, #7789, #7792) have **partial fixes** in PRs (e.g., PDF strip fix #7636, MCP error preservation #7735).  
- **Low** issues have **no dedicated fix PRs** (still open for later triage).

---

### 6. Feature Requests & Roadmap Signals
| Request | Community Signal | Likelihood of Next‑Release Inclusion |
|---------|------------------|--------------------------------------|
| **QwenPaw Hub multi‑tenant admin UI** (issue #7318) | 27 comments, active discussion | **High** – hub‑gateway PR (#7779) already adds core governance; UI refinements expected. |
| **Unified “//” tool call syntax** (issues #7778, #7780, #7777) | 2 comments each, repeated PRs | **Medium** – complementary to existing “/” skill picker; may appear as an optional UI tweak. |
| **Advisor Mode** (PR #7569) | Fresh feature PR, no issue yet | **Medium‑High** – already merged; likely enabled by default. |
| **Skills applicability per‑channel** (issue #7746) | 3 comments, clear use‑case | **Low‑Medium** – may surface as a channel‑config panel in next UI sprint. |
| **Background online updates** (issue #7543) | 1 comment, strong pain point | **Medium** – planned but not yet released. |
| **Move history panel to right / layout switching** (issues #7739, #7700) | 6+ comments, multiple iterations | **Medium** – design refresh already in progress (#7790 workbench). |
| **Custom IMAP/SMTP for email** (PR #7791) | Direct PR merged | **High** – now available for self‑hosted mail servers. |
| **Multi‑folder default workspaces** (PR #7789) | Direct PR merged | **High** – already released in console. |
| **Reranker UI config** (PR #6399) | UI enhancement, under review | **Medium** – pending final sign‑off. |

**Predicted next‑release focus (2.2.2‑beta)**:  
1. **Hub governance & model gateway** (admin dashboard, member usage insights).  
2. **Advisor Mode** as a first‑class loop option for team‑based tasks.  
3. **UI layout refinements** – history panel positioning, unified workbench shell, and “//” tool call support.  
4. **Bug‑fixes** for sub‑agent spawning, stop‑button handling, and WeChat media encoding.  

---

### 7. User Feedback Summary
- **Operational pain**: Sub‑agent tasks repeatedly timeout, and the stop button does not truly cancel them – causing wasted compute and user frustration.  
- **Authentication & file preview**: Hub‑mode file previews consistently return **401 Unauthorized** despite a valid session token, indicating a mismatch between token generation and the `/api/files/preview` endpoint.  
- **Multimodal reliability**: PDF blocks and WeChat audio/video attachments are incorrectly encoded for OpenAI‑compatible APIs, leading to HTTP 400 errors.  
- **UI crowding**: On 14″ notebooks, the console panels are congested; users request a right‑hand history view and improved layout scaling (multiple issues #7739, #7700).  
- **Update UX**: Front‑end auto‑updates bring the whole app offline; users want background update installation with a post‑update prompt.  
- **Deployment performance**: Cloud/NFS workspace browsers can freeze the UI for several minutes, hurting productivity on managed instances.  
- **Positive signals**: The Advisor Mode PR and Hub governance work have been welcomed, and the new multi‑folder workspace config is already being used by power users.

---

### 8. Backlog Watch – Issues Requiring Maintainer Attention

| # | Status | Why It Needs Focus |
|---|--------|--------------------|
| **#7749** – Model fault‑switching config location | **Open** (4 comments) | Users cannot find UI for critical HA failover settings – likely a UX gap that should be documented and possibly added to agent config. |
| **#7768** – Cloud deployment model configuration | **Open** (1 comment) | New users on cloud struggle with model binding after GitHub‑SSO; this is a onboarding friction point. |
| **#7650** –

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

**ZeptoClaw Project Digest – 2026‑09‑16**

---

### 1. Today's Overview
The ZeptoClaw repository is in a pure maintenance window. All activity centers on dependency upkeep: 18 new `chore(deps)` pull‑requests (PRs) have been opened, yet none have been merged, indicating a growing backlog of required updates. No issues, releases, or user‑facing bug reports appeared in the past 24 hours, suggesting the project remains stable on the functional side while the tooling stack is being refreshed.

### 2. Releases
*None.* No new releases were published today.

### 3. Project Progress
- **Merged / Closed PRs:** 0  
  *All 18 pending PRs are still open; no features or fixes have progressed to merge today.*  

### 4. Community Hot Topics
- **Active Discussions:** None  
  *All open PRs carry 0 comments and 0 👍 reactions, so there are no high‑traffic topics driving community dialogue.*  

### 5. Bugs & Stability
- **Reported Bugs:** 0  
  *No crash, regression, or stability issues were filed today.*  

### 6. Feature Requests & Roadmap Signals
- **Requested Features:** 0  
  *The issue queue contains no new feature requests, so the roadmap appears unchanged from recent cycles.*  

### 7. User Feedback Summary
- **User Pain Points / Use Cases:** None captured today.  
  *Without new issues, there is no observable user dissatisfaction or emerging use‑case data.*  

### 8. Backlog Watch
| PR # | Target | Dependency | Open Since | Status |
|------|--------|------------|------------|--------|
| 696 | `/landing/zeptoclaw/docs` | `@astrojs/starlight` 0.39.2 → 0.41.10 | 2026‑09‑15 | Open |
| 695 | `/landing/zeptoclaw/docs` | `astro` 6.3.7 → 7.2.2 | 2026‑09‑15 | Open |
| 693 | `/landing/zeptoclaw/docs` | `sharp` 0.34.5 → 0.35.4 | 2026‑09‑15 | Open |
| 691 | `/landing/r8r/docs` | `sharp` 0.34.5 → 0.35.4 | 2026‑09‑15 | Open |
| 690 | – | `clap` 4.6.1 → 4.6.6 | 2026‑09‑15 | Open |
| 694 | – | `base64` 0.22.1 → 0.23.1 | 2026‑09‑15 | Open |
| 687 | – | `docker/login-action` 4.2.0 → 4.6.0 | 2026‑09‑15 | Open |
| 692 | – | `rustls` 0.23.39 → 0.23.43 | 2026‑09‑15 | Open |
| 685 | – | `tokio-serial` 5.4.5 → 5.5.0 | 2026‑09‑15 | Open |
| 683 | – | `Swatinem/rust-cache` 2.9.1 → 2.9.2 | 2026‑09‑15 | Open |
| 689 | `/landing/r8r/docs` | `@astrojs/starlight` 0.39.2 → 0.41.10 | 2026‑09‑15 | Open |
| 688 | – | `async‑trait` 0.1.89 → 0.1.92 | 2026‑09‑15 | Open |
| 686 | `/landing/r8r/docs` | `astro` 6.3.7 → 7.2.2 | 2026‑09‑15 | Open |
| 684 | – | `EmbarkStudios/cargo-deny-action` 2.0.18 → 2.1.1 | 2026‑09‑15 | Open |
| 681 | – | `softprops/action‑gh‑release` 3.0.0 → 3.0.3 | 2026‑09‑15 | Open |
| 682 | – | `taiki‑e/install‑action` 2.79.7 → 2.87.6 | 2026‑09‑15 | Open |
| 680 | – | `debian` (`4e401d9` → `d7e1218`) | 2026‑09‑15 | Open |
| 679 | – | `rust` (`17d1ba8` → `bce1476`) | 2026‑09‑15 | Open |

*All 18 PRs are waiting for maintainer review/approval. The concentration of Rust‑core crates (clap, base64, rustls, async‑trait, tokio‑serial) and JavaScript/ Astro tooling suggests a coordinated upgrade of the build environment and runtime stack.*

---

#### Takeaway
ZeptoClaw is **functionally stable** but facing a **maintenance backlog**. Prioritising review and merge of the pending dependency PRs will reduce technical debt and keep the project aligned with the latest security patches and feature sets. No user‑facing work or urgent bugs require immediate attention at this moment.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-09-16

## 1. Today's Overview

ZeroClaw continues to show high-velocity, multi-threaded development. In the last 24 hours, 50 issues and 50 PRs saw updates — 38 issues and 42 PRs remain open, with 12 issues and 8 PRs closed/merged. No new release was cut, so the project is in a sustained build-and-harden phase rather than a ship phase. Activity is concentrated in three areas: native Anthropic image/multimodal handling (a cluster of bugs and immediate fixes), security hardening (SSRF gating, content-validation bypasses, emergency-stop enforcement), and CI/test reliability (parallel runtime gate, process-environment isolation). A notable milestone is the merge of Phase 1 A2A outbound-client support (#9324), an XL feature that reworks cross-agent tooling. Overall, the project is healthy and busy, but the upstream of "accepted RFCs awaiting durable decision-record follow-through" is growing.

## 2. Releases

None in this window. No version bumps, breaking changes, or migration notes to report.

## 3. Project Progress

Merged/closed items in the last 24 hours include:

- **A2A outbound client, Phase 1** — [zeroclaw-labs/zeroclaw#9324](https://github.com/zeroclaw-labs/zeroclaw/pull/9324) closed: adds four working `a2a_*` tools, a shared A2A v1.0 Serde wire model, and a default-closed `[a2a.client]` config block. This is a significant architectural feature and the foundation for follow-on A2A work.
- **Docs: `llms.txt` / `llms-full.txt` generation** — [zeroclaw-labs/zeroclaw#10840](https://github.com/zeroclaw-labs/zeroclaw/pull/10840) merged: new mdBook renderer writes per-page index and full-text streams to `llms.txt` and `llms-full.txt` (per llmstxt.org), improving documentation consumption by LLM tooling.
- **Telegram secure model picker** — [zeroclaw-labs/zeroclaw#9997](https://github.com/zeroclaw-labs/zeroclaw/pull/9997) merged: adds a provider-grouped, paginated inline keyboard for bare `/model` on Telegram, built only from configured provider aliases and eligible routes.
- **Test hygiene: process-environment isolation** — [zeroclaw-labs/zeroclaw#10125](https://github.com/zeroclaw-labs/zeroclaw/pull/10125) merged: removes 25 unsafe environment-mutation findings across browser, HTTP auth-secret, ACP bridge, xtask, and reference-plugin tests.
- **Bug fixes with closed issues**: `[media attachment]` placeholder leaked to users on non-vision models ([#10625](https://github.com/zeroclaw-labs/zeroclaw/issues/10625)); stale tool-result image-strip cache invalidation ([#10888](https://github.com/zeroclaw-labs/zeroclaw/issues/10888)); reconnect-spawned daemon children cleanup ([#9503](https://github.com/zeroclaw-labs/zeroclaw/issues/9503)); Hailo log assertion correlation under parallel tests ([#10272](https://github.com/zeroclaw-labs/zeroclaw/issues/10272)); category-scoped `read_memory_from` proposal ([#8983](https://github.com/zeroclaw-labs/zeroclaw/issues/8983)).

## 4. Community Hot Topics

The most-discussed items by comment count:

- **[#6909 RFC: Computer-use desktop screen interaction](https://github.com/zeroclaw-labs/zeroclaw/issues/6909)** — 16 comments. Accepted, high-risk RFC for desktop control and input. Revision 2 (2026-08-24) folded in security clarifications and a bounded-approval confirmation boundary from #7155. Underlying need: operator-level GUI/desktop automation with strong safety units and execution-time revalidation.
- **[#9965 Harden runtime-written executable test fixtures](https://github.com/zeroclaw-labs/zeroclaw/issues/9965)** — 12 comments. P1 task tracking tests that write and spawn executable shims after the process becomes multithreaded, under the `Parallel Runtime Test` gate. Underlying need: deterministic CI under parallelism.
- **[#10549 RFC: Simplify RFC voting](https://github.com/zeroclaw-labs/zeroclaw/issues/10549)** — 11 comments. Proposes removing mandatory 48/72-hour discussion windows and making REVISE stop the current vote snapshot. Underlying need: reduce process friction so accepted RFCs move faster.
- **[#9346 RFC: Unified package/capability/config/runtime-state catalog](https://github.com/zeroclaw-labs/zeroclaw/issues/9346)** — 9 comments. Seeks one product-level catalog across integrations, built-ins, and plugins, unifying the narrow CLI (#8908) and gateway (#8909) views. Underlying need: a single source of truth for package metadata and runtime state.

These signal that the community cares as much about *governance velocity* (RFC lifecycle, voting) and *architectural consolidation* as about raw feature delivery.

## 5. Bugs & Stability

Bugs reported or active today, roughly ranked by severity. Several have fix PRs already open.

**S1 / P1 (workflow-blocked or security):**
- **[#10659](https://github.com/zeroclaw-labs/zeroclaw/issues/10659)** — S1: budget-exceeded Code turn loses visible progress after session restore (zerocode/tui). No fix PR identified.
- **[#8627](https://github.com/zeroclaw-labs/zeroclaw/issues/8627)** — S1: WhatsApp Web device linking broken by WhatsApp's passkey/SHORTCAKE gate; the channel renders a QR but pairing never completes. Long-standing since July, only 1 comment; this is a severe channel failure.
- **[#9882](https://github.com/zeroclaw-labs/zeroclaw/issues/9882)** — P1 security: image markers bypass content validation on the `run_model_query` direct-dispatch seam. Fix PR: **[#10894](https://github.com/zeroclaw-labs/zeroclaw/pull/10894)** normalizes image markers on that seam.
- **[#5869](https://github.com/zeroclaw-labs/zeroclaw/issues/5869)** — P1 security: `rumqttc v0.25.1` pins vulnerable `rustls-webpki`/`rustls-pemfile`, a cluster of four RUSTSEC advisories (0049/0098/0099/0104/0134). Blocked since April — a single transitive dependency holds back the whole TLS stack.

**S2 (degraded behavior):**
- **[#10885](https://github.com/zeroclaw-labs/zeroclaw/issues/10885)** — tool-returned images disappear after an unrelated tool call in the same turn (Anthropic). New today; no fix PR yet.
- **[#10889](https://github.com/zeroclaw-labs/zeroclaw/issues/10889)** — native Anthropic provider drops the rolling cache breakpoint when the last message ends with an image block. Fix PR already open: **[#10895](https://github.com/zeroclaw-labs/zeroclaw/pull/10895)**.
- **[#10887](https://github.com/zeroclaw-labs/zeroclaw/issues/10887)** — non-vision capability gate fails a turn on marker-shaped prose that references no loadable image. New today; no fix PR identified.
- **[#10883](https://github.com/zeroclaw-labs/zeroclaw/issues/10883)** — Telegram media-group listener tests time out under the repeated parallel runtime job. New today; CI flakiness.
- **[#10736](https://github.com/zeroclaw-labs/zeroclaw/issues/10736)** — pre-output stream failure skips the advertised non-streaming fallback on Reliable providers.
- **[#9332](https://github.com/zeroclaw-labs/zeroclaw/issues/9332)** — image-aware pre-dispatch budgeting and context-meter accounting understates image-heavy requests, then spikes past 100% and collapses.

**Pattern:** there is an active Anthropic-native image-handling regression cluster — #10885, #10888 (now closed), #10889, #9332, #9882 — where the same maintainer (Audacity88) is filing sharp follow-ups and landing paired fixes (#10894, #10895). This looks like deliberate multimodal hardening, not uncontrolled breakage.

## 6. Feature Requests & Roadmap Signals

User/community-driven features with real momentum:

- **Desktop/computer-use** — [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) is the highest-comment RFC and accepted. Likely to shape a future runtime+tools release, but it is complex and high-risk.
- **A2A federation** — Phase 1 (#9324) just merged; the roadmap implies Phase 2 (inbound/durable client, broader tool coverage) is the probable next big step.
- **Runtime plugin-ization** — [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) moves optional channels/tools off compile-time feature flags to WASM plugins; [#7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497) proposes OCI-compliant registries for plugin storage/discovery. These two together are the likely architectural theme of the next major version.
- **Streaming by default** — [#10166](https://github.com/zeroclaw-labs/zeroclaw/issues/10166) proposes flipping default `stream_mode` to `partial` so channel replies stream progressively; small, high-impact UX change.
- **New channels/providers** — native XMPP/Prosody ([#9814](https://github.com/zeroclaw-labs/zeroclaw/issues/9814)); Keenable web search provider ([#10679](https://github.com/zeroclaw-labs/zeroclaw/pull/10679), waiting maintainer review).
- **Persistent session attachments** — [#10407](https://github.com/zeroclaw-labs/zeroclaw/pull/10407) adds a SQLite-backed collection of up to four durable prompt attachments per Chat session with `session_prompt_*` tools; open and labeled `needs-author-action`.

**Prediction for next version:** the Anthropic image-handling fixes (#10894, #10895) and SSRF gating (#10070) are most likely to land quickly; `stream_mode=partial` default and the A2A follow-on are strong candidates for the next minor release.

## 7. User Feedback Summary

- **WhatsApp users are blocked**: [#8627](https://github.com/zeroclaw-labs/zeroclaw/issues/8627) is an S1 where device linking never completes under WhatsApp's new passkey gate — a real-world channel outage with only 1 comment, suggesting either a small affected population or under-triaged pain.
- **Multimodal users are degraded**: several S2 bugs show images disappearing from context (#10885), cache breakpoints mis-typed (#10889), and turns failing on marker-shaped prose (#10887), indicating friction for vision/multimodal workflows.
- **Slow-first-token frustration**: [#10886](https://github.com/zeroclaw-labs/zeroclaw/pull/10886) fixes a hard-coded 300s streaming idle bound that ignored configured `timeout_secs` — users with slow-provider timeouts were hitting artificial stalls.
- **Positive signal**: the community is contributing large, architecture-grade PRs (A2A outbound, OAuth profiles, persistent attachments) and maintainers are actively repairing stale contributor branches (e.g., #9724, #10070 "maintainer's note" credits original authors) — a sign of collaborative health.

## 8. Backlog Watch

Items needing maintainer attention, ranked by age/severity:

- **[#5869](https://github.com/zeroclaw-labs/zeroclaw/issues/5869)** — P1 security, `rumqttc` pins vulnerable rustls crates; open since 2026-04-18, blocked, 5 comments. This is the longest-running open security item and should be escalated.
- **[#8627](https://github.com/zeroclaw-labs/zeroclaw/issues/8627)** — S1 WhatsApp linking broken, open since 2026-07-02, only 1 comment. Severity vs. attention gap for a blocked channel.
- **[#7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497)** — OCI-registry RFC for plugins, open since 2026-06-11, 4 comments, blocked. Foundational for the plugin roadmap (#8850) but stalled.
- **[#9420](https://github.com/zeroclaw-labs/zeroclaw/pull/9420)** — `fix(anthropic): support stored OAuth profiles`, XL, open since 2026-07-26, labeled `needs-author-action`. Large and valuable but aging.
- **[#9724](https://github.com/zeroclaw-labs/zeroclaw/pull/9724)** — `always_ask survives Full autonomy` security-policy fix, open since 2026-08-04, `needs-maintainer-review`, XL. Maintainer repair applied but still awaiting review.
- **[#10070](https://github.com/zeroclaw-labs/zeroclaw/pull/10070)** — SSRF gate for `file_download` with private-host opt-in, open since 2026-08-18, `needs-maintainer-review`, risk:high. Security-relevant and should not linger.
- **[#10475](https://github.com/zeroclaw-labs/zeroclaw/pull/10475)** / **[#10504](https://github.com/zeroclaw-labs/zeroclaw/pull/10504)** — WhatsApp Markdown conversion and typed stop taxonomy, both open and `needs-author-action` since late August.

**Bottom line:** the bottleneck is shifting from code to review/governance — several high-risk, high-value PRs (#9724, #10070, #9420) are parked on maintainer or author action, while accepted RFCs (#9346, #7497, #6909) accumulate without durable decision records.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*