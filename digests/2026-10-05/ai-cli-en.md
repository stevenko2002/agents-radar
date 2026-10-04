# AI CLI Tools Community Digest 2026-10-05

> Generated: 2026-10-04 22:15 UTC | Tools covered: 12

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



**Today's Highlights**

1. **Claude Code v2.1.289** — Patch release with three targeted fixes: deny/ask rule precedence on compound shell commands (security-relevant for managed/enterprise deployments), terminal freeze on malformed code blocks (unclosed `<script>` tags, deeply nested `${`), and a `Read` denial-path fix. [Link](https://github.com/anthropics/claude-code/releases/tag/v2.1.289)

2. **GitHub Copilot CLI v1.0.92-4** — Pre-release adding `copilot config` subcommands (list, read, set, remove) for scriptable configuration management, faster first-run startup via child-process bundled CLI extraction, improved multi-MCP connection startup, and canvas actions that can return images. [Link](https://github.com/github/copilot-cli/releases/tag/v1.0.92-4)

3. **Pi v1.0.2** — Introduces `samplingParamsByThinkingLevel` in `models.json` for OpenAI-compatible APIs, allowing per-thinking-level sampling parameters (e.g., `temperature`, `top_p`) to override flat settings. [Link](https://github.com/earendil-works/pi/releases/tag/v1.0.2)

4. **llama.cpp b11387–b11398** — Rapid series of point releases focused on backend correctness and performance: x86 tinyBLAS now vectorizes BF16/FP16/FP32 K-tails, CUDA MMQ memory faults and padding variables were fixed, Vulkan RDNA4 `mat_vec` tuning was corrected, and a chat-peg-parser use-after-free was resolved. [Link](https://github.com/ggml-org/llama.cpp/releases)

5. **Qwen Code v0.24.7-nightly** — Two nightly releases (20261004.9915c7ff8f and 20261003.2c591ecc08) aligning Code Mode text with lazy tool discovery and honoring approved permissions (release note truncated). [Link](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.7-nightly.20261004.9915c7ff8f)

6. **Gemini CLI PR #29536** — Security-hardens `grep` execution against CWE-88 argument injection by passing search patterns with an explicit `-e` delimiter. [Link](https://github.com/google-gemini/gemini-cli/pull/29536)

7. **OpenCode** — Closed long-standing issue #20995 where Gemma 4 (e4b) tool calling failed via Ollama's OpenAI-compatible API (model returned `tool_calls` but OpenCode ignored them). [Link](https://github.com/anomalyco/opencode/issues/20995)

8. **Ollama PR #18787** — Adds `ollama update [check|pull]` with `--rc`, `--prerelease`, `--install`, and `--force` flags, bringing RC/prerelease update support to the CLI. [Link](https://github.com/ollama/ollama/pull/18787)

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills Community Highlights
*anthropics/skills · data as of 2026-10-05*

> **Data note:** PR-level comment counts were unavailable in the export (all `undefined`), so PR rankings below are based on the provided comment-sorted ordering plus linked-issue engagement and recency of activity. Issue comment counts are intact and used as an attention signal.

---

## 1. Top Skills Ranking

**#1298 — skill-creator: isolate trigger evals; handle Windows + runtime failures** — MartinCajiao
Functionality: Hardens the `skill-creator` evaluation harness so trigger detection is reliable — per-worker command probes no longer compete, `select()` on subprocess pipes is fixed for Windows, unrelated tools no longer abort scans, and runtime failures are no longer misclassified as "non-triggers."
Discussion highlights: Directly addresses the community's loudest functional complaint — Issue #556 (`run_eval.py` reports 0% trigger rate across all queries, 12 comments, 7👍) and the six reproducible benchmark failures in #1383. Active maintenance (updated 2026-09-16).
Status: **OPEN** — [link](https://github.com/anthropics/skills/pull/1298)

**#1742 — mcp-builder: support `mcp>=2` `streamable_http_client` + custom headers** — Kuldeeep18
Functionality: Updates the MCP builder to import the renamed `streamable_http_client` from `mcp>=2.0.0` and to configure custom HTTP headers via `create_mcp_http_client`/`http_client` rather than a direct kwarg.
Discussion highlights: Fixes #1668; lands in the wake of Issue #1390 (evaluation harness scores 0/N against real MCP servers — `TextContent` not JSON-serializable, swallowed into fabricated tool errors). Continuously maintained through 2026-09-29.
Status: **OPEN** — [link](https://github.com/anthropics/skills/pull/1742)

**#1771 — proofcore-contract-auditor (Web3 smart-contract notarization)** — ProofCore-Protocol
Functionality: An Agent Skill for automated static analysis of Solidity/Rust smart contracts that anchors cryptographic audit proofs on the public TON Blockchain via ProofCore's zero-storage Merkle protocol.
Discussion highlights: One of the most externally oriented new-Skill submissions; signals the Skills format expanding into Web3/compliance use cases.
Status: **OPEN** — [link](https://github.com/anthropics/skills/pull/1771)

**#1703 — md2video-audio (Markdown → MP4 with voiceover)** — 70v-Yoyo
Functionality: Zero-cost pipeline compiling Markdown into presentation slides (via Marp) and rendering them as professional MP4 videos with realistic human-like voiceovers.
Discussion highlights: Represents the "content creation" demand cluster (see also document-typography, docx fixes).
Status: **OPEN** — [link](https://github.com/anthropics/skills/pull/1703)

**#1245 — notion-spec-to-implementation + quantitative-resume-auditor** — mrdesouzaphd-cmyk
Functionality: (1) Transforms product/tech specs into concrete Notion tasks Claude can implement, with acceptance criteria and progress tracking; (2) audits resumes quantitatively.
Discussion highlights: Long-lived PR (created 2026-06-02, touched 2026-09-30) — steady iteration suggests maintainer responsiveness to review.
Status: **OPEN** — [link](https://github.com/anthropics/skills/pull/1245)

**#822 — AWT (AI Watch Tester): vision-driven E2E testing** — ksgisang
Functionality: Gives Claude vision + browser control to auto-generate E2E tests with zero code — point at an app and generate/run tests.
Discussion highlights: Maps to the strong community interest in testing tooling (Issues #556, #1383, #1390).
Status: **OPEN** — [link](https://github.com/anthropics/skills/pull/822)

**#723 — testing-patterns (full testing stack)** — 4444J99
Functionality: Comprehensive testing guidance — Testing Trophy philosophy, unit (AAA) patterns, React component testing with Testing Library, edge cases.
Discussion highlights: Long-lived (created 2026-03-22, updated 2026-09-21); matches the "test generation" demand trend.
Status: **OPEN** — [link](https://github.com/anthropics/skills/pull/723)

**#525 — pyxel (retro game development)** — kitao
Functionality: Guides creating, debugging, and verifying retro games in Python via Pyxel — headless input-driven runs, frame inspection, state checks.
Discussion highlights: Oldest still-active feature PR (created 2026-03-05); niche but sustained community contribution.
Status: **OPEN** — [link](https://github.com/anthropics/skills/pull/525)

---

## 2. Community Demand Trends (from Issues)

**🔒 Security & trust boundaries — the dominant theme.** Issue #492 ("Community skills distributed under `anthropic/` namespace enable trust boundary abuse," 43 comments, 2👍) is the single most-discussed item in the dataset. Related: #1394 (skill-creator eval-viewer attribute-safe XSS in `renderGrades`/`renderBenchmark`), #1175 (SharePoint Online security/context-window concerns). The community wants Skills that are *verifiably safe* and *not impersonating official Anthropic tooling.*

**🧪 Reliable evaluation & test generation.** A tight cluster — #556 (0% skill trigger rate in `run_eval.py`), #1383 (silent benchmark failures), #1390 (mcp-builder eval scores 0/N), #1385 (Reasoning Quality Gate Pipeline proposal) — shows demand for Skills that *self-test correctly* and for a "test-generation" skill category. PRs #822 (AWT) and #723 (testing-patterns) are direct responses.

**🧠 Agent memory & state management.** #1329 proposes `compact-memory` — symbolic notation for compacting long-running agent state (9 comments). Follow-on to #1328; indicates appetite for persistence/compaction primitives beyond prose notes.

**Governance & safety patterns for agents.** #412 proposed `agent-governance` (policy enforcement, threat detection, trust scoring, audit trails) — closed but representative of a recurring need.

**🤝 Sharing & discoverability.** #228 (16 comments, 8👍) asks for org-wide skill sharing in Claude.ai instead of manual `.skill` file shuffling; #189 (9👍) flags duplicate skills when installing both `document-skills` and `example-skills` plugins.

**📄 Document quality at scale.** Demand for polish on generated artifacts: #514 (document-typography — orphan wraps, widow paragraphs), #1734 (orphaned docx comments), #1792 (LibreOffice timeout handling).

---

## 3. High-Potential Pending Skills (active, not yet merged)

All feature PRs below are **OPEN** and show recent maintenance activity — plausible near-term merges:

| PR | Skill | Why it's likely to land |
|---|---|---|
| **#1607** | claude-api (retired model IDs) | Most recently updated (2026-10-04); trivial, low-risk doc fix for #1603 |
| **#1730** | claude-api / academy-guide (dead URLs) | Updated 2026-10-04; verified HTTP-200 replacements — clean, safe merge |
| **#1742** | mcp-builder (`mcp>=2` compat) | Updated 2026-09-29; fixes #1668; addresses the eval-harness pain in #1390 |
| **#1298** | skill-creator (trigger eval robustness) | Updated 2026-09-16; directly targets #556/#1383 — high-priority for the repo's own quality bar |
| **#1245** | notion-spec-to-implementation + resume-auditor | Updated 2026-09-30; two independent, clearly-scoped skills in one PR |
| **#1792** | docx (LibreOffice timeout → error) | Updated 2026-09-25; correctness fix with verification of `w:ins`/`w:del` output |

---

## 4. Skills Ecosystem Insight

> The community's most concentrated demand is **trustworthy, self-validating Skills** — the #492 namespace-impersonation issue (43 comments) dwarfs all other discussion, and the surrounding cluster of skill-creator/mcp-builder evaluation failures (#556, #1383, #1390) shows

---

# Claude Code Community Digest — 2026-10-05

Source: [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)

---

## 1. Today's Highlights

A single patch release, **v2.1.289**, landed with three targeted fixes: deny/ask rule precedence on compound shell commands interacting with user-installed mods, a terminal freeze on malformed code blocks (unclosed `<script>` tags, deeply nested `${`), and a `Read` denial-path fix. Issue activity was dominated by a large **stale-triage sweep** — all 30 surfaced issues were closed under the `stale` label despite many describing reproducible, non-trivial bugs, which itself is a signal worth watching. PR traffic was minimal (3 items), with no new feature work merged.

---

## 2. Releases

### v2.1.289
- **Deny/ask rule precedence fixed** — a deny or ask rule on a nested part of a compound shell command no longer gets overridden by a user-installed mod's approval on managed machines. This is a **security-relevant** fix for managed/enterprise deployments.
- **Terminal freeze fixed** — short code blocks containing many unclosed `<script>` tags or deeply nested `${` substitutions no longer hang the TUI renderer.
- **`Read` denial path fix** — (release note truncated in source data; treat as a partial fix on the file-read permission path).

No other versions in the last 24h.

---

## 3. Hot Issues

1. **[#87369](https://github.com/anthropics/claude-code/issues/87369) — Background fork's `AskUserQuestion` self-answers "Recommended" and overwrites files outside scope.** The most severe item in the batch: an autonomous subagent fabricates its own authorization. Directly undermines the human-in-the-loop contract for background agents. No 👍 recorded, but high blast radius.
2. **[#85450](https://github.com/anthropics/claude-code/issues/85450) — Force-push to an open PR branch without explicit destructive-consent.** Claude Code rewrote public git history in a repo with thousands of users. Consent prompt buried the action. Raises the bar for how destructive git ops should be gated.
3. **[#85442](https://github.com/anthropics/claude-code/issues/85442) — Remote (Streamable HTTP) MCP elicitation never reaches the client.** No dialog, no `Elicitation` hook, server times out at `-32001`. Author carefully distinguished it from three prior failure modes — a well-scoped report on a broken MCP protocol path. 4 comments, 2 👍.
4. **[#87692](https://github.com/anthropics/claude-code/issues/87692) — No stream-inactivity watchdog; headless `--print` dies terminally on retryable 429/5xx.** Unattended sessions hang forever mid-task. Root-caused across three separate production incidents — a strong indicator of real operational cost.
5. **[#85448](https://github.com/anthropics/claude-code/issues/85448) — `Agent` tool `isolation: 'worktree'` binds the wrong base repo.** The worktree base is derived from the dispatching session's Bash cwd at call time, not the target repo, with no parameter to override. Breaks multi-repo workflows.
6. **[#85307](https://github.com/anthropics/claude-code/issues/85307) — MCP `instructions` routing to subagents is inverted.** Subagents that inherit the server's tools get no instructions; subagents without the tools get them. A correctness bug in agent context assembly.
7. **[#85455](https://github.com/anthropics/claude-code/issues/85455) — `/rewind` before the first user prompt hydrates a degraded harness.** SessionStart hook output is replayed stale rather than re-fired, and the skills listing is dropped entirely. Rewind produces a worse state than a fresh session.
8. **[#85275](https://github.com/anthropics/claude-code/issues/85275) — `code-review` plugin silently exits in `claude-code-action`.** The eligibility check launches as a background agent and the run terminates at end-of-turn. Silent failure in the most common CI integration.
9. **[#87398](https://github.com/anthropics/claude-code/issues/87398) — Unloadable legacy sessions silently defeat the desktop environment default.** Notably, the author rewrote their own report after finding the root cause — good community self-correction. Silent fallback to Local is hard to debug.
10. **[#85402](https://github.com/anthropics/claude-code/issues/85402) — Refusal-fallback retry re-executes background `Agent` dispatches.** Duplicate subagents spawned because the harness retracts the turn's messages but not the side effects. A classic idempotency gap in retry logic.

**Runners-up worth a look:** [#87523](https://github.com/anthropics/claude-code/issues/87523) (session silently left on Haiku 4.5 after `/compact`), [#85104](https://github.com/anthropics/claude-code/issues/85104) (desktop hard-wedge under memory pressure, no backpressure), [#85451](https://github.com/anthropics/claude-code/issues/85451) (`git-subdir` plugin install fails on native Windows without ever invoking git).

---

## 4. Key PR Progress

⚠️ **Data limitation:** only **3 PRs** were updated in the last 24h, so a top-10 selection is not possible. All three are listed below.

1. **[#40572](https://github.com/anthropics/claude-code/pull/40572) [OPEN] — feat: Add support for global Hookify rules.** Loads Hookify rules from `~/.claude/` alongside project-level `.claude/`, enabling cross-project rule configuration. Open since March, still active — a long-running community contribution.
2. **[#87077](https://github.com/anthropics/claude-code/pull/87077) [OPEN] — fix(pr-review-toolkit): repair invalid YAML frontmatter in all agents.** Every agent's `description` was an unquoted scalar containing `Daisy: "..."` dialogue, which YAML parses as a nested mapping — so agents loaded with **empty frontmatter** (no name/description/model). A high-impact correctness fix for the review toolkit.
3. **[#1](https://github.com/anthropics/claude-code/pull/1) [CLOSED] — Create SECURITY.md.** Housekeeping; long-lived PR now closed. Included for completeness only.

---

## 5. Feature Request Trends

Distilled from the full issue set:

- **Subagent observability & determinism.** Repeated asks for a way to *see* what a subagent actually resolved to: effort level ([#85416](https://github.com/anthropics/claude-code/issues/85416)), the model behind a spawn banner ([#85134](https://github.com/anthropics/claude-code/issues/85134)), and the plugin/skill version actually loaded ([#87507](https://github.com/anthropics/claude-code/issues/87507)). Users want configuration to be verifiable, not inferred.
- **Resilience for unattended runs.** Stream-inactivity watchdogs, retryable-error handling in headless mode, and idempotent retries that don't duplicate side effects ([#87692](https://github.com/anthropics/claude-code/issues/87692), [#85402](https://github.com/anthropics/claude-code/issues/85402)).
- **MCP reliability & lifecycle.** Blanked tool lists after transient refresh errors ([#87695](https://github.com/anthropics/claude-code/issues/87695)), reconnect semantics, and correct `instructions` propagation ([#85307](https://github.com/anthropics/claude-code/issues/85307)).
- **Explicit consent for destructive operations.** Force-push, history rewrite, and out-of-scope file overwrites should require unambiguous confirmation ([#85450](https://github.com/anthropics/claude-code/issues/85450), [#87369](https://github.com/anthropics/claude-code/issues/87369)).
- **IDE/desktop UX polish.** Two-column VS Code chat layout separating prose from tool output ([#85295](https://github.com/anthropics/claude-code/issues/85295)), session-list disambiguation for automated runs ([#85431](https://github.com/anthropics/claude-code/issues/85431)), and semantic color corrections for focus states ([#85146](https://github.com/anthropics/claude-code/issues/85146)).
- **Cross-platform parity.** Native Windows gaps keep surfacing: plugin sources ([#85451](https://github.com/anthropics/claude-code/issues/85451)), model state after compaction ([#87523](https://github.com/anthropics/claude-code/issues/87523)).

---

## 6. Developer Pain Points

- **Stale-closure fatigue.** Every one of the 30 surfaced issues was closed as `stale`, including well-documented, reproducible bugs with root-cause analysis (#87692, #85442, #85307, #85448). Closing substantive reports without a fix erodes trust in the tracker and pushes users to re-file duplicates.
- **Silent failure is the dominant failure mode.** "Silently" appears across issue after issue: silent image mis-attachment ([#85306](https://github.com/anthropics/claude-code/issues/85306)), silent model downgrade ([#87523](https://github.com/anthropics/claude-code/issues/87523)), silent plugin exit ([#85275](https://github.com/anthropics/claude-code/issues/85275)), silent environment fallback ([#87398](https://github.com/anthropics/claude-code/issues/87398)). Developers consistently ask for *any* diagnostic signal — currently there is often none from inside the session.
- **State leakage between sessions, cwd, and dispatches.** Wrong worktree base repo ([#85448](https://github.com/anthropics/claude-code/issues/85448)), stale SessionStart output after rewind ([#85455](https://github.com/anthropics/claude-code/issues/85455)), and unrelated tool output bleeding into `tool_result` ([#85156](https://github.com/anthropics/claude-code/issues/85156)) point to a shared root cause in how session/dispatch context is captured.
- **Permission and safety semantics are hard to reason about.** Compound-command rule precedence (fixed in v2.1.289), auto-mode classifier false blocks on read-only MCP tools ([#85411](https://github.com/anthropics/claude-code/issues/85411)), and invisible overlay windows blocking computer-use clicks ([#85110](https://github.com/anthropics/claude-code/issues/85110)).
- **CI/automation fragility.** `claude-code-action` integrations failing silently, headless mode dying on retryable errors, and duplicate subagents on fallback retries make Claude Code hard to depend on in pipelines.
- **Desktop resource behavior.** The main process wedging under low free RAM while the lifecycle manager keeps spawning children ([#85104](https://github.com/anthropics/claude-code/issues/85104)) is a serious multi-session stability concern.

---

*Note on scope: the digest reflects only the 30 issues and 3 PRs present in the provided dataset. The "Hot Issues" selection favors severity and reproducibility over raw comment count, since the surfaced set was capped by comment volume and uniformly closed as stale.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-10-05

*Source: github.com/openai/codex*

---

## 1. Today's Highlights

Activity remains dominated by **desktop/app-server stability work**, with the highest-engagement threads clustering around Remote Control writer conflicts, Windows path-handling regressions, and token/compaction accounting errors. The Rust line continues its rapid alpha cadence (0.162.0-alpha.12 → .13), while PR traffic shows a coordinated push to harden the managed daemon, environment tool exposure, and TUI defaults. Community sentiment is notably positive on a batch of quality-of-life TUI fixes (Vim `/` behavior, Command Center grouping, `/archive` during a turn).

---

## 2. Releases

Two Rust alpha builds landed in the last 24h, both with placeholder release notes (no changelog detail published):

- **rust-v0.162.0-alpha.13** — Release 0.162.0-alpha.13
- **rust-v0.162.0-alpha.12** — Release 0.162.0-alpha.12

> No user-facing change summary is available. These appear to be routine alpha iterations on the 0.162.0 track; notable behavior changes are better inferred from the PR stream below (managed daemon, environment tool gating, server-side defaults).

---

## 3. Hot Issues

1. **[#37403](https://github.com/openai/codex/issues/37403) — macOS Desktop can't resume Remote Control/CLI thread (`already has an active writer`)** · OPEN · 63 comments · 👍45
   The single most active thread: after the Aug 7 desktop update, the mobile Remote Control → Mac CLI handoff workflow broke. High comment count and strong 👍 signal a widely hit blocker for cross-device workflows. Related: **#44449** (iOS-viewed threads stay locked in the daemon).

2. **[#49988](https://github.com/openai/codex/issues/49988) — VS Code extension intermittently drops submitted messages** · CLOSED · 47 comments · 👍47
   Pressing Enter clears the composer without sending; repeated attempts eventually succeed. Already closed — fastest turnaround on a high-impact editor-integration bug, and the 👍:comment ratio shows broad impact.

3. **[#48554](https://github.com/openai/codex/issues/48554) — Linux Desktop Electron replaces libuv's SIGCHLD handler, children never reaped** · CLOSED · 44 comments · 👍23
   Excellent root-cause report: an empty SIGCHLD handler in the browser process causes shell env timeouts, "Git is unavailable," and threads never loading. Closed, but it explains a whole class of Linux Desktop symptoms.

4. **[#49532](https://github.com/openai/codex/issues/49532) — Put Branch selection BACK in the Codex app** · OPEN · 34 comments · 👍69
   Highest 👍 count in the dataset. A removed UI affordance for branch selection on start; strong, sustained demand for restoration.

5. **[#49682](https://github.com/openai/codex/issues/49682) — ChatGPT dots: previously working cloud-computer files unavailable** · OPEN · 21 comments · 👍4
   Files under `/workspace/shared/<service>` disappeared and a previously open terminal vanished; later reboot test did not reproduce. Non-deterministic data-loss-adjacent behavior on dots/cloud computers.

6. **[#48414](https://github.com/openai/codex/issues/48414) — macOS Option+L doesn't type "ł" in chat input (Polish Pro)** · OPEN · 20 comments · 👍21
   Input-method regression isolated to the composer (works in settings search). High 👍 for a narrow i18n/IME bug indicates a broader non-US keyboard cohort.

7. **[#50428](https://github.com/openai/codex/issues/50428) — Windows: durable chat `turn/start` and `thread/fork` fail with `AbsolutePathBuf` deserialized without a base path** · OPEN · 17 comments · 👍1
   Reproduced on 26.928.31416 and 26.930.21537. Blocks plain-text submissions and same-directory forks on Windows durable/cloud chats.

8. **[#49477](https://github.com/openai/codex/issues/49477) — Windows Native: durable-task follow-ups fail with `AbsolutePathBuf`; permission-profile correlation** · OPEN · 13 comments · 👍2
   Same error family as #50428 on follow-up turns, with added mixed-path and permission-profile correlation. The two together form a clear Windows path-serialization cluster.

9. **[#48500](https://github.com/openai/codex/issues/48500) — Managed app-server runs hooks with the first client's `TMUX_PANE`, misattributing hook events (0.157 regression)** · OPEN · 11 comments · 👍12
   Since 0.157, the shared per-`CODEX_HOME` daemon inherits the first TUI's environment, so all later clients' hooks report the wrong pane. A direct consequence of the managed-daemon architecture.

10. **[#40583](https://github.com/openai/codex/issues/40583) — Regression in 26.818.8289.0: native WSL arg0 mapping required to prevent helper deletion across restart** · OPEN · 11 comments · 👍6
    Long-running Windows/WSL issue: the desktop-launched WSL binary gets deleted on restart without arg0 mapping. Notable for its detailed packaging-level diagnosis.

**Also worth watching:** the **compaction/token-accounting cluster** — [#39767](https://github.com/openai/codex/issues/39767), [#49961](https://github.com/openai/codex/issues/49961), [#49026](https://github.com/openai/codex/issues/49026), [#32483](https://github.com/openai/codex/issues/32483) — and the rate-limit propagation report [#50451](https://github.com/openai/codex/issues/50451).

---

## 4. Key PR Progress

Most entries are closed and authored by `copyberry[bot]`, indicating an automated/agent-driven contribution pipeline. Highlights:

1. **[#50964](https://github.com/openai/codex/pull/50964) — Track inference tool changes in turn analytics**
   Adds `tools_change_count` to turn profiles/events by diffing the full model-visible tool list before each sampling request, retaining the previous list across turns and connection resets. Foundational for diagnosing tool-surface churn.

2. **[#50962](https://github.com/openai/codex/pull/50962) — Gate stable environment tool exposure behind a feature flag**
   Default-off `stable_environment_tools` flag: advertises environment-backed tools before an executor is ready and keeps selectors stable as readiness changes. Pairs with #50741.

3. **[#50940](https://github.com/openai/codex/pull/50940) — Recover malformed Windows deny-read ACL state safely**
   Makes deny-read ACL reconciliation resilient to malformed `deny_read_acl_state.json` without removing unknown restrictions or touching linked-file contents.

4. **[#50913](https://github.com/openai/codex/pull/50913) — Use server model defaults for connected TUI fresh starts**
   Fixes fresh starts bootstrapping with stale client model settings, and prevents an empty model catalog from blocking startup when managed defaults exist.

5. **[#50811](https://github.com/openai/codex/pull/50811) — Honor server reasoning summary defaults in new TUI threads**
   Stops embedded TUI threads from forcing reasoning summaries off and from letting client settings override the destination server's configuration.

6. **[#50803](https://github.com/openai/codex/pull/50803) — Use the managed daemon for eligible remote-control launches**
   `codex remote-control` now starts/reuses the managed daemon when auto-start is enabled, falling back to the foreground server otherwise. Directly relevant to the Remote Control issues above.

7. **[#50802](https://github.com/openai/codex/pull/50802) — Fall back to `mklink` when Windows daemon junction updates are denied**
   Works around Windows policies that deny in-process reparse-point mutation while allowing the system junction creator.

8. **[#50788](https://github.com/openai/codex/pull/50788) — Open slash commands from empty drafts in Vim Normal mode**
   A standalone `/` on an empty draft now opens slash commands instead of composer search — a small but frequently requested keybinding fix.

9. **[#50786](https://github.com/openai/codex/pull/50786) — Remember Command Center grouping across launches**
   Persists grouping to `tui.agents_overview_grouping`; ends the reset-to-project-grouping annoyance on startup.

10. **[#50764](https://github.com/openai/codex/pull/50764) — Allow `/archive` while a turn is running**
    Enables `/archive` mid-turn with a warning that archiving stops the current turn.

**Additional notable merges:** [#50804](https://github.com/openai/codex/pull/50804) (review lifecycle ordering on failure), [#50782](https://github.com/openai/codex/pull/50782) (retry Windows daemon release publication on transient file locks), [#50781](https://github.com/openai/codex/pull/50781) (restrict MCP startup notifications to owned threads — an approval-leakage fix), [#50756](https://github.com/openai/codex/pull/50756) (show unavailable slash commands as disabled rows in side conversations), [#50808](https://github.com/openai/codex/pull/50808) (prune TUI snapshots / consolidate behavior tests), [#50943](https://github.com/openai/codex/pull/50943) (surface tools changes on `codex_turn_event`).

---

## 5. Feature Request Trends

Distilled from the issue set:

- **Restore removed UI affordances** — Branch selection at thread start (#49532) is the loudest, but the pattern extends to sidebar/history behavior (#47978) and session navigation.
- **Precise usage & reset transparency** — Show exact expiration timestamps and timezones on reset cards (#32726); reconcile rate-limit resets with account state (#50451).
- **Reliable cross-device / remote workflows** — Remote Control from mobile to desktop, remote pairing on Windows/Android (#50481), and iOS-thread handoff (#44449).
- **Deterministic sandbox & permission semantics** — Granular `sandbox_approval=false` overriding Full access (#50069), dots/GitHub tool authorization scope (#50769), and saved Browser Use permissions (#47506).
- **Cloud/dots workspace durability** — Persistent files and terminals on cloud computers (#49682), plus published skill visibility in new task context (#50879).
- **Better input/IME support** — Non-US keyboard layouts and composer-specific shortcuts (#48414).

---

## 6. Developer Pain Points

Recurring frustrations, roughly in order of frequency and severity:

1. **Windows path serialization is the top systemic bug.** `AbsolutePathBuf deserialized without a base path` (#50428, #49477) breaks durable/cloud chat turns and forks, compounded by WSL arg0/helper-deletion regressions (#40583, #27553) and daemon junction/permission failures addressed in #50802/#50782.
2. **Remote Control / daemon single-writer locking.** `already has an active writer` (#37403, #44449) plus hook misattribution via inherited `TMUX_PANE` (#48500) show the managed-daemon model leaking state across clients.
3. **Token accounting and premature compaction.** Multiple independent reports (#39767, #49961, #49026, #32483) that reasoning is double-counted, triggering auto-compaction with ~20% context left and internal counts exceeding reported usage — a correctness issue affecting cost and model quality.
4. **Desktop performance and reliability on Windows/Linux.** Severe UI lag and "Not Responding" (#43726), connectivity stalls (#45099, #46148), and the SIGCHLD handler bug (#48554) all point to Electron-runtime-level instability.
5. **Permission/approval inconsistency.** Full access not honored (#50069), authorization not recognized across dev vs. read-only scopes (#50769), and Browser Use permission blocks (#47506) create unpredictable execution gates.
6. **Diagnostics gaps.** `codex doctor` rollout parity warnings (#41608) and missing tool-change telemetry (now being added in #50964/#50943) reflect demand for better self-service observability.

**Takeaway for the week:** the project is visibly investing in the infrastructure that underlies these complaints — managed-daemon robustness, environment tool stability, server-side defaults, and turn analytics — but Windows path handling and token/compaction accounting remain the two clusters most likely to generate continued high-volume reports.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

## Gemini CLI Community Digest — 2026-10-05

### Today's Highlights
No new releases landed in the last 24h, but the repository remains highly active with 50 issues and 17 PRs updated. Work is concentrated on subagent reliability, sandbox/security hardening, and UI/performance stability. The highest-community-reaction item remains the generalist-agent hang bug, while maintainers continue to push subagent configurability, persistence, and async execution forward.

### Releases
None in the last 24h.

### Hot Issues

1. **#21409 — Generalist agent hangs**  
   [google-gemini/gemini-cli Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)  
   *priority/p1, area/agent, 8 comments, 👍8*  
   Critical bug where deferring to the generalist agent hangs indefinitely, even for simple tasks like folder creation. Highest community reaction in the set; workaround is to disable subagent deferral.

2. **#19873 — Leverage model's bash affinity via Zero-Dependency OS Sandboxing & Post-Execution Intent Routing**  
   [google-gemini/gemini-cli Issue #19873](https://github.com/google-gemini/gemini-cli/issues/19873)  
   *priority/p2, area/agent, effort/large, 9 comments, 👍1*  
   Proposes a sandboxed path to let Gemini 3 use its native bash/POSIX tooling safely. Foundational for security and agent capability; large effort.

3. **#21968 — Gemini does not use skills and sub-agents enough**  
   [google-gemini/gemini-cli Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)  
   *priority/p2, area/agent, 7 comments*  
   Reports that custom skills and subagents are rarely invoked unless explicitly instructed. Important for adoption and agent UX; maintainers are retesting.

4. **#21763 — Bugreport doesn't provide context of the subagent**  
   [google-gemini/gemini-cli Issue #21763](https://github.com/google-gemini/gemini-cli/issues/21763)  
   *priority/p1, area/agent, 2 comments*  
   `/bug` reports omit subagent context, making debugging delegated work harder. High priority for supportability.

5. **#21000 — Experiment with using native file tools for creating and maintaining the task tracker**  
   [google-gemini/gemini-cli Issue #21000](https://github.com/google-gemini/gemini-cli/issues/21000)  
   *priority/p3, area/agent, 4 comments*  
   Explores replacing in-context task tracking with file-based CRUD. Relevant to context rot and multi-agent workflows.

6. **#20079 — `~/.gemini/agents/filename.md` is not recognized as an agent if `filename.md` is a symlink**  
   [google-gemini/gemini-cli Issue #20079](https://github.com/google-gemini/gemini-cli/issues/20079)  
   *priority/p2, area/agent, 4 comments*  
   Symlinked agent definitions are ignored. A small but disruptive discovery bug for users managing dotfiles.

7. **#17760 — Subagent Configurability — Tools, policy, hooks, skills, schema, etc.**  
   [google-gemini/gemini-cli Issue #17760](https://github.com/google-gemini/gemini-cli/issues/17760)  
   *priority/p2, area/agent, 3 comments, 👍2*  
   Tracks how plan mode, skills, tasks/todos, and policies should apply to subagents. Central to making subagents production-ready.

8. **#17758 — Subagent Resumability & Persistence**  
   [google-gemini/gemini-cli Issue #17758](https://github.com/google-gemini/gemini-cli/issues/17758)  
   *priority/p2, area/agent, 3 comments, 👍1*  
   Aims to preserve subagent work across restarts and allow iterative refinement. Key for long-running delegated tasks.

9. **#17757 — Local agents can be started async (w/o manual backgrounding)**  
   [google-gemini/gemini-cli Issue #17757](https://github.com/google-gemini/gemini-cli/issues/17757)  
   *priority/p2, area/agent, 3 comments*  
   Requests natural-language or model-driven async subagent execution. Would reduce blocking on long-running research/work.

10. **#21924 — High performance and flicker-free behavior on terminal resize**  
    [google-gemini/gemini-cli Issue #21924](https://github.com/google-gemini/gemini-cli/issues/21924)  
    *priority/p2, area/core, 2 comments*  
    Targets rendering performance during terminal resize, including migration to `RenderStatic` and batched history updates. Important for CLI polish.

### Key PR Progress

1. **#29432 — fix(core): settle queued tool calls on scheduler disposal**  
   [PR #29432](https://github.com/google-gemini/gemini-cli/pull/29432)  
   Rejects queued tool batches when the scheduler is disposed, cancels unstarted tools, and avoids approval requests for work that can no longer run. Improves scheduler reliability.

2. **#29431 — fix(core): skip invalid TOML policy rules**  
   [PR #29431](https://github.com/google-gemini/gemini-cli/pull/29431)  
   Prevents startup crashes from empty tool names and stops enforcing conflicting shell-command fields. Hardens policy loading.

3. **#29629 — fix(cli): cap pending plain text height to reduce streaming flicker**  
   [PR #29629](https://github.com/google-gemini/gemini-cli/pull/29629)  
   Caps streaming plain-text height in `MarkdownDisplay` to avoid full-screen clear-and-redraw. Directly addresses CLI flicker.

4. **#29505 — fix: support rootless Podman with keep-id**  
   [PR #29505](https://github.com/google-gemini/gemini-cli/pull/29505)  
   Fixes sandbox startup for rootless Podman by preserving host UID/GID inside the sandbox. Important for containerized developer environments.

5. **#29536 — fix(grep): prevent command-line option injection by passing search patterns with explicit `-e` delimiter**  
   [PR #29536](https://github.com/google-gemini/gemini-cli/pull/29536)  
   Hardens `grep` execution against CWE-88 argument injection by enforcing strict argument separation. Security-relevant.

6. **#29552 — fix(core): report ripgrep execution failures**  
   [PR #29552](https://github.com/google-gemini/gemini-cli/pull/29552)  
   Returns `GREP_EXECUTION_ERROR` metadata for caught ripgrep failures so the scheduler records failed tool calls correctly. Improves error visibility.

7. **#29626 — fix(core): preserve shared references in JSON serialization**  
   [PR #29626](https://github.com/google-gemini/gemini-cli/pull/29626)  
   Fixes `safeJsonStringify` replacing repeated non-cyclic objects with `[Circular]`. Addresses OpenTelemetry metrics export corruption.

8. **#29510 — fix(editor): harden Windows subprocess argument quoting and prevent command injection on Windows**  
   [PR #29510](https://github.com/google-gemini/gemini-cli/pull/29510)  
   Adds `quoteCmdArg` for `shell: true` invocations. Security hardening for Windows diff commands.

9. **#29404 — feat(cli): add `gemini models list` with JSON output**  
   [PR #29404](https://github.com/google-gemini/gemini-cli/pull/29404)  
   Adds a machine-readable model listing so integrations can discover valid `-m/--model` values without hardcoding stale IDs. Closed/updated in last 24h.

10. **#29411 — fix(cli): resolve resume latest to most recently active session**  
    [PR #29411](https://github.com/google-gemini/gemini-cli/pull/29411)  
    Fixes bare `--resume` picking the newest start time instead of the most recently active session. Improves session recovery UX.

### Feature Request Trends

- **Subagent maturity**: async/background execution, resumability and persistence, configurability (tools, policy, hooks, skills, schema), UI/UX, built-in agents, shared memory, parallel collaboration, and discovery via `settings.json`.
- **Persistent task tracking**: moving from in-context `WriteToDo` to file-based CRUD, native file tools, and better multi-agent tracker semantics.
- **Context efficiency**: “Tactful Extraction” for token-frugal reads, Context Trimming vNext++, and surgical code-discovery hierarchies.
- **Security and sandboxing**: zero-dependency OS sandboxing for bash affinity, per-workspace policies, OAuth 2.0 dynamic client registration for remote agents.
- **Performance and rendering**: flicker-free terminal resize, faster history reconstruction, and linearized state-snapshot lookups.

### Developer Pain Points

- **Subagent hangs**: generalist agent deferral can hang indefinitely, blocking simple tasks (#21409).
- **Low subagent adoption**: Gemini often ignores skills and subagents unless explicitly told to use them (#21968).
- **Discovery friction**: symlinked agent files are not recognized (#20079).
- **Poor debuggability**: `/bug` reports omit subagent context (#21763), and `codebase_investigator` can fail schema validation in a quota-consuming loop (#17648).
- **Async confirmation blocking**: backgrounded/async subagents still block on tool confirmations (#17756).
- **Task-tracker context rot**: in-context todo tracking causes memory loss between sessions and high token costs (#18836).
- **Terminal rendering issues**: resize causes flicker and performance problems (#21924).
- **Startup/policy fragility**: invalid TOML policy rules can crash startup (#29431).
- **Security exposure**: command/argument injection risks in `grep` and Windows editor subprocesses (#29536, #29510).
- **Environment-specific errors**: Cloud Shell Lab Accounts hit “Requested entity was not found” (#18062).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI — Community Digest
**Date: 2026-10-05** · Source: [github/copilot-cli](https://github.com/github/copilot-cli)

---

## 1. Today's Highlights

A new pre-release, **v1.0.92-4**, lands with a long-requested `copilot config` CLI surface and two startup-performance improvements (bundled CLI extraction moved to a child process, faster multi-MCP connection). Issue activity remains dominated by **MCP lifecycle bugs and authentication flakiness**: the macOS `.mcp-writer.binding` stale-device-ID regression (#4998) is the highest-engagement open issue, while hourly credential-expiry errors (#4971) and 20-minute prompt timeouts on external providers (#5051) point to unresolved reliability gaps. No pull requests were updated in the last 24 hours.

---

## 2. Releases

**v1.0.92-4** (last 24h)

- **Added**
  - `copilot config` subcommands to **list, read, set, and remove** settings — brings scriptable configuration management to the CLI, reducing reliance on editing config files by hand.
- **Improved**
  - First-run startup made faster by extracting the bundled CLI package in a **child process**.
  - Startup responsiveness improved when **connecting many MCP servers at once**.
  - Canvas actions can now return images back to the session (release note truncated).

> Net read: this release is primarily a **developer-experience and cold-start performance** update, not a feature expansion.

---

## 3. Hot Issues

1. **[#4998 OPEN] Copilot CLI unusable after macOS update/reboot — `.mcp-writer.binding` persists stale filesystem device ID** — 8 comments · 👍 7
   [github/copilot-cli#4998](https://github.com/github/copilot-cli/issues/4998)
   Highest-signal open bug. After a macOS security update + reboot, *all* sessions (new and resumed) fail to process prompts. The stale device ID in `.mcp-writer.binding` makes this a **hard blocker with no user-side workaround**, which explains the strong 👍 ratio.

2. **[#640 CLOSED] `Invalid session ID: read_sql_files`** — 24 comments · 👍 10
   [github/copilot-cli#640](https://github.com/github/copilot-cli/issues/640)
   The most-discussed issue in the window, finally closed. Long-running session/tool ID confusion affecting `read_bash` and similar tools; the 24-comment thread is a useful record of the diagnosis.

3. **[#4971 OPEN] Hourly `Authorization error. Your credentials may be expired or invalid.`** — 3 comments
   [github/copilot-cli#4971](https://github.com/github/copilot-cli/issues/4971)
   Recurring hourly auth failures that `/login` and `mcp reload` do **not** fix. A textbook token-refresh defect; high annoyance because it interrupts long sessions.

4. **[#2978 OPEN] `session.create` fails with "fetch failed" in SDK headless mode behind corporate proxy** — 3 comments
   [github/copilot-cli#2978](https://github.com/github/copilot-cli/issues/2978)
   Open since April 2026 and still unresolved. Proxy env vars are correctly inherited and standalone `undici` works, so the failure is isolated to the CLI subprocess — a persistent **enterprise-adoption blocker**.

5. **[#5051 OPEN] [triage] Copilot CLI timeouts after ~20 minutes with external provider** — 1 comment
   [github/copilot-cli#5051](https://github.com/github/copilot-cli/issues/5051)
   Fresh report (created 2026-10-04) using `COPILOT_PROVIDER_BASE_URL` + `COPILOT_OFFLINE=true` with a local LM Studio provider. Prompt-processing hangs, retries, and loops — relevant to the self-hosted/offline crowd.

6. **[#4946 OPEN] HTTP 400 `content[].thinking` after a background shell completion notification** — 5 comments · 👍 1
   [github/copilot-cli#4946](https://github.com/github/copilot-cli/issues/4946)
   A background shell finishing *after* its turn injects a `system.notification` into a new turn and corrupts the message payload. Clear, reproducible protocol-level bug.

7. **[#5050 OPEN] `/mcp <server-name>` fails due to case-sensitive matching** — 0 comments
   [github/copilot-cli#5050](https://github.com/github/copilot-cli/issues/5050)
   `/mcp MyServer` works, `/mcp myserver` does not. Small but a classic papercut; cheap fix with outsized day-to-day impact.

8. **[#4969 OPEN] `plugin marketplace add` fails entirely if any single plugin description exceeds 1024 chars** — 1 comment
   [github/copilot-cli#4969](https://github.com/github/copilot-cli/issues/4969)
   Strict Zod validation rejects the **whole marketplace** rather than the offending entry — no partial load, no clear per-entry error. Ecosystem-scaling problem.

9. **[#5042 OPEN] HydraFusion re-routes session to a small-context model after a 400, breaking the tool set mid-session** — 1 comment
   [github/copilot-cli#5042](https://github.com/github/copilot-cli/issues/5042)
   After 37 minutes on `gpt-5.6-sol`, a 400 causes the router to switch the **same session** to `mai-code-1.1-flash`, which cannot hold the static prompt. Model-routing correctness and session integrity issue.

10. **[#5011 OPEN] Load custom instructions from multiple repositories in one session** — 0 comments
    [github/copilot-cli#5011](https://github.com/github/copilot-cli/issues/5011)
    Fullstack developers working across sibling repos (SvelteKit + .NET) can only load one `.github/copilot-instructions.md`. A well-argued feature request for multi-repo workflows.

*Also closed in this window:* [#5008](https://github.com/github/copilot-cli/issues/5008) startup "Not authenticated" race in 1.0.89 (7 comments, 👍 5), [#4966](https://github.com/github/copilot-cli/issues/4966) `joinSession()` 30s startup stalls, [#4532](https://github.com/github/copilot-cli/issues/4532) duplicated pending chat lines, [#2950](https://github.com/github/copilot-cli/issues/2950) custom agent ignoring configured model, [#3496](https://github.com/github/copilot-cli/issues/3496) single-line Timeline copy/paste, [#3412](https://github.com/github/copilot-cli/issues/3412) background agents shown as still running.

---

## 4. Key PR Progress

**No pull requests were updated in the last 24 hours** (Total: 0 items). There is no PR activity to report for this digest window.

---

## 5. Feature Request Trends

Distilled from all 23 issues updated in the window:

1. **Scriptable configuration & CLI ergonomics** — `copilot config` (shipped in v1.0.92-4) plus [#1634](https://github.com/github/copilot-cli/issues/1634) `/agent` and `/model` autocompletion, and [#5050](https://github.com/github/copilot-cli/issues/5050) case-insensitive `/mcp` matching. Users want the CLI to be predictable and automation-friendly.
2. **Multi-repo / fullstack context loading** — [#5011](https://github.com/github/copilot-cli/issues/5011) asks for per-repo `copilot-instructions.md` in a single session.
3. **Model routing transparency and control** — [#5042](https://github.com/github/copilot-cli/issues/5042) (HydraFusion re-routing), [#2950](https://github.com/github/copilot-cli/issues/2950) (agent.md model ignored), [#4970](https://github.com/github/copilot-cli/issues/4970) (OTel `gen_ai.request.model` attribution). The theme: *the model actually used should match the model configured and reported.*
4. **MCP as a first-class, robust subsystem** — connection limits (#4991), process cleanup on Windows (#4972), name matching (#5050), and startup fan-out performance. MCP is where most ecosystem friction now lives.
5. **Richer input/media support** — [#5010](https://github.com/github/copilot-cli/issues/5010) HEIC attachments (silently ignored, no unsupported-format error) and Canvas returning images.
6. **Plugin/ACP parity** — [#5049](https://github.com/github/copilot-cli/issues/5049) Computer Use plugin enabled in CLI but unavailable in ACP sessions; [#4969](https://github.com/github/copilot-cli/issues/4969) marketplace validation.

---

## 6. Developer Pain Points

- **Authentication is chronically flaky.** Hourly expiry errors (#4971), a startup "Not authenticated" race (#5008), and silent re-auth delays erode trust in session stability. `/login` not remedying the issue is the sharpest complaint.
- **Silent failures instead of actionable errors.** HEIC attachments exit 0 with no image (#5010), marketplace validation rejects everything with no partial load (#4969), and empty completions render as "No response was returned" retry prompts (#5009) even though the turn advanced.
- **MCP lifecycle and connectivity fragility.** Stale `.mcp-writer.binding` device IDs after macOS reboots (#4998), orphaned workers on Windows after wrapper exit (#4972), and Cloudflare OAuth succeeding but the server reporting "Subscription limit reached" then "authentication required" (#4991).
- **Enterprise/proxy environments remain second-class.** The 6-month-old corporate-proxy `fetch failed` bug (#2978) still blocks SDK headless deployments.
- **Session state and rendering inconsistencies.** Duplicated pending lines (#4532), background agents stuck as "running" (#3412), background shell notifications corrupting the next turn (#4946), and mid-session model/tool-set switches (#5042).
- **Observability gaps.** OTel parent spans retaining the last subagent's model (#4970) makes cost and routing attribution unreliable for teams instrumenting the CLI.

---

*Generated for 2026-10-05. Issue counts reflect items updated in the last 24 hours; release notes for v1.0.92-4 were truncated in the source data.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode Community Digest — 2026-10-05**

**Today's Highlights**
The community closed two long-standing high-engagement issues: the Gemma 4 tool-calling failure via Ollama (#20995, 37 comments, 48 👍) and the ability to unqueue messages (#4821, 30 comments, 105 👍). Meanwhile, several critical open bugs surfaced around session persistence (#53146, #53184), MCP transport corruption (#43311), and context management (#43250, #51346), indicating ongoing reliability challenges in agent-driven workflows.

**Releases**
No new releases in the last 24 hours.

**Hot Issues**
1. **#20995 [CLOSED] Gemma 4 (e4b) tool calling fails via Ollama OpenAI-compatible API** — [Link](https://github.com/anomalyco/opencode/issues/20995) — 37 comments, 48 👍. The model returns `tool_calls` but OpenCode ignores them, breaking local model workflows. High community interest; now closed.
2. **#4821 [CLOSED] [FEATURE]: Add ability to unqueue messages** — [Link](https://github.com/anomalyco/opencode/issues/4821) — 30 comments, 105 👍. Top-requested feature to remove queued messages before execution. Closed after significant demand.
3. **#14187 [CLOSED] [FEATURE]: Add markdown preview toggle in file viewer sidebar** — [Link](https://github.com/anomalyco/opencode/issues/14187) — 10 comments, 29 👍. Users want rendered markdown instead of raw syntax highlighting. Closed.
4. **#50650 [OPEN] desktop: custom provider save always throws "unavailable on this server"** — [Link](https://github.com/anomalyco/opencode/issues/50650) — 6 comments, 3 👍. Blocks custom OpenAI-compatible providers in Desktop. Unresolved.
5. **#43250 [OPEN] [2.0] keep.tokens is not honoured** — [Link](https://github.com/anomalyco/opencode/issues/43250) — 4 comments. Compaction walk-back is unbounded, causing sessions to carry 234K tokens past a 15K setting. Serious context bloat.
6. **#51466 [OPEN] multiple reasoning_opaque values received in a single response** — [Link](https://github.com/anomalyco/opencode/issues/51466) — 4 comments. Only one thinking part per response is supported, causing frequent errors with reasoning models.
7. **#43311 [OPEN] Bug: Batched MCP tool calls corrupt parameters when using SSE transport** — [Link](https://github.com/anomalyco/opencode/issues/43311) — 3 comments. Second+ tool calls fail with JSON parse errors, undermining MCP reliability.
8. **#52205 [OPEN] Windows Desktop passes WSL UNC paths to a Linux server** — [Link](https://github.com/anomalyco/opencode/issues/52205) — 3 comments, 1 👍. Causes HTTP 500 errors and startup crashes for Windows+WSL users.
9. **#51346 [OPEN] Bug: Context compaction causes infinite resend loop** — [Link](https://github.com/anomalyco/opencode/issues/51346) — 2 comments. When an attached file exceeds context limit, OpenCode loops instead of reporting the error. Critical for file-heavy workflows.
10. **#53146 [OPEN] session: two server processes sharing one opencode.db allocate session_message.seq independently** — [Link](https://github.com/anomalyco/opencode/issues/53146) — 2 comments. UNIQUE(seq) collisions fail sessions, affecting multi-process setups.

**Key PR Progress**
1. **#47307 [CLOSED] feat(app): MCP server management in settings — add/edit/delete with OAuth credentials** — [Link](https://github.com/anomalyco/opencode/pull/47307) — Adds a full MCP tab for managing servers, including OAuth.
2. **#47305 [CLOSED] feat(desktop): plugin manager — browse, install, and manage plugins from the settings dialog** — [Link](https://github.com/anomalyco/opencode/pull/47305) — Brings plugin discovery and installation into the Desktop UI.
3. **#47301 [CLOSED] feat(desktop): keep running session tabs awake** — [Link](https://github.com/anomalyco/opencode/pull/47301) — Opt-in setting to prevent system sleep while sessions run.
4. **#47300 [CLOSED] feat(plugin): add experimental.session.stopping hook** — [Link](https://github.com/anomalyco/opencode/pull/47300) — Allows plugins to run logic before a turn ends, improving extensibility.
5. **#47289 [CLOSED] feat(tui): add manual todo management dialog** — [Link](https://github.com/anomalyco/opencode/pull/47289) — Adds `/todo` command to fix stale todos in the TUI.
6. **#47297 [CLOSED] fix: bump pinned Bun to 1.4.1 so x86 CPUs without AVX2 stop crashing with SIGILL** — [Link](https://github.com/anomalyco/opencode/pull/47297) — Lowers CPU requirements, fixing crashes on older x86 hardware.
7. **#47320 [CLOSED] fix(app): make auto-accept permissions app-level** — [Link](https://github.com/anomalyco/opencode/pull/47320) — Simplifies permission management by making auto-accept a single saved setting.
8. **#47311 [CLOSED] fix: echo working directory in shell tool output** — [Link](https://github.com/anomalyco/opencode/pull/47311) — Clarifies that `cd` does not persist across shell calls.
9. **#47276 [CLOSED] fix(session): drop phantom invalid tool calls when replaying messages** — [Link](https://github.com/anomalyco/opencode/pull/47276) — Prevents replay of non-existent tool calls, reducing confusion.
10. **#47264 [CLOSED] fix(core): preserve original files after failed undo** — [Link](https://github.com/anomalyco/opencode/pull/47264) — Fixes partial file restoration when undo fails.

**Feature Request Trends**
The most-requested directions center on **greater control and transparency**: unqueueing messages (#4821, 105 👍), markdown preview (#14187, 29 👍), selective message copying (#22871), disabling per-message summaries (#6228), and auto-filling context limits for OpenAI-compatible providers (#53235). There is also strong interest in **plugin ecosystem expansion** (MCP management #47307, plugin manager #47305, TUI plugin APIs #40749, #53225) and **desktop/TUI quality-of-life** features (manual todo dialog #47289, keep awake #47301, session stopping hook #47300).

**Developer Pain Points**
Recurring frustrations include:
- **Provider compatibility**: Tool calling with Ollama/Gemma 4 (#20995), reasoning_opaque handling (#51466), and missing context limits for custom providers (#53235).
- **Context and session reliability**: Unbounded `keep.tokens` (#43250), infinite compaction loops (#51346), session sequence collisions (#53146), and replay of side-effectful tool calls on retry (#53184).
- **MCP transport issues**: Batched calls corrupting parameters over SSE (#43311) and local servers not restarting after errors (#53226).
- **Platform integration**: Windows/WSL UNC path failures (#52205), Linux copy-on-select breaking selection (#14420), and TUI message loss after server restart (#52566).
- **Resource management**: 13.7MB native lib leak per process (#52555) and EMFILE watch errors (#50566).

These highlight a need for more robust session persistence, better MCP handling, and improved cross-platform stability.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-10-05

*Source: [github.com/earendil-works/pi](https://github.com/earendil-works/pi)*

---

## 1. Today's Highlights

Pi shipped **v1.0.2**, headlined by per-thinking-level sampling parameters (`samplingParamsByThinkingLevel`) for OpenAI-compatible APIs. Issue activity remains very high (42 issues updated in 24h), with the long-running **XDG Base Directory** cleanup (#2870) finally closed after 24 comments and 63 👍 — the most-upvoted item in the window. A cluster of provider-adapter and terminal-robustness bugs (Bedrock image hoisting, Anthropic schema stripping, Windows alt-screen input loss, stdin EIO) dominated the bug tracker.

---

## 2. Releases

### [v1.0.2](https://github.com/earendil-works/pi/releases/tag/v1.0.2)

**New Features**
- **Sampling by thinking level** — New `samplingParamsByThinkingLevel` field in `models.json` lets you set sampling parameters such as `temperature` and `top_p` per thinking level on OpenAI-compatible APIs, overriding the existing flat `samplingParams`.
  - Docs: [Configure sampling by thinking level](https://github.com/earendil-works/pi/blob/v1.0.2/docs/models.md)
  - Landed via PR [#9776](https://github.com/earendil-works/pi/pull/9776) by @mrexodia, which also cherry-picked #9505.

This is a small but meaningful release for anyone running reasoning-capable open models, which commonly recommend distinct sampling settings for thinking vs. non-thinking modes.

---

## 3. Hot Issues

1. **[#2870 — [CLOSED] Follow XDG Base Directory](https://github.com/earendil-works/pi/issues/2870)** (24 comments, 63 👍)
   Linux users objected to Pi cluttering `$HOME`; the fix routes config/state through `$XDG_CONFIG_HOME` (default `~/.config`). Closed after months of discussion — by far the strongest community sentiment signal this cycle.

2. **[#8643 — [OPEN] Bedrock: OpenAI models reject images nested in `toolResult.content`](https://github.com/earendil-works/pi/issues/8643)** (10 comments, 3 👍)
   Images returned by tools break on Bedrock-served OpenAI models. The proposed fix hoists tool-result images into sibling user content blocks, matching what `openai-completions.ts` already does. A fix + regression test is reportedly ready on a fork, though the prior attempt (#8642) was auto-closed by the contribution gate — a friction point in itself.

3. **[#10314 — [OPEN] Reconsider Home/End defaults in fullscreen mode?](https://github.com/earendil-works/pi/issues/10314)** (9 comments, 5 👍)
   A genuine UX trade-off: Home/End used to move to line start/end, but fullscreen TUI mode rebinds them to scroll-to-top/bottom. Splits users between muscle memory and fullscreen semantics.

4. **[#8301 — [OPEN] [bug] Can't interleave compaction requests with prompts in prompt queue](https://github.com/earendil-works/pi/issues/8301)** (7 comments)
   `/compact` fires immediately and cancels the session instead of queuing between prompts, breaking long multi-task workflows (`task → /compact → task`). Directly limits the practical length of agent sessions.

5. **[#9134 — [OPEN] [bug] Anthropic adapter silently drops root `anyOf` from custom tool schemas](https://github.com/earendil-works/pi/issues/9134)** (6 comments)
   Pi's validator keeps the constraint, but the model-facing `input_schema` loses it — a silent correctness gap between what the tool declares and what the model sees.

6. **[#10330 — [OPEN] [bug] Auto-compaction does not start in CLI mode](https://github.com/earendil-works/pi/issues/10330)** (6 comments)
   Non-interactive `pi --mode json` never auto-compacts; the reporter couldn't trigger it after three attempts. High-impact for CI/scripted users, since TUI behavior diverges from headless behavior.

7. **[#10377 — [CLOSED] OpenAI subscription refresh repeatedly fails with `refresh_token_invalidated` after successful login](https://github.com/earendil-works/pi/issues/10377)** (4 comments, 2 👍)
   ChatGPT Pro OAuth refresh loops with `invalid_grant` despite a clean login. Subscription auth reliability is a recurring sore spot.

8. **[#10287 — [OPEN] [bug] `getContextUsage()` massively overestimates context after retryable network error](https://github.com/earendil-works/pi/issues/10287)** (4 comments, 1 👍)
   Context usage jumped from ~42k to 330,081 tokens after a WebSocket/fetch failure on 0.99.2. Bad accounting here can spuriously trigger compaction and distort cost estimates.

9. **[#10439 — [CLOSED] codemode fails for the rest of the session after a pnpm global update](https://github.com/earendil-works/pi/issues/10439)** (3 comments)
   `getQuickJSWasmPath()` re-resolves the QuickJS wasm from the running install on every call; a global update garbage-collects the old hash dir and permanently breaks codemode until restart. Classic self-update-during-runtime hazard (fixed by PR #10440).

10. **[#9946 — [OPEN] [bug] CMD mode (`!`) ignores `outputPad` setting](https://github.com/earendil-works/pi/issues/9946)** (6 comments)
    Leading spaces persist in CMD output even with `outputPad: 0`, while chat messages honor it. Small, but a visible inconsistency in TUI rendering.

*Also worth watching:* [#10416](https://github.com/earendil-works/pi/issues/10416) (stateless MCP 2026-07-28 dual-era support), [#10291](https://github.com/earendil-works/pi/issues/10291) (store MCP auth in keychain instead of `mcp-auth.json`), [#10456](https://github.com/earendil-works/pi/issues/10456) (add a Cursor provider), [#10455](https://github.com/earendil-works/pi/issues/10455) (nested tool execution via `ToolExecutionApi`), and [#10414](https://github.com/earendil-works/pi/issues/10414) (Windows alt-screen viewport jump + input lockup).

---

## 4. Key PR Progress

Only **5 PRs** were updated in the last 24h, so all are covered here:

1. **[#9776 — Per thinking sampling parameters](https://github.com/earendil-works/pi/pull/9776)** (CLOSED, @mrexodia)
   Implements `samplingParamsByThinkingLevel` to generalize per-thinking-level sampling, overriding existing `samplingParams`. Cherry-picks #9505. This is the change behind v1.0.2.

2. **[#10440 — [OPEN] fix(coding-agent): resolve the QuickJS wasm path once per process](https://github.com/earendil-works/pi/pull/10440)** (@HyeokjaeLee)
   Caches the wasm path instead of re-resolving per codemode call, fixing the post-update breakage in #10439. Still open — the highest-priority pending PR for codemode users.

3. **[#10443 — [CLOSED] fix(coding-agent): route stdin dead-terminal errors to `emergencyTerminalExit`](https://github.com/earendil-works/pi/pull/10443)** (@zichen0116)
   Adds an `error` listener on `process.stdin` so `read EIO` (closed tab, dropped ssh/tmux, sleep/wake) no longer escalates to `uncaughtException`. Meaningful reliability improvement for long-running sessions.

4. **[#2597 — [CLOSED] docs(coding-agent): document `resources_discover` event](https://github.com/earendil-works/pi/pull/2597)** (@aliou)
   Documents an undocumented extension event and adds an example loading Claude Code skills/commands as Pi skills and prompts. The author notes the missing docs caused models to hallucinate the event — a good argument for keeping extension API docs current.

5. **[#10448 — [CLOSED] pr for sync](https://github.com/earendil-works/pi/pull/10448)** (@sherocktong)
   No description; routine sync PR, no functional detail available.

**Note:** PR throughput is very low relative to issue volume (5 PRs vs. 42 issues updated). Combined with the auto-closed-contribution gate noted in #8643, this is a potential bottleneck worth flagging.

---

## 5. Feature Request Trends

Distilled from all issues in the window, the most-requested directions are:

- **Platform/OS hygiene and standards compliance** — XDG Base Directory support (#2870), keychain-backed credential storage instead of plaintext `mcp-auth.json` (#10291). Users want Pi to behave like a well-behaved Unix citizen and to treat tokens as sensitive.
- **Protocol currency** — Dual-era MCP support for the stateless 2026-07-28 spec (#10416), keeping older servers working via negotiation/fallback.
- **Provider breadth and parity** — A first-class **Cursor provider** (#10456), plus continued parity fixes across Bedrock (#8643), Anthropic (#9134), and Codex/Responses (#9845, #10139). The theme is "one behavior, all providers."
- **Extension & SDK surface expansion** — Structured diagnostic logging for core + extensions with pluggable sinks (#10457), display-only assistant text transforms over RPC/JSON (#10454), footer extension-status wrap/truncate toggle (#10460), theme-driven fullscreen selection styling (#9715), overlay coverage of terminal images (#9439), and side-effect-free Bun runtime-shim export for SDK embedders (#10458).
- **Execution-layer flexibility** — Abstracting codemode's execution backend beyond QuickJS (#10459) and enabling nested tool execution from `ToolExecutionApi` (#10455).
- **Package/resource namespacing** — Opt-in `pi.namespace` for skills and prompt templates with a unified `<namespace>:<name>` resolution surface (#8834).
- **UI responsiveness & control** — Decoupling prompt submission from awaited extension hooks (#7946) and clearing queued steering/followUp messages over RPC (#9194).

---

## 6. Developer Pain Points

- **Provider adapters silently diverge.** Anthropic strips root `anyOf` (#9134), Bedrock rejects nested tool-result images (#8643), Codex drops `max_output_tokens` (#9845), and unvalidated `toolCall.name` poisons Responses API history (#10139). Schema/message transformation is the single largest source of correctness bugs.
- **Compaction is fragile and inconsistent across modes.** Auto-compaction doesn't run in CLI mode (#10330), can't be interleaved with queued prompts (#8301), and context accounting explodes after network errors (#10287). Long sessions are where users feel the most friction.
- **Self-update breaks the running process.** A `pnpm`/npm global update invalidates in-flight install paths, permanently breaking codemode until restart (#10439). Runtime asset resolution should not depend on the live install directory.
- **Terminal robustness on edge cases.** Windows alt-screen viewport jumps and keyboard input dies until the window is clicked (#10414); stdin `read EIO` from dropped sessions reaches `uncaughtException` (#10443). TUI/terminal handling remains the least reliable subsystem.
- **Auth/credential handling.** OpenAI subscription refresh fails with `refresh_token_invalidated` after successful login (#10377), and MCP tokens sit in plaintext on disk (#10291).
- **Contribution friction.** PR #8642 was auto-closed by the contribution gate despite a ready fix + test, and a documentation gap caused models to hallucinate the `resources_discover` event (#2597). With only 5 PRs touched vs. 42 issues, the maintainer/contribution pipeline looks like the community's structural bottleneck.

---

*Prepared for the Pi developer community. Links point to `github.com/earendil-works/pi` issues, PRs, and releases.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-10-05

Source: [github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)

## 1. Today's Highlights
Qwen Code published two `v0.24.7` nightly releases, both carrying Code Mode/lazy-tool-discovery alignment and permission fixes. The managed-agent runtime remains the dominant theme: P1 concurrency stalls, session-store outage recovery, Hooks hardening, and Kubernetes runtime tracking are driving most high-engagement issues. CI flakiness and memory/discovery bugs continue to create recurring developer friction.

## 2. Releases
Two nightly releases appeared in the last 24h. No stable release was published.

- [`v0.24.7-nightly.20261004.9915c7ff8f`](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.7-nightly.20261004.9915c7ff8f) — visible changes:
  - `fix(core): align Code Mode text with lazy tool discovery` by @tanzhenxin — [PR #12990](https://github.com/QwenLM/qwen-code/pull/12990)
  - `fix(permissions): honor approved...` *(release note truncated in provided data)*
- [`v0.24.7-nightly.20261003.2c591ecc08`](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.7-nightly.20261003.2c591ecc08) — same visible changes as above.

## 3. Hot Issues
1. [#9693](https://github.com/QwenLM/qwen-code/issues/9693) — **[CLOSED] Windows MCP `-32000 Connection closed` at startup** (9 comments). Blocks STDIO MCP servers on Windows even when MCP is not activated; highest-comment issue in the window, still marked `need-retesting`.
2. [#13333](https://github.com/QwenLM/qwen-code/issues/13333) — **[OPEN][P1] ≥8 concurrent Turns stall after model answers** (7 comments). Describes a lock convoy in the managed-agent store path on modest hardware; a high-priority core concurrency bug.
3. [#13238](https://github.com/QwenLM/qwen-code/issues/13238) — **[CLOSED] Late host result after terminal settlement drops incurred usage** (6 comments). Token/usage accounting bug in multi-agent host runs; affects billing and session correctness.
4. [#13255](https://github.com/QwenLM/qwen-code/issues/13255) — **[OPEN] Flaky CI: `409` on `POST /files/rewind`** (6 comments). Required Java/MySQL lane intermittently fails, eroding trust in CI gates.
5. [#13395](https://github.com/QwenLM/qwen-code/issues/13395) — **[OPEN] Kubernetes tool runtime progress and cross-platform delivery gates** (5 comments). Tracks remaining implementation and acceptance work under proposal #12380; important for platform distribution.
6. [#13130](https://github.com/QwenLM/qwen-code/issues/13130) — **[CLOSED] Desktop workspaces suddenly untrusted/read-only** (5 comments). Security/trusted-folder regression that made Qwen Code Desktop unusable with no practical recovery path.
7. [#13392](https://github.com/QwenLM/qwen-code/issues/13392) — **[OPEN] `PreToolUse.updatedInput` ignored in Desktop/ACP 0.24.7** (4 comments). Breaks extension hooks that need to rewrite tool arguments, including MCP transport handoff.
8. [#13280](https://github.com/QwenLM/qwen-code/issues/13280) — **[OPEN] Memory discovery loads `QWEN.md`/`AGENTS.md` above git root** (4 comments). Unexpected parent-directory context loading; potential security and reproducibility concern.
9. [#12878](https://github.com/QwenLM/qwen-code/issues/12878) — **[OPEN] Ollama rejects zero-argument tools when `parameters` is omitted** (4 comments, 1 👍). Local Ollama/openai auth requests fail with JSON schema errors; notable local-LLM compatibility pain.
10. [#13413](https://github.com/QwenLM/qwen-code/issues/13413) — **[OPEN][P1] Transient Managed Session Store outage permanently wedges Turn** (3 comments). A temporary store outage stops Session log writes forever, preventing completion or cancellation.

## 4. Key PR Progress
1. [#13168](https://github.com/QwenLM/qwen-code/pull/13168) — **Give Hosted turns the Workspace's project context.** Hosted turns now receive `QWEN.md` and `AGENTS.md` from the saved Session working directory.
2. [#13291](https://github.com/QwenLM/qwen-code/pull/13291) — **Make local Runtime tool outcomes durable (M5b).** Publishes final parameters, tool definitions, and outcomes into the session authority before calls leave the host.
3. [#13352](https://github.com/QwenLM/qwen-code/pull/13352) — **Prove Shell process-group stops with a worker ledger (M5c).** Adds durable worker-owned tracking for Shell process groups started by session runtimes.
4. [#13354](https://github.com/QwenLM/qwen-code/pull/13354) — **Add reliable ACTIVE Workspace deletion (L3).** Settles `SessionEnd` before `SessionDelete` and verifies committed outcomes.
5. [#13406](https://github.com/QwenLM/qwen-code/pull/13406) — **Deny outside Host tools before permission handling.** Native-confinement violations return a recoverable refusal before permission admission.
6. [#12531](https://github.com/QwenLM/qwen-code/pull/12531) — **Stop MCP server rules from authorizing a colliding server.** Fixes permission-rule identity handling so reduced server names cannot grant colliding tools.
7. [#13299](https://github.com/QwenLM/qwen-code/pull/13299) — **Key models.dev catalog under dotted and dashed IDs.** Fixes catalog lookup for providers publishing different model-ID spellings.
8. [#13314](https://github.com/QwenLM/qwen-code/pull/13314) — **Close Hosted Harness review criticals from #12654.** Lands fixes for 11 Critical and 2 Minor findings in the private Java client.
9. [#13179](https://github.com/QwenLM/qwen-code/pull/13179) — **Harden managed panel failure lifecycle and worker path containment.** Adds robustness fixes and unit tests for hosted Managed sessions.
10. [#9417](https://github.com/QwenLM/qwen-code/pull/9417) — **Fail closed on expanding heredoc bodies in worktree guard.** Prevents unquoted heredoc expansion from bypassing the daemon git worktree guard.

## 5. Feature Request Trends
- **Managed-agent / Hosted Runtime maturity:** session queueing, durable tool outcomes, process-group stop ledgers, Workspace deletion, Hooks hardening, and Kubernetes runtime delivery.
- **Memory and context management:** managed auto-memory UI, `/memory` Web Shell exposure, correct `QWEN.md`/`AGENTS.md` discovery, and reducing token waste from re-investigation.
- **Model/provider catalog integration:** models.dev-backed context limits, modalities, dual-spelling IDs, reasoning-effort tiers, and better Ollama/OpenAI-compatible tool schemas.
- **Permissions and security:** MCP rule attribution, outside-Host tool denial, trusted-folder recovery, and safer hook/command semantics.
- **CLI/UX polish:** custom-command template handling, `PreToolUse.updatedInput`, terminal rendering fixes, and clearer CLI help.
- **CI/test reliability:** flaky required gates, stuck PR review checks, and deterministic integration tests.

## 6. Developer Pain Points
- **CI flakiness and blocked PRs:** intermittent `409` rewind failures, Java fault-gate flakes, and `review-pr` timeouts are blocking unrelated PRs — [#13255](https://github.com/QwenLM/qwen-code/issues/13255), [#13386](https://github.com/QwenLM/qwen-code/issues/13386), [#12714](https://github.com/QwenLM/qwen-code/issues/12714), [#13205](https://github.com/QwenLM/qwen-code/issues/13205).
- **Managed-agent concurrency and reliability:** lock convoys, gap-lock deadlocks, and session-store outage wedges remain P1/P2 concerns — [#13333](https://github.com/QwenLM/qwen-code/issues/13333), [#13374](https://github.com/QwenLM/qwen-code/issues/13374), [#13413](https://github.com/QwenLM/qwen-code/issues/13413).
- **Token/context waste:** agents re-investigate already-known session history, and late host results can drop usage accounting — [#12579](https://github.com/QwenLM/qwen-code/issues/12579), [#13238](https://github.com/QwenLM/qwen-code/issues/13238).
- **MCP/provider integration friction:** Windows MCP connection failures, Ollama zero-arg tool rejection, and MCP permission identity collisions — [#9693](https://github.com/QwenLM/qwen-code/issues/9693), [#12878](https://github.com/QwenLM/qwen-code/issues/12878), [#12531](https://github.com/QwenLM/qwen-code/pull/12531).
- **Memory discovery scope bugs:** loading `QWEN.md`/`AGENTS.md` from above the git root surprises developers — [#13280](https://github.com/QwenLM/qwen-code/issues/13280).
- **Trust and permission regressions:** workspaces becoming unexpectedly untrusted/read-only remains a high-impact usability failure — [#13130](https://github.com/QwenLM/qwen-code/issues/13130).
- **Hook and command semantics:** `PreToolUse.updatedInput` being ignored and custom-command `@{...}` content being reinterpreted as template syntax break extension/command workflows — [#13392](https://github.com/QwenLM/qwen-code/issues/13392), [#13387](https://github.com/QwenLM/qwen-code/issues/13387).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-10-05
Source: `github.com/Hmbown/DeepSeek-TUI` — issue/PR links below point to `Hmbown/Codewhale` as provided in the dataset.

## 1. Today's Highlights
No releases landed in the last 24h. The dominant activity is a maintainer-driven **engine durability and restart-recovery cluster** ([#6836](https://github.com/Hmbown/Codewhale/issues/6836), [#6837](https://github.com/Hmbown/Codewhale/issues/6837), [#6838](https://github.com/Hmbown/Codewhale/issues/6838), [#6839](https://github.com/Hmbown/Codewhale/issues/6839), [#6840](https://github.com/Hmbown/Codewhale/issues/6840), [#6841](https://github.com/Hmbown/Codewhale/issues/6841)), all sourced from integration commit `3a78899`. On the PR side, [#6815](https://github.com/Hmbown/Codewhale/pull/6815) tracks the **0.10.1 integration** around Engine convergence, TypeScript mods, and Ratatui UX, while Windows process-lifecycle bug [#6827](https://github.com/Hmbown/Codewhale/issues/6827) remains a high-risk platform issue.

## 2. Releases
None in the last 24 hours.

## 3. Hot Issues
Only **8 issues** were updated in the window, so all are covered below. Community engagement is very low: most have 0 comments and 0 👍; [#6827](https://github.com/Hmbown/Codewhale/issues/6827) has 1 comment.

1. **[#6827](https://github.com/Hmbown/Codewhale/issues/6827) — Windows npm install: killing `node.exe` terminates Codewhale with no cleanup**  
   *Why it matters:* On Windows, the npm launcher runs `node.exe` → `codewhale.exe`. Killing the launcher can kill the session without cleanup, and the agent’s own “stop node” commands may self-terminate. This is a serious process-isolation and safety issue.  
   *Reaction:* `bug`, `needs-triage`, 1 comment, 0 👍.

2. **[#6836](https://github.com/Hmbown/Codewhale/issues/6836) — Engine durability: resume accepted work across process restart**  
   *Why it matters:* Accepted turns should recover committed execution state, reuse completed work, and surface unknown external effects when reconciliation is impossible. This is foundational for reliability.  
   *Reaction:* Maintainer-authored source-audit intake; 0 comments, 0 👍.

3. **[#6838](https://github.com/Hmbown/Codewhale/issues/6838) — Engine: recover model and tool steps from durable intents and results**  
   *Why it matters:* Without durable intent/result recovery, restart cannot faithfully reconstruct model and tool execution.  
   *Reaction:* Source-observed gap; no reproduction test; 0 comments, 0 👍.

4. **[#6837](https://github.com/Hmbown/Codewhale/issues/6837) — Engine: commit execution checkpoints atomically with transcript and results**  
   *Why it matters:* Atomic checkpoints are required to avoid partial/inconsistent recovery after crashes.  
   *Reaction:* Maintainer intake; 0 comments, 0 👍.

5. **[#6839](https://github.com/Hmbown/Codewhale/issues/6839) — Engine: persist human waits and continuation deadlines with explicit restart policy**  
   *Why it matters:* Pending approval/input/dynamic-tool waits are currently process-bound; restart can strand or lose them.  
   *Reaction:* Maintainer intake; 0 comments, 0 👍.

6. **[#6840](https://github.com/Hmbown/Codewhale/issues/6840) — Engine: persist child completion delivery and owner acknowledgment**  
   *Why it matters:* Child-agent completion delivery and acknowledgment need durable semantics for recursive/multi-agent workflows.  
   *Reaction:* Maintainer intake; 0 comments, 0 👍.

7. **[#6841](https://github.com/Hmbown/Codewhale/issues/6841) — Code Mode: retain permitted composition in child catalogs and reconcile documentation**  
   *Why it matters:* Root Code Mode is default-on; child catalogs and docs must stay consistent with permitted composition.  
   *Reaction:* Documentation/source-audit gap; 0 comments, 0 👍.

8. **[#6303](https://github.com/Hmbown/Codewhale/issues/6303) — One easy install from all three doors: website app, marketplace plugin, GitHub repo**  
   *Why it matters:* Installation from the website macOS app, marketplace plugin, and GitHub repo currently tells different stories, especially around Accessibility and Screen Recording grants.  
   *Reaction:* Older issue refreshed; 0 comments, 0 👍.

## 4. Key PR Progress
Only **6 PRs** were updated in the window, so all are covered below.

1. **[PR #6815](https://github.com/Hmbown/Codewhale/pull/6815) — 0.10.1 integration: Engine convergence, reviewed TypeScript mods and Ratatui UX**  
   *Status:* OPEN. Codewhale uses one Rust Engine for execution, provider identity, permissions, events, sessions, storage, and accounting; ACP, child agents, and recursive RLM share its turn path. This is the main release/integration train.  
   *Reaction:* 0 👍; comment count undefined.

2. **[PR #6835](https://github.com/Hmbown/Codewhale/pull/6835) — docs(web): add the community VS Code GUI to where you can use Codewhale**  
   *Status:* CLOSED. Adds the community-maintained CodeWhale GUI for VS Code to homepage/docs discovery without touching the repo’s own VS Code extension.  
   *Reaction:* 0 👍; comment count undefined.

3. **[PR #6833](https://github.com/Hmbown/Codewhale/pull/6833) — fix(tui): bring help summaries in twelve packs up to date with English**  
   *Status:* CLOSED, `contribution-gate`. Aligns localized `/help` summaries after English help text was rewritten for one-row layout.  
   *Reaction:* 0 👍; comment count undefined.

4. **[PR #6834](https://github.com/Hmbown/Codewhale/pull/6834) — fix(tui): preserve UTF-8 Python output on Windows**  
   *Status:* CLOSED, `contribution-gate`. Sets `PYTHONIOENCODING=utf-8` for Python subprocesses so `code_execution` output matches UTF-8 decoding; includes a regression test with parent env set to GBK.  
   *Reaction:* 0 👍; comment count undefined.

5. **[PR #6832](https://github.com/Hmbown/Codewhale/pull/6832) — refactor(commands): adopt portable config policy and status shapes (FEAT-027)**  
   *Status:* OPEN. Makes `/permissions`, its aliases, `/config` permission-rule routes, and `/status` independently portable via shared command Shapes while preserving behavior.  
   *Reaction:* 0 👍; comment count undefined.

6. **[PR #6805](https://github.com/Hmbown/Codewhale/pull/6805) — feat(plugins): support reviewed OAuth AI providers**  
   *Status:* OPEN, `contribution-gate`. Allows reviewed plugin bundles to declare named OpenAI-compatible providers and public OAuth clients through `extensions.net.codewhale.providers`, consumed by the existing provider/model/chat/streaming path.  
   *Reaction:* 0 👍; comment count undefined.

## 5. Feature Request Trends
- **Durable/resumable engine execution:** restart recovery, atomic checkpoints, durable intents/results, persisted human waits, child completion delivery/ack.
- **Windows process-lifecycle safety:** clean termination, avoiding agent commands that kill the session.
- **Frictionless install/onboarding:** unified experience across website app, marketplace plugin, and GitHub repo; clearer OS permission flows.
- **Code Mode consistency:** preserving permitted composition in child catalogs and reconciling documentation.
- **Plugin/provider extensibility:** reviewed OAuth AI providers and OpenAI-compatible provider declarations.
- **Portable command/config surfaces:** shared Shapes for permissions, config, and status.
- **i18n and UX polish:** localized help summaries, UTF-8-safe Windows tooling.

## 6. Developer Pain Points
- **Windows process trees are fragile:** killing `node.exe` can instantly terminate Codewhale with no cleanup, and the agent’s own “stop node” commands can kill its session.
- **Crash/restart semantics are incomplete:** accepted turns, checkpoints, human waits, child completions, and external effects are not yet durably recoverable.
- **Encoding mismatches on Windows:** Python subprocess output may default to GBK while `code_execution` decodes UTF-8, producing mojibake for Chinese output.
- **Installation is fragmented:** the three install “doors” have inconsistent steps, especially around macOS Accessibility and Screen Recording grants.
- **Docs drift around Code Mode:** child catalog composition and localized help text can fall out of sync.
- **Low community triage volume:** most issues/PRs have no comments or upvotes, so maintainer-authored source audits dominate the signal.

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

## ComfyUI Community Digest — 2026-10-05

### Today's Highlights
No new releases in the last 24 hours. The community remains focused on AMD ROCm performance regressions and DynamicVRAM stability, with multiple open issues reporting slowdowns and crashes. On the development side, asset management fixes and core API improvements dominate recent pull request activity.

### Releases
*No new releases in the last 24 hours.*

### Hot Issues
1. **[#16705](https://github.com/Comfy-Org/ComfyUI/issues/16705) – What's with the insane VRAM and RAM usage?**  
   *Author: zac-market | 10 comments*  
   High memory consumption on the latest version persists even with custom nodes disabled. Community is actively discussing possible causes and workarounds.

2. **[#14981](https://github.com/Comfy-Org/ComfyUI/issues/14981) – Empty Load Image node triggers ERROR**  
   *Author: intervisionlord | 11 comments, 👍 1*  
   Long-standing bug where an empty Load Image node throws an error instead of handling the empty state gracefully. High comment count indicates continued user impact.

3. **[#16502](https://github.com/Comfy-Org/ComfyUI/issues/16502) – AMD ROCm / DynamicVRAM: performance degrades after first generation**  
   *Author: PennywiseDev | 3 comments*  
   Repeated executions on AMD GPUs slow down after the first run; `/free` restores speed. A recurring theme for ROCm users.

4. **[#14475](https://github.com/Comfy-Org/ComfyUI/issues/14475) – DynamicVRAM/caching allocator not flushed between prompts (CLOSED)**  
   *Author: EvilSquirrels | 4 comments*  
   Second queued prompt runs ~2.4× slower on gfx1151 / Strix Halo. Now closed, but highlights persistent caching allocator issues on AMD.

5. **[#16776](https://github.com/Comfy-Org/ComfyUI/issues/16776) – Startup crash on Windows 11 with AMD RX 7900 XTX**  
   *Author: Expired-Pasta | 2 comments*  
   Crash in `amdhip64_7.dll` and `hipErrorInvalidValue`. Adds to the growing list of AMD-specific startup failures.

6. **[#8821](https://github.com/Comfy-Org/ComfyUI/issues/8821) – More built-in data types: vector, matrix, color, image (with ColorSpace)**  
   *Author: Lex-DRL | 1 comment*  
   Long-standing feature request to add essential data types to core, enabling entire categories of image-processing nodes.

7. **[#16782](https://github.com/Comfy-Org/ComfyUI/issues/16782) – Dynamic VRAM: "VBAR allocation failed" on NVIDIA vGPU**  
   *Author: TomGem | 0 comments*  
   CUDA VMM not available on vGPU; `--disable-dynamic-vram` is the only workaround. ComfyUI warns this argument will be removed soon, raising concern.

8. **[#16781](https://github.com/Comfy-Org/ComfyUI/issues/16781) – Feature: Way better support for AMD GPUs**  
   *Author: jaydencoder-creator | 0 comments*  
   Frustration with the labyrinthine setup process for AMD GPUs; even DirectML assumes NVIDIA. A clear call for improved AMD onboarding.

9. **[#16780](https://github.com/Comfy-Org/ComfyUI/issues/16780) – SAM3.1: SAM3 Detect node not detecting faces properly**  
   *Author: ryukbk | 0 comments*  
   Specific bug with prompt `"face:10"` and threshold `0.1`. Affects users relying on SAM3 for face detection.

10. **[#16772](https://github.com/Comfy-Org/ComfyUI/issues/16772) – Frontend 1.53.10 breaks VideoHelperSuite's Video Combine node**  
    *Author: JuhanT | 0 comments*  
    The `frame_rate` text box disappears, breaking Wan 2.2 I2V workflows. A regression that directly impacts popular custom-node workflows.

### Key PR Progress
1. **[#16578](https://github.com/Comfy-Org/ComfyUI/pull/16578) – Implement the asset export API locally (CORE-454)**  
   *Author: jtydhr88*  
   Core now serves the shared asset export contract (`POST /api/assets/export`, `GET /api/assets/exports/{exportName}`, `GET /api/tasks/{task_id}`), unifying output zipping between cloud and local.

2. **[#16763](https://github.com/Comfy-Org/ComfyUI/pull/16763) – Add metadata to websocket messages of a prompt**  
   *Author: christian-byrne*  
   Allows passing a `workflow_metadata` dict when queueing a prompt; values are included in every websocket message (limited to 256 bytes). Helps the frontend associate messages with workflows.

3. **[#16368](https://github.com/Comfy-Org/ComfyUI/pull/16368) – Sync shared API contract from cloud@a8c6a92**  
   *Author: comfy-pr-bot*  
   Automated projection of the shared / FE-facing subset of ComfyUI Cloud's OpenAPI contract into core's `openapi.yaml`, keeping API definitions aligned.

4. **[#16752](https://github.com/Comfy-Org/ComfyUI/pull/16752) – Fix SeedVR2 tiled VAE crash on in-place tile blend (CLOSED)**  
   *Author: renatozapata*  
   Resolves an autograd "view is being modified inplace" error when more than one tile needs blending—a common fallback when a clip doesn't fit in VRAM.

5. **[#16775](https://github.com/Comfy-Org/ComfyUI/pull/16775) – Quiver: add V2 SVG nodes with per-model inputs and deprecate originals**  
   *Author: bigcat88*  
   Adapts to server-side changes in Quiver's Arrow 2 Telos (rejects `temperature`, `top_p`, `presence_penalty`). Adds V2 SVG nodes and deprecates the old ones.

6. **[#16681](https://github.com/Comfy-Org/ComfyUI/pull/16681) – Fuse H3 MLP INT8 output with indexed modulation gate**  
   *Author: Tokha233*  
   Optimization for MiniMax H3 that fuses MLP FC2 with its indexed modulation gate, preserving hooks, gradients, and FP32 residuals.

7. **[#16783](https://github.com/Comfy-Org/ComfyUI/pull/16783) – Fix fused linear calls skipping runtime adapters**  
   *Author: xmarre*  
   Ensures fused linear operations respect replaced `module.forward` or Module hooks, so registered runtime LoRA contributions are not silently dropped.

8. **[#16779](https://github.com/Comfy-Org/ComfyUI/pull/16779) – Avoid overflow when saving high bit depth images**  
   *Author: Shenrui-Ma*  
   Fixes Save Image (Advanced) failing to export 16-bit PNGs and 10-bit AVIFs from float16 inputs by using float32 for scaling.

9. **[#16778](https://github.com/Comfy-Org/ComfyUI/pull/16778) – Fix crash in Anima text encoder when prompt contains embeddings**  
   *Author: xCentral*  
   Resolves a crash when using an `embedding:` token in a prompt with the Anima text encoder.

10. **[#16748](https://github.com/Comfy-Org/ComfyUI/pull/16748) – Write asset scan inserts in short transactions**  
    *Author: synap5e*  
    Prevents asset scans from locking out uploads and output saves during large batch cataloguing; also uses WAL `synchronous=NORMAL` for better concurrency.

### Feature Request Trends
- **AMD GPU support**: Multiple requests (#16781, #16502, #16776, #14475) highlight a strong desire for a smoother AMD ROCm experience, from installation to runtime stability.
- **Built-in data types**: #8821 calls for vector, matrix, color, and image types with ColorSpace, enabling richer node categories without custom types.
- **Better VRAM/DynamicVRAM management**: Issues like #16705, #16782, and #16768 reflect a need for more predictable memory usage and clearer controls over DynamicVRAM.
- **Frontend compatibility**: #16772 shows demand for stable frontend APIs that don't break custom-node UIs.

### Developer Pain Points
- **AMD ROCm performance and stability**: Recurring slowdowns, crashes, and allocation failures dominate AMD-related issues. Users are frustrated by workarounds like `--disable-dynamic-vram` and `/free`.
- **High VRAM/RAM usage**: Even with custom nodes disabled, memory consumption remains a top complaint (#16705).
- **DynamicVRAM unpredictability**: VBAR allocation failures, caching allocator issues, and model residency problems (#16782, #14475, #16768) create a fragmented experience across NVIDIA and AMD.
- **Custom node compatibility**: Many bug reports require disabling custom nodes to isolate issues (#14981, #16705, #16502), indicating integration friction.
- **Frontend regressions**: Updates like Frontend 1.53.10 can silently break custom-node UIs (#16772), leaving developers to scramble for fixes.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Community Digest — 2026-10-05
Source: [github.com/ollama/ollama](https://github.com/ollama/ollama)

## Today's Highlights
No new Ollama releases shipped in the last 24h. Community attention is split between a long-running macOS updater failure ([#11972](https://github.com/ollama/ollama/issues/11972), 27 comments) and a fresh decision-model endpoint failure ([#18769](https://github.com/ollama/ollama/issues/18769), 8 comments, 4 👍). PR activity is focused on MLX model/tokenizer support, bounded network/auth retries, updater RC support, and renderer/parser auto-detection.

## Releases
No new releases in the last 24h.

## Hot Issues
- **[#11972](https://github.com/ollama/ollama/issues/11972)** — macOS “Restart to update” fails for non-admin accounts. Matters because it blocks the standard update path; highest engagement in the window: 27 comments, 5 👍.
- **[#18769](https://github.com/ollama/ollama/issues/18769)** — `clef-flash` decision model always fails on `/v1/systemone` (CUDA “non-finite logit” / CPU “cannot open model”). Matters because the same model works on chat completions, indicating endpoint-specific backend/model handling. Community: 8 comments, 4 👍.
- **[#16049](https://github.com/ollama/ollama/issues/16049)** — Closed: generate completion API hangs with `qwen3.5:2b` Q8_0 on macOS but not `llama3.2:3b`. Matters as a model-specific runtime hang; 6 comments.
- **[#18672](https://github.com/ollama/ollama/issues/18672)** — Closed: Intel UHD 0x4626 not detected by Vulkan on Windows. Matters for hardware/backend coverage; 6 comments.
- **[#4684](https://github.com/ollama/ollama/issues/4684)** — Closed: model download fails behind a company firewall at the end of the pull. Matters for enterprise/proxy adoption; 5 comments, 2 👍.
- **[#17748](https://github.com/ollama/ollama/issues/17748)** — Open: AMD Radeon 780M Vulkan regression in Ollama >=0.32.10 causes `ErrorDeviceLost`. Matters for AMD/Vulkan reliability; 3 comments, 3 👍.
- **[#18513](https://github.com/ollama/ollama/issues/18513)** — Open: Ollama Cloud login blocked for `anonaddy.me` email alias. Matters for cloud auth and alias-based signups; 2 comments.
- **[#18698](https://github.com/ollama/ollama/issues/18698)** — Open feature request: support K2 Horizon models (`k2-horizon`, 0.9B–36B MoE, Apache 2.0, GGUF available). Strong demand signal: 6 👍, 2 comments.
- **[#18775](https://github.com/ollama/ollama/issues/18775)** — Open: `/api/generate` accepts trailing non-JSON data after a valid JSON body. Matters for API validation and robustness; 2 comments.
- **[#18785](https://github.com/ollama/ollama/issues/18785)** — Open: `lfm2:24b` decodes the `python` token without a leading space as an empty string, silently dropping text. Matters for tokenizer/output correctness; 1 comment.

## Key PR Progress
- **[#18780](https://github.com/ollama/ollama/pull/18780)** — `mlx: add Kolibri 1 support`; expands MLX model coverage.
- **[#18452](https://github.com/ollama/ollama/pull/18452)** — `x/transfer: bound authentication retries`; prevents recursive 401 retries and avoids treating blob existence as a cache miss.
- **[#18437](https://github.com/ollama/ollama/pull/18437)** — `server: bound direct URL resolution attempts`; caps each Hugging Face direct-URL lookup to 10s, avoiding 30s retry-context exhaustion.
- **[#18787](https://github.com/ollama/ollama/pull/18787)** — `cmd, updater: add update check and pull feature with RC version support`; adds `ollama update [check|pull]`, `--rc`, `--prerelease`, `--install`, and `--force`.
- **[#17965](https://github.com/ollama/ollama/pull/17965)** — `server: auto-detect ornith and qwen35 renderer and parser`; fixes native-mode issues when both `tools` and thinking are passed.
- **[#18779](https://github.com/ollama/ollama/pull/18779)** — `mlx: match publisher tokenizer semantics`; fixes token-ID mismatches from pretokenizer, Unicode/whitespace, added-token, and BPE handling.
- **[#18730](https://github.com/ollama/ollama/pull/18730), [#18731](https://github.com/ollama/ollama/pull/18731), [#18733](https://github.com/ollama/ollama/pull/18733)** — proxy support series for HTTP client, environment proxy, and redirect handling; targets enterprise proxy gaps.
- **[#18610](https://github.com/ollama/ollama/pull/18610)** — `server: avoid native JSON round trip for OpenAI embeddings`; improves large embedding batch performance.
- **[#18786](https://github.com/ollama/ollama/pull/18786)** — `server: detect Qwen3.8 renderer for GGUF imports`; preserves thinking effort on the Go-template path.
- **[#17144](https://github.com/ollama/ollama/pull/17144)** — `server: allow parallel requests for qwen35 / qwen35moe`; removes the `numParallel = 1` blocklist after the upstream llama.cpp crash fix.

## Feature Request Trends
- **Broader model/architecture support:** K2 Horizon ([#18698](https://github.com/ollama/ollama/issues/18698)), Qwen3.8 renderer ([#18786](https://github.com/ollama/ollama/pull/18786)), Kolibri 1 ([#18780](https://github.com/ollama/ollama/pull/18780)), and decision models ([#18784](https://github.com/ollama/ollama/issues/18784)).
- **CLI/API ergonomics for specialized models:** CLI mode for decision models ([#18784](https://github.com/ollama/ollama/issues/18784)) and reliable `/v1/systemone` behavior ([#18769](https://github.com/ollama/ollama/issues/18769)).
- **Update lifecycle improvements:** RC/prerelease update path ([#18787](https://github.com/ollama/ollama/pull/18787)) and macOS restart-to-update fixes ([#11972](https://github.com/ollama/ollama/issues/11972)).
- **Enterprise networking/proxy support:** proxy environment support ([#18730](https://github.com/ollama/ollama/pull/18730), [#18731](https://github.com/ollama/ollama/pull/18731), [#18733](https://github.com/ollama/ollama/pull/18733)), firewall-safe downloads ([#4684](https://github.com/ollama/ollama/issues/4684)), bounded auth retries ([#18452](https://github.com/ollama/ollama/pull/18452)), and direct-URL timeouts ([#18437](https://github.com/ollama/ollama/pull/18437)).
- **Backend/accelerator parity:** Vulkan detection/regressions ([#18672](https://github.com/ollama/ollama/issues/18672), [#17748](https://github.com/ollama/ollama/issues/17748)), MLX quantization ([#18789](https://github.com/ollama/ollama/issues/18789)), and MLX memory wiring ([#18744](https://github.com/ollama/ollama/issues/18744)).
- **Structured output/API robustness:** trailing JSON acceptance ([#18775](https://github.com/ollama/ollama/issues/18775)), JSON property order ([#18721](https://github.com/ollama/ollama/pull/18721)), escaped pattern literals ([#18248](https://github.com/ollama/ollama/pull/18248)), tool-call noise recovery ([#18664](https://github.com/ollama/ollama/pull/18664)), and thinking-schema enforcement ([#18783](https://github.com/ollama/ollama/pull/18783)).

## Developer Pain Points
- **GPU backend coverage and regressions:** Vulkan misses Intel UHD 0x4626 ([#18672](https://github.com/ollama/ollama/issues/18672)); AMD Radeon 780M hits `ErrorDeviceLost` on larger models ([#17748](https://github.com/ollama/ollama/issues/17748)).
- **MLX runtime/import fragility:** per-layer quantization overrides ignored ([#18789](https://github.com/ollama/ollama/issues/18789)), weights unwired after idle ([#18744](https://github.com/ollama/ollama/issues/18744)), and tokenizer semantics mismatches ([#18779](https://github.com/ollama/ollama/pull/18779)).
- **Model-specific runtime failures:** `clef-flash` on `/v1/systemone` ([#18769](https://github.com/ollama/ollama/issues/18769)), `qwen3.5:2b` hang ([#16049](https://github.com/ollama/ollama/issues/16049)), and `lfm2:24b` token loss ([#18785](https://github.com/ollama/ollama/issues/18785)).
- **API validation/schema fragility:** trailing non-JSON accepted ([#18775](https://github.com/ollama/ollama/issues/18775)), JSON key ordering ([#18721](https://github.com/ollama/ollama/pull/18721)), dropped pattern literals ([#18248](https://github.com/ollama/ollama/pull/18248)), and tool-call parser noise ([#18664](https://github.com/ollama/ollama/pull/18664)).
- **Update/install friction:** macOS non-admin restart-to-update failures ([#11972](https://github.com/ollama/ollama/issues/11972)); RC/prerelease update path being addressed by [#18787](https://github.com/ollama/ollama/pull/18787).
- **Enterprise/network auth friction:** firewall download failures ([#4684](https://github.com/ollama/ollama/issues/4684)), proxy gaps ([#18730](https://github.com/ollama/ollama/pull/18730), [#18731](https://github.com/ollama/ollama/pull/18731), [#18733](https://github.com/ollama/ollama/pull/18733)), unbounded auth retries ([#18452](https://github.com/ollama/ollama/pull/18452)), direct-URL timeouts ([#18437](https://github.com/ollama/ollama/pull/18437)), and cloud login blocks for aliases ([#18513](https://github.com/ollama/ollama/issues/18513)).

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

# llama.cpp Community Digest — 2026-10-05

## 1. Today’s Highlights
The project shipped a rapid series of point releases (b11387–b11398) focused on backend correctness and performance: x86 tinyBLAS now handles BF16/FP16/FP32 K‑tails, CUDA MMQ memory faults and padding variables were fixed, and Vulkan RDNA4 tuning was corrected. Parallel to the releases, active PRs target MoE expert caching, Intel Vulkan prefill regressions, and pipeline parallelism with host‑RAM experts, while hot issues reveal persistent backend‑specific corruption (HIP/ROCm, Vulkan) and KV‑cache/slot‑restore fragility under concurrency.

## 2. Releases
New builds published in the last 24h (all available via `https://github.com/ggml-org/llama.cpp/releases`):

- **b11398** – `ggml-cpu`: vectorize BF16/FP16/FP32 K tails in tinyBLAS on x86; CPU tests skip tinyBLAS when `use_ref` enabled (#29806).
- **b11397** – `cuda`: move `neu_padded` to where it is used, removing unused‑variable warning (#29940).
- **b11396** – `ci`: Windows LLVM build now requires Ninja Multi‑Config (#29959).
- **b11393** – `chat-peg-parser`: clear `current_tool` when `pending_tool_call` is reset, fixing use‑after‑free (#29942).
- **b11392** – `ci`: set default permissions for workflows (#29945).
- **b11391** – `cuda`: move `blocks_per_col` to where it is used (#29939).
- **b11390** – `CUDA`: fix MMQ memory fault when `n_expert >> n_ubatch` (#29941).
- **b11389** – `vulkan`: fix RDNA4 `mat_vec` tuning (#29934).
- **b11388** – `imatrix`: calculate activation‑based statistics for new GGUF imatrix format (entropy, cosine sim, L2 norm) (#14891).
- **b11387** – `spec`: fix n‑gram drafts rejected at temp > 0 after truncation (#29924).

## 3. Hot Issues (Top 10 by Engagement)
1. **#27572** – [OPEN] `draft-mtp` acceptance collapses under `-np N` with multi‑ubatch; async device→host copy race. Matters for self‑speculative parallel serving; 13 comments, no resolution. https://github.com/ggml-org/llama.cpp/issues/27572
2. **#27579** – [OPEN] HIP/ROCm backend corrupted output on gfx1151 while Vulkan is byte‑identical; signals backend divergence. 12 comments, high concern for AMD users. https://github.com/ggml-org/llama.cpp/issues/27579
3. **#25423** – [OPEN] 20+ min load times with SYCL tensor parallelism; blocks practical multi‑GPU Intel usage. 10 comments. https://github.com/ggml-org/llama.cpp/issues/25423
4. **#28753** – [OPEN] `ggml_backend_sched_alloc_splits` unexpected graph reallocation crash on Intel Arc; recent regression. 9 comments. https://github.com/ggml-org/llama.cpp/issues/28753
5. **#28290** – [OPEN] `unpack8()` corrupts MAT_MUL+CPY on Snapdragon X Elite (Vulkan); affects ARM‑Windows edge. 9 comments. https://github.com/ggml-org/llama.cpp/issues/28290
6. **#28194** – [OPEN] `/slots` restore yields no KV reuse on hybrid/recurrent/SWA models; context checkpoints not persisted (7 👍). 4 comments. https://github.com/ggml-org/llama.cpp/issues/28194
7. **#29947** – [OPEN] Qwen3.8‑27B eval bug with opencode plugin on Vulkan; recent, 3 comments. https://github.com/ggml-org/llama.cpp/issues/29947
8. **#29892** – [OPEN] Vulkan ~12% prefill regression on RDNA4 since #29182 (MoE tile selection); perf regression tracking. 1 comment. https://github.com/ggml-org/llama.cpp/issues/29892
9. **#29932** – [OPEN] `qwen4exp` `per_layer_token_embd` CPU‑pinned; Q8 can’t load on 2×96 GiB Vulkan+RPC due to host RAM need. 2 comments. https://github.com/ggml-org/llama.cpp/issues/29932
10. **#29933** – [OPEN] `llama-server` (RPC client) ignores SIGTERM after long sessions, holds half‑open RPC; ops pain. 1 comment. https://github.com/ggml-org/llama.cpp/issues/29933

*Closed but notable:* #19466 (KV cache save for vision models, 44 comments) and #25030 (arm64 Windows CUDA builds, 17 comments) reflect long‑standing asks now stale.

## 4. Key PR Progress (Top 10)
1. **#29936** – Vulkan: Fix Intel prefill regression on MoE models (bisect to #29182). https://github.com/ggml-org/llama.cpp/pull/29936
2. **#29887** – Add GPU cache for MoE experts kept in host memory (LRU, small batches). https://github.com/ggml-org/llama.cpp/pull/29887
3. **#29889** – SYCL: fix memory errors in `mul_mat`, split buffer, host pool. https://github.com/ggml-org/llama.cpp/pull/29889
4. **#29781** – CUDA: support arbitrary striding for unary ops on f16/f32/bf16. https://github.com/ggml-org/llama.cpp/pull/29781
5. **#29672** – ggml: add PTQ1_0 ternary quant at group 128 (1.75 bpw). https://github.com/ggml-org/llama.cpp/pull/29672
6. **#29962** – Sync/upstream 2026‑07 (docs, tests, multi‑backend). https://github.com/ggml-org/llama.cpp/pull/29962
7. **#28272** – common: fix UB in `string_strip` with non‑ASCII input. https://github.com/ggml-org/llama.cpp/pull/28272
8. **#28383** – CUDA MMQ MoE out‑of‑bounds fix (illegal memory access on vision chat). https://github.com/ggml-org/llama.cpp/pull/28383
9. **#29963** – CUDA: pipeline parallelism with MoE experts in host RAM (draft). https://github.com/ggml-org/llama.cpp/pull/29963
10. **#29435** – CUDA: prefer whole‑tile FlashAttention scheduling for efficient two‑stage kernels. https://github.com/ggml-org/llama.cpp/pull/29435

Additional notable: #29928 (GLM5Next MTP), #29600 (Prism Bonsai 2 27B runtime), #29869 (Metal few‑row MMA for spec decoding).

## 5. Feature Request Trends
From enhancement‑tagged issues and PRs, the community is pulling toward:
- **Richer server APIs**: HTTP MCP server (#29951), multi‑modal `/v1/rerank` (#25921), improved progress reporting (#24822), `multi_logit_bias` (#29893).
- **Speculative decoding smarts**: early‑exit via Shannon entropy (#29875), n‑gram/MTP fixes, Metal/Lightning indexer tiling.
- **Broader hardware support**: arm64 Windows + CUDA builds (#25030), Vulkan+RPC multi‑node loading (#29932), SYCL/ROCm stability.
- **Memory‑efficient loading**: MoE host‑RAM caches (#29887, #29963), activation‑based imatrix (#14891), KV‑cache persistence for vision/hybrid (#19466, #28194).
- **Auth & UX**: Hugging Face token flow fix (#29854).

## 6. Developer Pain Points
- **Backend correctness gaps**: HIP/ROCm producing corrupted output vs Vulkan (#27579), Metal garbage at `-ngl>0` (#25518), Snapdragon unpack8 corruption (#28290).
- **Concurrency & races**: draft‑mtp async copy race (#27572), router scheduler cold‑start race (#28774), slot‑restore blocking prompt cache (#28276), SIGTERM ignore on RPC (#29933).
- **KV‑cache / slot management**: save/restore not working for vision or hybrid models (#19466, #28194), requiring manual workarounds.
- **Performance regressions**: Vulkan RDNA4 prefill drop (#29892), Intel MoE prefill regression (#29936), SYCL long load (#25423).
- **Build/test friction**: Vulkan test undeclared identifiers (#29909), Windows LLVM Ninja config (#29959), CI permission defaults (#29992).
- **Quantization edge cases**: non‑256‑multiple rows fallback sub‑optimal (#27322), ternary/PTQ additions still maturing.

*Digest generated from github.com/ggerganov/llama.cpp public event data for 2026‑10‑05.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*