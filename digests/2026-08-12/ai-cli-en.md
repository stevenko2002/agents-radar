# AI CLI Tools Community Digest 2026-08-12

> Generated: 2026-08-11 22:15 UTC | Tools covered: 12

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

### Today's Highlights (2026-08-12)
1. **OpenAI Codex**: Two new Rust CLI alpha builds (v0.148.0-alpha.7 and v0.148.0-alpha.8) shipped today, alongside a merged fix for the v0.147.0 Esc-Esc backtracking regression that broke persisted TUI thread navigation. [Link](https://github.com/openai/codex)
2. **Gemini CLI**: v0.56.0-preview.1 released today with a critical MCP OAuth token refresh fix and a patch for a CRITICAL severity simple-git CVE (CVE-2026-28292) affecting all git operations in the CLI. [Link](https://github.com/google-gemini/gemini-cli)
3. **Qwen Code**: v0.21.10 stable launched today, adding configurable ACP reasoning effort levels (Default to Max) for coding workflows and Web Shell image preview support for uploaded/pasted assets. [Link](https://github.com/QwenLM/qwen-code)
4. **CodeWhale TUI (DeepSeek TUI)**: A critical subagent recursion depth bug that could cause runaway resource usage was merged and closed today, alongside open PRs for Windows picture-in-picture terminal pinning and OrcaRouter provider integration. [Link](https://github.com/Hmbown/CodeWhale)
5. **Ollama**: v0.32.9 released today, adding the 30B NVIDIA Nemotron 3.5 Lightning mixture-of-experts model built for always-on agent execution use cases. [Link](https://github.com/ollama/ollama)
6. **llama.cpp**: Multiple new releases today (b10356–b10361) introduced official ROCm 7.14 support (the first production release using AMD's TheRock build system), multi-output sampling for speculative decoding, and fixes for DeepSeek V4 and Gemma 4 crashes across CUDA/ROCm/Vulkan backends. [Link](https://github.com/ggml-org/llama.cpp)
7. **Pi**: Three key fixes merged today for the v0.84.0 release: restored mid-run usage metrics in streaming events, fixed edit tool fuzzy matching failures on whitespace differences, and resolved permanent hangs on stalled OpenAI-compatible SSE streams. [Link](https://github.com/earendil-works/pi)

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-08-12, sourced from [anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. Top Skills Ranking
Sorted by community attention (cross-referenced with linked issue volume and related activity):
1. **PR #1298: Fix skill-creator run_eval.py 0% recall bug** ([link](https://github.com/anthropics/skills/pull/1298))
   - Functionality: Fixes a critical flaw in the core skill development pipeline where `run_eval.py` incorrectly reported 0% recall for all skill descriptions, breaking the description optimization loop used by `run_loop.py` and `improve_description.py`. The fix also addresses Windows stream reading, trigger detection, and parallel worker bugs.
   - Discussion highlights: Bug has 10+ independent reproductions (linked to Issue #556, 12 comments) and is cross-referenced with 3 other Windows compatibility PRs for skill-creator.
   - Status: Open
2. **PR #514: Add document-typography skill** ([link](https://github.com/anthropics/skills/pull/514))
   - Functionality: Adds typographic quality control for AI-generated documents, automatically fixing orphan word wraps, widow paragraphs, and numbering misalignment that impact all Claude-generated document outputs.
   - Discussion highlights: Praised for addressing a universal, low-effort high-impact pain point for document generation use cases.
   - Status: Open
3. **PR #486: Add ODT (OpenDocument) skill** ([link](https://github.com/an

---

# Claude Code Community Digest
**Date: 2026-08-12 | Source

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Got it, let's tackle this OpenAI Codex community digest. First, I need to follow the structure exactly, right? Let's start with Today's Highlights. First, the latest releases are two alpha builds for the Rust CLI: 0.148.0-alpha.7 and 0.148.0-alpha.8, dropped in the last 24h. Then the big hot issue is #28969 about disabling the 60s auto-resolve for questions, that's got 192 upvotes and 69 comments, that's the top one. Also, there's a bunch of recent performance and bug fixes in PRs, plus a closed issue #37421 about Esc-Esc backtracking in CLI 0.147.0 that got 25 upvotes, fixed. Wait, need to make the highlights 2-3 sentences. Let's see: "On 2026-08-12, the OpenAI Codex repository saw two new alpha releases for the Rust-based CLI (v0.148.0-alpha.7 and v0.148.0-alpha.8) alongside a high volume of community bug reports and core platform PRs. The most discussed open issue is a feature request to add a configurable toggle for the CLI’s 60-second automatic question resolution, which has garnered 192 upvotes and 69 comments since June. A recently closed regression affecting CLI 0.147.0’s Esc-Esc backtracking for persisted threads was also resolved, addressing a top user pain point for TUI workflows." That works, right?

Next, Releases. The two alpha builds are there, no changelogs listed, just the version numbers, so I should note that they are pre-release Rust CLI builds with no detailed changelogs published in the last 24h, but are the latest available versions. Wait, the data says the releases are 0.148.0-alpha.7 and 0.148.0-alpha.8, no summaries, so just state that.

Then Hot Issues, pick 10 noteworthy ones, ordered by comment count/upvotes probably. Let's list them:
1. #28969: Add setting to disable 60s auto-resolve for questions. Why it matters: The current hardcoded 60s auto-resolve for CLI prompts is a pain point for users who need more time to craft responses, especially for complex tasks. Community reaction: 192 upvotes, 69 comments, top discussed issue, high demand for configurability. Link: https://github.com/openai/codex/issues/28969
2. #20880: App silently creates empty ~/Documents/Codex folder on every launch. Why: Unwanted filesystem clutter, breaks user directory hygiene, affects all desktop app users. Reaction: 42 upvotes, 22 comments, widespread annoyance. Link: https://github.com/openai/codex/issues/20880
3. #26984: MCP stdio servers leak pipe fds + orphan child processes causing EMFILE. Why: Breaks long-running CLI sessions that use MCP tools, leads to "Too many open files" crashes, affects Pro/Power users relying on MCP integrations. Reaction: 18 comments, 4 upvotes, critical for MCP workflow stability. Link: https://github.com/openai/codex/issues/26984
4. #23930: App subagent cards remain stuck after close, despite no live agent reported. Why: UI inconsistency confuses users about active subagent state, wastes screen space, impacts multi-agent workflow usability. Reaction: 16 comments, 4 upvotes, recurring UI bug reported across multiple threads. Link: https://github.com/openai/codex/issues/23930
5. #22857: Better SSH key auth for remote connections on Desktop/iOS (CLOSED). Why: Addresses a gap in the remote host control feature, enables more secure and seamless SSH workflows for mobile/desktop users. Reaction: 15 comments, 14 upvotes, high interest in remote development use cases. Link: https://github.com/openai/codex/issues/22857
6. #34306: Safety check blocks display of valid cybersecurity content. Why: Overly aggressive content filtering blocks legitimate security research, penetration testing, and defensive security workflows, a critical issue for security-focused developers. Reaction: 13 comments, 8 upvotes, growing reports of false positive blocks. Link: https://github.com/openai/codex/issues/34306
7. #19143: Support pasting images directly into Codex CLI. Why: Eliminates manual file save/attach steps for visual debugging, frontend work, and DevTools troubleshooting, a highly requested quality-of-life feature for TUI users. Reaction: 11 comments, 7 upvotes, consistent demand from frontend and extension developers. Link: https://github.com/openai/codex/issues/19143
8. #37029: Windows Computer Use fails with EPERM lstat on Codex runtime. Why: Breaks core computer use functionality for Windows desktop users, a key feature for automated UI testing and workflow automation. Reaction: 10 comments, 3 upvotes, affects Windows Pro/Max subscribers. Link: https://github.com/openai/codex/issues/37029
9. #26869: Desktop app-server leaks child processes and writes excessive logs after crash. Why: Causes high disk write pressure, stale background processes, and degraded system performance after app crashes, impacts macOS desktop users. Reaction: 10 comments, 4 upvotes, reports of system slowdowns after repeated crashes. Link: https://github.com/openai/codex/issues/26869
10. #37164: Windows Desktop app crashes 10s after UI load with empty CODEX_HOME. Why: Reproducible startup crash for Windows Microsoft Store package users, blocks all app usage for affected users. Reaction: 10 comments, 1 upvote, recent regression impacting new Windows installs. Link: https://github.com/openai/codex/issues/37164
Wait, that's 10, right? Let me check, yes. Make sure each has why it matters and community reaction, plus links.

Next, Key PR Progress, pick 10 important PRs, from the list, ordered by relevance. Let's see:
1. #38078: Reduce cloning in world-state patch handling. What it does: Optimizes core state management by deserializing typed snapshots directly from borrowed JSON, applying merge patches in-place instead of cloning full snapshots, reducing memory overhead and improving performance for long sessions. Status: Closed, merged. Link: https://github.com/openai/codex/pull/38078
2. #38075: Respect rendered width when adding TUI history. What it does: Fixes TUI layout bugs by initializing chat widgets with current terminal width, correctly calculating visible history cells, and fixing diff summary truncation, improving CLI usability on varied terminal sizes. Status: Closed, merged. Link: https://github.com/openai/codex/pull/38075
3. #38074: Track implicit executor skill invocations. What it does: Adds analytics tracking for executor-owned skill document reads and script executions across native and URI working directories, improving visibility into skill usage for developers building custom Codex skills. Status: Closed, merged. Link: https://github.com/openai/codex/pull/38074
4. #38064: Grant Windows sandbox access to the Codex app root. What it does: Fixes Windows sandbox permission issues by applying read/execute ACLs to the Codex app root, resolving tool call failures and permission errors for Windows sandbox users. Status: Closed, merged. Link: https://github.com/openai/codex/pull/38064
5. #38061: Preserve proxy settings for Windows sandbox debug sessions. What it does: Fixes a bug where Windows sandbox debug commands would override persistent proxy settings, enabling network-dependent tool calls and debugging workflows for enterprise users. Status: Closed, merged. Link: https://github.com/openai/codex/pull/38061
6. #38060: Disable storage for Azure Responses requests. What it does: Simplifies Azure provider request handling by setting `store: false` for all Responses API requests, removing provider-specific storage checks and reducing unexpected request behavior for Azure-hosted model users. Status: Closed, merged. Link: https://github.com/openai/codex/pull/38060
7. #38056: Configure PSP routing through the feature system. What it does: Replaces the hidden `--psp` flag with a configurable feature flag for PSP cookie routing to first-party ChatGPT clients, improving configurability for internal and enterprise deployments. Status: Closed, merged. Link: https://github.com/openai/codex/pull/38056
8. #38052: Add per-login MCP OAuth client registration selection. What it does: Adds `--oauth-client-registration` flag to `codex mcp add` and `codex mcp login` commands, supporting auto and DCR (Dynamic Client Registration) modes, improving MCP OAuth workflow flexibility for third-party MCP server integrations. Status: Closed, merged. Link: https://github.com/openai/codex/pull/38052
9. #38049: Harden network proxy credential brokerage. What it does: Improves security by binding OpenAI credentials to `api.openai.com` and trusted HTTPS hosts, adding GitHub credential support for `uploads.github.com`, and standardizing Bearer/token/Basic auth handling for proxy workflows. Status: Closed, merged. Link: https://github.com/openai/codex/pull/38049
10. #31817: Update models.json. What it does: Automated update to the bundled model list, adding support for new model variants and ensuring compatibility with latest released models. Status: Open, pending merge. Link: https://github.com/openai/codex/pull/31817
Wait, that's 10, right? Let's check, yes. The copyberry PRs are all the closed ones merged, plus the open models.json update. That makes sense.

Then Feature Request Trends. Let's look at the open issues, what are the common themes? Let's see:
1. Configurability and user control: Multiple requests for toggles to override hardcoded defaults, including the 60s auto-resolve for questions (#28969), sandbox permission controls, and model selection behavior for custom providers.
2. Cross-platform parity: Consistent requests to align feature sets and behavior across CLI, Desktop (macOS/Windows), iOS, and VS Code extension, including remote SSH auth, conversation sync, and model availability.
3. MCP ecosystem stability: Frequent bug reports around MCP tool call reliability, OAuth support, and fd/process leaks, indicating demand for more robust MCP integration for custom tool workflows.
4. Performance and resource management: Recurring reports of memory leaks, process leaks, disk space bloat, and OOM crashes across all platforms, with users requesting better resource cleanup and telemetry for long-running sessions.
5. Workflow quality-of-life: Requests for features like direct image pasting in CLI, subagent state visibility, activity view snoozing, and manual conversation refresh to reduce friction in daily development workflows.
Wait, that's good, distills the trends from all the issues.

Then Developer Pain Points. Let's summarize the recurring frustrations:
1. Hardcoded behavior with no configuration escape hatches: The 60s auto-resolve for CLI prompts is the most prominent example, with users reporting it interrupts complex task workflows and forces workarounds. Similar complaints exist for sandbox permission prompts and model resolution logic.
2. Cross-platform inconsistency: Windows users report frequent startup crashes, process leaks, and permission errors not seen on macOS, while iOS/desktop feature gaps (like SSH key auth) limit cross-device workflow consistency.
3. Resource leaks in long-running sessions: Multiple reports of memory, file descriptor, and process leaks across CLI, Desktop app, and app-server, leading to EMFILE errors, OOM crashes, and system slowdowns after hours of use, especially for Pro/Power users running multi-agent or MCP-heavy workflows.
4. Overly aggressive content filtering: Legitimate security research, defensive cybersecurity, and custom model workflows are being blocked by the safety check system, requiring users to file bug reports for false positives.
5. UI/UX inconsistencies: Stuck subagent cards, untranslated UI strings, unresponsive permission buttons, and conversation sync gaps create confusion and reduce productivity for daily users.
Wait, that's accurate, based on the issues.

Wait, let's make sure all links are correct, and the style is concise, professional, for technical developers. Let's check each section again.

Wait, for the Releases section: The latest releases are two pre-release Rust CLI builds: v0.148.0-alpha.7 and v0.148.0-alpha.8, published in the last 24 hours. No detailed changelogs are provided with the releases, but they follow the recent cadence of alpha builds for the CLI. That's correct.

Wait, let's make sure the Hot Issues are ordered properly, the top one is #28969 with 192 upvotes, that's definitely first. Then #20880 with 42 upvotes, then #26984 with 18 comments, etc. That's right.

For the PRs, the copyberry ones are all the merged ones from the last 24h, plus the open models.json update. That's correct, they are the key PRs, mostly performance, security, and feature fixes.

Feature Request Trends: Let's make sure they are distilled from all issues, not just the hot ones. Let's see, the issues include requests for config toggles, cross-platform parity, MCP improvements, performance, QoL features. Yep, that's all there.

Developer Pain Points: The recurring ones are hardcoded no-config options, cross-platform bugs, resource leaks, overzealous content filtering, UI inconsistencies. All supported by the issues listed.

Wait, let's check if I missed any important issues? Let's see, #37421 is closed, 25 upvotes, that's the Esc-Esc backtrack fix, which I mentioned in the highlights, that's good. The Windows startup crash #37164 is in the hot issues, that's right. The MCP fd leak is there, the subagent stuck cards, the SSH auth (closed, but still noteworthy), the safety check block, image pasting, computer use failure, app server leaks, that's 10, correct.

For PRs, the ones that are important: the world-state patch optimization is a core performance fix, TUI width fix is a user-facing bug fix, implicit skill tracking is for developers building skills, Windows sandbox fixes are for Windows users, Azure storage fix is for Azure users, PSP routing is for enterprise, MCP OAuth is for MCP users, proxy credential hardening is security, turn-aware injection and auto-review metadata are core session management, plus the models.json update. That's a good mix.

Wait, let's make sure the links are correct, each issue and PR has the correct GitHub URL. Let's confirm: Issue #28969 is https://github.com/openai/codex/issues/28969, yes. PR #38078 is https://github.com/openai/codex/pull/38078, correct.

Now, let's structure it all properly, make it flow, concise, professional. Let's avoid markdown? Wait, no, the user said structured, but let's make it clear. Wait, the user said structured English digest with the sections, so let's label each section clearly.

Wait, let's draft it out:

# OpenAI Codex Community Digest
Date: 2026-08-12

## 1. Today's Highlights
Two new alpha releases for the Rust-based Codex CLI (v0.148.0-alpha.7 and v0.148.0-alpha.8) were published in the last 24 hours, with no detailed changelogs attached. The most active community discussion centers on a feature request to add a configurable toggle for the CLI’s hardcoded 60-second automatic question resolution, which has accumulated 192 upvotes and 69 comments since its creation in June. A recently closed regression in CLI v0.147.0 that broke Esc-Esc backtracking for persisted threads was also resolved, addressing a top pain point for TUI power users.

## 2. Releases
- **rust-v0.148.0-alpha.7 / rust-v0.148.0-alpha.8**: Latest pre-release Rust CLI builds, published 2026-08-12. No detailed changelogs are included with the release metadata.
No other new stable or pre-release versions were published in the last 24 hours.

## 3. Hot Issues (Top 10 by Community Engagement)
1. **[#28969](https://github.com/openai/codex/issues/28969) [OPEN] Add setting to disable 60s auto-resolve for questions**
   Why it matters: The current hardcoded 60-second timeout for CLI prompt auto-resolution interrupts complex workflows (e.g., multi-step planning, security research) where users need extra time to craft responses. Community reaction: 192 upvotes, 69 comments, the most discussed issue in the repository, with widespread requests for a configurable toggle.
2. **[#20880](https://github.com/openai/codex/issues/20880) [OPEN] App silently creates empty ~/Documents/Codex folder on every launch**
   Why it matters: Unwanted, persistent filesystem clutter breaks user directory hygiene and requires manual cleanup after every app launch, affecting all desktop app users. Community reaction: 42 upvotes, 22 comments, consistent reports of annoyance across macOS and Windows.
3. **[#26984](https://github.com/openai/codex/issues/26984) [OPEN] MCP stdio servers leak pipe fds + orphan child processes → EMFILE crashes**
   Why it matters: Breaks long-running CLI sessions that rely on MCP tool integrations, leading to "Too many open files" errors and crashes for Pro/Power users running MCP-heavy workflows. Community reaction: 18 comments, 4 upvotes, critical for teams using custom MCP servers.
4. **[#23930](https://github.com/openai/codex/issues/23930) [OPEN] App subagent cards remain stuck after close**
   Why it matters: UI inconsistency leaves visible subagent cards for completed/closed agents, confusing users about active workflow state and wasting screen space during multi-agent tasks. Community reaction: 16 comments, 4 upvotes, recurring reports across macOS and Windows desktop builds.
5. **[#22857](https://github.com/openai/codex/issues/22857) [CLOSED] Better SSH key auth for remote connections on Desktop/iOS**
   Why it matters: Addresses a critical gap in the remote host control feature, enabling secure, passwordless SSH workflows for mobile and desktop users managing remote CLI hosts. Community reaction: 15 comments, 14 upvotes, high demand from remote development and DevOps users.
6. **[#34306](https://github.com/openai/codex/issues/34306) [OPEN] Safety check blocks display of valid cybersecurity content**
   Why it matters: Overly aggressive content filtering blocks legitimate security research, penetration testing, and defensive security workflows, a

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Got it, let's tackle this Gemini CLI community digest for 2026-08-12. First, I need to go through all the provided data and structure each section correctly, making sure it's concise, professional, and has the right links.

First, Today's Highlights. Let's see what's the most important stuff from the last 24h. There's the new v0.56.0-preview.1 release with the MCP OAuth token fix, a critical CVE patch for simple-git, a fix for the --resume flag bug that deletes session files, and the OAuth fix for Cloud Workstations. Wait, need to condense that to 2-3 sentences. Let's see: "The Gemini CLI team shipped v0.56.0-preview.1 with a critical fix for MCP OAuth token refresh, alongside a high-priority patch for a simple-git CVE (CVE-2026-28292, CRITICAL severity). A high-impact bug fix for the `--resume` flag that caused unintended session file deletion was also merged, along with a fix for OAuth flow failures in Google Cloud Workstations environments. A new contributor @ParthivNaresh also made their first contribution with the MCP OAuth fix." Yeah that covers the big stuff.

Next, Releases. Let's list the relevant ones from the last 24h. First, v0.56.0-preview.1: what's the change? The main one is the MCP OAuth token refresh fix (PR #28481) plus changelog prep. Then v0.56.0-nightly.20260811.geef19f25c: same MCP OAuth fix, that's the nightly with the change. Then v0.55.1: has two fixes: npm ci script ignore for release verification, and workspace binary shadowing fix in CI (PRs #28116, #28132). Also v0.55.0-preview.3 is a patch for the preview release. Wait, need to summarize each clearly, with links. Let's structure that:
- v0.56.0-preview.1 (released 2026-08-11): Includes a fix for MCP OAuth token refresh that uses stored client IDs (PR #28481), plus preparatory changelog updates. [Link to release]
- v0.56.0-nightly.20260811.geef19f25c (released 2026-08-11): Nightly build shipping the same MCP OAuth token refresh fix as the preview release. [Link to release]
- v0.55.1 (stable): Ships two CI/release pipeline fixes: resolves npm ci script ignore issues during release verification, and prevents workspace binary shadowing in release testing (PRs #28116, #28132). [Link to release]
- v0.55.0-preview.3: Patch release for the v0.55 preview branch, including cherry-picked fixes for the preview release pipeline. [Link to release]
Wait, make sure to note if any are omitted? No, there are new versions, so include them.

Then Hot Issues: pick 10 noteworthy ones, explain why they matter, community reaction, links. Let's go through the top ones by comment count and priority first. Let's list:
1. #22323 (P1, 12 comments, 2 upvotes): Subagent reports GOAL success when hitting MAX_TURNS, hiding interruptions. Why it matters: Misreports of subagent success lead to silent failures in multi-step codebase investigation tasks, making debugging agent behavior extremely difficult for users running complex analysis workflows. Community reaction: High engagement (12 comments) from users reporting similar false positive success states in subagent runs. Link: https://github.com/google-gemini/gemini-cli/issues/22323
2. #21409 (P1, 8 comments, 8 upvotes): Generalist agent hangs indefinitely on simple tasks. Why it matters: A core agent failure mode that breaks basic CLI functionality (e.g. folder creation) for users, requiring manual cancellation after hours of waiting. Community reaction: High upvote count (8) indicates widespread user impact; multiple users confirm disabling subagents resolves the issue. Link: https://github.com/google-gemini/gemini-cli/issues/21409
3. #19873 (P2, 8 comments, 1 upvote): Zero-dependency OS sandboxing for bash tool execution. Why it matters: Proposes leveraging Gemini 3's native bash training to improve codebase exploration efficiency while maintaining security, addressing a core gap in the CLI's tooling capabilities. Community reaction: Active discussion around sandboxing implementation tradeoffs and UX design. Link: https://github.com/google-gemini/gemini-cli/issues/19873
4. #24353 (P1, 7 comments): Robust component-level behavioral evaluations. Why it matters: Follows up on the 76 existing behavioral eval tests to expand test coverage for all 6 supported Gemini models, critical for maintaining release stability across model variants. Community reaction: Active discussion from the evaluation infrastructure team around test scaling. Link: https://github.com/google-gemini/gemini-cli/issues/24353
5. #22745 (P2, 7 comments, 1 upvote): AST-aware file reads, search, and codebase mapping. Why it matters: Aims to reduce token waste and turn count by enabling precise method-boundary reads instead of full file loads, directly improving agent efficiency for large codebases. Community reaction: Interest from users working with large monorepos who report excessive token usage from full file reads. Link: https://github.com/google-gemini/gemini-cli/issues/22745
6. #21968 (P2, 6 comments): Agent fails to auto-use custom skills and subagents. Why it matters: Limits the CLI's ability to leverage user-defined custom workflows, requiring explicit user prompting to activate available skills and reducing out-of-the-box productivity. Community reaction: Anecdotal reports from multiple users confirm the model only uses skills/subagents when explicitly instructed. Link: https://github.com/google-gemini/gemini-cli/issues/21968
7. #26522 (P2, 5 comments): Auto Memory retries low-signal sessions indefinitely. Why it matters: Causes unnecessary background processing overhead and repeated surfacing of irrelevant session data to users, degrading the memory feature's utility. Community reaction: Reports of increased background resource usage from users with large session histories. Link: https://github.com/google-gemini/gemini-cli/issues/26522
8. #26525 (P2, 4 comments): Missing deterministic redaction in Auto Memory, excessive logging. Why it matters: Creates a security risk as sensitive transcript content is sent to the background extraction model before redaction, and logs may expose existing skill configurations. Community reaction: Security-focused users flagging the pre-redaction data exposure as a critical privacy gap. Link: https://github.com/google-gemini/gemini-cli/issues/26525
9. #25166 (P1, 4 comments, 3 upvotes): Shell command execution gets stuck in "Waiting input" after completion. Why it matters: Breaks core shell execution functionality, leaving completed commands marked as active and blocking further CLI interactions. Community reaction: Multiple user reports of the bug occurring with even simple, non-interactive shell commands. Link: https://github.com/google-gemini/gemini-cli/issues/25166
10. #21983 (P1, 4 comments, 1 upvote): Browser subagent fails on Wayland displays. Why it matters: Breaks browser automation functionality for Linux users running Wayland compositors, a common setup for modern Linux desktop environments. Community reaction: Wayland users reporting complete failure of the browser agent feature, with no workaround currently available. Link: https://github.com/google-gemini/gemini-cli/issues/21983
Wait, that's 10, right? Let's count: 1.22323, 2.21409, 3.19873, 4.24353,5.22745,6.21968,7.26522,8.26525,9.25166,10.21983. Yep, those are the most noteworthy, mix of high priority, high comments, high impact.

Then Key PR Progress: pick 10 important PRs, describe features/fixes, links. Let's go through the top ones, prioritize security fixes, high impact bug fixes, feature work. Let's list:
1. PR #28778 (OPEN, CVE fix): Upgrade simple-git to 3.32.3 to address CVE-2026-28292 (CRITICAL severity). Why it matters: Patches a critical vulnerability in the git dependency used for all repository operations in the CLI, preventing potential code execution or data exfiltration via malicious git repositories. Link: https://github.com/google-gemini/gemini-cli/pull/28778
2. PR #28767 (OPEN, P1): Fix `--resume` flag bug that opens a second session file and causes cleanup to delete the active session. Why it matters: Resolves a data loss risk for users relying on session resumption, where running `gemini --resume` would permanently delete their active conversation history. Link: https://github.com/google-gemini/gemini-cli/pull/28767
3. PR #28729 (OPEN): Fix swallowed directory mismatch errors in IDE companion connections for VS Code forks/remote workspaces (e.g. Cider). Why it matters: Restores CLI functionality for users running in virtualized or remote IDE environments where local and remote workspace paths do not match. Link: https://github.com/google-gemini/gemini-cli/pull/28729
4. PR #28688 (CLOSED): Dynamically resolve Cloud Workstations proxy redirect URIs for OAuth flows. Why it matters: Fixes broken OAuth authentication for users running Gemini CLI inside Google Cloud Workstations VMs, where static localhost redirect URIs previously failed. Link: https://github.com/google-gemini/gemini-cli/pull/28688
5. PR #28599 (CLOSED): Classify model capacity exhaustion (HTTP 429) as a terminal error to prevent retry hangs. Why it matters: Eliminates infinite retry loops when preview models are at capacity, triggering immediate fallback to alternative models instead of blocking the CLI indefinitely. Link: https://github.com/google-gemini/gemini-cli/pull/28599
6. PR #28581 (OPEN): Skip diff hunk markers during `@` file reference processing. Why it matters: Fixes excessive heap growth and performance degradation when processing large diff prompts, eliminating two unnecessary recursive workspace glob searches per diff hunk. Link: https://github.com/google-gemini/gemini-cli/pull/28581
7. PR #28369 (CLOSED): Add local evaluation report command and developer documentation for behavioral evals. Why it matters: Gives developers a local way to aggregate and review behavioral eval pass rates by model, without relying on external CI systems, improving eval iteration speed. Link: https://github.com/google-gemini/gemini-cli/pull/28369
8. PR #28305 (OPEN): Add tool call formatter and failure summary diagnostics for behavioral evaluations. Why it matters: Improves eval debuggability by printing a compact timeline of agent tool calls (with arguments, status, and errors) directly to the console when tests fail, reducing time to identify eval failures. Link: https://github.com/google-gemini/gemini-cli/pull/28305
9. PR #28764 (OPEN): Fix VS Code IDE companion command registration to track all disposables correctly. Why it matters: Resolves a bug where the `gemini.diff.accept` command was not properly cleaned up on extension deactivation, leading to orphaned command registrations and unexpected behavior. Link: https://github.com/google-gemini/gemini-cli/pull/28764
10. PR #28679 (OPEN): Improve Vertex AI 401 error messaging when using standard API keys. Why it matters: Reduces developer confusion by surfacing a clear error when users misconfigure Vertex AI auth with a standard Gemini API key, instead of returning a generic 401 error. Link: https://github.com/google-gemini/gemini-cli/pull/28679
Wait, that's 10, right? Let's check: 1.28778, 2.28767,3.28729,4.28688,5.28599,6.28581,7.28369,8.28305,9.28764,10.28679. Yep, good mix of security, bug fixes, dev experience improvements.

Then Feature Request Trends: distill the most requested directions from all issues. Let's look at the issues: what's the common themes? Let's see:
1. Agent reliability and behavior control: Multiple issues request fixes for subagent failures (hangs, false success reports, Wayland browser agent failures, unintended subagent activation) and controls to restrict destructive agent behavior (e.g. git force resets).
2. Context efficiency for large codebases: Requests for AST-aware file reads/search, reduced token waste from full file loads, and improved tool scoping to avoid errors when >128 tools are enabled.
3. Memory system improvements: Multiple issues around Auto Memory quality, including eliminating low-signal session retries, deterministic secret redaction, and surfacing invalid memory patches.
4. Developer experience for agent debugging: Requests for visible subagent trajectories via `/chat share`, improved eval tooling and diagnostics, and better agent self-awareness of CLI flags/hotkeys.
5. Security hardening: Requests for deterministic secret redaction in Auto Memory, sandboxing for bash tool execution, and reduced logging of sensitive skill/transcript data.
Wait, let's condense that into clear trends, no fluff. Let's phrase it:
The most requested feature and improvement directions from open issues fall into 5 core themes:
1. **Agent Reliability & Control**: Widespread requests to fix subagent failure modes (indefinite hangs, false GOAL success reports, Wayland browser agent incompatibility) and add guardrails to prevent destructive agent actions (e.g. unforced git operations).
2. **Large Codebase Efficiency**: Demand for AST-aware file read/search tools to reduce token waste and turn count, plus fixes for tool scope limits that break workflows with >128 enabled tools.
3. **Memory System Quality**: Requests to fix Auto Memory's indefinite retry of low-signal sessions, add deterministic secret redaction for transcript data sent to background models, and surface invalid memory patches instead of silently skipping them.
4. **Agent Debuggability**: High demand for visible subagent trajectories via `/chat share`, improved behavioral eval diagnostics, and better agent self-awareness of CLI flags, hotkeys, and available skills.
5. **Security Hardening**: Requests for zero-dependency OS sandboxing for bash tool execution, reduced sensitive data logging, and deterministic redaction of secrets before transcript data is sent to external models.

Then Developer Pain Points: summarize recurring frustrations or high frequency requests. Let's see what's common across issues:
Recurring developer pain points include:
- Unreliable subagent behavior: Indefinite hangs, false success reports, and unintended subagent activation (reported since v0.33.0) break core multi-step workflow functionality, with no consistent workaround for most users.
- Broken shell execution: Completed shell commands get stuck in "Waiting input" state, blocking further CLI interactions, and interactive prompts (e.g. for Vite app creation) cause the CLI to hang indefinitely.
- Auto Memory quality and security: The feature wastes background resources retrying irrelevant low-signal sessions, and currently sends unredacted transcript data to external models, creating a privacy risk for users with sensitive codebases.
- Poor error messaging: Generic 400/401 errors for tool limit exceeded, misconfigured Vertex AI auth, and capacity exhaustion leave developers without actionable steps to resolve issues.
- IDE integration gaps: Broken connections for VS Code forks/remote workspaces (e.g. Cider, Cloud Workstations) and un-tracked disposables in the VS Code extension cause unexpected behavior for users integrating the CLI with their IDEs.
Wait, that's accurate, right? Let's check the issues: yes, hangs, shell stuck, memory issues, bad errors, IDE problems are all recurring.

Wait, let's make sure all links are correct, and each section is properly formatted, no markdown? Wait no, the user said structured English digest, professional, for technical devs, include GitHub links. Wait, the user didn't say no markdown, but let's make it clear. Also, make sure that the releases section is only if there are new versions, which there are, so include them.

Wait, let's check if I missed any key points. Oh, the new contributor @ParthivNaresh, that's in the highlights, right? Yes, I included that. The CVE is critical, so that's a big highlight. The --resume bug is a data loss risk, so that's important.

Wait, let's adjust the Today's Highlights to be tighter:
### Today's Highlights
The Gemini CLI team shipped v0.56.0-preview.1 with a critical fix for MCP OAuth token refresh, alongside an urgent patch for a CRITICAL severity CVE (CVE-2026-28292) in the simple-git dependency. A high-impact data loss bug in the `--resume` flag that deleted active session files was also merged, along with a fix for broken OAuth flows in Google Cloud Workstations environments. New contributor @ParthivNaresh made their first project contribution with the MCP OAuth fix.

That's good, 3 sentences, covers the top stuff.

Now, Releases section: make sure each release has a link? Wait, the user said include GitHub links for each item. Oh right, so each release should link to the GitHub release page? Wait, but the data source is github.com/google-gemini/gemini-cli, so the release links would be https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-preview.1, etc. Let's add those.

Wait, for the releases:
### Releases
- **v0.56.0-preview.1** (2026-08-11): Includes a fix for MCP OAuth token refresh that uses stored client IDs to resolve authentication failures for MCP servers (PR #28481), plus preparatory changelog updates. [Release Link](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-preview.1)
- **v0.56.0-nightly.20260811.geef19f25c** (2026-08-11): Nightly build shipping the same MCP OAuth token refresh fix as the latest preview release. [Release Link](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260811.geef19f25c)
- **v0.55.1

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Got it, let's tackle this GitHub Copilot CLI community digest for 2026-08-12. First, I need to follow the required sections exactly, make sure it's concise, professional, for devs, with links.

First, Today's Highlights. Let's see what's the big stuff from the last 24h. First, there's a critical regression in 1.0.79 that wipes user settings when using /config model, plus a cluster of triaged issues from 2026-08-11 around model routing, session memory, and plugin permissions, right? Also, the PRs are about security and dev experience, like moving away from pull_request_target for security, and adding devcontainer support. Wait, no releases in the last 24h, so mention that first? Wait no, highlights: let's make 2-3 sentences. Let's see: First, no new CLI releases dropped in the last 24 hours, but a high-severity regression in v1.0.79 that wipes user settings when configuring models via /config model was reported and closed as a confirmed bug. Second, a large batch of 16 triaged issues submitted on 2026-08-11 surfaced critical gaps in model routing, session context retention, plugin permissions, and MCP integration. Third, two key open PRs aim to improve repository security and contributor onboarding by migrating CI away from pull_request_target and adding official devcontainer support. Yeah that works, makes sense.

Next, Releases. The data says Latest Releases (last 24h) None, so just state that no new GitHub Copilot CLI versions were released in the 24 hours leading up to 2026-08-12.

Then Hot Issues: pick 10 noteworthy ones, explain why they matter, community reaction, with links. Let's rank them by impact, comment count, upvotes first. Let's list:
1. Issue #4095: Windows plugin update fails with Access is denied (os error 5) while VS Code is running. Wait, that has 14 upvotes, 1 comment? Wait no, comments: 1? Wait the data says comments:1, 👍:14. Oh right, that's the most upvoted. Why it matters: It's a widespread Windows-specific blocker that prevents plugin updates both via CLI and the Copilot desktop app, caused by VS Code holding file locks on installed plugin directories. Community reaction: 14 upvotes, indicating high prevalence among Windows users, with the issue triaged to the platform-windows and plugins teams. Link: https://github.com/github/copilot-cli/issues/4095
2. Issue #4151: Plugin install fails with Access is denied (os error 5) on Windows for all sources. Comments 3, 👍1. Why it matters: Broader Windows plugin installation blocker that affects all source types (marketplace, GitHub repos, local directories), not just updates. Community reaction: 3 comments, cross-verified as a 100% failure rate on Windows 11, impacting all plugin workflows for Windows users. Link: https://github.com/github/copilot-cli/issues/4151
3. Issue #4251: Resume of large session OOMs / grinds CPU for ~70 min in 1.0.74 (regression vs 1.0.73). Comments 3, 👍1. Why it matters: Critical performance regression in v1.0.74 that breaks session resumption for long-running, large context workflows, with 3-4x higher memory usage than the prior stable version. Community reaction: 3 comments, with controlled A/B testing confirming the regression is isolated to the 1.0.74 release, impacting users with long-lived session workflows. Link: https://github.com/github/copilot-cli/issues/4251
4. Issue #4431 [CLOSED]: Using /model config wipes all settings. Comments 3, 👍0. Why it matters: High-severity data loss bug in v1.0.79 where using the /config model command overwrites the entire ~/.copilot/settings.json file, erasing all user customizations. Community reaction: 3 comments, confirmed and closed as a bug, impacting all users who modify their Copilot CLI settings. Link: https://github.com/github/copilot-cli/issues/4431
5. Issue #4211: Copilot CLI couldn't handle BigInt in structured MCP response. Comments 3, 👍0. Why it matters: Breaks integration with MCP servers that return large numeric values (e.g., financial, analytics tools), causing all ongoing tasks to abort with a serialization error. Community reaction: 3 comments, impacts users building custom MCP integrations for data-heavy workflows. Link: https://github.com/github/copilot-cli/issues/4211
6. Issue #3976: Native tgrep indexer OOM-kills the host on large monorepos. Comments 2, 👍0. Why it matters: Critical resource exhaustion bug in the experimental tgrep search feature that crashes the host machine when used in large monorepos, with no built-in memory cap. Community reaction: 2 comments, impacts users who have opted into the copilot_cli_tgrep experiment for faster code search. Link: https://github.com/github/copilot-cli/issues/3976
7. Issue #4439: Copilot CLI 1.0.79 rejects GitLab MCP OAuth metadata with RFC 8414 issuer mismatch. Comments 1, 👍0. Why it matters: Breaks authentication for self-hosted GitLab MCP servers using standard OAuth 2.0 Dynamic Client Registration, blocking enterprise users with self-managed GitLab instances from using MCP integrations. Community reaction: 1 comment, impacts enterprise GitLab users relying on self-hosted MCP tools. Link: https://github.com/github/copilot-cli/issues/4439
8. Issue #4380: Rubber Duck subagent sometimes uses same model family as primary session. Comments 3, 👍0. Why it matters: Undermines the core value of the Rubber Duck adversarial review feature, which is designed to provide a cross-model second opinion, by occasionally selecting a model from the same family as the primary session. Community reaction: 3 comments, impacts users relying on Rubber Duck for code review and plan validation. Link: https://github.com/github/copilot-cli/issues/4380
9. Issue #4405: Copilot Free in GitHub Codespaces: "No model available" after update. Comments 1, 👍0. Why it matters: Breaks core functionality for Copilot Free users in GitHub Codespaces, preventing all prompt execution after a recent update, with no clear workaround. Community reaction: 1 comment, impacts free tier Codespaces users. Link: https://github.com/github/copilot-cli/issues/4405
10. Issue #4441: Preserve durable context across repeated compactions. Comments 1, 👍0. Why it matters: Addresses a core limitation of Copilot CLI's context management, where repeated session compaction recursively loses early context, degrading the quality of long-running sessions over time. Community reaction: 1 comment, a widely requested feature for users working on long-horizon development tasks. Wait, or maybe #4443? No, #4441 is a feature request but high impact. Wait let's check the list again. Oh, #4444 is explicit file edit mode, that's a feature request. Wait no, let's make sure the 10 are a mix of critical bugs and high-impact feature requests. Wait let's adjust: maybe swap #4441 for #4444? No, #4441 is about context retention which is a big pain point. Wait no, let's make sure each has a clear why it matters and community reaction. Let's confirm the links are correct. Yep, each issue link is https://github.com/github/copilot-cli/issues/[number].

Then Key PR Progress: pick 10? Wait wait the data says Latest Pull Requests total 2 items. Oh! Wait the data says Total: 2 items. Oh right! I can't pick 10, there's only 2. Oh right, the user said "Pick 10 important PRs" but wait the data only has 2. Wait let's check the data again: Latest Pull Requests (updated in last 24h)(Total: 2 items). Oh right, so only 2 PRs. So I need to list those 2, explain them, even if it's 2, not 10? Wait wait the user said "Pick 10 important PRs" but if there's only 2, we have to note that? Wait no, let's check the data again. Oh yes, the PR section only has 2 entries. So let's list both, describe them. Let's see:
1. PR #4449: Migrate pull request automation away from pull_request_target. Open, author mrecachinas, updated 2026-08-11. What it does: Replaces the use of pull_request_target (which runs with repository write permissions on untrusted PR input) with a lower-privilege pull_request workflow for PR-driven CI, moving any required repository write actions to a separate, trusted workflow. Why it matters: Eliminates a critical supply chain security risk where malicious PRs from untrusted contributors could exfiltrate repository secrets or modify code. Status: Open draft, under review. Link: https://github.com/github/copilot-cli/pull/4449
2. PR #4428: Add initial devcontainer configuration. Open, author Pjrich1313, updated 2026-08-11. What it does: Adds official development container configuration to the repository to standardize contributor onboarding and local development environments. Why it matters: Reduces setup friction for new contributors, ensures consistent development environments across the team, and aligns with GitHub's recommended open source contribution practices. Status: Open, marked LGTM. Link: https://github.com/github/copilot-cli/pull/4428
Wait but the user said 10, but there's only 2. Oh, maybe the user's instruction says "pick 10" but if there's only 2, we have to state that only 2 PRs were updated in the last 24h, so we're covering both? Wait let's check the user's instruction again: "4. **Key PR Progress** - Pick 10 important PRs, describe features or fixes". But the data only has 2. So maybe note that only 2 PRs were updated in the last 24 hours, so both are covered below? That makes sense.

Then Feature Request Trends: distill the most requested feature directions from all issues. Let's look at the issues:
First, context and session management: multiple issues around session compaction (#4441), durable context retention, session resumption performance (#4251), so that's a trend: improved long-running session management, including lossless context compaction, stable session resumption, and reduced memory usage for large contexts.
Second, model routing and configuration: issues around /config model wiping settings (#4431, #4434), auto mode selecting invalid models (#4445), Rubber Duck using same model family (#4380, #4432), model invocation settings breaking skills (#4438), so trend: more granular, reliable model configuration and routing, including persistent user-level model defaults, validation of auto-selected models, and correct subagent model selection for adversarial review.
Third, plugin and extension usability: Windows plugin install/update failures (#4151, #4095), duplicate skill loading from plugins and repos (#4430), so trend: improved cross-platform plugin reliability, reduced skill duplication, and better plugin permission handling.
Fourth, MCP integration improvements: BigInt serialization errors (#4211), GitLab OAuth issuer mismatch (#4439), default GitHub MCP toolset not enabled (#4436), so trend: more robust MCP server compatibility, including support for standard OAuth flows, correct data type serialization, and sensible default tooling for built-in MCP servers.
Fifth, developer experience and workflow improvements: explicit file edit mode (#4444), auto-allow permissions setting (#3877), enterprise sandbox config (#4446), reading .claude/rules (#4440), so trend: more granular workflow controls, including per-edit approval, customizable permission defaults, and support for cross-tool rule files (Claude, Copilot) to reduce duplication.
Sixth, accessibility and theming: hardcoded colors breaking light themes (#3750), so trend: improved theming and accessibility support, including full light theme compatibility and removal of hardcoded styling.

Then Developer Pain Points: summarize recurring frustrations. Let's see:
1. Windows-specific plugin failures: Multiple high-upvoted issues report that plugin install and update operations fail 100% of the time on Windows with "Access is denied (os error 5)", with the root cause tied to file locking by the VS Code Copilot extension, creating a complete blocker for Windows users managing plugins.
2. Context degradation in long sessions: Users report that repeated session compaction recursively loses early context, eroding the quality of long-running development tasks, and a recent v1.0.74 regression introduced severe OOM and CPU usage spikes when resuming large sessions.
3. Unreliable model configuration: Multiple bugs break core model settings functionality, including /config model wiping all user settings, user-level model defaults not applying to new sessions, and auto mode selecting unavailable models that crash the CLI.
4. MCP integration friction: Users building custom MCP integrations hit repeated blockers, including BigInt serialization errors, OAuth issuer mismatches for self-hosted GitLab servers, and missing default tooling for built-in MCP servers.
5. Permission prompt friction: The CLI prompts for full path approval for read-only commands run outside the working directory, creating unnecessary friction for routine operations like docker compose ps.

Wait let's make sure each section is correct, links are right, no mistakes. Let's check the issue numbers again:
#4095: 14 upvotes, Windows plugin update, correct.
#4151: Windows plugin install all sources, correct.
#4251: 1.0.74 session OOM regression, correct.
#4431: /model config wipes settings, closed, correct.
#4211: BigInt MCP, correct.
#3976: tgrep OOM, correct.
#4439: GitLab MCP OAuth, correct.
#4380: Rubber Duck same model family, correct.
#4405: Codespaces Free no model, correct.
#4441: Preserve context across compactions, correct. That's 10 hot issues, perfect.

Wait for the Hot Issues, each entry should have the issue number, title, why it matters, community reaction, link. Let's format that properly.

Also, make sure the style is concise, professional, for technical devs. No fluff.

Wait let's start drafting each section properly:

1. **Today's Highlights**
No new GitHub Copilot CLI releases were published in the 24 hours leading up to 2026-08-12. A high-severity regression in v1.0.79 that erases all user settings when configuring models via the `/config model` command was confirmed and closed. A batch of 16 triaged issues submitted on 2026-08-11 surfaced critical gaps in model routing, session context retention, plugin permissions, and MCP integration for enterprise and open-source users. Two active PRs aim to improve repository security and contributor onboarding by migrating CI away from the high-risk `pull_request_target` event and adding official devcontainer support.

2. **Releases**
No new GitHub Copilot CLI versions were released in the 24 hours leading up to 2026-08-12.

3. **Hot Issues**
The following 10 issues are the most noteworthy based on community upvotes, comment volume, and impact to core user workflows:
- [Issue #4095](https://github.com/github/copilot-cli/issues/4095): Windows plugin update fails with "Access is denied (os error 5)" while VS Code is running. *Why it matters*: This is a widespread, 100% failure rate blocker for Windows users attempting to update plugins via CLI or the Copilot desktop app, caused by VS Code holding file locks on installed plugin directories. *Community reaction*: 14 upvotes (the highest of any open issue in the dataset), with widespread reports from Windows users across both CLI and desktop app workflows.
- [Issue #4151](https://github.com/github/copilot-cli/issues/4151): Plugin install fails with Access is denied (os error 5) on Windows for all sources. *Why it matters*: A broader Windows-specific plugin installation blocker that affects all source types (marketplace, GitHub repos, local directories), not just updates. *Community reaction*: 3 comments, with users confirming the error occurs on Windows 11 across all plugin installation methods.
- [Issue #4251](https://github.com/github/copilot-cli/issues/4251): Resume of large session OOMs / grinds one CPU core for ~70 min in 1.0.74 (regression vs 1.0.73). *Why it matters*: Critical performance regression in v1.0.74 that breaks session resumption for long-running, large context workflows, with 3-4x higher memory usage than the prior stable version. *Community reaction*: 3 comments, with controlled A/B testing confirming the regression is isolated to the 1.0.74 release, impacting users with long-lived session workflows.
- [Issue #4431](https://github.com/github/copilot-cli/issues/4431) (CLOSED): Using /model config wipes all settings. *Why it matters*: High-severity data loss bug in v1.0.79 where using the `/config model` command overwrites the entire `~/.copilot/settings.json` file, erasing all user customizations. *Community reaction*: 3 comments, confirmed and closed as a bug, impacting all users who modify their Copilot CLI settings.
- [Issue #4211](https://github.com/github/copilot-cli/issues/4211): Copilot CLI couldn't handle BigInt in structured MCP response. *Why it matters*: Breaks integration with MCP servers that return large numeric values (e.g., financial, analytics tools), causing all ongoing tasks to abort with a serialization error. *Community reaction*: 3 comments, impacts users building custom MCP integrations for data-heavy workflows.
- [Issue #3976](https://github.com/github/copilot-cli/issues/3976): Native `tgrep` indexer OOM-kills the host on large monorepos. *Why it matters*: Critical resource exhaustion bug in the experimental `tgrep` search feature that crashes the host machine when used in large monorepos, with no built-in memory cap. *Community reaction*: 2 comments, impacts users who have opted into the `copilot_cli_tgrep` experiment for faster code search.
- [Issue #4439](https://github.com/github/copilot-cli/issues/4439): Copilot CLI 1.0.79 rejects GitLab MCP OAuth metadata with an RFC 

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
Date: 2026-08-12 | Source: github.com/MoonshotAI/kimi-cli

---

## 1. Today's Highlights
The highest-engagement community thread this period is the persistent cross-session memory system feature request (Issue #1283) with 34 comments, reflecting strong, widespread demand for improved context retention for large project workflows. Two new feature requests were opened on 2026-08-11: web interface quote-and-reply functionality for targeted follow-ups on AI response segments (Issue #2601) and configurable thinking effort controls for the CLI (PR #2509). Two new user-reported bugs were also filed: a Windows PowerShell default drive path resolution error (Issue #2600) and an unexpected "Autopsy" label appearing in CLI planning task todos (Issue #2599).

## 2. Releases
No new Kimi Code CLI versions were published in the last 24 hours.

## 3. Hot Issues
All 5 issues updated in the last 24 hours are listed below (all status: [Open]):
1. **Issue #1283: Persistent Memory System Feature Request**  
   Why it matters: Addresses a core workflow gap for large-scale projects, where context loss between sessions forces users to repeatedly re-explain project structure, patterns, and requirements. The request covers both automated AI-managed context and user-defined manual memory rules.  
   Community reaction: 34 comments (the highest engagement of any recent issue), with users sharing workarounds and detailed use cases for memory functionality.  
   Link: https://github.com/MoonshotAI/kimi-cli/issues/1283
2. **Issue #1478: Memory Layer Optimization & Documentation Request**  
   Why it matters: Highlights that existing memory functionality is either non-functional or completely undocumented for users, with the reporter noting only an unlisted `agent.md` file exists as a reference for memory configuration.  
   Community reaction: 1 comment aligning with the demand raised in #1283, reinforcing the priority of memory system improvements.  
   Link: https://github.com/MoonshotAI/kimi-cli/issues/1478
3. **Issue #2601: Web Interface Quote & Reply Feature**  
   Why it matters: Enables users to attach follow-up questions or comments to specific segments of AI responses (code blocks, diff explanations, plan steps) rather than full responses, improving precision for iterative debugging and refinement.  
   Community reaction: Newly opened with 0 comments as of the digest date, aligned with common UX requests for conversational AI development tools.  
   Link: https://github.com/MoonshotAI/kimi-cli/issues/2601
4. **Issue #2600: Windows PowerShell Default Drive Path Bug**  
   Why it matters: Breaks CLI functionality for users who configure PowerShell 7 to launch from a non-system drive (e.g., D:), a common setup for developers separating OS and project storage.  
   Community reaction: Newly opened with 0 comments, impacts Windows user adoption for non-default shell configurations.  
   Link: https://github.com/MoonshotAI/kimi-cli/issues/2600
5. **Issue #2599: Unexpected "Autopsy" Label in Planning Todos**  
   Why it matters: Introduces confusing, unprofessional UI terminology in task planning outputs, undermining user trust in the CLI's task management features.  
   Community reaction: Newly opened with 0 comments, reported by a macOS user running Kimi Code CLI v0.34.0.  
   Link: https://github.com/MoonshotAI/kimi-cli/issues/2599

## 4. Key PR Progress
All 8 pull requests updated in the last 24 hours are listed below:
1. **PR #2509 [Open]: Configurable Thinking Effort & /effort Command**  
   Adds user-configurable reasoning effort levels for Kimi coding models, plus a new `/effort` CLI command to adjust effort on the fly, resolving related issue #2501. Gives developers control over the speed vs. reasoning depth tradeoff for different task types (e.g., quick syntax fixes vs. complex architectural refactors).  
   Link: https://github.com/MoonshotAI/kimi-cli/pull/2509
2. **PR #2057 [Merged]: Replace assert Statements with RuntimeError in ACP Session**  
   Replaces 5 unsafe `assert` statements in `acp/session.py` with proper `RuntimeError` exceptions. Fixes a critical reliability issue where assertions are stripped when Python runs with the `-O` optimization flag, which would disable critical invariant checks and cause silent production failures.  
   Link: https://github.com/MoonshotAI/kimi-cli/pull/2057
3. **PR #2056 [Merged]: Fix TOCTOU Race Condition in WireFile.append_record**  
   Eliminates a time-of-check-to-time-of-use race condition in the `WireFile.append_record` method by removing a separate pre-check for file existence before accessing file size. Prevents unhandled crashes if a file is deleted between the check and stat calls, improving reliability for concurrent file operations.  
   Link: https://github.com/MoonshotAI/kimi-cli/pull/2056
4. **PR #2055 [Merged]: Replace assert with AgentSpecError in agentspec.py**  
   Replaces an `assert` statement guarding agent spec extension rules with a proper `AgentSpecError` exception. Avoids silent disabling of safety checks in optimized Python environments, ensuring invalid agent spec configurations are properly flagged.  
   Link: https://github.com/MoonshotAI/kimi-cli/pull/2055
5. **PR #1328 [Merged]: Fix Minor Bugs in File Tools and UI Feedback**  
   Fixes 3 user-facing bugs: incorrect replacement count calculation in `StrReplaceFile` when multiple edits are provided, plus UI feedback inconsistencies for file operations. Improves correctness of core file editing tools and reduces user confusion from mismatched status messages.  
   Link: https://github.com/MoonshotAI/kimi-cli/pull/1328
6. **PR #1393 [Merged]: Fix ACP Shell Command Routing**  
   Updates ACP (Agent Communication Protocol) terminal integration to correctly route shell commands and arguments for bash and PowerShell, plus adds regression tests for the routing logic. Fixes broken shell execution for ACP integrations, ensuring compatibility with common developer shells.  
   Link: https://

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest
**Date: 2026-08-12 | Repository: anomalyco/opencode**

---

## 1. Today's Highlights
Today’s most active community discussions center on high-demand UX improvements for the TUI and desktop app, led by a 230-upvote feature request to expand truncated pasted text for editing and modification. Multiple V2 regression and parity gaps are also top of mind, including broken Plan Mode functionality and invisible mode switches to LLMs, alongside recurring bugs when multiple TUIs share a single server instance. Several new ecosystem and desktop feature PRs were also opened today, including voice input for the desktop app and a new PR tracker plugin addition to the official ecosystem.

---

## 2. Releases
No new official OpenCode releases were published in the last 24 hours.

---

## 3. Hot Issues (Top 10 by Impact)
| Issue | Summary & Significance | Community Reaction | Link |
|-------|-------------------------|--------------------|------|
| #8501 [OPEN] [FEATURE]: Allow to expand the pasted text | Requests removal of the hardcoded truncation of pasted content (currently shown as `[Pasted ~X lines]`) to let users view, edit, and re-use full pasted context, addressing a major UX gap for workflows involving code or long context snippets. | Highest-upvoted active issue (230 👍), 35 comments with broad support and implementation discussion from power users. | [Link](https://github.com/anomalyco/opencode/issues/8501) |
| #16017 [CLOSED] [FEATURE]: Add Go plan usage/balance API endpoint | Requested a public API endpoint to expose Go plan subscription usage data (rolling/weekly/monthly windows) for programmatic access, matching the existing dashboard view. | Strong support (137 👍), 33 comments; feature was implemented via merged PR #16513. | [Link](https://github.com/anomalyco/opencode/issues/

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

Got it, let's tackle this Pi community digest step by step. First, I need to make sure I follow all the required sections, use the provided data, keep it technical and concise, include links, and focus on what's relevant for AI developer tool users.

First, **Today's Highlights**. Let's look at the most impactful stuff from the last 24h. First, there's a fix for the mid-run usage tracking gap that was introduced in 0.84.0 (PR #7982), plus a fix for edit tool fuzzy matching that breaks on whitespace differences (PR #7978/#7962), and a big bug fix for hanging OpenAI-compatible SSE streams (PR #7959). Also, there's a draft agent harness PR which is a big feature in progress. Wait, also the high CPU usage on Mac is a hot issue with 8 upvotes. Let me condense that: 2-3 sentences. Let's see: "The Pi team closed a critical 0.84.0 regression that removed mid-turn usage metrics from streaming events, and shipped fixes for edit tool fuzzy matching failures on whitespace differences and permanent hangs on stalled OpenAI-compatible SSE streams. A draft agent harness extension for cross-session communication is now open for review, and a high-priority Mac OS high CPU usage bug with long sessions is under active investigation. Multiple user experience improvements for the TUI, including fullscreen scroll state indicators and VS Code notification support, were also merged." Yeah that covers the big stuff.

Next, **Releases**: The data says latest releases last 24h are none, so I just state that: "No new Pi releases were published in the last 24 hours; the latest stable version remains 0.84.1." That's straightforward.

Then **Hot Issues**: Need to pick 10 noteworthy ones, ordered by impact probably, with why they matter and community reaction, plus links. Let's go through the list:
1. First, #7730: High CPU usage on Mac OS with long session. 10 comments, 8 upvotes. Why it matters: Affects all Mac users running long sessions, 100%+ CPU, 600-800MB memory, tied to context/session length. Community reaction: 8 upvotes, 10 comments, active discussion.
2. #6187: Pi login hangs in WSL after GitHub Copilot device auth. 25 comments, closed. Why it matters: Breaks Copilot integration for WSL users, a popular dev environment. Community reaction: 25 comments, high engagement, now closed so resolved?
3. #7846: Crash with bun runtime (zlib.createZstdDecompress not a function). 10 comments, closed. Why it matters: Breaks Pi for users running the Bun JS runtime, which is increasingly popular for JS/TS tooling. Community reaction: 10 comments, resolved.
4. #7553: Configurable thinking level for compaction. 8 comments, open. Why it matters: Currently compaction reuses the session's thinking level, which wastes reasoning budget for users running auto-compaction on reasoning models. Community reaction: 8 comments, active feature request.
5. #7850: GitHub Copilot login 429 rate limit for orgs with many models. 7 comments, closed, no action? Wait no, 7 upvotes. Why it matters: Breaks Copilot login for enterprise users with large model catalogs, a common use case for orgs. Community reaction: 7 upvotes, marked no action but high user impact.
6. #7836: Edit fuzzy match misses lines with whitespace length differences. 6 comments, open. Why it matters: Breaks edit tool reliability for small models that output inconsistent whitespace, a common edge case. Community reaction: 1 upvote, active fix in progress via PRs.
7. #7829: Invalid settings.json silently ignored, misleading bash not found error on Windows. 3 comments, open. Why it matters: Causes confusing failures for Windows users configuring custom shell paths, a common pain point for Windows devs. Community reaction: 3 comments, needs better error messaging.
8. #7911: 0.84.0 removed usage data from mid-run streaming events. 2 comments, open, in progress. Why it matters: Breaks tooling that relies on real-time usage tracking during streaming turns, a regression in 0.84.0. Community reaction: Active fix in PR #7982.
9. #7947: Severe duplicate output and memory leak on Windows CMD. 2 comments, closed. Why it matters: Critical Windows-specific bug causing unkillable processes and broken output for CMD users. Community reaction: Reported as P0, resolved.
10. #7936: Inline images disabled in tmux even when outer terminal supports Kitty graphics protocol. 2 comments, closed, no action. Why it matters: Blocks a requested feature for users running Pi in tmux with modern terminals that support inline images. Community reaction: Feature request, marked no action but high interest for power users. Wait, let me make sure each has the link, correct status, comment count, why it matters, community reaction. Let me structure each properly.

Then **Key PR Progress**: 10 important PRs, open and closed, with what they do. Let's pick:
1. #7982 (open): Fix for 0.84.0 usage regression. Preserves cumulative usage in streaming events, adds regression tests. Closes #7911. Link: https://github.com/earendil-works/pi/pull/7982
2. #7978 (closed): Fix edit tool single-object edits and fuzzy match whitespace. Normalizes single edit objects to arrays, collapses whitespace runs in fuzzy matching. Closes #7836 and #7962. Link: https://github.com/earendil-works/pi/pull/7978
3. #7959 (closed): Fix OpenAI-compatible SSE hangs. Adds inactivity timeout for stalled SSE streams, fixes permanent hang bug (#7954). Link: https://github.com/earendil-works/pi/pull/7959
4. #7970 (open): Fullscreen transcript scroll indicator. Adds a ↓ status indicator when the fullscreen TUI transcript is scrolled up, so users know they're not at the latest message. Link: https://github.com/earendil-works/pi/pull/7970
5. #7968 (closed, draft): Intercom extension + ask_predecessor responder. Adds live cross-session messaging and a ghost responder for querying prior sessions, enabling session handoffs and co-op workflows. Link: https://github.com/earendil-works/pi/pull/7968
6. #7956 (open): Mermaid diagram rendering in HTML exports. Adds toggleable rendered Mermaid diagrams to Pi's HTML session exports, matching TUI rendering. Link: https://github.com/earendil-works/pi/pull/7956
7. #7967 (closed): VS Code notification support for notify example. Fixes the notify example extension to send desktop notifications when running in VS Code's integrated terminal. Link: https://github.com/earendil-works/pi/pull/7967
8. #7722 (open): Theme override CLI flag. Adds a --use-theme flag to override stored theme settings per run, supports single and appearance-based theme notation. Link: https://github.com/earendil-works/pi/pull/7722
9. #7757 (open): Opt-out of fullscreen copy-on-select. Adds a setting to disable automatic copy-on-select in fullscreen TUI mode, for users who prefer manual copy behavior. Link: https://github.com/earendil-works/pi/pull/7757
10. #7953 (open): Expose tool metadata at stream start. Adds constant-sized id and toolName fields to toolcall_start streaming events, removes cumulative snapshots to keep stream size linear. Link: https://github.com/earendil-works/pi/pull/7953
Wait, also #7961 is open: fix for Claude Sonnet 5 temperature support, right? Oh right, that's a fix for a model compatibility issue. Maybe swap one? Wait no, let's see, #7961 is important for Anthropic users. Let me adjust: replace #7953? No, wait, let's make sure they are the most important. Wait #7961: fix(ai): mark Claude Sonnet 5 as not supporting temperature. That's a critical fix for Sonnet 5 users, because every call fails without it. Yeah, that's more important. Let's adjust the list: replace #7953 with #7961. Let's confirm: #7961 is open, fixes a bug where Claude Sonnet 5 rejects temperature参数, which causes all calls to fail. That's a high impact fix. Okay, so update that entry: 9. #7961 (open): Fix Claude Sonnet 5 temperature compatibility. Marks claude-sonnet-5 as a model that does not support the temperature parameter, fixing 400 invalid request errors for all Sonnet 5 users. Link: https://github.com/earendil-works/pi/pull/7961. That's better.

Then **Feature Request Trends**: Distill the most requested directions from issues. Let's look at the open issues and requests:
1. TUI/UX improvements: Multiple requests for TUI quality of life: fullscreen scroll indicators, opt-out of copy-on-select, inline image support in tmux, clickable hyperlinks in fullscreen, better error messaging for misconfigurations.
2. Streaming protocol robustness: Requests for better error handling in WebSocket retries, mid-run usage tracking, inactivity timeouts for stalled streams, exposing tool metadata earlier in streams.
3. Model/provider compatibility: Requests for broader provider support (Cloudflare AI Gateway, OpenRouter cost mapping), fixing model-specific quirks (Claude Sonnet 5 temperature, Anthropic cache_control with OpenRouter), configurable thinking levels for compaction to support reasoning models.
4. Extension and workflow features: Requests for cross-session communication (intercom), configurable subagent settings, plan mode todo widget reliability, skill directory configuration improvements.
Wait, let's condense that into clear trends, no fluff. Let's see: "The most requested feature directions from the issue tracker center on four key areas:
1. TUI/terminal experience: Repeated requests for quality-of-life improvements including fullscreen scroll state visibility, opt-out of automatic copy-on-select, inline image rendering in tmux sessions, and clickable hyperlinks in fullscreen mode.
2. Streaming and protocol reliability: High demand for more robust streaming behavior, including mid-turn usage tracking, inactivity timeouts for stalled provider streams, and earlier exposure of tool call metadata in streaming events.
3. Model and provider compatibility: Requests to expand supported providers (e.g. Cloudflare AI Gateway), fix model-specific edge cases (Claude Sonnet 5 temperature support, OpenRouter Anthropic cache_control), and add configurable thinking levels for compaction to better support reasoning models.
4. Agent workflow extensions: Demand for cross-session communication capabilities, configurable subagent model inheritance, and improved plan mode todo tracking for coding agent workflows."
That's good, covers the trends from the issues.

Then **Developer Pain Points**: Summarize recurring frustrations. Let's look at the issues:
1. Platform-specific regressions: Frequent Mac OS high CPU usage, Windows-specific crashes (CMD duplicate output, memory leaks, invalid settings.json silent failures, WSL Copilot login hangs) that break core functionality for users on non-Linux platforms.
2. Streaming edge cases: Permanent hangs on stalled SSE streams, missing mid-run usage data, WebSocket retry logic that only handles 2 error codes leading to hard turn failures, all of which break long-running or production workflows.
3. Tooling reliability gaps: Edit tool fuzzy matching failures on whitespace differences, hardcoded keybindings that ignore user configuration, plan mode todo widgets that never update, all of which break expected tool behavior.
4. Model compatibility friction: Frequent model-specific failures (Claude Sonnet 5 temperature rejection, Anthropic cache_control errors with OpenRouter, Bun runtime zlib crashes) that require per-model workarounds.
Wait, let's make that concise, technical, suited for devs. Let's phrase it: "Recurring developer pain points identified from recent issues include:
1. Platform-specific stability gaps: Frequent high-severity bugs on Mac OS (100%+ CPU usage on long sessions) and Windows (CMD memory leaks/duplicate output, silent settings.json parsing failures, WSL Copilot login hangs) that break core functionality for users on non-Linux environments.
2. Streaming protocol fragility: Structural gaps in streaming handling that cause permanent hangs on stalled SSE streams, missing mid-run usage metrics, and hard turn failures for unhandled WebSocket error codes, breaking long-running and production-facing workflows.
3. Tooling reliability inconsistencies: Frequent edge case failures in core tools including edit tool fuzzy matching breaking on whitespace differences, hardcoded keybindings that ignore user configuration, and plan mode todo widgets that fail to update during execution.
4. Model/provider compatibility friction: Recurring model-specific failures (Claude Sonnet 5 temperature parameter rejection, Anthropic cache_control errors via OpenRouter, Bun runtime zlib decompression crashes) that require per-model workarounds and break out-of-the-box functionality."

Wait, let me check if all links are included correctly, each issue and PR has the correct GitHub link. Also, make sure the highlights are accurate. Let's check the data again: PR #7982 is indeed the fix for #7911, the usage regression. PR #7978 is the edit fix, PR #7959 is the SSE hang fix. The draft agent harness PR is #7976, which I mentioned in highlights. The Mac CPU issue is #7730, which is a hot issue. Also, the WSL Copilot login hang is #6187, which is closed now, right? The data says [CLOSED], so that's resolved.

Wait, also in the hot issues, #7850 is closed no-action? Wait the data says [CLOSED] [bug, no-action] for #7850? Let me check: yes, #7850 is [CLOSED] [bug, no-action] but has 7 upvotes. So I should note that it's marked no-action but has high community upvotes, indicating it's a common pain point for enterprise Copilot users.

Also, #7947 is the Windows CMD P0 bug, closed, so that's resolved, good to note.

Wait, let's make sure the hot issues are 10, let's count:
1. #7730 (open, Mac CPU, 8👍,10 comments)
2. #6187 (closed, WSL Copilot hang, 25 comments)
3. #7846 (closed, Bun runtime crash, 10 comments)
4. #7553 (open, compaction thinking level, 8 comments)
5. #7850 (closed no-action, Copilot 429 for orgs,7👍)
6. #7836 (open, edit fuzzy match whitespace, 6 comments)
7. #7829 (open, Windows settings.json error, 3 comments)
8. #7911 (open inprogress, mid-run usage missing, 2 comments)
9. #7947 (closed, Windows CMD leak/duplicate output, 2 comments)
10. #7805 (open, root md files loaded as skills, 2 comments) Wait, earlier I had #7936 but #7805 is also open, about skill directory docs being loaded as skills, which is a config pain point. Or #7936 is the tmux inline images, which is a feature request. Let's pick #7805 instead? Wait no, let's see: #7805 is open, 2 comments, about skill directories loading root md files as skills, causing validation warnings. That's a developer pain point for people using custom skills. Alternatively, #7936 is a feature request for inline images in tmux. Let's go with #7805 as the 10th hot issue, because it's a bug that affects users configuring custom skills, which is a common use case for developer tools. Wait, let's adjust the hot issues list to make sure they are all noteworthy:

1. [Issue #7730](https://github.com/earendil-works/pi/issues/7730) (OPEN | 8 👍 | 10 comments): High CPU usage (50-110%) and elevated memory usage (600-800MB) on Mac OS during long sessions, with community reports tying the issue to increasing context size. This is the highest-upvoted open bug in the tracker, affecting a large segment of Mac-based Pi users.
2. [Issue #6187](https://github.com/earendil-works/pi/issues/6187) (CLOSED | 25 comments): Pi login hangs in WSL after completing browser-based GitHub Copilot device authorization, breaking Copilot integration for the popular WSL development environment. The high comment count indicates widespread user impact, and the issue is now resolved.
3. [Issue #7846](https://github.com/earendil-works/pi/issues/7846) (CLOSED | 10 comments): Pi crashes on startup for users running the Bun JavaScript runtime, with an uncaught `zlib.createZstdDecompress is not a function` error. This breaks support for Bun, a high-performance runtime increasingly used for Node.js tooling.
4. [Issue #7553](https://github.com/earendil-works/pi/issues/7553) (OPEN | 8 comments): Request for configurable thinking levels for context compaction, as current behavior reuses the session's active thinking level, wasting reasoning budget for users running auto-compaction on reasoning models.
5. [Issue #7850](https://github.com/earendil-works/pi/issues/7850) (CLOSED, no-action | 7 👍): GitHub Copilot login fails with 429 rate limiting for enterprise organizations with 20+ activated models, breaking Copilot access for large enterprise users. Despite being marked no-action, the high upvote count indicates widespread unmet demand for a fix.
6. [Issue #7836](https://github.com/earendil-works/pi/issues/7836) (OPEN | 6 comments): The edit tool's fuzzy match fails to match lines that differ only in whitespace length, breaking edit reliability for small models that output inconsistent whitespace formatting.
7. [Issue #7829](https://github.com/earendil-works/pi/issues/7829) (OPEN | 3 comments): Invalid `settings.json` configurations (e.g. unescaped backslashes in Windows paths) are silently ignored, leading to a misleading "bash not found" error on Windows, a common pain point for Windows users configuring custom shells.
8. [Issue #7911](https://github.com/earendil-works/pi/issues/7911) (OPEN, in-progress | 2 comments): 0.84.0 removed cumulative `usage` data from mid-run streaming `message_update` events, breaking tooling that relies on real-time usage tracking during streaming turns. A fix is in progress via PR #7982.
9. [Issue #7947](https://github.com/earendil-works

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Got it, let's tackle this Qwen Code community digest for 2026-08-12. First, I need to follow the exact structure the user asked for, make sure it's concise, professional, for devs, and include all the relevant links from the data.

First section: Today's Highlights. Let's look at the top updates. The main release is v0.21.10, right? And the big highlight is ACP support for configurable reasoning effort levels from Default to Max via session config. Also, the Web Shell image preview feature. Wait, also there's the v0.21.9 nightly? No, the latest release is v0.21.10, plus the key highlight is the ACP reasoning effort config, image preview in Web Shell, and also some key fixes and PRs around daemon resource management, ACP session handling, and Web Shell UX. Let me condense that to 2-3 sentences. Let's see: "Qwen Code v0.21.10 is now live, introducing configurable ACP reasoning effort levels (Default to Max) via session settings and Web Shell image preview support for uploaded/pasted assets. The community also saw progress on core daemon resource guard improvements, ACP session reliability fixes, and Web Shell UX enhancements, alongside active bug triage for cross-platform and CLI edge cases." Wait, that's good, covers the main points.

Next section: Releases. The latest is v0.21.10, released in the last 24h. Let's summarize what's in it: "v0.21.10 (latest stable, released 2026-08-12) adds ACP support for session-level reasoning effort configuration (Default to Max range) and enables image previews for uploaded/pasted images in the Web Shell. A preceding v0.21.9-nightly.20260811 build was also published for testing." Wait, right, the data mentions v0.21.9 nightly too, but the main release is v0.21.10. Make sure to note that.

Third section: Hot Issues, pick 10 noteworthy ones, explain why they matter and community reaction. Let's go through the top ones by comment count and priority first. Let's list them:

1. #8678: P1 bug, session management, large restore timeout. It's P1, merged PR already for timeout safety, but still open for preserving current session on timeout. Comments 7, so high engagement. Why it matters: Affects daemon reliability for large session restores, which is critical for long-running workflows. Community reaction: Active triage, PR already merged for core timeout fixes, ongoing work for session preservation.

2. #8504: P2 bug, provider update prompt repeats when custom models are preserved. Closed? Wait no, wait #8504 is CLOSED? Wait the data says [CLOSED] for #8504. Wait let's check: yes, #8504 is closed, but it's a high-comment one. Wait no, let's pick the top open ones first, but include relevant closed ones if they're noteworthy. Wait #8504: repeated provider update prompts when custom models exist, affects v0.21.4+. Why it matters: Breaks provider update UX for users with custom model configs, leads to unnecessary repeated prompts. Community reaction: 5 comments, fixed in a merged PR? Wait it's closed, so probably resolved.

3. #8959: P2 bug, main CI E2E test failure. Open, 4 comments. Why it matters: Blocks main branch merges, affects release pipeline stability. Community reaction: Tracked per commit, CI run linked, active investigation.

4. #8901: P2 bug, iTerm flicker on macOS when selecting command approval options. Open, 4 comments. Why it matters: Degrades CLI UX for macOS iTerm users, a common terminal emulator. Community reaction: Multiple reports, reproducible on 0.21.8.

5. #8897: P2 bug, --approval-mode and --auth-type missing from qwen --help despite being valid flags. Open, 4 comments. Why it matters: Creates discoverability gaps for CLI users, leads to confusion about available options. Community reaction: Reproducible on 0.21.9, flags work but are undocumented in help output.

6. #8920: P2 bug, OpenAI API errors in stream-json headless mode emit success result and exit 0. Open, 4 comments. Why it matters: Breaks headless/CI integrations that rely on exit codes and error flags to detect failures. Community reaction: Reproducible on 0.21.9, error is hidden in success response payload.

7. #8182: P2 bug, daemon authorizes each ACP child 50% of host memory, no division by child count. Open, 4 comments. Why it matters: Causes memory overcommitment when running multiple ACP child processes, risks OOM crashes in multi-agent workflows. Community reaction: Active discussion, root cause identified in spawnChannel.ts logic.

8. #8909: P2 bug, cold load/resume uses wrong runtime storage in multi-workspace mode. Open, 3 comments. Why it matters: Breaks session resume functionality for users working with multiple workspaces in daemon mode. Community reaction: Root cause traced to missing ambient storage context in restore critical section.

9. #8944: P2 bug, 2 high-severity npm vulnerabilities introduced after v0.21.0. Open, 3 comments. Why it matters: Creates security risk for users installing/updating Qwen Code, blocks adoption in security-sensitive environments. Community reaction: Reproducible on post-0.21.0 installs, audit fails consistently.

10. #8957: P2 regression, Qwen Code crashes on image load since v0.21.2. Open, 3 comments. Why it matters: Breaks core image handling functionality for all users on v0.21.2+, the last working version is 0.21.1. Community reaction: Immediate crash on image load, widespread regression.

Wait that's 10, perfect. Let's make sure each has the link, why it matters, community reaction.

Fourth section: Key PR Progress, pick 10 important PRs. Let's go through the top ones:

1. #8955: fix(web-shell): Harden prompt admission ownership. Open, by doudouOUC. What it does: Hardens WebShell prompt ownership across session navigation, revalidates App lifetime, session owner, composer source, and write-gate after async admission to prevent unauthorized submissions. Why it matters: Fixes security and data integrity gaps in WebShell session handling.

2. #8956: feat(review): cover modeled-system defect layers in reverse audit. Open, by wenshao. What it does: Adds a defect-layer lens to the review skill's reverse audit for diffs that model external system execution (shell guards, sandboxes, permission interpreters), improving review coverage for infrastructure code. Why it matters: Enhances code review quality for security-critical system configuration changes.

3. #8947: fix(serve): Close daemon ACP resource guard gaps. Open, by doudouOUC. What it does: Follow-up to #8911, closes resource-ownership gaps in bounded daemon ACP transport, validates JSON-RPC envelopes, caps active handlers/prepared responses/outbound operations to prevent resource exhaustion. Why it matters: Fixes memory and stability issues in multi-ACP daemon deployments, pairs with the related #8182 bug fix.

4. #8677: feat(tui): OpenTUI renderer backend (react track). Open, by chiga0. What it does: Implements a new flicker-free, first-class mouse TUI renderer backend for qwen-code using OpenTUI/React, replacing the legacy TUI implementation. Why it matters: Major UX upgrade for CLI users, fixes long-standing flicker and input issues.

5. #8675: feat(web-shell): add model-specific reasoning controls. Open, by callmeYe. What it does: Adds a model reasoning-controls registry that propagates thinking and effort controls across Core, ACP, daemon, SDK, and WebShell, starting with Qwen 3.x model support. Why it matters: Unifies reasoning effort configuration across all Qwen Code interfaces, pairs with the v0.21.10 ACP reasoning effort highlight.

6. #8733: feat(core): address other sessions by name from send_message and list_agents. Open, by qqqys. What it does: Allows users to list all local Qwen Code sessions via list_agents and send messages to other sessions by name, enabling cross-session collaboration. Why it matters: Improves multi-session workflow usability for power users.

7. #8613: feat(web-shell): tmux-backed interactive terminal sub-agent. Open, by wenshao. What it does: Lets agents run interactive CLIs (REPLs, TUIs, other CLIs) inside tmux sessions on the daemon host, with live interactive terminal views in the Web Shell. Why it matters: Enables new classes of interactive agent workflows that require TTY access.

8. #8457: feat(web-shell): expose channel sessions in sidebar and settings. Open, by BZ-D. What it does: Adds a Channels view to the Web Shell sidebar to show sessions started via integrations (DingTalk, Feishu, WeCom), alongside the default Tasks view. Why it matters: Improves visibility and management of integration-triggered sessions for operators.

9. #8403: feat(audit): add legacy code audit workflow. Open, by wenshao. What it does: Implements a /audit <directory> command for auditing existing codebases without a PR/diff, with configurable effort levels (low/medium/high). Why it matters: Expands Qwen Code's code review capabilities to legacy codebases and pre-PR review use cases.

10. #8927: feat(channels): bound session lifetime with sessionRotation. Open, by qwen-code-dev-bot. What it does: Adds per-channel sessionRotation config to bound session lifetime by maxTurns or maxAge, automatically starting fresh sessions when bounds are exceeded. Why it matters: Prevents session bloat and stale state in long-running channel integrations.

Wait that's 10, all relevant. Let's make sure each has the link, description, why it matters.

Fifth section: Feature Request Trends. Let's look at all the open feature requests. Let's see: #8908 is feat(serve): standalone sessions without workspace, #8941 is feat(web-shell): visualize dynamic workflow runs, #8946 is incremental delta PR review, #8958 is CI delta review, #8827 is test hardening, #8945 is bot PR review deduplication, #8608 is inline image perf, #8695 is context usage display deduplication, #8514 (closed) was ACP reasoning effort which is now implemented. Wait the trends: 1. Daemon and session management enhancements: standalone sessions, session lifetime bounds, cross-session messaging, ACP resource management. 2. Web Shell UX and functionality: dynamic workflow visualization, channel management, interactive sub-agents, model-specific controls. 3. CI/CD and automation improvements: incremental PR review, bot review deduplication, legacy code audit workflows. 4. Cross-platform stability: Windows launcher fixes, macOS terminal flicker fixes, Windows file link handling. Let's distill that: "The most requested feature directions center on four core areas: 1) Daemon and session management enhancements, including standalone workspace-free sessions, per-channel session lifetime bounds, and cross-session messaging capabilities; 2) Web Shell functionality expansion, with support for dynamic workflow run visualization, interactive tmux-backed sub-agents, and integration channel session management; 3) CI/automation improvements, including incremental delta PR review, bot PR review deduplication, and legacy codebase audit workflows; 4) Cross-platform stability fixes for Windows, macOS, and headless CLI environments." That's good, covers the trends from the issues.

Sixth section: Developer Pain Points. Let's look at recurring frustrations. First, memory/resource management in daemon mode: #8182 (ACP memory overcommit), #8091 (daemon resource protection decomposition), #8947 (resource guard gaps). Second, session management reliability: #8678 (restore timeouts), #8909 (multi-workspace resume storage), #8837 (missing scheduled prompts in restored transcripts), #8433 (MCP tools fail in resumed sessions). Third, CLI/UX inconsistencies: #8897 (undocumented valid CLI flags), #8901 (iTerm flicker), #8920 (headless error handling), #8644 (Windows file link encoding), #8922 (shell tool output truncation ignores config). Fourth, provider and model configuration bugs: #8504 (repeated provider update prompts), #8948 (provider update prompt mismatch for model switching), #8525 (Qwen 3.8 reasoning budget conflicts). Fifth, security and vulnerability noise: #8944 (post-0.21.0 npm high-severity vulnerabilities). Let's summarize that concisely: "Recurring developer pain points cluster in five key areas: 1) Daemon resource management, with frequent reports of memory overcommitment for ACP child processes and unstable resource guard behavior in multi-workspace deployments; 2) Session reliability, including broken resume functionality for large sessions, missing scheduled prompts in restored transcripts, and MCP tool failures in resumed sessions; 3) CLI/UX inconsistencies, such as undocumented valid flags, macOS iTerm flicker, broken Windows file link handling, and ignored tool output truncation configs; 4) Provider/model configuration bugs, including repeated provider update prompts and mismatched model switching behavior after updates; 5) Security and CI stability, with recurring high-severity npm vulnerabilities in post-0.21.0 releases and flaky E2E test pipelines blocking main branch merges." That's perfect, covers all the recurring issues.

Wait let's make sure all links are included where appropriate. Let's check each section:

1. Today's Highlights: No specific links needed here, just summary.

2. Releases: Link to v0.21.10 release? Wait the data says the latest release is v0.21.10, the changelog is https://github.com/QwenLM/qwen-code/releases/tag/v0.21.10? Wait no, the data says "Full Changelog: https:" wait no, the data cuts off, but we can link to the releases page: https://github.com/QwenLM/qwen-code/releases. Wait no, better to link to the specific release if possible, but since the data says v0.21.10, we can note the release page.

Wait no, for each issue and PR, we need to include the GitHub link as per the data. Let's make sure each issue and PR has the correct link: e.g., Issue #8678 is https://github.com/QwenLM/qwen-code/issues/8678, PR #8955 is https://github.com/QwenLM/qwen-code/pull/8955, etc.

Wait let's adjust each section to make sure links are present, and the style is concise, professional, for devs.

Wait let's check if we missed any key points. Oh, the v0.21.9 nightly is mentioned, but the main release is v0.21.10, so we can note that in releases. Also, the highlight about ACP reasoning effort is from PR #8526? Wait no, the highlight says "Added ACP support for configuring reasoning effort levels from Default to Max via session configuration. (#8526)" Oh right, that's PR #8526, which is closed? Wait #8514 is the feature request for that, which is closed, so that's implemented in v0.21.10. Good.

Wait let's make sure the Hot Issues are the top 10, ordered by priority and comment count. Let's reorder them:

1. #8678 (P1, 7 comments) - fix(serve): Preserve the current session when a large restore times out. Link: https://github.com/QwenLM/qwen-code/issues/8678. Why it matters: Critical P1 bug affecting daemon reliability for large session restores, a core workflow for long-running agent tasks. Community reaction: Core timeout safety logic already merged in #8691, ongoing work for session preservation post-timeout.

2. #8959 (P2, 4 comments) - Main CI failed: E2E Tests. Link: https://github.com/QwenLM/qwen-code/issues/8959. Why it matters: Blocks main branch merges and release pipeline stability, impacting all contributors. Community reaction: Tracked per commit, linked to failed CI run #31529462612, active investigation by the dev bot.

3. #8901 (P2, 4 comments) - mac中iTerm使用总是出现闪屏 (iTerm flicker on macOS). Link: https://github.com/QwenLM/qwen-code/issues/8901. Why it matters: Degrades CLI UX for a large subset of macOS users using the popular iTerm terminal emulator. Community reaction: Reproducible on v0.21.8, multiple user reports of flicker when confirming command execution prompts.

4. #8897 (P2, 4 comments) - --approval-mode and --auth-type missing from qwen --help. Link: https://github.com/QwenLM/qwen-code/issues/8897. Why it matters: Creates a discoverability gap for valid CLI flags, leading to user confusion and underutilization of available features. Community reaction: Reproducible on v0.21.9, flags function as expected but are omitted from help output.

5. #8920 (P2, 4 comments) - OpenAI API errors emit success result and exit 0 in stream-json headless mode. Link: https://github.com/QwenLM/qwen-code/issues/8920. Why it matters: Breaks headless/CI integrations that rely on exit codes and error flags to detect API failures, leading to silent failures in automated workflows. Community reaction: Reproducible on v0.21.9, errors are buried in success response payloads instead of being surfaced as failures.

6. #8182 (P2, 4 comments) - bug(serve): daemon authorises each ACP child 50% of host memory, never divided by child count. Link: https://github.com/QwenLM/qwen-code/issues/8182. Why it matters: Causes memory overcommitment when running multiple ACP child processes, risking OOM crashes in multi-agent workflows. Community reaction: Root cause identified in `packages/acp-bridge/src/spawnChannel.ts` logic, active discussion on fix approaches.

7. #8504 (P2, 5 comments, CLOSED) - Provider update prompt repeats when custom models are preserved. Link: https://github.com/QwenLM/qwen-code/issues/8504. Why it matters: Breaks provider update UX for users with custom model configurations, leading to repeated unnecessary prompts after successful updates. Community reaction: Reproducible on

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

Got it, let's tackle this DeepSeek TUI community digest. First, wait, the repo is Hmbown/CodeWhale? Wait the user said DeepSeek TUI but the data is CodeWhale? Oh right, probably the project was rebranded or the TUI is part of CodeWhale? Wait no, let's check the data first.
First, section 1: Today's Highlights. Let's see the latest stuff. First, there's a closed bug fix for nested subagent max_depth (PR #5317 closed, issue #5253 closed), that's a fix. Then there's a new PR for OrcaRouter provider integration (#5321), a new PiP feature for Windows host terminal (#5318), and a fix for wide terminal output regression (#5322 open). Also, the epic for crate decomposition is ongoing. Let's condense that to 2-3 sentences. Let's see: "On 2026-08-12, the CodeWhale TUI community saw progress on core stability and feature expansion: a critical subagent recursion depth regression was patched and merged, while open PRs add Windows picture-in-picture terminal pinning, OrcaRouter provider support, and fixes for wide terminal output and session snapshot reliability. The ongoing EPIC-005 crate decomposition effort remains active, tracking structural refactors for the codebase." Wait that's good, mentions the key points.
Next, Releases: the latest releases say none in last 24h, so we just state that: "No new stable releases were published in the last 24 hours. The most recent available version remains v0.9.5, which is the subject of an open wide-terminal output regression report." Perfect, that's accurate.
Then Hot Issues: pick 10? Wait wait the total issues are 3? Wait wait the user said pick 10 noteworthy, but there's only 3? Wait wait let's check again: latest issues total 3 items. Oh right, so we have to list all 3, explain why they matter, community reaction. Wait let's list each:
First, #5316: EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella) [OPEN]. Why it matters: This is the top-level tracking issue for a major structural refactor of the CodeWhale TUI codebase, breaking the project into modular crates to improve maintainability and extensibility. All related sub-features and PRs will be logged here. Community reaction: 2 comments as of the digest date, no upvotes yet, indicating early-stage tracking with limited community engagement so far. Link: https://github.com/Hmbown/CodeWhale/issues/5316
Second, #5322: [bug] Regression: output area doesn't fill wide terminals (worked in v0.8.65) [OPEN]. Why it matters: This is a user-facing UI regression introduced in v0.9.x that breaks layout for users with wide displays, causing cramped text and unused whitespace. It impacts core usability for a common workflow. Community reaction: 1 comment as of 2026-08-11, no upvotes yet, with the reporter providing clear reproduction steps for the team. Link: https://github.com/Hmbown/CodeWhale/issues/5322
Third, #5253: [bug] bug(subagents): nested max_depth can widen the root session depth budget [CLOSED]. Why it matters: This was a critical logic bug in subagent spawning that allowed nested agents to bypass root session recursion limits, potentially causing runaway resource usage or infinite agent loops. Community reaction: 1 comment, fixed via merged PR #5317, indicating the issue was prioritized and resolved quickly after report. Link: https://github.com/Hmbown/CodeWhale/issues/5253
Wait the user said pick 10, but there's only 3 issues in the last 24h? Oh right, the data says latest issues total 3 items. So we note that only 3 issues were updated in the last 24h, so we list all 3 as the noteworthy ones, right? That makes sense, we can't make up issues.
Next, Key PR Progress: pick 10, there are 7 PRs listed, so we can list all 7, explain each:
1. #5318 [OPEN] feat(tui): pin host terminal window as an always-on-top mini window (Author: SparkofSpike, updated 2026-08-11). What it does: Adds Windows-specific picture-in-picture functionality, letting users shrink the host terminal to 640x400 and pin it as an always-on-top window via right-click context menu or /pin command, toggling back to original size/state on repeat activation. Significance: Improves multitasking workflows for Windows users working alongside other applications. Link: https://github.com/Hmbown/CodeWhale/pull/5318
2. #5321 [OPEN] feat: register OrcaRouter as a named provider (Author: XiaoHuo888-hue, updated 2026-08-11). What it does: Adds OrcaRouter (an OpenAI-compatible gateway supporting 150+ models) as a first-class provider, consistent with existing OpenRouter integration, so it appears in the model picker, config references, and docs. Users only need a sk-orca- prefixed API key to access supported models. Significance: Expands model selection options for users without requiring custom provider configuration. Link: https://github.com/Hmbown/CodeWhale/pull/5321
3. #5320 [OPEN] fix(session): separate snapshot reads from crash recovery (Author: h3c-hexin, updated 2026-08-11). What it does: Splits session snapshot functionality into two distinct paths: side-effect-free load_session_snapshot for reads during active tool calls, and recover_session_for_resume which returns repair statistics for embedding hosts to use after engine/process restarts, avoiding race conditions with transcript locks. Significance: Fixes potential data corruption and race conditions in session persistence for embedded use cases. Link: https://github.com/Hmbown/CodeWhale/pull/5320
4. #5319 [OPEN] fix(tui): copy messages without visual rails (Author: XhesicaFrost, updated 2026-08-11). What it does: Fixes the copy message function to copy canonical source content for User and Assistant cells instead of rendered Ratatui UI lines, while preserving full-transcript copy behavior for complex cells (Tool, Thinking, System) to avoid regressing detail. Includes regression tests for the fix. Significance: Fixes a long-standing pain point where copied message content included unnecessary UI formatting. Link: https://github.com/Hmbown/CodeWhale/pull/5319
5. #5225 [CLOSED] feat(acp): expose file/search/git/patch/shell tools over session/prompt (Author: rafaelcavalheri, updated 2026-08-11). What it does: Modifies the ACP server's session/prompt endpoint to execute tool calls requested by models, rather than only streaming text. This enables ACP-connected editors (Zed, acp-deepseek-adapter) to use CodeWhale as a full code-editing agent instead of a chat-only agent. Significance: Unlocks integration with third-party developer tools for automated code editing workflows. Link: https://github.com/Hmbown/CodeWhale/pull/5225
6. #5277 [OPEN] [dependencies, github_actions] build(deps): bump docker/login-action from 4.5.2 to 4.6.0 (Author: dependabot[bot], updated 2026-08-11). What it does: Updates the GitHub Actions docker/login-action dependency to v4.6.0, which includes security hardening improvements. Significance: Reduces supply chain risk for CI/CD pipelines. Link: https://github.com/Hmbown/CodeWhale/pull/5277
7. #5317 [CLOSED] fix(subagents): cap nested max_depth by inherited budget (Author: ousamabenyounes, updated 2026-08-11). What it does: Fixes the bug reported in issue #5253 by modifying child_max_spawn_depth_for_spawn to cap explicit max_depth values by the inherited session recursion budget, mirroring existing behavior for profile-hinted depth limits. Significance: Prevents runaway subagent recursion and resource exhaustion from misconfigured nested spawns. Link: https://github.com/Hmbown/CodeWhale/pull/5317
That's all 7 PRs, which is all the ones listed. We can note that 7 PRs were updated in the last 24h, all are listed here.
Next, Feature Request Trends: distill from issues. Wait the issues we have: the epic is for crate decomposition, the bug is output regression, the other bug is subagent depth. Wait but also, looking at the PRs, there are feature requests for provider support, ACP tool exposure, PiP for terminals, copy fixes. Wait let's see: the most requested feature directions from issues and related PRs? Let's see: 1) Expanded model provider support (evidenced by the OrcaRouter integration PR, a common request for users to access more models without custom config). 2) Improved ACP integration for third-party developer tools (the closed PR for exposing tools over ACP addresses a long-standing request for editor integrations). 3) Enhanced TUI usability for edge cases (wide terminal support, clean copy functionality, Windows-specific terminal window management). Wait also, the crate decomposition epic is a structural feature that will enable future extensibility, so that's a trend towards modular codebase to support more features. Let's phrase that: "Feature request trends from recent community activity center on three core areas: 1) Expanded model access, with requests for first-class support for additional OpenAI-compatible gateway providers to reduce custom configuration overhead; 2) Deeper third-party tool integration, particularly via the Agent Communication Protocol (ACP) to enable code-editing capabilities in external editors like Zed; 3) TUI usability refinements for edge workflows, including wide-terminal layout support, clean content copying, and OS-specific terminal window management for multitasking." That's accurate, based on the PRs and issues.
Then Developer Pain Points: summarize recurring frustrations. Let's see: from the open issues and PRs: 1) UI regressions in core TUI functionality: the wide-terminal output regression in v0.9.5 is a recent example of layout breaks that impact daily use, and the copy message bug was a long-standing pain point fixed in PR #5319. 2) Subagent configuration edge cases: the nested max_depth bug (now fixed) caused unexpected resource usage for users running complex multi-agent workflows, indicating that subagent configuration semantics are not always intuitive. 3) Limited out-of-the-box provider support: users previously had to manually configure non-OpenRouter providers, a pain point addressed by the pending OrcaRouter integration PR. 4) Session persistence race conditions for embedded use cases: the snapshot/crash recovery separation PR addresses a pain point for developers building integrations that embed CodeWhale, who previously faced data corruption risks from concurrent access. Wait let's make that concise: "Recurring developer pain points identified from recent activity include: 1) Core TUI layout regressions (e.g., wide-terminal output capping, copy functionality including UI artifacts) that break common workflows; 2) unintuitive subagent recursion configuration that can lead to unexpected resource exhaustion for complex multi-agent use cases; 3) limited out-of-the-box model provider support requiring manual custom configuration for non-OpenRouter gateways; 4) session persistence race conditions for embedded use cases that risk data corruption during concurrent access or crash recovery."
Wait let's make sure all links are included, style is concise, professional, for technical devs. Let's check if we missed anything. Wait the user said DeepSeek TUI, but the repo is CodeWhale? Oh wait, maybe DeepSeek TUI is the former name, or the project is now CodeWhale? Wait the data says Hmbown/CodeWhale, so we should refer to it as CodeWhale TUI, right? Because the user said DeepSeek TUI, but the repo is CodeWhale. Wait let's check the issue titles: the first issue says CodeWhale TUI Crate Decomposition, so the project is CodeWhale, maybe previously DeepSeek TUI? We can note that? Wait no, the user said "generate the DeepSeek TUI community digest" but the data is from Hmbown/CodeWhale. Oh, maybe that's the new name? Wait no, let's just use the repo name as per the data, but maybe mention that this is the community digest for the project formerly known as DeepSeek TUI? Wait no, wait the user provided the data source as github.com/Hmbown/DeepSeek-TUI? Wait wait wait, hold on, the user's data source says # Data source: github.com/Hmbown/DeepSeek-TUI but the issues and PRs are from Hmbown/CodeWhale? Oh, that's a typo? Wait no, let's check the issue URLs: the issues say Hmbown/CodeWhale Issue #5316, PRs say Hmbown/CodeWhale PR #5318. Oh, so maybe the user wrote the data source wrong, or the repo was renamed from DeepSeek-TUI to CodeWhale? Wait but the user said "DeepSeek TUI community digest", so maybe we should refer to it as DeepSeek TUI (now CodeWhale)? Wait no, let's see: the first issue says "CodeWhale TUI Crate Decomposition", so the TUI is part of CodeWhale, maybe DeepSeek TUI was rebranded to CodeWhale? Wait but the user's data source says DeepSeek-TUI. Hmm, maybe that's a mistake in the user's input, but the actual data is from CodeWhale. Wait let's just go with the data: the project is CodeWhale, with a TUI component, and the user wants the digest for DeepSeek TUI, so maybe note that this digest covers the CodeWhale TUI (the evolution of the DeepSeek TUI project)? Wait no, maybe the user just used the old name. Let's just proceed with the data as given, since all the issues and PRs are for CodeWhale, so the digest is for the CodeWhale TUI community, which is the project the user refers to as DeepSeek TUI.
Wait also, in the Hot Issues section, the user said pick 10, but there are only 3 issues updated in the last 24h, so we should note that only 3 issues were updated in the reporting window, so all are listed as noteworthy. That's okay, we don't make up issues.
Let me structure each section properly now, making sure links are included, concise, professional.
Wait let's start drafting:
# DeepSeek TUI (CodeWhale) Community Digest
Date: 2026-08-12
Data Source: github.com/Hmbown/CodeWhale
---
## 1. Today's Highlights
Over the last 24 hours, the community resolved a critical subagent recursion depth regression that could cause runaway resource usage, while advancing work on user-facing feature improvements: open PRs add Windows picture-in-picture terminal pinning, first-class OrcaRouter provider support, and fixes for wide-terminal output layout and session persistence race conditions. The top-level EPIC-005 crate decomposition refactor remains active, tracking structural modularization of the TUI codebase.
## 2. Releases
No new stable releases were published in the last 24 hours. The latest available version is v0.9.5, which is the subject of an open user-reported wide-terminal output regression.
## 3. Hot Issues
Only 3 issues were updated in the last 24 hours; all are listed below as noteworthy:
- [OPEN] #5316: EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella) (https://github.com/Hmbown/CodeWhale/issues/5316)
  Why it matters: This is the top-level tracking issue for a major structural refactor of the TUI codebase, breaking the project into modular crates to improve long-term maintainability and extensibility. All related sub-features, bugs, and PRs for the decomposition effort will be logged here.
  Community reaction: 2 comments as of 2026-08-11, no upvotes, indicating early-stage tracking with limited public engagement to date.
- [OPEN] #5322: [bug] Regression: output area doesn't fill wide terminals (worked in v0.8.65) (https://github.com/Hmbown/CodeWhale/issues/5322)
  Why it matters: This is a high-impact user-facing UI regression introduced in v0.9.x that breaks layout for users with wide displays, causing cramped text and unused whitespace during core coding workflows.
  Community reaction: 1 comment as of 2026-08-11, no upvotes, with the reporter providing clear, reproducible steps to trigger the bug for the maintainer team.
- [CLOSED] #5253: [bug] bug(subagents): nested max_depth can widen the root session depth budget (https://github.com/Hmbown/CodeWhale/issues/5253)
  Why it matters: This was a critical logic bug in subagent spawning that allowed nested child agents to bypass root session recursion limits, potentially causing infinite agent loops or unplanned resource exhaustion for complex multi-agent workflows.
  Community reaction: 1 comment, resolved quickly via merged PR #5317, indicating the issue was prioritized by the maintainer team after report.
## 4. Key PR Progress
7 PRs were updated in the last 24 hours; all are listed below:
- [OPEN] #5318: feat(tui): pin host terminal window as an always-on-top mini window (https://github.com/Hmbown/CodeWhale/pull/5318)
  Author: SparkofSpike | Updated: 2026-08-11
  Description: Adds Windows-specific picture-in-picture functionality, letting users shrink the host terminal to 640x400 and pin it as an always-on-top window via right-click context menu or `/pin` command, toggling back to the original size and maximized state on repeat activation.
  Significance: Improves multitasking workflows for Windows users working alongside other applications while using the TUI.
- [OPEN] #5321: feat: register OrcaRouter as a named provider (https://github.com/Hmbown/CodeWhale/pull/5321)
  Author: XiaoHuo888-hue | Updated: 2026-08-11
  Description: Adds OrcaRouter (an OpenAI-compatible gateway supporting 150+ models) as a first-class provider, consistent with existing OpenRouter integration, so it appears natively in the model picker, config references, and documentation. Users only need a `sk-orca-` prefixed API key to access supported models.
  Significance: Expands out-of-the-box

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

# ComfyUI Community Digest | 2026-08-12
*Source: github.com/comfyanonymous/ComfyUI*

---

## 1. Today's Highlights
ComfyUI v0.32.0 launched today with improved nested tensor debugging tools and a bump to the minimum officially supported PyTorch version (2.7). The vast majority of recent core and community development activity is centered on stabilizing and expanding MiniMax H3 video generation support, with 14+ open issues and 5+ in-progress PRs targeting the model. A widespread regression in v0.30+ memory management for quantized models is also drawing significant user frustration across low-VRAM and ROCm hardware configurations.

---

## 2. Releases
### v0.32.0 (2026-08-12)
- Added tooling to simplify debugging of nested tensor operations ([PR #15383](https://github.com/Comfy-Org/ComfyUI/pull/15383))
- Updated bundled workflow templates to v0.11.37 ([PR #15415](https://github.com/Comfy-Org/ComfyUI/pull/15415))
- Bumped minimum officially supported PyTorch version to 2.7
Full changelog: [ComfyUI v0.32.0 Release Notes](https://github.com/comfyanonymous/ComfyUI/releases/tag/v0.32.0)

---

## 3. Hot Issues (Top 10 Noteworthy)
| Issue ID | Summary | Why It Matters | Community Reaction |
|----------|---------|----------------|--------------------|
| [#15263](https://github.com/Comfy-Org/ComfyUI/issues/15263) | MiniMax H3 SageAttention FP8 PV kernels produce noise above ~160k tokens on sm_120 (Blackwell GPUs) | Impacts high-end RTX 50 series users running H3 with FP8 acceleration; edit confirms fix in v0.31.1 for most users | 14 comments, high engagement from H3 power users testing workarounds |
| [#14382](https://github.com/Comfy-Org/ComfyUI/issues/14382) | `AttributeError: 'Linear' object has no attribute 'weight_scale'` when merging quantized (fp8/QuantizedTensor) models | Core bug breaking common model fusion workflows for quantized generative models, no custom nodes involved | 10 comments, multiple users reporting identical errors with no official fix yet |
| [#15445](https://github.com/Comfy-Org/ComfyUI/issues/15445) | Official MiniMax H3 workflow runs slower after v0.31 update | Regression impacting all users running the out-of-the-box H3 reference workflow | 8 comments, widespread confirmation of the slowdown from the community |
| [#15433](https://github.com/Comfy-Org/ComfyUI/issues/15433) | `ImageUpscaleWithModel` crashes on 4GB GPUs with device type mismatch (v0.29+ regression) | Breaks a core image processing workflow for users with entry-level hardware | 5 comments, users report the bug blocks basic upscaling on low-VRAM systems |
| [#15488](https://github.com/Comfy-Org/ComfyUI/issues/15488) | MiniMax H3 causes GPU lost / TDR black-screen on RTX 5070 Ti when system has 64GB RAM; stable when RAM capped to 32GB | Points to a critical system memory / GPU memory interaction bug affecting high-end Windows users | 4 comments, 5 👍, multiple users reporting identical crashes on RTX 50 series Windows builds |
| [#15494](https://github.com/Comfy-Org/ComfyUI/issues/15494) | MiniMax H3 comfyui-kitchen attention error: `quant_qk_per_thread_int8: Q/K base pointers and B/H/N strides must preserve 4-element alignment` | Blocks use of optimized comfyui-kitchen attention for H3, removing performance benefits | 3 comments, 5 👍, users requesting ROCm/CUDA alignment fixes |
| [#15484](https://github.com/Comfy-Org/ComfyUI/issues/15484) | MiniMax H3 VideoVAE intermittent slowdown on ROCm/Windows (reproducible on current master

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Community Digest | 2026-08-12
Source: [github.com/ollama/ollama](https://github.com/ollama/ollama)

---

## 1. Today's Highlights
Two minor Ollama releases shipped in the last 24 hours: v0.32.8 brought cross-platform support for the Muse Glimmer model, optimized for coding agents (Claude Code, Codex) and long-running personal assistants with state-of-the-art MLX performance on Apple Silicon, while v0.32.9 added the open 30B mixture-of-experts NVIDIA Nemotron 3.5 Lightning model for always-on agent execution layers. Active development is focused on MLX engine stability, AMD GPU memory detection fixes, and expanding OpenAI Responses API compatibility, while a closed security issue highlighted a critical gap where session tokens are not revoked after account credential changes.

---

## 2. Releases
| Version | Key Changes |
|---------|-------------|
| [v0.32.9](https://github.com/ollama/ollama/releases/tag/v0.32.9) | Adds NVIDIA Nemotron 3.5 Lightning, a 30B MoE model with 3B active parameters built for always-on agent use cases, with compatibility for harnesses like OpenClaw and Hermes Age. |
| [v0.32.8](https://github.com/ollama/ollama/releases/tag/v0.32.8) | Launches cross-platform support for the Muse Glimmer model, purpose-built for coding agent applications and long-running personal assistants, with optimized MLX performance for Apple Silicon. |

---

## 3. Hot Issues (Top 10 Noteworthy)
1. [ollama/ollama#17614](https://github.com/ollama/ollama/issues/17614): [bug] Lower quantization formats cause model to emit unintelligible/garbage responses  
   *Why it matters*: Breaks low-bit model use cases, a common optimization for running large models on consumer hardware with limited VRAM.  
   *Community reaction*: 12 comments, active discussion around KV cache quantization degradation as the root cause

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

Got it, let's tackle this llama.cpp community digest for 2026-08-12. First, I need to go through all the provided data and structure it exactly as requested, making sure each section is accurate, concise, and has the right links.

First, **Today's Highlights**. Let's look at the most important recent stuff. First, there's the ROCm 7.14 support landing in releases (b10356), right? Then the multi-output backend sampling fix (b10355) which is for speculative decoding, that's a big one for performance. Also, the community is actively working on ROCm/AMD iGPU fixes, like the UMA memory detection PR for Strix Halo, plus a bunch of bug reports around DeepSeek V4 and Gemma 4 on ROCm/CUDA. Wait, also the server-side MCP and tooling improvements are moving fast. Let me condense that to 2-3 sentences. Let's see:
> Today's highlights center on stability and performance improvements for AMD ROCm hardware (including new Strix Halo unified memory support) and speculative decoding workflows, alongside active progress on server-side tooling and MCP integration. Multiple recent releases also address long-standing crashes for Gemma 4 and DeepSeek V4 models across CUDA, ROCm, and Vulkan backends, while the community is actively debugging edge cases for new hardware like Intel Arc GPUs and AMD Ryzen AI Max+ systems.
Wait, that works. Let me make sure it's accurate. Yeah, the ROCm 7.14 release is there, the UMA fix PR is there, the multi-output sampling is for speculative decoding, the issues around DeepSeek V4 and Gemma 4 are hot. Good.

Next, **Releases**. The latest releases are b10361 down to b10354, all from the last 24h. Let's list the key changes for each, grouped logically? Wait, no, summarize the notable changes per release, with links. Let's list each relevant release and their key changes:
First, list the latest releases (all from the last 24h, per the data):
- [b10361](https://github.com/ggml-org/llama.cpp/releases/tag/b10361): Fixes Sliding Window Attention (SWA) not being enabled for EXAONE 4.5 models, caused by incorrect layer count parsing before nextn prediction layer parameters were loaded.
- [b10360](https://github.com/ggml-org/llama.cpp/releases/tag/b10360): Suppresses incomplete escape sequence errors in the PEG grammar parser.
- [b10358](https://github.com/ggml-org/llama.cpp/releases/tag/b10358): Addresses review feedback for PR #25532 (multi-output backend sampling support).
- [b10357](https://github.com/ggml-org/llama.cpp/releases/tag/b10357): Optimizes OpenCL flash attention prefill kernels by transposing the K tile in local memory.
- [b10356](https://github.com/ggml-org/llama.cpp/releases/tag/b10356): Adds official CI and release support for ROCm 7.14 (the first production release using AMD's TheRock build system), with adjusted targets for Linux and Windows.
- [b10355](https://github.com/ggml-org/llama.cpp/releases/tag/b10355): Adds multi-output backend sampling support for token speculation, including mask sum clamping, maximum output context parameters, and memory reuse fixes for speculative decoding workflows.
- [b10354](https://github.com/ggml-org/llama.cpp/releases/tag/b10354): Fixes CPU affinity mask being ignored on Android devices.
Wait, also the b10359 one? Oh right, b10359 is ggml-webgpu CI fixes, flash attention test, i32 support for cpy op, restored non-target CI tests. Oh right, I missed that. Let me add that:
- [b10359](https://github.com/ggml-org/llama.cpp/releases/tag/b10359): Fixes WebGPU CI errors from prior PRs, adds new flash attention tests, adds i32 support for the `cpy` operation, and restores non-target CI test runs.
Perfect, that covers all the releases. Omit any that are just placeholders? Wait the data had some truncated ones like "macOS Apple Silicon (arm64," but those are just download links, not changes, so we don't need to mention those, just the actual change notes.

Next, **Hot Issues** – pick 10 noteworthy ones, ordered by relevance/comment count, explain why they matter, community reaction, with links. Let's sort them by comment count first, then relevance:
1. First, #25436: DeepSeek V4 garbled output on Strix Halo with ROCm, 27 comments, 5 upvotes. Why it matters: Strix Halo (Ryzen AI Max+ 395) is a popular high-end AMD APU with unified memory, and DeepSeek V4 is one of the most widely used open models. This is a high-impact bug for a large user base. Community reaction: High engagement, 27 comments, multiple users reporting similar issues across different DeepSeek V4 quantizations.
Link: https://github.com/ggml-org/llama.cpp/issues/25436
2. #25807: ROCm 7.14 libhipblas.so.3 loading error, 14 comments. Why it matters: ROCm 7.14 is the newly released official AMD ROCm version supported in the latest llama.cpp releases, so this is a blocking issue for all users trying to use the new ROCm version. Community reaction: Active discussion, users sharing workarounds while a fix is being developed.
Link: https://github.com/ggml-org/llama.cpp/issues/25807
3. #20673: Tool registry refactor for server (closed, but high engagement). Wait, it's closed but 14 comments, 6 upvotes. Why it matters: This is a foundational refactor to add native MCP and tool support to llama-server, eliminating duplicate code between server and CLI tooling, a long-requested feature for agentic workflows. Community reaction: Highly upvoted, closed after successful merge, lays the groundwork for upcoming tooling features.
Link: https://github.com/ggml-org/llama.cpp/issues/20673
4. #24132: Gemma 4 E4B Q4_0 crash on CUDA (V100), 13 comments. Why it matters: Gemma 4 is a high-performance small model widely used for edge and consumer GPU deployment, and this crash blocks usage on older NVIDIA Turing/Volta GPUs. Community reaction: Multiple users reporting the same GGML_ASSERT failure, workarounds being discussed.
Link: https://github.com/ggml-org/llama.cpp/issues/24132
5. #23769: Vulkan crash on Intel Arc B70 with MoE models, 11 comments. Why it matters: Intel Arc GPUs are growing in popularity for local LLM deployment, and MoE models (like Qwen3.6-35B-A3B) are increasingly common, so this is a blocking compatibility issue for a large user segment. Community reaction: Active debugging, users testing patches for Vulkan MoE kernel fixes.
Link: https://github.com/ggml-org/llama.cpp/issues/23769
6. #24415: Gemma 4 12B fails to load on OpenVINO (Intel CPU/GPU/NPU), 10 comments, 3 upvotes. Why it matters: OpenVINO is the primary acceleration backend for Intel hardware, including the new Core Ultra NPUs, so this blocks usage of Gemma 4 on all Intel AI hardware. Community reaction: Intel users actively reporting the issue, requesting priority fixes.
Link: https://github.com/ggml-org/llama.cpp/issues/24415
7. #25150: Server preset names changed, some presets ignored, 10 comments, 3 upvotes. Why it matters: Breaking changes to server presets disrupt existing deployment workflows for production llama.cpp server users. Community reaction: Users reporting broken container deployments, requesting backward compatibility fixes.
Link: https://github.com/ggml-org/llama.cpp/issues/25150
8. #26475: DSpark speculative decoding crash on multi-GPU CUDA, 7 comments. Why it matters: Speculative decoding is a key performance feature for faster LLM inference, and this crash blocks usage of DSpark draft models on multi-GPU setups. Community reaction: Users reporting consistent crashes after ~2500 decoded tokens, debugging ongoing.
Link: https://github.com/ggml-org/llama.cpp/issues/26475
9. #26845: SYCL garbage output on second prompt for Intel Arc GPUs, 5 comments. Why it matters: SYCL is the primary backend for Intel Arc GPU acceleration, and this bug breaks repeated inference on a growing hardware segment. Community reaction: Intel Arc users reporting corrupted output on consecutive prompts, workarounds being tested.
Link: https://github.com/ggml-org/llama.cpp/issues/26845
10. #26902: Glimmer Q8_0 tensor split crash on 4x Tesla T10, 2 comments (new, high impact for multi-GPU users). Why it matters: Tensor split is a core feature for running large models across multiple GPUs, and this crash blocks usage of the new Muse Glimmer model on older multi-GPU Turing setups. Community reaction: New report, already being triaged by maintainers.
Link: https://github.com/ggml-org/llama.cpp/issues/26902
Wait, that's 10, good. Let me check if they are all noteworthy. Yeah, covers different backends (ROCm, CUDA, Vulkan, OpenVINO, SYCL), different models (DeepSeek V4, Gemma 4, MoE, Glimmer), different use cases (server, speculative decoding, multi-GPU). Perfect.

Next, **Key PR Progress** – 10 important PRs, describe features/fixes, with links. Let's pick the most impactful ones, ordered by relevance:
1. [PR #26932](https://github.com/ggml-org/llama.cpp/pull/26932): Fixes UMA memory detection for AMD iGPUs (including Strix Halo gfx1151) via sysfs VRAM parsing. Addresses the root cause of issue #25436 (DeepSeek V4 garbled output on Strix Halo) by correcting incorrect VRAM detection that caused incorrect tensor splitting on unified memory AMD APUs. High priority fix for the growing Ryzen AI Max user base.
2. [PR #26842](https://github.com/ggml-org/llama.cpp/pull/26842): Adds Glimmer drafter optimizations for speculative decoding, improving performance for the new Muse Glimmer draft model paired with larger target models.
3. [PR #26928](https://github.com/ggml-org/llama.cpp/pull/26928): Adds a download button for generated files (code, images, documents) directly in the llama-server web UI, eliminating the need to manually copy/paste output for code generation or document drafting workflows.
4. [PR #26013](https://github.com/ggml-org/llama.cpp/pull/26013): Adds OpenAI Responses API JSON schema support, Cohere2 MoE template parser JSON schema support, and improves Responses API streaming compatibility, making llama.cpp server more compatible with OpenAI ecosystem tooling.
5. [PR #26920](https://github.com/ggml-org/llama.cpp/pull/26920): Refactors server metrics collection and fixes correctness issues with derived metrics (e.g., tokens per second), part of ongoing work to improve server observability for production deployments.
6. [PR #26636](https://github.com/ggml-org/llama.cpp/pull/26636): Fixes crashes when using shared tensor models (Gemma 4 Assistant, Eagle3, DFlash, DSpark) by adding the draft model's device backends to the context scheduler, ensuring shared tensors are correctly allocated across devices.
7. [PR #26849](https://github.com/ggml-org/llama.cpp/pull/26849): Fixes two server-side tool calling bugs: named `tool_choice` parameters being silently downgraded to "auto", and trailing tool calls being incorrectly swallowed into message content.
8. [PR #25877](https://github.com/ggml-org/llama.cpp/pull/25877): Adds a `read_media` server tool that allows vision models to analyze server-side images, enabling vision capabilities for server-hosted models without requiring client-side image uploads.
9. [PR #26623](https://github.com/ggml-org/llama.cpp/pull/26623): Adds initial support for recurrent state rollback for Nemotron models on CPU and CUDA, improving stability for speculative decoding and long-context inference with Nemotron model families.
10. [PR #25775](https://github.com/ggml-org/llama.cpp/pull/25775): Merged closed PR that added official CI and release support for ROCm 7.14, now included in the latest b10356 release.
Wait, that's 10, good. Let me check if they are all important. Yeah, covers backend fixes, server features, model support, performance improvements. Perfect.

Next, **Feature Request Trends** – distill the most requested feature directions from all Issues. Let's look at the issues:
First, server-side tooling and MCP support: There are multiple issues and PRs around MCP, tool calling, server-side tool execution, tool registry refactor (the closed #20673), UI improvements for tool calls (#26862), read_media tool, etc. That's a big trend.
Second, broader hardware and backend compatibility: Lots of issues around new hardware (Strix Halo, Intel Arc B70, Ryzen AI Max+), new backends (ROCm 7.14, SYCL, Vulkan), supporting new models (DeepSeek V4, Gemma 4, Muse Glimmer, MiniMax-M3, Nemotron) across all backends. So expanding cross-backend, cross-hardware, cross-model compatibility is a big trend.
Third, speculative decoding and performance optimizations: Multiple PRs and issues around speculative decoding (multi-output sampling, DSpark fixes, Glimmer drafter optimizations, recurrent state rollback for speculative decoding), performance improvements for MoE models, flash attention optimizations across backends (OpenCL, CUDA, WebGPU).
Fourth, server usability and production features: Issues around server preset stability, metrics collection, file download in UI, OpenAI API compatibility (Responses API support), model directory scan depth optimization for server deployments.
Wait, let's condense that into clear trends:
1. **Native Server-Side Tooling and MCP Integration**: The most frequently requested feature direction is expanding native tool and Model Context Protocol (MCP) support in llama-server, eliminating the need for client-side tool logic. This includes built-in tool registries, server-side media reading for vision models, and improved tool call rendering in the web UI, to support agentic workflow deployment without external dependencies.
2. **Cross-Backend/Cross-Hardware Compatibility**: A high volume of requests and bug reports focus on expanding support for new hardware (AMD Ryzen AI Max+ APUs, Intel Arc GPUs, new NVIDIA GPU architectures) and new backend versions (ROCm 7.14, SYCL 2026.1) across all popular open model families (DeepSeek V4, Gemma 4, MoE models, Muse Glimmer).
3. **Speculative Decoding and Inference Performance**: Repeated requests center on improving speculative decoding stability and performance, including support for new draft models (Glimmer, DSpark, Nemotron), multi-output sampling for higher throughput, and backend-specific flash attention optimizations for lower latency.
4. **Production Server Usability**: Frequent feature requests target production deployment improvements, including stable server presets, detailed observability metrics, OpenAI API compatibility (Responses API, JSON schema support), and improved model directory management for large model libraries.
That's good, distills the trends from the issues and PRs.

Then, **Developer Pain Points** – summarize recurring frustrations or high-frequency requests. Let's look at the issues:
First, backend-specific crashes on new hardware/software: Lots of issues around crashes on ROCm 7.14, Strix Halo, Intel Arc, Vulkan, SYCL, OpenVINO. For example, DeepSeek V4 garbled output on Strix Halo, Gemma 4 crashes on OpenVINO, Vulkan crashes on Intel Arc with MoE, ROCm 7.14 library loading errors. So a big pain point is lack of stability for new hardware and new backend versions, especially for popular new models.
Second, speculative decoding instability: Multiple crashes related to speculative decoding, like DSpark crashes on multi-GPU CUDA, Gemma 4 infinite generation loops with speculative decoding, excessive buffer reservation on ROCm for MTP draft models. So speculative decoding is still unstable for many model/backend combinations.
Third, server-side tooling gaps: Before the recent refactor, tool logic was only on the client side, leading to duplicate code, no support for tool use in llama-cli, broken tool calls in the server UI, and no native MCP support. That's a pain point for developers building agentic apps with llama.cpp.
Fourth, multi-GPU tensor split bugs: Multiple crashes related to tensor splitting across GPUs, like Glimmer Q8_0 crash on 4x Tesla T10, split-mode = tensor broken since b10054, VRAM allocation issues on ROCm 7.14 multi-GPU. So multi-GPU support is still flaky for many use cases.
Fifth, build and CI instability: Recent issues like release jobs taking 10+ hours, GitHub release workflow failures, ROCm CI quality check failures, ccache not working for ROCm builds. That's a pain point for contributors and users building from source.
Wait, let's condense that into clear pain points:
1. **Backend Stability Gaps for New Hardware/Software**: The most recurring developer frustration is unstable inference and crashes across new hardware (AMD Strix Halo, Intel Arc GPUs, Ryzen AI Max+ APUs) and new backend releases (ROCm 7.14, SYCL 2026.1), especially for high-demand models like DeepSeek V4 and Gemma 4. Many users report blocked deployments until backend-specific fixes are merged.
2. **Speculative Decoding Instability**: Speculative decoding, a critical feature for high-throughput inference, remains unstable for many model/backend combinations, with frequent crashes for DSpark, Glimmer, and MTP draft models on CUDA, ROCm, and Vulkan, plus incorrect output and infinite generation loops for Gemma 4.
3. **Server Tooling Limitations**: Prior to recent refactors, llama-server lacked native tool and MCP support, forcing duplicate tool

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*