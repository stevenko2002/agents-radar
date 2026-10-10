# AI CLI Tools Community Digest 2026-10-11

> Generated: 2026-10-10 22:15 UTC | Tools covered: 12

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

1. **OpenAI Codex** — Published `rust-v0.163.0-alpha.5`, a pre‑release alpha with no substantive changelog beyond the version bump. [Release](https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.5)

2. **Gemini CLI** — Shipped `v0.65.0-nightly.20261010.g9b6e0265d`, including fixes for JSON parse/response stream errors in `fetchJson` and line‑terminator preservation in `truncateString`. [Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0-nightly.20261010.g9b6e0265d)

3. **GitHub Copilot CLI** — Released `v1.0.96-2` (model ID canonicalization) and `v1.0.96-1` (interactive sandbox settings, startup policy resolution fix). [Release](https://github.com/github/copilot-cli/releases/tag/v1.0.96-2)

4. **Qwen Code** — Published `v0.25.1-preview.2` and `v0.25.0-nightly.20261010.9763580b84`, both carrying a fix for replacing selected remote Hosts without losing bindings. [Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.25.1-preview.2)

5. **llama.cpp** — Tagged multiple builds: `b11552` (server: leave a busy slot untouched when a request pins it), `b11551` (model: support MiniCPM‑V 4.7), `b11540` (sycl: accelerate MXFP4 MoE), `b11541` (opencl: add MoE bin kernels), `b11550` (cmake s390x fix), and `b11539` (deep nested json patch). [Release](https://github.com/ggml-org/llama.cpp/releases/tag/b11552)

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills Community Highlights
*anthropics/skills · data as of 2026-10-11*

> **Data note:** PR comment counts were not captured in this export (all show `undefined`), so PR rankings below reflect the repository's own sort-by-comments ordering. Issue comment counts are accurate.

---

## 1. Top Skills Ranking (by PR attention)

**① #1742 — `fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers`** — [@Kuldeeep18](https://github.com/Kuldeeep18) · [PR #1742](https://github.com/anthropics/skills/pull/1742)
Addresses a breaking change in `mcp>=2.0.0` where `streamablehttp_client` was renamed to `streamable_http_client` and custom HTTP headers moved to a separate client factory. This is a critical compatibility fix for the MCP builder skill. **Status: OPEN.**

**② #1298 — `fix(skill-creator): isolate trigger evals and handle Windows and runtime failures`** — [@MartinCajiao](https://github.com/MartinCajiao) · [PR #1298](https://github.com/anthropics/skills/pull/1298)
Tackles false misses/negative examples in trigger evaluation caused by per-worker command probes, `select()` failures on Windows subprocess pipes, and unrelated tools stopping scans. Directly addresses Issues #1352 and #1383. **Status: OPEN.**

**③ #1771 — `feat(skills): add proofcore-contract-auditor`** — [@ProofCore-Protocol](https://github.com/ProofCore-Protocol) · [PR #1771](https://github.com/anthropics/skills/pull/1771)
New Web3 skill: automated static analysis of Solidity/Rust smart contracts with cryptographic audit proofs anchored to the TON Blockchain via ProofCore's zero-storage Merkle protocol. **Status: OPEN.**

**④ #1734 — `Detect orphaned docx comments`** — [@rohitjain25](https://github.com/rohitjain25) · [PR #1734](https://github.com/anthropics/skills/pull/1734)
Adds detection for orphaned comments in DOCX files — a document hygiene skill for the docx suite. **Status: OPEN.**

**⑤ #1703 — `Add md2video-audio skill`** — [@70v-Yoyo](https://github.com/70v-Yoyo) · [PR #1703](https://github.com/anthropics/skills/pull/1703)
Zero-cost skill compiling Markdown into MP4 videos with human-like voiceovers via Marp presentations. **Status: OPEN.**

**⑥ #1245 — `Add notion-spec-to-implementation and quantitative-resume-auditor skills`** — [@mrdesouzaphd-cmyk](https://github.com/mrdesouzaphd-cmyk) · [PR #1245](https://github.com/anthropics/skills/pull/1245)
Two skills: (1) converts product/tech specs from Notion into concrete implementation tasks with acceptance criteria; (2) audits resumes against quantitative role requirements. **Status: OPEN.**

**⑦ #1792 — `fix(docx): report LibreOffice timeout as an error and verify the output`** — [@TINGyu123644](https://github.com/TINGyu123644) · [PR #1792](https://github.com/anthropics/skills/pull/1792)
Fixes silent-success bug where `soffice` timeouts were reported as success; now verifies output DOCX is free of revision marks (`w:ins`/`w:del`/`w:moveFrom`/`w:moveTo`). **Status: OPEN.**

**⑧ #1730 — `fix(claude-api): replace dead URLs in academy-guide and tool-use-concepts`** — [@GISWLH](https://github.com/GISWLH) · [PR #1730](https://github.com/anthropics/skills/pull/1730)
Replaces 3 hard-404 documentation URLs with verified HTTP 200 canonical links across `academy-guide` and `claude-api` skills. **Status: OPEN.**

---

## 2. Community Demand Trends (from Issues)

| Trend | Signal | Key Issues |
|-------|--------|------------|
| **Security & trust boundaries** | 🔴 Highest urgency (43 comments) | [#492](https://github.com/anthropics/skills/issues/492): community skills impersonating `anthropic/` namespace enables trust-boundary abuse |
| **Org-wide skill sharing** | 🟡 High (16 👍) | [#228](https://github.com/anthropics/skills/issues/228): users demand shareable skill libraries instead of manual `.skill` file shuffling via Slack |
| **Skill loading & trigger reliability** | 🟡 High (12 comments, 7 👍) | [#556](https://github.com/anthropics/skills/issues/556): `claude -p` never triggers skills (0% trigger rate); [#62](https://github.com/anthropics/skills/issues/62): skills disappearing after file renames |
| **Skill quality & evaluation tooling** | 🟡 Sustained (6 issues, 4+ comments each) | [#202](https://github.com/anthropics/skills/issues/202), [#1383](https://github.com/anthropics/skills/issues/1383), [#1352](https://github.com/anthropics/skills/issues/1352), [#1394](https://github.com/anthropics/skills/issues/1394), [#1390](https://github.com/anthropics/skills/issues/1390) — all target `skill-creator` eval/benchmark correctness |
| **Context window bloat** | 🟡 Emerging | [#1487](https://github.com/anthropics/skills/issues/1487): `claude-api` skill eagerly injects ~156k tokens, exhausting context in one tool call |
| **Plugin duplication** | 🟢 Resolved concern | [#189](https://github.com/anthropics/skills/issues/189) (9 👍): `document-skills` and `example-skills` plugins ship identical content |

**New skill proposals** gaining traction: `compact-memory` ([#1329](https://github.com/anthropics/skills/issues/1329)), `agent-governance` ([#412](https://github.com/anthropics/skills/issues/412), closed), and a Reasoning Quality Gate Pipeline ([#1385](https://github.com/anthropics/skills/issues/1385)).

---

## 3. High-Potential Pending Skills

All PRs below are **OPEN** and actively maintained — likely to merge soon:

- **#1742** — MCP builder compatibility fix for `mcp>=2`. Author @Kuldeeep18 is also driving #1681, signaling sustained engagement. Fixes a real-world breaking change.
- **#1298** — Skill-creator trigger eval hardening. Directly resolves the cluster of `skill-creator` issues (#1352, #1383). Author @MartinCajiao is a known maintainer-adjacent contributor.
- **#1961** — `skill-creator` eval viewer security hardening (script breakout, DNS rebinding, cross-site POST, escaping). Closes the XSS gap in [#1394](https://github.com/anthropics/skills/issues/1394). Very recent (Oct 3).
- **#1771** — `proofcore-contract-auditor`. First Web3/smart-contract skill in the collection; fills a clear niche if accepted.
- **#1703** — `md2video-audio`. Novel zero-cost content generation skill with broad appeal for docs→video workflows.
- **#1245** — Dual-skill PR (Notion spec→implementation + resume auditor). Long-lived (since June) with recent activity, suggesting maintainer feedback cycles.

---

## 4. Skills Ecosystem Insight

The community's most concentrated demand is **skill trustworthiness and reliability at scale** — everyone wants more skills (Web3, video, governance, memory), but the dominant conversation has shifted from *what* to build to *how* to safely load, trigger, evaluate, and share them without namespace impersonation, context bloat, or silent eval failures breaking the agent loop.

---

# Claude Code Community Digest — 2026-10-11

*Source: github.com/anthropics/claude-code*

---

## 1. Today's Highlights

There were **no new releases** in the last 24 hours. Activity was dominated by a large batch of **stale issue closures** — nearly all 30 surfaced issues were closed on 2026-10-10 after months of inactivity, suggesting a triage sweep rather than new fixes. The most substantive ongoing discussions concern **data-layer reliability** (dropped transcript text, silent persistence failures) and **MCP/tool orchestration** deadlocks.

---

## 2. Releases

None in the last 24 hours.

---

## 3. Hot Issues

1. **[#79970](https://github.com/anthropics/claude-code/issues/79970)** — *Session permanently dead-locks with `400 Tool reference 'WaitForMcpServers' not found`.* An early tool search during MCP startup bricks the session: every subsequent message returns the same API error. High severity because there is no recovery path. 5 comments, 1 👍.

2. **[#80662](https://github.com/anthropics/claude-code/issues/80662)** — *Assistant text silently dropped from transcript (data-layer, not render).* On Opus 4.8 with interleaved thinking, mid-turn narrative text is missing from the persisted transcript itself. Flagged as a regression of #41814 / #14694 — concerning because it's silent data loss. 4 comments, 2 👍.

3. **[#80654](https://github.com/anthropics/claude-code/issues/80654)** — *Transcript silently stopped persisting for 2+ weeks.* A long-running "brain" session stopped writing to disk after inheriting a `CLAUDE_CODE_CHILD_SESSION` marker, while the session kept running normally. Illustrates a serious identity/marker leakage bug in session management.

4. **[#79919](https://github.com/anthropics/claude-code/issues/79919)** — *Prompt suggestions (ghost-text, Tab-to-accept) never appear in the desktop GUI* despite `promptSuggestionEnabled: true`. Top issue by comment count (8 comments, 2 👍); a feature that works elsewhere but is entirely absent in the GUI app.

5. **[#79931](https://github.com/anthropics/claude-code/issues/79931)** — *Grep/Glob missing from tool roster*, traced to the `tengu_deferred_stub_tool` GrowthBook experiment. Notable as a **remote-config-driven regression** where server-side experiments silently degrade local tooling.

6. **[#79814](https://github.com/anthropics/claude-code/issues/79814)** — *`run_in_background=true` Task agents never deliver their report.* A controlled A/B in the same session showed the foreground task succeeds identically — pointing to a background-dispatch bug that silently loses work.

7. **[#88120](https://github.com/anthropics/claude-code/issues/88120)** — *`claude-api` skill context balloons to hundreds of thousands of tokens* on basic queries, despite self-reporting ~360 tokens via `/context`. Marked duplicate, but highlights a real cost/observability gap.

8. **[#79902](https://github.com/anthropics/claude-code/issues/79902)** — *Bash tool timeout leaks pipeline children.* The shell is killed but not the full process group; a bundled `grep` escaped and ran 11.5h at 1199% CPU reparented to `systemd --user`. Serious resource-safety issue.

9. **[#79952](https://github.com/anthropics/claude-code/issues/79952)** — *Config-editing writes to `~/.claude/settings.json`, ignoring `CLAUDE_CONFIG_DIR`.* The config it edits is not the config it reads — a correctness bug in config management.

10. **[#80863](https://github.com/anthropics/claude-code/issues/80863)** — *Desktop `send_message` to a not-yet-loaded session queues silently and never invokes the target.* The tool result is indistinguishable from successful delivery, making cross-session automation unreliable.

*Other notable reports:* [#79804](https://github.com/anthropics/claude-code/issues/79804) (new sessions defaulting cwd to the entire user home folder), [#79772](https://github.com/anthropics/claude-code/issues/79772) (MCP comment posting injecting U+00B7 into @mentions), [#80848](https://github.com/anthropics/claude-code/issues/80848) (maxTurns-killed subagent misreported as "completed without StructuredOutput").

---

## 4. Key PR Progress

Only **two PRs** were updated in the last 24 hours — the data does not contain ten. Both are listed below:

1. **[#6754](https://github.com/anthropics/claude-code/pull/6754)** — *Document RTL support for Claude CLI in VS Code* (OPEN, updated 2026-10-10). Adds `rtl-support.md` describing how to fix reversed/broken Hebrew, Arabic, and Persian rendering in the VS Code integrated terminal. Addresses a persistent i18n gap for RTL users.

2. **[#41447](https://github.com/anthropics/claude-code/pull/41447)** — *feat: open source claude code ✨* (OPEN, updated 2026-10-09). A long-standing community request closing issues #59, #456, #2846, #22002, and #41434. Symbolically significant as the most-referenced open-source ask, though it remains open with no maintainer engagement.

> **Note:** The requested "10 important PRs" cannot be produced from this dataset — only 2 PRs were updated in the window.

---

## 5. Feature Request Trends

Distilled from all Issues, the most-requested directions are:

- **Richer input modalities** — native video/screen-recording support with frame extraction for UI bug reports ([#80865](https://github.com/anthropics/claude-code/issues/80865)).
- **Token efficiency in file reads** — stop sending both extracted text *and* rendered images for PDFs ([#80449](https://github.com/anthropics/claude-code/issues/80449)).
- **CLI/UX ergonomics** — case-insensitive built-in slash commands, or "did you mean" suggestions on unknown commands ([#79981](https://github.com/anthropics/claude-code/issues/79981)).
- **Durable approvals** — persist computer-use app approvals for a session's lifetime rather than until exit ([#80862](https://github.com/anthropics/claude-code/issues/80862)).
- **Better desktop documentation** — clarify supported file types and directory handling in the File pane ([#79797](https://github.com/anthropics/claude-code/issues/79797)).
- **Cross-session/agent orchestration reliability** — reliable background agents and session messaging ([#79814](https://github.com/anthropics/claude-code/issues/79814), [#80863](https://github.com/anthropics/claude-code/issues/80863)).

---

## 6. Developer Pain Points

- **Silent data loss and unobservable failures.** Multiple reports ([#80662](https://github.com/anthropics/claude-code/issues/80662), [#80654](https://github.com/anthropics/claude-code/issues/80654), [#80863](https://github.com/anthropics/claude-code/issues/80863)) describe operations that appear successful but silently drop transcripts, reports, or messages. The absence of clear error signals is the recurring theme.
- **MCP reliability and startup ordering.** Tool-reference deadlocks ([#79970](https://github.com/anthropics/claude-code/issues/79970)), OAuth/Cloudflare failures ([#80179](https://github.com/anthropics/claude-code/issues/80179), [#79951](https://github.com/anthropics/claude-code/issues/79951)), and text-corruption on write ([#79772](https://github.com/anthropics/claude-code/issues/79772)) make MCP connectors a fragile surface.
- **Remote-config/experiment-driven regressions.** Server-side flags silently removing tools ([#79931](https://github.com/anthropics/claude-code/issues/79931)) erode user trust in local behavior.
- **Process and resource safety.** Leaked pipeline children surviving timeouts ([#79902](https://github.com/anthropics/claude-code/issues/79902)) and runaway agent forks ([#79918](https://github.com/anthropics/claude-code/issues/79918)) show lifecycle management gaps.
- **Config and environment inconsistency.** `CLAUDE_CONFIG_DIR` being ignored by config-editing paths ([#79952](https://github.com/anthropics/claude-code/issues/79952)) and home-directory defaults ([#79804](https://github.com/anthropics/claude-code/issues/79804)) create surprising, expensive behavior.
- **Stale-issue fatigue.** The 24h window is almost entirely `stale`-labeled closures, meaning many of these unresolved problems sat for months before being swept. Community reaction (👍 counts remain low but comments show careful, reproducible reports) suggests reporters are doing diligence that isn't being matched by triage.

---

*Digest compiled from 50 issues and 2 PRs updated in the last 24h. No releases were published in the window.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-10-11

## 1. Today's Highlights
Codex published a new Rust prerelease, `rust-v0.163.0-alpha.5`, with no detailed changelog beyond the version bump. Community attention remains heavily concentrated on Windows desktop reliability, especially sandbox/ACL failures, Computer Use and Dots integration gaps, and daemon/app-server lifecycle bugs. Meanwhile, PR activity shows sustained internal hardening across TUI input handling, WSL clipboard behavior, code-mode runtime recovery, and opt-in OpenAI request features.

## 2. Releases
- **rust-v0.163.0-alpha.5** — Pre-release alpha. No substantive release notes were provided in the data beyond `Release 0.163.0-alpha.5`; treat as an incremental Rust-core alpha update.  
  https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.5

## 3. Hot Issues

1. **#48074 [CLOSED] Windows terminal windows repeatedly flash during requests after installing the Codex daemon**  
   Why it matters: A high-impact Windows daemon/CLI regression that caused repeated terminal flashing during normal requests. It is the most engaged issue in the set and is now closed.  
   Reaction: 150 comments, 155 👍 — strongest community signal today.  
   https://github.com/openai/codex/issues/48074

2. **#49458 [OPEN] [Windows] dot-started local tasks lack Computer Use tools while ordinary local Codex sessions work**  
   Why it matters: Breaks consistency between dot-initiated and normal local sessions, blocking Computer Use workflows on Windows.  
   Reaction: 71 comments, 25 👍 — active and unresolved.  
   https://github.com/openai/codex/issues/49458

3. **#49729 [OPEN] Dot cannot create or follow up with local Codex tasks in saved projects**  
   Why it matters: Dot cannot select saved Codex App projects or reliably message project threads, breaking local task orchestration.  
   Reaction: 50 comments, 11 👍.  
   https://github.com/openai/codex/issues/49729

4. **#42739 [OPEN] Local projects disappear from sidebar after Windows desktop update**  
   Why it matters: A project-visibility/data-access regression on Windows desktop; chats remain under Recents, but Projects show empty.  
   Reaction: 50 comments, 0 👍 — high volume, low upvote sentiment suggests frustration rather than agreement.  
   https://github.com/openai/codex/issues/42739

5. **#51590 [OPEN] Windows sandbox fails opening running `node_repl.exe` for ACL update (error 32); Computer Use and shell blocked**  
   Why it matters: Sandbox ACL sharing violation blocks ordinary shell commands and Computer Use initialization.  
   Reaction: 39 comments, 10 👍.  
   https://github.com/openai/codex/issues/51590

6. **#52407 [OPEN] Windows Dots: CUA MXC launcher fails with HRESULT 0x80070003 after direct shell recovery**  
   Why it matters: Windows Dots + Computer Use launch path remains broken even after shell recovery attempts.  
   Reaction: 24 comments, 4 👍.  
   https://github.com/openai/codex/issues/52407

7. **#45835 [OPEN] Codex App repeatedly shows "Selected model is at capacity" despite healthy connectivity**  
   Why it matters: Misleading capacity/rate-limit errors interrupt normal app usage and confuse diagnosis.  
   Reaction: 22 comments, 6 👍.  
   https://github.com/openai/codex/issues/45835

8. **#37552 [OPEN] Cannot use multiple terminal sessions**  
   Why it matters: A long-standing CLI/app-server/remote limitation that affects parallel workflows.  
   Reaction: 17 comments, 5 👍.  
   https://github.com/openai/codex/issues/37552

9. **#2379 [OPEN] Undo / redo typing in TUI**  
   Why it matters: Basic editor UX is still missing in the interactive TUI; `Cmd-Z` / `Shift-Cmd-Z` support is a clear user request.  
   Reaction: 13 comments, 36 👍 — high demand relative to discussion volume.  
   https://github.com/openai/codex/issues/2379

10. **#25317 [OPEN] Windows Desktop + WSL shell stays poisoned after reboot; live app-server holds deleted CODEX_HOME/tmp/arg0 helper path despite `unified_exec=false`**  
    Why it matters: A regression in Windows Desktop + WSL process/shell state handling, with app-server retaining stale helper paths after reboot.  
    Reaction: 12 comments, 4 👍.  
    https://github.com/openai/codex/issues/25317

## 4. Key PR Progress

1. **#52972 Upgrade `rmcp` to `3.5.1` and harden lifecycle tests**  
   Updates the pinned `rmcp` dependency, migrates MCP handlers/fixtures to `ClientConfig`/`ServerConfig`, and adjusts cancellation behavior for elicitation requests.  
   https://github.com/openai/codex/pull/52972

2. **#52968 Keep startup modals protected when terminal input draining times out**  
   Prevents unfinished terminal control sequences from aborting modal handling, keeping the screen available for explicit user decisions.  
   https://github.com/openai/codex/pull/52968

3. **#52967 Reuse and prewarm the WSL clipboard text reader**  
   Avoids launching PowerShell on every paste under WSL, reducing hangs and clipboard-worker stalls.  
   https://github.com/openai/codex/pull/52967

4. **#52964 Defer owned transcript redraws during raw paste bursts**  
   Skips full transcript redraws during large paste events, improving composer batching and TUI responsiveness.  
   https://github.com/openai/codex/pull/52964

5. **#52937 Retain client-marked tool outputs across compaction**  
   Adds a disabled-by-default mechanism to preserve client-supplied tool outputs marked `retain: true`, preventing task instructions from being trimmed during compaction.  
   https://github.com/openai/codex/pull/52937

6. **#52825 Report exec runtime resets before accepting further requests**  
   Surfaces lost stored values and running cells after gRPC code-mode runtime replacement instead of silently continuing.  
   https://github.com/openai/codex/pull/52825

7. **#52778 Make pinned transcript prompts clickable**  
   Clicking a pinned prompt header scrolls to the original prompt and clears search/activity focus, improving transcript navigation.  
   https://github.com/openai/codex/pull/52778

8. **#52748 Make code-mode `exit()` stop the entire cell**  
   Terminates V8 execution fully so `catch`, `finally`, and queued promise callbacks cannot continue after `exit()`.  
   https://github.com/openai/codex/pull/52748

9. **#52742 Add opt-in output token replay for OpenAI requests**  
   Adds a disabled-by-default `output_token_replay` feature to request `output.encrypted_content` and preserve encrypted message/tool-call metadata.  
   https://github.com/openai/codex/pull/52742

10. **#52723 Add opt-in gRPC over stdio for the code-mode host**  
    Introduces `grpc+stdio://` as a host transport behind a feature flag, with a lazy HTTP/2 channel and isolated session state.  
    https://github.com/openai/codex/pull/52723

## 5. Feature Request Trends
- **Windows desktop parity and reliability**: sandbox, daemon, Computer Use, Dots, auth, and project-sidebar behavior dominate issue volume. Representative: [#51590](https://github.com/openai/codex/issues/51590), [#52407](https://github.com/openai/codex/issues/52407), [#42739](https://github.com/openai/codex/issues/42739).
- **Better interactive TUI/CLI ergonomics**: undo/redo, local ingress for trusted controllers, reusable permission approvals, and clearer progress reporting. Representative: [#2379](https://github.com/openai/codex/issues/2379), [#15355](https://github.com/openai/codex/issues/15355), [#17623](https://github.com/openai/codex/issues/17623), [#35930](https://github.com/openai/codex/issues/35930).
- **Agent task transparency**: evidence-backed completion reports and stable goal-state transitions are recurring requests. Representative: [#36718](https://github.com/openai/codex/issues/36718), [#29370](https://github.com/openai/codex/issues/29370).
- **Remote/connectivity diagnostics**: remote-control stream resets, misleading model-capacity errors, and Sites git-sync failures need better classification and recovery. Representative: [#32241](https://github.com/openai/codex/issues/32241), [#45835](https://github.com/openai/codex/issues/45835), [#49573](https://github.com/openai/codex/issues/49573).
- **Multi-session and worktree/config correctness**: multiple terminal sessions and project-level `.codex/hooks.json` behavior in git worktrees remain unresolved. Representative: [#37552](https://github.com/openai/codex/issues/37552), [#27133](https://github.com/openai/codex/issues/27133).

## 6. Developer Pain Points
- **Windows sandbox and ACL failures are blocking core workflows**: shell execution and Computer Use frequently fail before running, often with low-level errors such as `error 32` or `HRESULT 0x80070003`. See [#51590](https://github.com/openai/codex/issues/51590), [#52407](https://github.com/openai/codex/issues/52407), [#51971](https://github.com/openai/codex/issues/51971).
- **Daemon/app-server lifecycle bugs create persistent broken states**: terminal flashing, deleted working directories, stale helper paths, and poisoned WSL shells require reboots or manual recovery. See [#48074](https://github.com/openai/codex/issues/48074), [#25317](https://github.com/openai/codex/issues/25317), [#51152](https://github.com/openai/codex/issues/51152).
- **Computer Use and Dots integration is inconsistent on Windows**: dot-started tasks may lack tools, fail to select saved projects, or lose thread continuity. See [#49458](https://github.com/openai/codex/issues/49458), [#49729](https://github.com/openai/codex/issues/49729).
- **Misleading capacity/connectivity errors waste developer time**: “model is at capacity” and remote stream resets appear despite healthy connectivity. See [#45835](https://github.com/openai/codex/issues/45835), [#32241](https://github.com/openai/codex/issues/32241).
- **Performance regressions on Windows can be severe**: lifecycle hooks adding ~17–25s per `exec_command` show how costly sandbox/hook integration can become. See [#41942](https://github.com/openai/codex/issues/41942).
- **Configuration and session semantics are fragile**: hooks ignored in worktrees, blocked goals not resuming correctly, and multi-terminal limitations continue to surface. See [#27133](https://github.com/openai/codex/issues/27133), [#29370](https://github.com/openai/codex/issues/29370), [#37552](https://github.com/openai/codex/issues/37552).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

## Gemini CLI Community Digest — 2026-10-11

### 1. Today’s Highlights
Subagent and hook infrastructure continues to dominate community discussion, with multiple p2 issues covering lifecycle hooks, configurability, async execution, persistence, and remote-agent auth. The latest nightly ships two reliability fixes: CLI JSON/stream error handling and core string truncation. PR activity is heavily focused on stability — ACP replay ordering, web-search timeouts, atomic-write filename limits, CI/eval failure signaling, and terminal resize UI refresh.

### 2. Releases
**v0.65.0-nightly.20261010.g9b6e0265d** was released in the last 24h.
- `fix(cli): handle JSON parse and response stream errors in fetchJson` — by @jesussamuel-byte — [PR #29658](https://github.com/google-gemini/gemini-cli/pull/29658)
- `fix(core): preserve line terminators in truncateString` — by @diegogodinezr — [PR #29673](https://github.com/google-gemini/gemini-cli/pull/29673)

### 3. Hot Issues
1. **#15269 — Feature: Missing Subagent Hook Events**  
   Tracks `BeforeSubAgent` / `AfterSubAgent` lifecycle hooks for parity with main-agent hooks. High engagement: 8 comments, p2/area-agent.  
   [Issue #15269](https://github.com/google-gemini/gemini-cli/issues/15269)

2. **#17602 — [Remote Agents] A2A Machine-to-Machine Auth**  
   Low-priority but strategically important for non-interactive service-to-service auth. 5 comments, p3.  
   [Issue #17602](https://github.com/google-gemini/gemini-cli/issues/17602)

3. **#17110 — Agent should run changes to validate app**  
   Proposes self-validation feedback loops for non-deterministic LLM coding agents. 5 comments, p2.  
   [Issue #17110](https://github.com/google-gemini/gemini-cli/issues/17110)

4. **#17760 — Subagent Configurability: Tools, policy, hooks, skills, schema**  
   Epic for making subagents configurable as plan mode, skills, and tasks expand. 3 comments, 2 👍, p2.  
   [Issue #17760](https://github.com/google-gemini/gemini-cli/issues/17760)

5. **#17758 — Subagent Resumability & Persistence**  
   Aims to prevent lost work on restart and allow main-agent ↔ subagent conversation resumption. 3 comments, 1 👍, p2.  
   [Issue #17758](https://github.com/google-gemini/gemini-cli/issues/17758)

6. **#17757 — Local agents can be started async**  
   Requests non-blocking subagent execution based on natural language or model choice. 3 comments, p2.  
   [Issue #17757](https://github.com/google-gemini/gemini-cli/issues/17757)

7. **#17604 — [Remote Agents] OAuth 2.0: Dynamic Client Registration**  
   Would let the CLI auto-register as an A2A client using discovered `registration_endpoint`. 3 comments, p2.  
   [Issue #17604](https://github.com/google-gemini/gemini-cli/issues/17604)

8. **#15670 — Standardizing Reusable Intelligence: Native “Sub-agent” and “Skills” Architecture**  
   Community proposal for a “squad” model where the main agent orchestrates specialized transient experts. 3 comments, p2.  
   [Issue #15670](https://github.com/google-gemini/gemini-cli/issues/15670)

9. **#15272 — Security: Default Hook Sandboxing**  
   Evaluates sandboxing hooks by default to mitigate local code execution risk. 3 comments, p2/security.  
   [Issue #15272](https://github.com/google-gemini/gemini-cli/issues/15272)

10. **#18836 — Replace WriteToDo with Persistent File-Based Task Tracking (CRUD)**  
    Targets context rot, token cost, and session memory loss from in-context todo tracking. 2 comments, p3.  
    [Issue #18836](https://github.com/google-gemini/gemini-cli/issues/18836)

### 4. Key PR Progress
1. **#29708 — fix(acp): finish session/load history replay before responding**  
   Ensures ACP clients receive replayed `session/update` notifications before the response, matching spec ordering. [PR #29708](https://github.com/google-gemini/gemini-cli/pull/29708)

2. **#29705 — fix(cli): round durations before unit selection**  
   Fixes duration display across unit boundaries, e.g. `1000ms` → `1.0s`, `60.0s` → `1m`. [PR #29705](https://github.com/google-gemini/gemini-cli/pull/29705)

3. **#29703 — fix(core): keep atomic-write temp file name within NAME_MAX**  
   Prevents `ENAMETOOLONG` for long destination filenames by shortening the temp-file suffix strategy. [PR #29703](https://github.com/google-gemini/gemini-cli/pull/29703)

4. **#29611 — fix(core): support multimodal function response for dotted Gemini 3 models and aliases**  
   Resolves model aliases and dotted Gemini 3 versions to avoid invalid sibling parts and HTTP errors. [PR #29611](https://github.com/google-gemini/gemini-cli/pull/29611)

5. **#29505 — fix: support rootless Podman with keep-id**  
   Closed p1 fix for sandbox startup under rootless Podman by preserving host UID/GID correctly. [PR #29505](https://github.com/google-gemini/gemini-cli/pull/29505)

6. **#29615 — fix(ci): gate chained E2E on trigger success and tighten SHA fallback**  
   Hardens `workflow_run` checkout path against unintended code checkout. [PR #29615](https://github.com/google-gemini/gemini-cli/pull/29615)

7. **#29608 — fix(core): time out hanging web searches after 30 seconds**  
   Addresses permanent `Thinking...` states from unsettled `GoogleSearch` / `WebFetch` LLM calls. [PR #29608](https://github.com/google-gemini/gemini-cli/pull/29608)

8. **#29606 — fix(core): split custom headers only before a valid RFC 9110 token**  
   Prevents brittle parsing of `GEMINI_CLI_CUSTOM_HEADERS` when values contain JSON metadata or URLs. [PR #29606](https://github.com/google-gemini/gemini-cli/pull/29606)

9. **#29607 — fix(scripts): fail the nightly eval summary when no reports exist**  
   Stops `aggregate_evals.js` from exiting 0 when the artifacts directory has no `report.json`, masking failed nightly legs. [PR #29607](https://github.com/google-gemini/gemini-cli/pull/29607)

10. **#29644 — fix(cli): restore debounced static UI refresh on terminal width changes**  
    Restores 100ms debounced `refreshStatic()` behavior in `AppContainer.tsx` for inline rendering resize events. [PR #29644](https://github.com/google-gemini/gemini-cli/pull/29644)

### 5. Feature Request Trends
- **Subagent lifecycle and orchestration**: lifecycle hooks, built-in agents, async/background execution, parallel subagents, shared memory, and pure orchestrator mode.
- **Subagent configurability and UX**: tool/policy/hook/skill/schema configuration, discovery via `settings.json`, `/agents` registration, and final-response output behavior.
- **Persistence and resumability**: resuming subagent conversations, persistent file-based task tracking, and per-workspace policy support.
- **Remote-agent interoperability**: A2A machine-to-machine auth, OAuth 2.0 client credentials, and dynamic client registration.
- **Security and enterprise controls**: default hook sandboxing, enterprise enable/disable hooks, and safer local execution.
- **Agent self-validation**: feedback loops that let the agent run changes and validate the app before finishing.

### 6. Developer Pain Points
- **Hangs and silent failures**: web-search/WebFetch requests can leave the agent stuck in `Thinking...` for 30+ minutes ([PR #29608](https://github.com/google-gemini/gemini-cli/pull/29608)); JSON parse and response stream errors in `fetchJson` are being hardened ([PR #29658](https://github.com/google-gemini/gemini-cli/pull/29658)).
- **File and truncation edge cases**: atomic-write temp names exceed `NAME_MAX` ([PR #29703](https://github.com/google-gemini/gemini-cli/pull/29703)); line terminators are lost during truncation ([PR #29673](https://github.com/google-gemini/gemini-cli/pull/29673)); agents may not re-read truncated content when needed ([Issue #19043](https://github.com/google-gemini/gemini-cli/issues/19043)).
- **Model compatibility issues**: dotted Gemini 3 models and aliases can emit invalid multimodal function-response parts ([PR #29611](https://github.com/google-gemini/gemini-cli/pull/29611)).
- **Configuration parsing brittleness**: custom headers split incorrectly on JSON metadata or multi-URL values ([PR #29606](https://github.com/google-gemini/gemini-cli/pull/29606)).
- **CI/eval blind spots**: nightly eval aggregation can report success with no reports ([PR #29607](https://github.com/google-gemini/gemini-cli/pull/29607)); chained E2E workflow paths need tighter gating ([PR #29615](https://github.com/google-gemini/gemini-cli/pull/29615)).
- **Environment-specific failures**: Cloud Shell Lab Accounts hit `Requested entity was not found` ([Issue #18062](https://github.com/google-gemini/gemini-cli/issues/18062)); rootless Podman sandbox UID/GID mapping required a p1 fix ([PR #29505](https://github.com/google-gemini/gemini-cli/pull/29505)).
- **Agent initialization bugs**: `codebase_investigator` can fail schema validation and loop through quota without launching ([Issue #17648](https://github.com/google-gemini/gemini-cli/issues/17648)).
- **Enterprise hooks gap**: enterprises still need a documented way to enable/disable hooks ([Issue #15462](https://github.com/google-gemini/gemini-cli/issues/15462)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



# GitHub Copilot CLI Community Digest — 2026-10-11

Welcome to the technical community digest for the GitHub Copilot CLI. Below is a structured summary of the latest releases, community issues, pull requests, and key trends from the past 24 hours.

---

### 1. Today's Highlights
The primary focus over the last 24 hours has been on community-driven triage of critical workflow blockers, particularly around sandboxed environments (Git credentials and macOS networking) and session stability. On the release front, GitHub shipped minor but important quality-of-life improvements in `v1.0.96-2` regarding model ID canonicalization and interactive sandbox configurations.

---

### 2. Releases

#### **v1.0.96-2**
*   **Model ID Canonicalization:** Fixed a case-sensitivity bug where model IDs passed via `/model` and `/config model` were not matched case-insensitively, now saving the correct canonical IDs.
*   [Release Tag](https://github.com/github/copilot-cli/releases/tag/v1.0.96-2)

#### **v1.0.96-1**
*   **Interactive Sandbox Settings:** Added features suggesting possible environment secrets and allowing users to mask hosts before saving sandbox configurations.
*   **Startup Policy Resolution:** Fixed a startup race condition, ensuring that the `/allow-all` command remains available while enterprise policies are still resolving.
*   [Release Tag](https://github.com/github/copilot-cli/releases/tag/v1.0.96-1)

---

### 3. Hot Issues (Top 10 Selected)

The community has flagged several high-severity bugs and feature requests. Here are the 10 most critical issues to track:

1.  **[#5100] Session Event Delivery Timeout (Critical Stability Bug)**
    *   **Summary:** In long-running interactive sessions, prompt submissions fail permanently if a host fails to acknowledge a tool event within 120 seconds. The session becomes completely unusable until manually resumed.
    *   **Why it matters:** Breaks core interactive workflows for developers relying on long-lived sessions.
    *   **Status:** Open | [Link](https://github.com/github/copilot-cli/issues/5100)
2.  **[#5103] BYOK Sub-Agent API Routing Failure**
    *   **Summary:** In Bring-Your-Own-Key (BYOK) mode, the `COPILOT_PROVIDER_WIRE_API` setting (`completions` vs. `responses`) is force-applied to sub-agents. If a sub-agent uses a model from a different provider family, it fails with an HTTP 400 error.
    *   **Why it matters:** Breaks multi-model orchestration workflows where different sub-agents are routed to specialized models.
    *   **Status:** Open | [Link](https://github.com/github/copilot-cli/issues/5103)
3.  **[#5105] macOS Sandbox Blocks Gradle Daemon**
    *   **Summary:** Even with local networking explicitly allowed, the macOS sandbox prevents the Gradle client from connecting to a locally running Gradle daemon, blocking Java/Kotlin build tasks.
    *   **Why it matters:** Major workflow blocker for enterprise Java developers using Copilot CLI on macOS.
    *   **Status:** Open | [Link](https://github.com/github/copilot-cli/issues/5105)
4.  **[#5108] ACP Session Listing Performance Bottleneck**
    *   **Summary:** Over the Agent Client Protocol (ACP

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI — Community Digest
**Date:** 2026-10-11
**Source:** [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## 1. Today's Highlights

Activity in the last 24 hours was minimal: no new releases and no issue updates. The single tracked change is a documentation PR (#1718) that was **closed** after a long-lived branch, introducing a dedicated AGENTS.md page, explicit security-boundary documentation, and an improved home-page navigation structure. The update signals continued investment in onboarding and configuration clarity rather than runtime functionality.

---

## 2. Releases

No new versions were published in the last 24 hours. Nothing to report.

---

## 3. Hot Issues

No Issues were updated in the last 24 hours (total: 0). There is no community discussion or reaction data to summarize for this period.

---

## 4. Key PR Progress

Only one PR appears in the 24-hour window. It is documented below; no further PRs are available to fill a top-10 list.

**#1718 — docs: Added AGENTS.md special page, security boundary description and home page navigation** `[CLOSED]`
- **Author:** liwang614
- **Timeline:** Created 2026-04-02 · Updated 2026-10-10
- **Link:** [MoonshotAI/kimi-cli PR #1718](https://github.com/MoonshotAI/kimi-cli/pull/1718)
- **What it does:**
  - Adds `docs/{zh,en}/customization/agents-md.md`, a dedicated AGENTS.md topic page covering:
    - How AGENTS.md differs from README.md
    - Loading behavior (working directory only; uppercase filename takes precedence)
    - The `/init` generation workflow
    - Recommended content to include and when to update the file
  - Adds a security-boundary description to the documentation set
  - Reworks the home page with a navigation/overview entry point
- **Why it matters:** AGENTS.md has become a de-facto convention for steering agent behavior in repos. Documenting its loading semantics and precedence rules reduces misconfiguration, and pairing it with explicit security boundaries addresses a common source of user uncertainty around what the agent may read or execute. The refreshed home page lowers the cost of discovering these guides.
- **Status note:** The PR is closed; the summary does not state whether it was merged or abandoned. Verify merge state on the PR page before treating the docs as live.

---

## 5. Feature Request Trends

Insufficient data. With zero Issues updated in the reporting window, no reliable feature-direction trends can be distilled. Drawing conclusions from a single documentation PR would be speculative.

---

## 6. Developer Pain Points

Insufficient data. No Issue volume or comment threads were available in the last 24 hours, so recurring frustrations and high-frequency requests cannot be identified for this period.

---

## Analyst Note

The 2026-10-11 window is effectively a quiet period: **0 releases, 0 issues, 1 closed docs PR**. The digest's value this cycle is limited to the AGENTS.md documentation milestone. Trend and pain-point analysis should be deferred until a window with meaningful Issue activity — recommend re-running once at least ~10 updated Issues are present so sections 3, 5, and 6 can be populated with substantive, evidence-based findings rather than filler.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

## OpenCode Community Digest — 2026-10-11

### Today's Highlights
No new releases were published in the last 24 hours. The community is actively discussing critical provider and MCP reliability issues, with several V2 migration regressions (e.g., silently dropped legacy provider blocks, broken HTTPS_PROXY support) drawing significant attention. Pull requests are focused on improving custom provider support, OAuth usability, and core stability (SQLite lock retries, event sequence recovery).

### Releases
*Omitted — no new versions in the last 24 hours.*

### Hot Issues
1. **[#52269](https://github.com/anomalyco/opencode/issues/52269)** – *Intermittent OpenAI Service Unavailable* (12 comments, 2 👍)  
   OpenCode intermittently fails on the OpenAI provider with upstream connection errors. High engagement due to impact on core functionality.

2. **[#47975](https://github.com/anomalyco/opencode/issues/47975)** – *Provider request fails with invalid_request_error* (12 comments, 1 👍)  
   Closed but still discussed: requests through configured providers fail with invalid parameters, indicating broader provider integration issues.

3. **[#36347](https://github.com/anomalyco/opencode/issues/36347)** – *V2: preserve permission and question waits across server restart* (7 comments, 1 👍)  
   Pending permission requests are process-local; restarts destroy suspended continuations. Critical for managed-service reliability.

4. **[#52237](https://github.com/anomalyco/opencode/issues/52237)** – *Remote MCP servers that fail once are never retried* (7 comments)  
   MCP connections remain in `failed` state until service restart, disrupting long-running sessions after sleep/wake.

5. **[#54109](https://github.com/anomalyco/opencode/issues/54109)** – *Custom provider definitions in opencode.json are ignored* (6 comments)  
   Local Ollama provider configuration is completely ignored, breaking documented workflows.

6. **[#54352](https://github.com/anomalyco/opencode/issues/54352)** – *Compressor mints ccr pointers to never-persisted payloads* (5 comments)  
   Large tool results are replaced with opaque pointers that no tool can redeem, causing destructive data loss.

7. **[#54370](https://github.com/anomalyco/opencode/issues/54370)** – *Legacy V1 provider.opencode-go block silently dropped in v2* (5 comments)  
   Upgrading to v2 breaks OpenCode Go credentials because legacy config blocks are ignored, forcing manual removal.

8. **[#42538](https://github.com/anomalyco/opencode/issues/42538)** – *Deleting a session is slow/hangs, leaves ghost sessions* (5 comments)  
   Session removal gets stuck, freezing the desktop app and leaving orphaned sessions.

9. **[#54400](https://github.com/anomalyco/opencode/issues/54400)** – *Agents fall back to bash/powershell for read/write* (4 comments)  
   `read` loses indentation and `edit` requires exact byte matches, pushing agents toward shell workarounds.

10. **[#49879](https://github.com/anomalyco/opencode/issues/49879)** – *[FEATURE]: V2 Plan mode restore V1 persistent session plan file workflow* (4 comments, 1 👍)  
    Users request feature parity for the experimental plan mode workflow from V1.

### Key PR Progress
1. **[#54359](https://github.com/anomalyco/opencode/pull/54359)** – *feat: show a QR code during OAuth login* (OPEN)  
   Improves headless/terminal OAuth by displaying a QR code, avoiding browser dependency.

2. **[#54398](https://github.com/anomalyco/opencode/pull/54398)** – *feat(core): discover context limits for custom OpenAI-compatible providers* (OPEN)  
   Ports V1 capability to V2, allowing custom providers to report accurate context limits.

3. **[#54397](https://github.com/anomalyco/opencode/pull/54397)** – *fix(core): recover stale event sequences in V2* (OPEN)  
   Fixes retained events with stale sequences that could corrupt session state.

4. **[#54396](https://github.com/anomalyco/opencode/pull/54396)** – *fix(core): retry sqlite statements on lock timeout* (OPEN)  
   Handles concurrent database access by retrying statements that hit SQLite busy timeouts.

5. **[#54391](https://github.com/anomalyco/opencode/pull/54391)** – *fix(ui): clamp menu content to available height so long lists scroll* (OPEN)  
   Resolves agent select menu overflow in desktop UI, ensuring long lists scroll instead of clipping.

6. **[#54394](https://github.com/anomalyco/opencode/pull/54394)** – *feat(acp): support _session/steering* (OPEN)  
   Adds interim ACP steering support, enabling external agents to steer sessions.

7. **[#54399](https://github.com/anomalyco/opencode/pull/54399)** – *docs: add Penny to the plugin ecosystem* (OPEN)  
   Lists HelperLabs’ Penny plugin with native OAuth in the community plugin table.

8. **[#54395](https://github.com/anomalyco/opencode/pull/54395)** – *docs(ecosystem): add OpenCode Model Router* (OPEN)  
   Documents the community Model Router plugin (V2 port of #53448).

9. **[#48300](https://github.com/anomalyco/opencode/pull/48300)** – *feat(tui): add minimal and hidden tool call modes* (CLOSED)  
   Adds three display modes for tool calls in Settings → Session, improving TUI readability.

10. **[#48295](https://github.com/anomalyco/opencode/pull/48295)** – *fix(core): preserve configured Cloudflare gateway auth* (CLOSED)  
    Ensures `gatewayApiKey` authentication is retained when resolving Cloudflare AI Gateway providers.

### Feature Request Trends
The most requested feature directions center on **V2 feature parity with V1**: restoring the persistent plan mode workflow ([#49879](https://github.com/anomalyco/opencode/issues/49879)), desktop side sessions like `/btw` ([#33469](https://github.com/anomalyco/opencode/issues/33469)), and UI elements such as the terminal toggle ([#54193](https://github.com/anomalyco/opencode/issues/54193)). **MCP reliability** is another major theme: users want automatic retries for failed remote servers ([#52237](https://github.com/anomalyco/opencode/issues/52237)) and correct handling of environment-based credentials ([#54205](https://github.com/anomalyco/opencode/issues/54205)). **Custom provider support** is frequently requested, including respecting `opencode.json` definitions ([#54109](https://github.com/anomalyco/opencode/issues/54109)) and discovering context limits ([#54398](https://github.com/anomalyco/opencode/pull/54398)). Finally, **session durability and performance** improvements (preserving waits across restarts, faster deletion) appear repeatedly.

### Developer Pain Points
Recurring frustrations include:
- **Provider and MCP connectivity failures**: intermittent OpenAI errors, invalid requests, MCP servers stuck in failed state, and credential resolution issues.
- **V2 migration regressions**: silently dropped legacy provider blocks, broken `HTTPS_PROXY`, missing terminal toggle, and mouse input loss (WSL2/Wezterm).
- **Configuration not being respected**: custom providers ignored, env vars not substituted, and global config cached forever.
- **Performance and UX issues**: slow/hanging session deletion, TUI layout corruption from large MCP results, menu overflow, and ghost sessions.
- **Data loss**: destructive compression of large tool results and lost subagent final outputs.
- **Caching bugs**: plugin/provider loaders serving stale versions even when npm reports updates.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

## Pi Community Digest – 2026-10-11

### Today's Highlights
No new releases were published in the last 24 hours. The community remains highly engaged around Windows support (#7547, 80 comments) and persistent session‑hang bugs (#10031, #5291). Several pull requests target TUI fixes and extension API improvements, while issues around authentication, large diffs, and terminal compatibility continue to drive discussion.

### Releases
*No new releases in the last 24h.*

### Hot Issues
1. **[#7547](https://github.com/earendil-works/pi/issues/7547) – How do you use Pi on Windows?**  
   *80 comments, 2 👍*  
   A central discussion on the many ways Pi can run on Windows, highlighting fragmentation and the need to prioritise bug fixes, docs, and out‑of‑box experience. High community engagement.

2. **[#10031](https://github.com/earendil-works/pi/issues/10031) – Pi sporadically stuck in "Working..." when thinking is stopped with `<esc>`**  
   *28 comments, 3 👍*  
   A long‑standing bug (since ~v0.84.0) that forces users to exit and resume. High impact on daily workflow.

3. **[#5291](https://github.com/earendil-works/pi/issues/5291) – Sessions hang on "working" with Anthropic subscription**  
   *11 comments, 3 👍*  
   Similar hang symptom when using Anthropic Enterprise, often affecting multiple sessions simultaneously. Points to a broader reliability issue.

4. **[#8036](https://github.com/earendil-works/pi/issues/8036) – Edit tool crashes TUI when rendering large diff**  
   *9 comments*  
   A ~14.5 MB diff from HTML files crashes the interactive TUI. Critical for users editing large files.

5. **[#10256](https://github.com/earendil-works/pi/issues/10256) – Terminal color query replies leak into prompt (mintty on Windows)**  
   *9 comments, 3 👍*  
   Regression in 0.99.x where terminal colour queries leak into the prompt and BEL opens the external editor. Affects Windows mintty users.

6. **[#10605](https://github.com/earendil-works/pi/issues/10605) – ChatGPT/OpenAI OAuth 403 issue**  
   *9 comments*  
   Users with OpenAI Plus subscriptions get a 403 “not eligible for subscription sharing” error. Blocks access to OpenAI models.

7. **[#9512](https://github.com/earendil-works/pi/issues/9512) – Compaction hits summary output cap with GPT‑6 Astra at max reasoning**  
   *7 comments, 2 👍*  
   Context‑overflow recovery fails intermittently with `openai/gpt-6-astra` at max reasoning. Affects long‑context workflows.

8. **[#3896](https://github.com/earendil-works/pi/issues/3896) – TUI cursor stays active when terminal window loses focus**  
   *6 comments, 8 👍*  
   High upvote count; users want visual feedback when the terminal is blurred, matching other CLIs.

9. **[#10719](https://github.com/earendil-works/pi/issues/10719) – Bun‑installed pi + Node runtime: every extension fails with `Cannot find module 'jiti'`**  
   *4 comments*  
   Installation mismatch between Bun and Node breaks all extensions. Important for users mixing package managers.

10. **[#10281](https://github.com/earendil-works/pi/issues/10281) – Allow opting into Claude Code’s `.mcp.json`**  
    *3 comments, 2 👍*  
    Request for interoperability with Claude Code’s MCP config. Indicates demand for cross‑tool compatibility.

### Key PR Progress
Only 5 pull requests were updated in the last 24 hours; all are listed below.

1. **[#10782](https://github.com/earendil-works/pi/pull/10782) – feat(coding-agent): add deb and rpm package builds for Linux**  
   Adds native `.deb` and `.rpm` packages to the release pipeline, improving file management and system integration on Linux.

2. **[#10726](https://github.com/earendil-works/pi/pull/10726) – fix: ignore Node watch notifications in codemode**  
   Fixes a crash when running the SDK host with `node --watch`; Node dependency notifications were mistaken for malformed codemode messages.

3. **[#10751](https://github.com/earendil-works/pi/pull/10751) – feat(coding-agent): use pi.dev configuration schemas**  
   Makes pi.dev schema endpoints canonical for generated config schemas and documents schema URLs for models, settings, keybindings, and themes.

4. **[#10774](https://github.com/earendil-works/pi/pull/10774) – fix(tui): enable kitty images in herdr**  
   Restores inline image support in herdr panes, which broke in 1.1.0. Herdr supports the kitty graphics protocol.

5. **[#10766](https://github.com/earendil-works/pi/pull/10766) – feat(coding-agent): extension abort with same-run continuation**  
   Allows extensions to abort an in‑flight request and resume the same run with an injected reminder, preventing stranded follow‑ups.

### Feature Request Trends
- **Better Windows support** – The high‑traffic #7547 shows strong demand for official guidance and out‑of‑box Windows experience.
- **Extension API enhancements** – Requests for durable custom‑message publication (#8023), abort‑and‑resume with injected reminders (#10767), and virtual‑model routing (#10779).
- **Cross‑tool compatibility** – Interest in reading Claude Code’s `.mcp.json` (#10281) and clarifying provider‑specific hooks (#10776).
- **Configuration management** – Moving `deviceId` out of global settings (#10187) and ensuring pinned Git package SHAs update correctly (#10758).
- **Network resilience** – Requests for configurable timeouts and retries in the GitHub Copilot provider (#10775, #10238).
- **Editor/TUI improvements** – Mouse‑selection deletion behaviour (#10777), fullscreen overlay scrolling (#10769), and preserving unfinished tasks after side questions (#10764).

### Developer Pain Points
- **Sessions stuck in "Working..."** – Recurring across different providers (#10031, #5291), often requiring restart.
- **Crashes and hangs with large or unusual inputs** – Large diffs crash the TUI (#8036); headless mode hangs forever on dropped connections (#10762).
- **Terminal compatibility issues** – Colour query leaks on mintty (#10256), cursor focus glitches (#3896), and duplicate cursor markers (#9257).
- **Authentication and provider reliability** – OpenAI OAuth 403 (#10605), GitHub Copilot network failures (#10775), and Anthropic token refresh issues (#10238).
- **Extension loading failures** – Bun/Node mismatch breaks all extensions (#10719); `sendCustomMessage` misses the system prompt on the first request (#10639).
- **Configuration inconsistencies** – Changing a Git package’s pinned SHA does not update the checkout (#10758), and shared dotfiles conflict with device‑specific IDs (#10187).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-10-11

## Today's Highlights
The Qwen Code community is heavily focused on the **managed-agent architecture** and **multi-agent session management**, with issue #12380 drawing 51 comments on a dual-path design proposal. Core tool-call recovery and token-efficiency gating remain critical discussion points, while two new releases (preview and nightly) ship a fix for remote host binding replacement. Developers also report high-priority bugs around Live Voice, Harness restarts, and UI rendering.

## Releases
Two releases were published in the last 24 hours:

- **v0.25.1-preview.2** — [release link](https://github.com/QwenLM/qwen-code/releases/tag/v0.25.1-preview.2)  
  Includes `fix(agents): replace selected remote Hosts without losing bindings` ([#13430](https://github.com/QwenLM/qwen-code/pull/13430)) and `test(core): close #12693 post-merge review`.

- **v0.25.0-nightly.20261010.9763580b84** — [release link](https://github.com/QwenLM/qwen-code/releases/tag/v0.25.0-nightly.20261010.9763580b84)  
  Same core fix and test update as the preview.

No major feature changes; these are stabilization releases.

## Hot Issues
1. **[#12380](https://github.com/QwenLM/qwen-code/issues/12380) — proposal(serve): Define Managed Agent dual-path architecture and staged delivery**  
   *51 comments · P2 · in-progress*  
   Defines a staged architecture that keeps the TypeScript agent loop while giving Sessions durable ownership, workspace bindings, and recoverable tool executions. The high comment count signals active design debate.

2. **[#10797](https://github.com/QwenLM/qwen-code/issues/10797) — [core] Non-thinking scaffolding tags echoed into user-visible output**  
   *10 comments · P2 · in-review*  
   Tool-result blocks and system reminders leak into final output. Reproducible on current main; core correctness issue affecting all users.

3. **[#13492](https://github.com/QwenLM/qwen-code/issues/13492) — XML tool-call recovery drops outer calls containing quoted tool markup**  
   *9 comments · P2 · in-review*  
   Partially fixed, but outer-call recovery remains. PR #13579 is pending. Critical for robust tool-call parsing.

4. **[#12333](https://github.com/QwenLM/qwen-code/issues/12333) — feat(ci): token work has no recall or task-success gate**  
   *9 comments · P2 · blocked*  
   Every token-saving change lacks measurement of its cost in tool recall or task success. Blocks enabling the largest savings; important for performance governance.

5. **[#2596](https://github.com/QwenLM/qwen-code/issues/2596) — Qwen CLI keeps adding `</think>` at the end**  
   *9 comments · P2 · CLOSED · need-retesting*  
   Long-standing user-facing bug; closed but needs retesting. Community interest remains high.

6. **[#13111](https://github.com/QwenLM/qwen-code/issues/13111) — Android Phase 2 follow-up: regression coverage and export UX**  
   *8 comments · P3*  
   Tracks non-blocking follow-ups from Android Phase 2 reviews. Shows ongoing platform distribution effort.

7. **[#13533](https://github.com/QwenLM/qwen-code/issues/13533) — background-process exit observation and capture backpressure for H3 enablement**  
   *7 comments · P2 · need-discussion*  
   Two gating findings for Stage H3 managed-agent domains: observing background processes and bounded capture behavior.

8. **[#10700](https://github.com/QwenLM/qwen-code/issues/10700) — Orphaned tool-call closing tags leak as plain text**  
   *6 comments · P2 · in-review*  
   XML recovery only matches balanced invoke pairs; orphaned closing tags appear as plain text. Reproducible on current main.

9. **[#13709](https://github.com/QwenLM/qwen-code/issues/13709) — [H4b follow-up] Count PostToolUse known-future mounts at child admission**  
   *5 comments · P1 · blocked*  
   High-priority multi-agent bug: mount checks read present state instead of future state, potentially blocking child sessions.

10. **[#13820](https://github.com/QwenLM/qwen-code/issues/13820) — Live Voice stranded in “stopping” forever after hang-up**  
    *4 comments · P1*  
    Daemon restart is the only recovery. Critical real-time feature bug with high user impact.

## Key PR Progress
1. **[#13674](https://github.com/QwenLM/qwen-code/pull/13674) — feat(managed-agent): admit public foreground Shell with mandatory approval**  
   Adds default-off opt-in for authorized public REST/WebShell sessions to use foreground Shell profile with approval mode.

2. **[#13579](https://github.com/QwenLM/qwen-code/pull/13579) — fix(core): recover outer XML calls with quoted call content**  
   Recovers complete outer XML tool calls containing balanced quoted calls, keeping quoted calls inert. Directly addresses #13492.

3. **[#13219](https://github.com/QwenLM/qwen-code/pull/13219) — fix(managed-agent): bound retry loops with terminal states**  
   Gives every async retry loop a budget and terminal state, preventing permanently wedged projections.

4. **[#13777](https://github.com/QwenLM/qwen-code/pull/13777) — feat(managed-agent): recover Hosted G3 parked turns**  
   Implements recovery for parked turns in the Hosted G3 domain, improving resilience.

5. **[#13601](https://github.com/QwenLM/qwen-code/pull/13601) — feat(core): add a convergence reminder for read-only exploration**  
   Adds an advisory reminder when continuous read/search/fetch calls reach the tool-call allowance, prompting the agent to advance the deliverable.

6. **[#13571](https://github.com/QwenLM/qwen-code/pull/13571) — feat(memory): opt-in extraction cadence after a no-op run**  
   Default-off experiment to skip memory extraction turns after a no-op run, reducing overhead.

7. **[#12585](https://github.com/QwenLM/qwen-code/pull/12585) — fix(acp): persist embedded text resources for transcript replay**  
   Persists ACP embedded text resource blocks and replays them as typed user chunks; improves daemon UI SDK.

8. **[#13852](https://github.com/QwenLM/qwen-code/pull/13852) — fix(cli): Make interactive questions answerable from standard ACP hosts**  
   Fixes `ask_user_question` projection so standard ACP clients can answer real per-question choices.

9. **[#13737](https://github.com/QwenLM/qwen-code/pull/13737) — fix(rewind): resolve legacy turns by source identity**  
   Links visible turn, model entry, and recorded boundary through source record, preventing unsafe file restores.

10. **[#13866](https://github.com/QwenLM/qwen-code/pull/13866) — fix(cli): preserve Unicode queries in at completion**  
    Fixes `@` file completion when emoji or supplementary Unicode characters appear earlier in the line. Addresses #13865.

## Feature Request Trends
- **Managed Agent & Multi-Agent Architecture** — Durable sessions, workspace bindings, recoverable tool executions, child task-event streams, and staged delivery dominate issues (#12380, #13533, #13300, #13746, #13709, #13847, #13857, #13868).
- **Token & Context Efficiency** — Dynamic tool output truncation (#2566), token work with recall/task-success gate (#12333), and pressure-aware budgets are recurring asks.
- **Platform Support & Internationalization** — Android Phase 2 follow-ups (#13111), Windows Python SDK shim (#13861), RTL/bidi text rendering (#13837), and Unicode completion (#13865).
- **UI/Rendering Improvements** — OpenTUI dialog overflow (#13758), chat view mixed RTL/LTR (#13837), bottom-align short VP content (#9305), and Live Voice stability (#13820).
- **ACP & SDK Integration** — Standard ACP host compatibility (#13852), embedded resource persistence (#12585), and reconnect transport reliability (#13863).

## Developer Pain Points
- **XML Tool-Call Recovery** — Orphaned tags (#10700), quoted markup (#13492), and performance degradation on large responses (#13787) are frequent and high-impact.
- **Managed-Agent Reliability** — Harness crashes (#13847), restart wedging sessions (#13857), unbounded retry loops (#13219), and background process observation (#13533) cause repeated frustration.
- **UI/UX Bugs** — Dialog bodies escaping regions (#13758), Unicode completion corruption (#13865), and RTL text scrambling (#13837) degrade daily use.
- **Platform-Specific Friction** — Windows Python SDK cannot start npm shim (#13861); Android follow-ups remain open (#13111).
- **Performance Regressions** — Prompt reprocessing on memory write (#11550) and slow XML recovery (#13787) waste time and resources.
- **Strict API Compatibility** — Parameterless tools sent without `parameters` schema break strict OpenAI-compatible backends (#13853).
- **CI Instability** — Main CI failures (#12714) and flaky tests require ongoing attention.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest – 2026-10-11

## Today's Highlights
No new releases. The project closed several high-impact TUI and runtime-split issues, including the Terminal work-dock view (#6912) and two runtime boundary refactors (#6936, #6935). Critical open bugs surfaced around Windows 10 1607 startup failure (#6953) and session resume limits (#6955, #6954). PR activity focused on workflow gate correctness (#6952), plugin OAuth sign-in (#6950), and dead-code cleanup (#6946, #6943).

## Releases
None in the last 24 hours.

## Hot Issues
1. **#6953 [OPEN] Windows 10 1607: v0.10.1 fails to start** – Loader error `DeriveCapabilitySidsFromName` breaks older Windows builds. High severity for legacy users. No comments yet.  
   [codewhale-hq/Codewhale#6953](https://github.com/codewhale-hq/Codewhale/issues/6953)
2. **#6955 [OPEN] Saved session >8 MiB cannot be resumed or forked** – Journal pushes documents over the transport bound; refusal gives no remedy. Impacts large sessions. No comments.  
   [codewhale-hq/Codewhale#6955](https://github.com/codewhale-hq/Codewhale/issues/6955)
3. **#6954 [OPEN] resume refuses sessions with raw sub-agent handoff** – Canonical acknowledgement mismatch blocks resume. Sub-agent workflows affected. No comments.  
   [codewhale-hq/Codewhale#6954](https://github.com/codewhale-hq/Codewhale/issues/6954)
4. **#5836 [OPEN] Cloud dispatch: retire legacy launcher** – Infrastructure modernization to qualify the Computer contract. One comment, no 👍.  
   [codewhale-hq/Codewhale#5836](https://github.com/codewhale-hq/Codewhale/issues/5836)
5. **#5837 [CLOSED] Boat Computer image with codewhale app-server** – Rebuild of Computer image for AWS Lambda microVM. Closed after board direction. One comment.  
   [codewhale-hq/Codewhale#5837](https://github.com/codewhale-hq/Codewhale/issues/5837)
6. **#6912 [CLOSED] TUI: Terminal view in work dock** – Watch and type into model PTY sessions. Major TUI feature landed via PR#6907. No comments.  
   [codewhale-hq/Codewhale#6912](https://github.com/codewhale-hq/Codewhale/issues/6912)
7. **#6936 [CLOSED] Runtime split RS-9: cut terminal-side leaks** – Removes context thresholds, git context, clipboard, notifications from engine. Architectural cleanup. No comments.  
   [codewhale-hq/Codewhale#6936](https://github.com/codewhale-hq/Codewhale/issues/6936)
8. **#6935 [CLOSED] Runtime split RS-8: move auto-review to core::authority** – Relocates risk policy out of TUI. Continues enforced boundary ratchet. No comments.  
   [codewhale-hq/Codewhale#6935](https://github.com/codewhale-hq/Codewhale/issues/6935)
9. **#6902 [CLOSED] Plan mode: restore approve-and-switch hand-off** – Fixes long-standing regression removed in v0.9.1. UX reliability. No comments.  
   [codewhale-hq/Codewhale#6902](https://github.com/codewhale-hq/Codewhale/issues/6902)
10. **#6512 [CLOSED] Goal turns stop at 1,000 steps** – `max_steps = 0` not unlimited; fix aligns goal turns with uncapped ordinary turns. No comments.  
    [codewhale-hq/Codewhale#6512](https://github.com/codewhale-hq/Codewhale/issues/6512)

## Key PR Progress
1. **#6952 [OPEN] fix(workflow): reject a gate that blocks its own role** – Prevents deadlock when a gate's `blocks_role` matches its own `role`.  
   [codewhale-hq/Codewhale#6952](https://github.com/codewhale-hq/Codewhale/pull/6952)
2. **#6943 [OPEN] chore(tui): drop blanket dead_code allow in five modules** – Reveals and removes stale allowances. Part of #5587.  
   [codewhale-hq/Codewhale#6943](https://github.com/codewhale-hq/Codewhale/pull/6943)
3. **#6947 [CLOSED] fix(artifacts): resolve linked state root** – Fixes Windows junction-based state directories so artifact writes and `/compact` work.  
   [codewhale-hq/Codewhale#6947](https://github.com/codewhale-hq/Codewhale/pull/6947)
4. **#6946 [CLOSED] chore: drop 30 dead_code allows** – Another #5587 slice; cleans up no-op allowances.  
   [codewhale-hq/Codewhale#6946](https://github.com/codewhale-hq/Codewhale/pull/6946)
5. **#6948 [CLOSED] fix(tui): name the work that blocks a session switch** – Improves error message by identifying blocking work.  
   [codewhale-hq/Codewhale#6948](https://github.com/codewhale-hq/Codewhale/pull/6948)
6. **#6950 [OPEN] feat(plugins): add CLI installation and in-app OAuth sign-in** – Streamlines plugin install and OAuth provider login.  
   [codewhale-hq/Codewhale#6950](https://github.com/codewhale-hq/Codewhale/pull/6950)
7. **#6949 [OPEN] fix(subagent): re-root state-path check when state root relocated** – Fixes sub-agent step 0 failure for relocated state roots.  
   [codewhale-hq/Codewhale#6949](https://github.com/codewhale-hq/Codewhale/pull/6949)
8. **#6821 [OPEN] build(deps): bump rmcp from 3.4.0 to 3.5.0** – Updates Rust MCP SDK.  
   [codewhale-hq/Codewhale#6821](https://github.com/codewhale-hq/Codewhale/pull/6821)
9. **#6822 [CLOSED] build(deps): bump rio-vt from 0.5.26 to 0.5.28** – Terminal emulator dependency update.  
   [codewhale-hq/Codewhale#6822](https://github.com/codewhale-hq/Codewhale/pull/6822)
10. **#6826 [CLOSED] chore(deps): bump uuid from 1.26.0 to 1.27.0** – UUID library update.  
    [codewhale-hq/Codewhale#6826](https://github.com/codewhale-hq/Codewhale/pull/6826)

## Feature Request Trends
- **Runtime/TUI decoupling** – Multiple issues (#6935, #6936) push for stricter boundaries between engine and TUI crates.
- **TUI enhancements** – Terminal work-dock (#6912) and plan-mode hand-off (#6902) show demand for richer interactive control.
- **Cloud/Computer infrastructure** – Modernizing dispatch (#5836) and rebuilding Computer images (#5837) for new VM targets.
- **Session robustness** – Resume/fork reliability for large documents (#6955) and sub-agent handoffs (#6954).
- **Documentation consistency** – Aligning docs with shipped defaults (#6942).
- **Goal turn limits** – Making `max_steps = 0` truly unlimited (#6512).

## Developer Pain Points
- **Session resume failures** – Size limits and sub-agent handoffs cause cryptic refusals with no remediation (#6955, #6954).
- **Windows compatibility** – Older Windows builds fail to start (#6953); state-path junctions break artifacts and sub-agents (#6947, #6949).
- **Unclear error messages** – “Transport bound” and session-switch refusals lack actionable guidance (#6955, #6948).
- **Workflow gate misconfigurations** – Self-blocking gates deadlock runs (#6952).
- **Dead code accumulation** – Numerous stale `allow(dead_code)` attributes require cleanup (#6943, #6946).
- **Documentation drift** – Website and task cards lag behind shipped behavior (#6942).

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

# ComfyUI Community Digest — 2026-10-11

## 1. Today's Highlights
No new ComfyUI releases landed in the last 24h. The issue tracker is dominated by Windows Application Control/DLL startup blocks, MiniMax H3 audio/VRAM/freeze failures, and Qwen Image 2.1 crashes after recent updates. PR activity centers on Dynamic VRAM/FP8 performance fixes, Qwen 3.x acceleration, asset-system hardening, and core EXR/PyAV fixes.

## 2. Releases
No new releases in the last 24h.

## 3. Hot Issues

- [#15117 [OPEN] WinError 4551 — Windows Application Control blocks PyTorch DLLs](https://github.com/Comfy-Org/ComfyUI/issues/15117) — Startup blocker on Windows; `c10_cuda.dll` and `shm.dll` are blocked. 5 comments, still open. Critical for managed/enterprise Windows systems where ComfyUI cannot launch at all.
- [#15653 [CLOSED] torch.AcceleratorError: CUDA error: invalid argument on 9060xt 16g](https://github.com/Comfy-Org/ComfyUI/issues/15653) — Highest-comment issue in this batch (7). Closed as stale/user support, but still signals AMD 9060 XT / CUDA-compat configuration pain.
- [#15799 [OPEN] MiniMax H3: VAEDecodeAudio returns constant DC/silence](https://github.com/Comfy-Org/ComfyUI/issues/15799) — Video is correct but audio is invalid; reproduced with bf16, `--cpu-vae`, and cu128. 5 comments. Blocks MiniMax H3 audio workflows and templates.
- [#16838 [OPEN] qwen2.1 / minimax h3 etc. is crash](https://github.com/Comfy-Org/ComfyUI/issues/16838) — Reported after a recent update, 4 comments. Important regression signal across new model families; custom-node testing was not fully ruled out.
- [#16911 [CLOSED] Windows 11 26H2 Smart App Control blocks ComfyUI Python runtime DLLs](https://github.com/Comfy-Org/ComfyUI/issues/16911) — Closed, but part of the same Windows security-policy theme as #15117. Affects Comfy Desktop/runtime startup.
- [#16551 [OPEN] Dynamic VRAM prevents native FP8 compute for `fp8_e4m3fn_fast`](https://github.com/Comfy-Org/ComfyUI/issues/16551) — Measured 1.07 vs 1.72 it/s on Flux dev / RTX 5070 Ti. High-impact perf regression; fix PR #16941 is already open.
- [#15663 [OPEN] MiniMax H3: VRAM budget underestimated for short clips](https://github.com/Comfy-Org/ComfyUI/issues/15663) — OOM persists for the exact graph across restarts, but not when the workflow is slightly changed. Exposes memory-estimator fragility in core H3 workflows.
- [#16946 [OPEN] Windows RTX 3060 12GB — MiniMax-H3 repeatedly freezes entire PC](https://github.com/Comfy-Org/ComfyUI/issues/16946) — No handled Python/CUDA OOM traceback; NVFP4 encoder/offload log ends abruptly. Zero comments at snapshot, but severity is high: full-system freeze, not just an app crash.
- [#15993 [CLOSED] Windows ROCm multi-GPU DynamicVRAM retained `ModelVBAR` reservation](https://github.com/Comfy-Org/ComfyUI/issues/15993) — ~38 GB private-memory plateau after full unload; 1 comment, 1 👍. Important DynamicVRAM cleanup bug on ROCm multi-GPU.
- [#16947 [OPEN] Qwen Image 2.1: RuntimeError “Boolean value of Tensor with more than one value is ambiguous” in `select()`](https://github.com/Comfy-Org/ComfyUI/issues/16947) — New crash in `model_animate2.py` on repeated generations. Matters because Qwen Image 2.1 is active and this is a core code path.

## 4. Key PR Progress

- [#16949 [CLOSED] Fix issues with loading half float files with pyav](https://github.com/Comfy-Org/ComfyUI/pull/16949) — Core fix by comfyanonymous for half-float media loading via PyAV; important for video/audio pipelines.
- [#16948 [CLOSED] Enable compression on saved EXR](https://github.com/Comfy-Org/ComfyUI/pull/16948) — Core output change; reduces EXR file sizes for compositing/VFX workflows.
- [#16941 [OPEN] Fix fp8_e4m3fn_fast falling back to bf16 compute with dynamic VRAM](https://github.com/Comfy-Org/ComfyUI/pull/16941) — Direct fix for #16551; restores the native FP8 matmul path and expected Flux throughput.
- [#16940 [OPEN] Performance improvements for qwen 3.x (Part 1)](https://github.com/Comfy-Org/ComfyUI/pull/16940) — First in a major series; INT8 GEMV fusion, streaming, and other accelerations for Qwen 3.x LLMs.
- [#16943 [OPEN] Renew partner-node sign-in tokens in API nodes](https://github.com/Comfy-Org/ComfyUI/pull/16943) — Fixes 90-minute token expiry causing `Unauthorized` after queued/long provider jobs, sometimes after the job was charged (BE-998).
- [#16942 [OPEN] feat(assets): serve every preview by id, with byte ranges for video](https://github.com/Comfy-Org/ComfyUI/pull/16942) — Unifies preview URL forms and adds video seeking via byte ranges; part of the asset-system rollout.
- [#16931 [OPEN] fix(assets): start without assets when the database is from a newer ComfyUI](https://github.com/Comfy-Org/ComfyUI/pull/16931) — Forward-compatibility fix: no longer refuses to start on a newer DB migration revision; logs a warning instead.
- [#16936 [OPEN] Catalogue models before the other roots in the startup asset scan](https://github.com/Comfy-Org/ComfyUI/pull/16936) — Ensures the model library populates earlier; important for users with large or slow input folders.
- [#16935 [OPEN] feat(server): make /view responses revalidate with ETags](https://github.com/Comfy-Org/ComfyUI/pull/16935) — Adds `Cache-Control: no-cache` and validators; avoids cache-busting and enables 304s for unchanged files.
- [#16805 [OPEN] Refactor 3D model remeshing (CORE-560)](https://github.com/Comfy-Org/ComfyUI/pull/16805) — Kijai’s remesh refactor with a CelloCut-style global inside/outside graph cut; important for the 3D asset pipeline.

## 5. Feature Request Trends

- **Memory orchestration is the #1 direction**: persistent model RAM cache, coordinated VRAM/RAM swapping with async prefetching ([#16939](https://github.com/Comfy-Org/ComfyUI/issues/16939)), mixed-workflow warmup retention on unified memory ([#14519](https://github.com/Comfy-Org/ComfyUI/issues/14519)), better VRAM estimation ([#15663](https://github.com/Comfy-Org/ComfyUI/issues/15663)), and DynamicVRAM cleanup ([#15993](https://github.com/Comfy-Org/ComfyUI/issues/15993), [#16551](https://github.com/Comfy-Org/ComfyUI/issues/16551)).
- **New model support and compatibility**: MiniMax H3 audio ([#15799](https://github.com/Comfy-Org/ComfyUI/issues/15799)), Mac M3 Max ([#15967](https://github.com/Comfy-Org/ComfyUI/issues/15967)), Trellis2 ([#16028](https://github.com/Comfy-Org/ComfyUI/issues/16028)), Qwen Image 2.1 LoRA layout ([#16944](https://github.com/Comfy-Org/ComfyUI/issues/16944)), Anima hooks ([#16924](https://github.com/Comfy-Org/ComfyUI/issues/16924)), and Ernie-image fp16 Turing hack ([#13413](https://github.com/Comfy-Org/ComfyUI/issues/13413)).
- **Windows startup/security compatibility**: App Control / Smart App Control blocking DLLs ([#15117](https://github.com/Comfy-Org/ComfyUI/issues/15117), [#16911](https://github.com/Comfy-Org/ComfyUI/issues/16911)).
- **Output/metadata controls**: option to disable prompt embedding in Save Video/Image nodes ([#16932](https://github.com/Comfy-Org/ComfyUI/issues/16932)).
- **Observability/attribution**: `progress_text` execution frame not reachable by `workflow_metadata` ([#16887](https://github.com/Comfy-Org/ComfyUI/issues/16887)).
- **Stability**: full-PC freezes ([#16946](https://github.com/Comfy-Org/ComfyUI/issues/16946)) and KSampler failures ([#16925](https://github.com/Comfy-Org/ComfyUI/issues/16925)).

## 6. Developer Pain Points

- **Windows security policies increasingly break startup**: Application Control and Smart App Control block PyTorch/ComfyUI DLLs, leaving managed Windows users with no easy workaround ([#15117](https://github.com/Comfy-Org/ComfyUI/issues/15117), [#16911](https://github.com/Comfy-Org/ComfyUI/issues/16911)).
- **Dynamic VRAM is powerful but opaque**: retention, OOM, freezes, and perf regressions appear across ROCm, unified memory, and NVIDIA systems ([#15993](https://github.com/Comfy-Org/ComfyUI/issues/15993), [#16551](https://github.com/Comfy-Org/ComfyUI/issues/16551), [#16946](https://github.com/Comfy-Org/ComfyUI/issues/16946)).
- **New model integration churn**: MiniMax H3, Qwen Image 2.1, Anima, and Trellis2 frequently crash or have audio/VRAM issues after updates ([#15799](https://github.com/Comfy-Org/ComfyUI/issues/15799), [#16838](https://github.com/Comfy-Org/ComfyUI/issues/16838), [#16947](https://github.com/Comfy-Org/ComfyUI/issues/16947)).
- **Quantization and hook patching are fragile**: FP8 fallback and `patch_hooks()` on quantized models cause crashes or performance loss ([#16206](https://github.com/Comfy-Org/ComfyUI/pull/16206), [#16551](https://github.com/Comfy-Org/ComfyUI/issues/16551)).
- **LoRA/checkpoint layout mismatches silently skip keys**, leading to hard-to-debug quality regressions ([#16944](https://github.com/Comfy-Org/ComfyUI/issues/16944)).
- **API-node token expiry** can cause `Unauthorized` errors after long provider jobs, sometimes after billing has already occurred ([#16943](https://github.com/Comfy-Org/ComfyUI/pull/16943)).
- **Observability gaps**: some execution frames (`progress_text`) remain unattributable, complicating debugging ([#16887](https://github.com/Comfy-Org/ComfyUI/issues/16887)).
- **Platform gaps remain** for AMD ROCm, Mac/MPS, and older Turing cards ([#15653](https://github.com/Comfy-Org/ComfyUI/issues/15653), [#15967](https://github.com/Comfy-Org/ComfyUI/issues/15967), [#13413](https://github.com/Comfy-Org/ComfyUI/issues/13413)).

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Community Digest — 2026-10-11

## 1. Today's Highlights

No new releases landed in the last 24 hours, but community activity is heavily concentrated on **tool-calling reliability and streaming correctness** — several PRs target parser edge cases (Qwen3.5, Cogito, Olmo3) that silently corrupt or drop tool calls. On the issue tracker, a long-running Qwen 3.8 streaming failure (#17778, 50 comments / 30 👍) remains the hottest thread, while a fresh wave of model-loading and CUDA/GPU-detection bugs (#18924, #18916, #18712, #17380) points to growing friction as the runtime matures across new model architectures and platforms.

## 2. Releases

None in the last 24 hours. (Issues and PRs reference the current stable line as **v0.40.2**.)

## 3. Hot Issues

1. **[#17778](https://github.com/ollama/ollama/issues/17778)** — `qwen 3.8` streaming returns `no user query found in messages` (HTTP 500) with a 205K context during tool loops. Highest-engagement issue (50 comments, 30 👍); points to message-history handling under large contexts + agentic loops.
2. **[#18796](https://github.com/ollama/ollama/issues/18796)** — Second `ollama run` hangs with no output on Raspberry Pi 5 / Debian 13. Suggests a server lifecycle or session re-entry regression on ARM.
3. **[#14601](https://github.com/ollama/ollama/issues/14601)** — Qwen3 tool calling via the `/api/chat` `tools` parameter produces malformed tool definitions (and a thinking-mode soft-switch bug). Works when tools are inlined in the system prompt — a key inconsistency for API consumers.
4. **[#18830](https://github.com/ollama/ollama/issues/18830)** — After the local compat GGUF migration, `ollama list` / `/api/tags` show a duplicate model plus a bogus `llamacpp:<sha>` tag. Affects model inventory hygiene post-migration.
5. **[#17380](https://github.com/ollama/ollama/issues/17380)** — Intermittent `CUDA error: shared object initialization failed` at warmup, silently falling back from `CUDA_Host` to CPU pinned buffers (Windows, RTX 5070 Ti, gpt-oss:20b). Silent perf degradation is the real danger.
6. **[#18916](https://github.com/ollama/ollama/issues/18916)** — Qwen3.5 4B returns thinking-only responses on long conversations (HTTP 200, `done:true`, but only `message.thinking`). Fresh, same-day report on 0.40.2.
7. **[#18712](https://github.com/ollama/ollama/issues/18712)** — Windows auto-update can leave `cuda_v12\ggml-cuda.dll` as `.tmp`, causing 0 B VRAM detection and CPU fallback. Update-path integrity issue.
8. **[#18924](https://github.com/ollama/ollama/issues/18924)** — `ollama run rnj-1` fails with `GGML_ASSERT(hparams.is_swa_any())`; regression introduced after ~0.3x. Sliding-window-attention handling in newer llama.cpp integration.
9. **[#18921](https://github.com/ollama/ollama/issues/18921)** — Windows: `ollama list` returns empty when the model location is an NTFS mount-point path (v0.40.2). Models appear "lost" despite being present on disk.
10. **[#1599](https://github.com/ollama/ollama/issues/1599)** — Closed after nearly three years: deleting partially downloaded models. Long-standing 118 GB blob-cleanup pain; 13 👍 reflects sustained demand.

*Also worth watching:* [#18898](https://github.com/ollama/ollama/issues/18898) (Gemma4:12b `ctx_other` error), [#18858](https://github.com/ollama/ollama/issues/18858) (Clef-flash load failure), [#18922](https://github.com/ollama/ollama/issues/18922) (KailA architecture request).

## 4. Key PR Progress

1. **[#18917](https://github.com/ollama/ollama/pull/18917)** — `llama: update llama.cpp to b11521` for decision models and EmbeddingGemma 2. Core runtime sync; enables new model support.
2. **[#18911](https://github.com/ollama/ollama/pull/18911)** — OpenAI-compatible endpoint now accepts `custom_tool_call` / `custom_tool_call_output` in Responses history instead of returning HTTP 400. Directly unblocks multi-turn custom-tool workflows.
3. **[#18872](https://github.com/ollama/ollama/pull/18872)** — Flush the Qwen3.5 tool parser on an empty final chunk. Fixes dropped trailing tool calls at end-of-stream.
4. **[#18759](https://github.com/ollama/ollama/pull/18759)** — Preserve partial Cogito tool-call tags across chunk boundaries, preventing valid tool calls from being emitted as raw text.
5. **[#18913](https://github.com/ollama/ollama/pull/18913)** — Accept assistant tool calls with empty `function.arguments` on `/v1/chat/completions`. Common with replayed OpenAI histories.
6. **[#18914](https://github.com/ollama/ollama/pull/18914)** — Align `/v1/completions` streaming wire format with OpenAI (`created` stability, chunk shape). Improves SDK compatibility.
7. **[#18915](https://github.com/ollama/ollama/pull/18915)** — Omit default `:latest` tag from `DisplayShortest()`, so `ollama list`, `/api/tags`, `/v1/models`, and `ollama ps` show cleaner names.
8. **[#18923](https://github.com/ollama/ollama/pull/18923)** — Fall back to the native GGML device probe when `llama-server --list-devices` returns no parseable output (fixes #18704).
9. **[#18920](https://github.com/ollama/ollama/pull/18920)** — `ollama launch pi` now emits Pi's `thinkingLevelMap`, so advertised reasoning levels (e.g. `max`) are actually selectable.
10. **[#18918](https://github.com/ollama/ollama/pull/18918)** — Stop injecting `/nothink` and empty `<think></think>` in the glm-ocr renderer when thinking is off; restores table recognition.

*Also:* [#18906](https://github.com/ollama/ollama/pull/18906) (Olmo3 Unicode corruption in tool args), [#18919](https://github.com/ollama/ollama/pull/18919) (AtAt integration), [#18912](https://github.com/ollama/ollama/pull/18912) (Vessel proxy), [#18828](https://github.com/ollama/ollama/pull/18828) (docs restructuring).

## 5. Feature Request Trends

- **Broader architecture support** — KailA (`kail`) GGUFs fail at loader architecture resolution (#18922); the community wants the compat layer to track upstream llama.cpp architectures faster.
- **Cleaner model lifecycle management** — Requests cluster around partial-download deletion (#1599), duplicate/invalid tags after migration (#18830), and hiding the noisy default `:latest` tag (#18915).
- **First-class OpenAI API parity** — Multiple PRs (#18911, #18913, #18914) show demand for exact `/v1` wire-format fidelity, including custom tool calls and empty-argument tool replays.
- **Reasoning/thinking control surface** — Requests for explicit control over thinking levels and their propagation through launch configs (#18920, #18918), tied to Qwen3/Qwen3.5 behavior.

## 6. Developer Pain Points

- **Tool-calling fragility dominates.** Issues #17778, #14601 and PRs #18872, #18759, #18913 all describe tool calls being malformed, dropped, or emitted as plain text — especially across streaming chunk boundaries and via the `tools` API parameter. This is the single most recurring source of developer frustration.
- **Silent GPU fallback to CPU.** #17380 and #18712 both result in the model silently running on CPU (or reporting 0 B VRAM), producing large performance regressions without an obvious error. Update-path corruption of CUDA DLLs amplifies this.
- **Model-loading regressions on newer architectures.** #18924 (`is_swa_any` assert), #18898 (`ctx_other`), #18858 (Clef-flash) indicate the runtime struggles with recently added model families and sliding-window attention configs.
- **Platform-specific breakage.** Windows remains a hotspot: NTFS mount-point paths hide models (#18921), auto-updates corrupt CUDA backends (#18712), while ARM/Raspberry Pi users hit session hangs (#18796).
- **Long-context + reasoning models behave inconsistently.** #17778 (205K ctx) and #18916 (thinking-only output on long conversations) suggest context and thinking-state handling degrades as conversation length grows.
- **Model store hygiene.** Nearly three years of demand around partial-download cleanup (#1599) and post-migration duplicate entries (#18830) reflects a persistent gap in local model management ergonomics.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

## llama.cpp Community Digest — 2026-10-11

### Today's Highlights
A critical server fix landed in **b11552**, preventing prompt-cache corruption when a request pins a busy slot. Multimodal support expanded with **MiniCPM-V 4.7** (**b11551**), while backend optimizations continued for SYCL MXFP4 MoE (**b11540**) and OpenCL MoE bin kernels (**b11541**). Community attention remains focused on MTP/speculative decoding failures and backend-specific regressions.

### Releases
- **b11552** — `server: leave a busy slot untouched when a request pins it` ([#30295](https://github.com/ggml-org/llama.cpp/pull/30295)) · [Release](https://github.com/ggml-org/llama.cpp/releases/tag/b11552)  
  Fixes prompt cache updates on busy slots, preventing generation corruption under concurrent load.
- **b11551** — `model: support MiniCPM-V 4.7` ([#29416](https://github.com/ggml-org/llama.cpp/pull/29416)) · [Release](https://github.com/ggml-org/llama.cpp/releases/tag/b11551)  
  Adds multimodal support with 3D RoPE.
- **b11550** — `cmake(s390x): disable z17 target for unsupported compilers` ([#30297](https://github.com/ggml-org/llama.cpp/pull/30297)) · [Release](https://github.com/ggml-org/llama.cpp/releases/tag/b11550)  
  Build compatibility fix.
- **b11541** — `opencl: add bin kernels kernel_gemm_moe_q4_k_q8_1_dp4a_bin, kernel_gemm_moe_q6_k_q8_1_dp4a_bin` ([#30187](https://github.com/ggml-org/llama.cpp/pull/30187)) · [Release](https://github.com/ggml-org/llama.cpp/releases/tag/b11541)  
  OpenCL MoE optimization.
- **b11540** — `sycl: accelerate MXFP4 MoE with arithmetic decoding and weight reordering` ([#29809](https://github.com/ggml-org/llama.cpp/pull/29809)) · [Release](https://github.com/ggml-org/llama.cpp/releases/tag/b11540)  
  SYCL performance improvement.
- **b11539** — `vendor: apply deep nested json patch from upstream` ([#30253](https://github.com/ggml-org/llama.cpp/pull/30253)) · [Release](https://github.com/ggml-org/llama.cpp/releases/tag/b11539)  
  Dependency update.

### Hot Issues
1. **[#9291](https://github.com/ggml-org/llama.cpp/issues/9291) [OPEN] changelog: `llama-server` REST API** — 21 comments, 20 👍. Critical for API consumers; actively maintained changelog.
2. **[#29811](https://github.com/ggml-org/llama.cpp/issues/29811) [OPEN] Eval bug: Assert at startup when running Qwen 3.8 flash with MTP** — 20 comments. Blocks MTP usage; high engagement.
3. **[#20515](https://github.com/ggml-org/llama.cpp/issues/20515) [CLOSED, stale] AMD Vulkan `vk::DeviceLostError` crash** — 19 comments, 5 👍. Backend stability; closed stale but still referenced.
4. **[#9289](https://github.com/ggml-org/llama.cpp/issues/9289) [OPEN] changelog: `libllama` API** — 14 comments, 9 👍. Library API documentation.
5. **[#23210](https://github.com/ggml-org/llama.cpp/issues/23210) [CLOSED, stale] llama-server crashes on CUDA with Qwen3.6-27B** — 14 comments, 5 👍. CUDA regression.
6. **[#29022](https://github.com/ggml-org/llama.cpp/issues/29022) [OPEN] Feature Request: Fast Tool Gating & Single-Pass Selection via Prefill Logit Slicing** — 12 comments, 3 👍. Tool-calling efficiency.
7. **[#24795](https://github.com/ggml-org/llama.cpp/issues/24795) [CLOSED, stale] gemma4-assistant MTP draft model fails to load** — 12 comments, 12 👍. Speculative decoding regression.
8. **[#30091](https://github.com/ggml-org/llama.cpp/issues/30091) [OPEN] llama-server crashes due to "bad allocation" during long conversations** — 9 comments, 1 👍. Memory management.
9. **[#29419](https://github.com/ggml-org/llama.cpp/issues/29419) [OPEN] [speculative/mtp] Flash-Attention crash in gemma4-assistant** — 8 comments. MTP/FA issue.
10. **[#30039](https://github.com/ggml-org/llama.cpp/issues/30039) [OPEN] Vulkan: ~45% prompt processing regression on RDNA1** — 5 comments. Performance regression.

### Key PR Progress
1. **[#30311](https://github.com/ggml-org/llama.cpp/pull/30311) [OPEN] llama: guard recurrent state rollbacks against latest ubatch snapshots** — Prevents invalid rollbacks in testing.
2. **[#30310](https://github.com/ggml-org/llama.cpp/pull/30310) [OPEN] opencl: fix image limit for q4_k dense bin kernels, q4_0 bcast and rms_norm** — Fixes crashes for large weights.
3. **[#30295](https://github.com/ggml-org/llama.cpp/pull/30295) [CLOSED] server: leave a busy slot untouched when a request pins it** — Merged as b11552.
4. **[#30283](https://github.com/ggml-org/llama.cpp/pull/30283) [OPEN] vulkan: clamp A prefetch to end_k in coopmat1 int8 matmul** — Fixes [#29342](https://github.com/ggml-org/llama.cpp/issues/29342).
5. **[#30266](https://github.com/ggml-org/llama.cpp/pull/30266) [OPEN] opencl: improve fa, allow dk512 for gemma-4, improve dk64** — Enables FA for gemma-4; improves gpt-oss-20b.
6. **[#30306](https://github.com/ggml-org/llama.cpp/pull/30306) [OPEN] dory support for llama.cpp** — Adds NVIDIA Dory1.0-4B latent-recurrent model.
7. **[#30279](https://github.com/ggml-org/llama.cpp/pull/30279) [OPEN] Fail test backend ops on missing or unsupported types** — Improves test reliability.
8. **[#15550](https://github.com/ggml-org/llama.cpp/pull/15550) [OPEN] quantize: add option to automatically choose optimal quant types to reach file/bpw target** — Long-standing quantization feature.
9. **[#26771](https://github.com/ggml-org/llama.cpp/pull/26771) [OPEN] CUDA: Recapture graph after memory pool flush** — Fixes stale pointer page fault.
10. **[#30198](https://github.com/ggml-org/llama.cpp/pull/30198) [OPEN] models: remove redundant `ggml_cont` calls now supported by CUDA unary kernels** — Code cleanup.

### Feature Request Trends
- **API changelog/documentation** for `llama-server` and `libllama` to aid third-party integrations.
- **Tool/function calling improvements**: fast tool gating, grammar trigger performance, `tool_choice` enforcement.
- **Speculative decoding/MTP enhancements and stability**: logprobs support, draft model fixes, VRAM leak fixes.
- **WebUI enhancements**: editing LLM responses, KV cache manipulation.
- **New model architecture support**: Apertus, GigaChat 3.5, Prism Bonsai 2, Dory, MiniCPM-V 4.7.
- **Quantization tooling**: target size/bpw optimization.
- **Backend-specific performance and regression fixes** (Vulkan, HIP, SYCL, OpenCL, CUDA).
- **Multimodal input handling**: data URL support for video/images.

### Developer Pain Points
- **Recurrent backend regressions** (Vulkan, HIP, CUDA, Metal, SYCL) causing crashes, corruption, and performance drops.
- **Memory management issues**: VRAM leaks, OOM, bad allocation, high build RAM usage.
- **Many bugs closed as stale** without resolution, frustrating reporters.
- **Speculative decoding/MTP instability**: asserts, draft model load failures, FA crashes.
- **Server concurrency/cache bugs**: prompt cache restoring unrelated content, busy slot interference.
- **Build system issues**: high RAM usage, unsupported compiler targets.
- **Documentation churn** for API changes.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*