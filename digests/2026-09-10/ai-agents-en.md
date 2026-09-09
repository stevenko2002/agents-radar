# OpenClaw Ecosystem Digest 2026-09-10

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-09-09 22:15 UTC

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

# OpenClaw Project Digest: September 10, 2026

## 1. Today's Overview
OpenClaw is currently experiencing a high volume of activity, with 500 issues and PRs processed in the last 24 hours. The project is heavily focused on stabilizing the platform following the v2026.9.x series updates, specifically addressing critical issues in session persistence, gateway synchronization, and UI consistency. While development velocity is high, the project is grappling with complex regressions in multi-agent orchestration and memory-related SQLite bloat. The current focus is shifted toward resolving "Beta release blockers" related to authentication timeouts and data loss in specific runtime environments.

## 2. Releases
* **No new releases were recorded in the last 24 hours.*

## 3. Project Progress
The team has seen significant throughput, with **246 PRs merged or closed** today. Key advancements include:
*   **UI/UX Refinement:** Significant effort was put into cleaning up the interface, including aligning chat actions/copy icons and clarifying plugin setup states ([142624](https://github.com/openclaw/openclaw/pull/142624)).
*   **Infrastructure Refactoring:** Efforts to unify navigation prompt arguments in the terminal wizard to reduce code duplication ([143430](https://github.com/openclaw/openclaw/pull/143430)).
*   **Authentication Fixes:** Resolution of issues where legacy auth profile migrations blocked LiteLLM-based providers ([143310](https://github.com/openclaw/openclaw/pull/143310)).
*   **Performance Optimization:** Refactoring of browser profile preparation to reduce redundant map copying and allocation overhead ([135648](https://github.com/openclaw/openclaw/pull/135648)).

## 4. Community Hot Topics
The community is currently focused on several architectural bottlenecks and stability concerns:
*   **Gateway Event Loop Bottleneck:** Issue [#119720](https://github.com/openclaw/openclaw/issue/119720) (15 comments) highlights that synchronous persistence and transcript maintenance are blocking the event loop at scale. This is a critical architectural concern for high-usage deployments.
*   **Multi-Agent Instability:** Issue [#43367](https://github.com/openclaw/openclaw/issue/43367) (14 comments) reports that concurrent `agents add` calls are unsafe, causing configuration overwrites and detached child work.
*   **Memory Leak/Zombie Processes:** Issue [#97616](https://github.com/openclaw/openclaw/issue/97616) (15 comments) warns of a leak in unreaped child processes from hook/tool execution leading to zombie accumulation and runtime degradation.

## 5. Bugs & Stability
Several high-priority bugs and regressions are currently active:
*   **Critical (P0/P1 Blockers):**
    *   **Codex Auth Timeout:** [#89278](https://github.com/openclaw/openclaw/issue/89278) - Codex OAuth refresh succeeds but heartbeats fail because the probe takes longer than 10 seconds.
    *   **Windows Gateway Failure:** Gateway fails to start on Windows after 2026.9.1 update ([137813](https://github.com/openclaw/openclaw/issue/137813)).
    *   **SQLite Bloat:** [#114612](https://github.com/openclaw/openclaw/issue/114612) - `memory_index_chunks` and `memory_embedding_cache` grow without bound, potentially filling disk space.
*   **Regressions (P1/P2):**
    *   **Malformed JSON Arguments:** [#135111](https://github.com/openclaw/openclaw/issue/135111) - Intermittent "malformed JSON" errors on v2026.8.1 (Recently Closed).
    *   **Context Leak:** [#137927](https://github.com/openclaw/openclaw/issue/137927) - Internal context blocks leaking into visible Telegram messages (Recently Closed).
    *   **Data Loss:** [#99925](https://github.com/openclaw/openclaw/issue/99925) - New WebChat sessions lose all prior context after a timeout.
*   **UI/UX Friction:**
    *   **Avatar Display:** [#41201](https://github.com/openclaw/openclaw/issue/41201) - Agent avatars failing to display in the Control UI (local or URL paths).

## 6. Feature Requests & Roadmap Signals
*   **Autonomous Compaction:** A highly requested feature [#6757](https://github.com/openclaw/openclaw/issue/6757) for agents to trigger context compaction themselves without user intervention.
*   **Graceful Timeouts:** Request [#6625](https://github.com/openclaw/openclaw/issue/6625) for a "pre-timeout" warning to allow sub-agents to save progress before being killed.
*   **Cross-Platform Expansion:** Ongoing discussion regarding a chat-first Android surface ([46058](https://github.com/openclaw/openclaw/issue/46058)).
*   **Fallback Verification:** Requests for a `test-fallback` command ([6599](https://github.com/openclaw/openclaw/issue/6599)) to verify model fallback chains without waiting for a real failure.

## 7. User Feedback Summary
*   **Operational Frustration:** Users are frustrated by "silent failures" where the agent reports success despite denying tools, but no data is actually persisted ([126906], [53628]).
*   **Security Concerns:** There is pushback regarding a "credential-safety contract" that cannot be overridden or opted out by operators ([128076](https://github.com/openclaw/openclaw/issue/128076)).
*   **Platform-Specific Pain:** Windows users report significant issues with the Gateway becoming unreachable after the laptop wakes from sleep ([140010](https://github.com/openclaw/openclaw/issue/140010)).

## 8. Backlog Watch
*   **Maintainer Review Needed:** Issue [#119720](https://github.com/openclaw/openclaw/issue/119720) regarding the event loop block requires a high-level product decision.
*   **Product Decision Needed:** Issue [#115367](https://github.com/openclaw/openclaw/issue/115367) regarding how "provider-owned" read logic handles different chat-surface origins.
*   **Source Repro Needed:** Issue [#142037](https://github.com/openclaw/openclaw/issue/142037) regarding message-tool reply mismatches in Slack needs a reproduction case.

---

## Cross-Ecosystem Comparison

**Cross‑Project Comparison Report – Personal AI Agent / Assistant Open‑Source Ecosystem (2026‑09‑10)**  

---

### 1. Ecosystem Overview  
The open‑source personal AI agent landscape remains fragmented but highly active, with a clear split between **feature‑rich, desktop‑first platforms** (OpenClaw, LobsterAI, CoPaw) and **lightweight, embeddable runners** (ZeptoClaw, NanoBot, PicoClaw). Most projects are converging on three pain points: reliable **state/persistence handling**, **cross‑protocol IM/bridge support**, and **sandboxed tool execution**. Release cadence is low today—only a handful of projects issued any patches—indicating a period of stabilization after recent major version bumps (e.g., OpenClaw v2026.9.x).  

---

### 2. Activity Comparison  

| Project | Issues (24h) | PRs (24h) | Releases (24h) | Health* |
|---------|--------------|----------|----------------|---------|
| **OpenClaw** | ~254 (processed) | 246 merged/closed | No | **High** |
| **NanoBot** | 4 (3 open, 1 closed) | 21 touched (9 merged/closed) | No | **Medium‑High** |
| **Hermes Agent** | ~96 (updates – PRs) | 4 merged/closed | No | **Medium** |
| **PicoClaw** | 3 (closed/stale) | 5 processed | No | **Medium** |
| **NanoClaw** | – (issue‑level not quantified) | 9 processed (3 merged/closed) | No | **Medium** |
| **NullClaw** | 0 | 0 | No | **Low** |
| **IronClaw** | – (few bugs noted) | 6 processed (2 merged/closed) | No | **Medium** |
| **LobsterAI** | – (issues tracked but not counted) | 11 closed | No | **Medium‑High** |
| **TinyClaw** | 0 | 0 | No | **Low** |
| **Moltis** | 0 | 0 | No | **Low** |
| **CoPaw** | 22 addressed | 34 updated (8 merged/closed) | No | **Medium‑High** |
| **ZeptoClaw** | 0 | 0 (no PRs touched) | No | **Low** |
| **ZeroClaw** | 37 | 50 processed (1 merged/closed) | No | **Medium** |

\*Health is a qualitative snapshot: **High** = strong merge velocity, few blocker bugs; **Medium** = steady activity but notable regressions or architectural debt; **Low** = minimal or no recent contributions.  

---

### 3. OpenClaw’s Position  

| Aspect | OpenClaw vs. Peers |
|--------|--------------------|
| **Activity & Throughput** | Highest PR merge count (246) and total processed items (~500). Indicates a large, engaged contributor base and rapid bug‑fix cycle. |
| **Technical Approach** | Monolithic gateway with SQLite‑backed memory, heavy emphasis on **multi‑agent orchestration** and **plugin‑driven UI**. Contrasts with NanoBot’s micro‑service‑style exec sandboxes and ZeptoClaw’s ultra‑lean Rust binary. |
| **Community Size** | Inferred from volume: >2× the PR flow of the next busiest project (CoPaw 34 PRs) and an order of magnitude more issue traffic than most peers. |
| **Stability Focus** | Currently tackling **gateway event‑loop bottlenecks**, **SQLite bloat**, and **Windows gateway failures**—systemic scaling issues that lighter agents (e.g., ZeptoClaw) avoid by design. |
| **Differentiators** | Built‑in **agent‑market** concept, extensive **skill/plugin** marketplace, and first‑class **desktop/webchat** UI; most peers either lack a UI (NanoBot, ZeptoClaw) or focus on narrow protocol bridges (PicoClaw, IronClaw). |

---

### 4. Shared Technical Focus Areas  

| Requirement | Projects Mentioning It | Specific Needs |
|-------------|------------------------|----------------|
| **State / Persistence robustness** | OpenClaw (SQLite bloat, session persistence), NanoClaw (sqliteGetPendingMessages performance), CoPaw (database corruption, FTS), ZeroClaw (session‑owned RFCs) | Bounded storage, vacuum/compaction, transaction safety. |
| **Cross‑IM protocol support** | OpenClaw (Discord/QQ/Telegram), LobsterAI (Discord/QQ sync), PicoClaw (IRCv3, QQ, DeltaChat), IronClaw (MCP hosted servers) | Reliable reconnection, message threading, attachment handling. |
| **Sandboxed tool execution** | NanoBot (macOS Seatbelt, fail‑closed exec), IronClaw (MCP isolation), ZeroClaw (granular filesystem sandbox RFC) | Prevent privilege escalation, support restricted shells, transparent policy enforcement. |
| **Graceful timeout / pre‑warning** | OpenClaw (Graceful Timeouts feature request #6625), CoPaw (Traffic Light indicator #7600), ZeroClaw (context compaction tied to model ratio) | Sub‑agent checkpointing, user‑visible progress cues. |
| **Memory / context management** | OpenClaw (Autonomous Compaction #6757), NanoBot (Durable memory across sessions #5721), ZeroClaw (dynamic context compaction) | Automatic summarisation, long‑term memory backends, token‑budget awareness. |

---

### 5. Differentiation Analysis  

| Dimension | OpenClaw | NanoBot | Hermes Agent | PicoClaw | LobsterAI | CoPaw | ZeptoClaw | ZeroClaw |
|-----------|----------|---------|--------------|----------|-----------|-------|-----------|----------|
| **Primary Target** | Power‑users needing multi‑agent workflows & rich UI | Developers wanting a minimal, extensible exec sandbox | Desktop‑first AI companion with strong skill hub | Edge/IoT devices bridging niche chat protocols | Enterprise‑style IM orchestrator (QQ/Discord) | Teams seeking modular skill marketplace & mobile | Ultra‑low‑footprint agents for air‑gapped/embedded | Researchers experimenting with runtime architecture & security |
| **Core Architecture** | Gateway + plugin system (Python/TS) | Provider‑agnostic exec + TUI/WebUI (Python) | Electron‑based desktop + skill hub (Python/TS) | Single‑binary C‑style agent with protocol adapters | Monolithic desktop client (Electron/TS) | Modular core + plugin market (Python/TS) | Pure Rust binary (<6 MB) | RFC‑driven, WASM‑pluggable runtime (Rust/TS) |
| **UI Emphasis** | Rich webchat + desktop client (primary) | TUI + WebUI (secondary) | Desktop‑centric (Electron) | Minimal CLI / optional webhook | Desktop‑first with tray | Web console + emerging mobile (Expo RN) | None (headless) | Experimental UI via ZeroCode (web) |
| **Extensibility Model** | Skill/Plugin marketplace, MCP provider adapters | OpenCode‑compatible headers, Seatbelt sandbox | Skill Hub + YOLO mode | Protocol‑specific adapters (IRC/QQ/DeltaChat) | Skill‑based automation + memory plugins | Skill marketplace + ADBPG/PowerContext plugins | None (static binary) | Composable WASM plugins, provider‑profile multi‑model |

---

### 6. Community Momentum & Maturity  

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapid Iterators** | OpenClaw, NanoBot, LobsterAI, CoPaw | High PR merge rates, frequent bug‑fix releases, active issue triage. |
| **Stabilizers / Maturing** | Hermes Agent, IronClaw, PicoClaw, NanoClaw, ZeroClaw | Moderate flow, focus on fixing regressions and architectural RFCs; fewer feature spikes. |
| **Low Activity / Dormant** | NullClaw, TinyClaw, Moltis, ZeptoClaw | Minimal/no contributions; either awaiting maintainer spark or serving as reference implementations. |

OpenClaw and NanoBot show the strongest **momentum** (high merge velocity, rapid issue→PR→close loops). Hermes Agent and ZeroClaw are in a **maturation** phase—lots of discussion (RFCs, design issues) but slower code merge, indicating a shift toward foundational work rather than feature churn.

---

### 7. Trend Signals (from Community Feedback)  

| Trend | Evidence Across Projects | Implication for Developers |
|-------|--------------------------|----------------------------|
| **Deterministic, bounded persistence** | OpenClaw SQLite bloat, NanoClaw pending‑message query, CoPaw FTS corruption, ZeroClaw session‑owned RFC | Expect libraries offering pluggable, transaction‑safe stores (SQLite with WAL + vacuum, or embeddable KV) to become de‑facto standards. |
| **Sandbox hardening & fail‑closed defaults** | NanoBot Seatbelt & fail‑closed exec, IronClaw MCP isolation, ZeroClaw filesystem‑sandbox RFC | New agents will adopt OS‑level sandbox profiles (Seatbelt, Bubblewrap, Landlock) as a default, with explicit opt‑out for trusted toolchains. |
| **Graceful degradation & user‑visible progress** | OpenClaw “pre‑timeout” warning, CoPaw Traffic Light, ZeroClaw dynamic compaction | UI patterns that signal background work (spinners, progress bars, pre‑timeout notices) are becoming expected, especially for long‑running tool chains. |
| **Protocol‑agnostic bridging** | PicoClaw’s multiline IRC/QQ/DeltaChat, LobsterAI’s IM sync, IronClaw’s MCP host model | There is a clear demand for a thin abstraction layer that normalizes message threading, attachments, and read‑receipts across disparate chat transports. |
| **Memory interoperability** | NanoBot durable‑memory #5721, OpenClaw autonomous compaction #6757, ZeroClaw context‑compaction ratios | Emerging interest in pluggable memory backends (hosted MCP, MemCode‑style, or local vector stores) that can be shared between agents or persisted across restarts. |
| **Cost & usage observability** | ZeroClaw Anthropic cost‑tracking bug #9816, Hermes Agent Skills index stale #66616 | Transparent token‑usage metering and budget alerts are becoming table‑stakes for production‑grade personal assistants. |

**Takeaway for AI‑agent developers:**  
Invest in **modular, sandboxed tool execution**, **configurable persistence layers with automatic compaction**, and **cross‑protocol message normalization**. Projects that expose these as pluggable services (rather than baking them into a monolith) will align with the ecosystem’s convergent trajectory and reduce integration friction when partnering with skill marketplaces or external memory providers.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-09-10

## 1. Today's Overview
NanoBot saw a high-activity day with 21 PRs touched in the last 24 hours, of which **9 were merged/closed and 12 remain open**, alongside 4 issues (3 open, 1 closed) and **no new releases**. The bulk of merged work was WebUI polish and bug fixes by contributor chengyongru, including streaming math rendering, edit-diff layout, and history-rendering performance. Infrastructure work also landed: the mandatory `x-opencode-session` header required by OpenCode after 2026-09-06, and a new macOS Seatbelt sandbox backend for `exec`. Several longer-running PRs accumulated `conflict` labels, suggesting merge contention is growing. Overall momentum is strong with rapid maintainer/community turnaround on targeted fixes.

## 2. Releases
**None.** No new versions were released in this window.

## 3. Project Progress — Merged/Closed PRs (9)
- **[#5662 — feat(providers): send x-opencode-session header for OpenCode session](https://github.com/HKUDS/nanobot/pull/5662)** *(merged, closes #5661)* — Adds the `x-opencode-session` header to OpenCode Zen/Go requests, preserving prompt-cache optimization and preventing errors that were to begin 2026-09-06. Priority-p1 compliance fix.
- **[#5628 — feat(exec): add macOS Seatbelt sandbox backend](https://github.com/HKUDS/nanobot/pull/5628)** *(merged)* — Opt-in `seatbelt` sandbox using system `/usr/bin/sandbox-exec` with no new dependency; preserves workspace read-write and configured read-only roots.
- **[#5705 — feat(tui): add /usage context and token charts](https://github.com/HKUDS/nanobot/pull/5705)** *(merged)* — TUI gains a `/usage` panel mirroring the WebUI context meter and recent model-round usage.
- **[#5703 — perf(webui): reduce repeated work and bound history rendering](https://github.com/HKUDS/nanobot/pull/5703)** *(merged)* — Indexes prompt elements once per measurement and bounds expensive caching/render paths for long conversations.
- **[#5717 — fix(webui): preserve project when creating a topic from its menu](https://github.com/HKUDS/nanobot/pull/5717)** *(merged)* — Uses `history.pushState` so route events no longer clear the project selection.
- **[#5716 — fix(webui): refresh skill suggestions when opening the picker](https://github.com/HKUDS/nanobot/pull/5716)** *(merged)* — Removes stale skill list; agent-installed skills appear without a page reload.
- **[#5714 — fix(webui): keep edit diffs outside reasoning folds](https://github.com/HKUDS/nanobot/pull/5714)** *(merged)* — Splits reasoning folds at file-edit rows so diffs stay independently accessible.
- **[#5713 — fix(webui): prevent italic activity labels from clipping](https://github.com/HKUDS/nanobot/pull/5713)** *(merged)* — Adds right padding so overhanging italic strokes render correctly.
- **[#5712 — fix(webui): preserve less-than comparisons in streaming math](https://github.com/HKUDS/nanobot/pull/5712)** *(merged)* — Fixes streamed responses being truncated at `<` in math such as `\prod_{j<i}(1-\alpha_j)`.

**Open PRs of note:** [#5720](https://github.com/HKUDS/nanobot/pull/5720) (Discord compaction notices fix), [#5718](https://github.com/HKUDS/nanobot/pull/5718) (OpenRouter native image API), [#5704](https://github.com/HKUDS/nanobot/pull/5704) (WebUI settings autosave), [#5710](https://github.com/HKUDS/nanobot/pull/5710) (sidebar/project reorg), [#5715](https://github.com/HKUDS/nanobot/pull/5715) (persisted session title marker), [#5711](https://github.com/HKUDS/nanobot/pull/5711) (Telegram-safe command names).

## 4. Community Hot Topics
- **[#5661 — x-opencode-session header requirement](https://github.com/HKUDS/nanobot/issues/5661)** *(closed, 1 👍)* — An upstream provider mandate triggered a compliance bug report (#5661) and a matching fix (#5662) that landed same-window. Shows healthy issue→PR→merge flow for time-sensitive provider breaks.
- **[#5647 — WebUI session title not generated when frontend envelope lacks webui flag](https://github.com/HKUDS/nanobot/issues/5647)** *(open, 1 comment)* — A regression in session-title projection under `unifiedSession` mode, spawned from PR #5528. The related fix PR [#5715](https://github.com/HKUDS/nanobot/pull/5715) addresses "honor persisted session marker for titles," directly covering this scenario.
- **[#5437 — Serply web search provider](https://github.com/HKUDS/nanobot/pull/5437)** *(open since Aug 19)* — Long-running new-provider request following the Serper precedent; tagged `conflict`, suggesting rebase needed. Signals steady demand for more web-search backends.

The most frequent active contributor is chengyongru, whose WebUI/UX fix streak (7+ PRs today) represents most of the merged volume.

## 5. Bugs & Stability
Ranked by severity:

1. **[#5719 — Discord automatic compaction notices ignore `sendProgress: false`](https://github.com/HKUDS/nanobot/issues/5719)** *(open)* — Routine maintenance still sends two standalone messages ("Compressing context…", "Context compacted.") even with `channels.sendProgress: false`, interrupting chat. **Fix PR exists:** [#5720](https://github.com/HKUDS/nanobot/pull/5720) (open) gating `ContextCompactionEvent` notices.
2. **[#5647 / #5715 — WebUI session titles lost on gateway restart](https://github.com/HKUDS/nanobot/issues/5647)** *(open, fix PR open)* — Envelopes omitting the transient `webui` flag skip title generation; persistence marker fix proposed in [#5715](https://github.com/HKUDS/nanobot/pull/5715).
3. **[#5536 — exec: fail closed when restricted shell lacks a sandbox](https://github.com/HKUDS/nanobot/pull/5536)** *(open, priority p1, security)* — `restrict_to_workspace` relies on application-level path checks that symlinks/shell expansion can bypass; requests fail-closed sandbox enforcement (`conflict` tag present).
4. **[#4819 — memory: WeakValueDictionary can drop consolidation locks](https://github.com/HKUDS/nanobot/pull/4819)** *(open since Jul 6)* — Per-session `asyncio.Lock` objects in a weak dict can be GC'd, allowing concurrent consolidation of the same session. Concurrency-correctness fix pending.
5. **[#5712 — streaming math truncated at `<`](https://github.com/HKUDS/nanobot/issues)** — Regression in streamed WebUI responses; **already fixed and merged today.**

Fixed today: the streaming `<` truncation (#5712), compaction-interrupt (#5720 is fix-in-review), and math/render glitches (#5713, #5714).

## 6. Feature Requests & Roadmap Signals
- **[#5721 — Durable memory across sessions](https://github.com/HKUDS/nanobot/issues/5721)** *(new, open)* — MemCode founder proposes an interoperable hosted/self-managed memory backend. Memory, MCP, and multi-agent are already core NanoBot features, so an external durable-memory backend is a plausible add-on offering/roadmap consideration.
- **[#5718 — OpenRouter native image generation](https://github.com/HKUDS/nanobot/pull/5718)** *(open)* — Uses OpenRouter's new Images API via existing `generate_image`; likely to land given provider momentum.
- **[#5704 — WebUI settings expansion with autosave](https://github.com/HKUDS/nanobot/pull/5704)** *(open)* — Validated, authenticated settings endpoint with feature dialogs and Advanced section.
- **[#5710 — sidebar organization: projects vs. topics separation](https://github.com/HKUDS/nanobot/pull/5710)** *(open)* — Big UX improvement targeting discoverability.
- **[#5705 landed] TUI `/usage` parity** — indicates a pattern of WebUI features being back-ported to TUI; expect more TUI parity work.
- **[#5628 landed] macOS Seatbelt sandbox** + open [#5536](https://github.com/HKUDS/nanobot/pull/5536) — security hardening trend for `exec`; fail-closed enforcement could land next.

## 7. User Feedback Summary
- **Pain point (channels):** Discord auto-compaction messages interrupt users even under `sendProgress: false` (#5719) — frustration with routine maintenance breaking chat flow.
- **Pain point (persistence):** WebUI titles/session identity degrade after restart due to envelope flag omissions (#5647, #5715) — affects session continuity expectations.
- **Pain point (platform):** Telegram rejects hyphenated bot command names (`/dream-log` working only as plain text); fix proposed in [#5711](https://github.com/HKUDS/nanobot/pull/5711) by renaming to underscores.
- **Provider pressure:** External requirement from OpenCode drove a prioritized fix (#5661→#5662), reflecting real-world vendor-dependency friction.
- **Satisfaction signals:** Rapid turnaround on WebUI regressions — #5712, #5713, #5714, #5716 all merged the same day they appeared; indicates responsive maintainers and an attentive contributor community. A WebUI lag issue (skills picker stale until reload, #5716) was acknowledged and fixed quickly (see NAN-108 reference).

## 8. Backlog Watch
Items open for an extended period without visible maintainer resolution, needing attention:
- **[#4819 — WeakValueDictionary consolidation locks](https://github.com/HKUDS/nanobot/pull/4819)** *(open since Jul 6)* — Concurrency bug with no discussion visible; conflicts may be blocking.
- **[#4820 — reject non-string web fetch URLs](https://github.com/HKUDS/nanobot/pull/4820)** *(open since Jul 6, same author)* — Cache-signature corruption via numeric URLs; stale and un-reviewed.
- **[#5437 — Serply (Google Search API) provider](https://github.com/HKUDS/nanobot/pull/5437)** *(open since Aug 19)* — Feature request aging over 3 weeks; tagged `conflict`.
- **[#5498 — unify onboarding in Agent TUI](https://github.com/HKUDS/nanobot/pull/5498)** *(open since Aug 23)* — Config onboarding/alignment improvement; `conflict` flagged.
- **[#5536 — exec fail-closed sandbox requirement](https://github.com/HKUDS/nanobot/pull/5536)** *(open since Aug 25)* — Security-priority p1 fix for #4072, with `conflict`; should be prioritized for review to avoid security regressions.
- **[#5710 — project/sidebar reorganization](https://github.com/HKUDS/nanobot/pull/5710)** and **[#5704 — settings autosave/UX overhaul](https://github.com/HKUDS/nanobot/pull/5704)** are large UX change-sets likely overlapping; coordination is needed since both touch WebUI layout/settings.

Several open PRs carry `conflict` labels (#5437, #5536, #4819, #5498, #5710), indicating that merge hygiene/rebase work may be the main bottleneck for unblocking older contributions.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest: 2026-09-10

## 1. Today's Overview
The Hermes Agent project is currently experiencing high activity with 100 total updates across Issues and Pull Requests in the last 24 hours, though the merge rate remains low (4 PRs merged/closed). The project is heavily focused on stabilizing the **desktop application experience**, particularly regarding Windows-specific update bugs and UI-rendering issues. While there is significant community interest in advanced features like native mobile apps and fine-grained tool control (YOLO), the development focus is currently resolving technical debt related to session management, de-serialization bottlenecks, and cross-platform consistency.

## 2. Releases
* *No new releases were reported in the last 24 hours.*

## 3. Project Progress
While 4 PRs were merged/closed today, the focus was largely on bug fixes rather than new feature merges:
* **Bug Fixes:** [#105145] Resolved a critical P1 bug where `hermes update` would report a failure on Windows despite a successful installation due to working directory mismatches.
* **Testing/Quality:** Several PRs are working to increase code coverage, such as [#52063] (bringing `slash_confirm.py` to 100%) and [#52059] (increasing `todo_tool.py` to 92%).

## 4. Community Hot Topics
* **Critical Skills Index Degradation (#66616):** (186 comments) The automated freshness probe for the Skills Hub is failing, leaving the index ~30 hours old (exceeding the 26h limit). This is a major friction point for documentation and tool-discovery. [View Issue](https://NousResearch/hermes-agent/issue/66616)
* **Nous Integration Blocked (#88584):** (81 comments) A scheduled merge for Nous-to-Enterkey is currently blocked by conflicts in `cron/jobs.py`, leaving the dashboard updater on an outdated version. [View Issue](https://NousResearch/hermes-agent/issue/88584)
* **Desktop UI Lag/Scaling Issues (#106665):** (7 comments) Users are reporting significant lag and unresponsive clicks in the Windows desktop app when used at 125% display scaling. [View Issue](https://NousResearch/hermes-agent/issue/106665)

## 5. Bugs & Stability
### High Priority (P1/P2)
* **Windows Update Failure (#105629):** `electron-builder` is failing on Windows because the asar integrity rewrite prevents `rcedit` stamp from committing. [View Issue](https://NousResearch/hermes-agent/issue/105629)
* **Session Metadata Loss (#102792):** On multi-profile installs, creating a new session via the project sidebar loses all owner metadata, causing immediate "Couldn't open this session" errors. [View Issue](https://NousResearch/hermes-agent/issue/102792)
* **Gateway Zombie Process (#106359):** On Windows, the gateway main event loop freezes (heartbeat stops) while background threads continue running, leading to TCP port exhaustion and session loss. [View Issue](https://NousResearch/hermes-agent/issue/106359)

### Medium Priority (P2/P3)
* **Stale Context Usage (#94001):** The desktop status bar shows incorrect context usage/token percentages, including cross-session contamination and slow refreshing. [View Issue](https://NousResearch/hermes-agent/issue/94001)
* **Firecrawl Scraping Issues (#99533):** `web_extract` returns a "successful" empty result when a site refuses access (403/401) because it doesn't check the `metadata.statusCode`. [View Issue](https://NousResearch/hermes-agent/issue/99533)

## 6. Feature Requests & Roadmap Signals
* **Native Mobile App (#11911):** High-demand request for official iOS/Android apps supporting real-time voice calling for AI interaction. [View Issue](https://NousResearch/hermes-agent/issue/11911)
* **Fine-Grained YOLO Mode (#106267/10658):** Users want to move away from "all-or-nothing" YOLO (auto-approval) in favor of per-tool or per-category bypass controls. [View Issue](https://NousResearch/hermes-agent/issue/106267)
* **Natural Language Slash Commands (#106258):** Request to resolve `/model` (e.g., "switch to grok") using natural language instead of requiring exact token IDs. [View Issue](https://NousResearch/hermes-agent/issue/106258)

## 7. User Feedback Summary
* **UI Friction:** Users are frustrated that the desktop sidebar only shows 3 chat sessions per project, making multi-chat workflows cumbersome (#70421).
* **Contextual Confusion:** In remote-desktop setups, the session context refers to "the user's browser" but actually points to the *backend* browser, leading to confusion for the human operator (#106261).
* **Model Tier Clarity:** There is confusion regarding the "Fast" toggle in the model picker; users are unsure if it is a speed/quality trade-off or a specific billing-tier feature (#106253).

## 8. Backlog Watch
* **Security/Dependencies (#106775):** Six high-severity vulnerabilities in the dev-tree are older than the 14-day `min-release-age` gate, requiring a manual override or update to clear.
* **Automated Workflow Failure (#66616):** The Skills index watchdog has been in a `degraded` state for nearly two month, indicating a persistent issue in the CI/CD pipeline for documentation.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest: 2026-09-10

### 1. Today's Overview
PicoClaw is showing active development with a strong focus on stabilizing core components and expanding chat protocol support. In the last 24 hours, the project saw three critical issues closed (mostly marked as stale) and five new pull requests processed. While no new official releases were issued today, the community is actively refining multi-channel integrations (IRC, QQ, DeltaChat), indicating a trajectory toward a more robust, multi-platform AI gateway.

### 2. Releases
*No new releases reported in this period.*

### 3. Project Progress
The project processed 5 Pull Requests today, resulting in 1 closure and 4 remaining open:
*   **Closed:** [#1349 - feat(qq)](https://github.com/sipeed/picoclaw/pull/1349): Enhanced QQ Channel support by parsing and replying to various attachment types (voice, image, video, files) and emoji structures.
*   **Open:** [#3358 - fix(agent): thread responses](https://github.com/sipeed/picoclaw/pull/3358): A fix to ensure agent responses are properly linked to the originating message in group chats.
*   **Open:** [#3354 - feat(irc): IRCv3 multiline](https://github.com/sipeed/picoclaw/pull/3354): Adding support for IRCv3 multiline messages to handle long-form content correctly.
*   **Open:** [#3353 - fix(channels): tool feedback](https://github.com/sipeed/picoclaw/pull/3353): Implementing a safety timeout (5 mins) for tool feedback animations to prevent infinite UI states.
*   **Open:** [#3222 - refactor(deltachat)](https://github.com/sipeed/picoclaw/pull/3222): A significant cleanup of the DeltaChat implementation, removing legacy features and updating documentation.

### 4. Community Hot Topics
The community is currently focused on edge-case reliability and edge-computing potential:
*   **MCP Stability:** Issue [#3269](https://github.com/sipeed/picoclaw/issues/3269) highlighted a critical bug where a failed MCP (Model Context Protocol) server connection hangs the entire agent loop. This underscores the need for better circuit breaking in agent loops.
*   **Edge Vision:** Proposal [#3345](https://github.com/sipeed/picoclaw/issues/3345) suggests a "lightweight worker mode" specifically for low-power hardware (RISC-V, ARM, MIPS) with only 10-20MB of RAM, signaling a strong interest in PicoClaw as a distributed household AI mesh.

### 5. Bugs & Stability
*   **Closed (Stale):** [#3269](https://github.com/sipeed/picoclaw/issues/3269) - Agent loop hangs on MCP failure. (Status: Closed, but high-impact bug).
*   **Closed (Stale):** [#3265](https://github.com/sipeed/picoclaw/issues/3265) - Gateway fails to start due to unknown type `deltachat` even when not configured. (Status: Closed).

### 6. Feature Requests & Roadmap Signals
*   **Multi-Protocol Depth:** The current PRs for IRCv3 multiline support and QQ attachment handling suggest the roadmap is moving toward being a "universal translator" for AI across niche protocols.
*   **Resource Optimization:** The proposal for a lightweight "worker mode" (#3345) suggests that future iterations may focus on extreme memory footprint reduction to support legacy or cheap edge devices.

### 7. User Feedback Summary
*   **Pain Point:** Users are experiencing frustration with "disconnected" replies in group chats where the bot doesn't reference the specific question asked (addressed in PR #3358).
*   **Use Case:** There is clear interest in using PicoClaw on "ignored" hardware (old Android phones, Raspberry Pis) to create a decentralized household AI-agent network.

### 8. Backlog Watch
*   **DeltaChat Refactor:** [#3222](https://github.com/sipeed/picoclaw/pull/3222) is a large refactor (200+ LOC removed/changed) that needs careful maintainer review to ensure the removal of legacy features doesn't break existing workflows for DeltaChat users.
*   **Agent Threading:** [#3358](https://github.com/sipeed/picoclaw/pull/3358) remains open and is vital for UX in busy group chat environments.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest: September 10, 2026

## 1. Today's Overview
NanoClaw is experiencing a high level of development activity with 9 Pull Requests processed in the last 24 hours. The team is currently focused on refining the `agent-runner` and `core` modules, specifically addressing usage allowance messaging, message threading, and browser handoff flows. While activity is robust, there is a notable open issue regarding task recurrence scheduling that requires architectural attention. Overall, the project appears healthy with a clear focus on stabilizing the agent-user interface.

## 2. Releases
*No new releases were recorded in the last 24 hours.*

## 3. Project Progress
The team successfully closed/merged 3 Pull Requests today, focusing on user experience clarity and data integrity:
*   **UX Improvement (#3756):** Refined error messaging for when a user hits their usage allowance, ensuring the 403 error block is clearly communicated. [View PR](https://github.com/nanocoai/nanoclaw/pull/3756)
*   **Data Accuracy (#3753):** Updated the community portal to record the actual hardened image used on the machine rather than the user's click choice. [View PR](https://github.com/nanocoai/nanoclaw/pull/3753)
*   **Threading Logic (#3738):** Fixed a bug where thread replies and files were landing in the main channel instead of the specific message thread of the message being answered. [View PR](https://github.com/nanocoai/nanoclaw/pull/3738)

## 4. Community Hot Topics
While there are no high-volume comment threads today, the following issue is critical for task automation:
*   **Task Recurrence Bug (#3705):** A user reported that `ncl tasks update --recurrence` fails to recompute the `process_after` timestamp. This means switching a task from weekly to daily leaves the task waiting for the next original weekly slot. [View Issue](https://github.com/nanocoai/nanoclaw/issue/3705)

## 5. Bugs & Stability
Several PRs are currently open to address pending stability and performance concerns:
*   **Memory/Performance Risk (#3755):** `sqliteGetPendingMessages` is currently filtering pending messages against `processing_ack` rows without a time bound. This could lead to performance degradation as the database grows. [Open Fix PR](https://github.com/nanocoai/nanoclaw/pull/3755)
*   **Setup Flow Confusion (#3754):** The "not-enrolled" browser handoff is printing redundant links, potentially confusing users about how to sign in from secondary devices. [Open Fix PR](https://github.com/nanocoai/nanoclaw/pull/3754)
*   **WhatsApp Integration (#3752):** A fix is proposed to ensure pending WhatsApp messages are correctly handled within the UI. [Open Fix PR](https://github.com/nanocoai/nanoclaw/pull/3752)

## 6. Feature Requests & Roadmap Signals
The current activity suggests a roadmap moving toward deeper cross-platform integration and reliability:
*   **Provider Contracts:** PR #3733 indicates ongoing work on standardizing provider contracts and host authentication, suggesting a move toward more robust multi-provider support. 
*   **Agent Runner Refinement:** The focus on `area/agent-runner` PRs suggests the team is optimizing how the agent handles long-running sessions and usage-based turn interruptions.

## 7. User Feedback Summary
*   **Pain Points:** Users are experiencing friction during the browser handoff process when not enrolled, and are seeking clearer messaging when usage limits are reached.
*   **Technical Frustration:** The failure to recompute task schedules (#3705) is a significant pain point for users relying on automated recurring tasks.

## 8. Backlog Watch
*   **Issue #3705 (Task Recurrence):** High priority. If users cannot reliably update schedules, the automation feature remains broken for power users.
*   **PR #3755 (Cleanup):** Medium priority. Needs to be merged to prevent potential slowdown as the `processing_ack` table grows over time.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest
**Date:** 2026-09-10

## 1. Today's Overview
IronClaw is experiencing high development activity today, with 6 new pull requests processed in the last 24 hours. The focus is heavily weighted toward refining the Model Context Protocol (MCP) implementation, specifically addressing complex issues with state management and caller attribution in hosted servers. While a new UI bug was reported in the webchat, the core architectural development shows a robust push toward making the agent's extension system more reliable for multi-user environments.

## 2. Releases
*No new releases reported in this period.*

## 3. Project Progress
Two pull requests were successfully closed/merged today, focusing on configuration reliability and package distribution:
*   **#8088 feat(common):** Distinguish a set-but-empty env var from an unset one. Fixed a logic error where empty environment variables were treated as unset, allowing for more precise deployment overrides. [Link](https://github.com/nearai/ironclaw/pull/8088)
*   **#8089 feat(extensions):** Bundle the agent-market hosted-MCP provider package. Added a first-party package for the agent-market provider to provide fallback tool declarations before live discovery. [Link](https://github.com/nearai/ironclaw/pull/8089)

## 4. Community Hot Topics
The community is currently focused on the nuances of the **Model Context Protocol (MCP)**:
*   **MCP Attribution (#8084):** A significant proposal to implement SEP-414 caller attribution on outbound hosted-MCP calls. This is critical for providers who need to track which conversation triggered a call or prevent double-charging for side-effecting retries. [Link](https://github.com/nearai/ironclaw/pull/8084)
*   **MCP Isolation (#8090):** A fix for tool-discovery catalogs. This addresses a bug where users were overwriting each other's tools because the registry was shared per extension ID rather than per caller. [Link](https://github.com/nearai/ironclaw/pull/8090)

## 5. Bugs & Stability
One new UI-related bug was reported today:
*   **#8091 bug(webchat-v2):** Enter sends the message while confirming IME composition. This is a regression affecting users using Input Method Editors (like Japanese or Chinese), where unfinished messages are submitted before the user finishes composing the text. [Link](https://github.com/nearai/ironclaw/issue/8091)
*   **#8085 fix(extensions):** An issue where operator-installed packages could be built but unusable due to an inconsistency between the manifest constructor and the validator regarding dynamic descriptor schemas. [Link](https://github.com/nearai/ironclaw/pull/8085)

## 6. Feature Requests & Roadmap Signals
The project is expanding its ecosystem through better integration with external platforms and improved extension management:
*   **Telegram Command Menu (#8072):** A feature to register the Telegram Bot API command menu (`/model`, `/status`, etc.) upon activation. This would significantly improve UX for Telegram-based users. [Link](https://github.com/nearai/ironclaw/pull/8072)

## 7. User Feedback Summary
*   **UX Friction:** Users are experiencing frustration with the WebChat v2 input handling, specifically regarding IME composition which leads to accidental message submissions.
*   **Developer Experience:** Developers building hosted-MCP servers are signaling a lack of context (conversation-level state) which limits their ability to implement stateful tools or billing-aware API calls.

## 8. Backlog Watch
*   **PR #8084 (Open):** High-priority feature for MCP attribution. This is vital for third-party providers managing multi-user environments.
*   **PR #8085 (Open):** Needs review to ensure operator-installed packages are fully functional.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest - 2026-09-10

## 1. Today's Overview
LobsterAI is currently experiencing high activity levels, primarily focused on resolving critical regressions introduced in the `OpenClaw v2026.8.1` upgrade. The development team is highly responsive, closing 11 pull requests in the last 24 hours to address stability issues related to IM synchronization (Discord/QQ) and configuration schema migrations. While the project shows strong momentum in evolving into an "AI Collaborator" platform, users are reporting performance bottlenecks regarding file system watching and UI freezes on Windows.

## 2. Releases
*No new releases reported in the last 24 hours.*

## 3. Project Progress
The team successfully closed 11 PRs today, focusing heavily on stabilizing the core OpenClaw engine and plugin integrations:
*   **Configuration & Migration:** Fixed issues where configuration synchronization caused lost IM settings or invalid schemas after the upgrade [#2633](https://github.com/netease-youdao/LobsterAI/pull/2633), [#2632](https://github.com/netease-youdao/LobsterAI/pull/2632), and [#2631](https://github.com/netease-youdao/LobsterAI/pull/2631).
*   **Plugin Stability:** Resolved a bug where the Discord plugin was rejected due to incorrect origin [#2637](https://github.com/netease-youdao/LobsterAI/pull/2637) and fixed QQ shutdown synchronization issues [#2634](https://github.com/netease-youdao/LobsterAI/pull/2634).
*   **UI/UX & Logic:** Fixed i18n issues where the "About" label failed to refresh on language switch [#2636](https://github.com/netease-youdao/LobsterAI/pull/2636) and prevented model selection from overwriting global defaults [#2640](https://github.com/netease-youdao/LobsterAI/pull/2640).
*   **Community:** Added LobsterAI to the TakoAPI directory [#2294](https://github.com/netease-youdao/LobsterAI/pull/2294).

## 4. Community Hot Topics
*   **The "AI Collaborator" Vision:** Users are pushing for LobsterAI to move from a toolset to a system-level orchestrator. There is significant discussion around integrating cross-model orchestration [#2180](https://github.com/netease-youdao/LobsterAI/issue/2180), [#2239](https://github.com/netease-youdao/LobsterAI/issue/2239).
*   **Memory Architecture:** A major proposal exists for a persistent Agent memory system to move beyond isolated session sessions, which currently requires manual user maintenance [#2046](https://github.com/netease-youdao/LobsterAI/issue/2046).
*   **Performance Bottlenecks:** Users are frustrated with the `skills.load.watch` feature, which causes high I/O and token waste when many skills are active [#2243](https://github.com/netease-youdao/LobsterAI/issue/2243).

## 5. Bugs & Stability
**Ranked by Severity:**
| Severity | Issue | Summary | Fix PR |
| :--- | :--- | :--- | :--- |
| **Critical** | [#2214](https://github.com/netease-youdao/LobsterAI/issue/2214) | Desktop data backup causes the main process to freeze/unresponsive on Windows. | None |
| **High** | [#2176](https://github.com/netease-youdao/LobsterAI/issue/2176) | Security: Automatic artifact loading allows local file reads via message paths. | None |
| **High** | [#2181](https://github.com/netease-youdao/LobsterAI/issue/2181) | Security: Unauthenticated local token proxy allows API replay attacks. | None |
| **Medium** | [#2216](https://github.com/netease-youdao/LobsterAI/issue/2216) | Memory Search embedding locked to OpenAI; cannot switch to local provider. | None |
| **Medium** | [#2079](https://github.com/netease-youdao/LobsterAI/issue/2079) | Execution result window freezes when scrolling to the top. | None |
| **Low** | [#2373](https://github.com/netease-youdao/LobsterAI/issue/2373) | Image attachments retain data-url when switching from vision to non-vision models. | None |

## 6. Feature Requests & Roadmap Signals
*   **MCP Support:** High demand for native Model Context Protocol (MCP) support for better ecosystem integration [#2239](https://github.com/netease-youdao/LobsterAI/issue/2239).
*   **Task Queuing:** Request to pre-input tasks while a task is currently running to improve continuity [#2120](https://github.com/netease-youdao/LobsterAI/issue/2120).
*   **Multi-Model Orchestration:** Requests for specific support like hermes agents [#2131](https://github.com/netease-youdao/LobsterAI/issue/2131).

## 7. User Feedback Summary
*   **Pain Points:** Users are struggling with "token waste" caused by duplicate outputs [#2121](https://github.com/netease-youdao/LobsterAI/issue/2121) and the performance overhead of the file-watching system.
*   **Use Cases:** The project is being used by "tech-savvy non-elite programmers" for automated workflows and cross-platform IM management (QQ/Discord).
*   **Satisfaction:** High interest in the "OpenClaw" direction, but dissatisfaction with the current stability of the desktop client's backup and sync features.

## 8. Backlog Watch
*   **[2215](https://github.com/netease-youdao/LobsterAI/issue/2215):** Persistent installation failure ("Resource extraction failed") that remains a major blocker for new users.
*   **[2230](https://github.com/netease-youdao/LobsterAI/issue/2230):** Performance comparison showing LobsterAI is significantly slower than CodeBuddy (25m vs 24s for the same task).
*   **[2158](https://github.com/netease-youdao/LobsterAI/pull/2358):** Open PR to provide localized feedback when session renames fail—needs final review.

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

# CoPaw Project Digest: September 10, 2026

## 1. Today's Overview
CoPaw is currently experiencing high activity with 34 PRs updated and 22 issues addressed in the last 24 hours. The project is heavily focused on stabilizing the v2.2.0 release, specifically addressing critical UI regressions, database integrity issues, and cross-platform synchronization bugs. While there is significant progress in modularizing memory backends into plugins and enhancing MCP support, users are reporting frustrating friction points regarding "transparent" UI elements in the web frontend and silent rollbacks of the local `llama.cpp` runtime.

## 2. Releases
*No new releases reported in the last 24 hours.*

## 3. Project Progress
The team has been actively merging code, with 8 PRs merged or closed today. Key highlights include:
*   **Skill Management:** PR #7609 was merged to expose skill versions and validate dependencies, improving the reliability of the app/skill marketplace.
*   **MCP Optimization:** PR #7649 was merged to allow configurable timeouts for HTTP/SSE clients, preventing long-running requests from hanging the interface.
*   **Architecture Refactoring:** PR #7616 is under final review, marking a major shift toward moving `ADBPG` and `PowerContext` into independent plugins to decouple the core.

## 4. Community Hot Topics
*   **Advisor Mode (PR #7569):** A highly-anticipated proposal introducing a loop-mode that pairs a strong "advisor" model with a cheaper "worker" agent. This reflects a growing interest in cost-efficient multi-agent orchestration.
*   **Mobile Expansion (PR #7378):** A major draft for a native iOS/Android experience using Expo/React Native. This indicates CoPaw is moving beyond a desktop-first tool to a truly ubiquitous personal assistant.
*   **Durable Memory (Issue #7556):** Users are pushing for the ability to persist routines and preferences across sessions and restarts, a core requirement for a long-term "personal AI" utility.

## 5. Bugs & Stability
Several critical issues are currently impacting user experience:
*   **[Critical] Event Loop Freeze (Issue #7363):** Synchronous calls are blocking the event loop, causing the UI to freeze for up to 135s during startup and message sending.
*   **[High] Silent Runtime Rollback (Issue #7633):** Users report that manually upgrading `llama.cpp` to nightly builds results in the system silently reverting to an older snapshot due to version-string parsing failures.
*   **[High] UI Regression (Issue #7622):** In v2.2.0, modal dialogs in the web frontend lack a background overlay, making the background content visible and visually confusing.
*   **[Medium] Chrome Rendering Bug (Issue #7642):** Streaming fails to render in Chrome until the turn completes, though it works correctly in Safari.
*   **[Medium] Database Corruption (Issue #7596):** FTS (full-text search) corruption in `history.db` is preventing the retention purge (cleanup) tasks from running.

## 6. Feature Requests & Roadmap Signals
*   **Traffic Light (Issue #7600):** A request for a visual indicator to show when an agent is processing, helping users who switch windows frequently.
*   **ntfy Integration (Issue #7657):** A request for native `ntfy.sh` support to push task results to mobile devices easily.
*   **Custom Tab Titles (Issue #7648):** Users want the ability to name browser tabs to distinguish between multiple active projects (currently all labeled "CoPaw Console").
*   **Context Compaction (Issue #7628):** Request to base context compaction triggers on the *entire* sent request budget rather than just the visible chat window.

## 7. User Feedback Summary
*   **Mobile UX Friction:** Users find the current web-based deployment UI difficult to use on mobile, specifically noting that "Open" buttons are placed inconveniently near "Stop" buttons (Issue #7177).
*   **Workflow Interruption:** There is frustration that v2.2.0 removed the ability to manually edit paths for working directories, forcing users through tedious multi-level folder navigation (Issue #7601).
*   **Design Inconsistency:** Developers have noted a mismatch between the configured CSS prefix (`qwenpaw-`) and existing global stylesheets still using `ant-`, leading to broken styles (Issue #5688).

## 8. Backlog Watch
*   **Issue #7363:** The event loop blocking is a high-priority performance fix needed for desktop usability.
*   **Issue #7633:** The broken `llama.cpp` version parser needs a fix to stop power users from using the latest models.
*   **PR #7057:** Adding user-local bin directories to the subprocess `PATH` is essential for users running CoPaw as a service or in Docker.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest
**Date:** 2026-09-10

### 1. Today's Overview
ZeptoClaw remains in a state of low activity with no merged pull requests or new releases recorded in the last 24 hours. While the project is currently quiet, a new high-level issue indicates community interest in expanding the provider ecosystem. The project continues to maintain its core value proposition: a highly optimized, Rust-based binary with sub-50ms startup times, positioning it as a niche for lightweight personal AI agents.

### 2. Releases
*No new releases have been issued in this period.*

### 3. Project Progress
*No pull requests were merged or closed in the last 24 hours.*

### 4. Community Hot Topics
*   **[#675 [OPEN] OrcaRouter provider support for ZeptoClaw](https://github.com/qhkm/zeptoclaw/issues/675)**
    *   **Analysis:** This is the current focal point of community discussion. The request for OrcaRouter support suggests a growing demand for more flexible model routing and provider abstraction. The user highlights the "tension" in personal AI assistants—balancing feature richness (tools, memory, autonomy) with the extreme footprint constraints that ZeptoClaw targets.

### 5. Bugs & Stability
*No new bugs, crashes, or regressions were reported in the last 24 hours.*

### 6. Feature Requests & Roadmap Signals
* **Provider Expansion:** The request for OrcaRouter indicates a potential roadmap shift toward supporting more diverse LLM gateways and routing-layers.
* **Optimization Focus:** Community feedback reinforces that the project is valued for its "sandboxed autonomy" and small binary size, suggesting that future updates will likely prioritize maintaining these performance metrics over adding heavy-weight dependencies.

### 7. User Feedback Summary
The feedback provided in the latest issue reflects a high level of appreciation for ZeptoClaw's unique selling point: the ability to run a ~6MB Rust binary in environments where container runtimes are unavailable. Users are looking for a "lean" alternative to bloated agent frameworks that do not sacrifice agentic capabilities for efficiency.

### 8. Backlog Watch
* **[#675 - OrcaRouter provider support](https://github.com/qhkm/zeptoclaw/issues/675):** Needs maintainer attention to determine if integrating OrcaRouter aligns with the project's minimalist-footprint philosophy.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest: 2026-09-10

## 1. Today's Overview
ZeroClaw is currently experiencing a period of intense architectural activity, characterized by a high volume of updates (50 PRs and 37 issues in the last 24 hours). While no new releases were deployed today, the project is deeply engaged in foundational RFC (Request for Comments) processes aimed at refining runtime architecture, security sandboxing, and session management. The activity level is high, though the high ratio of open-to-merged PRs suggests a bottleneck typical of projects undergoing significant structural evolution.

## 2. Releases
*No new releases were recorded in the last 24 hours.*

## 3. Project Progress
Only one Pull Request was merged/closed in the last 24 hours. The majority of development effort is currently concentrated in "in-progress" features and large-scale architectural RFCs rather than rapid-fire bug fixes.

## 4. Community Hot Topics
The community is currently focused on high-level design decisions and complex technical RFCs:
*   **[RFC #9487: Runtime-owned conversation sessions](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)** (36 comments): A material replacement of previous proposals regarding how sessions and transport adapters are handled. This is the most active discussion in the repository.
*   **[RFC #9488: Unified file and attachment architecture](https://github.com/zeroclaw-labs/zeroclaw/issues/9488)** (29 comments): A critical proposal to standardize how the agent handles files across different conversation surfaces.
*   **[RFC #6996: Granular sandbox policy - filesystem restrictions](https://github.com/zeroclaw-labs/zeroclaw/issues/6996)** (28 comments): Addressing the security drift between application-layer path admission and OS-level sandboxing (Bubblewrap, Landlock).
*   **[RFC #10076: Composable WASM plugin runtime](https://github.com/zeroclaw-labs/zeroclaw/issues/10076)** (12 comments): A move toward a more modular WASM-based extension architecture.

## 5. Bugs & Stability
Several high and medium-priority bugs are being actively addressed or tracked:
*   **[High] #9816: Anthropic provider reports $0.00 spend](https://github.com/zeroclaw-labs/zeroclaw/issues/9816)**: A critical bug where cost tracking fails, preventing daily/monthly budget caps from triggering.
*   **[High] #10697: ZeroCode ACP transcript drops assistant text](https://github.com/zeroclaw-labs/zeroclaw/issues/10697)**: A UI/UX bug where text produced before a tool call vanishes from the transcript.
*   **[Medium] #10625: Internal [media attachment] placeholder for non-vision models](https://github.com/zeroclaw-labs/zeroclaw/issues/10625)**: Degraded behavior where text-only models receive literal markers.
*   **[Medium] #10220: Agent responses render twice in chat pane](https://github.com/zeroclaw-labs/zeroclaw/issues/10220)**: A visual bug where results and explanations are duplicated after quizzes.

## 6. Feature Requests & Roadmap Signals
The following features indicate the direction of the next major development cycles:
*   **Multi-Model Support:** [PR #9809: Support multiple models per provider profile](https://github.com/zeroclaw-labs/zeroclaw/pr/9809) allows a single credential set to host multiple models with individual tuning.
*   **Context Management:** [PR #9535: Anchor context compaction to model ratio](https://github.com/zeroclaw-labs/zeroclaw/pr/9535) moves away from fixed 32k token budgets to a dynamic ratio based on the selected model's window.
*   **UI Enhancements:** [Issue #9730: Agent sidebar with status-picker](https://github.com/zeroclaw-labs/zeroclaw/issues/9730) signals a major overhaul of how the ZeroCode interface manages concurrent sessions.

## 7. User Feedback Summary
*   **Security Concerns:** There is clear feedback regarding the "drift" between internal security policies and OS sandboxes (RFC #6996), indicating users want a more unified security model.
*   **Operational Friction:** Users are finding the current RFC process slow; [Issue #10549] suggests a need to simplify voting by removing mandatory waiting windows.
*   **Observability Issues:** The failure to track costs correctly for Anthropic (Issue #9816) is a significant pain point for users operating on strict API budgets.

## 8. Backlog Watch
The following items require urgent maintainer attention to prevent stagnation:
*   **[Issue #8692] Maintainer decision queue:** A tracker to manage the influx of RFCs and design issues currently overwhelming the team.
*   **[PR #10442] Keep OpenRouter streams alive:** A critical fix for a popular provider that is currently prone to timeouts.
*   **[Issue #10277] Pin zerorelay image tags by digest:** A security and stability follow-up to stop using mutable Docker tags in CI.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*