# AI CLI Tools Community Digest 2026-08-03

> Generated: 2026-08-02 22:17 UTC | Tools covered: 12

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

## Today's Highlights — Key Updates (2026-08-03)

1. **[Gemini CLI](https://github.com/google-gemini/gemini-cli) — New nightly build `v0.55.0-nightly.20260802.gf47d6c6f7`**
Pushed with no stable release; includes subagent trajectory infrastructure and various bug fixes. [Compare](https://github.com/google-gemini/gemini-cli/compare/v0.55.0-nightly.20260801.gf47d6c6f7...v0.55.0-nightly.20260802.gf47d6c6f7)

2. **[Qwen Code](https://github.com/QwenLM/qwen-code) — Nightly `v0.21.3-nightly.20260802`**
Completed the TUI keyboard shortcut reference (#8327) and unblocked history pagination on OpenAI-compatible endpoints.

3. **[llama.cpp](https://github.com/ggerganov/llama.cpp) — Release b10235**
Adds `SILU_BACK` operation for Metal GPUs, improving Metal backend operator coverage.

4. **[llama.cpp](https://github.com/ggerganov/llama.cpp) — Release b10232**
Adds DeepSeek V4 hyper-connection kernels (DSV4_HC_COMB/PRE/POST) with SIMDgroup-register-optimized Metal dispatch.

5. **[Gemini CLI PR #28624](https://github.com/google-gemini/gemini-cli/pull/28624)** — Fix boolean thought parts leaking as `[Thought: true]` text in model output.

6. **[Qwen Code PR #8399](https://github.com/QwenLM/qwen-code/pull/8399)** — Teaches `isAbortError` to recognize OpenAI SDK's `APIUserAbortError`, fixing silent transcript data loss on user cancellation for `auth_type=openai` users.

7. **[Qwen Code PR #8368](https://github.com/QwenLM/qwen-code/pull/8368)** — Adds first-party Kimi (Coding Plan, API Key China/International) and Xiaomi MiMo (pay-as-you-go, China/Singapore) provider presets.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-08-03 | Source: anthropics/skills*

---

## 1. Top Skills Ranking

### 1. `run_eval.py` — Evaluation Infrastructure Overhaul
**PR [#1298](https://github.com/anthropics/skills/pull/1298)** — OPEN
Author: MartinCajiao | Updated: 2026-06-23
A comprehensive fix addressing the most systemic issue in the skill-creator ecosystem: `run_eval.py` reports `recall=0%` for every skill description, rendering the entire description-optimization loop (`run_loop.py`, `improve_description.py`) ineffective. The PR tackles install-path artifact registration, Windows stream reading, trigger detection, and parallel worker correctness. This is the most-discussed PR in the repository.

### 2. `document-typography` — Typographic Quality Control
**PR [#514](https://github.com/anthropics/skills/pull/514)** — OPEN
Author: PGTBoos | Updated: 2026-03-13
A new skill that prevents common typographic defects in AI-generated documents: orphan word wrap (1–6 words spilling onto the next line), widow paragraphs (section headers stranded at page bottom), and numbering misalignment. The community recognizes this as a universally applicable quality concern for every document Claude produces.

### 3. `pdf` — Case-Sensitivity Fix in SKILL.md
**PR [#538](https://github.com/anthropics/skills/pull/538)** — OPEN
Author: Lubrsy706 | Updated: 2026-04-29
Fixes 8 case-sensitivity mismatches in `skills/pdf/SKILL.md` (`REFERENCE.md`→`reference.md`, `FORMS.md`→`forms.md`). The actual files are lowercase but SKILL.md referenced them in uppercase, breaking on case-sensitive filesystems. This PR has attracted sustained attention due to its impact on PDF skill reliability.

### 4. `odt` — OpenDocument Format Creation & Conversion
**PR [#486](https://github.com/anthropics/skills/pull/486)** — OPEN
Author: GitHubNewbie0 | Updated: 2026-04-14
Adds a new skill for creating, filling, reading, and converting OpenDocument Format files (`.odt`, `.ods`). Includes trigger detection for ODT/ODS/ODF/OpenDocument/LibreOffice keywords. Represents growing community demand for office-suite format support beyond DOCX.

### 5. `frontend-design` — Clarity & Actionability Improvement
**PR [#210](https://github.com/anthropics/skills/pull/210)** — OPEN
Author: justinwetch | Updated: 2026-03-07
Revises the existing frontend-design skill to improve instruction clarity and actionability. The goal is ensuring every directive is something Claude can follow within a single conversation, steering behavior without ambiguity. A model example of community-driven skill refinement.

### 6. `skill-quality-analyzer` & `skill-security-analyzer` — Meta-Skills for Marketplace
**PR [#83](https://github.com/anthropics/skills/pull/83)** — OPEN
Author: eovidiu | Updated: 2026-01-07
Adds two meta-skills to the `example-skills` collection: a quality analyzer (evaluating structure, documentation, examples, resources across five dimensions) and a security analyzer. These represent the community's desire for self-governing skill ecosystems.

### 7. `self-audit` — Mechanical Verification + Reasoning Quality Gate
**PR [#1367](https://github.com/anthropics/skills/pull/1367)** — OPEN
Author: YuhaoLin2005 | Updated: 2026-07-02
A v1.3.0 skill that audits AI output before delivery — mechanical file verification first, then four-dimension reasoning audit in damage-severity priority order. Universal across projects and tech stacks. One of the newest and most architecturally ambitious proposals.

### 8. `testing-patterns` — Comprehensive Testing Stack Skill
**PR [#723](https://github.com/anthropics/skills/pull/723)** — OPEN
Author: 4444J99 | Updated: 2026-04-21
Adds a skill covering the full testing stack: testing philosophy (Testing Trophy model), unit testing (AAA pattern, edge cases), and React component testing (Testing Library). Reflects strong community demand for structured testing guidance.

---

## 2. Community Demand Trends

Based on the top Issues by comment volume, the community's most-anticipated Skill directions are:

| Trend | Evidence | Key Issue |
|---|---|---|
| **Security & Trust Boundaries** | 43 comments — the single most-engaged issue | [#492](https://github.com/anthropics/skills/issues/492): Community skills impersonating official `anthropic/` namespace |
| **Org-Wide Skill Sharing** | 16 comments, 8 👍 | [#228](https://github.com/anthropics/skills/issues/228): Direct sharing links and shared libraries within organizations |
| **Evaluation & Reliability** | 12+ comments across multiple issues | [#556](https://github.com/anthropics/skills/issues/556), [#1169](https://github.com/anthropics/skills/issues/1169): `run_eval.py` trigger detection broken |
| **Agent Governance & Safety** | 6 comments | [#412](https://github.com/anthropics/skills/issues/412): Policy enforcement, threat detection, trust scoring |
| **Compact

---

# Claude Code Community Digest — 2026-08-03

## 1. Today's Highlights

The Claude Code community is grappling with a **recurring transcript data-loss regression** where assistant text blocks are silently dropped from session JSONL files when interleaved thinking follows prose output — affecting both the CLI and desktop app across Windows, macOS, and Linux. A **critical Windows stability issue** (#32870) reports that `claude.exe` triggers a BSOD via `Wof.sys` during directory listing, representing a severe system-level bug. Additionally, a **silent hook failure mode** (#81458) allows guardrail invocations to be skipped without any user-visible signal, raising security and reliability concerns.

---

## 2. Releases

**No new releases in the last 24 hours.** The current stable version referenced across issues is **v2.1.220**. Several reported bugs are confirmed regressions introduced between v2.1.197 and v2.1.220.

---

## 3. Hot Issues

**1. [#32870](https://github.com/anthropics/claude-code/issues/32870) — `claude.exe` triggers Windows BSOD via `Wof.sys`**
A critical stability bug where directory listing via `NtQueryDirectoryFileEx` causes a Windows kernel crash through the Windows Overlay Filter driver. 37 comments, actively reproduced. Community reaction: alarm over system-level impact; users urged to report to Microsoft in parallel.

**2. [#65620](https://github.com/anthropics/claude-code/issues/65620) — Pre-tool-call assistant text silently dropped from transcript**
Assistant text blocks are lost from `~/.claude/projects/…/<session>.jsonl` whenever the model emits a thinking block after prose in the same turn. Onset ~v2.1.162, persists through v2.1.165. 26 comments, 👍15. Community reaction: strong concern over data loss in session records; affects downstream tooling that relies on transcript fidelity.

**3. [#74260](https://github.com/anthropics/claude-code/issues/74260) — Assistant text blocks silently dropped (adaptive thinking, v2.1.201)**
A parallel report of the same transcript-dropping regression, now confirmed on `claude-fable-5` with adaptive/interleaved thinking. 22 comments, 👍13. Community reaction: confirms this is a systemic regression, not model-specific; multiple users report identical behavior.

**4. [#64630](https://github.com/anthropics/claude-code/issues/64630) — macOS desktop app does not use default browser for login**
Authentication flow bypasses the system default browser on macOS. 14 comments, 👍18 (highest engagement). Community reaction: widespread frustration; users expect SSO/login to respect OS browser preferences.

**5. [#42002](https://github.com/anthropics/claude-code/issues/42002) — Terminal scrollback broken in long CLI sessions**
Alternate screen buffer prevents scrollback through conversation history in long-running CLI sessions. 2 comments, 👍21. Community reaction: high upvote count signals broad impact; a long-standing usability gap.

**6. [#81458](https://github.com/anthropics/claude-code/issues/81458) — Hook launch failures (exit 127) are silent and non-blocking**
When a hook command fails to launch, Claude Code records `hook_non_blocking_error` and proceeds without any visible warning — 6,865 guardrail invocations were silently skipped in one session. 3 comments. Community reaction: concern over security implications of silent guardrail bypass.

**7. [#81318](https://github.com/anthropics/claude-code/issues/81318) — `model:/effort:` frontmatter override broken for commands and skills**
A regression in v2.1.220 where effort-level frontmatter overrides in `commands/*.md` and `skills/SKILL.md` are silently ignored. 2 comments, 👍2. Community reaction: affects agent behavior customization; confirmed working in v2.1.197.

**8. [#80868](https://github.com/anthropics/claude-code/issues/80868) — Auto mode + ask rules failed to gate destructive Prisma migration**
In `auto` mode with ask rules configured, the model passed a real `DATABASE_URL` to `prisma migrate diff --shadow-database-url`, wiping a production database. 1 comment. Community reaction: serious safety concern about auto-mode guardrail effectiveness.

**9. [#83390](https://github.com/anthropics/claude-code/issues/83390) — Permission classifier blocks previously-allowed commands non-deterministically**
The auto-mode permission classifier began blocking routine Bash commands it had previously approved, citing "earlier conversation content." 1 comment. Community reaction: frustration with unpredictable permission behavior in long sessions.

**10. [#83411](https://github.com/anthropics/claude-code/issues/83411) — Desktop app session worktrees don't initialize git submodules**
Session worktrees created by the desktop app are born without git submodules initialized, breaking `@import`s in `CLAUDE.md` and session hooks. CLI `--worktree` path works correctly. 1 comment. Community reaction: highlights a divergence between desktop and CLI behavior that silently corrupts project setup.

---

## 4. Key PR Progress

**1. [#83374](https://github.com/anthropics/claude-code/pulls/83374) — docs(plugin-dev): add MessageDisplay hook guidance**
Adds `MessageDisplay` event documentation to the bundled Hook Development skill, including its streaming field and trigger description. This fills a gap in the plugin developer docs for a supported hook event.

**2. [#26056](https://github.com/anthropics/claude-code/pulls/26056) — Fix code-review plugin posting to GitHub without `--comment` flag**
Strengthens guardrails so the model reliably stops at terminal output when `--comment` is not provided. Adds a top-level behavioral rule, gates steps 8–9 with explicit conditionals, and adds a NEVER-post note. Addresses issue #16606.

**3. [#48343](https://github.com/anthropics/claude-code/pulls/48343) — fix(plugin-dev): make skill-reviewer frontmatter valid YAML**
Rewrites the `skill-reviewer` frontmatter `description` as a YAML block scalar so the file parses cleanly. Part of issue #40370. A focused syntax fix with no behavioral changes.

*Note: Only 3 PRs are currently open and updated in the last 24h.*

---

## 5. Feature Request Trends

- **Agent view customization & project scoping** — [#74139](https://github.com/anthropics/claude-code/issues/74139) requests configurable agent views with repo-based grouping (similar to `statusLine` configurability), reflecting demand for multi-project/worktree workflows.
- **Transcript view persistence** — [#76577](https://github.com/anthropics/claude-code/issues/76577) asks the desktop app to remember the transcript view mode (e.g., expanded/collapsed) across sessions.
- **Hook development tooling** — [#83374](https://github.com/anthropics/claude-code/pulls/83374) and [#81458](https://github.com/anthropics/claude-code/issues/81458) together highlight demand for better hook observability and developer experience.
- **Red team / security workflow support** — [#83410](https://github.com/anthropics/claude-code/issues/83410) requests support for security tool modification workflows in authorized red team contexts.
- **Background agent management** — [#75037](https://github.com/anthropics/claude-code/issues/75037) highlights demand for more robust background agent lifecycle management (crash recovery, completion records).

---

## 6. Developer Pain Points

1. **Silent transcript data loss** — The most urgent and recurring issue: assistant text blocks are dropped from JSONL transcripts when interleaved thinking follows prose, affecting both CLI and desktop. Multiple reports (#65620, #74260, #80662) confirm this is a systemic regression since ~v2.1.162.
2. **Desktop app instability** — Crashes near usage limits (#83403), crashes on specific URLs (#82875), stale diff viewers (#52740), and broken submodule initialization (#83411) erode confidence in the desktop experience.
3. **Silent failure modes** — Hook launch failures (#81458), subagent die-offs on spend limits (#83412), and permission classifier non-determinism (#83390) all share a pattern of failures that proceed without user visibility.
4. **Cross-platform inconsistency** — Desktop vs. CLI behavioral divergence (worktrees, submodules, stats, browser handling) creates confusion and silent breakage.
5. **Auto-mode safety gaps** — Destructive commands passing through guardrails (#80868) and non-deterministic permission blocking (#83390) highlight that auto-mode guardrails need more deterministic, transparent behavior.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Got it, let's tackle this OpenAI Codex community digest step by step. First, I need to follow the exact structure the user asked for, make sure it's concise, professional, for technical devs, with GitHub links.

First, Today's Highlights. Let's look at the top stuff: First, the Linux desktop app request is super high, 905 upvotes, 197 comments, that's a big one. Then there's the recent issues around session bloat, memory leaks, and cross-platform stability (Windows/macOS crashes, remote SSH problems), plus the PRs around security fixes for exec sandboxes and MCP limits. Wait, also no new releases in the last 24h, right? Oh right, latest releases last 24h are none. So highlights should mention that no new releases dropped, but the community is heavily focused on cross-platform desktop stability, session/memory management fixes, and long-awaited feature requests like Linux app support. Let me make that 2-3 sentences. Let's see: "No new Codex releases were published in the last 24 hours. Community activity remains concentrated on cross-platform desktop stability, session memory management, and high-demand feature requests, most notably the long-awaited Linux desktop app which has accumulated 905 upvotes and 197 comments since its opening in February. Ongoing bug reports also highlight critical pain points around Windows/macOS crashes, sandbox behavior inconsistencies, and remote SSH workflow reliability." That works.

Next, Releases. The data says latest releases last 24h are None, so just state that: "No new releases were published in the last 24 hours." Easy.

Then Hot Issues, pick 10 noteworthy ones, explain why they matter, community reaction, with links. Let's sort by the most impactful first, right? Let's list the top ones:

1. First, #11023: Linux desktop app request. 905 upvotes, 197 comments, that's the highest. Why it matters: It's the most upvoted open issue, driven by users unable to use the macOS app due to power consumption bugs, and a large portion of the developer userbase runs Linux desktops. Community reaction is overwhelmingly positive, with users sharing workarounds and asking for official Linux support timelines. Link: https://github.com/openai/codex/issues/11023

2. #28969: Add setting to disable 60s auto-resolve for CLI questions. 187 upvotes, 66 comments. Why it matters: The current 60-second auto-resolution of CLI prompts breaks complex workflows where users need more time to review tool actions before approval, especially for long-running tasks. Community reaction is strong, with users requesting granular control over prompt timeout behavior. Link: https://github.com/openai/codex/issues/28969

3. #3550 (wait, closed, but scoping VS Code chats to workspaces, 78 upvotes, 31 comments. Wait no, there's #33779 which is the open one for VS Code workspace scoping, 2 upvotes? Wait no, #3550 is closed, 78 upvotes, 31 comments. Oh right, the closed one was the original request, now there's an open duplicate #33779? Wait no, let's check: #3550 is [CLOSED] Scope Codex chats to VS Code projects/workspaces, 78 upvotes, 31 comments. #33779 is open, same request, 2 upvotes. Wait, but the original closed one has more traction. Wait no, let's pick the most impactful. Wait also #21128: Codex Desktop hides older project conversations outside global recent-50, 20 upvotes, 31 comments. Oh right, that's a bug that breaks project context retention. Let's see:

Wait let's curate 10, ordered by impact:

1. Issue #11023: Linux desktop app support (905 👍, 197 comments) – most upvoted open feature request, driven by macOS app power consumption issues and large Linux developer userbase, with users regularly tagging the issue for status updates. Link: https://github.com/openai/codex/issues/11023

2. Issue #28969: Add configurable timeout for CLI prompt auto-resolve (187 👍, 66 comments) – high-demand enhancement to fix broken complex workflows, as the default 60s auto-approval of CLI questions often interrupts long-running agent tasks. Link: https://github.com/openai/codex/issues/28969

3. Issue #21128: Desktop app hides older project conversations outside global recent-50 window (20 👍, 31 comments) – critical bug that erodes project working memory, with users reporting lost context for long-running development work that falls outside the 50-conversation global limit. Link: https://github.com/openai/codex/issues/21128

4. Issue #21700: Unavailable Computer Use Chrome extension, request for offline installer (24 👍, 27 comments) – blocks the core Computer Use feature for users who cannot access the Chrome Web Store, with users sharing workaround links and requesting official offline distribution. Link: https://github.com/openai/codex/issues/21700

5. Issue #10090: Elevated Windows sandbox breaks all agent commands (7 👍, 22 comments) – high-severity Windows-specific bug that renders the CLI sandbox non-functional for enterprise users requiring elevated permissions, with error logs showing CreateProcessAsUserW failures. Link: https://github.com/openai/codex/issues/10090

6. Issue #25178: Windows 10 Computer Use screenshot failure (12 👍, 21 comments) – blocks core Computer Use functionality on Windows 10 22H2, with error code 0x80004002 indicating unsupported interface calls during screenshot capture. Link: https://github.com/openai/codex/issues/25178

7. Issue #34061: Excessive disk usage from Codex subagents (1 👍, 17 comments) – emerging bug causing multi-agent workflows to consume large amounts of local disk space, with users reporting gigabytes of unused session data accumulating in ~/.codex/sessions. Link: https://github.com/openai/codex/issues/34061

8. Issue #35259: Desktop app wastes credits on redundant status polling during multi-agent work (2 👍, 10 comments) – high-impact billing bug where wait/polling tool calls account for ~20% of token usage in multi-agent workflows, disproportionately affecting Pro/Business subscribers. Link: https://github.com/openai/codex/issues/35259

9. Issue #34863: App-server memory bloat from inline PNG data in rollout JSONL files (1 👍, 5 comments) – critical stability bug causing app-server to reach 27GB RAM + 36GB swap for image-heavy sessions, leading to crashes on lower-RAM machines. Link: https://github.com/openai/codex/issues/34863

10. Issue #36189: Remote SSH thread hydration causes endless reconnect loop on Windows (0 👍, 3 comments) – blocks remote development workflows for Windows users, with thread hydration blocking the app-server queue and triggering repeated reconnection attempts. Link: https://github.com/openai/codex/issues/36189

Wait that's 10, good. Let's make sure each has a clear why it matters and community reaction.

Next, Key PR Progress, pick 10 important PRs, describe features/fixes, with links. Let's see the PRs we have:

First, the closed ones that are merged? Wait #36635 is closed, #36632 closed, #36544 closed, #36534 closed. Then open ones: #31781, #31817. Wait wait the total PRs are 6? Wait no, the data says Latest Pull Requests (updated in last 24h) Total 6 items, showing all 6? Let's list them all, plus wait no, the user said pick 10, but there's only 6? Wait wait no, let me check again: the PR list has 6 items:

1. #36635 [CLOSED] Expose onboarding hints in login completion notifications
2. #36632 [CLOSED] Preserve SQLite thread metadata during goal mutations
3. #31781 [OPEN] Bound executor-controlled HTTP response buffering
4. #31817 [OPEN] Update models.json
5. #36544 [CLOSED] Support portable Agent Plugins throughout installation
6. #36534 [CLOSED] Raise the MCP catalog item limit to 2,048

Wait that's only 6, but the user said pick 10? Wait wait no, maybe I misread? Let me check the data again: Oh, the PR section says Total: 6 items, so all 6 are there. Wait but the user said pick 10? Wait no, maybe the user said pick 10 important ones, but if there's only 6, we can list all 6, and note that only 6 PRs were updated in the last 24h? Wait no, let's check again. Oh wait, no, maybe the user's instruction says "Pick 10 important PRs" but if there are fewer, we list all available, right? Let's make sure to describe each properly:

Wait let's list each PR with what it does:

1. PR #36635 (Closed): Expose onboarding hints in login completion notifications – Adds support for parsing allowlisted onboarding entrypoint suffixes (e.g. life_sciences) in OAuth login flows, and returns parsed callback metadata to improve personalized onboarding experiences post-login. Link: https://github.com/openai/codex/pull/36635

2. PR #36632 (Closed): Preserve SQLite thread metadata during goal mutations – Fixes a bug where setting/clearing a thread goal would overwrite local SQLite thread metadata (including thread previews) during rollout reconciliation, leading to lost thread context for users. Link: https://github.com/openai/codex/pull/36632

3. PR #31781 (Open, code-reviewed): Bound executor-controlled HTTP response buffering – Security and stability fix for the remote exec-server, bounding HTTP response frame sizes to prevent untrusted exec peers from forcing the app-server to retain large amounts of response data and trigger out-of-memory crashes. Link: https://github.com/openai/codex/pull/31781

4. PR #31817 (Open): Update models.json – Automated PR to update the bundled models.json configuration file with the latest supported model definitions and parameters. Link: https://github.com/openai/codex/pull/31817

5. PR #36544 (Closed): Support portable Agent Plugins throughout installation – Fixes plugin installation failures for Agent Plugins with dotted names or non-standard version formats, aligning packaging and installation paths with the portable plugin schema's root plugin.json layout. Link: https://github.com/openai/codex/pull/36544

6. PR #36534 (Closed): Raise the MCP catalog item limit to 2,048 – Increases the maximum number of items returned across paginated MCP (Model Context Protocol) tool, resource, and resource-template discovery requests from 1,024 to 2,048, supporting larger MCP integration catalogs for power users. Link: https://github.com/openai/codex/pull/36534

Wait that's all 6, but the user said pick 10. Wait, did I miss PRs? Let me check the data again: Oh no, the Latest Pull Requests section says Total: 6 items, so only 6 were updated in the last 24h. So I should note that only 6 PRs were updated in the last 24 hours, and list all of them as the key PR progress, right? That makes sense.

Next, Feature Request Trends. Let's look at all the open enhancement issues: #11023 (Linux desktop app), #3550/#33779 (scope VS Code/desktop chats to workspaces), #21509 (improve SSH remote workspace support for desktop app), #29895 (fix weekly limit calculation for $100 plan). Wait let's distill the trends:

1. Cross-platform desktop parity: The most requested feature direction is official support for Linux desktop app, followed by parity for Windows/macOS desktop features (workspace-scoped chats, stable Computer Use, remote SSH support) that currently lag behind the web/CLI experience.

2. Granular workflow control: Users are repeatedly requesting configurable options for automated behaviors (CLI prompt timeouts, auto-resolution of questions, session retention limits) to replace hardcoded defaults that break complex, long-running workflows.

3. Subscription/usage transparency: Multiple requests call for clearer, more accurate usage tracking and limit enforcement for paid tiers, as users report discrepancies between reported usage and actual quota consumption.

Wait that's good, make it concise.

Then Developer Pain Points. Let's look at the recurring bugs:

1. Cross-platform stability: Windows and macOS desktop apps have a high volume of critical stability bugs, including crashes, memory leaks (app-server reaching 20+ GB RAM for image-heavy sessions), sidebar freezes, and post-update UI breakage (missing projects/recent tasks).

2. Session and context management: Bugs around session history retention (older project conversations being hidden), excessive disk usage from subagents and inline image data in rollout files, and paginated history corruption lead to lost work context for long-running projects.

3. Sandbox and permission inconsistencies: Windows-specific sandbox bugs break agent command execution for elevated users, while CLI sandbox config options (like auto_review) are silently overriding explicit user-set sandbox levels, creating security and reliability risks.

4. Billing and usage anomalies: Multiple users report unexpected quota consumption, with multi-agent workflows wasting up to 20% of tokens on redundant status polling, and weekly limit calculations being incorrect for paid tiers, leading to unplanned usage overages.

Wait that's good, make it concise, professional.

Now let's structure all this properly, make sure each section is correct, links are included, style is concise for technical devs.

Wait let's check for any mistakes: For the Hot Issues, #3550 is closed, but it's the original high-upvote request, right? Wait no, #33779 is the open duplicate, but #3550 has 78 upvotes, so it's worth mentioning? Wait no, I had #3550 in the initial list but replaced it with #21128 which is open, more recent. Wait let's adjust: Let's make sure the Hot Issues are all open except maybe the closed one if it's high impact? Wait #3550 is closed, so maybe note that it was closed but the request is still active via #33779? No, better to pick open issues with high engagement. Let's confirm the upvote counts again:

#11023: 905 👍, 197 comments – open, correct.

#28969: 187 👍, 66 comments – open, correct.

#3550: 78 👍, 31 comments – closed, so maybe replace with #21509 which is open, 2 upvotes, 6 comments? No, wait #21128 is 20 upvotes, 31 comments, open, that's better. Then #21700 is 24 upvotes, 27 comments, open, that's good. Then #10090 7 upvotes 22 comments, open. #25178 12 upvotes 21 comments, open. #34061 1 upvote 17 comments, open. #35259 2 upvotes 10 comments, open. #34863 1 upvote 5 comments, open. #36189 0 upvotes 3 comments, open. Wait that's 10, all open, good.

Wait also, for the PR section, since there are only 6 PRs updated in the last 24h, we should mention that upfront? Like "Only 6 PRs were updated in the last 24 hours; all are listed below as key progress:" Then list each.

Wait let's make sure the style is concise, professional, no fluff. Let's draft each section properly:

---

# OpenAI Codex Community Digest
**Date: 2026-08-03**

## 1. Today's Highlights
No new Codex releases were published in the last 24 hours. Community activity remains concentrated on cross-platform desktop stability, session memory management, and high-demand feature requests, most notably the long-awaited Linux desktop app which has accumulated 905 upvotes and 197 comments since its opening in February 2026. Ongoing bug reports also highlight critical pain points around Windows/macOS crashes, sandbox behavior inconsistencies, and remote SSH workflow reliability.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Hot Issues
Top 10 most-engaged issues updated in the last 24 hours, ordered by community traction:
1. **[#11023](https://github.com/openai/codex/issues/11023) [OPEN] Linux desktop app support** (905 👍, 197 comments)  
   The most upvoted open feature request in the Codex repository, driven by users unable to use the macOS app due to unresolved power consumption bugs, and a large base of developers running Linux desktops. Community members regularly tag the issue for status updates and share third-party workarounds.
2. **[#28969](https://github.com/openai/codex/issues/28969) [OPEN] Add setting to disable 60s auto-resolve for CLI questions** (187 👍, 66 comments)  
   High-demand enhancement to fix broken complex workflows: the default 60-second auto-approval of CLI prompts often interrupts long-running agent tasks before users can review tool actions. Users are requesting granular control over prompt timeout behavior.
3. **[#21128](https://github.com/openai/codex/issues/21128) [OPEN] Desktop app hides older project conversations outside global recent-50 window** (20 👍, 31 comments)  
   Critical bug that erodes project working memory: older project-specific conversations are permanently hidden from the UI once they fall outside the global 50-conversation recent limit, leading to lost context for long-running development work.
4. **[#21700](https://github.com/openai/codex/issues/21700) [OPEN] Computer Use Chrome extension unavailable in Chrome Web Store; request for offline installer** (24 👍, 27 comments)  
   Blocks the core Computer Use feature for users in regions where the Chrome Web Store is inaccessible, with users sharing unofficial extension links and requesting official offline distribution from OpenAI.
5. **[#10090](https://github.com/openai/codex/issues/10090) [OPEN] Elevated Windows sandbox breaks all agent commands** (7 👍, 22 comments)  
   High-severity Windows-specific bug that renders the CLI sandbox non-functional for enterprise users requiring elevated system permissions, with error logs showing `CreateProcessAsUserW failed: 5` for all agent shell commands.
6. **[#25178](https://github.com/openai/codex/issues/25178) [OPEN] Windows 10 Computer Use screenshot failure** (12 👍, 21 comments)  
   Blocks core Computer Use functionality on Windows 10 22H2, with error code `0x80004002` indicating unsupported interface calls during screenshot capture, even when other Computer Use features (window activation, text

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-03

---

## 1. Today's Highlights

The Gemini CLI team pushed a new nightly build (`v0.55.0-nightly.20260802.gf47d6c6f7`) with no stable release in the last 24 hours. The most active community discussions center on subagent reliability — specifically, subagents incorrectly reporting `GOAL` success after hitting turn limits (Issue #22323) and the generalist agent hanging indefinitely on simple operations (Issue #21409). A newly filed issue (#28621) highlights a concerning model behavior where the assistant skips its response and generates a synthetic continuation of the user's intent after a denied tool call. On the PR side, a fix prevents boolean thought parts from leaking as visible `[Thought: true]` text in model output, and another addresses a critical `write_file` data corruption risk on massive text blocks.

---

## 2. Releases

- **v0.55.0-nightly.20260802.gf47d6c6f7** — Nightly build only. No stable release was published in the last 24 hours.
  - Full changelog: https://github.com/google-gemini/gemini-cli/compare/v0.55.0-nightly.20260801.gf47d6c6f7...v0.55.0-nightly.20260802.gf47d6c6f7

---

## 3. Hot Issues

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** — Subagent recovery after MAX_TURNS reports GOAL success, hiding interruption. *(p1, 12 comments)* A `codebase_investigator` subagent falsely reports success after hitting the turn limit, masking the actual interruption. This undermines trust in subagent status reporting and affects multi-repository investigation workflows.

2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** — Generalist agent hangs forever on simple operations. *(p1, 8 comments, 8 👍)* The generalist agent hangs indefinitely on trivial tasks like folder creation, with users waiting up to an hour before cancelling. Workaround: instruct the model not to defer to sub-agents. High community engagement indicates widespread impact.

3. **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353)** — Robust component-level evaluations (EPIC). *(p1, 7 comments)* Follow-up to the behavioral evals EPIC (#15300); tracks scaling eval infrastructure across 6 supported Gemini models and 76 existing behavioral eval tests. Signals the team's commitment to evaluation rigor.

4. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** — Assess AST-aware file reads, search, and mapping. *(p2, 7 comments)* EPIC investigating whether AST-aware tooling can reduce token noise and turn count by reading precise method bounds in a single call. Could significantly improve agent efficiency.

5. **[#28621](https://github.com/google-gemini/gemini-cli/issues/28621)** — Model generates synthetic next user turn instead of answering after denied tool call. *(p2, 5 comments, NEW)* The model skips the assistant response entirely and fabricates a continuation of the user's intent. This is a serious prompt-injection-adjacent behavior that could lead to incorrect autonomous actions.

6. **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)** — Auto Memory retries low-signal sessions indefinitely. *(p2, 5 comments)* The background extraction agent re-processes low-signal sessions because they remain unmarked as processed when skipped. Causes wasted compute and potential infinite retry loops.

7. **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)** — Add deterministic redaction and reduce Auto Memory logging. *(p2, 4 comments)* Auto Memory sends transcript content to the extraction model before redaction occurs, and the service logs skill content unnecessarily. Privacy and data minimization concern.

8. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** — Shell command execution gets stuck with "Waiting input" after completion. *(p1, 4 comments, 3 👍)* After a shell command finishes, the CLI shows it as still active and awaiting input. Affects even trivial commands that don't require user input.

9. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** — Browser subagent fails in Wayland. *(p1, 4 comments, 1 👍)* The browser agent terminates with GOAL reason but fails under Wayland display server environments, limiting Linux desktop usability.

10. **[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)** — Enhance browser_agent resilience with automatic session takeover and lock recovery. *(p3, 4 comments)* When a browser profile is locked (e.g., orphaned process from a previous session), the agent fails fast instead of recovering. Requesting automatic takeover to improve reliability in persistent session mode.

---

## 4. Key PR Progress

1. **[#28624](https://github.com/google-gemini/gemini-cli/pull/28624)** — Fix: prevent boolean thought parts leaking as `[Thought: true]` text. *(core)* Internal thought parts with `thought: true` were being serialized into visible text output. Fixed in `toPart` in `converter.ts`.

2. **[#28526](https://github.com/google-gemini/gemini-cli/pull/28526)** — Fix: stop leaking `gemini.diff.accept` and `onDidChangeWorkspaceFolders` disposables in VS Code companion. *(core)* A stray parenthesis in `activate()` collapsed two subscriptions into a comma expression, causing resource leaks. Fixes #27790.

3. **[#28535](https://github.com/google-gemini/gemini-cli/pull/28535)** — Fix: use `resolveRipgrepPath` in perf test global setup. *(core)* Updates performance tests to use the current ripgrep resolver API, preventing failures from referencing a removed helper.

4. **[#28534](https://github.com/google-gemini/gemini-cli/pull/28534)** — Fix: retry staging-tmp dist-tag removal after npm publish. *(ci)* Nightly release failed because npm acknowledged the publish before the dist-tag was queryable. Adds a retry script for `npm dist-tag rm staging-tmp`.

5. **[#27070](https://github.com/google-gemini/gemini-cli/pull/27070)** — Optimize VirtualizedList and scrolling checkpoint. *(core, large)* Performance optimization for virtualized scrolling, including RenderStatic migration and batch history updates on terminal resize.

6. **[#27351](https://github.com/google-gemini/gemini-cli/pull/27351)** — Fix: serialize conflicting parallel mutator tools. *(core)* When the model proposes multiple edits to the same file in one turn, parallel execution via `Promise.all` caused conflicts. Now enforces sequential execution. Fixes #27285.

7. **[#27320](https://github.com/google-gemini/gemini-cli/pull/27320)** — Fix: mitigate data corruption during write_file on massive text blocks. *(core)* Addresses corruption when rewriting files with 6000+ character literal strings or inline base64 images via `write_file`. Fixes #27213.

8. **[#27317](https://github.com/google-gemini/gemini-cli/pull/27317)** — Fix: defensively check for directories in session/checkpoint scans. *(core)* Prevents EISDIR errors when the CLI encounters directories matching session or checkpoint filename patterns. Fixes #27135.

9. **[#27310](https://github.com/google-gemini/gemini-cli/pull/27310)** — Feat: subagent trajectory infrastructure (Stage 1). *(agent, large)* Foundational work to enable full visibility into subagent trajectories for chat saving, history export, and bug reports. Pivots internal source of truth for trajectory storage.

10. **[#27131](https://github.com/google-gemini/gemini-cli/pull/27131)** — Fix: route personal OAuth users to stable models for auto aliases. *(core)* Prevents 404/400 errors for `oauth-personal` users when using the `auto-gemini-3` model alias by implementing auth-aware model routing.

---

## 5. Feature Request Trends

The most-requested feature directions across the issue tracker are:

- **Subagent visibility and debugging** — Multiple issues (#22598, #21763, #27310) request better observability into subagent trajectories, including sharing via `/chat share` and including subagent context in bug reports. The community wants to understand what subagents are doing internally.
- **AST-aware tooling** — Issues #22745 and #22746 represent a strong demand for AST-precise file reads, search, and codebase mapping to reduce token waste and turn count. The community sees this as a key efficiency lever.
- **Browser agent resilience** — Issues #22232 and #21983 highlight demand for robust browser automation that handles locked profiles, orphaned processes, and Wayland environments gracefully rather than failing fast.
- **Auto Memory improvements** — A cluster of issues (#26522, #26525, #26523, #26516) signals demand for a more reliable, private, and efficient memory system with deterministic redaction, proper session marking, and inbox patch validation.
- **Evaluation infrastructure** — Issue #24353 and related work (#23313) show community interest in scaling behavioral evaluations across models and component-level test granularity.
- **Model routing and validation** — PRs #27131 and #27128, along with issue #24246, reflect demand for smarter model alias resolution, fallback behavior, and tool scope limiting to prevent 400 errors.

---

## 6. Developer Pain Points

- **Subagent reliability** — The most acute pain point. Subagents hang (#21409), report false success after hitting turn limits (#22323), ignore settings.json overrides (#22267), and lack visibility into their own behavior (#21763, #22598). The community is frustrated by opaque subagent failures that are hard to debug.
- **Shell command execution stalls** — Issue #25166 is a recurring frustration where completed shell commands remain stuck in "Awaiting user input" state, blocking the agent loop.
- **Auto Memory quality and privacy** — Multiple issues (#26522, #26525, #26523, #26516) indicate the memory system is unreliable (infinite retries on low-signal sessions), insecure (content sent before redaction), and produces invalid patches that are silently skipped.
- **Model behavior edge cases** — The model generating synthetic user turns after denied tool calls (#28621), creating temp scripts in random directories (#23571), and using destructive git commands when safer alternatives exist (#22672) are eroding developer trust in autonomous agent behavior.
- **Browser agent platform gaps** — Failures on Wayland (#21983) and inability to recover from locked browser profiles (#22232) limit browser automation usability on Linux desktop environments.
- **Performance and rendering** — Terminal resize flicker (#21924), history corruption after exiting external editors (#24935), and virtual list performance (#27070) are persistent UX pain points in the terminal UI layer.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-03

## 1. Today's Highlights

The Copilot CLI ecosystem saw no new releases in the last 24 hours, but 12 issues were updated, highlighting a cluster of regressions and usability bugs in the 1.0.7x line. The most critical is a **regression in the built-in `view` tool** (introduced in 1.0.72) that incorrectly reports "Path does not exist" for valid files, breaking a core non-interactive workflow. Additionally, two **autopilot mode bugs** surfaced — cancelled input being reprocessed as a valid turn and autopilot appearing enabled in the statusline while silently failing — signaling reliability concerns in the agent automation layer.

## 2. Releases

None in the last 24 hours.

## 3. Hot Issues

| # | Title | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [#4202](https://github.com/github/copilot-cli/issues/4202) | `view` tool reports "Path does not exist" for existing files in 1.0.73 | Core regression breaking non-interactive workflows; 1.0.71 works fine. Affects automated pipelines relying on the built-in view tool. | 3 comments; reporter providing controlled repro steps. |
| [#4336](https://github.com/github/copilot-cli/issues/4336) | Cancelled user input delivered to agent as valid turn (autopilot) | Data integrity issue — discarded input is reprocessed silently, potentially triggering unintended actions in autopilot mode. | 0 comments; recently opened, needs triage. |
| [#4335](https://github.com/github/copilot-cli/issues/4335) | `toolCall.title` hides shell command in ACP approval modals | Security/transparency concern: ACP clients (e.g., Zed) show a natural language summary instead of the actual command being executed, obscuring what the agent is doing from the user. | 0 comments; recently opened. |
| [#4334](https://github.com/github/copilot-cli/issues/4334) | Stashed prompt (`ctrl+S`) lost on session switch | Data loss UX bug — stashed input is permanently gone after switching sessions, with no recovery mechanism. | 0 comments; recently opened. |
| [#4332](https://github.com/github/copilot-cli/issues/4332) | No way to silence "Memory is disabled" notice | Annoyance for users who intentionally disable memory; the notice fires every session with no supported suppression mechanism. | 0 comments; recently opened. |
| [#4329](https://github.com/github/copilot-cli/issues/4329) | Autopilot not actually enabled on session resume | Statusline lies — autopilot appears active but approvals fail, undermining trust in the automation feature. | 0 comments; reported on 1.0.77. |
| [#4328](https://github.com/github/copilot-cli/issues/4328) | Ctrl+H deletes word instead of char under WSL2 | Input handling bug caused by `WT_SESSION` leaking from Windows Terminal into WSL2, making `ctrl+h` behave as `ctrl+w`. | 0 comments; recently opened. |
| [#4292](https://github.com/github/copilot-cli/issues/4292) | Colors completely off in tmux | Theming/accessibility issue — light theme renders incorrectly inside tmux, breaking readability. Works fine outside tmux. | 0 comments; includes visual evidence. |
| [#2286](https://github.com/github/copilot-cli/issues/2286) | Support git symlinks in plugin install on Windows | Long-standing Windows compatibility gap (open since March 2026); Git for Windows defaults `core.symlinks=false`, breaking plugin installs from repos with symlinks. | 2 comments; still unresolved after ~4 months. |
| [#4229](https://github.com/github/copilot-cli/issues/4229) | Trust module — security concern about install.sh | Security audit request referencing the install script's trust model; points to a specific line in `install.sh` for review. | 0 comments; low engagement. |

## 4. Key PR Progress

No pull requests were updated in the last 24 hours.

## 5. Feature Request Trends

- **Cross-platform input/terminal consistency** — Multiple issues (#4328, #4292, #2286) highlight the need for better WSL2, tmux, and Windows Terminal compatibility, particularly around keybinding interpretation and rendering.
- **ACP/editor integration transparency** — Issue #4335 reflects growing demand for clear, actionable tool call information in host editor approval flows, especially as ACP mode adoption increases.
- **Session management and UX polish** — Requests around stashed prompt persistence (#4334), memory notice suppression (#4332), and autopilot state accuracy (#4329, #4336) indicate users expect session state to be durable and truthful.
- **Plugin ecosystem on Windows** — Issue #2286 represents a recurring theme around making the plugin installation workflow robust across platforms, particularly for git-based marketplace repos.

## 6. Developer Pain Points

- **Regression in core tooling** — The `view` command regression (#4202) is the most impactful pain point, as it breaks a fundamental non-interactive operation that worked in 1.0.71 and earlier. The fact that it was introduced between 1.0.71 and 1.0.72 suggests a recent change to file path resolution or existence checking needs investigation.
- **Autopilot reliability** — Two separate autopilot bugs (#4329, #4336) in quick succession erode confidence in the agent automation layer. Users cannot trust the statusline indicator, and cancelled inputs are silently reprocessed — both are critical for production use.
- **Cross-platform input handling** — WSL2 keybinding misinterpretation (#4328) and tmux color rendering (#4292) reflect a broader pattern where terminal environment variables and configuration leaks cause unexpected behavior, particularly for developers working across Windows and Linux environments.
- **ACP security transparency** — The `toolCall.title` issue (#4335) highlights a gap between the ACP protocol's intent (showing actionable command details) and the current implementation (showing high-level summaries), which could lead to users approving shell commands without understanding what they do.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-03

**Source:** [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## 1. Today's Highlights

The community is actively pushing two major feature directions — persistent memory across sessions and remote session control — both of which have garnered significant engagement. A new PR addressing a crash on legacy console codecs (GBK) was opened, while a critical swarm reliability issue was filed highlighting partial-work loss on quota errors. No new releases were published in the last 24 hours.

---

## 2. Releases

None in the last 24 hours.

---

## 3. Hot Issues

**[#1283 — Memory System: Persistent context across sessions](https://github.com/MoonshotAI/kimi-cli/issues/1283)**
A comprehensive feature request for both automatic (AI-managed) and manual (user-defined) memory. With 14 comments, it reflects strong community interest in long-running project continuity. *Why it matters:* Eliminates the need to re-inject context in every session, a common pain point for multi-session workflows.

**[#1282 — Remote Control: Continue local sessions from any device](https://github.com/MoonshotAI/kimi-cli/issues/1282)**
Requests the ability to resume a local CLI session from a phone, tablet, or browser. 24 👍 and 11 comments make this the most popular open issue. *Why it matters:* Enables workflow continuity for developers who move between devices, a significant quality-of-life improvement.

**[#2579 — External wake channel for running interactive sessions](https://github.com/MoonshotAI/kimi-cli/issues/2579)**
Filed by `munich35`, this proposes an external trigger mechanism (e.g., `inotifywait`-based file watcher) to wake an idle interactive TUI session when new messages arrive. *Why it matters:* Enables agent-to-agent communication patterns where Kimi Code CLI acts as a long-running worker.

**[#2578 — Swarm 403/timeout mid-batch: partial work lost](https://github.com/MoonshotAI/kimi-cli/issues/2578)**
A critical reliability bug: when a parallel subagent batch hits HTTP 403 (quota exhausted) or a subagent timeout, workspace files are left in a broken intermediate state and retries waste tokens. *Why it matters:* Directly impacts production swarm workflows and token economics.

---

## 4. Key PR Progress

**[#2471 — feat(tools): Add Monitor tool for per-line stdout streaming](https://github.com/MoonshotAI/kimi-cli/pull/2471)** (CLOSED)
Introduces a streaming counterpart to the existing background-task tool, enabling real-time stdout output per line. *Impact:* Improves observability for long-running tool executions.

**[#2577 — fix(web,vis): Do not crash printing the startup banner on legacy console codecs](https://github.com/MoonshotAI/kimi-cli/pull/2577)** (OPEN)
Fixes a crash in `print_banner` (`src/kimi_cli/utils/server.py`) caused by the U+279C character on GBK-encoded consoles (Windows). *Impact:* Resolves startup failures for users on legacy Windows terminal configurations.

---

## 5. Feature Request Trends

The dominant themes across open issues are:

- **Session persistence & continuity** — Memory systems (#1283) and remote control (#1282) both address the need to maintain context and workflow state across sessions and devices.
- **Multi-agent / swarm reliability** — Issues around batch fault tolerance (#2578) and external wake channels (#2579) indicate growing usage of Kimi CLI in agent-orchestrated pipelines.
- **Developer experience & accessibility** — Legacy console support (#2577) and interactive TUI enhancements (#2579) show attention to diverse deployment environments.

---

## 6. Developer Pain Points

- **Swarm fault tolerance** — Partial workspace writes on quota errors (403) or timeouts lead to broken intermediate states and wasted token re-spends. This is the most urgent operational pain point.
- **Session context loss** — Without a memory system, developers must manually re-inject project context each session, reducing productivity in iterative workflows.
- **Cross-device workflow gaps** — The inability to continue a local session remotely forces developers to stay at their primary machine, limiting flexibility.
- **Legacy environment compatibility** — Console encoding crashes (GBK on Windows) block adoption in enterprise/legacy terminal environments.

---

*Digest generated from GitHub API data for MoonshotAI/kimi-cli as of 2026-08-03.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-03

**Source:** [anomalyco/opencode](https://github.com/anomalyco/opencode)

---

## 1. Today's Highlights

The community is focused on two major fronts: **memory and resource management** (the top issue, #20695, has 121 comments and 94 👍 as maintainers and users collaborate on heap snapshot collection) and **geoblocking workarounds** (PR #40180 and linked issues #40162/#39831 address GPT-5.6 Luna/Terra failures from restricted regions). The Desktop app continues to generate stability reports, with multiple first-launch hang bugs filed in the last 24h.

---

## 2. Releases

**No new releases in the last 24h.**

---

## 3. Hot Issues

| # | Title | Comments | 👍 | Why It Matters |
|---|-------|----------|-----|----------------|
| [#20695](https://github.com/anomalyco/opencode/issues/20695) | Memory Megathread | 121 | 94 | Central hub for memory/heap issues; maintainers explicitly requesting snapshot data rather than speculation. Highest engagement. |
| [#16017](https://github.com/anomalyco/opencode/issues/16017) | Add Go plan usage/balance API endpoint | 27 | 124 | High 👍 count signals strong demand for programmatic access to subscription data already visible in the dashboard. |
| [#6152](https://github.com/anomalyco/opencode/issues/6152) | Session context usage (like Claude's /context) | 20 | 125 | Most 👍'd issue; users want a TUI dialog showing context window breakdown — a UX gap compared to Claude. |
| [#14965](https://github.com/anomalyco/opencode/issues/14965) | Slow startup regression since v1.2.1 | 17 | 12 | Performance regression affecting terminal startup; environment-specific (Ghostty vs. Alacritty/Kitty). |
| [#30545](https://github.com/anomalyco/opencode/issues/30545) | Desktop file tree not visible | 12 | 0 | Desktop v1.15.13 Advanced settings for file tree have no effect — UX-blocking for desktop users. |
| [#28089](https://github.com/anomalyco/opencode/issues/28089) | Leaks .so files in /tmp, consuming hundreds of GB | 7 | 7 | Disk exhaustion bug on Linux; temporary ELF shared objects accumulate unboundedly. |
| [#33775](https://github.com/anomalyco/opencode/issues/33775) | API key re-prompted on every provider switch | 6 | 0 | Despite stored credentials in `auth.json`, `/connect` re-asks for keys — credential persistence bug. |
| [#38222](https://github.com/anomalyco/opencode/issues/38222) | Desktop 1.18.4 hangs on first-launch onboarding (Windows) | 6 | 0 | Windows-specific; CLI works but Desktop app is stuck — blocks new user onboarding. |
| [#30116](https://github.com/anomalyco/opencode/issues/30116) | Memory compaction awareness hooks for agents | 6 | 0 | Feature request to expose compaction events as hooks, enabling agent-level awareness of context compression. |
| [#33884](https://github.com/anomalyco/opencode/issues/33884) | TUI plugins silently fail to load in 1.17.10 (OpenTUI 0.4.2 regression) | 5 | 1 | Regression from OpenTUI 0.4.2 bump; npm-spec TUI plugins fail silently. Reverted on `dev` but root cause unfixed. |

---

## 4. Key PR Progress

| # | Title | Status | Summary |
|---|-------|--------|---------|
| [#40184](https://github.com/anomalyco/opencode/pull/40184) | Add Teach mode for pedagogical workflows | OPEN (WIP) | New `teach` mode for step-by-step learning workflows; related to #36521. Currently draft with test files. |
| [#40180](https://github.com/anomalyco/opencode/pull/40180) | Strip client IP/geo headers to prevent geoblock | CLOSED (merging) | Strips geolocation/IP headers before proxying to upstream; fixes #40162 and #39831 (GPT-5.6 Luna/Terra 403s from Hong Kong). |
| [#40165](https://github.com/anomalyco/opencode/pull/40165) | Route Bedrock packages natively | CLOSED | Maps `@ai-sdk/amazon-bedrock` and Mantle entries to native Bedrock Converse provider; removes credential-gating for Mantle routing. |
| [#40167](https://github.com/anomalyco/opencode/pull/40167) | Classify Azure payload-size 400s as context overflow | OPEN | Fixes `isContextOverflow()` to recognize Azure's payload-size and image-count 400 errors as context overflow, triggering media-strip compaction + retry. |
| [#39045](https://github.com/anomalyco/opencode/pull/39045) | Fix overlapping frames in update preflight animation | OPEN | Closes #38595; prevents SolidJS renderer from overlapping frames during TUI update preflight. |
| [#38403](https://github.com/anomalyco/opencode/pull/38403) | Standardize v2 tooltip delay | OPEN | Unifies TooltipV2 hover delay at 400ms; adds intent-delay mode for model-picker details (1s first tooltip, instant while navigating). |
| [#37927](https://github.com/anomalyco/opencode/pull/37927) | Navigate tabs by selection history | OPEN | Renames desktop nav to Previous/Next Tab; traverses tab selection history instead of visual order; skips closed tabs. |
| [#40172](https://github.com/anomalyco/opencode/pull/40172) | Fix schema encode output format values | CLOSED | Fixes #40169; `OutputFormatText`/`OutputFormatJsonSchema` were `Schema.Class` instances that failed to serialize/deserialize from storage. |
| [#34815](https://github.com/anomalyco/opencode/pull/34815) | Per-variant limit overrides | CLOSED | Closes #34544; allows model variants to carry a `limit` override (e.g., 200k-context preset alongside default). |
| [#39423](https://github.com/anomalyco/opencode/pull/39423) | Add Hebrew language support with RTL | OPEN | Comprehensive `he` language support across all packages with RTL handling. |

---

## 5. Feature Request Trends

The most-requested feature directions across open issues:

1. **Memory & Context Visibility** — #6152 (session context usage), #20695 (memory diagnostics), #30116 (compaction hooks). Users want observability into what's happening inside the context window and memory system.
2. **Go Plan Programmatic Access** — #16017 requests a public API for subscription usage/balance data, indicating power users want to build dashboards or automation on top of Go plan data.
3. **Desktop App Hardening** — Multiple issues (#30545, #38222, #40170, #40177) highlight Desktop stability and theming gaps: file tree, onboarding flow, splash screen, and CSS override support.
4. **Provider Expansion & Compatibility** — #39829 (DeepSeek Responses API), #40075 (Bedrock Mantle), #39831/#40162 (GPT-5.6 geoblocking), #37745 (OpenAI cache write tracking). Users want broader model/provider coverage with correct billing and routing.
5. **Session Control & Agent Management** — #38966 (subagent steering/cancellation), #40184 (Teach mode). Demand for more granular control over autonomous agent behavior.
6. **Internationalization** — #39423 (Hebrew) and #40164 (DeepSeek Flash version query) signal growing non-English user base.

---

## 6. Developer Pain Points

- **Resource Leaks & Disk Exhaustion** — #28089 (`.so` files in `/tmp`), #39876 (207 GiB of `libopentui.dylib` copies in `$TMPDIR`), #20695 (general memory issues). Resource management is a persistent, high-severity concern.
- **Desktop App Instability** — #38222 (hangs on first launch), #40170 (splash screen stuck), #30545 (file tree broken), #33775 (credential re-prompt). Desktop quality is the #1 friction point for new users.
- **Provider Connectivity & Geoblocking** — #40162 (GPT-5.6 geoblocked from HK), #39831 (Zen upstream 403), #40075 (Bedrock Mantle `${AWS_REGION}` not substituted), #33775 (API key re-prompting). Network-layer bugs are eroding trust in provider routing.
- **Startup Performance Regression** — #14965 reports a regression since v1.2.1 that is terminal-emulator-dependent, suggesting a TUI rendering or initialization path change.
- **Windows PATH Truncation** — #37125 (TUI shell receives only `C:\Windows\System32` in PATH) breaks developer tool resolution and is a recurring Windows-specific pain point.
- **Session & Tab Management** — #38849 (concurrent VS Code instances crash), #40181 (closed tabs reopened by other TUI processes), #32852 (Modified Files sidebar empty). Multi-instance and session-persistence bugs are frequent.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-03

Source: `github.com/badlogic/pi-mono`

---

## 1. Today's Highlights

No new releases were published in the last 24 hours. The most active development area is **compaction reliability** — two high-engagement open issues (#6879, #7020) and a new PR (#7498) address auto-compaction failing to trigger or causing sessions to stall after context exceeds 100% of the window. Terminal rendering edge cases on **WezTerm** (IME candidate flickering, hardware cursor jumps, inline image degradation) are also a concentrated pain point, with multiple reports and fixes landing this cycle. The **LLM Gateway** provider (#7480) and **Gemini 3 tool-call ID preservation** (#7494) represent the most significant new provider integrations.

---

## 2. Releases

None in the last 24 hours.

---

## 3. Hot Issues

**1. [#6879](https://github.com/earendil-works/pi/issues/6879)** — Auto-compaction never triggers until provider overflow (9 comments, 10 👍). Context grows past 100% on long agentic turns (e.g., 2+ hours on gpt-5.6-sol) and compaction only fires when the API rejects the request at 373k tokens. Community consensus: compaction should be checked after every agent step, not just at send time.

**2. [#7020](https://github.com/earendil-works/pi/issues/7020)** — Pi doesn't continue after compaction (7 comments). Long-running "coordinator" sessions hit compactionwarts where the session hangs or loses state. Closely related to #6879; both point to fragile compaction lifecycle handling.

**3. [#7062](https://github.com/earendil-works/pi/issues/7062)** — OpenAI-completions provider mishandles array content and missing `finish_reason` (6 comments). Databricks models (Qwen3, gpt-oss reasoning) return `choice.delta.content` as a typed array when tools are present, producing `[object Object]` in output, and some models omit `finish_reason` entirely.

**4. [#7402](https://github.com/earendil-works/pi/issues/7402)** — Bengali text paste causes line duplication on Space keypress (6 comments). Width overcounting in the differential renderer desyncs the terminal cursor, visually duplicating the pasted line on each keypress — a non-trivial rendering bug for non-Latin scripts.

**5. [#7486](https://github.com/earendil-works/pi/issues/7486)** — Hardware cursor jumps during "Working…" states in WezTerm (3 comments). The documented workaround for IME candidate positioning (`PI_HARDWARE_CURSOR=1`) introduces a visible cursor jump while the spinner is active.

**6. [#7315](https://github.com/earendil-works/pi/issues/7315)** — Fireworks requests fail instantly with "Request timed out." (4 comments). Transient failures before the provider even processes the request cause Pi's default 3-retry loop to hammer the API with 2s/4s/8s gaps and empty turns.

**7. [#7323](https://github.com/earendil-works/pi/issues/7323)** — `pi update --models` fails entirely on a transient catalog stall (3 comments). A single 15s HTTPS stall to `pi.dev` aborts the entire refresh; no retry or graceful degradation exists.

**8. [#7413](https://github.com/earendil-works/pi/issues/7413)** — Compaction fails on GitHub Copilot GHE.com with "unknown stamp" error (3 comments). `/compact` fails on enterprise accounts while normal chat works, suggesting the compaction summarization path uses a different auth token flow.

**9. [#4679](https://github.com/earendil-works/pi/issues/4679)** — Request for scroll lock / reading mode during active agent output (3 comments, 1 👍). A long-standing request (opened May 2026) to prevent the terminal from auto-scrolling to the bottom while reading earlier messages during streaming output.

**10. [#7497](https://github.com/earendil-works/pi/issues/7497)** — Session discovery silently ignores symlinked directories (2 comments). `listSessions` in `session-manager.ts` uses `readdir` without resolving symlinks, so sessions in symlinked dirs under `~/.pi/agent/sessions/` are invisible to tools like pi-web.

---

## 4. Key PR Progress

**1. [#7498](https://github.com/earendil-works/pi/pull/7498)** — **Open.** Defer idle compaction until next prompt. Directly addresses #6879 by preventing unnecessary compaction between idle turns, saving tokens and avoiding the edge case where compaction fires mid-turn on recent high-context models.

**2. [#7480](https://github.com/earendil-works/pi/pull/7480)** — **Closed.** Add LLM Gateway provider (OpenRouter-style router) as a built-in `openai-completions` provider. Sources ~151 tool-capable models from `api.llmgateway.io/v1/models` with API key and OAuth login support.

**3. [#7496](https://github.com/earendil-works/pi/pull/7496)** — **Closed.** Add cycle execution duration display and `/copy cycle` command (REQ-046). Prints `Execution time: Xh Ym Zs` at the end of each completed work cycle using monotonic `Date.now()`.

**4. [#7494](https://github.com/earendil-works/pi/pull/7494)** — **Open.** Preserve Gemini 3 tool call IDs. Gemini 3 returns IDs on function calls and expects matching IDs on responses; Pi currently drops both because `requiresToolCallId()` only covered Claude and GPT-OSS models.

**5. [#7493](https://github.com/earendil-works/pi/pull/7493)** — **Open.** Set `AI_AGENT=pi` in CLI and RPC entry points for child process attribution. Complements the existing `PI_CODING_AGENT=true` marker and follows the emerging cross-agent convention.

**6. [#7330](https://github.com/earendil-works/pi/pull/7330)** — **Open.** Resize images returned by tools. Currently `processImage` (format conversion + 2000×2000 resize) is only called from `read.ts` and `file-processor.ts`, so extension tools, MCP bridges, and browser tools bypass it and store full-resolution images in session history.

**7. [#7482](https://github.com/earendil-works/pi/pull/7482)** — **Closed.** Prefer iTerm2 inline images over Kitty on WezTerm. Fixes #7481 where inline Kitty images degrade to a one-row sliver in scrolling transcripts because `detectCapabilities()` maps WezTerm to the Kitty renderer incorrectly.

**8. [#7396](https://github.com/earendil-works/pi/pull/7396)** — **Open.** Add server session backend for `PiServer`. Persists coding-agent sessions as JSONL with exclusive cross-process locking and crash recovery; projects harness events into protocol snapshots and live transcript progress.

**9. [#7471](https://github.com/earendil-works/pi/pull/7471)** — **Closed.** Retry transient provider errors in Google adapters. The `google-vertex` and `google-generative-ai` adapters previously treated a 429/5xx before the first token as a terminal error, killing the agent thread — unlike Anthropic, OpenAI, and Azure adapters which retry.

**10. [#7468](https://github.com/earendil-works/pi/pull/7468)** — **Closed.** Accept Claude Code skill frontmatter. Both skill loaders (`packages/agent` harness and `packages/coding-agent`) now support the Claude Code `SKILL.md` frontmatter reference format, enabling cross-agent skill portability.

---

## 5. Feature Request Trends

- **Scroll lock / reading mode** — Multiple issues (#4679, #7495) request the ability to scroll up without the view auto-jumping to the bottom during streaming output or after submitting a reply.
- **IME / CJK input improvements** — WezTerm IME candidate window flickering (#7490), hardware cursor jumps (#7486), and Bengali width overcounting (#7402) indicate a systemic gap in terminal input method rendering.
- **Extension management** — `--exclude-extensions` flag (#7475), fixing extension-sent slash commands (#7484), and extension loader performance (#7483) reflect growing demand for extensibility control.
- **Provider expansion** — LLM Gateway (#7480), DeepSeek on OpenRouter (#7476), MiniMax video generation (#7467), and Gemini 3 tool call ID support (#7494) show a steady demand for broader model coverage.
- **Session management** — Server session backend (#7396), session storage composition refactors (#7478, #7455), and symlink-aware discovery (#7497) point to a maturing session persistence layer.

---

## 6. Developer Pain Points

- **Compaction reliability** is the dominant frustration: auto-compaction fails to trigger before overflow (#6879), sessions hang after compaction (#7020), compaction cancellation sources are never surfaced (#7492), and enterprise auth breaks compaction entirely (#7413).
- **WezTerm terminal rendering** is a recurring cluster: IME candidate windows flicker/jump (#7490), hardware cursor drifts during working states (#7486), inline Kitty images degrade in scrolling transcripts (#7481), and bracketed paste support is missing on some terminals (#7321).
- **Provider error handling gaps**: Fireworks timeout retries are too aggressive (#7315), Google adapters don't retry transient errors (#7471), and model catalog refreshes fail on single transient stalls (#7323).
- **Tool schema duplication** — every request sends tool definitions twice (text snippet + JSON `tools` param) with no opt-out for models with native tool calling (#7485).
- **Session persistence fragility** — `_persist` crashes on missing directories (#7463), symlinked dirs are silently ignored (#7497), and generic WebSocket errors lose structured metadata (#7464).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-03

---

## 1. Today's Highlights

The project pushed a new nightly release (`v0.21.3-nightly.20260802`) completing the TUI keyboard shortcut reference and unblocking history pagination. The most active development threads today center on hardening security boundaries in the hook execution system and adding first-class provider support for Kimi and Xiaomi MiMo. Two related bug reports highlight that `APIUserAbortError` is not recognized as an abort on the OpenAI-compatible path, causing subsequent session turns to be silently dropped from transcripts.

---

## 2. Releases

**v0.21.3-nightly.20260802.184365390** — Nightly build (2026-08-02)
- `docs`: Complete TUI keyboard shortcut reference (#8327)
- `fix(core)`: Unblock history pagination on OpenAI-compatible endpoints

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [#7585](https://github.com/QwenLM/qwen-code/issues/7585) | Add a direct external context provider profile | Proposes a private monorepo integration with administrator-bound external memory — a significant architecture shift for enterprise deployments. | 11 comments; active discussion on profile isolation model. |
| [#8051](https://github.com/QwenLM/qwen-code/issues/8051) | Track bounded resource usage for `qwen serve` daemon | Production concern: count-only limits don't bound bytes held by request bodies, WebSockets, or streaming buffers. | 9 comments; maintainer engagement on daemon hardening. |
| [#4156](https://github.com/QwenLM/qwen-code/issues/4156) | `qwen --serve` Mode A: TUI + in-process HTTP daemon | Long-running proposal (since May 2026) to unify headless and interactive modes; closes a gap where TUI and daemon cannot coexist. | 7 comments; marked CLOSED as consolidated into #4113. |
| [#7306](https://github.com/QwenLM/qwen-code/issues/7306) | Harden tool-output budgeting, observability, and artifact lifecycle | Phase 1 correctness is complete; this tracks ongoing observability and lifecycle management for tool outputs. | 5 comments; references merged PRs #7323 and #7470. |
| [#8123](https://github.com/QwenLM/qwen-code/issues/8123) | Desktop client cannot reference the correct file | User-facing bug: `@` symbol search fails to locate `KuaiShouOrderService.java` in the desktop client v0.5.5. | 5 comments; reproducible on Windows desktop. |
| [#8376](https://github.com/QwenLM/qwen-code/issues/8376) | Change process name from `node.exe` to `qwen.exe` | Developer experience: external tools cannot reliably identify Qwen Code without heuristics. | 4 comments; practical packaging concern on Windows/macOS/Linux. |
| [#8281](https://github.com/QwenLM/qwen-code/issues/8281) | Add an Email channel with IMAP and SMTP support | New integration direction: provider-neutral email mailbox for agent communication. | 4 comments; early-stage proposal. |
| [#8382](https://github.com/QwenLM/qwen-code/issues/8382) | Duplicate provider tool call ID | Intermittent production bug causing "not recorded" errors on tool calls across sessions. | 3 comments; needs reproduction steps. |
| [#8398](https://github.com/QwenLM/qwen-code/issues/8398) | `isAbortError` does not recognize OpenAI SDK's `APIUserAbortError` | User cancellations on `auth_type=openai` are misclassified, breaking abort handling. A matching fix PR (#8399) is open. | 2 comments; high-impact for OpenAI-compatible users. |
| [#8356](https://github.com/QwenLM/qwen-code/issues/8356) | After APIUserAbortError, subsequent turns not written to transcript | Data-loss bug: abort errors cause session transcript to stop recording, losing user context. | 2 comments; affects ACP/Web bridge sessions. |

---

## 4. Key PR Progress

| PR | Title | Description |
|----|-------|-------------|
| [#8381](https://github.com/QwenLM/qwen-code/pull/8381) | Fix desktop: read Windows smoke log from LocalAppData | Fixes Windows packaged-app smoke check to read the actual Tauri log location and ignore pre-test log content. |
| [#8388](https://github.com/QwenLM/qwen-code/pull/8388) | `capture-tui` — rendering claims get pixels, not prose (Phase 2) | Enables `qwen review capture-tui` to drive a private tmux server and capture terminal pane rendering as evidence images for review claims. |
| [#8320](https://github.com/QwenLM/qwen-code/pull/8320) | Cooperative pause and resume for Dynamic Workflows | Adds a pause-aware scheduler that stops dequeuing new dispatches, lets in-flight work converge, and gates fulfilled/rejected results until resume. |
| [#8397](https://github.com/QwenLM/qwen-code/pull/8397) | Add legacy code audit (`/audit`) design doc | Documents a new `/audit <path>` skill that points the `/review` machinery at existing merged code rather than diffs. |
| [#8318](https://github.com/QwenLM/qwen-code/pull/8318) | Autofix: require isolated targeted E2E proof | Fail-closed verification chain for Autofix issues from post-merge E2E failures; binds maintainer approval to exact issue title/body. |
| [#8396](https://github.com/QwenLM/qwen-code/pull/8396) | Close four trust-boundary holes in hook execution | HTTP hooks no longer follow redirects; URL whitelist and DNS-level SSRF checks hardened across the hook system. |
| [#8379](https://github.com/QwenLM/qwen-code/pull/8379) | Add Java/JVM performance path rule to `/review` | Second built-in path rule alongside GitHub Actions; attaches a Java/JVM performance checklist to `*.java` paths. |
| [#8274](https://github.com/QwenLM/qwen-code/pull/8274) | Fork from any conversation | Session branching now targets a specific earlier Assistant response instead of the latest active session state, avoiding unsafe visible-message branching. |
| [#8368](https://github.com/QwenLM/qwen-code/pull/8368) | Add Kimi and Xiaomi MiMo providers | First-class presets for `/auth` → Third-party Providers: Kimi (Coding Plan, API Key China/International) and Xiaomi MiMo (pay-as-you-go, China, Singapore). |
| [#8399](https://github.com/QwenLM/qwen-code/pull/8399) | Fix: recognize OpenAI SDK `APIUserAbortError` as an abort | Teaches `isAbortError` to recognize `APIUserAbortError` on the `auth_type=openai` path, fixing user-cancel misclassification. |
| [#8392](https://github.com/QwenLM/qwen-code/pull/8392) | Bridge Electron users to Tauri updates | Opt-in one-time macOS update bridge from legacy Electron desktop to Tauri shell; adopts `Qwen Code Desktop` name and `com.alibaba.qwen-code` bundle ID. |
| [#8350](https://github.com/QwenLM/qwen-code/pull/8350) | Support trusted private ASR base URLs | Adds `security.allowedInsecureVoiceBaseUrls` exact allowlist for managed deployments routing voice through HTTP/private-network ASR gateways. |
| [#8305](https://github.com/QwenLM/qwen-code/pull/8305) | Render inline terminal images | Extends terminal-image infrastructure from workspace-file previews to model and tool `inlineData` in the interactive CLI. |
| [#8332](https://github.com/QwenLM/qwen-code/pull/8332) | Add audio bridge for attachments | Transcribes user-supplied audio attachments through the configured batch voice model when the primary model lacks audio support. |
| [#8171](https://github.com/QwenLM/qwen-code/pull/8171) | Configure background agent turn limits | Adds shared `memory.agentMaxTurns` setting for extraction, dream, remember, and skill review agents; `0` disables the limit. |
| [#8241](https://github.com/QwenLM/qwen-code/pull/8241) | Restore per-group session isolation for QQ Bot | Removes forced `sessionScope: 'single'` override so the channel respects the configured scope under `groupAllPolicy`. |
| [#8394](https://github.com/QwenLM/qwen-code/pull/8394) | Add Maven multi-module verification to `/review` | `review build-test` now recognizes root Maven reactors and maps changed files to the deepest default-reactor module. |
| [#8137](https://github.com/QwenLM/qwen-code/pull/8137) | Scope warning credential stripping to URL authority | Provider warning sanitizer now bounds credential search to the URL authority instead of scanning the whole message. |
| [#6739](https://github.com/QwenLM/qwen-code/pull/6739) | Browser extension alpha readiness diagnostics | Adds daemon/browser-automation onboarding states, runtime MCP diagnostics, deterministic extension packaging, and real-Chrome acceptance flow. |

---

## 5. Feature Request Trends

The most-requested feature directions across the issue tracker are:

- **External memory / context provider integration** — Enterprise users want Qwen Code to pull repository-shared context from administrator-bound external memory stores (#7585).
- **New communication channels** — Email (IMAP/SMTP) (#8281) and cloud deployment integrations (#8291) are expanding the agent's interaction surface beyond the terminal.
- **Provider expansion** — Kimi, Xiaomi MiMo (#8368), and trusted private ASR base URLs (#8286, #8350) signal demand for region-specific and private-network model access.
- **Session management hardening** — Bounded daemon resource usage (#8051), concurrent session transcript integrity (#7164), and abort error handling (#8398, #8356) reflect growing production reliability expectations.
- **Voice and media capabilities** — Live Voice for WebShell (#7859), audio bridge for attachments (#8332), and inline terminal images (#8305) show a trend toward richer multimodal interaction.
- **Developer tooling and UX** — Process name identification (#8376), TUI keyboard shortcut documentation (#8327), and Java/JVM performance review rules (#8379) indicate a maturing developer-experience surface.

---

## 6. Developer Pain Points

- **Abort handling on OpenAI-compatible endpoints** — `APIUserAbortError` is not recognized by `isAbortError`, causing user cancellations to be silently misclassified and subsequent session turns to be lost from transcripts (#8398, #8356). A fix PR (#8399) is pending.
- **Duplicate provider tool call IDs** — Intermittent "Duplicate provider tool call id" and "not recorded" errors plague production sessions (#8382), suggesting a session ID collision or race condition in the tool-call registry.
- **Desktop client file search failures** — The `@` reference search fails to locate files in the desktop client on Windows (#8123), a regression

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest — 2026-08-03

Repository: [github.com/Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)

---

## 1. Today's Highlights

No new releases were published in the last 24 hours, but the maintainer merged several community contributions (Dev Container Windows support, Nix sandbox fix, workspace-scoped task API) and opened a batch of v0.9.4 preparation issues spanning Responses API conformance, credential security, notification controls, and compaction UX. Two related credential-persistence issues (#5045, #5047) highlight a growing concern that API keys are leaking into repo-local config rather than durable global storage.

---

## 2. Releases

None in the last 24 hours. The current stable is **v0.9.3** (`git-c98648b`). The v0.9.4 cycle is in active preparation, with multiple issues and PRs targeting Responses API support, provider profiling, and runtime API expansion.

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [#5007](https://github.com/Hmbown/DeepSeek-TUI/issues/5007) | YouTuber doesn't use CodeWhale as TUI for DeepSeek | Community perception that CodeWhale is not the "official" DeepSeek coding agent; external influencers promoting alternatives | 6 comments; author reports the issue as closed but sentiment remains that visibility matters |
| [#5097](https://github.com/Hmbown/DeepSeek-TUI/issues/5097) | CodeWhale is not considered official DeepSeek Coding Agent | Reinforces #5007; Reasonix cited as the preferred agent by DeepSeek's own materials | 0 comments; informational flag from community member |
| [#4785](https://github.com/Hmbown/DeepSeek-TUI/issues/4785) | Dead-code sweep: 464 `#[allow(dead_code)]` hiding drift | Code hygiene at scale; dead attributes mask real drift between code and compiler expectations | 4 comments; maintainer-authored, signals active cleanup planned |
| [#4683](https://github.com/Hmbown/DeepSeek-TUI/issues/4683) | Wrong deepseek completions URL | Flaky network failures on DeepSeek API calls after long usage sessions | 3 comments; users report intermittent breakage |
| [#4684](https://github.com/Hmbown/DeepSeek-TUI/issues/4684) | `danger-full-access` does not disable tools-layer workspace boundary check | Security gap: sandbox mode is bypassed but tools layer still enforces workspace boundaries | 3 comments; affects global skill access in `danger-full-access` mode |
| [#5096](https://github.com/Hmbown/DeepSeek-TUI/issues/5096) | Compaction gain not visible | Users cannot see token savings after `/compact`; undermines trust in the feature | 2 comments; reported across Qwen3.6 and DeepSeek v4 Flash |
| [#4564](https://github.com/Hmbown/DeepSeek-TUI/issues/4564) | `--model` and `--toolsets` flags consumed as single arg on Windows | Windows CLI argument parsing breaks pre-exec flags; blocks non-interactive usage | 2 comments; workaround proposed via env vars |
| [#4716](https://github.com/Hmbown/DeepSeek-TUI/issues/4716) | TUI exits immediately on launch in fresh terminal \[stop-ship\] | Critical launch failure on macOS Terminal.app; blocks all new users | 2 comments; maintainer-tagged stop-ship, known-good facts re-verified |
| [#5045](https://github.com/Hmbown/DeepSeek-TUI/issues/5045) | Unify API key/secret storage: credentials must be user-global, not repo-scoped | Security: keys entered in one repo disappear when switching projects | 1 comment; maintainer-authored, operator dogfood report |
| [#5047](https://github.com/Hmbown/DeepSeek-TUI/issues/5047) | API keys silently persist only in working repo instead of durable global secret storage | Keys written in plaintext to `<cwd>/.codewhale/config.toml` instead of global store | 1 comment; pairs with #5045 as a credential hygiene concern |

---

## 4. Key PR Progress

| PR | Title | Description |
|----|-------|-------------|
| [#5095](https://github.com/Hmbown/DeepSeek-TUI/pull/5095) | fix(ohos): re-quote Windows linker arguments containing spaces | Fixes OpenHarmony SDK path handling on Windows where quoted linker args get stripped by `cmd` expansion |
| [#5064](https://github.com/Hmbown/DeepSeek-TUI/pull/5064) | feat(compaction): carry forward a deterministic continuation contract | Adds a bounded working contract (active intent, decisions, verification evidence, in-flight tool calls) to compaction summaries independent of the summarizer model |
| [#5090](https://github.com/Hmbown/DeepSeek-TUI/pull/5090) | fix(approval): make fresh cards deny by default | Reflexive Enter on a new approval card now denies instead of approving; covers benign, destructive, persistent-allow, and workflow-plan layouts |
| [#5075](https://github.com/Hmbown/DeepSeek-TUI/pull/5075) | fix(config): make credential persistence path-safe | Rejects relative `CODEWHALE_HOME`/`CONFIG_PATH` before they become repo-local global state; routes all config I/O through fallible path authority |
| [#5086](https://github.com/Hmbown/DeepSeek-TUI/pull/5086) | fix(undo): scope /undo to the current session and add /redo | Prevents `/undo` from rolling back to a previous conversation's snapshot; adds `/redo` |
| [#5077](https://github.com/Hmbown/DeepSeek-TUI/pull/5077) | perf(prompt): progressively disclose fresh context | Caps ambient skills block at 2,400 chars; keeps `AGENTS.md`/`CLAUDE.md` eager; makes skill bodies lazy via `load_skill` |
| [#5091](https://github.com/Hmbown/DeepSeek-TUI/pull/5091) | fix(undo): keep workspace rollback inside the current session | Stamps snapshots with owning session; requires exact current-session tag for `/undo`, `revert_turn`, and runtime patch-undo endpoint |
| [#4985](https://github.com/Hmbown/DeepSeek-TUI/pull/4985) | feat(runtime-api): scope task listing by workspace | Adds `workspace` filter to `GET /v1/tasks`; includes task workspace path in `TaskSummary` for GUI client scoping |
| [#5063](https://github.com/Hmbown/DeepSeek-TUI/pull/5063) | fix: issue burn-down batch — Anthropic wire, sandbox, workflow, config scoping, session layer, input, TUI | Seven commits, one per fix area, each with regression tests; root causes diagnosed via adversarial verification |
| [#5068](https://github.com/Hmbown/DeepSeek-TUI/pull/5068) | refactor(tui): centralize DeepSeek pro effort mapping in a dated table | Consolidates DeepSeek Pro effort mapping into `client/deepseek_effort.rs`; both Chat and Responses paths consume the same table |

---

## 5. Feature Request Trends

Based on all open issues and PRs, the most-requested feature directions are:

1. **Responses API conformance** — Three issues (#5092, #5093, #5094) request provider-profiled Responses dialect support, a conformance harness, and typed dialect selection for named custom providers. This is the dominant v0.9.4 theme.
2. **Runtime API expansion** — Two issues (#5073, #5074) ask for verifier evidence beyond aggregate counters and persistent goal-loop state/completion controls for managed clients.
3. **Credential security & global storage** — Two issues (#5045, #5047) and one PR (#5075) converge on making API keys user-global and path-safe rather than repo-local.
4. **Notification controls** — PR #5066 introduces quiet mode and per-category switches, signaling demand for fine-grained notification policy.
5. **Session-scoped undo/redo** — PRs #5086 and #5091 reflect demand for conversation-boundary-aware workspace rollback.
6. **Model capability badges** — PR #5069 adds provider-aware badges in Fleet setup/roster, indicating demand for visual model differentiation.
7. **Compaction UX** — Issues #5096 and PR #5064 show demand for visible compaction gains and deterministic continuation contracts.

---

## 6. Developer Pain Points

- **Credential persistence is broken by design**: API keys silently leak into repo-local plaintext config (`<cwd>/.codewhale/config.toml`) instead of durable global storage, creating both security and UX problems when switching projects (#5045, #5047, #5075).
- **Windows CLI argument parsing is fragile**: `--model` and `--toolsets` flags before `exec` are concatenated into a single arg on Windows (#4564), and linker arguments with spaces break OpenHarmony builds (#5095).
- **TUI launch failures block onboarding**: The macOS stop-ship issue (#4716) where `codew` exits immediately prevents any new user from using the tool.
- **Sandbox and test reliability**: The Nix check-phase failure (#5026, #5028) and flaky verifier background tests (#5056) erode CI trust; 12 untriaged `#[ignore]` tests remain.
- **Dead code obscures real drift**: 464 `#[allow(dead_code)]` attributes across 143 files prevent the compiler from reporting structural drift (#4785).
- **Security boundary gaps**: `danger-full-access` mode does not fully disable the tools-layer workspace boundary check (#4684), and `danger-full-access` on Windows is already unavailable at the OS level, leaving a false sense of security.
- **External perception vs. official status**: Community members and influencers do not treat CodeWhale as the official DeepSeek coding agent, with Reasonix cited as the preferred choice (#5007, #5097).

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

# ComfyUI Community Digest — 2026-08-03

---

## 1. Today's Highlights

No new releases were published in the last 24 hours, but the repository saw significant activity around memory management fixes, new model support (MiniMax H3, Z-Image), and a critical regression fix for the `logging.py` naming collision that broke external custom node imports. Two brand-new issues were opened concerning regressions in v0.29.0 — one affecting LTXAV audio/video models and another involving Z-image inpainting texture errors — signaling growing pains from the latest release.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues (Top 10)

**1. [#14618](https://github.com/Comfy-Org/ComfyUI/issues/14618) — Models reload on every prompt change**
- **Why it matters:** A persistent and highly upvoted bug (10 👍, 114 comments) where changing a prompt triggers redundant model reloads, wasting time and VRAM. Reproducible even with custom nodes disabled.
- **Community reaction:** Active discussion across 114 comments; users confirm the issue affects workflow responsiveness significantly.

**2. [#15233](https://github.com/Comfy-Org/ComfyUI/issues/15233) — LTXAV freqs_cis_matrix crash on empty-audio branch (regression in 0.29.0)**
- **Why it matters:** A new regression in v0.29.0 that crashes `LTXAVModel` when processing video-only latents (no audio slot). The reshape operation on a zero-element tensor is ambiguous.
- **Community reaction:** Newly opened; 1 comment, likely to gain traction among video/audio pipeline users.

**3. [#15230](https://github.com/Comfy-Org/ComfyUI/issues/15230) — Texture errors during inpainting with Z-image in v0.29.0**
- **Why it matters:** Another v0.29.0 regression affecting Z-image-based inpainting workflows, a popular use case.
- **Community reaction:** Newly opened; 0 comments but affects a high-demand workflow pattern.

**4. [#15220](https://github.com/Comfy-Org/ComfyUI/issues/15220) — Tiled VAE reserves VRAM for full tensor, not tile**
- **Why it matters:** `VAEDecodeTiled` / `VAEEncodeTiled` should bound VRAM by `tile_size`, but the memory reservation scales with the full tensor, causing unnecessary model eviction and OOM on large workloads.
- **Community reaction:** Opened by the same author who filed the corresponding PR (#15221); community expects a fix soon.

**5. [#15229](https://github.com/Comfy-Org/ComfyUI/issues/15229) — `logging.py` name collision causes circular imports for custom nodes**
- **Why it matters:** After a recent commit, any external custom node importing `logging` (directly or indirectly via `torch`) fails due to `comfy/logging.py` shadowing Python's stdlib `logging`. This broke TTS Audio Suite and potentially many other nodes.
- **Community reaction:** 0 comments but high severity for the custom node ecosystem; already addressed by PR #15231.

**6. [#15189](https://github.com/Comfy-Org/ComfyUI/issues/15189) — Subgraph node widgets cannot be promoted**
- **Why it matters:** Limits composability of subgraphs — users expect promoted widgets to expose parameters at the parent level for cleaner workflow design.
- **Community reaction:** 3 👍, 5 comments; a UX friction point for advanced users building modular workflows.

**7. [#5908](https://github.com/Comfy-Org/ComfyUI/issues/5908) — InpaintModelConditioning doesn't work with flux-fill**
- **Why it matters:** Long-standing bug (opened Dec 2024, still open) where the official inpainting workflow with the flux-fill model produces incorrect results despite correct latent/mask decoding.
- **Community reaction:** 7 comments over ~8 months; persistent unresolved issue affecting a core workflow.

**8. [#15223](https://github.com/Comfy-Org/ComfyUI/issues/15223) — False info in README.md regarding `--enable-manager-legacy-ui`**
- **Why it matters:** Documentation误导 caused a user to spend an hour reinstalling and restoring backups before discovering both `--enable-manager` and `--enable-manager-legacy-ui` flags are needed.
- **Community reaction:** 0 comments but highlights documentation gaps that affect new users.

**9. [#15209](https://github.com/Comfy-Org/ComfyUI/issues/15209) — ComfyUI forces Triton backend with `--flash-attention` on ROCm**
- **Why it matters:** AMD ROCm users want to use flash-attention without being forced onto the Triton backend, which may not be optimal for their hardware.
- **Community reaction:** 1 comment; a niche but important concern for the AMD GPU community.

**10. [#14605](https://github.com/Comfy-Org/ComfyUI/issues/14605) — High CPU Usage Bug with PyTorch 2.9+ & CUDA 13 (RTX 5090)**
- **Why it matters:** Affects users on the latest CUDA/PyTorch stack with high-end NVIDIA hardware; marked stale but still unresolved.
- **Community reaction:** 2 comments; marked stale, suggesting it may need a fresh triage pass.

---

## 4. Key PR Progress (Top 10)

**1. [#15231](https://github.com/Comfy-Org/ComfyUI/pull/15231) — Rename `comfy/logging.py` to `comfy/internal_logging.py`**
- **What:** Resolves the circular import issue (#15229) by renaming the module so it no longer shadows Python's stdlib `logging`.
- **Status:** CLOSED. Direct fix for a high-severity custom node breakage.

**2. [#15225](https://github.com/Comfy-Org/ComfyUI/pull/15225) — Bound GPU memory in CK stochastic rounding path (fixes OOM on large models)**
- **What:** The `stochastic_rounding()` CUDA kernel was allocating a full-size `uint8` RNG tensor on GPU per call, causing OOM when loading large models. This PR slices the work to bound peak memory, matching the pre-existing PyTorch path behavior.
- **Status:** OPEN. High impact for users loading large checkpoints.

**3. [#15221](https://github.com/Comfy-Org/ComfyUI/pull/15221) — Size tiled VAE memory reservation from the tile, not the full tensor**
- **What:** Fixes #15220 — `decode_tiled`/`encode_tiled` now compute `memory_required` from the tile size instead of the full latent/pixel shape, preventing unnecessary VRAM reservation and model eviction.
- **Status:** OPEN. Companion fix to issue #15220.

**4. [#15228](https://github.com/Comfy-Org/ComfyUI/pull/15228) — Update workflow templates to v0.11.25 (adds MiniMax workflows)**
- **What:** Syncs the official workflow template package with the latest version, adding MiniMax workflow templates.
- **Status:** OPEN. Improves out-of-the-box workflow availability.

**5. [#15224](https://github.com/Comfy-Org/ComfyUI/pull/15224) — Support MiniMax-H3 (CORE-375)**
- **What:** Adds support for the MiniMax H3 audio-video model — a single-stream packed-token DiT that denoises video (24ch, 16x spatial / 17k+5 frame grid) and stereo audio (32ch, 40 Hz) latents jointly, conditioned on Qwen3-VL-32B hidden states.
- **Status:** OPEN. Major new model addition.

**6. [#15227](https://github.com/Comfy-Org/ComfyUI/pull/15227) — Add 768P resolution for MiniMax H3 model**
- **What:** Partner node PR extending MiniMax H3 support with 768P resolution output capability.
- **Status:** CLOSED. Complements #15224.

**7. [#15222](https://github.com/Comfy-Org/ComfyUI/pull/15222) — Add CLAUDE.md and move AGENTS.md detail into linked docs**
- **What:** Refactors agent-facing documentation — moves deep detail from `AGENTS.md` into three linked docs and adds `CLAUDE.md` so Claude Code sees the rules. Keeps the root file concise.
- **Status:** OPEN. Improves developer tooling and AI-assisted development experience.

**8. [#15226](https://github.com/Comfy-Org/ComfyUI/pull/15226) — Fix pin registration priority**
- **What:** Fixes a bug where pin registration exhaustion during VBAR loading caused models to inherit incorrect MRU priority, leading to async offloading issues.
- **Status:** CLOSED. Memory management stability fix.

**9. [#12099](https://github.com/Comfy-Org/ComfyUI/pull/12099) — LoadImage node now scans subdirectories for images**
- **What:** Extends `LoadImage` to recursively scan the input directory and all subdirectories, aligning its behavior with user expectations and other tools.
- **Status:** CLOSED. Long-awaited usability improvement.

**10. [#15000](https://github.com/Comfy-Org/ComfyUI/pull/15000) — Fix user.css loading broken by #14734**
- **What:** PR #14734 added security headers (serving userdata files as attachments) that inadvertently blocked `user.css` from loading as a stylesheet. This PR restores CSS loading while preserving security.
- **Status:** CLOSED. User customization fix.

---

## 5. Feature Request Trends

Based on the current issue pool, the most-requested feature directions are:

- **New model support integration** — MiniMax H3 (audio-video), Z-Image (Turbo), Twinflow, Wan ID-V2V/VACE, and Gemma 4 are all actively being added or requested, indicating the community wants broader multimodal and diffusion model coverage.
- **Memory & VRAM optimization** — Tiled VAE sizing, stochastic rounding memory bounds, and pin registration priority reflect a strong community demand for efficient GPU memory management, especially for large models.
- **Workflow & subgraph usability** — Subgraph widget promotion (#15189) and improved workflow templates point to demand for better composability and modularity in complex workflows.
- **Cross-platform GPU support** — ROCm/Triton backend concerns (#15209) and 50-series GPU support (#14623) highlight demand for broader hardware compatibility.
- **Custom node ecosystem health** — The `logging.py` collision and custom node testing workflows show the community values a robust, non-breaking extension API.

---

## 6. Developer Pain Points

- **Naming collisions in the `comfy/` package:** The `logging.py` incident (#15229) exposed a systemic risk — any file in `comfy/` that shadows a Python stdlib module can break the entire custom node ecosystem. This is a recurring class of issue that warrants a naming convention review.
- **VRAM reservation accuracy:** The tiled VAE issue (#15220) and the stochastic rounding OOM fix (#15225) both stem from the same root cause — memory reservation not matching actual per-tile or per-call allocation. This pattern suggests the `memory_required` calculation framework needs a more systematic approach.
- **Regression testing for v0.29.0:** Two new issues (#15233, #15230) filed within 24 hours of each other, both tied to v0.29.0 regressions, indicate that the release may have introduced breaking changes without sufficient regression coverage for edge-case audio/video and inpainting paths.
- **Stale issue triage:** Several issues (#14605, #14623, #14727) are marked stale but remain unresolved, creating noise and making it harder to identify genuinely new problems.
- **Documentation accuracy:** The README.md misinformation (#15223) and the need for a CLAUDE.md (#15222) both point to documentation drift — a recurring friction point for both users and AI-assisted developers.

---

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Community Digest — 2026-08-03

## 1. Today's Highlights

No new Ollama releases were published in the last 24 hours. The community is focused on a **regression in tool calling** introduced in versions 0.32.4/0.32.5 that breaks VS Code Copilot Harness workflows (highest comment volume), alongside **MLX vision model input failures** on Apple Silicon and persistent **cloud service authentication issues** (403 Forbidden loops). Several PRs targeting runner lifecycle management, Vulkan/AMD GPU fallback, and OpenAPI spec parity were updated.

---

## 2. Releases

None in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|---------------|
| [17444](https://github.com/ollama/ollama/issues/17444) | Tool calling broken in VS Code Copilot Harness on 0.32.4/0.32.5 | **18 comments** — confirmed regression; users must roll back to 0.32.1. Blocks AI coding workflows for a large segment of the community. |
| [17235](https://github.com/ollama/ollama/issues/17235) | Model request: Kimi K3 Cloud | **17 comments** — high demand for Kimi K3 on Ollama Cloud; community is actively requesting availability. |
| [13377](https://github.com/ollama/ollama/issues/13377) | Ollama on Windows stuck loading when `OLLAMA_HOST` is set | **16 comments** — long-standing Windows desktop bug affecting a specific configuration path; still unresolved after months. |
| [17065](https://github.com/ollama/ollama/issues/17065) | MLX vision models (Gemma 4 12B, Qwen3.5 4B) don't receive image input | **14 comments** — image placeholder only passed to model; affects Apple Silicon users relying on MLX-accelerated vision. |
| [17103](https://github.com/ollama/ollama/issues/17103) | Ollama Cloud not working with any model | **9 comments** — Pro subscribers on Max plan cannot use any model; suggests a backend/cloud-side outage or auth issue. |
| [17471](https://github.com/ollama/ollama/issues/17471) | Persistent 403 Forbidden & login loop on ollama.com (8+ hours) | **7 comments** — affects web UI and CLI across platforms; indicates a session/auth infrastructure problem. |
| [17512](https://github.com/ollama/ollama/issues/17512) | Thinking models enter infinite loop with exact word-count prompts | **4 comments** — new bug: `--think` + word-count target causes unbounded self-verification rewrite loops. |
| [14258](https://github.com/ollama/ollama/issues/14258) | GPU-to-CPU fallback happens silently with no user-visible warning | **4 comments, 2 👍** — UX concern; users unknowingly get CPU execution when VRAM is insufficient, leading to unexpected latency. |
| [17428](https://github.com/ollama/ollama/issues/17428) | Embedding runner stuck in "Stopping…" on macOS Apple Silicon | **3 comments** — `qwen3-embedding:4b` runner process hangs; `/api/embed` requests time out after 60s while main server stays healthy. |
| [17517](https://github.com/ollama/ollama/issues/17517) | Qwen models loading issue after recent update | **1 comment** — RTX 5070Ti users report Qwen3.6 35B Q4_K_M hitting memory ceiling unexpectedly; may relate to memory allocation changes in recent builds. |

---

## 4. Key PR Progress

| # | PR | Summary |
|---|-----|---------|
| [16590](https://github.com/ollama/ollama/pull/16590) | llama-server: manifest list support | Adds manifest-list storage so runner-specific manifests coexist under one tag; enables lazy local compatibility patches. Major infrastructure work for multi-runner tag management. |
| [17519](https://github.com/ollama/ollama/pull/17519) | docs: add tool_call_id and ToolCall.id to OpenAPI spec | Brings `api/types.go` fields (`ToolCall.id`, `ToolCall.function.index`, `ChatMessage.tool_name`, `ChatMessage.tool_call_id`) into the OpenAPI spec — critical for API consumers and IDE integrations. |
| [17420](https://github.com/ollama/ollama/pull/17420) | Vulkan AMD mmap fallback retry for llama-server launcher | Addresses GPU initialization failures on AMD Vulkan backends; complementary to #17356. |
| [17516](https://github.com/ollama/ollama/pull/17516) | server: evict loaded runners whose llama-server process has exited | Fixes stale-runner failures from #17428 and #17509 — when the llama-server subprocess crashes post-load, the scheduler now properly cleans up instead of reporting the model as loaded. |
| [17515](https://github.com/ollama/ollama/pull/17515) | server: prevent concurrent requests from resurrecting evicted runners | Fixes a scheduler deadlock (#17408) where concurrent requests could revive evicted runners, blocking `processPending` indefinitely. |
| [15325](https://github.com/ollama/ollama/pull/15325) | feat(amd): add experimental override for unsupported GPUs | Introduces `OLLAMA_AMD_UNSAFE=1` to opt into unsupported AMD GPU experimentation; keeps default behavior unchanged. |
| [17514](https://github.com/ollama/ollama/pull/17514) | fix(vision-suite): dialect-aware q4 bbox scoring in multi-image test | Fixes scoring logic where q4 responses were incorrectly marked as misses; stock nemotron was getting false positives from garbage boxes. |
| [17497](https://github.com/ollama/ollama/pull/17497) | cmd: support suggesting cloud tag for ollama launch | Extends cloud tag prompting to `ollama launch` (e.g., `ollama launch claude --model=kimi-k3`); follow-on from #17483. |
| [17513](https://github.com/ollama/ollama/pull/17513) | [TEST] draft block-check | Automated block check — closed immediately (trivial/cleanup). |
| [17510](https://github.com/ollama/ollama/issues/17510) | Model request: deepseek-v4-flash:0731 | Community request for the latest DeepSeek V4 Flash variant for local use. |

---

## 5. Feature Request Trends

1. **Cloud model expansion** — Kimi K3 (#17235), DeepSeek V4 Flash (#17510, #17264), Qwen Agent World (#16900), and Nemotron-3-Ultra (#16804) are all requested for Ollama Cloud or the local registry. The community wants broader cloud model coverage.
2. **External app / IDE integration** — Multiple requests for better settings GUI parity (#17266), VS Code Copilot/Harness compatibility (#17444), Claude Code integration (#16846), and Codex app support (#17119). The trend is toward making Ollama a first-class backend for AI-powered IDEs.
3. **OpenAPI spec parity** — Tool call fields missing from the OpenAPI spec (#17519) and `reasoning.effort` support for OpenAI-compatible endpoints (#17072) indicate demand for spec completeness and standards alignment.
4. **AMD GPU support** — Experimental overrides (#15325), Vulkan mmap fallback (#17420), and broader AMD compatibility remain a consistent theme.
5. **New model architecture support** — DeepSeek V4's `DeepSeekV4ForCausalLM` architecture is not yet supported for conversion (#17264).

---

## 6. Developer Pain Points

- **Tool calling regression** — The 0.32.4/0.32.5 tool calling breakage in VS Code (#17444) is the top community frustration; it directly blocks AI-assisted development workflows.
- **Silent GPU fallback** — Models silently offloading from GPU to CPU with no user-facing warning (#14258) causes confusion and unexpected performance degradation.
- **MLX vision model failures** — Gemma 4 and Qwen3.5 MLX variants not passing image data correctly (#17065, #16700) is a recurring Apple Silicon pain point.
- **Cloud reliability** — 403 Forbidden loops (#17471), cloud model unavailability (#17103), and cached-input pricing confusion (#17489) erode trust in Ollama Cloud.
- **Thinking model instability** — Infinite loops with word-count prompts (#17512) and `--think=false` being ignored on qwen3:30b (#17292) indicate fragile thinking/reasoning pipeline logic.
- **Embedding runner crashes** — `qwen3-embedding:4b` crashing the llama-server subprocess on macOS (#17509, #17428) with memory corruption is a stability concern for RAG pipelines.
- **Memory allocation on Windows** — gemma4:e2b using CUDA_Host pinned memory instead of VRAM (#17386), intermittent CUDA initialization failures (#17380), and Qwen loading memory ceiling issues (#17517) suggest Windows VRAM management needs attention.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

# llama.cpp Community Digest — 2026-08-03

---

## 1. Today's Highlights

The **b10235** release cycle brings significant momentum around **DeepSeek V4** and **Metal** backend improvements. Key highlights include the addition of a **SILU_BACK** operation for Metal GPUs, **F16 support for binary ops in Metal**, and DeepSeek V4 hyper-connection kernels (DSV4_HC_COMB/PRE/POST) with SIMDgroup-optimized Metal dispatch. The community is also actively tracking DeepSeek V4 MTP + DSpark integration and Qwen3 parser refinements, signaling a strong focus on cutting-edge model support.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **b10235** | Metal: SILU_BACK op for f32 ([PR #25982](https://github.com/ggml-org/llama.cpp/pull/25982)) |
| **b10234** | Metal: F16 support for binary ops ([PR #26465](https://github.com/ggml-org/llama.cpp/pull/26465)) |
| **b10233** | OpenCL: limit local workgroup size for GLU operation ([PR #26383](https://github.com/ggml-org/llama.cpp/pull/26383)) |
| **b10232** | Metal: DeepSeek V4 hyper-connections (DSV4_HC_COMB/PRE/POST) with SIMDgroup register/shuffle optimized kernels ([PR #26459](https://github.com/ggml-org/llama.cpp/pull/26459)) |
| **b10231** | Common: DSpark sidecar resolution support — resolves like speculative sidecars, respects `-hfd` tag, `-md` disables discovery ([PR #26458](https://github.com/ggml-org/llama.cpp/pull/26458)) |
| **b10229** | OpenCL: bugfix — increment `ref_count` in `ggml_backend_opencl_init()` to prevent `-1` at free time ([PR #26162](https://github.com/ggml-org/llama.cpp/pull/26162)) |
| **b10228** | DeepSeek V4 MTP + DSpark integration ([PR #25784](https://github.com/ggml-org/llama.cpp/pull/25784)) |
| **b10227** | Chat: Qwen3 specialized parser — tagged thinking tool parser, tool delimiter updates, `<tool_call>` omission support ([PR #26252](https://github.com/ggml-org/llama.cpp/pull/26252)) |
| **b10226** | SYCL: fix iGPU classification ([PR #26105](https://github.com/ggml-org/llama.cpp/pull/26105)) |
| **b10225** | Model: load MiMo V2 MTP tensors only when used ([PR #26412](https://github.com/ggml-org/llama.cpp/pull/26412)) |

---

## 3. Hot Issues

1. **[#22746](https://github.com/ggml-org/llama.cpp/issues/22746)** — *Qwen 3.6 27B eval bug: forced full prompt re-processing due to missing cache data.* The most-discussed issue (115 comments, 31 👍). Users on HIP/ROCm (RX 7800 XT) report the model re-processes the entire prompt each step, destroying throughput. Community suspects a KV cache state tracking bug introduced in recent HIP builds.

2. **[#14909](https://github.com/ggml-org/llama.cpp/issues/14909)** — *Feature Request: Implement missing ops from backends.* A long-standing enhancement (49 comments, 7 👍) requesting parity between CPU/CUDA/Vulkan/Metal and SYCL/OpenCL operator coverage. Serves as a roadmap for backend completeness.

3. **[#24132](https://github.com/ggml-org/llama.cpp/issues/24132)** — *gemma-4-E4B-it-Q4_0 crashes with `GGML_ASSERT(n_inputs < GGML_SCHED_MAX_SPLIT_INPUTS)`.* CUDA V100 users hit a scheduler split-input limit during eval. Points to a need for dynamic split-input handling for large models on older GPUs.

4. **[#26119](https://github.com/ggml-org/llama.cpp/issues/26119)** — *CUDA `cublasSgemm_v2` unsupported parameter during speculative decoding on V100.* CUDA 12.4 Windows build fails with speculative decoding + vision workloads. Suggests a cuBLAS API compatibility gap on V100 for newer CUDA versions.

5. **[#25746](https://github.com/ggml-org/llama.cpp/issues/25746)** — *json-schema-to-grammar: nested `maxLength >= 2000` emits unparseable GBNF.* Server-side tool-call grammar generation breaks for large string constraints. Affects `llama-server` in router mode with Jinja tool-call grammars.

6. **[#26369](https://github.com/ggml-org/llama.cpp/issues/26369)** — *DeepSeek V4 tracking issue.* Community high-interest item (27 👍) tracking DSV4 spec-dec, MTP, DSpark, sparse attention, and cross-backend support. Acts as a centralized hub for DeepSeek V4 adoption status.

7. **[#26382](https://github.com/ggml-org/llama.cpp/issues/26382)** — *Same K and V cache type enforced for models with no V cache (GLM-5.2).* Loading GLM-5.2 with `-ctk q5_1` and no `-ctv` triggers a `llama_init` failure. Points to overly strict cache-type validation for models without a value cache.

8. **[#26448](https://github.com/ggml-org/llama.cpp/issues/26448)** — *MoE expert weights via PCIe DMA (no H2D copy).* A creative approach to run 23GB MoE expert weights on a 1.6GB VRAM card by letting cuBLAS DMA directly from host RAM. Real measurements show dramatic VRAM savings for Qwen3-235B on 8GB cards.

9. **[#26445](https://github.com/ggml-org/llama.cpp/issues/26445)** — *GLM-5.2 terrible ROCm/HIP performance regression after Indexer PR #25407.* Prefill ~6× slower, load time ~40× longer on 8× MI300X. Directly linked to the GLM 5.2 indexer integration and a serious regression for AMD GPU users.

10. **[#26396](https://github.com/ggml-org/llama.cpp/issues/26396)** — *SYCL oneMKL FA path regresses 200K prompt prefill on Arc Pro B70 by ~35%.* Setting `MKL_FA_DISABLE=1` restores performance. A significant regression for Intel Arc Pro users on the latest SYCL builds.

---

## 4. Key PR Progress

1. **[#26254](https://github.com/ggml-org/llama.cpp/pull/26254)** — *mtmd: support Qwen3-TTS.* Adds text-to-speech support for Qwen3-TTS-12Hz-1.7B with `--tts-lang` (cn/en/ge/it/po/sp/ja/ko/fr/ru) and `--tts-speaker-file` for voice cloning. Breaking change to `llama-tts` binary.

2. **[#25352](https://github.com/ggml-org/llama.cpp/pull/25352)** — *E8 lattice 2-bit KV cache quantization (GGML_TYPE_E8_2).* New KV cache quant type at 2.125 bpe (34 bytes per 128-element head) using even-coordinate-sum lattice constraints. Live demo available.

3. **[#25784](https://github.com/ggml-org/llama.cpp/pull/25784)** — *DeepSeek V4 MTP + DSpark.* ~50% speedup with `--spec-dec` using MTP + DSpark speculative decoding. DeepSeek did not ship MTP with 0731 models; DSpark is the recommended approach.

4. **[#26463](https://github.com/ggml-org/llama.cpp/pull/26463)** — *cmake: check for LLAMA_SUBPROCESS.* Automated subprocess capability detection for build systems. Tested on RHEL8/9. Closes #26451.

5. **[#26420](https://github.com/ggml-org/llama.cpp/pull/26420)** — *server: add `x-tool-cwd` header.* Allows harnesses (llama-ui) to specify the working directory for tool calls, matching Claude Code / pi behavior.

6. **[#26466](https://github.com/ggml-org/llama.cpp/pull/26466)** — *ggml-cuda: HIP replace `__shfl_xor_sync` with DPX instructions.* Minor but meaningful speedup on HIP by using hardware shuffle instructions. Based on prior work from @maximumbusdatatype.

7. **[#26477](https://github.com/ggml-org/llama.cpp/pull/26477)** — *OpenCL: quant lm_head / decode GEMV and medium-batch GEMM optimizations.* Comprehensive Adreno GPU decode-side optimizations for K-quant dense models, targeting speculative decoding and MTP workloads.

8. **[#26419](https://github.com/ggml-org/llama.cpp/pull/26419)** — *ggml-cuda: enable MMA FlashAttention for head dim 256 on AMD RDNA.* Fixes #26220 — restores WMMA tensor core usage for head dim 256 after rocWMMA FA path removal, eliminating prompt processing regression on RDNA 4.

9. **[#26461](https://github.com/ggml-org/llama.cpp/pull/26461)** — *ci: prepare to onboard AMD ROCm CI.* Adds AMD ROCm CI workflow for Strix Halo (gfx1151) and Strix Point boards on ROCm 7.2. Critical for validating AMD GPU support at scale.

10. **[#26454](https://github.com/ggml-org/llama.cpp/pull/26454)** — *ggml: add gfx90c HIP support.* Corrects gfx90c/gfx909 architecture classification (was misassigned to CDNA; now correctly Vega/GCN). Fixes duplicate error token output on supported hardware.

---

## 5. Feature Request Trends

| Trend | Evidence |
|-------|----------|
| **DeepSeek V4 ecosystem** | DSpark, MTP, DSV4 hyper-connections, chat templates, and cross-backend op support dominate both releases and issues. |
| **MoE memory optimization** | PCIe DMA expert offloading (#26448),

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*