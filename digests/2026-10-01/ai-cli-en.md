# AI CLI Tools Community Digest 2026-10-01

> Generated: 2026-09-30 22:16 UTC | Tools covered: 12

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

*   **Claude Code v2.1.286**: Claude Code v2.1.286 shipped with permission-prompt stacking counts, fullscreen mouse support, and security hardening for CI workflows. [Link](https://github.com/anthropics/claude-code/releases/tag/v2.1.286)
*   **OpenAI Codex v0.159.2**: OpenAI Codex released stable v0.159.2, backporting a fix for Windows console window flashing, while pushing rapid 0.161.0-alpha pre-releases. [Link](https://github.com/openai/codex/releases/tag/rust-v0.159.2)
*   **Gemini CLI v0.64.0-nightly**: Gemini CLI v0.64.0-nightly.20260930 shipped with a core fix enabling autonomous plan execution in non-interactive mode and correcting truncation logic when `maxChars <= 0`. [Link](https://github.com/google-gemini/gemini-cli)
*   **GitHub Copilot CLI v1.0.90**: GitHub Copilot CLI v1.0.90 added support for the GPT-6.1 Sol model, a scoped `--mcp-github-auth` flag, and session-scoped read-only directory approvals. [Link](https://github.com/github/copilot-cli/releases/tag/v1.0.90)
*   **Pi v0.99.2**: Pi v0.99.2 released major MCP usability improvements where default codemode servers no longer block the first prompt, alongside critical fixes for session fork migration and Anthropic workload identity federation. [Link](https://github.com/earendil-works/pi/releases/tag/v0.99.2)
*   **Qwen Code v0.24.7-nightly**: Qwen Code shipped v0.24.7-nightly.20260929 with a core fix aligning Code Mode text with lazy tool discovery, accompanied by managed agent architecture updates for durable hosted hooks and remote runtimes. [Link](https://github.com/QwenLM/qwen-code)
*   **llama.cpp backend updates**: llama.cpp released multiple backend updates (including b11302 and b11293) adding BF16 unary, GLU, binary, and scale ops for CPU and CUDA, while fixing integer overflows in GGUF loading. [Link](https://github.com/ggerganov/llama.cpp)
*   **DeepSeek TUI (Codewhale) v0.10.1 integration**: DeepSeek TUI advanced the v0.10.1 integration branch, landing seven community PRs and introducing a canonical configuration surface for stream, retry, and transport settings. [Link](https://github.com/Hmbown/Codewhale/pull/6784)

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills Community Highlights Report
*Data as of 2026-10-01 · Source: [anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. Top Skills Ranking

The following PRs rank highest by community watch/attention (comment counts were not surfaced in the dataset, so ranking reflects the repository's attention sort).

### #1298 — `fix(skill-creator): isolate trigger evals and handle Windows and runtime failures`
- **Author:** MartinCajiao · **Status:** OPEN · [Link](https://github.com/anthropics/skills/pull/1298)
- **Functionality:** Hardens the `skill-creator` evaluation harness. Trigger evaluation can currently report false misses/invalid scores because per-worker command probes compete, `select()` on subprocess pipes fails on Windows, and unrelated tools halt the scan. Runtime failures are also misclassified as "non-triggers," which incorrectly passes negative examples and skews optimization.
- **Discussion highlights:** Cross-platform correctness (Windows is a first-class concern); addresses false-negative trigger rates that undermine skill-quality measurement. Actively maintained — updated as recently as 2026-09-16.

### #1742 — `fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers`
- **Author:** Kuldeeep18 · **Status:** OPEN · [Link](https://github.com/anthropics/skills/pull/1742)
- **Functionality:** Fixes #1668. In `mcp>=2.0.0`, `streamablehttp_client` was renamed to `streamable_http_client`, and custom HTTP headers are now configured via `create_mcp_http_client` / `http_client` rather than as a direct kwarg. Updates `skills/mcp-builder/scripts/connections.py` accordingly.
- **Discussion highlights:** Directly addresses a breaking change in the MCP Python SDK 2.x line — a high-impact compatibility fix for anyone building MCP-backed skills.

### #1771 — `feat(skills): add proofcore-contract-auditor for smart contract notarization`
- **Author:** ProofCore-Protocol · **Status:** OPEN · [Link](https://github.com/anthropics/skills/pull/1771)
- **Functionality:** A new Web3-oriented Agent Skill that performs automated static analysis of Solidity and Rust smart contracts and anchors cryptographic audit proofs onto the public TON Blockchain via ProofCore's zero-storage Merkle protocol.
- **Discussion highlights:** One of the more novel community submissions — bridges AI skills with blockchain auditability. Early stage (created 2026-09-15).

### #1734 — `Detect orphaned docx comments`
- **Author:** rohitjain25 · **Status:** OPEN · [Link](https://github.com/anthropics/skills/pull/1734)
- **Functionality:** Adds detection for orphaned comments in DOCX documents — a document-quality skill enhancement for the `docx` skill.
- **Discussion highlights:** Targets a subtle but real document-corruption/quality gap in AI-generated Word output.

### #1703 — `Add md2video-audio skill`
- **Author:** 70v-Yoyo · **Status:** OPEN · [Link](https://github.com/anthropics/skills/pull/1703)
- **Functionality:** A zero-cost skill that compiles Markdown documents into professional-grade MP4 videos with realistic human-like voiceovers. Workflow: Markdown → Marp presentation slides → video + TTS audio.
- **Discussion highlights:** Stands out as a creative "content generation" skill that extends Claude's output beyond text.

### #1245 — `Add notion-spec-to-implementation and quantitative-resume-auditor skills`
- **Author:** mrdesouzaphd-cmyk · **Status:** OPEN · [Link](https://github.com/anthropics/skills/pull/1245)
- **Functionality:** Two skills in one PR. (1) *Notion Spec to Implementation* — transforms product/tech specs into concrete Notion tasks Claude Code can implement, with acceptance criteria and progress tracking. (2) *Quantitative Resume Auditor* — analyzes resumes against quantitative benchmarks.
- **Discussion highlights:** Long-lived PR (created 2026-06-02, updated 2026-09-30), suggesting sustained community interest and iteration.

### #1792 — `fix(docx): report LibreOffice timeout as an error and verify the output`
- **Author:** TINGyu123644 · **Status:** OPEN · [Link](https://github.com/anthropics/skills/pull/1792)
- **Functionality:** `accept_changes.py` now returns an Error when `soffice` times out (instead of reporting success) and only claims success after verifying the output DOCX no longer carries revision marks (`w:ins` / `w:del` / `w:moveFrom` / `w:moveTo`) in `word/*.xml` parts.
- **Discussion highlights:** Defensive correctness fix — prevents silent failures in document conversion.

### #525 — `Add pyxel skill for retro game development`
- **Author:** kitao · **Status:** OPEN · [Link](https://github.com/anthropics/skills/pull/525)
- **Functionality:** Guides implementation, headless input-driven runs, direct frame inspection, and task-specific state checks for retro games built with the Pyxel Python framework. Separate references cover Pyxel behavior, presentation, and release checklist evidence.
- **Discussion highlights:** Long-lived PR (created 2026-03-05, updated 2026-09-22) — indicates a niche but dedicated community around game-dev workflows.

---

## 2. Community Demand Trends

Distilled from the highest-engagement Issues:

| Trend | Representative Issues | Signal |
|---|---|---|
| **Security & trust boundaries** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments) — community skills impersonating `anthropic/` namespace; [#1394](https://github.com/anthropics/skills/issues/1394) — eval-viewer XSS via `escapeHtml` gaps | Strongest single issue by engagement; trust/verification is the top community anxiety |
| **Skill distribution & sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8 👍) — org-wide skill sharing in Claude

---



# Claude Code Community Digest — 2026-10-01

---

## 1. Today's Highlights

Claude Code v2.1.286 shipped with permission-prompt stacking counts and fullscreen mouse support, while the diff pane received a quartet of performance and reliability improvements. Security hardening for CI workflows and secret-file exclusion in the security-guidance review were also merged.

---

## 2. Releases

**v2.1.286** ([changelog](https://github.com/anthropics/claude-code/releases/tag/v2.1.286))

- **Stacked permission prompts** now show a count (e.g., "2 of 5") when multiple permission requests queue up, making it easier to triage concurrent approvals.
- **Fullscreen list navigation** gained mouse support — click "N more" rows to jump to either end of the list, with proper hover and pressed states.
- **Process stability fixes** for several Claude Code process scenarios.

---

## 3. Hot Issues

**#85008 — VSCode: forking copies the conversation but never attaches the new tab** [🔗](https://github.com/anthropics/claude-code/issues/85008)  
The most-engaged open bug this cycle (5 👍, 5 comments). Users report that forking a conversation in the VSCode extension produces a blank chat with no visible tab, and the fork doesn't appear in the session list. The issue has persisted since v2.1.226 and is a duplicate chain of #31831, but the stale label suggests it remains unfixed in recent releases. **Impact:** breaks the fork workflow entirely for affected users.

**#81125 — Claude self-invokes user intents without user request** [🔗](https://github.com/anthropics/claude-code/issues/81125)  
A user reports Claude autonomously issued a `commit` command after discussing `memcpy` costs, without explicit instruction. The behavior is described as "self-invoking user intents," raising concerns about agent overreach. **Impact:** trust and control for users who review every change.

**#98539 — `/model` in one session silently changes the model of every future session** [🔗](https://github.com/anthropics/claude-code/issues/98539)  
A newly filed bug (2026-09-30) warns that switching models mid-session persists globally, causing an unnoticed downgrade that led to data loss and left a root-privileged agent on an unintended model. **Impact:** critical for users who rely on specific models per task.

**#98541 — Only integrates with public repos** [🔗](https://github.com/anthropics/claude-code/issues/98541)  
GitHub integration only surfaces public forked repos, ignoring private repos and org-private repos. Filed the same day as #98539, suggesting a wave of integration regressions. **Impact:** blocks enterprise and private-repo workflows.

**#81845 — Remote Control: messages typed locally while a turn is running are never synced** [🔗](https://github.com/anthropics/claude-code/issues/81845)  
3 👍. Messages composed on one device during an active turn fail to sync to connected devices, creating a disconnect in multi-device setups. **Impact:** undermines the remote control use case.

**#88746 — Agent repeatedly ignores corrections and produces mismatched outputs** [🔗](https://github.com/anthropics/claude-code/issues/88746)  
A frustrated user reports the agent "has its head up its ass," repeatedly ignoring corrections and wasting an entire day. Reflects broader complaints about agent consistency. **Impact:** productivity loss and user fatigue.

**#96515 — Claude Code suggests irrelevant code files outside active context scope** [🔗](https://github.com/anthropics/claude-code/issues/96515)  
Claude Code surfaces files unrelated to the current discussion, even unreachable ones, forcing users to dismiss irrelevant suggestions. **Impact:** time-consuming context-switching friction.

**#97662 — Desktop (Windows): clicking an image thumbnail leaves window stuck with zoom-in cursor** [🔗](https://github.com/anthropics/claude-code/issues/97662)  
On Windows 11 with MSIX desktop, clicking an image thumbnail locks the window with a zoom-in cursor; all clicks ignored until the renderer is killed. Occurred at 100% CPU load. **Impact:** UI freeze requiring process kill.

**#97626 — $100 credit not applied after successfully connecting GitHub** [🔗](https://github.com/anthropics/claude-code/issues/97626)  
Users who connected GitHub accounts successfully didn't receive the promised $100 Claude credit promo. **Impact:** trust in promotional commitments and onboarding flow.

**#88756 — Copy paste fails in Ghostty on Linux (NixOS)** [🔗](https://github.com/anthropics/claude-code/issues/88756)  
Platform-specific clipboard failure in the Ghostty terminal on Linux. **Impact:** blocks core editing workflow for Ghostty users.

---

## 4. Key PR Progress

**#94847 — diff: the first edit opens the pane only when it has a file to list** [🔗](https://github.com/anthropics/claude-code/pull/94847) (OPEN)  
The diff pane no longer auto-opens on the first Edit/Write/NotebookEdit to an empty or ignored path. Previously, a write outside the repo or into an ignored file produced a blank "No tracked changes" pane. Now the pane waits until it has a real file to display. *Author: bcherny.*

**#98357 — diff: the pane notices a finished merge by itself** [🔗](https://github.com/anthropics/claude-code/pull/98357) (CLOSED)  
The diff pane watches the repository HEAD and detects when a merge finishes elsewhere, avoiding a constant `git` polling loop on certain branch names. *Author: poteat.*

**#98445 — diff: the pane reads every file's hunks with one git process** [🔗](https://github.com/anthropics/claude-code/pull/98445) (CLOSED)  
Consolidates up to 50 per-file `git` processes into a single process per diff read. Significant win on Windows where process startup is slow. *Author: poteat.*

**#98374 — diff: the pane reads the diff again after a rebase that finished** [🔗](https://github.com/anthropics/claude-code/pull/98374) (CLOSED)  
After a rebase completes, the diff pane now re-reads the diff instead of showing "Diff unavailable." Handles the `REBASE_HEAD` leftover edge case. *Author: poteat.*

**#97293 — mods: declarations carry process.run's truncation flags and list entries' mtimeMs** [🔗](https://github.com/anthropics/claude-code/pull/97293) (OPEN)  
Adds `isStdoutTruncated` / `isStderrTruncated` to `$.process.run` results and `mtimeMs` to `$.fs.list` entries in the engine declarations. Arms the released npm CLI to answer these fields. *Author: poteat.*

**#97952 — ci: security hardening for GitHub Actions workflows that call Claude** [🔗](https://github.com/anthropics/claude-code/pull/97952) (CLOSED)  
Adds an egress-firewall runner and tightens permissions for `claude-issue-triage.yml`, `claude-dedupe-issues.yml`, and `claude.yml` workflows. *Author: qing-ant.*

**#96434 — security-guidance: keep denied and secret files out of the reviewer's reach** [🔗](https://github.com/anthropics/claude-code/pull/96434) (OPEN)  
Fixes #96276. The security-guidance review sub-agent no longer sees files blocked by `Read` deny/ask rules or well-known secret files (`.env`, keys, credential stores). The sub-agent inherits the session's disallowed-tools rules and has no shell access. Opt-out via `SG_SKIP_SECRET_FILES=0`. *Author: claude[bot].*

**#98275 — agents-md: send the AGENTS.md loaded line to the debug log** [🔗](https://github.com/anthropics/claude-code/pull/98275) (CLOSED)  
Projects with AGENTS.md but no CLAUDE.md now log the loaded line to debug output instead of creating a new transcript row. Mirrors behavior built into v2.1.286. *Author: poteat.*

**#39417 — Enhance SKILL.md with critical design thinking steps** [🔗](https://github.com/anthropics/claude-code/pull/39417) (CLOSED)  
Adds frontend development design guidelines to SKILL.md. *Author: TirupMehta.*

---

## 5. Feature Request Trends

 distilled from the issue pool:

- **GitHub integration completeness** — the dominant theme: private repo support (#98541, #97609), connector reliability (#96464, #96452, #96451, #96332), and credit/promo fulfillment (#97626).
- **Model session persistence control** — users want `/model` changes to be opt-in per-session rather than globally persistent (#98539).
- **Remote control sync reliability** — messages typed during active turns must sync across devices (#81845).
- **VSCode extension stability** — forking, tab attachment, and idle-state behavior need fixes (#85008).
- **Agent behavior guardrails** — corrections being ignored (#88746), irrelevant file suggestions (#96515), and self-initiated actions (#81125) all point to a need for better constraint and context adherence.

---

## 6. Developer Pain Points

Recurring frustrations across the issue tracker:

1. **GitHub integration fragility** — at least 8 of the 30 issues this cycle are GitHub-connector related, many closed as "invalid" or "needs-info" without resolution, suggesting a broken or poorly communicated integration flow.
2. **Agent consistency** — multiple reports of agents ignoring rules, corrections, or context (#88746, #96317, #96515, #81125). This is the single largest category of open complaints.
3. **Platform-specific breakage** — Ghostty on Linux (#88756), Windows image thumbnails (#97662), and tmux prompt blocking (#96436) all indicate insufficient platform testing.
4. **Silent state mutation** — the `/model` global persistence issue (#98539) and the VSCode fork invisibility (#85008) both involve changes happening without user awareness.
5. **Billing/credit transparency** — credit balance errors (#88711) and unfulfilled promo credits (#97626) erode trust in the account/billing layer.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-10-01

## 1. Today's Highlights

The Codex CLI saw a flurry of alpha activity with three new `0.161.0-alpha` pre-releases plus `0.160.0-alpha.6.1`, while stable `0.159.2` shipped a backport suppressing Windows console window flashing — a direct response to the most-upvoted issue on the tracker. The day's PR stream was dominated by a coordinated batch of reliability fixes around SQLite corruption detection, async-runtime blocking work, and token-budget efficiency, alongside feature work for in-app voice gating and account-security reminders in the TUI. Windows desktop bugs remain the dominant source of community pain, with the daemon/terminal flash thread alone amassing 128 comments and 148 reactions.

## 2. Releases

- **rust-v0.161.0-alpha.5 / -alpha.4 / -alpha.3** — Rapid pre-release cadence pushing toward the next minor; no published changelog details yet. ([0.161.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.161.0-alpha.5), [alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.161.0-alpha.4), [alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.161.0-alpha.3))
- **rust-v0.160.0-alpha.6.1** — Hotfix alpha on the 0.160 line. ([release](https://github.com/openai/codex/releases/tag/rust-v0.160.0-alpha.6.1))
- **rust-v0.159.2 (stable)** — Backports the Windows console-window suppression from PR #49385, stopping the terminal flash caused by Codex launching background/sandboxed processes. ([release](https://github.com/openai/codex/releases/tag/rust-v0.159.2))

## 3. Hot Issues

1. **[#48074](https://github.com/openai/codex/issues/48074)** — *Windows terminal windows flash during requests after installing the Codex daemon (CLI 0.157.0).* 128 comments, 148 👍 — the single most reacted issue; now mitigated by 0.159.2.
2. **[#48043](https://github.com/openai/codex/issues/48043)** — *CLI 0.157.0 fails to start on Windows with daemon privilege error (0.156.1 works).* 50 comments — a regression that blocked many Windows users from upgrading.
3. **[#42739](https://github.com/openai/codex/issues/42739)** — *Local projects disappear from sidebar after Windows desktop update.* 39 comments — recurring data-migration concern on Windows.
4. **[#48774](https://github.com/openai/codex/issues/48774)** — *Codex Remote pairing fails on Android.* 27 comments — QR auth flow breaks after scanning; community flags inconsistent behavior between iOS and Android.
5. **[#23527](https://github.com/openai/codex/issues/23527)** — *Codex mobile does not show SSH remote projects from a connected Mac host.* 19 comments — long-standing parity gap between desktop and mobile project surfaces.
6. **[#32614](https://github.com/openai/codex/issues/32614)** — *Agent-created top-level task hidden from desktop search and Codex Mobile Remote.* 15 comments — subagent visibility regression.
7. **[#45596](https://github.com/openai/codex/issues/45596)** — *Windows desktop: ChatGPT project mirror sync fails after Work helpers occupy the mirror directory.* 13 comments — interaction between Codex Work and the local mirror path.
8. **[#46951](https://github.com/openai/codex/issues/46951)** — *Browser control fails on macOS 13.7.8 with TIOCSTI sandbox error.* 11 comments — sandbox compatibility on older macOS releases.
9. **[#48040](https://github.com/openai/codex/issues/48040)** — *v0.157.0 regression: right-click paste broken in the integrated terminal on Fedora.* 10 comments — input-handling regression on Linux.
10. **[#30026](https://github.com/openai/codex/issues/30026)** — *Browser/Chrome/Computer Use plugins installed but unusable (node_repl JS tool not exposed).* 10 comments — configuration gap between bundled plugins and tool surface.

## 4. Key PR Progress

1. **[#49744](https://github.com/openai/codex/pull/49744)** — *Backport account security setup reminders to 0.159.3.* Cherry-picks 23 files of TUI notice + validation logic onto the maintenance line.
2. **[#49715](https://github.com/openai/codex/pull/49715)** — *Add account security setup reminders to the TUI.* Async-fetch notices for local ChatGPT sessions, validate notice text and HTTP cache headers, ignore stale accounts.
3. **[#49714](https://github.com/openai/codex/pull/49714)** — *Decouple API-key cyber access programs from model discovery.* Lets API-key sessions forward explicit cyber programs independently of `api_key_model_discovery`.
4. **[#49713](https://github.com/openai/codex/pull/49713)** — *Remove repository-local Codex guidance, skills, and environment config.* Cleans up the root `AGENTS.md`, `.codex/skills/`, and `environments/environment.toml`.
5. **[#49712](https://github.com/openai/codex/pull/49712)** — *Avoid full-string scans in token-budget truncation.* Uses UTF-8 boundary lookups to compute retained prefix/suffix without scanning discarded middle.
6. **[#49710](https://github.com/openai/codex/pull/49710)** — *Classify SQLite corruption using typed error codes.* Preserves the underlying error chain in `LocalStateDbStartupError` for reliable auto-backup/recovery.
7. **[#49708](https://github.com/openai/codex/pull/49708)** — *Move session index I/O off async runtime threads.* Runs appends and removals in `spawn_blocking`, taking the Tokio mutex before awaiting.
8. **[#49706](https://github.com/openai/codex/pull/49706)** — *Upgrade the argument-comment lint toolchain and Dylint.* Moves to `nightly-2026-08-20` and Dylint `6.1.0`, with CI/release/Bazel updates.
9. **[#49704](https://github.com/openai/codex/pull/49704)** — *Prevent npm alpha dist-tags from moving backward.* Adds a pre-publish check against the current dist-tag to avoid overwriting newer alphas.
10. **[#49702](https://github.com/openai/codex/pull/49702)** — *Rename exec-server file handle management identifiers.* Renames `file_read`/`FileReadHandleManager` → `file_handle`/`FileHandleManager` for clearer semantics.

## 5. Feature Request Trends

- **Account-security & notice UX in the TUI** — Multiple recent PRs (e.g., [#49715](https://github.com/openai/codex/pull/49715), [#49744](https://github.com/openai/codex/pull/49744)) add asynchronous setup reminders and stale-account detection, signaling a push toward richer in-app security prompts.
- **In-app voice as a managed capability** — [#49683](https://github.com/openai/codex/pull/49683) registers `in_app_voice` as a stable, default-enabled feature gate; expect voice controls to roll out behind managed policy soon.
- **API-key feature parity with ChatGPT auth** — [#49714](https://github.com/openai/codex/pull/49714) decouples cyber access programs from model discovery, a small but visible step toward giving API-key users capabilities that were ChatGPT-auth-only.
- **Better observability for skill usage** — [#49689](https://github.com/openai/codex/pull/49689) exports `codex.skill_invocation` events via OpenTelemetry, useful for teams instrumenting Codex workflows.
- **Remote ↔ mobile notification delivery** — [#49686](https://github.com/openai/codex/pull/49686) wires the remote message board into active turns so previews land in the running conversation.
- **Cleaner release hygiene** — [#49704](https://github.com/openai/codex/pull/49704) addresses npm alpha-tag drift, reflecting community feedback that alpha versions were confusing.

## 6. Developer Pain Points

- **Windows desktop regressions dominate the queue.** The flash-on-request bug ([#48074](https://github.com/openai/codex/issues/48074), 148 👍), CLI 0.157.0 daemon failure ([#48043](https://github.com/openai/codex/issues/48043)), Projects disappearing after updates ([#42739](https://github.com/openai/codex/issues/42739), [#42867](https://github.com/openai/codex/issues/42867)), Computer Use launching only the browser surface ([#45948](https://github.com/openai/codex/issues/45948)), and quota timestamps off by an hour ([#47738](https://github.com/openai/codex/issues/47738)) all point to a fragile Windows experience.
- **Mobile / Remote pairing is unreliable.** Android pairing loops ([#48774](https://github.com/openai/codex/issues/48774), [#49179](https://github.com/openai/codex/issues/49179)), missing SSH remote projects on iOS ([#23527](https://github.com/openai/codex/issues/23527)), and hidden agent-created tasks ([#32614](https://github.com/openai/codex/issues/32614)) make the cross-device story a recurring source of complaints.
- **TUI/CLI input regressions on Linux.** Right-click paste in v0.157.0 on Fedora ([#48040](https://github.com/openai/codex/issues/48040)), changed copy/paste shortcuts on Debian ([#48139](https://github.com/openai/codex/issues/48139)), and lost middle-click paste in 0.158.0 ([#49162](https://github.com/openai/codex/issues/49162)) suggest the terminal layer is being actively reworked with rough edges.
- **Bundled plugins ship disabled in practice.** Browser/Chrome/Computer Use are installed but lack `node_repl` ([#30026](https://github.com/openai/codex/issues/30026)), Computer Use on Windows has only a browser surface ([#45948](https://github.com/openai/codex/issues/45948)), and `.started` local tasks miss tools ([#49458](https://github.com/openai/codex/issues/49458)) — a documentation/discoverability gap.
- **Session durability and recovery concerns.** Session history vanishing when `token_count` events are rejected ([#42025](https://github.com/openai/codex/issues/42025)), auto-compaction replaying answered user messages ([#42611](https://github.com/openai/codex/issues/42611)), and Goal auto-continuation entering unbounded loops ([#34248](https://github.com/openai/codex/issues/34248)) are all top-tier stability concerns that the SQLite-corruption and async-blocking PR wave is targeting.
- **Model-picker parity gaps.** GPT-6.1 Sol missing in the VS Code extension ([#49464](https://github.com/openai/codex/issues/49464)), Sol/Luna missing under Amazon Bedrock ([#47556](https://github.com/openai/codex/issues/47556)), and unclear eligibility errors for ChatGPT sign-in users ([#49396](https://github.com/openai/codex/issues/49396)) make model selection a friction point across surfaces.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Thinking Process:

1.  **Understand the Goal**: The user wants a structured "Gemini CLI community digest" for the date `2026-10-01` (based on the provided data which has updates mostly around 2026-09-30).
    *   Sections needed:
        1.  **Today's Highlights** (2-3 sentences summarizing the most important updates)
        2.  **Releases** (Summarize changes if new versions exist)
        3.  **Hot Issues** (Pick 10 noteworthy issues, explain why they matter and community reaction)
        4.  **Key PR Progress** (Pick 10 important PRs, describe features or fixes)
        5.  **Feature Request Trends** (Distill most-requested feature directions from issues)
        6.  **Developer Pain Points** (Summarize recurring developer frustrations or high-frequency requests)
    *   Style: Concise and professional, suited for technical developers. Include GitHub links for each item.

2.  **Analyze the Data**:
    *   **Latest Releases**:
        *   `v0.64.0-nightly.20260930.g38700b4b3`
        *   Changes:
            *   `fix(core): enable autonomous plan execution in non-interactive mode` by @urielefrenvirtusa (PR #29539)
            *   `fix(core): disable truncation when maxChars <= 0 in formatTruncatedToolOutput` by @diegogodinezr (PR link truncated but likely #295something)
    *   **Latest Issues** (Total 50, top 30 by comment count shown):
        *   #3132 [OPEN] [priority/p3, area/agent, 🔒 maintainer only, workstream-rollup, status/bot-triaged, kind/enhancement] [Agents] Post V1.0 Work (46 comments, 50 👍) - Reusable SubAgent class / tool orchestration.
        *   #3716 [OPEN] [priority/p2, 1.0/eng-excellence, Stale, area/documentation, 🔒 maintainer only, workstream-rollup, status/bot-triaged, kind/bug] Infra: Build and Tag Docker for PR's (13 comments) - Sandboxed testing for every PR.
        *   #22323 [OPEN] [priority/p1, area/agent, 🔒 maintainer only, workstream-rollup, status/need-retesting, status/bot-triaged, kind/bug] Subagent recovery after MAX_TURNS is reported as GOAL success, hiding interruption (13 comments, 2 👍) - Bug where subagent reports success despite hitting max turns limit.
        *   #10673 [OPEN] [priority/p2, area/core, 1.0/ui-improvements, 🔒 maintainer only, workstream-rollup, status/bot-triaged, kind/bug, effort/medium] Flicker free robust terminal rendering (9 comments) - Ink rendering improvements.
        *   #15269 [OPEN] [priority/p2, area/agent, kind/customer-issue, 🔒 maintainer only, workstream-rollup, status/bot-triaged] Feature: Missing Subagent Hook Events (8 comments) - Need `BeforeSubAgent` / `AfterSubAgent` hooks.
        *   #22745 [OPEN] [priority/p2, area/agent, kind/customer-issue, 🔒 maintainer only, workstream-rollup, status/bot-triaged, kind/feature] Assess the impact of AST-aware file reads, search, and mapping (7 comments) - AST tools to reduce token noise/misaligned reads.
        *   #17602 [OPEN] [priority/p3, area/agent, 🔒 maintainer only, workstream-rollup, status/bot-triaged, kind/enhancement] [Low Priority] [Remote Agents] A2A Machine-to-Machine Auth (5 comments) - OAuth 2.0 Client Credentials Flow for service-to-service.
        *   #17110 [OPEN] [priority/p2, area/agent, 🔒 maintainer only, workstream-rollup, status/bot-triaged, kind/enhancement] Agent should run changes to validate app (5 comments) - Feedback loops, self-validation.
        *   #11802 [OPEN] [priority/p2, area/agent, 🔒 maintainer only, workstream-rollup, status/bot-triaged, kind/bug, status/need-information, effort/small, effort/medium] Add OTLP headers for telemetry (5 comments, 7 👍) - Custom headers for OTEL collector.
        *   #15179 [OPEN] [priority/p3, area/agent, 🔒 maintainer only, workstream-rollup, status/bot-triaged, kind/question] [Feat] Investigate recursive subagent delegation (4 comments) - Post-V1 feature: subagents delegating to subagents.
        *   #14724 [OPEN] [priority/p3, area/agent, 🔒 maintainer only, workstream-rollup, status/bot-triaged, kind/bug] Hooks - SessionStart "compress" vs "compact" Incompatibility (4 comments) - Claude Code hook migration issue.
        *   #15670 [OPEN] [priority/p2, area/agent, 🔒 maintainer only, workstream-rollup, status/bot-triaged, kind/enhancement] Standardizing Reusable Intelligence: A Native "Sub-agent" and "Skills" Architecture (3 comments) - Orchestrator/Expert "Squad" model.
        *   #15272 [OPEN] [priority/p2, area/security, 🔒 maintainer only, workstream-rollup, status/bot-triaged, kind/question] Security: Default Hook Sandboxing (3 comments) - Sandbox hooks by default to mitigate local code execution risks.
        *   #12244 [OPEN] [priority/p2, area/enterprise, 🔒 maintainer only, workstream-rollup, status/bot-triaged, kind/enhancement] Robust Observability via OpenTelemetry (3 comments) - OTel epic.
        *   #24246 [OPEN] [priority/p2, area/agent, 🔒 maintainer only, workstream-rollup, status/bot-triaged, kind/bug, status/need-information] Gemini CLI encounters 400 error with > 128 tools (3 comments) - Tool limit issue.
        *   #23571 [OPEN] [priority/p2, area/agent, 🔒 maintainer only, workstream-rollup, status/bot-triaged, kind/bug] Model frequently creates tmp scripts in random spots (3 comments) - Workspace cleanup overhead.
        *   #22672 [OPEN] [priority/p2, area/agent, kind/customer-issue, 🔒 maintainer only, workstream-rollup, status/bot-triaged] Agent should stop/discourage destructive behavior (3 comments) - Prevent `git reset --force` etc.
        *   #17120 [OPEN] [priority/p2, area/agent, 🔒 maintainer only, workstream-rollup, status/bot-triaged, kind/enhancement] Epic: Parallel Tool Calling (2 comments) - Safe parallel tool execution.
    *   **Latest Pull Requests** (Total 32, top 20 shown):
        *   #29585 [OPEN] [size/xs, status/need-issue] [VRP PoC - do not merge] benign CI runner identity check (whoami only) - Security research PoC.
        *   #29520 [OPEN] [priority/p1, priority/p2, area/core, size/l] fix(cli): preserve scroll position and partition pending height budget - Viewport scroll stability.
        *   #29580 [OPEN] [priority/p1, area/non-interactive, size/l] fix(acp): resolve session by exact id and handle listener cleanup on session failure - ACP session load fixes.
        *   #29583 [OPEN] [priority/p1, area/core, size/m] fix(cli): enforce read-only workspace settings in untrusted folders - Security boundary enforcement.
        *   #29584 [OPEN] [priority/p1, area/core, size/l] fix(core): prevent deletion of resumed session history on quick exit (#29198) - Critical data-loss fix.
        *   #29568 [OPEN] [priority/p1, area/core, size/xl] fix(core): implement append-only delta patching and bounded history windowing in ChatRecordingService - Performance/efficiency in chat recording.
        *   #29581 [OPEN] [priority/p2, area/core, size/l, help wanted] fix(cli): resolve @file:line references and prevent ghost text wrap hang - Reference resolution and input loop fix.
        *   #29582 [OPEN] [priority/p1, area/core, size/l] perf(core): optimize ignore filtering and enable subtree pruning - Large repo file discovery speedup.
        *   #29499 [CLOSED] [priority/p1, area/core, size/l] fix(core): serialize file tool operations and make writes atomic - Race condition fix.
        *   #29557 [CLOSED] [priority/p1, area/core, size/m] fix(cli): prevent CPU hang and quote swallowing on @ within code - Headless CPU lockup fix.
        *   #19013 [OPEN] [priority/p1, priority/p2, area/extensions, size/m, help wanted] Fixes #18884 - Windows extension update file lock error.
        *   #29457 [OPEN] [priority/p1, area/core, size/l, size/xl] fix(core): replace fuzzy requestedExplicitly logic with glob matching in read-many-files - Context bloat fix.
        *   #29502 [OPEN] [priority/p1, area/core, size/m] fix(cli): ensure Enter and Spacebar reliably confirm selection list options - UI input consistency.
        *   #29432 [OPEN] [area/agent, size/m, size/l, status/pr-nudge-sent] fix(core): settle queued tool calls on scheduler disposal - Scheduler lifecycle.
        *   #29431 [OPEN] [size/m, size/l, status/pr-nudge-sent] fix(core): skip invalid TOML policy rules - Policy engine crash fix.
        *   #1 [CLOSED] [priority/p1, size/s] docs: Add setup instructions for API key to README - Old docs PR.
        *   #29578 [OPEN] [size/m] fix(mcp): request offline access for Google endpoints and preserve clientSecret on refresh - OAuth token refresh fix.
        *   #29525 [OPEN] [size/s] fix(a2a-server): never derive workspace trust from request agentSettings in createTask - Security/isolation fix.
        *   #29564 [OPEN] [area/core, size/l] fix(cli): preserve env placeholders during settings migration - Env var preservation.
        *   #29435 [OPEN] [priority/p2, area/agent, size/l, status/pr-nudge-sent] fix(cli,core): prevent process hang on session exit - Stdin drain cleanup.

3.  **Drafting the Sections**:

    *   **Today's Highlights (2-3 sentences)**:
        *   Focus on the massive movement on core stability, critical bug fixes (like the session history deletion on quick exit, CPU lockups, and file operation race conditions), and the release of `v0.64.0-nightly` enabling autonomous plan execution in non-interactive mode.
        *   Mention the strong focus on sub-agent lifecycle management, hook standardizations, and robust telemetry/observability setups.

    *   **Releases**:
        *   `v0.64.0-nightly.20260930.g38700b4b3`
        *   Key highlights:
            *   Autonomous plan execution in non-interactive mode (core enhancement).
            *   Truncation logic fixed when `maxChars <= 0` in `formatTruncatedToolOutput` (cli robustness).

    *   **Hot Issues (Pick 10 noteworthy issues, explain why they matter and community reaction)**:
        *   Let's select the 10 most impactful ones based on comment count, priority, and relevance:
            1.  **#3132 [Agents] Post V1.0 Work** (46 comments, 50 👍): High community demand for a reusable, native SubAgent class to handle complex tool orchestration autonomously.
            2.  **#22323 Subagent recovery after MAX_TURNS is reported as GOAL success, hiding interruption** (priority/p1): Critical bug where subagents lie about success status, crucial for automation reliability.
            3.  **#15269 Feature: Missing Subagent Hook Events** (8 comments): Customer demand for lifecycle hooks (`BeforeSubAgent`/`AfterSubAgent`) to maintain parity with the main agent's hook system.
            4.  **#22745 Assess the impact of AST-aware file reads, search, and mapping** (7 comments): Investigating AST-aware tools to drastically reduce token noise and misaligned file reads.
            5.  **#11802 Add OTLP headers for telemetry** (5 comments, 7 👍): Enterprise telemetry requires custom authentication headers for OTEL collectors.
            6.  **#17110 Agent should run changes to validate app** (5 comments): Crucial feedback loop request where agents self-validate code changes to prevent hallucinated/broken code.
            7.  **#14724 Hooks - SessionStart "compress" vs "compact" Incompatibility** (4 comments): Standardization bug causing hook failures when migrating from Claude Code.
            8.  **#24246 Gemini CLI encounters 400 error with > 128 tools** (priority/p2): Scale bottleneck; agents with large toolsets hit API limits.
            9.  **#22672 Agent should stop/discourage destructive behavior** (3 comments, 1 👍): Guardrails against destructive git commands (e.g., `git reset --force`).
            10. **#15272 Security: Default Hook Sandboxing** (3 comments): Security request to run hooks in a restricted sandbox by default to mitigate local code execution risks.
        *   *Self-Correction on selection*: Ensure they represent a mix of bugs, features, and security. Let's write concise summaries for each and state why they matter.

    *   **Key PR Progress (Pick 10 important PRs, describe features or fixes)**:
        *   Focus on the ones that are critical fixes or major performance updates.
        1.  **#29584 fix(core): prevent deletion of resumed session history on quick exit**: Critical data-loss fix preventing session history deletion when exiting quickly after resuming.
        2.  **#29568 fix(core): implement append-only delta patching and bounded history windowing in ChatRecordingService**: Major optimization to avoid unbounded memory retention and heavy full-history rewrites.
        3.  **#29582 perf(core): optimize ignore filtering and enable subtree pruning**: Major performance boost for large repositories, resolving multi-second blocking delays.
        4.  **#29499 fix(core): serialize file tool operations and make writes atomic**: Resolves silent lost updates and race conditions during parallel tool execution.
        5.  **#29557 fix(cli): prevent CPU hang and quote swallowing on @ within code**: Fixes a critical 100% CPU lockup in headless / non-interactive modes.
        6.  **#29520 fix(cli): preserve scroll position and partition pending height budget**: UX improvement preserving terminal viewport scroll position during streaming.
        7.  **#29583 fix(cli): enforce read-only workspace settings in untrusted folders**: Security enhancement preventing destructive sync-by-omission overwrites in untrusted workspaces.
        8.  **#29457 fix(core): replace fuzzy requestedExplicitly logic with glob matching in read-many-files**: Fixes critical context-bloat bug where binary assets were incorrectly read as explicitly requested.
        9.  **#29580 fix(acp): resolve session by exact id and handle listener cleanup on session failure**: Fixes session loading failures and event listener leaks in ACP.
        10. **#29578 fix(mcp): request offline access for Google endpoints and preserve clientSecret on refresh**: Fixes OAuth token refresh failures for Google Workspace APIs.
        *   Let's check the remaining ones: #29581 (ghost text wrap hang), #29502 (selection list Enter/Spacebar), #29435 (session exit hang). The selected 10 cover critical bugs, performance, and security nicely.

    *   **Feature Request Trends**:
        *   Distill the most-requested feature directions from all Issues.
        *   *Sub-agent & Agent Orchestration*: Dominant theme. Requests for native SubAgent classes (#3132), subagent hook events (#15269), recursive subagent delegation (#15179), and parallel tool/subagent execution (#17120).
        *   *Self-Validation & Feedback Loops*: Agent self-validation of changes (#17110) and steering the agent away from destructive behaviors (#22672).
        *   *AST-Aware Tooling*: AST-aware file reads, search, and mapping (#22745, #22746) to optimize token usage and reduce LLM hallucination bounds.
        *   *Enterprise Observability & Security*: OTLP headers for telemetry (#11802), robust OpenTelemetry integration (#12244), and default hook sandboxing (#15272).
        *   *Remote Agents & A2A Standardization*: Machine-to-machine auth (#17602), OAuth metadata discovery (#17603), and general productionization of Remote Agents (#17595).

    *   **Developer Pain Points**:
        *   Summarize recurring developer frustrations or high-frequency requests.
        *   *Subagent Lifecycle & Success Reporting*: Frustration with subagents reporting false success statuses (hitting MAX_TURNS but reporting GOAL success - #22

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



**GitHub Copilot CLI Community Digest – 2026‑10‑01**  

---

### Today's Highlights  
The CLI rolled out **v1.0.90** (and several incremental builds) adding support for the new **GPT‑6.1 Sol** model, a scoped `--mcp-github-auth` flag, and session‑scoped read‑only directory approvals.  At the same time, the community is wrestling with a surge of **400‑error reports** and several MCP‑related connectivity problems that are dominating the issue tracker.

---

### Releases  

| Version | Date | Key Changes |
|---------|------|-------------|
| **v1.0.90** | 2026‑09‑30 | • Added GPT‑6.1 Sol to model selection  <br>• `--mcp-github-auth` scopes GitHub auth to approved MCP origins  <br>• Session‑scoped read‑only directory approvals in path prompts  <br>• Permission prompts stay answerable after resuming an interrupted session |
| **v1.0.90‑6** | 2026‑09‑30 | • GPT‑6.1 Sol support  <br>• Click anywhere on expanded tool calls to collapse them  <br>• Space/Ctrl+X explain voice‑mode hints  <br>• Fixed permission‑prompt resume issue |
| **v1.0.90‑7** | 2026‑09‑30 | Miscellaneous fixes and changes (details not enumerated) |

*Release notes: [v1.0.90](https://github.com/github/copilot-cli/releases/tag/v1.0.90) • [v1.0.90‑6](https://github.com/github/copilot-cli/releases/tag/v1.0.90-6) • [v1.0.90‑7](https://github.com/github/copilot-cli/releases/tag/v1.0.90-7)*

---

### Hot Issues  

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|--------------------|
| 1 | **[#1274 – CLI constantly getting 400 errors for invalid request body](https://github.com/github/copilot-cli/issues/1274)** | 95 % of code‑review prompts fail with HTTP 400; points to possible server‑side validation or malformed CLI requests. | 32 comments, 13 👍 |
| 2 | **[#1973 – Feature Request: Tool whitelist for Interactive Mode](https://github.com/github/copilot-cli/issues/1973)** | Users want a fine‑grained whitelist (e.g., `grep`, `cat`) without enabling `/allow-all` which also permits destructive ops. | 16 comments, 29 👍 |
| 3 | **[#2205 – Scroll in terminal (Terminator) broken](https://github.com/github/copilot-cli/issues/2205)** | Mouse scroll now navigates input history instead of agent output, severely impacting review of long sessions. | 14 comments, 16 👍 |
| 4 | **[#3282 – Add multiple BYOK model capability](https://github.com/github/copilot-cli/issues/3282)** | Currently only one BYOK model can be set via env var; switching requires restarting the session. | 11 comments, 31 👍 (closed) |
| 5 | **[#4438 – `disable-model-invocation: true` makes skill unreachable](https://github.com/github/copilot-cli/issues/4438)** | Skills marked as manual‑only are not found even when explicitly invoked, breaking workflow automation. | 10 comments, 11 👍 |
| 6 | **[#5008 – Startup error “Failed to read model provider attribution”](https://github.com/github/copilot-cli/issues/5008)** | Race condition on sign‑in causes a transient error on every new session; chat works after a few seconds. | 4 comments, 4 👍 |
| 7 | **[#4851 – Azure MCP server fails sending HTTP request](https://github.com/github/copilot-cli/issues/4851)** | Overnight regression breaks validation of Azure API Center MCP registries; BrokenPipe errors. | 3 comments, 7 👍 |
| 8 | **[#4998 – macOS update breaks CLI due to stale `.mcp-writer.binding` device ID](https://github.com/github/copilot-cli/issues/4998)** | After a security update, all sessions (new & resumed) cannot process prompts. | 2 comments, 1 👍 |
| 9 | **[#4935 – Built‑in Slack MCP requests full scope superset](https://github.com/github/copilot-cli/issues/4935)** | OAuth consent URL asks for write scopes even when only read‑only tools are exposed, raising security concerns. | 1 comment, 4 👍 |
| 10 | **[#5024 – Native Opus 5.5 tasks fail with 400 for `fallback-credit-2026‑07‑01`](https://github.com/github/copilot-cli/issues/5024)** | Service rejects the `anthropic-beta` header; reproduces 5/5 times in interactive sessions. | 0 comments, 0 👍 (open) |

---

### Key PR Progress  
*No pull requests were updated in the last 24 hours.*

---

### Feature Request Trends  
- **Granular tool whitelists** for interactive mode (instead of all‑or‑nothing `/allow-all`).  
- **Multiple BYOK model support** with runtime switching.  
- **Enhanced terminal navigation**: mouse scroll, Vim/less‑style pager, and collapsible conversation turns.  
- **MCP configuration improvements**: easier registration of server‑managed marketplaces, proper handling of workspace `.mcp.json`, and OAuth scope minimization.  
- **Cross‑platform clipboard reliability**, especially on WSL2/Windows.  
- **Session resilience**: correct scroll position on resume, persistent permission answers, and robust handling of masked telemetry values.

---

### Developer Pain Points  
- **Frequent 400 errors** when sending requests (likely server‑side validation).  
- **Authentication race conditions** causing startup errors.  
- **MCP connectivity** issues (Azure registry, custom registries, stale bindings after OS updates).  
- **Permission prompts** that lose state after session resume.  
- **Terminal usability** regressions (scroll behavior, keyboard navigation).  
- **Inconsistent path resolution** for repository‑level customizations (agents vs. skills vs. `.mcp.json`).  
- **Clipboard failures** on WSL2 due to quoting bugs.  

These recurring frustrations highlight the need for more robust request validation, reliable MCP lifecycle management, and UI/UX refinements in the terminal interface.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



# OpenCode Community Digest — 2026-10-01

## Today's Highlights
The OpenCode community is heavily focused on billing and quota transparency issues affecting the Go subscription plan, with multiple users reporting wild percentage swings and up to 4x cost discrepancies. On the development side, major architectural PRs are standardizing tool namespacing across protocols and improving OpenRouter model routing, while critical bug fixes target agent loops and local MCP process cleanup.

---

## Hot Issues

### 1. XDG Base Directory Spec violation — node_modules installed in ~/.config instead of ~/.local/share
* **Issue:** [#27786](https://github.com/anomalyco/opencode/issues/27786) (Open) | **Author:** ilyachch | **Comments:** 19 | **👍:** 9
* **Why it matters:** Running `opencode` installs runtime dependencies (`node_modules`) into `~/.config/opencode`, violating the [XDG Base Directory Specification](https://specifications.freedesktop.org/basedir-spec/basedir-spec.html). This clutters the configuration directory and conflicts with standard Linux system tooling.
* **Community Reaction:** High engagement (19 comments). Users are actively discussing workarounds and providing patch suggestions to align the directory layout with standard Linux conventions.

### 2. OpenCode Go quota usage appears ~4x higher than displayed DeepSeek V4 Flash cost
* **Issue:** [#42985](https://github.com/anomalyco/opencode/issues/42985) (Open) | **Author:** tnn226 | **Comments:** 16 | **👍:** 7
* **Why it matters:** Users are noticing severe discrepancies between the cost shown in the usage graph and the actual Go quota

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



# Pi Community Digest — 2026-10-01

---

## 1. Today's Highlights

Pi v0.99.2 ships with a significant MCP usability improvement: servers using the default `codemode` exposure no longer block the first prompt or pollute the `codemode` description. They now appear in a compact system prompt section, and scripts discover their tools via `searchTools()` and `describeName`. This is paired with a wave of critical fixes—MCP codemode tool name collisions, session fork migration bugs, and Anthropic workload identity federation—alongside new programmatic configuration options for embedding Pi in other tools.

---

## 2. Releases

### v0.99.2

- **MCP servers stay out of the way**: MCP servers with default `codemode` exposure are no longer listed in the `codemode` description and no longer block the first prompt. They appear in a short system prompt section, and scripts find their tools with `searchTools()` and `describeName`.

---

## 3. Hot Issues

### #10031 — Pi sporadically stuck in "Working…" when thinking is stopped with ESC
**Why it matters:** Users report frequent session lockups requiring a full restart (`CTRL+c` + `pi -c`). The bug has persisted for roughly a month (since ~v0.84.0) across machines. With 18 comments and 2 👍, this is the most actively discussed open issue. It suggests a race condition in the thinking/streaming cancellation path.
[Link](https://github.com/earendil-works/pi/issues/10031)

### #9566 — Context size defaults to 128k despite real size being available
**Why it matters:** When a `models.json` provider entry lists a model `id` that matches one the provider already exposes, Pi silently falls back to a 128k context window and incorrect cost/input/maxTokens values. This silently degrades performance and billing accuracy for self-hosted llama providers. 9 comments, 4 👍.
[Link](https://github.com/earendil-works/pi/issues/9566)

### #9571 — Malformed `Retry-After` header causes tight retry loop
**Why it matters:** A 429 response with a malformed HTTP-date in `Retry-After` computes a `NaN` delay, causing immediate retries in a tight loop with zero backoff. This is a classic production footgun—any rate-limited provider returning a slightly malformed header can hammer the API. 7 comments.
[Link](https://github.com/earendil-works/pi/issues/9571)

### #8331 — Agent loop hangs forever when a provider stream stalls mid-response
**Why it matters:** During an Anthropic 529 overload window, four long-running sessions froze indefinitely because the SSE stream stopped delivering events but never closed. The `for await` in `streamAssistantResponse` awaited forever. This is a fundamental resilience gap—no stall timeout on the stream iterator. 6 comments, 2 👍.
[Link](https://github.com/earendil-works/pi/issues/8331)

### #10212 — First response in a new session blocks up to 10s on MCP server startup (since 0.99.1)
**Why it matters:** A regression introduced in v0.99.1 causes the first response in a new session to take 8–10 seconds. Subsequent responses are normal. Removing all extensions has no effect, pointing to a core MCP connection issue at session init. 6 comments.
[Link](https://github.com/earendil-works/pi/issues/10212)

### #9134 — Anthropic adapter silently drops root `anyOf` from custom tool schemas
**Why it matters:** When a custom tool parameter schema uses a root-level `anyOf`, the registered schema and Pi's validator retain the constraint, but the Anthropic Messages adapter strips it from the model-facing `input_schema`. The model never sees the constraint, leading to invalid tool calls. 5 comments.
[Link](https://github.com/earendil-works/pi/issues/9134)

### #10162 — Too many input images stop the agent task
**Why it matters:** Long-running agent sessions (e.g., babysitting a PR, QA testing) that rely on Pi's auto-compaction can be abruptly terminated when too many input images accumulate. This breaks the "run indefinitely" promise for vision-heavy agent workflows. 5 comments.
[Link](https://github.com/earendil-works/pi/issues/10162)

### #10257 — Switching to Codex fails with a custom-tool ID error
**Why it matters:** Switching from Muse to GPT-6.1 Sol mid-chat fails with `Invalid 'input[1].id': 'fc_d74wbrca4514'. Expected an ID that begins with 'ctc'`. Earlier `codemode` calls are replayed as `custom_tool_call` with `fc_` IDs, but the Codex adapter expects `ctc_` prefixed IDs. This breaks mid-session model switching for any user on a codemode-enabled provider. 4 comments.
[Link](https://github.com/earendil-works/pi/issues/10257)

### #9852 — `openai-responses` writes `function_call.name` verbatim → 400 errors
**Why it matters:** Tool names legal in Pi (e.g., MCP-style `mcp:server:tool` or `collab:spawn`) are sent verbatim to the OpenAI Responses API, which only accepts `^[a-zA-Z0-9_-]+$`. This causes 400 `invalid_value` errors for any user with MCP or collaboration tools enabled on OpenAI providers. 3 comments.
[Link](https://github.com/earendil-works/pi/issues/9852)

### #10192 — `codemode.mode: "only"` leaves hidden tools advertised in system prompt
**Why it matters:** With `codemode.mode: "only"`, Pi hides direct declarations for `read`, `bash`, `edit`, and `write` from the tool list, but still lists them as available in the system prompt's `<tools>` section. This creates a confusing discrepancy between what's advertised and what's actually callable. 3 comments.
[Link](https://github.com/earendil-works/pi/issues/10192)

---

## 4. Key PR Progress

### #10242 — Anthropic provider: use the SDK's workload identity federation env vars
Closes #10177. When no API key or stored credential is configured, the Anthropic provider now treats `ANTHROPIC_FEDERATION_RULE_ID`, `ANTHROPIC_ORGANIZATION_ID`, `ANTHROPIC_SERVICE_ACCOUNT_ID`, and `ANTHROPIC_IDENTITY_TOKEN_FILE` as configuration and hands the bundled SDK a federated identity token. This enables Pi to work in cloud environments without static credentials.
[Link](https://github.com/earendil-works/pi/pull/10242)

### #10194 — feat(ai): add copy-code login method to Anthropic OAuth
Closes a major UX gap for remote deployments. Pi's previous localhost redirect flow is impractical on remote machines. This PR adds a code-based login flow using `http` — usable in production at Atelier cloud agent environments.
[Link](https://github.com/earendil-works/pi/pull/10194)

### #10241 — fix(coding-agent): disambiguate MCP codemode tool names
Closes #10239. MCP tools like `read-file` and `read_file` normalize to the same codemode identifier, so calling a name returned by `searchTools()` could execute the wrong tool. Tracks name ownership by codemode identifier so the existing hash-suffix mechanism disambiguates collisions correctly.
[Link](https://github.com/earendil-works/pi/pull/10241)

### #10232 — feat(durable): make SQLite storage asynchronous
Makes the portable SQLite facade asynchronous so adapters can run outside the harness runtime. Replaces `prepare` and `SqliteStatement` with `run`, `get`, and `all(sql, ...params)` on `SqliteExecutor`. Adapters cache prepared statements per connection by SQL text.
[Link](https://github.com/earendil-works/pi/pull/10232)

### #10233 — feat(coding-agent): add `--base-url` and `--api-type` for run-scoped endpoint overrides
Eliminates the need to edit `~/.pi/agent/models.json` for one-off runs against a different host or API dialect. Users can now override the provider endpoint and wire protocol directly on the command line.
[Link](https://github.com/earendil-works/pi/pull/10233)

### #10235 — Programmatic provider configuration for embedding pi in agiquery
Enables agiquery (and similar hosts) to own model configuration and hand it to Pi at launch — specifying endpoint, API dialect, available models, and credentials per request without touching the persistent models.json file.
[Link](https://github.com/earendil-works/pi/pull/10235)

### #10225 — fix(coding-agent): reject overlapping occurrences in edit matches
Fixes #9697. For a file like `aaa`, editing `aa` to an empty string previously succeeded even though there were two overlapping matches. `split()` counted only non-overlapping occurrences, bypassing the edit tool's uniqueness guard. Now uses `search` to find all matches and rejects overlapping ones.
[Link](https://github.com/earendil-works/pi/pull/10225)

### #10224 — fix(coding-agent): migrate legacy entries before forking sessions
Fixes #9950. Forking a v1 session with two messages reconstructed only the last message. `forkFrom()` now writes a v3 header around unmigrated records before forking, so loading the fork applies the migrations that create tree links and rename v2 hook messages.
[Link](https://github.com/earendil-works/pi/pull/10224)

### #10223 — fix(coding-agent): preserve active session after a rejected file switch
Fixes #10227. After `setSessionFile()` rejects a file containing `{}`, the next message was appended to that rejected file instead of the active session. The persistence path now changes only after validation succeeds.
[Link](https://github.com/earendil-works/pi/pull/10223)

### #10050 — fix(coding-agent): keep extension console output off the interactive TUI
Fixes #10002. Extensions run in-process, so `console.error()`, `console.warn()`, `console.log()`, and direct `process.stdout`/`process.stderr` writes from extension code were landing raw on the tty while the differential renderer owned it. Output is now properly captured and kept off the interactive TUI.
[Link](https://github.com/earendil-works/pi/pull/10050)

---

## 5. Feature Request Trends

- **MCP improvements dominate**: Multiple requests for deferred MCP server connection (#10253), separate OAuth accounts per MCP entry sharing a URL (#10252), OSC-8 clickable auth links (#10186), and `authServerMetadataUrl`/`skipIssuerMetadataValidation` support (#10172). The MCP feature surface is expanding rapidly and users want finer-grained control.
- **Provider flexibility**: Requests for `serverTools` support (GLM web search, Anthropic web_search) (#9560), Azure Foundry Chat Completions (#9714), workload identity federation (#10177), and programmatic provider configuration (#10235).
- **Codemode refinements**: Users want hidden tools to stay hidden everywhere (system prompt, not just tool list) (#10192), image contents to be accessible via `tools.read()` in codemode-only mode (#10251), and deferred MCP servers to connect only when needed (#10253).
- **Session management hardening**: Legacy migration before forking (#10224), preserving active session after rejected file switch (#10223), and run-scoped endpoint overrides (#10233).

---

## 6. Developer Pain Points

- **Stream resilience**: The agent loop has no stall timeout on provider SSE streams (#8331), and thinking cancellation via ESC can lock the session entirely (#10031). Both are fundamental reliability gaps in the streaming path.
- **MCP connection overhead**: MCP servers block the first prompt (#10212) and connect eagerly at session start even when not needed (#10253). Users with many configured MCP servers suffer startup latency and interference.
- **Schema fidelity**: The Anthropic adapter silently drops root JSON Schema keywords (`anyOf`, `oneOf`, `allOf`, constraints) from tool input schemas (#9134, #9557), and `makeStrictJsonSchema` keeps keywords that Anthropic strict mode rejects (#9953). Tool calling correctness is compromised by silent schema transformations.
- **Provider-specific ID mismatches**: Codex expects `ctc_` prefixed tool IDs but Pi replays codemode calls with `fc_` IDs (#10257), and OpenAI rejects tool names containing `:` (#9852). Cross-provider compatibility requires manual workarounds.
- **Extension TUI interference**: Extension `console` output leaks directly to the terminal, corrupting the differential renderer (#10002, #10050). This is a persistent pain for developers building extensions.
- **Session migration complexity**: Forking sessions across storage format versions silently loses data (#9950, #10224), and rejected file switches corrupt the active session persistence path (#10223, #10227).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-10-01

## 1. Today’s Highlights
The repository shipped `v0.24.7-nightly.20260929.b906f937ec` with a core fix aligning Code Mode text with lazy tool discovery and a permissions handling follow-up. Managed Agent architecture work continues to dominate both issues and PRs, with active Stage D/G/H delivery for durable sessions, hosted hooks, file history, and remote runtime hosts. A P1 security issue around `cd` redirect targets silently bypassing write-deny checks also surfaced today.

## 2. Releases

### `v0.24.7-nightly.20260929.b906f937ec`
- `fix(core)`: align Code Mode text with lazy tool discovery — https://github.com/QwenLM/qwen-code/pull/12990
- `fix(permissions)`: honor approved… *(release notes are truncated in the data source)*

## 3. Hot Issues

1. **`#12380` — Managed Agent dual-path architecture**  
   https://github.com/QwenLM/qwen-code/issues/12380  
   Most-discussed issue with 37 comments. Defines the staged architecture separating model inference from tool-environment provisioning, with durable session ownership and workspace bindings. This is the umbrella design for much of this cycle’s work.

2. **`#12867` — Stage D follow-ups for durable lifecycle, Turns, Actions, AgentDefinition**  
   https://github.com/QwenLM/qwen-code/issues/12867  
   11 comments. Continues the Managed Agent Stage D contract beyond D1–D3, covering durable lifecycle, turns, actions, admission profile, and agent definition.

3. **`#13030` — Admit read-only search tools in Hosted Workspace profile**  
   https://github.com/QwenLM/qwen-code/issues/13030  
   8 comments. Requests allowing `list_directory`, `glob`, and `grep_search` for hosted agents via the existing Broker path, expanding hosted agent capability while staying read-only.

4. **`#13062` — Speculative accept that fails to apply files emits no telemetry**  
   https://github.com/QwenLM/qwen-code/issues/13062  
   8 comments. Reports an observability gap: a copy failure during speculative accept can still appear successful except for file count, with missing `SpeculationEvent` telemetry.

5. **`#13019` — Recover expired tool publication candidates safely**  
   https://github.com/QwenLM/qwen-code/issues/13019  
   7 comments. Follow-up on remote publication/deadline handling, proposing safe recovery for uncertain `CANDIDATE` operations under fixed deadlines.

6. **`#12959` — Add `maxConcurrentBackgroundAgents` and retry transient API errors**  
   https://github.com/QwenLM/qwen-code/issues/12959  
   4 comments. Addresses parallel background subagents overwhelming API endpoints with HTTP 400s; requests concurrency limits and retry behavior.

7. **`#12467` — LSP diagnostics can report clean result after failed/unavailable queries**  
   https://github.com/QwenLM/qwen-code/issues/12467  
   4 comments. Misleading “No diagnostics found” when the language server did not actually return results can cause the model to assume code is clean.

8. **`#13106` — `cd` segments silently drop redirect targets from Write deny checks**  
   https://github.com/QwenLM/qwen-code/issues/13106  
   P1 security bug. A compound command like `cd somedir > .qwen/settings.json` yields no extracted operations while the shell truncates the redirect target, bypassing write checking.

9. **`#13076` — Windows flash-exits with no output**  
   https://github.com/QwenLM/qwen-code/issues/13076  
   User-facing CLI bug. `qwen` on Windows exits immediately with no error, launcher does not surface `spawnSync.result.error`, reported on PowerShell and cmd.

10. **`#12770` — Extension lifecycle events ignore privacy.usageStatisticsEnabled**  
    https://github.com/QwenLM/qwen-code/issues/12770  
    Closed. Extension install/uninstall/update events were still queued for RUM upload despite privacy settings disabling usage statistics.

## 4. Key PR Progress

1. **`#13033` — Defer agent and goal declarations by default**  
   https://github.com/QwenLM/qwen-code/pull/13033  
   Makes `agent`, `list_agents`, `get_goal`, `update_goal`, and `propose_goal` discoverable on demand rather than eager.

2. **`#13129` — Durable Hosted Hooks (H2)**  
   https://github.com/QwenLM/qwen-code/pull/13129  
   Implements H2 for hosted workspace sessions: durable hook catalogs, occurrence plans, execution records, dynamic registration, and original-owner recovery.

3. **`#13083` — Hosted Turn takeover and G1 failover E2E**  
   https://github.com/QwenLM/qwen-code/pull/13083  
   Harness half of Stage G turn takeover; loads parked sessions at checkpoints and settles runtime executions under original IDs.

4. **`#13110` — Add hosted file history and undo**  
   https://github.com/QwenLM/qwen-code/pull/13110  
   Preserves original file contents before Write/Edit and enables rewind after detach/load for hosted workspace sessions.

5. **`#12582` — Add isolated remote Qwen runtime hosts**  
   https://github.com/QwenLM/qwen-code/pull/12582  
   Opt-in remote runtime for persistent workspace Agents, with outbound enrollment, scoped credentials, leased work, and progress streaming.

6. **`#13128` — Surface failed/unavailable LSP diagnostics as errors**  
   https://github.com/QwenLM/qwen-code/pull/13128  
   `NativeLspService` no longer reports clean when no LSP server is ready; operations reject instead.

7. **`#13114` — Recover publication expiry with bounded verification**  
   https://github.com/QwenLM/qwen-code/pull/13114  
   Distinguishes deadline expiry, fencing, and contention from deterministic rejection; recovers original operations with identical bytes and keys.

8. **`#12513` — Batch workspace session live-state snapshots**  
   https://github.com/QwenLM/qwen-code/pull/12513  
   Single read-only request for live-state snapshots of 1–20 selected workspaces, each with independent success/error results.

9. **`#13126` — Recover failed reminder-less notification turn as `interrupted_prompt`**  
   https://github.com/QwenLM/qwen-code/pull/13126  
   Fixes the remaining half of `#12042` for failed background-notification turns that used to recover as `clean`.

10. **`#12585` — Persist embedded text resources for transcript replay**  
    https://github.com/QwenLM/qwen-code/pull/12585  
    Persists bounded ACP embedded text resource blocks with the owning prompt and replays them as typed user chunks.

## 5. Feature Request Trends

- **Managed Agent durability and hosted workspace expansion**  
  Requests around durable lifecycle, Stage G/H authoritative history, hosted hooks, and read-only hosted search tools — see #12380, #12867, #12952, #13030.

- **Remote/web-shell distribution and platform follow-ups**  
  Hosted file history/undo (#13124, #13110), Android Phase 2 regression and export UX (#13111), and remote runtime hosts (#12582).

- **Background automation and concurrency controls**  
  Bounded cooldown after no-op memory extraction (#13004) and maximum concurrent background agents with transient-error retries (#12959).

- **Observability and diagnostic correctness**  
  Telemetry for speculative-accept failures (#13062), truthful LSP diagnostics (#12467), and preservation of record provenance (#12042).

- **Credential and shell security hardening**  
  `cd` redirect write-deny gaps (#13106), agent host re-enrollment credential handling (#13122), and `allowHttp` downgrade of enrollment-token transport (#13123).

## 6. Developer Pain Points

- **Silent false success and missing telemetry**  
  Clean LSP results on failed queries (#12467), speculative accept copy failures without telemetry (#13062), and retry counters keyed on exact validation-message text (#13073).

- **CLI/platform friction**  
  Windows `qwen` launcher exits with no output and no diagnostic (#13076), reducing debuggability for desktop users.

- **CI instability and autofix churn**  
  Main CI test failures requiring autofix (#12714) and workarounds for stale yamllint in runner images (#12650).

- **Privacy-settings inconsistencies**  
  Extension lifecycle events uploaded to RUM despite `usageStatisticsEnabled: false` (#12770).

- **Session and notification classification issues**  
  Provenance not surviving the API-history projection (#12042); related PR #13126 addresses one shape, with follow-ups recorded.

- **Background-agent concurrency limits**  
  Launching multiple background subagents can hit API endpoint limits with HTTP 400s (#12959).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



# DeepSeek TUI Community Digest — 2026-10-01

---

## 1. Today's Highlights

The v0.10.1 integration wave (#6782) is actively advancing with five locally qualified batches covering UI durability, runtime API fixes, and config stream/retry/transport resolution. A major batch of community PRs from @asto18089 (seven total) is being landed as-is via an integration branch due to fork push restrictions. Several critical bugs were reported against the 0.10.0 release — notably Linux Full Access regression (#6787), CPU usage regression (#6728), and `/retry` semantics not matching documented behavior (#6788).

---

## 2. Releases

No new releases in the last 24 hours. The v0.10.1 integration branch is the active development line.

---

## 3. Hot Issues

**#6803 — A failed tool call leaves no tool output, so the thread becomes unsendable after a runtime restart** [🔗](https://github.com/Hmbown/Codewhale/issues/6803)
A tool call that fails is persisted with `status: "failed"` and `metadata.tool_result_for: null`, leaving no recovery path. While the process is alive the failure is invisible; after a restart the thread cannot be re-sent. This is a session-corruption bug that breaks resumability. Zero reactions, but high severity for anyone relying on runtime restarts.

**#6788 — `/retry` (and `/undo`) only rolls back the UI display layer: model context and persisted session retain the rolled-back messages** [🔗](https://github.com/Hmbown/Codewhale/issues/6788)
The documented `/retry` semantics ("undo the last failed exchange and resend the previous user message") are not honored. The UI hides the message, but the model context keeps accumulating duplicates and the on-disk session is never synced. After reload, all rolled-back messages return. This is a fundamental semantic mismatch between UX and engine. Reported by a Chinese-speaking user with detailed repro steps.

**#6787 — Linux: Full Access does not reach agents in 0.10.0 (guardian denies or agents appear stuck)** [🔗](https://github.com/Hmbown/Codewhale/issues/6787)
On Linux, Codewhale 0.10.0 fails to grant Full Access to sub-agents. The Auto-Review guardian denies them (fail-closed after ~90 s) or they appear stuck. The user successfully downgraded to 0.9.x. This is a permission-model regression in the newest release.

**#6728 — CPU Usage Regression: v0.9.12 (idle) → v0.9.13 (moderate) → v0.10.0 (heavy)** [🔗](https://github.com/Hmbown/Codewhale/issues/6728)
Binary analysis on FreeBSD 15.0 shows a steady CPU climb across the last three releases. v0.10.0 runs heavy CPU even at idle. A real regression that erodes the value of the performance-focused TUI.

**#6800 — Stall recovery is UI-side only: the engine keeps the wedged turn, the next send is refused for 60 s, and the app stops accepting input** [🔗](https://github.com/Hmbown/Codewhale/issues/6800)
The UI "recovers" from a wedged turn but the engine still holds the same turn in flight. The app and engine disagree: the next message can't be admitted (60 s dispatch bound, then refused) and the transcript stops updating. A state-divergence bug that makes the app appear frozen.

**#6795 — Inline provider error frames bypass every retry budget: the turn dies on the first frame** [🔗](https://github.com/Hmbown/Codewhale/issues/6795)
OpenAI-compatible providers (specifically OpenRouter) can return HTTP 200 with a chunk-level `{"error":...}` frame. Codewhale treats the HTTP 200 as success and never retries, so a single bad frame kills the entire turn despite retry budgets being configured. Retry budgets are effectively neutered for this failure mode.

**#6700 — Expose stream retry budgets and transport timeouts as configuration** [🔗](https://github.com/Hmbown/Codewhale/issues/6700)
All network-tolerance parameters are compiled-in `const` values with no configuration surface. Operators on proxy'd or unreliable networks have no recourse except patching the binary. This is the feature request that PR #6784 is now addressing.

**#6652 — After running for a long time, TUI scrolling becomes laggy, like jelly** [🔗](https://github.com/Hmbown/Codewhale/issues/6652)
Long-running sessions degrade TUI scroll performance — part of the content scrolls while another part lags. Likely a memory or layout-cache issue in the terminal renderer. Reproducible after ~3+ hours of continuous use.

**#6511 — Single-turn-loop guard misses the sub-agent and RLM loops; the RLM loop is unlogged, drops history and returns an empty answer** [🔗](https://github.com/Hmbown/Codewhale/issues/6511)
The single-turn-loop guard detects model calls by identifier suffix matching (`stream | create_message | completion | complete`), but two loops dodge this detection by spelling. The RLM loop in particular is unlogged, drops conversation history, and returns empty answers. Found in a repo-wide legacy sweep.

**#6721 — Emergency compaction — the impact on the `save session` task** [🔗](https://github.com/Hmbown/Codewhale/issues/6721)
An FYI/report: the user's "save session" command (a personalized context-transfer adjunct) was cut off during emergency compaction, impacting reliability. Not filed as a bug per se, but highlights that compaction can silently interrupt long-running agent commands.

---

## 4. Key PR Progress

**#6782 — v0.10.1 integration: wave/0.10.1-next** [🔗](https://github.com/Hmbown/Codewhale/pull/6782)
The main integration branch for the upcoming 0.10.1 release. Current head `ce1ecc8dc`. Five locally qualified batches (3–6) with completion receipts in `opus55-0101-completion-20260930/`. Batch 3 covers UI views and durability follow-ups. This is the trunk line to watch.

**#6799 — Land asto18089's queue as itself: #6736, #6737, #6738, #6740, #6742, #6743, #6744** [🔗](https://github.com/Hmbown/Codewhale/pull/6799)
Lands seven of @asto18089's open PRs as themselves. The fork's branches reject maintainer pushes (HTTP 403), so `cw-land` applies the fixes on an integration branch instead. Each original PR head is preserved for attribution. Covers Windows ExecutionPolicy, search fallback chains, and model-facing text fixes.

**#6793 — refactor(commands): complete session group shapes (FEAT-026)** [🔗](https://github.com/Hmbown/Codewhale/pull/6793)
Completes the session-group adoption and extraction boundary for all 17 commands including `/structcopy`. Submitted head `60235a4`. Hosted CI awaits administrator approval; Devin skipped full review due to trial expiry. This is the final slice under EPIC-006.

**#6784 — fix(config): resolve canonical stream, retry and transport settings** [🔗](https://github.com/Hmbown/Codewhale/pull/6784)
Refs #6700. Introduces a canonical `[stream]` config table with twelve typed keys: open/chunk/connect timeouts, HTTP/1 pinning, stream budgets, TCP keepalive, HTTP/2 PING interval and ACK timeout. Resolves through the existing Config owner. Directly addresses the "no configuration surface" pain point.

**#6771 — fix(runtime-api): keep file modes, allow PUT preflight, undo rejected provider switch, list all memory** [🔗](https://github.com/Hmbown/Codewhale/pull/6771)
No-Issue verified repair. Runtime API now preserves workspace file permissions on replacement and honors process umask on creation, advertises PUT in CORS preflight, restores exact prior config when a provider switch is rejected, and lists all memory routes. Four defects fixed in one sweep.

**#6759 — fix(tools): shell job retention, output deltas, and child process lifetimes** [🔗](https://github.com/Hmbown/Codewhale/pull/6759)
No-Issue verified bug-hunt findings. Long-running shell jobs remain available after completion; output polling returns only new bytes without repeating retained text; non-interactive commands receive EOF; cancellation/timeout owns child-process cleanup. Original commits `5cf67edc`, `d314fa46` preserved.

**#6772 — fix(app-server): keep daemon threads, config, and bridge consistent across restarts** [🔗](https://github.com/Hmbown/Codewhale/pull/6772)
No-Issue verified. App-server now preserves client-to-runtime thread links across daemon restarts, rejects unknown thread IDs before starting work, retains stored workspaces on resume/fork, and persists configuration changes before reporting success.

**#6802 — Land #6741 as itself: MCP tools/call budget, one deadline per request** [🔗](https://github.com/Hmbown/Codewhale/pull/6802)
Lands @asto18089's #6741. Gives MCP `tools/call` its own request budget and stops undercutting long executions. The original head `3ffbb9017248` is an ancestor of the integration branch. Fork push restrictions apply (HTTP 403).

**#6777 — fix: pager whitespace and wrap width, iterative /tree render, macOS sleep inhibitor lifetime** [🔗](https://github.com/Hmbown/Codewhale/pull/6777)
Long text and styled pagers now preserve indentation, repeated spaces, and source text for copying. Display rows are cached at actual body width (including scroll rail) so paging reaches the final row. Resize keeps the source line and current search match in view. Also fixes macOS sleep inhibitor lifetime.

**#6775 — fix(extension-host): widen the handshake budget to 30 s (Windows CI flake)** [🔗](https://github.com/Hmbown/Codewhale/pull/6775)
Refs #6600. A slow Windows extension-host start could exceed the old five-second handshake deadline and disable extensions for the session. Now gives `spawn → hello → initialize → ready` 30 seconds, matching the MCP stdio handshake budget. Handshake remains in the background; healthy start no longer disables extensions.

---

## 5. Feature Request Trends

**Configuration & observability for network behavior.** The single most-requested direction: make stream retry budgets, transport timeouts, and HTTP/2 tuning configurable instead of hardcoded. Issues #6700, #6795, #6796 all cluster around this. PR #6784 is the first concrete delivery.

**Retry visibility in the transcript.** Operators want to distinguish "(a) retrying and will recover" from "(b) retrying and will exhaust budget" from "(c) turn failed" — currently all three look identical in the TUI (#6796).

**Documentation localization to Chinese.** Issue #5482 (closed, partially restructured) reflects a growing Chinese user base hitting English-only docs. Machine translation introduces errors and several source docs are already stale.

**Reusable GitHub Action for Codewhale review.** Issues #6486 and #6781 want a one-click install action that works from any repository using the user's own model key or Codewhale account, shipping alongside 0.10.1.

**Unified install experience across all three doors.**

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

Thinking Process:

1.  **Understand the Goal**: The user wants a structured English digest of the ComfyUI community data for the date `2026-10-01` (based on the provided GitHub data). The target audience is technical developers/analysts. The digest needs to follow a specific structure:
    1.  **Today's Highlights** (2-3 sentences)
    2.  **Releases** (omit if none - none in the last 24h)
    3.  **Hot Issues** (Pick 10 noteworthy issues, explain why they matter, community reaction, include links)
    4.  **Key PR Progress** (Pick 10 important PRs, describe features/fixes, include links)
    5.  **Feature Request Trends** (Distill most-requested feature directions)
    6.  **Developer Pain Points** (Summarize recurring developer frustrations/high-frequency requests)

2.  **Analyze the Input Data**:
    *   **Latest Releases**: None in the last 24 hours.
    *   **Latest Issues**: 32 items total, showing top 30. Key ones:
        *   #15255: Dynamic VRAM streaming crashes all generations with HostBuffer.read_file_slice failed -> CUDA OOM (regression after Aug 3 2026 update). Comments: 72. Core issue, NVIDIA workaround provided (`--cuda-device 0` or `--disable-pinned-memory`).
        *   #15488: MiniMax H3 reproducibly causes `GPU is lost` / TDR black-screen on RTX 5070 Ti when system has 64 GB RAM; stable when capped to 32 GB. Comments: 16.
        *   #16246: BSOD in dxgmms2.sys (VidMm page-in use-after-free) on 6 GB RTX 3050 since v0.35.0 / comfy-aimdo 0.5.3 dynamic VRAM loading. Comments: 11, 👍: 3.
        *   #8734: ComfyUI persistently loads old workflow despite clean install and data deletion. Comments: 7.
        *   #16342: MiniMax H3: aimdo memory compile error 'could not start recording' on a single RTX 5090 with a stock text-to-video graph. Comments: 6.
        *   #15157: trying to get a first image to video to work (User Support). Comments: 4.
        *   #15053: SeedVR2 -- Obscene memory use on MPS during tiled VAE encode/decode. Comments: 4.
        *   #15659: subgraphs: collection of bugs when using comfy core nodes. Comments: 4, 👍: 1.
        *   #16648: [Feature] Extend Start Loop so it allows input types like Latent, Image, Audio. Comments: 3.
        *   #16498: Qwen2.1 doesn't utilize or offload to RAM. Comments: 3.
        *   #16670: [CLOSED] Built-in Image Compare node appears completely empty when Nodes 2.0 is enabled. Comments: 2.
        *   #15110: Z-Image Qwen3-4B GPU text encoder produces all-NaN conditioning on Blackwell sm_120. Comments: 2.
        *   #16694: MINIMAX H3 lora load issue [Comfyui 0.37.4]. Comments: 1.
        *   #15591: CUDA illegal memory access / HostBuffer.truncate failed with comfy-kitchen 0.2.31 during dynamic VRAM load (MiniMaxH3). Comments: 1.
        *   #16668: WanAnimate2ToVideo produces an all-zero latent (uniform gray video) while a plain Wan T2V graph works (AMD). Comments: 1.
        *   #16664: [Feature] Sort options and Type filter in Asset System. Comments: 1, 👍: 1.
        *   #16509: Qwen3.5 text generation attends over the full KV capacity every step, decode speed drops with max_length. Comments: 1.
        *   #16701: Freeze instalation (Freeze at 42% when create new i...). Comments: 0.
        *   #16697: Recent updates keep downgrading sage attention 2.2. Comments: 0.
        *   #16690: IndexError: tuple index out of range in MiniMaxH3.extra_conds when an audio-only latent is passed. Comments: 0.
        *   #16685: `--auto-launch` opens `http://0.0.0.0:8188` (unusable in a browser) on Linux, while Windows correctly opens `127.0.0.1`. Comments: 0.
        *   #16687: BSOD/OOM MiniMax H3 full INT8 ConvRot OOM on AMD gfx1151 despite 120 GiB RAM. Comments: 0.
        *   #16686: MiniMax-H3 VAE decode: Expected all tensors to be on the same device. Comments: 0.
        *   #16683: Cyrillic characters are replaced with .notdef glyph. Comments: 0.
        *   #16682: Select Model Device forces float16 on FP8 models that do not support it (Qwen Image Edit -> black image). Comments: 0.
        *   #16679: LTXVPreprocess crashes on 4-channel (RGBA) images. Comments: 0.
        *   #16675: SAM3: moving the text encoder with "Select CLIP Device" fails with 'NoneType' object has no attribute 'keys'. Comments: 0.
        *   #16673: MiniMaxH3AddGuide ignores multi-frame video guide on MPS; works on CUDA. Comments: 0.
        *   #16671: workflowService.activateLoadedWorkflow: unguarded changeTracker.reset() throws TypeError when reopening an unloaded workflow. Comments: 0.
    *   **Latest Pull Requests**: 50 items, showing top 20.
        *   #16368: chore(openapi): sync shared API contract from cloud@8295427.
        *   #16578: Implement the asset export API locally (CORE-454) - FE API zip outputs.
        *   #16699: Test merge.
        *   #16700: ComfyUI backport release v0.38.1 (cherry-picks).
        *   #16327: feat(3d): light_info type, CreateLightInfo and RenderLight nodes.
        *   #16693: Update workflow templates to v0.11.73.
        *   #16659: perf(assets): let the partial live-path index serve live-row-at-path lookups.
        *   #16634: feat(assets): report scan CPU and paused time, classify scan failures.
        *   #16695: [Partner Nodes] feat(HeyGen): add nodes for HeyGen Video 1.0 model.
        *   #16698: Fix minimax vae offload issue.
        *   #16681: Fuse H3 MLP INT8 output with indexed modulation gate.
        *   #16696: fix(assets): batch the prune's and offline marking's writes so foreground saves aren't locked out.
        *   #16689: [Partner Nodes] feat(Ideogram): add nodes for Ideogram 4.5 model.
        *   #16654: Fix in-place gated residual breaking the Qwen-Image-2.1 training path.
        *   #16019: Support Bernini v2 single-file pipeline.
        *   #16677: Release packed MiniMax H3 embedding temporaries before blocks.
        *   #16692: Fix wildcard browser URL for auto-launch (fixes #16685).
        *   #15020: Add native Hunyuan3D 2.1 PBR paint.
        *   #16645: fix(assets): batch prefix filters so scans work with many model folders.
        *   #16684: Fix Cyrillic characters render on text overlay (fixes #16683).

3.  **Drafting the Sections**:

    *   **Today's Highlights (2026-10-01)**:
        *   Summarize key developments: Heavy focus on MiniMax H3 stability, memory management, and dynamic VRAM streaming fixes, alongside backend asset system optimizations and partner node integrations (HeyGen, Ideogram). No new core releases in the last 24 hours, but backports and critical fixes are in flight (v0.38.1 backport).
        *   Draft: *Today's highlights focus heavily on the stability of the dynamic VRAM streaming and MiniMax H3 model pipeline, with multiple critical bug fixes and performance PRs merged. Core development is actively addressing severe CUDA OOM regressions, AMD GPU driver crashes, and database locking issues during asset scans, while expanding the partner node ecosystem (Ideogram, HeyGen) and local asset export APIs.* (Keep it concise and professional).

    *   **Releases**:
        *   None in the last 24 hours. (Mention the v0.38.1 backport PR #16700 is in progress to address existing issues).

    *   **Hot Issues (Pick 10 noteworthy issues)**:
        *   Need to select the top 10 most impactful issues based on technical severity, comment count, and recency.
        *   1. **#15255 - Dynamic VRAM streaming crashes with CUDA OOM (72 comments)**: Major regression after Aug 3 update causing `HostBuffer.read_file_slice failed`. Workarounds exist but core fix is awaited. [Link](https://github.com/Comfy-Org/ComfyUI/issues/15255)
        *   2. **#15488 - MiniMax H3 causes GPU loss/TDR on RTX 5070 Ti with 64 GB RAM (16 comments)**: Hardware-specific instability where capping Windows memory to 32 GB stabilizes it. Points to complex memory/address space issues. [Link](https://github.com/Comfy-Org/ComfyUI/issues/15488)
        *   3. **#16246 - BSOD in dxgmms2.sys on RTX 3050 since v0.35.0 / comfy-aimdo 0.5.3 (11 comments, 3 👍)**: Severe system-level crash (use-after-free in video memory manager) triggered by dynamic VRAM loading. High impact on mid-range Windows GPUs. [Link](https://github.com/Comfy-Org/ComfyUI/issues/16246)
        *   4. **#8734 - Persistent old workflow loading despite clean install (7 comments)**: Core UI state persistence bug where old workflows override clean configurations, frustrating users setting up fresh environments. [Link](https://github.com/Comfy-Org/ComfyUI/issues/8734)
        *   5. **#16342 - MiniMax H3 aimdo memory compile error 'could not start recording' on RTX 5090 (6 comments)**: Blocking issue for RTX 5090 users running basic text-to-video workflows, bypassed only by disabling the comfy compiler. [Link](https://github.com/Comfy-Org/ComfyUI/issues/16342)
        *   6. **#15053 - SeedVR2 obscene memory use on MPS during tiled VAE encode/decode (4 comments)**: Severe performance/memory bottleneck on Apple Silicon (MPS) users trying to do tiled VAE processing. [Link](https://github.com/Comfy-Org/ComfyUI/issues/15053)
        *   7. **#15659 - Subgraphs collection of bugs with comfy core nodes (4 comments, 1 👍)**: Highlights fragmentation in the Subgraphs feature when integrating core nodes like ksampler, exposing missing inputs. [Link](https://github.com/Comfy-Org/ComfyUI/issues/15659)
        *   8. **#16648 - Feature: Extend Start Loop to allow Latent, Image, Audio inputs (3 comments)**: Workflow loop constraints limit dynamic input types; users request broader type flexibility for advanced looping workflows. [Link](https://github.com/Comfy-Org/ComfyUI/issues/16648)
        *   9. **#16498 - Qwen2.1 doesn't utilize or offload to RAM (3 comments)**: Memory offloading mechanism failure for Qwen models, causing high VRAM pressure when RAM offloading is expected. [Link](https://github.com/Comfy-Org/ComfyUI/issues/16498)
        *   10. **#16685 - `--auto-launch` opens unusable `0.0.0.0` URL on Linux (0 comments but high dev relevance)**: Cross-platform inconsistency where Linux auto-launch fails to connect to the local browser, while Windows correctly uses `127.0.0.1`. [Link](https://github.com/Comfy-Org/ComfyUI/issues/16685) (Note: PR #16692 is already fixing this). Let's swap this with #16682 or another high-impact bug if needed, but it's a nice dev UX issue. Let's look at **#16682 - Select Model Device forces float16 on FP8 models (0 comments)**: Causes black images on Qwen Image Edit due to incorrect dtype casting. Good to list. Let's stick to #16685 as it has an active PR fix and represents a nice open-source contribution point, or #16682. Let's write up 10 strong ones. Let's include #16682: Select Model Device forces float16 on FP8 models causing black images. [Link](https://github.com/Comfy-Org/ComfyUI/issues/16682)

    *   **Key PR Progress (Pick 10 important PRs)**:
        *   1. **#16700 - ComfyUI backport release v0.38.1**: Cherry-picks critical fixes including int8/int4 cache selection crash fixes, partner nodes (Sonnet, Ideogram, HeyGen), and workflow templates. [Link](https://github.com/Comfy-Org/ComfyUI/pull/16700)
        *   2. **#16578 - Implement the asset export API locally (CORE-454)**: Projections the shared asset export contract to core, enabling frontend zip outputs through a unified local and cloud code path. [Link](https://github.com/Comfy-Org/ComfyUI/pull/16578)
        *   3. **#16692 - Fix wildcard browser URL for auto-launch**: Fixes the `0.0.0.0` browser launch issue on Linux, converting it to `127.0.0.1` for all platforms with dedicated tests. [Link](https://github.com/Comfy-Org/ComfyUI/pull/16692)
        *   4. **#16698 - Fix minimax vae offload issue**: Targeted fix for MiniMax H3 VAE offloading, addressing device mismatch and OOM issues. [Link](https://github.com/Comfy-Org/ComfyUI/pull/16698)
        *   5. **#16681 - Fuse H3 MLP INT8 output with indexed modulation gate**: Performance optimization PR for MiniMax H3, fusing MLP FC2 with the modulation gate to avoid full gated-output intermediates. [Link](https://github.com/Comfy-Org/ComfyUI/pull/16681)
        *   6. **#16677 - Release packed MiniMax H3 embedding temporaries before blocks**: Memory optimization PR releasing local references to projected embeddings before entering transformer blocks, reducing peak VRAM usage. [Link](https://github.com/Comfy-Org/ComfyUI/pull/16677)
        *   7. **#16654 - Fix in-place gated residual breaking Qwen-Image-2.1 training path**: Fixes a subtle tensor modification bug in `_gated_residual` that broke the training path for Qwen-Image-2.1. [Link](https://github.com/Comfy-Org/ComfyUI/pull/16654)
        *   8. **#16645 - fix(assets): batch prefix filters for scans with many model folders**: Solves database query failures (`Expression tree is too large`) for installs with >500 model folders by batching folder filters. [Link](https://github.com/Comfy-Org/ComfyUI/pull/16645)
        *   9. **#16696 - fix(assets): batch the prune's and offline marking's writes**: Prevents SQLite database lock errors during large asset pruning or offline scans, improving foreground output saving stability. [Link](https://github.com/Comfy-Org/ComfyUI/pull/16696)
        *   10. **#16327 - feat(3d): light_info type, CreateLightInfo and RenderLight nodes**: Expands the 3D toolset with standardized light info types and a preview widget for lighting setups. [Link](https://github.com/Comfy-Org/ComfyUI/pull/16327)
        *   *(Alternative)*: #16684 Fix Cyrillic characters render on text overlay. Let's list #16684 as it resolves a common UI bug. [Link](https

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>



Based on the GitHub activity from `ollama/ollama` leading up to October 1, 2026, here is the structured community digest.

---

### 1. Today's Highlights
Ollama is actively stabilizing its latest backend and API features, notably the System One API and structured JSON outputs, with key fixes for property ordering and tool message handling. On the infrastructure side, the team and community contributors are addressing severe platform-specific regressions, particularly silent GUI failures on macOS, DLL corruption on Windows updates, and CUDA memory errors on RTX 5090s.

---

### 2. Releases
*No new releases were published in the last 24 hours.* (Note: The community is currently discussing the release of v0.35.0, specifically regarding its pre-release tagging convention in issue #18706).

---

### 3. Hot Issues
Selected 10 key issues that are driving community discussion or represent critical technical roadblocks:

*   **[#18712] Windows auto-update leaves CUDA DLL as .tmp (CPU fallback)**  
    *   **Why it matters:** A critical regression where Windows automatic updates leave `ggml-cuda.dll` as a `.tmp` file, causing the system to silently fall back to CPU-only execution with 0 B VRAM detected.  
    *   **Status/Reaction:** High impact for Windows GPU users; requires manual cleanup or patch to restore GPU acceleration. ([Link](https://github.com/ollama/ollama/issues/18712))
*   **[#18368] Chat processing fails silently after 60s on macOS GUI**  
    *   **Why it matters:** Long document processing halts completely without any GUI error notification, forcing users into a dead end on macOS Sequoia.  
    *   **Status/Reaction:** Major UX frustration; 14 comments discussing potential GUI thread freezing issues. ([Link](https://github.com/ollama/ollama/issues/18368))
*   **[#18642] CUDA illegal memory access on RTX 5090 (Windows)**  
    *   **Why it

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

Thinking Process:

1.  **Understand the Goal**: The user wants a structured community digest for `llama.cpp` dated 2026-10-01 (based on the provided data snapshot). The persona is a technical analyst focused on AI developer tools. The output needs to be in English, concise, professional, and structured into 6 specific sections:
    1. Today's Highlights (2-3 sentences)
    2. Releases (summarize changes if new versions exist)
    3. Hot Issues (10 noteworthy issues, why they matter, community reaction)
    4. Key PR Progress (10 important PRs, features/fixes)
    5. Feature Request Trends (distill most requested directions)
    6. Developer Pain Points (recurring frustrations / high-frequency requests)

2.  **Analyze the Input Data**:
    *   **Data source**: `github.com/ggerganov/llama.cpp` (now under `ggml-org/llama.cpp`).
    *   **Latest Releases (last 24h)**:
        *   `b11302`: glm5-next: give dead indexer slots unique scatter rows (#29745)
        *   `b11301`: ggml/gguf: fix integer overflow (#29384)
        *   `b11299`: cli: exit on stdin EOF and drop the console wide Ctrl+C broadcast (#29722)
        *   `b11298`: mimo: support dflash (convert + feature extraction) (#29650)
        *   `b11297`: jinja: support coerced array attributes (#29574)
        *   `b11295`: ci: fix Models Backend Check by shortening the hrm_text fixture (#29744)
        *   `b11294`: llama: llama_prefetch_rows (#29599)
        *   `b11293`: ggml: add BF16 unary, GLU, binary and scale ops (CPU, CUDA) (#29675)
        *   `b11292`: cpu: accept BF16 in src1 of mul_mat (#28937)
        *   `b11284`: openvino: serve GET_ROWS on a weight view from the base Constant (#28381)
    *   **Latest Issues (top 30 by comment count, total 50 items)**:
        *   #21468 [CLOSED] [bug-unconfirmed] cache reuse is not supported for Gemma 4 models despite -fa enabled and --swa-full (11 comments, 21 👍)
        *   #27546 [OPEN] [bug-unconfirmed] Misc. bug: OpenVINO on i5 1345u GPU throws exception (9 comments)
        *   #29473 [OPEN] Eval bug: ggml-hexagon on Snapdragon 7 Gen 4 (SM7750, HTP v73) - HMX MUL_MAT returns inf for n>=5... (7 comments)
        *   #29758 [OPEN] [enhancement] Feature Request: Improve Security against Prompt Injection attacks (5 comments)
        *   #29623 [OPEN] [bug-unconfirmed] Vulkan ErrorDeviceLost (vk::Queue::submit) on AMD Radeon AI PRO R9700 when SAM/ReBAR enabled (5 comments)
        *   #29664 [CLOSED] [bug-unconfirmed] Misc. bug: windows: when the simple input reader reads EOF on stdin, all processes in the console are sent ctrl+c (4 comments)
        *   #25227 [OPEN] [stale] webui: model selector — org-less models visually attach to the previous org group (3 comments)
        *   #29314 [OPEN] fattn failure on gfx1201 in test-backend-ops (2 comments)
        *   #26540 [CLOSED] [enhancement, stale] Streaming behavior of the WebUI (2 comments, 3 👍)
        *   #26123 [OPEN] Hexagon: dspqueue_read failed: 0x0000002e during graph compute on Snapdragon 8 Gen 2 (v73)... (2 comments)
        *   #29771 [OPEN] [bug-unconfirmed] Eval bug: Metal aborts during long generation in ggml_metal_buffer_get_tensor (1 comment)
        *   #29759 [OPEN] [bug-unconfirmed] Misc. bug: 76a5bc86d1bdfae96feccdc7a41fea535e792e6e breaks symlinked cache dirs for RPC (1 comment)
        *   #29764 [OPEN] Vulkan: ggml_vk_get_device publishes a device before building it, unlocked: concurrent first inits abort... (1 comment)
        *   #26982 [OPEN] [bug] HIP: check why the pertubation from -funsafe-math-optimizations is so large (1 comment)
        *   #21125 [CLOSED] [bug] Compile bug: convert_lora_to_gguf.py fails for Qwen3.5 LoRA at _reorder_v_heads... (1 comment)
        *   #29383 [CLOSED] [bug-unconfirmed] Misc. bug: uncaught integer overflows during model loading (1 comment)
        *   #29727 [OPEN] [bug-unconfirmed] Misc. bug: Receives tool list, but says zero tools (1 comment)
        *   #29735 [OPEN] [bug-unconfirmed] CLIP vision buffer is locked to the warmup size — larger images force a slow reallocation... (1 comment)
        *   #29665 [CLOSED] [bug-unconfirmed] Eval bug: GGUF reader loads an out-of-range gguf_type from an untrusted file before validating it (1 comment)
        *   #29718 [CLOSED] [bug-unconfirmed] Eval bug: llama_memory_seq_cp: cross-stream copy with a partial range hits GGML_ASSERT (1 comment)
        *   #29704 [CLOSED] [bug-unconfirmed] Eval bug: llama-adapter: 5 of 6 accessors crash on a NULL adapter (1 comment)
        *   #28950 [CLOSED] [bug-unconfirmed] Misc. bug: llama download -hf repo:model does not download mmproject (0 comments)
        *   #27904 [OPEN] Make test-backend-ops perf --output csv usefull (0 comments)
        *   #29760 [OPEN] [enhancement] Feature Request: Split --reranking into two flags for router/model (0 comments)
        *   #29694 [CLOSED] [bug-unconfirmed] Misc. bug: /rerank: negative top_n returns HTTP 500 (0 comments)
        *   #29690 [CLOSED] [bug-unconfirmed] Eval bug: json-schema-to-grammar: unbounded schema nesting still crashes llama-server (CVE-2026-52130)... (0 comments)
        *   #29686 [CLOSED] [bug-unconfirmed] Eval bug: dist sampler aborts on a NaN logit (assert(found) at llama-sampler.cpp:1211)... (0 comments)
        *   #29684 [CLOSED] [bug-unconfirmed] Eval bug: Out-of-range token id passed to llama_vocab_get_attr() terminates the process (llama-vocab.cpp:3190) (0 comments)
        *   #29661 [CLOSED] [bug-unconfirmed] Eval bug: Vocab load aborts on duplicated token text (GGML_ASSERT at llama-vocab.cpp:2519) (0 comments)
        *   #29729 [CLOSED] [bug-unconfirmed] Eval bug: llama_memory_seq_div: d=0 divides by zero in the base KV cache (SIGFPE) (0 comments)
    *   **Latest Pull Requests (top 20)**:
        *   #29772 [OPEN] vulkan: FWHT kernels for block widths above 512 (bri-prism)
        *   #29600 [OPEN] [model] Runtime support for Prism Bonsai 2 27B (bri-prism)
        *   #29435 [OPEN] [ggml, CUDA] CUDA: prefer whole-tile FlashAttention scheduling for efficient two-stage kernels (anujj)
        *   #29765 [CLOSED] [ggml, OpenCL] ggml-opencl: replace alloca() with std::vector (angt)
        *   #29698 [OPEN] [ggml, merge ready, OpenCL] opencl: mark vec subgroup bcast as supported by Adreno E17 compiler (lhez)
        *   #29770 [OPEN] [testing, ggml, Apple Metal] metal: use bf16 math for mxfp4 mul-mat (ggerganov)
        *   #29761 [OPEN] [model, conversion] Qwen4Exp: add MTP (am17an)
        *   #29753 [OPEN] [ggml, CUDA] cuda: route sm70 to the Turing MMVQ nwarps table (tkittich)
        *   #29683 [CLOSED] [ggml, CUDA] cuda: guard the iq4_nl dequantize row kernel against short rows (yeahdongcn)
        *   #29633 [OPEN] [ggml, CUDA] CUDA: use MMVF for thin f16/bf16 mul_mat at small batch size (ynankani)
        *   #29769 [OPEN] llama: build unified decode masks in one cache scan (joelagnel)
        *   #29751 [OPEN] [model] llama: fix qwen4exp (am17an)
        *   #29757 [CLOSED] [ggml, Hexagon] Hexagon: optimize ALLREDUCE with support for safe scatter mode (ebateni)
        *   #29768 [OPEN] [ggml, CUDA] cuda: avoid repeated warmup after stable graph replay (joelagnel)
        *   #29622 [OPEN] [testing, ggml] llama: support both embd + raw tokens in batch (ngxson)
        *   #29749 [OPEN] Avoid a second full-size copy of each tensor with direct-io (praneshgo)
        *   #29766 [OPEN] [testing, Vulkan, ggml] vulkan: fix concurrent first device init (losewayy)
        *   #29767 [OPEN] [documentation, testing, examples, devops, ggml, Apple Metal, CUDA, conversion, vendor] fix(cuda): add CUDA 13.4 CCCL compatibility for argsort and top-k kernels (vrwallace)
        *   #29413 [OPEN] [ggml] RPC: Improve loading times (am17an)
        *   #28967 [OPEN] [ggml, CUDA] Add nccl support for multi-node tensor parallelism (zyang-dev)

3.  **Drafting the Sections**:

    *   **Section 1: Today's Highlights** (2-3 sentences summarizing the most important updates):
        *   Focus on the massive technical strides in backend optimizations (CUDA FlashAttention, Metal MXFP4, Vulkan FWHT) and model support (Prism Bonsai 2 27B, Qwen4Exp MTP).
        *   Mention key stability and safety fixes, such as integer overflow guards in GGUF and the prompt injection security enhancement request.
        *   Draft: "The llama.cpp community is pushing major backend performance optimizations alongside critical stability fixes. Key developments include advanced CUDA FlashAttention scheduling and MXFP4 math fixes for Apple Metal, while new model support for Qwen4Exp MTP and Prism Bonsai 2 27B expands the ecosystem. Security and robustness are also getting attention, with a high-priority feature request to harden the server against prompt injection attacks."

    *   **Section 2: Releases** (summarize changes if new versions exist):
        *   List the releases: `b11302` down to `b11284` (summarize the key ones).
        *   Key highlights of the releases:
            *   `b11302` / `b11301`: Core fixes like GGUF integer overflow prevention to prevent loading crashes.
            *   `b11299`: CLI improvements around stdin EOF handling and Ctrl+C broadcast on Windows.
            *   `b11298`: MIMO support for dflash conversion and feature extraction.
            *   `b11297`: Jinja templating enhancements for coerced array attributes.
            *   `b11293` / `b11292`: Major BF16 compute support on CPU and CUDA, boosting training/inference efficiency.
            *   `b11294`: Windows row prefetch support (`llama_prefetch_rows`).
            *   `b11284`: OpenVINO weight view optimizations.

    *   **Section 3: Hot Issues** (Pick 10 noteworthy Issues, explain why they matter and community reaction):
        Let's select the most interesting/impactful ones from the top list:
        1.  **#21468 (CLOSED) Cache reuse bug for Gemma 4**: Cache reuse is broken for Gemma 4 models despite flags. High engagement (21 👍, 11 comments). Critical for long-context generation on Gemma 4.
        2.  **#29473 (OPEN) ggml-hexagon on Snapdragon 7 Gen 4**: HMX MUL_MAT returns inf for n>=5, FLASH_ATTN_EXT and GATED_DELTA_NET fail. Vital for mobile/edge Snapdragon AI deployment.
        3.  **#29758 (OPEN) [enhancement] Security against Prompt Injection attacks**: Crucial for production enterprise deployments where untrusted prompts are processed. (5 comments, growing concern).
        4.  **#29623 (OPEN) Vulkan ErrorDeviceLost on AMD Radeon AI PRO R9700**: Hardware vendor specific crashes under SAM/ReBAR, showing GPU driver/backend compatibility challenges. (5 comments).
        5.  **#27546 (OPEN) OpenVINO on i5 1345u GPU throws exception**: Key issue for Intel integrated graphics users leveraging OpenVINO backend. (9 comments).
        6.  **#29664 (CLOSED) Windows simple input reader sends ctrl+c to all console processes on EOF**: Explains a classic Windows CLI behavior that kills unrelated processes when piping input. (4 comments).
        7.  **#29735 (OPEN) CLIP vision buffer locked to warmup size**: Reallocation issues under larger images causing slow downs or crashes under debug realloc.
        8.  **#29764 (OPEN) Vulkan concurrent first init aborts**: Race condition in `ggml_vk_get_device` leading to invalid device creation and crashes. Crucial for multi-threaded Vulkan usage.
        9.  **#29690 (CLOSED) CVE-2026-52130 json-schema-to-grammar crash (unbounded nesting)**: Security vulnerability leading to server crash. Highlights need for robust parsing validation.
        10. **#25227 (OPEN/stale) WebUI model selector UI grouping bug**: Org-less models visually group incorrectly under the previous organization, impacting UX of the web interface. (3 comments).
        *   *Self-Correction on selection*: Make sure to explain *why* they matter (e.g. security, mobile deployment, GPU compatibility, multi-threading safety) and note community reaction (e.g. high 👍 counts, active debugging).

    *   **Section 4: Key PR Progress** (Pick 10 important PRs, describe features or fixes):
        Let's pick the most technically rich ones:
        1.  **#29435 [ggml, CUDA] CUDA: prefer whole-tile FlashAttention scheduling**: Boosts prefill performance on Ada and newer GPUs by switching scheduling policies. ([@anujj](https://github.com/anujj))
        2.  **#29770 [testing, ggml, Apple Metal] metal: use bf16 math for mxfp4 mul-mat**: Crucial fix for MiMo V2.6 Flash model outliers, avoiding FP16 range overflow by using BF16 math. ([@ggerganov](https://github.com/ggerganov))
        3.  **#29772 [vulkan] FWHT kernels for block widths above 512**: Extends Vulkan FWHT support up to 8192, avoiding dense f32 matmul fallbacks. ([@bri-prism](https://github.com/bri-prism))
        4.  **#29600 [model] Runtime support for Prism Bonsai 2 27B**: Expands the model zoo with high-perplexity ternary model support. ([@bri-prism](https://github.com/bri-prism))
        5.  **#29761 [model, conversion] Qwen4Exp: add MTP**: Adds Multi-Token Prediction (MTP) support for Qwen3.8-Flash-Next, boosting speculative decoding speed. ([@am17an](https://github.com/am17an))
        6.  **#29769 llama: build unified decode masks in one cache scan**: Performance optimization for decode masks, speeding up sequence batch processing. ([@joelagnel](https://github.com/joelagnel))
        7.  **#29768 [ggml, CUDA] cuda: avoid repeated warmup after stable graph replay**: Optimizes CUDA graph captures, preventing unnecessary warmups when graphs are stable. ([@joelagnel](https://github.com/joelagnel))
        8.  **#29766 [testing, Vulkan, ggml

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*