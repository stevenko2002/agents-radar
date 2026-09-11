# OpenClaw Ecosystem Digest 2026-09-12

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-09-11 22:15 UTC

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

# OpenClaw Project Digest: 2026-09-12

## 1. Today's Overview
OpenClaw exhibited high maintenance activity with 1,000 total updates (500 issues, 500 PRs) in the last 24 hours, indicating active triage and development. The project released v2026.9.4 focusing on update safety mechanisms, while persistent performance bottlenecks (particularly event loop blocking) and resource leaks dominate critical discussions. Core stability concerns around session state management, upgrade reliability, and child process handling remain the primary focus of maintainer attention, with 281 open issues requiring resolution.

## 2. Releases
**v2026.9.4: openclaw 2026.9.4**  
*Released 2026-09-11*  
- **Key Improvement**: Implemented safe recovery from compatible failed updates (#140339). Now retains previous package/configuration/service state and restores it when schema/configuration checks confirm rollback safety.  
- **Critical Limitation**: Database migrations still require verified pre-update backup; rollback safety does not apply to migration steps.  
- **Breaking Change Note**: None explicitly stated, but the update safety mechanism alters post-failure behavior (preserving state vs. clean rollback).  
- **Migration Advisory**: Users upgrading from pre-2026.9.4 should ensure database backups before updates involving schema changes.  
*Links: [Release notes](https://github.com/openclaw/openclaw/releases/tag/v2026.9.4), [Issue #140339](https://github.com/openclaw/openclaw/issues/140339)*

## 3. Project Progress
**Merged/Closed PRs (207 total)**:  
- **Update Safety Focus**: PR #145169 (preserve newer data across failed update rollback) and #144005 (back up state before migrations/restore on rollback) directly implement v2026.9.4's highlighted safety feature.  
- **Performance Fixes**: PR #142306 (fix queued follow-up messages failing during active replies) addresses core message-loss patterns seen in issues #139847/#121187.  
- **Resource Management**: PR #145257 (reuse provider policies during catalog materialization) reduces redundant work in model handling.  
- **Platform Specific**: PR #145285 (hide Slack command failures in quiet progress) resolves UX friction in shared workspaces.  
*All linked PRs show "status: 👀 ready for maintainer look" or "status: 📣 needs proof" indicating recent validation activity.*

## 4. Community Hot Topics
Top issues by comment count reveal systemic pain points:  
- **#119720 [P1]**: Synchronous agent persistence blocking Gateway event loop at scale (17 comments, 🦞 diamond lobster)  
  *Underlying Need*: Non-blocking I/O for session/transcript operations to prevent throughput collapse under load.  
  [Link](https://github.com/openclaw/openclaw/issues/119720)  
- **#97616 [P1]**: Unreaped hook/tool child processes causing zombie accumulation (15 comments, 🦪 silver shellfish)  
  *Underlying Need*: Robust process reaping in hook/tool execution paths to prevent runtime degradation.  
  [Link](https://github.com/openclaw/openclaw/issues/97616)  
- **#96834 [P1]**: WhatsApp 1:1 image processing wedging main lane for ~3 minutes (15 comments, 🦪 silver shellfish)  
  *Underlying Need*: Async handling of multimodal input ingestion to avoid blocking core message pipeline.  
  [Link](https://github.com/openclaw/openclaw/issues/96834)  
*These issues collectively highlight event loop starvation as the project's most urgent scalability challenge.*

## 5. Bugs & Stability
Ranked by severity and recurrence:  
- **Critical (Crash/Blocking)**:  
  - #142476 [P1]: Cron session reaper blocking event loop 14-76s via synchronous PRAGMA checks (8 comments, 🦞 diamond lobster)  
    *Fix Signal*: No linked PR; requires async DB health checks.  
    [Link](https://github.com/openclaw/openclaw/issues/142476)  
  - #144911 [P1]: MCP server init timeout crashing Gateway via unhandled rejection (5 comments, 🦞 diamond lobster)  
    *Fix Signal*: No linked PR; needs timeout handling in child cleanup path.  
    [Link](https://github.com/openclaw/openclaw/issues/144911)  
- **High (Regression/Loss)**:  
  - #140620 [P0]: Upgrade stall during session-transcript reconciliation (12 comments, 🦪 silver shellfish)  
    *Fix Signal*: No linked PR; appears related to upgrade safety work in #144005/#145169.  
    [Link](https://github.com/openclaw/openclaw/issues/140620)  
  - #144712 [P0]: npm update failure at "global install swap" with unverified recovery (12 comments, 🦞 diamond lobster)  
    *Fix Signal*: Directly addressed by v2026.9.4's update safety mechanism (#140339).  
    [Link](https://github.com/openclaw/openclaw/issues/144712)  
*Event loop blocking issues (#119720, #142476) represent the most severe stability threats due to systemic impact.*

## 6. Feature Requests & Roadmap Signals
User-driven enhancements with traction:  
- **#40786 [P2]**: Add .gitignore-like exclude patterns to backup CLI (12 comments, 🌊 off-meta tidepool)  
  *Roadmap Signal*: High likelihood of inclusion in next version; addresses backup bloat/security risks explicitly called out in release notes.  
  [Link](https://github.com/openclaw/openclaw/issues/40786)  
- **#9016 [P3]**: Expose OpenRouter usage cost to agent runtime (8 comments, 🌊 off-meta tidepool)  
  *Roadmap Signal*: Lower priority but aligns with cost-tracking trends; may appear in future minor release.  
  [Link](https://github.com/openclaw/openclaw/issues/9016)  
- **#132601 [P2]**: Clarify safe generated-video URL materialization (8 comments, 🌊 off-meta tidepool)  
  *Roadmap Signal*: Documentation-focused; likely resolved in next SDK update.  
  [Link](https://github.com/openclaw/openclaw/issues/132601)  
*Backup enhancement (#40786) shows strongest near-term adoption potential given recent release focus on update safety.*

## 7. User Feedback Summary
Recurring pain points from issue comments and PR discussions:  
- **Upgrade Anxiety**: Users report deterministic failures during in-place upgrades (#140620, #144712, #145192), citing distrust in rollback safety despite new mechanisms.  
- **Performance Cliffs**: Sudden latency spikes from resource leaks (#97616) or blocking operations (#119720, #96834) cause cascading failures in production deployments.  
- **Platform Fragmentation**: Issues vary significantly by environment (WhatsApp image handling #96834, iOS UI lag #124759, Windows upgrade blocks #136203), suggesting inconsistent platform testing.  
- **Trust Erosion**: Hallucinated output on tool failure (#49876) and silent message loss (#126246) directly impact user confidence in agent reliability.  
*Satisfaction indicators are sparse; the high volume of P0/P1 bugs with "ux-release-blocker" labels suggests widespread production impact.*

## 8. Backlog Watch
Long-unanswered critical issues needing maintainer intervention:  
- **#49876 [P1]**: Cron sessions delivering hallucinated output on tool failure (open since 2026-03-18, 12 comments, 🐚 platinum hermit)  
  *Why Critical*: Trust/safety issue where LLMs fabricate results instead of failing cleanly; persists despite 6+ months of activity.  
  [Link](https://github.com/openclaw/openclaw/issues/49876)  
- **#135776 [P0]**: Update leaves exact-pinned plugins at previous version causing version skew (open since 2026-09-02, 7 comments, 🐚 platinum hermit)  
  *Why Critical*: Breaks plugin compatibility during updates; directly undermines release reliability goals.  
  [Link](https://github.com/openclaw/openclaw/issues/135776)  
- **#116691 [P2]**: Volcengine API failures in long conversations due to missing `input.status` (open since 2026-07-31, 8 comments, 🦪 silver shellfish)  
  *Why Critical*: Blocks production use of major provider; regression with clear reproduction steps.  
  [Link](https://github.com/openclaw/openclaw/issues/116691)  
*These issues represent known failure modes with significant user impact that have resisted resolution despite prolonged attention.*

---

## Cross-Ecosystem Comparison

**1. Ecosystem Overview**  
The personal‑AI‑assistant / agent open‑source landscape in 2026 is dominated by a handful of actively maintained frameworks that balance core runtime reliability (update safety, event‑loop health, resource leaks) with rapid expansion of capabilities – pluggable LLM providers, multimodal handling, search back‑ends, and multi‑agent collaboration tools. While a few projects (e.g., OpenClaw, ZeroClaw, Hermes Agent) show very high contribution volumes and frequent patch releases, many others are in a maintenance‑only mode, focusing on UI polish, provider extensibility, or niche platform support. Overall, the ecosystem is vibrant but fragmented, with clear convergence on a few cross‑cutting concerns (non‑blocking I/O, configurable time‑outs, persistent configuration, and observability) that are shaping the next generation of agent platforms.

---

**2. Activity Comparison**  

| Project | Issues (last 24 h) | PRs (last 24 h) | Release (last 24 h) | Health* |
|---------|-------------------|----------------|----------------------|---------|
| **OpenClaw** | 500 (≈ 281 open) | 500 (≈ ? merged) | Yes – v2026.9.4 | Medium |
| **NanoBot** | 4 (2 open, 2 closed) | 27 (9 open, 18 merged/closed) | No | Medium‑High |
| **Hermes Agent** | 50 (47 open, 3 closed) | 50 (42 open, 8 merged/closed) | Yes – v0.21.2 (patch) | Medium |
| **PicoClaw** | 4 (2 open, 2 closed) | 3 (2 open, 1 merged/closed) | No | Low‑Medium |
| **NanoClaw** | 7 | 16 (15 open, 1 closed) | No | Medium |
| **NullClaw** | 0 | 0 | No | Low |
| **IronClaw** | 0 | 1 (open) | No | Low |
| **LobsterAI** | 3 (all open) | 8 (6 merged/closed, 2 open) | No | Medium |
| **TinyClaw** | 0 | 0 | No | Low |
| **Moltis** | 0 | 1 (open) | No | Low |
| **CoPaw** | 21 (15 open, 6 closed) | 41 (23 open, 18 merged/closed) | Yes – v2.2.1 (stable) | Medium‑High |
| **ZeptoClaw** | 0 | 0 | No | Low |
| **ZeroClaw** | 50 (39 open) | 50 (47 open) | No | Medium‑High |

\*Health is a qualitative assessment based on recent activity, proportion of open vs. closed work, and whether a release was shipped. “High” would denote steady shipping with low backlog; “Medium” indicates active development but noticeable open‑issue backlog; “Low” signals minimal or stalled activity.

---

**3. OpenClaw’s Position**  

*Advantages vs. peers*  
- **Scale of contribution** – 1 000 total updates in 24 h far exceeds any other project, signalling a large and engaged contributor base.  
- **Release cadence** – Shipped a patch (v2026.9.4) focused on update safety, demonstrating a commitment to rapid reliability fixes.  

*Technical approach differences*  
- Core emphasis on **update safety mechanisms** (preserving state on failed upgrades, pre‑migration backups) and **event‑loop blocking mitigation** (async DB checks, non‑blocking I/O for session/transcript ops).  
- Many peers prioritize **provider extensibility** (NanoBot, CoPaw, Moltis) or **UI/UX polish** (LobsterAI, NanoClaw), whereas OpenClaw treats the gateway/runtime as the primary product and spends effort on low‑level stability (child‑process reaping, resource leaks).  

*Community size comparison*  
- The sheer volume of issues/PRs suggests OpenClaw’s contributor pool is comparable to the combined activity of the next‑three most active projects (ZeroClaw, Hermes Agent, CoPaw).  
- However, the high count of **open P0/P1 bugs** (281) indicates that while the community is large, a significant portion of effort is consumed by triage rather than feature delivery.

---

**4. Shared Technical Focus Areas**  

| Concern | Projects Highlighting It | Specific Need |
|---------|--------------------------|---------------|
| **Non‑blocking I/O / event‑loop health** | OpenClaw (#119720, #142476, #96834), Hermes Agent (skills‑index freshness, CI integration), ZeroClaw (RpcDispatcher stack‑guard, Windows stability) | Avoid synchronous DB/process calls that stall the main loop under load. |
| **Update / rollback safety** | OpenClaw (v2026.9.4), Hermes Agent (state.db patch), ZeroClaw (history preservation on error) | Preserve previous state, guarantee safe rollback, avoid data loss during upgrades. |
| **Provider extensibility** | NanoBot (AnySearch, DaoXE), CoPaw (Serply, bot‑manager), Moltis (Requesty), PicoClaw (OpenAI‑compatible, Opencode‑go) | Plug‑in new LLM or search back‑ends with minimal friction. |
| **Configuration persistence & isolation** | LobsterAI (USER.md, config reset), NanoClaw (setup/install reliability), Hermes Agent (profile clone missing max_turns) | User‑edited files survive restarts; per‑agent isolation of settings. |
| **Memory / token budgeting & observability** | Hermes Agent (configurable memory‑pressure thresholds, token budget), ZeroClaw (proactive token‑budget compaction), CoPaw (Fin proactive memory review) | Prevent runaway token consumption, expose cost/usage to runtime. |
| **Multimodal handling & media batching** | ZeroClaw (Telegram media batching, image‑cap eviction), LobsterAI (plugin hook persistence), NanoClaw (rate‑limited turn deduplication) | Efficient ingestion of images/files, avoid duplicate LLM calls. |
| **Cross‑platform stability (Windows/macOS)** | ZeroClaw (stack‑guard overflow), PicoClaw (Feishu config error), Hermes Agent (Desktop SIGTRAP) | Reliable operation on Windows and macOS, especially for desktop‑oriented agents. |
| **Search / web‑fetch integration** | NanoBot (AnySearch), CoPaw (Serply), ZeroClaw (harness evaluation framework) | Provide quota‑free, configurable web search for agents. |

---

**5. Differentiation Analysis**  

| Dimension | OpenClaw | NanoBot | Hermes Agent | PicoClaw | NanoClaw | LobsterAI | CoPaw | ZeroClaw | Others |
|-----------|----------|---------|--------------|----------|----------|-----------|-------|----------|--------|
| **Primary user** | Enterprise gateway operators, SaaS‑hosted agents | Developers needing extensible web UI & provider plugins | Power users & bot‑makers focusing on skills & CLI | Embedded/edge device developers (SiPeed boards) | Developers wanting voice‑channel & setup reliability | End‑users desiring persistent per‑agent config | Operators managing multi‑channel bots (WeChat, DingTalk, etc.) | Researchers & platform engineers needing rigorous observability & Windows stability | Niche or dormant projects |
| **Core architecture** | Centralized Gateway + plug‑in tools, heavy emphasis on async event loop & safe updates | Modular UI + provider abstraction layer, strong focus on WebSocket performance | Skill‑index driven, CLI‑first with plugin system, desktop & mobile front‑ends | Lightweight agent runtime targeting MCU/SBC, provider‑centric | Voice‑first, container‑based setup, SQLite‑backed persistence | Electron‑based desktop wrapper around OpenClaw gateway | Agent‑scope orchestration hub + UI console + plugin system | Zero‑config, high‑throughput dispatcher with strong telemetry | Minimal or experimental |
| **Feature emphasis** | Update safety, non‑blocking I/O, resource leak fixing, child‑process reaping | UI polish, provider/search extensibility, onboarding UX | Skill freshness, CI/CD reliability, config observability, memory throttling | Channel‑specific bug fixes (Slack, Feishu), UI lag, provider extensibility | Voice adapter, setup/install reliability, container timeout configurability | Config persistence, per‑agent isolation, plugin hook retention | Multi‑channel bot management, proactive memory review, search provider integration | RPC dispatcher stability, history cache integrity, Windows stack safety, governance/RFC process | Variable (often stagnant) |
| **Release philosophy** | Frequent patch releases targeting safety (e.g., v2026.9.4) | Incremental UI/provider PRs, no recent version tag | Patch releases for critical regressions, rapid response to state.db bug | No recent release; activity limited to bug fixes | Active PR backlog, awaiting next minor release | Steady bug‑fix cadence, no version tag | Stable release v2.2.1 with feature set (per‑agent routing, memory review) | No release; heavy triage & RFC work | Mostly inactive or occasional fixes |

---

**6. Community Momentum & Maturity**  

| Tier | Projects | Characteristics |
|------|----------|------------------|
| **Rapidly iterating (high momentum)** | OpenClaw, ZeroClaw, Hermes Agent, CoPaw | >40 issues/PRs per day, recent releases, active triage, visible roadmap discussions. |
| **Steady development (medium momentum)** | NanoBot, NanoClaw, LobsterAI | Consistent PR flow, open‑issue backlog being addressed, occasional feature additions. |
| **Low activity / stabilizing (low momentum)** | IronClaw, Moltis, PicoClaw, NullClaw, TinyClaw, ZeptoClaw | ≤1 issue/PR per day, no recent releases, mostly maintenance or stalled. |

The high‑tier projects are driving the ecosystem’s evolution (safety, observability, provider plug‑ins), while the mid‑tier contributors refine usability and plug‑in ecosystems. Low‑tier projects risk obsolescence unless they secure maintainer bandwidth or community interest.

---

**7. Trend Signals**  

- **Reliability‑first upgrades** – Multiple teams (OpenClaw, Hermes Agent, ZeroClaw) are investing in atomic update/rollback mechanisms, pre‑migration backups, and state preservation to reduce “upgrade anxiety.”  
- **Non‑blocking, async‑first runtimes** – Persistent discussion of event‑loop blocking across OpenClaw, Hermes Agent (skills index), and ZeroC

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot Project Digest – 2026‑09‑12**  

---  

### 1. Today's Overview  
The repository showed steady maintenance activity in the last 24 h: 4 issues were touched (2 open, 2 closed) and 27 pull requests were updated (9 still open, 18 merged/closed). No new version was released. The bulk of work today centered on web‑UI performance polishing, provider integrations, and clean‑up of obsolete scripts, while a few user‑facing bugs (notably an initial‑password confusion) remain awaiting resolution.

### 2. Releases  
*No new releases were published today.*  

### 3. Project Progress – Merged / Closed PRs (today)  
| PR | Type | Summary | Link |
|----|------|---------|------|
| #5744 | chore | Removed the unused `core_agent_lines.sh` line‑count helper. | HKUDS/nanobot PR #5744 |
| #5356 | feature (webui) | Redesigned channel‑catalog setup flows (two‑column rows, localized copy, serialized installs). | HKUDS/nanobot PR #5356 |
| #5214 | bug (provider) | Fixed DeepSeek reasoning‑item deserialization when using the OpenAI Responses API. | HKUDS/nanobot PR #5214 |
| #5255 | conflict (api) | Drafted truthful API‑status reporting for externally‑managed `nanobot serve` instances. | HKUDS/nanobot PR #5255 |
| #5230 | bug (provider) | Preserved imported Gemini tool calls with signature fallback. | HKUDS/nanobot PR #5230 |
| #5216 | bug (image) | Sent Gemini Flash hints via `generationConfig.imageConfig` to avoid 400 errors. | HKUDS/nanobot PR #5216 |
| #5215 | bug (gateway) | Ensured deterministic closure of agent resources (exec/MCP) on gateway stop. | HKUDS/nanobot PR #5215 |
| #5742 | bug (webui) | Restored sidebar navigation after deleting an automation. | HKUDS/nanobot PR #5742 |
| #5741 | bug (webui) | Omits binary data (base64 images) from tool‑progress WebSocket frames to cut bandwidth. | HKUDS/nanobot PR #5741 |
| #5740 | feature (webui) | Replaced dense automations workspace with a calm task list + on‑demand detail dialog. | HKUDS/nanobot PR #5740 |
| #5732 | perf (ui) | Paced long‑text streaming updates (≥50 ms) and bounded visible reasoning label to 512 UTF‑16 code units. | HKUDS/nanobot PR #5732 |
| #5737 | bug (channel) | Disabled intermediate progress delivery for the Email channel (matches SMTP behavior). | HKUDS/nanobot PR #5737 |
| #5734 | fix (memory) | Clarified Dream‑prompt write permissions so only Dream tasks edit profile/long‑term memory. | HKUDS/nanobot PR #5734 |
| #5736 | perf (webui) | Added service‑worker cache for public favicon requests (capped at 128 entries). | HKUDS/nanobot PR #5736 |
| #5733 | refactor (webui) | Split channel‑setup responsibilities into focused components while preserving autosave. | HKUDS/nanobot PR #5733 |

*Collectively, these PRs delivered:*  
- **Web‑UI stability & performance** (navigation fixes, binary‑data stripping, favicon caching, streaming throttling).  
- **Provider robustness** (DeepSeek, Gemini, gateway resource cleanup).  
- **Feature groundwork** (DAO‑XE gateway provider, improved channel‑setup UX).  
- **Housekeeping** (removal of dead scripts).  

### 4. Community Hot Topics (most commented / reacted)  
| Item | Comments | Why it matters | Link |
|------|----------|----------------|------|
| Issue **#5505** – “Add AnySearch as a web search provider” | 8 | Users want a flexible, quota‑free web‑search backend; the discussion covers API/MCP/Skill integration options and shows strong community interest in expanding search capabilities. | HKUDS/nanobot Issue #5505 |
| Issue **#5726** – “Startuo initial password?” (P1 bug) | 2 | New‑install users on headless servers are blocked by an unclear initial password for the WebUI, creating a first‑run friction point. | HKUDS/nanobot Issue #5726 |
| Issue **#5719** – “Discord: automatic compaction notices delivered with sendProgress:false” | 0 (but closed) | Highlights a regression where internal maintenance messages break the expected silence mode in Discord channels. | HKUDS/nanobot Issue #5719 |
| PR **#5745** – “make large history replay incremental and cached” (open) | 0 (comments undefined) | Addresses a scalability pain point for long‑running conversations; the lack of discussion suggests it awaits review. | HKUDS/nanobot PR #5745 |
| PR **#5746** – “add DaoXE gateway provider” (open) | 0 (comments undefined) | Indicates community demand for additional LLM gateway options beyond the existing set. | HKUDS/nanobot PR #5746 |

*Underlying needs:* easier onboarding (password clarity), quieter operation in chat platforms, extensible search/fetch backends, and better performance for large histories.

### 5. Bugs & Stability (today) – ranked by severity  
| Severity | Item | Status | Fix PR (if any) | Link |
|----------|------|--------|----------------|------|
| **P1** | #5726 – Initial password unclear on headless install | **Open** | *None yet* | HKUDS/nanobot Issue #5726 |
| **P1** | #5719 – Discord compaction notices ignore `sendProgress:false` | **Closed** | Likely resolved by a merged PR not listed in the excerpt (issue closed). | HKUDS/nanobot Issue #5719 |
| **P2** | #5741 – Binary data (images) sent in WebUI progress frames | **Closed** | #5741 (merged) | HKUDS/nanobot PR #5741 |
| **P2** | #5737 – Email channel still emits intermediate progress | **Closed** | #5737 (merged) | HKUDS/nanobot PR #5737 |
| **P2** | #5742 – Sidebar unclickable after automation deletion | **Closed** | #5742 (merged) | HKUDS/nanobot PR #5742 |
| **P2** | #5734 – Dream prompt write‑permission confusion | **Closed** | #5734 (merged) | HKUDS/nanobot PR #5734 |

*The most pressing open bug is #5726; addressing it would eliminate a blocker for first‑time users.*  

### 6. Feature Requests & Roadmap Signals  
| Feature | Source | Indication of near‑term inclusion |
|---------|--------|-----------------------------------|
| **AnySearch web‑search provider** | Issue #5505 (enhancement) + #5731 (AnySearch extract as web_fetch backend) | Both are enhancement tickets from the AnySearch team; with #5505 already closed (implies implementation ready) and #5731 open, a search‑backend merge is likely in the next release. |
| **DaoXE gateway provider** | PR #5746 (open) | New provider addition follows the project’s pattern of expanding gateway options; awaiting review, but likely to be merged soon. |
| **Improved channel‑setup UX** | PR #5356 (closed) + PR #5733 (closed) | The setup flow redesign has already been merged; further refinements (e.g., split responsibilities) indicate continued focus on smoother onboarding. |
| **Web‑UI performance & scalability** | PR #5745 (open), #5738 (open), #5732 (closed), #5736 (closed) | Incremental history replay, long‑text streaming throttling, and favicon caching show a clear performance‑oriented roadmap; the open PRs (#5745, #5738) are candidates for the next release. |
| **Automation management simplification** | PR #5740 (closed) + #5742 (closed) | The move to a task‑list + detail dialog has been merged; future tweaks may focus on polishing interactions. |

### 7. User Feedback Summary  
- **Pain points:**  
  - Initial password confusion on headless deployments (#5726).  
  - Unwanted Discord maintenance messages disrupting chat flow (#5719).  
  - Need for a reliable, quota‑free web‑search backend that works with AI agents (#5505, #5731).  
  - UI lag or excessive bandwidth when large histories or image results are replayed (#5741, #5745, #5738).  
- **Positive signals:**  
  - Rapid merging of UI fixes (navigation, automation deletion, settings catalog).  
  - Appreciation for provider stability improvements (DeepSeek, Gemini, gateway shutdown).  
  - Enthusiasm for extensibility – users and vendors (AnySearch, DaoXE) are actively contributing providers.  
- **Overall sentiment:** The project is responsive to bug reports and performance concerns; the main friction remains the onboarding experience for new users.

### 8. Backlog Watch (items needing attention)  
| Item | Type | Reason for attention | Link |
|------|------|----------------------|------|
| **#5726** – Initial password unclear | Bug (P1) | Blocks first‑time users; no fix PR yet. | HKUDS/nanobot Issue #5726 |
| **#5745** – Incremental history replay (open) | Performance | Large‑history users await this scalability improvement; needs review/merge. | HKUDS/nanobot PR #5745 |
| **#5746** – DaoXE gateway provider (open) | Feature | New LLM gateway option; pending review. | HKUDS/nanobot PR #5746 |
| **#5743** – Simplify settings catalog controls (open) | UI/UX | Awaits feedback; could improve settings discoverability. | HKUDS/nanobot PR #5743 |
| **#5739** – Dev CI/CD chore (open) | Maintenance | Low‑impact but worth merging to keep CI green. | HKUDS/nanobot PR #5739 |
| **#5738** – Reduce long‑text streaming refresh overhead (open) | Performance | Complements #5745; addresses UI lag for long outputs. | HKUDS/nanobot PR #5738 |

*No long‑stale issues (>30 days) appear in the excerpt; the backlog is primarily composed of the open P1 bug and the several open performance/feature PRs awaiting review.*  

---  

**Takeaway:** NanoBot is in a healthy state of incremental improvement—steady bug fixes, performance tuning, and provider expansion. The immediate priority for maintainers should be clearing the P1 onboarding bug (#5726) and reviewing the open performance/web‑UI PRs (#5745, #5746, #5743, #5739, #5738

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent – Project Digest (2026‑09‑12)**  

---

### 1. Today's Overview  
The repository showed **very high activity** in the last 24 h: 50 issues updated (47 open/active, 3 closed) and 50 PRs updated (42 open, 8 merged/closed). A single patch release, **v0.21.2 (v2026.9.11)**, was published to address a fragile `state.db` regression introduced in v0.21.0. Ongoing discussions center on the skills‑index freshness watchdog, CI integration blockers, and update‑flow warnings, indicating that while development velocity is strong, a few long‑standing stability and automation concerns remain in the backlog.

---

### 2. Releases  
| Version | Date | Notes |
|---------|------|-------|
| **v0.21.2 (v2026.9.11)** | 2026‑09‑11 | *Patch release* – fixes the `state.db` connection‑handling rewrite that caused second writers to cancel each other's locks, leaving the session store fragile. No breaking changes reported; users are advised to upgrade to restore reliable session persistence. |

---

### 3. Project Progress (Merged/Closed PRs)  
Eight PRs were merged or closed today. Notable ones that advanced stability or fixed bugs include:

| PR | Summary | Link |
|----|---------|------|
| **#108632** | `fix: bind bot delivery to gateway Python` – ensures Bot Mode `message_agent` uses the gateway’s virtual‑env Python, preventing import failures in background deliveries. | https://github.com/NousResearch/hermes-agent/pull/108632 |
| **#108631** | `fix(bot-mode): pin the message_agent transport to the venv‑beside hermes entrypoint` – similar goal, locks the CLI invocation to the venv‑resident `hermes` binary. | https://github.com/NousResearch/hermes-agent/pull/108631 |
| **#107913** / **#107912** | Session‑resume safety fixes: count deduped resume projections/messages instead of raw rows, preventing false “iteration budget exhausted” errors. | https://github.com/NousResearch/hermes-agent/pull/107913  <br> https://github.com/NousResearch/hermes-agent/pull/107912 |
| **#107897** / **#107892** | Telegram keep‑alive pool reuse (non‑Windows & Darwin) to avoid TIME_WAIT exhaustion on long‑poll getUpdates. | https://github.com/NousResearch/hermes-agent/pull/107897  <br> https://github.com/NousResearch/hermes-agent/pull/107892 |
| **#107878** | `fix(providers): fail closed on missing-credential` – stops the fallback chain from silently swallowing `AuthError` for missing API keys. | https://github.com/NousResearch/hermes-agent/pull/107878 |
| **#108620** | `fix(desktop): honor configured voice recording limit` – removes the hard‑coded 120 s cap, respecting `voice.max_recording_seconds`. | https://github.com/NousResearch/hermes-agent/pull/108620 |
| **#108627** | `fix(managed-uv): strip UV_PYTHON_PREFERENCE` – prevents `hermes update` failures when the env var is set (Python 3.14 workaround). | https://github.com/NousResearch/hermes-agent/pull/108627 |
| **#108625** | `fix(hooks): reap the hook process tree when _spawn is interrupted` – avoids orphaned hook processes on SIGINT. | https://github.com/NousResearch/hermes-agent/pull/108625 |
| **#108626** (closed duplicate) | `feat(cli): audit one-shot invocation provenance` – adds a profile‑local JSONL ledger for CLI one‑shots (duplicated by #108622). | https://github.com/NousResearch/hermes-agent/pull/108626 |

Open PRs created today (e.g., #108629, #108604, #107904, #107921) show continued work on CLI provenance tracing, sandbox credential injection, gateway diagnostics filtering, and TUI fan‑out overflow handling.

---

### 4. Community Hot Topics (Most‑Commented Items)  

| Item | Comments | Summary & Underlying Need |
|------|----------|---------------------------|
| **#66616** – *Skills index is stale or degraded* | 198 | The automated freshness probe shows the skills index is **29.8 h old** (limit 26 h). Teams rely on `/docs/api/skills-index.json` for skill discovery; the cron rebuild (`skills-index.yml`) and site deploy workflow are not keeping pace. Need: more reliable index regeneration or alerting when stale. |
| **#88584** – *Automated Nous integration is blocked* | 89 | Scheduled merge from Nous → Enterkey conflicts in `cron/jobs.py`. The dashboard updater stays on an old Enterkey release, causing CI failures. Need: automated conflict resolution or a smoother upstream‑sync process. |
| **#107402** – *`hermes update` leaves a permanent “did not restart running gateways” warning* | 13 | When `hermes update` runs inside the gateway’s process tree, the gateway defers restart, but the updater immediately marks the fleet stale, leaving a lingering warning. Need: update logic that respects deferred restarts or clears the warning after the gateway finally restarts. |
| **#108575** – *`hermes profile create --clone` does not carry over `agent.max_turns`* | 4 | Cloned profiles start with a 4‑turn budget, causing Kanban dispatcher to fail with “Iteration budget exhausted”. Need: clone command to inherit all relevant profile fields. |
| **#100573** – *Desktop SIGTRAP from out‑of‑range `string_view::substr`* | 5 | Recurring crashes on Linux Electron builds due to libc++ fatal path. Need: bounds‑checked string handling in the desktop codebase. |

These topics highlight three core user pain points: **(1) data freshness (skills index), (2) CI/CD reliability (integration blocked), and (3) update‑experience polish (warning messages).**

---

### 5. Bugs & Stability (New Issues Today)  

| Severity | Issue | Brief | Fix PR? |
|----------|-------|-------|---------|
| **P1** | #107402 – update warning | See Hot Topics. | Related work in #106682 (fleet_restart_pending marker) – open. |
| **P1** | #107070 – user turns persisted after transient failure & replayed days later | Stale retry messages cause model to execute stale mutating requests. | No linked PR yet. |
| **P2** | #108575 – profile clone missing `max_turns` | See Hot Topics. | No PR yet. |
| **P2** | #108564 – bot‑mode DM to default profile resolves to wrong path | Causes silent failures when a `default` directory exists. | No PR yet. |
| **P2** | #108549 – kanban notifier lacks config gate, permanent 5s tick | Unnecessary polling in non‑native homes. | No PR yet. |
| **P2** | #108311 – Z.ai 1210 error not matched by recovery pattern | Users see provider failure instead of automatic retry. | No PR yet. |
| **P3** | #108630 – Auto‑archive leaves canonical “Bot Chat” with no recoverable `end_reason` | Title deadlock after archiving. | No PR yet. |
| **P3** | #108628 – `message_agent` background delivery uses system Python | Leads to import errors in background tasks. | Addressed by #108632 / #108631 (open). |
| **P3** | #108618 – audit provenance for CLI one‑shots | Missing launcher context for security audits. | Duplicate PRs #108622 (open) & #108626 (closed). |

**Severity ranking:** P1 issues (#107402, #107070) are the most urgent because they affect update reliability and can cause silent data corruption. Several P2 bugs (profile cloning, bot‑mode DM, kanban notifier) also impact core workflows but have lower immediate impact. Fix PRs exist for the bot‑mode Python‑binding issues (#108632, #108631) and are pending review.

---

### 6. Feature Requests & Roadmap Signals  

| Feature Request | Key Points | Likelihood for Next Release |
|-----------------|------------|-----------------------------|
| **#90713** – make system memory‑pressure thresholds configurable (dashboard banner + kanban guard) | Currently hard‑coded; users on ZFS or low‑mem environments want tunable limits. | **High** – simple config addition, aligns with recent focus on observability. |
| **#47803** – improve session title regeneration (LLM‑generated, multi‑language, periodic refresh) | Users want better titles after long sessions. | **Medium** – requires LLM integration but low risk. |
| **#91713** – per‑session cumulative token budget (abort/warn on breach) | Prevents runaway token consumption seen in #88198. | **Medium** – builds on existing token watchdog. |
| **#108618 / #108622** – audit provenance for CLI one‑shot invocations | Security‑aware logging of launcher, TTY, prompt hash without storing raw prompts. | **High** – already prototyped in open PRs; likely to land soon. |
| **#108573** – QQBot native C2C streaming (stream_messages) | Enables real‑time messaging on QQ platform. | **Low‑Medium** – platform‑specific; depends on maintainer interest. |
| **#108604** – inject custom credentials into sandbox requests (egress proxy) | Allows Docker sandboxes to use opaque tokens for GitHub, eBird, etc. | **Medium** – useful for enterprise users; already in PR. |

Overall, the roadmap appears to be shifting toward **configurable observability (memory thresholds), stronger security/audit logging, and usability polish (session titles, token budgets)**.

---

### 7. User Feedback Summary  

- **Pain points:**  
  - *Skills index staleness* disrupts automated skill discovery and causes degraded service warnings.  
  - *CI integration blockers* (Nous → Enterkey merges) create frequent false‑red builds, eroding confidence in automated releases.  
  - *Update‑flow warnings* leave users unsure whether their gateways are truly up‑to‑date, leading to manual intervention.  
  - *Desktop instability* (SIGTRAP, voice‑record limit ignored) affects productivity on Linux workstations.  
  - *Bot‑mode delivery failures* due to Python‑path mismatches cause silent message drops in automation pipelines.  

- **Positive signals:**  
  - Rapid response to the `state.db` regression with a patch release within a day.  
  - High volume of bug‑fix PRs addressing long‑standing annoyances (voice limit, UV env var, hook process cleanup).  
  - Active community discussion on observability and security (memory thresholds, audit provenance).  

Overall satisfaction appears **moderate**: users appreciate the quick patch cycle but are frustrated by recurring CI and update‑experience hiccups.

---

### 8. Backlog Watch (Long‑Unanswered Important Items)  

| Issue | Age | Why It Matters | Status |
|-------|-----|----------------|--------|
| **#66616** – Skills index stale/degraded | ~2 mo (opened 2026‑07‑18) | Directly affects skill discovery; marked “degraded”. | Open, needs maintainer review of cron/workflow reliability. |
| **#88584** – Automated Nous integration blocked | ~1 mo (opened 2026‑08‑17) | Breaks CI/CD pipeline for downstream integrations. | Open, awaiting conflict‑resolution strategy.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest – 2026‑09‑12**  

---

### 1. Today’s Overview  
PicoClaw shows modest but steady activity: in the last 24 h four issues were touched (2 open, 2 closed) and three pull‑requests were updated (2 open, 1 merged/closed). No new releases were published today. The project is maintaining its core functionality while addressing a few channel‑specific bugs and UI‑performance concerns, with contributors beginning to work on provider extensibility.

### 2. Releases  
*None* – no new version tags were created in the reporting window.

### 3. Project Progress (Merged/Closed PRs)  
| PR | Status | Summary | Related Issue |
|----|--------|---------|----------------|
| [#3340](https://github.com/sipeed/picoclaw/pull/3340) | **Merged/Closed** | Fix Slack media upload by setting `FileSize` on `slack.UploadFileParameters` – resolves zero‑size file rejections. | [#3338](https://github.com/sipeed/picoclaw/issues/3338) |
| *(No other PRs were merged/closed in the last 24 h)* | | | |

The merged PR directly closed the Slack‑media bug, restoring reliable image/file posting to Slack workspaces.

### 4. Community Hot Topics  
| Item | Type | Comments / Reactions | Link | Why it’s hot |
|------|------|----------------------|------|--------------|
| **#3338** – Slack media upload fails (`file.size cannot be 0`) | Issue (closed) | 4 comments, 0 👍 | <https://github.com/sipeed/picoclaw/issues/3338> | Highest comment count; revealed a SDK‑level validation gap that blocked a core channel feature. |
| #3366 – Add support for OpenAI compatible providers | Issue (open) | 2 comments | <https://github.com/sipeed/picoclaw/issues/3366> | Indicates growing demand for self‑hosted or custom LLM endpoints (e.g., 9Router). |
| #3346 – Abnormal RKLLM replies on ARM board | Issue (closed) | 2 comments | <https://github.com/sipeed/picoclaw/issues/3346> | Shows users are experimenting with on‑device LLMs and encountering output quality issues. |

### 5. Bugs & Stability (reported today)  
| Severity | Item | Description | Fix status |
|----------|------|-------------|------------|
| **High** | [#3355](https://github.com/sipeed/picoclaw/issues/3355) – Feishu config error (`unknown field(s): channel_list.feishu.app_id`) | Prevents Feishu channel from starting; blocks users who rely on that integration. | Open – no linked PR yet. |
| **Medium** | [#3346](https://github.com/sipeed/picoclaw/issues/3346) – RKLLM reply anomalies | Model returns unexpected text; likely a prompt‑handling or token‑parsing issue on ARM. | Closed – no explicit PR, may need further investigation. |
| **Low** | [#3338](https://github.com/sipeed/picoclaw/issues/3338) – Slack media upload zero‑size bug | Already resolved by PR #3340. | Fixed. |

### 6. Feature Requests & Roadmap Signals  
| Request | Link | Indication of near‑term inclusion |
|---------|------|-----------------------------------|
| OpenAI‑compatible provider support (custom endpoints) | [#3366](https://github.com/sipeed/picoclaw/issues/3366) | High interest; a straightforward extension of the existing OpenAI provider – likely to appear in the next minor release if maintainers prioritize extensibility. |
| Opencode‑go provider with session header | PR [#3371](https://github.com/sipeed/picoclaw/pull/3371) | Already implemented; awaiting review/merge. Once merged, it will broaden the set of supported LLM back‑ends. |
| UI lag fix for large chat buffers | PR [#3347](https://github.com/sipeed/picoclaw/pull/3347) | Addresses a noticeable usability pain point; maintainers may merge it soon to improve user experience. |

### 7. User Feedback Summary  
- **Slack users** were frustrated by silent media‑upload failures; the fix in #3340 restored confidence.  
- **Feishu administrators** encounter a configuration‑validation error that stops the bot from starting – a blocking issue for anyone adopting the Feishu channel.  
- **Developers experimenting with on‑device LLMs (RKLLM/Qwen)** report odd reply patterns, suggesting a need for better token‑stream handling or model‑specific post‑processing.  
- **Power users** note UI lag when chat histories grow large; the ongoing PR #3347 promises smoother scrolling and rendering.  
Overall sentiment is cautiously positive: core features work, but channel‑specific integrations and UI polish need attention.

### 8. Backlog Watch (items needing maintainer focus)  
| Item | Age / Activity | Reason for attention |
|------|----------------|----------------------|
| [#3355](https://github.com/sipeed/picoclaw/issues/3355) – Feishu config error | Open, 1 comment, updated 2026‑09‑11 | Blocks Feishu adoption; requires a schema fix or tolerant parsing. |
| [#3366](https://github.com/sipeed/picoclaw/issues/3366) – OpenAI‑compatible provider | Open, 2 comments, updated 2026‑09‑11 | Popular feature request; low‑effort to implement by copying OpenAI provider logic. |
| [#3347](https://github.com/sipeed/picoclaw/pull/3347) – Fix laggy interface | Open, no comment count, updated 2026‑09‑11 | UI performance improvement; ready for review/merge. |
| [#3371](https://github.com/sipeed/picoclaw/pull/3371) – Add opencode‑go provider | Open, no comment count, updated 2026‑09‑10 | Extends provider ecosystem; awaits maintainer approval. |
| (Stale tag) Many issues/PRs carry the `stale` label (e.g., #3338, #3340, #3346, #3347) indicating they have not seen recent discussion; maintainers may want to revisit or close them if resolved. |

---

**Takeaway:** PicoClaw is actively fixing critical channel bugs (Slack) and responding to community‑driven feature asks (OpenAI‑compatible, Opencode‑go). The most pressing blocker is the Feishu configuration error; addressing it will unlock a key integration channel. UI lag and provider extensibility are near‑term opportunities that could boost user satisfaction in the next release cycle.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-09-12

## 1. Today's Overview
NanoClaw is in a high-activity development phase: 16 PRs and 7 issues were updated in the last 24 hours, with no new releases. The PR pipeline is heavily weighted toward open work (15 open, 1 closed), suggesting active feature development and bug-fix review rather than a release cycle. Issue activity is moderate (5 open/active, 2 closed), with several fresh setup, provider, and stability reports. Overall project health appears strong on contribution volume, but the growing open-PR backlog and repeated install/setup bugs indicate maintainer review capacity and install reliability remain pressure points.

## 2. Releases
No new releases were published in the last 24 hours. There are no release notes, breaking changes, or migration notes to report.

## 3. Project Progress
- **Closed PR:** [#3274](https://github.com/nanocoai/nanoclaw/pull/3274) — `docs(skills): update add-opencode to cli-tools.json pattern`. This closes a long-standing docs/skill mismatch where `/add-opencode` still described the old Dockerfile `ARG` + `RUN pnpm install -g` pattern.
- **Closed Issues:** [#3204](https://github.com/nanocoai/nanoclaw/issues/3204) — add-opencode still referenced removed Dockerfile edits; [#3761](https://github.com/nanocoai/nanoclaw/issues/3761) — permission probe test (not substantive).
- **Open work advancing:** Voice-channel capability is moving via [#3772](https://github.com/nanocoai/nanoclaw/pull/3772) and [#3764](https://github.com/nanocoai/nanoclaw/pull/3764) (`/add-voice`, browser full-duplex conversations). Setup/install reliability is being addressed by [#3771](https://github.com/nanocoai/nanoclaw/pull/3771) (uvx pnpm recovery), [#3768](https://github.com/nanocoai/nanoclaw/pull/3768) (Linux fallback service), and [#3767](https://github.com/nanocoai/nanoclaw/pull/3767) (preserve files on registry copy failure). Core stability work includes [#3766](https://github.com/nanocoai/nanoclaw/pull/3766) (SQLite migration write lock), [#3770](https://github.com/nanocoai/nanoclaw/pull/3770) (honor `WEBHOOK_PORT`), and [#3763](https://github.com/nanocoai/nanoclaw/pull/3763) (drop stale opencode Dockerfile guard).

## 4. Community Hot Topics
Engagement is low on reactions (all items show 0 👍), and most active issues have only 1 comment. The most discussed items are:
- [#3576](https://github.com/nanocoai/nanoclaw/issues/3576) — Rate-limited turns flood the channel with duplicate error notices; no backoff/dedup. Underlying need: reduce noisy error delivery and add retry controls for rate-limited turns.
- [#3762](https://github.com/nanocoai/nanoclaw/issues/3762) — `/add-opencode` leaves a pre-8772ec97 Dockerfile guard test behind on remove/upgrade. Underlying need: clean upgrade/remove paths for skills and provider installs.
- [#3204](https://github.com/nanocoai/nanoclaw/issues/3204) — Closed issue about add-opencode instructing removed Dockerfile edits. Underlying need: keep skills synchronized with refactors.
- [#3643](https://github.com/nanocoai/nanoclaw/issues/3643) — Hardcoded 30-min `ABSOLUTE_CEILING_MS` cold-kills long local-model turns; no config seam. Underlying need: configurable container timeouts for local-model workloads.
- [#3761](https://github.com/nanocoai/nanoclaw/issues/3761) — Closed permission probe test. Not substantive.

## 5. Bugs & Stability
Ranked by severity based on labels and impact:

1. **High — [#3643](https://github.com/nanocoai/nanoclaw/issues/3643)** `[priority/high, area/containers]` Hardcoded 30-min absolute ceiling kills long local-model turns. No fix PR is linked yet. This is a functional regression for local/OpenCode-style backends.
2. **High/Medium — [#3576](https://github.com/nanocoai/nanoclaw/issues/3576)** Rate-limited turns flood channels with duplicate error notices; no backoff/dedup on `deliverErrorResult`. No fix PR linked yet. Impacts production usability and noise.
3. **Medium — [#3769](https://github.com/nanocoai/nanoclaw/issues/3769)** Fresh uvx bootstrap exits with `pnpm not found` when `~/.local/bin` is absent from `PATH`. Fix PR exists: [#3771](https://github.com/nanocoai/nanoclaw/pull/3771).
4. **Medium — [#3765](https://github.com/nanocoai/nanoclaw/issues/3765)** Concurrent SQLite migrations can fail during fresh setup. Fix PR exists: [#3766](https://github.com/nanocoai/nanoclaw/pull/3766).
5. **Low — [#3762](https://github.com/nanocoai/nanoclaw/issues/3762)** `/add-opencode` leaves the pre-8772ec97 Dockerfile guard test behind on remove and upgrade. Fix PR exists: [#3763](https://github.com/nanocoai/nanoclaw/pull/3763).
6. **Closed — [#3204](https://github.com/nanocoai/nanoclaw/issues/3204)** add-opencode skill stale Dockerfile instructions; closed today. Related fix PR [#3274](https://github.com/nanocoai/nanoclaw/pull/3274) also closed.

## 6. Feature Requests & Roadmap Signals
The strongest roadmap signal is **voice support**: [#3772](https://github.com/nanocoai/nanoclaw/pull/3772) adds a voice adapter payload for OpenAI GPT-Live-1 browser calls, and [#3764](https://github.com/nanocoai/nanoclaw/pull/3764) adds `/add-voice` for full-duplex browser conversations. If merged, this is likely a headline feature for the next minor release. Other signals include:
- [#3449](https://github.com/nanocoai/nanoclaw/pull/3449) — Telegram `allowedUpdates` pinning to stop channel-post blackholing.
- [#3275](https://github.com/nanocoai/nanoclaw/pull/3275) — install/refresh `~/.local/bin/ncl` on upgrade.
- [#3286](https://github.com/nanocoai/nanoclaw/pull/3286) — skip image rebuild when no packages are configured.
- [#3281](https://github.com/nanocoai/nanoclaw/pull/3281) — agent-scoped `ncl tasks` visibility for legacy sessions.
- [#3276](https://github.com/nanocoai/nanoclaw/pull/3276) — sanitize path-separator message IDs for Google Chat attachment staging.
- [#3287](https://github.com/nanocoai/nanoclaw/pull/3287) — strip agent-group suffix from inbound platform message IDs.
- [#3311](https://github.com/nanocoai/nanoclaw/pull/3311) — route scheduled-task errors to the operator.

**Prediction:** The next version is likely to include voice-channel support, setup/install reliability fixes, SQLite migration concurrency protection, webhook port configuration, and opencode skill cleanup.

## 7. User Feedback Summary
Real user pain points cluster around **install/setup friction** and **runtime stability**:
- Fresh installs fail with `pnpm not found` after uvx bootstrap ([#3769](https://github.com/nanocoai/nanoclaw/issues/3769)).
- Concurrent SQLite migrations break fresh macOS setup ([#3765](https://github.com/nanocoai/nanoclaw/issues/3765)).
- Linux nohup fallback leaves the host stopped during setup ([#3768](https://github.com/nanocoai/nanoclaw/pull/3768)).
- Long local-model turns are killed by a hardcoded 30-minute ceiling ([#3643](https://github.com/nanocoai/nanoclaw/issues/3643)).
- Rate-limited turns spam channels with duplicate error notices ([#3576](https://github.com/nanocoai/nanoclaw/issues/3576)).
- Upgrade/remove paths leave stale skill artifacts ([#3762](https://github.com/nanocoai/nanoclaw/issues/3762), [#3204](https://github.com/nanocoai/nanoclaw/issues/3204)).
- Channel-specific issues persist for Telegram ([#3449](https://github.com/nanocoai/nanoclaw/pull/3449)) and Google Chat attachments ([#3276](https://github.com/nanocoai/nanoclaw/pull/3276)).

On the positive side, contributors are responding quickly: `glifocat`, `wakqasahmed`, `tahodev`, `DawoudIO`, and `mshirel` are actively filing and fixing issues. Dissatisfaction is mainly about install reliability, error noise, and timeout configurability, not core feature direction.

## 8. Backlog Watch
Several older PRs and issues remain open and may need maintainer attention:

- [#3275](https://github.com/nanocoai/nanoclaw/pull/3275) — install/refresh `ncl` symlink on upgrade (created 2026-08-16, still open).
- [#3276](https://github.com/nanocoai/nanoclaw/pull/3276) — Google Chat attachment staging path fix (created 2026-08-16).
- [#3281](https://github.com/nanocoai/nanoclaw/pull/3281) — legacy session visibility for `ncl tasks` (created 2026-08-16).
- [#3286](https://github.com/nanocoai/nanoclaw/pull/3286) — skip unnecessary image rebuild (created 2026-08-17).
- [#3287](https://github.com/nanocoai/nanoclaw/pull/3287) — inbound platform message ID suffix fix (created 2026-08-17).
- [#3311](https://github.com/nanocoai/nanoclaw/pull/3311) — scheduled-task error routing (created 2026-08-18).
- [#3449](https://github.com/nanocoai/nanoclaw/pull/3449) — Telegram `allowedUpdates` pinning (created 2026-08-22).
- [#3576](https://github.com/nanocoai/nanoclaw/issues/3576) — rate-limit duplicate error notices (created 2026-08-27).
- [#3643](https://github.com/nanocoai/nanoclaw/issues/3643) — hardcoded 30-min container ceiling, `priority/high` (created 2026-08-28).

These items have been open for 2–4 weeks and represent meaningful stability, setup, and channel improvements. Prioritizing review/merge for the high-priority container timeout and rate-limit noise issues would likely yield the largest user-impact improvement.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-09-12

## 1. Today's Overview
IronClaw showed very low 24-hour activity: 0 issues updated, 1 PR updated, and 0 new releases. The only active item is open PR #8076, a fix for assistant handling of disconnected shared channels. No merged or closed PRs were recorded, so no work was finalized in this window. Overall project health appears stable but quiet, with maintenance/review activity centered on a single open bug-fix PR.

## 2. Releases
None. No new releases were published in the reporting period.

## 3. Project Progress
- Merged/closed PRs today: **0**.
- Features/fixes advanced: **none confirmed as merged**.
- Open PR activity:
  - **#8076 [OPEN] fix(assistant): distinguish disconnected shared channels** — https://github.com/nearai/ironclaw/pull/8076  
    Author: be-student | Created: 2026-09-06 | Updated: 2026-09-11 | Reactions: 0  
    Summary: distinguishes a paired user's disconnected shared channel from an unpaired account; renders channel-specific guidance for user messages and bot commands; keeps rejection classification consistent across product, adapter, and OpenAI-compatible surfaces; updates Slack capability-related behavior. Since the PR remains open, no user-facing progress is finalized.

## 4. Community Hot Topics
- Only one PR was active: **#8076** — https://github.com/nearai/ironclaw/pull/8076  
  Comments: undefined in the provided data | Reactions: 0. There is not enough engagement data to classify it as “hot.”
- Underlying need: clearer, channel-specific diagnostics when a shared channel is disconnected, especially to avoid confusing it with an unpaired account. The PR also signals demand for consistent rejection/error handling across product, adapter, and OpenAI-compatible interfaces.

## 5. Bugs & Stability
- Potential bug/UX issue addressed by **#8076**: incorrect or ambiguous handling of disconnected shared channels vs. unpaired accounts.  
  Severity: **medium** — not described as a crash or data-loss issue, but it affects authorization/rejection clarity and user guidance across multiple surfaces.
- Fix PR exists but is **open, not merged**: https://github.com/nearai/ironclaw/pull/8076
- No other bugs, crashes, or regressions were reported in the provided data.

## 6. Feature Requests & Roadmap Signals
- No explicit feature requests or issue-based roadmap items were recorded in the last 24h.
- Signals from **#8076**: continued work on Slack capabilities, channel-state handling, and cross-surface consistency across product, adapter, and OpenAI-compatible surfaces. If merged, this could appear in a future patch/minor release as improved assistant channel guidance and rejection classification.

## 7. User Feedback Summary
- No direct user feedback, satisfaction metrics, or issue comments were provided.
- Implied pain point from **#8076**: paired users with a disconnected shared channel may receive misleading guidance, and bot commands may not be handled with the same clarity as user messages. The PR responds by adding channel-specific guidance and consistent classification.

## 8. Backlog Watch
- **PR #8076** — https://github.com/nearai/ironclaw/pull/8076 — open since 2026-09-06, last updated 2026-09-11. Comment/reaction data is unavailable, and it is not merged. Maintainer review/decision may be needed to prevent it from stalling.
- No long-unanswered issues are visible in the provided data because the issue list is empty.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI Project Digest – 2026‑09‑12**  
*Based on GitHub activity (issues & PRs updated in the last 24 h)*  

---  

### 1. Today's Overview  
The repository showed moderate maintenance activity: **3 issues** were updated (all still open) and **8 pull requests** were touched, with **6 merged/closed** and **2 remaining open**. No new releases were published today. The surge of PRs indicates a focused bug‑fix sprint, while the open issues highlight lingering configuration‑persistence problems that affect multi‑agent workflows. Overall project health is active, with contributors addressing stability regressions, but a few long‑standing user‑impact bugs remain unresolved.  

---  

### 2. Releases  
*No new releases were tagged today.*  

---  

### 3. Project Progress – Merged/Closed PRs  

| PR | Title (areas) | Key Fix / Change | Link |
|----|---------------|------------------|------|
| #2656 | fix: openclaw gateway startup selfheal (docs, main, openclaw) | Adds self‑heal logic to gateway startup to recover from transient failures. | [#2656](https://github.com/netease-youdao/LobsterAI/pull/2656) |
| #2655 | chore: optimize package size (build, docs, openclaw, windows, macos) | Strips unnecessary dependencies and assets, reducing the installer size. | [#2655](https://github.com/netease-youdao/LobsterAI/pull/2655) |
| #2653 | fix(openclaw): preserve host runtime during plugin cleanup (renderer, docs, main, openclaw, cowork) | Prevents Electron’s `fs.rmSync` from deleting the host runtime when cleaning plugins on Windows. | [#2653](https://github.com/netease-youdao/LobsterAI/pull/2653) |
| #2652 | fix(plugins): patch nsp-clawguard native require compatibility (docs, main) | Patches the `graceful-fs` interop issue that caused `fs.close` errors after OpenClaw v2026.8.1 upgrade. | [#2652](https://github.com/netease-youdao/LobsterAI/pull/2652) |
| #2651 | fix(openclaw): prevent stale desktop sessions from resuming (main, openclaw) | Requires an explicit interruption marker before recovering desktop‑session state, avoiding accidental reruns. | [#2651](https://github.com/netease-youdao/LobsterAI/pull/2651) |
| #2650 | fix(openclaw): recover memory sidecar archive collisions (docs, main, openclaw) | Resolves filename collisions between legacy memory indexes and `.migrated` backups that caused startup crashes. | [#2650](https://github.com/netease-youdao/LobsterAI/pull/2650) |

*Closed PRs collectively address startup stability, plugin cleanup safety, package bloat, and session‑recovery logic – core areas that were causing crashes or unexpected behavior in recent versions.*  

---  

### 4. Community Hot Topics  

| Item | Comments / Reactions | Why it matters | Link |
|------|----------------------|----------------|------|
| **Issue #2293** – USER.md overwritten on restart (multi‑agent) | 5 comments | Users need isolated per‑agent configuration; the bug forces all agents to share the same USER.md, breaking workflow differentiation. | [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) |
| **Issue #1006** – Config & workspace files reset on restart | 2 comments | Highlights a persistent pain point: user‑customized `openclaw.json` and `AGENTS.md` are regenerated from internal templates, making durable customization impossible without workarounds. | [#1006](https://github.com/netease-youdao/LobsterAI/issues/1006) |
| **Issue #2654** – hooks field lost in `syncToDisk` | 1 comment | Technical bug causing plugin hook configurations to disappear after each gateway restart, affecting extensibility. | [#2654](https://github.com/netease-youdao/LobsterAI/issues/2654) |
| **PR #1181** – Hide OpenClaw main agent sessions from cowork list (open since Apr 2026) | 0 comments (stale) | Improves UI clarity by preventing internal heartbeat sessions from appearing in the user‑facing session list. | [#1181](https://github.com/netease-youdao/LobsterAI/pull/1181) |

*The most discussed issue (#2293) reflects a core user need: true isolation of per‑agent data. The config‑reset issue (#1006) is a close second, indicating a strong desire for persistent user settings.*  

---  

### 5. Bugs & Stability  

| Severity | Bug / Regression | Reported Today? | Fix PR (if any) | Link |
|----------|------------------|-----------------|----------------|------|
| **High** | USER.md overwrite affecting all agents (#2293) | Updated (not new) | None yet | [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) |
| **High** | Config/workspace files regenerated on each start (#1006) | Updated (not new) | None yet | [#1006](https://github.com/netease-youdao/LobsterAI/issues/1006) |
| **Medium** | Hooks configuration lost after gateway restart (#2654) | **New** (created 2026‑09‑11) | Suggested fix in issue description (add hooks column, modify `getUserPlugins` & `syncToDisk`) | [#2654](https://github.com/netease-youdao/LobsterAI/issues/2654) |
| **Low** | Thumbnail rendering / native dependency build issues (open PR #2657) | Open | None (still open) | [#2657](https://github.com/netease-youdao/LobsterAI/pull/2657) |

*The two high‑severity bugs are long‑standing configuration persistence issues. The newly reported hooks bug (#2654) is medium‑impact but has a clear remediation path.*  

---  

### 6. Feature Requests & Roadmap Signals  

| Requested Feature | Source | Likelihood for Next Version | Rationale |
|-------------------|--------|----------------------------|-----------|
| **Persist user‑customized config files** (e.g., `openclaw.json`, `AGENTS.md`) | Issue #1006 | **High** | Multiple contributors have expressed frustration; fixing this aligns with the recent stability PRs and would reduce user‑side workarounds. |
| **Per‑agent USER.md isolation** | Issue #2293 | **Medium** | Directly addresses a core workflow need; would require changes to how workspace files are loaded/saved per agent. |
| **Persist plugin hooks field** | Issue #2654 | **High** | The fix is trivial (add column, return field) and already discussed; likely to be merged in the upcoming patch. |
| **Hide internal OpenClaw sessions from cowork UI** | PR #1181 (open) | **Medium** | Improves UX; low risk, but stalled due to stale label. |
| **Reduce package size** | PR #2655 (merged) | **Already delivered** | Indicates a continued focus on download efficiency. |  

---  

### 7. User Feedback Summary  

- **Pain Points:**  
  - Users report that any tweak to an agent’s “About you” page or USER.md propagates to all agents, making differentiated agent profiles impossible.  
  - Custom configuration files are wiped on every launch, forcing reliance on external scripts or manual re‑application.  
  - Plugin hook settings disappear after restart, breaking automated workflows that depend on those hooks.  

- **Positive Signals:**  
  - Recent PRs have successfully resolved startup crashes related to memory sidecar collisions and plugin cleanup safety, indicating the team is responsive to stability concerns.  
  - Package‑size optimizations are welcomed, especially for Windows/macOS users with limited bandwidth.  

- **Satisfaction/Dissatisfaction:**  
  - Satisfaction stems from incremental stability fixes and size reductions.  
  - Dissatisfaction centers on the **configuration persistence** bugs, which directly impede everyday customization and multi‑agent use cases.  

---  

### 8. Backlog Watch  

| Item | Age | Importance | Suggested Action |
|------|-----|------------|------------------|
| **Issue #1006** – Config/workspace reset | ~5.5 months (since 2026‑03‑28) | High – affects all users who customize settings | Prioritize a fix: detect user‑edited files and skip template regeneration, or provide a “user‑config” overlay folder. |
| **Issue #2293** – USER.md overwrite | ~5.5 months (since 2026‑07‑07) | High – blocks multi‑agent differentiation | Implement per‑agent workspace isolation; ensure USER.md is read from `workspace‑<agent>/` rather than a shared location. |
| **PR #1181** – Hide OpenClaw main agent sessions | ~5.5 months (since 2026‑04‑01) | Medium – UI clarity | Review and merge; the change is minor (add hidden flag) and has been ready for months. |
| **Issue #2654** – Hooks persistence | 1 day (new) | Medium – plugin extensibility | Accept the suggested schema change and merge the fix; low risk. |


</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-09-12

## Today's Overview
On 2026-09-12, Moltis shows minimal activity: 0 issues updated, 1 open PR updated, and no new releases. The only item in the 24-hour window is PR #1143, an open contribution to add Requesty as an OpenAI-compatible provider, last updated 2026-09-11. No merges or closures occurred, so no code landed in the mainline today. Overall project health signals are neutral-to-quiet: there are no new bug reports or release blockers, but there is also no visible maintainer throughput on the single active PR. The main attention point is whether maintainers will review and merge this long-open provider integration.

## Releases
No new releases in the reporting window. No breaking changes, migration notes, or version details are available.

## Project Progress
- **Merged/closed PRs today:** None.
- **Closed issues today:** None.
- **Features advanced/fixed:** No mainline progress. The only movement is an update to open PR [#1143](https://github.com/moltis-org/moltis/pull/1143), which remains unmerged.

## Community Hot Topics
Only one item is active in the provided dataset:

- **[PR #1143](https://github.com/moltis-org/moltis/pull/1143) — Add Requesty as an OpenAI-compatible provider**  
  Author: Thibaultjaigu  
  Created: 2026-07-02 | Updated: 2026-09-11 | Comments: undefined | 👍: 0  
  Summary: Adds Requesty as a table-driven OpenAI-compatible provider, mirroring the existing `openrouter` wiring as closely as possible. Requesty is an OpenAI-compatible LLM router. Base URL `https://router.requesty.ai/v1`, auth via `Authorization: Bearer $REQUESTY_API_KEY`.

**Underlying need:** The PR signals demand for broader provider interoperability, routing flexibility, and reduced vendor lock-in. Because it mirrors the `openrouter` implementation, the contributor likely wants a low-friction, pattern-consistent integration that maintainers can review and merge easily. Engagement is not quantifiable because the comment count is recorded as `undefined`.

## Bugs & Stability
No bugs, crashes, or regressions were reported or updated today. There are no severity rankings to provide, and no fix PRs are visible in the provided data.

## Feature Requests & Roadmap Signals
- **Requesty provider support:** [#1143](https://github.com/moltis-org/moltis/pull/1143) is the clearest roadmap signal. If reviewed and merged, it would expand Moltis’s OpenAI-compatible provider matrix and likely appear in the next release.
- **No issue-based feature requests:** With 0 issues updated, there are no other user-requested features in the current window.
- **Prediction:** Requesty support is a candidate for the next version only if maintainers prioritize provider expansion and clear the open PR. Given its age, timing is uncertain.

## User Feedback Summary
The only user-contributed signal is PR [#1143](https://github.com/moltis-org/moltis/pull/1143). It suggests a real user need for Requesty as an OpenAI-compatible provider, likely driven by routing, model access, or cost-management use cases. There is no measurable satisfaction/dissatisfaction data because no issues or comments are available. The PR’s long-open status may indicate either low maintainer bandwidth or a backlog in provider-integration review.

## Backlog Watch
- **[PR #1143](https://github.com/moltis-org/moltis/pull/1143) — Add Requesty as an OpenAI-compatible provider**  
  Open since 2026-07-02 and last updated 2026-09-11, this PR has been awaiting review for over two months. It has 0 👍 and an undefined comment count, with no visible maintainer response in the provided data. It is the primary backlog item needing maintainer triage, review, or merge/close decision.

**Data note:** Comment counts and reaction data are limited in the provided dataset; PR #1143’s comment count is recorded as `undefined`, so community engagement cannot be fully assessed.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw (agentscope‑ai/QwenPaw) – Project Digest for 2026‑09‑12**  

---

### 1. Today’s Overview  
The repository showed **high activity** in the last 24 h: **21 issues** were touched (15 still open, 6 closed) and **41 PRs** updated (23 open, 18 merged/closed). A **stable release v2.2.1** was shipped, indicating the team is balancing new feature work with bug‑fixing and release duties. Overall health appears good – steady contribution flow, active discussions, and a clear release cadence.

---

### 2. Releases  

| Version | Type | Highlights (from release notes) |
|---------|------|---------------------------------|
| **v2.2.1** | Stable | • **Per‑agent model routing** – each Agent can now declare its own provider preferences and fallback behavior ([#7501](https://github.com/agentscope-ai/QwenPaw/pull/7501)).<br>• **Auto Fin proactive memory review** and an upgrade to the **ReMe** memory module for more efficient long‑term recall.<br>• Miscellaneous UI/UX polish and bug fixes (see PR list below). |

*No breaking changes or migration notes were mentioned in the release notes.*  

---

### 3. Project Progress – Merged/Closed PRs Today  

| PR | Type | Summary |
|----|------|---------|
| [#7692](https://github.com/agentscope-ai/QwenPaw/pull/7692) | Release Duty | Installation verification for v2.2.1 (stable). |
| [#7674](https://github.com/agentscope-ai/QwenPaw/pull/7674) | Release Duty | Installation verification for v2.2.1‑beta.2. |
| [#7687](https://github.com/agentscope-ai/QwenPaw/pull/7687) | Bug fix | Regression: switching agent silently moved to a new conversation (2.2.1‑beta.2). |
| [#7688](https://github.com/agentscope-ai/QwenPaw/pull/7688) | UI/UX | Simplified grouped session pagination – replaced “Collapse List” with “Load More”. |
| [#7677](https://github.com/agentscope-ai/QwenPaw/pull/7677) | API validation | Return **422** for non‑finite validation inputs (FastAPI handler). |
| [#7652](https://github.com/agentscope-ai/QwenPaw/pull/7652) | Model handling | Preserve provider‑resolved context windows to avoid premature compaction. |
| [#6994](https://github.com/agentscope-ai/QwenPaw/pull/6994) | Chore | Updated release notes for v2.1.0 (housekeeping). |
| [#6960](https://github.com/agentscope-ai/QwenPaw/pull/6960) | Feature | **PawPort** import flow – bring instructions, skills, plugins, etc. from Codex/Qoder into QwenPaw. |
| [#7590](https://github.com/agentscope-ai/QwenPaw/pull/7590) | Bug fix (Telegram) | Render Markdown tables as `<pre>` instead of raw pipes on Telegram. |
| [#7701](https://github.com/agentscope-ai/QwenPaw/pull/7701) | Test | Repair approval‑command handler stub after #7444. |
| [#7699](https://github.com/agentscope-ai/QwenPaw/pull/7699) | Security | Harden master‑key file permissions on read (warn & fix insecure bits). |
| [#7704](https://github.com/agentscope-ai/QwenPaw/pull/7704) | UI | Move chat‑files drawer to the right side of the console. |
| [#7703](https://github.com/agentscope-ai/QwenPaw/pull/7703) | UI | Improve visual compaction (stable image batches, source‑text recall). |
| [#7706](https://github.com/agentscope-ai/QwenPaw/pull/7706) | Docs | Remove nonexistent `qwenpaw providers` CLI reference. |
| [#7702](https://github.com/agentscope-ai/QwenPaw/pull/7702) | Plugin | Add **bot‑manager** – unified multi‑channel bot management plugin. |
| [#7696](https://github.com/agentscope-ai/QwenPaw/pull/7696) | Hub | Support local administrator bootstrap via `qwenpaw hub --init-admin`. |
| [#7712](https://github.com/agentscope-ai/QwenPaw/pull/7712) | Feature | Add **Serply** as a web‑search provider (opt‑in BYOK). |
| [#7713](https://github.com/agentscope-ai/QwenPaw/pull/7713) | Feature | Telegram: render Markdown tables via Rich Messages API. |
| [#7592](https://github.com/agentscope-ai/QwenPaw/pull/7592) | Feature (Telegram) | Optional cleanup of intermediate Telegram messages after final answer. |

These PRs collectively advanced **model routing**, **memory improvements**, **UI/UX refinements**, **security hardening**, and **extensibility** (new providers, plugins, hub admin flow).

---

### 4. Community Hot Topics  

| Item | Comments / Reactions | Link | Why it’s hot |
|------|----------------------|------|--------------|
| **Issue #7318** – *QwenPaw Hub multi‑tenant discussion* | 26 comments, 👍 4 | [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | The community is actively shaping the upcoming Hub (team‑oriented) release; many suggestions on admin UI, skill management, and multi‑tenant isolation. |
| **Issue #7177** – *Deploy page UI optimisation* | 10 comments, 👍 0 | [#7177](https://github.com/agentscope-ai/QwenPaw/issues/7177) | Frequent web‑console users highlighted placement of the entry/exit buttons – a clear usability pain point. |
| **PR #7712** – *Serply web‑search provider* | (comment count not shown) | [#7712](https://github.com/agentscope-ai/QwenPaw/pull/7712) | First‑time contributor adding a third‑party search backend – indicates interest in extensible tooling. |
| **PR #7702** – *bot‑manager plugin* | (comment count not shown) | [#7702](https://github.com/agentscope-ai/QwenPaw/pull/7702) | Unified multi‑channel bot management – a recurring request for operators handling WeChat, DingTalk, etc. |

**Underlying needs:**  
* A **team‑ready Hub** with robust admin controls and skill governance.  
* Better **web‑console ergonomics** (button placement, accidental stop avoidance).  
* Pluggable **search** and **bot‑management** capabilities to avoid vendor lock‑in.

---

### 5. Bugs & Stability (reported today)  

| Severity | Issue | Summary | Linked Fix/PR (if any) |
|----------|-------|---------|------------------------|
| **Critical** | [#7567](https://github.com/agentscope-ai/QwenPaw/issues/7567) | “Stop” button shows task stopped but execution continues (leads to 409 conflicts). | No fix PR yet – needs urgent attention. |
| **High** | [#7698](https://github.com/agentscope-ai/QwenPaw/issues/7698) | Ghost sessions: sidebar shows 9/10 session but loads 9/9 content; disk file missing → data loss. | No fix PR yet. |
| **High** | [#7678](https://github.com/agentscope-ai/QwenPaw/issues/7678) | `spawn subAgent` always timeouts, even with huge timeout values. | Related to #4901 & #7676; no direct fix yet. |
| **Medium** | [#7689](https://github.com/agentscope-ai/QwenPaw/issues/7689) | PDF blocks still sent to multimodal chat/completions after #7621 (only fixed for non‑multimodal models). | No fix PR yet. |
| **Medium** | [#7687](https://github.com/agentscope-ai/QwenPaw/issues/7687) | Switching agent silently moves to a new conversation (regression in 2.2.1‑beta.2). | Fixed by PR #7687 (merged). |
| **Medium** | [#7709](https://github.com/agentscope-ai/QwenPaw/issues/7709) | Timed tasks often produce no output; results buried in thinking/steps. | No fix PR yet. |
| **Medium** | [#7708](https://github.com/agentscope-ai/QwenPaw/issues/7708) | Configured LLM model disappears after runtime – forces reselection. | No fix PR yet. |
| **Low** | [#7705](https://github.com/agentscope-ai/QwenPaw/issues/7705) | Workspace directory not honoured; defaults to old path. | No fix PR yet. |
| **Low** | [#7693](https://github.com/agentscope-ai/QwenPaw/issues/7693) | Multi‑image generation: user “审核通过” aborts current image task and leaves it stuck RUNNING. | No fix PR yet. |
| **Low** | [#7676](https://github.com/agentscope-ai/QwenPaw/issues/7676) | `subagent_model` setting ignored – spawned subagents always inherit parent’s active_model. | No fix PR yet (related to #4901). |

*Note:* Several stability‑related PRs were merged today (e.g., #7684 for provider bot‑challenge handling, #7677 for 422 validation, #7652 for context windows, #7699 for master‑key permissions) – they address underlying robustness but do not yet cover the critical bugs above.

---

### 6. Feature Requests & Roadmap Signals  

| Feature Request | Issue/PR | Notes / Likelihood for Next Release |
|-----------------|----------|-------------------------------------|
| **Per‑task model selection for `spawn_subagent`** | #4901 (open since 2026‑06‑02) | Core to cost‑optimisation; likely to be tackled after the Hub stabilises. |
| **Loop context‑compression command (`/compact`)** | #7679 | Direct user demand for token‑saving in long loops; high priority for next minor release. |
| **Custom default Loop mode (rename “默认” → “标准”, allow any template as default)** | #7714 | Simple UI/UX change; could land in v2.2.2. |
| **History groups for inter‑agent tool chats & proactive messages** | #7710 | Improves console tidiness; fits with recent UI polish. |
| **Switch conversation section to the left / docs preview to the right** | #7700 | Mirrors #7704 (files drawer right); likely to be addressed together. |
| **Hub local administrator bootstrap (`qwenpaw hub --init-admin`)** | #7696 (PR merged) | Already merged – will be part of v2.2.1‑stable. |
| **Unified multi‑channel bot management plugin** | #7702 (PR merged) | Ready for inclusion in upcoming release. |
| **Serply as web‑search provider** | #7711 / #7712 (PR merged) | Opt‑in provider; expected to be released with v2.2.2. |
| **Telegram Rich Messages for Markdown tables** | #7713 (PR open) | Enhances Telegram UX; low risk, likely to be merged soon. |

Overall, the roadmap appears to be **stabilising the Hub**, **improving loop/memory efficiency**, and **expanding provider/plugin ecosystem**.

---

### 7. User Feedback Summary  

*Pain points highlighted in open issues:*  

1. **Task control** – Stop button not reliable (#7567).  
2. **Session integrity** – Ghost sessions and lost conversation history (#7698, #7693).  
3. **Model/config persistence** – Selected LLM or workspace resets after use (#7708, #7705).  
4. **UI ergonomics** – Entry button placement, stop‑button proximity on mobile (#7177, #7707).  
5. **Android input** – Lack of newline support in chat box (#7707).  
6. **Sub‑agent handling** – Timeouts and ignored model overrides (#7678, #7676).  
7. **Multimodal regression** – PDF blocks still sent to multimodal endpoints (#7689).  

*Positive signals:*  

* The community is enthusiastic about the **Hub** concept (many constructive comments in #7318).  
* Contributions from first‑timers (Serply provider, bot‑manager, PawPort) show a healthy external‑contributor pipeline.  
* Recent UI tweaks (files drawer moved right, pagination simplified) are well‑received, indicating the team listens to usability

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw Project Digest – 2026‑09‑12**  

---

### 1. Today’s Overview  
The repository showed very high activity in the last 24 h: **50 issues** and **50 pull requests** were updated, with **39 open/active issues** and **47 open PRs**. No new releases were cut today. The project is in a busy “triage‑and‑fix” mode – many items are marked *in‑progress* or *accepted*, while a steady stream of new bug reports and feature requests keeps the backlog growing. Overall health appears active, but the volume of open work indicates pressure on maintainers to review and merge changes.

### 2. Releases  
*No new releases were published today.*  

### 3. Project Progress  
- **Merged/closed PRs (today):** The activity summary reports **3 PRs merged/closed** in the last 24 h (details not visible in the snapshot).  
- **Closed issues (today):** **11 issues** were closed, including several bug fixes (e.g., #10753, #10786, #10609) and a few documentation/enhancement items.  
- **In‑progress work:** A number of bugs and features are marked *status:in‑progress* or *status:accepted* (e.g., #10734, #10736, #9713, #10214), indicating active development toward resolution.

### 4. Community Hot Topics (most commented items)  

| Item | Type | Comments | Link | What’s being discussed |
|------|------|----------|------|------------------------|
| #8692 | Tracker (RFC/design decision queue) | 15 | <https://github.com/zeroclaw-labs/zeroclaw/issues/8692> | Maintainer decision process for RFCs, design issues, and release‑policy questions – a core governance topic attracting broad interest. |
| #10549 | RFC – simplify voting (remove mandatory discussion windows) | 9 | <https://github.com/zeroclaw-labs/zeroclaw/issues/10549> | Proposal to streamline the RFC process by eliminating fixed discussion periods and letting a REVISE vote stop the current snapshot. |
| #5514 | Bug – batch Telegram media groups into one multimodal turn | 8 | <https://github.com/zeroclaw-labs/zeroclaw/issues/5514> | Users reporting that multiple images sent via Telegram generate separate LLM calls; desire for batching to reduce cost and improve UX. |
| #10734 | Bug – RpcDispatcher stack‑guard usage near limit (Windows) | 6 | <https://github.com/zeroclaw-labs/zeroclaw/issues/10734> | CI‑advisory Windows stack overflow surfacing a potential runtime stability issue. |

*Underlying needs:* Contributors are keen on tightening project governance (#8692, #10549), improving multimodal handling on Telegram (#5514), and guaranteeing reliability on Windows stacks (#10734). These topics reflect a mix of process refinement and platform‑specific robustness concerns.

### 5. Bugs & Stability (reported today, ranked by severity)  

| Severity | Issue | Summary | Link | Status / Fix PR |
|----------|-------|---------|------|-----------------|
| **P1** | #10734 | `RpcDispatcher::process_line` uses ~2 MB stack guard → Windows stack overflow (Advisory Windows nextest) | <https://github.com/zeroclaw-labs/zeroclaw/issues/10734> | `status:in‑progress`, `status:accepted` – fix PR likely in progress. |
| **P1** | #10788 | Failed Code/ACP turn discards accepted prompt & completed tool exchanges from durable history | <https://github.com/zeroclaw-labs/zeroclaw/issues/10788> | Open, `status:in‑progress` implied; needs fix to preserve history on error. |
| **P1** | #10785 | Notification lag triggers `begin_notification_resync → session/cancel`, cancelling running turns | <https://github.com/zeroclaw-labs/zeroclaw/issues/10785> | Open – high impact on long‑running sessions. |
| **P1** | #10778 | Multimodal image‑cap eviction rewrites earlier history messages & invalidates cache prefix | <https://github.com/zeroclaw-labs/zeroclaw/issues/10778> | Open – follows up on #10701; cache corruption risk. |
| **P1** | #10782 | Channel reply‑intent precheck discards LLM usage → classifier cost/quota never recorded | <https://github.com/zeroclaw-labs/zeroclaw/issues/10782> | Open – affects billing/observability. |
| **P2** | #10753 | `session/new` overflows 2 MB stack on Windows (guard test flaky) | <https://github.com/zeroclaw-labs/zeroclaw/issues/10753> | Closed – fix merged. |
| **P2** | #10736 | Pre‑output stream failure skips advertised non‑streaming fallback | <https://github.com/zeroclaw-labs/zeroclaw/issues/10736> | `status:in‑progress`, `status:accepted`. |
| **P2** | #10779 | OpenCode FreeUsageLimitError (429) retried with sub‑second backoff instead of failing fast | <https://github.com/zeroclaw-labs/zeroclaw/issues/10779> | Open – quota‑handling policy. |
| **P2** | #10757 | Distinguish agent‑browser availability probe timeouts from missing CLI errors | <https://github.com/zeroclaw-labs/zeroclaw/issues/10757> | Open – diagnostic clarity. |
| **P2** | #10731 | `zeroclaw service logs` prints nothing on macOS, Windows, OpenRC when daemon healthy | <https://github.com/zeroclaw-labs/zeroclaw/issues/10731> | Open – logging‑backend issue. |

*Note:* Where an issue shows `status:in‑progress` or `status:accepted`, a fix PR is likely underway (though not exposed in the snippet). Closed bugs such as #10753 indicate recent resolutions.

### 6. Feature Requests & Roadmap Signals  

| Issue | Type | Key Points | Link |
|-------|------|------------|------|
| #8692 | Tracker – Maintainer decision queue for RFCs & design | Centralised governance for RFCs, release policy, coordination. | <https://github.com/zeroclaw-labs/zeroclaw/issues/8692> |
| #10549 | RFC – Simplify voting (remove mandatory discussion windows) | Streamline RFC lifecycle, reduce latency. | <https://github.com/zeroclaw-labs/zeroclaw/issues/10549> |
| #8289 | Tracker – OIDC milestone (canonical principals & inbound auth) | Multi‑stage Identity & Access work; stage 5 in progress. | <https://github.com/zeroclaw-labs/zeroclaw/issues/8289> |
| #9967 | Tracker – Harness evaluation framework | Benchmark selection, config pinning, per‑turn instrumentation for reproducible performance tracking. | <https://github.com/zeroclaw-labs/zeroclaw/issues/9967> |
| #9047 | Feature – Clarify Code session history vs persistent memory | Documentation/UX improvement to prevent user confusion. | <https://github.com/zeroclaw-labs/zeroclaw/issues/9047> |
| #10780 | Enhancement – Restore proactive token‑budget context compaction | Re‑introduce token‑driven trimming (currently only message‑count based). | <https://github.com/zeroclaw-labs/zeroclaw/issues/10780> |
| #10781 | Enhancement – Remove/inert context/history config keys | Clean up unused or non‑functional config options. | <https://github.com/zeroclaw-labs/zeroclaw/issues/10781> |

*Prediction:* Items tied to active tracker issues (#8692, #10549, #8289) and the harness evaluation framework (#9967) are likely to shape the next release cycle, especially as they have maintainer attention (`status:accepted` or `needs-maintainer-review`). Token‑budget compaction (#10780) is a high‑impact performance feature that may land once the related config cleanup (#10781) is resolved.

### 7. User Feedback Summary (pain points & use‑cases)  

- **Windows stability:** Stack‑overflow bugs in RPC dispatcher and session creation (#10734, #10753) are causing crashes for Windows users; users request reliable cross‑platform operation.  
- **Multimodal handling:** Telegram media batching (#5514) and image‑cap eviction rewriting history (#10778, #10701) lead to duplicated LLM calls and lost context, increasing cost and degrading conversation quality.  
- **History & caching:** Several reports of history cache being invalidated or truncated (#10788, #10701, #10115) show users expect durable, predictable context across turns, especially in long sessions.  
- **Observability & cost tracking:** Missing LLM usage in channel prechecks (#10782) and log‑collection failures on non‑systemd platforms (#10731) hinder billing, debugging, and operational visibility.  
- **Process friction:** Contributors feel the RFC process is slowed by mandatory discussion windows (#10549) and desire a clearer decision queue (#8692).  

Overall, users appreciate the extensibility (Telegram, ACP, Code pane) but are frustrated by reliability gaps on Windows, opaque history management, and occasional process overhead.

### 8. Backlog Watch (items needing maintainer attention)  

| Item | Reason for Attention | Link |
|------|----------------------|------|
| #8692 (Tracker) | Governance hub; 15 comments, still open, needs maintainer decision on RFC handling. | <https://github.com/zeroclaw-labs/zeroclaw/issues/8692> |
| #10549 (RFC voting) | 9 comments, high impact on contribution velocity; awaiting decision on removing discussion windows. | <https://github.com/zeroclaw-labs/zeroclaw/issues/10549> |
| #5514 (Telegram media batching) | 8 comments, open bug affecting a widely used channel; fix would improve UX and reduce cost. | <https://github.com/zeroclaw-labs/zeroclaw/issues/5514> |
| #8289 (OIDC milestone) | Core security milestone; 3 comments, open tracker – needs progress on stages. | <https://github.com/zeroclaw-labs/zeroclaw/issues/8289> |
| #9967 (Harness evaluation framework) | 1 comment but marked *accepted*; foundational for performance‑guided development – needs implementation. | <https://github.com/zeroclaw-labs/zeroclaw/issues/9967> |
| PRs with `needs-maintainer-review` or `needs-author-action` (e.g., #9713, #10214, #10337, #10321) | Many XL‑sized enhancements/security PRs await review; merging them would unlock major features (token accounting, log rotation, git‑root security, PKCE enrollment). | (see PR list) |
| Long‑standing *status:no‑stale* items with low comment count but high priority (e.g., #10780, #10781) | Important cleanup/enhancement work that could be resolved quickly to reduce technical debt. | <https://github.com/zeroclaw-labs/zeroclaw/issues/10780> <br> <https://github.com/zeroclaw-labs/zeroclaw/issues/10781> |

---

**Takeaway:** ZeroClaw is actively evolving, with a healthy flow of contributions and a clear focus on stabilizing core runtime (especially Windows stack safety), improving multimodal and history handling, and refining governance/RFC processes. Addressing the backlog items above—particularly the tracker discussions and the stalled security/enhancement PRs—will be key to maintaining momentum toward the next stable release.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*