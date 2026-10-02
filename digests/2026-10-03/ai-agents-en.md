# OpenClaw Ecosystem Digest 2026-10-03

> Issues: 483 | PRs: 500 | Projects covered: 13 | Generated: 2026-10-02 22:16 UTC

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



# OpenClaw Project Digest — 2026-10-03

---

## 1. Today's Overview

OpenClaw remains highly active, with **483 issues and 500 PRs updated in the last 24 hours** (322 open issues, 307 open PRs). The project shipped **two gateway-only `extended-stable` releases** (v2026.8.34 and v2026.8.35) carrying critical security patches, reliability fixes, and new model support. Activity is dominated by stability hardening around the Gateway core, memory/dreaming subsystem correctness, and plugin runtime hygiene — particularly the `prepared-model-catalog` worker leaking memory and pinning CPU. The community is intensely focused on crash-loop regressions introduced in the 2026.9.x series, with several P0/P1 bugs still lacking fix PRs.

---

## 2. Releases

### v2026.8.35 — `extended-stable` (Gateway-only)
- **Type:** Gateway-only `extended-stable` (LTS equivalent), based on OpenClaw from late August 2026.
- **Contents:** Critical security updates, reliability and performance fixes, new model support.
- **Breaking changes:** None documented; gateway-only scope limits blast radius.
- **Migration notes:** None required beyond standard `npm install -g openclaw@2026.8.35`.

### v2026.8.34 — `extended-stable` (Gateway-only)
- **Type:** Gateway-only `extended-stable`, same August 2026 base.
- **Contents:** Critical security updates, reliability/performance fixes, new model support.
- **Relationship to .35:** Superseded by .35; users should migrate to the later patch.

**Assessment:** Both releases are conservative, low-risk LTS-style drops. The real development velocity is on the `main` branch targeting 2026.9.x fixes, which explains why these August-based releases are still being cut — they serve as safe harbor for production deployments while the 2026.9.x line is stabilized.

---

## 3. Project Progress

### Merged/Closed PRs Today (193 total merged or closed)

Key merged/closed PRs that advanced features or fixed bugs:

