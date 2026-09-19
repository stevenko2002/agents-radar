# OpenClaw Ecosystem Digest 2026-09-20

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-09-19 22:15 UTC

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



# OpenClaw Project Digest — 2026-09-20

---

## 1. Today's Overview

OpenClaw is experiencing **high activity with significant stability concerns**. The project shipped **v2026.9.5** today with 64 direct commits across 4,179 pull requests from 503 contributors. However, the release is immediately shadowed by a wave of **P0/P1 regression reports** — particularly around update failures, Codex plugin breakage, and gateway hangs — suggesting the release train is moving faster than validation can absorb. With 337 open issues and 304 open PRs, the maintainers face a substantial triage backlog, though several focused fix PRs by `steipete` and others are already targeting the most severe failures.

---

## 2. Releases

### v2026.9.5

**Released:** 2026-09-19 (stable channel)

- **64 direct commits** · **4,179 pull requests** · **503 contributors**
- [Release notes](https://docs.openclaw.ai/releases) | [Changelog](https://docs.openclaw.ai/changelog)
- **Linux companion:** v2026.9.5 (linux-stable channel)
- **Artifacts:** [AppImage](https://github.com/openclaw/openclaw/releases/download/v2026.9.5/OpenClaw-2026.9.5-amd64.AppImage) · [Debian package](https://github.com/openclaw/openclaw/releases/download/v2026.9.5/OpenClaw-2026.9.5-amd64.deb)

**Breaking changes / migration notes:** None explicitly documented in the release metadata, but the release appears to include Codex plugin integration changes that are already generating migration-related bug reports (see #152744, #152968).

**Assessment:** The release cadence is aggressive. Given the volume of P0 issues filed within hours of publication, this release should be treated as **hot-fix territory** rather than a clean upgrade.

---

## 3. Project Progress

### Merged/Closed PRs Today (196 total in last 24h)

Key merged/closed PRs that advanced fixes or features:

| PR | Area | Summary |
|---|---|---|
| [#153147](https://github.com/openclaw/openclaw/pull/153147) | docs, cli, commands | Retain Doctor advisories and terminal reports during update — fixes #152759, #152918 |
| [#150898](https://github.com/openclaw/openclaw/pull/150898) | docs, gateway, cli | Reconcile managed service pinned to another install — closes #150744 |
| [#153178](https://github.com/openclaw/openclaw/pull/153178) | docs, cli | Verify Gateway recovery after update finalization fails — fixes #152811, #152788, #152742, #153000, #152974 |
| [#153093](https://github.com/openclaw/openclaw/pull/153093) | maintainer | Prevent overlapping lifecycle work during long package updates |
| [#152466](https://github.com/openclaw/openclaw/pull/152466) | docs, gateway | Foreground Gateway updates fail after replacing runtime files |
| [#145335](https://github.com/openclaw/openclaw/pull/145335) | docs, gateway, cli | Complete Gateway upgrades after Node prefix changes — closes #107930 |
| [#153190](https://github.com/openclaw/openclaw/pull/153190) | agents | Keep 7.34 validation on compatible provider gates |
| [#153198](https://github.com/openclaw/openclaw/pull/153198) | app: web-ui | Navigate image attachments in message galleries |
| [#153193](https://github.com/openclaw/openclaw/pull/153193) | app: web-ui | Restore compact PR previews and co-author avatars |
| [#152254](https://github.com/openclaw/openclaw/pull/152254) | app: web-ui | Apply theme defaults when switching themes |
| [#152057](https://github.com/openclaw/openclaw/pull/152057) | feat: browser | Unify local Chrome setup across desktop and terminal |
| [#147886](https://github.com/openclaw/openclaw/pull/147886) | channel: feishu | Accept documented `markdown.tables` option |
| [#153204](https://github.com/openclaw/openclaw/pull/153204) | plugin: workboard | Unfinished cards cannot be archived |
| [#153087](https://github.com/openclaw/openclaw/pull/153087) | app: android | Talk repeats every GPT-Live answer when no realtime model is pinned |

**Open PRs of note (not yet merged):**

- [#151863](https://github.com/openclaw/openclaw/pull/151863) — fix(codex): preserve delivery facts and native approval semantics (XL, P2, waiting on author)
- [#150153](https://github.com/openclaw/openclaw/pull/150153) — keep task recovery working across shared Gateway updates (being split into focused replacements)
- [#152640](https://github.com/openclaw/openclaw/pull/152640) — transfer file bytes through the existing node channel (P2, needs proof)
- [#152652](https://github.com/openclaw/openclaw/pull/152652) — deliver uploaded files to remote harness turns
- [#153126](https://github.com/openclaw/openclaw/pull/153126) — use remote workspace skills in agent tasks
- [#153124](https://github.com/openclaw/openclaw/pull/153124) — read and update files on remote workspaces (memory-core)
- [#153209](https://github.com/openclaw/openclaw/pull/153209) / [#153208](https://github.com/openclaw/openclaw/pull/153208) / [#153207](https://github.com/openclaw/openclaw/pull/153207) / [#153206](https://github.com/openclaw/openclaw/pull/153206) — compaction curation with typed judgments (draft/experimental, stacked on #152234)

---

## 4. Community Hot Topics

### Most Commented Issues (top 5 by comment count)

| Issue | Comments | Reactions | Summary |
|---|---|---|---|
| [#149361](https://github.com/openclaw/openclaw/issues/149361) — Umbrella: WebUI performance and stability | 50 | 0 👍 | Index of WebUI perf/stability issues across desktop and mobile; small fixes grouped for later batch |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) — Leaks unreaped hook/tool child processes | 30 | 1 👍 | Zombie accumulation from `openclaw-hooks`, `bash`, `codex` child processes causing runtime degradation |
| [#144911](https://github.com/openclaw/openclaw/issues/144911) — MCP server init timeout crashes Gateway | 30 | 0 👍 | Unhandled rejection in child cleanup path when stdio MCP server fails to initialize within 30s |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) — Gateway Memory Leak (RSS 350MB → 15.5GB) | 27 | 1 👍 | Severe memory leak causing OOM crashes and launchd-handoff restart cycles over 2-3 days |
| [#115908](https://github.com/openclaw/openclaw/issues/115908) — Session transcript projection livelock | 18 | 0 👍 | Sustained write load causes non-converging rebuild cycle, blocking Node main thread |

**Underlying needs:** Users are reporting systemic stability problems — memory leaks, process leaks, event loop stalls — that compound over long-running sessions. The WebUI umbrella (#149361) with 50 comments suggests a coordinated effort to catalog frontend issues, indicating the community is self-organizing around UI stability.

---

## 5. Bugs & Stability

### Critical (P0) — Active Today

| Issue | Severity | Fix PR? | Summary |
|---|---|---|---|
| [#152744](https://github.com/openclaw/openclaw/issues/152744) | P0, 🦞 diamond lobster | ❌ | Codex retained-state migration never settles after 2026.9.5; session-catalog stuck cold |
| [#152759](https://github.com/openclaw/openclaw/issues/152759) | P0, 🦪 silver shellfish | ✅ [#153147](https://github.com/openclaw/openclaw/pull/153147) | `openclaw update` 2026.9.4 → 2026.9.5 fails with `doctor-failed`; auto-rollback succeeds but upgrade is silent |
| [#152689](https://github.com/openclaw/openclaw/issues/152689) | P0, 🦪 silver shellfish | ❌ | Codex resident catalog retry loop fills `os.tmpdir()` with 342MB plugin captures after 2026.9.5 |
| [#146637](https://github.com/openclaw/openclaw/issues/146637) | P0, 🦪 silver shellfish | ❌ | npm update 2026.9.3 → 2026.9.4 fails at global install swap on Linux Mint |
| [#145252](https://github.com/openclaw/openclaw/issues/145252) | P0, 🌊 off-meta tidepool | ❌ | Tracking umbrella for 2026.9.3/2026.9.4 update, upgrade, and recovery reliability |
| [#151467](https://github.com/openclaw/openclaw/issues/151467) | P0, 🦐 gold shrimp | ❌ | Self-upgrade deadlock & rollback cron failure (v6.33 → v9.4) on Oracle Cloud Linux |
| [#153177](https://github.com/openclaw/openclaw/issues/153177) | P0, 🦪 silver shellfish | ✅ [#153178](https://github.com/openclaw/openclaw/pull/153178) | Update failure: `finalize:targetConfigConvergence` on 2026.9.5 (Linux) |
| [#152968](https://github.com/openclaw/openclaw/issues/152968) | P0, 🦪 silver shellfish | ❌ | 2026.9.5 — Codex app-server cannot find `openai:default` OAuth profile; HTTP 401 on every lane |
| [#152981](https://github.com/openclaw/openclaw/issues/152981) | P0, 🦪 silver shellfish | ❌ | Gateway startup hangs ~17 min at `sidecars.model-runtime` on Windows 11 with 2026.9.5 |
| [#149106](https://github.com/openclaw/openclaw/issues/149106) | P0, 🦪 silver shellfish | ❌ | Gateway froze for ~31 min on Windows 11 / 2026.9.1, then self-recovered |

### High (P1) — Notable

| Issue | Fix PR? | Summary |
|---|---|---|
| [#144712](https://github.com/openclaw/openclaw/issues/144712) | ❌ | npm update fails at "global install swap"; rollback reported as "recovery is unverified" |
| [#112423](https://github.com/openclaw/openclaw/issues/112423) | ❌ | Large SQLite transcript cleanup blocks gateway event loop |
| [#104719](https://github.com/openclaw/openclaw/issues/104719) | ❌ | memory-wiki supplement exhaustive fallback ignores tool deadline |
| [#134993](https://github.com/openclaw/openclaw/issues/134993) | ❌ | Gateway pegs one CPU core (busy loop in filesystem discovery) after 2026.8.1 |
| [#121232](https://github.com/openclaw/openclaw/issues/121232) | ❌ | memory-core dreaming: ranker nominates candidates the applier always rejects |
| [#104992](https://github.com/openclaw/openclaw/issues/104992) | ❌ | Transcript redaction (`***`) replayed into model context on session resume — **security risk** |
| [#56217](https://github.com/openclaw/openclaw/issues/56217) | ❌ | Secret provider crash-loop exhausts 1Password service account rate limits |

### Pattern Analysis

The dominant theme is **update reliability**: at least 6 distinct P0/P1 issues trace to `openclaw update` failures across macOS, Linux, and Windows. The Codex plugin integration in 2026.9.5 is the second major failure vector, with migration, auth, and catalog issues cascading across multiple reports. Memory/process leaks (#91588, #97616, #152961) represent chronic reliability debt that continues to worsen with each release.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likely Next Version? |
|---|---|---|
| **Plugin LLM intercept hooks** (`llm_intercept_input` / `llm_intercept_output`) | [#115988](https://github.com/openclaw/openclaw/issues/115988) — P2, security, 5 comments | **High** — directly addresses compliance/redaction demand; prior PRs #61485, #103959 attempted |
| **Remote workspace skills & memory** | [#153126](https://github.com/openclaw/openclaw/pull/153126), [#153124](https://github.com/openclaw/openclaw/pull/153124) | **High** — active XL PRs by Kimiyu-186; enterprise use case |
| **File transfer over node channel** | [#152640](https://github.com/openclaw/openclaw/pull/152640) | **Medium** — needs proof, but addresses remote workspace gap |
| **Compaction semantic curation** | [#153209](https://github.com/openclaw/openclaw/pull/153209), [#153208](https://github.com/openclaw/openclaw/pull/153208), [#153207](https://github.com/openclaw/openclaw/pull/153207), [#153206](https://github.com/openclaw/openclaw/pull/153206) | **Medium** — draft/experimental; depends on #152234 |
| **Human-readable Telegram topic names** | [#7406](https://github.com/openclaw/openclaw/issues/7406) — P2, 4 comments | **Low** — old issue, low activity |
| **Portable evidence bundles for QA** | [#138098](https://github.com/openclaw/openclaw/issues/138098) | **Low

---

## Cross-Ecosystem Comparison



# Cross-Project Ecosystem Report — Personal AI Assistants & Agents
**Date:** 2026-09-20 | **Scope:** 12 open-source AI agent projects

---

## 1. Ecosystem Overview

The personal AI assistant / agent open-source landscape is experiencing a period of **rapid feature acceleration paired with acute stability debt**. Multiple projects shipped major releases or large PR batches today, but nearly all are contending with security regressions, update reliability failures, and channel integration fragility — especially around WhatsApp, Telegram, and Codex/Model provider integrations. The ecosystem is bifurcating: a few projects (OpenClaw, Hermes Agent, ZeroClaw) show high velocity with large contributor bases, while others (IronClaw, PicoClaw, TinyClaw) are in consolidation or infrastructure triage. **Common technical battle lines** have emerged: update safety nets, memory/process leak remediation, plugin governance hooks, and multimodal channel support. The developer audience is clearly prioritizing **self-hosting capability, update non-destructiveness, and granular tool permissioning** over raw feature count.

---

## 2. Activity Comparison

| Project | Open Issues | Open PRs (24h) | Merged/Closed (24h) | Latest Release | Health Signal |
|---|---|---|---|---|---|
| **OpenClaw** | 337 | 304 | 196 | v2026.9.5 (today) | ⚠️ High activity, P0 regression wave |
| **Hermes Agent** | ~50 | ~50 | 35 | None today | ✅ High velocity, strong merge rate |
| **ZeroClaw** | 23 open | 50 open | 0 | None today | ⚠️ High WIP, zero merges, 3 S0 security gaps |
| **NanoBot** | Low | 21 open | 7 | None today | ✅ Responsive, security-focused |
| **CoPaw** | 10 | 7 open | 0 | None today | ⚠️ Active reporting, no merges yet |
| **LobsterAI** | Low | ~6 | 6 | None today | ✅ Stabilization cycle, data integrity wins |
| **NanoClaw** | 3 new | 5 open | 0 | None today | ⚠️ Steady, small contributor base |
| **Moltis** | 1 critical | 1 major | 0 | None today | ⚠️ Quiet, single-point failure risk |
| **IronClaw** | 0 | 2 open | 0 | None | ⚪ Consolidation, low visibility |
| **PicoClaw** | 1 critical | 0 | 1 (merged) | None | 🔴 Infrastructure outage (site down) |
| **TinyClaw** | 0 | 0 | 0 | None | ⚪ No activity |
| **ZeptoClaw** | 0 | 0 | 0 | None | ⚪ No activity |

**Health Score Key:** ✅ = Stable/Positive | ⚠️ = Active Risk | 🔴 = Critical Concern | ⚪ = Inactive/Unknown

---

## 3. OpenClaw's Position

### Advantages vs Peers
- **Largest contributor base:** 503 contributors, 4,179 PRs — an order of magnitude above most peers. This translates to rapid fix iteration (multiple P0 fix PRs merged within hours of release).
- **First-mover channel breadth:** Covers Feishu, QQ (via PicoClaw ecosystem), Telegram, WhatsApp, Matrix, and desktop/web UI simultaneously.
- **Strong maintainer responsiveness:** `steipete` and others are actively shipping focused fixes for the worst regressions.

### Technical Approach Differences
- **Monolithic core with plugin architecture:** Unlike ZeroClaw's runtime/gateway split or Hermes Agent's desktop/native split, OpenClaw keeps a tightly integrated core with extensible plugin slots. This accelerates feature shipping but concentrates regression risk.
- **Aggressive release cadence:** v2026.9.5 shipped with 64 commits in a single day — faster than any peer. This is a deliberate "release early, patch fast" strategy, but it is generating user trust erosion due to update failures.

### Community Size Comparison
OpenClaw's issue/PR volume (337 issues, 304 PRs open) is 3–5× larger than the next most active project (ZeroClaw, Hermes Agent). This gives it a **network effect advantage** but also a triage burden that smaller projects avoid by having fewer users.

---

## 4. Shared Technical Focus Areas

These requirements are emerging across **multiple projects** simultaneously:

| Requirement | Projects Affected | Specific Need |
|---|---|---|
| **Update Safety & Rollback** | OpenClaw, Hermes Agent, NanoBot | Atomic update swaps, verified rollback, recovery markers. OpenClaw's `doctor-failed` and Hermes' `exit 4` Windows failures both point to fragile update orchestration. |
| **Plugin/Tool Governance Hooks** | OpenClaw, CoPaw, ZeroClaw | Pre-tool-call policy hooks, escalation-only tool policies, `llm_intercept_input/output` for compliance. CoPaw (#7880) and ZeroClaw (#10968) both reveal gaps where approvals are silently inert in unattended contexts. |
| **Memory/Process Leak Remediation** | OpenClaw, Hermes Agent, NanoBot | Zombie child processes, RSS leaks (350MB → 15.5GB), SQLite transcript cleanup blocking event loops. This is chronic debt across all long-running agent processes. |
| **Multimodal Channel Support** | PicoClaw, ZeroClaw, Hermes Agent | WhatsApp image/PDF previews, QQ channel emoji/voice, DeepSeek audio/PDF rejection handling. Channel-specific parsing and fallback classifiers are a universal need. |
| **Self-Hosting & Air-Gapped Deployment** | NanoBot, Hermes Agent, IronClaw | Custom API endpoints, offline update mechanisms, local runtime bootstrapping. Enterprise demand is pushing all projects toward zero-external-dependency operation. |
| **Provider Aggregation & Fallback** | Moltis, NanoBot, CoPaw | Groq as first-class provider, AimlAPI/SenseNova aggregation, DeepSeek/OpenCode error handling. Users want model choice without proxy complexity. |

---

## 5. Differentiation Analysis

| Project | Feature Focus | Target Users | Architecture Signature |
|---|---|---|---|
| **OpenClaw** | Channel breadth, desktop+web+mobile | Power users, multi-platform | Monolithic core, plugin slots, aggressive release |
| **Hermes Agent** | Desktop security, local model mgmt | Desktop-first, privacy-conscious | Electron desktop, native integrations, GPG boundaries |
| **ZeroClaw** | WhatsApp hardening, Anthropic cache optimization | Cost-sensitive, Rust ecosystem | Rust runtime, gateway/runtime split, ZeroCode TUI |
| **NanoBot** | Security hardening, enterprise self-host | Security-conscious, self-hosters | Bun runtime, SHA-256 verified updates, dream sandboxing |
| **CoPaw** | Plugin governance, UI stability | Qwen/DeepSeek ecosystem users | PawApp SDK, agent control plane, React UI |
| **LobsterAI** | Data safety, SQLite integrity | Local-first, conversation-heavy | Electron + React, per-session MCP, atomic writes |
| **PicoClaw** | QQ channel depth, lightweight | Tencent QQ users, embedded | Lightweight agent, channel-specific parsing |
| **IronClaw** | Identity/hosting seams, processless agents | Edge/embedded, NEAR ecosystem | IdentyClaw Passport, host-mediated seams |

---

## 6. Community Momentum & Maturity

### Rapidly Iterating (High Velocity)
- **OpenClaw:** 196 PRs merged in 24h, but P0 regression wave demands caution.
- **Hermes Agent:** 35 PRs merged, strong desktop hardening, clean merge rate.
- **ZeroClaw:** 50 open PRs but zero merges — deep review queue, not a slowdown. High community engagement.

### Stabilizing (Consolidation Phase)
- **LobsterAI:** 6 PRs closed, all focused on data integrity and UI modularization. Moving from feature expansion to trust-building.
- **NanoBot:** Security patches landing, self-update infrastructure being built. Maturing from prototype to production-ready.
- **IronClaw:** Quiet consolidation, two PRs under review. Preparing for a bundled release.

### At Risk / Low Activity
- **PicoClaw:** Critical infrastructure outage (website down 10+ days). Single active PR merged after 6-month review cycle. Community access severely impacted.
- **Moltis:** Single-point failure risk — one critical bug (#1277) and one large feature PR (#1276) represent the entire active surface.
- **TinyClaw, ZeptoClaw:** No observable activity.

---

## 7. Trend Signals

### Industry Trends Extracted from Community Feedback

1. **"Update or Die" — Update Reliability is the New Security Baseline**
   At least 6 distinct P0 issues across OpenClaw trace to `openclaw update` failures. Hermes Agent's Windows update aborts (`exit 4`) and NanoBot's SHA-256-verified self-update infrastructure both signal that **users now treat update mechanism integrity as a security prerequisite**, not a convenience feature. Projects that fail to deliver atomic, verifiable, auto-recovering updates will lose user trust rapidly.

2. **Plugin Governance is the New battleground**
   CoPaw (#7878, #7880), OpenClaw (#115988), and ZeroClaw (#10968) are all converging on the same need: **external, policy-driven tool call interception**. The pattern is clear — users want to plug in their own classifiers, compliance hooks, and approval gates without monkey-patching the host. This is becoming a table-stakes capability for any agent targeting enterprise or multi-user deployments.

3. **Channel Fatigue is Real — WhatsApp is the Flashpoint**
   ZeroClaw has 8+ open issues clustered around WhatsApp Web (device linking, image previews, inbound downloads, mentions). PicoClaw's QQ channel PR (#1349) required 6 months of review. The lesson: **channel integration is not a one-time implementation — it's an ongoing maintenance burden** driven by provider-side API changes. Projects that rely on a single dominant channel are especially vulnerable.

4. **Cost Optimization is Driving Architecture Decisions**
   ZeroClaw's Anthropic prompt-cache TTL PRs (#10724, #10960) and NanoBot's memory consolidation fix (#5403) reveal that **users are aggressively optimizing for token efficiency and inference cost**. This is no longer a niche concern — it's shaping runtime architecture (tool-spec ordering for cache stability, configurable TTLs, API-reported token counting).

5. **The "Agent Orchestration" Layer is Emerging**
   Moltis's `spawn_agent` tool whitelist bug (#1277) and ZeroClaw's delegate sub-agent progress tracking (#10531) both point to a nascent pattern: **parent agents spawning child agents with predictable tool inheritance and observability**. This is the multi-agent orchestration layer being built from the ground up — and it's currently the most fragile part of every project's stack.

### Value for AI Agent Developers
- **Update orchestration patterns** from OpenClaw and NanoBot are immediately reusable.
- **Plugin governance hook architectures** from CoPaw and ZeroClaw provide a reference for building policy-driven tool layers.
- **Anthropic cache optimization** techniques (tool-spec sorting, TTL configuration) from ZeroClaw can yield 20–40% token cost reductions in any Rust or Go agent runtime.
- **Channel abstraction patterns** from PicoClaw's QQ integration and ZeroClaw's WhatsApp hardening show how to build provider-agnostic multimodal adapters without monolithic channel code.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



# NanoBot Project Digest — 2026-09-20

## 1. Today's Overview
NanoBot is experiencing high development activity, particularly driven by pull request turnover (28 PRs updated in the last 24 hours, with 7 merged/closed and 21 currently open). While issue tracking is quiet (only 1 active security issue updated), the volume of merged security patches and feature PRs indicates a highly responsive maintenance cycle. The project is actively maturing its enterprise capabilities, production update flows, and multi-provider ecosystem, while hardening core security and memory management.

## 2. Releases
*   **No new releases** were published in the last 24 hours.

## 3. Project Progress
The project has successfully merged several critical security and UI enhancements recently, while advancing several major feature branches:
*   **Merged/Closed PRs:**
    *   **Security Hardening:** PR #4668 (`fix: enforce message outbound policy`) and PR #4667 (`fix: protect user skills from dream writes`) were closed/merged, addressing critical security and data corruption boundaries.
    *   **WebUI Polish:** PR #5816 (`feat(webui): polish provider setup and unify settings controls`) was closed, standardizing provider branding and layout alignment across settings.
*   **Key Advancing Features (Open PRs):**
    *   **Self-Update Infrastructure:** PR #5817 introduces stable and source self-update flows (`nanobot update` and `--update-dev`) with SHA-256-verified Bun runtime bootstrapping.
    *   **Provider Ecosystem Expansion:** PR #5666 adds `aimlapi.com` as an OpenAI-compatible gateway, and PR #5453 adds SenseNova (商汤日日新) support. PR #5352 adds WebUI controls for removing model providers.
    *   **Channel Integrations:** PR #4919 adds custom Telegram Bot API base URL support, PR #5606 adds email recipient alias filtering, and PR #5292 fixes Matrix room-level reply threading.

## 4. Community Hot Topics
*   **Security Vulnerability Bypass (Issue #4072):** The single most watched item today is the open security issue detailing how `ExecTool` workspace restrictions can be bypassed via relative symlinks. It highlights the need for path resolution checks prior to shell execution.
*   **Self-Hosting and Enterprise Readiness (PR #4919, #5817):** The high concentration of PRs targeting custom API endpoints, offline update mechanisms, and local runtime bootstrapping reflects a strong community and enterprise drive to run NanoBot in isolated, self-hosted, or air-gapped environments.
*   **Multi-Provider Aggregation (PR #5666, #5453):** The push to integrate AI aggregators like AimlAPI and native Chinese models like SenseNova indicates strong user demand for easy access to diverse model catalogs without external proxy configuration.

## 5. Bugs & Stability
*   **Critical Security Bug (Issue #4072):** *Security: ExecTool restricted workspace can be bypassed through relative symlinks*. The shell guard currently checks command text and absolute paths but fails to resolve relative symlinks inside the workspace before execution, allowing directory traversal. **Status:** Open, needs urgent maintainer action.
*   **Priority p1 Bug (PR #5403):** *fix(memory): use API-reported prompt tokens to trigger consolidation*. Local tiktoken estimations undercount prompt tokens by 30-50% for modern models, preventing memory consolidation from triggering at context limits. **Fix Status:** Fix proposed in open PR #5403.
*   **Priority p2 Bugs:**
    *   **Memory Lock Garbage Collection (PR #4819):** Replaces `WeakValueDictionary` with a plain `dict` for consolidation locks to prevent premature garbage collection during idle cycles.
    *   **Web Fetch URL Coercion (PR #4820):** Prevents non-string URL values (like integers) from corrupting the web fetch cache signatures.
    *   **Recovery Checkpointing (PR #5748):** Fixes a bug where tool progress was not persisted at batch boundaries, risking loss of completed tool results on process crash.
    *   **Sustained Goal Loops (PR #5257):** Bounds sustained-goal continuation to prevent infinite loops when the agent goes idle without a terminal condition.

## 6. Feature Requests & Roadmap Signals
*   **Production Update Tooling (`nanobot update`):** The addition of stable update commands (PR #5817) signals that the project roadmap is preparing for stable production releases, offering users a safe, non-source-dependent upgrade path.
*   **Enterprise Channel Configuration:** Custom Telegram API endpoints (PR #4919) and shared-mailbox email filters (PR #5606) indicate the roadmap is steering towards enterprise-grade deployment where users sit behind custom gateways or corporate mail servers.
*   **User Skill Protection (PR #4667):** The concept of `dream_managed: true` frontmatter indicates a roadmap where automated background agents (Dream mode) are strictly sandboxed from overwriting user-defined skills.

## 7. User Feedback Summary
*   **Isolation and Security Expectations:** Users rely heavily on workspace restriction and skill protection. The bypass via symlinks (Issue #4072) and the need to protect user skills from automated dream writes show that sandbox integrity is a top-tier user expectation.
*   **WebUI Mobile and Localization Demands:** Fixes for iOS PWA tap events (PR #5641) and agent activity localization across 10 locales (PR #5367) show users demand a polished, mobile-friendly, and multilingual interface for managing agents.
*   **Flexibility in Model Choices:** Users are actively requesting easy model switching, prompting the community to submit PRs for provider management UIs and aggregators.

## 8. Backlog Watch
*   **Issue #4072 (Security: ExecTool restricted workspace bypass):** This is the highest-priority open item. It has been open since May but updated recently, requiring a technical fix to resolve relative symlinks before execution.
*   **PR #5817 (Self-update flows):** While highly valuable, this large infrastructure change needs careful review to ensure the Bun bootstrap and update scripts do not introduce platform-specific bootstrapping failures.
*   **PR #5666 & #5453 (New Providers):** These third-party provider integrations are marked with `conflict` labels, indicating they may require rebase and careful merging to align with ongoing rapid provider framework changes.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>



# Hermes Agent Project Digest — 2026-09-20

## 1. Today's Overview
Hermes Agent is experiencing exceptionally high development velocity and community engagement today, with 50 issues and 50 pull requests updated in the last 24 hours. The project health is strong, characterized by a massive merge wave: 35 pull requests were merged or closed, focusing heavily on desktop application hardening, messaging platform deduplication fixes, and local model management. While no new software releases were published today, the underlying codebase on `main` is advancing rapidly with key stability patches and community-driven features.

## 2. Releases
*No new releases were published today.*

## 3. Project Progress
The project has seen significant progress across multiple subsystems, marked by a high volume of merged and closed pull requests:
*   **Desktop Security & Hardening:** Multiple critical desktop stability and security boundaries were tightened. PR #99784 restricts renderer window-open side effects, PR #99800 disables GPG signing for synthetic Git commits, and PR #99798 prevents the app from launching with incomplete Python backends.
*   **Messaging Platform Fixes:** PR #116401 addressed a long-standing issue with the BlueBubbles adapter, ensuring a single iMessage maps to one session instead of spawning duplicate chats due to `new-message` and `updated-message` webhook events.
*   **Local Model Management:** PR #99785 introduced a local model memory manager for LM Studio, allowing Hermes to dynamically unload idle models and preserve warm primary models based on local hardware resources.
*   **UI/UX Polish:** Visual and structural improvements were merged, including a majority-vote BiDi algorithm for Persian text rendering (PR #116432), correct chronological ordering of completed Kanban cards (PR #116050), and a per-turn cost stats strip for the desktop message footer (PR #116559).
*   **Gateway & Auth:** PR #99787 merged explicit and durable MCP OAuth authorization flows, and PR #116438 improved gateway messaging when a model connection is reset mid-request.

## 4. Community Hot Topics
The most active discussions center on integration blockers, desktop extensibility, and provider stability:
*   **[Blocked Integration - 120 Comments] Issue #88584:** The community is heavily watching the automated Nous-to-Enterkey integration, which is currently blocked by merge conflicts in `cron/jobs.py`. This issue has generated massive discussion on coordination and release branch management.
*   **[Provider Stability - 19 Comments] Issue #107307:** Users are discussing severe interruption loops where the Codex provider fails on Pro Full and Pro Light modes, shrinking usable intervals and causing sequential session failures.
*   **[Plugin SDK Wishlists - 9 Comments] Issue #116305:** A highly detailed feature request cataloging desktop plugin SDK hooks (such as settings gateways, session lists, and typed bridges) from a major 12-plugin community catalog intake.
*   **[CLI Compatibility - 8 Comments] Issue #62810:** Technical discussions around CLI exit-status contracts, specifically why boolean handler success returns exit status `1`.

## 5. Bugs & Stability
Several active bugs pose significant stability, compatibility, or security risks:
*   **Critical Security/Privacy Risk (Reopened): Issue #94876** reports that the `/debug` command on Windows uploads sensitive session transcripts non-interactively to `dpaste.com` without explicit user consent. This requires immediate maintainer attention.
*   **Severe Performance Regression: Issue #99943** clamps the compressor context window to `model.ollama_num_ctx` on cloud providers (like DeepSeek), silently dropping a 1M token window down to 65,536 tokens. This severely impacts long-context cloud sessions.
*   **Windows Update Failures: Issue #116375** reports that Windows desktop updates abort with `exit 4` because the update gate opens before the hand-off script claims the marker.
*   **macOS Native Crash: Issue #10188

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



Based on the GitHub data for **PicoClaw** up to **2026-09-20**, here is the project digest.

---

### 1. Today's Overview
PicoClaw shows low overall development velocity today, characterized by a single major community issue and the closure of one long-running enhancement PR. Feature development is steadily advancing through community contributions, specifically in the QQ channel domain. However, project health is currently dominated by a critical operational issue: the official website (picoclaw.io) has been down since mid-September due to an expired TLS certificate, which severely impacts user onboarding and documentation access. Immediate maintainer intervention is required to resolve the infrastructure failure.

### 2. Releases
*No new releases were published today.*

### 3. Project Progress
* **PR #1349 Closed (Enhancement):** A long-active pull request (opened in March 2026) has been successfully merged. This update significantly upgrades the QQ Channel integration by adding support for parsing and replying to diverse message types, including QQ Channel emojis, voice notes, images, video, and files. It also enables replying with local attachments and prioritizes Markdown-formatted messages for richer output. This marks a major step forward for the multimodal capabilities of the agent on Tencent QQ.

### 4. Community Hot Topics
* **Issue #3377 (Critical - Site Down):** The most pressing community concern is the expiration of the TLS certificate for `https://picoclaw.io` on September 10, 2026. 
  * **Underlying Need:** Users, prospective contributors, and the broader community cannot access the project homepage, documentation, or official channels. The site is completely unreachable across all standard browsers and TLS clients. The community urgently needs the maintainers to renew the certificate and restore the domain's accessibility.
  * **Link:** [sipeed/picoclaw Issue #3377](https://github.com/sipeed/picoclaw/issues/3377)

### 5. Bugs & Stability
* **Critical: TLS Certificate Expiry (Issue #3377):** The homepage `picoclaw.io` is completely offline. This is a high-severity infrastructure/regression issue rather than a code bug, but its impact on the project's usability is critical. 
  * **Fix Status:** No active PR exists yet to address this; the issue is currently marked as `stale`, which is concerning given its critical nature. Maintainer action is needed to automate or manually renew the SSL/TLS certificates.

### 6. Feature Requests & Roadmap Signals
* **Multimodal Messaging Integration:** The merge of PR #1349 signals a clear roadmap direction toward making PicoClaw a truly multimodal agent. Future iterations are likely to expand attachment handling (audio, visual, files) across other supported channels, mirroring the QQ Channel upgrades.
* **Infrastructure Maintenance:** The website outage serves as a stark signal that the project may need automated CI/CD pipelines or monitoring tools specifically for domain certificate renewal to prevent future community blackouts.

### 7. User Feedback Summary
* **Pain Points:** Users are frustrated by the inability to access the project’s primary web hub (`picoclaw.io`). This blocks documentation lookup, download of binaries, and general community engagement.
* **Positive Reception:** The QQ channel improvements address long-standing user demands for rich media interaction, indicating that channel-specific feature depth is highly valued by the PicoClaw user base.

### 8. Backlog Watch
* **Issue #3377 (Critical/Stale):** Despite being marked stale, this issue is the top priority for the maintainer team. Leaving a project homepage down for over 10 days severely impacts open-source project health and user retention. 
* **PR #1349 (Merged):** Tracking the lifecycle of this PR (open for ~6 months) highlights that community contributions, especially those adding complex channel-specific parsing logic, require significant review time and should be prioritized in the maintainer backlog to avoid stagnation.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



Based on the GitHub activity for the **NanoClaw** repository (`nanocoai/nanoclaw`) up to September 20, 2026, here is the structured project digest.

---

### 1. Today's Overview
NanoClaw shows steady, active development with five open pull requests addressing key operational features, security hardening, and provider expansion, alongside three newly reported issues focusing on CLI validation and documentation drift. While no new releases were published in the last 24 hours, the development pipeline indicates strong community contributions (such as the Pi agent provider and `ncl health` command). However, project health is tempered by user-reported bugs around silent configuration failures, highlighting ongoing stability challenges in the group management workflow.

### 2. Releases
*   **New Releases:** None published in the last 24 hours.

### 3. Project Progress
No PRs were merged or closed in the last 24 hours, but five PRs remain open and active, showcasing ongoing feature development and hardening:
*   **Pi Agent Provider Integration ([PR #3857](https://github.com/nanocoai/nanoclaw/pull/3857)):** Adds the Pi Coding Agent as an installable provider, running as an in-process SDK to simplify lifecycle management compared to external serve processes.
*   **Local Health Check CLI ([PR #3856](https://github.com/nanocoai/nanoclaw/pull/3856)):** Introduces `ncl health`, a zero-dependency diagnostic command that reads local state directly (central DB and error log) and keeps working even when the host daemon is down (closes #2504).
*   **Sweep Idle Timeout Fix ([PR #3646](https://github.com/nanocoai/nanoclaw/pull/3646)):** Makes the hardcoded 30-minute idle timeout configurable and applies it to both kill paths to prevent slow local models from being prematurely terminated.
*   **Mount Security Fix ([PR #3680](https://github.com/nanocoai/nanoclaw/pull/3680)):** Closes an allowlisted-extra mount bypass vulnerability in `validateSpec`.
*   **MacOS Statusbar Slug Support ([PR #342

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



# IronClaw Project Digest — 2026-09-20

---

## 1. Today's Overview

IronClaw experienced a quiet day on the activity front: zero issues opened, closed, or updated, and no new releases shipped in the last 24 hours. The only movement is on the PR front — two open pull requests remain under review, both touching distinct areas of the codebase (identity/hosting seams and extension provider readiness). Overall project health appears stable with no emergency regressions or spike in community complaints. The maintainers seem to be in a consolidation phase, letting existing PRs mature before merging.

---

## 2. Releases

No new releases were published today. The project's latest release list is empty, suggesting either a recent tag has already been consumed or the team is working toward an upcoming version bundling the pending PRs below.

---

## 3. Project Progress

No PRs were merged or closed in the last 24 hours. The two open PRs from earlier this week remain in review:

| PR | Title | Status | Age |
|---|---|---|---|
| [#7499](https://github.com/nearai/ironclaw/pull/7499) | `feat(identyclaw): host-mediated Passport for practitioners` | Open | ~40 days |
| [#8102](https://github.com/nearai/ironclaw/pull/8102) | `fix(extensions): resolve provider-instance readiness live` | Open | ~2 days |

Neither has crossed the finish line yet, so no features or fixes advanced to the main branch today.

---

## 4. Community Hot Topics

With zero issues and only two PRs on the board, discussion volume is low. The two active PRs are the closest thing to community hot topics:

### 🔥 PR #7499 — IdentyClaw Passport Host Seam
- **Author:** `discernible-io` (first-time contributor)
- **Scope:** docs + dependencies | **Size:** XL | **Risk:** low
- **Link:** [nearai/ironclaw#7499](https://github.com/nearai/ironclaw/pull/7499)
- **Underlying need:** Processless IronClaw agents (those running without a shell or installable extension) need a way to call IdentyClaw Passport for identity verification. This PR adds a thin host-mediated seam (`builtin.idcp` + policy grant/AskAlways exemption) and ships a practitioner host kit under `deploy/identyclaw/`. The low risk rating despite XL size suggests the change is additive and well-isolated. The "new contributor" tag means this may need extra maintainer review to merge safely.

### 🔥 PR #8102 — Provider Instance Readiness Fix
- **Author:** `henrypark133`
- **Link:** [nearai/ironclaw#8102](https://github.com/nearai/ironclaw/pull/8102)
- **Underlying need:** Gmail and Google Calendar extensions fail to activate when the Google OAuth client is configured through the Web UI (administrator configuration) rather than via environment variables. OAuth completes fully — consent, code exchange, token retrieval — but activation still errors out. This PR aims to resolve provider-instance readiness "live" and prioritize admin-configured credentials. It's a targeted bugfix that unblocks a common deployment pattern (Web UI configuration instead of `.env` files).

---

## 5. Bugs & Stability

No new bugs, crashes, or regressions were reported today. The only stability-related item is PR #8102, which is a **fix** (not a bug report) for a known activation failure with Google OAuth via admin UI. Its severity is moderate: affected users can still authenticate but cannot use Gmail/Calendar extensions until resolved. No fix PR exists beyond #8102 itself, and it remains open.

---

## 6. Feature Requests & Roadmap Signals

There are no user-submitted feature requests in the issue tracker today. However, PR #7499 functions as a **de facto roadmap signal**: it introduces a host-mediated identity layer that points toward a future where IronClaw agents can operate in constrained (processless) environments while still accessing identity services. If merged, this would expand the deployment surface of IronClaw to scenarios previously requiring a shell or external extension — a meaningful step for edge and embedded use cases.

---

## 7. User Feedback Summary

No direct user feedback (issue comments, reactions, or discussions) was recorded in the last 24 hours. The project's issue tracker shows zero open or active items, making it impossible to extract satisfaction/dissatisfaction signals from today's data. The absence of new issues could indicate either a quiet user base or a lull between releases.

---

## 8. Backlog Watch

No long-unanswered issues or stalled PRs requiring immediate maintainer attention were identified today. The two open PRs are both relatively fresh (2 and 40 days old), and neither shows signs of abandonment. However, PR #7499's 40-day lifespan combined with its "new contributor" status suggests it may benefit from a maintainer check-in to ensure alignment with project conventions before it ages further.

---

*Digest generated from GitHub API data for `nearai/ironclaw` as of 2026-09-20. Activity window: last 24 hours.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



Based on the latest GitHub activity from **LobsterAI** (`netease-youdao/LobsterAI`) up to September 19, 2026, here is the structured project digest for September 20, 2026.

---

### 1. Today's Overview
LobsterAI is undergoing a heavy stabilization and refactoring cycle, focusing heavily on backend data integrity and UI modularization. Activity in the last 24 hours was moderate but highly productive, resulting in the closure of 6 pull requests and 1 critical issue. The project health is trending positively as severe database reliability risks—posing threats of silent data loss and permanent application boot failures—have been systematically resolved. The development focus is balancing feature expansion (granular tool control) with architectural cleanup (splitting giant UI components).

### 2. Releases
*   **New Releases:** None. No new versions were released in the last 24 hours.

### 3. Project Progress
The project team successfully merged and closed 6 pull requests today, focusing on major architectural refactors, critical bug fixes, and developer environment improvements:
*   **Core Component Refactoring (PR #1069):** Split the bloated `CoworkSessionDetail.tsx` file (over 2100 lines) into modular, dedicated files. This significantly improves code maintainability, testability, and reduces unnecessary UI re-renders during streaming chat.
*   **Per-Session MCP Control (PR #1070):** Implemented a highly requested feature allowing users to toggle individual MCP servers on a per-session basis. The UI resides in the input box toolbar, and the state is robustly persisted to the database and intercepted at the engine level.
*   **Critical SQLite Integrity Overhaul (PR #1072):** Resolved three critical database-level defects linked to Issue #1071. Key fixes include enabling `PRAGMA foreign_keys = ON`, implementing defensive child-row deletions, and ensuring atomic write operations to prevent table corruption during crashes.
*   **Build System Hardening (PR #1075):** Fixed a Windows-specific build failure on machines with WSL installed by forcing the build pipeline to utilize Git Bash (MSYS2) instead of the WSL bash environment.
*   **Migration Data Loss Fix (PR #1076):** Patched a dangerous bug in the scheduled task migration script where a write failure would still result in the process marking the task as successfully migrated, leading to silent data loss.
*   **UI State Synchronization (PR #1077):** Fixed a visual bug where the sidebar task list failed to automatically refresh when the currently active agent was deleted.

### 4. Community Hot Topics
*   **Data Safety & SQLite Reliability (Issue #1071 / PR #1072):** This is the most critical developer focus. The detailed audit highlighting database corruption risks under crash scenarios shows that the community is deeply concerned about local data state safety for AI conversations. The successful merge of PR #1072 is the primary hot topic, highlighting the collaborative effort to secure local storage.
*   **Skill Discoverability & Metadata (Issue #1014):** An open, stale issue highlighting the discovery of LobsterAI's skills by external runtimes like *Dispatch*. The core need is to standardize descriptions so that developers using automated Claude Code environments can easily discover and utilize the project's skills.

### 5. Bugs & Stability
*   **Critical Severity (Data Loss / App Crash - Resolved):**
    *   **SQLite Non-Atomic Writes:** High risk of database table corruption if the application crashed during a save operation. *(Fixed in PR #1072)*
    *   **Orphaned Messages & Cascade Failure:** SQLite's `ON DELETE CASCADE` was not natively enforced due to foreign keys being disabled by default, leading to orphaned message records. *(Fixed in PR #1072)*
    *   **Permanent Boot Failure:** If the `storeInitPromise` timed out, the app could enter a permanently broken state on subsequent launches. *(Fixed in PR #1072)*
    *   **Silent Migration Failures:** Migration scripts marked records complete despite write failures, permanently losing historical task run records. *(Fixed in PR #1076)*
*   **Medium Severity (Environment & UI Glitches - Resolved):**
    *   **Windows/WSL Build Break:** Build script path resolution errors under WSL environments. *(Fixed in PR #1075)*
    *   **Stale Sidebar UI State:** Visual inconsistency where the sidebar retained tasks from a deleted agent. *(Fixed in PR #1077)*

### 6. Feature Requests & Roadmap Signals
*   **Granular Tool Permissioning (Merged as PR #1070):** The shift toward per-session MCP configuration indicates a roadmap moving toward highly context-aware security and tool isolation. Users will likely see more granular scopes for AI tool access in upcoming versions.
*   **Ecosystem Metadata Alignment (Issue #1014):** The request to optimize skill descriptions for external discovery agents suggests the maintainers are positioning the project to be easily consumable by automated Claude Code ecosystems, hinting at future documentation and standard metadata updates.

### 7. User Feedback Summary
*   **Pain Points:** Users previously faced severe anxiety regarding chat history loss during unexpected application crashes or database write conflicts. The resolution of atomic writes is a major positive shift in user trust regarding local data safety.
*   **Workflow Friction:** Managing multiple agents caused UI confusion due to stale sidebar states (resolved in PR #1077). Users highly value performance optimizations, such as the split of the massive `CoworkSessionDetail` component, which will directly translate to smoother streaming chat experiences.

### 8. Backlog Watch
*   **[OPEN] [stale] Issue #1014:** *Add a description to improve Dispatch discoverability.* While marked stale, this is a low-effort but high-impact metadata task. If LobsterAI aims to be a default plugin for Claude Code runtimes, maintaining up-to-date marketplace descriptions is vital. It requires manual maintainer nudging or automated tooling to prevent ecosystem drift. 
*   *Note on Batch Processing:* Many issues and PRs created around March 2026 were marked `[stale]` but updated and processed in bulk on September 19, 2026. This indicates a periodic backlog sweep pattern; maintainers should look into automating stale triaging to prevent critical issues from sitting dormant for six months.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>



Based on the GitHub data for the **Moltis** project (`moltis-org/moltis`) up to September 20, 2026, here is the structured project digest.

---

### 1. Today's Overview
The Moltis project shows quiet but targeted activity over the last 24 hours, with no new releases or merged pull requests. However, there is active development and community reporting, characterized by a major feature pull request integrating Groq as a first-class provider, alongside a critical bug report regarding sub-agent tool configuration. The project remains highly active in the multi-agent orchestration space, but maintainers need to triage the tooling bug and review the large feature PR to keep momentum.

### 2. Releases
* **No new releases** were published today. 

### 3. Project Progress
* **Merged PRs:** None today.
* **Active Development:** The main development effort is currently focused on **PR #1276**, which aims to introduce strict zero-parameter tool schemas, improve mutation result parsing, and officially register Groq as a first-class OpenAI-compatible provider. This PR is currently open and awaits review.

### 4. Community Hot Topics
* **PR #1276: Groq as a first-class provider, strict zero-parameter tool schemas, and mutation results that parse** ([Link](https://github.com/moltis-org/moltis/pull/1276))
  * *Underlying Need:* Users require robust, first-class integration of alternative LLM providers like Groq, alongside stricter tool schema validation to prevent silent failures when tools have zero parameters.
* **Issue #1277: `spawn_agent` treats `active_tools: []` as an empty whitelist — sub-agent gets zero tools** ([Link](https://github.com/moltis-org/moltis/issues/1277))
  * *Underlying Need:* Users orchestrating multi-agent workflows need predictable tool inheritance behavior. Currently, passing an empty list `[]` restricts all tools, rather than defaulting to unrestricted or inherited tools, causing unexpected agent failures.

### 5. Bugs & Stability
* **High Severity Bug: Issue #1277** — `spawn_agent` configuration treats `active_tools: []` as a strict deny-all whitelist, resulting in spawned sub-agents having zero executable tools. This severely breaks multi-agent task delegation. 
* **Status:** No fix PR is currently open. Immediate maintainer triage is required to determine if this is a configuration logic bug or a documentation gap.

### 6. Feature Requests & Roadmap Signals
* **Provider Expansion (Groq):** The push to make Groq a first-class provider in **PR #1276** signals that multi-provider compatibility remains a major roadmap priority for Moltis.
* **Strict Tool Schema Enforcement:** The focus on "strict zero-parameter tool schemas" indicates a shift towards safer, more deterministic tool-calling capabilities, likely to be a key theme in the next minor release once merged.

### 7. User Feedback Summary
* **Pain Points:** Users running complex multi-agent setups are hitting friction when configuring sub-agents, specifically regarding how tool whitelists are parsed (Issue #1277).
* **Satisfaction/Dissatisfaction:** Dissatisfaction is noted regarding provider routing limitations (previously Groq fell back to generic genai models without tool support). The community shows strong demand for the features outlined in PR #1276 to unlock advanced tool use on fast inference providers like Groq.

### 8. Backlog Watch
* **PR #1276:** A large, feature-rich pull request that requires maintainer review and integration to unlock Groq tool support and schema safety improvements.
* **Issue #1277:** A critical bug impacting sub-agent spawning logic that requires prompt maintainer response to clarify configuration behavior and deploy a hotfix if the current behavior is unintended.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>



Here is the structured project digest for CoPaw (QwenPaw) based on the GitHub data from 2026-09-20.

---

### 1. Today's Overview
CoPaw (referred to in the repository issues as QwenPaw) shows high development activity, with 10 active issues and 7 open pull requests updated in the last 24 hours. The project is currently focusing heavily on stability, UI recovery mechanisms, and architectural upgrades to the plugin and application control planes. While no new releases were published today, the community is actively reporting integration bugs and requesting governance features, indicating a vibrant and highly engaged user base.

### 2. Releases
*No new releases were published today.*

### 3. Project Progress
While no pull requests were merged into the main branch in the last 24 hours, several critical fixes and features are actively being drafted for integration:
*   **Console UI Stability (PR #7889):** Aims to fix transient DOM-mutation render errors that cause the console to get stuck on error screens indefinitely.
*   **Agent Media & Audio Handling (PRs #7885, #7886, #7887):** Targets rejections of OpenAI-style file parts (like PDFs) and unknown `input_audio` variants (specifically from providers like DeepSeek), introducing robust retry and fallback classifiers.
*   **Control Plane Architecture (PRs #7874, #7875):** Redesigns the PawApp SDK and application control plane, establishing clear boundaries between public/private actions, durable task ownership, and video generation flows.
*   **Plugin Governance (PR #7880):** A first-time contributor submission introducing escalation-only tool policy hooks to allow external classifiers to evaluate tool calls post-static-governance.

### 4. Community Hot Topics
The most active discussions center around system robustness and developer extensibility:
*   **Console Recovery Failure (#7815 - 5 comments):** Users and maintainers are discussing the critical inability of the console UI to recover from a failed lazy page chunk load, which forces a complete page reload to navigate away.
*   **Plugin Governance Hooks (#7878 - 3 comments):** Developers are requesting a clean API surface to expose pre-tool-call policy hooks within the governance pipeline without needing to monkey-patch the host.
*   **Chat Page React Crash (#7888 - 2 comments):** Focuses on a severe `insertBefore NotFoundError` triggered by browser UI layer text node wrappers (like `<font>` tags), which completely bricks the chat route.

### 5. Bugs & Stability
Several bugs were reported today, ranked by severity below, along with their corresponding active fix PRs:
*   **Critical UI Freezes:**
    *   **Chat Page Stuck (#7888):** Bricks the application on route render due to DOM mutation errors. *Fix PR #7889 is open.*
    *   **Console Chunk Load Failure (#7815):** Lazy-loaded pages fail to recover, keeping the UI on an error screen until a manual full reload. *No direct fix PR open yet.*
*   **Provider Integration & Media Rejections:**
    *   **DeepSeek Audio Rejection (#7876):** Stored audio blocks (`input_audio`) trigger 422 errors, permanently killing conversation sessions. *Fix PRs #7886 and #7887 are open.*
    *   **DeepSeek PDF Rejection (#7883):** Tool-returned PDFs are serialized incorrectly, leading to 400 errors. *Fix PR #7885 is open.*
    *   **OpenCode Free Tier Limits (#7882):** The UI falsely labels free models as usable, but API calls fail with 403 errors.
    *   **MCP OAuth Handshake Failures (#7879):** Inability to connect static Bearer Key MCP servers (like QCC) due to missing OAuth client IDs.
*   **UI/UX & Security Boundary Gaps:**
    *   **Session Working Directory Panel (#7877):** Visual rendering bugs, empty "recent projects" lists, and disabled "apply" buttons.
    *   **kimi-code ACP Runner Security (#7881):** Uneven enforcement of destructive-command and boundary checks.

### 6. Feature Requests & Roadmap Signals
*   **Plugin Policy Hooks (#7878 / PR #7880):** This feature is highly likely to land in the next minor release, providing organizations with the necessary hooks to enforce custom security policies on tool calls.
*   **PawApp SDK Redesign (#7874 / PR #7875):** The major overhaul of the app control plane is a significant architectural signal, paving the way for safer third-party domain integrations and durable background tasks.
*   **Chat History Persistence (#7884):** Users have loudly requested longer chat history retention. While currently a community question, this represents a critical product gap that needs roadmap alignment.

### 7. User Feedback Summary
User feedback highlights severe frustration with session state loss and hard errors:
*   **The "Bricking" Experience:** Users report high friction when a single network or library error (like a chunk load failure or React crash) completely disables navigation or chat, requiring a full application reload to resume work.
*   **Poor History Usability:** Active users are highly dissatisfied with short chat histories, complaining that they cannot easily scroll back to view previous discussions.
*   **Silent Provider Failures:** Integration issues with providers like DeepSeek and OpenCode cause high dissatisfaction because errors are not gracefully handled; instead, they permanently break active sessions.

### 8. Backlog Watch
The following items require immediate maintainer attention and triage:
*   **Issue #7815 (Console chunk load recovery):** High comment count (5)

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



# ZeroClaw Project Digest — 2026-09-20

---

## 1. Today's Overview

ZeroClaw remains in an active, high-development phase with no new releases today but a substantial pipeline of work-in-progress. The project logged 35 issue updates (23 open, 12 closed) and 50 open PRs, with zero merges in the last 24 hours — indicating a deep, stacked review queue rather than a slowdown. The dominant themes are **WhatsApp Web channel hardening** (multiple inbound/outbound fixes), **security policy enforcement gaps** (git subcommand classification, approval gates for unattended turns), and **provider transport improvements** (Anthropic prompt-cache TTL, tool-spec ordering for cache stability). Overall project health is strong: the breadth of open PRs from multiple contributors (including a "distinguished contributor" tier) signals healthy community engagement, while the closure of 12 issues suggests steady triage throughput.

---

## 2. Releases

**No new releases today.** The most recent activity centers on the v0.8.6 / v0.9.0 roadmap tracker (#7432), which remains open and in-progress. No breaking changes or migration notes to report.

---

## 3. Project Progress

No PRs were merged or closed in the last 24 hours — all 50 PRs remain open. However, several PRs advanced significantly through review cycles:

- **#10982** — Attach inline previews (`jpegThumbnail`, dimensions) to outgoing WhatsApp images, fixing empty phone cards ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/10982)).
- **#10980** — Add first-page PDF previews for WhatsApp Web `DocumentMessage`, gated behind a new `document_thumbnails` channel key ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/10980)).
- **#10724** — Configurable `cache_ttl` for Anthropic prompt-cache markers (`"5m"` default, `"1h"` option), with a typed `CacheTtl` enum for fail-fast config parsing ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/10724)).
- **#10964** — Fixes the ZeroCode Config double-refresh bug (two `config/list` requests per save) by consolidating field-list loading ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/10964)).
- **#10959** — Sorts tool specs so the Anthropic prompt-cache prefix is stable across process restarts, preventing cache misses from unordered `HashMap` iteration ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/10959)).
- **#10960** — Adds `ZEROCLAW_CACHE_TTL` environment variable to raise or disable the Anthropic prompt-cache TTL at runtime ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/10960)).
- **#10480** — Runtime recovery from rejected image-bearing HTTP 400s by retrying with novel images omitted ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/10480)).

---

## 4. Community Hot Topics

### #8046 — Optional Telegram Webhook Mode (5 comments, 1 👍)
[Open] Enhancement requesting webhook ingress as an alternative to `getUpdates` long-polling. The underlying need is clear: users behind NAT without inbound ports can already use long-polling, but webhook mode would reduce polling overhead and latency for server deployments with public IPs. **Status: accepted, in icebox.** ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/8046))

### #10531 — Expose Delegate Sub-Agent Progress to Parent (4 comments)
[Open] Enhancement requesting tool receipts and partial output visibility from background `delegate` sub-agents. Currently the parent receives only `{status: "running", output: null}` mid-flight. The need is better observability for long-running delegated work — critical for agent orchestration workflows. ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/10531))

### #10663 — Configurable 1-Hour Prompt-Cache TTL for Anthropic (3 comments)
[Open] Feature request to add a `ttl` field to `cache_control` markers so users can extend beyond the default 5-minute ephemeral window. This directly addresses cost inefficiency for coarse-call-cadence users who currently pay 1.25× cache-write premiums without reads. A companion PR (#10724) already implements the config side. ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/10663))

### #10930 — RFC: One Durable Primitive for Human Questions (2 comments)
[Open] RFC proposing a unified "agent asks human" primitive, noting that only the SOP approval gate currently implements this durable pattern. The need is a general-purpose, persistence-backed question mechanism reusable across channels and workflows beyond SOP. ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/10930))

### #10929 — RFC: Delivery Receipts for Outbound Messages (2 comments)
[Open] RFC observing that `SendMessage` carries no message ID, making it impossible to confirm delivery. The need is a provenance and receipt system for outbound messages — foundational for reliable multi-channel agent communication. ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/10929))

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **S0** | [#10968](https://github.com/zeroclaw-labs/zeroclaw/issues/10968) | Unattended agent turns (cron, heartbeat, headless SOP, spawn_subagent) run with **no ApprovalManager**, so risk-profile tool approvals are silently inert. Security risk: any tool can execute without approval in unattended contexts. | ❌ None yet |
| **S0** | [#9627](https://github.com/zeroclaw-labs/zeroclaw/issues/9627) | Git write verbs bypass the risk classifier via global options like `-C` / `--git-dir`. The scanner reads `args.first()` as the subcommand, missing the actual verb. Data loss / security risk. | ❌ None yet |
| **S0** | [#10966](https://github.com/zeroclaw-labs/zeroclaw/issues/10966) | `--attr-source` can hide a mutating subcommand from approval classification because the shared Git global-option scanner doesn't consume its separate value. | ❌ None yet |
| **S1** | [#8627](https://github.com/zeroclaw-labs/zeroclaw/issues/8627) | WhatsApp Web device linking broken by WhatsApp's new passkey/SHORTCAKE companion-linking gate. Workflow blocked for Web mode users. | ❌ None yet |
| **S2** | [#10952](https://github.com/zeroclaw-labs/zeroclaw/issues/10952) | Seam sanitizers rewrite signed reasoning inside assistant tool-call envelopes; Anthropic rejects the replayed thinking. Provider transport regression. | ❌ None yet |
| **S2** | [#10736](https://github.com/zeroclaw-labs/zeroclaw/issues/10736) | Pre-output stream failure skips advertised non-streaming fallback — the runtime logs the fallback but never sends the non-streaming request. | ❌ None yet |
| **S2** | [#10950](https://github.com/zeroclaw-labs/zeroclaw/issues/10950) | `cost.warn_at_percent` budget warnings are ignored by the runtime — `CostTracker::check_budget` gap. | ❌ None yet |
| **S2** | [#10948](https://github.com/zeroclaw-labs/zeroclaw/issues/10948) | Interruption-scope keys collide across component boundaries due to non-unique encoding of the component tuple. | ❌ None yet |
| **S2** | [#10981](https://github.com/zeroclaw-labs/zeroclaw/issues/10981) | Outgoing WhatsApp images carry no `jpegThumbnail` or dimensions — phones show an empty card. | ✅ PR #10982 (open) |
| **S2** | [#10812](https://github.com/zeroclaw-labs/zeroclaw/issues/10812) | PDFs sent over WhatsApp arrive as generic file cards with no preview on mobile. | ✅ PR #10980 (open) |
| **S2** | [#10972](https://github.com/zeroclaw-labs/zeroclaw/issues/10972) | Inbound WhatsApp images not downloaded — agent receives literal `[Image]` text, vision unusable. | ❌ None yet |
| **S2** | [#10951](https://github.com/zeroclaw-labs/zeroclaw/issues/10951) | ZeroCode Config refreshes the field list twice after saving. | ✅ PR #10964 (open) |
| **S2** | [#10667](https://github.com/zeroclaw-labs/zeroclaw/issues/10667) | ZeroCode can duplicate a streamed response when prompt completion precedes `TurnComplete`. | ❌ None yet |

**Key stability concern:** Three S0-class security bugs cluster around the approval/risk-classification pipeline (git subcommand scanning, unattended ApprovalManager). These are not crashes but represent **silent security gaps** where risky operations execute without human or policy review. The fact that all three are open with no linked fix PRs is the most significant risk signal in this digest.

---

## 6. Feature Requests & Roadmap Signals

The following user-requested features are likely to appear in upcoming versions based on active PRs and accepted issues:

| Feature | Signal Strength | Likely Version |
|---------|----------------|----------------|
| **Anthropic configurable cache TTL** (`cache_ttl`, `1h`) | 🔴 Strong — PR #10724 + #10960 active, issue #10663 accepted | v0.8.6 or v0.9.0 |
| **WhatsApp Web image/PDF previews** (`jpegThumbnail`, `document_thumbnails`) | 🔴 Strong — PRs #10982, #10980 active, issues #10981, #10812 open | v0.8.6 |
| **Telegram webhook mode** | 🟡 Moderate — issue #8046 accepted but in icebox | v0.9.0+ |
| **Delegate sub-agent progress visibility** | 🟡 Moderate — issue #10531 open, no PR yet | v0.9.0+ |
| **Host-scoped admission control / per-agent resource bounds** | 🟡 Moderate — issue #10970 open, no PR yet | v0.9.0+ |
| **Cron/heartbeat dispatch jitter window** | 🟡 Moderate — issue #10969 open, no PR yet | v0.9.0+ |
| **Unified durable "human question" primitive** | 🟢 Early — RFC #10930 open, needs maintainer review | v0.9.0+ |
| **Delivery receipts for outbound messages** | 🟢 Early — RFC #10929 open, needs maintainer review | v0.9.0+ |
| **Channel provenance through runtime admission** | 🟡 Moderate — issue #10891 in-progress, first slice of #6971 | v0.8.6 |

---

## 7. User Feedback Summary

**Pain points observed from issue authors:**

- **WhatsApp Web users** are experiencing a cascade of degraded behaviors: broken device linking due to platform changes (#8627), inbound images arriving as plain text (#10972), broken mentions in both directions (#10973), and outbound images/PDFs rendering as empty cards (#10981, #10812). The concentration of WhatsApp issues suggests this channel is in active repair mode, with multiple contributors (RustLangLatam, coderbuzz, JordanTheJet) working parallel fixes.

- **Cost-sensitive users** are frustrated by the hardcoded 5-minute Anthropic cache TTL (#10663, #10960). Users with call cadences coarser than 5 minutes pay full cache-write premiums with no reads — a known inefficiency that two active PRs aim to resolve.

- **Security-conscious users** have identified three distinct bypass paths in the git approval pipeline (#9627, #10966) plus a gap where unattended turns silently skip all approval checks (#10968). These are reported as S0 severity, reflecting high user concern about unauthorized tool execution.

- **ZeroCode (TUI) users** report minor but annoying UI bugs: duplicate config refreshes (#10951) and occasional duplicate streamed responses (#10667). These are S2 but affect daily usability.

- **Agent orchestration users** delegate work to sub-agents but have zero mid-flight visibility (#10531) — a significant limitation for anyone building multi-agent pipelines.

**Satisfaction signals:** The rapid closure of 12 issues today, the acceptance of multiple feature requests (Telegram webhook, cache TTL, channel provenance), and the "distinguished contributor" tier activity all point to a project that responds well to community input.

---

## 8. Backlog Watch

| Item | Age | Why It Matters |
|------|-----|----------------|
| **#7432** — Runtime & Gateway Delivery Tracker (v0.8.6 + v0.9.0) | ~3.5 months | The canonical roadmap for Phase 2 runtime and Phase 3 gateway separation. All major feature work flows through this tracker. Needs maintainer update to reflect current PR state. |
| **#8691** — ADR Inventory and Accepted RFC Decision Records | ~2.5 months | Public inventory of architectural decision records. Critical for onboarding and audit. May be stale given the volume of recent RFCs (#10930, #10929). |
| **#8627** — WhatsApp Web device linking broken (S1) | ~2.5 months | Blocking WhatsApp Web adoption for new users. WhatsApp's platform change is external and ongoing — this may require a proactive re-linking flow rather than a passive fix. |
| **#9627** — Git write verbs bypass risk classifier (S0) | ~1.5 months | Silent security gap with no fix PR. The root cause (reading `args.first()` instead of the actual subcommand after global options) is well-understood but unaddressed. |
| **#10525** — ZeroRelay browser enrollment frontdoor (phase 1) | ~2.5 weeks | Large stacked PR (XL) with a disclosed trust model. Needs careful security review before merge. |
| **#10610** — Shell V1 permission policy (RFC #7155 Phase 0+1) | ~2 weeks | XL PR implementing a major security RFC. Five single-concern commits. High-impact if merged. |

---

*Digest generated from GitHub data for `zeroclaw-labs/zeroclaw` on 2026-09-20. All issue/PR links are relative to the repository root.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*