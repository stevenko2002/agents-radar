# AI CLI Tools Community Digest 2026-10-12

> Generated: 2026-10-11 22:15 UTC | Tools covered: 12

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



### Today's Highlights

*   **OpenCode v1.19.0 Released**: OpenCode released v1.19.0, introducing `opencode upgrade --major` for migration to OpenCode 2, a new `/update` TUI command, and fixes for OpenAI’s `ultrafast` service tier and PTY connection validation. [Link](https://github.com/anomalyco/opencode/releases/tag/v1.19.0)
*   **Qwen Code v0.25.1 Released**: Qwen Code released v0.25.1 across CLI, Desktop, and TypeScript SDK v0.1.19, focusing on managed-agent robustness, Java SDK managed runtime, and diagnostics preservation in session creation. [Link](https://github.com/QwenLM/qwen-code/releases/tag/v0.25.1)
*   **Ollama v0.40.3 Released**: Ollama shipped v0.40.3, removing spurious warnings from `ollama launch claude` and `ollama launch codex` and pausing background model behavior. [Link](https://github.com/ollama/ollama/releases/tag/v0.40.3)
*   **llama.cpp Builds b11553–b11559 Shipped**: llama.cpp released seven builds featuring OpenCL flash-attention improvements (dk512 for Gemma-4, dk64 for gpt-oss-20b), Vulkan `mul_mat_id` deduplication, and component tests for the server. [Link](https://github.com/ggml-org/llama.cpp/releases/tag/b11559)
*   **Pi Added Native Linux Package Builds and Session Write Coalescing**: Pi merged PRs adding native Linux package builds (.deb and .rpm) to the release pipeline and coalescing session-JSONL write syscalls to reduce I/O pressure during high-turn-rate sessions. [Link](https://github.com/earendil-works/pi/pull/10784)
*   **Claude Code Synced Security Guidance and Aligned Code-Review Docs**: Claude Code merged PR #101131 syncing the repo's bundled `security-guidance` to version 2.0.13 from `claude-plugins-official`, and PR #79150 aligning the `code-review` README with the current validation-based command pipeline. [Link](https://github.com/anthropics/claude-code/pull/101131)
*   **Gemini CLI Closed Performance PRs and Opened Correctness Fixes**: Gemini CLI saw a batch of performance-focused PRs (history reconstruction, snapshot lookups, transcript indexing) move to closed status, while two new correctness fixes for ACP session replay and VS Code companion disposal opened. [Link](https://github.com/google-gemini/gemini-cli/pull/29708)
*   **ComfyUI Merged Asset Scan and Server Caching PRs**: ComfyUI merged multiple PRs targeting asset-scan performance on slow network shares, server-side caching with ETag revalidation, and partner-node sign-in token renewal to avoid expiration during long jobs. [Link](https://github.com/Comfy-Org/ComfyUI/pull/16962)

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills Community Highlights
*anthropics/skills · data as of 2026-10-12*

> **Data note:** PR comment counts are reported as `undefined` in the source data, so the PR ranking below reflects the repository's stated sort order (by comments/attention) rather than verified counts. Issue comment counts are intact.

---

## 1. Top Skills Ranking

### 1. `mcp-builder` — MCP v2 compatibility fix *(PR #1742)*
[Link](https://github.com/anthropics/skills/pull/1742) · Kuldeeep18 · Open · Fixes #1668
Bridges a breaking change in `mcp>=2.0.0` where `streamablehttp_client` was renamed `streamable_http_client` and custom HTTP headers moved to `create_mcp_http_client` / `http_client`. Without this, the MCP builder skill cannot connect to modern MCP servers. High-priority correctness fix for a core skill.

### 2. `skill-creator` — trigger eval isolation & runtime robustness *(PR #1298)*
[Link](https://github.com/anthropics/skills/pull/1298) · MartinCajiao · Open (since 2026-06-10)
Addresses false negatives in trigger evaluation: per-worker command probes competing, `select()` failing on Windows subprocess pipes, unrelated tools aborting scans, and runtime failures being misclassified as non-triggers. Long-lived PR targeting the skill-creator's eval harness reliability.

### 3. `proofcore-contract-auditor` — Web3 smart contract notarization *(PR #1771)*
[Link](https://github.com/anthropics/skills/pull/1771) · ProofCore-Protocol · Open
New skill for Web3 developers: automated static analysis of Solidity/Rust contracts with cryptographic audit proofs anchored to the public TON Blockchain via ProofCore's zero-storage Merkle protocol. Represents the ecosystem's first blockchain-native skill.

### 4. `docx` — orphaned comment detection *(PR #1734)*
[Link](https://github.com/anthropics/skills/pull/1734) · rohitjain25 · Open
Adds detection of orphaned Word comments — comments in DOCX files that are detached from their anchor context, a common quality issue in AI-generated documents.

### 5. `md2video-audio` — Markdown → MP4 with voiceover *(PR #1703)*
[Link](https://github.com/anthropics/skills/pull/1703) · 70v-Yoyo · Open
Zero-cost skill compiling Markdown into presentation slides (via Marp) and rendering them as professional MP4 videos with realistic human-like voiceovers. A strong example of multimodal content generation.

### 6. `notion-spec-to-implementation` + `quantitative-resume-auditor` *(PR #1245)*
[Link](https://github.com/anthropics/skills/pull/1245) · mrdesouzaphd-cmyk · Open
Dual-skill submission: (a) transforms product/tech specs from Notion into concrete implementation tasks with acceptance criteria and progress tracking; (b) audits quantitative resumes against measurable impact standards.

### 7. `skill-creator` — eval viewer security hardening *(PR #1961)*
[Link](https://github.com/anthropics/skills/pull/1961) · Joncik91 · Open (updated 2026-10-11)
Hardens the eval viewer's `generate_review.py` + `viewer.html` against three attack vectors: script breakout (JSON embedded in HTML), DNS rebinding, and cross-site POST. The viewer renders untrusted model-written eval output, so this is a genuine trust-boundary fix.

### 8. `skill-creator` — direct script execution *(PR #1681)*
[Link](https://github.com/anthropics/skills/pull/1681) · Kuldeeep18 · Open
Fixes `ModuleNotFoundError` when running `package_skill.py` standalone and updates outdated docstring/CLI references. Same author as #1742 — Kuldeeep18 is the most active fix contributor in this cycle.

---

## 2. Community Demand Trends (from Issues)

| Trend | Signal | Key Issues |
|---|---|---|
| **Security & trust boundaries** | 🔴 Highest urgency — 44 comments on a single issue | [#492](https://github.com/anthropics/skills/issues/492) (community skills impersonating `anthropic/` namespace), [#1394](https://github.com/anthropics/skills/issues/1394) (eval-viewer XSS), [#1175](https://github.com/anthropics/skills/issues/1175) (SharePoint trust boundary) |
| **Skill sharing & distribution** | 🟠 Strong demand — 8👍 | [#228](https://github.com/anthropics/skills/issues/228) (org-wide skill sharing in Claude.ai), [#189](https://github.com/anthropics/skills/issues/189) (duplicate skills across plugins) |
| **Skill quality & eval reliability** | 🟠 Active bug cluster — 5+ issues | [#556](https://github.com/anthropics/skills/issues/556) (0% trigger rate), [#1352](https://github.com/anthropics/skills/issues/1352) (parallel worker UUID mismatch), [#1383](https://github.com/anthropics/skills/issues/1383) (silent benchmark failures), [#1390](https://github.com/anthropics/skills/issues/1390) (mcp-builder eval scores 0/N) |
| **Agent memory & state management** | 🟡 Emerging proposal | [#1329](https://github.com/anthropics/skills/issues/1329) (`compact-memory` skill for symbolic agent state) |
| **Governance & safety patterns** | 🟡 Niche but thoughtful | [#412](https://github.com/anthropics/skills/issues/412) (agent-governance skill), [#1385](https://github.com/anthropics/skills/issues/1385) (reasoning quality gate pipeline) |
| **Context window efficiency** | 🟡 Infrastructure pain | [#1487](https://github.com/anthropics/skills/issues/1487) (`claude-api` skill injecting ~156k tokens) |
| **Skill UX / discoverability** | 🟡 Frustration signal | [#62](https://github.com/anthropics/skills/issues/62) (skills disappearing), [#202](https://github.com/anthropics/skills/issues/202) (skill-creator reads like docs, not an operational skill) |

**Top takeaway:** The community is simultaneously (a) demanding stronger security guarantees around skill provenance and execution, and (b) hitting hard reliability limits in the skill evaluation tooling — the eval harness itself has become a bottleneck.

---

## 3. High-Potential Pending Skills

All PRs below are **open, recently updated, and address active issue threads** — strong candidates for near-term merge:

| Skill / Fix | PR | Why it's pending-ready |
|---|---|---|
| `skill-creator` eval viewer hardening | [#1961](https://github.com/anthropics/skills/pull/1961) | Addresses live security issues (#1394); updated Oct 11 — most recently touched PR in the set |
| `mcp-builder` v2 compatibility | [#1742](https://github.com/anthropics/skills/pull/1742) | Blocks modern MCP adoption; fixes a concrete breaking change; author Kuldeeep18 is a repeat contributor |
| `webapp-testing` — `shell=True` removal | [#1980](https://github.com/anthropics/skills/pull/1980) | CWE-78 command injection fix; small, surgical diff |
| `webapp-testing` — textarea/select discovery | [#1976](https://github.com/anthropics/skills/pull/1976) | Fixes #1891; paired with #1977 (`algorithmic-art` wrapAround fix, #1897) — same author pushing a batch |
| `skill-creator` standalone execution | [#1681](https://github.com/anthropics/skills/pull/1681) | Removes friction for skill packaging; same author as #1742 |
| `claude-api` dead URL cleanup | [#1730](https://github.com/anthropics/skills/pull/1730) | Verified HTTP 200 replacements; low-risk doc fix |
| `docx` LibreOffice timeout handling | [#1792](https://github.com/anthropics/skills/pull/1792) | Converts silent timeout failures into explicit errors; correctness improvement |

---

## 4. Skills Ecosystem Insight

The community's most concentrated demand is **trustworthy skill distribution and evaluation** — the twin problems of "is this skill safe/official?" (namespace impersonation, eval-viewer XSS, command injection) and "does this skill actually work?" (0% trigger rates, fabricated eval errors, silent benchmark failures) dominate both the issue and PR queues, signaling that the ecosystem is outgrowing its ad-hoc quality and provenance mechanisms.

---



# Claude Code Community Digest — 2026-10-12

---

## 1. Today's Highlights

No new releases in the past 24 hours, but the issue tracker shows sustained activity around platform compatibility (ARM64 Cowork), background agent/daemon reliability, and a wave of GitHub integration and safety-classifier bug reports. The most-engaged issue (#50674, 44 comments) concerns Cowork failing on Snapdragon X ARM64 devices despite passing readiness checks.

---

## 2. Releases

*None in the last 24 hours.*

---

## 3. Hot Issues

**#50674 — Cowork fails on ARM64 (Snapdragon X) despite passing readiness check** [bug, open, stale]
The top-issue by engagement (44 comments, 2 👍). Users on Windows on ARM devices (Snapdragon X) report that the Cowork feature fails to start even though the pre-flight readiness check reports success. This is a critical platform-compatibility gap for the growing ARM PC segment.
→ https://github.com/anthropics/claude-code/issues/50674

**#83705 — Entering a background agent thread hangs when session is parked in AskUserQuestion** [bug, open, stale]
Opening a background agent thread from the `claude agents` view hangs indefinitely when that job is mid-turn in an `AskUserQuestion` prompt. Root cause identified as a two-axis state mismatch: the job record tracks `state` and `tempo`, but the attach guard only checks `state`, ignoring `tempo`/`block`. No workaround short of killing the terminal.
→ https://github.com/anthropics/claude-code/issues/83705

**#87393 — No native way to surface reasoning from `type: "thinking"` transcript blocks** [enhancement, open, stale]
Developers building on top of Claude Code sessions want programmatic access to the model's reasoning trace (the `thinking` blocks in the transcript). Currently there's no API or CLI flag to extract this, limiting debugging and observability for agent workflows.
→ https://github.com/anthropics/claude-code/issues/87393

**#83635 — Daemon background job wedged in `blocked` after safety-classifier API error, silently resumes 4 days later** [bug, open, stale]
A daemon-backed background job (`template: "bg"`) whose model turn was killed mid-flight by a safety-classifier rejection got stuck in `state: "blocked"` indefinitely and invisibly. Four days later the daemon silently resumed the session with no user action, delivering orphaned output and running tools on stale context. This is a serious reliability issue for long-running automated jobs.
→ https://github.com/anthropics/claude-code/issues/83635

**#83039 — Background auth daemon fails to recover from rejected proactive refresh, requires manual re-login every ~8h** [bug, open, stale]
On Max plans, the background auth daemon's proactive token refresh fails and cannot self-heal, forcing manual `claude auth login` every ~8 hours. This did not occur on Pro plans with the same setup, suggesting a plan-specific regression in the daemon's refresh logic.
→ https://github.com/anthropics/claude-code/issues/83039

**#99414 — New Project fails to boot the environment** [bug, closed]
The coordinator thread immediately hits "Session couldn't start" on new Project creation. The session recovers after several messages and toggling environment settings, indicating a fragile initialization path for fresh workspaces.
→ https://github.com/anthropics/claude-code/issues/99414

**#99496 — High token consumption with Claude 3.5 Sonnet on low reasoning settings** [bug, closed]
Token consumption remains high even when using Sonnet 5.5 with low reasoning settings. Users on macOS report unexpected overhead, suggesting the reasoning-budget toggle may not be effectively reducing token usage in all contexts.
→ https://github.com/anthropics/claude-code/issues/99496

**#99437 — File renamed without user permission during removal request** [bug, closed]
A user asked to remove a file; Claude renamed it instead without requesting permission. This is a permissions-model gap — the agent took an unexpected action (rename) when the user's intent was removal, bypassing the permission prompt.
→ https://github.com/anthropics/claude-code/issues/99437

**#99462 — Code obfuscation requests incorrectly flagged as policy violation** [bug, closed]
Requests to obfuscate code are being incorrectly flagged as policy violations. This is a false positive in the safety classifier that blocks legitimate refactoring/obfuscation workflows.
→ https://github.com/anthropics/claude-code/issues/99462

**#100489 — Deleting chats from sidebar permanently erases all-time usage stats and heatmap history** [bug, closed]
Deleting a chat from the sidebar also wipes the desktop app's home stats widget data (all-time usage stats and heatmap). This is likely unintended data loss — chat deletion should not cascade to aggregate usage statistics.
→ https://github.com/anthropics/claude-code/issues/100489

---

## 4. Key PR Progress

**#79150 — docs: align code-review README with the current validation-based command** [open]
Codeturion's PR updates the `code-review` README to reflect the actual validation-based command pipeline, removing references to a git-blame/history agent, a 0–100 confidence scoring system with an 80 threshold, and a "Filter out issues with a score less than 80" configuration line that no longer exist. This closes a documentation drift gap.
→ https://github.com/anthropics/claude-code/pull/79150

**#101131 — security-guidance: sync with claude-plugins-official (2.0.13)** [closed]
mhegazy's PR syncs the repo's bundled `security-guidance` from version 2.0.0 (with a stale marketplace entry at 1.0.0 describing the original reminder hook) to the current 2.0.13 from `claude-plugins-official`. This ensures users installing from the marketplace get a version with all recent security guidance updates.
→ https://github.com/anthropics/claude-code/pull/101131

---

## 5. Feature Request Trends

Distilling from the open issues, the most-requested feature directions are:

- **Reasoning trace exposure (#87393):** Native API/CLI support for surfacing `thinking` transcript blocks — critical for debugging, observability, and building on top of session transcripts.
- **Background agent state management (#83705, #83635, #83039):** More robust attach-guard logic (tracking `tempo`/`block` axes, not just `state`), daemon self-healing after API errors, and resilient auth-token refresh that doesn't require manual re-login.
- **GitHub integration reliability:** A cluster of closed issues (#99521, #99501, #99486, #99460, #99459, #99451, #99440, #99430, #100469) report connector failures, issue-creation form glitches, and connection errors — pointing to a need for more robust, well-tested GitHub connector flows.

---

## 6. Developer Pain Points

Recurring frustrations across the issue set:

- **Safety-classifier false positives:** Multiple reports (#99497, #99462, #99464, #99510, #83635) describe sessions being flagged or blocked for legitimate activities (code obfuscation, security audits, cyber verification workflows). The classifier appears overly aggressive and disruptive to normal development workflows.
- **GitHub integration instability:** At least 9 issues in the last 24h center on GitHub connector failures — connection errors, issue-creation forms closing immediately, and generic "not working" reports. This is clearly a pain point for users relying on the GitHub integration.
- **Background agent/daemon reliability:** Three separate open issues (#83705, #83635, #83039) describe daemon and background-agent failures that require manual intervention (killing terminals, re-logging in) or result in silent, invisible failures with stale context. For automated/long-running workflows, this is a significant trust issue.
- **Permission and action mismatches (#99437):** Agents taking unexpected actions (rename vs. remove) without permission prompts undermines user trust in the tool's permission model.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



# OpenAI Codex Community Digest — 2026-10-12

## 1. Today's Highlights
The community is actively battling several high-impact regressions, particularly surrounding Windows desktop application stability, sandbox configurations, and local task execution continuity. On the positive side, a heavy wave of automated maintenance and TUI enhancement pull requests successfully merged, focusing heavily on terminal rendering simplifications, robust shutdown sequences, and improved configuration interfaces.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Hot Issues
Here are 10 noteworthy issues shaping the current developer discussion:

*   **[Windows Sandbox Setup Sharing Violation](https://github.com/openai/codex/issues/51601) (`#51601`)** — *122 comments, 31 👍*  
    **Why it matters:** Upgrading to Windows app version `26.1002.51308` completely breaks command execution due to a sharing violation when the sandbox validates its own active runtime. This is a critical blocker preventing Windows users from running local commands.
*   **[Windows Dots CUA Launcher Failure](https://github.com/openai/codex/issues/

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-10-12

## 1. Today's Highlights

No new releases landed in the last 24 hours, but issue activity was dominated by a large maintainer triage sweep across agent, hooks, and platform workstreams. The dominant theme remains **subagent maturity**: reliability bugs (false success on `MAX_TURNS`, Wayland browser failures, ignored `settings.json` overrides) sit alongside feature epics for subagent hooks, recursion, and trajectory visibility. On the PR side, a batch of performance-focused PRs (history reconstruction, snapshot lookups, transcript indexing) moved to closed status, while two new correctness fixes for ACP session replay and VS Code companion disposal opened.

## 2. Releases

No new releases in the last 24 hours. The only version-related activity is PR #28781, an automated nightly bump to `0.56.0-nightly.20260812.g5024443c7` (https://github.com/google-gemini/gemini-cli/pull/28781).

## 3. Hot Issues

1. **[#3132] [Agents] Post V1.0 Work** — 46 comments, 50 👍 (https://github.com/google-gemini/gemini-cli/issues/3132)
   The highest-engagement issue in the tracker. Proposes a reusable `SubAgent` class for LLM-driven tool orchestration, enabling tools to iteratively solve problems. The 👍 count signals strong community appetite for agent composition.

2. **[#22323] Subagent recovery after MAX_TURNS reported as GOAL success** — P1, 13 comments (https://github.com/google-gemini/gemini-cli/issues/22323)
   `codebase_investigator` reports `status: "success"` / `Termination Reason: "GOAL"` despite hitting the turn limit before doing any analysis. This is a correctness-of-signal bug: it hides interruption from callers and undermines any orchestration built on top of subagents.

3. **[#3716] Infra: Build and Tag Docker for PRs** — P2, 13 comments (https://github.com/google-gemini/gemini-cli/issues/3716)
   Long-running infra work to enable seamless sandboxed-environment testing per PR, building on PR #1310. Slow-burning but foundational for contributor velocity.

4. **[#10673] Flicker-free robust terminal rendering** — P2, 9 comments (https://github.com/google-gemini/gemini-cli/issues/10673)
   Covers alternate-buffer toggling, backbuffer correctness, and Ink static performance. Terminal rendering quality remains a top UX complaint area, with a companion resize issue (#21924).

5. **[#15269] Missing Subagent Hook Events** — P2, 8 comments (https://github.com/google-gemini/gemini-cli/issues/15269)
   Requests `BeforeSubAgent`/`AfterSubAgent` (or `SubAgentStart`/`SubAgentEnd`) hooks for lifecycle parity with the main agent. Directly relevant to anyone building automation on hooks.

6. **[#22745] Assess impact of AST-aware file reads, search, and mapping** — P2, 7 comments (https://github.com/google-gemini/gemini-cli/issues/22745)
   Epic investigating whether AST-aware tools reduce misaligned reads and token noise. A concrete lever for improving agent efficiency rather than just capability.

7. **[#21968] Gemini does not use skills and sub-agents enough** — P2, 7 comments (https://github.com/google-gemini/gemini-cli/issues/21968)
   Anecdotal but widely resonant: the model won't invoke custom skills/subagents unless explicitly told. Speaks to the gap between *having* agent primitives and the model *choosing* them.

8. **[#21983] browser subagent fails in Wayland** — P1, 4 comments, 1 👍 (https://github.com/google-gemini/gemini-cli/issues/21983)
   Browser subagent terminates with `GOAL` reason but fails on Wayland. Linux desktop users are effectively blocked on the browser agent path.

9. **[#24246] 400 error with >128 tools** — P2, 3 comments (https://github.com/google-gemini/gemini-cli/issues/24246)
   The CLI hits a 400 when too many tools are in scope. As MCP servers and tool counts grow, tool-scoping intelligence becomes a scaling requirement.

10. **[#22672] Agent should stop/discourage destructive behavior** — P2, 3 comments, 1 👍 (https://github.com/google-gemini/gemini-cli/issues/22672)
    The model occasionally reaches for `git reset`/`--force` when safer alternatives exist. A safety-and-trust issue with implications for production use.

*Also worth tracking:* **[#22186] get-shit-done output hook causes crash** (P1) (https://github.com/google-gemini/gemini-cli/issues/22186) and **[#12244] Robust Observability via OpenTelemetry** epic (https://github.com/google-gemini/gemini-cli/issues/12244).

## 4. Key PR Progress

1. **[#29709] fix(vscode-ide-companion): track all activate() disposables** — OPEN, P2 (https://github.com/google-gemini/gemini-cli/pull/29709)
   Fixes #27790. Two registrations were accidentally wrapped as comma expressions, so only the last disposable was tracked — a real leak in the VS Code companion extension.

2. **[#29708] fix(acp): finish session/load history replay before responding** — OPEN, P2 (https://github.com/google-gemini/gemini-cli/pull/29708)
   ACP `session/load` responded before replay finished, causing replayed `session/update` notifications to interleave with the next prompt. Aligns behavior with the ACP spec.

3. **[#29621] fix(core): preserve subagent multimodal tool response parts** — OPEN (https://github.com/google-gemini/gemini-cli/pull/29621)
   Image parts emitted as siblings of a function response were being discarded when a local subagent fed tool results back to the model. Important for multimodal agent workflows.

4. **[#29622] fix(core): bound tildeifyPath to path segments** — OPEN, P2 (https://github.com/google-gemini/gemini-cli/pull/29622)
   Stops sibling directories sharing the home prefix (e.g. `/home/user2`) from rendering as `~2`. Small but user-visible path display correctness.

5. **[#29510] fix(editor): harden Windows subprocess argument quoting** — CLOSED, P2 (https://github.com/google-gemini/gemini-cli/pull/29510)
   Adds a `quoteCmdArg` helper for `shell: true` invocations, closing a command-injection vector in `packages/core/src/utils/editor.ts`. Security-relevant.

6. **[#29517] perf(core): linearize array reconstruction in truncateHistoryToBudget** — CLOSED (https://github.com/google-gemini/gemini-cli/pull/29517)
   Replaces per-part `unshift()` with linear reconstruction in `chatCompressionService.ts`, preserving newest-first budget priority.

7. **[#29512] linearize chat compression history reconstruction** — CLOSED (https://github.com/google-gemini/gemini-cli/pull/29512)
   `push()` + final reversal instead of repeated `unshift()`: benchmarked at 5.01 ms vs 18.97 ms for 10,000 mixed messages.

8. **[#29515] linearize state snapshot ID lookups** — CLOSED, P3 (https://github.com/google-gemini/gemini-cli/pull/29515)
   Swaps linear scans for a `Set` in snapshot paths — reported 291.95 ms → 10.26 ms on a 10,000-target synthetic benchmark, with snapshot IDs and node order unchanged.

9. **[#29516] cache transcript turn indexes** — CLOSED, P3 (https://github.com/google-gemini/gemini-cli/pull/29516)
   Replaces per-node `indexOf()` with a `Map` cache: 414.20 ms → 17.91 ms on 10,000 text nodes, formatting output unchanged.

10. **[#28781] chore/release: bump to 0.56.0-nightly.20260812.g5024443c7** — OPEN, Stale (https://github.com/google-gemini/gemini-cli/pull/28781)
    Automated nightly version bump; note the `status/need-issue` flag and staleness.

## 5. Feature Request Trends

- **Subagent lifecycle & composition** — Hook events for subagents (#15269), recursive subagent delegation (#15179), trajectory visibility via `/chat share` (#22598), and the `SubAgent` class proposal (#3132). This is the single strongest theme.
- **Agent self-awareness & tool efficiency** — AST-aware reads/search/mapping (#22745, #22746), smarter tool scoping to avoid the >128-tool 400 error (#24246), and accurate self-description of flags/hotkeys (#21432).
- **Observability & enterprise controls** — OpenTelemetry epic (#12244), enterprise-configurable hooks (#15462), and default hook sandboxing (#15272).
- **Browser agent resilience** — Session takeover and lock recovery (#22232) plus the `settings.json` override bug (#22267).
- **Terminal rendering quality** — Flicker-free rendering (#10673) and high-performance resize behavior (#21924).
- **CI/CD & release confidence** — Docker builds/tagging per PR (#3716), bundling for Windows performance (#10168), and a full CI/CD security review (#14540).

## 6. Developer Pain Points

1. **Subagent status is untrustworthy.** Reporting `GOAL` success after hitting `MAX_TURNS` (#22323) makes subagent output unsafe to automate against.
2. **The model under-uses skills and subagents.** Users must explicitly instruct invocation (#21968), negating much of the value of defining them.
3. **Configuration is silently ignored.** The Browser Agent bypasses `settings.json` overrides such as `maxTurns` (#22267), eroding trust in config as a control surface.
4. **Platform-specific breakage.** Wayland browser subagent failures (#21983) and Windows install/run performance (#10168) create hard blockers for Linux and Windows users.
5. **Destructive command risk.** Occasional `git reset`/`--force` usage (#22672) and stray temp scripts written across directories (#23571) create cleanup overhead and safety concerns.
6. **Tool-count scaling limits.** The 400 error above ~128 tools (#24246) becomes acute as MCP adoption grows.
7. **Hooks ecosystem friction.** Naming incompatibilities with Claude Code (`compress` vs `compact`, #14724), an untriggered `SessionEndReason.Logout` (#14722), and a hook-induced crash (#22186) show the hooks surface still needs hardening.
8. **Terminal UX polish.** Persistent flicker and resize redraw problems (#10673, #21924) remain visible, high-frequency complaints.
9. **Escaping edge cases.** Incorrect `\n` handling (#22466) and path-prefix display bugs (#29622) indicate naive string logic in core utilities.
10. **Debugging subagents is hard.** `/bug` reports omit subagent context entirely (#21763), making issues in the agent path difficult to triage.

---
*Digest generated from github.com/google-gemini/gemini-cli issue and PR data updated within the last 24 hours. No releases occurred in this window.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-10-12

Source: [github.com/github/copilot-cli](https://github.com/github/copilot-cli)

## 1. Today's Highlights
No new releases or pull requests landed in the last 24 hours, while 23 issues were updated — 7 closed and 16 open, including 4 new triage items. The day’s closures resolve several long-standing terminal-rendering, session-permission, and configuration bugs, while new reports focus on ACP parity, continuation failures, and keyboard/input conflicts. Community demand remains strongest for permanent context-window visibility and more reliable Windows, ACP, and MCP behavior.

## 2. Releases
No new releases in the last 24 hours.

## 3. Hot Issues
1. **#1953 [OPEN] Always visible context window status** — Top-voted issue in the set with **11 👍** and 2 comments. Developers want persistent context usage in the UI to avoid degraded model performance near the context limit.  
   https://github.com/github/copilot-cli/issues/1953

2. **#3755 [CLOSED] Reasoning/thinking display garbles streamed text with duplicated overlapping chunks** — 6 comments, 2 👍. A core UX bug in live reasoning output; closure suggests a terminal-rendering fix has been accepted.  
   https://github.com/github/copilot-cli/issues/3755

3. **#3573 [CLOSED] Bell does not work anymore even with `"bell": true`** — 3 comments. Configuration setting was ignored in v1.0.55; relevant to terminal notification workflows.  
   https://github.com/github/copilot-cli/issues/3573

4. **#4469 [CLOSED] Orphaned `permission.requested` event replays on every session resume** — 2 comments. Repeated, undismissable directory-access prompts on resume were a serious session/permissions annoyance.  
   https://github.com/github/copilot-cli/issues/4469

5. **#5115 [OPEN] [triage] ACP: `/rename` reports success but doesn't rename the session** — Newly filed with 1 comment. Highlights ACP-mode command parity gaps.  
   https://github.com/github/copilot-cli/issues/5115

6. **#5116 [OPEN] [triage] Intermittent 400 internal server error on response continuation after tool output** — Newly filed, 0 comments. Multi-step sessions failing via Responses API continuation is a high-impact reliability issue.  
   https://github.com/github/copilot-cli/issues/5116

7. **#5114 [OPEN] [triage] Copilot CLI doesn't continue after hitting session limit and waiting 5 hours** — Newly filed, 0 comments. Rate-limit recovery remains confusing and blocks long-running work.  
   https://github.com/github/copilot-cli/issues/5114

8. **#5113 [OPEN] [triage] Home/End in `ask_user` answer input also scroll the timeline** — Newly filed, 0 comments. Keyboard shortcut conflict regresses expected input behavior introduced in v1.0.52.  
   https://github.com/github/copilot-cli/issues/5113

9. **#5094 [OPEN] [area:platform-windows] Desktop app 1.1.27+ on Windows: bundled git cannot be spawned** — 1 comment. “Access is denied” breaks project registration on Windows, making this a critical platform blocker.  
   https://github.com/github/copilot-cli/issues/5094

10. **#5049 [OPEN] [area:non-interactive, area:plugins] Computer Use plugin unavailable in ACP mode despite being enabled** — 1 comment. Shows ACP sessions can advertise commands without actually loading bundled plugins/MCP servers.  
    https://github.com/github/copilot-cli/issues/5049

## 4. Key PR Progress
No pull requests were updated in the last 24 hours (**0 items**). No PR features or fixes to summarize.

## 5. Feature Request Trends
- **Context and model visibility:** Permanent context-window status ([#1953](https://github.com/github/copilot-cli/issues/1953)), vision image-cap handling, and prompt-cache stability ([#5111](https://github.com/github/copilot-cli/issues/5111)).
- **Terminal UX and status reporting:** OSC 7501 program status ([#5112](https://github.com/github/copilot-cli/issues/5112)), reasoning stream rendering, bell support, Home/End behavior, and right-click copy ([#5110](https://github.com/github/copilot-cli/issues/5110)).
- **Session and permission lifecycle:** Resume-by-ID reliability ([#4889](https://github.com/github/copilot-cli/issues/4889)), orphaned permission replay ([#4469](https://github.com/github/copilot-cli/issues/4469)), session-limit continuation ([#5114](https://github.com/github/copilot-cli/issues/5114)), and ACP `/rename` ([#5115](https://github.com/github/copilot-cli/issues/5115)).
- **Protocol and integration parity:** ACP plugin availability ([#5049](https://github.com/github/copilot-cli/issues/5049)), MCP OAuth issuer validation ([#5082](https://github.com/github/copilot-cli/issues/5082)), and MCP protocol/token-refresh behavior ([#5079](https://github.com/github/copilot-cli/issues/5079)).
- **Windows, installation, and enterprise polish:** WinGet upgrade paths ([#5096](https://github.com/github/copilot-cli/issues/5096)), long-path permission failures ([#5095](https://github.com/github/copilot-cli/issues/5095)), bundled git spawning ([#5094](https://github.com/github/copilot-cli/issues/5094)), and managed policy refresh ([#5109](https://github.com/github/copilot-cli/issues/5109)).

## 6. Developer Pain Points
- **Terminal rendering and input regressions remain frequent:** duplicated reasoning text, missing bell, Home/End scroll conflicts, and copy failures continue to disrupt daily CLI use.
- **Session state and permissions are brittle:** orphaned permission prompts replay on resume, resume-by-ID fails, and session-limit continuation does not reliably recover.
- **Windows and installation paths need attention:** bundled git spawn failures, WinGet alias/update-record mismatches, and long-path permission denials create platform-specific blockers.
- **MCP/ACP/enterprise auth integration is a growing friction area:** issuer mismatches, plugin unavailability in ACP, token rotation reuse, and managed policy refresh failures are recurring themes.
- **Model/capability mismatches confuse users:** subagents not inheriting the session model, image caps ignoring model capabilities, and intermittent 400/certificate errors undermine trust in multi-step workflows.
- **Lack of context-window visibility remains a top feature pain:** developers want early warning before context limits degrade output quality.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

## OpenCode Community Digest — 2026-10-12

### Today's Highlights
OpenCode v1.19.0 shipped, introducing `opencode upgrade --major` for migration to OpenCode 2, a new `/update` TUI command, and fixes for OpenAI’s `ultrafast` service tier and PTY connection validation. Community attention remains focused on Windows‑specific upgrade and stability issues, reasoning leakage from models, and provider reliability, with a surge of v2 regression fixes landing in the last 24 hours.

### Releases
**v1.19.0** — [Release](https://github.com/anomalyco/opencode/releases/tag/v1.19.0)
- **Core Improvements:** `opencode upgrade --major` now upgrades to OpenCode 2.
- **Core Bugfixes:** Allow the OpenAI `ultrafast` service tier; validate PTY connection origins and tickets before checking PTY existence.
- **TUI Improvements:** `/update` command installs OpenCode updates directly from the TUI.

### Hot Issues
1. **[#4283](https://github.com/anomalyco/opencode/issues/4283) – Copy To Clipboard is not working** (CLOSED, 145 comments, 131 👍)  
   Long‑standing TUI clipboard failure with massive community engagement; finally closed after months of reports.

2. **[#49014](https://github.com/anomalyco/opencode/issues/49014) – Go: 5‑hour usage limit blocks all models after one model hits its own limit** (CLOSED, 18 comments)  
   A cascading usage‑limit bug that incorrectly locked all Go models once a single model reached its cap.

3. **[#52269](https://github.com/anomalyco/opencode/issues/52269) – Intermittent OpenAI Service Unavailable: upstream connection failure** (CLOSED, 16 comments, 3 👍)  
   Provider‑level instability causing repeated retries and session failures across models.

4. **[#49723](https://github.com/anomalyco/opencode/issues/49723) – [2.0] subagents: explore agent denied free tier** (OPEN, 9 comments, 1 👍)  
   Built‑in `explore` subagent fails with free‑tier accounts while identical models work in general sessions; a key v2 subagent permission bug.

5. **[#52049](https://github.com/anomalyco/opencode/issues/52049) – cli(win): 45s event‑stream idle watchdog restarts the managed service** (OPEN, 8 comments)  
   Windows v2 service is repeatedly killed and respawned, aborting in‑flight sessions and background subagents.

6. **[#54596](https://github.com/anomalyco/opencode/issues/54596) – cli: `pair --remote` fails with opentunnel.xyz service errors** (OPEN, 5 comments)  
   Remote pairing consistently fails on Windows with HTTP 525, storage unavailable, and ACME nonce errors.

7. **[#37055](https://github.com/anomalyco/opencode/issues/37055) – bug: `opencode upgrade` fails silently on Windows – binary never replaced** (CLOSED, 5 comments)  
   Windows upgrade reports success but leaves the old binary; root cause traced to a bash‑only install script.

8. **[#54519](https://github.com/anomalyco/opencode/issues/54519) – [reproduced] Home/end keys don't jump to the start/end of input** (CLOSED, 4 comments)  
   Basic readline keybindings missing in TUI, affecting text editing ergonomics.

9. **[#54513](https://github.com/anomalyco/opencode/issues/54513) – opencode continuously polls /dev/snd/timer after suspension** (CLOSED, 4 comments)  
   Resource leak pegging a CPU core after a sound‑notified session ends; fixed quickly.

10. **[#54599](https://github.com/anomalyco/opencode/issues/54599) – [reproduced] reasoning: opencode zen (big‑pickle) inline `</think>` leaks into text content** (OPEN, 3 comments)  
    Chain‑of‑thought leaks into assistant text, rendering reasoning as normal output; part of a growing cluster of reasoning‑handling bugs.

### Key PR Progress
1. **[#54612](https://github.com/anomalyco/opencode/pull/54612) – fix(core): split inline chain‑of‑thought into a reasoning part**  
   Closes #54599; separates inline `</think>` content into a proper reasoning part instead of leaking it as text.

2. **[#54630](https://github.com/anomalyco/opencode/pull/54630) – fix(app): anchor directory picker at server directory with native separators**  
   Closes #54626; fixes v2 web picker starting at OS home instead of the server’s working directory.

3. **[#54625](https://github.com/anomalyco/opencode/pull/54625) – feat(cli): support Scoop opencode2 upgrades**  
   Enables Windows users to upgrade via Scoop, addressing a long‑standing installation pain point.

4. **[#54628](https://github.com/anomalyco/opencode/pull/54628) – fix(ai): disambiguate replayed Chat tool call IDs**  
   Closes #54588; prevents duplicate tool‑call IDs in replayed chat history from causing mismatched results.

5. **[#54610](https://github.com/anomalyco/opencode/pull/54610) – fix(app): clear the composer in the batch that admits the prompt**  
   Eliminates a race where the composer clears before the prompt is actually submitted, improving UI consistency.

6. **[#52964](https://github.com/anomalyco/opencode/pull/52964) – fix(core): share fff engine per directory**  
   Fixes #50966; reduces inotify watch multiplication by sharing a single file‑indexing engine per base path.

7. **[#51422](https://github.com/anomalyco/opencode/pull/51422) – fix(core): resolve configured instructions**  
   Restores the `instructions` config resolver that was dropped in v2, closing #51341 and #51262.

8. **[#54619](https://github.com/anomalyco/opencode/pull/54619) – fix(server): reject foreign directory hints before location lookup**  
   Ports a security‑relevant fix to v2, preventing directory hints from bypassing location validation.

9. **[#54608](https://github.com/anomalyco/opencode/pull/54608) – fix(ai): detect litellm context window exceeded error**  
   Closes #44888; improves error handling when LiteLLM rejects requests for exceeding the context window.

10. **[#54633](https://github.com/anomalyco/opencode/pull/54633) – fix(app): show known palette sessions immediately**  
    Removes a 100 ms debounce delay for recently displayed sessions in the command palette, improving responsiveness.

### Feature Request Trends
- **Windows parity and installation:** Multiple issues demand reliable upgrades, native package‑manager support (Scoop, winget), and fixes for CRLF line endings, PowerShell encoding, and locked executables.
- **Reasoning handling:** Users want consistent separation of chain‑of‑thought from assistant text, proper `<think>` tag parsing, and collapsible reasoning blocks.
- **Provider reliability and configuration:** Requests for stable OpenAI/Zen access, correct usage‑limit scoping, and agent‑level settings (temperature, request body, variants) actually reaching the provider.
- **TUI/UX improvements:** Keybindings (home/end, ctrl+backtick), clipboard support, session palette responsiveness, and non‑blank error toasts.
- **Remote access and subagents:** Better `pair --remote` reliability, directory picker anchored to the server, and subagent permission fixes for free‑tier users.

### Developer Pain Points
- **Windows upgrade hell:** Silent upgrade failures, locked binaries, bash‑only installers, and lack of package‑manager integration create a frustrating update experience.
- **Reasoning leakage:** Models emitting inline `</think>` tags or missing start tags cause reasoning to appear as normal output, confusing users and requiring manual workarounds.
- **Provider cascading failures:** Usage limits and service‑unavailable errors spread across models, with unclear reset windows and inconsistent recovery.
- **Configuration not applied:** Settings like `compaction.variant`, agent‑level `request.body`, and per‑agent `temperature` are accepted by the schema but never reach the provider.
- **Resource leaks and stability:** Repeated inotify watchers, `/dev/snd/timer` polling, and Windows service restarts degrade performance and abort sessions.
- **Remote pairing friction:** OpenTunnel errors and stuck pending tunnels make `pair --remote` unreliable, especially on Windows.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



# Pi Community Digest — 2026-10-12

---

## 1. Today's Highlights

No new releases in the past 24 hours, but the issue tracker remains active with several high-impact bugs and feature requests. The most urgent item is **#4945**, an `openai-codex` connection reliability issue that has accumulated 82 comments and 35 👍, suggesting a widespread pain point for users of the Codex provider. On the PR side, the team shipped session-JSONL write coalescing, native Linux package builds, and several TUI fixes.

---

## 2. Releases

*None in the last 24 hours.*

---

## 3. Hot Issues

### 🔴 #4945 — `openai-codex` Connection Reliability Issues
**Author:** liushuaiiu | **Comments:** 82 | **👍:** 35
The `openai-codex` / `gpt-5.5` integration intermittently leaves the interactive TUI stuck on `Working...` with no streamed text, no tool call, and no visible error. The only recovery is pressing Escape, which records an aborted assistant turn. This has been reproduced repeatedly over recent days. The high comment count signals either an unresolved root cause or a difficult-to-reproduce failure mode. [View →](https://github.com/earendil-works/pi/issues/4945)

### 🔴 #10019 — Anthropic Subscription Requests Hang at :00/:30 UTC
**Author:** brianh014 | **Comments:** 8 | **👍:** 1
Sessions using an Anthropic subscription freeze periodically, with the working spinner spinning indefinitely. The reporter explicitly notes this never happened with Claude Code, suggesting a Pi-specific transport or retry issue. The :00/:30 UTC timing hints at a possible clock-based edge case (e.g., session/token boundary). [View →](https://github.com/earendil-works/pi/issues/10019)

### 🔴 #10267 — Prompt Text Contributed in `before_agent_start` Is Dropped
**Author:** mvdbos | **Comments:** 9 | **👍:** 4
When a user prompt does not start a run (background-task notification, plan-mode continue, retry, resume), any `systemPrompt` or `systemPromptOptions.section` contributed by an extension in `before_agent_start` is silently dropped. This is a correctness bug that re-bills the entire prompt and breaks extensions that rely on this hook for context injection. [View →](https://github.com/earendil-works/pi/issues/10267)

### 🟡 #9656 — Mouse Wheel Scrolls Prompt History Instead of Transcript in Fullscreen on Windows + Zellij
**Author:** lll9p | **Comments:** 6 | **👍:** 4
Mouse wheel behavior diverges when Pi runs inside Zellij on native Windows (Windows → Alacritty → Zellij → Pi). Direct terminal and Linux+tmux work correctly, isolating the issue to the multiplexer stack. Affects UX for users who rely on mouse scrolling in fullscreen mode. [View →](https://github.com/earendil-works/pi/issues/9656)

### 🟡 #10393 — Copying Text Inside Pi CLI Is Broken in xterm-Based Terminals
**Author:** theabbie | **Comments:** 6 | **👍:** 0
Text selection/copy stops working once Pi's TUI is running, even though the surrounding xterm terminal behaves normally. Reproduced in both WebPi and browser-based Pi terminals using xterm.js. This is a fundamental interaction blocker for users who work in xterm.js environments. [View →](https://github.com/earendil-works/pi/issues/10393)

### 🟡 #10656 — DashScope/Qwen 429 "insufficient_quota" Throttling Classified as Non-Retryable Billing
**Author:** bdqfork | **Comments:** 4 | **👍:** 0
Alibaba Cloud Model Studio returns HTTP 429 with code `insufficient_quota` for **transient TPS/TPM rate limiting**, not billing exhaustion. Pi's current error handler treats this as a non-retryable billing error, causing unnecessary failures. The reporter cites Alibaba's official documentation confirming the distinction. [View →](https://github.com/earendil-works/pi/issues/10656)

### 🟡 #10578 — `qwen-chat-template` Never Sends `reasoning_effort`
**Author:** HermestoAizales | **Comments:** 3 | **👍:** 0
The `thinkingFormat: "qwen-chat-template"` only emits `enable_thinking` and `preserve_thinking`. Qwen3.8 chat templates additionally read `reasoning_effort` from `chat_template_kwargs` (low/medium/xhigh, default xhigh). Locally served Qwen3.8 via vLLM is therefore stuck on the template default of `xhigh`, ignoring Pi's reasoning budget controls. [View →](https://github.com/earendil-works/pi/issues/10578)

### 🟡 #10705 — `abort()` from `agent_settled` Resolves but Deferred Continuation Still Runs
**Author:** josephvictor-li | **Comments:** 3 | **👍:** 0
In SDK 1.1.0, `session.abort()` called by a public `agent_settled` subscriber resolves successfully, but a continuation already queued by an extension still starts another HTTP provider request. This can trigger work after a host has stopped the session — a concurrency hazard for SDK consumers. [View →](https://github.com/earendil-works/pi/issues/10705)

### 🟡 #10799 — Output-Limit Stop Settles Silently (No Continuation for Unattended Agents)
**Author:** dial481 | **Comments:** 2 | **👍:** 0
When a model response hits `maxTokens` and contains no tool calls, the run settles as completed without notice or continuation. Fine for interactive sessions, but unattended/headless agents have no automatic path to resume, effectively halting progress. [View →](https://github.com/earendil-works/pi/issues/10799)

### 🟡 #10811 — `pi-durable` 1.1.0: Task Fault Retry Loop Starves Event Loop
**Author:** PhilDL | **Comments:** 1 | **👍:** 0
When the commit recording a task's fault fails without poisoning the Session, the scheduler reports the error, ends the invocation, and re-queues the same task via `queueMicrotask`. This creates a tight loop that never yields, starving the event loop. A critical reliability issue for `pi-durable` users. [View →](https://github.com/earendil-works/pi/issues/10811)

---

## 4. Key PR Progress

### ✅ #10789 — Coalesce Session-JSONL Write Syscalls
**Author:** phsb5321
Session-JSONL writes are now coalesced at the source level with zero compiler events. Initial file creation and rewrites carry every buffered entry in a single write syscall (previously one write per entry). Appends remain synchronously durable. This reduces I/O pressure during high-turn-rate sessions. [View →](https://github.com/earendil-works/pi/pull/10789)

### ✅ #10784 — Add .deb and .rpm Package Builds to Release Pipeline
**Author:** zetneteork
Adds native Linux package builds (`.deb` and `.rpm`) to the release pipeline, closing #10783. Pi is currently distributed via `curl | sh`, npm, standalone tarballs, and Nix. Debian and RPM-based systems can now install through their native package managers with proper `dpkg`/`rpm` tracking. [View →](https://github.com/earendil-works/pi/pull/10784)

### ✅ #10805 — Support Extension Session `cwd`
**Author:** mohammadraufzahed
Extensions can already create Git worktrees via `pi.exec`, but couldn't move their command session into the resulting checkout. This PR adds `cwd` to `ctx.newSession()` and `cwdOverride` to `ctx.switchSession()`, resolving relative paths from the current session cwd and rejecting missing/non-existent paths. [View →](https://github.com/earendil-works/pi/pull/10805)

### ✅ #10751 — Use pi.dev Configuration Schemas
**Author:** christianklotz
Makes the pi.dev schema endpoints the canonical `$id` values for generated configuration schemas, uses the published theme schema in built-in themes and examples, and documents the models, settings, keybindings, and theme schema URLs. Improves schema consistency and discoverability. [View →](https://github.com/earendil-works/pi/pull/10751)

### ✅ #10810 — Support Override `colorFn` in `CompactionStatusIndicator`
**Author:** Jay-Madden
Fixes #10809. When using themes that don't set `borderColor`, the embedded compaction status indicator didn't support overriding `colorFn` and falling back to the reasoning-level color. This PR adds that support and aligns the behavior with `WorkingIndicator`. [View →](https://github.com/earendil-works/pi/pull/10810)

### ✅ #10774 — Enable Kitty Images in herdr
**Author:** ogulcancelik
PR #10573 made Pi return `images: null` for herdr, which broke inline images in herdr panes (they previously fell through to the ghostty check and got kitty images, which herdr renders fine). This restores kitty graphics protocol support for herdr. [View →](https://github.com/earendil-works/pi/pull/10774)

### ✅ #10795 — Drop Images from Anthropic Error Tool Results
**Author:** aliou
Fixes #10794. Before this change, Anthropic error tool results could carry image payloads; this PR strips them out, reducing unnecessary data transfer and potential rendering issues. [View →](https://github.com/earendil-works/pi/pull/10795)

### ✅ #10813 — Preserve Client-Loaded Anthropic Tool References
**Author:** avyayv
Ensures that tool references loaded by the client (rather than server-provided) are preserved through the Anthropic API integration path, preventing tool loss during certain provider interactions. [View →](https://github.com/earendil-works/pi/pull/10813)

---

## 5. Feature Request Trends

Distilling from the open issues, the most-requested feature directions are:

| Direction | Representative Issues |
|---|---|
| **Provider-specific reasoning control** | #7553 (compaction thinking level), #10578 (Qwen `reasoning_effort`) |
| **Extension lifecycle hooks for system prompt injection** | #9432 (`session_start` append), #10267 (`before_agent_start` dropped) |
| **MCP protocol completeness** | #10274 (elicitation support) |
| **Native Linux packaging** | #10783 / #10786 / #10784 (.deb, .rpm) |
| **Classifier model extensibility** | #10791 (custom providers) |
| **Unattended/headless agent resilience** | #10799 (output-limit continuation), #10811 (fault retry loop) |
| **Terminal/multiplexer compatibility** | #9656 (Windows + Zellij mouse wheel), #10393 (xterm.js copy), #10774 (herdr kitty images) |
| **Image handling optimization** | #8617 (Codex file references instead of base64 replay) |

---

## 6. Developer Pain Points

Recurring frustrations and high-frequency requests across the issues:

1. **Provider-specific bugs without clear root cause.** Issues like #4945 (Codex hangs) and #10019 (Anthropic subscription hangs at UTC :00/:30) are hard to reproduce and have generated high engagement without resolution, suggesting either deep transport-layer issues or insufficient diagnostic tooling.

2. **Extension lifecycle gaps.** Multiple issues (#10267, #9432, #7139, #10705) revolve around extensions not receiving or preserving context at the right lifecycle moments — `before_agent_start` dropping prompts, `session_start` unable to append system context, `abort()` not preventing deferred continuations. Extensions are clearly a first-class concern, but the contract has rough edges.

3. **Terminal/multiplexer edge cases.** A cluster of issues (#9656, #10393, #10788, #10774) involve rendering or input behavior breaking inside specific terminal stacks (Zellij on Windows, xterm.js, herdr, VS Code). These are environment-specific

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

The user wants me to generate a structured digest of the Qwen Code community activity for 2026-10-12, based on the provided GitHub data. I need to follow the specific structure and style requested, acting as a technical analyst focused on AI developer tools.

Let's break down the data provided and what I need to synthesize:

**Data Analysis:**

1.  **Latest Releases (last 24h):**
    *   `v0.25.1` (Release v0.25.1)
    *   `v0.25.1-nightly.20261011.01d3e6d81a` (Nightly)
    *   `sdk-typescript-v0.1.19` (SDK TypeScript Release v0.1.19, bundles CLI 0.25.1)
    *   `desktop-v0.25.1` (Qwen Code Desktop v0.25.1)
    *   There's also mention of `sdk-typescript-v0.1.19` bundling CLI `0.25.0` in another snippet, but the main release is 0.25.1.
    *   Key changes in `v0.25.1` / Desktop: `fix(serve): preserve session creation failure diagnostics`, `feat(sdk-java): Add managed runtime`, `fix(managed-agent): connector and broker robustness`.
    *   The Android snippet mentions restoring selected text-only connection after Activity recreation.

2.  **Highlights:** (The prompt says "See the complete change list below" but the list is somewhat fragmented in the prompt. I will synthesize from the "What's Changed" sections).
    *   `v0.25.1` / `desktop-v0.25.1` / `sdk-typescript-v0.1.19` are the main releases.
    *   Fixes for managed-agent connector/broker robustness, session creation failure diagnostics, SDK TypeScript disposal, Web Shell session recap settings, and Java SDK managed runtime.

3.  **Latest Issues (Top 30 by comment count):**
    *   #12380: Managed Agent dual-path architecture proposal (52 comments). Major architectural discussion.
    *   #13004: perf(memory) bounded cooldown after no-op extraction (10 comments).
    *   #13492: XML tool-call recovery drops outer calls containing quoted tool markup (10 comments). Critical for tool-use reliability.
    *   #12444: Web Shell workspace pinning (7 comments).
    *   #13807: "ERROR 500 An unsupported generation guide was used" with macOS Foundation Models (6 comments). Specific integration bug.
    *   #13888: Workspace pinning functionality (5 comments).
    *   #13175: Web Shell keyboard shortcuts (5 comments).
    *   #13656: Expose Desktop downloads on qwen.ai (5 comments).
    *   #13709: Count PostToolUse known-future mounts at child admission (5 comments). Technical bug in multi-agent.
    *   #13924: Publish on Flathub (4 comments).
    *   #13869: Deferred review findings from PR #13737 (rewind resolve legacy turns) (4 comments).
    *   #13271: Admit foreground Shell profile for public Workspace Sessions (4 comments).
    *   #13680: Linux ripgrep binary rewritten post-link and SIGSEGVs (4 comments). Critical packaging bug.
    *   #13597: Subagent tool doesn't report error message to main agent (4 comments).
    *   #13874: Child result relay inserts stray "\n" (4 comments).
    *   #13926: Deferred review findings from PR #13601 (convergence reminder) (3 comments).
    *   #12714: Main CI failed (3 comments).
    *   #13809: Deferred from #13652 (tool result size accounting) (3 comments).
    *   #13925: Release notes duplicates PRs (3 comments).
    *   #13922: Flyway migration version check bug (3 comments).
    *   #13920: CJK teammate names collapse in sanitizeName (3 comments).
    *   #13710: MCP import from Claude configs with UTF-8 BOM fails (3 comments).
    *   #13432: Compaction server-reported context ceiling parsed then dropped (3 comments).
    *   #13595: MCP config files with UTF-8 BOM fail to load (3 comments).
    *   #13911: Web Shell auto-recap ignores setting (3 comments).
    *   #13910: MAX_INDEX_LINE_CHARS not enforced on title (3 comments).
    *   #13802: Stage F fault gates FG7 (3 comments).
    *   #13908: Web Shell 4-5 split panes exhaust HTTP connection pool (3 comments).
    *   #10684: First-class self-hosted semantic memory (3 comments).

4.  **Latest PRs (Top 20 by comment count, though comments are undefined, I'll look at recency and impact):**
    *   #13768: fix(channels/email): re-register on channel_disconnected.
    *   #13900: fix(desktop): keep desktop-latest release notes pointing at current release.
    *   #11562: fix(cli): keep one-shot system reminders out of user's own message.
    *   #13601: feat(core): add convergence reminder for read-only exploration.
    *   #9305: fix(ui): bottom-align short VP content.
    *   #13816: fix(managed-agent): hand back Workspace mount when tool turn goes recovery blocked.
    *   #13885: fix(cli): emit headless results before draining memory.
    *   #13919: fix(core): allow opting out of forced tool choice per provider.
    *   #13889: feat(managed-agent): enable H3 Monitor and background Shell gates.
    *   #13914: fix(web-shell): honor session recap settings in auto-recap trigger.
    *   #13864: fix(sdk): release reconnect transports created after disposal.
    *   #13215: fix(serve): Fit provider confirmation answers to response limit.
    *   #13314: fix(sdk-java): Close Hosted Harness review criticals.
    *   #13748: fix(acp-bridge): display declared Channel submissions.
    *   #13325: fix(managed-agent): close critical R2 review findings on #12692.
    *   #12561: feat(hooks): notify integrators when managed memories change.
    *   #13642: feat(runtime-broker): add bounded retention for terminal JDBC history.
    *   #13243: fix(cli): bound managed function-hook module evaluation.
    *   #13292: fix(ci): wait 60s before E2E build artifact download retry.
    *   #13599: feat(core): shrink tool results to headroom before auto-compaction.

**Structuring the Digest:**

1.  **Today's Highlights (2026-10-12):**
    *   Focus on the release of v0.25.1 across CLI, Desktop, and TypeScript SDK.
    *   Mention the major architectural discussions (Managed Agent dual-path) and critical bug fixes (ripgrep SIGSEGV, XML tool-call recovery).
    *   Keep it high-level but technically punchy.

2.  **Releases:**
    *   `v0.25.1` (CLI, Desktop, SDK TypeScript v0.1.19).
    *   Summarize key changes: managed runtime for Java SDK, robustness fixes for managed-agent, diagnostics preservation in session creation, and Web Shell recap fixes.
    *   Note the nightly build.

3.  **Hot Issues (Pick 10):**
    *   Need to select issues that are technically significant, affect core workflows, or represent major feature directions.
    *   *Selection:*
        1.  #12380 (Managed Agent Architecture): High comment count, core roadmap.
        2.  #13492 (XML tool-call recovery): Critical for agent tool use.
        3.  #13680 (Linux ripgrep SIGSEGV): Critical blocker for Linux desktop users.
        4.  #13807 (macOS Foundation Models 500 Error): Specific but high-impact integration issue.
        5.  #13597 (Subagent error reporting): Agent collaboration reliability.
        6.  #13908 (Web Shell connection pool exhaustion): Performance/UX for multi-pane users.
        7.  #13920 (CJK teammate names collapse): Internationalization/i18n bug in agent teams.
        8.  #13710 / #13595 (UTF-8 BOM MCP config parsing): Common config parsing bug.
        9.  #13432 (Compaction context ceiling dropped): Core memory/context management bug.
        10. #10684 (Semantic Memory): Long-standing feature request for local embeddings.
    *   Explain *why* they matter and infer community reaction (based on labels like "ready-for-human", "in-review", "need-discussion").

4.  **Key PR Progress (Pick 10):**
    *   Focus on merged or active development PRs that represent significant features or fixes.
    *   *Selection:*
        1.  #13889 (Enable H3 Monitor and background Shell gates): Major capability enablement.
        2.  #13919 (Opt out of forced tool choice): Provider flexibility.
        3.  #13601 (Convergence reminder for read-only exploration): Agent behavior guidance.
        4.  #13599 (Shrink tool results before compaction): Context management optimization.
        5.  #13816 (Hand back Workspace mount on recovery blocked): Managed agent fix.
        6.  #13914 (Web Shell recap settings): UX fix.
        7.  #13864 (SDK reconnect transport disposal): SDK stability.
        8.  #13768 (Email channel re-register on disconnect): Channel robustness.
        9.  #13314 (SDK Java Hosted Harness criticals): SDK quality.
        10. #13885 (Headless results before memory drain): CLI execution order fix.

5.  **Feature Request Trends:**
    *   Synthesize from issues like #12444/#13888 (Workspace pinning), #13175 (Web Shell shortcuts), #13656 (qwen.ai downloads), #10684 (Semantic memory), #13924 (Flathub).
    *   Trend 1: Web Shell UX enhancements (pinning, shortcuts, download visibility).
    *   Trend 2: Memory management evolution (semantic recall, bounded cooldowns, index line limits).
    *   Trend 3: Distribution and platform coverage (Flathub, qwen.ai integration).

6.  **Developer Pain Points:**
    *   Recurring themes: Configuration parsing edge cases (UTF-8 BOM), platform-specific packaging breakage (ripgrep on Linux, Foundation Models on macOS), agent communication reliability (stray newlines in child results, subagent error masking), and CI/CD/release notes automation issues.
    *   Summarize these as friction points for the developer workflow.

**Refining the Output:**
*   Ensure the tone is analytical, concise, and professional.
*   Use Markdown formatting (bolding, lists, links) to make it readable.
*   Verify that all links use the correct format (`https://github.com/QwenLM/qwen-code/issues/...` or `/pulls/...`).
*   Check dates: The digest is for 2026-10-12, based on data updated around 2026-10-11.

Let's draft the content section by section.

**Drafting Today's Highlights:**
Qwen Code releases v0.25.1 across CLI, Desktop, and TypeScript SDK, focusing on managed-agent robustness and Java SDK runtime integration. Major architectural discussions continue around the Managed Agent dual-path architecture (#12380). Critical bugs affecting Linux desktop startup (ripgrep SIGSEGV) and XML tool-call recovery are actively being addressed.

**Drafting Releases:**
*   **v0.25.1 (CLI & Desktop)**: Includes `fix(serve): preserve session creation failure diagnostics`, `feat(sdk-java): Add managed runtime`, and robustness fixes for managed-agent connectors. The Desktop release specifically addresses session creation diagnostics and includes the TypeScript SDK v0.1.19.
*   **SDK TypeScript v0.1.19**: Bundles CLI v0.25.1, focusing on SDK disposal and transport release fixes.

**Drafting Hot Issues:**
1.  **#12380 Managed Agent Dual-Path Architecture**: The most active issue (52 comments). It proposes a staged delivery system decoupling model inference from tool-environment provisioning. This is a core architectural debate for the future of multi-agent sessions.
2.  **#13492 XML Tool-Call Recovery**: Critical for agent reliability. The issue tracks the fix for quoted tool markup being dropped, ensuring complex nested tool calls don't break the agent loop.
3.  **#13680 Linux ripgrep SIGSEGV**: A high-priority P1 bug blocking Linux Desktop users. The vendored ripgrep binary is failing on startup due to post-link rewriting (RUNPATH $ORIGIN).
4.  **#13807 macOS Foundation Models 500 Error**: Users integrating the local macOS Foundation Models server as a fast model are hitting generation guide errors, indicating a compatibility gap in the local model integration layer.
5.  **#13597 Subagent Error Reporting**: Subagents failing due to time limits only return generic "execution failed" messages, preventing the main agent from adapting (e.g., increasing timeouts). Crucial for multi-agent debugging.
6.  **#13908 Web Shell Connection Pool**: Desktop split-view users with 4+ panes are hitting HTTP/1.1 connection pool exhaustion, causing "Connection lost" errors. A performance bottleneck for power users.
7.  **#13920 CJK Teammate Names Collapse**: Agent Teams spawning with Chinese/Japanese/Korean names are collapsing to empty strings due to a `sanitizeName` bug, highlighting i18n gaps in agent identity management.
8.  **#13710 & #13595 UTF-8 BOM MCP Configs**: Recurring parsing failures when importing Claude or standard MCP configs saved with a UTF-8 BOM. A common friction point for users migrating settings.
9.  **#13432 Compaction Context Ceiling**: The server-reported context ceiling is parsed but dropped, causing reactive compaction to size against inferred limits instead of actual server limits. A subtle but critical context management bug.
10. **#10684 Semantic Memory**: A long-standing feature request for first-class semantic memory (embeddings) to complement the existing keyword-based file memory. Reflects user desire for better cross-session recall.

**Drafting Key PR Progress:**
1.  **#13889 Enable H3 Monitor & Background Shell**: Enables the H3 Monitor and background Shell capabilities for real, allowing sessions to commit through production configuration.
2.  **#13919 Opt Out of Forced Tool Choice**: Adds `supportsForcedToolChoice` per model, letting OpenAI-compatible endpoints decline forced tool calls for structured outputs.
3.  **#13601 Convergence Reminder**: Adds an advisory reminder when read-only exploration hits the tool-call limit, prompting the agent to synthesize results.
4.  **#13599 Shrink Tool Results Pre-Compaction**: Dynamically shrinks tool results to the remaining headroom before auto-compaction triggers.
5.  **#13816 Workspace Mount Release**: Adds a broker-internal mount-release endpoint for managed Workspace Sessions when tool turns go recovery blocked.
6.  **#13914 Web Shell Recap Settings**: Gates the automatic Web Shell recap on the "Show Session Recap" setting, aligning web and CLI behavior.
7.  **#13864 SDK Reconnect Transport Disposal**: Ensures disposal terminal for the TypeScript SDK reconnect wrapper, preventing resource leaks.
8.  **#13768 Email Channel Re-register**: Treats `409 channel_disconnected` as a poll-level registration claim, improving email adapter robustness.
9.  **#13314 SDK Java Hosted Harness Criticals**: Resolves 11 Critical and 2 Minor findings from the post-merge review of the Java client.
10. **#13885 Headless Results Before Memory Drain**: Delivers headless terminal results before waiting for tracked managed-memory tasks, fixing execution order.

**Drafting Feature Request Trends:**
*   **Web Shell UX Enhancement**: Strong demand for workspace pinning (#12444, #13888), keyboard shortcuts (#13175), and better split-view management (#13908).
*   **Platform & Distribution Visibility**: Requests for Flathub publishing (#13924) and prominent download links on qwen.ai (#13656).
*   **Advanced Memory Management**: Moves beyond keyword search towards semantic recall (#10684) and finer control over memory extraction cadence (#13004).

**Drafting Developer Pain Points:**
*   **Configuration & Parsing Edge Cases**: Recurring issues with UTF-8 BOMs in MCP configs (#13710, #13595) suggest a need for more robust config parsing utilities.
*   **Platform-Specific Packaging Breakage**: The Linux ripgrep SIGSEGV (#13680) and macOS Foundation Models integration issues (#13807) highlight the maintenance burden of platform-specific binaries and local model integrations.
*   **Agent Communication Reliability**: Stray newlines in child results (#13874) and

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-10-12

**Scope note:** No new releases were published in the last 24h, so the Releases section is omitted. Only 8 Issues and 8 PRs were updated; the “top 10” lists below cover all available items. Links use the URLs supplied in the data.

---

## 1. Today’s Highlights

- No new releases in the last 24h. Activity is dominated by **0.10.2 release readiness**, led by maintainer PR [#6957](https://github.com/codewhale-hq/Codewhale/pull/6957) and several release-blocking bug/UX issues.
- Major themes: **background/long-running shell work visibility and control** ([#6944](https://github.com/codewhale-hq/Codewhale/issues/6944), [#6931](https://github.com/codewhale-hq/Codewhale/issues/6931)), **ChatGPT sign-in repair** ([#6925](https://github.com/codewhale-hq/Codewhale/issues/6925)), **workflow gate deadlocks** ([#6945](https://github.com/codewhale-hq/Codewhale/issues/6945)), **session resume/fork limits** ([#6955](https://github.com/codewhale-hq/Codewhale/issues/6955), [#6954](https://github.com/codewhale-hq/Codewhale/issues/6954)), and a **Windows 10 1607 startup regression** ([#6953](https://github.com/codewhale-hq/Codewhale/issues/6953)).
- Explicit community reaction remains low (mostly 👍 0, few comments), but maintainer and contributor activity is high, including flaky-test fixes, a new Runtime API trust feature, and plugin OAuth improvements.

---

## 3. Hot Issues

All 8 Issues updated in the last 24h are listed.

1. **[#6944](https://github.com/codewhale-hq/Codewhale/issues/6944) — Long-running work becomes invisible after backgrounding; Full Access blocks the one background API**  
   - **Why it matters:** Backgrounded shell work silently loses visibility, and Full Access conflicts with the API needed to manage it. This directly affects agent reliability and user trust in long tasks.  
   - **Reaction:** 1 comment; no 👍. Maintainer-authored, tagged `bug`, `ux`, `v0.10.2`.

2. **[#6925](https://github.com/codewhale-hq/Codewhale/issues/6925) — ChatGPT sign-in rejected by unsupported `originator` parameter**  
   - **Why it matters:** Installed 0.10.1 fails before login with HTTP 400 `invalid_authorize_request`. Auth breakage blocks provider usage entirely.  
   - **Reaction:** No comments or 👍. Tagged `bug`, `providers`.

3. **[#6931](https://github.com/codewhale-hq/Codewhale/issues/6931) — Every Bash/shell operation should be inspectable and stoppable**  
   - **Why it matters:** Long completed outputs collapse, running searches show stale/no output, and users cannot reliably inspect or stop active work. This is a core TUI usability gap.  
   - **Reaction:** No comments or 👍. Tagged `bug`, `tui`, `ux`, `v0.10.2`.

4. **[#6933](https://github.com/codewhale-hq/Codewhale/issues/6933) — Hide native FIM on unsupported routes**  
   - **Why it matters:** Prevents unsupported or absent clients from advertising a native FIM tool, avoiding confusing or broken feature exposure. Explicit dynamic/user tools are unaffected.  
   - **Reaction:** No comments or 👍. Parent review referenced; no `bug` tag.

5. **[#6945](https://github.com/codewhale-hq/Codewhale/issues/6945) — Workflow verify gate that blocks its own role deadlocks the run**  
   - **Why it matters:** A gate with `blocks_role: "implement"` waiting on `implement` causes a deadlock instead of failing at plan admission. This wastes expensive workflow phases.  
   - **Reaction:** No comments or 👍. Tagged `bug`, `workflow-runtime`; fixed by PR [#6952](https://github.com/codewhale-hq/Codewhale/pull/6952).

6. **[#6955](https://github.com/codewhale-hq/Codewhale/issues/6955) — Saved session >8 MiB cannot be resumed or forked; refusal names no remedy**  
   - **Why it matters:** Session documents can exceed the transport bound because the journal pushes them over. Users hit a hard stop with no clear recovery path.  
   - **Reaction:** No comments or 👍. Tagged `needs-triage`.

7. **[#6954](https://github.com/codewhale-hq/Codewhale/issues/6954) — `codewhale resume` refuses sessions with a raw sub-agent handoff**  
   - **Why it matters:** The canonical acknowledgement compares Engine-restored messages with the saved document, so valid sessions can become unresumable. This undermines session durability.  
   - **Reaction:** No comments or 👍. Tagged `needs-triage`.

8. **[#6953](https://github.com/codewhale-hq/Codewhale/issues/6953) — Windows 10 1607: v0.10.1 fails to start with `DeriveCapabilitySidsFromName` (0xC0000139)**  
   - **Why it matters:** A hard startup regression after updating from v0.10.0 to v0.10.1 on Windows 10 Pro 1607. Loader dialog appears before any app logic runs.  
   - **Reaction:** No comments or 👍. Tagged `bug`, `needs-triage`; user report includes bilingual context.

---

## 4. Key PR Progress

All 8 PRs updated in the last 24h are listed.

1. **[#6957](https://github.com/codewhale-hq/Codewhale/pull/6957) — 0.10.2 readiness: green main again, then release-blocking fixes**  
   - Maintainer-authored release-readiness branch. Self-contained commits on top of `main`, covering release-blocking slices. Critical for stabilizing 0.10.2.

2. **[#6959](https://github.com/codewhale-hq/Codewhale/pull/6959) — `feat(api)`: read/write workspace project trust over Runtime API**  
   - Lets non-TUI clients (e.g., a VS Code extension) see and record project trust. Addresses silent skips for untrusted workspaces and removes terminal-only `/trust on --save`.

3. **[#6952](https://github.com/codewhale-hq/Codewhale/pull/6952) — `fix(workflow)`: reject a gate that blocks its own role at plan admission**  
   - **Closed.** Directly fixes [#6945](https://github.com/codewhale-hq/Codewhale/issues/6945) by failing early instead of deadlocking when a phase is dispatched.

4. **[#6950](https://github.com/codewhale-hq/Codewhale/pull/6950) — `feat(plugins)`: add CLI installation and in-app OAuth sign-in**  
   - **Closed.** Builds on reviewed host-managed OAuth providers. Improves plugin installation from source and removes the need for a separate terminal sign-in step.

5. **[#6958](https://github.com/codewhale-hq/Codewhale/pull/6958) — `test(sessions)`: picker search check no longer depends on temp directory name**  
   - Fixes a flaky macOS test where `TempDir` naming caused `tui_and_api_listings_agree` to fail intermittently. Tagged `contribution-gate`.

6. **[#6956](https://github.com/codewhale-hq/Codewhale/pull/6956) — `test(subagent)`: git failure during worktree removal is not a test failure**  
   - Fixes a CI flake on `ubuntu-latest` where git branch/worktree cleanup caused a false failure. Tagged `contribution-gate`.

7. **[#6393](https://github.com/codewhale-hq/Codewhale/pull/6393) — Draft: echolocation, token diet, and fork-prefix cache inheritance**  
   - Long-running design draft, not a merge candidate. Scope includes token diet, inheritance contract, and trial scaffolding. Feedback so far is positive.

8. **[#6873](https://github.com/codewhale-hq/Codewhale/pull/6873) — `chore(deps)`: security bumps 2026-10-06**  
   - Bot-authored nightly security sweep. Bumps transitive `source-map-js` 1.2.1 → 1.2.2 via `postcss@8.5.23`, fixing high-severity GHSA-68fv-2mgg-jv7q (event-loop DoS).

---

## 5. Feature Request Trends

No explicit feature-request Issues appeared in this window; the trends below are distilled from bug reports and PRs.

- **Background task lifecycle control:** Users want long-running shell/agent work to remain visible, inspectable, and stoppable after it moves to the background. Related: [#6944](https://github.com/codewhale-hq/Codewhale/issues/6944), [#6931](https://github.com/codewhale-hq/Codewhale/issues/6931).
- **Provider auth hardening:** OAuth/sign-in flows should tolerate or reject unsupported parameters cleanly rather than failing with opaque HTTP 400s. Related: [#6925](https://github.com/codewhale-hq/Codewhale/issues/6925).
- **Session resilience:** Bounded session documents, clear remedies for oversize refusals, and compatibility with raw sub-agent handoffs during resume/fork. Related: [#6955](https://github.com/codewhale-hq/Codewhale/issues/6955), [#6954](https://github.com/codewhale-hq/Codewhale/issues/6954).
- **Workflow safety at plan admission:** Gates should be validated before expensive phases run, especially self-blocking role configurations. Related: [#6945](https://github.com/codewhale-hq/Codewhale/issues/6945), [#6952](https://github.com/codewhale-hq/Codewhale/pull/6952).
- **Route-aware feature exposure:** Native tools like FIM should only advertise where the route supports them. Related: [#6933](https://github.com/codewhale-hq/Codewhale/issues/6933).
- **Cross-platform compatibility:** Older supported Windows builds should not regress at load time. Related: [#6953](https://github.com/codewhale-hq/Codewhale/issues/6953).
- **Ecosystem and API surface:** Runtime API for trust, CLI/in-app OAuth for plugins, and token-diet/cache-inheritance experiments. Related: [#6959](https://github.com/codewhale-hq/Codewhale/pull/6959), [#6950](https://github.com/codewhale-hq/Codewhale/pull/6950), [#6393](https://github.com/codewhale-hq/Codewhale/pull/6393).

---

## 6. Developer Pain Points

- **Invisible long-running work:** Backgrounded commands lose visibility, and Full Access blocks the background API needed to manage them. This is the strongest recurring UX complaint.
- **Cannot reliably inspect or stop shell operations:** Collapsed outputs, stale “running” indicators, and no clear stop path make the TUI feel unreliable for agent workflows.
- **ChatGPT sign-in is broken on 0.10.1:** HTTP 400 `invalid_authorize_request` blocks provider access before login completes.
- **Session resume/fork failures:** Oversize session documents (>8 MiB) and raw sub-agent handoffs cause refusals with no named remedy, undermining trust in saved sessions.
- **Workflow deadlocks:** A verify gate that blocks its own role kills runs late instead of failing at plan admission.
- **Windows 10 1607 startup regression:** v0.10.1 fails at load time with `DeriveCapabilitySidsFromName` (0xC0000139), forcing affected users to stay on v0.10.0.
- **Flaky tests and CI noise:** Temp-directory naming and git worktree cleanup produce intermittent failures, slowing contribution gates.
- **Hidden trust configuration:** Non-TUI clients cannot see or set project trust, leaving users silently skipping engine behavior unless they use the terminal.

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

## ComfyUI Community Digest — 2026-10-12

### Today's Highlights
No new releases. Community attention is dominated by stability and performance: a high‑engagement BSOD issue (#16246) on RTX 3050 with dynamic VRAM loading, plus multiple PRs targeting asset‑scan performance, server caching, and API token renewal. Security and longstanding bugs also resurfaced, while feature requests around checkpoint‑specific defaults gained traction.

### Releases
None.

### Hot Issues
1. **[#16246](https://github.com/Comfy-Org/ComfyUI/issues/16246) BSOD in dxgmms2.sys on 6 GB RTX 3050 since v0.35.0** — 11 comments, 3 👍. Kernel crashes linked to `comfy-aimdo` 0.5.3 dynamic VRAM loading. High engagement indicates a widespread Windows stability regression.
2. **[#12285](https://github.com/Comfy-Org/ComfyUI/issues/12285) Security: Symlink Path Traversal in /view endpoint** — 1 comment. High‑severity arbitrary file read (CWE‑59) in `server.py`; remains open and unpatched.
3. **[#16946](https://github.com/Comfy-Org/ComfyUI/issues/16946) MiniMax‑H3 freezes entire PC on RTX 3060** — 2 comments. Repeated complete‑PC freezes on Windows 11; no Python/CUDA OOM traceback, suggesting driver‑level issue.
4. **[#16916](https://github.com/Comfy-Org/ComfyUI/issues/16916) AttributeError: 'Linear' object has no attribute 'weight' in LTX‑2.3 workflow** — 2 comments. Blocks Gemma 3 text encoder in audio‑video pipelines.
5. **[#16431](https://github.com/Comfy-Org/ComfyUI/issues/16431) INT8 ConvRot fails on Turing GPUs for M=97..127** — 2 comments. Prevents INT8 YuE2 model from running on GTX 1650 despite SM 7.5 support.
6. **[#16952](https://github.com/Comfy-Org/ComfyUI/issues/16952) Duplicate in‑flight prompt IDs break heap insertion** — 1 comment. Queue bug causing `TypeError` in `heapq.heappush` under equal priorities.
7. **[#16963](https://github.com/Comfy-Org/ComfyUI/issues/16963) SAM 3D Body BVH export writes garbled rest skeleton** — 0 comments. Breaks retargeting; also fp16 hand‑refinement dtype crash.
8. **[#16961](https://github.com/Comfy-Org/ComfyUI/issues/16961) Feature: Per‑checkpoint default sampler settings** — 0 comments. Requests auto‑fill of KSampler and latent size from model metadata.
9. **[#16959](https://github.com/Comfy-Org/ComfyUI/issues/16959) Error saving setting Comfy.CustomColorPalettes: TimeoutError** — 0 comments. Startup error after a specific commit; affects UI settings persistence.
10. **[#15946](https://github.com/Comfy-Org/ComfyUI/issues/15946) Stuck on loading screen** — 16 comments, closed as stale. High community engagement despite resolution, indicating recurring user‑support friction.

### Key PR Progress
1. **[#16962](https://github.com/Comfy-Org/ComfyUI/pull/16962) perf(assets): list models with the scan walker and reuse its stats** — Optimizes model listing on slow network shares by avoiding redundant `isfile` and stat calls.
2. **[#16929](https://github.com/Comfy-Org/ComfyUI/pull/16929) Turn assets off unless `--enable-assets`, and scan the output folder again** — Changes asset system default to disabled; output folder scanning restored when enabled.
3. **[#16935](https://github.com/Comfy-Org/ComfyUI/pull/16935) feat(server): make /view responses revalidate with ETags** — Adds `Cache-Control: no-cache` and validators, enabling 304 responses for unchanged files.
4. **[#16927](https://github.com/Comfy-Org/ComfyUI/pull/16927) feat(server): downscaled JPEG previews from /view with `res=`** — Allows thumbnail generation (quality 85, longest side ≤ N), reducing bandwidth for image grids.
5. **[#16936](https://github.com/Comfy-Org/ComfyUI/pull/16936) Catalogue models before other roots in startup asset scan** — Sends `assets.seed.fast_complete` earlier, so model library populates before slow input walks finish.
6. **[#16832](https://github.com/Comfy-Org/ComfyUI/pull/16832) fix(assets): recover from corrupt `comfyui.db` at startup** — Detects malformed database and recovers instead of failing to launch with `--enable-assets`.
7. **[#16943](https://github.com/Comfy-Org/ComfyUI/pull/16943) Renew partner‑node sign‑in tokens in API nodes** — Fixes 90‑minute token expiry causing `Unauthorized` errors after queue waits or long provider jobs.
8. **[#16958](https://github.com/Comfy-Org/ComfyUI/pull/16958) fix(vae): align temporal tiles for Tiny H3** — Corrects grouped temporal layout, preventing NaNs during tiled encoding and out‑of‑range slices in decoding.
9. **[#16941](https://github.com/Comfy-Org/ComfyUI/pull/16941) Fix `fp8_e4m3fn_fast` falling back to bf16 compute with dynamic VRAM** — Ensures FP8 matmul path is taken when weight remains in file dtype on CPU.
10. **[#15335](https://github.com/Comfy-Org/ComfyUI/pull/15335) Add max and min operations to MaskComposite, and an explicit threshold** — Extends mask compositing with max/min and threshold operations, addressing #15660.

### Feature Request Trends
- **Checkpoint‑specific metadata and defaults** — Auto‑fill sampler, scheduler, steps, CFG, and resolution from model metadata (#16961).
- **Asset management robustness** — Faster scanning on network shares, database corruption recovery, and startup scan ordering (#16962, #16936, #16832).
- **Server‑side optimizations** — ETag revalidation, downscaled previews, and output folder rescanning (#16935, #16927, #16929).
- **API and auth improvements** — Renewing partner‑node tokens to avoid expiration during long jobs (#16943).
- **Security hardening** — Fixing symlink path traversal in `/view` (#12285).
- **GPU compatibility** — INT8 support on Turing GPUs (#16431) and correct FP8 behavior with dynamic VRAM (#16941).
- **Audio/video workflow fixes** — Temporal tiling for Tiny H3 VAE (#16958), paired reference audio for MiniMax (#16957), and LTX‑2.3 attribute errors (#16916).

### Developer Pain Points
- **Windows GPU stability** — Recurring BSODs (#16246) and complete‑PC freezes (#16946) with dynamic VRAM loading on RTX 3050/3060; no clear Python traceback.
- **Asset system overhead** — Slow network shares, corrupt `comfyui.db` blocking startup, and delayed model library availability.
- **Token expiration** — Partner‑node sign‑in tokens expiring after 90 minutes, causing unauthorized errors and charged jobs.
- **Legacy bugs** — Long‑standing issues like post upload/mask not working (#2112, opened 2023) remain unresolved.
- **GPU‑specific failures** — INT8 ConvRot failing on Turing for certain matrix dimensions; FP8 falling back to bf16 with dynamic VRAM.
- **Video VAE tiling** — Temporal tile misalignment causing NaNs and slice errors in Tiny H3 and similar models.
- **Startup and settings persistence** — Timeout errors saving UI settings (#16959) and loading screen hangs (#15946).

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Community Digest — 2026-10-12

## 1. Today's Highlights

Ollama shipped **v0.40.3**, a small maintenance release that removes spurious warnings from `ollama launch claude` and `ollama launch codex` and pauses background model behavior. Activity remains dominated by **Apple Silicon MLX regressions** (runner panics, SDPA kernel failures, and performance inversions) and by **tool-calling correctness** across Qwen, Gemma, and the OpenAI-compatible endpoints. Meanwhile, `jmorganca`'s llama.cpp bump to **b11521** signals upstream consolidation of decision models (`/v1/systemone`) and EmbeddingGemma 2 support.

---

## 2. Releases

### v0.40.3
- `ollama launch claude` no longer shows a warning about Claude connectors ([#18878](https://github.com/ollama/ollama/pull/18878))
- `ollama launch codex` no longer warns about service tiers ([#18879](https://github.com/ollama/ollama/pull/18879))
- Paused background model behavior (release notes truncated)

**Assessment:** A polish release focused on CLI UX noise reduction rather than runtime changes. No breaking changes indicated.

---

## 3. Hot Issues

1. **[#17778](https://github.com/ollama/ollama/issues/17778) — `no user query found in messages` (HTTP 500) on Qwen 3.8** *(52 comments, 30 👍)*
   The most-discussed issue in the window. A 205k-context prompt triggers a tool-calling loop that eventually produces a 500 during streaming. The high reaction count suggests broad reproducibility, not an edge case. Likely tied to chat-template/tool-call rendering under long context.

2. **[#18825](https://github.com/ollama/ollama/issues/18825) — `embeddinggemma-2:740m` pull fails on Linux** *(14 👍)*
   `Error: this model requires MLX support, but the MLX runtime is not available`. A model tag that hard-requires a macOS-only runtime is a packaging/distribution problem — high 👍 relative to low comment count indicates a silent, blocking failure for Linux users.

3. **[#18856](https://github.com/ollama/ollama/issues/18856) — MLX runner panic with `qwen3.6:35b-mlx` (0.40.x regression)** *(4 👍)*
   Reproducible crash where 0.35.0 works and 0.40.0/0.40.1-rc0 fail on identical workloads. Classic regression signal: a clean bisect boundary and a production workload attached.

4. **[#18944](https://github.com/ollama/ollama/issues/18944) — Tool calls break when `format: json` is set**
   `/api/chat` with `"format": "json"` makes models either inline tool calls in the response body or hallucinate. Confirms that structured-output constraints and tool-call parsing are fighting each other in the request pipeline.

5. **[#18942](https://github.com/ollama/ollama/issues/18942) — Go API silently loses numeric precision in tool-call arguments**
   `{"id":9007199254740993}` decodes as `...992`. Because the corrupted message is fed back into conversation history, errors compound across turns. A fix PR is already open ([#18941](https://github.com/ollama/ollama/pull/18941)).

6. **[#18698](https://github.com/ollama/ollama/issues/18698) — Feature request: K2 Horizon (`k2-horizon`) architecture support** *(6 👍)*
   Requests the MBZUAI IFM family (0.9B–36B MoE, Apache 2.0) with official GGUF weights already published. Well-formed request with upstream artifacts ready, making it a cheap win.

7. **[#18940](https://github.com/ollama/ollama/issues/18940) — MLX SDPA kernel panic on M2 Max (head_dim = 256)**
   `Maximum threads per threadgroup is 896 but requested 960`, hit by `qwen3.8:27b` and `gemma4:31b` during prefill. A hardware-limit violation in the compiled MLX backend — affects the newest, largest models on common Apple hardware.

8. **[#18926](https://github.com/ollama/ollama/issues/18926) — Cloud `glm-5.3-flash` stream never terminates on exit**
   Work completes and commits, but the client subprocess idles at ~0% CPU forever. A stream-termination bug on the OpenAI-compatible cloud endpoint that breaks one-shot agent harnesses.

9. **[#18948](https://github.com/ollama/ollama/issues/18948) — `timings.prompt_per_second` inflated by cache-hit ratio**
   Since 0.35.1, prompt-side rates divide the **total** prompt count by **uncached-only** time, producing misleading benchmarks. Quietly corrupts any performance telemetry built on the OpenAI-compatible `timings` block.

10. **[#13093](https://github.com/ollama/ollama/issues/13093) — Qwen models "don't see" tools when run through Goose**
    Long-running (Nov 2025 → now) report of pure hallucination when local Qwen3 models are driven by an external agent framework. Points at template/tool-schema compatibility rather than the runner itself.

**Also notable:** [#18796](https://github.com/ollama/ollama/issues/18796) (second `ollama run` hangs on RPi 5 / Debian 13), [#18349](https://github.com/ollama/ollama/issues/18349) (multi-GPU VRAM accounting mismatched device names), [#18890](https://github.com/ollama/ollama/issues/18890) (`d1-3B` / `d1-omni-600M` decision models rejected with `unsupported decision encoding`).

---

## 4. Key PR Progress

1. **[#18917](https://github.com/ollama/ollama/pull/18917) — llama.cpp → b11521 (decision models + EmbeddingGemma 2)** *(jmorganca)*
   Moves `/v1/systemone` GGUF decision models straight into llama.cpp and deletes Ollama's own llama-server scorer plus the Clef patch. Largest structural simplification in the queue; directly addresses [#18890](https://github.com/ollama/ollama/issues/18890).

2. **[#18947](https://github.com/ollama/ollama/pull/18947) — Reuse verified manifests and loaded models in inference routes** *(dhiltgen)*
   Single verified cold lookup for named manifests + runner selection, reused across generate/chat/embed/SystemOne. Reduces redundant verification work on the hot path.

3. **[#18946](https://github.com/ollama/ollama/pull/18946) — Clamp `keep_alive` durations that overflow int64** *(Fixes [#18181](https://github.com/ollama/ollama/issues/18181))*
   A very large `keep_alive` wrapped negative, and the scheduler immediately expired the runner — the exact opposite of the user's intent. Clean correctness fix.

4. **[#18945](https://github.com/ollama/ollama/pull/18945) — Preserve schema keyword parameter names in renderers** *(Fixes [#18468](https://github.com/ollama/ollama/issues/18468))*
   Gemma 4 tool parameters named after JSON Schema keywords (`type`, `properties`, etc.) were being mangled. Covers top-level, nested-object, and array-item cases.

5. **[#18941](https://github.com/ollama/ollama/pull/18941) — Preserve numeric precision in tool-call arguments** *(Fixes [#18942](https://github.com/ollama/ollama/issues/18942))*
   Stops the Go client from rounding large integers and high-precision decimals in `Client.Chat`, including in streaming callbacks.

6. **[#18939](https://github.com/ollama/ollama/pull/18939) — `OLLAMA_PARALLEL_HYBRID` for multi-slot hybrid models** *(Fixes [#18938](https://github.com/ollama/ollama/issues/18938))*
   Eleven architectures are hard-pinned to one slot regardless of `OLLAMA_NUM_PARALLEL`. Since llama-server runs them with per-sequence KV cache (`kv_unified=false`), multiple slots are actually safe — this adds an opt-in escape hatch.

7. **[#18624](https://github.com/ollama/ollama/pull/18624) — qwen3.5: tool call can open before the thinking channel closes** *(mann1x)*
   `Qwen35ParserStateCollectingThinking` tests for a *partial* tag before checking whether a *complete* `<tool_call>` is already buffered. Tool-call bodies are full of `<`, so any chunk boundary on one misroutes the parse.

8. **[#17914](https://github.com/ollama/ollama/pull/17914) — qwen3coder: tolerate dropped closing tag, stop rewriting values** *(mann1x)*
   Two defects found in long agentic sessions; affects every model using `Qwen35Parser` (which delegates here). Under long context the model drops a closing tag and the whole request fails.

9. **[#17566](https://github.com/ollama/ollama/pull/17566) — Bound thinking with a token budget, per request or per model** *(mann1x)*
   `think` is currently binary on/off. Models that loop inside their reasoning block burn the entire context and return an empty answer — Gemma 4 does this reliably. This proposes the missing control.

10. **[#17564](https://github.com/ollama/ollama/pull/17564) — Do not hand over a tool call the model did not finish writing** *(mann1x)*
    A response truncated at the token limit can emit a syntactically incomplete tool call that the server still forwards. Complements the thinking-budget work.

**Also worth tracking:** [#18289](https://github.com/ollama/ollama/pull/18289) (two tags sharing a blob but needing different runner flags), [#18281](https://github.com/ollama/ollama/pull/18281) (`Thinking` field never sent to the chat template), [#17567](https://github.com/ollama/ollama/pull/17567) (link `libdl` on glibc < 2.34), [#18937](https://github.com/ollama/ollama/pull/18937) (sidebar animation on initial load), [#18934](https://github.com/ollama/ollama/pull/18934) (docs alt-text grammar).

---

## 5. Feature Request Trends

- **New model/architecture support.** The dominant request class: **K2 Horizon** ([#18698](https://github.com/ollama/ollama/issues/18698), Apache 2.0 GGUF already available) and **LiquidAI `d1-3B` / `d1-omni-600M`** decision models ([#18890](https://github.com/ollama/ollama/issues/18890), currently rejected with `unsupported decision encoding "lfm2-d1"`). Both are small, decision-oriented, multimodal-capable families — a shift away from large chat models.
- **Granular runtime control.** Requests for a **thinking token budget** ([#17566](https://github.com/ollama/ollama/pull/17566)) and **opt-in multi-slot hybrid parallelism** ([#18939](https://github.com/ollama/ollama/pull/18939)) show users wanting per-request tuning rather than binary flags.
- **Portable, centralized configuration.** [#18925](https://github.com/ollama/ollama/issues/18925) proposes `ollama.bat` / `ollama.sh` wrappers so runtime env vars (`OLLAMA_FLASH_ATTENTION`, context length, VRAM allocation, log level) can live in a portable config instead of OS-level environment variables.
- **Reliable tool calling as a first-class contract.** Multiple open issues and PRs treat incomplete/dropped tool calls, `format: json` conflicts, and parameter-name mangling as correctness bugs, not edge cases.

---

## 6. Developer Pain Points

1. **MLX on Apple Silicon is the weakest link.** Three separate issues in one 24h window: runner panics ([#18856](https://github.com/ollama/ollama/issues/18856), [#18885](https://github.com/ollama/ollama/issues/18885)), a hardware threadgroup overflow in the SDPA kernel ([#18940](https://github.com/ollama/ollama/issues/18940)), and a counterintuitive result where **quantized decision models are slower than bf16 at prefill** ([#18833](https://github.com/ollama/ollama/issues/18833)). Version-to-version regressions (0.35.0 → 0.40.x) make pinning necessary.
2. **Tool calling is fragile under real agentic load.** Failures cluster at exactly the moments that matter: long context ([#17778](https://github.com/ollama/ollama/issues/17778)), chunk boundaries inside `<tool_call>` ([#18624](https://github.com/ollama/ollama/pull/18624)), dropped closing tags ([#17914](https://github.com/ollama/ollama/pull/17914)), token-limit truncation ([#17564](https://github.com/ollama/ollama/pull/17564)), and structured output ([#18944](https://github.com/ollama/ollama/issues/18944)).
3. **Silent data corruption.** Numeric precision loss in tool arguments ([#18942](https://github.com/ollama/ollama/issues/18942)) and inflated `prompt_per_second` timings ([#18948](https://github.com/ollama/ollama/issues/18948)) fail quietly rather than loudly — the hardest class of bug for developers to diagnose.
4. **Windows instability persists.** [#12940](https://github.com/ollama/ollama/issues/12940) (`exit status 2`, random non-responsiveness), [#13037](https://github.com/ollama/ollama/issues/13037) (`ollama run` no longer auto-starts the server since 0.12.4), and [#7288](https://github.com/ollama/ollama/issues/7288) (embedding connection resets on multi-fragment batches) span nearly two years of unresolved reports.
5. **Platform packaging mismatches.** A model tag that hard-requires MLX on Linux ([#18825](https://github.com/ollama/ollama/issues/18825)), and a FreeBSD build failure from an `int64`/`uint64` mismatch ([#18835](https://github.com/ollama/ollama/issues/18835)), both indicate the model manifest and build matrix aren't fully platform-aware.
6. **Multi-GPU and scheduler accounting drift.** [#18349](https://github.com/ollama/ollama/issues/18349) shows VRAM accounting diverging from reality because discovery device names (`CUDA1`) don't match llama-server log names (`CUDA0`).

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

# llama.cpp Community Digest — 2026-10-12

## 1. Today's Highlights

Backend work dominates the last 24 hours: OpenCL flash-attention was extended (dk512 for Gemma-4, improved dk64 for gpt-oss-20b) and hardened against Q4_K image-size limits, while Vulkan mul_mat_id deduplication was reworked. Model support continues to broaden with Prism Bonsai 2 27B landing and new ternary quantization types under discussion. On the server side, component tests were merged and a new compute-graph reallocation reporting hook was opened by the maintainer.

## 2. Releases

Seven builds shipped in the last 24h (b11553–b11559):

| Build | Change |
|---|---|
| [b11559](https://github.com/ggml-org/llama.cpp/releases/tag/b11559) | opencl: FA improvements, dk512 for Gemma-4, dk64 for gpt-oss-20b ([#30266](https://github.com/ggml-org/llama.cpp/pull/30266)) |
| [b11558](https://github.com/ggml-org/llama.cpp/releases/tag/b11558) | opencl: fallback when Q4_K weight images exceed device limits; rms_norm subgroup fix ([#30310](https://github.com/ggml-org/llama.cpp/pull/30310)) |
| [b11557](https://github.com/ggml-org/llama.cpp/releases/tag/b11557) | rpc: `GGML_RPC_DEBUG` becomes a 0–3 verbosity level with structured logs ([#29544](https://github.com/ggml-org/llama.cpp/pull/29544)) |
| [b11556](https://github.com/ggml-org/llama.cpp/releases/tag/b11556) | model: runtime support for Prism Bonsai 2 27B (Hadamard folding) ([#29600](https://github.com/ggml-org/llama.cpp/pull/29600)) |
| [b11555](https://github.com/ggml-org/llama.cpp/releases/tag/b11555) | cpu: AVX2 builds now use F16C when available ([#30270](https://github.com/ggml-org/llama.cpp/pull/30270)) |
| [b11554](https://github.com/ggml-org/llama.cpp/releases/tag/b11554) | vulkan: handle `mul_mat_id` duplicates in the prepass instead of looping ([#29998](https://github.com/ggml-org/llama.cpp/pull/29998)) |
| [b11553](https://github.com/ggml-org/llama.cpp/releases/tag/b11553) | server: add component tests ([#30312](https://github.com/ggml-org/llama.cpp/pull/30312)) |

## 3. Hot Issues

1. **[#26448 — MoE expert weights over PCIe DMA (CLOSED)](https://github.com/ggml-org/llama.cpp/issues/26448)** — Proposes keeping MoE experts in pinned host RAM and letting cuBLAS read them directly over PCIe, enabling 81GB Qwen3-235B on 8GB cards. Real RTX 4090 measurements made this the most-discussed issue (12 comments, 8 👍), though it closed as stale.
2. **[#30091 — llama-server "bad allocation" crash in long conversations](https://github.com/ggml-org/llama.cpp/issues/30091)** — Reproducible OOM-style crash on HIP/RX 9070 during extended chats. High engagement (10 comments) reflects growing concern about server memory management under sustained load.
3. **[#28726 — OpenVINO backend STATUS_ILLEGAL_INSTRUCTION (AVX-512)](https://github.com/ggml-org/llama.cpp/issues/28726)** — Core Ultra 7 265K users hit illegal-instruction faults; blocks the Intel NPU/OpenVINO path for a wide hardware class (9 comments).
4. **[#26425 — MTP retains inter-request state → non-deterministic output](https://github.com/ggml-org/llama.cpp/issues/26425)** — Qwen3.6-35B-A3B-MTP degrades across requests. MTP state correctness is now a recurring theme (see also #23335), making this a systemic concern (9 comments).
5. **[#29058 — Support Prism PQ2_0 (type 142) and PTQ1_0 (type 143)](https://github.com/ggml-org/llama.cpp/issues/29058)** — Requests GGML types for Ternary-Bonsai-2. Directly aligned with the Bonsai 2 model support merged this cycle (7 comments, 2 👍).
6. **[#26609 — CUDA illegal memory access in flash-attn path with partial expert offload](https://github.com/ggml-org/llama.cpp/issues/26609)** — Deterministic crash on second request with Qwen3.6 MoE; disappears with `-fa off`. Pairs with the MoE-offload thread above (7 comments).
7. **[#30039 — Vulkan ~45% prompt-processing regression on RDNA1](https://github.com/ggml-org/llama.cpp/issues/30039)** — Bisected between b10455 and b11429 on RX 5700 XT, TG unaffected. A clear performance regression report with a well-isolated range (6 comments).
8. **[#26239 — Gemma-4 `<unused49>` infinite generation on gfx1151](https://github.com/ggml-org/llama.cpp/issues/26239)** — HIP/Windows Strix Halo users see runaway output on long prompts; model-quality-sensitive and hardware-specific (6 comments).
9. **[#27122 — MTP triggers CUDA lockups with `--split-mode tensor`](https://github.com/ggml-org/llama.cpp/issues/27122)** — Hard GPU lockups on multi-GPU Qwen3.8-27B. Another entry in the MTP reliability cluster (6 comments).
10. **[#27148 — RAM-backed prompt cache restores unrelated conversation content](https://github.com/ggml-org/llama.cpp/issues/27148)** — `--cache-ram`/`--cache-idle-slots` can inject a finished conversation's context into a new request slot. A correctness/privacy issue for production serving (4 comments).

Honorable mentions: [#30052 RPC backend crash on DGX Spark](https://github.com/ggml-org/llama.cpp/issues/30052), [#30256 Gemma-4 json_schema allows thought channel when thinking disabled](https://github.com/ggml-org/llama.cpp/issues/30256), [#30246 K2 Horizon leaves final text in `reasoning_content`](https://github.com/ggml-org/llama.cpp/issues/30246).

## 4. Key PR Progress

1. **[#30329 — Report compute graph reallocations during inference](https://github.com/ggml-org/llama.cpp/pull/30329)** (ggerganov) — Adds `ggml_backend_sched_set_realloc_callback` to notify user code when reserved graph buffers are insufficient and must be re-reserved. Useful for diagnosing memory pressure and scheduling inefficiency.
2. **[#30351 — Vulkan: derive coopmat1 FA tile shape from the device](https://github.com/ggml-org/llama.cpp/pull/30351)** — Replaces the hardcoded 16x16x16 coopmat shape; devices exposing 8x16x16 DPAS (e.g. Intel BMG) silently fell back to `FA_SCALAR`. Likely a meaningful FA win on Intel GPUs.
3. **[#30340 — Linux ROCm/Vulkan buffer sharing via dma-bufs](https://github.com/ggml-org/llama.cpp/pull/30340)** — Enables ROCm prefill + Vulkan decode on the same buffers to combine ROCm's faster PP with Vulkan's faster TG. An ambitious cross-backend optimization.
4. **[#29963 — Pipeline parallelism with MoE experts in host RAM](https://github.com/ggml-org/llama.cpp/pull/29963)** — Currently pipeline parallelism is disabled when tensor overrides / `--cpu-moe` are used; this PR restores it, addressing the exact use case raised in #26448.
5. **[#21231 — Server: `--models-memory-margin` for dynamic unloading](https://github.com/ggml-org/llama.cpp/pull/21231)** — Lets small embedding models coexist and be evicted when a large model needs space. Long-running router feature with clear production demand.
6. **[#30331 — Load YaRN beta metadata for Laguna models](https://github.com/ggml-org/llama.cpp/pull/30331)** — Fixes a silent fallback to `yarn_beta_fast = 32` instead of the model's 64 for Laguna XS 2.1; a correctness fix for long-context behavior.
7. **[#30346 — Hexagon: add SGN op](https://github.com/ggml-org/llama.cpp/pull/30346)** — New op in the Hexagon backend, motivated by Qwen3.8-Flash-Next (`qwen4exp`); expands Qualcomm NPU coverage.
8. **[#30343 — ggml-cpu: keep FP16→FP32 LUT on x86 with F16C](https://github.com/ggml-org/llama.cpp/pull/30343)** — Fixes a token-generation slowdown introduced by #30270 (b11555) on official Windows nightlies. A fast follow-up to today's release.
9. **[#30141 — Speculative: save and restore MTP hidden state](https://github.com/ggml-org/llama.cpp/pull/30141)** — Implements `get_state`/`set_state` for MTP so `pending_h` and verification rows survive checkpoint restore. Directly targets the #26425/#27122 state bugs.
10. **[#30350 — OpenVINO: fix "Cannot get length of dynamic dimension"](https://github.com/ggml-org/llama.cpp/pull/30350)** — Corrects KV-slicing assumptions for the non-FA transposed V cache layout; relevant to the OpenVINO crash reports.

Other notable work: [#30345](https://github.com/ggml-org/llama.cpp/pull/30345) (MTP masked output row selection), [#30344](https://github.com/ggml-org/llama.cpp/pull/30344) (HIP FA tile tuning for GCN), [#30279](https://github.com/ggml-org/llama.cpp/pull/30279) (`test-backend-ops` should hard-fail on unsupported types), [#30023](https://github.com/ggml-org/llama.cpp/pull/30023) (consolidate context-state tests), [#15550](https://github.com/ggml-org/llama.cpp/pull/15550) (`--target-size`/`--target-bpw` auto quant selection), [#18359](https://github.com/ggml-org/llama.cpp/pull/18359) (NLLB-600 multilingual translation).

## 5. Feature Request Trends

- **MoE offload to host memory / direct DMA** — Multiple threads (#26448, #29963) converge on running expert weights from pinned host RAM without H2D copies, and on restoring pipeline parallelism when experts are CPU-resident.
- **New low-bit quantization formats** — #29058 requests PQ2_0/PTQ1_0 for ternary models; this aligns with the Bonsai 2 model family now being supported and with quantize tooling improvements (#15550).
- **Broader accelerator coverage** — Requests for SYCL/oneAPI detection and prebuilt installs (#27656), continued Hexagon/OpenVINO/OpenCL work, and the HIP/CUDA compile-time-hardening request (#29048).
- **Server-side memory orchestration** — Dynamic model unloading with memory margins (#21231) and safer cross-slot prompt caching (#27148) point to a maturing "server as model router" use case.
- **New model architectures** — NLLB encoder-decoder translation (#18359) and Prism Bonsai 2 (#29600) show sustained demand beyond the standard decoder-only families.

## 6. Developer Pain Points

- **MTP reliability** — The single most concentrated pain point: non-deterministic output and cross-request state leakage (#26425, #23335), CUDA lockups under tensor split (#27122), and the underlying missing state save/restore now being addressed in #30141.
- **Backend-specific crashes** — CUDA illegal memory access in the FA path (#26609), OpenVINO illegal instructions (#28726), RPC worker crashes on DGX Spark (#30052), and Vulkan `GGML_ASSERT` failures (#23737) remain fragmented across hardware.
- **Server robustness** — Long-conversation "bad allocation" (#30091), malformed tool-call arguments returning HTTP 500 instead of 4xx (#25510), mid-conversation system messages producing 500s (#27367), and prompt-cache cross-contamination (#27148) all hurt production deployments.
- **Hardware-specific performance regressions** — The RDNA1 Vulkan PP regression (#30039) and the F16C follow-up (#30343) illustrate how easily backend optimizations regress other device classes.
- **Issue triage hygiene** — A large share of the top-30 issues carry `[stale]` or were closed as stale, indicating that hardware-specific bug reports accumulate faster than maintainers can validate them.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*