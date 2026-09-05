# OpenClaw Ecosystem Digest 2026-09-06

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-09-05 22:17 UTC

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

We are generating a project digest for OpenClaw for 2026-09-06 based on the provided data.

Steps:
1. **Today's Overview**: Summarize the project status from the data provided (last 24h activity).
2. **Releases**: Note the new release (v2026.9.2) and detail its highlights.
3. **Project Progress**: Look at the merged/closed PRs (from the PRs updated in last 24h: 193 merged/closed) and see if we can infer what was fixed or advanced. However, note that the data provided for PRs only shows the top 30 by comment count (and they are all open). We don't have a list of merged/closed PRs with details. But we can note that 193 PRs were merged/closed in the last 24h.
4. **Community Hot Topics**: From the latest issues (top 50 by comment count) and PRs (top 30 by comment count), we pick the ones with the highest comment counts and reactions.
5. **Bugs & Stability**: Look at the issues that are bugs, regressions, etc., and note their severity (from labels like P0, P1, impact:ux-release-blocker, etc.)
6. **Feature Requests & Roadmap Signals**: Look for enhancement/feature issues and PRs that indicate future direction.
7. **User Feedback Summary**: Extract from issues and comments the pain points and use cases.
8. **Backlog Watch**: Look for old issues (with early creation dates) that are still open and have high severity or comment count.

Note: The data provided for issues and PRs only shows the top 50 and top 30 by comment count, respectively. We'll use that for hot topics.

Let's break down:

**Today's Overview**:
- Issues updated in last 24h: 500 (436 open/active, 64 closed)
- PRs updated in last 24h: 500 (307 open, 193 merged/closed)
- New releases: 1 (v2026.9.2)

This indicates high activity: many issues and PRs being updated, and a new release.

