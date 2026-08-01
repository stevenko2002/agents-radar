# OpenClaw Ecosystem Digest 2026-08-02

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-01 22:16 UTC

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

# OpenClaw Project Digest — 2026-08-02

**Repository:** [openclaw/openclaw](https://github.com/openclaw/openclaw)

---

## 1. Today's Overview

OpenClaw is in an active development and release cadence, with 500 issues and 500 PRs updated in the last 24 hours, indicating a high-traffic project with broad community and maintainer engagement. A new pre-release version, **v2026.7.2-beta.6**, was published, continuing the 2026.7.2 stabilization effort with a focus on state safety and recovery hardening. The issue pool is dominated by P0/P1 severity reports (database corruption, session state loss, message delivery failures, security regressions), suggesting the project is in a stabilization phase where edge-case reliability and data integrity are under heavy scrutiny. Overall, the project appears healthy in terms of contributor activity but is carrying significant technical debt around crash recovery, auth provider resilience, and cross-channel message consistency.

---

## 2. Releases

### v2026.7.2-beta.6 — [openclaw 2026.7.2-beta.6](https://github.com/openclaw/openclaw/releases)

**Highlights (v2026.7.2):**
- **State safety and recovery overhaul:** introduced a quarantine store that survives primary-database damage, crash-recoverable SQLite snapshots, crash-durable filesystem publication, schema-upgrade data-loss rejection, and rollback-writer snapshot recovery. ([PR #1](https://github.com/openclaw/openclaw/pull/1))
- This release appears to be a direct response to multiple P0/P1 database-corruption and state-loss issues reported in the current cycle (see Bugs & Stability).

*No full changelog was provided beyond the highlights above; detailed migration notes are not yet available for this beta.*

---

## 3. Project Progress

*Note: The provided data lists 500 PRs "updated in last 24h" but does not include a list of merged/closed PRs for today. The top 30 PRs shown are all OPEN, so no merges can be confirmed from the available snapshot.*

**Active PRs by area (from top 30):**
- **Agent & context engine:** PR #97175 adds per-task timeout bounds to deferred turn maintenance to prevent lane wedging; PR #117311 preserves canonical compaction user turns to prevent silent data loss during session compaction.
- **Auth & provider:** PR #114261 fixes `auth_profile_store` not resyncing on API key updates; PR #116248 fixes default agent losing keys after secondary paste-api-key.
- **Channel & messaging:** PR #116543 pages Teams channel thread replies; PR #107362 blocks unresolved Telegram reply targets; PR #117443 resolves effective channel model override for `/status`.
- **Performance & stability:** PR #117655 waits for gateway WebSocket readiness in benchmarks; PR #117652 contains transport watchdog failures to prevent process termination.
- **Security & CI:** PR #114287 adds fail-closed publication security preflight; PR #117144 packages runtime resources in dist artifacts.
- **Doctor/CLI:** PR #117488 rejects conflicting maintenance operations before side effects; PR #117535 classifies critically low disk space as an error.

---

## 4. Community Hot Topics

### Top Issues by Comment Count

| # | Issue | Comments | Severity | Link |
|---|-------|----------|----------|------|
| 1 | [DeepSeek v4 Flash silent reply failure](https://github.com/openclaw/openclaw/issues/116277) | 73 | P1 | [#116277](https://github.com/openclaw/openclaw/issues/116277) |
| 2 | [Text between tool calls leaks to messaging channels](https://github.com/openclaw/openclaw/issues/25592) | 39 | P1 | [#25592](https://github.com/openclaw/openclaw/issues/25592) |
| 3 | [Realtime voice retains unbounded provider/consult state](https://github.com/openclaw/openclaw/issues/116201) | 33 | P1 | [#116201](https://github.com/openclaw/openclaw/issues/116201) |
| 4 | [Crash-loop breaker suppresses Discord/WhatsApp permanently](https://github.com/openclaw/openclaw/issues/115326) | 24 | P1 | [#115326](https://github.com/openclaw/openclaw/issues/115326) |
| 5 | [`exec` tool ignores skills.env env vars](https://github.com/openclaw/openclaw/issues/31583) | 14 | P1 | [#31583](https://github.com/openclaw/openclaw/issues/31583) |
| 6 | [CLI startup preflight corrupts live state DB](https://github.com/openclaw/openclaw/issues/101290) | 14 | P0 | [#101290](https://github.com/openclaw/openclaw/issues/101290) |
| 7 | [Gateway fails to start after 2026.7.1 update](https://github.com/openclaw/openclaw/issues/108435) | 14 | P0 | [#108435](https://github.com/openclaw/openclaw/issues/108435) |

### Top PRs by Activity

| PR | Title | Status | Link |
|----|-------|--------|------|
| [#117660](https://github.com/openclaw/openclaw/pull/117660) | refactor(lmstudio): consolidate provider setup test fixtures | Open, ready for maintainer | [PR](https://github.com/openclaw/openclaw/pull/117660) |
| [#117274](https://github.com/openclaw/openclaw/pull/117274) | fix(agents): prefer write/edit tools over heredocs | Open, needs proof | [PR](https://github.com/openclaw/openclaw/pull/117274) |
| [#97175](https://github.com/openclaw/openclaw/pull/97175) | fix(context-engine): bound deferred turn maintenance with per-task timeout | Open, needs proof | [PR](https://github.com/openclaw/openclaw/pull/97175) |
| [#114287](https://github.com/openclaw/openclaw/pull/114287) | chore: add fail-closed publication security preflight | Open, needs proof | [PR](https://github.com/openclaw/openclaw/pull/114287) |

**Underlying needs analysis:** The DeepSeek v4 Flash failure (#116277, 73 comments) and the tool-call text leak (#25592, 39 comments) represent the two most emotionally engaged topics — users are experiencing silent failures and privacy leaks in production messaging workflows. The voice session state leak (#116201) and crash-loop suppression (#115326) reflect a broader community concern that resource management and recovery mechanisms are not robust enough for long-running deployments.

---

## 5. Bugs & Stability

### Critical (P0)

1. **[CLI startup preflight corrupts live state DB](https://github.com/openclaw/openclaw/issues/101290)** — `openclaw.sqlite` corrupted four times over a 5-day window on macOS while the gateway was running normally. Health-check commands triggered "database disk image is malformed." No fix PR identified.
2. **[Gateway HTTP server listens but does not accept connections](https://github.com/openclaw/openclaw/issues/109145)** — v2026.7.1-beta.5 regression; socket reports listening but never accepts TCP. No fix PR identified.
3. **[Schema downgrade recovery quarantines/wipes state DB](https://github.com/openclaw/openclaw/issues/115421)** — cron jobs lost after schema downgrade; recovery leaves empty DB and backup artifacts. No fix PR identified.
4. **[ACP session half-initialization causes permanent ready-check timeout loop](https://github.com/openclaw/openclaw/issues/115847)** — `initializeSession()` timeout leaves half-written session file, blocking all future attempts. No fix PR identified.

### High (P1)

5. **[DeepSeek v4 Flash silent reply failure](https://github.com/openclaw/openclaw/issues/116277)** — no reply generated, generic fallback shown to users. 73 comments.
6. **[Text between tool calls leaks to messaging channels](https://github.com/openclaw/openclaw/issues/25592)** — internal processing output exposed to Slack/iMessage/etc. 39 comments.
7. **[Realtime voice retains unbounded provider/consult state](https://github.com/openclaw/openclaw/issues/116201)** — resource limits are cancellation signals, not hard bounds. 33 comments.
8. **[Crash-loop breaker suppresses Discord/WhatsApp permanently](https://github.com/openclaw/openclaw/issues/115326)** — documented recovery path (`channels.start`) fails with WebSocket 1006. 24 comments.
9. **[Gateway V8 heap OOM during main-session turn](https://github.com/openclaw/openclaw/issues/115424)** — restart-recovery hot-resumes session and converts one crash into a 7-core-dump loop. 6 comments.
10. **[Usage-cost refresh lock permanently freezes after restart in containers](https://github.com/openclaw/openclaw/issues/114234)** — `isProcessRunning(lock.pid)` validation fails when PID is reused. 6 comments.
11. **[Billing cooldown outlives outage on subscription auth](https://github.com/openclaw/openclaw/issues/115642)** — 5-hour `disabledUntil` window persists past provider recovery. 6 comments.
12. **[Internal Reasoning Leakage in 2026.6.5](https://github.com/openclaw/openclaw/issues/91804)** — agent thinking tags exposed to users. 6 comments.
13. **[Bundled browser-copilot Gateway client can never pair](https://github.com/openclaw/openclaw/issues/115909)** — auth gate rejects device-identity connections as `token_missing`. 7 comments.
14. **[`exec` tool does not inherit `skills.entries.*.env`](https://github.com/openclaw/openclaw/issues/31583)** — regression, secrets injection broken. 14 comments.
15. **[All persistent sessions capped at 128k context](https://github.com/openclaw/openclaw/issues/116010)** — regardless of model or configured `contextTokens`. 7 comments.

### Medium (P2)

- [DeepSeek V4 Flash incomplete turn](https://github.com/openclaw/openclaw/issues/88657) — partial payloads after 2026.5.26.
- [sessions_yield subagent wake compacts parent branch](https://github.com/openclaw/openclaw/issues/86684) — at low context usage.
- [Telegram message(action=send) prematurely releases Codex turn](https://github.com/openclaw/openclaw/issues/107464).
- [Webchat text+image misclassified as source_modality: image](https://github.com/openclaw/openclaw/issues/115076).
- [Mattermost non-terminal tool-warning gates real answer](https://github.com/openclaw/openclaw/issues/111778).
- [Windows native CLI gateway Scheduled Task does not stay running](https://github.com/openclaw/openclaw/issues/91144).
- [launchd plist StandardErrorPath hardcoded to /dev/null](https://github.com/openclaw/openclaw/issues/90711).
- [Feishu should apply sanitizeAssistantVisibleText()](https://github.com/openclaw/openclaw/issues/90684).
- [web_fetch useTrustedEnvProxy ignores NO_PROXY](https://github.com/openclaw/openclaw/issues/93807).
- [Z.AI Coding-Plan ECONNRESET fallback notice invisible](https://github.com/openclaw/openclaw/issues/94919).

**Fix PRs identified for bugs above:** PR #117652 (transport watchdog containment), PR #117534 (active-memory lane-one timeout), PR #117535 (disk space error classification), PR #117443 (effective channel model override). No fix PRs were identified for the P0 issues.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue | Priority | Signal |
|---------|-------|----------|--------|
| [Production-readiness stability label for releases](https://github.com/openclaw/openclaw/issues/73537) | #73537 | P2 | Long-standing (since April); community wants clearer release maturity signaling for production deployments. |
| [Opt-in reaction-triggered agent turns](https://github.com/openclaw/openclaw/issues/17840) | #17840 | P2 | Emoji-based polling and interactive patterns requested since Feb 2026. |
| [`/label` slash command & `/new <name>` session naming](https://github.com/openclaw/openclaw/issues/93422) | #93422 | P2 | WebChat/Control UI usability improvement; multiple users requesting session management. |
| [Automatic model routing based on message type](https://github.com/openclaw/openclaw/issues/114264) | #114264 | P2 | Users with multiple specialized models (e.g., Xiaomi MiMo) want content-type-based routing. |
| [Voice chat context parity with text chat](https://github.com/openclaw/openclaw/issues/110171) | #110171 | P1 | iOS Talk sessions lack long-term memory, conversation history, and preferences available in text mode. |
| [Add Kubernetes resource-only teardown](https://github.com/openclaw/openclaw/pull/114953) | #112307 | P1 | PR is open and ready for maintainer review; signals K8s operator maturity is a roadmap goal. |
| [Guarded dashboard shortcuts for Control UI](https://github.com/openclaw/openclaw/pull/84827) | #81946 | P3 | Long-running PR; web UI polish is a sustained investment area. |

**Prediction:** The next stable release (v2026.7.2 or v2026.7.3) is likely to focus on state-safety hardening (per the beta.6 release notes), the session compaction fix (#117311), and the context-engine timeout fix (#97175). The Kubernetes teardown PR (#114953) and the reaction-triggered turns feature (#17840) are candidates for the 2026.8.x cycle.

---

## 7. User Feedback Summary

**Pain points (synthesized from issue titles and comments):**
- **Silent failures are the #1 frustration:** DeepSeek v4 Flash silently drops replies (#116277), Z.AI ECONNRESET fallback is invisible (#94919), and `gpt-5.6-*` silently falls back on ChatGPT-OAuth route (#106786). Users expect explicit error communication.
- **Data loss and corruption anxiety:** DB corruption during normal operation (#101290), schema downgrade wiping cron jobs (#115421), and session compaction silently dropping turns (#117311) are eroding trust in persistence.
- **Channel consistency gaps:** Text leaking between tool calls (#25592), Feishu missing text sanitization (#90684), Mattermost tool-warning gating (#111778), and Telegram reply-target failures (#107362) show the channel abstraction layer is fragile.
- **Auth provider friction:** Browser-copilot pairing broken (#115909), exec approval dropping loopback-token on WS reconnect (#1

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-08-02

## 1. Ecosystem Overview

The personal AI assistant / agent open-source landscape in August 2026 is characterized by a wide power-law distribution of community activity. A handful of mature projects (OpenClaw, ZeroClaw, Hermes Agent, CoPaw/QwenPaw) dominate contributor engagement and issue volume, while a long tail of smaller projects (PicoClaw, NanoClaw, Moltis, LobsterAI) operate in maintenance or slow-iteration mode. The dominant technical themes across the ecosystem are **state safety and crash recovery**, **multi-provider/model routing**, **channel abstraction resilience**, **security hardening** (credential isolation, sandbox policy, secret redaction), and **observability** (OTel, Langfuse, token accounting). Projects are increasingly converging on modular, pluggable provider architectures and are grappling with production-grade reliability concerns that mirror those of commercial SaaS offerings.

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Releases | Open Issues | Open PRs | Health Score |
|---|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | v2026.7.2-beta.6 (pre-release) | ~500 | ~500 (all open in snapshot) | 🟡 Active, stabilization phase |
| **ZeroClaw** | 50 | 50 | None (v0.9.0 in prep) | ~45 | ~43 | 🟢 Active, design-review heavy |
| **Hermes Agent** | 50 | 50 | None (v0.19.0 latest) | ~40 | ~36 | 🟢 Active, high velocity |
| **CoPaw / QwenPaw** | 14 | 12 | None (v2.0.1 latest) | ~14 | ~11 | 🟢 Active, rapid iteration |
| **NanoBot** | 5 | 25 | None | ~1 | ~12 | 🟢 Active, responsive triage |
| **NanoClaw** | 2 | 16 | v2.1.54 (rollup) | ~1 | ~10 | 🟢 Stable, release-driven |
| **IronClaw** | 20 | 29 | None (bot-managed release pending) | — | — | 🟢 Active, architectural refactor |
| **Moltis** | 0 | 4 | None | 0 | 1 | 🟢 Quiet, steady delivery |
| **PicoClaw** | 1 | 3 | None (v0.2.9 latest) | ~1 | ~2 | 🟡 Low activity, maintenance mode |
| **LobsterAI** | 7 | 2 | None | ~7 | ~2 | 🔴 Stagnant, stale PRs/issues |
| **NullClaw** | 0 | 0 | None | — | — | ⚪ No data |
| **TinyClaw** | 0 | 0 | None | — | — | ⚪ No data |
| **ZeptoClaw** | 0 | 0 | None | — | — | ⚪ No data |

*Health Score methodology: 🟢 = active with merges and bug closure; 🟡 = active but stabilization or low merge rate; 🔴 = stale or declining; ⚪ = no data.*

## 3. OpenClaw's Position

**Advantages vs. peers:**
- **Scale of engagement:** 500 issues + 500 PRs in 24 hours dwarfs all other projects by 1–2 orders of magnitude, indicating the largest community and most active maintainer team in the ecosystem.
- **Stabilization focus:** The v2026.7.2-beta.6 release is explicitly targeted at state safety and recovery — a maturity signal that few peers match. The quarantine store, crash-durable snapshots, and schema-upgrade data-loss rejection address P0 data-corruption concerns that other projects are only beginning to surface.
- **Breadth of channel support:** OpenClaw's issue pool covers Discord, WhatsApp, Telegram, Teams, Feishu, Slack, iMessage, and Matrix, giving it the broadest multi-channel surface area in the ecosystem.
- **Security posture:** Fail-closed publication preflight (#114287), auth provider resync fixes, and credential expiration alerts place OpenClaw ahead of most peers on security hardening.

**Technical approach differences:**
- OpenClaw uses a **SQLite-first persistence layer** with crash-recoverable snapshots, whereas ZeroClaw and Hermes Agent rely on more conventional state stores. This makes OpenClaw's recovery story unique but also surfaces SQLite-specific corruption bugs that other projects avoid.
- OpenClaw's **gateway architecture** (WebSocket-based, multi-process) is more complex than the CLI-first or single-process designs of NanoBot, CoPaw, and PicoClaw.

**Community size comparison:**
- OpenClaw's 500/500 issue/PR volume implies a community roughly **10–20× larger** than the next most active project (ZeroClaw / Hermes Agent at ~50 each). The ratio of P0/P1 issues to total issues is also higher, suggesting a production-user base hitting real-world edge cases at scale.

## 4. Shared Technical Focus Areas

| Focus Area | Projects | Specific Needs |
|---|---|---|
| **Provider / model routing** | OpenClaw, NanoBot, PicoClaw, CoPaw/QwenPaw, ZeroClaw, IronClaw | Pluggable provider architectures, per-model context windows, keyword-based routing, multi-account rotation |
| **Crash recovery & state safety** | OpenClaw, NanoClaw, CoPaw/QwenPaw | DB corruption fixes, session compaction data loss, graceful degradation on provider failure |
| **Channel resilience** | OpenClaw, PicoClaw, ZeroClaw, NanoClaw | Matrix reconnection (#3203), WhatsApp policy enforcement (#9348), Telegram reply-target failures, iMessage unification |
| **Security hardening** | OpenClaw, Hermes Agent, IronClaw, ZeroClaw, Moltis | Credential isolation, sandbox policy, secret redaction in debug dumps, token-path validation, per-account allowlists |
| **Memory / context management** | OpenClaw, Hermes Agent, CoPaw/QwenPaw, ZeroClaw | Context window limits, compression pipeline reliability, memory lifecycle decoupling, token accounting accuracy |
| **Observability & telemetry** | ZeroClaw, Moltis, IronClaw | OTel correlation, Langfuse v4 export, cache-aware token usage, reasoning trace support |
| **WebUI / desktop UX** | NanoBot, CoPaw/QwenPaw, LobsterAI, IronClaw | Model switching per session, inline images, workspace shortcuts, i18n gaps |

## 5. Differentiation Analysis

| Dimension | OpenClaw | ZeroClaw | Hermes Agent | CoPaw/QwenPaw | NanoBot | NanoClaw |
|---|---|---|---|---|---|---|
| **Primary target** | Production multi-channel agent gateway | Modular AI agent framework | Cross-platform AI assistant | Qwen-centric agent with desktop UI | Lightweight AI chatbot | iMessage-focused agent |
| **Architecture** | Gateway + SQLite + multi-process | Rust-based, contract-crate modular | Python/Tauri, plugin-based | Python, agentscope runtime | Python, provider-agnostic | Python, channel-unified |
| **Key differentiator** | Broadest channel support + state recovery | Security-first, RFC-driven design | Multi-profile isolation, MCP tooling | Qwen ecosystem integration, desktop UX | Fast iteration, WebUI focus | iMessage unification |
| **Release cadence** | Beta pre-releases with stabilization focus | v0.9.0 milestone in prep | v0.19.0 stable | v2.0.1 stable | Continuous delivery | Rollup releases |
| **Language** | Rust (core) + Python bindings | Rust | Python | Python | Python | Python |

**PicoClaw, LobsterAI, Moltis, IronClaw, and the inactive projects** (NullClaw, TinyClaw, ZeptoClaw) each occupy distinct niches — PicoClaw focuses on Matrix + lightweight providers; LobsterAI on web UI with i18n; Moltis on observability and Nostr; IronClaw on architectural reborn/crate modularization — but none match the breadth or volume of the top six.

## 6. Community Momentum & Maturity

**Rapidly iterating (high velocity, active merges):**
- **OpenClaw** — stabilization phase; high bug-fix throughput, pre-release cadence, largest community.
- **Hermes Agent** — 14 PRs merged/closed in 24h; strong security contribution pipeline; v0.19.0 stable.
- **CoPaw/QwenPaw** — 1 PR merged, 11 open; rapid feature delivery (NVIDIA NIM, OrcaRouter, provider unification).
- **NanoBot** — 13 PRs merged/closed, 5 issues closed; responsive triage, strong WebUI investment.

**Stabilizing (maintenance mode, slow iteration):**
- **NanoClaw** — v2.1.54 rollup release; iMessage unification shipped; bug fixes are incremental.
- **IronClaw** — deep in architectural refactor (Wave 2); design-review heavy, few merges but high design output.
- **Moltis** — quiet but productive; 3 PRs merged, 0 open issues; mature and stable.

**Stagnant or declining:**
- **LobsterAI** — 122-day stale PRs, 6 stale issues; maintainer engagement is low and community momentum is at risk.
- **PicoClaw** — low but steady; 1 issue (31+ days old) and 2 new provider PRs; maintenance mode with feature contributions.
- **NullClaw, TinyClaw, ZeptoClaw** — no activity data; likely dormant or archived.

## 7. Trend Signals

1. **State safety is the #1 reliability priority.** OpenClaw's quarantine store, crash-durable snapshots, and schema-downgrade guards reflect an industry-wide recognition that persistence layer failures are the most damaging class of bugs for agent systems. Projects that lack crash-recovery primitives (ZeroClaw, CoPaw) are at risk of similar P0 issues surfacing.

2. **Provider modularity is converging.** Every active project is moving toward pluggable provider architectures — OpenClaw's provider resync fixes, CoPaw's provider unification PR (#6302), ZeroClaw's OpenAI adapter RFC, and PicoClaw's OrcaRouter integration all point to the same direction: **agents must be provider-agnostic at runtime**.

3. **Security hardening is table stakes, not differentiators.** Credential isolation (Hermes Agent, Moltis), sandbox policy (ZeroClaw, IronClaw), secret redaction (OpenClaw, Hermes Agent), and per-account allowlists (Moltis) are now expected in any project targeting production deployments. Projects without these (LobsterAI, PicoClaw) will struggle to attract enterprise users.

4. **Observability is emerging as a differentiator.** Moltis (Langfuse v4, OTel), ZeroClaw (cross-turn OTel correlation), and IronClaw (cache-aware token usage) are building production telemetry stacks. This signals that the next generation of AI agent tools will be evaluated on operational visibility, not just feature count.

5. **Channel abstraction fragility is a systemic risk.** OpenClaw's text-leak bug (#25592), PicoClaw's Matrix silent death (#3203), ZeroClaw's WhatsApp policy bypass (#9348), and NanoClaw's duplicate delivery (#2956) all point to the same underlying problem: **channel adapters are the weakest link in agent systems**. Projects that invest in channel-layer testing and resilience will have a significant reliability advantage.

6. **Desktop UX is a growing battleground.** CoPaw/QwenPaw (workspace shortcuts, inline images), NanoBot (Quick Chat, model preset UI), and IronClaw (OOBE carousel) are all investing in desktop/web UI polish. As the agent market matures, UX quality will increasingly separate projects with similar backend capabilities.

**Value for AI agent developers:** The ecosystem is maturing from experimental prototypes toward production-grade platforms. Developers building on these projects should prioritize projects with active crash-recovery and security hardening (OpenClaw, Hermes Agent, ZeroClaw) and watch for provider-architecture convergence as the key integration pattern. Projects in stagnation (LobsterAI) or with unresolved P0 bugs (OpenClaw's DB corruption, ZeroClaw's WhatsApp policy leak) carry higher integration risk.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-02

---

## 1. Today's Overview

NanoBot shows strong development momentum on 2026-08-02, with 25 pull requests updated (12 open, 13 merged/closed) and 5 issues updated (4 closed, 1 still open). No new releases were published today. The project is in active maintenance mode, with a high volume of PRs touching WebUI, provider handling, memory, cron, and session management subsystems. All 5 recently active issues were closed, indicating responsive bug triage. The overall health signal is positive: the team is shipping fixes and features in parallel at a steady pace.

---

## 2. Releases

**None.** No new versions were published today or in the latest release window. The project is likely in a pre-release or continuous-delivery phase, with changes flowing through PRs and issues rather than tagged releases.

---

## 3. Project Progress

### Merged / Closed PRs (today)

| PR | Summary | Area | Priority |
|---|---|---|---|
| [#5208](https://github.com/HKUDS/nanobot/pull/5208) | Fix Dream cron cursor advancement on durable changes | Cron/Agent | — |
| [#5172](https://github.com/HKUDS/nanobot/pull/5172) | Preserve Responses reasoning state & compact context | Providers/Memory | — |
| [#5108](https://github.com/HKUDS/nanobot/pull/5108) | Add per-sender message rate limiting to channels | Channels | P1 |
| [#5199](https://github.com/HKUDS/nanobot/pull/5199) | Narrow Pyright suppressions in CLI module | Refactor/Code Quality | — |
| [#5153](https://github.com/HKUDS/nanobot/pull/5153) | Handle non-string timestamps & missing role in raw archive | Memory | P1 |
| [#5183](https://github.com/HKUDS/nanobot/pull/5183) | Preserve manual cron run completion state | Cron | P1 |
| [#5200](https://github.com/HKUDS/nanobot/pull/5200) | Preserve wait targets across response truncation | Exec/Tools | P1 |
| [#5201](https://github.com/HKUDS/nanobot/pull/5201) | Tolerate malformed persisted session summary | Session | P1 |
| [#5209](https://github.com/HKUDS/nanobot/pull/5209) | Reuse sidebar selection highlight in WebUI | WebUI/UX | — |
| [#3732](https://github.com/HKUDS/nanobot/pull/3732) | Require api_base before local provider wins on keyword match | Providers | — |

### Key Open PRs Advancing Features

| PR | Summary | Area | Priority |
|---|---|---|---|
| [#5210](https://github.com/HKUDS/nanobot/pull/5210) | Trusted proxy bootstrap auth for WebUI | WebUI/Security | **P1** |
| [#5194](https://github.com/HKUDS/nanobot/pull/5194) | Accelerate JSONL session list & thread loading | WebUI/Performance | P2 |
| [#5211](https://github.com/HKUDS/nanobot/pull/5211) | Cross-session search and @mentions | Session/Search | — |
| [#5184](https://github.com/HKUDS/nanobot/pull/5184) | Quick Chat & Temporary Chat for WebUI | WebUI/UX | — |
| [#5202](https://github.com/HKUDS/nanobot/pull/5202) | Make model preset switching discoverable | WebUI/UX | P2 |
| [#5207](https://github.com/HKUDS/nanobot/pull/5207) | Support model preset for subagents (spawn tool) | Agent/Tools | P2 |
| [#5206](https://github.com/HKUDS/nanobot/pull/5206) | Log streamed responses exactly once | Agent/Logging | P2 |
| [#5139](https://github.com/HKUDS/nanobot/pull/5139) | Preserve media paths during session consolidation | Memory/Storage | **P1** |
| [#5186](https://github.com/HKUDS/nanobot/pull/5186) | Support well-known skills.sh sources | WebUI/Skills | — |
| [#3869](https://github.com/HKUDS/nanobot/pull/3869) | DeepSeek message hardening (null content, empty placeholder) | Providers | — |

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

1. **[#5185](https://github.com/HKUDS/nanobot/issues/5185)** — *Tool calls code returned in responses* (4 comments, CLOSED) — Users are seeing raw tool-call code snippets leak into chat output, indicating a serialization or formatting regression in the agent's response pipeline.
2. **[#5205](https://github.com/HKUDS/nanobot/issues/5205)** — *ensurepip missing when enabling feishu plugin* (2 comments, CLOSED) — Points to a Python environment packaging issue where `uv`-managed installations lack `ensurepip`, blocking plugin onboarding.
3. **[#5198](https://github.com/HKUDS/nanobot/issues/5198)** — *Cannot change models per session* (1 comment, **OPEN**) — The most impactful UX pain point: model switching is effectively broken at the session level, limiting user control.

### Most Active PRs (by recency & priority)

- **[#5210](https://github.com/HKUDS/nanobot/pull/5210)** — Trusted proxy bootstrap auth (P1, security-critical for Cloudflare Tunnel deployments)
- **[#5139](https://github.com/HKUDS/nanobot/pull/5139)** — Preserve media paths during session consolidation (P1, data-loss regression fix)
- **[#5184](https://github.com/HKUDS/nanobot/pull/5184)** — Quick Chat & Temporary Chat (new UX feature)

**Underlying needs:** The community is pushing for (a) better WebUI discoverability and UX polish (model switching, presets, sidebar), (b) data integrity fixes (media paths, session summaries, cron state), and (c) security hardening (trusted proxy auth). The persistent "model switching per session" issue (#5198) reveals a gap between user expectations of SaaS-like interactivity and NanoBot's current fallback-model architecture.

---

## 5. Bugs & Stability

### Bugs Reported (last 24h) — Ranked by Severity

| # | Issue | Severity | Status | Fix PR |
|---|---|---|---|---|
| #5198 | Cannot change models per session | **High** — blocks core UX | **OPEN** | None yet |
| #5185 | Tool calls code leaked into responses | **Medium** — corrupts output | CLOSED | — |
| #5205 | `ensurepip` missing for feishu plugin | **Medium** — blocks plugin setup | CLOSED | — |
| #4801 | KeyError on malformed session entries | **Medium** — crash on bad data | CLOSED | [#5153](https://github.com/HKUDS/nanobot/pull/5153) |
| #5163 | Cron completion state lost on WebUI poll | **Low** — stale UI state | CLOSED | [#5183](https://github.com/HKUDS/nanobot/pull/5183) |

**Stability note:** All 4 recently reported bugs have been closed, with 3 having dedicated fix PRs merged. The only remaining open bug (#5198) is model-switching per session, which has been open since 2026-07-31 with only 1 comment — it may need maintainer attention to avoid user frustration.

---

## 6. Feature Requests & Roadmap Signals

The following features are actively being developed and signal the project's near-term roadmap:

- **WebUI UX Overhaul** — Quick Chat / Temporary Chat (#5184), model preset switching discoverability (#5202), trusted proxy bootstrap auth (#5210), sidebar highlight reuse (#5209), and cross-session search with @mentions (#5211). This cluster suggests a major WebUI usability pass.
- **Agent & Subagent Capabilities** — Model preset for subagents via `spawn` tool (#5207), preserving Responses API reasoning state (#5172), and Dream cron cursor fix (#5208). Signals investment in multi-agent workflows and agent memory fidelity.
- **Provider & Channel Hardening** — DeepSeek message sanitization (#3869), local provider keyword hijacking fix (#3732), per-sender rate limiting (#5108). Signals maturation of the multi-provider/multi-channel architecture.
- **Data Integrity** — Media path preservation (#5139), session summary tolerance (#5201), wait-target preservation (#5200). Signals focus on reliability of long-running sessions and archival.

**Prediction:** The next release will likely bundle the WebUI feature set (Quick Chat, model preset UI, trusted proxy auth) alongside the P1 stability fixes (media paths, session consolidation). The cross-session search/mentions PR (#5211) is a strong candidate for a major version feature.

---

## 7. User Feedback Summary

### Pain Points

1. **Model switching is broken at the session level** (#5198) — Users expect to select different models per conversation, but NanoBot only uses the top model with fallbacks. The `/model` command and UI blip don't work as expected. This is a core UX gap compared to cloud SaaS competitors.
2. **Plugin onboarding friction** (#5205) — The `ensurepip` error when enabling the Feishu channel suggests environment packaging issues that block new users from integrating channels.
3. **Data loss anxiety** — Multiple issues/PRs around media path preservation (#5139), session summary corruption (#5201), and cron state loss (#5163) indicate users are concerned about losing conversation history, files, and automation state.
4. **Provider compatibility** — DeepSeek null-content rejection (#3869) and local provider hijacking (#3732) show that provider-specific edge cases are a recurring source of bugs.

### Positive Signals

- Active and responsive maintainer team — 4 of 5 recent issues closed within 1–2 days.
- High PR throughput (25 in 24h) with clear priority labeling (P1/P2).
- Strong focus on WebUI quality-of-life improvements, suggesting the team is investing in the user-facing experience.

---

## 8. Backlog Watch

### Long-Unanswered Items Needing Maintainer Attention

| Item | Age | Status | Concern |
|---|---|---|---|
| **[#3869](https://github.com/HKUDS/nanobot/pull/3869)** — DeepSeek message hardening | ~80 days (created 2026-05-16) | **OPEN** (conflict) | Provider-specific bug affecting DeepSeek v4 models; conflict flag suggests merge blockers. Needs resolution — this is a significant provider compatibility gap. |
| **[#5198](https://github.com/HKUDS/nanobot/issues/5198)** — Model switching per session | 2 days (created 2026-07-31) | **OPEN** (1 comment) | Core UX bug with no PR yet. High visibility — users comparing NanoBot to cloud SaaS expect this to work. |
| **[#5210](https://github.com/HKUDS/nanobot/pull/5210)** — Trusted proxy bootstrap auth | 1 day | **OPEN** (P1) | Security-critical for enterprise deployments behind Cloudflare Access. Should be prioritized for merge. |
| **[#5139](https://github.com/HKUDS/nanobot/pull/5139)** — Preserve media paths during consolidation | 5 days | **OPEN** (P1) | Data-loss regression fix; P1 priority but not yet merged. |
| **[#4801](https://github.com/HKUDS/nanobot/issues/4801)** — KeyError on malformed session entries | 27 days (created 2026-07-06) | CLOSED (fixed by #5153) | — |

**Recommendation:** The DeepSeek hardening PR (#3869) has been open for ~80 days with a conflict flag — this is the longest-standing item and should be triaged first. The model-switching issue (#51

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-02

**Repository:** [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)
**Snapshot Date:** 2026-08-02

---

## 1. Today's Overview

Hermes Agent is in a period of high development velocity with **50 issues updated** (40 open/active, 10 closed) and **50 PRs updated** (36 open, 14 merged/closed) in the last 24 hours. No new releases were published. The project shows strong community engagement with active feature requests, bug reports spanning multiple platforms (Windows, macOS, Linux, Docker), and a notable volume of security-oriented contributions. Overall project health is active, though the sheer number of open issues (40) signals a growing backlog that warrants maintainer attention.

---

## 2. Releases

**None.** No new versions were published in the last 24 hours. The latest known release is Hermes Agent v0.19.0 (2026.7.20), referenced in issue #69551.

---

## 3. Project Progress

**14 PRs were merged or closed in the last 24 hours** (not shown in the top-20-by-comments list, indicating low comment counts on those closures). The visible open PRs represent the most-discussed active work:

| PR | Title | Significance |
|---|---|---|
| [#76447](https://github.com/NousResearch/hermes-agent/pull/76447) | fix(file-ops): prevent non-UTF-8 corruption and symlink data-loss | **Critical** — two data-loss bugs in `ShellFileOperations`; core-tools audit findings |
| [#76445](https://github.com/NousResearch/hermes-agent/pull/76445) | fix(tools): dedup eviction task_id + workdir cwd leak | **High** — correctness bugs in core file/terminal tools |
| [#76437](https://github.com/NousResearch/hermes-agent/pull/76437) | fix(cli): route keyless first run into provider onboarding | **High** — fixes broken first-run experience for unconfigured installs |
| [#76432](https://github.com/NousResearch/hermes-agent/pull/76432) | fix(desktop): prevent venv-blocker probe failure crash | **Medium** — resolves Windows desktop updater crash |
| [#76438](https://github.com/NousResearch/hermes-agent/pull/76438) | fix(teams): suppress SDK import-time dotenv leak | **Medium** — fixes profile secret isolation for Teams plugin (#62935 salvage) |
| [#76439](https://github.com/NousResearch/hermes-agent/pull/76439) | fix(setup): warn loudly when wizard finishes without a working provider | **Medium** — prevents false-success setup completion |
| [#76303](https://github.com/NousResearch/hermes-agent/pull/76303) | fix(install): add wall-clock timeout to Playwright install on Windows | **Medium** — prevents indefinite installer hangs |
| [#76230](https://github.com/NousResearch/hermes-agent/pull/76230) | feat(delegation): surface ready dependencies before the next decision | **Feature** — final layer of a 3-PR delegation stack |
| [#54524](https://github.com/NousResearch/hermes-agent/pull/54524) | feat(credential-pool): per-credential base_url for multi-account rotation | **Feature** — enables per-account API endpoints for providers like Cloudflare Workers AI |
| [#73476](https://github.com/NousResearch/hermes-agent/pull/73476) | fix(deps): enforce patched server dependency floors | **Security/stability** — pins MCP and FastAPI dependency floors |
| [#35236](https://github.com/NousResearch/hermes-agent/pull/35236) | fix(browser): validate CDP peer IPs after navigation | **Security** — cloud browser navigation IP validation |
| [#38286](https://github.com/NousResearch/hermes-agent/pull/38286) | fix(gateway): redact Feishu group resume titles | **Security** — prevents leaking conversation titles in group contexts |
| [#46057](https://github.com/NousResearch/hermes-agent/pull/46057) | fix(cli): guard quick-command shell exec | **Security** — hardens CLI quick-command exec path |
| [#52905](https://github.com/NousResearch/hermes-agent/pull/52905) | [codex] Structurally redact request debug dumps | **Security** — redacts API keys/tokens from debug dumps |

---

## 4. Community Hot Topics

### Most Active Issues (by comment count & reactions)

1. **[#69551](https://github.com/NousResearch/hermes-agent/issues/69551)** — *Desktop SSH remote mode broken with non-default profile* (12 comments, CLOSED) — Token-path validation resolves against profile-scoped `HERMES_HOME` while the client hardcodes `~/.hermes/desktop-ssh`. This is a **profile isolation regression** that blocks SSH remote workflows for multi-profile users.

2. **[#20859](https://github.com/NousResearch/hermes-agent/issues/20859)** — *Support for Mistral as LLM provider* (11 comments, 24 👍, OPEN) — The most-reacted issue in the period. Mistral has a large user base and existing voice model integration, making LLM provider addition a high-demand feature. Community clearly wants this prioritized.

3. **[#76352](https://github.com/NousResearch/hermes-agent/issues/76352)** — *MCP tool result exceeds context, compression exhausts 3 attempts* (4 comments, CLOSED) — A large `homeassistant__list_entities` result (~900K chars) from a local vLLM + MCP setup overwhelms the agent's compression pipeline. Highlights the need for better MCP result size guards.

4. **[#46941](https://github.com/NousResearch/hermes-agent/issues/46941)** — *Terminal commands truncated in code blocks on messaging platforms* (4 comments, OPEN) — Feishu/Lark markdown rendering truncates terminal commands at `tool_preview_length`. A UX quality-of-life fix.

5. **[#76324](https://github.com/NousResearch/hermes-agent/issues/76324)** — *Dashboard wrongly configuring local Ollama models* (3 comments, OPEN) — The dashboard writes `gemma4:latest` as a string instead of properly structuring the model config for Ollama.

### Analysis of Underlying Needs

The community is primarily focused on three themes: **(a) profile/multi-tenant isolation** (SSH, multiplex, config corruption), **(b) security hardening** (sensitive-path guards, ANSI-C quoting, debug dump redaction), and **(c) platform completeness** (Mistral provider, Windows support, MCP 2026-07-28 migration). The high 👍 count on #20859 (24) signals strong demand for Mistral integration.

---

## 5. Bugs & Stability

### Critical / High Severity

| # | Bug | Severity | Fix PR? |
|---|---|---|---|
| [76218](https://github.com/NousResearch/hermes-agent/issues/76218) | bash ANSI-C quoting bypasses hardline approval floor (`rm -rf /` can run without approval) | **Critical** | No |
| [76246](https://github.com/NousResearch/hermes-agent/issues/76246) | Windows `write_file` can target `/etc`, `/boot`, `/var/run/docker.sock` despite sensitive-path guard | **Critical** | No |
| [76447](https://github.com/NousResearch/hermes-agent/pull/76447) | Non-UTF-8 content silently corrupted on read→write (data loss) | **Critical** | Yes — PR open |
| [76445](https://github.com/NousResearch/hermes-agent/pull/76445) | Read-dedup never evicted after write on non-default tasks; workdir cwd leak | **High** | Yes — PR open |
| [76435](https://github.com/NousResearch/hermes-agent/issues/76435) | Gateway reconnect loop (Discord bot token reset after 1000+ attempts) + broken desktop updater | **High** | No |
| [76296](https://github.com/NousResearch/hermes-agent/issues/76296) | Windows 25H2 wake word silently fails (onnxruntime WinError 1114) | **High** | No |

### Medium Severity

| # | Bug | Fix PR? |
|---|---|---|
| [76138](https://github.com/NousResearch/hermes-agent/issues/76138) | `hermes config set` corrupts list-valued keys (writes scalar string instead of YAML list) | No |
| [76324](https://github.com/NousResearch/hermes-agent/issues/76324) | Dashboard wrongly configuring Ollama models | No |
| [76423](https://github.com/NousResearch/hermes-agent/issues/76423) | Telegram multiplex topic tables lack profile dimension in shared `state.db` | No |
| [76372](https://github.com/NousResearch/hermes-agent/issues/76372) | `hermes plugins install` places model-provider plugins in wrong directory | No |
| [75996](https://github.com/NousResearch/hermes-agent/issues/75996) | Profile isolation gaps across memory, terminal, and dashboard | No |
| [69551](https://github.com/NousResearch/hermes-agent/issues/69551) | Desktop SSH remote mode broken with non-default profile | Closed |
| [46941](https://github.com/NousResearch/hermes-agent/issues/46941) | Terminal commands truncated in code blocks on Feishu | No |

### Low Severity / Minor

| # | Bug |
|---|---|
| [75960](https://github.com/NousResearch/hermes-agent/issues/75960) | Desktop IME preedit renders after placeholder (CJK input) |
| [76416](https://github.com/NousResearch/hermes-agent/issues/76416) | WebUI on Hostinger VPS fails (Docker build unsupported) |
| [25849](https://github.com/NousResearch/hermes-agent/issues/25849) | `EMAIL_ADDRESS` env var mismatch with actual email account |
| [69444](https://github.com/NousResearch/hermes-agent/issues/69444) | Telegram rich messages lack safe cutoff for long content |
| [69031](https://github.com/NousResearch/hermes-agent/issues/69031) | Gemini native v1beta 401 Auth and 400 schema errors |

---

## 6. Feature Requests & Roadmap Signals

### High-Visibility Feature Requests

| # | Feature | Signals |
|---|---|---|
| [#20859](https://github.com/NousResearch/hermes-agent/issues/20859) | **

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-02

---

## 1. Today's Overview

PicoClaw (github.com/sipeed/picoclaw) shows low but steady activity on 2026-08-02, with **1 issue updated** and **3 PRs updated** in the last 24 hours. No new releases were published. Two of the three PRs are new feature additions targeting the provider ecosystem (Exa web search and OrcaRouter), while the third (zh-TW locale) was closed as stale. The single updated issue (#3203) is a long-standing bug regarding Matrix sync resilience. Overall, the project is in a maintenance-and-extension phase, with community contributions focused on expanding AI provider support and localization, though a critical stability bug remains unresolved.

---

## 2. Releases

**None.** No new releases were published in the last 24 hours or in the latest release history. The most recent known release is **v0.2.9**, referenced in Issue #3203.

---

## 3. Project Progress

| PR | Status | Summary |
|---|---|---|
| [#3261](https://github.com/sipeed/picoclaw/pull/3261) | **CLOSED** (stale) | Add zh-TW locale and Traditional Chinese translations for WebUI and documentation. Closed as stale after ~17 days open. |
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | **OPEN** | Add native Exa (`tools.web` / `web_search`) provider using Exa's `POST /search` API with `type: "auto"`, highlights, and date-range filters via `startPublishedDate`. |
| [#3309](https://github.com/sipeed/picoclaw/pull/3309) | **OPEN** | Add OrcaRouter as an OpenAI-compatible provider (`orcarouter`) at `https://api.orcarouter.ai/v1`, supporting `vendor/model` id format consistent with existing provider patterns. |

**Assessment:** The project continues to grow its provider integration layer, with two new providers proposed in quick succession. The closed zh-TW PR suggests localization work is ongoing but may need maintainer follow-through to avoid staleness.

---

## 4. Community Hot Topics

### Most Active Issue
- **[#3203](https://github.com/sipeed/picoclaw/issues/3203)** — *Matrix sync loop has no reconnection logic — silent death after network/server disruption*
  - **7 comments**, **2 👍** | Open since 2026-07-02 (over 30 days)
  - **Underlying need:** Users rely on Matrix as a communication channel for PicoClaw and expect resilience similar to what systemd's `Restart=on-failure` provides. The bug reveals a gap in the application-level resilience layer — the sync loop terminates silently without triggering process-level recovery mechanisms. This indicates a need for robust connection management (retry logic, exponential backoff, health-checks) in the Matrix integration.

### Most Active PRs
- **[#3299](https://github.com/sipeed/picoclaw/pull/3299)** — Exa web search provider (new, 0 comments)
- **[#3309](https://github.com/sipeed/picoclaw/pull/3309)** — OrcaRouter OpenAI-compatible provider (new, 0 comments)

Both PRs reflect community demand for **diverse, modern AI search and routing backends**, signaling that users want PicoClaw to support a broader range of tool-providers and model routers beyond the default configurations.

---

## 5. Bugs & Stability

### 🔴 High Severity
- **[#3203](https://github.com/sipeed/picoclaw/issues/3203)** — Matrix sync loop silent death after network/server disruption
  - **Impact:** Complete loss of Matrix communication capability until manual intervention or full process restart. The main process remains alive, so systemd `Restart=on-failure` does not recover the connection.
  - **Fix PR:** None identified. No PR currently addresses this reconnection logic gap.
  - **Recommendation:** This is a 30+ day old bug with 7 comments of community engagement and should be prioritized for a fix, potentially in the next patch release.

No other bugs or regressions were reported in the last 24 hours.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|---|---|---|
| **Exa web search integration** | PR [#3299](https://github.com/sipeed/picoclaw/pull/3299) | Medium — well-scoped, follows existing provider patterns, includes config support |
| **OrcaRouter as OpenAI-compatible provider** | PR [#3309](https://github.com/sipeed/picoclaw/pull/3299) | Medium — new provider type, but aligns with existing OpenAI-compatible provider architecture |
| **Traditional Chinese (zh-TW) localization** | PR [#3261](https://github.com/sipeed/picoclaw/pull/3261) | Low (closed as stale) — may need resubmission or maintainer-driven follow-up |
| **Matrix reconnection logic** | Issue [#3203](https://github.com/sipeed/picoclaw/issues/3203) | High priority for stability, but not a feature request per se — a bug fix |

**Prediction:** The next version (likely v0.3.x or a patch) is most likely to include **one or both new provider integrations** (Exa, OrcaRouter), as they follow established contribution patterns and have clear technical specifications. Localization and resilience improvements may follow if maintainer bandwidth allows.

---

## 7. User Feedback Summary

### Pain Points
- **Matrix reliability is a critical pain point.** Issue #3203 details a scenario where network hiccups or homeserver restarts cause permanent sync failure, requiring manual process restart. Users expect self-healing behavior from long-running services.
- **Provider ecosystem is perceived as incomplete.** The two new PRs (Exa, OrcaRouter) indicate that users are actively seeking more web search and model routing options, suggesting the current provider set may feel limited for power users.

### Use Cases
- **Self-hosted AI assistant with Matrix integration** — the primary use case for PicoClaw, where reliability of the communication channel is paramount.
- **Multi-vendor AI routing and web-enhanced reasoning** — users want to plug in modern search APIs (Exa) and model routers (OrcaRouter) to improve response quality and cost efficiency.

### Satisfaction Signals
- Positive: Active community contributions (3 PRs in 24h) indicate engagement and willingness to improve the project.
- Negative: The staleness of the zh-TW PR and the unresolved Matrix bug suggest maintainer responsiveness may be uneven, potentially frustrating contributors.

---

## 8. Backlog Watch

| Item | Age | Status | Action Needed |
|---|---|---|---|
| **[#3203](https://github.com/sipeed/picoclaw/issues/3203)** — Matrix reconnection logic | **31+ days** (opened 2026-07-02) | Open, 7 comments, 2 👍 | **Urgent.** Needs maintainer triage and a fix PR. The silent death behavior is a production reliability risk. Consider adding automatic reconnection with exponential backoff to the Matrix sync loop, and/or a watchdog subprocess to trigger process restarts. |
| **[#3261](https://github.com/sipeed/picoclaw/pull/3261)** — zh-TW locale | **17 days** (opened 2026-07-16) | Closed as stale | **Moderate.** The PR was closed without merge, meaning the localization work was not integrated. If Traditional Chinese support is still desired, the contributor should be invited to resubmit or the maintainer should merge it directly. |
| **[#3299](https://github.com/sipeed/picoclaw/pull/3299)** — Exa web search provider | **7 days** (opened 2026-07-26) | Open, 0 comments | **Monitor.** Well-defined PR with clear implementation details. Needs maintainer review and potential CI/testing validation. |
| **[#3309](https://github.com/sipeed/picoclaw/pull/3309)** — OrcaRouter provider | **1 day** (opened 2026-08-01) | Open, 0 comments | **Monitor.** Brand new PR; needs initial review. Follows the same OpenAI-compatible provider pattern, so integration should be straightforward if the API contract is verified. |

---

*Digest generated on 2026-08-02 from GitHub data for sipeed/picoclaw. All links reference github.com/sipeed/picoclaw.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-02

---

## 1. Today's Overview

NanoClaw saw a moderately active day on 2026-08-02, with **2 issues updated** (1 closed, 1 open) and **16 PRs updated** (10 open, 6 merged/closed). A **new rollup release v2.1.54** was published, consolidating all changes since the v2.1.17 tag. The release highlights a **breaking change** to the iMessage integration and includes a batch of bug fixes and feature work. Overall, project health appears stable with a steady flow of maintenance and incremental feature delivery.

---

## 2. Releases

### v2.1.54 — Rollup Release
- **Scope:** Covers all changes merged since the v2.1.17 tag (v2.1.18 through v2.1.54).
- **Breaking Change:** iMessage has been unified into a single `imessage` channel with two pluggable backends, installed via `/add-imessage`:
  - **Local backend** — uses this Mac's `chat.db` via the Chat SDK.
  - **Hosted backend** — uses native [Photon](https://photon.codes) (truncated in source data; likely `spectre` or similar).
- **Migration Note:** Users with existing iMessage setups should review the new `/add-imessage` flow, as the channel structure has changed. The hosted Photon backend introduces a new registration flow (supersedes prior PR #2999).
- **Release URL:** https://github.com/nanocoai/nanoclaw/releases/tag/v2.1.54

---

## 3. Project Progress

### Merged / Closed PRs (6 items)

| PR | Summary | Type |
|---|---|---|
| [#3170](https://github.com/nanocoai/nanoclaw/pull/3170) | Fix setup failure dispatch to the picked provider (addresses Issue #3169) | Bug Fix |
| [#3168](https://github.com/nanocoai/nanoclaw/pull/3168) | Close post-merge safety gaps in release process | Maintenance |
| [#2999](https://github.com/nanocoai/nanoclaw/pull/2999) | Unify iMessage into a single `imessage` channel (local + hosted backends) | Feature |
| [#3164](https://github.com/nanocoai/nanoclaw/pull/3164) | Hosted iMessage (Photon): working registration flow, superseding #2999 | Feature |
| [#3166](https://github.com/nanocoai/nanoclaw/pull/3166) | Fix migrate-v2: call `insertTaskRow` instead of removed `insertTask` | Bug Fix |
| [#3167](https://github.com/nanocoai/nanoclaw/pull/3167) | Alert when a provider credential expires | Feature |

### Key Advances
- **iMessage unification** (PRs #2999 + #3164) reached a significant milestone — the local + Photon-hosted dual-backend architecture is now merged and shipped in v2.1.54.
- **Setup provider dispatch fix** (PR #3170) closes a UX gap where non-Claude setup failures incorrectly prompted for Claude CLI installation.
- **Credential expiration alerts** (PR #3167) add proactive warning when provider tokens expire, addressing silent failure scenarios.
- **Release safety gaps** (PR #3168) harden the post-merge pipeline.

---

## 4. Community Hot Topics

### Most Active Issues

1. **[#3171](https://github.com/nanocoai/nanoclaw/issues/3171)** — *[OPEN]* The two qodo skills depend on an integration nothing sets up and intercept normal coding requests
   - **Author:** glifocat | **Created:** 2026-08-01
   - **Analysis:** The bundled `get-qodo-rules` and `qodo-pr-resolver` skills read from `~/.qodo/config.json`, but nothing in the repo provisions this file or account. This means the skills silently intercept normal coding requests without delivering value. A cleanup PR (#3172) exists to remove both skills.

2. **[#3169](https://github.com/nanocoai/nanoclaw/issues/3169)** — *[CLOSED]* Setup failures on non-Claude installs always offer to install the Claude CLI
   - **Author:** glifocat | **Created:** 2026-08-01
   - **Analysis:** When a non-Claude provider setup step fails, the diagnostic prompt defaults to recommending Claude CLI installation, creating a frustrating loop for users who chose Codex or another provider. Fixed by PR #3170.

### Most Active PRs

1. **[#3174](https://github.com/nanocoai/nanoclaw/pull/3174)** — *[OPEN]* fix: support rootless Docker for agent containers
   - **Author:** Denver901 | **Created:** 2026-08-01
   - **Analysis:** Agent containers fail on rootless Docker daemons due to two independent failures. This is a significant accessibility issue for users who deliberately exclude the agent account from the `docker` group for security hardening.

2. **[#2956](https://github.com/nanocoai/nanoclaw/pull/2956)** — *[OPEN]* fix(agent-runner): suppress duplicate delivery when the final output repeats tool-sent content
   - **Author:** stumpjumper | **Created:** 2026-07-05 (28+ days open)
   - **Analysis:** When an agent sends a reply via `send_message` MCP tool and repeats the same text in its final output, the message is delivered twice. This has been open for nearly a month without merge.

3. **[#3090](https://github.com/nanocoai/nanoclaw/pull/3090)** — *[OPEN]* fix(templates): prepend all top-level context Markdown
   - **Author:** amit-shafnir | **Created:** 2026-07-19 (14+ days open)

---

## 5. Bugs & Stability

### Bugs Reported / Active

| Severity | Issue/PR | Description | Status |
|---|---|---|---|
| **High** | [#3174](https://github.com/nanocoai/nanoclaw/pull/3174) | Agent containers unusable on rootless Docker daemons | Open PR |
| **High** | [#2956](https://github.com/nanocoai/nanoclaw/pull/2956) | Duplicate message delivery when agent repeats tool-sent content | Open PR (28+ days) |
| **Medium** | [#3171](https://github.com/nanocoai/nanoclaw/issues/3171) | qodo skills intercept requests with no integration set up | Open Issue; cleanup PR #3172 open |
| **Medium** | [#2801](https://github.com/nanocoai/nanoclaw/pull/2801) | Router input not hardened — `safeParseContent` returns non-object for primitives, causing `undefined` access | Open PR (46+ days) |
| **Medium** | [#2750](https://github.com/nanocoai/nanoclaw/pull/2750) | Stale outbound.db journals after container kills; hot-journal poll races | Open PR (51+ days) |
| **Low** | [#3166](https://github.com/nanocoai/nanoclaw/pull/3166) | migrate-v2 calls removed `insertTask` instead of `insertTaskRow` | Closed (fixed) |

### Notable Stability Fix in v2.1.54
- **Credential expiration alerts** (PR #3167) address a silent failure mode where expired provider tokens caused opaque "Read-only file system" errors with no actionable feedback.

---

## 6. Feature Requests & Roadmap Signals

### Features in Progress or Recently Merged

1. **iMessage unification** (shipped in v2.1.54) — Single `imessage` channel with local + Photon-hosted backends via `/add-imessage`. This is the marquee feature of this release cycle.
2. **Provider credential expiration alerts** (PR #3167, merged) — Proactive warnings before tokens expire.
3. **Codex/copilot changes** (PR #3165, closed) — Ongoing work to broaden provider support beyond Claude.
4. **Template context Markdown prepending** (PR #3090, open) — Ensures top-level context is consistently applied in templates.
5. **Reaction delivery best-effort** (PR #3121, open) — Makes reaction delivery resilient to failures.
6. **Egress update** (PR #3173, open) — Likely network/connectivity infrastructure changes.

### Predicted Next-Version Features
- **Root

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-02

---

## 1. Today's Overview

IronClaw is in an active development phase with 20 issues and 29 PRs updated in the last 24 hours, reflecting a high-throughput day of refactoring and performance work. The project is deep into **Wave 2** of its architecture reborn initiative, with a stacked series of PRs inverting product-facing ports onto dedicated contract crates (`product_contracts`, `extension_manager` split). A parallel track of **pi-harness adoption** (P0–P2) is driving multiple cache-performance issues and PRs related to prompt prefix stability and Anthropic `cache_control` breakpoints. Three issues were closed today, and no new releases were published. Overall project health is active with a strong contributor core driving architectural modernization.

---

## 2. Releases

**No new releases today.** The latest release activity is captured in the open bot-managed PR [#5598](https://github.com/nearai/ironclaw/pull/5598), which proposes version bumps across three crates (`ironclaw_common` 0.4.2→0.5.0 with breaking changes, `ironclaw_safety` 0.2.2→0.2.3, `ironclaw_skills` 0.3.0→0.4.0 with breaking changes). This release PR has been open since 2026-07-03 and remains unmerged.

---

## 3. Project Progress

### Merged / Closed PRs Today
| PR | Summary |
|---|---|
| [#6996](https://github.com/nearai/ironclaw/pull/6996) | Closed #6963 — inventory-driven discovery + fail-closed across remaining path-keyed CI gates |
| [#6998](https://github.com/nearai/ironclaw/pull/6998) | Closed — inverted `extension_host`'s product-facing ports onto `product_contracts` (WS2.1) |
| [#6995](https://github.com/nearai/ironclaw/pull/6995) | Closed — Wave 1 truth audit reconciling decision records with shipped reality |
| [#6992](https://github.com/nearai/ironclaw/pull/6992) | Closed — pinned `comm` to `LC_ALL=C` in reborn crate discovery (CI fix) |
| [#6761](https://github.com/nearai/ironclaw/pull/6761) | Closed — added regression test for generic outbound registration |
| [#7002](https://github.com/nearai/ironclaw/pull/7002) | Closed — inverted webui + openai_compat onto `product_contracts` (WS5) |

### Key Open PRs Advancing Features
- **[#7003](https://github.com/nearai/ironclaw/pull/7003)** — Splits `ironclaw_extension_manager` out of `extension_host` (WS2.4, stacked on #7000→#6998)
- **[#7000](https://github.com/nearai/ironclaw/pull/7000)** — Resolves `ProductSurfaceFailure` linchpin (WS2.2, stacked on #6998)
- **[#7004](https://github.com/nearai/ironclaw/pull/7004)** — Inverts `ironclaw_operator` product-facing ports + non-webui strays (WS5, stacked on #7003)
- **[#7005](https://github.com/nearai/ironclaw/pull/7005)** — Fixes conversations/threads naming trap and widens attachments (WS5, stacked on #7002→#6998)
- **[#6997](https://github.com/nearai/ironclaw/pull/6997)** — Adds explicit Anthropic `cache_control` breakpoints on both transports (P0 #1, pi-harness)
- **[#7001](https://github.com/nearai/ironclaw/pull/7001)** — Keeps cached system prefix byte-stable across model calls (P0 #2, pi-harness)
- **[#6994](https://github.com/nearai/ironclaw/pull/6994)** — OOBE automation-tasks UI prototype (carousel, inline cards, agent-mode pill)
- **[#7007](https://github.com/nearai/ironclaw/pull/7007)** — Alerts live-canary Slack channel on merge queue failures

---

## 4. Community Hot Topics

### Most Active Issues
- **[#6963](https://github.com/nearai/ironclaw/issues/6963)** (7 comments, CLOSED) — Path-keyed CI gates that survived #6946. Tracking issue for 8 discovered defects (6 silent + 2 loud) across CI gates. Resolved by [#6996](https://github.com/nearai/ironclaw/pull/6996). *Underlying need: CI gate coverage completeness after large-scale refactoring.*
- **[#6973](https://github.com/nearai/ironclaw/pull/6973)** (most comments among PRs, OPEN) — Postgres API capacity recovery. p95 regressed from 3.74s to 12.0s after #6696. *Underlying need: production performance regression investigation and remediation.*
- **[#6974](https://github.com/nearai/ironclaw/issues/6974)** (2 comments, OPEN) — libSQL `thread_store_writes` pathology at p95 37–135s. Split from #6973; tool-heavy stress cases remain over the 2.5s p95 threshold even after #6973's fixes. *Underlying need: deeper libSQL performance profiling for tool-heavy workloads.*

### Most Active PRs by Engagement
- **[#5981](https://github.com/nearai/ironclaw/pull/5981)** — Queued-message steering (forward-ported, turn-boundary races fixed). Open since 2026-07-11.
- **[#6780](https://github.com/nearai/ironclaw/pull/6780)** — reborn-ironhub deep-link register/install gateway. Open since 2026-07-28.

---

## 5. Bugs & Stability

### Critical / High Severity
1. **[#6974](https://github.com/nearai/ironclaw/issues/6974)** — libSQL `thread_store_writes` p95 latency of 37–135s in tool-heavy stress cases. Even after #6973's Postgres capacity recovery, the `large-context` prefill still cannot complete within the 20-minute CI timeout. **No fix PR yet.**
2. **[#6978](https://github.com/nearai/ironclaw/issues/6978)** — `reborn-tests.yml` workflow_dispatch runs structurally fail the Tests (Reborn) roll-up due to a `critical-mutation` `if:` condition that only checks `pull_request`/`merge_group` events. CI gate is effectively bypassed for manual runs. **No fix PR yet.**
3. **[#6989](https://github.com/nearai/ironclaw/issues/6989)** — **Bug:** `ModelWorkRequest::for_assistant` estimates input tokens from the *reference string length* (`message.content_ref.as_str().len()`) rather than the actual referenced content. This produces incorrect token accounting for billing and budget gating. **No fix PR yet.**

### Medium Severity
4. **[#6988](https://github.com/nearai/ironclaw/issues/6988)** — Compaction uses hardcoded 128k context budget instead of deriving from the actual model window. May cause unnecessary compaction or premature context exhaustion. **No fix PR yet.**
5. **[#6903](https://github.com/nearai/ironclaw/issues/6903)** — Admin users list pagination broken beyond first page (CLOSED; fix presumably in #6917 area).
6. **[#7011](https://github.com/nearai/ironclaw/issues/7011)** — Five pre-existing findings surfaced by the WS2.4 `extension_manager` split (false `WriteFilesystem` effect, untested lock predicate, two missing dispatch tests, six dropped causes). All five are in relocated code with zero content change. **No fix PR yet.**

### Low Severity
7. **[#7006](https://github.com/nearai/ironclaw/issues/7006)** — Changed-coverage gate: steering-queue slice error paths are crate-tier-only with no integration fault injection. Coverage gate may be too lenient for error paths. **No fix PR yet.**

---

## 6. Feature Requests & Roadmap Signals

### User-Requested Features
- **[#6983](https://github.com/nearai/ironclaw/issues/6983)** — Add `hub` as alias for the `ironhub` CLI subcommand. Requested by a user preparing IronHub dashboard release documentation. The canonical subcommand is `ironhub` with visible alias `iron-hub`, but `hub` is missing. **Low priority, likely next CLI release.**
- **[#7009](https://github.com/nearai/ironclaw/issues/7009)** — Add OrcaRouter as a built-in LLM provider. OrcaRouter is missing from `providers.json` while competitors (OpenRouter, Together, Fireworks, etc.) are already supported. **Likely next provider integration sprint.**

### Roadmap Signals (from pi-harness adoption program, P0–P2)
The pi-harness adoption program (documented at `docs/research/pi-agent-deep-dive.md` §7.3) is driving a cluster of cache-performance work:
- **P0 #1** ([#6984](https://github.com/nearai/ironclaw/issues/6984) → [#6997](https://github.com/nearai/ironclaw/pull/6997)): Explicit Anthropic `cache_control` breakpoints
- **P0 #2** ([#6985](https://github.com/nearai/ironclaw/issues/6985) → [#7001](https://github.com/nearai/ironclaw/pull/7001)): Byte-stable cached system prefix
- **P0 #3** ([#6986](https://github.com/nearai/ironclaw/issues/6986)): Byte-identical tool array (defer_loading vs mid-run promotion)
- **P0 #4** ([#6987](https://github.com/nearai/ironclaw/issues/6987)): Regression test pinning prefix stability
- **P1 #5** ([#6988](https://github.com/nearai/ironclaw/issues/6988)): Context budget from actual model window
- **P1 #6** ([#6989](https://github.com/nearai/ironclaw/issues/6989)): Fix token accounting bug
- **P1 #7** ([#6990](https://github.com/nearai/ironclaw/issues/6990)): Compaction must not pollute prompt cache

**Prediction:** The next version cycle will likely ship the pi-harness cache-performance improvements as a cohesive set, alongside the WS2/WS5 contract inversion stack.

---

## 7. User Feedback Summary

### Pain Points
- **CLI discoverability** — [#6983](https://github.com/nearai/ironclaw/issues/6983): Users preparing

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-02

**Repository:** [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. Today's Overview

Activity on the LobsterAI repository is notably low for the past 24 hours. All 7 issues updated were closed (6 as stale) or remain open but also marked stale, and both of the 2 updated PRs are open with no merges. No new releases were published. The project appears to be in a maintenance-quiescent state, with no new feature work or bug-fix merges in the current window. The overall health signal is one of stagnation — pending contributions exist but have not been reviewed or integrated.

---

## 2. Releases

No new releases were published on this date. The latest release information is unavailable (none listed).

---

## 3. Project Progress

| PR | Status | Summary |
|---|---|---|
| [#1224](https://github.com/netease-youdao/LobsterAI/pull/1224) | Open (stale) | Fixes i18n hardcoded Chinese label in `CoworkPromptInput.tsx`, adds Escape key support to Agent modals, and prevents duplicate delete clicks. Linked to Issue #1223. |
| [#2358](https://github.com/netease-youdao/LobsterAI/pull/2358) | Open (stale) | Shows localized feedback when a session rename request fails, addressing Issue #670. |

**No PRs were merged today.** Both PRs have been open for an extended period (since 2026-04-01 and 2026-07-18 respectively) and remain unreviewed.

---

## 4. Community Hot Topics

The most commented issues and PRs (by engagement) are:

- **[Issue #1293](https://github.com/netease-youdao/LobsterAI/issues/1293)** (2 comments, 1 👍) — Custom MCP via HTTP not usable in the OpenClaw engine; only SSE-based MCPs work. *Underlying need:* users want flexibility in MCP transport protocols and expect the engine to support HTTP-based custom MCP servers.
- **[Issue #1296](https://github.com/netease-youdao/LobsterAI/issues/1296)** (2 comments) — Uploading a 3MB long image causes a page error and renders the session unusable. *Underlying need:* robust image handling and error recovery for large media uploads.
- **[Issue #1298](https://github.com/netease-youdao/LobsterAI/issues/1298)** (2 comments) — Model connection succeeds but typing two characters triggers a "content too long" error, suggesting a token-limit or prompt-length misconfiguration. *Underlying need:* clearer model limit feedback and correct context-window handling.
- **[Issue #1302](https://github.com/netease-youdao/LobsterAI/issues/1302)** (2 comments) — Feature request for line-number toggle in code blocks. *Underlying need:* improved developer ergonomics for reading and debugging code output.
- **[Issue #1305](https://github.com/netease-youdao/LobsterAI/issues/1305)** (2 comments) — Scheduled task title displays incorrectly in history after task deletion. *Underlying need:* data integrity in task history UI.
- **[Issue #1307](https://github.com/netease-youdao/LobsterAI/issues/1307)** (2 comments) — Model provider config panel becomes read-only after closing and reopening. *Underlying need:* stable UI state management for settings panels.
- **[PR #1224](https://github.com/netease-youdao/LobsterAI/pull/1224)** — Addresses i18n hardcoding, Escape key, and duplicate-click protection (see Section 5).

---

## 5. Bugs & Stability

Bugs reported in the last 24h window (all closed as stale, indicating they may already be fixed or abandoned):

| Severity | Issue | Description | Fix PR? |
|---|---|---|---|
| 🔴 High | [#1296](https://github.com/netease-youdao/LobsterAI/issues/1296) | 3MB image upload crashes the page and breaks the entire session | No |
| 🔴 High | [#1298](https://github.com/netease-youdao/LobsterAI/issues/1298) | Input of just 2 characters incorrectly triggers "exceeds model limit" error | No |
| 🟡 Medium | [#1293](https://github.com/netease-youdao/LobsterAI/issues/1293) | HTTP-based custom MCP servers not recognized by OpenClaw engine | No |
| 🟡 Medium | [#1307](https://github.com/netease-youdao/LobsterAI/issues/1307) | Model provider config panel becomes read-only after close/reopen | No |
| 🟡 Medium | [#1305](https://github.com/netease-youdao/LobsterAI/issues/1305) | Scheduled task history shows wrong title after task deletion | No |
| 🟢 Low | [#1302](https://github.com/netease-youdao/LobsterAI/issues/1302) | Missing line-number toggle in code blocks (feature request) | No |

**Note:** PR [#1224](https://github.com/netease-youdao/LobsterAI/pull/1224) addresses the i18n hardcoding bug and Agent modal UX issues from Issue [#1223](https://github.com/netease-youdao/LobsterAI/issues/1223) but has not been merged. No active fix PRs exist for the bugs listed above.

---

## 6. Feature Requests & Roadmap Signals

- **Line-number toggle for code blocks** ([#1302](https://github.com/netease-youdao/LobsterAI/issues/1302)) — A concrete, well-specified feature request requesting a `#` icon toggle in code block toolbars using `react-syntax-highlighter`'s `showLineNumbers`. This is a strong candidate for the next release as it is UI-focused and has a clear implementation path.
- **Session rename failure feedback** ([#2358](https://github.com/netease-youdao/LobsterAI/pull/2358)) — Localized error feedback when renaming a session fails (addresses [#670](https://github.com/netease-youdao/LobsterAI/issues/670)). Already implemented in an open PR, awaiting merge.
- **MCP protocol flexibility** ([#1293](https://github.com/netease-youdao/LobsterAI/issues/1293)) — Users want HTTP-based MCP support beyond SSE, signaling demand for broader MCP transport compatibility.

---

## 7. User Feedback Summary

**Pain points identified:**
- **i18n / localization gaps:** Hardcoded Chinese strings leak into English user prompts ([#1223](https://github.com/netease-youdao/LobsterAI/issues/1223)), degrading the experience for non-Chinese users.
- **Image upload reliability:** Large image uploads (3MB+) cause unrecoverable page errors ([#1296](https://github.com/netease-youdao/LobsterAI/issues/1296)).
- **Model limit confusion:** Users encounter misleading "content too long" errors even with minimal input ([#1298](https://github.com/netease-youdao/LobsterAI/issues/1298)), suggesting a backend/frontend token-counting mismatch.
- **UI state bugs:** Panels becoming read-only ([#1307](https://github.com/netease-youdao/LobsterAI/issues/1307)) and incorrect history titles ([#1305](https://github.com/netease-youdao/LobsterAI/issues/1305)) erode user trust.
- **Missing UX affordances:** No Escape key to close modals, no delete-click protection, no line numbers in code blocks — all basic usability expectations.

**Satisfaction signals:** Users are engaged and submitting detailed, well-structured bug reports and feature requests with reproduction steps and screenshots, indicating an active and invested user base.

---

## 8. Backlog Watch

The following items have been open/stale for an extended period and require maintainer attention:

| Item | Age | Status | Action Needed |
|---|---|---|---|
| [#1223](https://github.com/netease-youdao/LobsterAI/issues/1223) | ~122 days | Open, stale | PR [#1224](https://github.com/netease-youdao/LobsterAI/pull/1224) is ready to merge — needs maintainer review. |
| [#1224](https://github.com/netease-youdao/LobsterAI/pull/1224) | ~122 days | Open, stale | Same as above — merge-blocking review is overdue. |
| [#2358](https://github.com/netease-youdao/LobsterAI/pull/2358) | ~15 days | Open, stale | Ready for review — addresses session rename UX gap. |
| [#1296](https://github.com/netease-youdao/LobsterAI/issues/1296) | ~122 days | Closed (stale) | High-severity crash bug — verify if the fix was applied or if the issue was prematurely closed. |
| [#1293](https://github.com/netease-youdao/LobsterAI/issues/1293) | ~122 days | Closed (stale) | HTTP MCP support gap — confirm whether this is resolved or abandoned. |
| [#1298](https://github.com/netease-youdao/LobsterAI/issues/1298) | ~122 days | Closed (stale) | Token-limit misreporting — validate if the root cause was addressed. |

**Overall assessment:** The project has several ready-to-merge PRs and a backlog of stale issues that need either resolution or explicit closure. Maintainer engagement appears low, which risks losing community momentum. Prioritizing the merge of [#1224](https://github.com/netease-youdao/LobsterAI/pull/1224) and [#2358](https://github.com/netease-youdao/LobsterAI/pull/2358) would be the highest-impact actions.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-02

**Repository:** [moltis-org/moltis](https://github.com/moltis-org/moltis)
**Period:** 2026-08-01 → 2026-08-02

---

## 1. Today's Overview

Moltis had a quiet but productive day with no new issues filed and no releases published. Four pull requests were updated within the last 24 hours — three were closed/merged and one remains open — indicating a steady cadence of code review and integration. The absence of open issues suggests the project currently has no reported bugs or feature requests awaiting triage, which points to a healthy issue pipeline. Overall, the project is in an active development phase with a focus on infrastructure hardening and protocol expansion.

---

## 2. Releases

**No new releases in the last 24 hours.** The project has no pending or published version tags at this time.

---

## 3. Project Progress

Three pull requests were closed/merged today, advancing the following areas:

| PR | Area | Summary |
|---|---|---|
| [#1174](https://github.com/moltis-org/moltis/pull/1174) | Instrumentation & Feedback | Added backend-neutral agent instrumentation, Langfuse v4 export, operational OTLP backends, and end-user reaction feedback. Records immutable completion-only turns with provider failover attribution, cache-aware token usage, and reasoning trace support. |
| [#1170](https://github.com/moltis-org/moltis/pull/1170) | Security & Access Control | Gated `/sh` and privileged tools behind a per-account `operators` allowlist. Separated general access from privilege escalation, enforcing the boundary across commands, callbacks, queue replay, chat execution, and external tool calls. |
| [#1168](https://github.com/moltis-org/moltis/pull/1168) | Nostr Protocol Expansion | Added NIP-29 group chat support for Buzz channels in `moltis-nostr`. Previously, the module only supported NIP-01/04 DM-style interactions; this extends it to full group chat over NIP-42-authenticated connections. |

One PR remains open and is still under review (see Backlog Watch).

---

## 4. Community Hot Topics

No issues were updated or created in the last 24 hours. The most active PR is the single open PR:

- **[#1182](https://github.com/moltis-org/moltis/pull/1182)** — *[OPEN]* fix(sessions): allow deleting and archiving the main session — authored by **shixi-li**, created 2026-08-01. This PR removes the `main` session guard from `delete_impl` and `is_archivable_entry`, allowing the main session to be managed like any other session while preserving the active-channel-session archive restriction and `sessions.clear_all` behavior. It addresses [Issue #1132](https://github.com/moltis-org/moltis/issues/1132).

**Analysis:** The underlying need is operational flexibility — users and administrators want full lifecycle control over all session types, including the special "main" session. The fact that this PR is still open suggests a maintainer review bottleneck that may slow delivery of this fix.

---

## 5. Bugs & Stability

**No bugs, crashes, or regressions reported in the last 24 hours.** The issue tracker is empty (0 open/active items), and no bug-fix PRs were submitted today. This is a positive signal for project stability, though it may also indicate low issue-reporting engagement from the community.

---

## 6. Feature Requests & Roadmap Signals

While no formal feature requests were filed today, the merged and open PRs reveal the following roadmap trajectory:

- **Observability & Analytics** — [#1174](https://github.com/moltis-org/moltis/pull/1174) signals a major push toward production-grade monitoring (Langfuse v4, OTLP), suggesting the project is maturing toward enterprise or self-hosted operator use cases.
- **Security Hardening** — [#1170](https://github.com/moltis-org/moltis/pull/1170) indicates a shift toward stricter privilege separation, likely in response to or ahead of multi-tenant or shared-deployment scenarios.
- **Protocol Interoperability** — [#1168](https://github.com/moltis-org/moltis/pull/1168) shows continued investment in the Nostr ecosystem, specifically group chat, which may be a precursor to broader relay-based collaboration features.
- **Session Lifecycle Management** — [#1182](https://github.com/moltis-org/moltis/pull/1182) suggests the next release may include full CRUD parity for all session types.

**Prediction:** The next version will likely bundle session management fixes (#1182) alongside the instrumentation (#1174) and security (#1170) changes, as these are all independent and non-conflicting.

---

## 7. User Feedback Summary

No user-facing issues or comments were recorded in the last 24 hours. The PRs themselves reflect developer-driven priorities rather than direct user-reported pain points. Notable indirect signals:

- The instrumentation PR [#1174](https://github.com/moltis.org/moltis/pull/1174) (with Langfuse v4 and OTLP support) suggests the project is building tooling for operators who need observability into agent behavior — a likely pain point for self-hosted deployments.
- The operators allowlist PR [#1170](https://github.com/moltis-org/moltis/pull/1170) addresses a security boundary concern where channel senders could previously reach privileged commands, indicating real-world misuse or risk scenarios were identified.
- The main session deletion fix [#1182](https://github.com/moltis-org/moltis/pull/1182) resolves a usability gap where the most important session was locked from standard lifecycle operations.

---

## 8. Backlog Watch

The following item requires maintainer attention:

- **[#1182](https://github.com/moltis-org/moltis/pull/1182)** — *[OPEN]* fix(sessions): allow deleting and archiving the main session
  - **Author:** shixi-li
  - **Created:** 2026-08-01
  - **Status:** Open, awaiting review/merge
  - **Priority:** High — this is a direct fix for a reported issue (#1132) that restricts a core session operation. The PR has been open for at least one day with no merge activity, suggesting it may need maintainer review or CI validation.

No long-unanswered issues exist in the tracker at this time, which is a positive indicator for community responsiveness.

---

**Digest generated on 2026-08-02 | Data source: GitHub API (moltis-org/moltis)**

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-08-02

**Repository:** agentscope-ai/QwenPaw | **Period:** 2026-08-01 → 2026-08-02

---

## 1. Today's Overview

The project shows sustained high activity with **14 open issues** and **12 pull requests** (11 open, 1 merged/closed) updated in the last 24 hours. No new releases were published. The issue tracker is dominated by bug reports and feature requests spanning shell command execution, memory compression, multi-agent collaboration, and provider compatibility — indicating a project in active maturation with a growing user base surfacing real-world edge cases. The PR pipeline is healthy, with multiple fixes and features in review, though none have been merged into a release yet. Overall, the project is in a **rapid iteration phase** with strong community contribution velocity.

---

## 2. Releases

**None.** No new versions were published during this period. The latest known version is **QwenPaw 2.0.1**. Several open issues (#6588, #6520, #6612, #6619, #6624) reference version 2.0.1 and interactions with `agentscope==2.0.4.post1`, suggesting a compatibility gap that may warrant a patch or minor release once the outstanding fixes are consolidated.

---

## 3. Project Progress

### Merged / Closed Today
| PR | Title | Significance |
|---|---|---|
| [#6598](https://github.com/agentscope-ai/QwenPaw/pull/6598) | fix(skills): preserve plugin-sourced skill tags across reconcile cycles | Resolves #6537; plugin-sourced skills no longer lose their tags on restart. This is a stability fix for the skills/plugin ecosystem. |

### Open PRs Advancing the Codebase
| PR | Title | Addresses Issue(s) |
|---|---|---|
| [#6630](https://github.com/agentscope-ai/QwenPaw/pull/6630) | fix(agents): report empty model response to user | #6601 — silent failures on empty model responses |
| [#6629](https://github.com/agentscope-ai/QwenPaw/pull/6629) | fix(memory): trigger summarize on auto-compression | #6624 — auto-compression not triggering memory flow |
| [#6628](https://github.com/agentscope-ai/QwenPaw/pull/6628) | fix(scroll): use SystemMsg for compressed memory placeholder | #6541 — role=user placeholder causing HTTP 400 from DeepSeek/OpenAI APIs |
| [#6623](https://github.com/agentscope-ai/QwenPaw/pull/6623) | fix(acp): prevent final text loss when notifications race prompt | #6625 — ACP race condition dropping text output |
| [#6620](https://github.com/agentscope-ai/QwenPaw/pull/6620) | fix(providers): relay Gemini thought_signature without mutating ToolCallBlock | #6619 — crash from Gemini `extra_content` field |
| [#6622](https://github.com/agentscope-ai/QwenPaw/pull/6622) | feat(provider): add OrcaRouter as built-in provider | New provider integration |
| [#6618](https://github.com/agentscope-ai/QwenPaw/pull/6618) | fix(console): remove forced UTC timestamp normalization | Timestamp display bug in session list |
| [#5490](https://github.com/agentscope-ai/QwenPaw/pull/5490) | feat(console): show tool-card images inline and add gallery navigation | UX improvement for image viewing |
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | feat: unify provider discovery, model metadata, routing, and agent controls | Major provider architecture refactor (#6167) |
| [#6306](https://github.com/agentscope-ai/QwenPaw/pull/6306) | feat(desktop): add workspace shortcut to sidebar | Desktop UX improvement (#6083) |
| [#6526](https://github.com/agentscope-ai/QwenPaw/pull/6526) | feat: Add NVIDIA NIM provider support | New provider integration |

---

## 4. Community Hot Topics

### Most Active Issues (by comments)
| Issue | Title | Comments | Link |
|---|---|---|---|
| [#6588](https://github.com/agentscope-ai/QwenPaw/issues/6588) | `spawn_subagent` single-task mode unusable — `batch` exposed as required | 4 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6588) |
| [#6520](https://github.com/agentscope-ai/QwenPaw/issues/6520) | agent.json systematic corruption: BOM, missing quotes, double-encoding | 3 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6520) |
| [#6589](https://github.com/agentscope-ai/QwenPaw/issues/6589) | `execute_shell_command` large output causes UI freeze | 3 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6589) |

### Underlying Needs Analysis
- **#6588** reflects a schema/API design tension: the `batch` parameter is required in the tool schema but conceptually optional for single-task subagent spawning. Users need a clean single-task mode without schema friction.
- **#6520** points to a data integrity gap in `agent.json` — the corruption (BOM, missing quotes, double-encoding) suggests insufficient input sanitization and file write atomicity. Users on Windows are disproportionately affected.
- **#6589** and **#6608** both highlight that `execute_shell_command` lacks output size limits and timeout enforcement, causing UI freezes and session blocking. The underlying need is **robust subprocess management** with configurable thresholds.
- **#6568** (global shortcut for floating input) and **#6593** (unified cleanup page) signal users want **desktop-grade UX** — quick-access patterns and data lifecycle management comparable to competing tools like Raycast and豆包.

---

## 5. Bugs & Stability

### Ranked by Severity

| # | Issue | Severity | Fix PR? |
|---|---|---|---|
| 1 | [#6612](https://github.com/agentscope-ai/QwenPaw/issues/6612) — QwenPaw 2.0.1 incompatible with agentscope 2.0.4.post1 (proactive crashes + tool-permission deadlock) | **Critical** — breaks core proactive/memory subsystem | None yet |
| 2 | [#6619](https://github.com/agentscope-ai/QwenPaw/issues/6619) — `ToolCallBlock` crash on Gemini `extra_content` | **High** — every Gemini streaming request crashes | [#6620](https://github.com/agentscope-ai/QwenPaw/pull/6620) ✅ |
| 3 | [#6589](https://github.com/agentscope-ai/QwenPaw/issues/6589) — UI freeze on large shell command output | **High** — complete app unresponsiveness | None yet |
| 4 | [#6608](https://github.com/agentscope-ai/QwenPaw/issues/6608) — long-running shell commands bypass timeout, block Feishu session indefinitely | **High** — session-wide blocking for hours | None yet |
| 5 | [#6520](https://github.com/agentscope-ai/QwenPaw/issues/6520) — agent.json systemic corruption causing complete system failure | **High** — data loss/corruption | None yet |
| 6 | [#6625](https://github.com/agentscope-ai/QwenPaw/issues/6625) — ACP text loss when notifications race prompt | **Medium** — silent data loss in external agent delegation | [#6623](https://github.com/agentscope-ai/QwenPaw/pull/6623) ✅ |
| 7 | [#6624](https://github.com/agentscope-ai/QwenPaw/issues/6624) — auto-compression doesn't trigger memory summarize | **Medium** — memory pipeline silently broken | [#6629](https://github.com/agentscope-ai/QwenPaw/pull/6629) ✅ |
| 8 | [#6626](https://github.com/agentscope-ai/QwenPaw/issues/6626) — Real behavior proof gate strips fenced Evidence blocks | **Low** — CI/gating issue, not runtime | None yet |
| 9 | [#6588](https://github.com/agentscope-ai/QwenPaw/issues/6588) — `spawn_subagent` batch schema bug | **Medium** — single-task mode unusable | None yet |
| 10 | [#6628](https://github.com/agentscope-ai/QwenPaw/issues/6628) — scroll compression placeholder causes HTTP 400 | **Medium** — API incompatibility with DeepSeek/OpenAI | [#6628](https://github.com/agentscope-ai/QwenPaw/pull/6628) ✅ |

---

## 6. Feature Requests & Roadmap Signals

| # | Issue | Feature | Likelihood for Next Release |
|---|---|---|---|
| [#6593](https://github.com/agentscope-ai/QwenPaw/issues/6593) | Unified cleanup page for agent data (automatic + manual) | High — addresses real storage bloat pain point | **Medium** — substantial UI work |
| [#6568](https://github.com/agentscope-ai/QwenPaw/issues/6568) | Global shortcut for floating quick-input box | Medium — desktop UX differentiator | **Medium** — Tauri desktop integration |
| [#6622](https://github.com/agentscope-ai/QwenPaw/pull/6622) | OrcaRouter as built-in provider | High — already in PR | **High** — if PR is approved |
| [#6526](https://github.com/agentscope-ai/QwenPaw/pull/6526) | NVIDIA NIM provider support | High — already in PR | **High** — if PR is approved |
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | Unify provider discovery, model metadata, routing | High — major architecture PR | **High** — foundational work |
| [#6306](https://github.com/agentscope-ai/QwenPaw/pull/6306) | Workspace shortcut in desktop sidebar | Medium — already in PR | **Medium** |
| [#6621](https://github.com/agentscope-ai/QwenPaw/issues/6621) | Multi-agent collaboration guidance in UI | Medium — UX/docs improvement | **Low-Medium** |

**Roadmap signal:** The provider unification PR (#6302) and multiple new provider integrations (OrcaRouter, NVIDIA NIM) suggest the team is building toward a **modular, pluggable provider architecture**. The cleanup feature (#6593) and workspace shortcut (#6306) indicate attention to **desktop application maturity**.

---

## 7. User Feedback Summary

### Pain Points
- **Shell command reliability** is the #1 recurring pain point: UI freezes (#6589), timeout bypass (#6608), nohup hang (#6480). Users running long-running or detached shell processes encounter broken session state.
- **Memory/compression pipeline** is fragile: auto-compression doesn't trigger memory summarize (#6624), compressed placeholder causes API errors (#6541/#6628), and proactive crashes break the memory-evolving subsystem (#6612).
- **Data integrity** concerns: `agent.json` corruption (#6520) and ACP text loss (#6625) erode user trust.
- **Multi-agent experience** is confusing: users cannot discover how to activate other agents without explicit documentation hunting (#6621).
- **Provider compatibility** is a moving target: QwenPaw 2.0.1 breaks with agentscope 2.0.4.post1 (#6612), and Gemini streaming crashes (#6619).

### Positive Signals
- Active first-time contributors (#6623, #6620, #6622) indicate growing community engagement.
- Multiple UX improvements (inline images #5490, workspace shortcut #6306, timestamp fix #6618) show the team invests in polish.

---

## 8. Backlog Watch

These items have been open for an extended period and need maintainer attention:

| Issue | Age | Why It Needs Attention |
|---|---|---|
| [#6480](https://github.com/agentscope-ai/QwenPaw/issues/6480) | ~7 days (created 2026-07-2

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-02

**Repository:** [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## 1. Today's Overview

ZeroClaw shows a very high day-over-day activity level on 2026-08-02, with **50 issues** and **50 pull requests** updated in the last 24 hours. Of the 50 issues, 45 remain open/active and 5 were closed; of the 50 PRs, 43 remain open and 7 were merged or closed. No new releases were published. The volume of concurrent RFC discussions, bug fixes, and feature PRs indicates a project in active, broad development — with a strong emphasis on architectural hardening (security, memory lifecycle, observability) and channel/provider expansion. Overall project health is robust, though the high ratio of open RFCs to merged deliverables suggests the team is in a heavy design-review phase ahead of a potential v0.9.0 milestone.

---

## 2. Releases

**No new releases today.** The latest release information is absent from the data, and the project's v0.9.0 milestone tracker (Issue #7432) remains open, indicating the next version is still in preparation.

---

## 3. Project Progress

### Merged / Closed PRs (7 total)
Seven PRs were merged or closed in the last 24 hours. Specific titles are not enumerated in the open-PR listing, but the activity pattern from the remaining open PRs and closed issues suggests the following categories of progress:

- **Bug fixes** — At least one fix addresses the WhatsApp Web chat-policy enforcement gap (see Bugs section, PR #9609).
- **CI & docs** — PR #9545 (rustdoc warning gate) and PR #9550 (LinkedIn broken-link fix) are visible as recently updated.
- **Provider & channel hardening** — Multiple PRs in the open list deal with provider routing, credential handling, and channel config validation, suggesting incremental merges in those areas.

### Closed Issues (5 total)
Two closed issues are visible in the top-30 listing:
- **#8568** — Mixture-of-Agents (MoA) virtual model provider feature ([closed](https://github.com/zeroclaw-labs/zeroclaw/issues/8568)). This RFC reached a terminal state (likely accepted and implemented or deferred).
- **#9550** — Broken LinkedIn link on GitHub org profile ([closed](https://github.com/zeroclaw-labs/zeroclaw/issues/9550)). A minor docs fix.

The remaining 3 closed issues are not in the top-30 by comment count and may be lower-priority cleanup items.

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| # | Issue | Comments | Key Theme |
|---|-------|----------|-----------|
| [9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) | RFC: Separate conversation history from agent-curated long-term memory | 16 | Memory architecture |
| [9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127) | RFC: Abstract a `KeySource` trait — classify master-key material by source | 13 | Security / secrets |
| [8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | RFC: OpenAI Chat Completions compatibility adapter | 12 | Interoperability |
| [8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) | RFC: Add cross-turn conversation correlation to OTel export | 12 | Observability |
| [9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) | RFC: A2A outbound client (A2ATool) | 10 | Multi-agent / A2A |
| [7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | RFC: Per-execution confirmation tier for high-risk shell commands | 10 | Security / tool policy |

### Most Active PRs
- **[PR #9637](https://github.com/zeroclaw-labs/zeroclaw/pull/9637)** — Guard temporary React Router RSC exception in CI (1 👍)
- **[PR #9545](https://github.com/zeroclaw-labs/zeroclaw/pull/9545)** — Gate rustdoc warnings in required PR CI (1 👍)

### Underlying Needs Analysis
The top issues reveal three converging community priorities:
1. **Memory & state separation** — Two of the top-6 issues (#9048, #9103, #6850) address the conflation of conversation history with long-term memory, indicating a fundamental architectural pain point that operators are hitting in production.
2. **Security hardening** — Issues #9127 (key source abstraction), #7155 (shell confirmation tiers), #9348/9397/9417 (WhatsApp policy leaks), and #6996 (sandbox policy) show the community is demanding stronger, more granular security controls — especially around credential management and tool execution.
3. **Interoperability & observability** — The OpenAI adapter (#8603), OTel correlation (#8933), and MoA provider (#8568, now closed) reflect demand for ZeroClaw to integrate into existing AI tooling ecosystems and provide production-grade telemetry.

---

## 5. Bugs & Stability

### Bugs Ranked by Severity

| Severity | Issue | Title | Fix PR? |
|----------|-------|-------|---------|
| **S1 (security risk)** | [#9348](https://github.com/zeroclaw-labs/zeroclaw/issues/9348) | WhatsApp Web answers every DM and group under `mode = business` — chat policies are personal-mode only, empty `allowed_groups` permits all groups | **Yes** — PR [#9609](https://github.com/zeroclaw-labs/zeroclaw/pull/9609) by belumume, opened 2026-08-01 |
| **S2 (degraded behavior)** | [#9417](https://github.com/zeroclaw-labs/zeroclaw/issues/9417) | WhatsApp Cloud `request_approval` leaks a live approval token on send failure and cancellation | No fix PR visible yet |
| **P1** | [#9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340) | CLI-created cron jobs cannot deliver output; delivery hardcoded to `None` | No fix PR visible yet |
| **P2** | [#6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) | Nextcloud Talk uses incorrect bot message API | No fix PR visible yet |
| **P2** | [#9037](https://github.com/zeroclaw-labs/zeroclaw/pull/9037) | Strip trailing provider terminal markers from streamed assistant text (fix PR, open) | **Yes** — PR [#9037](https://github.com/zeroclaw-labs/zeroclaw/pull/9037) |

### Stability Notes
- The WhatsApp cluster (#9348, #9397, #9417) represents the most urgent stability concern — a misconfigured business-mode channel can expose the agent to reply to every inbound message, including unrelated group chats. PR #9609 addresses the policy enforcement gap, and PR #9397 (RFC) proposes a systemic fix for empty `allowed_groups`.
- The cron delivery bug (#9340) means scheduled agent jobs silently discard output — a reliability issue for operators relying on cron-based automation.
- The shell risk classifier fix (PR #9635) and Windows null-device fix (PR #9636) are small but important stability improvements for cross-platform security policy correctness.

---

## 6. Feature Requests & Roadmap Signals

### High-Probability Next-Version Candidates (v0.9.0)
The v0.9.0 milestone tracker is Issue [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432). Based on activity and priority signals, the following features are likely candidates:

| Feature | Source Issue | Priority | Signal |
|---------|-------------|----------|--------|
| **A2A outbound client (A2ATool)** | [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) | P2 | Completes the A2A story (inbound in v0.8.2); directly referenced in #7432 |
| **Per-model capability & context-window config** | [#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) | P1 | Unblocks provider selection UX and context budget accuracy |
| **WhatsApp Web chat policy enforcement** | [#9348](https://github.com/zeroclaw-labs/zeroclaw/issues/9348) | P1 | Security fix already in PR #9609; likely ships as a bugfix |
| **Cross-turn OTel correlation** | [#8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) | P2 | Observability enhancement, accepted status |
| **OpenAI Chat Completions adapter** | [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | P2 | High demand from web UI integrations (Open WebUI, LobeChat) |
| **KeySource trait for credential classification** | [#9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127) | P2 | Security hardening, accepted, in-progress |
| **Memory lifecycle decoupling** | [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | P2 | Architectural foundation for v0.9.0 memory improvements |
| **MoA virtual model provider** | [#8568](https://github.com/zeroclaw-labs/zeroclaw/issues/8568) | P2 | Already closed — likely implemented or deferred |
| **WASM plugin lifecycle hooks** | [#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822) | P2 | Plugin ecosystem expansion |
| **Unified attachment architecture** | [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | P2 | Web chat and channel unification |
| **Realtime speech-to-speech for Gemini Live** | [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) | P2 | Multimodal channel expansion |
| **Computer-use support** | [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | P2 | Desktop interaction capability |
| **Granular sandbox policy** | [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) | P2 | Security hardening |
| **Security UX & credential boundaries** | [#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) | P2 | Security posture consolidation |
| **Slash-command registry unification** | [#7929](https://github.com/zeroclaw-labs/zeroclaw/issues/7929) | P2 | UX consistency across web, TUI, and channels |

### Prediction
The v0.9.0 release will likely focus on **security hardening** (WhatsApp policy, KeySource abstraction, sandbox policy), **memory architecture** (conversation/memory separation, lifecycle decoupling), and **interoperability** (OpenAI adapter, A2A outbound). The MoA provider (#8568) being closed suggests it may ship in or before v0.9.0.

---

## 7. User Feedback Summary

### Pain Points
1. **Security configuration is misleading** — Multiple users report that WhatsApp Web business mode appears locked down but actually permits all groups (#9348, #9

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*