# AI CLI Tools Community Digest 2026-10-06

> Generated: 2026-10-05 22:15 UTC | Tools covered: 12

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

**Today's Highlights — 2026-10-06**

1. **llama.cpp v0.6.0** — New `llama_batch_ext` API, GLM-5.3-Flash + Clef model support, MTP speculative decoding. https://github.com/ggerganov/llama.cpp/releases/tag/v0.6.0

2. **OpenAI Codex v0.160.1** — Critical Windows fix preserving `SYSTEMROOT`/`TEMP`/`TMP` for remote stdio MCP servers (#51121). https://github.com/openai/codex/pull/51121

3. **GitHub Copilot CLI v1.0.92** — `copilot config` subcommands, Ctrl+E env picker, Entra MCP silent renewal, legacy HTTP+SSE removal. https://github.com/github/copilot-cli

4. **Qwen Code v0.25.0** — Workspace-agent collaboration feature, managed-runtime overhaul, Desktop bundles new CLI. https://github.com/QwenLM/qwen-code

5. **Pi v1.0.4** — Wildcard tool-pattern filtering (`--tools`/`--exclude-tools`), `--no-mcp` flag, Azure Foundry Chat Completions (v1.0.3). https://github.com/badlogic/pi-mono/releases/tag/v1.0.4

6. **ComfyUI** — Silent NaN cluster: CFGNorm, KarrasScheduler, ExponentialScheduler return all-NaN images with no error; multiple fix PRs merged (#16802, #16801, #16795, #16796). https://github.com/Comfy-Org/ComfyUI

7. **Ollama** — Tool-call parser fragility dominates: Qwen3.8 205k-context loops return 500 (#17778, 48 comments), qwen3.6 template mismatch (#16383); PRs #18802/#18803/#18804/#18697 target parser/streaming fixes. https://github.com/ollama/ollama

8. **OpenAI Codex** — Branch selection UI removed from app (#49532, 80👍), top community demand for restore. https://github.com/openai/codex/issues/49532

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

The user wants a Claude Code Skills community highlights report based on the provided data from github.com/anthropics/skills. I need to structure it into 4 sections:

1. Top Skills Ranking - 5-8 most-discussed Skills (PRs) by comments/attention
2. Community Demand Trends - From Issues, distill most-anticipated new Skill directions
3. High-Potential Pending Skills - Active-comment PRs not yet merged
4. Skills Ecosystem Insight - One-sentence summary

Looking at the PR data provided:
- #1298 fix(skill-creator): isolate trigger evals... (comments: undefined, but top of list)
- #1742 fix(mcp-builder): support mcp>=2...
- #1771 feat(skills): add proofcore-contract-auditor...
- #1734 Detect orphaned docx comments
- #1703 Add md2video-audio skill
- #1245 Add notion-spec-to-implementation and quantitative-resume-auditor skills
- #1792 fix(docx): report LibreOffice timeout...
- #1730 fix(claude-api): replace dead URLs...
- #525 Add pyxel skill for retro game development
- #514 Add document-typography skill...
- #1681 fix(skill-creator): support direct execution...
- #1615 Add scnet-hpc skill
- #822 feat: add AWT (AI Watch Tester)...
- #538 fix(pdf): correct case-sensitive file references...
- #486 Add ODT skill...
- #210 Improve frontend-design skill clarity...
- #83 Add skill-quality-analyzer and skill-security-analyzer...
- #1776 Add blast-radius skill
- #723 feat: add testing-patterns skill
- #541 fix(docx): prevent tracked change w:id collision...

The comments field shows "undefined" for all PRs in the snippet, but the prompt says "sorted by comments". So I should treat the order as indicating popularity/attention. Top ones are #1298, #1742, #1771, #1734, #1703, #1245, etc.

Wait, the prompt says "sorted by comments, 50 total, showing top 20" but comments show undefined. This might mean the data export had issues with comments count, but the ranking is still by comments. I'll treat the order as the ranking.

For Issues:
- #492 Security: Community skills distributed under anthropic/ namespace (43 comments)
- #228 Enable org-wide skill sharing (16 comments)
- #556 run_eval.py: claude -p never triggers skills/commands (12 comments)
- #62 All my skills have disappeared (10 comments)
- #1329 Proposing a second skill: compact-memory (9 comments)
- #202 skill-creator should be updated to best practice (8 comments)
- #189 document-skills and example-skills plugins install identical content (6 comments)
- #412 Skill proposal: agent-governance (6 comments)
- #1487 claude-api skill eagerly injects ~156k tokens (4 comments)
- #1394 skill-creator: eval-viewer escapeHtml... (4 comments)
- #1390 mcp-builder: evaluation.py scores 0/N... (4 comments)
- #1385 Reasoning Quality Gate Pipeline (4 comments)
- #1383 skill-creator: silent benchmark failures... (4 comments)
- #1175 Concerns regarding Security and Context Window when handling SharePoint (4 comments)
- #29 Usage with bedrock (4 comments)

For Section 1 (Top Skills Ranking), I need to pick 5-8 PRs. Based on the list order (assuming sorted by comments):
1. #1298 skill-creator trigger evals fix
2. #1742 mcp-builder mcp>=2 support
3. #1771 proofcore-contract-auditor
4. #1734 Detect orphaned docx comments (this is a PR but title is weird, maybe docx-related)
5. #1703 md2video-audio skill
6. #1245 notion-spec-to-implementation and quantitative-resume-auditor
7. #1792 docx LibreOffice timeout fix
8. #1730 claude-api dead URLs fix

Wait, some of these are fixes, some are features. The prompt asks for "most-discussed Skills (PRs) by comments/attention". I'll pick the top ones from the list.

For Section 2 (Community Demand Trends from Issues):
- Security/trust: namespace impersonation (#492), SharePoint security (#1175)
- Sharing/collaboration: org-wide sharing (#228), duplicate skills (#189)
- Quality/reliability: skill-creator updates (#202), run_eval.py trigger issues (#556), skill-creator silent failures (#1383, #1394), mcp-builder evaluation (#1390)
- New skill proposals: compact-memory (#1329), agent-governance (#412), reasoning quality gate (#1385)
- Compatibility: Bedrock (#29), claude-api token injection (#1487)

For Section 3 (High-Potential Pending Skills):
Active-comment PRs not yet merged. Looking at the PR list, all shown are [OPEN]. The ones with more recent activity or from the issues that have PRs?
Actually, the prompt says "Active-comment PRs not yet merged; these Skills may land soon". I should look for PRs that seem ready to merge or have active discussion. But the data shows all PRs with undefined comments. I need to infer from the issues or PR topics.

Wait, looking at the PR list again:
- #1298 skill-creator fix (high attention)
- #1742 mcp-builder fix (high attention)
- #1771 proofcore-contract-auditor (new skill)
- #1734 docx orphaned comments (fix)
- #1703 md2video-audio (new skill)
- #1245 notion-spec + resume auditor (new skills)
- #1792 docx timeout fix
- #1730 claude-api URL fix
- #525 pyxel skill
- #514 document-typography
- #1681 skill-creator direct execution fix
- #1615 scnet-hpc skill
- #822 AWT skill
- #538 pdf case sensitivity fix
- #486 ODT skill
- #210 frontend-design clarity
- #83 skill-quality-analyzer and security-analyzer
- #1776 blast-radius skill
- #723 testing-patterns skill
- #541 docx tracked change fix

Since comments are undefined, I should pick PRs that seem substantial and likely to be high-potential. Or maybe I should look at Issues that have PRs? The prompt says "Active-comment PRs not yet merged" - perhaps PRs that correspond to popular issues?

Actually, the user might expect me to infer from the data provided. Since all PR comments are undefined, I'll focus on PRs that address critical infrastructure (skill-creator, mcp-builder, docx, claude-api) or propose high-demand skill categories.

Wait, I should check if any Issues have corresponding PRs. For example:
- Issue #492 (security) - no PR shown
- Issue #556 (run_eval.py) - PR #1298 might be related (skill-creator trigger evals)
- Issue #1394 (skill-creator eval-viewer) - PR #1298 is about skill-creator trigger evals, maybe related
- Issue #1390 (mcp-builder evaluation) - PR #1742 is about mcp-builder
- Issue #1487 (claude-api token injection) - PR #1730 is claude-api fix

For High-Potential Pending Skills, I should list PRs that are not merged (all are [OPEN]) but seem ready or important.

Let me reconsider the structure. The user wants:
1. Top Skills Ranking (PRs) - 5-8 items
2. Community Demand Trends (Issues) - directions
3. High-Potential Pending Skills - Active-comment PRs not yet merged
4. Skills Ecosystem Insight - one sentence

For #1, I'll pick:
1. skill-creator: trigger evals & Windows/runtime failures (#1298)
2. mcp-builder: mcp>=2 streamable_http_client support (#1742)
3. proofcore-contract-auditor (#1771)
4. md2video-audio (#1703)
5. notion-spec-to-implementation & quantitative-resume-auditor (#1245)
6. docx: orphaned comments detection (#1734)
7. claude-api: dead URLs fix (#1730)
8. AWT (AI Watch Tester) (#822)

Actually, I should limit to 5-8. Let me pick the most substantial ones.

For #2, from Issues:
- Security & Trust: namespace impersonation, permission boundaries
- Developer Experience: org-wide sharing, skill discovery
- Reliability: evaluation harnesses, trigger rates, silent failures
- New Domains: memory/compact agents, governance, reasoning quality

For #3, High-Potential Pending Skills:
These should be PRs that are likely to merge soon. I'll pick ones that are bug fixes to core skills (skill-creator, mcp-builder, docx, claude-api) or popular new skill proposals.
- #1298 skill-creator trigger evals fix
- #1742 mcp-builder mcp>=2 fix
- #1730 claude-api URL fix
- #1734 docx orphaned comments
- #1792 docx LibreOffice timeout
- #1681 skill-creator direct execution
- #541 docx tracked change w:id collision
- #822 AWT skill (maybe?)

For #4, one sentence summary.

Let me refine the content to be concise and professional.

Section 1: Top Skills Ranking
1. skill-creator (trigger evals isolation) - #1298 - Fixes false misses, Windows pipe failures, and runtime non-triggers. Status: Open
2. mcp-builder (mcp>=2 compatibility) - #1742 - Updates streamable_http_client import and custom headers for MCP v2. Status: Open
3. proofcore-contract-auditor - #1771 - Web3 static analysis of Solidity/Rust, anchors proofs to TON blockchain. Status: Open
4. md2video-audio - #1703 - Zero-cost Markdown to MP4 video with voiceovers via Marp. Status: Open
5. notion-spec-to-implementation & quantitative-resume-auditor - #1245 - Spec-to-tasks planning and resume auditing. Status: Open
6. docx (orphaned comments) - #1734 - Detects orphaned comments in DOCX files. Status: Open
7. claude-api (dead URLs) - #1730 - Replaces 404 documentation URLs in academy-guide and tool-use-concepts. Status: Open

Wait, #1734 has no summary. I should mention it has no summary provided but is about DOCX.

Section 2: Community Demand Trends (from Issues)
- Trust & Security: namespace impersonation prevention (#492), SPO document access control (#1175)
- Collaboration: org-wide sharing (#228), duplicate skill resolution (#189)
- Reliability: evaluation pipeline fixes (#556, #1383, #1390, #1394), trigger rate debugging
- New Capabilities: compact-memory agents (#1329), agent governance (#412), reasoning quality gates (#1385)
- Platform: Bedrock compatibility (#29), token efficiency (#1487)

Section 3: High-Potential Pending Skills
These are open PRs with high impact that may land soon:
- #1298 skill-creator trigger evals (core infrastructure)
- #1742 mcp-builder MCP v2 support (ecosystem compatibility)
- #1730 claude-api URL hygiene (bundled skill maintenance)
- #1792 docx LibreOffice timeout handling (robustness)
- #1681 skill-creator direct execution (developer experience)
- #541 docx w:id collision fix (data integrity)
- #723 testing-patterns skill (methodology)
- #514 document-typography skill (quality)

Section 4: Skills Ecosystem Insight
The community is prioritizing trust/security boundaries and evaluation reliability while expanding into multimedia, blockchain auditing, and enterprise HPC workflows.

Wait, I need to make sure I include GitHub links. Format: `anthropics/skills PR #1298` or full URL? The prompt says "include GitHub links for each item". I'll use the full URLs or shorthand. The data shows "URL: anthropics/skills PR #1298" but I should probably format as https://github.com/anthropics/skills/pull/1298.

Let me check the prompt again: "Style: concise and professional, include GitHub links for each item."

So for each item in sections 1-3, include links.

Let me draft:

**1. Top Skills Ranking**
- [skill-creator: isolate trigger evals](#1298) — Fixes false misses, Windows pipe failures, and runtime non-triggers in skill evaluation. Status: Open
- [mcp-builder: support mcp>=2](#1742) — Updates imports and custom headers for MCP v2 compatibility. Status: Open
- [proofcore-contract-auditor](#1771) — Static analysis for Solidity/Rust smart contracts with TON blockchain proof anchoring. Status: Open
- [md2video-audio](#1703) — Compiles Markdown to MP4 with voiceovers via Marp; zero-cost. Status: Open
- [notion-spec-to-implementation & quantitative-resume-auditor](#1245) — Spec-to-task planning and resume auditing. Status: Open
- [docx: detect orphaned comments](#1734) — Identifies orphaned comments in DOCX files. Status: Open
- [claude-api: replace dead URLs](#1730) — Fixes 404 links in academy-guide and tool-use-concepts. Status: Open

**2. Community Demand Trends**
- Security & Trust: namespace impersonation (#492), SPO document permissions (#1175)
- Collaboration: org-wide sharing (#228), duplicate skill cleanup (#189)
- Reliability: evaluation harness fixes (#556, #1390, #1394), trigger debugging
- New Domains: compact-memory agents (#1329), governance (#412), reasoning quality gates (#1385)

**3. High-Potential Pending Skills**
- [skill-creator trigger evals](#1298) — Core infrastructure fix
- [mcp-builder MCP v2](#1742) — Ecosystem compatibility
- [docx timeout & w:id fixes](#1792, #541) — Document robustness
- [claude-api URL hygiene](#1730) — Bundled skill maintenance
- [testing-patterns](#723) — Methodology skill
- [document-typography](#514) — Quality control

**4. Skills Ecosystem Insight**
The community is prioritizing trust/security boundaries and evaluation reliability while expanding into multimedia, blockchain auditing, and enterprise HPC workflows.

I need to make sure the links are proper GitHub URLs. I'll use https://github.com/anthropics/skills/pull/XXXX and https://github.com/anthropics/skills/issues/XXXX.

Also, for section 3, the prompt says "Active-comment PRs not yet merged; these Skills may land soon". Since the data doesn't show comment counts, I'll select PRs that address critical issues or are infrastructure fixes.

Actually, looking at the Issues, #556 (run_eval.py never triggers skills) is about run_eval.py, and PR #1298 is about skill-creator trigger evals. They might be related. Similarly, #1394 is about skill-creator eval-viewer XSS, and #1298 is about skill-creator trigger evals. So #1298 is definitely high-potential.

#1390 is about mcp-builder evaluation.py, and PR #1742 is about mcp-builder mcp>=2 support. Related.

#1487 is about claude-api token injection, and PR #1730 is about claude-api dead URLs. Both are claude-api skill fixes.

So for High-Potential Pending Skills, I should list PRs that fix the issues mentioned in the high-comment issues.

Let me finalize:

**1. Top Skills Ranking (by attention/comments)**
1. [skill-creator: isolate trigger evals and handle Windows/runtime failures](https://github.com/anthropics/skills/pull/1298) — Resolves false trigger misses, Windows pipe failures, and runtime non-triggers in skill evaluation. **Open**
2. [mcp-builder: support mcp>=2 streamable_http_client import](https://github.com/anthropics/skills/pull/1742) — Updates to MCP v2 imports and custom header configuration. **Open**
3. [proofcore-contract-auditor](https://github.com/anthropics/skills/pull/1771) — Web3 static analysis for Solidity/R

---

# Claude Code Community Digest — 2026-10-06

## 1. Today's Highlights

No new releases landed in the past 24 hours. Activity was concentrated in the issue tracker, with ~50 issues updated but a large share closed as `needs-info`, `needs-repro`, or `invalid` — suggesting a notable volume of low-signal or incomplete bug reports. The meatiest open threads center on remote-control session reliability, desktop voice mode, and CVP/safeguard friction.

---

## 2. Releases

*No new releases in the last 24 hours.*

---

## 3. Hot Issues

The following are the most substantive issues from the last day, selected for technical relevance and community engagement.

1. **[#91592 — Remote Control sessions require PC-side input to reconnect after restart](https://github.com/anthropics/claude-code/issues/91592)** — `bug` · `windows` · `networking` · 4 comments
   Phone-side reconnection fails after a restart until the PC accepts input. A long-running thread (opened Sept 2) that implies the remote-control reconnect handshake is not fully server-side.

2. **[#76097 — Continuous voice conversation mode in Desktop/Cowork](https://github.com/anthropics/claude-code/issues/76097)** — `enhancement` · 8 👍 · 3 comments
   Request for always-listening mic, duplex STT/TTS, and voice status updates while the agent executes background tasks. Highest-voted item in this window; developers want desktop parity with the mobile voice UX.

3. **[#69411 — Expose auto-generated session title to hooks/templates](https://github.com/anthropics/claude-code/issues/69411)** — `enhancement` · 3 👍 · 4 comments
   Users working across many projects want to wrap session titles with prefixes/suffixes via hooks or template variables. A small but clean extensibility ask.

4. **[#78463 — SubagentStart/SubagentStop counts go mismatched during API-error bursts](https://github.com/anthropics/claude-code/issues/78463)** — `bug` · `has repro` · 3 comments
   Subagents that terminate during an API-error burst never emit `SubagentStop`, leaving lifecycle counters skewed. Has a repro; relevant for anyone relying on hook telemetry.

5. **[#86080 — All claude.ai connectors drop mid-session and silently reappear](https://github.com/anthropics/claude-code/issues/86080)** — `bug` · `mcp` · 2 comments
   Reported since ~Aug 5, 2026: the full set of remote connectors becomes unavailable mid-session with no `/mcp` action or restart, then recovers automatically. Points to server-side connector health issues.

6. **[#87958 — `/cd` changes cwd but does not relocate session to new project storage](https://github.com/anthropics/claude-code/issues/87958)** — `bug` · `linux` · `core` · 2 comments
   New transcript records carry the new `cwd`, but the session stays filed under the old project, and no `relocated` record is written. Affects `--resume` correctness after directory changes.

7. **[#97946 — Claude 5.5 Sonnet unavailable for CVP members](https://github.com/anthropics/claude-code/issues/97946)** — `bug` · `macos` · closed `needs-info` · 1 comment
   CVP members report being blocked from latest models by "safeguards" despite verification. Closed for info, but the CVP-vs-safeguard theme recurs across multiple reports today.

8. **[#97971 — CVP verification not preventing safeguard measure enforcement](https://github.com/anthropics/claude-code/issues/97971)** — `bug` · `macos` · closed `needs-info` · 1 comment
   Same theme as #97946 from a different user: verified CVP users still hit safeguard restrictions. Combined with #97946, this suggests a real configuration/entitlement propagation problem.

9. **[#97921 — Rate limiting for MAX subscription users](https://github.com/anthropics/claude-code/issues/97921)** — `bug` · `windows` · closed `needs-info` · 1 comment
   PAYG/MAX-tier subscriber reports rate limiting alongside a `VirtualMessageList` telemetry error. Closed without resolution in this window.

10. **[#99090 — Projects: "Requires approval" connector permission never enforced](https://github.com/anthropics/claude-code/issues/99090)** — `invalid` · 1 👍 · 1 comment
   User reports per-tool "Requires approval" on a Google Calendar connector is not enforced in cloud-session Project threads. Closed as `invalid` but the permission-enforcement gap is a recurring complaint.

---

## 4. Key PR Progress

Only two PRs updated in the last 24 hours.

1. **[#99540 — sec-default: org's tool ceiling holds over installed plugins](https://github.com/anthropics/claude-code/pull/99540)** — `poteat`
   The policy mod now enforces an organization's ceiling/deny rule on a tool *over* the plugins an individual installs; every deciding hook carries a `.catch`. A meaningful security-posture tightening for org-seated environments.

2. **[#20448 — Add web4-governance plugin for AI governance with R6 workflow](https://github.com/anthropics/claude-code/pull/20448)** — `dp-web4`
   Proposes a "web4-governance" plugin — T3 trust tensors, entity witnessing, R6 audit trails — for cryptographic provenance and verifiable accountability of agent actions. Opened in January and still bouncing; long-stale.

---

## 5. Feature Request Trends

Across all issues in the window, three feature directions stand out:

- **Voice-first desktop experience** — Continuous conversation mode with background task status speech (#76097) is the clearest trend, pulling the most votes.
- **Hooks & template extensibility** — Developers want more session metadata (auto-generated titles, #69411) exposed to hooks/templates so workflows can be branded, filtered, and organized programmatically.
- **Remote/cloud session management** — Remote Control reconnection (#91592), connector mid-session drops (#86080), and background Project threads all point to a desire for more robust, hands-off session lifecycle management.

---

## 6. Developer Pain Points

Recurring frustrations this window:

- **Safeguard/content-filter false positives for CVP members** — Multiple reports (#97946, #97971, #97994, #97959, #97961) of verified users blocked from models or legitimate tasks. The volume suggests entitlement propagation or filter-tuning issues, even though most were closed `needs-info`.
- **Connector & MCP reliability** — Remote connectors silently dropping and recovering mid-session (#86080) without user action erodes trust in long-running sessions.
- **Session state fragmentation** — `/cd` not relocating project storage (#87958), subagent lifecycle events going missing during API-error bursts (#78463), and session persistence complaints (#98001) all point to weak state-consistency guarantees.
- **Report-quality friction** — A large share of today's issues were closed as `needs-info`/`invalid`/`needs-repro`, often due to vague or empty descriptions (e.g., "save", "wwwww"). This suggests the in-app report flow may be generating low-signal tickets that waste triage capacity and obscure real bugs.
- **Subscription/rate-limit anxiety** — MAX-tier users hitting rate limits (#97921) and reporting model degradation (#97961, #97905) reflect pricing/serving frustration that, while noisy, tracks genuine user sentiment.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest — 2026-10-06**

**Today's Highlights**
0.160.1 shipped with a critical Windows fix preserving `SYSTEMROOT`, `TEMP`, and `TMP` for remote stdio MCP servers. The community is heavily pushing to restore branch selection UI (#49532, 80👍), while Windows Computer Use gaps for dot-started tasks dominate bug reports (#49458, 56 comments). Guardian review infrastructure sees multiple PRs improving checkpoint recovery and API key fallback.

**Releases**
- **rust-v0.160.1**: Preserves Windows startup env vars when launching remote MCP servers with explicit remote environment. [#51121](https://github.com/openai/codex/pull/51121)
- **Alpha channel**: `rust-v0.162.0-alpha.14`–`.16` published.

**Hot Issues**
1. [#49458](https://github.com/openai/codex/issues/49458) — Windows dot-started local tasks lack Computer Use tools (56 comments, 24👍)
2. [#49532](https://github.com/openai/codex/issues/49532) — Branch selection removed from app; community demands restore (41 comments, 80👍)
3. [#25799](https://github.com/openai/codex/issues/25799) — WSL2 sandboxed commands fail to launch in Windows app (21 comments)
4. [#48414](https://github.com/openai/codex/issues/48414) — Polish Pro Option+L keyboard regression on macOS (20 comments)
5. [#26683](https://github.com/openai/codex/issues/26683) — Queued messages disappear; tasks stuck in thinking state (15 comments)
6. [#11062](https://github.com/openai/codex/issues/11062) — Steering abandons ongoing work mid-task (14 comments)
7. [#49351](https://github.com/openai/codex/issues/49351) — VS Code extension voice dictation returns 403 Forbidden (9 comments)
8. [#50665](https://github.com/openai/codex/issues/50665) — Windows dot-created task UI blanks out; history invisible (5 comments)
9. [#48441](https://github.com/openai/codex/issues/48441) — Kaspersky flags new runtimes as Low Restricted, breaking auth (5 comments)
10. [#50071](https://github.com/openai/codex/issues/50071) — ResizeObserver storms cause desktop crashes (5 comments)

**Key PR Progress**
- [#51158](https://github.com/openai/codex/pull/51158) — Signs PowerShell installer via Azure Trusted Signing
- [#51157](https://github.com/openai/codex/pull/51157) — Enforces required environment skills before inference
- [#51156](https://github.com/openai/codex/pull/51156) — Sends base instructions as Responses `developer` input messages
- [#51140](https://github.com/openai/codex/pull/51140) / [#51139](https://github.com/openai/codex/pull/51139) / [#51137](https://github.com/openai/codex/pull/51137) — Guardian checkpoint recovery isolation, fresh sessions, and parent-checkpoint restart
- [#51121](https://github.com/openai/codex/pull/51121) — Backports Windows remote MCP env preservation to 0.160
- [#51126](https://github.com/openai/codex/pull/51126) — Adds promise settlement streaming helpers to code mode
- [#51119](https://github.com/openai/codex/pull/51119) — Clarifies incremental tool namespace updates in Responses Lite
- [#51117](https://github.com/openai/codex/pull/51117) — Installs full context in compaction replacement history
- [#51070](https://github.com/openai/codex/pull/51070) — Preserves trusted-tool context in Guardian Decisions
- [#51067](https://github.com/openai/codex/pull/51067) — Uses issuing-step context for Guardian MCP elicitation reviews

**Feature Request Trends**
- Restore Git branch selection UI in the Codex App
- Improved dot/remote computer discovery and wrong-route diagnostics
- Native support for clickable custom URI schemes (e.g., `obsidian://`)
- Cross-platform environment variable preservation for remote executors

**Developer Pain Points**
- Windows sandbox/execution failures: MCP server env loss, WSL2 launch blocks, shell spawn hangs
- Antivirus false positives blocking new runtimes (Kaspersky, MXC)
- Session continuity breaks: dot task history vanishing, messages replaying, composer dictation shortcuts removed
- Keyboard/IME regressions across macOS (Polish Pro) and Linux (Ctrl+Shift+D)

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI Community Digest — 2026-10-06**

**1. Today's Highlights**
A nightly build (`v0.64.0-nightly.20261005.gfb972b2f8`) landed overnight. Community attention remains on critical subagent reliability bugs (#22323, #21409) and a wave of security hardening PRs tightening RFC 9207 OAuth compliance and input sanitization.

**2. Releases**
- **v0.64.0-nightly.20261005.gfb972b2f8** — Nightly snapshot. Changelog: https://github.com/google-gemini/gemini-cli/compare/v0.64.0-nightly.2

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

The user wants a GitHub Copilot CLI community digest for 2026-10-06 based on the provided data from github.com/github/copilot-cli.

 First, let me analyze the provided data:

 **Releases (last 24h):**
 - v1.0.92 (2026-10-05): Added `copilot config` subcommands, pre-conversation Ctrl+E environment picker, Entra-protected MCP servers silent renewal, legacy HTTP+SSE MCP connections removed (truncated).
 - v1.0.92-5 (2026-10-05): Improved account selection after Entra sign-in, /logout signs out OAuth sessions. Fixed Entra-protected MCP servers silent renewal.

 **Issues (top 30 by comment count):**
 1. #3399 - Custom headers for BYOK (CLOSED) - 7 comments, 14 👍
 2. #4505 - Resumed session stale connection item IDs (CLOSED) - 6 comments, 3 👍
 3. #3074 - /effort command for reasoning effort (CLOSED) - 4 comments, 12 👍
 4. #4991 - Cloudflare MCP subscription limit (OPEN) - 3 comments, 0 👍
 5. #3595 - AutoPilot pause for user input (OPEN) - 3 comments, 2 👍
 6. #2790 - Figma Desktop MCP shown as SSE (OPEN) - 2 comments, 2 👍
 7. #1803 - Support MCP resources/read (OPEN) - 2 comments, 13 👍
 8. #4519 - Missing namespace for function_call (CLOSED) - 2 comments, 0 👍
 9. #4169 - copilot -p no OTEL telemetry (CLOSED) - 2 comments, 0 👍
 10. #4155 - Gemini models 400 Bad Request (CLOSED) - 2 comments, 4 👍
 11. #4960 - Enterprise custom model listed but cannot be selected (OPEN) - 2 comments, 0 👍
 12. #4959 - Enterprise managed model setting not applied (OPEN) - 2 comments, 3 👍
 13. #4689 - Issues/PR panels resolve to fork (OPEN) - 1 comment, 1 👍
 14. #4961 - Theme follows OS apps theme on Windows (OPEN) - 1 comment, 1 👍
 15. #5039 - MCP OAuth login fails HTTP 400 (OPEN) - 1 comment, 0 👍
 16. #4715 - Block built-in marketplaces (CLOSED) - 1 comment, 1 👍
 17. #4561 - ACP session/cancel stopReason (CLOSED) - 1 comment, 0 👍
 18. #2853 - /agent <name> direct invocation (CLOSED) - 1 comment, 1 👍
 19. #2363 - /update reruns prompt in interactive mode (CLOSED) - 1 comment, 0 👍
 20. #2195 - Config corruption PowerShell URLs (CLOSED) - 1 comment, 1 👍
 21. #4462 - Explicit code-review subagent model override ignored (OPEN) - 1 comment, 3 👍
 22. #5051 - Timeout after 20min (OPEN) - 1 comment, 0 👍
 23. #4967 - otel: enrich native spans with delivery context (OPEN) - 1 comment, 0 👍
 24. #4963 - Custom-agent reasoningEffort vs reasoning-effort (OPEN) - 1 comment, 0 👍
 25. #5061 - Entra api:// scopes rejected (OPEN) - 0 comments, 0 👍
 26. #5060 - Turn off Rewind on double Esc (OPEN) - 0 comments, 0 👍
 27. #5059 - Expose agentId in subagentStart hook (OPEN) - 0 comments, 0 👍
 28. #5058 - Datadog MCP OAuth invalid_grant (OPEN) - 0 comments, 0 👍
 29. #5057 - Project-level canvas extension discovery regressed (OPEN) - 0 comments, 0 👍
 30. #5056 - New color theme regression (OPEN) - 0 comments, 0 👍

 **PRs:**
 1. #5046 - Initial commit (OPEN) - no summary

 Now I need to structure this into the requested format:

 1. **Today's Highlights** - 2-3 sentences
 2. **Releases** - Summarize changes (v1.0.92 and v1.0.92-5)
 3. **Hot Issues** - Pick 10 noteworthy, explain why they matter and community reaction
 4. **Key PR Progress** - Pick 10 important PRs (but there's only 1 PR, so I'll note that)
 5. **Feature Request Trends** - Distill most-requested feature directions
 6. **Developer Pain Points** - Summarize recurring frustrations

 Let me draft each section:

 **Today's Highlights:**
 - v1.0.92 released with config subcommands, environment picker, and Entra MCP fixes.
 - v1.0.92-5 patch improves account selection and OAuth logout handling.
 - Active community discussion on MCP integrations, enterprise model management, and Windows theming regressions.

 **Releases:**
 - v1.0.92 (2026-10-05): `copilot config` subcommands (list/read/set/remove), Ctrl+E pre-conversation environment picker (local/cloud), Entra MCP silent token renewal, legacy HTTP+SSE removal.
 - v1.0.92-5: Microsoft Entra account selection post-sign-in, `/logout` clears OAuth sessions, fixed Entra MCP credential renewal.

 **Hot Issues (10):**
 1. #3399 - Custom headers for BYOK (CLOSED, 7c, 14👍) - High demand for BYOK header customization.
 2. #1803 - MCP resources/read support (OPEN, 2c, 13👍) - Top-voted feature request for MCP resource primitive.
 3. #3074 - `/effort` command (CLOSED, 4c, 12👍) - Reasoning effort toggle requested.
 4. #4505 - Resumed session stale IDs (CLOSED, 6c, 3👍) - Session resumption bug affecting workflow.
 5. #4991 - Cloudflare MCP subscription limit (OPEN, 3c, 0👍) - OAuth + MCP server availability issue.
 6. #3595 - AutoPilot pause for confirmation (OPEN, 3c, 2👍) - Code review workflow concern.
 7. #4959 - Enterprise model setting ignored (OPEN, 2c, 3👍) - Enterprise policy not applied.
 8. #4960 - Enterprise custom model selection failure (OPEN, 2c, 0👍) - Picker bug for custom models.
 9. #4462 - Code-review subagent model override ignored (OPEN, 1c, 3👍) - Subagent model config bug.
 10. #5061 - Entra api:// scopes rejected (OPEN, 0c, 0👍) - Latest regression in 1.0.92 for Entra MCP.

 **Key PR Progress:**
 - Only 1 PR: #5046 - Initial commit (c6r8h48msf-debug). No significant feature progress to report.

 **Feature Request Trends:**
 - MCP ecosystem expansion (resources/read, custom headers, OAuth stability)
 - Enterprise configuration and model management
 - Reasoning/effort controls and agent customization
 - Non-interactive/CI reliability (telemetry, timeouts)

 **Developer Pain Points:**
 - MCP connection/auth failures (Cloudflare, Datadog, Entra scopes)
 - Session state corruption on resume/fork
 - Enterprise managed settings not applying correctly
 - Windows theme following OS instead of terminal
 - CLI timeouts with external providers
 - Auto-update regressions (canvas extensions, color themes)

 Let me refine and check the formatting requirements:
 - Concise and professional
 - Include GitHub links for each item
 - Style suited for technical developers

 I need to make sure I include the links in the format: github/copilot-cli Issue #XXX or similar.

 Let me verify the issue numbers and links:
 - Issues: github.com/github/copilot-cli/issues/XXXX
 - PRs: github.com/github/copilot-cli/pull/XXXX

 Wait, the data shows "URL: github/copilot-cli Issue #3399" etc. So I should format as:
 - https://github.com/github/copilot-cli/issues/3399
 - https://github.com/github/copilot-cli/pull/5046

 Let me check the PR count - only 1 PR, so for section 4 I should mention there's only 1 PR and describe it, or note that no significant PRs were merged.

 Also, I need to ensure I don't hallucinate information not in the data.

 Data check for releases:
 - v1.0.92: "Legacy HTTP+SSE MCP connections no longe" - truncated, so I should say "legacy HTTP+SSE MCP connections removed (truncated in source)" or similar, or just say "legacy protocol cleanup".

 Actually, looking at the data: "Legacy HTTP+SSE MCP connections no longe" - it's cut off. I should mention it was truncated in the source or just say "legacy HTTP+SSE cleanup".

 For the PR section, since there's only 1 PR and it's "Initial commit" with no summary, I should note that no feature PRs are currently active/merged, or just report the single PR as is.

 Let me refine the Hot Issues to ensure I pick the most noteworthy 10 from the list. I should prioritize by comments + likes, but also by importance (OPEN issues vs CLOSED).

 Actually, the instruction says "Pick 10 noteworthy Issues, explain why they matter and community reaction".

 So:
 1. #3399 (CLOSED, 7c, 14👍) - BYOK headers - high engagement
 2. #1803 (OPEN, 2c, 13👍) - MCP resources - high votes, important feature gap
 3. #3074 (CLOSED, 4c, 12👍) - /effort command - high votes, recently closed
 4. #4505 (CLOSED, 6c, 3👍) - Session resume bug - high comment count, affects workflow
 5. #4991 (OPEN, 3c, 0👍) - Cloudflare MCP - recent, OAuth/MCP auth issue
 6. #3595 (OPEN, 3c, 2👍) - AutoPilot pause - enterprise/agent safety concern
 7. #4959 (OPEN, 2c, 3👍) - Enterprise model not applied - config issue
 8. #4960 (OPEN, 2c, 0👍) - Enterprise model selection - picker bug
 9. #4462 (OPEN, 1c, 3👍) - Code-review subagent model - specific workflow bug
 10. #5061 (OPEN, 0c, 0👍) - Entra scopes rejected - latest regression

 Or maybe include #5051 (timeout issue) as it's a critical usability issue?

 Let me reconsider. The user wants "noteworthy" - so I should mix high-engagement and high-impact bugs.

 Revised list:
 1. #3399 - BYOK headers (high engagement)
 2. #1803 - MCP resources/read (high votes, feature gap)
 3. #3074 - /effort command (high votes, recently closed)
 4. #4505 - Session stale IDs (high comments, workflow blocker)
 5. #4991 - Cloudflare MCP OAuth (recent auth issue)
 6. #3595 - AutoPilot pause (safety/control issue)
 7. #4959 - Enterprise model ignored (enterprise config)
 8. #5061 - Entra scopes rejected (regression in latest version)
 9. #4462 - Code-review model override (subagent bug)
 10. #5051 - 20min timeout (critical reliability)

 For Key PR Progress, since there's only 1 PR, I'll report it but note it's the only one.

 Let me write the final output:

 **Today's Highlights**
 Copilot CLI shipped v1.0.92 with new `config` subcommands, an environment picker (Ctrl+E), and Entra MCP fixes, followed by v1.0.92-5 addressing OAuth logout. Community focus remains on MCP authentication stability and enterprise configuration drift, with several regressions reported post-update.

 **Releases**
 - v1.0.92 (2026-10-05): Added `copilot config` CRUD commands, pre-conversation Ctrl+E environment picker (local/cloud), Entra-protected MCP silent token renewal, and legacy HTTP+SSE MCP cleanup (source truncated).
 - v1.0.92-5: Improved Microsoft Entra account selection post-sign-in, `/logout` now clears OAuth sessions, fixed Entra MCP credential renewal.

 **Hot Issues** (top by engagement + impact)
 1. [#3399](https://github.com/github/copilot-cli/issues/3399) BYOK custom headers (CLOSED, 7c/14👍) - High demand for tenant/org headers in BYOK setups.
 2. [#1803](https://github.com/github/copilot-cli/issues/1803) MCP resources/read (OPEN, 2c/13👍) - Top-voted feature request for MCP resource primitive support.
 3. [#3074](https://github.com/github/copilot-cli/issues/3074) `/effort` command (CLOSED, 4c/12👍) - Reasoning effort toggle merged; reduces `/model` friction.
 4. [#4505](https://github.com/github/copilot-cli/issues/4505) Session stale IDs (CLOSED, 6c/3👍) - Resumed sessions fail with 400; fork recovery broken.
 5. [#4991](https://github.com/github/copilot-cli/issues/4991) Cloudflare MCP subscription limit (OPEN, 3c) - OAuth succeeds but runtime rejects with -32603.
 6. [#3595](https://github.com/github/copilot-cli/issues/3595) AutoPilot pause for confirmation (OPEN, 3c/2👍) - AutoPilot auto-selects fixes without review gate.
 7. [#4959](https://github.com/github/copilot-cli/issues/4959) Enterprise model ignored (OPEN, 2c/3👍) - Server policy fetched but model resolver overrides it.
 8. [#5061](https://github.com/github/copilot-cli/issues/5061) Entra api:// scopes rejected (OPEN, 0c) - Regression in 1.0.92 breaks standard Entra delegated scopes.
 9. [#4462](https://github.com/github/copilot-cli/issues/4462) Code-review subagent model override (OPEN, 1c/3👍) - Built-in agent ignores per-agent model config.
 10. [#5051](https://github.com/github/copilot-cli/issues/5051) 20min timeout (OPEN, 1c) - External provider (LM Studio) prompts timeout and retry loop.

 **Key PR Progress**
 Only 1 PR active: [#5046](https://github.com/github/copilot-cli/pull/5046) "Initial commit" (c6r8h48msf-debug) - no feature description; no merged PRs to report for this cycle.

 **Feature Request Trends**
 - **MCP ecosystem**: Resources/read support, custom headers, OAuth stability across providers (Cloudflare, Datadog, Entra).
 - **Enterprise controls**: Model governance, managed settings enforcement, marketplace blocking.
 - **Agent customization**: Reasoning effort, subagent model overrides, hook context (agentId).
 - **Reliability**: Session resumption, timeout handling, telemetry in non-interactive mode.

 **Developer Pain Points**
 - **Auth/MCP**: OAuth token exchange failures, Entra scope regressions, subscription limit errors.
 - **State corruption**: Stale connection IDs after resume, fork ignoring `gh repo set-default`.
 - **Config drift**: Enterprise model settings not applied, Windows theme following OS apps, config corruption from PowerShell variables.
 - **Performance**: 20min timeouts with external providers, session hangs.

 This looks good. I should ensure the links are correct format. The user asked for "GitHub links for each item" - I used markdown links which is appropriate.

 Let me double-check the issue numbers match the data:
 - #3399 ✓
 - #1803 ✓
 - #3074 ✓
 - #4505 ✓
 - #4991 ✓
 - #3595 ✓
 - #4

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode Community Digest — 2026-10-06**

### Today's Highlights
No new releases in the past 24 hours. The community is focused on a critical free-tier authentication bug affecting both Desktop and custom agents, alongside a ChatGPT OAuth regression that drops OpenAI models from the catalog and a Windows/WSL path handling issue that breaks Linux server connections.

### Releases
*None*

### Hot Issues
1. **[#52878](https://github.com/anomalyco/opencode/issues/52878)** — OpenAI models selected via ChatGPT OAuth dropped from catalog (12 comments, OPEN) — High-impact auth reconciliation bug.
2. **[#52905](https://github.com/anomalyco/opencode/issues/52905)** — Desktop 2.0.22 rejects free-tier models with "can only be used from within OpenCode" (9 comments, OPEN) — Confusing false-positive blocking legitimate local usage.
3. **[#51563](https://github.com/anomalyco/opencode/issues/51563)** — TUI footer wraps and overlaps content in short terminals (6 comments, OPEN) — UX regression on small screens.
4. **[#52205](https://github.com/anomalyco/opencode/issues/52205)** — Windows Desktop passes WSL UNC paths to Linux server, causing HTTP 500 (4 comments, OPEN) — Cross-platform path normalization failure.
5. **[#51812](https://github.com/anomalyco/opencode/issues/51812)** — First prompt after start has no MCP tools (4 comments, OPEN) — Race condition in MCP connection initialization.
6. **[#51341](https://github.com/anomalyco/opencode/issues/51341)** — `instructions` field fails to load instruction files from config (4 comments, OPEN) — Config path resolution bug.
7. **[#51928](https://github.com/anomalyco/opencode/issues/51928)** — GitHub Copilot model sync never runs after login (2 comments, 3 👍, OPEN) — OAuth account stored but models never fetched.
8. **[#52958](https://github.com/anomalyco/opencode/issues/52958)** — OpenCode Go subscription payment declined from Italy/EU (3 comments, OPEN) — Geo-billing or payment method rejection issue.
9. **[#53347](https://github.com/anomalyco/opencode/issues/53347)** — Custom primary agent denied free-tier while built-in plan works (3 comments, OPEN) — Reproduces #52905 for custom agents.
10. **[#53207](https://github.com/anomalyco/opencode/issues/53207)** — `--format json` drops final `step_finish` event (1 comment, OPEN) — CLI output completeness bug affecting scripts.

### Key PR Progress
1. **[#47457](https://github.com/anomalyco/opencode/pull/47457)** — Surface unavailable configured models instead of opaque HTTP errors.
2. **[#47423](https://github.com/anomalyco/opencode/pull/47423)** — Add provider OAuth `client_credentials` support with in-memory token caching.
3. **[#47450](https://github.com/anomalyco/opencode/pull/47450)** — Implement mid-prompt slash commands.
4. **[#47462](https://github.com/anomalyco/opencode/pull/47462)** — Restore user PATH after Windows Explorer overflow.
5. **[#47460](https://github.com/anomalyco/opencode/pull/47460)** — Bound `webfetch` timeout parameter.
6. **[#47443](https://github.com/anomalyco/opencode/pull/47443)** — Refresh only loaded catalogs on location events (performance fix).
7. **[#47430](https://github.com/anomalyco/opencode/pull/47430)** — Bound npm installs with configurable timeout.
8. **[#47428](https://github.com/anomalyco/opencode/pull/47428)** — Defer background workspace discovery for historical projects.
9. **[#52714](https://github.com/anomalyco/opencode/pull/52714)** — Soften Markdown bold weight to 670 for readability.
10. **[#47472](https://github.com/anomalyco/opencode/pull/47472)** — Fix stats box close behavior without cursor escape sequence.

### Feature Request Trends
- **Permission system granularity**: Configurable auto-approve keybinds and per-M

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



# Pi Community Digest — 2026-10-06

*Source: [badlogic/pi-mono](https://github.com/badlogic/pi-mono)*

---

## 1. Today's Highlights

Pi shipped v1.0.4 with wildcard tool-pattern filtering and `--no-mcp`, giving users fine-grained control over which MCP servers and tools are active per run. The Azure provider also gained Foundry Chat Completions support in v1.0.3, closing a gap for DeepSeek V4 Pro deployments. Community attention is split between a critical non-ASCII corruption bug in Anthropic tool calls (#10074) and a long-running Windows shell resolution issue (#9361) that remains open with 12 comments.

---

## 2. Releases

### v1.0.4
- **Tool patterns and `--no-mcp`** — `--tools` and `--exclude-tools` now accept `*` glob patterns (e.g., `--tools read,codemode,'mcp__radius__*'` keeps only one MCP server's tools). `--tools` retains MCP tools unless an entry starts with `mcp__`, and `--no-mcp` turns off MCP for a single run. ([Release notes](https://github.com/badlogic/pi-mono/releases/tag/v1.0.4))

### v1.0.3
- **Azure Foundry Chat Completions** — The `azure` provider (renamed from `azure-openai-responses`) now also serves Foundry Chat Completions deployments, starting with `azure/deepseek-v4-pro`. ([Release notes](https://github.com/badlogic/pi-mono/releases/tag/v1.0.3))

---

## 3. Hot Issues

### #9361 — Windows: `shellPath` non-deterministically ignored when extensions are loaded
A valid `shellPath` in `~/.pi/agent/settings.json` is silently dropped on Windows when any extension is active, falling back to Git Bash locations or the first `bash.exe` on `PATH`. The non-determinism makes debugging shell behavior unreliable. **12 comments**, still open. ([Link](https://github.com/badlogic/pi-mono/issues/9361))

### #9075 — Compaction summarisation inherits session thinking level on adaptive models
On `compat.forceAdaptiveThinking` models (Claude), compaction runs at the session's thinking level while output budget stays at ~13k tokens. Thinking tokens count against `max_tokens`, so high-effort sessions deterministically hit the output cap. **8 comments, 4 👍**. ([Link](https://github.com/badlogic/pi-mono/issues/9075))

### #9335 — `openai-responses`: support `configuration_update` for cache-preserving reasoning changes
Requests adding a `configuration_update` input item to change reasoning effort without rewriting the prompt prefix, preserving prompt cache on GPT-6. **7 comments, 8 👍** — the most-endorsed open issue. ([Link](https://github.com/badlogic/pi-mono/issues/9335))

### #10074 — Anthropic tool calls: corrupted non-ASCII edit arguments silently accepted
With Claude models, `edit` calls on files containing Korean (or any non-ASCII) text fail frequently and occasionally corrupt files. A dropped `u` in `\uXXXX` escapes turns into `\b`/`\f` control characters. Tracked for three weeks; costs many retries. **7 comments**. ([Link](https://github.com/badlogic/pi-mono/issues/10074))

### #10267 — Prompt text contributed in `before_agent_start` is dropped on runs without a user prompt
Extensions that return `systemPrompt` or `systemPromptOptions.sections` in `before_agent_start` lose that text on background-task notifications, plan-mode continues, retries, and resumes. **6 comments, 2 👍**. ([Link](https://github.com/badlogic/pi-mono/issues/10267))

### #10251 — Codemode only mode: built-in `read` cannot expose image contents to scripts
With `codemode.mode: "only"`, `tools.read()` on a valid local image returns only `"Read image file [image/png]"`. No image reaches the next provider request, despite the tool description claiming images are sent as attachments. **6 comments**. ([Link](https://github.com/badlogic/pi-mono/issues/10251))

### #9980 — Calculated cost for top open models on OpenRouter is off by 2–3×
The model catalog uses the cheapest provider's pricing, making reported cost significantly wrong for popular open-weights models (e.g., `z-ai/glm-5.3-flash`) that many providers offer at different rates. **5 comments, 1 👍**. ([Link](https://github.com/badlogic/pi-mono/issues/9980))

### #10063 — Anthropic OAuth requests return `Invalid effort level` for Claude Opus 5/5.5 and Fable 5
Direct `anthropic` requests via OAuth return HTTP 400 at default, low, and high thinking levels. Sonnet 4.6 succeeds. **4 comments**. ([Link](https://github.com/badlogic/pi-mono/issues/10063))

### #10247 — Support MCP over Unix socket
Request to add `"socket": "/run/.../mcp.sock"` as a valid transport option in `mcp.json`, beyond the current stdio and http. Motivated by namespace isolation concerns. **4 comments**. ([Link](https://github.com/badlogic/pi-mono/issues/10247))

### #10253 — Connect deferred MCP servers only when needed
With 19 MCP servers configured, connecting all at session start is wasteful. Proposal: connect `codemode` and `deferred` servers only when selected for discovery or a call, reusing cached tool metadata. **4 comments**. ([Link](https://github.com/badlogic/pi-mono/issues/10253))

---

## 4. Key PR Progress

| PR | Summary |
|---|---|
| [#10286](https://github.com/badlogic/pi-mono/pull/10286) | **fix(ai): use OpenRouter-reported total cost** — Bypasses Pi's catalog estimate in favor of the actual billed amount from OpenRouter's usage accounting, fixing the 2–3× cost discrepancy. |
| [#10521](https://github.com/badlogic/pi-mono/pull/10521) | **fix(ai): inline `$ref` tool schemas for NVIDIA NIM models** — `nemotron-3.5-super-vl-preview` and `qwen3.8-flash-next` return objects described only by local `$ref`, which `validateToolArguments` rejects. Fixes #10270. |
| [#9714](https://github.com/badlogic/pi-mono/pull/9714) | **feat(ai): support Azure Foundry Chat Completions deployments** — Expands the Azure provider beyond the Responses API.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code Community Digest — 2026-10-06**

### 1. Today’s Highlights
v0.25.0 shipped this cycle, landing a local workspace-agent collaboration feature and a managed-runtime overhaul. The Desktop client and SDK TypeScript v0.1.18 both bundle the new CLI, while the core team continues merging the Managed Agent M5 durability and process-isolation slices. No known breaking changes.

### 2. Releases
- **CLI v0.25.0** — workspace-agent collaboration, managed-runtime improvements.
- **SDK TypeScript v0.1.18** — bundles CLI 0.25.0 (and references 0.24.7 in legacy notes).
- **Desktop v0.25.0** — preserves session-creation diagnostics on serve failures; adds managed runtime support.

### 3. Hot Issues
| # | Summary | Reaction |
|---|---------|----------|
| [#12380](https://github.com/QwenLM/qwen-code/issues/12380) | Proposal: Managed Agent dual-path architecture & staged delivery | 46 comments — roadmap anchor |
| [#13395](https://github.com/QwenLM/qwen-code/issues/13395) | Kubernetes tool-runtime progress & cross-platform gates | 14 comments — tracking PR #13289 |
| [#8097](https://github.com/QwenLM/qwen-code/issues/8097) | Background agent coordination gap: duplicate work & premature completion | 10 comments — multi-agent pain point |
| [#10887](https://github.com/QwenLM/qwen-code/issues/10887) | No early termination on repeated tool errors; sessions burn 5–14M tokens | 7 comments — P1 token waste |
| [#6710](https://github.com/QwenLM/qwen-code/issues/6710) | Distinguish user-cancelled turns from interruption after daemon restore | 6 comments — session-management gap |
| [#10692](https://github.com/QwenLM/qwen-code/issues/10692) | XML `tool_call` dialect leaks as plain text | 6 comments — output sanitizer hole |
| [#13463](https://github.com/QwenLM/qwen-code/issues/13463) | Cancelled managed-Agent input replayed into later Host run | 4 comments — post-merge edge case |
| [#13458](https://github.com/QwenLM/qwen-code/issues/13458) | `memory.agentMaxTurns` ignored by user-scoped dream (hardcoded 8) | 4 comments — config drift |
| [#13447](https://github.com/QwenLM/qwen-code/issues/13447) | Authenticated plugin repo hangs at git credential prompt | 4 comments — startup blocker |
| [#12664](https://github.com/QwenLM/qwen-code/issues/12664) | Shell-mode commands never hold session busy; concurrent model turns admitted | 4 comments — race condition |

### 4. Key PR Progress
- **[#13297](https://github.com/QwenLM/qwen-code/pull/13297)** — Managed-runtime review follow-ups across providers, activator, core tools, broker.
- **[#13335](https://github.com/QwenLM/qwen-code/pull/13335)** — Managed-agent config & API-surface hygiene (R2 review fixes).
- **[#13352](https://github.com/QwenLM/qwen-code/pull/13352)** — M5c: Shell process-group stops via worker ledger.
- **[#13468](https://github.com/QwenLM/qwen-code/pull/13468)** — Web Shell side tasks in secondary workspaces.
- **[#13437](https://github.com/QwenLM/qwen-code/pull/13437)** — Recover function-style XML tool calls through fallback.
- **[#13250](https://github.com/QwenLM/qwen-code/pull/13250)** — QQ Bot per-group session isolation restored.
- **[#13179](https://github.com/QwenLM/qwen-code/pull/13179)** — Managed panel failure lifecycle & worker path containment.
- **[#13401](https://github.com/QwenLM/qwen-code/pull/13401)** — Pinning witnesses hardening for virtual-thread carriers.
- **[#13332](https://github.com/QwenLM/qwen-code/pull/13332)** — Close Managed session correctness gaps from R1/R2 review.
- **[#13065](https://github.com/QwenLM/qwen-code/pull/13065)** — Extract Windows update zips without PowerShell.

### 5. Feature Request Trends
- **Managed Agent maturity**: dual-path architecture, durable tool outcomes (M5b/M5c), Kubernetes runtime, worker ledger.
- **Web/Desktop UX**: plan approval as markdown, side tasks in secondary workspaces, export UX on Android.
- **Memory & context**: background memory dream budgeting, session-scoped memory, `/context` detail accuracy.
- **Shell & process**: job control, busy-state signaling, credential handling for git plugins.

### 6. Developer Pain Points
- **Token bleed**: compaction ignoring server ceiling, side-query budget follow-ups, `/context` double-counting MCP tokens.
- **Shell instability**: POSIX cancellation leaving descendants, shell-mode busy-state races, Windows clipboard CRLF pollution.
- **Output noise**: scaffolding tags (tool-result XML, system-reminders) leaking to user-visible text.
- **Auth & startup hangs**: credential prompts blocking plugin repo loads, extension update-check reasons hidden.
- **Display bugs**: token counts showing `1000.0k`/`1000k` instead of `1.0M`, memory index budget duplication.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



# DeepSeek TUI Community Digest — 2026-10-06

*Source: [github.com/Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI) (tracked as Codewhale)*

---

## 1. Today's Highlights

The project is in an intense refactoring and hardening phase ahead of a **v0.10.1 patch release**. The dominant theme is **decomposition** — breaking the monolithic TUI crate into smaller, focused components — alongside a wave of timeout/reliability fixes targeting stalled providers, orphaned subprocesses, and unbounded resource consumption. A large batch of audit findings (resource limits, crash-atomicity, idempotency) has been filed as agent-ready issues, signaling a major security and stability push.

---

## 2. Releases

*No new releases in the last 24 hours.* The most recent tagged version is **v0.10.0**; v0.10.1 is in planning as a patch release that finishes in-progress work without new features or breaking changes ([#6094](https://github.com/codewhale-hq/Codewhale/issues/6094)).

---

## 3. Hot Issues

### 🔴 #5316 — EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)
- **Author:** aboimpinto | **Comments:** 31
- The flagship structural issue. A draft PR (#6832) has been submitted to adopt shared command Shapes for `/permissions` and `/status`. This is the coordination epic for splitting the TUI monolith into discrete crates. High activity, foundational importance.
- [Link](https://github.com/codewhale-hq/Codewhale/issues/5316)

### 🔴 #5586 — Decompose the mega files: lib.rs (18.7k), config.rs (12.3k), client.rs (11.1k), runtime_threads.rs (9.3k)
- **Author:** Hmbown | **Comments:** 8
- Targets the largest single-file bottlenecks in the codebase. Contributes to the C09 core execution plan. These files are prime candidates for extraction into dedicated crates.
- [Link](https://github.com/codewhale-hq/Codewhale/issues/5586)

### 🔴 #6094 — v0.10.1 — start here: finishing what 0.10.0 started, and how to help
- **Author:** Hmbown | **Comments:** 7 | 👍 1
- The release planning issue. Defines v0.10.1 as a patch-only release. Acts as the onboarding hub for contributors looking for concrete, scoped tasks.
- [Link](https://github.com/codewhale-hq/Codewhale/issues/6094)

### 🟡 #6573 — Bug: Multiple TUI Sessions Contend on Subagents Store → CPU Spin-loop
- **Author:** Gabriel-Degret | **Comments:** 1
- A real-world performance bug: idle `codewhale` processes pin CPU at 100% on FreeBSD 15.0 when multiple TUI sessions contend over the subagents store. Needs triage and reproduction.
- [Link](https://github.com/codewhale-hq/Codewhale/issues/6573)

### 🟡 #6603 — Add an optional Decision Gate to speed up routine agent decisions
- **Author:** Andrea-Bruno | **Comments:** 1
- Proposes a lightweight decision gate so the large model isn't woken for routine tool/intent decisions. Directly addresses a latency-and-cost pain point: every user message currently costs 1–3 seconds and real money, even when no deep reasoning is needed.
- [Link](https://github.com/codewhale-hq/Codewhale/issues/6603)

### 🟡 #6795 — Inline provider error frames bypass every retry budget: the turn dies on the first frame
- **Author:** 7jrxt42BxFZo4iAnN4CX | **Comments:** 1
- OpenRouter (and similar providers) can return HTTP 200 with a chunk-level `{"error": ...}` frame. The current code treats the response as successful and aborts the turn, wasting the entire retry budget on a single bad frame. Affects real production usage.
- [Link](https://github.com/codewhale-hq/Codewhale/issues/6795)

### 🟡 #6139 — App-server: finish Runtime client conversion and acceptance
- **Author:** Hmbown | **Comments:** 3
- The HTTP/proxy path now connects to the real Runtime, but the `/tool` path still maintains a local Runtime/default. Remaining conversion and acceptance work is tracked here.
- [Link](https://github.com/codewhale-hq/Codewhale/issues/6139)

### 🟡 #6145 — Command contract: finish the FEAT-02x adoption or fold crates/command-contract
- **Author:** Hmbown | **Comments:** 3
- From the 0.9.14 refactor backlog. `crates/command-contract` is shapes-only (FEAT-014); the live dispatch lives in `tui/src/commands/`. Several FEAT-02x shape groups were adopted in 0.9.13; the remaining groups plus delegation need to land or the crate needs to be folded.
- [Link](https://github.com/codewhale-hq/Codewhale/issues/6145)

### 🟡 #6034 — TUI decomposition is blocked on crate::config: 118 of 128 modules form one component (727,748 lines)
- **Author:** Hmbown | **Comments:** 2
- Quantifies the decomposition challenge: `crates/tui` still holds 118 of 128 modules in a single component spanning ~728k lines. Three modules (`localization`, `palette`, `command_safety`) were extracted in 0.9.13, reducing the crate from 973k to ~958k lines. The config crate is the current blocker.
- [Link](https://github.com/codewhale-hq/Codewhale/issues/6034)

### 🟡 #4166 — Architecture D-2: unify ModelRegistry with RouteResolver
- **Author:** Hmbown | **Comments:** 2
- Contributes to the C04 core execution plan. Aims to eliminate the split between model registry and route resolution, which currently forces two sources of truth for model-to-provider mapping.
- [Link](https://github.com/codewhale-hq/Codewhale/issues/4166)

---

## 4. Key PR Progress

### 🔧 #6846 — 0.10.1 follow-up: Windows LPAC, image drops, shell handoff, error labels, plugin doctor
- **Author:** Hmbown | **Status:** OPEN
- Follow-up to the merged #6815. Verifies Windows LPAC plugin paths against canonical equivalents (f0080cd2e), fixes dragged screenshot/image path handling, shell handoff, error label taxonomy, and plugin doctor diagnostics. Each lane lands as it's verified.
- [Link](https://github.com/codewhale-hq/Codewhale/pull/6846)

### 🔧 #6850 — fix(tools): disclose the agent wait timeout bound in the schema
- **Author:** asto18089 | **Status:** OPEN
- `agent(action="wait")` blocks behind a 30s default (clamped to 120s max) budget but the schema and tool description said nothing about it. Now documented so callers understand the bound and the `timed_out: true` sentinel.
- [Link](https://github.com/codewhale-hq/Codewhale/pull/6850)

### 🔧 #6849 — fix(runtime-api): project dynamic tool-result cancellation through the SSE compat stream
- **Author:** asto18089 | **Status:** OPEN
- When a turn is interrupted during pending approval, the resolution publishes `approval.decided` with `decision: "deny"` and `cancelled: true`. The SSE compat stream was dropping this distinction — now consumers can tell "nobody answered" from a refusal.
- [Link](https://github.com/codewhale-hq/Codewhale/pull/6849)

### ✅ #6856 — docs(tools): align remaining tool descriptions with approval and platform behavior
- **Author:** asto18089 | **Status:** CLOSED
- Several model-facing descriptions understated what the code enforces: `allow_dirty` refuses on dirty worktrees unless explicitly set; `gate_run` blocks dangerous commands unless auto-approve is configured. Descriptions now match reality.
- [Link](https://github.com/codewhale-hq/Codewhale/pull/6856)

### ✅ #6855 — fix(app-server): bound chat-completions proxy requests in time
- **Author:** asto18089 | **Status:** CLOSED
- The `/v1/chat/completions` handler built its upstream client with no timeouts. A provider that accepts the connection and stalls — or trickles the body — wedged the handler indefinitely. Now bounded.
- [Link](https://github.com/codewhale-hq/Codewhale/pull/6855)

### ✅ #6854 — fix(tools): bound and reap pandoc conversions
- **Author:** asto18089 | **Status:** CLOSED
- `pandoc_convert` ran `pandoc` through sync `std::process::Command` from the async execute path, pinning an executor thread with no bound. A cancelled call left the converter orphaned. Now bounded and reaped.
- [Link](https://github.com/codewhale-hq/Codewhale/pull/6854)

### ✅ #6863 — fix(client): bound non-streaming model requests with a retry-aware envelope
- **Author:** asto18089 | **Status:** CLOSED
- The shared client had no total timeout for non-streaming completions. A provider answering 429 with an hour-long `Retry-After` — or one that accepts and stalls — wedged the caller indefinitely. Streaming was already bounded per-chunk; non-streaming now gets a retry-aware envelope.
- [Link](https://github.com/codewhale-hq/Codewhale/pull/6863)

### ✅ #6870 — fix(models,tui): resolve snapshot model ids and probe custom provider rosters
- **Author:** SparkofSpike | **Status:** CLOSED
- Two auto-detection gaps on custom OpenAI-compatible gateways: snapshot/variant model IDs (e.g. `deepseek-v4-pro-0813`, `deepseek-v4-flash-vision`) fell back to a 128K unknown shape; custom provider rosters weren't probed. Both fixed.
- [Link](https://github.com/codewhale-hq/Codewhale/pull/6870)

### 📦 #6809–#6826 — Dependency bumps (dependabot, bot-authored)
- A wave of automated dependency updates across the stack: `gt` (2.17→2.22.4), `@types/node`, `react` 19.2→19.3, `fenix`, `nixpkgs`, `rmcp` 3.4→3.5, `rio-vt` 0.5.26→0.5.28, `thiserror`, `encoding_rs`, `uuid`, and `dtolnay/rust-toolchain`. All open, awaiting review.
- [Link](https://github.com/codewhale-hq/Codewhale/pull/6821)

### 📝 #6393 — Draft: echolocation, token diet, and fork-prefix cache inheritance
- **Author:** AdityaVG13 | **Status:** OPEN (draft, not a merge candidate)
- A design discussion draft covering three directions: agent presence/echolocation, a token diet for context compression, and fork-prefix cache inheritance. Positive maintainer feedback so far; scope still under discussion.
- [Link](https://github.com/codewhale-hq/Codewhale/pull/6393)

---

## 5. Feature Request Trends

Distilling from the open issues, the most-requested feature directions are:

| Direction | Representative Issues | Core Ask |
|---|---|---|
| **Agent presence & observability** | #6322, #6492, #6585 | Show who is working and what they did without opening a panel; machine-built receipts for child agent results (diff, commands, exit codes, test counts, time, spend); provenance on instructions and memory so "whose word wins" is auditable. |
| **Decision gating & cost control** | #6603, #6526 | An optional Decision Gate so routine agent decisions don't wake the large model; configurable knobs for standing-instruction budgets with visible trim/drop notices. |
| **Scratch & workspace isolation** | #6491, #6491 | Per-session scratch directories named to the model; a working-tree lease between agents so concurrent runs don't clobber each other. |
| **Retry & error transparency** | #6795, #6796 | Inline provider error frames must not bypass retry budgets; retries must be visible in the transcript (state: retrying/will recover vs. exhausting budget vs. dying). |
| **MCP auth & connector custody** | #6195 | Move MCP auth from the local machine to the account; evaluate ShannonLink as the default auth/connector layer. |
| **Structural decomposition** | #5316, #5586, #6034 | Break the TUI monolith into focused crates; eliminate mega-files (lib.rs at 18.7k lines, config.rs at 12.3k). |

---

## 6. Developer Pain Points

Recurring frustrations and high-frequency requests distilled from the issue tracker:

1. **Monolithic crate structure** — `crates/tui` still holds 118 of 128 modules in a single component (~728k lines). Extraction is blocked on `crate::config`, and the mega-files (lib.rs, config.rs, client.rs, runtime_threads.rs) resist all-at-once refactoring. Contributors need smaller, safer slices.

2. **Invisible failure modes** — Provider error frames arrive inside HTTP 200 responses and kill turns outright (#6795). Retries happen silently with no transcript visibility (#6796). Tool descriptions understated what the code enforced (#6

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

# ComfyUI Community Digest — 2026-10-06

## 1. Today's Highlights
No new releases landed in the last 24 hours, but the repo is active with 19 issues and 30 PRs updated. The dominant theme is **silent numerical failures**: a cluster of issues and paired fix PRs from `sanchit-jarvis` exposes scheduler and guider nodes that return all-NaN images without raising any error. Hardware friction is the second major thread, with AMD ROCm, Intel XPU, and iGPU problems dominating new reports, alongside continued MiniMax H3 fidelity/VAE complaints.

## 2. Releases
None in the last 24 hours.

## 3. Hot Issues

1. **#16776 — Startup crash on Windows 11 with AMD RX 7900 XTX** (7 comments, open)
   `0xC0000005` in `amdhip64_7.dll` plus `hipErrorInvalidValue` in `model_management.py`; reporter confirms the crash persists with all custom nodes disabled, making it a core/ROCm integration concern rather than a third-party node bug.
   https://github.com/Comfy-Org/ComfyUI/issues/16776

2. **#16589 — MiniMax H3 Ref2VA reference-fidelity regression** (8 comments, open)
   Same workflow and model files now produce degraded identity/spatial preservation versus earlier behavior. High engagement because it is a silent quality regression affecting existing user workflows.
   https://github.com/Comfy-Org/ComfyUI/issues/16589

3. **#13949 — ComfyUI flags AI-generated characters as real people** (8 comments, open)
   Long-running (created 2026-05) moderation/safety false-positive blocking an outpainting workflow on Seedance 2.0. Notable for the tension between content-safety heuristics and legitimate synthetic-content pipelines.
   https://github.com/Comfy-Org/ComfyUI/issues/13949

4. **#16792 — KarrasScheduler silently returns NaN sigmas for small rho**
   Sampling completes, progress bar fills, VAE decodes — and the image is entirely NaN. A classic "no error, black image" failure mode.
   https://github.com/Comfy-Org/ComfyUI/issues/16792

5. **#16800 — CFGNorm returns all-NaN for strength above ~4.3** (96% of declared range)
   `strength` is declared `0.0–100.0`, but ~96% of that range produces NaN with nothing raised. Declared ranges that don't work erode trust in node contracts.
   https://github.com/Comfy-Org/ComfyUI/issues/16800

6. **#16437 — Qwen-Image 2.1 + `--enable-dynamic-vram` corrupts output on ROCm gfx1201** (👍1)
   Silent channel-slice offset corruption after any model evict/reload; every subsequent job stays corrupt until restart. Particularly damaging because the first job is correct, masking the cause.
   https://github.com/Comfy-Org/ComfyUI/issues/16437

7. **#16781 — Feature: way better support for AMD GPUs**
   Frustration over install/launch friction, including DirectML assuming NVIDIA. Symptomatic of the broader AMD support pressure visible across this batch.
   https://github.com/Comfy-Org/ComfyUI/issues/16781

8. **#16804 — Intel XPU pinned-memory path is unreachable**
   `MAX_PINNED_MEMORY` never assigned and `cudaHostRegister` is CUDA-only, so XPU hosts silently fall back with no error. A precise, code-level report of dead code paths on non-CUDA backends.
   https://github.com/Comfy-Org/ComfyUI/issues/16804

9. **#15237 — Feature: support ByteDance Seedance 2.5**
   Requests 30-second single-pass generation and up to 50 multimodal reference inputs — indicative of demand for longer-context, reference-heavy video models.
   https://github.com/Comfy-Org/ComfyUI/issues/15237

10. **#16787 — Missing VAE keys with FP32 video VAE (MiniMax H3)**
    Fresh report (2026-10-05) on VAE key warnings in the FP32 video VAE path, adding to the MiniMax H3 cluster of issues.
    https://github.com/Comfy-Org/ComfyUI/issues/16787

## 4. Key PR Progress

1. **#16805 — Refactor 3D model remeshing** (kijai)
   Introduces a CelloCut-style global inside/outside graph cut over a Delaunay tetrahedralization of the UDF shell for fully manifold meshes. A substantial rework of `RemeshMesh` by a prominent community maintainer.
   https://github.com/Comfy-Org/ComfyUI/pull/16805

2. **#16802 — Fix CFGNorm all-NaN for large strength**
   Applies the strength multiplier after the `clamp(max=1.0)` so the node stays attenuate-only instead of producing NaN.
   https://github.com/Comfy-Org/ComfyUI/pull/16802

3. **#16801 — Fix PerpNegGuider NaN when positive equals empty_conditioning**
   Falls back to ordinary CFG when the perpendicular component is undefined — the sensible behavior for an empty positive prompt.
   https://github.com/Comfy-Org/ComfyUI/pull/16801

4. **#16795 — Fix KarrasScheduler NaN sigmas for small rho**
   Guards the `rho` math so small values no longer produce NaN sigmas silently.
   https://github.com/Comfy-Org/ComfyUI/pull/16795

5. **#16796 — Fix ExponentialScheduler / PolyexponentialScheduler accepting sigma_min/max = 0**
   Both nodes declare `min=0.0` but take `math.log()`, raising an unhelpful `math domain error`; the fix aligns declared ranges with computable values.
   https://github.com/Comfy-Org/ComfyUI/pull/16796

6. **#16745 — Fix crash in Lens attention on offloaded sinks parameter**
   Addresses a resume-from-suspend crash on AMD RX 9060 XT (gfx1200) / ROCm 7.2 with Lens turbo + gpt_oss_20b text encoder.
   https://github.com/Comfy-Org/ComfyUI/pull/16745

7. **#16763 — Attach metadata to websocket messages of a prompt** (christian-byrne)
   A `workflow_metadata` dict (≤256 bytes) is echoed in every websocket message for a prompt, letting the frontend map messages back to workflows.
   https://github.com/Comfy-Org/ComfyUI/pull/16763

8. **#16167 — Governance enforcement for custom nodes** (guill)
   Adds `GOVERNANCE_*` gating so organizations can restrict execution to approved node packs — blocking unapproved `prestartup_script.py`/`__init__.py` execution. No behavior change for normal installs.
   https://github.com/Comfy-Org/ComfyUI/pull/16167

9. **#16797 — Preserve outputs with batch filename prefixes**
   Fixes `image_%batch_num%`-style prefixes reusing prior filenames and overwriting earlier images plus their prompt metadata.
   https://github.com/Comfy-Org/ComfyUI/pull/16797

10. **#16680 — Fix LTXVPreprocess crashing on 4-channel (RGBA) images**
    H.264 `rgb24` requires exactly 3 channels; 4-channel images from `JoinImageWithAlpha` and background-removal nodes currently raise `ValueError`.
    https://github.com/Comfy-Org/ComfyUI/pull/16680

*Also notable:* #16571 (Qwen-Image 2.1 checkerboard artifact fix), #15180 (video metadata extraction into `system_metadata`), #16722/#16718/#16771/#16803 (a coordinated batch of asset-subsystem fixes from `synap5e`), #16728 (auto-disable pinned memory on AMD iGPUs), #16200 (standardized 3D output items).

## 5. Feature Request Trends

- **First-class AMD / Intel GPU support** — Repeated requests for painless ROCm, iGPU, and XPU setup, including an end to DirectML assuming NVIDIA hardware (#16781, #16804).
- **New frontier model integrations** — Explicit requests for ByteDance Seedance 2.5 (long-context video, many reference inputs) and continued MiniMax H3 maturation (#15237, #16589, #16787).
- **Standardized external API surface** — A proposal for a workflow capability layer exposing an OpenAI-compatible image-generation API on top of ComfyUI workflows (#15310).
- **Better diagnostics and error surfacing** — Requests to promote log-only warnings (e.g. `lora key not loaded`) into user-visible messages (#16798).
- **Declared input ranges that actually work** — A cross-cutting demand that node `INPUT_TYPES` contracts be honest and either function or fail loudly.

## 6. Developer Pain Points

1. **Silent NaN corruption.** The single loudest pattern this cycle: CFGNorm, PerpNegGuider, KarrasScheduler, ExponentialScheduler, and PolyexponentialScheduler all return all-NaN outputs with no exception. Users get a black image and a filled progress bar — the worst possible debugging signal.
2. **Cryptic, unlocalized errors.** `ValueError: math domain error` names neither node nor input; missing VAE keys appear only as warnings; XPU pinned-memory fallback is entirely silent.
3. **Hardware vendor friction.** AMD ROCm startup crashes, model-reload corruption on gfx1201, iGPU VRAM/GTT mismatches, and dead CUDA-only code paths on Intel XPU consume disproportionate issue volume.
4. **Regressions on unchanged workflows.** MiniMax H3 Ref2VA degrading with identical files/models points to model-pipeline drift that users cannot diagnose or work around.
5. **State-dependent corruption.** The dynamic-VRAM corruption only manifests after a model reload and persists until restart — extremely hard to isolate, and a strong argument for louder invariant checks.

*Sources: [ComfyUI Issues](https://github.com/Comfy-Org/ComfyUI/issues) · [ComfyUI Pull Requests](https://github.com/Comfy-Org/ComfyUI/pulls)*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Community Digest — 2026-10-06

## 1. Today's Highlights

No new releases landed in the last 24 hours, but the issue tracker was busy: **tool-call/parser fragility** remains the dominant theme, with Qwen3.x and GLM-based models triggering 500s and text regressions. On the PR side, maintainer `dhiltgen` pushed a cluster of MLX/Apple-Silicon performance and correctness fixes (GPU idle latency, recurrent state memory, model lookup overhead), while several community PRs directly target the open parser and streaming bugs. A second cluster of issues centers on **Ollama Cloud usage reporting** — cached tokens are still reported as 0 across multiple API paths.

## 2. Releases

None in the last 24h. (Recent context: users on 0.35.1 are reporting glm-ocr and mistral-medium regressions — see Hot Issues.)

## 3. Hot Issues

1. **[#17778 – qwen 3.8: "no user query found in messages" (500)](https://github.com/ollama/ollama/issues/17778)** — The most-engaged issue of the day (48 comments, 27 👍). A 205k-context tool-calling loop causes the chat API to lose the user query and return 500. This is the canonical symptom of the truncation bug targeted by PR #18697.

2. **[#18795 / #15758 – Cloud cached tokens always reported as 0](https://github.com/ollama/ollama/issues/15758)** — Two separate reports (one CLOSED, one OPEN since April) confirm the usage extractors drop `prompt_eval_cached_count`. Matters because caching is billed at a discounted rate; users can't verify their savings. Steady community interest (7 👍).

3. **[#16383 – qwen3.6 violates its own tool-call template; qwen3.5 parser returns 500](https://github.com/ollama/ollama/issues/16383)** — Mismatch between qwen3.6's renderer output and the qwen3.5 parser's expectations. Intermittent but reproducible on simple calls — a direct parser-robustness problem.

4. **[#18685 – llama-server wedges on full-cache-hit, hangs all later requests (CUDA)](https://github.com/ollama/ollama/issues/18685)** — A stuck-state bug with no error surface; every subsequent request to that model hangs until unload. High severity for production CUDA users.

5. **[#18796 – Fails on second `ollama run` (Raspberry Pi 5 / Debian 13)](https://github.com/ollama/ollama/issues/18796)** — Fresh install works once, then the UI hangs with no output. Small-device usability blocker.

6. **[#18810 – glm-ocr regression in 0.35.1: "token repeat limit reached"](https://github.com/ollama/ollama/issues/18810)** — Auto-update from 0.34.0 broke HTML table extraction from document images. A clear version-regression report that points at the 0.35.1 release.

7. **[#18769 – `clef-flash` always fails on `/v1/systemone` ("non-finite logit")](https://github.com/ollama/ollama/issues/18769)** — Endpoint-specific first-forward-pass failure on CUDA, with a distinct CPU error. Suggests the decision-model path is less tested than `/v1/chat/completions`.

8. **[#18770 – mistral-medium-3.5:128b uses 127GB RAM on 128GB Mac, ~1 word/min](https://github.com/ollama/ollama/issues/18770)** — Memory accounting/mmap behavior looks wrong on Apple Silicon for large models.

9. **[#18789 – MLX per-layer quantization overrides ignored on import](https://github.com/ollama/ollama/issues/18789)** — Mixed-precision MLX checkpoints import but fail to load with `quantized_matmul` shape mismatch. Niche but blocks the mixed-quant workflow.

10. **[#18801 – Make the ChatGPT Desktop "Connect" prompt opt-in](https://github.com/ollama/ollama/issues/18801)** — New in 0.34.0, a non-dismissible promotion appears every launch. Purely UX/principle-driven, but speaks to community sentiment around local-first tooling.

*Also noted:* [#18808 Muse Glimmer 30B GGUF broken](https://github.com/ollama/ollama/issues/18808), [#18799 integer-second duration overflow](https://github.com/ollama/ollama/issues/18799), [#18806/#18798 Responses API streaming index reuse](https://github.com/ollama/ollama/issues/18798), [#18653 Cloud credit-balance API stale](https://github.com/ollama/ollama/issues/18653).

## 4. Key PR Progress

1. **[#18804 – openai: close text items before streaming tool calls](https://github.com/ollama/ollama/pull/18804)** — Fixes #18798: finishes the text message item and advances `outputIndex` before assigning indices to function calls, so the Responses API stream is spec-compliant.

2. **[#18802 – parsers: keep qwen3.5 tool calls when a partial tag follows `<tool_call>`](https://github.com/ollama/ollama/pull/18802)** — Addresses the exact Qwen3.5 failure mode in #16383 by reordering the partial-tag vs. think-close checks.

3. **[#18697 – chat: preserve the most recent user message during truncation](https://github.com/ollama/ollama/pull/18697)** — Directly targets the "500: no user query found in messages" class (#17778). Keeps the newest user turn during multi-step tool loops.

4. **[#18803 – parsers: parse streamed LFM2 bare tool calls](https://github.com/ollama/ollama/pull/18803)** — Extends the LFM2 fallback to per-token streaming, fixing a case where the wrapper-less `[fn(...)]` form was only detected on the final `Add`.

5. **[#18663 – parsers: preserve GLM string argument content](https://github.com/ollama/ollama/pull/18663)** — Detects `</tool_call>` only outside an open `<arg_value>` and preserves newlines in well-formed GLM values.

6. **[#18800 – envconfig: clamp integer-second durations before overflow](https://github.com/ollama/ollama/pull/18800)** — Fixes #18799: validates `OLLAMA_KEEP_ALIVE` / `OLLAMA_LOAD_TIMEOUT` before the `time.Second` multiply so huge values no longer wrap to short timeouts.

7. **[#18807 – mlx: mitigate high latency after GPU idle](https://github.com/ollama/ollama/pull/18807)** — Carries the MLX residency-refresh patch and refreshes every second; fixes #18744 (first-request-after-idle stalls).

8. **[#18809 – gemma4: use MLX SDPA for CUDA prefill with wide head dims](https://github.com/ollama/ollama/pull/18809)** — Replaces the hand-rolled attention path with MLX's SDPA; claims ~12× faster prompt processing on gemma4 e2b and 2–4× on 12b.

9. **[#18805 – mlx: compact restored recurrent state after speculative rollback](https://github.com/ollama/ollama/pull/18805)** — Frees the oversized backing buffer retained by a restored recurrent state, reducing memory held between requests.

10. **[#18433 – renderers: render a tool's extra schema keys in stable order](https://github.com/ollama/ollama/pull/18433)** — Fixes nondeterministic Go map iteration in `renderAdditionalKeys`, which changed tool schema ordering between identical sends (fixes #18430).

*Also in flight:* [#18623 AMD Windows GPU list](https://github.com/ollama/ollama/pull/18623), [#16831/#16850 gemma4 VRAM & thinking defaults](https://github.com/ollama/ollama/pull/16850), [#18783 enforce schema for direct thinking-model answers](https://github.com/ollama/ollama/pull/18783), community integration PRs [#18794 Spillway](https://github.com/ollama/ollama/pull/18794) and [#15986 CAJAL CLI](https://github.com/ollama/ollama/pull/15986).

## 5. Feature Request Trends

- **Cloud observability & billing transparency** — Requests to expose credit balance, true spend, and cached-token counts in the usage API ([#18653](https://github.com/ollama/ollama/issues/18653), [#18795](https://github.com/ollama/ollama/issues/18795), [#15758](https://github.com/ollama/ollama/issues/15758)). Users want to verify the discounted cached-input rate they're being billed at.
- **Opt-in / dismissible UI integrations** — [#18801](https://github.com/ollama/ollama/issues/18801) asks that the ChatGPT Desktop promotion be made opt-in rather than default. Broader signal: local-first users want control over cloud/third-party tie-ins.
- **Tool-calling robustness across model families** — Not phrased as a feature request, but the volume of parser/renderer issues (Qwen3.x, GLM, LFM2) makes "tolerant, model-version-aware tool-call parsing" the de facto most-requested capability.
- **Desktop UX polish** — Resizable chat-history column on macOS ([#18709](https://github.com/ollama/ollama/issues/18709)) and homepage rendering issues ([#18791](https://github.com/ollama/ollama/issues/18791)).

## 6. Developer Pain Points

- **Tool-call parsing is the single largest source of breakage.** Multiple open issues (#17778, #16383) and PRs (#18802, #18803, #18663, #18804, #18433) all orbit the same theme: renderers and parsers disagree, model versions drift from their registered templates, and the failure mode is a hard 500 rather than graceful degradation.
- **Silent hangs instead of errors.** The llama-server wedge (#18685) and the Raspberry Pi second-run stall (#18796) both present as "no output, no error" — the hardest class of bug to diagnose.
- **Version regressions from auto-update.** glm-ocr broke between 0.34.0 and 0.35.1 (#18810), and mistral-medium memory behavior changed (#18770). Users feel they have limited control over when they take a regression.
- **Ollama Cloud reporting gaps.** Cached tokens read as 0 across the API (#15758, #18795), and the usage endpoint still returns the pre-pay-as-you-go subscription shape (#18653) — frustrating for anyone trying to budget or audit spend.
- **Memory accounting on constrained hardware.** Oversized RSS/wired memory on a 128GB Mac (#18770) and MLX quantization overrides being dropped (#18789) point at gaps in the memory-planning path for large or mixed-precision models.

---
*Source data: github.com/ollama/ollama — issues and PRs updated 2026-10-05.*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

# llama.cpp Community Digest — 2026-10-06

## 1. Today's Highlights

llama.cpp **v0.6.0** landed, introducing the new `llama_batch_ext` extended batch API (`llama_process`) for mixed token/embedding inputs and MTP/deepstack state embeddings, plus support for the GLM-5.3-Flash (GLM5-Next) 320B hybrid model and the Clef decision model (text + vision). On the backend side, a burst of Vulkan work (sparse flash attention for quantized K/V, shmem OOB fixes, RMS-norm subgroup reductions) and Hexagon scalability updates dominated the release stream. Community attention is focused on MTP stability for Qwen3.8-Flash-Next, a long-running SYCL regression on Intel Arc, and MoE offload performance.

## 2. Releases

**v0.6.0** — [b11429](https://github.com/ggml-org/llama.cpp/releases/tag/b11429) / [v0.6.0](https://github.com/ggml-org/llama.cpp/releases/tag/v0.6.0)
- New `llama_batch_ext` extended batch API with `llama_process` for mixed token/embedding inputs and MTP/deepstack state embeddings.
- Model support: GLM-5.3-Flash (GLM5-Next) 320B hybrid, Clef decision model (text + vision), MTP speculative decoding.

**Recent builds (last 24h):**
- [b11430](https://github.com/ggml-org/llama.cpp/releases/tag/b11430) — Hexagon: head-parallel flash-attn partitioning for row-split multicore; matmul/flash-attn scalability updates.
- [b11425](https://github.com/ggml-org/llama.cpp/releases/tag/b11425) — CUDA: makes the `alloc_deps` check batch-independent (fixes [#29980](https://github.com/ggml-org/llama.cpp/issues/29980)).
- [b11424](https://github.com/ggml-org/llama.cpp/releases/tag/b11424) — Vulkan: fix Flash Attention shmem write out of bounds.
- [b11418](https://github.com/ggml-org/llama.cpp/releases/tag/b11418) — Server: vision input support for Clef; multi-dim token positions; batch embedding extensions.
- [b11417](https://github.com/ggml-org/llama.cpp/releases/tag/b11417) — CUDA: optimized accumulation in MMQ for NVFP4.
- [b11415](https://github.com/ggml-org/llama.cpp/releases/tag/b11415) — Server: reject partial media truncation.
- [b11414](https://github.com/ggml-org/llama.cpp/releases/tag/b11414) — Vulkan: fix stale `prealloc_y` reuse across flash attention and soft_max.
- [b11413](https://github.com/ggml-org/llama.cpp/releases/tag/b11413) — Vulkan: sparse flash attention for quantized K/V.

## 3. Hot Issues

1. **[#24168 — SYCL: empty/gibberish output on hybrid models + `ggml_sycl_op_mul_mat` crash (Intel Arc Pro B60)](https://github.com/ggml-org/llama.cpp/issues/24168)** — Highest-traffic issue (27 comments). A pinpointed regression between b9128–b9159 on qwen3next/qwen35 architectures; the SYCL backend is effectively unusable for hybrid models on Arc. Persistent and stale, suggesting no maintainer fix yet.
2. **[#29811 — Assert at startup running Qwen3.8-Flash with MTP](https://github.com/ggml-org/llama.cpp/issues/29811)** — 17 comments. MTP spec-draft startup assertion on the newest Qwen3.8-Flash-Next models; directly relevant to the v0.6.0 MTP push and blocking early adopters.
3. **[#28753 — `ggml_backend_sched_alloc_splits`: unexpected graph reallocation crash](https://github.com/ggml-org/llama.cpp/issues/28753)** — Scheduler-level crash affecting Intel Arc builds; touches core graph memory planning, so it can surface across backends.
4. **[#24822 — Server: improve progress reporting](https://github.com/ggml-org/llama.cpp/issues/24822)** — Tracking issue (10 comments, 4 👍) for `/models/sse` reporting both loading and downloading state in router and standalone modes. High community demand for better UX in long model loads.
5. **[#25859 — Offloaded-MoE prefill leaves GPU idle on serial expert H2D copies](https://github.com/ggml-org/llama.cpp/issues/25859)** — Detailed profiling of `--n-cpu-moe` showing PCIe serialization stalls. Core pain point for single-GPU MoE users; informs PR #27861.
6. **[#28734 — qwen4exp (Qwen3.8-Flash-Next) CUDA: decode slows linearly with context](https://github.com/ggml-org/llama.cpp/issues/28734)** — Linear decode degradation on multi-3090 setups; affects long-context serving viability for the newest model family.
7. **[#27506 — [ROCm] Severe PPL explosion starting from b10040 (CLOSED)](https://github.com/ggml-org/llama.cpp/issues/27506)** — Closed after 9 comments; correctness regression on Ryzen AI Max+ 395 iGPU. Important reference point for ROCm quality gates.
8. **[#24303 — Qwen3.6-35B-A3B merges consecutive images into super-frames (CLOSED)](https://github.com/ggml-org/llama.cpp/issues/24303)** — 4 👍. Multimodal input handling bug where 4 images are read as 2; closed but highlighted the fragility of vision preprocessing paths.
9. **[#17798 — Feature Request: multiple responses in WebUI](https://github.com/ggml-org/llama.cpp/issues/17798)** — Long-running enhancement (since Dec 2025) for parallel response generation in the WebUI; a recurring ask from chat-UI users.
10. **[#29526 — Vulkan A770 long-running decode degradation (empty EOS replies) after ~7–8h](https://github.com/ggml-org/llama.cpp/issues/29526)** — Reliability concern for production serving: prefill works but decode silently returns EOS. Also related: [#27097](https://github.com/ggml-org/llama.cpp/issues/27097) (Vulkan slow with ReBAR disabled, 2 👍) and [#26581](https://github.com/ggml-org/llama.cpp/issues/26581) (Intel Xe2 decode attention latency-bound).

*Also fresh:* [#30004 — CUDA ADD/GELU slower on B200 since PDL commit](https://github.com/ggml-org/llama.cpp/issues/30004) — a new performance regression report on Blackwell datacenter GPUs.

## 4. Key PR Progress

1. **[#30015 — server: refactor modalities handling](https://github.com/ggml-org/llama.cpp/pull/30015)** (ngxson) — Cleanup following #29987, consolidating model modality state and `gguf_context` handling; groundwork for broader multimodal support.
2. **[#30017 — models: consolidate nextn row cropping, make graph topology independent of `embeddings_nextn`](https://github.com/ggml-org/llama.cpp/pull/30017)** (ggerganov) — Fixes graph-topology mismatch between reserved and actual graphs when MTP extraction flags toggle. Complements [#30020](https://github.com/ggml-org/llama.cpp/pull/30020) (re-reserve sched on nextn flag change).
3. **[#29994 — llama: fix k-pool scatter data race on shared sequences](https://github.com/ggml-org/llama.cpp/pull/29994)** — TSan-flagged race when sequences share pooled cells after `seq_cp`; correctness fix for k-pool models.
4. **[#29882 — Vulkan: RMS norm optimization using subgroup reductions](https://github.com/ggml-org/llama.cpp/pull/29882)** — WIP perf work benchmarked on Intel B70 Arc Pro and RTX 4060 Ti; part of the ongoing Vulkan kernel optimization wave.
5. **[#29872 — Vulkan: check for null `vkEnumerateInstanceVersion`](https://github.com/ggml-org/llama.cpp/pull/29872)** — Fixes a null-pointer deref on Vulkan 1.0 loaders (e.g., Android 8.1); improves portability on older devices.
6. **[#29995 — Hexagon: add pool op support](https://github.com/ggml-org/llama.cpp/pull/29995)** — HTP acceleration for 1D/2D average/max pooling, required by the Gemma 4 image encoder CLIP graph; expands Hexagon backend coverage.
7. **[#29889 — [SYCL]: fix memory errors in mul_mat, split buffer, host pool](https://github.com/ggml-org/llama.cpp/pull/29889)** — Addresses out-of-bounds strided reads and multi-GPU staging issues; directly relevant to the SYCL crash reports above.
8. **[#27861 — llama: GPU-resident LRU cache for host-offloaded MoE expert weights](https://github.com/ggml-org/llama.cpp/pull/27861)** — Caches recently used experts on the GPU to avoid re-streaming from system RAM each token; targets the `-ncmoe` bottleneck in #25859.
9. **[#30021](https://github.com/ggml-org/llama.cpp/pull/30021) / [#30022](https://github.com/ggml-org/llama.cpp/pull/30022) — ggml-cuda HIP: tune GCN MMQ configs and stream_k algo](https://github.com/ggml-org/llama.cpp/pull/30022)** — Full re-tune of MMQ configs across quants for AMD GCN, plus stream_k enablement; also [#29910](https://github.com/ggml-org/llama.cpp/pull/29910) fixes heavy VGPR spills on Q2_K.
10. **[#30023 — tests: consolidate context state tests into `test-llama-context`](https://github.com/ggml-org/llama.cpp/pull/30023)** (ggerganov) — Merges three duplicated state tests into one, reducing test maintenance overhead.

*Also notable:* [#30014 — change default symbol visibility to hidden](https://github.com/ggml-org/llama.cpp/pull/30014) (API/ABI hygiene), [#15550 — quantize `--target-size`/`--target-bpw` optimal quant selection](https://github.com/ggml-org/llama.cpp/pull/15550) (long-running), [#29761 — Qwen4Exp: add MTP](https://github.com/ggml-org/llama.cpp/pull/29761), and [#30012 — fix sleep race stranding queued tasks](https://github.com/ggml-org/llama.cpp/pull/30012).

## 5. Feature Request Trends

- **Multimodal robustness** — Repeated requests around vision input handling: correct multi-image handling ([#24303](https://github.com/ggml-org/llama.cpp/issues/24303)), media token handling in embeddings ([#26201](https://github.com/ggml-org/llama.cpp/issues/26201)), and server-side modality refactoring ([#30015](https://github.com/ggml-org/llama.cpp/pull/30015), Clef vision in [b11418](https://github.com/ggml-org/llama.cpp/releases/tag/b11418)).
- **Server observability and UX** — Progress reporting for model load/download ([#24822](https://github.com/ggml-org/llama.cpp/issues/24822)), multiple WebUI responses ([#17798](https://github.com/ggml-org/llama.cpp/issues/17798)), and HTTP MCP server support ([#29951](https://github.com/ggml-org/llama.cpp/issues/29951)).
- **Memory/VRAM efficiency** — Avoiding unnecessary logits buffers for encoder-only models ([#29388](https://github.com/ggml-org/llama.cpp/issues/29388)) and better MoE expert offload behavior ([#25859](https://github.com/ggml-org/llama.cpp/issues/25859), [PR #27861](https://github.com/ggml-org/llama.cpp/pull/27861)).
- **New model coverage** — Apertus (ETH Zurich) family support request ([#26300](https://github.com/ggml-org/llama.cpp/issues/26300), 4 👍), alongside rapid turnaround on GLM-5.3-Flash, Clef, and Qwen3.8-Flash-Next.
- **Quantization ergonomics** — Automatic quant-mix selection to hit a target file size or BPW ([PR #15550](https://github.com/ggml-org/llama.cpp/pull/15550)).

## 6. Developer Pain Points

- **Backend-specific regressions are the top frustration.** SYCL on Intel Arc ([#24168](https://github.com/ggml-org/llama.cpp/issues/24168), [#28753](https://github.com/ggml-org/llama.cpp/issues/28753), [#29288](https://github.com/ggml-org/llama.cpp/issues/29288)) and Vulkan long-run degradation ([#29526](https://github.com/ggml-org/llama.cpp/issues/29526), [#27097](https://github.com/ggml-org/llama.cpp/issues/27097), [#26581](https://github.com/ggml-org/llama.cpp/issues/26581)) generate recurring bug reports with slow resolution, frequently tagged `stale`.
- **MTP and nextn instability.** Multiple fresh issues ([#29811](https://github.com/ggml-org/llama.cpp/issues/29811), [#28734](https://github.com/ggml-org/llama.cpp/issues/28734), [#29562](https://github.com/ggml-org/llama.cpp/issues/29562)) plus active PRs ([#30017](https://github.com/ggml-org/llama.cpp/pull/30017), [#30020](https://github.com/ggml-org/llama.cpp/pull/30020)) show the MTP path is still maturing — assertions, context-dependent slowdowns, and graph reallocation bugs.
- **Performance regressions from individual commits.** Users are quick to bisect: PPL explosion from b10040 ([#27506](https://github.com/ggml-org/llama.cpp/issues/27506)), 2× slower prefill since #29184 ([#29980](https://github.com/ggml-org/llama.cpp/issues/29980), now fixed), B200 ADD/GELU slowdown since the PDL commit ([#30004](https://github.com/ggml-org/llama.cpp/issues/30004)). Fast bisection reports are valuable but indicate thin regression coverage.
- **Long-running server reliability.** Stalls mid-decode with healthy `/health` but hanging `/slots` ([#27388](https://github.com/ggml-org/llama.cpp/issues/27388)) and sleep-state races ([#30012](https://github.com/ggml-org/llama.cpp/pull/30012)) point to concurrency/lifecycle fragility under sustained load.
- **MoE offload bandwidth wall.** The `-ncmoe` / `-ot exps=CPU` path remains H2D-bound, with serial expert copies idling the GPU ([#25859](https://github.com/ggml-org/llama.cpp/issues/25859)) and poor multi-GPU Hy3 utilization ([#26238](https://github.com/ggml-org/llama.cpp/issues/26238)).
- **Build/resource overhead.** High RAM usage during SYCL builds ([#30024](https://github.com/ggml-org/llama.cpp/issues/30024)) and memory-error classes in SYCL ops ([#29889](https://github.com/ggml-org/llama.cpp/pull/29889)) add friction for contributors working on non-CUDA backends.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*