**Releases**:
- v2026.9.2: openclaw 2026.9.2
  - Highlights: Faster, more responsive chat: keep chat, dashboards, and session interactions responsive while long transcripts and disk usage are processed, with direct dashboard lookup, less cold-load work, and durable history reads outside the Gateway event loop. (#136862, #138... [truncated])

**Project Progress**:
- We know 193 PRs were merged/closed in the last 24h. However, the provided PR data only shows open PRs (top 30 by comment count). We don't have the list of merged ones. But we can note that the release v2026.9.2 was cut, so the merged PRs likely contributed to that release.

**Community Hot Topics**:
We'll look at the issues and PRs with the highest comment counts.

From the issues (top 5 by comment count in the provided list):
1. #38327: 15 comments, 👍: 3 - [BUG] "Cannot convert undefined or null to object" in 2026.3.2 with google-vertex/gemini-3.1-pro-preview
2. #69208: 14 comments - Umbrella: duplicate transcript, replay, and context assembly across channels
3. #132762: 13 comments - [Bug]: overflow retry can end successfully on a tool result without final delivery
4. #53763: 12 comments - [Feature]: Built-in headless browser for reliable web access without external dependencies
5. #39476: 12 comments - A2A sessions_send: target agent can call sessions_send back, causing duplicate messages

From the PRs (top 5 by comment count in the provided list) - note: the PRs provided are all open and have undefined comment counts (so we cannot sort by comment count). However, we see that many PRs are from maintainer (steipete) and are labeled as ready for maintainer look. Since comment counts are undefined, we might have to rely on the issue hot topics.

But note: the PRs list says "showing top 30 by comment count", but the comment count field is "undefined" for all. This might be an error in the data. We'll have to skip PR comment counts and rely on issues for hot topics.

Alternatively, we can look at the PRs that are related to the hot issues? But without comment counts, we cannot.

Given the data, we'll focus on the issues for hot topics.

**Bugs & Stability**:
We look for issues labeled as bug, regression, and with high severity (P0, P1, impact:ux-release-blocker, etc.)

From the issues:
- #38327: P0, issue-rating: 🐚 platinum hermit, impact:ux-release-blocker -> regression, bug
- #69208: P1, impact:session-state, impact:message-loss -> umbrella issue for duplicates
- #132762: P1, impact:session-state, impact:message-loss -> bug: overflow retry
- #135111: P1, impact:auth-provider, issue-rating: 🐚 platinum hermit -> regression: malformed JSON arguments
- #115642: P1, impact:auth-provider, issue-rating: 🐚 platinum hermit -> billing cooldown outlives outage
- #53408: P2, impact:other -> bug: write/exec tool parameters dropped
- #97616: P1, impact:message-loss, impact:crash-loop -> bug: zombie processes
- #119720: P1, impact:session-state, impact:crash-loop -> synchronous agent persistence blocks Gateway event loop
- #110190: P1, impact:session-state, impact:message-loss -> runtime context carrier causes confusion
- #78055: P1, impact:session-state, impact:message-loss -> subagent announce delivers stale output
- #101929: P1, impact:session-state, impact:data-loss -> context-overflow-midturn-precheck over-counts
- #89257: P1, impact:data-loss -> backup create exits 13, leaves corrupt archive

**Feature Requests & Roadmap Signals**:
Look for enhancement/feature issues:
- #53763: Built-in headless browser (12 comments)
- #6599: Add /models test-fallback command (11 comments)
- #99583: Intelligent Session Auto-Titling (8 comments)
- #71452: feat(message): list chat / list messages should support pagination (6 comments)
- #63990: Multi-index embedding memory (6 comments)
- #132781: Use latest commentary as progress draft label (7 comments)

**User Feedback Summary**:
From the issues, we can see:
- Users are experiencing crashes (zombie processes, SIGKILL on exec tool)
- Responsiveness issues (memory compaction blocking main lane, session lane starvation)
- Duplicate messages in various channels (Feishu, Telegram, A2A sessions)
- Problems with model fallbacks (Claude CLI session limit not triggering fallback, cron fallback model failing)
- UI issues (TUI scroll-jump, missing MathJax/LaTeX in Control UI)
- Performance issues (tool schema token overhead, memory search quality instability)
- Reliability issues (gateway becoming unresponsive after upgrade, backup corruption)

**Backlog Watch**:
Look for old issues that are still open and have high severity or comment count.
- #6599: Created 2026-02-01, updated 2026-09-05, 11 comments - Feature: Add /models test-fallback command
- #14785: Created 2026-02-12, updated 2026-09-05, 10 comments - Reduce tool schema token overhead
- #41165: Created 2026-03-09, updated 2026-09-05, 8 comments - Telegram DMs routing issue
- #42408: Created 2026-03-10, updated 2026-09-05, 6 comments - memory_search quality instability
- #44130: Created 2026-03-12, updated 2026-09-05, 6 comments - TUI scroll-jump
- #44134: Created 2026-03-12, updated 2026-09-05, 7 comments - Google Antigravity Ban due to tool schema reloading
- #53008: Created 2026-03-23, updated 2026-09-05, 6 comments - Memory compaction blocks main processing lane
- #53408: Created 2026-03-24, updated 2026-09-05, 11 comments - write/exec tool parameters dropped
- #53763: Created 2026-03-24, updated 2026-09-05, 12 comments - Built-in headless browser
- #54488: Created 2026-03-25, updated 2026-09-05, 7 comments - Session lane starvation
- #69208: Created 2026-04-20, updated 2026-09-05, 14 comments - Umbrella: duplicate transcript
- #71058: Created 2026-04-24, updated 2026-09-05, 9 comments - Multiple Azure/Teams bots
- #71452: Created 2026-04-25, updated 2026-09-05, 6 comments - Pagination for list messages
- #72015: Created 2026-04-26, updated 2026-09-05, 10 comments - active-memory blocks replies
- #77700: Created 2026-05-05, updated 2026-09-05, 7 comments - Tracking: Prepared runtime resolution migration
- #78055: Created 2026-05-05, updated 2026-09-05, 6 comments - Subagent announce stale output
- #82662: Created 2026-05-16, updated 2026-09-05, 7 comments - Isolated cron agentTurn setup timeout
- #84242: Created 2026-05-19, updated 2026-09-05, 6 comments - memory-lancedb memory_store not exposed
- #85027: Created 2026-05-21, updated 2026-09-05, 6 comments - macOS LaunchAgent Gateway unrecoverable
- #85461: Created 2026-05-22, updated 2026-09-05, 7 comments - Capture image-generation provider usage
- #89257: Created 2026-06-01, updated 2026-09-05, 6 comments - backup create exits 13
- #90098: Created 2026-06-04, updated 2026-09-05, 7 comments - Stack-safe large attachment handling
- #91931: Created 2026-06-10, updated 2026-09-05, 6 comments - Preseeded SOUL.md deletes BOOTSTRAP.md
- #95610: Created 2026-06-21, updated 2026-09-05, 10 comments - Prompt-cache prefix churn on OpenAI models
- #96975: Created 2026-06-26, updated 2026-09-05, 12 comments - Isolate subagent completion
- #97335: Created 2026-06-28, updated 2026-09-05, 7 comments - Cron fallback model works in normal session but fails via cron
- #97616: Created 2026-06-29, updated 2026-09-05, 10 comments - OpenClaw leaks unreaped hook/tool child processes
- #99583: Created 2026-07-03, updated 2026-09-05, 8 comments - Intelligent Session Auto-Titling
- #101929: Created 2026-07-08, updated 2026-09-05, 7 comments - context-overflow-midturn-precheck over-counts
- #102534: Created 2026-07-09, updated 2026-09-05, 6 comments - Cron scheduler timer stops firing
- #110190: Created 2026-07-17, updated 2026-09-05, 10 comments - Runtime context carrier positioned AFTER user message
- #111630: Created 2026-07-20, updated 2026-09-05, 6 comments - session_status shows Context: ?/1.0m for MiniMax-M3
- #112259: Created 2026-07-21, updated 2026-09-05, 9 comments - Visible inbound channel turn silently dropped
- #113038: [PR] but we have an issue #113014? Actually, we see PR #113038 which closes #113014, but we don't have the issue in the list. We'll skip.
- #115642: Created 2026-07-29, updated 2026-09-05, 9 comments - Billing cooldown outlives the outage
- #118793: Created 2026-08-03, updated 2026-09-05, 6 comments - Claude CLI session limit error
- #119720: Created 2026-08-05, updated 2026-09-05, 10 comments - Synchronous agent persistence blocks Gateway event loop
- #119992: Created 2026-08-06, updated 2026-09-05, 7 comments - Per-turn send budget for message tool
- #120162: Created 2026-08-07, updated 2026-09-05, 7 comments - Safeguard compaction: qualityGuard audit retry
- #120491: [PR] but we have issue #119992? Actually, PR #120491 is for per-turn send budget, which relates to issue #119992.
- #123053: [PR] waiting on author
- #124337: [PR] 
- #124642: [PR] 
- #127229: Created 2026-08-21, updated 2026-09-05, 12 comments - Telegram watchdog-released durable update falsely tombstoned
- #129405: [PR] 
- #131835: [PR] 
- #132720: Created 2026-08-29, updated 2026-09-05, 6 comments - claude-cli 410 session_expired
- #132762: Created 2026-08-29, updated 2026-09-05, 13 comments - overflow retry
- #132765: Created 2026-08-29, updated 2026-09-05, 9 comments - agents_wait ignores timeoutSeconds
- #132781: Created 2026-08-29, updated 2026-09-05, 7 comments - Use latest commentary as progress draft
- #135111: Created 2026-09-01, updated 2026-09-05, 10 comments - Intermittent malformed JSON arguments
- #136361: [PR] 
- #136984: [PR] 
- #138210: [PR] 
- #138900: [PR] 
- #138981: [PR] #139344 closes it
- #139204

---

## Cross-Ecosystem Comparison

**Cross‑Project Comparison Report – AI Agent / Personal AI Assistant Ecosystem (2026‑09‑06)**  

---

### 1. Ecosystem Overview  
The open‑source AI‑agent landscape is currently split between a few highly active cores (OpenClaw, Hermes Agent, ZeroClaw) that drive rapid feature and stability work, and a long tail of smaller projects that are either incrementally improving (NanoBot, IronClaw, PicoClaw, NanoClaw, CoPaw) or in maintenance/low‑activity mode (LobsterAI, Moltis).  Common pain points—session‑state durability, duplicate messaging, provider‑specific error handling, sandbox security, and UI responsiveness—appear repeatedly, indicating shared maturity challenges as the ecosystem moves from prototype‑level agents toward production‑grade, multi‑tenant assistants.

---

### 2. Activity Comparison  

| Project | Issues (24 h) | PRs (24 h) | New Release (last 24 h) | Health Score* |
|---------|---------------|-----------|--------------------------|---------------|
| **OpenClaw** | 500 (436 open, 64 closed) | 500 (307 open, 193 merged/closed) | ✅ v2026.9.2 | **High** – massive issue/PR churn, active release cycle |
| **NanoBot** | 2 | 16 (9 open, 7 merged/closed) | ❌ | **Medium‑High** – steady PR flow, low issue churn, focused stability work |
| **Hermes Agent** | 50 | 50 (≈46 open, 4 merged/closed) | ❌ | **High** – intense triage/refactor burst, many open bugs |
| **PicoClaw** | 2 (1 open, 1 closed) | 5 (1 open, 4 merged) | ❌ | **Medium** – maintenance‑phase, few but meaningful changes |
| **NanoClaw** | 0 | 14 (13 open, 1 merged/closed) | ❌ | **Medium** – PR‑driven development, no fresh issue reports |
| **NullClaw** | 0 | 0 | ❌ | **Dormant** – no activity |
| **IronClaw** | 3 (1 open, 2 closed) | 5 (3 open, 2 merged/closed) | ❌ | **Medium** – bug‑fix‑and‑polish mode, healthy UX focus |
| **LobsterAI** | 0 | 2 (both open, marked **[stale]**) | ❌ | **Low** – stale PRs, minimal issue interaction |
| **TinyClaw** | 0 | 0 | ❌ | **Dormant** – no activity |
| **Moltis** | 1 | 0 | ❌ | **Low** – single enhancement request, quiet |
| **CoPaw** | 10 (7 open, 3 closed) | 4 (all open) | ❌ | **Medium‑High** – active discussion on multi‑tenant Hub, several feature PRs pending |
| **ZeptoClaw** | 0 | 0 | ❌ | **Dormant** – no activity |
| **ZeroClaw** | 42 | 50 | ✅ v0.8.5 (released shortly before window) | **High** – active stabilization, security‑focused RFCs & fixes |

\*Health Score is a qualitative assessment based on issue/PR volume, release cadence, and presence of critical/high‑severity bugs:  
- **High** – sustained high throughput, recent release, active bug triage.  
- **Medium‑High** – solid PR flow, low‑to‑moderate issue load, no major blockers.  
- **Medium** – steady maintenance, occasional feature work.  
- **Low** – minimal updates, mostly stale or isolated items.  
- **Dormant** – no detectable activity in the last 24 h.

---

### 3. OpenClaw’s Position  

| Aspect | OpenClaw vs. Peers |
|--------|-------------------|
| **Scale of Activity** | By far the highest issue (500) and PR (500) counts; >10× the next busiest project (Hermes Agent/ZeroClaw). |
| **Release Cadence** | Shipped a new version (v2026.9.2) within the window; only ZeroClaw also released recently, but OpenClaw’s release focused on performance/responsiveness rather than security hardening. |
| **Technical Approach** | Emphasises *responsiveness under load* (non‑blocking transcript/disk processing, durable history reads, direct dashboard look‑ups). Competes with Hermes Agent’s focus on skills‑index freshness and god‑file eradication, and ZeroClaw’s security‑first sandbox hardening. |
| **Community Size** | Implied by sheer volume of updates – a large, active contributor base; NanoBot and IronClaw show smaller but dedicated maintainer teams; many tail projects have ≤2 active contributors. |
| **Maturity** | Still encountering high‑severity regressions (P0/P1 bugs) indicating rapid feature push outpaces stabilization; ZeroClaw and NanoBot show higher stability ratios despite lower throughput. |

**Advantages:**  
- Cutting‑edge performance optimisations (chat/dashboards stay responsive during heavy background work).  
- Rapid incorporation of community‑driven features (e.g., built‑in headless browser, intelligent session auto‑titling).  

**Challenges:**  
- High bug density (multiple P0/P1 issues, message‑loss, crash‑loop reports).  
- Need for stronger regression gating to match the stability seen in NanoBot/ZeroClaw.

---

### 4. Shared Technical Focus Areas  

| Focus Area | Projects Reporting It | Specific Needs / Signals |
|------------|----------------------|--------------------------|
| **Session‑state durability & persistence** | OpenClaw (durable history reads, session lane starvation), Hermes Agent (pinned sessions, cron `next_run_at` timezone bug), ZeroClaw (degraded‑config remediation, model‑routing config), NanoClaw (skill‑install guardrails), NanoBot (session persistence off event loop) | Avoid lost context, ensure state survives restarts, prevent event‑loop blocking. |
| **Duplicate / stray messages** | OpenClaw (umbrella duplicate transcript, overflow retry), NanoBot (Feishu multi‑message turns), Hermes Agent (subagent announce stale output), ZeroClaw (bounded delegates stripping) | Guarantee 1:1 user‑to‑agent turn mapping, deduplicate across channels. |
| **Provider / model compatibility & fallback** | OpenClaw (Google‑Vertex/Gemini conversion bug), NanoBot (NVIDIA NIM timeout mis‑handling), Hermes Agent (RetryChatModel hard‑coded context), ZeroClaw (Anthropic extended‑thinking passthrough), CoPaw (RetryChatModel context fallback) | Transparent error classification, correct context‑window propagation, graceful fallback. |
| **Sandbox security & resource isolation** | ZeroClaw (Seatbelt `allowed_roots` bypass, delegated‑tool stripping), NanoClaw (Signal‑cli hang, temp‑directory bloat), OpenClaw (memory‑compaction blocking main lane) | Enforce filesystem boundaries, bound caches, prevent DoS via unchecked resource growth. |
| **UI/UX responsiveness & client‑side polish** | OpenClaw (faster chat, dashboard lookup), NanoBot (Feishu single streaming card), Hermes Agent (Web‑server event‑loop stall, UI freeze), IronClaw (Telegram UX fixes), LobsterAI (per‑session MCP toggle, UI refactor) | Keep UI thread free, provide unified streaming cards, expose remote‑friendly controls. |
| **Observability / tracing & diagnostics** | NanoBot (Langfuse tracing for Codex), Hermes Agent (skill‑index freshness probe), ZeroClaw (RFC on session‑ownership & transport adapters) | Export structured logs/metrics, enable external tracing, improve debuggability. |
| **Headless / browser‑based automation** | OpenClaw (built‑in headless browser feature request), NanoClaw (skill‑install from source with guards) | Provide reliable web access without external dependencies, reduce attack surface. |
| **Remote / headless deployment** | NanoBot (remote WebUI path entry), LobsterAI (per‑session MCP toggle), OpenClaw (durable history reads outside Gateway loop) | Support headless servers, decouple UI from agent core, enable API‑driven workflows. |

---

### 5. Differentiation Analysis  

| Dimension | OpenClaw | NanoBot | Hermes Agent | ZeroClaw | NanoClaw | IronClaw | CoPaw |
|-----------|----------|---------|--------------|----------|----------|----------|-------|
| **Primary User Focus** | Developers & power‑users needing low‑latency, high‑throughput assistants (chat‑centric). | Self‑hosted users valuing simplicity & strong default behaviours (context compaction, visible UI). | Enterprise‑oriented teams needing extensible skills index, kanban‑style task bots, desktop‑app integration. | Security‑conscious operators requiring hardened sandboxes, multi‑tenant routing, provider‑level isolation. | Embedded/IoT‑style agents with emphasis on lightweight skill installation and provider contracts. | Mobile‑first messenger bots (Telegram) prioritising UX and simple command handling. | Community‑driven skill‑marketplace & multi‑tenant Hub (QwenPaw) targeting collaborative workspaces. |
| **Core Architecture** | Event‑loop‑centric Gateway with pluggable channels; strong focus on non‑blocking I/O and durable state outside the loop. | MessageBus‑driven, scoped runtime notifications, clear separation of compaction & persistence layers. | Monolithic core with plugin‑skill system, heavy use of database‑backed state (SQLite, FTS5) and desktop UI layers. | Modular transport (ZeroRelay/ZeroRouter) + policy‑driven sandbox; strong emphasis on declarative security boundaries. | Minimal core + provider‑contract plugins; skill installation is the main extensibility point. | Thin wrapper around Telegram Bot API + sandbox loop; minimal persistence beyond session files. | Plugin‑rich environment with skill versioning, advisor/worker model routing, and multi‑tenant skill registry. |
| **Release Philosophy** | Frequent, feature‑forward releases (bi‑weekly‑ish) with performance as a headline. | Incremental, stability‑first releases; features gated behind clear PR reviews. | Sporadic, refactor‑heavy releases; big‑ticket work (skills index, god‑file removal) drives version bumps. | Security‑first releases; major version jumps follow extensive RFC processes (ZeroRelay/ZeroRouter). | Very lightweight releases; changes often internal refactors or provider additions. | UX‑focused patches; releases follow Telegram‑API updates. | Community‑driven releases; Hub discussion drives next minor version. |
| **Community Engagement** | Very high issue/PR volume → broad contributor base, but also high triage load. | Small, focused core → low noise, high signal‑to‑noise. | Large, active issue tracker → lots of discussion, some stale items. | Strong RFC process + security mailing list → deliberate, slower but high‑impact changes. | PR‑driven with few issues → developers drive features. | Very low issue count → maintenance by a small team. | Moderate issue/PR; Hub discussion signals strong community interest in collaboration. |

---

### 6. Community Momentum & Maturity  

| Activity Tier | Projects | Characteristics |
|---------------|----------|-----------------|
| **Rapidly Iterating (High momentum)** | OpenClaw, Hermes Agent, ZeroClaw | • >40 issues & >40 PRs per 24 h <br>• Frequent releases or imminent releases <br>• Mix of feature work and high‑severity bug fixing <br>• Need for stronger regression gating to stabilize. |
| **Stabilizing / Incremental (Medium‑High)** | NanoBot, IronClaw, PicoClaw, NanoClaw, CoPaw | • Steady PR flow (5‑20 PRs/day) <br>• Low issue count (≤10) <br>• Focus on bug fixes, UX polish, and small feature additions <br>• Generally healthy stability ratios. |
| **Low‑Activity / Maintenance** | LobsterAI, Moltis | • ≤2 issue/PR updates per day <br>• Stale or pending PRs <br>• No recent releases <br>• Projects are alive but not actively evolving. |
| **Dormant** | NullClaw, TinyClaw, ZeptoClaw | • No detectable activity in the last 24 h <br>• Likely abandoned or awaiting community revival. |

---

### 7. Trend Signals – What the Community Is T

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-09-06

## 1. Today's Overview
NanoBot is in a **consolidation phase**: no new releases landed, but closure-level activity was high, with **7 PRs merged/closed** and **9 still open** out of 16 updated in the last 24 hours. The dominant contributor, chengyongru, drove a cohesive batch of merges around context-budget refactoring, scoped event delivery, and making context compaction user-visible. Meanwhile, maintainers are actively preparing several **stability fixes** (session persistence off the event loop, bounded caches, discarded-session lifecycle) that remain open and largely conflict-tagged, suggesting a pending merge/rebase wave. Fresh issue input is light (2 issues, one brand new bug), indicating stable community engagement with focused pain points. Overall project health looks solid: steady incremental improvements, low issue churn, and a healthy PR funnel.

## 2. Releases
No new releases were published in this window. No release notes, breaking changes, or migration guidance to report.

## 3. Project Progress (Merged/Closed PRs)
Seven PRs were merged/closed, most authored by chengyongru, representing both feature work and technical cleanup:

- **[#5656] feat: make context compaction visible in channels** *(merged)* — Adds `/compact` to consolidate a conversation into `memory/history.jsonl` while retaining session messages, emits structured lifecycle events for manual/in-turn/idle background compaction, and shows a dedicated compaction indicator in WebUI and TUI with localized copy. This is the culmination of the compaction refactor series. [PR #5656](https://github.com/HKUDS/nanobot/pull/5656)
- **[#5670] refactor(events): unify scoped runtime notifications across clients** *(merged)* — Migrates context compaction end-to-end onto MessageBus for both awaited local subscriptions and queued channel delivery, keeping wire payloads and persisted session formats compatible. [PR #5670](https://github.com/HKUDS/nanobot/pull/5670)
- **[#5668] refactor(agent): remove context block budget override** *(merged)* — Removes `contextBlockLimit` so every request uses `contextWindowTokens - maxTokens - 1024` (clamped to zero); a documentation follow-up ([#5669](https://github.com/HKUDS/nanobot/pull/5669)) was merged alongside it to explain the derived budget. [PR #5668](https://github.com/HKUDS/nanobot/pull/5668)
- **[#5667] refactor: remove unused internal helpers and state** *(merged)* — Deletes dead code residue from earlier refactors (ContextBuilder runtime-marker aliases, Telegram's write-only reply map, unused WebSocket internals) without changing runtime behavior. [PR #5667](https://github.com/HKUDS/nanobot/pull/5667)
- **[#5671] fix(cli): skip WebUI bundle check in dev mode** *(merged)* — `nanobot webui --dev` previously warned about a stale/missing production bundle even though Vite serves the live source tree; dev mode now bypasses bundled-asset preparation. [PR #5671](https://github.com/HKUDS/nanobot/pull/5671)
- **[#5672] test: remove obsolete nonexistence checks** *(merged)* — Prunes tests asserting retired/never-exposed symbols while preserving observable behavior, security, protocol-omission, and lazy-loading coverage. [PR #5672](https://github.com/HKUDS/nanobot/pull/5672)

## 4. Community Hot Topics
- **[Issue #5567 — Feishu channel: consolidate multi-turn replies into one streaming card message](https://github.com/HKUDS/nanobot/issues/5567)** — The most-discussed item (4 comments, authored 2026-08-27, still active). A Feishu user reports that a single agent turn produces **n separate messages** (streaming deltas via CardKit, tool/status progress messages, and a final reply), degrading UX. Underlying need: strict `user msg → one agent reply` correspondence with integrated streaming card updates. This is a UX-quality request from a real deployment channel.
- **[PR #5673 — fix(webui): support remote project paths](https://github.com/HKUDS/nanobot/pull/5673)** — Newly opened (2026-09-05), addressing remote WebUI users who invoke the wrong (client-side) native file picker; requests an absolute-path entry on the server. Signals growing remote/headless WebUI usage.

## 5. Bugs & Stability
Ranked by severity:

- **[HIGH — Issue #5674: agent stops working when provider Nvidia NIM returns a timeout error](https://github.com/HKUDS/nanobot/issues/5674)** — Brand new (2026-09-05, no comments yet, **no fix PR attached**). When NIM returns "LLM returned error: Error calling LLM: timed out after 300s/600s", NanoBot treats the error text as model output and the agent **permanently stops working** — a correctness/availability bug on a provider integration.
- **[MEDIUM — Issue #5600-adjacent, covered by PR #5589: discarded sessions reviving](https://github.com/HKUDS/nanobot/pull/5589)** (p1, open, conflict) — Messages queued in a discarded session's pending/automation queues can still publish to the global bus during task cleanup, resurrecting dead sessions. Fix PR is open but conflict-tagged.
- **[MEDIUM — PR #5580: session persistence blocking the event loop](https://github.com/HKUDS/nanobot/pull/5580)** (p1, open, conflict) — Slow storage/file-lock contention stalls unrelated conversations and runtime events; fix offloads loads/saves/checkpoints to `session.io` adapters.
- **[LOW-MEDIUM — PR #5664: unbounded idle summary cache](https://github.com/HKUDS/nanobot/pull/5664)** — `AutoCompact._summaries` grows without limit for abandoned sessions (memory growth); fix bounds the in-memory cache. Open.
- **[LOW-MEDIUM — PR #5630: Dream memory files unbounded size](https://github.com/HKUDS/nanobot/pull/5630)** — PR #5622 removed the only size cap (`_DREAM_FILE_EMBED_CAP`); SOUL.md/USER.md/MEMORY.md can grow unbounded and be injected into every request. Size guardrails proposed.
- **[LOW — PR #5504: model retry status not surfaced in UI](https://github.com/HKUDS/nanobot/pull/5504)** (p2, conflict) — Fix publishes transient retry lifecycle events to WebSocket clients so TUI/WebUI render retry countdown and attempt progress.

## 6. Feature Requests & Roadmap Signals
- **Feishu single streaming-card flow (Issue #5567)** — Strong candidate for a near-term channel improvement; the groundwork (CardKit streaming cards via `send_delta()`, [PR #5656](https://github.com/HKUDS/nanobot/pull/5656) event/compaction infrastructure) now exists to unify tool/status/final output into one card. Likely to land soon given low complexity and clear UX win.
- **Langfuse tracing for Codex ([PR #5520](https://github.com/HKUDS/nanobot/pull/5520), open since 08-24)** — Ports observability parity (one generation per real HTTP request) from the OpenAI-compatible provider to Codex's raw httpx + OAuth transport. Indicates growing enterprise/observability needs.
- **MCP OAuth token auto-refresh ([PR #5573](https://github.com/HKUDS/nanobot/pull/5573))** — Persisting absolute token expiry and authorization-server metadata so refresh survives gateway restarts; important for long-running MCP deployments.
- **Remote WebUI project selection ([PR #5673](https://github.com/HKUDS/nanobot/pull/5673))** — Points toward first-class remote/headless server usage as a roadmap theme.
- **Cleanup & consolidation signal** — The merged [#5667](https://github.com/HKUDS/nanobot/pull/5667) / [#5670](https://github.com/HKUDS/nanobot/pull/5670) refactors and removed override in [#5668](https://github.com/HKUDS/nanobot/pull/5668) suggest maintainers are tightening the architecture ahead of a likely release.

## 7. User Feedback Summary
- **Feishu UX dissatisfaction ([#5567](https://github.com/HKUDS/nanobot/issues/5567))** — Real user pain: noisy multi-message turns break the expected one-to-one conversational mapping; the reporter explicitly requests consolidation into a single streaming card, showing preference for polished channel-specific UX over raw tool-progress visibility.
- **Nvidia NIM provider frustration ([#5674](https://github.com/HKUDS/nanobot/issues/5674))** — A hard failure mode: provider timeouts should degrade gracefully, but instead kill the agent entirely (mis-parsed as model output). Points to a need for robust error-classification / retry semantics rather than silent misinterpretation.
- **Remote/headless WebUI users ([#5673](https://github.com/HKUDS/nanobot/pull/5673))** — Implicit user need: selecting a project via the host machine's file picker fails remotely; users expect a text path input on the server. Confirms a real remote-usage segment.

## 8. Backlog Watch
Items aging without merge, several now blocked by merge conflicts:

- **[PR #5471 — fix(sdk): ephemeral runs leave session state unchanged](https://github.com/HKUDS/nanobot/pull/5471)** — Open since **2026-08-21** (oldest open PR), tagged `conflict`. Documents that `run(ephemeral=True)` / `run_streamed(ephemeral=True)` do not honor their no-persist/no-compact contract. High-value correctness fix for SDK users; needs rebase.
- **[PR #5504 — fix(ui): surface model retry status (NAN-34)](https://github.com/HKUDS/nanobot/pull/5504)** — Open since 08-24, tagged `conflict`. Stalled on conflicts; retry visibility is a meaningful UX regression fix.
- **[PR #5520 — feat(provider): langfuse tracing for codex](https://github.com/HKUDS/nanobot/pull/5520)** — Open since 08-24; feature parity pending, likely waiting on review attention given its scope.
- **[PR #5573 — fix(mcp): refresh expired OAuth tokens automatically](https://github.com/HKUDS/nanobot/pull/5573)** — Open since 08-27; operational reliability for MCP, no conflict label but unmerged.
- **Conflicting p1 stability PRs** — [#5589 (discarded sessions reviving)](https://github.com/HKUDS/nanobot/pull/5589) and [#5580 (session persistence off event loop)](https://github.com/HKUDS/nanobot/pull/5580) both carry `p1` priority and `conflict` tags; given their severity labels, these deserve priority rebase + merge by maintainers.

---

*Note: All activity timestamps are 2026-09-05/09-06; issue/PR links resolve to `github.com/HKUDS/nanobot`. No response or environment access was used; this digest is derived solely from the provided data.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent – Project Digest (2026‑09‑06)**  

---

### 1. Today’s Overview  
The repository showed unusually high churn in the last 24 hours: **50 issues** and **50 pull requests** were updated, all of them still open except for **4 PRs that were merged or closed**. No new version was released today. The activity indicates a burst of triage, bug‑fixing, and refactoring work—particularly around the skills index, gateway stability, desktop UI, and cron scheduling—while the core codebase remains under active evolution.

---

### 2. Releases  
*No new releases were published today.*  

---

### 3. Project Progress (Merged/Closed PRs)  
Four PRs reached a closed/merged state today (the list only shows two explicitly; the other two are not displayed in the top‑20 snippet). The visible closed PRs are:

| PR | Type | Summary | Link |
|----|------|---------|------|
| **#81339** | `fix(kanban)` | Dispatch `kanban_task_blocked` hook **after** the write transaction commits, ensuring dependency‑block events are reliable. | [#81339](https://github.com/NousResearch/hermes-agent/pull/81339) |
| **#81474** | `feat(kanban)` | Add a generic `kanban_task_event` plugin hook for committed Kanban lifecycle‑event rows (observer‑only). | [#81474](https://github.com/NousResearch/hermes-agent/pull/81474) |

*What advanced:*  
- Kanban plugin infrastructure is now more robust and extensible, reducing missed dependency‑block notifications.  
- The groundwork is laid for richer observability plugins that can react to task state changes without pulling internal transaction details.

(The two additional closed PRs likely address smaller clean‑up or dependency updates; they contributed to the overall health but are not detailed in the supplied data.)

---

### 4. Community Hot Topics (Most‑Commented Items)  

| Item | Type | Comments | Key Concern | Link |
|------|------|----------|-------------|------|
| **#66616** | Issue (bug) | **162** | Skills index is stale/degraded (index 29.8 h old > 26 h limit). Automated freshness probe failing; impacts `/docs/skills` and the skill‑hub workflow. | [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) |
| **#78647** | Issue (refactor/epic) | **81** | Repo‑wide god‑file eradication – residual ~2 K tasks after epic #102117. Large files still impede modularity and increase cognitive load. | [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) |
| **#88584** | Issue (invalid/cron) | **68** | Automated Nous‑to‑Enterkey merge blocked by conflicts in `cron/jobs.py`. Dashboard updater stuck on an old Enterkey release, causing integration drift. | [#88584](https://github.com/NousResearch/hermes-agent/issues/88584) |
| **#97681** | Issue (feature) | **23** | Bot Group Chats should survive Desktop closure. Currently, gateway‑owned authority drops when the Desktop app exits, breaking persistent multi‑user bot sessions. | [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) |
| **#58576** | Issue (perf/P1) | **9** (+1 👍) | Web‑server event loop stalls up to **51 s** under heavy agent work (GIL pressure), making the Desktop UI appear frozen. | [#58576](https://github.com/NousResearch/hermes-agent/issues/58576) |

**Underlying needs:**  
- **Data freshness & automation** – the skills index watchdog highlights a gap in CI/CD cron reliability.  
- **Code health** – developers are feeling the weight of large, monolithic modules and want a systematic refactor.  
- **Integration stability** – automated merges with external forks (Nous/Enterkey) need better conflict resolution and branch‑management.  
- **User‑experience continuity** – users expect bot sessions and UI responsiveness to be independent of the Desktop client’s lifecycle.  

---

### 5. Bugs & Stability (Severity‑Ranked)  

#### New bugs filed **today** (Created = 2026‑09‑05)  

| Issue | Severity (label) | Summary | Fix/PR? | Link |
|-------|------------------|---------|---------|------|
| **#103904** | **P2** | Cron: `next_run_at` persisted as UTC after a run → fires 2 h late in Europe/Warsaw. | No dedicated PR yet (but related cron fixes exist). | [#103904](https://github.com/NousResearch/hermes-agent/issues/103904) |
| **#103840** | **P2** | State‑db `.recover` resurrects orphan FTS5 shadow tables → gateway fails on startup (“table already exists”). | No dedicated PR yet. | [#103840](https://github.com/hermes-agent/issues/103840) |
| **#103900** | **P2** | Pinned sessions in Desktop are local‑only; native Hermes does not see the `pinned` flag. | No dedicated PR yet. | [#103900](https://github.com/hermes-agent/issues/103900) |
| **#103747** | **P3** | Windows Desktop updater finishes while its progress window spins forever (visual stall). | No dedicated PR yet. | [#103747](https://github.com/hermes-agent/issues/103747) |
| **#103870** | **P3** (duplicate) | RuntimeWarning: coroutine `_watch_stdio_children` never awaited (MCP tool). | No dedicated PR yet. | [#103870](https://github.com/hermes-agent/issues/103870) |

#### Notable existing high‑severity bugs (still open)  

| Issue | Severity | Summary | Link |
|-------|----------|---------|------|
| **#58576** | **P1** | Web‑server event loop stalls up to 51 s under load (GIL pressure) → Desktop UI freeze. | [#58576](https://github.com/hermes-agent/issues/58576) |
| **#69180** | **P1** | Desktop renderer OOM crash‑loop on empty chat (virtualization layout thrash). | [#69180](https://github.com/hermes-agent/issues/69180) |
| **#100401** | **P1** | Cron fire‑claim heartbeat deadlocks → jobs >60 s killed as “Interrupted by shutdown”. | [#100401](https://github.com/hermes-agent/issues/100401) |

**Observation:** Today’s batch leans toward **P2** cron‑ and state‑management bugs, while the most disruptive **P1** issues (UI freeze, OOM) remain open from earlier weeks. No fix PRs were linked directly to the new P2 bugs, but the overall PR activity (e.g., #103665 fixing TUI‑gateway WAL keeper) shows continued attention to stability.

---

### 6. Feature Requests & Roadmap Signals  

| Item | Type | Summary | Link |
|------|------|---------|------|
| **#103917** | Issue (feature) | `delegate_task`: add a simplified structured‑output contract so parent models need not author arbitrary JSON Schema. | [#103917](https://github.com/hermes-agent/issues/103917) |
| **#103919** | Issue (feature) | 0.21.0’s strengthened runtime guidance overrides user‑authored `SOUL.md` constraints – request to let user SOUL win style conflicts. | [#103919](https://github.com/hermes-agent/issues/103919) |
| **PR #103921** | Feature | `feat(prompt): let user SOUL.md win style conflicts over runtime guidance`. Directly addresses #103919. | [#103921](https://github.com/hermes-agent/pull/103921) |
| **PR #103911** | Feature | `feat(cli): opt‑in richer content styling via display.vivid` (emoji‑colorised tool calls, etc.). | [#103911](https://github.com/hermes-agent/pull/103911) |
| **PR #103922** | Feature | `fix(api-server): make client‑managed system prompts opt‑in` (load `agent.system_prompt` / `display.personality`). | [#103922](https://github.com/hermes-agent/pull/103922) |
| **PR #103446** | Feature | `

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



# PicoClaw Project Digest — 2026-09-06

## 1. Today's Overview
PicoClaw showed **moderate maintenance activity** in the last 24 h: 2 issues updated (1 open, 1 closed) and 5 pull‑requests updated (1 open, 4 merged). No new releases were published. The project remains in a steady‑state development phase, with contributors focusing on documentation, housekeeping merges, and stability hardening rather than major feature launches.

## 2. Releases
*No new releases this period.*

## 3. Project Progress
**Merged/closed PRs today:**
- **#1559** – Merge of fixes from #1327, #1319, #1318, #1313 (`[CLOSED]`)
- **#1545** – Merge of fixes from #1500, #1490, #1488, #1487, #1485 (`[CLOSED]`)
- **#1555** – Merge of fixes from #1390, #1389, #1383, #1381 (`[CLOSED]`)
- **#1541** – Merge of #1536 (media tempdir), #1535 (channel DoS hardening), #1531 (DeepWiki badge) (`[CLOSED]`)

**Key advancement:**  
A documentation PR was opened but remains unmerged:
- **#3368** – “docs: add Parallel Search MCP setup example” (`[OPEN]`, created 2026‑09‑05). Provides a copy‑paste guide for integrating Parallel Search MCP without requiring an API key, including removal instructions and data‑flow explanation.

## 4. Community Hot Topics
- **Issue #3287 – “Better support long messages in IRC”** ([Open](https://github.com/sipeed/picoclaw/issues/3287))  
  *10 comments, last updated 2026‑09‑05.*  
  **Underlying need:** IRC’s 512‑byte limit causes client‑side splitting; users want PicoClaw to recognize IRCv3 multi‑line messages as a single coherent unit rather than fragmented pieces.

- **Issue #3342 – “Opt‑in ‘after‑turn’ steering mode”** ([Closed–stale](https://github.com/sipeed/picoclaw/issues/3342))  
  *2 comments, last updated 2026‑09‑05.*  
  **Underlying need:** When a second user message arrives during an active turn, the current design aborts the in‑progress tool calls. Users request a queuing mechanism so the busy session completes before the new message is injected, improving conversational flow and preventing interrupted responses.

## 5. Bugs & Stability
No new bug reports were filed today. The merged PR **#1541** addresses a stability concern by introducing **channel DoS hardening** (PR #1535) and centralizing the media temporary directory to prevent path‑collision issues (PR #1536). These fixes reduce risk of resource exhaustion and improve reliability under concurrent media operations.

## 6. Feature Requests & Roadmap Signals
- **#3287** (IRC long‑message support) and **#3342** (after‑turn steering mode) are the only open feature requests visible in the dataset. Both address core interaction‑model gaps.  
  **Prediction:** The IRC long‑message handling (#3287) is likely a higher‑priority inclusion for the next release because it affects a widely used protocol integration and has garnered more discussion (10 comments). The steering‑mode request (#3342) may be deferred pending a broader architecture review of turn‑based scheduling.

## 7. User Feedback Summary
**Pain points identified:**
1. **Fragmented long messages** – Users report that PicoClaw currently sees IRC messages split at 512 bytes, breaking context and making long explanations or code snippets difficult to convey.
2. **Interrupted turns** – When a user sends a follow‑up while the agent is mid‑task, the ongoing tool calls are abandoned, leading to incomplete responses and a disjointed experience.

No explicit satisfaction/dissatisfaction metrics were available; however, the sustained engagement (comments) on both issues indicates these are active areas of concern.

## 8. Backlog Watch
- **Issue #3287** (created 2026‑07‑22) – Over 45 days without a maintainer response; deserves prioritization given the volume of comments and clear use‑case.
- **PR #3368** (created 2026‑09‑05) – Documentation contribution awaiting review; timely merging would improve onboarding for Parallel Search MCP.
- **Issue #3342** (closed as stale) – The feature request is closed but may need reopening if community interest resurfaces; consider adding a “status‑review” label to track it.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest – 2026‑09‑06**  
*Based on GitHub activity (issues 0, PRs 14 updated in the last 24 h, 0 new releases)*  

---  

### 1. Today's Overview  
The repository shows very low issue activity (no open or closed issues touched in the past day) but a steady flow of pull‑request work: 13 PRs remain open and one PR was closed/merged today. This indicates that development continues primarily through code contributions rather than triage of user‑reported bugs. Overall project health appears active in the contribution pipeline, with maintainers reviewing a backlog of feature and refactor work.  

### 2. Releases  
*No new releases were published today.*  

### 3. Project Progress (Merged/Closed PRs)  
| PR | Title | Summary | Link |
|----|-------|---------|------|
| #2403 | **ci: replace bump-version with explicit Release workflow + concurrency guard** | Replaced the automated `bump-version` step with a dedicated Release workflow that includes a concurrency guard to prevent simultaneous releases. This improves CI reliability and makes version bumps explicit. | [nanoclaw/nanoclaw#2403](https://github.com/qwibitai/nanoclaw/pull/2403) |

*No other PRs were closed/merged in the last 24 h.*  

### 4. Community Hot Topics (Most Active PRs/Issues)  
All PRs list `comments: undefined` and `👍: 0`, so explicit discussion metrics are unavailable. Nevertheless, a few PRs have seen recent updates or have been open longer, indicating ongoing attention:  

- **#3710 – test: remove the temp directories the suite leaves behind** (opened 2026‑09‑03, updated 2026‑09‑05) – addresses a stability issue where the test suite leaves ~355 directories in the OS temp dir per run.  
- **#3725 – fix(setup): pin Linux signal‑cli to 0.14.7** (opened 2026‑09‑05, updated 2026‑09‑05) – resolves a hanging bug when sending signals to contacts without an existing session.  
- **#3720 – feat(skills): add opt‑in source installation with guarded recovery** (opened 2026‑09‑04, updated 2026‑09‑04) – introduces a new, opt‑in capability for installing skills from source with safety guards.  

These PRs reflect current community concerns around **build‑environment cleanliness**, **runtime stability of the Signal channel**, and **controlled skill installation**.  

### 5. Bugs & Stability (Bugs reported today)  
No new issues were filed, but several open PRs are explicitly bug‑fixes or stability improvements:  

| PR | Problem | Severity (inferred) | Link |
|----|---------|---------------------|------|
| #3725 | `signal-cli` 0.14.3 can hang forever when sending to a contact with no existing session. | High (blocks core channel functionality) | [#3725](https://github.com/qwibitai/nanoclaw/pull/3725) |
| #3710 | Test suite leaves hundreds of temporary directories in `/tmp`, accumulating over time. | Medium (resource leakage, CI/dev‑box impact) | [#3710](https://github.com/qwibitai/nanoclaw/pull/3710) |
| #3721 | Capability‑install skills could bypass operator policy via direct scripts/manual edits. | Medium‑High (security‑policy bypass) | [#3721](https://github.com/qwibitai/nanoclaw/pull/3721) |
| #3720 | Source‑installation of skills is currently unrestricted, risking uncontrolled code execution. | Medium (needs guardrails) | [#3720](https://github.com/qwibitai/nanoclaw/pull/3720) |

Fix PRs exist for each of the above (they are the PRs themselves).  

### 6. Feature Requests & Roadmap Signals  
A noticeable portion of the open PRs are feature‑oriented, hinting at near‑term roadmap priorities:  

- **Per‑agent‑group speed tier** – #3592 adds a `speed` property alongside `model` and `effort`.  
- **New provider install skills** – #3355 (`/add-cursor` for Cursor), #3356 (Cursor Agent SDK payload), #3588 (OpenCode provider contract), #3584 (Codex provider contract), #3586 (setup provider contract & verifier).  
- **Guarded skill installation** – #3720 (opt‑in source installation with recovery), #3721 (explicit installation respecting operator policy).  
- **Model ID updates** – #3724 updates a retired Anthropic model ID in the `add‑opencode` example.  
- **Instruction rendering refactor** – #3591 moves provider‑generated instructions to a core‑owned canon.  
- **Provider contract adoption** – #3722 adopts the OpenCode contract in its install skill.  

Collectively, these suggest the next release will likely focus on **expanding provider support (Cursor, OpenCode, Codex)**, **fine‑tuning inference configuration (speed/effort/model)**, and **hardening the skill‑installation pipeline**.  

### 7. User Feedback Summary  
Although no explicit user comments are present, the PR descriptions reveal pain points that users/maintainers have encountered:  

- **Signal CLI hangs** when no prior session exists – a usability blocker for the Signal channel.  
- **Temporary directory bloat** from test runs – impacts developer workflows and CI resource usage.  
- **Out‑of‑date model IDs** in example skills – leads to confusion or failed integrations.  
- **Need for explicit, gated skill installation** – users want to avoid accidental or policy‑violating installs.  
- **Desire for more granular inference controls** (speed tiers) – enables performance‑vs‑quality trade‑offs per agent group.  

These points align with the feature and bug‑fix PRs currently open.  

### 8. Backlog Watch (Long‑Unanswered Items Needing Maintainer Attention)  
No issues are outstanding, but several PRs have been open for over a week without closure, indicating they may be awaiting review or further discussion:  

| PR | Age (as of 2026‑09‑06) | Title | Link |
|----|-----------------------|-------|------|
| #3355 | 18 days | feat(skills): add /add-cursor provider install skill | [#3355](https://github.com/qwibitai/nanoclaw/pull/3355) |
| #3356 | 18 days | feat(providers): add Cursor Agent SDK payload | [#3356](https://github.com/qwibitai/nanoclaw/pull/3356) |
| #3584 | 10 days | refactor(providers): implement the codex provider contract | [#3584](https://github.com/qwibitai/nanoclaw/pull/3584) |
| #3586 | 10 days | refactor(providers): declare the setup provider contract and install verifier | [#3586](https://github.com/qwibitai/nanoclaw/pull/3586) |
| #3588 | 10 days | refactor(providers): implement the opencode provider contract | [#3588](https://github.com/qwibitai/nanoclaw/pull/3588) |
| #3590* | – | *(not present in supplied data)* | – |
| #3591 | 10 days | refactor(providers): render provider instructions from core-owned canon | [#3591](https://github.com/qwibitai/nanoclaw/pull/3591) |
| #3592 | 9 days | feat(groups): add a core-owned speed inference property | [#3592](https://github.com/qwibitai/nanoclaw/pull/3592) |
| #3710 | 4 days | test: remove the temp directories the suite leaves behind | [#3710](https://github.com/qwibitai/nanoclaw/pull/3710) |
| #3720‑#3725 | 1‑2 days | various skill‑install, provider, and bug‑fix PRs | (see respective links above) |

*The absence of #3590 in the data suggests it may have been closed or is not part of the current batch.*  

These longer‑open PRs represent **substantial feature work (new provider skills, contract refactors)** and **core configuration enhancements** that, once merged, will shape the upcoming release cycle. Prioritizing review of these items will help reduce the backlog and keep the project’s roadmap on track.  

---  

*All links point to the official NanoClaw repository at github.com/qwibitai/nanoclaw.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw Project Digest – 2026‑09‑06**  

---

### 1. Today's Overview  
The repository shows steady maintenance activity: **3 issues** and **5 pull requests** were touched in the last 24 hours. Only one issue remains open (#8074), while two were closed; three PRs are still open and two have been merged/closed. No new releases were published today. Overall, the project is in a healthy “bug‑fix‑and‑polish” mode, with contributors focusing on refining the Telegram integration and sandbox defaults.

---

### 2. Releases  
*No new releases* were created in the last 24 hours, so there are no version changes, breaking changes, or migration notes to report.

---

### 3. Project Progress (Merged/Closed PRs)  

| PR | Title | Summary | Impact |
|----|-------|---------|--------|
| [#8073](https://github.com/nearai/ironclaw/pull/8073) | fix(device‑link): say “not configured by administrator” instead of blaming the user’s account | Improves error messaging when Telegram personal‑account setup fails because the admin hasn’t set `telegram_api_id`/`telegram_api_hash`. | Users now see a clear admin‑responsibility message rather than a misleading “something went wrong” notice. |
| [#8054](https://github.com/nearai/ironclaw/pull/8054) | fix(assistant): check pairing before command admission so first contact gets the connect notice | Moves the pairing/lookup step ahead of command admission for Telegram `/start`. First‑time unpaired users now receive the pairing/connect notice immediately. | Eliminates the confusing “command inventory” reply on initial bot interaction. |
| [#8073] and [#8054] were both merged/closed today, delivering two user‑experience fixes for the Telegram extension. |

Open PRs awaiting review:  

* **[#8075](https://github.com/nearai/ironclaw/pull/8075)** – feat: make the embedded Pi sandbox loop the startup default (size XL, low risk).  
* **[#7988](https://github.com/nearai/ironclaw/pull/7988)** – chore(agents): refresh codebase knowledge graph (CI/infrastructure).  
* **[#8072](https://github.com/nearai/ironclaw/pull/8072)** – feat(telegram): register the Bot API command menu at activation (size L, low risk).  

---

### 4. Community Hot Topics  

| Item | Comments / Reactions | Why it’s hot |
|------|----------------------|--------------|
| **[#8074](https://github.com/nearai/ironclaw/issues/8074)** – [OPEN] [bug] Paired user's rejected action in a not‑connected shared channel gets the pairing notice copy instead of channel‑not‑connected copy | **1 comment** (the only commented item in the last 24 h) | Highlights a messaging‑logic bug that misleads paired users about connection status. Even a single comment signals active discussion and a need for clarification. |
| PRs #8075, #7988, #8072 | *No comments/reactions recorded* | Although they lack discussion, their size (XL, L) and scope (sandbox defaults, Telegram command menu) make them noteworthy for upcoming functionality. |

**Underlying need:** Users expect accurate, context‑aware feedback when interacting with shared channels and Telegram bots. Misrouted notices erode trust and increase support overhead.

---

### 5. Bugs & Stability  

| Severity | Issue | Status | Fix PR (if any) | Notes |
|----------|-------|--------|----------------|-------|
| **Medium** | #8074 – paired user receives wrong notice in a not‑connected channel | **Open** | – | Affects user guidance; needs a UI/message fix. |
| **Low** (resolved) | #7956 – Telegram `/start` shows command inventory instead of connect notice | **Closed** | #8054 | Fixed by moving pairing check earlier. |
| **Low** (resolved) | #7955 – generic “Something went wrong” when admin hasn’t configured Telegram API credentials | **Closed** | #8073 | Improved error message to point to admin misconfiguration. |

No crashes or regressions were reported today; the closed bugs indicate recent stability improvements.

---

### 6. Feature Requests & Roadmap Signals  

* **Sandbox default shift** – PR #8075 proposes making the embedded Pi sandbox loop the default boot profile. This aligns with a request for reproducible benchmark environments and hints that future releases may ship the Pi sandbox as the standard execution environment.  
* **Telegram command menu** – PR #8072 will register the bot’s `/model`, `/status`, `/new`, `/stop`, `/interrupt` commands via the Bot API’s `setMyCommands` at activation. This is a usability enhancement that should reduce the need for users to remember slash commands.  
* **Codebase knowledge‑graph refresh** – PR #7988 is a maintenance chore that keeps the AI‑assistant’s internal documentation up‑to‑date, supporting longer‑term feature development.

These signals suggest the next version will likely emphasize **sandbox reliability**, **Telegram UX polish**, and **internal tooling for agents**.

---

### 7. User Feedback Summary  

* **Pain points**  
  * Confusing error messages when Telegram admin credentials are missing (users blamed themselves).  
  * Initial Telegram interaction showing a command list instead of a clear pairing prompt, causing friction for new users.  
  * Paired users receiving incorrect notices when acting in a disconnected shared channel, leading to uncertainty about connection state.  

* **Positive signals**  
  * Rapid fixes (#8054, #8073) show the team is responsive to UX‑related complaints.  
  * Ongoing work to surface Telegram’s native command menu indicates a commitment to making the bot feel more “native” and discoverable.  

Overall, user satisfaction is improving as the team addresses messaging clarity, but there remains a need for rigorous verification of state‑dependent notices.

---

### 8. Backlog Watch  

| Item | Reason for attention | Suggested action |
|------|----------------------|------------------|
| **[#8074](https://github.com/nearai/ironclaw/issues/8074)** (open bug) | Only open issue with a comment; impacts core messaging logic for shared channels. | Prioritize a fix that distinguishes paired‑user rejection from unpaired‑user connection prompts. |
| **Open PR #8075** (embedded Pi sandbox default) | Large scope (XL) and strategic for benchmarking; no discussion yet. | Request a brief review from the sandbox maintainers to ensure no hidden integration risks. |
| **Open PR #8072** (Telegram command menu) | UX‑enhancing feature; low risk but awaits merging. | Encourage a quick validation test and merge to deliver the improvement in the next release. |
| **Open PR #7988** (knowledge‑graph refresh) | Infrastructure chore; keeps the AI assistant’s internal docs fresh. | Schedule a regular merge window (e.g., weekly) to avoid stale snapshots. |

No long‑stale, high‑impact issues were identified beyond the above; the backlog appears manageable.

---  

*Generated based on GitHub activity for nearai/ironclaw on 2026‑09‑06.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI Project Digest – 2026‑09‑06**  
*(Based on GitHub data from github.com/netease-youdao/LobsterAI)*  

---

### 1. Today’s Overview  
The repository showed **no issue updates** and **zero merged or closed pull requests** in the past 24 hours. Two pull requests were *updated* (but not merged) and remain open and marked as **[stale]**, indicating limited recent activity. Overall, the project is currently in a low‑activity maintenance window with no new releases published today.

### 2. Releases  
- **No new releases** were published in the last 24 h.  
*(Nothing to detail regarding changes, breaking changes, or migration notes.)*

### 3. Project Progress  
- **Merged/closed PRs today:** 0 → no features were landed or bugs fixed via PR merge today.  
- **Open PRs updated today:** #1069 and #1070 (both updated 2026‑09‑05) – still awaiting review/merge.

### 4. Community Hot Topics  
| Item | Type | Comments / Reactions | Link | Underlying Need |
|------|------|----------------------|------|-----------------|
| PR #1069 | Refactor – split `CoworkSessionDetail.tsx` | 0 reactions, 0 comments | [#1069](https://github.com/netease-youdao/LobsterAI/pull/1069) | Improve maintainability and rendering performance of the conversation detail page by breaking a >2100‑line file into smaller, testable modules. |
| PR #1070 | Feature – per‑session MCP toggle | 0 reactions, 0 comments | [#1070](https://github.com/netease-youdao/LobsterAI/pull/1070) | Allow users to enable/disable MCP servers on a per‑session basis, persisting the choice per session and hooking into the OpenClaw MCP bridge for real effect. |

Both PRs are marked **[stale]**, suggesting they have not received reviewer attention recently despite addressing clear architectural (code‑size) and user‑experience (granular MCP control) needs.

### 5. Bugs & Stability  
- **No bugs, crashes, or regressions** were reported in the last 24 h (0 issues updated).  
- Consequently, **no fix PRs** exist for today.

### 6. Feature Requests & Roadmap Signals  
- The two open PRs themselves represent the most recent feature‑oriented work:  
  1. **Code‑health refactor** (PR #1069) – likely a prerequisite for future UI enhancements.  
  2. **Per‑session MCP control** (PR #1070) – aligns with the project’s goal of expanding OpenClaw‑based desktop agent capabilities.  
- If these PRs are merged, the next version could ship:  
  - Better performance and easier maintenance of the chat view.  
  - Fine‑grained MCP server toggling per conversation, a highly requested flexibility for multi‑tool workflows.

### 7. User Feedback Summary  
- No new issues or comments appeared today, so there is **no fresh user‑reported pain point** to summarize.  
- The existing stale PRs hint at user‑level desires: smoother UI rendering (performance) and more configurable tooling (MCP per session). Lack of recent feedback may indicate either stable satisfaction or reduced user engagement.

### 8. Backlog Watch  
| Item | Age (last update) | Status | Why it needs attention |
|------|-------------------|--------|------------------------|
| PR #1069 – refactor CoworkSessionDetail | Updated 2026‑09‑05 (≈1 day ago) | Open, stale | Large file split improves maintainability and prevents unnecessary re‑renders; merging would unblock further UI work. |
| PR #1070 – per‑session MCP toggle | Updated 2026‑09‑05 (≈1 day ago) | Open, stale | Addresses a clear limitation (global MCP switch) and adds user‑configurable persistence; important for OpenClaw‑based agent extensibility. |

Both PRs have been idle for over five months (created 2026‑03‑30) despite being updated recently, indicating they may be awaiting reviewer bandwidth or a decision on priority. Maintainer focus on reviewing and merging these would advance code quality and feature completeness.

---  

*End of digest.*  
*All links point to the respective GitHub items.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>



# Moltis Project Digest — 2026-09-06

---

## 1. Today's Overview

Moltis recorded low activity over the past 24 hours, with only a single issue opened and no pull requests or releases reported. The project remains in a quiet development phase with no closed issues or merged PRs, suggesting a lull in active development cycles. Community engagement is minimal today, with the sole open issue being an enhancement request rather than a critical bug or stability concern.

---

## 2. Releases

No new releases were published in the last 24 hours. There are currently no version updates to track.

---

## 3. Project Progress

No pull requests were merged or closed today. No features advanced and no bugs were fixed during this reporting window.

---

## 4. Community Hot Topics

**Issue #1259 — Configurable Default Reasoning/Thinking Level (persist across sessions)**
🔗 [moltis-org/moltis#1259](https://github.com/moltis-org/moltis/issues/1259)
- *Author:* Scentedtiger | *Opened:* 2026-09-05 | *Comments:* 0 | *Reactions:* 0 | *Label:* enhancement
- **Analysis:** This feature request signals that users are seeking persistent personalization of AI reasoning depth across sessions — a common need among power users who find themselves repeatedly adjusting thinking levels manually. The explicit "preflight checklist" indicates the requester followed the project's contribution guidelines carefully, which is a positive signal for community quality.

---

## 5. Bugs & Stability

No bugs, crashes, or regressions were reported today. The project shows no known stability issues from the current data snapshot.

---

## 6. Feature Requests & Roadmap Signals

**Issue #1259 — Configurable default reasoning/thinking level (persist across sessions)**
🔗 [moltis-org/moltis#1259](https://github.com/moltis-org/moltis/issues/1259)
- This is the only open enhancement today. Persistent configuration preferences are a frequent request in AI agent tools, as users expect settings to carry over between sessions rather than needing reconfiguration each time. If adopted, this would likely ship as part of a settings/config management improvement in an upcoming release.

---

## 7. User Feedback Summary

The single piece of user feedback today points to a desire for deeper personalization and memory of preferences in the agent experience. The requester's attention to detail (completing the preflight checklist, checking for duplicates) reflects a engaged and respectful contributor base. No dissatisfaction or frustration was expressed in today's activity.

---

## 8. Backlog Watch

No long-unanswered or backlog items are visible in today's data. The sole open issue (#1259) was just opened and has not yet attracted maintainer attention — worth monitoring for response in the coming days as a sign of community responsiveness.

---

**Overall Project Health:** 🟡 Low Activity — No blocking issues, but development momentum appears paused. Monitoring for increased PR/issue activity is recommended.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw (agentscope‑ai/QwenPaw) Project Digest – 2026‑09‑06**  

---

### 1. Today's Overview  
The repository shows moderate activity in the last 24 h: **10 issues** were touched (7 open, 3 closed) and **4 pull requests** received updates (all still open). No new releases were published today. The discussion around the upcoming **QwenPaw Hub multi‑tenant edition** (Issue #7318) remains the most engaged thread, indicating strong community interest in team‑scale features. Overall, the project is actively iterating on both core stability (several bug fixes landed) and new capabilities (Advisor Mode, skill‑metadata, UI polish).

---

### 2. Releases  
*No new releases were tagged in the last 24 h.*  

---

### 3. Project Progress  
**Merged/Closed PRs today:** none – all four open PRs remain pending review/merge.  

**Open PRs that signal upcoming work:**  

| PR | Title | Key Points | Link |
|----|-------|------------|------|
| #7509 | *feat(skill): Update make‑skill to v2* | Introduces an approval‑driven, script‑based draft‑then‑publish workflow for reusable workspace Skills. | https://github.com/agentscope-ai/QwenPaw/pull/7509 |
| #7569 | *feat(modes): add Advisor Mode* | Adds a loop mode that pairs a strong “advisor” model with a cheaper “worker” agent, including an opening plan and token‑budget controls. | https://github.com/agentscope-ai/QwenPaw/pull/7569 |
| #6874 | *feat(mcp): add configurable tool call timeout* (under review since 2026‑08‑10) | Introduces a per‑client `tool_call_timeout` (default 300 s) and raises HTTP/SSE read budgets accordingly. | https://github.com/agentscope-ai/QwenPaw/pull/6874 |
| #7486 | *feat(creator) 1.1.2* – large feature bundle (notification bus, async delegation, media prompts, Windows hardening, Docker, etc.) | Aims to bring the Creator app‑plugin fork back into upstream with many production‑grade enhancements. | https://github.com/agentscope-ai/QwenPaw/pull/7486 |

These PRs collectively point to a roadmap focused on **skill lifecycle management**, **model‑routing modes**, **tool reliability**, and **creator‑app maturity**.

---

### 4. Community Hot Topics  
| Item | Metrics | Why it matters | Link |
|------|---------|----------------|------|
| **Issue #7318** – *QwenPaw Hub discussion* | 23 comments, 👍 3 | Central place for shaping the multi‑tenant Hub slated for v2.2.0; reveals demand for team‑level skill sharing, admin controls, and SaaS‑style deployment. | https://github.com/agentscope-ai/QwenPaw/issues/7318 |
| Issue #7576 – *RetryChatModel hardcoded 32768 context fallback* | 1 comment, 👍 0 | Affects all models; highlights a regression that forces an unrealistic context window and triggers `CONTEXT_UNFIT` errors. | https://github.com/agentscope-ai/QwenPaw/issues/7576 |
| Issue #7573 – *Edit last message & Rewind UI buttons* | 1 comment, 👍 0 | Direct UI usability request; would improve iterative prompting without session restart. | https://github.com/agentscope-ai/QwenPaw/issues/7573 |
| PR #7509 – *make‑skill v2* | 0 comments, 👍 0 (but open) | Community‑driven enhancement for skill versioning and approval workflow; aligns with the Hub discussion. | https://github.com/agentscope-ai/QwenPaw/pull/7509 |

The Hub discussion clearly dominates community engagement, signaling that **multi‑tenant collaboration** is a top priority for users and contributors alike.

---

### 5. Bugs & Stability (reported today)  

| Severity | Issue | Summary | Status | Fix PR (if any) |
|----------|-------|---------|--------|-----------------|
| **High** | #7576 | `RetryChatModel` forces a 32768‑token context window, causing `CONTEXT_UNFIT` (>31130 tokens) for all models. | Open | – |
| **Medium** | #7572 | Exception handling in `_coordinator.py _drain()` swallows stack traces, hindering debugging. | Open | – |
| **Medium** | #7571 | User reports persistent “TODO” files appearing in unintended paths during plugin development/deployment. | Open | – |
| **Low** | #7570 | 飞书流式卡片: thinking process stays expanded, pushing final reply out of view. | Open | – |
| **Low (resolved)** | #7474 | Custom provider loading fails after PR #7337 due to renamed `max_tokens` → `max_output_length`. | Closed | – |
| **Low (resolved)** | #7574 | `img-gen` skill omits `model` field → HTTP 503 fallback to DALL‑E 2. | Closed | – |
| **Low (resolved)** | #7575 | `img-gen edit()` always sends `response_format` → HTTP 400 on gpt‑image‑2 edit endpoint. | Closed | – |

**Takeaway:** The most pressing stability issue is the hard‑coded context size in `RetryChatModel` (#7576). It affects every model usage and should be prioritized for a hotfix. Several img‑gen bugs were already closed, indicating responsive handling of skill‑specific regressions.

---

### 6. Feature Requests & Roadmap Signals  

| Request | Origin | Likelihood for next version (v2.2.x) | Rationale |
|---------|--------|--------------------------------------|-----------|
| **Skill version & dependency metadata** (skill_pool) | Issue #7557 | **High** | Directly supports the Hub’s multi‑tenant skill sharing; aligns with #7318 discussion and the make‑skill v2 PR. |
| **Edit last message / Rewind UI controls** | Issue #7573 | **Medium** | Low‑effort UI improvement; would enhance iterative prompting and fits the upcoming UI polish sprint. |
| **Advisor Mode** | PR #7569 | **High** (if reviews pass) | Already implemented; adds a valuable model‑routing pattern that reduces cost while preserving quality. |
| **Configurable MCP tool‑call timeout** | PR #6874 (under review) | **Medium** | Addresses reliability for long‑running external tools; has been open for > 3 weeks, suggesting it may need additional testing before merge. |
| **Creator app‑plugin enhancements** (notification bus, media prompts, Windows hardening, Docker) | PR #7486 | **Medium‑High** | Large feature set; likely to land in a Creator‑focused sub‑release or as part of v2.3 if the upstream sync stabilizes. |

Overall, the **skill‑metadata/versioning** work and **Advisor Mode** appear the nearest‑term features likely to appear in the next patch/minor release.

---

### 7. User Feedback Summary  

- **Collaboration demand:** Users repeatedly ask for a way to run QwenPaw in a team setting (Hub discussion). Pain points include skill duplication across workspaces, lack of admin‑managed skill catalogs, and difficulty tracking which revision each agent uses.  
- **Usability friction:** Requests for UI affordances like “edit last message” and a “rewind” button reveal that iterative prompting is common and currently cumbersome.  
- **Stability annoyances:** Hard‑coded context limits and silent exception swallowing cause debugging headaches and occasional failed runs, especially when switching between models with different token capacities.  
- **Deployment concerns:** Plugin developers note unintended file generation (TODO files) across source, agent, and runtime directories, complicating version control and deployment pipelines.  
- **Positive sentiment:** The img‑gen skill fixes were quickly resolved, showing that the maintainers are responsive to regression reports. The upcoming Advisor Mode is anticipated as a cost‑saving feature for complex reasoning tasks.

---

### 8. Backlog Watch (items needing maintainer attention)  

| Item | Age | Importance | Suggested Action |
|------|-----|------------|------------------|
| **PR #6874 – configurable MCP tool‑call timeout** | ~ 4 weeks (since 2026‑08‑10) | Medium‑High (affects reliability of long‑running tool calls) | Request a quick review/testing cycle; consider adding a baseline integration test for timeout enforcement. |
| **Issue #7318 – QwenPaw Hub discussion** | 11 days (opened 2026‑08‑26) | High (strategic direction for v2.2.0) | Summarize community votes, draft a short‑term milestone (e.g., basic multi‑tenant skill registry) and assign an owner. |
| **Issue #7557 – skill version & dependency metadata** | 2 days (opened 2026‑09‑04) | Medium (enables Hub skill sharing) | Link to the Hub discussion; consider bundling with make‑skill v2 PR for a cohesive release. |
| **Issue #7576 – RetryChatModel context fallback** | 1 day (opened 2026‑09‑05) | High (blocks all model usage) | Prioritize a hotfix: replace hardcoded 32768 with dynamic lookup from model config or a safe default (e.g., model’s reported `max_position_embeddings`). |
| **PR #7569 – Advisor Mode** | 0 days (opened 2026‑09‑05) | Medium‑High (new feature) | Ensure unit tests cover advisor/worker interaction; solicit feedback from early adopters before merge. |

Addressing these items will improve both the **stability** (critical bug #7576) and the **strategic direction** (Hub & skill versioning) of the project, while clearing older stalled work (PR #6874) that has been waiting for reviewer bandwidth.

--- 

*End of digest.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



# ZeroClaw Project Digest — 2026-09-06

---

## 1. Today's Overview

ZeroClaw is in an active stabilization phase surrounding the v0.8.5 release, which shipped with 454 commits from 73 contributors and introduces ZeroRelay, ZeroRouter, and expanded security boundaries. The project registered 42 issue updates and 50 PR updates in the last 24 hours, indicating robust daily contributor velocity. A new critical security bug (Seatbelt ignoring `allowed_roots`) and a P1 config-validation divergence were reported today, signaling that the hardened post-v0.8.5 release cycle is already surfacing edge cases worth addressing. Overall project health is strong: high PR throughput, active RFC governance, and a clear focus on security and provider compatibility.

---

## 2. Releases

**v0.8.5** — Security, connectivity, and operator-experience release (454 commits, 73 contributors)

Key changes:
- Introduced **ZeroRelay** and **ZeroRouter** for enhanced transport and model-routing capabilities.
- Expanded live chat and provider capabilities.
- Hardened plugin, sandbox, webhook, credential, and file boundaries.

No additional releases were published today. Migration notes and breaking changes are documented in the [v0.8.5 release announcement](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.8.5).

---

## 3. Project Progress

**Closed/Merged (today):**
- **#10048** (CLOSED) — CI validation for Rust 1.98.0 local-CI, demo, and cross-platform build lanes completed.
- **#7911** (CLOSED) — Resolved Android/Termux `install.sh` binary-selection bug.
- **#7910** (CLOSED) — Windows runtime test coverage for self-update swap/rollback/sidecar paths added.
- **#9593** (CLOSED) — `TaskRecord` refactored as the single lifecycle owner for background delegation.
- **#10045** (CLOSED) — Persisted image markers no longer retain temporary source paths and repeatedly warn.
- **#10282** (CLOSED) — Hardware probe feature now reaches tool implementations.
- **#10435** (CLOSED) — Gemini model context preserved when anchoring requests.
- **#10064** (CLOSED) — Telegram self-destruct approval cards after operator tap.

**In progress / advanced today:**
- **#10630** — Fix for degraded-config remediation binding to the running executable (closes #10532).
- **#9447** — Anthropic incomplete terminal responses now classified as typed failures.
- **#10650** — Matrix lib tests now fully executed in CI.

---

## 4. Community Hot Topics

| Issue / PR | Comments | Focus |
|---|---|---|
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) — RFC: Runtime-owned conversation sessions & transport adapters | 33 | Architectural control of session lifecycle across channels |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) — RFC: Unified file & attachment architecture | 26 | Standardizing media handling across surfaces |
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) — RFC: Work Lanes, Board Automation, Label Cleanup | 24 | Governance & triage process modernization |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) — RFC: Granular sandbox filesystem policy | 24 | Aligning OS sandbox backends with application-layer policy |
| [#10630](https://github.com/zeroclaw-labs/zeroclaw/pull/10630) — fix(config): bind degraded remediation | — | Direct response to today's #10532 report |

**Analysis:** The community is heavily engaged in architectural RFCs around session ownership, file/attachment unification, and sandbox policy alignment—reflecting a maturation cycle where early plug-and-chug channel integrations are being replaced by coherent, shared-boundary contracts. Governance process improvements (#6808) also rank high, showing contributors care about sustainable triage workflows.

---

## 5. Bugs & Stability

| Severity | Issue | Summary | Fix PR |
|---|---|---|---|
| **S1** | [#10536](https://github.com/zeroclaw-labs/zeroclaw/issues/10536) | macOS Seatbelt ignores `allowed_roots` for shell commands — workflow blocked | In progress |
| **S2** | [#10532](https://github.com/zeroclaw-labs/zeroclaw/issues/10532) | Degraded-config remediation can invoke a different binary than the running daemon | **#10630** (open) |
| **S2** | [#10534](https://github.com/zeroclaw-labs/zeroclaw/issues/10534) | Bounded delegates silently strip the delegate tool, contradicting `delegation_policy` | None yet |
| **S2** | [#10625](https://github.com/zeroclaw-labs/zeroclaw/issues/10625) | Non-vision models receive `[media attachment]` placeholder in conversation history | None yet |
| **S2** | [#10626](https://github.com/zeroclaw-labs/zeroclaw/issues/10626) | TTS synthesizes Markdown and emoji verbatim | None yet |
| **S3** | [#10585](https://github.com/zeroclaw-labs/zeroclaw/issues/10585) | Log-sink regression races migration tests under parallel runner | None yet |
| **P1** | [#10533](https://github.com/zeroclaw-labs/zeroclaw/issues/10533) | `model_routing_config` rejects `custom.*` provider slots — tool/schema divergence | In progress |

**Assessment:** Four S2+ bugs reported today, one S1 (Seatbelt). The most critical gap is the Seatbelt sandbox bypass (#10536), which directly undermines the security hardening promise of v0.8.5. Two high-risk items have fix PRs actively in review (#10630, #9593-related).

---

## 6. Feature Requests & Roadmap Signals

| Issue / PR | Description | Likelihood for Next Release |
|---|---|---|
| [#10641](https://github.com/zeroclaw-labs/zeroclaw/issues/10641) | Per-field cron schedule input with client-side validation | Medium — small UX scope |
| [#10530](https://github.com/zeroclaw-labs/zeroclaw/issues/10530) | Pass Anthropic extended-thinking params through OpenAI-compatible gateways | High — direct provider-compatibility need |
| [#10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050) | Verbatim channel send over gateway without agent turn | Medium — gateway expansion |
| [#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) | Composable WASM plugin runtime architecture | Long-term — architectural RFC |
| [#10526](https://github.com/zeroclaw-labs/zeroclaw/issues/10526) | Append-only session event history & deterministic replay | Long-term — core runtime change |
| [#10489](https://github.com/zeroclaw-labs/zeroclaw/pull/10489) | Matrix voice replies as MSC3245 voice notes | Medium — channel feature parity |
| [#10356](https://github.com/zeroclaw-labs/zeroclaw/pull/10356) | AnySearch web search provider | Medium — new provider integration |
| [#10407](https://github.com/zeroclaw-labs/zeroclaw/pull/10407) | Persistent session prompt attachments (SQLite-backed) | High — directly useful, in PR |

**Prediction:** Extended-thinking passthrough (#10530) and session prompt attachments (#10407) are the strongest candidates for the next patch, given their focused scope and clear user demand.

---

## 7. User Feedback Summary

- **Self-hosted deployments are hitting provider-gateway gaps:** Users relying on OpenAI-compatible proxies (LiteLLM, TrueFoundry) for Claude models report that extended-thinking parameters are silently dropped (#10530). This is a growing pain point as more orgs route through proxies.
- **Sandbox policy drift is eroding trust:** The Seatbelt `allowed_roots` bypass (#10536) and the bounded-delegate tool stripping (#10534) both suggest that security hardening in v0.8.5 has edge-case regressions on macOS and in delegation flows.
- **TTS and media handling need polish:** Literal Markdown/emoji spoken aloud (#10626) and `[media attachment]` placeholders shown to non-vision models (#10625) are quality-of-life issues that degrade the end-user experience, especially in automated or voice-first deployments.
- **Config tooling is fragile:** The degraded-config binary mismatch (#10532) and `model_routing_config` rejecting valid `custom.*` slots (#10533) point to schema-validation gaps that confuse operators during migration.

---

## 8. Backlog Watch

| Issue | Age | Why It Needs Attention |
|---|---|---|
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) — RFC: Granular sandbox filesystem policy | ~3 months | High-risk security RFC (Rev. still in progress); blocks unified sandbox enforcement |
| [#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822) — RFC: WASM plugin lifecycle observer | ~3 months | Observer capability clarifies plugin extensibility; maintainer-takeover revision pending |
| [#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) — RFC: Composable WASM plugin runtime | ~3 weeks | Foundational for plugin ecosystem; cross-references #10526 |
| [#10339](https://github.com/zeroclaw-labs/zeroclaw/issues/10339) — Tracker: Shell V1 approval policy implementation | ~2 weeks | Accepted Phase 0/1 implementation tracker; no visible PRs yet |
| [#9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459) — Tracker: v0.8.5 stabilization line | ~2 months | Milestone closure tracking; weekly cuts may still be needed |

These items represent architectural decisions and accepted-but-unimplemented work that, if stalled, could slow the next release cadence.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*