| PR | Area | What Advanced |
|---|---|---|
| [#110438](https://github.com/openclaw/openclaw/pull/110438) | Feeds | Local marketplace watches — signed feeds can now be durably watched |
| [#110250](https://github.com/openclaw/openclaw/pull/110250) | Feeds | Signed sharded catalog consumer |
| [#113333](https://github.com/openclaw/openclaw/pull/113333) | Feeds | Signed incremental change consumer |
| [#109305](https://github.com/openclaw/openclaw/pull/109305) | Feeds | Search and follow signed publisher feeds |
| [#109461](https://github.com/openclaw/openclaw/pull/109461) | Feeds | Refresh and manage followed publishers |
| [#109584](https://github.com/openclaw/openclaw/pull/109584) | Feeds | Publisher following Control UI |
| [#161953](https://github.com/openclaw/openclaw/issues/161953) | Windows | Fixed `sessions.create` failure on Windows 2026.9.7 (SQLite path leak) |
| [#159514](https://github.com/openclaw/openclaw/issues/159514) | Catalog Worker | Fixed catalog worker rebuilding discovery registry on every request |
| [#108075](https://github.com/openclaw/openclaw/issues/108075) | LLM Provider | Resolved provider request schema rejection on 2026.7.1 |
| [#108182](https://github.com/openclaw/openclaw/issues/108182) | Control UI | Partially addressed Control UI navigation regressions |
| [#111519](https://github.com/openclaw/openclaw/issues/111519) | Telegram | Fixed DM reply fallback after stale DM-scope cleanup |
| [#84242](https://github.com/openclaw/openclaw/issues/84242) | Memory (LanceDB) | Exposed `memory_store`, `memory_recall`, `memory_forget` as callable agent tools |

**Notable pattern:** The signed-feeds feature stack (6 PRs) appears to have completed a major milestone. On the stability side, several 2026.9.x regressions received fixes, though many more remain open.

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

**#116201 — Realtime voice work can retain unbounded provider and consult state** (59 comments)
- [Link](https://github.com/openclaw/openclaw/issues/116201)
- **Underlying need:** Realtime voice sessions lack hard ownership bounds. Under slow/stalled/bursty provider behavior, superseded consult work, large provider frames, and pre-ready audio accumulate without eviction. Users report resource exhaustion in long-running voice sessions. This is a **platinum-tier** issue with session-state impact.

**#102175 — Embedded prompt cache breaks across room-event, policy, and Responses boundaries** (21 comments)
- [Link](https://github.com/openclaw/openclaw/issues/102175)
- **Underlying need:** Long-lived embedded sessions lose provider prompt-cache reuse when turns cross room-event delivery, authorization, queue, compaction, recovery, or native Responses continuation boundaries. The model-visible tool inventory changes between turns (observed at 44+ tools), destroying cache efficiency and inflating latency and cost. This is a **security- and performance-critical** regression.

**#139710 — Mid-turn plugin-generation supersede kills system-agent turn and its planner fallback** (18 comments)
- [Link](https://github.com/openclaw/openclaw/issues/139710)
- **Underlying need:** An MCP config hot reload (plugin-generation supersede) landing mid-turn kills both the system-agent turn and its planner fallback simultaneously. The resulting user-facing error falsely claims the inference route is unreachable, and the suggested remedy (`openclaw onboard`) is misleading. Users need graceful handling of mid-turn plugin changes.

**#38327 — "Cannot convert undefined or null to object" in 2026.3.2 with google-vertex/gemini-3.1-pro-preview** (17 comments)
- [Link](https://github.com/openclaw/openclaw/issues/38327)
- **Underlying need:** After updating to 2026.3.2, any message causes embedded agent failure with a cryptic null-conversion error when using Google Vertex with Gemini 3.1 Pro Preview. This is a **P0 regression** with `ux-release-blocker` impact. Despite being filed in March, it remains open and unmaintained — a sign of chronic triage backlog.

**#97616 — OpenClaw leaks unreaped hook/tool child processes** (16 comments)
- [Link](https://github.com/openclaw/openclaw/issues/97616)
- **Underlying need:** Hook and tool execution leaks child processes (`openclaw-hooks`, `bash`, `codex`) that accumulate as zombies under the main `openclaw` process. Over time this degrades runtime performance and can exhaust PID tables. This is a **crash-loop and message-loss** risk.

---

## 5. Bugs & Stability

### P0 / Critical (release-blocking)

| Issue | Description | Fix PR? |
|---|---|---|
| [#160521](https://github.com/openclaw/openclaw/issues/160521) | Gateway crash: state DB read-admission seal → "Worker environment inventory has closed" → unhandled rejection in `reconcileActive` | ❌ None |
| [#162031](https://github.com/openclaw/openclaw/issues/162031) | 2026.9.7 gateway crash-loops with `Unhandled promise rejection: undefined` during runtime tool assembly | ❌ None

---

## Cross-Ecosystem Comparison



### 1. Ecosystem Overview

The open-source personal AI assistant and agent ecosystem is experiencing a period of intense, rapid iteration and architectural refinement. Projects are aggressively tackling stability issues—particularly around crash-loops, resource management (memory/CPU leaks), and update reliability—while simultaneously pushing forward complex feature sets like multi-modal support, real-time voice, and advanced tool-use protocols (e.g., MCP). There is a clear trend toward enterprise-grade hardening, with a focused effort on security (token encryption, command injection prevention), resource isolation (subprocess watchdogs, memory limits), and scalability (database write safety, prompt caching). The community is highly engaged, with top projects seeing dozens of PRs and issues updated daily, reflecting a maturing but still fast-moving landscape where stability often lags behind feature velocity.

---

### 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Release Status (24h) | Health Score & Assessment |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 483 | 500 | 2 `extended-stable` releases (v2026.8.34, .35) | **High**. Massive scale, intense focus on stability and LTS releases. |
| **ZeroClaw** | 50 | 50 | None | **Very High**. Exceptional velocity, highly structured maintainer coordination. |
| **NanoClaw** | 50 | 32 | None | **Moderate-High**. Rapid development, but update mechanism reliability is a concern. |
| **NanoBot** | 6 | 37 | None | **High**. Strong developer engagement, quick response to user-reported bugs. |
| **CoPaw** | 10 | 11 | None | **High**. Robust UI/UX focus, active community contributor base. |
| **LobsterAI** | Low (Security focus) | 3 (Closed/Open) | None | **Moderate**. Active security hardening, but database reliability is a major risk. |
| **PicoClaw** | 3 | 4 | None | **Moderate-Low**. Maintenance phase; stale PRs indicate a maintainer bottleneck. |
| *Others (NullClaw, IronClaw, etc.)* | 0 | 0 | None | **Low**. No activity in the last 24 hours. |

---

### 3. OpenClaw's Position

OpenClaw acts as the massive, central reference point of the ecosystem, akin to a "Linux distribution" of AI agents—large, highly governed, with extended-stable releases for production safety while the main branch innovates rapidly.

*   **Advantages vs. Peers:** Largest community and activity footprint (483 issues/500 PRs). Strong focus on formalized release channels

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

The user wants a project digest for the NanoBot repository (github.com/HKUDS/nanobot) based on the provided GitHub data, structured in a specific way. The date is 2026-10-03.

Let's carefully analyze the data provided:

### Data Overview
- Issues updated in last 24h: 6 (open/active: 5, closed: 1)
- PRs updated in last 24h: 37 (open: 29, merged/closed: 8)
- New releases: 0

### Latest Releases
None

### Latest Issues (Total: 6 items)
1. #5898 [OPEN] [bug] gpt-6 model series through Github Copilot
   - Author: gqcao | Created: 2026-09-24 | Updated: 2026-10-02 | Comments: 4 | 👍: 0
   - Summary: Version v0.3.5 does not support OpenAI 6 model series through GitHub Copilot. Error: "Mode provider request failed..."
2. #6002 [OPEN] `reasoningEffort` silently drops `temperature` for all 38 `openai_compat` providers, not just o1/o3/o4
   - Author: GZY-SUPER-HACKER | Created: 2026-10-02 | Updated: 2026-10-02 | Comments: 1 | 👍: 0
   - Summary: Setting `agents.defaults.reasoningEffort` to anything other than `null` / `"none"` makes nanobot stop sending `temperature` for every provider, not only reasoning models. 38 of 46 ProviderSpecs use `backend="openai_compat"`.
3. #5932 [CLOSED] cron: pending actions are lost if the merged store cannot be saved
   - Author: yu-xin-c | Created: 2026-09-27 | Updated: 2026-10-02 | Comments: 0 | 👍: 0
   - Summary: `CronService._merge_action()` clears `action.jsonl` before calling `_save_store()`. If the store write fails (e.g., ENOSPC), the old `jobs.json` remains intact but accepted actions are removed from disk.
4. #6008 [OPEN] [bug] fix(webui): sidebar state is wiped after an update when the initial sidebar-state fetch fails
   - Author: morandot | Created: 2026-10-02 | Updated: 2026-10-02 | Comments: 0 | 👍: 0
   - Summary: WebUI fails its initial `GET /api/webui/sidebar-state` request, `useSidebarState` hook silently falls back to `DEFAULT_SIDEBAR_STATE`. Any sidebar mutation (pin, rename, archive, etc.) afterwards is wiped.
5. #6006 [OPEN] QQ: quoted messages never reach the agent
   - Author: GZY-SUPER-HACKER | Created: 2026-10-02 | Updated: 2026-10-02 | Comments: 0 | 👍: 0
   - Summary: In QQ, when a user quotes an earlier message, the agent only receives the new text. Quoted content is lost.
6. #6000 [OPEN] sendProgress: true yields at most one line per turn — tool_contract.md contradicts itself
   - Author: GZY-SUPER-HACKER | Created: 2026-10-02 | Updated: 2026-10-02 | Comments: 0 | 👍: 0
   - Summary: `channels.sendProgress` defaults to `true`, but on default install it has nothing to deliver and behaves like `false`. `templates/agent/tool_contract.md` contradicts itself.

### Latest Pull Requests (Total: 37 items; showing top 20 by comment count)
1. #6011 [OPEN] [bug, provider, fix, test, priority: p2] fix(providers): stream Codex image generation responses
   - Author: Excelius-Wang | Created: 2026-10-02 | Updated: 2026-10-02
   - Summary: Codex image generation requests SSE using buffered `AsyncClient.post()`, so HTTPX reads response body before parser can stop at completed response. Follow-up to #4332. Use chunked streaming.
2. #5918 [CLOSED] [bug, fix, test, priority: p2] fix(tools): preserve valid JSON Schema union arguments
   - Author: KailBug | Created: 2026-09-26 | Updated: 2026-10-02
   - Summary: Fix tool argument coercion for JSON Schema `type` arrays with multiple non-null types (e.g., `{"type": ["integer", "string"]}`). Could convert `"00123"` to `123` or reject `"doc-A"`.
3. #5995 [CLOSED] [bug, regression, fix, test, priority: p2] fix(agent): clear stale failure state when resuming runner iterations
   - Author: KailBug | Created: 2026-09-30 | Updated: 2026-10-02
   - Summary: Fix successful recovery reported as failed run after late follow-up message, suppressing final WebSocket reply. Root cause: model-error and empty-response paths assign `stop_reason` and `error` before checking late follow-ups.
4. #5845 [OPEN] [documentation, question, provider, webui, new-provider, feature, test, priority: p2] Add Opper as a built-in provider
   - Author: Felixkw12 | Created: 2026-09-21 | Updated: 2026-10-02
   - Summary: Added Opper as a built-in gateway provider (after Eden AI), using `OPPER_API_KEY`, `openai_compat` backend, `is_gateway=True`.
5. #5997 [CLOSED] [bug, regression, channel, fix, test, security, priority: p2] fix(linear): reject stale member access updates after reauthorization
   - Author: KDB-Wind | Created: 2026-09-30 | Updated: 2026-10-02
   - Summary: Member access update waits on Linear's directory API while workspace is disconnected/reauthorized. Old request could re-enable member denied after reconnecting.
6. #5957 [CLOSED] [bug, fix, test, priority: p2] fix(exec): enforce session hard timeouts without polling
   - Author: KailBug | Created: 2026-09-28 | Updated: 2026-10-02
   - Summary: Enforce hard timeout for exec sessions independently of polling. Command started with `yield_time_ms` could run past configured timeout.
7. #5933 [CLOSED] [bug, regression, fix, test, priority: p0] fix(cron): preserve pending actions until store save succeeds
   - Author: yu-xin-c | Created: 2026-09-27 | Updated: 2026-10-02
   - Summary: Save merged cron store before clearing `action.jsonl`, retaining existing lock and atomic store writer. Fixes #5932.
8. #5994 [CLOSED] [bug, fix, test, security, priority: p2] fix(agent): preserve explicitly empty tool registries
   - Author: KailBug | Created: 2026-09-30 | Updated: 2026-10-02
   - Summary: Honor empty tool registries throughout agent turn. Passing `tools=ToolRegistry()` or disabling tools could re-enable default tools.
9. #6001 [OPEN] Make `sendProgress` mean what it says: authorise the text it delivers
   - Author: GZY-SUPER-HACKER | Created: 2026-10-02 | Updated: 2026-10-02
   - Summary: Fixes #6000. The switch gates delivery; the text it is supposed to deliver is never produced.
10. #5763 [OPEN] [bug, fix, test, priority: p2] fix(api): return 400 for invalid multimodal field types
    - Author: FanouZeng-TT | Created: 2026-09-14 | Updated: 2026-10-02
    - Summary: Classify malformed multimodal JSON field types as client request errors, preserving 413 for oversized uploads.
11. #5793 [OPEN] [bug, regression, fix, test, priority: p2] fix(tools): scope recursive directory ignores to listed root
    - Author: RaycarlLei | Created: 2026-09-16 | Updated: 2026-10-02
    - Summary: Recursive `list_dir` reports directory as empty when requested directory or parent is in `_IGNORE_DIRS` (e.g., `build`, `dist`).
12. #5926 [OPEN] [bug, fix, test, priority: p2] fix: 避免网页抓取将大小写不同的 URL 误判为重复请求 (Avoid misjudging different case URLs as duplicate requests in web scraping)
    - Author: 2gg-bit | Created: 2026-09-26 | Updated: 2026-10-02
    - Summary: Duplicate scraping protection lowercased entire URL, causing path/query params with different cases (e.g., `/API` vs `/api`, `?id=ABC` vs `?id=abc`) to be incorrectly blocked on third request. Exact URL comparison now used.
13. #5965 [OPEN] [bug, regression, fix, test, priority: p2] fix: 执行 null 参数的类型和枚举校验 (Execute type and enum validation for null parameters)
    - Author: 2gg-bit | Created: 2026-09-29 | Updated: 2026-10-02
    - Summary: Fix null validation: `type: "null"` or `type: ["null"]` previously accepted empty strings, numbers, booleans, and containers. Nullable params bypassed enum validation. Now strictly validated.
14. #5963 [OPEN] [bug, provider, fix, test, priority: p2] fix(providers): sum compound durations in 'try again in' retry hints
    - Author: Bdysj | Created: 2026-09-29 | Updated: 2026-10-02
    - Summary: Parse compound "try again in" durations like `1m30s` or `2m0.5s` correctly from provider error bodies (OpenAI-style 429 messages).
15. #5962 [OPEN] [bug, fix, test, priority: p2] fix(cron): reject non-positive every_seconds intervals
    - Author: Bdysj | Created: 2026-09-29 | Updated: 2026-10-02
    - Summary: Reject non-positive `every_seconds` intervals in `cron` tool and `CronService` instead of creating never-running jobs.
16. #5927 [OPEN] [bug, fix, test, priority: p2] fix: 通知评估器拒绝非布尔值，避免将字符串 false 视为通知许可 (Notification evaluator rejects non-boolean values, avoiding treating string "false" as notification permission)
    - Author: 2gg-bit | Created: 2026-09-26 | Updated: 2026-10-02
    - Summary: Background notification evaluator declared `should_notify` as boolean but executed `bool(should_notify)`. String `"false"` was truthy in Python, causing silent notifications. Now strictly type-checked.
17. #5928 [OPEN] [bug, channel, fix, test, priority: p2] fix: 邮件正文字符集未知时回退解码，避免中断收件轮询 (Fallback decoding when email body charset is unknown, avoiding polling interruption)
    - Author: 2gg-bit | Created: 2026-09-26 | Updated: 2026-10-02
    - Summary: `get_content()` throws `LookupError` for unknown charsets (e.g., `charset=unknown-charset`), and exception handler re-threw it, breaking mail polling. Now catches `LookupError` and falls back to UTF-8 with replacement characters.
18. #5961 [OPEN] [bug, channel, fix, test, priority: p2] fix(slack): keep full text of button messages beyond 3000 chars
    - Author: Bdysj | Created: 2026-09-29 | Updated: 2026-10-02
    - Summary: Slack messages with buttons lost text beyond 3000 chars. Root cause: `send()` splits text into chunks, and when buttons were attached, only the last chunk was sent with button blocks, losing preceding text.
19. #5931 [OPEN] [bug, regression, channel, fix, test, priority: p2] fix: 保留 Telegram 命令的换行参数和邮箱内容 (Preserve newline parameters and email content in Telegram commands)
    - Author: 2gg-bit | Created: 2026-09-27 | Updated: 2026-10-02
    - Summary: Telegram commands separated by newlines or tabs lost parameters because `_process_forward_command` split by space only. Also emails without bot suffix were truncated. Now only strips suffix from first token, preserves whitespace, and supports multiline routing.
20. #5960 [OPEN] [bug, channel, fix, test, priority: p2] fix(telegram): keep link URLs intact when rendering Markdown to HTML
    - Author: Bdysj | Created: 2026-09-29 | Updated: 2026-10-02
    - Summary: Telegram Markdown to HTML rendering corrupted URLs containing `__`, `_word_`, `**`, or `~~`, and `"` broke out of `href` attribute.

Let's double-check the requested sections and build the digest.

### Sections required:
1. **Today's Overview** - 3-5 sentences summarizing project status, including activity assessment.
   - Activity is very high: 37 PRs updated (29 open, 8 merged/closed), 6 issues updated (5 open, 1 closed). No new releases today. The project shows high developer engagement with numerous bug fixes and feature improvements being actively pushed, including critical stability fixes (cron store preservation, agent failure state reset, exec timeouts). Overall project health is strong, with active maintenance and quick response to user-reported bugs.

2. **Releases** - If new versions exist, detail changes, breaking changes, migration notes; omit if none.
   - None (No new releases in the last 24 hours).

3. **Project Progress** - Merged/closed PRs today, what features advanced or were fixed.
   - Closed/Merged PRs today (8 total):
     - #5918: Fixed JSON Schema union argument coercion (tools).
     - #5995: Cleared stale failure state when resuming runner iterations (agent).
     - #5997: Reject stale member access updates after reauthorization in Linear (channel/security).
     - #5957: Enforced session hard timeouts without polling (exec).
     - #5933: Preserve pending actions until store save succeeds (cron) - fixes #5932.
     - #5994: Preserve explicitly empty tool registries (agent/security).
   - Key advancements: Significant progress on agent reliability (empty tool registries, runner state recovery), system stability (exec timeouts, cron action preservation), and security/access control for Linear integration.

4. **Community Hot Topics** - Most active Issues/PRs with most comments/reactions (with links), analyze underlying needs.
   - Issue #5898 [OPEN] [bug] gpt-6 model series through Github Copilot has 4 comments (most comments).
     - Link: https://github.com/HKUDS/nanobot/issues/5898
     - Underlying need: Users want to use the latest OpenAI GPT-6 models via GitHub Copilot integration, but the current version (v0.3.5) fails with "Mode provider request failed". This reflects a strong demand for keeping up with rapidly evolving upstream LLM provider integrations.
   - Issue #6002 [OPEN] `reasoningEffort` silently drops `temperature` for all 38 `openai_compat` providers has 1 comment.
     - Link: https://github.com/HKUDS/nanobot/issues/6002
     - Underlying need: Configuration regression where a setting meant for reasoning models (reasoningEffort) globally impacts all openai-compatible providers, breaking temperature customization. Users need predictable model parameter handling.

5. **Bugs & Stability** - Bugs, crashes, regressions reported today, ranked by severity, note if fix PRs exist.
   - High/Critical Severity:
     - Cron data loss on store write failure (#5932 - Closed, fix merged in #5933): Risk of losing scheduled actions due to disk full or write errors. Fix is merged.
     - Agent failure state suppression (#5995 - Closed, fix merged in #5995): Successful runs reported as failed, suppressing WebSocket replies. Fix is merged.
     - Empty tool registry bypass (#5994 - Closed, fix merged in #5994): Security/session policy bypass where empty tool registries fell back to default tools. Fix is merged.
     - Telegram command parsing parameter loss (#5931 - Open): Newlines/tabs in Telegram commands cause parameter loss and routing failures. Fix PR is open.
     - QQ quoted messages lost (#6006 - Open): Quoted message content

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>



Here is the structured project digest for the **Hermes Agent** (`github.com/nousresearch/hermes-agent`) based on the GitHub data updated through October 3, 2026.

---

### 1. Today's Overview
Hermes Agent is experiencing a very high level of community and developer activity, with 50 issues and 50 pull requests updated in the last 24 hours. While no new releases were published today, the repository shows robust maintenance, with 2

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



# PicoClaw Project Digest — 2026-10-03

---

## 1. Today's Overview

PicoClaw shows moderate activity on 2026-10-03, with 3 open issues and 4 pull requests updated in the last 24 hours. Two PRs were closed (one merged, one likely closed without merge), while no new releases were published. The project remains in a maintenance/development phase with no version bump today, but community engagement is visible — particularly around a UI performance bug that has already attracted 17 comments and 2 👍 reactions. Overall health appears stable, though several stale PRs signal areas where maintainer attention is needed.

---

## 2. Releases

**No new releases today.** The latest published version remains v0.3.1 (referenced in Issue #3281). No breaking changes, migration notes, or changelog entries are applicable for this reporting period.

---

## 3. Project Progress

### Merged/Closed PRs (Last 24h)

| PR | Title | Author | Status |
|---|---|---|---|
| [#3368](https://github.com/sipeed/picoclaw/pull/3368) | docs: add Parallel Search MCP setup example | georgeatparallel | Closed |
| [#1544](https://github.com/sipeed/picoclaw/pull/1544) | fix: merge PR #1514 #1513 #1512 #1510 #1509 | xuwei-xy | Closed |

**What advanced:**
- **Documentation**: PR #3368 added a copy-paste Parallel Search MCP setup guide, enabling PicoClaw web search and page extraction without requiring a Parallel account or API key. This expands the out-of-the-box search capabilities for users.
- **Bulk fix merge**: PR #1544 consolidated fixes from five separate PRs (#1514, #1513, #1512, #1510, #1509), suggesting a batch of bug fixes or improvements were finally integrated.

---

## 4. Community Hot Topics

### 🔥 Most Engaged: Issue #3281 — Web UI Chat Input Lag

- **Link**: [sipeed/picoclaw#3281](https://github.com/sipeed/picoclaw/issues/3281)
- **Author**: xpader | **Comments**: 17 | **👍**: 2
- **Summary**: Users report severe input lag in the PicoClaw Web UI when chat history grows. Typing in the input box becomes unresponsive or extremely slow once a session accumulates moderate history.
- **Underlying Need**: This is a frontend performance regression or scalability bottleneck. Users are clearly frustrated — 17 comments on an issue opened in July and only updated today suggests sustained community interest and a lack of resolution. The issue likely involves virtualized rendering, excessive DOM re-renders, or large message payloads not being paginated/lazy-loaded.

### Secondary Topics

- **Issue #3415** (0 comments, 0 👍): Nginx reverse proxy support under `/pico/` path. A technical feature request with precise requirements (API endpoints, WebSocket, static assets). Low engagement so far, but the specificity suggests an enterprise/self-hosted user need.
- **PR #3393** (0 comments, 0 👍): Adding Cheaper Inference as an OpenAI-compatible provider. Could expand the user base among cost-conscious developers, but has gone stale with no review.
- **PR #3381** (0 comments, 0 👍): Switching the OpenAI provider to the Responses API. A significant architectural change; stale status indicates it may need rework or maintainer triage.

---

## 5. Bugs & Stability

### Ranked by Severity

| Rank | Issue | Severity | Status | Fix PR? |
|---|---|---|---|---|
| **1** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) — Web UI input lag with long history | **High** (blocks core chat UX) | Open, active | None yet |
| **2** | [#3392](https://github.com/sipeed/picoclaw/issues/3392) — CLAassistant does not detect signature | **Low** (edge-case detection failure) | Open, stale | Referenced by PR #3381 (may be related) |

**Analysis:**
- **Issue #3281** is the most critical stability concern. It directly impacts the primary user interface (web chat) and has high community visibility (17 comments, 2 👍). No fix PR has been linked, making this the top candidate for triage.
- **Issue #3392** appears to be a niche detection failure related to CLA (Contributor License Agreement) signing. The author references PR #3381 as a reproduction path, suggesting the issue may be tied to the OpenAI Responses API migration. If PR #3381 is merged, this bug may be resolved incidentally — or may need a separate fix.

No crashes or regressions were explicitly reported today beyond these two.

---

## 6. Feature Requests & Roadmap Signals

### Active Feature Requests

| Issue/PR | Request | Signal Strength |
|---|---|---|
| [#3415](https://github.com/sipeed/picoclaw/issues/3415) | Nginx reverse proxy support at `/pico/` subpath | Moderate (precise, enterprise-oriented) |
| [#3393](https://github.com/sipeed/picoclaw/pull/3393) | Cheaper Inference provider (OpenAI-compatible) | Low (stale, no maintainer engagement) |
| [#3381](https://github.com/sipeed/picoclaw/pull/3381) | Switch OpenAI provider to Responses API | Moderate (architectural, may unlock new capabilities) |

### Predicted Next Version Inclusions

- **Reverse proxy / subpath deployment** (Issue #3415): Likely to be addressed if there's enterprise/self-hosted demand. The request is well-specified and could be implemented via a `--base-path` or `--public-path` launcher flag.
- **OpenAI Responses API migration** (PR #3381): If the maintainer reactivates and merges this, it would be a major provider upgrade. The linked Issue #3392 (CLA detection) may be collateral.
- **Web UI performance fix** (Issue #3281): Not a feature request, but a high-priority bug that will almost certainly land before the next release if the team listens to community feedback.

---

## 7. User Feedback Summary

### Pain Points

1. **Web UI Performance Degradation** (Issue #3281): Users experience severe input lag as chat history grows. This is a functional blocker for long-running sessions and undermines trust in the web interface.
2. **Deployment Flexibility** (Issue #3415): Enterprise/self-hosted users want PicoClaw behind Nginx at a subpath (e.g., `https://example.com/pico/`). Current limitations force them to use the root path, complicating multi-service deployments.
3. **Provider Cost Concerns** (PR #3393): The request for Cheaper Inference suggests some users are sensitive to API costs and seeking budget-friendly alternatives.

### Use Cases & Satisfaction

- Users are actively engaging with the web UI for real-time chat, but the experience degrades with session length.
- The Parallel Search MCP documentation (PR #3368) indicates users value zero-setup search capabilities and clear data-flow explanations.
- Overall satisfaction appears mixed: the core chat functionality works, but performance and deployment flexibility are current friction points.

---

## 8. Backlog Watch

### Items Needing Maintainer Attention

| Item | Age | Why It Matters |
|---|---|---|
| [PR #3381](https://github.com/sipeed/picoclaw/pull/3381) — OpenAI → Responses API | ~16 days stale | Architectural upgrade; may resolve Issue #3392; no maintainer review yet |
| [PR #3393](https://github.com/sipeed/picoclaw/pull/3393) — Cheaper Inference provider | ~8 days stale | Adds a cost-saving provider; no engagement from maintainers |
| [Issue #3392](https://github.com/sipeed/picoclaw/issues/3392) — CLA signature detection | ~8 days stale | Linked to PR #3381; if that PR is abandoned, this bug needs a separate fix path |
| [Issue #3281](https://github.com/sipeed/picoclaw/issues/3281) — Web UI input lag | ~73 days old, reactivated | Highest-impact bug; 17 comments signal sustained community pressure; no fix PR linked |

### Summary

The longest-ignored issue (#3281) is also the most critical. The two stale PRs (#3381, #3393) represent potential feature expansions that could broaden PicoClaw's provider ecosystem but appear stuck in review limbo. A maintainer triage session would help unblock these and address the UI performance regression that is increasingly visible to the community.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



# NanoClaw Project Digest — 2026-10-03

## 1. Today's Overview
NanoClaw is experiencing high development activity, with 50 issues and 32 pull requests updated in the last 24 hours. The project is currently focused heavily on stability, update mechanism reliability, and CI/CD hygiene, alongside ongoing branch synchronization. While several critical stability bugs were reported recently (particularly around the update and rollback process), the core maintainers have submitted multiple targeted fixes to address container environment inconsistencies and setup flows.

## 2. Releases
*   **No new releases** have been published today.

## 3. Project Progress
*   **Merged/Closed PRs (6 total today):**
    *   **#3969 (Closed):** Fixed an issue with the Iron Proxy by sending a Basic challenge in response to a front proxy `407`, enabling git operations through the proxy.
    *   **#4006 (Closed):** Initial setup and configuration integration for the OpenCode provider.
    *   **#2654 (Closed):** Fixed platform ID namespacing logic to trust pre-prefixed IDs regardless of the channel registry key.
    *   **#67 (Closed):** Added the Telegram skill.
    *   **#3994 (Closed):** Improved agent-runner error handling to surface the Claude SDK's native failure notice instead of a generic error.
*   **Key Ongoing Work (Open PRs):**
    *   **#4000 (Open):** A major merge of `main` into the `channels` branch (463 commits). This requires careful review due to branch rulesets but is crucial for unifying channel adapter development.
    *   **#3986 (Open):** Implementing update channels (`stable`/`beta`) to follow Git release tags by default rather than the tip of `main`.
    *   **#3999 (Open):** Passing the `CLAUDE_CODE_AUTO_COMPACT_WINDOW` environment variable from the host into the agent container.
    *   **#3998 (Open):** Fixing container browser trust for the gateway CA to allow HTTPS MCP pages to load.

## 4. Community Hot Topics
*   **The OneCLI Dependency (#2437, #2781):** This remains the most popular discussion point. Issue #2437 has gathered **7 👍**, with users arguing that the dependency on OneCLI detracts from NanoClaw's value proposition as a lightweight alternative to OpenClaw. There is a strong desire from downstream packagers to support `NANOCLAW_NATIVE_CREDENTIALS` to bypass OneCLI entirely.
*   **Forking and Privacy (#1424):** A user raised concerns (**7 comments**) regarding the setup script strongly suggesting the creation of a public fork. The user noted this as a privacy barrier, particularly when deploying NanoClaw into sensitive environments like home healthcare systems.
*   **Multi-User Host Support (#2653):** Interest in running multiple NanoClaw instances (e.g., for a family) on a single host, each with its own Telegram bot and agent group, though currently blocked by setup scripts.

## 5. Bugs & Stability
*   **Critical / High Severity:**
    *   **Update Rollback Data Loss (#4003):** A failed update cutover followed by a rollback can result in `EACCES` (permission denied) errors, potentially deleting half of the `data/` directory and leaving the host offline. *No fix PR yet.*
    *   **Update Cutover Crash (#4004):** Cutover crashes when an update bumps `tsx` or `esbuild`, triggering a rollback that fails on `pnpm install`. *No fix PR yet.*
    *   **PreCompact OOM Crash Loop (#3716):** The `PreCompact` hook writes a brand-new, full-rewrite file of the entire conversation history on every firing with no rotation or directory cap, leading to production Out-Of-Memory (OOM) crashes.
    *   **Inbound Queue Starvation (#3568):** Accumulation of `kind='system'` rows can starve the inbound queue, causing the agent to silently stop responding to user messages.
*   **Active Fixes:**
    *   **PR #3999** addresses operator env overrides not reaching the session container (#3714).
    *   **PR #3988** fixes the gateway refresh logic during updates when only skill payloads change.
    *   **PR #3997** ensures setup commits applied skill files so fresh installs can run updates without manual git commits.

## 6. Feature Requests & Roadmap Signals
*   **OneCLI Abstraction (#2437):** High-priority community signal. Expect future releases to offer clearer paths for native credential injection or optional OneCLI usage.
*   **Update Channels (#3986):** The PR to default updates to release tags (stable/beta) is a significant UX improvement for production deployments, preventing accidental pulls from unstable branches.
*   **Household Edge Workers (#3538):** A proposal to allow NanoClaw containers to span across idle local machines (NAS, old laptops) rather than relying solely on a single Docker host.
*   **CLI Mount Initialization (#2388):** Request to add a `bin/ncl mounts init` command to bootstrap the `mount-allowlist.json` template for users.

## 7

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



Based on the GitHub activity of **LobsterAI** (`netease-youdao/LobsterAI`) up to October 3, 2026, here is the structured project digest.

---

### 1. Today's Overview
LobsterAI is currently experiencing a high focus on security hardening alongside critical stability issues. The project has seen excellent developer responsiveness, with two major security-focused pull requests successfully closed/merged (#909 and #911) and one active security PR addressing MCP command injection (#908). On the user side, activity is dominated by high-impact stability bugs (such as SQLite data loss risks and cron job interval logic errors) and highly requested feature gaps like memory portability. Overall project health is active but requires architectural fixes to address database write safety and task scheduling logic.

---

### 2. Releases
*   **No new releases** were published in the last 24 hours.

---

### 3. Project Progress
Significant progress has been made on the security front, closing critical vulnerabilities:
*   **PR #909 [CLOSED] - Skill Security Scan Bypass Fix:** Fixed a logic flaw where a failed security scan (`auditReport` remained `null`) caused the installer to skip user confirmation and silently install potentially malicious skill packages. [Link](https://github.com/netease-youdao/LobsterAI/pull/909)
*   **PR #911 [CLOSED] - Auth Token Encryption:** Upgraded security by storing authentication tokens (`accessToken` and `refreshToken`) securely using Electron's `safeStorage` API (macOS Keychain/Windows DPAPI) instead of storing them as plain text JSON in SQLite. [Link](https://github.com/netease-youdao/LobsterAI/pull/911)
*   **PR #908 [OPEN] - MCP Command Injection Prevention:** Currently open, this PR aims to validate the `stdio command` field in MCP servers to prevent arbitrary command injection via XSS or malicious artifacts. [Link](https://github.com/netease-youdao/LobsterAI/pull/908)

---

### 4. Community Hot Topics
While comment counts are low (typical for automated triaging), the underlying topics represent critical user friction points:
*   **Memory Portability & Sharing (#914):** Users are asking for structured memory import/export features to seamlessly migrate configurations to new machines and share memories with peers. [Link](https://github.com/netease-youdao/LobsterAI/issues/914)
*   **External Tool Integration Breakage (#898):** Users report that updating/restarting third-party clients like Cherry Studio disconnects the LobsterAI gateway (port 18789 conflict/ban). [Link](https://github.com/netease-youdao/LobsterAI/issues/898)
*   **Asynchronous IM Delivery Failures (#910):** Users highlight issues where scheduled tasks fail to deliver messages to Feishu bots due to missing target identifiers (`chatId` or `user:openId`). [Link](https://github.com/netease-youdao/LobsterAI/issues/910)

---

### 5. Bugs & Stability
Several bugs are currently tracked, ranked by severity:
1.  **CRITICAL: SQLite Data Corruption & Data Loss Risk (#906):** The database save method uses `fs.writeFileSync()` without error handling, retry mechanisms, or atomic write guarantees. Disk space exhaustion or lock conflicts can lead to immediate, silent data loss or a corrupted database file. [Link](https://github.com/netease-youdao/LobsterAI/issues/906)
2.  **HIGH: Cron Interval Logic Error (#900):** Users report that asking the agent to adjust a scheduled task interval to "every 1 hour" results in the task executing every 1 minute instead, causing spam and resource drain. [Link](https://github.com/netease-youdao/LobsterAI/issues/900)
3.  **MEDIUM: React Lifecycle Warning / Memory Leak (#886):** In `CoworkSessionDetail.tsx`, a bare `setTimeout` is used to reset copy states, triggering a React warning about updating unmounted components and causing minor memory leaks. [Link](https://github.com/netease-youdao/LobsterAI/issues/886)
4.  **MEDIUM: Gateway Disconnects (#898):** Restarting external clients causes the local LobsterAI gateway to drop. [Link](https://github.com/netease-youdao/LobsterAI/issues/898)

---

### 6. Feature Requests & Roadmap Signals
*   **Memory Import/Export (#914):** This is a strong candidate for the next minor release, as it addresses core user demands for cross-device synchronization and configuration sharing.
*   **Safe-by-Default Integrations:** The shift shown in PRs #908 and #909 indicates a roadmap prioritization of zero-trust security models, requiring user confirmations for skill installations and strict input validation for MCP bridges.

---

### 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by database fragility (fear of losing data on simple crashes) and the lack of flexibility regarding personal profiles/memories when switching devices.
*   **Use Cases:** Power users are trying to integrate LobsterAI into automated pipelines (Feishu bots, scheduled cron pipelines) but are hitting delivery and gateway stability walls. AI-driven configuration changes (e.g., natural language cron adjustments) are prone to silent logic bugs.
*   **Sentiment:** Generally positive on the security direction (tokens are finally safely encrypted), but highly critical of data persistence reliability.

---

### 8. Backlog Watch
*   **High Priority - Database Architecture (#906):** Needs immediate maintainer attention to refactor SQLite writes into transactional, try-catch guarded async operations.
*   **High Priority - Cron Engine Audit (#900):** The scheduler logic mapping natural language intervals to cron syntax needs debugging.
*   **Active Review Needed - PR #908:** Needs maintainer review to merge the MCP command injection block, closing the security loop.

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



Here is the structured project digest for **CoPaw (github.com/agentscope-ai/CoPaw)** based on the GitHub data from the last 24 hours leading up to October 3, 2026.

---

### 1. Today's Overview
CoPaw is experiencing high development activity and robust community engagement. The repository recorded 10 updated issues and 11 updated pull requests in the last 24 hours, with 7 PRs successfully merged or closed. The project health is trending positively, characterized by major UI/UX refinements (such as scroll locking and tool call visibility) and targeted bug fixes. Community contributors are actively driving progress, submitting both critical fixes and feature-rich additions like audio support.

### 2. Releases
*   **New Releases:** None. No new versions were released in the last 24 hours.

### 3. Project Progress
The development velocity today was heavily focused on desktop and console UI/UX enhancements, backend stability, and developer tooling. The following PRs were merged or closed:
*   **UI/UX Polish:** 
    *   **#7347:** Fixed caret visibility issues in the rich input box when scrolling long prompts.
    *   **#7356:** Added a chat scroll lock to prevent streaming messages from forcing the viewport to jump.
    *   **#7357:** Introduced a visibility toggle for tool call cards to declutter the chat interface.
    *   **#6877:** Implemented Tauri desktop window geometry persistence (position and size are now remembered on restart).
*   **Developer Tooling & Configurations:**
    *   **#7359:** Exposed provider-level inline media caps (image/video/audio) with localized labels.
    *   **#6874 (Under Review):** Added a configurable MCP tool call timeout (`tool_call_timeout`, defaulting to 300s).
    *   **#7344:** Added syntax highlighting and Monaco editor support for game development file languages (e.g., C# scripts, Unity, Godot shaders).

### 4. Community Hot Topics
The most active issues today center around chat interface completeness and multi-environment integrations:
*   **Message Manipulation & Context Control (#7997):** [8 comments] Users are highly requesting message retraction/editing and automatic workspace rollback (snapshots) in WebUI. This represents a critical workflow need for correcting agent paths mid-conversation.
*   **Markdown Rendering for Inputs (#2975):** [4 comments] A long-standing request to render user messages in Markdown to match the formatting of AI responses.
*   **Third-Party Agent Integration (#8077):** [2 comments] Focuses on defects in the Qoder integration where custom models are invisible and context-usage meters are hidden.
*   **Session UI Consistency (#8078):** [2 comments] Reports of cross-session messages splitting into multiple UI pages instead of grouping logically.

### 5. Bugs & Stability
Several active bugs were reported today, ranked by severity below:
*   **High Severity:** 
    *   **Conversation Page Crash (#8073):** Users updating to `V2.2.2.beta4` cannot access the conversation page when accessing the local service via LAN. *No fix PR is currently open.*
    *   **Third-Party Agent Breakage (#8077):** Custom models are entirely unusable in Qoder integrations. *No fix PR is currently open.*
    *   **UI Split Sessions (#8078):** `chat_with_agent` sessions are incorrectly registered as independent chat pages, causing confusion. *No fix PR is currently open.*
*   **Medium Severity:**
    *   **Silent Output Truncation (#8085):** The system drops `finish_reason="length"` silently, leaving users with cut-off mid-sentence responses.
    *   **Reload Drain Timeout (#8076 / #8079):** When config changes trigger a reload, old instances are abandoned silently after 24 hours. The fix PR **#8079** (size M) is currently open to notify the room and cancel in-flight runs.

### 6. Feature Requests & Roadmap Signals
*   **Audio Modality Support (#8081 / PR #8083):** A community member has drafted a feature request and a first-time contributor PR (`view_audio`) to add built-in audio understanding, filling the gap left by existing image and video tools.
*   **Cross-Instance Agent Mesh (#8080):** A major architectural feature request for decentralized agent-to-agent communication, automatic discovery, and memory transfer across different machines.
*   **Predicted Next Version Focus:** Given the merge of media caps and the incoming `view_audio` PR, the next minor release is likely to bolster multi-modal capabilities. Additionally, user experience patches for message editing (#7997) and input markdown (#2975) are highly probable candidates for upcoming UI releases.

### 7. User Feedback Summary
*   **Pain Points:** Users are frustrated with the beta regression on LAN access (#8073) and the broken Qoder custom model integration (#8078). There is also notable friction regarding context window limits, where oversized prompts result in silent, unhelpful failures rather than clear error messages.
*   **Use Cases:** Power users are utilizing the desktop client (requiring window geometry persistence) and game developers are relying on the console viewer to inspect C# and shader files during agent-assisted sessions.
*   **Satisfaction:** Satisfaction is high regarding the pace of UI improvements (such as the scroll lock and tool visibility toggles), which directly address chat readability pain points.

### 8. Backlog Watch
The following items require maintainer attention and roadmap prioritization:
*   **Issue #2975 (Markdown Rendering):** Opened on April 6, 2026, with ongoing feedback. It represents a simple but highly demanded UI parity fix.
*   **Issue #7997 (Message Retraction & Rollback):** High comment activity (8) indicates strong community demand; needs architectural review to handle workspace snapshot rollbacks safely.
*   **PR #6874 (Configurable MCP Timeout):** Critical for production environments utilizing custom MCP servers; currently stuck in "Under Review" and needs acceleration.
*   **Issue #8080 (Cross-Machine Agent Mesh):** A massive visionary feature that could define CoPaw's unique decentralized value proposition, but requires significant architectural design from maintainers.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



# ZeroClaw Project Digest — 2026-10-03

## 1. Today's Overview
ZeroClaw is experiencing an exceptionally high velocity of development, with 50 issues and 50 pull requests (PRs) updated in the last 24 hours. The project is actively addressing critical regressions and laying down substantial architectural foundations, particularly around agent delegation, resource limits, and gateway decoupling. Maintainer coordination is highly structured, driven by a centralized decision queue tracker (#8692) to manage the influx of RFCs. The overall project health is robust, characterized by rapid bug triaging and a heavy push toward enterprise-grade hardening (e.g., memory watchdogs, security ACLs, and RAG pipelines).

## 2. Releases
*No new releases were published in the last 24 hours.*

## 3. Project Progress
The development team and key contributors (notably Audacity88, JordanTheJet, IftekharUddin, and mov-xound-glitch) have pushed a massive wave of open PRs targeting core hardening, UI/UX improvements, and channel integrations:
*   **ZeroCode UX & Performance:** PR #11219 addresses a critical regression where local sessions ignore the launch directory. Additionally, PR #11457 introduces an F5 session refresh without cancellation, PR #11414 adds focused workspaces and an Admin hub to the web dashboard, and PR #11459 centralizes the transcript layout cache.
*   **Security & Resource Isolation:** PR #11456 introduces an opt-in subprocess memory watchdog (`shell_max_memory_mb`) to prevent OOM kills. PR #11451 hardens Windows key-file creation with restrictive ACLs, and PR #11458 adds SQLite admission checks for audit hygiene.
*   **Provider & Model Integration:** PR #11468 fixes thinking control forwarding for Ollama and llama.cpp, while PR #11467 introduces opt-in single-tool provider rounds.
*   **Channels & Gateway Decoupling:** PR #11438 and PR #11441 implement conversation binding ports and bind cron jobs to their originating conversations. PR #11431 fixes gateway WebSocket cleanup during reloads, and PR #11464 adds opt-in model fallback notices.

## 4. Community Hot Topics
*   **Maintainer Decision Queue (#8692) — 15 comments:** This tracker issue is the central hub for managing RFCs and design issues. The high comment count reflects the community's active engagement in defining the project's architectural future.
*   **ZeroCode Workspace Regression (#11387 & PR #11219) — 5 comments:** Users highlighted a recurring regression where `zerocode` forces the agent workspace as the current working directory, ignoring the launch shell directory. The underlying need is context preservation and predictable workspace anchoring for local CLI users.
*   **Realtime Voice-Host Channel (#7943) — 5 comments:** This feature request outlines a backend-agnostic WebSocket voice-host client. It signals a strong community desire to decouple audio capture/processing (ASR/TTS) from the core agent brain.
*   **Tool Memory Safety (#6916) — 4 comments:** Users reported production outages where shell commands triggered OOM kills. The underlying need is strict resource bounding for subprocess execution to ensure agent tools cannot destabilize the host environment.

## 5. Bugs & Stability
Bugs are ranked by severity (S1 = workflow blocked, S2 = degraded behavior, S3 = minor):
*   **S1 (Critical):**
    *   **Docker Startup & DB Stranding (#11369):** Docker images built from master exit at startup due to data directory locking. *[Status: Closed today, likely resolved or workshotted]*
    *   **ZeroCode Channel Isolation (#10225):** RPC sessions cannot reach configured channels through channel-backed tools. *[No direct fix PR merged yet]*
    *   **Failed ACP Turn Persistence (#10673):** ZeroCode's Code pane fails to persist failed/cancelled turns on the daemon RPC path. *[No direct fix PR merged yet]*
*   **S2 (Degraded Behavior):**
    *   **Launch Directory Regression (#11387):** `zerocode` ignores the launch directory. **Fix PR:** PR #11219 is currently open to resolve this.
    *  

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*