# AI CLI Tools Community Digest 2026-09-12

> Generated: 2026-09-11 22:15 UTC | Tools covered: 12

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
- **Claude Code** (github.com/anthropics/claude-code): Released v2.1.269 adding `claude plugin eval` for plugin testing with JSON/HTML reports and `/output-style [name]` command to manage output styles.  
- **OpenAI Codex** (github.com/openai/codex): Published rust-v0.155.0-alpha.3.10 CLI build (latest in 0.155 series) with incremental bug fixes and performance tweaks for upcoming stabilization.  
- **Gemini CLI** (github.com/google-gemini/gemini-cli): Published nightly build v0.61.0-nightly.20260911.ged2ac40df incorporating security-hardening and sandbox isolation improvements.  
- **GitHub Copilot CLI** (github.com/github/copilot-cli): Released v1.0.84-5 adding `session import` and `memory import` commands for semantic JSONL interchange and enhanced shell completions showing root flags with sub-commands.  
- **Qwen Code** (github.com/QwenLM/qwen-code): Published v0.23.3-nightly.20260911.aaa6a32aae nightly with internal refactors for background responses and removal of obsolete Dingtalk integration logic.  
- **llama.cpp** (github.com/ggerganov/llama.cpp): Fixed MSVC precompiled header regression for llama-server (b10917) and updated Apple Silicon Vulkan tensor copies for idle contexts (b10901).

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills Community Highlights (as of 2026‑09‑12)**  

---

### 1. Top Skills Ranking  
*Based on recent activity, discussion volume, and impact on the core skill‑creation workflow.*

