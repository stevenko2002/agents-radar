# AI CLI Tools Community Digest 2026-07-03

> Generated: 2026-07-03 08:05 UTC | Tools covered: 12

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

* **Claude Code** ([github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)) released v2.1.199, introducing stacked slash-skill invocations for chained workflows and resolving critical SSL certificate errors for proxied environments.
* **Qwen Code** ([github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)) shipped v0.19.5 stable with hardened daemon-managed channel workers, alongside `cua-driver-rs` v0.7.0 featuring a codesigned macOS universal binary.
* **Gemini CLI** ([github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)) released v0.51.0-nightly, introducing the foundational skeleton for a caretaker egress Cloud Run service to advance background processing capabilities.
* **OpenAI Codex** ([github.com/openai/codex](https://github.com/openai/codex)) pushed two rapid-fire incremental alpha builds (`rust-v0.143.0-alpha.34` and `alpha.35`) for active iteration on its Rust-based core.
* **DeepSeek TUI** ([github.com/Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)) merged v0.8.67, stabilizing the onboarding flow and skill dispatcher while adding dynamic MCP server management and project rules auto-discovery.
* **Kimi Code CLI** ([github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)) resolved a critical WebSocket connection error that was breaking secure remote development setups utilizing Tailscale zero-trust network tunnels.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of: 2026-07-03 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking

### 🥇 `self-audit` — Mechanical Verification + Reasoning Quality Gate
- **PR:** [#1367](https://github.com/anthropics/skills/pull/1367) | **Status:** OPEN
- **Functionality:** A universal pre-delivery audit skill. Step 0 performs mechanical file-existence verification; Steps 1–4 execute a four-dimension reasoning audit prioritized by damage severity. Works with any project, tech stack, or model.
- **Discussion Highlights:** Positioned as a "safety net" skill that catches hallucinated file paths and reasoning errors before output reaches the user. Cross-referenced with the broader community push for agent reliability (see Issue [#492](https://github.com/anthropics/skills/issues/492) on trust boundaries).
- **Current Status:** Open, recently updated (2026-07-02).

### 🥈 `document-typography` — Typographic Quality Control for Generated Documents
- **PR:** [#514](https://github.com/anthropics/skills/pull/514) | **Status:** OPEN
- **Functionality:** Prevents orphan word wraps, widow paragraphs, and numbering misalignment in AI-generated documents. Addresses a universal pain point — every document Claude generates is susceptible.
- **Discussion Highlights:** Noted for tackling a problem "users rarely ask about but always notice." Highlights the community's shift toward proactive quality enforcement rather than reactive fixes.
- **Current Status:** Open, updated 2026-03-13.

### 🥉 `testing-patterns` — Full-Stack Testing Methodology Skill
- **PR:** [#723](https://github.com/anthropics/skills/pull/723) | **Status:** OPEN
- **Functionality:** Covers the Testing Trophy model, unit testing (AAA pattern), React component testing (Testing Library), integration testing, and E2E patterns. Teaches Claude *what* to test vs. *what not to*.
- **Discussion Highlights:** One of the most comprehensive single-skill submissions. Reflects strong developer demand for structured testing guidance embedded directly in the agent's workflow.
- **Current Status:** Open, updated 2026-04-21.

### 4. `sensory` — Native macOS Automation via AppleScript
- **PR:** [#806](https://github.com/anthropics/skills/pull/806) | **Status:** OPEN
- **Functionality:** Teaches Claude to use `osascript` for native macOS automation instead of screenshot-based computer use. Two-tier permission system: Tier 1 (direct app scripting) works out of the box; Tier 2 (System Events UI) requires Accessibility permissions.
- **Discussion Highlights:** Represents a paradigm shift from visual computer-use to programmatic OS control. Significant implications for agent reliability on macOS.
- **Current Status:** Open, updated 2026-04-02.

### 5. `skill-quality-analyzer` + `skill-security-analyzer` — Meta-Skills for the Marketplace
- **PR:** [#83](https://github.com/anthropics/skills/pull/83) | **Status:** OPEN
- **Functionality:** Two meta-skills: quality analyzer evaluates skills across five dimensions (structure, documentation, examples, resources, etc.); security analyzer audits for trust boundary and permission risks.
- **Discussion Highlights:** Directly addresses the security concerns raised in Issue [#492](https://github.com/anthropics/skills/issues/492) (34 comments — the most-discussed issue in the repo). The community is building self-policing infrastructure.
- **Current Status:** Open, updated 2026-01-07.

### 6. `color-expert` — Comprehensive Color Knowledge Skill
- **PR:** [#1302](https://github.com/anthropics/skills/pull/1302) | **Status:** OPEN
- **Functionality:** Self-contained color expertise covering naming systems (ISCC-NBS, Munsell, XKCD, RAL, CSS), color spaces (OKLCH, OKLAB, CAM16), and a "what to use when" decision table.
- **Discussion Highlights:** Demonstrates the ecosystem's maturation — contributors are building deep domain-specific knowledge skills, not just utility wrappers.
- **Current Status:** Open, updated 2026-06-12.

### 7. `ODT` — OpenDocument Text Creation, Parsing & Conversion
- **PR:** [#486](https://github.com/anthropics/skills/pull/486) | **Status:** OPEN
- **Functionality:** Create, fill, read, and convert OpenDocument Format files (.odt, .ods). Triggers on mentions of ODT, ODS, ODF, LibreOffice document, or open-source/ISO standard document requests.
- **Discussion Highlights:** Fills a gap in the document-skills suite alongside existing PDF and DOCX skills. Part of a broader push for open-format support.
- **Current Status:** Open, updated 2026-04-14.

---

## 2. Community Demand Trends

Distilled from the most-commented Issues and PR activity:

| Trend | Evidence | Key References |
|---|---|---|
| **Security & Trust Governance** | The #1 issue (34 comments) warns that community skills under the `anthropic/` namespace create trust boundary abuse. Proposals for agent-governance patterns and skill-security-analyzer meta-skills. | [#492](https://github.com/anthropics/skills/issues/492), [#83](https://github.com/anthropics/skills/pull/83), [#412](https://github.com/anthropics/skills/issues/412) |
| **Agent Memory & State Optimization** | Proposals for compact symbolic notation to reduce context-window overhead in long-running agents. | [#1329](https://github.com/anthropics/skills/issues/1329) |
| **Org-Level Skill Distribution** | Strong demand (7 👍, 14 comments) for native org-wide skill sharing instead of manual .skill file distribution via Slack/Teams. | [#228](https://github.com/anthropics/skills/issues/228) |
| **Skill-creator Pipeline Reliability** | Multiple independent reports (12+ comments) that `run_eval.py` reports 0% recall, making the description-optimization loop optimize against noise. At least 5 PRs attempt fixes. | [#556](https://github.com/anthropics/skills/issues/556), [#1298](https://github.com/anthropics/skills/pull/1298), [#1323](https://github.com/anthropics/skills/pull/1323), [#1169](https://github.com/anthropics/skills/issues/1169) |
| **Cross-Platform Compatibility** | Windows users report `skill-creator` scripts failing due to subprocess PATHEXT, cp1252 encoding, and pipe `select()` issues. Multiple fix PRs submitted. | [#1061](https://github.com/anthropics/skills/issues/1061), [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050) |
| **Skills-as-MCP / API Exposure** | Early but persistent demand to expose Skills through the MCP protocol for standardized programmatic invocation. | [#16](https://github.com/anthropics/skills/issues/16) |

---

## 3. High-Potential Pending Skills

These are active, recently-updated PRs that address clear community needs and may land soon:

| PR | Skill / Fix | Why It Matters | Last Updated |
|---|---|---|---|
| [#1367](https://github.com/anthropics/skills/pull/1367) | `self-audit` — mechanical + reasoning quality gate | Universal pre-delivery verification; addresses hallucination and file-path errors | 2026-07-02 |
| [#1298](https://github.com/anthropics/skills/pull/1298) | `skill-creator` eval pipeline fix (0% recall) | Unblocks the entire description-optimization loop; 10+ independent reproductions | 2026-06-23 |
| [#1323](https://github.com/anthropics/skills/pull/1323) | `skill-creator` trigger detection fix | Companion fix to #1298; resolves the root cause of eval returning original descriptions unchanged | 2026-06-25 |
| [#806](https://github.com/anthropics/skills/pull/806) | `sensory` — macOS AppleScript automation | Replaces fragile screenshot-based computer use with programmatic OS control | 2026-04-02 |
| [#723](https://github.com/anthropics/skills/pull/723) | `testing-patterns` — full testing methodology | Comprehensive testing guidance; high developer demand | 2026-04-21 |
| [#514](https://github.com/anthropics/skills/pull/514) | `document-typography` — typographic QC | Proactive quality enforcement for all generated documents | 2026-03-13 |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for a trustworthy, self-governing Skills ecosystem — one where security boundaries are enforced, the skill-creator toolchain actually works (especially on Windows), and agents can verify their own output before delivery.**

---

*Report generated from github.com/anthropics/skills PR and Issue data. All links point to the official repository.*

---

# Claude Code Community Digest — 2026-07-03

## 1. Today's Highlights
Claude Code v2.1.199 introduces stacked slash-skill invocations and resolves critical SSL certificate errors for proxied environments. The community is highly active in reporting stability issues, particularly surrounding background agent lifecycle management, context window corruption, and platform-specific rendering bugs on macOS and Windows.

## 2. Releases
**v2.1.199**
- **Stacked Skills**: Slash-skill invocations (e.g., `/skill-a /skill-b do XYZ`) now load all leading skills (up to 5) instead of just the first, enabling more complex chained workflows.
- **SSL/TLS Fixes**: Resolved SSL certificate errors that were prematurely burning retries in environments with TLS-inspecting proxies, missing `NODE_EXTRA_CA_CERTS`, or expired certificates, ensuring actionable guidance is shown to users.

## 3. Hot Issues
1. **#36151 [FEATURE] Multi-account switching in Claude Mobile app** (115 comments, 412 👍): Massive community demand for seamless multi-account support without requiring shared emails. [Link](https://github.com/anthropics/claude-code/issues/36151)
2. **#73125 [BUG] AskUserQuestion timeout bypass** (80 comments, 247 👍): Agents proceeding without user input after 60s, causing significant workflow disruptions and unintended file modifications. [Link](https://github.com/anthropics/claude-code/issues/73125)
3. **#69415 [BUG] API Error: Connection closed mid-response** (13 comments, 43 👍): Frequent connection drops on Linux/VSCode making the tool unusable for complex, long-running tasks. [Link](https://github.com/anthropics/claude-code/issues/69415)
4. **#72455 [BUG] Fullscreen renderer corrupts SYSTEM-WIDE macOS clipboard** (4 comments, 3 👍): Severe OS-level bug where copy/paste breaks across all applications while CC is running in fullscreen. [Link](https://github.com/anthropics/claude-code/issues/72455)
5. **#54179 [BUG] Desktop GUI SSH multi-session auth invalidation** (6 comments, 3 👍): Opening multiple SSH

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-03

---

## 1. Today's Highlights

Two rapid-fire alpha releases (`rust-v0.143.0-alpha.34` and `alpha.35`) landed within 24 hours, signaling active iteration on the Rust-based core. The community continues to rally heavily around a Linux desktop app request (#11023, 682 👍), while a newly discovered GPT-5.5 reasoning-token clustering pattern (#30364) is raising concerns about subtle model-level performance regressions on complex tasks.

---

## 2. Releases

| Tag | Version | Notes |
|-----|---------|-------|
| `rust-v0.143.0-alpha.35` | 0.143.0-alpha.35 | Incremental alpha; no detailed changelog provided |
| `rust-v0.143.0-alpha.34` | 0.143.0-alpha.34 | Incremental alpha; no detailed changelog provided |

Two alpha builds shipped in quick succession. No public release notes were attached—likely internal QA or targeted fixes preceding a stable cut.

---

## 3. Hot Issues

| # | Title | Activity | Why It Matters |
|---|-------|----------|----------------|
| [#11023](https://github.com/openai/codex/issues/11023) | Codex desktop app for Linux | 140 comments · 682 👍 | The single most-upvoted open issue. Linux developers are blocked from using the desktop app entirely; macOS power-consumption issues are pushing users toward Linux as an alternative. |
| [#8648](https://github.com/openai/codex/issues/8648) | Codex replies to earlier messages instead of latest | 75 comments · 55 👍 | Multi-turn conversation coherence is breaking on `gpt-5.2-xhigh`. Users report the assistant responding to stale context, undermining trust in long coding sessions. |
| [#30364](https://github.com/openai/codex/issues/30364) | GPT-5.5 reasoning-token clustering at 516/1034/1552 | 33 comments · 48 👍 | A data-driven analysis shows `gpt-5.5` reasoning output tokens disproportionately landing at exact boundaries (516, 1034, 1552), correlating with degraded performance on complex tasks. Suggests a possible internal budget or sampling artifact. |
| [#29532](https://github.com/openai/codex/issues/29532) | macOS SQLite TRACE log churn persists after v0.142.0 | 33 comments · 8 👍 | Persistent I/O churn in `~/.codex/logs_2.sqlite` degrades macOS performance. Partial fix landed in #29432 but `#29457` did not fully resolve it. |
| [#29418](https://github.com/openai/codex/issues/29418) / [#29089](https://github.com/openai/codex/issues/29089) | Windows sandbox setup.exe fails / module not found | 24 comments combined · 18 👍 | `codex-windows-sandbox-setup.exe` repeatedly fails with "module not found," breaking the sandbox on Windows for multiple users across different builds. |
| [#30595](https://github.com/openai/codex/issues/30595) | macOS CLI routes auth to Responses-Lite incorrectly | 10 comments | Same ChatGPT account works on Windows but fails on macOS CLI—requests are misrouted to `X-OpenAI-Internal-Codex-Responses-Lite`, blocking Pro/Plus users on Mac. |
| [#26876](https://github.com/openai/codex/issues/26876) | GPT-5.5 degradation over time | 9 comments · 2 👍 | Long-running report of material quality regression in `gpt-5.5` since the April 24 rollout window, affecting complex engineering workflows. |
| [#18115](https://github.com/openai/codex/issues/18115) | Repository-scoped marketplace and plugin config | 8 comments · 45 👍 | Teams want project-level plugin configuration via `.codex/config.toml` and local marketplace definitions, rather than user-scoped-only settings. High 👍 ratio signals strong enterprise demand. |
| [#30527](https://github.com/openai/codex/issues/30527) | Windows Defender triggers high CPU after update | 7 comments | Microsoft Defender Behavior Monitoring flags the latest Codex app build, causing sustained high CPU on Windows 10. |
| [#30946](https://github.com/openai/codex/issues/30946) | `apply_patch` ignores `@@` context, silently inserts at EOF | 3 comments | Pure-addition chunks in patches bypass their diff context and append to end-of-file while reporting success—a silent data-corruption risk for CLI users. |

---

## 4. Key PR Progress

| # | Title | Status | Summary |
|---|-------|--------|---------|
| [#22673](https://github.com/openai/codex/pull/22673) | Discover credentialed routes for managed proxy | ✅ Closed | Adds credential route discovery types to `codex-backend-client` and route-list endpoint helpers—foundation for authenticated proxy routing. |
| [#22675](https://github.com/openai/codex/pull/22675) | Route credentialed traffic through MITM proxy | ✅ Closed | Implements generic MITM action to reroute matching HTTPS traffic through the credential proxy endpoint with authenticated headers. |
| [#22680](https://github.com/openai/codex/pull/22680) | Tell model about credentialed routes | ✅ Closed | Seeds the managed proxy with initial credentialed route sets and informs the model which validated HTTPS prefixes can auto-attach stored credentials. |
| [#27503](https://github.com/openai/codex/pull/27503) | Refresh credentialed routes during session | ✅ Closed | Adds proxy-owned credential route config that refreshes at most every 5 minutes as installed plugins change, without coupling to `codex-core`. |
| [#28981](https://github.com/openai/codex/pull/28981) | Rebase live proxy state through config reloaders | ✅ Closed | Introduces a reloader hook for rebuilding proxy state from reloaders, enabling sandbox/exec-policy refreshes to replace base policy cleanly. |
| [#28998](https://github.com/openai/codex/pull/28998) | Make ChatGPT OAuth configurable | ✅ Closed | Adds explicit OAuth configuration with custom endpoints; keeps production OAuth as default; applies consistently across browser login, device-code, token refresh, and logout. |
| [#27971](https://github.com/openai/codex/pull/27971) | Coordinate cloud config bundle caching across processes | ✅ Closed | Solves race conditions when multiple Codex processes share `CODEX_HOME`—prevents redundant concurrent fetches of expired config bundles. |
| [#27713](https://github.com/openai/codex/pull/27713) | Prototype workload identity federation for CLI auth | ✅ Closed (Prototype) | Adds workload identity federation to Codex CLI via existing extension points—marked "do not merge" pending end-to-end validation. |
| [#28961](https://github.com/openai/codex/pull/28961) | Require literal words for safe shell classification | ✅ Closed | Tightens shell-command safety: unquoted shell words must remain literal before parsed arguments are used for safe-command classification; preserves quoted wildcards as literals. |
| [#28930](https://github.com/openai/codex/pull/28930) / [#28928](https://github.com/openai/codex/pull/28928) / [#28932](https://github.com/openai/codex/pull/28932) | Filesystem symlink semantics, metadata size, exclusive copies | ✅ Closed | Trio of `app-server` filesystem enhancements: nullable

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest - 2026-07-03

## 1. Today's Highlights
The latest nightly release introduces the foundational skeleton for the caretaker egress Cloud Run service, advancing the project's background processing capabilities. Meanwhile, community focus remains heavily anchored on agent stability, with critical bugs surrounding subagent hangs, shell execution freezes, and Auto Memory inefficiencies dominating the issue tracker. Concurrently, core maintainers and contributors are actively merging fixes to prevent infinite reasoning loops and resolve file corruption in core tools.

## 2. Releases
**v0.51.0-nightly.20260703.gf7af4e518**
*   **Caretaker Egress Service**: Introduces the skeleton for the egress Cloud Run service ([#28167](https://github.com/google-gemini/gemini-cli/pull/28167)). This lightweight HTTP server is designed to receive verified action event messages via Cloud Pub/Sub, laying the groundwork for robust background triage and execution workflows.

## 3. Hot Issues
1.  **[Subagent recovery reports false success](https://github.com/google-gemini/gemini-cli/issues/22323)**: Subagents hitting `MAX_TURNS` incorrectly report `GOAL` success, masking interruptions. (P1, 9 comments)
2.  **[Generalist agent hangs indefinitely](https://github.com/google-gemini/gemini-cli/issues/21409)**: Simple tasks like folder creation cause the generalist agent to hang forever unless explicitly instructed not to use subagents. (P1, 8 👍)
3.  **[Shell command execution gets stuck](https://github.com/google-gemini/gemini-cli/issues/25166)**: The CLI frequently hangs showing "Waiting input" even after simple, non-interactive shell commands have completed. (P1)
4.  **[Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)**: An epic tracking the expansion of behavioral eval tests to ensure robust component-level testing across supported Gemini models. (P1)
5.  **[AST-aware file reads and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)**: Investigating Abstract Syntax Tree (AST) aware tools to reduce token noise and precisely read method bounds. (P2)
6.  **[Auto Memory security and logging](https://github.com/google-gemini/gemini-cli/issues/26525)**: Addresses deterministic redaction and reduces logging, as secrets are currently sent to the model context before extraction prompts can redact them. (P2)
7.  **[Gemini underutilizes skills and sub-agents](https://github.com/google-gemini/gemini-cli/issues/21968)**: Users report the model rarely invokes custom skills or sub-agents autonomously without explicit prompting. (P2)
8.  **[Browser subagent fails in Wayland

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-03

## Today's Highlights

The Copilot CLI community is grappling with a critical agent-loop bug (#3158) where the Plan→Compact→Re-Plan cycle enters an infinite loop with zero execution, alongside a wave of MCP integration issues including pagination non-compliance (#4006) and OAuth failures for third-party servers (#4017). Terminal rendering remains a persistent pain point, with the scrollbar feature introducing text misalignment and clipboard corruption across multiple platforms. Meanwhile, demand grows for VS Code–parity features like custom model endpoints (#4003) and expanded BYOK configuration support.

---

## Releases

No new releases in the past 24 hours.

---

## Hot Issues

### 1. 🔴 Plan→Compact→Re-Plan Infinite Loop (#3158)
**[OPEN]** The agent enters a catastrophic loop (217 cycles observed) after context compaction, re-reading its own summary without executing any actions. Routed from internal support channels.
- **Why it matters:** Renders the agent unusable mid-session; a high-severity reliability issue.
- [github/copilot-cli#3158](https://github.com/github/copilot-cli/issues/3158)

### 2. 🔴 Model "gpt-5.3-codex" Not Available (#3997)
**[OPEN]** Copilot Web/CLI throws `runtime:-32603` when attempting to use the latest model, blocking agent-mode coding sessions entirely.
- **Why it matters:** Core model availability failure prevents users from accessing the tool's primary functionality.
- [github/copilot-cli#3997](https://github.com/github/copilot-cli/issues/3997)

### 3. 🔴 BYOK Rejected in `--acp` Mode — Regression (#4016)
**[OPEN]** Custom provider configurations via `COPILOT_PROVIDER_*` work in `copilot -p` but fail with `-32000 Authentication required` in `--acp --stdio` mode. Regression introduced between v1.0.61–v1.0.68.
- **Why it matters:** Breaks enterprise ACP integrations that rely on BYOK; previously fixed, now broken again.
- [github/copilot-cli#4016](https://github.com/github/copilot-cli/issues/4016)

### 4. MCP `tools/list` Pagination Not Followed (#4006)
**[OPEN]** The CLI ignores `nextCursor` in MCP server responses, loading only the first page of tools. This violates the MCP specification.
- **Why it matters:** Any MCP server with more tools than a single page can return will silently lose capabilities.
- [github/copilot-cli#4006](https://github.com/github/copilot-cli/issues/4006)

### 5. Scrollbar Breaks Text Rendering on Windows (#3501)
**[OPEN]** The vertical scrollbar causes text misalignment across Windows Console Host and Terminal. 9 👍 reactions — the highest engagement of any open issue.
- **Why it matters:** Degrades readability for a large portion of the user base on the most popular desktop OS.
- [github/copilot-cli#3501](https://github.com/github/copilot-cli/issues/3501)

### 6. MCP OAuth Fails for Non-First-Party HTTP Servers (#4017)
**[OPEN]** Remote MCP servers (e.g., Atlassian, incident.io) configured with `"type": "http"` silently fail authentication — no browser popup, no error message.
- **Why it matters:** Blocks integration with the growing ecosystem of third-party MCP providers.
- [github/copilot-cli#4017](https://github.com/github/copilot-cli/issues/4017)

### 7. Feature: Custom Model Endpoint Support (#4003)
**[OPEN]** Requests parity with VS Code's Language Models panel, allowing custom endpoints for local or private models in the CLI.
- **Why it matters:** Enterprise users and local-model developers need the same flexibility available in the IDE.
- [github/copilot-cli#4003](https://github.com/github/copilot-cli/issues/4003)

### 8. Persistent Command Deny-Rules (#3995)
**[OPEN]** `permissions-config.json` only supports allow rules. Users want to persistently block specific command families (e.g., `rm -rf`, `curl | sh`).
- **Why it matters:** Security-conscious teams need explicit deny capabilities, not just allow-lists.
- [github/copilot-cli#3995](https://github.com/github/copilot-cli/issues/3995)

### 9. `/login` Hangs in VS Code Dev Container (#1112)
**[CLOSED]** Device-code approval completes in the browser but the CLI never proceeds. 8 comments, 2 👍.
- **Why it matters:** Dev Container users are a growing segment; authentication blockers prevent adoption. Now closed — resolution pending verification.
- [github/copilot-cli#1112](https://github.com/github/copilot-cli/issues/1112)

### 10. Rendering Broken When Adding MCP Server via `/mcp` (#4014)
**[OPEN]** The TUI rendering corrupts when using `/mcp add` on Windows (v1.0.69-0), making the flow unusable.
- **Why it matters:** MCP server setup is a first-run experience; broken rendering creates a poor第一印象.
- [github/copilot-cli#4014](https://github.com/github/copilot-cli/issues/4014)

---

## Key PR Progress

Only **2 pull requests** were updated in the past 24 hours, and neither contains meaningful contributions to the codebase:

| PR | Title | Status |
|---|---|---|
| [#3880](https://github.com/github/copilot-cli/pull/3880) | "beyond the streets of amaerica" | Spam — unrelated React component snippet |
| [#3873](https://github.com/github/copilot-cli/pull/3873) | "1000Add initial console log for greeting" | Spam — no substantive code changes |

**No actionable PRs to report.** The project appears to be in a period where community contributions are minimal or low-quality, placing more burden on maintainers to drive development internally.

---

## Feature Request Trends

| Trend | Key Issues | Signal Strength |
|---|---|---|
| **MCP Ecosystem Maturity** | #4006, #4017, #4004, #4014, #3893 | 🔥🔥🔥 — Multiple bugs across pagination, OAuth, plugin registration, and rendering |
| **BYOK / Custom Model Flexibility** | #4003, #4016, #4012 | 🔥🔥🔥 — Demand for VS Code parity, ACP compatibility, and broader model support |
| **Terminal Rendering & UX Polish** | #3501, #4009, #4018, #3570, #4010 | 🔥🔥 — Scrollbar, copy-paste, scroll speed, and touch input all need attention |
| **Permission & Security Controls** | #3995, #3165 | 🔥🔥 — Deny-rules and compound command auto-approval gaps |
| **Automation & Non-Interactive Use** | #4011, #3829 | 🔥 — Batch/scripted workflows and async slash commands |

---

## Developer Pain Points

1. **Terminal rendering is fragile.** The scrollbar feature introduced in recent versions has cascading issues: text misalignment (#3501), clipboard corruption on mouse-select (#4009), excessive scroll speed (#4018), and broken touch scrolling (#3570). These affect daily usability across Windows and macOS.

2. **MCP integration is half-baked.** Pagination is ignored (#4006), OAuth silently fails for third-party servers (#4017), plugin-installed MCP servers aren't registered (#4004), and the `/mcp add` UI is broken (#4014). Developers trying to extend Copilot CLI with external tools are hitting walls at every step.

3. **BYOK configuration is unreliable.** Custom providers work in some modes but not others (#4016), reasoning effort flags error on valid models (#4012), and enterprise billing entities intermittently fail (#4005). The "bring your own key" story needs stabilization.

4. **Agent reliability is questionable.** The infinite planning loop (#3158) and model unavailability errors (#3997) suggest the agentic workflow is fragile under real-world conditions, especially as context windows fill up.

5. **Authentication flows break in non-standard environments.** Dev Containers (#1112), ACP mode (#4016), and non-first-party MCP servers (#4017) all exhibit auth failures — suggesting the login pipeline doesn't gracefully handle proxied, containerized, or federated identity scenarios.

---

*Data sourced from [github.com/github/copilot-cli](https://github.com/github/copilot-cli) on 2026-07-03. Spam issues (#3226, #3231–#3234) and irrelevant PRs excluded from analysis.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest - 2026-07-03

## 1. Today's Highlights
Development activity on the Kimi Code CLI repository was relatively focused over the last 24 hours, with no new releases published. The community's efforts were directed toward improving cross-platform terminal compatibility—specifically fixing multimodal clipboard pasting in Windows environments—and resolving network stability issues for developers utilizing secure tunneling tools like Tailscale. 

*(Note: As per the instructions, the "Releases" section is omitted as there were no new versions published in the last 24 hours. Additionally, because only 1 Issue and 1 PR were updated in this timeframe, the "Hot Issues" and "Key PR Progress" sections reflect the single available item rather than padding with unverified data.)*

## 3. Hot Issues
*Note: Only 1 issue was updated in the last 24 hours.*

*   **[#1111 [CLOSED] [bug] kimi web use tailscale websocket connection error](https://github.com/MoonshotAI/kimi-cli/issues/1111)**
    *   **Why it matters:** Developers utilizing zero-trust network architectures or secure remote development setups (via Tailscale) were experiencing WebSocket connection failures when using the Kimi web interface. Resolving this is critical for enterprise users and remote teams who require secure tunneling for their AI development workflows.
    *   **Community Reaction:** The issue was successfully closed, indicating the maintainers have patched the WebSocket handshake/routing logic to be compatible with Tailscale's network overlay.

## 4. Key PR Progress
*Note: Only 1 PR was updated in the last 24 hours.*

*   **[#2481 [OPEN] fix(shell): read clipboard media on BracketedPaste for Windows terminals](https://github.com/MoonshotAI/kimi-cli/pull/2481)**
    *   **Feature/Fix Description:** This PR addresses a silent failure when users attempt to paste binary content (such as images) using `Ctrl+V` in Windows Terminal or VS Code's integrated terminal. Because these terminals handle `Ctrl+V` natively and emit a `BracketedPaste` event, binary data is stripped and cannot be carried as text. The fix updates `_handle_bracketed_paste()` to intercept the event and explicitly attempt to read clipboard media, restoring seamless multimodal input for Windows users.

## 5. Feature Request Trends
Based on the recent activity, the primary development trend is **Environment & Network Interoperability**. 
*   **Secure Network Compatibility:** There is a clear push to ensure Kimi CLI's underlying WebSocket connections are robust enough to handle the routing and encapsulation of secure tunnels (like Tailscale).
*   **Modern Terminal Integration:** Developers are actively improving how the CLI interacts with modern terminal emulators, specifically ensuring that advanced terminal features (like Bracketed Paste) do not break core UX flows like image uploading.

## 6. Developer Pain Points
*   **Multimodal Pasting in Windows/VS Code:** Windows developers using VS Code or Windows Terminal faced a frustrating UX bug where pasting images or binary data silently failed. The terminal's native handling of `Ctrl+V` bypassed the CLI's standard text-parsing logic, blocking a key multimodal workflow.
*   **WebSocket Drops in Secure Tunnels:** Developers working in secure, remote, or zero-trust environments (using Tailscale) experienced connection errors. This highlights a recurring pain point where AI CLI tools fail to maintain persistent WebSocket connections when routed through virtual private networks or secure overlays, disrupting remote development sessions.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

### 1. Today's Highlights
The OpenCode community is actively addressing critical stability and context management challenges, highlighted by widespread reports of temporary inference unavailability for Deepseek v4 Flash and silent failures when writing large files. On the development front, significant architectural progress is being made with the introduction of the CodeMode runtime, MCP adapters, and experimental session-to-session messaging, alongside UI refinements for the desktop app and terminal.

### 2. Releases
No new releases were published in the last 24 hours.

### 3. Hot Issues
1. **#34893 [OPEN] Inference is temporarily unavailable**: Users report Deepseek v4 Flash inference dropping on Ubuntu. With 36 comments and 25 👍, this highlights critical reliance on stable provider routing. [Link](https://github.com/anomalyco/opencode/issues/34893)
2. **#4046 [CLOSED] Shift-return does not input newline since 1.0**: A major UX regression where standard newline shortcuts fail. Garnered 30 comments, showing frustration over broken basic TUI interactions. [Link](https://github.com/anomalyco/opencode/issues/4046)
3. **#19604 [

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

### 1. Today's Highlights
The Pi community is heavily focused on stabilizing core agent loops against null content crashes from reasoning models and improving the robustness of the edit tool for strict JSON schemas. Additionally, there is a strong push for expanding provider support, with new integrations for DeepInfra, GLM, and Azure Cognitive Services, alongside UX enhancements like "Zen mode" for the TUI.

### 2. Releases
No new releases were published in the last 24 hours.

### 3. Hot Issues
1. **[ #4228 ](https://github

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-03

## Today's Highlights

Qwen Code shipped **v0.19.5 stable** with hardened daemon-managed channel workers and deferred web-shell session creation, alongside a new **cua-driver-rs v0.7.0** featuring a codesigned macOS universal binary and relative-coordinate support. The community is heavily focused on fixing streaming tool-call edge cases, improving mobile/web-shell UX, and pushing forward background automation capabilities with daemon scheduling and channel integrations.

---

## Releases

### v0.19.5 (Stable)
- **feat(cli):** Harden daemon-managed channel worker ([#6098](https://github.com/QwenLM/qwen-code/pull/6098))
- **fix(web-shell):** Defer session creation until first prompt

### v0.19.5-nightly.20260703
- **fix(web-shell):** Cut mobile session-switch jank via memoized timeline signature and replay-first dispatch ([#618](https://github.com/QwenLM/qwen-code/pull/618))

### cua-driver-rs v0.7.0
- Prebuilt binaries with relative-coordinate fork vendored under `packages/cua-driver`
- **macOS:** Codesigned + notarized universal binary + `QwenCuaDriver.app`
- **Linux:** Unsigned (x86_64 + arm64, glibc 2.31 floor)
- **Windows:** Unsigned (x86_64 + arm64)

---

## Hot Issues

| # | Issue | Why It Matters |
|---|-------|---------------|
| 1 | [#6249](https://github.com/QwenLM/qwen-code/issues/6249) **Streaming tool calls with empty `arguments` silently dropped** | P1 bug — legal no-parameter tool calls are dropped by the streaming parser, causing infinite "empty response text" retry loops. Actively breaking workflows. |
| 2 | [#6181](https://github.com/QwenLM/qwen-code/issues/6181) **Mobile session switching is janky** | P1 web-shell perf issue — full sync transcript render + uncompressed history load causes multi-second freezes on mobile. Community provided deep root-cause analysis across 4 cost layers. |
| 3 | [#6144](https://github.com/QwenLM/qwen-code/issues/6144) **Incorrect context window calculation** | Core token-management bug affecting Qwen3-Coder instances; users report wrong `ctx-size` handling with custom `models.ini` configurations. |
| 4 | [#6175](https://github.com/QwenLM/qwen-code/issues/6175) **Thinking display shows "Thought for 0s" + no streaming** | P2 — OpenAI-compatible models outputting `reasoning_content` show broken thinking duration and non-streaming output, degrading the reasoning UX. |
| 5 | [#6112](https://github.com/QwenLM/qwen-code/issues/6112) **`/schedule` daemon for always-on local routines** | Highly requested background automation feature — users want cron-scheduled tasks running without an interactive session, analogous to Claude Code's desktop scheduled tasks. |
| 6 | [#6246](https://github.com/QwenLM/qwen-code/issues/6246) **qwen_code cannot recognize its own process** | Dangerous shell-safety bug — asking the agent to stop a backend Node.js process it spawned kills *all* Node processes including itself. |
| 7 | [#6244](https://github.com/QwenLM/qwen-code/issues/6244) **Extension capability changes not communicated to model** | Core sync issue — enabling/disabling extensions mid-session doesn't reliably update the model's view of available tools and commands. |
| 8 | [#6195](https://github.com/QwenLM/qwen-code/issues/6195) **Daemon UI for vision bridge model selection** | CLI supports `/model --vision` but the daemon/web-shell has no UI equivalent. Ready-for-agent and actively discussed. |
| 9 | [#6231](https://github.com/QwenLM/qwen-code/issues/6231) **Track npm package size after native audio bundling** | Package exceeded npmmirror's 80MiB limit, breaking mirror installs. Community pushing for size visibility in release CI. |
| 10 | [#6208](https://github.com/QwenLM/qwen-code/issues/6208) **WeCom intelligent robot channel adapter** | Enterprise integration request — users want built-in WeCom channel support for `qwen channel` with API-mode bot configuration. |

---

## Key PR Progress

| PR | Title | Description |
|----|-------|-------------|
| [#6250](https://github.com/QwenLM/qwen-code/pull/6250) | **Preserve no-argument tool calls with empty arguments string** | Fixes the streaming parser to emit `args: {}` instead of silently dropping tool calls with empty argument buffers. Includes regression tests. |
| [#6240](https://github.com/QwenLM/qwen-code/pull/6240) | **Preserve legacy OpenAI function calls** | Converts non-streaming `message.function_call` and streaming `delta.function_call` into proper Gemini `functionCall` parts. |
| [#6243](https://github.com/QwenLM/qwen-code/pull/6243) | **Preserve descriptionless tools for OpenAI** | Keeps valid tools visible to OpenAI-compatible providers even when Gemini/MCP declarations lack a description field. |
| [#6225](https://github.com/QwenLM/qwen-code/pull/6225) | **Preserve tools prefix for Anthropic prompt-cache hits** | Fixes guaranteed cache misses in side-queries by keeping the `tools` array identical to the main conversation's cache key. |
| [#6242](https://github.com/QwenLM/qwen-code/pull/6242) | **Custom @ mention panel for web-shell** | Replaces inline autocomplete with a multi-level reference panel (files, extensions, MCP resources) with search and keyboard navigation. |
| [#6235](https://github.com/QwenLM/qwen-code/pull/6235) | **Vendor mobile-mcp with relative coordinates** | Forks `mobile-next/mobile-mcp` into the monorepo with an opt-in 0–1000 relative coordinate shim, mirroring cua-driver's approach. |
| [#5953](https://github.com/QwenLM/qwen-code/pull/5953) | **LSP Server hot reload** | Detects semantic changes to `.lsp.json` during active sessions and reloads native LSP configuration without restart. |
| [#6238](https://github.com/QwenLM/qwen-code/pull/6238) | **Fresh tool-call budget for Stop-hook continuations** | Each blocking Stop-hook continuation (e.g., `/goal` iterations) now gets its own tool-call budget instead of sharing a single per-turn cap. |
| [#6245](https://github.com/QwenLM/qwen-code/pull/6245) | **Notify model when extension capabilities change** | Tracks MCP tools, skills, and agent subtypes already announced; queues deltas and drains them into the model context on change. |
| [#5780](https://github.com/QwenLM/qwen-code/pull/5780) | **`qwen update` and `/update` commands** | Adds CLI and slash commands that query the npm registry for new releases and auto-install (standalone) or guide through manual update steps. |

---

## Feature Request Trends

- **Background Automation & Daemon Scheduling** — Strong demand for cron-scheduled tasks (`/schedule`), configurable job expiration (#6167), and daemon-managed channel workers (#5976) that run without interactive sessions.
- **Enterprise Channel Integrations** — WeCom (#6208) and DingTalk proactive send (#6168) adapters for routing agent output to Chinese enterprise messaging platforms.
- **Web-Shell UX Overhaul** — Mobile performance (#6181), custom @ mention panels (#6242), session restore feedback (#6220), keyboard accessibility (#6127), and version display (#6222).
- **Mobile & Vision MCP** — Relative-coordinate support for mobile device control (#6235) and daemon UI for vision bridge model selection (#6195).
- **Self-Update & Distribution** — Auto-update commands (#5780), npm package size tracking (#6231), and mirror sync complaints (#6218, #6187).

---

## Developer Pain Points

1. **Streaming parser fragility** — Edge cases in tool-call streaming (empty arguments, legacy function calls, descriptionless tools) cause silent drops and retry loops. Multiple PRs (#6240, #6243, #6250) are converging to fix this class of bugs.
2. **Distribution & mirror lag** — Taobao mirror 3 versions behind (#6218), Homebrew updates slow (#6187), and npm package exceeding 80MiB mirror limits (#6231) — Chinese developers especially impacted.
3. **Mobile web-shell performance** — Session switching on mobile causes multi-second freezes due to unoptimized transcript rendering and polling during drawer animations (#6181).
4. **Model context sync** — Extension capability changes (#6244), thinking duration display (#6175), and context window miscalculation (#6144) all point to gaps between runtime state and what the model "sees."
5. **Shell safety on Windows/macOS** — Process self-termination (#6246), garbled output with non-UTF-8 code pages (#6214), and missing sandbox profiles (#6089) indicate platform-specific rough edges in command execution.
6. **Security scanner false positives** — Bundled install hooks and IOC literals in prompts trigger malicious-package flags (#6163), requiring regex obfuscation workarounds (#6247) and audit gates (#6062).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI / CodeWhale Community Digest
**Date:** 2026-07-03 | **Analyst:** Technical AI Developer Tools Analyst

## 1. Today's Highlights
The community is heavily focused on stabilizing the newly merged v0.8.67 release, with maintainers executing a rigorous adversarial audit to fix silent failures in the onboarding flow, skill dispatcher, and Fleet sub-agent memory bounds. Concurrently, significant progress is being made on dynamic MCP server management and auto-discovery of project rules, shifting the TUI toward a more autonomous and context-aware architecture. 

## 2. Hot Issues
*The most active and impactful discussions in the community over the last 24 hours.*

1. **[Issue #3793](https://github.com/Hmbown/CodeWhale/issues/3793): Guided Localized Constitution Creator** (14 comments)
   *Why it matters:* Replaces the blank prompt editor with a language-first, guided UX for creating the "constitution" (base prompt), while strictly preventing autonomy settings from overriding runtime security. 
2. **[Issue #1812](https://github.com/Hmbown/CodeWhale/issues/1812): TUI Freeze on Windows (crossterm-poll)** (10 comments)
   *Why it matters:* A critical reliability bug where the UI becomes completely unresponsive on Windows 11 without crashing the process. High community engagement indicates this is a major blocker for Windows users.
3. **[Issue #3867](https://github.com/Hmbown/CodeWhale/issues/3867): Project-Scope Instructions & Rules Auto-Discovery** (7 comments) **[CLOSED]**
   *Why it matters:* The instruction system was

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

### 1. Today's Highlights
The ComfyUI community is heavily focused on addressing recent performance regressions in video generation (LTX-2.3) and memory management, alongside critical security patches for API vulnerabilities. Development is actively expanding native support for 3D generation (TRELLIS2, SeedVR2) and audio models, while users express growing frustration with frontend UI regressions and architectural shifts.

### 2. Releases
*No new releases in the last 24 hours.*

### 3. Hot Issues
1. **[Issue #14618](https://github.com/comfyanonymous/ComfyUI/issues/14618)**: *ComfyUI keeps loading models on every prompt change.* A high-impact UX and

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Community Digest - 2026-07-03

## 1. Today's Highlights
Ollama is making significant strides in agentic workflows with the introduction of a core agent harness and a new interactive terminal UI. Meanwhile, the community remains heavily focused on hardware compatibility, particularly addressing AMD ROCm/Vulkan stability and severe performance regressions introduced in the recent v0.30.x release cycle.

## 2. Releases
No new releases in the last 24 hours.

## 3. Hot Issues
1. **[ollama/ollama#7865](https://github.com/ollama/ollama/issues/7865) [OPEN] Model Context Protocol (MCP) support** - The most highly requested feature (218 👍, 60 comments). The community is pushing for standardized external data source interactions to accelerate open-source collaboration.
2. **[ollama/ollama#8843](https://github.com/ollama/ollama/issues/8843) [CLOSED] Ollama broken on AMD MI300x ROCm gfx942** - Highlights persistent friction with high-end AMD datacenter GPUs and ROCm 6.3.1 compatibility (31 comments).
3. **[ollama/ollama#1

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

⚠️ Summary generation failed.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*