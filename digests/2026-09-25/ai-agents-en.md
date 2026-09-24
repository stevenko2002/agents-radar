# OpenClaw Ecosystem Digest 2026-09-25

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-09-24 22:16 UTC

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



# OpenClaw Project Digest — 2026-09-25

---

## 1. Today's Overview

OpenClaw remains highly active, with 500 issues and 500 PRs updated in the last 24 hours. The project is in a stabilization phase following the 2026.9.6 release, with a notable concentration of P0/P1 bugs around memory management, event-loop starvation, and subagent orchestration reliability. Activity is healthy: 53 issues closed and 130 PRs merged or closed today, indicating a responsive maintenance cycle. The macOS app rebuild (fixing a launch crash) shipped as part of v2026.9.6, showing the team ships hotfixes rapidly.

---

## 2. Releases

### v2026.9.6 — openclaw 2026.9.6

- **macOS app rebuilt 2026-09-24:** The original 2026.9.6 macOS build crashed at launch ([#156861](https://github.com/openclaw/openclaw/issues/156861)) and was replaced at 09:52 UTC by a rebuilt, notarized 2026.9.6 build with the fix ([#156881](https://github.com/openclaw/openclaw/issues/156881)).
- Users who installed the earlier 2026.9.6 build should download the new DMG or update from 2026.9.5 in-app.
- No breaking changes or migration notes documented for this patch release.

---

## 3. Project Progress

### Merged/Closed PRs Today (130 total; highlights below)

| PR | Summary | Area |
|---|---|---|
| [#157623](https://github.com/openclaw/openclaw/pull/157623) | Preserve outer storage admission in relay fixtures | Testing |
| [#157524](https://github.com/openclaw/openclaw/pull/157524) | Reuse fs-safe, remove duplicate filesystem code | Refactor |
| [#135481](https://github.com/openclaw/openclaw/pull/135481) | Cover deferred subagent completion delivery on busy requester lanes | QA |
| [#156919](https://github.com/openclaw/openclaw/pull/156919) | Return child followup results after yielding | Gateway |
| [#151357](https://github.com/openclaw/openclaw/pull/151357) | Keep end of Logs reachable on small screens | Web UI |
| [#152020](https://github.com/openclaw/openclaw/pull/152020) | Preserve plugin restrictions during managed installation | Plugins |
| [#151065](https://github.com/openclaw/openclaw/pull/151065) | Notify when unattended sessions finish | UI/UX |
| [#157422](https://github.com/openclaw/openclaw/pull/157422) | Avoid blocking requests during worker inference persistence | Gateway |
| [#157339](https://github.com/openclaw/openclaw/pull/157339) | Plugin reloads lose tool results and strand subagent settlement | Agents |
| [#157413](https://github.com/openclaw/openclaw/pull/157413) | Prevent temporary-file exhaustion from SQLite coordination | Gateway |
| [#145169](https://github.com/openclaw/openclaw/pull/145169) | Preserve newer data across failed update rollback | Update |
| [#156501](https://github.com/openclaw/openclaw/pull/156501) | Keep Codex-native account models available after cold startup | Codex |

**Key advances:** Subagent completion reliability, plugin lifecycle management, update rollback safety, and SQLite I/O efficiency all saw concrete fixes land today.

---

## 4. Community Hot Topics

### Most Commented Issues

1. **[#91588](https://github.com/openclaw/openclaw/issues/91588)** — Critical: Gateway Memory Leak (37 comments, P0, 🦪 silver shellfish)
   - RSS grows from ~350 MB to 15.5 GB over 2–3 days, triggering OOM kills and `launchd-handoff` restart loops.
   - Underlying need: Long-running deployments (days/weeks) need predictable memory behavior; this is a deployment-blocker for production use.

2. **[#144911](https://github.com/openclaw/openclaw/issues/144911)** — MCP server init timeout crashes Gateway (30 comments, P1, 🦞 diamond lobster)
   - A stdio MCP server that fails to initialize within 30s triggers an unhandled promise rejection in the child cleanup path, taking the entire Gateway down.
   - Underlying need: Fault isolation — one misbehaving plugin/transport should not crash the host process.

3. **[#44925](https://github.com/openclaw/openclaw/issues/44925)** — Subagent completion silently lost (28 comments, P1, 🦞 diamond lobster)
   - Multiple failure modes where subagent results vanish: completion announce fails, no retry, no notification, no auto-restart on timeout.
   - Underlying need: Reliable task orchestration with observable failure semantics (retry, backpressure, visibility).

4. **[#155753](https://github.com/openclaw/openclaw/issues/155753)** — Model-catalog expiry/rebuild loop pins one CPU core (21 comments, P2, 🐚 platinum hermit)
   - `readFullModelCatalog()` re-triggers `refreshExpiredCatalog()` on every read, burning a full core indefinitely.
   - Underlying need: Efficient caching with proper TTL semantics; this is a performance regression from 2026.9.5.

5. **[#149538](https://github.com/openclaw/openclaw/issues/149538)** — Gateway reaches ready but never serves (21 comments, P0, 🦐 gold shrimp)
   - Event loop starved by 632-agent fleet; all `/health` probes time out; RSS climbs until OOM.
   - Underlying need: Scalability guardrails — the Gateway must degrade gracefully under agent fleet pressure, not silently hang.

---

## 5. Bugs & Stability

### Critical / P0 (ranked by severity)

| Issue | Summary | Fix PR? |
|---|---|---|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway memory leak: RSS 350MB → 15.5GB over days, OOM crashes | ❌ No fix PR yet |
| [#149538](https://github.com/openclaw/openclaw/issues/149538) | Gateway starved event loop, never serves health probes (632-agent fleet) | ❌ No fix PR yet |
| [#156112](https://github.com/openclaw/openclaw/issues/156112) | `openclaw update` fails at global install swap on npm global installs | ❌ No fix PR yet |
| [#152252](https://github.com/openclaw/openclaw/issues/152252) | Config write stamps `utilityModelSeparation`; older Gateway hard-fails startup (exit 78) | ❌ No fix PR yet |
| [#157107](https://github.com/openclaw/openclaw/issues/157107) | 2026.9.6: prepared-model-catalog worker rebuilds plugin every ~6s; no agent runs admitted | ✅ Closed (likely fixed in release) |
| [#115256](https://github.com/openclaw/openclaw/issues/115256) | Desktop app boot-loops gateway; `doctor` recommends fix the app reverts | ❌ No fix PR yet |

### P1 (high severity)

| Issue | Summary | Fix PR? |
|---|---|---|
| [#144911](https://github.com/openclaw/openclaw/issues/144911) | MCP init timeout → unhandled rejection crashes Gateway | ❌ No fix PR yet |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | Subagent completion silently lost | ✅ PR [#135481](https://github.com/openclaw/openclaw/pull/135481) (QA coverage) |
| [#112423](https://github.com/openclaw/openclaw/issues/112423) | Large SQLite transcript cleanup blocks gateway event loop | ❌ No fix PR yet |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | Unreaped hook/tool child processes accumulate as zombies | ❌ No fix PR yet |
| [#148707](https://github.com/openclaw/openclaw/issues/148707) | Reply lost: "no active tool authority snapshot" on displaced turns | ❌ No fix PR yet |
| [#110190](https://github.com/openclaw/openclaw/issues/110190) | Runtime context carrier AFTER user message causes model confusion | ❌ No fix PR yet |
| [#139485](https://github.com/openclaw/openclaw/issues/139485) | Managed upgrade leaves gateway offline while finalization remains nonterminal | ❌ No fix PR yet |
| [#155859](https://github.com/openclaw/openclaw/issues/155859) | Gateway startup wall-time scales with plugin count (2026.9.5) | ❌ No fix PR yet |
| [#120162](https://github.com/openclaw/openclaw/issues/120162) | Safeguard compaction: qualityGuard audit shares timeout budget and gets killed | ❌ No fix PR yet |
| [#131150](https://github.com/openclaw/openclaw/issues/131150) | Slack DMs silently dropped after gateway restart (multi-account) | ❌ No fix PR yet |

### Regression Watch

Several issues explicitly tagged as regressions from recent releases:
- **2026.9.4 → 2026.9.5:** Codex catalog retry loop fills `os.tmpdir()` ([#152689](https://github.com/openclaw/openclaw/issues/152689))
- **2026.9.5 → 2026.9.6:** Prepared-model-catalog worker rebuilds plugin generation every ~6s ([#157107](https://github.com/openclaw/openclaw/issues/157107))
- **2026.9.5:** Gateway startup time scales with plugin count ([#155859](https://github.com/openclaw/openclaw/issues/155859))
- **2026.9.4:** Reply lost with "no active tool authority snapshot" ([#148707](https://github.com/openclaw/openclaw/issues/148707))

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Signal Strength |
|---|---|---|
| [#81960](https://github.com/openclaw/openclaw/issues/81960) | Allow onboarding to configure multiple providers and models | 7 comments, 👍 1 |
| [#41366](https://github.com/openclaw/openclaw/issues/41366) | Durable natural-language rule learning + explicit multi-mention reply semantics | 8 comments, 👍 1 |
| [#60572](https://github.com/openclaw/openclaw/issues/60572) | Multi-slot memory architecture (replace single memory slot) | 7 comments, 👍 3 |
| [#51572](https://github.com/openclaw/openclaw/issues/51572) | Fire session-memory hook on session reset/prune, not just compaction | 8 comments, 👍 1 |
| [#84242](https://github.com/openclaw/openclaw/issues/84242) | Expose `memory_store`/`memory_recall`/`memory_forget` as callable agent tools | 7 comments, 👍 3 |
| [#47910](https://github.com/openclaw/openclaw/issues/47910) | Provider fallback by failure class — quarantine auth-broken providers | ✅ Closed (feature landed) |

**Prediction:** Multi-provider onboarding and memory tooling exposure are the most likely features to appear in the next minor release, given community traction and the closed PR for provider fallback by failure class.

---

## 7. User Feedback Summary

### Top Pain Points (from issue comments and reports)

1. **Production deployment risk:** The memory leak (#91588) and event-loop starvation (#149538) make long-running Gateway deployments unreliable. Users report OOM kills in fleet scenarios with hundreds of agents.

2. **Subagent orchestration fragility:** Users lose subagent results silently — no retry, no notification, no visibility into why a task failed. This undermines trust in multi-agent workflows.

3. **Update friction:** `openclaw update` fails on npm global installs (#156112), and managed upgrades can leave the Gateway in a nonterminal finalization state (#139485). Rollback safety is a recurring concern.

4. **Platform-specific issues:** ARM64/Raspberry Pi hits ~100% CPU on every agent turn (#134925); Windows Scheduled Task defaults prevent unattended gateway startup (#143757); macOS app boot-loops with the desktop app open (#115256).

5. **Context management confusion:** Runtime context carrier positioning causes model reasoning waste (#110190); pre-compaction memory flush is disabled on CLI backends (#137613); phantom user messages appear in long WeChat sessions (#151962).

6. **Channel-specific bugs:** Telegram leaks raw Markdown links (#137705); Slack DMs silently dropped after restart (#131150); Telegram stickers arrive as unprocessable raw

---

## Cross-Ecosystem Comparison



Here is the cross-project comparison report analyzing the personal AI assistant and agent open-source ecosystem based on the community digest summaries leading up to **September 25, 2026**.

---

# Cross-Project Ecosystem Comparison Report
**Date:** September 25, 2026  
**Scope:** 13 active open-source AI agent and personal assistant projects

---

### 1. Ecosystem Overview
The personal AI assistant and agent open-source ecosystem is transitioning rapidly from experimental chatbot frameworks to robust, production-grade orchestration platforms. A dominant shared theme across all active projects is the hardening of context management, specifically focusing on token-budget compaction, scroll eviction, and memory safety. Furthermore, the ecosystem is experiencing a wave of standardization around the Model Context Protocol (MCP) and the OpenAI Responses API, driving deep architectural integrations. Projects are actively tackling enterprise-grade deployment challenges, such as multi-provider failover, zero-environment-variable OAuth configurations, and multi-tenant session isolation, signaling a strong push toward business and industrial readiness.

---

### 2. Activity Comparison

The table below summarizes the repository activity, release status, and overall project health for each analyzed project over the last 24 hours.

| Project | Issues Updated (24h) | PRs Updated (24h) | Latest Release | Health Score & Status |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | v2026.9.6 (Hotfix) | **Excellent** — High velocity, rapid P0 hotfixing, massive community scale. |
| **ZeroClaw** | 26 | 50 | None (Milestone active) | **Exceptional** — Exceptional PR volume, focused on SOP engine and OIDC milestone. |
| **LobsterAI** | 18 | 50 | None (Stabilization) | **Very High** — High merge/close rate (46 PRs), heavy UI stabilization. |
| **CoPaw** | 34 | 23 | None (v2.2.2 beta) | **High** — Active triage of channel bugs (Feishu, WeChat), strong feature pipeline. |
| **NullClaw** | 12 | 25 | None | **Very High** — Steady maintainer responsiveness, strong doc and memory tooling updates. |
| **NanoBot** | 14 | 39 | None | **High** — High PR merge rate, strong WebUI and channel provider alignment. |
| **NanoClaw** | 2 | 14 | None | **Good** — Focused engineering on arm64 parity and Iron Proxy hardening. |
| **Hermes Agent** | N/A | 1 (merged) | v0.21.5 (v2026.9.24) | **Good (Stabilizing)** — Packaging ~460 cumulative PRs; focus on desktop client sync. |
| **IronClaw** | 1 | 2 | v1.4.1-rc.2 | **Stable** — Maintenance phase, proactive security patching (wasmtime, rustls). |
| **PicoClaw** | 2 | 8 | None | **Moderate** — Stale PRs, duplicate bug reports, but active dependency hygiene. |
| **TinyClaw** | 0 | 0 | N/A | **Inactive** — No activity in the last 24 hours. |
| **Moltis** | 0 | 0 | N/A | **Inactive** — No activity in the last 24 hours. |
| **ZeptoClaw** | 0 | 0 | N/A | **Inactive**

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Thinking Process:

1.  **Analyze the Request:**
    *   **Role:** Analyst of AI agent and personal AI assistant open-source projects.
    *   **Subject:** NanoBot (`github.com/HKUDS/nanobot`).
    *   **Data provided:** GitHub data (Issues updated in last 24h, PRs updated in last 24h, Latest Releases, Latest Issues, Latest Pull Requests).
    *   **Date of digest:** 2026-09-25 (based on the prompt's instruction: "generate a project digest for 2026-09-25").
    *   **Output format:** Structured English project digest with 8 specific sections:
        1. Today's Overview (3-5 sentences, project status, activity assessment)
        2. Releases (detail changes, breaking changes, migration notes; omit if none - here there are "None" for latest releases)
        3. Project Progress (Merged/closed PRs today, features advanced/fixed)
        4. Community Hot Topics (Most active Issues/PRs with most comments/reactions, links, analyze underlying needs)
        5. Bugs & Stability (Bugs, crashes, regressions reported today, ranked by severity, note if fix PRs exist)
        6. Feature Requests & Roadmap Signals (User-requested features, predict which might be in next version)
        7. User Feedback Summary (Real user pain points, use cases, satisfaction/dissatisfaction)
        8. Backlog Watch (Long-unanswered important Issues or PRs needing maintainer attention)
    *   **Style:** Objective, data-driven, highlighting project health. Include GitHub links for each item.

2.  **Analyze the Data (NanoBot as of 2026-09-25 data pull):**
    *   *Issues updated in last 24h:* 14 (open/active: 8, closed: 6)
    *   *PRs updated in last 24h:* 39 (open: 13, merged/closed: 26)
    *   *New releases:* 0 (Latest Releases: None)
    *   *Latest Issues (Total: 14 items - let's look at the ones listed):*
        *   #5366 [CLOSED] WebUI: localize Agent activity text using the user's selected language (Updated 2026-09-24)
        *   #5896 [OPEN] [good first issue, feature request, priority: p2] feat(providers): support OpenAI Responses API for opencode_go (muse-spark contributor) (Created 2026-09-24, Updated 2026-09-24)
        *   #5849 [OPEN] Auto-compaction deadlock: summarize_transcript has no token-budget guard, compaction can never recover once history exceeds input budget (Created 2026-09-21, Updated 2026-09-24)
        *   #5429 [CLOSED] AgentLoop does not retrieve exceptions from background tasks (Updated 2026-09-24)
        *   #5524 [CLOSED] [good first issue] Feature: WebUI 会话结束通知铃声 (WebUI session end notification bell) (Updated 2026-09-24)
        *   #5881 [CLOSED] [bug, regression, priority: p2] 0.3.5版本要求_nanobot必须要搬到workspace外 (0.3.5 version requires _nanobot to be moved outside workspace) (Updated 2026-09-24)
        *   #5910 [OPEN] feat(webui): persist composer draft per conversation (Created 2026-09-24)
        *   #5909 [OPEN] feat(api): server-side message queue ("waiting room") while agent is busy (Created 2026-09-24)
        *   #5908 [OPEN] feat(webui): show live tokens/sec while streaming a reply (Created 2026-09-24)
        *   #5274 [CLOSED] [channels/matrix] messages replied to a user's query should make use of the reply feature (Updated 2026-09-24)
        *   #5903 [OPEN] Feishu: hidden session-checkpoint marker ("Continue the active task...") is delivered to the user after idle compaction (Created 2026-09-24)
        *   #5806 [CLOSED] Discord runtime leaves reaction tasks alive after stop (Updated 2026-09-24)
        *   #5900 [OPEN] [enhancement] Silent context compaction and reduce WeChat channel polling log verbosity (Created 2026-09-24)
        *   #5898 [OPEN] [bug] gpt-6 model series through Github Copilot (Created 2026-09-24)
    *   *Latest Pull Requests (Total: 39 items; showing top 20 by comment count):*
        *   #5911 [OPEN] [bug, channel, fix, test, priority: p2] fix(telegram): render tilde and longer code fences as code (Created 2026-09-24)
        *   #5838 [OPEN] [conflict] fix(api): route each session_id to its own chat (Created 2026-09-20)
        *   #5864 [OPEN] [bug, channel, fix, test, priority: p2, conflict] fix(discord): cancel delayed reaction tasks on runtime reset (Created 2026-09-22) - Fixes #5806
        *   #1387 [CLOSED] [conflict] feat: add Anthropic extended thinking support alongside reasoning_effort (Created 2026-03-01, updated 2026-09-24)
        *   #5367 [CLOSED] [webui, feature, test, priority: p2, conflict] feat(webui): localize agent activity (Updated 2026-09-24)
        *   #5907 [OPEN] [refactor, test, priority: p2] test: consolidate redundant coverage across the test suite (Created 2026-09-24)
        *   #5906 [OPEN] [provider, feature, test, priority: p2] feat(providers): route OpenCode Go muse-spark contributor models through Responses (Created 2026-09-24) - Matches issue #5896
        *   #5724 [CLOSED] [bug, fix, test, priority: p2] fix(agent): retrieve background task exceptions and log unexpected failures (Created 2026-09-10) - Related to #5429
        *   #5905 [CLOSED] [bug, webui, fix, performance, test, priority: p2] fix(webui): keep global page URLs clean and defer chat mounting (Created 2026-09-24)
        *   #5257 [OPEN] [bug, fix, test, priority: p2] fix(agent): bound sustained-goal continuation when the turn goes idle (Created 2026-08-05)
        *   #5904 [CLOSED] [enhancement, webui, performance, test, priority: p2] perf(webui): improve chat refresh and mobile interactions (Created 2026-09-24)
        *   #5292 [CLOSED] fix(matrix): reply to the room-level user event that started the turn (Created 2026-08-08)
        *   #5834 [OPEN] [bug, provider, fix, test, priority: p2] fix(providers): handle `response.reasoning_text.*` events in the SSE Responses consumer (Created 2026-09-20) - Fixes #5833
        *   #5260 [OPEN] [bug, fix, test, priority: p2] fix(memory): ignore runtime files inside tracked workspace dirs (Created 2026-08-05)
        *   #5807 [CLOSED] [bug, channel, fix, test, priority: p2] fix(discord): clean up reaction state on stop (Created 2026-09-18)
        *   #5431 [CLOSED] fix(agent): report background task failures (Created 2026-08-18)
        *   #5845 [OPEN] [documentation, question, provider, webui, new-provider, feature, test, priority: p2] Add Opper as a built-in provider (Created 2026-09-21)
        *   #5780 [OPEN] [bug, channel, fix, test, priority: p2] fix: stop sending context compaction notifications (Created 2026-09-15)
        *   #5902 [OPEN] [channel, webui, feature, test, priority: p2] feat(tg): rename topic to generated session title (Created 2026-09-24)
        *   #5865 [CLOSED] [bug, webui, fix, test, priority: p2] fix: preserve primary context window with smaller fallbacks (Created 2026-09-22)

3.  **Synthesize Findings into Sections:**

    *   **Section 1: Today's Overview (3-5 sentences)**
        *   NanoBot is experiencing very high development velocity, with 39 PR updates (26 merged/closed, 13 open) and 14 issue updates (8 open, 6 closed) in the last 24 hours.
        *   The project is highly focused on stability, channel integrations (Discord, Telegram, Matrix, Feishu, WeChat), and WebUI enhancements (localization, draft persistence, clean URLs).
        *   Key areas of focus include resolving background task management bugs, improving provider compatibility (OpenAI Responses API, Copilot GPT-6 series), and optimizing UI performance.
        *   Overall project health is strong, showing active maintainer contribution and community-driven bug resolution, particularly around v0.3.5 regression issues and feature requests.

    *   **Section 2: Releases**
        *   No new releases were created today (Latest Releases: None). Mention that the project is currently in a heavy development and bug-fixing phase post v0.3.5, with no immediate release tag updates but many underlying fixes being merged.

    *   **Section 3: Project Progress (Merged/closed PRs today, features advanced/fixed)**
        *   *Major Fixes & Improvements:*
            *   **WebUI Localization & Performance:** PR #5367 (localize agent activity) and PR #5366 (issue closed) have been closed/merged. PR #5905 (clean global page URLs and defer chat mounting) and PR #5904 (improve chat refresh and mobile interactions) are closed, significantly boosting WebUI performance and navigation state management.
            *   **Agent Core Reliability:** PR #5724 and PR #5431 (closed) address background task exception retrieval, fixing the silent failure of post-turn consolidation and archival tasks (related to issue #5429).
            *   **Provider & API Enhancements:** PR #1387 (closed) adds Anthropic extended thinking support alongside `reasoning_effort`. PR #5906 (open) and #5834 (open) target routing OpenCode Go models through the Responses API and fixing SSE response reasoning events.
            *   **Channel Integrations:** Discord channel runtime cleanup (PR #5807, #5864 closed) ensures reaction tasks are properly cancelled on stop. Matrix threading replies (PR #5292 closed) now correctly reply to room-level user events. Telegram rendering (PR #5911 open) addresses tilde and longer code fences.
            *   **Context Compaction:** PR #5780 (open) works on stopping context compaction notifications to avoid spamming channels, addressing user complaints in #5900.

    *   **Section 4: Community Hot Topics (Most active Issues/PRs, links, underlying needs)**
        *   *Hot Issue #5896 / PR #5906:* "feat(providers): support OpenAI Responses API for opencode_go (muse-spark contributor)". This is a highly requested feature for users of `opencode.ai/zen/go/v1` who need the `/responses` wire format instead of `/chat/completions` which returns 500 errors. Underlying need: high compatibility with specific enterprise/advanced model gateways.
        *   *Hot Issue #5849:* "Auto-compaction deadlock: summarize_transcript has no token-budget guard". This is a critical architectural bug where automatic compaction can fail infinitely if the history exceeds the input token budget. Underlying need: robust context management safeguards to prevent agent stalls.
        *   *Hot Issue #5909:* "feat(api): server-side message queue ('waiting room') while agent is busy". This highlights a major UX gap where users cannot queue follow-up messages while the agent is executing long tasks (like browser automation). Underlying need: better concurrency control and asynchronous message handling in the API/WebUI.
        *   *Hot Issue #5910 / #5908:* WebUI draft persistence and live tokens/sec streaming indicator. These represent strong community demands for a richer, more stateful, and transparent chat interface.

    *   **Section 5: Bugs & Stability (Bugs, crashes, regressions, ranked by severity, fix status)**
        *   *Severity 1 (Critical / High impact regressions & stalls):*
            *   **Auto-compaction deadlock (#5849):** Lack of token budget guard in `summarize_transcript` can cause permanent agent deadlock when context exceeds limits. *Status:* Open issue, no fix PR listed yet but flagged as critical for agent loop stability.
            *   **Feishu hidden session-checkpoint leak (#5903):** Internal checkpoint messages ("Continue the active task...") are exposed to users after idle compaction. *Status:* Open issue, needs channel-level filtering fix.
            *   **GPT-6 series via GitHub Copilot failure (#5898):** v0.3.5 regression where Copilot doesn't support GPT-6 models, throwing provider errors. *Status:* Open issue, likely tied to provider routing fixes like PR #5834.
        *   *Severity 2 (Medium impact - runtime state leaks):*
            *   **Discord reaction tasks lingering (#5806):** Fixed by PR #5864 and #5807 (closed), preventing resource leaks on runtime stop.
            *   **v0.3.5 workspace restriction regression (#5881):** Users unable to start second instance because `_nanobot` sessions folder must be outside workspace. *Status:* Closed issue, likely resolved via configuration updates or documentation, but represents a painful migration break.
            *   **Telegram code fence rendering (#5911):** Tilde (`~~~`) fences and long blocks are rendered as prose instead of code. *Status:* Open PR fixing the regex pattern.

    *   **Section 6: Feature Requests & Roadmap Signals**
        *   *Key Features in Pipeline:*
            *   **Server-side message queue / "waiting room" (#5909):** Highly requested for API and WebUI users dealing with long-running tasks. Likely to be a major feature in the next minor release.
            *   **OpenCode Go provider support via Responses API (#5896 / #5906):** Routing `muse-spark` models through the OpenAI Responses API. Critical for the OpenCode ecosystem integration.
            *   **WebUI Composer Draft Persistence (#5910):** Multi-conversation draft saving, essential for desktop-like WebUI UX.
            *   **WebUI live tokens/sec streaming (#5908):** Performance transparency feature.
            *   **Silent Context Compaction (#5900):** Suppressing channel notifications during automatic background compaction.
            *   **Opper provider integration (#5845):** Adding Opper as a built-in gateway provider, expanding the provider registry.

    *   **Section 7: User Feedback Summary**
        *   *Pain Points:*
            *   **Configuration & Workspace Restrictions:** Users upgrading to v0.3.5 faced blockers when running multiple instances due to the strict requirement to move `_nanobot` outside the workspace directory (#5881).
            *   **Message Concurrency Limitations:** Users feel limited by the inability to send messages while the agent is busy (#5909), leading to dropped inputs or confusing behaviors during long browser automation runs.
            *   **Missing UI State Persistence:** Loss of typed drafts when switching conversations in WebUI (#5910) caused frustration.
            *   **Notification Spam:** Auto-compaction messages spamming channels like WeChat and Discord (#5900) were reported as highly annoying.
        *   *Use Cases & Satisfaction:*
            *   Users are highly engaged with channel features (Matrix replies, Telegram topic renaming, WebUI notification sounds). The closure of issues like #5524 (WebUI notification bell) and #5274 (Matrix replies) shows the community values micro-interactions and messaging platform fidelity.
            *   Provider expansion (Copilot, OpenCode Go, Anthropic thinking) shows users are pushing the boundaries of NanoBot as a universal LLM gateway.

    *   **Section 8: Backlog Watch**
        *   *Critical unresolved architectural issues:*
            *   **Auto-compaction deadlock (#5849):** Needs immediate maintainer attention to implement token-budget chunking in the automatic `summarize_transcript` path, mirroring the manual `archive_session` logic.
            *   **API session routing conflict (#5838):** PR is marked as `[conflict]`, showing potential mergeability issues or architectural debates over how to isolate `session_id` routing versus the default `api:default` context. Needs senior maintainer review to resolve routing architecture.
            *

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>



Here is the structured project digest for the Hermes Agent repository, covering activity leading up to **September 25, 2026**.

---

### 1. Today's Overview
Hermes Agent is experiencing high development velocity, marked by the stabilization release of **v0.21.5 (v2026.9.24)**, which packages approximately 460 merged PRs since the previous minor release. The development focus is heavily concentrated on hardening the Desktop client (Electron), resolving session-state synchronization bugs, and refining core gateway routing. Community engagement remains highly active, particularly around integration blockers and platform-specific stability issues on Windows and macOS.

---

### 2. Releases
*   **v0.21.5 (v2026.9.24)** — *Patch Release*
    *   **Details:** This release serves as a stable tag rollup for downstream consumers, including Docker images, Hermes Cloud, and hosted deployments. It aggregates major backend fixes and UI stabilizations from the preceding development cycle. No major breaking changes are officially noted in this patch, but users upgrading from older minor branches are advised to review the cumulative changes in the merged PRs.

---

### 3. Project Progress
The repository has processed significant updates today, with 1 PR merged/closed and numerous high-quality fixes advancing key features:
*   **Desktop Client Stabilization:** Fixes have been merged to forward `--profile` flags into packaged desktop launches ([#121523](https://github.com/NousResearch/hermes-agent/pull/121523)), restore per-connection tabs after backend switches ([#121983](https://github.com/NousResearch/hermes-agent/pull/121983)), and align renderer boot timeouts with backend port-announce deadlines ([#121420](https://github.com/NousResearch/hermes-agent/pull/121420)).
*   **Gateway and Messaging:** A key policy fix screens busy follow-ups before steering or queueing messages ([#121981](https://github.com/NousResearch/hermes-agent/pull/121981)), improving message delivery reliability.
*   **Core Architecture & State:** Progress has been made on Full-Text Search (FTS) schema integrity by avoiding implicit commits during DDL execution ([#121946](https://github.com/NousResearch/hermes-agent/pull/121946)) and adding retry logic for transient SQLite WAL setup failures ([#30700](https://github.com/NousResearch/hermes-agent/pull/30700)).
*   **Security & Dependencies:** Standard dependency hygiene was maintained with an `hpack` bump to v4.2.0 ([#121985](https://github.com/NousResearch/hermes-agent/pull/121985)).

---

### 4. Community Hot Topics
*   **The Nous Integration Blocker ([#88584](https://github.com/NousResearch/hermes-agent/issues/88584))):** With **139 comments**, this is the most active discussion. Users and automated systems are blocked on scheduled Nous-to-Enterkey merges due to conflicts in `cron/jobs.py`. This reflects a high demand for automated workflows and external tool integrations within the ecosystem.
*   **Session State & Desktop Attachments ([#106217](https://github.com/NousResearch/hermes-agent/issues/106217), [#103181](https://github.com/NousResearch/hermes-agent/issues/103181)):** Users are highly concerned with the reliability of resuming sessions across different clients (TUI vs. Desktop) and handling WebSocket reconnection flaps without losing background turns.

---

### 5. Bugs & Stability
Bugs reported or updated today, ranked by severity:

*   **P0 / Critical Core State:**
    *   *Mid-session route commit nulling system prompt ([#121840](https://github.com/NousResearch/hermes-agent/issues/121840)):* OPEN. Core agent bug causing warning logs and unnecessary system prompt rebuilds during model switches. **Status:** Needs architectural decision.
    *   *Windows shell hook blocking event loop ([#120356](https://github.com/NousResearch/hermes-agent/issues/120356)):* OPEN. Console-bearing launchers freeze the loop for 105s, causing the gateway to self-terminate.
*   **P2 / High Impact:**
    *   *CLI SIGTERM session ID loss ([#121890](https://github.com/NousResearch/hermes-agent/issues/121890)):* OPEN. Quiet one-shot mode loses session ID tracking on SIGTERM. A fix PR ([#121962](https://github.com/NousResearch/hermes-agent/pull/121962)) is currently open to publish the session ID earlier.
    *   *Systemd gateway update SIGKILL ([#107427](https://github.com/NousResearch/hermes-agent/issues/107427)):* OPEN. Messaging platform updates fail because the updater is killed by systemd during a restart sequence.
    *   *macOS Signing identity fallback ([#121857](https://github.com/NousResearch/hermes-agent/issues/121857)):* OPEN. Updates over SSH fail because the login keychain is locked, preventing ad-hoc code signing fallbacks.
*   **P3 / Localized Bugs:**
    *   *Local TTS Ogg/Vorbis degradation ([#84102](https://github.com/NousResearch/hermes-agent/issues/84102)):* OPEN. Local TTS outputs are incorrectly formatted as Vorbis instead of Opus, causing silent bubbles on messaging platforms.
    *   *Desktop file tree sticky state ([#108805](https://github.com/NousResearch/hermes-agent/issues/108805)):* OPEN. Windows desktop shows "No project open" per-session persistently.

---

### 6. Feature Requests & Roadmap Signals
*   **Signal Self-Message Handling ([#121970](https://github.com/NousResearch/hermes-agent/issues/121970)):** Users request an option to disable "Note to Self" message promotion to agent prompts when using linked secondary devices.
*   **Remote Audio Transcription ([#30702](https://github.com/NousResearch/hermes-agent/pull/30702)):** An active PR adding support for transcribing remote audio URLs directly via the STT tool, indicating a push toward richer multi-modal input handling.
*   **Custom Provider Namespace Isolation ([#109015](https://github.com/NousResearch/hermes-agent/pull/109015)):** An open PR enforcing strict routing for custom provider namespaces, showing a roadmap trend toward safer, collision-free multi-provider configurations.

---

### 7. User Feedback Summary
Users report significant friction when managing multi-profile Desktop environments, specifically around session ownership resolution (`SessionOwnerResolutionError`) when responding to blocking prompts across profiles ([#105469](https://github.com/NousResearch/hermes-agent/issues/105469), [#103755](https://github.com/NousResearch/hermes-agent/issues/103755)). Additionally, Windows-specific issues regarding update rollbacks due to antivirus rename locks ([#106821](https://github.com/NousResearch/hermes-agent/issues/106821)) and transcript rendering flicker during typing ([#107000](https://github.com/NousResearch/hermes-agent/issues/107000)) remain major pain points for the GUI experience.



</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



# PicoClaw Project Digest — 2026-09-25

---

## 1. Today's Overview

PicoClaw shows moderate activity with no new releases but a focused set of open pull requests and a pair of closely related bug reports. Eight PRs are open, five of which are dependency bumps from Dependabot, signaling routine maintenance. The most notable development is a duplicate bug report about multi-line input being split into separate messages in the Pico channel — one instance has been closed while a second remains open, suggesting the fix may be in progress or the issue has been triaged but not yet fully resolved. Overall project health appears stable, with no merged PRs or crashes reported in the last 24 hours.

---

## 2. Releases

No new releases were published in the last 24 hours. The project remains on its current published version without any version bump activity.

---

## 3. Project Progress

No pull requests were merged or closed in the last 24 hours. All eight PRs remain open, with five being automated dependency updates and three being feature or fix contributions:

| PR | Type | Summary |
|---|---|---|
| [#3389](https://github.com/sipeed/picoclaw/pull/3389) | Dependencies | Bump `golang.org/x/crypto` from 0.53.0 → 0.57.0 |
| [#3388](https://github.com/sipeed/picoclaw/pull/3388) | Dependencies | Bump `github.com/modelcontextprotocol/go-sdk` from 1.6.1 → 1.8.0 |
| [#3387](https://github.com/sipeed/picoclaw/pull/3387) | Dependencies | Bump `github.com/anthropics/anthropic-sdk-go` from 1.55.1 → 1.74.0 |
| [#3386](https://github.com/sipeed/picoclaw/pull/3386) | Dependencies | Bump `maunium.net/go/mautrix` from 0.27.0 → 0.31.0 |
| [#3385](https://github.com/sipeed/picoclaw/pull/3385) | Dependencies | Bump `github.com/line/line-bot-sdk-go/v8` from 8.20.1 → 8.22.0 |
| [#3381](https://github.com/sipeed/picoclaw/pull/3381) | Feature | Switch OpenAI provider to the Responses API |
| [#3376](https://github.com/sipeed/picoclaw/pull/3376) | Fix | Initialize DeltaChat as a custom channel to resolve config validation errors |
| [#3371](https://github.com/sipeed/picoclaw/pull/3371) | Feature | Add `opencode-go` provider with session header support |

---

## 4. Community Hot Topics

### 🔥 #3391 — [OPEN] Pico channel splits multi-line input into multiple messages
- **Author:** chentianxiong123 | **Created:** 2026-09-24
- **Link:** https://github.com/sipeed/picoclaw/issues/3391

### 🔥 #3390 — [CLOSED] Same bug, duplicate report
- **Author:** chentianxiong123 | **Created/Closed:** 2026-09-24
- **Link:** https://github.com/sipeed/picoclaw/issues/3390

**Analysis:** Both issues were filed by the same user within hours of each other, describing the identical problem: when pasting multi-line text (poetry, code blocks) into the Pico client mobile TUI, PicoClaw splits content on newlines and sends each line as a separate message. The closure of #3390 while #3391 remains open suggests the maintainers may have closed the first as a duplicate, or that a fix was applied to one instance but the issue persists in another context. The underlying need is clear — users expect paste operations to preserve message integrity, especially for code and formatted content. This is a UX regression that directly impacts the mobile TUI experience.

---

## 5. Bugs & Stability

### Ranked by Severity

| Rank | Issue | Severity | Status | Fix PR |
|---|---|---|---|---|
| 1 | **#3391** — Multi-line input split into multiple messages (Pico channel) | **High** — breaks core messaging UX on mobile TUI | Open | Unknown (duplicate #3390 closed) |
| 2 | **#3390** — Same bug, duplicate | **High** | Closed | Possibly addressed or triaged |

No crashes, regressions, or stability incidents were reported today. The DeltaChat config validation error referenced in PR #3376 appears to be addressed by that open PR, though it has not yet been merged.

---

## 6. Feature Requests & Roadmap Signals

No new feature requests were filed today. However, the open PRs provide signals about the project's near-term direction:

- **OpenAI Responses API migration** (PR #3381, stale): Indicates the project is modernizing its OpenAI integration to align with the newer Responses API, which may be a prerequisite for upcoming model features or tool-use improvements.
- **OpenCode Go provider** (PR #3371): Adds routing for `opencode-go` models with session header support, suggesting the project is expanding its multi-provider strategy to support alternative LLM backends beyond the major commercial APIs.
- **Dependency updates across the board**: Five Dependabot PRs touching crypto, MCP SDK, Anthropic SDK, Matrix SDK, and LINE SDK indicate the project is keeping pace with upstream security and feature updates. The MCP SDK bump (1.6.1 → 1.8.0) is particularly notable given the growing importance of tool/MCP integrations in agent frameworks.

These changes, once merged, would likely appear in the next minor or patch release.

---

## 7. User Feedback Summary

The only direct user feedback today came from **chentianxiong123**, who reported the multi-line paste splitting bug. The pain point is specific and actionable:

- **Use case:** Pasting poetry, code blocks, or any multi-line content into the mobile TUI.
- **Dissatisfaction:** The client silently fragments the input, destroying the semantic structure of the message.
- **Impact:** This is a daily-use blocker for mobile users who need to send structured or formatted content.

No satisfaction feedback, feature requests, or broader usage surveys were captured in the last 24 hours.

---

## 8. Backlog Watch

| Item | Age | Status | Concern |
|---|---|---|---|
| **PR #3381** (OpenAI → Responses API) | 8 days stale | Open, no recent activity | Strategic modernization; may block other OpenAI-related work |
| **PR #3376** (DeltaChat custom channel fix) | 15 days stale | Open, no recent activity | Blocks DeltaChat channel adoption; referenced issue #3265 may also be unresolved |
| **PR #3371** (opencode-go provider) | 17 days stale | Open, no recent activity | Expands provider ecosystem; no obvious urgency from maintainers |
| **Issue #3391** (multi-line paste bug) | 1 day | Open, duplicate of closed #3390 | High-severity UX bug; needs maintainer triage to determine if a real fix exists or if the closed issue was premature |

---

*Digest generated from GitHub API data for `sipeed/picoclaw` as of 2026-09-25. Activity window: last 24 hours.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



# NanoClaw Project Digest — 2026-09-25

## 1. Today's Overview
NanoClaw continues to show high development velocity, focusing heavily on system hardening, CI pipeline hygiene, and architectural parity for specialized hardware. The repository recorded 14 pull request updates (10 open, 4 closed) and 2 open issues, indicating a highly active maintenance cycle. Key efforts today were directed toward resolving arm64 compatibility issues with the Iron Proxy gateway and refining the setup and CLI tools. Overall project health is robust, characterized by rapid maintainer responsiveness and direct community contributions targeting critical operational bottlenecks.

## 2. Releases
*No new releases were published in the last 24 hours.*

## 3. Project Progress
The following PRs were merged or closed today, advancing key features and fixing stability issues:
*   **[CLOSED] Chat System Prompt Enhancement (#3890):** Added explanations for inbound message blocks (`<message>`, `<dm-history>`, etc.) in the chat system prompt, improving session context clarity for agents. ([PR #3890](https://github.com/nanocoai/nanoclaw/pull/3890))
*   **[CLOSED] Setup Flow Refinement (#3885):** Prevented setup from offering the Claude CLI installer to runs that fail before an agent runtime is chosen, streamlining the standard setup sequence. ([PR #3885](https://github.com/nanocoai/nanoclaw/pull/3885))
*   **[CLOSED] CLI Metadata Accuracy (#3882):** Updated `ncl approvals help` and `ncl dropped-messages help` to list every status and reason the host actually writes, fixing stale CLI documentation. ([PR #3882](https://github.com/nanocoai/nanoclaw/pull/3882))
*   **[CLOSED] Native Build Reliability (#3879):** Fixed `scripts/rebuild-native.mjs` to correctly detect a broken (not just missing) `better-sqlite3` native addon, boosting post-install rebuild stability. ([PR #3879](https://github.com/nanocoai/nanoclaw/pull/3879))

## 4. Community Hot Topics
While comment/reaction counts are low across the board, several architectural topics are driving significant discussion and development activity:
*   **Iron Proxy arm64 Compatibility (Issue #3888 / PR #3889 / PR #3891):** Users on aarch64 hosts (e.g., NVIDIA DGX Spark) face a critical `exec format error` because the Iron Control image is currently amd64-only. The underlying need is full multi-architectural parity for the security gateway layer on modern ARM-based hardware. ([Issue #3888](https://github.com/nanocoai/nanoclaw/issues/3888))
*   **WhatsApp Shared Mode Identity (PR #3509 / PR #3510):** Multiple agents sharing a single WhatsApp identity create confusion because replies default to a single install-wide name. The community needs clear per-agent sender labels so users can distinguish which agent responded. ([PR #3509](https://github.com/nanocoai/nanoclaw/pull/3509))
*   **Iron Proxy Auto-approval (Issue #3881):** Operators want lower-friction automation, specifically a per-host auto-approval rule so tool skills can call trusted hosts without requiring a manual card approval per request. ([Issue #3881](https://github.com/nanocoai/nanoclaw/issues/3881))

## 5. Bugs & Stability
*   **HIGH SEVERITY: Iron Proxy arm64 Installation Failure (Issue #3888):** The container dies immediately on aarch64 hosts due to an amd64-only binary. **Status:** Active fix proposed in PR #3891 ("fix(iron-proxy): run Iron Control on arm64 hosts"), alongside database recovery fixes in PR #3883. ([Issue #3888](https://github.com/nanocoai/nanoclaw/issues/3888))
*   **MEDIUM SEVERITY: CI Timing Flakes (PR #3887):** Readiness probes clipped to the deadline and un-budgeted delivery-poll drain tests caused flaky behavior on loaded CI runners. **Status:** Fix PR open (#3887) to budget the drain test and stop clipping probes. ([PR #3887](https://github.com/nanocoai/nanoclaw/pull/3887))
*   **LOW SEVERITY: CLI Help Enum Errors (PR #3889 / #3882):** The CLI listed non-existent approval reasons (`unknown_sender_public`). **Status:** Fixed in closed PR #3882, further refined in open PR #3889. ([PR #3889](https://github.com/nanocoai/nanoclaw/pull/3889))
*   **LOW SEVERITY: Heartbeat Timeout during Claude Streams (PR #3893):** Long streaming blocks from Claude could trigger a host sweep mid-generation because the container heartbeat timed out. **Status:** Fix PR open (#3893) to keep the heartbeat alive during long blocks. ([PR #3893](https://github.com/nanocoai/nanoclaw/pull/3893))

## 6. Feature Requests & Roadmap Signals
*   **Per-Host Auto-Approval Rules (Issue #3881):** A highly requested feature to whitelist trusted domains for automated tool calls, bypassing manual approval cards.
*   **Multi-Architecture Support (Issue #3888):** Full arm64 support for the Iron Control gateway is a critical roadmap signal for enterprise hardware adoption (e.g., Apple Silicon, NVIDIA DGX).
*   **CI Release Note Enforcement (PR #3886):** A new CI check requiring a `release-note` block or a "no-change" box in PR descriptions to automate changelog generation.
*   *Prediction:* The next minor release is highly likely to feature robust arm64 Iron Proxy support, improved multi-agent identity management for WhatsApp shared mode (once PRs #3509/#3510 are merged

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>



# NullClaw Project Digest — 2026-09-25

## 1. Today's Overview
NullClaw shows high development activity with 25 PRs updated and 12 issues processed in the last 24 hours. The repository is dominated by documentation improvements, bug fixes, and memory management enhancements, primarily driven by contributor `vernonstinebaker`. No new releases were published today, but the volume of merged/closed PRs (8) indicates steady progress on stability and quality-of-life features. The project appears healthy, with active maintenance and responsive issue handling.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Project Progress
Today saw 8 PRs merged or closed, focusing on critical fixes and documentation:
- **PR #1006**: Fixed a CLI streaming bug where stdout was overwritten at offset zero, causing corrupted first lines on macOS.
- **PR #1005**: Resolved a memory recall bug where archived conversation shards were incorrectly injected into live turns.
- **PR #1004**: Enhanced provider error logging to include scrubbed response bodies, aiding debugging for issues like ollama tool incompatibility.
- **PR #1003**: Added support for symlinked skill directories, directly addressing issue #995.
- **PR #1002**: Restored a critical stack size fix for the Discord typing thread, preventing TLS-related crashes.
- **PR #1001**: Re-implemented configurable memory controls (`auto_recall`, `recall_limit`, `max_context_bytes`) after the original PR's fork was deleted.
- **PR #996**: Bounded stdio MCP response waits with timeouts and proper cleanup, fixing issue #991.
- **PR #986**: Made the SQLite memory database path configurable via `memory.database_path`.

Several documentation PRs (#1008, #1007, #777, #776, #775, #774) were also merged, significantly improving the project's guides for MCP, subagents, voice, and hardware.

## 4. Community Hot Topics
The most engaged issues today were:
- **Issue #867** ([CLOSED] Provide a fully working example config.json file) — 3 👍, 1 comment. Users strongly requested a well-documented, functional configuration example, highlighting onboarding pain.
- **Issue #631** ([CLOSED] [enhancement] add GET /status endpoint for agent monitoring) — 1 👍, 3 comments. The need for programmatic agent state observation is clear for external monitoring and dashboards.
- **Issue #1000** ([OPEN] [enhancement] ollama incompatibility notification) — 3 comments. Users are frustrated by opaque error messages when ollama models don't support tools, requiring packet captures to diagnose.
- **Issue #995** ([OPEN] [enhancement] Support Skills Symlinks) — 1 comment. Directly addressed by PR #1003, showing effective issue-PR linkage.

## 5. Bugs & Stability
All reported bugs today were closed, with fix PRs either merged or in flight:
- **Critical**: SIGSEGV on Telegram inbound messages (#976) — Fixed by increasing thread stack size.
- **High**: Gateway 100% CPU busy loop on WSL2 (#870) — Closed, likely addressed in a release.
- **High**: MCP stdio calls hanging behind Proxmox launcher lock (#991) — Fixed by PR #996 with timeout and process group termination.
- **Medium**: web_search impractical on low-resource devices (#871) — Closed, but the core limitation (no direct DuckDuckGo support) likely persists.
- **Medium**: Discord typing thread crash on heavy TLS operations (#978) — Fixed by PR #1002, restoring the 2 MiB stack size.

No open bugs with critical severity were reported today.

## 6. Feature Requests & Roadmap Signals
Key open feature requests that may influence the next version:
- **Ollama Incompatibility Notification (#1000)**: Adding a clear notification when ollama models lack tool support would greatly improve UX. Likely to be a quick win.
- **Skills Symlinks (#995)**: Now implemented via PR #1003, this will be in the next release.
- **Vision Pipeline (#624)**: Request to send images/files directly to multimodal LLMs. This is a significant enhancement with growing relevance.
- **Subagent Spawn (#190)**: Long-standing question about inter-agent communication with different providers. No activity, but signals architectural curiosity.
- **Configurable Memory Controls (#1001)**: Now implemented, providing users fine-grained control over memory injection.

## 7. User Feedback Summary
Users are vocal about:
- **Configuration complexity**: The default `config.json` is considered "crippled" (#867), making onboarding difficult.
- **Debugging difficulty**: Opaque errors from providers like ollama (#1000) and missing logs for non-2xx responses (#1004) are pain points.
- **Resource constraints**: The web_search limitation on low-resource devices (#871) reflects a core use case for NullClaw.
- **Monitoring gaps**: The lack of a `/status` endpoint (#631) forces users to rely on CLI tools for agent state.

## 8. Backlog Watch
- **Issue #190** (Subagent spawn): Open since March 2026 with 4 comments. Asks about multi-agent communication with different providers. No recent activity, but indicates long-term architectural interest.
- **Issue #495** (Local web channel with tunnels): Asks about using CloudFlare/nginx with NullClaw. 3 comments, no recent activity. Reflects a common deployment pattern.
- **PR #411** (Tool customization system): Closed but massive in scope (trigger-based prioritization, parameter management). Could be a roadmap signal for advanced tooling.
- **PR #319** (DingTalk support): Closed but implements official API integration with OAuth2 and message recall. Shows platform expansion interest.

---

*Digest generated from GitHub data for `nullclaw/nullclaw` as of 2026-09-25. All links point to the referenced issues and PRs.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



Based on the GitHub activity for **IronClaw** (`nearai/ironclaw`) as of **2026-09-25**, here is the structured project digest analyzing the repository's status, releases, progress, and community focus.

---

### 1. Today's Overview
IronClaw is currently in a stable, maintenance-heavy release preparation phase, specifically focusing on the rollout of the `v1.4.1-rc.2` release candidate. Activity over the last 24 hours has been moderate and highly focused on operational excellence: one release candidate was cut, one automated infrastructure PR was opened, and a daily benchmark tracking issue was logged to analyze model performance. Overall project health appears robust, characterized by proactive security dependency patching and systematic performance tracking.

---

### 2. Releases
*   **ironclaw-v1.4.1-rc.2** (Released on 2026-09-24)
    *   **Overview:** This is the second patch candidate over `1.4.0`, carrying the same core fix as RC1. 
    *   **Key Changes:**
        *   **Google Extensions OAuth Web UI Integration:** Operators can now activate Google extensions (Gmail, Google Calendar) on a deployment by supplying the Google OAuth client directly through the Web UI, removing the previous hard requirement to configure this via environment variables.
        *   **Security Patching:** The lockfile has been refreshed to patched versions of `wasmtime 47.0.4` and `rustls 0.23.45`, aligning the runtime environment with the current security advisory database.
    *   **Breaking Changes & Migration Notes:** No major breaking changes are documented. Since this is a release candidate (RC), production users should test stability before deploying to critical environments.

---

### 3. Project Progress
No pull requests were merged or closed in the last 24 hours, but key development milestones were advanced via two open PRs:
*   **Release Engineering (PR #8110):** Promotes the release branch from `1.4.1-rc.1` to `1.4.1-rc.2`, locking in the Google OAuth fix and the critical WebAssembly/Rust runtime security patches. ([View PR #8110](https://github.com/nearai/ironclaw/pull/8110))
*   **Developer Infrastructure (PR #7988):** A nightly automated workflow PR that refreshes the committed codebase-memory bootstrap snapshot to keep developer tooling and knowledge graphs aligned with the current default branch. ([View PR #7988](https://github.com/nearai/ironclaw/pull/7988))

---

### 4. Community Hot Topics
While comment and reaction counts are low (typical for automated or release engineering tasks), the newly opened issue highlights the core focus of the testing suite:
*   **Benchmark Performance Auditing (Issue #8111):** Opened by `pranavraja99`, this issue tracks the "Daily ironclaw failure taxonomy." It isolates 38 non-passing tasks in the `officeqa` benchmark suite, classifying them as genuine model-quality limitations of the `deepseek-v4-flash` model over OCR-digitized Treasury documents. ([View Issue #8111](https://github.com/nearai/ironclaw/issues/8111))
*   **Underlying Needs:** The community is actively focusing on multi-modal and OCR-heavy enterprise use cases. There is a clear operational need to separate pure software execution failures from intrinsic model-quality limits to guide model selection and agent orchestration improvements.

---

### 5. Bugs & Stability
*   **Reported Crashes/Regressions:** No active software crashes or regressions were reported today.
*   **Identified Performance Bottlenecks (Issue #8111):** The `officeqa` benchmark suite highlights systematic limitations when processing OCR-digitized documents. While not a software crash, it represents a stability/accuracy bottleneck for users relying on document parsing.
*   **Fix PRs:** The primary bug fix is the Google OAuth deployment issue, resolved in the `1.4.1-rc.2` candidate (PR #8110), which fixes a configuration blocker for users deploying Google integrations without environment variables.

---

### 6. Feature Requests & Roadmap Signals
*   **Web UI Configuration for Integrations:** The update in `v1.4.1-rc.2` signals a roadmap prioritizing zero-environment-variable deployment configurations, allowing dynamic operator-side OAuth client injection through the dashboard.
*   **Benchmark-Driven Model Optimization:** The daily failure taxonomy issue (#8111) acts as a roadmap signal for the engineering team to optimize agent orchestration, specifically focusing on OCR document parsing and multi-modal model integrations (like `deepseek-v4-flash`) to push the `officeqa` benchmark pass rate past its current ceiling.

---

### 7. User Feedback Summary
*   **User Pain Points:** Operators previously faced deployment friction when injecting Google OAuth credentials dynamically in restricted environments where environment variables are not viable. This has been mitigated in the latest RC.
*   **Use Cases:** Enterprise document processing (specifically OCR-digitized financial/Treasury documents) remains a primary use case where users expect high accuracy. The current 38 failing benchmark tasks highlight a gap between raw model capability and the strict accuracy required by enterprise compliance workflows.
*   **Satisfaction:** The project maintains a highly disciplined, security-first posture. Proactive patching of runtime dependencies like `wasmtime` and `rustls` shows a strong commitment to maintaining a secure sandboxed environment for AI agents.

---

### 8. Backlog Watch
*   **Automated Maintenance Review:** PR #7988 (the nightly codebase knowledge graph refresh) represents a recurring automated chore. Maintainers should ensure this is merged smoothly to avoid developer onboarding friction.
*   **Benchmark Automation:** Issue #8111 ("Daily ironclaw failure taxonomy") is highly manual. Maintainers should watch for the potential conversion of this daily reporting task into automated CI benchmark pipelines to reduce manual overhead and track trends over time.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



# LobsterAI Project Digest: 2026-09-25

An objective, data-driven analysis of the LobsterAI (`netease-youdao/LobsterAI`) repository activity based on data updated through 2026-09-24.

---

### 1. Today's Overview
LobsterAI exhibits high development velocity and active maintenance, with 50 pull requests updated (46 merged/closed, 4 open) and 18 issues updated (16 closed, 2 open) in the last 24 hours. The project is currently in a stabilization and release preparation phase, focusing heavily on critical OpenClaw integration fixes, UI

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

The user wants a project digest for the CoPaw repository (github.com/agentscope-ai/CoPaw) based on the provided GitHub data, dated 2026-09-25. The digest should follow a specific structure with eight sections.

Let's carefully analyze the provided data and construct the digest.

### Data Overview:
- Date: 2026-09-25 (based on the prompt's date "2026-09-25", and the data updated up to "2026-09-24").
- Issues updated in last 24h: 34 (open/active: 18, closed: 16)
- PRs updated in last 24h: 23 (open: 17, merged/closed: 6)
- New releases: 0

### Latest Issues (Total: 34 items; showing top 30 by comment count):
Let's list the relevant issues with their key details:
- **#7318** [OPEN] [question] [Discussion] QwenPaw Hub, the multi-tenant edition, released in 2.2.0: what should we build next? / QwenPaw 多租户版 Hub 已于 2.2.0 推出：你希望我们接下来做什么？
  - Author: rayrayraykk | Created: 2026-08-26 | Updated: 2026-09-24 | Comments: 32 | 👍: 4
  - Summary: Discussion on future direction of QwenPaw Hub (multi-tenant edition). High engagement (32 comments, 4 likes).
- **#4474** [CLOSED] [question] [Question]: 现在支持chatgpt-5.5吗？
  - Author: jiang-zhong-xi | Created: 2026-05-18 | Updated: 2026-09-24 | Comments: 9 | 👍: 0
  - Summary: Asking if ChatGPT-5.5 is supported.
- **#7571** [OPEN] [question] [Question]: 总是记不住，还是会遗忘。
  - Author: xiaohushi512 | Created: 2026-09-05 | Updated: 2026-09-24 | Comments: 8 | 👍: 0
  - Summary: User reporting agent memory issues (forgetfulness) during plugin development across paths A, B, and C.
- **#7576** [CLOSED] [Bug] RetryChatModel hardcoded 32768 context_size fallback causes CONTEXT_UNFIT (>31130 tokens) for all models
  - Author: aimastertoast | Created: 2026-09-05 | Updated: 2026-09-24 | Comments: 6 | 👍: 0
  - Summary: Hardcoded context size fallback causing token overflow errors.
- **#7628** [OPEN] [enhancement] [Bug] Context compaction can still exceed the complete provider request budget and fail active turns
  - Author: elain0205 | Created: 2026-09-08 | Updated: 2026-09-24 | Comments: 6 | 👍: 0
  - Summary: Context compaction improvements needed to align with provider request budgets.
- **#4244** [CLOSED] Bug: shell_evasion_checks.newlines=True silently blocks multiline commands, causing agent thought chain chaos
  - Author: liulisky | Created: 2026-05-12 | Updated: 2026-09-24 | Comments: 6 | 👍: 0
  - Summary: Multiline shell commands being silently blocked.
- **#4227** [CLOSED] [bug] [Bug]: 【严重】当stream_http模式的mcp调用的目标返回401时，整个mcp调用会堵塞直到超时，目前看代码除了404以外其他报错码也会有问题
  - Author: cavion | Created: 2026-05-12 | Updated: 2026-09-24 | Comments: 6 | 👍: 0
  - Summary: MCP streamable_http blocking on 401 errors.
- **#7377** [OPEN] [question] [Question]: Agent Loop mode configuration not persisted across task runs in v2.1.0 console
  - Author: fzm1994 | Created: 2026-08-28 | Updated: 2026-09-24 | Comments: 5 | 👍: 0
  - Summary: Loop mode configuration resets to default after task completion.
- **#7715** [OPEN] [bug] [Bug]:Daily Paper fails silently when arxiv.org is unreachable — no proxy/endpoint config, error message hides real cause
  - Author: PTW1981 | Created: 2026-09-12 | Updated: 2026-09-24 | Comments: 4 | 👍: 0
  - Summary: Daily Paper plugin fails silently due to network errors without clear diagnostics.
- **#7534** [OPEN] [BUG] QwenPaw feishu session: queue consumer stays alive & stuck -> session silently unresponsive; new messages can't spawn a new consumer
  - Author: feng183043996 | Created: 2026-09-03 | Updated: 2026-09-24 | Comments: 4 | 👍: 0
  - Summary: Feishu (Lark) session consumer thread gets stuck on high-priority messages, paralyzing the chat session.
- **#5856** [OPEN] [bug] [Bug]: Tool_call structure lost during context compaction, causing 400 errors / message count mismatch
  - Author: quanrennsxsb | Created: 2026-07-08 | Updated: 2026-09-24 | Comments: 4 | 👍: 0
  - Summary: Tool call structures lost during context compaction, leading to API 400 errors.
- **#2967** [CLOSED] [bug] [Bug]: execute_shell_command may bypass File Guard
  - Author: jerry78424 | Created: 2026-04-05 | Updated: 2026-09-24 | Comments: 4 | 👍: 0
  - Summary: Security vulnerability where shell command execution bypasses file guards.
- **#7856** [CLOSED] [bug] [Bug]: qwenpaw-pet 0.1.1 breaks QwenPaw 2.2.2b2 tool approvals by dropping the `actor` argument
  - Author: samluoabc | Created: 2026-09-18 | Updated: 2026-09-24 | Comments: 3 | 👍: 0
  - Summary: Compatibility issue between `qwenpaw-pet` plugin and tool approvals.
- **#7733** [OPEN] [enhancement] [Feature]: Agent-autonomous context management — a smooth handover across context eviction
  - Author: MCQSJ | Created: 2026-09-13 | Updated: 2026-09-24 | Comments: 3 | 👍: 0
  - Summary: Feature request for agent-autonomous context management during token eviction.
- **#5900** [CLOSED] [enhancement] [Feature]: MCP streamable_http session terminated — no auto-reconnect, client permanently skipped
  - Author: feng183043996 | Created: 2026-07-09 | Updated: 2026-09-24 | Comments: 3 | 👍: 0
  - Summary: Lack of auto-reconnect for MCP streamable_http sessions.
- **#1452** [CLOSED] [question] [Question]: 请教DOCKER部署的连接局域网ollamam的大模型联网功能
  - Author: wylgl | Created: 2026-03-13 | Updated: 2026-09-24 | Comments: 3 | 👍: 0
  - Summary: Query about connecting Docker-deployed Ollama to the internet/search features.
- **#7850** [OPEN] [bug] [Bug]: Driver card policy lost update: background `reload_driver` re-saves a stale card, clobbering a concurrent policy write
  - Author: LUOSENGWA | Created: 2026-09-18 | Updated: 2026-09-24 | Comments: 2 | 👍: 0
  - Summary: Race condition in driver card policy updates.
- **#7767** [OPEN] Bug reports from a guardrail-plugin build: console attachment stale blob, one-shot cron misfire drop, console tail-drop, on_acting never fires
  - Author: BasilLei | Created: 2026-09-14 | Updated: 2026-09-24 | Comments: 2 | 👍: 0
  - Summary: Multiple bugs in guardrail plugins (stale console attachments, cron misfires, etc.).
- **#7836** [OPEN] [Bug]: scroll eviction drops a user turn that sits inside a tool-heavy span — the live window loses the request while history.db keeps it
  - Author: chcsyf | Created: 2026-09-17 | Updated: 2026-09-24 | Comments: 2 | 👍: 1
  - Summary: Scroll eviction drops user turns inside tool-heavy spans.
- **#7857** [OPEN] [Bug]: ACP shutdown fallback can silently skip session cleanup and leak its event loop
  - Author: mango8853 | Created: 2026-09-18 | Updated: 2026-09-24 | Comments: 2 | 👍: 0
  - Summary: Event loop leak during ACP shutdown fallback.
- **#7968** [CLOSED] Console sidebar redesign (v2.2.2b3) broke chat group/folder feature — cannot create or view groups
  - Author: Dingyi-lol | Created: 2026-09-24 | Updated: 2026-09-24 | Comments: 2 | 👍: 0
  - Summary: Regression in v2.2.2b3 breaking chat groups/folders. (Likely addressed by PR #7972 or others, but let's check PRs).
- **#7966** [OPEN] Session permanently broken after provider switch: file:// media URLs in history rejected with invalid_parameter_error
  - Author: Dingyi-lol | Created: 2026-09-24 | Updated: 2026-09-24 | Comments: 2 | 👍: 0
  - Summary: Session breakage after provider switch due to local file media URL rejection.
- **#7957** [OPEN] [enhancement] [Feature]: Recommendation: It is possible to manually deactivate/disable the existence of pre-made models and channels
  - Author: dylanleesky | Created: 2026-09-23 | Updated: 2026-09-24 | Comments: 2 | 👍: 0
  - Summary: Request to disable pre-made models and channels.
- **#5558** [CLOSED] [enhancement] [Feature] 企业微信端上传附件后发送按钮仍置灰，期望无文字也能发送
  - Author: mynameyi | Created: 2026-06-26 | Updated: 2026-09-24 | Comments: 2 | 👍: 0
  - Summary: Wecom attachment send button remains greyed out without text. (Likely addressed by PR #5659).
- **#7959** [OPEN] [bug] [Bug]: Moonshot (kimi-k3) rejects MCP tool schemas with untyped anyOf unions: "properties.freq: type is not defined"
  - Author: Moonlit-Pages | Created: 2026-09-23 | Updated: 2026-09-24 | Comments: 2 | 👍: 0
  - Summary: Moonshot API rejecting MCP tool schemas with untyped `anyOf` unions. (Addressed by PR #7962).
- **#7943** [OPEN] [bug] [Bug]: Windows sandbox ACL on a drive-root workspace can lock the volume
  - Author: hxnan | Created: 2026-09-22 | Updated: 2026-09-24 | Comments: 2 | 👍: 0
  - Summary: Windows sandbox ACL locking up entire volume if workspace is at root.
- **#4450** [CLOSED] [Feature] Simplify approval commands: short aliases + session/always scopes
  - Author: xielevi | Created: 2026-05-16 | Updated: 2026-09-24 | Comments: 1 | 👍: 0
  - Summary: Simplify approval commands.
- **#7976** [OPEN] [Feature]: Official QwenPaw mobile app / 希望尽快推出官方移动端
  - Author: Fugitive844 | Created: 2026-09-24 | Updated: 2026-09-24 | Comments: 1 | 👍: 0
  - Summary: Request for an official mobile app (Android/iOS).
- **#7963** [OPEN] [bug] [Bug]: Langfuse tool observation never records tool output (output update skipped by coordinator short-circuit)
  - Author: 96loveslife | Created: 2026-09-24 | Updated: 2026-09-24 | Comments: 1 | 👍: 0
  - Summary: Langfuse tool observations missing output data. (Addressed by PR #7964).
- **#2013** [CLOSED] [question] [Question]: 是不是不能两个智能体都设置2个相同频道的机器人
  - Author: frank0900k | Created: 2026-03-21 | Updated: 2026-09-24 | Comments: 1 | 👍: 0
  - Summary: Query about running multiple robots on the same channel.

### Latest Pull Requests (Total: 23 items; showing top 20 by comment count):
Let's list the relevant PRs:
- **#7500** [OPEN] fix(providers): forward OpenAI extra_headers during connection testing
  - Author: wangfei010313 | Created: 2026-09-02 | Updated: 2026-09-24
  - Summary: Propagates `extra_headers` for OpenAI-compatible providers.
- **#7972** [CLOSED] fix(console): default session list grouping to source
  - Author: zhijianma | Created: 2026-09-24 | Updated: 2026-09-24
  - Summary: Switched default sidebar session grouping from `date` to `source`. Follow-up to #7968.
- **#7971** [CLOSED] fix(console): gate tool-call lifecycle queries on execution start
  - Author: zhijianma | Created: 2026-09-24 | Updated: 2026-09-24
  - Summary: Prevents premature polling of tool-call status before execution starts.
- **#7785** [OPEN] feat(voice): add realtime voice chat
  - Author: jinglinpeng | Created: 2026-09-15 | Updated: 2026-09-24
  - Summary: Adds provider-configurable real-time voice chat with speech input, playback, and interruption.
- **#7973** [OPEN] fix(agents): recover from rejected media URLs
  - Author: yang0228 | Created: 2026-09-24 | Updated: 2026-09-24
  - Summary: Recovers agent loops from permanent failures when providers reject media URLs with HTTP 400. (Likely relates to #7966).
- **#7975** [OPEN] [first-time-contributor] fix(plugins): do not count a disabled plugin dir as installed
  - Author: lihongyuan99 | Created: 2026-09-24 | Updated: 2026-09-24
  - Summary: Fixes plugin catalog scanning to ignore disabled plugin directories.
- **#7974** [OPEN] [first-time-contributor] fix(wechat): bound QR login waiting by real time instead of poll count
  - Author: lihongyuan99 | Created: 2026-09-24 | Updated: 2026-09-24
  - Summary: Fixes WeChat QR login timeout logic to use wall-clock time instead of poll counts.
- **#7970** [OPEN] [first-time-contributor] fix(browser): reject a module-level return inside finally
  - Author: lihongyuan99 | Created: 2026-09-24 | Updated: 2026-09-24
  - Summary: Prevent

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



Based on the GitHub activity for the ZeroClaw repository leading up to **2026-09-25**, here is the structured project digest.

---

### 1. Today's Overview
ZeroClaw is experiencing an exceptionally high level of development activity, characterized by major architectural pushes, security hardening, and CI/CD optimization. Over the last 24 hours, the repository saw **26 updated issues** (23 open/active, 3 closed) and **50 updated pull requests** (42 open, 8 merged/closed). The dominant theme of this cycle is the consolidation of the **SOP (Standard Operating Procedures) agent execution engine**, alongside significant progress on the **OIDC authentication milestone** and the

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*