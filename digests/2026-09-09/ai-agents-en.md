# OpenClaw Ecosystem Digest 2026-09-09

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-09-08 22:15 UTC

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

# OpenClaw Project Digest — 2026-09-09

## 1. Today's Overview

OpenClaw is in an active stabilization cycle following the v2026.9.3 release, with heavy traffic across both issues (500 updated; 289 open, 211 closed) and pull requests (500 updated; 232 open, 268 merged/closed). The work pattern reflects a project triaging 2026.9.1 → 2026.9.2 upgrade regressions while shipping surgical fixes across channels (Telegram, Slack, Feishu, iMessage, WhatsApp), the Control UI, and the macOS/iPadOS/Android surfaces. The release highlights — isolated candidate-state rehearsal for core/plugin updates and abandoned-update-record recovery — directly address the dominant regression class filed in the last 24 hours. Overall activity is **high and reactive**, with maintainers actively closing P0/P1 upgrade-blocker issues, but a non-trivial tail of "diamond lobster" severity issues remains unanswered and awaiting product decisions.

## 2. Releases

**v2026.9.3** is the sole new release today (referenced from [#138839](https://github.com/openclaw/openclaw/pull/138839), [#141109](https://github.com/openclaw/openclaw/pull/141109), [#141175](https://github.com/openclaw/openclaw/pull/141175), [#1415…]).

- **Highlights:** Safer updates via isolated candidate state — core and plugin changes are now rehearsed before activation. The update path supports eligible migrations from 2026.9.2 and can recover abandoned `update_runs` records without stopping a healthy matching Gateway.
- **Related issue:** [#136997](https://github.com/openclaw/openclaw/issues/136997).
- **Migration notes:** No explicit breaking changes documented. The release targets stability of the upgrade path itself — the prior week was dominated by users recovering from broken 2026.9.1 / 2026.9.2 upgrades (Windows gateway non-start, post-core update "in progress" forever, doctor `--fix` non-interactively skipping config-key migrations).
- **Behavioral implication:** Sites that were locked into "update in progress" states on 2026.9.2 ([#139714](https://github.com/openclaw/openclaw/issues/139714)) should be recoverable by upgrading through 2026.9.3.

## 3. Project Progress

Of 268 merged/closed PRs in the last 24h, the following are the highest-impact landings:

- **Safer update engine (v2026.9.3):** isolated candidate-state update rehearsal and abandoned `update_runs` recovery — [#138839](https://github.com/openclaw/openclaw/pull/138839), [#141109](https://github.com/openclaw/openclaw/pull/141109), [#141175](https://github.com/openclaw/openclaw/pull/141175).
- **Event-loop / reaper fix:** cron run-session reaper now lists run sessions read-only, stopping event-loop stalls — [#142591](https://github.com/openclaw/openclaw/pull/142591) (closes [#142476](https://github.com/openclaw/openclaw/issues/142476)).
- **Long-transcript availability during `sessions_yield`:** keeps transcript history available during cleanup — [#137381](https://github.com/openclaw/openclaw/pull/137381).
- **Channel-specific fixes:** iMessage bridge recovery restores typing indicators and read receipts [#142626](https://github.com/openclaw/openclaw/pull/142626); Feishu rich-text inline styles preserved [#142627](https://github.com/openclaw/openclaw/pull/142627); Workboard plugin stops reporting `isError` on blocked-status successes [#138537](https://github.com/openclaw/openclaw/pull/138537); WhatsApp group allowlist fix in `security audit --fix` [#142589](https://github.com/openclaw/openclaw/pull/142589).
- **Codex auth:** reuse completed OAuth access rotations to avoid needless 10s refresh races [#142628](https://github.com/openclaw/openclaw/pull/142628); tolerate transient native-home auth state under `homeScope=user` [#142621](https://github.com/openclaw/openclaw/pull/142621).
- **Control UI polish:** coordinated cold-start skeletons [#142383](https://github.com/openclaw/openclaw/pull/142383); localized core configuration labels [#137192](https://github.com/openclaw/openclaw/pull/137192); removed unintended link underlines on buttons [#142335](https://github.com/openclaw/openclaw/pull/142335); compact mobile file-preview headers [#142536](https://github.com/openclaw/openclaw/pull/142536); video previews in composer [#142623](https://github.com/openclaw/openclaw/pull/142623); stops showing "Preview unavailable" while attachment previews load [#142613](https://github.com/openclaw/openclaw/pull/142613); unified plugin setup icons/states [#142624](https://github.com/openclaw/openclaw/pull/142624); ClawHub Markdown + compact skill actions [#142555](https://github.com/openclaw/openclaw/pull/142555); consolidated skill import source controls [#142540](https://github.com/openclaw/openclaw/pull/142540); deduplicated final replies after history hydration [#142422](https://github.com/openclaw/openclaw/pull/142422); Mac vs iPad browser device labels [#136545](https://github.com/openclaw/openclaw/pull/136545).
- **Platform/scripting:** Android branch picker kept inside fold panes [#142418](https://github.com/openclaw/openclaw/pull/142418); Apple gateway error overrides centralized [#142601](https://github.com/openclaw/openclaw/pull/142601); CI shard planner work reduced [#142630](https://github.com/openclaw/openclaw/pull/142630); macOS CodeQL scan completed within hosted runner limits [#141851](https://github.com/openclaw/openclaw/pull/141851); npm preflight TypeScript check kept within runner limits [#142472](https://github.com/openclaw/openclaw/pull/142472) (closed); uninstall guidance corrected [#142629](https://github.com/openclaw/openclaw/pull/142629); browser profile defaults prepared in one map [#135648](https://github.com/openclaw/openclaw/pull/135648); model catalog refresh failures isolated across source changes [#142622](https://github.com/openclaw/openclaw/pull/142622); skill spec normalization refactor [#142625](https://github.com/openclaw/openclaw/pull/142625); session tool-result bookkeeping simplified [#142599](https://github.com/openclaw/openclaw/pull/142599).

Net effect: The merged surface is a **broad polish + stability release layer** that complements the v2026.9.3 update-safety work.

## 4. Community Hot Topics

Most-discussed threads in the last 24 hours:

- **[#44925](https://github.com/openclaw/openclaw/issues/44925) — "Subagent completion silently lost — no retry, no notification, no auto-restart on timeout"** (26 comments, 🦞 diamond lobster, P1). Telegram forum users lose entire subagent results across E31/E42/E45 failure patterns. Reflects a deep need: detached/native subagents need liveness signals and terminal notifications.
- **[#135111](https://github.com/openclaw/openclaw/issues/135111) — "Provider completed tool call with malformed JSON arguments" on v2026.8.1, claude-sonnet-5** (23 comments, 🐚 platinum hermit, P1 regression). A persistent reliability regression in tool-call argument parsing that survives across releases.
- **[#97616](https://github.com/openclaw/openclaw/issues/97616) — Unreaped hook/tool child processes → zombie accumulation** (15 comments, 🦐 gold shrimp). Long-running Gateway hosts degrade; coexists with the recently closed heap-growth issue.
- **[#43367](https://github.com/openclaw/openclaw/issues/43367) — Multi-agent orchestration unsafe** (14 comments, 🦐 gold shrimp, P1): concurrent `agents add` config overwrites, session-lock failures, and detached children. Signals a multi-agent safety gap.
- **[#119720](https://github.com/openclaw/openclaw/issues/119720) — Synchronous agent persistence blocks Gateway event loop at scale** (14 comments, 🦞 diamond lobster). Compounds SQLite contention problems.
- **[#85251](https://github.com/openclaw/openclaw/issues/85251) — Codex app-server `notification:turn/started` then silent wedge** (13 comments, 🐚 platinum hermit). Indicates instability in Codex's embedded app-server integration that surfaces in production sessions.
- **[#127229](https://github.com/openclaw/openclaw/issues/127229) — Telegram watchdog-released durable update falsely tombstoned** (13 comments, 🦞 diamond lobster). A message-loss-class bug in the durable spool/transport tracker pipeline.
- **[#137813](https://github.com/openclaw/openclaw/issues/137813) — Windows Gateway never starts after 2026.9.1 update** (12 comments, closed, 🦪 silver shellfish, P0). The `--task-supervisor` flag exited 0 silently without spawning the child; closed in the v2026.9.3 cycle.
- **[#139714](https://github.com/openclaw/openclaw/issues/139714) — `updateCommand()` admits `update_runs` it can never finalize** (12 comments, 🦞 diamond lobster). Direct motivator for v2026.9.3's abandoned-update recovery.
- **[#137927](https://github.com/openclaw/openclaw/issues/137927) — Internal context block leaks into visible Telegram message text** (12 comments, closed, P1, security-adjacent). A trust-boundary bug in the per-turn context scaffold.
- **[#133984](https://github.com/openclaw/openclaw/issues/133984) — 2026.7.1-2 → 2026.8.1 leaves Gateway unstartable; `doctor --fix` skips config-key migrations non-interactively** (12 comments, closed, 🦞 diamond lobster). The headline user pain from the prior upgrade cycle.

**Underlying needs:** users are asking for (a) **robust upgrade recovery** (covered in v2026.9.3), (b) **visibility into detached work** (subagents, Codex app-server sessions, Telegram durable spool), (c) **multi-agent safety** (atomic config writes, session-lock discipline), and (d) **non-silent failure modes** for provider-level regressions.

## 5. Bugs & Stability

Bugs filed or active in the last 24h, ranked by severity:

**P0 / ux-release-blocker:**
- [#137813](https://github.com/openclaw/openclaw/issues/137813) — Windows Gateway never starts after 2026.9.1. **Closed** in the v2026.9.3 cycle.
- [#136203](https://github.com/openclaw/openclaw/issues/136203) — Windows de-DE 2026.8.2 upgrade leaves Doctor maintenance blocked and legacy workspace state behind. **No fix PR yet visible.**
- [#115642](https://github.com/openclaw/openclaw/openclaw/issues/115642) — Billing cooldown outlives the outage on subscription auth; needs probe-based recovery. **No fix PR yet visible.**
- [#140908](https://github.com/openclaw/openclaw/issues/140908) — `doctor --fix` / `gateway status --deep` fail with EACCES under systemd `--user` service account, blocking all post-upgrade migrations. **No fix PR yet visible.**

**P1 / data-loss, message-loss, crash-loop, session-state:**
- [#44925](https://github.com/openclaw/openclaw/issues/44925) — Subagent completion silently lost. **No fix PR.** Compounded by [#101656](https://github.com/openclaw/openclaw/issues/101656).
- [#135111](https://github.com/openclaw/openclaw/issues/135111) — Intermittent malformed-JSON tool-call regression on v2026.8.1. **No fix PR.**
- [#97616](https://github.com/openclaw/openclaw/issues/97616) — Child-process leak / zombie accumulation. **No fix PR.** Coexists with closed heap-growth [#87109](https://github.com/openclaw/openclaw/issues/87109).
- [#43367](https://github.com/openclaw/openclaw/issues/43367) — Multi-agent orchestration instability. **No fix PR.**
- [#119720](https://github.com/openclaw/openclaw/issues/119720) — Synchronous persistence blocks Gateway event loop; partial repairs landed via [#140231](https://github.com/openclaw/openclaw/pull/140231), [#138984](https://github.com/openclaw/openclaw/pull/138984), **still under observation**.
- [#85251](https://github.com/openclaw/openclaw/issues/85251) — Codex app-server silent wedge. **No fix PR.**
- [#127229](https://github.com/openclaw/openclaw/issues/127229) — Telegram durable outbound falsely tombstoned. **No fix PR.**
- [#127148](https://github.com/openclaw/openclaw/issues/127148) — Codex `sessions.compact` acquires second app-server, active-writer conflict. **No fix PR.**
- [#136183](https://github.com/openclaw/openclaw/issues/136183) — SSH banner hang in command executor (regression in 2026.8.1 → 2026.8.2). **No fix PR.**
- [#117262](https://github.com/openclaw/openclaw/issues/117262) — SQLite contention, 3 concurrent write handles, ~33 s event-loop stalls (DEF-61). **No fix PR.**
- [#141252](https://github.com/openclaw/openclaw/issues/141252) — 2026.9.2 regression: "Reply operation has no active tool authority snapshot". **No fix PR.**
- [#139847](https://github.com/openclaw/openclaw/issues/139847) — Message dropped while reply run is active (regression in 2026.9.2). **No fix PR.**
- [#126246](https://github.com/openclaw/openclaw/issues/126246) — Telegram durable outbound stuck in `send_attempt_started`. **No fix PR.**
- [#139809](https://github.com/openclaw/openclaw/issues/139809) — Telegram does not receive protected secrets prompt from Codex. **No fix PR.**
- [#140455](https://github.com/openclaw/openclaw/issues/140455) — google-meet 2026.9.2: circular-JSON in-call crash, audio routing broken. **No fix PR.**
- [#139485](https://github.com/openclaw/openclaw/issues/139485) — Managed upgrade leaves gateway offline while finalization remains nonterminal. **No fix PR.**
- [#56693](https://github.com/openclaw/openclaw/issues/56693) — OpenAI Codex OAuth can bind to a deactivated ChatGPT workspace. **No fix PR.**
- [#123799](https://github.com/openclaw/openclaw/issues/123799) — Production upgrade/backport guidance needed for Codex compact 404 on 2026.5.12. **No fix PR.**
- [#92870](https://github.com/openclaw/openclaw/issues/92870) — System event text leaked into user message attribution during compaction. **No fix PR.**

**P2 stability:**
- [#139714](https://github.com/openclaw/openclaw/issues/139714) — `updateCommand()` admits unfinishable `update_runs` row. **Addressed conceptually by v2026.9.3's recovery path; specific PR not yet filed.**
- [#142037](https://github.com/openclaw/openclaw/issues/142037) — Embedded runtime records explicit-route `message`-tool replies as `mute`. **No fix PR.**
- [#142336](https://github.com/openclaw/openclaw/issues/142336) — Core `/dashboard` shadows Telegram Mini App launcher in 2026.9.2+. **No fix PR.**
- [#135776](https://github.com/openclaw/openclaw/issues/135776) — `openclaw update` leaves exact-pinned official channel plugins on previous release. **No fix PR.**
- [#136311](https://github.com/openclaw/openclaw/issues/136311) — `memory-core` reindex lock held on every Gateway start → 19 GB of orphaned `memory-reindex-*` temp DBs. **No fix PR.**
- [#120449](https://github.com/openclaw/openclaw/issues/120449) — `tools.loopDetection` WARNING-tier detections only logged server-side. **No fix PR.**
- [#123265](https://github.com/openclaw/openclaw/issues/123265) — `<<<BEGIN_OPENCLAW_INTERNAL_CONTEXT>>>` serialized as trailing `role:user` message on every request. **No fix PR.** Related to closed [#137927](https://github.com/openclaw/openclaw/issues/137927).
- [#118560](https://github.com/openclaw/openclaw/issues/118560) — WebChat canvas hides earlier messages after main session reset. **No fix PR.**
- [#86174](https://github.com/openclaw/openclaw/issues/86174) — WebChat + New Session inherits parent's model override. **No fix PR.**
- [#48786](https://github.com/openclaw/openclaw/issues/48786) — Feishu `@_user_N` placeholders unresolved. **No fix PR** (closed companion to [#142627](https://github.com/openclaw/openclaw/pull/142627) which only fixed outbound styles).

**Closed in the last 24h:**
- [#137927](https://github.com/openclaw/openclaw/issues/137927) — internal context leak (P1).
- [#134896](https://github.com/openclaw/openclaw/issues/134896) — 2026.8.1 update 5-blocker gateway restart cascade + `doctor --fix` self-referential failure (P1).
- [#133984](https://github.com/openclaw/openclaw/issues/133984) — 2026.7.1-2 → 2026.8.1 leaves Gateway unstartable (P1).
- [#142530](https://github.com/openclaw/openclaw/issues/142530) — Telegram animated/video stickers arrive as empty bodies (P2).
- [#141694](https://github.com/openclaw/openclaw/issues/141694) — Silent-fallback reply hardcodes wrong reason (P2).
- [#45314](https://github.com/openclaw/openclaw/issues/45314) — Early abort response templates not populated (P2).
- [#87109](https://github.com/openclaw/openclaw/issues/87109) — macOS heap growth to 1073MB+ causing silent cron failures (P2).

## 6. Feature Requests & Roadmap Signals

- **Owner-signed responsibility gates** ([#96675](https://github.com/openclaw/openclaw/issues/96675), 🌊 off-meta, 10 comments) — proposed explicit user-confirmation gates before assistant outputs, skill results, or memories become persistent. Strong traction; likely needs a product decision before implementation. Likely candidate for the next minor.
- **Owner-confirmation gates for memory

---

## Cross-Ecosystem Comparison

# AI Agent & Personal Assistant Ecosystem Analysis: 2026-09-09 Digest

## 1. Ecosystem Overview
The open-source AI agent and personal assistant ecosystem is currently undergoing a high-intensity "stabilization phase." While early development focused on basic model connectivity, the frontier has shifted toward **production-grade reliability**, multi-channel synchronization (Telegram, iMessage, Feishu), and robust multi-agent orchestration. Projects are grappling with the complexities of "detached work"—ensuring that subagents and long-running tasks provide visibility and maintain state integrity across cross-platform interfaces. There is a clear industry-wide move away from simple chat interfaces toward autonomous, state-aware systems capable of handling complex workflows and memory management.

## 2. Activity Comparison

| Project | Issues (Open/Total) | PRs (Open/Merged) | Recent Release | Health Score |
| :--- | :---: | :---: | :--- | :---: |
| **OpenClaw** | 289 / 500 | 232 / 268 | v2026.9.3 (Active) | **High** |
| **NanoBot** | 2 / N/A | 26 / 14 | None | **Moderate-High** |
| **Hermes Agent**| 49 / 50 | 41 / 9 | v0.21.1 (Patch) | **Moderate-Stable** |
| **PicoClaw** | 4 / N/A | 7 / 1 | None | **Moderate** |
| **ZeroClaw** | 23 / 50 | 48 / 2 | None | **Low (RFC-Heavy)** |
| **NullClaw** | 0 / 0 | 0 / 0 | None | **Dormant** |

## 3. OpenClaw's Position
OpenClaw distinguishes itself as the most **mature and active reference implementation** in the space.
*   **Technical Maturity:** Unlike peers that are still fighting basic connectivity bugs, OpenClaw is implementing complex "isolated candidate-state update rehearsals" (v2026.9.3), showing a sophisticated approach to upgrade safety that other projects lack.
*   **Channel Breadth:** It maintains the most diverse integration surface (Telegram, Slack, Feishu, iMessage, WhatsApp), making it the primary choice for cross-platform personal assistants.
*   **Community Velocity:** With 268 merged PRs in a 24-hour window, its development cycle is significantly faster than Hermes or ZeroClaw, positioning it as the "bleeding edge" of the ecosystem.

## 4. Shared Technical Focus Areas
Across the ecosystem, several critical technical requirements have emerged as universal pain points:
*   **Multi-Agent Safety:** Almost every project (OpenClaw, Hermes, NanoBot) is struggling with "zombie" processes and subagent visibility—cases where background tasks fail silently without notifying the main agent.
*   **Memory & Context Integrity:** There is high demand for "durable cross-session recall." Users are frustrated by context being lost during session resets or de-synced across devices.
*   **Configuration Stability:** A "bottleneck" exists in how configuration is handled. Projects like PicoClaw and OpenClaw are reporting schema drift where nightly builds break API keys or settings for existing users.
*   **Provider Neutrality:** A clear trend is toward toward moving away from hardcoded model limits (e.g., the 128k token limit in Hermes/OpenClaw) to allow flexible context-window overrides.

## 5. Differentiation Analysis
*   **OpenClaw vs. Hermes Agent:** OpenClaw is focused on **high-velocity stabilization and UI/UX**, whereas Hermes is more focused on **internal orchestration and Kanban-style workflows**, though both suffer from similar regressions.
*   **NanoBot vs. ZeroClaw:** NanoBot is positioning itself for **edge/IoT-friendly deployment** (lightweight), while ZeroClaw is currently in a **heavy architectural-design phase**, focusing on RFCs and core security governance rather than shipping features.
*   **ZeptoClaw:** Stands out as the **security-first Rust-based alternative**, focusing on memory safety and hardened file-system permissions (0600 permissions) compared to the more feature-heavy-based peers.

## 6. Community Momentum & Maturity
*   **High Momentum (Iterative):** **OpenClaw** and **NanoBot**. These projects are highly reactive, rapidly fixing regressions from the previous week.
*   **Stable (Maintenance):** **Hermes Agent** and **PicoClaw**. These projects are in a steady cadence, focusing on patches and bug fixes rather than major architectural shifts.
*   **Architectural (Design Phase):** **ZeroClaw**. Momentum is low in terms of code but high in terms of high-level design discussion and RFC-driven governance.
*   **Dormant:** **NullClaw**.

## 7. Trend Signals
*   **The "Subagent Gap":** The biggest technical trend is the demand for "visibility into detached work." Users no longer accept "In Progress" statuses; they require real-time telemetry on background tasks.
*   **Edge AI Demand:** There is a growing signal (seen in NanoBot and PicoClaw) for ultra-lightweight deployments that can run on unmanned retail devices or IoT-edge hardware.
*   **Security-First Personal AI:** The ecosystem is moving away from long-lived API keys in favor of short-lived-use tokens (OAuth rotations), as seen in recent OpenClaw and ZeroClaw updates.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-09-09

## 1. Today's Overview

NanoBot showed light issue activity but heavy pull-request activity over the last 24 hours: **40 PRs were updated** (26 open, 14 merged/closed), while only **2 issues** were touched and both closed promptly. **No new releases** were published. The dominant theme was **stability and resource hygiene**: several contributors submitted fixes bounding unbounded in-memory caches (idle summaries, MCP OAuth flows, Mattermost thread context), paired with a cluster of Telegram-channel fixes around slash commands and compaction notices. The project looks healthy — an active contributor base with a strong correctness focus — though a backlog of long-open, merge-conflicted PRs is a notable watch item.

## 2. Releases

*No new releases published in the last 24 hours.*

## 3. Project Progress

Only one merged/closed PR is individually detailed in the available data:

- **[#5709 — fix(codex): refresh model catalog for Astra](https://github.com/HKUDS/nanobot/pull/5709)** by Re-bin — bumps the model-catalog client version from `0.144.0` to `0.153.4` so the OpenAI Codex model picker can expose GPT-6-Astra when the signed-in account's catalog includes it. Closed same day.

Both closed issues were lightweight:
- **[#5693](https://github.com/HKUDS/nanobot/issues/5693)** — feature suggestion for ultra-lightweight, self-hosted deployment in retail/IoT contexts (closed).
- **[#5696](https://github.com/HKUDS/nanobot/issues/5696)** — first-time contributor asking for beginner-friendly tasks (closed).

The remaining 13 of 14 merged/closed PRs are not itemized in the provided summary, but the 26 open PRs signal strong forward motion across Telegram, WebUI, TUI, search providers, and memory-management areas.

## 4. Community Hot Topics

Comment counts were largely unavailable, so ranking relies on the few data points present and thematic clustering:

- **[Issue #5693 — retail/IoT deployment request](https://github.com/HKUDS/nanobot/issues/5693)** received the highest comment count (3). It signals demand for edge-friendly, lightweight deployment plus Chinese-language documentation — likely from the CN developer/robotics ecosystem.
- **Telegram channel cluster** — [#4919](https://github.com/HKUDS/nanobot/pull/4919) (custom Bot API base URL), [#5707](https://github.com/HKUDS/nanobot/pull/5707) (`/compact` routing), [#5706](https://github.com/HKUDS/nanobot/pull/5706) (compaction notice collapse), [#5711](https://github.com/HKUDS/nanobot/pull/5711) (hyphenated command fix), and [#5387](https://github.com/HKUDS/nanobot/pull/5387) (reusable stickers) show an active Telegram user base with concrete, everyday pain points.
- **Merge-conflicted, priority-tagged PRs** — [#5234](https://github.com/HKUDS/nanobot/pull/5234) (mst-python, p1), [#5437](https://github.com/HKUDS/nanobot/pull/5437) (Serply, p2), [#5387](https://github.com/HKUDS/nanobot/pull/5387) (stickers, p2), and [#5590](https://github.com/HKUDS/nanobot/pull/5590) (JSON summary, p2) all carry `conflict` labels — they've attracted review but now need rebasing.

**Underlying need:** users want richer provider/channel integrations and configuration control; maintainers appear to be prioritizing memory-safety and correctness fixes first.

## 5. Bugs & Stability

Ranked approximately by severity:

1. **Unbounded in-memory caches (memory-leak class)** — three related PRs by Shizoqua target process-lifetime growth:
   - [#5664](https://github.com/HKUDS/nanobot/pull/5664) — idle-session summary cache unbounded
   - [#5665](https://github.com/HKUDS/nanobot/pull/5665) — MCP browser OAuth flow registry unbounded
   - [#5663](https://github.com/HKUDS/nanobot/pull/5663) — Mattermost thread context cache unbounded
   
   Fix PRs exist for all three but remain open.

2. **UTF-8 corruption in exec output** — [#5708](https://github.com/HKUDS/nanobot/pull/5708): multi-byte characters split across 4,096-byte read boundaries are replaced with invalid-character markers in tool output. Fix PR open (per-stream incremental decoder with EOF flush).

3. **Telegram command breakage** — [#5707](https://github.com/HKUDS/nanobot/pull/5707): `/compact` and `/evaluator-prompt` are registered and appear in `/help` but are silently dropped by the allowlist regex. [#5711](https://github.com/HKUDS/nanobot/pull/5711): hyphenated commands (`/dream-log`, `/dream-restore`, `/dream-prompt`, `/evaluator-prompt`) render as plain text because Telegram only accepts `[a-z0-9_]`. Fix PRs open for both.

4. **Codex model-picker omission** — [#5709](https://github.com/HKUDS/nanobot/pull/5709): GPT-6-Astra hidden behind a stale client version. **Closed/fixed.**

5. **Subagent partial-completion regression** — [#5152](https://github.com/HKUDS/nanobot/pull/5152): background sibling tasks that still owe completion messages keep the parent turn open without visible indication. Fix PR open (adds `subagent_remaining_count` metadata and a model-only pending notice).

6. **Oversized tool-result preview loses root fields** — [#5590](https://github.com/HKUDS/nanobot/pull/5590): the first-1,200-character preview can bury `ok`/`status`/`error`/`artifact`/`revision` when a large nested object appears first. Fix PR open but merge-conflicted.

7. **Copilot OAuth token non-persistence in containers** — [#5638](https://github.com/HKUDS/nanobot/pull/5638): token stored in oauth-cli-kit's default directory, which may be non-writable/non-persistent in container deployments. Fix PR open.

## 6. Feature Requests & Roadmap Signals

- **Edge/IoT deployment support** — [#5693](https://github.com/HKUDS/nanobot/issues/5693): ultra-lightweight self-hosted mode for unmanned retail/edge devices, plus Chinese documentation. Closed as a suggestion, but a clear distribution/localization signal.
- **Telegram customization** — [#4919](https://github.com/HKUDS/nanobot/pull/4919): self-hosted Bot API base URL + extra headers for enterprise gateways. Long-open (~2 months); likely to land alongside the other Telegram fixes.
- **Search provider expansion** — [#5437](https://github.com/HKUDS/nanobot/pull/5437) (Serply Google SERP) and [#5234](https://github.com/HKUDS/nanobot/pull/5234) (mst-python metasearch with Reciprocal Rank Fusion). Both conflict-tagged; p1 priority on #5234 signals real appetite for provider diversity.
- **WebUI overhaul** — [#5710](https://github.com/HKUDS/nanobot/pull/5710) (project/sidebar reorganization), [#5704](https://github.com/HKUDS/nanobot/pull/5704) (48 new settings fields with autosave and live config reload), [#5703](https://github.com/HKUDS/nanobot/pull/5703) (history-rendering performance bounds).
- **TUI/WebUI parity** — [#5705](https://github.com/HKUDS/nanobot/pull/5705) (`/usage` context/token charts for TUI) and [#5498](https://github.com/HKUDS/nanobot/pull/5498) (unified onboarding alignment).
- **Telegram UX polish** — [#5706](https://github.com/HKUDS/nanobot/pull/5706) (collapse compaction notices into one edited message) and [#5387](https://github.com/HKUDS/nanobot/pull/5387) (reusable sticker replies).

**Near-term merge candidates:** the Telegram command fixes (#5707, #5711), the memory-bounding trio (#5663, #5664, #5665), and the UTF-8 fix (#5708) — all correctness/security-oriented and likely to land first. The larger WebUI settings feature (#5704) is probably a subsequent release target.

## 7. User Feedback Summary

- **CN developer/robotics ecosystem interest** — [#5693](https://github.com/HKUDS/nanobot/issues/5693) shows demand from unmanned-retail/IoT tooling (e.g., Luoduo robot brain) for edge-friendly, self-hosted modes and Chinese documentation. This is both a localization and distribution signal.
- **Telegram users are hitting real channel friction** — multiple independent contributors filed fixes for dropped or non-clickable slash commands (#5707, #5711) and message spam during compaction (#5706). This reflects everyday usage pain.
- **Container/long-running deployments leak resources** — Copilot OAuth persistence (#5638) and the unbounded caches (#5664, #5665, #5663) point to production operators running NanoBot for extended periods and in containers.
- **New-contributor onboarding is healthy** — [#5696](https://github.com/HKUDS/nanobot/issues/5696) was answered and closed within a day, a positive community-health indicator.

## 8. Backlog Watch

PRs that have been open for extended periods or carry conflict/priority flags needing maintainer attention:

- **[#5234 — mst-python metasearch provider](https://github.com/HKUDS/nanobot/pull/5234)** — opened 2026-08-03, tagged `priority: p1`, now `conflict`. The highest-priority long-standing item.
- **[#4919 — custom Telegram Bot API base URL](https://github.com/HKUDS/nanobot/pull/4919)** — opened 2026-07-14, the oldest item in the window (~2 months), still open.
- **[#5152 — subagent partial-completion regression](https://github.com/HKUDS/nanobot/pull/5152)** — opened 2026-07-28, tagged `regression`; a correctness fix that has not landed in over a month.
- **[#5387 — reusable Telegram sticker replies](https://github.com/HKUDS/nanobot/pull/5387)** — opened 2026-08-13, `conflict`.
- **[#5437 — Serply web-search provider](https://github.com/HKUDS/nanobot/pull/5437)** — opened 2026-08-19, `conflict`.
- **[#5590 — persisted JSON tool-result summarization](https://github.com/HKUDS/nanobot/pull/5590)** — opened 2026-08-28, `conflict`.

The recurring `conflict` label across four separate PRs suggests review engagement is happening but rebase cycles are stalling merges. A coordinated rebase pass or clearer rebase-on-demand policy would clear several stalled items efficiently.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-09-09

## 1. Today's Overview

Hermes Agent is in a high-activity, mostly stabilization phase. With 49 issues still open against only 1 closure in the last 24 hours, the project shows strong inbound traffic but limited triage turnaround. The just-released patch v0.21.1 (v2026.9.7) rolls up post-v0.21.0 main commits for downstream consumers, suggesting main is healthy but no new feature work has shipped. PR volume is broadly comparable to issues (50 updates, 41 still open), and a noteworthy cluster of small, focused PRs landed on 2026-09-08 targeting skills, compression, sessions, and platforms — indicating a steady maintenance cadence rather than architectural churn. Overall health is **stable with elevated bug pressure**, especially on the Desktop surface and provider integrations.

## 2. Releases

**v0.21.1 (v2026.9.7)** — released 2026-09-07.

- **Type:** Patch release.
- **Scope:** Aggregates all changes on `main` since v0.21.0 for tagged deployments and downstream consumers.
- **Pinned commit:** `6178e9f4eed8d99f4fc550add939d58c7bed6206`.
- **Breaking changes:** None indicated (patch release).
- **Migration notes:** No migration expected — consumers on v0.21.0 should be able to advance directly.

This is a supply-chain hygiene tag rather than a feature drop; visible behavior changes are tracked through the merged PRs in section 3.

## 3. Project Progress

Nine PRs moved to merged/closed on 2026-09-08, concentrated on correctness fixes and compat carry-forwards:

- **[#95483](https://github.com/NousResearch/hermes-agent/pull/95483)** — *fix(kanban): enforce exact PASS review verdicts* (djagya, closed). Kanban review tasks can no longer transition to `done` without a proper PASS verdict, closing a dependency-graph bypass.
- **[#102021](https://github.com/NousResearch/hermes-agent/pull/102021)** — *fix(skills): validate writes before approval staging* (djagya, closed). Adds payload-intrinsic validation before skills enter the pending approval queue; preserves disk/state checks at approval replay.
- **[#100304](https://github.com/NousResearch/hermes-agent/pull/100304)** — *fix(fallback): use canonical API-mode resolution* (djagya, closed). Fixes fallback activating on the wrong API mode for `kimi-coding` credentials (previously stuck on `chat_completions` while the endpoint required `anthropic_messages`).
- **[#106084](https://github.com/NousResearch/hermes-agent/pull/106084)** — *fix(agent): route keyless local auxiliary providers* (JoaoMarcos44, closed, duplicate carry-forward). Brings the verified Ollama auxiliary-provider routing fix onto current `main`.
- **[#105943](https://github.com/NousResearch/hermes-agent/pull/105943)** — *fix(gateway): honor profile namespace in session-key parse + busy sibling match* (gaoanze888, closed, duplicate). Named-profile sessions now correctly resolve under `multiplex_profiles` instead of being mis-keyed as `agent:main`.
- **[#103224](https://github.com/NousResearch/hermes-agent/pull/103224)** — *fix(desktop): name Hermes Cloud connections by instance, not dashboard URL* (IAvecilla, closed). Carries NAS instance `name` through to the registry label so renames reflect in desktop.

Not visible here, but consistent with the dataset, several other PRs from 2026-09-08 closed in the same window (totaling 9 merged/closed). Net feature progress is limited to small reliability hardening rather than new capabilities.

## 4. Community Hot Topics

The conversation skews toward infrastructure and reliability pain rather than new features.

- **[#66616](https://github.com/NousResearch/hermes-agent/issues/66616)** — *Skills index is stale or degraded (degraded)*. **180 comments**, automated probe flagging the `/docs/skills` index at 29.8h old (limit 26h). The single most-talked-about thread; reflects the fragility of cron-driven doc regen (`.github/workflows/skills-index.yml` + `deploy-site.yml` at 6/18 UTC). Underlying need: **trustworthy doc/search surfaces for the Skills Hub**.
- **[#88584](https://github.com/NousResearch/hermes-agent/issues/88584)** — *Automated Nous integration is blocked*. **78 comments**, with merge conflicts in `cron/jobs.py` blocking the scheduled Nous→Enterkey merge. Underlying need: **cross-org automation resilience and conflict visibility**.
- **[#105145](https://github.com/NousResearch/hermes-agent/issues/105145)** — *Windows `hermes update` always reports FAILED (exit 8)*. **12 comments**, post-update verification resolves the wrong working directory in `scripts/desktop-update/windows.ps1`. Win-desktop updater UX crisis.
- **[#26277](https://github.com/NousResearch/hermes-agent/issues/26277)** — *Feature: optional email session isolation by normalized subject*. **11 comments, 2 👍**. Suggests a meaningful subset of email-gateway users want per-thread (not just per-sender) session isolation.
- **[#94769](https://github.com/NousResearch/hermes-agent/issues/94769)** — *Desktop UI continuously flickers (WS reconnect loop 2–5s)*. **8 comments**. Multi-profile Mac desktop setups with Bot Mode are clearly unstable.

The common thread across these threads is **Desktop UX stability, automation reliability, and skills/doc freshness** — the project needs more maintainer bandwidth on staging reliability rather than new surface area.

## 5. Bugs & Stability

Reported/active on 2026-09-08, ranked by severity:

### P1 — High
- **[#105145](https://github.com/NousResearch/hermes-agent/issues/105145)** — Windows `hermes update` exit 8 with wrong CWD resolution. **No fix PR visible.** Blocks Windows desktop users from clean updates.
- **[#94769](https://github.com/NousResearch/hermes-agent/issues/94769)** — Desktop UI WS reconnect loop (macOS 26.5.2, multi-profile, Bot Mode). **No fix PR visible.**

### P2 — Medium
- **[#31987](https://github.com/NousResearch/hermes-agent/issues/31987)** — MCP HTTP `anyio` `RuntimeError` during `streamable_http_client` cleanup causes reconnect loop. **No fix PR visible.**
- **[#46131](https://github.com/NousResearch/hermes-agent/issues/46131)** — Ollama reasoning models return empty content (needs `reasoning_effort` to disable thinking). **No fix PR visible.**
- **[#106006](https://github.com/NousResearch/hermes-agent/issues/106006)** — Mistral custom provider streaming crashes on new `p` padding field + spurious "network error" retries. **No fix PR visible.**
- **[#106063](https://github.com/NousResearch/hermes-agent/issues/106063)** — Desktop/TUI quick-command alias to a skill prints "Loading skill" then drops it. **Fix PR:** [#106088](https://github.com/NousResearch/hermes-agent/pull/106088) (open).
- **[#106066](https://github.com/NousResearch/hermes-agent/issues/106066)** — WhatsApp quote parser drops text inside `ephemeralMessage` wrappers. **Fix PR:** [#106085](https://github.com/NousResearch/hermes-agent/pull/106085) (open).
- **[#106077](https://github.com/NousResearch/hermes-agent/issues/106077)** — Compression drops clarify answers before summarization. **Fix PR:** [#106089](https://github.com/NousResearch/hermes-agent/pull/106089) (open).
- **[#106026](https://github.com/NousResearch/hermes-agent/issues/106026)** — Updater prints success banner after HTTP 429 fetch failure. **No fix PR visible.**
- **[#106005](https://github.com/NousResearch/hermes-agent/issues/106005)** — Multiplex profiles: MCP/tools are not profile-scoped; only first profile gets tools. **No fix PR visible.**
- **[#106003](https://github.com/NousResearch/hermes-agent/issues/106003)** — Desktop sidebar shows "No sessions yet" despite matching `state.db` rows. **No fix PR visible.**

### P3 — Lower (selected)
- **[#94726](https://github.com/NousResearch/hermes-agent/issues/94726)** — *Tracking: Desktop Bot Mode — open bugs and issue classes (Aug 2026 sweep)*. **CLOSED** by maintainer (`teknium1`) after September 8 revalidation; scoped to four Bot Mode improvements targeting main.
- **[#106009](https://github.com/NousResearch/hermes-agent/issues/106009)** — Desktop Sessions sidebar near-zero width. **Fix PR:** [#106095](https://github.com/NousResearch/hermes-agent/pull/106095) (open).
- **[#105868](https://github.com/NousResearch/hermes-agent/issues/105868)** — Full-backup reliability consolidation / auditable dry-run coverage.
- **[#106025](https://github.com/NousResearch/hermes-agent/issues/106025)** — `install.sh` connectivity probe against `duckduckgo.com` causes false warnings on healthy networks (esp. China).
- **[#106017](https://github.com/NousResearch/hermes-agent/issues/106017)** — Desktop fleet + condensed profile dropdown omits active gateway default profile.
- **[#106016](https://github.com/NousResearch/hermes-agent/issues/106016)** — `--in DIR` + `--continue` + `--create-if-missing` creates unbound session.
- **[#105986](https://github.com/NousResearch/hermes-agent/issues/105986)** / **[#106064](https://github.com/NousResearch/hermes-agent/issues/106064)** — Gateway warm-up gaps (provider context discovery, local environment probe).

**Assessment:** Bug density is high but most P2 reports have either a matching open fix PR or duplicate carry-forwards. The two unaddressed P1s (Windows update + Desktop WS reconnect loop) are the ones most likely to erode user trust.

## 6. Feature Requests & Roadmap Signals

Active feature requests worth tracking:

- **[#26277](https://github.com/NousResearch/hermes-agent/issues/26277)** — Email session isolation by normalized subject (11 comments, 2 👍). Most-discussed feature; aligns with the Email gateway's maturing role.
- **[#48723](https://github.com/NousResearch/hermes-agent/issues/48723)** — Support Python 3.14. With Homebrew defaulting to Python 3.14 on macOS, this is effectively a blocking-adoption issue. **High probability of next minor.**
- **[#50195](https://github.com/NousResearch/hermes-agent/issues/50195)** — Switch working directory mid-session (CLI + Desktop). Common friction point for multi-project users.
- **[#96858](https://github.com/NousResearch/hermes-agent/issues/96858)** — Official mirror/update channel for users in mainland China (also frames market-strategy rationale). Strategic request, not a code feature.
- **[#106072](https://github.com/NousResearch/hermes-agent/pull/106072)** — *feat(gateway): fire `on_message_merged` when a busy follow-up is folded into the running turn* (open). Likely to land given PR is already raised.

**Prediction for next minor (v0.22.x):** Strong signals point to (a) Python 3.14 support, (b) per-profile MCP/tool scoping consolidation, (c) Windows desktop update workflow hardening, and (d) compression correctness for batched clarifications. New marketing/surface area (mirrors, multi-region) is unlikely without explicit NousResearch direction.

## 7. User Feedback Summary

Concrete pain points reported by real users:

- **Windows desktop updater is unusable in current state** ([#105145](https://github.com/NousResearch/hermes-agent/issues/105145)) — successful update reports failure; users cannot tell whether they are up to date.
- **Multi-profile Desktop setups are unstable on macOS** ([#94769](https://github.com/NousResearch/hermes-agent/issues/94769)) — UI flicker every 2–5s, worse during agent turns. Indicates pressure on the WebSocket reconnect discipline under profile multiplexing.
- **Skills/install ergonomics are visibly broken** ([#106090](https://github.com/NousResearch/hermes-agent/pull/106090)) — bundled office skills require 7+ Python packages that are not declared in dependencies; "fresh install" silently lacks functionality.
- **Provider integrations are brittle vs upstream changes** — Mistral's new `p` padding field ([#106006](https://github.com/NousResearch/hermes-agent/issues/106006)) and Ollama's reasoning-model behavior ([#46131](https://github.com/NousResearch/hermes-agent/issues/46131)) are real-world examples of provider drift not covered by current tests.
- **Messaging UX has sharp edges** — Discord voice auto-leave timer not rearmed on user voice ([#105974](https://github.com/NousResearch/hermes-agent/issues/105974)), auto-TTS never plays in VC ([#101185](https://github.com/NousResearch/hermes-agent/issues/101185)), WhatsApp quote text dropped on ephemeral wrappers ([#106066](https://github.com/NousResearch/hermes-agent/issues/106066)).
- **Compression fidelity is a quiet trust issue** ([#106077](https://github.com/NousResearch/hermes-agent/issues/106077)) — losing batch clarify answers before summarization breaks decision continuity in long sessions.
- **Strategic/I18n feedback** ([#96858](https://github.com/Users/issues/96858)) — Chinese users requesting an official mirror with detailed market-strategy rationale; signals both a UX blocker and an opportunity.

Overall sentiment trend is **functional but flaky**: users can run Hermes productively but consistently hit friction on desktop/installation/provider edges.

## 8. Backlog Watch

Items in the "needs maintainer attention" column:

- **[#66616](https://github.com/NousResearch/hermes-agent/issues/66616)** (180 comments) — Open since 2026-07-18, has been automatically swept; root cause likely recurring. Needs a definitive fix to the cron or a manual re-run and postmortem.
- **[#88584](https://github.com/NousResearch/hermes-agent/issues/88584)** (78 comments) — Cross-org merge automation blocked by conflicts in `cron/jobs.py` since 2026-08-17. Needs maintainer unblock or a documented escalation path.
- **[#105145](https://github.com/NousResearch/hermes-agent/issues/105145)** (P1) — Windows `hermes update` exit 8, fresh (2026-09-07). No fix PR; risks degrading the Windows user base rapidly.
- **[#94769](https://github.com/NousResearch/hermes-agent/issues/94769)** (P1) — Desktop WS reconnect loop on multi-profile macOS setups; no fix PR; broad impact.
- **[#31987](https://github.com/NousResearch/hermes-agent/issues/31987)** — MCP HTTP transport `anyio` `RuntimeError`; affects all users of streamable-HTTP MCP servers; no fix PR.
- **[#48723](https://github.com/NousResearch/hermes-agent/issues/48723)** — Python 3.14 support (P1). Adoption blocker on default Homebrew macOS.
- **[#62418](https://github.com/NousResearch/hermes-agent/issues/62418)** — Kanban dispatcher `active_pr` respawn guard blocks legitimate rework; old enough (2026-07-11) to deserve a decision.
- **[#94726](https://github.com/NousResearch/hermes-agent/issues/94726)** — Just CLOSED, but the four-target scope it formalized needs follow-through PRs.
- **[#102021](https://github.com/NousResearch/hermes-agent/pull/102021)** & **[#95483](https://github.com/NousResearch/hermes-agent/pull/95483)** — Both closed in last 24h; maintainer review/merge hygiene here is healthy and should remain the model for the open P1/P2 bugs without fix PRs.

**Maintainer bandwidth indicator:** With 49 open issues, 41 open PRs, and at least 2 P1s lacking fixes, triage activity is the primary bottleneck. A focused weekly batch (close-or-fix) on the P1 set would be the highest-leverage move visible from the data.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-09-09

## 1. Today's Overview

PicoClaw shows moderate but steady activity in the last 24 hours, with **4 issues updated (all open)** and **8 pull requests updated (7 open, 1 merged/closed)**. The merged PR #714 marks a notable milestone for skills management, while fresh bug reports around config integrity (#3373, #3374) and tool behavior signal ongoing reliability concerns. No new releases were published. Overall project health appears stable but with a growing cluster of related configuration-layer defects that warrant maintainer triage. Several long-standing items remain in "stale" state, indicating reduced review velocity on older work.

## 2. Releases

**No new releases in the last 24 hours.** The latest tagged artifacts are not enumerated in the provided data.

## 3. Project Progress

Only one PR was merged/closed in the last 24 hours:

- **[#714 — skills: install/reinstall CLI and refactor into skillsCmd](https://github.com/sipeed/picoclaw/pull/714)** (merged, seanly): Adds `ParseInstallSpec`, `InstallFromGitHubEx`, `fetchTree`, `fetchDefaultBranch`, and `validateSubpath`; supports `repo@branch` and optional subpath syntax. Introduces a `reinstall` subcommand (force overwrite) and switches production installs to the GitHub Trees API for full-directory retrieval. This is a meaningful enhancement to the skills subsystem.

Other open PRs advancing the codebase but awaiting merge:
- **#3344 — Build Remote Agent phone pairing (`gbr/1`)**
- **#3371 — `opencode-go` provider with session header support**
- **#3222 — deltachat refactor (-200 LOC)**
- **#3357 / #3356 — Telegram UX fixes**

## 4. Community Hot Topics

Items receiving the most engagement (by comments):

- **[#3343 — Tool feedback animation editing Telegram indefinitely](https://github.com/sipeed/picoclaw/issues/3343)** — 3 comments, posted by raine. Documents a runaway `editMessageText` loop producing 228k+ Telegram API calls and triggering server-side rate limits. Indicates an underlying need for proper lifecycle/timeout handling around background UI feedback jobs.
- **[#3355 — Feishu connection error: `channel_list.feishu.app_id` unknown](https://github.com/sipeed/picoclaw/issues/3355)** — 1 comment, posted by ttghub. Signals that nightly builds introduce config-schema drift ahead of documentation updates, frustrating integrators.

Fresh, high-priority items with zero comments but considerable engineering implications:
- **[#3374 — Data race in `Config.initSensitiveCache`](https://github.com/sipeed/picoclaw/issues/3374)**
- **[#3373 — `SaveConfig` silently deletes API keys](https://github.com/sipeed/picoclaw/issues/3373)**

The configuration layer is clearly the current locus of user-reported pain.

## 5. Bugs & Stability

Ranked by severity/blast radius:

| Severity | Issue | Description | Fix PR Available? |
|---|---|---|---|
| **High** | [#3374](https://github.com/sipeed/picoclaw/issues/3374) | Data race in `Config.initSensitiveCache` (`pkg/config/security.go:221-222`) can return a `nil` replacer and panic `FilterSensitiveData`. Concurrency-safe secret handling is compromised. | ✅ Yes — [#3375](https://github.com/sipeed/picoclaw/pull/3375) "fix(config): guard lazy sensitive-data cache against concurrent init" (sting8k) |
| **High** | [#3373](https://github.com/sipeed/picoclaw/issues/3373) | `SaveConfig` performs silent data loss: every `api_key` after the first in a `model_list` entry is dropped, leaving a dangling `fallbacks` reference to a non-existent model. Silent credential/data loss. | ❌ No fix PR at this time |
| **Medium** | [#3343](https://github.com/sipeed/picoclaw/issues/3343) | Telegram tool feedback animation continues indefinitely after a failed turn; rate-limit fallout. | ❌ No fix PR; PR #3357 is adjacent (implicit mentions), not a direct fix |
| **Medium** | [#3355](https://github.com/sipeed/picoclaw/issues/3355) | Feishu integration fails on nightly `bbf6893c`: `channel_list.feishu.app_id` rejected. | ❌ No fix PR |

## 6. Feature Requests & Roadmap Signals

- **[#3344 — Build Remote Agent phone pairing (`gbr/1`)](https://github.com/sipeed/picoclaw/pull/3344)**: A new "spectator" pairing flow between phone and desktop agent via MIT `gbr-agent` v0.6.0+, QR + 8-char code, restricted to loopback (`http://127.0.0.1:8788`) or stdio. Strong candidate for the next release if maintainers prioritize mobile companion UX.
- **[#3371 — `opencode-go` provider](https://github.com/sipeed/picoclaw/pull/3371)**: Adds `https://opencode.ai/zen/go/v1` as a first-class provider with session-header routing. Likely to ship alongside other multi-provider work.
- **#3222** (in PR form) signals continued delta-chat channel maturation and removal of legacy password-based config paths.
- **#3357 / #3356**: Telegram UX refinements (implicit mentions on reply, document re-attachment) — likely bundled into a Telegram channel bug-fix release.

Predicted next-release themes: **secure configuration robustness**, **mobile/remote pairing**, and **provider ecosystem expansion**.

## 7. User Feedback Summary

Real-world pain points surfaced today:

- **Runaway background loops**: raine's report (#3343) demonstrates that without bounded control-flow around UI feedback animations, a failed agent turn degrades into operational and rate-limit problems for end users.
- **Config schema churn**: The Feishu integration breakage in #3355 (nightly `bbf6893c`) suggests users running cuttting-edge builds face undocumented breaking changes — frustration is implicit.
- **Trust in `SaveConfig`**: #3373 reports silent loss of user-supplied API keys. This is a high-impact trust issue: any round-trip through the config layer without backup puts user credentials at risk.
- **Concurrency safety expectations**: #3374 reveals users reasonably expect secret-redaction logic to be goroutine-safe. The community contributor sting8k already produced a candidate fix (#3375) within the same day, indicating engaged downstream responsiveness.
- **Telegram UX gap**: PRs #3357 and #3356 are community-driven patches addressing natural conversational patterns (replying to bot messages, quoting documents) that users expect to "just work."

Satisfaction signal: triage responsiveness appears healthy — at least one critical bug (#3374) was paired with a fix PR on the same day by the bug reporter, suggesting an active security-aware contributor base.

## 8. Backlog Watch

Items requiring maintainer attention (notably aged "stale" PRs):

- **[#3343 — Telegram feedback animation loop](https://github.com/sipeed/picoclaw/issues/3343)** — Stale; from 2026-08-22, only 3 comments, no maintainer response recorded. Operational risk.
- **[#3355 — Feishu config schema drift](https://github.com/sipeed/picoclaw/issues/3355)** — Stale; opened 2026-09-01, last activity 2026-09-08, 0 👍. Needs config-validation clarification or backward-compat fix.
- **[#3222 — deltachat refactor (-200 LOC)](https://github.com/sipeed/picoclaw/pull/3222)** — Stale since 2026-07-03. Substantial cleanup waiting on review.
- **[#3357 — Telegram replies as implicit mentions](https://github.com/sipeed/picoclaw/pull/3357)** — Stale, 2026-09-01; user-facing UX improvement pending review.
- **[#3356 — Re-attach quoted documents](https://github.com/sipeed/picoclaw/pull/3356)** — Stale, 2026-09-01; pairs with #3357.
- **Fresh, high-severity issues awaiting maintainer acknowledgement**:
  - **[#3373 — Silent API key deletion](https://github.com/sipeed/picoclaw/issues/3373)** — 0 comments since 2026-09-08, no fix.
  - **[#3374 — Sensitive-cache data race](https://github.com/sipeed/picoclaw/issues/3374)** — Companion fix PR #3375 ready; both need maintainer review.

**Action items for maintainers:**
1. Triage and merge [#3375](https://github.com/sipeed/picoclaw/pull/3375) (paired with #3374).
2. Acknowledge [#3373](https://github.com/sipeed/picoclaw/issues/3373) and decide on a fix path for the silent `api_keys` truncation.
3. Review the deltachat refactor PR (#3222) and the Telegram UX fixes (#3356, #3357) — all "stale" and unattended.
4. Investigate or document the Feishu schema change in #3355 to unblock nightly users.

---

*Digest generated 2026-09-09 from GitHub activity for [sipeed/picoclaw](https://github.com/sipeed/picoclaw). All links resolve to the referenced issues/PRs.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-09-09

## 1. Today's Overview

NanoClaw shows **moderate-to-high activity** on 2026-09-09, with 12 pull requests updated and 2 issues touched within the last 24 hours (1 issue closed, 1 issue active with community discussion). The release pipeline is quiet (no new versions published), suggesting work is consolidating into an upcoming cut rather than shipping immediately. Theme-wise, the day is dominated by **OpenCode provider integration** (two large PRs from `glifocat`), **thread/routing correctness fixes** in the agent-runner, and **setup/install recovery work** following the v1→v2 migration. No releases means users are working off `main`/nightly for riskier changes — a sign the maintainers are still stabilizing the post-migration code paths rather than declaring v2 stable.

## 2. Releases

*No new releases in the last 24 hours.* No migration notes required.

## 3. Project Progress

Two PRs closed in the last 24 hours, both touching the **setup/install pipeline** that was disrupted by the v1→v2 migration:

- **[PR #3729 — Closed](https://github.com/nanocoai/nanoclaw/pull/3729)** — `feat(setup)`: moves Echo and Slack setup into the community portal so a host can install a channel and manage perks via a single browser visit. This was the headline UX win of the day.
- **[PR #3441 — Closed](https://github.com/nanocoai/nanoclaw/pull/3441)** — `fix(setup): preserve files when git show fails`: makes setup copy steps atomic by writing `git show` output to a temp file and moving it only on success; helper extended to TypeScript setup paths. A long-lived fix (opened 2026-08-22) finally landed.

Additionally, **[Issue #3744](https://github.com/nanocoai/nanoclaw/issues/3744)** closed on the same day, closing out the remaining channel-install gap from the v1→v2 migration (WhatsApp, iMessage, Resend, Discord). Net effect: the migration's setup debt is materially reduced.

## 4. Community Hot Topics

- **[Issue #3735 — conversations/ archives grow without bound](https://github.com/nanocoai/nanoclaw/issues/3735)** — the only open issue with comments (2 comments) on the day. Raised by `TO-maschenborn`, reports that `archiveTranscriptFile()` writes a markdown archive per compaction into `groups/<folder>/conversations/` with **no retention, rotation, or cap**; on a fleet deployment the directory has reportedly grown to a problematic size. Underlying need: **operators want bounded on-disk growth from agent transcripts** — implicit ask for a configurable retention/rotation policy analogous to logrotate.
- **[PR #3747 — feat(add-opencode): integrate setup and host assistance](https://github.com/nanocoai/nanoclaw/pull/3747)** and **[PR #3733 — feat(add-opencode): implement provider contracts](https://github.com/nanocoai/nanoclaw/pull/3733)** from `glifocat` form a coordinated effort to onboard **OpenCode as a first-class provider**. This is the highest-traffic feature area today and signals strong demand for vendor-neutral, OpenCode-compatible NanoClaw deployments.
- **[PR #3743 — feat: add AgentMail email channel adapter](https://github.com/nanocoai/nanoclaw/pull/3743)** — a third-party channel integration addressing the long-standing pain of needing to own MX records to add email; the proposal (via agentmail.to API) sidesteps DNS entirely.

## 5. Bugs & Stability

Six of the twelve PRs are explicitly bug fixes; severity ranking below is inferred from impact scope:

| Severity | Item | Impact | Fix PR |
|----------|------|--------|--------|
| **High** | **[#3749](https://github.com/nanocoai/nanoclaw/pull/3749)** — `fix(threads)`: one agent invocation per thread | Dropped replies when triggers from different threads co-occur in one processing window | Fix PR exists |
| **High** | **[#3738](https://github.com/nanocoai/nanoclaw/pull/3738)** — `fix(agent-runner): thread replies from the message being answered` | `send_message`/`send_file` landed in the main channel instead of the originating thread (`resolveRouting` used wrong thread source) | Fix PR exists |
| **High** | **[#3750](https://github.com/nanocoai/nanoclaw/pull/3750)** — `fix(update): extract the whole scripts/ tree for the update controller` | `/update-nanoclaw` controller dies at module load because `git archive` list omits `scripts/provider-contract-verifier.ts` | Fix PR exists |
| **Medium** | **[#3746](https://github.com/nanocoai/nanoclaw/pull/3746)** — `fix: preserve provider cancellation, failure delivery, and skill files` | Cancellation signal not propagated through MCP tool wrappers; skill files at risk of being overwritten | Fix PR exists |
| **Medium** | **[#3742](https://github.com/nanocoai/nanoclaw/pull/3742)** — `fix(cli): add-mount --rw … (--ro is currently a no-op)` | `ncl groups config add-mount --ro` silently does nothing; read-write mounts were not expressible (fixes [#3690](https://github.com/nanocoai/nanoclaw/issues/3690)) | Fix PR exists |
| **Low / closed** | **[#3441](https://github.com/nanocoai/nanoclaw/pull/3441)** — `fix(setup): preserve files when git show fails` | Setup could leave partial files when `git show` failed mid-stream | **Merged/closed** |

Every reported bug has a corresponding fix PR open or closed — a positive signal for repository health.

## 6. Feature Requests & Roadmap Signals

- **OpenCode provider support** ([#3747](https://github.com/nanocoai/nanoclaw/pull/3747), [#3733](https://github.com/nanocoai/nanoclaw/pull/3743)) — strong probability of landing in the **next minor release**. Two PRs touch a coordinated surface (setup + runtime contracts).
- **Email channel without DNS overhead** ([#3743](https://github.com/nanocoai/nanoclaw/pull/3743) — AgentMail) — likely accepted as a community skill; thin integration suggests fast review.
- **Context-preview tool revival** ([#3745](https://github.com/nanocoai/nanoclaw/pull/3745)) — bringing `scripts/context-preview.ts` back onto `main` for maintainers/e2e; almost certainly a net-positive accept.
- **Build Remote Agent phone pairing** (`gbr/1`) ([#3494](https://github.com/nanocoai/nanoclaw/pull/3494)) — new pair protocol for remote-phone spectating; labeled without `follows-guidelines` markers, so review is uncertain. Roadmap fit depends on whether the maintainers want a 4th pairing protocol.
- **Conversations/ archive retention policy** ([#3735](https://github.com/nanocoai/nanoclaw/issues/3735)) — operators are effectively requesting a logrotate-style retention feature; high likelihood of being filed as a feature work item for the **next minor or the one after**.

## 7. User Feedback Summary

- **Operational pain**: `TO-maschenborn`'s fleet hit unbounded transcript growth — the most concrete real-world friction today. Users running NanoClaw as a long-lived agent fleet need lifecycle controls for on-disk artifacts.
- **Channel-setup friction post-migration**: `rsieb`'s issue #3744 documents that `migrate-v2.sh` could only run legacy `setup/install-<channel>.sh` scripts; 5 of 6 channels failed to install. Migration pain appears resolved but the report itself signals users migrating mid-flight have been burned by incomplete tooling.
- **Reply-routing correctness**: two simultaneous bugs (#3749, #3738) reported by `ljluestc` and `zvi-fried` show users noticed **replies landing in the wrong thread** — a UX problem on top of correctness. Both authors proactively opened fix PRs, indicating an active, capable contributor base.
- **Satisfaction**: with every reported bug accompanied by a fix PR (often by the reporter), and the v2 migration debts visibly closing, satisfaction appears **moderate to improving** rather than flagging.

## 8. Backlog Watch

- **[PR #3494 — Build Remote Agent phone pairing (`gbr/1`)](https://github.com/nanocoai/nanoclaw/pull/3494)** — opened **2026-08-23**, ~17 days without merge markers or updated review status. Long-open, no `follows-guidelines` tag, and introduces a fourth pair protocol — likely needs a maintainer decision on whether NanoClaw wants to standardize on this or close as `wontfix`/defer.
- **[Issue #3735 — transcript retention](https://github.com/nanocoai/nanoclaw/issues/3735)** — only 2 comments and 0 👍 so far, but the operational impact (unbounded disk usage on fleet installs) makes it high-value to triage soon. Recommend a maintainer acknowledgement and a label so it doesn't get buried.
- **[PR #3441](https://github.com/nanocoai/nanoclaw/pull/3441)** is now closed — but it stayed open from 2026-08-22 to 2026-09-08 (~17 days); consider whether setup/atomicity work needs a quicker review lane given how disruptive a broken setup is.

*Methodology note: digest derived strictly from the GitHub data provided; sentiment inferred from comment counts and PR/issue interaction patterns, not from explicit user sentiment text.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest: September 9, 2026

## 1. Today's Overview
IronClaw is currently experiencing high development activity, with 11 new Pull Requests processed in the last 24 hours. The primary focus of the engineering team today is on resolving a critical architectural flaw in the **Hosted-MCP (Model Context Protocol)** discovery mechanism, where user tool catalogs were incorrectly overwriting each other on multi-principal servers. While development velocity is high, the project is grappling with edge cases regarding CLI visibility of runtime-installed skills and configuration flexibility for large-context window models.

## 2. Releases
*No new releases reported in the last 24 hours.*

## 3. Project Progress
The team has been active in merging and closing 3 PRs today, primarily focused on MCP stability:
*   **[#8083 fix(extensions): merge discovered hosted-MCP catalogs instead of replacing them](https://github.com/nearai/ironclaw/PR/8083):** Addressed a race condition where one user's tool discovery would delete others' tools from the shared registry. (Closed)

There are 8 open PRs representing ongoing work, including:
*   **[#8090 fix(mcp): key discovered hosted-MCP catalogs per caller, not per extension](https://github.com/nearai/ironclaw/PR/8090):** A refinement of the MCP fix to ensure strict per-user tool isolation.
*   **[#8089 feat(extensions): bundle the agent-market hosted-MCP provider package](https://github.com/nearai/ironclaw/PR/8089):** Introducing first-party support for the agent-market provider with fallback tool declarations.
*   **[#8088 feat(common): distinguish a set-but-empty env var from an unset one](https://github.com/nearai/ironclaw/PR/8088):** Fixing a logic error where an empty string (`FOO=`) was incorrectly treated as unset.
*   **[#8087 feat(loop): make the prompt-context limit an override instead of a constant](https://github.com/nearai/ironclaw/PR/8087):** Allowing users to utilize context windows larger than the 128k default without patching source code.
*   **[#8084 feat(mcp): opt-in SEP-414 caller attribution on outbound hosted-MCP calls](https://github.com/nearai/ironclaw/PR/8084):** Implementing standardized attribution for outbound calls.

## 4. Community Hot Topics
The community is currently focused on two major issues regarding data visibility and de-bugging:
*   **[#8086 ironclaw skills list cannot see skills that the runtime writes](https://github.com/nearai/ironclaw/issue/8086):** A significant friction point for developers where agent-installed skills are invisible to the CLI, leading to confusion about whether a skill is actually installed or if it is simply a visibility issue.
*   **[#6778 Hosted-MCP: discovered tool catalogs are published per extension id, not per installation](https://github.com/nearai/ironclaw/issue/6778):** A security/privacy concern where cross-user metadata exposure occurs on multi-principal servers.

## 5. Bugs & Stability
*   **High Severity: Cross-User Metadata Exposure (#6778):** The current architecture keys tool catalogs by extension ID alone, allowing User B to overwrite or see tools discovered by User A on shared servers.
*   **Medium Severity: CLI Inconsistency (#8086):** The CLI fails to show skills written by the runtime or belonging to other users, hindering debugging efforts for agent-developers. unaffected*   **Low Severity: Config Logic Error (#8088):** The inability to distinguish between an empty environment variable and an unset one can cause silent failures when trying to override deployment endpoints.

## 6. Feature Requests & Roadmap Signals
*   **Context Window Flexibility:** There is a clear push to move away from hardcoded 128k token limits (#8087), signaling that IronClaw is preparing to support models with significantly larger context windows.
*   **Agent-Market Integration:** The bundling of the `agent-market` provider package (#8089) suggests a move toward a more robust ecosystem of third-party tools.
*   **Standardized Attribution:** The implementation of SEP-414 caller attribution (#8084) indicates a focus on industry-standard protocols for secure agent communication.

## 7. User Feedback Summary
*   **Developer Friction:** Users are expressing frustration that the `ironclaw skills list` command provides empty lists even when agents have active skills, leading to "ghost" bug reports during agent development.
*   **Deployment Rigidity:** Operators are concerned about "silent defaults" where configuration variables are ignored because they are empty strings, necessitating more robust environment handling.

## 8. Backlog Watch
*   **[#8086 (CLI Visibility):** Needs a structural change to allow the CLI to query the runtime state across different user contexts.
*   **[#6778 (MCP Security):** Requires a definitive fix to ensure multi-principal servers remain secure from cross-user metadata leakage.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-09-09

## 1. Today's Overview

LobsterAI shows no new issues, no new releases, and zero open Issues/active Items in the last 24 hours, indicating low community-driven reporting activity. However, internal contribution remains active: 9 pull requests were updated, with 8 merged/closed and 1 still open. The bulk of today's work is a coordinated OpenClaw v2026.8.1 compatibility and migration cleanup sweep, addressing plugin loading, SDK entry-point removals, native ask_user protocol changes, gateway startup regressions, and renderer artifacts. Overall project health is stable but in a stabilization phase following an upstream runtime upgrade.

## 2. Releases

No new releases in the last 24 hours. The most recent observable work revolves around the upstream OpenClaw v2026.8.1 runtime upgrade, suggesting a bundled version bump is imminent.

## 3. Project Progress

The following PRs were merged/closed today (all dated 2026-09-08 except where noted):

- **[#2630](https://github.com/netease-youdao/LobsterAI/pull/2630)** — `fix(openclaw): restore DingTalk and Lark message dispatch`. Restores inbound message routing for DingTalk (upgraded to a current-SDK build) and Lark (fixed `runtime.config.loadConfig` call).
- **[#2629](https://github.com/netease-youdao/LobsterAI/pull/2629)** — `fix(openclaw): restore NIM and NetEase Bee plugin compatibility`. Patches precompiled entry points that import `emptyPluginConfigSchema` from the removed `openclaw/plugin-sdk` root.
- **[#2628](https://github.com/netease-youdao/LobsterAI/pull/2628)** — `fix(openclaw): restore DingTalk and Lark plugin compatibility`. Resolves Windows Jiti loader failures (`Cannot use 'import.meta' outside a module`) and missing SDK root export for Lark.
- **[#2627](https://github.com/netease-youdao/LobsterAI/pull/2627)** — `fix(openclaw): adapt native ask_user question protocol`. Wires the new `question.*` protocol to the desktop question UI and removes leaked recommendation suffixes in confirmation labels.
- **[#2626](https://github.com/netease-youdao/LobsterAI/pull/2626)** — `fix(openclaw): preinstall external provider plugins`. Preinstalls the eight providers upstream now ships as external plugins, eliminating post-startup downloads and `requires capability consent` errors.
- **[#2625](https://github.com/netease-youdao/LobsterAI/pull/2625)** — `fix(openclaw): stabilize upgrade migration and packaged gateway startup`. Fixes legacy session migration, agent config sync, packaged SDK resolution, and Windows runtime distribution size.
- **[#2624](https://github.com/netease-youdao/LobsterAI/pull/2624)** — `fix(artifacts): 修复 HTML 缩略图白屏与 Mermaid 预览渲染竞态`. Adds HTML parent/child frame generation checks, bounded CSS-animation waiting, isolated Mermaid render tasks, and regression tests.
- **[#1159](https://github.com/netease-youdao/LobsterAI/pull/1159)** — `feat(cowork): add session fork` (closed as stale). Adds a "Session Fork" action (⋯ → 创建分支会话) to branch cowork sessions.

The advance is concentrated in OpenClaw migration hardening and renderer artifact stability. The session fork feature was closed as stale rather than merged.

## 4. Community Hot Topics

No new community issues or comments were recorded in the last 24h. Engagement signals are absent — all 9 PRs show `Comments: undefined` and `👍: 0`. Topic heat must be inferred from PR scope rather than reactions:

- The OpenClaw v2026.8.1 compatibility cluster (PRs [#2625](https://github.com/netease-youdao/LobsterAI/pull/2625)–[#2631](https://github.com/netease-youdao/LobsterAI/pull/2631)) is the dominant theme, reflecting a single underlying user need: reliable plugin + provider + migration behavior after upgrading the bundled runtime.
- Underlying need analysis: users expect channel integrations (DingTalk, Lark), model providers (Qwen, NIM, NetEase Bee), and core flows (scheduled tasks, ask_user, agent migration) to remain functional across runtime upgrades without manual intervention.

## 5. Bugs & Stability

Reported/fixed in the last 24h (severity ranked roughly high → low):

| Severity | Issue | Reference | Fix PR |
|----------|-------|-----------|--------|
| High | Gateway refuses to start after upgrade due to legacy session migration, agent roster mismatches, packaged SDK resolution, and `CONFIG_VALIDATION_FAILED`-triggered invalid restarts | [#2625](https://github.com/netease-youdao/LobsterAI/pull/2625) | merged |
| High | `requires capability consent` crash when adding Qwen post-upgrade; runtime tried to download providers at startup | [#2626](https://github.com/netease-youdao/LobsterAI/pull/2626) | merged |
| High | DingTalk `DingTalk runtime not initialized` after plugin load; Lark `runtime.config.loadConfig is not a function` blocks inbound dispatch | [#2630](https://github.com/netease-youdao/LobsterAI/pull/2630), [#2628](https://github.com/netease-youdao/LobsterAI/pull/2628) | merged |
| High | NIM and NetEase Bee plugin load failure with `ERR_PACKAGE_PATH_NOT_EXPORTED` (removed `openclaw/plugin-sdk` root export) | [#2629](https://github.com/netease-youdao/LobsterAI/pull/2629) | merged |
| Medium | Native `ask_user` requests stalled silently — desktop dialog never opened; recommendation suffix leaked into button labels | [#2627](https://github.com/netease-youdao/LobsterAI/pull/2627) | merged |
| Medium | HTML thumbnail white-screen and Mermaid preview render race conditions (frame generation, animation blocking, container node mis-deletion, stale cache reuse) | [#2624](https://github.com/netease-youdao/LobsterAI/pull/2624) | merged |
| Medium | Scheduled-task history double-import (run-scoped + base session aliases) and pre-receipt failures leaving task stuck in pre-state | [#2631](https://github.com/netease-youdao/LobsterAI/pull/2631) | open |

All today's identified regressions have an associated fix, with only [#2631](https://github.com/netease-youdao/LobsterAI/pull/2631) still open.

## 6. Feature Requests & Roadmap Signals

- **[#1159](https://github.com/netease-youdao/LobsterAI/pull/1159)** — `feat(cowork): add session fork` (closed as stale, created 2026-03-31). Long-standing request to branch cowork sessions from the detail view's action menu. Closure as stale suggests either a superseding implementation has landed or the proposal requires a refresh before reconsideration. Likely candidate for a re-opened/re-designed PR in a future cowork release.
- Preinstalling the eight supported external provider plugins ([#2626](https://github.com/netease-youdao/LobsterAI/pull/2626)) signals a roadmap toward fewer runtime downloads and stricter capability consent handling at first launch.

## 7. User Feedback Summary

No new user-submitted issues, comments, or reactions in the last 24h, so no fresh qualitative feedback is observable. The PR narratives themselves encode the following implied user pain points addressed today:

- Inbound IM messages (DingTalk, Lark) must reach the agent after plugin loads without manual reconfiguration.
- Adding a secondary model provider (Qwen) must not block gateway startup with consent prompts when the primary model is unchanged.
- Renderer previews (HTML thumbnails, Mermaid) must not regress to white screens or stale caches.
- Legacy data and configurations must survive runtime upgrades without forcing users to re-create sessions or agents.
- Scheduled task history must reflect a single source of truth and not strand tasks in a pre-execution state on early failure.

## 8. Backlog Watch

- **[PR #1159 — Session Fork](https://github.com/netease-youdao/LobsterAI/pull/1159)** — Closed as stale after ~5 months (created 2026-03-31, updated 2026-09-08). Maintainers should clarify whether the feature has been implemented through other means or whether a refreshed proposal is welcome.
- **[PR #2631 — Cron run history & pre-receipt failure state](https://github.com/netease-youdao/LobsterAI/pull/2631)** — Only PR still open from today's batch; needs review and merge to complete the OpenClaw v2026.8.1 migration sweep.
- No outstanding Issues reported. The combination of zero open Issues and a single open PR indicates the project is in a clean state pending the final cron-history fix landing.

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

# CoPaw Project Digest — 2026-09-09

## 1. Today's Overview

CoPaw (github.com/agentscope-ai/CoPaw, data references QwenPaw upstream) shows a very active development day: 30 issues and 45 PRs were touched in the last 24h, with a healthy near-50/50 split between open and closed/merged work (15/15 issues, 21/24 PRs). A new patch release, **v2.2.1-beta.1**, shipped, and maintainers landed a broad set of fixes across console UI, MCP handshaking, shell tooling, and plugins — roughly 24 PRs merged or closed. However, the report also surfaces persistent stability concerns (event-loop freezes, lost model replies, silent runtime rollbacks, MCP regression) and a wave of v2.2.0 UI/regression reports from the community, suggesting the project is in a rapid-fix cycle following the 2.2.0 launch. Overall project health looks solid in terms of throughput and maintainer responsiveness, though several high-severity runtime bugs remain open.

## 2. Releases

**v2.2.1-beta.1** (published 2026-09-08) — a beta patch release on top of v2.2.0:
- **feat:** add agent model routing settings ([PR #7501](https://github.com/agentscope-ai/QwenPaw/pull/7501))
- **docs:** update website for v2.2.0 ([PR #7517](https://github.com/agentscope-ai/QwenPaw/pull/7517))
- **fix(chat):** sync resolved sessions during streaming

No explicit breaking changes or migration notes were announced. As a `-beta.1` candidate, users are advised to verify chat streaming and model-routing behavior after upgrading from v2.2.0 stable. A release-duty verification issue ([#7635](https://github.com/agentscope-ai/QwenPaw/issues/7635)) was opened and closed for installation validation of this beta.

## 3. Project Progress

Key PRs merged/closed today (24 total), grouped by area:

**Console / Frontend:**
- [#7502](https://github.com/agentscope-ai/QwenPaw/pull/7502) — Redesign of sidebar and settings experience (merged).
- [#7482](https://github.com/agentscope-ai/QwenPaw/pull/7482) — Chinese/English localization for the Agent Kanban PawApp (merged).
- [#7605](https://github.com/agentscope-ai/QwenPaw/pull/7605) — Plugin manager overhaul: preserve browsing context after installs, detect/apply individual and batch plugin updates (merged; fixes #7582).
- [#7610](https://github.com/agentscope-ai/QwenPaw/pull/7610) — Prevent chat submissions from bypassing the queue while a task is running (merged; addresses 409 condition in #7559).

**Runtime / Backend reliability:**
- [#7621](https://github.com/agentscope-ai/QwenPaw/pull/7621) — Handle PDF `DataBlock`s for text-only models at request normalization (merged).
- [#7631](https://github.com/agentscope-ai/QwenPaw/pull/7631) — Authenticate CLI requests to the current local runtime inside Hub sandboxes (merged; fixes #7612).
- [#7598](https://github.com/agentscope-ai/QwenPaw/pull/7598) — Detach shell-tool child stdin from the interactive console on Windows (merged; fixes #7554).

**MCP / Integrations:**
- [#7627](https://github.com/agentscope-ai/QwenPaw/pull/7627) — Let the legacy MCP handshake arbitrate a 401 discover probe, restoring fallback for legacy endpoints (merged; addresses #7620).

Also merged is [#7636](https://github.com/agentscope-ai/QwenPaw/pull/7636), a follow-up stripping PDF document blocks from OpenAI-compatible Chat Completions requests regardless of multimodal support (targeting self-hosted vLLM, DeepSeek, DashScope, Zhipu...). New open feature work landed today as well: Requesty as a built-in OpenAI-compatible provider ([#7638](https://github.com/agentscope-ai/QwenPaw/pull/7638)), QwenPaw-Data 0.3.0 app integration ([#7637](https://github.com/agentscope-ai/QwenPaw/pull/7637)), scroll history-integrity scan optimization ([#7639](https://github.com/agentscope-ai/QwenPaw/pull/7639)), unknown-slash-command feedback ([#7632](https://github.com/agentscope-ai/QwenPaw/pull/7632)), and a mobile agent selector improvement ([#7623](https://github.com/agentscope-ai/QwenPaw/pull/7623)).

## 4. Community Hot Topics

The most-discussed items this window, ranked by engagement:

- **[#7579 — Model reply lost from context (8 comments, OPEN)](https://github.com/agentscope-ai/QwenPaw/issues/7579)** — Highest-activity issue: an agent's own reply is persisted but missing from subsequent requests, yielding empty responses ("model can't see what it just said"). Signal: broad concern over conversational memory integrity in 2.2.0.
- **[#7597 — Tool-returned image/PDF binary as bare base64 → HTTP 400 (6 comments, CLOSED)](https://github.com/agentscope-ai/QwenPaw/issues/7597)** — Tool results carrying binary data trigger "file must have a file_id or file_data." Indicates demand for robust file/file_data multiplexing in tool output. (AI-assisted drafting noted.)
- **[#7559 — 409 "task already running" when queueing a message (5 comments, CLOSED)](https://github.com/agentscope-ai/QwenPaw/issues/7559)** — Users expect a message queue, not an error, during active tasks; resolved via PR #7610.
- **[#7363 — Synchronous calls freeze the event loop; timeout never fires (5 comments, OPEN)](https://github.com/agentscope-ai/QwenPaw/issues/7363)** — Windows Desktop unresponsive 118–135s at startup / ~126s per message. High-impact UX concern.
- **[#7469 — ReMe background embedding fails: "as_embedding:default accessed before start()" (5 comments, CLOSED)](https://github.com/agentscope-ai/QwenPaw/issues/7469)** — Silent memory-indexing failure when ReMe uses an OpenAI-compatible embedding backend.
- **[#7589 — Heartbeat cron session feedback loop, duplicate message pile-up (4 comments, OPEN)](https://github.com/agentscope-ai/QwenPaw/issues/7589)** — Reported as **High severity**: agent unresponsive for ~2 hours.
- **[#7615 — Where to ask about third-party plugins/skills (1 comment, 3 👍, OPEN)](https://github.com/agentscope-ai/QwenPaw/issues/7615)** — The day's most-liked item; community pointing users to the AgentScope platform community. Signals demand for a clearer support/slack surface.

Underlying needs: message-queue semantics rather than errors, reliable binary/file tool results, no event-loop blocking, and better visibility into long-term memory health.

## 5. Bugs & Stability

Ranked by severity (with fix-PR status where known):

1. **[#7579 — Assistant reply missing from context / empty responses (OPEN, HIGH)](https://github.com/agentscope-ai/QwenPaw/issues/7579)** — Core conversational integrity bug; no fix PR yet.
2. **[#7589 — Heartbeat cron feedback loop / duplicate pile-up (OPEN, HIGH)](https://github.com/agentscope-ai/QwenPaw/issues/7589)** — Agent unresponsive ~2h; no fix PR yet.
3. **[#7363 — Sync calls block event loop, timeout never fires (OPEN, HIGH)](https://github.com/agentscope-ai/QwenPaw/issues/7363)** — Desktop freezes for minutes; no fix PR yet.
4. **[#7633 — llama.cpp version-parse failure: "has_update" false-positive silently rolls back user-upgraded runtime (OPEN)](https://github.com/agentscope-ai/QwenPaw/issues/7633)** — Silent downgrade of a manually-upgraded b10853 runtime to bundled b8744; data-integrity/trust concern.
5. **[#7625 — Gemini 400 "Requests ending with a model turn are not supported" after background tool completion (OPEN)](https://github.com/agentscope-ai/QwenPaw/issues/7625)** — Model request shape issue after offloaded tool calls; no fix PR yet.
6. **[#7622 — v2.2.0 modal backgrounds "transparent"; overlay mask not applied (OPEN)](https://github.com/agentscope-ai/QwenPaw/issues/7622)** — Official v2.2.0 CSS regression, reproducible without third-party plugins.
7. **[#7620 — Non-conforming HTTP 401 MCP response blocks legacy fallback, misleads as "requires OAuth" (CLOSED)](https://github.com/agentscope-ai/QwenPaw/issues/7620)** — Fixed by PR #7627.
8. **[#7634 — ClawHub skill installation fails for duplicate skill names (OPEN)](https://github.com/agentscope-ai/QwenPaw/issues/7634)** — New marketplace regression.
9. **[#7679/#7619 — Windows 11: conversation ends without cause on qwen-35B-A3B-FP8 (OPEN)](https://github.com/agentscope-ai/QwenPaw/issues/7619)** — Local-model conversation aborts silently.

Regression clusters already addressed today: PDF/DataBlock-based breakage of text-only endpoints (fixes #7621, #7636 — closes #7597/#7617), spawn-queue 409 (#7610 closes #7559), Windows shell child stdin hang (#7598 closes #7554), and Hub sandbox CLI 401 (#7631 closes #7612).

## 6. Feature Requests & Roadmap Signals

- **Plugin/marketplace UX (merged):** One-click/batch plugin update with update notifications — [#7582](https://github.com/agentscope-ai/QwenPaw/issues/7582) landed via PR #7605, reflecting demand for multi-machine "maintenance manager" workflows.
- **Community integration:** Login + community inbox + quick feedback linking local QwenPaw to the AgentScope community ([#7583](https://github.com/agentscope-ai/QwenPaw/issues/7583)) — a clear roadmap signal toward tighter ecosystem integration.
- **Unknown slash-command handling:** Misspelled channel commands should be rejected with feedback, not forwarded to the agent ([#7479](https://github.com/agentscope-ai/QwenPaw/issues/7479)); a candidate PR just opened ([#7632](https://github.com/agentscope-ai/QwenPaw/pull/7632)).
- **Context compaction budget-awareness:** Trigger/final budget based on the complete provider request plus safe active-turn overflow handling ([#7628](https://github.com/agentscope-ai/QwenPaw/issues/7628)) — likely to influence next memory/compaction release.
- **CPU-detection opt-out for VMs/cloud desktops:** Users blocked by NumPy baseline CPU checks ([#7630](https://github.com/agentscope-ai/QwenPaw/issues/7630)) — likely a quick configuration toggle in next version.
- **Artifact display redesign:** Show artifacts above each message's timestamp instead of collapsing them into completed steps ([#7553](https://github.com/agentscope-ai/QwenPaw/issues/7553)).
- **New providers/integrations (in-flight):** Requesty provider ([#7638](https://github.com/agentscope-ai/QwenPaw/pull/7638)), OpenViking long-term memory backend ([#7613](https://github.com/agentscope-ai/QwenPaw/pull/7613)), QwenPaw-Data 0.3 app ([#7637](https://github.com/agentscope-ai/QwenPaw/pull/7637)).

## 7. User Feedback Summary

- **Satisfaction drivers:** Maintainers moved quickly on several reported regressions, closing #7597, #7559, #7617, #7612, #7554, #7620, and #7469 within the window — a pattern users will likely perceive as responsive.
- **Pain points (recurring):** (a) v2.2.0 UI regressions (transparent modal overlays, #7622) and inability to hide agent thought-process in the panel (#2972, closed); (b) timezone display: admin console shows UTC instead of configured `user_timezone` (#6948, closed) — persistent localization annoyance; (c) installation/deployment friction for VMs/cloud desktops (#7630) and silent runtime rollback on local llama.cpp (#7633); (d) message queue vs. 409 conflicts during active tasks (#7559).
- **Workflow observations:** Some users deploy QwenPaw across multiple machines as a "maintenance manager," making one-click plugin updates and cross-device sync their top ask (#7582). Others rely on local open models (qwen-35B-A3B-FP8) and hit unexplained conversation termination (#7619). Community is actively steered to platform.agentscope.io for third-party plugin/skill support ([#7615](https://github.com/agentscope-ai/QwenPaw/issues/7615), 3 👍).

## 8. Backlog Watch

Long-pending items needing maintainer attention:

- **[PR #5992 — Per-session model overrides (OPEN, "Under Review", since 2026-07-12)](https://github.com/agentscope-ai/QwenPaw/pull/5992)** — Oldest open PR in the set (~2 months). Opt-in per-session LLM selection; useful for multi-model deployments.
- **[PR #6399 — Reranker UI config panel for ReMeLightMemoryCard (OPEN, "Under Review", since 2026-07-23)](https://github.com/agentscope-ai/QwenPaw/pull/6399)** — Visual reranker configuration; paired with a backend PR, needs integration decision.
- **[PR #7427 — Patch Creator frontend dependency vulnerabilities (OPEN, since 2026-08-31)](https://github.com/agentscope-ai/QwenPaw/pull/7427)** — Resolves 5 known CVEs (3 high, 2 moderate) in React Router DOM 6; security-relevant, deserves priority.
- **[PR #7613 — OpenViking long-term memory backend (OPEN, "Under Review")](https://github.com/agentscope-ai/QwenPaw/pull/7613)** — New memory backend waiting on maintainer review/scope confirmation against #7252.
- **[#7363 — Event-loop blocking / timeout failure (OPEN since 2026-08-27)](https://github.com/agentscope-ai/QwenPaw/issues/7363)** — Long-standing high-severity runtime issue with no linked fix PR after ~2 weeks.
- **[#7156 — Hardcoded embedding health-check timeout (CLOSED after ~3 weeks)](https://github.com/agentscope-ai/QwenPaw/issues/7156)** — Worth confirming the fix ships in the next minor release so users don't hit BM25-only degradation.

*Data window: issues/PRs updated 2026-09-08, digest generated 2026-09-09. Metrics: 30 issues updated, 45 PRs updated, 1 release.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-09-09

## 1. Today's Overview

ZeptoClaw shows a focused, security- and reliability-oriented day of activity. Two of three updated issues were closed, both addressing concrete risk surfaces (vulnerable dependencies and permissive file permissions), and the corresponding security hardening PR (#673) was merged into the codebase. One strategic feature issue remains active (#666) targeting durable memory semantics. Activity volume is modest (3 issues, 2 PRs) but signal quality is high — every item maps to either a CVE-class risk, an information-disclosure bug, or a core architectural extension, indicating a mature, hardening-driven development phase rather than churn.

## 2. Releases

No new releases were published in the last 24 hours. The most recent shipping change is PR #673 ([qhkm/zeptoclaw#673](https://github.com/qhkm/zeptoclaw/pull/673)) which was merged and likely awaits a tagged release.

## 3. Project Progress

Only one PR was closed/merged in the last 24 hours:

- **[#673 — fix(security): harden secret storage and dependencies](https://github.com/qhkm/zeptoclaw/pull/673)** (closed, qhkm) — Direct fix for [#652](https://github.com/qhkm/zeptoclaw/issues/652). Creates `~/.zeptoclaw/config.toml` and `panel.token` with `0600` permissions, sets ZeptoClaw-owned directories to `0700`, and retroactively repairs permissions on files created by older releases. Combined with [#651](https://github.com/qhkm/zeptoclaw/issues/651) (RustSec advisories for `h2`, `quick-xml`, `lopdf`, `bcrypt`, `quinn-proto`, `crossbeam-epoch`), the project's baseline threat model and CI deny-gating are materially stronger. This effectively unblocks the `cargo deny check advisories` job (#646) that had been failing.

## 4. Community Hot Topics

Engagement volume is low across all items (≤1 comment, 0 reactions), so prioritization is driven by issue content rather than popularity.

- **[#666 — Durable cross-session recall and transactional memory writes](https://github.com/qhkm/zeptoclaw/issues/666)** (open, 1 comment) — The single most strategically significant item. Linked to internal Exec #8 and §2 Memory & Learning System, and explicitly contrasts ZeptoClaw's selective retrieval (pinned entries + ≤5 query-matched memories within a 2,000-char budget per `src/memory/mod.rs:34–35`, `279–340`) against the always-present profile approach of Hermes. Underlying need: maintainers are defending a deliberate cost-efficiency advantage while planning durability/atomicity guarantees — the kind of architectural decision that shapes the next major version.
- **[#674 — fix(panel): replace websocket bearer URLs with tickets](https://github.com/qhkm/zeptoclaw/pull/674)** (open) — Stems from the same security trajectory. Replaces long-lived API tokens/JWT in `?auth=` query strings (visible to access logs and browser history) with 30-second single-use tickets minted via a CSRF-protected endpoint. Indicates the panel is moving toward a zero-credential-in-URL posture.

## 5. Bugs & Stability

| Rank | Issue | Severity | Status | Fix PR |
|---|---|---|---|---|
| 1 | [#652 — secret files written without 0600 perms](https://github.com/qhkm/zeptoclaw/issues/652) | High (info disclosure on multi-user hosts) | Closed | [#673](https://github.com/qhkm/zeptoclaw/pull/673) ✅ merged |
| 2 | [#651 — 7 RustSec advisories](https://github.com/qhkm/zeptoclaw/issues/651) | High (deny-gate failing) | Closed | [#673](https://github.com/qhkm/zeptoclaw/pull/673) ✅ merged |
| — | [#666](https://github.com/qhkm/zeptoclaw/issues/666) | P2-high (architecture, not a bug) | Open | None yet |

No crashes or regressions reported in the last 24 hours. Both closed items are confirmed-fix-verified by the merged PR. No new issues opened today.

## 6. Feature Requests & Roadmap Signals

- **Durable, transactional memory** ([#666](https://github.com/qhkm/zeptoclaw/issues/666)) — The clearest roadmap signal. The framing (cross-session recall + atomic writes) suggests a near-term refactor of `src/memory/mod.rs` that preserves the 2,000-char retrieval budget while adding storage guarantees. Plausible inclusion in the next minor release (0.x or 1.x), possibly as an opt-in durability tier.
- **WebSocket ticket auth** ([#674](https://github.com/qhkm/zeptoclaw/pull/674)) — Likely to land before any release cut, given the established security-hardening trajectory. The narrow ticket-validity window (30s) and one-shot semantics imply the panel already has the supporting authenticated endpoints and only needs the consumption path.
- **Advisory policy enforcement** ([#651](https://github.com/qhkm/zeptoclaw/issues/651) / #646) — Reinforces the deny.toml `ignore = []` zero-tolerance stance as a durable CI contract; expect this to be a recurring dependency-hygiene pattern.

## 7. User Feedback Summary

Direct end-user feedback is minimal in the last 24 hours — no new external user reports, no reactions, and closed issues were authored by maintainers/internal contributors (`morler`, `qhkm). Pain points surfaced are operator-facing rather than end-user-facing:

- **Operator/security pain:** credentials readable by other local users (config.toml, panel.token) and dependency advisories breaking CI gates — both now resolved.
- **Architectural signal (internal):** preference to preserve the cost-efficient selective-retrieval design over always-present profiles when extending memory semantics.
- No explicit satisfaction/dissatisfaction signals; no third-party comments or 👍/👎 recorded.

## 8. Backlog Watch

- **[#666](https://github.com/qhkm/zeptoclaw/issues/666)** — Single open item and the most strategically important. Only 1 comment; explicitly tied to Exec #8. Recommended attention: assign an owner before next planning cycle, since it spans memory architecture and persistence semantics with cost-budgeting constraints.
- **[#674](https://github.com/qhkm/zeptoclaw/pull/674)** — Open PR awaiting review. Given its alignment with the same-day merged #673, reviewer load should be light; consider bundling it with the next release prep to avoid stranded security work.
- No long-unanswered dormant issues are visible in the 24-hour slice, but #646 (deny-job restoration that #651 was gating) should be confirmed green now that #651/#673 are closed.

---

**Overall health:** Healthy. Project is executing a coherent security-and-reliability sprint with high closure rates (2/3 issues, 1/2 PRs) and no regressions. Backlog is shallow but contains one architecturally significant open item (#666) that warrants explicit prioritization.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-09-09

## 1. Today's Overview

ZeroClaw continues to operate as an exceptionally RFC-heavy and design-stage project, with the 24-hour window dominated by architectural RFCs and high-risk cross-cutting PRs rather than routine maintenance. Of 27 issues touched, only 4 closed, and of 50 PRs touched, only 2 closed, while 23 issues and 48 PRs remain active — a pattern consistent with an in-flight design consolidation rather than a release push. The activity profile is heavy on governance (RFC voting, review evidence, decision queue), runtime/session architecture (append-only event history, owned sessions), and Anthropic-cache/cost correctness. No new releases shipped.

## 2. Releases

No new releases in the last 24 hours. No version tag activity is reported.

## 3. Project Progress

Two PRs closed without merge in the window:

- [#10719](https://github.com/zeroclaw-labs/zeroclaw/pull/10719) — *fix(providers): preserve tool image references through normalization* (shadowbrok3r). Closed small-scope change to retain the source path/URL as an `Image reference:` text field during tool-image conversion.
- [#10717](https://github.com/zeroclaw-labs/zeroclaw/pull/10717) — *Feat/native security and helpers v2* (atorenherrinton). Closed XL-scope "native security and helpers" change touching cron, gateway, memory, provider, runtime, security, tool, and channel surfaces; appears to have been retired rather than merged.

Notable in-flight PRs that advanced today (still open) include [#9724](https://github.com/zeroclaw-labs/zeroclaw/pull/9724) (approval/always_ask under Full autonomy), [#9977](https://github.com/zeroclaw-labs/zeroclaw/pull/9977) (filesystem confinement to workspace), [#10718](https://github.com/zeroclaw-labs/zeroclaw/pull/10718) (cost ledger attribution by chat), [#10621](https://github.com/zeroclaw-labs/zeroclaw/pull/10621) (shared live-config authority for agent lifecycle mutations), [#10605](https://github.com/zeroclaw-labs/zeroclaw/pull/10605) (Anthropic extended thinking passthrough for OpenAI-compatible gateways), and [#10640](https://github.com/zeroclaw-labs/zeroclaw/pull/10640) (passive Telegram group context).

## 4. Community Hot Topics

The most active threads today are architectural RFCs and governance trackers rather than user-facing feature requests:

- [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) (35 comments) — *RFC: Runtime-owned conversation sessions and transport surface adapters* (Rev. 5, NiuBlibing). Replace conversation ownership from per-channel to per-runtime with explicit transport-surface adapters; competing revision requires a new discussion window.
- [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) (28 comments) — *RFC: Unified file and attachment architecture* (Rev. 10, NiuBlibing). Pairs with #9487 to redefine how files and attachments flow across conversation surfaces.
- [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) (26 comments) — *RFC: Granular sandbox policy — filesystem restrictions* (rarean, in-progress). Targets the long-standing drift between `SecurityPolicy` path admission and OS sandbox backends (Bubblewrap/Landlock/Seatbelt).
- [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) (15 comments) — *Tracker: Maintainer decision queue for RFCs and design issues* (Audacity88). Active gate for accept/reject/defer of pending RFCs.
- [#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) (11 comments) — *RFC: Composable WASM plugin runtime* (NiuBlibing). Defines core APIs and replaceable providers; yields session-history authority to #10526.
- [#10366](https://github.com/zeroclaw-labs/zeroclaw/issues/10366) (6 comments) — *RFC: PR review evidence, freshness warnings, and expedited merge lane* (Audacity88). Meta-process change to reduce review deadlock.

**Underlying need:** contributors are converging on a coherent next-generation runtime/session/attachment model before the next release cut, and explicitly want lighter-weight governance (less waiting on discussion timers) plus stricter policy at the OS layer. The cluster indicates the maintainer bottleneck is now governance and review capacity, not feature ideas.

## 5. Bugs & Stability

Bugs opened or updated today, ranked by severity:

**S1 — workflow blocked**

- [#9333](https://github.com/zeroclaw-labs/zeroclaw/issues/9333) [P1] — *failed ACP turns disappear after switching sessions* (Audacity88, in-progress). Transcript scrub on session switch loses turns that errored after the user message but before completion. No PR linked yet.
- [#10674](https://github.com/zeroclaw-labs/zeroclaw/issues/10674) [P1] — *history trimming stops at the cap, defeating prompt caching on tool-heavy sessions* (Audacity88, accepted). After trim the history sits just under `max_history_messages`, so very next turn re-trims. Companion issue [#10702](https://github.com/zeroclaw-labs/zeroclaw/issues/10702) flags the same hysteresis in the token-budget trimmer. No PR yet.
- [#10670](https://github.com/zeroclaw-labs/zeroclaw/issues/10670) [P2] — *heartbeat.target rejects `<type>.<alias>` composite key* (metalmon, **closed**). Routing fix landed via issue close.

**S2 — degraded behavior**

- [#10667](https://github.com/zeroclaw-labs/zeroclaw/issues/10667) [P2] — *ZeroCode duplicates a streamed response when prompt completion precedes TurnComplete* (Audacity88, in-progress). ACP persistence has one message, TUI renders two. No PR yet.
- [#10688](https://github.com/zeroclaw-labs/zeroclaw/issues/10688) [P2] — *WhatsApp Web voice notes never transcribed* (badbat75, **closed**). Channel wiring fix.

**S3 — minor**

- [#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) [P2] — *Telegram media groups not batched into one multimodal turn* (aq-uua, in-progress). Open since April 2026; no PR yet.
- [#10326](https://github.com/zeroclaw-labs/zeroclaw/issues/10326) [P3] — *Reliable streaming errors report requested model, not served pinned model* (Audacity88, **closed**).
- [#10702](https://github.com/zeroclaw-labs/zeroclaw/issues/10702) [P3] — token-budget trimmer has the same trim-at-cap gap as [#10674](https://github.com/zeroclaw-labs/zeroclaw/issues/10674).
- [#10700](https://github.com/zeroclaw-labs/zeroclaw/issues/10700) [P2] — *cost records share daemon-lifetime `session_id`, so per-conversation spend is unseparated* (Audacity88). Mitigated in part by [#10718](https://github.com/zeroclaw-labs/zeroclaw/pull/10718), which attributes the ledger to chat conversation (trace correlation still open).

**Stability signal:** the most material user-facing reliability issues (ACP turn loss, prompt-cache thrash, ZeroCode duplicate rendering) lack associated PRs and are queued behind maintainer review.

## 6. Feature Requests & Roadmap Signals

Newly filed feature requests in the last 24 hours cluster around OpenAI Responses adapter coverage and Telegram parity:

- [#10715](https://github.com/zeroclaw-labs/zeroclaw/issues/10715) — *Opt-in passive group context for Telegram group chats* (RO-mix). Direct parity with WhatsApp Web `passive_group_context` (#8379/#8389). Probable landing vehicle: [#10640](https://github.com/zeroclaw-labs/zeroclaw/pull/10640) already implementing this behavior on `master`.
- [#10708](https://github.com/zeroclaw-labs/zeroclaw/issues/10708) — *Steering on OpenAI Responses WebSockets* (IftekharUddin). Requires moving from SSE to the native WS steering protocol.
- [#10707](https://github.com/zeroclaw-labs/zeroclaw/issues/10707) — *Bounded programmatic tool calling via OpenAI Responses* (IftekharUddin).
- [#10706](https://github.com/zeroclaw-labs/zeroclaw/issues/10706) — *Preserve opaque reasoning state across Responses paths* (IftekharUddin). API-key and Codex subscription parity.
- [#10705](https://github.com/zeroclaw-labs/zeroclaw/issues/10705) — *Max reasoning effort for OpenAI-compatible models* (IftekharUddin).
- [#10704](https://github.com/zeroclaw-labs/zeroclaw/issues/10704) — *Asynchronous function tools on Responses* (IftekharUddin).
- [#10709](https://github.com/zeroclaw-labs/zeroclaw/issues/10709) — *Docs: Astra setup for API-key and Codex subscription* (IftekharUddin).
- [#10641](https://github.com/zeroclaw-labs/zeroclaw/issues/10641) — *Per-field cron schedule input* (databillm, accepted, web). Closes a long-standing UX gap on `web/src/pages/Cron.tsx`.

**Likely next-version inclusion:** the Telegram passive group context (already an open PR), per-field cron UX, cost ledger attribution (#10718), and any Anthropic cache-breakpoint follow-up from [#10660](https://github.com/zeroclaw-labs/zeroclaw/issues/10660)'s closed design. OpenAI Responses parity work (max reasoning, async tools, programmatic calling, reasoning-state replay) appears as a coordinated batch and is a strong candidate for a future 0.9.x cycle.

## 7. User Feedback Summary

- **Channel parity gap.** Telegram groups still cannot share a passive room context the way WhatsApp Web can; users report either being dropped at the `mention_only` gate or duplicating requests. Issue [#10715](https://github.com/zeroclaw-labs/zeroclaw/issues/10715) is the user voice behind PR [#10640](https://github.com/zeroclaw-labs/zeroclaw/pull/10640).
- **Multimodal ergonomics.** [#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) shows dissatisfaction that Telegram image albums fragment into separate turns (open since April).
- **Cost transparency.** [#10700](https://github.com/zeroclaw-labs/zeroclaw/issues/10700) and [#10718](https://github.com/zeroclaw-labs/zeroclaw/pull/10718) reflect a need for per-conversation spend visibility; users want the field name semantics to match the scope.
- **Cache economics.** [#10660](https://github.com/zeroclaw-labs/zeroclaw/issues/10660) (closed) and [#10716](https://github.com/zeroclaw-labs/zeroclaw/pull/10716) (price cache writes at the configured premium) together signal users care about Anthropic cache write/read billing fidelity and turn-boundary fallback to history instead of the system prompt.
- **Process friction.** [#10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549) and [#10366](https://github.com/zeroclaw-labs/zeroclaw/issues/10366) indicate contributors find mandatory 48/72-hour discussion windows and review-evidence rules are the bottleneck; satisfaction with current governance is low.

## 8. Backlog Watch

Items requiring maintainer attention that have been waiting without closure:

- [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) — Maintainer decision queue for RFCs and design issues. The queue itself is the bottleneck; 35-comment RFC #9487 and 28-comment #9488 explicitly need a new discussion window recorded before voting can resume.
- [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) — Granular sandbox policy, in-progress since May 2026 (26 comments). Long-running RFC without a merged reference implementation.
- [#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) — Telegram media group batching bug, in-progress since April 2026.
- [#9977](https://github.com/zeroclaw-labs/zeroclaw/pull/9977) — Workspace-confined filesystem mutations, XL, needs-author-action and needs-maintainer-review, high risk; one of the largest open security-related PRs in the tree.
- [#10241](https://github.com/zeroclaw-labs/zeroclaw/pull/10241) — Restore supervised shell approval routing, status:blocked, XL, touches 10+ channels. Blocked rather than progressing.
- [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) — Native Hailo-Ollama provider, do-not-merge, XL, awaiting maintainer decision.
- [#9212](https://github.com/zeroclaw-labs/zeroclaw/pull/9212) — Eval regression CI gate, do-not-merge, status:blocked.
- [#10407](https://github.com/zeroclaw-labs/zeroclaw/pull/10407) — Persistent session prompt attachments, XL, needs-author-action.
- [#9727](https://github.com/zeroclaw-labs/zeroclaw/issues/9727) — Epic: run and monitor multiple agents from a zerocode sidebar, only 2 comments and high blast radius.

**Overall project health signal:** the merge pipeline is gated more by review capacity than by missing design — the high-risk, XL PRs touching security and runtime correctness are stalled in `needs-author-action` / `needs-maintainer-review` / `blocked` states, while RFC churn (often authored by the same maintainers) continues to expand. Releasing a version that moves [#9977](https://github.com/zeroclaw-labs/zeroclaw/pull/9977), [#9724](https://github.com/zeroclaw-labs/zeroclaw/pull/9724), [#10674](https://github.com/zeroclaw-labs/zeroclaw/issues/10674)'s fix, and [#10640](https://github.com/zeroclaw-labs/zeroclaw/pull/10640) into `master` would resolve the largest outstanding user-facing stability and parity debt simultaneously.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*