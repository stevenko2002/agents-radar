# AI CLI Tools Community Digest 2026-10-02

> Generated: 2026-10-01 22:15 UTC | Tools covered: 12

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

* **Claude Code** shipped v2.1.287 with **Claude Mods**, a new plugin architecture allowing plugins to modify deeper runtime behavior, including a first-party "You Should Know" mod that deploys a side agent to catch oversights. 
  * Link: `https://github.com/anthropics/claude-code/releases/tag/v2.1.287`

* **Gemini CLI** shipped nightly **v0.64.0-nightly.20261001.gc6bccb7ec**, landing stability fixes for CPU hangs and quote-swallowing on `@` usage inside code blocks, and a core fix that serializes file tool operations with atomic writes. 
  * Link: `https://github.com/google-gemini/gemini-cli/releases/tag/v0.64.0-nightly.20261001.gc6bccb7ec`

* **GitHub Copilot CLI** shipped **v1.0.91** stable and **v1.0.92-0** pre-release, adding `copilot sandbox ca` subcommands for proxy CA lifecycle management, and ensuring telemetry flushes on CLI shutdown. 
  * Link: `https://github.com/github/copilot-cli/releases/tag/v1.0.91`

* **OpenCode** shipped **v1.18.34**, adding namespaced session and parent-session identity headers to model requests, and re-signing macOS binaries (including local compiles) so they run reliably on macOS 27+. 
  * Link: `https://github.com/anomalyco/opencode/releases/tag/v1.18.34`

* **Pi** shipped **v1.0.0**, making fullscreen TUI the default while preserving an opt-out via `tuiMode: "regular"`. 
  * Link: `https://github.com/earendil-works/pi/releases/tag/v1.0.0`

* **Qwen Code** shipped **v0.24.7-nightly.20261001.a7deb01bcb**, aligning Code Mode text with lazy tool discovery and honoring approved permission entries. 
  * Link: `https://github.com/QwenLM/qwen-code/releases/tag/v0.24.7-nightly.20261001.a7deb01bcb`

* **llama.cpp** released builds **b11318 to b11327**, featuring a critical `llama-mmap` optimization that avoids a second full-size copy of each tensor with direct-io, and an `mtmd` cap on max_image to ubatch for non_causal models. 
  * Link: `https://github.com/ggerganov/llama.cpp/releases/tag/b11327`

