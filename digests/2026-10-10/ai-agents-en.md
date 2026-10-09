# OpenClaw Ecosystem Digest 2026-10-10

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-10-09 22:15 UTC

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



# OpenClaw Project Digest — 2026-10-10

---

## 1. Today's Overview

OpenClaw remains in a high-activity development phase. In the last 24 hours, **500 issues** (394 open, 106 closed) and **500 pull requests** (395 open, 105 merged/closed) were updated. No new releases were published today. The project is contending with a substantial backlog of **P0-severity bugs** — several affecting core message delivery, gateway stability, and update mechanics — while simultaneously advancing feature work (sandbox backends, memory indexing fixes, UI performance). Maintainer attention is stretched; many high-profile issues carry `clawsweeper:no-new-fix-pr` tags, indicating difficulty converting reports into patches.

---

## 2. Releases

**No new releases today.** The most recent stable version remains `2026.9.x`. Several issues reference regressions introduced in `2026.9.6` (#144252 plugin capture) and `2026.9.7`, and at least one issue (#167652) reports a fresh hang after upgrading to `2026.9.9`.

---

## 3. Project Progress

The following PRs were merged or closed in the last 24 hours:

| PR | Title | Area | Significance |
|---|---|---|---|
| [#167957](https://github.com/openclaw/openclaw/pull/167957) | `fix(cron): hold failure repair and alerts while a provider-outage retry is pending` | Cron / Automations | Prevents premature failure alerts during transient provider outages |
| [#167896](https://github.com/openclaw/openclaw/pull/167896) | `perf(chat): shrink history tool previews for expandable clients` | Web UI | Reduces payload size for tool-heavy chat histories (90% of response text in measured transcripts) |
| [#167916](https://github.com/openclaw/openclaw/pull/167916) | `fix(compaction): large sessions wait minutes for compaction because summary work grows with the context window` | Compaction | Addresses ~6-minute compaction delays on large sessions |
| [#152210](https://github.com/openclaw/openclaw/pull/152210) | `fix(memory): keep keyword fallback when the embedding provider fails mid-session` | Memory Core | Preserves keyword search results during transient embedding outages |
| [#167987](https://github.com/openclaw/openclaw/pull/167987) | `test(core,plugins): remove low-value tests (batch d038)` | Testing | Maintainer-authorized batch removal of redundant test variants |

**Notable open PRs approaching readiness:**

- **[#167970](https://github.com/openclaw/openclaw/pull/167970)** — `fix(memory): indexing and dreaming cleanup fail when the Gateway starts while agents are preparing` (P1, L-sized, by steipete). Addresses a startup race that prevents memory indexing after crashes or upgrades.
- **[#167817](https://github.com/openclaw/openclaw/pull/167817)** — `fix(anthropic): refresh system context when Claude sessions resume` (P1). Fixes stale instructions when Claude Code resumes an OpenClaw conversation.
- **[#163405](https://github.com/openclaw/openclaw/pull/163405)** — `feat(sandbox): add lightweight local SRT backend` (XL-sized, by Jerry-Xin). Adds a Docker-free sandbox backend via the bundled `srt-sandbox` plugin.
- **[#166955](https://github.com/openclaw/openclaw/pull/166955)** — `improve(plugins): speed up capture while preserving dependency resources` (P2). Reduces Gateway and Doctor preparation time for plugins with many small dependency files.

---

## 4. Community Hot Topics

### 🔴 #143524 — Agent SQLite WAL grows to 1.4–2.8 GB in days (114 comments)
**Status:** OPEN · **Severity:** P0 · **Author:** desksk
[Link](https://github.com/openclaw/openclaw/issues/143524)

The single most-discussed issue. On Windows, one agent's SQLite WAL file grows without bound despite `wal_autocheckpoint=1000`, reaching **2,865 MB** and blocking gateway startup. A manual `wal_checkpoint(TRUNCATE)` temporarily fixes it, but growth resumes. This is a critical data-plane bug with no automatic recovery path.

### 🔴 #97616 — OpenClaw leaks unreaped hook/tool child processes (18 comments)
**Status:** OPEN · **Severity:** P1 · **Author:** avp717
[Link](https://github.com/openclaw/openclaw/issues/97616)

Zombie accumulation from unreaped child processes (`openclaw-hooks`, `bash`, `codex`) degrades runtime performance over time. Marked as a regression.

### 🔴 #161976 — WhatsApp DM replies repeatedly fail at durable registry handoff after restart (18 comments)
**Status:** OPEN · **Severity:** P1 · **Author:** ilpadrino-a11y
[Link](https://github.com/openclaw/openclaw/issues/161976)

Answers are generated but automatic final reply delivery fails before provider sending. On the next inbound message, the Gateway successfully sends a *previously generated* answer — creating a confusing one-message delay.

### 🔴 #157325 — A stuck agent-DB resource makes **every** agent's replies fail (17 comments)
**Status:** OPEN · **Severity:** P0 · **Author:** desksk
[Link](https://github.com/openclaw/openclaw/issues/157325)

On Windows Server with 9 Feishu accounts + WhatsApp, a stuck agent-DB resource causes all agents to return generic failure copy until a gateway restart. This is a systemic failure mode, not isolated to one agent.

### 🔴 #69208 — Umbrella: duplicate transcript, replay, and context assembly across channels (16 comments)
**Status:** OPEN · **Severity:** P2 · **Author:** BradGroux
[Link](https://github.com/openclaw/openclaw/issues/69208)

A cross-cutting class of bugs manifesting in MSTeams, webchat, Telegram, followup queue handling, and delivery-mirror consumer paths. Serves as a tracking issue for transcript integrity.

---

## 5. Bugs & Stability

### P0 — Critical (release blockers)

| Issue | Summary | Fix PR? |
|---|---|---|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | SQLite WAL unbounded growth on Windows, blocks gateway startup | ❌ None |
| [#157325](https://github.com/openclaw/openclaw/issues/157325) | Stuck agent-DB resource breaks all agent replies | ❌ None |
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | Gateway blocks for minutes capturing large external plugins (2026.9.6 regression) | ❌ None |
| [#167771](https://github.com/openclaw/openclaw/issues/167771) | Updates permanently blocked by `update-recovery-pending` / managed handoff lease identity change | ❌ None |
| [#158231](https://github.com/openclaw/openclaw/issues/158231) | Update failure: `managed-service-preflight` (2026.9.5, macOS) | ❌ None |
| [#163434](https://github.com/openclaw/openclaw/issues/163434) | Age-based transcript trimming deletes session header; `ensureTranscriptHeader` cannot repair | ❌ None |
| [#101814](https://github.com/openclaw/openclaw/issues/101814) | All channels enter broken state after 2026.6.11 update — one message per session then permanent silence | ❌ None |
| [#115642](https://github.com/openclaw/openclaw/issues/115642) | Billing cooldown outlives outage on subscription auth; no probe-based recovery | ❌ None |
| [#153426](https://github.com/openclaw/openclaw/issues/153426) | Curated memory roots (`MEMORY.md`/`USER.md`) silently and permanently excluded from bootstrap injection | ❌ None |

### P1 — High Severity

| Issue | Summary | Fix PR? |
|---|---|---|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | Zombie child process accumulation from hook/tool execution | ❌ None |
| [#161976](https://github.com/openclaw/openclaw/issues/161976) | WhatsApp DM durable registry handoff failure after restart | ❌ None |
| [#119411](https://github.com/openclaw/openclaw/issues/119411) | Memory file watcher never reindexes; `memory status` reports `Dirty: no` with stale count | ❌ None |
| [#142336](https://github.com/openclaw/openclaw/issues/142336) | Core `/dashboard` shadows Telegram Mini App launcher in 2026.9.2+ | ❌ None |
| [#154891](https://github.com/openclaw/openclaw/issues/154891) | Failed/rolled-back config hot-reload still bricks unrelated plugins with `PluginInstanceUnavailableError` | ❌ None |
| [#125764](https://github.com/openclaw/openclaw/issues/125764) | Telegram adapter dead-letters outbound sends after a single network-failed attempt | ❌ None |
| [#101929](https://github.com/openclaw/openclaw/issues/101929) | Context-overflow-midturn-precheck estimator over-counts ~2.3–2.6× vs billed usage | ❌ None |
| [#118185](https://github.com/openclaw/openclaw/issues/118185) | One Claude-cli turn written to transcript twice by two differently-assembling writers | ❌ None |
| [#148650](https://github.com/openclaw/openclaw/issues/148650) | Memory indexer subprocess cannot resolve SecretRef credentials (401 auth failure) | ❌ None |
| [#56217](https://github.com/openclaw/openclaw/issues/56217) | Secret provider crash-loop exhausts 1Password service account rate limits | ❌ None |
| [#159499](https://github.com/openclaw/openclaw/issues/159499) | Windows 2026.9.6: `ready` ~220s; two sequential plugin-registry phases consume 175s | ❌ None |

### P2 — Moderate Severity (selected)

| Issue | Summary |
|---|---|
| [#140129](https://github.com/openclaw/openclaw/issues/140129) | Anthropic cache stuck at ~46k on long sessions; `session:sanitized` rewrites history fingerprints |
| [#51429](https://github.com/openclaw/openclaw/issues/51429) | Hardcoded working path (`/Users/wangtao`) merged and published — user's home directory used as workspace |
| [#72015](https://github.com/openclaw/openclaw/issues/72015) | Active-memory blocks replies and QMD boot initialization can overload multi-agent gateways |
| [#68105](https://github.com/openclaw/openclaw/issues/68105) | RTL bidi isolation missing at gateway/outbound-reply boundary (Hebrew/Arabic renders incorrectly) |
| [#91941](https://github.com/openclaw/openclaw/issues/91941) | Feishu streaming card full-content updates cause severe latency regression on long replies |
| [#98702](https://github.com/openclaw/openclaw/issues/98702) | Inherited OpenAI OAuth rejected at provider for built-in `openclaw` runtime on `openai-chatgpt-responses` transport |
| [#158898](https://github.com/openclaw/openclaw/issues/158898) | Runtime context message rebuilt and appended last on every model call — always uncached input (large

---

## Cross-Ecosystem Comparison



# Cross-Project Comparison Report — 2026-10-10

## 1. Ecosystem Overview

The open-source personal AI assistant landscape is a high-velocity, multi-paradigm ecosystem spanning gateway-centric orchestrators (OpenClaw, Hermes), Rust-native agents (ZeroClaw), desktop-first wrappers (CoPaw, LobsterAI), and lightweight runtime forks (NanoClaw, PicoClaw). All projects are contending with the same fundamental tensions: provider API churn, channel-adapter fidelity, session/state durability, and the operational burden of self-hosted updates. The ecosystem is consolidating around a few shared architectural patterns — plugin/MCP tooling, gateway-owned sessions, and sandboxed execution — while differentiating on language choice, deployment surface, and community governance. Maturity is uneven: a few projects (OpenClaw, Hermes, NanoClaw) show production-grade activity with systematic fix cycles, while others are still resolving foundational stability or fighting contributor-review bottlenecks.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Latest Release | Health Score |
|---|---|---|---|---|
| **OpenClaw** | 500 (394 open, 106 closed) | 500 (395 open, 105 merged) | 2026.9.x (no new today) | 6/10 |
| **NanoBot** | 11 (6 open, 5 closed) | 30 (19 open, 11 merged) | None | 7/10 |
| **Hermes Agent** | 50 (47 open, 3 closed) | 50 (46 open, 4 closed) | None | 7/10 |
| **PicoClaw** | 4 | 6 | None | 4/10 |
| **NanoClaw** | 2 | 14 (10 merged, 4 open) | **v2026.10.0** | 7/10 |
| **NullClaw** | 0 | 1 (open) | None | 6/10 |
| **LobsterAI** | 0 | 5 (4 merged, 1 open) | None | 8/10 |
| **TinyClaw** | 0 | 0 | None | N/A |
| **Moltis** | 1 | 0 | None | 6/10 |
| **CoPaw** | 19 (13 open, 6 closed) | 34 (21 open, 13 merged) | None | 7/10 |
| **ZeptoClaw** | 0 | 0 | None | N/A |
| **ZeroClaw** | 17 | 50 (46 open, 4 closed) | None | 6/10 |

*Health score is a qualitative synthesis of triage velocity, bug-fix coverage, release discipline, and maintainer bandwidth signals.*

## 3. OpenClaw's Position

OpenClaw remains the ecosystem's **reference implementation by breadth**. Its 500-issue / 500-PR day is an order of magnitude above any peer, reflecting both a larger user base and a more distributed contributor pool. Technically, it is **gateway-centric with a plugin architecture**, emphasizing sandbox backends (SRT, Docker), memory indexing with keyword fallback, and multi-channel message delivery.

**Advantages vs. peers:**
- **Largest community and issue visibility** — problems reported here likely propagate to smaller forks.
- **Broadest feature surface** — cron/automations, compaction, memory, sandboxing, and UI performance are all advancing simultaneously.
- **Maintainer transparency** — PRs are labeled with size (S–XL) and priority, enabling external triage.

**Challenges:**
- **Maintainer stretch** is acute: many high-profile issues carry `clawsweeper:no-new-fix-pr` tags, and 9 of 10 listed P0 bugs have no fix PR.
- **Regression density** — several P0 bugs trace back to recent releases (2026.9.6, 2026.9.7, 2026.9.9), suggesting insufficient test coverage on the release path.
- **Backlog asymmetry** — 395 open PRs against 105 merged in 24h signals a review bottleneck that smaller projects (NanoClaw, LobsterAI) with tighter teams are avoiding.

**Technical approach differences:** OpenClaw favors a monolithic gateway with optional plugin offloading; Hermes is actively moving *toward* a unified single-gateway-owned-session model (PR #106742); ZeroClaw is built in Rust with a crates-based architecture and an explicit A2A protocol RFC. OpenClaw's JavaScript/TypeScript stack and npm-style plugin ecosystem give it the widest platform reach, at the cost of heavier memory and process footprints (evident in the SQLite WAL and zombie-child-process bugs).

## 4. Shared Technical Focus Areas

Across all active projects, five technical concerns recur:

| Focus Area | Projects Involved | Specific Needs |
|---|---|---|
| **Provider compatibility & wire formats** | NanoBot, Hermes, ZeroClaw, Moltis | Handling OpenAI/Anthropic/Responses API differences, hosted-tool stripping (DeepSeek websearch), custom endpoint presets, extra_headers propagation |
| **Channel adapter reliability** | OpenClaw, NanoBot, NanoClaw, Hermes, CoPaw | Telegram silent-zombie after retryable-fatal, WhatsApp durable-registry handoff, Slack compaction notice spam, QQ quoted-message loss, Feishu inbound image dropping |
| **Session & memory state management** | OpenClaw, Hermes, ZeroClaw, NanoClaw, CoPaw | SQLite WAL unbounded growth, `created_at` corruption, memory indexer subprocess auth failures, keyword fallback during embedding outages, PostgreSQL backend for multi-instance |
| **Update & install lifecycle** | Hermes, OpenClaw, PicoClaw, NanoClaw | macOS lock loops, Windows update misclassification, `pm` ABI mismatches, `mcp` extras lost on migration, CalVer vs. rolling-release expectations |
| **Security & plugin isolation** | OpenClaw, CoPaw, Hermes, ZeroClaw | MCP Driver root RCE (CoPaw #8153), credential SecretRef resolution, plugin resource cleanup, CVE-flagged dependency pins (`multidict`) |

## 5. Differentiation Analysis

| Project | Feature Focus | Target Users | Technical Architecture |
|---|---|---|---|
| **OpenClaw** | Breadth: all channels, sandbox, memory, cron, compaction | Generalists, multi-channel operators | Gateway-centric TS/JS, plugin SDK, optional sandbox backends |
| **Hermes Agent** | Architectural ambition: single-gateway, PostgreSQL, async delegation | Power users, multi-instance deployments | Python, moving to unified session ownership, plugin-catalog ecosystem |
| **NanoClaw** | Core correctness: slash-command parsing, directory-handle safety, release discipline | Users wanting stable, predictable updates | TypeScript, CalVer, tight core-team review loop |
| **ZeroClaw** | Interoperability: A2A protocol, RAG, effort-aware routing, ZeroCode TUI | Rust enthusiasts, multi-agent orchestration | Rust crates, `zeroclaw-a2a`, `zeroclaw-runtime`, Tauri desktop |
| **CoPaw** | Desktop UX: local models, media handling, i18n, terminal console | Desktop users, Chinese/English bilingual market | Tauri/Electron (debated), QwenPaw-Flash local models, MCP driver |
| **LobsterAI** | Windows desktop hardening, translation/read-aloud utilities | Windows desktop users, translation use cases | Desktop companion, Windows-specific file/lock handling |
| **NanoBot** | Provider modeling, WebUI configuration, channel polish | Users with custom provider setups | TS, provider/preset declaration system, conflict-heavy PR queue |
| **PicoClaw** | Dependency hygiene, lightweight deployment | Go/Rust-adjacent, mobile (Android) | Go, pure-Go builds, minimal infra footprint |

## 6. Community Momentum & Maturity

**Rapidly iterating (high activity, active triage):**
- **OpenClaw** — massive issue/PR volume, but maintainer bandwidth is the binding constraint.
- **Hermes Agent** — 97 updates in 24h, same-day P0/P1 fixes, architectural PRs in flight.
- **CoPaw** — 53 tracked items, responsive to security reports (MCP RCE), strong first-time-contributor pipeline.
- **ZeroClaw** — 67 items, high contributor engagement on RFCs, but merge latency is a growing risk.

**Stabilizing (active but focused):**
- **NanoBot** — clean triage (5 issues, 7 PRs closed), but `conflict` labels suggest rebase friction.
- **NanoClaw** — 10 PRs merged in a day, CalVer release shipped, but a 6-week-old critical Telegram bug persists.
- **LobsterAI** — 4 merged fixes today, all targeting Windows edge cases; clean, surgical progression.

**Quiet / emerging:**
- **PicoClaw** — low activity, critical infrastructure down (expired TLS cert), no fix PRs for open bugs.
- **NullClaw, Moltis, TinyClaw, ZeptoClaw** — minimal to zero 24h activity; stable but small communities.

## 7. Trend Signals

1. **Provider sprawl is a top user pain point.** Issues like NanoBot's GPT-6-via-Copilot, DeepSeek websearch breaking LLM calls, and Moltis's A2Agent integration inquiry all point to users needing *generic, low-friction provider abstractions* — not per-provider special-casing.

2. **Channel fidelity is a competitive differentiator.** Telegram silent message loss (NanoClaw #3569), WhatsApp replay filter failures (NanoBot #6120), and Feishu inbound image dropping (CoPaw #8150) are the kind of bugs that erode trust silently. Projects that fix these fastest (CoPaw, NanoClaw) gain user loyalty.

3. **Memory and session management are becoming table stakes.** SQLite WAL corruption, `created_at` loss, memory indexer auth failures, and keyword fallback needs appear in nearly every project — suggesting this is a shared infrastructure layer that wants a common library, not per-project reimplementation.

4. **Update/install lifecycle is critical UX.** Hermes's macOS lock loops, Windows update misclassification, PicoClaw's expired TLS cert, and OpenClaw's `update-recovery-pending`

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-10-10

## 1. Today's Overview
NanoBot remains highly active in the last 24h window: **11 issues updated** (6 open/active, 5 closed) and **30 PRs updated** (19 open, 11 merged/closed), with **no new releases**. Activity is concentrated on provider compatibility, channel-specific messaging behavior, WebUI/configuration UX, and documentation/copy cleanup. The project shows responsive triage — five issues and seven visible PRs were closed — but a large open PR queue, many carrying `conflict` labels, suggests integration/merge friction. Overall health is strong and community-driven, with the main risk being recurring provider and channel edge cases.

## 2. Releases
No new releases were published in the last 24h. The latest releases feed is empty, so there are no release notes, breaking changes, or migration items to report.

## 3. Project Progress
Closed/merged PRs visible in the latest data advanced provider modeling, channel behavior, localization, and documentation:

- [HKUDS/nanobot#5204](https://github.com/HKUDS/nanobot/pull/5204) `[CLOSED]` — `feat(models): declare request APIs for providers and presets`. Lets provider connections and model presets declare supported request APIs, improving custom-endpoint correctness.
- [HKUDS/nanobot#6104](https://github.com/HKUDS/nanobot/pull/6104) `[CLOSED]` — `fix(providers): strip hosted web_search tools from Chat Completions requests`. Fixes #6085.
- [HKUDS/nanobot#6086](https://github.com/HKUDS/nanobot/pull/6086) `[CLOSED]` — `fix(providers): drop hosted web_search tool from Chat Completions extra_body`. Parallel fix for #6085.
- [HKUDS/nanobot#1541](https://github.com/HKUDS/nanobot/pull/1541) `[CLOSED]` — `feat: pass sender_id to agent context for sender identification`. Improves group-chat sender identification, especially Feishu/Lark.
- [HKUDS/nanobot#6116](https://github.com/HKUDS/nanobot/pull/6116) `[CLOSED]` — `fix(webui): simplify existing copy across all locales`.
- [HKUDS/nanobot#6117](https://github.com/HKUDS/nanobot/pull/6117) `[CLOSED]` — `docs(agents): add interface copywriting guidance`.
- [HKUDS/nanobot#6119](https://github.com/HKUDS/nanobot/pull/6119) `[CLOSED]` — `chore(linear): format Chinese locale JSON`.

Closed issues also indicate progress on provider compatibility and channel fidelity:

- [HKUDS/nanobot#5898](https://github.com/HKUDS/nanobot/issues/5898) — GPT-6 model series through GitHub Copilot.
- [HKUDS/nanobot#6029](https://github.com/HKUDS/nanobot/issues/6029) — silent context compaction / suppress background broadcasts.
- [HKUDS/nanobot#5896](https://github.com/HKUDS/nanobot/issues/5896) — OpenAI Responses API for `opencode_go`.
- [HKUDS/nanobot#6085](https://github.com/HKUDS/nanobot/issues/6085) — DeepSeek websearch breaking LLM calls.
- [HKUDS/nanobot#6006](https://github.com/HKUDS/nanobot/issues/6006) — QQ quoted messages not reaching the agent.

## 4. Community Hot Topics
Most-discussed issues in the visible data:

- [HKUDS/nanobot#5898](https://github.com/HKUDS/nanobot/issues/5898) `[CLOSED]` — `[bug] gpt-6 model series through Github Copilot` — 4 comments. Underlying need: reliable access to the newest OpenAI models through third-party provider paths.
- [HKUDS/nanobot#6029](https://github.com/HKUDS/nanobot/issues/6029) `[CLOSED]` — `Allow silent context compaction and suppress channel broadcasts for background idle/dream cycles` — 3 comments. Underlying need: background maintenance should be invisible or configurable, not broadcast into active conversations.
- [HKUDS/nanobot#6084](https://github.com/HKUDS/nanobot/issues/6084) `[OPEN]` — `Slack: compaction notices post as two permanent messages; add showCompactionNotices (or edit in place)` — 3 comments. Underlying need: channel UX noise control, especially in Slack DMs.
- [HKUDS/nanobot#5896](https://github.com/HKUDS/nanobot/issues/5896) `[CLOSED]` — `feat(providers): support OpenAI Responses API for opencode_go` — 1 comment. Underlying need: broader wire-format support for custom providers.

PR comment counts were not provided in the dataset. High-attention open PRs by labels/recency include [#5943](https://github.com/HKUDS/nanobot/pull/5943) (p1 session SQLite refactor), [#6103](https://github.com/HKUDS/nanobot/pull/6103) (CoreWeave provider docs), [#3207](https://github.com/HKUDS/nanobot/pull/3207) (Z.AI provider split), [#5955](https://github.com/HKUDS/nanobot/pull/5955) (Claude on Vertex AI), [#6125](https://github.com/HKUDS/nanobot/pull/6125) (Telegram albums), and [#6124](https://github.com/HKUDS/nanobot/pull/6124) (Telegram media detection).

## 5. Bugs & Stability
Ranked by likely user impact:

| Severity | Item | Status | Notes / Fix PR |
|---|---|---|---|
| High | [HKUDS/nanobot#6085](https://github.com/HKUDS/nanobot/issues/6085) — DeepSeek websearch renders LLM calls unusable | CLOSED | Fixed by [#6104](https://github.com/HKUDS/nanobot/pull/6104) and [#6086](https://github.com/HKUDS/nanobot/pull/6086). |
| High | [HKUDS/nanobot#5898](https://github.com/HKUDS/nanobot/issues/5898) — GPT-6 series through GitHub Copilot fails | CLOSED | Provider compatibility failure; closed in window. |
| Medium-High | [HKUDS/nanobot#6029](https://github.com/HKUDS/nanobot/issues/6029) — Background compaction/broadcasts spam active channels | CLOSED | Feature request framed as bug; closed. |
| Medium | [HKUDS/nanobot#6084](https://github.com/HKUDS/nanobot/issues/6084) — Slack compaction notices post as two permanent messages | OPEN | Needs `showCompactionNotices` or edit-in-place. |
| Medium | [HKUDS/nanobot#6120](https://github.com/HKUDS/nanobot/issues/6120) — WhatsApp replay filter never fires (neonize ms vs `time.time()` seconds) | OPEN | Timestamp unit mismatch. |
| Medium | [HKUDS/nanobot#6122](https://github.com/HKUDS/nanobot/issues/6122) — DeepSeek `reasoning_effort="minimal"` sends contradictory thinking controls | OPEN | Sends both `reasoning_effort="minimal"` and `thinking.type="disabled"`. |
| Medium | [HKUDS/nanobot#6006](https://github.com/HKUDS/nanobot/issues/6006) — QQ quoted messages never reach the agent | CLOSED | Closed in window. |
| Low-Medium | [HKUDS/nanobot#6123](https://github.com/HKUDS/nanobot/issues/6123) — Telegram remote media URLs with query strings misclassified | OPEN | Fix PR [#6124](https://github.com/HKUDS/nanobot/pull/6124) open. |
| Low | [HKUDS/nanobot#6121](https://github.com/HKUDS/nanobot/issues/6121) — Telegram sends multiple outbound images as separate messages | OPEN | Feature/fix PR [#6125](https://github.com/HKUDS/nanobot/pull/6125) open. |
| Low | [HKUDS/nanobot#6111](https://github.com/HKUDS/nanobot/issues/6111) — Windows workspace picker lacks drive list/folder creation/shortcuts | OPEN | Enhancement. |

No crash-level regressions were reported in the visible set; most stability issues are provider configuration and channel-specific behavior.

## 6. Feature Requests & Roadmap Signals
Active user-requested features and likely next-version candidates:

- **Telegram channel polish**: albums for consecutive images ([#6121](https://github.com/HKUDS/nanobot/issues/6121), PR [#6125](https://github.com/HKUDS/nanobot/pull/6125)), media type detection from URL path ([#6123](https://github.com/HKUDS/nanobot/issues/6123), PR [#6124](https://github.com/HKUDS/nanobot/pull/6124)), custom Bot API base URL/headers ([#4919](https://github.com/HKUDS/nanobot/pull/4919)).
- **Quieter background maintenance**: silent context compaction and configurable Slack compaction notices ([#6029](https://github.com/HKUDS/nanobot/issues/6029) closed, [#6084](https://github.com/HKUDS/nanobot/issues/6084) open).
- **Provider matrix expansion**: Z.AI CN/Global/Coding Plan split ([#3207](https://github.com/HKUDS/nanobot/pull/3207)), Claude on Vertex AI ([#5955](https://github.com/HKUDS/nanobot/pull/5955)), CoreWeave Inference docs ([#6103](https://github.com/HKUDS/nanobot/pull/6103)), OpenAI Responses API for `opencode_go` ([#5896](https://github.com/HKUDS/nanobot/issues/5896) closed).
- **WebUI configuration UX**: catalog-backed reasoning effort selection ([#5983](https://github.com/HKUDS/nanobot/pull/5983)), preserved API types across search toggles ([#5698](https://github.com/HKUDS/nanobot/pull/5698)).
- **Agent reliability/roadmap**: opt-in completion review for goals and child tasks ([#6118](https://github.com/HKUDS/nanobot/pull/6118)), persistent completed tool results ([#5946](https://github.com/HKUDS/nanobot/pull/5946)), SQLite-backed session state ([#5943](https://github.com/HKUDS/nanobot/pull/5943)).
- **Apps/MCP**: managed computer use with Cua Driver ([#6091](https://github.com/HKUDS/nanobot/pull/6091)), Keenable MCP preset ([#6014](https://github.com/HKUDS/nanobot/pull/6014)).
- **Windows usability**: workspace picker drive list, folder creation, common shortcuts ([#6111](https://github.com/HKUDS/nanobot/issues/6111)).

Prediction: the next release is likely to focus on provider compatibility, Telegram/Slack/WhatsApp channel fixes, WebUI configuration clarity, and session/agent-state reliability. No release date is indicated.

## 7. User Feedback Summary
- **Provider configuration is a major pain point**: GPT-6 via GitHub Copilot, DeepSeek web search breaking all LLM calls, and `opencode_go` requiring the Responses wire format are recurring themes.
- **System maintenance messages annoy users**: Slack compaction posts two permanent messages, and background idle/dream cycles broadcast compression notices into active conversations.
- **Channel fidelity matters**: users report QQ quoted messages being lost, WhatsApp replay filtering failing due to timestamp units, and Telegram media being misclassified or delivered as separate messages instead of albums.
- **Users want more control and polish**: silent compaction, configurable notices, Telegram albums, custom Telegram API endpoints, Windows workspace picker improvements, and discoverable reasoning-effort settings.
- **Satisfaction is mixed but responsiveness is good**: five issues closed and eleven PRs merged/closed in the window, with same-day community PRs for newly filed channel issues. The main dissatisfaction is recurring edge cases in provider and channel integrations.

## 8. Backlog Watch
Long-unanswered or conflict-blocked items needing maintainer attention:

- [HKUDS/nanobot#3207](https://github.com/HKUDS/nanobot/pull/3207) `[OPEN]` — split `zhipu` into Z.AI CN/Global/Coding Plan providers. Opened 2026-04-16, still open with `conflict`. Long-lived broad provider change.
- [HKUDS/nanobot#4919](https://github.com/HKUDS/nanobot/pull/4919) `[OPEN]` — Telegram custom Bot API base URL and extra headers. Opened 2026-07-14, still open with `conflict`.
- [HKUDS/nanobot#5698](https://github.com/HKUDS/nanobot/pull/5698) `[OPEN]` — preserve explicit API types across WebUI search toggles. Opened 2026-09-08, still open with `conflict`.
- [HKUDS/nanobot#5943](https://github.com/HKUDS/nanobot/pull/5943) `[OPEN]` — refactor session state ownership into SQLite. Opened 2026-09-27, priority p1, still open with `conflict`.
- [HKUDS/nanobot#5946](https://github.com/HKUDS/nanobot/pull/5946) `[OPEN]` — persist completed tool results at execution-batch boundaries. Opened 2026-09-28.
- [HKUDS/nanobot#5955](https://github.com/HKUDS/nanobot/pull/5955) `[OPEN]` — Claude on Vertex AI. Opened 2026-09-28, still open with `conflict`.
- [HKUDS/nanobot#5983](https://github.com/HKUDS/nanobot/pull/5983) `[OPEN]` — WebUI catalog-backed reasoning effort selection. Opened 2026-09-29, still open with `conflict`.
- [HKUDS/nanobot#6014](https://github.com/HKUDS/nanobot/pull/6014) `[OPEN]` — Keenable MCP preset. Opened 2026-10-03, still open with `conflict`.

Notable positive backlog signal: issues [#5898](https://github.com/HKUDS/nanobot/issues/5898) and [#5896](https://github.com/HKUDS/nanobot/issues/5896), open since 2026-09-24, were both closed in this window, showing long-tail resolution. However, the number of open PRs with `conflict` labels suggests maintainers may need to prioritize rebases, merge strategy, or contributor coordination.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent — Project Digest (2026-10-10)

## 1. Today's Overview

Hermes Agent (`NousResearch/hermes-agent`) shows elevated maintenance activity with **97 issues and PRs updated in the last 24h** (50 issues: 47 open/3 closed; 50 PRs: 46 open/4 closed), but **no new releases** published. The workload skews heavily toward bug reports (mostly P2) across install/update, CLI, gateway, and platform integrations (Telegram, Signal, Windows, macOS). Active in-flight features include a unified "single-gateway-owns-every-session" architecture (#106742) and a PostgreSQL session backend (#88889). Several high-severity regressions surfaced today, including a P0 import crash on Python 3.11–3.13 and a CVE-flagged dependency pin, both with matching fix PRs already opened.

## 2. Releases

No new releases in the last 24 hours. No version tags to report.

## 3. Project Progress

**Closed today (3 PRs):**
- [#38536](https://github.com/NousResearch/hermes-agent/pull/38536) — `fix(kanban): keep workers out of inherited TUI mode` — prevents kanban worker subprocesses from inheriting `HERMES_TUI=1` from a dispatcher (sweeper:implemented-on-main).
- [#134792](https://github.com/NousResearch/hermes-agent/pull/134792) — `feat(plugin-catalog): add Frihet plugin` — companion to the Frihet ERP MCP connector PR (#134790).
- (Issue-side closure) [#104671](https://github.com/NousResearch/hermes-agent/issues/104671) — CLI background completion backlog fix landed.
- (Issue-side closure) [#135587](https://github.com/NousResearch/hermes-agent/issues/135587) — gateway import crash on Python 3.11/3.12 (`typing.Generator` 3-arg fix).

**Notable feature advancements (open PRs advancing):**
- [#106742](https://github.com/NousResearch/hermes-agent/pull/106742) — Large architectural PR (`teknium1`) unifying all local surfaces (CLI/TUI/Desktop/ACP/cron/bots) onto a single gateway-owned session. Tagged P2 with multiple risk sweepers; CI-reviewed; touches every component.
- [#88889](https://github.com/NousResearch/hermes-agent/pull/88889) — Optional PostgreSQL session/state backend alongside the SQLite default, enabling multi-instance Hermes deployments.
- [#131009](https://github.com/NousResearch/hermes-agent/pull/131009) — Gateway preserves quoted/speech context across pending merges across Telegram, Discord, Slack, Matrix, Feishu, WeCom, QQbot.
- [#135834](https://github.com/NousResearch/hermes-agent/pull/135834) — Skills index stops shipping ~1.9k uninstallable `skills.sh` rows.
- [#135838](https://github.com/NousResearch/hermes-agent/pull/135838) — Pre-commit eslint and combined dockerfile/shell lint job.

## 4. Community Hot Topics

| Rank | Item | Comments | Theme |
|------|------|----------|-------|
| 1 | [#133992](https://github.com/NousResearch/hermes-agent/issues/133992) — macOS Desktop update hand-off lock regression | 24 | Self-update custodian fails on macOS |
| 2 | [#131859](https://github.com/NousResearch/hermes-agent/issues/131859) — `gh pr create` permission error for fork contributor | 17 | Auth/permissions regression |
| 3 | [#124794](https://github.com/NousResearch/hermes-agent/issues/124794) — Unbounded recursive git fetch on partial clones | 11 | Resource exhaustion / platform safety |
| 4 | [#55287](https://github.com/NousResearch/hermes-agent/issues/55287) — Configurable chat width in Desktop | 7 | UX/appearance |
| 4 | [#122555](https://github.com/NousResearch/hermes-agent/issues/122555) — `pm` activates wrong-ABI environment, drops site-packages | 7 | P1 stability |
| 6 | [#129097](https://github.com/NousResearch/hermes-agent/issues/129097) — Terminal `python`/`pip` resolve to Hermes store | 5 | Environment pollution |
| 6 | [#94455](https://github.com/NousResearch/hermes-agent/issues/94455) — `notify_on_complete` stale synthetic turn | 5 | Gateway race |
| 8 | [#122956](https://github.com/NousResearch/hermes-agent/issues/122956) — Windows update check mislabels connectivity error | 4 | Windows install UX |

**Underlying need:** the bulk of high-comment issues concern **install/update lifecycle reliability** (lock contention, partial-clone hangs, Windows path resolution, mcp extras dropped on migration) and **platform adapter drift** (Telegram/Signal retry formats, message delivery races). These point to a real need for stronger integration tests against real protocol clients and end-to-end update/migration harnesses.

## 5. Bugs & Stability

Ranked by severity (today's issues unless noted):

**P0 — Critical:**
- [#135827](https://github.com/NousResearch/hermes-agent/issues/135827) — `agent/context_engine.py` crashes on Python 3.11–3.13 (missing `from __future__ import annotations`). **Fix PR exists:** [#135828](https://github.com/NousResearch/hermes-agent/pull/135828) (ready to merge).

**P1 — High:**
- [#122555](https://github.com/NousResearch/hermes-agent/issues/122555) — `pm` activates a dependency environment built for another interpreter; drops the running interpreter's own `site-packages`. No fix PR yet.
- [#135587](https://github.com/NousResearch/hermes-agent/issues/135587) — Gateway import crash on 3.11/3.12 (`typing.Generator`). **Closed today** (likely via linter autofix).

**P2 — Notable:**
- [#133992](https://github.com/NousResearch/hermes-agent/issues/133992) — macOS Desktop update hand-off lock.
- [#124794](https://github.com/NousResearch/hermes-agent/issues/124794) — Unbounded recursive git fetch (8 GB box, 49 load average, 1h23m `kswapd0`).
- [#131859](https://github.com/NousResearch/hermes-agent/issues/131859) — `gh pr create` permission error.
- [#129097](https://github.com/NousResearch/hermes-agent/issues/129097) — `python`/`pip` shimmed to Hermes store.
- [#94455](https://github.com/NousResearch/hermes-agent/issues/94455) — Stale `notify_on_complete` synthetic turn.
- [#122956](https://github.com/NousResearch/hermes-agent/issues/122956) — Windows update misclassification.
- [#89831](https://github.com/NousResearch/hermes-agent/issues/89831) — Signal audio missing `voiceNote` flag.
- [#101138](https://github.com/NousResearch/hermes-agent/issues/101138) — Telegram status-noise filter regex stale.
- [#66480](https://github.com/NousResearch/hermes-agent/issues/66480) — Async delegation impersonates user.
- [#135699](https://github.com/NousResearch/hermes-agent/issues/135699) — Telegram silent zombie after retryable-fatal (multi-day outage).
- [#123770](https://github.com/NousResearch/hermes-agent/issues/123770) — `mcp` extra dropped on legacy-venv migration (HTTP MCP servers broken).
- [#135795](https://github.com/NousResearch/hermes-agent/issues/135795) — `uv.lock` pins `multidict` 6.7.1 (CVE-2026-104874 / GHSA-54p9-h82j-f925, fix in 6.9.1). **Security.**
- [#135835](https://github.com/NousResearch/hermes-agent/issues/135835), [#135836](https://github.com/NousResearch/hermes-agent/issues/135836), [#135837](https://github.com/NousResearch/hermes-agent/issues/135837) — `computer_use` defects on GNOME/Wayland and local VLMs.

**Security:** [#135795](https://github.com/NousResearch/hermes-agent/issues/135795) — actionable CVE, low diff to bump.

**Fix coverage:** at least 6 of today's bug reports already have matching or related fix PRs (#135828, #135840, #135841, #135842, #135843, #135844, #135845, #135633, #135828). The P1 interpreter/ABI bug and the CVE have ready fixes pending review.

## 6. Feature Requests & Roadmap Signals

Today's open feature asks, ordered by likely next-release impact:

1. **Unified gateway-owned sessions** ([#106742](https://github.com/NousResearch/hermes-agent/pull/106742)) — `teknium1`'s cross-cutting architectural PR. Touches every component; highest impact, but review surface is broad.
2. **PostgreSQL session backend** ([#88889](https://github.com/NousResearch/hermes-agent/pull/88889)) — enables multi-host/HA Hermes deployments.
3. **Configurable chat width** ([#55287](https://github.com/NousResearch/hermes-agent/issues/55287)) — small Desktop UX win; 3 👍; likely to ship in next Desktop update.
4. **Project/Mission control plane** ([#109278](https://github.com/NousResearch/hermes-agent/issues/109278)) — durable cross-session/worker coordination; extends prior proposal #95820. Strategic, longer horizon.
5. **Async-delegation wakes parent for personal gateways** ([#130226](https://github.com/NousResearch/hermes-agent/issues/130226)) — UX gap in api_server sessions.
6. **Process completion budget cap** ([#117555](https://github.com/NousResearch/hermes-agent/issues/117555)) — parity with goals/loops/crash budgets.
7. **Deliver background process completions during active turn** ([#134198](https://github.com/NousResearch/hermes-agent/issues/134198)) — agentic responsiveness.
8. **Animated desktop avatar plugin** ([#87574](https://github.com/NousResearch/hermes-agent/issues/87574)) — community contribution seeking feedback.
9. **Liquid Inference provider** ([#135846](https://github.com/NousResearch/hermes-agent/pull/135846)) — auction-based LLM inference, OpenAI-compatible.
10. **Frihet ERP connector + plugin** ([#134790](https://github.com/NousResearch/hermes-agent/pull/134790), [#134792](https://github.com/NousResearch/hermes-agent/pull/134792) — latter closed).
11. **Matrix opt-in room administration** ([#126289](https://github.com/NousResearch/hermes-agent/pull/126289)).
12. **Signed Windows Desktop package** ([#125601](https://github.com/NousResearch/hermes-agent/issues/125601)) — distribution blocker for Windows users behind Smart App Control.

**Prediction:** the next release will likely bundle the P0 `context_engine.py` fix, the `multidict` CVE bump, several MCP/cron reliability fixes (#135841–#135845, #135633), and possibly the chat-width Desktop setting. The single-gateway PR is too broad for a single release and will likely be staged.

## 7. User Feedback Summary

**Pain points:**
- **Update/install friction dominates** macOS lock loops (#133992), Windows update misclassification (#122956), `pm` ABI mismatches (#122555), `mcp` extras lost on migration (#123770), partial-clone resource exhaustion (#124794).
- **Python version skew** is actively breaking users: 3.11/3.12 `typing.Generator` (#135587) and 3.11–3.13 `context_engine` self-reference (#135827). The `requires-python` floor is being violated by committed code.
- **Platform adapter regressions** make users chase provider-specific formats: Telegram retry-counter regex stale (#101138), Signal missing `voiceNote` (#89831), Telegram silent-zombie after retryable-fatal (#135699, multi-day outage).
- **Sandboxing/PATH pollution** surprises: terminal inherits Hermes-pinned Python and store pip (#129097).
- **Distribution gap on Windows**: SAC-blocked, MSIX 404s (#125601) — concrete user inability to deploy.
- **Tests broken on mac** fresh clone (#135659) — onboarding frictional.

**Satisfiers / positive signals:**
- [#87574](https://github.com/NousResearch/hermes-agent/issues/87574) shows a third-party developer building an animated avatar plugin on `@hermes/plugin-sdk` — ecosystem momentum.
- [#106742](https://github.com/NousResearch/hermes-agent/pull/106742) and [#88889](https://github.com/NousResearch/hermes-agent/pull/88889) suggest power users are pushing for multi-instance, shared-session deployments (gateway + CLI + cron + bots), indicating real production usage.
- Quick triage today: both P0/P1 crashes already have fix PRs authored within the same 24h window (#135828, #135587 closed).

**Dissatisfaction cluster:** install/update/install-shape defects account for the highest-comment issues, and several users explicitly note silent failures (multi-day Telegram outage #135699, silent Home Assistant plugin migration #132814).

## 8. Backlog Watch

Issues/PRs that have languished or are at risk and deserve maintainer attention:

- **Long-open, high-comment, no fix PR yet:**
  - [#133992](https://github.com/NousResearch/hermes-agent/issues/133992) (24 comments, macOS update lock) — needs an owner; 3 👍.
  - [#131859](https://github.com/NousResearch/hermes-agent/issues/131859) (17 comments, fork PR permission) — repo-side scope/permission decision needed.
  - [#124794](https://github.com/NousResearch/hermes-agent/issues/124794) (11 comments, unbounded fetch) — process-group isolation gap; safety-relevant.
  - [#122555](https://github.com/NousResearch/hermes-agent/issues/122555) (P1, ABI/env mismatch) — high blast radius for Python installs.

- **Strategic/architectural awaiting triage:**
  - [#106742](https://github.com/NousResearch/hermes-agent/pull/106742) (single-gateway) — `teknium1`'s cross-cutting PR; risks stalling without an assigned reviewer.
  - [#109278](https://github.com/NousResearch/hermes-agent/issues/109278) (Project/Mission control plane) — strategic, low-activity, risks being forgotten.
  - [#125601](https://github.com/NousResearch/hermes-agent/issues/125601) (signed Windows distribution) — distribution blocker with no engineering owner yet.

- **Community-contributed PRs needing review:**
  - [#90078](https://github.com/NousResearch/hermes-agent/pull/90078) (SocialRobot MCP) — open since Aug 19, awaiting maintainer feedback.
  - [#126289](https://github.com/NousResearch/hermes-agent/pull/126289) (Matrix room admin) — part of a stacked campaign; review coordination needed.
  - [#134790](https://github.com/NousResearch/hermes-agent/pull/134790) (Frihet ERP connector) — companion plugin PR was closed; connector needs decision.

- **Stale P3 risk:** [#117555](https://github.com/NousResearch/hermes-agent/issues/117555), [#134198](https://github.com/NousResearch/hermes-agent/issues/134198), [#130226](https://github.com/NousResearch/hermes-agent/issues/130226) — coherent cluster around "process-completion behavior"; better resolved together than piecemeal.

**Health signal:** triage velocity is strong on P0/P1 (same-day fixes) but the install/update lifecycle regression queue is the dominant load and should be treated as a focused initiative rather than ad-hoc fixes.

---

*Generated from 2026-10-10 GitHub activity snapshot of `NousResearch/hermes-agent`.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-10-10

---

## 1. **Today's Overview**

The PicoClaw project experienced moderate activity over the past 24 hours, with **four issues** and **six pull requests** updated. While no new releases were published, there was notable progress in dependency updates and community-reported bugs. Two issues were closed as stale, indicating some maintenance hygiene efforts. However, critical infrastructure (like the expired TLS certificate for picocaw.io) remains unresolved and continues to impact accessibility.

---

## 2. **Releases**

No new releases were published during this period.

---

## 3. **Project Progress**

Several maintenance-related pull requests were merged:

- [PR #3385](https://github.com/sipeed/picoclaw/pull/3385): Bumped `line-bot-sdk-go` from 8.20.1 to 8.22.0.
- [PR #3386](https://github.com/sipeed/picoclaw/pull/3386): Updated `mautrix` library from 0.27.0 to 0.31.0.
- [PR #3387](https://github.com/sipeed/picoclaw/pull/3387): Upgraded Anthropic SDK Go client from 1.55.1 to 1.74.0.
- [PR #3388](https://github.com/sipeed/picoclaw/pull/3388): Bumped MCP Go SDK from 1.6.1 to 1.8.0.
- [PR #3389](https://github.com/sipeed/picoclaw/pull/3389): Updated `golang.org/x/crypto` from 0.53.0 to 0.57.0.

These changes reflect proactive efforts to keep dependencies current and secure, likely improving long-term stability and compatibility.

A feature enhancement is also under development:
- [PR #3414](https://github.com/sipeed/picoclaw/pull/3414): Introduces an optional wall-clock turn time budget per agent session, aiming to prevent runaway tool loops in agent workflows.

---

## 4. **Community Hot Topics**

The most active and impactful topic currently revolves around **infrastructure downtime**, where the project website (`picoclaw.io`) is unreachable due to an expired TLS certificate:

- [Issue #3377](https://github.com/sipeed/picoclaw/issues/3377): Reports that the cert expired on Sept 10, 2026, making the site inaccessible across browsers — classified as **critical**. Despite being marked stale and closed, it highlights a serious trust and accessibility issue.

Additionally, usability concerns like multi-line message handling have surfaced:

- [Issue #3391](https://github.com/sipeed/picoclaw/issues/3391): Describes how pasting code blocks or poetry results in fragmented messages sent line-by-line instead of preserving formatting.

These reflect real-world usage challenges affecting both end-user experience and developer credibility.

---

## 5. **Bugs & Stability**

| Bug | Severity | Status |
|-----|----------|--------|
| [TLS Certificate Expiry (#3377)](https://github.com/sipeed/picoclaw/issues/3377) | 🔴 Critical | ⚠️ Closed/Stale – site still down |
| [Android Pure-Go DNS Failure (#3420)](https://github.com/sipeed/picoclaw/issues/3420) | 🟠 High | 🆕 Newly Reported |
| [Multi-line Input Splitting (#3391)](https://github.com/sipeed/picoclaw/issues/3391) | 🟡 Medium | ⚠️ Closed/Stale |

Notably, there are **no associated fix PRs** for these issues yet. The Android DNS resolution bug could severely limit deployment flexibility on mobile platforms if not addressed soon.

---

## 6. **Feature Requests & Roadmap Signals**

One prominent request focuses on improving web integration capabilities:

- [Issue #3415](https://github.com/sipeed/picoclaw/issues/3415): Asks for support for reverse proxy setups using Nginx so that the Web Console can be mounted under subdirectories such as `/pico`. Currently, hardcoded paths prevent clean mounting without backend/frontend alignment.

This suggests growing interest in embedding PicoClaw into existing infrastructures, potentially signaling roadmap prioritization toward deployment flexibility.

Another enhancement in progress via [PR #3414](https://github.com/sipeed/picoclaw/pull/3414) adds configurable agent turn-time budgets, enhancing control over automated tasks — a useful feature for advanced users and enterprise deployments.

---

## 7. **User Feedback Summary**

Users express several key frustrations and needs:

- **Accessibility**: The expired TLS certificate undermines confidence in the project’s operational health.
- **Usability**: Mobile TUI input parsing breaks expected behavior when dealing with structured content like code or poetry.
- **Deployment Flexibility**: Lack of reverse-proxy awareness limits extensibility in professional environments.
- **Reliability on Android**: Pure-Go builds fail basic networking functions like DNS resolution, raising red flags about cross-platform consistency.

Despite these issues, the steady stream of dependency updates implies ongoing commitment from maintainers.

---

## 8. **Backlog Watch**

Several older yet significant items require attention:

- [Issue #3377](https://github.com/sipeed/picoclaw/issues/3377) (Critical): TLS certificate outage needs urgent resolution regardless of stale label.
- [Issue #3420](https://github.com/sipeed/picoclaw/issues/3420) (High): Android build DNS failures may affect broader adoption on mobile devices.
- [Issue #3391](https://github.com/sipeed/picoclaw/issues/3391) (Medium): Text input integrity problem affects user interaction quality.

Maintainers should consider re-evaluating the auto-closure of stale labels for high-priority issues and engaging more actively with reported bugs and feature requests.

--- 

**Next Steps Suggested:**  
🔹 Reopen critical infrastructure issues  
🔹 Prioritize fixing Android DNS resolution logic  
🔹 Evaluate architectural changes for path-prefix aware routing  
🔹 Engage contributors working on turn-time budget controls  

Let me know if you'd like a deeper technical breakdown of any specific change or bug.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-10-10

*Repository: [github.com/nanocoai/nanoclaw](https://github.com/nanocoai/nanoclaw)*

---

## 1. Today's Overview

NanoClaw is in a high-throughput maintenance phase, with **14 PRs updated in the last 24h (10 merged/closed, 4 still open)** against only **2 active issues**, indicating a healthy ratio of resolution to incoming reports. The headline event is the **v2026.10.0 release**, the project's first calendar-versioned stable release and the first to be delivered through `/update-nanoclaw` by default — a meaningful shift in release discipline from tracking `main` to tracking published tags. The merged work today was dominated by a tight cluster of core-team fixes (directory-handle safety, slash-command parsing, CLI arg normalization, and skill/install hardening), suggesting a consolidation/quality push following the release branch. Activity is **high and healthy**, but two persistent gaps remain visible: a long-running Telegram delivery bug (#3569, open since 2026-08-27) and the OneCLI gateway version pin, which is now surfacing as a capability blocker (#4068).

---

## 2. Releases

### 🚀 v2026.10.0 — First CalVer Stable Release
**Release PR:** [#4065](https://github.com/nanocoai/nanoclaw/pull/4065)

**Key changes:**
- **Adoption of calendar versioning (CalVer)** — `2026.10.0` replaces the prior scheme.
- **Update channel behavior change:** `/update-nanoclaw` now **installs published releases by default** instead of the tip of `main`. This is the most impactful operational change for users.
- **Pre-release validation:** Tested first as `2026.10.0-rc.1` and `2026.10.0-rc.2` on the `beta` channel before promotion to stable.

**Migration / Breaking Notes:**
- Users who previously relied on `/update-nanoclaw` pulling bleeding-edge `main` commits will now receive only tagged stable releases. Those wanting unreleased code must opt into the `beta` channel or track `main` manually.
- The release notes summary provided is truncated ("*It also makes updates an…*"); **users should consult the full [release page](https://github.com/nanocoai/nanoclaw/releases) for the complete changelog and any additional breaking changes** before upgrading.

---

## 3. Project Progress

Ten PRs were merged/closed today. Grouped by theme:

### 🔒 Core Stability & Correctness
| PR | Change | Link |
|---|---|---|
| #4063 | `fix(host)`: open session, skill and run-log directories **by descriptor** via new `src/anchored-dir.ts` helper — reads/writes/creates/deletes now use a persistent directory handle below the mount point. | [#4063](https://github.com/nanocoai/nanoclaw/pull/4063) |
| #4062 | `fix(commands)`: host gate and agent runner now share **one slash-command parser** (`src/slash-command.ts`, copied byte-for-byte into the runner); `/name@botname` correctly resolves to `/name`. | [#4062](https://github.com/nanocoai/nanoclaw/pull/4062) |
| #4061 | `fix(cli)`: `ncl` dispatch **normalizes arguments once** at entry (dash→underscore) before auto-fill, guard, and handler steps. | [#4061](https://github.com/nanocoai/nanoclaw/pull/4061) |
| #4064 | `test(drivers)`: keep `fs.constants` in the driver tests' `fs` stub, fixing import failures when a gateway skill (e.g. `/add-iron-proxy`) is applied. | [#4064](https://github.com/nanocoai/nanoclaw/pull/4064) |

### 🧩 Skill & Setup Hardening
| PR | Change | Link |
|---|---|---|
| #4052 | `fix(add-dial-tool)`: scopes Dial through OneCLI's **policy API** instead of the legacy rules API (which returns `410` on gateway 1.42). | [#4052](https://github.com/nanocoai/nanoclaw/pull/4052) |
| #4060 | `fix(add-mattermost)`: setup now validates the looked-up owner ID as a well-formed Mattermost user ID; fixed failure messages. | [#4060](https://github.com/nanocoai/nanoclaw/pull/4060) |
| #4059 | `fix(setup)`: OneCLI installer uses a full URL and explicit curl protocol options. | [#4059](https://github.com/nanocoai/nanoclaw/pull/4059) |

### 🏗️ Infrastructure & Dependencies
| PR | Change | Link |
|---|---|---|
| #4058 | `ci`: all GitHub Actions jobs moved to `namespace-profile-paradixe` (or self-hosted s6), per the founder-approved 2026-10-08 rule banning GitHub-hosted labels. | [#4058](https://github.com/nanocoai/nanoclaw/pull/4058) |
| #4066 | `build(deps)`: bump `source-map-js` 1.2.1 → 1.2.2 (fixes a crash). | [#4066](https://github.com/nanocoai/nanoclaw/pull/4066) |
| #4065 | `chore(release)`: v2026.10.0 release PR. | [#4065](https://github.com/nanocoai/nanoclaw/pull/4065) |

**Takeaway:** The day's merged work is almost entirely **core-team-led correctness and hardening**, with a clear pattern of consolidating duplicated logic (parsers, arg normalizers, directory access) into single sources of truth. No large user-facing feature landed; the release PR is the main "progress" signal.

---

## 4. Community Hot Topics

With only 2 issues active and limited comment counts, engagement is currently **low-to-moderate**. The most-discussed items:

### 🥇 Issue #3569 — Telegram underscore delivery bug (2 comments)
[github.com/nanocoai/nanoclaw/issues/3569](https://github.com/nanocoai/nanoclaw/issues/3569)
- **Underlying need:** A correctness/stability fix in a *core channel adapter*. The reporter (`shachartal`) has identified a precise root cause — the pinned `@chat-adapter/telegram@4.29.0` permanently drops any message with an **odd count of unescaped MarkdownV2 markers** (`_ * ~ \``), fixed upstream in **4.32.0**. Trunk still pins 4.29.0.
- **Why it matters:** This is a silent data-loss bug affecting **every Telegram install**. The precision of the report and its 6+ week lifespan signal a maintainer attention gap rather than a lack of clarity.

### 🥈 Issue #4068 — OneCLI 2.x gateway support (1 comment)
[github.com/nanocoai/nanoclaw/issues/4068](https://github.com/nanocoai/nanoclaw/issues/4068)
- **Underlying need:** A **capability unlock** — NanoClaw pins OneCLI at `1.42.0`, whose Google Docs connection requests only `drive.file` and `drive.readonly` scopes, **not the edit scope**. Upgrading to OneCLI 2.x is required for Google Docs editing.
- **Context:** Notably filed the same day the team merged #4052 (a *workaround* keeping `/add-dial-tool` functional on the old 1.42 gateway), suggesting the team is consciously bridging a stale dependency rather than upgrading it.

### 🥉 PR #3751 / #3752 — WhatsApp channel fixes (open since 2026-09-09)
[PR #3751](https://github.com/nanocoai/nanoclaw/pull/3751) · [PR #3752](https://github.com/nanocoai/nanoclaw/pull/3752)
- Both by contributor `horsehcj`, still open after a month despite being re-touched on 2026-10-09. These represent the longest-pending community contributions (see Backlog Watch).

---

## 5. Bugs & Stability

Ranked by severity:

### 🔴 Critical — Issue #3569: Telegram messages silently dropped
[Issue #3569](https://github.com/nanocoai/nanoclaw/issues/3569) · **Status: OPEN, no fix PR**
- **Impact:** All Telegram installs. Any message whose whole-message count of unescaped MarkdownV2 markers is odd **never delivers**.
- **Root cause:** Pinned dependency `@chat-adapter/telegram@4.29.0`; upstream fix available in `4.32.0`.
- **Fix path:** Simple dependency bump (3 versions forward) — low effort, high impact. **No fix PR exists yet.** This is the single highest-priority stability item.

### 🟠 Moderate — PR #4057: Docker driver false teardown failure
[PR #4057](https://github.com/nanocoai/nanoclaw/pull/4057) · **Status: OPEN (fix proposed)**
- `DockerHandle.stop()` reports a failed teardown when Docker's `--rm` auto-removal is still in flight (stop → auto-removal races with `docker rm --force`). Fix waits out in-flight removal. **Fix PR already exists.**

### 🟡 Moderate — PR #3751: WhatsApp `@newsletter` JIDs
[PR #3751](https://github.com/nanocoai/nanoclaw/pull/3751) · **Status: OPEN (fix proposed)**
- Inbound `@newsletter` JIDs are not filtered at the boundary, risking malformed message handling. **Fix PR open.**

### 🟡 Moderate — PR #3752: WhatsApp pending questions dropped
[PR #3752](https://github.com/nanocoai/nanoclaw/pull/3752) · **Status: OPEN (fix proposed)**
- Not every pending question in a chat remains answerable — a UX/logic regression in the WhatsApp channel. **Fix PR open.**

### ✅ Fixed today (via merged PRs)
- **#4063** — directory-handle safety on host (prevents descriptor/TOCTOU-style issues in session/skill/run-log dirs).
- **#4064** — driver test import failures under gateway skills.
- **#4061 / #4062** — CLI arg and slash-command parsing inconsistencies.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for next release |
|---|---|---|
| **OneCLI 2.x gateway support** (unlocks Google Docs edit scope) | [#4068](https://github.com/nanocoai/nanoclaw/issues/4068) | **High** — explicitly framed as "needed," and current 1.42 pin is being patched around rather than upgraded. Likely a coordinated dependency-pin bump + skill updates. |
| **Telegram adapter bump to ≥4.32.0** | [#3569](https://github.com/nanocoai/nanoclaw/issues/3569) | **High** — trivial dependency change with clear upstream fix; overdue. |
| **OneCLI policy-API migration** (retire legacy rules API) | [#4052](https://github.com/nanocoai/nanoclaw/pull/4052) (merged) | **Delivered** — already landed; indicates the team is preparing the codebase for the OneCLI 2.x transition. |
| **Self-hosted / namespace CI runners** | [#4058](https://github.com/nanocoai/nanoclaw/pull/4058) (merged) | **Delivered** — infrastructure direction confirmed by founder rule. |
| **WhatsApp channel robustness** | [#3751](https://github.com/nanocoai/nanoclaw/pull/3751), [#3752](https://github.com/nanocoai/nanoclaw/pull/3752) | **Medium** — community-contributed, awaiting review. |

**Prediction:** The next release (likely `2026.10.1` or `2026.11.0`) will most plausibly include the **Telegram adapter bump** and **OneCLI 2.x gateway support**, as both are dependency-pin changes that unblock currently-impaired user workflows.

---

## 7. User Feedback Summary

**Pain Points (dissatisfaction):**
1. **Silent message loss on Telegram** (#3569) — the most severe user-facing complaint. Affected users may not realize messages are being dropped, eroding trust in the platform. Reported by a technically sophisticated user with a full root-cause analysis.
2. **Stale dependency pins causing capability ceilings** (#4068) — users hitting the Google Docs edit-scope wall are effectively blocked from a documented workflow. The phrase "still the pin on `main` as of 2026-10-09" conveys user frustration at slow dependency currency.
3. **WhatsApp reliability gaps** (#3751, #3752) — pending-question and newsletter-JID issues point to channel-boundary edge cases users are actively encountering.

**Positive Signals (satisfaction):**
- Rapid turnaround on core-team fixes (10 PRs closed in one day).
- Release engineering maturity: RC testing on a beta channel before stable promotion.
- Community contributors (`horsehcj`) remain engaged and submitting fixes.

**Overall sentiment:** *Constructive but impatient on dependency hygiene.* Users are reporting precise, actionable bugs; the bottleneck is not clarity but prioritization.

---

## 8. Backlog Watch

Items needing maintainer attention:

| Item | Age | Why it needs attention |
|---|---|---|
| **[Issue #3569](https://github.com/nanocoai/nanoclaw/issues/3569)** — Telegram underscore bug | Open since **2026-08-27** (~6 weeks) | Critical severity, trivial fix (dependency bump), still unpinned. Highest-priority backlog item. |
| **[PR #3751](https://github.com/nanocoai/nanoclaw/pull/3751)** — WhatsApp `@newsletter` JIDs | Open since **2026-09-09** (~4 weeks) | Community contribution awaiting review; re-touched 2026-10-09 but not merged. |
| **[PR #3752](https://github.com/nanocoai/nanoclaw/pull/3752)** — WhatsApp pending questions | Open since **2026-09-09** (~4 weeks) | Same contributor/age as #3751; likely should be reviewed as a pair. |
| **[Issue #4068](https://github.com/nanocoai/nanoclaw/issues/4068)** — OneCLI 2.x gateway | Open since **2026-10-09** (new) | Not yet stale, but watch for it lingering like #3569 if the pin isn't updated promptly. |

**Recommendation:** The team's strong single-day merge cadence contrasts with a **6-week-old critical bug** and **two 4-week-old community PRs**. Clearing #3569 and reviewing #3751/#3752 would materially improve both stability and contributor retention.

---

### 📊 Health Snapshot
| Metric | Value | Assessment |
|---|---|---|
| PRs merged/closed (24h) | 10 | 🟢 Very high |
| PRs open (24h) | 4 | 🟢 Manageable |
| Issues active (24h) | 2 | 🟢 Low |
| New releases | 1 (v2026.10.0) | 🟢 Milestone |
| Critical open bugs | 1 (#3569) | 🔴 Needs action |
| Stale (>30d) open items | 1 issue + 2 PRs | 🟡 Watch |

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

## NullClaw Project Digest — 2026-10-10

### 1. Today's Overview
NullClaw activity for 2026-10-10 is minimal. In the last 24 hours, there were 0 issue updates, 0 new releases, and only 1 open pull request updated. The sole activity is PR [#1052](https://github.com/nullclaw/nullclaw/pull/1052), a documentation PR adding an optional Parallel Search MCP example. No PRs were merged or closed, and no issue discussion occurred, so there is no evidence of code changes, bug fixes, or community debate today. Overall, the project appears quiet but stable from this snapshot, with continued contributor interest in MCP integration documentation.

### 2. Releases
None. No new releases were published in the last 24 hours.

### 3. Project Progress
No merged or closed PRs were recorded today. The only open PR is [#1052](https://github.com/nullclaw/nullclaw/pull/1052), which proposes documentation for an opt-in Parallel Search MCP example using NullClaw’s native HTTP transport. If merged, it would add guidance for integrating `mcp_parallel_web_search` and `mcp_parallel_web_fetch` without requiring a Parallel API key or local bridge. No code features or fixes advanced today.

### 4. Community Hot Topics
- **PR [#1052](https://github.com/nullclaw/nullclaw/pull/1052)** — `docs: add optional Parallel Search MCP example`
  - Author: georgeatparallel
  - Status: OPEN
  - Created/Updated: 2026-10-09
  - Comments: undefined
  - Reactions: 👍 0
  - Summary: Adds an opt-in Parallel Search MCP example using NullClaw’s native HTTP transport. Merge the server entry into your existing configuration, restart, and use `mcp_parallel_web_search` or `mcp_parallel_web_fetch`. No Parallel API key or local bridge is needed. Anonymous access has rate limits, and the provided summary is truncated after “que...”.

**Underlying need:** The PR suggests demand for lightweight, optional MCP integrations that work without API keys or local bridge processes. It also flags anonymous-access rate limits, indicating users may need clear expectations around quota and reliability.

### 5. Bugs & Stability
No bugs, crashes, or regressions were reported or updated in the last 24 hours. There are no fix PRs to track. Severity ranking is not applicable due to zero reported issues.

### 6. Feature Requests & Roadmap Signals
No user-requested features were recorded today because there were no issue updates or comments. The only roadmap-adjacent signal is PR [#1052](https://github.com/nullclaw/nullclaw/pull/1052), which is documentation-only and focuses on optional MCP integration. It is unlikely to represent a versioned feature by itself, but if accepted, it may encourage more MCP transport examples and third-party service integrations in future docs or releases.

### 7. User Feedback Summary
There is no direct user feedback available today: 0 issues updated, 0 issue comments, and PR comments are marked as `undefined`. The only potential pain-point signal is from PR [#1052](https://github.com/nullclaw/nullclaw/pull/1052), which notes that anonymous access has rate limits. No satisfaction or dissatisfaction data can be derived from the provided dataset.

### 8. Backlog Watch
There are no long-unanswered issues or PRs in the provided data. The only open item is PR [#1052](https://github.com/nullclaw/nullclaw/pull/1052), created on 2026-10-09. It is recent rather than backlogged, but it is open and may need maintainer review. No other items require attention based on this snapshot.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



Based on the GitHub activity for **LobsterAI** (`netease-youdao/LobsterAI`) leading up to October 10, 2026, here is the structured project digest.

---

### 1. Today's Overview
LobsterAI is experiencing high development activity focused on desktop stability and provider expansion, particularly targeting Windows edge cases. While there are no new releases or active issues logged in the last 24 hours, the repository saw 5 pull requests updated, with 4 successfully merged/closed. The project health is robust, showing a responsive maintainer team actively resolving critical startup and networking loopbacks on Windows while expanding the desktop companion and LLM provider ecosystem.

---

### 2. Releases
*   **No new releases** have been published today. 

---

### 3. Project Progress
The development cycle has successfully closed 4 pull requests, resolving key desktop bugs and shipping new utility features, while 1 feature PR remains open for review:
*   **[PR #2819 (Closed)](https://github.com/netease-youdao/LobsterAI/pull/2819): Windows Config Lock Recovery** – Fixed a critical bug where orphaned 0-byte `openclaw.json.lock` files triggered endless config recovery loops and gateway restarts, keeping users stuck on the splash screen.
*   **[PR #2817 (Closed)](https://github.com/netease-youdao/LobsterAI/pull/2817): Windows Firewall Loopback Fix** – Resolved a post-reboot gateway boot timeout (300s) by allowing loopback traffic through the Windows Firewall for the `LobsterAI.exe` executable.
*   **[PR #2816 (Closed)](https://github.com/netease-youdao/LobsterAI/pull/2816): Desktop Companion Cards** – Shipped new translation and read-aloud cards next to text selections, accompanied by a refined toolbar UI hierarchy (Translate, Read aloud, Copy, Ask, with advanced options in a "More" menu).
*   **[PR #2815 (Closed)](https://github.com/netease-youdao/LobsterAI/pull/2815): Library Watcher Optimization** – Fixed noisy `ENOENT` directory watcher errors triggered when indexed artifact folders were deleted, cleaning up startup logs.
*   **[PR #2818 (Open)](https://github.com/netease-youdao/LobsterAI/pull/2818): Atlas Cloud Provider Integration** – A community-contributed feature adding Atlas Cloud as a global LLM provider next to OpenRouter.

---

### 4. Community Hot Topics
While formal GitHub issues remain at zero, developer and user focus is heavily concentrated on two areas:
*   **Windows Desktop Hardening:** The high volume of closed fixes (#2815, #2817, #2819) highlights that Windows-specific file locking and networking quirks are the primary hot topics for the engineering team.
*   **Provider Integration (#2818):** The open PR adding Atlas Cloud indicates community interest in diversifying the available AI model routing options beyond existing defaults like OpenRouter.

---

### 5. Bugs & Stability
Today's bug fixes addressed severe stability bottlenecks on the Windows platform:
*   **Severity: Critical (Resolved in #2817)** – Loopback connection failures causing the app to hang on startup after system reboots. *Fix is merged.*
*   **Severity: Critical (Resolved in #2819)** – Application freeze/restart loops caused by orphaned configuration write locks. *Fix is merged.*
*   **Severity: Low/Medium (Resolved in #2815)** – Startup log spam and directory watcher crashes when local library folders were deleted. *Fix is merged.*

All reported regressions have corresponding merged fix PRs, indicating a highly responsive stabilization phase.

---

### 6. Feature Requests & Roadmap Signals
While no formal feature request issues are open, the pull request trends signal clear roadmap directions:
*   **Multi-Provider Routing:** The integration of Atlas Cloud (#2818) suggests the roadmap is moving towards a highly configurable multi-provider AI agent backend.
*   **Context-Aware Desktop Utilities:** The translation and read-aloud cards (#2816) point to a roadmap that heavily leverages OS-level text selections to provide frictionless, on-the-fly translation and reading assistance.

---

### 7. User Feedback Summary
User pain points extracted from the bug-fix PRs indicate that Windows users faced major friction during standard operations (booting the app and keeping configuration files locked). The application's core gateway loopback mechanism was fragile under Windows security boundaries, and file-system watchers were overly sensitive to manual folder deletions. User satisfaction is likely increasing rapidly due to the targeted stabilization patches merged today.

---

### 8. Backlog Watch
*   **Issues:** No stale or long-unanswered issues are currently tracked (total open issues: 0).
*   **Pull Requests:** **[PR #2818 (Atlas Cloud provider)](https://github.com/netease-youdao/LobsterAI/pull/2818)** is the sole active pull request requiring maintainer review to merge the Atlas Cloud provider expansion.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>



Based on the GitHub data for the Moltis repository (`moltis-org/moltis`) as of October 10, 2026, here is the structured project digest:

---

### 1. Today's Overview
The Moltis project is experiencing a quiet period of activity on October 10, 2026, with no pull requests or new releases recorded in the last 24 hours. The only active thread of community engagement is a newly opened integration inquiry by A2Agent-ai, highlighting ongoing interest in expanding the platform's provider compatibility. Overall, the project health appears stable, maintaining a clean code integration front with no urgent development noise.

### 2. Releases
*   **New Releases:** None. No new versions, patches, or major updates were released today.

### 3. Project Progress
*   **Pull Requests:** No pull requests were submitted, merged, or closed today (0 total). 
*   **Code Activity:** Development velocity was silent today, indicating a steady state or post-release maintenance window with no immediate code-level advancements or bug-fix deployments.

### 4. Community Hot Topics
*   **Hot Issue:** [**#1296**](https://github.com/moltis-org/moltis/issues/1296) - *Test an A2Agent profile through Moltis provider setup* (Opened by A2agent-ai).
    *   **Underlying Needs:** The author, representing A2Agent (an OpenAI- and Anthropic-compatible model gateway), is seeking to validate the integration path with Moltis. They are looking for the minimal viable configuration—specifically asking if a custom endpoint is sufficient, or if they require a thin provider preset. This reflects a broader community desire for low-friction, generic provider abstractions, allowing users to easily route third-party API-compatible gateways through Moltis's architecture.

### 5. Bugs & Stability
*   **Incidents Today:** None reported. 
*   There are no active bug reports, crashes, or regressions flagged in the issue tracker from the last 24 hours, indicating a stable operational baseline for the current build.

### 6. Feature Requests & Roadmap Signals
*   **Provider Extensibility (Issue #1296):** The request for a simple "custom endpoint" or a "thin provider preset" serves as a strong signal that users want Moltis to be highly compatible with generic, multi-model proxy gateways out of the box. 
*   **Roadmap Prediction:** To foster a healthier ecosystem and ease the onboarding of third-party compatible APIs (like OpenAI/Anthropic proxies), future minor updates may focus on simplifying the `moltis-providers` layer to allow unregistered, generic endpoint mapping without heavy schema overhead.

### 7. User Feedback Summary
*   **Integration Friction:** The primary user feedback today centers around setup clarity for external gateways. The A2Agent team is proactively seeking documentation or minimal configuration paths to confirm compatibility before committing to deeper integration. 
*   **Sentiment:** The interaction is constructive and collaborative, with external developers looking to align their tools with Moltis's provider layer.

### 8. Backlog Watch
*   **Key Item to Watch:** [**Issue #1296**](https://github.com/moltis-org/moltis/issues/1296) should be monitored for maintainer response. Resolving this with documentation updates or a simplified provider preset configuration will help validate Moltis's ease of use for external AI gateway providers. 
*   The absence of other old, unanswered issues in the recent data suggests either highly efficient issue management or a currently well-balanced backlog.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

The user wants a project digest for the CoPaw (github.com/agentscope-ai/CoPaw) repository based on the provided data, dated 2026-10-10.

Let's carefully analyze the input data to construct the digest according to the requested sections.

Data Overview:
- Issues updated in last 24h: 19 (open/active: 13, closed: 6)
- PRs updated in last 24h: 34 (open: 21, merged/closed: 13)
- New releases: 0

Let's list the issues (19 total):
1. #8134 [OPEN] [bug] [Bug]: 聊天记录和大模型上下文窗口关联 (Chat history and LLM context window correlation) - Author: happieme | Created: 2026-10-08 | Updated: 2026-10-09 | Comments: 10 | 👍: 0
2. #8040 [OPEN] [Bug]: embedding reindex incomplete: N chunks failed — one CJK chunk over the provider's per-item token limit silently drops its whole batch (recurrence of #5950) - Author: ianfunghk | Created: 2026-09-30 | Updated: 2026-10-09 | Comments: 5 | 👍: 0
3. #8120 [OPEN] [bug] [Bug]: 频繁 页面加载失败 (Frequent page loading failures) - Author: henryliuwork | Created: 2026-10-08 | Updated: 2026-10-09 | Comments: 4 | 👍: 0
4. #7599 [CLOSED] [bug] [Bug]: 今天在使用opencode go 套餐中的模型时, 一直出现 "MissingSessionID" - Author: tina0501853 | Created: 2026-09-07 | Updated: 2026-10-09 | Comments: 4 | 👍: 0
5. #7809 [OPEN] [enhancement] [Feature] Tool approval cards & notifications are hardcoded English — add i18n support - Author: singlet264 | Created: 2026-09-16 | Updated: 2026-10-09 | Comments: 2 | 👍: 0
6. #8153 [OPEN] [Security] MCP Driver 配置接口导致 root RCE —— 完整入侵证据链（已脱敏） - Author: kenzone | Created: 2026-10-09 | Updated: 2026-10-09 | Comments: 2 | 👍: 0
7. #8073 [CLOSED] [bug] [Bug]: V2.2.2.beta4 Unable to access conversation page - Author: funnygeeker | Created: 2026-10-01 | Updated: 2026-10-09 | Comments: 2 | 👍: 0
8. #8160 [OPEN] [Feature]: Add Spanish (es) interface language - Author: bookmarkforge | Created: 2026-10-09 | Updated: 2026-10-09 | Comments: 1 | 👍: 0
9. #8158 [OPEN] [bug] [Bug]: Assistant's final answer renders as an empty bubble when the model emits its Scroll headline as a standalone final text block - Author: ErickCharles | Created: 2026-10-09 | Updated: 2026-10-09 | Comments: 1 | 👍: 0
10. #8129 [CLOSED] [Bug]: Image resizing loses EXIF orientation in model requests - Author: lux-liang | Created: 2026-10-08 | Updated: 2026-10-09 | Comments: 1 | 👍: 0
11. #8009 [CLOSED] Oversized image stored in context makes a session permanently unusable - Author: sdxwmlyl | Created: 2026-09-28 | Updated: 2026-10-09 | Comments: 1 | 👍: 0
12. #8152 [OPEN] [enhancement] [Feature]: QwenPaw-Hub服务中的Hub管理中心-添加账号时建议可添加账号的备注 - Author: andyhau520 | Created: 2026-10-09 | Updated: 2026-10-09 | Comments: 1 | 👍: 0
13. #8143 [OPEN] [Bug]: Console error spam - svg width/height receives non-numeric length from Button size prop - Author: li8380 | Created: 2026-10-09 | Updated: 2026-10-09 | Comments: 1 | 👍: 0
14. #8150 [OPEN] [Bug]: Feishu 入站图文混发（post 内嵌图片）被静默丢弃——仅解析文字、不下载图片、无任何警告（inbound，与 #2792 出站方向相反） - Author: GIT6608 | Created: 2026-10-09 | Updated: 2026-10-09 | Comments: 1 | 👍: 0
15. #8148 [OPEN] [enhancement] [Feature]: Reasoning fold / pressure microcompaction never triggers on models declaring a large context_size - Author: li8380 | Created: 2026-10-09 | Updated: 2026-10-09 | Comments: 1 | 👍: 0
16. #8147 [CLOSED] [bug] [Bug]: Console crashes with 页面出现异常 after agent switch: crypto.randomUUID is not a function (v2.2.2b4) - Author: ceragon | Created: 2026-10-09 | Updated: 2026-10-09 | Comments: 1 | 👍: 0
17. #8081 [CLOSED] [enhancement] [Feature]: Add view_audio built-in tool for audio understanding - Author: shuziP | Created: 2026-10-02 | Updated: 2026-10-09 | Comments: 1 | 👍: 0
18. #8135 [OPEN] console perf: large backdrop-filter radii (12-28px) on glass surfaces + per-frame decorative costs keep the GPU busy (most visible on iGPU) — suggest an official "reduced effects" tier - Author: LUOSENGWA | Created: 2026-10-08 | Updated: 2026-10-09 | Comments: 1 | 👍: 0
19. #8142 [OPEN] [enhancement] [Feature]: 建议从Tauri2切换到Electron，增加linux环境兼容性特别是麒麟v10桌面系列 - Author: jiangchuanso | Created: 2026-10-08 | Updated: 2026-10-09 | Comments: 1 | 👍: 0

Let's list the Pull Requests (34 total, showing top 20 by comment count):
1. #8159 [OPEN] [size/S] fix(console): skip empty text messages in response grouping - Author: lorenzozanee | Created: 2026-10-09 | Updated: 2026-10-09 | Comments: undefined | 👍: 0
2. #7613 [OPEN] [first-time-contributor, Under Review] feat(memory): add OpenViking memory plugin - Author: xypang33-sketch | Created: 2026-09-07 | Updated: 2026-10-09 | Comments: undefined | 👍: 0
3. #7565 [OPEN] [size/XXXL] feat(plugins): add clean unload and rollback-safe hot reload - Author: XiuShenAl | Created: 2026-09-04 | Updated: 2026-10-09 | Comments: undefined | 👍: 0
4. #8156 [OPEN] [size/L] feat(api): add coding-cli management endpoints for worker containers - Author: LUOSENGWA | Created: 2026-10-09 | Updated: 2026-10-09 | Comments: undefined | 👍: 0
5. #8157 [OPEN] [size/XS] fix(chat): prevent invalid copy icon size - Author: zhijianma | Created: 2026-10-09 | Updated: 2026-10-09 | Comments: undefined | 👍: 0
6. #8065 [OPEN] [Under Review, size/S] fix(skills): sanitize skill_name before building staging paths - Author: BeiMu-new | Created: 2026-10-01 | Updated: 2026-10-09 | Comments: undefined | 👍: 0
7. #8055 [CLOSED] [Under Review, size/L] fix(skills): offload pool download copy and sweep orphan stages - Author: BeiMu-new | Created: 2026-09-30 | Updated: 2026-10-09 | Comments: undefined | 👍: 0
8. #8155 [CLOSED] [first-time-contributor, size/S] feat(local-models): update QwenPaw-Flash 9B, 27B and 35B-A3B - Author: Xinji-Mai | Created: 2026-10-09 | Updated: 2026-10-09 | Comments: undefined | 👍: 0
9. #8136 [CLOSED] [size/S] fix(media): preserve EXIF orientation during image resizing - Author: qbc2016 | Created: 2026-10-08 | Updated: 2026-10-09 | Comments: undefined | 👍: 0
10. #8010 [CLOSED] [first-time-contributor, size/M] fix(agents): recover from media payload rejections instead of failing - Author: sdxwmlyl | Created: 2026-09-28 | Updated: 2026-10-09 | Comments: undefined | 👍: 0
11. #8154 [OPEN] [size/XXL] fix(console): improve chunk error recovery and diagnostics - Author: zhaozhuang521 | Created: 2026-10-09 | Updated: 2026-10-09 | Comments: undefined | 👍: 0
12. #8130 [CLOSED] [size/M] fix(console): keep only the page title in settings headers - Author: zhaozhuang521 | Created: 2026-10-08 | Updated: 2026-10-09 | Comments: undefined | 👍: 0
13. #8121 [OPEN] [size/XXXL] feat(creator): release 2.0.1 with controlled media production - Author: xuanrui-L | Created: 2026-10-08 | Updated: 2026-10-09 | Comments: undefined | 👍: 0
14. #8089 [CLOSED] [Under Review, size/S] fix(console): support terminal identity over LAN HTTP - Author: lorenzozanee | Created: 2026-10-03 | Updated: 2026-10-09 | Comments: undefined | 👍: 0
15. #8098 [OPEN] [size/S] fix(agents): return a result for foreground chat timeouts - Author: lorenzozanee | Created: 2026-10-03 | Updated: 2026-10-09 | Comments: undefined | 👍: 0
16. #7931 [OPEN] [size/XXXL] feat(chat): add durable paginated transcript history - Author: zhijianma | Created: 2026-09-22 | Updated: 2026-10-09 | Comments: undefined | 👍: 0
17. #8151 [OPEN] [size/M] fix(local_models): parse llama.cpp build numbers without false updates - Author: JasonBuildAI | Created: 2026-10-09 | Updated: 2026-10-09 | Comments: undefined | 👍: 0
18. #7869 [CLOSED] [Under Review, size/S] fix(providers): carry the session header on connection checks - Author: wananing | Created: 2026-09-18 | Updated: 2026-10-09 | Comments: undefined | 👍: 0
19. #8141 [CLOSED] [size/S] fix(qwenpaw-data): keep UI host types package-local - Author: cyruszhang | Created: 2026-10-09 | Updated: 2026-10-09 | Comments: undefined | 👍: 0
20. #8146 [CLOSED] [size/S] fix(console): support terminal UUIDs on HTTP origins - Author: zhaozhuang521 | Created: 2026-10-09 | Updated: 2026-10-09 | Comments: undefined | 👍: 0

Let's structure the digest based on the required sections.

### Section 1: Today's Overview
- Summarize project status and activity assessment.
- High activity: 19 issues and 34 PRs updated in the last 24 hours.
- Active development, community engagement, and bug fixing. High maintainer and contributor responsiveness, with several critical security and stability fixes being addressed or closed.

### Section 2: Releases
- None. "New releases: 0", "Latest Releases: None".

### Section 3: Project Progress
- Merged/closed PRs today (13 items):
  - #8155 [CLOSED] feat(local-models): update QwenPaw-Flash 9B, 27B and 35B-A3B
  - #8136 [CLOSED] fix(media): preserve EXIF orientation during image resizing (fixes #8129)
  - #8010 [CLOSED] fix(agents): recover from media payload rejections instead of failing (fixes #8009)
  - #8055 [CLOSED] fix(skills): offload pool download copy and sweep orphan stages
  - #8130 [CLOSED] fix(console): keep only the page title in settings headers
  - #8089 [CLOSED] fix(console): support terminal identity over LAN HTTP
  - #7869 [CLOSED] fix(providers): carry the session header on connection checks
  - #8141 [CLOSED] fix(qwenpaw-data): keep UI host types package-local
  - #8146 [CLOSED] fix(console): support terminal UUIDs on HTTP origins (fixes #8147, #8073)
  - #8154 is OPEN, but some others are closed. Let's make sure we list all closed/merged PRs from the list.
  - Closed PRs in the list:
    - #8055 [CLOSED] fix(skills): offload pool download copy and sweep orphan stages
    - #8155 [CLOSED] feat(local-models): update QwenPaw-Flash 9B, 27B and 35B-A3B
    - #8136 [CLOSED] fix(media): preserve EXIF orientation during image resizing
    - #8010 [CLOSED] fix(agents): recover from media payload rejections instead of failing
    - #8130 [CLOSED] fix(console): keep only the page title in settings headers
    - #8089 [CLOSED] fix(console): support terminal identity over LAN HTTP
    - #7869 [CLOSED] fix(providers): carry the session header on connection checks
    - #8141 [CLOSED] fix(qwenpaw-data): keep UI host types package-local
    - #8146 [CLOSED] fix(console): support terminal UUIDs on HTTP origins
- Highlights of closed PRs:
  - Stability & Crash Fixes: Resolved console crashes on HTTP origins (LAN/Tailscale) by replacing `crypto.randomUUID()` with a fallback method (#8146, #8089). This addresses issues like #8147 and #8073 (conversation page access failures).
  - Media Handling: Image resizing now preserves EXIF orientation (#8136), resolving visual orientation bugs. Also, agent recovery from media payload rejections has been implemented to prevent permanently dead sessions (#8010).
  - Skills & Plugins: Offloaded skill pool downloads to prevent event loop blocking and added cleanup for orphan stages (#8055). Additionally, local model recommendations for QwenPaw-Flash were updated (#8155).
  - Developer Experience: Added coding-cli management endpoints for worker containers (#8

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-10-10

## 1. Today's Overview

ZeroClaw is in a high-velocity maintenance and design phase: 67 tracked items were updated in the last 24 hours (17 issues, 50 PRs), but only 4 PRs and 2 issues actually closed, indicating a large in-flight review queue rather than rapid merge throughput. No new releases shipped, and the issue mix skews toward architecture/RFC work (A2A protocol, RAG knowledge corpus, search routing) alongside a notable cluster of ZeroCode TUI bugs. Two S1-level defects surfaced or persisted — a config schema memory leak (#11614) and the closed flaky-test blocker (#11180) — while the highest-severity open bug remains the SQLite `created_at` corruption (#11420). Overall health is solid on engagement (many comments on trackers and RFCs) but strained on merge latency, with 46 open PRs against 4 closures and several high-risk, size:XL PRs awaiting maintainer/author action.

## 2. Releases

No new releases were published in this window, and there are no release notes, breaking changes, or migration guidance to report.

## 3. Project Progress

Closed/merged items today (4 PRs total closed; the 3 visible in the top-20 slice):

- **PR #11436 [CLOSED]** — `docs(runtime): batch bounded holding-crate exceptions` ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/11436)). Consolidated eighteen bounded holding-crate placement requests into `crates/zeroclaw-runtime/AGENTS.md` so scope can be decided without bundling implementation branches.
- **PR #11625 [CLOSED]** — `docs(runtime): propose terminal-response placement exception` ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/11625)). Bounded holding-crate exception for runtime consumers of incomplete-provider terminal outcomes from #9447.
- **PR #11530 [CLOSED]** — `fix(tunnel): publish WSS and enrollment via tailscale serve with tailnet-valid certificates` ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/11530)). Previously only the gateway port was published, blocking localhost-bound daemons from remote RPC/enrollment.
- **Issue #11180 [CLOSED]** — Flaky parallel-runtime test resolved ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/11180)).
- **Issue #10741 [CLOSED]** — ZeroCode queued-work pause after a normal-looking completion ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/10741)).

Net: progress today was primarily **documentation/holding-crate governance** and **tunnel plumbing**, not user-facing feature delivery.

## 4. Community Hot Topics

Ranked by comment count:

1. **Issue #8692 — [Tracker]: Maintainer decision queue for RFCs and design issues** ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)) — 15 comments. The single most active thread. It is the issue-level decision queue for RFCs, design issues, and release-policy questions. Underlying need: maintainers are the bottleneck for acceptance/rejection/deferral, and contributors want predictable routing.
2. **Issue #9887 — Downscale oversized images instead of dropping them; allow disabling limits with 0** ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/9887)) — 6 comments, `status:blocked`, `status:parking-lot`, `risk:high`. Multimodal UX gap: images >5 MiB are rejected outright, producing "N attached image(s) could not be loaded."
3. **Issue #11420 — SQLite session backend rewrites `created_at` on every turn** ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/11420)) — 6 comments, `priority:p1`. Data-integrity issue affecting transcript timestamps.
4. **Issue #11254 — RFC: A2A protocol crate (`zeroclaw-a2a`)** ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/11254)) — 5 comments, `needs-maintainer-review`, `risk:high`. Cross-cutting architecture RFC for agent-to-agent interoperability.
5. **Issue #11204 — OpenRouter spend shows $0.00 / tokens classified "free tok"** ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/11204)) — 4 comments, `priority:p1`, `risk:high`.

**Analysis:** The community's center of gravity is (a) *governance/process* — the #8692 decision queue dominating comments signals contributor frustration with maintainer review bandwidth; (b) *cost and observability accuracy* — two separate issues (#11204, #11613) report the cost ledger under-counting or zeroing spend; (c) *interoperability* — A2A (#11254) and RAG (#11235) RFCs point to a roadmap toward multi-agent and document-grounded capabilities.

## 5. Bugs & Stability

Ranked by severity:

**S1 — workflow blocked**
- **Issue #11614 — `map_key_sections` leaks schema paths on every call, growing daemon memory** ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/11614)). `Box::leak(s.into_boxed_str())` emitted at three macro sites. Unbounded memory growth; no fix PR visible.
- **Issue #11180 [CLOSED]** — Flaky `llm_request_payload_off_still_carries_prefix_fingerprints` reading another test's record under the parallel runtime gate ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/11180)). Now closed.

**P1 / S2 — degraded behavior**
- **Issue #11420 — SQLite rewrites `created_at` of every message each turn** ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/11420)). Per-message timestamps lost; affects `GET /api` transcript semantics.
- **Issue #11204 — OpenRouter `usage.cost` never ingested; spend shows $0.00** ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/11204)). `status:accepted`, `risk:high`, but no fix PR listed.
- **Issue #11613 — Cost ledger drops provider `total_tokens`, under-counting hidden reasoning tokens** ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/11613)). Newly reported; affects Gemini via OpenAI-compatible providers.
- **Issue #11632 — Desktop (Linux/Tauri): WebKitWebProcess repaints continuously at ~100% GPU when idle** ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/11632)). Zero comments, freshly filed — needs triage.
- **Issue #11612 — Re-running an already-approved shell command aborts the agent loop and ends the ACP session** ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/11612)). Reported by external safety-testing group DefuzeX with a reproduction.
- **Issue #11623 — ZeroCode drops a pending `ask_user` prompt without replying; tool times out after 600 s** ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/11623)).
- **Issue #11618 — ZeroCode drops a queued message when daemon refuses as `SESSION_BUSY`** ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/11618)). Silent user-input loss.
- **Issue #11484 — ZeroCode agent turns disable repetitive-tool safeguards** ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/11484)). Repeated identical `web_fetch` calls observed.
- **Issue #11620 — Feature/bug: ZeroCode transcript never shows message times** ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/11620)) — overlaps with #11420's timestamp loss.

**Fix PRs in flight (none merged):**
- PR #11531 — `fix(tunnel): report the URL tailscale actually serves on` ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/11531)).
- PR #11541 — `fix(providers): send configured extra_headers on Anthropic requests` ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/11541)), `needs-author-action`.
- PR #9447 — `fix(anthropic): classify incomplete terminal responses` ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/9447)), `status:in-progress`, `needs-maintainer-review`.
- PR #11576 — `fix(rpc): sign TUI identities with the install key next to config.toml` ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/11576)).

**Notable pattern:** A distinct **ZeroCode TUI stability cluster** (#11618, #11623, #11484, #11620, #10741) — all authored by Audacity88 — suggests the TUI message-queue/elicitation path needs dedicated hardening.

## 6. Feature Requests & Roadmap Signals

Active enhancement/RFC items likely to influence the next version:

- **Issue #11254 — RFC: A2A protocol crate** ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/11254)) — agent-to-agent interoperability; cross-cutting, `risk:high`, `needs-maintainer-review`.
- **Issue #11235 — RFC: Knowledge corpus / RAG for the agent** ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/11235)) — document-grounded answers from operator-held corpora.
- **Issue #11074 — RFC: `search_routes` hint-based provider routing for `web_search_tool`** ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/11074)) — mirrors existing `[[model_routes]]`.
- **Issue #9887 — Downscale oversized images / allow `0` to disable multimodal limits** ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/9887)).
- **PR #11516 — `feat(runtime): add effort-aware local and cloud routing`** ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/11516)), `size:XL`, `risk:high`.
- **PR #11467 — `feat(agent): add opt-in single-tool provider rounds`** ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/11467)), `size:XL`.
- **PR #11181 — `feat(runtime): preserve per-message steering provenance`** ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/11181)), tagged `release:v0.9.0`.
- **PR #11577 — `feat(runtime): run a subagent on an operator-declared model route`** ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/11577)).

**Prediction:** Given the `release:v0.9.0` tag on #11181 and the volume of routing work (#11516, #11577, #11074), the next release likely centers on **effort-aware model routing + steering provenance**. RAG (#11235) and A2A (#11254) are higher-risk RFCs that appear to be *next-next* release material, gated by the #8692 decision queue.

## 7. User Feedback Summary

- **Cost visibility is a top pain point.** Two independent reports (#11204 OpenRouter $0.00, #11613 hidden reasoning tokens) show users cannot trust spend dashboards — a serious issue for operators running paid providers at scale.
- **Data fidelity matters.** #11420 (lost per-message timestamps) plus #11620 (no times in ZeroCode transcript) indicate users are debugging multi-event sessions and cannot order events.
- **Silent input loss erodes trust.** #11618 (queued message dropped on `SESSION_BUSY`) and #11623 (dropped `ask_user` prompt) are the kind of failures that make an assistant feel unreliable — a recurring theme in the ZeroCode cluster.
- **External safety scrutiny.** DefuzeX's report (#11612) shows ZeroClaw is now being tested by third-party agent-safety tooling (KUMA), with a full reproduction supplied — a maturity signal, but also a signal that approval/repeat-tool semantics need hardening.
- **Contributor process friction.** The 15-comment #8692 tracker and multiple `needs-maintainer-review` / `needs-author-action` tags suggest contributors want faster, clearer decisions on RFCs.
- **Satisfaction signals** are indirect but present: users are running ~90 requests / ~2.1M tokens through OpenRouter, multi-provider setups, MLX-LM local models, and Tauri desktop builds — i.e., real, diverse production usage.

## 8. Backlog Watch

Items needing maintainer attention (long-lived, high-impact, or blocked):

- **Issue #8692 — Maintainer decision queue** ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)) — open since 2026-07-04, 15 comments, no 👍. The queue that unblocks other RFCs; its own staleness is a process risk.
- **Issue #9887 — Oversized image downscaling** ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/9887)) — open since 2026-08-10, `status:blocked` + `status:parking-lot`, `risk:high`. Blocked with no resolution path.
- **PR #9447 — Anthropic incomplete terminal responses** ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/9447)) — open since 2026-07-27 (≈10 weeks), `size:XL`, `needs-maintainer-review`. A long-hanging high-value provider fix.
- **PR #11541 — Anthropic `extra_headers`** ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/11541)) — `needs-author-action`, security-relevant config gap.
- **PR #11056 — WhatsApp voice-note docs** ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/11056)) — open since 2026-09-22, `needs-author-action`, trivial `size:XS`; a quick win being left idle.
- **PR #11516 / #11467 / #11181 / #11577** — all `size:XL`/`risk:high` features in review; collectively they represent the bulk of the roadmap and are the main candidates for maintainer time investment.
- **PR #11636 — dependabot rust-all bump (24 updates)** ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/11636)) — routine but worth timely review to avoid dependency drift.

---

**Health verdict:** Engagement is strong and the contributor base is technically serious (RFCs, provenance, routing). The two structural risks are **review throughput** (46 open PRs, 4 closed; XL/high-risk items stacking) and **cost/timestamp accuracy**, which together with the ZeroCode TUI bug cluster are the most likely sources of user-visible dissatisfaction if left unresolved into the next release.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*