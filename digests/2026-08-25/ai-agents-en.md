# OpenClaw Ecosystem Digest 2026-08-25

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-24 22:15 UTC

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

# OpenClaw Project Digest — 2026-08-25

## 1. Today's Overview

OpenClaw shows very high activity on 2026-08-25, with 500 issues updated in the last 24 hours (474 open, 26 closed) and 500 PRs touched (425 open, 75 merged/closed). One new beta release was published (`v2026.8.1-beta.3`), extending GPT-5.6 Sol/Terra/Luna/Ultra reasoning support and adding Puppeteer-compatible CDP relay for paired Chrome sessions. The backlog skews heavily toward P1 reliability defects across chat channels (Feishu, Telegram, QQBot, Discord) and multi-agent orchestration rather than new feature work. Issue closure velocity (~5%) is below update velocity, suggesting the queue is still growing — typical for a beta-cycle sprint but worth monitoring.

## 2. Releases

**v2026.8.1-beta.3** (2026-08-25) — Highlights:
- **Model support:** GPT-5.6 Sol, Terra, Luna, and Ultra reasoning across OpenClaw and the Codex runtime.
- **Control UI:** First-run setup now continues verified model setup into Custodian and optional channel setup.
- **Browser automation:** Puppeteer-compatible CDP relay support for paired Chrome sessions (closes the gap with the remote extension pairing flow).
- **Extension handling:** Explicit ext… (truncated in source — likely explicit extension trust/config behavior).

No explicit breaking-change notes in the changelog excerpt, but the QQBot beta migration in `2026.8.1-beta.2` (`#124166`) and Feishu dispatch breakage in `2026.7.2-beta.4` (`#114020`) suggest migration steps are required when jumping beta branches. Operators on `2026.7.x` should review channel-specific release notes before upgrading to `2026.8.1-beta.x`.

## 3. Project Progress

PRs merged/closed in the last 24h (75 total) include several high-impact items now ready or in maintainer review:

