# OpenClaw Ecosystem Digest 2026-09-05

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-09-04 22:16 UTC

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



# OpenClaw Project Digest — 2026-09-05

## 1. Today's Overview

OpenClaw is exhibiting **very high development velocity** with 500 issues and 500 PRs updated in the last 24 hours. 93 issues were closed and 165 PRs merged or closed today, indicating strong maintainer responsiveness despite no new release. The project is in a dense regression-bug phase following the 2026.8.x releases, with diamond-lobster-rated stability issues dominating the top of the tracker. Activity is concentrated around session-state integrity, channel transport reliability, and gateway process stability.

## 2. Releases

No new releases published today. The latest stable versions remain in the 2026.8.x range; several reported bugs are confirmed regressions from 2026.7.x → 2026.8.x upgrades.

## 3. Project Progress

**Closed/Merged today:**

- **[PR #137184](https://github.com/openclaw/openclaw/pull/137184)** — *perf(compaction): summarize in one pass* when history fits the summarizer window. Fixes #110564. Reduces compaction latency for mid-length sessions.
- **[PR #138628](https://github.com/openclaw/openclaw/pull/138628)** — *improve(memory): avoid redundant cache reads during reindexing.* Eliminates duplicate embedding-vector loads when providers declare equivalent model identities.
- **[PR #138413](https://github.com/openclaw/openclaw/pull/138413)** — *fix(discord): preserve code across message boundaries.* Long inline commands no longer render as literal backticks after crossing Discord's message-size limits.
- **[PR #137593](https://github.com/openclaw/openclaw/pull/137593)** — *fix(memory): make search deadline configurable.* Adds `memory.search.timeoutMs` (1–120 s), enabling operators to tune search for large corpora.
- **[Issue #135171](https://github.com/openclaw/openclaw/issues/135171)** (CLOSED) — Gateway crash-loop on 2026.8.1/8.2 due to Perplexity provider capability consent was resolved.
- **[Issue #137750](https://github.com/openclaw/openclaw/issues/137750)** (CLOSED) — Memory-only search stalling gateway on a clean 623-chunk index was fixed.
- **[Issue #131807](https://github.com/openclaw/openclaw/issues/131807)** (CLOSED) — System-agent conversations sharing a single Codex session key and invalidating fresh turns was resolved.
- **[Issue #137024](https://github.com/openclaw/openclaw/issues/137024)** (CLOSED) — NO_REPLY silence defeated by settled-turn fallback placeholder was fixed.

**Notable open PRs awaiting review/proof:**

- **[PR #138394](https://github.com/openclaw/openclaw/pull/138394)** — Resume interrupted delegated tasks after gateway restarts (high merge-risk: message-delivery, security-boundary).
- **[PR #129144](https://github.com/openclaw/openclaw/pull/129144)** / **[PR #129186](https://github.com/openclaw/openclaw/pull/129186)** — Talk realtime route fixes: keep opaque routes out of public config; bind realtime delegation ownership.
- **[PR #138645](https://github.com/openclaw/openclaw/pull/138645)** — Keep settled-tool placeholders out of message-tool-only chats (follows up on #137024).
- **[PR #138666](https://github.com/openclaw/openclaw/pull/138666)** — Control UI context meter now measures against effective token budget, not catalog window.
- **[PR #138626](https://github.com/openclaw/openclaw/pull/138626)** — Preserve GPT-6 reasoning without catalog metadata.

## 4. Community Hot Topics

| Rank | Issue | Comments | Rating | Link |
|------|-------|----------|--------|------|
| 1 | Subagent completion silently lost on timeout | 26 | 🦞 diamond | [#44925](https://github.com/openclaw/openclaw/issues/44925) |
| 2 | Tiered bootstrap file loading for context control | 17 | 🌊 tidepool | [#22438](https://github.com/openclaw/openclaw/issues/22438) |
| 3 | Session transcript projection livelock under sustained writes | 15 | 🦞 diamond | [#115908](https://github.com/openclaw/openclaw/issues/115908) |
| 4 | Umbrella: duplicate transcript/replay across channels | 14 | 🦐 gold | [#69208](https://github.com/openclaw/openclaw/issues/69208) |
| 5 | Companion-friendly SQLite transcript seams | 14 | 🌊 tidepool | [#79902](https://github.com/openclaw/openclaw/issues/79902) |
| 6 | Reduce tool schema token overhead (~3,500 tok/session) | 11 | 🦞 diamond | [#14785](https://github.com/openclaw/openclaw/issues/14785) |
| 7 | Unreaped hook/tool child-process zombie accumulation | 10 | 🦐 gold | [#97616](https://github.com/openclaw/openclaw/issues/97616) |
| 8 | NO_REPLY suppression ignores silentReply policy | 10 | 🦪 silver | [#119401](https://github.com/openclaw/openclaw/issues/119401) |

**Analysis:** The community's top concern is **session-state integrity under concurrent or long-running workloads** — subagent result loss, transcript livelocks, and zombie processes all point to a common root: the async event-loop scheduling layer struggles under sustained write pressure. The tiered bootstrap request (#22438) and tool-schema token reduction (#14785) reflect operator pain around **context-window waste**, especially for users with large workspaces running sub-agents and cron jobs. The SQLite seams request (#79902) signals a growing ecosystem of advanced consumers who need canonical runtime-state access.

## 5. Bugs & Stability

**🔴 Diamond Lobster (P0/P1 — critical)**

| Issue | Summary | Fix PR? |
|-------|---------|---------|
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | Subagent completion silently lost — no retry/notification/auto-restart on timeout | No open fix PR |
| [#115908](https://github.com/openclaw/openclaw/issues/115908) | Session transcript projection livelock blocks main thread, stalls all transports | No open fix PR |
| [#135171](https://github.com/openclaw/openclaw/issues/135171) | 2026.8.1/8.2 gateway crash-loop (Perplexity consent) | ✅ Closed |
| [#137750](https://github.com/openclaw/openclaw/issues/137750) | Memory-only search stalls gateway (623-chunk index) | ✅ Closed |
| [#131807](https://github.com/openclaw/openclaw/issues/131807) | System-agent conversations share Codex session key, invalidate turns | ✅ Closed |
| [#137024](https://github.com/openclaw/openclaw/issues/137024) | NO_REPLY silence defeated by settled-turn fallback | ✅ Closed |
| [#137613](https://github.com/openclaw/openclaw/issues/137613) | Pre-compaction memory flush disabled on CLI backends; fix hits compactionCount trap | No open fix PR |
| [#94939](https://github.com/openclaw/openclaw/issues/94939) | 6.x state migration leaves channel conversation-store SQLite empty (0 bytes) | No open fix PR |
| [#136262](https://github.com/openclaw/openclaw/issues/136262) | openai-completions stream: bare text_delta replaying full accumulated text (n→2n oscillation) | No open fix PR |
| [#138272](https://github.com/openclaw/openclaw/issues/138272) | Android Talk drops with "no live response owner" on task-requiring turns | No open fix PR |
| [#111372](https://github.com/openclaw/openclaw/issues/111372) | Gateway infinite SIGTERM restart loop on macOS after 2026.7 upgrade | No open fix PR |
| [#83959](https://github.com/openclaw/openclaw/issues/83959) | Codex app-server startup retries exhaust before replacement server ready | No open fix PR |
| [#135111](https://github.com/openclaw/openclaw/issues/135111) | Intermittent "malformed JSON arguments" on claude-sonnet-5 (2026.8.1 regression) | No open fix PR |

**🟡 Gold Shrimp (P1 — high)**

- [#97616](https://github.com/openclaw/openclaw/issues/97616) — Unreaped hook/tool child processes cause zombie accumulation and runtime degradation. No fix PR.
- [#129314](https://github.com/openclaw/openclaw/issues/129314) — Hidden "next-turn runtime context" message dispatched as standalone visible turn. No fix PR.
- [#132765](https://github.com/openclaw/openclaw/issues/132765) — `agents_wait` ignores timeoutSeconds, dies after ~60s as tool error. No fix PR.
- [#84983](https://github.com/openclaw/openclaw/issues/84983) — Native cron agent-turn fire saturates gateway event loop, blocking chat transports for minutes. No fix PR.
- [#91223](https://github.com/openclaw/openclaw/issues/91223) — Active memory injection collapses prompt-cache hit rate from 99.9% to 22%. No fix PR.

**🟢 Platinum Hermit (P2 — moderate)**

Multiple P2 issues remain open covering Codex bootstrap accounting (#110665), Feishu streaming latency (#91941), `sessions.describe` dropping agentId (#92960), WeChat plugin load failure (#115478), and Docker `:latest` tag regression (#112391).

**Stability assessment:** The project is experiencing a **regression wave** concentrated in session-state management, gateway event-loop scheduling, and provider-consent flows introduced in 2026.8.x. 4 diamond/p0 issues were closed today, but ~13 remain open with no fix PRs, suggesting the next release cycle will be dominated by stability work rather than feature delivery.

## 6. Feature Requests & Roadmap Signals

| Issue | Summary | Likelihood |
|-------|---------|------------|
| [#22438](https://github.com/openclaw/openclaw/issues/22438) | Tiered bootstrap file loading for progressive context control | **High** — directly addresses widespread context-waste complaints; linked PRs exist |
| [#14785](https://github.com/openclaw/openclaw/issues/14785) | Reduce tool schema token overhead (~3,500 tok/session fixed cost) | **High** — diamond-rated, affects every session; known bottleneck |
| [#79902](https://github.com/openclaw/openclaw/issues/79902) | Companion-friendly SQLite transcript/session seams | **Medium** — enables third-party tooling; linked to #78595 |
| [#13219](https://github.com/openclaw/openclaw/issues/13219) | Per-model usage logging for cost tracking | **Medium** — operational visibility request; no linked PR yet |
| [#38568](https://github.com/openclaw/openclaw/issues/38568) | Inject context window % into system prompt runtime section | **Low-Medium** — UX enhancement, low risk |
| [#33975](https://github.com/openclaw/openclaw/issues/33975) | Fallback approval mode + model attribution in messages | **Low-Medium** — transparency feature |
| [#17840](https://github.com/openclaw/openclaw/issues/17840) | Opt-in reaction-triggered agent turns | **Low** — niche use case (emoji polling) |
| [#63930](https://github.com/openclaw/openclaw/issues/63930) | Support Anthropic advisor tool (server-side tool) | **Low** — provider-specific beta feature |

**Prediction:** Tiered bootstrap loading (#22438) and tool-schema token reduction (#14785) are the strongest roadmap candidates — both are high-comment, high-impact, and have known performance consequences. Per-model usage logging (#13219) is also likely given the growing operator base managing multi-model deployments.

## 7. User Feedback Summary

**Pain points:**
- **Silent data loss** is the dominant complaint: subagent results vanishing (#44925), message replay doubling content (#136262), Telegram subagents running without liveness feedback (#101656). Users report losing work with no notification or auto-restart.
- **Context-window waste** is costing users money: 3,500-token fixed tool-schema tax (#14785), full bootstrap file loads for every sub-agent and cron turn (#22438), memory injection destroying prompt-cache hit rates (#91223).
- **Event-loop saturation** from cron jobs (#84983) and transcript projection rebuilds (#115908) makes the entire gateway unresponsive to chat traffic, a severe production-issue for multi-channel operators.
- **Regression friction** from 2026.7→2026.8 upgrades: Docker `:latest` tag pointing to an older build (#112391), macOS SIGTERM loops (#111372), Perplexity consent blockers (#135171 — now closed), malformed JSON tool calls (#135111).
- **Channel-specific bugs**: Feishu full-content streaming latency (#91941), Teams thread context capping at 50 replies (#98870), Feishu `@_user_N` placeholders unresolved (#48786), WebChat reasoning stream not rendered for Kimi Code/DeepSeek Reasoner (#88079).

**Satisfaction signals:**
- Users appreciate the rapid closure of high-severity bugs (4 diamond/p0 issues resolved in a single day).
- The configurable memory search deadline (#137593 PR) shows responsiveness to operator tuning needs.
- The compact UI context meter fix (#138666 PR) addresses a real dashboard-inaccuracy complaint.

## 8. Backlog Watch

| Issue | Age | Why It Matters |
|-------|-----|----------------|

---

## Cross-Ecosystem Comparison



# Cross-Project Comparison Report — Open-Source AI Agent Ecosystem
**Date:** 2026-09-05

---

## 1. Ecosystem Overview

The personal AI agent open-source landscape in September 2026 is characterized by intense maturation activity: projects are moving from early-feature delivery into production-hardening phases, with regression bugs and session-state integrity dominating maintainer attention. Development velocity varies dramatically — from OpenClaw and ZeroClaw processing hundreds of items daily to NullClaw and ZeptoClaw in near-stagnation. The unifying direction is clear: multi-channel reliability, security hardening, context-window cost optimization, and agent-to-agent interoperability are now the central competitive differentiators, while native desktop and mobile UX polish is accelerating deployment readiness.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases | Open Fix Gaps | Health Score* |
|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | None (2026.8.x) | 13 diamond/P0 without fix | 🟡 Declining |
| **Hermes Agent** | 50 | 50 | None | 1 critical SSH regression (fixed same-day) | 🟢 Strong |
| **ZeroClaw** | 34 | 50 | None (v0.8.5 tracker) | 4 S1 unfixed | 🟡 Active/Stressed |
| **CoPaw / QwenPaw** | 28 | 38 | None (2.2.x beta) | 6 high-severity unfixed | 🟢 Strong |
| **LobsterAI** | ~1 stale | 34 | **v2026.9.4, v2026.9.3** | 1 critical stale (5mo) | 🟢 Healthy |
| **PicoClaw** | 4 | 19 | None | 1 high (QQ/ARM 401) | 🟡 Moderate |
| **NanoBot** | 4 | 30 | None | 0 critical | 🟢 Healthy |
| **IronClaw** | 6 | 15 | None | 1 medium (cancel API) | 🟢 Healthy |
| **NanoClaw** | 0 | 13 | None | 1 critical (PreCompact OOM) | 🟡 Stalled |
| **Moltis** | 0 | 1 | None | None | 🔵 Quiet |
| **NullClaw** | 1 | 0 | None | None | 🔵 Dormant |
| **TinyClaw** | 0 | 0 | None | None | 🔴 Inactive |
| **ZeptoClaw** | 0 | 0 | None | None | 🔴 Inactive |

*Health Score reflects velocity × stability × release cadence. 🟢 Healthy / 🟡 Moderate / 🔵 Quiet / 🔴 Dormant

---

## 3. OpenClaw's Position

**Advantages vs. peers:** OpenClaw operates at a scale unmatched in the ecosystem — 500 issues and 500 PRs in 24 hours dwarfs every other project. Its channel transport breadth (Discord, Feishu, Telegram, WeChat, Teams, WebChat, Slack) and deep gateway architecture make it the most versatile multi-channel agent. The project's diamond-lobster severity rating system provides granular triage visibility that no other project matches.

**Technical approach differences:** Unlike LobsterAI (desktop-first Electron app) and NanoBot (TUI/WebUI CLI), OpenClaw is a gateway-centric architecture where the event loop is both its greatest strength and its most acute weakness — session-state integrity failures under sustained write pressure (#115908 livelock, #44925 subagent result loss) are symptoms of an event-loop bottleneck that no other project discusses at this scale. CoPaw shares the multi-channel ambition but focuses on governance and permission models; ZeroClaw takes a Rust-based, security-first approach to channel protocols.

**Community size comparison:** OpenClaw's issue volume (500+ daily) suggests the largest active user base by far. Hermes Agent (~50) and ZeroClaw (~34) follow at roughly 10% of OpenClaw's throughput. LobsterAI and CoPaw occupy a middle tier. NullClaw, TinyClaw, and ZeptoClaw operate at negligible current engagement.

---

## 4. Shared Technical Focus Areas

| Focus Area | Projects Involved | Specific Need |
|---|---|---|
| **Session-state / concurrency integrity** | OpenClaw, CoPaw, Hermes, ZeroClaw | Subagent result loss (#44925), message queue stalls (#7534), WS reconnect kills (#103181), cron silence (#10593) |
| **Context-window cost optimization** | OpenClaw, NanoBot, ZeroClaw, IronClaw | Tool-schema fixed overhead (~3,500 tok/session, #14785), full bootstrap per sub-agent (#22438), prompt-cache hit collapse (#91223) |
| **Provider compatibility / header requirements** | NanoBot, ZeroClaw, PicoClaw, IronClaw | OpenCode `x-opencode-session` header deadline (#5661/#10603), Go model breakage, strict-mode compat (#1683) |
| **Security hardening** | Hermes, NanoClaw, ZeroClaw, PicoClaw | SSH auth regression (#102930), container mount bypass (#3680), empty-allowlist security gap (#9397), default-deny `computer_use` (#103232) |
| **Multi-agent / A2A communication** | NanoClaw, ZeroClaw, CoPaw | Sender identity preservation (#3718), delivery failure feedback (#3719), verbatim gateway send RFC (#10050) |
| **Observability & tracing** | NanoBot, CoPaw, Hermes | Langfuse tracing (#5490), per-model usage logging (#13219), model speed display (#5660) |
| **Desktop/mobile UX parity** | LobsterAI, Hermes, CoPaw, IronClaw | Right-click copy missing (#7545), slash-command menu regressions (#8063-8066), native mobile app request (#11911) |
| **Self-hosting flexibility** | NullClaw, ZeroClaw, CoPaw | Configurable search endpoints (#993), pluggable relational storage (#7558), per-user sandboxed executor (#7903) |
| **Memory / embedding lifecycle** | OpenClaw, CoPaw, NanoBot | Memory injection destroying prompt-cache (#91223), ReMe silent failures (#7469), idle summary cache unbounded (#5664) |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | Hermes Agent | LobsterAI | NanoBot | ZeroClaw | CoPaw | NanoClaw |
|---|---|---|---|---|---|---|---|
| **Primary interface** | Gateway + multiple channels | Desktop app + CLI | Electron desktop app | CLI + WebUI | Rust CLI/desktop | Desktop + Web console | Docker/containerized |
| **Architecture** | Node.js, event-loop gateway | TypeScript/Electron | Electron + React | Rust | Rust-first | Python/Tauri | Node.js + containers |
| **Target user** | Power users, multi-channel ops | Desktop power users, SSH workflows | Consumers, Chinese-market users | CLI developers, OpenCode users | Security-conscious self-hosters | Enterprise teams, multi-tenant | Platform operators, agent swarms |
| **Key differentiator** | Channel breadth & gateway depth | SSH desktop integration, skills hub | In-app browser, cowork auth flow | OpenCode/OpenTUI stack, provider speed | Security-first RFC process, Rust stack | Governance enforcement, memory lifecycle | Container isolation, A2A protocol |
| **Release cadence** | Slow (regression triage) | Medium (stabilization batches) | **Fast** (bi-weekly versions) | Slow (pre-release) | Steady (v0.8.5 track) | Medium (2.2.x beta) | Slow (no releases) |
| **Pricing model** | Open source, self-host | Freemium skills hub | Subscription (cowork) | Open source | Open source | Open source + Hub | Open source |

---

## 6. Community Momentum & Maturity

**Tier 1 — Rapid Iteration (high velocity, active triage):**
- **OpenClaw:** Maximum throughput but in regression-heavy stabilization; velocity is high-quality signal (500 daily items) but the sheer volume of unfixed diamond issues indicates architectural debt from 2026.8.x changes.
- **Hermes Agent:** 50/50 issue-PR ratio with rapid root-cause resolution (SSH 401 bug fixed within hours). Pre-release consolidation phase.
- **ZeroClaw:** 84 total touches daily with disciplined RFC governance; v0.8.5 stabilization tracker is active. Strong security culture.

**Tier 2 — Steady Development (moderate velocity, focused scope):**
- **CoPaw / QwenPaw:** 66 touches daily, strong governance and memory-lifecycle investment, 10 issues closed today. Entering 2.2.x stabilization.
- **LobsterAI:** 34 PRs with **two tagged releases** — the only project shipping regular versioned builds. Fast feedback loop on browser and subscription features.
- **NanoBot:** 30 PRs, targeted fixes (memory bounding, WebUI observability). Pre-release stabilization with clear roadmap.
- **IronClaw:** 21 touches, balanced between exploration and improvement, good contributor diversity.

**Tier 3 — Low Activity (maintenance or dormant):**
- **PicoClaw:** 23 touches but zero issue closures — merges are outpacing bug resolution.
- **NanoClaw:** 13 updates, zero closures — backlog growing faster than resolution.
- **Moltis:** 1 open PR, stable but minimal momentum.
- **NullClaw, TinyClaw, ZeptoClaw:** Effectively dormant; insufficient activity for meaningful trend analysis.

---

## 7. Trend Signals

**1. Event-loop scheduling is the industry's shared Achilles' heel.**
OpenClaw's transcript livelock (#115908), cron saturation (#84983), and subagent result loss (#44925); CoPaw's Feishu consumer stall (#7534); Hermes's SIGTERM race (#103191) — all point to a structural challenge: as agents grow more concurrent (sub-agents, cron jobs, multi-channel), the async scheduling layer becomes the bottleneck. *Value for developers:* event-loop resilience and backpressure mechanisms are becoming table-stakes differentiators.

**2. Context-window cost is the #1 operator pain point after reliability.**
OpenClaw's 3,500-token fixed tool-schema tax (#14785), tiered bootstrap request (#22438), and memory-injection cache collapse (#91223) align with NanoBot's observability demand (#5631) and IronClaw's dynamic context-budget PR (#8053). *Value:* prompt-cache optimization, schema compression, and tiered context loading are high-ROI feature areas.

**3. Provider-header compatibility deadlines are creating urgency spikes.**
NanoBot's OpenCode `x-opencode-session` deadline (#5661, 2026-09-06) and ZeroClaw's parallel breakage (#10603) show that downstream provider changes can silently break entire user bases. *Value:* projects with flexible provider abstraction layers will retain users during provider API shifts.

**4. Agent-to-agent communication is emerging as a second-plane protocol.**
NanoClaw's A2A sender identity and failure-reporting PRs (#3718, #3719), ZeroClaw's verbatim-gateway RFC (#10050), and CoPaw's multi-tenant Hub discussion (#7318) signal that multi-agent workflows are moving from ad-hoc to protocol-driven. *Value:* A2A interoperability standards will become a key ecosystem requirement within 6–12 months.

**5. Security hardening is shifting from reactive to default-deny.**
Hermes's default-deny `computer_use` (#103232), NanoClaw's mount-security bypass fix (#3680), ZeroClaw's empty-allowlist RFC (#9397), and Hermes's skill-ignore scavenging (#103231) collectively show a trend: security posture is becoming a primary selling point, not an afterthought. *Value:* projects that bake in least-privilege defaults will gain trust with enterprise and security-conscious users.

**6. Self-hosting configurability is the silent expectation.**
From NullClaw's hardcoded Firecrawl endpoint (#993) to CoPaw's pluggable storage request (#7558) to ZeroClaw's computer-use RFC (#6909), users increasingly expect full control over infrastructure dependencies. *Value:* environment-variable-driven configuration and pluggable backend support are becoming baseline requirements, not optional features.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



# NanoBot Project Digest — 2026-09-05

## 1. Today's Overview

NanoBot activity remains robust with 30 PRs updated in the past 24 hours (22 open, 8 merged/closed) and 4 issues closed, signaling a strong maintenance burst from the core team. No new release was published, suggesting the current work is still in pre-release stabilization. Three critical bugs were closed today, and three PRs were merged covering WebUI session handling, TUI streaming, and memory bounding fixes. The only open issue (#5661) flags a time-sensitive provider compatibility requirement ahead of a 2026-09-06 deadline.

## 2. Releases

No new releases were published in the last 24 hours.

## 3. Project Progress

**Merged / Closed PRs:**

- **[PR #5639](https://github.com/HKUDS/nanobot/pull/5639)** — Stabilized session labels, upgraded OpenTUI from 0.5.3→0.5.10 so streamed fenced code remains visible after response completion, and applied active terminal foreground to retained Markdown.
- **[PR #5660](https://github.com/HKUDS/nanobot/pull/5660)** — Added model generation speed (tokens/second) to the WebUI context-usage popover, fulfilling [Issue #5631](https://github.com/HKUDS/nanobot/issues/5631).
- **[PR #5657](https://github.com/HKUDS/nanobot/pull/5657)** — Extracted typed outbound wire encoders (`recovery_state`, `turn_end`) from `WebSocketChannel` into a shared `send_payload` primitive, improving code clarity and persistence policy.

**Notable Open PRs Advancing Features:**

- **[PR #5662](https://github.com/HKUDS/nanobot/pull/5662)** — Implements the `x-opencode-session` header for OpenCode Zen/Go session affinity, required before 2026-09-06.
- **[PR #5656](https://github.com/HKUDS/nanobot/pull/5656)** — Makes context compaction events observable across channels via structured lifecycle events and `/compact` command.
- **[PR #5666](https://github.com/HKUDS/nanobot/pull/5666)** — Adds aimlapi.com as a built-in OpenAI-compatible gateway provider (400k+ users, 1000+ models).
- **[PR #5626](https://github.com/HKUDS/nanobot/pull/5626)** — Introduces `copy_file` and `move_file` as first-class filesystem tools.

## 4. Community Hot Topics

- **[Issue #5631](https://github.com/HKUDS/nanobot/issues/5631)** — Request to display context and model-speed information in the WebUI. The demand mirrors deepseek-harness-like observability; now fulfilled via PR #5660. Underlying need: users want real-time feedback on model performance and context consumption during extended sessions.
- **[Issue #5661 / PR #5662](https://github.com/HKUDS/nanobot/issues/5661)** — OpenCode's official announcement mandates the `x-opencode-session` header by 2026-09-06 or risk losing prompt-cache optimization and facing errors. This is the most time-sensitive item and has already been addressed in PR #5662.
- **[PR #5490](https://github.com/HKUDS/nanobot/pull/5490)** — Clarifies aggregate turn token usage in WebUI tooltips, addressing ongoing confusion around cumulative vs. per-request token reporting.
- **[PR #5520](https://github.com/HKUDS/nanobot/pull/5520)** — Adds Langfuse tracing support for the Codex provider, responding to community demand for production-grade observability beyond the existing OpenAI-compatible SDK trick.

## 5. Bugs & Stability

| Severity | Item | Description | Fix PR |
|----------|------|-------------|--------|
| **High** | [Issue #5645](https://github.com/HKUDS/nanobot/issues/5645) | `Current Time` runtime context block disappeared in 0.3.0 despite prior documentation | Closed — regression from 0.2.2 behavior |
| **High** | [Issue #5644](https://github.com/HKUDS/nanobot/issues/5644) | Channel locale registry drops a locale (e.g., `en`) when two locales load concurrently at startup | Closed — race condition in `loadChannelLocale()` |
| **Medium** | [PR #5665](https://github.com/HKUDS/nanobot/pull/5665) | MCP browser OAuth flows accumulate without limit until 5-minute expiry; rapid restarts cause unbounded memory growth | PR #5665 adds capacity bound |
| **Medium** | [PR #5664](https://github.com/HKUDS/nanobot/pull/5664) | Idle summary cache (`AutoCompact._summaries`) grows without limit as abandoned sessions are never cleaned | PR #5664 adds bounded dictionary |
| **Medium** | [PR #5663](https://github.com/HKUDS/nanobot/pull/5663) | Mattermost thread context set (`_thread_context_attempted`) has no size limit or eviction, causing indefinite memory growth | PR #5663 adds bound |
| **Low** | [Issue #5647 / PR #5648 & #5658](https://github.com/HKUDS/nanobot/issues/5647) | WebUI session titles not generated when frontend envelope omits `webui: true` flag, even for already-marked sessions | Two PRs addressing root cause and guard logic |

**Summary:** Three high-severity bugs were closed today; three memory-bounding fixes (PRs #5665, #5664, #5663) address a systemic pattern of unbounded caches across providers and channels, indicating a coordinated stability sweep.

## 6. Feature Requests & Roadmap Signals

- **[PR #5659](https://github.com/HKUDS/nanobot/pull/5659)** — Opt-out flag for ephemeral runtime-context blocks, letting providers attach session-constant metadata without replaying it every turn. Signals a roadmap direction toward more granular runtime-context lifecycle control.
- **[PR #5656](https://github.com/HKUDS/nanobot/pull/5656)** — Manual `/compact` command plus structured lifecycle events for all compaction types (manual, capacity, provider-native, truncation, idle-timeout). Suggests context compaction is becoming a first-class user-facing feature.
- **[PR #5626](https://github.com/HKUDS/nanobot/pull/5626)** — `copy_file` / `move_file` filesystem tools address a recurring tooling gap where models had to chain `read_file` → `write_file` to copy files.
- **[PR #5666](https://github.com/HKUDS/nanobot/pull/5666)** — aimlapi.com provider integration expands the built-in provider catalog toward aggregator services.
- **[PR #4551 / #4549](https://github.com/HKUDS/nanobot/pull/4551)** — Long-standing heartbeat enhancements (`isolatedSession`, `modelOverride`) remain open, indicating ongoing investment in background health/heartbeat infrastructure.

## 7. User Feedback Summary

- **Observability is a top priority.** Users repeatedly request visibility into context usage, token counts, and generation speed (Issues #5631, PRs #5660, #5490). Satisfaction is growing with the latest popover improvements.
- **Regression sensitivity is high.** The loss of `Current Time` runtime context in 0.3.0 ([Issue #5645](https://github.com/HKUDS/nanobot/issues/5645)) triggered immediate reporting, indicating users rely heavily on runtime-context blocks for baseline functionality.
- **Provider compatibility anxiety.** The OpenCode header requirement ([Issue #5661](https://github.com/HKUDS/nanobot/issues/5661)) with a hard deadline caused urgency; users depend on nanobot for prompt-cache savings and cannot afford errors post-2026-09-06.
- **WebUI session management friction.** Multiple bugs around session title generation and locale loading ([Issues #5644, #5647](https://github.com/HKUDS/nanobot/issues/5647)) suggest the WebUI channel layer needs more defensive coding around concurrent initialization.

## 8. Backlog Watch

| Item | Age | Priority | Note |
|------|-----|----------|------|
| [PR #5520](https://github.com/HKUDS/nanobot/pull/5520) — Langfuse tracing for Codex | ~11 days | P2 | Awaiting merge; significant observability gap |
| [PR #5626](https://github.com/HKUDS/nanobot/pull/5626) — `copy_file` / `move_file` tools | ~4 days | P2 | Open; frequently requested |
| [PR #4551](https://github.com/HKUDS/nanobot/pull/4551) — Heartbeat `isolatedSession` | ~71 days | P2 | Long-open; heartbeat feature parity |
| [PR #4549](https://github.com/HKUDS/nanobot/pull/4549) — Heartbeat `modelOverride` | ~71 days | P2 | Same as above |
| [PR #5431](https://github.com/HKUDS/nanobot/pull/5431) — Background task failure reporting | ~18 days | P2 | Stability-critical; open since Aug 18 |
| [PR #5379](https://github.com/HKUDS/nanobot/pull/5379) — Preserve full consolidation input | ~23 days | P2 | Memory/history correctness; open |
| [PR #5490](https://github.com/HKUDS/nanobot/pull/5490) — Clarify aggregate turn token usage | ~14 days | P2 | Token-usage transparency; open |
| [PR #5504](https://github.com/HKUDS/nanobot/pull/5504) — Surface model retry status | ~12 days | P2 | UX reliability; open |

**Recommended attention:** PRs #4551 and #4549 (heartbeat features, 71+ days old) and PR #5431 (background task error reporting, 18+ days) are the most notable stagnating items. PR #5662 (OpenCode header) should be merged before 2026-09-06 to avoid breaking existing users.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>



# Hermes Agent Project Digest — 2026-09-05

## 1. Today's Overview

Hermes Agent is experiencing **very high development velocity**, with 50 issues and 50 PRs updated in the last 24 hours and zero new releases — suggesting an active pre-release stabilization cycle. A cluster of P1-severity bugs emerged today around Desktop SSH authentication (issues #102930, #103203, #103234, #103145), all tracing to a single root cause: `_SESSION_TOKEN` captured at import time rather than at request time. Multiple fix PRs (#102948) and security patches (#103233, #103232) landed the same day, indicating responsive triage. No new releases were published, but the volume of open PRs (49) signals a pending release batch.

## 2. Releases

**None.** Zero new releases published. The high issue/PR turnover without a release tag suggests the team is in a consolidation phase, likely preparing for an upcoming version that will address today's critical SSH auth regressions and security fixes.

## ## 3. Project Progress

### Merged/Closed Today
- **#103186** — Desktop tooltip refactor: replaced native `title` tooltips with shared `Tip` component for gallery listing ([PR](https://github.com/NousResearch/hermes-agent/pull/103186))
- **#76577** — Docker binary file mount bug closed ([Issue](https://github.com/NousResearch/hermes-agent/issues/76577))
- **#35396** — Supertonic TTS feature closed (likely deferred or marked duplicate) ([Issue](https://github.com/NousResearch/hermes-agent/issues/35396))
- **#7237** — Output truncation bug closed after 57 comments ([Issue](https://github.com/NousResearch/hermes-agent/issues/7237))

### Key PRs Advancing Today
- **#102948** — Fixes Desktop SSH 401 loop by serving the current session token via late-binding dependency seam ([PR](https://github.com/NousResearch/hermes-agent/pull/102948))
- **#103233** — Security fix for GHSA-9f4c-93c8-jc8g / CVE-2026-70608: corrects `setWindowOpenHandler` to actually launch OS browser before denying ([PR](https://github.com/NousResearch/hermes-agent/pull/103233))
- **#103232** — Default-deny approval for `computer_use` destructive actions ([PR](https://github.com/NousResearch/hermes-agent/pull/103232))
- **#101435** — Fixes cross-gateway Bot Chat reply completion loss ([PR](https://github.com/NousResearch/hermes-agent/pull/101435))
- **#103227** — Stops hydrating inline base64 images in session search results ([PR](https://github.com/NousResearch/hermes-agent/pull/103227))
- **#103228** — Prevents importing disabled provider plugins ([PR](https://github.com/NousResearch/hermes-agent/pull/103228))
- **#103231** — Stops honoring a fetched skill bundle's own `.skillignore` (security hardening) ([PR](https://github.com/NousResearch/hermes-agent/pull/103231))
- **#103229** — Forwards `OP_BIOMETRIC_UNLOCK_ENABLED` to 1Password child process ([PR](https://github.com/NousResearch/hermes-agent/pull/103229))
- **#103239** — Fixes API media streaming for split delta markers ([PR](https://github.com/NousResearch/hermes-agent/pull/103239))
- **#102748** — Disambiguates same-URL/custom-provider configs by persisted `api_mode` ([PR](https://github.com/NousResearch/hermes-agent/pull/102748))
- **#58699** — Python 3.14 `_worker` signature compatibility fix ([PR](https://github.com/NousResearch/hermes-agent/pull/58699))
- **#92839** — Advertises reasoning-effort ladder in `/v1/capabilities` endpoint ([PR](https://github.com/NousResearch/hermes-agent/pull/92839))

## 4. Community Hot Topics

| Issue | Comments | 👍 | Topic |
|-------|----------|----|-------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | 156 | 0 | Skills index stale/degraded — automated freshness probe failing |
| [#88584](https://github.com/NousResearch/hermes-agent/issues/88584) | 64 | 0 | Automated Nous-to-Enterkey merge blocked by cron conflicts |
| [#7237](https://github.com/NousResearch/hermes-agent/issues/7237) | 57 | 7 | Response truncation on long-form CLI/gateway output |
| [#11911](https://github.com/NousResearch/hermes-agent/issues/11911) | 6 | 1 | Native mobile app with voice calling |
| [#26277](https://github.com/NousResearch/hermes-agent/issues/26277) | 5 | 2 | Email session isolation by normalized subject |
| [#2667](https://github.com/NousResearch/hermes-agent/issues/2667) | 4 | 3 | Searchable compressed context buffer for current sessions |

**Analysis:** The top-voted issue (#66616) reflects growing dependency on the Skills Hub with users noticing index staleness — a reliability signal as the ecosystem scales. The blocked merge (#88584) highlights integration friction between Nous and Enterkey cron infra. Issue #7237 (57 comments, 7 upvotes) is a persistent pain point for power users generating long outputs across gateways. The mobile app request (#11911) and session isolation feature (#26277) show demand for broader platform coverage and finer-grained session control.

## 5. Bugs & Stability

### P1 — Critical
- **Desktop SSH 401 loop** ([#102930](https://github.com/NousResearch/hermes-agent/issues/102930), [#103203](https://github.com/NousResearch/hermes-agent/issues/103203), [#103145](https://github.com/NousResearch/hermes-agent/issues/103145), [#103234](https://github.com/NousResearch/hermes-agent/issues/103234)): Multiple reports confirm a regression from commit `d3630f8532` where `_SESSION_TOKEN` is captured at import time in `web_server_dashboard.py`, before `--ssh-session-token-file` is applied. Every API call returns `401 Unauthorized`. **Fix PR #102948** addresses this directly.
- **Gateway SIGTERM race** ([#103191](https://github.com/NousResearch/hermes-agent/issues/103191)): SIGTERM during gateway startup exits 0, causing s6 `finish` to treat it as intentional stop — gateway stays down indefinitely with no supervisory restart.

### P2 — High
- **Bot Mode Bots tab missing** ([#101535](https://github.com/NousResearch/hermes-agent/issues/101535)): Not appearing in Hermes Desktop v0.21.0 on Windows.
- **Desktop WS reconnect flap killing turns** ([#103181](https://github.com/NousResearch/hermes-agent/issues/103181)): WebSocket reconnect silently kills queued turns with zero user feedback.
- **WhatsApp duplicate message replay** ([#100481](https://github.com/NousResearch/hermes-agent/issues/100481)): Old messages re-delivered on every reconnect, causing 40+ identical replies.
- **Desktop renderer re-render loop** ([#98394](https://github.com/NousResearch/hermes-agent/issues/98394)): 30–65% idle CPU, chat content flashes as renderer unmounts/remounts cyclically.
- **Desktop session branching fails on long transcripts** ([#103139](https://github.com/NousResearch/hermes-agent/issues/103139)): "Session transcript exceeds safe-load limit" error blocks branching.
- **macOS computer_use form filling broken** ([#103157](https://github.com/NousResearch/hermes-agent/issues/103157)): CGEvent keystrokes rejected by Electron webviews and Google Console inputs; TCC screen-recording gap.
- **Cron session deletion broken** ([#91386](https://github.com/NousResearch/hermes-agent/issues/91386)): Cron run transcripts cannot be deleted from GUI after migration to Cron Jobs / Run history.
- **Skill agent infinite loop** ([#101418](https://github.com/NousResearch/hermes-agent/issues/101418)): `skill_manage create` loops 38 turns sending `file_content` instead of `content`.
- **Egress sandbox connectivity** ([#81281](https://github.com/NousResearch/hermes-agent/issues/81281)): Rootless Docker bind topology + secrets `require: true` rejecting synthetic CONNECT.

### P3/P4 — Medium/Low
- **1Password `op` CLI hangs on macOS** ([#60674](https://github.com/NousResearch/hermes-agent/issues/60674)) — Fix PR #103229 submitted.
- **Status bar session timer dual semantics** ([#103123](https://github.com/NousResearch/hermes-agent/issues/103123)): Timer jumps between 0:05 and 23:03:00 based on focus.
- **Documented config key warns "not recognized"** ([#103149](https://github.com/NousResearch/hermes-agent/issues/103149)): `delegation.worktree_isolation` accepted at runtime but warnings on set.
- **Docker binary file mount** ([#76577](https://github.com/NousResearch/hermes-agent/issues/76577)) — Closed.

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Comments | 👍 | Outlook |
|---------|-------|----------|----|---------|
| GPT-6 Astra support | [#103015](https://github.com/NousResearch/hermes-agent/issues/103015) | 4 | 0 | Likely next release — model compatibility tracking issue opened same day as request |
| Python 3.14 support | [#48723](https://github.com/NousResearch/hermes-agent/issues/48723) | 3 | 0 | Fix PR #58699 exists; pin upgrade probable in next minor |
| Native mobile app (iOS/Android) + voice | [#11911](https://github.com/NousResearch/hermes-agent/issues/11911) | 6 | 1 | Long-term roadmap; no active PR |
| Project-level context injection | [#95820](https://github.com/NousResearch/hermes-agent/issues/95820) | 2 | 1 | Related to #94643 (Project Manager UI); scoped sessions/memory/skills |
| Email session isolation by subject | [#26277](https://github.com/NousResearch/hermes-agent/issues/26277) | 5 | 2 | Opt-in gateway mode; moderate complexity |
| Current-session searchable context buffer | [#2667](https://github.com/NousResearch/hermes-agent/issues/2667) | 4 | 3 | Addresses compression blind spot; high user interest |
| Cheap desktop backend boot + lean chat plane | [#94484](https://github.com/NousResearch/hermes-agent/issues/94484) | 3 | 0 | Architectural refactor; split-boot design |
| `/v1/capabilities` reasoning-effort ladder | [#92839](https://github.com/NousResearch/hermes-agent/pull/92839) | — | 0 | PR open; likely next release |

**Prediction:** GPT-6 Astra support and Python 3.14 compatibility are the most likely inclusions in the next release given active fix PRs. Project-level context and the capabilities endpoint are strong candidates for the following cycle.

## 7. User Feedback Summary

**Pain points:**
- **SSH auth regression** is the dominant complaint today — multiple users hitting the same 401 loop on fresh installs and after `hermes update`, with one user reporting 40+ minutes of repeated failure ([#102930](https://github.com/NousResearch/hermes-agent/issues/102930), [#103234](https://github.com/NousResearch/hermes-agent/issues/103234)).
- **WhatsApp message replay** on reconnect is causing real user frustration — one wife's single query triggered ~40 identical replies over 7 hours ([#100481](https://github.com/NousResearch/hermes-agent/issues/100481)).
- **Long-output truncation** remains an unresolved friction point for CLI and gateway users ([#7237](https://github.com/NousResearch/hermes-agent/issues/7237)).
- **macOS GUI automation** limitations (Electron webview rejection, TCC gaps) block real-world computer-use tasks that work on Windows ([#103157](https://github.com/NousResearch/hermes-agent/issues/103157)).
- **1Password biometric unlock** not reaching the `op` child process breaks app-integration workflows on macOS ([#60674](https://github.com/NousResearch/hermes-agent/issues/60674)).

**Positive signals:**
- Responsive maintainer engagement — SSH bug root-caused and fixed within hours ([#102948](https://github.com/NousResearch/hermes-agent/pull/102948)).
- Security hardening underway: default-deny for `computer_use` ([#103232](https://github.com/NousResearch/hermes-agent/pull/103232)), skill ignore scavenging ([#103231](https://github.com/NousResearch/hermes-agent/pull/103231)), window-open handler fix ([#103233](https://github.com/NousResearch/hermes-agent/pull/103233)).
- Desktop UX improvements continuing (tooltip refactor #103186, jump-to-prompt nav #103226).

## 8. Backlog Watch

| Issue | Age | Priority | Status | Needs |
|-------|-----|----------|--------|-------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) — Skills index stale | ~49 days | P3 | Open, 156 comments | Index rebuild cron reliability; possible infra scaling issue |
| [#88584](https://github.com/NousResearch/hermes-agent/issues/88584) — Nous merge blocked | ~19 days | P3 | Open, 64 comments | Resolve `cron/jobs.py` conflicts; merge strategy decision |
| [#11911](https://github.com/NousResearch/hermes-agent/issues/11911) — Mobile app + voice | ~141 days | P3 | Open, 6 comments | Roadmap planning; no active PR |
| [#2667](https://github.com/NousResearch/hermes-agent/issues/2667) — Session context buffer | ~166 days | P3 | Open, 4 comments, 3 👍 | Design spec needed; high community interest |
| [#26277](https://github.com/NousResearch/hermes-agent/issues/26277) — Email session isolation | ~113 days | P3 | Open, 5 comments, 2 👍 | Gateway mode design; opt-in scope |
| [#94484](https://github.com/NousResearch/hermes-agent/issues/94484) — Lean desktop boot | ~11 days | P3 | Open, 3 comments | Architectural decision; needs-maintainer-design label |
| [#48723](https://github.com/NousResearch/hermes-agent/issues/48723) — Python 3.14 support | ~78 days | P2 | Open, 3 comments | Fix PR #58699 exists; needs merge |
| [#81281](https://github.com/NousResearch/hermes-agent/issues/81281) — Rootless Docker egress | ~59 days | P2 | Open, 2 comments | Network topology + secrets interaction; needs-repro |

**Notable:** The skills index staleness issue (#66616) has accumulated 156 comments with no resolution despite being open since July — this is the project's most engaged-open issue and a potential trust risk for the Skills Hub. The Nous merge block (#88584) at 64 comments also warrants timely maintainer intervention. Python 3.14 support (#48723) has a ready fix PR and should be unblocked in the next cycle.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



# PicoClaw Project Digest — 2026-09-05

## 1. Today's Overview
PicoClaw is experiencing very high PR throughput with 19 merges/closures in the past 24 hours, indicating an active sprint or triage phase, yet zero issue closures and no new releases suggest these changes are not yet consolidated into a tagged version. Four open issues were updated today, none closed, reflecting a backlog that is growing faster than it is being resolved. The project health picture is mixed: strong contributor momentum on the PR side is offset by accumulating unaddressed bugs and feature requests.

## 2. Releases
No new releases were published today.

## 3. Project Progress
Today's merged/closed PRs advanced work across several domains:

| PR | Title | Domain |
|----|-------|--------|
| [#3337](https://github.com/sipeed/picoclaw/pull/3337) | Fix MCP failure hangs agent loop | Agent / MCP |
| [#1683](https://github.com/sipeed/picoclaw/pull/1683) | Implement strict mode compatibility for OpenAI-compatible providers | Provider |
| [#1854](https://github.com/sipeed/picoclaw/pull/1854) | Occurrence-aware tool call ID sanitization | Agent / Provider |
| [#1855](https://github.com/sipeed/picoclaw/pull/1855) | Support negative integers in Telegram group IDs | Channel |
| [#1858](https://github.com/sipeed/picoclaw/pull/1858) | Thinking/reasoning fallback for Ollama and OpenAI-compatible providers | Provider |
| [#1860](https://github.com/sipeed/picoclaw/pull/1860) | Azure AI Foundry host recognition | Provider |
| [#2014](https://github.com/sipeed/picoclaw/pull/2014) | Include SystemParts in token estimation and add reasoning guards | Agent |
| [#2016](https://github.com/sipeed/picoclaw/pull/2016) | Improve context overflow detection and classification | Agent |
| [#2088](https://github.com/sipeed/picoclaw/pull/2088) | Security audit for open-by-default bots | Channel / Security |
| [#2089](https://github.com/sipeed/picoclaw/pull/2089) | Resolve Slack mention race condition and unify chatID logic | Channel |
| [#2090](https://github.com/sipeed/picoclaw/pull/2090) | Fix Telegram streaming redundant drafts and routing | Channel |
| [#2091](https://github.com/sipeed/picoclaw/pull/2091) | Resolve Feishu group mention detection by probing bot name | Channel |
| [#2092](https://github.com/sipeed/picoclaw/pull/2092) | Avoid duplicate messages on Telegram streaming edit timeouts | Channel |
| [#2240](https://github.com/sipeed/picoclaw/pull/2240) | Support GitHub Copilot stdio transport | Provider |
| [#2260](https://github.com/sipeed/picoclaw/pull/2260) | Add xAI compatible provider support | Provider |
| [#2298](https://github.com/sipeed/picoclaw/pull/2298) | Fail closed on ambiguous script preflight | Tool / Exec |
| [#2522](https://github.com/sipeed/picoclaw/pull/2522) | Request stream usage for OpenAI-compatible provider | Provider |
| [#2624](https://github.com/sipeed/picoclaw/pull/2624) | Add OpenAI-compatible embeddings support | Provider |
| [#2810](https://github.com/sipeed/picoclaw/pull/2810) | Sync with upstream/main (~1095 commits) | Maintenance |

Additionally, PR [#3367](https://github.com/sipeed/picoclaw/pull/3367) (open) adds Pilot MCP setup documentation to the quick-start guide.

**Key takeaways:** A significant wave of channel-stability fixes (Telegram, Slack, Feishu), provider robustness improvements (strict mode, thinking fallbacks, embeddings, xAI), and agent hardening (context overflow, token estimation, MCP hang) landed today. The upstream sync in #2810 suggests the fork is catching up to a large number of upstream commits.

## 4. Community Hot Topics
The most-discussed open issues today:

- **[Issue #3287](https://github.com/sipeed/picoclaw/issues/3287)** — *Better support for long messages in IRC* (10 comments, stale). Users need PicoClaw to reassemble IRCv3 long messages into a single cohesive input rather than treating each 512-byte chunk as a separate message. This reflects a broader demand for first-class IRC protocol awareness.

- **[Issue #3281](https://github.com/sipeed/picoclaw/issues/3281)** — *Web UI chat input is laggy with long history* (9 comments, 2 👍). A performance pain point directly impacting daily usability. No fix PR has been raised yet.

The remaining two issues opened today (#3365, #3366) have zero comments, indicating they are very fresh.

## 5. Bugs & Stability
| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| **High** | [#3365](https://github.com/sipeed/picoclaw/issues/3365) | QQ channel returns 401 "Authorization parameter format error" on Orange Pi 3B; root cause traced to `botgo v0.2.1` + `resty >= v2.17` incompatibility | No fix PR yet |
| **Medium** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI chat input becomes very laggy when session history grows | No fix PR yet |
| **Low** | [#3287](https://github.com/sipeed/picoclaw/issues/3287) | Long IRC messages split across 512-byte boundaries are not reassembled | No fix PR yet; marked stale |

Notably, today's merged PRs include several bug fixes that address related stability areas: Telegram duplicate messages (#2092), Slack race conditions (#2089), Feishu mention detection (#2091), and MCP agent-loop hangs (#3337). However, the QQ 401 issue and the web UI lag have no upstream fix yet.

## 6. Feature Requests & Roadmap Signals
- **[Issue #3366](https://github.com/sipeed/picoclaw/issues/3366)** — *Add support for OpenAI-compatible providers*. The user proposes a custom provider for self-hosted routers like 9Router. Given that PR #1683 (strict mode compat) and PR #2522 (stream usage) have already landed in the openai_compat provider, this request aligns well with ongoing provider extensibility work and is a strong candidate for inclusion in the next release cycle.
- **[Issue #3287](https://github.com/sipeed/picoclaw/issues/3287)** — *Long message support in IRC*. This is a protocol enhancement rather than a core feature, but addresses a real gap in IRCv3 compliance.

## 7. User Feedback Summary
Real user pain points identified today:

1. **Web UI performance degrades with chat history** ([#3281](https://github.com/sipeed/picoclaw/issues/3281)): Users find the input box increasingly laggy as sessions grow, which directly impacts workflow. This has received 2 upvotes — the highest engagement on any open issue.
2. **QQ channel authentication broken on ARM** ([#3365](https://github.com/sipeed/picoclaw/issues/3365)): A user on Orange Pi 3B (aarch64) is blocked from using the QQ channel due to a dependency version conflict.
3. **IRC long-message handling is missing** ([#3287](https://github.com/sipeed/picoclaw/issues/3287): Users want PicoClaw to treat multi-chunk IRC messages as a single conversational unit.
4. **Demand for self-hosted OpenAI-compatible router support** ([#3366](https://github.com/sipeed/picoclaw/issues/3366)): Users are running local LLM infrastructure (9Router, Ollama, vLLM) and want first-class provider integration.

Satisfaction is mixed: the volume of merged PRs today shows responsive maintenance, but the lack of issue closures and the absence of a new release suggest users are not yet reaping the benefits of these fixes.

## 8. Backlog Watch
| Issue | Age | Concern |
|-------|-----|---------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | 15 days (since 2026-07-21) | Web UI lag with long history — no fix proposed; 2 upvotes |
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | 44 days (since 2026-07-22) | Long IRC message support — marked stale; 10 comments show sustained interest |
| [#3365](https://github.com/sipeed/picoclaw/issues/3365) | 1 day | QQ channel 401 on ARM — dependency-level bug requiring investigation |
| [#3366](https://github.com/sipeed/picoclaw/issues/3366) | 1 day | OpenAI-compatible custom providers — no comments yet |

**Recommendation:** Issues #3281 and #3287 have been open the longest with meaningful community engagement and should be prioritized. The QQ 401 bug (#3365) is a blocker for ARM users and warrants a quick dependency pin or workaround. The 19 PRs merged today have not yet been packaged into a release, so the community may benefit from a timely version bump to surface these fixes.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



# NanoClaw Project Digest — 2026-09-05

## 1. Today's Overview

NanoClaw is showing strong development velocity with 13 issues/PRs updated in the past 24 hours, indicating an active contributor base and responsive maintainer team. All activity is centered on open work — zero releases shipped and zero issues closed today — suggesting the project is in a tightening phase around agent-to-agent communication, container security, and reliability hardening. The dominant themes are A2A protocol fixes, mount-security hardening, and operator configurability, signaling maturation beyond early-stage feature delivery.

## 2. Releases

No new releases were published today.

## 3. Project Progress

**Merged/Closed PRs (3):**

- **#2232** [CLOSED] `chat-sdk-bridge`: Fallback to URL fetch for adapters lacking `fetchData` — resolves a long-standing compatibility gap for older channel adapters. ([link](https://github.com/nanocoai/nanoclaw/pull/2232))
- **#2231** [CLOSED] `chat-sdk-bridge`: Added `sendAsRaw` flag to bypass adapter Markdown round-trip — prevents double-encoding issues in chat output pipelines. ([link](https://github.com/nanocoai/nanoclaw/pull/2231))
- **#3461** [CLOSED] `chore(deps)`: Bumped all `@chat-adapter/*` packages from 4.29.0 → 4.38.1 and `chat` to 4.38.1 — closes a 9-minor-version dependency drift that left channel skills out of sync with the trunk `chat` package. ([link](https://github.com/nanocoai/nanoclaw/pull/3461))

**Open PRs advancing key areas:**
- **#3718 / #3719** — Agent-to-agent sender identity preservation and communication-failure reporting.
- **#3717** — Escape fix for payloads embedded in composed prompt blocks (security-relevant).
- **#3680** — Container mount-security bypass closure in `validateSpec`.
- **#3713** — Per-agent-group delivery-mode configuration plumbing.
- **#3715** — Zapier MCP tool skill addition for operator-driven integrations.
- **#3440 / #3462** — Docker-driver SELinux/mount fixes and mid-turn double-delivery guard.

## 4. Community Hot Topics

| Item | Type | Comments | Last Updated | Topic |
|------|------|----------|-------------|-------|
| [#3716](https://github.com/nanocoai/nanoclaw/issues/3716) | Issue | 2 | 2026-09-04 | PreCompact OOM crash from unbounded conversation-file growth |
| [#3718](https://github.com/nanocoai/nanoclaw/pull/3718) | PR | — | 2026-09-04 | A2A sender identity preservation |
| [#3719](https://github.com/nanocoai/nanoclaw/pull/3719) | PR | — | 2026-09-04 | A2A failure feedback to originating chat |

**Underlying needs:** The top issue (#3716) reflects a production-grade pain point — operators running long conversations are hitting OOM crashes because the `PreCompact` hook writes full conversation re-serializations without any rotation or cap. This is the most severe open reliability bug and likely the top community concern right now. The A2A PRs (#3718, #3719) address multi-agent deployment friction: agents currently can't reliably identify each other or report delivery failures, which blocks production multi-agent workflows.

## 5. Bugs & Stability

| Severity | Item | Description | Fix PR |
|----------|------|-------------|--------|
| **Critical** | [#3716](https://github.com/nanocoai/nanoclaw/issues/3716) | PreCompact hook causes production OOM crash loop via unbounded full-rewrite file creation with no rotation or cleanup | None open yet |
| **High** | [#3714](https://github.com/nanocoai/nanoclaw/issues/3714) | Operator env overrides (`CLAUDE_CODE_AUTO_COMPACT_*`, transcript rotation) silently dropped — never forwarded into session container | None open yet |
| **High** | [#3717](https://github.com/nanocoai/nanoclaw/pull/3717) | Embedded payloads in prompt blocks can forge structure by closing parent blocks (injection vector) | PR #3717 open |
| **High** | [#3680](https://github.com/nanocoai/nanoclaw/pull/3680) | Allowlisted-extra mount bypass in `validateSpec` — container isolation gap | PR #3680 open |
| **Medium** | [#3440](https://github.com/nanocoai/nanoclaw/pull/3440) | Docker driver: SELinux-blocked mounts, group-writable RW mounts, stray NUL byte | PR #3440 open |
| **Medium** | [#3462](https://github.com/nanocoai/nanoclaw/pull/3462) | Double-delivery of `send_message` content mid-turn (same class as #2404) | PR #3462 open |

No bugs were resolved today; all items remain open.

## 6. Feature Requests & Roadmap Signals

- **Zapier MCP integration** ([#3715](https://github.com/nanocoai/nanoclaw/pull/3715)): Adds an `add-zapier-tool` skill delivering hosted Zapier MCP access per agent group without exposing tokens in config. Suggests a roadmap direction toward operator-driven third-party tool onboarding.
- **Per-agent-group delivery mode** ([#3713](https://github.com/nanocoai/nanoclaw/pull/3713)): Columns and plumbing for recording which delivery contract an agent group follows, enabling model groups that can't handle `<message to>` envelopes to fall back to outbound tools. Future commits will wire the consumer side — expect this to land in the next minor release.
- **A2A protocol hardening** ([#3718](https://github.com/nanocoai/nanoclaw/pull/3718), [#3719](https://github.com/nanocoai/nanoclaw/pull/3719)): Sender identity preservation and failure feedback are prerequisites for reliable multi-agent deployments, indicating the team is prioritizing A2A as a production-ready feature.

## 7. User Feedback Summary

- **Production OOM crashes** (#3716) are the most urgent complaint — operators running compact-heavy workloads are experiencing crash loops that halt deployments.
- **Operator configurability gaps** (#3714) frustrate platform teams who expect env-var overrides to propagate into containers; the silent drop is perceived as a documentation/implementation mismatch.
- **Multi-agent reliability** is a growing theme: A2A sender identity loss and undelivered failure reports block teams from deploying agent swarms in production.
- **Dependency drift** was addressed (#3461), closing a gap that likely caused inconsistent behavior across channel skills — community reaction appears positive.

## 8. Backlog Watch

| Item | Age | Priority | Reason |
|------|-----|----------|--------|
| [#3716](https://github.com/nanocoai/nanoclaw/issues/3716) — PreCompact OOM | ~1 day | Critical | No fix PR yet; production blocker |
| [#3714](https://github.com/nanocoai/nanoclaw/issues/3714) — Env override drop | ~1 day | High | Follow-up to #1820 (months old); operator config silently broken |
| [#3680](https://github.com/nanocoai/nanoclaw/pull/3680) — Mount bypass | ~5 days | High | Security-relevant; no merge yet |
| [#3440](https://github.com/nanocoai/nanoclaw/pull/3440) — Docker driver fixes | ~14 days | Medium | Open since Aug 22; may need re-review |
| [#3462](https://github.com/nanocoai/nanoclaw/pull/3462) — Double-delivery guard | ~13 days | Medium | Open since Aug 23; relates to #2404 |

**Recommendation:** The maintainers should prioritize a fix for #3716 (PreCompact OOM) as it directly impacts production stability, and #3714 as a quick win for operator trust. The A2A PRs (#3718, #3719) are close to landing and would unlock multi-agent production use cases.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>



# NullClaw Project Digest — 2026-09-05

---

## 1. Today's Overview

NullClaw activity on 2026-09-05 remains low, with only one issue updated in the past 24 hours and zero pull requests moving through the review or merge pipeline. No new releases were published, indicating the project is in a relatively quiet maintenance phase. The single piece of today-relevant activity centers on issue #993, an enhancement request aimed at improving self-hosting flexibility. Overall project health appears stable but shows minimal momentum in both contribution and release cadence.

---

## 2. Releases

No new releases were published today. There are no version change notes, breaking changes, or migration items to report.

---

## 3. Project Progress

**Merged/Closed PRs Today:** None.

**Advancements:** No pull requests were merged or closed within the reporting window, so no features advanced and no fixes landed today. The project has zero open PRs currently awaiting review, suggesting a temporary pause in active development contributions.

---

## 4. Community Hot Topics

**Issue #993 — Make Firecrawl Search Endpoint Configurable for Self-Hosted Instances**
- Author: Crymfox | Created: 2026-08-24 | Updated: 2026-09-04 | Comments: 1 | 👍: 0
- [View Issue](https://github.com/nullclaw/nullclaw/issues/993)

**Analysis:** This is the only active open issue and the sole item updated in the last 24 hours. The request targets a hardcoded API endpoint in `src/tools/web_search_providers/firecrawl.zig`, which prevents users from running self-hosted Firecrawl instances with the native `firecrawl` search provider. The underlying need reflects a broader community expectation for self-hosted compatibility — a recurring theme in the open-source AI agent space where deployment flexibility is a key differentiator. While the issue has yet to attract upvotes or a maintainer response, its practical utility suggests it could gain traction if addressed.

---

## 5. Bugs & Stability

**No new bug reports, crashes, or regressions were filed today.** There are no stability concerns flagged in the current data. The project does not appear to have any active incidents requiring immediate attention.

---

## 6. Feature Requests & Roadmap Signals

**Feature Request — Configurable Firecrawl Endpoint (Issue #993):**
- [View Issue](https://github.com/nullclaw/nullclaw/issues/993)

User Crymfox is requesting that the hardcoded Firecrawl API URL be made configurable via environment variables or a settings file. This aligns with a common roadmap signal for AI agent frameworks: enabling self-hosted infrastructure support across all integrations, not just core components. If the next release targets improved deployment flexibility, this enhancement is a strong candidate for inclusion. A lower-hanging-fruit implementation would likely involve adding an environment variable (e.g., `NULLCLAW_FIRECRAWL_ENDPOINT`) that overrides the default, with graceful fallback to the existing hosted endpoint.

---

## 7. User Feedback Summary

**Pain Points:**
- Self-hosted Firecrawl instances are unusable with the native search provider due to a hardcoded endpoint, forcing workarounds or external tooling.

**Use Cases:**
- Users deploying NullClaw in privacy-conscious or air-gapped environments need full control over their web search backend.
- Organizations already running Firecrawl internally want to leverage that investment rather than relying on the hosted SaaS API.

**Satisfaction/Dissatisfaction:**
- Satisfaction appears generally stable with no outage or regression complaints. The primary dissatisfaction stems from the lack of configuration flexibility for third-party integrations, a gap that is increasingly common in user feedback across similar projects.

---

## 8. Backlog Watch

**Long-Unanswered Issues:**
- **Issue #993** — Open since 2026-08-24 (~12 days) with only 1 comment and 0 upvotes. No maintainer acknowledgment or assigned label. This issue is a prime candidate for backlog clearance, as it requires a relatively contained code change and addresses a clear user need. Continued lack of response could signal slower-than-usual maintainer availability or competing priorities.
  - [View Issue](https://github.com/nullclaw/nullclaw/issues/993)

No stale or abandoned PRs were detected in the current data. Maintainer attention on Issue #993 would be the most impactful next step for sustaining community engagement.

---

*Digest generated from GitHub data available as of 2026-09-05.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



# IronClaw Project Digest — 2026-09-05

## 1. Today's Overview

IronClaw shows strong daily activity with 6 open issues and 15 PRs updated in the last 24 hours, though no new releases were shipped. The workflow is balanced toward exploration and improvement rather than stabilization — most PRs are open and in review, with only 2 merged/closed. The project is in an active development phase, with sustained contributions from both core maintainers (henrypark133, italic-jinxin, thisisjoshford) and new contributors (jlwaugh, serrrfirat). Infrastructure health is solid: architecture tests and CI timeouts were tuned, and the codebase knowledge graph was refreshed.

## 2. Releases

No new releases were published in the reporting window.

## 3. Project Progress

**Merged / Closed Today:**

- **#8062** (closed) — LLM cache: sends conversation cache keys on OpenAI request paths. Derives a stable pseudonymous prompt-cache key per conversation and forwards it across all supported OpenAI-compatible model requests, improving cache hit rates on repeated conversations. [PR #8062](https://github.com/nearai/ironclaw/pull/8062)
- **#8060** (closed) — CI: gave whole-tree architecture scans real timeout headroom. The three `ironclaw_architecture_tests` binaries previously ran dangerously close to the 60s × 3 limit; margins have been increased. [PR #8060](https://github.com/nearai/ironclaw/pull/8060)

**Notable Open PRs Advancing:**

- **#8053** — LLM loop: derives prompt context budget from the model's advertised window instead of a hard-coded 128k/20k value, enabling better support for diverse model capabilities. [PR #8053](https://github.com/nearai/ironclaw/pull/8053)
- **#8072** — Telegram: registers the Bot API command menu at activation so users see `/model`, `/status`, `/new`, `/stop`, `/interrupt` via the hamburger menu. [PR #8072](https://github.com/nearai/ironclaw/pull/8072)
- **#8067** — Subagent: adds boot/periodic sweep for stranded background deliveries, closing a gap where persistently queued results could be silently lost if the parent thread never restarts. [PR #8067](https://github.com/nearai/ironclaw/pull/8067)
- **#8054** — Assistant: fixes pairing-flow ordering so unpaired users receive the connect notice on first contact instead of the command inventory. [PR #8054](https://github.com/nearai/ironclaw/pull/8054)
- **#8073** — Device link: reframes the Telegram linking error from user-blame ("something went wrong") to administrator-ownership ("not configured by administrator"). [PR #8073](https://github.com/nearai/ironclaw/pull/8073)
- **#8068–#8071** — WebUI bundle: four coordinated fixes from `italic-jinxin` addressing slash-command menu alignment, scroll-on-navigation, card height preservation, and dismiss actions. [PR #8068](https://github.com/nearai/ironclaw/pull/8068) · [PR #8070](https://github.com/nearai/ironclaw/pull/8070) · [PR #8069](https://github.com/nearai/ironclaw/pull/8069) · [PR #8071](https://github.com/nearai/ironclaw/pull/8071)

## 4. Community Hot Topics

| # | Type | Title | Comments | Reactions | Link |
|---|------|-------|----------|-----------|------|
| #8074 | Bug | Paired user's rejected action shows wrong pairing notice on unconnected shared channel | 0 | 0 | [Issue #8074](https://github.com/nearai/ironclaw/issues/8074) |
| #8063–#8066 | Bug / UX | Slash-command menu: four related UI regressions (scroll, alignment, card collapse, dismissal) | 0 each | 0 each | [Issues #8063–#8066](https://github.com/nearai/ironclaw/issues/8063) |
| #7903 | Enhancement | Persistent per-user sandboxed executor behind trusted host kernel (Reborn architecture) | 2 | 0 | [Issue #7903](https://github.com/nearai/ironclaw/issues/7903) |

**Analysis:** Issue #7903 is the highest-signal item despite low comment volume — it flags a fundamental Reborn architecture question about authority boundaries vs. CLI plumbing complexity, tagged `risk: high`. The four WebUI issues (#8063–#8066) form a cluster around slash-command navigation ergonomics, suggesting the command-menu UX recently regressed or was under-specified. Four corresponding fix PRs (#8068–#8071) already address them, indicating strong responsiveness.

## 5. Bugs & Stability

| Severity | Item | Status | Fix PR | Link |
|----------|------|--------|--------|------|
| **High** | #8074 — Wrong notice shown to paired users on unconnected shared channels; `connect_required` copy written for unpaired-actor case instead | Open | None yet | [Issue #8074](https://github.com/nearai/ironclaw/issues/8074) |
| **Medium** | #8059 — `POST /api/v1/responses/{id}/cancel` always returns 400 and cannot succeed in any run state; cancel reason parsing is broken | Open | [PR #8059](https://github.com/nearai/ironclaw/pull/8059) (open) | [Issue #8059](https://github.com/nearai/ironclaw/pull/8059) |
| **Low** | #8066 — Command result cards collapse to horizontal lines as results accumulate (flex layout shrinkage) | Open | [PR #8071](https://github.com/nearai/ironclaw/pull/8071) (open) | [Issue #8066](https://github.com/nearai/ironclaw/issues/8066) |
| **Low** | #8065 — Inconsistent command metadata alignment in slash-command menu | Open | [PR #8070](https://github.com/nearai/ironclaw/pull/8070) (open) | [Issue #8065](https://github.com/nearai/ironclaw/issues/8065) |
| **Low** | #8064 — No dismiss action on command result cards; they accumulate in conversation space | Open | [PR #8069](https://github.com/nearai/ironclaw/pull/8069) (open) | [Issue #8064](https://github.com/nearai/ironclaw/issues/8064) |
| **Low** | #8063 — Active command scrolls out of view during menu navigation (keyboard & mouse) | Open | [PR #8068](https://github.com/nearai/ironclaw/pull/8068) (open) | [Issue #8063](https://github.com/nearai/ironclaw/issues/8063) |

The cancel-api bug (#8059) is the most operationally significant open issue: a non-functional cancel endpoint means runs cannot be reliably aborted. All four WebUI regressions have open fix PRs and appear well-scoped.

## 6. Feature Requests & Roadmap Signals

| Item | Description | Link |
|------|-------------|------|
| #7903 | Persistent per-user sandboxed executor — explores decoupling the trusted host kernel from per-user Docker sandboxes to reduce CLI plumbing overhead. High-risk, high-reward architectural direction. | [Issue #7903](https://github.com/nearai/ironclaw/issues/7903) |
| #8053 | Dynamic prompt context budget derived from model window — removes hard-coded 128k/20k limits. Likely to ship soon given core-author authorship and low risk. | [PR #8053](https://github.com/nearai/ironclaw/pull/8053) |
| #8072 | Telegram Bot API command menu registration at extension activation — improves discoverability of slash commands. Low risk, good candidate for next release. | [PR #8072](https://github.com/nearai/ironclaw/pull/8072) |
| #8067 | Stranded subagent delivery sweep (R4) — closes a durability gap in background subagent result delivery. Core subsystem improvement. | [PR #8067](https://github.com/nearai/ironclaw/pull/8067) |
| #8054 / #8073 | First-contact pairing UX fixes — aligns error messages and notice copy with deployment reality (admin-configured vs. user-driven). | [PR #8054](https://github.com/nearai/ironclaw/pull/8054) · [PR #8073](https://github.com/nearai/ironclaw/pull/8073) |

**Prediction:** The WebUI slash-command bundle (#8068–#8071), Telegram command menu (#8072), and prompt-context fix (#8053) are the strongest candidates for inclusion in the next release, all low-risk and already scoped.

## 7. User Feedback Summary

- **Pairing and onboarding friction** is a recurring theme: unpaired users receive the wrong notice on first contact (#8054), and paired users on shared unconnected channels see the wrong copy (#8074). Both signal that the product workflow's pairing-check ordering needs tightening.
- **Telegram linking errors** blame the user account when the root cause is administrator configuration (#8073). Better error attribution would reduce support burden.
- **Command result cards clutter** the conversation as they accumulate with repeated use (#8064) and shrink improperly (#8066). Users need durable but manageable transcript space.
- **Slash-command navigation** feels brittle: active options scroll out of view (#8063) and metadata is misaligned (#8065). These are polish issues but affect scanability.
- **Cancel is broken** (#8059) — users cannot abort running responses, which is a basic operational need for any AI agent interface.

Overall satisfaction signals are neutral-to-positive: the project responds quickly with fix PRs, but several usability bugs indicate that the WebUI and onboarding flows need more integration testing before release.

## 8. Backlog Watch

| Item | Age | Risk | Reason for Attention | Link |
|------|-----|------|----------------------|------|
| #7903 | ~10 days (created 2026-08-26) | High | Architectural spike with no resolution yet; affects Reborn sandbox design | [Issue #7903](https://github.com/nearai/ironclaw/issues/7903) |
| #8059 | ~2 days | Medium | Cancel API is non-functional; open PR exists but needs review/merge | [PR #8059](https://github.com/nearai/ironclaw/pull/8059) |
| #8074 | 1 day | Medium | Wrong notice copy for paired users; no fix PR yet | [Issue #8074](https://github.com/nearai/ironclaw/issues/8074) |
| #7988 | ~7 days (created 2026-08-29) | Low | Automated codebase graph refresh; low priority but long-unmerged | [PR #7988](https://github.com/nearai/ironclaw/pull/7988) |

**Key takeaway:** Issue #7903 warrants maintainer attention as a blocking architectural decision. Issue #8074 and PR #8059 should be triaged promptly — the former is a user-facing correctness bug, the latter is a functional regression in the cancel pathway.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



# LobsterAI Project Digest — 2026-09-05

## 1. Today's Overview

LobsterAI showed robust development momentum on 2026-09-05, with 34 PRs updated in the past 24 hours (29 merged/closed, 5 still open) and two new releases pushed (v2026.9.4 and v2026.9.3). Activity is concentrated around the in-app browser, cowork authentication flow, subscription recovery UX, and Windows/Electron compatibility fixes. Only one open issue remains active (#1071, a stale SQLite integrity bug from March), suggesting the team is maintaining a strong merge cadence while long-standing infrastructure concerns await resolution. Overall project health is **strong and delivery-focused**.

---

## 2. Releases

### v2026.9.4 (2026-09-04)
**What's Changed:**
- `feat(browser): restore interactive in-app browser` (#2602) — Restores full interactive capability in the in-app browser after prior limitations.
- `feat(update): confirm before install and quitting the app` (#2609) — Adds a confirmation dialog before app quit during update installation, reducing accidental data loss.
- `feat(publishing)` — Subscription recovery and resource state sync improvements (see PR #2613).

**Migration Notes:** No breaking changes indicated. Users on v2026.9.3 should test the restored browser interaction and the new confirmation flow.

### v2026.9.3 (2026-09-03)
**What's Changed:**
- `feat(cowork): show login prompt before unauthenticated chat` (#2573) — New welcome modal blocks unauthenticated chat submission.
- `feat(browser): add interactive in-app browser` (#2574) — Initial launch of the in-app browser feature.
- `feat(onboarding)` — Onboarding flow refinements.

---

## 3. Project Progress

**Merged / Closed Today (selected highlights):**

| PR | Area | Summary |
|----|------|---------|
| [#2618](https://github.com/netease-youdao/LobsterAI/pull/2618) | Release | Release/2026.9.4 packaging |
| [#2616](https://github.com/netease-youdao/LobsterAI/pull/2616) | CI / Build | Bounded skill audit duration (90s cap, prevents npm audit hangs) |
| [#2615](https://github.com/netease-youdao/LobsterAI/pull/2615) | Electron / Windows | Fixed Unicode path support for Windows browser MCP launcher |
| [#2614](https://github.com/netease-youdao/LobsterAI/pull/2614) | Config | Corrected test-mode server API address back to standard intranet |
| [#2613](https://github.com/netease-youdao/LobsterAI/pull/2613) | Publishing | Subscription recovery UX: restore entries, state sync, analytics events |
| [#2612](https://github.com/netease-youdao/LobsterAI/pull/2612) | Cowork | Preserve model display during login refresh without stale-model execution |
| [#2602](https://github.com/netease-youdao/LobsterAI/pull/2602) | Browser | Restore interactive in-app browser |
| [#2609](https://github.com/netease-youdao/LobsterAI/pull/2609) | Update | Confirm-before-install & confirm-before-quit dialogs |
| [#2603](https://github.com/netease-youdao/LobsterAI/pull/2603) | i18n | Refined Chinese voice quota-exhausted messaging |
| [#2599](https://github.com/netease-youdao/LobsterAI/pull/2599) | IM | Improved bot card layout (2-column responsive) |
| [#2596](https://github.com/netease-youdao/LobsterAI/pull/2596) | Analytics | Track chat login CTA click-through |
| [#2573](https://github.com/netease-youdao/LobsterAI/pull/2573) | Cowork | Login prompt before unauthenticated chat |
| [#2574](https://github.com/netease-youdao/LobsterAI/pull/2574) | Browser | Interactive in-app browser (initial) |
| [#2503](https://github.com/netease-youdao/LobsterAI/pull/2503) | Electron | Edit context menu (Cut/Copy/Paste/Select All) for text inputs |
| [#2501](https://github.com/netease-youdao/LobsterAI/pull/2501) | Skills | Fixed skill upgrade progress overlay rendering |
| [#2520](https://github.com/netease-youdao/LobsterAI/pull/2520) | Plugins | Keep install modal usable with long error messages |
| [#2521](https://github.com/netease-youdao/LobsterAI/pull/2521) | Cowork | Preserve message selection for context menu |
| [#2532](https://github.com/netease-youdao/LobsterAI/pull/2532) | Renderer | Fade-out login promo tip after 5s |

**Key advances:** The in-app browser moved from initial launch (v2026.9.3) to a restored/iterated state (v2026.9.4), indicating active refinement. Cowork authentication UX was hardened with login-prompt gating and model-display preservation during token refresh. Subscription recovery infrastructure received significant polish across artifacts, libraries, and site detail views.

**Open PRs to watch:**
- [#2617](https://github.com/netease-youdao/LobsterAI/pull/2617) — Browser login and tab control improvements (scrollable tab strip, adjacent-close behavior, credential settings persistence)

---

## 4. Community Hot Topics

### Issue #1071 — [OPEN, Stale] SQLite Storage Layer Integrity Defects
**[Link](https://github.com/netease-youdao/LobsterAI/issues/1071)** | Author: MaoQianTu | Created 2026-03-30 | Updated 2026-09-04 | 💬 1 comment | 👍 0

Three interconnected data-integrity defects were audited into `sqliteStore.ts` and `coworkStore.ts`:
1. **`ON DELETE CASCADE`失效** — Orphan messages accumulate indefinitely in `cowork_messages` when sessions are deleted.
2. **`save()` non-atomic writes** — Crash during write can corrupt the database.
3. **`storeInitPromise` timeout** — After timeout, the store enters a permanent fault state.

**Analysis:** This is a high-severity infrastructure concern flagged over five months ago. The stale label suggests low maintainer engagement, but the bugs describe real production risk (data loss, permanent store failure). The community need here is clear: users with long-running cowork sessions are likely accumulating orphan data, and any crash cycle risks irreversible corruption.

---

## 5. Bugs & Stability

| Severity | Item | Status | Notes |
|----------|------|--------|-------|
| **High** | [#1071](https://github.com/netease-youdao/LobsterAI/issues/1071) — SQLite CASCADE失效 + 非原子写 + 永久故障 | Open / Stale | No fix PR yet; 5+ months open |
| **Medium** | Unicode paths on Windows (browser MCP launcher) | Fixed in [#2615](https://github.com/netease-youdao/LobsterAI/pull/2615) | UTF-8 switch applied |
| **Low** | Skill upgrade overlay not covering full shell | Fixed in [#2501](https://github.com/netease-youdao/LobsterAI/pull/2501) | Rendered via `document.body` |
| **Low** | Plugin install modal unusable with long errors | Fixed in [#2520](https://github.com/netease-youdao/LobsterAI/pull/2520) | Scrollable content + close button |
| **Low** | Login promo tip persisting indefinitely | Fixed in [#2532](https://github.com/netease-youdao/LobsterAI/pull/2532) | 5s fade-out + cleanup on auth change |

**Regression watch:** The in-app browser was *initially* launched in v2026.9.3 and then *restored* in v2026.9.4 (#2602), suggesting the first iteration had issues. PR #2617 (open) continues hardening browser login and tab controls — users should monitor for further browser regressions.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Interpretation |
|--------|--------|---------------|
| **In-app browser interactivity** | #2574, #2602, #2617 (open) | Active feature being iterated rapidly; next iterations likely focus on tab management, credential persistence, and login flow maturity |
| **Subscription recovery UX** | #2613 | Strong signal that monetization/recovery flows are a current priority; expect more pricing-page ↔ app state sync work |
| **Context menu parity** | #2503, #2521 | Editing shortcuts (Cut/Copy/Paste) and right-click selection preservation suggest a push toward desktop-app parity with native editors |
| **Cowork auth gating** | #2573, #2596 | Unauthenticated chat is now blocked with a branded modal; analytics tracking indicates the team is measuring conversion from this friction point |
| **Windows Unicode support** | #2615 | Expanding internationalization coverage beyond text to file-system paths |

**Prediction for next release (v2026.9.5+):** The open browser PR #2617 (tab strip, credential persistence, dismissible login feedback) is likely to ship next, along with further subscription-recovery polish. Cowork auth-flow analytics may surface a A/B or tweak to the login-prompt timing.

---

## 7. User Feedback Summary

- **Pain point — Data integrity anxiety:** Issue #1071 reflects deep user concern about silent data loss in the SQLite layer, particularly for cowork session histories. The 5-month gap without a fix is a credibility risk.
- **Pain point — Windows path localization:** Unicode install paths causing browser launcher failures (now fixed in #2615) indicates international users—especially Chinese-language Windows installs with non-ASCII paths—were blocked from using the in-app browser.
- **Satisfaction — Browser feature momentum:** The rapid 2-day iteration between browser launch (#2574) and restoration (#2602) plus the open hardening PR (#2617) shows the team is responsive to browser usability concerns.
- **Satisfaction — Context menu improvements:** Native-editing shortcuts (#2503) and selection-preserving right-click (#2521) address long-standing desktop-app expectations.
- **Satisfaction — Subscription clarity:** Improved recovery flows (#2613) and localized quota messaging (#2603) reduce friction for paying users.

---

## 8. Backlog Watch

| Issue / PR | Age | Priority | Risk |
|------------|-----|----------|------|
| [#1071](https://github.com/netease-youdao/LobsterAI/issues/1071) — SQLite integrity defects | ~5 months (stale) | **Critical** | Data loss in production cowork sessions; no fix PR |
| [#2617](https://github.com/netease-youdao/LobsterAI/pull/2617) — Browser login & tab controls | 1 day (open) | **High** | Blocks full browser feature maturity |

**Recommendation:** Issue #1071 requires maintainer attention urgently. The three defects (CASCADE failure, non-atomic writes, permanent store fault) are independent, reproducible, and collectively threaten data durability. A maintenance release with a migration script or WAL-mode hardening would significantly reduce risk. PR #2617 should be reviewed and merged to unblock the browser feature stream.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>



# Moltis Project Digest — 2026-09-05

---

## 1. Today's Overview

Moltis recorded minimal activity over the past 24 hours, with **zero issues** updated and only **one open pull request**. No new releases were published, indicating a quiet development window. The lone open PR (#1258) introduces a notable feature addition — direct AGY CLI streaming support — but has not yet been reviewed or merged. Overall project health appears stable with no regressions or blockers reported today.

---

## 2. Releases

No new releases were published in the last 24 hours.

---

## 3. Project Progress

- **0 PRs merged/closed** today.
- **0 issues closed** today.
- The only active development item is **PR #1258** (open since 2026-09-04), which adds a first-class streaming transport for the official `agy` CLI. No features were advanced or fixed today through merges.

🔗 [PR #1258](https://github.com/moltis-org/moltis/pull/1258)

---

## 4. Community Hot Topics

The most discussed item today is the single open PR:

- **[#1258](https://github.com/moltis-org/moltis/pull/1258) — feat(external-agents): add direct AGY streaming** *(Author: GTanger | Created: 2026-09-04)*
  - Reuses AGY's existing Google OAuth session, eliminating the need for Gemini CLI or a separate API key.
  - Translates AGY's versioned `stream-json` output into Moltis-native message types (text, reasoning, notice, tool, sub-agent, usage, resumable-session).
  - Zero comments and zero reactions so far, suggesting the PR is early in its review cycle.

**Analysis:** This PR addresses a clear user need to integrate the `agy` CLI as a first-class external agent without requiring additional authentication overhead. It signals growing interest in multi-agent interoperability and OAuth-aware integrations within the Moltis ecosystem.

---

## 5. Bugs & Stability

No bugs, crashes, or regressions were reported today. The project shows no stability concerns based on current issue data.

---

## 6. Feature Requests & Roadmap Signals

- **PR #1258** represents a strong roadmap signal toward **native AGY CLI integration** as a streaming-capable external agent. If merged, this would likely be featured in the next minor release as a new transport layer for Google-authenticated workflows.
- No new feature requests were filed via issues today.

---

## 7. User Feedback Summary

No user feedback (comments, reactions, or issue discussions) was recorded today. The single open PR remains unreviewed, so community sentiment on recent developments is not yet available.

---

## 8. Backlog Watch

No long-unanswered issues or stalled PRs are visible in the current data snapshot. PR #1258 is fresh (opened yesterday) and has not yet entered an extended review backlog.

---

*Report generated from GitHub data for 2026-09-05. Source: [github.com/moltis-org/moltis](https://github.com/moltis-org/moltis)*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>



# CoPaw Project Digest — 2026-09-05

## 1. Today's Overview

CoPaw (QwenPaw) is experiencing high development velocity with **28 issues** and **38 PRs** updated in the last 24 hours. Activity is strongly skewed toward the 2.2.x release track, with significant progress on governance enforcement, memory lifecycle unification, and desktop/web console polish. Ten issues were closed today — including several long-standing bugs around loop mode persistence, slow startup, and MCP whitelist bypass — while a new round of enhancement requests signals the community pushing toward multi-tenant and cost-optimization capabilities.

## 2. Releases

No new releases published today. The project appears to be in active pre-release stabilization for **QwenPaw 2.2 / 2.2.1** (beta builds referenced: `2.2.0b5`, `2.2.1b1`).

## 3. Project Progress

**Closed/Merged Today:**

| PR | Summary |
|---|---|
| [#7504](https://github.com/agentscope-ai/QwenPaw/pull/7504) | **Fix:** MCP per-tool whitelist now enforced on the agent runtime path (closes #7470) |
| [#7560](https://github.com/agentscope-ai/QwenPaw/pull/7560) | **Fix:** Preserves selected loop mode query across tab switches (closes #7552, #7555) |
| [#7183](https://github.com/agentscope-ai/QwenPaw/pull/7183) | **Feature:** Workspace-scoped Skill preload configuration (closes #7182) |
| [#7497](https://github.com/agentscope-ai/QwenPaw/pull/7497) | **Fix:** Governance OFF mode now denies sensitive-path tool calls directly (closes #7496) |

**Open PRs advancing features:**

| PR | Summary |
|---|---|
| [#7486](https://github.com/agentscope-ai/QwenPaw/pull/7486) | Creator app-plugin v1.1.2: notification bus, async delegation, T2V/I2V/S2V scheduling |
| [#7565](https://github.com/agentscope-ai/QwenPaw/pull/7565) | Clean plugin unload + rollback-safe hot reload |
| [#7561](https://github.com/agentscope-ai/QwenPaw/pull/7561) | Unified automatic memory lifecycle refactor (breaking) |
| [#6960](https://github.com/agentscope-ai/QwenPaw/pull/6960) | PawPort: import flow from Codex/Qoder into QwenPaw |
| [#7538](https://github.com/agentscope-ai/QwenPaw/pull/7538) | Unified runtime environment variable management |
| [#7502](https://github.com/agentscope-ai/QwenPaw/pull/7502) | Console sidebar and settings redesign |

## 4. Community Hot Topics

| Issue | Activity | Theme |
|---|---|---|
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | 22 comments · 3 👍 | **QwenPaw Hub multi-tenant edition (2.2.0)** — community roadmap input |
| [#7505](https://github.com/agentscope-ai/QwenPaw/issues/7505) | 12 comments | **LAN LLM server disconnect storms** — high-pain reliability issue |
| [#7534](https://github.com/agentscope-ai/QwenPaw/issues/7534) | 3 comments | **Feishu session consumer deadlock** — silent unresponsiveness after hours |
| [#7541](https://github.com/agentscope-ai/QwenPaw/issues/7541) | 3 comments | **Session isolation by channel** — architectural concern raised by Russian-speaking user |
| [#7568](https://github.com/agentscope-ai/QwenPaw/issues/7568) | 1 comment | **Off-peak task scheduling** — cost-optimization feature request inspired by zcode |

**Analysis:** The dominant theme is **reliability under sustained use** — Feishu consumer stalls, LAN LLM disconnect loops, and session isolation concerns all point to multi-channel, long-running deployments as the next frontier. The Hub multi-tenant discussion (#7318) signals the team is actively shaping the commercial/enterprise direction based on community demand.

## 5. Bugs & Stability

**Critical / High Severity:**

| Issue | Description | Fix PR |
|---|---|---|
| [#7505](https://github.com/agentscope-ai/QwenPaw/issues/7505) | LAN LLM server (LM Studio) returns frequent `client disconnect`, causing retry storms and timeouts | None yet |
| [#7469](https://github.com/agentscope-ai/QwenPaw/issues/7469) | ReMe background embedding/indexing fails silently — `as_embedding:default` accessed before `start()` | None yet |
| [#7549](https://github.com/agentscope-ai/QwenPaw/issues/7549) | Volcengine Ark Responses API rejects requests ending with assistant text turn — 400 `MissingParameter: partial` | None yet |
| [#7554](https://github.com/agentscope-ai/QwenPaw/issues/7554) | Shell tool child processes inherit console stdin on Windows; `Ctrl+C` cannot kill them | None yet |
| [#7534](https://github.com/agentscope-ai/QwenPaw/issues/7534) | Feishu DM session queue consumer stuck alive; new messages fail to spawn replacement consumer | None yet |
| [#7559](https://github.com/agentscope-ai/QwenPaw/issues/7559) | Sending a new message during task execution triggers 409 conflict instead of queuing | None yet |

**Medium Severity (resolved today):**

| Issue | Resolution |
|---|---|
| [#7552](https://github.com/agentscope-ai/QwenPaw/issues/7552) — Loop mode not reaching backend | Closed via PR #7560 |
| [#7555](https://github.com/agentscope-ai/QwenPaw/issues/7555) — Loop mode display resets on tab switch | Closed via PR #7560 |
| [#7496](https://github.com/agentscope-ai/QwenPaw/issues/7496) — CRITICAL rule bypassed in OFF mode | Closed via PR #7497 |
| [#7470](https://github.com/agentscope-ai/QwenPaw/issues/7470) — MCP per-tool whitelist not enforced | Closed via PR #7504 |
| [#7023](https://github.com/agentscope-ai/QwenPaw/issues/7023) — Desktop startup blocked ~60s on Playwright Chromium install | Closed |
| [#7367](https://github.com/agentscope-ai/QwenPaw/issues/7367) — 30–45s startup even with only console channel | Closed |
| [#7545](https://github.com/agentscope-ai/QwenPaw/issues/7545) — Right-click copy missing in desktop chat | Closed |

**Low / Investigational:**

| Issue | Description |
|---|---|
| [#7548](https://github.com/agentscope-ai/QwenPaw/issues/7548) | Navigation history lost after session switch or restart |
| [#7510](https://github.com/agentscope-ai/QwenPaw/issues/7510) | `/memory/status` returns 500 on v2.2.0-beta.7 Desktop (closed) |
| [#7567](https://github.com/agentscope-ai/QwenPaw/issues/7567) | Task stop appears successful but continues running (closed) |

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Request | Likelihood for Next Release |
|---|---|---|
| [#7568](https://github.com/agentscope-ai/QwenPaw/issues/7568) | Off-peak/batch task scheduling for cost optimization | Medium — aligns with emerging model provider discount programs |
| [#7558](https://github.com/agentscope-ai/QwenPaw/issues/7558) | Pluggable relational storage (PostgreSQL/MySQL) for WAL-sensitive deployments | High — Docker Swarm/K8s HA deployments explicitly called out |
| [#7557](https://github.com/agentscope-ai/QwenPaw/issues/7557) | Version & dependency metadata for skills (skill_pool) | Medium — fleet management pain point identified |
| [#7556](https://github.com/agentscope-ai/QwenPaw/issues/7556) | MCP driver-level fallback chain when policy denies | Medium — multi-agent deployment need |
| [#7550](https://github.com/agentscope-ai/QwenPaw/issues/7550) | Pre-install codex cli in QwenPaw Docker image | Low-Medium — convenience request |
| [#7543](https://github.com/agentscope-ai/QwenPaw/issues/7543) | Background (non-blocking) updates | Medium — UX quality-of-life improvement |
| [#7553](https://github.com/agentscope-ai/QwenPaw/issues/7553) | Artifact output displayed above timestamp rather than folded in completed steps | Low — UI refinement |
| PR #6960 | PawPort — import flow from Codex/Qoder | High — already in review, strong community signal |
| PR #7378 | Native mobile experience (Expo/React Native) | Medium — draft stage, depends on roadmap prioritization |

## 7. User Feedback Summary

**Pain points (recurring themes):**

- **Long-running task reliability:** Users report tasks silently stopping (#6921), continuing after "stop" (#7567), or 409 errors when submitting new messages mid-execution (#7559). The message queuing mechanism needs attention.
- **Multi-channel stability:** Feishu consumer stalls (#7534) and LAN LLM disconnect loops (#7505) indicate the multi-channel architecture needs harderening for production deployments.
- **Desktop vs. Web parity:** Right-click copy (#7545) and loop mode persistence (#7552/#7555) show gaps between desktop (Tauri) and web console experiences.
- **Startup performance:** Slow imports (#7367) and Playwright install blocks (#7023) have been resolved, but startup experience remains a priority topic.
- **Workspace portability:** Users want to migrate from Codex/Qoder (#7550, PR #6960) and need persistent configurations across image updates.

**Positive signals:**
- Governance hardening (MCP whitelist, OFF mode security) is being actively addressed.
- Memory lifecycle unification (#7561) and plugin hot-reload (#7565) show investment in platform maturity.
- The community is engaged in roadmap discussions (Hub multi-tenant, #7318 with 22 comments).

## 8. Backlog Watch

| Issue/PR | Age | Concern |
|---|---|---|
| [#7548](https://github.com/agentscope-ai/QwenPaw/issues/7548) | Open today | Navigation history loss on session switch — affects UX continuity, no fix yet |
| [#7469](https://github.com/agentscope-ai/QwenPaw/issues/7469) | Open 4 days | ReMe embedding failure — silent data loss in long-term memory, no fix yet |
| [#7549](https://github.com/agentscope-ai/QwenPaw/issues/7549) | Open today | Volcengine Ark API 400 rejection — blocks a specific provider integration |
| [#7554](https://github.com/agentscope-ai/QwenPaw/issues/7554)

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



# ZeroClaw Project Digest — 2026-09-05

## 1. Today's Overview

ZeroClaw is exhibiting sustained high activity with **34 issues** and **50 PRs** touched in the last 24 hours, though no new releases were shipped. The project remains in an active stabilization phase for the v0.8.5 milestone (tracker #9459), with particular intensity around security hardening, channel reliability, and runtime correctness. Over half of today's issues are P1 severity, signaling that maintainer and contributor attention is heavily focused on blocking bugs and accepted RFC implementations rather than exploratory features.

## 2. Releases

**No new releases today.** The v0.8.5 stabilization tracker (#9459) remains the active release milestone, with intake frozen since August 4 and weekly cuts shipping ready work.

## 3. Project Progress

**Merged / Closed (9 items):**

- **#10153** — WhatsApp Web ported to `whatsapp-rust` 0.7.0, replacing six git-pinned dependencies with crates.io releases, enabling `zeroclaw-channels` publication. [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/10153)
- **#10587** — Rust dependency bump (49 updates) merged, including clap 4.6.1→4.6.6 and tokio 1.52.3→latest. [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/10587)
- **#9397** — *RFC Accepted:* Empty WhatsApp Web `allowed_groups` now treated as **permit-none**, closing a critical security misconfiguration path. [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/9397)
- **#8720** — Support request to disable `cachePoint` for Bedrock Nova 2 Lite via config resolved/closed. [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8720)
- **#9348** — WhatsApp Web business-mode DM/group bug (empty allowlist admitting all groups) closed as fixed. [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/9348)
- **#8650** — ZeroCode diagnostics now show active resolved log path. [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8650)
- **#9171** — ZeroCode modifier semantics made key-character-independent. [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/9171)
- **#10571** — Twitch section added to Social Channels documentation. [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/10571)
- **#9529** — Visible close control added to ZeroCode TodoWrite tracker. [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/9529)

## 4. Community Hot Topics

| Issue | Title | Comments |
|---|---|---|
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | RFC: Runtime-owned conversation sessions & transport surface adapters | 32 |
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | RFC: Computer-use support for desktop screen interaction | 16 |
| [#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) | RFC: Empty WhatsApp `allowed_groups` → permit-none (closed) | 14 |
| [#10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050) | RFC: Verbatim channel send over gateway without agent turn | 13 |

**Analysis:** The dominant theme is **architecture and security governance**. Issue #9487 (runtime-owned sessions) is the most-discussed open item, reflecting community investment in how conversation lifecycle and transport boundaries are defined. The WhatsApp security RFC (#9397/#9348) saw intense review before closure, indicating strong community awareness of configuration-safety risks. The verbatim-gateway RFC (#10050) addresses a genuine operator pain point—direct message delivery without consuming an agent turn—suggesting demand for gateway-level automation capabilities.

## 5. Bugs & Stability

| Severity | Issue | Summary | Fix PR |
|---|---|---|---|
| **S1** | [#10603](https://github.com/zeroclaw-labs/zeroclaw/issues/10603) | OpenCode providers never send `x-opencode-session`, breaking Go models & risking account flags | — |
| **S1** | [#10609](https://github.com/zeroclaw-labs/zeroclaw/issues/10609) | ZeroCode ignores launch directory, forces agent workspace as cwd | — |
| **S1** | [#9421](https://github.com/zeroclaw-labs/zeroclaw/issues/9421) | Incomplete terminal responses reported as successful | — |
| **S1** | [#10357](https://github.com/zeroclaw-labs/zeroclaw/issues/10357) | Tool error path discards detailed error body (closed) | — |
| **S1** | [#10223](https://github.com/zeroclaw-labs/zeroclaw/issues/10223) | ZeroCode drops Ctrl+C and blocks input during reconnect (closed) | — |
| **S1** | [#9882](https://github.com/zeroclaw-labs/zeroclaw/issues/9882) | Image markers bypass content validation on `run_model_query` direct-dispatch seam | — |
| **S2** | [#10593](https://github.com/zeroclaw-labs/zeroclaw/issues/10593) | `backup.schedule_cron` silently schedules nothing when no agent claims `__builtin_backup` | — |
| **S2** | [#10594](https://github.com/zeroclaw-labs/zeroclaw/issues/10594) | Cron records nothing when a job does not run; silent non-execution invisible | — |
| **S2** | [#10626](https://github.com/zeroclaw-labs/zeroclaw/issues/10626) | TTS synthesizes text verbatim: Markdown and emoji spoken aloud | [#10628](https://github.com/zeroclaw-labs/zeroclaw/pull/10628) |
| **S2** | [#10625](https://github.com/zeroclaw-labs/zeroclaw/issues/10625) | Internal `[media attachment]` placeholder leaked to users with non-vision models | — |

**Notable:** The `x-opencode-session` header bug (#10603) is the highest-impact open issue—it breaks Go models entirely and may trigger account flags. The cron silencing bugs (#10593, #10594) represent a class of "silent failure" issues that are especially dangerous in production deployments. TTS provider registration diagnostics are being addressed in PR #10628.

## 6. Feature Requests & Roadmap Signals

| Issue | Summary | Likelihood for Next Release |
|---|---|---|
| [#10619](https://github.com/zeroclaw-labs/zeroclaw/issues/10619) | Anthropic prompt-cache passthrough for OpenAI-compatible providers via gateways | **High** — small scope, high value for cost-sensitive users |
| [#10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050) | Verbatim channel send over gateway without agent turn | **Medium** — RFC accepted but needs implementation |
| [#10588](https://github.com/zeroclaw-labs/zeroclaw/issues/10588) | Raise `multimodal.max_image_size_mb` default from 5 to 20 | **High** — trivial config change, well-scoped |
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | Computer-use support for desktop screen interaction | **Low** — RFC stage, significant implementation ahead |
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | Runtime-owned conversation sessions | **Medium** — architecture RFC, revision 5, long ramp |

The Anthropic prompt-cache passthrough (#10619) and image-size increase (#10588) are the strongest candidates for inclusion in the next patch release given their limited scope and clear operator benefit.

## 7. User Feedback Summary

**Pain points surfaced today:**

- **WhatsApp security misconfiguration** (#9348, #9397): Operators who believed their allowlist was locked down found the agent replying to all groups. This has been flagged S1 and the RFC has been accepted to change default behavior to permit-none.
- **ZeroCode CWD confusion** (#10609): Users launching `zerocode` from a specific directory expect that context to be preserved, but the tool forces the agent workspace as cwd—a workflow blocker for multi-project users.
- **OpenCode/Go model incompatibility** (#10603): The missing `x-opencode-session` header is breaking a supported provider family and risking user accounts—a critical trust issue.
- **TTS literal rendering** (#10626): Markdown and emoji read aloud by TTS degrades the end-user experience on self-hosted deployments.
- **Cron silent failures** (#10593, #10594): Operators cannot detect when scheduled jobs are not running, creating blind spots in backup and automation workflows.

**Positive signals:** The WhatsApp port to `whatsapp-rust` 0.7.0 (#10153) resolves publish-blocker dependencies. ZeroCode diagnostics improvements (#8650) and the visible close control for TodoWrite (#9529) show attention to operator ergonomics.

## 8. Backlog Watch

| Issue / PR | Days Open | Risk | Action Needed |
|---|---|---|---|
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) — RFC: Runtime-owned sessions (Rev 5) | 39 | High | New discussion window and snapshot per RFC process |
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) — RFC: Computer-use support | 72 | Medium | Security clarification adopted; awaiting implementation |
| [#10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050) — RFC: Verbatim gateway send | 19 | Medium | Accepted; needs maintainer assignment for implementation |
| [#10241](https://github.com/zeroclaw-labs/zeroclaw/pull/10241) — fix(channels): supervised shell approval routing | 14 | High | Blocked; distinguised-contributor PR needs review |
| [#9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002) — fix(gateway): keep agent turns alive after viewer disconnect | 55 | High | Distinguished-contributor; needs maintainer review |
| [#10491](https://github.com/zeroclaw-labs/zeroclaw/pull/10491) — fix(plugins): read machine trust store for plugin HTTPS | 6 | High | Needs author action; stacked PR now unblocked |
| [#9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320) — fix(cron): wall-clock timeout for agent jobs | 74 | Medium | Needs maintainer review; addresses cron reliability concerns |
| [#9272](https://github.com/zeroclaw-labs/zeroclaw/pull/9272) — feat(anthropic): handle refusals with fallback notices | 74 | Medium | Needs maintainer review; long-standing distinguished-contributor work |
| [#10621](https://github.com/zeroclaw-labs/zeroclaw/pull/10621) — feat(runtime): coordinate agent lifecycle mutations | 1 | High | Newly opened; large scope (XL), shared live-config authority |
| [#10603](https://github.com/zeroclaw-labs/zeroclaw/issues/10603) — OpenCode missing session header | 2 | High | Needs immediate maintainer triage; blocks Go model users |

**Overall project health:** Active and security-conscious. The team is correctly prioritizing S1 bugs and accepted RFCs, but several distinguished-contributor PRs have accumulated review latency (74+ days on #9320 and #9272). The v0.8.5 stabilization line is proceeding but will benefit from accelerated triage on the cron reliability and gateway-lifecycle items.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*