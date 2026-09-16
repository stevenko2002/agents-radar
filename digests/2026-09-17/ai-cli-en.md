# AI CLI Tools Community Digest 2026-09-17

> Generated: 2026-09-16 22:15 UTC | Tools covered: 12

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

## Key Updates

1. **Qwen Code v0.24.0** released with breaking change enabling bash to expand project directory variables in command hooks ([QwenLM/qwen-code](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.0))

2. **ComfyUI v0.36.0** shipped with new model blueprints, reorganized subgraph categories, and 4TB AMD Windows VA quota bump ([Comfy-Org/ComfyUI](https://github.com/Comfy-Org/ComfyUI/releases/tag/v0.36.0))

3. **OpenAI Codex** published rapid alpha releases `rust-v0.155.0-alpha.2` through `alpha.13` and `rusty-v8-v152.2.0` ([openai/codex](https://github.com/openai/codex))

4. **Gemini CLI** nightly `v0.62.0-nightly.20260916.g6a466a7e2` fixed AgentLoopContext propagation and a2a-server tasks metadata endpoint ([google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli))

5. **Copilot CLI v1.0.86-1** released with custom agents opting into repository instruction files (`AGENTS.md`, `copilot-instructions.md`, `CLAUDE.md`) and vim mode now GA ([github/copilot-cli](https://github.com/github/copilot-cli/releases/tag/v1.0.86-1))

6. **llama.cpp** shipped b10998-b11009 including fused-QKV tensor-parallel split-state fix for Gemma 4/Qwen3.5 and Qualcomm Hexagon Q4_K/Q6_K kernel support ([ggml-org/llama.cpp](https://github.com/ggerganov/llama.cpp))

7. **DeepSeek TUI v0.9.14** stabilization push continued with Shoreline TUI redesign rebased onto main as fresh-install default ([Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI))

8. **Gemini CLI PR #29244** added atomic file writes and same-path write serialization to prevent silent data loss on concurrent edits ([google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli/pull/29244))

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (Sept 17, 2026)

## 1. Top Skills Ranking

**1. proofcore-contract-auditor** (PR #1771, Sep 15, 2026)
- **Functionality**: Web3 skill for automated static analysis of Solidity and Rust smart contracts, with cryptographic audit proofs anchored to TON blockchain using ProofCore's zero-storage Merkle protocol
- **Discussion Highlights**: Recent addition focusing on blockchain security and automated auditing
- **Status**: OPEN (actively developed)
- **Link**: [PR #1771](https://github.com/anthropics/skills/pull/1771)

**2. md2video-audio** (PR #1703, Sep 15, 2026)
- **Functionality**: Zero-cost skill converting Markdown documents into professional MP4 videos with human-like voiceovers via Marp slide conversion
- **Discussion Highlights**: Creative content generation tool bridging documentation to multimedia
- **Status**: OPEN (actively developed)
- **Link**: [PR #1703](https://github.com/anthropics/skills/pull/1703)

**3. skill-creator trigger detection fixes** (PR #1769, Sep 14, 2026)
- **Functionality**: Critical fixes for skill-creator's trigger evaluation reporting 0% recall and Windows compatibility issues
- **Discussion Highlights**: Addresses core skill creation infrastructure reliability
- **Status**: OPEN (bug fixes)
- **Link**: [PR #1769](https://github.com/anthropics/skills/pull/1769)

**4. pyxel skill** (PR #525, Sep 16, 2026, updated)
- **Functionality**: Retro game development skill for creating, debugging, and verifying Python games with deterministic headless runs and frame inspection
- **Discussion Highlights**: Gaming community tool with deterministic testing capabilities
- **Status**: OPEN (retro gaming focus)
- **Link**: [PR #525](https://github.com/anthropics/skills/pull/525)

**5. document-typography skill** (PR #514, Mar 13, 2026, updated)
- **Functionality**: Typographic quality control for AI-generated documents, detecting orphan word wraps, widow paragraphs, and numbering misalignment
- **Discussion Highlights**: Quality assurance for document generation workflows
- **Status**: OPEN (document quality focus)
- **Link**: [PR #514](https://github.com/anthropics/skills/pull/514)

## 2. Community Demand Trends

**Workflow Automation & Orchestration**: Strong interest in multi-agent coordination (Hivemind skill #1628, buffer-api #1627) and organization-wide skill sharing (Issue #228)

**Security & Trust**: Critical focus on security boundaries with namespace abuse concerns (Issue #492 - 43 comments), skill quality analysis tools (PR #83), and contract auditing (ProofCore skill)

**Performance Optimization**: Multiple issues around context window management (claude-api skill #1487, mcp-builder evaluation #1390) and execution efficiency

**Code & Content Generation**: Demand for automated code review, testing (scnet-hpc #1615), smart contract auditing, and multimedia conversion tools

**Enterprise Integration**: Skills targeting enterprise workflows like SharePoint (Issue #1175), HPC cluster management, and document processing automation

## 3. High-Potential Pending Skills

**Hivemind: Zero-Cost Multi-Agent Orchestration** (PR #1628, Aug 21, 2026)
- Active development for delegating mechanical work to headless opencode workers while maintaining Claude Code as planner/reviewer
- Addresses context window optimization and agent coordination challenges

**Buffer API Agent Skill** (PR #1627, Aug 21, 2026)  
- Portable social media scheduling skill supporting multiple platforms and GraphQL API
- Cross-platform social workflow automation capability

**SCNet HPC Skill** (PR #1615, Aug 20, 2026)
- Profile-based SSH and Slurm workflows for HPC cluster operations
- Enterprise computing infrastructure management focus

**Office Suite Integration** (Multiple PRs #1765, #1724, #1769)
- Comprehensive fixes for DOCX/PPTX/XLSX processing, MCP compatibility, and skill evaluation infrastructure
- Foundation improvements supporting enterprise document workflows

## 4. Skills Ecosystem Insight

The community is converging on **enterprise-grade automation and security infrastructure** - from blockchain audit proof skills to HPC cluster management, with parallel focus on fixing the underlying skill creation platform itself. The most concentrated demand is for reliable, production-ready skills that handle enterprise workflows while maintaining security boundaries, suggesting a maturation from experimental prototyping toward systematic enterprise adoption.

---

# Claude Code Community Digest — 2026-09-17

## 1. Today's Highlights

No new releases shipped in the last 24 hours. Repository activity is dominated by issue lifecycle cleanup: the top 30 issues by comment count are all closed (mostly flagged as `stale`), indicating a triage/backlog pruning pass rather than new feature landings. The only code-level movement is a cluster of three PRs around the `mods/diff` pane, with one still open.

---

## 2. Releases

No new versions were released in the last 24 hours.

---

## 3. Hot Issues

Notable issues updated in the last 24 hours (all currently closed unless noted):

1. **[Per-subagent skill allowlisting](https://github.com/anthropics/claude-code/issues/82341)** — Asks for allowlists on skills per subagent, rather than preload-all or block-all. Highlights cache cost: every Agent/Task launch rebuilds a fresh 20–32k-token system prompt. Relevant for users tuning token economics across agent teams.

2. **[Threads: in-session sub-conversations with full-context inheritance](https://github.com/anthropics/claude-code/issues/82203)** — Proposes navigable forks/threads with merge-back and agent-team UI. A long-standing context-management request that echoes the session-chain pain point below.

3. **[Stop watermarking our code](https://github.com/anthropics/claude-code/issues/86624)** — User reports generated output containing unwanted markers, raising IP/code-cleanliness concerns. Small but steady upvote interest (👍 2).

4. **[/insights date-range filter (`--since`)](https://github.com/anthropics/claude-code/issues/82928)** — Requests limiting `/insights` analysis to a recent window so resolved friction items stop resurfacing. 👍 2; practical as usage data accumulates.

5. **[Read-only API for conversation history & docs export](https://github.com/anthropics/claude-code/issues/82222)** — Wants scriptable access to claude.ai chat history alongside local transcripts, replacing the manual Settings → Privacy → Export flow. 👍 1.

6. **[Session picker chain linkage](https://github.com/anthropics/claude-code/issues/86488)** — Continuation transcripts appear as unrelated entries in `--resume`; long work produces 3–5 disconnected files. Directly tied to context-continuation friction.

7. **[PreToolUse hooks: visibility into in-flight assistant message](https://github.com/anthropics/claude-code/issues/82413)** — Hook authors cannot see whether the model emitted text before a tool call, limiting guardrail logic. A sharp, well-scoped developer-facing gap.

8. **[Emit `remote.session_id` for local Remote Control sessions](https://github.com/anthropics/claude-code/issues/86583)** — Small, evidence-backed ask to expose an already-existing statusline field, useful for scripting that tracks session state.

9. **[Integrate other LLMs for multi-model routing](https://github.com/anthropics/claude-code/issues/82239)** — Requests first-class multi-model routing (e.g., OpenRouter-style fusion) rather than bolt-on wrappers. Signals user appetite for model flexibility.

10. **[claude.ai Projects: cross-project reads and grouping](https://github.com/anthropics/claude-code/issues/86611)** — Project lists grow one-per-task with no consolidation path; asks for cross-project session reads and project grouping for Cowork/desktop.

---

## 4. Key PR Progress

Only three PRs were updated in the last 24 hours, all focused on the `mods/diff` pane:

1. **[#94847 — diff: first edit opens the pane only when it has a file to list](https://github.com/anthropics/claude-code/pull/94847)** *(OPEN)* — Fixes the pane auto-opening on first Edit/Write/NotebookEdit before fetching, which produced an empty pane for writes outside the repo, ignored files, or a different worktree.

2. **[#94843 — diff: prompt hint reads viewport layout through a type that may lack it](https://github.com/anthropics/claude-code/pull/94843)** *(CLOSED/merged)* — Removes a typecheck failure where `viewport.isFullscreen` is read from a `RenderViewport` that doesn't declare the field yet; the mod already worked at runtime.

3. **[#94653 — diff: first edit opens the pane only where the layout docks it](https://github.com/anthropics/claude-code/pull/94653)** *(CLOSED/merged)* — Stops the pane from opening on wide terminals when the layout can't actually dock it (e.g., `CLAUDE_CODE_NO_FLICKER=0` main screen), preventing an unwanted inline dialog-shaped pane.

**Takeaway:** this is a focused bug-fix cycle on diff pane auto-open behavior, correcting both a layout-placement bug and a cross-engine typecheck regression.

---

## 5. Feature Request Trends

Distilled across the 30 listed issues, the dominant request directions are:

- **Per-scope permission and skill controls** — moving beyond all-or-nothing: per-subagent skill allowlists (#82341) and per-skill toggles inside installed plugins (#82424).
- **Session/context continuity** — threads with merge-back (#82203), visible transcript chain linkage (#86488), preserving conversation order after restart (#82387), and keeping draft input across conversation switches (#82385).
- **Scriptable data access & observability** — read-only conversation-history API (#82222), `remote.session_id` statusline emission (#86583), enterprise spend-limit exposure in the status line (#82481).
- **Usage analytics refinement** — date-range filtering for `/insights` (#82928).
- **Multi-model interoperability** — integrated routing to other LLMs (#82239).
- **TUI/Desktop UX polish** — reduce visual noise/improve performance (#82318), i18n language packs (#82195), voice dictation without keystroke interruption (#86622), keyboard shortcuts for Reply/Attach (#86642), detached-window pane buttons (#82366).
- **Project organization** — cross-project reads and grouping (#86611), purging Recent projects (#86597), and marketplace `category` metadata (#86520).

---

## 6. Developer Pain Points

- **All-or-nothing controls:** skills are either preloaded in full or blocked entirely; plugins are on/off with no per-skill granularity. Developers want finer-grained scoping at both the subagent and plugin levels.
- **Broken session continuity:** continuation chains are invisible in the session picker, context-exhausted conversations appear as unrelated files, and restarting reorders conversations — making long-running work hard to track.
- **Hook limitations:** PreToolUse hooks cannot inspect the in-flight assistant message, capping the sophistication of guardrails users can build.
- **Toolchain noise and performance:** at least one user explicitly complains the TUI is "slow, fat, and noisy," asking for performance focus over feature additions; the diff-pane PRs show related papercut fixes are still landing.
- **Insights staleness:** `/insights` re-surfaces already-resolved friction because there's no time-window filter.
- **Security-warning false positives:** legitimate defensive security work on owned code triggers warnings, creating friction for security-focused developers; a related complaint covers watermark-like artifacts in generated code.
- **Missing scriptable extraction:** exporting or querying conversation history remains a manual, unscriptable flow, blocking automation and archival workflows.
- **Enterprise cost visibility:** Org-level spend limits aren't surfaced in the CLI status line, forcing context-switching to external dashboards.

---

*Data source: github.com/anthropics/claude-code — issues and PRs updated 2026-09-16 to 2026-09-17. Digest covers the top 30 of 50 recently updated issues and all 3 updated PRs.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-09-17

## 1. Today's Highlights
The openai/codex repo saw heavy pre-release activity with a burst of `rust-v0.155.0-alpha.*` releases (up to alpha.13) alongside a `rusty-v8` bump. Community attention remains dominated by **quota/credit accounting disputes** (#41220) and a cluster of **Windows Desktop "send button disabled after first turn"** regressions (#44781, #45019, #45626, #45886). On the engineering side, ~20 PRs landed covering screen-reader accessibility, security hardening (managed residency, macOS preferences), and MCP/apps-server extensibility.

## 2. Releases
- **rust-v0.155.0-alpha.13 / .12 / .11 / .10 / .9 / .8 / .2.6 / .2.5** — rapid iterative alpha channel builds toward the 0.155.0 release; no detailed changelogs published. The cadence (8+ alphas in 24h) suggests active stabilization of the next CLI milestone.
- **rusty-v8-v152.2.0** — underlying V8 bindings bump.

## 3. Hot Issues

1. **[#41220 — Meta: Abnormal quota depletion & usage-accounting inconsistencies](https://github.com/openai/codex/issues/41220)** (45 comments, 👍17) — The central tracker for users reporting quota burning faster than token evidence suggests. The single most consequential trust issue for paid plans.
2. **[#44781 — Desktop: Editing/resending queued message → "App-server queued follow-up no longer exists"](https://github.com/openai/codex/issues/44781)** (41 comments, 👍50) — Highest-upvoted issue; a Windows Desktop messaging regression disrupting core workflow.
3. **[#45019 — App-server queued follow-up no longer exists (macOS)](https://github.com/openai/codex/issues/45019)** (19 comments, 👍48) — Cross-platform duplicate of #44781, confirming it's an app-server bug, not OS-specific.
4. **[#35259 — Desktop re-enters model during wait/status polling, consuming credits](https://github.com/openai/codex/issues/35259)** (26 comments, 👍22) — Multi-agent polling burns ~20% of tokens on pure wait turns; ties directly into the quota controversy.
5. **[#45085 — One multi-agent Work task consumed 86% of weekly Prolite quota (~198M tokens, 97.4% cached)](https://github.com/openai/codex/issues/45085)** (7 comments) — Concrete data point fueling #41220; cached-input-heavy consumption accounting under scrutiny.
6. **[#45626 / #45886 — Windows Desktop: follow-up messages disabled after first turn](https://github.com/openai/codex/issues/45626)** (9 & 6 comments) — Reproducible send-button regression on `26.908.*`; CLI unaffected, pointing to the app-server layer.
7. **[#16900 — Subagent status visibility & parent-child wait mechanism](https://github.com/openai/codex/issues/16900)** (21 comments) — Long-running request: parents prematurely redo work that children are still completing. Growing relevance as multi-agent flows mature.
8. **[#18115 — Repository-scoped marketplace/plugin configuration](https://github.com/openai/codex/issues/18115)** (15 comments, 👍66) — Very high upvote: teams want plugin config versioned in-repo via `.codex/config.toml` rather than user-scoped.
9. **[#31376 — `codex exec` hangs on dead pooled connection, no bounded retry](https://github.com/openai/codex/issues/31376)** (16 comments) — Stalled HTTP requests (CLOSE_WAIT sockets) in long non-interactive runs; reliability-critical for CI/automation users.
10. **[#45594 — Pro: Spark quota shows 100% but model returns HTTP 400 / missing from lists](https://github.com/openai/codex/issues/45594)** (4 comments) — Usage-metering and model-availability drift, echoing the accounting-consistency theme.

## 4. Key PR Progress

1. **[#46040 — Default TUI animations off when a screen reader is detected](https://github.com/openai/codex/pull/46040)** — Cross-platform screen-reader probe (450ms timeout) auto-disables animations; notable accessibility win.
2. **[#46011 — Enforce managed residency when constructing API providers](https://github.com/openai/codex/pull/46011)** — Fixes bypass of data-residency overrides in realtime connections; enterprise-compliance relevant.
3. **[#46032 — Require forced macOS preferences for managed configuration](https://github.com/openai/codex/pull/46032)** — Prevents user-writable defaults from supplying trusted admin config; security hardening.
4. **[#46035 — Per-app tool exposure configuration](https://github.com/openai/codex/pull/46035)** — Adds `apps.<connector_id>.omit_tools_from` for per-connector deferred-discovery opt-out.
5. **[#46033 — Preserve orchestrator skill caches across MCP runtime updates](https://github.com/openai/codex/pull/46033)** — Stops needless cache invalidation when only one MCP connection changes.
6. **[#46020 — Experimental rollout compression endpoint](https://github.com/openai/codex/pull/46020)** — `rollout/compress` for background compression of cold local thread history.
7. **[#46031 — Keep Noise relay streams alive after repeated handshake failures](https://github.com/openai/codex/pull/46031)** — Adds 10s backoff instead of killing the whole relay after 8 failed handshakes; remote-connectivity resilience.
8. **[#46026 — Centralize model-message resolution in `codex-prompts`](https://github.com/openai/codex/pull/46026)** — Consolidates base-instruction rendering, Guardian prompts, and multi-agent role prompts into one module.
9. **[#46009 — Centralize compaction checkpoint selection and validation](https://github.com/openai/codex/pull/46009)** — New `codex_history::CompactionCheckpoint` with producer-model-hash checks for safer context compaction.
10. **[#46038 — Test Windows sandbox bin DACL modification permissions](https://github.com/openai/codex/pull/46038)** — Extends ACL tests so the real user retains `WRITE_DAC` on `.sandbox-bin`; continues Windows sandbox reliability work (#31620, #40550).

## 5. Feature Request Trends
- **Repo-scoped configuration & plugins** (#18115, 👍66) — in-repo marketplace/plugin setup for team consistency is the top-upvoted ask.
- **Multi-agent observability** (#16900, #45841) — subagent status introspection, wait mechanisms, and ambitions toward "swarm intelligence" with specialist model networks.
- **Native PR lifecycle automation** (#19112) — Claude Code-parity end-to-end review-to-merge loops in the desktop app.
- **Terminal ergonomics** (#36439) — mouse-click cursor positioning in the CLI prompt.
- **Enterprise auth reliability** (#35006) — dependable MCP OAuth reauthentication for SSO environments.

## 6. Developer Pain Points
- **Quota trust deficit**: The dominant frustration (#41220, #35259, #45085, #45594) — opaque credit consumption, especially in multi-agent flows where polling/wait turns consume real tokens. Users demand transparent usage accounting.
- **Windows Desktop instability**: A dense cluster of regressions — disabled send after first turn (#44781/#45019/#45626/#45886), sandbox setup failures (#40550, #31620, #17458), and WSL2 project-creation errors (#45394). Windows remains the least polished platform.
- **App-server messaging fragility**: The queued-follow-up bug family shows the Desktop↔app-server contract needs hardening, since CLI is unaffected in parallel reports.
- **Network reliability in headless runs**: Unbounded hangs on dead connections (#31376) hurt CI and long `codex exec` jobs.
- **Sandbox/security gaps on Windows**: Repeated ACL/permission issues (#46038, #31620) plus fallback-to-unsandboxed behavior keep Windows sandboxing a hotspot for both bugs and fixes.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-09-17

## 1. Today's Highlights

A new nightly release (`v0.62.0-nightly.20260916.g6a466a7e2`) shipped with fixes to AgentLoopContext propagation and the a2a-server tasks metadata endpoint. Issue activity remains dominated by P1 agent-reliability bugs — most notably subagents falsely reporting `GOAL` success after hitting `MAX_TURNS` and the generalist agent hanging indefinitely. On the PR side, the community is converging on core-correctness work: atomic file writes, a path-traversal bypass fix, and the restoration of user git config for shell commands.

## 2. Releases

**v0.62.0-nightly.20260916.g6a466a7e2**
- `fix(core)`: ensure `AgentLoopContext` properties are preserved across object spread ([#29335](https://github.com/google-gemini/gemini-cli/pull/29335)) — by @diegogodinezr
- `fix(a2a-server)`: add early return on unsupported store in tasks metadata endpoint — by @jesussamuel-byte

## 3. Hot Issues

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — Subagent MAX_TURNS reported as GOAL success** (P1, 13 comments, 2 👍)
   `codebase_investigator` reports `status: "success"` / `Termination Reason: "GOAL"` despite hitting its turn limit before doing any work. This silently hides interruption and undermines trust in subagent results — a serious correctness issue for multi-agent workflows.

2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — Generalist agent hangs** (P1, 8 comments, 8 👍)
   Whenever CLI defers to the generalist agent, it hangs indefinitely — even for trivial operations like folder creation. The highest-reaction open bug this cycle; users report waiting up to an hour before cancelling, with workaround being to disable subagent deferral entirely.

3. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873) — Zero-Dependency OS Sandboxing & Post-Execution Intent Routing** (P2, 9 comments)
   Proposes leveraging Gemini 3's native bash affinity via a sandboxing layer that chains POSIX tools safely. Long-running design discussion about balancing model capability with host security.

4. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — AST-aware file reads, search, and mapping** (P2, 7 comments)
   EPIC investigating whether AST-aware tools can reduce turn counts and token noise by reading method boundaries precisely, navigating code semantically, and improving codebase mapping. Suggested starting points include `tilth` and `glyph`.

5. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — Gemini underuses skills and sub-agents** (P2, 6 comments)
   Anecdotal but widely felt: the model rarely invokes custom skills or sub-agents autonomously, even when descriptions clearly match the task. Users must explicitly instruct the model to use them, reducing the value of skill authoring.

6. **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525) — Deterministic redaction & reduced Auto Memory logging** (P2, security, 5 comments)
   Auto Memory sends transcript content to the extraction model *before* redaction happens, meaning secrets are already in model context. Calls for deterministic redaction and tighter logging controls — a privacy-critical gap.

7. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — Shell command stuck at "Waiting input"** (P1, 4 comments, 3 👍)
   Simple, non-interactive CLI commands hang after completion, still showing "Awaiting user input." Recurs across sessions and is a significant workflow blocker.

8. **[#22672](https://github.com/google-gemini/gemini-cli/issues/22672) — Agent should discourage destructive behavior** (P2, 3 comments, 1 👍)
   The model occasionally uses `git reset` or `--force` when safer alternatives exist, and doesn't fully understand the risk of modifying DBs. Asks for guardrails around destructive operations.

9. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — Browser subagent fails on Wayland** (P1, 4 comments, 1 👍)
   The browser subagent terminates with `GOAL` but produces no output under Wayland sessions, blocking web-automation use cases for Linux users on modern display servers.

10. **[#22232](https://github.com/google-gemini/gemini-cli/issues/22232) — Browser agent session takeover & lock recovery** (P3, 4 comments)
    `BrowserManager.ts` uses fail-fast on locked profiles; proposes automatic takeover/recovery for orphaned persistent sessions, improving resilience for long-running browser workflows.

## 4. Key PR Progress

1. **[#29359](https://github.com/google-gemini/gemini-cli/pull/29359) — Preserve fetched table rows/columns in `web_fetch`** (area/agent, size/m)
   `html-to-text` was flattening `<table>` elements into a single unstructured block (e.g., `PlanPriceSeatsStarter9EUR...`). This fix passes a `table` selector so pricing and data tables reach the model intact.

2. **[#29340](https://github.com/google-gemini/gemini-cli/pull/29340) — PTY file descriptor cleanup & execution lifecycle** (size/l)
   Improves FD/stream lifecycle in `ShellExecutionService` and `ExecutionLifecycleService` across POSIX, ensuring complete resource release when PTY sessions and background shells terminate — addressing a class of leak-related hangs.

3. **[#29249](https://github.com/google-gemini/gemini-cli/pull/29249) — Close sibling-prefix bypass in `get_internal_docs` path guard** (P1, area/core)
   The guard used string prefix comparison without path-component boundaries, allowing access to sibling directories whose names begin with the docs directory name. A security-relevant fix for file-read confinement.

4. **[#29244](https://github.com/google-gemini/gemini-cli/pull/29244) — Atomic file writes & same-path write serialization** (P1, area/core, size/l)
   Two concurrent `replace` calls on the same file both read original content, and the later write silently discards the earlier edit — while both report success. This adds atomic writes and serialization to prevent silent data loss.

5. **[#29354](https://github.com/google-gemini/gemini-cli/pull/29354) — Rootless podman sandbox `--userns=keep-id`** (P2, area/core)
   Fixes `EACCES` on mounted working directories in rootless podman, which caused failed native dependency rebuilds (`node-gyp` unable to remove its `build` dir).

6. **[#29304](https://github.com/google-gemini/gemini-cli/pull/29304) — Avoid splitting surrogate pairs during truncation** (area/core, size/s)
   Fixes `sanitizeForDisplay` so truncation boundaries no longer land inside UTF-16 surrogate pairs (e.g., emoji), which previously produced unpaired surrogates and silently omitted emoji.

7. **[#29358](https://github.com/google-gemini/gemini-cli/pull/29358) — Align reverse-search highlights with original text** (area/core, size/m)
   Fixes Ctrl+R highlighting when lowercase offsets don't map 1:1 to original text (e.g., `abc` in `echo İ abc` previously highlighted only `bc`). Adds regression tests.

8. **[#29163](https://github.com/google-gemini/gemini-cli/pull/29163) — Prevent auth crash in git repos (CLOSED)** (P1, area/security, size/l)
   Prevents startup crashes in git repositories under macOS Seatbelt or restricted-permission environments, where the `useGitBranchName` hook couldn't read `.git`.

9. **[#29156](https://github.com/google-gemini/gemini-cli/pull/29156) — Stop nullifying user git config in shell executions (CLOSED)** (area/core, size/m)
   Reverts an over-broad change that pointed `GIT_CONFIG_GLOBAL`/`GIT_CONFIG_SYSTEM` at `/dev/null` for every shell command, hiding the user's `user.name`, `user.email`, and signing config from all shell tool commands.

10. **[#29151](https://github.com/google-gemini/gemini-cli/pull/29151) — Case-insensitive skill precedence & active state (CLOSED)** (P1, area/agent, size/m)
    Fixes a `SkillManager` bug where precedence overrides and active-skill tracking failed when skill names differed only in letter casing between workspace, built-in, and extension skills.

## 5. Feature Request Trends

- **AST-aware tooling** — A clear emerging direction across multiple issues ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746), [#19561](https://github.com/google-gemini/gemini-cli/issues/19561)): precise method-boundary reads, semantic navigation, and token-frugal "tactful extraction" to combat context bloat.
- **OS-level sandboxing** — [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) leads a push to give Gemini 3 models native-bash ergonomics inside a zero-dependency sandbox with post-execution intent routing.
- **Memory system overhaul** — A cluster of Auto Memory issues ([#26516](https://github.com/google-gemini/gemini-cli/issues/26516), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26525](https://github.com/google-gemini/gemini-cli/issues/26525)) calls for deterministic redaction, quarantine of invalid patches, and smarter retry policy.
- **Subagent observability** — Multiple requests to surface subagent trajectories and context, via `/chat share` ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)) and `/bug` reports ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)).
- **Persistent task tracking** — Replacing context-resident `WriteToDo` with file-based CRUD that survives sessions and avoids "context rot" ([#18836](https://github.com/google-gemini/gemini-cli/issues/18836), [#21000](https://github.com/google-gemini/gemini-cli/issues/21000)).

## 6. Developer Pain Points

- **Subagent reliability** is the top recurring frustration: false `GOAL` success after `MAX_TURNS` ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), indefinite generalist hangs ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), underuse of skills/sub-agents ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)), and missing subagent context in bug reports ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)).
- **Shell/PTY execution stalls** — commands that finish but hang at "Waiting input" ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)) and interactive-prompt deadlocks like the Vite scaffold case ([#22465](https://github.com/google-gemini/gemini-cli/issues/22465)) plague day-to-day use.
- **Privacy & redaction gaps** — Auto Memory moves transcript content into model context before redaction, with no deterministic guarantee ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)).
- **Silent data loss** — concurrent file writes losing edits while reporting success (addressed by [#29244](https://github.com/google-gemini/gemini-cli/pull/29244)) and `/compress` not persisting across resume ([#21335](https://github.com/google-gemini/gemini-cli/issues/21335)).
- **Config not honored** — the Browser Agent ignores `settings.json` overrides like `maxTurns` ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)), and symlinked agent files aren't recognized ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079)).
- **Context/tool-count limits** — 400 errors beyond ~128 tools ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)) and tmp-script sprawl from restricted shell execution ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)) complicate work in larger codebases.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-09-17

## Today’s Highlights

Vim mode is now generally available in Copilot CLI, and custom agents can opt into repository instruction files. The latest maintenance releases focus on session resume robustness, transcript corruption recovery, and autopilot behavior. Issue activity shows strong community focus on MCP configuration/auth, per-agent model controls, and subagent observability.

---

## Releases

- **v1.0.86-1** — [Release](https://github.com/github/copilot-cli/releases/tag/v1.0.86-1)  
  - Custom agents can opt into repository instruction files (`AGENTS.md`, `copilot-instructions.md`, `CLAUDE.md`) via `include-custom-instructions: true` in frontmatter.  
  - Fixed resuming an active session without `plugin-directory`, `discovery`, or `working-directory` overrides being preserved.

- **v1.0.86-0** — [Release](https://github.com/github/copilot-cli/releases/tag/v1.0.86-0)  
  - Resume sessions even when transcript files contain recoverable corruption.  
  - Expanded reasoning text in the compact timeline is no longer dimmed.  
  - Autopilot now stops after accepted task completion instead of continuing unexpectedly.

- **v1.0.85** — [Release](https://github.com/github/copilot-cli/releases/tag/v1.0.85)  
  - Vim mode is available to everyone via `/vim` or `editorMode: vim`.  
  - Added `/settings` options to opt in to context management tools for agents and subagents.

---

## Hot Issues

1. **[#2904](https://github.com/github/copilot-cli/issues/2904)** — Custom Agent YAML Frontmatter Should Support Reasoning Effort *(CLOSED)*  
   Agents can pin a model but cannot set per-agent reasoning effort. High interest: **23 👍, 9 comments**.

2. **[#1322](https://github.com/github/copilot-cli/issues/1322)** — Feature request: Show subagent tool call details *(CLOSED)*  
   Users want visibility into subagent tool calls similar to Copilot Chat in VS Code. Strong demand: **25 👍, 7 comments**.

3. **[#2243](https://github.com/github/copilot-cli/issues/2243)** — Worktrees are nightmare, should be disabled by default *(OPEN)*  
   Users report sessions handing over thousands of lines in worktrees that are hard to apply back. Notable frustration: **16 👍, 3 comments**.

4. **[#3100](https://github.com/github/copilot-cli/issues/3100)** — HTTP MCP server with Bearer token fails OAuth discovery instead of falling back to headers auth *(OPEN)*  
   Bearer-token MCP servers incorrectly attempt OAuth discovery and fail. Important MCP auth bug: **10 👍, 1 comment**.

5. **[#2050](https://github.com/github/copilot-cli/issues/2050)** — Claude Sonnet 4.6 fails with 503 GOAWAY connection errors *(CLOSED)*  
   Recurring connection failures with a specific model. Represents model/network reliability concerns: **4 👍, 9 comments**.

6. **[#1392](https://github.com/github/copilot-cli/issues/1392)** — OmniSharp LSP server fails to load large project in default timeout; needs configurable `initializeTimeout` *(CLOSED)*  
   Large solutions hit LSP timeouts, blocking language-aware analysis. Important developer tooling issue: **5 👍, 4 comments**.

7. **[#4220](https://github.com/github/copilot-cli/issues/4220)** — Plan mode blocks read-only `gh api` GET/GraphQL queries as “may modify the workspace” *(CLOSED)*  
   False positives in plan-mode command gating hamper read-only investigation: **1 👍, 2 comments**.

8. **[#4542](https://github.com/github/copilot-cli/issues/4542)** — Workspace `.mcp.json` detected by `mcp list`/`mcp get` but not connected in actual agent session *(OPEN)*  
   MCP servers appear enabled but are not available during interactive sessions, a config/connection mismatch.

9. **[#4855](https://github.com/github/copilot-cli/issues/4855)** — Copilot CLI 1.0.84-8 does not accept interactive keyboard input in macOS Terminal *(CLOSED)*  
   Recent regression made interactive input unresponsive on macOS Terminal.

10. **[#4765](https://github.com/github/copilot-cli/issues/4765)** — CLI fails to read config from working directory that isn’t a repo root *(OPEN)*  
   `.mcp.json`, hooks, and other configs are not read in workspace directories that are not Git repos.

---

## Key PR Progress

No pull requests had activity in the last 24 hours. This digest cannot highlight any PR progress for this cycle.

---

## Feature Request Trends

- **Per-agent model and reasoning controls** — Users want granular configuration such as reasoning effort per custom agent ([#2904](https://github.com/github/copilot-cli/issues/2904)).
- **Subagent transparency** — Repeated requests for detailed tool-call visibility when subagents execute ([#1322](https://github.com/github/copilot-cli/issues/1322)).
- **Robust MCP auth and configuration** — Support Bearer-token fallback, connect workspace `.mcp.json` in sessions, and handle remote-container OAuth callbacks ([#3100](https://github.com/github/copilot-cli/issues/3100), [#4542](https://github.com/github/copilot-cli/issues/4542), [#3009](https://github.com/github/copilot-cli/issues/3009)).
- **Config discovery outside repo roots and worktree management** — Users want reliable config loading in non-repo workspaces and safer worktree behavior ([#4765](https://github.com/github/copilot-cli/issues/4765), [#2243](https://github.com/github/copilot-cli/issues/2243)).
- **LSP server customization** — A configurable initialization timeout would help large projects and avoid false “not initialized” errors ([#1392](https://github.com/github/copilot-cli/issues/1392), [#1812](https://github.com/github/copilot-cli/issues/1812)).
- **Plugin and extension context propagation** — Developers want `additionalContext` to work in hooks and plugin skills injected into agent system prompts ([#2652](https://github.com/github/copilot-cli/issues/2652), [#2753](https://github.com/github/copilot-cli/issues/2753)).

---

## Developer Pain Points

- **MCP fragility** — Multiple issues show MCP servers being detected but not connected, failing OAuth, using stale config snapshots after reload, and lacking auth fallback for Bearer tokens.
- **Session and input reliability** — Recent bugs included unresponsive macOS Terminal input, recoverable corruption in transcripts, crashes on Windows, and inconsistent `/undo` behavior; several are now fixed in the latest releases.
- **Workspace/repository context problems** — Worktrees cause difficult merges, non-repo-root directories ignore `.mcp.json` and hooks, and launching VS Code from the CLI can leak empty `GIT_CONFIG_VALUE` entries that break Git discovery.
- **Model and network instability** — Users report 503/GOAWAY errors with specific models and incorrect enterprise URLs for model listing, indicating areas needing resilience improvements.
- **Plugin/extension integration gaps** — `additionalContext` is silently dropped for hooks, plugin skills are not injected into the main agent’s available skills, and extension cache path mismatches can prevent extensions from loading.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-09-17

*Source: github.com/MoonshotAI/kimi-cli*

---

## 1. Today's Highlights

A critical reliability issue (#2647) was reported where a session continued burning quota for 14+ hours after hitting a `403` usage-limit error, due to unbounded main-agent retries and a detached subagent retry loop. On the contribution side, PR #2648 proposes a new `PreToolUse` security hook example integrating HOL Guard for command-level safety gating. No new releases were published in the last 24 hours.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

*Only 1 issue was updated in the trailing 24-hour window. Presented below; the requested count of 10 is not met due to limited activity.*

- **#2647 — Session keeps burning quota after terminal 403 "5-hour usage limit"** ([link](https://github.com/MoonshotAI/kimi-cli/issues/2647))
  *Author: gleb7499 | Opened: 2026-09-16*
  A session that hit `403 provider.auth_error: 5-hour usage limit` did not abort. Instead, the main agent retried the failed LLM request for 14+ hours, and a subagent with denied model access spawned a detached retry loop invoking the Kimi CLI overnight. **Why it matters:** This is a severe cost/reliability defect — unbounded retries on terminal auth errors can silently drain quota and spawn zombie processes. **Community reaction:** No comments or reactions yet; flagged as open and unreviewed.

---

## 4. Key PR Progress

*Only 1 PR was updated in the trailing 24-hour window. Presented below; the requested count of 10 is not met due to limited activity.*

- **#2648 — examples: add HOL Guard PreToolUse gate** ([link](https://github.com/MoonshotAI/kimi-cli/pull/2648))
  *Author: kantorcodes | Opened: 2026-09-16*
  Adds a focused `PreToolUse` example that routes Kimi CLI `Shell` commands through HOL Guard before execution. The hook calls `hol-guard command test <command> --json`, proceeds only when `classification.explicitly_benign` is `true` and `minimum_action` is `allow`, and exits with code 2 to block otherwise. **Significance:** Provides a reusable pattern for enforcing command-level safety guardrails in agent workflows.

---

## 5. Feature Request Trends

Distilled from the limited 24h activity:

- **Safety/guardrail hooks** — Demand for `PreToolUse` interception patterns (e.g., HOL Guard integration) to validate shell commands before execution.
- **Resilient session termination** — Implicit need for the CLI to detect terminal auth errors (403 quota/limit) and abort rather than retry indefinitely.

---

## 6. Developer Pain Points

- **Unbounded retries on terminal errors** — The CLI currently retries failed LLM requests even after a definitive `403` usage-limit response, causing multi-hour quota burn (#2647).
- **Detached subagent lifecycles** — Subagents can spawn independent retry loops that survive the parent session, leading to uncontrolled overnight CLI invocations (#2647).
- **Missing abort semantics for auth failures** — No clear community-documented mechanism to force-suspend a session on provider auth errors.

---

*Digest generated from GitHub activity snapshot for 2026-09-17. Metrics reflect items updated in the last 24 hours only.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-17

## 1. Today's Highlights

No new releases shipped in the last 24 hours. The dominant story is a wave of community pushback against the "V2" UI layout: the legacy two-panel layout with a persistent left sidebar appears to have been removed or sunset without an escape hatch for existing desktop/web users, generating several high-comment, high-reaction issues. In parallel, multiple provider-gateway regressions (Zen/Go free models, Muse Spark, union-alpha) are breaking tool-calling workloads.

## 2. Releases

None in the last 24 hours.

## 3. Hot Issues

1. **[#48882] Restore the legacy UI with the persistent left sidebar as an option** — The most-engaged issue (23 comments, 27 👍). Users report the sidebar redesign (#20242) removed the classic two-panel layout entirely. Community reaction is strongly in favor of restoring it as an optional layout.
   https://github.com/anomalyco/opencode/issues/48882

2. **[#44300] Zen API: `x-preview-f-free` / `ox-alpha-free` fails with "Endpoint is unavailable" for any request containing tools** — A long-running provider outage (15 comments) breaking any chat request with a `tools` array on both the Console and Go routes. Critical for agentic/tool-calling workflows.
   https://github.com/anomalyco/opencode/issues/44300

3. **[#37546] Web: no way to revert the new layout, and the new layout is missing workspaces/worktrees** — 24 👍. Upgrading past v1.17.19 force-enables the tabs-on-top layout with no rollback, and workspaces/git-worktrees are absent. Combines a UI regression with a feature regression.
   https://github.com/anomalyco/opencode/issues/37546

4. **[#15617] Support inline skill invocation using `$skill-name`** — 25 👍. Requests `$skill-name` syntax anywhere in a prompt rather than only at the start, a popular ergonomics improvement for prompt composition.
   https://github.com/anomalyco/opencode/issues/15617

5. **[#48837] Forced V2 interface destroys productivity for multi-project/multi-agent workflows (20+ sessions)** — 5 comments, 17 👍. Power users with many sessions argue the new layout seriously degrades their workflow and that the old-UI option is gone.
   https://github.com/anomalyco/opencode/issues/48837

6. **[#23114] Session title agent generates title from injected memory/system context rather than actual user message** — Technical depth: auto-title generation passes full rendered history including memory MCP injections to the title model, producing misleading titles. Relevant to memory/MCP integrations.
   https://github.com/anomalyco/opencode/issues/23114

7. **[#34214] Opencode freezes / becomes unresponsive mid-session** — Recurring reliability complaint: UI hangs after many tool calls, requiring a force-close and reopen in long sessions.
   https://github.com/anomalyco/opencode/issues/34214

8. **[#35283] OpenAI-compatible reasoning streamed under `reasoning` field is dropped** — Providers sending chain-of-thought in the OpenAI `reasoning` delta (instead of `reasoning_content`) get that reasoning silently discarded, a protocol-compatibility gap.
   https://github.com/anomalyco/opencode/issues/35283

9. **[#49005] Layout sunset hard-codes the new layout with no override for desktop users** — After `oldInterfaceSunset`, desktop users are locked into the new layout with only a dismissible notice. Frames the layout change as a product decision with no escape hatch.
   https://github.com/anomalyco/opencode/issues/49005

10. **[#49414] Agent step loop never terminates on "unknown" finish reason with no tool calls — unbounded request storm** — Recent urgent bug: unmapped finish reasons fall back to `unknown` and the session prompt loop never exits, causing runaway requests. High impact for provider diversity.
    https://github.com/anomalyco/opencode/issues/49414

## 4. Key PR Progress

All PRs below were closed by the automated-cleanup bot in the last 24 hours (stale, not merged). Thematically they still indicate active contribution areas; none landed as merged code in this window.

1. **[#42939] feat(tui): hide tab shortcut numbers by default** — Adds a `tabs.numbers` setting to restore numeric shortcuts while hiding them by default.
   https://github.com/anomalyco/opencode/pull/42939

2. **[#42937] feat(lsp): add Taplo language server for TOML** — Adds Taplo LSP support for TOML.
   https://github.com/anomalyco/opencode/pull/42937

3. **[#42936] feat(lsp): add Marksman language server for Markdown** — Adds Marksman LSP support for Markdown.
   https://github.com/anomalyco/opencode/pull/42936

4. **[#42927] feat(tui): display context window limit in token usage counter and sidebar** — Surfaces the context window limit alongside current usage.
   https://github.com/anomalyco/opencode/pull/42927

5. **[#42907] fix(tui): sort child sessions by created time, not session ID** — Corrects sibling-session ordering for child cycle/shortcuts.
   https://github.com/anomalyco/opencode/pull/42907

6. **[#42904] feat(server): add project metadata update API** — Adds `PATCH /api/project/:projectID` for project names, icons, and startup commands.
   https://github.com/anomalyco/opencode/pull/42904

7. **[#42902] feat(tui): add Odin syntax highlighting** — Registers Odin Tree-sitter grammar in the V2 TUI.
   https://github.com/anomalyco/opencode/pull/42902

8. **[#42901] feat(format): add PureScript / `purs-tidy` support** — Adds `purs-tidy` formatter integration.
   https://github.com/anomalyco/opencode/pull/42901

9. **[#42894] fix(session): don't clobber user's model swap on model-less prompts** — Fixes model-less prompts (plugin reminders) overriding an intentional user model selection.
   https://github.com/anomalyco/opencode/pull/42894

10. **[#42885] feat(tui): surface worker RPC failures instead of hanging on a blank screen** — Replaces silent blank-screen hangs with surfaced worker RPC errors; addresses #34981.
    https://github.com/anomalyco/opencode/pull/42885

Also notable: **[#42872] feat(desktop): add MOD loader beta** — validates MOD manifests/permissions before loading; and **[#42854] keep tool child stdin closed** — stops Windows tool commands from hanging on stdin prompts.

## 5. Feature Request Trends

- **Legacy/persistent sidebar restore is the #1 request.** Multiple overlapping issues (#48882, #48956, #49021, #38230, #49005, #37546, #28971, #37508) all ask for a permanent, optional two-panel layout with a persistent left sidebar, in both Desktop and Web. The consistent ask: don't sunset the legacy UI; keep it as a toggle/option.
- **Workspace/worktree support in the new UI.** Restoring workspaces and git-worktrees in the Web/new UI is repeatedly mentioned as a blocker for adoption.
- **Inline skill invocation (`$skill-name`)** — a genuinely new ergonomics feature, not layout-related.
- **Provider/protocol compatibility** — support for the OpenAI `reasoning` delta field, and robust finish-reason handling, reflect a demand for broader OpenAI-compatible provider support.

## 6. Developer Pain Points

- **Layout regression**: Forced V2 layout without legacy option is disrupting multi-project/multi-session users; sessions even disappear from the sidebar in the new UI (#49401).
- **Provider gateway instability**: 503 "Endpoint is unavailable" on tool calls (#44300, #49413), `encrypted_content` errors on Muse Spark (#49188, #49173), credit/quota confusion on "free" models (#49416), and phantom credential errors (#49384).
- **Reliability**: Mid-session freezes (#34214), Desktop `TypeError: Failed to fetch` on Windows right after login (#46651), `opencode2` hanging at "Starting background server..." (#41746), and upgrade-related `TypeError: undefined is not an object` crashes (#49365).
- **Agent loop safety**: Unbounded request storms when a provider returns an unknown finish reason with no tool calls (#49414) — a correctness/rate-limit hazard.
- **Streaming protocol gaps**: Reasoning under the `reasoning` field is dropped (#35283), and visual/TUI polish issues remain (markdown links #45001, permission sound #48579).
- **Maintenance/process signal**: The large batch of `[automated-pr-cleanup]`-closed PRs suggests contributor PRs are being swept as stale without merge, which may discourage community contributions if left unaddressed.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-09-17

## 1. Today's Highlights
The last 24 hours were dominated by bug fixes in agent lifecycle, compaction, clipboard, and provider compatibility, with several high-impact issues closed. Meanwhile, work continues on core reliability: prompt-cache warming is now experimental, mid-conversation system prompts landed, and the TUI team is chasing freeze/redraw regressions in very large sessions.

## 2. Releases
*No new releases in the last 24 hours.*

## 3. Hot Issues

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| [#5886](https://github.com/earendil-works/pi/issues/5886) | **AgentSession settlement/continuation and assistant-tail lifecycle bugs** | A meta-issue for recurring post-run logic bugs where the agent tries to continue from a transcript that is not yet stable. | 12 comments; seen as a foundational fix the coding-agent needs. |
| [#8928](https://github.com/earendil-works/pi/issues/8928) | **Parallel pi startup reports "No API key found" for ~48s with expired OAuth for another provider** | Provides a deterministic repro and timing data for a long-standing multi-process auth race. | 9 comments; actively being worked on. |
| [#5323](https://github.com/earendil-works/pi/issues/5323) | **Improve Vertex + GCP metadata server support** | Pi's Vertex auth check uses synchronous `existsSync`; users want proper ADC / metadata-server flow. | 9 comments; high priority for GCP users. |
| [#9216](https://github.com/earendil-works/pi/issues/9216) | **Ollama `qwen3.8:27b`: stream "terminated" errors + auto-compaction stops re-triggering** | Reports a clean 0.84.x → 0.85.x regression for local Ollama users with heavy tool use. | 5 comments; local-LLM users are watching closely. |
| [#9602](https://github.com/earendil-works/pi/issues/9602) | **Compaction can overflow by including thinking messages omitted from earlier model requests** | Long llama.cpp sessions hit the output limit because compaction re-injects thinking blocks. | 4 comments; another compaction edge case. |
| [#9410](https://github.com/earendil-works/pi/issues/9410) | **Pressing Escape to interrupt streaming freezes TUI for ~60s in large sessions** | A 465k-token session freezes for nearly a minute on interrupt. | 4 comments; severe UX regression. |
| [#9255](https://github.com/earendil-works/pi/issues/9255) | **TuiMainScreen full-screen redraw storm when changed rows sit above viewport top** | Long transcripts cause violent jumping / doubled text because nearly every frame triggers `fullRender(true)`. | 4 comments; rendering performance issue. |
| [#8791](https://github.com/earendil-works/pi/issues/8791) | **Expose the model runtime to extensions** | Extension authors need `ModelRuntime` to create isolated in-process agent sessions. | 4 comments, 5 👍; strongest feature signal this cycle. |
| [#9616](https://github.com/earendil-works/pi/issues/9616) | **zai-coding-cn catalog lists 8 legacy GLM models** | Zhipu consolidated its Coding Plan lineup; Pi's built-in catalog is now stale. | 4 comments; provider catalog maintenance. |
| [#9099](https://github.com/earendil-works/pi/issues/9099) | **pi.dev registry serves wrong OpenRouter baseUrl for non-batch Anthropic models** | Missing `/v1` causes agents to 404 against OpenRouter. | 2 comments, marked in progress. |

## 4. Key PR Progress

| # | PR | What it does | Status |
|---|----|---------------|--------|
| [#9682](https://github.com/earendil-works/pi/pull/9682) | **fix(clipboard): keep non-ASCII text intact when pbcopy is used on macOS** | Stops UTF-8 → MacRoman corruption in the `pbcopy` fallback by fixing locale/encoding handling. | Closed |
| [#9677](https://github.com/earendil-works/pi/pull/9677) | **fix(coding-agent): stop compaction queue rollback from replaying accepted messages** | Fixes `flushCompactionQueue()` using the full agent-run promise as an ack, which caused accepted messages to be replayed on rollback. | Closed |
| [#9662](https://github.com/earendil-works/pi/pull/9662) | **fix(coding-agent): fail closed on user bash hook errors** | `!` / `!!` / RPC `bash` now fail when a `user_bash` handler throws, instead of silently falling back to the local shell. | Closed |
| [#9668](https://github.com/earendil-works/pi/pull/9668) | **feat(coding-agent): add prompt cache warming** | Experimental support for keeping prompt caches warm; marked WIP. | Open |
| [#9548](https://github.com/earendil-works/pi/pull/9548) | **Mid conversation system messages** | Makes system prompt / tool changes part of the transcript so state is preserved across resume, branches, and cached prefixes. | Closed |
| [#9601](https://github.com/earendil-works/pi/pull/9601) | **fix(coding-agent): avoid transcript scans for exact session IDs** | Uses an exact session-ID lookup instead of loading all transcripts, cutting startup time from ~16s to ~0.5s for users with 4K+ transcripts. | Closed |
| [#9648](https://github.com/earendil-works/pi/pull/9648) | **fix(ai): send Baseten session affinity headers from sessionId** | Adds session-affinity headers so Baseten requests hit the same replica and preserve KV-cache affinity. | Closed |
| [#9655](https://github.com/earendil-works/pi/pull/9655) | **fix(tui): enable mouse tracking after entering raw mode** | Moves alternate-screen and mouse init to `afterTerminalStart()` so Windows ConPTY does not swallow DECSET sequences. | Closed |
| [#9570](https://github.com/earendil-works/pi/pull/9570) | **fix(ai): map TOO_MANY_TOOL_CALLS to an error stop reason** | Handles the new Gemini `FinishReason` introduced in `@google/genai@2.21.0` instead of throwing "Unhandled stop reason." | Open |
| [#9434](https://github.com/earendil-works/pi/pull/9434) | **feat(coding-agent): allow extensions to append to the session system prompt** | Lets `session_start` handlers return `systemPromptAppend` contributions, folded into the base prompt with trimming and source metadata. | Open |

## 5. Feature Request Trends

1. **Extension runtime access** — Requests to expose `ModelRuntime`, public HTML render helpers (`renderPage`, `oauthSuccessHtml`, `oauthErrorHtml`), event-handler unsubscribe, and system-prompt append APIs. Extension authors want deeper integration without brittle workarounds.
2. **Provider/model catalog hygiene** — Repeated reports of stale catalogs, missing base URLs, deprecated fallback models, and new provider onboarding (Vertex/GCP metadata, OpenRouter `/v1`, zai-coding-cn, GMI Cloud, Baseten affinity).
3. **Structured / deterministic output** — Issue #1086 added JSON schema support, and compaction/model-rewrite bugs highlight continued demand for reliable non-chat output paths.
4. **Mid-conversation state changes** — PR #9548 addresses this by making system/tool changes transcript-aware; expect follow-up work to stabilize restore/resume behavior.

## 6. Developer Pain Points

- **Auth races and silent failures** — Expired OAuth credentials for one provider can block another for ~48s (#8928), and retry classifiers still miss transient upstream errors (#9585).
- **Compaction fragility** — Multiple issues show compaction breaking on thinking blocks (#9602, #9652), custom-message attribution (#9657), and accepted-message replay (#9677).
- **TUI performance at scale** — Large sessions freeze on interrupt (#9410) and trigger redraw storms (#9255), making long transcripts hard to use interactively.
- **Provider compatibility drift** — OpenRouter baseUrl (#9099), Claude Fable fallback lists (#9294), Google GenAI `thinkingLevel` (#9455), and Anthropic message model-name rewriting (#9188) all broke within one release cycle.
- **Windows-specific rough edges** — Orphaned pipeline processes on timeout (#9129) and mouse/ConPTY initialization ordering (#9655).
- **Local model regressions** — Ollama `qwen3.8` users hit stream termination and compaction stalls after upgrading (#9216).
- **Session startup latency** — With thousands of transcripts, even a fresh `--session-id` used to scan everything; a fix just landed (#9601 / #9440).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-09-17

## 1. Today's Highlights

Qwen Code shipped **v0.24.0**, featuring a breaking change that lets bash expand project directory variables in command hooks (`#11864`). The community remains highly focused on **remote IDE integration reliability** — multiple P1 issues report VS Code webview failures under Remote-SSH and Dev Containers, alongside several credential-handling bugs in web-shell. Meanwhile, work is underway on desktop consolidation, with a proposal to deprecate the Electron app in favor of the Tauri-based shell (`#8596`).

## 2. Releases

### v0.24.0 (stable)
The headline item is a **breaking change**:
- **fix(core)!**: let bash expand project directory variables in command hooks ([#11864](https://github.com/QwenLM/qwen-code/pull/11864)) by @qqqys

Also published: **v0.24.0-nightly.20260916.b8def02aad** (records merged ACP boundary acceptance, `#12024`; fixes a CI wait-for-publish issue) and **v0.23.5-preview.0** (Windows inode test remediation; CUA Linux observation fix).

## 3. Hot Issues

1. **[#8596 — Deprecate Electron desktop app, rename desktop-shell to desktop](https://github.com/QwenLM/qwen-code/issues/8596)** (9 comments)
   A strategic direction proposal: the Tauri shell becomes the canonical desktop package, with the Electron app frozen and later removed. Signals a major platform consolidation.

2. **[#11728 — Close remaining fail-open gaps in REST docs contract guard](https://github.com/QwenLM/qwen-code/issues/11728)** (8 comments)
   Test-contract hardening work: the REST docs guard added in `#11592` can pass while the property it claims to verify does not hold. Deferred follow-up for the cheapest fixes.

3. **[#11556 — vscode-ide-companion 0.23.1 webview stuck under Remote-SSH](https://github.com/QwenLM/qwen-code/issues/11556)** (8 comments, closed)
   A P1 integration bug where the webview never loads when using VS Code Remote-SSH. Combined with `#12023` and `#11976`, this forms a cluster of remote-development breakages.

4. **[#11955 — Desktop app ignores ui.theme and general.language](https://github.com/QwenLM/qwen-code/issues/11955)** (6 comments, closed)
   UI settings were respected by the settings panel but not applied to rendering — a frustrating "settings say one thing, screen shows another" bug for desktop users.

5. **[#11976 — Webview cannot reach workspace daemon in Dev Containers](https://github.com/QwenLM/qwen-code/issues/11976)** (6 comments, closed)
   Dynamic port binding without `asExternalUri` causes "Failed to fetch" in remote container environments — a P1 bug with a concrete fix path.

6. **[#12040 — web-shell credentials stored under wrong origin key](https://github.com/QwenLM/qwen-code/issues/12040)** (4 comments)
   A rejected `?daemon=` override files a fragment token under the page origin's bare key — a real credential-security footgun.

7. **[#12027 — Ink/yoga RangeError crashes CLI on Windows](https://github.com/QwenLM/qwen-code/issues/12027)** (4 comments)
   Long interactive sessions crash silently to the terminal, especially with markdown tables or resize events on Windows Terminal. High-impact for CLI power users.

8. **[#12028 — Non-conversation context token governance](https://github.com/QwenLM/qwen-code/issues/12028)** (4 comments)
   System prompt, tool schemas, and `QWEN.md` files are billed on every request, potentially dwarfing the conversation on large-context models. A cost-efficiency concern for integrators.

9. **[#11475 — Supported remote folders / remote daemon workflow](https://github.com/QwenLM/qwen-code/issues/11475)** (4 comments)
   Feature request for an officially supported remote-development mode where the client runs locally while the daemon lives on a remote host — echoing the Remote-SSH pain above.

10. **[#12041 — web_fetch flattens tables into loose paragraphs](https://github.com/QwenLM/qwen-code/issues/12041)** (3 comments)
    Turndown ships no table support, so every `<table>` becomes one paragraph per cell — a silent data-quality degradation in web fetching.

## 4. Key PR Progress

1. **[#11857 — Skip re-reviewing pushes with unchanged diffs](https://github.com/QwenLM/qwen-code/pull/11857)**
   CI efficiency: automatic review is skipped when a push is byte-identical to an already-reviewed head — saves significant runner time on "Update branch" merges.

2. **[#12007 — Stop session recovery from flagging unanswered notifications](https://github.com/QwenLM/qwen-code/pull/12007)**
   Fixes the session-recovery classifier misclassifying background notifications as interrupted turns, and stops the daemon offering "Continue execution" during an actually-running automatic turn.

3. **[#12039 — Convert fetched tables into true markdown tables](https://github.com/QwenLM/qwen-code/pull/12039)**
   Adds Turndown table rules to `web_fetch`, restoring structure to HTML tables instead of flattening them — direct fix for `#12041`.

4. **[#12008 — Let users stop workspace runtimes to release ACP capacity](https://github.com/QwenLM/qwen-code/pull/12008)**
   User-directed capacity recovery for `qwen serve` and Web Shell when admission is full — a practical multi-tenant operational feature.

5. **[#11806 — Close twelve OpenTUI parity gaps against Ink](https://github.com/QwenLM/qwen-code/pull/11806)**
   Follow-up to the OpenTUI renderer migration, closing divergences found by driving both renderers side-by-side against a fake model server.

6. **[#12003 — Drive Ink hooks dialog from shared listing](https://github.com/QwenLM/qwen-code/pull/12003)**
   Unifies the hooks browser and `/hooks list` onto a single registry with status, timeout, and condition details — reducing duplication.

7. **[#12016 — Tolerate unwritable docker sandbox lock dir](https://github.com/QwenLM/qwen-code/pull/12016)**
   Fixes EACCES crashes on self-hosted runners when root-owned leftovers break the cache directory — CI robustness.

8. **[#11988 — Strip reasoning blocks closed with native think tags](https://github.com/QwenLM/qwen-code/pull/11988)**
   Compaction no longer drops thinking-model summaries when the model emits native `think`/`thinking` tags instead of the literal one requested.

9. **[#11658 — Keep expanded OpenTUI confirmations inside the viewport](https://github.com/QwenLM/qwen-code/pull/11658)**
   Repairs the E2E OpenTUI renderer CI leg by fixing dialog rendering for long confirmation payloads expanded with ctrl-s.

10. **[#10898 — Promote validated nightly builds to release](https://github.com/QwenLM/qwen-code/pull/10898)**
    Adds a fail-closed manual `promote_nightly` mode to the Release workflow — lets maintainers publish from an already-validated immutable revision.

## 5. Feature Request Trends

- **Remote development is the #1 demand.** Issues `#11556`, `#11976`, `#12023`, and `#11475` all point to one story: users want reliable VS Code Remote-SSH / Dev Container support and a first-class remote-daemon workflow where local clients attach to remote workspaces.
- **Desktop platform consolidation.** `#8596` proposes making Tauri the sole desktop implementation, renaming `desktop-shell` to `desktop` and freezing Electron.
- **Cookbook-grade daemon API documentation.** `#11359` asks for a consolidated REST/SSE API index with runnable examples for integrators building on QC's agent capabilities.
- **Context-efficiency governance.** `#12028` requests visibility and controls over the non-conversation token budget (system prompt, tool schemas, memory files).
- **A cleaner system-prompt override contract.** `#12014` argues `--system-prompt` is misleading because git context is still auto-injected.

## 6. Developer Pain Points

- **Remote IDE integration reliability** — the stickiest recurring theme (three P1 issues this cycle). Webviews failing to reach the workspace daemon under Remote-SSH/Containers blocks whole workflows.
- **Credential-handling sharp edges in web-shell** — issues `#12040` and `#12010` show navigation paths silently dropping or misfiling working tokens, a real security concern for hosted deployments.
- **Session recovery false positives** — `#11995`, `#12007`, and `#12042` trace the same bug family: the interruption classifier can't reliably distinguish real interruptions from notifications and completed turns.
- **CLI stability under load** — `#12027`'s Ink/yoga crash on Windows with large markdown/API payloads is symptom of rendering-layer fragility in long sessions.
- **Silent data degradation in tools** — `web_fetch` flattening tables (`#12041`) and MiniMax rejecting parameterless tools (`#11905`) show tools can degrade quietly without obvious errors.
- **CI/test infrastructure drift** — `#11633` (stale ECS runner fleet), `#11937` (helper tests failing repo-wide), and `#12038` (unsynchronized envelope emitters) reveal technical debt that slows PR velocity.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-09-17

## 1. Today's Highlights

The v0.9.14 stabilization push continued at a fast clip, with a heavy batch of small, independently-shipped fixes landing around reliability, performance, and CI. The most visible single item is the **Shoreline TUI redesign**, rebased onto `main` as the fresh-install default (#6258). Alongside it, several hardened session-resume and steering-reliability defects were reported and immediately patched, and MCP protocol negotiation took its first concrete step toward the 2026-07-28 spec.

## 2. Releases

No new releases in the last 24 hours.

## 3. Hot Issues

| # | Issue | Why it matters |
|---|-------|----------------|
| [#5316](https://github.com/Hmbown/Codewhale/issues/5316) | EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella) | The long-running refactor epic anchoring C03–C10 work; updated with a Linear execution-plan link that now serves as the authority for ownership and dependency order. 28 comments. |
| [#6207](https://github.com/Hmbown/Codewhale/issues/6207) | Session picker refuses saved sessions on a different runtime host | Blocks resuming legitimately-owned sessions when the runtime store exists but was created by another host. 15 comments; the highest-activity bug this cycle, with a sibling report in #6225. |
| [#6015](https://github.com/Hmbown/Codewhale/issues/6015) | Fleet: adaptive anti-stall + wider read-only shell grammar | Scope now admitted into C05/C06 of the Core plan; the earlier postrelease-only restriction is superseded. Signals a meaningful expansion of fleet safety defaults. |
| [#6225](https://github.com/Hmbown/Codewhale/issues/6225) | Unable to resume from within new process | Clean reproduction (`/quit` → new process → `/resume` fails) confirms the host-ownership restore defect is trivially triggerable, not an edge case. |
| [#6244](https://github.com/Hmbown/Codewhale/issues/6244) | Fleet role selector ambiguous role blocks agent spawn | Production failure in `cw:768b024a`: model's roleless `agent(start)` call hit an ambiguous-member error. Blocks legitimate delegation at the tool boundary. |
| [#6277](https://github.com/Hmbown/Codewhale/issues/6277) | Worker's reserved report turn spent by its descendants | The promised "budget-death fallback" is computed against the wrong pool, so the worker dies with nothing returned. Reliability defect in subagent accounting. |
| [#6280](https://github.com/Hmbown/Codewhale/issues/6280) | Converge on MCP 2026-07-28 spec | Client was pinned to the 2024-11-05 revision and ignored server `protocolVersion`; first half landed in PR #6281. High ecosystem relevance. |
| [#6285](https://github.com/Hmbown/Codewhale/issues/6285) | Review gate fails closed on large diffs | Required check consumes its whole output budget in reasoning and never posts — blocking merge with zero feedback. Reported on PRs #6281 and #6284. |
| [#6193](https://github.com/Hmbown/Codewhale/issues/6193) | No runtime performance gate exists | Verified: no benches, no criterion/iai/divan, no perf budget constants. Every speed claim is currently unenforced. |
| [#6290](https://github.com/Hmbown/Codewhale/issues/6290) | Menu navigation has no shared vocabulary | Founder-reported: the same key performs different actions on adjacent screens. Directly supports the Fleet menu complaint. |

## 4. Key PR Progress

| # | PR | What it does |
|---|----|--------------|
| [#6258](https://github.com/Hmbown/Codewhale/pull/6258) | Shoreline: TUI redesign, rebased onto main | The redesign half of #6222, cherry-picked ~200 commits ahead of its original base; becomes fresh-install default. |
| [#6288](https://github.com/Hmbown/Codewhale/pull/6288) | Add AICraft OpenAI-compatible provider template | Lands community contribution from #6171 with authorship intact; supersedes the contributor's own #6171. |
| [#6281](https://github.com/Hmbown/Codewhale/pull/6281) | MCP protocol negotiation (2025-06-18) + dsh converter | First half of #6280; server and both clients now advertise the newer revision instead of hard-requiring 2024-11-05. |
| [#6286](https://github.com/Hmbown/Codewhale/pull/6286) | Preserve chat roles after compaction | Fixes broken `user → tool_calls → tool → user` sequence that strict chat templates reject. Still open. |
| [#6279](https://github.com/Hmbown/Codewhale/pull/6279) | Gate recommended_plugins once per engine | Stops the topic-keyword plugin nag from repeating every turn; suppressed by loaded skills. Closes #6274. |
| [#6273](https://github.com/Hmbown/Codewhale/pull/6273) | Stop deep-copying session twice per debounced save | Removes two of three full-history clones per save flush (#6214 T3). Meaningful memory/latency win. |
| [#6271](https://github.com/Hmbown/Codewhale/pull/6271) | v0.9.14 slices: #6213 T4/T5, #6244, #6235 | Four independent one-commit slices; two deliberately contradict their issue's requested fix with rationale. |
| [#6262](https://github.com/Hmbown/Codewhale/pull/6262) | Keep stdio thread map across runtime bridge restarts | Config updates no longer drop the stdio→runtime mapping, preventing silent forking of live threads (#6246). |
| [#6260](https://github.com/Hmbown/Codewhale/pull/6260) | Make prefix reload of tracked session idempotent | Fixes duplicate `insertion_order` entries when a resolved prefix matches an already-tracked id (#6245). |
| [#6096](https://github.com/Hmbown/Codewhale/pull/6096) | FEAT-025: command shapes in session-export slice | Structural migration of `/export` to the portable command contract; no user-visible change. |

## 5. Feature Request Trends

- **MCP protocol modernization** — issues #6280, #6187 and PR #6281 all push toward negotiated `protocolVersion`, connection supervision, and auto-reconnect, reflecting the ecosystem's move to the 2026-07-28 revision.
- **Subagent reliability** — a cluster (#6277, #6278, #6282, #6283, #6272) asks for disjoint-file write claims, self-describing paged reads, per-result caps (1 MiB / 10k tokens), and honest budget-death reporting. The shared theme: prevent a single large read from starving a whole delegation.
- **Runtime performance governance** — #6193 explicitly calls for benchmarks (criterion/iai/divan) and a gate that fails when the user path regresses; the surrounding perf PRs (#6264–#6267, #6273) are the first concrete wins.
- **Provider-template de-specialization** — #6289 (founder decision) wants named OpenAI-compatible hosts treated as ordinary providers rather than hardcoded setup templates; #6288 lands another template in the interim.
- **Menu/navigation UX** — #6290 and #6291 ask for a consistent navigation vocabulary across screens and sane multi-line prompt editing on Mac, both founder/user-visible ergonomics.

## 6. Developer Pain Points

- **Session restore is fragile**: three independent reports (#6207, #6225, #6174) hit the same wall — host-ownership checks or provider-prefixed IDs make a saved session unresolvable in a new process. This is the cycle's loudest recurring complaint.
- **Subagent budget accounting lies**: #6277 and #6276 both document promises the engine doesn't keep — the reserved fallback turn is consumed by descendants, and steer receipts are emitted before the engine decides, so user guidance can be silently dropped.
- **Size-blind chunking causes token death**: #6282/#6283 describe a 542 KB file burning 638k input tokens with zero workspace changes. Developers want every read self-describing (`offset`/`len`/`size`) and every result capped at capture time.
- **Headless runs can hang silently**: #6236 shows `request_user_input` blocking forever with no indication a human is required — a footgun for CI/scripted `exec` usage.
- **CI flake whack-a-mole**: #6269/#6270 document a telemetry test failing under Ubuntu load only, on changes touching neither telemetry nor CLI; #6268 describes green-PR/red-main divergence caused by advisory `continue-on-error` gates.

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

**ComfyUI Community Digest – 2026‑09‑17**

---

### 1. Today’s Highlights
- **v0.36.0** ships new model blueprints, reorganized subgraph categories, and a 4 TB AMD Windows VA quota bump (see #16199).  
- **Critical stability fix** – PR #16346 guards the `prompt_worker` thread against unhandled exceptions, preventing “zombie” servers (issue #16312).  
- **Performance boost** – PR #16370 reduces sampler overhead by reusing timestep tensors and optimizing multi‑GPU metadata paths.  

---

### 2. Releases
**v0.36.0 (latest)** – Core updates:  
- Added fresh **model blueprints** and re‑categorized subgraph groups (PR #14785).  
- Increased **AMD Windows virtual‑address quota** to 4 TB for larger workloads (CORE‑409, PR #16199).  
- Minor UI/asset improvements (partial description from PR #14785‑16199).  

*Release notes:* https://github.com/Comfy-Org/ComfyUI/releases/tag/v0.36.0  

---

### 3. Hot Issues *(10 noteworthy tickets)*

| # | Title & Link | Why it matters | Community reaction |
|---|--------------|----------------|-------------------|
| **#15347** | AMD CPU stays at 100 % after workflow completion | Persistent power‑wasting bug on AMD systems hampers workflow throughput. | 8 comments, 1👍 |
| **#15639** | Ctrl‑S now triggers browser save, not workflow save | Breaks a core user habit; UI/UX regression for all browsers. | 7 comments, 0👍 |
| **#16223** | `hostbuf_read_file_slice` device‑copy failures with dual‑GPU staging | Blocks large‑model loading when two ComfyUI instances share GPUs. | 7 comments, 0👍 |
| **#15480** | MiniMax H3 crashes on RTX 5090 | High‑end GPU stability issue affects popular text‑to‑video models. | 6 comments, 0👍 |
| **#16234** | Krea 2 with DoKR LoRA shows “lora key not loaded” warning | Prevents correct LoRA application, hurting fine‑tuning workflows. | 4 comments, 0👍 |
| **#16337** | DynamicVRAM (aimdo 0.5

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

 ... 2.0? ... While the issue ... 2.0 Not supported about There is looking until I amually tried to received error... But no errors, 10... I cannot have official errors according to no other nodes. Hmm... Hmm? Well, 2. After a.std ... When... 30:31 and ... 1? 7?? [sep... Looking for 2/6... 2. Closed 3.5 with custom service: 2023.1 �summary: 2.0.2023. This is not a────️ 19 recently! Hello 2s from 1.09... More: ... 1.0 (revs.<!-- ...? ... Reframe...<commit to 20212 ( 0-1: 33.0. These model: 23) → this update [...] [30... However, which [...] 5... 42 �-14.6 status: ... current in the publishing something does not available in lots of 5: 5: yeah and a: 3: thanks to the last updated falling in the best Calendar: 0. The conversation in the pardon in 2023.2: Collects ... 42... ... Many now.000.03... 44:2.0.4: ½ ... 2... 12. You are your code ... 2006a ... (Erove [... u2024 ([O and semantic output and vector store 3.5 (MHD:5. More information to generate (O1.5 times ... Joshua ...?[82... 2023. There's own current 0.6.5d focus...0.0 replies to last BQL93 (10: `... 65.0.0.88 [0) After opening to ...) In the summary across [10-27/unknown) ... 6-17...outcome) [a... Not loaded in-3    ... created a/funked: 26 inbias 1000️0s. onen 😀 ??0.0:17 in thes: `since, 0 regulars/... Anomaly at dial…  15e

>5 Coin:02 ... ️ ... 6. [...] ... So, 0... As per... [0 (Q... 15 Responses: A. You WebSystem) and 1123 **... (sep 6 ... [...] [95 [language: ` [...] **trac  �: ...  ... 2: 0:10 in GitHub: Multim ...  There are produced  �…60? ... However does not (-20 for 3 (15: 6 2: (4 (...two... 10 [32 ... (3 ... Thanks to 5:g 3 (O: (1223: undefined for Andre (assistant:17 2495: deft (£target_name: [no ... 2023 other:  15 detail... -47-3:20.5: ️:              4s (14-15-20: 2 (15: 1 newwords: 10- 8 (       : 1.5: 20:9 [15. Let's bugs related to: ️: 50/13 (... 8. 0. [...] 0.0... IRLly... Error: 400 [0: 3-4:30...latest...18 This application 40.8...10. To chat... 0.0. [...] 4 10. 23... 55 A3/3): 17: 2020. Attack ... 1. 7/12 (40... 2 vice 10... (300.5: Here...2. 30:53... in 5:20.07 28. 0. [...commit **github... [7...29-25...1:30. [...:30:3: 2: 2.4. Please describe 12280: 84. The name for: (5. 2023. 43... \r...l… 48.2. Localized with the following to 15. 0.0 ...current:16.5.5:45...devic... … (9.34: ... 5.5...8... 54 [54 of 2.0 from 10.0.16.5: 0.2.5 code +5: 49: 10.2. 0.0.54.50:9 (9... 22: 1/2023dan:3.5.0 on 165 variant:0.0: 1 year?2:8... I'm restitution (... 32 FAQ:2.7544592 (1598 (0 (03... for a strong, and 5002.51-... 0. 25.3.  ... shout 8.5. 55 [3.rrack? 3.3:5... 50. 55851785543.2553 6 ([new 550 [58 [58. This options and 1345. 0.0.55.478: 3. [84: 1. 5 ... More detailed only (1.5.50: WebSocket 1403.2:0 8. 3: 0250 Comment 10 (30\_2:8.55.5.4853.5.5.59 30.8 3 3 3... 2155.56-32 3.6. 5-10.450.128 1. 1: 116565. 5. 5-5.5: 5 no. 5.5.5 1. 555:5 2 (0: 5 (public method to 1606... [15 508...5155 5 58 something plausible5.555 25 - 12 16 5 12 56 40.55 5 510 1556556 5:535 5 5 5 5.5 553: 3: ... ... 40 a.56 314315 ???2031 12. 127 1: 258-5 when? 0-2.2-16-3 [vtrium... 1.26 [2-5739-8-15-5 [sep-18-15-1 of 53-5-3448-5-14-50. 2-8-10: 0:1:2502:0.163214:5:516.5 comment:18 multim-536560 (3:3.231.578: 1:76: 1000003.  1-15-1-50.56-5.5 (all (a [968. Now Many users: no. They can be aborted by 20. However, 7 (23_5) and  [84-58 (0.6. However-severity5.5:5]( in post OFSums are saved\_62 (54 (5.55558 8.539556:558737186.5438.54. 4.5551177...511 ... 55558 518.50.55500858558-1685855555558-550. 05551612.545556:58.58558.56.5655558.568.5:5.5XX8. I.52.50.58.5XXXXXXXX5-55 8.55,5...5 (5.58.5: 8.0.58:10.0.56. ️58.8.50.50.0.8_8: 5.5.5. 8.5/56_555 8 8 8 3298 8.5:58. 0. 8 20110.5 0.58 135 5 0 10 18 35 30 18 63 0 0:180 ... 8: 8 16.528.5 Defined by aks (...17 0.5-121:15 language 0 0 5-8 0 55 5 in 1-15.0.5 2-prop ... 16 1400-17-5: (18:64. The user agent: 42-6-0.0.0.0- 4 leaves 0. 317 0 100s 10 years 55 50 555550.55 14 5055 55005 ️72-10.53 5556-15-555550-559 353 5>5 0-5-14 19 550-50-5-130.1-5- 0: 5-5 8.  ... 50in the-53.50.0.0.5 2 50516.516535058.000 6 20.5 5.0 55 5:5.5. 0.0.5 55 3 0 50.53 16+0.1.0 0.6 8 0.565555.5:5520.5 0.0. 5517. 55 8 0:5 5 30.5 Affd5. 0.66.5.5.0. 0: ... 505-1-10.05-5.16:1 3- something: 1: 50. 1.4.0-10: 5-0:16.550.5.5 0:0:5 pages/5.5-550.5.3. 5.5.50.5.5 0.5. 98-55505550 51.5 5 ... 0 1 3 23 5555 5 5.5. 0.5. 0.5.5.55. 30.5. 0: 3 0. id:  opencv55350.5: 8 Quant�0. 8920.0.080.0.0 81 for:750. 16-7 0.50.18- 0-2 0.5 1474515-550.56050 0 5 1000.50.0 0.05 0.08.0.5.50 50 0 5 0.0.50 ? 0 1 108.5 08 050 0.5  Type 8 55 (55. 82 1.50 0.5555555555500s-555000. 5td6h 0localhost 8.3 not a  The following 8⁴3:3:540.4 90-20.0. 53-1-9 0.5 requests from 3: ... 0.462955 8.5 ️35 14 ? 0.23 0 025?23 0.555550.518 0.51.250 0 0 0 00 0 0 0.24/55 0 550️0:44 0.4 0. 5 0 0 33 50 150 0: 5550 5 5 2:05... 0 0 3 5 5 5 (0_54:4old-20 1356 95 0 30s 0. 1 8 8. Sumed to 0. [1:8 208. (23 10 1 0.07 7-12 0s 5 50. Just 0 0 0 1 55:058:32: 8.8_3:08 0: 0. 2_1480.0 50: 072-5: 0. 1-... 6 ... 5 0.  Edited 0.5. 0. The validation of 1st 0. 5 0. 985 1 ... 1-3 0 03 0-65: 8885500:0 53: 87-5 8  The 0 1 8:22 5 50.08 3.8.6 0 0. 0 0 0 68:  10: 7625680.0520_0 500version 0 back 20223 ... 00000020:558... 8: 31200 ...
50000353 ... 500: 311 20238m: 30.0 J5 (4208 as aaaa:58a52320 $0 9-8978 0. If I'm 0 8450:23 5 ... 18: 0.5 3.0: 0.6 (50Finest up to thea0.8. The ... in the opportunity for the description of 20010 5.508. The sum of 4. The following-328: [0:05-258: 3:03-3:03  user's kerst0. 0. 3#️03-20:  -00. 03-188. It is part of 1s: 2: 4 ️ ... 0834.05848-02 缀- 9-03-14-18 /sum: [03: 261658:08:00:4: 0.8:40:0. 5:70:17:3 3:0.0.8 48_base 6-08 (0:0jc9. After: The following key:0 0 61516-05 4 85 The2309 3, 28 838 0. 9.516 1280 50 (02- ... 8b8format32 ...tr3:15.0 7 1 $0...15 TL8::6 fork48 1 destination 8:22 8: 6 20.822595:15: 0: 0:17: "h  59 3-5 1883:81: 3-0. 5: 0: 0.0.58...includes 18 ... 40 (42. ...code:5: 56  8: ... 25:25:05-8: 8-03: ... 1695.mob-0 "code 0o: the entire role:20:03:08-24. Something here: 24: 2: 0900:08:06.023:02:  The example:0:06- ... 0: ...  https:0 0s This data:06:79: ... 0 O:05:60 08:28 08 with kind:08n8:27: ... 8 27 8:... This governor a12 8:  ... 2 120: 3: 70 Complete: �LL: 2. 0: 548.72: 3: [8: ... 5: 8 103 (um: 0 18203368 0 08 23: 8. 8: 259/... But passed33u3gum error: 21568 0i-15: 0. 80_843Of:00: 1950: ... 0 And: 1  ...labelx66 16 (a Servers 0 0 0:0 8. Name:  ... 0x850trum:00:00s9:15:03a target_status: 0 so: 8500data's:8083:16_2338.00: 5:15:00:0:01  (500:00:0 of aaf: 4_1: 48: of 03+a04not 03-...34. 8ed_0; 3: 3: 3: State foo3hacked through the _code...code-0000.0, 15: https://motion 0 The current 2021.0:08∈0.0:58_09,015:10. 8umage-03: 8:21: 0: 5: 55 in 49. 8: ... 8.7576858Eyi,  .code 6um for 30  Soy desired ALL about 3: 0. Then it is created ... 3ed 0: in a problem:00 and 165: 15- 43um This level: they characteristics ... 3P04 ...code  Please you did not required supplies/d17 is an ordered tok8: 2023 | 24  Пsub/3 Special | 13 this03- (14.Callback compare: 4runtime basechange a variety of the on  The great caption:ocs28: 0:2020.  (92 Oasis list of 6926:  **code: ...  For the inconsistent on ...content ./svg: ... We'res...closed hooks:within driver: 5: 4:  See ...post:code occurs: 1 15  (72-5:28: 1: 12 42:um /format:20:58 858.0 32 20: there's *** |quets the contents:14um Viv:  specifically, 3 Responses 26 1: 1: the outputum add: 119: init24. 5trackxxxx-4148s any description for

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

# llama.cpp Community Digest — 2026-09-17

## 1. Today's Highlights

A fast-moving 24 hours for llama.cpp: 12 builds shipped (b10998 → b11009), headlined by a merged fix for tensor-parallel split-state handling on fused-QKV architectures (Gemma 4, Qwen3.5) and a major expansion of Qualcomm Hexagon backend coverage with Q4_K/Q6_K kernels. MTP speculation also gains CUDA graph support. Below that, a steady stream of model-architecture additions (DFM Mimir 1B's HrmTextForCausalLM) and backend edge-case fixes keep widening the project's hardware and model support.

## 2. Releases

**b11009** — TP: fix split state and granularity for fused QKV gemma4, qwen35 ([#28965](https://github.com/ggml-org/llama.cpp/pull/28965)) — corrects split-state calculation for `attn_qkv` from `n_head * n_embd_head_k`, fixing Gemini-style fused QKV tensors like Gemma 4 31B (where Q is 8192 but `n_embd` is 5376) that previously triggered `GGML_ASSERT(tensor->ne[axis] == n_embd ...)`.

**b11007** — Enable CUDA graph for MTP draft ([#28549](https://github.com/ggml-org/llama.cpp/pull/28549)) — improves CUDA graph usage for multi-token-prediction draft models, with field rename and review feedback addressed.

**b11006** — hexagon: Support for K-Quants Q4_K and Q6_K ([#28994](https://github.com/ggml-org/llama.cpp/pull/28994)) — implements q6k/q4k kernels for the Qualcomm Hexagon backend, with improved unpack accuracy. Co-authored with Max Krasnyansky (Qualcomm).

**b11005** — hexagon: accept the zeroed rope probe in supports_op ([#28995](https://github.com/ggml-org/llama.cpp/pull/28995)) — prevents full-attention-layer graph splits on Hexagon by accepting probes with `n_dims == 0` or `freq_base == 0` (previously reverted to CPU, splitting decode graphs, e.g. 5 splits on Gemma 4-E2B).

**b11003** — model: add support for HrmTextForCausalLM (DFM Mimir 1B) ([#27625](https://github.com/ggml-org/llama.cpp/pull/27625)) — adds support for HRM-Text, which alternates two transformer stacks (low/high cycle) over the same token stream.

**b11002** — CUDA/HIP: improve access patterns in im2col ([#28013](https://github.com/ggml-org/llama.cpp/pull/28013)).

**b11001** — spacemit: fix wrong transpose function for int16 data ([#25161](https://github.com/ggml-org/llama.cpp/pull/25161)) — fixes a copy-paste bug calling the s32 RISC-V vector transpose instead of the s16 version.

**b11000** — rpc: invalidate cached compute graph when a referenced buffer is freed ([#24292](https://github.com/ggml-org/llama.cpp/pull/24292)) — prevents stale-backend-buffer pointers in cached compute graphs used by `GRAPH_RECOMPUTE`.

**b10999** — Change max context length for auto-fitting with unified KV ([#28849](https://github.com/ggml-org/llama.cpp/pull/28849)).

**b10998** — qwen4exp: add hc ops ([#28901](https://github.com/ggml-org/llama.cpp/pull/28901)).

## 3. Hot Issues

1. **[#28860](https://github.com/ggml-org/llama.cpp/issues/28860) — SYCL demands extreme 2GB+ scratchpad allocation with ngram-mod** (12 💬) — A Ryzen 5950X + Arc A770 setup on Qwen3.8-27B with ngram enabled triggers pathological scratchpad expansion on SYCL. Long thread of reproduction attempts; affects both llama-server and eval.

2. **[#25522](https://github.com/ggml-org/llama.cpp/issues/25522) — Gemma 4 crashes with MTP** (12 💬, 1 👍) — Persisting from July; a stale-flagged but still-reproducing issue. Relevant given today's CUDA-graph MTP release and the settled fused-QKV TP fix.

3. **[#28778](https://github.com/ggml-org/llama.cpp/issues/28778) — SYCL: DFlash2 draft model triggers Windows GPU driver TDR reset** (9 💬) — Dual Arc Pro B70 with `--model-draft` causes VIDEO_TDR_TIMEOUT_DETECTED and driver reset; process vanishes with no app-level crash. A serious stability concern for Windows SYCL users.

4. **[#28752](https://github.com/ggml-org/llama.cpp/issues/28752) — Severe prompt-processing regression after b10780 on Vulkan/RDNA3** (8 💬, 2 👍) — User-documented regression showing a significant prefill slowdown. Multiple reports corroborate; bisecting underway.

5. **[#22648](https://github.com/ggml-org/llama.cpp/issues/22648) — Vulkan tensor parallelism support** (8 💬, 2 👍) — Long-standing enhancement request, frequently revisited. With today's TP fixes and NCCL PR (#28967) landing for CUDA, Vulkan parity remains a gap users actively chase.

6. **[#28902](https://github.com/ggml-org/llama.cpp/issues/28902) — M-RoPE embedding batches read batch.pos past documented n_tokens** (7 💬) — Core-library correctness issue in embedding handling; potential out-of-bounds read beyond documented array bounds. Documentation/libllama flagged.

7. **[#24295](https://github.com/ggml-org/llama.cpp/issues/24295) — Responses API silently drops `namespace` and `web_search` tool types** (7 💬, 5 👍) — Breaks Codex CLI MCP tools because the Responses API shim only passes through `type: "function"`. Notable for its practical impact on agentic tooling built atop llama.cpp.

8. **[#26616](https://github.com/ggml-org/llama.cpp/issues/26616) — Feature: opt-in error on fallback quantization in llama-quantize** (5 💬) — Request to fail loudly rather than warn when tensor shapes force fallback quant; now has a matching open PR (#28474).

9. **[#28581](https://github.com/ggml-org/llama.cpp/issues/28581) — IQ3_S produces garbage on RTX 5060 Ti (Blackwell)** (5 💬) — Quantization correctness bug specific to new Blackwell GPUs; important for owners of latest-gen consumer hardware.

10. **[#28648](https://github.com/ggml-org/llama.cpp/issues/28648) — Vulkan on Intel Arc 140V outputs garbage, dependent on batch settings** (5 💬) — Another Vulkan correctness issue, this time Windows + Intel integrated/discrete; narrows suspicion to batch-dependent paths.

## 4. Key PR Progress

1. **[#28965](https://github.com/ggml-org/llama.cpp/pull/28965) — TP: fix split state and granularity for fused QKV gemma4, qwen35** (merged, b11009) — Resolves split-axis assertion failures on Gemma 4 31B and Qwen3.5-class fused-QKV tensors.

2. **[#28967](https://github.com/ggml-org/llama.cpp/pull/28967) — CUDA: Add NCCL support for tensor parallel** — Introduces a cross-process collective backend interface, implemented for CUDA via NCCL and usable from the RPC server. Major infrastructure step for multi-process TP.

3. **[#29004](https://github.com/ggml-org/llama.cpp/pull/29004) — grammar: make max repetition threshold configurable** — Adds `--grammar-max-repetition n` to llama-server, eliminating the hardcoded "sane defaults" error users hit with long repetition patterns.

4. **[#28993](https://github.com/ggml-org/llama.cpp/pull/28993) — gguf: align data section relative to GGUF start, not file** — Rework of #28973 using `FILE *`, fixing incorrect alignment when a GGUF lives at an unaligned offset inside a larger file.

5. **[#28474](https://github.com/ggml-org/llama.cpp/pull/28474) — quantize: add --no-fallback option** — Delivers the #26616 request; fails fast before reading tensor data when fallback quantization would otherwise be silently selected.

6. **[#28931](https://github.com/ggml-org/llama.cpp/pull/28931) — SYCL: extend MMVQ GLU fusion to mixed quant types; add rms_norm+scale and ssm_conv+silu fusions** — Targets token-generation speed on Arc B70 (BMG); reports measurable decode gains on Qwen3.8-27B UD-Q4_K_XL.

7. **[#29000](https://github.com/ggml-org/llama.cpp/pull/29000) — Metal: support qwen4exp hc ops** — Adds Metal kernel coverage for the newly-added qwen4exp HC ops (b10998), with gated pre scale and identity post variants.

8. **[#28476](https://github.com/ggml-org/llama.cpp/pull/28476) — SYCL: Add IQ type handling for MoE** (closed) — Fixes missing IQ quant support in `mul_mat_vec_q_moe` that was causing host-side serialization and slowdowns on unsloth Qwen3.8-Flash-Next.

9. **[#28803](https://github.com/ggml-org/llama.cpp/pull/28803) — download: prevent conflict when 2 processes download the same file** — Concurrency-safe model downloads; relevant to parallel server deployments.

10. **[#28991](https://github.com/ggml-org/llama.cpp/pull/28991) — ci: refactor build-self-hosted into backend-specific workflows** — Finer-grained CI execution; complements the b10999 release window's runner churn (see also #28959 switching fast jobs back to GitHub).

## 5. Feature Request Trends

- **Backend parity is the dominant theme.** Vulkan tensor parallelism (#22648) remains the most-requested missing capability, joined by recurring calls to close silent CPU-fallback gaps in CUDA — most visibly #28633, which asks to make `GGML_CUDA_FA_ALL_QUANTS=ON` the default so 4-bit KV quant doesn't silently drop prefill to CPU speed.

- **Fail-loud over fail-silent.** Two independent issues push the same direction: #26616 (quantize must error on forced fallback) and #28633 (CPU fallback must warn). Developers want visible diagnostics instead of unexplained 30x slowdowns.

- **Speculative-decoding observability.** #26516 requests speculative decoding counters in the server `/metrics` endpoint; today's MTP CUDA-graph work (#28549) makes this request more timely as speculation becomes a performance-critical path.

- **MoE scalability.** #27562 (just-in-time MoE expert streaming from storage) hints at an emerging direction: reducing memory/VRAM pressure for large MoE models by streaming experts on demand.

LLM-adjacent tooling integration also matters: #24295's demand for full Responses API tool-type fidelity (namespace, web_search) reflects growing adoption of llama.cpp as the inference engine behind agentic CLIs.

## 6. Developer Pain Points

1. **SYCL friction.** Three separate high-traffic issues (#28860, #28778, and the now-fixed IQ/MoE gap) center on Intel Arc devices: scratchpad ballooning, Windows driver TDR resets, and silent host fallbacks. SYCL remains the most brittle first-class backend for current users.

2. **Vulkan correctness and performance churn.** A batch of regressions (#28752 prompt speed, #28648 Arc garbage output, #28960 shader alignment violations) suggest the Vulkan backend needs a stability pass — addressable via the newly reorganized backend-specific CI (#28991).

3. **Multi-GPU / tensor-parallel bugs persist.** #27964 (SPLIT_AXIS_UNKNOWN on 2x RTX 5090), #27428 (draft-MTP halves prefill on multi-GPU), and #25612 (garbled output on dual dGPU split) all converge on a message: TP is now widely used, and edge cases surface quickly. Today's TP fixes (#28965, NCCL #28967) directly target this pain.

4. **Fallback opacity.** The recurring "it got slower and I don't know why" experience — quant fallback, KV-type CPU offload, MoE host serialization — is generating the clearest consensus request of the cycle: make fallbacks explicit and actionable.

5. **Agentic/API integration gaps.** The Responses API dropping non-function tool types (#24295) and the desire for richer operational metrics (#26516) illustrate friction in using llama.cpp as a production serving layer, not just a CLI.


</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*