| Rank | PR / Issue | Skill / Focus | What it does | Discussion highlights | Status |
|------|------------|---------------|--------------|-----------------------|--------|
| **1** | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill‑creator** (core tooling) | Fixes `run_eval.py` so recall is no longer stuck at 0%; adds Windows‑stream handling, trigger‑detection fixes, and parallel‑worker support. | Many users reported that skill‑evaluation loops were optimizing against noise; the PR resolves the root cause and restores reliable description optimisation. | **Open** (last update 2026‑09‑11) |
| **2** | [#514](https://github.com/anthropics/skills/pull/514) | **document‑typography** | Detects and prevents orphan words, widow paragraphs, and numbering mis‑alignment in AI‑generated documents. | Highlighted as a “quality‑of‑life” fix that improves every document Claude produces; several commenters asked for wider adoption in the docs skill set. | **Open** (last update 2026‑03‑13) |
| **3** | [#486](https://github.com/anthropics/skills/pull/486) | **ODT skill** | Creates, fills, reads, and converts OpenDocument Format (.odt/.ods) files; includes ODT→HTML conversion. | Frequently requested for open‑source office workflows; discussion centered on template filling and cross‑platform reliability. | **Open** (last update 2026‑04‑14) |
| **4** | [#210](https://github.com/anthropics/skills/pull/210) | **frontend‑design** | Provides actionable, single‑turn guidance for UI layout, component styling, and responsive‑design checks. | PR aimed to tighten vague advice into concrete steps Claude can follow; reviewers noted improved token efficiency and clearer triggers. | **Open** (last update 2026‑03‑07) |
| **5** | [#83](https://github.com/anthropics/skills/pull/83) | **skill‑quality‑analyzer** & **skill‑security‑analyzer** (meta‑skills) | Evaluates skills across structure, documentation, examples, security, and performance; outputs a quality score. | Considered a cornerstone for community curation; many commenters asked for integration into the skill‑creator workflow. | **Open** (last update 2026‑01‑07) |
| **6** | [#1724](https://github.com/anthropics/skills/pull/1724) | **mcp‑builder** | Updates the default evaluation model to `claude‑sonnet‑5` and refreshes documentation. | Addressed a recurring complaint that evaluation scores were stale; sparked discussion on keeping MCP‑builder in sync with Claude releases. | **Open** (last update 2026‑09‑07) |
| **7** | [#1628](https://github.com/anthropics/skills/pull/1628) | **Hivemind** | Zero‑cost multi‑agent orchestration: delegates mechanical work to headless Opencode workers while Claude Code remains the planner/reviewer. | High interest for scaling expensive‑model usage; commenters debated cost‑benefit and security implications of spawning workers. | **Open** (last update 2026‑08‑24) |
| **8** | [#1627](https://github.com/anthropics/skills/pull/1627) | **Buffer‑API Agent Skill** | Provides a portable agent skill for the Buffer GraphQL API (schedule, manage, analyze social posts). | Seen as a useful integration for marketing‑automation pipelines; discussion focused on auth handling and rate‑limit safety. | **Open** (last update 2026‑09‑05) |

*Note: All listed PRs remain open; none have been merged as of the cutoff date. Their high comment density (relative to the rest of the list) signals strong community engagement.*

---

### 2. Community Demand Trends (from Issues)  

| Trend | Representative Issue | Summary of Community Need |
|-------|----------------------|---------------------------|
| **Trust & Namespace Security** | [#492](https://github.com/anthropics/skills/issues/492) | Prevent community skills from masquerading as official `anthropic/` skills; request for namespacing or verification mechanism. |
| **Organizational Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) | Enable one‑click sharing of skills within an organization (direct link or shared library) instead of manual file exchange. |
| **Reliable Skill Evaluation** | [#556](https://github.com/anthropics/skills/issues/556) | Fix `run_eval.py` so that test queries actually trigger the skill under evaluation (currently 0 % trigger rate). |
| **Workflow Automation / Orchestration** | #1628 (Hivemind PR) & #1627 (Buffer‑API) | Desire for skills that coordinate multiple agents or external services (e.g., social‑media scheduling, HPC job submission). |
| **Document‑Quality & Formatting** | #514 (typography) & #486 (ODT) | Strong interest in skills that improve the visual and structural quality of generated documents (typography, open‑document formats). |
| **Meta‑Skill Tooling** | #83 (quality & security analyzers) | Community wants built‑in auditing tools to vet new skills before they are published. |

---

### 3. High‑Potential Pending Skills  

These PRs have active discussion, address clearly articulated needs, and are likely to be merged soon if maintainers approve the changes.

| PR | Skill | Why it’s likely to land |
|----|-------|------------------------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill‑creator (eval fix) | Directly unblocks the skill‑creation loop; maintainers have acknowledged the bug in multiple comments. |
| [#514](https://github.com/anthropics/skills/pull/514) | document‑typography | Small, self‑contained improvement with no conflicting dependencies; aligns with the “quality‑first” docs initiative. |
| [#486](https://github.com/anthropics/skills/pull/486) | ODT skill | Completes the open‑document suite (ODT/ODS) that many users request for LibreOffice‑centric workflows. |
| [#1724](https://github.com/anthropics/skills/pull/1724) | mcp‑builder model update | Routine maintenance to keep the evaluation harness current; low risk, high benefit. |
| [#1628](https://github.com/anthropics/skills/pull/1628) | Hivemind | Addresses a scalability pain point; community consensus is positive pending a security review. |
| [#1627](https://github.com/anthropics/skills/pull/1627) | Buffer‑API Agent Skill | Well‑scoped integration with a popular SaaS platform; maintainers have signaled interest in expanding third‑party API coverage. |

---

### 4. Skills Ecosystem Insight  

**The community’s most concentrated demand is for reliable, trustworthy skill‑tooling (evaluation, validation, and namespace safety) paired with practical, productivity‑boosting integrations that extend Claude Code into document formatting, office‑file handling, and lightweight multi‑agent orchestration.**  

---  

*All links point to the official `anthropics/skills` repository on GitHub.*

---

We are given data for the latest releases, issues, and pull requests from the Anthropics/claude-code repository for the last 24h (as of 2026-09-12).

Steps:
1. **Today's Highlights**: Summarize the most important updates from the last 24h.
2. **Releases**: We have one release: v2.1.269. We'll summarize the changes.
3. **Hot Issues**: We have 50 issues (top 30 by comment count). We'll pick 10 noteworthy ones (based on comment count, severity, or relevance) and explain why they matter and the community reaction (using comment count and reactions).
4. **Key PR Progress**: We have only 1 PR updated in the last 24h. We'll describe it.
5. **Feature Request Trends**: We'll look at the issues (especially those labeled as enhancement or feature requests) to distill trends.
6. **Developer Pain Points**: We'll look at recurring issues (bugs, frustrations) from the issues list.

Let's break down the data:

**Releases (last 24h)**:
- v2.1.269: 
  - Added `claude plugin eval`: run a plugin's eval suite against Claude Code and get scored, reproducible results (JSON + HTML report); see `claude plugin eval --help`
  - Added `/output-style [name]` to list and switch output styles, including over Remote Control and in cloud and ot (note: the text is cut off, but we have the main points)

**Issues (last 24h, top 30 by comment count)**:
We are to pick 10 noteworthy issues. We'll look for high comment counts and significant bugs.

From the list, the issue with the highest comment count is:
#42776 [OPEN] [invalid] [BUG] Claude Code Desktop fails to Relaunch on Windows due to orphaned process file lock
  - Author: RonGamzu | Created: 2026-04-02 | Updated: 2026-09-11 | Comments: 177 | 👍: 88

This is a critical bug affecting Windows users, preventing the app from relaunching. It has been open for a long time (since April) and has gathered significant attention.

Next, we look for other high-comment issues. However, note that the list shows only the top 30 by comment count, and we are to pick 10.

We'll go through the list and pick issues that are:
- Still open (if any) or recently closed but significant
- High comment count
- Indicate a widespread problem

But note: the list provided is of issues updated in the last 24h, and we are showing the top 30 by comment count (from the entire set? or from the last 24h updated?). The description says: "Latest Issues (updated in last 24h)(Total: 50 items; showing top 30 by comment count)".

So we have 50 issues updated in the last 24h, and we are showing the top 30 of those 50 by comment count.

Let's list the issues from the data with their comment counts (as given):

#42776: 177 comments
#85979: 7 comments
#78431: 7 comments
#78834: 5 comments
#84918: 4 comments
#86444: 4 comments
#84720: 4 comments
#72714: 3 comments
#69556: 3 comments
#86241: 3 comments
#86480: 3 comments
#86023: 3 comments
#85905: 3 comments
#86436: 2 comments
#80291: 2 comments
#86646: 2 comments
#73870: 2 comments
#86621: 2 comments
#86602: 2 comments
#79515: 2 comments
#86500: 2 comments
#86687: 1 comment
#86686: 1 comment
#86677: 1 comment
#86680: 1 comment
#86349: 1 comment
#86673: 1 comment
#86656: 1 comment
#86652: 1 comment
#86645: 1 comment

We are to pick 10 noteworthy issues. We'll start with the highest comment count and then pick others that are significant (even if lower comment count but represent a trend or critical bug).

However, note that the issue #42776 is marked as [invalid] but still open and has a lot of comments. We should note that.

Let's pick:

1. #42776: Windows relaunch bug (177 comments, 88 upvotes) - critical for Windows users.
2. Then we look for others that are still open? But note: the list shows updated in last 24h, and many are closed. We are to pick noteworthy issues regardless of open/closed? The digest is about what's happening in the community.

We'll pick a mix of high-comment and representative issues.

But note: the task says "Hot Issues" - so we focus on the ones generating discussion.

Given the data, we'll pick:

- #42776 (177 comments) - Windows relaunch issue
- Then we don't see any other with very high comments. The next highest is 7 comments.

So we might have to look for issues that are representative of common problems even if they don't have the highest comments.

Alternatively, we can pick the top 10 by comment count from the list (since we are showing top 30 by comment count, we take the top 10 of those 30).

Top 10 by comment count from the list:

1. #42776: 177
2. #85979: 7
3. #78431: 7
4. #78834: 5
5. #84918: 4
6. #86444: 4
7. #84720: 4
8. #72714: 3
9. #69556: 3
10. #86241: 3

But note: there are multiple with 4 and 3 comments. We'll take the first 10 in descending order.

However, we should also consider the nature of the issue. Let's describe each of these top 10.

But note: the issue #42776 is marked as [invalid] but still open. We'll note that.

Now, for **Key PR Progress**: we have only 1 PR: #42205 [CLOSED] fix(hookify): normalize tool matcher parsing.

For **Feature Request Trends**: we look for issues that are feature requests (labeled as enhancement). In the list, we see:
- #84918: [enhancement, stale] [FEATURE] Session/chat history and memory in Claude Code are keyed entirely to the project folder's absolute filesystem path, with no way to preserve continuity when the folder is moved or renamed.

Also, we might look for other enhancement issues in the entire set (but we only have the last 24h updated issues). However, the list shows only 50 issues updated in the last 24h, and we are to distill from all Issues? The instruction says: "Distill the most-requested feature directions from all Issues". But we are only given the last 24h updated issues. However, note that the data provided for issues is only the last 24h updated. So we have to work with what we have.

Similarly, for **Developer Pain Points**, we'll look at the bugs that are recurring.

Let's structure the digest:

1. **Today's Highlights**:
   - The latest release v2.1.269 introduces two key features: a new `claude plugin eval` command for testing plugins with scored results, and the `/output-style` command to manage output styles.
   - The Windows desktop app continues to face a critical issue (issue #42776) where orphaned process locks prevent relaunching, now with 177 comments and strong community upvoting.

2. **Releases**:
   - v2.1.269: 
        * Added `claude plugin eval` subcommand to run a plugin's evaluation suite and generate JSON/HTML reports.
        * Added `/output-style [name]` command to list and switch output styles, functional in Remote Control, cloud, and other contexts.

3. **Hot Issues** (top 10 by comment count from the last 24h updated issues):
   We'll list each with a brief explanation and community reaction (comment count and upvotes).

4. **Key PR Progress**:
   - PR #42205: Fixed hookify tool matcher parsing by normalizing matcher strings (trimming spaces) to correctly handle matchers with spaces around separators.

5. **Feature Request Trends**:
   - From the issues, the most prominent feature request is for persistent session/chat history independent of project folder path (issue #84918), indicating a need for better project portability.

6. **Developer Pain Points**:
   - Recurring issues include: Windows-specific crashes and hangs (e.g., #42776, #86444, #85905), problems with the Fable 5 model's safeguards causing false positives (e.g., #86241, #86602, #86687), and inconsistent behavior in language/output handling (e.g., #86436, #86656).

Now, let's write each section concisely.

Note: We must include GitHub links for each item in the Hot Issues and Key PR Progress.

For Hot Issues, we'll list 10 issues with:
- Issue number and title (as given)
- Why it matters
- Community reaction (comment count and upvotes)

But note: the issue #42776 is marked as [invalid] but still open. We'll note that it's open despite the label.

Let's go through the top 10 by comment count:

1. #42776: [OPEN] [invalid] [BUG] Claude Code Desktop fails to Relaunch on Windows due to orphaned process file lock
   - Why matters: Critical blocker for Windows users preventing app restart after certain operations.
   - Community: 177 comments, 88 upvotes (indicating significant impact and frustration).

2. #85979: [CLOSED] [bug, has repro, platform:windows, area:networking, api:anthropic, stale] [BUG] [BUG] Persistent ECONNRESET on v2.1.228 (post-fix) — all networks, all local causes eliminated incl. full AV uninstall; claude.ai chat works fine on same account
   - Why matters: Network connectivity issue causing frequent disconnections, affecting reliability.
   - Community: 7 comments, 0 upvotes (but note: closed, so may have been resolved?).

3. #78431: [CLOSED] [bug, platform:macos, area:security, platform:intellij, area:networking, stale] [BUG] you stupid agent used my real email as user agent string without asking anything
   - Why matters: Privacy concern where the app exposes user email in user agent string.
   - Community: 7 comments, 4 upvotes.

4. #78834: [CLOSED] [bug, has repro, platform:linux, area:tools, perf:memory, platform:wsl, stale] Bundled ugrep allocates 4-17 GB to search a 64 KB file when the pattern has a trailing `.{N}` bound (Linux/WSL2, 2.1.214)
   - Why matters: Severe memory leak in the grep tool making it unusable for certain regex patterns.
   - Community: 5 comments, 0 upvotes.

5. #84918: [CLOSED] [enhancement, stale] [FEATURE] Session/chat history and memory in Claude Code are keyed entirely to the project folder's absolute filesystem path, with no way to preserve continuity when the folder is moved or renamed.
   - Why matters: Loss of session history when moving projects, disrupting workflow.
   - Community: 4 comments, 0 upvotes (but note: it's a feature request, so upvotes might not be the best metric; we have comment count).

6. #86444: [CLOSED] [bug, platform:windows, area:desktop, stale] [Bug]Desktop app hangs previewing localhost dev server; uninstall/reinstall silently wipes all session transcripts
   - Why matters: Desktop app hangs when using browser preview and wipes data on reinstall.
   - Community: 4 comments, 0 upvotes.

7. #84720: [CLOSED] [stale] [Bug] Worktree isolation guard rejects non-git commands due to early AST complexity check
   - Why matters: Overly restrictive guard blocking legitimate non-git commands in worktree contexts.
   - Community: 4 comments, 0 upvotes.

8. #72714: [CLOSED] [bug, has repro, platform:macos, area:tools, platform:vscode, stale] bug: /worktree can silently write core.hooksPath into the MAIN repo's shared .git/config, disabling global hooks
   - Why matters: Corrupts global git configuration by writing to main repo's config instead of worktree.
   - Community: 3 comments, 0 upvotes.

9. #69556: [CLOSED] [bug, has repro, platform:macos, area:chrome, stale] gif_creator always fails: "not in the agent's managed tab group" (Chrome + Brave)
   - Why matters: GIF recording tool broken in Chrome/Brave due to tab group management.
   - Community: 3 comments, 1 upvote.

10. #86241: [CLOSED] [duplicate, platform:windows, area:model, stale] frequesnt and invalid Fable 5's safeguards flag
    - Why matters: Fable 5 model excessively flagging legitimate tasks as unsafe, disrupting workflow.
    - Community: 3 comments, 1 upvote.

Note: We are to pick 10, and we have exactly 10 from the top comment counts.

However, note that the issue #86241 is marked as duplicate, but we still include it as it represents a pain point.

Now, for **Feature Request Trends**: we only see one clear feature request in the list: #84918. But we can infer from the issues that there is a desire for:
- Better session persistence (independent of project location)
- More reliable model safeguards (to reduce false positives)
- Cross-platform stability (especially Windows and macOS)

But since we are to distill from the issues, and we only have one explicit feature request in the last 24h updated issues, we'll note that.

Alternatively, we can look for other enhancement labels in the list. Scanning the list, we see:
- #84918 is the only one labeled [enhancement].

So we'll focus on that.

For **Developer Pain Points**, we'll summarize:

- Windows desktop app instability: frequent crashes, hangs, and data loss (issues #42776, #86444, #85905, #86645)
- Model safeguards overzealousness: Fable 5 model flagging legitimate tasks (issues #86241, #86602, #86687, #73870, #86680)
- Privacy and security concerns: exposure of personal data (issue #78431)
- Tool-specific bugs: memory leaks in grep (#78834), worktree isolation issues (#84720, #72714), and browser tool problems (#86444, #69556)
- Session management: loss of history when moving folders (#84918)

Now, let's write the digest.

Note: We must be concise and professional.

We'll write:

**Today's Highlights**
- Claude Code v2.1.269 released with `claude plugin eval` for plugin testing and `/output-style` for managing output styles.
- A critical Windows relaunch bug (#42776) remains unresolved after 7 months, garnering 177 comments and 88 upvotes as the top community concern.

**Releases**
- v2.1.269: Introduced `claude plugin eval` to run plugin evaluation suites (JSON/HTML reports) and `/output-style [name]` command to list/switch output styles across environments.

**Hot Issues**
1. [#42776](https://github.com/anthropics/claude-code/issues/42776): Windows Desktop fails to relaunch due to orphaned process file lock. *Critical blocker for Windows users; 177 comments, 88 upvotes.*
2. [#85979](https://github.com/anthropics/claude-code/issues/85979): Persistent ECONNRESET errors post-v2.1.228 fix. *Network reliability issue affecting all networks; 7 comments.*
3. [#78431](https://github.com/anthropics/claude-code/issues/78431): App exposes user email in user agent string without consent. *Privacy violation on macOS/IntelliJ; 7 comments, 4 upvotes.*
4. [#78834](https://github.com/anthropics/claude-code/issues/78834): Ugrep memory explosion (4-17GB) for specific regex patterns on Linux/WSL2. *Severe performance

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest – 2026‑09‑12**  
*Prepared for developers tracking the Codex repo (github.com/openai/codex)*  

---  

### 1. Today's Highlights  
- A flurry of **rust‑v0.155.0‑alpha** CLI builds (up to 0.155.0‑alpha.3.10) landed in the last 24 h, indicating active stabilization of the upcoming 0.155 release.  
- The most‑discussed open issues continue to revolve around **resource leaks in MCP server processes** (‡37 comments) and **Windows‑specific UI freezes** (‡35 comments), showing these are the top pain points for the community.  
- Recent merged PRs focus on **voice/TUI improvements** (enabling voice by default, bundling native Windows voice runtimes) and **clean‑up of deprecated APIs**, signalling a push toward a more stable, feature‑complete conversational experience.  

---  

### 2. Releases  
| Version | Type | Notes |
|---------|------|-------|
| rust‑v0.155.0‑alpha.3.10 | CLI (alpha) | Latest alpha in the 0.155 series – includes incremental bug‑fixes and performance tweaks. |
| rust‑v0.155.0‑alpha.3.9 – rust‑v0.155.0‑alpha.3 | CLI (alpha) | A rapid succession of alpha builds (9 → 3) over the past day, reflecting active integration of voice‑related changes and MCP stability work. |
| rust‑v0.154.0‑alpha.6.2 | CLI (alpha) | Slightly older alpha still receiving updates; likely a baseline for the 0.155 series. |
| rust‑v0.155.0‑alpha.2.3 | CLI (alpha) | Early‑stage alpha for the 0.155 line, showing ongoing feature experimentation. |

*All releases are available under the **releases** tab of the repository; they are pre‑release binaries intended for testing.*  

---  

### 3. Hot Issues (top 10 by comment count)  

| # | Title & Link | Why it matters | Community reaction (👍) |
|---|--------------|----------------|------------------------|
| [#30408](https://github.com/openai/codex/issues/30408) | **MCP server processes leak: per‑thread processes never cleaned up** | Each new conversation spawns a full set of global MCP servers that are never terminated, leading to unbounded memory growth (reported > 9 GB RSS). This threatens stability of long‑running Codex sessions, especially on desktop. | 8 |
| [#40968](https://github.com/openai/codex/issues/40968) | **Windows Codex desktop: Send button spins forever and prompts never submit** | On Windows 11 the UI hangs after a follow‑up message, preventing any further interaction. Affects the core chat flow for a large segment of users. | 6 |
| [#44720](https://github.com/openai/codex/issues/44720) | **ChatGPT hit a snag bug reproduce** (closed) | A recent crash on macOS (build 26.908.31457) that generated a “hit a snag” dialog. Though closed, the high comment count shows it was a widespread blocker that warranted rapid triage. | 5 |
| [#44687](https://github.com/openai/codex/issues/44687) | **[macOS App] 26.908.31457: route prefetch and AppRoutes fail with “r is not a function”** | A JavaScript‑type error that breaks routing in the macOS app, causing navigation failures. Indicates a regression in the latest build. | 0 |
| [#32614](https://github.com/openai/codex/issues/32614) | **Agent‑created top‑level task is hidden from desktop search and Codex Mobile Remote** | Tasks spawned by agents are not indexed, breaking cross‑device discoverability and undermining the remote‑workflow promise of Codex. | 3 |
| [#41779](https://github.com/openai/codex/issues/41779) | **Codex Windows: local API launch rejected with "blocked by policy"** | Windows security policies block `exec_command` calls needed for local development APIs, halting internal tooling and plugin workflows. | 0 |
| [#41434](https://github.com/openai/codex/issues/41434) | **macOS: OAuth token exchange fails with "error sending request"** | CLI authentication on macOS fails at the token step despite successful browser flow, blocking login for many developers. | 0 |
| [#42236](https://github.com/openai/codex/issues/42236) | **Deleted ChatGPT chats remain in Codex sidebar and cannot be removed** | UI state desync: deletions in ChatGPT are not reflected in Codex, cluttering the sidebar and causing confusion. | 0 |
| [#14162](https://github.com/openai/codex/issues/14162) | **Codex desktop is showing stale/orphaned thread entries that cannot be reopened or archived** | Persistent ghost threads accumulate over time, degrading UI usability and requiring manual workaround. | 0 |
| [#36454](https://github.com/openai/codex/issues/36454) | **iOS Remote Project List is not synchronized with Codex Desktop** | Remote iOS client shows outdated project lists, breaking the “desktop as source of truth” model for mobile users. | 0 |

---  

### 4. Key PR Progress (selected 10 merged PRs)  

| # | PR Link | Summary of change / fix |
|---|---------|------------------------|
| [#44925](https://github.com/openai/codex/pull/44925) | Accept voice response audio before captions on quiet turns | Allows early audio playback when the speaker is idle, reducing perceived latency in voice conversations. |
| [#44924](https://github.com/openai/codex/pull/44924) | Refresh the speaker format when restarting voice output | Re‑queries audio hardware after a Bluetooth mic change, preventing unsupported sample‑rate errors. |
| [#44922](https://github.com/openai/codex/pull/44922) | Bundle native voice runtimes in Windows releases | Ensures Windows ships with the required voice helper and audio libraries, fixing missing‑dependency crashes on fresh installs. |
| [#44921](https://github.com/openai/codex/pull/44921) | Enable TUI voice conversations by default | Promotes the experimental `realtime_conversation` flag to stable, turning voice on for all TUI users. |
| [#44915](https://github.com/openai/codex/pull/44915) | Remove the deprecated `thread/rollback` API | Cleans up unused endpoint, simplifying the API surface and steering users toward `thread/revert`. |
| [#44905](https://github.com/openai/codex/pull/44905) | Expose disabled plugin settings in the app‑server API | Allows clients to query which plugins are disabled, improving transparency and plugin‑management UIs. |
| [#44903](https://github.com/openai/codex/pull/44903) | Wire up the native Windows MXC helper entry point | Connects the Windows MXC sandbox helper to the CLI, enabling proper command execution under the new sandbox. |
| [#44893](https://github.com/openai/codex/pull/44893) | Expose available access programs in model discovery | Adds `availableAccessPrograms` to model metadata, letting UI show which programs (e.g., Codex Pro, Max) a model can be used with. |
| [#44883](https://github.com/openai/codex/pull/44883) | Reject token‑budget history notes for unsupported starting models | Prevents silent misconfiguration when a model lacks experimental context support, guiding users to compatible models. |
| [#44879](https://github.com/openai/codex/pull/44879) | Fade Astra composer stars and stabilize cursor redraws | Improves visual polish of the composer UI, reducing distraction and stabilizing cursor behavior during long inputs. |

---  

### 5. Feature Request Trends  
- **Cross‑platform session & project synchronization** – Issues #32614, #36454, and enhancement #25342 (shared chats across subscriptions) highlight a strong desire for seamless state sharing between desktop, mobile, and multiple accounts.  
- **MCP & OAuth usability** – #36915 (MCP OAuth callback UX) and recurring MCP‑related bugs (#30408, #44729) indicate users want smoother, more reliable MCP server lifecycle and authentication flows.  
- **Voice/TUI maturation** – The recent wave of voice‑related PRs (#44921‑#44925) mirrors community requests for stable, low‑latency voice interaction in both GUI and TUI modes.  
- **Plugin & settings transparency** – #44905 and similar asks for exposing disabled plugin IDs point to a need for better introspection and control over extensibility points.  

---  

### 6. Developer Pain Points  
1. **Resource leaks** – Unchecked MCP server processes (#30408) cause rapid memory growth, forcing frequent restarts.  
2. **Windows UI instability** – Send‑button hangs (#40968) and policy‑blocked API launches (#41779) disrupt core workflows on the most‑used OS.  
3. **macOS authentication hurdles** – OAuth token exchange failures (#41434) and frequent “hit a snag” crashes (#44720, #44687) erode trust in the CLI on Apple hardware.  
4. **Stale UI state** – Orphaned thread entries (#14162, #42236) and undeletable chats clutter the interface, requiring manual cleanup.  
5. **Remote client sync gaps** – iOS project list desync (#36454) and missing cross‑device task visibility (#32614) hinder the promised “desktop‑as‑source‑of‑truth” experience.  
6. **Version‑ churn fatigue** – Rapid succession of alpha CLI releases (multiple 0.155.0‑alpha builds) makes it difficult for developers to pin a stable baseline for tooling or CI pipelines.  

---  

*All links point directly to the corresponding GitHub items. Keep an eye on the upcoming 0.155.0 release for fixes to the MCP leak and Windows voice runtime bundling, which appear to be the highest‑impact items currently in flight.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI Community Digest – 2026‑09‑12**

---

### 1. Today's Highlights
- A new nightly build **v0.61.0-nightly.20260911.ged2ac40df** was published, incorporating the latest security‑hardening and sandbox fixes.  
- Community discussion is focused on sub‑agent reliability (goal‑status misreporting, hangs after MAX_TURNS) and on improving the agent’s native bash‑tool usage via zero‑dependency OS sandboxing.  
- Several PRs landed that tighten workspace boundaries (prompt‑injection prevention, Windows git‑arg validation) and persist OAuth credentials, addressing both usability and security concerns.

---

### 2. Releases
- **v0.61.0-nightly.20260911.ged2ac40df** – Nightly release (compare to previous nightly).  
  *Changelog*: includes all fixes merged since 2026‑09‑10 (see PRs #29282‑#29287). No user‑visible feature flags were added; the update focuses on robustness, sandbox isolation, and auth persistence.

---

### 3. Hot Issues (10 noteworthy)

| # | Issue | Comments / 👍 | Why it matters |
|---|-------|---------------|----------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after MAX_TURNS reported as GOAL success (hides interruption) | 13 💬 / 2👍 | Misleading success status breaks downstream automation and hides actual failures. |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | Leverage model’s bash affinity via Zero‑Dependency OS Sandboxing & Post‑Execution Intent Routing | 9 💬 / 1👍 | Aims to let Gemini use native bash tools safely, a highly requested capability for code‑base exploration. |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs indefinitely | 8 💬 / 8👍 | Blocks everyday workflows (e.g., folder creation); workaround is to disable sub‑agent delegation. |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Assess impact of AST‑aware file reads, search, and mapping | 7 💬 / 1👍 | Investigates whether AST‑level tooling can reduce token noise and improve precision. |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini does not use skills and sub‑agents enough | 6 💬 / 0👍 | Indicates a gap between available custom skills and the model’s autonomous selection. |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Add deterministic redaction and reduce Auto Memory logging | 5 💬 / 0👍 | Security‑focused: prevents secret leakage from memory extraction and curtails noisy logs. |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Stop Auto Memory from retrying low‑signal sessions indefinitely | 4 💬 / 0👍 | Prevents wasted resources and repeated failed memory‑extraction attempts. |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell command execution gets stuck with “Waiting input” after completion | 4 💬 / 3👍 | Simple CLI commands leave the agent waiting for input, breaking automation pipelines. |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | Enhance browser_agent resilience: Automatic session takeover and lock recovery | 4 💬 / 0👍 | Improves reliability of the browser sub‑agent in persistent‑profile scenarios. |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent fails in Wayland | 4 💬 / 1👍 | Blocks Linux users running Wayland; a platform‑specific usability gap. |

---

### 4. Key PR Progress (10 important PRs)

| # | PR | Summary |
|---|----|---------|
| [#29282](https://github.com/google-gemini/gemini-cli/pull/29282) | **fix(auth): persist oauth credentials after login** – Stores OAuth tokens immediately after a successful browser or device‑code flow, eliminating repeated sign‑in prompts. |
| [#29283](https://github.com/google-gemini/gemini-cli/pull/29283) | **fix(sandbox): improve filesystem isolation and isolate runtime state** – Tightens Docker/Podman/runsc/LXC/macOS Seatbelt sandboxes with read‑only config mounts and ephemeral runtime dirs. |
| [#29214](https://github.com/google-gemini/gemini-cli/pull/29214) | **fix(sandbox): harden filesystem boundaries and isolate runtime state** – Replaces host‑directory mounts with sanitized config files and uses realpath checks to prevent escape. |
| [#29250](https://github.com/google-gemini/gemini-cli/pull/29250) | **fix(core): prevent indirect prompt injection via build file modifications and untrusted flags** – Validates workspace boundaries for build configs and external command args under restricted‑workspace mode. |
| [#29185](https://github.com/google-gemini/gemini-cli/pull/29185) | **test(integration): deflake run_shell_command and file-system-interactive tests** – Makes slow E2E tests deterministic by fixing allow‑list handling and teardown. |
| [#29208](https://github.com/google-gemini/gemini-cli/pull/29208) | **fix(core): fall back to empty on malformed agents.json shape** – Prevents crashes when `agents.json` is corrupted (null/scalar/array) by treating it as empty. |
| [#29287](https://github.com/google-gemini/gemini-cli/pull/29287) | **feat(policy): map --yolo to allowedTools wildcard policy** – Implements `--yolo` as `allowedTools: ["*"]` and removes the distinct `ApprovalMode.YOLO` state. |
| [#29286](https://github.com/google-gemini/gemini-cli/pull/29286) | **Implement Google search tool in RobustAutonomousAgent** – Adds a web‑search capability to the autonomous agent, expanding its information‑gathering toolkit. |
| [#29184](https://github.com/google-gemini/gemini-cli/pull/29184) | **fix(core): validate git args in Windows sandbox to block silent `git diff --output`** – Ensures potentially destructive git flags trigger confirmation prompts on Windows. |
| [#29110](https://github.com/google-gemini/gemini-cli/pull/29110) | **fix(core): route read_file content through FileSystemService** – Aligns `read_file` with other FS tools so that ACP‑adopted filesystems are respected. |

---

### 5. Feature Request Trends
- **Native Bash / POSIX Tool Usage** – Multiple issues (e.g., #19873) request leveraging Gemini’s inherent bash affinity via zero‑dependency sandboxes.
- **AST‑Aware Code Navigation** – Interest in AST‑level reads/search/mapping (#22745, #22746) to reduce token overhead and improve precision.
- **Sub‑Agent Discovery & Autonomy** – Requests for better autonomous selection of skills/sub‑agents (#21968) and visibility of sub‑agent trajectories (#22598).
- **Browser Agent Robustness** – Calls for automatic session takeover, lock recovery, and Wayland support (#22232, #21983).
- **Memory & Logging Improvements** – Deterministic redaction, reduced Auto‑Memory logging, and handling of low‑signal sessions (#26525, #26522, #26523).
- **Security & Sandbox Hardening** – Persistent OAuth, prompt‑injection prevention, Windows git‑arg validation, and filesystem isolation (#29282, #29250, #29283, #29214, #29184).
- **Toolchain Integration** – Google search tool, reliable file‑only logger for interceptors, and persistent `/compress` across sessions (#29286, #29181, #21335).

---

### 6. Developer Pain Points
- **Sub‑Agent Reliability** – Agents incorrectly report success after hitting turn limits, hang indefinitely, or fail to surface internal context in bug reports.
- **Shell Interaction Stalls** – Completion of simple shell commands leaves the agent waiting for input, disrupting automation.
- **Memory System Noise** – Auto‑Memory logs excessively, retries low‑signal sessions forever, and may leak secrets before redaction.
- **Browser Agent Fragility** – Failures under Wayland, locked profiles, and ignored `settings.json` overrides cause workflow interruptions.
- **Skill/Sub‑Agent Under‑Utilisation** – Despite available custom skills (e.g., gradle, git), Gemini rarely invokes them without explicit prompting.
- **Sandbox Escape Concerns** – Need for stronger filesystem isolation and prompt‑injection safeguards, especially when using build‑file‑driven flows.
- **Configuration Persistence** – Issues with symlinked agents, non‑persistent `/compress`, and corrupted `agents.json` leading to crashes or lost state.

These trends highlight a community eager for **safer, more autonomous agent behavior**, **better integration with native development tools**, and **robust memory and security handling**—all areas where the recent nightly release and merged PRs are already making progress.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest – 2026‑09‑12**  
*Compiled from the latest GitHub activity (releases, issues, and PRs) for the `github/copilot-cli` repository.*

---

### 1. Today's Highlights
- A new patch release **v1.0.84‑5** landed, adding *session & memory import* commands for the semantic JSONL interchange format and improving shell completions so that `copilot <TAB>` now shows root flags alongside sub‑commands.  
- Community discussion remains focused on stability (session‑resume OOM, Windows crashes), MCP/skill reliability, and reducing authorization friction.  

---

### 2. Releases
| Version | What’s new | Link |
|---------|------------|------|
| **v1.0.84‑5** (released within the last 24 h) | • **Added** `session import` and `memory import` commands to load data via the semantic JSONL interchange format.<br>• **Improved** shell‑completion generation: completions are now derived from the same grammar the CLI parses, so `copilot <TAB>` offers root flags together with sub‑commands and each sub‑command lists only its own options.<br>• Miscellaneous command‑line polishing (see release notes for diff). | [github.com/github/copilot-cli/releases/tag/v1.0.84-5](https://github.com/github/copilot-cli/releases/tag/v1.0.84-5) |

*No other version tags appeared in the last 24 h.*

---

### 3. Hot Issues (10 noteworthy items)

| # | Issue | Why it matters / Community reaction |
|---|-------|--------------------------------------|
| **[#4095](https://github.com/github/copilot-cli/issues/4095)** | Windows plugin update fails with “Access is denied (os error 5)” when VS Code is running. | **21 👍**, 2 comments – a frequent blocker for developers who keep Copilot extension open; indicates a file‑handle conflict that needs a lock‑free update strategy. |
| **[#4699](https://github.com/github/copilot-cli/issues/4699)** | OOM (`JavaScript heap out of memory`) on long `--resume` sessions; crash dumps written to cwd. | **5 👍**, 3 comments – highlights memory‑growth in resumed sessions, causing hard crashes and leaking diagnostic files into the working directory. |
| **[#4438](https://github.com/github/copilot-cli/issues/4438)** | `disable-model-invocation: true` makes a skill unreachable (skill not found on explicit invocation). | **7 👍**, 5 comments – breaks the intended “manual‑only” skill model; users report confusing `Skill not found` errors despite the skill appearing in `skill list`. |
| **[#4753](https://github.com/github/copilot-cli/issues/4753)** | Session resume cancels in‑flight stdio MCP server connections (~1 s timeout, down from ~16 s). | **1 👍**, 4 comments – recent timeout regression disrupts MCP‑based tooling during session handoff, leading to silently unavailable servers. |
| **[#3700](https://github.com/github/copilot-cli/issues/3700)** | WSL2 regression: CLI MainThread spins at ~215 % CPU while idle, TUI frozen until restart (high severity). | **2 👍**, 4 comments – renders the CLI unusable on WSL2 after a reboot; a critical stability issue for Linux‑based developers. |
| **[#1168](https://github.com/github/copilot-cli/issues/1168)** | Excessive authorization prompts (“authorization fatigue”) during a single request. | **2 👍**, 4 comments – users report >12 prompts for a single high‑level ask, hurting workflow efficiency and trust. |
| **[#4764](https://github.com/github/copilot-cli/issues/4764)** | Assisted permissions mode stops working after ~1 hour; requires a new session to recover. | **0 👍**, 4 comments – intermittent permission‑assistant failure disrupts long‑running interactive sessions. |
| **[#4795](https://github.com/github/copilot-cli/issues/4795)** | Atlassian MCP OAuth fails: callback URL mismatch (random port vs. registered 33418). | **3 👍**, 3 comments – blocks integration with popular Atlassian MCP servers; indicates a hard‑coded port issue in the OAuth flow. |
| **[#4370](https://github.com/github/copilot-cli/issues/4370)** | MCP init fails when `server/discover` returns `-32602` (FastMCP). | **3 👍**, 3 comments – shows incompatibility with MCP servers that don’t implement the proprietary `server/discover` method, causing connection aborts. |
| **[#4823](https://github.com/github/copilot-cli/issues/4823)** | Improve readability of `/skills list` output (inconsistent indentation, hard‑to‑scan). | **0 👍**, 0 comments (fresh) – a usability request that, while low‑engagement, reflects ongoing friction in skill discovery. |

*Note: Issues are ordered by a blend of comment count, reaction (👍), and perceived impact on day‑to‑day usage.*

---

### 4. Key PR Progress
- **No pull requests were updated in the last 24 h** (the PR list is empty).  
  Consequently, there are no recent code‑changes to highlight beyond the release above.

---

### 5. Feature Request Trends
From the open issues (especially those with 0 👍 but clear requests) the community is gravitating toward:

1. **Session & Context Persistence**  
   - Cross‑session context querying (#2436)  
   - “End‑of‑session” hook to run a process/skill (#4820)  
   - Better memory management for long‑lived/resumed sessions (#4699)  

2. **MCP & Skill Reliability**  
   - Fix for `disable-model-invocation` making skills unreachable (#4438)  
   - Robust handling of MCP servers that lack `server/discover` (#4370)  
   - Stable OAuth callbacks for remote MCP servers (Atlassian, etc.) (#4795)  
   - Prevent premature MCP connection termination on session resume (#4753)  

3. **Installer & Platform Improvements**  
   - Voice‑mode installer to use public nuget.org instead of private Azure Artifacts (#4035, #4814)  
   - Sandbox support on Windows 25H2 (#4652)  
   - Plugin update mechanism that doesn’t clash with VS Code file watchers (#4095)  

4. **UX & Developer Ergonomics**  
   - Reduce authorization prompts / introduce token caching or batch‑approval (#1168)  
   - Improve `/skills list` formatting for readability (#4823)  
   - Add OpenAI Flex Tier (`service_tier: flex`) to model selector (#4821)  
   - Custom status line & context‑window support in the desktop app (#4813)  

5. **Observability & Diagnostics**  
   - Avoid writing crash dumps to the current working directory (#4699)  
   - Better logging for MCP handshake failures (#4370)  

---

### 6. Developer Pain Points (Recurring Frustrations)
- **Authorization Overload** – Frequent `copilot` permission prompts break flow (“authorization fatigue”).  
- **Session Instability** – Resumed sessions either OOM (#4699) or kill MCP connections too early (#4753); long runs become unreliable.  
- **Windows‑Specific Friction** – High‑CPU spin in WSL2 (#3700), plugin‑update lock conflicts (#4095), sandbox unsupported warnings (#4652), and voice‑installer 401 errors (#4035, #4814).  
- **MCP/Skill Integration Gaps** – Skills marked `disable-model-invocation` become inaccessible (#4438); MCP servers lacking custom `server/discover` are rejected (#4370); OAuth callback mismatches block popular services (#4795).  
- **Tooling Usability** – Skill list output is hard to scan (#4823); missing end‑of‑session hooks forces manual cleanup (#4820).  
- **Resource Management** – Crash dumps litter the working directory, and there’s no mechanism to limit heap growth in long sessions.  

Addressing these points—particularly stabilizing session/resume behavior, smoothing Windows installer/voice flows, and refining the MCP/skill contract—would likely yield the biggest uplift in developer satisfaction for the Copilot CLI.  

---  

*Generated for internal community consumption. All links point to the official GitHub repository.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest – 2026‑09‑12**  

---

### 1. Today's Highlights  
- No new releases were published in the last 24 h.  
- Two issues received updates: a newly opened hard‑deadlock bug on Linux/WSL2 (#2640) and the closure of a CentOS 7.9 MCP‑connection failure (#1388).  
- No pull‑request activity was recorded during the period.

### 2. Releases  
*None* – no version tags were pushed in the last day.

### 3. Hot Issues  
| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| [#2640](https://github.com/MoonshotAI/kimi-cli/issues/2640) | **Linux/WSL2 random hard deadlock (v0.42.0)** – TUI freezes, SIGTERM/SIGQUIT ineffective, dragging down SSH sessions. | Blocks interactive workflows on a widely used development platform; the inability to kill the process forces users to restart terminals or machines, hurting productivity. | Opened today; no comments yet, but the severity (process‑kill failure) signals high priority for maintainers. |
| [#1388](https://github.com/MoonshotAI/kimi-cli/issues/1388) | **CentOS 7.9 MCP connection failure** – “Unexpected error: Failed to connect MCP servers” when running `kimicode`. | Highlights compatibility gaps on older enterprise Linux distributions; users on CentOS 7.9 cannot leverage the CLI until the MCP handshake is resolved. | Closed today with no further discussion; likely resolved via a recent dependency or environment fix, but the closure note lacks detail, leaving users wanting confirmation. |

*Only two issues were updated in the window; therefore the list reflects all noteworthy items.*

### 4. Key PR Progress  
*None* – no pull‑requests were updated in the last 24 h.

### 5. Feature Request Trends  
From the limited issue set, the prevailing request themes are:  

1. **Robust process lifecycle handling** – users need reliable termination signals (SIGTERM/SIGQUIT) and watchdog mechanisms to prevent orphaned TUI processes, especially under WSL2.  
2. **Broader distro compatibility** – ensuring MCP server connections work on legacy RHEL/CentOS releases and providing clear diagnostics when handshake fails.

### 6. Developer Pain Points  
- **Unkillable TUI sessions** causing terminal/SSH lock‑ups, forcing full session restarts.  
- **Opaque connection errors** on older Linux distributions, with insufficient logging to diagnose MCP handshake problems.  
- **Lack of recent releases** leading to uncertainty about whether known bugs are being addressed in a timely manner.

---  

*This digest reflects the activity captured in the GitHub repository `MoonshotAI/kimi-cli` for the specified date. For deeper exploration, visit the issue and pull‑request pages linked above.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode Community Digest – 2026‑09‑12**  

---

### 1. Today’s Highlights
- A high‑impact billing bug (#37790) persists: users who paid for an OpenCode Go subscription still see “Insufficient balance” and cannot use the service, drawing 18 comments and growing frustration.  
- Performance and reliability dominate the conversation: infinite‑loop subagent token burn (#45442), upstream request failures on Go models (#37231), and repeated reasoning‑part errors for GPT‑5.6‑sol‑fast (#36241) each have multiple up‑votes and active discussion.  
- Feature requests for richer agent orchestration (dynamic workflows à la Claude Code #30308), limits on parallel subagents #27110, and undo‑message‑only cleanup #7963 continue to gather strong community support (👍 5‑31).

---

### 2. Releases
*No new releases were published in the last 24 hours.*

---

### 3. Hot Issues (10 picked)

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
|[#37790](https://github.com/anomalyco/opencode/issues/37790)|**OpenCode Go subscription paid but workspace shows “Insufficient balance”**|Blocks core paid functionality; payment gateway (Stripe) reports success but backend balance not updated.|18 comments, 0 👍 – users urging a hotfix and refund clarification.|
|[#45442](https://github.com/anomalyco/opencode/issues/45442)|**Subagent infinite loop → 364 identical grep calls, ~50 min, no loop protection**|Causes uncontrolled token burn and stalls workflows; a regression in v2.0 subagent scheduling.|8 comments, 1 👍 – requests for timeout/watchdog mechanisms.|
|[#37231](https://github.com/anomalyco/opencode/issues/37231)|**Error from provider (Console Go): Upstream request failed**|Affects all Go‑model usage (CLI, desktop, VSCode); intermittent 500‑style failures.|9 comments, 0 👍 – users ask for better fallback/retry logic.|
|[#36241](https://github.com/anomalyco/opencode/issues/36241)|**macOS gpt‑5.6‑sol‑fast/high fails with “reasoning part rs_*:0 not found”**|Breaks reasoning‑heavy workflows on Apple silicon; appears after a few turns.|7 comments, 2 👍 – discussions around model‑specific handling.|
|[#27110](https://github.com/anomalyco/opencode/issues/27110)|**Setting to limit max number of parallel subagents**|Prevents OOM on low‑memory machines; essential for local‑model users.|5 comments, 31 👍 – strong demand for a config knob.|
|[#30308](https://github.com/anomalyco/opencode/issues/30308)|**[FEATURE] Anything similar to Claude Code dynamic workflows?**|Users want reusable, conditional agent pipelines akin to Claude’s workflows.|10 comments, 5 👍 – interest in a visual/graph‑based workflow editor.|
|[#7963](https://github.com/anomalyco/opencode/issues/7963)|**[windows] Undo message only – keep file changes (like Claude Code)**|Current `/undo` reverts both chat and file edits; users need granular control.|9 comments, 12 👍 – frequent request for selective undo.|
|[#40993](https://github.com/anomalyco/opencode/issues/40993)|**[FEATURE] Support the Agent Plugins standard (agent‑plugins.org)**|Would enable portable skill/MCP sharing across agents and vendors.|6 comments, 12 👍 – aligns with OpenCode’s “universal‑agent” claim.|
|[#41551](https://github.com/anomalyco/opencode/issues/41551)|**[FEATURE] Add Muse Spark / Muse Code as a provider**|Meta’s new code models are gaining traction; request to broaden provider list.|5 comments, 9 👍 – enthusiasm for latest LLM offerings.|
|[#48330](https://github.com/anomalyco/opencode/issues/48330)|**[2.0] Copilot Legacy Plan fully consumed by a single prompt in opencode2**|Shows a regression in request‑counting logic; legacy users lose quota unexpectedly.|6 comments, 0 👍 – users ask for audit/restore of quota.|

---

### 4. Key PR Progress (10 picked)

| PR | Summary | Impact |
|----|---------|--------|
|[#41813](https://github.com/anomalyco/opencode/pull/41813)|**feat: paste expand toggle** – lets users switch pasted text between placeholder and full view via click.|Improves usability of large code snippets in the editor.|
|[#41811](https://github.com/anomalyco/opencode/pull/41811)|**feat(plugin): add session stopping hook** – plugins can inject ordered context before a session goes idle.|Enables persistence of custom state or cleanup logic.|
|[#41803](https://github.com/anomalyco/opencode/pull/41803)|**fix(desktop): restore server CORS policy** – removes overly‑permissive wildcard CORS headers from Electron requests.|Hardens desktop security; restores intended `oc://renderer` origin.|
|[#41792](https://github.com/anomalyco/opencode/pull/41792)|**fix(console): preserve assistant content arrays** – keeps multi‑part Responses API content instead of dropping parts.|Fixes loss of formatted assistant output (e.g., tables, code blocks).|
|[#41791](https://github.com/anomalyco/opencode/pull/41791)|**fix(app): use dedicated file manager icon on Linux** – restores correct icon for the file‑manager button.|Minor UI polish for Linux desktop users.|
|[#41785](https://github.com/anomalyco/opencode/pull/41785)|**docs: document plugin override precedence** – clarifies how duplicate plugins are deduped across config scopes.|Reduces confusion for plugin developers and power users.|
|[#41770](https://github.com/anomalyco/opencode/pull/41770)|**fix(tui): stop retrying unavailable audio** – disposes native engine when audio device is missing.|Prevents busy‑loop and wasted CPU when headphones are unplugged.|
|[#41760](https://github.com/anomalyco/opencode/pull/41760)|**feat(sdk): import local credentials into embedded host** – copies OAuth rows into SDK DB at startup, access‑token‑only.|Allows embedded SDKs to reuse existing login sessions safely.|
|[#41752](https://github.com/anomalyco/opencode/pull/41752)|**feat(tui): render structured mentions inline** – shows `@user` or `@agent` mentions as badges inside the message flow.|Improves readability of threaded conversations in the TUI.|
|[#41749](https://github.com/anomalyco/opencode/pull/41749)|**docs: add opencode-plugin-peers to ecosystem** – registers the cross‑session messaging plugin.|Highlights an emerging community‑built extension for shared state.|

*(Comment counts are currently undefined due to the data export; the selected PRs represent notable functional or documentation changes.)*

---

### 5. Feature Request Trends
- **Workflow orchestration** – requests for dynamic, conditional agent workflows (Claude‑Code‑style) and a visual editor (#30308).  
- **Resource control** – limits on parallel subagents (#27110) and timeout/loop‑protection mechanisms (#45442).  
- **Undo granularity** – ability to revert AI messages while preserving file edits (#7963).  
- **Plugin ecosystem** – adoption of the Agent Plugins standard (#40993) and registration of community plugins like *opencode‑plugin‑peers*.  
- **Provider expansion** – adding Muse Spark/Muse Code (#41551) and ensuring proper prompt caching for DeepSeek and other models (#41125, #43218).  
- **UX polish** – selective undo, better TUI handling of console output (#48520), and project‑rename capability in the TUI (#48540).  

---

### 6. Developer Pain Points
- **Billing & quota** – subscription payments not reflected in workspace balance (#37790); legacy Copilot plans being exhausted by a single prompt (#48330).  
- **Reliability** – intermittent upstream failures on Go models (#37231); reasoning‑part errors for specific model variants (#36241); TUI crashes due to disk‑space watchers (#48384).  
- **Performance/run‑away processes** – subagent entering infinite loops with massive token burn (#45442); lack of loop protection or timeout.  
- **Caching inefficiencies** – near‑zero prompt‑cache hit rates for DeepSeek in OpenCode Go (#41125, #43218), causing unnecessary reprocessing and cost.  
- **UX friction** – missing confirmation before running remote `auth.command` (#10939); undo that wipes file changes; absence of project rename in TUI; splash screen that never hides on Windows (#48553).  
- **Compatibility** – requests for Visual Studio 2026 Enterprise support (#11902) and broader IDE/plugin integration.  

*Overall, the community is urging tighter billing reliability, stronger safeguards against runaway agent loops, expanded model/provider support with proper caching, and finer‑grained UX controls for undo and session management.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest: 2026-09-12

## 1. Today's Highlights
The community is heavily focused on refining the developer experience for session management and addressing cross-platform stability, particularly for Windows and specific terminal environments. Significant progress has been made in how the agent handles mid-session state changes and extension reloads, moving toward a more robust architecture for long-running interactive sessions.

## 2. Releases
*No new releases reported in the last 24 hours.*

## 3. Hot Issues
*   **[#7547] Windows sink-thread strategy](https://github.com/earendil-works/pi/issue/7547):** High-engagement discussion regarding the fragmented ways Pi is run on Windows. Developers are debating where to focus core energy vs. out-of-box support.
*   **[#9410] TUI freeze on large-context interrupt](https://github.com/earendil-works/pi/issue/9410):** Critical bug where pressing `Escape` to interrupt a stream with ~465k tokens causes the CLI to freeze for nearly a minute.
*   **[#9265] O(n²) tool-call re-parsing](https://github.com/earendil-works/pi/issue/9265):** A performance bottleneck where the OpenAI completion stream handler re-parses the entire accumulated JSON on every delta, threatening event loop stability in embedded runtimes.
*   **[#7321] Multi-line paste failure in Termux](https://github.com/earendil-works/pi/issue/7321):** Users on terminals without bracketed paste support experience immediate submission on carriage returns instead of pasting block block.
*   **[#9045] Invalid --mode values ignored](https://github.com/earendil-works/pi/issue/9045):** A regression where unrecognized mode flags (like `--mode yaml`) are silently dropped without diagnostics, falling back to text mode.
*   **[#5323] Vertex + GCP metadata server support](https://github.com/earendil-works/pi/issue/5323):** Request to move away from synchronous `existsSync` checks for Google credentials to improve reliability in cloud environments.
*   **[#8810] Extension-registered providers ignore defaults](https://github.com/earendil-works/pi/issue/8810):** A bug where fresh sessions intermittently ignore the `defaultProvider` in settings if it was registered via an extension.
*   **[#9331] Bedrock OpenAI reasoning effort missing](https://github.com/earendil-works/pi/issue/9331):** Users report that "thinking level" settings are not being passed to OpenAI models via Bedrock, unlike with Claude models.
*   **[#7658] Extension API for auth persistence](https://github.com/earendil-works/pi/issue/7658):** Developers are seeking a programmatic way for extensions to save API keys directly to `auth.json`.
*   **[#9497] Windows CJK IME lag](https://github.com/earendil-works/pi/issue/9497):** Significant usability issue for CJK users where the IME candidate window fails to appear or input is delayed by 15 seconds.

## 4. Key PR Progress
*   **[#9501] Resolve Windows shells from directories](https://github.com/earendil-works/pi/pr/9501):** Unifies the fragmented logic for finding binaries on Windows, improving startup reliability.
*   **[#9116] Mid-conversation system messages](https://github.com/earendil-works/pi/pr/9116):** A major architectural update allowing extensions to update system roles mid-session without breaking the core agent.
*   **[#9117] Coding agent: system message deltas](https://github.com/earendil-works/pi/pr/9117):** Optimizes token usage by sending changes as deltas rather than rewriting the entire top-level prompt.
*   **[#8627] Use ctx.cwd for cwd-sensitive tools](https://github.com/earendil-works/pi/pr/8627):** Updates tools to resolve paths against the actual session directory rather than the directory where they were created.
*   **[#9467] Classify setup-phase aborts as "aborted"]](https://github.com/earendil-works/pi/pr/9467):** Fixes a UI bug where legitimate setup aborts were shown as hard errors.
*   **[#9468] Deferred extension reload](https://github.com/earendil-works/pi/pr/9468):** Allows extension reloads to be queued until the agent settles, enabling seamless "follow-up" requests.
*   **[#8980] Ingest external entries in in-memory sessions](https://github.com/earendil-works/pi/pr/8980):** Adds support for handling external data within the session state.
*   **[#8708] Fix fd/rg version without GitHub API](https://github.com/earendil-works/pi/pr/8708):** Prevents rate-limiting on shared corporate IPs by avoiding unnecessary GitHub API release checks.
*   **[#9495] Fix approve contributor: no blank lines](https://github.com/earendil-works/pi/pr/9495):** Cleans up the contributor list logic to prevent phantom blank lines. 
*   **[#9503] Improve light theme warning contrast](https://github.com/earendil-works/pi/pr/9503):** Fixes an accessibility issue where ANSI warnings failed WCAG contrast standards on light backgrounds.

## 5. Feature Request Trends
*   **Session Management Improvements:** There is a strong push for "split startup" and "session resume" to reduce the overhead of re-discovering environments on every launch.
*   **UI Customization:** Users are requesting keybindings to toggle heavy features like inline images (e.g., Ctrl+O) to improve TUI performance.
*   **Telemetry & Observability:** A proposal for a non-blocking "event-exporter" extension to send lifecycle and tool events to external webhooks or message queues.
*   **Improved Auth Flow:** Requests for confirmation-based device-code flows (browser/clipboard actions) to reduce the friction of frequent logins in restricted corporate environments.

## 6. Developer Pain Points
*   **Windows Parity:** The lack of a unified "first-class" experience on Windows (shell discovery, IME lag, terminal behavior) remains the primary source of frustration.
*   **Performance at Scale:** The O(n²) parsing of tool-calls and TUI freezes during large-context interruptions are significant barriers for power users and agents.
*   **State Consistency:** Developers struggle with how extensions modify the environment mid-session without causing side effects or losing context, leading to the current wave of "system message delta" architecture.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest: 2026-09-12

## Today's Highlights
Today's activity focused heavily on stabilizing the Windows environment, specifically addressing critical process leaks and MCP connection issues in the Desktop client. Significant progress was made on session management features, including new support for standalone (non-workspace) sessions and improved session lifecycle cleanup for git worktrees. The team is also refactoring the internal codebase to clean up obsolete response logic in the Dingtalk integration.

## Latest Releases
*   **v0.23.3-nightly.20260911.aaa6a32aae**: The latest nightly build includes internal refactors for background responses and removal of obsolete channel logic.

## Hot Issues
*   **TUI exits silently (uncaught React #185)** (#11500): When multiple background agents finish in quick succession, the interactive TUI crashes with a "Maximum update depth exceeded" error, dropping the user back to the shell without a stack trace. [View Issue](https://github.com/QwenLM/qwen-code/issue/11500)
*   **MCP -3200 Connection closed on Windows** (#9693): Qwen Desktop fails to connect to MCP servers (like filesystem) on Windows via STDIO, even when properly configured. [View Issue](https://github.com/QwenLM/qwen-code/issue/9693)
*   **Web-terminal PTYs leak conhost.exe** (#11352): A critical performance bug where web-terminal PTYs leak `conhost.exe` processes on exit. A fix was applied to the shell-tool, but the web-terminal remains affected. [View Issue](https://github.com/QwenLM/qwen-code/issue/11352)
*   **Settings writing to wrong worktree** (#8138): When using git worktrees, settings changes are incorrectly written to the project root `.qwen` folder instead of the specific worktree's directory. [View Issue](https://github.com/QwenLM/qwen-code/issue/8138)
*   **Telemetry data leak (Privacy)** (#11666, #11667, #11998): Multiple high-priority reports indicate raw API request content and shell command lines are uploaded to telemetry endpoints even when `logPrompts` is set to false. [View Issue](https://github.com/QwenLM/qwen-code/issue/11666)
*   **CI/CD Stale Runners** (#10879, #11633): The CI pipeline is experiencing issues where ECS runner fleets are failing to update, causing contention between releases and PR tests due to shared host resources. [View Issue](https://github.com/QwenLM/qwen-code/issue/10879)
*   **VS Code history metadata** (#11574): The VS Code extension's history dialog only shows sessions with the hardcoded `vscode` sourceType, effectively hiding transcripts generated by the CLI or older versions. [View Issue](https://github.com/QwenLM/qwen-code/issue/11574)
*   **Webview stuck on Remote-SSH** (#11556): Users report the Qwen Code extension webview gets stuck in a loading state when working over Remote-SSH environments. [View Issue](https://github.com/QwenLM/qwen-code/issue/11556)
*   **Dependency CVE failures** (#10850): CI audit is currently failing due to newly discovered vulnerabilities in `fast-uri`, `qs`, and `uuid`. [View Issue](https://github.com/QwenLM/qwen-code/issue/10850)
*   **Process management on Windows** (#6067): A long-standing critical issue where v0.19.2+ PowerShell processes fail to clean up child processes, eventually leading to memory exhaustion. [View Issue](https://github.com/QwenLM/qwen-code/issue/6067)

## Key PR Progress
*   **Support for standalone sessions** (#8908): A major feature PR allowing sessions to run without a workspace, currently merged into `main` but awaiting maintainer acceptance. [View PR](https://github.com/QwenLM/qwen-code/pull/8908)
*   **Worktree session cleanup** (#11024): Implements logic to ensure sessions associated with git worktrees are properly cleaned up when the worktree is removed. [View PR](https://github.com/QwenLM/qwen-code/pull/11024)
*   **Graceful ACP shutdown** (#11642): Fixes VS Code extension to shut down the Agent Connection Protocol (ACP) gracefully by closing stdin instead of killing the process. [View PR](https://github.com/QwenLM/qwen-code/pull/11642)
*   **Continue interrupted sessions** (#11545): Adds an explicit "Continue" action to the Web Shell UI, allowing users to resume interrupted conversations without duplicating user messages. [View PR](https://github.com/QwenLM/qwen-code/pull/11545)
*   **API Reference Documentation** (#11592): Generates an OpenAPI 3.1 document for the daemon's REST/SSE interface. [View PR](https://github.com/QwenLM/qwen-code/pull/11592)
*   **Host-level CI maintenance** (#11531): A new maintenance package for Linux ECS runners including Docker cleanup and systemd services. [View PR](https://github.com/QwenLM/qwen-code/pull/11531)
*   **Deferred tools bridge** (#10410): Replaces tool schema revelation with a stable two-step `tool_search` and `tool_call` bridge. [View PR](https://github.com/QwenLM/qwen-code/pull/10410)
*   **Web Shell configuration** (#11342): Adds model role and context window configuration to the Web Shell settings. [View PR](https://github.com/QwenLM/qwen-code/pull/11342)
*   **Stalled agent timeouts** (#11270): Implements 15-minute watchdogs for background agents to prevent them from hanging indefinitely. [View PR](https://github.com/QwenLM/qwen-code/pull/11270)
*   **UI confirmation dialog fix** (#11659): Resolves a UI bug where confirmation dialogs appeared twice in both the tool card and the dialog body. [View PR](https://github.com/QwenLM/qwen-code/pull/11659)

## Feature Request Trends
*   **Chat Compression Model**: High demand for a dedicated "compaction" model used specifically to compress chat history to save context tokens.
*   **Web Search Metadata**: Requests for the `web_search` tool to return actual page titles so the model can cite sources more effectively.
*   **Hook Alignment**: Developers are requesting to align Qwen's hook engine contract more closely with Claude Code's implementation (plain-text stdout, stop-hook support).
*   **Session Naming**: Continued interest in "owner-scoped" or "named" sessions to allow users to better organize concurrent tasks.

## Developer Pain Points
*   **Windows Stability**: Significant delevopment concerns regarding process leaks (`conhost.exe`) and MCP connection failures specifically on Windows.
*   **Privacy/Telemetry**: Strong frustration regarding bugs where raw command lines and API data are sent to telemetry even when users have opted out.
*   **TUI Fragility**: The "Maximum update depth exceeded" error in the TUI is a major pain point for users relying on multi-agent background workflows.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-09-12

*Source data references `Hmbown/Codewhale` issue/PR URLs; links below use those exact IDs.*

## 1. Today’s Highlights

No new releases landed in the last 24h. The issue queue is dominated by v0.9.12 milestone wrap-up and EPIC-005 TUI crate decomposition, while the freshest open reliability items are session-resume failure (`#6102`) and TUI user-input modal clipping (`#6045`). PR activity is concentrated on session export, execpolicy hardening, image-capable tool results, provider reasoning fixes, and rate-limit-adaptive subagent scheduling.

## 3. Hot Issues

- **#5573 — v0.9.12 milestone tracker — start here** · CLOSED · 25 comments  
  Central release/milestone coordination thread with operator handoff, slice table, gates, and PR/reinstall/self-test steps. Highest comment count in the feed; closed but still updated, indicating final wrap-up.  
  [Hmbown/Codewhale#5573](https://github.com/Hmbown/Codewhale/issues/5573)

- **#5316 — EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)** · OPEN · 22 comments  
  Long-running architecture umbrella for decomposing the TUI crate, ownership, dependency order, and completion evidence. Sustained maintainer/contributor coordination; still open.  
  [Hmbown/Codewhale#5316](https://github.com/Hmbown/Codewhale/issues/5316)

- **#3063 — v0.8.59 release tracker: TUI mouse-report leak, runtime safety, maintainer queue** · CLOSED · 11 comments  
  Stabilization release tracker covering a macOS TUI mouse-report input leak and maintainer-request triage. Release-blocker labeled; closed after queue cleanup.  
  [Hmbown/Codewhale#3063](https://github.com/Hmbown/Codewhale/issues/3063)

- **#6102 — bug(session): resuming an interrupted session fails with ENOENT resolving runtime store dir** · OPEN · 4 comments  
  Fresh, high-impact session-durability bug: resume fails before startup due to a missing runtime directory. Active triage; directly affects recovery workflows.  
  [Hmbown/Codewhale#6102](https://github.com/Hmbown/Codewhale/issues/6102)

- **#6045 — fix(tui): user-input modal clips options and hides typed input** · OPEN · 4 comments  
  Real-terminal TUI modal failures: fixed 22-row cap, centered overlay, no scroll, no back-navigation, undocumented. Open and active; strong UX/reliability signal.  
  [Hmbown/Codewhale#6045](https://github.com/Hmbown/Codewhale/issues/6045)

- **#1917 — Proposal: universal PreToolUse/PostToolUse hook layer for Cancel/Pause/Resume** · CLOSED · 6 comments  
  Cross-cutting action lifecycle architecture for cancel-with-rollback, pause, and resume across action types. Closed after design discussion; likely informs future runtime hooks.  
  [Hmbown/Codewhale#1917](https://github.com/Hmbown/Codewhale/issues/1917)

- **#5268 — Mid-turn control (queue / send-now / Esc-keep-draft) + named waits** · CLOSED · 4 comments  
  Defines a crisp steering contract while a turn is running, including queue vs send-now vs cancel-keep-draft. v0.9.12 item; closed after implementation/triage.  
  [Hmbown/Codewhale#5268](https://github.com/Hmbown/Codewhale/issues/5268)

- **#6017 — Could Codewhale support durable memory across sessions?** · OPEN · 3 comments  
  External integration proposal from MemCode for an optional durable memory layer carrying project context and user preferences. Early but strategically relevant.  
  [Hmbown/Codewhale#6017](https://github.com/Hmbown/Codewhale/issues/6017)

- **#5575 — Fleet/subagent role posture has no single source of truth** · CLOSED · 3 comments  
  Subagent role definitions drift across at least five places; verifier contradiction was a symptom. Closed under v0.9.12; important for fleet correctness.  
  [Hmbown/Codewhale#5575](https://github.com/Hmbown/Codewhale/issues/5575)

- **#2617 — SPM `swift test` fails inside `codewhale` sandbox** · CLOSED · 5 comments  
  Sandbox blocks Swift Package Manager manifest compilation and test runs. Closed, but represents a recurring platform-compatibility pain point for macOS developers.  
  [Hmbown/Codewhale#2617](https://github.com/Hmbown/Codewhale/issues/2617)

*Community reaction note: all listed issues show 0 👍; comment counts are the primary engagement signal.*

## 4. Key PR Progress

- **#6096 — feat(commands): adopt capability shapes in the TUI session-export slice (FEAT-025)** · OPEN  
  Rewires `/export` and `/daochu` through the portable command contract with no user-visible behavior change. Structural migration under EPIC-006.  
  [PR #6096](https://github.com/Hmbown/Codewhale/pull/6096)

- **#6100 — feat(web_search): add Serply search provider** · OPEN  
  Adds Serply as a `[search]` provider for the Web tool, following the Sofya adapter shape. Expands provider choice for search.  
  [PR #6100](https://github.com/Hmbown/Codewhale/pull/6100)

- **#6056 — feat(session): export full-fidelity session archives as tar.xz** · CLOSED  
  Adds a machine-facing counterpart to lossy `/export` markdown: packs the complete durable session record into a compressed archive from CLI or library.  
  [PR #6056](https://github.com/Hmbown/Codewhale/pull/6056)

- **#6054 — feat(execpolicy): deny-matching expressiveness for rulesets** · CLOSED  
  Extends deny-prefix matching for real exfiltration/sabotage vectors, including `cmd.exe` single-letter slash flags. Security hardening.  
  [PR #6054](https://github.com/Hmbown/Codewhale/pull/6054)

- **#6053 — feat(tools): allow tool results to carry images via `metadata.images`** · CLOSED  
  Lets tools hand image artifacts, e.g. computer-use screenshots, to vision-capable models within shared size limits.  
  [PR #6053](https://github.com/Hmbown/Codewhale/pull/6053)

- **#6055 — feat(subagent): rate-limit-adaptive launch scheduling** · OPEN  
  Replaces fixed-capacity semaphore gating with scheduling that adapts to shared-provider 429s. Directly targets swarm rate-limit pain.  
  [PR #6055](https://github.com/Hmbown/Codewhale/pull/6055)

- **#6051 — fix(zai): honor reasoning controls on forced-thinking GLM-5.3 and BigModel host** · CLOSED  
  Fixes provider-specific reasoning controls where `thinking.type: "disabled"` is rejected and `reasoning_effort` accepts only `low`/`high`/`max`.  
  [PR #6051](https://github.com/Hmbown/Codewhale/pull/6051)

- **#6052 — fix(tui): align model-facing docs and tool gating** · CLOSED  
  Five audit fixes, including closing a finance tool network-policy bypass and tightening tool gating.  
  [PR #6052](https://github.com/Hmbown/Codewhale/pull/6052)

- **#6081 — fix(client): explain missing Gemini thought signatures** · CLOSED  
  Improves recovery guidance when a compatible gateway rejects Gemini tool-call replay for missing `thought_signature`.  
  [PR #6081](https://github.com/Hmbown/Codewhale/pull/6081)

- **#6057 — chore(deps): security bumps 2026-09-11** · CLOSED  
  Nightly security sweep resolving all 9 open Dependabot npm alerts; no Cargo/CodeQL/workflow changes.  
  [PR #6057](https://github.com/Hmbown/Codewhale/pull/6057)

## 5. Feature Request Trends

- **TUI/UX interaction reliability:** mid-turn control, session peek, attention-aware notifications, durable plan artifacts, live `/workflows` monitor, configurable keymap.  
  [#5268](https://github.com/Hmbown/Codewhale/issues/5268), [#5271](https://github.com/Hmbown/Codewhale/issues/5271), [#4402](https://github.com/Hmbown/Codewhale/issues/4402), [#4754](https://github.com/Hmbown/Codewhale/issues/4754), [#436](https://github.com/Hmbown/Codewhale/issues/436)

- **Subagent/fleet orchestration:** single source of truth for role posture, prompt assembly and role tiers, rate-limit-adaptive scheduling.  
  [#5575](https://github.com/Hmbown/Codewhale/issues/5575), [#5263](https://github.com/Hmbown/Codewhale/issues/5263), [#6055](https://github.com/Hmbown/Codewhale/pull/6055)

- **Tool/code-intelligence expansion:** debugger protocol surface, AST-backed search/edit previews, notebook/archive inputs, LSP rename/code actions, Playwright browser automation.  
  [#3981](https://github.com/Hmbown/Codewhale/issues/3981), [#3980](https://github.com/Hmbown/Codewhale/issues/3980), [#3977](https://github.com/Hmbown/Codewhale/issues/3977), [#3975](https://github.com/Hmbown/Codewhale/issues/3975), [#3358](https://github.com/Hmbown/Codewhale/issues/3358)

- **Provider/model configurability:** user-defined `[[models]]`, automatic profile switching under rate limits, provider-neutral internals, Gemini/Z.ai fixes, Serply search.  
  [#4168](https://github.com/Hmbown/Codewhale/issues/4168), [#855](https://github.com/Hmbown/Codewhale/issues/855), [#5103](https://github.com/Hmbown/Codewhale/issues/5103), [#6081](https://github.com/Hmbown/Codewhale/pull/6081), [#6100](https://github.com/Hmbown/Codewhale/pull/6100)

- **Privacy, security, and guardrails:** `.codewhaleignore` indexing controls, shared settings spine with keyring custody, stronger execpolicy deny matching, network-policy enforcement.  
  [#4069](https://github.com/Hmbown/Codewhale/issues/4069), [#5226](https://github.com/Hmbown/Codewhale/issues/5226), [#6054](https://github.com/Hmbown/Codewhale/pull/6054), [#6052](https://github.com/Hmbown/Codewhale/pull/6052)

- **Durable state and memory:** durable plan artifacts, full-fidelity session archives, cross-session memory, reliable resume.  
  [#5269](https://github.com/Hmbown/Codewhale/issues/5269), [#6056](https://github.com/Hmbown/Codewhale/pull/6056), [#6017](https://github.com/Hmbown/Codewhale/issues/6017), [#6102](https://github.com/Hmbown/Codewhale/issues/6102)

- **Architecture refactoring:** TUI crate decomposition, modal/setup wizard splits, JobManager/TaskManager merge.  
  [#5316](https://github.com/Hmbown/Codewhale/issues/5316), [#3957](https://github.com/Hmbown/Codewhale/issues/3957), [#3954](https://github.com/Hmbown/Codewhale/issues/3954), [#4167](https://github.com/Hmbown/Codewhale/issues/4167)

## 6. Developer Pain Points

- **Session durability/resume failures:** `#6102` shows resume failing with ENOENT on the runtime store dir, blocking interrupted-session recovery.
- **TUI modal usability on real terminals:** `#6045` reports clipped options, hidden typed input, no scroll, no back-navigation, and undocumented behavior.
- **Sandbox/platform compatibility:** `#2617` highlights `swift test` failing inside the CodeWhale sandbox; `#3063` tracks a macOS TUI mouse-report leak.
- **Rate limiting and provider throttling:** `#855` requests automatic profile switching; `#6055` addresses parallel subagent 429s with adaptive launch scheduling.
- **Subagent/role inconsistency:** `#5575` shows role posture drifting across multiple code paths, producing verifier contradictions.
- **Missing durable memory/context:** `#6017` asks for cross-session project and workflow memory; `#5269` seeks durable, commentable plan artifacts.
- **Workflow visibility and authoring gaps:** `#4754` requests a live phase-by-phase `/workflows` monitor and chat-side authoring.
- **Attention/notification contract gaps:** `#4402` calls for focus-aware notifications, action-required title state, and return recap.
- **Config/model catalog friction:** `#4168` asks for user-defined models without editing compiled catalogs; `#5103` tracks provider-neutral internal naming.
- **Ecosystem trust issues:** `#2327` raises copyright concerns over unofficial CodeWhale extensions on the VS Code Marketplace.

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

**ComfyUI Community Digest – 2026‑09‑12**  
*Technical analyst perspective – AI developer tools*  

---

### 1. Today's Highlights  
- No new releases were published in the last 24 h, but the community is actively tackling a severe workflow‑loading regression (#13017) that silently rewrites node values and threatens JSON integrity.  
- GPU‑stability concerns surfaced with multiple BSOD and VRAM‑allocation reports on recent NVIDIA/AMD cards (#16246, #16223, #16225), highlighting regressions introduced in the v0.35.0 + comfy‑aimdo stack.  
- On the feature front, two significant PRs landed: Marigold v2 depth/normal/albedo support (#16232) and initial YuE2 music‑model integration (#16250), expanding ComfyUI’s multimodal capabilities.

---

### 2. Releases  
*None reported in the last 24 h.*

---

### 3. Hot Issues (10 noteworthy items)

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| [#13017](https://github.com/comfyanonymous/ComfyUI/issues/13017) | **Severe regression: workflow load rewrites node values (ckpt/lora and others), sometimes resetting to 0, destroying JSON integrity** | Core reliability problem – loading any workflow can silently corrupt checkpoint/lora fields and other node params, breaking reproducibility. | 34 comments, 4 👍; marked as a blocker for production use. |
| [#16246](https://github.com/comfyanonymous/ComfyUI/issues/16246) | **BSOD in dxgmms2.sys (VidMm page‑in use‑after‑free) on 6 GB RTX 3050 since v0.35.0 / comfy‑aimdo 0.5.3 dynamic VRAM loading** | Kernel‑level crashes render the UI unusable on mid‑range GPUs; indicates a memory‑management bug in the new dynamic‑VRAM loader. | 5 comments, 2 👍; users urging rollback or hotfix. |
| [#16223](https://github.com/comfyanonymous/ComfyUI/issues/16223) | **comfy‑aimdo: hostbuf_read_file_slice 'device copy failed' / 'aimdo memory compile error' when two ComfyUI instances stage large models on two GPUs concurrently** | Multi‑GPU workflows (common in research labs) fail with device‑copy errors, limiting parallel experimentation. | 3 comments; highlights race‑condition in shared aimdo buffers. |
| [#16234](https://github.com/comfyanonymous/ComfyUI/issues/16234) | **[Potential Bug] Krea 2 with DoKR (LoKR + DoRA) has [WARNING] lora key not loaded** | LoRA‑based fine‑tuning (popular for style adapters) fails to load keys, producing silent warnings and ineffective models. | 3 comments; users request clearer error propagation. |
| [#12971](https://github.com/comfyanonymous/ComfyUI/issues/12971) | **[Feature] Allow sending outside parameters to subgraphs inputs** | Enables modular workflows (e.g., propagating seed, steps, CFG between subgraphs) – a highly requested usability boost. | 3 comments; steady interest over 6 months. |
| [#16129](https://github.com/comfyanonymous/ComfyUI/issues/16129) | **[Potential Bug] SeedVR2 image upscaling breaks batched images** | Batched processing (essential for video‑frame pipelines) returns corrupted outputs, breaking automation. | 3 comments; affects users relying on SeedVR2 for upscaling. |
| [#16132](https://github.com/comfyanonymous/ComfyUI/issues/16132) | **V3 node subclasses inherit the parent's cached RETURN_TYPES, so they cannot change their outputs** | Prevents proper inheritance in the new V3 node system, limiting custom‑node extensibility. | 2 comments, 1 👍; developers note need for cache‑invalidation fix. |
| [#13557](https://github.com/comfyanonymous/ComfyUI/issues/13557) | **[Feature] Increase precision to at least hundredths place for built‑in Float node** | Current Float node limited to one decimal place hampers fine‑grained control (e.g., lighting, seed offsets). | 1 comment, 3 👍; simple but high‑impact UX improvement. |
| [#16256](https://github.com/comfyanonymous/ComfyUI/issues/16256) | **[Feature] Please support YuE2, a newly open‑sourced music generation model.** | Demand for audio generation inside ComfyUI is growing; YuE2 adds state‑of‑the‑art music synthesis. | 1 comment, 3 👍; aligns with recent PR #16250. |
| [#16203](https://github.com/comfyanonymous/ComfyUI/issues/16203) | **origin_only_middleware returns 403 for any Sec‑Fetch‑Site: cross‑site request, breaking reverse proxies with auth on a separate domain (Cloudflare Access, oauth2‑proxy, Authelia)** | Blocks enterprise deployments that rely on external auth proxies, limiting adoption in secured environments. | 1 comment; users request middleware relax‑ation or config option. |

---

### 4. Key PR Progress (10 important PRs)

| # | PR | Description / Impact |
|---|----|----------------------|
| [#16232](https://github.com/comfyanonymous/ComfyUI/pull/16232) | **feat: Marigold v2 support (CORE‑431)** – Adds Marigold v2 depth/normal/albedo model with deterministic `IMG_TO_IMG_VELOCITY` sampling; expands 3D‑aware editing capabilities. |
| [#16250](https://github.com/comfyanonymous/ComfyUI/pull/16250) | **Support Yue2 music model** – Provides checkpoint loading and a test workflow for the YuE2 music‑generation model, enabling audio‑first pipelines. |
| [#15915](https://github.com/comfyanonymous/ComfyUI/pull/15915) | **[review‑stack 1/4] code — asset‑record/content split** – Refactors the asset system into `Asset` (metadata) and `AssetContent` (binary blobs) to allow deduping and better transaction safety. |
| [#16030](https://github.com/comfyanonymous/ComfyUI/pull/16030) | **[review‑stack 7/8] ported‑fixes — assets‑di‑v2** – Continuation of the asset‑record split, adding dependency‑injection fixes and docs. |
| [#16036](https://github.com/comfyanonymous/ComfyUI/pull/16036) | **[review‑stack 8/8] defensive‑parity — assets‑di‑v2** – Adds guardrails for missing optional dependencies (blake3/alembic/sqlalchemy) to improve startup robustness. |
| [#16081](https://github.com/comfyanonymous/ComfyUI/pull/16081) | **[review‑stack 9/9] fixes** – Miscellaneous post‑review fixes (CodeRabbit findings) across core modules. |
| [#16008](https://github.com/comfyanonymous/ComfyUI/pull/16008) | **[review‑stack 5/6] code — assets‑di** – Early layers of the asset‑record split, laying groundwork for the new storage model. |
| [#16009](https://github.com/comfyanonymous/ComfyUI/pull/16009) | **[review‑stack 6/6] tests — assets‑di** – Test suite for the new asset layer, ensuring coverage of edge‑cases. |
| [#16032](https://github.com/comfyanonymous/ComfyUI/pull/16032) | **Support SenseNova thinking and interleaved generation** – Extends the native SenseNova U1.5 integration with thinking‑mode and interleaved text‑image generation. |
| [#16272](https://github.com/comfyanonymous/ComfyUI/pull/16272) | **Fix execution time display for prompts running over 24 h** – Replaces `time.gmtime()` with a duration‑formatter that correctly shows days + hours, resolving silent roll‑over bugs for long‑running jobs (e.g., video generation). |
| *[Additional notable]* | [#15335](https://github.com/comfyanonymous/ComfyUI/pull/15335) – Add max/min operations and explicit threshold to `MaskComposite`, improving mask‑logic flexibility. |
| *[Additional notable]* | [#16267](https://github.com/comfyanonymous/ComfyUI/pull/16267) – Implement Video Concatenate node (CORE‑436) for merging multiple video inputs into a single list output. |

---

### 5. Feature Request Trends  
- **Workflow modularity:** Persistent demand for passing arbitrary parameters (seed, steps, cfg) between subgraphs (#12971).  
- **Numeric precision:** Requests to increase Float node resolution to at least two decimal places (#13557) for fine‑tuned controls.  
- **System‑level notifications:** Windows toast or OS‑level alerts on job completion (#16268) to improve user experience in unattended runs.  
- **Audio generation:** Strong interest in supporting emerging music models (YuE2 #16256, plus earlier requests for AudioLDM, MusicGen).  
- **Enhanced mask/compositing logic:** Requests for Boolean‑style operations (AND/OR/XOR) and threshold controls in mask nodes (#15335).  
- **Reverse‑proxy/auth compatibility:** Need for configurable `origin_only_middleware` to work with external auth proxies (#16203).  

These trends indicate a push toward **more precise, modular, and production‑ready** workflows, alongside **expanded multimedia support** (image, video, audio).

---

### 6. Developer Pain Points  
- **Workflow integrity:** Silent corruption of node values on load (#13017) undermines trust in saved projects and forces manual validation.  
- **GPU stability / memory management:** Frequent BSODs and device‑copy errors on mid‑range GPUs after the v0.35.0 + comfy‑aimdo update (#16246, #16223, #16225) point to regressions in dynamic VRAM handling that affect both single‑instance and multi‑instance scenarios.  
- **Custom‑node ecosystem friction:** Many issues persist even after disabling custom nodes, suggesting core‑level bugs (e.g., LoRA loading warnings, SeedVR2 batch failures, V3 RETURN_TYPE inheritance). Developers report needing to bisect between core and custom nodes to isolate root causes.  
- **Asset system complexity:** Ongoing refactor of the asset layer (multiple stacked PRs) creates uncertainty; contributors note difficulty testing changes due to intertwined DB‑locking and middleware concerns.  
- **Enterprise deployment hurdles:** Middleware that blocks cross‑site requests (#16203) and lack of native Windows notifications hinder adoption in secured, production environments.  
- **Documentation & error messaging:** Vague warnings (e.g., “lora key not loaded”) and missing verbose logs complicate debugging, especially for users relying on LoRA‑based fine‑tuning.  

Addressing these pain points—particularly the workflow‑loading regression, GPU‑memory stability, and clearer error reporting—would significantly improve developer confidence and broaden ComfyUI’s applicability in both research and production settings.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

## Ollama Community Digest — 2026-09-12

### Today’s Highlights
No new Ollama releases landed in the last 24 hours, but community attention is concentrated on tool-calling correctness and cloud reliability. Multiple reports describe tool calls being silently dropped or returned as empty content across Qwen, Gemma, Gemma3n, and Anthropic-compatible endpoints, while Ollama Cloud users report model wedging, endless reasoning, and version-specific regressions. PR activity is focused on cloud proxy timeouts, manifest-list support, MLX create imports, and tool JSON parsing/rendering.

### Releases
No new releases were published in the last 24 hours.

### Hot Issues

1. **[#17778](https://github.com/ollama/ollama/issues/17778) — [bug] qwen 3.8: “no user query found in messages” during chat streaming**  
   High-engagement issue with 28 comments and 25 👍. Affects Python API/chat streaming and appears tied to tool-calling loops, making it one of the most visible Qwen 3.8 regressions.

2. **[#18193](https://github.com/ollama/ollama/issues/18193) — [bug, cloud] glm-5.3 endless reasoning and task aborts**  
   Reported in OpenCode and ZCode while official Z.AI works normally. 7 comments and 4 👍 indicate cloud model behavior differences are a real agentic-workflow blocker.

3. **[#18381](https://github.com/ollama/ollama/issues/18381) — Cloud models wedge after ~45 min on 0.34.0**  
   `deepseek-v4-pro:cloud` responds normally, then latency climbs and requests hang. 0.33.1 works, pointing to a release-specific cloud proxy regression.

4. **[#18373](https://github.com/ollama/ollama/issues/18373) — [bug] Model loading performance regression**  
   Users report significant slowdowns after upgrading from 0.23.4, including GPT-OSS:120b. This affects core local usability across many models.

5. **[#18392](https://github.com/ollama/ollama/issues/18392) — Sustained `/api/embed` load exhausts loopback ports on Windows**  
   llama-server’s HTTP client has keep-alive disabled, causing HTTP 400 health-check failures under bulk embedding. Important for production embedding workloads.

6. **[#17274](https://github.com/ollama/ollama/issues/17274) — Tool-call output silently discarded when parse fails**  
   8 comments. When a tool call fails to parse, Ollama returns empty content, no `tool_calls`, and 40 completion tokens, making failures hard to debug.

7. **[#18390](https://github.com/ollama/ollama/issues/18390) — gemma4 tool-call keys with spaces are dropped**  
   Object keys containing spaces are left unquoted, causing the entire call to be discarded as an empty response on both `/api/chat` and `/v1/chat/completions`.

8. **[#18357](https://github.com/ollama/ollama/issues/18357) — Gemma3n tool model returns empty `tool_calls` via `/v1`**  
   The model emits native `<tool_call>` output, but Ollama’s OpenAI-compatible endpoint returns neither `tool_calls` nor content despite `tools` capability.

9. **[#18346](https://github.com/ollama/ollama/issues/18346) — Anthropic `/v1/messages` compat breaks on complex tool schemas**  
   Simple schemas work, but complex schemas cause the model to emit tool calls as literal text instead of a `tool_use` block. This impacts Claude Code-style integrations.

10. **[#18252](https://github.com/ollama/ollama/issues/18252) — qwen2.5-coder low-bit quants functionally broken**  
    Official `q2_K`, `q3_K_S`, `q3_K_M`, and `q3_K_L` artifacts score 0/15 on code tasks while sibling quants pass. Raises serious concerns about low-bit library artifact quality.

### Key PR Progress

1. **[#18382](https://github.com/ollama/ollama/pull/18382) — server: bound cloud proxy connect and TTFB timeouts**  
   Directly targets cloud model wedging by replacing `http.DefaultClient` with bounded connect and time-to-first-byte timeouts.

2. **[#16590](https://github.com/ollama/ollama/pull/16590) — llama-server: prepare to remove compatibility patch with manifest-list support**  
   Adds manifest-list storage so runner-specific manifests can coexist under one tag, with show/list/copy/remove/pull/push understanding runner and digest selection.

3. **[#14969](https://github.com/ollama/ollama/pull/14969) — create: add server-side MLX imports and drop GGUF conversion**  
   Enables safetensors imports through the MLX create pipeline locally and remotely, including staging, cancellation, transfer limits, and shared manifest/blob writing.

4. **[#18391](https://github.com/ollama/ollama/pull/18391) — template: render tool function and parameters as JSON**  
   Fixes Go chat templates printing `templateTools` incorrectly, which can break tool prompt construction for models relying on JSON-rendered tool definitions.

5. **[#18388](https://github.com/ollama/ollama/pull/18388) — tools: parse `args` fields in JSON tool calls**  
   Extends the generic tool parser to models that emit `args` instead of `arguments` or `parameters`, reducing dropped tool calls.

6. **[#18376](https://github.com/ollama/ollama/pull/18376) — llm: keep gemma3n projector off the CPU**  
   Guards against corrupted image embeddings on the CPU backend for Gemma3n’s MobileNetV5 projector, addressing silent multimodal misbehavior.

7. **[#18383](https://github.com/ollama/ollama/pull/18383) — app: gate Codex Settings recommendations on integration use**  
   Only fetches Codex recommendations after the integration has been used and Cloud is confirmed on, matching Claude’s eligibility check.

8. **[#18372](https://github.com/ollama/ollama/pull/18372) — app: refresh Apps layout and command copy feedback**  
   Improves macOS integration onboarding, recommended Claude Code/ChatGPT connections, and launch-command copy behavior.

9. **[#18386](https://github.com/ollama/ollama/pull/18386) — fix: uninstaller does not remove Ollama entry from user PATH**  
   Fixes Windows uninstall cleanup by mirroring install-time PATH logic in the uninstaller.

10. **[#18389](https://github.com/ollama/ollama/pull/18389) — scripts: store the ollama system user under `/var/lib`**  
    Moves mutable model state out of `/usr`, improving compatibility with immutable-root distributions such as Fedora Silverblue.

### Feature Request Trends
- **Model availability and cloud/local parity:** Users want downloadable local files for cloud-only models such as [DeepSeek-V4.1-Flash](https://github.com/ollama/ollama/issues/18360), [deepseek-v4.1-flash](https://github.com/ollama/ollama/issues/18379), [Hy4](https://github.com/ollama/ollama/issues/18287), and [glm-5.1](https://github.com/ollama/ollama/issues/15412).
- **Richer model metadata:** [Per-model `reasoning_effort`, max output tokens, and context window in `/api/show` and `/v1/models`](https://github.com/ollama/ollama/issues/18385).
- **Platform expansion:** [ppc64le support](https://github.com/ollama/ollama/issues/796), immutable distro compatibility, systemd unit persistence, and Windows uninstaller PATH cleanup.
- **Install/download reliability:** [curl retry options in `install.sh`](https://github.com/ollama/ollama/issues/12478) to handle unreliable connections.
- **Tool-calling and API compatibility:** Better parser coverage for JSON tool calls, Anthropic `/v1/messages` compatibility, and OpenAI-compatible `finish_reason`/token usage behavior.
- **Performance and quantization quality:** Faster model loading, fewer loading regressions, and trustworthy low-bit official artifacts.

### Developer Pain Points
- **Silent tool-call failures remain the top frustration.** Across Qwen, Gemma, Gemma3n, and Anthropic-compatible routes, tool calls are dropped, returned as empty content, or emitted as literal text with little diagnostic signal.
- **Cloud reliability is unstable for agentic workloads.** Users report endless reasoning, 502s without errors, and cloud models wedging after ~45 minutes, often with a known-good previous version.
- **Performance regressions erode trust in upgrades.** Model loading slowdowns and embedding port exhaustion are affecting local and production deployments.
- **Low-bit quantization quality is inconsistent.** Official artifacts for qwen2.5-coder and IQ3_S Qwen3.8 variants either score near zero on code tasks or return empty content.
- **API compatibility gaps break integrations.** Missing metadata, null `finish_reason`, zero token usage, and incomplete context-window reporting force developers to work around Ollama-specific behavior.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

# llama.cpp Community Digest: 2026-09-12

## Today's Highlights
Today's activity focused heavily on backend optimizations for next-generation hardware, including Flash Attention tuning for AMD RDNA4 (gfx1201) and a overhaul of the Metal fusion table. Significant architectural improvements were also made to support complex MoE models like DeepSeek2 and GLM4MoE, alongside critical fixes for speculative decoding after image processing in the server.

## Releases
*   **b10917**: Fixed a build regression where precompiled headers (PCH) were skipped for `llama-server` when using MSVC.
*   **b10901**: Updated for Apple Silicon; allows Vulkan to use CPU writes for async tensor copies when the context is idle.

## Hot Issues own*   **#16393 Feature Request: Tool to list and delete cached models** (27 comments): A highly requested feature for a dedicated management tool to handle local model caches, as users find manual management difficult as storage grows.
*   **#20697 Feature Request: Disk-based context offloading (`--cache-disk`)** (19 comments): A major demand for persisting or offloading KV caches to disk to enable larger context windows than VRAM typically allows.
*   **#23704 Feature Request: Server - Multiple presets for the same model (loaded once)** (17 comments): Users want to load a model once but serve it with different configurations/presets simultaneously without restarting the server.
*   **#24616 Feature Request: Add dp4a emulation via dp2a on CUDA** (15 comments): A technical request to support 4-bit quantization emulation on NVIDIA hardware to improve performance-to-quality trade-offs.
*   **#22531 Feature Request: Allow the web UI to be used with other backends** (11 comments): Developers are pushing for the `llama.cpp` web interface to be backend-agnostic, moving beyond just the default implementation.
*   **#21723 Refactor: Split up `ggml-vulkan.cpp`** (7 comments): A proposal to break down the 17,500-line Vulkan backend file into modular components to improve maintainability.
*   **#27987 Feature Request: `--n-cpu-mode` FFN selection** (7 comments): Request for more granular control over which Feed-Forward layers are kept on CPU vs. GPU. 
*   **#24132 Eval bug: gemma-4-E4B-it-Q4_0.gguf assertion failure** (13 comments): A critical bug on the CUDA backend (V100) when evaluating the new Gemma-4 architecture.
*   **#23769 Crash with Vulkan on Intel B70 with MoE models** (11 comments): A stability issue affecting Intel Arc Pro users running high-parameter Qwen3.6 MoE models.
*   **#28633 CUDA: Silent CPU fallback for 4-bit KV** (0 comments/High priority impact): Users are reporting a massive 30x slowdown because 4-bit KV cache silently falls back to CPU processing without a warning.

## Key PR Progress
*   **#28053: Add server system prompt**: Adds `-sysf` to `llama-server`, allowing users to load system prompts from files, aligning server functionality with `llama-cli`.
*   **#27841: hip: add missing AMD GCN MMQ config**: Fixes performance on older GCN architectures by properly handling wave64 threads, preventing inefficient fallback to RDNA2 configs.
*   **#28736: implement common_schema internal representation for JSON schemas**: Refactors grammar logic to clean up "hackish" workarounds and improve JSON schema handling.
*   **#26103: skip unsupported ARM variants under GGML_CPU_ALL_VARIANTS**: Prevents entire builds from failing if a specific compiler doesn't support every single ARM extension.
*   **#28784: CUDA: fix IQ1_S/IQ2_S/IQ3_S garbage output on Blackwell (sm120)**: A vital fix for miscompiled byte reads on the latest NVIDIA Blackwell architecture.
*   **#28742: improve parsing of complex types in qwen3-coder**: Ensures complex argument types in the Qwen3 coder models are correctly interpreted.
*   **#28785: skip threadpool for graphs with no CPU work**: Optimization that avoids waking up worker threads if the graph only contains GPU-loaded views. 
*   **#28782: CUDA: use per-thread stream for buffer-init memset**: Fixes race conditions where legacy-stream memory zeroing collided with parallel HIP captures.
*   **#27000: add Maple 20B-A1B ternary MoE architecture**: Adds support for DeepGrove's ternary MoE model, featuring interleaved global/sliding attention.
*   **#28780: vulkan: use 32-row coopmat2 flash attention tiles on Intel**: Constrains attention tile sizes to prevent register spilling on Intel-based GPUs.

## Feature Request Trends
1.  **Memory Management**: High demand for better cache management (deletion tools and disk-based offloading) to bypass VRAM limits. own2.  **Architecture Support**: Rapid requests for support for newer MoE architectures (DeepSeek2, Maple) and specific quantization-emulations (dp4a, ternary).
3.  **Server Maturity**: Users want the `llama-server` to be more flexible, specifically regarding multi-preset support and backend-agnostic UI integration.

## Developer Pain Points
*   **Silent Fallbacks**: A recurring frustration is when the system silently switches to CPU (as seen in 4-bit KV issues), causing massive performance drops without notification.
*   **Backend Complexity**: The sheer size of the Vulkan backend (`ggml-vulkan.cpp`) is becoming a bottleneck for contributors, leading to calls for refactoring.
*   **Driver Instability**: Frequent reports of crashes or garbage output on newer Intel Arc (Vulkan) and AMD RDNA4 hardware suggests the software-driver interface is still catching up to new silicon.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*