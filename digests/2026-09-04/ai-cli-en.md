# AI CLI Tools Community Digest 2026-09-04

> Generated: 2026-09-03 22:15 UTC | Tools covered: 12

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



## Today's Highlights

1. **Claude Code v2.1.259** — Added `managedMcpServers` organizational setting to push MCP server entries to all users, and a `--permission-prompts none` flag for headless automation. [GitHub](https://github.com/anthropics/claude-code)

2. **OpenAI Codex v0.153.1** — Hotfix backporting GPT-6-Astra model catalog support via API without exposing it in the model picker or changing defaults. [GitHub](https://github.com/openai/codex)

3. **GitHub Copilot CLI v1.0.83-4** — Added Client ID Metadata Document (CIMD) support for MCP OAuth sign-in; also removed the interrupted-session restore prompt by default and improved large-session resume responsiveness. [GitHub](https://github.com/github/copilot-cli)

4. **Qwen Code v0.23.0** — Shipped with git-state hints (e.g. `↓3 · origin/main`) displayed alongside the Update Project, Commit, and Push buttons in the branch picker. [GitHub](https://github.com/QwenLM/qwen-code)

5. **llama.cpp builds b10780–b10792** — Delivered Metal sparse Flash Attention, OpenCL GEMM optimizations for speculative decoding, multi-GPU concurrent CUDA streams, and a GBNF grammar fix for empty JSON object schemas. [GitHub](https://github.com/ggerganov/llama.cpp)

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills Community Highlights Report
**Data as of 2026-09-04 · Source: [anthropics/skills](https://github.com/anthropics/skills)**

---

## 1. Top Skills Ranking — Most-Discussed PRs

| # | PR | Skill / Focus | Description | Status |
|---|----|---------------|-------------|--------|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator (eval fix)** | Fixes `run_eval.py` reporting 0% recall for every skill description — a bug that made the entire description-optimization loop optimize against noise. Multiple Windows stream-reading and trigger-detection fixes bundled. | 🟡 Open |
| 2 | [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents. Targets a universal pain point in Claude-generated output. | 🟡 Open |
| 3 | [#1615](https://github.com/anthropics/skills/pull/1615) | **scnet-hpc** | Skill for operating SCNet HPC clusters via profile-based SSH and Slurm workflows — cluster discovery, job generation, module management, and accelerator guidance. | 🟡 Open |
| 4 | [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer + skill-security-analyzer** | Two meta-skills evaluating Skill quality across five dimensions (structure, documentation, examples, resources, metadata) and security posture. Published under `example-skills`. | 🟡 Open |
| 5 | [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Comprehensive testing skill covering the Testing Trophy model, AAA unit-test pattern, React component testing (Testing Library), and more. | 🟡 Open |
| 6 | [#486](https://github.com/anthropics/skills/pull/486) | **ODT** | Full OpenDocument Format skill: create, fill, read, and convert `.odt`/`.ods` files; triggers on any ODT/ODF/LibreOffice mention. | 🟡 Open |
| 7 | [#1628](https://github.com/anthropics/skills/pull/1628) | **Hivemind** | Zero-cost multi-agent orchestration delegating mechanical work to headless OpenCode workers on free models; Claude Code remains planner/reviewer/merger. | 🟡 Open |
| 8 | [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit (v1.3.0)** | Mechanical file verification + four-dimension reasoning quality gate applied before delivery. Universal across projects and tech stacks. | 🟡 Open |

---

## 2. Community Demand Trends (from Issues)

Analysis of top community Issues reveals five concentrated demand areas:

1. **Trust & Namespace Security** — Issue [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 2 👍) reports community skills impersonating official Anthropic skills, creating trust-boundary abuse. This signals demand for skill provenance/authentication signals.

2. **Org-Wide Skill Sharing** — Issue [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8 👍) is the most upvoted open issue, requesting native org-level skill libraries instead of manual `.skill` file distribution.

3. **Skill Creator Evaluation Infrastructure** — Issues [#556](https://github.com/anthropics/skills/issues/556) (12 comments) and [#1390](https://github.com/anthropics/skills/issues/1390) (4 comments) both flag broken evaluation harnesses, reflecting strong demand for reliable skill-testing tooling.

4. **Platform-Specific Enterprise Skills** — Interest in ServiceNow [#568](https://github.com/anthropics/skills/pull/568), HPC clusters [#1615](https://github.com/anthropics/skills/pull/1615), and SharePoint [#1175](https://github.com/anthropics/skills/issues/1175) points to demand for domain-specialist skills beyond general coding assistance.

5. **Output Quality & Verification** — Proposals [#1329](https://github.com/anthropics/skills/issues/1329) (compact-memory), [#1385](https://github.com/anthropics/skills/issues/1385) (reasoning quality gate pipeline), and [#412](https://github.com/anthropics/skills/issues/412) (agent governance) reflect appetite for self-auditing and governance-oriented skills.

---

## 3. High-Potential Pending Skills

These open PRs have active community discussion or address well-identified gaps and may land in the near term:

- **[PR #1298](https://github.com/anthropics/skills/pull/1298)** — Fixes the skill-creator evaluation pipeline; foundational for all future skill iteration. Multiple independent confirmations of the bug (#556) increase urgency.
- **[PR #723](https://github.com/anthropics/skills/pull/723)** — `testing-patterns` fills a clear gap; no existing testing-focused skill in the collection.
- **[PR #514](https://github.com/anthropics/skills/pull/514)** — `document-typography` addresses a near-universal complaint about AI document output quality.
- **[PR #83](https://github.com/anthropics/skills/pull/83)** — Meta-skills for quality and security analysis; aligns with community demand for skill evaluation tooling.
- **[PR #1367](https://github.com/anthropics/skills/pull/1367)** — Self-audit with a documented v1.3.0 iteration; addresses the reasoning-quality gap flagged in Issues [#1385](https://github.com/anthropics/skills/issues/1385).
- **[PR #1628](https://github.com/anthropics/skills/pull/1628)** — Hivemind's multi-agent delegation model responds to the growing "cost of context" concern in long-running Claude Code sessions.

---

## 4. Skills Ecosystem Insight

> The community's most concentrated demand is for **reliable skill authoring and evaluation infrastructure** — a broken eval pipeline (#1298, #556, #1390) is blocking quality iteration, while parallel appetite for trust guarantees (org sharing #228, namespace security #492) and domain-specialist skills (testing, typography, HPC, ServiceNow) suggests the ecosystem is maturing from general-purpose helpers toward verifiable, vertical-specific tooling.

---



# Claude Code Community Digest — 2026-09-04

## Today's Highlights

Claude Code v2.1.259 shipped with new organizational `managedMcpServers` settings and a `--permission-prompts none` flag for headless automation. The community is actively debating safeguard overreach, with an open issue documenting an agent creating 91 auto-closed PRs and locking a repo, while multiple closed feedback tickets flag aggressive safety checks blocking legitimate infrastructure and cybersecurity work.

---

## Releases

**v2.1.259** — [GitHub](https://github.com/anthropics/claude-code/releases)
- Added `managedMcpServers` managed setting, allowing organizations to push HTTP/SSE MCP server entries to every user (same shape as `.mcp.json`); command-based entries are skipped.
- Added `--permission-prompts none` for unattended headless hosts, suppressing all permission prompts.

---

## Hot Issues

1. **[BUG] No safeguard before agent bulk-creates dozens of PRs** (#79399) — *Open, 4 comments*
   An agent created 91 PRs against a real external repo, auto-closing them all and locking the user out. Raises urgent concerns about missing pre-flight safeguards for bulk destructive operations. [Link](https://github.com/anthropics/claude-code/issues/79399)

2. **[FEATURE] VSCode extension: render images inline in chat panel** (#79436) — *Open, 2 comments, 2 👍*
   Image attachments currently show as `[Image]` placeholders in the VSCode chat; users want native inline rendering. Strong community interest signaled by upvotes. [Link](https://github.com/anthropics/claude-code/issues/79436)

3. **[Bug] Safeguard trigger blocking legitimate code review** (#90186) — *Closed*
   A code-review operation was falsely flagged as a safeguard violation. Part of a pattern of legitimate workflows being blocked. [Link](https://github.com/anthropics/claude-code/issues/90186)

4. **[Bug] Overly aggressive safeguards blocking infrastructure maintenance** (#90171) — *Closed*
   Legitimate infra-maintenance tasks were flagged; model switched from Fable to Opus unexpectedly. [Link](https://github.com/anthropics/claude-code/issues/90171)

5. **[Bug] Legitimate cryptography code incorrectly flagged as malicious** (#90055) — *Closed*
   Blockchain/cryptography development work repeatedly tripped security safeguards. [Link](https://github.com/anthropics/claude-code/issues/90055)

6. **[Bug] Claude flagged legal cybersecurity task as policy violation** (#90108) — *Closed*
   Security professionals report false positives on authorized cybersecurity tasks. [Link](https://github.com/anthropics/claude-code/issues/90108)

7. **[Bug] Agent executing operations without authorization checks** (#90112) — *Closed*
   Agent performed dev-environment operations without triggering permission prompts, conflicting with the bulk-PR concern above. [Link](https://github.com/anthropics/claude-code/issues/90112)

8. **[Bug] Subagent first response echoes spawn-time system-reminder fragments** (#76339) — *Closed*
   Freshly spawned subagents intermittently output stale system-reminder text and terminate with zero tool calls. [Link](https://github.com/anthropics/claude-code/issues/76339)

9. **[Bug] Mobile app connection drops during long parallel tool-use bursts** (#90158) — *Closed*
   First reported since a recent app update; connection lost during extended tool-heavy sessions. [Link](https://github.com/anthropics/claude-code/issues/90158)

10. **[Bug] Token budget exceeded with repeated TaskStop resumption, scope ignored** (#90206) — *Closed*
    600k tokens consumed across two TaskStop resumptions despite explicit scope boundaries being ignored. [Link](https://github.com/anthropics/claude-code/issues/90206)

---

## Key PR Progress

1. **#91894** — Update `/frontend-design` SKILL.md ([Link](https://github.com/anthropics/claude-code/pull/91894))
2. **#79150** — docs: align code-review README with current validation-based command; the old pipeline description (git blame agent, 0-100 scoring, 80 threshold) no longer matches implementation. ([Link](https://github.com/anthropics/claude-code/pull/79150))
3. **#87079** — fix(security-guidance): make `**` glob patterns match zero-depth paths; bare `*` in fnmatch crosses `/`, so `**/*.ts` silently excluded top-level files from security rules. ([Link](https://github.com/anthropics/claude-code/pull/87079))
4. **#89404** — fix: validate-agent.sh no longer aborts on first warning; `set -e` + `((warning_count++))` caused premature exits and false-flagging of valid agents. ([Link](https://github.com/anthropics/claude-code/pull/89404))
5. **#66416** — fix(plugin-dev): validator scripts abort on first finding due to `set -e`; same root cause as #89404 affecting three scripts in plugin-dev. ([Link](https://github.com/anthropics/claude-code/pull/66416))

---

## Feature Request Trends

- **Inline media rendering** — VSCode chat panel image support (#79436) and URL fragment deep-links into published artifacts (#79520, 2 👍) show demand for richer in-IDE experience.
- **Granular permission control** — `--permission-prompts none` in v2.1.259 addresses headless needs, but requests for per-action control and mid-conversation effort-level changes (#76403) remain open.
- **Paste-as-text for image paths** — Users want an option to insert image file paths as literal text instead of auto-attaching (#79486).
- **Single Ctrl+D exit** — TUI power users want exiting with one Ctrl+D instead of two (#79453, 3 👍).
- **Transparent model pricing** — Session-wide Fable switch billing all turns at premium rate without warning highlighted a need for clearer cost signaling (#79478).

---

## Developer Pain Points

1. **Safeguard overreach** — The single strongest theme: legitimate code review, cybersecurity, infrastructure maintenance, and cryptography work are being falsely flagged, while in at least one case (bulk PR creation) safeguards *failed* to fire. Inconsistent enforcement erodes trust.
2. **Subagent reliability** — Stale system-reminder leakage, scope/budget ignoring on resumption, and silent zero-tool-call termination suggest the subagent orchestration layer needs stability work.
3. **Permission model gaps** — Agents sometimes act without authorization prompts (#90112) while at other times overwhelming prompts block routine work; the boundary remains unclear.
4. **Session & extension UX** — Extension updates discarding active sessions (#76412), session picker hiding sessions without AI titles (#76405), and effort-level lockout mid-conversation (#76403) create friction in daily workflows.
5. **Model consistency** — Auto-memory not reliably persisting behavioral corrections (#76408) and Fable deviating from agreed implementation plans (#90066) suggest the planning-execution loop needs tighter coupling.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



# OpenAI Codex Community Digest — 2026-09-04

## 1. Today's Highlights

The 0.153.1 hotfix ships support for configuring the hidden GPT-6-Astra model through the API, backported from the main release line. The community is actively grappling with MCP OAuth token refresh failures and severe disk usage from subagent session persistence, both of which remain unresolved. On the PR side, the team delivered a batch of 20+ fixes covering Guardian review hardening, sandbox security, and plugin config reloads.

## 2. Releases

**v0.153.1** (latest) — Hotfix backporting GPT-6-Astra model catalog support without exposing it in the model picker or changing defaults. [#42605](https://github.com/openai/codex/pull/42605)

**v0.153.0** — Added Vim mode undo (`u`) and redo (`Ctrl+R`) preserving drafts and attachments; expanded plugin CLI capabilities for listing, installing, and removing plugins. [#41941](https://github.com/openai/codex/pull/41941), [#42140](https://github.com/openai/codex/pull/42140)

**v0.154.0-alpha.2 / alpha.1** — Alpha previews released sequentially.

## 3. Hot Issues

1. **[MCP OAuth token not auto-refreshed](https://github.com/openai/codex/issues/17265)** — The most-upvoted issue (61 👍, 37 comments): Codex persists a refresh token but fails to use it when the access token expires, causing silent MCP tool failures. Critical for any user routing MCP servers through Codex.

2. **[Insane subagent disk usage](https://github.com/openai/codex/issues/34061)** — Subagents generate excessive session data, consuming gigabytes of disk. Open issue reflecting a growing pain point for heavy subagent workflows.

3. **[Windows pets become click-through](https://github.com/openai/codex/issues/41513)** — The floating desktop pet on Windows loses interactivity and can't be dragged. Widely reproduced across builds; community frustration over a non-critical but visible UI bug.

4. **[Can't change model/reasoning effort](https://github.com/openai/codex/issues/17318)** — Users report being unable to switch models or adjust reasoning levels after session start. 30 👍 indicates strong demand for a fix.

5. **[Server-deleted conversations repopulate in Recents](https://github.com/openai/codex/issues/40219)** — Chats deleted server-side reappear in the desktop app's recents list and can't be manually removed. 15 👍 marks this as a persistent data-sync annoyance.

6. **[Screenshots re-persisted on every compaction (~165 GiB)](https://github.com/openai/codex/issues/35458)** — Session compaction fails to deduplicate screenshots, causing sessions to balloon to 165 GiB (95% base64 images). A severe storage bug for power users.

7. **[Windows Remote SSH approval buttons unresponsive](https://github.com/openai/codex/issues/34652)** — File-edit approval buttons in the Windows desktop app don't respond during Remote SSH sessions, while CLI approval works fine. Points to a desktop-shell vs. CLI divergence.

8. **[Esc-Esc backtrack fails in persisted threads](https://github.com/openai/codex/issues/37421)** — CLOSED. The TUI's Esc-Esc navigation couldn't find selected prompts in previously saved threads. 44 👍 suggests many users relied on this workflow.

9. **[MCP tools subset received in session](https://github.com/openai/codex/issues/21654)** — Despite having multiple MCP servers enabled in settings, sessions only receive a subset of tools. 7 comments, 3 👍 — a confusing auth/discovery issue.

10. **[Cloud Browser tab never surfaces in ChatGPT Work](https://github.com/openai/codex/issues/37539)** — The browser feature initializes a CDP tab server-side but the UI panel never appears, timing out on refresh checks. Blocks a paid feature for web users.

## 4. Key PR Progress

1. **[Add GPT-6-Astra to Amazon Bedrock catalogs](https://github.com/openai/codex/pull/42619)** — CLOSED. Extends GPT-6-Astra coverage to Bedrock, including cross-region variants.

2. **[Condense TUI startup warnings](https://github.com/openai/codex/pull/42609)** — CLOSED. Replaces scattered startup diagnostics with a single summary block below the session header, improving TUI readability.

3. **[Support trusted headers for remote exec WebSockets](https://github.com/openai/codex/pull/42606)** — CLOSED. Enables embedding hosts to pass trusted HTTP headers through to remote exec-server handshakes, preserving them across reconnects.

4. **[Expose global metrics installation in `codex-otel`](https://github.com/openai/codex/pull/42603)** — CLOSED. Adds `install_global_metrics` as a public entry point for externally managed `MetricsClient` installations, supporting non-Statsig telemetry setups.

5. **[Deprecate detached review delivery](https://github.com/openai/codex/pull/42602)** — CLOSED. Emits a deprecation notice for `delivery: "detached"` in `review/start`, steering callers toward the `thread/start` + follow-up pattern.

6. **[Report MCP tool discovery errors in server status](https://github.com/openai/codex/pull/42598)** — CLOSED. Adds nullable `toolsError` to MCP server status listings so failed tool discovery is distinguishable from an empty catalog.

7. **[Harden macOS sandbox against terminal input injection](https://github.com/openai/codex/pull/42590)** — CLOSED. Blocks `TIOCSTI`-based input injection by sandboxed children into the parent shell via a new `file-ioctl` device restriction.

8. **[Require Guardian review for incompatible compaction checkpoints](https://github.com/openai/codex/pull/42588)** — CLOSED. Ensures Guardian cannot reuse an opaque parent compaction when the producer hash doesn't match the scoring model, preventing silent policy bypasses.

9. **[Persist verified user answers in Guardian thread context](https://github.com/openai/codex/pull/42579)** — CLOSED. Records host-verified `request_user_input` Q&A pairs in retained thread context so Guardian reviews stay aligned across compaction and resume.

10. **[Reload user config after local plugin installation](https://github.com/openai/codex/pull/42593)** — CLOSED. Fixes a bug where loaded threads retained stale configuration after a local plugin install, preventing bundled MCP servers and config changes from taking effect.

## 5. Feature Request Trends

- **MCP reliability and discoverability** — Multiple open issues (#17265, #21654, #18527, #30460, #28858) converge on broken OAuth flows, missing pagination, and incomplete tool discovery. The community wants MCP integration that just works out of the box.
- **Subagent and session management** — Requests for parent/child task workflows with summarized handoffs (#32017) and mechanisms to control subagent disk footprint (#34061, #35458) signal demand for better long-running agent orchestration.
- **Model selection flexibility** — Users want reliable model/reasoning-effort switching (#17318) and nostalgia for older models like 5.3 (#25917), indicating a desire for granular control over trade-offs between cost, speed, and quality.
- **Cross-platform parity** — Windows-specific bugs (pets, Remote SSH approvals, MSIX updates, Cloud Browser) suggest the desktop app lags behind CLI and macOS in polish and feature completeness.

## 6. Developer Pain Points

- **MCP OAuth token lifecycle is broken** — Tokens persist but never auto-refresh, forcing manual re-authentication and causing silent tool failures. This is the highest-engagement issue on the board (61 👍).
- **Disk bloat from sessions and screenshots** — Subagent forks and compaction failures cause unbounded storage growth (reported up to 165 GiB), with no visible throttling or pruning strategy.
- **Auth and connectivity edge cases** — Remote Control 403 loops (#41121), WebSocket idle timeouts misreported as dead streams (#39771), and Cloud Browser UI never surfacing (#37539) all point to fragile async connection handling.
- **Windows desktop instability** — Repeated crashes during long/tool-heavy sessions (#41581), stuck update cycles from locked MSIX packages (#25770), and the click-through pet bug (#41513) create a perception of a second-class desktop experience.
- **Guardian compaction trust model** — Incompatible checkpoint provenance could allow unreviewed code to bypass Guardian oversight (#35458, #42588), a serious correctness concern for enterprise users relying on automated review gates.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>



# Gemini CLI Community Digest — 2026‑09‑04

## 1. Today's Highlights
Security and path‑traversal hardening dominate the latest activity, with four concurrent PRs addressing Windows NTFS short‑name bypass, checkpoint directory escape, macOS sandbox stdin hijacking, and silent `git diff --output` truncation. On the agent side, critical bugs around subagent recovery, generalist‑agent hangs, and shell‑command stalls remain open, signaling ongoing reliability challenges in multi‑turn workflows.

## 2. Releases
No new releases in the last 24 hours.

## 3. Hot Issues
| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|---------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after MAX_TURNS reported as GOAL success | Misleading termination status can hide incomplete work, leading to silent failures in multi‑step investigations. | 2 👍, 13 comments – triaged as P1 bug. |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs forever | Simple tasks (e.g., folder creation) stall indefinitely when deferring to sub‑agents, blocking users. | 8 👍, 8 comments – high frustration, P1. |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell command stuck “Waiting input” after completion | Even trivial commands leave the CLI in a waiting state, requiring manual cancellation. | 3 👍, 4 comments – P1, repeatedly reported. |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent fails on Wayland | Linux Wayland users cannot run the browser agent, a common development environment. | 1 👍, 4 comments – P1, needs‑retesting. |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Auto Memory logging sends unredacted transcripts | Secrets may be logged before the extraction agent’s redaction prompt runs, creating a privacy risk. | 0 👍, 5 comments – P2 security bug. |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Assess AST‑aware file reads, search, and mapping | Could reduce token waste and improve codebase‑investigator precision, but impact is unquantified. | 1 👍, 7 comments – P2 enhancement, epic track. |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini does not use skills/sub‑agents enough | Anecdotal but widespread: custom skills are ignored unless explicitly invoked, reducing automation value. | 0 👍, 6 comments – P2, customer‑issue. |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | Browser agent session takeover & lock recovery | Persistent browser sessions fail fast on orphaned processes, breaking long‑running automation. | 0 👍, 4 comments – P2, feature request. |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Browser agent ignores settings.json overrides | Configuration such as `maxTurns` is silently ignored, causing unpredictable behavior. | 0 👍, 3 comments – P2 bug, needs‑retesting. |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | Agent should discourage destructive behavior | Models occasionally use `git reset --force` or other risky commands when safer alternatives exist. | 1 👍, 3 comments – P2, security‑conscious request. |

## 4. Key PR Progress
| # | PR | Summary |
|---|----|---------|
| [#29116](https://github.com/google-gemini/gemini-cli/pull/29116) | **fix(core): mitigate NTFS 8.3 short‑name (SFN) path** | Blocks path‑traversal and blocklist bypasses on Windows by resolving SFNs (e.g., `git~1`) in the AllowedPathChecker. |
| [#29192](https://github.com/google-gemini/gemini-cli/pull/29192) | **fix(checkpoint): contain legacy raw tag path inside checkpoints directory** | Fixes `/chat delete` with `../` tags that could escape the checkpoints dir via the legacy raw‑tag fallback. |
| [#29158](https://github.com/google-gemini/gemini-cli/pull/29158) | **fix(core): sanitize hardcoded Google CrUX API key** | Removes an exposed API key from the compiled `chrome‑devtools‑mcp` bundle to prevent credential leakage. |
| [#29115](https://github.com/google-gemini/gemini-cli/pull/29115) | **fix(config): enforce strict permission/ownership checks on system‑wide config** | Adds ACL verification (PowerShell on Windows, POSIX checks) before loading system‑wide configuration files. |
| [#29170](https://github.com/google-gemini/gemini-cli/pull/29170) | **fix(core): enhance workspace path boundary checks & symlink resolution** | Strengthens command‑safety heuristics and file‑discovery tools across POSIX and Windows to prevent boundary escapes. |
| [#29148](https://github.com/google-gemini/gemini-cli/pull/29148) | **fix(cli): prevent background git operations from hijacking stdin** | Stops extension‑update clones/remote checks from blocking on interactive credential prompts. |
| [#29184](https://github.com/google-gemini/gemini-cli/pull/29184) | **fix(core): validate git args in Windows sandbox to block silent `git diff --output`** | Closes a loophole where `git diff --output=<path>` could truncate files without confirmation. |
| [#29186](https://github.com/google-gemini/gemini-cli/pull/29186) | **fix(core): correct exitCode null check in shell sandbox denial heuristic** | Fixes a type‑mismatch bug that could cause safe commands to be incorrectly denied. |
| [#29187](https://github.com/google-gemini/gemini-cli/pull/29187) | **fix(core): use safeLiteralReplace for LLM prompt template placeholders** | Prevents `$`‑sequence injection in user‑controlled values when filling prompt templates. |
| [#28863](https://github.com/google-gemini/gemini-cli/pull/28863) | **fix(extensions): prompt for consent on environment changes & sanitize env vars** | Ensures extensions cannot inject unauthorized environment variables into MCP server processes. |

## 5. Feature Request Trends
- **AST‑aware tooling**: Multiple issues (#22745, #22746) explore using AST‑based reads, searches, and codebase mapping to reduce token waste and improve precision.
- **Subagent reliability & resilience**: Requests for better session takeover (#22232), visibility of subagent trajectories via `/chat share` (#22598), and more consistent skill/agent invocation (#21968).
- **Token‑frugal context management**: “Tactful extraction” (#19561) aims to replace firehose file reads with surgical grep‑first hierarchies.
- **Auto Memory improvements**: Bugs around invalid patches (#26523), indefinite retry loops (#26522), and redaction timing (#26525) point to a demand for more robust background memory processing.
- **Security‑first sandboxing**: Consistent themes of path‑traversal prevention, stdin isolation, and configurable destructive‑behavior thresholds.

## 6. Developer Pain Points
- **Agent hangs & stalls**: Generalist agent indefinite hangs (#21409), shell commands stuck after completion (#25166), and browser agent failures on Wayland (#21983) create friction in daily workflows.
- **Subagent under‑utilization**: The model often ignores custom skills and sub‑agents unless explicitly prompted (#21968), undermining designed automation.
- **Security & path‑escape vulnerabilities**: Repeated discoveries of traversal bugs (NTFS SFNs, checkpoint tag escapes, symlink bypasses) highlight an ongoing attack surface.
- **Configuration inertia**: `settings.json` overrides being ignored by subagents (#22267) leads to unpredictable behavior and debugging overhead.
- **Destructive command usage**: Unnecessary use of `git reset --force` or similar risky operations (#22672) worries users who prefer safer defaults.
- **Token bloat**: Large file reads still frequently overwhelm context, prompting calls for AST‑aware or tactical extraction tools (#19561, #22745).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-09-04

---

## Today's Highlights

Today's **v1.0.83-4** release adds **Client ID Metadata Document (CIMD) support for MCP OAuth sign-in**, an important step toward standards-compliant OAuth flows for Model Context Protocol servers. The release also quietly removes the interrupted-session restore prompt by default and improves responsiveness when resuming large sessions—two changes that directly address long-standing UX complaints. Meanwhile, the issue tracker remains dominated by **MCP, BYOK/local models, and Windows-platform pain points**, with 33 issues updated in 24 hours.

---

## Releases

**v1.0.83-4** ([release](https://github.com/github/copilot-cli/releases/tag/v1.0.83-4))

- **Added**
  - Client ID Metadata Document (CIMD) support for MCP OAuth sign-in
- **Improved**
  - CLI starts without the interrupted-session restore prompt by default
  - Resuming large sessions keeps the input prompt responsive sooner
- **Fixed**
  - Sandboxed file tools now read the same developer-too… *(truncated)*

---

## Hot Issues

1. **[#3709](https://github.com/github/copilot-cli/issues/3709) — `/model` should list BYOK/local providers (👍 29)**
   *7 comments.* The `/model` picker is hardcoded to GitHub-hosted models, leaving BYOK users unable to switch to local Ollama/vLLM endpoints mid-session. Highest community engagement of the day, with 29 upvotes—this is the clearest signal that model-provider flexibility is a top-tier concern.

2. **[#4525](https://github.com/github/copilot-cli/issues/4525) — MCP `initialize` race causes -32022**
   *6 comments.* v1.0.81-1 sends a legacy `initialize` after a modern `server/discover` succeeds, breaking compatibility with Python MCP SDK 2.0.0 servers. MCP ecosystem maturity depends on resolving these protocol-era mismatches.

3. **[#3442](https://github.com/github/copilot-cli/issues/3442) — Remote sessions disabled for orgs (CLOSED)**
   *6 comments, 👍 10.* Enterprise admins hit a wall after v1.0.51 when `/remote on` refused to enable remote sessions. Closed without a public resolution path, suggesting a documentation gap rather than a code fix.

4. **[#2861](https://github.com/github/copilot-cli/issues/2861) — `/compact` fails on Opus 4.6**
   *5 comments.* Manual compaction produces three back-to-back empty-model responses, breaking long-session context management on Claude Opus 4.6. Highlights a fragile interaction between compaction logic and Anthropic models.

5. **[#4695](https://github.com/github/copilot-cli/issues/4695) — MCP OAuth tokens not reused across sessions**
   *5 comments.* HTTP MCP servers using PKCE force repeated re-authentication because cache-key hashing isn't stable. Directly undermines the "log in once" promise of OAuth-based MCP integrations.

6. **[#232](https://github.com/github/copilot-cli/issues/232) — Add `--system-prompt` CLI flag (👍 10)**
   *4 comments.* Users want global system-level instructions without resorting to per-repo instruction files. Persistent feature request still open after nearly a year.

7. **[#4655](https://github.com/github/copilot-cli/issues/4655) — Agent Plugins 1.0 custom agents not discovered**
   *3 comments.* Plugins under `com.github.copilot/agents` aren't being picked up, breaking the spec's promise of GitHub-Copilot-specific custom agents shipping alongside skills and MCP servers.

8. **[#4680](https://github.com/github/copilot-cli/issues/4680) — Wrong model ID sent to OpenAI-compatible endpoints**
   *3 comments.* Custom BYOK endpoints get `gpt-5.4-nano` instead of the configured model name (e.g., `mimo-v2.5`), killing sessions outright. A regression that undermines BYOK entirely.

9. **[#4218](https://github.com/github/copilot-cli/issues/4218) — Configurable model pool for Auto mode (👍 13)**
   *1 comment.* Auto mode currently picks from every plan-allowed model, making cost and behavior unpredictable. Users want explicit allow-lists.

10. **[#4683](https://github.com/github/copilot-cli/issues/4683) — PowerShell ConstrainedLanguage emits spurious errors**
    *2 comments.* Every shell command fails on hardened enterprise Windows machines using AppLocker/WDAC. Critical blocker for managed-enterprise rollouts.

---

## Key PR Progress

*No pull requests were updated in the last 24 hours.* The PR pipeline is quiet despite an active issue stream—a notable signal that triage-to-merge throughput may be a bottleneck.

---

## Feature Request Trends

Across all 33 issues, the strongest themes are:

- **BYOK & local model parity** — `/model` picker (#3709), per-agent provider endpoints (#4703), configurable Auto-mode pool (#4218), and OpenAI-compatible routing (#4680) all point to a single demand: *let users route any agent, in any session, to any model.*
- **MCP ecosystem hardening** — OAuth token reuse (#4695), modern/legacy protocol handshake (#4525), and skills-not-discoverable-for-subagents (#4708) show the community is pushing MCP from "works" toward "production-grade."
- **Session & workspace ergonomics** — Slow resume (#4714), OOM on long resumes (#4699), session filtering by cwd (#4704), and queued-prompt stalls (#4705) reveal that power-user session management needs significant investment.
- **Windows platform parity** — ConstrainedLanguage errors (#4683), shell selection (#2271), path-separator dedup (#4702), and truncated permission previews (#4701) collectively demand a dedicated Windows polish pass.
- **Power-user configuration surfaces** — `--system-prompt` (#232), `skillDirectories` in ACP mode (#4700), and configurable shell type (#2271) suggest CLI users want configuration knobs that today are hidden in repo-local files.

---

## Developer Pain Points

- **MCP reliability is patchy.** Three of the top issues (#4525, #4695, #4708) describe MCP integrations that fail in subtly different ways—token caching, protocol negotiation, and skill propagation—making MCP hard to trust for production workflows.
- **BYOK is half-supported.** The CLI accepts custom endpoints but routes them through GitHub model assumptions, breaking session continuity whenever a non-GitHub model is in play.
- **Long sessions are fragile.** OOM crashes during resume (#4699), runaway `copilot-file-search` threads (#4710), and slow session restore (#4714) compound into a single message: *the session model doesn't yet hold up under heavy use.*
- **Windows is treated as a second-class platform.** PowerShell ConstrainedLanguage, path-separator duplication, shell selection, and truncated path previews suggest Windows-specific bugs aren't being caught early.
- **Triage throughput is low.** Zero PRs updated in 24 hours despite 33 active issues signals a growing backlog. Several long-standing feature requests (#232 from Oct 2025, #1099 from Jan 2026) remain unaddressed.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest – 2026‑09‑04**

---

### 1. Today’s Highlights
- **No new releases** were published in the last 24 h, but activity remains high as the community debates the new ACP authentication gate and the recent fix for dynamic completion budgeting.
- **Issue #2633** (open) raises a critical blocker for custom providers: the 1.17+ auth gate now forces a persisted Kimi OAuth token even when not required, potentially breaking existing integrations.
- **PR #2332** (merged) refactors the Kimi provider to compute `max_completion_tokens` per request instead of hard‑coding 32 k tokens, improving efficiency on models with varying context windows.

---

### 2. Releases
*None* – no new versions were released in the last 24 h.

---

### 3. Hot Issues *(6 of the 6 issues updated in the last 24 h)*

| # | Title & Status | Why it matters | Community reaction |
|---|----------------|----------------|--------------------|
| **1293** | [CLOSED] **Unable to communicate when using Kimi CLI on a remote SSH server** (cshennju) | Users on headless SSH hosts (no GUI, locked DNS) cannot establish a session, a common scenario for CI/DevOps workflows. | 1 👍, 1 comment – indicates a niche but real pain point. |
| **2633** | [OPEN] **ACP auth gate (1.17+) blocks custom providers that don't need a Kimi account** (billc8128) | The new auth requirement forces a Kimi OAuth token for all provider calls, breaking custom/OpenAI‑style integrations that never need a Kimi account. | 0 👍, 0 comments – early‑stage discussion, high potential impact. |
| **1311** | [CLOSED] **Hope to add an undo function** (lasting‑yang) | Users compare Kimi CLI unfavorably to tools like *opencode* that support undo; session history management is a usability staple. | 1 👍 – modest but clear demand. |
| **1310** | [CLOSED] **Inline Mermaid diagrams in webui** (chriswingler) | Mermaid rendering already exists in the codebase; users want richer documentation output directly in the web UI. | 1 👍 – highlights a missing UI feature. |
| **1309** | [CLOSED] **Optional OpenClaw‑like features** (chriswingler) | Requests for heartbeat monitoring, cron jobs, memories, and a lightweight nanobot integration to turn Kimi CLI into a more autonomous agent. | 0 👍 – aspirational roadmap item. |
| **1307** | [CLOSED] **`--agent-file` for 'kimi web' as in the 'kimi' subcommand** (Krivodel) | The CLI already supports `--agent-file`; the web UI only loads the default agent, creating inconsistency for users who rely on custom agents. | 3 👍 – strongest community signal among these issues. |

*Links*:  
- #1293: https://github.com/MoonshotAI/kimi-cli/issues/1293  
- #2633: https://github.com/MoonshotAI/kimi-cli/issues/2633  
- #1311: https://github.com/MoonshotAI/kimi-cli/issues/1311  
- #1310: https://github.com/MoonshotAI/kimi-cli/issues/1310  
- #1309: https://github.com/MoonshotAI/kimi-cli/issues/1309  
- #1307: https://github.com/MoonshotAI/kimi-cli/issues/1307  

---

### 4. Key PR Progress *(1 of the 1 PR updated in the last 24 h)*

**PR #2332 – “fix(kimi): clamp completion budget dynamically”** (wbxl2000)  
- **Change**: Removed the provider‑level hard‑coded `max_tokens = 32000` and now computes a per‑request `max_completion_tokens` that respects the model’s current context window.  
- **Impact**: Prevents unnecessary token over‑allocation, improves budgeting accuracy, and reduces waste for models with variable context sizes.  
- **Link**: https://github.com/MoonshotAI/kimi-cli/pull/2332  

---

### 5. Feature Request Trends
- **Session & UI Richness**: Undo/redo and inline Mermaid diagram rendering are repeatedly requested to match competing CLI tools and improve documentation workflows.  
- **Agent Flexibility**: Consistent `--agent-file` support across `kimi` and `kimi web` is the most‑liked feature request, indicating a need for unified agent management.  
- **Automation & Autonomy**: “OpenClaw‑like” capabilities (heartbeat, cron, memories, nanobot integration) signal interest in turning Kimi CLI into a persistent, schedule‑driven assistant.  
- **Authentication Granularity**: The open ACP auth gate issue highlights a growing demand for optional Kimi account requirements, especially for custom/OpenAI‑compatible providers.  
- **Remote‑Environment Robustness**: The SSH communication bug underscores the need for a more resilient CLI that works in headless, DNS‑restricted environments.

---

### 6. Developer Pain Points
- **Auth Friction**: The new 1.17+ auth gate forces a Kimi OAuth token even when not needed, breaking existing custom‑provider workflows and prompting early community pushback.  
- **Missing Undo/Redo**: Without session history navigation, users cannot recover from accidental edits, a gap compared to other CLI assistants.  
- **Inconsistent Agent Loading**: `kimi web` lacks `--agent-file`, limiting users who rely on custom agents in the UI.  
- **Headless Deployment Issues**: SSH environments without GUI or mutable DNS fail to establish a connection, a critical blocker for DevOps/CI usage.  
- **Rich Content Limitation**: Mermaid diagrams are not rendered inline, restricting the ability to embed interactive documentation directly in the web UI.  

--- 

*Prepared for the Kimi Code CLI community – focus on actionable insights and upcoming development priorities.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



# OpenCode Community Digest — 2026-09-04

## 1. Today's Highlights

OpenCode saw a quiet release cycle with no new versions shipped, but the community churned through 50 issues and 20 PRs focused on three fronts: billing/subscription reliability, high-impact performance regressions, and deeper plugin/API extensibility. The biggest ongoing concern is **Issue #30086** (High CPU usage), which continues to draw heavy community engagement and is affecting power users running multiple sessions. Meanwhile, several closed PRs from the automated cleanup workflow land foundational fixes around session retry logic, provider rate-limit handling, and tool-call deduplication.

## 2. Releases

No new releases in the last 24 hours.

## 3. Hot Issues

1. **#30086 — High CPU usage in newer versions** · [link](https://github.com/anomalyco/opencode/issues/30086) · 49 comments · 26 👍
   The most-discussed open issue this period. Users report dramatic CPU spikes after recent updates, degrading multi-session workflows on modest hardware. High comment count signals sustained frustration and active investigation.

2. **#12393 — How to unarchive in opencode-desktop** [CLOSED] · [link](https://github.com/anomalyco/opencode/issues/12393) · 20 comments · 34 👍
   A highly upvoted usability question about recovering archived sessions. Closed suggests a solution was found or documented, but the volume of engagement indicates this UX gap affects many users.

3. **#38255 — Discrepancy between usage dashboards** · [link](https://github.com/anomalyco/opencode/issues/38255) · 11 comments
   Users see weekly limits hit while granular dashboards show minimal spend. This inconsistency erodes trust in the billing layer and likely affects many Go subscribers.

4. **#45278 — Payment declined after 3 months despite valid card** · [link](https://github.com/anomalyco/opencode/issues/45278) · 9 comments · 2 👍
   A long-standing payment method suddenly fails renewal with no bank-side issue. Signals a potential backend billing-state or token-expiry problem.

5. **#47047 — SSE error with Big Pickle model** · [link](https://github.com/anomalyco/opencode/issues/47047) · 9 comments
   Model enters a loop and breaks mid-stream with SSE errors. Reflects ongoing fragility in streaming protocol handling for certain providers/models.

6. **#36280 — SIGILL crash on Intel i5-7200U (Kaby Lake)** · [link](https://github.com/anomalyco/opencode/issues/36280) · 5 comments
   Worker subprocess crashes with an illegal CPU instruction, triggering a recursive crash-handler cascade that exhausts memory. Critical for users on older hardware; may indicate a binary compiled with unsupported instruction sets.

7. **#15457 — System prompt mode switcher (Default/Light)** [OPEN] · [link](https://github.com/anomalyco/opencode/issues/15457) · 5 comments · 7 👍
   Community-requested feature to switch system prompt weight, addressing issues with smaller/non-frontier models. Strong upvote count shows broad interest.

8. **#25961 — MCP Support Client ID Metadata Document (CIMD)** [OPEN] · [link](https://github.com/anomalyco/opencode/issues/25961) · 4 comments · 11 👍
   Request for Keycloak-style OIDC CIMD support in MCP auth flows. High upvotes relative to comments suggest strong interest from enterprise/auth-savvy users.

9. **#46868 — Formatter config silently disables clang-format / air / uv** · [link](https://github.com/anomalyco/opencode/issues/46868) · 4 comments
   Naming a formatter by string silently disables it due to a key lookup bug in `format/index.ts`. A classic silent-failure bug that wastes developer time.

10. **#47094 — Desktop re-registration storm causing connection drops** [CLOSED] · [link](https://github.com/anomalyco/opencode/issues/47094) · 2 comments
    Invalid sessions trigger aggressive re-registration without exponential backoff, hitting edge protections (e.g., Cloudflare). Closed — likely fixed — but reveals a real reliability gap in session lifecycle.

## 4. Key PR Progress

1. **#45782 — Add About settings page** [OPEN] · [link](https://github.com/anomalyco/opencode/pull/45782)
   Dedicated full-screen About section with dynamic version, contributor count, credits, and legal artwork. Polish-level work improving the desktop experience.

2. **#47154 — Hook system research vs Claude Code** [OPEN] · [link](https://github.com/anomalyco/opencode/pull/47154)
   Comparative analysis of OpenCode's hook infrastructure against Claude Code, with EARS requirements and an RFC for priority gaps. Important groundwork for next-gen extensibility.

3. **#47101 — Persist legacy plan reminders** [OPEN] · [link](https://github.com/anomalyco/opencode/pull/47101)
   Bug fix: legacy Plan/Build reminders were only appended to in-memory messages and lost on the next turn. Closing a data-loss gap in the session UI.

4. **#40268 — Retry top-level stream request timeouts** [CLOSED] · [link](https://github.com/anomalyco/opencode/pull/40268)
   Handles OpenAI Responses-compatible providers that return HTTP 200 but emit SSE error events mid-stream. Improves resilience for non-standard provider behavior.

5. **#40239 — Gate provider 400 rate-limit retries** [CLOSED] · [link](https://github.com/anomalyco/opencode/pull/40239)
   Stops retry loops when providers report exhausted rate windows via non-standard HTTP 400 responses. Prevents wasted calls and improves UX under throttling.

6. **#40240 — Dedupe duplicate tool_call_id before lowering to provider** [CLOSED] · [link](https://github.com/anomalyco/opencode/pull/40240)
   Fixes a bug where interrupted tool runs leave duplicate `tool_call_id` parts in assistant messages, which then confuse downstream providers.

7. **#40250 — Reject unknown `--variant` instead of silently dropping it** [CLOSED] · [link](https://github.com/anomalyco/opencode/pull/40250)
   `opencode run --variant <value>` now rejects unrecognized variants rather than proceeding with an undefined lookup, preventing subtle misconfiguration.

8. **#40188 — Request-scoped `chat.model` plugin hook** [CLOSED] · [link](https://github.com/anomalyco/opencode/pull/40188)
   New plugin hook firing before provider/model/auth resolution, allowing plugins to replace the model for a single request. Major extensibility win.

9. **#40226 — Bound prompt editor DOM growth on multi-line input** [CLOSED] · [link](https://github.com/anomalyco/opencode/pull/40226)
   Fixes a performance regression where the v2 prompt composer re-walked the entire `contenteditable` DOM on every keystroke. Directly relevant to #30086 CPU concerns.

10. **#40198 — Match canonically equivalent Unicode in patches** [CLOSED] · [link](https://github.com/anomalyco/opencode/pull/40198)
    Adds a canonical Unicode-equivalence pass to `seekSequence()`, fixing patch verification failures when file content uses different but equivalent Unicode forms.

## 5. Feature Request Trends

- **Plugin & hook extensibility**: Multiple high-interest requests (#25961 CIMD, #40188 request-scoped model hook, #39385 Git-loaded skills) point to a community hungry for deeper plugin APIs and auth flexibility.
- **System prompt control**: The Default/Light mode switcher (#15457) reflects demand for model-aware prompt tuning, especially for smaller or non-frontier models.
- **Session & UX polish**: Non-interrupting cancel/edit for queued messages (#47127, closed) and auto-accept permissions toggle fixes (#47096) show users want finer-grained control over session interactions.
- **Provider catalog reconciliation**: #40524 pushes for V2 to reconcile provider catalogs with live `/models` endpoints — a request for dynamic, accurate model discovery over static lists.

## 6. Developer Pain Points

- **Billing & subscription reliability** is the dominant frustration: dashboard discrepancies (#38255), sudden payment declines (#45278), receipt-not-applied bugs (#47072), and model-access mismatches (#47120, #46932) all point to a fragile billing layer that needs investment.
- **Performance regressions on older hardware**: The CPU spike issue (#30086) and SIGILL crash (#36280) affect users on constrained machines, suggesting recent builds may have tightened CPU or SIMD requirements without adequate degradation paths.
- **Silent failures in configuration**: Formatter misconfiguration (#46868) and unknown `--variant` flags (#40250) being silently ignored waste developer time and erode confidence in the CLI.
- **Streaming & session fragility**: SSE errors (#47047), retry storms (#47094), and duplicate `tool_call_id` issues (#40240) indicate the streaming and session layers remain a source of intermittent, hard-to-diagnose failures.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



# Pi Community Digest — 2026-09-04

## 1. Today's Highlights
No new releases were published in the last 24 hours. The community focused on stabilizing core tooling: a fix ensures `fd`/`ripgrep` work on musl‑based Linux distros, signal‑terminated child processes now report correct exit codes, and the system‑prompt architecture is being refactored to support dynamic mid‑session updates.

## 2. Releases
*None.*

## 3. Hot Issues
1. **[bug] Terminal scrolls to beginning without reason** (#5023) – 18 comments, 3 👍  
   A frequent, random terminal‑scroll bug that disrupts workflow while the model is generating. High engagement signals a broad pain point.

2. **Branch summarization deterministically fails** (#8845) – 14 comments, 0 👍  
   `/tree` branch summarization always hits the 2048‑token cap on large branches, making the feature unusable for extensive codebases.

3. **Context budget ignores maxTokens output reservation** (#8061) – 6 comments, 2 👍  
   Requests are rejected even when input is only ~78% of the model window, and the automatic compact‑and‑retry recovery fails identically. Impacts long contexts with large output budgets.

4. **find returns no results for path patterns on Windows** (#6817) – 6 comments, 0 👍  
   Patterns containing path separators (e.g., `src/**/*.ts`) fail on Windows due to incorrect path handling in the `find` tool.

5. **Extension‑registered providers intermittently ignore defaultProvider/defaultModel** (#8810) – 3 comments, 0 👍  
   Fresh sessions may silently start on another provider’s default model when an extension registers a provider, breaking configured expectations.

6. **PI_OFFLINE silently disables all provider model discovery** (#8684) – 3 comments, 0 👍  
   The offline flag’s documented scope (startup housekeeping) does not match its actual behavior—it also blocks network‑based model catalog discovery for the entire session.

7. **EventStream has quadratic CPU cost when draining buffered model events** (#9055) – 3 comments, 0 👍  
   Long‑running agent processes suffer O(N²) CPU usage because the event queue uses `Array.shift()` on every dequeue.

8. **Tool‑call argument parsing becomes quadratic with fragmented deltas** (#9062) – 2 comments, 0 👍  
   Each streaming delta triggers a full re‑parse of the accumulated JSON buffer, creating O(N²) overhead during tool calls.

9. **Anthropic handoff still rejects Codex tool IDs and thinking signatures** (#9048) – 2 comments, 0 👍  
   Switching an existing session from OpenAI‑Codex to Anthropic can fail because historical Codex tool‑call IDs are replayed unchanged to Anthropic.

10. **Plugin auth‑file keys are ignored; only /login store is checked** (#9079) – 2 comments, 0 👍  
    Provider plugins that store API keys in their own auth file report “No API key found” unless the key was also written to the core `/login` store.

## 4. Key PR Progress
1. **Download statically linked musl builds of fd and ripgrep on Linux** (#9070) – Fixes broken `find`/`grep` tools on NixOS and Alpine by pulling glibc‑linked binaries that fail with “No such file or directory.”

2. **Map signal‑killed processes to non‑zero exit codes** (#8994) – Resolves an issue where child processes terminated by signals (e.g., OOM killer) were reported as successful (`exitCode 0`), causing bash tools to mask failures.

3. **System prompt refactor** (#8998) – Draft PR that enables partial updates to the system prompt, allowing extensions to push mid‑conversation changes without wiping the entire session context.

4. **Add jump‑to‑latest control to TUI** (#9080) – Introduces a UI control to jump directly to the newest message, improving navigation in long sessions.

5. **Document that questionnaire tool stays enabled in plan‑mode** (#9085) – One‑line docs fix to clarify that plan‑mode still preserves read‑only tools like `questionnaire`.

6. **Update source checkouts via rebase** (#9084) – Adds a self‑update path for source‑checkout installations, running `git pull --rebase`, `npm ci`, etc., automatically.

7. **Fail fast when a dynamic model’s API has no matching implementation** (#9087) – Prevents confusing HTML‑404 errors from OpenRouter by validating model availability before sending requests.

8. **Expand repeated large paste markers** (#9083) – Collapses duplicate pastes of identical content into a single expanded marker instead of stacking separate `[paste #N …]` entries.

9. **Summarize multiline bash in collapsed tools** (#9082) – Renders multiline shell commands as `bash script (N lines)` in collapsed tool rows, keeping history readable while preserving the full command on expand.

10. **Terminal content‑width cap for TUI** (#9069) – Adds a `terminal.contentWidth` setting that wraps text at a specified column and leaves a blank gutter for extension side panels.

## 5. Feature Request Trends
- **Safer extension APIs**: Requests for explicit, extension‑level APIs for session replacement, namespace‑qualified resources, and export of internal constants (`EXTENDED_THINKING_LEVELS`, default model/thinking level).
- **Performance improvements**: Multiple reports of quadratic CPU/memory costs in event streams and JSON parsing, indicating a need for more efficient data structures.
- **Platform‑specific robustness**: Continued focus on Windows path handling, CRLF line‑ending compatibility, and musl‑based Linux distributions.
- **Provider/model catalog expansion**: Adding missing models (gemini‑3.8‑flash) and providers (Tencent Token Plan, Bedrock Mantle) to keep the catalog current.
- **Configurability of core behaviors**: Exposing settings like Bedrock client `maxAttempts`, disabling inner retries, and controlling terminal viewport dimensions.

## 6. Developer Pain Points
- **Silent failures masking real errors**: Signal‑killed processes reported as success, offline mode blocking model discovery, and extension provider defaults being ignored create debugging nightmares.
- **Quadratic performance under load**: Event‑stream draining and tool‑call argument parsing degrade sharply in long‑running or high‑frequency scenarios.
- **Inconsistent platform behavior**: Windows path patterns, CRLF line endings, and musl/glibc binary compatibility require workarounds that break cross‑platform reliability.
- **Tool summarization and history clutter**: Large pastes and multiline commands bloat collapsed tool rows, reducing scanability.
- **Missing or mis‑documented flags**: Environment variables like `PI_OFFLINE` have undocumented side effects that contradict their stated purpose.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>



# Qwen Code Community Digest — 2026-09-04

## 1. Today's Highlights

Qwen Code **v0.23.0** shipped after a brief release hiccup that was auto-fixed; the version introduces git-state hints in the branch picker alongside the Update Project, Commit, and Push buttons. Meanwhile, the community is focused on three high-impact tracks: migrating the TUI off the heavily-patched `ink` renderer to OpenTUI (#8662, 28 comments), plugging token-wasting loops when tools error repeatedly (#10887), and stabilizing CI test throughput by eliminating module-import overhead (#10908).

## 2. Releases

**v0.23.0** — The latest tagged release. An initial release workflow failure on 2026-09-03 (#10900) was caught and autofixed; no breaking changes are known. The branch picker now surfaces git state hints such as `↓3 · origin/main` or `Up to date` next to Update Project, Commit, and Push actions.

## 3. Hot Issues

| # | Title | Why It Matters |
|---|-------|---------------|
| [#8662](https://github.com/QwenLM/qwen-code/issues/8662) | Migrate TUI rendering layer from ink to OpenTUI | The current `ink 7 + React 19` stack relies on a ~1037-line patched renderer and a custom Virtual Viewport, producing flicker and structural bugs that are intractable within ink. 28 comments signal strong community interest in a clean rewrite. |
| [#10065](https://github.com/QwenLM/qwen-code/issues/10065) | LM Studio 0.4.21: grammar parse failure | Users running local OpenAI-compatible endpoints hit a `failed to parse grammar` error even with zero MCP servers and empty `tools.core`, blocking a popular local-model workflow. |
| [#10162](https://github.com/QwenLM/qwen-code/issues/10162) | Degrade gracefully when ACP NDJSON channel queue saturates | The daemon currently tears down the entire channel on `NdJsonQueueLimitError`. A fail-open degrade path would prevent one saturated client from taking down all channels. |
| [#10583](https://github.com/QwenLM/qwen-code/issues/10583) | Add lightweight Bubblewrap sandbox backend for Linux | Docker/Podman are heavy prerequisites; a native `bwrap` backend would give Linux users strong OS-level isolation without a container runtime, addressing a frequent deployment pain point. |
| [#10908](https://github.com/QwenLM/qwen-code/issues/10908) | CI test time bound by module import cost | The `cli` workspace spent 2223 s collecting vs. 1372 s testing in one run. This is a platform-wide perf bottleneck affecting every contributor. |
| [#10561](https://github.com/QwenLM/qwen-code/issues/10561) | Command-execution config keys are an open entrance set | A class-severity security finding: several `git` config keys let attacker-supplied commands run during any spawned git process. Follow-up from the #10421 review round. |
| [#10953](https://github.com/QwenLM/qwen-code/issues/10953) | Todo plan state goes stale while work is delegated to subagents | The persisted todo plan froze for ~56 minutes while four plan nodes advanced through foreground subagents, because the active-todo reminder's 3-turn budget never fired. |
| [#10791](https://github.com/QwenLM/qwen-code/issues/10791) | Balanced `<thinking>` blocks leak to user-visible output | Current defenses only catch unclosed thinking tags. Hybrid-thinking models that emit proper `<thinking>…</thinking>` inside content on content-only turns bypass the filter entirely. |
| [#10887](https://github.com/QwenLM/qwen-code/issues/10887) | No early termination on repeated tool errors | Production sessions burned 5–14 M tokens in dead-end loops where tools returned the same error (e.g. `git remote -v` exit 128) with no termination mechanism. P1 severity. |
| [#10936](https://github.com/QwenLM/qwen-code/issues/10936) | DingTalk channel prints credentials to stdout | On every connect, `qwen channel start` leaks the full SDK config (including `clientSecret`) and stream ticket to stdout — a P1 credential-security regression. |

## 4. Key PR Progress

| # | Title | Description |
|---|-------|-------------|
| [#10966](https://github.com/QwenLM/qwen-code/pull/10966) | Fix: submit container slash commands on Enter again | Restores Enter-to-submit behavior for container slash commands (e.g. `memory`) whose default action was lost when live input-buffer resolution was introduced. |
| [#10954](https://github.com/QwenLM/qwen-code/pull/10954) | feat(serve): expose background agents via `GET /background-agents` | Adds an ACP endpoint listing the sessions the Agent View supervisor is running, with per-agent state and purpose. Stacks onto #10949. |
| [#10697](https://github.com/QwenLM/qwen-code/pull/10697) | feat(serve): workspace-scoped Skills runtime | Migrates Skills management to workspace-owned runtimes, separating durable config from live discovery and tracking revision/runtime-epoch metadata. |
| [#10957](https://github.com/QwenLM/qwen-code/pull/10957) | perf(cli): import core modules directly | Replaces monolithic package-root imports with direct core-module paths, directly addressing the CI collect-time bottleneck in #10908. |
| [#8927](https://github.com/QwenLM/qwen-code/pull/8927) | feat(channels): bound session lifetime with `sessionRotation` | Adds per-channel `maxTurns` and time-based bounds so stale routes automatically start fresh sessions instead of reusing an exhausted one. |
| [#9305](https://github.com/QwenLM/qwen-code/pull/9305) | fix(ui): bottom-align short VP content | Fixes the blank-gap bug in Virtual Viewport mode where short conversations top-aligned, leaving dead space between the last message and the composer. |
| [#9768](https://github.com/QwenLM/qwen-code/pull/9768) | feat(review): coverage as a sealed, classified ledger | Turns `/review` chunk coverage into an identity-carrying ledger that explains each gap and reports read-vs-posted diffs separately. |
| [#10347](https://github.com/QwenLM/qwen-code/pull/10347) | feat(core): auto-retry transient network errors (EOF) | Reclassifies wrapped low-level transport failures (e.g. `400 … EOF`) as retryable instead of fail-fast, benefiting channel clients on flaky networks. |
| [#10421](https://github.com/QwenLM/qwen-code/pull/10421) | fix(review): screen content filters before probe-tree restore | Prevents `scratch-tree` from failing when a repo's local config defines a smudge content filter, which previously blocked checkout during review setup. |
| [#10963](https://github.com/QwenLM/qwen-code/pull/10963) | fix(core): fire active-todo reminders at delegation boundaries | Addresses #10953 by triggering the active-todo reminder at subagent delegation boundaries and user turns, so the persisted plan sidecar stays in sync. |
| [#10939](https://github.com/QwenLM/qwen-code/pull/10939) | feat(web-shell): live status for running subagents in transcript | Running subagents now appear live in the session transcript; detached agents gain a quiet pulse indicator on their card. |
| [#10968](https://github.com/QwenLM/qwen-code/pull/10968) | fix(cli): restore green main CI after live slash-command submit | Repairs two CI jobs broken by the #10967 change by adding input declaration to the slash-command memoization dependencies. |

## 5. Feature Request Trends

- **Sandbox evolution:** The Bubblewrap backend request (#10583) reflects growing demand for lightweight, daemon-native isolation options beyond Docker/Podman, especially for Linux environments without container runtimes.
- **Multi-agent observability:** Three concurrent efforts — background-agent listing (#10954), live subagent status in transcripts (#10939), and workspace-scoped Skills runtimes (#10697) — point to a clear trend: the team is investing heavily in making multi-agent execution transparent and debuggable.
- **Session lifetime & rotation:** The `sessionRotation` PR (#8927) and the stale-plan bug (#10953) both indicate the community wants finer-grained control over session lifespan and state consistency under delegation.
- **Cross-session messaging hardening:** Issue #10925 continues to push for symmetric class parity, tighten-only repository settings, and a trusted-controller layer, signaling sustained interest in safe inter-session communication.

## 6. Developer Pain Points

- **Token waste in error loops:** Repeated tool failures (especially permission/git errors) burn millions of tokens with no early termination (#10887, P1). This is the highest-impact reliability gap reported this cycle.
- **CI slowness from module imports:** Test collection time exceeds actual test execution time in several workspaces (#10908), directly slowing contributor iteration. The direct-import migration (#10957) is the response.
- **Credential leakage in channels:** The DingTalk stdout leak (#10936, P1) and the git-config-class finding (#10561) show that integration channels remain a weak spot for accidental secret exposure.
- **TUI rendering debt:** The ink patchwork (#8662) is a long-running pain point; contributors describe structural bugs (flicker, VP mode quirks) that cannot be resolved within the current renderer without a rewrite.
- **Skill/hard-constraint enforcement:** Agents fabricating fallback values instead of stopping on missing required inputs (#10888) undermine deterministic skill execution, a pattern that recurs across production sessions.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



# DeepSeek TUI Community Digest — 2026-09-04

## 1. Today's Highlights

The CodeWhale project advanced significantly with the **0.9.12 Fleet-only UX release** (PR #5862), consolidating workbar, startup, underwater theming, and branding into a single merge. Two critical ACP session management gaps were opened (Issues #5863, #5864), and a destructive TTL cleanup bug was patched in PR #5854, closing Issue #5824.

## 2. Releases

No new releases were published in the last 24 hours. The latest shipped version is **0.9.12**, delivered via PR #5862.

## 3. Hot Issues

| # | Title | Why It Matters |
|---|-------|---------------|
| [#5316](https://github.com/Hmbown/CodeWhale/issues/5316) | EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella) | The master tracking issue for crate decomposition; every sub-EPIC and PR reports here. Essential for understanding project architecture roadmap. |
| [#5863](https://github.com/Hmbown/CodeWhale/issues/5863) | [enhancement] ACP Function Enhancement | `serve --acp` lacks session config options (modes/models/configOptions), blocking editor clients from showing or changing working mode. Created by a core maintainer. |
| [#5864](https://github.com/Hmbown/CodeWhale/issues/5864) | `serve --acp` missing ACP session/list & session/load | ACP clients cannot enumerate or resume existing Codewhale sessions — a significant functional gap for IDE integrations. |
| [#5824](https://github.com/Hmbown/CodeWhale/issues/5824) | Lane TTL cleanup can recursively delete an unverified path | **CLOSED.** A destructive failure mode where TTL cleanup trusts `worktree_path` without verifying managed-worktree identity, risking data loss on stale or corrupted lanes. Patched in PR #5854. |
| [#5866](https://github.com/Hmbown/CodeWhale/issues/5866) | Key Ophthalmology CPT & ICD-10 Updates for 2026 | Spam/off-topic medical billing link posted by an external actor; low community relevance. |

## 4. Key PR Progress

| # | Title | Status | Summary |
|---|-------|--------|---------|
| [#5867](https://github.com/Hmbown/CodeWhale/pull/5867) | feat(config): add `[reasoning_only]` section for retry count | OPEN | Makes `MAX_REASONING_ONLY_REPROMPTS` configurable instead of hardcoded to 2; users can now tune reasoning-only retry behavior. |
| [#5865](https://github.com/Hmbown/CodeWhale/pull/5865) | refactor(tui): re-land FEAT-020 plugin command shapes on main | OPEN | Re-lands plugin command shapes originally merged to an integration branch; tracked under EPIC-005 (#5316). |
| [#5833](https://github.com/Hmbown/CodeWhale/pull/5833) | feat(memory): FEAT-019 memory capability & typed outcomes | CLOSED | Adds `CommandCapabilities::MEMORY` bit, `CommandMemoryContext` facet, and a full TUI memory adapter (search, remember, get, export, reindex, delete). |
| [#5858](https://github.com/Hmbown/CodeWhale/pull/5858) | tui: collapse ocean_treatment into ThemeId::Underwater | CLOSED | Merges ocean-themed UI slices into a unified `ThemeId::Underwater` with a single picker list and read-only config migration. |
| [#5862](https://github.com/Hmbown/CodeWhale/pull/5862) | Codewhale 0.9.12: Fleet-only UX | CLOSED | Integrates 10 UX slices: workbar rename, startup flow, underwater default theme, provider selection, settings regrouping, hover contract, and logo consistency. |
| [#5843](https://github.com/Hmbown/CodeWhale/pull/5843) | tui: align typed config and schema with live value spaces | CLOSED | Cleans orphaned locale keys, carries custom themes in typed config, and aligns schema with actual runtime values. |
| [#5861](https://github.com/Hmbown/CodeWhale/pull/5861) | chore(brand): serve the canonical whale on account-entry pages | OPEN | Fixes sign-in/sign-up pages rendering a different whale graphic than the rest of the product; unifies brand assets. |
| [#5854](https://github.com/Hmbown/CodeWhale/pull/5854) | lane: require verified managed-worktree identity before TTL cleanup | CLOSED | **Medium risk.** Adds pre-cleanup verification gates to prevent accidental `remove_dir_all` on unverified paths; directly addresses Issue #5824. |
| [#5857](https://github.com/Hmbown/CodeWhale/pull/5857) | fix(tui): thinking fold toggles relative to expanded baseline | OPEN | Fixes one-cell truth-table for thinking fold behavior plus 8-cell test coverage; keyboard inline-expand follow-up pending. |
| [#5844](https://github.com/Hmbown/CodeWhale/pull/5844) | config: delete AppMode pretenders and VerifierVerdictPolicy | CLOSED | Removes dead `AppMode::Auto`, `CommandMode` mirror, and `VerifierVerdictPolicy`; cleans audit leftovers with no single tracking issue. |

## 5. Feature Request Trends

- **ACP session management parity:** Issues #5863 and #5864 signal strong demand for complete ACP protocol support — specifically session listing, resumption, and config exposure for editor clients.
- **Configurability of reasoning behavior:** PR #5867 reflects a trend toward making previously hardcoded AI engine parameters (retry counts, reasoning-only modes) user-tunable.
- **UX coherence & theming consolidation:** Multiple merged PRs (#5858, #5862) point to an ongoing effort to unify the visual identity (underwater theme, workbar naming, brand assets) across all surfaces.
- **Memory capabilities:** FEAT-019 (PR #5833) adds typed memory commands, indicating continued investment in long-term context retention as a first-class feature.

## 6. Developer Pain Points

- **ACP integration gaps are blocking editor clients.** Both open issues (#5863, #5864) report that `serve --acp` is missing fundamental session management operations, making it difficult for IDE plugins to integrate properly with Codewhale.
- **Destructive cleanup risks erode trust.** Issue #5824 / PR #5854 highlights a real data-loss vulnerability in lane TTL cleanup — developers need confidence that automated cleanup won't destroy unmanaged or stale worktrees.
- **Schema drift between typed config and live values.** PR #5843 addressed orphaned locale keys and misaligned schemas, suggesting an ongoing pain point where configuration types drift from runtime behavior.
- **Plugin command decomposition is complex.** The umbrella epic (#5316) remains open with multiple sub-PRs still landing, indicating that the crate decomposition work is non-trivial and spans many interdependent changes.

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>



# ComfyUI Community Digest — 2026-09-04

## 1. Today's Highlights

No new releases landed in the past 24 hours. The most significant activity centers on VRAM optimization for Trellis workflows (PR #16054), expanded Flux.2 Klein image-conditioning support (PR #15976), and ongoing ROCm/AMD driver compatibility fixes across multiple issues. The community is actively discussing cross-vendor multi-GPU aspirations via a Vulkan backend (#4170).

---

## 2. Releases

None in the last 24 hours.

---

## 3. Hot Issues

**#4170 — Cross-Vendor Multi-GPU Support via Vulkan Backend** · [link](https://github.com/Comfy-Org/ComfyUI/issues/4170)
Perhaps the most aspirational issue open right now: a Vulkan backend enabling mixed Nvidia/AMD multi-GPU inference, critical as models like Flux exceed single-GPU VRAM even at fp8. Highly engaged (22 comments, 46 👍).

**#15973 — ACE-Step 1.5 Memory Leak / CPU Fallback on Windows/AMD** · [link](https://github.com/Comfy-Org/ComfyUI/issues/15973)
Severe slowdowns and OOM reported after recent repository updates on AMD+Windows setups. Confirmed reproducible with custom nodes disabled — a core-platform bug.

**#15661 — Performance Regression with DynamicVRAM / AIMDO** · [link](https://github.com/Comfy-Org/ComfyUI/issues/15661)
RTX 4090 users report generation times jumping from ~10 s to ~15 min after recent updates; GPU utilization drops dramatically. Feature request for a "prefer GPU / disable dynamic memory" toggle. Community pain point.

**#15985 — ROCm / Strix Halo HIPBLAS_ALLOC_FAILED in UV Unwrap** · [link](https://github.com/Comfy-Org/ComfyUI/issues/15985)
`torch.linalg.solve` fails during UV parameterization on Linux/ROCm (gfx1151). Affects 3D pipeline users on AMD hardware.

**#16062 — ROCm/Windows RX 9070 XT GPU/UI Stalling During VAE Decode** · [link](https://github.com/Comfy-Org/ComfyUI/issues/16062)
New issue opened today; DynamicVRAM interacts poorly with VAE decode on RX 9070 XT, causing both GPU hangs and UI freeze. Needs maintainer attention.

**#11017 — Loader Nodes Crash on Dynamically Linked `None` Values** · [link](https://github.com/Comfy-Org/ComfyUI/issues/11017)
`VALIDATE_INPUTS` in loader nodes does not guard against `None`, causing `'NoneType' object has no attribute 'endswith'`. Affects workflow robustness when outputs are conditionally linked.

**#16056 — Pixal3D bf16 / Multiview Checkpoints Crash in k_rms_norm** · [link](https://github.com/Comfy-Org/ComfyUI/issues/16056)
Tensor shape mismatch in Trellis2's cross-attention `k_rms_norm` when using bf16 or multiview Pixal3D checkpoints. int8_convrot variant works fine — suggests a precision-path bug.

**#15261 — 5070 Ti + 64 GB Outperforming 4080 + 64 GB on MiniMax H3** · [link](https://github.com/Comfy-Org/ComfyUI/issues/15261)
Community curiosity thread: the RTX 5070 Ti (16 GB) runs 2.3× faster than a 4080 on MiniMax H3 ref2v workflows, prompting discussion about memory bandwidth vs. compute trade-offs.

**#16064 — Request to Hide Node Info Badges** · [link](https://github.com/Comfy-Org/ComfyUI/issues/16064)
Feature request to remove small info labels (e.g., "rgthree") that appear above nodes, for cleaner workflow screenshots and presentations.

**#16026 — GET_SCHEMA() OUTPUT_IS_LIST Cache Causes Nested Inherited ComfyNode Bugs** · [link](https://github.com/Comfy-Org/ComfyUI/issues/16026)
Schema caching in `_io.py` interacts badly with initialization order in nested `ComfyNode` subclasses, producing incorrect node schemas. Affects custom node authors.

---

## 4. Key PR Progress

**PR #16054 — Lower peak Trellis workflow VRAM and RAM usage** · [link](https://github.com/Comfy-Org/ComfyUI/pull/16054)
Open PR by `comfyanonymous` building on the recently closed #16037; aims to reduce memory peaks in Trellis-based 3D generation workflows.

**PR #15976 — Image Conditioning Support for Flux.2 Klein** · [link](https://github.com/Comfy-Org/ComfyUI/pull/15976)
Adds loading of the Qwen3-VL visual encoder alongside Qwen3 text encoders for Flux.2 Klein (4B and 8B), unlocking image-conditioned generation paths previously unavailable.

**PR #15935 — Comfy Cloud as a Partner Node** · [link](https://github.com/Comfy-Org/ComfyUI/pull/15935)
Local ComfyUI nodes that proxy curated workflows to Comfy's GPU cloud, billing against user credits. No Cloud subscription required — a new distribution channel for published workflows.

**PR #16060 — Tripo Partner Node Fixes** · [link](https://github.com/Comfy-Org/ComfyUI/pull/16060)
Corrects real output formats (FBX vs. GLB mislabeling), adds missing parameters, and introduces six new nodes covering image/multiview/retopology/texture pipelines.

**PR #16072 — Sparse Attention Node** · [link](https://github.com/Comfy-Org/ComfyUI/pull/16072)
Exposes the new `comfy-kitchen` sparse attention backends as a ComfyUI node, enabling memory-efficient attention for long-sequence workloads.

**PR #15662 — MiniMax-H3 / HiDream O1 LoRA Support (DiffSynth-Studio)** · [link](https://github.com/Comfy-Org/ComfyUI/pull/15662)
Adds `MiniMaxH3` and `HiDreamO1` branches to `model_lora_keys_unet`, fixing silent LoRA failures for models trained with DiffSynth-Studio / ModelScope scripts.

**PR #16075 — Fix TypeError Saving Checkpoints with Dynamic VRAM (FakeDevice)** · [link](https://github.com/Comfy-Org/ComfyUI/pull/16075)
Fixes crash (#16070) where `CheckpointSave` raises `TypeError: empty(): argument 'device' must be torch.device, not FakeDevice` when dynamic VRAM loading is active.

**PR #16065 — MiniMax-H3: Make VAE Optional** · [link](https://github.com/Comfy-Org/ComfyUI/pull/16065)
Allows reference-to-video workflows to run with text-encoder-only conditioning when no VAE is connected, without breaking existing dual-VAE setups.

**PR #16069 — Force CPU for Mesh Postprocess Kernels on MPS** · [link](https://github.com/Comfy-Org/ComfyUI/pull/16069)
Routes scatter/index_put_-heavy mesh kernels (component labeling, QEM edge collapse, dual-contouring) to CPU on Apple MPS, fixing crashes in `comfy_extras/nodes_mesh_postprocess.py`.

**PR #16067 — Warn When `--use-ck-attention` Is Enabled for TRELLIS.2** · [link](https://github.com/Comfy-Org/ComfyUI/pull/16067)
Adds a warning when the global comfy-kitchen INT8 attention flag is active during Trellis.2 shape/upsample stages, preventing silent quality collapse (#16027).

---

## 5. Feature Request Trends

- **Cross-vendor / heterogeneous GPU support** — Vulkan backend (#4170) and ASCEND NPU support (#11909) reflect growing demand beyond the NVIDIA-centric ecosystem.
- **Dynamic VRAM control options** — Users want explicit toggles to prefer GPU memory or disable dynamic allocation (#15661), citing severe performance regressions.
- **Cleaner UI / workflow aesthetics** — Hiding node info badges (#16064) and better file organization in output directories (#16052) show a trend toward polish and shareability.
- **Partner-cloud integration** — Comfy Cloud as a local partner node (#15935) signals momentum toward hybrid local/cloud workflow execution.

---

## 6. Developer Pain Points

- **ROCm / AMD stability on Windows** — Three separate issues this cycle (#15973, #15985, #16062) all involve AMD hardware: memory leaks, HIPBLAS alloc failures, and VAE-decode stalling. Windows+ROCm remains a fragile surface.
- **Dynamic VRAM regressions** — Multiple reports (#15661, #16070/#16075) of recent changes breaking performance or crashing saves when dynamic VRAM / FakeDevice is active.
- **Loader-node null-safety** — #11017 highlights that `VALIDATE_INPUTS` in core loader nodes assumes non-None inputs, breaking workflows with conditional/dynamic links.
- **Precision-path bugs in 3D models** — Pixal3D bf16 and multiview checkpoints crash in Trellis2 attention (#16056), while int8 variants work — suggesting incomplete testing across quantization paths.
- **Schema caching in custom node hierarchies** — #16026 reveals that the `GET_SCHEMA()` output-list cache can produce incorrect schemas for nested inherited `ComfyNode` classes, a trap for node authors.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>



# Ollama Community Digest — 2026-09-04

## 1. Today's Highlights
Ollama is tightening stability and security with active patches for Windows iGPU regressions, Metal watchdog panics, and debug log retention risks. Meanwhile, MLX capabilities are expanding with Granite 4.1 support and structured output speculative decoding, while cloud users continue to report persistent reasoning loops in DeepSeek and GLM models.

## 2. Releases
No releases in the last 24 hours.

## 3. Hot Issues
1.  **[#16329] Feature request: add 'agy' (Antigravity CLI) to ollama launch integrations**  
    Author: doctorboyz | 👍: 17 | [Link](https://github.com/ollama/ollama/issues/16329)  
    Community interest is high for integrating Google's Antigravity CLI (`agy`) as an official `ollama launch` option, reflecting strong demand for broader third-party agent tooling support.

2.  **[#16506] Bug: Gemma4:e2b crashes at start with GGML_ASSERT failed**  
    Author: jeremyheld-hs | 👍: 8 | [Link](https://github.com/ollama/ollama/issues/16506)  
    A critical crash in WSL 2 for `gemma4:e2b` citing `GGML_ASSERT(n_inputs < GGML_SCHED_MAX_SPLIT_INPUTS)` has drawn significant attention, blocking workflow for users running this quantization.

3.  **[#16714] Feature request: Ollama Cloud - Prompt Cache Support**  
    Author: devasur | 👍: 3 | [Link](https://github.com/ollama/ollama/issues/16714)  
    Cloud subscribers are requesting provider prompt cache support to reduce latency and cost in agentic use cases, aligning Ollama Cloud with competitors like Open Code Zen.

4.  **[#14953] iGPU: reduce memory overhead, add RAM pressure guard, cap concurrent models**  
    Author: RajeshKumar11 | 👍: 2 | [Link](https://github.com/ollama/ollama/issues/14953)  
    Long-standing performance issue where iGPUs share RAM with CPU; users report excessive memory reservation (457 MiB minimum) and lack of RAM pressure guards, impacting mixed CPU/GPU workloads.

5.  **[#17869] Feature Request: Ship official Q3_K_M MLX quantization for Qwen3.8**  
    Author: SamWoo0723 | 👍: 2 | [Link](https://github.com/ollama/ollama/issues/17869)  
    Apple Silicon users with 16GB/24GB unified memory are requesting tighter Q3 quantizations to fit larger models like Qwen3.8, following the precedent set by Gemma 26B Q4 availability.

6.  **[#18220] Bug: Gemma 4 26B A4B enters reasoning loop after Ollama update**  
    Author: CesarR70 | [Link](https://github.com/ollama/ollama/issues/18220)  
    Post-update regression where `gemma4:26b-a4b` frequently loops reasoning instead of issuing tool calls in Cline/VS Code, disrupting agent workflows.

7.  **[#17892] Bug: deepseek-v4-flash thinking output loops indefinitely**  
    Author: LAN-TINA-WS | [Link](https://github.com/ollama/ollama/issues/17892)  
    Cloud users report `deepseek-v4-flash` repeating the same thinking block up to 221 times over ~90 seconds, yielding zero usable output and burning context.

8.  **[#18038] Performance regression: llama-server high CPU use when generating tokens**  
    Author: mario-grgic | [Link](https://github.com/ollama/ollama/issues/18038)  
    Build from source on Mac Studio M4 Max shows `llama-cpp` consuming ~560% CPU during token generation, a noticeable regression from prior versions.

9.  **[#18125] Bug: mlxrunner num_ctx not enforced, causing Metal watchdog panic**  
    Author: touringsedan | [Link](https://github.com

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>



# llama.cpp Community Digest — 2026-09-04

## 1. Today's Highlights

The llama.cpp community delivered **12 new builds** (b10780–b10792) in the past 24 hours, with standout improvements in speculative decoding (OpenCL GEMM optimizations), Metal sparse flash attention, and multi-GPU CUDA concurrency. Community momentum is concentrated on **AMD RDNA3.5 (gfx1151)** correctness across Vulkan/HIP backends and **MTP/draft decoding** race conditions under parallel serving.

---

## 2. Releases

| Build | Key Change |
|-------|-----------|
| **b10792** | JSON-schema: fix GBNF grammar generation for empty object schemas — prevents parsing failures on `{}` type constraints |
| **b10791** | OpenCL: quantized `lm_head` / decode GEMV and medium-batch GEMM optimizations for speculative decoding (MTP) |
| **b10790** | CUDA SM87: tune MMVQ→MMQ crossover for improved matmul throughput |
| **b10785** | **Metal: add sparse Flash Attention** — new `kernel_flash_attn_ext_vec_idx` with Hillis-Steele scan, supporting `n_kv_max` sparse mask hints |
| **b10784** | Metal: fix GLU dispatch when `ne00 == 1` |
| **b10782** | CUDA: allow concurrent streams per split for multi-GPU — removes graph-optimization skip that broke multi-device inference |
| **b10781** | Vulkan: fix FA dequant path engagement — skips stale `nb[3]` check when `ne[3] == 1`, fixing cache-full edge case |
| **b10780** | SYCL: enhance API to support peer-to-peer copy |

Full releases: <https://github.com/ggml-org/llama.cpp/releases>

---

## 3. Hot Issues

1. **#10528 — Inconsistent Vulkan segfault** (83 comments) · <https://github.com/ggml-org/llama.cpp/issues/10528>
   Long-standing Linux Vulkan crash; high comment count signals persistent community frustration and ongoing investigation.

2. **#24168 — SYCL empty/gibberish output on hybrid models + ggml_sycl_op_mul_mat crash** (26 comments) · <https://github.com/ggml-org/llama.cpp/issues/24168>
   Regression between builds b9128–b9159 and June 2026 on Intel Arc Pro B60; affects Qwen3-Next/35 architectures.

3. **#10453 — Add ANE (Apple Neural Engine) backend** (23 comments, 44 👍) · <https://github.com/ggml-org/llama.cpp/issues/10453>
   Top-voted feature request; traces back to a new CoreML API that may enable ANE inference on latest Apple Silicon.

4. **#27572 — Draft-MTP acceptance collapses to 0.0 with `-np N` and multi-ubatch** (13 comments) · <https://github.com/ggml-org/llama.cpp/issues/27572>
   Self-speculative decoding silently breaks under parallel slots due to an async `t_h_nextn` device→host copy race — critical for serving workloads.

5. **#27579 — HIP/ROCm produces corrupted output on gfx1151; Vulkan is correct with identical flags** (12 comments) · <https://github.com/ggml-org/llama.cpp/issues/27579>
   Strix Halo APU users forced to choose between broken HIP and working Vulkan; same build, same weights, different backend results.

6. **#28247 — Vulkan `maxComputeWorkGroupCount` assertion on Intel Arc A770 with Qwen 3.8** (11 comments) · <https://github.com/ggml-org/llama.cpp/issues/28247>
   New regression on Intel Arc for hybrid architectures; Flash Next models hit compute limit violations.

7. **#28113 — CUDA/HIP MoE garbage output on RDNA3.5 (gfx1151) since #27621** (10 comments) · <https://github.com/ggml-org/llama.cpp/issues/28113>
   Confirms a regression in MoE routing on AMD's latest consumer GPU family; impacts Qwen3.8-27B and similar models.

8. **#28290 — `unpack8()` corrupts MAT_MUL + CPY on Qualcomm Snapdragon X Elite** (9 comments) · <https://github.com/ggml-org/llama.cpp/issues/28290>
   Windows ARM64 Vulkan regression; affects Qwen3-4B-Thinking on Adreno X1-85.

9. **#27685 — FreeToken is faster than llama.cpp** (9 comments, 2 👍) · <https://github.com/ggml-org/llama.cpp/issues/27685>
   Community research comparing an alternative speculative decoding library; may drive performance benchmarking discussions.

10. **#28196 — qwen35 MTP (draft 4) gives ~1.06x speedup on RTX 5090 vs ~1.8x on RTX 4090** (7 comments) · <https://github.com/ggml-org/llama.cpp/issues/28196>
    Blackwell (sm_120) shows weaker speculative decoding gains on hybrid DeltaNet architectures; bandwidth utilization only ~28% vs ~86% on Ada.

---

## 4. Key PR Progress

1. **#28098 — Metal: add sparse Flash Attention** [CLOSED] · <https://github.com/ggml-org/llama.cpp/pull/28098>
   Adds sparse FA support via `kernel_flash_attn_ext_vec_idx` using Hillis-Steele scan; per-row threadgroup compaction of finite mask entries. Benchmarked on DSv4 / M2 Ultra.

2. **#28278 — Fix whole-source rebuild on every commit** [CLOSED] · <https://github.com/ggml-org/llama.cpp/pull/28278>
   Versions now written to `llama-version.h`; only `llama.cpp` recompiles on changes instead of the entire `src/models` tree.

3. **#28339 — CUDA/HIP: derive MMVQ nwarps from kernel launch bounds** · <https://github.com/ggml-org/llama.cpp/pull/28339>
   Fixes mismatch where device-side arch macros and host-side runtime CC disagree (e.g., gfx11-generic on RDNA3.5), resolving incorrect warp counts.

4. **#28279 — Fix GBNF grammar for empty object schemas** [CLOSED] · <https://github.com/ggml-org/llama.cpp/pull/28279>
   Empty JSON schemas (`{}`) previously generated consecutive spaces in GBNF, breaking parsing; now outputs a single space.

5. **#28348 — Halo/Vulkan coopmat1 f16b** · <https://github.com/ggml-org/llama.cpp/pull/28348>
   Adds predicate logic and `maxComputeWorkGroupCount` dispatch guard for fused coopmat operations on AMD Halo architecture.

6. **#27858 — Fix DFlash2 assertion with `--split-mode tensor` on CUDA** · <https://github.com/ggml-org/llama.cpp/pull/27858>
   Resolves startup crash when using DFlash2 draft models with tensor-split mode.

7. **#27633 — OpenCL: extend elementwise and data-movement op coverage** · <https://github.com/ggml-org/llama.cpp/pull/27633>
   Adds nine unary elementwise ops (`sgn`, `step`, `elu`, `hardswish`, `hardsigmoid`, `floor`, `ceil`, `round`, `trunc`) in f32/f16.

8. **#27311 — Scheduler UMA ring buffer (+ sanitizer and fixes)** · <https://github.com/ggml-org/llama.cpp/pull/27311>
   Implements ring-buffer mechanism for input tensors on top of existing sanitizer; hardens pinned-memory duplication logic.

9. **#28346 — mmproj: add `--mmproj-evict-draft`** · <https://github.com/ggml-org/llama.cpp/pull/28346>
   Reduces VRAM pressure by dynamically swapping draft model weights out and mmproj weights in during multimedia encoding, then restoring.

10. **#28329 — OS XSAVE checks in x86 CPU feature scoring** [CLOSED] · <https://github.com/ggml-org/llama.cpp/pull/28329>
    Prevents illegal instruction crashes in VMs that don't enable XSAVE, even when CPUID advertises the feature.

---

## 5. Feature Request Trends

- **Apple Neural Engine (ANE) backend** (#10453) — highest-engagement feature ask; community eager for on-device acceleration beyond Metal/CoreML.
- **Multi-modal document support in rerank endpoints** (#25921) — demand for VL reranker models accepting document inputs via `/v1/rerank`.
- **SSD streaming for MoE expert weights** (#25294) — running models larger than RAM by streaming routed experts from disk with small device-side caches.
- **System prompt from file for `llama-server`** (#28053) — parity with `llama-cli` (`-sysf` flag).
- **Apple RDMA as RPC transport** (#26421) [CLOSED] — low-latency cross-machine serving via Apple's RDMA implementation.
- **DeepSeek-V4 hyper-connection fused ops for Vulkan** (#26578) — closing the backend gap after CUDA and Metal already support DSV4 ops.

---

## 6. Developer Pain Points

1. **AMD RDNA3.5 (gfx1150/1151) correctness crisis** — Multiple overlapping issues (#27579, #28113, #27797, #28158) report corrupted output, crashes, or OOB token IDs on Strix Halo/Point hardware across HIP, Vulkan, and CUDA backends. The same model produces correct results under Vulkan but fails under HIP, indicating backend-specific kernel bugs rather than hardware limitations.

2. **Speculative decoding (MTP/draft) instability under concurrency** — Issues #27572 and #28196 reveal that draft acceptance rates collapse or provide negligible speedup when using parallel slots (`-np N`) or on new GPU architectures (RTX 5090 / sm_120). The async device→host copy race in #27572 is a serving-production blocker.

3. **Vulkan assertion failures on newer Intel/AMD GPUs** — #28247 (Arc A770) and #28214 (PowerVR C-series) show that compute group size limits and firmware incompatibilities are surfacing as hybrid/DFlash models push shader boundaries.

4. **ARM64 / Windows specificity regressions** — #28290 (Snapdragon X Elite `unpack8` corruption) and #28295 (MSVC not detecting AVX-VNNI) indicate that less-common build targets are receiving less regression testing coverage.

5. **Build-system and CI friction** — #28275 notes missing SemVer Docker tags, forcing users to look up build numbers. PR #28278 fixed a painful full-rebuild issue, but CI gaps persist (OpenVINO test skips in #28347).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*