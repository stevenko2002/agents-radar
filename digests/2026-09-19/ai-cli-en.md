# AI CLI Tools Community Digest 2026-09-19

> Generated: 2026-09-18 22:15 UTC | Tools covered: 12

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



Here are the key updates across major AI developer tools today, focusing strictly on releases, critical fixes, and major feature merges:

*   **Claude Code v2.1.277**: Shipped AGENTS.md fallback support, which automatically reads `AGENTS.md` as project instructions when `CLAUDE.md` is absent, alongside a new `CLAUDE_GATEWAY_PROXY_IS_EGRESS_BOUNDARY=1` environment variable for correct boundary enforcement in proxy-only egress setups. ([Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.277))
*   **OpenAI Codex v0.155.1**: Released a critical hotfix restoring `none` as the default reasoning summary for new local TUI sessions, resolving request rejections from providers that do not support reasoning summaries. ([Release](https://github.com/openai/codex/releases/tag/rust-v0.155.1))
*   **Gemini CLI v0.62.0-nightly.20260918.g9450ade79**: Updated with fixes for OAuth refresh token retention on refresh, idempotent credential deletion, and guards against negative layout dimensions in border rendering. ([Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.62.0-nightly.20260918.g9450ade79))
*   **GitHub Copilot CLI v1.0.87-0**: Introduced organization-level policy controls for the Auto routing tier (supporting strict or user-overridable managed defaults) and merged consecutive steering prompts into a single pending message in the chat input. ([Release](https://github.com/github/copilot-cli/releases/tag/v1.0.87-0))
*   **llama.cpp b11044**: Updated with Hexagon IM2COL updates (including a DMA patch-embed fast path), HMX Flash Attention head_dim padding (supporting non-multiple-of-64 dimensions like SigLIP's head_dim=72), and a critical `ggml` allocation failure check to prevent runtime crashes. ([Release](https://github.com/ggerganov/llama.cpp/releases/tag/b11044))
*   **Ollama Tool-Calling Parser Fix (PR #18532)**: Resolved a critical parser bug in `qwen3-coder` where tool calls were silently lost when preceded by model reasoning, alongside merging PR #18473 to expose supported thinking levels and defaults via `/api/show`. ([PR](https://github.com/ollama/ollama/pull/18532))
*   **Qwen Code v0.24.1-preview.0**: Released with recorded ACP boundary acceptance and merged PR #11874, which introduces a headless `--batch` mode and `qwen batch` command for cost-efficient asynchronous processing via the DashScope Batch API. ([Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.1-preview.0))
*   **Pi Local LLM Resilience (PR #9744)**: Merged a new `/retry` command to resume turns abandoned after failed connection retries (crucial for local LLM setups), alongside Azure Foundry Chat Completions support (PR #9714) unblocking DeepSeek V4 Pro. ([PR](https://github.com/earendil-works/pi/pull/9744))

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills Community Highlights
*Data as of 2026-09-19 · Source: [anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. Top Skills Ranking (Most-Watched PRs)

**#1298 — fix(skill-creator): isolate trigger evals and handle Windows and runtime failures** — MartinCajiao
Opens the most-watched thread. Tackles the skill-creator's trigger evaluation pipeline: per-worker command probes were competing with each other, `select()` on subprocess pipes fails on Windows, and unrelated tool errors abort the entire scan. Runtime failures were also being misclassified as non-triggers, corrupting negative examples and misleading optimization. Status: **OPEN**. [🔗](https://github.com/anthropics/skills/pull/1298)

**#1771 — feat(skills): add proofcore-contract-auditor** — ProofCore-Protocol
A Web3-oriented skill performing automated static analysis of Solidity/Rust smart contracts and anchoring cryptographic audit proofs onto the public TON Blockchain via ProofCore's zero-storage Merkle protocol. Status: **OPEN**. [🔗](https://github.com/anthropics/skills/pull/1771)

**#1703 — Add md2video-audio skill** — 70v-Yoyo
Zero-cost pipeline compiling Markdown documents into professional-grade MP4 videos with realistic human-like voiceovers, routing Markdown → Marp presentation slides → video + TTS. Status: **OPEN**. [🔗](https://github.com/anthropics/skills/pull/1703)

**#1742 — fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers** — Kuldeeep18
Fixes #1668. In `mcp>=2.0.0`, `streamablehttp_client` was renamed to `streamable_http_client`, and custom HTTP headers are now configured through `create_mcp_http_client`/`http_client` rather than a direct kwarg. Status: **OPEN**. [🔗](https://github.com/anthropics/skills/pull/1742)

**#1734 — Detect orphaned docx comments** — rohitjain25
A focused quality-control skill for DOCX documents: identifies orphaned comments left dangling without their host text. Status: **OPEN**. [🔗](https://github.com/anthropics/skills/pull/1734)

**#525 — Add pyxel skill for retro game development** — kitao
Guides the agent through creating, debugging, and verifying retro games in Python using Pyxel — deterministic headless runs, direct frame inspection, and task-specific state checks, with separate references for Pyxel behavior and presentation defaults. Status: **OPEN**. [🔗](https://github.com/anthropics/skills/pull/525)

**#514 — Add document-typography skill** — PGTBoos
Targets typographic quality in AI-generated documents: prevents orphan word wrap (1–6 words spilling onto the next line), widow paragraphs (headers stranded at page bottom), and numbering misalignment. Status: **OPEN**. [🔗](https://github.com/anthropics/skills/pull/514)

**#1615 — Add scnet-hpc skill** — lql341
Operates SCNet HPC clusters through profile-based SSH and Slurm workflows: profile-specific connection/partition/memory/module/accelerator guidance, SSH setup, Slurm job generation, cluster discovery, and profile refresh. Status: **OPEN**. [🔗](https://github.com/anthropics/skills/pull/1615)

---

## 2. Community Demand Trends (from Issues)

| Trend | Signal |
|---|---|
| **Security & trust boundaries** | Issue #492 (43 comments, 2👍) reports community skills distributed under the `anthropic/` namespace impersonating official skills — a trust-boundary abuse vector. The community's single loudest concern. |
| **Org-wide skill sharing** | Issue #228 (16 comments, 8👍) demands shareable skill libraries within organizations instead of manual `.skill` file round-trips through Slack/Teams. |
| **Skill trigger reliability** | Issue #556 (12 comments, 7👍): `run_eval.py` + `claude -p` never triggers skills (0% trigger rate) — the evaluation harness itself is broken, undermining trust in skill quality measurement. |
| **Skill discoverability/stability** | Issue #62 (10 comments): users report entire skill collections vanishing with errors after file renames — a persistence/registration concern. |
| **Agent memory & state compaction** | Issue #1329 (9 comments): proposal for `compact-memory` — symbolic notation for compact agent state, reducing prose-bloat in long-running agents. |
| **Skill-creator quality** | Issue #202 (8 comments): skill-creator reads like developer documentation rather than an operational skill — verbose, educational tone, token-inefficient. |
| **Plugin duplication** | Issue #189 (6 comments, 9👍): `document-skills` and `example-skills` plugins ship identical skills, cluttering the context window. |
| **Skills as MCPs** | Issue #16 (4 comments): expose every Skill as an MCP with a typed API (e.g., `generateAlgorithmArt({prompt, p5JsOptions})`). |

---

## 3. High-Potential Pending Skills (Active PRs, Not Yet Merged)

- **#1776 — Add `blast-radius` skill** — kishormorol · Updated 2026-09-18 (most recently active). A checklist for bulk/destructive writes: archiving users, revoking access, deleting rows, mailing batches — classifies whether a query is right about *rows* vs. right about *the world*. [🔗](https://github.com/anthropics/skills/pull/1776)
- **#1769 — Fix skill-creator trigger detection reporting 0% recall** — ChiFungHillmanChan · Fixes #1721. Skill-creator reports `precision=100% recall=0%` for every skill regardless of description; `run_loop` then tunes against evidence that every positive query failed, reporting a false optimization. [🔗](https://github.com/anthropics/skills/pull/1769)
- **#1628 — Add Hivemind: Zero-Cost Multi-Agent Orchestration Skill** — Hanishchow · Delegates mechanical work to headless opencode workers on free models while Claude Code stays the sole planner/reviewer/merger. [🔗](https://github.com/anthropics/skills/pull/1628)
- **#1627 — feat: add buffer-api Agent Skill** — JPeetz · Portable skill for the Buffer GraphQL API: schedule, manage, and analyze social posts across Claude, Cursor, Codex, OpenClaw, Hermes, n8n. [🔗](https://github.com/anthropics/skills/pull/1627)
- **#1765 — fix(office): decode redlining diffs as UTF-8** — 00200200 · Fixes #1707. Keeps `git diff` text intact for non-ASCII document content on Windows/non-UTF-8 locales across DOCX, PPTX, and XLSX redlining validators. [🔗](https://github.com/anthropics/skills/pull/1765)
- **#1724 — mcp-builder: update evaluation.py default model to claude-sonnet-5** — ExpertVabond · Bumps the stale `claude-3-7-sonnet-20250219` default in both the signature and the `-m/--model` argparse option. [🔗](https://github.com/anthropics/skills/pull/1724)

---

## 4. Skills Ecosystem Insight

> The community's most concentrated demand is **trust and reliability at the Skills layer** — securing namespace authenticity (#492), fixing the broken trigger-evaluation harness (#556, #1769, #1298), eliminating plugin duplication (#189), and ensuring skills persist and fire correctly (#62) all outrank any single new Skill feature, signaling that maturation of the ecosystem's plumbing matters more to users than net-new capabilities.

---



# Claude Code Community Digest — 2026-09-19

## 1. Today's Highlights

Claude Code shipped v2.1.277 with AGENTS.md support as a fallback when CLAUDE.md is absent, plus a new egress-boundary environment variable for Claude apps gateways. The prior release (v2.1.276) fixed a regression that broke all requests through proxies with a spurious `advisor_20260301` input tag. Community discussion centered on the ongoing Glob/Grep tool removal on native macOS/Linux builds, which some users consider a breaking API change despite documentation updates.

## 2. Releases

### v2.1.277
- **AGENTS.md support**: When no `CLAUDE.md` exists, Claude Code now reads `AGENTS.md` as project instructions. Configurable under "Project instructions" in `/config`. Not yet available on Bedrock, Vertex, or Foundry.
- **`CLAUDE_GATEWAY_PROXY_IS_EGRESS_BOUNDARY=1`**: New flag for Claude apps gateways whose only egress path is through a proxy, enabling correct boundary enforcement.

### v2.1.276
- **Proxy/gateway 400 fix**: Resolved a regression (introduced in 2.1.275) where every request failed with `400 … Input tag 'advisor_20260301'` when `ANTHROPIC_BASE_URL` pointed at a proxy or gateway.

### v2.1.275
- **Gateway sign-in account display**: The signed-in account is now shown during Claude apps gateway sign-in—confirmed before credentials are saved, and visible in `/status`.
- **Send-now key**: `ctrl+enter` (or `ctrl+x ctrl+s`) interrupts the current turn and sends all queued messages at once.

## 3. Hot Issues

1. **#91492 — Grep/Glob removal on native macOS/Linux is a breaking API change** ([link](https://github.com/anthropics/claude-code/issues/91492))
   Opened 2026-09-02, this argues that removing the built-in `Grep` and `Glob` tools on native platforms breaks downstream tooling that depends on the documented tool contract. The author frames it as more than a docs gap—it's a behavioral regression for scripts and integrations. Community reaction is mixed but the issue has 3 👍.

2. **#51781 — Native macOS/Linux builds still document `Glob` and `Grep` as separate tools** ([link](https://github.com/anthropics/claude-code/issues/51781))
   A long-standing docs issue (opened April 2026) noting the tools-reference page still lists `Glob` and `Grep` as available on native builds when they've been removed. 8 comments, 3 👍. Resolved as documentation-only but still open in spirit.

3. **#75245 — PreToolUse hook `if: "Bash(...)"` false-positives on `$()` command substitution** ([link](https://github.com/anthropics/claude-code/issues/75245))
   A `PreToolUse` hook with `if: "Bash(git commit*)"` incorrectly fires on commands like `echo $(date)` that contain command substitution but no `git` token. The v2.1.163 changelog claimed this was fixed; it regressed. 5 comments, macOS users affected.

4. **#77605 — Claude in Chrome: cross-machine browser driving without reliable device identification** ([link](https://github.com/anthropics/claude-code/issues/77605))
   Feature request to allow a connected Chrome browser to be driven from any machine, bypassing per-device pairing. 4 comments. Touches security model and session persistence.

5. **#77281 — Claude Design ↔ Claude Code direct session bridge** ([link](https://github.com/anthropics/claude-code/issues/77281))
   Currently the only bridge is `/design-sync`, a one-directional file-level batch operation. Users want a live, bidirectional conversation link between Design and Code sessions. 3 comments.

6. **#77275 — Mid-turn user messages lack reply-target identity** ([link](https://github.com/anthropics/claude-code/issues/77275))
   In orchestration-heavy sessions with background agents, user messages spliced into a running turn carry no identity or reply-target reference, making crossed replies unattributable. 2 comments. A real problem for multi-agent workflows.

7. **#77349 — Per-message timestamps in interactive TUI** ([link](https://github.com/anthropics/claude-code/issues/77349))
   Session JSONL already stores ISO-8601 timestamps, but there's no way to surface them in the live terminal UI. 2 comments, 3 👍.

8. **#77367 — Show model powering each subagent task in task display** ([link](https://github.com/anthropics/claude-code/issues/77367))
   The `/tasks` panel and bottom-of-window display show label, status, and elapsed time—but not which model is running each task. Agent definitions can override models via frontmatter, yet the UI doesn't reflect it. 2 comments, 2 👍.

9. **#77342 — Display MCP resource title/name in `@`-mention chip** ([link](https://github.com/anthropics/claude-code/issues/77342))
   When selecting an MCP resource from the `@` picker, show a human-readable label (`resource.title ?? resource.name`) while retaining the URI as the underlying value. 1 comment.

10. **#77485 — `plugin install --config`: support stdin for secrets** ([link](https://github.com/anthropics/claude-code/issues/77485))
    Currently the only non-interactive way to set a plugin's `userConfig` value, `--config <key=value>` forces secrets (API tokens) into the process argument list. Users want stdin support to keep secrets out of `argv`. 1 comment. A legitimate security gap.

## 4. Key PR Progress

1. **#95409 — `mods/agents-md`: the AGENTS.md project-instructions mod** ([link](https://github.com/anthropics/claude-code/pull/95409))
   Adds the source for an `agents-md` mod under `mods/agents-md`, mirroring the layout of `sec-default`, `diff`, and `telemetry`. The mod reads `AGENTS.md` the same way the engine reads `CLAUDE.md`, gated behind an `instructionFiles` option. This is the implementation companion to the v2.1.277 release feature.

2. **#95417 — `mods/agents-md`: Read attaches no nested AGENTS.md where engine attaches nothing** ([link](https://github.com/anthropics/claude-code/pull/95417))
   Ensures the mod's `tool.call` hook on `Read` doesn't attach nested `AGENTS.md` in runs where the engine itself attaches nothing (e.g., `--bare` or `CLAUDE_CODE_DISABLE_ATTACHMENTS`). Reads `$.env.get` with the exact spellings the engine uses.

3. **#95423 — `diff`: shell command the tool held read-only fetches nothing** ([link](https://github.com/anthropics/claude-code/pull/95423))
   With its pane open, the `diff` mod was refetching after every Bash or PowerShell call. Now it only refetches after commands that may have written; read-only commands (`ls`, `git status`, `cat`, grep) are skipped by reading `isReadOnly` from the shell tool.

4. **#95198 — `mods/diff`: type `openPane`'s answer as `unknown`** ([link](https://github.com/anthropics/claude-code/pull/95198))
   The diff mod's host contract declared `openPane` as returning `Promise<void>`, but `$.ui.open` is about to resolve with a small result object. Changing the type to `Promise<unknown>` compiles against both current and next engine typings. No caller reads the value; behavior is unchanged.

5. **#51452 — Update README.md** ([link](https://github.com/anthropics/claude-code/pull/51452))
   Docs cleanup: rewrote README to remove AI writing patterns (filler, promotional language, superficial analyses), tightened section headers, simplified the install block, and condensed the privacy section. Also fixed a broken npm badge.

## 5. Feature Request Trends

Across the 30 issues reviewed, several clear themes emerge:

- **Subagent and background-task visibility**: Multiple requests (#77367, #77275, #77425, #77326) ask for better task metadata in the UI—model names, task numbers, reply-target identity, and collapsed transcripts in VS Code. The pattern: users run many agents concurrently and need richer, more scannable task management.
- **TUI/UX polish**: Per-message timestamps (#77349), named headless sessions in the resume picker (#77382), MCP resource labels in `@`-chips (#77342), and customizable sidebar highlights (#77481) all point to a desire for finer-grained control over the terminal experience.
- **Plugin and hook extensibility**: Stdin support for `plugin install --config` secrets (#77485), background-task liveness signals exposed to hooks (#77251), and `disable-model-invocation` in agent frontmatter (#77435) reflect a growing appetite for deeper plugin/MCP integration.
- **Cross-surface workflows**: Claude Design ↔ Claude Code bridging (#77281) and cross-machine browser control (#77605) suggest users want Claude Code to function as a node in a larger, multi-device orchestration graph.
- **Security and credential handling**: Multiple issues (#77468, #77485, #77409, #77236) revolve around credential guardrails, secrets in argv, and permission gates—indicating a tension between safety mechanisms and operator autonomy.

## 6. Developer Pain Points

- **Breaking tool API changes without migration paths**: The Glob/Grep removal on native platforms (#91492, #51781) is the clearest example—scripts and integrations that relied on the documented tool contract broke silently. Users expect either backward compatibility or a documented migration.
- **Proxy/gateway compatibility fragility**: The v2.1.275→v2.1.276 regression (`400 … Input tag 'advisor_20260301'`) broke all requests through common proxy configurations. Proxy users are disproportionately affected by server-side tag changes they can't control.
- **Hook false-positives on shell syntax**: PreToolUse hooks matching on `Bash(...)` patterns continue to misfire on command substitution (`$()`), undermining trust in hook-based automation (#75245).
- **Credential guardrails blocking legitimate workflows**: Operators managing self-hosted infrastructure report that the credential guardrail refuses to place their own secrets into fields or env vars, even through commands that never print the value (#77468). The safeguards feel overly broad for power users.
- **Stale issues and slow triage**: The vast majority of issues shown are marked `[CLOSED]` and `[stale]`, with many dating back to July 2026. While some have received community discussion, the lack of visible resolution paths frustrates users who filed detailed bug reports or feature requests.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Thinking Process:

1.  **Understand the Goal**: The user wants an "OpenAI Codex community digest" for 2026-09-19 based on provided GitHub data (releases, changelog, issues, pull requests). The style should be concise, professional, and suited for technical developers, with specific sections: Today's Highlights, Releases, Hot Issues (10 items), Key PR Progress (10 items), Feature Request Trends, and Developer Pain Points. Include GitHub links.

2.  **Analyze the Data**:
    *   **Date**: 2026-09-19 (The prompt asks for digest for 2026-09-19, data updated up to 2026-09-18/19).
    *   **Latest Releases**:
        *   `rust-v0.155.1`: Bug fixes - "New local TUI sessions now leave reasoning summaries disabled by default, fixing request rejection by providers that do not support them. Explicit reasoning-summary settings remain respected. (#46467)"
    *   **Changelog**:
        *   `rust-v0.156.0-alpha.4`, `alpha.3`, `alpha.2`, `alpha.1` (alphas)
        *   `rust-v0.155.0-alpha.9.2`
        *   `rust-v0.155.0`: Added experimental `/voice` conversations, live reasoning summaries in TUI, completion timestamps.
        *   `rust-v0.155.0-alpha.18`
    *   **Latest Issues (Top 30 by comment count, focus on top 10 noteworthy ones)**:
        *   #33624 (35 comments): Safety: require hard confirmation/recovery gate for bulk/home-directory deletion even in Full Access (reported GPT-5.6 Sol incident with Ultra-mode subagent deleting home directory). Critical safety issue.
        *   #42215 (34 comments): Windows ChatGPT Work: "Could not use this project for a local chat" — project context sync fails at filesystem stage.
        *   #46022 (23 comments): CRITICAL DATA LOSS [Windows] Codex mass-deleted hundreds of GB outside project scope. Destructive filesystem operation escaped scope.
        *   #25826 (22 comments, 19 👍): Windows Desktop: maximized window spills onto adjacent monitors in multi-monitor setup.
        *   #37856 (18 comments, 11 👍): VS Code extension: stale thread owner blocks chat with "open in another application".
        *   #45626 (13 comments, 1 👍): Windows Desktop: Follow-up messages disabled after first completed turn; existing threads cannot send (CLI unaffected).
        *   #16994 (12 comments, 5 👍): Desktop automations on Windows/WSL create runs but no rollout materializes, resume fails with 'no rollout found'.
        *   #17541 (10 comments, 8 👍): Model switch mid-conversation fails: "encrypted content could not be decrypted" (Azure).
        *   #46398 (9 comments, 6 👍): Unexpected `access_programs.cyber` parameter causes HTTP 400 during ordinary Codex work.
        *   #46114 (8 comments, 2 👍): Windows Desktop: elevated sandbox fails with "requires effective :root read access" on every thread.
        *   Others: #46148 (reconnection), #35253 (MCP OAuth DCR scopes), #38508 (Computer Use scrolling), #32121 (apply_patch ACL fails on Windows), #44696 (Windows sandbox helper failure), #21928 (Azure auto-review fail), #15997 (VS Code live terminal - closed), #45990 (Windows Work @Chrome policy), #39574 (exec_command hangs on Windows), etc.
    *   **Latest Pull Requests (Top 10 important ones)**:
        *   #46467 (CLOSED): Restore `none` as the TUI reasoning summary default (hotfix for 0.155).
        *   #46335 (CLOSED): Keep MCP policy evaluation consistent with turn environments.
        *   #46334 (CLOSED): Share platform identity across path, network, and sandbox configuration.
        *   #46333 (CLOSED): Handle disabled Windows sandbox accounts during cleanup.
        *   #46332 (CLOSED): Dim conversation recaps in the TUI.
        *   #46331 (CLOSED): Defer environment network policy validation until after composition.
        *   #46330 (CLOSED): Move retry backoff into `codex-async-utils`.
        *   #46328 (CLOSED): Avoid persisting project trust for projectless directories.
        *   #46324 (CLOSED): Broaden compaction fallback to the current model.
        *   #46323 (CLOSED): Record active plugin inventory in turn analytics.
        *   #46322 (CLOSED): Set the Windows sandbox type in the pending environment test.
        *   #46319 (CLOSED): Preserve web search actions and results in exec JSON output.
        *   #46318 (CLOSED): Add OAuth credential management for model provider gateways.

3.  **Drafting sections based on instructions**:

    *   **Today's Highlights**:
        *   Summarize key events: Release of `v0.155.1` focusing on a critical hotfix for reasoning summaries, and `v0.155.0` introducing experimental voice features. Highlight the community concern over data loss incidents (#46022, #33624) and Windows sandbox issues, showing tension between powerful agentic actions and safety gates.

    *   **Releases**:
        *   `rust-v0.155.1`: Fixes request rejection by providers not supporting reasoning summaries by resetting default to `none`.
        *   `rust-v0.155.0`: Experimental `/voice` conversations, live reasoning summaries in TUI, completion timestamps.
        *   Alpha releases: `0.156.0-alpha.1` through `alpha.4` in development.

    *   **Hot Issues (Pick 10 noteworthy issues, explain why they matter and community reaction)**:
        *   Let's select the top 10 most impactful or highly commented ones:
            1.  **#33624** - Safety gate for bulk/home-directory deletion (35 comments). Critical safety concern following a real-world home directory deletion incident.
            2.  **#42215** - Windows project context sync failure (34 comments). Blocks local Work chats on Windows.
            3.  **#46022** - Critical data loss on Windows (mass deletion of hundreds of GB outside project scope) (23 comments). Severe sandbox/authorization boundary failure.
            4.  **#25826** - Windows multi-monitor window spill (22 comments, 19 👍). High vote count, common UX issue.
            5.  **#37856** - VS Code stale thread owner blocking chat (18 comments, 11 👍). Multi-client synchronization issue.
            6.  **#45626** - Windows Desktop follow-up messages disabled after turn (13 comments). Breaks continuous workflows.
            7.  **#16994** - Desktop automations on Windows/WSL "no rollout found" error (12 comments, 5 👍). Breaks automation rollouts.
            8.  **#17541** - Model switch mid-conversation fails with decryption error (10 comments, 8 👍). Azure-specific model switching blocker.
            9.  **#46398** - Unexpected `access_programs.cyber` parameter causes HTTP 400 (9 comments, 6 👍). Breaks standard workflows with unexpected params.
            10. **#46114** - Windows sandbox fails with "requires effective :root read access" (8 comments). Blocks all threads on updated desktop.

    *   **Key PR Progress (Pick 10 important PRs, describe features or fixes)**:
        *   1. **#46467**: Restores TUI reasoning summary default to `none` to prevent provider rejections.
        *   2. **#46335**: Keeps MCP policy evaluation consistent with turn environments to avoid tool availability shifts mid-turn.
        *   3. **#46334**: Shares platform identity across path, network, and sandbox configuration for better native platform mapping.
        *   4. **#46333**: Handles disabled Windows sandbox accounts during cleanup, preventing token errors.
        *   5. **#46331**: Defers environment network policy validation until after composition to prevent rejecting replaceable configs.
        *   6. **#46328**: Avoids persisting project trust for projectless directories to prevent accidental preapprovals.
        *   7. **#46324**: Broadens compaction fallback to the current model to avoid compaction failures after model switches.
        *   8. **#46319**: Preserves web search actions and results in `exec --json` output.
        *   9. **#46318**: Adds OAuth credential management for model provider gateways (PKCE, token refresh).
        *   10. **#46330**: Moves retry backoff into `codex-async-utils` to decouple cloud config from core runtime.

    *   **Feature Request Trends**:
        *   Distill the most-requested feature directions from issues (e.g., #15997 showing live terminal execution in VS Code, safety/bulk deletion confirmation gates #33624, better Windows multi-monitor support #25880/#25826, and better automation rollout material #16994).
        *   Key trends: Strong demand for safety/recovery gates for destructive actions (bulk/home-dir deletion), improved Windows desktop stability (multi-monitor, sandbox errors, context sync), better VS Code extension integration (live terminal command visibility, stale thread handling), and deeper OAuth/MCP gateway integration.

    *   **Developer Pain Points**:
        *   Summarize recurring frustrations:
            *   *Destructive Action Guardrails*: Fear of agent scope-creep leading to mass data loss (e.g., #46022, #33624).
            *   *Windows Desktop Instability*: High frequency of issues unique to the Windows desktop app (sandbox failures, follow-up message freezing, context sync breakdowns, stdout drops).
            *   *Multi-turn and state synchronization*: Stale thread ownership in VS Code (#37856), model switch decryption failures on Azure (#17541), and follow-up message blocks (#45626).
            *   *Configuration & Policy friction*: Unexpected parameters like `access_programs.cyber` causing 400 errors (#46398) and strict sandbox permissions blocking normal execution (#46114).

4.  **Review and Format**:
    *   Ensure all links are correctly formatted markdown: `[text](url)`.
    *   Check dates: digest date is 2026-09-19, data is up to date.
    *   Keep language sharp, technical, and objective.
    *   Make sure no sections are omitted.

Let's refine the specific details for each section.

*   *Today's Highlights*:
    OpenAI Codex released `v0.155.1` with a hotfix restoring safe defaults for reasoning summaries, preventing rejections by external providers. The community remains highly focused on safety and stability, highlighted by critical reports of mass data loss outside project boundaries on Windows (#46022) and home directory deletion (#33624). On the infrastructure side, several backend and policy PRs were merged to strengthen sandbox handling, platform configuration consistency, and gateway OAuth management.

*   *Releases*:
    *   **rust-v0.155.1**: Key change is restoring `none` as the default reasoning summary for new local TUI sessions to avoid request rejections from providers that do not support the feature. Explicitly configured settings are still respected. ([Link](https://github.com/openai/codex/compare/rust-v0.155)) - wait, compare link or general release link? The prompt says "Full Changelog: https://github.com/openai/codex/compare/rust-v0.155.". Let's use standard GitHub links where possible, e.g. `https://github.com/openai/codex/releases/tag/rust-v0.155.1` (constructed standardly) or the issue/PR links given in the data. The data provides URLs like `openai/codex Issue #33624` which translates to `https://github.com/openai/codex/issues/33624`. I will construct standard URLs: `https://github.com/openai/codex/releases/tag/rust-v0.155.1` or just write the tag and link the relevant items. Let's write standard URLs: `https://github.com/openai/codex/releases/tag/rust-v0.155.1`.
    *   **rust-v0.155.0**: Introduced experimental `/voice` conversations with live transcripts and microphone controls on supported builds (accessible via `/experimental`). Also added live reasoning summaries in the TUI status row and completion timestamps. ([Release notes](https://github.com/openai/codex/releases/tag/rust-v0.155.0))
    *   **rust-v0.156.0-alpha series**: Alpha versions `0.156.0-alpha.1` through `alpha.4` are in active development. ([Releases](https://github.com/openai/codex/releases))

*   *Hot Issues*:
    Write concise summaries for the 10 selected issues, highlighting why they matter and community reaction (comments/likes).
    1.  **[#33624] Safety Gate for Bulk/Home Directory Deletion**: (35 comments) Addresses a critical safety vulnerability where an ultra-mode subagent recursively deleted nearly all files in a user's home directory under "Full Access". Community demands a hard confirmation and recovery gate for destructive bulk operations. [Link](https://github.com/openai/codex/issues/33624)
    2.  **[#42215] Windows Project Context Sync Failure**: (34 comments) Users on Windows 11 cannot start local Work chats inside existing ChatGPT Projects due to filesystem stage sync failures, blocking local project workflows. [Link](https://github.com/openai/codex/issues/42215)
    3.  **[#46022] Critical Data Loss — Mass Deletion Outside Project Scope**: (23 comments) A severe incident where Codex mass-deleted hundreds of GB of unrelated data, apps, and Windows components outside the task/project scope on Windows. High community alarm over sandbox escapes. [Link](https://github.com/openai/codex/issues/46022)
    4.  **[#25826] Windows Multi-Monitor Window Spill**: (22 comments, 19 👍) Maximizing the Codex desktop window on Windows causes it to spill onto adjacent monitors in multi-monitor setups. High community vote indicates a major UX annoyance. [Link](https://github.com/openai/codex/issues/25826)
    5. **[#37856] VS Code Stale Thread Owner Blocks Chat**: (18 comments, 11 👍) VS Code extension leaves threads owned by another client after reloads, hard-blocking users with "open in another application" errors. [Link](https://github.com/openai/codex/issues/37856)
    6. **[#45626] Windows Desktop Follow-up Messages Disabled**: (13 comments) After the first completed turn on Windows Desktop, the input box greys out, preventing follow-up messages in both new and existing threads (CLI unaffected). [Link](https://github.com/openai/codex/issues/45626)
    7. **[#16994] Desktop Automations Rollout Material Missing**: (12 comments, 5 👍) Automations on Windows/WSL create runs but fail to materialize rollouts, halting automation workflows with "no rollout found" errors. [Link](https://github.com/openai/codex/issues/16994)
    8. **[#17541] Azure Model Switch Decryption Failure**: (10 comments, 8 👍) Switching models mid-conversation on Azure OpenAI fails with "encrypted content could not be decrypted", blocking multi-model workflows. [Link](https://github.com/openai/codex/issues/17541)
    9. **[#46398] Unexpected `access_programs.cyber` Parameter HTTP 400**: (9 comments, 6 👍) Ordinary Codex work is interrupted by HTTP 400 errors caused by unexpected `access_programs.cyber` parameters in CLI requests. [Link](https://github.com/openai/codex/issues/46398)
    10. **[#46114] Windows Sandbox Root Access Failure**: (8 comments) Every thread fails immediately on updated Windows Desktop with sandbox errors complaining of "requires effective :root read access", blocking all local execution. [Link](https://github.com/openai/codex/issues/46114)

*   *Key PR Progress*:
    Select 10 PRs, describing the fix/feature.
    1.  **[#46467] Restore `none` as TUI Reasoning Summary Default**: Hotfix for v0.155 that prevents request rejection by providers lacking reasoning summary support, while preserving explicit user overrides. [Link](https://github.com/openai/codex/pull/46467)
    2.  **[#46335] Consistent MCP Policy Evaluation**: Keeps MCP tool availability consistent during the active turn by using a single captured environment snapshot. [Link](https://github.com/openai/codex/pull/46335)
    3.  **[#46334] Shared Platform

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Thinking Process:

1.  **Understand the Goal**: The user wants a structured community digest for the Gemini CLI repository (`google-gemini/gemini-cli`) for the date `2026-09-19`, based on the provided GitHub data (latest releases, issues, and pull requests).

2.  **Analyze the Input Data**:
    *   **Latest Releases**: `v0.62.0-nightly.20260918.g9450ade79` (released on 2026-09-18/19).
        *   Key changes: `fix(core): retain oauth refresh token on refresh and make credential deletion idempotent` (PR #29339 by @villahernandez-coder), `fix(ui): guard against negative layout dimensions in border rendering` (by @diegogodinezr).
    *   **Latest Issues (Top 30 by comment count, total 50 in last 24h)**:
        *   #22323 (P1, bug): Subagent recovery after MAX_TURNS reported as GOAL success, hiding interruption (13 comments, 2 👍).
        *   #19873 (P2, enhancement): Leverage model's bash affinity via Zero-Dependency OS Sandboxing & Post-Execution Intent Routing (9 comments, 1 👍).
        *   #21409 (P1, bug): Generalist agent hangs (8 comments, 8 👍).
        *   #22745 (P2, feature): Assess the impact of AST-aware file reads, search, and mapping (7 comments, 1 👍).
        *   #21968 (P2, bug): Gemini does not use skills and sub-agents enough (6 comments).
        *   #26525 (P2, security, bug): Add deterministic redaction and reduce Auto Memory logging (5 comments).
        *   #26522 (P2, bug): Stop Auto Memory from retrying low-signal sessions indefinitely (4 comments).
        *   #22232 (P3, customer-issue/feature): Enhance browser_agent resilience: Automatic session takeover and lock recovery (4 comments).
        *   #21983 (P1, bug): browser subagent fails in wayland (4 comments, 1 👍).
        *   #21000 (P3, customer-issue/bug): Experiment with using native file tools for creating and maintaining the task tracker (4 comments).
        *   #20079 (P2, bug): `~/.gemini/agents/filename.md` is not recognized as an agent if filename.md is a symlink (4 comments).
        *   #26523 (P2, bug): Surface or quarantine invalid Auto Memory inbox patches (3 comments).
        *   #24246 (P2, bug): Gemini CLI encounters 400 error with > 128 tools (3 comments).
        *   #23571 (P2, bug): Model frequently creates tmp scripts in random spots (3 comments).
        *   #22672 (P2, customer-issue): Agent should stop/discourage destructive behavior (3 comments, 1 👍).
        *   #22267 (P2, bug): Browser Agent ignores settings.json overrides (e.g., maxTurns) (3 comments).
        *   #22186 (P1, bug): get-shit-done output hook causes crash (3 comments).
        *   #20195 (P3, enhancement): [Agents] - Local Subagent - Sprint 1 (3 comments).
        *   #18836 (P3, customer-issue): Replace WriteToDo with Persistent File-Based Task Tracking (CRUD) (3 comments).
        *   #26516 (P2, bug): Memory system bugs and quality improvements (2 comments).
        *   #22746 (P3, enhancement): Investigate using AST aware CLI tools to map codebase (2 comments).
        *   #22598 (P3, customer-issue): Feat: Subagent trajectory should be visible via `/chat share` (2 comments, 1 👍).
        *   #22466 (P2, core, bug): Fix instances of incorrect `\n` escape behavior (2 comments).
        *   #22465 (P2, agent, bug): Gemini CLI gets stuck at interactive prompt creating vite app (2 comments).
        *   #21924 (P2, core, bug): High performance and flicker free behavior on terminal resize (2 comments).
        *   #21763 (P1, agent, bug): Bugreport doesn't provide context of the subagent (2 comments).
        *   #21432 (P3, customer-issue): Improve Agent "Self-Awareness": Accurate CLI Flags, Hotkeys, and Self-Execution (2 comments).
        *   #21335 (P2, agent, bug): `/compress` command is not persistent across session resume (2 comments, 2 👍).
        *   #19561 (P3, enhancement): Implement 'Tactful Extraction' logic for token-frugal surgical reads (2 comments).
        *   #18397 (P3, core, enhancement): [stretch] Support auto adding to a per workspace policy rather than a global policy (2 comments).
    *   **Latest Pull Requests (Top 20 by comment count)**:
        *   #29400 (P1, core, size/m): Fix/29365 duplicate tool responses (abhashkumar9051).
        *   #29343 (CLOSED, size/m/l): fix(cli): suppress uncaught AbortError logs during request cancellation (urielefrenvirtusa).
        *   #29402 (P1, core, size/m): fix(cli): make persistent state writes failure-safe (Oscar-Williams).
        *   #29401 (P1, core, size/m/l): fix(core): normalize proxy-agent esbuild interop for environment proxy resolution (diegogodinezr).
        *   #29137 (OPEN, dependencies, size/xl): chore(deps): bump the npm-dependencies group (dependabot).
        *   #28986 (OPEN, agent, size/l/xl): chore(deps): bump puppeteer-core (dependabot).
        *   #29377 (CLOSED, P1, core, size/xs): fix(core): update auth error documentation link to valid anchor and add fallback (villahernandez-coder).
        *   #29378 (CLOSED, P1, extensions, size/xl): fix(vscode-ide-companion): preserve terminal focus when closing diff tabs (amelidev).
        *   #29380 (CLOSED, size/l): fix(core,cli): improve terminal buffer memory management and format Windows diagnostic paths (jesussamuel-byte).
        *   #29399 (P2, agent, size/m): fix(core): preserve unrelated comments during edits (csy20).
        *   #29398 (P1, agent, size/m): fix(mcp): bound initial tool discovery to a short timeout (sanjibani).
        *   #29396 (P2, agent, size/xl): feat(agent): add AST-aware structural search tool for precise symbol navigation (dylanyunlon).
        *   #29393 (P3, agent, size/l/xl): feat(tracker): replace WriteToDo with persistent file-based task tracking (CRUD) (dylanyunlon).
        *   #29379 (CLOSED, P1, core, size/l): fix(core): synchronize ConPTY process exit lifecycle and harden PTY output finalization (jvargassanchez-dot).
        *   #29383 (CLOSED, size/s): chore/release: bump version to 0.62.0-nightly.20260918.g9450ade79 (gemini-cli-robot).
        *   #29397 (P2, agent, size/xl): fix(agent): prevent session context poisoning and infinite loops on interrupted turns (dylanyunlon).
        *   #29394 (P1, agent, size/xl): fix(scheduler): enforce user hold directives by blocking mutating tools at scheduler layer (dylanyunlon).
        *   #29125 (CLOSED, P2, core, size/s): fix(cli): convert hook timeout from seconds to milliseconds in hooks migration (0717lee).
        *   #29124 (CLOSED, P2, core, size/xs): fix(cli): correct SubagentStop event key in hooks migration (0717lee).
        *   #29293 (P1, size/s/m): 1578 (bhalsodnikunjhiteshbhai).

3.  **Drafting the Sections**:

    *   **Today's Highlights (2-3 sentences)**:
        *   Focus on the release of `v0.62.0-nightly.20260918.g9450ade79` which addresses critical authentication and UI rendering bugs.
        *   Highlight the active development on agent reliability, notably the scheduler hold directives enforcement (PR #29394) and preventing context poisoning (PR #29397), alongside AST-aware tool implementation (PR #29396).
        *   Note the high community engagement around agent stability issues, particularly generalist agent hangs (Issue #21409) and subagent success state reporting inaccuracies (Issue #22323).

    *   **Releases**:
        *   `v0.62.0-nightly.20260918.g9450ade79`
        *   Key changes:
            *   Retains OAuth refresh tokens on refresh and makes credential deletion idempotent (core fix).
            *   Guards against negative layout dimensions in border rendering (UI fix).

    *   **Hot Issues (Pick 10 noteworthy Issues, explain why they matter and community reaction)**:
        Let's select the top 10 most interesting/impactful ones based on comments, likes, and relevance:
        1.  **#22323 (P1 Bug): Subagent false success report**. Crucial because it hides real interruptions (MAX_TURNS limits) under fake "GOAL success" statuses, confusing users during agent orchestration. (13 comments, 2 👍).
        2.  **#21409 (P1 Bug): Generalist agent hangs**. Critical blocker for basic agent workflows (e.g., folder creation hanging for over an hour). High community pain (8 comments, 8 👍).
        3.  **#19873 (P2 Enhancement): Bash affinity & OS sandboxing**. Proposes utilizing the model's native preference for standard POSIX tools safely via sandboxing. (9 comments, 1 👍).
        4.  **#22745 (P2 Feature): AST-aware file reads, search, and mapping**. Investigates adding structural code search to reduce token bloat and misaligned reads. (7 comments, 1 👍).
        5.  **#21968 (P2 Bug): Model ignoring skills and sub-agents**. Highlights a key prompt-following gap where the model avoids using configured custom skills unless explicitly ordered. (6 comments).
        6.  **#26525 (P2 Security Bug): Auto Memory redaction and logging**. Security-sensitive issue focusing on ensuring deterministic secret redaction before sending transcripts to background extraction models. (5 comments).
        7.  **#21983 (P1 Bug): Browser subagent fails on Wayland**. Critical platform-specific failure for the browser agent. (4 comments, 1 👍).
        8.  **#20079 (P2 Bug): Symlinked agent files not recognized**. Standard filesystem issue preventing symlink-based agent customization. (4 comments).
        9.  **#24246 (P2 Bug): 400 error with > 128 tools**. Tool scaling limit issue causing model API failures when too many tools are enabled. (3 comments).
        10. **#21335 (P2 Bug): `/compress` command is not persistent across sessions**. Key token-saving feature broken on session resume. (2 comments, 2 👍).

    *   **Key PR Progress (Pick 10 important PRs, describe features or fixes)**:
        Focus on the ones that represent major features or critical bug fixes:
        1.  **#29394 (P1, Agent): Enforce user hold directives by blocking mutating tools at scheduler layer**. Prevents the agent from executing destructive actions (like `replace`, `write_file`, `run_shell_command`) when the user explicitly asked to wait or explain first.
        2.  **#29397 (P2, Agent): Prevent session context poisoning and interrupted turns**. Solves infinite loops and synthetic session pollution when agentic streams are interrupted (via SIGINT or timeouts).
        3.  **#29396 (P2, Agent): Add AST-aware structural search tool**. Implements precise symbol navigation to reduce token waste and guesswork during file reads.
        4.  **#29393 (P3, Agent): Replace WriteToDo with persistent file-based task tracking (CRUD)**. Solves context rot and memory loss between sessions by moving tasks to a persistent file-backed service.
        5.  **#29402 (P1, Core): Make persistent state writes failure-safe**. Implements atomic temp file writes with `fsync` to prevent `state.json` corruption on interrupted saves.
        6.  **#29400 (P1, Core): Fix duplicate tool responses on session resume**. Resolves duplicate `functionResponse` messages when resuming sessions with `-r`.
        7.  **#29398 (P1, MCP): Bound initial tool discovery to a short timeout**. Prevents the CLI from hanging for up to 10 minutes when an MCP server sends mismatched JSON-RPC ids.
        8.  **#29399 (P2, Core): Preserve unrelated comments during edits**. Strengthens the replace tool contract to avoid stripping comments or rewriting large blocks unnecessarily.
        9.  **#29401 (P1, Core): Normalize proxy-agent esbuild interop**. Fixes environment proxy resolution by normalizing CJS/ESM imports for `https-proxy-agent` and `http-proxy-agent`.
        10. **#29343 (CLOSED, CLI): Suppress uncaught AbortError logs during request cancellation**. Prevents hard crashes on Node 23+ when queries are aborted by the user.

    *   **Feature Request Trends**:
        *   **Agent Control and Safety**: Strong demand for scheduler-level constraints (e.g., enforcing "hold" directives, preventing destructive commands like `git reset --force` in #22672 and #29394).
        *   **AST-Aware Tooling & Context Efficiency**: Multiple requests for structural search, precise method bounds, and surgical reads to combat context bloat (#22745, #22746, #19561).
        *   **Subagent & Browser Agent Enhancements**: Better subagent visibility (sharing trajectories via `/chat share` in #22598), fixing Wayland browser failures (#21983), and handling browser profile lock recovery (#22232).
        *   **Persistent State and Memory Management**: Transitioning from in-context tools to persistent file-based systems (e.g., task tracking in #18836 / PR #29393, memory inbox patch validation in #26523).
        *   **Model Affinity and Sandbox Security**: Leveraging the model's native bash skills inside secure, zero-dependency sandboxes (#19873).

    *   **Developer Pain Points**:
        *   **Agent reliability and hangs**: Frustration over generalist agent hangs (#21409) and interactive prompt stalls (e.g., during Vite app creation in #22465).
        *   **Context Rot & Token Bloat**: Developers are pushing back against massive token overheads, requesting surgical reads (#19561), AST-based navigation (#22745), and fixing the non-persistent `/compress` feature (#21335).
        *   **Configuration & Environment Inconsisties**: Issues like symlinked agents not loading (#20079), hook timeout unit mismatches during Claude Code migration (#29125), and browser settings overrides being ignored (#22267).
        *   **Infrastructural bottlenecks**: API limits with high tool counts (#24246) and long MCP tool discovery timeouts (#29398) causing workflow stalls.

4.  **Review and Format**:
    *   Ensure the tone is concise, professional, and tailored for technical developers.
    *   Include GitHub links for all referenced items (Issues and PRs).
    *   Verify date consistency (digest for 2026-09-19 based on data updated around 2026-09-18).
    *   Ensure all constraints of the prompt are strictly met (e.g., picking exactly 10 hot issues, 10 key PRs, omitting releases section if none - but we do have a release, so summarize it).

Let's double-check the selected items and links:
*   Release: `v0.62.0-nightly.20260918.g9450ade79`
*   Hot Issues:
    *   #22323 (Subagent false success)
    *   #21409 (Generalist agent hangs)
    *   #19873 (Bash affinity sandbox)
    *   #22745 (AST-aware reads)
    *   #21968 (Skills ignored)
    *   #26525 (Auto Memory redaction)
    *   #21983 (Wayland browser fail)
    *   #20079 (Symlink agent)
    *   #24246 (400 error > 

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



Of course. Here is the GitHub Copilot CLI community digest for 2026-09-19, based on the provided data.

---

### **GitHub Copilot CLI Community Digest: 2026-09-19**

#### **1. Today's Highlights**
The Copilot CLI team shipped version 1.0.87-0, introducing organization-level policy controls for the Auto routing tier and a refined input experience for consecutive steering prompts. Community attention is focused on a cluster of new issues affecting MCP server configuration, OAuth flows, and session state management, signaling active development in these areas.

#### **2. Releases**
*   **v1.0.87-0**: This pre-release introduces **user and managed startup defaults for the Auto routing tier**, allowing for strict or user-overridable organization policies. It also improves the chat input by **combining consecutive steering prompts into a single pending message**, which can be recalled and edited with the `Up` key.
    *   [Release v1.0.87-0](https://github.com/github/copilot-cli/releases/tag/v1.0.87-0)
*   **v1.0.86**: The previous stable release enabled **custom agents to opt into repository instruction files** (like `AGENTS.md`) via a new frontmatter setting. It also ensured that resuming an active session preserves market configuration when directory overrides are not specified.
    *   [Release v1.0.86](https://github.com/github/copilot-cli/releases/tag/v1.0.86)

#### **3. Hot Issues**
Selected from 32 recently updated issues, focusing on impact and community engagement.

1.  **#1632: Support subfolders for skills to better organize them** (12 comments, 24 👍)
    *   **Why it matters:** As users create more custom skills, the flat directory structure becomes a limitation. This highly requested feature for organization is a natural progression of the skills system.
    *   [View Issue](https://github.com/github/copilot-cli/issues/1632)
2.  **#1285: Organisation level Agent not showing up** (10 comments, 13 👍)
    *   **Why it matters:** Highlights a critical discoverability issue for enterprise users. The inability to load agents from organizational repositories severely limits team-wide adoption and standardization.
    *   [View Issue](https://github.com/github/copilot-cli/issues/1285)
3.  **#4870: MCP: Figma remote server fails to load — `-32601` on `server/discover` treated as fatal** (6 comments, 11 👍)
    *   **Why it matters:** Indicates a critical bug in MCP error handling. Treating a standard "method not found" error as fatal prevents the CLI from gracefully handling servers with limited functionality, breaking key design tool integrations.
    *   [View Issue](https://github.com/github/copilot-cli/issues/4870)
4.  **#4905: Desktop app sessions die minutes after spawn — credential registration error** (3 comments, 2 👍)
    *   **Why it matters:** A severe usability blocker for desktop users. The interaction between the desktop app, bundled CLI, and MCP server authentication appears fragile, causing sessions to fail unexpectedly.
    *   [View Issue](https://github.com/github/copilot-cli/issues/4905)
5.  **#1824: Default model selection** (6 comments, 3 👍)
    *   **Why it matters:** A fundamental user preference issue. The inability to set a persistent default model forces users to repeatedly override the selection, which is a common and long-standing pain point.
    *   [View Issue](https://github.com/github/copilot-cli/issues/1824)
6.  **#4902: `-p/--prompt` values starting with `-` incorrectly parsed as flags** (0 comments)
    *   **Why it matters:** A significant regression in CLI argument parsing that breaks a core use case for non-interactive prompting (e.g., with YAML frontmatter), making the tool harder to script.
    *   [View Issue](https://github.com/github/copilot-cli/issues/4902)
7.  **#4900: `config.json` trustedFolders lost when concurrent sessions overwrite the file** (0 comments)
    *   **Why it matters:** A data integrity bug that can lead to security context loss and unexpected permission prompts. It points to a race condition in managing user-specific configuration.
    *   [View Issue](https://github.com/github/copilot-cli/issues/4900)
8.  **#4899: Add a configurable delay before autopilot skips clarification questions** (0 comments)
    *   **Why it matters:** Addresses a key usability gap in autopilot mode. A short, configurable window would provide a crucial balance between autonomy and user control.
    *   [View Issue](https://github.com/github/copilot-cli/issues/4899)
9.  **#4906: MCP OAuth: DCR sends `client_name "copilot-cli"`, rejected by Figma's allowlist** (0 comments)
    *   **Why it matters:** A specific but critical integration failure. The mismatch in expected client names during Dynamic Client Registration blocks a popular design tool from working with the CLI.
    *   [View Issue](https://github.com/github/copilot-cli/issues/4906)
10. **#4907: Periodic MCP reconnect notifications flood conversation history** (0 comments)
    *   **Why it matters:** A significant noise issue that degrades the user experience. Cluttering the main conversation with repetitive lifecycle messages disrupts workflow and buries important context.
    *   [View Issue](https://github.com/github/copilot-cli/issues/4907)

#### **4. Key PR Progress**
*No pull requests were updated in the last 24 hours according to the data source.*

#### **5. Feature Request Trends**
The issues reveal several strong trends in what the community wants:
*   **Enhanced Configuration & Organization:** Requests for skill subfolders (#1632), configurable model defaults (#1824), and explicit control over context window size (#4898) point to a desire for more granular control.
*   **Improved Autopilot & Agency:** Features like a configurable delay before skipping questions (#4899) and a tool-callable `cwd` (#3035) show users want more sophisticated ways to guide autonomous behavior.
*   **Better Documentation & Discovery:** Issues around documenting symlink behavior (#3264) and discovering organization-level agents (#1285) highlight a need for clarity and discoverability.

#### **6. Developer Pain Points**
Recurring frustrations are evident in the issue tracker:
*   **Fragile MCP Integration:** Multiple issues cluster around MCP failures, including fatal errors on discover (#4870), OAuth registration rejections (#4901, #4906), and reconnect notification floods (#4907). This suggests MCP support is a high-risk area.
*   **Configuration Race Conditions & State Loss:** The bug where concurrent sessions overwrite `config.json` (#4900) and the issue with `COPILOT_CUSTOM_INSTRUCTIONS_DIRS` failing to load (#1982) indicate ongoing problems with state management.
*   **Regression in Core Functionality:** The argument parsing bug in v1.0.85 (#4902) is a prime example of how fundamental CLI features can break, causing significant user friction.
*   **Platform Inconsistencies:** Issues like not enforcing PowerShell on Windows (#1086) and `Ctrl+Backspace` not working (#3858) show lingering platform-specific quality issues.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>



# Kimi Code CLI Community Digest — 2026-09-19

Here is the structured community digest for `MoonshotAI/kimi-cli` covering activity leading up to September 19, 2026.

---

### 1. Today's Highlights
Today's activity is focused on maintenance and resolving long-standing usability issues. The most significant development is a targeted fix for the hook system ([PR #2176](https://github.com/MoonshotAI/kimi-cli/pull/2176)), ensuring reliable custom automation triggers. Additionally, a critical regression affecting clipboard image pasting on macOS 2.0.0 was reported ([#2652](https://github.com/MoonshotAI/kimi-cli/issues/2652)), drawing immediate community attention.

---

### 2. Releases
*No new releases were published in the last 24 hours.*

---

### 3. Hot Issues
The following 10 issues represent the most significant community interactions, bugs, and feature requests updated or opened recently:

*   **[#2652 [OPEN] macOS 2.0.0 paste image regression](https://github.com/MoonshotAI/kimi-cli/issues/2652)**  
    *   **Why it matters:** A critical regression where upgrading to version 2.0.0 on macOS causes clipboard image pasting (`Ctrl+V`) to fail silently. This breaks core multimodal workflows.  
    *   **Community Reaction:** Newly opened with high priority due to the sudden breakage of a fundamental feature.
*   **[#1234 [CLOSED] aiohttp proxy configuration issue](https://github.com/MoonshotAI/kimi-cli/issues/1234)**  
    *   **Why it matters:** Environment variable proxies failed during `kimi login` due to default `aiohttp` settings, blocking users in corporate or localized network environments.  
    *   **Community Reaction:** High engagement with 14 comments and 2 👍; resolved after identifying the library-level configuration conflict.
*   **[#1107 [CLOSED] Installer script failure when `uv` is missing](https://github.com/MoonshotAI/kimi-cli/issues/1107)**  
    *   **Why it matters:** The shell installation script failed if the `uv` package manager was not pre-installed, creating a major friction point for new installations.  
    *   **Community Reaction:** 6 comments, highlighting onboarding issues that needed a script logic update.
*   **[#1680 [OPEN] VS Code font size customization](https://github.com/MoonshotAI/kimi-cli/issues/1680)**  
    *   **Why it matters:** Users requested independent font scaling for the Kimi window within VS Code, preventing global zoom commands from disrupting other editor panels.  
    *   **Community Reaction:** Well-received with 2 👍, reflecting a common UI/UX pain point for multi-pane workflows.
*   **[#1296 [CLOSED] Intermittent MCP disconnections](https://github.com/MoonshotAI/kimi-cli/issues/1296)**  
    *   **Why it matters:** Intermittent disconnects in Model Context Protocol (MCP) integrations disrupt long-running agent tasks and tool-use reliability.  
    *   **Community Reaction:** Low public reaction but critical for developers relying heavily on external tool integrations.


</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



# OpenCode Community Digest — 2026-09-19

---

## 1. Today's Highlights

A wave of provider-side "free tier can only be used from within OpenCode" errors dominated the issue tracker today, affecting at least 10 distinct reports across CLI, Desktop, and third-party frontends. Meanwhile, a long-running high-CPU regression (#30086) continues to gather comments (54 and counting), and a cluster of v2 TUI fixes landed via the automated PR cleanup pipeline.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

### 🔴 #30086 — High CPU usage in newer versions of OpenCode
**Status:** OPEN | 54 comments | 30 👍
Users report CPU spikes appearing ~7 days ago, with multi-session workloads dropping from 10+ concurrent sessions to barely 3. The regression is described as causing "heavily slowed-down and laggy mouse cursor reaction time." This is the most-engaged issue of the day and appears to be a performance regression introduced by a recent update.
[Link](https://github.com/anomalyco/opencode/issues/30086)

### 🔴 #49433 — Error from provider: OpenCode's free tier can only be used from within OpenCode
**Status:** OPEN | 43 comments | 8 👍
Any model request from any provider triggers this restriction error. Users on pacman packages (v1.3.17) report the failure is universal. This appears to be a server-side policy change rather than a client bug.
[Link](https://github.com/anomalyco/opencode/issues/49433)

### 🔴 #49580 — Free tier fails with MonoCode frontend + OpenCode backend
**Status:** OPEN | 43 comments | 2 👍
Using MonoCode (a third-party desktop UI) as the frontend with an OpenCode backend, requests with the free-tier model `Muse Spark 1.3 Free` fail after ~55 seconds. This confirms the free-tier restriction is not limited to OpenCode's own UIs.
[Link](https://github.com/anomalyco/opencode/issues/49580)

### 🟡 #12393 — How to unarchive a session in opencode-desktop
**Status:** CLOSED | 21 comments | 35 👍
A user accidentally archived a session in opencode-desktop v1.1.53 and cannot find a way to restore it. Despite being closed, the 35 👍 suggests this is a genuine missing feature — no unarchive/restore flow exists in the desktop UI.
[Link](https://github.com/anomalyco/opencode/issues/12393)

### 🔴 #49014 — Go: 5-hour usage limit blocks all models after one model hits its limit
**Status:** OPEN | 4 comments
After `grok-4.6` hits its own 5-hour usage limit, *every other* OpenCode Go model with zero usage starts returning the same "5-hour usage limit reached" error. Switching models does not help. This looks like a shared quota or rate-limiting bug in the Go provider gateway.
[Link](https://github.com/anomalyco/opencode/issues/49014)

### 🔴 #48747 — Windows app fails to launch: GPU & renderer crash on AMD Radeon
**Status:** OPEN | 4 comments
OpenCode Desktop on Windows crashes immediately with GPU process failures and exit code `-2147483645` (`STATUS_BREAKPOINT`), specifically tied to AMD Radeon graphics. Users see a blank screen with a log-export option.
[Link](https://github.com/anomalyco/opencode/issues/48747)

### 🔴 #49777 — `/btw` slash command crashes the TUI when rendering answer dialog
**Status:** OPEN | 3 comments | 2 👍
The built-in `/btw` command crashes the TUI after the answer is returned. The error points to `PluginProvider` being accessed outside its context boundary. Reproduced on macOS 25.6.0 (arm64) with opencode v2.0.8.
[Link](https://github.com/anomalyco/opencode/issues/49777)

### 🔴 #49027 — Agent config extra fields forwarded verbatim into upstream provider requests
**Status:** OPEN | 3 comments
Custom vendor properties in agent config are forwarded unchanged to the provider, causing `invalid_request_error` on the Zen gateway (`opencode-go`). Affected models include `kimi-k3`, `glm-5.3`, `gpt-5.6-luna`. This is a config validation / sanitization gap.
[Link](https://github.com/anomalyco/opencode/issues/49027)

### 🔴 #49302 — Old sessions get bulk-updated timestamps, breaking recency ordering
**Status:** OPEN | 3 comments
The SQLite database is overwriting `session.time_updated` on old sessions with the current timestamp in bulk. This breaks any session list or frontend that relies on `time_updated` for recency ordering — old sessions suddenly appear at the top.
[Link](https://github.com/anomalyco/opencode/issues/49302)

### 🔴 #49852 — Plugin package with subpath export fails to install
**Status:** OPEN | 1 comment
A plugin configured with an npm subpath export (e.g., `opencode-pty/v2`) is parsed as a GitHub repo instead of an npm subpath, causing installation failure. This is a package spec parsing bug in the plugin loader.
[Link](https://github.com/anomalyco/opencode/issues/49852)

---

## 4. Key PR Progress

### ✅ #43300 — TUI: question/permission recovery polling for missed SSE events
Closes #43196. Adds a polling fallback so the TUI recovers from missed Server-Sent Events for questions and permissions, preventing stuck sessions when the SSE stream drops.
[Link](https://github.com/anomalyco/opencode/pull/43300)

### ✅ #43282 — Expose valid subagent IDs in the subagent tool
Closes #36761. The `subagent` tool's `agent` field now documents the actual valid IDs instead of a vague description, making it easier for models to select the correct subagent.
[Link](https://github.com/anomalyco/opencode/pull/43282)

### ✅ #43258 — Guard child stdin against post-exit EPIPE
Closes #43257. When a local MCP server's command dies instantly (e.g., bad cwd), the v2 background service now handles the resulting EPIPE gracefully instead of crashing.
[Link](https://github.com/anomalyco/opencode/pull/43258)

### ✅ #43255 — Guard malformed cost tiers
Closes #43254. Adds a null/guard check on `item.tier` before it's used in decimal.js calculations, preventing crashes from malformed cost tier data in session summaries.
[Link](https://github.com/anomalyco/opencode/pull/43255)

### ✅ #43253 — TUI: follow agent model selection
Selects each primary agent's configured model and variant when switching within an existing session, retaining manual model/variant choices per session and agent without resetting explicit picks.
[Link](https://github.com/anomalyco/opencode/pull/43253)

### ✅ #43237 — Wrap Effect.promise callbacks in Promise.resolve()
Closes #35498. Plugin tools with synchronous (non-async) `execute` functions now work correctly because `Effect.promise` callbacks are properly wrapped, fixing the `X.then is not a function` crash.
[Link](https://github.com/anomalyco/opencode/pull/43237)

### ✅ #43236 — TUI: paste into custom form answers
Registers the configured `prompt.paste` command while a form answer editor is active and inserts plain-text clipboard contents at the textarea cursor. Covers `Ctrl+V` in custom question answers with a regression test.
[Link](https://github.com/anomalyco/opencode/pull/43236)

### ✅ #43228 — Add deterministic bare run mode
Closes #43227. Adds `opencode run --bare` for new local non-interactive runs that should not inherit ambient user or project setup — useful for CI, sandboxed execution, and reproducible agent runs.
[Link](https://github.com/anomalyco/opencode/pull/43228)

### ✅ #43212 — Trim whitespace from file path args
Closes #43112. Local models sometimes put trailing newlines inside write/edit path args (e.g., after `ruleset.md`). The tool now strips trailing whitespace from file path arguments before use.
[Link](https://github.com/anomalyco/opencode/pull/43212)

### ✅ #48638 — Harden session diffs, snapshots, and write paths; cut worker-thread stalls
Closes #48641. `SessionSummary.summarize` was attaching the turn's full git patch text to the *user* message's `summary.diffs`, causing memory bloat and worker-thread stalls under parallel agents. This PR hardens the diff attachment, snapshot serialization, and file write paths.
[Link](https://github.com/anomalyco/opencode/pull/48638)

---

## 5. Feature Request Trends

| Direction | Representative Issues |
|---|---|
| **MCP

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



# Pi Community Digest — 2026-09-19

---

## 1. Today's Highlights

The past 24 hours saw a surge of targeted fixes and feature additions despite no new release. Notable merges include a `/retry` command for local LLM resilience, Azure Foundry Chat Completions support (unblocking DeepSeek V4 Pro), and a worktree-aware session resume fix. On the issues side, the Claude edit-tool validation failure (#6278) remains the most-discussed bug, with ~20% of edits failing in some sessions due to model-invented extra keys.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

### #6278 — Claude models fail with Pi's edit tool (~20% failure rate) 🔥
**Status:** CLOSED (bug) | 👍 10 | 25 comments
The edit tool rejects Claude-generated edits because the model hallucinates extra keys (`new_text_x`, `type`, `in_file`, `closeenough`, etc.) that violate the JSON schema. This is a top-voted issue with significant real-world impact — some sessions see 1 in 5 edits fail. The root cause appears to be model-side behavior rather than Pi's schema, suggesting a need for more tolerant validation or prompt engineering.
[View issue](https://github.com/earendil-works/pi/issues/6278)

### #7730 — High CPU usage on macOS with long sessions
**Status:** OPEN (bug) | 👍 10 | 16 comments
Users report CPU swinging between 50–110% with memory at 600–800MB during extended Pi sessions on macOS. The issue appears correlated with context size / session length, pointing to potential inefficiencies in context management or TUI rendering over time.
[View issue](https://github.com/earendil-works/pi/issues/7730)

### #8928 — Parallel pi startup reports "No API key found" for ~48s with expired OAuth
**Status:** OPEN (in progress) | 👍 0 | 11 comments
A deterministic repro shows that when `auth.json` contains an expired OAuth credential for a *different* provider, parallel Pi processes stall for ~48 seconds before reporting a misleading "No API key found" error for the *active* provider. The reporter spent 3 hours debugging this in production.
[View issue](https://github.com/earendil-works/pi/issues/8928)

### #8684 — `PI_OFFLINE` silently disables all provider model discovery
**Status:** OPEN (bug) | 👍 0 | 11 comments
`PI_OFFLINE` is documented as disabling only startup housekeeping (update checks, telemetry), but in practice it also disables *all* provider model-catalog network discovery for the entire session. This undocumented behavior contradicts its stated scope and surprises users who expect offline mode to still list available models.
[View issue](https://github.com/earendil-works/pi/issues/8684)

### #9652 — Compaction refused by Anthropic Claude Fable due to transcribed thinking blocks
**Status:** OPEN (bug) | 👍 2 | 6 comments
`/compact` fails on `claude-fable-5` because `serializeConversation` transcribes thinking blocks into the summarization prompt, and Anthropic's `reasoning_extraction` classifier blocks the request. This is a provider-specific compatibility issue with Claude's newer reasoning models.
[View issue](https://github.com/earendil-works/pi/issues/9652)

### #9052 — Fullscreen mode wheel scrolling is 3x slower than regular mode
**Status:** CLOSED | 👍 6 | 10 comments
Users switching to fullscreen mode for its fixed input box find wheel scrolling dramatically slower (3x) than the regular TUI mode. The issue is specific to the fullscreen rendering path, suggesting a per-frame inefficiency in that mode.
[View issue](https://github.com/earendil-works/pi/issues/9052)

### #8896 — `/export HTML` silently drops `display:false` custom messages
**Status:** OPEN | 👍 0 | 8 comments
The HTML export drops any custom message whose `display` flag is `false`, even though that flag is documented as a TUI-only toggle. This means exported transcripts lose context that was intentionally sent to the model but hidden from the terminal — a data integrity issue for archival/audit use cases.
[View issue](https://github.com/earendil-works/pi/issues/8896)

### #9616 — GLM Coding Plan catalog still lists 8 legacy models no longer served
**Status:** CLOSED | 👍 0 | 6 comments
Zhipu's GLM Coding Plan consolidated to only GLM-5.3 / GLM-5.3-Flash, but Pi's built-in `zai-coding-cn` catalog still exposes 10 models. Requests to the 8 retired models are silently rerouted server-side — functional but misleading.
[View issue](https://github.com/earendil-works/pi/issues/9616)

### #9725 — openrouter `baseUrl` override regression in 0.85.1
**Status:** CLOSED (no-action) | 👍 0 | 6 comments
Commit 4e69b0c made OpenRouter models switch `baseUrl` based on API type, but broke the documented "simple" override method — swapping `baseUrl`/`apiKey` now overrides the `baseUrl` indiscriminately for all models rather than per-model.
[View issue](https://github.com/earendil-works/pi/issues/9725)

### #9549 — Large transcripts re-render every frame; every resize re-emits the whole transcript
**Status:** OPEN (fullscreen) | 👍 0 | 5 comments
On Windows 11 with 2 logical cores, working with large transcripts in fullscreen mode causes every frame to re-render the entire transcript, saturating a CPU core. Resizing the terminal re-emits the whole transcript. The reporter verified the repro with `pi -ne` (no extensions).
[View issue](https://github.com/earendil-works/pi/issues/9549)

---

## 4. Key PR Progress

### #9762 — Guard TUI against tool results without `content` array
**Status:** MERGED
Prevents a crash when an extension tool returns a non-conforming result (e.g., `{ output: "..." }` instead of `{ content: [...] }`). The TUI previously threw an uncaught `TypeError` and exited the whole process.
[View PR](https://github.com/earendil-works/pi/pull/9762)

### #9434 — Allow extensions to append to the session system prompt
**Status:** OPEN
Enables `session_start` handlers to return append-only `systemPromptAppend` contributions, collected in extension/handler order with source metadata and error isolation. This lets extensions inject context into the base prompt across startup, session resume, and compaction recovery.
[View PR](https://github.com/earendil-works/pi/pull/9434)

### #9754 — Treat same-repo worktrees as one project; resolve session-dir symlinks
**Status:** MERGED
Two surgical changes to `SessionManager` project identity: symlink-resolved session-dir comparison and repo-aware worktree grouping. Resumes from a different checkout of the same repo are now silent local resumes instead of cross-project fork offers.
[View PR](https://github.com/earendil-works/pi/pull/9754)

### #9744 — Add `/retry` command to resume a turn abandoned after failed connection retries
**Status:** MERGED
Adds a `/retry` command that resumes the last abandoned turn, aimed at local LLM users who restart `llama-server` or experience transient connectivity issues. Avoids the need for redundant "go on" prompts that confuse the model.
[View PR](https://github.com/earendil-works/pi/pull/9744)

### #9714 — Support Azure Foundry Chat Completions deployments
**Status:** OPEN
Expands the Azure provider beyond the Responses API to support Chat Completions, unblocking DeepSeek V4 Pro on Azure Foundry. Only `deepseek-v4-pro` is in the built-in catalog initially.
[View PR](https://github.com/earendil-works/pi/pull/9714)

### #9720 — Drive Mistral reasoning dispatch via `thinkingLevelMap`; add `zai-glm-5-3`
**Status:** MERGED
Replaces the id-allowlist approach for Mistral reasoning levels with a `thinkingLevelMap`-driven dispatch, and adds `zai-glm-5-3` support. Also fixes `mistral-conversations` exclusion from the upstream-driven map path.
[View PR](https://github.com/earendil-works/pi/pull/9720)

### #9736 — Retry a stream cut before its terminal event regardless of wording
**Status:** MERGED
Unifies retry logic for streams that end prematurely — covers both Pi's own "stream ended before a terminal response event" and Anthropic SDK's "stream ended before message_stop" (#4433). Tested with an OpenAI-compatible proxy in front.
[View PR](https://github.com/earendil-works/pi/pull/9736)

### #9742 — Show shell durations in hours, minutes, and seconds
**Status:** MERGED
Improves duration formatting to support hour/minute/second breakdowns for long-running shell commands, fixing #9628.
[View PR](https://github.com/earendil-works/pi/pull/9742)

### #9749 — Allow SDK callers to customize the interactive resume command
**Status:** MERGED
Adds `InteractiveModeOptions.formatResumeCommand` so SDK wrappers (like Patooie) can display their actual resume invocation on exit instead of Pi's default `pi` command.
[View PR](https://github.com/earendil-works/pi/pull/9749)

### #9668 — Prompt cache warming (experimental)
**Status:** OPEN
Adds experimental support for keeping prompt caches warm, currently limited to Anthropic providers with explicit caches. This is an early iteration — expect it to expand to other providers as support matures.
[View PR](https://github.com/earendil-works/pi/pull/9668)

---

## 5. Feature Request Trends

- **Extension system prompt injection** — Multiple users want extensions to be able to append context to the session system prompt (now enabled via #9434).
- **Provider catalog accuracy** — Repeated requests for catalogs to stay in sync with upstream model lineups (GLM, OpenCode Go, Qwen Token Plan).
- **Azure/Foundry multi-API support** — Chat Completions alongside Responses API for non-OpenAI Foundry deployments.
- **Session resume intelligence** — Worktree-aware, symlink-resolved project identity so resuming across checkouts of the same repo is seamless.
- **SDK embedding customization** — Allowing embedding apps to customize resume commands and other interactive behaviors.
- **Retry/resilience for local LLMs** — `/retry` command and stream-cut retry unification reflect a growing user base running against local/inference servers.

---

## 6. Developer Pain Points

- **Model hallucinates tool keys** — Claude (and likely other large models) invent extra JSON keys in edit tool calls, causing ~20% failure rates. Developers using Pi with Claude should consider prompt constraints or schema-tolerant validation.
- **`PI_OFFLINE` scope creep** — The flag's undocumented behavior of disabling all model discovery breaks mental models for offline-first workflows. Developers should be aware that `PI_OFFLINE` is broader than its docs suggest.
- **Parallel startup auth stalls** — Expired OAuth credentials for unrelated providers cause ~48s stalls in parallel Pi processes. Multi-process deployments should audit `auth.json` for stale credentials.
- **TUI rendering performance** — Fullscreen mode wheel scrolling (3x slower) and large-transcript re-rendering (saturating a core on resize) are ongoing UX concerns, especially on low-core Windows machines.
- **Compaction with reasoning models** — Claude Fable rejects compaction prompts containing transcribed thinking blocks, breaking `/compact` on newer Anthropic models. This is a provider compatibility gap that needs a Pi-side workaround.
- **HTML export data loss** — `display:false` custom messages are silently dropped from HTML exports, creating a discrepancy between what the model received and what's archived.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Thinking Process:

1.  **Understand the Goal**: The user wants a structured English digest ("Qwen Code community digest") for the date 2026-09-19, based on provided GitHub data from `github.com/QwenLM/qwen-code` (latest releases, issues, and pull requests).

2.  **Analyze the Input Data**:
    *   **Date**: 2026-09-19 (digest date), but the data covers updates mostly from 2026-09-18 (yesterday).
    *   **Releases**:
        *   `v0.24.1-preview.0`: docs(serve) record merged ACP boundary acceptance, fix(ci) wait for published export renderer before pack.
        *   `v0.24.0-nightly.20260918.537311b8a5`: docs(serve) record merged ACP boundary acceptance, fix(ci) wait for published export re...
    *   **Issues (Top 30 by comment count, but I need to pick 10 noteworthy ones)**:
        *   #12053: Slim the Goal runtime (P2, core, enhancement) - 8 comments. Focuses on judging completion from current turn's evidence, dropping evidence catalog/checkpoints.
        *   #11872: Web Terminal shows "[Error: PTY not available]" (P1, platform, macos, packaging, web-shell) - 7 comments. `@lydell/node-pty` declared but not bundled, macOS code signing blocks locally installed prebuilds.
        *   #11847: Session recap always generated in English (P3, core, session-management, enhancement) - 5 comments. No way to match conversation language.
        *   #12042: core/cli: record provenance does not survive api-history projection (P2, core, session-management, bug) - 5 comments. Mis-classifies notifications after PR #12007.
        *   #11162: fix(cli): normal queued tool cancellation skips completion cleanup (P2, tools, interactive, cli, bug) - 5 comments.
        *   #11783: TUI crashes with uncaught React error #185 (Maximum update depth exceeded) after background task registered (P1, ui, rendering, bug) - 5 comments.
        *   #11148: fix(cli): full-turn cancellation is recorded as a scheduling failure (P2, tools, interactive, cli, bug, CLOSED) - 5 comments.
        *   #12028: tracking(core): non-conversation context token governance (P2, model/long-context, core, token-management, memory, enhancement) - 5 comments. Non-conversation context (system prompt, tool schemas, QWEN.md) is sent and paid for on every request.
        *   #11361: AskUserQuestion section in ACP/Zed (P2, integration, zed, bug) - 5 comments. Shows "Raw Input" instead of choice interface.
        *   #9746: docs: add MindsHub example to model-providers.md (P3, configuration, documentation, CLOSED) - 5 comments.
        *   #12217: A comment before `export const meta` fails the workflow script (P2, core, bug) - 4 comments.
        *   #12212: Session writer lease: distinct failures share errorKind "session_writer_unavailable" (P2, core, session-management, enhancement, daemon) - 4 comments.
        *   #12213: daemon: read-only inventory of the session writer lock directory at startup (P2, core, session-management, feature-request, logging) - 4 comments.
        *   #12214: docs(conversations-recovery): add explicit non-graceful shutdown guidance (P3, documentation, daemon) - 4 comments.
        *   #12216: bug(lsp): MCP workspace-discovery config starts a second, unused LSP server set per ACP process (P2, core, mcp, bug) - 4 comments.
        *   #12206: LSP: non-ASCII responses are silently dropped (P1, core, bug) - 4 comments. Content-Length in bytes compared to UTF-16 string length.
        *   #12195: Main CI failed (CLOSED) - 4 comments.
        *   #12179: Goal: retire the legacy card projection (ladder step 5-b) (CLOSED) - 4 comments.
        *   #12193: review ci: the qwen-review/reviewed skip anchor is not scoped by pull request or base ref (P3, development, github-actions, ci-cd, feature-request) - 4 comments.
        *   #12165: bug(core): MCP OAuth drops registrationUrl from WWW-Authenticate discovery, breaking Atlassian remote MCP (P2, oauth, mcp, bug) - 4 comments.
        *   #11995: Web Shell session-recovery banner false positive (CLOSED) - 4 comments.
        *   #12167: node-repl: a top-level statement without a trailing semicolon fails the whole cell (P2, tools, mcp, bug) - 4 comments.
        *   #11717: WebShell create action times out while sequential default SDK requests are still valid (CLOSED) - 4 comments.
        *   #11895: review: dimension agents read the main checkout instead of the PR worktree (P1, cli, commands, bug, CLOSED) - 4 comments.
        *   #12147: feat(extensions): load deployment-managed extensions from a directory (P3, core, extensions, feature-request) - 4 comments.
        *   #11987: bug(web-shell): first-prompt attach aborted by a controlled session switch (CLOSED) - 4 comments.
        *   #10362: docs: hosted OpenAI-compatible modelProviders example (CLOSED) - 4 comments.
        *   #12220: LSP: a failed server is reported as 'no results' (P2, core, bug) - 3 comments.
        *   #12215: Fix sed --quiet/--silent classified as 'unknown' (P3, core, shell, bug) - 3 comments.
        *   #12209: feat(acp): schedule managed auto-skill review at the ACP turn boundary (P3, core, memory, feature-request) - 3 comments.
    *   **Pull Requests (Top 20 by comment count, but I need to pick 10 important ones)**:
        *   #11237: perf(web-shell): derive the session workflow projection once and share it across surfaces (#10865) - perf optimization.
        *   #11874: feat(cli,core): qwen batch command and headless --batch mode for the DashScope Batch API - major feature (batch processing).
        *   #12221: fix(core): recognize sed quiet aliases as read-only - fix for #12215.
        *   #9305: fix(ui): bottom-align short VP content so blank space is at top - UI fix.
        *   #10455: fix(cli): don't crash startup when the output-language file is unwritable - startup robustness.
        *   #11001: fix(test): wait for interactive PTY sessions to end during cleanup - test harness fix.
        *   #11134: fix(ci): retry the transient all-green macOS E2E shard death once - CI resilience.
        *   #11658: fix(cli): keep expanded OpenTUI confirmations inside the viewport - OpenTUI rendering fix.
        *   #12210: fix(core): parse LSP frames by byte length so non-ASCII responses are not dropped - crucial fix for #12206 (LSP non-ASCII).
        *   #11776: fix(core): make persisted session pagination safe for equal mtimes - database/session pagination fix.
        *   #11837: fix(cli): allow collapsing expanded tool details - UI/UX toggle fix.
        *   #12198: fix(cli): require explicit trust for undecided workspaces - security/trust improvement.
        *   #11989: fix(ci): rerun never-started main CI jobs once instead of filing per-commit issues - CI automation fix.
        *   #11963: fix(ci): synthesize bold in the verify-capture renderer - rendering fix.
        *   #12156: fix(core): bound gitignore matcher retention during large scans - performance/memory fix.
        *   #12115: fix(installer): preflight glibc for standalone Linux archives - installer robustness on older Linux.
        *   #12218: feat(web-shell): move the Plan entry into the composer add menu - UI/UX improvement.
        *   #10954: feat(serve): expose the background agents the supervisor is running - API feature.
        *   #11679: fix(live): accept monitor debug directories on Windows - Windows CI fix.
        *   #12119: fix(cli): make /context categories add up to the provider total - `/context` command fix.

3.  **Drafting the Sections**:

    *   **Section 1: Today's Highlights** (2-3 sentences summarizing the most important updates):
        *   Focus on the release of `v0.24.1-preview.0` and `v0.24.0-nightly`, highlighting key fixes like the LSP frame parsing fix (crucial for CJK/non-ASCII support) and the new DashScope Batch API CLI command (`qwen batch`). Mention the ongoing effort to refine the Goal runtime and session management stability.

    *   **Section 2: Releases** (Summarize changes):
        *   `v0.24.1-preview.0` and `v0.24.0-nightly.20260918.537311b8a5` were released.
        *   Key changes: Documentation updates on serving and merged ACP boundary acceptance, and CI pipeline improvements (waiting for the published export renderer before packing).

    *   **Section 3: Hot Issues** (Pick 10 noteworthy Issues, explain why they matter and community reaction):
        *   Let's select the most impactful ones (prioritizing P1/P2, interesting bugs, and core enhancements):
            1.  **#11872 (P1)**: Web Terminal PTY failure on macOS (`@lydell/node-pty` not bundled, code signing issues). Crucial for web shell/desktop users on macOS.
            2.  **#12206 (P1)**: LSP non-ASCII responses silently dropped due to byte vs. code unit mismatch. Crucial for internationalization (CJK headings in Markdown, etc.). (Note: PR #12210 is already addressing this).
            3.  **#11783 (P1)**: TUI crash (React error #185, maximum update depth exceeded) triggered by background tasks. Major blocker for interactive use.
            4.  **#12053 (P2)**: Slimming the Goal runtime. High-level architectural refactor to improve LLM goal completion accuracy and reduce token overhead.
            5.  **#12028 (P2)**: Non-conversation context token governance. Important for cost and token management on large-context models.
            6.  **#12042 (P2)**: Provenance tracking lost in api-history projection, causing notification classification errors.
            7.  **#11162 (P2)**: Normal queued tool cancellation skips completion cleanup, leaving dangling states.
            8.  **#12165 (P2)**: MCP OAuth drops `registrationUrl`, breaking Atlassian remote MCP. High interest for enterprise MCP users.
            9.  **#11361 (P2)**: AskUserQuestion shows as "Raw Input" in Zed/ACP. Important for ACP ecosystem integration.
            10. **#12212 (P2)**: Session writer lease error handling lumps distinct failures into a generic 503, making recovery hard. (And #12213 asks for a read-only lock inventory at startup to debug this).

    *   **Section 4: Key PR Progress** (Pick 10 important PRs, describe features or fixes):
        *   Focus on those that address the hot issues or introduce major features:
            1.  **#11874**: Introduces `qwen batch` command and headless `--batch` mode for DashScope Batch API (major cost-saving feature for bulk requests).
            2.  **#12210**: Fixes the LSP non-ASCII frame parsing bug (#12206) by parsing frames by byte length instead of string length.
            3.  **#12221**: Recognizes GNU sed `--quiet`/`--silent` aliases as read-only, fixing the shell safety classifier (#12215).
            4.  **#12198**: Requires explicit trust for undecided workspaces, hardening security/privilege separation.
            5.  **#12119**: Reworks `/context` breakdown so categories add up to the provider total, fixing token accounting.
            6.  **#12156**: Bounds gitignore matcher retention during large scans, preventing memory bloat.
            7.  **#12115**: Preflights glibc compatibility for standalone Linux archives, preventing installation failures on legacy distros like CentOS 7.
            8.  **#11237**: Performance optimization for Web Shell, deriving session workflow projection once per render.
            9.  **#10954**: Exposes running background agents via `GET /background-agents` in `qwen serve` (improving supervisor observability).
            10. **#12218**: Moves Web Shell Plan entry into the composer add menu, improving UI consistency.

    *   **Section 5: Feature Request Trends** (Distill most-requested feature directions):
        *   *Session Management & Daemon Robustness*: Better lock directory inventories, non-graceful shutdown handling, and clearer error taxonomy (e.g., #12212, #12213, #12214).
        *   *Internationalization & Language Awareness*: Supporting localized session recaps and fixing LSP non-ASCII handling (#11847, #12206).
        *   *Context & Token Governance*: Tools to monitor and control non-conversation token overhead (system prompts, skills, QWEN.md) on large-context models (#12028).
        *   *Extension & Deployment Management*: Loading deployment-managed extensions from a shared directory rather than user settings (#12147).
        *   *ACP & Ecosystem Integration*: Better integration with Zed/Acp, including AskUserQuestion support and auto-skill review scheduling at turn boundaries (#11361, #12209).
        *   *Batch Processing*: High demand for cheaper, asynchronous batch API integrations (#11874).

    *   **Section 6: Developer Pain Points** (Summarize recurring frustrations):
        *   *Silent failures and error classification issues*: Developers struggle with tools failing silently (LSP dropping CJK responses, sed flags classified as unknown) or exceptions being swallowed in a generic error bucket (like the session writer 503 errors).
        *   *State/projection desynchronization*: Issues like provenance being lost during API history projection (#12042) or legacy card projections persisting in the Goal system (#12179) cause confusing dual-state behaviors.
        *   *Build, CI, and packaging friction*: macOS code signing breaking node-pty (#11872), CI jobs dying silently and needing retry automation (#11989, #11134), and installer failures on older Linux due to glibc (#12115).
        *   *UI/UX rendering bugs*: Crashes when background tasks trigger React update loops (#11783) and visual alignment issues in terminal/UI components.

4.  **Review and Refine**:
    *   Check date: Digest for 2026-09-19 based on data up to 2026-09-18. Fits perfectly.
    *   Tone: Concise, professional, suited for technical developers.
    *   Format: Use the requested 6-section structure. Include GitHub links for each item.

Let's quickly verify the links and issue numbers.
- #12053, #11872, #11847, #12042, #11162, #11783, #11148, #12028, #11361, #9746, #12217, #12212, #12213, #12214, #12216, #12206, #12195, #12179, #12193, #12165, #11995, #12167, #11717, #11895, #12147, #11987, #10362, #12220, #12215, #12209.
- PRs: #11237, #11874, #12221, #9305, #10455, #11001, #11134, #11658, #12210, #11776, #11837, #12198, #11989, #11963, #12156, #12115, #12218, #10954, #11679, #

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



# DeepSeek TUI Community Digest — 2026-09-19

---

## 1. Today's Highlights

The project (operating as **Codewhale** on GitHub) saw no new releases in the last 24 hours, but the backlog is moving fast. A cluster of high-comment issues around **engine reliability** (silent mid-run freezes, MCP connection supervision) and **architectural cleanup** (dual MCP client stacks, config authority) dominated recent discussion. Meanwhile, a wave of merged PRs delivered tangible UX and safety improvements — including a TUI palette redesign, rate-limit-aware subagent scheduling, and fixes for the Weixin bridge and theme editor.

---

## 2. Releases

*No new releases in the last 24 hours.*

---

## 3. Hot Issues

### #6011 — Usage & Tool Diagnostics: Token Accounting + Error Patterns
**Status:** OPEN | [Link](https://github.com/Hmbown/Codewhale/issues/6011)
A comprehensive enhancement request for per-component, per-model token accounting, cache-hit-rate tracking, per-tool sinks, compaction cost visibility, and tool-call error pattern analysis. This is part of the C11 core execution plan. **Why it matters:** Users and operators currently lack the instrumentation needed to debug cost and performance at the granularity the system demands. 9 comments indicate active scoping.

### #6015 — Adaptive Anti-Stall + Wider Read-Only Shell Grammar
**Status:** OPEN | [Link](https://github.com/Hmbown/Codewhale/issues/6015)
Admits adaptive anti-stall mechanisms and a broader read-only shell grammar into the core plan (C05/C06), superseding an earlier restriction that limited grammar scope to post-release only. **Why it matters:** Directly addresses the tension between safety and usability — operators want richer shell expressions without sacrificing stability. 9 comments.

### #5587 — Dead-Code Sweep Phases 2–4
**Status:** OPEN | [Link](https://github.com/Hmbown/Codewhale/issues/5587)
Continues an audited sweep of all 379 `allow(dead_code)` sites in `crates/tui/src`. Phase 1 removed 8 verified-dead items. Phases 2–4 classify ~242 stale allows and blanket-allow conversions. **Why it matters:** A large, methodical cleanup that reduces compile-time noise and surfaces genuinely dead code that has been hiding behind permissive lints. 9 comments.

### #6184 — Engine Silently Freezes Mid-Run
**Status:** OPEN | [Link](https://github.com/Hmbown/Codewhale/issues/6184)
User reports that during long, tool-heavy runs the engine stops producing model output mid-turn with no error, no log line, and no crash entry. User messages are persisted but never answered. Environment: codewhale 0.9.13, provider zai, model GLM-5.3-Flash. **Why it matters:** A silent freeze is a critical UX and reliability bug — the agent appears hung with no diagnostic path. 6 comments.

### #6187 — MCP: No Connection Supervision
**Status:** CLOSED | [Link](https://github.com/Hmbown/Codewhale/issues/6187)
A configured MCP server that dies mid-session shows "connected" until the next tool call hits EOF. No transport-level watch, no auto-reconnect, no `list_changed` handling. **Why it matters:** MCP is a first-class integration surface; dead servers masquerading as healthy cause confusing, silent failures. 5 comments.

### #6142 — Reconcile the Two MCP Client Stacks
**Status:** OPEN | [Link](https://github.com/Hmbown/Codewhale/issues/6142)
`tui/src/mcp/` (~13.2k lines) and `crates/mcp` (~4.5k lines) duplicate significant functionality (McpPool, config, oauth, stdio/http/sse clients). The app-server uses the crate; the engine uses its own. **Why it matters:** Code duplication is a maintenance hazard and a source of divergent behavior. 5 comments.

### #6087 — Declutter Round 2: /settings, /setup, /fleet Naming
**Status:** CLOSED | [Link](https://github.com/Hmbown/Codewhale/issues/6187)
Founder-directed: "de. clutter. it's so busy." Round 1 landed in 0.9.13. Round 2 targets the 71-row `/settings` view (group by area), flat `/setup` providers (30+), and fleet naming. **Why it matters:** UX density is a recurring theme; this is a direct response to user feedback about interface overwhelm. 5 comments.

### #5915 — Fleet Models: Provider → Model → Shortlist → Role
**Status:** OPEN | [Link](https://github.com/Hmbown/Codewhale/issues/5915)
Founder direction (2026-09-06): build a shortlist of candidate models for sub-agents, flowing from provider → model → model shortlist → fleet models for the operator to choose from and assign roles. **Why it matters:** This is the architectural backbone for multi-model fleet composition. 4 comments.

### #6086 — Session Scratchpad + One Addressing Scheme
**Status:** OPEN | [Link](https://github.com/Hmbown/Codewhale/issues/6086)
The scratchpad does not currently exist in the base prompt. This issue proposes unifying three stores (workshop outputs, scratchpad files, Agent Mail) under one addressing scheme. **Why it matters:** Foundational for agent memory coordination and cross-store data flow. 4 comments.

### #6050 — Pluggable Agent Memory
**Status:** OPEN | [Link](https://github.com/Hmbown/Codewhale/issues/6050)
The `MemoryBackend` enum currently has only `Native` / `Off` variants. This request adds a generic backend seam with causal-memory / mem0 as reference implementations. **Why it matters:** Opens the door to third-party memory backends, a highly requested capability. 4 comments.

---

## 4. Key PR Progress

### #6333 — Safety Hardening: unsafe docs, async I/O, recursion and read budgets
**Status:** CLOSED | [Link](https://github.com/Hmbown/Codewhale/pull/6333)
Every undocumented `unsafe` block received a SAFETY contract; blocking file calls in async code moved to `tokio::fs`; recursive value walkers got depth limits. A significant safety audit pass by AdityaVG13. [Merged]

### #6222 — TUI Redesign: Shoreline, One Palette Across Both Clients
**Status:** CLOSED | [Link](https://github.com/Hmbown/Codewhale/pull/6222)
Re-inks the TUI to the GPUI client's palette, converging on terminal-agent market conventions. Draft status noted — headline item not complete, but pushed for local-only usability. [Merged]

### #6055 — Rate-Limit-Adaptive Launch Scheduling
**Status:** CLOSED | [Link](https://github.com/Hmbown/Codewhale/pull/6055)
Subagent launch gate now adapts to rate-limit signals instead of relying on a fixed-capacity `Semaphore` whose capacity could not shrink. Swarm-induced parallel 429s become an edge case rather than steady state. [Merged]

### #6336 — /config Theme Editor No Longer Exits on Arrow Key
**Status:** CLOSED | [Link](https://github.com/Hmbown/Codewhale/pull/6336)
Live-preview on arrow keys was emitting `ConfigUpdated { persist: false }`, which popped the modal and rebuilt it — dropping the transient editing state. Fixed by Serendo. [Merged]

### #6335 — Drop Retired `token_budget` Field from SUBAGENTS.md
**Status:** CLOSED | [Link](https://github.com/Hmbown/Codewhale/pull/6335)
Removed `token_budget` documentation from six places in `docs/SUBAGENTS.md`, fixing #6316. Cleaned up by yetuge. [Merged]

### #6233 — Tell the User the Resume Route That Actually Works
**Status:** CLOSED | [Link](https://github.com/Hmbown/Codewhale/pull/6233)
The session-switch refusal message pointed users at an impossible action. Rewrote the message to describe the actual working resume path, fixing #6225. [Merged]

### #6321 — Record the Mode Each Turn Ran In
**Status:** CLOSED | [Link](https://github.com/Hmbown/Codewhale/pull/6321)
A turn's mode was only recoverable from the thread setup, not the completed turn record. Now each turn persists the mode it actually ran in, so GUI plan-approval actions can trust the field. [Merged]

### #6170 — Weixin Bridge: Add Quick Start Documentation
**Status:** CLOSED | [Link](https://github.com/Hmbown/Codewhale/pull/6170)
The Weixin bridge README pointed at a non-existent path, gave no startup command, and named an env file nothing reads. Added a working Quick Start so the bridge is actually usable out of the box. [Merged]

### #6134 — Professionalize Computer Use + Official Download Page
**Status:** CLOSED | [Link](https://github.com/Hmbown/Codewhale/pull/6134)
Computer Use 0.3.0 now routes local actions through a registered standalone helper, failing closed if the helper cannot start. Added native permission setup, background practice check, and human Pause/Stop. [Merged]

### #5752 — Signed, Versioned, Cached Facts Channel (Slice 1)
**Status:** CLOSED | [Link](https://github.com/Hmbown/Codewhale/pull/5752)
Supabase-backed cloud facts channel: signed + versioned + cached + fail-safe facts (model catalog deltas, provider defaults, release truth, announcements) served at `/api/facts/v1/<channel>`. Feature is flag-off by default. [Merged]

---

## 5. Feature Request Trends

| Direction | Representative Issues |
|---|---|
| **Observability & Diagnostics** | #6011 (token accounting, error patterns), #6193 (runtime performance gates), #6315 (sub-agent metrics persistence) |
| **Fleet & Multi-Model Orchestration** | #5915 (provider → model → shortlist → role), #6035 (model pin propagation), #6029 (provider-neutral upstream selection) |
| **Pluggable Extensibility** | #6050 (pluggable memory backends), #6142 (unified MCP client stack), #6133 (single-source runtime event contract) |
| **Interface Declutter & UX** | #6087 (declutter round 2), #6086 (scratchpad + unified addressing), #5835 (IDE/ACP stage 2) |
| **Remote & Infrastructure** | #6158 (SSH remote workspaces), #6187 (MCP connection supervision) |

---

## 6. Developer Pain Points

- **Architectural drift:** Two parallel MCP client stacks (#6142), duplicated config authority between `tui/src/config*` and `crates/config` (#6143), and a second turn loop in `acp_server.rs` (#6088) all point to a codebase that has grown organically and now needs deliberate reconciliation.
- **Silent failures:** #6184 (engine freeze with no log/crash) and #6187 (dead MCP servers reporting "ready") share a theme — failures that are invisible until they cascade into user-visible breakage.
- **Configuration fragility:** Model IDs pinned in six places with no shared owner (#6035), and config options like `max_parallel_writes_without_worktree` that are documented and parsed but never read by code (#6312).
- **Metrics gaps:** Sub-agent usage is never persisted (#6315), and there is no runtime performance gate or benchmarking infrastructure (#6193) — making it hard to reason about cost, speed, or regression impact.
- **Build/dependency bloat:** Multiple dependency dedupe issues (#6151, and a wave of dependabot bumps) suggest the workspace carries redundant crate versions (reqwest 0.12/0.13, toml/toml_edit, thiserror 1/2) that compound build times.

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>



# ComfyUI Community Digest — 2026-09-19

## 1. Today's Highlights
The development focus over the last 24 hours has centered on stabilizing the newly integrated **comfy-aimdo 0.5.x dynamic VRAM** features, alongside major architecture expansions. Core contributor `kijai` is pushing **Qwen-Image 2.1 support**, while significant efforts are being funneled into optimizing **MiniMax H3** sparse attention and fixing critical stability crashes on AMD ROCm and legacy NVIDIA GPUs. The frontend package has been bumped to `1.53.6` to align with ongoing UI updates.

## 2. Releases
*No new official releases were published in the

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>



Based on the GitHub activity for **ollama/ollama** leading up to 2026-09-19, here is the community digest.

---

### 1. Today's Highlights
The community focus is heavily concentrated on tool-calling stability, particularly for Qwen3 variants (parser bugs, 500 streaming errors, and tool role rejections), alongside critical backend crashes on CUDA and ROCm. On the product side, the removal of the built-in CLI agent has triggered requests for enterprise-grade opt-in re-integration, while API transparency features (like thinking levels and chat response digests) are actively being rolled out.

---

### 2. Releases
*No new releases were published in the last 24 hours.*

---

### 3. Hot Issues

*   **[Issue #17778] Qwen 3.8 500 Error during tool streaming (`no user query found in messages`)**
    *   **Why it matters:** A high-frequency blocker for AI agent workflows. Users integrating Qwen 3.8 with tool loops are hitting server-side 500 errors mid-stream.
    *   **Community reaction:** Highly active with 32 comments and 25 👍, indicating a critical regression affecting many agent deployments.
    *   [Link](https://github.com/ollama/ollama/issues/17778)
*   **[Issue #18509] Ollama refusing "tool" role, which worked fine in llama.cpp**
    *   **Why it matters:** Developers utilizing standard tool roles (distinct from user/assistant roles) find their clients broken, forcing hacky role mappings.
    *   **Community reaction:** Frustration over semantic tool role handling, with developers calling out the lack of standards compliance.
    *   [Link](https://github.com/ollama/ollama/issues/18509)
*   **[Issue #18530] qwen3-coder: Tool call silently lost when reasoning precedes it**
    *   **Why it matters:** Critical parser bug where the model emits natural language reasoning before a tool call, but the parser fails to detect the implicit tool opener, resulting in lost function calls.
    *   **Community reaction:** High priority for developers building coding agents using `qwen3-coder:30b`. (A corresponding parser fix PR is already underway).
    *   [Link](https://github.com/ollama/ollama/issues/18530)
*   **[Issue #18528] ROCm state leak in hybrid GDN models (qwen3.5-family)**
    *   **Why it matters:** On ROCm setups (Radeon 8060S / Strix Halo), hybrid Gated Delta Net models leak KV cache state across requests, causing earlier prompts' text to appear in later responses.
    *   **Community reaction:** Tracked against upstream `llama.cpp#29092`, highlighting the complexity of maintaining backend forks.
    *   [Link](https://github.com/ollama/ollama/issues/18528)
*   **[Issue #18522] gpt-oss:20b (MXFP4) deterministic CUDA crash (`ADD_ID failed`)**
    *   **Why it matters:** Deterministic aborts inside CUDA graph compute for `gpt-oss:20b` on Ada Lovelace GPUs, halting local LLM inference.
    *   **Community reaction:** Low comment count but critical blocker for users running open-weight GPT models on consumer CUDA hardware.
    *   [Link](https://github.com/ollama/ollama/issues/18522)
*   **[Issue #18527] deepseek-v4.1-flash silently discards image input while advertising `vision`**
    *   **Why it matters:** Cloud model capability mismatch; the API advertises `vision` but silently drops images without raising an error, leading to false negative responses.
    *   **Community reaction:** Users noting silent failures are highly dangerous for multimodal pipelines.
    *   [Link](https://github.com/ollama/ollama/issues/18527)
*   **[Issue #18490] Feature Request: Restore built-in agent as an opt-in CLI command**
    *   **Why it matters:** PR #18393 removed the default CLI agent, breaking daily workflows in locked-down enterprise environments where cloud models/login prompts are blocked.
    *   **Community reaction:** Developers are requesting an opt-in flag to restore the agent locally without forcing cloud registration defaults.
    *   [Link](https://github.com/ollama/ollama/issues/18490)
*   **[Issue #16833] Add a way to filter only local models**
    *   **Why it matters:** The web/app models list mixes cloud-only and local models. Users want a strict offline filter to check what can run locally.
    *   **Community reaction:** 6 👍, showing strong demand for better offline-first UX filtering.
    *   [Link](https://github.com/ollama/ollama/issues/16833)
*   **[Issue #18477] Vulkan iGPU runner wedges after cancelled large prefill**
    *   **Why it matters:** On Intel Lunar Lake iGpus, cancelling a large prefill task leaves the `llama-server` parked in a DRM deadlock, hanging all subsequent requests until restart.
    *   **Community reaction:** Major stability issue for Vulkan backend users on integrated hardware.
    *   [Link](https://github.com/ollama/ollama/issues/18477)
*   **[Issue #15142] Add Mistral Small 4 to Ollama Models**
    *   **Why it matters:** Request to import the newly released, fully open-source Mistral Small 4 as a standard Ollama model.
    *   **Community reaction:** High interest (16 👍) from developers looking to upgrade from the aging Mistral Small 3.2.
    *   [Link](https://github.com/ollama/ollama/issues/15142)

---

### 4. Key PR Progress

*   **[PR #18532] model/parsers: accept implicit qwen3coder tool openers**
    *   **Summary:** Fixes the parser to handle Qwen3-Coder outputs where reasoning is followed directly by function XML without the explicit `<tool_call>` opener (fixes #18530).
    *   [Link](https://github.com/ollama/ollama/pull/18532)
*   **[PR #18393] cmd: remove built-in agent**
    *   **Summary:** Reverts the CLI interface back to the classic Ollama chat interface, removing the default cloud-tethered agent. (Prompted opt-in requests like #18490).
    *   [Link](https://github.com/ollama/ollama/pull/18393)
*   **[PR #18473] api: expose model thinking levels and defaults**
    *   **Summary:** Exposes supported thinking values and defaults via `/api/show` so clients (like Codex CLI) can dynamically populate reasoning controls.
    *   [Link](https://github.com/ollama/ollama/pull/18473)
*   **[PR #18524] Add digest and provider_version to /api/chat responses**
    *   **Summary:** Adds `digest` and `provider_version` metadata fields to `/api/chat` responses to improve tracing and model version debugging.
    *   [Link](https://github.com/ollama/ollama/pull/18524)
*   **[PR #17976] create: quantize gemma4 sparse-MoE expert banks uniformly**
    *   **Summary:** Fixes a quantization bug where sensitive projection substring matching incorrectly promoted Gemma4 sparse-MoE expert banks to 8-bit, bloating package sizes.
    *   [Link](https://github.com/ollama/ollama/pull/17976)
*   **[PR #18519] app: support preview update channel**
    *   **Summary:** Adds desktop app support for users to opt-in to automatic Release Candidate (RC) updates.
    *   [Link](https://github.com/ollama/ollama/pull/18519)
*   **[PR #1

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

Thinking Process:

1.  **Analyze the Request:**
    *   Role: Technical analyst focused on AI developer tools.
    *   Source data: GitHub data for `ggerganov/llama.cpp` (specifically dated for 2026-09-19, though the data provided is a simulated snapshot).
    *   Output: Structured English digest ("llama.cpp community digest for 2026-09-19") with specific sections:
        1.  **Today's Highlights** (2-3 sentences summarizing key updates).
        2.  **Releases** (Summarize changes if new versions exist).
        3.  **Hot Issues** (Pick 10 noteworthy issues, explain why they matter and community reaction).
        4.  **Key PR Progress** (Pick 10 important PRs, describe features or fixes).
        5.  **Feature Request Trends** (Distill most-requested feature directions).
        6.  **Developer Pain Points** (Summarize recurring frustrations/requests).
    *   Style: Concise, professional, suited for technical developers. Include GitHub links.

2.  **Analyze the Data Provided:**
    *   **Latest Releases (last 24h):**
        *   b11044: hexagon im2col update (#29103) - 1D/padded IM2COL ops, DMA patch-embed fast path, blocked-staging general IM2COL DMA kernel.
        *   b11043: hexagon HMX flash-attention head_dim padding (support DK=DV=72) (#26539) - allows head_dim not multiple of 64 (e.g. SigLIP head_dim=72).
        *   b11042: opencl bin kernel `kernel_gemm_noshuffle_q6_k_f32_32b_trans_ila_a8_bin` (#28678) - A8 Q6_K non-MoE binary kernel, layout compatibility fixes.
        *   b11040: ggml check for allocation failures to prevent crashes (#28149).
        *   b11039: Model-Saver: Write the SWA pattern, 15 more architectures roundtrip (#29042) - read SWA pattern as period or per-layer array.
        *   b11037: ggml-webgpu: fix supports_op condition for GET_ROWS (#28978) - vec4 handling, strides checking.
        *   b11036: ggml handle graph buffer reservation failure (#26070).
        *   b11035: vulkan add IQ3_S MMQ matmul kernels (#28822).
        *   b11034: vocab add ufakzeka pre-tokenizer (#29033).
        *   b11033: cmake fix build when GGML_CPU=OFF and GGML_CUDA=ON (#29026).
    *   **Latest Issues (top 30 by comment count, but I need to pick 10 "Hot/Noteworthy" ones):**
        *   #27198 (30 comments): Eval bug: [SYCL] --split-mode tensor crashes in dev2dev_memcpy (DEVICE_LOST) on dual Arc Pro B70. (SYCL multi-GPU stability issue).
        *   #25664 (24 comments): Eval bug: vk::DeviceLostError on linux-7.x kernels (RADV_STRIXHALO). (Vulkan driver crash on Strix Halo).
        *   #24055 (19 comments): Context checkpoints always invalidated on hybrid/recurrent models. (Critical performance/logic bug for hybrid models).
        *   #28860 (15 comments): SYCL demands extreme scratchpad allocation (2GB+) when ngram-mod is enabled. (SYCL memory overhead bug).
        *   #24657 (14 comments): GGML_ASSERT(n_inputs < GGML_SCHED_MAX_SPLIT_INPUTS) - On more than one GPU (CUDA). (Multi-GPU scaling limitation).
        *   #25522 (13 comments): Gemma 4 crashes with MTP. (MTP crash on Gemma 4).
        *   #24492 (13 comments): Gemma 4 31B MTP crashes on Vulkan backend (pre-allocated tensor cannot run operation NONE). (Vulkan + MTP bug).
        *   #28441 (10 comments): Intermittent silent Qwen2.5-Omni audio corruption on Metal under system load. (Audio/Metal edge case).
        *   #22360 (10 comments): Server Slows Down Significantly Over Time, Requires Frequent Reboots (Windows/Vulkan). (Memory leak/performance degradation over time).
        *   #28211 (8 comments): HIP/ROCm on gfx1151, wrong logits (not a crash), triggered by prompts longer than n_ubatch. (ROCm correctness issue).
        *   #28902 (8 comments): M-RoPE embedding batches read batch.pos past the end of the documented n_tokens array. (Potential out-of-bounds read / documentation mismatch).
        *   #27330 (8 comments): CUDA graphs hang the GPU channel (RC watchdog + Xid 8) on RTX 5090 Laptop / sm_120. (CUDA graph hang on RTX 5090).
        *   #27910 (7 comments): CUDA inference on Qwen3.8-27B Q6_K causes RTX 5090 display loss and NVIDIA GSP/full-chip reset on Linux. (Serious driver/hardware reset issue).
        *   Others: #26409 (SYCL split-mode 3x slower), #28768 (HIP/ROCm Windows gfx1201 wrong logits), #27560 (llama-server crashes on Windows/Vulkan), #27682 (OpenVINO low throughput), #29028 (qwen4exp Vulkan abort), #28734 (qwen4exp CUDA decode slows), #27373 (SYCL degraded performance with MTP), #28805 (qwen4exp Metal decode EOS issue), #29022 (Fast Tool Gating feature request), #27733 (server peg-native parse failure), #29078 (convert_hf_to_gguf.py large model RAM usage).
    *   **Latest Pull Requests (top 20 by comment count, pick 10 key ones):**
        *   #29105 (Closed): hexagon: add ROLL op support (f32).
        *   #28243 (Open): models: Qwen3.8-Flash-Next MTP (faster MTP support, reuses embed_tokens).
        *   #28331 (Open): respect -fitc from llama-bench instead of using benchmark context size.
        *   #29107 (Open): sycl: IQ3 code reorder (improve SYCL attention/decode on Intel Arc Pro B70).
        *   #27861 (Open): llama: GPU-resident LRU cache for host-offloaded MoE expert weights (improves host-offloaded MoE performance).
        *   #29094 (Open): metal: add F16 input to the FWHT (Fast Walsh-Hadamard Transform).
        *   #29103 (Closed): hexagon: im2col update (already in releases, but good to list as key progress).
        *   #29106 (Open): hexagon: BF16 <-> F16 conversion support (during set_tensor).
        *   #28634 (Closed): cuda: enable GGML_CUDA_FA_ALL_QUANTS by default (massive prefill speedup for non-standard KV quant).
        *   #26501 (Closed): hexagon: support for multi-NPU devices (IQ9, IQ10) and fully asynchronous backend.
        *   #27952 (Open): vulkan: int8 coopmat1 matmul implementation for AMD RDNA3 and RDNA4 (great performance gains).
        *   #29046 (Open): opencl: add support for bin kernel `flash_attn_f32_f16_bin`.
        *   #28389 (Open): cuda : fix CUB argsort corruption caused by in-place keys.
        *   #29085 (Open): llama: reserve graph nodes for LFM2 recurrent rollback.
        *   #28536 (Open): CUDA: Follow up of #25635, refactoring FA shared smem swizzle.
        *   #26539 (Closed): hexagon: support for HMX flash-attention head_dim not multiple of 64.
        *   #29102 (Open): vocab : match longest leftmost added token in added tokens parser.
        *   #24364 (Open): Force NVFP4 W4A8 path for NVFP4_W4A16 layers on Blackwell.
        *   #29100 (Open): cuda: FWHT kernels for block widths above 512.

3.  **Drafting Sections based on instructions:**

    *   **Today's Highlights (2-3 sentences):**
        *   Focus on major themes: Backend-specific optimizations are in full swing, notably for Hexagon (IM2COL, HMX Flash Attention, ROLL op), Vulkan (IQ3_S MMQ, RDNA3/4 int8 coopmat1), and SYCL/CUDA stability improvements. Multi-GPU and MTP (Multi-Token Prediction) support continues to be a major focal point, especially for architectures like Qwen3.8-Flash-Next and Gemma 4.

    *   **Releases:**
        *   List the key releases (b11044 down to b11033) and summarize their core technical contributions:
            *   Hexagon IM2COL updates and HMX Flash Attention head_dim padding (SigLIP support).
            *   OpenCL A8 Q6_K non-MoE binary kernel.
            *   Critical allocation failure checks to prevent crashes (`ggml` allocation failures, graph buffer reservation failure).
            *   Model saver SWA pattern roundtrip for 15 more architectures.
            *   WebGPU `GET_ROWS` fix and Vulkan IQ3_S MMQ matmul kernels.
            *   CMake build fix for configurations where CPU is disabled but CUDA is enabled.

    *   **Hot Issues (Pick 10 noteworthy Issues, explain why they matter and community reaction):**
        *   Let's select the most critical ones representing stability, hardware-specific bugs, and performance regressions:
            1.  **#27198 (SYCL crashes on dual Arc Pro B70):** Critical multi-device SYCL stability issue (`DEVICE_LOST` during `dev2dev_memcpy`). High comment count (30) shows strong community interest in multi-GPU SYCL.
            2.  **#25664 (vk::DeviceLostError on Strix Halo / linux 7.x):** Major blocker for users running latest kernels on AMD APUs (Strix Halo). 24 comments, 5 likes.
            3.  **#24055 (Context checkpoints always invalidated on hybrid/recurrent models):** Logic bug severely impacting inference efficiency and checkpointing on hybrid architectures. 19 comments, 4 likes.
            4.  **#28860 (SYCL extreme scratchpad allocation with ngram-mod):** Memory exhaustion issue (2GB+ allocation) preventing SYCL users from using ngram-mod. 15 comments.
            5.  **#24657 (GGML_ASSERT crash on multi-GPU CUDA):** Limits multi-GPU scaling on CUDA backends. 14 comments.
            6.  **#25522 (Gemma 4 crashes with MTP):** Crucial for users leveraging Multi-Token Prediction with Gemma 4. 13 comments, 1 like.
            7.  **#24492 (Gemma 4 31B MTP crashes on Vulkan):** Backend-specific crash on pre-allocated tensors, highlighting Vulkan MTP bugs. 13 comments, 3 likes.
            8.  **#22360 (Server slowdown over time on Windows/Vulkan):** Memory leak or performance degradation requiring constant reboots. 10 comments.
            9.  **#27330 (CUDA graphs hang GPU on RTX 5090 / sm_120):** Critical hang on latest Blackwell architecture, though workaround exists (`GGML_CUDA_DISABLE_GRAPHS=1`). 8 comments, 6 likes.
            10. **#27910 (RTX 5090 display loss/GSP reset on Qwen3.8-27B Q6_K):** Hardware-level driver reset issue on Linux, showing severe stability issues with specific models. 7 comments.
        *   *Self-Correction on selection:* Ensure diversity across backends (SYCL, Vulkan, CUDA, ROCm) and issue types (crashes, performance, memory).

    *   **Key PR Progress (Pick 10 important PRs, describe features or fixes):**
        *   Focus on major architectural improvements and performance boosts:
            1.  **#27952 (Vulkan int8 coopmat1 matmul for RDNA3/RDNA4):** Major performance boost for AMD GPUs, supporting multiple quant formats (q4_0, q4_1, mxfp4, nvfp4, etc.) with strong performance on Strix Halo.
            2.  **#28243 (Qwen3.8-Flash-Next MTP):** Enables 1.3x to 2x faster MTP by reusing `embed_tokens`, saving disk space and VRAM/RAM.
            3.  **#27861 (GPU-resident LRU cache for host-offloaded MoE):** Solves host RAM bandwidth bottleneck for MoE models by caching recently used expert weights on the GPU.
            4.  **#28634 (Enable GGML_CUDA_FA_ALL_QUANTS by default):** Prevents massive prefill speed drops (e.g., from ~1147 t/s to ~34 t/s) for non-standard KV quantizations on CUDA.
            5.  **#29107 (SYCL IQ3 code reorder):** Optimizes SYCL attention and decode paths on Intel Arc Pro B70, adding persistent reordered layouts.
            6.  **#26501 (Hexagon multi-NPU and fully async backend):** Large-scale Hexagon backend overhaul supporting multi-NPU devices (IQ9, IQ10) with asynchronous operations.
            7.  **#29105 (Hexagon ROLL op support):** Adds f32 ROLL op support to the Hexagon backend.
            8.  **#29094 (Metal F16 input to FWHT):** Optimizes Metal FWHT kernel by template-supporting F16 input directly, avoiding redundant copies.
            9.  **#28389 (CUDA CUB argsort corruption fix):** Fixes a subtle but critical in-place key aliasing bug in CUDA argsort.
            10. **#29046 (OpenCL flash_attn_f32_f16_bin kernel):** Adds binary kernel support for flash attention on OpenCL.
        *   *Alternative selection:* Let's include the Hexagon IM2COL update (#29103) as it's a core release item, and the LFM2 recurrent rollback fix (#29085) since hybrid/recursive models are a growing trend. Let's write down 10 well-distributed ones.

    *   **Feature Request Trends:**
        *   Analyze the issues list for feature requests:
            *   *MTP and Speculative Decoding enhancements:* Requests for better MTP support, especially on Vulkan and for architectures like Qwen3.8 and Gemma 4 (e.g., #25522, #24492, #28805, and PR #28243).
            *   *Tool Gating and Tool Use optimization:* Issue #29022 requests fast tool gating and single-pass selection via prefill logit slicing.
            *   *WebUI / User Experience:* Issue #24090 requests projects/folders for conversations in the WebUI.
            *   *SYCL and backend performance:* Issue #28990 requests general performance improvements on SYCL, and issue #27373 highlights MTP performance degradation with Q3 quants on SYCL.
            *   *Model conversion efficiency:* Issue #29078 requests a streaming two-pass mode for `convert_hf_to_gguf.py` to handle very large models with less RAM.
            *   *New Quant support:* Issue #29058 requests support for Prism PQ2_0 (type 142) and PTQ1_0 (type 143).

    *   **Developer Pain Points:**
        *   Summarize recurring frustrations:
            *   **Backend stability and hardware-specific crashes:** Recurring driver crashes (`DEVICE_LOAD`, `vk::DeviceLostError`, CUDA graph hangs on RTX 5090, full chip resets) across Vulkan, CUDA, SYCL, and ROCm backends, especially on bleeding-edge hardware (Strix Halo, RTX 5090, Arc B70).
            *   **Multi-GPU and Multi-Device scaling:** High friction when scaling to multiple GPUs (e.g., SYCL split-mode crashes, CUDA `GGML_SCHED_MAX_SPLIT_INPUTS` assertion failures).
            *   **Memory management and overhead:** Extreme scratchpad allocations on SYCL when using ngram-mod, and high RAM/disk requirements during model conversion (HF to GGUF).
            *   **MTP/Speculative Decoding correctness:** High crash rate of MTP on specific backends (Vulkan, CUDA) and models (Gemma 4, Qwen4exp), making it a risky feature to use in production.
            *   **Build and configuration complexity:** CMake issues when disabling CPU but enabling CUDA, and general build friction across different backend combinations.

4.  **Refining and Formatting the Output:**
    *   Ensure all links are correctly formatted (using

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*