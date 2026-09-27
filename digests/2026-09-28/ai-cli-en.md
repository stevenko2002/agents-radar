# AI CLI Tools Community Digest 2026-09-28

> Generated: 2026-09-27 22:15 UTC | Tools covered: 12

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



### Today's Key Updates (2026-09-28)

1. **GitHub Copilot CLI v1.0.89-5 Release**  
   Released with precise form focus for `ask_user` inputs, native support for `.claude/rules` custom instructions, and blue dot indicators for unread session turns in the sidebar. ([github.com/github/copilot-cli](https://github.com/github/copilot-cli))

2. **Qwen Code v0.24.6-nightly.20260926**  
   Shipped with Stage H managed-agent record commits, a fix for `qwen mcp reconnect` to respect usage-statistics opt-out and proxy settings, and skills-listing suppression when the Skill tool is excluded. ([github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code))

3. **llama.cpp Builds b11212–b11223**  
   Shipped ten builds featuring RANK pooling batch splitting for causal LLM rerankers (e.g., Qwen3 / Qwen3-VL), f32 accumulation for AVX512-FP16 to fix overflow, and a clean-fail path for non-causal image chunk overflow. ([github.com/ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp))

4. **OpenAI Codex Rust Core Alpha Updates**  
   Published iterative stability updates for the Rust-based core CLI (`rust-v0.159.0-alpha.10` through `alpha.7` and `rust-v0.158.0-alpha.15.3` through `alpha.15.2`) focusing on test suite synchronization and core integration. ([github.com/openai/codex](https://github.com/openai/codex))

5. **Gemini CLI Security and Containment Fixes**  
   Merged critical security patches preventing workspace trust derivation from agentSettings in task creation, and securing glob tool and checkpoint paths against directory traversal. ([github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli))

6. **Pi Adds Codemode and MCP Support**  
   Submitted a large PR (#10040) adding Codemode support for sandboxing models and MCP support for broader tool ecosystem compatibility. ([github.com/earendil-works

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills Community Highlights Report
*Data as of 2026-09-28 · Source: [anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. Top Skills Ranking

The following PRs represent the most-attended Skill contributions, ordered by community attention (comments/reactions). Note: raw comment counts rendered as `undefined` in the source data, so ranking reflects the repository's provided sort order.

### #1298 — skill-creator: isolate trigger evals & harden Windows/runtime handling
- **Author:** MartinCajiao · **Status:** OPEN · [Link](https://github.com/anthropics/skills/pull/1298)
- **Functionality:** Fixes the `skill-creator` evaluation harness — isolates per-worker trigger probes to prevent false misses, works around `select()` failures on Windows subprocess pipes, and prevents unrelated tool errors from aborting scans. Runtime failures are no longer misclassified as negative triggers.
- **Discussion highlights:** Addresses a class of subtle eval-harness bugs that produce misleading optimization signals. Targets cross-platform (Windows) reliability in the skill-authoring workflow.

### #1742 — mcp-builder: support `mcp>=2` API & custom HTTP headers
- **Author:** Kuldeeep18 · **Status:** OPEN · [Link](https://github.com/anthropics/skills/pull/1742)
- **Functionality:** Fixes #1668. Adapts `skills/mcp-builder/scripts/connections.py` to the renamed `streamable_http_client` import in `mcp>=2.0.0` and routes custom HTTP headers through `create_mcp_http_client` / `http_client` instead of a direct kwarg.
- **Discussion highlights:** A compatibility fix with momentum — MCP 2.0 adoption is ongoing, so this unblocks a meaningful slice of MCP-server-building skill users.

### #1771 — proofcore-contract-auditor (Web3 smart-contract notarization)
- **Author:** ProofCore-Protocol · **Status:** OPEN · [Link](https://github.com/anthropics/skills/pull/1771)
- **Functionality:** New Agent Skill for Web3 developers performing automated static analysis of Solidity and Rust contracts, then anchoring cryptographic audit proofs on the public TON Blockchain via ProofCore's zero-storage Merkle protocol.
- **Discussion highlights:** One of the more domain-specific submissions — bridges Claude Code into the smart-contract audit workflow with on-chain proof anchoring.

### #1734 — Detect orphaned docx comments
- **Author:** rohitjain25 · **Status:** OPEN · [Link](https://github.com/anthropics/skills/pull/1734)
- **Functionality:** Adds detection for orphaned comments in DOCX documents (comments left behind without their host context).
- **Discussion highlights:** Continues the docx skill hardening theme; several docx-related PRs are in flight concurrently.

### #1703 — md2video-audio (Markdown → MP4 video w/ voiceover)
- **Author:** 70v-Yoyo · **Status:** OPEN · [Link](https://github.com/anthropics/skills/pull/1703)
- **Functionality:** Zero-cost skill compiling Markdown into presentation slides (via Marp) and rendering them into professional-grade MP4 videos with realistic human-like voiceovers.
- **Discussion highlights:** Represents the "content generation" frontier — turning text artifacts directly into video deliverables.

### #1792 — docx: report LibreOffice timeout & verify output
- **Author:** TINGyu123644 · **Status:** OPEN · [Link](https://github.com/anthropics/skills/pull/1792)
- **Functionality:** `accept_changes.py` now returns an Error on `soffice` timeout (previously reported success) and only claims success after confirming the output DOCX no longer carries revision marks (`w:ins` / `w:del` / `w:moveFrom` / `w:moveTo`).
- **Discussion highlights:** Part of the broader docx quality push — replacing silent failures with explicit verification.

### #525 — pyxel skill (retro game development)
- **Author:** kitao · **Status:** OPEN · [Link](https://github.com/anthropics/skills/pull/525)
- **Functionality:** Guides creation, debugging, and verification of retro games in Python using Pyxel — headless input-driven runs, direct frame inspection, and task-specific state checks. Separate references cover Pyxel behavior, presentation, and release checklist evidence.
- **Discussion highlights:** Long-lived PR (created March, active through September) — signals sustained community interest in game-dev workflows.

### #514 — document-typography skill
- **Author:** PGTBoos · **Status:** OPEN · [Link](https://github.com/anthropics/skills/pull/514)
- **Functionality:** Prevents common typographic problems in AI-generated documents: orphan word wrap (1–6 words spilling to next line), widow paragraphs (section headers stranded at page bottom), and numbering misalignment.
- **Discussion highlights:** Targets a universal pain point affecting *every* document Claude generates — high practical utility.

---

## 2. Community Demand Trends

Distilled from the highest-engagement Issues:

| Trend | Signal | Representative Issues |
|-------|--------|----------------------|
| **Trust & security boundary hardening** | 🔴 43 comments | [#492](https://github.com/anthropics/skills/issues/492) — community skills impersonating `anthropic/` namespace; demand for namespace isolation |
| **Org-wide skill sharing** | 🟠 16 comments, 8 👍 | [#228](https://github.com/anthropics/skills/issues/228) — shared skill library / direct share links instead of manual .skill file shuffling |
| **Skill trigger reliability** | 🟠 12 comments, 7 👍 | [#556](https://github.com/anthropics/skills/issues/556) — `claude -p` never triggers skills (0% trigger rate); eval harness broken |
| **Skill discoverability / persistence** | 🟡 10 comments | [#62](https://github.com/anthropics/skills/issues/62) — user skills disappearing after file renames; need better state management |
| **Agent governance & safety patterns** | 🟡 6 comments | [#412](https://github.com/anthromics/skills/issues/412) (CLOSED) — proposal for policy enforcement, threat detection, trust scoring, audit trails |
| **Skill quality tooling (meta-skills)** | 🟡 8 comments | [#202](https://github.com/anthropics/skills/issues/202) (CLOSED) — skill-creator itself needs a best-practice rewrite; too verbose, educational tone |
| **Plugin deduplication** | 🟡 6 comments, 9 👍 | [#189](https://github.com/anthropics/skills/issues/189) — `document-skills` and `example-skills` plugins ship identical content |

**Read:** The community is simultaneously demanding *more* skills (Web3, gaming, video, HPC, governance) and *harder guardrails* around them (namespace trust, trigger reliability, org sharing controls). The tension between abundance and safety is the dominant theme.

---

## 3. High-Potential Pending Skills

Active, unmerged PRs that appear close to landing (recent creation + recent updates + fix-oriented scope):

| PR | Skill | Why likely to merge |
|----|-------|--------------------|
| [#1742](https://github.com/anthropics/skills/pull/1742) | mcp-builder compatibility | Fixes a concrete upstream dependency break (#1668); low controversy |
| [#1792](https://github.com/anthropics/skills/pull/1792) | docx output verification | Addresses silent-failure class flagged by multiple docx issues |
| #1298 | skill-creator eval hardening | Directly resolves issues #1383 / #556 about broken trigger evals |
| #1771 | proofcore-contract-auditor | Novel domain skill; depends on maintainer domain fit review |
| #1734 | docx orphaned-comment detection | Small, surgical addition to the docx suite |
| #514 | document-typography | Universal quality improvement; no dependencies blocking it |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for trustworthy, shareable skills that reliably trigger when needed** — the top issues converge on three gaps: namespace trust boundaries (#492), org-scale distribution (#228), and eval-harness trigger fidelity (#556), all while a wave of domain-specific new skills (Web3, gaming, video, HPC) pushes the collection's breadth outward.

---

# Claude Code Community Digest — 2026-09-28

*Source: github.com/anthropics/claude-code · Scope: activity updated in the last 24h*

> **Data note:** 50 issues were updated in the window (top 30 shown), and only **3 PRs** were touched. The digest covers the full PR set and the most significant issues. Nearly all issues updated on 2026-09-27 carry the `stale` label and are `CLOSED` — an apparent bulk stale-sweep, which materially affects how today's numbers should be read.

---

## 1. Today's Highlights

- **No new releases** in the last 24h; the most recent known version in circulation across reports is **2.1.278**.
- A **large batch of stale issues was closed** on 2026-09-27 (essentially every `stale`-tagged issue in the window), including several genuine bugs with reproductions — suggesting closure-by-inactivity rather than by fix.
- The two most-engaged items are **prompt-cache invalidation causing cost spikes** ([#76606](https://github.com/anthropics/claude-code/issues/76606)) and the **non-configurable 10k-char hook `additionalContext` cap** ([#51537](https://github.com/anthropics/claude-code/issues/51537)), the latter leading in community support (👍 7).

---

## 2. Releases

No new releases were published in the last 24 hours. Nothing to summarize.

---

## 3. Hot Issues

1. **[#76606](https://github.com/anthropics/claude-code/issues/76606) — Prompt cache invalidated by rewriting old messages in long sessions** (`CLOSED`, 7 comments, 👍0)
   Author diffed `/v1/messages` traffic around cost spikes and found Claude Code rewrites old messages mid-session, invalidating the prompt cache and reprocessing the whole conversation. High impact on token cost; closed as stale despite a concrete root-cause trace.

2. **[#51537](https://github.com/anthropics/claude-code/issues/51537) — Make the 10,000-char `persistHookOutput` limit configurable** (`OPEN`, 7 comments, 👍7)
   The highest-reaction item in the window. Since v2.1.89, oversized hook `additionalContext` is persisted to disk and replaced with a file-path breadcrumb the model treats as infrastructure noise. Strong demand to raise/remove/config the cap.

3. **[#76238](https://github.com/anthropics/claude-code/issues/76238) — Allowlisted MCP tools still trigger permission prompts on fresh sessions** (`CLOSED`, 4 comments, 👍3)
   Reproduced on macOS 2.1.206 under Opus Plan mode. Permission allowlisting is a core trust primitive; failures here erode user confidence in automation.

4. **[#76584](https://github.com/anthropics/claude-code/issues/76584) — Compaction summary records partial stdout from timed-out commands as confirmed results** (`CLOSED`, 4 comments)
   On timeout (exit 143), partial output is written into the compaction summary as if the command succeeded. Silent correctness corruption that propagates into later sessions.

5. **[#76490](https://github.com/anthropics/claude-code/issues/76490) — Bash allow-list rules fail to match Windows drive-letter paths** (`CLOSED`, 4 comments)
   Rules referencing `C:/...` or `/c/...` never match. Cross-platform permission parity remains a recurring theme.

6. **[#76453](https://github.com/anthropics/claude-code/issues/76453) — Cowork custom MCP connector reports "needs authorization / no tools" every spawn** (`CLOSED`, 4 comments)
   Includes server-side OAuth 2.1 logs showing valid auth. Points at client-side connector state handling in the desktop app.

7. **[#76185](https://github.com/anthropics/claude-code/issues/76185) — Headless `-p` sessions leak to 10–15GB RSS while idle** (`CLOSED`, 3 comments)
   Reported on Linux v2.1.205 while waiting on background Bash tasks; caused swap thrashing and OOM on an 18GB host. Serious for CI/server deployments.

8. **[#75794](https://github.com/anthropics/claude-code/issues/75794) — Model erases entire directory while in Plan mode** (`CLOSED`, 3 comments, `data-loss`)
   A plan-mode permission bypass with destructive outcome. Even with `needs-repro`, data-loss reports in a "read-only" mode are the highest-severity category.

9. **[#76239](https://github.com/anthropics/claude-code/issues/76239) — SDK headless: MCP tools silently missing on first turn** (`CLOSED`, 2 comments, `regression`)
   Traced to the non-blocking MCP startup pre-wait introduced in CLI 2.1.144. Breaks single-turn headless usage — a common SDK integration pattern.

10. **[#93845](https://github.com/anthropics/claude-code/issues/93845) — WSL2: symlinked read-deny path into `/mnt/c` breaks bwrap for every Bash command** (`OPEN`, 1 comment)
    Reproduces on 2.1.268 and is unremovable when the path comes from managed settings — a policy/lockout dead-end, not just a bug.

*Also worth watching:* **[#82395](https://github.com/anthropics/claude-code/issues/82395)** (`OPEN`) — sort the completed background-job list by last activity rather than creation time.

---

## 4. Key PR Progress

Only **three PRs** were updated in the window; all are covered below.

1. **[#97688](https://github.com/anthropics/claude-code/pull/97688) — sec-default: collector records continue past the user tier** (`OPEN`, updated 2026-09-27)
   Under an organization-seated `sec-default`, a user's plugin can no longer drop or rewrite records sent to its collector. The collector stream now continues past the user tier like `classic.*` and `settings.read`, with org-level `prepend`/`append` applied. Enterprise telemetry governance — relevant to admins enforcing centralized audit streams.

2. **[#95587](https://github.com/anthropics/claude-code/pull/95587) — diff: resumed-session pane, `/clear`, and session-line start alignment** (`CLOSED`, updated 2026-09-27)
   Aligns the diff mod with the built-in panel in three cases: a resumed/continued session with existing edits opens the pane as soon as width is known, `/clear` leaves it up consistently, and the session line follows the engine's start. Mostly UX consistency cleanup.

3. **[#94847](https://github.com/anthropics/claude-code/pull/94847) — diff: first edit opens the pane only when it has a file to list** (`OPEN`, updated 2026-09-27)
   Previously the pane auto-opened on the first successful Edit/Write/NotebookEdit *before* fetching, producing an empty "No tracked changes" pane for writes outside the repo, to ignored files, or in a different worktree. Gating the open on actual tracked changes removes a common empty-state annoyance.

---

## 5. Feature Request Trends

Distilled from the issue set:

- **Configurable limits instead of hard-coded thresholds** — the hook `additionalContext` cap ([#51537](https://github.com/anthropics/claude-code/issues/51537)) is the clearest example; users want limits raised, removed, or surfaced in settings rather than silently truncating/redirecting content.
- **Better background-job lifecycle UX** — ordering completed jobs by last activity rather than creation ([#82395](https://github.com/anthropics/claude-code/issues/82395)), auto-resume on background exit, and avoiding orphaning of sub-agent processes ([#76461](https://github.com/anthropics/claude-code/issues/76461)).
- **Cross-platform permission parity** — Windows drive-letter paths ([#76490](https://github.com/anthropics/claude-code/issues/76490)) and WSL2 sandbox path handling ([#93845](https://github.com/anthropics/claude-code/issues/93845)).
- **MCP reliability and auth transparency** — allowlist enforcement ([#76238](https://github.com/anthropics/claude-code/issues/76238)), startup ordering ([#76239](https://github.com/anthropics/claude-code/issues/76239)), and persistent "needs authorization" states ([#76453](https://github.com/anthropics/claude-code/issues/76453)).
- **Cost and cache observability** — making prompt-cache invalidation visible and avoidable ([#76606](https://github.com/anthropics/claude-code/issues/76606)).

---

## 6. Developer Pain Points

- **Stale-closure churn is masking real bugs.** A sizable share of today's closed issues carry `has repro` and describe reproducible defects — cache invalidation, memory leaks, data loss, regressions. Closing by inactivity hides signal and forces re-filing (see [#93845](https://github.com/anthropics/claude-code/issues/93845), which explicitly re-opens a previously locked stale issue).
- **Permissions are not honored consistently.** Allowlisted MCP tools still prompt ([#76238](https://github.com/anthropics/claude-code/issues/76238)), Windows path rules silently fail ([#76490](https://github.com/anthropics/claude-code/issues/76490)), and Plan mode did not prevent destructive deletion ([#75794](https://github.com/anthropics/claude-code/issues/75794)). This is the most trust-damaging cluster.
- **Silent failures over explicit errors.** Network-path changes hang API/MCP calls for 10–20+ minutes with only a spinner ([#75572](https://github.com/anthropics/claude-code/issues/75572)); MCP tools vanish on the first turn without a message ([#76239](https://github.com/anthropics/claude-code/issues/76239)). Developers repeatedly ask for surfaced errors.
- **Resource and cost surprises.** Multi-GB RSS leaks in headless mode ([#76185](https://github.com/anthropics/claude-code/issues/76185)) and cache-invalidation cost spikes ([#76606](https://github.com/anthropics/claude-code/issues/76606)) both hit production budgets and stability.
- **Correctness leaks across sessions.** Timeout output recorded as confirmed success in compaction summaries ([#76584](https://github.com/anthropics/claude-code/issues/76584)) contaminates downstream context.
- **Fragmented UI behavior.** Desktop/Cowork bridge and connector failures ([#76054](https://github.com/anthropics/claude-code/issues/76054), [#76485](https://github.com/anthropics/claude-code/issues/76485), [#76233](https://github.com/anthropics/claude-code/issues/76233)) and TUI state bugs ([#76607](https://github.com/anthropics/claude-code/issues/76607), [#76495](https://github.com/anthropics/claude-code/issues/76495)) suggest the desktop and terminal surfaces are diverging in behavior.

---

*Caveat: reaction counts (👍) are low across the board (max 7), so engagement signal in this window is thin. The dominant 2026-09-27 activity is a stale-sweep close event rather than a maintenance release.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



# OpenAI Codex Community Digest — 2026-09-28

### 1. Today's Highlights
The OpenAI Codex repository is experiencing a massive wave of merging activity, particularly focused on TUI rendering refinements, Guardian framework hardening, and terminal compatibility fixes. On the issues board, community reports highlight critical stability bottlenecks in the desktop wrappers (especially regarding OS-level child process handling and app-server hydration timeouts), while the core Rust CLI continues its rapid alpha iteration cycle.

---

### 2. Releases
The repository has published several incremental alpha releases over the past 24 hours, focusing on the Rust-based core CLI and app-server engine:
*   **`rust-v0.159.0-alpha.10` through `alpha.7`**: Iterative stability updates for the Rust-based Codex core.
*   **`rust-v0.158.0-alpha.15.3` through `alpha.15.2`**: Focused on test suite synchronization and core integration fixes.

*Developers can track the transition to the Rust-based core via the official release tags.*

---

### 3. Hot Issues
Here are 10 noteworthy issues driving community discussion, ranked by technical impact and engagement:

*   **#48074 | Windows terminal windows flash repeatedly during requests**  
    *   **Why it matters:** High visual disruption and user experience degradation on Windows 11 when the daemon is active.  
    *   **Community reaction:** Extremely high engagement with **68 👍** and 36 comments, highlighting the severity of this regression on Windows terminals.
*   **#48554 | Electron runtime replaces libuv's SIGCHLD handler on Linux**  
    *   **Why it matters:** A deep architectural bug where the desktop app overwrites the SIGCHLD handler, preventing child process reaping, leading to shell environment timeouts and "Git is unavailable" errors.  
    *   **Community reaction:** **11 👍** and 19 comments; users are investigating libuv workarounds.
*   **#48419 | Linux desktop app hangs on opening threads (hydration timeout)**  
    *   **Why it matters:** Critical blocker for Linux desktop users; the app fails to load local threads due to a 120-second timeout in the app-server handshake.  
    *   **Community reaction:** **10 👍** and 15 comments, with users reverting builds to regain functionality.
*   **#10185 | Mode switch Plan -> Code still behaves like Plan**  
    *   **Why it matters:** A long-standing bug where the UI state updates, but the underlying execution engine remains in Plan mode, leading to incorrect agent behaviors.  
    *   **Community reaction:** 25 comments, showing persistent community effort to isolate the root cause.
*   **#43237 | GPT-6 Astra rejects simple prompts (`hi`) with `invalid_prompt`**  
    *   **Why it matters:** Basic prompts are rejected out of bounds on standalone CLI builds, pointing to a backend context/auth parsing bug.  
    *   **Community reaction:** 19 comments; users have provided minimal reproductions across macOS and Linux.
*   **#25590 | Desktop resumes thread with wrong sandbox permissions**  
    *   **Why it matters:** The UI displays "Full Access," but the session actually executes under restricted `workspace-write` / `on-request` policies, posing a security and workflow integrity risk.  
    *   **Community reaction:** **3 👍** and 12 comments discussing sandbox persistence states.
*   **#43015 | Severe CLI reliability failure: 63.8 MB image-history requests on Windows**  
    *   **Why it matters:** Massive payload accumulation before compaction triggers, leading to severe stalls and WebSocket fallback loops on Windows.  
    *   **Community reaction:** 13 comments; users are requesting urgent diagnostic paths for image-heavy workflows.
*   **#48463 | Windows desktop app stuck on loading screen after update**  
    *   **Why it matters:** Bootstrap timeout after a `codex-home` request prevents the application from starting entirely on Windows.  
    *   **Community reaction:** 12 comments, heavily impacting users updating to build 26.924.2738.0.
*   **#45564 | Disabling animations freezes the Working timer**  
    *   **Why

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest - 2026-09-28

## Today's Highlights

The latest community activity centers on critical security patches and agent reliability improvements. Multiple PRs address sandbox containment and path traversal vulnerabilities, while open issues highlight persistent problems with subagent behavior and browser agent hangs. No new releases were published in the past 24 hours.

## Releases

No new releases reported in the last 24 hours.

## Hot Issues

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** - Subagent recovery after MAX_TURNS is misreported as GOAL success. This high-priority bug hides actual interruptions from users. With 13 comments and maintainer attention, it represents a critical UX issue.

2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** - Generalist agent hangs indefinitely on simple operations. Has 8 comments and 8 upvotes, indicating widespread impact for P1 bug.

3. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** - Enhancement proposing Zero-Dependency OS Sandboxing to leverage model's bash affinity. Large effort item with 9 comments seeking improved security architecture.

4. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** - Epic investigating AST-aware file operations for more precise codebase navigation. 7 comments exploring significant productivity improvements.

5. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** - Model underutilizes skills and sub-agents despite available configurations. Anecdotal but important behavior issue with 6 comments.

6. **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)** - Security concern about Auto Memory logging before redaction. Maintainer-only issue addressing potential secret exposure.

7. **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)** - Auto Memory retry loop on low-signal sessions causing infinite processing. Related to memory system reliability.

8. **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)** - Browser Agent ignores settings.json overrides including maxTurns. Customer-issued bug affecting configuration consistency.

9. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** - Browser subagent fails specifically in Wayland environments. Important compatibility issue with 4 comments and 1 upvote.

10. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)** - CLI fails with 400 error when >128 tools available. Tool limitation affecting complex agent configurations.

## Key PR Progress

1. **[#29525](https://github.com/google-gemini/gemini-cli/pull/29525)** - Security fix preventing workspace trust derivation from agentSettings in task creation, addressing potential privilege escalation.

2. **[#29523](https://github.com/google-gemini/gemini-cli/pull/29523)** - External safety checker containment improvements: minimal environment and capped output prevent secret leakage and resource exhaustion.

3. **[#29522](https://github.com/google-gemini/gemini-cli/pull/29522)** - Glob tool validation fix keeps file searches contained within permitted directories, preventing path traversal via absolute patterns.

4. **[#29521](https://github.com/google-gemini/gemini-cli/pull/29521)** - Checkpoint path containment fix prevents directory traversal attacks through malicious checkpoint tags.

5. **[#29411](https://github.com/google-gemini/gemini-cli/pull/29411)** - Resume functionality improved to select most recently active session instead of newest start time, enhancing user experience.

6. **[#29407](https://github.com/google-gemini/gemini-cli/pull/29407)** - JSON serialization fix preserves shared references in OpenTelemetry arrays, resolving circular reference issues in exports.

7. **[#29404](https://github.com/google-gemini/gemini-cli/pull/29404)** - New `gemini models list` subcommand with JSON output enables programmatic model discovery for integrations.

8. **[#29342]()** - Input history state refactor eliminates nested React updates causing StrictMode issues in CLI input handling.

9. **[#29294](https://github.com/google-gemini/gemini-cli/pull/29294)** - Terminal flickering resolution through stdout contention and cursor focus management improvements.

10. **[#29292](https://github.com/google-gemini/gemini-cli/pull/29292)** - Checkpoint loading validation ensures history property is array, preventing corruption-related crashes.

## Feature Request Trends

1. **Enhanced Agent Self-Awareness**: Requests for agents to understand their own mechanics, CLI flags, and executable behavior (#21432).

2. **Improved Subagent Usability**: Making subagent trajectories visible via `/chat share` (#22598) and better skill utilization (#21968).

3. **AST-Aware Code Operations**: Investigation of AST-based tools for precise file reading, searching, and mapping (#22745, #22746) to reduce token usage and improve accuracy.

4. **Robust Browser Agent**: Enhancements for Wayland compatibility (#21983), settings override respect (#22267), and automatic session recovery (#22232).

5. **Persistent Task Management**: Migration from in-context ToDo to file-based persistent tracking (#18836) for better session continuity.

6. **Safety-Conscious Interactions**: Reducing auto-memory logging with deterministic redaction (#26525) and discouraging destructive git operations (#22672).

## Developer Pain Points

1. **Agent Reliability Issues**: Repeated hangs and failures in generalist, browser, and subagents create workflow disruptions, particularly the indefinite hanging in generalist agent use.

2. **Configuration Inconsistencies**: Settings.json overrides being ignored by browser agent and inconsistent timeout behaviors cause unpredictable agent execution.

3. **Security Concerns**: Multiple issues around auto-memory logging before redaction, checkpoint path traversal, and environment variable exposure require immediate attention.

4. **Session Management Problems**: Resume functionality selecting wrong sessions, infinite retry loops in auto-memory, and checkpoint corruption impact workflow continuity.

5. **Tool Limitations**: Hard caps on tool counts (400 tools causing 400 errors) and symlink recognition issues constrain agent capabilities in complex environments.

6. **Output Handling Issues**: Terminal flickering from stdout contention and get-shit-done output hook crashes affect user experience during critical operations.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



# GitHub Copilot CLI Community Digest: 2026-09-28

## 1. Today's Highlights
The latest release, **v1.0.89-5**, introduces critical quality-of-life improvements, including native support for Claude Code rule files (`.claude/rules`), precise form focus behaviors, and visual indicators for unread session turns. Community activity remains heavily focused on enhancing agent control, with high-vote requests for global tool whitelists and mid-session model switching, while developers grapple with critical stability issues regarding session authentication and desktop app spawning.

---

## 2. Releases

### GitHub Copilot CLI v1.0.89-5
This release focuses on user interface focus mechanics, cross-tool instruction compatibility, and session navigation UX.
*   **Precise Form Focus:** Left-clicking `ask_user` and elicitation form inputs now focuses them and places the cursor precisely at the clicked character position.
*   **Claude Code Rules Support:** Added native support for `.claude/rules` as custom instructions, facilitating smoother workflow portability between Claude Code and Copilot CLI.
*   **Unread Turn Indicators:** Sessions in the sidebar now display a blue dot when they finish a turn that you have not yet opened, helping users track active conversational states.

---

## 3. Hot Issues

Here are the 10 most noteworthy issues shaping the Copilot CLI community discussion:

### 1. Globally Configurable Allowed Tools (Issue #179)
*   **Status:** Open | **Community Reaction:** 43 👍
*   **Why it matters:** Developers are requesting a global configuration for allowed tools (similar to Claude Code's `permissions.allow` in `settings.json`). This allows read-only tools (like `grep`, `cat`, and `git status`) to run automatically without manual approval per command, while keeping destructive tools gated behind strict permissions.

### 2. Built-in Git Worktree Lifecycle Management (Issue #1613)
*   **Status:** Open | **Community Reaction:** 38 👍
*   **Why it matters:** Working on multiple parallel tasks is difficult without isolated environments. Users want Copilot CLI to automatically create, manage, and clean up git worktrees as part of its problem-solving workflow, ensuring complete task isolation.

### 3. Support CIMD for Remote OAuth MCP Servers (Issue #1305)
*   **Status:** Closed | **Community Reaction:** 39 👍
*   **Why it matters:** This milestone enhances security for remote MCP integrations by supporting Client-Initiated Dynamic Client Registration (CIMD) for OAuth-protected servers, allowing clients to register dynamically just-in-time.

### 4. Model Switching with BYOK/Local Providers (Issue #3709)
*   **Status:** Open | **Community Reaction:** 33 👍
*   **Why it matters:** Currently, BYOK (Bring Your Own Key) mode pins a session to a single model via `COPILOT_MODEL`, and the `/model` picker excludes locally hosted models. This is a major blocker for developers running local LLMs who want the flexibility to switch models mid-session.

### 5. Tool Whitelist for Interactive Mode (Issue #1973)
*   **Status:** Open | **Community Reaction:** 29 👍
*   **Why it matters:** Interactive mode currently requires manual approval for every tool call, including safe, read-only commands. Developers want a middle-ground configuration that auto-approves safe commands while still requiring approval for destructive actions.

### 6. Cancel/Remove Enqueued Messages (Issue #1857)
*   **Status:** Open | **Community Reaction:** 29 👍
*   **Why it matters:** There is currently no way to cancel a message or slash command queued via `Ctrl+Q` / `Ctrl+Enter` while the agent is busy. Once enqueued, messages must run to completion, and users lack basic queue management controls.

### 7. Configurable System Prompt to Reduce Token Overhead (Issue #2627)
*   **Status:** Open | **Community Reaction:** 21 👍
*   **Why it matters:** The default system prompt consumes ~20,500 tokens at session start, plus another ~8,500 tokens for tool definitions. On a 200K context window, this eats up ~15% of the context before any user code is loaded. Developers want to slim down these fixed instructions.

### 8. Process-local Auth Token Stops Refreshing (Issue #4929)
*   **Status:** Open | **Community Reaction:** 7 Comments
*   **Why it matters:** A critical blocker for long-running CLI sessions. The authentication token fails to refresh silently, causing all subsequent prompts and `/ask` commands to fail with authorization errors until the process is fully restarted.

### 9. Desktop App Session Crashes on Spawn (Issue #4905)
*   **

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



# OpenCode Community Digest — 2026-09-28

Welcome to the OpenCode community digest. Below is a structured analysis of the key issues, pull requests, and trends shaping the OpenCode ecosystem as of September 28, 2026.

---

### 1. Today's Highlights
The community focus over the last 24 hours has heavily centered on stabilizing the V2 core architecture, particularly regarding resource lifecycle management (MCP servers and SQLite database locks) and configuration consistency. On the user-facing side, friction surrounding the OpenCode Go subscription authentication and API key generation remains the highest-voted and most frequently reported pain point. Significant progress has been made on the developer front, including architectural refactors to reduce duplicated codec logic and critical fixes for shell redirection security and TUI reconnection states.

---

### 2. Releases
*No new releases were published in the last 24 hours.*

---

### 3. Hot Issues (Top 10 Noteworthy Issues)

Here are the ten most critical and engaging issues that define the current state of the repository:

#### 1. [OPEN] No API Key / Go Subscription Authentication Failures (#50885) — *9 👍*
* **Summary:** Subscribers with active OpenCode Go accounts cannot authenticate in the CLI or Desktop app. The console lacks options to generate or copy a personal API key, blocking core login workflows.
* **Why it matters:** This is currently the highest-voted issue, representing a critical blocker for the entire Go subscription value proposition. 
* **Link:** [anomalyco/opencode Issue #50885](https://github.com/anomalyco/opencode/issues/50885)

#### 2. [CLOSED] `opencode serve` uses `/` as base directory from non-root paths (#14445) — *8 👍*
* **Summary:** Launching `opencode serve` from a non-root directory (like `/workspace`) incorrectly resolves the workspace base directory to root `/`, permitting access to arbitrary system directories.
* **Why it matters:** A severe security and permission mismatch vulnerability that could expose sensitive system paths to unprivileged users/sessions.
* **Link:** [anomalyco/opencode Issue #14445](https://github.com/anomalyco/opencode/issues/14445)

#### 3. [OPEN] Agent config extra fields forwarded to upstream providers (#49027)
* **Summary:** Custom properties in agent configurations are forwarded verbatim to upstream provider requests, causing `invalid_request_error` failures on gateways like `opencode-go`.
* **Why it matters:** Breaks custom provider integrations and custom model parameter configurations out of the box.
* **Link:** [anomalyco/opencode Issue #49027](https://github.com/anomalyco/opencode/issues/4

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



# Pi Community Digest — 2026-09-28

---

## 1. Today's Highlights

The past 24 hours saw no new releases, but activity across issues and PRs remained high. A large PR adding **Codemode and MCP** support to Pi was submitted for review, and several critical bugs around compaction, provider defaults, and session stability surfaced with detailed reproductions. The community is also actively debating startup performance parity with competing tools like jcode.

---

## 2. Releases

*No new releases in the last 24 hours.*

---

## 3. Hot Issues

### 🔴 #10031 — Pi sporadically stuck in "Working..." when thinking is stopped with ESC
**Author:** kkovacs | **Status:** Closed (no-action) | **Comments:** 16 | 👍 2
Pi frequently hangs in a "Working..." state when the user presses ESC to stop thinking. The only recovery is `CTRL+c` + `pi -c`. Has persisted since ~v0.84.0 across machines. The maintainer marked it `no-action`, suggesting the root cause may be hard to address without deeper architectural changes. [Link](https://github.com/earendil-works/pi/issues/10031)

### 🔴 #7739 — Set a startup-time budget targeting jcode-comparable latency and memory
**Author:** 1am2syman | **Status:** Open | **Comments:** 10 | 👍 0
A detailed benchmark comparison shows Pi lagging jcode on startup latency and memory footprint. The issue proposes formalizing a startup-time budget to close the gap. This reflects growing community scrutiny of Pi's performance against newer competitors. [Link](https://github.com/earendil-works/pi/issues/7739)

### 🔴 #5581 — Custom messages via `pi.sendMessage()` bypass `before_agent_start` event
**Author:** dljsjr | **Status:** Open (bug, in-progress) | **Comments:** 8 | 👍 3
`triggerTurn: true` calls `_runAgentPrompt` directly instead of `prompt()`, skipping `emitBeforeAgentStart`. This breaks extension observability and creates edge cases in agent-loop integration. A well-regarded, long-lived bug report with clear reproduction steps. [Link](https://github.com/earendil-works/pi/issues/5581)

### 🔴 #8810 — Extension-registered providers ignore defaultProvider/defaultModel
**Author:** rosingrind | **Status:** Open (bug) | **Comments:** 7 | 👍 2
Fresh sessions intermittently start on the wrong provider when the default is registered via `pi.registerProvider()`. The settings.json configuration is silently overridden. This is a real footgun for extension authors and users with multi-provider setups. [Link](https://github.com/earendil-works/pi/issues/8810)

### 🔴 #10033 — Compaction prompt includes all thinking text, exceeds context window
**Author:** martinoturrina | **Status:** Open (bug) | **Comments:** 6 | 👍 1
`serializeConversation()` embeds full thinking blocks into the compaction summary prompt. With reasoning models (e.g., DeepSeek V4.1), this bloats the summary beyond the context window, making auto-compaction impossible on long sessions. [Link](https://github.com/earendil-works/pi/issues/10033)

### 🔴 #9974 — pi mishandles Responses API tool calls from llama.cpp
**Author:** WGH- | **Status:** Open (bug) | **Comments:** 6 | 👍 0
SSE stream data from llama.cpp's Responses API is parsed incorrectly, producing duplicated and corrupted tool calls. The issue includes raw SSE snippets showing the malformed `response.output_item.added` events. [Link](https://github.com/earendil-works/pi/issues/9974)

### 🟡 #7658 — Extension API for persisting API-key credentials (auth.json)
**Author:** arseniy-gl | **Status:** Open | **Comments:** 5 | 👍 0
Extensions can register providers but have no programmatic way to persist API keys to `auth.json`. Users must hand-edit `models.json`. This is a significant gap for extension distribution. [Link](https://github.com/earendil-works/pi/issues/7658)

### 🟡 #9905 — Anthropic: `thinking.display` always sent as "summarized", no CLI override
**Author:** xiaoliu10 | **Status:** Open | **Comments:** 5 | 👍 0
Pi hardcodes `thinking.display: "summarized"` in the Anthropic messages API layer. The type system only allows `"summarized" | "omitted"`, and there's no CLI flag or config to change it. Users who want full thinking visibility have no path. [Link](https://github.com/earendil-works/pi/issues/9905)

### 🟡 #9946 — CMD mode (!) ignores `outputPad` setting
**Author:** spamcop | **Status:** Open (bug) | **Comments:** 4 | 👍 0
Setting `"outputPad": 0` in settings.json correctly trims chat messages but leaves leading spaces in CMD (`!`) mode output. A straightforward inconsistency. [Link](https://github.com/earendil-works/pi/issues/9946)

### 🟡 #10019 — Anthropic subscription requests hang at :00/:30 UTC
**Author:** brianh014 | **Status:** Closed (no-action) | **Comments:** 3 | 👍 0
Sessions freeze with the working spinner spinning, responding with HTTP 200 + pings but no `message_start`. Occurs predictably at :00 or :30 UTC marks. The user notes this never happened with Claude Code. [Link](https://github.com/earendil-works/pi/issues/10019)

---

## 4. Key PR Progress

### 🚀 #10040 — feat(coding-agent): Codemode and MCP
**Author:** mitsuhiko | **Status:** Open | **Updated:** 2026-09-27
A large, comprehensive PR adding **Codemode** (for making models like Jev work in a sandbox) and **MCP** (Model Context Protocol) support. The author acknowledges it's broad in scope but motivated by giving Codemode a practical sandbox and adding MCP for broader tool ecosystem compatibility. [Link](https://github.com/earendil-works/pi/pull/10040)

### 🚀 #8572 — feat(ai): Amazon Bedrock Mantle
**Author:** cristinaponcela | **Status:** Open (WIP) | **Updated:** 2026-09-27
Adds support for Amazon Bedrock's **Mantle** API surface, which serves models like GPT-5.x via a new endpoint instead of the existing Converse API. Currently blocked on API key permissions for end-to-end testing. Addresses issue #5363. [Link](https://github.com/earendil-works/pi/pull/8572)

### ✅ #10100 — fix(ai): preserve signature-only reasoning details deltas
**Author:** Serenity-2026 | **Status:** Closed | **Updated:** 2026-09-27
Fixes a bug where Claude via OpenRouter streams reasoning signatures in `reasoning_details` deltas with a `signature` but no `text` field. The `isOpenAIReasoningDetail` guard required `text` to be a string, dropping these deltas and losing the signature entirely. [Link](https://github.com/earendil-works/pi/pull/10100)

### ✅ #10091 — Expose message decoration hook for user and assistant text
**Author:** ajunwalker | **Status:** Closed | **Updated:** 2026-09-27
Adds `ctx.ui.setMessageDecorator((role, content, theme) => component)` for ordinary user messages and assistant text. Thinking and tool output remain unchanged. Includes focused rendering tests and TUI documentation. Validated with `npm run build`. [Link](https://github.com/earendil-works/pi/pull/10091)

### ✅ #10085 — feat(agent,coding-agent): emit pi.ai.request spans from the agent loop
**Author:** manno23 | **Status:** Closed | **Updated:** 2026-09-27
Contribution proposal for #10084. The `AI_TELEMETRY_SCHEMA` (`pi.ai.request`) existed in `@earendil-works/pi-agent-core` but had no production call sites — every assistant request silently used `NOOP_TELEMETRY_CONTEXT`. This PR wires `startAiSpan` into the classic `Agent` path so telemetry is actually emitted. [Link](https://github.com/earendil-works/pi/pull/10085)

### ✅ #10099 — 第一次Git实验作业：jiaqitang-1
**Author:** jiaqitang-1 | **Status:** Closed | **Updated:** 2026-09-27
Student submission for a Git lab assignment. Confirms only `members/jiaqitang-1/README.md` was modified. [Link](https://github.com/earendil-works/pi/pull/10099)

---

## 5. Feature Request Trends

| Direction | Representative Issues |
|---|---|
| **Extension credential & config persistence** | #7658 (auth.json API), #5581 (before_agent_start bypass) |
| **Startup & runtime performance** | #7739 (jcode parity), #10104/#10105 (extension reload cost), #9010 (compaction memory spikes) |
| **Provider & model lifecycle observability** | #10095 (modelRegistry.complete bypasses events), #9408 (surface plan-level errors in `/model`) |
| **Thinking & reasoning control** | #9905 (Anthropic thinking.display override), #10100 (signature-only deltas) |
| **UI/UX customization** | #10094 (change "Operation aborted" text/color), #10091 (message decoration hook), #6393 (disable `/share`) |
| **Tool call & transcript robustness** | #9974 (llama.cpp Responses API), #10106 (colliding tool-call IDs across providers) |

---

## 6. Developer Pain Points

1. **Extension ecosystem gaps** — The most frequent pain point cluster. Extensions cannot persist API keys programmatically (#7658), provider registration silently ignores defaults (#8810), and the `before_agent_start` event is bypassed by `sendMessage()` (#5581). Together these make extension authoring fragile and observability incomplete.

2. **Performance regressions at scale** — Multiple reports (#10104, #10105, #9010) describe session creation latency degrading from seconds to minutes with large extension setups, and compaction causing memory spikes. The in-process, single-threaded architecture is increasingly stressed by heavy configurations.

3. **Reasoning-model edge cases** — Three separate issues (#10033, #9905, #10100) revolve around how thinking/reasoning text is handled: compaction embedding full thinking blocks, hardcoded `display: "summarized"`, and dropped signature-only deltas. Reasoning models are first-class in 2026, and Pi's handling still has rough edges.

4. **Proxy & provider compatibility** — Issues like #9735 (retry classifier misses proxy error wording), #9974 (llama.cpp Responses API), and #10019 (Anthropic subscription hangs) suggest that real-world deployment environments (proxies, self-hosted models, subscription auth) expose gaps in Pi's error handling and protocol support.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>



# Qwen Code Community Digest — 2026-09-28

---

## 1. Today's Highlights

The Managed Agent roadmap is accelerating: **Stage D** (public API contract, DTOs, Session query/event replay) closed via #12793, **Stage H** records and task-list serving landed in #12855, and **Stage F** fault gates for Hosted tool turns are underway (#12872). On the security front, issue #12856 exposed a credential-leak risk where five model-selector settings persist a NUL-separated `baseUrl` that can embed userinfo credentials — a fix is already in flight. The most urgent user-facing bug was a **Webview crash** on Remote-SSH when typing `@file` references, closed in #12826.

---

## 2. Releases

**v0.24.6-nightly.20260926.d6f414190a** — This nightly includes the managed-agent Stage H record commits, the MCP reconnect usage-statistics opt-out fix (#12857), skills-listing suppression when the Skill tool is excluded (#12838), and the macOS docked-panel inset fix (#12876).

---

## 3. Hot Issues

### 🔴 #12380 — Managed Agent dual-path architecture proposal *(36 comments)*
The flagship design discussion. Proposes a staged Managed Agent architecture that keeps the existing TypeScript agent loop, runs model inference independently of tool-environment provisioning, and gives Sessions durable ownership, Workspace bindings, and recoverable tool executions. It's the umbrella for Stages A–F and has spawned at least six follow-up issues. **Why it matters:** This is the blueprint for Qwen Code's multi-agent future.

### 🟠 #12737 — Stage B host integration for paired Legacy and Managed engines *(9 comments)*
Follow-up to #12698. Lets ordinary `qwen serve` hosts actually use the ACP Bridge with both engine types. Still in discussion but architecturally critical for the managed-agent rollout.

### 🟠 #12826 — Webview crashes with CodeMirror EditorView.update race condition *(7 comments)* ⚠️ **CLOSED**
VSCode + Remote-SSH users hit a "Something went wrong" crash when typing `@file.tsx` references and pressing Enter. A CodeMirror update race in the Webview. High user impact; now resolved in 0.24.6.

### 🔴 #12856 — Aux-model selectors persist a NUL-separated baseUrl that leaks credentials *(5 comments)*
Five settings keys (`visionModel`, `imageModel`, `advisorModel`, `fastModel`, `compactionModel`) store selectors as `authType:<id>\0<baseUrl>`. When a provider's `baseUrl` embeds userinfo (`https://user:sk-...@host/v1`), that **credential suffix is emitted verbatim** on every public surface. A genuine security regression introduced by #12773.

### 🟡 #12793 — Stage D public API contract, generated DTOs, Session query and event replay *(5 comments)* ⚠️ **CLOSED**
Delivers the reviewed OpenAPI as an in-repo contract with validated DTOs, Session query, and event replay — sections 3–5, 7, 8 of the public API contract pinned to OpenAPI v1.12. Foundational for external integrators.

### 🟡 #12853 — Resolve non-blocking review debt after #10183 *(5 comments)*
Auto Memory PR has exceeded five review rounds. This issue parks the non-blocking findings (correctness/security/data-loss/regression blockers stay in #10183) so the main PR can converge. A pragmatic housekeeping move.

### 🟠 #12835 — Skills listing injected even when the Skill tool is excluded *(5 comments)*
Running `qwen -e none --core-tools read_file --exclude-tools skill` still injects a `<system-reminder>` listing skills into the logged request — even though the tool list correctly omits `skill`. Confusing and wastes context tokens. Fix in #12838.

### 🟡 #12802 — standalone-update: aged .deferred marker blocks updates forever *(5 comments)* ⚠️ **CLOSED**
A stale deferred marker from a previous staged swap could block updates indefinitely. The impossible-PID half was fixed; the lock-liveness direction half was deemed follow-up-sized. Users on Windows standalone installs were likely affected.

### 🟠 #12874 — macOS right-side extension panel can't be closed after opening *(4 comments)*
Toggle button becomes unresponsive after expanding the panel; Esc and drag-to-close both fail. A toggle state-machine defect where the expanded state never transitions back to collapsed. Affects Desktop on macOS.

### 🟡 #12859 — fastjson2 2.0.65 makes accepted negative-scale decimals unreadable after JDBC persistence *(4 comments)*
After #12836 aligned the Runtime Broker to fastjson2 2.0.65, the broker can persist a negative-scale `BigDecimal` that the same codec can no longer read back — recreating the unreadable-row invariant #12798 closed on the positive-scale side. Data integrity issue in the SQL Session Store.

---

## 4. Key PR Progress

### ✅ #12855 — Commit Stage H records and serve the task list (H0c)
The Session authority now commits Stage H records (defined in H0b) with one revision chain per record, and the control plane rebuilds the task list from them. TypeScript + Java sides both landed. **This is the data backbone for managed-agent task tracking.**

### ✅ #12848 — Add gated Hosted foreground Shell turns
Adds foreground Shell turns to the private Hosted Workspace loop under the `hosted-workspace-shell/1` profile. Includes existing file tools, runs commands in the saved Workspace, retains complete stdout/stderr in the SQL Session Store, and gives the model a bounded view. **Critical for the Hosted agent execution path.**

### ✅ #12879 — Add Ollama provider that injects empty parameters for zero-argument tools
Fixes #12878. Ollama rejects function tools that omit the `parameters` field (400: "properties must be an object"). This PR injects an empty `parameters: {}` schema for zero-argument tools like `get_goal`. **Unblocks local Ollama users with any tool that takes no arguments.**

### ✅ #12838 — Skip the skills listing when the Skill tool is not registered
When `--exclude-tools skill` or a `--core-tools` allowlist without `skill` is used, the startup prelude no longer injects `<available_skills>` or the "No skills are currently available." fallback. Closes #12835. **Saves context tokens and removes misleading system reminders.**

### ✅ #12857 — Honor usage-statistics opt-out and proxy in `qwen mcp reconnect`
`qwen mcp reconnect` was building a throwaway `Config` without `usageStatisticsEnabled` or `proxy`, silently defaulting usage statistics to enabled and emitting a `session_start` event even when the user had opted out. Closes #12844. **Privacy fix — telemetry was firing against explicit opt-out.**

### ✅ #12876 — Inset docked right panel below the macOS titlebar drag region
Fixes the macOS Desktop shell layout where the docked right panel's close button sat under the titlebar drag region, making it impossible to close once opened. Complements the toggle-state fix in #12874.

### ✅ #12833 — Add a linux-aarch64 leg to the Desktop release matrix
`desktop-latest.json` now gains a `linux-aarch64` entry; releases publish an arm64 AppImage and deb alongside x86_64. **Expands Desktop availability to ARM64 Linux.**

### ✅ #12590 — Optional System One Decision Gate (von-install + /superfast)
Implements an opt-in, per-turn classification gate using a small local model (Von) that skips expensive work on obvious requests. Off by default, fails open. **Interesting performance optimization direction — a "fast path" before the full agent loop.**

### ✅ #12531 — Stop MCP server rules from authorizing a colliding server
MCP server-level and wildcard permission patterns are no longer reduced through the lossy `sanitizeToolNameForProvider()` before comparison. `matchesMcpPattern()` now compares literally against the two trusted spellings. **Security-relevant: prevents a permission bypass where a wildcard rule could authorize a different MCP server.**

### ✅ #10954 — Expose the background agents the supervisor is running
Adds `GET /background-agents` to `qwen serve`: returns each supervised agent's `sessionId`, `name`, and `state` (e.g., `needs_input`). Stack position 4/4. **Enables the Agent View UI to display and manage background agents.**

---

## 5. Feature Request Trends

The dominant theme is **Managed Agent infrastructure** — at least 10 issues/PRs trace back to #12380's staged roadmap:

| Direction | Representative Issues |
|---|---|
| **Managed Agent architecture** | #12380 (umbrella), #12737 (Stage B), #12793 (Stage D), #12867 (Stage D follow-ups), #12872 (Stage F FG6), #12728 (Stage F CI gate) |
| **Runtime Broker & worker lifecycle** | #12766 (restarted Broker can't adopt/retire workers), #12670 (host reboot pins LOST binding), #12859 (fastjson2 decimal persistence) |
| **Cross-session & multi-agent messaging** | #9845 (--bare/--safe-mode gate), #12866 (five surfaces state stale reachability rules), #12858 (workspace agent collaboration UI) |
| **Extension & plugin ecosystem** | #12183 (deployment-managed extensions), #12832 (ScreenContextAgent MCP tool example), #12561 (MemoryChanged hooks) |
| **Web Shell / Desktop UX** | #12682 (quote selected message into prompt), #12858 (workspace agent chat UI), #12874 (macOS panel toggle bug) |
| **Memory & context management** | #10151 (structured Auto Memory recall), #12853 (review debt cleanup), #12835/#12838 (skills listing hygiene) |

Secondary trend: **developer experience hardening** — CI gates for managed-agent verification (#12728, #12864, #12872), test contract follow-ups (#12846, #12847), and release-matrix completeness (#12833, #12877).

---

## 6. Developer Pain Points

1. **Managed Agent is fragmenting into dozens of tracked issues.** The #12380 umbrella has at least 8 direct follow-ups, each with its own stage (B, D, F, H), review rounds, and deferred findings. Developers tracking this roadmap need to follow a deep chain: #12380 → #12698 → #12737, #12793 → #12867, #12827 → #12855, #12830 → #12847. The complexity is manageable but opaque without reading the full proposal.

2. **Review debt is piling up.** Multiple PRs (#10183, #12107, #12650, #12830) have exceeded five review rounds, with non-blocking findings being deferred to separate issues (#12853, #12860, #12659, #12847) rather than resolved inline. This keeps large PRs open indefinitely and creates a second backlog of "review debt" issues.

3. **Telemetry and privacy bugs recur in CLI command construction.** #12844/#12857 shows `createMinimalConfig()` in `qwen mcp reconnect` silently enabling usage statistics against user opt-out. Similar minimal-config patterns likely exist in other short-lived CLI commands and are easy to miss in review.

4. **Java/TypeScript parity is a constant source of follow-ups.** Issues like #12859 (fastjson2 BigDecimal), #12846 (managed-extension-record contract), and #12864 (Hosted no-tool gate) all exist specifically to close gaps between the two integration test suites. The managed-agent Java side in particular generates a disproportionate number of "close deferred follow-up" issues.

5. **macOS Desktop UX has accumulated multiple toggle/state-machine bugs** (#12874 panel won't close, #12876 panel inset under titlebar, #9305 VP content top-alignment). These are individually small but collectively erode confidence in the Desktop shell.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-09-28

## 1. Today's Highlights
No new releases landed in the last 24 hours, but activity remains high: 14 issues and 48 PRs were updated. The focus is v0.10.1 stabilization — PR #6672 bundles ready fixes, while maintainers push runtime correctness, undo/snapshot ownership, and trust-boundary hardening. Community reports continue to surface TUI regressions around multiline paste, real-time refresh, long-run scrolling, and background-process cleanup.

## 2. Releases
No new releases in the last 24 hours.

## 3. Hot Issues
1. **#6427 [OPEN] [bug] 0.10.0 regression: multiline paste on Windows Terminal self-submits one message per line (#5981 re-broken)** — [Hmbown/Codewhale Issue #6427](https://github.com/Hmbown/Codewhale/issues/6427)  
   High-impact terminal input regression for Windows Terminal users; a prior fix appears re-broken. Community reaction: 3 comments, active triage.

2. **#6573 [OPEN] [bug, needs-triage] Multiple TUI Sessions Contend on Subagents Store → CPU Spin-loop** — [Hmbown/Codewhale Issue #6573](https://github.com/Hmbown/Codewhale/issues/6573)  
   Idle codewhale processes pin CPU when multiple TUI sessions contend on the subagents store. Matters for resource stability; 1 comment.

3. **#6651 [OPEN] [bug, needs-triage] TUI interface cannot refresh in real time** — [Hmbown/Codewhale Issue #6651](https://github.com/Hmbown/Codewhale/issues/6651)  
   TUI fails to refresh when the terminal is unfocused. UX/responsiveness issue; 1 comment.

4. **#6688 [OPEN] [needs-triage] exec takes the prompt only as argv, so anything above ~128 KiB fails with E2BIG** — [Hmbown/Codewhale Issue #6688](https://github.com/Hmbown/Codewhale/issues/6688)  
   Hard kernel argv limit blocks large prompts before Codewhale starts. Detailed measurements provided; no comments yet.

5. **#6689 [OPEN] [needs-triage] hooks: export a post-admission execution receipt to tool_call_after** — [Hmbown/Codewhale Issue #6689](https://github.com/Hmbown/Codewhale/issues/6689)  
   Hooks cannot reliably tell what a shell tool actually ran after admission/rewrites. Observability gap for automation; no comments.

6. **#6546 [OPEN] [enhancement, needs-triage] To-do list is not manageable** — [Hmbown/Codewhale Issue #6546](https://github.com/Hmbown/Codewhale/issues/6546)  
   No clear/delete path for todo items on macOS 15.5 / codewhale 0.10.0 and earlier. Basic UX gap; no comments.

7. **#6621 [OPEN] Bind fresh HTTP threads to their live snapshot session for file undo** — [Hmbown/Codewhale Issue #6621](https://github.com/Hmbown/Codewhale/issues/6621)  
   HTTP threads can create snapshots but expose no `ThreadRecord.session_id`, causing patch-undo to return `files_restored=false`. Correctness issue authored by maintainer; no comments.

8. **#6654 [OPEN] [needs-triage] Background shells have no parent-death cleanup** — [Hmbown/Codewhale Issue #6654](https://github.com/Hmbown/Codewhale/issues/6654)  
   `background: true` shells can outlive a TUI that dies without unwinding, leaving orphan processes. Lifecycle/resource issue; no comments.

9. **#6652 [OPEN] [bug, needs-triage] After running for a long time, TUI scrolling becomes laggy, like jelly** — [Hmbown/Codewhale Issue #6652](https://github.com/Hmbown/Codewhale/issues/6652)  
   Long-running sessions show partial scrolling and lag. Performance degradation over time; no comments.

10. **#6650 [OPEN] [bug, needs-triage] The shortcut key for switching thinking intensity is abnormal** — [Hmbown/Codewhale Issue #6650](https://github.com/Hmbown/Codewhale/issues/6650)  
    `Ctrl+T` fails to cycle on every third press. Input-handling bug referenced by PR #6667, though that PR does not close it; no comments.

## 4. Key PR Progress
1. **#6672 [OPEN] v0.10.1 integration: land the ready PRs together** — [Hmbown/Codewhale PR #6672](https://github.com/Hmbown/Codewhale/pull/6672)  
   Integration PR for v0.10.1; merges ready PRs so CI runs once on the combination, with a merge commit keeping each PR head reachable.

2. **#6645 [OPEN] fix(runtime): threads own the restore points on their turns; undo restores or refuses (#6621)** — [Hmbown/Codewhale PR #6645](https://github.com/Hmbown/Codewhale/pull/6645)  
   Closes #6621/#6659; gives Runtime threads lasting snapshot identity instead of random UUIDs, fixing undo/snapshot ownership.

3. **#6682 [OPEN] fix(tui): scope /undo to the paths the undone step changed (#6644)** — [Hmbown/Codewhale PR #6682](https://github.com/Hmbown/Codewhale/pull/6682)  
   Stacked on #6645; replaces whole-tree restore with path-scoped undo, closing #6644.

4. **#6680 [OPEN] fix: keep undo, resume and requirements honest; bound stream lines** — [Hmbown/Codewhale PR #6680](https://github.com/Hmbown/Codewhale/pull/6680)  
   Six audit fixes: read-error handling for undo/diff, resume preserving quoted compaction markers, and bounded stream lines.

5. **#6601 [OPEN] fix(trust): credentials masked at rest, honest approval timeouts, workspace trust** — [Hmbown/Codewhale PR #6601](https://github.com/Hmbown/Codewhale/pull/6601)  
   Trust-lane work for 0.10.1; masks credentials, fixes approval timeouts, and strengthens workspace trust.

6. **#6681 [OPEN] fix(runtime): harden browser sessions, fleet SSH and tool trust boundaries** — [Hmbown/Codewhale PR #6681](https://github.com/Hmbown/Codewhale/pull/6681)  
   Adds strict SSH host-key checking, restricts agent resume, and requires approval for task-gate results.

7. **#6678 [OPEN] fix: path containment hardening for worktrees, fleet names, read guards and capture paths** — [Hmbown/Codewhale PR #6678](https://github.com/Hmbown/Codewhale/pull/6678)  
   v0.10.1 path-containment hardening with separate regression tests for sub-agent worktrees, fleet names, read guards, and capture paths.

8. **#6687 [OPEN] fix(tui): first launch keeps the configured provider instead of adopting local Ollama** — [Hmbown/Codewhale PR #6687](https://github.com/Hmbown/Codewhale/pull/6687)  
   Fixes first-run provider override when a local Ollama server is running, preserving the configured provider/model.

9. **#6684 [OPEN] fix(rlm): bound an RLM turn by the child wall-clock budget** — [Hmbown/Codewhale PR #6684](https://github.com/Hmbown/Codewhale/pull/6684)  
   Adds a wall-clock bound to the RLM loop; stalled model or Python rounds now return partial results at the deadline.

10. **#6649 [OPEN] runtime_api: end every server-initiated thread stream with a typed stream.end** — [Hmbown/Codewhale PR #6649](https://github.com/Hmbown/Codewhale/pull/6649)  
    Replaces bare EOF on `GET /v1/threads/{id}/events` with a typed `stream.end`, covering failed replays, broadcast-lag catch-up, and shutdown.

## 5. Feature Request Trends
- **TUI performance and responsiveness:** real-time refresh when unfocused (#6651), long-run scrolling lag (#6652), and CPU spin-loop from session contention (#6573).
- **Terminal input robustness:** multiline paste regression (#6427), `Ctrl+T` thinking-intensity cycling (#6650), and cursor visibility (#6545).
- **Undo/snapshot correctness:** bind HTTP threads to snapshot sessions (#6621), scope `/undo` to changed paths (#6682), and keep undo/resume honest (#6680).
- **Process lifecycle management:** parent-death cleanup for background shells (#6654) and idle notifications for sub-agent background work (#6635).
- **Observability and extensibility:** post-admission execution receipts for hooks (#6689), typed artifact references (#6660), and session receipts (#6591).
- **Input/config completeness:** exec prompt via stdin/file for >128 KiB (#6688) and missing AICraft descriptor fields (#6616).
- **UX management:** clear/delete controls for the todo list (#6546).
- **Trust/security hardening:** credential masking, path containment, and SSH host-key enforcement (#6601, #6678, #6681).

## 6. Developer Pain Points
- **TUI regressions and instability:** multiline paste re-broken (#6427), refresh failures (#6651), jelly-like scrolling (#6652), cursor artifacts (#6545), and shortcut anomalies (#6650).
- **Resource leaks and concurrency:** multiple sessions contend on the subagents store causing CPU spin (#6573); background shells orphaned on parent death (#6654).
- **Undo/snapshot reliability:** HTTP threads lack session binding, producing silent `files_restored=false` (#6621); `/undo` whole-tree restore is too broad (#6682).
- **Hard input limits:** `codewhale exec` cannot accept prompts above ~128 KiB due to argv `E2BIG` (#6688).
- **Observability gaps:** hooks cannot see the effective command after admission/rewrites (#6689).
- **Basic UX omissions:** todo list cannot be cleared or managed (#6546).
- **CI gate failures:** clean upstream `main` after September 27 changes fails the Linux full-workspace gate (#6665).
- **Triage noise:** unrelated spam such as the medical-billing issue #6657 was closed, but adds triage load.

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

Thinking Process:

1.  **Understand the Goal**: The user wants a structured English digest of the ComfyUI community activity for the date `2026-09-28` based on provided GitHub data (Issues, Pull Requests, Releases). The output needs to follow specific sections:
    *   Today's Highlights (2-3 sentences summarizing the most important updates)
    *   Releases (omit if none, and indeed "None" was provided in the source data)
    *   Hot Issues (Pick 10 noteworthy Issues, explain why they matter and community reaction)
    *   Key PR Progress (Pick 10 important PRs, describe features or fixes)
    *   Feature Request Trends (Distill the most-requested feature directions from all Issues)
    *   Developer Pain Points (Summarize recurring developer frustrations or high-frequency requests)
    *   Style: Concise, professional, suited for technical developers, include GitHub links for each item.

2.  **Analyze the Input Data**:
    *   **Date of digest**: 2026-09-28 (data updated up to 2026-09-27).
    *   **Releases**: None.
    *   **Issues (Total: 15 items, top ones selected)**:
        *   #15100 [OPEN] [User Support] Mess with stable versions (interivisionlord, 36 comments, 8 👍) - Discrepancy with stable versions/custom nodes.
        *   #16223 [OPEN] comfy-aimdo: hostbuf_read_file_slice 'device copy failed' / 'aimdo memory compile error' when two ComfyUI instances stage large models on two GPUs concurrently (signerzwb) - Concurrent multi-instance GPU staging issue.
        *   #15760 [OPEN] [MiniMax H3][Linux][multi-GPU] reproducible whole-host hard resets with INT8 ConvRot while Wan 2.2 is stable (spikezz) - Hard resets with MiniMax H3.
        *   #14107 [OPEN] [Potential Bug] Running with "--cpu" flag still tries to use Kornia (eubankct) - CPU flag still triggers Kornia usage.
        *   #16516 [OPEN] MiniMax H3 inpainting latent masking example workflow omits Reference-to-Video conditioning (Jonseed) - Example workflow bug.
        *   #16435 [OPEN] Qwen-Image-2.1 image edit: VAE reference-latent splice produces broadband noise at exactly resolution=1024 (mpbrewing) - Resolution-specific bug in Qwen edit.
        *   #15797 [OPEN] [User Support, Stale] Node threw an error during execution (Joker2020-cmd).
        *   #14380 [OPEN] [Potential Bug] The "Download-All" button does not download anything. Nodes don't download (zasonic).
        *   #8699 [OPEN] Feature Request: Expose filename from **Load Image** node for dynamic output naming (ChristianKleineidam, 6 👍) - Highly requested feature: expose filename.
        *   #16589 [OPEN] MiniMax H3 ref2va: major reference-fidelity regression in local ComfyUI (n8704918-prog).
        *   #16587 [OPEN] MiniMax H3 FL2VA on single DGX Spark GB10: whole-host loss (ctala).
        *   #16585 [OPEN] Qwen3-VL vision tower runs in float32, so NVFP4-quantized vision layers crash (oroboros083-jpg).
        *   #16610 [OPEN] LTX-2.3 speech is unintelligible with a GGUF Gemma text encoder since #15580 (Viannax74).
        *   #16604 [CLOSED] MiniMax H3 ref2va: shape mismatch (PureGreenGT).
        *   #16607 [OPEN] [Potential Bug] Oversharpened/Noisy Output Qwen Image 2.1 Edit (jprsyt5).
    *   **Pull Requests (Total: 27 items, top 20 by comment count shown, but mostly 0 comments, ordered by recency/activity)**:
        *   #16590 [OPEN] Redact sensitive headers when logging API node responses (stanleys12) - Security fix.
        *   #10238 [OPEN] WanImageToVideo, WanFirstLastFrameToVideo: Add `vae_tile_size` optional arg (alexheretic) - Performance/VRAM optimization for AMD.
        *   #16608 [CLOSED] Clamp Qwen Image 2.1 fp16 activations in place (dcbert) - Memory compiler crash fix.
        *   #16612 [OPEN] Support comfy-kitchen's AWQ W4A16 layout as the awq_w4a16 quant format (JoaoZaokk) - Quantization format support.
        *   #16567 [OPEN] Fix Qwen-Image 2.1 text encoder fallback for vision-stripped / GGUF Qwen3-8B weights (Rain798377).
        *   #16609 [CLOSED] [Partner Nodes] chore(Sora): remove deprecated Sora nodes (bigcat88).
        *   #16611 [OPEN] Fix aliased Llama2_ intermediate_output snapshots when clone() is a no-op (chelsealong) - Fix for #16610.
        *   #16406 [OPEN] Fix character_mask row placement in WanAnimateToVideo (0xBeycan).
        *   #16595 [OPEN] Add comfy_attention and AttentionTensorContainer to a few models (comfyanonymous).
        *   #16530 [OPEN] Optimize Seedvr2 (kijai) - VRAM optimization.
        *   #16519 [OPEN] Support Qwen-Image 2.1 union fun controlnet (kijai).
        *   #16606 [OPEN] Support vae/ dir in LTXVAudioVAELoader (smhc).
        *   #16605 [OPEN] background_removal: match BiRefNet's training normalization and resolution (maromri).
        *   #16603 [OPEN] Use linear for Qwen VL patch embed (Luke458) - AMD performance fix.
        *   #16580 [OPEN] fix(assets): start when the database packages are missing (synap5e).
        *   #16602 [OPEN] fix(db): wait briefly for the database lock at startup and log who holds it (synap5e).
        *   #16598 [CLOSED] feat(db): wait briefly for the database lock at startup (synap5e).
        *   #16601 [OPEN] fix(wan): scope context_img_len assignment to the img_emb guard (kapil971390).
        *   #16600 [OPEN] Pause the output rescan's loops so prompts and the UI stay responsive (synap5e).
        *   #16599 [OPEN] Rescan the output folder by listing folders instead of checking every file (synap5e).

3.  **Drafting Sections**:

    *   **Today's Highlights (2-3 sentences)**:
        Focus on the shift towards optimization (VRAM, performance on AMD/ROCm), stability and memory compiler fixes (aimdo, Qwen activations clamping, database locks), and security/handling improvements (API redaction, GGUF/quant formats). Mention the active development around Qwen-Image 2.1, MiniMax H3, and core database/UI responsiveness enhancements.

    *   **Releases**:
        None. (Keep it brief as instructed: "omit if none").

    *   **Hot Issues (Pick 10 noteworthy Issues)**:
        Let's select the 10 most impactful ones from the list of 15, focusing on those with high community interaction or severe bugs:
        1.  *#15100 [User Support] Mess with stable versions* (8 👍, 36 comments): High engagement on stability testing/custom node conflicts.
        2.  *#16223 comfy-aimdo memory compile error with concurrent instances*: Crucial multi-GPU/multi-instance deployment issue.
        3.  *#15760 [MiniMax H3][Linux][multi-GPU] reproducible whole-host hard resets*: Severe system-level stability issue with INT8 ConvRot.
        4.  *#14107 Running with "--cpu" flag still tries to use Kornia*: Core logic bug affecting CPU-only runs.
        5.  *#16435 Qwen-Image-2.1 image edit: VAE reference-latent splice produces broadband noise at exactly resolution=1024*: Very specific but reproducible regression on a popular model.
        6.  *#16585 Qwen3-VL vision tower runs in float32, so NVFP4-quantized vision layers crash*: Crucial quantization compatibility issue.
        7.  *#16610 LTX-2.3 speech is unintelligible with a GGUF Gemma text encoder*: Regression in speech generation due to tensor cloning aliasing.
        8.  *#16589 MiniMax H3 ref2va: major reference-fidelity regression*: Visual quality regression on a hot new model.
        9.  *#8699 Feature Request: Expose filename from Load Image node* (6 👍): Highly requested feature for workflow output tracking.
        10. *#14380 The "Download-All" button does not download any. Nodes don't download*: Core UI/UX bug.
        (Note: Let's write concise summaries and explain why they matter).

    *   **Key PR Progress (Pick 10 important PRs)**:
        Select the most technically interesting or critical ones:
        1.  *#16590 Redact sensitive headers when logging API node responses*: Security/Privacy improvement.
        2.  *#16608 Clamp Qwen Image 2.1 fp16 activations in place*: Fixes memory compiler crash (`aimdo memory compile error`).
        3.  *#16612 Support comfy-kitchen's AWQ W4A16 layout*: Expands quantization support for 4-bit weights.
        4.  *#16611 Fix aliased Llama2_ intermediate_output snapshots when clone() is a no-op*: Fixes the LTX-2.3 GGUF speech issue (#16610).
        5.  *#10238 Add `vae_tile_size` optional arg to WanImageToVideo*: VAE tiling config to solve slow VAE performance on AMD GPUs.
        6.  *#16603 Use linear for Qwen VL patch embed*: Key performance fix for AMD ROCm (slow Conv3d issue).
        7.  *#16530 Optimize Seedvr2*: Frame-by-frame processing with int8 cache to save VRAM.
        8.  *#16595 Add comfy_attention and AttentionTensorContainer to a few models*: Standardizing attention backends.
        9.  *#16599 & #16600 Output folder rescan and UI responsiveness optimizations (by synap5e)*: Listing folders instead of files, pausing loops to keep UI responsive. Let's group these or pick the key ones: #16599 (folder listing optimization) and #16600 (loop pause for UI responsiveness) are great system-level improvements. Let's list them individually or as a combined effort if space permits, but the prompt says "Pick 10 important PRs". Let's list:
            *   #16590 (Redact API headers)
            *   #16608 (Clamp Qwen fp16 activations)
            *   #16612 (AWQ W4A16 layout)
            *   #16611 (Llama2 clone fix)
            *   #10238 (Wan VAE tile size)
            *   #16603 (Qwen VL linear patch embed)
            *   #16530 (Seedvr2 optimization)
            *   #16599 (Rescan output folder by listing folders)
            *   #16600 (Pause output rescan loops)
            *   #16601 (fix(wan): scope context_img_len assignment)
            Let's choose the top 10 distinct ones. Let's write them down clearly.

    *   **Feature Request Trends**:
        Extracted from issues and general patterns:
        *   *Metadata and Output Tracking*: Exposing original filenames (like #8699) to maintain traceability in exported pipelines.
        *   *Hardware Compatibility & Performance on AMD/Alternative hardware*: Multiple requests/PRs target AMD performance (Kornia CPU flag issues, slow Conv3d on AMD, VAE tiling options for AMD GPUs).
        *   *Better Configuration/Control over Quantization and loaders*: Handling GGUF text encoder fallbacks, NVFP4 vision tower dtypes, and AWQ W4A16 formats.
        *   *UI/UX Enhancements*: Download-all buttons working, dynamic output naming, responsive UI during heavy background database scans.

    *   **Developer Pain Points**:
        *   *Memory Compiler / `aimdo` Crashes*: Clashes between PyTorch memory allocation graphs and custom ops, particularly during concurrent multi-instance runs or in-place clamping operations.
        *   *Quantization Fragmentation*: Supporting various quant formats (NVFP4, AWQ W4A16, GGUF text-only/vision-stripped checkpoints) requires deep, model-specific patching.
        *   *AMD / ROCm Performance Bottlenecks*: Default disabling of cuDNN/MIOpen leads to extremely slow fallback paths (e.g., `slow_conv3d` taking 14s per step) unless manually worked around.
        *   *Database and Startup Locks*: File locking issues on quick restarts and dependencies missing on minimal venv setups causing startup failures.
        *   *Multi-GPU / Multi-Instance Instabilities*: Concurrent model staging and INT8 ConvRot causing hard system resets.

4.  **Refining and Formatting the Output**:
    *   Ensure all links are formatted properly using the issue/PR URLs provided in the data (e.g. `https://github.com/Comfy-Org/ComfyUI/issues/15100` or the custom URL provided in the prompt like `Comfy-Org/ComfyUI Issue #15100`). The prompt provides a "URL" field for each item, e.g. `URL: Comfy-Org/ComfyUI Issue #15100`. I will use standard GitHub URL formatting: `https://github.com/Comfy-Org/ComfyUI/issues/15100` or just write the link as `Comfy-Org/ComfyUI Issue #15100` or standard markdown links if the exact URL is formatted as `URL: Comfy-Org/ComfyUI Issue #15100`. Let's construct standard URLs: `https://github.com/Comfy-Org/ComfyUI/issues/15100` and `https://github.com/Comfy-Org/ComfyUI/pull/16590`. This looks professional and is standard for GitHub. Let me write them out as standard markdown links.

    *   *Check the date*: Digest for 2026-09-28. The data is updated up to Sept 27, 2026.

    *   *Check Section 1 (Today's Highlights)*:
        "Today's Highlights: ComfyUI development is heavily focused on stability, performance, and security, with critical fixes targeting memory compiler crashes (`aimdo`) and system hard resets during multi-GPU/minimax runs. Significant progress is being made on AMD ROCm performance, quantization support (AWQ W4A16, NVFP4), and core database/UI responsiveness. Developers are actively stabilizing newly added models like Qwen-Image 2.1 and MiniMax H3." (3 sentences, covers the core themes).

    *   *Check Section 2 (Releases)*:
        "No new releases were published in the last 24 hours."

    *   *Check Section 3 (Hot Issues - 10 items)*:
        Let's write a concise summary for each of the chosen 10, highlighting *why they matter* and *community reaction* (likes/comments).
        1. **#15100: Mess with stable versions** (8 👍, 36 comments) - High community friction regarding custom node interference with stable releases, prompting extensive troubleshooting discussions.
        2. **#16223: Concurrent instance 'device copy failed' / 'aimdo memory compile error'** - Crucial blocker for multi-GPU parallel staging; highlights memory isolation issues when running multiple instances on separate GPUs.
        3. **#15760: MiniMax H3 whole-host hard resets with INT8 ConvRot** - Severe hardware-level stability issue on Linux multi-GPU setups, showing the community how fragile the INT8 convolution routing is.
        4. **#14107: Running with `--cpu` flag still tries to use Kornia** - Core logic bug preventing clean CPU-only execution, causing unexpected dependency loads.
        5. **#16435: Qwen-Image-2.1 edit noise at resolution=1024** - Reproducible visual artifact at a specific default resolution, highlighting a precise regression in VAE splice.
        6. **#16585: Qwen3-VL NVFP4 vision layer crash** - Crucial blocker for quantized multi-modal inference, caused by float32 vision towers clashing with NVFP4 quant ops.
        7. **#16610: LTX-2.3 speech is unintelligible with GGUF Gemma** - Regression in speech synthesis caused by tensor aliasing in the Gemma transformer block.
        8. **#16589: MiniMax H3 ref2va reference-fidelity regression** - Visual quality degradation

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>



# Ollama Community Digest — 2026-09-28

A summary of the latest activity, issues, pull requests, and developer trends in the Ollama ecosystem.

---

### 1. Today's Highlights
The community is heavily focused on parser robustness and reasoning budget controls, with significant updates targeting agentic workflows and tool-call parsing edge cases. On the stability front, critical issues have been

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

# llama.cpp Community Digest — 2026-09-28

## 1. Today's Highlights

Today's release train (b11212–b11223) is dominated by **backend and toolchain polish**: a merged server change enabling RANK pooling batch splitting for causal rerankers (Qwen3 / Qwen3-VL), plus a wave of accelerator tuning across SYCL, CUDA, HIP, Vulkan, and OpenCL. On the issue tracker, attention is concentrated on **multi-GPU / MoE performance regressions** (draft-MTP prompt processing, offloaded-MoE prefill stalls) and **new backend requests** (AMD XDNA, IBM zDNN, Qualcomm Hexagon). Community enthusiasm remains high for API-compatibility work, with the OpenAI Responses API request closing at 44 👍.

## 2. Releases

Ten builds shipped in the last 24h (b11212–b11223):

- **b11223** — `server`: allow RANK pooling batch splitting for causal LLM rerankers, e.g. Qwen3 / Qwen3-VL. Unlocks batching for repurposed-LLM rerankers that previously required all tokens in one physical batch. ([PR #28876](https://github.com/ggml-org/llama.cpp/pull/28876))
- **b11222** — `common`: avoid side effects around params parsing; `--rpc` now registered unconditionally with `llama_supports_rpc()` checked in its handler; server init log printed after arg parsing. ([PR #29537](https://github.com/ggml-org/llama.cpp/pull/29537))
- **b11221** — `common`: `string_split<T>` now throws on invalid values. ([PR #29518](https://github.com/ggml-org/llama.cpp/pull/29518))
- **b11218** — `jinja`: add `dict` builtin support, with tests. ([PR #29477](https://github.com/ggml-org/llama.cpp/pull/29477))
- **b11217** — `opencl`: refine bin kernel loading condition. ([PR #29503](https://github.com/ggml-org/llama.cpp/pull/29503))
- **b11216** — `sycl`: FWHT kernels for block widths above 512 (1024/2048/4096/8192). ([PR #29243](https://github.com/ggml-org/llama.cpp/pull/29243))
- **b11215** — `CUDA`: tune fp16 tile FlashAttention configs for head sizes 40–112. ([PR #26289](https://github.com/ggml-org/llama.cpp/pull/26289))
- **b11214** — `HIP`: enable fattn-mma kernel on CDNA for `dkq > 256` at large batch sizes. ([PR #28907](https://github.com/ggml-org/llama.cpp/pull/28907))
- **b11213** — `vulkan`: fix argsort kernel selection for Adreno. ([PR #29469](https://github.com/ggml-org/llama.cpp/pull/29469))
- **b11212** — `common`: throw instead of abort on grammar without llguidance. ([PR #29516](https://github.com/ggml-org/llama.cpp/pull/29516))

## 3. Hot Issues

1. **[#19466](https://github.com/ggml-org/llama.cpp/issues/19466) [CLOSED] KV cache save fails for vision models (41 comments, 7 👍)** — `/slots/3?action=save` doesn't work with vision-enabled models. Long-running, highly-visible server regression; the high comment count reflects sustained community debugging across the multimodal path.
2. **[#21725](https://github.com/ggml-org/llama.cpp/issues/21725) [OPEN] Feature Request: XDNA backend (33 comments, 35 👍)** — Request to support AMD XDNA NPUs. Strongest 👍 signal of any issue this window, showing real appetite for non-CUDA/ROCm AMD acceleration.
3. **[#27428](https://github.com/ggml-org/llama.cpp/issues/27428) [OPEN] draft-MTP halves prompt processing on multi-GPU layer split (21 comments)** — Speculative decoding regression isolated to multi-GPU splits; single-GPU is unaffected. Matters because it penalizes exactly the large-model users who benefit most from MTP.
4. **[#19138](https://github.com/ggml-org/llama.cpp/issues/19138) [CLOSED] Support OpenAI Responses API `/v1/responses` (19 comments, 44 👍)** — Highest 👍 count in the dataset. Reflects a broad desire for drop-in OpenAI-compatible server surface.
5. **[#26448](https://github.com/ggml-org/llama.cpp/issues/26448) [OPEN] Run MoE expert weights from host RAM via PCIe DMA (11 comments, 7 👍)** — Proposes keeping experts in pinned host memory and reading directly over PCIe, with measured VRAM savings. A high-leverage direction for running large MoE on small cards.
6. **[#29104](https://github.com/ggml-org/llama.cpp/issues/29104) [OPEN] Server silently stops processing when `/metrics` is scraped (10 comments)** — Reproducible with VictoriaMetrics on Windows + dual RTX 5070 Ti. Serious production-stability concern for observability-enabled deployments.
7. **[#25859](https://github.com/ggml-org/llama.cpp/issues/25859) [OPEN] Offloaded-MoE prefill leaves GPU idle on serial expert H2D copies (8 comments)** — Profiling shows `-ncmoe` prefill starved by serialized expert uploads. Directly informs the MoE offload roadmap.
8. **[#28295](https://github.com/ggml-org/llama.cpp/issues/28295) [OPEN] MSVC compilation doesn't detect AVX-VNNI (7 comments)** — CPU perf left on the table for Windows builds; a build-system gap rather than a kernel bug.
9. **[#29494](https://github.com/ggml-org/llama.cpp/issues/29494) [OPEN] `repeat_last_n` / `dry_penalty_last_n` unbounded → multi-GB zero-filled buffer and OOM (3 comments)** — New, low-comment but high-severity: an unbounded sampler parameter can OOM the server.
10. **[#29499](https://github.com/ggml-org/llama.cpp/issues/29499) [OPEN] llama-server hangs before serving on Jetson Orin NX after b8638→b9016 rewrite (2 comments)** — Edge-deployment blocker tied to the server rewrite; notable because it bisects to a specific architectural change.

Honorable mentions: **[#9289](https://github.com/ggml-org/llama.cpp/issues/9289)** (libllama API changelog, 13 comments), **[#29473](https://github.com/ggml-org/llama.cpp/issues/29473)** (Hexagon HMX `MUL_MAT` returns inf for n≥5), **[#28954](https://github.com/ggml-org/llama.cpp/issues/28954)** (Gemma4 images >1.2 Mpx trigger `ggml_assert`).

## 4. Key PR Progress

1. **[#29545](https://github.com/ggml-org/llama.cpp/pull/29545) ggml: accumulate f16 dot products in f32 on AVX512-FP16** — Fixes overflow so logits match non-AVX512-FP16 paths; supersedes #29530.
2. **[#29544](https://github.com/ggml-org/llama.cpp/pull/29544) rpc: turn `GGML_RPC_DEBUG` into a verbosity level and add logs** — Numeric 0–3 verbosity for connections, handshakes, buffer ops, and graph compute.
3. **[#28876](https://github.com/ggml-org/llama.cpp/pull/28876) server: RANK pooling batch splitting for causal rerankers** — Merged into b11223; enables batched reranking for Qwen3/Qwen3-VL.
4. **[#27773](https://github.com/ggml-org/llama.cpp/pull/27773) add GLM-5.3-Flash (GLM5-Next) support** — 320B hybrid model with 34 KDA linear layers, 11 DSA layers, mHC, text + vision.
5. **[#29543](https://github.com/ggml-org/llama.cpp/pull/29543) mtmd: fail cleanly when non-causal image chunk exceeds batch size** — Directly addresses the Gemma4 large-image crash (#28954) instead of aborting the server.
6. **[#29541](https://github.com/ggml-org/llama.cpp/pull/29541) ci: add zDNN backend build (no tests)** — Brings IBM zDNN into CI, fixes its compiler warnings, and suppresses vendor-file warnings.
7. **[#28331](https://github.com/ggml-org/llama.cpp/pull/28331) respect `-fitc` from llama-bench** — Fixes divergence between `llama-fit-params` and `llama-bench -fitc` context sizing.
8. **[#27983](https://github.com/ggml-org/llama.cpp/pull/27983) / [#27325](https://github.com/ggml-org/llama.cpp/pull/27325) / [#27322](https://github.com/ggml-org/llama.cpp/pull/27322) quantize: add IQ2_NL and IQ3_NL types** — New 32-block quant types for tensors whose row length isn't a multiple of 256, across CPU/Metal/CUDA/Vulkan/SYCL.
9. **[#15550](https://github.com/ggml-org/llama.cpp/pull/15550) quantize: auto-choose quant mix to hit a file-size or BPW target** — Adds `target_bpw_type()` solving a constrained optimization for `--target-size` / `--target-bpw`.
10. **[#28381](https://github.com/ggml-org/llama.cpp/pull/28381) openvino: serve `GET_ROWS` on a weight view from the base Constant** — Resolves view-over-quantized-weight failures exposed by #28253.

Also active: **[#29542](https://github.com/ggml-org/llama.cpp/pull/29542)** (CI: fix uninitialized timer in Windows static test builds), **[#29377](https://github.com/ggml-org/llama.cpp/pull/29377)** (Metal: optimize sparse FA by moving indices to shared memory), **[#29464](https://github.com/ggml-org/llama.cpp/pull/29464)** (llama-bench README sync), **[#14891](https://github.com/ggml-org/llama.cpp/pull/14891)** (activation-based imatrix statistics).

## 5. Feature Request Trends

- **New hardware backends**: AMD XDNA (#21725), IBM zDNN (#29541), Qualcomm Hexagon (#29473), and continued Vulkan/OpenCL/OpenVINO hardening. The project is being pushed well beyond CUDA/ROCm/Metal.
- **MoE memory hierarchy**: Host-RAM experts over PCIe DMA (#26448) and eliminating serial expert H2D stalls during offloaded prefill (#25859). This is the most technically detailed recurring theme.
- **OpenAI API surface parity**: `/v1/responses` (#19138, 44 👍) leads a broader push for drop-in compatibility with hosted APIs.
- **Quantization flexibility**: Per-tensor optimal quant selection (#15550) and new block types for non-256-divisible shapes (#27983/#27325/#27322).
- **Server observability**: Prometheus histograms for request context sizes (#27011) and RPC verbosity control (#29544) — operators want deeper, tunable telemetry.
- **Speculative decoding maturity**: MTP correctness on multi-GPU splits (#27428) and sidecar draft-weight reuse (#29345).

## 6. Developer Pain Points

- **Multi-GPU regressions**: draft-MTP roughly halving prompt processing (#27428), tensor-split assertion failures with `iq4_nl` KV cache (#27116), and the RPC `SET_ROWS` out-of-bounds write (#26912) all point to split paths receiving less coverage than single-device ones.
- **Vulkan/OpenCL stability on consumer and integrated GPUs**: argsort sorting only half the array (#29431), `GGML_ASSERT(tensor->data != NULL)` since b9318 (#23737), Intel dGPU weight eviction causing perf drops (#25646), and UHD 770 crashes on TOP_K (#26219).
- **Server lifecycle and resource safety**: silent processing halt under metrics scraping (#29104), hangs on Jetson Orin NX after the server rewrite (#29499), unbounded sampler parameters causing OOM (#29494), and vision KV-cache save failures (#19466).
- **Build-system gaps hurting real-world perf**: MSVC failing to detect AVX-VNNI (#28295) means Windows users silently lose CPU throughput; static test builds lacked `llama_backend_init()` (#29542).
- **Multimodal edge cases**: single-sample audio aborting the process (#27693), extra silent chunks for 30s-multiple audio (#27697), and large-image non-causal batch overflow (#28954).
- **Stale-issue fatigue**: a large share of the top-commented issues carry the `stale` label, indicating long-lived reports that need triage or closure rather than fresh investigation.

---
*Generated for 2026-09-28 from github.com/ggml-org/llama.cpp activity. Issue/PR comment counts reflect the snapshot provided.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*