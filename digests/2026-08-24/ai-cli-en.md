# AI CLI Tools Community Digest 2026-08-24

> Generated: 2026-08-23 22:15 UTC | Tools covered: 12

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

# AI CLI Tools — Today's Highlights (2026-08-24)

1. **Claude Code** released **v2.1.241** with bug fixes and reliability improvements ([release](https://github.com/anthropics/claude-code/releases)).

2. **GitHub Copilot CLI** shipped prerelease **v1.0.81-8**, adding `xhigh` reasoning effort for Grok 4.6 and live plugin reloading for directory-sourced marketplaces ([release](https://github.com/github/copilot-cli/releases/tag/v1.0.81-8)).

3. **Qwen Code** released **v0.22.0-nightly.20260823.1007bcacfc**, fixing web-shell workspace `cwd` handling ([PR #9730](https://github.com/QwenLM/qwen-code/pull/9730)).

4. **Gemini CLI** merged a **p0 symlink path-traversal fix** ([#2677](https://github.com/google-gemini/gemini-cli/pull/2677)) and corrected a session-retention shortId collision bug that could delete unrelated sessions ([#28981](https://github.com/google-gemini/gemini-cli/pull/28981)).

5. **llama.cpp** shipped **9 builds (b10588–b10603)**, headlined by MTP (Multi-Token Prediction) support for GLM-4.5-Air ([#26534](https://github.com/ggml-org/llama.cpp/pull/26534)) and DFlash2 speculative-decoding support ([#27342](https://github.com/ggml-org/llama.cpp/pull/27342)).

6. **DeepSeek TUI** rebranded to **CodeWhale** in v0.9.11 and opened the v0.9.12 milestone tracker with a "money & safety" P0 list for bounding runaway spend ([#5566](https://github.com/Hmbown/CodeWhale/issues/5566)).

7. **Ollama** merged runner-lifecycle hardening to detect and evict crashed/exited llama-server processes ([#17954](https://github.com/ollama/ollama/pull/17954), [#17516](https://github.com/ollama/ollama/pull/17516)), plus two competing prefill-cache persistence implementations ([#17953](https://github.com/ollama/ollama/pull/17953), [#17278](https://github.com/ollama/ollama/pull/17278)).

8. **OpenAI Codex** landed a batch of annotation-preservation PRs (mostly from `copyberry[bot]`) normalizing `ContentItemKind` across compaction, truncation, model switches, and forked agent history (e.g., [#40273](https://github.com/openai/codex/pull/40273), [#40271](https://github.com/openai/codex/pull/40271)).

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-08-24 · Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking

The most-discussed Pull Requests (sorted by comment volume) reveal where community attention is concentrated:

**#1298 — skill-creator eval fix** ([PR #1298](https://github.com/anthropics/skills/pull/1298))
Fixes `run_eval.py` reporting 0% recall on every description (linked to issue #556 with 10+ reproductions), alongside Windows stream-reading, trigger-detection, and parallel-worker fixes. Open. *Discussion is entirely about the broken evaluation toolchain degrading the description-optimization loop.*

**#514 — document-typography** ([PR #514](https://github.com/anthropics/skills/pull/514))
Typographic quality control for AI-generated documents: orphan word-wrap (1–6 words spilling to next line), widow paragraphs (stranded section headers), and numbering misalignment — issues that affect "every document Claude generates." Open.

**#486 — ODT skill** ([PR #486](https://github.com/anthropics/skills/pull/486))
OpenDocument (.odt/.ods) creation, template filling, and ODT→HTML parsing, triggered by any ODF/OpenDocument/LibreOffice mention. Open.

**#210 — frontend-design skill clarity overhaul** ([PR #210](https://github.com/anthropics/skills/pull/210))
Revises the frontend-design skill so every instruction is actionable within a single conversation, prioritizing internal coherence and specificity. Open.

**#83 — skill-quality-analyzer + skill-security-analyzer** ([PR #83](https://github.com/anthropics/skills/pull/83))
Two meta-skills: quality analyzer evaluating across 5 dimensions (structure/documentation, examples, resources, 20% weights), and a security analyzer. Early mover in the "meta/self-governance" category. Open.

**#1628 — Hivemind: zero-cost multi-agent orchestration** ([PR #1628](https://github.com/anthropics/skills/pull/1628))
Lets Claude Code delegate mechanical work to headless opencode workers on free models, keeping Claude Code as the sole planner/reviewer/merger — "the expensive model's context is the scarce resource." Recently created (Aug 21), actively updated. Open.

**#723 — testing-patterns** ([PR #723](https://github.com/anthropics/skills/pull/723))
Full testing-stack coverage: Testing Trophy model, what to test vs. not, AAA pattern, test naming, React Testing Library. Open.

**#568 — ServiceNow platform skill** ([PR #568](https://github.com/anthropics/skills/pull/568))
Broad platform assistant spanning ITSM, ITOM, ITAM/SAM Pro, FSM, HRSD/CSM, SPM/PPM, vulnerability/security incident response, and IntegrationHub. Open, long-lived discussion.

*Notable mentions:* #525 (pyxel retro-game MCP skill), #181 (SAP-RPT-1-OSS tabular foundation-model predictor), #1367 (self-audit skill: mechanical file verification + four-dimension reasoning gate).

---

## 2. Community Demand Trends (from Issues)

**Trust / security governance — highest-urgency demand.** Issue #492 ([43 comments](https://github.com/anthropics/skills/issues/492)) exposes that community skills shipped under the `anthropic/` namespace enable trust-boundary abuse — users may grant elevated permissions to skills they believe are official. Supported by #412 (agent-governance proposal) and #1175 (SPO security/context-window concerns when embedding access control in SKILL.md).

**Enterprise collaboration & portability.** #228 ([16 comments, 8 👍](https://github.com/anthropics/skills/issues/228)) requests org-wide skill sharing in Claude.ai to replace manual .skill file transfer; #62 reports skills silently disappearing.

**Tooling reliability is a recurring pain point.** #556 (`run_eval.py` 0% trigger rate, 7 👍), #1487 (`claude-api` injecting ~156k tokens and exhausting context in one call), #1362 (web-artifacts-builder failing on pnpm ≥10.1), and #189 (duplicate skills across plugins) show the community spending significant effort on the authoring/verification toolchain, not just new skills.

**Meta/self-governance skills.** #1329 (compact-memory symbolic notation) and #1385 (three-gate reasoning quality pipeline: pre-task calibration → adversarial review → delivery verification) propose skills that audit and manage the agent's *own* behavior.

**Open platform questions.** #16 (expose Skills as MCPs) and #29 (AWS Bedrock usage) remain open with steady engagement since Oct 2025.

---

## 3. High-Potential Pending Skills

Active-comment PRs not yet merged — likely landing soon:

- **[Hivemind multi-agent orchestration](https://github.com/anthropics/skills/pull/1628)** — cost-optimized delegation to free-model workers; very recent and rapidly updated.
- **[self-audit (v1.3.0)](https://github.com/anthropics/skills/pull/1367)** — mechanical verification + four-dimension reasoning quality gate.
- **[testing-patterns](https://github.com/anthropics/skills/pull/723)** — comprehensive testing methodology skill.
- **[ServiceNow platform](https://github.com/anthropics/skills/pull/568)** — broad enterprise platform coverage, in discussion since March.
- **[pyxel retro game dev](https://github.com/anthropics/skills/pull/525)** — MCP-backed workflow for the Pyxel engine.
- **[SAP-RPT-1-OSS predictor](https://github.com/anthropics/skills/pull/181)** — tabular foundation-model predictive analytics.
- **[skill-quality-analyzer / skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** — self-governance meta-skills for the marketplace.
- **[scnet-hpc](https://github.com/anthropics/skills/pull/1615)** — HPC cluster operation via SSH/Slurm profiles (most recent addition, Aug 20).

---

## 4. Skills Ecosystem Insight

The community's most concentrated demand is for **agent-level governance and reliability — skills that audit, verify, and secure AI output (and the tooling that evaluates those skills) — rather than for purely functional domain skills**, as evidenced by the top-commented PR (eval fix), the top-commented issue (trust-boundary security), and a steady stream of quality-gate, self-audit, and memory-management proposals.

---

# Claude Code Community Digest — 2026-08-24

## 1. Today's Highlights

A new patch release **v2.1.241** shipped with bug fixes and reliability improvements. The community's most urgent signal remains **Issue #77136** — the longest-running open thread (88 comments, 351 👍) — reporting that newer model generations increasingly fall into repetitive rhetorical patterns and struggle with coherent prose despite explicit style instructions. Meanwhile, a wave of issues (mostly closed/stale) centered on **Fable safety-classifier false positives** and unexpected **model fallback to Opus**, flagging legitimate development workflows and dropping users mid-session.

## 2. Releases

- **[v2.1.241](https://github.com/anthropics/claude-code/releases)** — Bug fixes and reliability improvements. No feature-level changes detailed in the changelog.

## 3. Hot Issues

1. **[#77136 — Model repetitive rhetorical tics & incoherent prose](https://github.com/anthropics/claude-code/issues/77136)** *(OPEN, 88 comments, 351 👍)* — The most upvoted open issue. Claude 4.7/4.8/5.0/Fable increasingly default to repetitive "rhetorical tics" and struggle with coherent prose despite explicit style instructions. Highest community engagement in the dataset; a top priority signal for the model team.

2. **[#48965 — Multi-session coordination primitives](https://github.com/anthropics/claude-code/issues/48965)** *(CLOSED/stale)* — Long-running request for cross-session messaging, session registry, compaction-resistant state, and a shared task board to support PM/worker multi-agent patterns. Demonstrates sustained demand for richer multi-agent orchestration.

3. **[#60844 — NotebookRead tool for Jupyter notebooks](https://github.com/anthropics/claude-code/issues/60844)** *(CLOSED/stale)* — Read tool is blocked by oversized notebook files with stored outputs; extraction via jq/python is fragile and token-heavy. A dedicated cell-reading tool was requested for efficient handling.

4. **[#73024 — "Claude remembers NOTHING"](https://github.com/anthropics/claude-code/issues/73024)** *(CLOSED/stale)* — macOS report of persistent memory failure. High-signal title; reflects broader frustration with memory persistence.

5. **[#84187 — Context-compaction thrashing](https://github.com/anthropics/claude-code/issues/84187)** *(CLOSED/needs-info)* — Reports of context compaction repeatedly cycling, hurting long-session stability and cost.

6. **[#73615 — Cost reporting discrepancy: $60 vs $300 billed](https://github.com/anthropics/claude-code/issues/73615)** *(CLOSED/stale)* — Dynamic workflows under-report cost in-session ($60 shown vs $300 actually billed). Cost transparency is a recurring pain point.

7. **[#73605 — Web cloud session stuck at "14 running tasks"](https://github.com/anthropics/claude-code/issues/73605)** *(CLOSED/stale)* — Cloud session permanently wedged with empty background-tasks panel, ignored input, surviving restarts. Notable reliability concern for the web preview.

8. **[#73601 — Sub-agent retry loop burns ~10M tokens](https://github.com/anthropics/claude-code/issues/73601)** *(CLOSED/stale)* — A resumed sub-agent got stuck in a self-addressing retry loop for 3 hours with zero output. Serious resource/cost drain from a single stuck agent.

9. **[#73593 — Cowork prompt fails to commit when app already running](https://github.com/anthropics/claude-code/issues/73593)** *(CLOSED/stale, regression)* — `claude://cowork/new?q=` renders the prompt but no Send button appears when the app is already running (works on fresh launch). Desktop regression worth tracking.

10. **[#73603 — Fable 5 unavailable outside supported regions](https://github.com/anthropics/claude-code/issues/73603)** *(CLOSED/stale)* — Geographic restriction blocks Fable 5 usage for travelers. Representative of the broader Fable rollout friction (see Pain Points).

## 4. Key PR Progress

Only **one** PR was updated in the last 24 hours:

- **[#83374 — docs(plugin-dev): document MessageDisplay streaming semantics](https://github.com/anthropics/claude-code/pull/83374)** *(OPEN)* — Adds `MessageDisplay` to the bundled Hook Development skill's trigger descriptions, event guidance, and quick-reference table, where it was previously omitted despite being a supported hook event. Low-risk documentation improvement for plugin authors.

> Note: No other PRs were active in the 24h window; the remaining PR slots are intentionally omitted rather than padded.

## 5. Feature Request Trends

- **Multi-agent / session orchestration** — Cross-session messaging, session registries, compaction-resistant state, shared task boards (#48965). The community wants first-class primitives for coordinated multi-agent workflows, not tooling workarounds.
- **Notebook support** — A dedicated `NotebookRead` tool for efficient Jupyter cell extraction (#60844), driven by oversized files with stored outputs.
- **Repository navigation** — Support for nested/grouped repos in the agents' `@repo` picker (#72482).
- **Routines management UX** — Delete tool in the scheduled-tasks MCP, grouping in the routines list, and clearer paused-state for manual-only tasks (#73618).
- **Remote control controls** — Ability to type responses (not just allow/deny) in remote/mobile control permission prompts (#73617).
- **Editor UX** — Keyboard scrolling in the VS Code extension's Claude panel transcript (#73588).

## 6. Developer Pain Points

- **Fable safety-classifier false positives** — The dominant theme in the closed-issue batch: legitimate frontend work, emulation projects (Amiga), and web-scraping skills being flagged as "security" and silently dropping users back to Opus (e.g., #73609, #73604, #73599, #73594). Frustration is high and often pointed.
- **Unexpected model fallback** — Users report being bumped from Fable to Opus mid-session for unclear reasons, eroding trust in the model-selection UX (#73598, #73599).
- **Cost transparency and runaway spend** — Undercounted in-session cost vs. actual billing (#73615), and a stuck agent burning ~10M tokens (#73601).
- **Stability of long-running/background sessions** — Context-compaction thrashing (#84187), inconsistent rendering of assistant text between tool calls in wakeup-driven sessions (#73561), and permanently wedged cloud sessions (#73605).
- **Configuration and state corruption** — `~/.claude.json` corrupting on Windows and silently wiping user-scope MCP servers (#73590); remote-control bridge restarts rotating env IDs and auto-disabling scheduled routines (#73565).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-24

## 1. Today's Highlights
The Codex community continues to be dominated by Windows stability concerns, with the long-running desktop freezes issue (#20214, 108 comments) still the top complaint, and several new Windows-specific regressions surfacing this week including a login loop (#40036). Meanwhile, a broad upstream batch of PRs (mostly from `copyberry[bot]`) landed a consistent theme: preserving and normalizing `ContentItemKind` annotations across compaction, truncation, model switches, and forked agent history. On the model front, GPT-5.6 Sol context-window gating remains contested, with new evidence that the same Pro account gets different context limits solely based on the HTTP `originator` header (#40258).

## 2. Releases
No new releases in the last 24 hours.

## 3. Hot Issues

1. **[#20214 — Codex App frequently freezes/stutters on Windows 11 Pro](https://github.com/openai/codex/issues/20214)** [OPEN, +87 👍, 108 💬]
   The most-active issue in the repo. Despite 32 GB RAM and a Ryzen 5 5600, the Microsoft Store app freezes intermittently. Remains unresolved for ~4 months, making it the strongest signal of a systemic Windows desktop performance problem.

2. **[#39392 — gpt-5.6-sol aborts with unsupported prompt_cache_retention](https://github.com/openai/codex/issues/39392)** [OPEN, +37 👍, 39 💬]
   Desktop app 26.814 fails against gpt-5.6-sol with an `unsupported prompt_cache_retention` abort. High engagement suggests a widely-hit compatibility break between app-server and model config.

3. **[#38350 — Recurring scheduled tasks disable themselves after successful runs](https://github.com/openai/codex/issues/38350)** [OPEN, 33 💬]
   Users report scheduled tasks in ChatGPT/web silently flipping from enabled to paused without authorization, with four unrelated tasks disabled in one occurrence. Raises trust concerns for automation users.

4. **[#25178 — Windows Computer Use screenshot fails (SetIsBorderRequired)](https://github.com/openai/codex/issues/25178)** [OPEN, +16 👍, 29 💬]
   Computer Use on Windows 10 22H2 can list/activate windows but any screenshot fails with `0x80004002`. Core computer-use capability is broken on a major supported OS.

5. **[#25928 — VS Code/Cursor Extension: prompts randomly disappear before entering queue](https://github.com/openai/codex/issues/25928)** [OPEN, +18 👍, 28 💬]
   Submitted prompts vanish before queuing on Windows, a high-frequency annoyance for IDE users.

6. **[#39903 — Option to disable “Ran N commands” collapsing in TUI](https://github.com/openai/codex/issues/39903)** [OPEN, +27 👍, 12 💬]
   Strongly upvoted (27 👍 vs 12 comments) CLI request to always show executed commands instead of collapsing them. Clear quality-of-life demand among terminal users.

7. **[#34619 — Restore GPT-5.6 Sol’s 372k context window or add opt-in](https://github.com/openai/codex/issues/34619)** [OPEN, +23 👍]
   Users want the advertised 372k Codex context back or an explicit setting. Pairs directly with #40258 below.

8. **[#40258 — GPT-5.6 Sol is originator-gated: 272K vs 872K by HTTP header](https://github.com/openai/codex/issues/40258)** [OPEN]
   Newly reported (2026-08-23): the same Pro account receives different model catalog variants purely based on the `originator` header. Transparency concern around model capability gating.

9. **[#33192 — DWM Composition handles accumulate after tool-call tasks](https://github.com/openai/codex/issues/33192)** [OPEN, +10 👍, 12 💬]
   Reproducible handle leak in Windows 10 DWM after terminal tool calls — suggests a leak path tied to tool execution, a valuable diagnostic lead.

10. **[#40036 — Codex Stuck in Login Loop on Windows 11](https://github.com/openai/codex/issues/40036)** [OPEN, 7 💬]
    Fresh regression after this week’s update (26.818.32112) breaks authentication entirely — blocks all usage for affected users.

## 4. Key PR Progress

1. **[#40280 — Budget retained images during remote compaction](https://github.com/openai/codex/pull/40280)** [CLOSED]
   Adds opt-in `compaction_image_budget` so image-heavy history is charged against the retention budget, not just text.

2. **[#40196 — Annotate user input and contextual fragments with content kinds](https://github.com/openai/codex/pull/40196)** [CLOSED]
   Classifies user text/image/audio as `user.text`, `user.image`, `user.audio` in original order — foundation for the annotation work.

3. **[#40277 — Preserve annotations when omitting unsupported media](https://github.com/openai/codex/pull/40277)** [CLOSED]
   Renders omitted image/audio inputs as tagged contextual fragments (`images.unsupported`, `audio.unsupported`) rather than dropping metadata.

4. **[#40275 — Classify additional generated context fragments](https://github.com/openai/codex/pull/40275)** [CLOSED]
   Typed compaction summaries, Guardian-approved actions, and subagent notifications as `compaction.summary` / `guardian.*` fragments.

5. **[#40273 — Normalize compacted user message annotations](https://github.com/openai/codex/pull/40273)** [CLOSED]
   Rebuilds preserved user input with content kinds in sync to fix annotation drift after local compaction.

6. **[#40271 — Preserve content annotations when rolling back model switches](https://github.com/openai/codex/pull/40271)** [CLOSED]
   Keeps surviving developer fragments aligned with matching content-kind metadata during rollback, plus regression coverage.

7. **[#40266 — Preserve content annotations when filtering forked agent history](https://github.com/openai/codex/pull/40266)** [CLOSED]
   Keeps developer-message content and positional `content_item_kinds` aligned when preparing parent history for spawned agents.

8. **[#31175 — Add MongoDB thread store and session migration](https://github.com/openai/codex/pull/31175)** [OPEN]
   The only long-running open PR: experimental MongoDB-backed thread store plus `codex sessions migrate-to-mongo` with streaming migration, verification, and rollback safety.

9. **[#40221 — Distinguish Guardian review threads from subagents](https://github.com/openai/codex/pull/40221)** [CLOSED]
   Adds a dedicated `guardian_review` thread source so review threads are no longer conflated with generic subagents in analytics.

10. **[#40257 — Support `cua_repl` as a Node REPL-backed MCP server](https://github.com/openai/codex/pull/40257)** [CLOSED]
    Extends Guardian evidence collection and computer-use policy to `cua_repl`, with compact REPL/transcript rendering.

*Note: Several additional annotation-preservation PRs (#40264, #40184, #40180, #40177, #40174) and UX fixes (#40200 Plan-mode nudge removal, #40166 TUI cursor ordering, #40169 pager regression coverage) also merged today.*
*Also notable: [#40179 — Shut down resumed descendants when archiving thread trees](https://github.com/openai/codex/pull/40179) addresses a collaboration edge case where an archived descendant could resume without its rollout being unarchived.*

## 5. Feature Request Trends
- **Context-window transparency & control** — Restoring the 372k GPT-5.6 Sol window or an opt-in (#34619), plus exposing/removing originator-based 272K-vs-872K gating (#40258).
- **Better TUI/CLI ergonomics** — Option to disable “Ran N commands” collapsing (#39903) and clearer visual distinction between user input and AI output (#8782).
- **Subagent lifecycle control** — Ability to check agent status with a parent-child wait mechanism to prevent premature fallback (#16900); hooks for custom subagents on Windows (#33097).
- **Worktree & session flexibility** — Selecting existing worktrees instead of only creating new ones (#22316); Remote Control support for host general/projectless chats (#22947).
- **Annotation/context integrity** — A consistent push, reflected mainly in PRs, to keep content-kind metadata stable across compaction, truncation, and history filtering.

## 6. Developer Pain Points
- **Windows stability is the #1 recurring theme** — app freezes (#20214), DWM handle leaks (#33192), login loops (#40036), Computer Use screenshot failures (#25178), local history corruption/mojibake (#23126), and Chrome native host issues (#40228).
- **Session resume is unreliable across platforms** — multiple distinct failures: “Conversation interrupted” on Windows (#38552), `already has an active writer` after approval mode (#39823), dropped app-server events corrupting resumed sessions (#38234), generic resume failure (#37719), and `array too long` rollout JSONL errors (#36551).
- **Subagent/session growth issues** — stale or orphaned subagents causing runaway session growth and archive failures (#38805), especially on Windows.
- **Automation trust** — scheduled tasks spontaneously disabling themselves (#38350) and banked usage resets disappearing while inactive (#39760) erode confidence in background operations.
- **File-system sandbox friction** — injected `slash_tmp` mapping to `C:\tmp` blocking `apply_patch` (#33806) and restricted profiles blocking Codex’s own binary (#29049).

---

*Data source: github.com/openai/codex — Issues/PRs updated 2026-08-23 to 2026-08-24.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-24

## 1. Today's Highlights

The community's attention this cycle is split between **agent reliability** (sub-agent turn-limit misreporting, generalist hangs, and shell "Waiting input" deadlocks) and a robust wave of **PR fixes** that close real data-loss and security gaps — including a p0 symlink path-traversal fix, a session-retention shortId collision bug that could delete unrelated sessions, and EOL Node 20→22 sandbox bump. The Auto Memory subsystem also drew heat over retrying low-signal sessions, lack of deterministic redaction, and silent invalidation of patches. Symlink handling remains a recurring theme across both issues and PRs.

## 2. Releases

**v0.56.0-nightly.20260823.g5411f113c** — Nightly build released on 2026-08-23. The full changelog between the 08-22 and 08-23 nightlies is available at: https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260822.g5411f113c...v0.56.0-nightly.20260823.g5411f113c

*(No notable user-facing release notes were attached to this nightly.)*

## 3. Hot Issues

1. **[#22323 — Subagent recovery after MAX_TURNS is reported as GOAL success, hiding interruption](https://github.com/google-gemini/gemini-cli/issues/22323)** *(p1, bug, 13 comments)* — A `codebase_investigator` subagent reports `status: "success"` and `Termination Reason: "GOAL"` even when it hit the max-turn limit before doing any work. This masks genuine interruptions and corrupts downstream logic; the highest-traffic issue today, with 2 👍 indicating community agreement that termination semantics need honesty.

2. **[#21409 — Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)** *(p1, bug, 8 comments, 8 👍)* — The generalist agent hangs indefinitely on trivial tasks (even folder creation), with users waiting up to an hour before cancelling. The highest-react issue in this batch, and a top candidate for priority re-testing.

3. **[#25166 — Shell command execution gets stuck with "Waiting input" after command completes](https://github.com/google-gemini/gemini-cli/issues/25166)** *(p1, bug, 4 comments, 3 👍)* — Simple CLI commands finish but are left displayed as active and awaiting input. 3 👍 signals meaningful developer frustration with a false interactive-state deadlock.

4. **[#21968 — Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** *(p2, bug, 6 comments)* — An anecdotal but widely suspected behavior: the model ignores custom skills and sub-agents unless explicitly instructed, undermining the feature investment. Anecdote-driven, but actionable for prompt/steering work.

5. **[#26522 — Stop Auto Memory from retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** *(p2, bug, 5 comments)* — Auto Memory only marks a candidate session processed when the extraction agent reads it; low-signal sessions that get skipped are re-surfaced repeatedly, causing waste. Pairs with #26523 (silently skipped invalid patches).

6. **[#26525 — Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)** *(p2, security, 4 comments)* — Auto Memory sends transcript content to the extraction model with redaction attempted only *after* content enters model context, and the service can log existing skills. A legitimate privacy concern with security implications.

7. **[#21983 — Browser subagent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)** *(p1, bug, 4 comments, 1 👍)* — Browser agent fails under Wayland compositors — a blocking issue for Linux desktop users running modern display servers.

8. **[#24246 — Gemini CLI encounters 400 error with > 128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)** *(p2, bug, 3 comments)* — With a large tool surface, the API rejects requests. Users expect smarter tool-budgeting as tool counts grow organically.

9. **[#23571 — Model frequently creates tmp scripts in random spots](https://github.com/google-gemini/gemini-cli/issues/23571)** *(p2, bug, 3 comments)* — When shell execution is restricted, the model scatters edit scripts across directories, creating cleanup overhead and muddying commits. A recurring context-hygiene annoyance.

10. **[#20079 — ~/.gemini/agents/filename.md not recognized when it's a symlink](https://github.com/google-gemini/gemini-cli/issues/20079)** *(p2, bug, 4 comments)* — Symlinked agent files are silently ignored. Pairs with the broader symlink-handling theme in today's PRs (#28975) and is a common workflow on dotfiles-managed setups.

## 4. Key PR Progress

1. **[#2677 — Prevent symlink-based path traversal attacks](https://github.com/google-gemini/gemini-cli/pull/2677)** *(p0, security, size/xl, closed)* — Resolves workspace-restriction bypass where symlinks could escape allowed directories; path resolution before validation. A significant hardening landing.

2. **[#28981 — Stop session retention deleting unrelated sessions on shortId collision](https://github.com/google-gemini/gemini-cli/pull/28981)** *(size/m, closed)* — Fixes #28643, a user-data-loss path where `cleanupExpiredSessions()` deleted every file matching an 8-char `-${shortId}` suffix. Critical correctness fix for session retention.

3. **[#28980 — Clear OAuth callback timeout when the callback server closes](https://github.com/google-gemini/gemini-cli/pull/28980)** *(size/m, closed)* — Fixes #28652; a 5-minute timer was never cleared on terminal paths, leaking a retained callback beyond flow completion.

4. **[#28975 — Keep glob results for symlinked workspace roots](https://github.com/google-gemini/gemini-cli/pull/28975)** *(p2, core/agent, size/m, open)* — Fixes #28416: `glob` returns "No files found" when the workspace root is a symlink (e.g., `/tmp` → `/private/tmp` on macOS). Default macOS workflows are directly affected.

5. **[#28935 — Isolate Docker/container runtime sockets and binaries in macOS Seatbelt](https://github.com/google-gemini/gemini-cli/pull/28935)** *(size/l, closed)* — Denies access to container daemon sockets, binaries, Mach/XPC lookups, and POSIX shm to prevent sandbox escape via Docker Desktop VirtioFS mounts. Substantial macOS sandbox hardening.

6. **[#28973 — Bump sandbox image from EOL node:20-slim to node:22-slim](https://github.com/google-gemini/gemini-cli/pull/28973)** *(p1, security, size/xs, open)* — Fixes #28584; Node 20 reached EOL on 2026-04-30 and receives no security patches. Routine but security-essential dependency hygiene.

7. **[#28983 — Detect mixed line endings instead of flagging CRLF on a single match](https://github.com/google-gemini/gemini-cli/pull/28983)** *(p2, core, size/m, open)* — `detectLineEnding()` currently classifies a file as CRLF if it contains even one `\r\n`. Fixes false positives for mixed-ending files.

8. **[#28976 — Honor maxDepth in flat memory imports](https://github.com/google-gemini/gemini-cli/pull/28976)** *(agent, size/m, closed)* — `processFlat` accepted a `depth` argument but never compared it to `importState.maxDepth`; long `@import` chains fully expanded in flat mode while tree mode capped at 5. Aligns flat behavior with tree (#CLAUDE.md parity).

9. **[#28914 — Inject on-retry nudge into conversation contents to preserve prefix caching](https://github.com/google-gemini/gemini-cli/pull/28914)** *(agent, size/l, open)* — Fixes #28909 by moving the nudge from `systemInstruction` to the end of `contents`, preserving static prompt prefix caching and ensuring the recovery nudge lands immediately before generation.

10. **[#28972 — Guard formatTruncatedToolOutput against non-positive maxChars](https://github.com/google-gemini/gemini-cli/pull/28972)** *(p1, core, size/s, open)* — Fixes #28620: negative `maxChars` produced corrupt truncated output via `Math.floor(maxChars * 0.2)` going negative. Complements closed PR #28735 with the same guard.

## 5. Feature Request Trends

- **AST-aware codebase tooling** — A dedicated epic family (#22745, #22746) explores AST-aware file reads, searches, and codebase mapping to reduce token bloat and misaligned reads; suggestions point to `tilth`/`glyph` as starting points.
- **Sub-agent orchestration & observability** — Persistent, file-based task tracking to replace in-context WriteToDo (#18836), visible/shareable subagent trajectories via `/chat share` (#22598), and richer subagent context in bug reports (#21763).
- **Zero-dependency OS sandboxing with bash affinity** (#19873) — Let Gemini 3 models use native POSIX tool chaining safely, plus post-execution intent routing. A size/large effort but a clear directional vote.
- **"Tactful Extraction" for surgical reads** (#19561) — A grep-first discovery hierarchy to avoid context "firehosing" beyond the ~36.6k token/turn baseline.
- **Agent self-awareness** (#21432) — The CLI being able to accurately answer questions about its own flags, hotkeys, and invocation.
- **Safety & guardrails** — Discouraging destructive git/DB operations (#22672) and improving browser-agent resilience with session takeover and lock recovery (#22232).

## 6. Developer Pain Points

- **Agent reliability/deadlocks** dominate: generalist hangs (#21409), shell "Waiting input" false states (#25166), browser agent failures (#21983, #22232), and interactive-prompt deadlocks (vite, #22465).
- **Untrustworthy termination signals**: subagents claiming GOAL success after MAX_TURNS (#22323) erodes confidence in automation.
- **Context and memory bloat**: low-signal session retries (#26522), token-hungry reads (#19561), scattered tmp scripts (#23571), and large-tool 400 errors (#24246).
- **Symlink handling gaps**: agent files ignored (#20079), glob failures (#28975), and path-traversal risk (#2677) — a recurring friction point for standard macOS and dotfile workflows.
- **Configuration respect**: browser agent ignoring `settings.json` overrides such as `maxTurns` (#22267) undermines user control.
- **Terminal UX**: flicker-free resize behavior (#21924) and `\n` escape mishandling (#22466) continue to surface as polish gaps.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI — Community Digest (2026-08-24)**  
*Source: github.com/github/copilot-cli*

---

### 1. Today’s Highlights
The prerelease **v1.0.81-8** shipped with expanded reasoning support for Grok 4.6 (`xhigh`) and live plugin reloading for directory-sourced marketplaces, reducing the need for `/plugin update` cycles. However, the issue stream is dominated by reliability concerns: background compaction is losing parallel tool results and triggering prematurely at 50%, Windows users are blocked from plugin updates while VS Code is open, and remote/cloud workflows (`--cloud`, GitHub Mobile) are suffering from hangs, reconnect crashes, and stale queue states. Only one PR (#4573) was updated in the last 24 h, indicating minimal open-source contribution velocity outside internal prerelease builds.

---

### 2. Releases
**v1.0.81-8** (prerelease) — [Release Notes](https://github.com/github/copilot-cli/releases/tag/v1.0.81-8) (implied)

- **Added:** `xhigh` reasoning effort support for Grok 4.6.
- **Improved:** Path-sourced plugins in local (directory-source) marketplaces now load live from their real directory; edits take effect on `/restart` or a new session without an explicit `/plugin update`.
- **Improved:** Skills and custom agents discovery/visibility updated (details truncated in source).

No stable release was published in this window.

---

### 3. Hot Issues (10 Noteworthy)
Community reaction is measured by likes and comment velocity; all listed issues were updated within the last 24 h.

| Issue | Area | Why It Matters | Community Signal |
|---|---|---|---|
| [#4572](https://github.com/github/copilot-cli/issues/4572) `triage` | Compaction / Tools | Background compaction can drop a completed parallel GPT tool result, causing `CAPIError: 400 No tool output found`. Direct data-loss risk in long-context autopilot sessions. | 1 comment, fresh report |
| [#4570](https://github.com/github/copilot-cli/issues/4570) `triage` | Windows / Plugins | `plugin install/update` fails with `Access is denied. (os error 5)` whenever VS Code is running; closing VS Code resolves it. Blocker for Windows dev workflows. | 1 comment, reproducible |
| [#4535](https://github.com/github/copilot-cli/issues/4535) `context-memory` | Memory / Tools | `store_memory` fails consistently in v1.0.81 prereleases: native memory writer is invoked without a required instance ID (`Instance id is required`). Prerelease regression. | 5 comments, 0 likes, active debugging |
| [#4560](https://github.com/github/copilot-cli/issues/4560) `models` + `configuration` | Model Router | Model set to `auto` forces `reasoningEffort: null` and rejects any user attempt to configure reasoning effort. Breaks expectation of configurable autopilot behavior. | Fresh, 0 likes |
| [#4568](https://github.com/github/copilot-cli/issues/4568) `sessions` + `networking` | Cloud / Remote | `--cloud` hangs at owner picker, reconnect crashes occur, and task polling hits HTTP 429. Multi-layer remote session failure. | Fresh, 0 likes |
| [#4569](https://github.com/github/copilot-cli/issues/4569) `triage` | Mobile / Remote Sync | GitHub Mobile stays “Queued for Copilot” even after the remote CLI receives and responds to the prompt; web view updates but mobile does not. Sync pipeline broken. | Fresh, 0 likes |
| [#2306](https://github.com/github/copilot-cli/issues/2306) `authentication` + `enterprise` | Auth / Policy | Intermittent authorization denial (`requires an enterprise or organization policy`) occurs 2–3 times weekly for enterprise users, then disappears. Reliability concern for org deployments. | 9 comments, **3 likes**, updated Aug 23 |
| [#4571](https://github.com/github/copilot-cli/issues/4571) `triage` | Compaction | Compaction triggers at 50% context with GPT-5.6 Luna Max, making even small tasks trigger background compression. Too aggressive. | Fresh, 0 likes |
| [#4566](https://github.com/github/copilot-cli/issues/4566) `agents` + `tools` | Agent Loop | Agent repeatedly acknowledges work without executing tool actions (v1.0.80 + gpt-5.3-codex). Classic “stuck acknowledgment” loop reducing automation value. | 1 comment, **1 like** |
| [#4561](https://github.com/github/copilot-cli/issues/4561) `sessions` + `non-interactive` | ACP Protocol | In ACP mode (`--acp --stdio`), `session/cancel` returns `stopReason: "end_turn"` instead of `"cancelled"`, violating ACP spec expectations. | Fresh, 0 likes |

*Notable omissions from the top 10: #4573 (spam-like README PR), #4565 (automated scanner bot issue for `copilot-runtime-bazel-cache`), and feature requests (#4563, #4567) are covered in sections below.*

---

### 4. Key PR Progress
Only **one** PR was updated in the 24-hour window, with no functional feature or fix contribution:

- **[#4573](https://github.com/github/copilot-cli/pull/4573)** — Author: `phuongnam467` | Status: Open | **Rename README.md to README.mdmain**  
  No technical description or linked fix. Appears erroneous or spam-like. **No substantive PR activity** was observed; development velocity remains focused on internal prerelease builds (v1.0.81-8) rather than open-source merges.

If you are tracking feature delivery, expect changes to arrive via prerelease tags rather than merged community PRs this cycle.

---

### 5. Feature Request Trends
Distilled from open issues (#4563, #4567, #4560 context, #4568, #4569):

1. **Agent Planning UX:** Users want inline annotations on generated plans so reviewers can attach corrections directly to steps without restating full context ([#4563](https://github.com/github/copilot-cli/issues/4563)).
2. **Telemetry / Network Flexibility:** Explicit opt-in to trust insecure (`http://`) OTLP exporter endpoints (e.g., loopback collectors) instead of silently disabling telemetry ([#4567](https://github.com/github/copilot-cli/issues/4567)).
3. **Model Reasoning Transparency:** The `auto` model router should expose and respect reasoning-effort settings rather than forcing `null`; users want deterministic control over reasoning budget ([#4560](https://github.com/github/copilot-cli/issues/4560) underlying demand).
4. **Remote/Cloud Reliability:** Stable owner picker, reconnect logic, and polling rate limits for `--cloud` mode; plus real-time session state synchronization with GitHub Mobile ([#4568](https://github.com/github/copilot-cli/issues/4568), [#4569](https://github.com/github/copilot-cli/issues/4569)).
5. **Workspace Plugin Lifecycle:** Live reload is improving, but users still need robust update/install paths that survive IDE locks (Windows VS Code interaction remains a blocker) ([#4570](https://github.com/github/copilot-cli/issues/4570)).

---

### 6. Developer Pain Points
Recurring frustrations across the 15 updated issues:

- **Compaction unpredictability:** Data loss during parallel tool execution (#4572) and overly aggressive thresholds (50% with GPT-5.6 Luna Max, #4571) make long-context autopilot sessions risky.
- **Windows file-system locking:** Plugin management conflicts with running VS Code processes (#4570), forcing users to close the IDE to apply updates.
- **Model/auto configuration opacity:** The `auto` router silently disables reasoning effort, breaking user expectations (#4560).
- **Agent reliability loops:** Agents acknowledge instructions but skip tool

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-24

**Note on data coverage:** Only 3 issues and 2 pull requests were active/updated in the last 24h. Where the requested sections call for more items, I present all available items and flag the shortfall rather than fabricate entries.

## 1. Today's Highlights

Activity was light, but two developments stand out. The long-running **Memory System** feature request ([#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283), open since February, 27 comments) continues to be the community's most persistent unmet need for persistent context across sessions. Separately, a subscription-tier user filed a data-backed complaint ([#2604](https://github.com/MoonshotAI/kimi-cli/issues/2604)) alleging the weekly allowance has been silently reduced ~3–5×, which could indicate an unannounced terms change or a metering regression. On the code side, a contributor proposed remote phone pairing for the desktop agent via an MIT-licensed protocol ([#2616](https://github.com/MoonshotAI/kimi-cli/pull/2616)).

## 2. Releases

No new releases in the last 24 hours.

## 3. Hot Issues

Only 3 issues were updated in the last 24h; all are listed below.

- **[#1283 — [enhancement] Feature Request: Memory System — Persistent context across sessions](https://github.com/MoonshotAI/kimi-cli/issues/1283)** · *OPEN* · Author: CatKang · 27 comments
  Why it matters: The highest-signal open request. Proposes both AI-managed automatic memory and user-defined manual memory (project patterns, preferences) carried across sessions. The sustained comment count (since Feb 2026) suggests strong demand and, implicitly, developer frustration that it remains unimplemented.

- **[#2604 — Effective weekly allowance appears reduced ~3–5× without announcement](https://github.com/MoonshotAI/kimi-cli/issues/2604)** · *OPEN* · Author: tobiu · 3 comments
  Why it matters: A Vivace-tier member provides instrumented before/after data (wire-level JSONL ledger of daily token volume) showing the effective weekly allowance dropped ~3–5×. The core question — terms change or metering regression? — is a credibility and trust issue for the whole tier system. Community reaction so far is thin (3 comments), so it may need more traction.

- **[#2484 — (untitled; closed)](https://github.com/MoonshotAI/kimi-cli/issues/2484)** · *CLOSED* · Author: lin200083 · 0 comments
  Why it matters: A closed issue with an empty body and no comments. Notably it was touched in the last 24h (status/update change). Low informational value, included for completeness.

## 4. Key PR Progress

Only 2 PRs were updated in the last 24h; both are listed.

- **[#2616 — Add Build Remote Agent phone pairing (gbr/1)](https://github.com/MoonshotAI/kimi-cli/pull/2616)** · *OPEN* · Author: LinespottingPrivate
  What it does: Integrates a paid iOS/Android companion app that can spectate and inject into the local desktop session via the free MIT-licensed `gbr-agent` (protocol `gbr/1`). The phone acts as spectator + veto, not orchestrator. Notable in that it introduces an external, community-maintained protocol into the official repo — worth close review for security and scope.

- **[#2614 — docs(plugins): document security and persistent data](https://github.com/MoonshotAI/kimi-cli/pull/2614)** · *OPEN* · Author: QIANLING-0831
  What it does: Documentation-only PR clarifying the plugin contract — root `plugin.json`, command-based tools, `inject`, and install location `~/.kimi/plugins/`. Explicitly scoped to the CLI plugin contract and does not touch the separate remote agent. Important for plugin developers' trust in data handling.

## 5. Feature Request Trends

Based on the available issue data:

- **Persistent Memory / Cross-Session Context** — clearly the dominant open request ([#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)): automatic AI-managed notes plus manual user-defined instructions, retaining project patterns and preferences. This is the clearest "next big feature" signal from this dataset.
- **Metering / Quota Transparency** ([#2604](https://github.com/MoonshotAI/kimi-cli/issues/2604)) — not a feature request per se, but a request for visibility into how the weekly allowance is applied, evidenced by a call for formal clarity on terms vs. regression.

## 6. Developer Pain Points

- **Unannounced quota reductions** — The allowance concern in [#2604](https://github.com/MoonshotAI/kimi-cli/issues/2604) reflects a trust-breaking failure mode: silent changes to effective capacity with no communication, forcing users to build their own instrumentation to detect it.
- **Lack of persistent memory** — The age (Feb 2026) and comment volume (27) of [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) indicate that repeating context across sessions is a recurring friction point the tool still hasn't addressed.
- **Data/information hygiene** — The presence of an empty, untitled issue touched recently ([#2484](https://github.com/MoonshotAI/kimi-cli/issues/2484)) is minor, but signals process gaps in issue triage/cleanup.

---

*Digest generated from the 24h snapshot of MoonshotAI/kimi-cli activity (3 issues, 2 PRs, 0 releases).*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-24

## 1. Today's Highlights
No new releases landed in the last 24 hours; the community's energy is concentrated on reliability fixes and model-provider friction. The loudest recurring theme is the **Big Pickle** model becoming unusable mid-task — multiple reports of it silently stopping every couple of minutes and forcing users to spam "Keep going" (#44447, #44528). Meanwhile, the most-upvoted open request (76 👍) pushes for first-class **queue vs. steer semantics** for mid-run prompts (#32157), and several PRs target long-standing tool-calling and stream-termination bugs (#44535, #30224, #38541).

## 2. Releases
None in the last 24 hours.

## 3. Hot Issues

- **[#1034 — Local Ollama tool calling either not calling or failing outright](https://github.com/anomalyco/opencode/issues/1034)** *(CLOSED, 31 comments, 16 👍)* — The longest-running thread this week. `qwen3:32b` via Ollama thinks about which tool to use but never executes. High engagement suggests this is a prolific pain point for local-model users; the fix history is complex.

- **[#41469 — Session silently stops on empty LLM response (finish: unknown, 0 tokens)](https://github.com/anomalyco/opencode/issues/41469)** *(OPEN, 14 comments)* — When a provider returns an empty completion, opencode exits the session loop as if the turn succeeded, with no error surfaced. Important because silent failures are hard to debug and directly affect productivity.

- **[#847 — AGENTS.md is being ignored](https://github.com/anomalyco/opencode/issues/847)** *(CLOSED, 11 comments)* — Build mode ignores AGENTS.md entirely in 0.2.23. Context-file handling is a core promise of the tool, so this drove continued discussion before closing.

- **[#32157 — Configurable mid-run prompt delivery: queue vs steer, with compaction-aware steer semantics](https://github.com/anomalyco/opencode/issues/32157)** *(OPEN, 7 comments, 76 👍)* — The single most-upvoted item on the board. Users want a first-class distinction between queued prompts and "steer" interruptions while the model is mid-response. Massive signal for how the community wants to drive long-running agentic sessions.

- **[#44528 — Bug Report, network error](https://github.com/anomalyco/opencode/issues/44528)** *(OPEN, 7 comments)* — Big Pickle + ollama cloud on Windows 10 broke after ~4–7 days of working fine. Representative of a cluster of "worked before, now fails" reports hitting the Zen/Big Pickle stack.

- **[#32366 — UI stuck on 'thinking' indefinitely after stream error](https://github.com/anomalyco/opencode/issues/32366)** *(OPEN, 7 comments)* — After a stream error (e.g., `AI_APICallError`, socket close), the desktop UI hangs on "thinking..." with no error and no recovery; only a restart fixes it. A severe UX failure with direct user-visible cost.

- **[#29094 — Reading chat history during LLM responses still re-snaps the viewport](https://github.com/anomalyco/opencode/issues/29094)** *(OPEN, 6 comments)* — Re-open of auto-closed #4196. Scrolling up to read context mid-response snaps back to the bottom on every token, making history review effectively impossible during generation.

- **[#44447 — Big Pickle Now Frustrating to Use](https://github.com/anomalyco/opencode/issues/44447)** *(OPEN, 2 comments)* — Started ~36 hours ago: Big Pickle stops mid-thought every ~2 minutes, requiring constant "Keep going" prompts. If this is a backend regression, it affects a wide swath of the user base.

- **[#38923 — MCP tool results: structuredContent is dropped — only content[].text reaches the model](https://github.com/anomalyco/opencode/issues/38923)** *(OPEN, 4 comments)* — MCP servers returning structured JSON payloads have that data silently discarded, breaking any tool whose real result lives in `structuredContent`. A correctness bug with broad MCP ecosystem implications.

- **[#44300 — Zen API: x-preview-f-free / ox-alpha-free fails with "Endpoint is unavailable" for any request containing tools](https://github.com/anomalyco/opencode/issues/44300)** *(OPEN, 4 comments)* — Free-tier endpoints reject **any** request carrying a `tools` array as of ~2026-08-23. Effectively breaks agentic workflows on the free tier; impacts both the Zen Console and Go routes.

---

## 4. Key PR Progress

- **[#44535 — fix(session): stop creating phantom "unknown" tool parts on re-emitted deltas](https://github.com/anomalyco/opencode/pull/44535)** *(OPEN)* — Closes #33618. Confirms phantom `unknown` tool calls are created by opencode itself (not the model) during delta re-emission. Direct fix for a confusing class of session bugs.

- **[#30224 — fix(llm): include expected and received keys in tool schema error message](https://github.com/anomalyco/opencode/pull/30224)** *(OPEN)* — Closes #29142. When a local model passes wrong argument keys (e.g., `fileContent` instead of `content`), the error will now state exactly what keys were expected vs. received — a big debugging win for local/OpenAI-compatible models.

- **[#38562 — fix(core): soft-fail realPath in bash advisory arg scan](https://github.com/anomalyco/opencode/pull/38562)** *(CLOSED, automated cleanup)* — Fixes #38544. Soft-fails `realPath` resolution in V2's bash advisory scan, preventing hard failures when `externalCommandDirectories` hits FS resolution errors.

- **[#38541 — fix(llm): prevent infinite loop when finish_reason missing in stream](https://github.com/anomalyco/opencode/pull/38541)** *(CLOSED, automated cleanup)* — Closes #37855. Some providers omit `finish_reason` on the final SSE chunk; this prevents the loop from spinning forever. Complements the empty-response issue above.

- **[#38539 — fix(tui): preview written file content](https://github.com/anomalyco/opencode/pull/38539)** *(CLOSED, contributor)* — Renders completed writes as block cards with real before/after diffs (red/green), distinguishing newly created vs. overwritten files. A meaningful TUI experience upgrade.

- **[#38536 — feat(tui): expose native OpenCode theme](https://github.com/anomalyco/opencode/pull/38536)** *(CLOSED, contributor)* — Adds `DEFAULT_THEMES_V2` with the canonical `opencode-v2` native theme, retaining `DEFAULT_THEMES` as a compatibility alias. Enables the new theme to reach plugin users.

- **[#38533 — fix(core): reload MCP config updates](https://github.com/anomalyco/opencode/pull/38533)** *(CLOSED, contributor)* — Subscribes the MCP service to `config.updated` events, diffing and replacing only changed servers, with coverage for added/removed/changed configs. Addresses hot-reload pain for MCP setups.

- **[#38532 — fix(session): scope default lists by directory](https://github.com/anomalyco/opencode/pull/38532)** *(CLOSED, automated cleanup)* — Closes #38529. Makes exact-directory filtering the default in both Git and non-Git contexts, replacing earlier implementation scopes from #28972/#18890.

- **[#38508 — fix(mcp): prevent null parameters in MCP tool calls for OpenAI-compatible providers](https://github.com/anomalyco/opencode/pull/38508)** *(CLOSED, automated cleanup)* — Closes #21080/#16491. MCP params with only descriptions (no explicit type) were arriving as `null` for MiniMax and other OpenAI-compatible models; ensures actual values are passed.

- **[#38504 — feat(cli): stream incremental reasoning/text deltas in run --format json](https://github.com/anomalyco/opencode/pull/38504)** *(CLOSED, automated cleanup)* — `opencode run --format json --thinking` previously stayed silent during long thinking phases; this streams incremental deltas, ending the "is it hung?" uncertainty in scripted/CI usage.

*Also notable: #44369 (desktop reconnects to elected managed daemon), #38440 (durable session archival), #38442 (branch metadata exposure), #38441 (shells & PTY connect tokens), #38486 (CJK punctuation markdown fix).*

---

## 5. Feature Request Trends

- **Mid-run prompt control (queue vs. steer vs. break)** — #32157 (76 👍) is the clearest demand: users want deterministic semantics for what happens when they type during an active generation, with compaction-aware behavior. This is the dominant forward-looking feature ask.

- **Configurable retry policy** — #43596 requests exposing `maxRetries`/`initialDelay`/`backoffFactor`/`maxDelay`. The hardcoded `RETRY_MAX_RETRIES = 5` (~68s) aborts turns on transient quota errors, a poor fit for providers with long quota windows.

- **Richer tool-calling fidelity** — Underlying requests to preserve MCP `structuredContent` (#38923), restore `todowrite`/`todoread` in V2 (#42421), and include schema expectations in tool errors (#29142) all point to one direction: *the model needs better-structured, lossless tool I/O.*

- **Session robustness** — Empty-completion and stuck-"thinking" handling (#41469, #32366) imply users want explicit error surfacing and recovery paths rather than silent turn termination.

---

## 6. Developer Pain Points

- **Big Pickle reliability** — The single hottest topic: stopping mid-thought every ~2 minutes (#44447), network errors (#44528), reduced context limits vs. other CLIs (~260K vs ~960K, #43480). Confidence in the flagship model is eroding quickly.

- **Persistent Zen rate limiting** — One user reports 5–7+ days of constant "rate limit" on the Zen base URL across accounts and machines (#43627, #44207, #43404), including requests made outside the opencode CLI.

- **Silent/opaque failures** — Empty responses end the session with no error (#41469); stream errors leave the UI stuck on "thinking..." with no recovery (#32366); network errors surface only as `finish_reason: network_error` (#44473). Developers repeatedly lose work to failures that never explain themselves.

- **Local/tool-calling inconsistency** — Ollama models that "decide" but never act (#1034), OpenAI-compatible models sending invalid tool schemas (#29142, #30224), and dropped `structuredContent` (#38923) make model-agnostic tooling feel unreliable.

- **Viewport / UI regressions** — Chat history re-snapping (#29094), missing scrollbars (#44428), and macOS ARM64 TUI painting empty frames (#44337) keep resurfacing. Desktop add-server form focus issues on Windows (#44461) and WSL2 "not installed" false negatives (#38309) round out a fragmented UX pain list.

- **Windows-specific crashes** — `opencode.exe` segfaults when nProtect GameGuard (Helldivers 2) is running due to embedded Bun 1.3.14 (#44513) — a sharp edge for Windows gamers/tinkerers.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-24

## 1. Today's Highlights
A dense day of reliability hardening: multiple fixes landed against strict OpenAI-compatible providers (Kimi/Moonshot message-ordering validation, Ox Alpha silent stop errors, empty `custom: {}` tool-call misrouting), plus a notable batch of Windows/terminal ergonomics work (PowerShell tool, key-binding docs, drive-letter autocomplete). On the llama.cpp front, both a fix and a feature landed to surface unloaded models in `/model`, resolving a long-standing pain point. No new releases shipped in the last 24 hours.

## 2. Releases
No new releases in the last 24 hours.

## 3. Hot Issues

- **[#8167] Cannot pick a model with built-in llama.cpp support** — SteelPh0enix reports llama-server router models never appear in the model list despite working via `/llama`. Active discussion; directly motivates two companion PRs today. [Link](https://earendil-works/pi Issue #8167)

- **[#7683] pi-tui: let components receive mouse events on their own rows** — Proposal for an optional `Component.onMouse(event)` hook with row/col relative to the component's LayoutBox, dispatched before scrollbar/selection handling. High comment activity; driving PR #8032. [Link](https://earendil-works/pi Issue #7683)

- **[#7885] npm search not indexing newly published pi-packages** — `pi-affix-prompt` never appears in npm search despite proper `pi-package` keywords, breaking the pi.dev/packages gallery mirror. Community concern that package discovery is broken since Aug 4. [Link](https://earendil-works/pi Issue #7885)

- **[#5932] Exposing ctx.navigateTree() to agents on ExtensionContext** — Open wishlist item (2 👍) to surface `navigateTree()` beyond `ExtensionCommandContext`, requested for custom `/goal` implementations. Long-running discussion since June. [Link](https://earendil-works/pi Issue #5932)

- **[#8452] Improve default compaction prompt for continuation-state fidelity** — Suggests summaries should merge/dedupe/reconcile continuation state rather than preserve readable prose; asks compacted checkpoints to distinguish observed results from assumptions. [Link](https://earendil-works/pi Issue #8452)

- **[#8537] Kimi (moonshotai-cn) 400s on replayed tool history** — Strict provider rejects orphaned tool messages and duplicate `tool_call_id`s that lenient providers tolerate. Catalyzed the normalization fix in PR #8536. [Link](https://earendil-works/pi Issue #8537)

- **[#8541] OpenAI-compatible 429 from Nous Ox Alpha surfaced as generic ERROR** — Capacity errors appear only as `Error: ERROR` with zero usage recorded, making diagnosis impossible. Community is pushing for better provider error surfacing. [Link](https://earendil-works/pi Issue #8541)

- **[#8457] Invoke skills mid-sentence like prompt templates** (2 👍) — Wants `/skill:name args` to expand inline anywhere in input, matching how `/template args` works as of 0.84, rather than only at the start. [Link](https://earendil-works/pi Issue #8457)

- **[#8521] edit tool: stringified edits with raw control characters still fail validation** — Follow-up to #3370: bare `JSON.parse` throws on unescaped newlines/tabs inside stringified edits, and the `catch {}` silently swallows the failure. [Link](https://earendil-works/pi Issue #8521)

- **[#8531] Auto-retry stalls silently after consecutive "Request timed out" errors** — In RPC mode, consecutive timeouts leave the session hanging indefinitely with no visible retry state; flagged as a critical UX defect. [Link](https://earendil-works/pi Issue #8531)

## 4. Key PR Progress

- **[#8536] fix(ai): normalize tool-result history for strict OpenAI-compatible providers** — Reorders/reconciles tool-call/tool-result pairs so replay works against Kimi (`kimi-k2`/`kimi-k3`) while remaining lenient for DeepSeek/OpenAI. [Link](https://earendil-works/pi PR #8536)

- **[#8535] feat(coding-agent): also show unloaded llama.cpp models in `/model`** — Leverages llama.cpp router's on-request auto-loading so users needn't manually `/llama` load presets. Related PR #8479 exposes `--models-preset` presets. [Link](https://earendil-works/pi PR #8535)

- **[#8509] fix(ai): surface stream errors and support toolless models** — Fixes Ox Alpha cases where `finish_reason: "stop"` with `native_finish_reason: "network_error"` ended sessions silently mid-task. [Link](https://earendil-works/pi PR #8509)

- **[#8504-related] [Link](https://earendil-works/pi PR #8504)** — *(Note: #8504 is an issue describing empty `custom: {}` misrouting function-tool deltas into the grammar-tool path; no PR linked in data.)*

- **[#8512] feat(coding-agent): add optional PowerShell tool** — mitsuhiko's attempt to escape git-bash path mangling on Windows; acknowledges it "will require some playing around" but prototypes a native PS tool. [Link](https://earendil-works/pi PR #8512)

- **[#8513] fix(coding-agent): repair raw control characters in stringified edit args** — Follow-up repair to #3370 handling unescaped newlines/tabs in model-sent JSON string edits. [Link](https://earendil-works/pi PR #8513)

- **[#8532] fix(coding-agent): cap grep/find child output** — Prevents a single huge line from blowing V8's string-length limit inside `node:readline` and killing the parent. [Link](https://earendil-works/pi PR #8532)

- **[#8505] fix(coding-agent): cap agent retry backoff** — Adds `retry.maxAgentDelayMs` (default 30s) to bound the outer retry loop's exponential backoff. [Link](https://earendil-works/pi PR #8505)

- **[#8500] fix(plan-mode): eliminate false positives in bash guard and plan extraction** — Fixes paths containing "code" being blocked and demo text fooling the extractor. [Link](https://earendil-works/pi PR #8500)

- **[#8032] feat(tui): let components receive mouse events on their own rows** — Implements #7683 with a LayoutBox hit-test and innermost-first dispatch; still open. [Link](https://earendil-works/pi PR #8032)

- **[#8424] fix(coding-agent): discard failed extension factory state** — Staged flags/provider ops are rolled back and event-bus listeners removed when a factory rejects. [Link](https://earendil-works/pi PR #8424)

Also merged: [#8524] retain "Working..." status until awaited `agent_settled` completes; [#8487] finish-reason compatibility override; [#8482] custom-footer docs pointing at `ctx.getContextUsage()`.

## 5. Feature Request Trends

- **TUI/terminal ergonomics** — The strongest cluster: mouse-driven expansion of tool output blocks (#8344), per-row mouse events (#7683), syntax-color mapping for `highlight.js` symbol scopes (#8534), and documented Windows key-binding conflicts (#8183, #8372).
- **llama.cpp deeper integration** — Recurring desire to surface unloaded models/presets in `/model` (#8167, #8539, PR #8479/#8535).
- **Extension API expansion** — Broad appetite for more hooks: narrow Skill visibility API (#8533), mid-sentence skill invocation (#8457), a `user_bash_complete` event (#8530), `navigateTree()` on ExtensionContext (#5932), and `messageId`/`timestamp` in markdown transformer context (PR #7952).
- **Model catalog growth** — Fast-moving model additions like `deepseek-v4-flash-vision-exp` (#8469) and codex context-ceiling metadata (#8332).
- **Compaction/state fidelity** — Requests for compaction prompts that preserve continuation state and observed-vs-assumed distinctions (#8452, #8498).

## 6. Developer Pain Points

- **Windows is a second-class citizen** — Conflicts with Windows Terminal defaults (#8183, #8372), `@` autocomplete failing on drive-letter paths (#8523), and mitsuhiko's near-surrender on git bash (#8512) signal an urgent platform gap.
- **Strict vs. lenient provider divergence** — Providers that enforce message ordering (Kimi, #8537), wrap error bodies in arrays (Vertex AI, #8526), or emit empty `custom:` deltas (#8504) expose silent correctness bugs that only strict providers reveal.
- **Silent failures stranding users** — Generic `Error: ERROR` surfacing (Ox Alpha, #8541), stall-then-hang auto-retry on timeouts (#8531), and abort-induced stale parentIds (#8525) leave sessions frozen with no actionable diagnostics.
- **Tool-call idempotency and validation gaps** — The non-idempotent `todo` toggle un-completing items (#8529) and `edit` silently swallowing malformed stringified args (#8521) both corrupt long agent sessions.
- **Session replay/restore fidelity** — Cold restores resurrecting overflow assistant messages (#7724) and compaction retaining trailing tool-result turns above `keepRecentTokens` (#8498) undermine deterministic continuation.
- **Package/model discoverability** — npm search not indexing new pi-packages (#7885) and llama.cpp models hidden from `/model` (#8167) frustrate community contributions and model adopters alike.

---

*Data window: 2026-08-23 → 2026-08-24. Sources: github.com/earendil-works/pi (issues/PRs), umbrella repo listed as github.com/badlogic/pi-mono.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-24

## 1. Today's Highlights

Qwen Code's nightly pipeline delivered one release this cycle (web-shell workspace-cwd fix), while the project's center of gravity remained squarely on the **/review workflow**: a security issue demanding runner-level isolation of PAT-bearing jobs (#9089), plus multiple PRs turning coverage into a typed ledger, findings into a structured contract, and reviewed-repo command execution into a containerized policy. On the operator-facing side, a newly filed bug (#9827) reveals that `permissions.allow` only filters the CLI surface — the full built-in tool schema still ships to the model in the API request — which will likely attract attention given its privacy implications. Community activity is high, with roughly 50 issues and 50 PRs touched in 24 hours and a long tail of open feature requests around daemon health, session management, and provider expansion.

## 2. Releases

**v0.22.0-nightly.20260823.1007bcacfc** — Nightly build with a single documented fix:
- `fix(web-shell)`: pass session workspace `cwd` when opening from the overview panel ([PR #9730](https://github.com/QwenLM/qwen-code/pull/9730))

No stable or feature release landed in this window.

## 3. Hot Issues

1. **[#9827 — `permissions.allow` does not restrict the tool schemas sent to the model](https://github.com/QwenLM/qwen-code/issues/9827)** *(P2, bug, core/tools, 4 comments)* — Even when users whitelist tools via `permissions.allow`, the API request still carries the complete built-in tool set. This is a real privacy/leak concern beyond mere UI mismatch; expect maintainer attention.

2. **[#5975 — "No stream activity for 120000ms after 19 chunks"](https://github.com/QwenLM/qwen-code/issues/5975)** *(P2, bug, latency/welcome-pr, 11 comments, 👍1)* — Recurring stream-timeout errors since v0.19.3; users see long "Thought" stalls followed by API errors. A high-traffic stability pain point.

3. **[#9089 — PAT-bearing jobs share host with untrusted branch code](https://github.com/QwenLM/qwen-code/issues/9089)** *(P1, security, CI/CD, closed)* — Autofix PAT-bearing steps need runner-level isolation after the `global-driver` incident. Materialized a class of finding that GitHub Actions steps alone cannot close; closed, likely with infra changes.

4. **[#9219 — `/review` presubmit overlap matching is exact-line only](https://github.com/QwenLM/qwen-code/issues/9219)** *(P2, bug, /review)* — Multi-line ranges and semantic duplicates slip past the noConflict gate (evidence: PR #9204). Directly feeds the ongoing /review hardening effort.

5. **[#9821 — Native slash commands intermittently missing from Skill-tool surface](https://github.com/QwenLM/qwen-code/issues/9821)** *(P2, bug, commands, 3 comments)* — `commands/*.md` register ~50% of the time; an async `modelInvocableCommands` race across versions 0.21.8+. Nondeterministic and hard to reproduce — classic reliability bug.

6. **[#8625 — Windows terminal Chinese input pinyin unreadable](https://github.com/QwenLM/qwen-code/issues/8625)** *(P2, bug, UI/windows, 8 comments)* — Input-method pinyin renders illegibly in the Windows TUI; a UX regression for Chinese-speaking users on the primary platform.

7. **[#8662 — Migrate TUI rendering layer from ink to OpenTUI](https://github.com/QwenLM/qwen-code/issues/8662)** *(P3, enhancement, roadmap/terminal-ux, need-discussion)* — Structural flicker/rendering problems in the ink-based stack (~1037-line patch). Ambitions: flicker-free rendering and first-class mouse support.

8. **[#8586 — Track `activeWork` and background Agent recovery](https://github.com/QwenLM/qwen-code/issues/8586)** *(P2, feature-request, roadmap/background-automation, daemon, 4 comments)* — Five-layer proposal (deep health, ACP session reporting, foreground/background linkage, progress stall detection, kill/revive). Core to the background-automation roadmap.

9. **[#9816 — DaemonClient workspace file helpers throw "Invalid URL" with relative base](https://github.com/QwenLM/qwen-code/issues/9816)** *(P2, bug, SDK)* — `#9734` fixed one method but six siblings in `DaemonClient.ts` still use absolute-only `new URL(...)`; breaks same-origin `/daemon` hosting for Web Shell integrations.

10. **[#9831 — Relationship question with craft-agents-oss](https://github.com/QwenLM/qwen-code/issues/9831)** *(question)* — User reports near-identical appearance and *shared sessions* with an external fork/release; community is asking for an official statement.

## 4. Key PR Progress

1. **[#9723 — Run the reviewed repository's commands behind a container](https://github.com/QwenLM/qwen-code/pull/9723)** *(feat, review)* — Puts execution of the reviewed repo's own commands behind a container boundary as an operator-set policy. Direct response to #9556; security-relevant.

2. **[#9794 — Report findings to clients as a typed contract](https://github.com/QwenLM/qwen-code/pull/9794)** *(feat, review)* — Adds `report_findings` core tool carrying `{level, findings[]}` typed data instead of a Markdown convention; field names aligned with the findings artifact.

3. **[#9793 — Surface nested sub-agent approvals under background parents](https://github.com/QwenLM/qwen-code/pull/9793)** *(fix, core)* — Fixes #9782: a tool call requiring confirmation inside a nested sub-agent previously waited forever on an unlistened `TOOL_WAITING_APPROVAL` event, hanging the enclosing agent.

4. **[#9565 — Add the output-style layer to the system prompt](https://github.com/QwenLM/qwen-code/pull/9565)** *(feat, core)* — Named session-level output styles (Concise, Proactive, etc.) that change how the agent reports its work; a significant UX customization surface.

5. **[#9768 — Make coverage a sealed, classified ledger](https://github.com/QwenLM/qwen-code/pull/9768)** *(feat, review)* — Chunk coverage now carries identity, explains gaps, and reports how much of a diff was read vs. posted — without moving `event` or adding gates.

6. **[#9802 — Web Shell async submit preparation](https://github.com/QwenLM/qwen-code/pull/9802)** *(feat, web-shell)* — Adds optional `prepareSubmit` callback letting embedded hosts mutate the outgoing prompt before gates, session allocation, and transport.

7. **[#9739 — Bind PRs created via `gh pr create` in the session shell](https://github.com/QwenLM/qwen-code/pull/9739)** *(feat, core)* — Closes the last binding-source gap of session↔PR: sessions whose PR was created by an in-shell `gh pr create` now get bound (live + replay paths).

8. **[#8368 — Add Kimi and Xiaomi MiMo providers](https://github.com/QwenLM/qwen-code/pull/8368)** *(feat, auth)* — First-class presets for Kimi (Coding Plan / API Key China / International) and Xiaomi MiMo (pay-as-you-go, multi-region) under third-party providers.

9. **[#8276 — Preserve prompt cache across deferred tool discovery](https://github.com/QwenLM/qwen-code/pull/8276)** *(fix, core)* — Moves the deferred-tool catalog out of startup/lifecycle system-reminders and into the live `tool_search` function description, preserving prompt caching.

10. **[#9582 — Roll back replayed usage when a session swap fails](https://github.com/QwenLM/qwen-code/pull/9582)** *(fix, telemetry)* — `UiTelemetryService` gains `snapshotForReplay`/`restoreFromReplaySnapshot` so a failed session swap drops the bucket instead of double-counting usage.

## 5. Feature Request Trends

- **/review as a deterministic workflow**: Multiple proposals target the workflow engine — orchestration for Step 3–5 fan-out, verification, and reverse audit (#8769), plus a convergence exit path for persistently-Critical loops (#9410).
- **Background automation & daemon health**: `activeWork` fact in deep health, recovery for background Agents (#8586), and Local Control consolidation onto a daemon-owned implementation (#9075).
- **Expanding provider surface**: Kimi and Xiaomi MiMo auth presets (#8368), plus a default-off Cursor SDK-backed coding subagent (#9428).
- **Session & settings ergonomics**: Session rotation bounds (#8927), remembering `/review --effort` per project (#9792), and drag-and-drop file support in the Companion (#9743).
- **TUI modernization**: Migration from ink to OpenTUI for flicker-free rendering and mouse support (#8662).

## 6. Developer Pain Points

- **Intermittent, nondeterministic behavior**: Stream timeouts (#5975) and intermittently missing slash commands (#9821) frustrate users because they resist reproduction.
- **Configuration that doesn't do what it says**: `permissions.allow` not trimming the API tool schema (#9827) and the VS Code settings schema rejecting supported prompt hooks (#8752) both erode trust in configuration.
- **Copy-paste divergence in value domains**: The approval-mode enum is hand-copied across 20 files in 3 languages, with two copies already wrong (#9145) — a latent-bug generator.
- **Authentication friction**: Vertex AI cannot use Application Default Credentials and requires an API key that then triggers 401s (#9016, closed); DaemonClient URL handling breaks relative bases (#9816).
- **Non-English input rendering**: Windows pinyin illegibility (#8625) and CJK punctuation breaking bold markdown in Web Shell (#9456) are small but persistent quality issues for Chinese-speaking users.

---

*Digest generated from QwenLM/qwen-code GitHub activity on 2026-08-24. All links point to the official repository.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI / CodeWhale Community Digest — 2026-08-24

## 1. Today's Highlights
The project continues its rebrand to **CodeWhale**, shipping v0.9.11 while immediately opening the v0.9.12 milestone tracker with a "money & safety" P0 list for bounding runaway spend. The maintainer also fixed a first-run onboarding regression that hid hosted providers like DeepSeek behind a keypress, and landed DeepSeek V4 weekend off-peak billing ahead of the new Beijing-time pricing rules.

## 2. Releases
**v0.9.11** ([release notes](github.com/Hmbown/DeepSeek-TUI/releases)) — The release formally establishes **Codewhale** as the public product from Shannon Labs. The `codewhale` command, npm package, and release-asset names remain lowercase technical identifiers; the legacy `deepseek-tui` npm package is deprecated with no further releases, and v0.8.x `deepseek`/`d…` legacy users are directed to the new name.

## 3. Hot Issues
- **[#3368 — Land and verify security hardening/code-scanning fixes](github.com/Hmbown/CodeWhale/issues/3368)** *(29 comments)* — The most-discussed tracker, consolidating CodeQL findings and advisory-class reports for the v0.8.64 line. High engagement because it defines the public release gate without leaking exploit details.
- **[#4326 — Explain and bound RSS after cancelling a 32-worker storm](github.com/Hmbown/CodeWhale/issues/4326)** — A post-cancel RSS sample keeps rising, raising questions about allocator high-water retention vs. a real worker/runtime leak. Critical for anyone running high fan-out local workloads.
- **[#3306 — Converge runtime ownership, delete duplication, ship one executable](github.com/Hmbown/CodeWhale/issues/3306)** — The v0.9.3 umbrella: 18 Rust packages/~771k lines with ~87% living in `codewhale-tui`, which owns parallel runtime/tool/config/session/hook paths. Points at the maintenance burden of duplicated infrastructure.
- **[#5290 — Fix clickable controls on non-English routes](github.com/Hmbown/CodeWhale/issues/5290)** — Localized website routes have unreliable clickable controls; treated as a localized interaction bug beyond copy translation. Community flagged this as a trust issue for non-English users.
- **[#5573 — v0.9.12 milestone tracker](github.com/Hmbown/CodeWhale/issues/5573)** — The new "start here" tracker on branch `codex/v0912-integration-20260823`; enumerates P0 (money & safety) and P1 items with explicit ordering.
- **[#5566 — R1: bound runaway spend](github.com/Hmbown/CodeWhale/issues/5566)** *(CLOSED)* — Both hosts defaulted to `u32::MAX` turns with an inert tool-call budget and per-step re-arming stream cap; an unattended run could spend unboundedly. Now closed with finite `max_steps` + cumulative wall-clock defaults.
- **[#5583 — Workflow responseSchema failures need bounded repair and raw-output receipts](github.com/Hmbown/CodeWhale/issues/5583)** *(new)* — Schema failures correctly abort but discard a bounded-repair opportunity and offer no malformed-raw-output receipt for debugging.
- **[#5582 — Workflow owner snapshots collapse Degraded into Completed](github.com/Hmbown/CodeWhale/issues/5582)** *(new)* — A match arm maps `Degraded` runs to `Completed` owner state, hiding partial failures in status reporting.
- **[#5103 — Rename DeepSeekClient / deepseek_client legacy internals](github.com/Hmbown/CodeWhale/issues/5103)** — The multi-provider HTTP client is still named `DeepSeekClient` despite supporting OpenAI-compatible, Anthropic, Responses, Codex, and custom routes; a legacy-naming cleanup with broad visibility.
- **[#2327 — COPYRIGHT concerns over unofficial codewhale extensions](github.com/Hmbown/CodeWhale/issues/2327)** *(by @VerrPower)* — Two unofficial VS Code Marketplace extensions (`HengQuWorld.brotherwhale-vscode`, `HaiTaoJiang.codewhale-…`) use the CodeWhale name; a community-raised trademark/trust concern with 2 👍.

## 4. Key PR Progress
- **[#5576 — 0.9.12 integration: must-fix + UX fixes (WIP)](github.com/Hmbown/CodeWhale/pull/5576)** — 24 commits on the v0.9.12 branch: approval-scope family grant fix (R2), Chat-Completions SSE error frames (R3), plus UX fixes. Not ready to merge; tracked by #5573.
- **[#5563 — Show all providers on first run, not local-only](github.com/Hmbown/CodeWhale/pull/5563)** — Fixes onboarding defaulting to the local/self-hosted view with Ollama preselected, which hid DeepSeek behind a keypress (reported by @n3onr1ft).
- **[#5561 — Auto-retry a reasoning-only clean-stop instead of failing](github.com/Hmbown/CodeWhale/pull/5561)** — A provider returning only hidden reasoning + clean stop (no answer/tool call) previously dead-ended the turn; now auto-retried. Reliability fix from a live user error.
- **[#5545 — Bill whole Beijing weekends off-peak for DeepSeek V4](github.com/Hmbown/CodeWhale/pull/5545)** *(by @xyzs996)* — `deepseek_is_peak` only considered UTC hour; aligns with DeepSeek's new weekend off-peak policy effective Aug 23 (Beijing).
- **[#5559 — Close pre-tag v0.9.11 truthfulness and tool-output gaps](github.com/Hmbown/CodeWhale/pull/5559)** — Model-bound tool output redaction using a credential-shaped policy (#5546) plus additional truthfulness fixes landing before the v0.9.11 tag.
- **[#5544 — Move docs/subagents and docs/mcp onto the dictionary spine](github.com/Hmbown/CodeWhale/pull/5544)** *(by @Lstarsky0)* — Eliminates 34 `isZh` branches across two doc groups; part of the #5337 localization series beating zh/`OPTIONAL_FILES` checks.
- **[#5524 — Multi-file read_lints operation](github.com/Hmbown/CodeWhale/pull/5524)** *(by @wuisabel-gif)* — The model-visible `lsp` tool gains `read_lints` for multiple workspace files, reusing the session `LspManager` transport pool.
- **[#5530 — Route legacy completions through public binary](github.com/Hmbown/CodeWhale/pull/5530)** *(by @wuisabel-gif)* — Legacy `codewhale completions <shell>` now uses the same canonical generator as `completion` and emits the public `codewhale` command name.
- **[#5406 — Prefab provider templates and test-connection](github.com/Hmbown/CodeWhale/pull/5406)** — One-click templates for OpenCode Zen, OpenCode Go, Agnes, and SenseNova so users only enter an API key; implements #5350.
- **[#4928 — thinking_default_expanded setting](github.com/Hmbown/CodeWhale/pull/4928)** *(by @M-Maciej)* — Thinking blocks render expanded when enabled; useful for SSH/tmux users whose Space key is captured by the terminal layer.

## 5. Feature Request Trends
- **Provider neutrality & architecture decoupling** — Repeatedly requested: rename legacy `DeepSeekClient` internals (#5103), de-hardcode the 81-model/31-provider/52-tool registries (#4173), and extract Responses-dialect policy into a language-neutral conformance harness (#5093/#5092/#5094).
- **Remote workbench / phone control** — Two parallel lanes: Tencent/CNB/Lighthouse/Feishu unified flow (#1984) and a US-first Cloudflare/AWS/Telegram equivalent (#1990).
- **Richer agent tooling** — A recurring push for visual inspection artifacts for browser/UI tasks (#3145), a Playwright-backed browser automation tool (#3358), a debugger protocol surface (#3981), structural code search with AST-backed edits (#3980), and LSP navigation/rename/code actions (#3975).
- **Model-lab and context hygiene** — Prompt assembly moving into `crates/core` with role tiers (#5263), structured compaction survival contracts (#4394), and first-class `.codewhaleignore` privacy controls for indexing (#4069).
- **UX & localization polish** — Multi-file lint reads (#5524), prefab provider templates (#5406), and restoring clickable controls on non-English routes (#5290).

## 6. Developer Pain Points
- **Runaway spend / unbounded execution** — The top P0 (closed #5566): `u32::MAX` turn defaults, inert tool-call budgets, and per-step stream caps mean unattended runs can spend without limit; a self-audit drove the v0.9.12 P0 block.
- **Memory reliability after high fan-out** — Post-cancel RSS growth after a 32-worker storm (#4326) makes allocator retention vs. real leaks hard to distinguish.
- **Legacy naming confusion** — The multi-provider client is still `DeepSeekClient`, and legacy npm/`codewhale-tui` runtime paths persist despite the Codewhale rebrand (#5103, #3306, #5530); users also face deprecated-package ambiguity.
- **Status/error transparency** — Workflow `Degraded` states collapse into `Completed` (#5582); `responseSchema` failures discard malformed output with no repair or receipt (#5583); reasoning-only clean-stops dead-end turns (#5561).
- **Onboarding discoverability** — First-run hid hosted providers behind a keypress, reading as "local-only" (#5563).
- **Trust & trademark** — Unofficial marketplace extensions using the CodeWhale name (#2327) raise concern about supply-chain impersonation for a tool that now handles credentials and spend.

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

# ComfyUI Community Digest — 2026-08-24

## Today's Highlights
The ComfyUI ecosystem remained in heavy maintenance mode with no new releases in the past 24 hours, but a cluster of PRs landed targeting long-standing regressions: ControlNet hint caching, lazy-input cache invalidation, LoRA alpha read from file metadata, and multichannel audio layout preservation. Meanwhile, the community is facing recurring pain around MiniMax H3 performance and audio decode failures, plus macOS MPS black-video output on LTX 2.5, prompting rapid-fire bug-fix PRs and a security-focused RFC on CLI argument leakage.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **#15255 — Dynamic VRAM streaming crash (CUDA OOM regression)** — [Issue](https://github.com/Comfy-Org/ComfyUI/issues/15255)
   The most active thread (61 comments) on a `HostBuffer.read_file_slice failed → CUDA OOM` regression after the Aug 3 update. A mod note points to an NVIDIA-side CUDA error, with workarounds (`--cuda-device 0`, `--disable-pinned-memory`) for multi-GPU setups.

2. **#15745 — Multiple NVIDIA GPUs falsely detected on Windows** — [Issue](https://github.com/Comfy-Org/ComfyUI/issues/15745)
   High community upvotes (9 👍). Windows users with a single RTX 4060 Ti see phantom multi-GPU detection, breaking execution. Root cause traced to GDI display-adapter entries; a fix PR (#15749) is already up.

3. **#15665 — MiniMax H3 ~4x slower since v0.32.0** — [Issue](https://github.com/Comfy-Org/ComfyUI/issues/15665)
   Full-resolution generation regressed from ~26 min to ~2 hours, blamed on `v = v.clone()` introduced in #15486. Small resolutions unaffected; impacts int8 and fp8 variants.

4. **#15784 — Nightly crash: `ColorPrimaries` removed from PyAV** — [Issue](https://github.com/Comfy-Org/ComfyUI/issues/15784)
   7 👍. Latest nightly breaks `comfy_api/latest` on import due to a removed PyAV API symbol — a compatibility issue that affects CI and external integrations.

5. **#15653 — CUDA error: invalid argument on 9060xt 16G** — [Issue](https://github.com/Comfy-Org/ComfyUI/issues/15653)
   AMD users hitting `torch.AcceleratorError` in workflows, indicating ongoing AMD/ROCm driver friction rather than a ComfyUI logic bug.

6. **#15556 — Generation cache lost since PR 15027** — [Issue](https://github.com/Comfy-Org/ComfyUI/issues/15556)
   Users on large-RAM Linux systems (112GB, RTX 5090) miss the old caching behavior; `--fast-disk` stops pinning but doesn't restore cache. Community wants less-aggressive pinning back as a feature.

7. **#15818 — LTX 2.5 renders all-black video on MPS** — [Issue](https://github.com/Comfy-Org/ComfyUI/issues/15818)
   Fresh report: default attention backend produces black frames on Apple Silicon; only `--use-split-cross-attention` works, `--use-quad-cross-attention` fails. Addressed by PR #15819.

8. **#15816 — Audio plays at 1/3 speed** — [Issue](https://github.com/Comfy-Org/ComfyUI/issues/15816)
   Multichannel (5.1) audio flattened to stereo triples frame count, so previews run at one-third speed. Fixed by PR #15828 preserving the planar PyAV channel layout.

9. **#15799 — MiniMax H3 `VAEDecodeAudio` returns constant DC/silence** — [Issue](https://github.com/Comfy-Org/ComfyUI/issues/15799)
   Sampled latents produce no valid native audio track; reproduces across bf16, `--cpu-vae`, and cu128. Points to a decode-path bug independent of the speed regression.

10. **#15814 — Regression-test gaps for six previously-fixed bugs** — [Issue](https://github.com/Comfy-Org/ComfyUI/issues/15814)
    An audit finds six merged fixes (userdata, websocket, execution cache) shipped without regression tests. Catalyst for new test-focused PRs (#15815), signaling a push for better CI coverage.

## Key PR Progress

1. **#15832 — Cache prepared ControlNet hints per hint size** — [PR](https://github.com/Comfy-Org/ComfyUI/pull/15832)
   Fixes #2540: area composition with shared `ControlBase` instances was re-running `common_upscale` every step due to a single-slot cache keyed on last-seen size. Now keyed per hint size.

2. **#15833 — Stop unconsumed lazy inputs from invalidating downstream cache** — [PR](https://github.com/Comfy-Org/ComfyUI/pull/15833)
   Fixes #11744: cache key folded all ancestor inputs, including lazy ones never requested by `check_lazy_status`; an auto-increment upstream of an unused branch was flushing downstream caches every queue.

3. **#15830 — Fix LoRA alpha from safetensors metadata** — [PR](https://github.com/Comfy-Org/ComfyUI/pull/15830)
   Fixes #12191: PEFT/diffusers trainers (SimpleTuner) store `alpha`/`rank` in header metadata rather than per-key tensors; `load_lora` now reads them, silently fixing previously-inert LoRAs.

4. **#15831 — Make KSampler sigma schedules reachable from custom sampling** — [PR](https://github.com/Comfy-Org/ComfyUI/pull/15831)
   Fixes #4367: `BasicScheduler` couldn't reproduce the steps+1 schedule KSampler builds for `dpm_2`, `dpm_2_ancestral`, `uni_pc`, `uni_pc_bh2`, causing inconsistent outputs.

5. **#15828 — Preserve multichannel audio layout in previews** — [PR](https://github.com/Comfy-Org/ComfyUI/pull/15828)
   Fixes #15816: multi-channel waveforms now keep planar PyAV frame layout (FLAC/Opus-friendly), resolving one-third-speed playback.

6. **#15749 — Fix Windows physical GPU detection** — [PR](https://github.com/Comfy-Org/ComfyUI/pull/15749)
   Fixes #15745: counts top-level physical GPUs from `nvidia-smi -L` instead of GDI adapter entries, eliminating duplicate records for a single NVIDIA GPU.

7. **#15824 — LTX-2.5 audio NaN, muxing loop, MPS temporal chunking fixes** — [PR](https://github.com/Comfy-Org/ComfyUI/pull/15824)
   Multi-fix PR addressing audio NaN errors, video muxing packet loop, and an MPS upsampler issue, plus a macOS launch script.

8. **#15819 — Include bfloat16 in macOS attention-upcast workaround** — [PR](https://github.com/Comfy-Org/ComfyUI/pull/15819)
   Fixes #15818: `force_upcast_attention_dtype()` now also upcasts bf16 checkpoints (LTX 2.5), making default MPS attention work instead of requiring split-cross-attention.

9. **#15823 — Sanitize argv in `/system_stats`** — [PR](https://github.com/Comfy-Org/ComfyUI/pull/15823)
   Fixes #15821: unauthenticated `/system_stats` leaked raw `sys.argv`, exposing CLI secrets (API keys, paths). Now masks sensitive flags — a security hardening alongside RFC #15822.

10. **#15826 — `--preview-full-batch` grid preview flag** — [PR](https://github.com/Comfy-Org/ComfyUI/pull/15826)
    Adds a CLI flag rendering step-by-step latent previews as a tiled grid for all batch items, not just the first — tied to feature request #15825.

## Feature Request Trends
- **Video editing primitives**: `VideoTrim` / `VideoCrop` nodes with `VIDEO_EDIT` widgets (#15637), basic looping nodes for video workflows (#13180).
- **Model management ergonomics**: a dedicated node to unload models and clear node caches, automating the two UI buttons (#15675).
- **Security & multi-user hardening**: token authentication for `--multi-user` mode to prevent cross-user profile access (#15822), plus argv sanitization (#15821).
- **Full-batch visibility**: latent preview grids showing every batch item, not just the first (#15825, #15826).
- **New model coverage**: SenseNova-U1.5-8B-MoT support (#15192), Meshy-7 partner-node support (#15807), Mini H3 image-to-video with native audio blueprint (#15829).

## Developer Pain Points
- **MiniMax H3 is a recurring sore spot**: performance regressions (~4x slowdown) and `VAEDecodeAudio` returning silence/DC draw multiple threads across separate issues (#15665, #15799, #15480).
- **Caching behavior churn**: frequent changes to pinning/caching (PR 15027) undermine user setups on high-RAM Linux machines (#15556); lazy-input cache invalidation is fragile (#15833).
- **Cross-platform GPU friction**: Windows phantom multi-GPU detection (#15745), AMD/ROCm `CUDA invalid argument` errors (#15653), and macOS MPS black-video issues (#15818) continue to consume maintenance effort.
- **Instability in the nightly/update path**: PyAV API removal breaking `comfy_api/latest` (#15784) and update failures between patch versions (#15257) erode confidence in rolling releases.
- **Missing regression tests**: maintainers and community alike flag that fixes for userdata, websocket, and execution cache shipped without test coverage (#15814), driving a new wave of test-focused PRs (#15815) — a signal the project is investing in CI rigor.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Community Digest — 2026-08-24

## 1. Today's Highlights
The maintainers are actively hardening runner lifecycle management — two PRs ([#17954](https://github.com/ollama/ollama/pull/17954), [#17516](https://github.com/ollama/ollama/pull/17516)) address a long-standing class of stale/crashed llama-server issues that have been plaguing users (#17428/#17509 family). Separately, persistent prefill cache work is advancing via two competing implementations ([#17953](https://github.com/ollama/ollama/pull/17953), [#17278](https://github.com/ollama/ollama/pull/17278)), which would eliminate costly full-prefill re-runs after model reloads. On the quality side, a fix for the Qwen3 parser's failure to split thinking output on HF-imported GGUF models ([#17945](https://github.com/ollama/ollama/pull/17945)) is up, closing #17937.

## 2. Releases
No new releases in the last 24 hours.

## 3. Hot Issues
- **[#17778 — qwen3.8 tool-loop error (500: "no user query found in messages")](https://github.com/ollama/ollama/issues/17778)** — Open, 17 comments, 8 👍. Models calling tools repeatedly during chat streaming eventually produce a server error at large context (~205k). High community engagement; users hit this in agentic workflows.
- **[#17754 — qwen3.8:27b "system message must be at the beginning"](https://github.com/ollama/ollama/issues/17754)** — Closed, 8 👍. Claude Code integration fails with a 500 when SYSTEM messages aren't placed correctly — a recurring API-layer friction point for tool-based clients.
- **[#17910 — Regression: long completions never stop (0.32.11–0.32.15)](https://github.com/ollama/ollama/issues/17910)** — Open. Generation runs past any natural end until killed; 0.32.9 unaffected. Found in the 0.32.9→0.32.11 window; users waiting for a fix to upgrade.
- **[#17946 — Sharded GGUF import fails only after blobs copied to storage](https://github.com/ollama/ollama/issues/17946)** — Open, 5 comments. `ollama create` copies shards into blob storage before validating split filenames, wasting time and disk on invalid models.
- **[#17939 — HF-import derives wrong `stop` params for Muse-Glimmer-30B GGUF](https://github.com/ollama/ollama/issues/17939)** — Open. Pulling third-party HF GGUF models can truncate output to ~3 tokens because auto-derived stop parameters are wrong — an import-conversion correctness bug.
- **[#17957 — ornith-1.5:35b fails with response format + tools](https://github.com/ollama/ollama/issues/17957)** — Open, 6 comments. Grammar parsing fails when both a response format and tools are specified; works on qwen3.6:35b.
- **[#17614 — Lower quantization formats emit garbage/unintelligible output](https://github.com/ollama/ollama/issues/17614)** — Closed. Switching KV quantization from q8_0 to q4_0 produced repeated "AI AI AI..." noise — raises version-specific quantization-quality concerns.
- **[#17870 — Vulkan on gfx1151 (Strix Halo): compute-ring timeout / ErrorDeviceLost on long prefill](https://github.com/ollama/ollama/issues/17870)** — Open. AMD Ryzen AI MAX+ 395 users hit amdgpu watchdog resets; `num_batch=128` is the only known workaround.
- **[#17958 — Strix Halo: ≥2 resident models pins GPU at max clock (~25 W) when idle](https://github.com/ollama/ollama/issues/17958)** — Open, new today. Power-gating fails with two or more runner processes resident, blocking energy efficiency on AMD iGPUs.
- **[#17484 — "context deadline exceeded" on many HF model pulls](https://github.com/ollama/ollama/issues/17484)** — Open, 13 comments. Persistent timeout errors when pulling/running models from hf.co (e.g., Qwen3.6 GGUF), impacting a broad set of third-party models.

## 4. Key PR Progress
- **[#17954 — server: refuse exited runners and bound embed concurrency](https://github.com/ollama/ollama/pull/17954)** — Detects llama-server exit via done channel, refuses to hand out exited runners, re-queues requests, and bounds /api/embed fan-out. Directly targets the stale-runner failure class.
- **[#17516 — server: evict loaded runners whose llama-server process has exited](https://github.com/ollama/ollama/pull/17516)** — Companion fix: removes wedged runners from the scheduler's loaded set so `ollama ps` no longer reports phantom loaded models.
- **[#17953 — experimental prefill cache persistence across runner reloads](https://github.com/ollama/ollama/pull/17953)** — Opt-in KV prefill cache that survives subprocess restarts, avoiding full prefill cost after keep-alive expiry or model switches.
- **[#17278 — warm prefill cache across model unload/reload](https://github.com/ollama/ollama/pull/17278)** — Long-running alternative via `OLLAMA_PREFILL_CACHE`: fingerprinting, 8 GiB LRU cap, fail-open. Closes #17247.
- **[#17945 — Enable explicit thinking for the Qwen3 parser](https://github.com/ollama/ollama/pull/17945)** — Fixes #17937: HF-imported Qwen3 GGUF models not splitting `<think>` content into `message.thinking`. Disabled by default.
- **[#17949 — cmd: validate split GGUF files before upload](https://github.com/ollama/ollama/pull/17949)** — Fixes #17946 by validating shard filenames and metadata before blobs are copied during `ollama create`.
- **[#17940 — docs: add NVIDIA driver version guidance by compute capability](https://github.com/ollama/ollama/pull/17940)** — Closes #17789, giving concrete driver-versus-GPU compatibility examples for older hardware.
- **[#17956 — mlx: deduplicate CUDA runtime payloads](https://github.com/ollama/ollama/pull/17956)** — Removes duplicate CUDA runtime libs in MLX CUDA builds by sharing the sibling cuda_v13 payload and updating runtime path discovery.
- **[#16263 — responses: support namespace tool calls](https://github.com/ollama/ollama/pull/16263)** — Preserves OpenAI Responses namespace tool wire contract in streaming/non-streaming/continuation requests.
- **[#17959 — app: add optional auto mode preference in settings view](https://github.com/ollama/ollama/pull/17959)** — Small UX addition enabling auto mode opt-in from settings.

## 5. Feature Request Trends
- **Community integrations growth**: Three new-listings PRs/issues this week — Grux ([#17960](https://github.com/ollama/ollama/pull/17960)), Locally Uncensored ([#17952](https://github.com/ollama/ollama/pull/17952)), and Ontheia ([#17947](https://github.com/ollama/ollama/issues/17947)) — showing momentum for Ollama as an embedded backend in desktop tools and agent platforms.
- **Prefill/KV cache persistence** across runner reloads: two PRs ([#17953](https://github.com/ollama/ollama/pull/17953), [#17278](https://github.com/ollama/ollama/pull/17278)) target the same gap — eliminating repeated prefill for agents and long-lived conversations.
- **Runner lifecycle robustness**: multiple PRs to detect, evict, and refuse crashed/exited llama-server processes ([#17954](https://github.com/ollama/ollama/pull/17954), [#17516](https://github.com/ollama/ollama/pull/17516)) — a stabilizing requirement for production deployments.
- **Better HF/GGUF import handling**: proactive validation before blob upload ([#17949](https://github.com/ollama/ollama/pull/17949)), correct parser defaults ([#17945](https://github.com/ollama/ollama/pull/17945)), and correct stop-param derivation ([#17939](https://github.com/ollama/ollama/issues/17939)) point at making third-party model ingestion deterministic.
- **Documentation gaps**: users requesting clarity on over-length prompt behavior ([#17944](https://github.com/ollama/ollama/pull/17944)) and NVIDIA driver compatibility ([#17940](https://github.com/ollama/ollama/pull/17940)).

## 6. Developer Pain Points
- **Tool-calling + system-message fragility**: repeated 500s around tool loops and SYSTEM message ordering (#17778, #17754) — a top friction point for agent frameworks and Claude Code-style CLIs.
- **HF-imported model quality surprises**: incorrect `stop` params truncating output (#17939), Qwen3 thinking not split (#17937), sharded GGUF import waste (#17946) — importing third-party models remains error-prone.
- **Quantization stability**: lower KV quantization producing garbage (#17614) erodes trust in smaller-footprint configurations.
- **Version-regression whack-a-mole**: generation never terminating in 0.32.11–0.32.15 (#17910) and the 0.32.1 token-repeat regression (#17270) suggest broader test gaps around long completions.
- **AMD iGPU/power issues**: Vulkan compute timeouts (#17870) and GPU pinned at max clock with multiple resident models (#17958) affect the Ryzen AI MAX+ / Strix Halo lineup — an emerging hardware class with no clean fix yet.
- **Context-window inconsistency**: identical prompts returning 400 vs 200 depending on model (#17889) confuses users and shows default-context handling needs clarification.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

# llama.cpp Community Digest — 2026-08-24

## 1. Today's Highlights

The project shipped 9 new builds (b10588–b10603), headlined by **MTP (Multi-Token Prediction) support for GLM-4.5-Air** (#26534) — the first major speculative-decoding feature to land in releases this week. The community is actively wrestling with GPU-backend reliability: a CUDA kernel stall bug on Blackwell GPUs (#27102) is the most-discussed issue (26 comments), and AMD Strix Halo (gfx1151) users continue to report HIP/ROCm corruption where Vulkan works correctly (#27579). Speculative decoding remains the dominant development theme, with DFlash2, draft-mtp, and MOE fusion extensions all progressing in parallel.

## 2. Releases

Nine builds released in the last 24 hours:

| Build | Key change |
|-------|-----------|
| **b10603** | Added MTP support for GLM-4.5-Air (#26534); includes MTP GGUF support in converter/loader |
| **b10599** | Moved `tools/parser` into the test suite (#27548) |
| **b10598** | mtmd: pillow-accurate resize algorithm with correct `resize_algo` for all models; includes speed optimization (#27594) |
| **b10595** | Server: new `LLAMA_SERVER_SLOTS_N_DIFF` slot configuration (#27600) |
| **b10594** | Skipped the device_info loop when output isn't needed — avoids costly CUDA GPU-context creation (#26692) |
| **b10593** | DeepseekV4: fixed rollback with multi-sequence speculation; static graph topology, single-use pending rollback (#26756) |
| **b10590** | Vendor update: `subprocess.h` (#27409) |
| **b10589** | CUDA: added `POOL_1D` support (#27573) |
| **b10588** | common/json.h: fixed clang LTO build (#27575) |

## 3. Hot Issues

- **[#27102 — CUDA kernel stall killed by watchdog on Blackwell](https://github.com/ggml-org/llama.cpp/issues/27102)** — *26 comments, 4 👍*. RTX Pro 6000 Blackwell MAX-Q users hit eval-time kernel stalls/DDL watchdog kills with Qwen3.8 GGUF. Highest-traffic issue; affecting Nvidia's newest arch, tagged `help wanted`.
- **[#24280 — GGML_ASSERT(addr) failed with MTP + Vulkan + --no-mmap](https://github.com/ggml-org/llama.cpp/issues/24280)** — *12 comments* (closed). Qwen 3.6 27b crash on Windows/Vulkan; MTP combined with `--no-mmap` triggers an address assertion.
- **[#24394 — mtmd video input silently fails with MOOV atom at file end](https://github.com/ggml-org/llama.cpp/issues/24394)** — *11 comments, 1 👍*. Model receives 0 frames when MP4's MOOV atom isn't at the front (ffmpeg's default layout). Confirmed companion bug on Windows (#24429, deadlock in `probe()`).
- **[#26741 — Deepseek4 garbled output with parallelism + speculation](https://github.com/ggml-org/llama.cpp/issues/26741)** — *11 comments* (closed). Garbled generation when parallel processing and speculative decoding are combined; fixed in release b10593.
- **[#20632 — Graceful reasoning budget termination](https://github.com/ggml-org/llama.cpp/issues/20632)** — *10 comments, 1 👍*. Long-standing enhancement request (good first issue) to avoid mid-sentence cutoff when a reasoning budget ends instead of abruptly truncating.
- **[#27579 — HIP/ROCm corrupted output on gfx1151](https://github.com/ggml-org/llama.cpp/issues/27579)** — *6 comments*. Strix Halo APU with ROCm 7.2.4; two dense architectures fail under HIP while Vulkan produces byte-identical correct results — points to HIP kernel bugs.
- **[#27576 — llama-server.exe fails to start in b10587](https://github.com/ggml-org/llama.cpp/issues/27576)** — *5 comments*. Windows Vulkan build regression; startup fails even with valid model/GPU args, a notable release-quality issue.
- **[#27282 — Native MTP reserves separate CUDA arena → OOM](https://github.com/ggml-org/llama.cpp/issues/27282)** — *5 comments, 1 👍*. MTP allocates its own compute arena causing out-of-memory; reviewers note shared gallocr fixes it.
- **[#24429 — mtmd video hangs on Windows (same MOOV family)](https://github.com/ggml-org/llama.cpp/issues/24429)** — *5 comments, 5 👍*. `probe()` deadlocks on faststart MP4s; decode emits 0 frames when MOOV is at end. High community 👍 count signals strong demand for video-input fixes.
- **[#26088 — Gemma 4 31B `<unused49>` infinite generation loop](https://github.com/ggml-org/llama.cpp/issues/26088)** — *5 comments*. Reinforces a recurring theme: Gemma 4 on gfx1151 (#26239) and Gemma 4 12B Vulkan segfault (#27314) suggest family-wide evaluation instability on certain backends.

## 4. Key PR Progress

- **[#27342 — DFlash2 support (local convolution + candidate selector)](https://github.com/ggml-org/llama.cpp/pull/27342)** — Next-gen speculative architecture adding grouped dynamic depthwise convolution and a candidate selector alongside DFlash; the most ambitious open speculation PR.
- **[#26534 — MTP for GLM-4.5-Air](https://github.com/ggml-org/llama.cpp/pull/26534)** (merged → b10603) — Full MTP implementation for `glm4moe`, plus converter/loader support for combined, trunk-only, and MTP-only GGUF layouts.
- **[#26294 — CUDA: fix duplicate expert compaction in mul_mat_id](https://github.com/ggml-org/llama.cpp/pull/26294)** — Fixes #24591 where a token assigning the same expert ID to multiple top-k slots used a wrong match flag instead of a real count, corrupting MoE results.
- **[#27626 — Server: fix tool calls dropped from trailing assistant message](https://github.com/ggml-org/llama.cpp/pull/27626)** — Fixes #27588: `--prefill-assistant` + trailing `assistant(tool_calls)` silently dropped tool calls on continuation mode → confusing context corruption.
- **[#27621 — CUDA: extend MOE fusion to specdec](https://github.com/ggml-org/llama.cpp/pull/27621)** — Extends BS=1 MoE fusions (gate + biases + NVFP4 scales + GLU folded into up-projection) to specdec 2–8 tokens, matching MTP/DFlash performance characteristics.
- **[#27332 — Vulkan: density gate for MUL_MAT_VEC_ID](https://github.com/ggml-org/llama.cpp/pull/27332)** — Replaces the fixed 8-token cutoff with the MoE density gate; eliminates the batch-9 decode regression on AMD RADV: +36% at B=9, +27% at B=16, +21% at B=64.
- **[#27590 — ggml-cpu: AVX-512/VNNI for Q5_K/Q6_K dot products](https://github.com/ggml-org/llama.cpp/pull/27590)** — Processes two 256-element K-quant blocks per iteration using full 512-bit vector width on x86.
- **[#26490 — Deepseek 4 `-sm tensor` split](https://github.com/ggml-org/llama.cpp/pull/26490)** — Adds tensor-parallel execution for DeepSeek4 with mirrored flash-attention (single K head), plus a `memset_tensor` addition to the meta backend.
- **[#27624 — Server: clear stale state on LRU slot reuse](https://github.com/ggml-org/llama.cpp/pull/27624)** — Fixes #27148: LRU-evicted slots previously retained prompt tokens/checkpoints/KV from unrelated requests, causing cross-request contamination.
- **[#27583 — StreamingLLM-style KV eviction](https://github.com/ggml-org/llama.cpp/pull/27583)** — Proposes `--kv-evict-sink` / `--kv-evict-window` to cap physical cache at sink + recent + ubatch while keeping logical context — a direct answer to long-context VRAM exhaustion.

## 5. Feature Request Trends

- **Speculative decoding expansion** — Dominant theme: DFlash2 (#27342), draft-mtp for dots3note (#27618), MTP for GLM-4.5 (#26534), MOE fusion for specdec (#27621), and a feature request for `llama serve -hf` router integration (#26116).
- **Kernel & backend performance fusions** — SYCL fused RMS_NORM/MUL/ADD chains (#27610), AVX-512 K-quants (#27590), SM120 CUTLASS MoE prefill for MXFP4/NVFP4 (#26704).
- **Efficient MoE serving** — Bandwidth-adaptive CPU–GPU co-execution with LRU expert caching, heatmap-driven mmap pinning, and full-layer double-buffered prefill (#27584, #26824).
- **Context/memory management** — StreamingLLM-style KV eviction (#27583), graceful reasoning-budget termination (#20632), and `models-max` download flexibility (#26809).
- **New architecture support** — NVIDIA Nemotron-3-Puzzle-75B (#25444), DFM Mimir 1B HrmText (#27625), and general MTP variants continue to expand model coverage.

## 6. Developer Pain Points

- **GPU backend instability** — CUDA kernel stalls/watchdog kills on Blackwell (#27102), HIP/ROCm corruption on gfx1151 where Vulkan is correct (#27579), random `cudaStreamSynchronize` crashes (#27599), and Vulkan device-lost with DFlash (#27458) paint a picture of backend-specific eval bugs.
- **Speculative decoding reliability** — Draft acceptance collapse under concurrency (#27117), near-zero acceptance (1-of-633) on FreeBSD (#27151), MTP arena OOM (#27282), and corrupted drafts with parallel processing (#26741). Speed gains come at the cost of robustness.
- **Multimodal (mtmd) video handling** — MOOV-at-end silent failure (#24394) and Windows deadlocks/hangs (#24429, #27587, 10s+ video hanging the server) remain unresolved and heavily upvoted.
- **Build & startup regressions** — SYCL builds broken on Fedora/Windows (#27479), clang LTO failures (released b10588 fix), and a Windows `llama-server` regression in b10587 preventing startup entirely (#27576).
- **Off-by-one/edge cases in core logic** — The `axis <= GGML_MAX_DIMS` bounds bug (#26367) and kernel-compaction logic in `mul_mat_id` (#26294) highlight that low-level correctness issues are common review targets.

---

*Data compiled from github.com/ggerganov/llama.cpp activity on 2026-08-24. Releases: 9; open issues: ~44; open PRs: ~46.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*