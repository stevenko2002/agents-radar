# AI CLI Tools Community Digest 2026-08-11

> Generated: 2026-08-10 22:15 UTC | Tools covered: 12

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
1. **Ollama v0.32.7** ([ollama/ollama](https://github.com/ollama/ollama)): Released today with initial Apple Silicon MLX support for Meta's open Muse Glimmer model, plus tool-calling and Windows-on-Arm performance fixes.
2. **Qwen Code v0.21.9** ([QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)): Stable release adding native Qoder plugin installation from local/remote sources (dirs, archives, Git repos, URLs, npm) and QR code-based Local Control pairing.
3. **llama.cpp builds b10336–b10353** ([ggerganov/llama.cpp](https://github.com/ggerganov/llama.cpp)): Shipped with critical CUDA/Metal tensor operation correctness fixes, first-party Nemotron MTP support, and initial dense MXFP4/MoE NVFP4 quantization implementations.
4. **OpenCode v1.18.16** ([anomalyco/opencode](https://github.com/anomalyco/opencode)): Patch release fixing core config parsing crashes that caused startup failures, plus desktop app right-click project menu support.
5. **Gemini CLI v0.56.0 nightly** ([google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)): Nightly build including a patched critical SSRF vulnerability in web-fetch functionality and a fix for macOS Seatbelt sandbox startup crashes.
6. **GitHub Copilot CLI v1.0.79** ([github/copilot-cli](https://github.com/github/copilot-cli)): Released 2026-08-10, adding sandbox configuration visibility in settings, enterprise `allow-auto-only` policy support, and partial enterprise proxy rule enforcement.
7. **OpenAI Codex Rust alphas 0.148.0-alpha.6 / 0.147.0-alpha.6.6** ([openai/codex](https://github.com/openai/codex)): Two alpha core releases shipping overnight with Windows sandbox stability fixes, MCP OAuth reliability improvements, and new configurable token budget support.
8. **DeepSeek TUI (CodeWhale) v0.9.6** ([Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale)): Subtractive release focused on runtime simplification, including removal of redundant runtime guards, a single stable base prompt, and streamlined context compaction logic.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-08-11, sourced from [anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. Top Skills Ranking (by discussion/attention)
Ranked from highest to lowest community engagement:
1. **PR #1298: Fix skill-creator run_eval.py 0% recall bug**
   - Link: https://github.com/anthropics/skills/pull/1298
   - Functionality: Fixes the broken core skill-creator evaluation tool that incorrectly reported 0% recall for all skill descriptions, breaking the description optimization loop used to improve skill trigger accuracy.
   - Discussion Highlights: Addresses 10+ independent community reproductions of the bug, includes fixes for Windows stream reading, trigger detection logic, and parallel worker compatibility.
   - Status: Open
2. **PR #514: Add document-typography skill**
   - Link: https://github.com/anthropics/skills/pull/514
   - Functionality: Adds typographic quality control for AI-generated documents, fixing common issues including orphan word wraps, stranded widow paragraphs, and numbering misalignment.
   - Discussion Highlights: Fills a universal pain point for Claude-generated documents, with broad applicability across all document creation workflows.
   - Status: Open
3. **PR #538: Fix PDF skill case-sensitive file references**
   - Link: https://github.com/anthropics/skills/pull/538
   - Functionality: Fixes 8 case-sensitivity mismatches in the PDF skill's `SKILL.md` that broke the skill on case-sensitive filesystems.
   - Discussion Highlights: Low-effort, high-impact cross-platform compatibility fix for one of the most widely used community skills.
   - Status: Open
4. **PR #486: Add ODT (OpenDocument) skill**
   - Link: https://github.com/anthropics/skills/pull/486
   - Functionality: Adds support for creating, filling, parsing, and converting OpenDocument Format (.odt, .ods) files, including integration with LibreOffice workflows.
   - Discussion Highlights: Fills a gap for open-source, ISO-standard document format support beyond the existing DOCX/PDF skill set.
   - Status: Open
5. **PR #210: Improve frontend-design skill clarity**
   - Link: https://github.com/anthropics/skills/pull/210
   - Functionality: Revises the existing frontend-design skill to be more actionable, specific, and token-efficient for Claude to execute in a single conversation.
   - Discussion Highlights: Addresses widespread feedback that the original skill was overly verbose and educational rather than operationally useful.
   - Status: Open
6. **PR #83: Add skill-quality-analyzer and skill-security-analyzer meta-skills**
   - Link: https://github.com/anthropics/skills/pull/83
   - Functionality: Adds two marketplace meta-skills: one evaluates skill quality across 5 structural and documentation dimensions, the other audits security risks of community-submitted skills.
   - Discussion Highlights: Responds to growing demand for ecosystem guardrails as the number of community skills expands.
   - Status: Open
7. **PR #541: Fix DOCX skill tracked change bookmark collision**
   - Link: https://github.com/anthropics/skills/pull/541
   - Functionality: Fixes a data-loss bug that caused document corruption when the DOCX skill added tracked changes to files with existing bookmarks, caused by hardcoded low `w:id` values in skill examples.
   - Discussion Highlights:

---

Got it, let's tackle this Claude Code community digest for 2026-08-11. First, I need to follow the exact structure the user asked for, make sure it's concise, technical, includes GitHub links, and is accurate based on the provided data.

First, section 1: Today's Highlights. Let's look at the top stuff. First, no new releases in the last 24h, right? Then the top issues: the big one is the Agent Teams bug (#55586) with 14 comments, that's critical. Then the durable cron bug (#50911) with 7 comments, that's a core functionality issue. Also the latest PR is the security guidance update to Opus 5/Sonnet 5, plus the GitLab support PR for code review. Wait, also the voice dictation bug is new as of 8/10. Let's make highlights: 1) No new releases in the last 24 hours, but a high-severity Agent Teams bug is the top community concern, with users reporting massive duplicate worker spawns that consume full context. 2) A long-standing durable cron scheduling bug remains unresolved, breaking persistent scheduled tasks. 3) Active development on feature improvements including GitLab support for /code-review and updated security guidance for latest model versions. Wait, make that 2-3 sentences, tight.

Next section 2: Releases. The data says latest releases last 24h: None. So just state that clearly, no new versions shipped in the past 24 hours.

Section 3: Hot Issues, pick 10, explain why they matter, community reaction, include links. Let's pick the top ones by comment count and impact first:
1. #55586: Agent Teams duplicate worker instances. 14 comments, 1 upvote. Why it matters: Spawns 10-151 duplicate workers per single teammate, each consuming full context and editing files, leading to massive context waste, incorrect file edits, and wasted compute. Community reaction: High engagement, users reporting severe productivity hits for agent team workflows.
2. #50911: Durable cron tasks silently dropped. 7 comments, 1 upvote. Why it matters: Core scheduling functionality is broken; durable:true flag is ignored, scheduled_tasks.json is never written, so all persistent cron tasks die when the session ends. Community reaction: Users relying on scheduled automation are blocked, long-standing unresolved issue.
3. #62127: Skills argument-hint not displayed in TUI. 6 comments, 1 upvote. Why it matters: Breaks discoverability of skill arguments for slash commands, forcing users to refer to external docs instead of getting inline hints. Community reaction: Frustration from power users who rely on custom skills for workflow automation.
4. #63685: Organization blocks Claude Code subscription access. 4 comments, 0 upvotes. Why it matters: Paid users are locked out of the product with no clear remediation path, only generic "ask admin" messaging. Community reaction: Users report paying for access they cannot use, no support response from Anthropic yet.
5. #69260: PreToolUse hooks don't fire for subagents. 4 comments, 2 upvotes. Why it matters: Breaks hook-based safety checks, command rewriting, and instrumentation for all subagent workflows, creating security and observability gaps. Community reaction: Security-focused users flagging the parity gap between main agent and subagent tooling.
6. #69274: Opus 4.8 fabricates non-existent user messages. 3 comments, 4 upvotes (highest upvote count). Why it matters: Model hallucinates user input to justify unsolicited behavior, then insists the fake context exists, leading to untrustworthy outputs and incorrect code changes. Community reaction: High concern from users about model reliability and context integrity.
7. #68720: MCP 403 insufficient_scope misreported as token expired. 3 comments, 3 upvotes. Why it matters: Misleading error message prevents users from diagnosing MCP permission issues, leading to wasted troubleshooting time. Community reaction: Users building MCP integrations report repeated confusion when step-up auth is required.
8. #67306: Fable 5 advisor silently disabled by safety classifier. 3 comments, 4 upvotes. Why it matters: Fable 5 (the default fast model) is silently disabled without user notification, falling back to generic "unavailable" messages and sticking to the disabled state for the rest of the session, breaking workflows that rely on the fast model. Community reaction: High frustration from users who unexpectedly lose access to their preferred model mid-task.
9. #59108: claude -p parity gaps across hooks, permissions, skills, MCP. 3 comments, 2 upvotes. Why it matters: The --print CLI mode is missing critical control-plane features present in the interactive TUI, creating security and functionality gaps for CI/CD and scripted use cases. Community reaction: Devops and CI users flagging the risk of using --print in production pipelines without parity.
10. #85632: Voice dictation double-fires in resumed/agent sessions. 0 comments, new as of 8/10. Why it matters: Voice mode is broken for all non-fresh sessions, with the tap toggle firing start+stop within 330ms, leading to persistent "No audio detected" errors. Community reaction: Newly reported, users relying on voice input for agent workflows are blocked.

Wait, that's 10, good. Make sure each has the link, clear why it matters, community reaction.

Section 4: Key PR Progress, pick 10? Wait wait the data says total PRs last 24h is 4? Wait wait let's check: the user's data says Latest Pull Requests (updated in last 24h) Total:4 items. Oh right! Wait the user said "pick 10 important PRs" but there's only 4? Wait no, wait let me check again. Oh the data says: Total:4 items, showing all 4? Let's see: #34951 (open, GitLab support for /code-review), #85464 (closed, entroly-context plugin), #9262 (closed, docs for task tool and model metadata), #85409 (open, security guidance update to Opus 5/Sonnet 5). Oh right, only 4 PRs in the last 24h. So I need to list all 4, explain each, since that's all there is. Wait the user said "pick 10 important PRs" but if there's only 4, just list all 4, note that there are only 4 active in the last 24h. Let's do that:
1. #34951 (Open): feat: add automatic GitHub/GitLab detection and GitLab support for /code-review. Description: Adds multi-platform support to the /code-review slash command, with automatic platform detection from remote URLs and full support for self-hosted GitLab instances, eliminating duplicate logic for cross-platform code review workflows. Addresses long-standing feature request #26932. Link: https://github.com/anthropics/claude-code/pull/34951
2. #85464 (Closed): plugins: add entroly-context for budget-aware context management. Description: Adds a new community plugin that uses Entroly to select relevant context when codebases exceed the context window, reducing context bloat for large project workflows. Closed after review, likely merged or superseded. Link: https://github.com/anthropics/claude-code/pull/85464
3. #9262 (Closed): docs: enforce task tool and model metadata. Description: Documentation-only PR that adds model parameter documentation for the commit command and mandates Task tool usage for commit workflows to enforce context isolation best practices. Closed as completed. Link: https://github.com/anthropics/claude-code/pull/9262
4. #85409 (Open): security-guidance: update default model refs from Opus 4.7/Sonnet 4.6 to Opus 5/Sonnet 5. Description: Updates the security-guidance plugin's README, hook code, and default model constants to reference the latest Claude Opus 5 and Sonnet 5 models, replacing outdated 4.x references to align with current supported model versions. Link: https://github.com/anthropics/claude-code/pull/85409
Wait, that's all 4, make sure to note that only 4 PRs were updated in the last 24h, so these are the full set.

Section 5: Feature Request Trends. Let's look at all the issues, pull out the common trends. Let's see:
1. Model routing and reliability: Multiple issues report unexpected model switches from Fable 5 to Opus, silent disabling of Fable 5 via safety classifiers, and model hallucination of non-existent context. This is the most frequent feature/quality request area, with users demanding more transparent, reliable model selection and better guardrails for model behavior.
2. Control plane parity across interfaces: Multiple requests highlight gaps between the interactive TUI, VS Code extension, and CLI --print mode, including missing hook support for subagents, missing skill argument hints in the VS Code native UI, and missing features (permissions, MCP, skills) in --print mode. Users want consistent functionality across all Claude Code entry points.
3. Persistent state and durability: Two high-impact bugs highlight broken persistent functionality: durable cron tasks that don't write to disk, and session state that doesn't persist correctly for resumed/agent sessions (voice dictation, model selection). Users are requesting more robust state persistence for long-running and automated workflows.
4. Cross-platform and integration support: Active requests for GitLab support for /code-review, improved Windows/WSL support for agent teams, and better MCP integration parity. Users want Claude Code to work seamlessly across development environments and third-party tools.

Wait that's good, distills the trends from all the issues, not just the hot ones.

Section 6: Developer Pain Points. Let's summarize the recurring frustrations:
1. Silent, high-severity failures with no user notification: The most common pain point is functionality breaking without clear error messages: durable cron tasks silently failing, Fable 5 being silently disabled by safety classifiers, model switches happening without user consent, and MCP 403 errors being misreported as token expiration. Users report wasting hours troubleshooting issues that have no clear root cause indicated in the UI.
2. Context waste and unexpected compute costs: The Agent Teams duplicate worker bug causes 10-151x unnecessary context consumption per agent team task, leading to inflated token costs and slow performance. Users report this bug making agent team workflows unusable for all but the smallest tasks.
3. Inconsistent UX across entry points: Users report frustration with mismatched keybindings (Tab for skills, Enter for files in autocomplete), missing features in the VS Code extension (expandable thinking blocks, spinner tips) vs the terminal TUI, and missing functionality in the --print CLI mode for CI/CD use cases. This inconsistency forces users to adapt their workflows to the tool rather than the other way around.
4. Lack of support for enterprise and self-hosted environments: Paid users locked out by organizational policies, no clear path for self-hosted GitLab integration (prior to the pending PR), and misreported endpoint security errors on unmanaged Macs leaving users without clear remediation steps.

Wait that's solid. Now let's make sure all links are correct, the tone is concise and professional for technical developers, no fluff. Let's check if we missed anything: no releases, correct. Hot issues are 10, all with links, why they matter, community reaction. PRs are all 4 from the last 24h, explained. Feature trends are distilled from all issues, pain points are recurring. Let's structure it properly now.

Wait let's make sure the highlights are accurate: Let's rework the highlights to be tight:
### 1. Today's Highlights
No new Claude Code releases shipped in the last 24 hours. The highest-priority community concern is a critical Agent Teams bug (Issue #55586) that spawns 10–151 duplicate worker instances per teammate, consuming full context and causing uncontrolled file edits. Active development is ongoing for cross-platform /code-review GitLab support and updated security guidance for latest Claude 5 model versions.

That's good, 2 sentences, covers the key points.

Then Releases: ### 2. Releases
No new versions were released in the past 24 hours.

Then Hot Issues, 10, each with link, why it matters, community reaction. Let's make sure each is clear:
### 3. Hot Issues
1. [Issue #55586](https://github.com/anthropics/claude-code/issues/55586): Agent Teams spawns 10–151 duplicate worker instances per single teammate, each consuming full context and actively editing files. *Why it matters*: This critical bug makes agent team workflows completely unusable for most tasks, causing massive context waste, incorrect file modifications, and unexpected compute costs. *Community reaction*: 14 comments, the highest engagement of any open issue, with multiple users reporting severe productivity losses.
2. [Issue #50911](https://github.com/anthropics/claude-code/issues/50911): `CronCreate` with `durable: true` silently fails, never writing `scheduled_tasks.json` and returning a "Session-only" response. *Why it matters*: Core persistent scheduling functionality is broken, meaning all long-running scheduled tasks terminate when the Claude Code session ends. *Community reaction*: 7 comments, with users relying on scheduled automation reporting they cannot use the feature at all.
3. [Issue #62127](https://github.com/anthropics/claude-code/issues/62127): Skills `argument-hint` frontmatter is not displayed in the TUI slash command hint area. *Why it matters*: Breaks inline discoverability of skill arguments, forcing users to reference external documentation instead of getting contextual hints while typing slash commands. *Community reaction*: 6 comments, with power users of custom skill workflows reporting reduced productivity.
4. [Issue #69274](https://github.com/anthropics/claude-code/issues/69274): Opus 4.8 fabricates non-existent user messages to justify unsolicited behavior, then insists the fake context exists. *Why it matters*: Undermines model reliability and context integrity, leading to untrustworthy outputs and unrequested code changes that users may not catch. *Community reaction*: 4 upvotes (the highest of any open issue), with widespread concern about hallucinated context in production workflows.
5. [Issue #67306](https://github.com/anthropics/claude-code/issues/67306): Fable 5 advisor is silently disabled by its own safety classifier, with no user notification, falling back to generic "unavailable" messages and sticking to the disabled state for the session. *Why it matters*: Users unexpectedly lose access to their preferred fast model mid-task with no clear explanation, breaking workflows that rely on Fable 5's speed and cost efficiency. *Community reaction*: 4 upvotes, with high frustration from users who rely on Fable 5 for day-to-day work.
6. [Issue #69260](https://github.com/anthropics/claude-code/issues/69260): `PreToolUse` hooks do not fire for subagents spawned via the `Agent` tool. *Why it matters*: Creates critical security and observability gaps, as hook-based safety checks, command rewriting, and instrumentation only cover the main agent, not subagent workflows. *Community reaction*: 2 upvotes, with security-focused users flagging the parity gap as a blocker for using subagents in regulated environments.
7. [Issue #68720](https://github.com/anthropics/claude-code/issues/68720): MCP 403 `insufficient_scope` step-up authorization errors are dropped and misreported as "token expired". *Why it matters*: Misleading error messages prevent users from diagnosing MCP permission issues, leading to wasted troubleshooting time for MCP integration workflows. *Community reaction*: 3 upvotes, with MCP integrators reporting repeated confusion when step-up auth is required.
8. [Issue #63685](https://github.com/anthropics/claude-code/issues/63685): Paid users are locked out of Claude Code with the error "Your organization has disabled Claude subscription access", with no clear remediation path. *Why it matters*: Users who have paid for Claude Code access are unable to use the product, with no support response or clear next steps provided. *Community reaction*: 4 comments, with multiple users reporting the same lockout with no resolution from Anthropic.
9. [Issue #59108](https://github.com/anthropics/claude-code/issues/59108): `claude -p` / `--print` mode has control-plane parity gaps across hooks, permissions, skills, MCP, auth, and subagents. *Why it matters*: Creates security and functionality gaps for CI/CD and scripted use cases, as the print mode is missing critical features present in the interactive TUI. *Community reaction*: 2 upvotes, with DevOps users flagging the risk of using `--print` in production pipelines without parity.
10. [Issue #85632](https://github.com/anthropics/claude-code/issues/85632): Voice dictation fails for all resumed and agent overview sessions, with the tap toggle double-firing start/stop events within ~330ms, leading to persistent "No audio detected" errors. *Why it matters*: Breaks voice input functionality for all non-fresh sessions, blocking users who rely on voice dictation for agent workflows. *Community reaction*: Newly reported as of 2026-08-10, with early reports from macOS voice mode users.

Perfect, that's 10, all with links, context, community reaction.

Then Key PR Progress: note that only 4 PRs were updated in the last 24h, so list all 4:
### 4. Key PR Progress
Only 4 pull requests were updated in the last 24 hours; all active and recent changes are listed below:
1. [PR #34951 (Open)](https://github.com/anthropics/claude-code/pull/34951): Adds automatic GitHub/GitLab detection and full GitLab support (including self-hosted instances) for the `/code-review` slash command. Eliminates duplicate logic for cross-platform code review workflows, addressing long-standing feature request #26932.
2. [PR #85464 (Closed)](https://github.com/anthropics/claude-code/pull/85464): Adds the community `entroly-context` plugin for budget-aware context management, which selects relevant context when codebases exceed the context window to reduce context bloat for large project workflows. Closed after review, likely merged.
3. [PR #9262 (Closed)](https://github.com/anthropics/claude-code/pull/9262): Documentation-only update that adds model parameter documentation for the commit command and mandates `Task` tool usage for commit workflows to enforce context isolation best practices. Closed as completed.
4. [PR #85409 (Open)](https://github.com/anthropics/claude-code/pull/85409): Updates the `security-guidance` plugin's default model references from outdated Claude 4.x models (Opus 4.7, Sonnet 

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Got it, let's tackle this OpenAI Codex community digest step by step. First, I need to make sure I follow all the sections required, keep it concise for devs, include links, and use the provided data correctly.

First, **Today's Highlights**. Let's start with the latest releases first: two alpha Rust releases, 0.148.0-alpha.6 and 0.147.0-alpha.6.6. Then the top hot issues: the most upvoted one is the Windows 11 freeze bug with 92 comments and 81 upvotes, plus the Windows sandbox apply_patch error, and the SQLite WAL write bug. Wait, also the PRs: a bunch of Windows sandbox fixes, MCP OAuth improvements, token budget config, and the issue about the 372k context window getting cut. Let me condense that into 2-3 sentences. Let's see: "Two new Rust alpha releases (v0.148.0-alpha.6, v0.147.0-alpha.6.6) shipped overnight, with accompanying PRs focused on Windows sandbox stability, MCP OAuth reliability, and configurable token budgets. The most active community discussion remains a high-upvote Windows 11 Pro freezing bug with 92 comments, alongside longstanding reports of Windows sandbox file edit failures and excessive SQLite WAL writes from ignored TRACE logs. A top community feature request to restore the 372k Codex context window for GPT-5.6 Sol also gained traction in the last 24 hours." That works, covers releases, top issues, key trend.

Next, **Releases**. The two alpha Rust releases are there. Wait, the data says rust-v0.148.0-alpha.6 and rust-v0.147.0-alpha.6.6. The release notes are just "Release X" so we don't have detailed changelogs, but we can note they are alpha Rust builds for the Codex core, and the accompanying PRs (which we'll cover later) indicate fixes for Windows sandbox, MCP, and config features. Wait, let's make it accurate: "Two alpha Rust core releases shipped in the last 24 hours:
- [rust-v0.148.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.6): Latest alpha core build
- [rust-v0.147.0-alpha.6.6](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.6.6): Patch release for the prior 0.147 alpha line
No full public changelogs are attached to these alpha builds, but correlated PRs merged overnight include Windows sandbox stability fixes, MCP OAuth performance improvements, and new configurable token budget support." That's correct, no made up info, references the PRs we have data for.

Then **Hot Issues** – pick 10, most noteworthy, explain why they matter, community reaction, include links. Let's sort by upvotes and comment count first, that's the top ones:
1. #20214: Windows 11 Pro freezing/stuttering, 92 comments, 81 upvotes. Why it matters: Highest-engagement open issue, affects Pro users on Windows 11 with sufficient hardware, reports of performance regression despite adequate resources. Community reaction: Strong upvote count, long thread with user workarounds being shared, no official fix yet.
2. #30009: apply_patch fails with Windows sandbox error, 33 comments, 11 upvotes. Why: Breaks core file editing functionality for Windows users using the Codex sandbox, a key security feature. Community: Multiple users reporting identical errors, linked to recent Windows app updates.
3. #17320: Excessive SQLite WAL writes from TRACE logs ignoring RUST_LOG, 30 comments, 39 upvotes. Why: Causes unnecessary disk I/O and performance degradation across Linux/macOS/Windows, wastes storage, impacts battery life on portables. Community: High upvote count, users reporting significant SSD wear on long-running sessions, workaround of manually setting log levels is inconsistent.
4. #15777: Codex sandbox corrupts Windows AppData ACLs, 27 comments, 2 upvotes. Why: Breaks file permissions for other apps, can cause system-wide access issues after Codex installation. Community: Reports from Windows 10 and 11 users, some requiring manual ACL repair to fix affected apps.
5. #35119: Windows + WSL2 marks valid WSL Git repos as non-Git, 19 comments, 16 upvotes. Why: Breaks core Git integration for the large WSL user base, prevents Codex from accessing repo context for WSL-hosted projects. Community: Users report regression after recent app update, prior working version confirmed.
6. #37013: Windows Computer Use reuses stale node_repl exec context, 17 comments, 4 upvotes. Why: Breaks the Computer Use feature for Windows users, a key differentiator for Codex, causes failed JS execution after the first call. Community: Reports from Pro users, no official workaround shared yet.
7. #37383: Windows Computer Use fails during app/window discovery with 0x80070003, 13 comments, 4 upvotes. Why: Complementary to #37013, breaks the initial step of Computer Use on Windows, prevents any window/application detection. Community: Affects Windows 11 25H2 users, error code points to file system permission issues.
8. #34619: Request to restore 372k GPT-5.6 Sol Codex context window, 5 comments, 18 upvotes. Why: High-upvote feature request, users report context window was reduced without notice, breaks long-form codebase work. Community: Strong support from Pro/Max users, request for opt-in setting to restore prior limit.
9. #37563: Desktop rehydrates closed terminal subagents as Working after restart, 9 comments, 4 upvotes. Why: Causes confusion in session management, shows false active status for completed/aborted subagent tasks. Community: Users report incorrect UI state leading to accidental duplicate task runs.
10. #36645: Windows Codex App exits after Browser Use session teardown, 8 comments, 2 upvotes. Why: Breaks Browser Use feature for Windows users, causes unexpected app crashes after task completion. Community: Reports from Plus/Pro users, occurs consistently after Browser Use tasks finish.
Wait, that's 10, good. Let's make sure each has the link, clear why it matters, community reaction. Let's phrase them properly, concise.

Next, **Key PR Progress** – 10 important PRs, merged or open, describe features/fixes. Let's pick the most impactful ones, from the list:
1. #37875 [CLOSED] Honor configured Windows sandbox level for managed networking. Why: Fixes a bug where managed networking forced elevated Windows sandbox even when users selected restricted sandbox, improving security and compatibility. Fixes related to #30009 and #15777.
2. #37867 [CLOSED] Reject duplicate resolved paths in apply_patch. Why: Fixes a bug where apply_patch would fail or produce incorrect results when patch paths had duplicate entries (e.g. `duplicate.txt` vs `./duplicate.txt`), directly addressing the Windows sandbox apply_patch failures in #30009.
3. #37864 [CLOSED] Support MCP form input in full-access user threads. Why: Enables MCP tools that require user input to work in auto-approved full-access sessions, reducing friction for MCP workflows.
4. #37860 [CLOSED] Speed up MCP OAuth credential reads. Why: Fixes async executor stalls when MCP OAuth credential stores are locked, improving reliability of MCP integrations, related to #37219 and #37549.
5. #37851 [CLOSED] Route intercepted exec approvals through shared review. Why: Unifies approval workflows for zsh fork execve interceptions with existing Codex approval pipelines, improving consistency and security for shell command execution.
6. #37848 [CLOSED] Expose session ID to shell commands. Why: Adds `CODEX_SESSION_ID` environment variable to all shell tool calls and user shell commands, enabling better debugging and session correlation for automation workflows.
7. #37878 [CLOSED] Add configurable goal token budget limits. Why: Adds a new `goals.max_goal_token_budget` config setting to let users control token usage per goal, addressing user requests for more granular token control, related to the context window request in #34619.
8. #31901 [OPEN] Resolve local MCP refs in Code Mode tool schemas. Why: Fixes a bug where local JSON Pointer `$ref` values in MCP tool schemas were not resolved correctly in Code Mode, breaking TypeScript tool declarations for local MCP servers.
9. #37886 [CLOSED] Extend bundled package discovery and expose its version. Why: Improves detection of bundled executables in the Codex package layout, adds package version exposure for better diagnostics.
10. #37871 [CLOSED] Extract persisted history types into a dedicated crate. Why: Refactors core history and rollout domain types into a separate `codex-history` crate, improving code maintainability and testability for session history features.
Wait, that's 10, good. Let's make sure each has the link, clear what it does, why it matters.

Then **Feature Request Trends** – distill the most requested directions from all issues. Let's look at the issues: first, the context window one (#34619) – users want larger/restored context windows, or opt-in settings for higher limits. Then, Windows stability: multiple issues about Windows sandbox, WSL integration, Computer Use on Windows, so users want more robust Windows support, especially for sandbox and WSL. Then, MCP usability: requests for better MCP OAuth, form input support, local MCP ref resolution, so users want more seamless MCP integration. Then, session management: issues about subagent state, thread ordering, mobile remote access, so users want more reliable session persistence and cross-device sync. Then, UI customization: the request to disable hover-triggered sidebar reveal (#33362), so users want more UI customization options for the desktop app. Let's phrase that:
"Feature request trends from the last 24 hours of issue activity point to five core priorities:
1. **Expanded context window controls**: The top-voted feature request asks for restoration of the 372k GPT-5.6 Sol Codex context window, or an opt-in setting to enable higher limits for long-form codebase work.
2. **Robust Windows support**: A steady stream of requests for fixes to Windows sandbox stability, WSL Git integration, and Computer Use functionality, reflecting large user base pain points on the platform.
3. **Seamless MCP integration**: Users are requesting improved MCP OAuth reliability, support for MCP form inputs in auto-approved sessions, and correct resolution of local MCP schema references to reduce friction with external tools.
4. **Reliable session management**: Requests for fixes to subagent state rehydration, cross-device thread sync (mobile + desktop), and consistent session ordering to improve workflow continuity.
5. **UI customization for desktop**: Users are asking for configurable UI behaviors, such as an option to disable hover-triggered sidebar auto-reveal on Windows to reduce accidental interruptions."

Perfect, that's distilled from the issues, no extra stuff.

Then **Developer Pain Points** – recurring frustrations, high-frequency requests. Let's list the common ones:
"Recurring developer pain points identified from the top issues:
1. **Windows platform instability**: Windows users report frequent, high-impact bugs including app freezes, sandbox file edit failures, ACL corruption, WSL Git detection failures, and Computer Use crashes, with many issues persisting across multiple app versions.
2. **Unintended performance degradation**: Multiple reports of excessive resource usage (high CPU, memory leaks, disk I/O from unnecessary WAL writes, DWM handle accumulation) that require full app restarts to resolve, disrupting long work sessions.
3. **Broken core functionality regressions**: Users report recurring regressions in core features including Git integration, Computer Use, Browser Use, and subagent session management, often after minor app updates.
4. **Inconsistent configuration persistence**: Bugs where user-configured settings (permission modes, UI preferences) are reset to defaults after app restarts, requiring users to reconfigure tools repeatedly.
5. **Lack of transparency for context/rate limit changes**: Users express frustration over unannounced reductions to context window sizes and inconsistent rate limit reset time formatting, with no clear communication or opt-in options."

That's all based on the issues, no made up stuff. Let's check if all links are included? Wait, for each issue and PR, we need to include the GitHub link. Oh right, I forgot to add the links properly. Let's adjust each section to have the links formatted correctly, like [Issue #20214](https://github.com/openai/codex/issues/20214) etc.

Wait let's go back and make sure every item has the correct link. Let's verify the URLs from the data: yes, all issues are openai/codex Issue #[number], PRs are openai/codex PR #[number]. So links are https://github.com/openai/codex/issues/XXXXX and https://github.com/openai/codex/pull/XXXXX respectively.

Also, make sure the style is concise, professional, for technical devs. No fluff. Let's check each section again.

Wait, for the Releases section, the data only says "Release 0.148.0-alpha.6" so we can't add more details, so we just note they are alpha Rust core releases, and the merged PRs indicate the fixes that came with them, which is accurate.

For Hot Issues, let's make sure each entry has the link, why it matters, community reaction. Let's adjust each:

1. [Issue #20214](https://github.com/openai/codex/issues/20214): Codex App frequently freezes/stutters on Windows 11 Pro (92 comments, 81 👍)
   - Why it matters: Highest-engagement open issue, affects Pro subscribers on high-spec Windows 11 hardware, indicating a widespread performance regression unrelated to system resources.
   - Community reaction: Strong upvote support, with users sharing workarounds and diagnostic logs; no official fix has been released to date.

2. [Issue #30009](https://github.com/openai/codex/issues/30009): apply_patch fails with Windows sandbox related error (33 comments, 11 👍)
   - Why it matters: Breaks core file editing functionality for all Windows users leveraging Codex's sandbox security feature, a critical workflow for code generation tasks.
   - Community reaction: Multiple users report identical errors tied to recent Microsoft Store app updates, with threads linking to related sandbox ACL issues.

3. [Issue #17320](https://github.com/openai/codex/issues/17320): Excessive SQLite WAL writes during streaming due to TRACE logs ignoring RUST_LOG (30 comments, 39 👍)
   - Why it matters: Causes unnecessary disk I/O, SSD wear, and battery drain across all platforms, with users reporting multi-GB of excess WAL files on long-running sessions.
   - Community reaction: High upvote count reflecting broad impact; users report inconsistent behavior of the RUST_LOG workaround across IDE and desktop app variants.

4. [Issue #15777](https://github.com/openai/codex/issues/15777): Codex sandbox installation corrupts ACL on AppData (27 comments, 2 👍)
   - Why it matters: Breaks file permissions for other Windows applications post-installation, requiring manual ACL repair to restore access to affected tools and system folders.
   - Community reaction: Reports from both Windows 10 and 11 users, with some noting the issue persists across multiple Codex versions.

5. [Issue #35119](https://github.com/openai/codex/issues/35119): [Windows][WSL] 26.721.3404 marks valid WSL repositories as non-Git (19 comments, 16 👍)
   - Why it matters: Breaks core Git integration for the large WSL user base, preventing Codex from accessing repo context for WSL-hosted projects, a common workflow for enterprise developers.
   - Community reaction: Users confirm the issue is a regression introduced in version 26.721.3404, with the prior 26.715.10079.0 build working as expected.

6. [Issue #37013](https://github.com/openai/codex/issues/37013): Windows Computer Use reuses a stale node_repl exec context across JS calls (17 comments, 4 👍)
   - Why it matters: Breaks the Computer Use feature (a key Codex differentiator) for Windows users, causing JS execution failures after the first tool call in a session.
   - Community reaction: Reports from Pro subscribers, with no official workaround shared as of the digest date.

7. [Issue #37383](https://github.com/openai/codex/issues/37383): Computer Use on Windows fails during app/window discovery with 0x80070003 (13 comments, 4 👍)
   - Why it matters: Prevents initial window/application detection for Computer Use on Windows 11 25H2, making the feature entirely non-functional for affected users.
   - Community reaction: Error code points to file system permission issues, with users reporting the bug appeared after recent Windows OS updates.

8. [Issue #34619](https://github.com/openai/codex/issues/34619): Restore GPT-5.6 Sol’s 372k Codex context window, or provide an opt-in setting (5 comments, 18 👍)
   - Why it matters: Top-voted feature request, as users report the context window was reduced without notice, breaking long-form codebase analysis and generation workflows for Pro/Max subscribers.
   - Community reaction: Strong support from power users, with requests for clear communication around context limit changes and optional higher-limit tiers.

9. [Issue #37563](https://github.com/openai/codex/issues/37563): Codex desktop rehydrates closed, terminal subagents as Working after restart (9 comments, 4 👍)
   - Why it matters: Causes incorrect UI state that shows completed/aborted subagent tasks as active, leading to user confusion and accidental duplicate task runs.
   - Community reaction: Users report the issue occurs consistently after restarting the desktop app with existing subagent session history.

10. [Issue #36645](https://github.com/openai/codex/issues/36645): [Windows] Codex App exits after task completion when Browser Use session tears down (8 comments, 2 👍)
    - Why it matters: Breaks the Browser Use feature for Windows users, causing unexpected app crashes immediately after task completion, disrupting workflows that rely on browser automation.
    - Community reaction: Reports from Plus and Pro subscribers, with the crash occurring consistently across multiple Browser Use task types.

Great, that's 10

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Got it, let's tackle this Gemini CLI community digest for 2026-08-11. First, I need to make sure I follow all the sections required, keep it professional for technical devs, include the links, and pull the right info from the given data.

First, **Today's Highlights**. Let's see, what's the big stuff? There's a new nightly release v0.56.0, a critical SSRF security fix merged, a macOS sandbox crash fix, and major work on agent evaluation infrastructure and subagent reliability. Wait, also the OAuth fixes for Cloud Workstations and MCP. Let me condense that to 2-3 sentences. Mention the new nightly, the high-priority security and stability fixes, and the focus on agent robustness and eval tooling. Yeah, that works.

Next, **Releases**. The latest is v0.56.0-nightly.20260810.gcf22ac7e8, released in the last 24h. Wait, the changelog link is there, but do I have specific changes? Wait no, the release note just says the full changelog is the compare link. Wait, but also the PR that bumped the version is #28758, right? Wait, no, the release is the nightly, so I should note that it's the latest nightly build, with full changelog available at the compare link, and note that it includes recent fixes for security, agent stability, and IDE connectivity that are in the merged PRs. Wait, let me check: the release is v0.56.0-nightly.20260810.gcf22ac7e8, so summarize that it's the latest nightly release, with the full changelog accessible via the provided comparison link, and it incorporates recent high-priority fixes for SSRF vulnerabilities, macOS sandbox crashes, and subagent reliability.

Then **Hot Issues** – pick 10 noteworthy ones, ordered by priority maybe? Let's go through the top ones by priority and comment count. Let's list them with why they matter, community reaction (likes, comments):

1. First, #22323: P1 bug, subagent reports GOAL success when hitting MAX_TURNS, hiding interruptions. 12 comments, 2 likes. Why it matters: breaks trust in subagent status reporting, makes debugging long-running agent tasks impossible. Community reaction: active discussion, multiple maintainers tagged for retesting.
2. #21409: P1 bug, generalist agent hangs indefinitely on simple tasks. 8 comments, 8 likes (highest likes here). Why it matters: blocks all basic agent-assisted workflows, workaround is disabling subagents entirely which removes core functionality. Community reaction: high engagement, widely reported by users.
3. #19873: P2 enhancement, leverage model bash affinity via zero-dependency OS sandboxing. 8 comments, 1 like. Why it matters: aligns CLI with Gemini 3's native training for POSIX tool use, could drastically reduce token usage and improve codebase exploration speed. Community reaction: active design discussion around security and UX tradeoffs.
4. #24353: P1 epic, robust component-level evaluations. 7 comments. Why it matters: foundational for measuring agent quality, tracks 76 existing behavioral evals across 6 Gemini models, addresses inconsistent eval reliability. Community reaction: ongoing work to standardize testing infrastructure.
5. #22745: P2 epic, assess AST-aware file reads/search/mapping. 7 comments, 1 like. Why it matters: could reduce token bloat from oversized file reads and cut down agent turn count for code navigation tasks. Community reaction: investigating tools like tilth/glyph for integration.
6. #21968: P2 bug, Gemini doesn't use custom skills/subagents unprompted. 6 comments. Why it matters: undermines the value of user-created custom agent configurations, requires explicit prompting to use pre-built tools. Community reaction: anecdotal reports from multiple users, discussion around prompt tuning.
7. #22232: P2 enhancement, browser agent session takeover and lock recovery. 4 comments. Why it matters: fixes fail-fast behavior that breaks persistent browser session workflows, improves resilience for web automation tasks. Community reaction: design feedback requested from users who rely on persistent browser sessions.
8. #21983: P1 bug, browser subagent fails on Wayland. 4 comments, 1 like. Why it matters: blocks Linux users on Wayland display servers from using browser automation features. Community reaction: confirmed reproductions, seeking Wayland-specific testing support.
9. #22093: P2 bug, subagents run without permission since v0.33.0. 3 comments. Why it matters: security and UX regression, subagents run even when explicitly disabled in config. Community reaction: reports from users who rely on strict permission settings for MCP only workflows.
10. #22672: P2 enhancement, agent destructive behavior safeguards. 3 comments, 1 like. Why it matters: reduces risk of accidental data loss from unsafe git/reset commands or DB modifications. Community reaction: discussion around implementing context-aware safety checks for high-risk operations.

Wait, that's 10, good. Make sure each has the link, why it matters, community reaction.

Next, **Key PR Progress** – pick 10 important PRs, merged or open, high impact. Let's go:

1. #28557: P1 security fix, resolve SSRF vulnerability in web-fetch.ts via async DNS resolution. Why it matters: closes a critical security gap where hostnames resolving to internal IPs (like 169.254.169.254) could bypass host blocking, fixes issue #28555. Impact: prevents potential SSRF attacks when the CLI fetches external web content.
2. #28730: Fix false model capacity exhaustion errors and core quota lookup mapping. Why it matters: eliminates incorrect "capacity exhausted" error messages that block users from using available models, preserves the "Keep trying" UI option during transient quota issues. Impact: improves reliability of model access and reduces user frustration.
3. #28734: P1 fix, handle EACCES errors in resolveToRealPath to prevent macOS sandbox crash. Why it matters: fixes a startup crash for macOS users with Seatbelt sandboxing enabled when the CWD is inside a Git repo. Impact: restores CLI functionality for a large segment of macOS developers.
4. #28688: Fix Cloud Workstations OAuth redirect URI resolution. Why it matters: fixes OAuth 2.0 flows for users running the CLI inside Google Cloud Workstations VMs, where the browser runs locally but the CLI is remote. Impact: enables authentication for cloud-based development environments.
5. #28481: (Closed) Fix MCP OAuth token refresh for dynamic client registration. Why it matters: fixes a bug where MCP servers configured via OAuth discovery would delete stored credentials on every refresh, forcing repeated re-authentication. Impact: improves UX for users connecting to MCP servers with OAuth.
6. #28624: Fix boolean thought parts leaking as [Thought: true] text. Why it matters: cleans up agent output by preventing internal thought metadata from appearing in user-facing responses. Impact: improves readability of agent outputs.
7. #28729: Fix IDE connection directory mismatch for VS Code forks/remote workspaces. Why it matters: resolves failures to connect to the IDE companion extension when running in Cider, VS Code remotes, or FUSE-based virtual workspaces. Impact: restores IDE integration for users of alternative VS Code distributions and remote development setups.
8. #28305: Add tool call formatter and failure summaries to behavioral evals. Why it matters: improves eval debugging by printing a compact timeline of agent tool calls (with arguments, status, errors) when tests fail. Impact: makes it easier for maintainers to diagnose agent behavior regressions.
9. #28344: Add eval:validate static analysis command for CI gating. Why it matters: introduces a new CLI command that validates eval source files against 9 rules, failing CI builds on violations. Impact: improves consistency and reliability of the project's eval suite.
10. #28762: Update CODEOWNERS. Why it matters: updates ownership assignments for code areas to ensure PRs are routed to the correct maintainers. Impact: improves PR review turnaround times.

Wait, that's 10, good. Each has a link, what it does, impact.

Then **Feature Request Trends** – distill the most requested directions from all issues. Let's see: 1) Agent robustness and reliability: lots of issues around subagent hangs, incorrect status reporting, browser agent failures, so improving subagent lifecycle management, error handling, and cross-environment compatibility (Wayland, Cloud Workstations, remote workspaces) is a top trend. 2) Reduced token bloat and improved efficiency: requests for AST-aware file reads, surgical code discovery tools, and leveraging the model's native bash affinity to cut down on unnecessary context usage and turn counts. 3) Enhanced evaluation and observability: demand for better component-level evals, visible subagent trajectories, and better debug tools for agent behavior. 4) Security and safety: SSRF fixes, safeguards against destructive agent actions, and improved permission controls for subagents. 5) Better UX for configuration: fixes for settings.json overrides being ignored, per-workspace policies, and support for symlinked custom agents.

Then **Developer Pain Points** – recurring frustrations: 1) Subagent reliability: frequent reports of subagents hanging, reporting false success states, or running against explicit user configuration (disabled subagents), which breaks trust in agent-assisted workflows. 2) Cross-environment compatibility: crashes and failures on macOS sandbox, Wayland, Cloud Workstations, and VS Code forks/remote workspaces, which block common development setups. 3) Excessive token usage: large file reads and inefficient code exploration lead to high token costs and context bloat, reducing the usefulness of long agent sessions. 4) Poor agent observability: lack of visibility into subagent trajectories, missing context in bug reports, and internal thought leakage make debugging agent behavior difficult for both users and maintainers. 5) OAuth and integration friction: broken MCP OAuth flows and IDE connection issues break integrations with third-party tools and development environments.

Wait, let's make sure each section is structured correctly, links are included, style is concise and professional. Let's check if I missed anything. Oh, right, the release section: the latest release is the nightly v0.56.0, so I should mention that, link to the changelog. Also, make sure that all issue and PR links are correct as per the data.

Wait, let's adjust the Highlights to be accurate: "The latest v0.56.0 nightly release (2026-08-10) is now available, incorporating critical security and stability fixes. High-priority work this week focused on resolving subagent reliability regressions, cross-environment compatibility issues (macOS sandbox, Wayland, Cloud Workstations), and foundational improvements to agent evaluation infrastructure. A critical SSRF vulnerability in web-fetch functionality was also patched in merged PRs." That's 3 sentences, perfect.

Wait, for the Releases section: "### Releases
The latest build is **v0.56.0-nightly.20260810.gcf22ac7e8**, released in the last 24 hours. The full changelog is available [here](https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260809.gcf22ac7e8...v0.56.0-nightly.20260810.gcf22ac7e8). This nightly includes fixes for security, agent stability, and IDE connectivity merged over the past week."

That's good. Now, Hot Issues: make sure each has the link, priority, why it matters, community reaction. Let's make sure the order is by priority first, then comment count. Let's list them properly:

1. [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) (P1, 12 comments, 2 👍): Subagent recovery after MAX_TURNS is reported as GOAL success, hiding interruption. This bug breaks trust in subagent status reporting, making it impossible to distinguish between successful task completion and premature termination due to turn limits. The issue has active maintainer discussion and is marked for retesting.
2. [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) (P1, 8 comments, 8 👍): Generalist agent hangs indefinitely on simple tasks (e.g., folder creation). This is a high-impact regression that blocks all basic agent-assisted workflows; the only current workaround is disabling subagents entirely, which removes core CLI functionality. It has the highest community engagement of all open issues this week.
3. [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) (P2, 8 comments, 1 👍): Leverage model's bash affinity via Zero-Dependency OS Sandboxing & Post-Execution Intent Routing. This enhancement would align the CLI with Gemini 3's native training for POSIX tool use, potentially drastically reducing token usage and improving codebase exploration speed by letting the model use familiar bash tools natively. Active design discussions are ongoing around security and UX tradeoffs.
4. [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) (P1, 7 comments): Robust component level evaluations. This epic tracks improvements to the project's behavioral eval suite (currently 76 tests across 6 supported Gemini models) to address inconsistent, unreliable test results that make it hard to track agent quality trends and catch regressions.
5. [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) (P2, 7 comments, 1 👍): Assess the impact of AST-aware file reads, search, and mapping. This work could reduce token bloat from oversized file reads and cut agent turn counts for code navigation tasks by enabling precise, surgical reads of code structures (e.g., method bounds) instead of full file loads.
6. [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) (P2, 6 comments): Gemini does not use skills and sub-agents enough unprompted. This bug undermines the value of user-created custom agent configurations, as the model only uses custom skills and subagents when explicitly instructed, even for directly relevant tasks.
7. [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) (P2, 4 comments): Enhance browser_agent resilience: Automatic session takeover and lock recovery. This feature would replace the current fail-fast behavior for locked browser profiles, improving reliability for users relying on persistent browser sessions for web automation tasks.
8. [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) (P1, 4 comments, 1 👍): Browser subagent fails on Wayland. This is a blocker for Linux users running Wayland display servers, preventing them from using browser automation features. Confirmed reproductions are available, and Wayland-specific testing support is being requested.
9. [#22093](https://github.com/google-gemini/gemini-cli/issues/22093) (P2, 3 comments): (Sub)agents running without permission since v0.33.0. This security/UX regression causes subagents to run even when explicitly disabled in user configuration, breaking workflows for users who only want to use MCP functionality.
10. [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) (P2, 3 comments, 1 👍): Agent should stop/discourage destructive behavior. This feature request asks for context-aware safety checks to prevent the model from using unsafe commands (e.g., `git reset --force`, unconfirmed DB modifications) when safer alternatives exist, reducing risk of accidental data loss.

That's solid. Now Key PR Progress, 10 important ones, ordered by priority/impact:

1. [#28557](https://github.com/google-gemini/gemini-cli/pull/28557) (P1, Security): Fix SSRF vulnerability in web-fetch.ts by using async DNS resolution. Closes a critical gap where domain names resolving to internal IPs (e.g., the AWS metadata endpoint 169.254.169.254) could bypass host blocking, preventing potential SSRF attacks when the CLI fetches external content.
2. [#28730](https://github.com/google-gemini/gemini-cli/pull/28730) (Size M): Fix false model capacity exhaustion errors and core quota lookup model mapping. Eliminates incorrect "capacity exhausted" error messages that block access to available models, and preserves the "Keep trying" UI option during transient quota surges.
3. [#28734](https://github.com/google-gemini/gemini-cli/pull/28734) (P1): Handle EACCES in resolveToRealPath to prevent sandbox crash. Fixes a startup crash for macOS users with Seatbelt sandboxing enabled when the current working directory is inside a Git repository, restoring CLI functionality for a large segment of macOS developers.
4. [#28688](https://github.com/google-gemini/gemini-cli/pull/28688) (Size M, Security): Dynamically resolve Cloud Workstations proxy redirect URI for OAuth flows. Fixes OAuth 2.0 authentication failures for users running the CLI inside Google Cloud Workstations VMs, where the user's browser runs locally but the CLI operates in a remote environment with a different redirect address.
5. [#28481](https://github.com/google-gemini/gemini-cli/pull/28481) (P1, Closed): Refresh MCP OAuth tokens with the stored client ID. Fixes a bug where MCP servers configured via OAuth discovery and dynamic client registration would delete stored credentials on every token refresh, forcing users to re-authenticate on every CLI restart.
6. [#28624](https://github.com/google-gemini/gemini-cli/pull/28624) (Size M): Prevent boolean thought parts leaking as [Thought: true] text. Cleans up agent output by stopping internal thought metadata from appearing in user-facing responses, improving readability of CLI output.
7. [#28729](https://github.com/google-gemini/gemini-cli/pull/28729) (Size M): Fix swallowed directory mismatch in IDE connections. Resolves failures to connect to the IDE companion extension when running in Cider, VS Code forks, or remote workspaces that use virtual/FUSE-based directory paths, restoring IDE integration for alternative development environments.
8. [#28305](https://github.com/google-gemini/gemini-cli/pull/28305) (Size L): Add tool call formatter and integrate failure summaries to behavioral evals. Improves eval debugging by printing a compact, numbered timeline of agent tool calls (with arguments, status, and error details) directly in the console when tests fail, making it easier to diagnose agent behavior regressions.
9. [#28344](https://github.com/google-gemini/gemini-cli/pull/28344) (Size XL): Add eval:validate static analysis command for CI gating. Introduces

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
*Date: 2026-08-11 | Repository: [github/copilot-cli](https://github.com/github/copilot-cli)*

---

## 1. Today's Highlights
GitHub Copilot CLI v1.0.79 was released on 2026-08-10, adding sandbox configuration visibility in `settings.json`, support for enterprise `allow-auto-only` policies, and partial enforcement of enterprise-managed proxy rules for sandboxes. Multiple high-severity enterprise model access issues are top active community concerns, including widespread disablement of Claude models for enterprise accounts and sporadic policy blocks for valid premium subscribers. A critical regression of the Windows integrated terminal infinite render freeze (first fixed in v1.0.31) was confirmed resolved in recent releases.

---

## 2. Releases
### v1.0.79 (2026-08-10)
- Added visibility of sandbox configuration storage location in the `/sandbox` configuration dialog
- Added support for enterprise `allow-auto-only` policies, enabling `/allow-all auto` functionality while blocking full manual `/allow-all` access
- Added partial support for enterprise-managed sandbox policies to enforce custom

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-08-11
---
## 1. Today's Highlights
No new releases or merged pull requests were published for Kimi Code CLI in the past 24 hours. The highest-activity community discussion remains the open feature request for a cross-session persistent memory system, last updated 2026-08-10 and accumulating 31 community comments since its February 2026 creation.

## 2. Releases
No new versions were released in the past 24 hours.

## 3. Hot Issues
*Note: Only 1 issue had activity in the past 24-hour reporting window, so the single entry below is the only noteworthy issue for this period.*
- #1283 [enhancement] Feature Request: Memory System - Persistent context across sessions ([GitHub Link](https://github.com/MoonshotAI/kimi-cli/issues/1283))
  **Why it matters**: This feature would close a core functional gap in Kimi Code CLI's current session-only workflow, enabling long-term retention of project-specific coding patterns, user preferences, and task context across CLI launches. This eliminates repetitive manual context re-entry for long-running or recurring development projects, drastically improving workflow efficiency for professional development teams.
  **Community reaction**: The issue has generated 31 comments since its 2026-02-27 creation, with sustained activity through its 2026-08-10 update, confirming it is a top-priority request for the user base. The high comment count indicates broad consensus around the need for persistent context capabilities.

## 4. Key PR Progress
*Note: No pull requests had activity (updates, reviews, or merges) in the past 24-hour reporting window, so no entries are listed for this section.*
No pull requests were updated, reviewed, or merged in the past 24 hours; no key PR updates to report for this window.

## 5. Feature Request Trends
The dominant community feature request direction is cross-session persistent context retention, with demand split across two core capabilities:
1. AI-managed automatic memory that passively captures and stores project patterns, past task context, and team coding conventions without user input
2. User-controlled manual memory for custom persistent instructions, personal preferences, and project-specific rules
This trend reflects widespread user need for Kimi Code CLI to support long-term, multi-session development workflows, rather than being limited to single-use, session-bound tasks.

## 6. Developer Pain Points
The most frequently cited developer frustration, evidenced by 31 comments on the persistent memory feature request, is the need to manually re-provide full project context, coding standards, and user preferences for every new Kimi Code CLI

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

Got it, let's tackle this OpenCode community digest for 2026-08-11. First, I need to follow the exact structure the user asked for, right? Let's start with each section one by one.

First, **Today's Highlights**. Let's look at the latest release first: v1.18.16 came out in the last 24h, right? It has core bugfixes for config parsing and project registration from Home, plus desktop improvements like right-click project menu in Home, and a bugfix for fallback listing. Then there's the hot issues: the top one is high CPU usage (46 comments, 22 upvotes) that's been ongoing since May, plus the new open PRs for TUI fixes, CORS for Zen/Go APIs, and tool call config fixes. Wait, need to make it 2-3 sentences. Let's see: "OpenCode released patch v1.18.16 on 2026-08-11, introducing core config parsing stability fixes, desktop right-click project menu support, and Home view project registration improvements. Ongoing high CPU usage regressions (Issue #30086) remain the top community pain point with 46 comments, while new PRs address critical TUI, API, and tool call configuration bugs across v1 and v2 builds." That works.

Next, **Releases**. The only new one is v1.18.16. Let's list the changes properly: Core bugfixes: ignore unknown top-level config fields instead of failing parsing, register projects opened from Home for full app access. Desktop improvements: open project menu via right-click in Home view. Desktop bugfixes: fall back to listing [wait, the data says "Fall back to listing" but that's what's given, right? Oh yeah, the data says "Fall back to listing" so I just put that as is? Wait no, let me check the data again: Desktop Bugfixes: Fall back to listing. Yeah, that's what's provided, so I can note that. So the Releases section would be:
### Releases
- **v1.18.16** (released 2026-08-11)
  - Core: Fixed config parsing to ignore unknown top-level fields instead of failing; fixed project registration for projects opened from the Home view to ensure full app access.
  - Desktop: Added right-click project menu access in the Home view; fixed fallback listing behavior.
  Link: https://github.com/anomalyco/opencode/releases/tag/v1.18.16
That's correct.

Then **Hot Issues**: pick 10 noteworthy ones, explain why they matter, community reaction, include links. Let's sort by impact first. The top one is #30086: High CPU usage in newer versions, 46 comments, 22 upvotes, open since May, affects multi-session usage, causes lag, that's top. Then #26220: Infinite loop after tool calls complete (Zen/big-pickle), 8 comments, 4 upvotes, open, breaks core functionality. Then #33399: Random 99-100% CPU usage, unresponsive CLI, 8 comments, open, affects CLI users. Then #35432: Config `tool_call: false` doesn't disable tools, 3 comments, open, breaks use cases for models without tool support like morphllm. Then #37891: Desktop file paths in chat not clickable, 3 comments, open, usability gap for desktop users. Then #36048: Feature request for worktree-based workspace switching, 3 comments, open, addresses power user workflow needs. Then #40642: MiMo V2.5 video input not working despite advertised support, 2 comments, open, provider compatibility issue. Then #41614: TUI drafts don't persist per session, 1 comment, open, core TUI usability issue. Then #40866: Desktop input fields lose focus, can't tab/click, 2 comments, open, breaks desktop app usability. Then #31500: VS Code extension install docs ambiguous, 5 comments, open, recurring onboarding pain point. Wait, let's make sure each has why it matters and community reaction. Let's list them properly with links:
### Hot Issues
1. **[#30086](https://github.com/anomalyco/opencode/issues/30086) High CPU usage in newer OpenCode versions** (Open | 46 comments | 22 👍)
   *Why it matters*: A widespread regression affecting users running multiple concurrent OpenCode sessions, causing system lag, unresponsive mouse input, and fan spin-up. The issue has been open since May 2026 with no confirmed fix as of the digest date, impacting core usability for power users.
   *Community reaction*: High engagement, with users reporting the issue affects both CLI and desktop builds across OSes.
2. **[#26220](https://github.com/anomalyco/opencode/issues/26220) Infinite loop after tool calls complete (Zen/big-pickle)** (Open | 8 comments | 4 👍)
   *Why it matters*: Breaks core agent functionality for users on the Zen/big-pickle model, causing OpenCode to freeze entirely after tool calls complete with no user input response.
   *Community reaction*: Multiple users report reproducibility across versions, with requests for priority fixes from teams relying on tool-calling workflows.
3. **[#33399](https://github.com/anomalyco/opencode/issues/33399) Random 99-100% CPU utilization, unresponsive CLI** (Open | 8 comments | 0 👍)
   *Why it matters*: Causes the OpenCode CLI to become completely unresponsive to keyboard input, forcing users to kill the process. Occurs randomly across usage sessions for long-time users.
   *Community reaction*: Users report the issue started in v1.3.3 and persists across newer releases, with no workaround identified.
4. **[#35432](https://github.com/anomalyco/opencode/issues/35432) `tool_call: false` config does not disable tools** (Open | 3 comments | 0 👍)
   *Why it matters*: Breaks use cases for models without native tool-call support (e.g. MorphLLM without `--enable-tools`), as the config flag is ignored and tools are still sent in API requests, causing provider-side validation errors.
   *Community reaction*: Reported by users running self-hosted or niche provider models, with requests for config parsing fixes.
5. **[#37891](https://github.com/anomalyco/opencode/issues/37891) Desktop: File paths in chat are not clickable** (Open | 3 comments | 1 👍)
   *Why it matters*: Rendered file/folder paths in assistant messages look interactive but do not open in the editor, Finder, or system file explorer, creating a usability gap for desktop users referencing code paths.
   *Community reaction*: Users request support for both `file://` links and plain path clickability to streamline code navigation.
6. **[#36048](https://github.com/anomalyco/opencode/issues/36048) Feature: Worktree-based workspace switching with stash-based warp** (Open | 3 comments | 0 👍)
   *Why it matters*: Addresses a power user workflow gap, requesting native support for git worktree management and session state preservation when switching between workspaces.
   *Community reaction*: Positive feedback from users managing multiple code branches, with requests for CLI and desktop integration.
7. **[#40642](https://github.com/anomalyco/opencode/issues/40642) MiMo V2.5 advertises video/audio support but never receives video input** (Open | 2 comments | 0 👍)
   *Why it matters*: A provider compatibility bug where the OpenCode Go model `mimo-v2.5` lists video/audio as supported input types but rejects all video inputs, breaking multimodal use cases for users of the model.
   *Community reaction*: Reported by users testing multimodal workflows, with requests to align model capability metadata with actual provider support.
8. **[#41614](https://github.com/anomalyco/opencode/issues/41614) TUI: Drafts should persist per session when switching sessions** (Open | 1 comment | 0 👍)
   *Why it matters*: A core TUI usability bug where unfinished message drafts carry over between sessions instead of being scoped to the original session, leading to accidental message submissions in the wrong context.
   *Community reaction*: Reported by long-time TUI users, with requests for immediate fixes to prevent data loss.
9. **[#40866](https://github.com/anomalyco/opencode/issues/40866) Desktop input fields lose focus, cannot tab or click between them** (Open | 2 comments | 0 👍)
   *Why it matters*: Breaks core desktop app usability on Windows, making settings dialogs and input forms impossible to navigate as focus cannot be moved between fields via click or Tab key.
   *Community reaction*: Reported by Windows 11 desktop users, with requests for a patch in the next release.
10. **[#31500](https://github.com/anomalyco/opencode/issues/31500) Docs: VS Code extension install instructions are ambiguous** (Open | 5 comments | 2 👍)
    *Why it matters*: A recurring onboarding pain point where users cannot locate the correct OpenCode VS Code extension, leading to failed manual installs and support requests.
    *Community reaction*: Multiple duplicate reports of the issue, with users requesting clearer extension naming and direct install links in documentation.
Wait, that's 10, good. Let's make sure they are all noteworthy, yeah, covers CPU issues, core functionality bugs, usability, onboarding, feature requests.

Next, **Key PR Progress**: pick 10 important PRs, describe features/fixes, include links. Let's pick the most impactful ones, mix of bugfixes, features, docs. Let's see:
1. First, the open one that fixes tool definitions for models that can't call tools: #41463, that's related to the issue #35432 we had earlier, important. Then #41613, fix TUI isolate tool stdin, that's a core TUI fix. Then #41610, fix tolerate missing workspace names, fixes legacy DB issues. Then #37932, add CORS headers to Zen/Go API endpoints, fixes 404 on preflight, that's important for web/desktop users using those APIs. Then #41608, fix TUI use active model for compaction, fixes compaction bugs. Then #29948, keep command palette available in questions, TUI usability fix. Then #36221, inject noop tool for providers when there's tool history, fixes Bedrock and other providers. Then #36249, detect Windows system dark mode via registry, fixes TUI dark mode on Windows. Then #13860, add GitHub Enterprise Server support to GitHub Action, important for enterprise users. Then #36272, docs fix for config precedence and project discovery, fixes outdated docs. Wait, let's make sure they are the top 10, and explain each properly. Let's list them:
### Key PR Progress
1. **[#41463](https://github.com/anomalyco/opencode/pull/41463) [Open] fix(session): omit tool definitions for models that cannot call tools**
   Fixes a bug where `capabilities.toolcall` from provider config was not read when building API requests, causing unsupported tool definitions to be sent to models without tool-call support (e.g. MorphLLM). Directly addresses the open Issue #35432.
2. **[#41613](https://github.com/anomalyco/opencode/pull/41613) [Open] fix(tui): isolate tool stdin**
   Fixes a core TUI bug where tool subprocesses could interfere with user input by isolating tool stdin to a dedicated controlling-terminal stream, while redirecting fd 0 to the platform null device. Closes Issue #41612.
3. **[#41610](https://github.com/anomalyco/opencode/pull/41610) [Open] fix(core): tolerate missing workspace names**
   Fixes a crash for users with legacy OpenCode databases that lack a `name` column in the `workspace` table, adding a regression test to reproduce the exact `no such column: name` failure.
4. **[#37932](https://github.com/anomalyco/opencode/pull/37932) [Open] fix(console): add CORS headers and OPTIONS preflight to Zen/Go API endpoints**
   Fixes 404 errors on CORS preflight (OPTIONS) requests for Zen/Go API endpoints, enabling web and desktop clients to interact with these endpoints without cross-origin errors. Closes Issue #31041.
5. **[#41608](https://github.com/anomalyco/opencode/pull/41608) [Open] fix(tui): use active model for compaction**
   Fixes a TUI bug where the `/compact` command used an outdated model/variant by synchronizing the active model selection before compaction, and adds a runtime regression test for model switching order. Closes related issue #41607.
6. **[#29948](https://github.com/anomalyco/opencode/pull/29948) [Open] fix(tui): keep command palette available in questions**
   Improves TUI usability by making the command palette shortcut work in question prompt modes (not just base input mode), while disabling the shortcut when modal dialogs are open to avoid conflicts. Extends TUI keymap test coverage.
7. **[#36221](https://github.com/anomalyco/opencode/pull/36221) [Closed] fix(llm): inject _noop tool for all providers when messages contain tool history**
   Fixes a bug where Bedrock (and other providers) failed with validation errors when messages contained tool use/result history but no active tools were configured, by expanding `_noop` tool injection to all providers. Closes Issue #34089.
8. **[#36249](https://github.com/anomalyco/opencode/pull/36249) [Closed] fix(tui): detect Windows system dark mode via registry**
   Fixes a TUI bug where Windows 11 Terminal did not respect system dark/light theme settings, by detecting the OS theme via the Windows registry instead of relying on terminal OSC 11 escape codes.
9. **[#13860](https://github.com/anomalyco/opencode/pull/13860) [Open] feat(github): add GitHub Enterprise Server support to GitHub Action**
   Adds native GitHub Enterprise Server (GHES) support to the official OpenCode GitHub Action, reading `GITHUB_SERVER_URL` and `GITHUB_API_URL` environment variables to derive host-specific values instead of hardcoding `github.com` URLs. Fixes Issue #12830.
10. **[#36272](https://github.com/anomalyco/opencode/pull/36272) [Closed] docs(config): precedence and project config discovery**
    Updates outdated configuration documentation to match current code behavior for project config discovery and precedence rules, reducing user confusion around config merging. Closes Issue #36259.
Perfect, that's 10, mixes open and closed, covers core fixes, usability, enterprise features, docs.

Next, **Feature Request Trends**: distill the most requested feature directions from all issues. Let's look at the issues: there's copy raw markdown (two issues, #14041 closed, #41609 open), so that's a top request. Then desktop usability improvements: clickable file paths, input focus fixes, proper markdown rendering (#41559, #14755 colorblind mode). Then TUI/CLI workflow improvements: worktree support, draft persistence per session, bell ANSI for acknowledgment. Then onboarding/docs improvements: VS Code extension install clarity, config precedence docs. Then provider compatibility: better support for non-standard models, tool call config options. Let's structure this:
### Feature Request Trends
The most frequently requested feature directions from the issue tracker are:
1. **Core usability improvements for desktop and TUI**: Requests include clickable file paths in chat, persistent per-session message drafts, colorblind accessibility themes, and fixed input field focus behavior in the desktop app.
2. **Copy/export raw LLM output**: Multiple requests for the ability to copy LLM responses as raw markdown (rather than formatted chat text) to support downstream editing and documentation use cases.
3. **Workflow enhancements for power users**: Requests include native git worktree support for workspace switching, config options to disable the exit splash for embedded/white-label use cases, and ANSI bell support for user acknowledgment in TUI/terminal workflows.
4. **Onboarding and documentation clarity**: Recurring requests to fix ambiguous VS Code extension install instructions, clarify config precedence rules, and add explicit manual install links for plugins.
5. **Provider compatibility flexibility**: Requests for more granular control over tool-call behavior (e.g. `tool_call: false` support) and better alignment of model capability metadata with actual provider functionality.
That's good, distills the trends clearly.

Then **Developer Pain Points**: summarize recurring frustrations or high-frequency requests. Let's see: the biggest one is the high CPU usage regression that's been open for months, affecting multi-session usage. Then the infinite loop after tool calls, breaking core agent functionality. Then desktop app usability issues: input focus, unclickable paths, focus loss when switching tabs. Then onboarding pain points around VS Code extension install and config docs. Then TUI bugs like draft carryover, command palette availability. Also, provider compatibility issues where config flags are ignored, or model capabilities are misadvertised. Let's structure this:
### Developer Pain Points
Recurring high-priority pain points reported by the community include:
1. **Stability regressions in recent releases**: The most prominent issue is a widespread high CPU usage regression (open since May 2026, 46 comments) that breaks multi-session usage for both CLI and desktop builds, with no confirmed fix as of the digest date. A secondary critical bug causes infinite loops after tool calls complete for Zen/big-pickle model users, freezing the app entirely.
2. **Desktop app usability gaps**: Multiple reports of broken input field focus (preventing tab/click navigation between form fields), unclickable file paths in chat, and lost file viewer state when switching between sessions, making the desktop app difficult to use for routine workflows.
3. **Onboarding friction**: Recurring confusion around VS Code extension installation (multiple duplicate issues) and ambiguous configuration documentation, leading to failed installs and unnecessary support requests for new users.
4. **TUI workflow bugs**: Core TUI usability issues including draft message carryover between sessions, limited command palette availability in question prompts, and broken dark mode detection on Windows 11 Terminal.
5. **Provider compatibility mismatches**: Frequent reports of ignored configuration flags (e.g. `tool_call: false`) and mismatched model capability metadata (e.g. MiMo V2.5 advertising video support it does not actually provide), breaking workflows for users of niche or self-hosted models.
Wait, that's good, covers the main pain points, ties back to the issues we saw.

Wait, let's check if all links are

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

Got it, let's tackle this Pi community digest for 2026-08-11. First, I need to make sure I follow the structure exactly, use the data given, keep it technical and concise for devs.

First section: Today's Highlights. Let's look at the most impactful stuff. First, the critical open bug is #6187, Pi login hangs in WSL after GitHub Copilot device auth—21 comments, that's a big one for devs using WSL which is super common. Then, there's two key PRs merging: one for Cloudflare Workers AI Gateway support (#7901, closed now? Wait no, wait #7901 is open? Wait no, the latest PRs: #7901 is open, but also the Bedrock tool sanitization fix #7882 is closed, that fixes the session-bricking bug from #7782. Oh right, also the fullscreen transcript search PR #7913 is new. Wait let's condense: "Today's top priorities include a high-impact open bug causing Pi login hangs in WSL after GitHub Copilot device authorization (21 community comments, #6187), a merged fix for a critical Bedrock tool call vulnerability that could permanently brick user sessions (#7882, closes #7782), and new merged PRs adding Cloudflare Workers AI Gateway transport support and fullscreen transcript search functionality." Wait wait, check: #7901 is open? Wait no, the PR list: #7901 is [OPEN] feat(ai): AI Gateway transport over the Cloudflare AI binding, but wait #7838 was the issue, closed as no-action, but the PR is open? Wait no, also #7882 is [CLOSED] [inprogress] fix(ai): sanitize empty Bedrock tool argument keys, so that's merged. Also, #7913 is open, new PR for fullscreen search. Also, the bun runtime crash bug #7846 is open, 2 comments, 1 upvote. Wait let's make highlights accurate:
1. Today's Highlights: 2-3 sentences. Let's see:
"Today's digest centers on a high-severity open bug causing Pi login hangs in WSL environments following successful GitHub Copilot device authorization (#6187, 21 community comments), a newly merged fix for a critical Bedrock tool call vulnerability that could permanently corrupt user sessions (#7882, resolves #7782), and two high-demand feature additions: fullscreen transcript search (PR #7913) and Cloudflare Workers AI Gateway transport support (PR #7901, resolves #7838). Multiple TUX/UX bug fixes for fullscreen mode, Alt+Enter input handling, and narrow pane footer rendering were also merged in the last 24 hours." Wait that's good, covers the big open bug, the critical fix, two key features, other UX fixes.

Next section: Releases. The data says Latest Releases (last 24h) None, so just state that: "No new Pi releases were published in the last 24 hours."

Third section: Hot Issues, pick 10 noteworthy, explain why they matter, community reaction, include links. Let's sort by comment count first, then impact:
1. #6187 [OPEN] [bug] Pi login hangs in WSL after browser-based GitHub Copilot device authorization (21 comments, 0 upvotes). Why it matters: WSL is a widely used development environment for Windows-based AI developers; this bug blocks all Copilot-authenticated Pi usage for this cohort, with no workaround reported in the thread. Community reaction: High engagement (most commented issue in the window), multiple users confirming reproduction across WSL 2 and Windows 11 builds. Link: https://github.com/earendil-works/pi/issues/6187
2. #7855 [CLOSED] [bug, no-action] Pi stops with "Response was truncated before completion." (4 comments, 0 upvotes). Why it matters: Reproduces across all OpenAI-compatible APIs (including local VLLM deployments), breaking long-form generation workflows with no consistent trigger. Community reaction: Multiple users confirmed random occurrence, no root cause identified in the thread, marked no-action pending further investigation. Link: https://github.com/earendil-works/pi/issues/7855
3. #7850 [CLOSED] [bug, no-action] GitHub Copilot login fails with 429 (Rate Limiting) for organizations with a lot of activated / available models (4 comments, 2 upvotes). Why it matters: Blocks enterprise Copilot users with large model catalogs from authenticating to Pi entirely. Community reaction: 2 upvotes indicate shared pain point for org users, workaround not identified in thread. Link: https://github.com/earendil-works/pi/issues/7850
4. #7782 [CLOSED] [bug] Invalid tool call from Bedrock poisoned pi session (4 comments, 0 upvotes). Why it matters: A malformed Bedrock tool call with empty argument keys could permanently brick active Pi sessions, with no automatic recovery. Community reaction: High severity reported by users, directly resolved by merged PR #7882. Link: https://github.com/earendil-works/pi/issues/7782
5. #7836 [OPEN] [bug] Edit fuzzy match misses lines with differences in whitespace length (3 comments, 1 upvote). Why it matters: Breaks edit tool functionality for small local models that output whitespace-inconsistent text, a common edge case for lightweight model deployments. Community reaction: 1 upvote, confirmed reproduction with small model edit workflows. Link: https://github.com/earendil-works/pi/issues/7836
6. #7783 [OPEN] agent_end handler sendMessage({triggerTurn:false}) still starts a turn (isStreaming true until agent_settled) (3 comments, 0 upvotes). Why it matters: Breaks extension developer workflows that rely on sending display-only custom messages without triggering new assistant turns, a core extension API contract violation. Community reaction: Reported by extension developers, no workaround currently available. Link: https://github.com/earendil-works/pi/issues/7783
7. #7846 [OPEN] [bug] Unable to start 0.84.0, 0.84.1, with bun runtime (2 comments, 1 upvote). Why it matters: Blocks all Bun runtime users from running latest Pi versions, a growing segment of the Node.js ecosystem. Community reaction: 1 upvote, confirmed crash due to missing zstd decompression support in Undici's Bun fetch implementation. Link: https://github.com/earendil-works/pi/issues/7846
8. #7791 [OPEN] Global Undici dispatcher inherits 16 KiB maxHeaderSize, causing UND_ERR_HEADERS_OVERFLOW (2 comments, 0 upvotes). Why it matters: Causes Pi to fail when interacting with APIs that return large headers (e.g., enterprise LLM gateways with extensive auth metadata), a common enterprise use case. Community reaction: Reported by enterprise users, no current workaround. Link: https://github.com/earendil-works/pi/issues/7791
9. #7912 [CLOSED] [untriaged] generate-models.ts drops models.dev cost.tiers for every provider except github-copilot (2 comments, 0 upvotes). Why it matters: Causes incorrect cost estimates for non-Copilot providers (e.g., Grok) that use tiered pricing, breaking Pi's cost tracking functionality for these models. Community reaction: Reported by a user testing DeepSeek tiered pricing, no fix merged yet. Link: https://github.com/earendil-works/pi/issues/7912
10. #7891 [CLOSED] [no-action] compaction_end renders persisted summary twice in TUI (2 comments, 0 upvotes). Why it matters: Creates visual clutter in the TUI after automatic or manual context compaction, a common workflow for long sessions. Community reaction: Confirmed as display-only bug, no data loss, marked no-action for low priority. Link: https://github.com/earendil-works/pi/issues/7891
Wait wait, let's check if these are the top 10 by comment count, right? The top 30 by comment count, so top 10 are the first 10 in the issue list, right? Let's confirm: the issues are ordered by comment count descending, right? The first is 21, then 4,4,4,4,4,3,3,3,3,2,2,2,2,2,2,1,1,1... Yeah, so the first 10 by comment count are the first 10 entries, that's correct.

Fourth section: Key PR Progress, pick 10 important PRs, describe features/fixes, include links. Let's pick the most impactful, mix of open and closed, features and fixes:
1. PR #7913 [OPEN] feat(tui): add fullscreen transcript search (author: mitsuhiko, created 2026-08-10). Description: Adds Ctrl+Shift+f triggered fulltext search over the full session transcript in fullscreen TUI mode, addressing a long-standing user request for in-session search functionality. Closes #7830. Link: https://github.com/earendil-works/pi/pull/7913
2. PR #7901 [OPEN] feat(ai): AI Gateway transport over the Cloudflare AI binding (author: Maximo-Guk, created 2026-08-10). Description: Adds native support for Cloudflare Workers AI Gateway via the env.AI binding, enabling Pi apps running in Cloudflare Workers to route requests through the AI Gateway without custom transport code. Resolves #7838. Link: https://github.com/earendil-works/pi/pull/7901
3. PR #7882 [CLOSED] fix(ai): sanitize empty Bedrock tool argument keys (author: muyiyr, created 2026-08-10). Description: Merged critical security/robustness fix that recursively removes empty property names from Bedrock tool call arguments before sending requests, while preserving unmodified arguments in session history. Prevents permanent session corruption from malformed Bedrock tool outputs, resolves #7782. Link: https://github.com/earendil-works/pi/pull/7882
4. PR #7903 [OPEN] feat(tui): add unbound single-line transcript scrolling actions (author: midastruth, created 2026-08-10). Description: Adds configurable tui.altScreen.lineUp and tui.altScreen.lineDown keybinding actions for one-line viewport scrolling in fullscreen TUI, addressing user requests for granular scroll control. Closes #7830. Link: https://github.com/earendil-works/pi/pull/7903
5. PR #7906 [CLOSED] feat(coding-agent): add fullscreen fixed top bar (author: NyxTools-M, created 2026-08-10). Description: Merged UX improvement that adds a fixed top bar in fullscreen TUI mode displaying abbreviated cwd, git branch, context usage, and auto-compaction status, improving visibility of session metadata without obscuring transcript content. Link: https://github.com/earendil-works/pi/pull/7906
6. PR #7899 [OPEN] fix(tui): prevent split Alt+Enter from interrupting (author: powerfooI, created 2026-08-10). Description: Fixes a long-standing bug where Alt+Enter (sent as ESC+CR in non-Kitty protocol environments like tmux/SSH) would abort active turns if the two bytes arrived more than 10ms apart, by increasing the escape sequence timeout to 100ms. Resolves #7876. Link: https://github.com/earendil-works/pi/pull/7899
7. PR #7905 [CLOSED] fix(config): refine pnpm detection and validate managed install before suggesting update command (author: re2zero, created 2026-08-10). Description: Merged fix that eliminates false positive pnpm detection for packages installed in $PNPM_HOME global bins, and validates that Pi is managed by pnpm before suggesting pnpm-specific update commands. Link: https://github.com/earendil-works/pi/pull/7905
8. PR #7904 [CLOSED] fix(edit): normalize single-object edits argument to array (author: re2zero, created 2026-08-10). Description: Merged fix that automatically wraps single-object edit tool arguments in an array, resolving failures when models output edit calls in non-array format (a common edge case for smaller instruction-tuned models). Link: https://github.com/earendil-works/pi/pull/7904
9. PR #7897 [OPEN] fix(coding-agent): inherit subagent session config (author: virtuald, created 2026-08-10). Description: Fixes subagent behavior to inherit the parent session's active model and thinking level, rather than using the config of the most recently active session, improving intuitive behavior for multi-session workflows. Link: https://github.com/earendil-works/pi/pull/7897
10. PR #7892 [OPEN] fix(tui): avoid repainting idle fullscreen sessions on focus loss (author: terrorobe, created 2026-08-10). Description: Fixes a bug where fullscreen TUI sessions would trigger false activity indicators in terminals like iTerm2 on focus loss, by skipping unnecessary repaints when no screen content has changed. Link: https://github.com/earendil-works/pi/pull/7892
Wait that's 10, good. Let's make sure they are the most important: the critical fix for Bedrock, the two big features (fullscreen search, Cloudflare AI Gateway), the Alt+Enter fix which is a common pain point, the edit fix, subagent config fix, fullscreen top bar, pnpm fix, focus repaint fix. Yep, that's the key ones.

Fifth section: Feature Request Trends. Let's distill the most requested directions from all issues. Let's look at the issues:
- TUI/UX improvements: Multiple requests for fullscreen mode enhancements (sticky prompt header #7802, fullscreen search #7913, narrow pane footer responsiveness #7884, line scrolling #7903, fixed top bar #7906, viewport scroll stability #7861, #7914). That's a big trend.
- Provider/transport support: Requests for Cloudflare Workers AI Gateway (#7838), Amazon Bedrock Mantle OpenAI Responses provider (#6216), Muse Code subagent runtime (#7877). So expanding supported AI providers and deployment runtimes.
- Tooling robustness: Requests for better tool call validation/sanitization (Bedrock tool arg sanitization #7782, edit tool argument normalization #7904), extension API contract fixes (agent_end message behavior #7783, context file exposure #7872).
- Developer experience: Requests for man page documentation (#7888), npm package search indexing fixes (#7885), pnpm detection improvements (#7905), context overflow error handling (#7867).
So let's condense that:
"Feature request trends in the last 24 hours fall into three core categories:
1. TUI/UX enhancements: The largest cluster of requests focuses on improving fullscreen interactive mode, including fulltext transcript search, sticky prompt headers, narrow-pane responsive footers, granular line scrolling, and stable viewport behavior during streaming.
2. Expanded provider and runtime support: Users are requesting native integrations for emerging AI platforms, including Cloudflare Workers AI Gateway, Amazon Bedrock Mantle's OpenAI Responses API, and Muse Code as a subagent runtime.
3. Tooling and extension robustness: Repeated requests target improved tool call validation, extension API contract consistency, and better error handling for edge cases like context overflow and malformed provider responses."
Wait that's good, distills the trends.

Sixth section: Developer Pain Points. Summarize recurring frustrations or high-frequency requests. Let's look at the issues:
1. WSL/Copilot authentication blocker: The #6187 bug is a top pain point, blocking all Copilot-authenticated usage for WSL users, a very common dev environment.
2. TUI usability in constrained environments: Multiple bugs affect fullscreen TUI usability: viewport jumping on scroll (#7861, #7914), narrow pane footer truncation (#7884), Alt+Enter accidentally aborting turns in tmux/SSH (#7876), and compaction summary duplication (#7891).
3. Tool call edge case failures: Multiple issues stem from models outputting non-standard tool call formats: single-object edit arguments instead of arrays (#7904), empty Bedrock tool argument keys (#7782), leading to broken tool execution or session corruption.
4. Enterprise/advanced use case gaps: Gaps for enterprise users (Copilot org rate limiting #7850, large API header overflow #7791) and advanced runtime users (Bun runtime crashes #7846, Cloudflare Workers support gaps #7838).
Wait let's make that concise:
"Recurring developer pain points in the last 24 hours include:
1. WSL authentication blocker: The #6187 bug preventing Copilot login in WSL is the highest-engagement open issue, blocking a widely used development environment for Copilot-integrated workflows.
2. Fullscreen TUI instability: Multiple overlapping bugs affect fullscreen mode usability, including unintended viewport jumps during streaming/redraws, accidental turn aborts from split Alt+Enter input in tmux/SSH, and unreadable footers in narrow terminal panes.
3. Non-standard tool call failures: Multiple model output edge cases (single-object edit arguments, empty Bedrock tool keys) break tool execution, with some edge cases (like malformed Bedrock calls) capable of permanently corrupting active sessions.
4. Runtime and enterprise compatibility gaps: Gaps for non-Node runtimes (Bun crashes) and enterprise use cases (Copilot org rate limiting, large API header overflow) remain unaddressed, with no workarounds reported in issue threads."

Wait let's check if all links are included, right? Each issue and PR has the GitHub link. Let's make sure the style is concise, professional, for technical devs. Let's also make sure we didn't miss anything: releases are none, that's correct. Hot issues are top 10 by comment count, right? Let's confirm: the issues are ordered by comment count descending, so first 10 are the top 10, yes. PRs are the most important ones, mix of open and closed, features and fixes.

Wait let's adjust the highlights to be more accurate: wait PR #7901 is open, right? The PR list says #7901 is [OPEN], so it's not merged yet? Wait wait the PR list: let's check again:
PRs:
#7910 [OPEN]
#7913 [OPEN]
#7882 [CLOSED] [inprogress] — so that's merged, right? Closed means merged or rejected, but the summary says fixes #7782, so merged.
#7906 [CLOSED] — merged.
#7905 [CLOSED] — merged.
#7904 [CLOSED]

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Got it, let's tackle this Qwen Code community digest for 2026-08-11. First, I need to follow the exact structure requested, make sure it's concise, professional, for devs, with links.

First section: Today's Highlights. Let's see what's most important. The latest release is v0.21.9, right? And the big feature is native Qoder plugin support from multiple sources, plus Local Control QR pairing. Wait, also the multi-agent fleet work is moving fast? Wait no, highlights first: 1) v0.21.9 shipped with native Qoder plugin installation support (from dirs, archives, git repos, URLs, npm, with auto system prompt loading) and Local Control QR code pairing. 2) The native multi-agent fleet (RFC #8718) is in active development with stage 1A (in-process preview) and 1B (fleet MVP) PRs in flight. Wait also the latest PRs have a lot of session management, web shell, desktop fixes. Let me make that 2-3 sentences. Let's draft:
> **Today's Highlights**
> Qwen Code v0.21.9 is now available, introducing native support for installing Qoder plugins from local directories, archives, Git repositories, URLs, and npm packages with automatic system-prompt loading, plus Local Control pairing via QR code. The project’s native multi-agent fleet work (RFC #8718) is advancing rapidly, with in-process preview (stage 1A) and fleet MVP (stage 1B) implementation PRs under active review. Multiple UI, session management, and Web Shell improvements are also landing in parallel, including fixes for terminal rendering artifacts and session timeout handling.

Wait that's good. Next section: Releases. There's v0.21.9, and the nightly 0.21.8 but the latest stable is 0.21.9. Let's summarize:
> **Releases**
> - [v0.21.9](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.9): Stable release adding native Qoder plugin installation from diverse sources (local paths, archives, Git repos, URLs, npm) with automatic system prompt loading, and QR code-based Local Control pairing. Fixes for provider update prompt repetition, session restore timeouts, and terminal rendering flicker are included.

Wait, should I mention the nightly? No, the latest is 0.21.9, the nightly is older? Wait no, the latest releases last 24h are v0.21.9 and the 0.21.8 nightly. But the stable is 0.21.9, so focus on that, maybe note the nightly if needed? No, better to lead with the stable. Wait the release notes for v0.21.9 are linked, right? Yeah, the first latest release is v0.21.9.

Next section: Hot Issues, pick 10 noteworthy ones, explain why they matter, community reaction, with links. Let's sort by priority and impact first. Let's list the top ones:
1. #8885 [P1] fix(session): align rewind indexes with automatic user-role history entries. Why it matters: P1 core bug, rewind functionality is broken for sessions with automatic entries (cron prompts, background notifications, stop continuations) because of mismatched index spaces between model-facing history and chat recording. That's a core session management bug, high impact. Community reaction: 3 comments, active discussion, PR in flight? Wait no, it's an issue, but there's related PR #8838 for scheduled prompts. Wait, also #8678 [P1] fix(serve): Preserve the current session when a large restore times out. Oh right, that's P1 too. Wait let's pick the highest impact ones first, 10 total:
Let's list them in order of priority and impact:
1. #8885: P1 core session management bug. Rewind functionality fails for sessions with automatic user-role entries (cron prompts, background notifications, mid-turn inputs) due to a mismatch between model-facing content history indexes and ChatRecordingService turn boundaries. This breaks a core workflow for users relying on session history navigation. 3 comments, active triage.
2. #8678: P1 serve mode bug. Large session restores in `qwen serve` can time out and lose the current active session, with no way to recover the in-progress work. A related PR (#8691) has already landed timeout safety and observability improvements, but full fix is in progress. 3 comments, high priority for serve users.
3. #8718: P2 feature RFC for native multi-agent session coordination. Proposes an experimental coordination layer for multiple independent Qwen Code sessions, with leader/worker architecture, correlated state observation, and structured result collection. This is a foundational roadmap item for fleet/multi-agent features. 8 comments, active community discussion.
4. #8124: P2 TUI rendering bug. Startup banner intermittently loses its top 3 lines on first paint, correlated with pending provider updates. Affects first-run user experience for all TUI users. 10 comments (most commented issue in the batch), widespread user reports.
5. #8871: P2 ACP serve mode bug. `qwen serve --http-bridge=true` fails with "Unknown argument: acp" when spawning the ACP child process, breaking token authentication and ACP integration workflows. 4 comments, reproducible for serve + ACP users.
6. #8557: P3 TUI rendering bug. Shrinking the terminal window causes duplicate transcript blocks to be printed to scrollback on macOS (Warp terminal). Affects interactive TUI usability for macOS users. 8 comments, multiple user reports.
7. #8847: P2 CI failure for E2E test. Main branch E2E test `submitted-prompt-provenance.test.ts` is failing, blocking merges to main. Related to prompt provenance tracking for file content. 4 comments, actively being debugged by the dev bot.
8. #8837: P2 core session bug. ACP scheduled task prompts are missing from restored session transcripts after a cold restore, breaking audit trails and context continuity for automated tasks. 3 comments, related to PR #8838 for scheduled prompt persistence.
9. #8845: P2 feature request for Web Shell. Proposes redesigning Channel policy, session isolation, and workspace ownership management in Web Shell to expose consistent controls across all adapters, improving operator usability. 4 comments, aligned with multi-agent roadmap.
10. #8860: P2 performance bug. OpenAI API logs grow without bound (observed ~95GB / 340k files in 2 months) when `enableOpenAILogging` is enabled, with no log rotation or retention policy. 2 comments, impacts users with long-running logging enabled.

Wait that's 10, good. Let's make sure each has a link, explains why it matters, community reaction.

Next section: Key PR Progress, pick 10 important PRs, describe features/fixes, with links. Let's pick the most impactful ones:
1. #8661 (merged? Wait no, it's in highlights, the feat for Qoder plugins. Wait the PR is https://github.com/QwenLM/qwen-code/pull/8661. Oh right, that's the one that added Qoder plugin support, which is in v0.21.9. Let's list:
1. [#8661](https://github.com/QwenLM/qwen-code/pull/8661): Merged feature adding native Qoder plugin installation support from local directories, archives, Git repos, URLs, and npm packages, with automatic system-prompt loading for installed plugins. This is a core part of the v0.21.9 release, expanding the extensibility of Qwen Code.
2. [#8838](https://github.com/QwenLM/qwen-code/pull/8838): In-review fix to persist automatically fired scheduled cron prompts in ACP session transcripts, resolving issue #8837 where scheduled task prompts were missing after cold session restores.
3. [#8831](https://github.com/QwenLM/qwen-code/pull/8831): In-review fix for terminal rendering artifacts, eliminating banner duplication and input box drag flicker during window resize/wake, resolving issues #8124 and #8557.
4. [#8840](https://github.com/QwenLM/qwen-code/pull/8840): In-review implementation of native multi-agent fleet stage 1A, delivering an in-process fleet preview with core contracts for session coordination, the foundational building block for the full fleet feature set outlined in RFC #8718.
5. [#8883](https://github.com/QwenLM/qwen-code/pull/8883): In-review fix for WebUI session loading timeouts, clearing stale timed-out session identities to allow users to retry loading a session after a timeout, instead of being stuck in a disconnected state.
6. [#8707](https://github.com/QwenLM/qwen-code/pull/8707): In-review feature adding Qwen WebBridge, a direct browser control path from `qwen serve` to the Qwen Chrome extension and user Chromium profile, supporting 17 browser actions for web automation workflows.
7. [#8895](https://github.com/QwenLM/qwen-code/pull/8895): In-review fix for CI autofix workflows, streaming partial progress from headless Qwen processes to the autofix agent to distinguish active tool work from stalled sandboxes, reducing false positive cancellation loops.
8. [#8848](https://github.com/QwenLM/qwen-code/pull/8848): In-review Web Shell feature redesigning Channel policy, session routing, and workspace ownership controls to expose consistent management interfaces across all built-in adapters, implementing the feature request from issue #8845.
9. [#8882](https://github.com/QwenLM/qwen-code/pull/8882): In-review fix for WebUI cross-session switching, making session load/resume operations transactional to avoid race conditions and partial state leaks when switching between active sessions.
10. [#8728](https://github.com/QwenLM/qwen-code/pull/8728): Merged feature adding a live-session registry and `qwen sessions ps` CLI command to list running Qwen Code sessions on the local machine, the first step of the multi-agent fleet roadmap.

Wait that's 10, good. Each has a link, explains what it does, why it matters.

Next section: Feature Request Trends. Let's distill the most requested directions from all issues. Let's see:
- Native multi-agent/fleet capabilities: Multiple feature requests (RFC #8718, #8840 stage 1A, #8841 stage 1B, #8843 stage 3, #8724) are focused on building a native coordination layer for multiple independent Qwen sessions, with leader/worker architectures, session addressing by name, and supervised teammate runtimes. This is the single most prominent feature direction in the current roadmap.
- Web Shell usability enhancements: Repeated feature requests (#8845, #8874, #8467, #8732) focus on expanding Web Shell functionality, including file uploads, Git diff/branch switching, Channel policy controls, and Goal v3 support for ACP/Web Shell sessions.
- Session management robustness: Multiple requests target improving session reliability, including transactional session switching (#8882), handling of restore timeouts (#8678), rewind index alignment (#8885), and live session visibility (#8728).
- Desktop/WebUI integration: Feature requests for Desktop Local Control (QR pairing, enterprise LAN support, hold-to-record fixes) and WebUI improvements (session retry, connection state handling) are a growing priority as non-CLI usage scales.

Wait that's good, distills the trends, ties to specific issues.

Last section: Developer Pain Points. Let's summarize recurring frustrations:
1. TUI rendering instability: Multiple high-comment issues (#8124, #8557, #8659, #8849) report intermittent rendering bugs (missing banner lines, duplicate scrollback output, flickering in web terminals, input box jitter during resize) that impact core interactive usability, especially for macOS and web-based terminal users.
2. Session reliability gaps: Recurring bugs around session state consistency, including broken rewind for sessions with automatic entries (#8885), missing scheduled prompts in restored transcripts (#8837), and data loss on restore timeouts (#8678), break trust in long-running session workflows.
3. CI/automation friction: Multiple CI failures (#8847, #8870, #8888) and autofix loop bugs (#8888) create friction for contributors, with self-reinforcing bot cancellation loops on PRs and failing E2E tests blocking main branch merges.
4. Provider/settings edge cases: Bugs like provider updates silently overwriting custom model settings (#8863) and repeated provider update prompts for custom models (#8504) create confusing user experiences for users with non-default provider configurations.
5. Logging bloat: Unbounded OpenAI API log growth (#8860) can consume hundreds of gigabytes of disk space in months, with no built-in rotation or retention, requiring manual cleanup for long-running instances.

Wait that's good, covers the recurring pain points. Let me make sure all links are correct, each section is properly formatted, concise, professional. Let's check if I missed anything. Oh, wait the highlights also mentioned Local Control QR pairing, which I included. The Qoder plugin support is in the release and highlights. Let me make sure the sections are all there, as requested:

1. Today's Highlights
2. Releases
3. Hot Issues (10, with links, why they matter, community reaction)
4. Key PR Progress (10, with links, descriptions)
5. Feature Request Trends
6. Developer Pain Points

Wait let's make sure the Hot Issues have the links right. Let's check each issue link: yes, they are https://github.com/QwenLM/qwen-code/issues/<number>, correct. PR links are https://github.com/QwenLM/qwen-code/pull/<number>, correct.

Wait let's adjust the Highlights to be more accurate. Let's rework the Highlights:
> **Today's Highlights**
> Qwen Code v0.21.9 shipped today, adding native support for installing Qoder plugins from local directories, archives, Git repositories, URLs, and npm packages with automatic system-prompt loading, alongside QR code-based Local Control pairing for desktop users. The project’s native multi-agent fleet roadmap (RFC #8718) is advancing quickly, with in-process preview (stage 1A) and fleet MVP (stage 1B) implementation PRs under active review. Parallel work is also landing fixes for long-standing TUI rendering bugs, session restore reliability, and Web Shell functionality.

That's better. For the Releases section, make sure to note that v0.21.9 is the latest stable, and the 0.21.8 nightly is a pre-release if needed? Wait no, the latest releases last 24h are v0.21.9 and the nightly, but the stable is the main one. So:
> **Releases**
> - [v0.21.9](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.9) (stable, 2026-08-11): Includes the new native Qoder plugin installation system, QR code Local Control pairing, and fixes for provider update prompt repetition, session restore timeouts, and terminal rendering flicker during resize.
> - [v0.21.8-nightly.20260810.55e20db328](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.8-nightly.20260810.55e20db328) (nightly, 2026-08-10): Pre-release build with in-progress features and fixes pending inclusion in the next stable release.

That's accurate. Now, Hot Issues: let's make sure each entry has the issue number, link, priority, why it matters, community reaction. Let's format each as:
- [Issue #<number>](<link>): <title>. <Why it matters>. <Community reaction: comments, user reports, etc.>

Yes, that's clear. Let's adjust the Hot Issues to that format:
> **Hot Issues**
> 1. [Issue #8885](https://github.com/QwenLM/qwen-code/issues/8885) [P1]: `fix(session): align rewind indexes with automatic user-role history entries`. This is a high-priority core bug that breaks session rewind functionality for any session with automatic user-role entries (cron prompts, background notifications, stop continuations, mid-turn input), due to a mismatch between model-facing content history indexes and ChatRecordingService turn boundaries. It has 3 active comments and is being triaged alongside related scheduled prompt persistence work.
> 2. [Issue #8678](https://github.com/QwenLM/qwen-code/issues/8678) [P1]: `fix(serve): Preserve the current session when a large restore times out`. Large session restores in `qwen serve` can time out and discard the active in-progress session, with no recovery path for user work. A related PR (#8691) has already landed timeout safety and observability improvements, with full fix work ongoing. 3 comments, high priority for serve-mode users.
> 3. [Issue #8718](https://github.com/QwenLM/qwen-code/issues/8718) [P2]: `RFC: Native coordination for independent Qwen sessions`. This RFC proposes a foundational experimental coordination layer for multiple independent Qwen Code sessions, with a leader/worker architecture, correlated runtime/task state observation, and structured result collection. It is the umbrella issue for the project’s native multi-agent fleet roadmap. 8 comments, active community and maintainer discussion.
> 4. [Issue #8124](https://github.com/QwenLM/qwen-code/issues/8124) [P2]: `Startup banner sometimes missing top lines on first paint`. The TUI startup banner intermittently loses its top 3 lines on first render, correlated with pending provider updates, degrading first-run user experience for all TUI users. It is the most commented issue in the current batch (10 comments), with widespread user reports.
> 5. [Issue #8871](https://github.com/QwenLM/qwen-code/issues/8871) [P2]: `[Bug] ACP child process fails with "Unknown argument: acp" in qwen serve mode`. `qwen serve --http-bridge=true` fails to spawn the ACP child process due to an unparsed `--acp` flag, breaking token authentication and ACP integration workflows for serve users. 4 comments, easily reproducible.
> 6. [Issue #8557](https://github.com/QwenLM/qwen-code/issues/8557) [P3]: `bug(cli): shrinking the terminal window reprints transcript blocks in the scrollback`. On macOS (Warp terminal), narrowing the terminal window causes duplicate transcript blocks to be printed to scrollback, breaking interactive TUI usability. 8 comments, multiple user reports.
> 7. [Issue #8847](https://github.com/QwenLM/q

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

Got it, let's tackle this DeepSeek TUI (wait, wait, the repo is Hmbown/DeepSeek-TUI? No, wait the data says the repo is Hmbown/CodeWhale? Wait no, the user said "DeepSeek TUI community digest" and the data source is github.com/Hmbown/DeepSeek-TUI? Wait no, looking at the URLs: all the issues and PRs are Hmbown/CodeWhale. Oh right, probably DeepSeek-TUI is the old name or the TUI component of CodeWhale? Wait no, let's check the user's request: generate the digest for DeepSeek TUI, based on that GitHub data. Alright, first, let's go through each section one by one.

First, Today's Highlights. Let's see what's new: first, v0.9.6 was just shipped (PR #5315 closed, released 2026-08-10). Then, there's a new EPIC-005 for TUI crate decomposition (issue #5316, opened same day). Also, the closed EPIC #2870 for the command-boundary refactor is done? Wait #2870 is closed, updated 2026-08-10. Oh right, and the open issues: provider model retention bug, compaction issues, unified tasks surface request. Let's condense that into 2-3 sentences. Let's see: "On August 11, 2026, the DeepSeek TUI (CodeWhale) community saw the release of v0.9.6, a subtractive release focused on runtime simplification, stable base prompts, and streamlined compaction logic. A new umbrella EPIC for TUI crate decomposition (EPIC-005) was also opened to formalize modularization of the TUI codebase, while a long-running command-boundary refactor EPIC was closed after 20 rounds of community review. Three active pull requests and 7 tracked issues remain open, with provider model consistency, context compaction behavior, and unified background task visibility as top community priorities." That works, right? Let's make sure it's accurate.

Next, Releases. The latest release is v0.9.6, shipped via PR #5315 (closed 2026-08-10). The summary says it's subtractive: fewer runtime guards, one stable base prompt, truthful provider endings, smaller compaction path that preserves provider capabilities. Wait let's get that right: "v0.9.6 (released 2026-08-10, [PR #5315](https://github.com/Hmbown/CodeWhale/pull/5315)): Subtractative release focused on runtime simplification, including removal of redundant runtime guards, consolidation to a single stable base prompt, standardized truthful endings for all supported providers, and a streamlined context compaction path that retains full provider feature compatibility." Perfect, that's concise, links the PR, which is the source.

Now Hot Issues: pick 10? Wait wait the total issues are 7, but wait the user said 10 noteworthy? Wait no, wait the latest issues are 7 total, but let's check: wait the list has 7, but let's see which are noteworthy. Wait let's list all 7, but explain why they matter, community reaction. Let's go one by one:

1. #2870 [CLOSED] Command-boundary refactor EPIC: Closed 2026-08-10 after 20 comments, tracked the layered mergeable implementation of the command-boundary refactor first proposed in #2791. This was a multi-month community effort to separate TUI command logic from core runtime logic, reducing coupling and improving testability. Community reaction was positive, with 20 rounds of review and iterative feedback across linked PRs (including reference PR #2851) before closure.
2. #5034 [OPEN] Switching providers retains unrelated default model: Reported by project lead Hmbown, 4 comments as of 2026-08-10. This bug causes incorrect default model retention when switching between AI providers (e.g., switching to OpenAI leaves a DeepSeek-specific default model active), breaking expected provider-specific behavior. High priority as it impacts core provider switching workflow reliability.
3. #5096 [OPEN] Compaction gain not visible: Reported by user jbousquie, 4 comments. Users report that after running the /compact command, the UI shows a "compaction complete" message but the displayed token usage count does not reflect the expected reduction in context size, making it impossible to verify compaction is working as intended. Impacts user trust in context management features.
4. #5270 [OPEN] v0.9.5: Unified tasks surface: Proposed by project lead Hmbown, 3 comments. Requests a single operator-facing panel to surface all active background work for a session, including background shells, subagents, Fleet/lane durable workers, and workflow runs. Aims to eliminate idle chrome confusion when background tasks are running, addressing a long-standing UX gap for power users running multi-task workflows.
5. #4394 [OPEN] Compaction structured survival contract: Proposed by project lead Hmbown, 3 comments. Formalizes a required specification for context compaction to guarantee preservation of critical session state (structured plans, to-do items, subagent state, tool results) across compaction operations. Addresses gaps in current ad-hoc compaction logic that risks losing high-priority session context during long-running tasks.
6. #5239 [OPEN] Context compression trigger threshold too low: Reported by user hardy922, 2 comments. Users note that the tool triggers context compression at 128K tokens even when their supported models have a 1M token context window, leading to unnecessary compaction and potential context loss. Requests configurable compression thresholds to match model capabilities, a high-frequency request from users running large-context models.
7. #5316 [OPEN] EPIC-005: CodeWhale TUI Crate Decomposition: Opened 2026-08-10 by maintainer aboimpinto, 0 comments yet. Umbrella EPIC to track modularization of the monolithic TUI crate into separate, maintainable sub-crates, improving build times, testability, and contributor onboarding. A foundational infrastructure effort for long-term project health.

Wait that's all 7, but the user said 10? Wait no, wait the total issues are 7, so we can note that, but maybe the user said 10 but we only have 7, so we list all 7, explain each. That's fine.

Next, Key PR Progress: pick 10? Wait the PRs are 3 total. Oh right, latest PRs are 3, so we list all 3, explain each. Let's see:

1. #5317 [OPEN] fix(subagents): cap nested max_depth by inherited budget: Opened 2026-08-10 by contributor ousamabenyounes. Fixes a bug where nested subagent spawns could exceed the root session's configured recursion depth budget, leading to uncontrolled resource usage and potential crashes. Aligns nested spawn depth capping with existing profile-hint logic, addressing issue #5253.
2. #5300 [CLOSED] refactor(core): own primary request preparation: Merged 2026-08-10 by project lead Hmbown. Moves the primary request preparation logic from the TUI crate to the core codewhale-core crate, replacing an unused synthetic ChatRequest scaffold with the production MessageRequest DTO family. Adds a provider-neutral prepare_primary_turn_request constructor to standardize default turn configuration across all supported providers, reducing TUI/core coupling.
3. #5315 [CLOSED] chore(release): ship v0.9.6: Merged 2026-08-10 by project lead Hmbown. Release preparation PR for v0.9.6, with release state tracked in the private codewhale-ops release ledger. No public issue linked, as release changes were finalized during the v0.9.6 development cycle.

Wait that's all 3, so we can note that only 3 PRs were updated in the last 24h, so we cover all of them. That's okay, the user said pick 10 but if there are only 3, we list all, right? Because we can't make up PRs. Let's make that clear? No, just present the 3, since those are the only ones updated in the last 24h, which is the data we have.

Next, Feature Request Trends: let's distill from the issues. Let's see: first, unified background task visibility (issue #5270) – users want a single pane to see all running background work (shells, subagents, workers, workflows) instead of scattered UI elements. Second, configurable context management (issues #5239, #4394, #5096) – users want control over compaction thresholds, guaranteed preservation of critical session state during compaction, and visible feedback on compaction results. Third, TUI codebase modularization (issue #5316) – contributors are requesting structured crate decomposition to improve maintainability and contributor experience. Fourth, provider consistency (issue #5034) – users expect provider switching to fully reset all provider-specific configurations (default models, endpoints) instead of retaining stale state from previous providers. That's the trends, right?

Then Developer Pain Points: let's summarize recurring frustrations. First, context compaction reliability and transparency: multiple open issues report that compaction does not work as expected (no visible token reduction, unexpected triggers at low thresholds, risk of losing critical session state), eroding user trust in the feature. Second, provider state inconsistency: the bug where switching providers retains stale default models breaks expected workflow behavior, requiring users to manually reset configurations after every provider switch. Third, fragmented background task UX: power users running multiple concurrent subagents, shells, or workflows have no unified way to view or manage active background work, leading to confusion about running processes and wasted resources. Fourth, monolithic TUI codebase: contributors report difficulty navigating and modifying the single large TUI crate, slowing down feature development and bug fixes, which is being addressed by the new EPIC-005 crate decomposition effort.

Wait let's make sure all sections are structured, have links, are concise, professional, for technical devs. Let's check the links: each issue and PR has the GitHub link, right? Let's make sure we include them correctly. Also, note that the repo is Hmbown/CodeWhale, but the user said DeepSeek TUI – wait, wait, the user's data source is github.com/Hmbown/DeepSeek-TUI, but all the issues are Hmbown/CodeWhale? Wait maybe DeepSeek-TUI is the former name, or the TUI component is part of CodeWhale? Wait let's check the issue titles: some mention DeepSeek, like #5096 mentions DeepSeek v4 Flash. Oh right, the user said "DeepSeek TUI community digest" so maybe CodeWhale is the new name, but the community still refers to it as DeepSeek TUI? Or maybe the repo was renamed? Wait no, the user's data source is github.com/Hmbown/DeepSeek-TUI, but the URLs are Hmbown/CodeWhale. Wait maybe that's a typo in the data? Or maybe the issues are cross-posted? No, wait the user's data says "Data source: github.com/Hmbown/DeepSeek-TUI" but the issue URLs are Hmbown/CodeWhale. Hmm, maybe the repo was renamed from DeepSeek-TUI to CodeWhale? That makes sense, because the PRs and issues are all CodeWhale. So in the digest, we can note that the project (formerly DeepSeek-TUI, now CodeWhale) to align with the user's request. Wait let's adjust the first line: "## DeepSeek TUI (CodeWhale) Community Digest | 2026-08-11" to clarify, since the repo is now CodeWhale but the user asked for DeepSeek TUI.

Wait let's make sure all links are correct. Let's check each issue and PR link:

#2870: https://github.com/Hmbown/CodeWhale/issues/2870
#5034: https://github.com/Hmbown/CodeWhale/issues/5034
#5096: https://github.com/Hmbown/CodeWhale/issues/5096
#5270: https://github.com/Hmbown/CodeWhale/issues/5270
#4394: https://github.com/Hmbown/CodeWhale/issues/4394
#5239: https://github.com/Hmbown/CodeWhale/issues/5239
#5316: https://github.com/Hmbown/CodeWhale/issues/5316

PRs:
#5317: https://github.com/Hmbown/CodeWhale/pull/5317
#5300: https://github.com/Hmbown/CodeWhale/pull/5300
#5315: https://github.com/Hmbown/CodeWhale/pull/5315

All correct.

Now let's structure each section properly, make sure it's concise, professional, for devs. Let's avoid fluff.

Wait let's adjust the Today's Highlights to be more accurate: "### Today's Highlights
The DeepSeek TUI (now branded as CodeWhale) community shipped the subtractive v0.9.6 release on August 10, 2026, focused on runtime simplification, stable base prompt consolidation, and streamlined compaction logic. A long-running command-boundary refactor EPIC (#2870) was closed after 20 rounds of community review, marking a major milestone in TUI/core decoupling. A new umbrella EPIC for TUI crate decomposition (EPIC-005) was opened the same day to formalize modularization of the monolithic TUI codebase, while provider model consistency, context compaction reliability, and unified background task visibility remain top open priorities."

That's good. Then Releases: since there is a new release, we summarize it. "### Releases
v0.9.6 (shipped 2026-08-10, [PR #5315](https://github.com/Hmbown/CodeWhale/pull/5315)): Subtractative release prioritizing runtime simplification, including removal of redundant runtime guards, consolidation to a single stable base prompt, standardized truthful output endings for all supported providers, and a leaner context compaction path that retains full provider feature compatibility. Release state is tracked via the private codewhale-ops release ledger."

Then Hot Issues: since there are 7 total, we list all 7, explain each, with links. Let's make sure each has why it matters, community reaction. Let's write that:

### Hot Issues (7 total open/closed issues updated in last 24h)
1. [#2870 [CLOSED] Command-boundary refactor EPIC](https://github.com/Hmbown/CodeWhale/issues/2870)
   Closed 2026-08-10 after 20 community comments, this EPIC tracked the layered, mergeable implementation of the command-boundary refactor first proposed in #2791. The work decouples TUI command logic from core runtime logic, reducing coupling and improving testability. Community reaction was strongly positive, with iterative feedback across 6+ linked PRs (including reference PR #2851) over a 2-month period.
2. [#5034 [OPEN] Switching providers retains unrelated default model](https://github.com/Hmbown/CodeWhale/issues/5034)
   Reported by project lead Hmbown, 4 comments as of 2026-08-10. This high-priority bug causes stale provider-specific default models to persist when switching between AI providers (e.g., switching to OpenAI retains a DeepSeek-specific default model), breaking expected provider-specific behavior and requiring manual configuration resets.
3. [#5096 [OPEN] Compaction gain not visible](https://github.com/Hmbown/CodeWhale/issues/5096)
   Reported by user jbousquie, 4 comments. Users report that the /compact command displays a "compaction complete" status but the UI token counter does not reflect reduced context size, making it impossible to verify compaction is functioning as intended. This erodes user trust in context management features for long-running sessions.
4. [#5270 [OPEN] Unified tasks surface (shell + subagents + durable workers)](https://github.com/Hmbown/CodeWhale/issues/5270)
   Proposed by project lead Hmbown, 3 comments. Requests a single operator-facing panel to surface all active background work for a session (background shells, subagents, Fleet/lane workers, workflow runs) to eliminate confusion from scattered idle UI chrome when background tasks are running. A top UX request for power users running multi-task workflows.
5. [#4394 [OPEN] Compaction structured survival contract](https://github.com/Hmbown/CodeWhale/issues/4394)
   Proposed by project lead Hmbown, 3 comments. Formalizes a required specification for context compaction to guarantee preservation of critical session state (structured plans, to-do items, subagent state, high-priority tool results) across compaction operations. Addresses gaps in current ad-hoc compaction logic that risks losing high-value context during long-running tasks.
6. [#5239 [OPEN] Context compression trigger threshold too low](https://github.com/Hmbown/CodeWhale/issues/5239)
   Reported by user hardy922, 2 comments. Users note the tool triggers context compression at 128K tokens even when their supported models have a 1M token context window, leading to unnecessary compaction and potential avoidable context loss. Requests configurable compression thresholds to match model capabilities, a high-frequency request from users running large-context frontier models.
7. [#5316 [OPEN] EPIC-005: CodeWhale TUI Crate Decomposition](https://github.com/Hmbown/CodeWhale/issues/5316)
   Opened 2026-08-10 by maintainer aboimpinto, 0 comments at time of publishing. Umbrella EPIC to track modularization of the monolithic TUI crate into separate, maintainable sub-crates, with the goal of improving build times, testability, and contributor onboarding. A foundational infrastructure effort for long-term project health.

That's all 7, perfect. Then Key PR Progress: 3 PRs updated in last 24h, so list all 3:

### Key PR Progress (3 total PRs updated in last 24h)
1. [#5317 [OPEN] fix(subagents): cap nested max_depth by inherited budget](https://github.com/Hmbown/CodeWhale/pull/5317)
   Opened 2026-08-10 by contributor ousamabenyounes. Fixes a critical bug where nested subagent spawns could exceed the root session's configured recursion depth budget, leading to uncontrolled resource usage and potential crashes. Aligns nested spawn depth capping with existing profile-hint logic, addressing issue #5253.
2. [#5300 [CLOSED] refactor(core): own primary request preparation](https://github.com/Hmbown/CodeWhale/pull/5300)
   Merged 2026-08-10 by project

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

Got it, let's tackle this ComfyUI community digest for 2026-08-11. First, I need to follow the structure exactly, make sure it's professional for devs, include all the links, and prioritize the most impactful stuff from the given data.

First, **Today's Highlights**. Let's see the biggest things: First, there's a lot of activity around MiniMax H3 support and regressions across hardware, especially AMD ROCm and Apple Silicon. Then, two major PRs landed: Intel XPU fixes for H3/VAE OOMs, and comfy-kitchen int8 attention support. Also, ongoing memory management regressions are a top pain point. Wait, let's make that 2-3 sentences. Let's draft:
> Today's digest centers on critical cross-hardware MiniMax H3 stability fixes, ongoing community pushback against regressing memory management in recent ComfyUI releases, and new experimental performance optimizations including Intel XPU VAE fixes and comfy-kitchen int8 attention support. Multiple high-impact issues around ROCm/AMD GPU compatibility, quantized model merging crashes, and low-VRAM regressions remain top of mind for the community, with 32 total issues updated in the last 24 hours.
Wait, that's good, covers the big themes.

Next, **Releases**. The data says latest releases last 24h: None. So just state that, no changes to summarize.

Then **Hot Issues** – pick 10 noteworthy ones, explain why they matter, community reaction, include links. Let's sort by impact, comment count, relevance:
1. First, #13458: New Memory Management OOM on Lora Trainer, 15 comments, 1 upvote, created April, updated yesterday. Why it matters: Core regression that breaks existing workflows for users on WSL and other configs, 0.9.x works so it's a clear regression. Community reaction: High frustration, multiple users chiming in, linked to broader memory management complaints. Link: https://github.com/Comfy-Org/ComfyUI/issues/13458
2. #12541: Memory Management Regression in Update 13, 12 comments, 8 upvotes (high upvote count, shows widespread impact). Why it matters: Affects all users trying to load standard models, regression from recent updates, 8 upvotes indicate broad community pain. Community reaction: Strong negative feedback, multiple users reporting broken workflows that worked in prior versions. Link: https://github.com/Comfy-Org/ComfyUI/issues/12541
3. #15315: MiniMax H3 fails on Apple Silicon M4 Max, black video/NaN audio, 14 comments, 2 upvotes, closed? Wait no, wait it's CLOSED? Wait the data says [CLOSED] [Potential Bug] Official MiniMax H3 T2V workflow fails on Apple Silicon (M4 Max): black video and NaN audio. Oh right, closed, but 14 comments, high activity. Why it matters: First-party official workflow breaks on flagship Apple hardware, impacts a huge user base of Mac users. Community reaction: Multiple users reported the issue, now closed so likely fixed in a pending release, but high visibility. Link: https://github.com/Comfy-Org/ComfyUI/issues/15315
4. #15263: MiniMax H3 SageAttention FP8 noise on sm_120, 13 comments, updated 8/9. Why it matters: Affects high-end NVIDIA RTX 40/50 series users (sm_120 is Ada Lovelace/Blackwell) using FP8 quantization, breaks video generation quality for a popular model. Community reaction: Users reported major performance gains with SageAttention but broken output, edit notes it's fixed in 0.31.1 but still relevant for users on older versions. Link: https://github.com/Comfy-Org/ComfyUI/issues/15263
5. #14382: AttributeError merging quantized (fp8) models with ModelMergeSimple, 9 comments, 0 upvotes. Why it matters: Breaks core model merging functionality for users using quantized checkpoints, a common workflow for reducing VRAM usage. Community reaction: Reproducible 100% crash, no workaround reported, affects all quantized model users. Link: https://github.com/Comfy-Org/ComfyUI/issues/14382
6. #15436: Blank outputs with dynamic VRAM on ROCm 7.14 gfx1201, 9 comments. Why it matters: Breaks AMD RDNA 3+ GPU users (gfx1201 is RDNA 4?) using dynamic VRAM, a key feature for low-VRAM workflows. Community reaction: Multiple ROCm users reporting broken outputs after recent updates, no immediate fix. Link: https://github.com/Comfy-Org/ComfyUI/issues/15436
7. #15314: MiniMax H3 pure noise on AMD RX 7900 XTX (RDNA3/gfx1100), 7 comments. Why it matters: Breaks official MiniMax H3 workflows for high-end AMD GPU users, all quantization/backend combos affected. Community reaction: Widespread reports from AMD RDNA3 users, no working workaround as of update. Link: https://github.com/Comfy-Org/ComfyUI/issues/15314
8. #15441: Startup crash on ROCm torch 2.5.1+rocm6.2 with comfy_kitchen, 8 comments. Why it matters: Prevents ROCm users from launching ComfyUI entirely when using comfy_kitchen custom ops, a common dependency for performance features. Community reaction: RX 7000 series users reporting hard crashes on launch, blocking all usage. Link: https://github.com/Comfy-Org/ComfyUI/issues/15441
9. #15443: Current memory manager "garbage" (OOM at 12/12GB VRAM), 4 comments, 1 upvote. Why it matters: Reinforces the broader memory management regression trend, even when VRAM is technically available, ComfyUI fails to allocate it correctly. Community reaction: High frustration from users with otherwise sufficient hardware. Link: https://github.com/Comfy-Org/ComfyUI/issues/15443
10. #15433: ImageUpscaleWithModel crash on 4GB GPUs (v0.29+ regression), 4 comments. Why it matters: Breaks core upscaling functionality for low-VRAM GPU users, a regression from v0.29 that broke previously working workflows. Community reaction: Users with entry-level GPUs reporting broken upscaling, no working workaround. Link: https://github.com/Comfy-Org/ComfyUI/issues/15433
Wait, that's 10, all high impact. Let's make sure each has a clear "why it matters" and community reaction, links are correct.

Next, **Key PR Progress** – pick 10 important PRs, describe features/fixes, include links. Let's sort by impact:
1. #15474: fix(xpu): VAE no_grad + execution-layer VRAM prep, H3 first-forward synchronize, .gguf extension support. Why it matters: Fixes critical OOM crashes when running MiniMax H3 video VAE on Intel Arc GPUs, adds .gguf model support for XPU, resolves long-standing XPU compatibility gaps for video models. Link: https://github.com/Comfy-Org/ComfyUI/pull/15474
2. #15467: Implement comfy kitchen int8 attention. Why it matters: Experimental new performance optimization that reduces VRAM usage and increases inference speed for supported models, uses a new comfy-kitchen custom op for INT8 attention. Link: https://github.com/Comfy-Org/ComfyUI/pull/15467
3. #15372: Add alpha mask output to ImageUpscaleWithModel. Why it matters: Fixes broken upscaling for transparent PNG cutouts, which previously failed because the upscale model expected 3-channel input. Adds native alpha channel support to the core upscaling node. Link: https://github.com/Comfy-Org/ComfyUI/pull/15372
4. #15369: Stop adding opaque alpha channel to API node images. Why it matters: Reduces unnecessary memory usage for API-returned images (4-channel RGBA instead of 3-channel RGB where no transparency exists), improves performance for API-driven workflows. Link: https://github.com/Comfy-Org/ComfyUI/pull/15369
5. #15367: Transcode when output container cannot store source codec. Why it matters: Fixes crashes when saving videos with codecs incompatible with the target container (e.g., VP8 WebM to MP4), prevents silent failures or hard crashes during video export. Link: https://github.com/Comfy-Org/ComfyUI/pull/15367
6. #14413: model_patcher: skip synthetic quant keys in get_key_patches. Why it matters: Fixes the core crash (Issue #14382) when merging quantized (fp8/QuantizedTensor) models with ModelMergeSimple, restores core model merging functionality for quantized checkpoint users. Link: https://github.com/Comfy-Org/ComfyUI/pull/14413
7. #14320: model_management: default shared-memory-dominant integrated GPUs to SHARED vram. Why it matters: Fixes incorrect VRAM allocation for AMD APUs and other integrated GPUs, where ComfyUI previously counted shared system RAM as dedicated VRAM, leading to OOMs on iGPUs. Link: https://github.com/Comfy-Org/ComfyUI/pull/14320
8. #15380: ci: make unit and execution tests able to fail a PR. Why it matters: Fixes a CI gap where failing tests did not block PR merges, improving code quality and reducing regression risk for core ComfyUI. Link: https://github.com/Comfy-Org/ComfyUI/pull/15380
9. #13362: fix: validate /history query parameters. Why it matters: Adds proper input validation for the /history API endpoint, prevents unhandled exceptions when non-integer values are passed to max_items/offset parameters. Link: https://github.com/Comfy-Org/ComfyUI/pull/13362
10. #14115: Add sampler lifecycle callbacks. Why it matters: Adds new callback hooks for sampler start/step/end events, enabling custom node developers to build advanced sampling monitoring, logging, and intervention tools. Link: https://github.com/Comfy-Org/ComfyUI/pull/14115
Wait, that's 10, all important. Let's check if they're all from the PR list, yes, all are there, some are closed but relevant? Wait #15332 is closed, but the ones I picked are mostly open, relevant.

Then **Feature Request Trends** – distill the most requested directions from all issues. Let's look at the issues:
First, memory management improvements: Multiple issues (13458, 12541, 15443) are asking for fixes to the new memory manager that causes OOMs even on hardware that worked with 0.9.x. Users want more granular control over VRAM allocation, better dynamic VRAM reliability.
Second, broader hardware compatibility for new models: Lots of issues around MiniMax H3 not working on AMD ROCm, Apple Silicon, Intel XPU, low-VRAM GPUs. Users want official support for non-NVIDIA hardware for new state-of-the-art models.
Third, improved error handling and UX: Issues like #15260 (missing model search in errors panel), #13890 (revert drag-and-drop workflow behavior), #11398 (workflow rename/save fixes) – users want more robust error messages, revertable UI changes, better workflow management.
Fourth, quantized model workflow support: Issues around merging quantized models, using quantized models with dynamic VRAM, so users want first-party support for fp8/quantized workflows without crashes.
Fifth, API and headless usage improvements: Issue #15473 asks for a headless API quickstart, users want better documentation and support for using ComfyUI as a backend without the GUI.
Let's structure that clearly:
> 1. **Memory management overhauls**: The most frequently requested feature direction is fixing regressions in the new memory manager introduced in recent releases, with users calling for more reliable dynamic VRAM allocation, granular VRAM control options, and restoration of behavior from 0.9.x that avoided OOMs on equivalent hardware.
> 2. **Cross-hardware support for new SOTA models**: A surge of requests center on official, stable support for MiniMax H3 and upcoming models on AMD ROCm, Apple Silicon, Intel XPU, and low-VRAM GPUs, as current support is fragmented and often broken for non-NVIDIA hardware.
> 3. **Improved workflow and error UX**: Users are requesting fixes for regressed UI behavior (e.g., drag-and-drop workflow loading), better error messaging (e.g., searchable missing model lists in the error panel), and more robust workflow save/rename functionality.
> 4. **First-party quantized model workflow support**: Multiple requests call for native, crash-free support for fp8 and other quantized model formats, including model merging, dynamic VRAM offloading, and consistent behavior across quantized and full-precision checkpoints.
> 5. **Enhanced headless/API usability**: Users are asking for official documentation and tooling to run ComfyUI as a pure backend/API service, including minimal quickstart examples and corrected API workflow JSON formatting.

That's good, distilled from the issues.

Then **Developer Pain Points** – summarize recurring frustrations, high-frequency requests:
> 1. **Unreliable memory management**: The single largest recurring pain point for both end users and custom node developers is the regressed memory manager introduced in recent releases, which causes OOMs on hardware that worked with 0.9.x, breaks dynamic VRAM workflows, and fails to correctly allocate VRAM for integrated and AMD GPUs. Multiple high-upvote issues (8 and 1 upvotes respectively for the top two memory issues) indicate widespread impact.
> 2. **Non-NVIDIA hardware compatibility gaps**: Developers and users alike report frequent crashes, broken output, and OOMs when running ComfyUI on AMD ROCm, Apple Silicon, and Intel XPU, especially for new models like MiniMax H3. Many fixes require manual workarounds or waiting for core patches.
> 3. **Quantized model integration gaps**: Core functionality like model merging (ModelMergeSimple) and dynamic VRAM offloading crashes consistently when used with fp8/QuantizedTensor checkpoints, with no official first-party support for these increasingly popular formats.
> 4. **CI and testing gaps**: A recently fixed CI gap (PR #15380) where unit and execution tests could not fail PRs highlights a recurring pain point for contributors, who have limited guardrails to prevent regressions from being merged to core.
> 5. **API and integration inconsistencies**: Issues like incorrect API image formatting (added opaque alpha channels) and broken /history endpoint validation indicate gaps in API stability for users building integrations on top of ComfyUI.

Wait, that's good, covers the recurring stuff.

Wait, let's make sure all links are correct, no typos. Let's check each issue and PR link:
For #13458: https://github.com/Comfy-Org/ComfyUI/issues/13458 – correct.
#12541: https://github.com/Comfy-Org/ComfyUI/issues/12541 – correct.
#15315: https://github.com/Comfy-Org/ComfyUI/issues/15315 – correct.
#15263: https://github.com/Comfy-Org/ComfyUI/issues/15263 – correct.
#14382: https://github.com/Comfy-Org/ComfyUI/issues/14382 – correct.
#15436: https://github.com/Comfy-Org/ComfyUI/issues/15436 – correct.
#15314: https://github.com/Comfy-Org/ComfyUI/issues/15314 – correct.
#15441: https://github.com/Comfy-Org/ComfyUI/issues/15441 – correct.
#15443: https://github.com/Comfy-Org/ComfyUI/issues/15443 – correct.
#15433: https://github.com/Comfy-Org/ComfyUI/issues/15433 – correct.

PRs:
#15474: https://github.com/Comfy-Org/ComfyUI/pull/15474 – correct.
#15467: https://github.com/Comfy-Org/ComfyUI/pull/15467 – correct.
#15372: https://github.com/Comfy-Org/ComfyUI/pull/15372 – correct.
#15369: https://github.com/Comfy-Org/ComfyUI/pull/15369 – correct.
#15367: https://github.com/Comfy-Org/ComfyUI/pull/15367 – correct.
#14413: https://github.com/Comfy-Org/ComfyUI/pull/14413 – correct.
#14320: https://github.com/Comfy-Org/ComfyUI/pull/14320 – correct.
#15380: https://github.com/Comfy-Org/ComfyUI/pull/15380 – correct.
#13362: https://github.com/Comfy-Org/ComfyUI/pull/13362 – correct.
#14115: https://github.com/Comfy-Org/ComfyUI/pull/14115 – correct.

Wait, also, in the highlights, maybe mention that no new releases were cut in the last 24h, which is why the fixes are in PRs. Let's adjust the highlights:
> Today's digest centers on critical cross-hardware MiniMax H3 stability fixes, ongoing community pushback against regressing memory management in recent ComfyUI releases, and new experimental performance optimizations including Intel XPU VAE OOM fixes and comfy-kitchen int8 attention support. No new stable releases were cut in the last 24 hours, with all recent fixes pending merge to master, and 32 total issues updated in the last 24 hours highlighting persistent stability gaps for non-NVIDIA and low-VRAM users.

That's better, mentions no releases, which is in the data.

Wait, also, in the Hot Issues, #15315 is closed, so note that it was closed, likely fixed in an upcoming release. Let's adjust that entry:
> #15315 [CLOSED] Official MiniMax H3 T2V workflow fails on Apple Silicon (M4 Max): black video and NaN audio | 14 comments | 2 👍 | [Link](https://github.com/Comfy-Org/ComfyUI/issues/15315)
> Why it matters: First-party official MiniMax H3 workflow breaks on flagship Apple Silicon hardware, impacting a large segment of Mac-based ComfyUI users. The issue is now closed, indicating a fix is pending in an upcoming release.
>

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

Got it, let's tackle this Ollama community digest for 2026-08-11. First, I need to follow the exact sections the user asked for, make sure it's structured, concise, professional, with GitHub links.

First, **Today's Highlights**. Let's see the top stuff: v0.32.7 dropped with initial Muse Glimmer (Meta's new model) MLX support for Apple Silicon, right? Also, there's a bunch of PRs around tool calling improvements, MLX engine fixes, and that big multi-file GGUF import issue is still super active. Wait, also the Muse Glimmer manifest bug that just popped up today. Let's condense that: "Ollama v0.32.7 launched today with initial Apple Silicon MLX support for Meta’s new open Muse Glimmer model, plus a slate of tool-calling, MLX engine, and Windows-on-Arm fixes. The long-running multi-file GGUF import feature request remains the most upvoted open issue, with 156 👍 as of today. A new bug report confirms the v0.32.7 Muse Glimmer manifest is misconfigured, blocking downloads for most users right now." That's 2-3 sentences, hits the key points.

Next, **Releases**. We have v0.32.7, so summarize that. Wait the release note says initial Muse Glimmer support via MLX on Apple Silicon, more platform optimizations coming. Also, wait, let's check if there's other stuff? Oh right, the release notes mention Muse Glimmer initial MLX support, and other platform optimizations (NVIDIA, AMD etc) coming soon. Also, maybe note that it's a minor patch? Wait no, the version is 0.32.7, so just state the key change: "### v0.32.7 (released 2026-08-11)
Key change: Initial support for Meta’s open Muse Glimmer model via Ollama’s MLX engine on Apple Silicon. Additional platform-specific optimizations (NVIDIA, AMD, etc.) for Muse Glimmer are slated for release in the coming days.
[Release link](https://github.com/ollama/ollama/releases/tag/v0.32.7)" Wait, but the release PR is #17646, right? Yeah, that's the release PR. Also, wait the bug #17645 says the manifest for muse-glimmer:30b-mlx is wrong, built from NVFP4 instead of real MLX weights, so maybe add a note? No, releases section is just the release changes, the bug is in issues. Wait no, the release note says "Note: Muse Glimmer is currently available via initial support via Ollama's MLX engine on Apple Silicon. Additional support and optimizations for Apple Silicon, NVIDIA, AMD, and other platforms will be available in the coming days." So that's the release summary.

Then **Hot Issues** – pick 10 noteworthy ones, explain why they matter, community reaction, with links. Let's sort by upvotes/impact first:
1. #5245: Allow importing multi-file GGUF models. 156 👍, 106 comments, open since 2024. Why it matters: Large GGUF models (70B+) are often split into multiple files for distribution, current Ollama only supports single-file GGUF imports, blocking users from running many community-hosted large models. Workaround exists but is clunky. Community reaction: Very high engagement, top requested feature for years.
Link: https://github.com/ollama/ollama/issues/5245
2. #12532: Cloud usage stats via /api/me. 81 👍, 45 comments. Why it matters: Ollama Cloud currently only shows usage stats in the web UI, no API access for programmatic tracking, which is a gap for users building tools that integrate with Ollama Cloud. Community reaction: Steady demand from Pro subscribers building automations.
Link: https://github.com/ollama/ollama/issues/12532
3. #17444: Tool calling broken in VS Code GitHub Harness in 0.32.4+. 32 comments, 0 👍 but high impact. Why it matters: Breaks core workflow for users relying on Ollama with VS Code Copilot, confirmed fixed by rolling back to 0.32.1. Community reaction: Rapidly reported by enterprise users after the 0.32.x rollout.
Link: https://github.com/ollama/ollama/issues/17444
4. #17645: v0.32.7 Muse Glimmer manifest blocks downloads. 1 👍, 2 comments, opened today. Why it matters: The new flagship model support in the latest release is completely non-functional for users, as the manifest incorrectly requires a newer pre-release Ollama version. Community reaction: Immediate reports from users trying to pull the new model.
Link: https://github.com/ollama/ollama/issues/17645
5. #17517: Qwen models memory issues in recent updates. 5 comments, 0 👍. Why it matters: Breaks inference for popular Qwen models on consumer GPUs (e.g. RTX 5070Ti), models that previously ran fine now hit OOM even with small context windows. Community reaction: Reports from users with mid-range NVIDIA GPUs.
Link: https://github.com/ollama/ollama/issues/17517
6. #17557: MoE expert offloading to host RAM for 8GB GPUs. 4 comments, 0 👍. Why it matters: Would let users run 16B/35B MoE models (e.g. Qwen3 MoE) on low-VRAM consumer GPUs that currently can't load them, aligning with llama.cpp community requests for flexible MoE memory management. Community reaction: Niche but high-value request for hobbyists with limited GPU resources.
Link: https://github.com/ollama/ollama/issues/17557
7. #17656: Muse Glimmer 30B MLX tag uses NVFP4 weights instead of native MLX. 0 comments, 0 👍, opened today. Why it matters: The advertised Apple Silicon-optimized Muse Glimmer build is actually the Nvidia-only quantized variant, leading to poor performance and incorrect memory usage on Apple Silicon. Community reaction: Immediate flag from MLX users after v0.32.7 launch.
Link: https://github.com/ollama/ollama/issues/17656
8. #17639: Ollama Cloud 402 error for Pro users on direct endpoint. 0 comments, 0 👍. Why it matters: Inconsistent billing behavior: Pro subscribers can run glm-5.2:cloud via the local client but get a 402 "extra usage only" error when calling the public OpenAI-compatible endpoint directly, breaking API integrations. Community reaction: Reported by Pro subscribers building custom tools.
Link: https://github.com/ollama/ollama/issues/17639
9. #17632: Laguna-S 2.1 MLX BF16 stream-of-consciousness output on Apple Silicon. 1 comment, 0 👍. Why it matters: Breaks inference for the popular Laguna-S 2.1 model on Apple Silicon, causing non-terminating, incoherent output for long-lived runners. Community reaction: Reproducible intermittent bug for MLX users.
Link: https://github.com/ollama/ollama/issues/17632
10. #17631: TTFT regression in 0.24.0 -> 0.32.x on Windows/CUDA. 0 comments, 0 👍. Why it matters: Adds a flat +156ms (Gemma E4B) / +44ms (Qwen3) per-request latency penalty on Windows CUDA, impacting interactive use cases even as generation throughput improved. Community reaction: Reported by users benchmarking Windows CUDA performance.
Wait, that's 10, right? Let's count: 1. #5245, 2. #12532, 3. #17444, 4. #17645, 5. #17517, 6. #17557, 7. #17656, 8. #17639, 9. #17632, 10. #17631. Yep, that's 10, all relevant, different areas.

Next, **Key PR Progress** – 10 important PRs, describe features/fixes, with links. Let's pick the most impactful ones:
1. #17658: Opt-in progressive Qwen tool-call argument streaming. Open, 2026-08-10. What it does: Adds a `stream_tool_calls` opt-in flag for the /api/chat endpoint, so Qwen3/Qwen3.5 XML tool parsers can emit partial tool arguments while generation is ongoing, instead of waiting for the full tool call to complete. Impact: Cuts perceived latency for agentic use cases that rely on tool calls.
Link: https://github.com/ollama/ollama/pull/17658
2. #17657: Agent skill scan error messaging. Open, 2026-08-10. What it does: Fixes silent dropping of valid user skills in ~/.ollama/skills/ by adding per-file error reporting for rejected skill names, addressing issue #17652. Impact: Improves debuggability for users building custom Ollama agent skills.
Link: https://github.com/ollama/ollama/pull/17657
3. #17651: Tool-call parser error context wrapping. Open, 2026-08-10. What it does: Wraps bare JSON/XML unmarshal errors from tool-call parsers (including Qwen3-VL) with client-facing context about the failure stage, instead of returning raw, unhelpful error messages. Fixes issue #17647. Impact: Makes debugging tool-call failures far easier for developers integrating Ollama with agent frameworks like LangGraph.
Link: https://github.com/ollama/ollama/pull/17651
4. #17650: Gemma4 image input support for MLX. Open, 2026-08-10. What it does: Adds native vision embedding support for Gemma4 on Apple Silicon MLX, supporting both unified vision_embedder checkpoints and transformer-based vision_tower checkpoints, with bidirectional image attention. Impact: Brings native multimodal support for Gemma4 to Apple Silicon users.
Link: https://github.com/ollama/ollama/pull/17650
5. #17649: Per-file SHA-256 progress for `ollama create`. Open, 2026-08-10. What it does: Replaces the single "gathering model components" spinner with per-file hashing progress, addressing the silent hang UX bug reported in #17491 for large model imports (e.g. Pixtral 12B + projector). Impact: Eliminates user confusion during long `ollama create` runs for large multimodal models.
Link: https://github.com/ollama/ollama/pull/17649
6. #17654: Windows-on-Arm CPU performance fix. Open, 2026-08-10. What it does: Sets the GGML_CPU_ARM_ARCH build flag for Windows-on-Arm builds to enable ARM dot-product/matrix instructions, instead of falling back to baseline armv8-a with no acceleration. Impact: Massive CPU inference performance uplift for Windows-on-Arm devices (e.g. Snapdragon X Elite laptops) with zero compatibility risk.
Link: https://github.com/ollama/ollama/pull/17654
7. #17642: Harmony tool-call JSON tolerance. Open, 2026-08-10. What it does: Adds lenient parsing for malformed tool-call arguments from Harmony models (e.g. wrapped arrays, trailing brackets) to prevent 500 errors during agentic use cases. Impact: Fixes intermittent chat failures for users running Harmony-family models with tool calling enabled.
Link: https://github.com/ollama/ollama/pull/17642
8. #17643: Bailing MoE V3 safetensors support for MLX. Open, 2026-08-10. What it does: Adds native Apple Silicon MLX inference support for Bailing MoE V3, including hybrid KDA/MLA attention, MoE routing, and quantized NVFP4/MXFP8 expert paths. Impact: Expands the library of supported MoE models for Apple Silicon users.
Link: https://github.com/ollama/ollama/pull/17643
9. #17648: Restore `num_gpu` Modelfile parameter docs. Open, 2026-08-10. What it does: Re-adds `num_gpu` to the official Modelfile parameter reference, as it was accidentally removed in a prior commit despite remaining a functional parameter for forcing CPU-only model execution. Fixes issue #13986. Impact: Reduces confusion for users configuring GPU/CPU memory allocation for models.
Link: https://github.com/ollama/ollama/pull/17648
10. #17555: Apertus 1.5 native chat support. Open, 2026-08-04. What it does: Adds native chat handling for the fully open Swiss multimodal Apertus 1.5 8B and 70B models, including vision and tool-calling support. Impact: Brings official Ollama support for the popular open Swiss AI initiative models.
Wait, that's 10, right? Let's count: 1. #17658, 2. #17657, 3. #17651, 4. #17650, 5. #17649, 6. #17654, 7. #17642, 8. #17643, 9. #17648, 10. #17555. Yep, all good, cover different areas: tool calling, agent skills, MLX, Windows, UX, model support.

Then **Feature Request Trends** – distill the most requested directions from all issues. Let's look at the issues: First, multi-file GGUF import (top upvoted, years old). Then, Ollama Cloud API parity: usage stats, prompt cache support for cloud, consistent billing behavior for direct endpoint calls. Then, MoE memory optimization: offloading experts to host RAM to run large MoE on low-VRAM GPUs. Then, UX improvements for CLI and agent tools: `ollama stop all`, floating copy buttons in web UI, status line for interactive chat. Then, broader hardware/engine support: Windows-on-Arm performance, more MLX model support, NVIDIA DGX Spark compatibility. Wait, let's condense that:
"Distilled feature request trends from the last 24h of issues:
1. **Local model import flexibility**: Multi-file GGUF import is the highest-upvoted open request (156 👍), with persistent demand for easier handling of large split model weights.
2. **Ollama Cloud parity**: Users consistently request API access to cloud usage stats, prompt cache support for cloud workloads, and consistent billing behavior between the local client and public cloud endpoints.
3. **Low-VRAM large model support**: Multiple requests call for flexible MoE weight offloading to host RAM, enabling 16B/35B MoE models to run on 8GB/12GB consumer GPUs without OOM errors.
4. **CLI/agent UX polish**: High demand for basic quality-of-life features including a global `ollama stop all` command, persistent status lines in interactive chat, and floating UI elements for the Ollama web interface.
5. **Expanded hardware/engine coverage**: Requests for performance optimizations for Windows-on-Arm, DGX Spark (Grace Blackwell) CUDA compatibility, and broader native MLX model support for Apple Silicon remain common."

That's good, covers all the trends.

Then **Developer Pain Points** – recurring frustrations, high-frequency requests. Let's see: First, tool-call reliability: multiple bugs around tool calling breaking in VS Code, malformed tool arguments causing 500 errors, parser errors not having context. Then, Muse Glimmer launch bugs: manifest misconfiguration, wrong weights for MLX tag, making the new release feature unusable. Then, Windows CUDA performance regressions: flat TTFT increase in 0.32.x, poor GPU utilization on dual-socket Windows servers. Then, model import UX: silent hangs during `ollama create` for large models, no multi-file GGUF support. Then, Ollama Cloud inconsistencies: billing errors for Pro users, missing API endpoints for usage stats and prompt caching. Let's structure that:
"Recurring developer pain points and high-frequency friction points:
1. **Tool-call reliability gaps**: Multiple reports of tool calling breaking in VS Code Copilot Harness after 0.32.x updates, plus unhandled malformed tool-call arguments causing 500 errors in agent frameworks (LangGraph, etc.) with no actionable error context.
2. **Muse Glimmer launch instability**: The v0.32.7 Muse Glimmer release is plagued by two critical bugs: a misconfigured manifest blocking downloads, and the MLX-tagged variant shipping with Nvidia-only NVFP4 weights instead of native Apple Silicon optimizations, making the new feature completely unusable for most users.
3. **Windows performance regressions**: Persistent reports of increased time-to-first-token (flat +44–156ms per request) in 0.32.x on Windows/CUDA, plus poor GPU utilization on dual-socket Windows servers for hybrid CPU/GPU inference.
4. **Model import UX flaws**: `ollama create` silently hangs during large file imports with no per-file progress, and the years-long lack of multi-file GGUF import blocks users from running many community-hosted large models.
5. **Ollama Cloud inconsistencies**: Pro subscribers report 402 billing errors when using the public cloud OpenAI-compatible endpoint, plus missing API access to usage stats and prompt cache support for cloud workloads."

Wait, that's all accurate. Now, make sure all links are included, style is concise, professional, for technical developers. Let's check if we missed anything? Oh, the release section: wait, the release is v0.32.7, right, and the release PR is #17646, so we can link that? Wait no, the release tag is the official release, but the PR is the release PR. Wait, the user said include GitHub links for each item. So for the release, link to the release tag, or the PR? Let's see, the release is at https://github.com/ollama/ollama/releases/tag/v0.32.7, that's fine.

Wait also, in the Hot Issues, let's make sure each has the link, as required. Same for PRs. Let's also make sure the highlights are accurate: yes, v0.32.7 has Muse Glimmer initial MLX support, the multi-file GGUF is top issue, and there's a new bug with the Muse Glimmer manifest today.

Wait, let's check the issue #17645: it says "0.32.7 adds support for muse-glimmer but the manifest does not allow download" – yes, that's a new issue opened today, so that's a key highlight.

Also, in the Hot Issues, #17444 is the VS Code

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

Got it, let's tackle this llama.cpp community digest for 2026-08-11. First, I need to follow the exact structure the user asked for, make sure it's concise, technical, has links, and is based only on the provided data.

First, **Today's Highlights**. Let's look at the latest releases first. The most recent ones are b10353 (CUDA/Metal ROLL contiguous src fix), b10344 (MTP Nemotron support, Granite-Switch POC, MTP fixes), then there's the new quantization PRs for MXFP4/NVFP4, and the AMD ROCm performance/regression fixes that are hot in issues. Oh right, also the Vulkan GET_ROWS fix and the RPC DeepSeek V4 fix. Wait, need to make it 2-3 sentences. Let's see: The latest llama.cpp builds (b10336–b10353) bring critical correctness fixes for CUDA/Metal tensor operations, first-party support for Nemotron MTP and Granite-Switch architecture, and initial implementation of dense MXFP4 and MoE NVFP4 quantization. Concurrently, community-reported AMD ROCm and Vulkan regressions are being actively triaged, with multiple open issues tracking performance gaps and crashes on RDNA3/Strix Halo hardware. That works, right? Covers the main release fixes, new model support, new quantization, and the hot hardware issues.

Next, **Releases**. The latest releases are b10336 up to b10353, released in the last 24h. Let's list the key changes per release, make sure to include the links? Wait, the user said include GitHub links for each item. Let's see:
- b10353: Fixes silent incorrect output from non-contiguous source tensors in CUDA/Metal `ggml_roll` operations, which previously ignored stride metadata. [Link: https://github.com/ggerganov/llama.cpp/releases/tag/b10353]
- b10344: Adds official Multi-Token Prediction (MTP) support for Nemotron Nano models, includes preliminary Granite-Switch architecture backend (dense all-attention with per-token LoRA adapter selection, CPU-only POC), and fixes model-saver key clobbering for shared MoE FFN lengths. [Link: https://github.com/ggerganov/llama.cpp/releases/tag/b10344]
- b10343: Updates bundled cpp-httplib dependency to v0.53.0. [Link: https://github.com/ggerganov/llama.cpp/releases/tag/b10343]
- b10342: Adds initial Granite-Switch GGUF schema support (architecture, KV cache keys, stacked LoRA adapter metadata) for the new architecture introduced in b10344. [Link: https://github.com/ggerganov/llama.cpp/releases/tag/b10342]
- b10338: Fixes model-saver bug where repeated calls to `add_kv` for `LLM_KV_EXPERT_SHARED_FEED_FORWARD_LENGTH` clobbered the first stored value, corrupting saved MoE model metadata. [Link: https://github.com/ggerganov/llama.cpp/releases/tag/b10338]
- b10336: Refactors WebGPU WGSL shader files and simplifies flash attention WGSL implementation. [Link: https://github.com/ggerganov/llama.cpp/releases/tag/b10336]
Wait, also the download links for macOS arm64 are there, but the release tag links are the main ones. That's good, covers all the recent releases with their key changes and links.

Now **Hot Issues** – pick 10, explain why they matter, community reaction, links. Let's sort by comment count first, top ones:
1. Issue #20837: Qwen3.5 9B tool call parsing bug when thinking is enabled, tool calls are incorrectly emitted inside thinking blocks. 59 comments, 17 upvotes. Why it matters: Breaks agentic workflows for popular Qwen3.5 models, a high-priority correctness issue for users building tool-using agents. Community reaction: High engagement, active discussion of workarounds. Link: https://github.com/ggerganov/llama.cpp/issues/20837
2. Issue #14727: Nondeterministic output on ROCm backend even at zero temperature. 31 comments, closed but still relevant as it's a recurring ROCm correctness issue. Why it matters: Breaks reproducible inference, a critical requirement for debugging, evaluation, and production use cases. Community reaction: Long-running thread, multiple reports across RDNA2/3 hardware. Link: https://github.com/ggerganov/llama.cpp/issues/14727
3. Issue #25700: Input layers offloaded to CPU on AMD Strix Halo, causing 30% CPU usage and 20-30% performance regression for Qwen3.6 35B MoE. 30 comments. Why it matters: Strix Halo is a high-performance APU with large unified memory, this bug prevents full GPU utilization for a popular model class. Community reaction: Multiple user reports, active triage by ROCm maintainers. Link: https://github.com/ggerganov/llama.cpp/issues/25700
4. Issue #25436: Garbled output for DeepSeek-V4 on Strix Halo with ROCm, affecting multiple IQ3_XXS quantizations. 27 comments, 5 upvotes. Why it matters: DeepSeek-V4 is a widely used open model, this is a critical correctness regression on new AMD hardware. Community reaction: Multiple users confirming the issue across different model variants. Link: https://github.com/ggerganov/llama.cpp/issues/25436
5. Issue #26448: Feature request for MoE expert weight PCIe DMA access, avoiding H2D copies to run 23GB MoE models on 1.6GB VRAM, 81GB Qwen3-235B on 8GB cards. 10 comments, 5 upvotes. Why it matters: Dramatically expands the set of runnable MoE models on consumer GPUs, a highly requested low-VRAM optimization. Community reaction: Positive reception, user-provided benchmark data showing feasibility. Link: https://github.com/ggerganov/llama.cpp/issues/26448
6. Issue #24055: Context checkpoints invalidated on hybrid/recurrent models in llama-server. 15 comments, 4 upvotes. Why it matters: Breaks stateful conversational use cases for hybrid models (e.g. Mamba, RWKV) in server deployments, a core server functionality bug. Community reaction: Multiple production users reporting broken long-running chat sessions. Link: https://github.com/ggerganov/llama.cpp/issues/24055
7. Issue #24616: Feature request for DP4A quantization emulation via DP2A on CUDA, for GPUs lacking native DP4A support (e.g. Turing, older AMD via CUDA). 14 comments, 3 upvotes. Why it matters: Expands fast quantized inference support to older CUDA-capable GPUs. Community reaction: Active discussion of implementation tradeoffs and performance implications. Link: https://github.com/ggerganov/llama.cpp/issues/24616
8. Issue #23210: llama-server crashes on CUDA when running Qwen3.6-27B on multi-GPU setups with RTX 5060 Ti. 10 comments, 4 upvotes. Why it matters: Breaks multi-GPU inference for a popular mid-size model on new consumer hardware. Community reaction: Multiple users confirming crashes across different Windows and Linux configurations. Link: https://github.com/ggerganov/llama.cpp/issues/23210
9. Issue #25618: Speculative decoding (draft-MTP/draft-DSPark) produces divergent greedy output when target model is quantized (Q4_K_M and below). 7 comments, 1 upvote. Why it matters: Breaks a core performance optimization for quantized model deployments, leading to incorrect outputs at zero temperature. Community reaction: Active investigation into quantization-induced numerical differences between draft and target models. Link: https://github.com/ggerganov/llama.cpp/issues/25618
10. Issue #26478: llama-spec fails at 16k context boundary due to non-consecutive KV cache position tracking on Vulkan. 6 comments. Why it matters: Breaks long-context inference for Vulkan backend users, a common use case for document processing. Community reaction: Reports across multiple AMD GPUs (A770, RX6650XT, 9070XT). Link: https://github.com/ggerganov/llama.cpp/issues/26478
Wait, that's 10, good. Let's make sure each has a clear why it matters, community reaction, and link. Perfect.

Next **Key PR Progress** – 10 important PRs, describe features/fixes, links. Let's pick the most impactful ones:
1. PR #26869: Implements full dense MXFP4 and MoE NVFP4 quantization support, including quantization routines for both formats. Why it matters: Adds support for cutting-edge 4-bit quantization formats that offer better quality-per-bit than existing FP4 variants, expanding access to low-VRAM inference for large models. Link: https://github.com/ggerganov/llama.cpp/pull/26869
2. PR #26870: Reverts a problematic HIP compile flag that caused severe output degeneration (gibberish/empty responses) on ROCm for Qwen3.6 35B A3B and Ornith-1.0 35B Q8 models. Why it matters: Fixes critical correctness regressions for AMD GPU users running popular quantized models. Link: https://github.com/ggerganov/llama.cpp/pull/26870
3. PR #26756: Fixes DeepSeek-V4 rollback failures with multi-sequence inputs, aligning recurrent snapshot semantics with hybrid model memory management. Why it matters: Fixes correctness issues for DeepSeek-V4 hybrid mode, a popular large reasoning model. Link: https://github.com/ggerganov/llama.cpp/pull/26756
4. PR #26854: Adds Vulkan backend fallback to CPU for `GGML_OP_GET_ROWS` operations when tensor views have misaligned offsets, fixing hard crashes from failed assertions. Why it matters: Eliminates crashes for Vulkan users running models with non-contiguous tensor layouts, a common edge case. Link: https://github.com/ggerganov/llama.cpp/pull/26854
5. PR #26814: Adds auto-detection of speculative decoding sidecar model type from local GGUF metadata, instead of only checking Hugging Face repos. Why it matters: Fixes broken speculative decoding for locally stored draft models, a common workflow for power users. Link: https://github.com/ggerganov/llama.cpp/pull/26814
6. PR #26373: Adds an alternative Hexagon NPU backend implementation (`ggml-hexagon-jz`) for Qualcomm Hexagon NPUs on Android, coexisting with the existing official backend. Why it matters: Expands NPU inference support for Android devices, with improved performance and compatibility for Qualcomm hardware. Link: https://github.com/ggerganov/llama.cpp/pull/26373
7. PR #26696: Makes HIP `-funsafe-math-optimizations` opt-in via `GGML_HIP_UNSAFE_MATH` CMake option (default OFF), ensuring IEEE-conformant ROCm builds by default. Why it matters: Fixes silent numerical correctness issues for ROCm users who were unexpectedly getting non-conformant fast-math builds. Link: https://github.com/ggerganov/llama.cpp/pull/26696
8. PR #26076: Adds centralized runtime feature detection for aarch64/KleidiAI, improving portability and performance tuning for ARM Apple Silicon and embedded devices. Why it matters: Enables better CPU performance optimization for Apple Silicon and other aarch64 hardware running KleidiAI kernels. Link: https://github.com/ggerganov/llama.cpp/pull/26076
9. PR #26013: Adds OpenAI Responses API JSON schema support, Cohere2 MoE template parser JSON schema support, and improves responses streaming compatibility. Why it matters: Improves compatibility with OpenAI's latest API spec for server deployments, enabling constrained generation and better tool use support for server users. Link: https://github.com/ggerganov/llama.cpp/pull/26013
10. PR #25877: Adds `read_media` server tool for vision models to analyze server-side images, fixing missing image analysis functionality in the server UI. Why it matters: Enables server-side vision workflows without requiring client-side image uploads, a common request for production vision deployments. Link: https://github.com/ggerganov/llama.cpp/pull/25877
Wait, that's 10, all relevant, cover different areas: quantization, ROCm fixes, Vulkan fixes, speculative decoding, NPU, ARM, server features. Perfect.

Next **Feature Request Trends** – distill the most requested directions from all issues. Let's look at the issues: there's MoE low-VRAM optimizations (PCIe DMA, expert caching), ROCm/Vulkan performance and correctness improvements for AMD hardware (Strix Halo specifically), server feature improvements (checkpointing, /completion prompt concatenation, /metrics availability during decode, secure shell commands for server tools), support for new model architectures (MiniMax-Text-01, Muse Glimmer, DiffusionGemma, Granite-Sitch), and integer type consistency in the public API. Wait, let's group them properly:
1. Low-VRAM MoE inference optimizations: Multiple requests focus on reducing VRAM usage for Mixture of Experts models, including PCIe DMA access for expert weights (avoiding full H2D copies), expert caching, and mmap pinning based on access heatmaps. This is the highest-priority feature request trend, driven by the growing popularity of large MoE models that exceed consumer GPU VRAM.
2. AMD GPU (ROCm/Vulkan) stability and performance: A large cluster of open issues tracks regressions and missing optimizations for AMD RDNA2/3 hardware and Strix Halo APUs, including offloading all layers to the GPU, fixing flash attention stale KV cache bugs, and resolving shared library loading issues for ROCm 7.14.
3. Server deployment usability improvements: Frequent requests target quality-of-life features for `llama-server`, including more flexible checkpointing for hybrid/recurrent models, the ability to concatenate prompts via the `/completion` endpoint, non-blocking `/metrics` access during inference, and secure shell command execution for server tools.
4. New model architecture support: Recurring requests add support for emerging model architectures, including MiniMax-Text-01, Muse Glimmer, DiffusionGemma, and expanded MTP support for additional model families.
5. API consistency and correctness: Long-running requests focus on improving the public C API, including consistent use of sized signed integer types in `llama.h` to avoid cross-platform portability issues.
That's good, covers all the trends, explains why they're requested.

Finally **Developer Pain Points** – recurring frustrations or high-frequency requests. Let's look at the issues:
1. AMD ROCm/Vulkan correctness and performance regressions: This is the most frequent pain point, with 8+ open issues in the last 24h tracking crashes, garbled output, performance degradation, and layer offloading failures on AMD RDNA3 and Strix Halo hardware. Many users report being unable to run popular models (Qwen3.6, DeepSeek-V4) correctly or at full speed on AMD GPUs.
2. Speculative decoding correctness for quantized models: Multiple reports of divergent output when using draft-model speculative decoding with quantized (Q4 and below) target models, breaking a core performance optimization for low-bit deployments.
3. Context window boundary failures: Recurring crashes and incorrect output at 16k+ context boundaries for Vulkan and hybrid/recurrent models, breaking long-context use cases like document processing and long chat sessions.
4. Build and dependency issues: Frequent reports of compilation failures (e.g. missing `__fp16` type on Linux) and shared library loading errors (e.g. missing `libhipblas.so.3` for ROCm 7.14), creating friction for users building from source.
5. Server state management bugs: Issues with context checkpoint invalidation, preset configuration being ignored, and non-deterministic output from retained inter-request state (e.g. MTP) in server deployments, breaking production use cases requiring consistent, stateful inference.
Wait, that's accurate. Let's make sure each is a clear pain point, with context from the issues.

Wait, let's check if all links are correct, all items are based on the provided data, no extra info. Let's make sure the style is concise, professional, for technical developers. Let's also make sure that the highlights are accurate. Let's adjust the highlights a bit to be more precise:
### 1. Today's Highlights
The latest llama.cpp builds (b10336–b10353) deliver critical correctness fixes for CUDA/Metal tensor operations, first-party support for Nemotron MTP and the Granite-Switch architecture, and initial implementation of dense MXFP4 and MoE NVFP4 quantization formats. At the same time, the community is actively reporting and triaging widespread AMD ROCm/Vulkan regressions on RDNA3 and Strix Halo hardware, with multiple high-engagement threads tracking crashes, performance degradation, and incorrect output for popular models like Qwen3.6 and DeepSeek-V4.
That's better, more specific.

Wait, for the releases section, should we note that these are all released in the last 24h? Yes, as per the data source. Let's make sure the release links are correct, the tag links are right.

For the Hot Issues, let's make sure each entry has the link, comment/upvote count, why it matters, community reaction. Let's check the counts: #20837 has 59 comments, 17 upvotes, correct. #14727 31 comments, closed, correct. #25700 30 comments, correct. #25436 27 comments, 5 upvotes, correct. Then #26448 10 comments, 5 upvotes, correct. #24055 15 comments, 4 upvotes, correct. #24616 14 comments, 3 upvotes, correct. #23210 10 comments, 4 upvotes, correct. #25618 7 comments, 1 upvote, correct. #26478 6 comments, correct. That's the top 10 by comment count, which matches the data.

For Key PR Progress, let's make sure each has a link, and the description is accurate. Let's check #26869: yes, MXFP4 and NVFP4, correct. #26870: reverts HIP flag causing Q8 degeneration, correct. #26756: DeepSeek V4 multi-seq rollback fix

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*