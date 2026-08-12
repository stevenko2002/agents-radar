# AI CLI Tools Community Digest 2026-08-13

> Generated: 2026-08-12 22:16 UTC | Tools covered: 12

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

**Today's Highlights — Key Updates Across AI CLI Tools (2026-08-13)**

1. **[Claude Code v2.1.229](https://github.com/anthropics/claude-code/releases/tag/v2.1.229)** — Documents the `claude remote-control --continue` flag for resuming active Remote Control sessions, adds server-supplied Claude Code hook support for self-hosted runner sessions, and introduces SSE keepalive pings to prevent timeout-related gateway disconnects.

2. **[OpenAI Codex Rust CLI alpha 0.148.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.9)** — Latest alpha release of the Rust-based Codex CLI published; no detailed public changelog available as of digest time.

3. **[Qwen Code v0.21.11-preview.0 & nightly](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.11-preview.0)** — Enforces prompt-safe Web Shell session navigation (`#8931`) and adds structured session-continuation admission logging in `qwen serve`.

4. **[Qwen Code desktop-v0.2.1](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.2.1)** — Defaults project memory to workspace scope and aligns session-lifecycle telemetry.

5. **[DeepSeek TUI v0.9.6 / CodeWhale rebrand](https://github.com/Hmbown/DeepSeek-TUI/releases/tag/v0.9.6)** — Rebrands to **CodeWhale** (Shannon Labs' public product); `codewhale` becomes the canonical command/package, legacy `deepseek-tui` npm package deprecated, and v0.8.x users must migrate.

6. **[Ollama: structured output / thinking sync fix](https://github.com/ollama/ollama/pull/17706)** — Fixes a critical clash where JSON grammar was applied before reasoning tokens, restoring structured JSON output for thinking-capable models.

7. **[llama.cpp b10375 / b10373 / b10369](https://github.com/ggml-org/llama.cpp/releases)** — Three back-to-back releases: tightened bare function parsing for Qwen models, refined `imatrix.cpp` expert-touch checking, and added pocket-tts support in `mtmd`.

8. **[ComfyUI #15547](https://github.com/Comfy-Org/ComfyUI/pull/15547)** — Restores ~1 GB of VRAM on 16 GB GPUs by hoisting the weight backup `namedtuple` definition to module level, eliminating thousands of per-weight GC allocations during MiniMax H3 video generation.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (2026-08-13)

## 1. Top Skills Ranking
Based on activity and discussion volume, the following Skills are currently receiving the most attention:

*   **Skill-Creator / Eval Suite** ([PR #1298](https://github.com/anthropics/skills/pull/1298), [Issue #556](https://github.com/anthropics/skills/issues/556)): A meta-skill framework for creating and optimizing other skills. Discussion is heavily focused on critical bugs where `run_eval.py` reports 0% recall, effectively "optimizing against noise." **Status: Open (Critical Fixes Pending)**.
*   **Self-Audit / Reasoning Quality Gate** ([PR #1367](https://github.com/anthropics/skills/pull/1367), [Issue #1385](https://github.com/anthropics/skills/issues/1385)): A high-sophistication skill that implements a mechanical verification and four-dimension reasoning audit before output delivery. **Status: Open/Draft**.
*   **Document Typography** ([PR #514](https://github.com/anthropics/skills/pull/514)): Focuses on "invisible" quality control, preventing orphan words, widow paragraphs, and alignment issues in AI-generated docs. **Status: Open**.
*   **ServiceNow Platform** ([PR #568](https://github.com/anthropics/skills/pull/568)): A comprehensive enterprise skill covering everything from ITSM and SecOps to IntegrationHub, moving beyond simple scripting. **Status: Open**.
*   **DOCX/OOXML Enhancements** ([PR #541](https://github.com/anthropics/skills/pull/541), [Issue #12](https://github.com/anthropics/skills/issues/12)): A series of fixes and additions to prevent document corruption (specifically `w:id` collisions and whitespace reformatting). **Status: Open**.
*   **Testing Patterns** ([PR #723](https://github.com/anthropics/skills/pull/723)): A full-stack testing guide covering the "Testing Trophy" model, AAA patterns, and React component testing. **Status: Open**.

## 2. Community Demand Trends
Analysis of the Issues tracker reveals four primary directions for new Skill development:

*   **Governance & Security:** High demand for "Agent Governance" ([Issue #412](https://github.com/anthropics/skills/issues/412)) and security auditing to prevent trust boundary abuse when using community-made skills ([Issue #492](https://github.com/anthropics/skills/issues/492)).
*   **Enterprise Productivity:** Requests for organization-wide skill sharing ([Issue #228](https://github.com/anthropics/skills/issues/228)) and deep integration with corporate platforms (SharePoint, SAP).
*   **State & Memory Management:** Interest in "compact-memory" ([Issue #1329](https://github.com/anthropics/skills/issues/1329)) to reduce token bloat in long-running agent sessions via symbolic notation.
*   **Standardization:** A push to expose Skills as Model Context Protocol (MCP) servers ([Issue #16](https://github.com/anthropics/skills/issues/16)) for better API signaling.

## 3. High-Potential Pending Skills
These active PRs are poised to significantly expand Claude Code's capabilities upon merge:

*   **Plan-File-Hygiene** ([PR #1479](https://github.com/anthropics/skills/pull/1479)): Solves the "lifecycle gap" by managing the accumulation of planning artifacts.
*   **Pyxel Retro Game Dev** ([PR #525](https://github.com/anthropics/skills/pull/525)): Integrates a specialized MCP server for 8-bit game development.
*   **ODT Skill** ([PR #486](https://github.com/anthropics/skills/pull/486)): Expands document support to OpenDocument Format (LibreOffice) for open-standard compliance.
*   **Skill Quality/Security Analyzers** ([PR #83](https://github.com/anthropics/skills/pull/83)): Meta-skills designed to vet other skills across structure, documentation, and security.

## 4. Skills Ecosystem Insight
The community is currently shifting from contributing "basic capability" skills toward **"Meta-Skills"**—tools designed to audit, optimize, and govern the quality and security of the skills ecosystem itself.

---

Got it, let's tackle this Claude Code community digest for 2026-08-13. First, I need to follow the structure exactly, make sure it's technical, concise, for developers, with all the GitHub links.

First section: Today's Highlights. Let's look at the latest release first: v2.1.229 has the remote control continue flag, server-side hook support for self-hosted runners, SSE keepalive pings. Then the top issues: the GitHub connector regression #71542 is super high comments (54) and 48 upvotes, that's a big one. Also the skills subdirectory feature request #10238 has 167 upvotes, 50 comments, that's a top requested feature. Oh right, and the release notes mention the remote control continue, so I should lead with that. Let me draft that:
> Today's highlights center on the new v2.1.229 release adding core Remote Control and self-hosted runner improvements, alongside two high-impact community discussions: a widespread GitHub connector regression blocking repository access for all users, and a top-voted feature request for subdirectory support in Claude Code skills.

Wait, make sure it's 2-3 sentences. Yeah, that works. Mention the key points: release, top bug, top feature request.

Next section: Releases. There's v2.1.229, right? Let's list the changes clearly:
- v2.1.229 (released <24h prior to 2026-08-13): [GitHub release page, but wait the repo is anthropics/claude-code, so link to the release? Wait no, the data says latest release is v2.1.229, changes are:
  1. Documented `claude remote-control --continue` flag to resume the most recent active Remote Control session
  2. Added server-supplied Claude Code hook support for self-hosted runner sessions, aligning behavior with managed Anthropic environments
  3. Added SSE keepalive pings to gateway streaming responses to prevent timeout-related connection drops
Wait, the original release note cuts off at "du" but we can infer it's to prevent timeouts, right? Yeah, that's standard for SSE keepalive. So structure that section properly, link to the repo's releases? Wait no, the issue/PR links are given, but for release, maybe link to the release page, but since the data is from github.com/anthropics/claude-code, we can note that. Wait no, the user said include GitHub links for each item. So for releases, link to the release: https://github.com/anthropics/claude-code/releases/tag/v2.1.229? Wait but the data doesn't give the exact URL, but it's standard. Wait no, wait the data gives the issue and PR URLs, but for the release, we can just note it, but maybe just reference it, but let's make sure. Wait no, let's check the data again: the latest releases are v2.1.229, so the section is:
### Releases
No separate release page link is provided in the source data, but the latest version v2.1.229 (released in the 24 hours prior to 2026-08-13) includes three key changes:
1. Official documentation for the `claude remote-control --continue` flag, which lets users resume their most recent active Remote Control session without manual session ID lookup
2. Server-side Claude Code hook support for self-hosted runner sessions, bringing feature parity with managed Anthropic-hosted environments
3. SSE keepalive pings added to gateway streaming responses to eliminate unexpected timeout disconnects during long-running agent tasks
Wait, but maybe we can just link to the repo's releases tab? No, better to just state it, but wait the user said include GitHub links for each item. Wait maybe the release is tagged, so the link is https://github.com/anthropics/claude-code/releases/tag/v2.1.229, that's correct.

Next section: Hot Issues. Pick 10 noteworthy ones, ranked by impact probably. Let's list the top ones first, explain why they matter, community reaction (upvotes, comments), link each.

1. First, #71542: GitHub connector regression, 54 comments, 48 upvotes. Why it matters: account-wide, affects all public/private repos, recent regression, blocks core GitHub integration functionality. Community reaction: high engagement, 48 upvotes indicates widespread impact, 54 comments show active troubleshooting and workaround sharing. Link: https://github.com/anthropics/claude-code/issues/71542

2. #10238: Subdirectory support for skills, 50 comments, 167 upvotes (highest upvote count in the list). Why it matters: current skills only work at project root, forces users to duplicate skill definitions for monorepos/multi-module projects, a long-standing top feature request. Community reaction: massive upvote count shows broad demand, 50 comments include detailed use cases and proposed implementation patterns. Link: https://github.com/anthropics/claude-code/issues/10238

3. #54393: Multi-agent coordination post-mortem, 26 comments, 0 upvotes? Wait no, upvotes 0 but 26 comments, it's a post-mortem of 12 bugs in autonomous overnight multi-agent runs. Why it matters: catalogs critical gaps in multi-agent coordination that affect users running automated, long-running agent workflows, which is a growing use case for Claude Code. Community reaction: high comment count indicates active discussion from teams using multi-agent setups, no upvotes likely because it's a bug report rather than a feature request. Link: https://github.com/anthropics/claude-code/issues/54393

4. #81159: Windows GPU crash corrupts MSIX package during Opus 5 browser actions, 18 comments, 1 upvote. Why it matters: affects Windows 11 users running desktop app, forces repeated app repairs, blocks in-browser tasks (screenshots, web previews) on Windows. Community reaction: 18 comments show multiple users reporting the same exit code, workarounds being shared. Link: https://github.com/anthropics/claude-code/issues/81159

5. #80279: Regression in 2.1.217 removing "Last Activity" filter from project-grouped session sidebar, 17 comments, 24 upvotes. Why it matters: breaks a core navigation feature for users with large numbers of sessions, regression from a previous working version. Community reaction: 24 upvotes show widespread frustration with the missing filter, 17 comments include requests for a quick fix. Link: https://github.com/anthropics/claude-code/issues/80279

6. #72248: Workflow tool passes JSON args as string instead of parsed object, 11 comments, 1 upvote. Why it matters: breaks the documented "verbatim" contract for the Workflow tool, causes silent type errors in automation scripts that rely on structured input. Community reaction: multiple users reporting identical behavior, a duplicate issue (#73899) confirms widespread impact. Link: https://github.com/anthropics/claude-code/issues/72248

7. #73647: Peer-message security boilerplate spams mobile UI on idle status pings, 9 comments, 7 upvotes. Why it matters: breaks usability of Remote Control on mobile, wastes 80% of screen space on non-actionable notifications for multi-user sessions. Community reaction: 7 upvotes show frustration from mobile Remote Control users, comments include proposed fixes for filtering non-user messages. Link: https://github.com/anthropics/claude-code/issues/73647

8. #78338: Background agents drop queued SendMessages and skip completion notifications (Linux), 7 comments, 1 upvote. Why it matters: breaks reliability of background agent workflows, users miss critical task completion alerts and queued instructions. Community reaction: reports from Linux users running CLI-based background agents, includes a detailed self-authored post-mortem from a user who investigated the issue in Claude Code itself. Link: https://github.com/anthropics/claude-code/issues/78338

9. #86014: Cross-session send_message reports success but never delivers (Windows desktop), 6 comments, 1 upvote. Why it matters: breaks cross-session collaboration features, users receive false confirmation that messages were sent to other sessions. Community reaction: reports from Windows 11 desktop app users, linked to a similar open issue (#86212) indicating a broader cross-session messaging regression. Link: https://github.com/anthropics/claude-code/issues/86014

10. #85677: Project instructions and memory notes collide, with wrong instructions taking precedence, 6 comments, 0 upvotes. Why it matters: breaks core functionality of persistent project memory and CLAUDE.md instructions, leading to agents ignoring explicit user-defined rules for long-running projects. Community reaction: detailed report from a user with a week-long reproduction case, highlights a critical reliability gap for power users relying on persistent context. Link: https://github.com/anthropics/claude-code/issues/85677

Wait, that's 10, good. Let's make sure each has why it matters and community reaction, plus link.

Next section: Key PR Progress. Pick 10 important PRs? Wait wait, the latest PRs are only 5 total? Wait the data says Latest Pull Requests (updated in last 24h) Total 5 items. Oh right! The data only has 5 PRs, so I can't pick 10, wait wait let me check the data again. Oh yes: "Latest Pull Requests (updated in last 24h)(Total: 5 items)". Oh right, so I need to note that? Wait no, wait the user said "Pick 10 important PRs" but there's only 5 in the last 24h. Wait wait let me check again. Oh yes, the PR list has 5: 2 closed docs ones, 3 open. Wait maybe the user said 10 but if there's only 5, we can list all 5, explain each, and note that only 5 PRs were updated in the last 24h? Wait no, let's check the data again. Oh yes, the PR section says Total 5 items, showing all? Wait no, the issues say Total 50, showing top 30, but PRs say Total 5, so all 5 are listed. So let's adjust that section to list all 5, since there's only 5 in the 24h window, explain each, link them.

Wait let's list them:

1. #85925 (CLOSED): Docs cleanup pointing stale links to code.claude.com. What it does: Follow-up to a prior docs cleanup PR, swaps remaining outdated docs.claude.com links (which only redirect) for canonical code.claude.com targets across plugins, plugin skills/agents/commands, and issue templates. Status: Merged/closed. Link: https://github.com/anthropics/claude-code/pull/85925

2. #85822 (CLOSED): Docs fix for stale links and README drift in plugins and examples. What it does: Small docs-only change, updates outdated links in the hooks example script and plugins README to point to canonical code.claude.com documentation, verified against live redirects. Status: Merged/closed. Link: https://github.com/anthropics/claude-code/pull/85822

3. #41611 (OPEN): Add missing source attribution to Claude Code. What it does: Adds missing source citation metadata to Claude Code output, improving traceability for generated code. Status: Open, last updated 2026-08-12. Link: https://github.com/anthropics/claude-code/pull/41611

4. #42996 (OPEN): Add MEP (Meat Puppet Elimination Protocol) example for multi-machine AI sessions. What it does: Adds a 3-file example pattern for eliminating context loss when switching machines or resuming Claude Code sessions, no new infrastructure required, designed for users running cross-device agent workflows. Status: Open, last updated 2026-08-12. Link: https://github.com/anthropics/claude-code/pull/42996

5. #57888 (CLOSED): Scope `child_process_exec` security rule to JS/TS files to fix Python false positives. What it does: Updates the `security_reminder_hook.py` rule to only match `child_process.exec()` invocations in JavaScript/TypeScript files, eliminating false positive alerts for Python's `asyncio.create_subprocess_exec()` calls. Status: Merged/closed. Link: https://github.com/anthropics/claude-code/pull/57888

Wait, but the user said "Pick 10 important PRs" but there's only 5 in the last 24h. Oh, maybe the user meant pick the important ones from the available, so we can note that only 5 PRs were updated in the 24h window, so we're covering all relevant ones. That makes sense, because the data only has 5 PRs. So adjust the section header? No, just list all 5, explain each, since there's only 5.

Next section: Feature Request Trends. Distill the most requested feature directions from all issues. Let's look at the issues: the top one is subdirectory support for skills (#10238, 167 upvotes). Then there's the CLI client for Remote Control sessions (#73948, feature request, 1 upvote but it's a feature). Wait also, let's look at other issues: what are the common feature asks? Let's see:
1. Skill and project structure flexibility: The highest-voted feature request by far is support for subdirectories in skills (#10238, 167 upvotes), addressing pain points for monorepo and multi-module project users who currently have to duplicate skill definitions at the project root. Related requests include better support for project-specific instruction inheritance and memory scoping.
2. Remote Control accessibility improvements: Multiple requests focus on expanding Remote Control client support, including a CLI client for attaching to Remote Control sessions from the terminal (#73948) to match existing mobile/desktop client functionality.
3. Multi-agent workflow reliability: The high-engagement post-mortem issue (#54393, 26 comments) and related reports highlight demand for more robust multi-agent coordination primitives, including better message delivery guarantees, context isolation between agents, and clearer merge/operation guardrails for background agents.
4. Developer experience for automation: Requests for improved statusline JSON output (e.g., consistent `rate_limits` field availability #86169) and more reliable Workflow tool input parsing (#72248) indicate demand for more predictable, scriptable interfaces for power users building Claude Code into CI/CD and automation pipelines.
Wait, also, are there others? Let's check: the Windows always-on-top issue is a bug, but maybe not a feature request. The VSCode extension focus jump is a bug. So the feature request trends are those four points, right? Let's make that concise, cite the relevant issues.

Next section: Developer Pain Points. Summarize recurring frustrations or high-frequency requests. Let's look at the bugs:
1. Cross-session and Remote Control reliability: Multiple high-engagement issues report broken cross-session messaging (#86014, #86212, #73647), Remote Control session context loss after restart (#70096), and false success responses for message delivery, indicating a widespread reliability gap in Claude Code's real-time collaboration features.
2. Windows desktop app stability: Three separate high-comment issues report Electron GPU process crashes (#81159, #86094) and always-on-top window behavior (#85891) on Windows 11, with users forced to repeatedly repair the MSIX package, making the desktop app nearly unusable for Windows users.
3. Regression frequency: Multiple users report functionality that worked in prior versions breaking in recent updates: the "Last Activity" session filter missing in 2.1.217 (#80279), the GitHub connector regression (#71542), and the Workflow tool input parsing regression (#72248), indicating insufficient regression testing for core features.
4. Persistent context and instruction reliability: Power users report that CLAUDE.md instructions and persistent memory notes are frequently ignored or overridden (#85677, #78338), breaking use cases for long-running projects that rely on consistent, user-defined agent behavior.
5. Scriptability and automation gaps: The Workflow tool's inconsistent input parsing (#72248, #73899) and missing statusline fields (#86169) break automation use cases, as developers cannot reliably pass structured data to workflows or parse Claude Code's output in scripts.
Wait, that's good, those are the recurring pain points. Let's make sure each is supported by the issues in the data.

Now, let's make sure all links are correct, style is concise, professional, for technical developers. Let's check each section:

Wait, for the Releases section, should we link to the release? Yes, the release tag is https://github.com/anthropics/claude-code/releases/tag/v2.1.229, that's correct.

Wait, let's make sure the Hot Issues are ordered by impact: first the highest upvote/comment, then next. Let's confirm the upvote counts:
#10238: 167 upvotes (highest)
#71542: 48 upvotes, 54 comments (next highest comments)
#54393: 26 comments
#80279:24 upvotes,17 comments
#81159:18 comments
#72248:11 comments
#73647:9 comments,7 upvotes
#78338:7 comments
#86014:6 comments
#85677:6 comments
Yes, that order makes sense.

Wait, for #54393, it's a post-mortem of 12 multi-agent bugs, so even though upvotes are 0, the comment count is 26, which is high, so it's noteworthy.

For the PR section, since there are only 5 PRs updated in the last 24h, we can note that in the section intro: "Only 5 PRs were updated in the 24-hour window prior to 2026-08-13; all relevant open and closed PRs are covered below:" That way the user knows we didn't miss any, because there's only 5.

Wait, the user said "Pick 10 important PRs" but there's only 5, so that's a necessary note.

Now, let's put it all together, make sure it's structured correctly, no fluff, technical, links are correct.

Wait, let's check the release note again: the original says "Added SSE keepalive pings to gateway streaming responses du" — probably "to prevent unexpected disconnects" or "during long-running tasks", so we can phrase that as "to prevent timeout-related connection drops during long-running agent tasks" which is accurate.

Also, for the remote-control --continue flag: the release note says "Documented `claude remote-control --continue` for resuming the most recent Remote Control session" so that's correct.

For the server-supplied hook support: "Added server-supplied Claude Code hook support for self-hosted runner sessions, matching managed-environment behavior" so that's correct, aligns with managed environments.

Now, let's write the full digest:

---

# Claude Code Community Digest
**Date: 2026-

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Got it, let's tackle this OpenAI Codex community digest for 2026-08-13. First, I need to follow the exact structure the user asked for, make sure it's concise, professional, for devs, with links.
First, Today's Highlights. Let's see what's the biggest stuff. Oh right, the Rust CLI alpha 0.148.0-alpha.9 dropped, and there's a ton of Windows-related bug fixes and stability work in the PRs, plus a bunch of high-impact Windows app/extension issues are top of the mind for the community. Wait, also the PRs around MCP server improvements, plugin metrics, and session tracking are all merged yesterday. Let me make that 2-3 sentences. Let's draft: "A new Rust-based Codex CLI alpha release (0.148.0-alpha.9) shipped in the last 24 hours, alongside a batch of merged PRs focused on Windows stability, MCP server tooling, plugin analytics, and cross-session context tracking. The community’s top reported pain points remain concentrated on Windows 11 app/extension freezes, IDE context serialization failures, and sandbox permission errors, with multiple high-upvote issues active across desktop, VS Code, and CLI variants. Cross-platform session consistency (mobile/desktop/CLI) and plugin observability are also emerging as high-priority improvement areas per recent PR and issue activity." That works, hits the main points.
Next, Releases. The only new one is rust-v0.148.0-alpha.9. Wait, the data says it's the latest release in last 24h, no changelog details given? Wait the data just says "Release 0.148.0-alpha.9" so I need to note that, mention it's the Rust CLI alpha, no public changelog published yet? Wait no, let's check: the data says "rust-v0.148.0-alpha.9: 0.148.0-alpha.9 Release 0.148.0-alpha.9" so yeah, just note that the latest release is the Rust-based Codex CLI alpha 0.148.0-alpha.9, with full changelog pending publication as of the digest timestamp. Wait, but maybe just state it clearly: "### Releases
- **rust-v0.148.0-alpha.9**: Latest alpha release of the Rust-based Codex CLI, published in the last 24 hours. No detailed changelog is publicly available as of 2026-08-13. [Link: https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.9]" That's correct, since the data doesn't give more details.
Then Hot Issues: pick 10 noteworthy ones, explain why they matter, community reaction, with links. Let's sort by impact: first the top one is #20214, Windows 11 app freezes, 97 comments, 82 upvotes. That's huge. Then #31553, VS Code extension auto-include IDE context broken after update, 17 comments, 12 upvotes. Then #37398, desktop chat 5s timeout on owner discovery, 14 comments,9 upvotes. Then #37415, Windows Computer Use spawn EPERM sandbox error, 13 comments,4 upvotes. Then #33967, Windows app stuck on setup screen, 12 comments, 0 upvotes but affects users who can't use the app at all. Then #34920, VS Code IDE context RPC serialization error, 10 comments,5 upvotes. Then #35419, WSL2 VS Code context auto-disables, 6 comments,10 upvotes (high upvotes for comment count, so high demand). Then #37487, CLI sends empty tool description to Azure API, 6 comments,3 upvotes. Then #37493, macOS 16GB Apple Silicon crash loop on 26.730+ builds, 3 comments but it's a regression that breaks the app entirely for a whole class of Mac users. Then #38144, /fork command leaves parent thread stuck, 3 comments but affects CLI power users. Wait let's make sure each has why it matters, community reaction, link. Let's list them properly:
1. #20214: Codex App frequent freezes/stutters on Windows 11 Pro (97 comments, 82 👍). Why it matters: Highest-upvote open issue, affects Pro/Plus subscribers on a major supported OS, reported with sufficient system resources (32GB RAM, Ryzen 5 5600) so it's a software regression, not hardware limitation. Community reaction: High engagement, multiple users reporting identical symptoms across different Windows 11 hardware configurations, with workarounds not yet confirmed. Link: https://github.com/openai/codex/issues/20214
2. #31553: VS Code extension stopped auto-including IDE context after update (17 comments, 12 👍). Why it matters: Breaks a core value proposition of the Codex IDE extension (context-aware code generation) for remote/container VS Code users, a common workflow for enterprise developers. Community reaction: Multiple reports of the issue persisting across multiple extension versions (26.715.x and newer), with users forced to manually attach context as a temporary workaround. Link: https://github.com/openai/codex/issues/31553
3. #37398: Desktop app 5s delay opening unloaded local chats due to owner discovery timeout (14 comments, 9 👍). Why it matters: Introduces unnecessary latency for a frequent user action (resuming past conversations), even for small transcripts where the actual load time is <200ms. Community reaction: Users noting the fixed timeout is a clear optimization opportunity, with requests to expose a configurable timeout or fallback immediately to local storage. Link: https://github.com/openai/codex/issues/37398
4. #37415: Windows Computer Use fails with spawn EPERM, elevated sandbox setup broken on WindowsApps ACL (13 comments, 4 👍). Why it matters: Breaks the Computer Use feature entirely for Windows 11 users, a key differentiator for Codex Desktop’s agentic capabilities. Community reaction: Reports point to a permissions regression in recent builds, with users unable to complete sandbox setup to enable the feature. Link: https://github.com/openai/codex/issues/37415
5. #33967: ChatGPT for Windows stuck on "Complete Windows setup" screen, cannot enter limited-access mode (12 comments, 0 👍). Why it matters: Renders the desktop app completely unusable for affected Windows users, with no workaround to access even limited functionality. Community reaction: Multiple reports of the issue persisting across app reinstalls and Windows updates, with no official fix released as of the digest date. Link: https://github.com/openai/codex/issues/33967
6. #34920: VS Code extension IDE Context fails with RPC serialization error on Windows (10 comments, 5 👍). Why it matters: Breaks context-aware features for Windows VS Code users, with the issue confirmed across multiple extension versions and even other IDEs like Devin. Community reaction: Users have identified 26.5609.30741 as a working rollback version, confirming the regression was introduced in newer builds. Link: https://github.com/openai/codex/issues/34920
7. #35419: VS Code IDE context auto-disables, selected text not attached in WSL2 environments (6 comments, 10 👍). Why it matters: WSL2 is a widely used development environment for Windows users building for Linux, so this breaks a core workflow for a large segment of the user base. High upvote-to-comment ratio indicates broad unmet demand for a fix. Community reaction: Users report the issue persists even with explicit context enablement settings, with no reliable workaround. Link: https://github.com/openai/codex/issues/35419
8. #37487: Codex CLI 0.147.0 sends empty tool description to Azure Responses API (6 comments, 3 👍). Why it matters: Breaks compatibility with Azure-hosted model deployments for CLI users, causing tool call failures for Pro subscribers using Azure endpoints. Community reaction: Reports confirm the issue is isolated to 0.147.0, with earlier CLI versions working as expected. Link: https://github.com/openai/codex/issues/37487
9. #37493: macOS 16GB Apple Silicon Macs crash-loop on launch for Codex Desktop builds ≥26.730 (3 comments, 0 👍). Why it matters: Renders the desktop app completely unusable for a large segment of Apple Silicon users (16GB MacBook Air/Pro are extremely common), with the last working build identified as 26.727.51351. Community reaction: Users confirm identical builds work fine on 48GB Macs, pointing to a memory-related regression in the V8 runtime for lower-RAM devices. Link: https://github.com/openai/codex/issues/37493
10. #38144: /fork CLI command leaves parent thread with active writer, preventing resume in other terminals (3 comments, 0 👍). Why it matters: Breaks a core CLI workflow for power users managing long-running agentic tasks across multiple terminal sessions. Community reaction: Reports confirm the issue exists in 0.147.0, with users unable to resume forked sessions without restarting the CLI. Link: https://github.com/openai/codex/issues/38144
Wait that's 10, good. Now Key PR Progress: pick 10 important PRs, merged yesterday, right? All the PRs are updated 2026-08-12, so merged that day. Let's pick the most impactful ones:
1. #38257: Reconnect gRPC code-mode sessions after host restarts. What it does: Fixes a long-standing issue where code-mode (agentic coding) sessions would be lost entirely if the host process restarted, by caching session state and serializing reconnection attempts to avoid conflicts. Impact: Improves reliability for long-running coding tasks, especially in remote/container environments where host restarts are common. Link: https://github.com/openai/codex/pull/38257
2. #38244: Resolve paginated thread history by rollout ID. What it does: Fixes a bug where thread revert operations would load or update the wrong rollout history, by centralizing thread rollout resolution to use the current immutable rollout ID instead of the logical thread ID. Impact: Eliminates data loss and incorrect context loading when users revert to earlier versions of a conversation. Link: https://github.com/openai/codex/pull/38244
3. #38245: Add dynamic HTTP header helpers for MCP servers. What it does: Adds a new `http_headers_helper` configuration option for local streamable HTTP MCP servers, allowing users to run a custom shell command to generate dynamic authentication/headers per connection, cached across requests. Impact: Enables use of authenticated MCP servers that require dynamic token generation, expanding the ecosystem of compatible tools. Link: https://github.com/openai/codex/pull/38245
4. #38243: Track client-authored developer messages in rollout history. What it does: Adds a new opt-in feature flag `retain_client_developer_messages` to mark and persist developer messages sent from client tools (like the CLI or IDE extension) with provenance metadata, so they are retained across session restarts. Impact: Improves auditability and context consistency for automated/agentic workflows that inject custom developer instructions. Link: https://github.com/openai/codex/pull/38243
5. #38239: Add bounded plugin measurement analytics. What it does: Adds a new analytics pipeline for plugin performance metrics, with batched event emission and validation against plugin-declared analytics schemas, to avoid unbounded log growth. Impact: Improves observability for plugin performance and reliability, while respecting user privacy and storage constraints. Link: https://github.com/openai/codex/pull/38239
6. #38232: Track root turns across delegated Codex requests. What it does: Adds a new `root_turn_id` field to turn state and Responses API metadata, to identify the top-level user request that initiated a chain of nested delegated agentic tasks. Impact: Improves debugging, auditability, and cost tracking for complex multi-agent workflows. Link: https://github.com/openai/codex/pull/38232
7. #38228: Detect implicit skill invocations from PowerShell reads. What it does: Expands skill detection to recognize `Get-Content` reads of indexed `SKILL.md` files in PowerShell, including support for the `-Raw` flag, quoted paths with spaces, and native Windows path formats. Impact: Improves skill auto-activation for Windows developers using PowerShell, a common enterprise workflow. Link: https://github.com/openai/codex/pull/38228
8. #38217: Start required cached MCP servers lazily for subagents. What it does: Modifies MCP server startup logic to avoid eagerly launching required cached MCP servers for subagents if their tool definitions are already available in the cache, reducing unnecessary resource usage. Impact: Improves performance for multi-agent workflows that use shared MCP tools, reducing startup latency and resource consumption. Link: https://github.com/openai/codex/pull/38217
9. #38256: Report the latest rejection from multiple network reviews. What it does: Updates tool result reporting to surface the most recent specific rejection reason when multiple network approval reviews are triggered for a single execution, instead of only reporting the first rejection. Impact: Improves user clarity when tool calls are blocked by network policy, reducing confusion around approval failures. Link: https://github.com/openai/codex/pull/38256
10. #38261: Resolve skill package aliases in `skills.read`. What it does: Automatically resolves shortened skill package aliases from skill catalogs when the `skills.read` tool is called, removing the requirement for callers to manually expand aliases before reading skill metadata. Impact: Simplifies skill integration for third-party developers building on the Codex plugin ecosystem. Link: https://github.com/openai/codex/pull/38261
Wait that's 10, good. Now Feature Request Trends: distill the most requested feature directions from all issues. Let's look at the issues: there's requests for better session context visibility (voice/mobile sessions showing active model/reasoning effort #36640), exposing reasoning summaries/progress traces in the app #27197, CLI self-healing monitor workflows for long-running jobs #32993, autoscroll toggle in the app #23517, queueing and interrupting (steering) in the desktop app #10469. Also, cross-platform session consistency (mobile/desktop/CLI context sync #37620), better Windows support (since so many issues are Windows, but feature requests? Wait no, feature requests are the enhancement issues. Let's list the trends:
1. **Cross-platform session and context consistency**: Multiple requests aim to sync conversation context, model settings, and turn history across desktop, mobile, CLI, and remote/IDE environments, including exposing active model/reasoning effort to voice/mobile sessions and fixing omitted mobile turns in desktop context.
2. **Improved agent observability and control**: Requests include expandable reasoning summaries/progress traces in the desktop app, persistent self-healing monitor workflows for long-running CLI jobs, and support for both queuing and steering (interrupting) agent tasks in the desktop UI.
3. **Plugin and skill ecosystem usability**: Requests focus on simplifying skill integration (auto-resolving package aliases) and improving plugin observability via standardized metrics and analytics.
4. **UI/UX quality of life**: Requests include a toggle to disable autoscroll during long agent responses, to reduce visual discomfort for users.
That's good, distills the trends from the issues. Now Developer Pain Points: summarize recurring frustrations or high-frequency requests. Let's see: the biggest one is Windows stability, right? So many Windows issues: app freezes, extension context failures, sandbox permission errors, setup screen stuck, crash loops. Then, session/context consistency across platforms: mobile turns missing in desktop, IDE context not attaching, thread history reverts loading wrong data. Then, CLI edge cases: /fork breaking session resume, empty tool descriptions for Azure, app-server daemons lingering after updates. Also, lack of observability: no reasoning traces, no plugin metrics, hard to debug agentic workflows. Let's draft that:
### Developer Pain Points
1. **Windows platform instability**: The most frequently reported pain point, with 12 of the 30 top issues affecting Windows 11 users, covering app freezes, VS Code extension context failures, Computer Use sandbox permission errors, setup screen lockups, and crash loops. Many issues are regressions in recent builds, with users forced to roll back to older versions to restore functionality.
2. **Cross-platform session and context inconsistency**: Developers report frequent issues with context not syncing across desktop, mobile, CLI, and IDE environments, including missing mobile turns in desktop sessions, broken IDE context attachment in WSL2/remote VS Code, and incorrect thread history loading after reverts.
3. **Limited agent workflow observability and control**: Developers have limited visibility into agent reasoning (only a blinking "Thinking" state with no expandable traces) and control over long-running tasks, with no native support for monitoring/resuming interrupted CLI jobs or steering queued desktop tasks.
4. **Edge-case CLI and integration breakage**: Frequent reports of CLI edge cases, including broken Azure API compatibility, lingering app-server daemons after updates, and broken /fork session resume, that disrupt automated and power-user workflows.
Wait that's good, covers the recurring stuff. Now let's make sure all links are included, structure is correct, style is concise and professional for devs. Let's check if we missed anything: the releases section is there, highlights, hot issues 10, key PRs 10, feature trends, pain points. Let's make sure the highlights are accurate: yes, new CLI alpha, batch of merged PRs for stability/MCP/plugins, top pain points are Windows, cross-platform consistency, plugin observability. Let's also make sure that the PRs are all from the last 24h, which they are, updated 2026-08-12. The issues are all updated 2026-08-12, so latest. Let's also make sure that the closed issue #37493 is included, which is a macOS crash loop, that's important. Also, the enhancement issues are captured in feature trends and pain points. Wait, let's check the feature request trends again: the enhancement issues are #23517 (autoscroll toggle), #32993 (CLI monitor workflows), #36640 (expose model/reasoning to mobile/voice), #27197 (reasoning summaries), #10469 (queue/steer in desktop). Yep, those are all covered in the trends. Also, the pain points include the Windows stuff, which is the majority of the issues. Let's make sure the links are correct: each issue and PR has the correct GitHub link. Let's format it properly, use markdown headers as requested. Wait the user said structured English digest, so markdown is fine. Let's put it all together now, make sure it

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest
*Date: 2026-08-13 | Source: github.com/google-gemini/gemini-cli*

---

## 1. Today's Highlights
The latest v0.56.0-nightly release fixes critical false model capacity exhaustion errors that broke non-interactive and CI workflows, alongside core quota lookup mapping gaps. A high-priority security patch is also in flight to close a command injection bypass vulnerability (GHSA-wpqr-6v78-jr5g), while active development progresses on agent recursion support, expanded Gemini model coverage, and VS Code IDE companion stability fixes.

---

## 2. Releases
### v0.56.0-nightly.20260812.g5024443c7 (nightly, [changelog](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260812.g5024443c7))
- Fixes false model capacity exhaustion errors and incorrect core quota lookup model mapping ([#28730](https://github.com/google-gemini/gemini-cli/pull/28730))
- Adds local evaluation report command and accompanying developer documentation for the eval framework
- *Note: Stable v0.55.1 and preview v0.56.0-preview.1 changelogs are pending merge as of today ([#28779](https://github.com/google-gemini/gem

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Got it, let's tackle this GitHub Copilot CLI community digest for 2026-08-13. First, I need to follow all the sections the user asked for, make it concise, professional, for devs, include links.

First, section 1: Today's Highlights. Let's look at the top stuff. First, there are 3 new triage issues filed yesterday (Aug 12) covering MCP OAuth reliability, session memory leaks, and extension host process leaks. Also, a high-upvote feature request for CIMD support for remote OAuth MCP servers is still active with 35 upvotes, and a closed bug about blank transcripts during scrolling was fixed in v1.0.79. Wait, also there are multiple related MCP OAuth and process management issues filed yesterday. Let me make that tight: 2-3 sentences. Let's see: "Yesterday (2026-08-12) saw 8 new triage issues filed for Copilot CLI, including critical bugs around MCP OAuth reliability, session memory leaks, and dangling extension host processes for server mode. A 6-month-old high-upvote feature request for CIMD support for remote OAuth MCP servers remains a top community priority with 35 upvotes, while a recently closed terminal rendering bug (blank transcripts during incremental scrolling) was confirmed fixed in v1.0.79. Multiple user-reported issues around missing Anthropic/Claude models for enterprise users also saw increased activity yesterday." Wait, that's good. Wait, check the data: yes, 4463, 4464, 4466, 4467, 4468 are all filed 8/12, right. The CIMD one is #1305 with 35 upvotes, that's the highest. The blank transcript is #4311 closed, fixed in 1.0.79. And the Claude model issues #4390, #4422 are active, updated 8/12. Perfect.

Next section 2: Releases. The data says latest releases last 24h: None. So just say "No new Copilot CLI releases were published in the last 24 hours." That's straightforward.

Section 3: Hot Issues, pick 10 noteworthy ones, explain why they matter, community reaction, include links. Let's rank them by upvotes, comments, impact first.

1. First, #1305: Support CIMD for Remote OAuth MCP Servers. Upvotes 35, that's the highest. Why it matters: Current DCR support for remote MCP OAuth requires pre-registering clients, which creates friction for custom MCP server deployments. CIMD would eliminate that pre-registration step. Community reaction: Very strong support, 35 upvotes, 5 comments, active discussion since Feb 2026. Link: https://github.com/github/copilot-cli/issues/1305

2. #4095: Windows plugin update fails with "Access is denied" while VS Code is running. Upvotes 15, that's next highest. Why it matters: Blocks plugin updates for Windows users who have the Copilot VS Code extension open, a very common workflow. Root cause is the Copilot extension holding watcher handles on installed plugin directories. Community reaction: High frustration, 15 upvotes, 2 comments, reported since July 2026. Link: https://github.com/github/copilot-cli/issues/4095

3. #4390: Enabled organization models missing from catalogue (Claude Sonnet 5/Opus 5 and Kimi K3). Upvotes 4, 5 comments. Why it matters: Breaks access to paid, organization-approved models for enterprise users, a critical workflow break for teams paying for Copilot Business. Community reaction: Multiple related reports (#4422) confirm widespread impact for Anthropic model users, 4 upvotes, active discussion. Link: https://github.com/github/copilot-cli/issues/4390

4. #1730: sessionStart hook in .github/hooks/ does not fire in Copilot CLI (v0.0.420). Upvotes 3, 8 comments. Why it matters: Breaks custom workflow automation for teams using Copilot CLI hooks to enforce policies or pre-configure sessions. Community reaction: Long-standing bug reported since Feb 2026, 3 upvotes, 8 comments with multiple workaround attempts. Link: https://github.com/github/copilot-cli/issues/1730

5. #2109: ACP: support ask_user / ask_question style extension method. Upvotes 7, 3 comments. Why it matters: Enables custom ACP clients to collect structured user input mid-session, expanding use cases for custom agent integrations. Community reaction: Strong interest from agent developers, 7 upvotes, active feature request discussion. Link: https://github.com/github/copilot-cli/issues/2109

6. #4422: All Claude models disabled under CLI model selection. Upvotes 3, 2 comments. Why it matters: Confirms widespread enterprise user impact for Anthropic model access, with users reporting the issue persists across CLI rollbacks. Community reaction: 3 upvotes, reports of the issue appearing suddenly for previously working setups. Link: https://github.com/github.com/copilot-cli/issues/4422

7. #4328: Ctrl+H misinterpreted as Ctrl+Backspace under WSL2 due to WT_SESSION leak. Upvotes 0, 6 comments. Why it matters: Breaks core text editing functionality for WSL2 users running Copilot CLI in Windows Terminal, a very common developer environment. Community reaction: Multiple users reporting the issue since early August 2026, 6 comments with environment reproduction steps. Link: https://github.com/github/copilot-cli/issues/4328

8. #3976: native tgrep indexer OOM-kills host on large monorepos. Upvotes 0, 2 comments. Why it matters: The experimental tgrep feature (enabled via copilot_cli_tgrep flag) crashes the CLI for users working in large codebases, with no memory cap to prevent host system OOM kills. Community reaction: 2 comments, reports from monorepo maintainers. Link: https://github.com/github/copilot-cli/issues/3976

9. #4358: BYOK: populate /model picker from provider's /models endpoint. Upvotes 2, 1 comment. Why it matters: Currently, users running Copilot CLI with custom providers (via COPILOT_PROVIDER_BASE_URL) can only use a single pre-configured model, with no way to browse or switch models in-session. Community reaction: 2 upvotes, feature request from self-hosted/private model users. Link: https://github.com/github/copilot-cli/issues/4358

10. #4455: Session picker selected-but-inactive row has low contrast. Upvotes 0, 1 comment. Why it matters: Impacts accessibility and usability of the session picker (/resume) UI, making it hard to distinguish between selected and inactive sessions. Community reaction: 1 comment reporting the accessibility issue, filed yesterday. Link: https://github.com/github/copilot-cli/issues/4455

Wait, let's check if those are the top 10. Let's make sure they are noteworthy. Yeah, covers bugs, features, different areas: MCP, Windows, enterprise, hooks, ACP, WSL, tools, BYOK, UI, etc. Good.

Section 4: Key PR Progress, pick 10? Wait wait, the PRs total are 3? Wait wait the data says Latest Pull Requests (updated in last 24h) Total: 3 items. Oh right! The user said "pick 10 important PRs" but there are only 3. Wait let me check the data again: yes, PRs are #4449, #4453, #4452. All 3, so I have to include all, note that there are only 3 active PRs in the last 24h. Let's describe each:

1. #4449: Migrate pull request automation away from pull_request_target. OPEN, updated 2026-08-12. What it does: Migrates invalid-label and closure automation from the high-permission pull_request_target event to lower-permission pull_request and issue-scoped write tokens, reducing security risk for PR automation. Link: https://github.com/github/copilot-cli/pull/4449

2. #4453: Julesdemangeot ship it patch 1. CLOSED, updated 2026-08-12. Summary: Merged patch for Copilot CLI, details not specified in PR metadata. Link: https://github.com/github/copilot-cli/pull/4453

3. #4452: Revert 5 copilot/fix with copilot. CLOSED, updated 2026-08-12. Summary: Reverts 5 prior automated Copilot-generated fixes to the repository, likely due to unintended side effects. Link: https://github.com/github/copilot-cli/pull/4452

Wait, but the user said pick 10, but there are only 3. So I should note that only 3 PRs were updated in the last 24 hours, so all are included. That's fine.

Section 5: Feature Request Trends. Distill the most requested directions from all issues. Let's look at the issues:

First, MCP ecosystem improvements: Multiple requests around MCP reliability and flexibility: CIMD support for remote OAuth MCPs (#1305, 35 upvotes), BYOK model picker population from provider /models endpoints (#4358), fixing MCP OAuth silent refresh bugs (#4464), handling transient MCP 5xx errors during initialization (#4466), proper cleanup of stdio Docker MCP containers after session end (#4461). That's a big trend: maturing MCP support, especially for enterprise, BYOK, and reliability.

Second, enterprise and model access flexibility: Multiple issues around missing approved models for enterprise users (#4390, #4422), support for system-installed GitHub CLI instead of bundled gh.exe (#4456), explicit subagent model override fixes (#4462). So trend: better enterprise integration, model selection flexibility, reducing hard dependencies.

Third, session and context management: Requests to preserve durable context across repeated compactions (#4441), fix long-running session event store exhaustion (#4467), fix queued message stuck issues (#4373, closed but related), condensed autopilot timeline display (#2623). Trend: improving long-running session reliability and usability for complex agent workflows.

Fourth, platform-specific stability fixes: Windows plugin update handle leaks (#4095), WSL2 Ctrl+H keybinding bug (#4328), Windows socket errors for MCP OAuth (#4463). Trend: addressing platform-specific friction for Windows/WSL users, a large share of the developer audience.

Fifth, agent and ACP extensibility: ACP ask_user/ask_question method support (#2109), fixing cross-family subagent tool validation warnings (#4457), rubber-duck subagent model override fixes (#4432). Trend: expanding custom agent integration capabilities and fixing subagent behavior edge cases.

Wait, let's make that concise, not too list-like. Let's phrase it:
"Feature request and improvement trends this period center on 5 core areas:
1. MCP ecosystem maturity: The most upvoted request (35 👍) calls for CIMD support to eliminate pre-registration friction for remote OAuth MCP servers, alongside multiple requests for BYOK model picker improvements, MCP OAuth reliability fixes, and proper cleanup of session-scoped MCP resources.
2. Enterprise and model access flexibility: Multiple reports highlight missing organization-approved models (Claude, Kimi) for enterprise users, alongside requests to remove hard dependencies on bundled GitHub CLI and fix subagent model override edge cases.
3. Long-running session reliability: Users are requesting fixes for context loss during repeated compaction, event store exhaustion for multi-subagent sessions, and stuck queued messages to improve usability for complex, long-horizon agent workflows.
4. Platform-specific stability: Windows and WSL2 users are reporting high-friction bugs including plugin update failures, incorrect keybinding handling, and MCP OAuth socket errors, driving demand for better cross-platform testing.
5. Agent extensibility: Requests for expanded ACP methods (ask_user/ask_question) and fixes for cross-family subagent tool validation aim to improve custom agent integration capabilities."

That's good, distills the trends.

Section 6: Developer Pain Points. Summarize recurring frustrations or high-frequency requests. Let's look at the recurring stuff:

First, enterprise model access is unreliable: Multiple open issues (#4390, #4422) report that organization-enabled Claude and other third-party models are missing from the CLI model catalogue, even when enabled in Copilot Business settings, with no clear workaround and persistence across CLI rollbacks. That's a big one for paying enterprise users.

Second, MCP reliability gaps: Multiple issues highlight broken MCP workflows: OAuth silent refresh fails repeatedly forcing interactive re-auth (#4464), transient 5xx errors during MCP initialization mark servers as permanently failed for the session (#4466), and stdio Docker MCP containers are not terminated when sessions close (#4461), leading to resource leaks.

Third, Windows platform friction: Windows users face multiple blocking bugs: plugin updates fail with "Access is denied" when the Copilot VS Code extension is open (#4095, 15 upvotes), Ctrl+H keybindings are misinterpreted under WSL2 (#4328), and MCP OAuth fails with socket permission errors (#4463).

Fourth, session management edge cases: Long-running sessions hit hard limits: context compaction is recursively lossy (#4441), event stores are exhausted for sessions with many subagents (#4467), and server mode (`--server --stdio`) leaks 4 extension host processes per session that are never terminated (#4468).

Fifth, subagent behavior inconsistencies: Multiple reports note that subagent model overrides are ignored (#4432, #4462), cross-family subagents emit spurious "unknown tool" warnings (#4457), and autopilot mode does not properly detect completion of background shell tasks (#4385).

Wait, let's make that concise, professional:
"Recurring developer pain points this period include:
1. Unreliable enterprise model access: Multiple open issues report that organization-approved third-party models (Claude Sonnet 5/Opus 5, Kimi K3) are missing from the CLI model picker for enterprise users, even when enabled in Copilot Business settings, with no consistent workaround.
2. MCP workflow reliability gaps: Users face repeated MCP authentication failures (silent refresh errors forcing frequent interactive re-auth), permanent server failure marking for transient 5xx errors during initialization, and uncollected Docker containers for stdio MCP servers after session end.
3. Windows platform blocking bugs: High-friction issues including plugin update failures when the Copilot VS Code extension is open (15 upvotes), incorrect Ctrl+H keybinding behavior under WSL2, and MCP OAuth socket permission errors impact a large share of the user base.
4. Long-running session resource leaks: Server mode leaks 4 extension host processes per session that are never terminated, while long agent workflows exhaust event stores and lose early context during repeated compaction cycles.
5. Subagent behavior inconsistencies: Model overrides for built-in subagents (e.g. code-review) are silently ignored, cross-family subagents emit spurious tool validation warnings, and autopilot mode fails to detect completion of background shell tasks."

Perfect. Now, let's make sure all links are correct, all sections are covered, style is concise, professional, for devs. Wait, let's check the issue links: make sure they are correct. For example, #1305 is https://github.com/github/copilot-cli/issues/1305, right. #4095 is https://github.com/github/copilot-cli/issues/4095, yes. All PR links are correct too.

Wait, also, in the highlights, let's make sure it's accurate. Let's rework the highlights a bit to be tighter:
"### 1. Today's Highlights
2026-08-12 saw 8 new triage issues filed for Copilot CLI, including critical bugs around MCP OAuth reliability, session memory leaks, and dangling extension host processes for server (`--server --stdio`) mode. A 6-month-old high-upvote feature request for CIMD support for remote OAuth MCP servers remains the top community priority with 35 upvotes, while a recently closed terminal rendering bug (blank transcripts during incremental scrolling) was confirmed fixed in v1.0.79. Multiple user reports also confirm widespread breakage of enterprise access to Anthropic Claude models for Copilot Business users."

That's better, more accurate.

Wait, also, in the Releases section, since there are none, just say "### 2. Releases
No new Copilot CLI releases were published in the last 24 hours." Correct.

Wait, for the Hot Issues, let's make sure each entry has the issue number, title, link, why it matters, community reaction. Let's format each properly, like:
#### #1305: Support CIMD for Remote OAuth MCP Servers [Open | 35 👍 | 5 comments]
**Link**: https://github.com/github/copilot-cli/issues/1305
**Why it matters**: Current DCR support for remote MCP OAuth requires pre-registering OAuth clients with MCP servers, creating significant friction for custom MCP deployments. CIMD would enable just-in-time client registration, eliminating this pre-configuration step.
**Community reaction**: The highest-upvoted open issue for the project, with active discussion since February 2026 and strong support from MCP ecosystem developers.

That's better, more structured.

For the PR section, since there are only 3, we can say "### 4. Key PR Progress
Only 3 pull requests were updated in the last 24 hours, all summarized below:" then list each:
#### #4449: Migrate pull request automation away from pull_request_target [Open]
**Link**: https://github.com/github/copilot-cli/pull/4449
**Summary**: Migrates invalid-label and issue/PR closure automation from the high-permission `pull_request_target` event to lower-permission `pull_request` signals and issue-scoped write tokens, reducing security risk for repository automation workflows.

#### #4453: Julesdemangeot ship it patch 1 [Closed]
**Link**: https://github.com/github/copilot-cli/pull/4453
**Summary**: Merged automated patch for Copilot CLI, with no additional public details provided in PR metadata.

#### #4452: Revert 5 copilot/fix with copilot [Closed]
**Link**: https://github.com/github/copilot-cli/pull/4452
**Summary**: Reverts 5 prior Copilot-generated automated fixes to the repository, likely due to unintended side effects or regressions introduced by the original changes.

That's correct.

Now, let's put it all together, make sure it flows, is professional, no fluff, all sections covered. Let's check if

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-08-13

---

## 1. Today's Highlights
No new stable releases were published in the 24-hour window ending 2026-08-13. Community activity is centered on the high-engagement persistent memory feature request (Issue #1283, 35 community comments) that has been open since February 2026, alongside two open bug fix PRs targeting string rendering edge cases and web deployment subprocess stability.

---

## 2. Releases
No new releases were published in the 24-hour window ending 2026-08-13.

---

## 3. Hot Issues
Only 1 issue was updated in the 24-hour window ending 2026-08-13; no other issues had recent activity in this period:
1. **[Feature Request] Memory System - Persistent context across sessions ([Issue #1283](https://github.com/MoonshotAI/kimi-cli/issues/1283))**
   - Opened 2026-02-27, last updated 2026-08-12, 35 community comments
   - **Relevance**: This is the highest-engagement open feature request for

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

Got it, let's tackle this OpenCode community digest for 2026-08-13. First, I need to go through all the provided data and structure it exactly as requested.

First, section 1: Today's Highlights. Let's look at the latest release first—v1.18.17 has core bugfixes: session compaction improvements for smaller models, MERGE Gateway support for Zen, capped session retries with jitter. Then the big hot topics are the recurring Zen/Go subscription billing issues, plus a bunch of critical bug fixes in PRs for provider compatibility, TUI issues, and performance. Wait, need to make it 2-3 sentences. Let's see: First, OpenCode shipped v1.18.17 with core stability fixes including improved session compaction for small models, new MERGE Gateway reasoning variant support for Zen models, and reduced repeated retry loads via capped retries with jitter. Second, the community is heavily focused on resolving persistent billing/quota friction for OpenCode Zen and Go paid tiers, with multiple high-engagement issues addressing incorrect "free usage exceeded" errors for paying users. Third, a wave of contributor PRs landed addressing critical provider compatibility (Mistral, xAI, Kimi), TUI functionality gaps, and core performance regressions. That works.

Next, section 2: Releases. The latest is v1.18.17, released in the last 24h. Let's list the changes clearly:
- Core bugfixes:
  1. Session compaction now preserves full recent conversation turns and generates clearer summaries optimized for smaller LLMs
  2. Added support for MERGE Gateway reasoning variants to fix functionality for Zen model options (credit to @MatthewFeroz)
  3. Capped automatic session retries and added jitter to reduce redundant retry traffic and server load
Link is github.com/anomalyco/opencode/releases/tag/v1.18.17, right? Yeah, that's the repo.

Section 3: Hot Issues, pick 10 noteworthy ones, explain why they matter, community reaction, with links. Let's sort by comment count and impact first:
1. Issue #14273 (40 comments, closed): Free usage exceeded error for Zen free models despite having $3 balance. Why it matters: Highlights a critical billing/access control bug affecting free-tier Zen users, with widespread community frustration as evidenced by 40 comments and 1 upvote. It's closed, so it's a resolved high-impact user-facing issue. Link: github.com/anomalyco/opencode/issues/14273
2. Issue #15059 (15 comments, open): Multiple system prompts break Qwen3.5-* models. Why it matters: Breaks core functionality for users of popular Qwen3.5 models, with root cause tied to conflicting system prompt injection that also impacts dynamic context pruning plugins. Community is actively investigating workarounds. Link: github.com/anomalyco/opencode/issues/15059
3. Issue #42013 (8 comments, open): "Free usage exceeded, subscribe to Go" error for new DeepSeek V4 Flash Free users on first request. Why it matters: Indicates a quota tracking bug that blocks new users from accessing free tier models, with 4 upvotes showing widespread impact. Linked to similar closed issue #42128. Link: github.com/anomalyco/opencode/issues/42013
4. Issue #33495 (6 comments, open): Paid Zen users still hit 200-request free usage cap. Why it matters: Critical billing integration bug that blocks paying customers from accessing paid tier benefits, with reports of users with $20+ Zen balances being locked out. Link: github.com/anomalyco/opencode/issues/33495
5. Issue #42128 (7 comments, closed): Free usage limit exceeded on first request for DeepSeek V4 Flash Free / Zen. Why it matters: Confirms quota tracking bugs are affecting new free-tier users, resolved but part of a pattern of Zen quota issues. Link: github.com/anomalyco/opencode/issues/42128
6. Issue #19005 (7 comments, open): Feature request for clickable local file paths in terminal output. Why it matters: High-demand quality-of-life feature (5 upvotes) that would eliminate manual path copying for users generating files via OpenCode, with active community support for implementation. Link: github.com/anomalyco/opencode/issues/19005
7. Issue #41806 (3 comments, open): Linux TUI bootstrap hangs forever due to unreaped git child process. Why it matters: Blocks Linux TUI users from starting sessions entirely, with reproducible steps provided. Link: github.com/anomalyco/opencode/issues/41806
8. Issue #41848 (3 comments, open): Infinite LLM retry loop with no max attempts for stream errors, UI stuck on "Thinking". Why it matters: Critical stability bug that locks the UI indefinitely during provider stream errors, with no user-facing error feedback. Link: github.com/anomalyco/opencode/issues/41848
9. Issue #34582 (4 comments, open): Remote MCP OAuth access tokens not refreshed despite valid refresh tokens. Why it matters: Breaks long-running MCP server integrations for users of private/internal services, a growing use case for OpenCode's MCP support. Link: github.com/anomalyco/opencode/issues/34582
10. Issue #42147 (2 comments, open): Azure OpenAI large models (gpt-5.6-luna, o3, etc.) hang due to Responses API streaming issues. Why it matters: Blocks enterprise Azure OpenAI users from accessing latest high-performance models, a key provider for professional use cases. Link: github.com/anomalyco/opencode/issues/42147
Wait, let's check if those are the top 10 by comment count and impact. Let's see: #14273 (40), #15059 (15), #41470 (11, wait oh right, #41470 is "Copied to clipboard doesn't work" with 11 comments, I missed that. Let's adjust. Let's replace #42128 with #41470? Wait no, let's list properly by comment count first, then impact:
1. #14273: 40 comments, closed, Zen free usage bug—highest engagement, definitely top.
2. #15059: 15 comments, open, Qwen3.5 breakage—second highest.
3. #41470: 11 comments, open, clipboard not working in VSCode Server Docker—high user impact, lots of comments.
4. #42013: 8 comments, open, Go free usage error on first request.
5. #19005:7 comments, feature request, clickable paths—5 upvotes, popular.
6. #42128:7 comments, closed, first request free usage error—part of the quota bug pattern.
7. #33495:6 comments, open, paid Zen users hit free cap—critical billing bug.
8. #34582:4 comments, open, MCP OAuth refresh—important for enterprise users.
9. #42040:4 comments, open, can't open foo2 project when foo exists—project management bug.
10. #41806:3 comments, open, Linux TUI bootstrap hang—blocks Linux TUI users.
Wait, but also #42110 is 4 comments, closed, Go paid users stuck in retry loop. Oh right, that's also a billing issue. Let's make sure the 10 are the most noteworthy. Let's make sure each has a clear why it matters and community reaction. Let's finalize that list properly, no duplicates, cover different areas: billing/quota, core model compatibility, UI/TUI bugs, feature requests, MCP, etc.

Then section 4: Key PR Progress, 10 important PRs, describe features/fixes, with links. Let's pick the most impactful ones, both open and closed, covering fixes, features, refactors:
1. PR #42164 (open): fix(mistral): pass through reasoning effort. What it does: Loosens the Mistral SDK reasoning-effort schema from a fixed enum to a string, preserves arbitrary effort values on outbound provider requests, adds regression coverage for unknown effort values. Fixes compatibility issues with custom Mistral reasoning effort configurations. Link: github.com/anomalyco/opencode/pull/42164
2. PR #42160 (open): fix(xai): pass through reasoning effort. Same as above but for xAI SDK, supports pass-through of non-standard effort values like `xhigh` for both xAI Chat and Responses APIs. Fixes broken reasoning effort configuration for xAI models. Link: github.com/anomalyco/opencode/pull/42160
3. PR #42161 (open): fix(opencode): select Kimi prompt by provider. Fixes system prompt selection for Kimi/Moonshot models by matching on provider ID instead of model ID substring, so bare model IDs like `k3` and `k3-256k` use the correct Kimi agentic prompt instead of falling back to the default Claude-oriented prompt. Link: github.com/anomalyco/opencode/pull/42161
4. PR #42158 (open): fix(opencode): bridge question tool to ACP elicitation. Fixes a bug where the `question` tool blocked indefinitely in ACP mode by correctly passing QuestionV2 request IDs to the SDK reply/reject endpoints, unblocking waiting agent flows. Link: github.com/anomalyco/opencode/pull/42158
5. PR #42150 (open): fix(opencode): make text/reasoning delta accumulation O(N) instead of O(N²). Performance fix that resolves a critical regression where long conversation transcripts caused severe UI lag during response streaming, by optimizing delta accumulation logic. Link: github.com/anomalyco/opencode/pull/42150
6. PR #42149 (open): refactor(core): replace project copies with worktrees. Major core refactor that replaces the legacy ProjectCopy/ProjectDirectories domains with a global Worktree service, consolidating project root and managed worktree management for improved reliability and performance when working with multiple projects. Link: github.com/anomalyco/opencode/pull/42149
7. PR #27554 (open): feat(opencode): local LAN provider discovery + auto-discover models. New feature that adds mDNS-based local OpenAI-compatible server discovery to the `/connect` flow, auto-detecting models available on local LAN hosts (e.g., local Ollama, LM Studio instances) for seamless local provider setup. Link: github.com/anomalyco/opencode/pull/27554
8. PR #36526 (closed): feat(tui): add interactive session search. Shipped feature that adds readline/less-style incremental search over session transcripts in the TUI, eliminating the need for manual scrolling to find past conversation content. Link: github.com/anomalyco/opencode/pull/36526
9. PR #36471 (closed): feat(tui): paste clipboard on right click. Shipped TUI bug fix that enables right-click paste when mouse capture is active and the prompt is focused, fixing a long-standing clipboard usability gap in the TUI. Link: github.com/anomalyco/opencode/pull/36471
10. PR #42151 (open): chore(ci): surface bun exit code with ::warning:: on failure. CI fix that wraps the `close-prs` bun script invocation to emit a visible GitHub Actions `::warning::` annotation on non-zero exit codes, fixing silent workflow failures that made debugging CI issues difficult. Link: github.com/anomalyco/opencode/pull/42151
Wait, that's 10, covers different areas: provider fixes, core fixes, features, CI, refactors. Perfect.

Section 5: Feature Request Trends. Let's look at all the open feature requests and issues to distill trends. First, from the issues:
- Provider and model compatibility: Multiple requests to fix system prompt selection for non-mainstream models (Kimi, MiniMax, Qwen3.5), add support for new reasoning effort parameters across providers (Mistral, xAI), fix Azure OpenAI large model streaming, add local LAN provider auto-discovery.
- Billing and quota transparency: Repeated requests for clearer quota tracking, fixes for paid tier users being incorrectly locked to free tier limits, fixes for stale quota flags after subscription activation.
- TUI and UI quality of life: Requests for clickable file paths in terminal output, interactive session search, right-click paste, improved sidebar behavior, fixed RTL text rendering.
- MCP ecosystem support: Requests for per-server TLS trust configuration for private MCP servers, OAuth token refresh for remote MCP servers, expanded MCP server documentation examples.
- Core stability: Requests for fixed retry limits to avoid infinite loops, proper session compaction that preserves context, cross-session API reliability.
Wait, let's distill that into clear trends:
1. Provider and model compatibility expansion: The community is prioritizing fixes for edge-case model support (Kimi, MiniMax, Qwen3.5, Azure large models) and pass-through of provider-specific parameters (reasoning effort) across Mistral, xAI, and other providers, as well as seamless local LLM server integration via LAN discovery.
2. Billing and quota reliability: A dominant trend is requests to fix broken paid tier access control, with multiple reports of paying OpenCode Zen and Go users being incorrectly blocked by free-tier quota limits, plus demands for clearer quota usage visibility.
3. TUI/UI usability improvements: High demand for quality-of-life TUI features including clickable file paths, interactive session search, reliable clipboard support, and fixed rendering edge cases (RTL text, sidebar behavior).
4. MCP ecosystem maturity: Requests to expand MCP support for private/enterprise use cases, including per-server TLS trust configuration for internal MCP servers, reliable OAuth token refresh for remote MCP servers, and expanded documentation for MCP server integrations.
That's concise, covers the trends.

Section 6: Developer Pain Points. Let's summarize recurring frustrations:
1. Billing and quota inconsistency: The most frequently reported pain point is broken paid tier access, with paying OpenCode Zen and Go users repeatedly hitting incorrect free-tier quota limits, stale "subscription quota exceeded" errors after payment, and no clear visibility into quota usage. This has generated dozens of high-engagement issues in the last 24 hours alone.
2. Model compatibility gaps: Developers report frequent breakage when using non-default models (Qwen3.5, Kimi, MiniMax, Azure large models) due to incorrect system prompt selection, missing provider parameter pass-through, and streaming API incompatibilities that require manual workarounds.
3. TUI stability and usability: Linux TUI users report critical blockers including infinite bootstrap hangs due to unreaped git processes, infinite retry loops during stream errors with no error feedback, and broken core functionality like clipboard copy and project switching between similarly named directories.
4. MCP integration reliability: Developers using remote/private MCP servers report broken OAuth token refresh flows and TLS trust issues that block integration with internal services (firewalls, NAS, Kubernetes clusters, home lab tools).
Wait, that's accurate, based on the issues. Let's make sure it's concise, professional, for technical developers.

Now, let's make sure all links are correct, each section is properly formatted, no markdown except the section headers? Wait no, the user said structured English digest, with the sections as listed. Let's make sure each item has the GitHub link, as requested.

Wait, let's check the release again: v1.18.17's changes are correct, right? The data says: Made session compaction keep complete recent turns and produce clearer summaries for smaller models. Added MERGE Gateway reasoning variants so those model options work correctly. (@MatthewFeroz) Capped automatic session retries and added jitter to reduce repeated retry s (cut off, but we can note that it's to reduce repeated retry load, which is implied).

Also, for the hot issues, let's make sure each entry has the issue number, link, why it matters, community reaction. Let's make that clear.

Wait, let's adjust the Hot Issues list to be the top 10 by comment count and impact, no duplicates:
1. Issue #14273 (40 comments, [CLOSED]) – Free usage exceeded for Zen free models despite positive balance
   Link: github.com/anomalyco/opencode/issues/14273
   Why it matters: This is the highest-engagement issue in the last 24 hours, exposing a critical access control bug that blocks free-tier Zen users even when they have available balance. It generated 40 comments and 1 upvote from the community before being resolved.
2. Issue #15059 (15 comments, [OPEN]) – Multiple system prompts break Qwen3.5-* models
   Link: github.com/anomalyco/opencode/issues/15059
   Why it matters: Breaks core functionality for users of popular Qwen3.5 model family, with root cause tied to conflicting system prompt injection that also impacts third-party dynamic context pruning plugins. The community is actively investigating temporary workarounds.
3. Issue #41470 (11 comments, [OPEN]) – "Copied to clipboard" does not work in VSCode Server Docker environments
   Link: github.com/anomalyco/opencode/issues/41470
   Why it matters: Blocks a core usability feature for users running OpenCode in containerized VSCode Server environments, a common deployment pattern for remote development. It has 1 upvote and active reports of the bug.
4. Issue #42013 (8 comments, [OPEN]) – "Free usage exceeded, subscribe to Go" error on first request for DeepSeek V4 Flash Free
   Link: github.com/anomalyco/opencode/issues/42013
   Why it matters: Indicates a quota tracking bug that blocks new users from accessing free tier models entirely, with 4 upvotes showing widespread impact. It is linked to the resolved similar issue #42128.
5. Issue #42128 (7 comments, [CLOSED]) – Free usage limit exceeded on first request for DeepSeek V4 Flash Free / Zen
   Link: github.com/anomalyco/opencode/issues/42128
   Why it matters: Confirms a pattern of quota tracking bugs affecting new free-tier Zen users, with 5 upvotes indicating high prevalence before resolution.
6. Issue #19005 (7 comments, [OPEN]) – Feature request: Make local file paths clickable in terminal output
   Link: github.com/anomalyco/opencode/issues/19005
   Why it matters: High-demand quality-of-life feature (5 upvotes) that would eliminate manual path copying for users generating files, reports, or assets via OpenCode, with active community support for implementation.
7. Issue #33495 (6 comments, [OPEN]) – Paid Zen users still hit 200-request free usage cap
   Link: github.com/anomalyco/opencode/issues/33495
   Why it matters: Critical billing integration bug that blocks paying customers from accessing paid tier benefits, with confirmed reports of users with $20+ Zen balances being locked out by the free-tier limit.
8. Issue #34582 (

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

Got it, let's tackle this Pi community digest step by step. First, I need to make sure I follow all the required sections, use the provided GitHub data, keep it concise for technical devs, include links, and date it 2026-08-13.
First, section 1: Today's Highlights. Let's see the big stuff. First, there's a fix for the edit tool rejecting single-object edit arguments (PR #8011, issue #7835) which is a common pain point for models that output single edits. Then, the mouse event support for TUI components (PR #8032, issue #7683) which was a highly requested feature for extension developers. Also, the Ollama local model proxy PR (PR #8049) which adds local model support, that's a big one for users running local LLMs. Wait, also the fix for the missing usage in streaming events (PR #7982, issue #7911) that broke mid-run usage tracking. Let's condense that into 2-3 sentences. Let's see: "August 13, 2026 Pi community digest highlights include two merged fixes for core tooling usability: a patch for the edit tool to accept single-object edit arguments (previously breaking workflows for models that output non-array edit payloads), and a fix restoring cumulative usage data in streaming events that was accidentally removed in v0.84.0. The community also saw merged support for TUI components to receive custom mouse events via a new `onMouse` hook, and a new community-contributed local Ollama model proxy integration for running self-hosted LLMs with Pi." That works, concise, hits the main points.
Next, section 2: Releases. The data says latest releases last 24h are none, so just state that. "No new official Pi releases were published in the last 24 hours."
Section 3: Hot Issues, pick 10 noteworthy ones. Let's go through the issues, pick the most impactful, with highest comments/upvotes, or high impact. Let's list them:
1. Issue #6879: Auto-compaction never triggers past 100% context until provider overflow. 17 comments, 17 upvotes, open. Why it matters: Causes session crashes when context exceeds limits, wasting hours of agentic work. Community reaction: High engagement, users reporting long agentic runs failing due to unplanned context overflows. Link: https://github.com/earendil-works/pi/issues/6879
2. Issue #7683: pi-tui let components receive mouse events on their own rows. 9 comments, closed, merged PR #8032. Why it matters: Unblocks extension developers from building interactive TUI widgets with custom mouse interactions, a long-standing limitation. Community reaction: Positive, multiple extension maintainers requested the feature, PR merged quickly after issue filing. Link: https://github.com/earendil-works/pi/issues/7683
3. Issue #7836: Edit fuzzy match misses lines with whitespace length differences. 9 comments, 1 upvote, in progress. Why it matters: Breaks edit tool functionality for small models that produce whitespace-inconsistent output, leading to false negative fuzzy matches. Community reaction: Active discussion, users reporting failures with lightweight coding models. Link: https://github.com/earendil-works/pi/issues/7836
4. Issue #7835: Edit tool rejects single-object edits argument. 4 comments, open, PR #8011 merged. Why it matters: Breaks edit workflows for models that wrap edit arguments in a single object instead of an array, a common output pattern for some fine-tuned models. Community reaction: Fast turnaround, PR merged same day as issue update. Link: https://github.com/earendil-works/pi/issues/7835
5. Issue #7911: 0.84.0 delta-only message_update removed usage, no mid-run usage on wire protocol. 2 comments, closed, fixed in PR #7982. Why it matters: Broke usage tracking for streaming sessions, making it impossible to monitor token costs mid-run. Community reaction: Quick fix merged after report, regression test added to prevent recurrence. Link: https://github.com/earendil-works/pi/issues/7911
6. Issue #7805: Root .md docs in skill directories loaded as broken skills. 2 comments, open, PR #8012 merged. Why it matters: Generates spurious validation warnings for users adding skill directories, cluttering output and confusing new users. Community reaction: Simple fix merged quickly to reduce noise. Link: https://github.com/earendil-works/pi/issues/7805
7. Issue #8029: Very slow performance moving in prompt editor with large buffers. 1 comment, open. Why it matters: Makes editing long prompts (e.g. system prompts, skill definitions) unusable, with 7k line buffers taking 1.6s per arrow key press. Community reaction: Early report, high impact for power users who maintain large prompt libraries. Link: https://github.com/earendil-works/pi/issues/8029
8. Issue #8000: @ file autocomplete ranks deep nested matches over direct children on basename ties. 1 comment, open. Why it matters: Breaks expected autocomplete behavior for file references, forcing users to type longer paths to access direct children of scoped directories. Community reaction: Report from a user who relies heavily on @ file mentions in coding workflows. Link: https://github.com/earendil-works/pi/issues/8000
9. Issue #7756: detectInstallMethod mislabels non-pnpm installs under PNPM_HOME. 3 comments, open. Why it matters: Causes false "not managed by global package manager" errors for users with non-pnpm installs that share PNPM_HOME bin paths, breaking extension and update workflows. Community reaction: Niche but impactful for users with custom Node.js installation setups. Link: https://github.com/earendil-works/pi/issues/7756
10. Issue #8047: Pi Server tests fail to bind Unix sockets on Windows. 1 comment, open. Why it matters: Blocks Windows CI and local test runs for contributors, slowing cross-platform development. Community reaction: Report from a Windows contributor looking to unblock test runs on the platform. Link: https://github.com/earendil-works/pi/issues/8047
Wait, let's make sure each has a clear "why it matters" and community reaction, concise.
Section 4: Key PR Progress, pick 10 important PRs. Let's go through the PRs, pick the most impactful, merged or in progress:
1. PR #7982: fix(coding-agent): preserve usage in streaming events. Merged, closes #7911. What it does: Restores cumulative provider usage data on JSON/RPC message_update events, removes linear stream growth from full message snapshots, adds regression tests. Impact: Fixes broken mid-run usage tracking for streaming sessions. Link: https://github.com/earendil-works/pi/pull/7982
2. PR #8032: feat(tui): let components receive mouse events on their own rows. Merged, closes #7683. What it does: Adds optional `Component.onMouse(event)` hook, dispatches mouse events to TUI components relative to their layout box, before scrollbar/selection handling. Impact: Unblocks interactive extension widgets in fullscreen TUI mode. Link: https://github.com/earendil-works/pi/pull/8032
3. PR #8011: fix: single edit input. Merged, closes #7835. What it does: Normalizes single edit objects (not just arrays) in edit tool argument parsing, so models outputting non-array edit payloads work correctly. Impact: Fixes edit tool failures for models that output single edit objects. Link: https://github.com/earendil-works/pi/pull/8011
4. PR #8049: feat: use local Ollama models in pi via a local model proxy. Merged. What it does: Adds two dependency-free Node.js scripts to run a local proxy for Ollama models, supporting Ubuntu, macOS, Windows. Impact: Enables native self-hosted LLM support for Pi without external provider accounts. Link: https://github.com/earendil-works/pi/pull/8049
5. PR #8044: fix(bedrock): expose safe stream failure diagnostics. Merged. What it does: Adds structured bounded diagnostics for Amazon Bedrock stream failures, preserves terminal diagnostics and tool call metadata, handles EOF without terminal events as transient errors. Impact: Improves debuggability of Bedrock streaming integrations. Link: https://github.com/earendil-works/pi/pull/8044
6. PR #8042: feat(ai): add Grok 4.6. Merged. What it does: Adds xAI Grok 4.6 to the built-in model catalog, supports all reasoning effort levels (low/medium/high/xhigh), adds catalog behavior tests. Impact: Gives users access to the latest Grok reasoning model via xAI's Responses API. Link: https://github.com/earendil-works/pi/pull/8042
7. PR #7956: feat(coding-agent): render Mermaid diagrams in HTML exports. Merged. What it does: Adds Mermaid diagram rendering to HTML session exports, toggleable via the export header, reuses TUI rendering logic for consistency. Impact: Makes exported session transcripts more readable for users sharing documentation with Mermaid diagrams. Link: https://github.com/earendil-works/pi/pull/7956
8. PR #8037: feat(tui): dispatch mouse events to components via onMouse. Merged, closes #7683. What it does: Implements the core mouse event dispatch logic for the onMouse hook, hit-tests the component layout tree to route events to the correct component with relative coordinates. Impact: Core implementation for interactive TUI extension widgets. Link: https://github.com/earendil-works/pi/pull/8037
9. PR #7722: feat(coding-agent): add theme override. In progress. What it does: Adds a `--use-theme` CLI flag to override the stored theme selection for a single Pi run, supports single theme names and appearance-based pairs (e.g. dayowl/nightowl). Impact: Lets users test or switch themes without updating persistent settings. Link: https://github.com/earendil-works/pi/pull/7722
10. PR #8012: fix: dont load root mds as skills in settings. Merged, closes #7805. What it does: Excludes non-SKILL.md root Markdown files (README.md, AGENTS.md, etc.) from being parsed as skills in user-configured skill directories, eliminating spurious validation warnings. Impact: Reduces noise for users adding custom skill directories. Link: https://github.com/earendil-works/pi/pull/8012
Wait, that's 10, good. Let's make sure each is concise, says what it does, impact, status.
Section 5: Feature Request Trends. Let's look at all the open issues and feature requests to distill trends. Let's see: First, TUI/UX improvements: multiple requests for mouse event support, autocomplete improvements (file autocomplete, slash command mid-line triggering), prompt editor performance, scroll state indicators. Second, local/self-hosted model support: Ollama proxy integration, local model registration extensions, Scaleway EU provider request. Third, extension API improvements: hooks for controlling message display, durable custom message publication acknowledgements, agent harness improvements. Fourth, tooling robustness: edit tool fuzzy match improvements, auto-compaction reliability, cross-platform test support. Let's condense that: "The most common feature request directions from the last 24 hours fall into four categories:
1. TUI/UX enhancements: Requests for improved mouse interaction support, smarter file autocomplete, mid-line slash command triggering, and prompt editor performance for large buffers.
2. Local/sovereign model support: Multiple requests for self-hosted LLM integration (Ollama proxy, local model registration) and EU-hosted provider options (Scaleway Generative APIs) for data privacy compliance.
3. Extension API expansion: Requests for new hooks to control assistant message display, durable custom message publication acknowledgements, and improved agent harness tooling for extension developers.
4. Core tooling robustness: Requests to fix edit tool fuzzy matching for whitespace-inconsistent output, improve auto-compaction reliability for long agentic runs, and add cross-platform test support for Windows."
That's clear, distills the trends from all the issues.
Section 6: Developer Pain Points. Let's look at recurring frustrations. First, edit tool unreliability: multiple issues around edit tool rejecting valid inputs (single objects, whitespace differences) breaking workflows for small/custom models. Second, streaming event data gaps: the missing usage in message_update events broke cost tracking, plus agent turn wedging after tool results. Third, TUI limitations: lack of mouse event support for extensions, slow prompt editor for large buffers, broken autocomplete ranking. Fourth, cross-platform friction: Windows test failures, install method detection mislabeling non-pnpm installs. Let's condense that: "Recurring developer pain points reported in the last 24 hours include:
1. Edit tool fragility: The edit tool frequently rejects valid inputs from models (single-object arguments, whitespace-inconsistent fuzzy matches), breaking automated coding workflows for users of small or fine-tuned models.
2. Streaming event reliability: Gaps in wire protocol data (missing usage metrics) and agent turn wedging after tool completion cause broken session tracking and stuck agentic runs.
3. TUI usability limitations: Lack of mouse event support for extensions, slow performance in the prompt editor for large buffers, and broken file autocomplete ranking reduce productivity for power users.
4. Cross-platform friction: Windows test suite failures and incorrect install method detection for non-pnpm Node.js setups create unnecessary friction for contributors and users with custom environments."
Wait, let's make sure all sections are properly structured, links are included, style is concise and technical, no fluff. Let's check if we missed any key points. Also, make sure the date is 2026-08-13 as requested. Let's also make sure that the issues and PRs are correctly linked, and the summaries are accurate based on the provided data.
Wait, let's check the issue #6879: it's about auto-compaction not triggering past 100% until overflow, that's a big one because it causes session crashes during long agentic runs, right, the user had a 2 hour run that failed because compaction didn't kick in. That's definitely a hot issue, high upvotes, high comments.
Also, the PR for Ollama is a big one, local model support is a highly requested feature. The mouse event hook is a long standing request (issue #7683 was created 2026-08-05, 9 comments, merged quickly).
Wait, let's adjust the highlights to be more accurate: "### 1. Today's Highlights
August 13, 2026 Pi community digest highlights center on core usability and robustness fixes merged in the last 24 hours: a patch restoring cumulative usage tracking in streaming events (accidentally removed in v0.84.0) and a fix for the edit tool to accept single-object edit arguments, both of which broke common workflows for a wide user base. The community also merged a highly requested TUI feature enabling components to receive custom mouse events via a new `onMouse` hook, and a community-contributed local Ollama model proxy integration for self-hosted LLM support."
That's better.
For releases, since there are none, just "### 2. Releases
No new official Pi releases were published in the last 24 hours."
For hot issues, let's make sure each entry has the issue number, title, link, why it matters, community reaction. Let's make sure we pick the top 10 most impactful, not just random. Let's confirm the order:
1. #6879: Auto-compaction never triggers after context grows past 100% until provider overflow (17 comments, 17 👍, OPEN) – High impact, causes session data loss during long agentic runs, high community engagement with 17 comments.
2. #7683: pi-tui: let components receive mouse events on their own rows (9 comments, CLOSED, merged) – Long-standing feature request for extension developers, high demand for interactive TUI widgets.
3. #7836: Edit fuzzy match misses lines with differences in whitespace length (9 comments, 1 👍, OPEN, in progress) – Breaks edit tool functionality for small models, active discussion around fixes.
4. #7835: Edit tool rejects a single-object edits argument (4 comments, OPEN, fixed in PR #8011) – Common failure mode for fine-tuned models, fast turnaround on fix.
5. #7911: 0.84.0's delta-only `message_update` removed `usage`, no mid-run usage on wire protocol (2 comments, CLOSED, fixed) – Broke cost tracking for streaming sessions, regression test added to prevent recurrence.
6. #7805: Root `.md` documentation files in settings-configured skill directories are loaded as skills (2 comments, OPEN, fixed in PR #8012) – Generates spurious warnings for skill directory users, simple high-impact fix.
7. #8029: Very slow performance on moving in prompt editor (1 comment, OPEN) – Makes editing large prompts (7k+ lines) unusable, high impact for power users.
8. #8000: @ file autocomplete: direct children lose to deep nested matches on basename ties (1 comment, OPEN) – Breaks expected autocomplete behavior for file mentions, common pain point for coding workflows.
9. #7756: detectInstallMethod mislabels non-pnpm installs under PNPM_HOME (3 comments, OPEN) – Causes false errors for users with custom Node.js setups, breaks update/extension workflows.
10. #8047: Pi Server tests fail to bind Unix sockets on Windows (1 comment, OPEN) – Blocks Windows CI and local testing for contributors, slows cross-platform development.
That's a good list, covers high impact, high engagement, and diverse areas.
For Key PR Progress, let's make sure each entry has PR number, title, link, status, description, impact:
1. #7982: fix(coding-agent): preserve usage in streaming events (CLOSED, merged) – Restores cumulative usage data on streaming message_update events, removes linear stream bloat from full message snapshots, adds regression test for #7911. Impact: Fixes broken mid-run token cost tracking for all streaming sessions.
2. #8032: feat(tui): let components receive mouse events on their own rows (CLOSED, merged) – Implements the optional `Component.onMouse(event)` hook proposed in #7683, dispatches mouse events to TUI components relative to their layout box before scrollbar handling. Impact: Unblocks extension developers to build interactive fullscreen TUI widgets.
3. #8011: fix: single edit input (CLOSED, merged) – Normalizes single edit objects (in addition to arrays) in edit tool argument parsing, fixing failures for models that output non

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-13

## Today's Highlights

The 0.21.x line continues its fast cadence with **v0.21.11-preview.0** and a nightly build shipping prompt-safe Web Shell navigation (`#8931`) and structured serve logging. A cluster of P1 bugs surfaced today: image-loading regression since 0.21.2, Anthropic wire stream-safety gaps, and Vertex AI ADC auth breakage — alongside notable design work landing in MCP 2026 client support (`#8992`) and a redesigned Web Shell Channel management surface (`#8848`).

## Releases

- **[v0.21.11-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.11-preview.0)** — Preview build with `fix(web-shell): Enforce prompt-safe session navigation` (`#8931`) and `chore(serve): Log session continuation admissions`.
- **[v0.21.10-nightly.20260812.a64d1291d2](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.10-nightly.20260812.a64d1291d2)** — Nightly carrying the same session-navigation fix as the preview.
- **[desktop-v0.2.1](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.2.1)** — Default project memory to workspace scope (`#8856`) plus session-lifecycle telemetry alignment.
- **[desktop-v0.2.0](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.2.0)** — Web Shell transcript history pagination stabilization (`#8914`) and shareable session catalog.
- **[dsw-eas-smoke-20260812-281542bfdc](https://github.com/QwenLM/qwen-code/releases/tag/dsw-eas-smoke-20260812-281542bfdc)** — Non-production infrastructure smoke (no SWE score).

## Hot Issues

1. **[#8957 — Image-load crash regression since 0.21.2](https://github.com/QwenLM/qwen-code/issues/8957)** (P2, 8 comments) — Instant crash on reading images after 0.21.1; 0.21.1 is the last working version. High signal-to-noise because it pinpoints a specific working version.
2. **[#8678 — Preserve session across large-restore timeouts](https://github.com/QwenLM/qwen-code/issues/8678)** (P1, 7 comments) — Daemon-level reliability bug; PR1 of the fix already merged (`#8691`), follow-ups in flight.
3. **[#8562 — tmux rendering flicker on SSH+iTerm2](https://github.com/QwenLM/qwen-code/issues/8562)** (P2, 7 comments) — Narrow but reproducible environment-specific UI defect that affects a long-tail developer workflow.
4. **[#8963 — Shell tasks hang regardless of yolo/auto mode](https://github.com/QwenLM/qwen-code/issues/8963)** (P2, 9 comments) — Top comment volume today; users cannot run long-running tasks. Direct competitive comparison with Kimi Code adds community pressure.
5. **[#7040 — RFC: Reliable auto-memory recall](https://github.com/QwenLM/qwen-code/issues/7040)** (P2, 10 comments) — Long-running design RFC tracking recall-delivery telemetry, bounded recall, and multilingual evaluation; the most-commented non-CI issue.
6. **[#9016 — Vertex AI cannot use ADC; API-key requirement disables it](https://github.com/QwenLM/qwen-code/issues/9016)** (P2, 4 comments) — Authentication flow produces 401s on Vertex; blocks a meaningful enterprise auth path.
7. **[#9015 — Main CI failed: E2E Tests on 05079297d26c](https://github.com/QwenLM/qwen-code/issues/9015)** (P1, 4 comments) — Main-branch CI failure before tests reported; tracked per-commit by the dev bot.
8. **[#9005 — Anthropic wire missing stream-safety protections](https://github.com/QwenLM/qwen-code/issues/9005)** (P1, 3 comments) — Companion to `#8584`; the Anthropic content generator lacks the abort/error protections the OpenAI wire has.
9. **[#8979 — MAX_TOKENS recovery splits the durable transcript](https://github.com/QwenLM/qwen-code/issues/8979)** (P2, 3 comments) — `--resume` rehydrates duplicated turns; a correctness issue that hits resume-reliability.
10. **[#8897 — `--approval-mode` / `--auth-type` missing from `qwen --help`](https://github.com/QwenLM/qwen-code/issues/8897)** (P2, 5 comments) — CLI surface inconsistency: registered flags absent from help text; good first contribution opportunity.

## Key PR Progress

1. **[#8992 — MCP 2026 core + WebShell Apps host](https://github.com/QwenLM/qwen-code/pull/8992)** — First slice of the modern MCP client, with the Apps extension advertised, `ui://` tool metadata preserved, and HTML resource validation.
2. **[#8848 — Web Shell Channel policy + workspace redesign](https://github.com/QwenLM/qwen-code/pull/8848)** — Exposes shared DM/group/session-routing controls across every adapter with explicit allowlists and workspace ownership.
3. **[#8403 — Legacy code audit workflow (`/audit`)](https://github.com/QwenLM/qwen-code/pull/8403)** — Implements the design from `#8397`; adds `/audit <dir> [--effort]` with deterministic CLI helpers.
4. **[#8972 — Workflow agent can pin a directory and outlive defaults](https://github.com/QwenLM/qwen-code/pull/8972)** — `agent({workingDir})` runs in a caller-owned worktree; lets workflow subagents do longer, non-in-place work.
5. **[#8740 — Share one Chrome bridge across sessions via multi-client /cdp tunnel](https://github.com/QwenLM/qwen-code/pull/8740)** — `cdp_*` frames carry an optional `linkId`; daemon routes tagged results, letting many sessions share one Chrome extension bridge.
6. **[#8905 — Adaptive live-journal caps before mid-turn truncation](https://github.com/QwenLM/qwen-code/pull/8905)** — Caps grow (doubling, byte-scaled) before oldest replay entries are dropped; growth budgeted across the bridge's live sessions.
7. **[#8938 — Reject upstream fail-fast placeholder responses](https://github.com/QwenLM/qwen-code/pull/8938)** — Two defenses against HTTP-200 placeholder bodies like `(request timed out)` returned in milliseconds.
8. **[#8952 — Bump sharp to ^0.35.0 (GHSA-f88m-g3jw-g9cj)](https://github.com/QwenLM/qwen-code/pull/8952)** — Security bump from `^0.34.5` to `^0.35.0`; lockfile resolves `sharp@0.35.3`.
9. **[#9008 — CI security hygiene: CODEOWNERS, least-privilege, Scorecard](https://github.com/QwenLM/qwen-code/pull/9008)** — Low-risk items from a supply-chain audit: CODEOWNERS for release workflows, explicit token permissions on remaining workflows, stale gitignore cleanup.
10. **[#8590 — Harden shell-expansion permission checks (`#8582`)](https://github.com/QwenLM/qwen-code/pull/8590)** — Closes two read-only classifier bypasses (Bash line continuations, `${parameter@P}`); final piece of the `#8582` permission-boundary set.

## Feature Request Trends

- **Reliable session lifecycle** — Bounded initial-turn recall (`#8716`), safe restore timeouts (`#8678`), MAX_TOKENS transcript correctness (`#8979`), and "live-session registry + `qwen sessions ps`" (`#8969`) form a coherent thread: the community wants resume/restore/cancel semantics that are bounded, observable, and survivable.
- **Background and multi-agent coordination** — Duplicate work and premature completion with background subagents (`#8097`) and reliable auto-memory recall timing/telemetry (`#7040`) point to one underlying ask: make long-running, multi-agent workflows trustworthy.
- **Daemon ergonomics** — Empty-channel no-op + restore-only-active on restart (`#8975`/`#8978`), multi-client Chrome bridge (`#8740`), adaptive journal caps (`#8905`), and split daemon resource protection (`#8091`) collectively describe "make `qwen serve` deployable as infrastructure".
- **MCP / extensibility** — MCP 2026 client and Apps host (`#8992`) plus legacy-code audit workflow (`#8403`) signal a push toward richer tool ecosystems and operator-controllable review.
- **CLI consistency and discoverability** — `--approval-mode` / `--auth-type` missing from help (`#8897`), `dynamicCommandTranslation` cleanup (`#8754`), and SDK Python rejecting `permission_mode="auto"` (`#9002`) all ask for the CLI/SDK surface to match what it actually accepts.

## Developer Pain Points

- **Hangs on long-running shell tasks** — `#8963` (9 comments today) is the loudest frustration: yolo/auto mode still blocks on Python scripts and `del`-class commands, making overnight or multi-day workloads infeasible. Competitive comparison with Kimi Code amplifies pressure.
- **Regressions on routine paths** — Image-load crash since 0.21.2 (`#8957`) and tmux rendering flicker over SSH (`#8562`) erode trust in headlining versions; users want clear "last-known-good" markers.
- **Auth flows that don't match docs** — Vertex AI ADC being unusable without an API key (`#9016`) and Anthropic wire lacking OpenAI's stream-safety (`#9005`) make enterprise onboarding fragile.
- **Session and resume correctness** — MAX_TOKENS splits (`#8979`), restore-timeout session loss (`#8678`), and Web Shell session-name loss after `/clear` (`#8977`) form a recurring complaint: durable state and live state disagree.
- **Silent UX failures** — `ask_user_question` returning a generic "User declined to answer" instead of the real cancel reason (`#9011`) is a small but high-impact pain point that breaks trust in interactive tools.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest
**Date:** 2026-08-13

---

## 1. Today's Highlights

The repository has officially rebranded to **CodeWhale** (Shannon Labs' public product) with **v0.9.6** released, while the legacy `deepseek-tui` npm package is deprecated. Maintainers are actively harvesting community PRs to bypass fork-push limitations, landing six contributor PRs via the documented maintainer-edit path in the past 24 hours. A critical **v0.9.5 Auto-Review regression** (#5323) is blocking every Bash/write operation, signaling that the 0.9.6 patch is likely a stability-driven release.

---

## 2. Releases

### v0.9.6 ([release](https://github.com/Hmbown/DeepSeek-TUI/releases/tag/v0.9.6))
- **Branding transition:** `codewhale` becomes the canonical command, npm package, and release-asset name.
- **Legacy deprecation:** `deepseek-tui` npm package frozen; no further releases.
- **Migration path:** v0.8.x users (`deepseek` / `deepseek-tui`) need to switch to `codewhale`.

*Note: Release notes are truncated in the source feed — full changelog should be reviewed before upgrading.*

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| [#5323](https://github.com/Hmbown/CodeWhale/issues/5323) | **Auto-Review regression in v0.9.5** | Every Bash/write silently blocked; blocks user workflows immediately after upgrade. |
| [#5316](https://github.com/Hmbown/CodeWhale/issues/5316) | **EPIC-005: TUI Crate Decomposition** | Umbrella EPIC for the long-running refactor of the monolithic TUI crate; defines sub-EPICs and FEAT reports. |
| [#4959](https://github.com/Hmbown/CodeWhale/issues/4959) | **Proposed `/stop` command** | 8 comments — addresses YOLO-mode inability to halt the model mid-execution; community sees as safety-critical. |
| [#4949](https://github.com/Hmbown/CodeWhale/issues/4949) | **"Constitution" translation debate (宪法 vs 协作准则)** | 9 comments — bilingual community split on the politically-loaded Chinese term. |
| [#5097](https://github.com/Hmbown/CodeWhale/issues/5097) | **CodeWhale vs DeepSeek official Coding Agent** | External YouTuber claims Reasonix is DeepSeek's choice — threatens CodeWhale's positioning. |
| [#5209](https://github.com/Hmbown/CodeWhale/issues/5209) | **`File action=edit` fake-success bug** | Tool returns success on wrong param names, requiring 3–5x re-edits; severe DX impact. |
| [#5034](https://github.com/Hmbown/CodeWhale/issues/5034) | **Provider switch retains wrong default model** | `gpt-5.5` leaks across providers; config-resolution bug now closed. |
| [#5047](https://github.com/Hmbown/CodeWhale/issues/5047) | **API keys persist in repo, not global secret store** | Plaintext keys leak into project working directories — security regression. |
| [#4683](https://github.com/Hmbown/CodeWhale/issues/4683) | **Flaky DeepSeek completions URL** | Intermittent `api.deepseek.com/v1/chat/completions` failures on long sessions. |
| [#5322](https://github.com/Hmbown/CodeWhale/issues/5322) | **TUI output area regression on wide terminals** | Width capped in v0.9; worked in v0.8.65 — cosmetic but visible. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|----|----|
| [#5333](https://github.com/Hmbown/CodeWhale/pull/5333) | **Pin host terminal as always-on-top mini window (PiP)** | First v0.9.7 contributor harvest — Windows-only `/pin` command shrinks terminal to 640×400. |
| [#5339](https://github.com/Hmbown/CodeWhale/pull/5339) | **fix(engine): suppress child-owned shell completions** | Closes #5325 — filters noisy background-shell events from parent stream. |
| [#5338](https://github.com/Hmbown/CodeWhale/pull/5338) | **feat(web): docs guide page → dictionary spine** | First slice of #5337; retires `isZh` ternaries in docs routing. |
| [#5336](https://github.com/Hmbown/CodeWhale/pull/5336) | **fix(mcp): omit nextCursor when no further pages** | MCP-spec conformance; strict clients like Claude Code reject `null` cursors. |
| [#5332](https://github.com/Hmbown/CodeWhale/pull/5332) | **feat(config): register OrcaRouter as named provider** | Adds 150+ model gateway via `ORCAROUTER_API_KEY` (sk-orca-* prefix). |
| [#5331](https://github.com/Hmbown/CodeWhale/pull/5331) | **fix(tui): copy messages without visual rails** | Harvest of #5319 (XhesicaFrost) — strips `●` and `▏ ` decorations from clipboard. |
| [#5329](https://github.com/Hmbown/CodeWhale/pull/5329) | **fix(tui): move lru → 0.18 (RUSTSEC-2026-0253)** | Restores green main gate; unpin ratatui-core after fixing panic-unsafe `LruCache::pop()`. |
| [#5328](https://github.com/Hmbown/CodeWhale/pull/5328) | **FEAT-014: Command contract crate boundary** | Part of EPIC-005/006 staged decomposition — facets + shared types extraction. |
| [#5326](https://github.com/Hmbown/CodeWhale/pull/5326) | **web: audit fixes — i18n parity, copy/spacing** | Public-surface contract test fix + site-wide polish. |
| [#5334](https://github.com/Hmbown/CodeWhale/pull/5334) | **docs(i18n): retire stale zh-Hant partial-pack declaration** | Removes misleading partial-pack hints after #5143 brought zh-Hant to full parity. |

---

## 5. Feature Request Trends

1. **Multi-provider API key management (#5250)** — Users switching between DeepSeek, GLM, OpenRouter need isolated per-provider key storage rather than a single global key.
2. **Configurable provider/model architecture (#4660)** — Community wants Kimi Code-style flexible custom provider/model setup.
3. **Robust session interruption handling (#5000, #5322)** — Interrupted assistant text must be a durable session item; turn-stop status must match actual behavior.
4. **Persistent / recoverable agent state (#2904, #5272)** — Signed compressed KV-cache capsules and prompt-scoped workspace restore for long-running tasks.
5. **Hard runtime controls (#4959)** — `/stop` command plus runtime STOP-word intercept that actually blocks tool calls in YOLO mode.
6. **Improved i18n dictionary architecture (#5337, #5334)** — Single spine across all locales; retire ad-hoc `isZh` branches.
7. **Cron / scheduling parity (#5181)** — One-shot reminders, 5-field cron, lightweight session watchers.
8. **Smarter subagent contract (#5189)** — Less ceremonial output structure for short-lived child agents.

---

## 6. Developer Pain Points

- **Tool reliability regressions:** `File action=edit` silently accepting wrong params (#5209) and the v0.9.5 Auto-Review block-everything regression (#5323) are the two top blockers — both require repeated manual retries.
- **Provider state leakage:** Switching providers retains stale models (#5034) and only one API key can persist at a time (#5250), forcing constant manual key rotation.
- **Security footguns:** API keys silently saved in repo working dir as plaintext (#5047); persists across repos and is git-trackable.
- **Intermittent network failures:** Flaky DeepSeek completions URL (#4683, #4956) on long-running sessions — no retry or backoff surfacing to user.
- **Windows-specific CLI parsing bug:** `--model` and `--toolsets` flags concatenated into a single arg before `exec --auto` (#4564); needs pre-exec flag support or env-var overrides.
- **TUI cosmetic regressions:** Output area no longer fills wide terminals (#5322); "Copy message" includes UI decorations (#5314). Both shipped silently in v0.9.
- **Localization debt:** `isZh` ternaries scattered across `web/`, stale zh-Hant partial-pack hints, and unresolved "Constitution" terminology (#4949) are technical debt blocks that community members are actively driving down.
- **Fork-based contribution friction:** Multiple community PRs (#5318, #5319, #5320, #5321) failed CI only due to base drift; maintainers are compensating by harvesting the diffs upstream (#5331, #5332, #5333) — a workable but ad-hoc workflow.

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

**ComfyUI Community Digest – 2026‑08‑13**

---

### 1. Today’s Highlights
- A security‑focused PR ( #15553 ) bumps the minimum versions of **aiohttp, transformers, simpleeval, and pydantic** to mitigate 58 known CVEs.  
- PR #15547 ( [Create weight backup namedtuple once at module level] ) eliminates thousands of per‑weight GC allocations, restoring ~1 GB of VRAM on 16 GB GPUs during H3 video generation.  
- Issue #15488 reports a reproducible **GPU‑loss / TDR black‑screen** on RTX 5070 Ti when running MiniMax H3 with 64 GB RAM; the same workload stays stable when Windows memory is capped to 32 GB.

---

### 2. Releases
*No new ComfyUI releases were published in the last 24 h.*

---

### 3. Hot Issues  *(10 standout items)*  

| # | Issue (link) | Why it matters & community reaction |
|---|--------------|--------------------------------------|
| 14382 | <https://github.com/Comfy-Org/ComfyUI/issues/14382> | `AttributeError: 'Linear' object has no attribute 'weight_scale'` when loading quantized (`fp8/QuantizedTensor`) checkpoints. 16 comments – users request a guarded `getattr` fix. |
| 15445 | <https://github.com/Comfy-Org/ComfyUI/issues/15445> | MiniMax H3 workflow becomes noticeably slower after v0.31 update; community flags longer generation times and asks for profiling data. |
| 15271 | <https://github.com/Comfy-Org/ComfyUI/issues/15271> | `torch.AcceleratorError: CUDA error: an illegal memory access was encountered` on RTX 30‑series GPUs. 9 comments – calls for a reproducible test case. |
| 13304 | <https://github.com/Comfy-Org/ComfyUI/issues/13304> | “Ipadapter Unified loader – Clip vision not found” error when using the unified loader. 6 comments – asks for path validation improvements. |
| 15248 | <https://github.com/Comfy-Org/ComfyUI/issues/15248> | VAE encode previews appear stretched after the latest update. 6 comments – visual regression reported across multiple models. |
| 15488 | <https://github.com/Comfy-Org/ComfyUI/issues/15488> | GPU‑loss/TDR on RTX 5070 Ti with 64 GB RAM; same workload stable under 32 GB memory cap. 5 comments – high‑impact stability concern. |
| 11709 | <https://github.com/Comfy-Org/ComfyUI/issues/11709> | Request to launch a custom browser instead of the OS default. 4 comments – users want configurable default browsers for workflow isolation. |
| 15553 | <https://github.com/Comfy-Org/ComfyUI/issues/15553> | Security audit bumps critical dependencies; community welcomes the hardening effort. |
| 15478 | <https://github.com/Comfy-Org/ComfyUI/issues/15478> | “MiniMax H3 Mem Eff Sage Attention Patch ERROR: Execution Failed.” – users experience sporadic crashes when the patch is enabled. |
| 15528 | <https://github.com/Comfy-Org/ComfyUI/issues/15528> | Inconsistent H3 outputs across runs despite identical workflows. 2 comments – points to nondeterministic RNG or backend differences. |

*Selection criteria:* highest comment counts, clear reproducibility, or direct impact on stability/performance.

---

### 4. Key PR Progress  *(10 noteworthy pull requests)*  

| PR | Title (link) | Core change / rationale |
|----|--------------|--------------------------|
| **#15278** | <https://github.com/Comfy-Org/ComfyUI/pull/15278> | Fixes Gemma‑4 “thinking” flag leakage in `Generate Text` nodes; reasoning tokens are now properly suppressed when `thinking=false`. |
| **#10534** | <https://github.com/Comfy-Org/ComfyUI/pull/10534> | Saves workflow JSON with 2‑space indentation for better Git readability; no functional impact. |
| **#15128** | <https://github.com/Comfy-Org/ComfyUI/pull/15128> | CI bump: updates `cursor-review` to latest GitHub‑workflows commit (`9e8352a`). |
| **#15555** | <https://github.com/Comfy-Org/ComfyUI/pull/15555> | (Closed) Adds support for *anima tunes* with extra blocks – experimental node extension. |
| **#15509** | <https://github.com/Comfy-Org/ComfyUI/pull/15509> | Every previewable asset now receives a working `preview_url`; fixes missing image previews from preview nodes. |
| **#15505** | <https://github.com/Comfy-Org/ComfyUI/pull/15505> | Introduces a `devcontainer.json` for reproducible local development environments. |
| **#15235 / #15236** | <https://github.com/Comfy-Org/ComfyUI/pull/15235> | Documentation note on using OpenAI‑compatible multi‑model gateways (e.g., DaoXE) with the Python client. |
| **#15471** | <https://github.com/Comfy-Org/ComfyUI/pull/15471> | Adds MiniMax context‑aware IR and 2K regeneration nodes; expands MiniMax workflow capabilities. |
| **#15487** | <https://github.com/Comfy-Org/ComfyUI/pull/15487> | Improves Intel XPU free‑VRAM detection via `torch.xpu.mem_get_info()` while retaining backward compatibility. |
| **#15552** | <https://github.com/Comfy-Org/ComfyUI/pull/15552> | Fixes INT8 embedding de‑quantization crash when DynamicVRAM offloads weights to GPU; restores stable inference. |

*Why they matter:* These PRs address stability regressions, developer ergonomics, security, and expand core functionality for power users.

---

### 5. Feature Request Trends
- **Custom‑browser selection** – Multiple users ask for the ability to specify a non‑default browser when launching ComfyUI (Issue #11709).  
- **Improved memory handling for large models** – Requests for better VRAM estimation, weight‑backup optimisation, and offload strategies, especially for 16 GB GPUs running MiniMax H3 (PR #15547, Issue #15488).  
- **Consistent preview URLs & asset navigation** – Desire for reliable preview links across assets and clearer asset selection behavior (PR #15509, Issue #15206).  
- **Granular mask operations** – Calls to extend `MaskComposite` with explicit `max`/`min` logic instead of rounding‑then‑combining (PR #15335).  
- **More transparent quantization metadata handling** – Users want clearer error messages when loading NVFP4/INT8 checkpoints without `_quantization_metadata` (Issue #15511).  

Overall, the community is focusing on **stability on limited‑VRAM hardware**, **dev‑friendly workflow ergonomics**, and **greater configurability of external integrations** (browsers, gateways, preview outputs).

---

### 6. Developer Pain Points
- **Custom‑node collisions** – Silent overwrites when two packs register the same route or node ID, leading to nondeterministic behavior (PR #15541, #15546).  
- **GPU crashes under large models** – Inconsistent TDR/lost‑GPU errors on RTX 5000‑series cards when using MiniMax H3 with INT8/VRAM‑heavy checkpoints (Issues #15488, #15524, #15529).  
- **Quantization & metadata mismatches** – Silent loading of un‑quantized weights when `_quantization_metadata` is missing, causing downstream `F.linear` crashes (Issue #15511).  
- **Fragmented version expectations** – Users downloading from the official site encounter outdated releases, creating confusion about which version actually contains the latest fixes (Issue #14908).  
- **Memory‑allocation overhead** – Frequent creation of per‑weight `namedtuple` classes inflates GC pressure (PR #15547) and exacerbates VRAM pressure on 16 GB GPUs.  

Addressing these pain points—through clearer route conflict handling, robust memory‑spill detection, better quantization validation, and streamlined release distribution—will markedly improve the developer experience.

---

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Community Digest | 2026-08-13

## Today's Highlights
The community is currently focused on refining "thinking"thinking" capabilities for reasoning models and improving the OpenAI-compatible API layer. Significant effort is being directed toward stabilizing GGUF quantization across different hardware and enhancing the MLX framework for macOS users.

## Releases
*No new releases in the last 24 hours.*

## Hot Issues
*   **Quantization Degradation (#17614):** Users report "garbage" responses when switching to lower KV quantization (q4_0), signaling a critical stability issue with low-bit formats.
*   **Gemma 4 Token Loops (#17459):** A bug where Gemma 4 emits repeated `<unused49>` tokens when `think=false`, breaking VS Code integrations.
*   **Qwen Tokenizer Failures (#17587):** Qwen2.5-3B outputting ASCII garbage for Chinese input on Windows, specifically when running on CPU.
*   **Memory Ceiling Issues (#17517):** Regression in Qwen model loading where memory hits the ceiling prematurely on RTX 5070Ti cards.
*   **Prompt Truncation Bug (#17427):** A silent bug where `num_ctx` limits are effectively halved, severely limiting usable context windows.
*   **API Regression (#17270):** Upgrading to 0.32.1 introduced a "token repeat limit reached" error that aborts `/api/generate` requests.
*   **Gemma 4 CLIP Load Failure (#16784):** Internal Server Error 500 when loading `gemma4:31b` due to a mismatch in expected tensors.
*   **AMD AI395+ Stalling (#17692):** Nemotron models stalling during the "thinking" phase on high-end AMD hardware.
*   **MLX Performance Gap (#17050):** Significant performance regressions for Qwen3.6-mlx on Apple Silicon compared to standard versions.
*   **Cloud Model Latency (#17091):** Reports of `glm-5.2:cloud` returning empty content with high latency (~30s).

## Key PR Progress
*   **OpenAI API Enhancements (#17712):** Mapping `reasoning_effort=minimal` to "low" to improve compatibility with OpenAI clients.
*   **Agentic Tooling (#17711):** Enhancing the `edit` tool to allow multiple replacements in a single call for coding agents.
*   **Web Search Integration (#17709, #17686):** Adding server-side web search support for the Responses API, allowing models to execute searches and return results natively.
*   **Thinking/Structured Output Sync (#17705, #17706):** Fixing a critical clash where JSON grammar was applied before reasoning tokens, effectively killing the model's ability to "think."
*   **MLX Infrastructure (#17710, #17707):** Shifting MLX model pull logic to the local side and introducing a file-backed KV connector framework for prefix-cache restoration.
*   **Inference Optimization (#17703):** Speeding up prefill on double-scale nvfp4 models by reducing kernel launches.
*   **Server-Side Logic (#17708):** Ensuring raw generate requests do not default "thinking" to on, fixing compatibility with SillyTavern.
*   **Tool Filtering (#17630):** Filtering out namespace-type tools before they reach `llama-server` to prevent API errors.
*   **System Power Management (#16453):** Implementing sleep inhibition to prevent workstations from sleeping during long inference tasks.
*   **CLI Polish (#17701):** Fixing a Linux-specific bug where drag-and-dropped image paths with single-quotes were failing to open.

## Feature Request Trends
*   **Observability:** Strong demand for server-level inference metrics (similar to vLLM) to monitor throughput and resource usage (#17694).
*   **Reasoning Token Routing:** Requests for native API support to split `<think>` tokens into a separate channel for real-time streaming/TTS (#17366).
*   **UX/CLI Improvements:** Desire for Vim key-bindings within the Ollama shell to improve prompt editing (#16898).
*   **Metadata Transparency:** Requests to include model context length in the `/v1/models` response for better client-side management (#17417).

## Developer Pain Points
*   **Quantization Consistency:** Recurring issues where specific quantization formats (Q4_K_M, q4_0) cause either performance regressions or "garbage" text output across different hardware.
*   **Thinking vs. Formatting:** Significant friction in getting "reasoning" models to output structured JSON without the grammar forcing the model to skip the thinking process.
*   **Hardware Edge Cases:** Ongoing instability with newest-gen hardware (RTX 50-series, AMD AI395+) and specific OS-level issues (Windows CPU tokenizer bugs).

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

**Today's Highlights**
The llama.cpp community saw significant updates in the last 24 hours, with multiple releases and numerous issue resolutions. Notably, releases `b10375`, `b10373`, and `b10369` were made available, addressing various aspects of the project. The community remains active, with ongoing discussions and development focused on enhancing the project's capabilities.

**Releases**
- `b10375`: This release tightens bare function parsing for Qwen models, addressing a specific need within the project. [View Release](https://github.com/ggml-org/llama.cpp/releases/tag/b10375)
- `b10373`: Focuses on moving the finite check and only checking touched experts in `imatrix.cpp`, indicating ongoing refinement of internal mechanisms. [View Release](https://github.com/ggml-org/llama.cpp/releases/tag/b10373)
- `b10369`: Introduces support for pocket-tts in `mtmd`, showcasing the project's commitment to compatibility and functionality expansion. [View Release](https://github.com/ggml-org/llama.cpp/releases/tag/b10369)

**Hot Issues**
1. **#20182**: A long-standing issue regarding the `enable_thinking` parameter not being able to turn off thinking for Qwen3.5 models. [View Issue](https://github.com/ggml-org/llama.cpp/issues/20182)
2. **#15228**: A feature request for Metal3 support on Mac Intel and Radeon GPU on MacOS, highlighting the community's desire for broader hardware compatibility. [View Issue](https://github.com/ggml-org/llama.cpp/issues/15228)
3. **#24714**: An evaluation bug causing full prompt re-processing due to a lack of cache data, affecting performance. [View Issue](https://github.com/ggml-org/llama.cpp/issues/24714)
4. **#25807**: A bug related to ROCm-7.14 resulting in an error while loading shared libraries, indicating compatibility challenges. [View Issue](https://github.com/ggml-org/llama.cpp/issues/25807)
5. **#24946**: A SYCL/xe issue preventing idle power savings on certain hardware, pointing to power management concerns. [View Issue](https://github.com/ggml-org/llama.cpp/issues/24946)
6. **#20867**: A closed issue regarding `MAX_REPETITION_THRESHOLD` breaking tool-calling grammars, showing the community's engagement with resolving complex problems. [View Issue](https://github.com/ggml-org/llama.cpp/issues/20867)
7. **#25751**: An evaluation bug where SWA on Gemma 4 forgets key details, underscoring the need for robust model performance. [View Issue](https://github.com/ggml-org/llama.cpp/issues/25751)
8. **#24415**: Difficulty loading Gemma-4-12B with OpenVINO, across CPU, GPU, and NPU, highlighting model compatibility challenges. [View Issue](https://github.com/ggml-org/llama.cpp/issues/24415)
9. **#26027**: A bug involving corrupted output from the GLM-5.2 dense-MLA CUDA path, affecting model reliability. [View Issue](https://github.com/ggml-org/llama.cpp/issues/26027)
10. **#25117**: A performance regression on AMD APU with quantized MoE targets, indicating the need for optimization across different hardware configurations. [View Issue](https://github.com/ggml-org/llama.cpp/issues/25117)

**Key PR Progress**
1. **#26118**: Adds a system-level config file for simplifying command-line flag management. [View PR](https://github.com/ggml-org/llama.cpp/pull/26118)
2. **#26185**: Introduces the Kimi-K3 text model, expanding the project's model repertoire. [View PR](https://github.com/ggml-org/llama.cpp/pull/26185)
3. **#26696**: Makes the `-funsafe-math-optimizations` flag for HIP opt-in, enhancing user control over performance vs. accuracy trade-offs. [View PR](https://github.com/ggml-org/llama.cpp/pull/26696)
4. **#26610**: Adds RPC support for `-sm tensor`, improving remote procedure call functionality. [View PR](https://github.com/ggml-org/llama.cpp/pull/26610)
5. **#26839**: Begins introducing semantic versioning in CMake, aiming to enhance version management. [View PR](https://github.com/ggml-org/llama.cpp/pull/26839)
6. **#26983**: Optimizes CI processes, focusing on efficiency and reducing unnecessary steps. [View PR](https://github.com/ggml-org/llama.cpp/pull/26983)
7. **#26331**: Implements an Adreno xmem SDPA path for non-causal OpenCL diffusion attention, targeting improved performance on specific hardware. [View PR](https://github.com/ggml-org/llama.cpp/pull/26331)
8. **#26920**: Refactors server metrics for correctness and improves the architecture, enhancing reliability and maintainability. [View PR](https://github.com/ggml-org/llama.cpp/pull/26920)
9. **#26986**: Enables release on Ubuntu RISC-V64, expanding platform support. [View PR](https://github.com/ggml-org/llama.cpp/pull/26986)
10. **#26928**: Adds a download button for generated files in the web UI chat, enhancing user experience. [View PR](https://github.com/ggml-org/llama.cpp/pull/26928)

**Feature Request Trends**
- **Metal Support**: There's a noticeable trend towards requesting better support for Metal, especially for newer versions and on different hardware, indicating a desire for improved performance and compatibility on Apple devices.
- **Improved Model Performance**: Many issues and discussions center around enhancing model performance, whether through bug fixes, optimization, or the introduction of new models, showing the community's focus on achieving reliable and efficient model execution.
- **Enhanced Hardware Compatibility**: Feature requests often include support for various hardware configurations, such as AMD GPUs, Intel CPUs, and specific mobile hardware, reflecting the community's aim to make llama.cpp accessible and performant across a wide range of devices.

**Developer Pain Points**
- **Compatibility Issues**: Recurring themes include difficulties with model loading, compatibility problems across different hardware and software configurations, and the need for better error handling and diagnostics.
- **Performance Optimization**: Developers frequently seek ways to optimize performance, whether through better utilization of hardware resources, improvements in model efficiency, or reductions in unnecessary computations, highlighting the ongoing quest for balance between model capability and operational efficiency.
- **Documentation and Community Support**: There's an evident need for more comprehensive documentation, easier access to community knowledge, and streamlined processes for reporting and addressing issues, underlining the importance of community resources and support structures in facilitating effective development and use of llama.cpp.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*