- **[#126424](https://github.com/openclaw/openclaw/pull/126424)** — *fix(gateway): keep conversation delivery within agent bindings* — multi-agent operators could discover cross-agent leakage via conversation tools; this closes that path across Discord/iMessage/Matrix/Mattermost/Slack/Telegram/Feishu.
- **[#125471](https://github.com/openclaw/openclaw/pull/125471)** — *fix(models): keep Claude CLI OAuth available in Control UI* — restored Claude CLI OAuth refresh ownership after gateway restart.
- **[#120900](https://github.com/openclaw/openclaw/pull/120900)** — *feat(ui): review install policy warnings* — admin-gated install acknowledgement for suspicious plugins/skills.
- **[#116489](https://github.com/openclaw/openclaw/pull/116489)** — *feat(security): require acknowledgement for install policy warnings* — CLI counterpart for the above.
- **[#123975](https://github.com/openclaw/openclaw/pull/123975)** — *fix(scripts): clean up tsgo process trees on timeout/signal* — managed-process owner for `tsgo` with `OPENCLAW_TSGO_TIMEOUT_MS` watchdog.
- **[#128371](https://github.com/openclaw/openclaw/pull/128371)** — *fix(release): authorize focused beta evidence* — unblocks beta.3 release validation by relaxing the all-group Full Release Validation gate.

Overall, today's merge profile is reliability- and security-oriented: OAuth refresh, install policy, cross-agent binding, and CI/release hygiene dominated, while new user-facing features (multi-bot MS Teams, session pinning, Android Threads hierarchy) remain in the queue awaiting proof.

## 4. Community Hot Topics

The most-commented issues and PRs cluster around three themes: **delivery loss**, **multi-agent orchestration**, and **channel-specific regressions**.

**Top issues by comment count:**

1. [#119796](https://github.com/openclaw/openclaw/issues/119796) — Windows vitest teardown `EBUSY` on `openclaw-agent.sqlite` (15 comments). Persistent file-handle leak under Windows test teardown; the SQLite handle is not released before unlink. A real cross-platform CI pain point.
2. [#67777](https://github.com/openclaw/openclaw/issues/67777) — Subagent completion delivery loss on direct-announce timeout (12 comments, *diamond lobster*). Synchronous direct announce can fail under busy-lane/drain/orphan conditions with no fallback persistence — a fundamental reliability gap for subagent workflows.
3. [#6757](https://github.com/openclaw/openclaw/issues/6757) — Agent-triggered context compaction (self-compact tool) (9 comments). Agents want first-class compaction control rather than relying on the `/compact` command.
4. [#97616](https://github.com/openclaw/openclaw/issues/97616) — Leaked unreaped hook/tool child processes (9 comments, regression). Zombie `openclaw-hooks`, `bash`, `codex` accumulate and degrade runtime — closely related to [#86119](#bugs--stability).
5. [#10687](https://github.com/openclaw/openclaw/issues/10687) — Fully dynamic model discovery (OpenRouter + beyond) (9 comments). Maintainer-tagged; asks for a runtime-discoverable model catalog instead of the static `pi-ai/models.generated` plus `models.json` overrides.
6. [#114020](https://github.com/openclaw/openclaw/issues/114020) — Feishu/Telegram dispatch fails after `2026.7.2-beta.4` (8 comments). `runChannelInboundEvent` requires `runDispatchLifecycle` — a real regression breaking both channels.
7. [#45508](https://github.com/openclaw/openclaw/issues/45508) — Self-hosted STT/TTS in webchat (8 comments). Webchat bypasses `openclaw.json` STT/TTS config; users with self-hosted voice want gateway-routed audio.
8. [#97680](https://github.com/openclaw/openclaw/issues/97680) — Beta-tagged update leaves external plugins on `latest` (8 comments). Plugin resolution doesn't honor the requested beta tag — undermines upgrade reproducibility.

**Top PRs by comment count** (most show undefined comment fields, indicating recent bot/maintainer activity):

- [#128804](https://github.com/openclaw/openclaw/pull/128804) — *gate agent initial command on shell-readiness handoff* — terminal race between PTY spawn and login-shell profile sourcing.
- [#128882](https://github.com/openclaw/openclaw/pull/128882) — *fix(deepseek): doubled-bar DSML tool calls delivered as text*.
- [#112754](https://github.com/openclaw/openclaw/pull/112754) — *fix(install): fail closed on missing git tags, never silent-downgrade*.
- [#128802](https://github.com/openclaw/openclaw/pull/128802) — *fix(auth): Claude CLI login reported as expired on idle gateway*.
- [#126013](https://github.com/openclaw/openclaw/pull/126013) — *fix(ui): New Session misses dynamically discovered models* — directly addresses [#10687](#community-hot-topics).

**Underlying needs:**
- A durable, asynchronous delivery path for subagent completions and channel-bound messages (no synchronous-only paths).
- Cross-channel contract stability — every beta seems to break a different channel's dispatch contract.
- Pluggable model discovery that matches real-world provider catalog churn (OpenRouter, custom providers).
- Cross-platform test hygiene (Windows file locking, zsh interactive-mode quirks).

## 5. Bugs & Stability

Today's open bug surface is dominated by P1 regressions and stability defects in the message-delivery and persistence stack.

**Critical / P1 with data or message loss:**

- **[#67777](https://github.com/openclaw/openclaw/issues/67777)** — *diamond lobster* — subagent completion lost on direct-announce timeout. **No PR linked.**
- **[#97616](https://github.com/openclaw/openclaw/issues/97616)** — *platinum hermit, regression* — zombie hook/tool child processes. **No PR linked.**
- **[#114020](https://github.com/openclaw/openclaw/issues/114020)** — *diamond lobster* — Feishu/Telegram dispatch regression in `2026.7.2-beta.4`. **No PR linked** — and the PR-side contract `runDispatchLifecycle` is the obvious fix target.
- **[#125570](https://github.com/openclaw/openclaw/issues/125570)** — *diamond lobster, data-loss* — Skill Workshop `update` overwrites live `description` frontmatter, silently breaking skill routing. **No PR linked.**
- **[#77685](https://github.com/openclaw/openclaw/issues/77685)** — *diamond lobster* — Feishu streaming card loses final text / shows stale or duplicated content. **No PR linked.**
- **[#112259](https://github.com/openclaw/openclaw/issues/112259)** — *platinum hermit, message-loss* — zero-payload dispatch silently discards inbound turns. **No PR linked.**
- **[#124166](https://github.com/openclaw/openclaw/issues/124166)** — *diamond lobster* — `2026.8.1-beta.2` QQBot migration emits contradictory DM warning and leaves legacy plugin untrusted. **No PR linked.**
- **[#93917](https://github.com/openclaw/openclaw/issues/93917)** — *diamond lobster, crash-loop* — `genericRepeat` circuit-breaker never fires when exec results vary slightly. **No PR linked** in today's snapshot, but bug is reproducible.
- **[#126246](https://github.com/openclaw/openclaw/issues/126246)** — *platinum hermit, message-loss* — Telegram durable outbound stuck in `send_attempt_started`, lost on restart. **No PR linked.**
- **[#126906](https://github.com/openclaw/openclaw/issues/126906)** — *diamond lobster, data-loss* — denying the `write` tool silently disables memory persistence; agent reports success anyway. **No PR linked.**
- **[#126631](https://github.com/openclaw/openclaw/issues/126631)** — *diamond lobster* — sandbox skills bind-mount creates root-owned `/workspace/.openclaw`, locking out uid 1000. **No PR linked.**
- **[#111944](https://github.com/openclaw/openclaw/issues/111944)** — *gold shrimp, regression* — Codex commentary not delivered to Telegram progress/block streaming. **No PR linked.**
- **[#128156](https://github.com/openclaw/openclaw/issues/128156)** — *diamond lobster, crash-loop* — gateway event-loop stalls 60–200s, 76% of stall time is log redaction `replacePatternBounded`. **No PR linked.**
- **[#125635](https://github.com/openclaw/openclaw/issues/125635)** — *diamond lobster* — TUI `/auth` wizard exits 1 with no diagnostics. **No PR linked.**
- **[#113318](https://github.com/openclaw/openclaw/issues/113318)** — *platinum hermit* — `/v1/responses` client tools dropped by native Codex app-server harness. **No PR linked.**
- **[#127728](https://github.com/openclaw/openclaw/issues/127728)** — *diamond lobster* — remote extension pairing rejects `browser.request` ~10ms after starting the relay, before the extension attaches. **No PR linked.**
- **[#126458](https://github.com/openclaw/openclaw/issues/126458)** — *platinum hermit* — custom `openai-completions` missing `maxTokens` defaults to 8192, truncating tool-call JSON. **No PR linked.**
- **[#126521](https://github.com/openclaw/openclaw/issues/126521)** — *diamond lobster* — exec tool spawns `$SHELL` zsh interactively; `echo ===` fails with `== not found`. **No PR linked.**
- **[#127287](https://github.com/openclaw/openclaw/issues/127287)** — *platinum hermit* — GitHub Copilot `copilot-developer-cli` integration-id breaks GHE `*.ghe.com` data-residency tenants. **No PR linked** — needs config escape hatch.
- **[#126900](https://github.com/openclaw/openclaw/openclaw/issues/126900)** — *diamond lobster* — `maxActiveTranscriptBytes` loops compaction forever when post-compaction size stays above threshold. **No PR linked.**
- **[#73478](https://github.com/openclaw/openclaw/issues/73478)** — *diamond lobster* — `openclaw gateway` websocket does not emit image info. **No PR linked.**
- **[#107707](https://github.com/openclaw/openclaw/issues/107707)** — *P0, diamond lobster, data-loss* — Skill Workshop Apply overwrites `SKILL.md` with proposal text verbatim. **No PR linked.**
- **[#108520](https://github.com/openclaw/openclaw/issues/108520)** — *P0, silver shellfish* — iOS app auto-update breaks Talk Mode and chat; gateway connects but no functionality. **No PR linked.**

**P1 with linked PRs (mitigation in flight):**

- **[#128067](https://github.com/openclaw/openclaw/issues/128067)** — beta.7 field report: six reliability defect classes (persistence, delivery, restart-recovery) over 3 weeks in a 6-agent gateway. Aggregate report — likely ties into several of the above.
- **[#99071](https://github.com/openclaw/openclaw/issues/99071)** — repeated Codex Apps plugin discovery causing disk I/O storms. **No PR linked** in snapshot.
- **[#86119](https://github.com/openclaw/openclaw/issues/86119)** — orphaned `node server.js` worker processes after subagent/cron embedded runs (init:tini Docker). **No PR linked.**
- **[#125838](https://github.com/openclaw/openclaw/issues/125838)** — QQBot slash-command lightweight replies (`/think`, `/status`) not delivered. **No PR linked.**

**Severity summary:** Of the 22+ P1 bugs above, only a handful have an associated fix PR today. The dominant defect class is **silent message loss** across channels (Feishu, Telegram, QQBot, Discord/iMessage), followed by **persistence/compaction loops** and **process reaping**. The P0 issues (#108520 iOS breakage, #107707 Skill Workshop data loss) are the highest blast-radius items.

## 6. Feature Requests & Roadmap Signals

The most-requested and highest-leverage features in today's data:

- **Agent-triggered self-compaction** ([#6757](https://github.com/openclaw/openclaw/issues/6757)) — agents want compaction as a first-class tool, not a slash command. Likely to land as a `self_compact` tool once `runDispatchLifecycle` patterns stabilize.
- **Fully dynamic model discovery** ([#10687](https://github.com/openclaw/openclaw/issues/10687), maintainer-tagged) — provider-driven catalogs for OpenRouter et al. Already partially addressed by [#126013](https://github.com/openclaw/openclaw/pull/126013) (Control UI side); expect the provider-side contract to land in a future beta.
- **Model fallback on context overflow** ([#9986](https://github.com/openclaw/openclaw/issues/9986)) — `fallbacks` config currently only triggers on API errors, not on context length. Logical companion to dynamic model discovery.
- **Self-hosted STT/TTS in webchat** ([#45508](https://github.com/openclaw/openclaw/issues/45508)) — route webchat voice through the gateway instead of browser Speech APIs. Plumbed via [#89636](https://github.com/openclaw/openclaw/pull/89636) (persona-level TTS SecretRefs).
- **OAuth token refresh retry** ([#8673](https://github.com/openclaw/openclaw/issues/8673)) — straightforward reliability improvement; should be a quick win.
- **Human-readable Telegram topic names** ([#7406](https://github.com/openclaw/openclaw/issues/7406)) — UX polish, low effort.
- **Pace-aware rate limiting for autonomous agents** ([#45771](https://github.com/openclaw/openclaw/issues/4577)) — burn-rate awareness for subagent loops; aligns with [#67777](#bugs--stability) subagent completion work.
- **Decouple `mode="session"` from thread binding** ([#53548](https://github.com/openclaw/openclaw/issues/53548)) — ACP session flexibility; 3 👍 signals real demand.
- **Multi-account MS Teams** ([#112811](https://github.com/openclaw/openclaw/pull/112811)) — already a draft PR with showcase proof.
- **Android chat-first surface** ([#46058](https://github.com/openclaw/openclaw/issues/46058)) — discussion-only; maintainer triage pending.
- **Prune stale orphaned sessions in Dashboard** ([#49259](https://github.com/openclaw/openclaw/issues/49259)) — small, useful.
- **Configurable thinking/reasoning block format per channel** ([#8913](https://github.com/openclaw/openclaw/issues/8913)) — formatting UX.
- **Bulk operations on Control UI for multi-agent** ([#52803](https://github.com/openclaw/openclaw/issues/52803)) — needed once fleet size grows past ~6 agents.

**Predictions for next version (`2026.8.1-beta.4` or `2026.8.1` RC):**
- Dynamic model discovery completion (PR [#126013](https://github.com/openclaw/openclaw/pull/126013) and dependent [#128863](https://github.com/openclaw/openclaw/pull/128863)).
- Subagent completion durability fix ([#67777](https://github.com/openclaw/openclaw/issues/67777)) — too central to ship another beta without it.
- Channel dispatch lifecycle enforcement to address the Feishu/Telegram regressions ([#114020](https://github.com/openclaw/openclaw/issues/114020)).
- Sandbox bind-mount UID handling ([#126631](https://github.com/openclaw/openclaw/issues/126631)) — likely a security-adjacent hotfix.
- Process-reaping fixes for hook/tool and `node server.js` leaks ([#97616](https://github.com/openclaw/openclaw/issues/97616), [#86119](https://github.com/openclaw/openclaw/issues/86119)) — these have been open long enough that a coordinated fix is overdue.

## 7. User Feedback Summary

**Pain points (concrete, reproducible):**

- **Multi-agent reliability is the #1 frustration.** A 3-week field report ([#128067](https://github.com/openclaw/openclaw/issues/128067)) enumerates six defect classes in a 6-agent gateway: persistence, delivery, and restart-recovery. Operationally, fleets of 3+ agents are still not stable.
- **Channel integrations break every beta.** Feishu ([#114020](https://github.com/openclaw/openclaw/issues/114020),

---

## Cross-Ecosystem Comparison

**Ecosystem Overview**  
The open‑source personal‑AI‑assistant/agent landscape in 2026 remains fragmented but vibrant: a handful of projects (OpenClaw, NanoClaw, CoPaw, ZeroClaw, Moltis) are driving rapid feature and reliability work, while several others (NanoBot, Hermes Agent, IronClaw, LobsterAI) focus on incremental hardening and UX polish. A long tail of smaller repos (PicoClaw, NullClaw, ZeptoClaw, TinyClaw) shows sporadic maintenance or dormancy. Across the board, the most pressing community concerns are reliable message delivery, cross‑channel stability, observable telemetry, and smoother self‑hosted/configurable integrations.

---

### Activity Comparison (last 24 h)

| Project | Issues Updated | PRs Updated | New Release? | Health Score* |
|---------|----------------|------------|--------------|---------------|
| **OpenClaw** | 500 (474 open, 26 closed) | 500 (425 open, 75 merged/closed) | **v2026.8.1‑beta.3** | **Medium‑High** (very high throughput but growing P1 bug backlog) |
| **NanoBot** | 8 | 26 | – | **High** (steady PR merges, test hardening) |
| **Hermes Agent** | 50 (40 open, 10 closed) | 50 (40 open, 10 merged/closed) | – | **Medium** (infrastructure progress offset by P1 crash & desktop bugs) |
| **PicoClaw** | 2 | 3 | – | **Low‑Medium** (maintenance mode, stale PRs) |
| **NanoClaw** | 3 (2 new bugs, 1 closed) | 19 | **v2.3.0** | **High** (brisk engineering, modest community chatter) |
| **NullClaw** | 2 (open) | 1 (Dependabot) | – | **Low‑Medium** (quiet but dependency upkeep) |
| **IronClaw** | 22 (13 open, 9 closed) | 30 (15 open, 15 merged/closed) | – | **Medium‑High** (healthy CI/feature cadence) |
| **LobsterAI** | – (not reported) | 10 (merged/closed) | – | **Medium‑High** (strong UI/core velocity, config debt) |
| **TinyClaw** | 0 | 0 | – | **Low** (no activity) |
| **Moltis** | 2 (closed) | 19 | **20260824.01** | **High** (stabilisation burst) |
| **CoPaw** | 50 | 46 | **v2.1.1‑beta.2** | **High** (active beta stabilisation, high engagement) |
| **ZeptoClaw** | 1 (opened) | 0 | – | **Low** (minimal activity) |
| **ZeroClaw** | 50 (43 open, 7 closed) | 50 (45 open) | – | **High** (sustained security‑hardening push) |

\*Health Score is a qualitative synthesis of update velocity, merge/close ratio, release flow, and prevailing stability concerns (high = active & healthy; medium = mixed; low = stagnant or strained).

---

### OpenClaw’s Position  

*Advantages* – OpenClaw dwarfs peers in raw update volume (≈10× the next‑busiest project) and ships frequent beta releases, indicating a rapid iteration cycle and a large contributor base. Its recent beta adds GPT‑5.6 reasoning, Puppeteer‑compatible CDP relay, and refined first‑run UX, positioning it at the frontier of model‑support breadth and browser‑automation integration.  

*Technical Approach Differences* – While many projects (NanoBot, IronClaw, Moltis) emphasize incremental reliability and provider‑usage telemetry, OpenClaw’s current sprint is heavily weighted toward **cross‑agent isolation** and **channel‑dispatch contracts** (e.g., fixing conversation‑leakage, enforcing `runDispatchLifecycle`). Its architecture treats each channel as a first‑class binding surface, leading to a proliferation of channel‑specific P1 bugs that other repos experience less frequently.  

*Community Size* – The sheer number of issues/PR updates (500 + 500) suggests OpenClaw hosts the largest active contributor pool in the snapshot; most other projects stay under 100 combined updates. However, the high open‑to‑closed ratio (~95 % open) signals that the community is still triaging a growing backlog, a symptom of scale rather than disengagement.

---

### Shared Technical Focus Areas  

| Focus Area | Projects Highlighting Need | Concrete Signals |
|------------|---------------------------|------------------|
| **Reliable message/delivery persistence** | OpenClaw (#67777, #114020, #126246), Hermes Agent (desktop session‑restore bugs), NanoClaw (macOS updater/DB segfault), ZeroClaw (provider fallback logging) | Sub‑agent completion loss, channel‑dispatch regression, zombie processes, silent drops |
| **Cross‑channel contract stability** | OpenClaw (Feishu/Telegram/QQBot regressions), Hermes Agent (session‑identity leaks), CoPaw (cross‑session message routing) | Need for `runDispatchLifecycle`‑style guarantees, session‑id freezing |
| **Observable telemetry & usage accounting** | NanoBot (typed LLMUsage contract, unified backend), IronClaw (evidence‑based automation outcomes), ZeroClaw (provider‑dispatch collector) | Unified usage rows, deterministic run‑outcome collection, provider‑level accounting |
| **Self‑hosted / configurable third‑party services** | NullClaw (Firecrawl endpoint), LobsterAI (model context/skill path config), ZeroClaw (Chat Completions RFC) | Requests to expose API endpoints, make model limits tunable, enable OpenAI‑protocol compatibility |
| **Process reaping / resource hygiene** | OpenClaw (#97616, #86119), Hermes Agent (terminal descendant sweep), NanoClaw (macOS tmpdir symlink) | Zombie hook/tool processes, orphaned node workers, tmpdir symlink handling |
| **UI/UX polish for non‑technical users** | PicoClaw (WebUI roadmap), LobsterAI (thumbnail/artifact UX), CoPaw (session status cards, token‑usage chart) | Browser‑based management, richer preview components, onboarding wizards |

---

### Differentiation Analysis  

| Dimension | OpenClaw | NanoBot | Hermes Agent | PicoClaw | NanoClaw | NullClaw | IronClaw | LobsterAI | Moltis | CoPaw | ZeptoClaw | ZeroClaw |
|-----------|----------|---------|--------------|----------|----------|----------|----------|-----------|--------|-------|-----------|----------|
| **Primary Target** | Multi‑agent, multi‑channel orchestration (enterprise‑scale dev teams) | Lightweight personal assistant with modular providers | Desktop‑first agent with strong skills/Kanban UI | Embedded agent for IoT/edge (TUI‑centric) | Agent framework with pluggable channels (Mattermost, Apple Container) | Minimalist core + extensible tooling (self‑host focus) | Enterprise‑grade automation platform (suggestions, automations) | End‑user facing AI client (rich UI, plugin ecosystem) | Integrated ops platform (heartbeat, TTS, sandbox) | Agent‑team collaboration & multi‑step planning | Security‑hardened, protocol‑compatible backbone (OpenAI‑Chat‑Completions aim) |
| **Architecture Emphasis** | Central gateway + channel bindings; heavy focus on isolation contracts | Provider‑usage normalisation + conditional triggers | Unified deadline layer + session‑state persistence | Simple core + optional WebUI | Driver‑seam architecture (container, session) + per‑agent Slack apps | Minimal core + dependency‑driven Docker images | Modular UI + automation evidence pipeline | Renderer‑centric library + coworking/artifact system | Heartbeat‑driven scheduler + TTS/provider normalization | REPL usability + minimal core | Dispatch‑layer reliability + provider accounting + Chat Completions façade |
| **Release Cadence** | Frequent betas (weekly‑ish) | No release in window; steady PR flow | No release; infrastructure work | No release; maintenance | Major v2.3.0 shipped | No release; dependency bumps | No release; CI/feature polish | No release; UI/artifact burst | Patch release (20260824.01) | Beta v2.1.1‑beta.2 | No release; hardening sprint | No release; security focus |
| **Community Signal Strength** | Very high volume, growing bug backlog | Strong PR merge rate, test improvements | Active but strained; P1 crash dominates | Low‑modest engagement; WebUI demand | Focused macOS reliability pushes | Minimal but actionable UX bugs | Healthy CI/feature balance | High UI velocity, config debt | Stabilisation burst | High engagement on multi‑agent UX | Minimal activity; UX hardening request | High security/observability drive |

---

### Community Momentum & Maturity  

| Tier | Projects (activity & stability) | Interpretation |
|------|--------------------------------|----------------|
| **Rapid Iterators** | OpenClaw, NanoClaw, CoPaw, ZeroClaw, Moltis | High PR/issue velocity, frequent releases or release candidates; still in beta/feature‑expansion phase. |
| **Steady Hardeners** | NanoBot, Hermes Agent, IronClaw, LobsterAI | Consistent PR merges, focus on reliability, telemetry, and UX polish; fewer releases but solid incremental progress. |
| **Maintenance/Low‑Activity** | PicoClaw, NullClaw, ZeptoClaw, TinyClaw | Sporadic updates, mostly dependency bumps or isolated bug fixes; limited feature momentum. |
| **Stabilising** | Moltis (post‑release stabilisation), IronClaw (CI/feature balance) | Recent releases followed by bug‑fix sweeps; moving toward maturity. |

OpenClaw sits in the **Rapid Iterators** tier but shows early signs of strain — its backlog growth outpaces closure velocity, a common symptom when feature velocity overtakes stability investment.

---

### Trend Signals for AI Agent Developers  

1. **Reliability‑First Messaging** – Across OpenClaw, Hermes Agent, ZeroClaw, and NanoClaw, the top‑rated bugs concern *silent message loss* and *dispatch contract violations*. Developers should prioritize asynchronous, idempotent delivery paths and explicit session‑identity guards.  
2. **Observable Provider Usage** – NanoBot’s typed `LLMUsage`, IronClaw’s evidence‑based outcomes, and ZeroClaw’s provider‑dispatch collector indicate a shift toward granular, provider‑level telemetry for cost control and debugging.  
3. **Self‑Hosted Configurability** – Requests for pluggable endpoints (NullClaw, LobsterAI, ZeroClaw’s Chat Completions RFC) show that operators increasingly want to avoid vendor lock‑in and run air‑gapped stacks. Exposing endpoint configuration as first‑class config is becoming a table‑stakes feature.  
4. **Cross‑Channel Session Integrity** – Both OpenClaw and CoPaw highlight cross‑session leaks and message routing bugs. A robust *session‑identity freezing* mechanism (as prototyped in CoPaw PR #7237) is emerging as a pattern to prevent data‑leakage in multi‑agent flows.  
5. **Unified Deadline / Timeout Layer** – Hermes Agent’s phased “unified deadline layer” and OpenClaw’s watchdog for `tsgo` processes reflect a move toward centralized timeout/cancellation semantics to curb runaway sub‑agents and orphaned processes.  
6. **Lightweight, Token‑Free Triggers** – NanoBot’s `ConditionalTriggerRuntime` and IronClaw’s pace‑aware rate limiting illustrate a desire to run automation without consuming an LLM turn on every tick, reducing operational cost and latency.  
7. **Plugin / Skill Ecosystem Maturity** – LobsterAI’s artifact/thumbnail overhaul and CoPaw’s session‑status cards point to a trend where the assistant is evolving into a *visual workbench* rather than a pure chat bot, driving demand for rich media handling and in‑line skill discovery.  

**Takeaway for decision‑makers:** Invest in reliable, observable messaging layers and pluggable provider/configuration backends now; these are the common denominators where the ecosystem is converging, while UI‑rich features and multi‑agent collaboration remain differentiating fronts that individual projects can pursue based on their target audiences.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-25

## 1. Today's Overview

NanoBot saw a high-activity development day with 8 issues and 26 pull requests updated in the last 24 hours. 12 PRs were merged or closed (7 of which appear in the top-20 listing), marking steady progress across agent reliability, provider usage accounting, and WebUI/configuration surfaces. No new releases were published, so all activity is converging on the next minor version. Issue momentum is driven largely by a single contributor (yrxeva) filing four feature proposals (cron routing, crash-safe task ledger, zero-token triggers, FTS5 search) alongside the corresponding implementation PRs — a healthy sign that feature proposals are being turned into working code quickly. The maintainer team (chengyongru, Re-bin, and others) dominated PR activity, with community contributors contributing targeted fixes and enhancements. Overall project health looks strong: multiple complex PRs are landing, tests are being hardened, and the backlog of older PRs (#4549, #5291, #5344, #5349) is being actively revisited.

---

## 2. Releases

No new releases were published within the reporting window. The section is omitted as no version, changelog, or migration details are available.

---

## 3. Project Progress

**Merged/Closed PRs today (highlighted subset from the top-20 listing):**

- **[#5506 — fix(agent): honor selected project workspace](https://github.com/HKUDS/nanobot/pull/5506)** *(closed)* — Exposes the selected WebUI project to the model as its current working directory, preserving prompt-cache reuse by keeping project paths after the shared tool-contract prefix.
- **[#5481 — feat(usage): add unified provider usage backend](https://github.com/HKUDS/nanobot/pull/5481)** *(closed)* — Records one content-free usage row per retry-managed provider attempt for gateway-managed WebUI/TUI sessions; stacked on #5480 as part of the native stack #5482.
- **[#5480 — refactor(providers): define typed LLM usage contract](https://github.com/HKUDS/nanobot/pull/5480)** *(closed)* — Replaces dynamic provider usage dictionaries with an immutable typed `LLMUsage` contract and explicit provider identity; normalizes token/cache semantics across OpenAI Chat, OpenAI Responses, Anthropic, and Bedrock boundaries.
- **[#5517 — test(exec): remove Windows process timing races](https://github.com/HKUDS/nanobot/pull/5517)** *(closed)* — Eliminates flaky Windows process-timing races with explicit root-exit/child-ready handshakes and deterministic cleanup to prevent leaked subprocess transports.
- **[#5496 — fix(agent): time out no-tools model requests](https://github.com/HKUDS/nanobot/pull/5496)** *(closed)* — Extends wall-clock timeout protection to no-tools requests (used by malformed-call recovery, empty-response finalization, and max-iteration finalization), which previously could stall a turn indefinitely.
- **[#5507 — feat(session): SQLite FTS5 full-text search index](https://github.com/HKUDS/nanobot/pull/5507)** *(closed)* — Implements a SQLite + FTS5 search mirror alongside the JSONL store for near-instant full-text session lookups with safe fallback (addresses issue #5509).
- **[#5508 — feat(gateway): add ConditionalTriggerRuntime](https://github.com/HKUDS/nanobot/pull/5508)** *(closed)* — Adds a single asyncio manager running lightweight pure-Python condition monitors that only wake the LLM when a condition matches, enabling token-free event-driven automation (addresses issue #5510).

**Also updated and still open:** #5504 (model retry status events), #5498/#5497 (shared config editor contract + Agent TUI onboarding), #5518 (provider stream timing), #5519 (compact chat header), #5515 (observe session reply timeout failures), #5514 (clear stale stream state after Gateway reconnect), #5430 (release completed task groups), #5520 (Langfuse tracing for Codex).

---

## 4. Community Hot Topics

The most actively discussed items this window (by comment count on issues):

- **[Issue #5350 — QwenCloud provider path (2 comments)](https://github.com/HKUDS/nanobot/issues/5350)** — Proposal to add a backward-compatible QwenCloud provider alongside existing DashScope support. The underlying need: international Qwen developers need a modern platform path without breaking existing DashScope provider IDs, API keys, endpoints, and saved configurations. This is the only issue with multiple comments and signals a real ecosystem demand for provider migration paths.
- **[Issue #5512 — WebUI stalls after Gateway restart (1 comment)](https://github.com/HKUDS/nanobot/issues/5512)** — The frontend never receives the final `goal_status: idle` push after a restart, leaving `isStreaming` stuck true forever. A fix PR ([#5514](https://github.com/HKUDS/nanobot/pull/5514)) has already been filed, demonstrating a fast community→maintainer feedback loop.

Among PRs, several label-rich items are drawing attention without explicit comment counts: the unified config editor contract (#5497/#5498), provider retry status (#5504), and the usage-contract refactor (#5480/#5481). These reflect an active convergence toward a more robust configuration and telemetry story in the tool.

---

## 5. Bugs & Stability

Ranked by severity:

1. **[Issue #5512 — WebUI stalls in spinning state after Gateway restart (High)](https://github.com/HKUDS/nanobot/issues/5512)** — Turn appears hung forever; frontend never receives final idle push. **Fix exists:** open PR [#5514](https://github.com/HKUDS/nanobot/pull/5514) clears stale streaming state via `onRunStatus` subscription.
2. **[Issue #5516 — Telegram rich messages never render when streaming is enabled (High)](https://github.com/HKUDS/nanobot/issues/5516)** — `rich_messages: true` and `streaming: true` are mutually exclusive; the final message is always delivered via legacy HTML `editMessageText`. No fix PR yet; author suggests leveraging Bot API 10.1–10.3 drafts.
3. **[PR #5518 — Provider stream timing recorded late (Medium)](https://github.com/HKUDS/nanobot/pull/5518)** *(open)* — Root cause identified: runner populated streaming timing only after the usage observer persisted the call, losing TTFT/generation-time granularity.
4. **[PR #5515 — Session reply timeout task failures unobserved (Medium)](https://github.com/HKUDS/nanobot/pull/5515)** *(open)* — `SendSessionMessageTool` background timeout errors were silently discarded.
5. **[PR #5496 — No-tools requests bypassed timeout protection (Medium)](https://github.com/HKUDS/nanobot/pull/5496)** *(merged)* — Stalled no-tools requests could hold a session lock indefinitely; now fixed.
6. **[PR #5517 — Windows exec session timing races (Low)](https://github.com/HKUDS/nanobot/pull/5517)** *(merged)* — Flaky test infrastructure on Windows; resolved with explicit handshakes.
7. **[PR #5344 — Repeated identical tool calls silently spiral (Medium)](https://github.com/HKUDS/nanobot/pull/5344)** *(open since Aug 11)* — Agent can burn `max_iterations` on identical tool calls with no signal to user or model; fix adds a warning instead of silent looping.

---

## 6. Feature Requests & Roadmap Signals

- **[#5350 — QwenCloud provider (enhancement)](https://github.com/HKUDS/nanobot/issues/5350)** — Backward-compatible international Qwen platform path. High likelihood of landing given community interest and the existing DashScope groundwork.
- **[#5505 — AnySearch as web search provider (enhancement)](https://github.com/HKUDS/nanobot/issues/5505)** — Key-optional, anonymous-quota search provider from the AnySearch team; PR submission planned, plausible for next version.
- **[#5513 — Cron results routing to configurable channels with batch archive](https://github.com/HKUDS/nanobot/issues/5513)** — Keeps operational automation noise out of personal conversations; complements the just-merged ConditionalTriggerRuntime (#5508).
- **[#5511 — Crash-safe task ledger for multi-step agent tasks](https://github.com/HKUDS/nanobot/issues/5511)** — Persistent `tasks.json` with atomic writes to survive Gateway restarts; pairs naturally with #5514's reconnect handling.
- **[#5509/#5507 — SQLite FTS5 session search](https://github.com/HKUDS/nanobot/issues/5509)** — Already merged as PR #5507; this was a fast-turnaround roadmap item.
- **[#5520 — Langfuse tracing for the Codex provider](https://github.com/HKUDS/nanobot/pull/5520)** *(open)* — Extends observability to Codex's raw httpx + OAuth transport with native SDK generation-per-request tracing.
- **Roadmap signals** — The #5480/#5481/#5482 "native stack" indicates an upcoming unified usage/provider architecture. The config editor contracts (#5497/#5498) point to a consolidated onboarding experience across WebUI and Agent TUI. Expect the next minor release to bundle: typed usage contract + unified backend, FTS5 search, ConditionalTriggerRuntime, config editor unification, and retry-status surfacing.

---

## 7. User Feedback Summary

Real pain points surfacing from the data:

- **WebUI hangs after Gateway restarts** (issue #5512, fix #5514) — Users lose confidence when a turn appears hung indefinitely; the community fix was quick, indicating a responsive workflow.
- **Telegram streaming vs. rich messages incompatibility** (issue #5516) — A feature gap in a popular channel; users explicitly cite Bot API drafts as the solution path.
- **Token waste in heartbeat polling** (issues #5510, PR #5508) — Users want lightweight, token-free event triggers instead of burning a full LLM turn on every tick.
- **Slow session search with large history** (issue #5509, PR #5507) — Linear JSONL scans are unacceptable at hundreds of sessions; FTS5 indexing landed quickly.
- **Lost subagent transcripts** (PR #5291) — Reviewing what a subagent actually did is impossible today; the fix persists full conversations.
- **Invisible provider retry/failure states** (PRs #5504, #5518) — Users want retry countdowns and TTFT/generation timing surfaced rather than silent fallback.
- **Config editing friction** (PRs #5497/#5498) — Demand for a schema-driven, secret-safe configuration editor across transports.

Satisfaction signals: fast turnaround on filed issues (e.g., #5509→#5507, #5510→#5508 same-day), consistent test coverage in new PRs, and multiple contributors filing both proposal and implementation — a hallmark of a healthy, collaborative community.

---

## 8. Backlog Watch

Items requiring maintainer attention due to age or unresolved status:

- **[PR #4549 — heartbeat model_override config (open since 2026-06-26)](https://github.com/HKUDS/nanobot/pull/4549)** — A month-old feature PR for cheaper heartbeat model selection via `gateway.heartbeat.modelOverride`; still unmerged despite being labeled p2. Could benefit from a review decision.
- **[PR #5291 — persist subagent conversation transcripts (open since 2026-08-07)](https://github.com/HKUDS/nanobot/pull/5291)** — Addresses a significant observability gap (subagent tool calls, results, reasoning vanished). Needs maintainer review; likely high impact for agent debugging.
- **[PR #5344 — warn on repeated identical tool calls (open since 2026-08-11)](https://github.com/HKUDS/nanobot/pull/5344)** — Prevents silent infinite loops burning `max_iterations`; p2 priority but important for production reliability.
- **[PR #5349 — timezone_name fix in settings tests (open since 2026-08-12)](https://github.com/HKUDS/nanobot/pull/5349)** — Deterministic test failure in a ~5-hour daily window (UTC-vs-timezone mismatch). Small, surgical fix that addresses CI flakiness.
- **[Issue #5350 — QwenCloud provider (open since 2026-08-12, 2 comments)](https://github.com/HKUDS/nanobot/issues/5350)** — Community-driven provider request with no maintainer response yet; worth a status update.

---

*Data source: github.com/HKUDS/nanobot — issues and PRs updated in the 24 hours preceding 2026-08-25.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent — Project Digest
**Date: 2026-08-25**

---

## 1. Today's Overview

Hermes Agent saw a high-volume, infrastructure-focused day: **50 issues** updated (40 open, 10 closed) and **50 PRs** updated (40 open, 10 merged/closed), with **0 new releases**. The dominant theme is **session-state and desktop stability**, with a dense cluster of new P2 desktop bugs filed today around session restore, branching, tab restoration, and bot deletion. Notably, the architectural **unified deadline layer** ([#85125](https://github.com/NousResearch/hermes-agent/issues/85125)) advanced with two Phase-3/4 fix PRs merged ([#94184](https://github.com/NousResearch/hermes-agent/pull/94184), [#94187](https://github.com/NousResearch/hermes-agent/pull/94187)) targeting MCP connection recovery and terminal descendant cleanup. Community attention remains split between the long-running skills-index watchdog alert ([#66616](https://github.com/NousResearch/hermes-agent/issues/66616), 90 comments) and recurring cost/context-efficiency complaints from DeepSeek users. No release candidates shipped this cycle.

---

## 2. Releases

**No new releases** — 0 releases were published in the last 24 hours. No changelog, breaking-change, or migration notes to report.

---

## 3. Project Progress (Merged/Closed PRs Today)

Two PRs closed today, both part of the phased **#85125** "unified deadline layer" effort:

- **[PR #94184](https://github.com/NousResearch/hermes-agent/pull/94184)** — `fix(mcp): recover poisoned connections + fail fast on dead stdio transports` (#85125 Phase 3b-MCP). Implements the `SuspectableBackend` mark-suspect/lazy-verify contract at the MCP connection layer, addressing multiple poisoned-connection tickets (#81051, #77765, #84132, #81995).
- **[PR #94187](https://github.com/NousResearch/hermes-agent/pull/94187)** — `fix(terminal): sweep setsid descendants after local timeout group-kill` (#85125 Phase 4b). Prevent orphaned `setsid` descendants after local-backend timeout kills via a guarded psutil descendant snapshot before SIGTERM.

The closed-issue count (10) also reflects resolution activity, including the desktop **clarify-tool prompt rendering bug** ([#53666](https://github.com/NousResearch/hermes-agent/issues/53666), P1, closed with `sweeper:risk-session-state`), the **Kanban max-concurrency bug** ([#59499](https://github.com/NousResearch/hermes-agent/issues/59499), `sweeper:implemented-on-main`), duplicate OpenRouter picker entries ([#92430](https://github.com/NousResearch/hermes-agent/issues/92430)), and the OpenWebUI image-inlining issue ([#94177](https://github.com/NousResearch/hermes-agent/issues/94177), closed `needs-repro`).

---

## 4. Community Hot Topics

The most active discussions by comment/reaction count:

- **[Issue #66616 — Skills index stale/degraded (90 comments)](https://github.com/NousResearch/hermes-agent/issues/66616)** — An automated freshness probe has been failing for over a month; the Skills Hub index is regularly exceeding its 26h freshness limit. Remarkably high engagement suggests the auto-generated watchdog alerts are drawing sustained community and maintainer attention to documentation/skills reliability.
- **[Issue #85125 — Unified deadline layer tracking (20 comments)](https://github.com/NousResearch/hermes-agent/issues/85125)** — The flagship architectural fix for the 400+ timeout/hang backlog, now making visible progress via merged phases. Community is clearly invested in structural (not patch-level) fixes.
- **[Issue #25833 — Self-created skill correctness guarantees (10 comments)](https://github.com/NousResearch/hermes-agent/issues/25833)** — Users want mechanism-level guarantees that auto-created skills are correct and consistent.
- **[Issue #80246 — Context-compression threshold undercounts reasoning_content (8 comments)](https://github.com/NousResearch/hermes-agent/issues/80246)** — The token estimator `Ue()` ignores `reasoning_content`, causing false "context overflow" on long DeepSeek/Kimi reasoning sessions.
- **[Issue #93888 — Desktop sends local runtime ID to Remote Gateway (7 comments)](https://github.com/NousResearch/hermes-agent/issues/93888)** — Restore failures on `main` blocking stored-session recovery from remote gateways.
- **[Issue #7895 — No images in OpenWebUI integration (3 👍)](https://github.com/NousResearch/hermes-agent/issues/7895)** — The most-reacted feature request; users want generated images delivered over the OpenAI protocol to OpenWebUI.

**Underlying need:** Users are demanding structural reliability (deadlines, connection recovery, skills integrity) and better provider integration (OpenWebUI media, DeepSeek cost transparency) rather than cosmetic improvements.

---

## 5. Bugs & Stability

Ranked by severity (P1 → P3), with fix status where known:

- **[#94248 — Gateway SIGSEGV at delegate deadlines (P1, macOS arm64, v0.20.4)](https://github.com/NousResearch/hermes-agent/issues/94248)** — ⚠️ **Most severe.** Twelve crash reports (5 on 2026-08-24) show `SIGSEGV` firing 17–72 ms after delegated workers hit their 600s deadline during Codex SSL reads. No fix PR yet; needs immediate triage.
- **[#53666 — `clarify` prompts don't render in chat UI (P1, closed)](https://github.com/NousResearch/hermes-agent/issues/53666)** — Resolved; was producing empty user replies on macOS desktop.
- **[#93888 — Desktop session restore sends local runtime ID (P2)](https://github.com/NousResearch/hermes-agent/issues/93888)** — Permanent "Restore failed — Session not found" for remote gateway sessions.
- **[#93959 — Branch creation hangs infinitely on existing sessions (P2)](https://github.com/NousResearch/hermes-agent/issues/93959)** — Branching an existing session never loads; related `sweeper:risk-session-state` cluster.
- **[#93865 — browser.use_gateway silently stripped (P2)](https://github.com/NousResearch/hermes-agent/issues/93865)** — Tools picker drops the config key, breaking managed Browser Use gateway connections.
- **[#92701 — docker backend exit 125 "too many colons" (P2)](https://github.com/NousResearch/hermes-agent/issues/92701)** — Unsanitized `task_id` with colons breaks every tool call under persistent docker backends.
- **[#94078 — Shell startup diagnostics contaminate file ops (P2)](https://github.com/NousResearch/hermes-agent/issues/94078)** — `BASH_ENV` stderr merges into file-op data channels, corrupting reads.
- **[#94235 — Cloned bot resurrects after deletion (P2, Windows)](https://github.com/NousResearch/hermes-agent/issues/94235)** — Deleted bots reappear within 1–2s due to profile-skeleton re-creation on poll.
- **[#94137 — "Close All" tabs restored on bot click (P2)](https://github.com/NousResearch/hermes-agent/issues/94137)** — Desktop Bot Mode Close All is only a visual hide.
- **[#80246 — Context-compression undercounts reasoning tokens (P2)](https://github.com/NousResearch/hermes-agent/issues/80246)** — False context overflow on long reasoning sessions.
- **[#94167 — Restored background tabs labeled "New session" (P3)](https://github.com/NousResearch/hermes-agent/issues/94167)** — Cosmetic but confusing desktop UX.
- **[#56337 — Telegram strips /command@bot args (P2)](https://github.com/NousResearch/hermes-agent/issues/56337)** — Bot-name stripping collapses command + first argument.

**Notable fixes in-flight:** The desktop session-state cluster is being actively swept — open PRs target transcript hydration after reconnect ([#92733](https://github.com/NousResearch/hermes-agent/pull/92733)), gateway connect settling ([#73821](https://github.com/NousResearch/hermes-agent/pull/73821)), and preserving spaces in MEDIA paths ([#70801](https://github.com/NousResearch/hermes-agent/pull/70801), also addresses [#94189](https://github.com/NousResearch/hermes-agent/issues/94189)).

---

## 6. Feature Requests & Roadmap Signals

Strong signals for what may land next:

- **Unified deadline layer (#85125)** — Actively progressing (two phases merged today). Remaining phases (3a, 4a) will likely continue rolling out. This is the clearest roadmap signal.
- **[#90654 — In-app browser element picker + agent page actions (RFC, P3)](https://github.com/NousResearch/hermes-agent/issues/90654)** — Proposal to close the user→agent pointing loop using existing seams. Would elevate the right-rail preview into a full agent surface.
- **[#94251 — Built-in plan-then-approve mode (P3, needs-decision)](https://github.com/NousResearch/hermes-agent/issues/94251)** — Users want native write-blocking until plan approval (Reasonix-style). Currently `/plan` is external; a native mode is a likely enhancement.
- **[#94222 — Reduce per-request context footprint + cache-hit visibility (P3, needs-decision)](https://github.com/NousResearch/hermes-agent/issues/94222)** — DeepSeek bill comparison shows +58% cost vs Reasonix on identical tasks. Cost-optimization is a recurring theme this week.
- **[#5320 — Auto-scale memory_char_limit defaults (P3)](https://github.com/NousResearch/hermes-agent/issues/5320)** — Long-standing (April) request to surface usage pressure and raise default limits; has 1 👍.
- **[#33683 — Discord voice-channel participation (P3)](https://github.com/NousResearch/hermes-agent/issues/33683)** — Opt-in auto-join, transcribe, respond-in-voice mode with 1 👍.
- **[PR #92300 — Add MindsHub as a model provider](https://github.com/NousResearch/hermes-agent/pull/92300)** — New aggregated inference gateway (Claude/GPT/Gemini/DeepSeek etc. via one key); expansion of provider breadth.
- **[PR #94247 — Autonomous initiation + strict-readonly Kanban workers](https://github.com/NousResearch/hermes-agent/pull/94247)** — Republished reviewed worker contracts for autonomous task execution.

**Prediction:** The next release will likely include the remaining #85125 phases (deadline-layer hardening) plus at least one desktop session-state fix from the active sweep. Cost-efficiency (DeepSeek pricing refresh in [PR #94243](https://github.com/NousResearch/hermes-agent/pull/94243) and context-footprint tuning) is a strong candidate for near-term roadmap inclusion.

---

## 7. User Feedback Summary

Real pain points and use-case signals from this batch:

- **Desktop session reliability is the #1 pain point.** Multiple independent reports (restore failures #93888, branch hangs #93959, tab-title issues #94167, phantom tab restoration #94137, bot resurrection #94235) describe the desktop chat surface as fragile around session lifecycle. Users are clearly hitting these daily in Studio 0.6.47 / runtime 0.20.4.
- **Cost transparency and efficiency.** The DeepSeek comparison ([#94222](https://github.com/NousResearch/hermes-agent/issues/94222)) is a concrete, data-backed dissatisfaction (+58% cost, higher tokens on the same task), and the stale pricing table (retired July snapshot) is seen as actively unfair billing ([PR #94243](https://github.com/NousResearch/hermes-agent/pull/94243)). Memory-limit pressure ([#5320](https://github.com/NousResearch/hermes-agent/issues/5320)) reinforces the efficiency theme.
- **Third-party integration friction.** OpenWebUI users remain unsatisfied: no image delivery ([#7895](https://github.com/NousResearch/hermes-agent/issues/7895), 3 👍) and image tags not inlined as base64 ([#94177](https://github.com/NousResearch/hermes-agent/issues/94177)). Users want first-class OpenAI-protocol compatibility.
- **Stability of the skills loop.** Beyond the watchdog alert ([#66616](https://github.com/NousResearch/hermes-agent/issues/66616)), a user tracked **13 failed bg-review patch attempts across 4 skills in one week** ([#73965](https://github.com/NousResearch/hermes-agent/issues/73965)) — a concrete, reproducible reliability complaint about the skill auto-creation value proposition.
- **Platform inclusivity.** NixOS/musl/minimal-container breakage from hard-coded `/bin/bash` ([PR #92368](https://github.com/NousResearch/hermes-agent/pull/92368)) and wlroots/Wayland hotkey failure ([#82654](https://github.com/NousResearch/hermes-agent/issues/82654), with a CLI-flag workaround in [PR #94253](https://github.com/NousResearch/hermes-agent/pull/94253)) show a Linux power-user segment actively contributing fixes.

Overall satisfaction appears mixed: users value the agent's capability loop (skills, delegation) but are frustrated by desktop session fragility and cost opacity.

---

## 8. Backlog Watch

Long-unanswered or high-importance items needing maintainer attention:

- **[Issue #66616 — Skills index watchdog (created 2026-07-18, 90 comments, still degraded)](https://github.com/NousResearch/hermes-agent/issues/66616)** — An auto-firing freshness alert with massive engagement, unresolved for over a month. Either the probe needs tuning or the index pipeline genuinely regresses repeatedly. High-priority investigation candidate.
- **[Issue #7895 — OpenWebUI images (created 2026-04-11, 3 👍)](https://github.com/NousResearch/hermes-agent/issues/7895)** — Four months old, the most-reacted open feature request, with no linked PR. A related duplicate/close occurred today ([#94177](https://github.com/NousResearch/hermes-agent/issues/94177), closed needs-repro), so an actual fix may be pending.
- **[Issue #5320 — memory_char_limit defaults (created 2026-04-05)](https://github.com/NousResearch/hermes-agent/issues/5320)** — Oldest open feature request in this batch; configuration defaults have been stale since April. Low effort, but tied to the emerging cost-efficiency narrative.
- **[Issue #25833 — Skill correctness guarantees (created 2026-05-14, P2, needs-decision)](https://github.com/NousResearch/hermes-agent/issues/25833)** — Unanswered for 3+ months despite P2 priority and 10 comments; sits in `needs-decision` limbo.
- **[Issue #82416 — Higgsfield MCP device-auth mismatch (created 2026-08-09, P2)](https://github.com/NousResearch/hermes-agent/issues/82416)** — Protected-resource metadata advertises device auth, but Hermes only attempts browser PKCE; consent succeeds but refresh fails. No fix PR visible.
- **[PR #70801 — Preserve spaces in MEDIA paths (opened 2026-07-24)](https://github.com/NousResearch/hermes-agent/pull/70801)** — An old, narrow fix that addresses today's newly-filed #94189. A maintainer merge here could close two tickets at once.

---

**Summary:** Project health is *active but strained* — strong fix throughput on the deadline-layer architecture and credible community contribution, but an unresolved P1 gateway crash, a pervasive desktop session-state bug cluster, and a month-old skills-index degradation signal that reliability work remains the critical path. Cost efficiency and third-party integration satisfaction are the clearest emerging community demands.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-25

## 1. Today's Overview
PicoClaw showed moderate maintenance activity on 2026-08-25, with 2 issues and 3 pull requests updated in the last 24 hours and no new releases published. Two long-standing PRs (#1929, #1551) were closed, indicating a cleanup of backlog items, while one feature PR (#3299) and two issues remain open. The project continues active roadmap development on a Web UI (#806) but carries stale items that suggest reviewer bandwidth constraints. Overall project health appears stable, with bug fixes progressing but some community contributions awaiting maintainer attention.

## 2. Releases
No new releases were published today. (Section omitted per guidelines.)

## 3. Project Progress
The following pull requests were closed/merged today:

- **PR #1929** — [fix: apply security credentials before config validation in web handlers](https://github.com/sipeed/picoclaw/pull/1929) (CLOSED, by KristjanKruusRIA). Resolves a bug where `PUT`/`PATCH /api/config` falsely reported `"channels.pico.token is required"` even when the token was correctly stored in `.security.yml`. Root cause was `validateConfig()` checking security-managed private fields prematurely; the fix reorders credential application before validation.
- **PR #1551** — [fix: merge PR #1428 #1422 #1417](https://github.com/sipeed/picoclaw/pull/1551) (CLOSED, by xuwei-xy). Consolidates several outstanding fix PRs into a single merge, reducing fragmentation in the patch backlog.

These closures improve config-handling reliability and reduce PR debt, though neither introduced new user-facing features.

## 4. Community Hot Topics
- **Issue #806** — [Feature: Add webUI support (Refactoring now)](https://github.com/sipeed/picoclaw/issues/806) (OPEN, 10 comments, 8 👍, high priority, roadmap). This is the most engaged item in the dataset. The discussion centers on lowering the entry barrier for non-technical users by providing a browser-based UI alongside the existing TUI. The 8 endorsements and 10 comments signal strong community demand for accessible instance management. Underlying need: democratizing local AI agent deployment beyond terminal proficiency.

## 5. Bugs & Stability
Ranked by reported severity and user impact:

1. **Issue #3338** — [BUG: Slack does not attach image media content](https://github.com/sipeed/picoclaw/issues/3338) (OPEN, stale, by octavioturra). High functional severity: all Slack media uploads fail with `file.upload.v2: file size cannot be 0` because `SendMedia` omits `FileSize` in `UploadFileParameters`, causing the slack-go SDK to reject uploads pre-network. No fix PR is linked yet; marked stale.
2. **PR #1929 (resolved)** — Config validation bug in web handlers (see Project Progress). Now closed with a fix; no longer an active stability risk.

## 6. Feature Requests & Roadmap Signals
- **Issue #806** — Web UI support is explicitly tagged as `roadmap` and "Refactoring now," making it the strongest signal for an upcoming major version or milestone. Predicted to land as a significant UX layer in a future release.
- **PR #3299** — [Add native Exa web search provider](https://github.com/sipeed/picoclaw/pull/3299) (OPEN, stale, by kesku). Proposes Exa as a native `tools.web`/`web_search` provider with date-range filters and `X-Api-Key` auth. If merged, this would expand search-provider options and may appear in the next feature cycle contingent on review.

## 7. User Feedback Summary
- **Pain point (config & security):** Users storing credentials in `.security.yml` hit confusing validation errors in web config endpoints — now addressed by #1929.
- **Pain point (channel integration):** Slack users cannot share images, blocking multimodal workflows in chat ops (#3338).
- **Satisfaction/dissatisfaction:** Strong positive sentiment toward a visual management interface (#806, 8 👍) reveals dissatisfaction with TUI-only operation among less technical users. No negative sentiment reported on core agent functionality.

## 8. Backlog Watch
Items needing maintainer attention due to age, staleness, or importance:

- **PR #3299** — [Add native Exa web search provider](https://github.com/sipeed/picoclaw/pull/3299) (OPEN since 2026-07-26, stale). A complete feature contribution awaiting review; risk of contributor attrition if unanswered.
- **Issue #3338** — [Slack image media bug](https://github.com/sipeed/picoclaw/issues/3338) (OPEN since 2026-08-17, stale). Recently filed but already stale-flagged; a clear, well-diagnosed bug lacking a linked fix.
- **PR #1929 / #1551** — Though now closed, their long open durations (March → August) highlight a historical review-latency pattern worth monitoring for future PRs.

---
*Digest generated from GitHub activity snapshot for 2026-08-25. All linked items reflect state as of the provided data.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-25

## 1. Today's Overview
NanoClaw had a highly active day: 3 issues were updated (2 new bugs opened, 1 closed), 19 PRs moved, and a major release **v2.3.0** shipped. The release introduces a breaking-change gate around the new per-agent Slack experience, while the PR pipeline shows clear momentum on new channels (Mattermost, Dial), a first Apple Container session driver, and agent-template creation from chat. A distinct theme today is **macOS correctness**: two fresh bugs and two competing fix PRs target symlinked-tmpdir and `better-sqlite3` segfault failures. Three long-lived Codex/Telegram feature PRs (open since May) were finally closed, giving the project a healthy mix of shipping, hardening, and unblocking stalled work. Overall, project health looks strong with brisk engineering activity and only modest community interaction on the public issues.

## 2. Releases
**v2.3.0** — *A new Slack experience* ([Release v2.3.0](nanocoai/nanoclaw))
- **Per-agent provisioned Slack apps**, agent spawning from Slack, and UX improvements for classic single-bot Slack installs.
- **⚠️ BREAKING change:** this version introduces a decision gate for classic single-bot Slack installs. Classic Slack **continues to work unchanged** — this is an explicit decision, not a forced migration. New installs and non-Slack installs are unaffected.
- **Migration note:** existing single-bot Slack users should review the gate and decide whether to move to per-agent provisioned apps at their own pace.

## 3. Project Progress
Three previously long-standing PRs were **closed/merged today**, all authored by `chiptoe-svg`:
- **[PR #2474 — feat(setup): AI-coding-CLI picker](nanocoai/nanoclaw PR #2474)** — adds a registry framework so setup can hand off failed steps and headless utility tasks to either Claude Code or OpenAI Codex (with future Aider/Gemini-CLI as drop-in adapters).
- **[PR #2475 — feat(codex): surface skills + persona to codex agents](nanocoai/nanoclaw PR #2475)** — gives Codex agents parity with Claude Code for persona/skill catalog, making provider switches a config change instead of a content rewrite.
- **[PR #2338 — fix(telegram): escape stray `*` and `_`](nanocoai/nanoclaw PR #2338)** — fixes the legacy-Markdown sanitizer that silently stripped odd-count `*`/`_` characters, which mangled URLs containing underscores.

Beyond closures, active feature work advanced on: **Mattermost integration** ([#3502](nanocoai/nanoclaw PR #3502), [#3507](nanocoai/nanoclaw PR #3507)), the **Apple Container session driver** as the first overlay on the driver seam ([#3503](nanocoai/nanoclaw PR #3503)), agent creation **from templates in chat** ([#3396](nanocoai/nanoclaw PR #3396), [#3428](nanocoai/nanoclaw PR #3428)), and **Dial channel documentation** ([#3501](nanocoai/nanoclaw PR #3501)).

## 4. Community Hot Topics
Public issue/PR conversation volume is currently low (most items have 0–1 comments), so the "hottest" signal is the **macOS reliability cluster** — two synchronized bug reports and multiple fix PRs all landed the same day:
- **[Issue #3498 — update-nanoclaw controller exits 0 without running on macOS](nanocoai/nanoclaw Issue #3498)** — `path.resolve()` vs realpath failures due to symlinked `/var/folders` on macOS; makes the documented invocation a no-op.
- **[Issue #3497 — better-sqlite3 13 segfaults on macOS](nanocoai/nanoclaw Issue #3497)** — install passes checks on Node >=22 but crashes inside `new Database()` before Node 22.14.0.
- Both spawned fix work in [#3499](nanocoai/nanoclaw PR #3499) and a six-part fix in **[#3506 — fix(update): make the transaction controller correct on macOS hosts](nanocoai/nanoclaw PR #3506)** (by the same author who hit these live).

Underlying need: Mac users are hitting real-world breakage in setup and updater flows, and the community is responding fast with paired bug reports and patches. The old Telegram sanitizer issue ([#2767](nanocoai/nanoclaw Issue #2767)) was confirmed obsolete by upstream adapter 4.30.0 and closed.

## 5. Bugs & Stability
Ranked by severity:

1. **[Issue #3497 — better-sqlite3@13.0.3 segfaults on open on macOS](nanocoai/nanoclaw Issue #3497)** *(High)* — `new Database()` segfaults on Node <22.14.0 on macOS; leaves installs with no working DB layer and blocks `pnpm test`. Declared Node floor is `>=22`, which wrongly passes checks. **Fix:** bump declared floor to `>=22.14.0`.
2. **[Issue #3498 — update-nanoclaw exits 0 without running on macOS](nanocoai/nanoclaw Issue #3498)** *(High/Medium)* — symlinked tmpdir defeats the entrypoint guard and `hasSafeStatePaths`, silently making updates a no-op. **Fix PRs exist:** [#3499](nanocoai/nanoclaw PR #3499) (resolve symlinks) and [#3506](nanocoai/nanoclaw PR #3506) (six fixes incl. macOS path handling + one Linux fallback defect).
3. **[Issue #2767 — Telegram legacy-Markdown sanitizer obsolete](nanocoai/nanoclaw Issue #2767)** *(Low, closed)* — upstream `@chat-adapter/telegram@4.30.0` natively resolves `MarkdownV2`, rendering the workaround unnecessary. No action needed.

Other stability-focused PRs in flight: mailbox attachment routing fix ([#3505](nanocoai/nanoclaw PR #3505)), OneCLI gateway default bind address correction ([#3302](nanocoai/nanoclaw PR #3302), fixes #2903), and a skill barrel-import attribution fix ([#3451](nanocoai/nanoclaw PR #3451)).

## 6. Feature Requests & Roadmap Signals
Strong signals for near-term features:
- **Mattermost channel support** — adapter migration ([#3502](nanocoai/nanoclaw PR #3502)) plus an installation skill ([#3507](nanocoai/nanoclaw PR #3507)). Likely to land next.
- **Agent creation from templates in chat** — `create_agent` gains a `template` ref ([#3396](nanocoai/nanoclaw PR #3396)) with the Slack creation flow carrying it end-to-end ([#3428](nanocoai/nanoclaw PR #3428)). Strong candidate for the next release.
- **Apple Container session driver** — first overlay on the new driver seam (`NANOCLAW_RUNTIME_DRIVER=container`, ships as `/add-…`), from [#3503](nanocoai/nanoclaw PR #3503).
- **Provider parity for non-Claude CLIs** — Codex skill/persona parity ([#2475](nanocoai/nanoclaw PR #2475)) and surfacing the Claude Code skill catalog to all providers ([#2337](nanocoai/nanoclaw PR #2337)).
- The **v2.3.0 Slack per-agent app** direction suggests continued Slack UX investment.

## 7. User Feedback Summary
Real pain points surfaced by users today:
- **macOS setup/updater reliability** — users report the documented update invocation silently no-ops on macOS ([#3498](nanocoai/nanoclaw Issue #3498)) and that DB initialization segfaults on common Node installs ([#3497](nanocoai/nanoclaw Issue #3497)). Both were reported by the same user (brentkearney), indicating a frustrating install/update experience on Mac.
- **Telegram message correctness** — URLs with underscores were being mangled by the legacy sanitizer ([#2338](nanocoai/nanoclaw PR #2338)); confirmed resolved upstream ([#2767](nanocoai/nanoclaw Issue #2767)), which should improve user satisfaction for Telegram users.
- **OneCLI gateway connectivity** — misconfigured default bind address breaks agent access to the gateway (fix PR [#3302](nanocoai/nanoclaw PR #3302) addresses #2903).
- Positive signals: users (chiptoe-svg, glifocat) are contributing high-quality fix PRs for issues they encountered live, including a detailed six-fix macOS PR ([#3506](nanocoai/nanoclaw PR #3506)) and a 20-commit feature reconciliation branch ([#3504](nanocoai/nanoclaw PR #3504)).

## 8. Backlog Watch
PRs open an unusually long time that need maintainer attention:
- **[PR #2361 — tighten codex provider contracts](nanocoai/nanoclaw PR #2361)** — open since 2026-05-09 (~3.5 months); replaces stale Codex SDK sketch with the `codex app-server` JSON-RPC contract. High-value but stalled.
- **[PR #2337 — surface Claude Code skill catalog to non-Claude providers](nanocoai/nanoclaw PR #2337)** — open since 2026-05-07; two-part fix with a shared skill-catalog helper. Directly complements the now-closed parity work (#2474/#2475).
- **[PR #3302 — fix OneCLI gateway bind address](nanocoai/nanoclaw PR #3302)** — open since 2026-08-17 (~1 week); fixes a real connectivity bug (#2903) and has a "core-team" label.

Notably, three May-era PRs (#2474, #2475, #2338) were finally cleared today, so clearing the remaining May backlog (#2361, #2337) should be a priority.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-08-25

## 1. Today's Overview

NullClaw saw a quiet but productive day with 2 open issues updated in the last 24 hours, both filed on 2026-08-24. No releases were published, and only 1 pull request was active—a Dependabot dependency bump that remains open. Overall activity is moderate/low: the project is processing community feedback (a feature request and a bug report) with no merges or closures today. The maintainer response time on new issues will be worth watching, given that both items are day-old and undisputed. Overall project health appears stable, with dependency maintenance (Docker image bumps) proceeding in the background.

## 2. Releases

No new releases were published in the last 24 hours. No changelog, migration, or breaking-change notes to report.

## 3. Project Progress

No PRs were merged or closed today. The only PR activity was an update to an existing open PR:

- **[#956 — [dependencies, docker] ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group](https://github.com/nullclaw/nullclaw/issues/956)** (open; dependabot[bot], last updated 2026-08-24). This is a routine dependency bump for the Docker images group and is an indication of ongoing infrastructure upkeep rather than feature advancement.

No feature work or bug-fix PRs landed in this window.

## 4. Community Hot Topics

There is limited discussion volume today: both new issues have 0 comments and 0 reactions, and the open Dependabot PR has no recorded engagement. Nonetheless, two topics are worth watching:

- **[#993 — [enhancement] Make Firecrawl search endpoint configurable for self-hosted instances](https://github.com/nullclaw/nullclaw/issues/993)** (Crymfox) — Requests that the hardcoded `https://api.firecrawl.dev/v1/search` endpoint in `src/tools/web_search_providers/firecrawl.zig` be made configurable so self-hosted Firecrawl deployments can be used with `search_provider: "firecrawl"`. Underlying need: users running NullClaw in fully self-hosted/air-gapped setups want to avoid external API dependencies.
- **[#992 — [bug] If the pairing code is hidden, and not written to disk, how can we see it?](https://github.com/nullclaw/nullclaw/issues/992)** (heredos) — A usability blocker for gateway API configuration. The user spent days trying to obtain the 6-digit pairing token and discovered that a prior change (#535) stopped logging it to stdout, leaving the token only in memory. Underlying need: secure but still discoverable device pairing for first-time setup.

## 5. Bugs & Stability

One bug was reported today (2026-08-24), ranked by severity:

- **Moderate — [#992: Pairing code hidden and not written to disk](https://github.com/nullclaw/nullclaw/issues/992)** (heredos). The 6-digit pairing token is no longer logged to stdout (regression introduced by #535) and is not persisted to disk, making it effectively impossible to retrieve for headless/remote gateway configuration. This directly blocks users from completing gateway pairing. No fix PR exists yet. The project should consider either re-enabling stdout logging, writing the token to a known file path with secure permissions, or providing an alternative retrieval command.

No crashes, panics, or other stability regressions were reported in the last 24 hours.

## 6. Feature Requests & Roadmap Signals

One explicit feature request arrived today:

- **[#993 — Configurable Firecrawl search endpoint](https://github.com/nullclaw/nullclaw/issues/993)** (Crymfox). This is a clear roadmap signal: as more users self-host NullClaw, the tooling must support self-hosted variants of third-party services. It is a small, low-risk change (expose an environment variable or config field for the endpoint with the current URL as default), so it is a plausible candidate for a near-term release. Watch for related requests for other hardcoded third-party endpoints (e.g., other web search providers).

## 7. User Feedback Summary

Real user pain points expressed today:

- **Gateway pairing friction (#992)**: A user spent "the past few days" unable to configure the gateway API because the pairing token was both hidden from stdout and not written to disk. This indicates a UX regression that severely harms first-time setup experience, especially for headless or remote deployments. Implicit dissatisfaction with the change in #535.
- **Self-hosting constraints (#993)**: A user explicitly wants to avoid dependency on the public Firecrawl API, signaling that the community includes operators of fully self-hosted stacks. Positive use case: better privacy, data residency, and cost control by pointing to their own Firecrawl instance.

No negative feedback about core agent performance or overall satisfaction was expressed in this window.

## 8. Backlog Watch

Items that have been open for a longer period and may need maintainer attention:

- **[#956 — Dependabot: bump alpine 3.23 → 3.24 (docker-images group)](https://github.com/nullclaw/nullclaw/issues/956)** — Open since 2026-06-15 (~10 weeks) with an update on 2026-08-24. Although it is a routine dependency bump, its prolonged open status (2+ months) may indicate stalled CI checks or a need for manual review, and carries a potential security/compatibility lag for the Docker images.
- Notably, issue **#535** (referenced in #992) changed pairing-token logging behavior and is implicated in the current bug; if it remains open and unaddressed, it should be prioritized for a follow-up fix.

---

**Project health summary**: Stable but low-velocity day. No merges or releases, but two fresh, actionable community items (one usability bug, one small enhancement) indicate an engaged user base. Recommend prioritizing #992 as a setup-blocking regression and reviewing the long-stale Dependabot PR #956.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw Project Digest – 2026‑08‑25**  
*(based on GitHub activity from 2026‑08‑24 → 2026‑08‑25)*  

---  

### 1. Today's Overview  
The repository showed steady maintenance activity in the last 24 h: **22 issues were updated** (13 still open/active, 9 closed) and **30 pull requests were updated** (15 open, 15 merged/closed). No new releases were published. The mix of bug fixes, CI improvements, and UI polish indicates a healthy cadence of both stability work and forward‑looking feature development.

---  

### 2. Releases  
*No new versions were released today.*  

---  

### 3. Project Progress – Merged / Closed PRs (last 24 h)  

| PR | Title / Goal | Link | Impact |
|----|--------------|------|--------|
| #7821 | **ci: single setup‑rust composite** – centralises toolchain, linker (mold) and build profiles | [#7821](https://github.com/nearai/ironclaw/pull/7821) | Eliminates “green locally, red in CI” drift; replaces 43 scattered `rust-toolchain` calls. |
| #7833 | **feat(suggestions): generate over the user's no‑approval, read‑only tools** (closes #7812) | [#7833](https://github.com/nearai/ironclaw/pull/7833) | Suggestion cards now respect user‑level tool permissions and can read connected data (e.g., Gmail). |
| #7857 | **fix(webui): refresh conversations after starting suggestion** | [#7857](https://github.com/nearai/ironclaw/pull/7857) | Sidebar conversation list updates immediately after a suggested task is started, fixing missing thread entries. |
| #7854 | **fix(webui): remove Gateway v2 login eyebrow** | [#7854](https://github.com/nearai/ironclaw/pull/7854) | Cleans up legacy UI text and removes unused locale key. |
| #7794 | **refactor(webui): introduce shared page‑shell and loading primitives** | [#7794](https://github.com/nearai/ironclaw/pull/7794) | Adds reusable `PageScroll`, `PageStack`, `Skeleton` components; migrates Automations, Extensions, Admin, Workspace, Settings pages. |
| #7795 | **refactor(webui): migrate settings and admin notices to InlineNotice** | [#7795](https://github.com/nearai/ironclaw/pull/7795) | Replaces ad‑hoc banners with the shared `InlineNotice` for consistent styling/behaviour. |
| #7844 | **fix(ci): restore main coverage and WebUI checks** | [#7844](https://github.com/nearai/ironclaw/pull/7844) | Updates WASM fixtures to match current WIT contract; recovers coverage floors for `ironclaw_loop_host`, `sandbox`, `telegram`. |
| #7650 | **feat(automations): derive run outcomes from runtime evidence** | [#7650](https://github.com/nearai/ironclaw/pull/7650) | Replaces heuristic judging with deterministic, evidence‑based run assessment (records actual capability calls). |
| #7852 | **BISECT (do not merge): isolate T1’s E2E failure to the profile change** | [#7852](https://github.com/nearai/ironclaw/pull/7852) | Diagnostic probe – no functional change, used to pinpoint CI regression. |
| #7858 | **PROBE (do not merge): run T1’s composite on Windows before it reaches main** | [#7858](https://github.com/nearai/ironclaw/pull/7858) | Throwaway Windows validation of the new `setup‑rust` action. |

*Additional closed PRs of note:* #7850 (expose exact run capability facts), #7810 (sandbox credential bindings), #7816 (OOBE suggestion drawer refresh/connect entries), #7818 (background subagent – producer half), #7456 (durable storage profile‑agnostic), #7001 (keep cached system prefix byte‑stable).

---  

### 4. Community Hot Topics  

| Item | Comments / Reactions | Why it matters |
|------|----------------------|----------------|
| **Issue #7812** – *Onboarding suggestions: respect user‑level tool permissions, generate with read‑only tool access* | 💬 3 | Core UX gap: suggestions were not grounded in the user’s actual data. The fix (PR #7833) now lets the suggestion engine run with the user’s approved, read‑only toolset, directly addressing the need for personalized, actionable onboarding. |
| **Issue #7297** – *Error messages stack up in UI after every failed prompt* | 💬 2 | Persistent UI clutter harms usability, especially in QA environments. Still open after >2 weeks; indicates a need for a global error‑dismissal strategy. |
| **Issue #7798** – *CI expedite T1: setup‑rust composite* | 💬 2 | High‑impact infrastructure work that stabilises CI across platforms; already landed via PR #7821. |
| **Issue #7742** – *feat(automations): bound creation preflight and surface missing prerequisites* | 💬 2 | Improves reliability of automation authoring by enforcing an execution contract before persistence. |

*No PRs displayed comment counts in the supplied data, so the issue with the highest comment volume (#7812) is the primary community focal point today.*

---  

### 5. Bugs & Stability – Reports from the Last 24 h  

| Severity | Issue | Summary | Linked Fix / PR (if any) |
|----------|-------|---------|--------------------------|
| **High** | #7842 – *Generic invalid result error during request execution* | Users see a nondescript “invalid result” error that halts interaction. | No dedicated PR yet; likely tied to model‑gateway error handling (see #6985 / #7001). |
| **High** | #7841 – *Telegram setup dead‑ends on “admin must configure”* | Telegram personal‑account linking fails after admin step. | No fix PR yet; related to #7853 (missing tool). |
| **Medium** | #7845 – *Activating a suggested task fails to create/render its thread entry in the left panel* | Thread runs but sidebar entry missing until navigation away/back. | Fixed by PR #7857 (refresh conversations after suggestion). |
| **Medium** | #7853 – *Telegram setup offers personal account linking but cannot complete it (missing tool)* | The personal‑account flow expects a tool that isn’t present. | Awaiting implementation; may share root cause with #7841. |
| **Medium** | #7856 – *MCP tool discovery silently skips camelCase tool names* | Hosted MCP discovery rejects tools whose names aren’t lowercase‑snake. | No PR yet; requires naming‑normalisation in discovery logic. |
| **Medium** | #7825 – *Sandbox egress auth: native iron‑proxy recipes with host credential broker* | GitHub‑specific credential carve‑out needs generalisation. | PR #7810 (credential bindings) addresses part of this; further work needed. |
| **Low** | #7840 – *Slack: connect guidance gap* | UI does not clearly guide users to connect Slack. | No PR yet; low‑impact UX tweak. |
| **Low** | #7855 – *Add Italian language support* | Feature request, not a bug. | No PR yet; low priority. |

*Overall stability:* Most critical bugs have either a linked fix (e.g., #7845 → #7857) or are under active investigation. The remaining high‑severity items (#7842, #7841) are priority candidates for the next bug‑bash sprint.

---  

### 6. Feature Requests & Roadmap Signals  

| Feature | Issue / PR | Indication of Near‑Term Inclusion |
|---------|------------|-----------------------------------|
| **Italian language support** | #7855 | Simple localisation; low effort – likely to appear in the next patch release if maintainers accept community contributions. |
| **Agent‑first GSuite CLI bundle** | #7849 (high risk, scope: tool/extensions/skills) | Large undertaking; marked for v1.4.0 – suggests it is planned but not imminent. |
| **Exact run capability facts** | #7850 (open) | Provides deterministic metadata for automations; aligns with recent outcome‑derivation work (#7650) – good candidate for v1.3.1 or v1.3.2. |
| **Background subagent (receipt spawns, per‑child delivery)** | #7818 (open) | Producer half already merged; consumer half pending – expected to land in the next minor version as part of the R2 background subagent epic. |
| **Durable storage profile‑agnostic layout** | #7456 (open) | Foundational for multi‑profile safety; still open but has had steady updates – likely to be completed before the next major release. |
| **OOBE suggestion drawer refresh/connect entries** | #7816 (open) | Minor UI polish behind a feature flag; could be enabled in the next release if flag is flipped. |
| **AfterTurn lifecycle hook + memory curation** | #7765 (open) | Phase 1 of a larger hook system; may ship with v1.3.0 as an experimental feature. |

*Takeaway:* The team is focusing on stabilising CI (#7821, #7857), improving suggestion relevance (#7833), and hardening core automation diagnostics (#7650, #7850). Feature work that builds on these foundations (background subagents, profile‑agnostic storage, richer automation metadata) is actively progressing.

---  

### 7. User Feedback Summary (x‑ai‑product‑feedback)  

| Feedback Issue | Core Pain Point | User Impact

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-25

---

## 1. Today's Overview
LobsterAI shows **high maintenance velocity** with **10 PRs merged/closed in a single day**, primarily focused on renderer/UI polish, cross-platform asset handling, and developer experience improvements. No new releases were cut, but the volume of merged PRs suggests an imminent release candidate. The three issues closed today were all **stale tickets from April 2026**, indicating a backlog cleanup rather than fresh user-reported problems. The single open PR (#1277) is a dependabot Electron upgrade (40.2.1 → 43.4.1) that has been pending since April — a potential security/maintenance debt item.

---

## 2. Releases
**No new releases published today.** The last release version remains unspecified in the provided data. With 10 PRs merged today covering UI, library, cowork, and plugin subsystems, a patch or minor release (likely `2026.8.x`) is probable within days.

---

## 3. Project Progress — Merged/Closed PRs (2026-08-24)

| PR | Area | Summary | Link |
|----|------|---------|------|
| **#2528** | renderer | Credits loading settings UI | [#2528](https://github.com/netease-youdao/LobsterAI/pull/2528) |
| **#2527** | renderer | Skills: stop persisting selected tab, default to marketplace | [#2527](https://github.com/netease-youdao/LobsterAI/pull/2527) |
| **#2526** | main | Update kits icon URLs | [#2526](https://github.com/netease-youdao/LobsterAI/pull/2526) |
| **#2525** | renderer | Login guide improvements | [#2525](https://github.com/netease-youdao/LobsterAI/pull/2525) |
| **#2524** | renderer, docs, main | **Major**: Cross-platform thumbnail renderer (images, video, PDF, Office, HTML), 16:9 unified sizing, cache strategy, local artifact lifecycle, cloud resource recovery | [#2524](https://github.com/netease-youdao/LobsterAI/pull/2524) |
| **#2523** | renderer, docs, main, cowork, im | Add IM icon | [#2523](https://github.com/netease-youdao/LobsterAI/pull/2523) |
| **#2522** | renderer, artifacts | File share/favorite interaction polish: Unicode filename preservation, instant favorite updates, deduplicated refresh, quota limit dialogs | [#2522](https://github.com/netease-youdao/LobsterAI/pull/2522) |
| **#2521** | renderer, main, cowork | Preserve message selection for context menu (read-only text + copy) | [#2521](https://github.com/netease-youdao/LobsterAI/pull/2521) |
| **#2520** | renderer | Plugin install modal: viewport constraint, scrollable logs/errors, close button, guarded IPC | [#2520](https://github.com/netease-youdao/LobsterAI/pull/2520) |
| **#1193** | perf/sqlite | **Performance**: Eliminate SQLite write amplification via debounce + batch transactions (prevents full DB export on every row mutation) | [#1193](https://github.com/netease-youdao/LobsterAI/pull/1193) |

**Key Themes:**  
- **Library/Artifact System Overhaul** (#2524, #2522): Cross-platform thumbnailing, artifact lifecycle, sharing UX — major feature work.  
- **UI/UX Polish** (#2527, #2521, #2520, #2525, #2528): Modal behavior, tab persistence, context menus, onboarding.  
- **Core Performance** (#1193): SQLite persistence rewrite — critical for stability at scale.  
- **Cowork/IM** (#2523, #2521): Collaborative editing foundations.

---

## 4. Community Hot Topics
All three active issues today are **stale closures from April**, not fresh community discussions. No new issues were opened in the last 24h. The most reacted-to stale issue:

| Issue | Reaction | Core Need |
|-------|----------|-----------|
| **#1187** — Context window / output token settings for model API | 👍 1 | Users hitting `Context overflow` errors with DeepSeek; need manual context window & max token configuration in model settings. |
| #1195 — Custom skill installed to OpenClaw path but missing from skill panel after restart | — | Skill installation path mismatch; skills saved to OpenClaw directory not loaded by LobsterAI on restart. |
| #1192 — Hardcoded default tool config (e.g., headless browser) | — | Users want declarative default tool configs (e.g., `browser: headless: true`) instead of relying on LLM instruction following. |

**Analysis:** The stale issues reveal **configuration gaps** — model context limits, skill discovery paths, and tool defaults — that power users repeatedly encounter. These are strong candidates for the next roadmap cycle.

---

## 5. Bugs & Stability
No **new** bugs reported today. The stale issues closed include two functional bugs:

| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **High** | #1195: Custom skills installed to OpenClaw directory disappear after restart | Closed (stale) | No linked PR |
| **Medium** | #1187: Context overflow with DeepSeek due to missing context window setting | Closed (stale) | No linked PR |
| **Low** | #1192: Cannot hardcode tool defaults (headless browser) | Closed (stale) | No linked PR |

**Note:** These were closed as `stale` without fixes — maintainers should verify if they persist in current builds. The SQLite write amplification fix (#1193) addresses a latent stability risk (DB corruption/performance degradation under heavy write load).

---

## 6. Feature Requests & Roadmap Signals
From stale issues + today's PR themes, likely next-version candidates:

| Feature | Signal Strength | Evidence |
|---------|----------------|----------|
| **Model context window / max tokens per model** | High | #1187 (user pain), no PR yet |
| **Declarative tool defaults (YAML/JSON config)** | Medium | #1192, aligns with skill/config system |
| **Skill installation path normalization** | Medium | #1195, relates to #2527 (marketplace default tab) |
| **Cross-platform artifact thumbnails & lifecycle** | **Delivered** | #2524 merged today — major milestone |
| **Plugin install UX resilience** | **Delivered** | #2520 merged |
| **Electron 43 upgrade** | Pending | #1277 open since April — blocking security updates |

**Prediction:** Next release will ship the library/artifact overhaul (#2524, #2522) and UI polish batch. Model context config and Electron upgrade are the highest-value pending items.

---

## 7. User Feedback Summary
**Pain Points (from stale issues):**
- **Context overflow crashes** with no user-facing setting to adjust — forces session reset or model switch.
- **Skill discovery broken** for custom skills — installs succeed but vanish on restart due to path mismatch (OpenClaw vs LobsterAI).
- **Tool behavior not configurable declaratively** — users resort to unreliable prompt engineering (e.g., "use headless mode").

**Positive Signals (from PRs):**
- Heavy investment in **artifact/library UX** (thumbnails, sharing, favorites) — users likely generating many files.
- **Collaborative editing** (cowork) receiving context-menu and selection fixes — active multi-user usage.
- **Plugin ecosystem** install flow hardened for long error logs — indicates complex plugin installs in the wild.

---

## 8. Backlog Watch — Items Needing Maintainer Attention

| Item | Age | Risk | Action |
|------|-----|------|--------|
| **#1277** — Electron 40.2.1 → 43.4.1 (dependabot) | 146 days | **Security**: Electron 40 EOL; 43 includes Chromium 128, V8 12.8, critical CVEs | **Prioritize merge**; test native modules, `sql.js`, renderer process changes |
| **#1187** — Model context window setting | 146 days | **Usability**: Blocks DeepSeek/large-context users | Design config schema; add to model settings UI |
| **#1195** — Skill path mismatch (OpenClaw vs LobsterAI) | 146 days | **Data loss risk**: User skills silently dropped | Audit skill loader paths; unify installation directory |
| **#1192** — Declarative tool defaults | 146 days | **Power-user friction**: No config escape hatch | Extend tool config schema with `defaults` section |

---

## Summary
**Health: 🟢 Strong velocity, 🟡 Config debt accumulating.**  
The project is shipping substantial UI/core improvements daily. The stale-issue cleanup suggests maintainers are clearing the deck — but the **unfixed root causes** (model context, skill paths, tool defaults, Electron version) remain user-visible gaps. **Electron upgrade (#1277) is the highest-priority technical debt item** and should be unblocked before the next release.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-25

## Today's Overview

Moltis experienced a highly active development day on 2026-08-24, with 19 PRs updated and 2 issues closed, alongside the release of version `20260824.01`. The majority of PRs (16 of 19) were merged or closed, indicating a strong focus on stabilization and bug fixes rather than new feature development. Key areas of progress included improvements to heartbeat timing, Coqui TTS provider behavior, Apple container identifier limits, and integration updates for Coder sandboxes. No critical regressions were introduced, and several longstanding bugs appeared to be addressed.

## Releases

- **Version 20260824.01** ([Release notes](https://github.com/moltis-org/moltis/releases/tag/20260824.01))  
  No detailed changelog provided in release metadata. However, based on the high volume of associated merged PRs, this likely includes fixes for heartbeat logic, TTS provider handling, Apple Containers, Slack tools, and various integrations (WhatsApp, Browserless, MCP).

> *Note*: Breaking changes and migration steps could not be determined due to lack of detailed release notes.

## Project Progress

A total of 16 PRs were merged or closed today, reflecting steady advancement across core functionality:

| Area | Description |
|------|-------------|
| Heartbeat Logic | Fixed active hours enforcement and corrected handling of `end = "24:00"` ([PR #1241](https://github.com/moltis-org/moltis/pull/1241)) |
| TTS Provider | Prevent false "not configured" warnings from Coqui ([PR #1242](https://github.com/moltis-org/moltis/pull/1242)) |
| OAuth Integration | Added support for xAI Grok via SuperGrok/X Premium+ subscription OAuth ([PR #1240](https://github.com/moltis-org/moltis/pull/1240)) |
| Apple Sandbox | Resolved container naming overflow by bounding identifiers to 64 characters ([PR #1327](https://github.com/moltis-org/moltis/pull/1237)) |
| Slack Tools | Allowed configured tools in shared channels while preserving secure defaults ([PR #1238](https://github.com/moltis-org/moltis/pull/1238)) |
| WhatsApp Media | Persisted inbound files locally for use by internal tools ([PR #1228](https://github.com/moltis-org/moltis/pull/1228)) |
| Browser Support | Enabled stealth mode by default; added Browserless v2 container protocol compatibility ([PRs #1227](https://github.com/moltis-org/moltis/pull/1227), [#1229](https://github.com/moltis-org/moltis/pull/1229)) |
| Memory Backend | Normalized config value from `sqlite` to `builtin`; bounded GGUF embedding batch sizes to prevent crashes ([PRs #1235](https://github.com/moltis-org/moltis/pull/1235), [#1236](https://github.com/moltis-org/moltis/pull/1236)) |

Additionally, one open PR remains focused on future expansion:

- **Coder Sandbox**: Adds ephemeral workspace creation via Coder REST API ([PR #1199](https://github.com/moltis-org/moltis/pull/1199)) – still under review.

## Community Hot Topics

While no issues or PRs had significant comment activity (>2), two key topics stood out:

- **xAI Grok OAuth Support (#1239 / PR #1240)**: This addresses demand for native access to Grok models without requiring separate API keys. It aligns with broader trends toward tighter ecosystem integration among AI services.
  - Issue link: [moltis-org/moltis#1239](https://github.com/moltis-org/moltis/issues/1239)
  - PR link: [moltis-org/moltis#1240](https://github.com/moltis-org/moltis/pull/1240)

- **Apple Container Name Limit (#1137 / PR #1237)**: Longstanding instability caused by identifier length restrictions was finally resolved.
  - Issue link: [moltis-org/moltis#1137](https://github.com/moltis-org/moltis/issues/1137)
  - PR link: [moltis-org/moltis#1237](https://github.com/moltis-org/moltis/pull/1237)

## Bugs & Stability

Today saw notable progress in resolving stability and correctness issues:

| Bug | Severity | Status | PR Link |
|-----|----------|--------|---------|
| Apple Container identifiers exceed name limit | Medium-High | ✅ Fixed | [PR #1237](https://github.com/moltis-org/moltis/pull/1237) |
| Coqui TTS incorrectly marked as configured | Low-Medium | ✅ Fixed | [PR #1242](https://github.com/moltis-org/moltis/pull/1242) |
| Cron jobs lose channel context after delivery | Medium | ✅ Fixed (follow-up pending) | [PR #1243](https://github.com/moltis-org/moltis/pull/1243) |
| Local GGUF embeddings crash process when exceeding context limit | High | ✅ Fixed | [PR #1236](https://github.com/moltis-org/moltis/pull/1236) |
| Built-in memory backend misnamed in config | Low | ✅ Fixed | [PR #1235](https://github.com/moltis-org/moltis/pull/1235) |
| Obscura stealth mode not enabled by default | Medium | ✅ Fixed | [PR #1227](https://github.com/moltis-org/moltis/pull/1227) |

All identified bug-fix PRs have been successfully merged into main.

## Feature Requests & Roadmap Signals

Two emerging feature directions may shape upcoming releases:

- **xAI Grok Subscription OAuth (PR #1240)** – Enhances usability for paying X subscribers using device-code flow. Likely candidate for near-term release if adopted broadly.
- **Coder Remote Workspace Sandbox (PR #1199)** – Expands cloud-native execution capabilities. Still in early stages but strategically important for developers relying on remote environments.

These additions suggest growing emphasis on third-party integrations and enterprise-grade deployment options.

## User Feedback Summary

Although direct user comments were sparse today, several pain points seem to have influenced recent work:

- Users experiencing intermittent failures with Apple Containers due to overly long names now benefit from a robust fix.
- Developers frustrated by inaccurate Coqui TTS provider status will see clearer diagnostics moving forward.
- Enterprises leveraging WhatsApp messaging will appreciate improved file persistence and safer media download limits.
- Teams utilizing scheduled tasks ("cron") will notice better conversation continuity.

Overall sentiment appears positive given proactive resolution of known friction points.

## Backlog Watch

Only one older issue remained unaddressed until resolution today:

- **Issue #1137**: Originally posted June 27, 2026 — Apple container IDs exceeding 64-char limit led to frequent sandboxing errors. Now resolved via SHA-suffixed naming scheme introduced in PR #1237.

No other stale or neglected items observed within the dataset timeframe.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-25

---

## 1. Today's Overview

CoPaw (agentscope-ai/QwenPaw) is experiencing high community engagement with **50 issues** and **46 PRs** updated in the past 24 hours, alongside a new **v2.1.1-beta.2** release. The project is clearly in an active beta stabilization phase for the 2.1.x line, with heavy focus on multi-agent collaboration UX, session management bugs, and memory/performance issues. The ratio of open-to-closed issues (31:19) and PRs (20:26) suggests the team is keeping pace with incoming reports while shipping fixes, but several high-severity stability concerns—unbounded memory growth and cross-session message routing bugs—remain unresolved in the open queue.

---

## 2. Releases

### v2.1.1-beta.2
- **feat(console):** Add artifacts to assistant response card ([PR #7161](https://github.com/agentscope-ai/QwenPaw/pull/7161))
- **fix(video):** Deliver tool-result videos on OpenAI Responses API ([PR #7061](https://github.com/agentscope-ai/QwenPaw/pull/7061))
- **test(browser):** Browser test updates (truncated in release notes)

No breaking changes or migration notes listed in this release.

---

## 3. Project Progress

### Merged/Closed PRs (26 total, selected highlights):

| PR | Type | Summary |
|---|---|---|
| [#7167](https://github.com/agentscope-ai/QwenPaw/pull/7167) | feat(creator) 1.1.0 | Major Creator update: Anthropic/Gemini protocol support, mainstream image/video providers, dialogue-gated video dispatch, 2GB uploads, session status cards, project copy & recreate |
| [#7234](https://github.com/agentscope-ai/QwenPaw/pull/7234) | fix(memory) [DO NOT MERGE] | Restore periodic ReMe index compaction — addresses lazy deletion accumulation in BM25 index |
| [#7248](https://github.com/agentscope-ai/QwenPaw/pull/7248) | fix(ci) | Derive Docker boundary version from `__version__.py` instead of hard-coding |
| [#7247](https://github.com/agentscope-ai/QwenPaw/pull/7247) | fix(providers) [DO NOT MERGE] | Stop sending media to SiliconFlow DeepSeek V4 (model capability annotation gap) |
| [#7173](https://github.com/agentscope-ai/QwenPaw/pull/7173) | fix(e2e) | Re-anchor agents action cells after console redesign column shifts |
| [#6067](https://github.com/agentscope-ai/QwenPaw/pull/6067) | feat: sensitive files & allow read global | Security/permissions enhancement |
| [#7245](https://github.com/agentscope-ai/QwenPaw/pull/7245) | chore(console) | Remove desktop mode reminder |
| [#7221](https://github.com/agentscope-ai/QwenPaw/pull/7221) | enhancement (CLOSED) | `reload_agent()` drops plugin workspace-scoped registrations after config change — confirmed bug, fix likely incoming |

**Key progress signals:**
- **Creator 1.1.0** is a major feature milestone, significantly expanding model/provider ecosystem coverage.
- **Memory compaction fix** (#7234) and **Docker version derivation** (#7248) are infrastructure hardening moves.
- Two "DO NOT MERGE" PRs (#7234, #7247) suggest active investigation/iteration on memory and provider compatibility issues.

### Open PRs Advancing Features:

| PR | Type | Summary |
|---|---|---|
| [#7237](https://github.com/agentscope-ai/QwenPaw/pull/7237) | fix(console) | Freeze session identity for chat sends — directly addresses cross-session routing bug (#7231) |
| [#7183](https://github.com/agentscope-ai/QwenPaw/pull/7183) | feat(skills) | Workspace-scoped Skill preload policy |
| [#7080](https://github.com/agentscope-ai/QwenPaw/pull/7080) | feat(memory) | PowerContext pluggable long-term memory backend |
| [#7219](https://github.com/agentscope-ai/QwenPaw/pull/7219) | feat(console) | All-agent LLM & tool-call trend chart on Token Usage |
| [#6960](https://github.com/agentscope-ai/QwenPaw/pull/6960) | feat(pawport) | Import flow from Codex and Qoder into QwenPaw |
| [#7066](https://github.com/agentscope-ai/QwenPaw/pull/7066) | fix(drivers) | Persist rotated OAuth2 refresh tokens for MCP servers |
| [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) | feat(memory) | Reranker UI config panel for ReMeLightMemoryCard |
| [#7190](https://github.com/agentscope-ai/QwenPaw/pull/7190) | feat(qwenpaw-data) | PyPI runtime path, docker-compose one-shot demo, env inheritance fix |

---

## 4. Community Hot Topics

### Most Active Issues by Comment Count:

| Issue | Comments | Key Theme |
|---|---|---|
| [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) | 11 | Multi-step task execution silently stops after planning phase — requires manual "继续" to proceed |
| [#6782](https://github.com/agentscope-ai/QwenPaw/issues/6782) | 9 | Docker v2.0.1: Plugin/App marketplace stuck in maintenance mode |
| [#338](https://github.com/agentscope-ai/QwenPaw/issues/338) | 8 | Webhook integration request — async API-style callback pattern |
| [#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) | 8 | Console stop request cancels active Feishu session (cross-session identity leak) |
| [#3224](https://github.com/agentscope-ai/QwenPaw/issues/3224) | 7 | "CoPaw Agent Teams" — natural-language-driven self-evolving multi-agent collaboration |
| [#5563](https://github.com/agentscope-ai/QwenPaw/issues/5563) | 6 | Message spam from fragmented multi-step agent responses — needs aggregation |
| [#7224](https://github.com/agentscope-ai/QwenPaw/issues/7224) | 6 | Integration help: connecting Aider CLI as an agent in QwenPaw |
| [#7085](https://github.com/agentscope-ai/QwenPaw/issues/7085) | 5 | Per-channel independent model configuration |
| [#5720](https://github.com/agentscope-ai/QwenPaw/issues/5720) | 5 | Memory leak (v1.1.12.post2): async task + HTTP session accumulation |
| [#6925](https://github.com/agentscope-ai/QwenPaw/issues/6925) | 4 | Multi-agent collaboration should stay in one conversation window |

**Underlying needs analysis:**
- **Multi-agent collaboration UX** is the dominant theme across 5+ top issues (#3224, #5563, #6925, #2420, #3013, #2750): users want seamless in-session collaboration, not fragmented conversation windows.
- **Session management integrity** (#7011, #7231, #6074): cross-session identity leaks and message routing errors are eroding trust in multi-session usage.
- **Integration extensibility** (#338 webhooks, #7224 Aider CLI, #7181 Qwen_Code): power users want QwenPaw as an orchestration hub for external tools/agents.
- **Operational reliability** (#6921 silent stops, #5720/#7222 memory leaks): prolonged autonomous execution is unreliable.

---

## 5. Bugs & Stability

Ranked by severity:

| Severity | Issue | Description | Fix Status |
|---|---|---|---|
| 🔴 Critical | [#7222](https://github.com/agentscope-ai/QwenPaw/issues/7222) | Backend memory grows to **20GB+** after 2 days of continuous operation (runtime accumulation, not startup leak) | No fix PR yet |
| 🔴 Critical | [#7231](https://github.com/agentscope-ai/QwenPaw/issues/7231) | Console messages sent to **wrong session** when switching sessions during generation — cross-session mix-up & message loss | Fix PR [#7237](https://github.com/agentscope-ai/QwenPaw/pull/7237) open |
| 🟠 High | [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) | Agent silently stops after planning multi-step tasks; requires manual "继续" | No fix PR yet |
| 🟠 High | [#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) | Console stop request cancels active Feishu session (cross-session identity crossing) | Related to #7237 |
| 🟠 High | [#7221](https://github.com/agentscope-ai/QwenPaw/issues/7221) | `reload_agent()` drops plugin workspace-scoped registrations (runtime hooks, modes, slash commands) on any config change | Closed but likely needs follow-up PR |
| 🟠 High | [#7210](https://github.com/agentscope-ai/QwenPaw/issues/7210) | Built-in tools enabled in agent.json but not injected into session function schema | No fix PR yet |
| 🟡 Medium | [#6822](https://github.com/agentscope-ai/QwenPaw/issues/6822) | Transient streamable HTTP MCP connection failure permanently blocks active conversation after auto-reconnect | No fix PR yet |
| 🟡 Medium | [#7199](https://github.com/agentscope-ai/QwenPaw/issues/7199) | `daily_paper` job crashes on PDFs with surrogate characters (UnicodeEncodeError) | No fix PR yet |
| 🟡 Medium | [#7136](https://github.com/agentscope-ai/QwenPaw/issues/7136) | File card shows percent-encoded mojibake for non-ASCII filenames in `send_file_to_user` | Closed (likely fixed) |
| 🟡 Medium | [#7242](https://github.com/agentscope-ai/QwenPaw/issues/7242) | Dashboard takes 6+ minutes to load with 74 agents | No fix PR yet |
| 🟢 Low | [#6782](https://github.com/agentscope-ai/QwenPaw/issues/6782) | Docker marketplace stuck in maintenance mode | Closed |
| 🟢 Low | [#7121](https://github.com/agentscope-ai/QwenPaw/issues/7121) | Flaky nightly test: `test_sibling_sessions_run_without_serializing` timing assertion on macOS | Closed |

**Memory issues (#5720 + #7222) remain a systemic concern** — the closed #5720 described 580MB leak in 64 minutes (v1.x), while #7222 reports 20GB+ accumulation over 2 days (v2.1). The "DO NOT MERGE" ReMe compaction fix ([PR #7234](https://github.com/agentscope-ai/QwenPaw/pull/7234)) suggests the team is actively investigating memory pathologies.

---

## 6. Feature Requests & Roadmap Signals

### Strong Community Demand (likely candidates for near-term versions):

| Feature | Issue | Signals |
|---|---|---|
| **Multi-agent collaboration in single session window** | [#6925](https://github.com/agentscope-ai/QwenPaw/issues/6925), [#3013](https://github.com/agentscope-ai/QwenPaw/issues/3013), [#2420](https://github.com/agentscope-ai/QwenPaw/issues/2420) | 3+ overlapping issues, consistent user demand; aligns with Agent Teams vision |
| **Per-channel model configuration** | [#7085](https://github.com/agentscope-ai/QwenPaw/issues/7085) | 5 comments, clear use case (DingTalk=fast, WeChat=Chinese-optimized, Console=local) |
| **Message aggregation for multi-step responses** | [#5563](https://github.com/agentscope-ai/QwenPaw/issues/5563) | 6 comments, high UX impact; complements artifacts feature in v2.1.1-beta.2 |
| **Smart context compression timing** | [#7230](https://github.com/agentscope-ai/QwenPaw/issues/7230) | Closed but discussion continues; compress only during idle, not mid-task |
| **Webhook / API callback integration** | [#338](https://github.com/agentscope-ai/QwenPaw/issues/338) | 8 comments, 👍1, "good first issue" label — signals maintainer openness |

### Already in Pipeline (PRs open/under review):

| Feature | PR | Status |
|---|---|---|
| Workspace-scoped Skill preload | [#7183](https://github.com/agentscope-ai/QwenPaw/pull/7183) | Open, first-time contributor |
| PowerContext long-term memory backend | [#7080](https://github.com/agentscope-ai/QwenPaw/pull/7080) | Open, under review |
| Reranker UI for ReMeLightMemoryCard | [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) | Open, under review |
| Import from Codex/Qoder | [#6960](https://github.com/agentscope-ai/QwenPaw/pull/6960) | Open, first-time contributor |
| Token Usage trend chart | [#7219](https://github.com/agentscope-ai/QwenPaw/pull/7219) | Open |

**Prediction for v2.1.1 stable / v2.2:** Session identity fixes (#7237), memory compaction, per-channel model config, and message aggregation are the strongest candidates. The Agent Teams proposal (#3224) is likely a v2.2+ or v3.0 scope item given its ambition.

---

## 7. User Feedback Summary

### Pain Points (ranked by frequency and intensity):

1. **Agent execution unreliability during autonomous tasks** — Agents silently stop mid-task ([#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921), 11 comments) or get interrupted by context compression ([#7230](https://github.com/agentscope-ai/QwenPaw/issues/7230)). Users running overnight tasks wake up to stalled work or approval dialogs, making "hands-off" operation impractical.

2. **Multi-agent UX fragmentation** — Collaboration creates new conversation windows per exchange ([#6925](https://github.com/agentscope-ai/QwenPaw/issues/6925)), requiring manual switching to see inter-agent dialogue ([#2420](https://github.com/agentscope-ai/QwenPaw/issues/2420), [#3013](https://github.com/agentscope-ai/QwenPaw/issues/3013)). Identity confusion between agents is also reported.

3. **Message spam / information overload** — Multi-step tasks flood chat with 10+ message cards ([#5563](https://github.com/agentscope-ai/QwenPaw/issues/5563)). The new artifacts feature in v2.1.1-beta.2 may partially address this.

4. **Memory and performance degradation** — Long-running instances become unusable ([#7222](https://github.com/agentscope-ai/QwenPaw/issues/7222): 20GB+, [#5720](https://github.com/agentscope-ai/QwenPaw/issues/5720): 580MB in 1 hour). Dashboard load times of 6+ minutes with many agents ([#7242](https://github.com/agentscope-ai/QwenPaw/issues/7242)).

5. **Approval system over-triggering** — Auto-approval mode still prompts for intermediate/temporary file operations during task execution ([#7198](https://github.com/agentscope-ai/QwenPaw/issues/7198)), defeating the purpose of unattended operation.

### Positive Signals:
- Creator 1.1.0's expanded provider support is well-received.
- Import flow from Codex/Qoder ([PR #6960](https://github.com/agentscope-ai/QwenPaw/pull/6960)) addresses migration friction.
- The artifacts feature in v2.1.1-beta.2 is a step toward richer response presentation.

### User Personas Evident:
- **Power users running 50-74 agents** (dashboard scaling, memory issues)
- **Chinese enterprise users** (DingTalk/Feishu integration, Chinese model preferences, approval workflows)
- **Autonomous task operators** (overnight batch jobs, silent-stop frustration)
- **Developer integrators** (Aider CLI, Qwen_Code, webhooks — wanting QwenPaw as orchestration layer)

---

## 8. Backlog Watch

| Issue | Created | Last Updated | Status | Concern |
|---|---|---|---|---|
| [#338](https://github.com/agentscope-ai/QwenPaw/issues/338) — Webhook support | 2026-03-02 | 2026-08-24 | Open, 8 comments, 👍1, "good first issue" | ~6 months old, labeled good-first-issue but no PR; high community interest |
| [#2420](https://github.com/agentscope-ai/QwenPaw/issues/2420) — Multi-agent collaboration UX | 2026-03-27 | 2026-08-24 | Open, 4 comments | 5 months old, overlapping with #6925 and #3013; no clear owner |
| [#2750](https://github.com/agentscope-ai/QwenPaw/issues/2750) — Multi-agent isolation/enhancement | 2026-04-01 | 2026-08-24 | Open, 2 comments | Security-sensitive (information leakage), low engagement |
| [#3224](https://github.com/agentscope-ai/QwenPaw/issues/3224) — Agent Teams proposal | 2026-04-10 | 2026-08-24 | Open, 7 comments | Ambitious design doc, no implementation PR; needs roadmap commitment |
| [#3425](https://github.com/agentscope-ai/QwenPaw/issues/3425) — RDBMS storage for config/sessions | 2026-04-15 | 2026-08-24 | Open, 2 comments | Enterprise-grade ask; no maintainer response visible |
| [#5720](https://github.com/agentscope-ai/QwenPaw/issues/5720) — Memory leak (v1.x) | 2026-07-02 | 2026-08-24 | Open, 5 comments | Root cause analysis provided by user; still open while v2.x variant (#7222) appears |
| [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) — Silent task stop | 2026-08-12 | 2026-08-24 | Open, 11 comments | Highest comment count open issue; no assignee or fix PR mentioned |

**Most urgent backlog items needing maintainer attention:**
1. **#6921** (silent task stop) — 11 comments, highest community frustration, no fix in sight
2. **#7222** (20GB+ memory growth) — critical for production deployments, no fix PR
3. **#3224** (Agent Teams) — needs explicit roadmap Y/N to manage community expectations
4. **#338** (webhooks) — labeled "good first issue" but stalled for 6 months; consider assigning or removing label

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

**ZeptoClaw Project Digest – 2026‑08‑25**  

---

### 1. Today's Overview  
The repository showed minimal activity in the last 24 hours: one issue was updated (opened) and no pull requests or releases were recorded. This indicates a quiet day with no new code merged, but a fresh feature request was submitted that addresses REPL usability. Overall project health remains stable; the codebase is not seeing active development today, but the backlog contains a clear UX‑focused item awaiting review.

### 2. Releases  
*No new releases were published today.*  

### 3. Project Progress  
*No pull requests were merged or closed in the last 24 hours.* Consequently, no features were advanced or bugs fixed via PRs today.

### 4. Community Hot Topics  
| Item | Type | Link | Comments | Reactions | Summary |
|------|------|------|----------|-----------|---------|
| #650 | Issue (feature request) | [qhkm/zeptoclaw#650](https://github.com/qhkm/zeptoclaw/issues/650) | 0 | 0 | Proposes hardening the REPL UX: prevent accidental exit on Ctrl+C/Ctrl+D and improve handling of a lone “/” command. |

**Underlying need:** Users want a more forgiving interactive session that does not terminate unintentionally and that recognises slash‑prefixed commands even when no sub‑command follows. This reflects a desire for a smoother, less error‑prone CLI experience.

### 5. Bugs & Stability  
*No bug, crash, or regression reports were filed today.* Hence, there are no severity‑ranked stability issues to highlight.

### 6. Feature Requests & Roadmap Signals  
The sole open issue (#650) is a feature request aimed at REPL usability hardening. Given its focus on core interactive workflow safety, it is a strong candidate for inclusion in an upcoming maintenance or minor release (e.g., v0.x.y) that polishes the agent CLI before larger feature work.

### 7. User Feedback Summary  
- **Pain points:** Accidental loss of REPL state via Ctrl+C/D; confusing error message when entering a solitary “/”.  
- **Use case:** Users rely on the `zeptoclaw agent` REPL for iterative experimentation and expect it to behave like typical shells (graceful interrupt handling, recognizable command prefixes).  
- **Satisfaction:** Implicit dissatisfaction with current interrupt handling; no positive feedback recorded today.  

### 8. Backlog Watch  
- **Issue #650** (opened 2026‑08‑24) remains unanswered and unassigned. It is the only open item in the dataset and thus the highest‑priority backlog entry requiring maintainer triage. No other long‑standing issues or PRs were visible in the supplied data.  

---  

*All links point directly to the relevant GitHub items.*  
*Digest generated solely from the supplied 24‑hour activity data.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-25

## 1. Today's Overview

ZeroClaw shows sustained high activity: 50 issues and 50 PRs were updated in the last 24 hours, with 43 issues still open/active and 7 closed, while PRs remain heavily open (45 of 50). The release pipeline is quiet — no new versions shipped today — but the codebase is moving fast on security hardening, provider reliability, and testing infrastructure. A notable cluster of new PRs from contributor **JordanTheJet** (#10304, #10307–#10314) landed on 2026-08-24, covering pairing-code policy, shared-workspace access gating, SkillForge engine removal, and E2E test coverage, indicating an unusually productive single-contributor push. The overall health signal is positive: several S0/S1-class bugs are actively being fixed, and the project's maintainers are keeping long-running RFCs and trackers alive rather than letting them go stale.

## 2. Releases

No new releases in the last 24 hours. Version 0.8.4 (prebuilt aarch64) remains the current public build referenced in issue reports.

## 3. Project Progress

Four PRs were merged/closed in the last 24 hours, all targeted fixes:

- **[#10208](https://github.com/zeroclaw-labs/zeroclaw/pull/10208) — fix(tests): fix Windows platform test failures** (NiuBlibing). Fixes unsafe `Command::new("bash")` usage on Windows where `CreateProcess` searches the system directory before `PATH`, colliding with the WSL launcher stub. Touches release-script gates across cron, providers, tools, and MCP.
- **[#9563](https://github.com/zeroclaw-labs/zeroclaw/pull/9563) — fix(channels): populate the typed media envelope from Telegram** (ATECHPCS). Telegram was emitting `[IMAGE:<path>]` markers into message *text* while leaving `msg.attachments` empty, making image-carrying turns undetectable downstream. This fix was the unblocking dependency for the stacked #8965 skills auto-activation PR.
- **[#10027](https://github.com/zeroclaw-labs/zeroclaw/pull/10027) — fix(providers): report the served model in reliable fallback failure logs** (IftekharUddin). Resolves the pinned-fallback diagnostic gap where logs named the requested model rather than the model actually served.
- **[#10144](https://github.com/zeroclaw-labs/zeroclaw/pull/10144) — fix(providers): complete lifecycle provider accounting** (vrurg). Introduces a poll-owned `ProviderDispatch` collector normalizing direct, Reliable, Router, model-pin, vision-override, and streaming paths so every physical provider leaf is recorded exactly once in start order.

Each of these closed corresponding issues (#10251, #10224/#10023, #10143), confirming a tight issue→PR loop.

## 4. Community Hot Topics

- **[Issue #8603 — RFC: ZeroClaw Chat Completions profile](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)** (24 comments, open since 07-02, risk:high). The most active discussion by far. Community is pushing hard for OpenAI Chat Completions protocol compatibility to enable Open WebUI, LobeChat, Continue.dev, Aider, LangChain, and the OpenAI SDK as clients. This is the clearest demand signal in the project right now and a likely roadmap cornerstone.
- **[Issue #7431 — Pre-turn tool elicitation hints for NL routing](https://github.com/zeroclaw-labs/zeroclaw/issues/7431)** (6 comments). Detection of routing requests in natural language to set `send_via` before the main LLM call.
- **[Issue #9512 — Annotate bespoke CI gates with motivating incident](https://github.com/zeroclaw-labs/zeroclaw/issues/9512)** (5 comments). Documentation/CI-burden debate; reflects a community desire to de-mystify complex CI gates (`repo-structure`, `nix-hash-drift`, etc.).
- **[Issue #10165 — independent delegate bypasses `block_high_risk_commands`](https://github.com/zeroclaw-labs/zeroclaw/issues/10165)** (4 comments, S0 severity). Security critical; delegates ignore their own risk profile.
- **[Issue #7759 — Decouple gateway WebSocket lifetime from agent turn lifecycle](https://github.com/zeroclaw-labs/zeroclaw/issues/7759)** (4 comments, priority:p1). Client disconnects should not cancel in-flight turns.
- **[Issue #9363 — Config metadata remains English in localized surfaces](https://github.com/zeroclaw-labs/zeroclaw/issues/9363)** (4 comments). Localization gap in Config group headings and section labels.

## 5. Bugs & Stability

Ranked by severity:

- **S0 — [Issue #10165](https://github.com/zeroclaw-labs/zeroclaw/issues/10165): independent delegate bypasses `block_high_risk_commands` on its own risk profile.** A high-risk command (e.g., `rm`) succeeds through an independent delegate even when the delegate's `risk_profile` sets `block_high_risk_commands = true` — data-loss/security risk. In-progress, no fix PR yet.
- **S1 — [Issue #10223](https://github.com/zeroclaw-labs/zeroclaw/issues/10223): ZeroCode drops Ctrl+C and blocks input while reconnecting during an active turn.** Status bar shows "Reconnecting…" but keyboard is unresponsive; workflow-blocking. In-progress.
- **S2 — High/moderate risk:**
  - **[#10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068): interactive agent session caps context at 32,000 tokens** despite `max_context_tokens = 131072`; compacts prematurely with `ctx: 15,538 / 32,000`. In-progress.
  - **[#9812](https://github.com/zeroclaw-labs/zeroclaw/issues/9812): provider fallback carries the primary's model id**, so a correctly configured fallback can never fire — and the fallback is poisoned into cooldown. Marked `r:needs-repro`, `status:stale` — needs maintainer attention.
  - **[#9820](https://github.com/zeroclaw-labs/zeroclaw/issues/9820): calculator tool emits literal `<TOOLCALL>` pseudo-syntax** instead of a real function call (nvidia/llama-3.3-nemotron-super-49b-v1).
  - **[#10073](https://github.com/zeroclaw-labs/zeroclaw/issues/10073): `StoragePolicy::Rolling` performance regression** under sustained event volume.
  - **[#10238](https://github.com/zeroclaw-labs/zeroclaw/issues/10238): ZeroCode shows stale "Connected" state** after daemon exit.
  - **[#10232](https://github.com/zeroclaw-labs/zeroclaw/issues/10232): daemon diagnostics drop the underlying error chain** (only `e.to_string()` recorded).
  - **[#10175](https://github.com/zeroclaw-labs/zeroclaw/issues/10175): Google TTS API key header not marked sensitive**.
  - **[#10224](https://github.com/zeroclaw-labs/zeroclaw/issues/10224) (closed): custom provider 5xx errors logged as duplicated escaped JSON.**
- **Testing robustness:** [#10251](https://github.com/zeroclaw-labs/zeroclaw/issues/10251) (17 Telegram `listen_*` tests assert wall-clock timeouts — closed) and [#10272](https://github.com/zeroclaw-labs/zeroclaw/issues/10272) (correlate Hailo log assertions under parallel tests) show a broader pattern of flaky parallel test infrastructure being actively cleaned up.

Fixes exist for #10023/#10224 (via PR #10027), #10251 (via #10208), and #10143 (via #10144).

## 6. Feature Requests & Roadmap Signals

- **OpenAI Chat Completions compatibility ([#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603))** — the rising tide; expect this to become a headline feature in the next major version given 24 comments and an accepted RFC status.
- **OIDC milestone tracker ([#8289](https://github.com/zeroclaw-labs/zeroclaw/issues/8289))** — staged `AuthProvider` implementation for canonical principals and inbound authentication; already accepted, coordinating #7141.
- **Pre-turn tool elicitation ([#7431](https://github.com/zeroclaw-labs/zeroclaw/issues/7431))** and **WebSocket lifetime decoupling ([#7759](https://github.com/zeroclaw-labs/zeroclaw/issues/7759))** — both priority:p1/p2 accepted features improving agent UX.
- **StoragePolicy::Rolling retirement ([#10073](https://github.com/zeroclaw-labs/zeroclaw/issues/10073))** — architecture cleanup absorbing row-count cap into `Rotating`.
- **New PRs by JordanTheJet (2026-08-24)** signal near-term direction: stronger default pairing-code policy ([#10307](https://github.com/zeroclaw-labs/zeroclaw/pull/10307)), per-agent shared-workspace gating ([#10308](https://github.com/zeroclaw-labs/zeroclaw/pull/10308)), centralizing tool-call formatting ([#10311](https://github.com/zeroclaw-labs/zeroclaw/pull/10311)), removing the orphaned SkillForge engine ([#10309](https://github.com/zeroclaw-labs/zeroclaw/pull/10309)), and bounding the success-path `/models` response ([#10314](https://github.com/zeroclaw-labs/zeroclaw/pull/10314)).

Prediction: the Chat Completions RFC (#8603) and the reliable-provider accounting work are the most likely candidates to drive the next release's feature set.

## 7. User Feedback Summary

- **Real-world hardware pain:** [#9820](https://github.com/zeroclaw-labs/zeroclaw/issues/9820) reports on Raspberry Pi 5 (aarch64) with an NVIDIA NIM model where the calculator tool degrades into literal pseudo-syntax — a practical model-compat gap users are hitting.
- **Context limits:** [#10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068) shows frustration that the interactive agent caps at 32k despite explicit 131072 configuration — users expect configured budgets to be honored.
- **Protocol interop demand:** [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) reflects users wanting to plug ZeroClaw into their existing OpenAI-protocol toolchains (LobeChat, Continue.dev, Aider, LangChain).
- **Localization dissatisfaction:** [#9363](https://github.com/zeroclaw-labs/zeroclaw/issues/9363) — users see a half-translated product; shell and pane titles localize but Config metadata stays English.
- **Fallback reliability:** [#9812](https://github.com/zeroclaw-labs/zeroclaw/issues/9812) describes a correctly configured fallback that silently never fires — a trust-eroding failure for users relying on provider redundancy. PR #10027 addresses the related logging half.
- **Security-consciousness:** Multiple issues (#10165, #10175, #10173, #10199, #10256) show a user base actively testing sandbox and secret-handling boundaries — a mature, security-aware community.

## 8. Backlog Watch

- **[Issue #9812 — Provider fallback carries the primary's model id](https://github.com/zeroclaw-labs/zeroclaw/issues/9812)** (created 08-07, risk:high). Marked `r:needs-repro` and `status:stale` but has serious consequences (fallback never fires, cooldown poisoning). Needs maintainer triage to un-stale or close with a repro request.
- **[Issue #8603 — RFC: Chat Completions profile](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)** (open since 07-02, 24 comments, status:accepted/no-stale). High interest but no linked implementation PR — the community is waiting on concrete progress.
- **[Issue #7759 — Decouple gateway WebSocket lifetime from agent turn](https://github.com/zeroclaw-labs/zeroclaw/issues/7759)** (06-16, priority:p1, risk:high). Long-running accepted feature still in-progress; touches web UX and reconnect behavior.
- **[Issue #8289 — OIDC milestone tracker](https://github.com/zeroclaw-labs/zeroclaw/issues/8289)** (06-24). Roadmap critical for auth story, still in progress with no visible PRs.
- **[Issue #7431 — Pre-turn tool elicitation hints](https://github.com/zeroclaw-labs/zeroclaw/issues/7431)** (06-09). Oldest open enhancement in this set; accepted but needing an owner.
- **[Issue #10165 — delegate security bypass](https://github.com/zeroclaw-labs/zeroclaw/issues/10165)** (08-20, S0). Despite the highest severity rating, no fix PR is linked yet — this should be priority one for maintainers.

**Overall health assessment:** Active, security-conscious, and steadily shipping targeted fixes. The main risks are the S0 delegate security hole without a linked fix, the stale-but-important fallback bug (#9812), and the large cohort of open PRs (45) that suggests a growing review bottleneck.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*