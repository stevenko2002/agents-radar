# OpenClaw Ecosystem Digest 2026-08-04

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-03 22:16 UTC

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

# OpenClaw Project Digest — 2026-08-04

**Repository:** [openclaw/openclaw](https://github.com/openclaw/openclaw)

---

## 1. Today's Overview

OpenClaw shows extremely high daily activity with 500 issues and 500 PRs updated in the last 24 hours, indicating a large and engaged contributor base. The project has no new releases in this period, with the most recent stable version being 2026.6.1. The issue queue is dominated by long-running P1 bugs (session-state loss, message delivery failures, and provider routing regressions) alongside active feature discussions around memory trust, cost governance, and multi-agent orchestration stability. Overall project health is active but the backlog of unresolved high-severity reliability issues is substantial.

---

## 2. Releases

**None.** No new releases were published on 2026-08-04. The latest available release on npm remains `2026.6.1`. Users on the `beta` channel are on `2026.7.2-beta.5` (commit `ee929db`), which introduced a session-ID reuse regression (see Backlog Watch).

---

## 3. Project Progress

**Merged/Closed PRs today:** 143 (out of 500 PRs updated).

**Key merged/closed items:**
- **PR #118976** — macOS dashboard double-click zoom restored after titlebar drag-region regression. ([Link](https://github.com/openclaw/openclaw/pull/118976))
- **PR #118960** — System-agent delegated approvals now routed off the exec channel bus, fixing channel-misrouting in messaging contexts. ([Link](https://github.com/openclaw/openclaw/pull/118960))
- **PR #118781** — Test isolation fix for shared agent state between test files, resolving release-gate failures and dependency advisory exposure. ([Link](https://github.com/openclaw/openclaw/pull/118781))
- **PR #118579** — Discord transcript capture now bound to the source account, preventing cross-account voice routing in multi-bot setups. ([Link](https://github.com/openclaw/openclaw/pull/118579))
- **PR #117020** — Telegram rich-message transport limits enforced recursively (500-block and 50-media caps), fixing silent truncation of valid messages. ([Link](https://github.com/openclaw/openclaw/pull/117020))
- **PR #98657** — Flock separator (`--`) and script command detection corrected in dispatch wrapper. ([Link](https://github.com/openclaw/openclaw/pull/98657))

**Features advanced:**
- QA Lab coverage expanded significantly today (10+ QA-focused PRs from `vincentkoc`) covering audio proxy, video generation, managed gateway lifecycle, TUI editor input, media reference intake, and remote logging boundaries.
- OTel diagnostics session attribute support (PR #96741) continues toward vendor-neutral observability.
- Stable plugin support manifest work continues (PR #95117).

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| # | Issue | Comments | Severity | Link |
|---|-------|----------|----------|------|
| 1 | [DeepSeek v4 Flash silent reply failure](https://github.com/openclaw/openclaw/issues/116277) | 95 | P1 🦞 | [#116277](https://github.com/openclaw/openclaw/issues/116277) |
| 2 | [Realtime voice retains unbounded provider/consult state](https://github.com/openclaw/openclaw/issues/116201) | 50 | P1 🐚 | [#116201](https://github.com/openclaw/openclaw/issues/116201) |
| 3 | [Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707) | 24 | P2 🌊 | [#7707](https://github.com/openclaw/openclaw/issues/7707) |
| 4 | [Subagent completion silently lost — no retry/notification](https://github.com/openclaw/openclaw/issues/44925) | 23 | P1 🦞 | [#44925](https://github.com/openclaw/openclaw/issues/44925) |
| 5 | [Centralized filename encoding utility](https://github.com/openclaw/openclaw/issues/48788) | 20 | P3 🐚 | [#48788](https://github.com/openclaw/openclaw/issues/48788) |
| 6 | [Codex-backed Telegram turns timeout on turn/completed](https://github.com/openclaw/openclaw/issues/87744) | 17 | P1 🐚 | [#87744](https://github.com/openclaw/openclaw/issues/87744) |

### Most Active PRs (by comment/engagement)

| PR | Title | Status | Link |
|----|-------|--------|------|
| [#118979](https://github.com/openclaw/openclaw/pull/118979) | fix(auto-reply): include completed media transcripts in room-event prompts | Needs proof | [PR](https://github.com/openclaw/openclaw/pull/118979) |
| [#118805](https://github.com/openclaw/openclaw/pull/118805) | test(ui): add service-worker update primary QA proof | Ready for maintainer | [PR](https://github.com/openclaw/openclaw/pull/118805) |
| [#118579](https://github.com/openclaw/openclaw/pull/118579) | fix(discord): bind transcript capture to source account | Needs proof | [PR](https://github.com/openclaw/openclaw/pull/118579) |
| [#118978](https://github.com/openclaw/openclaw/pull/118978) | test(qa): close external app SDK proof gaps | Waiting on author | [PR](https://github.com/openclaw/openclaw/pull/118978) |

**Underlying needs:** The community is heavily focused on **reliability of message delivery** (issues #116277, #44925, #87744, #41744) and **session-state integrity** (issues #116201, #43367, #52249). There is growing demand for **memory governance** (trust tagging in #7707, pre-reset flush in #45608) and **observability** (OTel tracing in #50291, resolved model exposure in #51441). The volume of QA-focused PRs indicates the maintainers are investing in test infrastructure ahead of a potential stable release.

---

## 5. Bugs & Stability

### Critical (P0/P1, crash-loop or data-loss)

| Issue | Bug | Fix PR? | Link |
|-------|-----|---------|------|
| [#116277](https://github.com/openclaw/openclaw/issues/116277) | DeepSeek v4 Flash silent failure — no reply, generic fallback | No | [#116277](https://github.com/openclaw/openclaw/issues/116277) |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | Subagent completion silently lost — no retry, no notification | No | [#44925](https://github.com/openclaw/openclaw/issues/44925) |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) | Multi-agent orchestration unstable — config overwrite, session-lock failures | No | [#43367](https://github.com/openclaw/openclaw/issues/43367) |
| [#87744](https://github.com/openclaw/openclaw/issues/87744) | Codex Telegram turns timeout on `turn/completed` after 2026.5.27 regression | No | [#87744](https://github.com/openclaw/openclaw/issues/87744) |
| [#84516](https://github.com/openclaw/openclaw/issues/84516) | Codex replies silently truncated at ~1000-1100 chars | No | [#84516](https://github.com/openclaw/openclaw/issues/84516) |
| [#67777](https://github.com/openclaw/openclaw/issues/67777) | Subagent completion delivery lost on direct-announce timeout/drain | No | [#67777](https://github.com/openclaw/openclaw/issues/67777) |
| [#45494](https://github.com/openclaw/openclaw/issues/45494) | Cron jobs exhaust full timeout instead of fast-failing on API errors | No | [#45494](https://github.com/openclaw/openclaw/issues/45494) |
| [#89315](https://github.com/openclaw/openclaw/issues/89315) | Gateway heap grows unbounded → cgroup OOM kill on long-running deployments | No | [#89315](https://github.com/openclaw/openclaw/issues/89315) |
| [#116022](https://github.com/openclaw/openclaw/issues/116022) | `/new` reuses stable session ID; cannot recover retired Codex binding tombstone | No | [#116022](https://github.com/openclaw/openclaw/issues/116022) |

### High (P1/P2, message loss or session corruption)

| Issue | Bug | Link |
|-------|-----|------|
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | Realtime voice retains unbounded provider/consult state | [#116201](https://github.com/openclaw/openclaw/issues/116201) |
| [#40001](https://github.com/openclaw/openclaw/issues/40001) | Write tool lacks append mode — cron sessions destroy shared files | [#40001](https://github.com/openclaw/openclaw/issues/40001) |
| [#41165](https://github.com/openclaw/openclaw/issues/41165) | Telegram DMs still route to `agent:main:main`, polluting heartbeat session | [#41165](https://github.com/openclaw/openclaw/issues/41165) |
| [#53408](https://github.com/openclaw/openclaw/issues/53408) | Write/exec tool parameters silently dropped after long conversations | [#53408](https://github.com/openclaw/openclaw/issues/53408) |
| [#45573](https://github.com/openclaw/openclaw/issues/45573) | Group chat sessions not persisted — only 1 session from 166+ messages | [#45573](https://github.com/openclaw/openclaw/issues/45573) |
| [#54488](https://github.com/openclaw/openclaw/issues/54488) | Followup drain monopolizes session lane, blocks inbound dispatch 20-30 min | [#54488](https://github.com/openclaw/openclaw/issues/54488) |
| [#52249](https://github.com/openclaw/openclaw/issues/52249) | ACP parent session stuck until refresh when yielded for child completion | [#52249](https://github.com/openclaw/openclaw/issues/52249) |

### Regressions

- **2026.5.27** introduced Codex Telegram timeout regression (#87744).
- **2026.7.2-beta.5** introduced session-ID reuse / tombstone recovery failure (#116022).
- **OPENCLAW_HOME=~/.openclaw** produces nested directory `~/.openclaw/.openclaw` (#45765).
- **Google Antigravity** triggers false-positive anti-abuse detection via frequent tool schema reloading (#44134).

---

## 6. Feature Requests & Roadmap Signals

### High-Visibility Requests

| Issue | Feature | Signal | Link |
|-------|---------|--------|------|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | Memory Trust Tagging by Source | Likely next major release — security-critical, long-standing (since Feb 2026) | [#7707](https://github.com/openclaw/openclaw/issues/7707) |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | Per-agent cost budget enforcement at gateway | Strong product demand; aligns with enterprise gateway story | [#42475](https://github.com/openclaw/openclaw/issues/42475) |
| [#45608](https://github.com/openclaw/openclaw/issues/45608) | Pre-reset memory flush before `/new` and daily reset | Infrastructure improvement, low-risk, high-value | [#45608](https://github.com/openclaw/openclaw/issues/45608) |
| [#45508](https://github.com/openclaw/openclaw/issues/45508) | Self-hosted STT/TTS provider support in webchat | Aligns with gateway-centric architecture direction | [#45508](https://github.com/openclaw/openclaw/issues/45508) |
| [#45758](https://github.com/openclaw/openclaw/issues/45758) | YAML as alternative config format | Quality-of-life; low implementation barrier | [#45758](https://github.com/openclaw/openclaw/issues/45758) |
| [#42840](https://github.com/openclaw/openclaw/issues/42840) | MathJax/LaTeX support in Control UI | 10 👍 — highest community endorsement in the list | [#42840](https://github.com/openclaw/openclaw/issues/42840) |
| [#16670](https://github.com/openclaw/openclaw/issues/16670) | Onboarding wizard must include Memory/Embedding setup | UX blocker for memory adoption | [#16670](https://github.com/openclaw/openclaw/issues/16670) |
| [#41366](https://github.com/openclaw/openclaw/issues/41366) | Durable natural-language rule learning + multi-mention reply semantics | Advanced multi-agent capability | [#41366](https://github.com/openclaw/openclaw/issues/41366) |

**Predicted next-version candidates:** Memory Trust Tagging (#7707), cost budget enforcement (#42475), and YAML config support (#45758) show the strongest combination of community demand, maintainer engagement, and architectural readiness.

---

## 7. User Feedback Summary

### Pain Points
- **Silent failures dominate complaints.** Users consistently report that OpenClaw drops messages, loses subagent results, and truncates replies without any error signal or retry mechanism (#116277, #44925, #84516, #87744). This erodes trust in production deployments.
- **Session state is fragile.** Multi-agent orchestration, group chat persistence, and session lane scheduling are all reported as unreliable, with config overwrites and session starvation causing cascading failures (#43367, #45573, #54488).
- **Provider routing is opaque.** Users cannot see which actual backend model was used behind a LiteLLM alias or Poe provider alias (#51441), and auth failures are not differentiated from transient errors (#47910).
- **Onboarding is incomplete.** The setup wizard omits memory/embedding configuration, leaving users without OpenClaw's most valued feature (#16670).
- **Resource leaks.** Unbounded gateway heap growth (#89315) and realtime voice state retention (#116201) cause production outages on long-running deployments.

### Positive Signals
- The QA Lab initiative (driven by `vincentkoc`) is generating substantial test coverage PRs, indicating the maintainers are serious about release quality.
- The macOS dashboard fix (#118976) and Discord transcript binding (#

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-08-04

## 1. Ecosystem Overview

The personal AI assistant and agent open-source landscape in August 2026 is characterized by rapid iteration, strong community engagement, and a clear shift toward production-hardened deployments. Eight active projects span a spectrum from full-stack platforms (OpenClaw, Hermes Agent, IronClaw) to lightweight or specialized runtimes (PicoClaw, NanoClaw, ZeroClaw, LobsterAI, Moltis). Across the ecosystem, the dominant themes are reliability of message delivery and session state, multi-agent orchestration, provider abstraction and gateway routing, and MCP (Model Context Protocol) integration. The volume of open issues and PRs—particularly at OpenClaw (500/500), Hermes Agent (~1,200 closed in the last release cycle), and IronClaw (50 PRs/day)—signals a mature, contributor-rich environment where infrastructure quality and observability are now first-class concerns rather than afterthoughts.

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | PRs Merged/Closed Today | Latest Release | Health Score |
|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | 143 | 2026.6.1 (stable); 2026.7.2-beta.5 | ⚠️ Active but high backlog of P1 bugs |
| **NanoBot** | 2 | 36 | 25 | None (last unknown) | ✅ Healthy, rapid iteration |
| **Hermes Agent** | 50 | 50 | 7 | v0.20.0 (Aug 3, 2026) | ✅ Strong, major release shipped |
| **PicoClaw** | 8 | 8 | 5 | v0.3.1 | ✅ Stable, moderate activity |
| **NanoClaw** | 1 | 9 | 6 | None (last unknown) | ✅ Healthy maintenance phase |
| **NullClaw** | 1 | 5 | 2 | None (last unknown) | ✅ Stable, low throughput |
| **IronClaw** | 38 | 50 | 18 | None (recent) | ✅ Very active, architectural refactor |
| **LobsterAI** | 2 | 11 | 6 | None (last unknown) | ⚠️ Moderate; several stale 4-month-old items |
| **Moltis** | 0 | 1 (PR #1183) | 0 | None | ⚠️ Low activity, single large PR |
| **CoPaw (QwenPaw)** | 22 | 50 | 24 | v2.1.0-beta.1 | ✅ Active, beta release |
| **ZeroClaw** | 50 | 50 | 2 | None (last unknown) | ✅ Strong, goal-mode in progress |
| **TinyClaw** | 0 | 0 | 0 | N/A | ⚪ No recent activity |
| **ZeptoClaw** | 0 | 0 | 0 | N/A | ⚪ No recent activity |

*Health Score: ✅ = active with healthy throughput; ⚠️ = active but notable gaps or backlog; ⚪ = dormant/empty.*

## 3. OpenClaw's Position

**Advantages vs. peers:**
- **Scale of community engagement.** With 500 issues and 500 PRs updated daily, OpenClaw has the largest active contributor base by a wide margin—roughly 10× the daily PR throughput of NanoBot or IronClaw.
- **Breadth of integration surface.** OpenClaw supports Discord, Telegram, Flock, and messaging-channel-specific transcript routing, giving it the widest channel coverage among the compared projects.
- **Observability investment.** OTel diagnostics session attribute support (PR #96741) and vendor-neutral tracing position OpenClaw ahead of peers in production observability.
- **QA infrastructure.** The QA Lab initiative (10+ QA-focused PRs in a single day) signals a level of release-quality discipline that most peers lack.

**Technical approach differences:**
- OpenClaw uses a **gateway-centric architecture** with provider routing, cost governance, and session lane management—more similar to an enterprise integration layer than a single-agent runtime.
- Hermes Agent and IronClaw use a **crate/layer modular architecture** (Hermes: adapters per platform; IronClaw: WS3 layered crates), while OpenClaw's monorepo-style channel dispatch is more tightly coupled.
- NanoBot, PicoClaw, and ZeroClaw lean toward **lightweight, config-driven agent runtimes** with simpler deployment footprints.

**Community size comparison:**
- OpenClaw's 500 daily PRs and 650+ contributors in the last Hermes release cycle (Hermes) suggest OpenClaw and Hermes are the two largest communities. IronClaw (50 PRs/day, multiple principal contributors) and ZeroClaw (50 issues/day) are mid-tier. The remaining projects operate with single-digit to low-double-digit daily PR counts.

## 4. Shared Technical Focus Areas

| Focus Area | Projects | Specific Needs |
|---|---|---|
| **Session state & persistence** | OpenClaw (#116201, #43367, #45573), PicoClaw (#3301), NanoClaw (#3183, #3184), ZeroClaw (#9600) | Multi-agent session isolation, context compression, session recovery on missing transcripts |
| **Provider routing & gateway** | OpenClaw, NanoBot, IronClaw, ZeroClaw, CoPaw | Provider alias resolution, cost governance, model fallback, OAuth billing classifier fixes |
| **MCP (Model Context Protocol)** | PicoClaw (#3269 — MCP hang), NanoClaw (#3092 — remote Streamable HTTP MCP), Moltis (#1183 — managed MCP bundles), IronClaw (#7065 — MCP contracts) | Remote MCP, resilient MCP connections, declarative MCP lifecycle |
| **Message delivery reliability** | OpenClaw (#116277, #44925, #87744), NanoBot (#5235 — Opus 5 rejection), CoPaw (#6614 — WeChat cron) | Silent failure detection, retry/notification, provider compatibility |
| **Multi-channel messaging** | OpenClaw, NanoBot, Hermes Agent, PicoClaw, ZeroClaw | Threading/reply semantics, channel-specific auth, cross-account routing |
| **Security & credential handling** | NullClaw (#982, #983 — proxy curl), ZeroClaw (#9417 — token leak, #9605 — webhook secrets), Hermes Agent (#77027 — env stripping), IronClaw (#7041 — WASM secret exposure) | Credential stripping, proxy routing, secret lifecycle, auth token refresh |
| **Observability & tracing** | OpenClaw (#96741 — OTel), IronClaw (#6968 — canary metrics), ZeroClaw (#9713 — token accounting) | Vendor-neutral tracing, token usage visibility, SOP status |
| **Desktop & UI performance** | OpenClaw (#118976 — macOS), PicoClaw (#3281 — WebUI lag), CoPaw (#6657 — sandbox constraints), IronClaw (#7071 — reconnect status) | Input lag, WebView2 stability, E2E test gates |
| **Config & deployment ergonomics** | OpenClaw (#45758 — YAML config), ZeroClaw (#9705 — hyphenated cron aliases), NanoClaw (#3179 — Node.js compat), Moltis (#1183 — web onboarding) | Alternative config formats, CLI help accuracy, container image hardening |

## 5. Differentiation Analysis

| Dimension | OpenClaw | Hermes Agent | IronClaw | NanoBot | ZeroClaw | PicoClaw | CoPaw (QwenPaw) | Others |
|---|---|---|---|---|---|---|---|---|
| **Primary target** | Enterprise gateway / multi-channel messaging | General-purpose agent with broad adapter coverage | Layered architecture for extensible agent platforms | Lightweight multi-provider chatbot | Goal-oriented agent with strong security | Minimal agent runtime for routing/dispatch | Qwen-family agent with desktop focus | Niche (MCP bundles, Node.js compat, etc.) |
| **Key differentiator** | Channel dispatch + gateway routing | 650+ contributors, major release cadence | WS3 layered crate architecture, E2E testing | Rapid provider integration cycle | Goal-mode RFC process, Rust-based | Minimal footprint, dispatch rules | Model fallback, file management APIs | Moltis: MCP bundles; NanoClaw: container hardening |
| **Architecture** | Monorepo, channel-first dispatch | Adapter-per-platform, modular | Crate-layered (WS1–WS4) | Config-driven, provider plugin model | Rust crate, daemon-centric | Go-based, lightweight | Python/TypeScript hybrid | Varies (Node.js, Rust, Go) |
| **Deployment** | Self-hosted, npm | Desktop + server | Desktop (Tauri/Railway) | Server + WebUI | Desktop (Tauri) + CLI | Server + WebUI | Desktop + server | Container, CLI, WebUI |
| **Maturity** | High (2026.x releases) | High (v0.20.0 major) | High (architectural wave) | Medium-High (rapid iteration) | Medium-High (RFC stage) | Medium (v0.3.x) | Medium (v2.1 beta) | Low–Medium |

## 6. Community Momentum & Maturity

**Rapidly iterating (high throughput, active releases):**
- **OpenClaw** — 500 issues/PRs daily, 143 PRs merged/closed today, QA Lab initiative; however, the P1 bug backlog is substantial and no stable release has shipped recently.
- **Hermes Agent** — Shipped v0.20.0 with ~3,650 commits and ~1,400 merged PRs; the release cycle is the most polished in the ecosystem.
- **IronClaw** — 50 PRs/day, 18 merged/closed today, active architectural refactoring (WS3 wave), strong E2E test expansion.
- **CoPaw (QwenPaw)** — Published v2.1.0-beta.1, 50 PRs/day, 24 merged/closed today; strong momentum toward a stable v2.1.

**Stabilizing (consistent maintenance, lower throughput):**
- **NanoBot** — 36 PRs/day, 25 merged/closed; provider expansion and bug-fix cadence is steady.
- **ZeroClaw** — 50 issues/PRs daily, active RFC process for goal-mode, security hardening; maturing toward v0.9.0.
- **PicoClaw** — 8 issues/PRs daily, stable v0.3.1, i18n expansion; low but consistent contribution.
- **NanoClaw** — 9 PRs/day, container image hardening, session lifecycle fixes; healthy maintenance.

**Niche / Low activity:**
- **NullClaw** — 5 PRs/day, proxy infrastructure work; stable but minimal community engagement.
- **LobsterAI** — 11 PRs/day but several 4-month-old stale items; contributor activity is present but maintainer triage is lagging.
- **Moltis** — Single large PR (#1183, MCP bundles); very low throughput, early-stage.
- **TinyClaw / ZeptoClaw** — No activity in the observation window; effectively dormant.

## 7. Trend Signals

1. **MCP is becoming a first-class integration primitive.** Four projects (PicoClaw, NanoClaw, Moltis, IronClaw) have active MCP-related work, ranging from resilient local transports to remote Streamable HTTP support to declarative bundle management. For AI agent developers, MCP is no longer experimental—it is a deployment expectation.

2. **Provider abstraction and model fallback are table stakes.** OpenClaw's provider routing, NanoBot's Responses capabilities refactor, CoPaw's model fallback with cooldown, and ZeroClaw's provider construction RFC all indicate that multi-provider, multi-model routing with graceful degradation is now a baseline requirement.

3. **Security and credential hygiene are rising priorities.** Credential stripping from child processes (Hermes Agent #77027), proxy curl paths for credential safety (NullClaw #982/#983), WhatsApp approval-token leak fixes (ZeroClaw #9417), and WASM guest diagnostics exposure (IronClaw #7041) collectively signal that agent runtimes are being treated as security-sensitive infrastructure.

4. **Session lifecycle and observability are the next frontier.** OpenClaw's session-state P1 bugs, NanoClaw's dead-session rotation, ZeroClaw's token accounting on history-trim events, and OpenClaw's OTel tracing all point toward a community-wide recognition that observability into session state, token usage, and delivery reliability is essential for production deployments.

5. **Desktop and UI stability are bottlenecks.** PicoClaw's WebUI input lag, IronClaw's "reconnecting" status flash, CoPaw's WebView2 crash-black-screen, and OpenClaw's macOS titlebar regression all indicate that as agent platforms mature, the frontend and desktop layers are becoming the primary source of user-facing bugs. Investment in E2E test infrastructure (Hermes Agent, IronClaw, CoPaw) is a direct response.

6. **Config ergonomics and deployment flexibility are differentiating factors.** YAML config support (OpenClaw #45758), hyphenated cron aliases (ZeroClaw #9705), container image hardening (NanoClaw, ZeroClaw), and managed MCP bundles (Moltis #1183) show that the ecosystem is moving toward declarative, version-controlled, and reproducible agent deployments—approaching infrastructure-as-code patterns.

7. **The community is bifurcating into "platform" and "runtime" tiers.** OpenClaw, Hermes Agent, and IronClaw are building platform-level orchestration with multi-agent, multi-channel, and multi-provider capabilities. NanoBot, PicoClaw, ZeroClaw, and CoPaw are building lightweight runtimes optimized for specific deployment profiles. Developers choosing between them should evaluate whether they need a full platform or a focused runtime.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-04

## 1. Today's Overview

NanoBot is in a high-activity development phase as of 2026-08-04. Two issues were updated in the last 24 hours (1 open bug, 1 recently closed), and 36 pull requests were updated — 11 remain open while 25 have been merged or closed. The sheer volume of PR activity (25 merged/closed in a single day) signals a rapid iteration cadence, likely driven by a coordinated release push or a large batch of accumulated contributions. The project remains healthy with continuous bug fixes, new provider integrations, and WebUI improvements flowing in. No new releases were published today.

## 2. Releases

**None.** No new versions were published on 2026-08-04. The last release data is not available in the provided snapshot.

## 3. Project Progress

A substantial batch of work was merged or closed in the last 24 hours across several key areas:

| Area | PRs | Highlights |
|------|-----|------------|
| **Provider / Integration** | #4861, #5038, #5234, #5204 | Added Eden AI gateway provider; documented ModelScope; integrated MST (Meta-Search Tool) as a new metasearch provider; refactored provider Responses capabilities with declarative profiles |
| **Bug Fixes** | #5214, #5230, #5221, #5227, #5228, #5226, #5229, #5215, #5213 | Fixed DeepSeek reasoning wire-format, Gemini unsigned tool call replay, UTF-8 tail read, i18n audit, local trigger messages, mobile keyboard dismissal, IME thread stability, gateway shutdown, pip/uv fallback |
| **WebUI** | #5227, #5228, #5229, #5226 | i18n completeness, trigger message display, IME composition stability, mobile keyboard behavior |
| **Memory / Sessions** | #5221, #5231, #5211 | Hardened history tail read against invalid UTF-8; archive idle sessions for Dream; cross-session search and mentions |
| **Channels** | #5233, #5232 | Mattermost group policy for threads (follow-up to #4459) |
| **Cron / Plugins / Docs** | #5141, #5213, #5038 | Cron expression validation, uv fallback for plugins, ModelScope documentation |
| **Legacy / Codex** | #1550 | Added dual OAuth + custom Responses mode to OpenAI Codex |

## 4. Community Hot Topics

**Most Active Issue:**
- **[#5235](https://github.com/HKUDS/nanobot/issues/5235)** — Open bug: Anthropic Opus 5 configuration always rejected. The `omit_temperature` substring list is missing `"opus-5"`, causing every request to send a temperature parameter that Opus 5 has fully deprecated. This is a newly surfaced compatibility bug tied to the July 24 Opus 5 release. No comments yet, but it directly blocks Anthropic Opus 5 usage.

**Most Active PRs (by priority and scope):**
- **[#5234](https://github.com/HKUDS/nanobot/pull/5234)** — MST metasearch provider integration (p1, open). Aggregates DuckDuckGo, Google, Brave, Bing via Reciprocal Rank Fusion.
- **[#5204](https://github.com/HKUDS/nanobot/pull/5204)** — Declarative Responses capabilities refactor (p1, open). Affects OpenAI, GitHub Copilot, DeepSeek routing behavior.
- **[#5211](https://github.com/HKUDS/nanobot/pull/5211)** — Cross-session search and `@` mentions (open). A significant UX feature for session management.
- **[#5233](https://github.com/HKUDS/nanobot/pull/5233)** — Mattermost thread group policy (p2, open). Follow-up to the Mattermost channel support added in #4459.

**Underlying Needs:** The community is actively expanding provider coverage (Eden AI, ModelScope, MST, Gemini compatibility) and improving multi-channel support (Mattermost threads). There is clear demand for better session management (cross-session search, idle archiving) and WebUI polish (i18n, mobile, IME).

## 5. Bugs & Stability

**Open Bugs (Ranked by Severity):**

| # | Severity | Title | Fix PR? |
|---|----------|-------|---------|
| [#5235](https://github.com/HKUDS/nanobot/issues/5235) | **High** — Blocks Anthropic Opus 5 usage entirely; temperature deprecation causes API rejection | None yet |
| [#5190](https://github.com/Hanobot/issues/5190) | Medium — MIME type error prevents frontend module loading | Closed (8/3) |

**Bugs Fixed Today:**
- **[#5214](https://github.com/HKUDS/nanobot/pull/5214)** — DeepSeek reasoning items wire-valid (p1) — serde deserialization errors on Responses API
- **[#5230](https://github.com/HKUDS/nanobot/pull/5230)** — Drop unsigned tool calls when replaying to Gemini (p1) — prevents 400 INVALID_ARGUMENT on model switch
- **[#5221](https://github.com/HKUDS/nanobot/pull/5221)** — Harden history tail read against invalid UTF-8 (p2)
- **[#5222](https://github.com/HKUDS/nanobot/pull/5222)** — Keep fenced code intact for languages with special chars (p2) — Telegram HTML corruption
- **[#5215](https://github.com/HKUDS/nanobot/pull/5215)** — Close agent resources deterministically on stop (p1) — asyncio teardown noise and stalled shutdown
- **[#5213](https://github.com/HKUDS/nanobot/pull/5213)** — Use uv when pip is unavailable (p2)
- **[#5141](https://github.com/HKUDS/nanobot/pull/5141)** — Validate cron expression syntax (p2)

**Assessment:** Bug fix throughput is strong — 7 bug-fix PRs merged/closed in 24 hours. The only unresolved high-severity bug is the Opus 5 temperature issue (#5235), which has no fix PR yet.

## 6. Feature Requests & Roadmap Signals

The following features are advancing toward potential release:

| Feature | PR | Signal |
|---------|-----|--------|
| **MST metasearch provider** | [#5234](https://github.com/HKUDS/nanobot/pull/5234) | p1 — multi-engine search aggregation with RRF |
| **Cross-session search & `@` mentions** | [#5211](https://github.com/HKUDS/nanobot/pull/5211) | Major UX enhancement for conversation discovery |
| **Mattermost thread group policy** | [#5233](https://github.com/HKUDS/nanobot/pull/5233) | Follow-up to channel support; enterprise collaboration |
| **Provider Responses capabilities refactor** | [#5204](https://github.com/HKUDS/nanobot/pull/5204) | Architectural — cleaner provider routing and fallback |
| **Idle session archiving for Dream** | [#5231](https://github.com/HKUDS/nanobot/pull/5231) | Memory management improvement |
| **Eden AI gateway provider** | [#4861](https://github.com/HKUDS/nanobot/pull/4861) | New provider integration |
| **OpenAI Codex dual-mode (OAuth + Responses)** | [#1550](https://github.com/HKUDS/nanobot/pull/1550) | Long-open PR (since March) — finally resolving |

**Prediction:** The next version will likely include the MST provider, Mattermost thread policy, and cross-session search as headline features, alongside the Responses capabilities refactor as a foundational change.

## 7. User Feedback Summary

**Pain Points:**
- **Anthropic Opus 5 incompatibility** (#5235): Users upgrading to the newly released Opus 5 model find their configurations rejected because the `omit_temperature` allowlist hasn't been updated. This is a regression in compatibility handling.
- **Frontend MIME type errors** (#5190): Module script loading failures in the browser prevent the WebUI from functioning at all on certain deployments.
- **Gemini tool call replay failures** (#5230): Mid-conversation model switching or fallback routing to Gemini breaks when tool calls from other providers are present.
- **Telegram code block corruption** (#5222): Language tags with special characters (e.g., `c++`, `objective-c`) corrupt fenced code blocks in Telegram messages.
- **Mobile WebUX issues**: Keyboard dismissal after send (#5226), IME composition causing thread instability (#5229).
- **i18n gaps**: Incomplete or inconsistent translations across the WebUI (#5227).

**Satisfaction Signals:**
- Active contributions from community members (goodtiding5, arcdrake22, santhreal, chengyongru) across multiple providers and platforms indicate a healthy contributor base.
- The breadth of new provider integrations (Eden AI, ModelScope, MST) shows strong user demand for search and gateway flexibility.

## 8. Backlog Watch

**Items Needing Maintainer Attention:**

| Item | Age | Status | Concern |
|------|-----|--------|---------|
| [#5235](https://github.com/HKUDS/nanobot/issues/5235) | 1 day (open) | No PR yet | High-severity Opus 5 blocking bug — needs a fix PR urgently |
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | 1 day (open) | p1 — metasearch provider | Large-scope integration; needs review and merge decision |
| [#5204](https://github.com/HKUDS/nanobot/pull/5204) | 3 days (open) | p1 — Responses capabilities refactor | Architectural change affecting multiple providers; needs thorough review |
| [#5211](https://github.com/HKUDS/nanobot/pull/5211) | 3 days (open) | Cross-session search & mentions | Significant feature; merge readiness unclear |
| [#5233](https://github.com/HKUDS/nanobot/pull/5233) | 1 day (open) | p2 — Mattermost thread policy | Follow-up to #4459; may be ready to merge |
| [#1550](https://github.com/HKUDS/nanobot/pull/1550) | ~152 days old (open) | Codex dual-mode | Long-standing PR finally getting attention; merge decision pending |
| [#4861](https://github.com/HKUDS/nanobot/pull/4861) | ~26 days old (closed) | Eden AI provider | Recently closed; verify if merged or abandoned |

**Overall Assessment:** NanoBot is in a healthy, active state with strong daily PR throughput and a well-distributed bug-fix cadence. The primary risk is the unresolved Opus 5 compatibility issue (#5235), which could affect users on the latest Anthropic model. The high volume of provider-related PRs suggests the project is in an active expansion phase, broadening its ecosystem coverage.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-04

---

## 1. Today's Overview

Hermes Agent shipped **v0.20.0** on August 3, 2026 — a major release since v0.19.0 that closed ~1,200 issues with 650+ contributors and ~3,650 commits. The project is in a high-activity window: 50 issues and 50 PRs were updated in the last 24 hours, with 7 PRs merged/closed and 3 issues closed today. The release is labeled "The Herald Release," signaling a milestone build. Overall project health is strong, with active community engagement and a steady flow of both feature work and bug fixes.

---

## 2. Releases

### Hermes Agent v0.20.0 (v2026.8.3) — Released August 3, 2026

| Metric | Value |
|---|---|
| Commits since v0.19.0 | ~3,650 |
| Merged PRs | ~1,400 |
| Files changed | ~5,200 |
| Insertions / Deletions | ~559K / ~405K |
| Issues closed | ~1,200 |
| Contributors | 650+ |

**Notable areas covered in this release cycle:**
- Gateway adapter hardening (Matrix threading/replies, WhatsApp, Signal)
- Tool and file-handling improvements (read_file, search_files, patch)
- Desktop app stability (gateway orphan reaping, E2E test gate restoration)
- Security hardening (credential stripping from child-process envs, OAuth billing classifier fix)
- Cron job lifecycle and runtime ownership
- Nix home-manager module addition
- TTS style-tag support, FAL local image edit sources
- Cooldown manager for provider failover

**Migration note:** This is a major version bump (0.19 → 0.20). Users should review changelog for any breaking changes in adapter behavior, config schema, or plugin interfaces before upgrading.

---

## 3. Project Progress

### PRs Merged/Closed Today (7 items)

| PR | Summary |
|---|---|
| [#77995](https://github.com/nousresearch/hermes-agent/pull/77995) | Re-enabled Desktop E2E CI gate (was short-circuited since Aug 2) |
| [#78025](https://github.com/nousresearch/hermes-agent/pull/78025) | Fixed Anthropic OAuth billing classifier misrouting `session_search`/`memory` tools |
| [#78002](https://github.com/nousresearch/hermes-agent/pull/78002) | Reaped stale gateway orphans on Desktop backend startup |
| [#77027](https://github.com/nousresearch/hermes-agent/pull/77027) | Stripped BWS token and `*_PASSWORD` from child-process environments (security) |
| [#75833](https://github.com/nousresearch/hermes-agent/pull/75833) | Hardened cron execution: separated declarative jobs from runtime state, added ownership/recovery |
| [#56613](https://github.com/nousresearch/hermes-agent/pull/56613) | Persistent exponential cooldown manager for provider failover |
| [#63079](https://github.com/nousresearch/hermes-agent/pull/63079) | Skip dead local endpoints on auto-resume; archive unresponsive targets |

### Key Features Advanced (Open PRs)
- **Matrix platform:** Threading/replay semantics (#62088), room naming (#51804), reply visibility (#51803), DM classification (#51802) — a coordinated platform maturity push by a single author (iainlane).
- **Model catalog:** qwen3.8-max added to Nous portal and OpenRouter, replacing qwen3.7-max (#78024).
- **Desktop:** Profile session restore (#77952), keyboard shortcut for secondary sidebar (#77937 — closed).
- **Install/update:** Test proving update path works from earlier commits (#77934), OS-specific test gating by real host (#77992).
- **Nix:** home-manager module for per-user hermes-agent service (#9087, open since April).

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| # | Title | Comments | Severity | Link |
|---|---|---|---|---|
| [64182](https://github.com/nousresearch/hermes-agent/issues/64182) | Plugin Interface Expansion — community tracking issue | 17 | P3 | [Link](https://github.com/nousresearch/hermes-agent/issues/64182) |
| [39043](https://github.com/nousresearch/hermes-agent/issues/39043) | Signal adapter: native quote/reply, edit, remote-delete, read-receipt | 7 | P3 | [Link](https://github.com/nousresearch/hermes-agent/issues/39043) |
| [76886](https://github.com/nousresearch/hermes-agent/issues/76886) | read_file reports valid UTF-8 as binary (regression in 0.19.1) | 6 | P2 | [Link](https://github.com/nousresearch/hermes-agent/issues/76886) |
| [67629](https://github.com/nousresearch/hermes-agent/issues/67629) | search_files with absolute Windows path fails | 5 | P2 | [Link](https://github.com/nousresearch/hermes-agent/issues/67629) |
| [22620](https://github.com/nousresearch/hermes-agent/issues/22620) | Skill list bloat causes context window inflation | 5 | P3 | [Link](https://github.com/nousresearch/hermes-agent/issues/22620) |
| [75269](https://github.com/nousresearch/hermes-agent/issues/75269) | SessionDB retains WAL readers, exhausting RLIMIT_NOFILE | 5 | P2 | [Link](https://github.com/nousresearch/hermes-agent/issues/75269) |
| [60551](https://github.com/nousresearch/hermes-agent/issues/60551) | config.yaml write guard + string scalar for list keys | 4 | P2 | [Link](https://github.com/nousresearch/hermes-agent/issues/60551) |

### Most Active PRs (by comment engagement)

| PR | Summary | Link |
|---|---|---|
| [#77934](https://github.com/nousresearch/hermes-agent/pull/77934) | Prove update path works from earlier commits (Linux) | [Link](https://github.com/nousresearch/hermes-agent/pull/77934) |
| [#78024](https://github.com/nousresearch/hermes-agent/pull/78024) | Add qwen3.8-max to Nous portal + OpenRouter | [Link](https://github.com/nousresearch/hermes-agent/pull/78024) |
| [#62088](https://github.com/nousresearch/hermes-agent/pull/62088) | Matrix spec-correct threading and reply semantics | [Link](https://github.com/nousresearch/hermes-agent/pull/62088) |
| [#51804](https://github.com/nousresearch/hermes-agent/pull/51804) | Matrix room naming and state-change notes | [Link](https://github.com/nousresearch/hermes-agent/pull/51804) |
| [#51803](https://github.com/nousresearch/hermes-agent/pull/51803) | Matrix: let agent see the message being replied to | [Link](https://github.com/nousresearch/hermes-agent/pull/51803) |
| [#51807](https://github.com/nousresearch/hermes-agent/pull/51807) | FAL image edits support local sources | [Link](https://github.com/nousresearch/hermes-agent/pull/51807) |
| [#51806](https://github.com/nousresearch/hermes-agent/pull/51806) | TTS: allow speech wrapped with style tag | [Link](https://github.com/nousresearch/hermes-agent/pull/51806) |
| [#51805](https://github.com/nousresearch/hermes-agent/pull/51805) | Gateway: deliver images as attachments after queued follow-up | [Link](https://github.com/nousresearch/hermes-agent/pull/51805) |
| [#51802](https://github.com/nousresearch/hermes-agent/pull/51802) | Matrix: classify DMs from m.direct account data | [Link](https://github.com/nousresearch/hermes-agent/pull/51802) |
| [#78025](https://github.com/nousresearch/hermes-agent/pull/78025) | Fix Anthropic OAuth billing classifier for session_search/memory | [Link](https://github.com/nousresearch/hermes-agent/pull/78025) |

**Analysis:** The Plugin Interface Expansion issue (#64182) is the top community discussion point — it's a tracking issue distilled from a Discord thread, indicating strong community demand for a more extensible plugin system. The Matrix adapter PRs (5 open from iainlane) represent a concentrated platform maturity effort. The read_file UTF-8 regression (#76886) is the top bug concern, directly impacting user workflows (Obsidian notes).

---

## 5. Bugs & Stability

### Ranked by Severity

| Priority | Issue | Summary | Fix PR? |
|---|---|---|---|
| **P2** | [#76886](https://github.com/nousresearch/hermes-agent/issues/76886) | `read_file` reports valid UTF-8 as binary when 1000-byte sample cuts a multibyte char (regression in 0.19.1) | None yet |
| **P2** | [#75269](https://github.com/nousresearch/hermes-agent/issues/75269) | SessionDB retains WAL readers from finished worker threads, exhausting RLIMIT_NOFILE | None yet |
| **P2** | [#67629](https://github.com/nousresearch/hermes-agent/issues/67629) | `search_files` with absolute Windows path fails — `_bash_safe_path` rewrites `D:\` to `/d/` which native `rg` cannot resolve | None yet |
| **P2** | [#77976](https://github.com/nousresearch/hermes-agent/issues/77976) | Busy-session path skips `pre_gateway_dispatch`: plugin-authorized senders silently

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-04

---

## 1. Today's Overview

PicoClaw shows moderate daily activity with 8 issues and 8 PRs updated in the last 24 hours. Five issues and five PRs were closed/merged today, while three issues and three PRs remain open. No new releases were published. The project continues to see steady community contributions across bug fixes (exec tooling, auth token refresh, routing normalization), internationalization (Japanese localization), and core agent behavior (routed-agent context management, Telegram topic support). Several long-standing bugs remain unresolved, and the project's health is generally stable but with notable gaps in reliability for MCP server resilience and WebUI performance.

---

## 2. Releases

None. No new version has been published recently. The latest known release is **v0.3.1**.

---

## 3. Project Progress

### Merged / Closed PRs (today)

| PR | Summary |
|---|---|
| [#3273](https://github.com/sipeed/picoclaw/pull/3273) | Added Japanese (`ja`) localization to the PicoClaw WebUI — full `ja.json` translation (968 lines) registered in i18n config |
| [#3267](https://github.com/sipeed/picoclaw/pull/3267) | Fixed auth token refresh scope bug for Antigravity provider — token refresh was failing due to incorrect scope being passed |
| [#3202](https://github.com/sipeed/picoclaw/pull/3202) | Fixed `NormalizeAgentID`/`NormalizeAccountID` to strip leading/trailing underscores during ID normalization, matching documented regex `^[a-z0-9][a-z0-9_-]{0,63}$` |
| [#3313](https://github.com/sipeed/picoclaw/pull/3313) | Fixed `customAllowPatterns` not working for exec tool — default deny patterns were incorrectly taking precedence over user-defined allow patterns |
| [#3310](https://github.com/sipeed/picoclaw/pull/3310) | Auto-PR automation (picoclanker) |

### Open PRs

| PR | Summary |
|---|---|
| [#3316](https://github.com/sipeed/picoclaw/pull/3316) | Fix routed-agent context management not respecting history, summarization, compression, and Seahorse bootstrap — directly addresses issue #3301 |
| [#3315](https://github.com/sipeed/picoclaw/pull/3315) | Support topics in private bot chats (Telegram) — handles `IsTopicMessage` for private chats with forum-topic-enabled bots |
| [#3314](https://github.com/sipeed/picoclaw/pull/3314) | Fix exec shell command execution when command is in `customAllowPatterns` — follow-up or duplicate of #3313, still open |

---

## 4. Community Hot Topics

### Most Active Issues

1. **[#3281](https://github.com/sipeed/picoclaw/issues/3281)** — *Web UI chat input is very laggy when history has a little bit long* (OPEN, 2 comments, 👍 1) — Created 2026-07-21. Users on PicoClaw 0.3.1 with Go 1.25.11 report severe input lag in the WebUI after accumulating chat history. This is a UX regression that affects daily usability.

2. **[#3269](https://github.com/sipeed/picoclaw/issues/3269)** — *MCP server connection failure causes agent loop to hang* (OPEN, 2 comments, 👍 1) — Created 2026-07-20. When an MCP server becomes unreachable, the agent loop blocks entirely, stopping all chat responses. This is a critical reliability issue for production deployments.

3. **[#3301](https://github.com/sipeed/picoclaw/issues/3301)** — */clear and session auto-compression don't work in chats routed to non-default agent via dispatch rules* (OPEN, 1 comment) — Created 2026-07-29. Users routing Discord/Telegram chats to specific agents via dispatch rules lose the ability to clear context or benefit from auto-compaction.

### Most Active PRs

1. **[#3316](https://github.com/sipeed/picoclaw/pull/3316)** — Routed-agent context management fix (open, directly linked to #3301)
2. **[#3315](https://github.com/siceed/picoclaw/pull/3315)** — Telegram topic support for private bot chats (open)
3. **[#3314](https://github.com/sipeed/picoclaw/pull/3314)** — Exec command allow-patterns fix (open, duplicate of recently closed #3313)

### Analysis
The underlying needs are clear: users want **reliable agent execution** (MCP resilience, exec tooling), **correct context lifecycle management** (clear/compression for routed agents), and **polished UX** (WebUI performance). The Japanese localization (#3272 → #3273) shows the project is expanding its international user base, while systemd deployment support (#3276) reflects demand for production headless server setups.

---

## 5. Bugs & Stability

### Ranked by Severity

| Severity | Issue | Status | Fix PR? |
|---|---|---|---|
| 🔴 **Critical** | [#3269](https://github.com/sipeed/picoclaw/issues/3269) — MCP server connection failure hangs agent loop, breaking all chat responses | OPEN | No |
| 🔴 **Critical** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) — WebUI input lag with long chat history | OPEN | No |
| 🟠 **High** | [#3301](https://github.com/sipeed/picoclaw/issues/3301) — `/clear` and auto-compression broken for routed agents | OPEN | Yes — [#3316](https://github.com/sipeed/picoclaw/pull/3316) |
| 🟡 **Medium** | [#3264](https://github.com/sipeed/picoclaw/issues/3264) — `SplitMessage` infinite loop on oversized fenced-code info string | CLOSED | — |
| 🟡 **Medium** | [#3265](https://github.com/sipeed/picoclaw/issues/3265) — Gateway startup fails with unknown channel type (deltachat) even when not configured | CLOSED | — |
| 🟢 **Low** | [#3268](https://github.com/sipeed/picoclaw/issues/3268) — `exec` tool `action` parameter required instead of defaulting to `"run"` | CLOSED | — |

### Notes
- [#3269] (MCP hang) has **no associated fix PR** and is the most impactful bug — it can silently break agent functionality in production.
- [#3281] (WebUI lag) also lacks a fix PR and has been open for ~14 days.
- The duplicate PR situation (#3313 closed / #3314 still open for exec allow-patterns) suggests the initial fix in #3313 may not have fully resolved the issue.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Status | Likelihood for Next Release |
|---|---|---|---|
| Launcher support for externally-managed gateway (systemd) | [#3276](https://github.com/sipeed/picoclaw/issues/3276) | CLOSED (implemented) | ✅ Likely already in codebase |
| Japanese localization for WebUI + Launcher | [#3272](https://github.com/sipeed/picoclaw/issues/3272) → [#3273](https://github.com/sipeed/picoclaw/pull/3273) | CLOSED / MERGED | ✅ Merged — watch for v0.3.2 release |
| Topics support in private Telegram bot chats | [#3315](https://github.com/sipeed/picoclaw/pull/3315) | OPEN PR | ✅ High — well-scoped fix, ready to merge |
| Auto-PR automation (picoclanker) | [#3310](https://github.com/sipeed/picoclaw/pull/3310) | CLOSED | 🔄 Internal tooling |
| Routed-agent context lifecycle fix | [#3316](https://github.com/sipeed/picoclaw/pull/3316) | OPEN PR | ✅ High — directly addresses #3301 |

**Prediction:** The next release (likely v0.3.2 or a nightly) will likely include the Japanese localization, the routed-agent context fix, and Telegram topic support, assuming the open PRs are reviewed and merged.

---

## 7. User Feedback Summary

### Pain Points
- **WebUI performance degradation** with accumulated chat history is a recurring frustration that directly impacts daily usability (#3281).
- **MCP server unreliability** causes complete agent failure with no recovery mechanism (#3269) — users expect graceful degradation or retry, not a hung loop.
- **Dispatch rule routing** is popular (Discord + Telegram users) but context management (`/clear`, compression) is broken for non-default agents (#3301), eroding trust in the routing feature.
- **Exec tool usability** was poor — the `action` parameter being required instead of defaulting to `"run"` caused unpredictable LLM tool-call failures (#3268).

### Positive Signals
- Users appreciate the **headless deployment** story (systemd, launcher) and are actively configuring production servers (#3276).
- **Internationalization** is in demand — Japanese localization was requested and delivered promptly (#3272 → #3273).
- The **routing/dispatch system** is being actively used for complex multi-agent setups, indicating the feature is maturing.

### Satisfaction Indicators
- 👍 reactions on bugs (#3281, #3269) show community agreement that these are high-priority fixes.
- Multiple contributors (honbou, j-v, floze-the-genius, Cipher208, MrTreasure, xpader, ruiyigen, genuss, sarff, Osamaali313) indicate a healthy contributor base.

---

## 8. Backlog Watch

### Long-Unanswered Items Needing Maintainer Attention

| Item | Age | Priority | Reason |
|---|---|---|---|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) — WebUI input lag with long history | ~14 days | 🔴 High | Affects core UX; no fix PR exists; likely a frontend rendering or state management issue |
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) — MCP server hang blocks agent loop | ~15 days | 🔴 Critical | Production-breaking; no fix PR; needs timeout/retry logic in the agent loop |
| [#3301](https://github.com/sipeed/picoclaw/issues/3301) — /clear and compression broken for routed agents | ~6 days | 🟠 High | Has a fix PR (#3316) but it remains unmerged — maintainer review needed |
| [#3314](https://github.com/sipeed/picoclaw/pull/3314) — Exec allow-patterns fix (duplicate of #3313) | 1 day | 🟡 Medium | Duplicate of recently closed #3313; may indicate the original fix was incomplete |
| [#3276](https://github.com/sipeed/picoclaw/issues/3276) — Launcher systemd gateway support | ~15 days | 🟢 Medium | Closed but no linked PR visible — implementation may be in a separate branch or release |

### Recommendation
The maintainer should prioritize reviewing and merging **#3316** (routed-agent context fix) and **#3315** (Telegram topics), and address the two critical open bugs (#3269, #3281) which have been unanswered for over two weeks. The duplicate PR situation (#3313/#3314) should be consolidated to avoid confusion.

---

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-04

---

## 1. Today's Overview

NanoClaw saw moderate activity on 2026-08-04, with **1 issue updated** and **9 PRs updated** (3 open, 6 merged/closed). No new releases were published. The project's primary focus today was on **stability and operational hardening** — three PRs addressed session lifecycle and transcript integrity bugs, one PR updated the hardened container image, and another surfaced the image migration path to users. A single open issue reports a Node.js compatibility error (`styleText` export missing from `node:util`), suggesting a dependency (`@clack/core`) may require a newer Node.js runtime than some users currently run. Overall, the project is in a healthy maintenance phase with a steady cadence of bug fixes and container/image updates.

---

## 2. Releases

**No new releases today.** The latest release information is unavailable; the project did not publish a new version on 2026-08-04.

---

## 3. Project Progress

### Merged / Closed PRs (6)

| PR | Summary | Author |
|----|---------|--------|
| [#3182](https://github.com/nanocoai/nanoclaw/pull/3182) | Repinned agent image to `hardened-2026-08-02` (sha256:af60e54f…, 621 MB). Same upstream base digest as previous build. | gavrielc |
| [#3180](https://github.com/nanocoai/nanoclaw/pull/3180) | Surfaced hardened image migration as an operational/container skill (SKILL.md). | gabi-simons |
| [#3137](https://github.com/nanocoai/nanoclaw/pull/3137) | Fixed engagement consistency: accumulated messages no longer trigger warm-container follow-up turns; group-scoped agents can inspect wirings and request policy updates; invalid JS engagement regexes are rejected. | Koshkoshinsk |
| [#3181](https://github.com/nanocoai/nanoclaw/pull/3181) | Fixed iMessage integration: opt-in now occurs via first message to the assigned line. | glifocat |
| [#3143](https://github.com/nanocoai/nanoclaw/pull/3143) | Preserved resolved approval card content (title, request details) after decision/timeout replaces buttons. | Koshkoshinsk |
| [#3178](https://github.com/nanocoai/nanoclaw/pull/3178) | Closed — opened against wrong repository; no upstream change. | valmedia |

### Open PRs (3)

| PR | Summary | Author |
|----|---------|--------|
| [#3184](https://github.com/nanocoai/nanoclaw/pull/3184) | Fix: rotate session on missing transcript instead of resuming into a dead session. | OowhitecatoO |
| [#3183](https://github.com/nanocoai/nanoclaw/pull/3183) | Fix: pin `cleanupPeriodDays` so retention cleanup can't reap cold sessions. | OowhitecatoO |
| [#3092](https://github.com/nanocoai/nanoclaw/pull/3092) | **Feature:** support remote Streamable HTTP MCP servers. | amit-shafnir |

---

## 4. Community Hot Topics

### Most Active Issue
- **[#3179](https://github.com/nanocoai/nanoclaw/issues/3179)** — `SyntaxError: The requested module 'node:util' does not provide an export named 'styleText'` (1 comment, 0 👍)
  - **Underlying need:** The `@clack/core` dependency (v1.2.0) imports `styleText` from `node:util`, which was added in **Node.js 20.12.0**. Users on older Node.js versions (e.g., 18.x or earlier) encounter a hard crash at import time. This signals a **minimum Node.js version gap** between the project's documented requirements and its transitive dependencies.

### Most Active PR
- **[#3092](https://github.com/nanocoai/nanoclaw/pull/3092)** — Support remote Streamable HTTP MCP servers (open since 2026-07-19, 16 days)
  - **Underlying need:** Users want to connect NanoClaw to remote MCP (Model Context Protocol) servers over HTTP, not just local stdio transports. This is a significant architectural feature that would expand deployment flexibility, especially for remote/containerized setups. The long open duration suggests the PR may need review or maintainer bandwidth.

---

## 5. Bugs & Stability

### Ranked by Severity

1. **🔴 High — Node.js compatibility crash ([#3179](https://github.com/nanocoai/nanoclaw/issues/3179))**
   - `SyntaxError` on startup when `node:util.styleText` is unavailable (Node.js < 20.12.0).
   - **Fix PR:** None currently open. The fix would likely require either a `@clack/core` version bump, a polyfill, or a documented minimum Node.js version increase.
   - **Impact:** Blocks all usage for users on older Node.js runtimes.

2. **🟡 Medium — Dead session resumption on missing transcript ([#3184](https://github.com/nanocoai/nanoclaw/pull/3184))**
   - When a stored continuation's transcript file is deleted/missing, the next message dies with `No conversation found with session ID: <uuid>`.
   - **Fix PR:** [#3184](https://github.com/nanocoai/nanoclaw/pull/3184) (open, by OowhitecatoO) — rotates the session instead of resuming into a dead one.

3. **🟡 Medium — Cold session reaping by retention cleanup ([#3183](https://github.com/nanocoai/nanoclaw/pull/3183))**
   - Users messaging a quiet channel (>30 days) get raw `No conversation found` errors, and the session stays in a broken state.
   - **Fix PR:** [#3183](https://github.com/nanocoai/nanoclaw/pull/3183) (open, by OowhitecatoO) — pins `cleanupPeriodDays` so cold sessions are preserved.

4. **🟢 Low — Approval card content lost on resolution ([#3143](https://github.com/nanocoai/nanoclaw/pull/3143))**
   - Resolved approval cards lost their title and request details after buttons were replaced.
   - **Fix PR:** [#3143](https://github.com/nanocoai/nanoclaw/pull/3143) (closed/merged by Koshkoshinsk).

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Remote Streamable HTTP MCP server support** | [#3092](https://github.com/nanocoai/nanoclaw/pull/3092) (open 16 days) | Moderate — architecturally significant, may need more review cycles |
| **Self-serve engagement policy controls** | [#3137](https://github.com/nanocoai/nanoclaw/pull/3137) (merged) | Already landed — group-scoped agents can now inspect and adjust their own wiring |
| **Hardened image migration workflow** | [#3180](https://github.com/nanocoai/nanoclaw/pull/3180) (merged) | Already landed — operational skill for image updates |
| **iMessage opt-in via first message** | [#3181](https://github.com/nanocoai/nanoclaw/pull/3181) (merged) | Already landed |

**Prediction:** The next version will likely include the **hardened image migration skill** and **engagement wiring controls** (both just merged), and may advance **remote MCP server support** if the open PR receives maintainer review. The `styleText`/Node.js compatibility issue needs attention before it becomes a broader blocker.

---

## 7. User Feedback Summary

### Pain Points
- **Node.js version incompatibility** — Users on Node.js < 20.12.0 cannot start NanoClaw due to `@clack/core` importing `styleText` from `node:util`. This is a hard blocker that affects the onboarding experience.
- **Silent session death** — Multiple users report `No conversation found with session ID` errors when transcripts are missing or sessions are cleaned up too aggressively. This erodes trust in session persistence.
- **Approval card data loss** — Resolved approval cards previously lost their context (title, request details), making it hard to audit decisions after the fact.

### Positive Signals
- **Self-serve controls** — The merged [#3137](https://github.com/nanocoai/nanoclaw/pull/3137) gives group-scoped agents the ability to inspect and adjust their own engagement policies, reducing operator burden.
- **Hardened image workflow** — The container image update and migration skill ([#3180](https://github.com/nanocoai/nanoclaw/pull/3180), [#3182](https://github.com/nanocoai/nanoclaw/pull/3182)) show active investment in security and operational reliability.

### Satisfaction Indicators
- No negative reactions (👍: 0) on any issue or PR today, which may indicate low community engagement volume rather than dissatisfaction.
- The iMessage opt-in fix ([#3181](https://github.com/nanocoai/nanoclaw/pull/3181)) and MCP remote support PR ([#3092](https://github.com/nanocoai/nanoclaw/pull/3092)) suggest users are actively expanding integration scope.

---

## 8. Backlog Watch

### Items Needing Maintainer Attention

| Item | Age | Priority | Reason |
|------|-----|----------|--------|
| **[#3092](https://github.com/nanocoai/nanoclaw/pull/3092)** — Remote Streamable HTTP MCP servers | 16 days (open) | 🔴 High | Feature-complete PR awaiting review; significant architectural value; may stall without maintainer bandwidth |
| **[#3179](https://github.com/nanocoai/nanoclaw/issues/3179)** — `styleText` Node.js compatibility error | 1 day (open) | 🔴 High | Hard crash on startup for Node.js < 20.12.0 users; no fix PR yet; needs either a dependency bump, polyfill, or documented minimum version |
| **[#3184](https://github.com/nanocoai/nanoclaw/pull/3184)** — Rotate session on missing transcript | 1 day (open) | 🟡 Medium | Fix PR from community contributor (OowhitecatoO); needs merge to prevent dead-session errors |
| **[#3183](https://github.com/nanocoai/nanoclaw/pull/3183)** — Pin cleanupPeriodDays for cold sessions | 1 day (open) | 🟡 Medium | Fix PR from same contributor; prevents aggressive retention cleanup from reaping active-but-idle sessions |
| **[#3137](https://github.com/nanocoai/nanoclaw/pull/3137)** — Engagement consistency & wiring controls | 9 days (was open) | ✅ Resolved | Merged; no further action needed |

### Recommendations
1. **Prioritize the Node.js compatibility issue (#3179)** — it is a hard blocker that affects all users on older Node.js versions and currently has no fix PR.
2. **Review and merge [#3092](https://github.com/nanocoai/nanoclaw/pull/3092)** — remote MCP server support has been open for 16 days and represents a major feature expansion.
3. **Merge the two session-lifecycle fixes (#3183, #3184)** from OowhitecatoO — they address a pattern of user-facing errors that undermine session reliability.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-08-04

---

## 1. Today's Overview

NullClaw shows moderate but focused activity on 2026-08-04, with 1 issue and 5 PRs updated in the last 24 hours. The project's attention is split between two streams: (1) infrastructure hardening around proxy and transport reliability (PRs #982, #983, #956), and (2) the finalization of streaming tool-call capabilities (PRs #964, #965). Two long-running PRs by contributor mtdphn were closed/merged, marking a significant feature milestone for streaming-native tool execution. One open bug (Issue #915) regarding scheduler authentication remains unresolved after ~81 days. Overall, the project is in a healthy maintenance and feature-completion phase, with no new releases but meaningful backend progress.

---

## 2. Releases

None. No new releases were published on or around 2026-08-04. The last release activity is not captured in the current data window.

---

## 3. Project Progress

The following PRs were merged or closed in the last 24 hours, advancing the project's streaming and tool-call capabilities:

- **[PR #964](https://github.com/nullclaw/nullclaw/pull/964)** — *CLOSED* — **"Enable native API-level tool calls during streaming"** by mtdphn. This fix resolved the inability to preserve structured tool-call deltas in `StreamChatResult`, enabling the Agent to execute pure streamed tool responses. It also addressed provider-wide capability checks that previously blocked API-level tool calls in streaming mode. This is a foundational change for streaming-first tool execution.

- **[PR #965](https://github.com/nullclaw/nullclaw/pull/965)** — *CLOSED* — **"Proposal: structured streaming tool-call support for SSE parser"** by mtdphn. A companion to #964, this PR extends the SSE parser to handle structured tool-call data emitted within `delta.content` (XML fragments from model responses). Together, #964 and #965 complete the streaming tool-call pipeline from server response parsing through agent execution.

Two additional open PRs by ArcanePivot continue proxy-related work:
- **[PR #983](https://github.com/nullclaw/nullclaw/pull/983)** — Routes non-streaming provider POSTs through a pinned curl path for proxied requests, improving credential security.
- **[PR #982](https://github.com/nullclaw/nullclaw/pull/982)** — Routes Telegram Bot API requests through curl transport when explicit proxies are configured.

One Dependabot PR bumps the Docker base image:
- **[PR #956](https://github.com/nullclaw/nullclaw/pull/956)** — Bumps Alpine from 3.23 to 3.24 in docker-images.

---

## 4. Community Hot Topics

| Item | Type | Activity | Link |
|------|------|----------|------|
| [#915](https://github.com/nullclaw/nullclaw/issues/915) | Issue (Bug) | 4 comments, 1 👍, updated 2026-08-03 | [View](https://github.com/nullclaw/nullclaw/issues/915) |
| [#983](https://github.com/nullclaw/nullclaw/pull/983) | PR (Open) | Updated 2026-08-03 | [View](https://github.com/nullclaw/nullclaw/pull/983) |
| [#982](https://github.com/nullclaw/nullclaw/pull/982) | PR (Open) | Updated 2026-08-03 | [View](https://github.com/nullclaw/nullclaw/pull/982) |

**Analysis:** Issue #915 is the most community-engaged item (4 comments, 1 upvote) and reflects a real-world deployment pain point: the scheduler fails with unauthorized errors when NullClaw connects to an Ollama instance on a shared network. The underlying need is reliable scheduled task execution in multi-service, self-hosted environments. Meanwhile, PRs #982 and #983 (both by ArcanePivot, both updated today) indicate active community contribution to proxy infrastructure — a sign of growing adoption in restricted-network or enterprise deployments where explicit proxy routing is required.

---

## 5. Bugs & Stability

**Ranked by severity:**

1. **🔴 HIGH — Scheduler unauthorized (Issue #915)** — Reported by user scabros on 2026-05-15, still open after ~81 days. The scheduler fails with unauthorized errors in both Telegram chat and other channels when NullClaw is configured with an external Ollama host on the same network. Tool calling works, but scheduled tasks do not. No fix PR has been filed for this issue. This is a critical blocker for users relying on scheduled automation.
   - [View Issue #915](https://github.com/nullclaw/nullclaw/issues/915)

**No regression bugs or crashes were reported in the last 24 hours.** The two proxy-related open PRs (#982, #983) are preventative fixes addressing transport-layer reliability rather than active bug reports.

---

## 6. Feature Requests & Roadmap Signals

- **Streaming-native tool execution** — PRs #964 and #965 (both closed) signal that the project is actively completing a major feature: full end-to-end support for tool calls within streaming responses via SSE. This was likely a top roadmap item, as both PRs were authored by the same contributor (mtdphn) and are complementary. The next version will likely include this capability.

- **Proxy infrastructure hardening** — PRs #982 and #983 indicate roadmap attention to deployment flexibility, specifically: (a) credential-safe proxy routing for provider requests, and (b) explicit proxy support for Telegram channels. This suggests the project is moving toward more robust multi-environment deployment (self-hosted, corporate proxy, VPN).

- **Docker image maintenance** — PR #956 (Dependabot) shows the project maintains containerized deployment paths, with Alpine base image updates tracked.

**Prediction:** The next release will likely bundle the streaming tool-call feature (#964 + #965) and may include the proxy transport fixes (#982, #983) if they are reviewed and merged promptly.

---

## 7. User Feedback Summary

**Pain Points:**
- **Scheduler authentication failure** (Issue #915): A real-world user running NullClaw on Ubuntu with an Ollama host on the same network reports that the scheduler is completely non-functional — not in Telegram chat nor other channels — despite LLM inference and general tool calling working correctly. This indicates a specific gap in how the scheduler authenticates or communicates with the Ollama backend, possibly related to network-level auth or header propagation.

**Use Cases Observed:**
- Self-hosted LLM inference with Ollama on local/shared networks (RTX 3090, Qwen3.6:27b)
- Telegram-based chatbot automation with scheduled tasks
- Multi-service deployment requiring explicit proxy configuration

**Satisfaction Signals:**
- The user acknowledges that "LLM is working fine" and "tool calling in nullclaw in general also works mostly fine," indicating core functionality is solid and the scheduler issue is an isolated regression or configuration gap.
- The 1 👍 on Issue #915 suggests at least one other user is experiencing or sympathizing with the same problem.

**Dissatisfaction:**
- Frustration is evident in the issue title and description — the user has been waiting since May 2025 for a resolution, and the scheduler is a core feature for automation workflows.

---

## 8. Backlog Watch

The following long-unanswered items require maintainer attention:

| Item | Age | Status | Notes |
|------|-----|--------|-------|
| [Issue #915](https://github.com/nullclaw/nullclaw/issues/915) | ~81 days | OPEN | Scheduler unauthorized bug. No fix PR filed. The 4 comments suggest some discussion occurred but no resolution path is visible. This is the highest-priority backlog item — it blocks a core automation feature for self-hosted users. |
| [PR #983](https://github.com/nullclaw/nullclaw/pull/983) | 1 day | OPEN | Proxy curl path fix by ArcanePivot. Needs maintainer review. Addresses credential security in proxied provider requests. |
| [PR #982](https://github.com/nullclaw/nullclaw/pull/982) | 1 day | OPEN | Telegram curl transport fix by ArcanePivot. Same contributor, same day — likely part of a coordinated proxy infrastructure effort. |
| [PR #956](https://github.com/nullclaw/nullclaw/pull/956) | ~50 days | OPEN | Dependabot Alpine bump. Low priority but should be merged to keep Docker images current. |

**Recommendation:** The maintainer should prioritize reviewing and merging the proxy PRs (#982, #983) and addressing Issue #915, which has the longest open time and highest user impact among unresolved items.

---

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-04

**Repository:** [nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. Today's Overview

IronClaw is in an active development phase with substantial throughput across both issues and pull requests. In the last 24 hours, **38 issues** were updated (29 open/active, 9 closed) and **50 PRs** were updated (32 open, 18 merged/closed), while no new releases were published. The project's focus is heavily weighted toward architectural refactoring (Wave 3 WS3 layer reshuffling), E2E test coverage expansion, and bug-bash triage on the Railway QA instance. Overall activity signals a healthy, well-maintained project with a clear roadmap and strong contributor engagement.

---

## 2. Releases

**No new releases** were published in the last 24 hours. The latest release activity remains at the previously published state.

---

## 3. Project Progress

### Merged/Closed PRs Today (18 total)

| PR | Summary |
|---|---|
| [#7070](https://github.com/nearai/ironclaw/pull/7070) | Fixed 5 Reborn WebUI v2 E2E tests (SSE keep_alive cursor, admin retry, stale selectors) — unblocked main Code Coverage |
| [#7040](https://github.com/nearai/ironclaw/pull/7040) | Closed 3 remaining WS2 stray rows in the architecture checklist |
| [#7049](https://github.com/nearai/ironclaw/pull/7049) | Added weekly Wednesday release strategy documentation |
| [#6635](https://github.com/nearai/ironclaw/pull/6635) | Restored Docker image build in CI pipeline |
| [#6999](https://github.com/nearai/ironclaw/pull/6999) | Closed (server-lifecycle rule gap documented) |
| [#5981](https://github.com/nearai/ironclaw/pull/5981) | Reborn queued-message steering ported to current main with turn-boundary races fixed |

### Key Open PRs Advancing Features

| PR | Summary |
|---|---|
| [#7080](https://github.com/nearai/ironclaw/pull/7080) | Moves skill-install executor to `extension_support` (WS3 first-party-tools family 1) |
| [#7064](https://github.com/nearai/ironclaw/pull/7064) | Sheds model gateway + tool disclosure into `loop_host` (WS3/WS4) |
| [#7065](https://github.com/nearai/ironclaw/pull/7065) | Merges sandbox lane, flips MCP onto contracts (WS3) |
| [#7077](https://github.com/nearai/ironclaw/pull/7077) | Fixes auth: one vendor authorization covers all installed extensions sharing the account (closes #7069) |
| [#7024](https://github.com/nearai/ironclaw/pull/7024) | Resolves hosted-MCP auth during registration |
| [#6957](https://github.com/nearai/ironclaw/pull/6957) | Manages installed package lifecycle with IronHub receipts |
| [#6938](https://github.com/nearai/ironclaw/pull/6938) | Lets the model choose skills instead of a keyword scorer (epic #6941) |
| [#6968](https://github.com/nearai/ironclaw/pull/6968) | Instruments progressive-disclosure canary metrics |
| [#5982](https://github.com/nearai/ironclaw/pull/5982) | Budget approval-as-blocked-gate + usage settings (split 2/2) |
| [#6970](https://github.com/nearai/ironclaw/pull/6970) | Upgrades V1 documentation, removes "Reborn" terminology from public docs |

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

1. **[#6284](https://github.com/nearai/ironclaw/issues/6284)** — *[CLOSED] [epic] error-recoverability endgame* (15 comments): Defines a contract ensuring every mid-run error is survivable, visible to the model, and actionable. This is the highest-engagement issue and signals deep investment in agent resilience.

2. **[#6524](https://github.com/nearai/ironclaw/issues/6524)** — *[CLOSED] Epic: Hermetic capability and journey testing platform* (4 comments): Addresses the gap in deterministic, meaningful coverage for all capabilities and critical user journeys.

3. **[#7060](https://github.com/nearai/ironclaw/issues/7060)** — *[OPEN] [QA] Platform-owned WIT and extension package changes fail the Reborn scope classifier* (2 comments): A regression tied to the bounded Reborn planner introduced in #7019.

### Most Active PRs (by comment activity)

1. **[#7080](https://github.com/nearai/ironclaw/pull/7080)** — Skill-install executor refactor (WS3) — XL size, core contributor
2. **[#7064](https://github.com/nearai/ironclaw/pull/7064)** — Model gateway + tool disclosure shed into `loop_host` (WS3/WS4) — XL size
3. **[#7065](https://github.com/nearai/ironclaw/pull/7065)** — Sandbox lane merge + MCP contracts flip (WS3) — XL size

**Underlying Need Analysis:** The community is driving toward (a) a clean, layered architecture with well-defined crate boundaries (WS3 wave), (b) verifiable E2E coverage for every capability, and (c) a self-healing agent that can recover from errors transparently. The high comment counts on epics (#6284, #6524) indicate strong consensus on these architectural directions.

---

## 5. Bugs & Stability

### P1 Bugs (Critical — Production Impact)

| # | Title | Instance | Fix PR? |
|---|---|---|---|
| [#7069](https://github.com/nearai/ironclaw/issues/7069) | Google services require repeated authentication | Railway | Yes — [#7077](https://github.com/nearai/ironclaw/pull/7077) (open) |
| [#7074](https://github.com/nearai/ironclaw/issues/7074) | Multi-tool meeting research fails after retrieving calendar data | Railway | No |
| [#7045](https://github.com/nearai/ironclaw/issues/7045) | Telegram voice notes and stickers fail entire update parse (InvalidExternalRef) | — | No |
| [#7068](https://github.com/nearai/ironclaw/issues/7068) | Hosted MCP omitted destructiveHint read as false (spec defaults to true) | — | No |

### P2 Bugs (High — User Experience)

| # | Title | Instance | Fix PR? |
|---|---|---|---|
| [#7071](https://github.com/nearai/ironclaw/issues/7071) | "Reconnecting" status appears during every streaming update | Railway | No |
| [#7075](https://github.com/nearai/ironclaw/issues/7075) | Agent ignores follow-up question after failed run | Railway | No |
| [#7072](https://github.com/nearai/ironclaw/issues/7072) | Telegram messages render raw Markdown instead of formatted text | Railway | No |
| [#7073](https://github.com/nearai/ironclaw/issues/7073) | Agent exposes internal implementation details in user-facing response | Railway | No |

### Other Stability Concerns

- **[#7031](https://github.com/nearai/ironclaw/issues/7031)** — Failed lazy delivery recovery is not retried within a coordinator lifetime (open, no fix PR)
- **[#7041](https://github.com/nearai/ironclaw/issues/7041)** — WASM guest diagnostics can expose detectable secrets through runtime, model causes, and tracing (security concern, open)
- **[#7060](https://github.com/nearai/ironclaw/issues/7060)** — Platform-owned WIT and extension package changes fail Reborn scope classifier (regression, open)

**Note:** Only the Google auth bug (#7069) has an associated fix PR (#7077). The majority of P1/P2 bugs from the bug_bash batch (all authored by `joe-rlo` on the Railway instance) lack fix PRs and need maintainer attention.

---

## 6. Feature Requests & Roadmap Signals

### High-Signal Feature Requests

| # | Title | Signal Strength |
|---|---|---|
| [#7044](https://github.com/nearai/ironclaw/issues/7044) | Onboarding to channel-first approach — blank-slate adoption friction | Strong — tied to #7046 |
| [#7046](https://github.com/nearai/ironclaw/issues/7046) | Configure all tools, channels, and extensions from AI chat | Strong — explicitly linked to #7044 |
| [#6941](https://github.com/nearai/ironclaw/issues/6941) | Skills the model can self-create, find, choose, and use (epic) | Strong — active PR #6938 stacked on this |
| [#6734](https://github.com/nearai/ironclaw/issues/6734) | Agent access to its own documentation for tool/channel configuration | Medium — closed, likely shipped |
| [#6524](https://github.com/nearai/ironclaw/issues/6524) | Hermetic capability and journey testing platform | Medium — closed, testing infrastructure advance |
| [#7056](https://github.com/nearai/ironclaw/issues/7056) | Add Automation Lifecycle E2E | Medium — new, active |
| [#7055](https://github.com/nearai/ironclaw/issues/7055) | Add Project Lifecycle and Membership E2E | Medium — new, active |
| [#7054](https://github.com/nearai/ironclaw/issues/7054) | Add First-Run LLM Onboarding E2E | Medium — new, active |

### Next-Version Predictions

1. **AI-driven configuration** (#7046) — likely next if #7044 onboarding work ships, as both are authored by `sergeiest` and explicitly cross-referenced.
2. **Self-service skill lifecycle** (#6941) — PR #6938 is already merged/under review; the model-chosen-skills paradigm is actively being implemented.
3. **Hermetic testing platform** (#6524) — closed, so the infrastructure work is likely in the next release candidate.
4. **Onboarding flow** (#7044) — new epic with no PRs yet; likely a multi-sprint effort.

---

## 7. User Feedback Summary

### Pain Points

- **Authentication friction:** Google services repeatedly requesting authorization even after successful OAuth flows ([#7069](https://github.com/nearai/ironclaw/issues/7069)). This is a P1 production bug on the Railway QA instance.
- **Streaming UX issues:** "Reconnecting" status flashing during successful streams ([#7071](https://github.com/nearai/ironclaw/issues/7071)) and raw Markdown rendering in Telegram instead of formatted text ([#7072](https://github.com/nearai/ironclaw/issues/7072)).
- **Agent behavior after failure:** The agent ignores new user questions after a run fails and instead resumes the previously failed task ([#7075](https://github.com/nearai/ironclaw/issues/7075)).
- **Information leakage:** Internal tool names and delivery routing logic exposed in user-facing responses ([#7073](https://github.com/nearai/ironclaw/issues/7073)).
- **Telemetry gaps:** Projects page displays fabricated metrics (`$0.00 spend`, `0 pending gates`) as real data ([#6902](https://github.com/nearai/ironclaw/issues/6902), closed but recently updated).
- **Workspace file links** don't open referenced files in the WebUI ([#6915](https://github.com/nearai/ironclaw/issues/6915), closed).

### Positive Signals

- Active E2E test coverage expansion (multiple new E2E issues opened by `italic-jinxin`) indicates confidence in the test harness.
- The error-recoverability epic (#6284) being closed shows the team is delivering on agent resilience guarantees.
- Strong documentation investment (PRs #6965, #6970, #6994) shows a maturing project with growing contributor diversity.

---

## 8. Backlog Watch

### Long-Unanswered Issues Needing Maintainer Attention

| Issue | Age | Reason for Attention |
|---|---|---|
| [#7060](https://github.com/nearai/ironclaw/issues/7060) | 1 day | Regression in Reborn scope classifier — blocks QA pipeline |
| [#7068](https://github.com/nearai/ironclaw/issues/7068) | 1 day | Security-adjacent MCP spec compliance bug (destructiveHint default mismatch) |
| [#7067](https://github.com/nearai/ironclaw/issues/7067) | 1 day | Architectural cleanup — replace ResourceGovernor dependency; last two WS3 layer-matrix exceptions |
| [#7041](https://github.com/nearai/ironclaw/issues/7041) | 1 day | Security: WASM guest diagnostics may expose secrets |
| [#7046](https://github.com/nearai/ironclaw/issues/7046) | 1 day | High-value feature (AI-driven config) with no PR yet |
| [#7044](https://github.com/nearai/ironclaw/issues/7044) | 1 day | Onboarding epic — blocks new user adoption |
| [#6941](https://github.com/nearai/ironclaw/issues/6941) | 4 days | Self-service skills epic — PR #6938 stacked on it needs merge |
| [#7031](https://github.com/nearai/ironclaw/issues/7031) | 1 day | Delivery recovery not retried within coordinator lifetime |
| [#7076](https://github.com/nearai/ironclaw/issues/7076) | 1 day | Catalog packages failing to install — needs resolution |

### Long-Unanswered PRs Needing Maintainer Attention

| PR | Age | Reason |
|---|---|---|
| [#7080](https://github.com/nearai/ironclaw/pull/7080) | 1 day | XL-size WS3 refactor — skill-install executor move |
| [#7064](https://github.com/nearai/ironclaw/pull/7064) | 1 day | XL-size WS3/WS4 — model gateway + tool disclosure shed |
| [#7065](https://github.com/nearai/ironclaw/pull/7065) | 1 day | XL-size WS3 — sandbox lane merge + MCP contracts flip |
| [#7077](https://github.com/nearai/ironclaw/pull/7077) | 1 day | Auth fix for Google repeated auth (closes P1 #7069) |
| [#7024](https://github.com/nearai/ironclaw/pull/7024) | 2 days | Hosted-MCP auth resolution during registration |
| [#6957](https://github.com/nearai/ironclaw/pull/6957) | 4 days |

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-04

**Repository:** [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. Today's Overview

LobsterAI recorded a moderately active day with **2 issues** and **11 pull requests** updated within the last 24 hours. Of the PRs, **6 were merged or closed** and **5 remain open**, indicating a healthy merge cadence. No new releases were published today. The bulk of today's merged work consists of feature additions (sidebar task filter, startup credit campaign) and a Windows installer stability fix, while two long-running "fix btw tools" PRs were closed (one merged, one reverted). Overall project health is stable, with a steady pipeline of community and maintainer-driven changes flowing through the review pipeline.

---

## 2. Releases

**No new releases today.** The latest release information is not available in the current data snapshot.

---

## 3. Project Progress (Merged / Closed PRs Today)

| PR | Title | Author | Key Change |
|---|---|---|---|
| [#2418](https://github.com/netease-youdao/LobsterAI/pull/2418) | feat(sidebar): add multi-agent task activity filter | liuzhq1986 | Added a Codex-inspired task activity filter button in the sidebar to surface tasks needing attention across multiple agents; hides when sidebar is collapsed. |
| [#2419](https://github.com/netease-youdao/LobsterAI/pull/2419) | feat(activity): add startup credit campaign | btc69m979y-dotcom | Introduced a configurable startup credit campaign popup and persistent new-conversation-page entry for NetEase user acquisition; includes login continuation and claim flow. |
| [#2420](https://github.com/netease-youdao/LobsterAI/pull/2420) | fix(nsis): re-kill survivor processes on every stop poll round | fisherdaddy | Fixed a Windows NSIS installer bug where `Stop-Process` was only issued once before polling, allowing respawned processes to survive the gate; now re-issues on every round with per-process survivor logging. |
| [#2421](https://github.com/netease-youdao/LobsterAI/pull/2421) | Liuzhq/fix btw tools | liuzhq1986 | Closed as part of the "btw tools" fix series (details minimal in summary). |
| [#2422](https://github.com/netease-youdao/LobsterAI/pull/2422) | Liuzhq/fix btw tools | liuzhq1986 | Closed as part of the "btw tools" fix series. |
| [#2423](https://github.com/netease-youdao/LobsterAI/pull/2423) | Revert "Liuzhq/fix btw tools" | liuzhq1986 | Reverted the "btw tools" changes — suggests the fix introduced regressions or was superseded by a better approach. |

**Notable:** The revert of PR #2422 (#2423) is significant — it signals that the "btw tools" fix was not stable enough to ship, and the team chose to roll it back rather than iterate. This warrants attention.

---

## 4. Community Hot Topics

**Most Active Issues:**
- **[#1206](https://github.com/netease-youdao/LobsterAI/issues/1206)** — Bug report on kimi2.5 model producing duplicate replies during document analysis. Tags: `[stale] [bug]`. 1 comment, 0 👍. Created 2026-04-01, last updated 2026-08-03.
- **[#1213](https://github.com/netease-youdao/LobsterAI/issues/1213)** — Feature request for Markdown export in session detail view. Tags: `[stale] [feature]`. 1 comment, 0 👍. Created 2026-04-01, last updated 2026-08-03.

**Most Active PRs:**
- **[#1208](https://github.com/netease-youdao/LobsterAI/pull/1208)** — Retry button for transient cowork errors (429, network failures). Still open since April 2026.
- **[#1214](https://github.com/netease-youdao/LobsterAI/pull/1214)** — Markdown export feature implementation. Still open since April 2026.
- **[#1212](https://github.com/netease-youdao/LobsterAI/pull/1212)** — Increase custom provider limit from 10 to 20. Still open since April 2026.

**Analysis:** Both issues and several key PRs have been sitting for ~4 months with minimal engagement (0 upvotes, 1 comment). This suggests either low community visibility or that these items are niche but valuable. The Markdown export feature (#1213 issue / #1214 PR) has a direct 1:1 issue-to-PR mapping, indicating a user-driven request that was implemented but not yet reviewed/merged.

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description |
|---|---|---|
| **Medium** | [#1206](https://github.com/netease-youdao/LobsterAI/issues/1206) | kimi2.5 model duplicates analysis steps and replies when processing documents — reproducible 100% of the time for affected users. Switching models resolves it, pointing to a model-specific handling bug in the document analysis pipeline. |
| **Medium** | [#2420](https://github.com/netease-youdao/LobsterAI/pull/2420) (merged) | NSIS installer on Windows could leave survivor processes after stop, requiring a re-kill fix. Now resolved in today's merged PR. |
| **Low** | [#1209](https://github.com/netease-youdao/LobsterAI/pull/1209) (open) | `web-search` block caused by unsupported Chrome flags (`--disable-blink-features=AutomationControlled`) being injected externally. Fix blocks these flags from propagating. |

**Fix PRs present:** Yes — PR #2420 (Windows installer) was merged today. PRs #2421/#2422 (btw tools) were closed, but #2423 (revert) indicates instability. No dedicated bug-fix PR exists for #1206 yet.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Status | Likelihood of Next Release |
|---|---|---|---|
| **Export conversation as Markdown** | Issue #1213, PR #1214 | PR open since April 2026; full implementation with `buildDisplayItems`, `buildConversationTurns`, truncation logic | **High** — implementation is complete and ready for review |
| **Manual retry button for cowork errors** | PR #1208 | Open since April 2026; adds `RETRYABLE_ERROR_KEYS` set for 429/network errors | **Medium** — well-scoped, likely to ship if reviewed |
| **Custom provider limit increase (10→20)** | PR #1212 | Open since April 2026; moves hardcoded key list to dynamic config | **Medium** — infrastructure change, low risk |
| **Multi-agent task activity filter** | PR #2418 | Just merged today | **Shipped** — will appear in next release |
| **Startup credit campaign** | PR #2419 | Just merged today | **Shipped** — campaign-driven, may be temporary |
| **Web search Chrome flags fix** | PR #1209 | Open since April 2026 | **Medium** — defensive fix with clear user impact |

**Prediction:** The Markdown export feature and the cowork retry button are the strongest candidates for the next release, given they are fully implemented and address clear user pain points.

---

## 7. User Feedback Summary

**Pain Points:**
- **kimi2.5 model instability** — Users on private deployments of kimi2.5 experience duplicate tool calls and replies during document analysis, breaking the workflow entirely. Model switching is the only workaround, which is unsatisfactory for users committed to kimi2.5.
- **Conversation export limitations** — Users cannot export chat history as editable text; only image export is available, making citation, sharing, and archival cumbersome.
- **Cowork error handling** — Transient errors (rate limits, network blips) force users to manually re-enter their entire message rather than retrying the last action.
- **Custom provider rigidity** — The 10-provider cap forces users to delete existing configs when adding new ones, disrupting workflows.

**Satisfaction Signals:**
- Users are actively building and contributing features (Markdown export, retry buttons, provider config improvements), indicating a healthy contributor community.
- The startup credit campaign PR suggests the product is actively being used for user acquisition, implying a growing user base.

---

## 8. Backlog Watch

The following items have been open for **4+ months** with minimal maintainer engagement and should be prioritized:

| Item | Type | Age | Concern |
|---|---|---|---|
| [#1206](https://github.com/netease-youdao/LobsterAI/issues/1206) | Bug (kimi2.5 duplicate replies) | ~4 months | Reproducible 100% for affected users; no fix PR exists; tagged `[stale]` but still open. |
| [#1208](https://github.com/netease-youdao/LobsterAI/pull/1208) | Feature (cowork retry button) | ~4 months | Complete implementation waiting for review; directly improves UX for error-prone workflows. |
| [#1209](https://github.com/netease-youdao/LobsterAI/pull/1209) | Fix (web-search Chrome flags) | ~4 months | Blocks web-search functionality for affected Chrome users; defensive fix. |
| [#1212](https://github.com/netease-youdao/LobsterAI/pull/1212) | Fix (custom provider limit) | ~4 months | Long-standing config limitation; low-risk change. |
| [#1214](https://github.com/netease-youdao/LobsterAI/pull/1214) | Feature (Markdown export) | ~4 months | Complete implementation paired with Issue #1213; ready to merge. |
| [#1213](https://github.com/netease-youdao/LobsterAI/issues/1213) | Feature request (Markdown export) | ~4 months | User request with a matching PR; needs maintainer action to close the loop. |

**Recommendation:** The maintainer team should triage the 4-month-old stale items. At minimum, PRs #1208, #1209, #1212, and #1214 should be reviewed and either merged or explicitly closed with rationale. Issue #1206 needs a dedicated fix or a confirmed-wont-fix status. The revert of PR #2422 also suggests the team should communicate what went wrong with the "btw tools" fix to avoid repeated effort.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-04

**Repository:** [moltis-org/moltis](https://github.com/moltis-org/moltis)

---

## 1. Today's Overview

The Moltis project shows minimal recent activity as of 2026-08-04. There were zero issues updated in the last 24 hours and zero new releases. The only recent activity is one open pull request (#1183), which was created on 2026-08-02 and last updated on 2026-08-03. This PR introduces a significant feature — managed repository bundles for MCP server lifecycle management — suggesting the project is in an active development phase focused on expanding its MCP (Model Context Protocol) integration capabilities. Overall project health appears stable but low-traffic, with no reported incidents or regressions in the observation window.

---

## 2. Releases

**No new releases.** There are no versioned tags or published releases in the recent period. The project's release cadence does not appear to have a scheduled or imminent new version based on available data.

---

## 3. Project Progress

**Merged/closed PRs today:** 0

**Open PRs under development:**
- **[PR #1183](https://github.com/moltis-org/moltis/pull/1183)** — *feat(mcp): add managed repository bundles* (by penso, opened 2026-08-02)
  - **Status:** Open, under review
  - **Scope:** Adds managed Git repository bundles enabling discovery, previewing, installation, updating, rolling back, and removal of MCP servers. Also introduces support for HTTPS credentials, pinned managed SSH transport, vault lifecycle integration, imported repository-backed MCP configurations, and simplified web onboarding flows.
  - **Assessment:** This is a substantial feature PR touching multiple subsystems (Git management, credential handling, vault integration, and web UI onboarding). Its open status suggests it is still undergoing review or awaiting maintainer action. No PRs were merged or closed in the last 24 hours.

---

## 4. Community Hot Topics

**Most active Issues:** None reported in the last 24 hours.

**Most active PRs:**
- **[PR #1183](https://github.com/moltis-org/moltis/pull/1183)** — The sole active PR and the most prominent community contribution. It has 0 👍 reactions and an undefined comment count, suggesting it may not yet have received significant community engagement or review feedback.

**Underlying needs analysis:** The managed repository bundles feature (#1183) addresses a clear need for streamlined MCP server management — specifically, the ability to declaratively manage MCP server configurations via Git repositories. This signals that users or contributors want a more automated, version-controlled approach to MCP server lifecycle management, reducing manual configuration overhead and enabling team-based or CI/CD-driven MCP deployments.

---

## 5. Bugs & Stability

**Bugs reported today:** 0

**Crashes or regressions:** None reported.

**Fix PRs:** None in the current window.

**Stability assessment:** With zero issues updated and zero bug reports in the last 24 hours, the project appears stable in its current state. No stability concerns have been raised by the community during this observation period.

---

## 6. Feature Requests & Roadmap Signals

**User-requested features:** No issues or feature requests were recorded in the last 24 hours.

**Roadmap signals from active PRs:**
- **[PR #1183](https://github.com/moltis-org/moltis/pull/1183)** strongly suggests the roadmap includes:
  - **Declarative MCP server management** via Git-based bundles — enabling teams to version-control and share MCP configurations.
  - **Enhanced credential management** (HTTPS credentials, SSH pinning) — pointing toward enterprise or multi-tenant use cases requiring secure access to private repositories.
  - **Vault lifecycle integration** — indicating a move toward secrets management and automated credential rotation for MCP servers.
  - **Simplified web onboarding** — suggesting a UX-focused effort to lower the barrier to entry for new users configuring MCP servers.

**Prediction:** If PR #1183 is merged, the next release is likely to center on MCP server lifecycle automation and repository-based configuration management. These features align with a broader trend toward infrastructure-as-code for AI agent tooling.

---

## 7. User Feedback Summary

**Real user pain points:** No direct user feedback (issues, comments, or discussions) was available in the last 24 hours to analyze.

**Use cases (inferred from PR scope):** The managed repository bundles feature in #1183 implies users need to:
- Deploy and update MCP servers across multiple environments from a single Git source.
- Roll back MCP server configurations to previous states.
- Securely authenticate to private Git repositories when installing MCP servers.
- Integrate MCP server configuration into existing CI/CD or DevOps workflows.

**Satisfaction/Dissatisfaction:** No quantitative or qualitative feedback data is available for this period. The absence of issues or complaints may indicate a stable user base with no acute pain points, or it may reflect low community engagement volume.

---

## 8. Backlog Watch

**Long-unanswered Issues:** None identified in the current data window.

**Long-unanswered PRs requiring maintainer attention:**
- **[PR #1183](https://github.com/moltis-org/moltis/pull/1183)** — *feat(mcp): add managed repository bundles*
  - **Opened:** 2026-08-02 | **Last updated:** 2026-08-03
  - **Concern:** This is a large, high-impact feature PR that has been open for at least 2 days without visible community review or maintainer action. Given its scope (touching Git management, credentials, vault integration, and web onboarding), it likely requires thorough review from multiple maintainers.
  - **Recommendation:** Maintainers should prioritize review of #1183 to either provide feedback to the contributor (penso) or merge it if it meets quality standards. Delayed review of substantial feature PRs can lead to contributor disengagement and stale code that may require re-basing against upstream changes.

---

*Digest generated from GitHub data as of 2026-08-04. All links reference github.com/moltis-org/moltis.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-08-04

---

## 1. Today's Overview

CoPaw (QwenPaw) shows strong development momentum on 2026-08-04, with 22 issues and 50 pull requests updated in the last 24 hours. A new beta release **v2.1.0-beta.1** was published, marking the project's progression toward a stable v2.1 cycle. The activity mix includes bug fixes for regressions, new features (model fallback, file management APIs, desktop OS integration), and CI/CD hardening. Overall project health is active, with a healthy ratio of merged/closed PRs (24) to open PRs (26), and a manageable issue backlog (16 open, 6 closed).

---

## 2. Releases

### v2.1.0-beta.1 — [Release Page](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.1.0-beta.1)

**Key Changes:**
- **fix(chat):** Prevent stale channel identity from leaking into new chats after restart — addresses a session-persistence regression ([PR #6382](https://github.com/agentscope-ai/QwenPaw/pull/6382))
- **feat(inbox):** Wobble sidebar inbox animation on new approvals and color-coded badge dot for visual feedback ([PR](https://github.com/agentscope-ai/QwenPaw/pull/))

**Breaking Changes:** None noted in the beta changelog. Migration notes: users upgrading from v2.0.x should expect improved channel identity isolation and enhanced inbox notification UX. No database schema changes are indicated.

**Verification:** A release-duty issue ([#6656](https://github.com/agentscope-ai/QwenPaw/issues/6656)) was opened by `github-actions[bot]` with a 4-hour verification deadline, including platform-specific installation checkpoints.

---

## 3. Project Progress

### Merged / Closed PRs Today (selected highlights):

| PR | Type | Summary |
|----|------|---------|
| [#6653](https://github.com/agentscope-ai/QwenPaw/pull/6653) | Bug Fix | Fence-aware section extraction in real-behavior-proof CI (fixes evidence stripping) |
| [#6654](https://github.com/agentscope-ai/QwenPaw/pull/6654) | CI Fix | Cap Playwright below 1.62 to unblock macOS desktop verify |
| [#6646](https://github.com/agentscope-ai/QwenPaw/pull/6646) | CI Fix | Fetch PR body via API for fork PRs in real-behavior-proof |
| [#6657](https://github.com/agentscope-ai/QwenPaw/pull/6657) | Bug Fix | Report sandbox constraints the backend cannot enforce (silent config gaps) |
| [#6658](https://github.com/agentscope-ai/QwenPaw/pull/6658) | Bug Fix | Normalize empty batch placeholders (`""`, `[]`, `"[]"`) to `None` in `spawn_subagent` |
| [#6652](https://github.com/agentscope-ai/QwenPaw/pull/6652) | Bug Fix | Enforce `max_iterations` server-side in MissionGate (prevents runaway sub-agent dispatch) |
| [#6650](https://github.com/agentscope-ai/QwenPaw/pull/6650) | Performance | Reduce skill API payloads by separating list summaries from on-demand detail responses |
| [#6623](https://github.com/agentscope-ai/QwenPaw/pull/6623) | Bug Fix | Prevent final text loss when ACP notifications race the prompt response (fixes #6625) |
| [#6595](https://github.com/agentscope-ai/QwenPaw/pull/6595) | Bug Fix | Accept empty-string coercion for optional `spawn_subagent` args (fixes #6588) |
| [#6579](https://github.com/agentscope-ai/QwenPaw/pull/6579) | Bug Fix | Use bundled Python for script execution (addresses #6160) |
| [#6203](https://github.com/agentscope-ai/QwenPaw/pull/6203) | Bug Fix | Bound and hide Windows `tasklist` liveness probe (timeout, error handling) |
| [#6616](https://github.com/agentscope-ai/QwenPaw/pull/6616) | Bug Fix | Build valid user message (list[ContentBlock]) for headless `qwenpaw task` command |
| [#6651](https://github.com/agentscope-ai/QwenPaw/pull/6651) | Feature | Add file/folder management REST API for the Files page (6 new operations) |
| [#6645](https://github.com/agentscope-ai/QwenPaw/pull/6645) | Feature | Desktop OS enhancements: full-screen, menu bar, Dock, Spaces, Mission Control, window management |
| [#6659](https://github.com/agentscope-ai/QwenPaw/pull/6659) | Feature | Model fallback with cooldown mechanism (addresses #2199, #1327, #2089) |
| [#2199](https://github.com/agentscope-ai/QwenPaw/pull/2199) | Feature | Automatic model fallback with cooldown support (long-running PR, now with implementation) |
| [#5930](https://github.com/agentscope-ai/QwenPaw/pull/5930) | Feature | Structured run outcome in SSE response for API automation integrations |
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | Feature | Unify provider discovery, model metadata, routing, and agent controls |

### Notable first-time contributors:
- `codeambarish-hub` (#6660): `.dockerignore` fix
- `mohitdebian` (#6658, #6609): `spawn_subagent` batch normalization and schema fix
- `cocoakekeyu` (#6623): ACP notification race fix

---

## 4. Community Hot Topics

### Most Active Issues (by comment count):

1. **[#6537](https://github.com/agentscope-ai/QwenPaw/issues/6537)** — *Skill tags disappear on restart (regression of #3270)* — **11 comments**, CLOSED
   - **Underlying need:** Users rely on skill tags for organization and retrieval; data loss on restart erodes trust. The regression suggests a manifest reconciliation bug introduced in a recent change. The fact that it was closed suggests a fix is in progress or merged.

2. **[#6649](https://github.com/agentscope-ai/QwenPaw/issues/6649)** — *Support GPT-5.6 prompt caching parameters in Responses API provider* — **8 comments**, OPEN
   - **Underlying need:** Enterprise users running multi-turn agent loops need cost optimization via prompt caching. This signals demand for cutting-edge LLM API feature parity.

3. **[#6588](https://github.com/agentscope-ai/QwenPaw/issues/6588)** — *spawn_subagent treats empty batch placeholders as batch mode* — **6 comments**, OPEN
   - **Underlying need:** Robustness when integrating with OpenAI Responses-compatible endpoints that return empty optional parameter placeholders. Users need graceful handling of API quirks.

4. **[#6608](https://github.com/agentscope-ai/QwenPaw/issues/6608)** — *Long-running shell commands block Feishu session indefinitely* — **3 comments**, OPEN
   - **Underlying need:** Per-channel total timeout and proper subprocess cleanup on cancel. Critical for production reliability in messaging integrations.

5. **[#6612](https://github.com/agentscope-ai/QwenPaw/issues/6612)** — *QwenPaw 2.0.1 incompatible with agentscope 2.0.4.post1* — **2 comments**, OPEN
   - **Underlying need:** Version compatibility matrix and better deprecation signaling. Two distinct runtime failures (proactive crashes, tool-permission deadlock) indicate breaking API changes in agentscope that QwenPaw hasn't caught up with.

### Most Active PRs (by comment count):
- [#5930](https://github.com/agentscope-ai/QwenPaw/pull/5930) — Structured SSE run outcome (API automation)
- [#2199](https://github.com/agentscope-ai/QwenPaw/pull/2199) — Model fallback with cooldown (open since March 2026)
- [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) — Provider discovery unification (open since July 2026)

---

## 5. Bugs & Stability

### Ranked by Severity:

| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| 🔴 **Critical** | [#6612](https://github.com/agentscope-ai/QwenPaw/issues/6612) | QwenPaw 2.0.1 crashes with agentscope 2.0.4.post1 (proactive subsystem + tool-permission deadlock) | None yet |
| 🔴 **Critical** | [#6647](https://github.com/agentscope-ai/QwenPaw/issues/6647) | Desktop UI goes fully black on WebView2 crash — no recovery path | None yet |
| 🟠 **High** | [#6608](https://github.com/agentscope-ai/QwenPaw/issues/6608) | Long-running shell commands block Feishu session indefinitely (orphan subprocess, no per-channel timeout) | None yet |
| 🟠 **High** | [#6619](https://github.com/agentscope-ai/QwenPaw/issues/6619) | `ToolCallBlock` missing `extra_content` field crash in `openai_chat_model_compat._parse_stream_response` | None yet |
| 🟠 **High** | [#6614](https://github.com/agentscope-ai/QwenPaw/issues/6614) | WeChat cron scheduled push never delivered (ret=-2, context_token失效) — 44M tokens burned | None yet |
| 🟡 **Medium** | [#6537](https://github.com/agentscope-ai/QwenPaw/issues/6537) | Skill tags disappear on restart (regression) | CLOSED |
| 🟡 **Medium** | [#6588](https://github.com/agentscope-ai/QwenPaw/issues/6588) | Empty batch placeholders trigger batch mode in spawn_subagent | [#6658](https://github.com/agentscope-ai/QwenPaw/pull/6658) OPEN |
| 🟡 **Medium** | [#6625](https://github.com/agentscope-ai/QwenPaw/issues/6625) | ACP delegate_external_agent returns "completed without text output" when notifications race prompt | [#6623](https://github.com/agentscope-ai/QwenPaw/pull/6623) OPEN |
| 🟡 **Medium** | [#6624](https://github.com/agentscope-ai/QwenPaw/issues/6

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-04

---

## 1. Today's Overview

ZeroClaw is in a period of high throughput: 50 issues and 50 pull requests were updated in the last 24 hours, reflecting sustained contributor activity across the codebase. The project has 46 open/active issues and 48 open PRs, with 4 issues closed and 2 PRs merged/closed today. No new releases were published. The dominant themes today are **goal-mode implementation tracking**, **security hardening** (WhatsApp Cloud, webhook ownership, secret handling), **runtime/config fixes**, and **CI pipeline improvements**. Overall project health is strong, with a healthy ratio of closed-to-open work items and active maintainer and principal-contributor engagement.

---

## 2. Releases

**No new releases today.** The latest release information is not available; the project has not published a new version in the recent window.

---

## 3. Project Progress

**Merged / Closed PRs (visible in today's data):**

| PR | Status | Summary |
|---|---|---|
| [#9691](https://github.com/zeroclaw-labs/zeroclaw/pull/9691) | CLOSED | fix(container): align StageX pins and MSRV so all-features builds — ensures the `all-features` container build is consistent with the updated Rust toolchain and dependency pins. |
| [#9690](https://github.com/zeroclaw-labs/zeroclaw/pull/9690) | Merged (referenced by #9691 maintainer note) | Related container alignment fix (pre-merged, referenced in post-merge notes of #9691). |

**Key Closed Issues:**

| Issue | Summary |
|---|---|
| [#6002](https://github.com/zeroclaw-labs/zeroclaw/issues/6002) | Telegram channel message-not-addressed-to-assistant bug — closed (stale/resolved). |
| [#9093](https://github.com/zeroclaw-labs/zeroclaw/issues/9093) | Show ZeroCode version in TUI top bar — closed (feature delivered). |
| [#9417](https://github.com/zeroclaw-labs/zeroclaw/issues/9417) | WhatsApp Cloud approval token leak — closed (fix delivered via PR #9612). |

**Active PRs advancing features today:**

- **[#9709](https://github.com/zeroclaw-labs/zeroclaw/pull/9709)** — Edge TTS temp artifact cleanup on all error paths.
- **[#9707](https://github.com/zeroclaw-labs/zeroclaw/pull/9707)** — Migrate bare `vision_model_provider` to dotted alias ref.
- **[#9713](https://github.com/zeroclaw-labs/zeroclaw/pull/9713)** — Expose token accounting on history-trim events.
- **[#9705](https://github.com/zeroclaw-labs/zeroclaw/pull/9705)** — Allow `config set` on existing hyphenated cron aliases.
- **[#9704](https://github.com/zeroclaw-labs/zeroclaw/pull/9704)** — Fix `cron add` help examples so they run as printed.

---

## 4. Community Hot Topics

**Most Active Issues (by comment count):**

1. **[#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)** — *RFC: Goal mode v1 — bounded foreground Matrix work* (11 comments, 👍1) — The flagship RFC for a durable bounded-objective control plane. High interest from maintainers and contributors; the scope has been narrowed from the earlier broad proposal.
2. **[#8681](https://github.com/zeroclaw-labs/zeroclaw/issues/8681)** — *Tracker: Goal mode implementation split stack* (10 comments) — Coordinates splitting the accepted goal-mode work into reviewable PRs migrating from `feat/goal-mode` into `main`.
3. **[#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488)** — *RFC: Unified attachment architecture for web chat and channels* (8 comments) — A new RFC for a unified attachment handling layer across web chat and channel transports.
4. **[#6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157)** — *Bug: Nextcloud Talk use correct bot message API* (8 comments) — Long-standing bug (opened April 2026) still unresolved; blocked status.
5. **[#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424)** — *RFC: Workspace-relative forbidden path patterns* (7 comments) — Addresses the gap where workspace-internal sensitive files are not protected by the current `forbidden_paths` mechanism.
6. **[#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891)** — *Tracker: Persistent memory parity* (7 comments) — Coordinates bringing cross-session memory to parity with peer runtimes; 18 open items (3 issues, 15 PRs).
7. **[#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396)** — *RFC: Wire protocol first-class in provider construction* (6 comments) — Addresses provider onboarding and wire-protocol clarity.

**Most Active PRs:** Recent PRs from principal contributors and distinguished contributors (Project516, Audacity88, belumume, tidux, jmoneytech-stack) dominate the PR activity, with most showing minimal comment counts — indicating either quick review cycles or maintainer-driven merges.

**Underlying Needs:** The community is driving toward (a) a structured goal-mode capability for multi-turn agent work, (b) hardened security boundaries for channels and credentials, (c) better observability (token accounting, SOP status), and (d) improved configuration ergonomics.

---

## 5. Bugs & Stability

**Bugs ranked by severity:**

| Severity | Issue | Summary | Fix PR? |
|---|---|---|---|
| **P1 — Workflow blocked** | [#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527) | macOS desktop app reopens blank or without a window (Tauri) | None visible |
| **P1 — Workflow blocked** | [#9697](https://github.com/zeroclaw-labs/zeroclaw/issues/9697) | ZeroCode cannot connect to daemon launched by Windows Task Scheduler | None visible |
| **P1 — Workflow blocked** | [#9672](https://github.com/zeroclaw-labs/zeroclaw/issues/9672) | All three `cron add` examples in CLI help fail as printed | Fix PR: [#9704](https://github.com/zeroclaw-labs/zeroclaw/pull/9704) |
| **P1 — Degraded** | [#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) | WhatsApp Web `allowed_groups` empty list admits all groups (security) | Fix PR: [#9609](https://github.com/zeroclaw-labs/zeroclaw/pull/9609), [#9612](https://github.com/zeroclaw-labs/zeroclaw/pull/9612) |
| **P1 — Degraded** | [#9417](https://github.com/zeroclaw-labs/zeroclaw/issues/9417) | WhatsApp Cloud `request_approval` leaks live approval token | Fix PR: [#9612](https://github.com/zeroclaw-labs/zeroclaw/pull/9612) |
| **P2 — Minor** | [#6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) | Nextcloud Talk wrong bot message API | None visible; blocked |
| **P2 — Minor** | [#6002](https://github.com/zeroclaw-labs/zeroclaw/issues/6002) | Telegram message not clearly addressed to assistant | Closed |

**Stability notes:** The WhatsApp Cloud token-leak bug (#9417) was a regression introduced when the approval path was added; it has been addressed by PR #9612. The macOS Tauri blank-window issue (#7527) and Windows Task Scheduler daemon-connectivity issue (#9697) remain open and are P1 workflow blockers for desktop users.

---

## 6. Feature Requests & Roadmap Signals

**High-likelihood next-version candidates:**

1. **Goal Mode v1** ([#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303), RFC) — Bounded foreground Matrix work with a durable control plane. The implementation split tracker ([#8681](https://github.com/zeroclaw-labs/zeroclaw/issues/8681)) is actively coordinating PRs. **Very likely in v0.9.0.**
2. **Unified Attachment Architecture** ([#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488), RFC) — A single attachment handling layer for web chat and all channels. High priority (P2, risk:high).
3. **Workspace-relative forbidden path patterns + `.zeroclawignore`** ([#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424), RFC) — Protects internal workspace files from agent access. RFC stage, needs author action.
4. **Anthropic OAuth alias contract** ([#9464](https://github.com/zeroclaw-labs/zeroclaw/issues/9464), RFC) — Formalizes the `auth_mode = "oauth"` path for Anthropic providers. PR #9420 already implemented; this is the decision surface.
5. **Persistent Memory Parity** ([#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891), Tracker) — 18 items (3 issues, 15 PRs) tracking cross-session memory maturity.
6. **SOP Milestone: Daemon-owned control plane to 5/5** ([#8288](https://github.com/zeroclaw-labs/zeroclaw/issues/8288), Tracker) — SOP capability completion; MVP status visibility PR [#9682](https://github.com/zeroclaw-labs/zeroclaw/issues/9682) just opened.
7. **Rust→Wasm Web UI** ([#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132), RFC) — Replace React/Vite with Dioxus/Leptos/Yew. Long-term vision; P3.

**Other tracked work:**
- v0.9.0 auth/security/gateway breaking-change queue ([#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432))
- Session-persistence contract ownership ([#9600](https://github.com/zeroclaw-labs/zeroclaw/issues/9600))
- Artifact lifecycle audit ([#8431](https://github.com/zeroclaw-labs/zeroclaw/issues/8431))

---

## 7. User Feedback Summary

**Pain points:**

- **Desktop stability:** macOS users report the app can reopen blank or lose its window entirely (#7527, P1). Windows users report ZeroCode fails to connect to daemons launched by Task Scheduler (#9697, P1). These are platform-specific reliability gaps.
- **Security anxiety around credentials:** The XOR cipher issue (#1, CRITICAL, opened Feb 2026, still open after 6 months) and the WhatsApp approval-token leak (#9417) highlight user concern about secret handling. The `forbidden_paths` gap (#8424) shows users want finer-grained control over what the agent can access in their workspace.
- **Channel configuration pitfalls:** WhatsApp Web `allowed_groups` defaulting to permit-all (#9397), webhook secrets being exposed or misconfigured (#9605), and Linq webhook alias ownership (#9604) all reflect friction in channel setup.
- **CLI ergonomics:** The `cron add` help examples that don't work as printed (#9672) and `config set` rejecting hyphenated aliases (#9652) are usability irritants.
- **Provider configuration complexity:** Migrating bare `vision_model_provider` to dotted aliases (#9707), preserving Ollama dev template contracts (#9603), and honoring runtime proxies for OpenAI Responses (#9606) indicate that provider configuration is a dense area needing better ergonomics.

**Positive signals:**
- Active contributions from principal contributors and distinguished contributors across multiple PRs daily.
- RFC process is being followed rigorously, with AI-assisted drafting and sponsor accountability.
- CI improvements (rustdoc gating, Semgrep diff-aware comments, Containerfile validation) show investment in quality infrastructure.

---

##

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*