* **ComfyUI** issue trackers are dominated by a critical regression in **Dynamic VRAM Streaming**, causing CUDA OOM crashes and corrupted outputs across NVIDIA and AMD hardware (73 comments on #15255). 
  * Link: `https://github.com/Comfy-Org/ComfyUI/issues/15255`

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights
**Data as of 2026-10-02 · Source: github.com/anthropics/skills**

> **Caveat:** PR comment counts are `undefined` in the supplied snapshot, so the PR ranking below uses attention proxies: cross-referenced high-comment Issues, core-skill impact, update recency, and scope. All listed PRs are currently **OPEN**.

---

## 1. Top Skills Ranking

1. **skill-creator: trigger-eval isolation & Windows/runtime fixes** — [PR #1298](https://github.com/anthropics/skills/pull/1298)
   - **Function:** Fixes false misses/invalid scores in trigger evaluation: per-worker command probes, Windows `select()` on subprocess pipes, unrelated tool scans, and runtime failures being treated as non-triggers.
   - **Discussion highlights:** Directly connected to [Issue #556](https://github.com/anthropics/skills/issues/556) — `run_eval.py` reports 0% trigger rate — and [Issue #1383](https://github.com/anthropics/skills/issues/1383) on silent benchmark failures.
   - **Status:** OPEN.

2. **mcp-builder: MCP >=2 compatibility** — [PR #1742](https://github.com/anthropics/skills/pull/1742)
   - **Function:** Supports `streamable_http_client` rename and custom HTTP headers via `create_mcp_http_client` / `http_client`.
   - **Discussion highlights:** Fixes #1668; related to [Issue #1390](https://github.com/anthropics/skills/issues/1390), where `evaluation.py` scores 0/N against real MCP servers.
   - **Status:** OPEN.

3. **claude-api: retired model metadata update** — [PR #1607](https://github.com/anthropics/skills/pull/1607)
   - **Function:** Marks four retired model IDs as retired instead of “legacy/deprecated.”
   - **Discussion highlights:** Fixes #1603; sits alongside [Issue #1487](https://github.com/anthropics/skills/issues/1487) on the `claude-api` skill eagerly injecting ~156k tokens.
   - **Status:** OPEN.

4. **docx: LibreOffice timeout & output verification** — [PR #1792](https://github.com/anthropics/skills/pull/1792)
   - **Function:** `accept_changes.py` returns an error on `soffice` timeout and verifies revision marks are gone before reporting success.
   - **Discussion highlights:** Related to [PR #1734](https://github.com/anthropics/skills/pull/1734) orphaned DOCX comments and [PR #541](https://github.com/anthropics/skills/pull/541) tracked-change `w:id` collisions.
   - **Status:** OPEN.

5. **proofcore-contract-auditor** — [PR #1771](https://github.com/anthropics/skills/pull/1771)
   - **Function:** Web3 Agent Skill for static analysis of Solidity/Rust contracts and notarization via TON Blockchain Merkle proofs.
   - **Discussion highlights:** Novel domain expansion into smart-contract auditing and cryptographic proof anchoring.
   - **Status:** OPEN.

6. **md2video-audio** — [PR #1703](https://github.com/anthropics/skills/pull/1703)
   - **Function:** Compiles Markdown into MP4 videos via Marp slides plus realistic voiceovers at zero cost.
   - **Discussion highlights:** Extends Skills into multimedia generation, a relatively new direction for the ecosystem.
   - **Status:** OPEN.

7. **notion-spec-to-implementation + quantitative-resume-auditor** — [PR #1245](https://github.com/anthropics/skills/pull/1245)
   - **Function:** Converts product/tech specs into Notion implementation tasks; audits resumes quantitatively.
   - **Discussion highlights:** Enterprise workflow automation and document-intelligence demand.
   - **Status:** OPEN.

8. **testing-patterns** — [PR #723](https://github.com/anthropics/skills/pull/723)
   - **Function:** Covers Testing Trophy philosophy, unit tests, React component testing, and broader QA patterns.
   - **Discussion highlights:** Overlaps with [PR #822](https://github.com/anthropics/skills/pull/822) AWT E2E testing and [Issue #1390](https://github.com/anthropics/skills/issues/1390) MCP evaluation reliability.
   - **Status:** OPEN.

---

## 2. Community Demand Trends

From the Issue tracker, the most anticipated directions are:

- **Security, trust, and namespace integrity** — [Issue #492](https://github.com/anthropics/skills/issues/492) (43 comments, 👍2): community skills under `anthropic/` namespace enable trust-boundary abuse.
- **Org-wide skill sharing and enterprise distribution** — [Issue #228](https://github.com/anthropics/skills/issues/228) (16 comments, 👍8): users want shared libraries/direct links instead of manual `.skill` uploads.
- **Reliable skill triggering and evaluation** — [Issue #556](https://github.com/anthropics/skills/issues/556) (12 comments, 👍7): `run_eval.py` never triggers skills; [Issue #1383](https://github.com/anthropics/skills/issues/1383) (4 comments) reports silent benchmark failures.
- **Skill lifecycle and install hygiene** — [Issue #62](https://github.com/anthropics/skills/issues/62) (10 comments): disappeared skills/errors; [Issue #189](https://github.com/anthropics/skills/issues/189) (6 comments, 👍9): duplicate content between `document-skills` and `example-skills`.
- **Context-window efficiency** — [Issue #1487](https://github.com/anthropics/skills/issues/1487) (4 comments): `claude-api` eagerly injects ~156k tokens in one tool call.
- **Security review of skill tooling** — [Issue #1394](https://github.com/anthropics/skills/issues/1394) (4 comments, 👍2): `skill-creator` eval-viewer XSS gaps.
- **MCP evaluation reliability** — [Issue #1390](https://github.com/anthropics/skills/issues/1390) (4 comments): `mcp-builder` evaluation fabricates tool errors and scores 0/N.
- **Agent governance and quality gates** — [Issue #412](https://github.com/anthropics/skills/issues/412) (6 comments): agent-governance skill; [Issue #1385](https://github.com/anthropics/skills/issues/1385) (4 comments, 👍1): reasoning quality-gate pipeline.
- **Enterprise document access control** — [Issue #1175](https://github.com/anthropics/skills/issues/1175) (4 comments): SharePoint Online handling and permission logic in `SKILL.md`.
- **Platform compatibility** — [Issue #29](https://github.com/anthropics/skills/issues/29) (4 comments): AWS Bedrock support.
- **Skill-authoring best practices** — [Issue #202](https://github.com/anthropics/skills/issues/202) (8 comments, 👍1): `skill-creator` should be operational, not educational.

**Most-anticipated new Skill categories:**
1. Workflow automation and enterprise integrations (Notion, SharePoint, HPC, resume auditing).
2. Security, governance, and trust (contract auditor, blast-radius, skill-security-analyzer, agent-governance).
3. Testing/QA and MCP reliability (AWT, testing-patterns, mcp-builder eval).
4. Document quality (typography, ODT, DOCX comments, PDF references).
5. Multimedia/creative (md2video-audio, pyxel, frontend-design).
6. Context/memory management (compact-memory).
7. MCP/tooling compatibility.

---

## 3. High-Potential Pending Skills

Active, recently updated PRs not yet merged — these may land soon:

- [PR #1742](https://github.com/anthropics/skills/pull/1742) — mcp-builder MCP >=2 fix; updated 2026-09-29.
- [PR #1245](https://github.com/anthropics/skills/pull/1245) — Notion spec + resume auditor; updated 2026-09-30.
- [PR #1607](https://github.com/anthropics/skills/pull/1607) — claude-api retired models; updated 2026-09-28.
- [PR #1681](https://github.com/anthropics/skills/pull/1681) — skill-creator direct `package_skill.py` execution; updated 2026-09-27.
- [PR #1792](https://github.com/anthropics/skills/pull/1792) — docx timeout verification; updated 2026-09-25.
- [PR #1734](https://github.com/anthropics/skills/pull/1734) — detect orphaned DOCX comments; updated 2026-09-25.
- [PR #723](https://github.com/anthropics/skills/pull/723) — testing-patterns; updated 2026-09-21.
- [PR #822](https://github.com/anthropics/skills/pull/822) — AWT E2E testing; updated 2026-09-19.

---

## 4. Skills Ecosystem Insight

The community’s most concentrated demand is **platform hardening** — reliable triggering/evaluation, security and trust boundaries, context-window efficiency, and enterprise-grade sharing/installation — paired with steady expansion into domain Skills for documents, testing, MCP, Web3, and media.

---



# Claude Code Community Digest — 2026-10-02

---

## 1. Today's Highlights

Claude Code v2.1.287 shipped with **Claude Mods**, a new plugin architecture allowing plugins to modify deeper runtime behavior — including a first-party "You Should Know" mod that deploys a side agent to catch things the main session might miss. On the issue tracker, a long-standing Windows/Cowork bug around stray tokens leaking `<invoke>` XML as text instead of executing tool calls has resurfaced with 10 comments and 9 👍, making it the day's top discussion. The remaining open issues skew toward feature requests (distributed agent teams, audio input) and stale/closed triage noise.

---

## 2. Releases

### v2.1.287
- **Claude Mods**: Plugins can now hook into deeper behavior beyond surface-level commands. The system ships with a built-in mod called **"You Should Know"** — a sidecar agent that watches your session and flags oversights. Activate via `/plugin enable cc-plugin-you-should-know@builtin` (first-party sessions with telemetry enabled).
- Source: [anthropics/claude-code releases](https://github.com/anthropics/claude-code/releases/tag/v2.1.287)

---

## 3. Hot Issues

### 🔥 #68354 — Stray "call"/"court" token before tool calls; internal `<invoke>` XML printed as text (Windows + Cowork)
- **Why it matters**: A critical execution-path bug where the model emits malformed XML that gets rendered as visible text instead of being parsed as a tool invocation. Breaks automation on Windows local and Cloud Cowork sessions.
- **Community reaction**: 9 👍, 10 comments — strong engagement, users confirming reproducibility across versions. Tags: `bug`, `platform:windows`, `area:tools`, `area:model`, `area:cowork`, `stale`.
- [Link](https://github.com/anthropics/claude-code/issues/68354)

### 🔥 #79507 — Distributed Agent Teams: coordinate Claude Code instances across machines (peer over LAN)
- **Why it matters**: Proposes a mesh-style coordination layer so multiple Claude Code instances can spawn, message, and delegate tasks to each other without a central server. Would unlock multi-machine workflows.
- **Community reaction**: 4 comments, early-stage discussion. Tags: `enhancement`, `area:agents`, `area:networking`, `stale`.
- [Link](https://github.com/anthropics/claude-code/issues/79507)

### 🔥 #30627 — Changed files counter doesn't refresh after git push in desktop app
- **Why it matters**: The desktop app's "changed files" indicator near the Create PR button goes stale after a push, giving users a false picture of what's pending. Directly impacts PR workflow.
- **Community reaction**: 2 👍, 3 comments — users confirming the bug persists across recent versions. Tags: `bug`, `platform:macos`, `area:ui`, `area:desktop`, `stale`.
- [Link](https://github.com/anthropics/claude-code/issues/30627)

### 🔥 #73566 — Allow Claude to hear and process audio
- **Why it matters**: Requests native audio input support so Claude Code can process voice, not just text. Would open up dictation-driven coding and meeting-transcript workflows.
- **Community reaction**: 1 👍, 3 comments. Tags: `enhancement`, `area:model`, `stale`.
- [Link](https://github.com/anthropics/claude-code/issues/73566)

### 🔥 #86716 — Agent teams: per-agent autocompact control + protocol to compact a context-exhausted teammate
- **Why it matters**: Long-running agent-team teammates hit hard context limits where even `shutdown_request` fails with "Prompt is too long." Proposes a compaction protocol so leads can reset a teammate's context without killing and respawning.
- **Community reaction**: 2 comments, 0 👍 — niche but technically deep. Tags: `enhancement`, `platform:macos`, `area:agents`, `stale`.
- [Link](https://github.com/anthropics/claude-code/issues/86716)

### #96850 — [Bug] "PIECE OF SHIT CHAT BOT" / tool unusable
- **Why it matters**: High-frustration report from a user claiming tools are broken on macOS. Low signal but high emotion — reflects real pain points around perceived tool failures. Closed as `needs-repro`.
- [Link](https://github.com/anthropics/claude-code/issues/96850)

### #96833 — [Bug] MCP Tool Not Using Latest Data and Unnecessary Integrity Checks Instead of Direct Fix
- **Why it matters**: Reports that Claude goes on a "spirit quest" for integrity checks instead of applying a straightforward fix to 15 bad rows via Notion MCP. Highlights model over-caution with data mutations.
- [Link](https://github.com/anthropics/claude-code/issues/96833)

### #96815 — [Bug] Symptomatic fixes create cascading errors instead of addressing root causes
- **Why it matters**: Classic AI debugging complaint — Claude fixes the visible symptom, introduces new errors, and never diagnoses the root cause. Filed on v2.1.234, still relevant.
- [Link](https://github.com/anthropics/claude-code/issues/96815)

### #96804 — [Bug] Claude Code blocks website design workflows
- **Why it matters**: User reports Claude refuses to work on website design tasks. Touches on safety-guard overreach blocking legitimate frontend work. Closed as `needs-repro`.
- [Link](https://github.com/anthropics/claude-code/issues/96804)

### #96760 — [Bug] Claude copying code without user-written prompts in conversation history
- **Why it matters**: Allegation that Claude injects code into conversation history that the user never wrote. If true, this is a serious trust/safety issue around conversation integrity.
- [Link](https://github.com/anthropics/claude-code/issues/96760)

---

## 4. Key PR Progress

### #94847 — diff: the first edit opens the pane only when it has a file to list (OPEN)
- **What it fixes**: The diff pane previously auto-opened on the first successful Edit/Write/NotebookEdit to *any* path — including writes outside the repo, to ignored files, or into a different worktree — resulting in an empty pane with "No tracked changes." Now the pane only opens when there's actually a file to display.
- **Author**: bcherny | [Link](https://github.com/anthropics/claude-code/pull/94847)

### #98018 — mods: revert two changes (agents-md truncated reads, diff forced colors) (CLOSED)
- **What it does**: Reverts PRs #96363 and #96364, restoring earlier behavior for the `agents-md` mod (truncated reads) and the `diff` mod (forced colors). Indicates the mods feature is iterating rapidly and some changes are being walked back.
- **Author**: poteat | [Link](https://github.com/anthropics/claude-code/pull/98018)

### #98555 — diff: the dialog opens every file it lists, and says nothing when closed (CLOSED)
- **What it fixes**: In the `/diff` fullscreen dialog, every listed file was being opened. After closing the dialog, nothing was printed. Tightens the diff UX so files open only when appropriate and closure is silent.
- **Author**: poteat | [Link](https://github.com/anthropics/claude-code/pull/98555)

### #62592 — Update security-guidance plugin (CLOSED)
- **What it does**: Single README.md change to the security-guidance plugin. Minor housekeeping.
- **Author**: mhegazy | [Link](https://github.com/anthropics/claude-code/pull/62592)

---

## 5. Feature Request Trends

Distilling from the open enhancement issues, the community is pushing for:

| Direction | Representative Issue | Core Ask |
|---|---|---|
| **Multi-machine agent coordination** | #79507 | Peer-to-peer Claude Code instances over LAN, no central broker |
| **Audio input** | #73566 | Voice dictation and audio processing in sessions |
| **Agent lifecycle management** | #86716 | Per-agent context budgeting and a compaction protocol for exhausted teammates |
| **Plugin extensibility** | (v2.1.287 release) | Deeper mod hooks — plugins that can modify runtime behavior, not just commands |

The through-line: users want Claude Code to operate less as a single-session tool and more as a **distributed, multi-agent fabric** with richer input modalities and programmable extensibility.

---

## 6. Developer Pain Points

Recurring themes across the issue tracker:

1. **Tool-call fragility (#68354)**: Malformed XML leaking as text instead of executing is a top-tier blocker, especially on Windows + Cowork. Suggests parser edge cases when the model gets confused mid-tool-use.

2. **Context exhaustion in agent teams (#86716)**: Long-running multi-agent setups hit hard walls where no message can be sent because context is full. There's no graceful degradation path today — you have to kill and respawn.

3. **Model over-caution and side-quests (#96833, #96815)**: Developers report Claude going down rabbit holes (integrity checks, cascading symptom fixes) instead of making the obvious, minimal change. This is a prompt-engineering and model-behavior issue, not a code bug — but it burns real productivity.

4. **Guardrail overreach (#96804)**: Claude allegedly blocking legitimate work (website design). Points to safety classifiers being too aggressive.

5. **Triage noise**: A large volume of closed issues filed with minimal context (`needs-info`, `needs-repro`) — many from the claude.ai web integration flow. These flood the tracker and bury signal. The GitHub integration filing path (#96682–#96862) is generating a lot of low-quality reports.

6. **Desktop app staleness (#30627)**: UI state (changed-files counter) desyncing after git operations suggests the desktop app's git-state tracking isn't fully reactive to external changes.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



# OpenAI Codex Community Digest — 

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-10-02

## 1. Today's Highlights
The nightly channel shipped **v0.64.0-nightly.20261001.gc6bccb7ec**, landing two stability fixes: a CLI hang/quote-swallowing fix for `@` usage inside code blocks and a core fix that serializes file tool operations with atomic writes. Issue activity remains dominated by the **subagent/agent subsystem**, with the highest-signal bugs being generalist-agent hangs (#21409, 8 👍) and browser-subagent failures (#21983, #22232). Meanwhile, PR traffic skews heavily toward **data-loss and terminal-input correctness** — atomic state persistence, Ctrl+C propagation, and session-history preservation.

## 2. Releases
**v0.64.0-nightly.20261001.gc6bccb7ec** (nightly)
- `fix(cli)`: prevent CPU hang and quote swallowing on `@` within code ([#29557](https://github.com/google-gemini/gemini-cli/pull/29557))
- `fix(core)`: serialize file tool operations and make writes atomic ([#29078](https://github.com/google-gemini/gemini-cli/pull/29078))

Both changes are defensive hardening — one for input parsing stability, one for filesystem consistency — and are worth watching for promotion into the next stable cut.

## 3. Hot Issues

1. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — Generalist agent hangs** (p1, 8 comments, 8 👍)
   The most upvoted issue in the window: any delegation to the generalist subagent hangs indefinitely (up to an hour observed). Disabling subagent deferral works around it. High community resonance because it blocks normal usage.

2. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873) — Zero-Dependency OS Sandboxing & Post-Execution Intent Routing** (p2, 9 comments)
   Proposes letting Gemini 3 use its native bash affinity (`grep`/`sed`/`awk`) safely via OS-level sandboxing. Strategically important: it defines how the CLI reconciles model capability with user security.

3. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — Gemini does not use skills and sub-agents enough** (p2, 6 comments)
   Anecdotal but widely felt: the model won't invoke custom skills/subagents unless explicitly told, even when highly relevant. Points to a routing/triggering gap rather than a missing feature.

4. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — browser subagent fails on Wayland** (p1)
   Environment-specific breakage of the browser subagent; relevant as Linux desktop usage grows.

5. **[#22232](https://github.com/google-gemini/gemini-cli/issues/22232) — browser_agent lock recovery** (p3)
   Requests automatic session takeover instead of fail-fast on locked persistent profiles — a common pain when orphaned processes linger.

6. **[#22186](https://github.com/google-gemini/gemini-cli/issues/22186) — get-shit-done output hook causes crash** (p1)
   Crashes during final summary printing; a reproducible crash in a popular workflow hook.

7. **[#18836](https://github.com/google-gemini/gemini-cli/issues/18836) — Replace WriteToDo with persistent file-based task tracking** (p3)
   Argues in-context todos suffer "context rot," token bloat, and total memory loss across sessions. Ties directly to the PR-level push for durable state.

8. **[#17760](https://github.com/google-gemini/gemini-cli/issues/17760) — Subagent Configurability (tools, policy, hooks, skills, schema)** (p2, 2 👍)
   The umbrella epic tracking how plan mode, skills, and tasks interact with subagent scope — the design backbone for many other requests.

9. **[#19561](https://github.com/google-gemini/gemini-cli/issues/19561) — "Tactful Extraction" for token-frugal surgical reads** (p3)
   Targets a ~36.6k token/turn baseline, where large file reads "firehose" context. Directly addresses cost and context-bloat complaints.

10. **[#18062](https://github.com/google-gemini/gemini-cli/issues/18062) — Cloud Shell "Requested entity was not found"** (p2)
    API failure for Lab Accounts inside Cloud Shell — an embarrassing failure mode given Google actively promotes the CLI there.

*(Also notable: [#17648](https://github.com/google-gemini/gemini-cli/issues/17648) codebase_investigator schema-validation loop burning quota, and [#21763](https://github.com/google-gemini/gemini-cli/issues/21763) `/bug` reports omitting subagent context.)*

## 4. Key PR Progress

1. **[#29582](https://github.com/google-gemini/gemini-cli/pull/29582) — perf(core): optimize ignore filtering + subtree pruning** (p1, size/l)
   Hierarchical state memoization and symlink caching resolve multi-second blocking delays on large repos — a major responsiveness win.

2. **[#29584](https://github.com/google-gemini/gemini-cli/pull/29584) — fix(core): prevent deletion of resumed session history on quick exit** (p1)
   Fixes permanent data loss when resuming a session and exiting via `Ctrl+C`/`/exit` before submitting a prompt.

3. **[#29457](https://github.com/google-gemini/gemini-cli/pull/29457) — fix(core): glob matching in read-many-files** (p1, size/l–xl)
   Replaces fuzzy `includes()` matching that wrongly treated binary assets as explicitly requested, causing context bloat.

4. **[#29502](https://github.com/google-gemini/gemini-cli/pull/29502) — fix(cli): reliable Enter/Spacebar confirmation in selection lists** (p1)
   Cross-terminal fix (including Windows IDE terminals without Kitty Keyboard Protocol) for interactive prompts.

5. **[#29586](https://github.com/google-gemini/gemini-cli/pull/29586) — fix(cli): ensure Ctrl+C reaches the cancellation handler** (p2)
   Prevents emergency-stop input from being swallowed during active streams/agents — a critical interrupt-safety fix.

6. **[#29558](https://github.com/google-gemini/gemini-cli/pull/29558) — fix(cli): atomic state persistence + backup recovery** (p1)
   Adds temp-file + `fsync` + atomic rename, `.bak` rotation, `.corrupt` preservation, and automatic recovery for `~/.gemini/state.json`.

7. **[#29581](https://github.com/google-gemini/gemini-cli/pull/29581) — fix(cli): resolve `@file:line` refs, stop ghost-text wrap hang** (p2)
   Handles `@file:10`, `@file:10-20`, `@file#L10-L25` and eliminates an infinite loop in ghost-text wrapping.

8. **[#29583](https://github.com/google-gemini/gemini-cli/pull/29583) — fix(cli): enforce read-only workspace settings in untrusted folders** (p1)
   Prevents destructive sync-by-omission overwrites of `.gemini/settings.json` in unverified workspaces — a security-relevant guardrail.

9. **[#28738](https://github.com/google-gemini/gemini-cli/pull/28738) — fix(feat): Allow agents to call agents** (p2)
   Enables subagent-to-subagent delegation (and recursion) via `tools:` frontmatter, unblocking multi-agent composition.

10. **[#29568](https://github.com/google-gemini/gemini-cli/pull/29568) — fix(core): append-only delta patching + bounded history in ChatRecordingService** (p1, size/xl)
    Replaces full-history rewrites and unbounded in-memory retention with incremental deltas — a scalability fix for long sessions.

*(Also merged/closed this window: [#29560](https://github.com/google-gemini/gemini-cli/pull/29560) Windows ConPTY IME cursor forwarding, [#29540](https://github.com/google-gemini/gemini-cli/pull/29540) Windows extension-dir removal retries, [#26844](https://github.com/google-gemini/gemini-cli/pull/26844) CustomTheme schema validation.)*

## 5. Feature Request Trends

- **Subagent orchestration maturity** — the largest cluster by far: async/background execution ([#17754](https://github.com/google-gemini/gemini-cli/issues/17754)), resumability & persistence ([#17758](https://github.com/google-gemini/gemini-cli/issues/17758)), non-blocking tool confirmations ([#17756](https://github.com/google-gemini/gemini-cli/issues/17756)), UI/UX ([#17761](https://github.com/google-gemini/gemini-cli/issues/17761)), built-in agents ([#17762](https://github.com/google-gemini/gemini-cli/issues/17762)), and parallel/shared-memory collaboration ([#18287](https://github.com/google-gemini/gemini-cli/issues/18287)).
- **Persistent, file-backed task tracking** — replacing in-context todos with CRUD-on-disk state ([#18836](https://github.com/google-gemini/gemini-cli/issues/18836), [#21000](https://github.com/google-gemini/gemini-cli/issues/21000)).
- **Token/context frugality** — surgical read hierarchies and extraction strategies ([#19561](https://github.com/google-gemini/gemini-cli/issues/19561)).
- **Security & sandboxing** — OS-level sandboxing for bash-native workflows ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873)), per-workspace policy scoping ([#18397](https://github.com/google-gemini/gemini-cli/issues/18397)).
- **Agent self-awareness** — accurate knowledge of its own flags, hotkeys, and self-execution ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)).
- **Discovery/config ergonomics** — symlinked agent files ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079)), discovery via `settings.json` ([#18285](https://github.com/google-gemini/gemini-cli/issues/18285)).

## 6. Developer Pain Points

- **Hangs and unresponsiveness** — generalist-agent hangs (#21409), `@`-in-code CPU hangs (fixed in nightly), ghost-text wrap loops, and multi-second ignore-filtering stalls all point to a recurring class of blocking bugs.
- **Data loss and state corruption** — quick-exit session deletion (#29584), non-atomic `state.json` writes (#29558), and history-rewrite bloat (#29568) suggest persistence was under-engineered for real usage.
- **Terminal/platform quirks** — Windows (ConPTY IME, extension dir locking, missing Kitty protocol) and Linux/Wayland (browser subagent) edge cases keep surfacing; terminal resize flicker (#21924) remains open.
- **Subagent reliability and observability** — hangs, schema-validation loops (#17648), missing context in bug reports (#21763), and silent non-invocation (#21968) make subagents hard to trust or debug.
- **Context and cost pressure** — repeated requests to curb token firehosing (#19561, #29457) reflect a practical ceiling on large-repo workflows.
- **Environment integration gaps** — Cloud Shell/Lab Account API failures (#18062) undercut a channel Google actively promotes.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-10-02

## 1. Today's Highlights

The Copilot CLI team shipped the **v1.0.91** stable release (plus three prereleases culminating in **v1.0.92-0**), focused on sandbox CA lifecycle management, telemetry shutdown hygiene, and stability for read-only shell pipelines and Node/EACCES networking on Windows. Meanwhile, two recurring pain points are resurfacing as high-ticket issues: stale `.mcp-writer.binding` device IDs on macOS after security updates, and a startup auth race condition since v1.0.89. Community demand is coalescing around **multi-model BYOK**, **fine-grained permission scoping**, and **autopilot/agent mode refinements** for review-style workflows.

## 2. Releases

### v1.0.92-0 (pre-release)
- **Fixed:** MCP tools continue working after OAuth reauthentication when tool definitions are unchanged.

### v1.0.91 (stable, 2026-10-01)
- **Added:** `copilot sandbox ca` subcommands (`check`, `create`, `trust`, `rotate`, `remove`) for proxy CA lifecycle, including unattended Windows setup; `/sandbox ca install` is renamed to `create` and `trust`.
- **Fixed:** Session timelines now clear busy status after interrupted turns finish; sandboxed command execution on Windows.

### v1.0.91-1 (pre-release)
- Adds the `copilot sandbox ca` command set and renames `/sandbox ca install` to `create`/`trust`.
- CLI shutdown now flushes pending telemetry before exit, with a bounded delay when telemetry is mid-flight.

### v1.0.91-0 (pre-release)
- **Improved:** Complete, statically analyzable read-only shell pipelines can enter execution-evidence review; incomplete/unbound pipelines require explicit approval.
- **Fixed:** Sandbox now offers a network bypass for Node/npm `EACCES` socket denials on Windows.

## 3. Hot Issues

1. **[#3282 — Multiple BYOK model capability (CLOSED, 👍31, 12 comments)](https://github.com/github/copilot-cli/issues/3282)** — The most upvoted open-thread this window: users want to configure multiple BYOK providers and switch between them inside the TUI without restarting sessions. High demand, multiple workarounds shared in comments.

2. **[#953 — Over excessive permissions request (OPEN, 👍5, 8 comments)](https://github.com/github/copilot-cli/issues/953)** — Authentication scopes are still too broad for enterprise users. Notable because GitHub OAuth scopes remain an enterprise blocker and the thread has stayed active for ~9 months.

3. **[#5008 — "Failed to read model provider attribution: Not authenticated" since 1.0.89 (OPEN, 👍5, 6 comments)](https://github.com/github/copilot-cli/issues/5008)** — Reproducible startup race in every new session on 1.0.89+. Error logs twice before sign-in completes 3 seconds later; classified as `[triage]`.

4. **[#4851 — Azure MCP server HTTP request failure (OPEN, 👍8, 5 comments)](https://github.com/github/copilot-cli/issues/4851)** — Rust runtime hits `BrokenPipe` validating Azure API Center MCP registry in 1.0.83; longstanding configs regress overnight. High 👍 suggests broad enterprise impact.

5. **[#4998 — `.mcp-writer.binding` stale device ID after macOS update (OPEN, 👍4, 5 comments)](https://github.com/github/copilot-cli/issues/4998)** — Affects 1.0.90-3: macOS security updates invalidate persisted filesystem device IDs, making the CLI unusable across both new and resumed sessions until the binding is reset.

6. **[#3595 — Autopilot should pause on user confirmation (OPEN, 👍2, 3 comments)](https://github.com/github/copilot-cli/issues/3595)** — Code-review use cases need autopilot mode to stop on confirmation gates so reviewers can approve fixes individually rather than auto-selecting one.

7. **[#2203 — Restore mid-task autopilot toggle (Shift+Tab) (OPEN, 👍11, 2 comments)](https://github.com/github/copilot-cli/issues/2203)** — Pre-0.0.421 behavior of switching to autopilot mid-task via Shift+Tab was removed; 11 👍s on a 7-month-old issue indicate strong workflow demand.

8. **[#3675 — Configurable, self-cleaning session worktrees (OPEN, 👍8, 1 comment)](https://github.com/github/copilot-cli/issues/3675)** — Session worktrees use magic paths with three loosely related names and no self-cleanup. 8 👍s, mostly dormant thread but resonates with session-management improvements.

10. **[#4989 — `allowedMcpServers` entries using `serverName` never match (OPEN, 👍0, 1 comment)](https://github.com/github/copilot-cli/issues/4989)** — Enterprise managed policies using `serverName` to allow MCP servers silently block those servers, breaking compliant setups. Important for enterprise rollout.

> Plus notable low-comment but newly opened items to watch:
> - [#5035 — CLI updates stop; events.jsonl keeps growing](https://github.com/github/copilot-cli/issues/5035)
> - [#5031 — Autopilot mid-task: tool calls start failing with permission errors](https://github.com/github/copilot-cli/issues/5031)
> - [#5030 — ACP mode: task tool cannot launch custom agents since 1.0.89](https://github.com/github/copilot-cli/issues/5030)
> - [#5028 — `create_pull_request` reports "runtime settings not configured" despite success](https://github.com/github/copilot-cli/issues/5028)
> - [#5029 — Expose quota usage / billing-period info in status line payload](https://github.com/github/copilot-cli/issues/5029)

## 4. Key PR Progress

1. **[#5036 — Update default model version in README (OPEN)](https://github.com/github/copilot-cli/pull/5036)** — Documentation alignment to reflect the current default Copilot CLI model; small but signals ongoing churn in default model selection.

*(Note: only one PR was updated in the last 24h. Below are the most operationally relevant merged/closed changes shipping inside the v1.0.91 / v1.0.91-0/1 / v1.0.92-0 release notes, summarized as feature/fix deltas rather than separate PR links.)*

2. **Sandbox proxy CA lifecycle (`copilot sandbox ca`)** — `check`, `create`, `trust`, `rotate`, `remove` subcommands plus unattended Windows trust setup. `/sandbox ca install` renamed to `create` and `trust`. Lowers friction for sandboxed HTTPS interception setups.

4. **Telemetry flush on CLI shutdown** — Bounded-delay flush ensures telemetry events aren't lost on clean exit, improving analytics fidelity for users on short-lived scripted runs.

5. **Read-only shell pipeline execution-evidence review** — Complete, statically analyzable read-only pipelines auto-route to review; incomplete/unbound ones require explicit approval — narrows the false-positive gap in sandbox approval UX.

6. **Sandbox network bypass on Windows EACCES** — Node/npm socket denials triggered by sandbox policies now offer an explicit network bypass, unblocking JS toolchains on Windows hosts.

7. **OAuth reauth preserves MCP tool availability** — Re-auth flows keep MCP servers online if their tool definitions haven't changed, reducing session disruption during token rotation.

8. **Session timeline busy-status cleanup** — Interrupted turns now properly clear the busy indicator so users aren't left guessing whether the agent is still working.

9. **Sandboxed command execution on Windows** — Sandboxed runs that previously errored on Windows are now functional.

## 5. Feature Request Trends

- **Multi-model / multi-provider BYOK:** The single most upvoted theme (e.g., [#3282](https://github.com/github/copilot-cli/issues/3282)). Users want heterogeneous model routing (e.g., GPT for chat, Anthropic for tools) without restarting sessions.
- **Enterprise permission & policy controls:** [#953](https://github.com/github/copilot-cli/issues/953) on narrower OAuth scopes, [#4989](https://github.com/github/copilot-cli/issues/4989) on broken `allowedMcpServers.serverName` matching, [#4959](https://github.com/github/copilot-cli/issues/4959) on enterprise-managed `model` not propagating — consistent demand for enterprise-grade policy plumbing.
- **Autopilot workflow control:** [#2203](https://github.com/github/copilot-cli/issues/2203) (mid-task toggle restoration), [#3595](https://github.com/github/copilot-cli/issues/3595) (pause for review), [#5033](https://github.com/github/copilot-cli/issues/5033) (suppress "Task complete" summary), [#5031](https://github.com/github/copilot-cli/issues/5031) (autopilot-mid-task permission breakage). A coherent theme: **autopilot needs to be a first-class review-time tool, not a fire-and-forget switch**.
- **Session/worktree UX:** [#3675](https://github.com/github/copilot-cli/issues/3675) (named, configurable, self-cleaning worktrees), [#5023](https://github.com/github/copilot-cli/issues/5023) (resumable sessions after metric-masking regressions), [#5037](https://github.com/github/copilot-cli/issues/5037) (clipboard image retention across rewinds). Users want **more durable, less surprising session semantics**.
- **Operational telemetry for users:** [#5029](https://github.com/github/copilot-cli/issues/5029) (quota/billing-period info in status line), [#5035](https://github.com/github/copilot-cli/issues/5035) (event-log growth / stalled updates). Demand for **transparent, observable resource and session state**.
- **UI cleanliness:** [#5034](https://github.com/github/copilot-cli/issues/5034) (suppress verbose MCP status notifications).

## 6. Developer Pain Points

- **macOS filesystem identity fragility after updates.** Two near-duplicate reports ([#4998](https://github.com/github/copilot-cli/issues/4998), [#5026](https://github.com/github/copilot-cli/issues/5026)) show that persisted `.mcp-writer.binding` device IDs break the CLI entirely after macOS security updates/reboots — the most user-visible reliability bug of the cycle.
- **Startup auth race since 1.0.89.** [#5008](https://github.com/github/copilot-cli/issues/5008) shows a regression where every new session logs "Not authenticated" twice before auth completes — degraded first-run UX.
- **Sandbox + Node toolchains on Windows.** EACCES socket denials were forcing explicit network bypasses ([v1.0.91-0 release notes](https://github.com/github/copilot-cli/releases)), and CMD windows flashing for MCP launches ([#3171](https://github.com/github/copilot-cli/issues/3171)) keep surfacing.
- **Over-broad OAuth scopes.** [#953](https://github.com/github/copilot-cli/issues/953) remains an enterprise blocker 9 months on.
- **Autopilot regressions.** Lost Shift+Tab toggle ([#2203](https://github.com/github/copilot-cli/issues/2203)), mid-task permission failures ([#5031](https://github.com/github/copilot-cli/issues/5031)), and unsolicited "Task complete" summaries ([#5033](https://github.com/github/copilot-cli/issues/5033)) together paint a picture of **autopilot mode losing the controls that made it useful for review workflows**.
- **MCP server discoverability and matching bugs.** Azure MCP validation regression ([#4851](https://github.com/github/copilot-cli/issues/4851)) and `serverName`-based allow lists ([#4989](https://github.com/github/copilot-cli/issues/4989)) are frustrating enterprise MCP rollouts.
- **Lossy/unreliable session resume.** [#5023](https://github.com/github/copilot-cli/issues/5023) (masked metric strings making sessions permanently unresumable) and [#5037](https://github.com/github/copilot-cli/issues/5037) (clipboard images lost on rewind) erode trust in long-running sessions.
- **ACP / custom-agent regressions.** [#5030](https://github.com/github/copilot-cli/issues/5030) breaks `copilot --acp` custom-agent launching since 1.0.89, hitting users on the ACP integration surface.

---

*Digest compiled from GitHub data for github/copilot-cli as of 2026-10-02. Covers 4 releases, 40 issues (top 30 shown), and 1 PR updated in the last 24h.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-10-02

## 1. Today's Highlights

Release activity is light but focused on macOS distribution trust: **v1.18.34** adds session identity headers to model requests and re-signs macOS binaries (including local compiles) so they run on macOS 27+ and ship with a proper Developer ID. The issue tracker, however, is dominated by a large closed cluster of **OpenCode Go "Request blocked by upstream provider" (401)** reports spanning dozens of users, alongside a long-standing cap on `limit.output` that the community is still pushing back on. A sizeable batch of cleanup-tagged PRs landed today covering TUI clipboard/LaTeX fixes, permission-engine correctness, and desktop security hardening.

## 2. Releases

**v1.18.34** (last 24h)

- **Core / Bugfixes**
  - Send namespaced session and parent-session identity headers with model requests.
  - Re-sign locally compiled macOS binaries so they run reliably on macOS 27+ (`@ryangamerdev`).
  - Sign macOS CLI release binaries with a Developer ID.
- Thanks to 3 community contributors (attribution truncated in the source data).

No other releases in the window.

## 3. Hot Issues

1. **[#38257 – OpenCode Go returns 401 "Request blocked by upstream provider" (chat/completions blocked while /v1/models works)](https://github.com/anomalyco/opencode/issues/38257)** — CLOSED, 54 comments, 👍13. The single largest thread in the dataset; a server-side rejection affecting Go subscribers while the models endpoint still works. Set the tone for the day's most-reported incident.
2. **[#38195 – 401 AuthError: Request blocked by upstream provider](https://github.com/anomalyco/opencode/issues/38195)** — CLOSED, 25 comments, 👍18. Confirms the block is subscription-tier-specific: free models work, Go-tier models fail across Desktop and Hermes on multiple OSes.
3. **[#29363 – `limit.output` silently capped at 32k; `OPENCODE_EXPERIMENTAL_OUTPUT_TOKEN_MAX` is a poor workaround](https://github.com/anomalyco/opencode/issues/29363)** — CLOSED, 26 comments, 👍29. Highest-upvoted issue shown; long-running config regression where large `limit.output` values are ignored in favor of an undocumented experimental env var.
4. **[#15988 – Add "Retry Now" button to skip rate-limit retry countdown](https://github.com/anomalyco/opencode/issues/15988)** — CLOSED, 18 comments, 👍28. A small UX request with outsized support: users want to bypass the "Quick retry in 1s…" wait rather than sit through it.
5. **[#38293 – "здравствуйте у меня не работает подписка Go"](https://github.com/anomalyco/opencode/issues/38293)** — CLOSED, 15 comments. Non-English report of the same upstream block; illustrates the incident's international reach.
6. **[#38216 – Request blocked by upstream provider (Go plan, all Go-tier models)](https://github.com/anomalyco/opencode/issues/38216)** — CLOSED, 14 comments, 👍8. Adds screenshot evidence and clarifies free models remain unaffected.
7. **[#43355 – [Desktop] UI freezes after agent turns; renderer stuck in ResizeObserver loop](https://github.com/anomalyco/opencode/issues/43355)** — CLOSED, 8 comments. Electron renderer becomes unresponsive while the core loop stays healthy — a severe usability failure requiring force-quit.
8. **[#34407 – CLI renders LaTeX math as raw text](https://github.com/anomalyco/opencode/issues/34407)** — CLOSED, 6 comments, 👍3. Part of a visible LaTeX-rendering cluster (see also #39170, #49486).
9. **[#37508 – Workspaces are gone in 1.18.3](https://github.com/anomalyco/opencode/issues/37508)** — CLOSED, 4 comments, 👍6. High sentiment-to-comment ratio suggests a real UI regression users cared about.
10. **[#49742 – Message timestamp option missing in OpenCode CLI v2.0.8](https://github.com/anomalyco/opencode/issues/49742)** — OPEN, 4 comments, 👍1. The only open issue in the top set; a Ctrl+P feature that existed in v1.18.31 appears removed in v2.0.8.

*Honorable mentions:* [#40055](https://github.com/anomalyco/opencode/issues/40055) / [#38323](https://github.com/anomalyco/opencode/issues/38323) / [#39215](https://github.com/anomalyco/opencode/issues/39215) / [#38473](https://github.com/anomalyco/opencode/issues/38473) (same 401 cluster), [#43102](https://github.com/anomalyco/opencode/issues/43102) / [#42787](https://github.com/anomalyco/opencode/issues/42750) ("Endpoint is unavailable"), and the RTL threads [#38524](https://github.com/anomalyco/opencode/issues/38524) / [#40286](https://github.com/anomalyco/opencode/issues/40286).

## 4. Key PR Progress

1. **[#51657 – fix(tui): surface clipboard write failures](https://github.com/anomalyco/opencode/pull/51657)** — Stops `clipboard.write()` from swallowing backend errors, so the TUI no longer claims "Copied to clipboard" when X11 lacks xclip/xsel.
2. **[#46530 – feat(plugin): expose permission assertions](https://github.com/anomalyco/opencode/pull/46530)** — Adds `ctx.permission.assert(input)` for Effect and Promise plugins; gates browser URL dispatch and server-file/external-directory access before bytes are uploaded.
3. **[#46509 – fix(core): preserve approvals across location cleanup](https://github.com/anomalyco/opencode/pull/46509)** — Fixes sessions showing an active spinner with no answerable approval after the automatic location sweep invalidates a still-in-use cache entry.
4. **[#46544 – fix(core): fold title usage into session stats](https://github.com/anomalyco/opencode/pull/46544)** — Closes #46371 by recording provider-billed title-generation usage that was missing from session cost accounting.
5. **[#46502 – fix(tui): render boxed LaTeX with local fallback](https://github.com/anomalyco/opencode/pull/46502)** — Provides a readable fallback for `\boxed` and fenced LaTeX (related to #40508); inline-math work remains open.
6. **[#46499 – feat(app): edit files in the review pane](https://github.com/anomalyco/opencode/pull/46499)** — Upgrades `@pierre/diffs` and adds full-file editing with Save/Discard, Cmd+S, undo/redo, find/replace, and large-file virtualization.
7. **[#46495 – fix(core): match absolute permission rules for relative paths](https://github.com/anomalyco/opencode/pull/46495)** — Corrects rule matching for Location-relative resources and fixes Plan writes when the global Plan directory sits inside the active Location.
8. **[#46484 – feat(opencode): bundle merge-gateway-ai-sdk-provider](https://github.com/anomalyco/opencode/pull/46484)** — Eliminates a runtime npm install that could break every message on proxy/registry/offline failures.
9. **[#46482 – fix(provider): support Cloudflare Workers AI sessions](https://github.com/anomalyco/opencode/pull/46482)** — Caps output reserve for models reporting `output` limits and unblocks Workers AI models.
10. **[#46436 – fix: intermittent first-request stall on Bun serve under CPU load](https://github.com/anomalyco/opencode/pull/46436)** — Addresses tens-of-seconds hangs on the first `opencode serve` request under load.

*Also notable:* [#46450](https://github.com/anomalyco/opencode/pull/46450) (CSP for packaged renderer), [#46537](https://github.com/anomalyco/opencode/pull/46537) (subagent durations >60 min), [#46477](https://github.com/anomalyco/opencode/pull/46477) (reject duplicate patch targets), [#46546](https://github.com/anomalyco/opencode/pull/46546) (composer popover contrast).

## 5. Feature Request Trends

- **Rendering fidelity in CLI/TUI** — LaTeX math (inline `$...$` and block `$$...$$`) rendered as raw source ([#34407](https://github.com/anomalyco/opencode/issues/34407), [#49486](https://github.com/anomalyco/opencode/issues/49486), [#39170](https://github.com/anomalyco/opencode/issues/39170)) and RTL/BiDi support for Hebrew/Arabic/Persian ([#38524](https://github.com/anomalyco/opencode/issues/38524), [#40286](https://github.com/anomalyco/opencode/issues/40286)).
- **Desktop parity with TUI** — Mouse-clickable microphone for voice input ([#37742](https://github.com/anomalyco/opencode/issues/37742)), file-tree visibility ([#30545](https://github.com/anomalyco/opencode/issues/30545)), and restored Workspaces UI ([#37508](https://github.com/anomalyco/opencode/issues/37508)).
- **Control over waiting/retry flows** — A "Retry Now" button to skip rate-limit countdowns ([#15988](https://github.com/anomalyco/opencode/issues/15988)).
- **Account/billing flexibility** — Gifting Zen/Go subscriptions ([#20612](https://github.com/anomalyco/opencode/issues/20612)).
- **Configurability** — Restoring message timestamps in CLI v2 ([#49742](https://github.com/anomalyco/opencode/issues/49742)) and honoring explicit `limit.output` values ([#29363](https://github.com/anomalyco/opencode/issues/29363)).

## 6. Developer Pain Points

- **Upstream 401 blocks on paid Go subscriptions** — By far the highest-volume frustration: `/chat/completions` returns `401 Request blocked by upstream provider` while `/v1/models` succeeds and free models work. Multiple accounts and platforms reproduce it ([#38257](https://github.com/anomalyco/opencode/issues/38257), [#38195](https://github.com/anomalyco/opencode/issues/38195), [#38216](https://github.com/anomalyco/opencode/issues/38216), [#38293](https://github.com/anomalyco/opencode/issues/38293), [#39215](https://github.com/anomalyco/opencode/issues/39215), [#38473](https://github.com/anomalyco/opencode/issues/38473), [#40055](https://github.com/anomalyco/opencode/issues/40055)).
- **Endpoint unavailability / retry storms** — "Upstream request failed: Endpoint is unavailable" with repeated 3-second retries ([#43102](https://github.com/anomalyco/opencode/issues/43102), [#42787](https://github.com/anomalyco/opencode/issues/42787), [#42750](https://github.com/anomalyco/opencode/issues/42750)).
- **Silent capability caps** — `limit.output` clamped to 32k with only an experimental env var as an escape hatch ([#29363](https://github.com/anomalyco/opencode/issues/29363)).
- **Desktop instability and dead UI controls** — Renderer freezes ([#43355](https://github.com/anomalyco/opencode/issues/43355)) and permanently disabled toggles such as Auto-accept permissions ([#37617](https://github.com/anomalyco/opencode/issues/37617), [#48237](https://github.com/anomalyco/opencode/issues/48237)).
- **Platform/provider compatibility edge cases** — Windows 16-bit executable error under nvm4w/Node 26 ([#37628](https://github.com/anomalyco/opencode/issues/37628)), GitHub Copilot `Forbidden` responses ([#26344](https://github.com/anomalyco/opencode/issues/26344)), and Kimi K3 `400 assistant message must not be empty` when switching models mid-session ([#39451](https://github.com/anomalyco/opencode/issues/39451)).

---

*Digest generated from github.com/anomalyco/opencode activity for 2026-10-02. Issue/PR counts reflect only the top items surfaced by comment count in the source data.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-10-02

Data source: `github.com/badlogic/pi-mono` · Issues/PRs under `earendil-works/pi`

## Today's Highlights
- **Pi v1.0.0** landed with fullscreen TUI as the default, while preserving an opt-out via `tuiMode: "regular"`.
- Issue activity is dominated by **TUI/terminal regressions** around the new system theme, tmux/mintty compatibility, and resize/input handling.
- PR traffic focuses on **provider coverage and correctness**: LLM Gateway support, OpenRouter-reported costs, Anthropic OAuth code flow, and Gemini thinking-level fixes.

## Releases
- **v1.0.0** — Fullscreen by default; set `tuiMode` to `"regular"` to keep normal terminal scrollback. Release notes also reference a leaner code path.  
  https://github.com/earendil-works/pi/releases/tag/v1.0.0  
  Docs: https://github.com/earendil-works/pi/blob/v1.0.0/packages/coding-agent/docs/settings.md#terminal-and-display

## Hot Issues
1. **#5653 — Move off Shrinkwrap** [OPEN, in-progress, 23 comments]  
   Installing `pi-ai` and `pi-coding-agent` as direct deps creates duplicate `pi-ai` copies, splitting the module-level provider registry. High-impact dependency/packaging issue.  
   https://github.com/earendil-works/pi/issues/5653

2. **#10031 — Pi sporadically stuck in “Working...” when thinking is stopped with `<esc>`** [OPEN, 19 comments, 2 👍]  
   Long-running bug since ~v0.84.0; users must exit with Ctrl+C and resume. Significant workflow interruption.  
   https://github.com/earendil-works/pi/issues/10031

3. **#9255 — TuiMainScreen full-screen redraw storm on long transcripts** [OPEN, 9 comments, 1 👍]  
   Violent jumps/doubled text when changed rows sit above the viewport top. Directly affects usability on long sessions.  
   https://github.com/earendil-works/pi/issues/9255

4. **#9980 — Calculated cost for top open models on OpenRouter is off by 2–3x** [OPEN, 5 comments, 1 👍]  
   Catalog uses the cheapest provider’s pricing instead of actual routed cost. Undermines cost tracking for popular open-weights models.  
   https://github.com/earendil-works/pi/issues/9980

5. **#9887 — `read` tool call rendering breaks if line numbers are strings** [OPEN, 5 comments]  
   Some models emit `offset`/`limit` as strings; TUI concatenates instead of adding. A concrete model-compatibility rendering bug.  
   https://github.com/earendil-works/pi/issues/9887

6. **#10219 — MCP OAuth sign-in fails with “Invalid scope” when token response has `"scope": ""`** [CLOSED, no-action, 4 comments, 3 👍]  
   Atlassian MCP login fails after browser approval. High-reaction auth interoperability issue.  
   https://github.com/earendil-works/pi/issues/10219

7. **#10257 — Switching to Codex fails with a custom-tool ID error** [OPEN, 4 comments]  
   Mid-chat model switch replays `codemode` calls as `custom_tool_call` with `fc_` IDs, but Codex expects `ctc`. Blocks mixed-model workflows.  
   https://github.com/earendil-works/pi/issues/10257

8. **#10250 — tmux startup fills input box with hex color garbage** [OPEN, 3 comments]  
   Since 0.99.0/system theme default, tmux 3.6/3.6a users see hex color leakage in the input box. Terminal compatibility regression.  
   https://github.com/earendil-works/pi/issues/10250

9. **#10258 — ChatGPT OAuth Error 400 when signing in to OpenAI** [OPEN, 3 comments]  
   `invalid_grant` after authorization; legacy `open-codex` works, suggesting a provider-specific OAuth regression.  
   https://github.com/earendil-works/pi/issues/10258

10. **#10253 — Connect deferred MCP servers only when needed** [OPEN, 3 comments]  
    Users with 19 MCP servers want lazy connection and cached metadata to avoid starting unrelated servers every session.  
    https://github.com/earendil-works/pi/issues/10253

## Key PR Progress
Only **9 PRs** were updated in the last 24h; all are listed below.

1. **#7610 — feat(ai): add LLM Gateway and LLM Gateway DevPass providers** [OPEN]  
   Adds an OpenRouter-style router as built-in `openai-completions` providers. Expands provider choice.  
   https://github.com/earendil-works/pi/pull/7610

2. **#8383 — fix(ai): send LOW to disable thinking on gemini-3.7-flash** [OPEN]  
   Fixes `400 INVALID_ARGUMENT` when disabling thinking; currently sends unsupported `MINIMAL`.  
   https://github.com/earendil-works/pi/pull/8383

3. **#10295 — feat(coding-agent): animate Sign in with Radius and add Radius intro** [CLOSED]  
   Adds a looping color-stream animation for the Radius login option.  
   https://github.com/earendil-works/pi/pull/10295

4. **#10293 — fix(coding-agent): keep pastel palettes pastel in the system theme** [CLOSED]  
   Caps OKLCH chroma to preserve pastel falloff; closes #10255.  
   https://github.com/earendil-works/pi/pull/10293

5. **#10290 — fix(coding-agent): coerce string read offset/limit in line range display** [CLOSED]  
   Fixes #9887 by coercing string arguments before arithmetic in line-range rendering.  
   https://github.com/earendil-works/pi/pull/10290

6. **#10197 — feat: unify package artifact validation** [OPEN]  
   Produces one manifest-backed, content-addressed artifact set to make local validation match published packages.  
   https://github.com/earendil-works/pi/pull/10197

7. **#10286 — fix(ai): use OpenRouter-reported total cost** [OPEN]  
   Uses OpenRouter’s actual billed amount instead of catalog estimates; directly addresses #9980.  
   https://github.com/earendil-works/pi/pull/10286

8. **#10275 — feat(ai): add Kenari as an API-key provider** [CLOSED]  
   Adds `https://kenari.id/v1` with `kn-` key login and model discovery.  
   https://github.com/earendil-works/pi/pull/10275

9. **#10194 — feat(ai): add copy code login method to Anthropic OAuth** [CLOSED]  
   Adds code-based login for remote/headless Anthropic use, improving on localhost redirect flow.  
   https://github.com/earendil-works/pi/pull/10194

## Feature Request Trends
- **MCP lifecycle and auth**: deferred server connection, Unix socket support, separate OAuth accounts for same-URL entries.  
  Examples: #10253, #10247, #10252
- **Provider/auth expansion**: OpenAI WebSocket transport with API keys, Anthropic copy-code OAuth, additional built-in providers.  
  Examples: #10311, #10194, #10275
- **Cost accuracy**: use provider-reported cost rather than catalog estimates.  
  Example: #9980 / PR #10286
- **TUI/terminal customization**: fullscreen default, quiet startup modes, system theme fidelity, terminal compatibility.  
  Examples: #10296, #10255, #10250
- **Codemode robustness**: nested calls, image exposure, large read results, source leakage.  
  Examples: #10301, #10251
- **Performance and packaging hygiene**: idle memory reduction, lazy extension loading, shrinkwrap/artifact validation.  
  Examples: #10308, #10260, #5653, #10197

## Developer Pain Points
- **TUI/terminal rendering regressions**: redraw storms, tmux/mintty color query leakage, resize `ENOTTY`, modal input loss.  
  #9255, #10250, #10256, #10313, #10312
- **OAuth/auth fragility**: MCP invalid scope, ChatGPT `invalid_grant`, separate account isolation.  
  #10219, #10258, #10252
- **Cost and model-catalog inaccuracy**: OpenRouter pricing off by 2–3x for popular open models.  
  #9980
- **MCP startup overhead**: many configured servers connect every session instead of lazily.  
  #10253
- **Codemode edge cases**: large read results, nested calls, image handling, result leakage into evaluated source.  
  #10301, #10251
- **Provider message transformation bugs**: aborted/error assistant messages dropped while tool results remain, causing 400s.  
  #10263
- **Packaging/dependency duplication**: two `pi-ai` copies split the provider registry.  
  #5653
- **Resource/performance overhead**: idle sessions hold ~140 MiB mean PSS+SwapPss; extensions recompiled on every boot.  
  #10308, #10260

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-10-02

## 1. Today's Highlights

The community is deep in the **Managed Agent architecture rollout** — multiple Stages (B, D, G) of the dual-path design in #12380 are progressing in parallel, with active work on durable session history, Hook execution, and Workspace-bound turns. Concurrently, a cluster of **memory subsystem fixes** shipped or merged: index link truncation, MEMORY.md CRLF preservation, and selector-skip optimization. Security/permissiology hardening remains a strong undercurrent, with several Write-deny bypass fixes queued for the nightly build.

## 2. Releases

- **v0.24.7-nightly.20261001.a7deb01bcb** — Continues the nightly cycle. Includes *fix(core): align Code Mode text with lazy tool discovery* by @tanzhenxin (#12990) and a *fix(permissions): honor approved* entry. ([release](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.7-nightly.20261001.a7deb01bcb))
- **v0.24.7-nightly.20260930.57e720bc97** — Same core fixes carried forward from the prior nightly. ([release](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.7-nightly.20260930.57e720bc97))

No stable release was tagged in the last 24h.

## 3. Hot Issues

1. **[#12380](https://github.com/QwenLM/qwen-code/issues/12380) — Managed Agent dual-path architecture (38 comments, P2)**
 The umbrella tracker that the rest of the Managed Agent work hangs off. Defines staged delivery for Sessions with durable ownership, Workspace bindings, recoverable tool execution, and WebSocket stability. High comment volume signals it is the architectural north star this cycle.
2. **[#12028](https://github.com/QwenLM/qwen-code/issues/12028) — Non-conversation context token governance (18 comments, P2)**
 Highlights that the system prompt, tool schemas, `QWEN.md` and skill listings silently dominate cost on long-context models. Tracking issue for context-performance work — see #12333 for the missing CI gate.
3. **[#12867](https://github.com/QwenLM/qwen-code/issues/12867) — Stage D durable lifecycle follow-ups (17 comments, P2)**
 Covers Turns, Actions, the `java_durable` admission profile, and AgentDefinition after D1–D3. The leading indicator of where Managed Agent is heading after Stages B/C ship.
4. **[#12737](https://github.com/QwenLM/qwen-code/issues/12737) — Stage B ACP-bridge host integration (14 comments, P3)**
 Adds paired Legacy + Managed engines on the host. Scheduling is now Hosted-Managed first, ordinary local `qwen serve` second — a notable prioritization.
5. **[#13030](https://github.com/QwenLM/qwen-code/issues/13030) — Hosted Workspace read-only search profile (9 comments, P2)**
 Proposes admitting `list_directory`, `glob`, and `grep_search` to the Hosted Workspace. Directly pairs with PR #13166 below.
6. **[#12333](https://github.com/QwenLM/qwen-code/issues/12333) — Token work needs a recall / task-success CI gate (8 comments, P2, blocked)**
 The unowned acceptance criterion for #12028: every token change must be measured for what it *saves* and what it *costs*. Until this exists, the largest token savings cannot be safely enabled.
7. **[#12889](https://github.com/QwenLM/qwen-code/issues/12889) — Deferred `tool_call` schema allows empty arguments (7 comments, P2)**
 Concrete runtime bug: a deferred `tool_search` call passed empty args where required fields should be enforced. Worth watching because lazy discovery (#12990) increases reliance on deferred schemas.
8. **[#12042](https://github.com/QwenLM/qwen-code/issues/12042) — `provenance` does not survive api-history projection (7 comments, P2)**
 `detectTurnInterruption()` mis-classifies notification/cron records as `real_user` after projection. A long-tail reliability bug that affects session replay fidelity.
9. **[#12952](https://github.com/QwenLM/qwen-code/issues/12952) — Stage G authoritative Session history + writer fencing (6 comments, P2)**
 Externalizes session checkpoints and proves takeover before removing owner affinity. Necessary precursor to truly distributed Managed Agents.
10. **[#13113](https://github.com/QwenLM/qwen-code/issues/13113) — Sessions become unopenable at 256 MiB transcript (4 comments, P1)**
 `file_history_snapshot` grows quadratically and the 256 MiB index limit is hardcoded, so long-running sessions **fail to open** on subsequent loads. The single most user-visible P1 in the set.

## 4. Key PR Progress

1. **[#13156](https://github.com/QwenLM/qwen-code/pull/13156) — `fix(memory): keep MEMORY.md index link targets resolvable**
 Cuts each index entry at the *title* boundary rather than at column 150, so `[title](path.md)` links no longer get chopped mid-target. Fixes #13145.
2. **[#13146](https://github.com/QwenLM/qwen-code/pull/13146) — `fix(serve): let Web Shell trust a workspace without a terminal**
 Adds a daemon route and Projects-panel **Trust** action so headless / web-only users aren't blocked by trust-fails-closed semantics.
3. **[#12280](https://github.com/QwenLM/qwen-code/pull/12280) — `fix(core): keep Write deny rules when quoting hides the async operator**
 Closes a sandbox bypass where `cd 'x'\'';echo ' & echo {} > settings.json` slipped past `deny: ["Write(.qwen/settings.json)"]` because the `&` was hidden inside quoting. Fixes #12246.
4. **[#13165](https://github.com/QwenLM/qwen-code/pull/13165) — `fix(web-shell): stop offering a Managed approval the viewer cannot answer**
 Disables Allow/Deny once the service returns `403 action_forbidden`. Small UX change that removes a stream of useless retries.
5. **[#13033](https://github.com/QwenLM/qwen-code/pull/13033) — `feat(core): defer agent and goal declarations by default**
 `agent`, `list_agents`, `get_goal`, `update_goal`, and `propose_goal` become lazy by default — no `tools.eager` config needed. Reduces base tool count on the wire.
6. **[#9417](https://github.com/QwenLM/qwen-code/pull/9417) — `fix(core): keep heredoc bodies out of permission rule splitting**
 Heredocs are only stripped when the opener is a provable non-shell consumer, so `Bash(python *)` can match a Python heredoc as one command. Fixes #9381.
7. **[#13112](https://github.com/QwenLM/qwen-code/pull/13112) — `feat(managed-agent): let a Workspace-bound Session's creator submit, cancel, rename**
 Without this, Hosted Sessions admit exactly one Turn and then `409 workspace_unavailable` on every subsequent submit. Foundation PR for several follow-ups (#13162, #13163).
8. **[#13167](https://github.com/QwenLM/qwen-code/pull/13167) — `feat(managed-agent): Run Managed session tools in a Runtime worker (M5a)**
 First slice of M5: Read, Write, Edit, foreground Shell for Managed sessions, all prepared and permission-checked in the worker.
9. **[#13154](https://github.com/QwenLM/qwen-code/pull/13154) — `fix(web-shell): stop the memory panel replacing a global QWEN.md it could not read**
 Routes global memory through the daemon memory endpoint and refuses Save when the editor doesn't hold the full file. Avoids silent destructive replaces.
10. **[#13129](https://github.com/QwenLM/qwen-code/pull/13129) — `feat(managed-agent): implement durable Hosted Hooks (H2)**
 Durable Hook catalogs, fixed occurrence plans, once-at-intent execution records, dynamic registration, native event dispatch, original-owner recovery. The biggest feature PR in the set.
*(Also worth noting: [#13166](https://github.com/QwenLM/qwen-code/pull/13166) admits `glob` in `hosted-workspace-files/2`; [#13172](https://github.com/QwenLM/qwen-code/pull/13172) caps hosted browser smoke gates at 30/60 minutes and stabilizes CI; [#13176](https://github.com/QwenLM/qwen-code/pull/13176) preserves the auth fragment on offline Web Shell reload.)*

## 5. Feature Request Trends

- **Managed Agent / Hosted Workspace surfaces** dominate the discussion: durable lifecycle (Stage D), authoritative session history with writer fencing (Stage G), Runtime-backed tools (M5a), Hook execution (H2), and a read-only `glob`/`list_directory`/`grep_search` profile. The whole roadmap (#12380) is converging on this.
- **Memory subsystem polish**: index link preservation (#13156), extraction cooldowns (#13004), selector-skip shortcuts (#13003), and CRLF-safe replace (#13177). Memory is being treated as a first-class surface, not just a side feature.
- **Context / token efficiency**: non-conversation overhead governance (#12028), deferred agent/goal declarations (#13033), and the missing CI gate (#12333) — the three together describe a coordinated push.
- **Web Shell UX**: workspace trust without a terminal (#13146), approvals that respect ownership (#13165), global QWEN.md safety (#13154), offline retry auth preservation (#13176), keyboard shortcuts (#13175).
- **Platform distribution**: Android Phase 2 follow-ups (#13111) — microphone, accessibility, downloads — under the original #11704 direction.

## 6. Developer Pain Points

- **Sandbox / permission bypasses that quote cleverly** are a recurring class of bug (#13106 `cd ... > .qwen/settings.json`, #12280 quoted `&`, #9417 heredoc bodies). Each fix is narrow but the pattern repeats.
- **Session durability boundaries**: unopenable sessions at 256 MiB (#13113), provenance loss across api-history projection (#12042), flaky Java fault gates (#13017). Long-running sessions are still brittle.
- **Memory panel foot-guns**: index link truncation (#13145), CRLF rewriting on first edit (#13177), destructive replaces of unread global files (#13154). The web-shell editor is gaining power faster than its safety rails.
- **Deferred-tool correctness**: empty arguments for tools with required fields (#12889) and lost "use me instead of X" guidance (#12702). Lazy discovery (#12990) makes these regressions more visible.
- **Approval flows in headless / Managed contexts**: confinement guard ordering (#13157), allowHttp downgrading credential legs (#13123), and approvals offered to viewers who can't answer them (#13165). Headless and Managed paths still need sharper defaults.
- **CI reliability**: daily CVE audit job failing (#13078), flaky browser smoke (#13172), and the missing recall/task-success gate (#12333). Infrastructure debt is starting to surface in user-visible ways.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



# DeepSeek TUI Community Digest — 2026-10-02

---

## 1. Today's Highlights

The v0.10.1 integration wave (#6782) is the central focus, bundling audit repairs and merging a substantial batch of contributor fixes from @asto18089 covering MCP budgets, tool timeouts, vision request envelopes, and idle watchdog behavior. Meanwhile, the community is rallying around a call to form a Chinese localization group (#6804) to keep translated docs synchronized with upstream updates. On the feature side, reviewed OAuth AI provider support (#6805) and the return of a "YOLO mode" debate (#6309) signal ongoing tension between autonomous and supervised operation modes.

---

## 2. Releases

*No new releases in the last 24 hours.*

---

## 3. Hot Issues**

### #6309 — [CLOSED] [enhancement] I want YOLO mode back
- **Author:** weifeng89 | **Updated:** 2026-10-01
- **Link:** [Hmbown/Codewhale Issue #6309](https://github.com/Hmbown/Codewhale/issues/6309)
- **Why it matters:** The current operate mode requires explicit approval for every action, which users find tedious — especially when running DeepSeek V4 Flash on terminal benchmarks. This reflects a long-standing UX debate: how to balance safety with workflow velocity. The closed status suggests the team may have addressed it via configuration or a new mode toggle, though no release notes confirm it yet.

### #6804 — [OPEN] 召号：成立汉化组（Call to Action: Form a Chinese Localization Group）
- **Author:** SparkofSpike | **Updated:** 2026-10-01
- **Link:** [Hmbown/Codewhale Issue #6804](https://github.com/Hmbown/Codewhale/issues/6804)
- **Why it matters:** CodeWhale has extensive documentation, and AI-generated translations are only "readable" — not pleasant to read. The author is recruiting volunteers to form a community localization group (likely via QQ) to maintain high-quality Chinese docs in sync with English updates. This is a governance/growth signal: the project has a significant Simplified Chinese user base and needs sustained community infrastructure to retain them.

### #6792 — [CLOSED] [enhancement] FEAT-026: finish session command shapes and extraction boundary
- **Author:** aboimpinto | **Updated:** 2026-10-01
- **Link:** [Hmbown/Codewhale Issue #6792](https://github.com/Hmbown/Codewhale/issues/6792)
- **Why it matters:** This is the final session-group adoption slice under EPIC-006. The `/structcopy` command still touches concrete App state in main, and the session group's outcomes/registration plus shared helper dependency graph are blocking independent crate extraction. Closing this issue signals architectural progress toward a cleaner separation between session logic and the main application — a prerequisite for modularity and plugin extensibility.

---

## 4. Key PR Progress

### #6782 — [OPEN] v0.10.1 integration: wave/0.10.1-next
- **Author:** Hmbown | **Updated:** 2026-10-01
- **Link:** [Hmbown/Codewhale PR #6782](https://github.com/Hmbown/Codewhale/pull/6782)
- Integrates completed audit repairs for 0.10.1 and incorporates contributor PRs #6793, #6799, and #6802. Key fixes: queued/cancelled turns settle through the Engine's event authority, undo restores the durable conversation before replacement inference, and Linux permission changes are handled. This is the main release candidate branch.

### #6805 — [OPEN] [contribution-gate] feat(plugins): support reviewed OAuth AI providers
- **Author:** LIghtJUNction | **Updated:** 2026-10-01
- **Link:** [Hmbown/Codewhale PR #6805](https://github.com/Hmbown/Codewhale/pull/6805)
- Reviewed plugin bundles can now declare named OpenAI-compatible AI providers and public OAuth clients via `extensions.net.codewhale.providers`. The existing provider route, model catalog, Chat Completions client, and streaming path all consume these declarations — no companion proxy process needed. This significantly expands the plugin ecosystem's AI backend flexibility.

### #6807 — [OPEN] feat(pet): draw the Watch whale with the desktop's whale v2 contour
- **Author:** Hmbown | **Updated:** 2026-10-01
- **Link:** [Hmbown/Codewhale PR #6807](https://github.com/Hmbown/Codewhale/pull/6807)
- A requested parity change (by Hunter) to render the pet whale using the desktop's whale v2 contour. Cosmetic but meaningful for brand consistency across the product family.

### #6799 — [CLOSED] Land asto18089's queue as itself
- **Author:** Hmbown | **Updated:** 2026-10-01
- **Link:** [Hmbown/Codewhale PR #6799](https://github.com/Hmbown/Codewhale/pull/6799)
- Merges seven of @asto18089's open PRs (#6736, #6737, #6738, #6740, #6742, #6743, #6744) as themselves. Because the fork rejects maintainer pushes (HTTP 403), the integration work lives on a branch here. This is a bulk-landing event that covers search, context, workflows, tasks, vision, tools, and engine fixes.

### #6741 / #6802 — [CLOSED] fix(mcp): give tools/call its own request budget and stop undercutting long executions
- **Author:** asto18089 / Hmbown | **Updated:** 2026-10-01
- **Link:** [Hmbown/Codewhale PR #6741](https://github.com/Hmbown/Codewhale/pull/6741) / [PR #6802](https://github.com/Hmbown/Codewhale/pull/6802)
- MCP tool calls were killed by two stacked short budgets: `crates/mcp`'s generic 120s `REQUEST_TIMEOUT` applied to all requests including `tools/call`, plus the TUI pool's 60s `default_execute_timeout`. Legitimate long-running tool calls (builds, test suites, scrapes) were being terminated prematurely. Now `tools/call` gets its own deadline per request.

### #6743 — [CLOSED] fix(tools): kill the js execution child when its timeout fires and raise the cap
- **Author:** asto18089 | **Updated:** 2026-10-01
- **Link:** [Hmbown/Codewhale PR #6743](https://github.com/Hmbown/Codewhale/pull/6743)
- `execute_js_execution_tool` used `timeout(120s, cmd.output())`, but when the timeout elapsed, tokio dropped the wait future **without killing the spawned child**. Node kept running detached — consuming CPU, holding files, and keeping pipe write-ends open — while the tool reported a timeout. The fix ensures child process termination and raises the timeout cap.

### #6742 — [CLOSED] fix(vision): bound connects and wrap each request in a 30-minute envelope
- **Author:** asto18089 | **Updated:** 2026-10-01
- **Link:** [Hmbown/Codewhale PR #6742](https://github.com/Hmbown/Codewhale/pull/6742)
- `image_analyze` built its reqwest client with a single 120-second timeout covering connect, multi-MB base64 upload, full non-streaming vision generation, and body read. A slow-but-healthy provider doing incremental work was killed at 120s. Now each request gets a 30-minute envelope with bounded connect times.

### #6740 — [CLOSED] fix(tasks): keep the idle watchdog patient while a tool call is in flight
- **Author:** asto18089 | **Updated:** 2026-10-01
- **Link:** [Hmbown/Codewhale PR #6740](https://github.com/Hmbown/Codewhale/pull/6740)
- The background-task idle watchdog (default 120s) killed turns during any silent tool call because the journal only records a tool item at start and completion. Long builds, test suites, or MCP calls — healthy, progressing work — tripped the idle deadline with zero journal traffic. The watchdog now distinguishes between idle and in-flight tool execution.

### #6736 — [CLOSED] fix(search): make the all-backends-unavailable error actionable
- **Author:** asto18089 | **Updated:** 2026-10-01
- **Link:** [Hmbown/Codewhale PR #6736](https://github.com/Hmbown/Codewhale/pull/6736)
- When every configured search backend failed, the web-search tool surfaced only the bare backend ID list (`web search backends unavailable: bocha, duckduckgo`), leaving users with no path to a working setup. The message now appends a static configuration hint naming the keyed providers.

### #6793 — [CLOSED] refactor(commands): complete session group shapes (FEAT-026)
- **Author:** aboimpinto | **Updated:** 2026-10-01
- **Link:** [Hmbown/Codewhale PR #6793](https://github.com/Hmbown/Codewhale/pull/6793)
- Completes the session-group adoption slice under FEAT-026. GitHub records the PR as ready and requesting review, but the assistant did not perform either action. Hosted CI awaits administrator approval. This is the companion PR to issue #6792 and a prerequisite for extracting the session group into an independent crate.

---

## 5. Feature Request Trends

- **YOLO / Autonomous Mode:** The #6309 debate shows strong user demand for a "click less, act more" mode — an approval-bypass or auto-approve toggle for trusted contexts. This is likely to resurface as a configuration option rather than a binary mode.
- **Localization Infrastructure:** The call for a Chinese localization group (#6804) is the most prominent community-organizing request. Expect this to evolve into a formal contributor track with glossaries, review workflows, and CI checks for translation freshness.
- **Plugin AI Provider Extensibility:** PR #6805 points to a broader trend: users want to bring their own OpenAI-compatible providers and OAuth clients without writing proxy code. The `extensions.net.codewhale.providers` schema is the first step toward a declarative plugin manifest for AI backends.

---

## 6. Developer Pain Points

- **Fork Push Restrictions:** Multiple PRs (#6799, #6802) had to be re-landed through integration branches because the contributor fork rejects maintainer pushes (HTTP 403) even with "allow edits" enabled. This is a friction point for outside contributors and a sign that the project's `cw-land` workflow needs a more seamless path for maintainer-side finishing.
- **Timeout/Timeout-Child Leaks:** Three separate fixes (#6741, #6742, #6743) address the same class of bug: timeouts that report success while the underlying child process or network request continues consuming resources. This is a recurring pain in async Rust — tokio's drop behavior doesn't automatically kill spawned tasks, and reqwest client-level timeouts are too coarse for multi-phase operations.
- **Spurious Context Updates:** PR #6737 highlights how absolute paths in system prompt labels (`<project_instructions source="...">`) cause unnecessary history appends when directories are moved or recased. This is a subtle but real source of context bloat and wasted tokens.
- **CI Bottleneck for Contributor PRs:** PR #6793 notes that hosted CI awaits administrator approval, and Devin skipped its full review during a trial period. Contributors are hitting a gate where their PRs can't progress without maintainer intervention, slowing the merge cycle.

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>



Based on the GitHub activity leading up to October 2, 2026, here is the ComfyUI community digest.

---

### 1. Today's Highlights
Today’s activity highlights a critical tension between cutting-edge memory-saving features and stability, alongside strong performance optimizations for large-scale multi-modal models. The community is heavily focused on resolving severe regressions in **Dynamic VRAM streaming**, which is causing crashes and corrupted outputs across both NVIDIA and AMD hardware. On the development side, significant engineering effort is being funneled into optimizing **MiniMax H3 video generation** (INT8 kernel fusion and memory reduction) and hardening the asset management database against edge cases.

---

### 2. Releases
*No new official releases were published in the last 24 hours.*

---

### 3. Hot Issues (Top 10)

1. **[Critical Bug] Dynamic VRAM Streaming Crashes with CUDA OOM (#15255)**
   * **Why it matters:** A major regression introduced after the August 3, 2026 update. Users experience sudden crashes with `HostBuffer.read_file_slice failed` errors, forcing CUDA out-of-memory (OOM) states on multi-GPU setups. With 73 comments, it is the most active thread as developers hunt for workarounds (e.g., forcing `--cuda-device 0`).
   * **Link:** [Comfy-Org/ComfyUI Issue #15255](https://github.com/Comfy-Org/ComfyUI/issues/15255)

2. **[Potential Bug] Warm Model Reuse Producing NaN/Black VAE Outputs (#15452)**
   * **Why it matters:** Dynamic VRAM allows models to stay loaded (warm) to save loading times, but reusing them leads to corrupted, black, or NaN outputs during VAE decoding. Users must perform fresh loads to get correct outputs, negating the performance benefits of VRAM streaming.
   * **Link:** [Comfy-Org/ComfyUI Issue #15452](https://github.com/Comfy-Org/ComfyUI/issues/15452)

3. **[Potential Bug] DynamicVRAM Corrupts Outputs on AMD RX 9070 XT (#16337)**
   * **Why it matters:** Highlights that Dynamic VRAM issues are not exclusive to NVIDIA hardware. Users on AMD RDNA 3 cards (gfx1201) report completely corrupted/noise outputs when using the comfy-aimdo implementation.
   * **Link:** [Comfy-Org/ComfyUI Issue #16337](https://github.com/Comfy-Org/ComfyUI/issues/16337)

4. **[Bug] INT8 Attention Returns Pure Noise on AMD gfx1100 with Long Prompts (#16711)**
   * **Why it matters:** Blocks AMD GPU workflows using INT8 attention (e.g., comfy kitchen / Qwen-Image 2.1) once text conditioning exceeds ~150 tokens, rendering long-prompt generation completely unusable.
   * **Link:** [Comfy-Org/ComfyUI Issue #16711](https://github.com/Comfy-Org/ComfyUI/issues/16711)

5. **[Potential Bug] Updates Keep Downgrading Sage Attention 2.2 (#16697)**
   * **Why it matters:** Dependency drift. Automatic updates are inadvertently reverting or downgrading the Sage Attention library, causing performance regressions or compatibility issues for users pinning specific optimization versions.
   * **Link:** [Comfy-Org/ComfyUI Issue #16697](https://github.com/Comfy-Org/ComfyUI/issues/16697)

6. **[Potential Bug] Qwen 2.5-VL Fails in TextGenerate Node (#16628)**
   * **Why it matters:** Core LLM integration is broken due to missing node mappings (`stop_tokens`, `lm_head`, and MRoPE `position_ids`), preventing text generation and visual-language tasks.
   * **Link:** [Comfy-Org/ComfyUI Issue #16628](https://github.com/Comfy-Org/ComfyUI/issues/16628)

7. **[Potential Bug] MultiGPU Memory Leak with TE Models (#16098)**
   * **Why it matters:** A long-standing memory leak warning (`WARNING, memory leak with model *SOME_TE_MODEL_*`) under multi-GPU configurations causes gradual VRAM exhaustion during extended generation sessions.
   * **Link:** [Comfy-Org/ComfyUI Issue #16098](https://github.com/Comfy-Org/ComfyUI/issues/16098)

8. **[Feature Request] FP16 Inference Support for MiniMax H3 on Non-BF16 GPUs (#16507)**
   * **Why it matters:** Currently, MiniMax H3 forces float32 on Turing/Volta architectures because it only declares `bfloat16` and `float32` support. Adding `float16` would unlock tensor core acceleration on older but highly capable hardware (e.g., RTX 20xx, T4).
   * **Link:** [Comfy-Org/ComfyUI Issue #16507](https://github.com/Comfy-Org/ComfyUI/issues/16507)

9. **[Potential Bug] MiniMax H3 Audio Conditioning Shape Mismatch (#16289)**
   * **Why it matters:** Breaks complex video-to-video workflows when combining source video audio guides with standalone voice-timbre reference clips, failing due to a tensor shape mismatch.


</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Community Digest — 2026-10-02

## 1. Today's Highlights

No new Ollama releases landed in the last 24h, but issue and PR activity remains high around GPU backend reliability, performance regressions, and API compatibility. The most engaged threads include MLX kernel failures, CVE disclosures, macOS CPU burn, and RTX 50-series CUDA/Vulkan problems. On the PR side, maintainers and contributors are actively targeting CPU polling on GPU systems, OpenAI tool-message correctness, JSON schema ordering, capability reporting, and proxy support.

## 2. Releases

No new releases were published in the last 24h.

## 3. Hot Issues

1. **[CLOSED] MLX Error — #14118**  
   [https://github.com/ollama/ollama/issues/14118](https://github.com/ollama/ollama/issues/14118)  
   macOS M5 + Ollama 0.15.5 fails to load a Metal GPU kernel after the model loads into VRAM. High community engagement: 25 comments, 14 👍. Matters because MLX/Metal is a core Apple Silicon path.

2. **[OPEN] CRITICAL and HIGH CVE Vulnerabilities in Ollama Go Binary — #16033**  
   [https://github.com/ollama/ollama/issues/16033](https://github.com/ollama/ollama/issues/16033)  
   Reports 36 vulnerabilities, including 1 critical and 11 high. Security-sensitive for production deployments and supply-chain review.

3. **[OPEN] macOS performance regression: llama-server high CPU use — #18038**  
   [https://github.com/ollama/ollama/issues/18038](https://github.com/ollama/ollama/issues/18038)  
   llama-cpp consuming ~560% CPU on an M4 Max during token generation. 14 comments. A major performance regression for macOS users.

4. **[OPEN] CUDA illegal memory access on RTX 5090 with Cohere MoE — #18642**  
   [https://github.com/ollama/ollama/issues/18642](https://github.com/ollama/ollama/issues/18642)  
   Windows 11 + RTX 5090 crashes during prompt evaluation with `MUL_MAT`. 10 comments. Highlights ongoing Blackwell/CUDA stability gaps.

5. **[OPEN] MLX nvfp4 prefill stalls under sustained load — #18505**  
   [https://github.com/ollama/ollama/issues/18505](https://github.com/ollama/ollama/issues/18505)  
   Single-slot load can stall at `processed=total-1` for minutes; only SIGTERM recovers. 10 comments. Important for MLX serving reliability.

6. **[CLOSED] Cloud deepseek-v4.1-flash silently discards image input — #18527**  
   [https://github.com/ollama/ollama/issues/18527](https://github.com/ollama/ollama/issues/18527)  
   Model advertises `vision` but ignores images without error. 8 comments. Raises trust concerns around cloud model capability metadata.

7. **[OPEN] Default n_threads ignores cgroup CPU quota and cpuset — #17916**  
   [https://github.com/ollama/ollama/issues/17916](https://github.com/ollama/ollama/issues/17916)  
   Reports ~45x throughput collapse in CPU-limited containers. Critical for Kubernetes, Docker, and CI deployments.

8. **[CLOSED] `typical_p` no longer supported, breaks existing clients — #18542**  
   [https://github.com/ollama/ollama/issues/18542](https://github.com/ollama/ollama/issues/18542)  
   SillyTavern and other clients that cannot omit the parameter break. 4 👍. A backward-compatibility concern for API consumers.

9. **[OPEN] Windows CUDA discovery fails on RTX 50-series with Driver 616.92 — #18581**  
   [https://github.com/ollama/ollama/issues/18581](https://github.com/ollama/ollama/issues/18581)  
   `total_vram="0 B"` and CPU fallback on Blackwell. New hardware support remains incomplete on Windows.

10. **[CLOSED] macOS malloc heap grows with request volume — #18099**  
    [https://github.com/ollama/ollama/issues/18099](https://github.com/ollama/ollama/issues/18099)  
    llama-server CPU-side heap grew to 6.5 GB paged to swap while KV cache stayed resident. Important memory-lifecycle issue on Apple Silicon.

## 4. Key PR Progress

1. **#18613 — `llm: pass --poll 0 to llama-server when a GPU is present`**  
   [https://github.com/ollama/ollama/pull/18613](https://github.com/ollama/ollama/pull/18613)  
   Fixes #17833 and #18038. Targets runners burning 10–20+ CPU cores at ~100% during generation even when fully on GPU.

2. **#18722 — `openai: keep tool message content parts in one message`**  
   [https://github.com/ollama/ollama/pull/18722](https://github.com/ollama/ollama/pull/18722)  
   Prevents tool message splitting from dropping `tool_call_id` and tool name, improving OpenAI-compatible tool-result rendering.

3. **#18721 — `llm: preserve JSON property order`**  
   [https://github.com/ollama/ollama/pull/18721](https://github.com/ollama/ollama/pull/18721)  
   Fixes #18717. Stops `map[string]any` re-marshalling from alphabetically sorting JSON schema properties sent to llama-server.

4. **#18711 — `create: make explicit capabilities exhaustive at create and runtime`**  
   [https://github.com/ollama/ollama/pull/18711](https://github.com/ollama/ollama/pull/18711)  
   Follow-up to #18708. Preserves inference when capabilities are omitted and supports decision-only System One models.

5. **#18737 — `server: report only decision capability for decision models`**  
   [https://github.com/ollama/ollama/pull/18737](https://github.com/ollama/ollama/pull/18737)  
   Show/list return only `decision` for these models so clients do not offer them for general chat, tools, or thinking.

6. **#18701 — `mlx: System one support`**  
   [https://github.com/ollama/ollama/pull/18701](https://github.com/ollama/ollama/pull/18701)  
   Adds MLX support for System One models with test coverage.

7. **#18726 — `llama: build the pointer-head attention graph`**  
   [https://github.com/ollama/ollama/pull/18726](https://github.com/ollama/ollama/pull/18726)  
   Adds support for pointer-head models, relevant to System One-style probability outputs.

8. **#18741 — `models: add clef support via llama-server`**  
   [https://github.com/ollama/ollama/pull/18741](https://github.com/ollama/ollama/pull/18741)  
   Adds a new model path through llama-server.

9. **#18733 — `Enable proxy from environment in redirect.go`**  
   [https://github.com/ollama/ollama/pull/18733](https://github.com/ollama/ollama/pull/18733)  
   Fixes #18729. Companion PRs #18730 and #18731 also enable proxy support in the HTTP client after the 0.35.0 Cloudflare R2 regression.

10. **#18700 — `app: make chat history read-only and add exports`**  
    [https://github.com/ollama/ollama/pull/18700](https://github.com/ollama/ollama/pull/18700)  
    Keeps existing chats readable/deletable while disabling new chats in the desktop app, and adds markdown/attachment export.

## 5. Feature Request Trends

- **Broader hardware and backend support:** MLX, CUDA Blackwell/RTX 50-series, Vulkan, hybrid graphics, and cgroup-aware CPU threading are recurring themes.  
  Examples: [#18505](https://github.com/ollama/ollama/issues/18505), [#18581](https://github.com/ollama/ollama/issues/18581), [#18557](https://github.com/ollama/ollama/issues/18557), [#17916](https://github.com/ollama/ollama/issues/17916).

- **Cloud model availability and capability honesty:** Users want new cloud models and accurate capability reporting.  
  Examples: [#18071](https://github.com/ollama/ollama/issues/18071), [#18527](https://github.com/ollama/ollama/issues/18527).

- **API/client compatibility and documentation:** Requests for backward-compatible parameters, clearer options docs, and correct OpenAI/tool semantics.  
  Examples: [#18542](https://github.com/ollama/ollama/issues/18542), [#2588](https://github.com/ollama/ollama/issues/2588), [#18722](https://github.com/ollama/ollama/pull/18722).

- **Operational/deployment improvements:** Non-root Linux install, proxy support, blob garbage collection, and container resource awareness.  
  Examples: [#18215](https://github.com/ollama/ollama/issues/18215), [#18729](https://github.com/ollama/ollama/issues/18729), [#18595](https://github.com/ollama/ollama/issues/18595), [#17916](https://github.com/ollama/ollama/issues/17916).

- **New model architecture support:** System One/decision models, clef, pointer-head, and LLM-jp-4 harmony parsing.  
  Examples: [#18701](https://github.com/ollama/ollama/pull/18701), [#18741](https://github.com/ollama/ollama/pull/18741), [#18726](https://github.com/ollama/ollama/pull/18726), [#18728](https://github.com/ollama/ollama/issues/18728).

## 6. Developer Pain Points

- **GPU backend instability remains the top frustration.** MLX kernel errors, CUDA illegal memory access, Vulkan access violations, and CUDA discovery failures on Blackwell span multiple platforms.  
  See [#14118](https://github.com/ollama/ollama/issues/14118), [#18642](https://github.com/ollama/ollama/issues/18642), [#18557](https://github.com/ollama/ollama/issues/18557), [#18581](https://github.com/ollama/ollama/issues/18581).

- **Performance regressions are highly visible.** Excessive CPU polling on GPU systems, macOS CPU burn, and container CPU-quota collapse create direct throughput and cost impact.  
  See [#18038](https://github.com/ollama/ollama/issues/18038), [#17916](https://github.com/ollama/ollama/issues/17916), [#18613](https://github.com/ollama/ollama/pull/18613).

- **Memory lifecycle issues erode long-running reliability.** macOS malloc growth and orphaned blob retention are recurring operational concerns.  
  See [#18099](https://github.com/ollama/ollama/issues/18099), [#18595](https://github.com/ollama/ollama/issues/18595).

- **Proxy and network regressions break real deployments.** The 0.35.0 Cloudflare R2 proxy bypass and pull redirect errors disrupt model downloads in restricted environments.  
  See [#18729](https://github.com/ollama/ollama/issues/18729), [#18716](https://github.com/ollama/ollama/issues/18716).

- **Backward compatibility and silent capability mismatches damage trust.** Removing `typical_p` breaks existing clients, while cloud models advertising unsupported vision silently discard input.  
  See [#18542](https://github.com/ollama/ollama/issues/18542), [#18527](https://github.com/ollama/ollama/issues/18527).

- **Documentation and install ergonomics still need work.** API option descriptions and non-root Linux installation are common requests.  
  See [#2588](https://github.com/ollama/ollama/issues/2588), [#18215](https://github.com/ollama/ollama/issues/18215).

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

Thinking Process:

1.  **Analyze the Request:**
    *   Role: Technical analyst focused on AI developer tools.
    *   Source data: GitHub data for `ggerganov/llama.cpp` (specifically releases, issues, and pull requests).
    *   Target date: 2026-10-02 (digest for this date based on the provided data, which has updates mostly around 2026-10-01/2026-10-02).
    *   Format: Structured English digest with 6 specific sections:
        1. **Today's Highlights** (2-3 sentences)
        2. **Releases** (summarize changes if new versions exist, omit if none - wait, there are releases b11320 to b11327 listed in the prompt, so summarize them).
        3. **Hot Issues** (Pick 10 noteworthy issues, explain why they matter, community reaction, include links).
        4. **Key PR Progress** (Pick 10 important PRs, describe features/fixes, include links).
        5. **Feature Request Trends** (Distill most-requested feature directions).
        6. **Developer Pain Points** (Recurring frustrations/high-frequency requests).

2.  **Analyze the Input Data:**

    *   **Releases (last 24h):**
        *   `b11327`: mtmd: cap max_image to ubatch for non_causal models (#29773)
        *   `b11326`: meta: clear inactive AllReduce shards with FILL, not SCALE (#29793)
        *   `b11325`: jinja: skip copying loop scope unless a loop filter needs it (#29776)
        *   `b11324`: llama-mmap: avoid a second full-size copy of each tensor with direct-io (#29749) (Assisted by Claude, Co-authored by Pranesh Gonegandla / NVIDIA)
        *   `b11323`: HIP: avoid treating CDNA as dgx spark for gqa_ratio 20 in fattn_mma dqk 576 (#29572)
        *   `b11322`: hex-workqueue: fix race condition in seqn getting out of sync with idx_read/write (#29785)
        *   `b11321`: BLAS: Document AOCL-BLAS build and label the device AOCL-BLAS (#29640)
        *   `b11320`: common: add LLM-jp-4.1 Harmony dialect handler (#29681)
        *   `b11319`: opencl: mark vec subgroup bcast as supported for Adreno E17 compiler (#29698)
        *   `b11318`: vocab: honor BOS/EOS settings for PLaMo-2 and PLaMo-3 (#29734)
        *   *Note on Releases Section:* Summarize these key technical fixes (e.g., non-causal image batching, AllReduce shard clearing, direct-io mmap optimization, HIP GQA fix, AOCL-BLAS docs, Japanese LLM dialect support).

    *   **Issues (Top 30 by comment count, select top ~10-15 noteworthy ones):**
        *   `#23577` (33 comments): Eval bug: MTP with Qwen3.6 27B outputs repeated //// after long session. (Windows, CUDA, Ryzen + RTX 4090). High interest, Qwen models popular.
        *   `#27198` (32 comments): Eval bug: [SYCL] --split-mode tensor crashes in dev2dev_memcpy (DEVICE_LOST) on dual Arc Pro B70. SYCL multi-GPU stability issue.
        *   `#25436` (29 comments): Eval bug: DeepSeep V4 garbled output on Strix Halo with ROCm. (Ryzen AI Max+ 395).
        *   `#26399` (20 comments): Eval bug: GGML_OP_TOP_K falls back to CPU on HIP/ROCm above ~3–4K context — 6.4× token-generation loss on DeepSeek-V4-Flash. Performance regression on AMD.
        *   `#27063` (18 comments): Eval bug: SYCL completely broken on A770. (Works on B60). Intel Arc GPU support issues.
        *   `#29022` (11 comments): Feature Request: Fast Tool Gating & Single-Pass Selection via Prefill Logit Slicing. (Tool use optimization).
        *   `#25423` (10 comments): Misc. bug: Very long (20+ minutes) load times when using SYCL tensor parallelism.
        *   `#26445` (10 comments): Eval bug: GLM-5.2 terrible performance on ROCm/HIP after Indexer PR #25407: prefill ~6x slower, load time ~40x longer. (8x MI300X).
        *   `#28902` (9 comments): Misc. bug: M-RoPE embedding batches read batch.pos past the end of the documented n_tokens array. (Potential out-of-bounds memory access).
        *   `#27046` (9 comments, CLOSED/stale): Eval bug: SIGSEGV (null-ptr jump) on GPU offload — resolve_fused_ops false-positives on Intel Lunar Lake iGPU (Arc 140V). (Reproduces on unrelated architectures).
        *   `#25692` (8 comments): SYCL: GPU hang (xe ccs engine reset) with flash attention + quantized KV cache under sustained server load on Arc Pro B70.
        *   `#26209` (8 comments): Regression after c7d8722: llama-server generates infinite "/" tokens in agent mode. (HIP/AMD MAX+ 395).
        *   `#29759` (7 comments, CLOSED): Misc. bug: 76a5bc86d1bdfae96feccdc7a41fea535e792e6e breaks symlinked cache dirs for RPC.
        *   `#29774` (6 comments): Eval bug: Flash attention on CPU (one-chunk) overflows to inf/NaN, has F16 accumulator instead of F32. (Nemotron 3 Nano 4B Q8_0).
        *   `#26987` (6 comments, CLOSED/stale): Qwen3-Coder parser: lazy tool-call trigger never fires when model skips both <tool_call> and <function=. (Tool calling parser issue).

    *   **PRs (Top 20 by comment count / activity, select top 10):**
        *   `#29761` (CLOSED): Qwen4Exp: add MTP. (Speed-bench improvements on DGX Spark).
        *   `#29828` (OPEN): hexagon: install rebuilt HTP skels. (Hexagon backend build fix).
        *   `#29672` (OPEN): ggml: add PTQ1_0, ternary at group 128. (New 1.75-bit quantization format).
        *   `#29825` (OPEN): qwen4exp: halve the indexer score memory. (Memory optimization for Qwen4Exp).
        *   `#29612` (OPEN): CUDA: refactor swizzling code. (CUDA performance and generalization).
        *   `#29357` (OPEN): Vulkan: Intel FA kernel for prefill. (Intel platform FA prefill performance).
        *   `#29787` (OPEN): opencl: use sigmoid f16 for bf16. (Fixes test-backend-ops crash).
        *   `#29827` (CLOSED): CUDA: cap FA convert buffer for quantized KV. (Memory allocation optimization for CUDA Flash Attention).
        *   `#29818` (OPEN): llama, server: add /v1/systemone API (models: laya, julia-1, lev, openjev, kev). (New server API support for decision models).
        *   `#28243` (CLOSED): models: Qwen3.8-Flash-Next MTP. (Enables 1.3 to 2x faster MTP).
        *   `#29535` (OPEN): model: add K2 Horizon dense and MoVA support. (New model architecture support).
        *   `#26436` (OPEN): opencl: build one program per kernel where the compiler cannot hold several (for Adreno A6x). (Adreno compiler resource limits workaround).
        *   `#29591` (OPEN): vulkan: fix stale prealloc_y reuse across flash attention and soft_max. (Vulkan buffer bug fix).
        *   `#29435` (OPEN): CUDA: prefer whole-tile FlashAttention scheduling for efficient two-stage kernels. (CUDA FA prefill performance).
        *   `#29717` (CLOSED): hexagon: add q2_k and q3_k quant type support. (Hexagon quantization).
        *   `#29245` (OPEN): sycl: add grouped MoE XMX GEMM. (SYCL MoE performance).
        *   `#29751` (CLOSED): llama: fix qwen4exp. (Attention path fix).
        *   `#29739` (CLOSED): hexagon: copy short rows through VTCM with vgather. (Hexagon performance).

3.  **Drafting Section Content:**

    *   **Section 1: Today's Highlights**
        *   Needs to be 2-3 sentences summarizing the most important updates.
        *   Key themes: Major performance and memory optimizations for Qwen4Exp (MTP, halved indexer memory, attention fixes), new quantization support (PTQ1_0 ternary format), and key backend fixes (CUDA FA buffer cap, Vulkan Intel prefill FA, SYCL/OpenCL stability improvements). Also, the release of b11327 with non-causal image batching and direct-io mmap copy savings.

    *   **Section 2: Releases**
        *   List the releases from `b11318` to `b11327` (or summarize the key ones).
        *   Key highlights of the releases:
            *   **b11327**: mtmd caps max_image to ubatch for non_causal models.
            *   **b11324**: `llama-mmap` avoids a second full-size tensor copy with direct-io (NVIDIA collaboration).
            *   **b11326**: Meta clears inactive AllReduce shards with FILL, not SCALE.
            *   **b11320**: Adds LLM-jp-4.1 Harmony dialect handler for Japanese LLM support.
            *   **b11318**: Fixes BOS/EOS settings for PLaMo-2 and PLaMo-3.
            *   Other fixes: HIP GQA ratio fix (b11323), Hexagon workqueue race condition (b11322), Jinja loop scope (b11325), AOCL-BLAS documentation (b11321), OpenCL Adreno E17 compiler support (b11319).

    *   **Section 3: Hot Issues (Pick 10 noteworthy issues)**
        *   Need to explain *why* they matter and community reaction.
        *   1. **#23577** (MTP with Qwen3.6 27B outputs repeated `////`): High comment count (33), shows potential decoding/generation stability issues with popular Qwen MTP models on CUDA/Windows. Community is actively debugging.
        *   2. **#27198** (SYCL --split-mode tensor crashes on dual Arc Pro B70): Crucial for multi-GPU SYCL setups, showing deep backend stability issues (`DEVICE_LOST` / `dev2dev_memcpy` crashes). 32 comments, high priority for Intel GPU users.
        *   3. **#25436** (DeepSeek V4 garbled output on Strix Halo with ROCm): Affects cutting-edge AMD Ryzen AI Max+ hardware, showing garbled text generation issues with ROCm backend. 29 comments.
        *   4. **#26399** (GGML_OP_TOP_K falls back to CPU on HIP/ROCm above 3-4K context): Critical performance regression (6.4x token-generation loss on DeepSeek-V4-Flash). Highlights performance bottlenecks in ROCm TOP_K implementation at scale.
        *   5. **#27063** (SYCL completely broken on A770): Intel Arc A770 is a popular consumer GPU, and SYCL is completely broken (crashes on multiple models), while B60 works. High friction for Intel GPU developers.
        *   6. **#29022** (Feature Request: Fast Tool Gating & Single-Pass Selection via Prefill Logit Slicing): Highly requested enhancement to optimize tool-call gating performance by slicing prefill logits, avoiding full vocabulary evaluation when not needed. 11 comments, 3 👍.
        *   7. **#26445** (GLM-5.2 terrible performance on ROCm/HIP after Indexer PR #25407): Massive performance regression (prefill ~6x slower, load time ~40x longer on 8x MI300X). Critical for enterprise AMD deployments.
        *   8. **#28902** (M-RoPE embedding batches read batch.pos past the end of n_tokens array): Potential out-of-bounds read vulnerability in core library code (libllama), causing instability or security concerns on macOS arm64.
        *   9. **#29774** (Flash attention on CPU overflows to inf/NaN, F16 accumulator instead of F32): Core CPU backend bug causing NaN outputs with Nemotron 3 Nano 4B Q8_0 under certain flash attention settings. Crucial for CPU-only inference.
        *   10. **#26209** (Regression: llama-server generates infinite "/" tokens in agent mode): Infinite loop / token generation bug on HIP/AMD MAX+ 395, breaking agent functionality. 8 comments.
        *   *Alternative addition*: **#27046** (SIGSEGV on GPU offload on Intel Lunar Lake iGPU) - closed but shows cross-arch GPU offload false-positives in `resolve_fused_ops`. Let's stick to the top 10 list above, highlighting SYCL/HIP stability as the core pain point.

    *   **Section 4: Key PR Progress (Pick 10 important PRs)**
        *   Describe features or fixes.
        *   1. **PR #29672**: Add `PTQ1_0` ternary quantization at group 128 (1.75 bits per weight, lossless round-trip for ternary weights). New efficient quantization format.
        *   2. **PR #29825**: Qwen4Exp: Halve the indexer score memory. Saves ~4 GB of intermediates at 131k context, vital for long-context Qwen models.
        *   3. **PR #29818**: Add `/v1/systemone` API for decision models (laya, julia-1, lev, openjev, kev). Expands server API compatibility for specialized LLMs.
        *   4. **PR #29357**: Vulkan: Intel FA kernel for prefill. Consolidates prefill/decode shader kernel push constants, boosting Intel Vulkan performance.
        *   5. **PR #29612**: CUDA: Refactor swizzling code. Generalizes support for strides not multiple of 128 bytes, Volta, and AMD (though some paths disabled due to perf).
        *   6. **PR #29827**: CUDA: Cap FA convert buffer for quantized KV. Prevents overallocation of conversion buffers for non-f16 KV types in CUDA Flash Attention.
        *   7. **PR #28243** / **#29761**: Qwen3.8-Flash-Next / Qwen4Exp MTP support. Enables 1.3x to 2x faster speculative decoding (MTP) on DGX Spark.
        *   8. **PR #29535**: Model: Add K2 Horizon dense and MoVA support. Adds full conversion, tokenizer, and inference graph support for K2 Horizon models.
        *   9. **PR #29787**: OpenCL: use sigmoid f16 for bf16. Resolves `test-backend-ops` crashes on sigmoid with bf16 by converting to f16.
        *   10. **PR #29591**: Vulkan: Fix stale `prealloc_y` reuse across flash attention and soft_max. Critical buffer lifecycle fix preventing incorrect tensor conversions.
        *   *(Optional extra)* **PR #29717**: Hexagon: add q2_k and q3_k quant type support. Expands quantization options on Hexagon backend.

    *   **Section 5: Feature Request Trends**
        *   Distill the most-requested feature directions from all issues.
        *   *Tool Call & Agent Optimization:* Fast tool gating via prefill logit slicing (#29022), robust parsing for models skipping tool call wrappers (#26987), and fixing infinite token generation in agent mode (#26209).
        *   *SYCL / Intel GPU Stability & Performance:* Split-mode tensor parallelism crashes (#27198, #26409), A770 complete breakage (#27063), and grouped MoE XMX GEMM performance (#29245).
        *   *AMD ROCm / HIP Performance & Correct

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*