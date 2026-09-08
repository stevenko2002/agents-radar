# AI CLI Tools Community Digest 2026-09-09

> Generated: 2026-09-08 22:15 UTC | Tools covered: 12

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [ComfyUI](https://github.com/comfyanonymous/ComfyUI)
- [Ollama](https://github.com/ollama/ollama)
- [llama.cpp](https://github.com/ggerganov/llama.cpp)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Today's Highlights — 2026-09-09

1. **Claude Code v2.1.265** — Adds `user.email`/`user.groups` telemetry across Desktop/Cowork/terminal, and supports pointing `--plugin-dir` at a folder of plugins with dynamic discovery. ([release](https://github.com/anthropics/claude-code/releases))

2. **Claude Code stale-issue policy change** — PR #63686 bumps stale/autoclose timeouts from 14 to 90 days, aligning with the broad sweep of closures seen across the issue tracker. ([PR #63686](https://github.com/anthropics/claude-code/pull/63686))

3. **OpenAI Codex rust-v0.154.0-alpha.7** — Pre-release of the Codex rust core; 20 PRs overnight covering TUI streaming summaries, provider-scoped model caches, credential-safe shell snapshots, and Windows sandbox deny-read glob extraction. ([release](https://github.com/openai/codex/releases/tag/rust-v0.154.0-alpha.7))

4. **Gemini CLI v0.59.0 / v0.60.0-preview.0** — Stable cut shipped alongside a preview that tightens web-fetch destination validation and enforces RFC 9207 issuer identification in MCP OAuth. ([v0.60.0-preview.0](https://github.com/google-gemini/gemini-cli/pull/29120))

5. **Gemini CLI security hardening wave** — Path-traversal fixes (NTFS 8.3 SFN #29116, sibling-prefix bypass #29249, `tildeifyPath` #29180), sandbox FS isolation (#29214), and indirect prompt-injection mitigation (#29250) all merged.

6. **GitHub Copilot CLI v1.0.84-2** — Vim modal editing now generally available, closing the repo's highest-upvoted feature request (#13).

7. **Ollama server compaction retry** — PR #18324 auto-retries summarization after dropping ~20% oldest transcript on context overflow, breaking the retry loop. ([PR #18324](https://github.com/ollama/ollama/pull/18324))

8. **Ollama in-app `OLLAMA_ORIGINS` setting** — PR #18320 resolves long-standing issue #11295 with a configurable allowed-origins field under network exposure. ([PR #18320](https://github.com/ollama/ollama/pull/18320))

9. **llama.cpp b10867** — Disables lazy tensor loading by default on iGPUs; redefines `lazy_mode=auto` semantics and closes Vulkan/iGPU regression #28160 on `qwen4exp`. ([PR #28326](https://github.com/ggml-org/llama.cpp/pull/28326))

10. **Qwen Code v0.23.1 + @qwen-code/sdk v0.1.10** — Retires `@qwen-code/webui` (breaking), ships managed-memory availability fix and prompt-cache clearing; SDK bundles the same fixes downstream. ([v0.23.1](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.1))

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-09-09 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| 1 | **[#1298] fix(skill-creator): run_eval.py recall=0% fix** | Fixes core evaluation pipeline that reports 0% recall for all skill descriptions, breaking the description-optimization loop | Directly addresses **Issue #556** (12 comments, 7👍) — the evaluation harness is fundamentally broken; includes Windows stream reading, trigger detection, and parallel worker fixes | 🟢 Open |
| 2 | **[#1628] Hivemind: Zero-Cost Multi-Agent Orchestration** | Delegates mechanical work to headless `opencode` workers on free models; Claude stays planner/reviewer/merger | Novel architecture: "expensive model's context is the scarce resource, not its intelligence" — addresses cost/latency at scale | 🟢 Open |
| 3 | **[#1367] self-audit: Mechanical Verification + 4-Dimension Reasoning Gate** | Pre-delivery audit: Step 0 verifies every claimed output file exists; Steps 1-4 audit reasoning across correctness, completeness, consistency, clarity | Universal, stack-agnostic quality gate; ties to **Issue #1385** (Reasoning Quality Gate Pipeline proposal, 4 comments) | 🟢 Open |
| 4 | **[#1627] buffer-api Agent Skill (Buffer GraphQL)** | Portable agent skill for Buffer GraphQL API — schedule, manage, analyze social posts from any AI agent (Claude, Cursor, Codex, etc.) | Cross-agent portability focus; covers account/channel discovery, post scheduling, analytics | 🟢 Open |
| 5 | **[#1615] scnet-hpc: SCNet HPC Cluster Operations** | Profile-based SSH/Slurm workflows for SCNet HPC clusters — connection, partition, memory, module, accelerator guidance | Niche but high-value for HPC users; cluster discovery, job generation, profile refresh | 🟢 Open |
| 6 | **[#514] document-typography: Typographic Quality Control** | Prevents orphan words, widow paragraphs, numbering misalignment in AI-generated documents | "Affects every document Claude generates"; users rarely ask for good typography but suffer from its absence | 🟢 Open |
| 7 | **[#723] testing-patterns: Comprehensive Testing Stack Skill** | Testing Trophy philosophy, AAA pattern, React Testing Library, contract testing, E2E, property-based, mutation testing | Broad coverage across unit/component/integration/E2E; addresses widespread testing gaps | 🟢 Open |
| 8 | **[#83] skill-quality-analyzer & skill-security-analyzer** | Meta-skills for marketplace: quality analysis (5 dimensions) + security analysis (OWASP, secrets, supply chain) | Ecosystem tooling — enables skill authors to self-validate before submission | 🟢 Open |

> **Note:** PR comment counts are unavailable (`undefined`); ranking combines issue cross-references, recency, architectural significance, and community 👍 signals.

---

## 2. Community Demand Trends (from Issues)

| Trend | Evidence | Representative Issues |
|-------|----------|----------------------|
| **Skill Distribution & Trust Security** | Highest engagement (43 comments, 2👍); namespace impersonation vulnerability | [#492](https://github.com/anthropics/skills/issues/492) — Community skills under `anthropic/` namespace enable trust boundary abuse |
| **Org-Wide Skill Sharing** | 16 comments, 8👍; workflow friction (download → Slack → manual upload) | [#228](https://github.com/anthropics/skills/issues/228) — Enable org-wide skill sharing in Claude.ai |
| **Evaluation Pipeline Reliability** | 12 comments, 7👍; `run_eval.py` reports 0% trigger rate across all queries | [#556](https://github.com/anthropics/skills/issues/556) — `claude -p` never triggers skills/commands |
| **Windows Compatibility** | Multiple PRs (#1099, #1050, #1298) + issues; `claude.cmd` vs `claude` binary, encoding, subprocess | [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050) |
| **Context Window Management** | 4 comments; `claude-api` skill injects ~156k tokens in single call | [#1487](https://github.com/anthropics/skills/issues/1487) — Eager token injection exhausts context |
| **Skill Deduplication & Packaging** | 6 comments, 9👍; `document-skills` + `example-skills` install identical content | [#189](https://github.com/anthropics/skills/issues/189) — Duplicate skills in context window |
| **MCP Integration** | 4 comments; desire to expose skills as MCP endpoints | [#16](https://github.com/anthropics/skills/issues/16) — Expose Skills as MCPs |
| **Bedrock/Cloud Provider Support** | 4 comments; unclear how to use skills with AWS Bedrock | [#29](https://github.com/anthropics/skills/issues/29) — Usage with Bedrock |

---

## 3. High-Potential Pending Skills (Active PRs Likely to Land)

| PR | Skill | Why It Has Momentum |
|----|-------|---------------------|
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | `skill-creator` evaluation fix | Blocks the entire skill description optimization loop; 10+ independent reproductions; Windows fixes included |
| **[#1602](https://github.com/anthropics/skills/pull/1602)** | Evaluation serialization & stability fixes | Resolves "multiple reliability, platform compatibility, and metric calculation bugs" across mcp-builder, skill-creator, web-artifacts-builder |
| **[#1607](https://github.com/anthropics/skills/pull/1607)** | `claude-api` retired model markers | Fixes [#1603](https://github.com/anthropics/skills/issues/1603); updates model registry for current Anthropic lineup |
| **[#1724](https://github.com/anthropics/skills/pull/1724)** | `mcp-builder` default model → `claude-sonnet-5` | Updates evaluation harness to current flagship model; troubleshooting doc alignment |
| **[#1099](https://github.com/anthropics/skills/pull/1099)** / **[#1050](https://github.com/anthropics/skills/pull/1050)** | Windows `skill-creator` fixes | `claude.cmd` resolution, encoding, subprocess pipe reading — unblocks Windows contributors |
| **[#538](https://github.com/anthropics/skills/pull/538)** | PDF skill case-sensitivity fix | 8 mismatches (`REFERENCE.md`→`reference.md`, `FORMS.md`→`forms.md`); breaks on case-sensitive FS |
| **[#541](https://github.com/anthropics/skills/pull/541)** | DOCX tracked change `w:id` collision fix | Prevents document corruption when adding tracked changes to docs with existing bookmarks |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for a trustworthy, shareable, and reliably evaluable skill distribution layer — fixing the broken evaluation pipeline, resolving namespace trust boundaries, and enabling org-wide skill reuse are prerequisites before advanced domain skills can deliver value at scale.**

---

# Claude Code Community Digest — 2026-09-09

## Today's Highlights

Release v2.1.265 landed with telemetry alignment across desktop, Cowork, and terminal sessions, plus a new capability to point `--plugin-dir` at a folder containing multiple plugins. The issue tracker saw a broad sweep of stale closures, but several substantive bugs remain visible—most notably a cloud session auth regression (GitHub access 403s) and recurring reports of false-positive safety flags triggering unexpected model downgrades.

---

## Releases

**v2.1.265**
- Added `user.email` and `user.groups` to telemetry sent from Claude Desktop and Cowork through a Claude apps gateway, matching what terminal sessions already report.
- Added support for pointing `--plugin-dir` at a folder of plugins: each child folder with a manifest now loads, and children added or removed are picked up dynamically.

---

## Hot Issues

1. **[#72933 — Cloud sessions lost connected-account GitHub access overnight](https://github.com/anthropics/claude-code/issues/72933)**  
   Closed, but significant: scheduled routines and web cloud sessions that could read private-org repos via `GH_TOKEN` on Jun 30 began returning 403 on Jul 1, demanding a GitHub App org install that contradicts documented behavior. Auth/scope regressions of this kind have outsized impact on automation-heavy workflows.

2. **[#78915 — "[Request interrupted by user for tool use]" on foreground task with no interrupt](https://github.com/anthropics/claude-code/issues/78915)**  
   macOS CLI users saw a false interrupt string surface during subagent dispatch with no actual user action. The author cross-linked related phantom-input reports, pointing to a family of input-queue bugs rather than an isolated case.

3. **[#83464 — OAuth tokens cleared before refreshTokenExpiresAt](https://github.com/anthropics/claude-code/issues/83464)**  
   Users are being forced through full re-authentication unexpectedly. Token lifecycle bugs are high-pain because they interrupt long-running sessions and scheduled work.

4. **[#80614 — /model selection not persisted across restarts](https://github.com/anthropics/claude-code/issues/80614)**  
   The CLI prints "saved as your default for new sessions" but reverts to a different Sonnet model after restart. Confirmation messages that don't match actual behavior erode trust in configuration.

5. **[#83517 — Special characters in filenames cause unexpected behavior](https://github.com/anthropics/claude-code/issues/83517)**  
   A recurring class of bug for agentic coding tools: file paths with spaces, unicode, or shell metacharacters break tool calls. High impact for real-world repos.

6. **[#83473 — Windows MSIX browser crash leaves package unrecoverable](https://github.com/anthropics/claude-code/issues/83473)**  
   An in-app browser crash corrupts the MSIX package state; repair fails and reinstall hits `0x80073CF6`. Platform-specific but severe for affected Windows users.

7. **[#82374 — Mobile push notifications silently dropped ~50% of the time](https://github.com/anthropics/claude-code/issues/82374)**  
   Silent notification loss with no client-side signal makes this hard to detect and frustrating for users relying on mobile alerts for long-running agents.

8. **[#76660 — Fable 5 refusal fallback degrades silently on desktop](https://github.com/anthropics/claude-code/issues/76660)**  
   Model refusal fallback fired on routine proxy/network config work; `/model` switch-back reverted next turn and `/feedback` was blocked by `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC`. A compound failure across safety, UI, and telemetry.

9. **[#83518 — Claude in Chrome extension loses MCP connectivity after re-login](https://github.com/anthropics/claude-code/issues/83518)**  
   Mid-session account re-login breaks all `mcp__claude-in-chrome__*` tools; extension shows connected while tools report "not connected" and `list_connected_browsers` returns `[]`. A state-sync bug across two surfaces.

10. **[#83397 — Drag-and-drop into chat panel broke after VSCode update](https://github.com/anthropics/claude-code/issues/83397)**  
   Regression in the VSCode extension where image drag-and-drop stopped working (paste still works). Small but annoying regression for daily UI workflows.

---

## Key PR Progress

Only **1 PR** was active in the last 24 hours, and it's closed:

- **[#63686 — Bump stale and autoclose timeouts from 14 to 90 days](https://github.com/anthropics/claude-code/pull/63686)**  
  Adjusts the issue lifecycle script so issues are marked stale after 90 days of inactivity (up from 14) and closed 90 days after that. This aligns with the wave of stale closures seen in the tracker today and gives community-reported issues more time to be addressed. Maintainer intent appears to be reducing noise from premature auto-closure.

---

## Feature Request Trends

Distilling the issue corpus, the most requested feature directions are:

1. **Persistent model selection** — Users want `/model` defaults to genuinely persist across restarts and sessions without surprise fallbacks.
2. **Reliable telemetry / safety transparency** — When safety filters or rate-limit flags trigger, users want clear explanations of *what* was flagged and *why*, rather than silent model downgrades or opaque T&S reviews.
3. **Better multi-account and auth state handling** — Cloud sessions, OAuth token refresh, GitHub App connections, and extension re-login all show a family of requests for robust credential lifecycle management.
4. **Graceful MCP connectivity recovery** — Users want extensions and MCP servers to resync automatically after re-authentication rather than requiring session restarts.
5. **Plugin directory support** — The new `--plugin-dir` folder support in v2.1.265 directly answers community demand for simpler multi-plugin management.

---

## Developer Pain Points

Several recurring frustrations stand out from the last 24 hours of issue activity:

- **False-positive safety flags and unrequested model downgrades** — Multiple reports (e.g., [#84340](https://github.com/anthropics/claude-code/issues/84340), [#84342](https://github.com/anthropics/claude-code/issues/84342), [#84344](https://github.com/anthropics/claude-code/issues/84344), [#84361](https://github.com/anthropics/claude-code/issues/84361)) describe legitimate development—CRM work, security research, defensive tooling—triggering flags that downgrade from Fable 5/Opus 5 to older models with no explanation. This is the single loudest pain point this cycle.

- **Auth token churn** — Unexpected OAuth invalidation ([#83464](https://github.com/anthropics/claude-code/issues/83464)) and cloud session GitHub access loss ([#72933](https://github.com/anthropics/claude-code/issues/72933)) force disruptive re-authentication flows.

- **"It says it saved but didn't" configuration mismatches** — Model selection persistence ([#80614](https://github.com/anthropics/claude-code/issues/80614)) and usage attribution errors ([#84359](https://github.com/anthropics/claude-code/issues/84359)) erode confidence in reported state.

- **Silent degradation** — Whether it's dropped push notifications ([#82374](https://github.com/anthropics/claude-code/issues/82374)), phantom interrupt strings ([#78915](https://github.com/anthropics/claude-code/issues/78915)), or silent refusal fallbacks ([#76660](https://github.com/anthropics/claude-code/issues/76660)), developers consistently flag failures that provide no client-side signal.

- **Usage quota surprises** — Reports of continuous Pro quota consumption after GitHub MCP operations ([#84360](https://github.com/anthropics/claude-code/issues/84360)) point to a need for finer-grained control and transparency over what consumes quota.

*Note: Many issues listed above are marked `[CLOSED]`/`[stale]` as of the data snapshot—likely a result of the lifecycle policy change in PR #63686. Substantive reports may still warrant reopening or follow-up.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-09-09

## 1. Today's Highlights

The Codex team pushed twenty PRs overnight, focusing on **TUI polish** (streaming reasoning summaries), **multi-tenant cache correctness** (provider-scoped model catalogs, ChatGPT routing cookies), and **sandbox/hardening** (credential-safe shell snapshots, Windows deny-read glob extraction). On the issues side, the community is still grappling with a **cluster of macOS Computer Use runtime pathologies** (spawn storms, watchdog panics, V8 OOMs) and **Windows + WSL project-creation failures**, while two top-engagement requests — **LSP integration** and **auto-compaction controls** — remain top of mind.

## 2. Releases

- **`rust-v0.154.0-alpha.7`** — Pre-release of the Codex rust core. Details in the [release notes](https://github.com/openai/codex/releases/tag/rust-v0.154.0-alpha.7).

## 3. Hot Issues

1. **#25719 — Codex Desktop macOS `syspolicyd`/`trustd` runaway** (89 💬, 396 👍)
   Ongoing runaway CPU/memory consumption tied to security daemons on Darwin arm64. High engagement reflects macOS users broadly affected.
   [Link](https://github.com/openai/codex/issues/25719)

2. **#8745 — LSP integration (auto-detect + auto-install)** (64 💬, 481 👍)
   Long-standing enhancement asking for first-class Language Server Protocol support in Codex CLI to surface diagnostics and symbols. Highest 👍 count on the board.
   [Link](https://github.com/openai/codex/issues/8745)

3. **#41290 — WSL: Project creation/removal fail after switching Agent Environment** (46 💬)
   Regression on Windows where workspace lifecycle operations break when the agent is moved into WSL.
   [Link](https://github.com/openai/codex/issues/41290)

4. **#41463 — Windows + WSL `AbsolutePathBuf` deserialized without base path** (42 💬)
   Companion to #41290 — projects cannot be created because the path type isn't normalized for the WSL mount layout.
   [Link](https://github.com/openai/codex/issues/41463)

5. **#38455 — ChatGPT desktop spawns Computer Use workers, V8 OOM on macOS** (41 💬)
   macOS 26.5.7 / ChatGPT 26.810.41047 enters an idle-time spawn loop of `computer-use` workers, crashing with V8 OOM and aborting.
   [Link](https://github.com/openai/codex/issues/38455)

6. **#4106 — Control over auto-compaction parameters** (25 💬, 112 👍)
   The hardcoded ~220k compaction threshold disrupts long, code-heavy sessions; users want opt-in / opt-out / configurable limits.
   [Link](https://github.com/openai/codex/issues/4106)

7. **#26562 — Computer Use plugin unavailable on Windows** (21 💬)
   Feature parity gap: Computer Use works on macOS but is missing from the Windows Codex Desktop build.
   [Link](https://github.com/openai/codex/issues/26562)

8. **#40575 — RFC: Self-Evolving Agents (`/learn`) and AGENTS.md Rule Metabolism** (19 💬)
   Ambitious RFC proposing interactive instruction distillation so agents codify durable rules from sessions.
   [Link](https://github.com/openai/codex/issues/40575)

9. **#42902 — Computer History polling wakes sleeping macOS displays every 10 min** (14 💬)
   Power-management regression: status polling defeats display sleep, surprising pro users with docked/closed-lid setups.
   [Link](https://github.com/openai/codex/issues/42902)

10. **#38760 — Computer Use spawn storm exhausts `launchservicesd` (kernel panic)** (14 💬)
    Related to #38455/#40153 — repeated `SkyComputerUseService` forks trigger `launchservicesd` exhaustion and a WindowServer watchdog panic on macOS 26.5.
    [Link](https://github.com/openai/codex/issues/38760)

## 4. Key PR Progress

1. **#43921 — Show streaming reasoning summaries in the TUI status row**
   Lifts the latest usable reasoning line into the live status header (and retains it across tool activity / empty reasoning items), while keeping the full text only in the expanded transcript.
   [Link](https://github.com/openai/codex/pull/43921)

2. **#43930 — Avoid Windows sandbox setup for irrelevant proxy port changes**
   Skips elevated firewall resyncs when only proxy listener ports differ; both stores are bound on localhost, so a sandbox roll is unnecessary.
   [Link](https://github.com/openai/codex/pull/43930)

3. **#43897 — Persist provider and auth identity with model catalog caches**
   Adds a SHA-256 identity (routing + headers + auth scope) to `ModelsCacheEntry` so switching accounts/providers can't poison each other's model catalogs or default tier.
   [Link](https://github.com/openai/codex/pull/43897)

4. **#43925 — Add cancellation for native user-verification RPCs**
   Cancellation of an MCP elicitation can now also cancel the separate native verification RPC, preventing late "proof" delivery to the outbound queue.
   [Link](https://github.com/openai/codex/pull/43925)

5. **#43909 — Protect shell snapshots when credential brokerage is enabled**
   Snapshot capture/replay now respect the sandbox/env policy — preventing shell rc files from leaking or overwriting brokered dummy credentials.
   [Link](https://github.com/openai/codex/pull/43909)

6. **#43900 — Propagate Apps tool refreshes to existing threads**
   Live tool catalogs are republished to clients (matching transport/auth/protocol/listing) so installed Apps become visible on the next turn of every running thread.
   [Link](https://github.com/openai/codex/pull/43900)

7. **#43895 — Preserve `__oailb` routing cookies in ChatGPT HTTP clients**
   Adds the routing cookie to the shared ChatGPT infrastructure allowlist and persists it in the local jar, restoring correct regional/sticky routing on subsequent calls.
   [Link](https://github.com/openai/codex/pull/43895)

8. **#43884 — Close active network proxy connections on teardown**
   Ties HTTP and SOCKS5 connection work (including HTTP CONNECT upgrades) to the proxy lifetime, so unloading a thread no longer leaks sockets or half-closed tunnels.
   [Link](https://github.com/openai/codex/pull/43884)

9. **#43903 — Extract Windows deny-read glob scan planning into protocol**
   Moves lexical scan-bound math into `codex_protocol::permissions` so the Windows sandbox resolver and any other consumer share a single implementation.
   [Link](https://github.com/openai/codex/pull/43903)

10. **#43876 — Detach Unix hook commands from the controlling terminal**
    Hooks now run via `detach_from_tty` so a hook's terminal I/O can't block startup code that interacts with the controlling tty.
    [Link](https://github.com/openai/codex/pull/43876)

## 5. Feature Request Trends

- **Language-tooling parity for agents** — LSP auto-detect/install (#8745) is the single most-upvoted feature request this window; symbol/diagnostics-aware editing is the loudest gap.
- **Compaction & memory configurability** — Thresholds, off-switch, and "always wait for my answer" semantics for `request_user_input` (#4106, #43759) keep reappearing as long-session users hit hard limits.
- **Self-evolving / project-local memory** — RFC #40575's `/learn` and AGENTS.md rule metabolism points to a broader community interest in turning session behavior into durable, project-scoped instructions.
- **Worktree & VCS flexibility** — Jujutsu (`jj`) or pluggable worktree backends (#26648) so teams not on plain `git worktree` aren't second-class citizens.
- **Model selection ergonomics** — Stop persisting model choice to config (#26472) and remove accidental coupling between TUI session state and long-lived configuration.
- **Cross-device continuity** — Codex Remote handoff for paginated history (#40879) and synced remote-task completion state (#43537) point to a growing "multi-host, multi-form-factor" workflow.

## 6. Developer Pain Points

- **macOS Computer Use is unstable across builds.** A swarm of issues (#25719, #38455, #38760, #40153, #42902) describes spawn storms, runaway system daemons, watchdog kernel panics, V8 OOMs, and broken power management — even when the app is idle.
- **Windows + WSL is rough around project lifecycle.** Path normalization bugs (#41463, #41486), WSL environment-switch failures (#41290), keyboard crashes (#42683), browser site-permission caching (#36953), and a stuck Option-Space worktree flow (#40253) all wear on Windows users.
- **History/session restore is fragile.** Reused rollout ordinals freeze desktop history (#43142), remote handoff refuses paginated chats (#40879), and cloned Mac installs steal remote-control identity (#33830) — undermining trust in durable state.
- **Input UX regressions.** macOS terminal-panel button broken (#42180), composer becomes un-typeable after app switching (#30346), typing `@` spikes system resources (#41787), dictation stalls before Realtime (#38324), desktop pet can't be moved (#41784).
- **Config boundary leaks.** Model selection persisting to config (#26472), MCP `tool_search` failing on non-native endpoints like Ollama/Bifrost (#20574), and Security scan results being swallowed by safety check (#43926) point to a recurring need for clearer, more orthogonal configuration surfaces and provider abstractions.
- **Underlying infra correctness.** Several PRs today address leak/correctness classes — credential-safe shell snapshots, sticky cookie preservation, provider-scoped caches, proxy teardown — suggesting the pain points above are being driven by real cross-component interaction defects, not just surface-level polish.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-09-09

## 1. Today's Highlights

The community is focused heavily on **agent reliability and sandbox security** as v0.59.0 ships and v0.60.0-preview.0 lands with core fixes for web fetch validation and MCP OAuth (RFC 9207). Multiple high-priority bugs around **subagent termination reporting, browser agent hangs, and shell command stalls** continue to dominate triage. Meanwhile, maintainers are landing a wave of **path-traversal hardening PRs** (Windows SFNs, sibling-prefix bypasses, sandbox isolation) and **prompt-injection mitigations**.

## 2. Releases

- **[v0.59.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.59.0)** — Stable cut including changelog rollup for v0.58.0-preview.0 and a `fix(core)` to prevent the noted regression in the prior preview.
- **[v0.60.0-preview.0](https://github.com/google-gemini/gemini-cli/pull/29120)** — Adds stricter destination validation/connection routing in web fetch utilities ([#29120](https://github.com/google-gemini/gemini-cli/pull/29120)) and enforces **RFC 9207 issuer identification** in the MCP OAuth flow ([#29120+ follow-up](https://github.com/google-gemini/gemini-cli/pull/)).
- **[v0.60.0-nightly.20260908.g85aca163f](https://github.com/google-gemini/gemini-cli/compare/v0.60.0-nightly.20260907.g85aca163f...v0.60.0-nightly.20260908.g85aca163f)** — Routine nightly bump; changelog auto-generated in [#29254](https://github.com/google-gemini/gemini-cli/pull/29254).

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|---|---|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after MAX_TURNS reports as `GOAL` success | p1 bug — silently hides interruption, breaks observability of agent timeouts (13 comments). |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | Zero-Dependency OS Sandboxing & Post-Execution Intent Routing | p2 epic — proposes bash-first sandbox model to leverage Gemini 3's POSIX training. |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs indefinitely | p1 — simple folder creations hang for hours; user-disabling subagents is the workaround (8 👍). |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | EPIC: AST-aware file reads / search / mapping | Customer feature request — fewer turns, less context noise; tied to [#22746](https://github.com/google-gemini/gemini-cli/issues/22746) recommending `tilth`/`glyph`. |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini doesn't use skills & sub-agents enough | Anecdotal but consistent — discovery/heuristics need work. |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Deterministic redaction for Auto Memory | p2 — secrets leak into model context before model-side redaction kicks in. |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Auto Memory retries low-signal sessions indefinitely | p2 — extraction-agent gating causes re-surfacing of dead sessions. |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell command stuck on "Waiting input" after completion | p1 — broken shell loop on benign commands (3 👍). |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | browser_agent resilience: session takeover & lock recovery | p3 — fail-fast behavior blocks persistent profiles. |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent fails in Wayland | p1 — termination reason reported as `GOAL` despite failure (Wayland-specific). |

## 4. Key PR Progress

| PR | Highlight |
|---|---|
| [#29185](https://github.com/google-gemini/gemini-cli/pull/29185) | Deflakes `run_shell_command` and `file-system-interactive` E2E tests; addresses allowlist assertion races. |
| [#29137](https://github.com/google-gemini/gemini-cli/pull/29137) | Dependabot rebases **77 npm dependency updates** in one XL PR. |
| [#29214](https://github.com/google-gemini/gemini-cli/pull/29214) | **Hardens sandbox FS boundaries** — isolates runtime state from host config dirs and standardizes `realpath` resolution. |
| [#29252](https://github.com/google-gemini/gemini-cli/pull/29252) | Preserves explicit versioned Flash model IDs (no silent remap to 3.5 Flash default). |
| [#29250](https://github.com/google-gemini/gemini-cli/pull/29250) | Mitigates **indirect prompt injection** via build file mods and untrusted shell flags under restricted mode. |
| [#29126](https://github.com/google-gemini/gemini-cli/pull/29126) | Mounts `express.json()` before A2A SDK routes — fixes broken JSON-RPC parsing. |
| [#29244](https://github.com/google-gemini/gemini-cli/pull/29244) | Makes tool file writes **atomic** and serializes same-path writes to prevent lost edits. |
| [#29247](https://github.com/google-gemini/gemini-cli/pull/29247) | `isWithinRoot()` becomes case-insensitive on Windows; reuses `isSubpath()`. |
| [#29249](https://github.com/google-gemini/gemini-cli/pull/29249) | Closes **sibling-prefix bypass** in `get_internal_docs` path guard. |
| [#29248](https://github.com/google-gemini/gemini-cli/pull/29248) | Avoids duplicate slash-command history/telemetry after confirmation prompts. |
| [#29180](https://github.com/google-gemini/gemini-cli/pull/29180) | Prevents `tildeifyPath` from folding sibling directories that share a home prefix. |
| [#29246](https://github.com/google-gemini/gemini-cli/pull/29246) | settings.json update (p1, size/s). |

Closed/merged in-window: [#29251](https://github.com/google-gemini/gemini-cli/pull/29251) (v0.60.0-preview.0 changelog), [#29254](https://github.com/google-gemini/gemini-cli/pull/29254) (0.61.0-nightly bump), [#29215](https://github.com/google-gemini/gemini-cli/pull/29215) (envelope metadata provenance), [#29216](https://github.com/google-gemini/gemini-cli/pull/29216) (sandbox settings dir isolation), [#29116](https://github.com/google-gemini/gemini-cli/pull/29116) (NTFS 8.3 SFN mitigation), [#29022](https://github.com/google-gemini/gemini-cli/pull/29022) (`keepAskUserQuestionsInHistory`).

## 5. Feature Request Trends

- **AST-aware tooling** — high-frequency ask ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746), [#19561](https://github.com/google-gemini/gemini-cli/issues/19561)): surgical reads, codebase mapping, glyph/tilth as starting points.
- **Persistent, file-based task tracking** — replacing in-context `WriteToDo` ([#18836](https://github.com/google-gemini/gemini-cli/issues/18836), [#21000](https://github.com/google-gemini/gemini-cli/issues/21000)) to fix context rot and session continuity.
- **Bash-native sandboxing** — leverage Gemini 3's POSIX affinity ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873)) for zero-dep OS-level isolation.
- **Auto Memory quality & safety** — deterministic redaction ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)), retry control ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)), invalid-patch surfacing ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)) — concentrated effort from SandyTao520.
- **Subagent observability** — `/chat share` for trajectories ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)), `/bug` with subagent context ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)), Local Subagent Sprint 1 ([#20195](https://github.com/google-gemini/gemini-cli/issues/20195)).
- **Browser agent resilience** — session takeover/lock recovery ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)), Wayland support ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)), settings.json overrides honored ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)).
- **Agent safety & self-awareness** — discourage destructive git ops ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)), accurate CLI flag knowledge ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)).

## 6. Developer Pain Points

- **Subagent hangs & misreported termination** — the dominant pain theme. Both [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) (generalist) and [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) (investigator) hide failure as success, forcing users to disable subagents entirely.
- **Shell lifecycle bugs** — commands marked active after completion ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)) and interactive prompts stalling vite scaffolds ([#22465](https://github.com/google-gemini/gemini-cli/issues/22465)).
- **Discovery heuristics for skills/sub-agents** — works only with explicit prompting ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)); impacts user trust in skill system.
- **Tooling context bloat** — `>128` tools → 400 ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)), scratch scripts scattered everywhere ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)).
- **Windows path handling** — multiple bugs surface in this digest (case sensitivity, NTFS 8.3, symlinks in `~/.gemini/agents/` per [#20079](https://github.com/google-gemini/gemini-cli/issues/20079)); addressed by [#29247](https://github.com/google-gemini/gemini-cli/pull/29247) and [#29116](https://github.com/google-gemini/gemini-cli/pull/29116).
- **Memory session state** — `/compress` not persisted ([#21335](https://github.com/google-gemini/gemini-cli/issues/21335)), get-shit-done output hook crashes ([#22186](https://github.com/google-gemini/gemini-cli/issues/22186)).
- **Prompt-injection & path-traversal risk** — driving a sustained hardening sprint (PRs [#29250](https://github.com/google-gemini/gemini-cli/pull/29250), [#29249](https://github.com/google-gemini/gemini-cli/pull/29249), [#29180](https://github.com/google-gemini/gemini-cli/pull/29180), [#29214](https://github.com/google-gemini/gemini-cli/pull/29214)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
Date: 2026-09-09 | Source: github.com/github/copilot-cli

---

## 1. Today's Highlights
GitHub Copilot CLI v1.0.84-2 launched today with Vim modal editing now generally available to all users, resolving the repository's highest-upvoted feature request (#13). At the same time, multiple critical stability regressions are emerging in the bundled Windows desktop app v1.1.15, centered on local session management and permission handling that block core workflows for Windows users. The community is also actively flagging gaps in long-running session reliability, MCP integration consistency, and third-party model support.

---



</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-09-09

## 1. Today's Highlights
Two open pull requests were updated in the last 24 hours. PR #2595 introduces a safety fix preventing `StrReplaceFile` from corrupting non-UTF-8 files, addressing a data-integrity issue (#2591). PR #2616 adds experimental **Build Remote Agent** phone pairing via the `gbr/1` protocol, enabling iOS/Android apps to spectate and veto local coding sessions through the open-source `gbr-agent`.

## 2. Releases
No new releases published in the last 24 hours.

## 3. Hot Issues
No issues were updated in the last 24 hours.

## 4. Key PR Progress
| PR | Title | Status | Summary |
|----|-------|--------|---------|
| [#2595](https://github.com/MoonshotAI/kimi-cli/pull/2595) | fix(StrReplaceFile): refuse to edit files that are not valid UTF-8 | OPEN | Prevents silent corruption of binary or non-UTF-8 files by rejecting edits when the file cannot be cleanly decoded. Resolves [#2591](https://github.com/MoonshotAI/kimi-cli/issues/2591). |
| [#2616](https://github.com/MoonshotAI/kimi-cli/pull/2616) | Add Build Remote Agent phone pairing (gbr/1) | OPEN | Implements pairing with the GrokBuildRemote mobile app (`gbr-agent`). Phone acts as spectator + veto (not full control). Protocol `gbr/1`; MIT-licensed agent reference implementation. |

## 5. Feature Request Trends
With no recent issue activity, no new feature trends are visible from the last 24 hours. The two active PRs suggest ongoing work in **file-safety hardening** and **remote/collaborative tooling** (mobile pairing).

## 6. Developer Pain Points
- **Encoding safety**: Developers encountered silent data corruption when `StrReplaceFile` operated on non-UTF-8 files (PR #2595 / Issue #2591).
- **Remote collaboration friction**: Demand for lightweight, phone-based session spectating/veto without full orchestration (PR #2616).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-09

## 1. Today's Highlights
- The long-running **Memory Megathread** (#20695) was closed after sustained community-driven heap snapshot collection, marking a milestone in triaging performance regressions.
- Persistent complaints about **CPU consumption and TUI redraw storms** (#30086, #42306, #26220, #45442) converge on a critical pain point: runaway background loops and idle-loop overhead burn CPU, time, and tokens.
- Multiple UX/UI feedback items — including the highly upvoted "keep legacy layout" (#37012, 47 👍) and tokens/sec display (#5374, 109 👍) — reveal that the community wants stronger observability and backward compatibility alongside the V2 redesign.

## 2. Releases
*No new releases in the last 24h.*

## 3. Hot Issues

| # | Issue | Status | Why it matters | Community Reaction |
|---|---|---|---|---|
| [#20695](https://github.com/anomalyco/opencode/issues/20695) | **Memory Megathread** | CLOSED | Central hub consolidating memory leak reports; maintainers request manual + automated heap snapshots rather than speculative fixes. | 144 comments, 110 👍 — massive coordination effort. |
| [#30086](https://github.com/anomalyco/opencode/issues/30086) | **High CPU usage in newer versions** | OPEN | Users who could run 10+ sessions now struggle with 3; impacts multi-project workflows. | 51 comments, 27 👍 |
| [#37012](https://github.com/anomalyco/opencode/issues/37012) | **Keep legacy layout option** | OPEN | Strong nostalgia signal — workspace-centric access and reduced navigation cited as benefits of v1 UI. | 43 comments, 47 👍 |
| [#5374](https://github.com/anomalyco/opencode/issues/5374) | **Show tokens/second** | OPEN | Long-standing request for a per-provider performance metric to benchmark models. | 21 comments, 109 👍 |
| [#34886](https://github.com/anomalyco/opencode/issues/34886) | **Provider rate limit / Code plan not applied** | CLOSED | Highlights intermittent billing/plan propagation issues on the Console Go provider. | 19 comments, 5 👍 |
| [#26220](https://github.com/anomalyco/opencode/issues/26220) | **Infinite loop after tool calls** | OPEN | Zen/big-pickle hangs indefinitely post tool execution; users lose session control. | 11 comments, 4 👍 |
| [#28292](https://github.com/anomalyco/opencode/issues/28292) | **Plugin slash command interception + custom dialogs** | OPEN | Extension point: plugins could answer commands without round-tripping to the LLM. | 11 comments, 2 👍 |
| [#33027](https://github.com/anomalyco/opencode/issues/33027) | **MCP tools connected but not exposed to agent** | OPEN | MCP servers respond correctly but tools are invisible to the agent — major for MCP integrators. | 11 comments, 4 👍 |
| [#24153](https://github.com/anomalyco/opencode/issues/24153) | **Unarchive/restore archived sessions** | OPEN | Archiving is one-way today; users want reversibility. | 10 comments, 11 👍 |
| [#45442](https://github.com/anomalyco/opencode/issues/45442) | **Subagent infinite loop (~50min, 364 identical grep calls)** | OPEN | Subagents lack loop protection, leading to uncontrollable token burn. | 4 comments, 1 👍 |

## 4. Key PR Progress

| # | PR | What it does |
|---|---|---|
| [#41319](https://github.com/anomalyco/opencode/pull/41319) | **Warn on unknown config fields** | Forward-compatible parsing: surfaces ignored keys per source instead of silently dropping them. |
| [#41301](https://github.com/anomalyco/opencode/pull/41301) | **Settle shell spawn failures** | Prevents the shell tool from hanging when cross-spawn throws synchronously (e.g. NUL bytes in args). |
| [#41299](https://github.com/anomalyco/opencode/pull/41299) | **Auto-reconnect stale SSE streams** | Web UI now self-heals when `/global/event` SSE dies (proxy buffering, network blips). |
| [#41278](https://github.com/anomalyco/opencode/pull/41278) | **Preserve task ID on foreground failure** | Cancellation errors now include the task ID so users can correlate sub-agent failures. |
| [#41272](https://github.com/anomalyco/opencode/pull/41272) | **Skip per-token schema validation in AI-SDK adapter** | Major perf win — avoids rebuilding `Schema.is` refinement on every streamed token. |
| [#41271](https://github.com/anomalyco/opencode/pull/41271) | **Fold cache policy + option merge into one rebuild** | Cuts redundant `LLMRequest.update` passes per request. |
| [#41267](https://github.com/anomalyco/opencode/pull/41267) | **"All files" option in Review v2 changes dropdown** | Review mode can now show the full project tree instead of just changes. |
| [#41264](https://github.com/anomalyco/opencode/pull/41264) | **TUI focus view for multi-step turns** | Opt-in toggle collapses multi-step turns into one compact block. |
| [#41202](https://github.com/anomalyco/opencode/pull/41202) | **Authorize file mutations before locking** | write/edit/patch now do capability checks first, then acquire path locks — cleaner permission flow. |
| [#41201](https://github.com/anomalyco/opencode/pull/41201) | **Preserve admitted tool names** | Direct tool names now match registry-canonical names (fixes `slack.admin:send.message` mismatches). |

## 5. Feature Request Trends
- **UI/UX opt-out & migration aids** — legacy layout preservation (#37012), composer styling consistency (#48032), focus view for long turns (#41264 PR), conversation outline (#47993).
- **Performance observability** — tokens/sec (#5374, 109 👍) and clearer error/session-not-found surfaces (#48012).
- **Session lifecycle improvements** — unarchive/restore (#24153), better quota-exhausted error reporting instead of silent hang (#40747).
- **Extensibility for plugins** — intercept slash commands without invoking the LLM and register custom dialogs (#28292).
- **MCP maturity** — visibility of connected tools in agent (#33027) and provider-option namespaces for gateway aliases (#47986).
- **Provider coverage** — DeepSeek V4 Flash image support (#47994), Anthropic thinking budget on V2 (#48019), China-region Console Go availability (#47971), Nemotron 3.5 Lightning (#47976).

## 6. Developer Pain Points
- **Runaway loops & wasted tokens** — multiple open issues (#26220, #45442, #41964, #40747, #47992) describe sub-agents or sessions entering long-lived silent loops, with no loop-protection guardrails and no surfaced error when quotas are exhausted.
- **Idle CPU / TUI redraw storms** — TUI main thread pegs a full core even with no input (#42306), and desktop sidecars crash with V8 OOM (#41964), frequently on Windows + proxy setups.
- **V2 breaking changes without escape hatches** — legacy layout, V2 thinking budget, and vlocal default credentials (#34752) leave power users stranded.
- **Config & path fragility** — unknown fields silently dropped (#41319), workspace paths double-decoded (#41238), Windows file-watcher backslashes (#41240), and permission tool key casing (#41239) all add up to fragile setups.
- **Provider/plan inconsistency** — Code plan not propagating (#34886), Zen model picker missing account-enabled models (#48027), mid-session selections silently falling back to global config (#47968), and OpenRouter IDs double-prefixed (#47690) erode trust in provider configuration.
- **First-run onboarding friction** — bare `TypeError: Failed to fetch` errors (#47962) and unclear default credentials block new users from getting started.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-09-09

## Today's Highlights
A quiet release window (no new versions shipped in the last 24h) was offset by steady maintenance momentum: three PRs landed to harden TUI terminal detection and interaction (Orca recognition, mouse-selection cleanup, safer MouseRegion rendering), while the WebSocket/streaming reliability front saw continued scrutiny around retry logic and abort semantics. The most attention-grabbing thread remains issue #5363 — the in-progress `amazon-bedrock-mantle` provider — still the most commented-on and upvoted open item this cycle.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **[#5363 — Add amazon-bedrock-mantle provider for OpenAI-compatible models (OPEN, in-progress; 19 comments, 15 👍)](https://github.com/earendil-works/pi/issues/5363)**
   The most active issue of the cycle. Proposes a new `amazon-bedrock-mantle` provider because Bedrock Mantle models expose an OpenAI-compatible API (`.../openai/v1/responses`) that is incompatible with the existing Converse-based `amazon-bedrock` provider. Strong community demand signals this adapter gap is a real blocker for Bedrock users.

2. **[#7444 — WebSocket retry only handles two error codes (CLOSED; 10 comments)](https://github.com/earendil-works/pi/issues/7444)**
   Deep-dive into `openai-codex-responses.js` showing that only `previous_response_not_found` and `websocket_connection_limit_reached` trigger retry; any other `response.failed` frame hard-stops the turn. A sharp, well-scoped analysis of fragile retry logic that likely contributed to follow-on fixes in the streaming path.

3. **[#8823 — Esc during active streaming often fails to cancel the in-flight request (CLOSED; 10 comments)](https://github.com/earendil-works/pi/issues/8823)**
   Users pressing Esc during streaming find the abort is registered (turn persists with `stopReason: "aborted"`) but the HTTP request is not actually cancelled and runs until the provider finishes naturally. A recurring frustration class around cancellation semantics.

4. **[#9052 — Fullscreen fixed input box scrolls 3x slower than regular mode (OPEN; 7 comments, 3 👍)](https://github.com/earendil-works/pi/issues/9052)**
   A fullscreen-mode UX regression: wheel scrolling is roughly three times slower than inline mode. Reported by a user who switched to fullscreen specifically for the pinned input box; likely a wheel-event multiplier issue worth a quick access pass.

5. **[#7445 — openai-responses ties developer role selection to model.reasoning (OPEN; 6 comments)](https://github.com/earendil-works/pi/issues/7445)**
   Pi only emits `context.systemPrompt` as a `developer` message when `model.reasoning` is true, so `supportsDeveloperRole: true` configured on non-reasoning models is effectively ignored. Subtle interoperability bug affecting prompt-role fidelity across providers.

6. **[#5581 — sendMessage() with triggerTurn bypasses before_agent_start (OPEN; 5 comments)](https://github.com/earendil-works/pi/issues/5581)**
   Custom programmatic messages with `triggerTurn: true` call `_runAgentPrompt` directly instead of `prompt()`, skipping the `emitBeforeAgentStart` lifecycle event. Creates inconsistent extension behavior depending on how a turn is initiated.

7. **[#9212 — sonnet-5 via gateway: 13% of edit tool calls truncated to `edits:[{}]` (CLOSED; 4 comments)](https://github.com/earendil-works/pi/issues/9212)**
   Damning reliability stat: 18 of 134 `edit` calls from `claude-sonnet-5` through `vercel-ai-gateway` failed schema validation because recorded arguments arrived truncated (14 as `{"path": ..., "edits": [{}]}`). Output tokens confirm input was generated — pointing to a transport/serialization truncation rather than model behavior.

8. **[#7739 — Set a startup-time budget targeting jcode-comparable latency (OPEN; 4 comments)](https://github.com/earendil-works/pi/issues/7739)**
   Performance parity ask backed by jcode's README benchmarks against pi 0.62.0 (10 interactive PTY launches on Linux, medians). Direct competitive pressure on startup latency and memory footprint.

9. **[#8667 — Stale compaction entry bricks the session with Anthropic 400 unexpected_tool_use_id (CLOSED; 3 comments, 1 👍)](https://github.com/earendil-works/pi/issues/8667)**
   Nasty corruption bug: an auto-compaction firing mid-tool-call appends a `CompactionEntry` whose `parentId` lands *between* the tool call and its `toolResult`, and a later compaction retaining that stale entry permanently ruins the session (Anthropic 400 `unexpected tool_use_id`). High-impact data-integrity issue.

10. **[#9302 — Out-of-loop summarization misses provider attribution headers → opencode 400 MissingSessionID (OPEN, in-progress; 3 comments)](https://github.com/earendil-works/pi/issues/9302)**
    Every branch summary and compaction on opencode-family providers fails deterministically with `400 MissingSessionID` because out-of-loop summarization shares the same auth-only header source as the native path. Related to #9290, which reports the same failure for extension-driven `modelRegistry.complete()` calls after opencode enforced `x-opencode-session` on 2026-09-06 — an urgent provider-side breakage.

## Key PR Progress

1. **[#9351 — Fix the edit preview flicker on remote edits (OPEN)](https://github.com/earendil-works/pi/pull/9351)**
   Fixes a visual race where injected remote edit operations briefly flash a red "Could not edit file" error before the correct diff replaces it. Includes a video capture of the flicker — a polish win for the edit UX.

2. **[#9345 — feat(ai): expose Anthropic OAuth usage reports (CLOSED)](https://github.com/earendil-works/pi/pull/9345)**
   Adds provider-neutral subscription usage reports with an Anthropic OAuth adapter: OAuth refresh/revalidation, five-minute token-partitioned cache with in-flight dedupe, then `GET /api/oauth/usage`. Useful for credential/usage transparency.

3. **[#6881 — feat(ai): use provider-reported cost when responses include it (OPEN, in-progress)](https://github.com/earendil-works/pi/pull/6881)**
   Reads `usage.cost` plus `cost_details.upstream_inference_cost` (the BYOK upstream share) from responses and prefers provider-reported billing over catalog-rate calculation, falling back unchanged. More accurate cost accounting for gateway-proxied providers.

4. **[#9344 — feat(coding-agent): add owner-safe UI overrides (CLOSED)](https://github.com/earendil-works/pi/pull/9344)**
   Owner-identity-guarded overrides for themes, footers, and editors: stale releases can't clobber active overrides, and overrides restore the prior valid owner or Pi's native UI. Safer multi-extension UI composition.

5. **[#9337 — fix(coding-agent): bound Case 3 compaction estimate and getContextUsage display on failed/aborted turns (CLOSED)](https://github.com/earendil-works/pi/pull/9337)**
   Ports three already-fixed compaction/context-display bugs from a downstream fork back onto upstream `main` so they land in official releases instead of being lost on every `pi update` — a nice fork-reconciliation effort.

6. **[#9329 / #9307 — Recognize Orca terminals as Kitty-image/OSC 8 capable (OPEN/CLOSED)](https://github.com/earendil-works/pi/pull/9329)**
   Two complementary PRs teaching `pi-tui` that `TERM_PROGRAM=Orca` supports Kitty inline images, true color, and OSC 8 hyperlinks — currently inherited iTerm/Kitty env vars mislead detection. Improves rendering fidelity inside the Orca terminal.

7. **[#8627 — Use ctx.cwd for cwd-sensitive tools (CLOSED)](https://github.com/earendil-works/pi/pull/8627)**
    Makes `read`/`write`/`edit`/`grep`-family tools resolve paths against the real session cwd from `ExtensionContext` when available, falling back to creation-time cwd. Correctness fix for multi-session extension usage.

8. **[#9316 — fix(ai, coding-agent): three easy fixes — #8919, #8717, #8720 (CLOSED)](https://github.com/earendil-works/pi/pull/9316)**
    Bundles three small fixes, notably closing #8919 (fullscreen dock unconditionally reserved a footer row via `minSize: 1`, so zero-row custom footers left a blank line). Clean triage-batch pattern for low-risk fixes.

9. **[#8635 — fix(ai): preserve aborted stop reason during lazy setup (OPEN)](https://github.com/earendil-works/pi/pull/8635)**
    Fixes #8409 by passing the abort signal through lazy stream setup wrappers and reporting setup failures as aborted when the signal is already fired, with a regression test for aborting mid-tool before the next auth setup. Important for correct cancellation attribution.

10. **[#9303 — fix(interactive): resume session before closing selector (CLOSED)](https://github.com/earendil-works/pi/pull/9303)**
    The `/resume` session selector closed itself before the session was actually resumed, so the picker vanished with no visible feedback. Simple but user-visible interaction fix.

Also notable: **#9350** (fork-free executable lookup to avoid deadlock on Android/multi-threaded hosts), **#9341** (runtime dependency refresh incl. `minimatch`, lockfile regeneration), **#9319** (guard optional `invalidate` in `MouseRegion` after theme changes crashed on extension components), and **#9310** (clear TUI mouse selection on session switch).

## Feature Request Trends

- **Broader OpenAI-compatible provider reach (#5363, #9338):** Consistent demand to treat providers that speak the OpenAI Responses wire protocol as first-class — new `amazon-bedrock-mantle` adapter, plus an undocumented-but-live Kimi for Coding Responses endpoint the built-in hardcoded `anthropic-messages` binding misses.
- **Fullscreen TUI ergonomics (#9052, #9356, #8919):** Users are investing in the fullscreen mode (pinned input, expanded compaction blocks on click, zero-row footers) and expect inline-mode parity in scrolling speed and layout flexibility.
- **Terminal compatibility breadth (#9329, #9307):** Multiple PRs/issue threads push Pi's terminal capability detection to cover newer terminal emulators (Orca) for images, true color, and OSC 8 hyperlinks.
- **Extension/event surface expansion (#9236, #8718, #2924, #5581):** Requests for more lifecycle symmetry — acknowledged/idempotent turn delivery for extensions, `window_focus`/`window_blur` events, and consistent firing of the `input` and `before_agent_start` events regardless of how a turn/message is injected.

## Developer Pain Points

- **Cancellation and abort leaks (#8823, #8635, #9340):** A recurring theme — Esc doesn't actually abort in-flight HTTP requests; abort signals get lost across lazy setup wrappers; and `AgentSession.abort()` can still trigger a post-run auto-compaction after `abortCompaction()` has returned. Developers clearly rely on precise cancel semantics under automation.
- **Compaction correctness (#8667, #9337, #9302):** Compaction remains the most fragile subsystem this cycle: stale entries can permanently brick a session (Anthropic 400s), and out-of-loop summarization/compaction paths miss provider-attribution headers. Trust cost is high because one bad compaction destroys the whole session.
- **Provider protocol mismatches (#7445, #8706, #9290, #9302):** Headaches from providers enforcing session headers (opencode `MissingSessionID` 400s since 2026-09-06), forced-thinking models leaking reasoning when toggled off (GLM zai), and developer-role selection silently coupled to `model.reasoning`.
- **Config-file lifecycle friction (#4212, #6415, #6406):** Users tracking configs in git want Pi-managed state (e.g., `lastChangelogVersion`) separated from user settings, dislike read-locks being taken on read-only mounts, and generally want fewer churn-y writes to synced files.
- **Transient-failure handling gaps (#7444, #9212):** Narrow retry conditions in the WebSocket path and a 13% truncation rate on gateway-mediated `edit` tool calls point to lingering distrust of the transport under real-world loads.

*Note: raw feed and issue/PR counts are as supplied; "closes" links within PRs reference the repository's own issue tracker.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-09-09

## 1. Today's Highlights

The team shipped **v0.23.1** with a significant breaking change — the retirement of `@qwen-code/webui` — alongside fixes for managed-memory availability and prompt-cache behavior. The new **@qwen-code/sdk v0.1.10** bundles CLI 0.23.1, making those fixes consumable downstream. A critical **Windows ConPTY process leak** in the VS Code Companion (347 orphan `conhost.exe` processes / ~2.8 GB after ~12 h) is the most active issue of the day.

## 2. Releases

- **[v0.23.1](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.1)** — Breaking change: `@qwen-code/webui` retired ([#9812](https://github.com/QwenLM/qwen-code/pull/9812)). Includes the managed-memory availability fix (`enableManagedAutoMemory` is now respected) and prompt-cache clearing patches requested in [#11022](https://github.com/QwenLM/qwen-code/issues/11022).
- **[v0.23.2-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.2-preview.0)** — Isolates subprocess-heavy E2E from fork pressure ([#11388](https://github.com/QwenLM/qwen-code/pull/11388)).
- **[sdk-typescript-v0.1.10](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.10)** — Bundles CLI 0.23.1.
- **[sdk-typescript-v0.1.9](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.9)** — Bundles CLI 0.23.0 with the same memory/cache fixes.

## 3. Hot Issues

1. **[#11303 — Windows ConPTY process leak (P1)](https://github.com/QwenLM/qwen-code/issues/11303)** — `qwen-cli` inside the VS Code Companion leaks 347 headless `conhost.exe` processes (~2.8 GB) after 12 h. 10 comments. The single biggest stability complaint on Windows.
2. **[#11352 — node-pty `conhost.exe` leak on natural shell exit (P1, blocked)](https://github.com/QwenLM/qwen-code/issues/11352)** — Split out of #11303; can't be fixed from the QC side at the pinned dependency. Highlights a deep upstream constraint.
3. **[#11386 — Scale daemon workspaces past 25 (P2)](https://github.com/QwenLM/qwen-code/issues/11386)** — Proposes decoupling registration from live runtimes via an LRU live set, with a fresh measurement update from the author.
4. **[#11394 — sdk-typescript docker leg test failure (P2)](https://github.com/QwenLM/qwen-code/issues/11394)** — `integration-tests/sdk-typescript/permission-control.test.ts` fails 15/20 in `sandbox:docker` but passes in `sandbox:none`. Points to a `QWEN_HOME` collision and memory-prefetch side effect.
5. **[#10685 — Channel service PID-file PID recycling (P2)](https://github.com/QwenLM/qwen-code/issues/10685)** — `process.kill(pid, 0)` doesn't verify identity, so a recycled PID can be mistaken for a live service.
6. **[#11022 — Publish @qwen-code/sdk with memory/cache fixes (closed)](https://github.com/QwenLM/qwen-code/issues/11022)** — Now shipped via v0.1.10. Demonstrates the team's SDK release cadence.
7. **[#11335 — Web Shell transcript column drift (closed)](https://github.com/QwenLM/qwen-code/issues/11335)** — Composer/transcript alignment breaks once the turn nav rail appears. UI polish, fast turnaround.
8. **[#11405 — Denied tool with pattern over-reaches](https://github.com/QwenLM/qwen-code/issues/11405)** — A pattern-level deny (`Bash(npm view *)`) makes the model assume the whole tool is forbidden. Affects permission UX.
9. **[#11274 — Decouple Skill management from child](https://github.com/QwenLM/qwen-code/issues/11274)** — Multi-PR refactor plan (<1000 lines/PR) for daemon/ACP separation.
10. **[#11403 — ECS runner fleet stale](https://github.com/QwenLM/qwen-code/issues/11403)** — Two pools (`ecs-update-hk-2`, …) failed to update to 0.23.1. CI infrastructure noise worth flagging.

## 4. Key PR Progress

1. **[#11391 — Isolate serve route E2E](https://github.com/QwenLM/qwen-code/pull/11391)** — Runs the `qwen serve` route E2E suite alone in a single Vitest fork after the rest of the Linux E2E batch finishes, on both docker and `sandbox:none`. Self-reported fix for [#11389](https://github.com/QwenLM/qwen-code/issues/11389).
2. **[#11348 — Enable built-in `web_search` by default on ModelStudio](https://github.com/QwenLM/qwen-code/pull/11348)** — Provider presets declare whether endpoints serve DashScope server-side search tools; Alibaba ModelStudio Standard/Token Plan get search by default.
3. **[#11289 — Keep mid-turn messages the daemon rejects at idle](https://github.com/QwenLM/qwen-code/pull/11289)** — Daemon now returns an explicit "send as ordinary prompt" answer instead of a bare refusal.
4. **[#11291 — Retry status-less upstream SSE errors](https://github.com/QwenLM/qwen-code/pull/11291)** — Gateway-pushed errors that arrive on a 200 stream without a status now enter the bounded auto-retry path instead of failing the turn.
5. **[#11349 — Expand Kimi/Qwen/DeepSeek reasoning presets](https://github.com/QwenLM/qwen-code/pull/11349)** — K3 low/high/max; K2.7 thinking-only; Qwen 3.8 low/medium/xhigh; DeepSeek V4 Pro / Flash native thinking. Closes a long-standing parity gap.
6. **[#11381 — Remove obsolete block streaming](https://github.com/QwenLM/qwen-code/pull/11381)** — Deletes the chunk-size/idle-flush settings and alternate paragraph sender; adapters keep native streaming. Healthy refactor.
7. **[#11276 — Web previews with saved delivery history](https://github.com/QwenLM/qwen-code/pull/11276)** — Desktop/mobile widths, refresh, external open, opt-in for embedded hosts.
8. **[#11238 — Improve session overview navigation](https://github.com/QwenLM/qwen-code/pull/11238)** — Workspace/branch/PR chips, distinct approval/question/running/idle states, status filters. Foundation for the next wave of Web Shell UX.
9. **[#11086 — Scope extensions to workspace runtimes](https://github.com/QwenLM/qwen-code/pull/11086)** — Makes the global extension catalog reachable through the runtime selected per workspace, with daemon/SDK workspace-qualified access.
10. **[#10410 — Preserve prompt cache for deferred tools](https://github.com/QwenLM/qwen-code/pull/10410)** — Two-step bridge (`tool_search` + `tool_call`) keeps deferred-tool schemas outside the declared tool list while still letting the model invoke them.

## 5. Feature Request Trends

- **Web Shell as a hostable product** — Custom branding ([#11357](https://github.com/QwenLM/qwen-code/issues/11357)), custom distributions ([#11358](https://github.com/QwenLM/qwen-code/issues/11358)), and consolidated REST/SSE integrator docs ([#11359](https://github.com/QwenLM/qwen-code/issues/11359)) all point to QC positioning `qwen serve` as an embeddable Agent backend.
- **Deeper daemon surface** — Session Workflow navigability ([#10938](https://github.com/QwenLM/qwen-code/pull/10938)), workspace scaling past 25 ([#11386](https://github.com/QwenLM/qwen-code/issues/11386)), workspace-scoped extensions ([#11086](https://github.com/QwenLM/qwen-code/pull/11086)), and Skill management decoupling ([#11274](https://github.com/QwenLM/qwen-code/issues/11274)).
- **Per-session request identity** — `${session_id}` template in `customHeaders` ([#10995](https://github.com/QwenLM/qwen-code/issues/10995)) so proxies/billing can attribute traffic.
- **Provider preset expansion** — Kimi/DeepSeek reasoning parity ([#11349](https://github.com/QwenLM/qwen-code/pull/11349)) and provider-aware tool defaults ([#11348](https://github.com/QwenLM/qwen-code/pull/11348)).
- **UI polish in Web Shell** — Bottom-aligned VP content ([#9305](https://github.com/QwenLM/qwen-code/pull/9305)), overview rename interactions ([#11390](https://github.com/QwenLM/qwen-code/issues/11390)), web previews ([#11276](https://github.com/QwenLM/qwen-code/pull/11276)), assistant turn settlement callbacks ([#11251](https://github.com/QwenLM/qwen-code/pull/11251)).

## 6. Developer Pain Points

- **Windows PTY stability** is the dominant theme: two P1 issues ([#11303](https://github.com/QwenLM/qwen-code/issues/11303), [#11352](https://github.com/QwenLM/qwen-code/issues/11352)) describe the same ConPTY host leak from different angles, and the unfixable half sits behind an upstream pin.
- **E2E flakiness in CI** — Five auto-bot CI failure issues in 24h ([#11367](https://github.com/QwenLM/qwen-code/issues/11367), [#11377](https://github.com/QwenLM/qwen-code/issues/11377), [#11389](https://github.com/QwenLM/qwen-code/issues/11389), [#11343](https://github.com/QwenLM/qwen-code/issues/11343), [#11331](https://github.com/QwenLM/qwen-code/issues/11331)), plus the macOS shard death retry in [#11134](https://github.com/QwenLM/qwen-code/pull/11134). The autofix loop is doing real work, but the underlying signal-to-noise is hurting maintainer review.
- **SDK/docker test isolation** — Shared `QWEN_HOME` plus memory pre-fetch collides with fake-server scripted responses ([#11394](https://github.com/QwenLM/qwen-code/issues/11394)).
- **Documentation drift** — Daemon pages sync but `_meta.ts` doesn't, so navigation never reaches the published site ([#11399](https://github.com/QwenLM/qwen-code/issues/11399)); integrators are asking for a single REST/SSE guide ([#11359](https://github.com/QwenLM/qwen-code/issues/11359)).
- **Permission UX** — Pattern-level denies being read by the model as full-tool bans ([#11405](https://github.com/QwenLM/qwen-code/issues/11405)) creates silent capability loss.
- **Setup-script portability** — `corepack`→`npx` fallback only catches `ENOENT`; `EACCES` aborts bootstrap ([#10524](https://github.com/QwenLM/qwen-code/issues/10524)).
- **Channel service PID hygiene** — Recycling a previously-used PID fools `readServiceInfo()` ([#10685](https://github.com/QwenLM/qwen-code/issues/10685)).
- **ACP/Zed parity** — `AskUserQuestion` falls back to raw input on Zed ([#11361](https://github.com/QwenLM/qwen-code/issues/11361)), an integration gap worth attention.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest
**Date:** 2026-09-09

## Today's Highlights
The community is currently focused on maturing the **Codewhale** TUI experience, specifically addressing complex session management, model catalog depth, and granular usage analytics. Significant work is underway in the integration of version 0.9.13 fixes, which resolve critical pagination and routing issues, while users are pushing for better "virtual memory" style context eviction for long-running sessions.

---

## Releases
*No new releases in in the last 24 hours.*

---

## Hot Issues
1. **[#6004] Hooks cannot observe session state](https://github.com/Hmbown/Codewhale/issue/6004)**: Developers are requesting new hook events for session states like `idle`, `fatal-error`, and `waiting-for-user`, currently limiting the ability to build reactive UI elements.
2. **[#5976] Cost shows "unknown" on Concentrate](https://github.com/Hmbown/Codewhale/issue/5976)**: A bug where specific provider billing (Concentrate) fails to report metrics, highlighting a gap in the pricing-coverage logic.
3. **[#6007] Native vendor selection for OpenRouter](https://github.com/Hmbown/Codewhale/issue/6007)**: Users want the ability to pin specific upstream vendors within OpenRouter to control for latency or model-family behavior variations.
4. **[#6009] /models command missing pagination](https://github.com/Hmbown/Codewhale/issue/6009)**: The CLI currently only returns the first page of models, leaving users unable to see the full catalog for providers with large libraries.
5. **[#6015] Adaptive anti-stall for Fleet agents](https://github.com/Hmbown/Codewhale/issue/6015)**: Read-only sub-agents (Scout/Reviewer) are burning tokens while stalling due to default settings; a request is made for adaptive shell grammar.
6. **[#6014] Session Picker UX improvements](https://github.com/Hmbown/Codewhale/issue/6014)**: The session list is cluttered with empty auto-sessions and lacks essential navigation like page-scroll and widened panes.
7. **[#6013] Goal gates & status verification](https://github.com/Hmbown/Codewhale/issue/6013)**: A request for the "Operate" loop to have independent status verification (blocked vs. stalled) rather than trusting the model's self-report.
8. **[#6011] Post-session usage diagnostics](https://github.com/Hmbown/Codewhale/issue/6011)**: Token and cost data are currently a "black box" once a session ends; users need historical per-model/per-week accounting.
9. **[#6008] Virtual memory-style context eviction](https://github.com/Hmbown/Codewhale/issue/6008)**: The current `/purge` tool only deletes or compresses; users want an "offload/swap" mechanism to move context out without losing it.
10. **[#6006] Slash commands in Up-arrow history](https://github.com/Hmbown/Codewhale/issue/6006)**: Developers cannot recall commands (like `/theme` or `/compact`) using the arrow keys because they are explicitly excluded from history.

---

## Key PR Progress
1. **[#6012] Skip runtime handoffs in auto-titles](https://github.com/Hmbown/Codewhale/pr/6012)**: Resolves a bug where internal XML envelopes (e.g., `operate_contract`) were appearing in UI session titles.
2. **[#6002] Integrate 0.9.13 contributor fixes](https://github.com/Hmbown/Codewhale/pr/6002)**: A major PR integrating provider catalog pagination, OpenRouter vendor selection, and pricing validation across CLI and UI.
3. **[#5982] Opt-out for model-bound key redaction](https://github.com/Hmbown/Codewhale/pr/5982)**: Adds a feature allowing developers to opt out of redaction for specific keys, facilitating local development and testing.

---

## Feature Request Trends
*   **Advanced Context Management:** A strong demand for "virtual memory" (swapping context rather than deleting it) to prevent token burnout and information loss during long tasks.
*   **Observability:** High interest in getting historical, cross-session cost and token analysis that goes beyond current live-only metrics.
*   **Configuration Flexibility:** Requests for a `[[models]]` config section to allow users to define local or private models without modifying the core source code.

---

## Developer Pain Points
*   **Context Loss:** The binary "delete or compress" nature of the current purge tool is frustrating for users on large-scale engineering tasks.
*   **UI Friction:** The Session Picker and command history are seen as "unpolished," slowing down power users' workflow loops.
*   **Opaque Billing:** The lack of post-session cost reporting makes it difficult for teams to budget or track API usage effectively over time.

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

# ComfyUI Community Digest — 2026-09-09

## 1. Today's Highlights

ComfyUI saw a maintenance-heavy 24 hours with **no new release**, but steady upstream churn: a flurry of **MiniMax H3 fixes** landed (denoise mask regression, VAE optimizations, positioned FL2VA keyframes), a new **Wan `apply_rope` crash** was identified and patched, and partner-nodes work added **GPT Image 2.5, mai-image-2.6, and a Bria "Transparent" output**. A new **governance/signed-policy framework** for custom nodes also entered review, which may reshape how third-party nodes are distributed.

## 2. Releases

No new releases published in the last 24 hours. The most recent shipped changes continue to flow via PRs landing on `master` (see PR progress below).

## 3. Hot Issues

| # | Issue | Why it matters | 👍 |
|---|---|---|---|
| [#11546](https://github.com/Comfy-Org/ComfyUI/issues/11546) | amdgpu-arch.exe hardcoded python.exe path | Long-standing AMD onboarding blocker; the shipped helper still assumes a hard path and breaks portable/relocated installs. **7 👍** | 7 |
| [#14396](https://github.com/Comfy-Org/ComfyUI/issues/14396) | Dynamic VRAM makes generation "take too long" on RTX 4070S | 24 comments worth of community pain; users want a clear kill-switch rather than a hidden perf cliff. | 0 |
| [#15452](https://github.com/Comfy-Org/ComfyUI/issues/15452) | Dynamic VRAM: reused (warm) model → NaN/black on VAE decode | Confirms the dynamic-VRAM feature is producing correctness regressions, not just slowness. | 0 |
| [#12118](https://github.com/Comfy-Org/ComfyUI/issues/12118) | AMD 6900XT still crashes after model load | Multi-quarter Windows/AMD stability complaint; little movement. | 0 |
| [#16155](https://github.com/Comfy-Org/ComfyUI/issues/16155) | MiniMax H3 Ref2VA voice cloning gibberish despite Kijai's fix | Signals the Ref2VA path is still unstable even after upstream patches. | 0 |
| [#16151](https://github.com/Comfy-Org/ComfyUI/issues/16151) | "Everything is broken" regression in recent 3 weeks | Aggregated user-perceived regression report — useful signal for triage priorities. | 0 |
| [#15653](https://github.com/Comfy-Org/ComfyUI/issues/15653) | `torch.AcceleratorError: CUDA error: invalid argument` on 9060XT 16G | Newer AMD GPU compatibility edge case affecting a common consumer card. | 0 |
| [#16088](https://github.com/Comfy-Org/ComfyUI/issues/16088) | Feature: support **LLaDA-Image** | InclusionAI's new multimodal; one of the higher-engagement feature asks this week. | 1 |
| [#16175](https://github.com/Comfy-Org/ComfyUI/issues/16175) | MiniMax H3 Model Sparse Attention node OOM | Memory issue on a hot new path; worth tracking for H3 power users. | 0 |
| [#16073](https://github.com/Comfy-Org/ComfyUI/issues/16073) | UI bug in App mode | App-mode regressions erode trust for non-dev users. | 0 |

**Closed this cycle:** [#14271](https://github.com/Comfy-Org/ComfyUI/issues/14271) (shape-mismatch runtime error, stale), [#15981](https://github.com/Comfy-Org/ComfyUI/issues/15981) and [#15978](https://github.com/Comfy-Org/ComfyUI/issues/15978) (MiniMax H3 denoise-mask grid artifact + masking broken in v0.34.0 — both addressed by [#15988](https://github.com/Comfy-Org/ComfyUI/pull/15988)), [#16177](https://github.com/Comfy-Org/ComfyUI/issues/16177) (empty/placeholder issue).

## 4. Key PR Progress

| PR | What it does |
|---|---|
| [#16190](https://github.com/Comfy-Org/ComfyUI/pull/16190) | Partner Nodes: adds **OpenAI GPT Image 2.5 "Flare" and "Sunburst"** models. |
| [#16188](https://github.com/Comfy-Org/ComfyUI/pull/16188) | Partner Nodes: adds Microsoft **`mai-image-2.6`** via OpenRouter. |
| [#14377](https://github.com/Comfy-Org/ComfyUI/pull/14377) | Partner Nodes: adds a **Transparent** option to Bria Remove Video Background. *(closed-merged cycle)* |
| [#16167](https://github.com/Comfy-Org/ComfyUI/pull/16167) | **Governance enforcement for custom nodes** — signed-policy hook; disabled by default for upstream builds. |
| [#16176](https://github.com/Comfy-Org/ComfyUI/pull/16176) | Adds `LTXVAddLatentGuide` to pin a pre-encoded latent without a VAE round-trip; smaller guides are dilated on a sparse grid. |
| [#16048](https://github.com/Comfy-Org/ComfyUI/pull/16048) | **Pixal3D multiview** support (CORE-421) — synthetic multi-view workflows. |
| [#16187](https://github.com/Comfy-Org/ComfyUI/pull/16187) | **MiniMax-H3 VAE optimizations** — folds norm/SiLU/pad/residual into a single grouped-conv epilogue via comfy-kitchen kernels. |
| [#16184](https://github.com/Comfy-Org/ComfyUI/pull/16184) | Adds **positioned FL2VA keyframes** to MiniMax H3, enabling partial-canvas out/inpainting. |
| [#16182](https://github.com/Comfy-Org/ComfyUI/pull/16182) | Fixes [#16181](https://github.com/Comfy-Org/ComfyUI/issues/16181) — `apply_rope` shape crash in Wan22FunControlToVideo when `ref_image` has odd spatial size. |
| [#16186](https://github.com/Comfy-Org/ComfyUI/pull/16186) | Workflow templates → **v0.11.56**: H3 Fun ControlNet, GPT-6 Astra, 30+ deprecated-node cleanups, category reorganization. |

Other notable merged/closed: [#15988](https://github.com/Comfy-Org/ComfyUI/pull/15988) MiniMax H3 denoise-mask velocity fix, [#16185](https://github.com/Comfy-Org/ComfyUI/pull/16185) quantized TE matmul + Gemma4 prefill fix, [#16189](https://github.com/Comfy-Org/ComfyUI/pull/16189) cleaner quantized-mm gating, [#15952](https://github.com/Comfy-Org/ComfyUI/pull/15952) LTXAV gated attention weight handling, [#16163](https://github.com/Comfy-Org/ComfyUI/pull/16163) drops more workflow-media packages from the Windows portable build, [#16180](https://github.com/Comfy-Org/ComfyUI/pull/16180) Aimdo 0.5.3 + memory-compiler fixes, [#16123](https://github.com/Comfy-Org/ComfyUI/pull/16123)/[#15923](https://github.com/Comfy-Org/ComfyUI/pull/15923) Generic Loops (closed; see [#13180](https://github.com/Comfy-Org/ComfyUI/pull/13180) video/tensor looper instead).

## 5. Feature Request Trends

- **New model families on day-1:** requests explicitly call out **LLaDA-Image** (#16088) and continued coverage of MiniMax H3 variants (voice, video, sparse attention). On the delivery side, OpenAI GPT Image 2.5, mai-image-2.6, Pixal3D, and Bria Transparent show ComfyUI is treating "first-class partner integration" as a top-tier feature vector.
- **Latent-level workflow primitives:** `LTXVAddLatentGuide` (#16176) and positioned FL2VA keyframes (#16184) signal strong demand for nodes that operate on **pre-encoded latents** without forcing VAE decode/encode, plus spatially partial guides.
- **Governed / signed distribution:** #16167 (governance hooks) suggests a near-term direction toward **signed, policy-checked custom nodes** for enterprise builds — a notable architectural shift.
- **Workflow templating hygiene:** v0.11.56 templates (#16186) + portable-size trimming (#16163) reflect community pressure for cleaner onboarding and smaller downloads.

## 6. Developer Pain Points

- **Dynamic VRAM is the loudest recurring complaint.** It is simultaneously *slow* (#14396) and *incorrect* (#15452, NaN/black on VAE decode). Users want either a documented off-switch or a more conservative default.
- **AMD/Windows reliability gap persists.** AMD 6900XT instant crashes (#12118), `amdgpu-arch.exe` hardcoded paths (#11546), and CUDA-arg errors on 9060XT 16G (#15653) keep AMD users in a worse support position than NVIDIA users.
- **MiniMax H3 regressions are cluster-heavy.** Within 24 hours: denoise-mask velocity bug, masking broken in v0.34.0, Ref2VA voice gibberish, sparse-attention OOM, FL2VA keyframe positioning, plus a Yusu Unified type error (#16183). Each ships a fix, but the velocity of change itself is the developer pain point — pinning a known-good version matters.
- **App-mode UI regressions** (#16073, #16151) and **shape-broadcasting crashes** in Wan ref-image paths (#16181) keep biting image-to-video authors.
- **Quantization regressions:** #16185 had to re-enable fused matmul on int8/W4A8 text encoders and restore Gemma4 prefill cache after #16130/#15861 — a reminder that quantization and KV-cache paths are still moving targets.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Community Digest — 2026-09-09

## Today's Highlights
The community is actively addressing **OpenAI/Anthropic API compatibility gaps** — notably silent failures in `/v1/responses` (developer-role drops, tool-search tools not exposed) and the persistent "no user query found in messages" 500 error for tool-only turns. On the runtime side, **MLX runner improvements** landed for Qwen YaRN context scaling and explicit context handling, while a **server-side compaction retry** mitigates context-overflow loops. Desktop UX sees a new ChatGPT/Codex onboarding flow and an in-app **OLLAMA_ORIGINS** configuration field — directly resolving a long-standing feature request.

---

## Releases
*No new releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#162](https://github.com/ollama/ollama/issues/162) | **Don’t auto-start on login / add disable option** | Top-voted UX request (117 👍, 67 comments); PR #7097 exists but not merged. | High — affects every desktop user |
| [#17778](https://github.com/ollama/ollama/issues/17778) | **qwen3.8: “no user query found in messages” 500** | Blocks tool-use loops; 23 👍, 25 comments. Related to #18303 (closed today). | High — breaks agentic workflows |
| [#17782](https://github.com/ollama/ollama/issues/17782) | **AMD RX 9060 XT: “Could not load TensileLibrary_lazy_gfx1200.dat”** | ROCm library mismatch on new GPU; logs attached. | Medium — AMD onboarding blocker |
| [#16240](https://github.com/ollama/ollama/issues/16240) | **Expose `preserve_thinking` via OpenAI-completions API** | Qwen3.6 template supports it but no API path; 9 comments. | Medium — reasoning-model parity |
| [#11295](https://github.com/ollama/ollama/issues/11295) | **Configurable `OLLAMA_ORIGINS` for network exposure** | Required for hosted chatbots; now addressed by PR #18320. | Medium — 7 comments, long-standing |
| [#18094](https://github.com/ollama/ollama/issues/18094) | **gemma3:12b structured output truncates on double quotes** | JSON schema `format` fails silently on escaped quotes; low eval_count. | Medium — structured-output reliability |
| [#18193](https://github.com/ollama/ollama/issues/18193) | **Cloud glm-5.3 endless reasoning → task abort** | Cloud API behaves differently from Z.AI official; affects OpenCode/ZCode. | Medium — cloud-model fidelity |
| [#18297](https://github.com/ollama/ollama/issues/18297) | **IQ3_S quantization returns empty content** | New quantization format may lack runner support; generation stops with empty string. | Medium — quantization coverage |
| [#18305](https://github.com/ollama/ollama/issues/18305) | **/v1/responses silently drops `role: developer` items** | 200 OK but content never reaches model; silent data loss. | High — API compliance |
| [#18306](https://github.com/ollama/ollama/issues/18306) | **Responses API: `tool_search` tools never offered to model** | Codex CLI workflow broken; tools found but not callable. | High — agent tooling gap |

---

## Key PR Progress

| # | PR | Summary | Impact |
|---|----|---------|--------|
| [#18324](https://github.com/ollama/ollama/pull/18324) | **server: retry compaction after context overflow** | Auto-retries summarization after dropping ~20% oldest transcript; breaks retry loops. | Runtime stability |
| [#18263](https://github.com/ollama/ollama/pull/18263) | **mlxrunner: support Qwen static YaRN contexts** | Parses YaRN metadata, applies RoPE scaling, honors extended contexts up to `factor * original_max`. | Long-context Qwen on Apple Silicon |
| [#18285](https://github.com/ollama/ollama/pull/18285) | **mlxrunner: honor explicit context without overriding soft sizing** | Distinguishes user-set `num_ctx` from VRAM-based auto-sizing; passes `--ctx-size` only when explicit. | Predictable context control |
| [#18326](https://github.com/ollama/ollama/pull/18326) | **anthropic: `output_config.effort` without thinking block disables thinking** | Aligns with Anthropic spec; avoids silent thinking activation. | API correctness |
| [#18320](https://github.com/ollama/ollama/pull/18320) | **app: configure allowed browser origins in settings** | Adds “Allowed browser origins” field under network exposure; persists `OLLAMA_ORIGINS` in-app. | Resolves #11295; desktop UX |
| [#18321](https://github.com/ollama/ollama/pull/18321) | **app: first-use ChatGPT connection intro** | Model-picker modal on first connect; explains Codex mode; persists acknowledgment. | Onboarding polish |
| [#18323](https://github.com/ollama/ollama/pull/18323) | **app: open Codex by default for Ollama launches** | Launches `codex://threads/new?mode=codex` when Ollama integration enabled. | Codex-first workflow |
| [#18319](https://github.com/ollama/ollama/pull/18319) | **fix data races in progress and sched** | `progress`: joins render loop on stop; `sched`: guards mutable fields with `TryLock`. | Concurrency safety |
| [#18315](https://github.com/ollama/ollama/pull/18315) | **template: preserve developer instructions in Go templates** | Normalizes `developer` → `system` messages before template rendering. | Fixes silent instruction loss |
| [#18296](https://github.com/ollama/ollama/pull/18296) | **openai: use `tsc_` prefix for tool-search call IDs** | Fixes validation errors when switching Codex conversations to OpenAI models. | OpenAI/Codex interop |

---

## Feature Request Trends
1. **OpenAI/Anthropic API parity** — developer-role handling, tool-search exposure, structured-output fidelity, Responses API compliance.
2. **Reasoning-model control** — `preserve_thinking`, thinking-block visibility (TUI/Desktop), effort/token budgets via API.
3. **Desktop configurability** — in-app `OLLAMA_ORIGINS`, auto-start toggle, Codex/ChatGPT launch defaults, connection-status clarity.
4. **Quantization & hardware breadth** — new GGUF formats (IQ3_S), AMD ROCm library resolution, YaRN context scaling on MLX.
5. **Observability** — projected context length in `/api/show` (#17663), truncation warnings (#14259), 403-preview for cloud models (#16773).

---

## Developer Pain Points
- **Silent failures** dominate: truncated context, dropped `developer` messages, ignored `tool_search` tools, empty IQ3_S output — all return 200/500 without actionable errors.
- **Tool-use loops break** on “no user query found” when assistant→tool→user(round) lacks a user-text turn (#17778, #18303).
- **Cloud vs. local divergence** — `glm-5.3:cloud` reasoning behavior differs from provider API; no visibility into model-card limitations (subscription gating).
- **AMD/ROCm onboarding** — missing Tensile libraries for newer GPUs (RX 9060 XT) cause mid-run crashes.
- **Template/API mismatch** — Go templates omit `developer` role; function-gemma multiline args lost in parsing; thinking blocks invisible in TUI.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

# llama.cpp Community Digest — 2026-09-09

## 1. Today's Highlights

The llama.cpp project shipped a dense cluster of backend stability fixes and performance optimizations, with a notable behavior change around **lazy tensor loading defaults on iGPUs** (now disabled). GPU-side work dominated the day: **Vulkan got two op fusions and async copy tuning**, **Metal received a fix for half-idle simdgroups** in IQ3_XXS, and **HIP got branch-free SWAR replacements** plus RDNA3.5 MMVQ tuning. On the model side, support for **Kimi-K3 recurrent-state rollback** and a **Nemotron 3 Super MTPv2 draft head fix** landed.

## 2. Releases

Multiple builds were published in 24 hours (b10853 → b10867). Highlights:

- **[b10867](https://github.com/ggml-org/llama.cpp/releases)** — *llama: disable lazy tensor loading by default on iGPUs* (#28326). The `auto` lazy mode is now redefined to "pick a sensible default for your system"; the old "lazy only >4 GiB" behavior is now `lazy_mode=large`, and "lazy all" is `lazy_mode=all`. Closes issue [#28160](https://github.com/ggml-org/llama.cpp/issues/28160), a Vulkan/iGPU regression on `qwen4exp`.
- **[b10865](https://github.com/ggml-org/llama.cpp/releases)** — Reverts the HIP `prop.integrated` restoration (#24233); see #28604.
- **[b10864](https://github.com/ggml-org/llama.cpp/releases)** — *server: apply checkpoint min-step eviction only when the checkpoint list is full* (#28302). Fixes premature eviction of state on short prompts.
- **[b10863](https://github.com/ggml-org/llama.cpp/releases)** — *metal: fix idle threads in `mul_mv_iq3_xxs` for `ne00 < 1024`* (#28086). Disables half-idle simdgroups and dispatches a split kernel for small `ne00/32`, with the plain kernel unchanged for `ne00 ≥ 1024`.
- **[b10858](https://github.com/ggml-org/llama.cpp/releases)** — *vulkan: fuse `UNARY(GELU|SIGMOID|SILU|SOFTPLUS) + MUL`* (#27220). Implemented in `unary.comp` behind `UNARY_MUL_FUSION` with specialized pipelines per op.
- **[b10857](https://github.com/ggml-org/llama.cpp/releases)** — *Fix Vulkan-Hpp handle usage on 32-bit targets* (#22892).
- **[b10856](https://github.com/ggml-org/llama.cpp/releases)** — *chat: split specialized parsers into `common/parsers`* (#27764). Moves the 14 dedicated template parsers into per-model files mirroring the `src/models` layout.
- **[b10855](https://github.com/ggml-org/llama.cpp/releases)** — *opencl: properly handle non-contiguous inputs to `conv2d`* (#28503).
- **[b10853](https://github.com/ggml-org/llama.cpp/releases)** — *model: support Kimi-K3 recurrent-state rollback* (#28466).

## 3. Hot Issues

1. **[#18363 — CUDA compile breaks on mmq for compute capability 120](https://github.com/ggml-org/llama.cpp/issues/18363)** (33 comments, 👍3) — Long-running build failure for SM 120 hardware; community pushing for a fix before next CUDA toolkit reshuffle.
2. **[#21725 — Feature Request: XDNA backend](https://github.com/ggml-org/llama.cpp/issues/21725)** (26 comments, 👍32) — Strongest signal among asks: an AMD XDNA NPU backend would broaden hardware coverage beyond ROCm/Vulkan. 32 👍s makes it the highest-voted open issue in the window.
3. **[#23268 — Speculative Decoding intermittent timeout on Vulkan](https://github.com/ggml-org/llama.cpp/issues/23268)** (19 comments) — Vulkan + Qwen3.6-35B-A3B reproducer; speculating-engine stalls have been a recurring Vulkan complaint.
4. **[#26845 — SYCL garbage on the second prompt](https://github.com/ggml-org/llama.cpp/issues/26845)** (15 comments) — Intel Arc Pro B60 with `KAT-Coder-V2.5`; SYCL backend cleanliness issues.
5. **[#28247 — Vulkan GGML_ASSERT on Intel Arc A770 running Qwen 3.8 flash next](https://github.com/ggml-org/llama.cpp/issues/28247)** (15 comments) — `maxComputeWorkGroupCount` ceiling hit; shows WGS-size tuning still incomplete on Intel Arc.
6. **[#26447 — Vulkan `ErrorDeviceLost` on Vega 8 iGPU around ~50K context](https://github.com/ggml-org/llama.cpp/issues/26447)** (12 comments) — Hints that default memory-pool sizing remains fragile on small/UMA iGPUs.
7. **[#25061 — CUDA `cublasSgemm_v2` issue during large-context processing](https://github.com/ggml-org/llama.cpp/issues/25061)** (11 comments) — Affects 2× RTX 3060 + Qwen3.6-35B-A3B at long context.
8. **[#26425 — MTP retains inter-request state, non-deterministic output](https://github.com/ggml-org/llama.cpp/issues/26425)** (8 comments, 👍1) — Cross-request state leak in MTP is a correctness, not just performance, problem; relevant given much recent MTP work.
9. **[#28522 — Parallel `tool_calls` mangled/hung on Qwen models with ~48 optional params](https://github.com/ggml-org/llama.cpp/issues/28522)** (8 comments) — Real user found this by self-hosting a fitness assistant; spotlights tool-call parser fragility under high-cardinality schemas.
10. **[#26609 — CUDA illegal memory access in `cudaStreamSynchronize` on flash-attn + Qwen3.6-35B MoE partial offload](https://github.com/ggml-org/llama.cpp/issues/26609)** (7 comments) — Deterministic across builds, only reproduces with flash-attn on; deterministic crashes at request #2 suggest a stateful kernel bug.
11. **[#28541 — RFC: image/video/audio generation from diffusion GGUFs (LTX-2)](https://github.com/ggml-org/llama.cpp/issues/28541)** (6 comments) — Directional RFC aiming to extend llama.cpp beyond LLMs.

## 4. Key PR Progress

1. **[#26004 — server: preserve context checkpoints across slot save/restore](https://github.com/ggml-org/llama.cpp/pull/26004)** — Eliminates full re-prefill after `slot save → restore` for SWA and hybrid/recurrent models like Qwen3-Next. Important for router-mode deployments where slots shift frequently.
2. **[#27861 — GPU-resident LRU cache for host-offloaded MoE expert weights](https://github.com/ggml-org/llama.cpp/pull/27861)** — Serves recently used experts (via `-ot ...=CPU`, `-ncmoe`) from GPU memory instead of re-streaming from system RAM on every decode.
3. **[#28414 — `--prefetch-experts-slots`: lookahead H2D prefetch of host-resident MoE experts](https://github.com/ggml-org/llama.cpp/pull/28414)** — Companion work to #27861; overlap-fetch hides host→GPU latency.
4. **[#28101 — Vulkan: command-buffer debug labels for GPU profilers](https://github.com/ggml-org/llama.cpp/pull/28101)** — Names every dispatch so `vkCmdDispatch(M,N,K)` becomes a labeled op; the kind of DX12/Ari precision work needed to actually tune Vulkan at scale.
5. **[#28618 — Vulkan: CPU writes in `ggml_backend_vk_cpy_tensor_async` when the context is idle](https://github.com/ggml-org/llama.cpp/pull/28618)** — Bypasses fence-waiting (~50µs each) by using CPU writes to host-visible memory in idle paths.
6. **[#28462 — cmake: only take build info from the llama.cpp source tree](https://github.com/ggml-org/llama.cpp/pull/28462)** — Fixes #28397: stops the build from picking up a parent-directory `git` repo.
7. **[#28617 — nemotron: fix MTPv2 draft head loading for Nemotron 3 Super](https://github.com/ggml-org/llama.cpp/pull/28617)** (closed/merged) — Closes the 19-of-21 tensors bug for the official MTPv2 draft.
8. **[#28326 — llama: disable lazy tensor loading by default on iGPUs](https://github.com/ggml-org/llama.cpp/pull/28326)** (closed/merged) — Already shipped as **b10867**.
9. **[#28616 — HIP: branch-free SWAR for `__vsub4` / `__vcmpne4` / `__vcmpeq4`](https://github.com/ggml-org/llama.cpp/pull/28616)** — `__vsub4` is now wrapping (not saturating like `__vsubss4`); Q-element kernels should improve.
10. **[#28613 — HIP: tune MMVQ batch thresholds on RDNA3.5](https://github.com/ggml-org/llama.cpp/pull/28613)** — Per-type table replaces the flat `ne11 <= 8`; performance boost for batched generation on Strix Halo / RDNA3.5.
11. **[#28326 / #28397 hooks] [#28620 — jinja: treat a null left operand of `in` as a plain lookup](https://github.com/ggml-org/llama.cpp/pull/28620)** — Restores Jinja parity for `{%- set x = x | default(None) %}{{"a" in x}}` patterns.
12. **[#27220 — vulkan: fuse UNARY + MUL](https://github.com/ggml-org/llama.cpp/pull/27220)** (closed/merged into **b10858**) — Specialized pipelines per op.
13. **[#26928 — Web UI: download button for generated files in chat](https://github.com/ggml-org/llama.cpp/pull/26928)** — QoL for code/file outputs that don't go through a write tool.
14. **[#28362 — Enables Windows ARM64 build with MSVC cl.exe](https://github.com/ggml-org/llama.cpp/pull/28362)** — Lets WoA users build with `cmake -B build -S . -DGGML_NATIVE=ON` without installing clang.
15. **[#28612 — chat: keep DSML markup out of DeepSeek V3.2 string tool arguments](https://github.com/ggml-org/llama.cpp/pull/28612)** — Defensive parser fix for misspelled closing parameter markers in DeepSeek V4 Flash.

## 5. Feature Request Trends

- **New GPU/NPU backends.** XDNA ([#21725](https://github.com/ggml-org/llama.cpp/issues/21725)), Metal multi-GPU on Intel Macs ([#28565](https://github.com/ggml-org/llama.cpp/issues/28565)), and continued Windows ARM64/MSVC ergonomics ([#28362](https://github.com/ggml-org/llama.cpp/pull/28362)).
- **New model families.** GLM5.3 (flash) ([#27922](https://github.com/ggml-org/llama.cpp/issues/27922), 👍14) and HRM-Text/DFM Mimir 1B conversion support ([#27625](https://github.com/ggml-org/llama.cpp/pull/27625)) point to an interest in non-standard architectures (alternating low/high transformer stacks).
- **Beyond text: diffusion GGUFs.** RFC #28541 (LTX-2) explores image/video/audio generation — a significant scope expansion request.
- **Tool/agent parity.** Consistent asks for better tool-call reliability (parallel `#28522`), better Jinja parity (`#28620`), and richer UI for generated artifacts (`#26928`).
- **Quantization completeness.** NVFP4 default-type mapping + scale-tensor emission (`#22897`) closes a long-standing quantize gap for CUDA MMA.
- **DevEx/QoL.** API/ABI compatibility script ([#28579](https://github.com/ggml-org/llama.cpp/pull/28579)), sanitizer CI tests ([#28583](https://github.com/ggml-org/llama.cpp/pull/28583)), and build-info provenance hardening ([#28462](https://github.com/ggml-org/llama.cpp/pull/28462)).

## 6. Developer Pain Points

- **Backend portability bugs.** A lot of the day's volume is the same story across vendors: Vulkan WGS limits (`#28247`), Vulkan `ErrorDeviceLost` on iGPU (`#26447`), Vulkan shader optimization on Termux (`#28234`), HIP wrong-logits on RDNA3 (`#28211`), SYCL peer-to-peer on multi-GPU Arc (`#27168`), CUDA illegal mem on flash-attn + MoE (`#26609`), CUDA display loss on RTX 5090 (`#27910`), and CUDA mmq SM 120 compile (`#18363`).
- **iGPU lazy mode confusion.** `--lazy-mode auto` semantics had become inconsistent enough that a refactor (#28326 → b10867) was needed; community had to file [#28160](https://github.com/ggml-org/llama.cpp/issues/28160) about halved pp512 on `qwen4exp`.
- **MTP correctness under concurrency.** Two issues (`#26425`, `#27296`) complain about MTP state carryover that breaks determinism and long/short inference — the headline shows this is now actively being addressed (checkpoints, prefetch, etc.).
- **Tool calling fragility.** Parallel `tool_calls` mangling (`#28522`) and DSML parsing edge cases (`#28612`) hurt agentic workloads.
- **Profiling & observability.** People can't optimize what they can't see — Vulkan debug labels (`#28101`) and command-buffer naming is repeatedly treated as a blocker for serious Vulkan tuning.
- **Build/CI hygiene.** Stale UI assets forced builds (`#25443`), build-info leaked from parent `.git` (`#28397` → `#28462`), and sanitizer-only is not enough without tests (`#28583`).
- **Quantization edge cases.** IQ3_S garbage on RTX 5060TI Blackwell (`#28581`) and NVFP4 quantization UB (`#22897`) suggest the project's matmul/quant matrix is not yet stable on Blackwell + RDNA3.5 silicon.

*Generated from github.com/ggerganov/llama.cpp activity for 2026-09-09.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*