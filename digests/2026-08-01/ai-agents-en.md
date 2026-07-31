# OpenClaw Ecosystem Digest 2026-08-01

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-31 22:16 UTC

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

# OpenClaw Project Digest — 2026-08-01

**Repository:** [openclaw/openclaw](https://github.com/openclaw/openclaw)

---

## 1. Today's Overview

OpenClaw shows extremely high daily activity with 500 issues and 500 PRs updated in the last 24 hours, indicating a project with a large, continuously engaged contributor and user base. No new releases were published today, meaning the current stable/preview line remains unchanged and all progress is landing through the PR pipeline. The issue mix is dominated by long-running stability and reliability concerns (message loss, session state, crash loops, provider routing) rather than new feature work, suggesting the project is in a hardening phase ahead of a likely beta or stable cut. Overall project health is active but under pressure from a backlog of high-severity regressions and cross-channel delivery bugs.

---

## 2. Releases

**No new releases today.** The latest release information is absent from the dataset. The most recent known version referenced in issues is `2026.7.1` (with beta variants like `2026.7.1-beta.5` and `2026.7.2-beta.4`), and several issues report regressions introduced in these recent builds.

---

## 3. Project Progress

Based on the top PRs updated in the last 24 hours:

| PR | Scope | Status |
|---|---|---|
| [#117047](https://github.com/openclaw/openclaw/pull/117047) | UI: plugin settings, reconnect, freshness ownership | Open, ready for maintainer look |
| [#116805](https://github.com/openclaw/openclaw/pull/116805) | Discord: prevent REST failures from exposing credentials | Open, ready for maintainer look |
| [#116958](https://github.com/openclaw/openclaw/pull/116958) | Memory: suggest reindex instead of `--fix` for missing QMD index | Closed |
| [#117067](https://github.com/openclaw/openclaw/pull/117067) | Gateway: cache disk reads on agent-list/skill expansion hot paths | Open |
| [#117064](https://github.com/openclaw/openclaw/pull/117064) | Plugins: externalize OpenCode Go provider out of core npm package | Open |
| [#117066](https://github.com/openclaw/openclaw/pull/117066) | Gateway: reject sends on closing node sockets | Open |
| [#117057](https://github.com/openclaw/openclaw/pull/117057) | OpenAI: retain Gateway microphone frames during peer startup | Open, needs proof |
| [#117063](https://github.com/openclaw/openclaw/pull/117063) | Android: show pinned state in sidebar sessions | Open, needs proof |
| [#117019](https://github.com/openclaw/openclaw/pull/117019) | UI: restore keyboard and screen-reader session controls | Closed |
| [#116486](https://github.com/openclaw/openclaw/pull/116486) | Channels: attribute zero-payload turn warnings, stop false silent-drop alarms | Open, waiting on author |

**Key trends:** PRs today focus on gateway reliability, credential security, UI accessibility, provider isolation, and memory/search correctness. Several high-impact PRs are sitting in "ready for maintainer look" status, indicating review bottlenecks.

---

## 4. Community Hot Topics

**Top Issues by Comment Count (last 24h):**

| Issue | Title | Comments | Severity |
|---|---|---|---|
| [#115326](https://github.com/openclaw/openclaw/issues/115326) | Crash-loop breaker suppresses Discord/WhatsApp permanently; channels.start fails with WebSocket 1006 | 24 | P1 🐚 Platinum Hermit |
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | Realtime voice retains unbounded provider/consult state | 15 | P1 🐚 Platinum Hermit |
| [#79902](https://github.com/openclaw/openclaw/issues/79902) | Feature: companion-friendly SQLite transcript/session seams | 14 | P2 🌊 Off-meta Tidepool |
| [#67288](https://github.com/openclaw/openclaw/issues/67288) | amazon-bedrock-mantle lacks config.discovery.enabled gate | 13 | P2 🐚 Platinum Hermit |
| [#69208](https://github.com/openclaw/openclaw/issues/69208) | Umbrella: duplicate transcript, replay, context assembly across channels | 12 | P1 🦪 Silver Shellfish |
| [#85251](https://github.com/openclaw/openclaw/issues/85251) | Codex app-server emits turn/started then goes silent; embedded run wedges | 11 | P1 🦪 Silver Shellfish |
| [#114137](https://github.com/openclaw/openclaw/issues/114137) | Visible channel turns dispatch with no queued reply payloads; text persisted but never delivered | 10 | P1 🦞 Diamond Lobster |
| [#109490](https://github.com/openclaw/openclaw/issues/109490) | Codex turn interrupted after client-delegated message tool result (terminate:true) | 10 | P1 🦐 Gold Shrimp |
| [#90414](https://github.com/openclaw/openclaw/issues/90414) | agentmemory__memory_search returns "index metadata is missing" persistently | 10 | P2 🦐 Gold Shrimp |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) | Models: fully dynamic model discovery (OpenRouter + beyond) | 10 | P2 🦐 Gold Shrimp |

**Underlying needs:** The community is overwhelmingly concerned with **delivery reliability** (messages sent but not received, sessions stuck, crash loops) and **provider/channel compatibility** (Discord, WhatsApp, Telegram, Matrix, Feishu). There is strong demand for transparent recovery mechanisms and better resource bounding in realtime voice sessions. The SQLite transcript seam request (#79902) signals advanced users wanting portable, queryable session state.

---

## 5. Bugs & Stability

**Critical (P1, Platinum/Diamond rating, active regressions):**

1. **[#115326](https://github.com/openclaw/openclaw/issues/115326)** — Crash-loop breaker permanently suppresses Discord/WhatsApp; documented recovery (`channels.start`) fails with WebSocket 1006. 24 comments, no fix PR linked.
2. **[#114137](https://github.com/openclaw/openclaw/issues/114137)** — Visible turns intermittently dispatch with no queued reply payloads; final text persisted in transcript but never delivered (regression in 2026.7.1-2). 10 comments.
3. **[#107464](https://github.com/openclaw/openclaw/issues/107464)** — Telegram `message(action=send)` prematurely releases Codex turn in `message_tool_only` mode after 2026.7.1 update. 9 comments.
4. **[#114211](https://github.com/openclaw/openclaw/issues/114211)** — Matrix room agents loop on visible no-reply output, restart recovery, and stale session replay. 7 comments.
5. **[#114255](https://github.com/openclaw/openclaw/issues/114255)** — Restart mid-run leaves session `status=running` with live restart-recovery claim; agent stops replying, Telegram spool retries forever. 7 comments.
6. **[#111358](https://github.com/openclaw/openclaw/issues/111358)** — `sessions_send` silently delivers as webchat-only message when target session has no channel binding. 5 comments.

**High (P1/P2, persistent or cross-channel):**

- **[#109490](https://github.com/openclaw/openclaw/issues/109490)** — Codex turn interrupted after `terminate:true` dynamic tool result; promised work never executes.
- **[#91564](https://github.com/openclaw/openclaw/issues/91564)** — Telegram forum topic becomes permanent inbound black hole after stuck-session recovery.
- **[#90378](https://github.com/openclaw/openclaw/issues/90378)** — Cron store migrated to SQLite silently on upgrade; new jobs default to `delivery.mode=announce`, causing channel errors.
- **[#114234](https://github.com/openclaw/openclaw/issues/114234)** — Usage-cost refresh lock permanently freezes cache after container restart (PID reuse).
- **[#115001](https://github.com/openclaw/openclaw/issues/115001)** — Hybrid memory search returns spurious 1.0 similarity scores via FTS LIKE-fallback.

**Notable regressions tied to 2026.7.x releases:**
- Discord channel not loading (#77930, regression in 2026.5.4)
- Feishu/Telegram dispatch failing due to missing `runDispatchLifecycle` (#114020, regression in 2026.7.2-beta.4)
- WhatsApp group messages never reaching inbound handling (#107244, repro across 2026.6.11→2026.7.1)
- Ollama provider never selected as primary in 2026.7.1 (#116418)
- gpt-5.6-* advertised on ChatGPT-OAuth route then silently falls back (#106786)

**Fix PRs identified:** PRs exist for several issues (e.g., #116805 for Discord credential exposure, #116958 for memory QMD index), but many of the highest-severity delivery and session-state bugs lack linked fix PRs.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Feature | Signals |
|---|---|---|
| [#7722](https://github.com/openclaw/openclaw/issues/7722) | Filesystem sandboxing via `tools.fileAccess` config | Long-standing (Feb 2026), 9 comments, security-focused |
| [#79902](https://github.com/openclaw/openclaw/issues/79902) | Companion-friendly SQLite transcript/session seams | Active since May 2026, 14 comments, advanced use-case |
| [#81913](https://github.com/openclaw/openclaw/issues/81913) | Stable plugin SDK for installed skill workflows | Plugin ecosystem maturity signal |
| [#64046](https://github.com/openclaw/openclaw/issues/64046) | Sensitive data redaction in config/logs/UI | International user base, security/compliance need |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) | Fully dynamic model discovery (OpenRouter+) | Provider catalog agility |
| [#9016](https://github.com/openclaw/openclaw/issues/9016) | Expose OpenRouter usage cost to agent runtime | Cost transparency |
| [#15032](https://github.com/openclaw/openclaw/issues/15032) | Per-spawn tool restrictions for sub-agents | Security sandboxing |
| [#63930](https://github.com/openclaw/openclaw/issues/63930) | Anthropic advisor tool (beta server-side tool) | Early adoption of new Anthropic capabilities |
| [#64438](https://github.com/openclaw/openclaw/issues/64438) | Remote reranker endpoint support for memory search | Extensibility |
| [#8724](https://github.com/openclaw/openclaw/issues/8724) | Per-model generation timeout config | Provider reliability |

**Prediction for next version:** Expect delivery of the **plugin SDK surface** (#81913), **filesystem sandboxing** (#7722), and **dynamic model discovery** (#10687) — these have the longest active engagement and align with the project's platform-hardening direction. The SQLite transcript seam (#79902) and cost exposure (#9016) are also strong candidates.

---

## 7. User Feedback Summary

**Pain points:**
- **Message delivery is unreliable** across Discord, WhatsApp, Telegram, and Matrix — users report messages that are persisted in transcripts but never delivered to the channel, or replies that appear in the dashboard but never reach the user.
- **Session state corruption after restarts** is a recurring theme: sessions stuck at `status=running`, crash-loop breakers that permanently suppress channels, and restart-recovery claims that prevent further agent replies.
- **Provider routing is brittle** — Ollama never selected as primary, gpt-5.6 silently falls back, Anthropic prompt cache invalidated every turn, MiniMax usage count semantics inverted.
- **Upgrade migrations are opaque** — silent SQLite cron store migration without preserving job config, new jobs defaulting to wrong delivery mode.
- **Security concerns** — credentials exposed in Discord REST error messages, plaintext API keys in config/logs/UI, 1Password rate-limit crash loops.

**Satisfaction signals:**
- Users appreciate the **dashboard visibility** (replies visible there even when channel delivery fails), the **multi-channel support**, and the **plugin/extensibility architecture**.
- The **Claws experimental lifecycle** and **Control UI** are generating positive engagement in PRs.
- The **audit execution identity** feature (#117034) is well-received as a transparency improvement.

---

## 8. Backlog Watch

**Long-unanswered issues needing maintainer attention:**

| Issue | Age | Reason for Watch |
|---|---|---|
| [#115326](https://github.com/openclaw/openclaw/issues/115326) | 4 days | P1 Platinum Hermit, 24 comments, crash-loop breaker permanently breaks Discord/WhatsApp, no linked fix PR |
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | 2 days | P1 Platinum Hermit, realtime voice resource unboundedness, 15 comments |
| [#69208](https://github.com/openclaw/openclaw/issues/69208) | ~3 months | P1 umbrella issue for duplicate transcript/replay/context bugs across all channels, 12 comments |
| [#85251](https://github.com/openclaw/openclaw/issues/85251) | ~1 month | P1 Codex silent-wedge after turn/started, 11 comments |
| [#114137](https://github.com/openclaw/openclaw/issues/114137) | 5 days | P1 Diamond Lobster, visible turns with no queued reply payloads, regression in latest release |
| [#107244](https://github.com/openclaw/openclaw/issues/107244) | ~2 weeks | P1 WhatsApp group messages never reach inbound, repro across versions |
| [#70903](https://github.com/openclaw/openclaw/issues/70903) | ~3 months | P0 persistent file-based provider cooldown blocks user for hours after billing recovery |
| [#56217](https://github.com/openclaw/openclaw/issues/56217) | ~4 months | P0 1Password crash-loop exhausts service account rate limits |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) | ~5 months | P2 dynamic model discovery, 10 comments, no maintainer action yet |
| [#7722](https://github.com/openclaw/openclaw/issues/7722) | ~5 months | P2 filesystem sandboxing, 9 comments, security feature request |
| [#114653](https://github.com/openclaw/openclaw/issues/114653) | 4 days | P1 spawned-session visibility lookup swallows errors silently |
| [#95840](https://github.com/openclaw/openclaw/issues/95840) | ~1 month | P2 contextPruning cache-ttl never fires for OpenAI models — dead firebreak for highest-volume provider |

**PRs needing maintainer review (stale or high-impact):**
- [#117047](https://github.com/openclaw/openclaw/pull/117047) — UI

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — Personal AI Agent & Assistant Ecosystem
**Date:** 2026-08-01 | **Scope:** 13 tracked open-source projects

---

## 1. Ecosystem Overview

The personal AI agent and assistant open-source landscape in mid-2026 is characterized by rapid consolidation around multi-channel delivery, provider-agnostic routing, and agent lifecycle management. Projects range from mature, high-velocity platforms (OpenClaw, Hermes Agent, IronClaw) pursuing stability and architectural hardening, to smaller, community-driven efforts (PicoClaw, NanoClaw, NullClaw) focused on niche protocol support or provider expansion. A clear industry shift is underway: projects are moving from feature-landing phases toward reliability, security hardening, and cross-platform parity, with multi-tenant isolation, credential safety, and session state integrity emerging as universal pain points. The ecosystem is healthy in contributor diversity but under pressure from accumulated technical debt in session management and provider routing layers.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Releases Today | Health Score |
|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | None | 🟡 Active / Hardening |
| **Hermes Agent** | 50 | 50 | v0.19.1 (v2026.7.30) | 🟢 Active / Shipping |
| **IronClaw** | 29 | 50 (31 merged) | None | 🟢 Active / Refactoring |
| **ZeroClaw** | 37 | 50 (5 merged) | None | 🟢 Active / RFC-heavy |
| **CoPaw (QwenPaw)** | 20 | 43 (13 merged) | None | 🟢 Active / Migrating |
| **LobsterAI** | ~4 | ~12 (11 merged) | None | 🟡 Stable / Polish |
| **Moltis** | 2 | 8 (2 merged) | None | 🟡 Moderate / Security focus |
| **NanoBot** | 5 | 17 (7 merged) | None | 🟢 Active / Sprint cadence |
| **NanoClaw** | 8 | 9 (3 merged) | None | 🟡 Moderate |
| **PicoClaw** | 2 | 3 (0 merged) | None | 🔴 Low velocity |
| **NullClaw** | 0 | 1 (0 merged) | None | 🔴 Dormant |
| **TinyClaw** | 0 | 0 | N/A | ⚪ No data |
| **ZeptoClaw** | 0 | 0 | N/A | ⚪ No data |

**Health Score** is a qualitative composite of: activity density, issue-to-PR ratio, release cadence, ratio of closed-to-open items, and presence of critical unaddressed bugs.

---

## 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Scale of engagement:** OpenClaw's 500 issues + 500 PRs in 24 hours dwarfs all other projects by 10–100×, indicating the largest active user and contributor base by a wide margin.
- **Multi-channel depth:** OpenClaw supports Discord, WhatsApp, Telegram, Matrix, Feishu, and webchat — broader than any peer. Hermes Agent covers Discord/Signal/Feishu/WeChat/Teams; NanoBot covers WeChat/Slack/WhatsApp; others are narrower.
- **Provider ecosystem breadth:** OpenClaw routes across OpenAI, Anthropic, Ollama, MiniMax, DeepSeek, XAI, and more, with dynamic model discovery as a roadmap signal — the most provider-diverse project in the ecosystem.
- **Architectural ambition:** The project is simultaneously hardening gateway reliability, isolating providers, and building plugin/sandboxing infrastructure — a platform-level play that no peer matches in scope.

**Technical Approach Differences:**
- OpenClaw uses a **gateway-centric architecture** with persistent node sockets, disk-cached agent lists, and channel-specific delivery lifecycles — more complex than the CLI-first (NanoBot, NullClaw) or single-runtime (Hermes Agent) approaches of peers.
- Its **session state model** (SQLite transcripts, memory search with QMD indexes, cross-channel context assembly) is more sophisticated than LobsterAI's or Moltis's simpler session handling.
- The **Claws experimental lifecycle** and **Control UI** represent a deliberate product-layer investment that most peers lack.

**Community Size Comparison:**
- OpenClaw's issue comment volume (24 comments on a single P1 crash-loop issue) and PR count indicate a community 5–20× larger than the next tier (Hermes Agent, IronClaw). The project has the deepest backlog and the highest number of long-running, unresolved issues — a sign of both scale and growing pains.

---

## 4. Shared Technical Focus Areas

| Focus Area | Projects | Specific Needs |
|---|---|---|
| **Session state & delivery reliability** | OpenClaw, Hermes Agent, CoPaw, LobsterAI | Messages persisted but not delivered; session corruption after restarts; crash-loop recovery; WAL reader exhaustion |
| **Provider routing & compatibility** | OpenClaw, Hermes Agent, NanoBot, CoPaw, ZeroClaw | Ollama never selected as primary, silent fallbacks, OAuth credential handling, post-fallback provider activation |
| **Multi-channel parity** | OpenClaw, Hermes Agent, NanoBot, NanoClaw, PicoClaw | Discord, WhatsApp, Telegram, Matrix, Signal, Feishu, iMessage — each project covers a subset; no single project achieves full parity |
| **Security hardening** | OpenClaw, Hermes Agent, IronClaw, Moltis, ZeroClaw | Credential exposure in error messages, cross-user memory leaks, path traversal, node pairing bypass, privileged tool gating |
| **Memory & context management** | OpenClaw, Hermes Agent, CoPaw, Moltis, ZeroClaw | Memory search index correctness, context window limits, compression losing early events, vector DB backends |
| **Desktop / UI UX** | Hermes Agent, LobsterAI, CoPaw, Moltis | Status indicators, sidebar controls, keyboard shortcuts, loading states, overlay persistence |
| **Container & deployment flexibility** | NanoClaw, IronClaw, ZeroClaw | Docker dependency friction, K8s-native runtime, Apple Container support, multi-arch images |
| **Observability & testing** | IronClaw, Moltis, ZeroClaw | Hermetic E2E testing, instrumentation (OTel/Langfuse), CI gate reliability |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target User | Architecture |
|---|---|---|---|
| **OpenClaw** | Full-platform AI assistant gateway | Power users, multi-channel operators | Gateway + node sockets + channel adapters + plugin system |
| **Hermes Agent** | General-purpose AI agent with broad channel support | Individual users, small teams | Single runtime, CLI + desktop + dashboard |
| **IronClaw** | Enterprise-grade agent platform with Reborn architecture | Teams, enterprises | Rust-based, extension-driven, MCP-centric |
| **CoPaw (QwenPaw)** | AgentScope 2.0 ecosystem integration | Chinese AI ecosystem users | AgentScope-native, memory/session lifecycle |
| **LobsterAI** | UI-focused AI chat with OpenClaw integration | End users, casual users | Renderer layer over OpenClaw backend |
| **NanoBot** | Lightweight multi-channel bot | Hobbyists, small deployments | CLI-first, JSONL→SQLite migration |
| **Moltis** | Secure, extensible agent with Nostr/Slack | Privacy-conscious users, decentralized teams | Rust, channel-agnostic, security-first |
| **NanoClaw** | Container-flexible agent platform | Developers, K8s/Apple users | Docker-first with native runner alternatives |
| **PicoClaw** | Lightweight multi-protocol bridge | IRC/DeltaChat/Simplex users | Minimal gateway, web UI |
| **NullClaw** | CLI-based LLM provider expansion | xAI/Grok users | Provider plugin architecture |
| **ZeroClaw** | Security-hardened agent with RFC-driven design | Security-conscious developers | Rust, WASM sandbox, policy-driven |

---

## 6. Community Momentum & Maturity

**Rapidly Iterating (high velocity, shipping fixes & features):**
- **OpenClaw** — 1,000+ daily issue/PR updates; in hardening mode ahead of a beta/stable cut.
- **Hermes Agent** — Just shipped v0.19.1 consolidating 1,000+ PRs; steady release cadence.
- **IronClaw** — 31 PRs merged in 24h; deep in a "Reborn" refactoring sprint.
- **ZeroClaw** — 50 PRs updated; RFC-driven design phase with active security work.
- **CoPaw (QwenPaw)** — 13 PRs merged; strong first-time contributor influx.

**Stabilizing (consistent output, fewer critical bugs):**
- **LobsterAI** — UI polish sprint; all 4 open issues resolved in a coordinated batch.
- **NanoBot** — Sprint-like cadence; WeChat and CI fixes merged; ready for a release.
- **Moltis** — Moderate pace; security hardening is the dominant theme.
- **NanoClaw** — Steady; release pipeline restored; Apple Container and K8s work in progress.

**Low Activity / At Risk:**
- **PicoClaw** — 3 PRs open for 30+ days without merge; slow velocity frustrates contributors.
- **NullClaw** — Single PR, zero community interaction; possible maintenance lull.
- **TinyClaw / ZeptoClaw** — No data available; may be inactive or unlisted.

---

## 7. Trend Signals

1. **From feature collection to reliability engineering:** Every major project is in a hardening phase — session state integrity, delivery guarantees, and crash recovery are the dominant issue categories. This signals the ecosystem is maturing past the "what can it do?" phase toward "does it work reliably?"

2. **Security is becoming a first-class requirement:** Cross-user memory leaks (IronClaw), credential exposure (OpenClaw, Hermes Agent), path traversal (Moltis, ZeroClaw), and privileged tool gating (Moltis, NanoClaw) are all receiving dedicated PRs. Multi-tenant isolation is the new baseline expectation.

3. **Provider consolidation and diversification are in tension:** Projects are simultaneously expanding provider support (DeepSeek, Grok, Antigravity, NVIDIA NIM) and struggling with routing reliability (Ollama never selected, silent fallbacks, OAuth post-failure). The community wants choice but needs stability.

4. **Container flexibility is a growing demand:** Docker dependency is increasingly seen as a limitation, not a feature. NanoClaw, IronClaw, and ZeroClaw are all exploring K8s-native, Apple Container, or native runner alternatives.

5. **Observability and testability are lagging:** Only IronClaw (hermetic testing), Moltis (instrumentation), and ZeroClaw (OTel) are investing in systematic observability. Most projects still rely on manual debugging and log inspection — a gap that will become critical as agent complexity grows.

6. **The "Reborn"/1.0 inflection point:** IronClaw is explicitly rebranding toward 1.0; OpenClaw is hardening for a beta/stable cut; Hermes Agent is consolidating releases. The ecosystem is entering a phase where API stability, documentation, and migration paths will differentiate the leaders from the followers.

---

*Report generated from 2026-08-01 GitHub API snapshots across all tracked repositories.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-01

---

## 1. Today's Overview

NanoBot shows a healthy development pulse on 2026-08-01, with **17 PRs updated** (10 open, 7 closed/merged) and **5 issues updated** (3 open, 2 closed). No new releases were published. The high volume of PR activity — spanning bug fixes for WeChat/WhatsApp channels, WebUI performance, session storage migration, and new provider support — indicates a sprint-like cadence focused on stability and platform coverage. The merge of several P1/P2 fixes (WeChat session expiry, Termux timezone, Slack thread scoping, WebUI scroll ownership) alongside new features (DeepSeek Responses API, Quick Chat) suggests the project is in an active refinement phase ahead of a potential release.

---

## 2. Releases

**None.** No new versions were published today. The project is accumulating fixes and features that may coalesce into a future release.

---

## 3. Project Progress

**7 PRs were closed/merged in the last 24 hours:**

| PR | Summary |
|---|---|
| [#5196](https://github.com/HKUDS/nanobot/pull/5196) | **fix(weixin):** Recover refreshed WeChat state after session expiry — closes #5195 |
| [#5192](https://github.com/HKUDS/nanobot/pull/5192) | **fix(slack):** Scope channel thread openers to their own session |
| [#5193](https://github.com/HKUDS/nanobot/pull/5193) | **fix(webui):** Preserve user scroll ownership near tail |
| [#5189](https://github.com/HKUDS/nanobot/pull/5189) | **fix(config):** Install timezone data (`tzdata`) on all platforms — closes #5187 |
| [#5173](https://github.com/HKUDS/nanobot/pull/5173) | **feat(session):** Migrate session storage from JSONL to SQLite |
| [#5145](https://github.com/HKUDS/nanobot/pull/5145) | **fix(ci):** Stabilize and speed up CI pipeline |
| [#4223](https://github.com/HKUDS/nanobot/pull/4223) | **fix(weixin):** Reload session state after pause expiry (updated today, closed) |

**Key advances:** WeChat channel reliability improved (two related fixes merged), session storage modernized to SQLite, WebUI UX refined, and CI reliability strengthened.

---

## 4. Community Hot Topics

**Most Active Issues:**
- **[#5149](https://github.com/HKUDS/nanobot/issues/5149)** — *[OPEN] no audio on WhatsApp* (3 comments, 0 👍) — Users cannot send audio messages via WhatsApp, though receiving works. This is the only issue with visible comment activity, indicating a real user pain point.
- **[#5195](https://github.com/HKUDS/nanobot/issues/5195)** — *[CLOSED] WeChat QR re-scan overwrites token* (2 comments) — Already fixed by PR #5196; the issue was well-diagnosed by the reporter with a clear root cause.

**Most Notable PRs:**
- **[#5197](https://github.com/HKUDS/nanobot/pull/5197)** — *feat(providers): support DeepSeek Responses API* — Routes `deepseek-v4-flash` through DeepSeek's native Responses API while keeping other models on Chat Completions. High strategic value for provider diversity.
- **[#5184](https://github.com/HKUDS/nanobot/pull/5184)** — *feat(webui): add Quick Chat and Temporary Chat* — Adds a first-class WebUI entry for quick conversations and an opt-in ephemeral chat mode. Signals demand for lighter-weight interaction patterns.

**Underlying needs:** Users want reliable multi-channel communication (WeChat, Slack, WhatsApp), better WebUI interactivity, and more provider options. The WeChat channel remains the most problematic, with two separate bugs reported and fixed in one day.

---

## 5. Bugs & Stability

**Bugs Ranked by Severity:**

| # | Issue | Status | Fix PR? |
|---|---|---|---|
| **P1** | [#5149](https://github.com/HKUDS/nanobot/issues/5149) — WhatsApp audio not sending (FFmpeg warning in logs) | OPEN | None yet |
| **P1** | [#5190](https://github.com/HKUDS/nanobot/issues/5190) — WebUI JS modules fail to load on Windows (MIME type `text/plain`) | OPEN | [#5191](https://github.com/HKUDS/nanobot/pull/5191) (OPEN, addresses this) |
| **P1** | [#5198](https://github.com/HKUDS/nanobot/issues/5198) — Cannot change models per session without reconfiguring the entire instance | OPEN | None yet |
| **P2** | [#5187](https://github.com/HKUDS/nanobot/issues/5187) — Termux fails due to missing timezone data | CLOSED | [#5189](https://github.com/HKUDS/nanobot/pull/5189) ✅ |
| **P2** | [#5195](https://github.com/HKUDS/nanobot/issues/5195) — WeChat QR re-scan token overwrite causing errcode -14 | CLOSED | [#5196](https://github.com/HKUDS/nanobot/pull/5196) ✅ |

**Stability note:** The WeChat channel had two distinct session-expiry bugs in one day, both now fixed. The Windows MIME type issue (#5190) has a corresponding PR (#5191) ready to merge. The WhatsApp audio bug (#5149) remains unresolved with no fix PR yet.

---

## 6. Feature Requests & Roadmap Signals

**User-requested features with clear signals:**

- **[#5184](https://github.com/HKUDS/nanobot/pull/5184)** — Quick Chat & Temporary Chat in WebUI — likely to ship soon (P2 priority, well-scoped).
- **[#5197](https://github.com/HKUDS/nanobot/pull/5197)** — DeepSeek Responses API support — P1 priority; signals the project is expanding its provider ecosystem.
- **[#1565](https://github.com/HKUDS/nanobot/pull/1565)** — Session export, import, search, and stats — opened March 2026, still open; aligns with the recent SQLite migration (#5173) and may be a natural next step.
- **[#1319](https://github.com/HKUDS/nanobot/pull/1319)** — `nanobot skill status` CLI command — opened Feb 2026, still open; addresses a real onboarding friction point for ClawHub skill users.
- **[#1656](https://github.com/HKUDS/nanobot/pull/1656)** — Handle `None` in string schema validation — opened March 2026, still open; a long-standing robustness gap.

**Prediction:** The next release will likely include the SQLite session migration, DeepSeek Responses API, WebUI Quick/Temporary Chat, and the Windows MIME type fix. The session management CLI commands (#1565) and skill status (#1319) are strong candidates for a follow-up release.

---

## 7. User Feedback Summary

**Pain Points:**
- **WeChat/Weixin reliability** is the #1 frustration — session expiry causes permanent silent failure unless manually re-scanned; QR re-scan corrupts tokens.
- **WhatsApp audio sending** is broken in the current version, a regression for users relying on voice communication.
- **Model switching per session** is not supported, forcing users to reconfigure the entire instance — a significant UX gap compared to cloud AI UIs.
- **Platform compatibility gaps** — Termux (Android) fails on timezone validation; Windows fails on JS module MIME types. Both are now being addressed.
- **WebUI session list performance** is a concern, with a PR (#5194) specifically targeting JSONL overhead.

**Satisfaction signals:**
- Users are actively engaging with the project (multiple PRs from community members, detailed bug reports with root-cause analysis).
- The WeChat fix (#5196) and Termux fix (#5189) were well-received, with reporters providing thorough reproduction steps.
- The SQLite session migration (#5173) signals trust in the project's architectural direction.

---

## 8. Backlog Watch

**Long-unanswered items needing maintainer attention:**

| Item | Age | Status | Concern |
|---|---|---|---|
| [#1656](https://github.com/HKUDS/nanobot/pull/1656) | ~5 months (Mar 2026) | OPEN | `None` value in string schema validation causes TypeError; a basic robustness fix that has been sitting for too long |
| [#1565](https://github.com/Hanobot/pull/1565) | ~5 months (Mar 2026) | OPEN | Session export/import/search/stats — high-value UX feature, but may conflict with the new SQLite migration (#5173) which should be resolved first |
| [#1319](https://github.com/HKUDS/nanobot/pull/1319) | ~5 months (Feb 2026) | OPEN | `nanobot skill status` CLI — addresses real onboarding friction; low complexity, high user value |
| [#5149](https://github.com/HKUDS/nanobot/issues/5149) | ~4 days (Jul 28) | OPEN | WhatsApp audio — no fix PR yet; the FFMpeg warning in logs suggests a codec or path issue that needs investigation |
| [#5198](https://github.com/HKUDS/nanobot/issues/5198) | ~1 day (Jul 31) | OPEN | Per-session model switching — architectural issue that may require design discussion |
| [#5190](https://github.com/HKUDS/nanobot/issues/5190) | ~1 day (Jul 31) | OPEN | Windows MIME type — has a fix PR (#5191) ready; needs maintainer review |

**Recommendation:** The maintainer should prioritize merging #5191 (Windows MIME fix) and reviewing #5197 (DeepSeek API) and #5184 (Quick Chat) for the next release. The long-standing PRs #1656, #1565, and #1319 should be either actively worked on or explicitly deprioritized to avoid stale contributor frustration.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-01

**Repository:** [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

---

## 1. Today's Overview

Hermes Agent is in a high-activity phase with 50 issues and 50 PRs updated in the last 24 hours, reflecting a healthy contributor and user engagement rate. The project shipped **v0.19.1** (tagged `v2026.7.30`), a patch release consolidating ~1,000+ PRs since v0.19.0 for downstream consumers (Docker images, hosted deployments, fresh installs). Of the 50 issues updated, 7 were closed and 43 remain open/active; of the 50 PRs, 48 remain open and 2 were merged/closed. The issue-to-PR ratio is balanced, and the volume of bug reports alongside feature proposals indicates a mature, actively used project with a growing community.

---

## 2. Releases

### Hermes Agent v0.19.1 (v2026.7.30)
- **Release Date:** July 30, 2026
- **Type:** Patch release
- **Scope:** Rolls up ~1,000+ PRs merged since v0.19.0 into a stable tagged release for Docker images, hosted deployments, and fresh installs.
- **Breaking Changes:** None indicated in the release notes (patch-level).
- **Migration Notes:** Users on v0.19.0 should update to v0.19.1 to benefit from accumulated fixes. The release tag is `v2026.7.30`.
- **Link:** [Release v2026.7.30](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.7.30)

---

## 3. Project Progress

### Merged / Closed PRs (2 items)
- **PR #75698** — `[CLOSED]` feat(antigravity): add structured stream-json Hermes runtime (replaced text-only `agy -p` adapter with structured `stream-json` transport; preserves Antigravity conversation IDs; fails closed on missing transport).
- **PR #75654** — `[CLOSED]` Both desktop and dashboard builds fail after hermes update (build fix, closed).

### Notable PRs Updated (Open)
- **PR #75699** — `fix(cli): untrack sqlite connections only after close succeeds` — P1 fix for session DB connection tracking race condition (directly addresses Issue #75269).
- **PR #75697** — `fix(anthropic): never refresh an API-key session into Claude Code OAuth credentials` — P2 security/credential hardening (addresses #75641).
- **PR #75701** — `fix: harden Copilot routing fail-closed` — P1 routing safety improvement.
- **PR #75677** — `fix(managed_uv): keep project config for locked candidate sync` — P2 dependency management fix.
- **PR #75623** — `fix(cron): close GitHub auth-header exemption abuse in prompt scanner` — P3 security regression fix.
- **PR #74785** — `fix: classify hard quota 429s as billing + prevent writer thread leak under 429 storms` — P2 stability fix for Z.AI quota exhaustion incident.
- **PR #75325** — `feat(discord): add conservative voice barge-in` — New Discord voice feature.
- **PR #75502** — `feat(signal): support shared accounts with disjoint group ownership` — New Signal platform feature.
- **PR #73861** — `feat(desktop): add French locale` — i18n expansion for desktop app.
- **PR #75397** — `feat(desktop): add collapsible calendar session groups` — UX improvement for session management.
- **PR #75688** — `feat(mcp): make keepalive probe configurable` — MCP server reliability enhancement.

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)
| Issue | Comments | Severity | Summary |
|-------|----------|----------|---------|
| [#24140](https://github.com/NousResearch/hermes-agent/issues/24140) | 13 | P1 (CLOSED) | All models rejected "context window below minimum 64,000 tokens" — Telegram completely down. Affects Kimi and MiniMax providers. |
| [#52484](https://github.com/NousResearch/hermes-agent/issues/52484) | 5 | P2 (OPEN) | Token Incinerator — Endless Recursive Loop in `delegate_task` without Max Depth Limit. Architectural vulnerability in agent delegation. |
| [#75556](https://github.com/NousResearch/hermes-agent/issues/75556) | 4 | P2 (CLOSED) | v0.19.1 in-app Update still loops on Windows despite prior fix. |
| [#27941](https://github.com/NousResearch/hermes-agent/issues/27941) | 4 | P3 (OPEN) | `codex_app_server` Kanban workers cannot write artifacts when workspace differs from cwd. |
| [#74997](https://github.com/NousResearch/hermes-agent/issues/74997) | 3 | P3 (CLOSED) | Ambient reaction mode — continuous color trace as alternative to emoji. (Feature, closed) |
| [#64847](https://github.com/NousResearch/hermes-agent/issues/64847) | 3 | P3 (OPEN) | `/model` command on Feishu stores Markdown-link-formatted model name in config.yaml, breaking API calls. |
| [#66329](https://github.com/NousResearch/hermes-agent/issues/66329) | 3 | P2 (OPEN) | Model picker groups selected model under "CUSTOM ENDPOINT" instead of correct named provider. |
| [#52554](https://github.com/NousResearch/hermes-agent/issues/52554) | 3 | P3 (OPEN) | Desktop App: floating "Quote" button on selected text in chat pane. (Feature, 1 👍) |
| [#75598](https://github.com/NousResearch/hermes-agent/issues/75598) | 3 | P2 (OPEN) | Update issues — multiple gateways conflicting, profile switching doesn't deactivate other stuff. |
| [#73211](https://github.com/NousResearch/hermes-agent/issues/73211) | 3 | P3 (OPEN) | Desktop v0.19.0 removed status indicators (context window, YOLO, terminal/tool). 4 👍. |

### Most Active PRs (by comment count)
Most PRs are freshly created with no comments yet, indicating they are newly opened and awaiting review. The most notable PRs by topic activity include:
- [#75699](https://github.com/NousResearch/hermes-agent/pull/75699) — SQLite connection tracking fix (P1, session stability)
- [#75697](https://github.com/NousResearch/hermes-agent/pull/75697) — Anthropic OAuth credential hardening (P2, security)
- [#75701](https://github.com/NousResearch/hermes-agent/pull/75701) — Copilot routing fail-closed (P1, security)
- [#75325](https://github.com/NousResearch/hermes-agent/pull/75325) — Discord voice barge-in (P3, new feature)

**Underlying Needs Analysis:** The community is heavily focused on (1) **stability and reliability** — session management, credential handling, and update mechanisms are the top pain points; (2) **platform parity** — Discord, Signal, Feishu, WeChat/Weixin, and Teams all have active bugs or feature requests; (3) **security hardening** — OAuth credential leaks, prompt scanner bypasses, and sandbox provenance are receiving dedicated attention; (4) **desktop UX** — status indicators, locale support, and session management are user-requested improvements.

---

## 5. Bugs & Stability

### Ranked by Severity

#### 🔴 P1 — Critical
1. **[#75588](https://github.com/NousResearch/hermes-agent/issues/75588)** — Short tool-only suffix can make context compressor scan past messages (`_find_tail_cut_by_tokens()` returns `len(messages) + 1`, causing index-out-of-range in `_find_latest_context_summary()`). **No fix PR identified.**
2. **[#75269](https://github.com/NousResearch/hermes-agent/issues/75269)** — SessionDB retains WAL readers from finished worker threads until shutdown, exhausting `RLIMIT_NOFILE`. **Fix PR #75699** is open (P1).
3. **[#24140](https://github.com/NousResearch/hermes-agent/issues/24140)** — All models rejected "context window below minimum 64,000 tokens" on Telegram (Kimi, MiniMax). **CLOSED** — likely resolved in v0.19.1.

#### 🟠 P2 — High
4. **[#52484](https://github.com/NousResearch/hermes-agent/issues/52484)** — Token Incinerator: Endless Recursive Loop in `delegate_task` without Max Depth Limit. **No fix PR identified.**
5. **[#75587](https://github.com/NousResearch/hermes-agent/issues/75587)** — Deleted session still surfaces permission/approval prompts while agent turn is in flight. **No fix PR identified.**
6. **[#75692](https://github.com/NousResearch/hermes-agent/issues/75692)** — PermissionError `[Errno 13] Permission denied` after SFTP `chown`. **No fix PR identified.**
7. **[#54671](https://github.com/NousResearch/hermes-agent/issues/54671)** — `fallback_providers` with `xai-oauth` fails — no code path handles OAuth JWT credentials post-fallback activation. **No fix PR identified.**
8. **[#75598](https://github.com/NousResearch/hermes-agent/issues/75598)** — Update issues: multiple gateways

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-01

**Project:** [sipeed/picoclaw](https://github.com/sipeed/picoclaw) — A lightweight, multi-channel AI assistant gateway supporting IRC, DeltaChat, Simplex, and web interfaces.

---

## 1. Today's Overview

PicoClaw shows low but steady activity on 2026-08-01, with 2 issues updated and 3 pull requests updated in the last 24 hours. No new releases were published, and no issues or PRs were merged or closed today. All three open PRs remain in a pending-review state, having been updated (likely with incremental commits or comment activity) as recently as 2026-07-31. The project appears to be in a maintenance/iteration phase, with community contributions flowing in but merge velocity remaining slow. Overall health is stable but throughput is minimal.

---

## 2. Releases

**None.** No new version has been published. The latest known release in the dataset is version 0.3.1 (referenced in Issue #3292 as the user's installed version). A release gap of unknown duration exists; the maintainer should consider whether a patch or minor release is warranted given the pending PRs.

---

## 3. Project Progress

**No PRs were merged or closed today.** All three open PRs remain under review:

| PR | Title | Opened | Days Open | Status |
|---|---|---|---|---|
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | refactor(deltachat): cleanup implementation, documentation (−200LOC) | 2026-07-03 | 30 days | Open |
| [#3193](https://github.com/sipeed/picoclaw/pull/3193) | Added simplex channel type | 2026-06-27 | 35 days | Open |
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) | feat(models): add configurable default fallback chain | 2026-07-01 | 31 days | Open |

No features were advanced to production today. The deltachat refactor (#3222) is the most impactful pending change, removing legacy code and hardcoded values, but it has been awaiting review for a full month.

---

## 4. Community Hot Topics

Both issues and all three PRs received 0 👍 reactions and have low comment counts (1–2), indicating limited community engagement volume but consistent contributor activity.

**Most Active Items (by recency of update):**

- **[Issue #3287](https://github.com/sipeed/picoclaw/issues/3287)** — *[Feature] Better support long messages in IRC* — Updated 2026-07-31, 2 comments. The need: IRCv3 clients split messages exceeding 512 bytes, and PicoClaw currently treats each fragment as a separate message, degrading conversation coherence. The underlying need is **message integrity across protocol boundaries** for IRC users relying on PicoClaw as a bridge.

- **[Issue #3292](https://github.com/sipeed/picoclaw/issues/3292)** — *[BUG] CPU usage too high when focus on input box in chat interface* — Updated 2026-07-31, 1 comment. Reported on Debian/Linux with Firefox, using deepseek-v4-flash. The underlying need is **frontend performance optimization**, particularly around input field event handling in the web UI.

- **[PR #3193](https://github.com/sipeed/picoclaw/pull/3193)** — *Added simplex channel type* — Updated 2026-07-31, 35 days open. Signals demand for **privacy-first, metadata-resistant messaging** as a first-class channel.

- **[PR #3200](https://github.com/sipeed/picoclaw/pull/3200)** — *feat(models): add configurable default fallback chain* — Updated 2026-07-31, 31 days open. Reflects user demand for **model resilience and user control** over fallback behavior in the web UI.

- **[PR #3222](https://github.com/sipeed/picoclaw/pull/3222)** — *refactor(deltachat): cleanup* — Updated 2026-07-31, 30 days open. Signals a need for **codebase hygiene and modernization** of the DeltaChat integration.

---

## 5. Bugs & Stability

**1 bug reported (medium severity):**

| # | Title | Severity | Fix PR? |
|---|---|---|---|
| [#3292](https://github.com/sipeed/picoclaw/issues/3292) | CPU usage too high when focus on input box in chat interface | Medium — performance degradation, not a crash | No open fix PR |

**Assessment:** The bug is reproducible in a specific environment (Debian/Linux, Firefox, deepseek-v4-flash) and does not cause crashes or data loss, but it impacts usability for desktop users. No regression is indicated, and no fix PR has been submitted. The maintainer should investigate whether this is a frontend JavaScript event-loop issue or a backend polling loop triggered by input focus.

---

## 6. Feature Requests & Roadmap Signals

Three features are actively being developed or requested, all pointing toward **expanding channel coverage and user configurability**:

1. **Simplex channel type** ([PR #3193](https://github.com/sipeed/picoclaw/pull/3193)) — If merged, PicoClaw would support the Simplex Chat protocol, adding a metadata-resistant messaging channel. This is a **high-probability next-version feature** given it is already a submitted and updated PR.

2. **Configurable default fallback chain for models** ([PR #3200](https://github.com/sipeed/picoclaw/pull/3200)) — Would allow users to define a prioritized model chain (primary + fallbacks) in the web UI, persisted via the backend API. This is also **high-probability for the next release** — it is a user-facing feature with a clear PR description and implementation intent.

3. **Better long message support in IRC** ([Issue #3287](https://github.com/sipeed/picoclaw/issues/3292)) — A protocol-level enhancement to reassemble IRCv3 long messages. This signals that **IRC users are a growing audience** and that message fidelity is a priority. Likely to be addressed in a future patch or minor release.

**Predicted next-version scope:** Simplex channel support + model fallback chain configuration, with IRC long-message handling as a parallel effort.

---

## 7. User Feedback Summary

**Pain Points:**
- **Performance:** High CPU usage in the web UI when the input box is focused (Issue #3292). This is the most direct user-reported frustration and affects daily usability.
- **Protocol limitations:** IRC message fragmentation breaks conversation context (Issue #3287), frustrating users who rely on PicoClaw as an IRC bridge.

**Use Cases:**
- Multi-protocol AI assistant bridging (IRC, DeltaChat, Simplex, Web)
- Self-hosted AI with model fallback resilience for reliability
- Privacy-conscious messaging via Simplex and DeltaChat

**Satisfaction Signals:**
- Users are actively contributing PRs (3 open PRs from different authors), indicating a healthy contributor base.
- No negative sentiment in issue titles or descriptions; the bug report (#3292) is factual and well-structured.
- The Chinese-language issue title in #3292 suggests a non-English-speaking user base, indicating international adoption.

**Dissatisfaction Signals:**
- Slow PR merge velocity (all 3 PRs open for 30+ days) may frustrate contributors.
- No releases in the recent period may signal a release pipeline bottleneck.

---

## 8. Backlog Watch

The following items have been open for an extended period and require maintainer attention:

| Item | Type | Opened | Days Open | Priority |
|---|---|---|---|---|
| [#3193](https://github.com/sipeed/picoclaw/pull/3193) — Added simplex channel type | PR | 2026-06-27 | 35 days | 🔴 High — New channel type, significant feature |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) — refactor(deltachat): cleanup, −200LOC | PR | 2026-07-03 | 30 days | 🔴 High — Code health, removes legacy code |
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) — feat(models): configurable default fallback chain | PR | 2026-07-01 | 31 days | 🔴 High — User-facing feature |
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) — Better support long messages in IRC | Issue | 2026-07-22 | 10 days | 🟡 Medium — Protocol improvement |
| [#3292](https://github.com/sipeed/picoclaw/issues/3292) — CPU usage too high in chat input | Issue | 2026-07-24 | 8 days | 🟡 Medium — Performance bug |

**Recommendation:** The three open PRs should be prioritized for review and merge. PR #3222 (deltachat cleanup) is the lowest-risk merge candidate and could be completed quickly to clear the backlog. PR #3193 (simplex) and #3200 (fallback chain) are higher-effort but high-value. Issue #3292 (CPU bug) should be triaged to determine if it is a frontend or backend issue before assigning a fix.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-01

**Repository:** [github.com/qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)

---

## 1. Today's Overview

NanoClaw shows moderate-to-high development activity on 2026-08-01, with 8 issues updated and 9 pull requests updated across the project. No new releases were published. Six PRs remain open (spanning features, hardening, and documentation), while three PRs were closed or merged today — including a release-path restoration (#3163) and two feature/integration PRs (#3076 iMessage adapter, #1678 voice transcription docs). The project's issue tracker reflects a healthy backlog of community requests centered on container runtime flexibility (Docker alternatives, K8s support), platform expansion (iMessage, SMS/voice), and security hardening. Overall project health appears active with a steady cadence of contributions.

---

## 2. Releases

**No new releases today.** The latest release path was the subject of PR [#3163](https://github.com/qwibitai/nanoclaw/pull/3163) (CLOSED), which restored the v2.1.54 release path — suggesting a prior release pipeline disruption that has now been addressed. No migration notes or breaking changes to report.

---

## 3. Project Progress

### Merged / Closed PRs Today
| PR | Description |
|---|---|
| [#3163](https://github.com/qwibitai/nanoclaw/pull/3163) | `fix(release)`: Restored the v2.1.54 release path — critical for release pipeline health |
| [#3076](https://github.com/qwibitai/nanoclaw/pull/3076) | `feat(imessage)`: Unified local+hosted iMessage adapter targeting spectrum-ts v11 — a channel integration shipped |
| [#1678](https://github.com/qwibitai/nanoclaw/pull/1678) | `docs(skills)`: Updated voice transcription skills for Telegram + Linux — expanded platform support documentation |

### Open PRs Advancing
| PR | Type | Description |
|---|---|---|
| [#3164](https://github.com/qwibitai/nanoclaw/pull/3164) | Feature/Skill | Hosted iMessage (Photon) — supersedes #2999 with a working registration flow |
| [#2809](https://github.com/qwibitai/nanoclaw/pull/2809) | Feature | Apple Container runtime + remote OneCLI gateway — adds `CONTAINER_RUNTIME=container` env-gated option |
| [#2651](https://github.com/qwibitai/nanoclaw/pull/2651) | Security Hardening | Validates pending question response origin — prevents cross-channel response injection |
| [#3041](https://github.com/qwibitai/nanoclaw/pull/3041) | Feature/Skill | Adds Dial channel adapter for SMS + AI voice calls |
| [#3161](https://github.com/qwibitai/nanoclaw/pull/3161) | Fix | Redacts secrets from host structured logs before writing to `nanoclaw.log` |
| [#2954](https://github.com/qwibitai/nanoclaw/pull/2954) | Docs | Adds security reporting and triage policy documentation |

---

## 4. Community Hot Topics

### Most Active Issues
| Issue | Comments | 👍 | Topic |
|---|---|---|---|
| [#1184](https://github.com/qwibitai/nanoclaw/issues/1184) | 3 | 1 | Deploying nanoclaw in restricted K8s environments (Sealos) — a production blocker for enterprise users |
| [#1732](https://github.com/qwibitai/nanoclaw/issues/1732) | 3 | 0 | Native runner mode bypassing Docker — direct host-tool access for tmux, headed browsers, macOS APIs |
| [#1225](https://github.com/qwibitai/nanoclaw/issues/1225) | 2 | 0 | Running nanoclaw without Docker on Windows/Linux |
| [#2354](https://github.com/qwibitai/nanoclaw/issues/2354) | 1 | 1 | Kubernetes container runtime for agent spawning |

### Underlying Needs Analysis
The dominant community theme is **container runtime flexibility**. Three separate issues (#1184, #1225, #1732, #2354) all orbit the same fundamental pain point: users want to run NanoClaw without Docker or in environments where Docker is unavailable or impractical (restricted K8s clusters, Windows without Docker Desktop, Apple Container microVMs). The #1732 request for a "native runner mode" and #2354's K8s-native pod spawning represent two divergent solutions — one bypasses containers entirely, the other replaces Docker with K8s as the orchestrator. The Apple Container issues (#2588, #2589) further reveal that the macOS/container story is fragile and needs maintainer attention. The security issue #2923 (card defacement) and #2651 PR indicate the community is increasingly concerned about multi-tenant security in interactive agent sessions.

---

## 5. Bugs & Stability

### Ranked by Severity

| # | Issue | Severity | Status | Fix PR? |
|---|---|---|---|---|
| [#3162](https://github.com/qwibitai/nanoclaw/issues/3162) | **Telegram pairing silently broken for process lifetime** if boot-time `getMe` fails — a single failed HTTP call permanently locks users out with no error feedback | 🔴 High | OPEN (0 comments) | No |
| [#2923](https://github.com/qwibitai/nanoclaw/issues/2923) | **Security: `ask_user_question` card can be defaced** by a forged click before origin authz — display integrity spoof, not a data breach but a UX trust issue | 🟠 Medium-High | OPEN (0 comments) | Yes — [#2651](https://github.com/qwibitai/nanoclaw/pull/2651) (OPEN, addresses origin validation) |
| [#2589](https://github.com/qwibitai/nanoclaw/issues/2589) | Apple Container: `host.docker.internal` doesn't resolve inside microVM — OneCLI proxy URL broken | 🟡 Medium | OPEN (1 comment) | No |
| [#2588](https://github.com/qwibitai/nanoclaw/issues/2588) | `skill/apple-container` branch substantially out of sync with mainline — `/convert-to-apple-container` skill fails immediately | 🟡 Medium | OPEN (1 comment) | No |

**Note:** PR [#2651](https://github.com/qwibitai/nanoclaw/pull/2651) directly addresses the class of issue raised in #2923 and has been open since May 30, 2026 — it should be prioritized for merge.

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Requested Feature | Likelihood of Next Release |
|---|---|---|
| [#1732](https://github.com/qwibitai/nanoclaw/issues/1732) | Native runner mode (bypass Docker for host-tool access) | Medium — substantial architectural change, but addresses a clear blocker |
| [#2354](https://github.com/qwibitai/nanoclaw/issues/2354) | K8s-native container runtime for agent spawning | Medium — aligns with enterprise deployment demand from #1184 |
| [#3164](https://github.com/qwibitai/nanoclaw/pull/3164) | Hosted iMessage (Photon) with working registration | High — PR is feature-complete and follows guidelines |
| [#3041](https://github.com/qwibitai/nanoclaw/pull/3041) | Dial channel adapter (SMS + AI voice calls) | Medium — new channel integration, follows existing pattern |
| [#2809](https://github.com/qwibitai/nanoclaw/pull/2809) | Apple Container runtime + remote OneCLI gateway | Medium — env-gated, backward-compatible, addresses #2588/#2589 |
| [#3076](https://github.com/qwibitai/nanoclaw/pull/3076) | Unified iMessage local+hosted adapter | Shipped — merged today |

**Prediction:** The next version will likely include the Apple Container runtime (#2809) and iMessage Photon (#3164), as both are feature-complete PRs with clear integration paths. The K8s runtime (#2354) and native runner (#1732) are longer-term roadmap items requiring more architectural work.

---

## 7. User Feedback Summary

### Pain Points
- **Docker dependency is a persistent friction point.** Multiple users (#1184, #1225, #1732) report inability to run NanoClaw in environments without Docker — Windows users, restricted K8s clusters (Sealos), and Apple Container microVMs. The project's container-first architecture is both a strength and a constraint.
- **Apple Container support is fragile.** Two separate issues (#2588, #2589) report that the Apple Container skill branch is broken (out of sync with mainline, missing Node/tsc runtime after migration to bun) and that `host.docker.internal` doesn't resolve in the microVM.
- **Security concerns in interactive mode.** The `ask_user_question` card defacement (#2923) and the cross-channel response validation gap (#2651) show that as NanoClaw adds more channel integrations, the attack surface for interactive features grows.
- **Telegram reliability.** Issue #3162 reports a silent, permanent lockout from Telegram pairing due to a transient boot-time failure — a poor user experience with no recovery path or error messaging.

### Positive Signals
- Users appreciate the **minimalist, lightweight architecture** (#1184) as a deliberate design choice over "bloated agent frameworks."
- The **active channel expansion** (iMessage, Dial/SMS, Telegram voice transcription) shows strong community-driven integration momentum.
- Security hardening PRs (#2651, #3161, #2954) indicate the project takes a responsible approach to trust and observability.

---

## 8. Backlog Watch

### Long-Unanswered Items Needing Maintainer Attention

| Item | Age | Status | Why It Matters |
|---|---|---|---|
| [#1184](https://github.com/qwibitai/nanoclaw/issues/1184) | ~3.5 months (Mar 17) | OPEN, 3 comments | Enterprise K8s deployment blocker — Sealos users cannot adopt NanoClaw |
| [#1732](https://github.com/qwibitai/nanoclaw/issues/1732) | ~3 months (Apr 10) | OPEN, 3 comments | Addresses a fundamental architectural limitation (Docker-only); has community interest |
| [#1225](https://github.com/qwibitai/nanoclaw/issues/1225) | ~3.5 months (Mar 18) | OPEN, 2 comments | Basic accessibility request — running without Docker on Windows/Linux |
| [#2354](https://github.com/qwibitai/nanoclaw/issues/2354) | ~2 months (May 8) | OPEN, 1 comment, 1 👍 | K8s-native runtime aligns with enterprise use case from #1184 |
| [#2651](https://github.com/qwibitai/nanoclaw/pull/2651) | ~1 month (May 30) | OPEN | Security hardening PR addressing the exact class of issue in #2923 — should be merged promptly |
| [#2588](https://github.com/qwibitai/nanoclaw/issues/2588) | ~2 months (May 22) | OPEN | Apple Container skill is broken for all users attempting the documented workflow |
| [#2589](https://github.com/qwibitai/nanoclaw/issues/2589) | ~2 months (May 22) | OPEN | Apple Container networking is fundamentally broken without a workaround |
| [#3161](https://github.com/qwibitai/nanoclaw/pull/3161) | Today (Jul 31) | OPEN | Security fix for log secret redaction — should be reviewed and merged |
| [#3164](https://github.com/qwibitai/nanoclaw/pull/3164) | Today (Jul 31) | OPEN | iMessage Photon feature — ready to ship if maintainer reviews |

**Priority recommendation:** The maintainer should focus on merging the security hardening PRs (#2651, #3161) and addressing the Apple Container breakage (#2588, #2589) next, as these affect the reliability of existing features. The Docker-agnostic runtime questions (#1184, #1225, #1732, #2354) represent a strategic decision that may require a dedicated RFC or design document before implementation begins.

---

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-08-01

**Repository:** [github.com/nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)

---

## 1. Today's Overview

NullClaw is in a notably quiet state on 2026-08-01, with zero issues updated or created in the last 24 hours and no new releases published. The only activity is a single open pull request (#981) submitted two days ago by contributor `valonmulolli`, which adds a new `grok-cli` provider for xAI's Grok CLI. Overall project health appears stable but low-velocity: no bug reports, no feature discussions, and no release activity suggest a maintenance or community-engagement lull. The project is not stalled—progress is incremental—but there is minimal community-driven momentum at this time.

---

## 2. Releases

**No new releases.** The latest release data is empty. No version bumps, changelogs, or migration notes are available for this period.

---

## 3. Project Progress

| PR | Status | Summary |
|----|--------|---------|
| [#981](https://github.com/nullclaw/nullclaw/pull/981) | 🟡 Open | Adds `grok-cli` provider for xAI Grok CLI, following the existing spawn-per-request pattern used by `codex-cli`, `gemini-cli`, and `claude-cli`. The provider is optional and requires the `grok` CLI to be installed and authenticated locally. |

**No PRs were merged or closed today.** The sole open PR represents continued expansion of the provider ecosystem, a core architectural pattern of the project.

---

## 4. Community Hot Topics

No issues or pull requests have accumulated significant comments or reactions in the last 24 hours. There are no active discussion threads to highlight. The most recent PR (#981) has zero comments and zero 👍 reactions as of the data snapshot, suggesting it has not yet drawn community attention or review.

---

## 5. Bugs & Stability

**No bugs, crashes, or regressions reported today.** The issue tracker shows zero open or active items updated in the last 24 hours. No fix PRs exist in the current activity window. Stability appears uncompromised, though the absence of bug reports may also indicate low user reporting activity rather than an absence of issues.

---

## 6. Feature Requests & Roadmap Signals

The most prominent signal is **provider ecosystem expansion**:

- **[PR #981](https://github.com/nullclaw/nullclaw/pull/981)** — `grok-cli` provider for xAI Grok CLI. This follows a consistent pattern (`codex-cli`, `gemini-cli`, `claude-cli`) and signals that the maintainer (or community) is actively broadening LLM provider support. If merged, this would mark the addition of xAI Grok as a fifth CLI-based provider.

**Prediction:** The next version is likely to focus on merging pending provider PRs and potentially expanding to additional CLI-based LLM tools. No roadmap items or milestone labels were visible in the current data.

---

## 7. User Feedback Summary

**No user feedback data is available** for this period. There are zero issues, comments, or reactions to analyze. Without community interaction data, satisfaction, pain points, and use-case insights cannot be assessed. This is a data gap rather than an indicator of user dissatisfaction.

---

## 8. Backlog Watch

| Item | Status | Notes |
|------|--------|-------|
| [PR #981](https://github.com/nullclaw/nullclaw/pull/981) | Open (2 days) | Awaiting maintainer review/merge. No comments yet—may need a nudge or review assignment. |
| **All Issues** | None active | No long-unanswered issues exist in the current dataset. |

The primary item requiring maintainer attention is **PR #981**, which has been open for two days without review or comment. If the maintainer intends to continue the provider-expansion trajectory, prioritizing this review would be advisable.

---

**Digest generated at 2026-08-01 | Data source: GitHub API snapshot for `nullclaw/nullclaw`**

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-01

## 1. Today's Overview

IronClaw is in a high-velocity development phase heading into the "Reborn" release cycle. Over the last 24 hours, 79 items were updated across issues (29) and PRs (50), with 31 PRs merged/closed and 19 still open. No new releases were published. The activity is heavily weighted toward architecture refactoring (target architecture WS1.1–WS1.3), CI/CD gate hardening, and skill/agent lifecycle work, indicating the project is in a consolidation and foundation-strengthening sprint rather than shipping new user-facing features.

## 2. Releases

None. No new versions were published in the last 24 hours. The last release activity was PR #5598 (chore: release) bumping `ironclaw_common` 0.4.2→0.5.0 (⚠ API breaking), `ironclaw_safety` 0.2.2→0.2.3, and `ironclaw_skills` 0.3.0→0.4.0 (⚠ API breaking).

## 3. Project Progress

**Merged/closed PRs (31 total, highlights):**
- **#6930** — `feat(extensions): register hosted MCP servers` (CLOSED): Tenant-runtime registration for hosted MCP servers wired into the existing extension install/setup/activation lifecycle; auto-detects no-auth, bearer, and OAuth credentials.
- **#6967** — `refactor(contracts): complete the turn vocabulary in host_api and retire the turns shims (WS1.1)` (CLOSED): Completes the neutral turn vocabulary extraction, a prerequisite for the target architecture.
- **#6964** — `refactor(llm): delete the verified-dead half of the reasoning module (WS8 closeout)` (CLOSED): Safe deletion of dead code in `ironclaw_llm::reasoning`.
- **#6932** — `chore(deps): bump the everything-else group` (CLOSED): 34 dependency updates including `async-trait`, `thiserror`, `uuid`.
- **#6496** — `Complete Telegram attachment support in both directions` (CLOSED): Full inbound/outbound Telegram attachment handling.
- **#6910**, **#6909**, **#6904** — UI fixes (shared Switch component, Admin deletion flow to ConfirmDialog, Logs page pagination fix).

**Open PRs (19 total, highlights):**
- **#6975** — `refactor(contracts): extract ironclaw_loop_contracts and flip agent_loop (WS1.2)` — Open, XL size, medium risk.
- **#6977** — `refactor(contracts): extract ironclaw_extension_contracts and close dual import paths (WS1.3)` — Open, XL size, medium risk.
- **#6979** — `docs(target-architecture): reconcile with #6930 hosted-MCP registration` — Docs-only reconciliation.
- **#6973** — `perf: recover hosted Postgres API capacity regressed by row-native process journal (#6696)` — Performance recovery PR.
- **#6952** — `ci: scope Reborn PR tests by affected area` — CI test-scoping improvement.
- **#6938** — `fix(skills): the model chooses the skill, not a keyword scorer` — Skill activation fix (stacked on #6745, part of #6941).
- **#6831** — `feat(reborn): standardized messaging framework` — 16 core operations, canonical JSON schemas, 12-code error taxonomy.
- **#6780** — `feat(reborn-ironhub): deep-link register/install gateway + private manifest source` — IronHub registration handshake.

## 4. Community Hot Topics

**Most active Issues:**
- **[#6284](https://github.com/nearai/ironclaw/issues/6284)** — `[epic] error-recoverability endgame` (15 comments, updated 2026-07-31): The most-discussed issue. Defines a contract requiring every mid-run error to be survivable, visible to the model, and actionable. Reflects deep concern about agent reliability and graceful degradation.
- **[#6963](https://github.com/nearai/ironclaw/issues/6963)** — Path-keyed CI gates surviving #6946 (5 comments): Tracking eight discovered defects in CI gates that a prior PR did not rewrite. Signals CI infrastructure debt.
- **[#6524](https://github.com/nearai/ironclaw/issues/6524)** — `[epic] Hermetic capability and journey testing platform` (4 comments): Addresses the gap between having test fixtures and having deterministic, meaningful coverage for every capability and journey.

**Most active PRs:**
- **[#6975](https://github.com/nearai/ironclaw/pull/6975)** and **[#6977](https://github.com/nearai/ironclaw/pull/6977)** — Both XL-sized contract extraction PRs, the backbone of the WS1.2/WS1.3 target architecture work. High comment volume expected on review.
- **[#6973](https://github.com/nearai/ironclaw/pull/6973)** — Postgres capacity recovery, directly addresses a critical performance regression.

**Underlying need:** The community is pushing for architectural clarity (contract extraction, neutral vocabulary), reliable agent behavior (error recovery, skill routing), and testability (hermetic E2E coverage). The volume of epic-level issues signals that the project is in a foundational re-architecture phase ("Reborn").

## 5. Bugs & Stability

**Critical/High:**
- **[#6900](https://github.com/nearai/ironclaw/issues/6900)** — `[P0, security]` Shared-channel default subject binding collapses all users into the operator's memory namespace (cross-user memory leak). **No fix PR yet.** This is a severe multi-tenant isolation bug.
- **[#6778](https://github.com/nearai/ironclaw/issues/6778)** — Hosted-MCP discovered tool catalogs published per extension id, not per installation, causing cross-user metadata exposure on multi-principal servers. **No fix PR yet.**
- **[#6897](https://github.com/nearai/ironclaw/issues/6897)** (CLOSED) — Model gateway catch-all retries deterministic LLM errors as Unavailable for ~7 minutes. Fix was in #6897.
- **[#6853](https://github.com/nearai/ironclaw/issues/6853)** (CLOSED) — Compaction leak matches poisoning context recovery instead of redacting. Fix was in #6853.

**Medium:**
- **[#6974](https://github.com/nearai/ironclaw/issues/6974)** — libSQL `thread_store_writes` pathology at p95 37–135s in tool-heavy stress cases. Split out of #6973; fix PR #6973 addresses Postgres but libSQL bottleneck remains open.
- **[#6940](https://github.com/nearai/ironclaw/issues/6940)** — IronHub skill CTA returns 404 across all skills. **No fix PR yet.**
- **[#6972](https://github.com/nearai/ironclaw/issues/6972)** — New account email authentication not working. **No fix PR yet.**
- **[#6866](https://github.com/nearai/ironclaw/issues/6866)** — Same home directory shared across all users; workspaces visible to others (privacy concern). **No fix PR yet.**

**Low/Info:**
- **[#6978](https://github.com/nearai/ironclaw/issues/6978)** — `reborn-tests.yml` workflow_dispatch runs structurally fail the Tests roll-up (critical-mutation skipped but disallowed). CI infrastructure bug.
- **[#6947](https://github.com/nearai/ironclaw/issues/6947)** — `classify-test-scope.sh` mis-buckets `ironclaw_product` as legacy-only. Pre-existing on main.
- **[#6902](https://github.com/nearai/ironclaw/issues/6902)** — Projects page displays fabricated metrics ($0.00 spend, 0 pending gates) as real data.

## 6. Feature Requests & Roadmap Signals

**Likely next-version candidates (high community engagement + epic status):**
- **Error recoverability endgame (#6284)** — If the epic's acceptance criteria are met, this becomes a core reliability guarantee for the Reborn release.
- **Reliable Skill Discovery, Routing, and Activation (#6565)** — The model choosing skills instead of keyword scorers (#6938) is a direct step toward this.
- **Hermetic capability and journey testing platform (#6524)** — Addresses a fundamental gap in test coverage; high strategic priority.
- **Admin-Managed Agents as UserId Subjects (#6578)** — Enables non-human agent identities without weakening user isolation.
- **Migration tool for legacy agent setup (#6939)** — Reduces switching costs from Hermes/Openclaw; user-facing adoption driver.

**Other signals:**
- **Terminology standardization (#6971)** — "Tools" vs "Extensions" clarification suggests the product is maturing its vocabulary for the 1.0 release.
- **"Reborn" → "IronClaw 1.0" rebranding (#6854, #6970)** — External messaging is converging on IronClaw 1.0, indicating a major release is imminent.

## 7. User Feedback Summary

**Pain points:**
- **Security & privacy:** Cross-user memory leaks (#6900), shared home directories (#6866), cross-user MCP metadata exposure (#6778). Users are concerned about multi-tenant isolation.
- **Authentication & onboarding:** New account email auth broken (#6972), legacy migration path missing (#6939). Friction in adopting IronClaw.
- **UI/UX:** IronHub skill CTA 404s (#6940), fabricated metrics on Projects page (#6902), Logs pagination broken (#6904 — now fixed). Users expect polished, reliable interfaces.
- **Terminology confusion:** "Reborn" vs "IronClaw 1.0" vs "Tools" vs "Extensions" (#6971, #6854). Users and contributors want consistent messaging.
- **Unattended operation:** Linux service install does not enable user lingering (#6976), preventing reliable headless/VM deployments.

**Satisfaction signals:**
- Active contribution from community members (pranavraja99 on skill routing, kirikov on MCP, elliotBraem on docs).
- Multiple PRs from non-core contributors (regular, experienced) being merged, indicating healthy contribution flow.
- Detailed, well-scoped issues from maintainers (serrrfirat, BenKurrek) show strong internal engineering discipline.

## 8. Backlog Watch

**Long-unanswered important issues needing maintainer attention:**
- **[#6900](https://github.com/nearai/ironclaw/issues/6900)** — P0 security bug (cross-user memory leak). Open since 2026-07-30, 1 comment, no fix PR. **Needs immediate triage.**
- **[#6524](https://github.com/nearai/ironclaw/issues/6524)** — Hermetic testing platform epic. Open since 2026-07-22, 4 comments. Blocking reliable E2E coverage guarantees.
- **[#6284](https://github.com/nearai/ironclaw/issues/6284)** — Error-recoverability endgame epic. Open since 2026-07-19, 15 comments. The most commented issue; the core reliability contract is not yet implemented.
- **[#6565](https://github.com/nearai/ironclaw/issues/6565)** — Reliable Skill Discovery epic. Open since 2026-07-23, 2 comments. Partially addressed by #6938 and #6745 but not fully resolved.
- **[#6778](https://github.com/nearai/ironclaw/issues/6778)** — Cross-user MCP metadata exposure. Open since 2026-07-28, 1 comment. Security-sensitive, no fix PR.
- **[#6940](https://github.com/nearai/ironclaw/issues/6940)** — IronHub CTA 404. Open since 2026-07-31, 2 comments. User-facing breakage with no fix PR.
- **[#6972](https://github.com/nearai/ironclaw/issues/6972)** — New account email auth broken. Open since 2026-07-31, 0 comments. New user onboarding blocker.
- **[#6963](https://github.com/nearai/ironclaw/issues/6963)** — CI gates tracking issue with 8 defects. Open since 2026-07-31, 5 comments. Needs resolution to unblock CI reliability.

**Stale PRs needing review:**
- **[#6975](https://github.com/nearai/ironclaw/pull/6975)** and **[#6977](https://github.com/nearai/ironclaw/pull/6977)** — Both XL-sized, opened 2026-07-31, no comments yet. These are the backbone of the WS1.2/WS1.3 target architecture and need prompt review to unblock the refactoring stack.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-01

**Repository:** [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. Today's Overview

Activity on 2026-08-01 is characterized by a high volume of PR closures (11 merged/closed, 1 open) and the final closure of 4 stale issues that had been open since April 2026. No new releases were published. The project is in a maintenance-and-polish phase, with the most recent merge batch (July 31) addressing UI experience improvements, stability fixes for live prompt projection and tool-result handling, and a formal release packaging PR. Overall project health appears stable, with a steady cadence of merged contributions and no critical open bugs reported in today's update window.

---

## 2. Releases

None. No new releases were cut on or before 2026-08-01. The release PR [#2416](https://github.com/netease-youdao/LobsterAI/pull/2416) (authored by `fisherdaddy`, tagged `Release/2026.7.31`) was closed/merged on 2026-07-31, indicating the latest shipped version is **2026.7.31**.

---

## 3. Project Progress

**11 PRs merged/closed in the last 24h window; 1 PR still open.** Key progress items:

| PR | Area | Summary |
|---|---|---|
| [#2416](https://github.com/netease-youdao/LobsterAI/pull/2416) | Release | `Release/2026.7.31` — packaging release |
| [#2417](https://github.com/netease-youdao/LobsterAI/pull/2417) | Renderer | Reuse conversation copy icon for site URLs and share codes ([liuzhq1986](https://github.com/liuzhq1986)) |
| [#2415](https://github.com/netease-youdao/LobsterAI/pull/2415) | OpenClaw | Drop aggregate cap in live tool-result prompt projection — fixes cache-hit regression for DeepSeek long sessions ([fisherdaddy](https://github.com/fisherdaddy)) |
| [#2414](https://github.com/netease-youdao/LobsterAI/pull/2414) | Cowork/OpenClaw | Prevent BTW tool protocol leakage; sanitize provider tool-call markup ([liuzhq1986](https://github.com/liuzhq1986)) |
| [#2413](https://github.com/netease-youdao/LobsterAI/pull/2413) | OpenClaw | Keep live prompt tool-result history byte-stable across turns — prevents prefix-cache invalidation ([fisherdaddy](https://github.com/fisherdaddy)) |
| [#1315](https://github.com/netease-youdao/LobsterAI/pull/1315) | UI/Renderer | Sidebar drag-to-resize width (180–480px range) ([MaoQianTu](https://github.com/MaoQianTu)) |
| [#1318](https://github.com/netease-youdao/LobsterAI/pull/1318) | UI/Renderer | Keyboard shortcut `<kbd>` badges on sidebar buttons, platform-aware (⌘/Ctrl) ([MaoQianTu](https://github.com/MaoQianTu)) |
| [#1320](https://github.com/netease-youdao/LobsterAI/pull/1320) | UI/Renderer | Skeleton loading for session list; distinguish "loading" vs "empty" state ([MaoQianTu](https://github.com/MaoQianTu)) |
| [#1321](https://github.com/netease-youdao/LobsterAI/pull/1321) | Settings | Dismiss overlays when switching settings tabs ([kayo5994](https://github.com/kayo5994)) |
| [#1308](https://github.com/netease-youdao/LobsterAI/pull/1308) | Cowork | Isolate home-screen input draft per agent ([leefinder](https://github.com/leefinder)) |
| [#172](https://github.com/netease-youdao/LobsterAI/pull/172) | OAuth/Main | Antigravity OAuth integration + proxy compatibility ([sysusugan](https://github.com/sysusugan)) |

**1 open PR:** [#2234](https://github.com/netease-youdao/LobsterAI/pull/2234) — fix `sessions_yield` descendant finalization in cron workflows (author: `btc69m979y-dotcom`, open since 2026-06-30).

---

## 4. Community Hot Topics

All 4 updated issues are marked **[stale]** and **[CLOSED]**, each with 2 comments. None have significant reaction counts (👍: 0). The issues represent UX improvement requests from the same author group (MaoQianTu, Cathylkx) and were all resolved via corresponding PRs:

- [#1311](https://github.com/netease-youdao/LobsterAI/issues/1311) — Table content: line-break display with raw tags + hover-to-expand truncated text → resolved via rendering-layer changes
- [#1314](https://github.com/netease-youdao/LobsterAI/issues/1314) — Sidebar width drag-resize → resolved via [#1315](https://github.com/netease-youdao/LobsterAI/pull/1315)
- [#1317](https://github.com/netease-youdao/LobsterAI/issues/1317) — Keyboard shortcut `<kbd>` hints on sidebar buttons → resolved via [#1318](https://github.com/netease-youdao/LobsterAI/pull/1318)
- [#1319](https://github.com/netease-youdao/LobsterAI/issues/1319) — Skeleton loading for session list → resolved via [#1320](https://github.com/netease-youdao/LobsterAI/pull/1320)

**Underlying need:** Users are consistently requesting **UI polish and discoverability improvements** — reducing friction in daily interaction with the sidebar, improving information density, and making the app feel more responsive during loading. The fact that all 4 issues were authored by just 2 contributors and closed within the same batch suggests a coordinated UX sprint rather than broad community demand.

The most notable active community item is the open PR [#2234](https://github.com/netease-youdao/LobsterAI/pull/2234), which has been open since 2026-06-30 and addresses a concurrency bug in the OpenClaw agent orchestration layer.

---

## 5. Bugs & Stability

**No new crash or regression reports in today's issue window.** However, three merged PRs directly address stability and correctness bugs:

| Severity | Issue | Fix PR |
|---|---|---|
| **High** | DeepSeek long-session cache hit rate dropped from ~100% to ~57% due to live prompt projection rewriting cached history on every turn | [#2413](https://github.com/netease-youdao/LobsterAI/pull/2413), [#2415](https://github.com/netease-youdao/LobsterAI/pull/2415) |
| **Medium** | BTW tool protocol leakage — provider tool-call markup appearing in side-chat results; error metadata lost through OpenClaw gateway | [#2414](https://github.com/netease-youdao/LobsterAI/pull/2414) |
| **Medium** | Settings overlays (cowork memory editor, model connection-test modal) remained mounted after tab switch, blocking UI interaction | [#1321](https://github.com/netease-youdao/LobsterAI/pull/1321) |
| **Low** | Copy action for site URLs/share codes lacked visual feedback | [#2417](https://github.com/netease-youdao/LobsterAI/pull/2417) |

The cache-hit regression (DeepSeek) is the most impactful stability issue addressed — it directly affected model performance for long-session users.

---

## 6. Feature Requests & Roadmap Signals

**Recent feature deliveries (merged this cycle):**
- Sidebar drag-resize (user-customizable width)
- Keyboard shortcut visual hints (`<kbd>` badges, macOS/Windows platform-aware)
- Skeleton loading states for session list
- Per-agent input draft isolation on home screen
- Antigravity OAuth provider integration
- Table rendering improvements (line-break + hover-expand for truncated text)

**Predicted next-version candidates:**
1. **Antigravity OAuth** ([#172](https://github.com/netease-youdao/LobsterAI/pull/172)) — a major provider integration that was merged but may still need documentation and user-facing release notes.
2. **Per-agent draft isolation** ([#1308](https://github.com/netease-youdao/LobsterAI/pull/1308)) — signals a roadmap toward multi-agent workflow support.
3. **OpenClaw cron descendant finalization** ([#2234](https://github.com/netease-youdao/LobsterAI/pull/2234), still open) — if merged, this will be a significant stability feature for automated/cron agent workflows.

The pattern suggests the roadmap is currently focused on **UI quality-of-life** and **multi-agent/orchestration robustness**, with provider expansion (Antigravity) as a strategic growth area.

---

## 7. User Feedback Summary

**Pain points identified from closed issues:**
- **Sidebar rigidity:** Fixed 240px width caused content truncation on small screens and wasted space on large screens. Users wanted manual width control.
- **Shortcut discoverability:** Keyboard shortcuts (Ctrl+N, Ctrl+F) were invisible, forcing users to dig into settings to discover them.
- **Loading state confusion:** The session list showed "暂无历史记录" (no history) during initialization, creating a false-empty-state flash that eroded user confidence.
- **Table readability:** Long text in table cells was truncated without a way to preview full content; raw HTML tags were visible in rendered output.
- **Settings overlay persistence:** Modals remained visible after navigating away, blocking interaction with the new tab content.

**Satisfaction signals:** All 4 issues were closed by their authors (or maintainers acting on them), and corresponding PRs were merged — indicating the maintainer team is responsive to UX feedback. The lack of 👍 reactions on issues suggests either low community engagement volume or that these were internal/known pain points.

---

## 8. Backlog Watch

| Item | Status | Age | Concern |
|---|---|---|---|
| [#2234](https://github.com/netease-youdao/LobsterAI/pull/2234) — cron yield descendant finalization fix | **OPEN** since 2026-06-30 | ~32 days | This is a concurrency/correctness fix for the OpenClaw agent orchestration layer. It has been open for over a month with no maintainer action. It covers 3 scenarios (parallel, cron-parallel, cron-serial) and includes a test plan. **Needs maintainer review and merge.** |
| [#172](https://github.com/netease-youdao/LobsterAI/pull/172) — Antigravity OAuth integration | **CLOSED** (merged 2026-07-31) | — | Was long-standing; now resolved. Watch for follow-up documentation PR. |
| [#1311](https://github.com/netease-youdao/LobsterAI/issues/1311) — Table hover-to-expand + raw tag display | **CLOSED** (stale) | Created 2026-04-02 | Resolved via rendering changes; no dedicated PR link visible — verify if the fix is complete. |
| Stale issue cleanup | All 4 issues closed as stale | — | The batch closure of long-stale issues is healthy but may mask underlying community engagement issues (low comment/reaction counts). |

**Priority recommendation:** The maintainer team should prioritize reviewing and merging [#2234](https://github.com/netease-youdao/LobsterAI/pull/2234), which addresses a real concurrency bug in the OpenClaw agent finalization pipeline and has been waiting for over a month.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-01

---

## 1. Today's Overview

Moltis (github.com/moltis-org/moltis) recorded a moderately active day on 2026-08-01, with **2 issues updated** (1 newly opened, 1 closed) and **8 pull requests updated** (6 open, 2 merged/closed). No new releases were published. The day's activity was dominated by **security hardening PRs** (node pairing signature verification and path traversal fixes) and a **feature merge** for Markdown copy/export in the web client. Overall, the project shows healthy contributor engagement with a focus on security, new protocol integrations (Nostr/NIP-29), and backend infrastructure (instrumentation, memory backends). The project health is stable, though several open PRs touch sensitive areas (security, memory, channels) that warrant timely review.

---

## 2. Releases

**No new releases** were published on or around 2026-08-01. The latest release data is empty.

---

## 3. Project Progress

### Merged / Closed PRs (2)

| PR | Title | Author | Date | Summary |
|---|---|---|---|---|
| [#1176](https://github.com/moltis-org/moltis/pull/1176) | `feat(web): add Markdown copy and session export` | Jonesxq | 2026-07-30 → 2026-07-31 | Preserves original Markdown formatting when copying assistant replies (including live and persisted replies without model metadata). Adds a session-level "Save as Markdown" action that loads complete paginated history and exports user/assistant text plus image references with Markdown-safe formatting. |
| [#1166](https://github.com/moltis-org/moltis/pull/1166) | `feat(slack): per-message acknowledgment reactions, phases, reconnect supervision, and Block Kit` | penso | 2026-07-24 → 2026-07-31 | Builds on prior acknowledgment reactions (#1165). Adds reaction-based receipt/progress signals safe under queueing, cancellation, retries, callback bursts, and delivery failures. Introduces phase tracking and Block Kit support for richer Slack interactions. |

### Open PRs Advancing (6)

| PR | Title | Author | Created | Focus Area |
|---|---|---|---|---|
| [#1168](https://github.com/moltis-org/moltis/pull/1168) | `feat(nostr): add NIP-29 group chat support for Buzz channels` | penso | 2026-07-25 | Extends `moltis-nostr` to support NIP-29 group chat over NIP-42-authenticated connections for Block's Buzz workspace. |
| [#1179](https://github.com/moltis-org/moltis/pull/1179) | `fix(gateway): verify node pairing signatures` | tsauvajon | 2026-07-31 | Binds `node.pair.verify` to server-issued pending requests to prevent callers from supplying their own key or challenge. |
| [#1180](https://github.com/moltis-org/moltis/pull/1180) | `fix(security): harden model and zip paths` | tsauvajon | 2026-07-31 | Fixes arbitrary file-write vulnerabilities in zip extraction and HuggingFace repo handling in `clawhub.rs`. |
| [#1158](https://github.com/moltis-org/moltis/pull/1158) | `feat(memory): add zvec vector database memory backend` | demyanrogozhin | 2026-07-17 | Adds a Zvec + redb-based alternative memory backend, feature-gated behind the `zvec` cargo feature (enabled by default in `full` profile). |
| [#1174](https://github.com/moltis-org/moltis/pull/1174) | `Add instrumentation and feedback collection infrastructure` | penso | 2026-07-27 | Adds backend-neutral agent instrumentation, Langfuse v4 export, OTLP backends, and end-user reaction feedback. |
| [#1170](https://github.com/moltis-org/moltis/pull/1170) | `fix(channels): gate /sh and privileged tools behind per-account operators list` | penso | 2026-07-26 | Separates access from privilege with an explicit per-account `operators` list; enforces boundary across commands, callbacks, queue replay, chat execution, and external tools. |

---

## 4. Community Hot Topics

### Most Engaged Issue
- **[#1131](https://github.com/moltis-org/moltis/issues/1131)** — *[CLOSED] [enhancement] Feature: Add copy + export as Markdown* — **1 👍**, created 2026-06-17, closed via PR #1176. This feature request was open for ~44 days before being merged, indicating sustained community demand for Markdown export capabilities in the web UI.

### Most Active PRs (by recency and security sensitivity)
- **[#1179](https://github.com/moltis-org/moltis/pull/1179)** — `fix(gateway): verify node pairing signatures` — opened 2026-07-31, addresses a critical security gap in node pairing verification.
- **[#1180](https://github.com/moltis-org/moltis/pull/1180)** — `fix(security): harden model and zip paths` — opened 2026-07-31, addresses path traversal / arbitrary file write vulnerabilities.
- **[#1168](https://github.com/moltis-org/moltis/pull/1168)** — `feat(nostr): add NIP-29 group chat support` — opened 2026-07-25, represents a major protocol integration for the Buzz/Nostr ecosystem.

### Underlying Needs Analysis
- **Security consciousness** is a top community priority: two of the three newest PRs (#1179, #1180) are security fixes, and a third (#1170) gates privileged operations. Users and contributors are actively hardening the attack surface before wider adoption.
- **Export and portability** (Markdown copy/export) was a long-standing request that finally landed, suggesting the web UI team is responsive to user workflow needs.
- **Protocol extensibility** (Nostr/NIP-29) signals interest in decentralized, self-hosted communication backends.

---

## 5. Bugs & Stability

### Reported Bugs (Ranked by Severity)

| Priority | Issue | Summary | Fix PR? |
|---|---|---|---|
| 🔴 **High** | [#1181](https://github.com/moltis-org/moltis/issues/1181) — `[bug] Issue with GPT 5.6 Luna` | User reports a bug specific to GPT-5.6 Luna model interactions. Details are minimal (0 comments, no reproduction steps visible in summary). | No fix PR identified yet. |
| 🟡 **Medium** | Path traversal in zip/HuggingFace extraction | Reported as a bug class in PR #1180's description — malicious zips or HF repos could overwrite trusted files (config, credentials, scripts) leading to code execution. | **Fix PR [#1180](https://github.com/moltis-org/moltis/pull/1180)** is open but not yet merged. |
| 🟡 **Medium** | Node pairing signature bypass | PR #1179 describes a vulnerability where callers could supply their own key/challenge for node pairing verification. | **Fix PR [#1179](https://github.com/moltis-org/moltis/pull/1179)** is open but not yet merged. |

### Stability Notes
- No crashes or regressions were reported today.
- Two critical security fix PRs (#1179, #1180) remain **open and unmerged** as of the digest date — this is a notable gap given their severity.

---

## 6. Feature Requests & Roadmap Signals

### Active Feature Requests

| Request | Source | Status | Likelihood of Next Release |
|---|---|---|---|
| **Markdown copy & session export** | Issue #1131 → PR #1176 | ✅ **Merged** | Likely in next release — already merged. |
| **NIP-29 group chat for Buzz channels** | PR #1168 | 🔄 Open (2 days old) | Moderate — active development by core contributor `penso`. |
| **Zvec vector database memory backend** | PR #1158 | 🔄 Open (14 days old) | Moderate — feature-gated behind `zvec` cargo flag; ready for merge review. |
| **Instrumentation & feedback collection** | PR #1174 | 🔄 Open (4 days old) | High — infrastructure PR that underpins observability; likely a priority for production readiness. |
| **Privileged tool gating (/sh, operators list)** | PR #1170 | 🔄 Open (5 days old) | High — security-adjacent feature that unblocks wider deployment. |
| **Node pairing signature verification** | PR #1179 | 🔄 Open (same day) | High — security fix, likely fast-tracked. |
| **Path traversal hardening (zip/HF)** | PR #1180 | 🔄 Open (same day) | High — security fix, likely fast-tracked. |

### Roadmap Prediction
The next version will likely include: **(1)** the merged Markdown export feature, **(2)** at least one of the two security fixes (#1179 or #1180), and **(3)** continued maturation of the instrumentation (#1174) and Nostr (#1168) features. The zvec memory backend (#1158) may land if the maintainers prioritize storage backend diversity.

---

## 7. User Feedback Summary

### Pain Points
- **GPT-5.6 Luna compatibility** — Issue #1181 reports a bug with the latest GPT-5.6 Luna model, but lacks detailed reproduction steps, suggesting the user may need guidance or the issue is early-stage.
- **Markdown export missing** — Issue #1131 (now resolved) was open for ~44 days, indicating users needed the ability to preserve Markdown formatting when copying AI replies and to export full sessions — a clear workflow gap for power users and documentation-heavy workflows.

### Use Cases Reflected in PRs
- **Decentralized/self-hosted communication**: NIP-29 group chat (#1168) and Nostr relay integration reflect demand for privacy-preserving, decentralized agent collaboration.
- **Observability & debugging**: Instrumentation infrastructure (#1174) with Langfuse v4 and OTLP backends signals users/developers need traceability into agent execution, token usage, and provider failover.
- **Secure multi-tenant channels**: Privileged tool gating (#1170) and node pairing verification (#1179) indicate the project is being positioned for environments where access control and supply-chain security matter.

### Satisfaction Signals
- The prompt closure of #1131 via PR #1176 and the active security hardening PRs suggest a maintainer team that is **responsive to user needs** and **proactive about security**.
- The lack of comments on most PRs and issues (0 comments across all items) may indicate either low community discussion volume or that the project is still in an early-adopter phase.

---

## 8. Backlog Watch

### Long-Unanswered Items Needing Maintainer Attention

| Item | Age | Status | Concern |
|---|---|---|---|
| [#1131](https://github.com/moltis-org/moltis/issues/1131) — Markdown copy/export | ~44 days (created 2026-06-17) | ✅ Closed via PR #1176 | Resolved — no action needed. |
| [#1158](https://github.com/moltis-org/moltis/pull/1158) — zvec memory backend | ~14 days (created 2026-07-17) | 🔄 Open | No comments or maintainer feedback visible. This is a non-trivial feature addition (new memory backend with `zvec` + `redb`) that may need review and integration testing before merge. |
| [#1168](https://github.com/moltis-org/moltis/pull/1168) — NIP-29 Buzz group chat | ~7 days (created 2026-07-25) | 🔄 Open | No comments. A significant protocol integration that may require maintainer sign-off on Nostr dependency and API design. |
| [#1174](https://github.com/moltis-org/moltis/pull/1174) — instrumentation & feedback | ~4 days (created 2026-07-27) | 🔄 Open | No comments. This is foundational infrastructure — delays in merging may block downstream observability work. |
| [#1170](https://github.com/moltis-org/moltis/pull/1170) — privileged tool gating | ~5 days (created 2026-07-26) | 🔄 Open | No comments. Security-sensitive; should be prioritized alongside #1179 and #1180. |
| [#1179](https://github.com/moltis-org/moltis/pull/1179) — node pairing signature verification | 0 days (created 2026-07-31) | 🔄 Open | **Critical security fix** — should be fast-tracked for review and merge. |
| [#1180](https://github.com/moltis-org/moltis/pull/1180) — path traversal hardening | 0 days (created 2026-07-31) | 🔄 Open | **Critical security fix** — should be fast-tracked for review and merge. |
|

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-08-01

**Repository:** `agentscope-ai/QwenPaw` (github.com/agentscope-ai/QwenPaw)

---

## 1. Today's Overview

The project remains in active development with 20 issues updated and 43 PRs updated in the last 24 hours. Of the issues, 14 remain open and 6 were closed; of the PRs, 30 are still open and 13 have been merged or closed. No new releases were published. The high PR-to-issue ratio (43 PRs vs. 20 issues) indicates strong contributor momentum, with many first-time contributors submitting fixes. The dominant themes across today's activity are **agentscope 2.0 API compatibility**, **memory/context lifecycle fixes**, **shell command execution robustness**, and **desktop UI improvements**. Overall project health is active but carries notable technical debt around API migration stability and desktop UX polish.

---

## 2. Releases

None. No new versions were published in the last 24 hours. The latest known version is **QwenPaw 2.0.1**, which is the baseline referenced across most bug reports and compatibility issues.

---

## 3. Project Progress

### Merged / Closed PRs (13 total)

| PR | Summary |
|---|---|
| [#6573](https://github.com/agentscope-ai/QwenPaw/pull/6573) | Fixed audio transcription silently failing for Feishu channel messages after the AgentScope 2.0 migration — root cause was `AudioContent` not reaching the transcription pipeline. |
| [#6592](https://github.com/agentscope-ai/QwenPaw/pull/6592) | Fixed Auto-Memory being flushed before Scroll context eviction, preventing early-session turns from being permanently lost in `memory/YYYY-MM-DD.md`. |
| [#6602](https://github.com/agentscope-ai/QwenPaw/pull/6602) | Fixed session data integrity issues (#6558): preserved in-flight streams across workspace hot reloads, reconnected to buffered/live events via `TaskTracker`, and kept old workspace resources alive until their streams finished. |
| [#6604](https://github.com/agentscope-ai/QwenPaw/pull/6604) | Documentation update: explained ReMe self-evolving knowledge base lifecycle (capture, index, consolidate, recall) across READMEs and memory docs. |
| [#6606](https://github.com/agentscope-ai/QwenPaw/pull/6606) | Fixed `read_file` to accept numeric string line ranges. |
| [#6563](https://github.com/agentscope-ai/QwenPaw/issues/6563) (closed as issue) | CI bug where `real-behavior-proof.yml` blocked all fork PRs due to `Resource not accessible by integration` error. |
| [#6555](https://github.com/agentscope-ai/QwenPaw/issues/6555) (closed as issue) | Bug report closed; fix delivered via PR #6564. |
| [#6529](https://github.com/agentscope-ai/QwenPaw/issues/6529) (closed as issue) | ACP `new_session` missing `models` field — fix delivered. |

### Key PRs Under Review / Open

| PR | Summary |
|---|---|
| [#6615](https://github.com/agentscope-ai/QwenPaw/pull/6615) | Addresses agentscope 2.0.4.post1 compatibility (#6612): replaces deprecated `Msg` with `UserMsg` in proactive responder and fixes proactive agent blocking. |
| [#6611](https://github.com/agentscope-ai/QwenPaw/pull/6611) | Major refactor: aligns Scroll context and memory with AgentScope lifecycle, converging Native/Scroll strategy branches into a single context protocol. |
| [#6610](https://github.com/agentscope-ai/QwenPaw/pull/6610) | Fixes shell command execution hangs and UI freezes (#6608, #6589): caps arbitrary timeouts against configured max (default 600s) and prevents UI thread blocking. |
| [#6609](https://github.com/agentscope-ai/QwenPaw/pull/6609) | Fixes `spawn_subagent` schema so `batch` is correctly inferred as optional, enabling single-task mode. |
| [#6616](https://github.com/agentscope-ai/QwenPaw/pull/6616) | Fixes `qwenpaw task` headless command building a valid user message for agentscope 2.0's `list[ContentBlock]` content type. |
| [#6617](https://github.com/agentscope-ai/QwenPaw/pull/6617) | Fixes `RetryChatModel` to honor `Retry-After` cap on streaming retry path. |
| [#6528](https://github.com/agentscope-ai/QwenPaw/pull/6528) | Fixes systematic `agent.json` corruption on Windows (UTF-8 BOM prepend, interrupted writes). |
| [#6607](https://github.com/agentscope-ai/QwenPaw/pull/6607) | New feature: global-hotkey floating quick-input window for desktop (Doubao-style, default `Alt+Space`). |
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | Major feature: unifies provider discovery, model metadata, routing, agent controls, and Console model management. |
| [#6526](https://github.com/agentscope-ai/QwenPaw/pull/6526) | New feature: adds NVIDIA NIM provider support via existing OpenAIProvider architecture. |
| [#6564](https://github.com/agentscope-ai/QwenPaw/pull/6564) | Fixes memory compression missing early-session events when context scrolls out before daily MD generation. |

---

## 4. Community Hot Topics

### Most Active Issues

| Issue | Comments | Topic |
|---|---|---|
| [#6537](https://github.com/agentscope-ai/QwenPaw/issues/6537) | 10 | Skill tags disappearing on restart — regression of #3270. Tags saved to `skill_pool/skill.json` but lost on manifest reconciliation at startup. |
| [#6601](https://github.com/agentscope-ai/QwenPaw/issues/6601) | 5 | QwenPaw silently returns empty responses in long sessions instead of erroring when the context window is full. |
| [#6563](https://github.com/agentscope-ai/QwenPaw/issues/6563) | 5 | CI workflow blocks all fork PRs — contributor accessibility blocker. |
| [#6083](https://github.com/agentscope-ai/QwenPaw/issues/6083) | 4 | Desktop users want one-click access to workspace output files (reports, CSVs, images) without leaving the app. |
| [#6160](https://github.com/agentscope-ai/QwenPaw/issues/6160) | 4 | Request for bundled/isolated Python environment for script execution, instead of relying on system Python. |
| [#6588](https://github.com/agentscope-ai/QwenPaw/issues/6588) | 3 | `spawn_subagent` single-task mode broken because `batch` is exposed as required in the tool schema. |
| [#6512](https://github.com/agentscope-ai/QwenPaw/issues/6512) | 3 | `execute_shell_command` truncates large outputs (>30 KB), sometimes triggering `Internal error`. |

### Most Active PRs (by recency and contributor count)

| PR | Notes |
|---|---|
| [#6615](https://github.com/agentscope-ai/QwenPaw/pull/6615) | Direct fix for #6612 — agentscope compatibility; first-time contributor. |
| [#6610](https://github.com/agentscope-ai/QwenPaw/pull/6610) | Addresses two high-severity bugs (#6608, #6589); first-time contributor. |
| [#6609](https://github.com/agentscope-ai/QwenPaw/pull/6609) | Fixes #6588 spawn_subagent schema; first-time contributor. |
| [#6528](https://github.com/agentscope-ai/QwenPaw/pull/6528) | Fixes #6520 agent.json corruption on Windows; first-time contributor. |
| [#6611](https://github.com/agentscope-ai/QwenPaw/pull/6611) | Large refactor aligning context/memory with AgentScope lifecycle — signals architectural evolution. |

**Underlying needs:** The community is heavily focused on **stability after the agentscope 2.0 migration**, **desktop UX usability** (especially for non-technical users), and **reliability of long-running operations** (shell commands, memory compression, session switching). Several issues are from first-time contributors, indicating growing community engagement.

---

## 5. Bugs & Stability

### Ranked by Severity

| Severity | Issue | Description | Fix PR? |
|---|---|---|---|
| 🔴 **Critical** | [#6612](https://github.com/agentscope-ai/QwenPaw/issues/6612) | QwenPaw 2.0.1 completely incompatible with agentscope 2.0.4.post1 — proactive crashes (`Msg.content` type) and tool-permission deadlock. Blocks the entire proactive/memory subsystem. | Yes — [#6615](https://github.com/agentscope-ai/QwenPaw/pull/6615) |
| 🔴 **Critical** | [#6589](https://github.com/agentscope-ai/QwenPaw/issues/6589) | `execute_shell_command` with large output freezes the entire UI (main thread block), forcing force-close on Windows. | Yes — [#6610](https://github.com/agentscope-ai/QwenPaw/pull/6610) |
| 🔴 **Critical** | [#6608](https://github.com/agentscope-ai/QwenPaw/issues/6608) | Long-running shell commands bypass `shell_command_timeout`, blocking Feishu sessions indefinitely (1.5 hr observed). Orphan subprocess on cancel, no per-channel total timeout. | Yes — [#6610](https://github.com/agentscope-ai/QwenPaw/pull/6610) |
| 🟠 **High** | [#6537](https://github.com/agentscope-ai/QwenPaw/issues/6537) | Skill tags disappear on restart — regression of #3270. Data is saved but lost during manifest reconciliation. 10 comments, unresolved. | No open fix PR yet |
| 🟠 **High** | [#6555](https://github.com/agentscope-ai/QwenPaw/issues/6555) | Memory/Dream compression loses early-session events when context scrolls out before daily MD generation. | Yes — [#6564](https://github.com/agentscope-ai/QwenPaw/pull/6564), [#6592](https://github.com/agentscope-ai/QwenPaw/pull/6592) |
| 🟠 **High** | [#6558](https://github.com/agentscope-ai/QwenPaw/issues/6558) | Multiple chat session UI data integrity issues — messages lost on switch, instructions drift, replies re-render from scratch. | Yes — [#6602](https://github.com/agentscope-ai/QwenPaw/pull/6602) |
| 🟡 **Medium** | [#6588](https://github.com/agentscope-ai/QwenPaw/issues/6588) | `spawn_subagent` single-task mode unusable — `batch` exposed as required in schema. | Yes — [#6609](https://github.com/agentscope-ai/QwenPaw/pull/6609) |
| 🟡 **Medium** | [#6512](https://github.com/agentscope-ai/QwenPaw/issues/6512) | `execute_shell_command` large output truncated (~>3

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-01

**Repository:** [github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## 1. Today's Overview

ZeroClaw shows very high development velocity on 2026-08-01, with **37 issues** (35 open, 2 closed) and **50 PRs** (45 open, 5 closed/merged) updated within the last 24 hours. No new releases were published. The activity is heavily weighted toward architectural RFCs and design proposals — roughly half of the top issues are RFCs — indicating the project is in an active design-and-refinement phase rather than a bug-fix or release cycle. Security-related work is prominent, with a P0 webhook authentication bug, a RUSTSEC advisory waiver, and a new glob-based command allowlist all in flight. Overall, the project is healthy and actively maintained, with multiple contributors (JordanTheJet, Audacity88, NiuBlibing, jxxralf, Project516, and others) driving progress.

---

## 2. Releases

**No new releases today.** The latest published version remains **v0.8.3**. The release attestation consolidation effort ([#9101](https://github.com/zeroclaw-labs/zeroclaw/issues/9101), P1, in-progress) aims to reduce the three parallel signing mechanisms (cosign, GitHub artifact attestations, slsa-github-generator) down to one unified story, which should streamline future release workflows.

---

## 3. Project Progress

**PRs closed/merged today (5 total):**

| PR | Status | Summary |
|---|---|---|
| [#9553](https://github.com/zeroclaw-labs/zeroclaw/pull/9553) | CLOSED | `feat(security)`: Add glob pattern matching for `allowed_commands` in `SecurityPolicy` (supports `docker-*`, `cargo-*`, etc.) |
| [#9586](https://github.com/zeroclaw-labs/zeroclaw/pull/9586) | CLOSED | `fix(security)`: Waive RUSTSEC-2026-0222 (wasmtime 45.0.3 type-index mixup) in audit/deny ignores |
| [#9075](https://github.com/zeroclaw-labs/zeroclaw/pull/9075) | CLOSED | `fix(doctor)`: Persist model catalog to `models_cache.json` on `models refresh` — resolves [#9046](https://github.com/zeroclaw-labs/zeroclaw/issues/9046) |
| [#9552](https://github.com/zeroclaw-labs/zeroclaw/pull/9552) | CLOSED | `feat(mcp)`: Add `danger_accept_invalid_certs` to `McpServerConfig` for self-signed/internal CA TLS connections |
| [#8996](https://github.com/zeroclaw-labs/zeroclaw/pull/8996) | CLOSED | `fix(goal)`: Preserve running goals across daemon reload — transfers transient execution ownership during in-process config reload |

**Key open PRs advancing features:**
- [#9589](https://github.com/zeroclaw-labs/zeroclaw/pull/9589) — Bump wasmtime to 47.0.3 for RUSTSEC-2026-0222 remediation (P1, dependencies)
- [#9527](https://github.com/zeroclaw-labs/zeroclaw/pull/9527) — Bump Rust toolchain, MSRV, images, and docs to 1.97.1
- [#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535) — Anchor context compaction to model window ratio (P1, runtime)
- [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) — Add native Hailo-Ollama support (XL size, provider enhancement)
- [#9556](https://github.com/zeroclaw-labs/zeroclaw/pull/9556) — Add Langfuse observer backend for OTel traces
- [#9547](https://github.com/zeroclaw-labs/zeroclaw/pull/9547) — Upgrade CPAL to 0.18 for voice wake
- [#9514](https://github.com/zeroclaw-labs/zeroclaw/pull/9514) — Add opt-in multi-arch Alpine Docker image
- [#9499](https://github.com/zeroclaw-labs/zeroclaw/pull/9499) — Define RFC voting protocol in governance docs

---

## 4. Community Hot Topics

**Most active issues by comment count:**

| Issue | Comments | Topic | Link |
|---|---|---|---|
| [#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) | 13 | RFC: Separate conversation history from agent-curated long-term memory | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) |
| [#9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127) | 11 | RFC: Abstract `KeySource` trait for master-key material classification | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/9127) |
| [#8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) | 9 | RFC: Cross-turn conversation correlation in OTel export | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) |
| [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) | 8 | RFC: A2A outbound client (`A2ATool`) for inter-agent collaboration | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) |
| [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | 8 | RFC: OpenAI Chat Completions compatibility adapter | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) |
| [#9101](https://github.com/zeroclaw-labs/zeroclaw/issues/9101) | 8 | Consolidate release attestation mechanisms (P1, CI) | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/9101) |
| [#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) | 6 | RFC: Separate authoritative memory storage from enrichment connectors | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) |
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | 5 | RFC: Runtime-owned conversation sessions & transport adapters | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) |
| [#8568](https://github.com/zeroclaw-labs/zeroclaw/issues/8568) | 5 | MoA virtual model provider (Mixture-of-Agents) | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8568) |

**Underlying needs analysis:** The community is driving toward three major architectural themes: (1)

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*