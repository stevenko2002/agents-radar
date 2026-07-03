# OpenClaw Ecosystem Digest 2026-07-03

> Issues: 180 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-03 08:05 UTC

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

# OpenClaw Project Digest — 2026-07-03

## 1. Today's Overview
OpenClaw experienced exceptionally high activity today, with 180 issues updated (113 active, 67 closed) and 500 PRs updated (405 open, 95 merged/closed). The project is currently in a heavy stabilization and triage phase, largely focused on addressing regressions introduced in the v2026.6.11 release and resolving edge cases in multi-agent tool execution. No new releases were published today, indicating that maintainers are prioritizing the accumulation of critical fixes and architectural refactors (such as the SQLite storage flip) before the next version drop. Overall project health remains highly active, though the high volume of regression reports suggests a need for stricter pre-release testing.

## 2. Releases
**None.** No new versions were released today. The current focus is on patching v2026.6.11 regressions and preparing major architectural changes.

## 3. Project Progress
Today saw the resolution of 95 PRs and 67 issues, with significant progress made in stabilizing tool execution and mobile node integrations:
*   **Tool Execution & Rendering Fixes:** Resolved critical bugs where large tool outputs poisoned subsequent results ([#99168](https://github.com/openclaw/openclaw/issues/99168)), tool outputs returned empty after the first call ([#98528](https://github.com/openclaw/openclaw/issues/98528)), and text tool results were incorrectly rendered as image attachments ([#98874](https://github.com/openclaw/openclaw/issues/98874)).
*   **Session & State Stability:** Closed a major regression causing sessions to break constantly without reason ([#98672](https://github.com/openclaw/openclaw/issues/98672)).
*   **Mobile & Node Handshakes:** Fixed an issue where the Android node sent events before the WebSocket handshake completed, causing notification loss ([#79552](https://github.com/openclaw/openclaw/issues/79552)), and resolved iOS Photos permission recognition for "Limited Access" ([#99046](https://github.com/openclaw/openclaw/issues/9904

---

## Cross-Ecosystem Comparison

# AI Agent & Personal Assistant Open-Source Ecosystem Report
**Date:** 2026-07-03 | **Prepared by:** Senior Ecosystem Analyst

---

## 1. Ecosystem Overview
The open-source personal AI assistant and agent landscape is rapidly transitioning from single-turn chat interfaces to persistent, multi-agent orchestration platforms. Current development is heavily driven by the need for robust channel integrations (navigating shifting protocols like WhatsApp's LID), enterprise-grade security (OIDC, sandboxing), and context/memory stability for long-running autonomous tasks. While core engines are experiencing rapid feature expansion, the ecosystem is simultaneously grappling with significant technical debt and regression management as architectures scale to support complex, multi-modal workflows.

## 2. Activity Comparison

| Project | Issues (Updated) | PRs (Updated) | Release Status (24h) | Health / Momentum Score |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 180 | 500 | None (Stabilizing) | 🟢 **Very High** |
| **ZeroClaw** | 26 | 50 | None (v0.8.3 tracking) | 🟢 **Very High** |
| **Hermes Agent** | 50 | 50 | None | 🟢 **High** |
| **IronClaw** | 27 | 50 | Queued (0.29.1) | 🟢 **High** |
| **CoPaw** | 37 | 37 | v2.0.0-beta.2 | 🟠 **High (Volatile)** |
| **PicoClaw** | Active | 31 | v0.3.1 | 🟢 **High** |
| **NanoClaw** | 4 | 14 | None | 🟡 **Medium** |
| **LobsterAI** | 1 | 9 | None | 🟡 **Medium (Stable)** |
| **Moltis** | 0 | ~3 | None | 🔵 **Steady / Niche** |
| *Others* | *N/A* | *N/A* | *N/A* | ⚪ *Inactive / No Data* |

*(Note: NanoBot summary failed; NullClaw, TinyClaw, and ZeptoClaw reported zero activity).*

## 3. OpenClaw's Position
*   **Market Leadership in Volume:** OpenClaw is the undisputed heavyweight in terms of raw community velocity, processing 500 PRs and 180 issues in a single day—outpacing its nearest peers (ZeroClaw, IronClaw, Hermes) by a factor of 3x to 10x.
*   **Technical Approach:** Unlike peers focusing heavily on UI or single-channel bots, OpenClaw acts as a foundational infrastructure layer. Its current focus is on deep systemic stability: multi-agent tool execution, mobile node handshakes (Android/iOS), and state management. 
*   **Current Posture:** OpenClaw is currently in a **heavy stabilization and triage phase**, prioritizing the resolution of v2026.6.11 regressions over new feature drops. This indicates a maturing codebase where architectural refactors (e.g., SQLite storage flip) require rigorous pre-release testing.
*   **Community Size:** The sheer volume of external contributions and edge-case reporting confirms OpenClaw has the largest and most diverse deployment base, acting as the "core reference" for the broader ecosystem.

## 4. Shared Technical Focus Areas
Several critical requirements are emerging simultaneously across multiple projects, highlighting industry-wide bottlenecks:
*   **Messaging Channel Fragility & Protocol Shifts:** 
    *   *Projects:* PicoClaw, NanoClaw, Moltis, ZeroClaw.
    *   *Needs:* Adapting to WhatsApp's new LID (Linked Identity) addressing, passkey/SHORTCAKE gates, and fixing silent disconnects/collision bugs in Baileys/Cloud adapters.
*   **Memory, Context & OOM Stability:**
    *   *Projects:* ZeroClaw (WSL2 OOM/MCP schema cloning), CoPaw (scroll compression amnesia), OpenClaw (session state breaks), LobsterAI (DeepSeek cache stability).
    *   *Needs:* Preventing unbounded RSS growth, fixing context eviction in long sessions, and stabilizing prompt caching for specific providers.
*   **Security & Multi-Tenant Isolation:**
    *   *Projects:* ZeroClaw (OIDC, zip-bomb protection), PicoClaw (exec deny-pattern bypass), CoPaw (secret masking), IronClaw (skill trust ceilings).
    *   *Needs:* Moving beyond basic API key storage to enterprise auth (OIDC), strict sandboxing, and preventing cross-user memory/data leaks.
*   **Local Model Optimization:**
    *   *Projects:* NanoClaw, Hermes Agent.
    *   *Needs:* Mitigating the massive token overhead (~27k tokens) of MCP schemas on local models (e.g., Ollama, oMLX) via schema pruning or native endpoint routing.

## 5. Differentiation Analysis
*   **OpenClaw:** The "Linux Kernel" of the space. Focuses on cross-platform node synchronization (mobile/desktop), deep tool-execution reliability, and foundational state management.
*   **ZeroClaw:** The "Security & Extensibility" pioneer. Pushing WASM plugins, Tauri desktop revival, and strict enterprise boundaries (OIDC). Highly Rust-centric and systems-level focused.
*   **Hermes Agent:** The "Power-User CLI/GUI" hybrid. Differentiates via Mixture of Agents (MoA) fanout cadences, deep MCP management, and custom provider routing.
*   **CoPaw (QwenPaw):** The "Enterprise/Ecosystem" play. Tightly integrated with the Qwen ecosystem, focusing on multi-agent management UIs, skill markets, and structured v2.0 migrations.
*   **PicoClaw:** The "Collaborative Multi-Agent" router. Pioneering the Agent Collaboration Bus (per-agent mailboxes, isolated session histories) and broad channel gateways (DeltaChat, Matrix).
*   **IronClaw:** The "Skill-Learning" specialist. Focusing on Reborn backend architecture, automated skill learning, and deep Slack/enterprise workflow integrations.

## 6. Community Momentum & Maturity
*   **Rapidly Iterating / Feature Expansion:** **ZeroClaw** and **CoPaw** are pushing massive architectural shifts (WASM, v2.0 betas, OpenAI-compat APIs). **PicoClaw** is aggressively expanding channel coverage and multi-agent topologies.
*   **Stabilizing / Maturing:** **OpenClaw** and **IronClaw** are in heavy "bug bash" and regression-triage modes. They are prioritizing QA, integration tests, and fixing critical state/capability bugs before their next major version drops.
*   **Steady Maintenance / Niche:** **Moltis**, **LobsterAI**, and **NanoClaw** are maintaining steady, focused development on specific pain points (WhatsApp LID, UI polish, local model token costs) without the chaotic velocity of the top-tier projects.
*   **Dormant:** NullClaw, TinyClaw, and ZeptoClaw show zero activity, suggesting consolidation of developer talent into the larger, more active repositories.

## 7. Trend Signals
*   **The "Local-First" Token Tax is a Dealbreaker:** As developers self-host models (Gemma, Ollama), the bloated MCP tool schemas (costing ~27k tokens per request) are becoming unacceptable. *Actionable insight:* Agent frameworks must implement dynamic schema pruning or lazy-loading for local backends to remain viable.
*   **Channel APIs are Hostile Environments:** WhatsApp's continuous shifts (LID, passkeys) are breaking agents silently. *

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

### 1. Today's Overview
Hermes Agent experienced significant activity on 2026-07-03, with 50 issues and 50 pull requests updated. The project is seeing heavy development in session management, custom provider routing, and desktop/gateway parity. While several critical session-state and compression bugs were closed, new edge cases in fallback chains and async delegation continue to surface. Overall, the project health is robust, characterized by strong community engagement, rapid triage of high-priority stability issues, and continuous expansion of the plugin and MCP ecosystems.

### 2. Releases
No new releases were published today.

### 3. Project Progress
Several key PRs were merged or closed today, advancing desktop features and fixing critical gateway/agent bugs:
- **Desktop & MCP Parity**: PR [#57441](https://github.com/NousResearch/hermes-agent/pull/57441) brought the desktop GUI to parity with the CLI, introducing a unified Capabilities page and first-class MCP management.
- **Mixture of Agents (MoA)**: PR [#57591](https://github.com/NousResearch/hermes-agent/pull/57591) introduced per-preset fanout cadence, allowing `user_turn` to run advisors once per user turn for better synthesis.
- **Gateway Fixes**: PR [#57577](https://github.com/NousResearch/hermes-agent/pull/57577) fixed an issue where voice replies to pending clarify prompts were silently ignored. PR [#57585](https://github.com/NousResearch/hermes-agent/pull/57585) healed stripped `/v1` base URLs for OpenCode Go, resolving 404 errors for non-MiniMax models.
- **Plugin Extensibility**: PR [#57587](https://github.com/NousResearch/hermes-agent/pull/57587) added Telegram plugin callback handlers, improving interactive keyboard support.
- **Closed Issues**: Critical session-state bugs, including fallback chain exhaustion ([#57582](https://github.com/NousResearch/hermes-agent/issues/57582)) and rotation compression persistence skips ([#57491](https://github.com/NousResearch/hermes-agent/issues/57491)), were successfully resolved.

### 4. Community Hot Topics
- **Ollama Native Integration** ([Issue #4505](https://github.com/NousResearch/hermes-agent/issues/4505) | 13 comments, 2 👍): Users are highly engaged in optimizing Ollama by switching to the native `/api/chat` endpoint for true delta streaming and correct tool calling. (Implementation proposed in PR [#55606](https://github.com/NousResearch/hermes-agent/pull/55606)).
-

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-03

## 1. Today's Overview

PicoClaw saw a notably active day with **31 PRs updated** (15 merged/closed, 16 open) and a new **v0.3.1 release** shipping the NearAI provider integration alongside a store-lock type assertion fix. Development momentum is strong across multiple fronts: channel stability (WhatsApp, Matrix, Discord), security hardening, and a proposed first-class **Agent Collaboration Bus**. One open issue (#3206) flags a **blocking v2→v3 config migration failure**, though a fix PR (#3218) is already in flight. Overall project health appears solid — dependency hygiene is being kept current (multiple Dependabot bumps merged), and the maintainer team is responsive to both stability regressions and feature work.

## 2. Releases

### v0.3.1
Key changes included in this release:
- **NearAI provider integration** — PR [#2917](https://github.com/sipeed/picoclaw/pull/2917) by @PierreLeGuen adds a new LLM provider backend.
- **Store-lock type assertion fix** — PR [#3053](https://github.com/sipeed/picoclaw/pull/3053) by @chengzhichao-xydt hardens type safety around the store lock.
- A third merge (PR #30, truncated in changelog) is referenced but details are unavailable.

No explicit breaking changes or migration notes are documented in the release body. Users upgrading from v0.2.x should still be aware of the v2→v3 config migration path (see §5).

## 3. Project Progress

**Merged / Closed PRs today (highlights):**

| PR | Type | Summary |
|---|---|---|
| [#3156](https://github.com/sipeed/picoclaw/pull/3156) | Feature | Emit per-turn LLM token usage on finalized Pico-channel messages (input/output split for billing) |
| [#3063](https://github.com/sipeed/picoclaw/pull/3063) | Feature | New **DeltaChat gateway** integration |
| [#3160](https://github.com/sipeed/picoclaw/pull/3160) | Security | Reject cross-site launcher setup requests via `Sec-Fetch-Site`/`Origin`/`Referer` checks |
| [#3161](https://github.com/sipeed/picoclaw/pull/3161) | Security | Keep `exec` deny patterns active even when a command matches a custom allow rule (prevents env-var exfiltration via `jq`) |
| [#3212](https://github.com/sipeed/picoclaw/pull/3212), [#3214](https://github.com/sipeed/picoclaw/pull/3214), [#3215](https://github.com/sipeed/picoclaw/pull/3215), [#3216](https://github.com/sipeed/picoclaw/pull/3216) | Deps | Frontend bumps: react-i18next, shadcn, typescript-eslint, @vitejs/plugin-react |
| [#3209](https://github.com/sipeed/picoclaw/pull/3209), [#3210](https://github.com/sipeed/picoclaw/pull/3210) | Deps | anthropic-sdk-go → 1.55.1, golang.org/x/crypto → 0.53.0 |

Notable: two **security fixes** landed today — the exec deny-pattern bypass and the cross-site setup rejection are both meaningful hardening changes for self-hosted deployments.

## 4. Community Hot Topics

Comment counts are unavailable (reported as `undefined`), so ranking is based on architectural significance and user impact:

- **[#2937 — Agent Collaboration Bus](https://github.com/sipeed/picoclaw/pull/2937)** (OPEN, stale). Proposes per-agent mailboxes, collaboration threads with isolated session history, structured message envelopes, and permission-aware delivery. This is the largest in-flight feature and signals the project's direction toward **multi-agent orchestration**.
- **[#3206 — v2→v3 config migration failure](https://github.com/sipeed/picoclaw/issues/3206)** (OPEN). Blocking upgrade path for users on v0.2.x. Even fresh installs of v0.2.9 are reportedly affected.
- **[#3217 — Discord role-based access control](https://github.com/sipeed/picoclaw/pull/3217)** (OPEN). Adds `allow_roles` to `DiscordSettings` — a frequently requested capability for multi-tenant Discord deployments.
- **[#3165 — Recover Volcengine Doubao Seed XML tool calls](https://github.com/sipeed/picoclaw/pull/3165)** (OPEN, stale). Niche but important for users of the Volcengine/Doubao provider ecosystem.

**Underlying need:** The community is pushing PicoClaw beyond a single-agent assistant toward a **collaborative multi-agent platform** with stronger access control and broader provider/channel coverage.

## 5. Bugs & Stability

Ranked by severity:

| Severity | Item | Status |
|---|---|---|
| 🔴 **Critical** | [#3206](https://github.com/sipeed/picoclaw/issues/3206) — v2→v3 config migration fails with false `unknown field(s): build_info, session.dm_scope`. Blocks `picoclaw status` and any config-loading command. | **Fix PR exists:** [#3218](https://github.com/sipeed/picoclaw/pull/3218) adds `BuildInfo` to `legacyDiagnosticConfig`. Root cause: strict v2-schema validation missing the `build_info` field written by v0.2.5+ builds. |
| 🟠 **High** | WhatsApp websocket silently disconnects after 2–3 days and never recovers. | Fix proposed: [#3220](https://github.com/sipeed/picoclaw/pull/3220) — reconnect with exponential backoff. |
| 🟠 **High** | Matrix sync loop dies permanently on network disruption / homeserver restart; systemd `Restart=on-failure` never triggers because the main process stays alive. | Fix proposed: [#3219](https://github.com/sipeed/picoclaw/pull/3219) — wrap `SyncWithContext` in a retry loop. |
| 🟡 **Medium** | [#3221](https://github.com/sipeed/picoclaw/pull/3221) — Revert of sandbox fs Windows path handling test (#3158) due to a logging import error in `pkg/providers/openai_compat/provider.go`. Indicates a recent regression in Windows test coverage. |

## 6. Feature Requests & Roadmap Signals

Based on open PRs and recent merges, the following are likely candidates for upcoming releases:

- **Multi-agent collaboration** (#2937) — highest architectural impact; likely a headline feature for v0.4.x if merged.
- **Discord role-based access** (#3217) — small, well-scoped, with 7 unit tests; likely to land soon.
- **DeltaChat gateway** (#3063) — already closed/merged; documentation updates may still be pending.
- **Per-turn token usage telemetry** (#3156) — already merged; enables downstream cost tracking.
- **Volcengine/Doubao Seed tool-call recovery** (#3165) — provider-specific but valuable for the Chinese LLM ecosystem.

**Prediction:** v0.4.0 will likely center on the Agent Collaboration Bus, with channel stability (WhatsApp/Matrix reconnect) and Discord RBAC landing in patch releases beforehand.

## 7. User Feedback Summary

Direct user feedback today is limited to a single issue, but it is high-signal:

- **Pain point:** The v2→v3 config migration is broken for a meaningful subset of users, including those on fresh installs of v0.2.9. The error message (`unknown field(s): build_info, session.dm_scope`) is confusing because it blames user config for fields the tool itself wrote. This erodes trust in the upgrade path.
- **Implicit use cases:** The WhatsApp and Matrix reconnect PRs (#3220, #3219) describe **multi-day unattended operation** — users are running PicoClaw as a persistent daemon on homeservers and VPS instances, where silent connection death is unacceptable.
- **Satisfaction signal:** The volume and quality of external PRs (security fixes, provider additions, channel reconnects) from contributors like @AMEOBIUS, @loafoe, @afjcjsbx, and @danmobot suggests an **engaged and growing contributor base**, not just passive users.

## 8. Backlog Watch

Items requiring maintainer attention:

| Item | Age | Concern |
|---|---|---|
| [#2937 — Agent Collaboration Bus](https://github.com/sipeed/picoclaw/pull/2937) | ~40 days (since 2026-05-24) | Marked stale. Major architectural PR — needs review or explicit scoping decision. |
| [#3165 — Seed XML tool-call recovery](https://github.com/sipeed/picoclaw/pull/3165) | ~9 days (since 2026-06-24) | Marked stale. Provider-specific fix awaiting review. |
| [#3206 — Config migration failure](https://github.com/sipeed/picoclaw/issues/3206) | 1 day | Blocking bug. Fix PR #3218 exists but is not yet merged — should be fast-tracked. |
| [#3220](https://github.com/sipeed/picoclaw/pull/3220), [#3219](https://github.com/sipeed/picoclaw/pull/3219) | <1 day | Fresh stability fixes for long-standing silent-disconnect bugs in WhatsApp and Matrix. Worth prioritizing given the daemon-use pattern. |

**Recommendation:** Merge

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-03

---

## 1. Today's Overview

NanoClaw saw solid development activity today with **14 PRs updated** (12 open, 2 merged) and **4 new issues** filed, all currently open. No new releases were published. The project is in an active feature-expansion and stabilization phase, with significant work on channel integrations (WhatsApp fixes, new LINE adapter), agent templating, and local-model optimization. Community engagement remains healthy with multiple contributors driving fixes and features in parallel. The most urgent item is a high-priority WhatsApp adapter collision bug that can silently break messaging routing.

---

## 2. Releases

**No new releases today.**

---

## 3. Project Progress

Two PRs were merged/closed in the last 24 hours, advancing core infrastructure:

| PR | Title | Author | Impact |
|---|---|---|---|
| [#2890](https://github.com/nanocoai/nanoclaw/pull/2890) | `feat(templates): local template loader, ncl --template, and docs` | amit-shafnir | Enables creating agent groups from predefined templates via CLI — foundational for the templating system |
| [#2771](https://github.com/nanocoai/nanoclaw/pull/2771) | `perf(container): configurable --shm-size (default 1g) + --init for agent containers` | ankushchadha | Fixes Chromium OOM crashes on large pages by increasing shared memory; adds proper init process |

These merges unblock the stacked PR [#2909](https://github.com/nanocoai/nanoclaw/pull/2909) (template setup wizard flow) and improve container stability for browser-heavy agents.

---

## 4. Community Hot Topics

| Item | Type | Author | Why It Matters |
|---|---|---|---|
| [#2917](https://github.com/nanocoai/nanoclaw/issues/2917) | Issue | cappuccinowholemilk-stack | Local model users (oMLX/Gemma4:31B) are paying ~27k tokens of MCP schema overhead on every request — a significant cost and latency issue for self-hosted deployments |
| [#2911](https://github.com/nanocoai/nanoclaw/issues/2911) | Issue (High) | glifocat | WhatsApp Cloud and native Baileys adapters collide on the same registry key, silently disabling one channel — affects any operator running both |
| [#2918](https://github.com/nanocoai/nanoclaw/pull/2918) | PR (Feature) | joshm1230212 | Adds LINE Official Account as a native channel — expands NanoClaw's reach into Asian messaging markets |
| [#2725](https://github.com/nanocoai/nanoclaw/pull/2725) | PR (Feature) | robbyczgw-cla | `web-search-plus` skill: multi-provider search + extraction without MCP dependency — addresses demand for lightweight, self-contained search |

**Underlying need:** The community is pushing hard on two fronts — (1) making local/self-hosted models viable first-class citizens (token cost, provider defaults), and (2) expanding channel coverage beyond WhatsApp/Signal into LINE and richer web tooling.

---

## 5. Bugs & Stability

Ranked by severity:

| Severity | Issue/PR | Description | Fix PR? |
|---|---|---|---|
| 🔴 **High** | [#2911](https://github.com/nanocoai/nanoclaw/issues/2911) | WhatsApp Cloud adapter collides with native Baileys in registry — same `whatsapp` key causes silent misrouting | ✅ [#2913](https://github.com/nanocoai/nanoclaw/pull/2913) (open) |
| 🟠 **Medium** | [#2912](https://github.com/nanocoai/nanoclaw/issues/2912) | WhatsApp user IDs diverge between Baileys (JID) and Cloud (bare wa_id) — roles/membership don't carry across paths | ⏳ Pending |
| 🟡 **Medium** | [#2917](https://github.com/nanocoai/nanoclaw/issues/2917) | Local model agents pay full MCP tool-schema token cost (~27k tokens) regardless of backend — no schema pruning for local models | ⏳ Pending |
| 🟡 **Medium** | [#2915](https://github.com/nanocoai/nanoclaw/pull/2915) | Recurring scheduled tasks fork into duplicates when completed rows coexist (e.g., after container timeout retries) | ✅ Self-fixing PR (open) |
| 🟢 **Low** | [#2689](https://github.com/nanocoai/nanoclaw/pull/2689) | Signal DMs silently dropped — `isMention` not set, platform ID missing `signal:` prefix | ✅ Self-fixing PR (open since Jun 4) |

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood for Next Release |
|---|---|---|
| **Agent Templates (CLI + Wizard)** | [#2890](https://github.com/nanocoai/nanoclaw/pull/2890) merged, [#2909](https://github.com/nanocoai/nanoclaw/pull/2909) open | 🔵 **Very likely** — part 1 is merged, wizard flow is stacked and ready |
| **LINE Official Account channel** | [#2918](https://github.com/nanocoai/nanoclaw/pull/2918) | 🔵 **Likely** — follows contribution guidelines, native adapter pattern |
| **Instance-wide default agent provider** | [#2906](https://github.com/nanocoai/nanoclaw/pull/2906) | 🔵 **Likely** — simple `.env` config, reduces per-group boilerplate |
| **`web-search-plus` skill (no MCP)** | [#2725](https://github.com/nanocoai/nanoclaw/pull/2725) | 🟡 **Possible** — self-contained utility skill, but has been open since Jun 10 |
| **MCP schema pruning for local models** | [#2917](https://github.com/nanocoai/nanoclaw/issues/2917) | 🟡 **Possible** — high user impact, but requires architectural decision on schema filtering |

---

## 7. User Feedback Summary

**Pain Points:**
- **Local model token waste:** Users running local models via oMLX are frustrated that the full MCP tool schema (~27k tokens) is sent on every request, negating the cost advantages of self-hosting. ([#2917](https://github.com/nanocoai/nanoclaw/issues/2917))
- **WhatsApp dual-path confusion:** Operators running both Baileys and Cloud paths discover that user identities don't sync, breaking permission models. The adapter collision makes this worse by silently disabling one path. ([#2911](https://github.com/nanocoai/nanoclaw/issues/2911), [#2912](https://github.com/nanocoai/nanoclaw/issues/2912))
- **Chromium crashes in containers:** The `--shm-size` fix ([#2771](https://github.com/nanocoai/nanoclaw/pull/2771)) confirms that headless Chromium was running out of shared memory on large pages — a stability issue for browser-using agents.

**Positive Signals:**
- Active contributions across channels (WhatsApp, Signal, LINE) suggest the multi-channel architecture is attracting real-world deployments.
- The templating system ([#2890](https://github.com/nanocoai/nanoclaw/pull/2890), [#2909](https://github.com/nanocoai/nanoclaw/pull/2909)) indicates users want faster agent onboarding and reproducibility.
- Demand for non-MCP tooling (`web-search-plus`) suggests some users want lighter-weight, dependency-free skills.

---

## 8. Backlog Watch

These items have been open for extended periods and may need maintainer triage:

| Item | Opened | Days Open | Status | Concern |
|---|---|---|---|---|
| [#2689](https://github.com/nanocoai/nanoclaw/pull/2689) — Signal DM fix | Jun 4 | ~29 days | Open | Critical messaging bug (DMs silently dropped); fix exists but unreviewed |
| [#2725](https://github.com/nanocoai/nanoclaw/pull/2725) — `web-search-plus` skill | Jun 10 | ~23 days | Open | Popular feature request; self-contained skill, should be low-risk to merge |
| [#2822](https://github.com/nanocoai/nanoclaw/pull/2822), [#2823](https://github.com/nanocoai/nanoclaw/pull/2823), [#2824](https://github.com/nanocoai/nanoclaw/pull/2824) — Global memory/workspace cleanup | Jun 20 | ~13 days | Open | Related cleanup PRs from CutSnake01; may be stale after recent refactors |
| [#2917](https://github.com/nanocoai/nanoclaw/issues/2917) — MCP schema token cost for local models | Jul 3 | New | Open | High-impact for local-model users; needs architectural discussion |

**Recommendation:** The Signal DM fix (#2689) is the most urgent backlog item — it's a data-loss bug (messages silently dropped) with a fix already submitted nearly a month ago. Maintainers should prioritize review.

---

*Digest generated 2026-07-03. Data source: github.com/nanocoai/nanoclaw*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-03

## 1. Today's Overview

IronClaw saw **high development velocity** today with 27 issues updated (22 open, 5 closed) and 50 PRs touched (33 open, 17 merged/closed). Activity is heavily concentrated on **Reborn backend stability**, **Slack OAuth integration**, and **WebUI bug fixes** from a recent QA bug bash. The project is in a stabilization phase ahead of an anticipated release (PR #5311 is queued with version bumps to `ironclaw` 0.29.1). No new releases were published today, but the pipeline is active with significant architectural refactoring and integration test coverage waves landing.

---

## 2. Releases

**No new releases today.**

However, a release PR is queued and actively being updated:
- **[PR #5311](https://github.com/nearai/ironclaw/pull/5311)** — `chore: release` (open since 2026-06-26)
  - `ironclaw_common`: 0.4.2 → 0.5.0 ⚠️ **API breaking**
  - `ironclaw_skills`: 0.3.0 → 0.4.0 ⚠️ **API breaking**
  - `ironclaw_safety`: 0.2.2 → 0.2.3 (compatible)
  - `ironclaw`: 0.24.0 → 0.29.1
  - `ironclaw_skill_learning`: 0.1.0 → 0.1.1 (compatible)
  
  **Migration note:** Consumers of `ironclaw_common` and `ironclaw_skills` should expect breaking API changes in the next release.

---

## 3. Project Progress

**17 PRs merged/closed in the last 24 hours**, advancing several key areas:

| Area | PR | Summary |
|------|-----|---------|
| **Slack OAuth** | [#5502](https://github.com/nearai/ironclaw/pull/5502) (closed), [#5501](https://github.com/nearai/ironclaw/pull/5501) (closed) | Slack personal (user-token) OAuth browser flow merged; leak-sanitization bypass for OAuth token exchange fixed |
| **LLM Provider Fixes** | [#5573](https://github.com/nearai/ironclaw/pull/5573) (closed) | Exa MCP SSE initialize parsing fixed — resolves cascading `web-access.search` failures |
| **Performance** | [#5574](https://github.com/nearai/ironclaw/pull/5574) (closed) | Step-efficient tool guidance (script-first + smaller output cap) to reduce 50–99 tool-call loops on data analysis tasks |
| **Test Coverage** | [#5548](https://github.com/nearai/ironclaw/pull/5548) (closed) | C-TRACECAP + C-ATTACH turn-event sink and attachment read-port coverage |
| **Architecture** | [#5479](https://github.com/nearai/ironclaw/pull/5479) (closed) | Reborn one-runtime group harness multi-user isolation fix |

**Active large-scale efforts** still in progress:
- [#5585](https://github.com/nearai/ironclaw/pull/5585) — Reborn composition internals refactoring (observability, hooks, lifecycle module boundaries)
- [#5584](https://github.com/nearai/ironclaw/pull/5584) — Wave-3 integration coverage (journeys, multi-user isolation, budget/hooks seams)
- [#5280](https://github.com/nearai/ironclaw/pull/5280) — Trace Commons instance-wide enrollment + per-user profiles (DB migration)

---

## 4. Community Hot Topics

| Item | Type | Activity | Underlying Need |
|------|------|----------|-----------------|
| [#5522](https://github.com/nearai/ironclaw/issues/5522) | Issue | 3 comments | Reborn routine fails when reading Slack DMs — missing capability + retry loop. Users need reliable Slack integration for DM-triggered automations. |
| [#5537](https://github.com/nearai/ironclaw/issues/5537) | Issue | Daily failure taxonomy | Systematic tracking of PinchBench failures — indicates active performance regression monitoring. |
| [#5521](https://github.com/nearai/ironclaw/pull/5521) | PR | Active | Approval notification persistence — direct response to user complaints about disappearing notifications. |
| [#5565](https://github.com/nearai/ironclaw/pull/5565) | PR | XL scope | Onboarding/NUX demo with intent handoff — signals investment in new user activation. |
| [#5311](https://github.com/nearai/ironclaw/pull/5311) | PR | Release queued | Breaking API changes in core crates — community will need migration guidance. |

---

## 5. Bugs & Stability

### 🔴 Critical / High Severity

| Issue | Title | Impact | Fix PR? |
|-------|-------|--------|---------|
| [#5583](https://github.com/nearai/ironclaw/issues/5583) | Hallucinated call to disabled capability fails run as `model_error` | Run terminates with `Failed` instead of model-visible denial — blocks recovery | None yet |
| [#5504](https://github.com/nearai/ironclaw/issues/5504) | Routine creation hangs indefinitely | No feedback, no error — user stuck | None yet |
| [#5507](https://github.com/nearai/ironclaw/issues/5507) | Failed routine shows "No thread attached" | Blocks debugging — cannot inspect execution thread | None yet |
| [#5552](https://github.com/nearai/ironclaw/issues/5552) | Generic "invalid result" after multiple tool failures | No indication of which tool failed or why | None yet |
| [#5582](https://github.com/nearai/ironclaw/issues/5582) | `force_compact_on_next_iteration` is dead letter | Compaction never triggers on overflow — potential memory/context issues | None yet |
| [#5581](https://github.com/nearai/ironclaw/issues/5581) | Skill trust ceiling never ported to Reborn | Installed skills get full tool access instead of read-only — **security concern** | None yet |

### 🟡 Medium Severity

| Issue | Title | Impact |
|-------|-------|--------|
| [#5522](https://github.com/nearai/ironclaw/issues/5522) | Slack DM reading fails + retry loop | Routine fails on Slack DM tasks |
| [#5460](https://github.com/nearai/ironclaw/issues/5460) | Workspace memories visible to all users | **Privacy/isolation bug** — cross-user memory leak |
| [#5508](https://github.com/nearai/ironclaw/issues/5508) | Slack delivery target not found despite active connection | Cannot create Slack-delivered routines |
| [#5572](https://github.com/nearai/ironclaw/issues/5572) | `HookedLoopCheckpointPort` missing forwarding | Hooks-enabled coordinator turns fail at checkpoint stage |
| [#5510](https://github.com/nearai/ironclaw/issues/5510) | Cannot delete old routines | Stale routines persist and run on old configs |

### 🟢 UI/UX Bugs (WebUI)

| Issue | Title |
|-------|-------|
| [#5554](https://github.com/nearai/ironclaw/issues/5554) | Mobile chat layout breaks with horizontal overflow |
| [#5555](https://github.com/nearai/ironclaw/issues/5555) | Terminal floating button overlaps chat composer |
| [#5556](https://github.com/nearai/ironclaw/issues/5556) | Active chat remains highlighted after navigating away |
| [#5557](https://github.com/nearai/ironclaw/issues/5557) | Logs deep link requires opening twice |
| [#5553](https://github.com/nearai/ironclaw/issues/5553) | Approval notifications disappear |
| [#5558](https://github.com/nearai/ironclaw/issues/5558) | Vision model hallucinates + accepts false corrections |
| [#5551](https://github.com/nearai/ironclaw/issues/5551) | Automation posts intermediate progress to Slack instead of final result |

**Fix PR in progress:** [#5521](https://github.com/nearai/ironclaw/pull/5521) addresses notification persistence (#5553).

---

## 6. Feature Requests & Roadmap Signals

| Feature | PR/Issue | Status | Likelihood in Next Release |
|---------|----------|--------|---------------------------|
| **Slack Personal OAuth** | [#5576](https://github.com/nearai/ironclaw/pull/5576), [#5502](https://github.com/nearai/ironclaw/pull/5502) | Merged/In progress | ✅ High — core parts already merged |
| **Onboarding/NUX Demo** | [#5565](https://github.com/nearai/ironclaw/pull/5565) | Open (XL) | 🟡 Medium — 1

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-03

---

## 1. Today's Overview

LobsterAI saw a highly productive development day with **9 PRs merged** and **3 remaining open**, reflecting strong engineering momentum primarily in the cowork, renderer, and OpenClaw engine areas. Community-facing activity was notably quiet, with only **1 stale issue closed** and no new issues filed. The day's work concentrated on **UI polish, stability hardening, and engine-level optimizations** — particularly around the startup experience, DeepSeek caching, and crash prevention. No new releases were published. Overall, the project is in an active internal development phase with a focus on quality-of-life improvements and bug squashing rather than new feature launches.

---

## 2. Releases

**No new releases today.** The latest release information is unavailable.

---

## 3. Project Progress

A total of **9 PRs were merged/closed** today, advancing several key areas:

### UI & UX Improvements
- **[PR #2263](https://github.com/netease-youdao/LobsterAI/pull/2263)** — Optimized font sizes and settings UI across renderer, cowork, and artifacts areas.
- **[PR #2262](https://github.com/netease-youdao/LobsterAI/pull/2262)** — Removed the default goal menu helper text and cleaned up unused i18n entries for a cleaner cowork interface.
- **[PR #2257](https://github.com/netease-youdao/LobsterAI/pull/2257)** — Unified the engine startup screen into one continuous splash, eliminating the jarring spinner-to-React handoff. A static pre-React splash now mirrors the overlay for a seamless boot experience.
- **[PR #2259](https://github.com/netease-youdao/LobsterAI/pull/2259)** — Optimized the engine failure overlay for a better error-state presentation.

### Engine & Backend Fixes
- **[PR #2260](https://github.com/netease-youdao/LobsterAI/pull/2260)** — Separated task `runtimeCwd` from agent workspace in the system prompt for OpenClaw, ensuring correct directory context during runs and compaction.
- **[PR #2258](https://github.com/netease-youdao/LobsterAI/pull/2258)** — Stabilized DeepSeek prompt caching in long sessions by disabling aggregate tool-result rewriting on the live prompt path, keeping history byte-stable for provider prefix caches.
- **[PR #2261](https://github.com/netease-youdao/LobsterAI/pull/2261)** — Repaired subagent panel timestamps by aliasing persisted message timestamps correctly from SQLite rows and guarding against invalid values.

---

## 4. Community Hot Topics

Community engagement was **minimal** today. No issues or PRs received significant comments or reactions.

- **[Issue #1422](https://github.com/netease-youdao/LobsterAI/issues/1422)** [CLOSED] — MCP custom page delete dialog displays poorly when service names are long. This UI truncation/overflow issue was reported on April 3 and closed today as stale, with 2 comments. The underlying need is for **responsive dialog design** that gracefully handles long Chinese/English service identifiers.

The low engagement suggests either a stable user base with few pain points or a gap in community outreach.

---

## 5. Bugs & Stability

Several bugs were addressed today, ranked by severity:

| Severity | Bug | PR / Issue | Status |
|----------|-----|------------|--------|
| 🔴 **High** | White screen crash when deleting the active custom model/provider in Settings | [PR #2252](https://github.com/netease-youdao/LobsterAI/pull/2252) | ✅ Merged |
| 🔴 **High** | Scheduled task notification channel "不通知" (None) not persisting after save — form reverts to previous selection | [PR #2255](https://github.com/netease-youdao/LobsterAI/pull/2255) | ✅ Merged |
| 🟡 **Medium** | Subagent panel timestamps displayed incorrectly due to SQLite row aliasing issues | [PR #2261](https://github.com/netease-youdao/LobsterAI/pull/2261) | ✅ Merged |
| 🟡 **Medium** | DeepSeek prompt cache instability in long sessions causing degraded performance | [PR #2258](https://github.com/netease-youdao/LobsterAI/pull/2258) | ✅ Merged |
| 🟢 **Low** | MCP custom page delete dialog UI overflow with long service names | [Issue #1422](https://github.com/netease-youdao/LobsterAI/issues/1422) | ✅ Closed |

**Note:** [PR #2256](https://github.com/netease-youdao/LobsterAI/pull/2256) (open) bundles fixes for both the scheduled task delivery bug and the white screen crash, suggesting these may have been reworked or are pending further review.

---

## 6. Feature Requests & Roadmap Signals

### Open Feature PRs
- **[PR #1353](https://github.com/netease-youdao/LobsterAI/pull/1353)** [STALE] — Adds **Select All** and **Clear** buttons to the Agent skill selector, along with a selected count display (`已选 N/M`). This addresses a real UX pain point where users must manually deselect skills one by one. *Likely to be included in the next version given its clear utility and limited scope (2 files changed).*
- **[PR #1464](https://github.com/netease-youdao/LobsterAI/pull/1464)** [STALE] — Adds **duplicate validation** for DingTalk, Feishu, and QQ IM instances — preventing same-name instances and duplicate bot credentials. *Important for multi-instance IM reliability; should be prioritized.*

### Roadmap Signals
- The engine startup unification ([PR #2257](https://github.com/netease-youdao/LobsterAI/pull/2257)) and failure overlay optimization ([PR #2259](https://github.com/netease-youdao/LobsterAI/pull/2259)) suggest an ongoing effort to **polish the first-run and error-recovery experience**.
- OpenClaw prompt architecture changes ([PR #2260](https://github.com/netease-youdao/LobsterAI/pull/2260)) indicate the team is **refining agent context management** — separating task-level and workspace-level concerns.

---

## 7. User Feedback Summary

Based on today's issues and PR descriptions, user pain points include:

- **Settings instability**: Deleting an active custom model caused a full white-screen crash — a severe disruption to workflow. ([PR #2252](https://github.com/netease-youdao/LobsterAI/pull/2252))
- **Scheduled task configuration broken**: The "no notification" option silently failed to save, leading users to believe their tasks were configured correctly when they were not. ([PR #2255](https://github.com/netease-youdao/LobsterAI/pull/2255))
- **Tedious skill management**: Users with many enabled skills had no batch operation to reset selections, requiring tedious one-by-one deselection. ([PR #1353](https://github.com/netease-youdao/LobsterAI/pull/1353))
- **IM instance confusion**: Lack of duplicate validation allowed users to accidentally create identical bot instances, causing message conflicts. ([PR #1464](https://github.com/netease-youdao/LobsterAI/pull/1464))
- **UI overflow**: Long MCP service names broke the delete confirmation dialog layout. ([Issue #1422](https://github.com/netease-youdao/LobsterAI/issues/1422))

---

## 8. Backlog Watch

The following items are **stale and require maintainer attention**:

| Item | Type | Created | Last Updated | Concern |
|------|------|---------|--------------|---------|
| [PR #1353](https://github.com/netease-youdao/LobsterAI/pull/1353) | Feature | 2026-04-02 | 2026-07-03 | **3 months open.** Agent skill selector batch operations — small scope, high UX value. Needs review/merge. |
| [PR #1464](https://github.com/netease-youdao/LobsterAI/pull/1464) | Bug Fix | 2026-04-04 | 2026-07-03 | **3 months open.** IM duplicate validation — prevents data conflicts in multi-instance setups. Should be prioritized. |
| [Issue #1422](https://github.com/netease-youdao/LobsterAI/issues/1422) | UI Bug | 2026-04-03 | 2026-07-03 | Closed as stale, but the underlying UI overflow issue may still exist. Worth verifying if a fix was applied or if it remains unresolved. |

---

*Digest generated for 2026-07-03. Data source: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

### 1. Today's Overview
On July 3, 2026, the Moltis project experienced low issue tracker activity but saw focused development efforts on the pull request front. The day's work primarily advanced WhatsApp integration reliability and expanded LLM provider support to keep pace with external platform changes. With no new releases or issue updates, the project appears to be in a steady maintenance and feature-expansion phase, addressing critical messaging delivery bugs while modernizing its backend dependencies.

### 2. Project Progress
Development progress today was driven by the closure of a critical WhatsApp integration fix:
*   **[PR #1116](https://github.com/moltis-org/moltis/pull/1116) [CLOSED]**: `fix(whatsapp): deliver replies to @lid chats via PN JID rewrite` by juanlotito. This PR resolves a delivery failure where replies to privacy-enabled WhatsApp users were silently dropped. The fix ensures messages successfully reach the user by rewriting the PN JID, restoring reliable communication for these specific chat types.

### 3. Community Hot Topics
While explicit community engagement (comments and reactions) was minimal today, the open PRs highlight key areas of current development interest and underlying ecosystem needs:
*   **[PR #1144](https://github.com/moltis-org/moltis/pull/1144)**: `feat(whatsapp): bump whatsapp-rust 0.5 -> 0.6 with LID-native addressing`. This reflects the critical need to keep pace with WhatsApp's underlying protocol changes, specifically the migration to LID (Linked Identity) addressing, ensuring the agent doesn't break as WhatsApp updates its privacy infrastructure.
*   **[PR #1143](https://github.com/moltis-org/moltis/pull/1143)**: `Add Requesty as an OpenAI-compatible provider`. This highlights a growing demand for diverse, cost-effective, or specialized LLM routing options beyond standard providers, mirroring the existing OpenRouter wiring.

### 4. Bugs & Stability
*   **WhatsApp @lid Chat Delivery Failure (Severity: High)**: Prior to today, replies sent to a privacy-enabled sender's @lid chat were silently dropped on WhatsApp. The gateway successfully ran the agent and produced a reply (visible in the web UI), but the outbound message never reached the user and no delivery receipt was returned. 
    *   *Status*: Fixed and closed via [PR #1116](https://github.com/moltis-org/moltis/pull/1116).

### 5. Feature Requests & Roadmap Signals
*   **Requesty LLM Router Integration**: [PR #1143](https://github.com/moltis-org/moltis/pull/1143) introduces Requesty as a table-driven OpenAI-compatible provider. This signals a roadmap direction focused on modular, router-based LLM integrations, likely to give users more granular control over model routing, fallbacks, and costs.
*   **WhatsApp LID-Native Addressing**: [PR #1144](https://github.com/moltis-org/moltis/pull/1144) bumps `whatsapp-rust` to 0.6 to support LID-native addressing. This indicates a proactive roadmap adjustment to maintain strict compatibility with WhatsApp's evolving identity and privacy protocols, which will likely be a prerequisite for future WhatsApp-related features.

### 6. User Feedback Summary
Although no direct user comments were logged in the issue tracker today, the nature of the closed and open PRs highlights clear user pain points and use cases:
*   **Pain Point**: Users relying on WhatsApp for agent interactions experienced silent message failures when communicating with privacy-enabled contacts, leading to a degraded and confusing user experience (agent "thinks" it replied, but user receives nothing).
*   **Use Case**: Users are actively seeking to integrate alternative LLM routers (like Requesty) to optimize their AI agent's backend. This suggests a power-user base that values flexibility, cost-efficiency, and decentralized model selection in their personal AI setups.

### 7. Backlog Watch
*   **[PR #1144](https://github.com/moltis-org/moltis/pull/1144)** (WhatsApp LID bump) and **[PR #1143](https://github.com/moltis-org/moltis/pull/1143)** (Requesty provider) were both opened on July 2 and remain open. Given that PR #1144 addresses an underlying protocol shift (LID migration) that could eventually break existing WhatsApp functionality if not merged, it requires prompt maintainer review and merging to ensure continued stability of the WhatsApp gateway.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-07-03

## 1. Today's Overview

CoPaw saw a highly active day with **74 total updates** (37 issues, 37 PRs), reflecting strong momentum as the project transitions toward the v2.0.0 release cycle. The team published **v2.0.0-beta.2**, an early pre-release targeting developers and early adopters, while simultaneously preparing v2.0.0b3. Community engagement remains robust with multiple first-time contributors submitting PRs across documentation, security, and platform support. The issue tracker shows a healthy mix of v1.x stability fixes being closed out and v2.0-specific regressions being actively triaged. Overall project health is **strong but entering a volatile pre-release phase**.

---

## 2. Releases

### 🚀 v2.0.0-beta.2
- **Status:** Early beta — **not recommended for production**
- **Warning:** Contains breaking changes and instability; intended for developers/early adopters only
- **Notable Change:**
  - `feat(cli): add cron up` — new CLI command for scheduled task management
- **Migration Note:** This is part of the QwenPaw 2.0.0 transition. Users should consult the [v1→v2 plugin migration guide](https://github.com/agentscope-ai/QwenPaw/pull/5752) (currently under review).
- **Next version in pipeline:** v2.0.0b3 version bump PR [#5760](https://github.com/agentscope-ai/QwenPaw/pull/5760) already closed/merged today.

---

## 3. Project Progress

**Merged/Closed PRs today (13 total):**

| PR | Type | Summary |
|---|---|---|
| [#5760](https://github.com/agentscope-ai/QwenPaw/pull/5760) | chore | Bump version to 2.0.0b3 |
| [#5753](https://github.com/agentscope-ai/QwenPaw/pull/5753) | refactor | Skill-related UI overhaul — merged market into skill pool, unified add operations |
| [#5744](https://github.com/agentscope-ai/QwenPaw/pull/5744) | fix | Mobile chat history panel showing empty session list |
| [#5742](https://github.com/agentscope-ai/QwenPaw/pull/5742) | fix | Show stream completion time instead of first-chunk time for assistant messages |
| [#5758](https://github.com/agentscope-ai/QwenPaw/pull/5758) | docs/chore | Developer Day blog collection update + GA tracking improvements |
| [#5732](https://github.com/agentscope-ai/QwenPaw/pull/5732) | feat | Add `none` memory backend to fully disable ReMeLight memory system via UI |

**Key areas advanced:** Console UI polish (mobile fix, skill market refactor), streaming telemetry accuracy, memory system flexibility, and release pipeline readiness for v2.0.

---

## 4. Community Hot Topics

| Issue | Comments | Status | Core Need |
|---|---|---|---|
| [#4559](https://github.com/agentscope-ai/QwenPaw/issues/4559) — Performance degrades with 40+ agents | 8 | Closed | Scalability of agent management UI |
| [#5403](https://github.com/agentscope-ai/QwenPaw/issues/5403) — Browser autofill hijacks model config search | 7 | Closed | UX polish on configuration pages |
| [#4607](https://github.com/agentscope-ai/QwenPaw/issues/4607) — `NO_PROXY` env var not respected | 6 | Closed | Network/proxy configuration reliability |
| [#4625](https://github.com/agentscope-ai/QwenPaw/issues/4625) — MiniMax-M2.5 XML thinking format breaks execution | 6 | Closed | Multi-model compatibility |
| [#5705](https://github.com/agentscope-ai/QwenPaw/issues/5705) — Key masking & secure storage gaps | 6 | **Open** | Security hardening for secrets in logs/configs |

**Analysis:** The community is heavily focused on **production-readiness concerns** — security (secret masking), scalability (many-agent performance), and multi-provider compatibility. The high comment counts on closed issues suggest these were pain points that required significant back-and-forth to resolve.

---

## 5. Bugs & Stability

Ranked by severity:

| Severity | Issue | Description | Fix PR? |
|---|---|---|---|
| 🔴 **Critical** | [#5746](https://github.com/agentscope-ai/QwenPaw/issues/5746) | v2.0 beta `scroll` context compression folds active task, model replies to stale messages ("amnesia") | [#5747](https://github.com/agentscope-ai/QwenPaw/pull/5747) (Open) |
| 🔴 **Critical** | [#5717](https://github.com/agentscope-ai/QwenPaw/issues/5717) | Malformed `tool_call.input` in Runtime 2.0 history causes **endless repeated tool execution** | [#5761](https://github.com/agentscope-ai/QwenPaw/pull/5761) (Open) |
| 🟠 **High** | [#5759](https://github.com/agentscope-ai/QwenPaw/issues/5759) | Plan mode repeatedly reads the same file (5x in one execution chain) | None yet |
| 🟡 **Medium** | [#5725](https://github.com/agentscope-ai/QwenPaw/issues/5725) | Console browser freezes during streaming output; recovers after completion | None yet |
| 🟡 **Medium** | [#5689](https://github.com/agentscope-ai/QwenPaw/issues/5689) | Remote SSH plugin removal leaves residual `ModuleNotFoundError` | None yet |

**Note:** The two critical v2.0 bugs (context eviction and tool-call loops) both have fix PRs in progress, indicating active triage.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue | Demand Signal | Likely for Next Release? |
|---|---|---|---|
| **Loop Detection Mechanism** | [#5657](https://github.com/agentscope-ai/QwenPaw/issues/5657) | Addresses a known Qwen3.6 model weakness | ⭐ Likely — directly related to today's critical bugs |
| **Auto-switch model on failure/quota** | [#5718](https://github.com/agentscope-ai/QwenPaw/issues/5718) | Production resilience | Possible |
| **Enhanced CLI for non-GUI scenarios** | [#5737](https://github.com/agentscope-ai/QwenPaw/issues/5737) | Enterprise/packaging use case | ⭐ Likely — `cron up` already shipped in beta |
| **Custom model protocol support** | [#5609](https://github.com/agentscope-ai/QwenPaw/issues/5609) | Free-tier model compatibility | Possible |
| **Chat history select/quote/delete** | [#5756](https://github.com/agentscope-ai/QwenPaw/issues/5756), [#4113](https://github.com/agentscope-ai/QwenPaw/issues/4113) | UX control over context quality | Possible |
| **Vision fallback for text-only models** | — | — | [#5726](https://github.com/agentscope-ai/QwenPaw/pull/5726) already in review |

---

## 7. User Feedback Summary

**Pain Points:**
- **Context loss in long sessions:** Users report the agent "forgetting" mid-task, especially with v2.0's scroll compression and in plan mode ([#5746](https://github.com/agentscope-ai/QwenPaw/issues/5746), [#5759](https://github.com/agentscope-ai/QwenPaw/issues/5759))
- **Streaming performance:** Console UI freezes during long streaming responses, worse than competitor DeepSeek's web UI ([#5725](https://github.com/agentscope-ai/QwenPaw/issues/5725))
- **Plugin system limitations:** Users find current extension points (Context/Memory, Hooks, Skills, Channels) require invasive source code changes vs. OpenClaw's non-invasive approach ([#4642](https://github.com/agentscope-ai/QwenPaw/issues/4642))
- **Security gaps:** API keys and secrets not fully masked in logs and debug artifacts ([#5705](https://github.com/agentscope-ai/QwenPaw/issues/5705))
- **macOS desktop UX:** Closing window resets conversation context; users want background persistence ([#4672](https://github.com/agentscope-ai/QwenPaw/issues/4672))

**Satisfaction Signals:**
- Active contributor base (first-time PRs in docs, security, Windows sandbox, Azure Bot channel)
- v2.0 pre-release tracker ([#5273](https://github.com/agentscope-ai/QwenPaw/issues/5273)) shows organized community testing
- Users providing detailed competitive analysis ([#5711](https://github.com/agentscope-ai/QwenPaw/issues/5711)) indicates investment in project success

---

## 8. Backlog Watch

| Issue/PR | Age | Why It Matters |
|---|---|---|
| [#5273](https://github.com/agentscope-ai/QwenPaw/issues/5273) — v2.0.0 Pre-release Bug Tracker | 16 days | Central tracker for v2.0 regressions; needs maintainer summary/cleanup before GA |
| [#5616](https://github.com/agentscope-ai/QwenPaw/issues/5616) — Automated tasks terminate unexpectedly | 4 days | Affects reliability of scheduled/autonomous agent workflows |
| [#5705](https://github.com/agentscope-ai/QwenPaw/issues/5705) — Secret masking & secure storage | 2 days | Security issue with detailed analysis; PR [#5745](https://github.com/agentscope-ai/QwenPaw/pull/5745) partially addresses this — needs review/merge |
| [#5525](https://github.com/agentscope-ai/QwenPaw/pull/5525) — Windows native sandbox | 8 days | Significant platform expansion; first-time contributor awaiting review |
| [#5734](https://github.com/agentscope-ai/QwenPaw/pull/5734) — Switch desktop release to Tauri | 1 day | Major packaging migration; needs timely review to unblock release pipeline |

---

*Digest generated 2026-07-03. Data source: [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-03

---

## 1. Today's Overview

ZeroClaw saw a highly active day with **26 issues** and **50 PRs** updated in the last 24 hours, signaling strong momentum as the project pushes toward the v0.8.3 milestone. Activity is heavily concentrated around **security hardening** (OIDC auth, zip-bomb protection, config guards), **memory stability** (WSL2 OOM root-cause analysis splitting into targeted fixes), and **ecosystem expansion** (OpenAI-compatible API, desktop app revival, skill catalog overhaul). Three issues were closed — two security fixes and a hybrid skill/plugin capability — while six PRs were merged or closed. The project health is robust: maintainers are triaging rapidly, RFCs are advancing, and cross-cutting v0.8.3 tracker issues are being actively coordinated.

---

## 2. Releases

**No new releases today.** The project is actively tracking v0.8.3 work across multiple domain trackers ([#7314](https://github.com/zeroclaw-labs/zeroclaw/issues/7314) WASM plugins, [#8071](https://github.com/zeroclaw-labs/zeroclaw/issues/8071) runtime/agent loop, [#8073](https://github.com/zeroclaw-labs/zeroclaw/issues/8073) observability/CI/docs).

---

## 3. Project Progress

**Closed Issues (3):**

| Issue | Title | Impact |
|-------|-------|--------|
| [#6140](https://github.com/zeroclaw-labs/zeroclaw/issues/6140) | Hybrid skills + WASM tools plugin capability | Enables single plugins shipping both SKILL.md orchestration and `.wasm` binaries — a major extensibility milestone |
| [#8554](https://github.com/zeroclaw-labs/zeroclaw/issues/8554) | Harden skill zip extractor against zip-bomb inflation | Closes a security vector in ClawHub skill installs (entry-count + ratio + size caps) |
| [#8605](https://github.com/zeroclaw-labs/zeroclaw/issues/8605) | Runtime-config self-modification guard mis-targeting | Fixes a security policy gap where the config-protection guard missed the real `config.toml` in per-agent layouts |

**Merged/Closed PRs (6):** Key merges include [#8613](https://github.com/zeroclaw-labs/zeroclaw/pull/8613) (squash-merge freshness enforcement for PR workflow integrity) and [#8488](https://github.com/zeroclaw-labs/zeroclaw/pull/8488) (channel prompt tool-availability derivation fix).

**Active Large PRs Advancing Features:**
- [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) (XL) — OpenAI Chat Completions endpoint for gateway
- [#8565](https://github.com/zeroclaw-labs/zeroclaw/pull/8565) (XL) — Reintroducing `zeroclaw-desktop` Tauri app
- [#8033](https://github.com/zeroclaw-labs/zeroclaw/pull/8033) (XL) — Spec-driven onboarding section flow
- [#8619](https://github.com/zeroclaw-labs/zeroclaw/pull/8619) (L) — Unified memory-context injection keyed on TurnOrigin provenance

---

## 4. Community Hot Topics

| Rank | Issue/PR | Comments | Topic | Underlying Need |
|------|----------|----------|-------|-----------------|
| 1 | [#5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542) | 7 | Consecutive OOM in WSL2 | Users running ZeroClaw on Windows/WSL2 face critical memory exhaustion — the issue is being decomposed into root-cause-specific fixes (#8642 for MCP schema cloning, #8633 for restart-storm backoff) |
| 2 | [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) | 7 | RFC: OIDC authentication provider | Enterprise/multi-user deployments need pluggable auth; this RFC is the umbrella for v0.9.0 security architecture |
| 3 | [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | 7 | 74 test failures on Windows | CI only runs on Linux, masking Windows-specific path/encoding regressions — a significant contributor-experience gap |
| 4 | [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) | 3 | RFC: Goal mode for autonomous sessions | Users want bounded, durable autonomous execution toward a single objective — a key agentic workflow pattern |
| 5 | [#8044](https://github.com/zeroclaw-labs/zeroclaw/issues/8044) | 3 | Harden `/model --agent` scope authorization | Multi-user channel deployments lack per-sender auth on model-scope overrides — a privilege escalation risk |

---

## 5. Bugs & Stability

Ranked by severity:

| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **S0** | [#5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542) | Consecutive OOM kills in WSL2 (process using ~8GB RSS) | Partially: #8633 (backoff) + [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) (MCP schema cloning RSS growth) |
| **S1** | [#8627](https://github.com/zeroclaw-labs/zeroclaw/issues/8627) | WhatsApp Web device linking broken by WhatsApp's new passkey/SHORTCAKE gate | No PR yet — external dependency change |
| **S1** | [#8632](https://github.com/zeroclaw-labs/zeroclaw/issues/8632) | Source install with `embedded-web` fails (web API client not generated before Rust compile) | [#8643](https://github.com/zeroclaw-labs/zeroclaw/pull/8643) opened |
| **S2** | [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) | MCP/tool-schema cloning drives unbounded RSS growth (split from #5542) | Under investigation |
| **S2** | [#8615](https://github.com/zeroclaw-labs/zeroclaw/issues/8615) | Compatible provider silently deletes content via unconditional `<think>` tag stripping | No PR yet |
| **S2** | [#8631](https://github.com/zeroclaw-labs/zeroclaw/issues/8631) | Headless deterministic SOP steps recorded "Completed" without executing | No PR yet |
| **S2** | [#8644](https://github.com/zeroclaw-labs/zeroclaw/issues/8644) | ZeroCode can complete a Code turn with no visible assistant output | No PR yet |
| **S2** | [#8302](https://github.com/zeroclaw-labs/zeroclaw/issues/8302) | Configured MCP server tools not shown in web dashboard tools list | In progress |
| **S2** | [#8645](https://github.com/zeroclaw-labs/zeroclaw/issues/8645) | Reload banner shows persistent drift for `ZEROCLAW_*` env-overridden secrets | No PR yet |
| **S2** | [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | 74 test failures on Windows (path semantics, console encoding) | No PR yet |

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue | Signal Strength | Likely Version |
|---------|-------|-----------------|----------------|
| **OIDC pluggable auth provider** | [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) / [#8289](https://github.com/zeroclaw-labs/zeroclaw/issues/8289) | 🔥 Strong — RFC accepted, tracker created, targeted for v0.9.0 | v0.9.0 |
| **OpenAI Chat Completions compatibility** | [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) / [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) | 🔥 Strong — XL PR already open, high ecosystem demand | v0.8.3 or v0.9.0 |
| **Goal mode (bounded autonomous sessions)** | [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) | 🟡 Medium — RFC accepted, core agentic capability | v0.9.0+ |
| **Agent evaluation harness (`zeroclaw eval`)** | [#7065](https://github.com/zeroclaw-labs/zeroclaw/issues/7065) | 🟡 Medium — replay + live modes, LLM-as-judge | v0.9.0+ |
| **TodoWrite tracker for ZeroCode** | [#8639](https://github.com/zeroclaw-labs/zeroclaw/pull/8639) | 🟢 Active — PR open, Claude Code-style task tracker | v0.8.3 |
| **zeroclaw-desktop (Tauri) revival** | [#8565](https://github.com/zeroclaw-labs/zeroclaw/pull/8565) | 🟡 Medium — draft PR restarting conversation | TBD |
| **Runtime OTel content policy** | [#8567](https://github.com/zeroclaw-labs/zeroclaw/pull/8567) | 🟢 Active — implements RFC #8462, L-size PR open | v0.8.3 |
| **Context window usage bar** | [#7946](https://github.com/zeroclaw-labs/zeroclaw/pull/7946) | 🟢 Active — across TUI, gateway chat, CLI | v0.8.3 |

---

## 7. User Feedback Summary

**Pain Points:**
- **WSL2 memory instability** is the most critical user-facing issue — users report OOM kills consuming 8+ GB RSS, making the runtime unusable on Windows developer environments. The root-cause decomposition (#8642 isolating MCP schema cloning) shows maintainers are taking this seriously.
- **WhatsApp channel breakage** (#8627) blocks a major messaging integration — WhatsApp's new passkey/SHORTCAKE linking gate has

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*